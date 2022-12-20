import { mono } from "rakun";
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
            .flatPipe(() => user.get())
            .zipWhen(() => user.set(124).then(user.get()))
            .zipWhen(() => user.reset().then(user.get()))
            .pipe(([v1, v2]) => [...v1, v2])
            .blockFirst()
        expect(result).toStrictEqual([
            1,
            124,
            1
        ]);
    });

});