import { mono, Void } from "rakun";
import atom from "../../atom";
import { ZoldySnapshotCacheImpl, ZoldySnapshotImpl } from "../../snapshot/impl";
import { zoldySnapshotProvider } from "../../snapshot/provider";

describe('atom set', () => {

    test('atom set', async () => {

        const user = atom({
            path: "users",
            default: mono.just(1)
        })
        const cache = new ZoldySnapshotCacheImpl({})
        const snapshot = new ZoldySnapshotImpl(cache, null);
        const result = await zoldySnapshotProvider.define(snapshot)
            .zipWhen(() => mono.just(cache.data))
            .zipWhen(() => user.get())
            .pipe(([v1, v2]) => [...v1, v2])
            .zipWhen(() => mono.just(cache.data))
            .pipe(([v1, v2]) => [...v1, v2])
            .blockFirst()
        expect(result).toStrictEqual([
            Void,
            {},
            1,
            {
                users: {
                    dependencies: [],
                    state: "hasValue",
                    value: 1,
                    version: 1
                }
            }
        ]);
    });

});