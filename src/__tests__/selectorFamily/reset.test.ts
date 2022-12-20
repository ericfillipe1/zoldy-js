import { mono } from "rakun";
import { selectorFamily } from "../..";
import param from "../../param";
import { ZoldySnapshotImpl, ZoldyStoreImpl } from "../../snapshot/impl";
import { zoldySnapshotProvider } from "../../snapshot/provider";

describe('selectorFamily reset', () => {

    test('selectorFamily reset', async () => {
        let index = 0;
        const userIndex = selectorFamily({
            path: "users-permission",
            params: param.string,
            get: (p) => mono.fromCallBack(() => {
                return [p + (index++)]
            })
        })

        const store = new ZoldyStoreImpl({})
        const snapshot = new ZoldySnapshotImpl(store, null);
        const result = await zoldySnapshotProvider.define(snapshot)
            .flatPipe(() => userIndex("123").get())
            .zipWhen(() => userIndex("123").get())
            .zipWhen(() => userIndex("123").reset().then(userIndex("123").get()))
            .pipe(([v1, v2]) => [...v1, v2])
            .blockFirst()

        expect(result).toStrictEqual(
            [
                "1230",
                "1230",
                "1231",
            ]
        );
    });

});