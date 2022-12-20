import { mono, Void } from "rakun";
import atom from "../../atom";
import { ZoldyStoreImpl, ZoldySnapshotImpl } from "../../snapshot/impl";
import { zoldySnapshotProvider } from "../../snapshot/provider";

describe('atom set', () => {

    test('atom set', async () => {

        const user = atom({
            path: "users",
            default: mono.just(1)
        })
        const store = new ZoldyStoreImpl({})
        const snapshot = new ZoldySnapshotImpl(store, null);
        const result = await zoldySnapshotProvider.define(snapshot)
            .zipWhen(() => mono.just(store.states))
            .zipWhen(() => user.set(25))
            .pipe(([v1, v2]) => [...v1, v2])
            .zipWhen(() => mono.just(store.states))
            .pipe(([v1, v2]) => [...v1, v2])
            .zipWhen(() => user.get())
            .pipe(([v1, v2]) => [...v1, v2])
            .zipWhen(() => mono.just(store.states))
            .pipe(([v1, v2]) => [...v1, v2])
            .blockFirst()
        expect(result).toStrictEqual([
            Void,
            {},
            Void,
            {
                users: {
                    dependencies: [],
                    state: "hasValue",
                    value: 25
                }
            },
            25,
            {
                users: {
                    dependencies: [],
                    state: "hasValue",
                    value: 25
                }
            }
        ]);
    });

});