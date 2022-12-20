import { mono } from "rakun";
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
            .flatPipe(() => user("123").get())
            .zipWhen(() => user("123").set("652").then(user("123").get()))
            .zipWhen(() => user("123").reset().then(user("123").get()))
            .pipe(([v1, v2]) => [...v1, v2])
            .blockFirst()

        expect(result).toStrictEqual([
            "1231",
            "652",
            "1231",
        ]);
    });

});