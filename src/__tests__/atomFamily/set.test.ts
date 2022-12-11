import { mono, VoidValue } from "rakun";
import atomFamily from "../../atomFamily";
import param from "../../param";
import { ZoldySnapshotImpl } from "../../snapshot/impl";
import { zoldySnapshotProvider } from "../../snapshot/provider";


describe('atom set', () => {

    const user = atomFamily({
        path: "users/:userId",
        params: param.string,
        default: (userId) => mono.just(userId + 1)
    })
    test('atom set', async () => {
        const snapshot = new ZoldySnapshotImpl(null);
        const result = await zoldySnapshotProvider.define(snapshot)
            .zipWhen(() => mono.just(snapshot.cache))
            .zipWhen(() => user.set("test", "25"))
            .pipe(([v1, v2]) => [...v1, v2])
            .zipWhen(() => mono.just(snapshot.cache))
            .pipe(([v1, v2]) => [...v1, v2])
            .zipWhen(() => user.get("test"))
            .pipe(([v1, v2]) => [...v1, v2])
            .zipWhen(() => mono.just(snapshot.cache))
            .pipe(([v1, v2]) => [...v1, v2])
            .blockFirst()
        expect(result).toStrictEqual([
            VoidValue,
            {
                "users/test": {
                    state: "hasValue",
                    value: 25,
                    version: 1
                }
            },
            VoidValue,
            {
                "users/test": {
                    state: "hasValue",
                    value: 25,
                    version: 1
                }
            },
            25,
            {
                "users/test": {
                    state: "hasValue",
                    value: 25,
                    version: 1
                }
            }
        ]);
    });

});