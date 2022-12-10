import { mono, VoidValue } from "rakun";
import atom from "../../atom";
import { ZoldySnapshotImpl } from "../../snapshot/impl";
import { zoldySnapshotProvider } from "../../snapshot/provider";

describe('atom set', () => {

    test('atom set', async () => {

        const user = atom({
            path: "users",
            default: mono.just(1)
        })
        const snapshot = new ZoldySnapshotImpl(null);
        const result = await zoldySnapshotProvider.define(snapshot)
            .zipWhen(() => mono.just(snapshot.cache))
            .zipWhen(() => user.get())
            .pipe(([v1, v2]) => [...v1, v2])
            .zipWhen(() => mono.just(snapshot.cache))
            .pipe(([v1, v2]) => [...v1, v2])
            .blockFirst()
        expect(result).toStrictEqual([
            VoidValue,
            {
                users: {
                    state: "hasValue",
                    value: 1,
                    version: 1
                }
            },
            1,
            {
                users: {
                    state: "hasValue",
                    value: 1,
                    version: 1
                }
            }
        ]);
    });

});