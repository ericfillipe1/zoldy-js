import { mono, Void } from "rakun";
import atomFamily from "../../atomFamily";
import param from "../../param";
import { ZoldyStoreImpl, ZoldySnapshotImpl } from "../../snapshot/impl";
import { zoldySnapshotProvider } from "../../snapshot/provider";


describe('atom set', () => {

    const user = atomFamily({
        path: "users/:userId",
        params: param.string,
        default: (userId) => mono.just(userId + 1)
    })
    test('atom set', async () => {

        const store = new ZoldyStoreImpl({})
        const snapshot = new ZoldySnapshotImpl(store, null);
        const result = await zoldySnapshotProvider.define(snapshot)
            .zipWhen(() => mono.just(store.states))
            .zipWhen(() => user("test").set("25"))
            .pipe(([v1, v2]) => [...v1, v2])
            .zipWhen(() => mono.just(store.states))
            .pipe(([v1, v2]) => [...v1, v2])
            .zipWhen(() => user("test").get())
            .pipe(([v1, v2]) => [...v1, v2])
            .zipWhen(() => mono.just(store.states))
            .pipe(([v1, v2]) => [...v1, v2])
            .blockFirst()
        expect(result).toStrictEqual(
            [
                Void,
                {},
                Void,
                {
                    'users/test': {
                        dependencies: [],
                        state: "hasValue",
                        value: "25"
                    }
                },
                "25",
                {
                    'users/test': {
                        dependencies: [],
                        state: "hasValue",
                        value: "25"
                    }
                }
            ]
        );
    });

});