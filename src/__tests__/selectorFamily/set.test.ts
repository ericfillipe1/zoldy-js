import { mono, Void } from "rakun";
import { selectorFamily } from "../..";
import atomFamily from "../../atomFamily";
import param from "../../param";
import { ZoldyStoreImpl, ZoldySnapshotImpl } from "../../snapshot/impl";
import { zoldySnapshotProvider } from "../../snapshot/provider";

describe('selectorFamily set', () => {

    test('selectorFamily set', async () => {

        const userData = atomFamily({
            path: "users-data/:userId",
            params: param.string,
            default: (p) => mono.just(1 + p)
        })

        const user = selectorFamily({
            path: "users",
            params: param.string,
            get: (p) => userData(p).get(),
            set: (p: string, v: string) => userData(p).set(v),
        })

        const store = new ZoldyStoreImpl({})
        const snapshot = new ZoldySnapshotImpl(store, null);
        const result = await zoldySnapshotProvider.define(snapshot)
            .flatPipe(() => user("123").get())
            .zipWhen(() => user("123").set("225"))
            .zipWhen(() => user("123").get())
            .pipe(([v1, v2]) => [...v1, v2])
            .zipWhen(() => userData("123").set("8"))
            .pipe(([v1, v2]) => [...v1, v2])
            .zipWhen(() => user("123").get())
            .pipe(([v1, v2]) => [...v1, v2])
            .blockFirst()
        expect(result).toStrictEqual(
            ["1123", Void, "225", Void, "8"]
        );
    });

});