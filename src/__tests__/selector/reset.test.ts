import { mono } from "rakun";
import selector from "../../selector/static";
import { ZoldyStoreImpl, ZoldySnapshotImpl } from "../../snapshot/impl";
import { zoldySnapshotProvider } from "../../snapshot/provider";
import { ZoldyStoreState } from "../../types";

describe('selector reset', () => {

    test('selector reset', async () => {

        let index = 0;
        const userIndex = selector({
            path: "users-permission",
            get: mono.fromCallBack(() => {
                return [index++]
            })
        })

        const store = new ZoldyStoreImpl({})
        const snapshot = new ZoldySnapshotImpl(store, null);
        const items: ZoldyStoreState[] = []
        const result = await zoldySnapshotProvider.define(snapshot)
            .zipWhen(() => userIndex.subscribe((e) =>
                items.push(e)
            ))
            .flatPipe(() => userIndex.get())
            .zipWhen(() => userIndex.get())
            .zipWhen(() => userIndex.reset().then(userIndex.get()))
            .pipe(([v1, v2]) => [...v1, v2])
            .blockFirst()

        expect(result).toStrictEqual(
            [
                0,
                0,
                1
            ]
        );

        expect(items).toStrictEqual(
            [
                {
                    "dependencies": [],
                    "state": "hasValue",
                    "value": 0,
                    "version": 1,
                },
                {
                    "dependencies": [],
                    "state": "cleanValue",
                    "value": null,
                    "version": 2,
                },
                {
                    "dependencies": [],
                    "state": "hasValue",
                    "value": 1,
                    "version": 3,
                }
            ]
        );
    });

});