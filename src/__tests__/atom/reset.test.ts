import { mono } from "rakun";
import atom from "../../atom";
import { ZoldyStoreImpl, ZoldySnapshotImpl } from "../../snapshot/impl";
import { zoldySnapshotProvider } from "../../snapshot/provider";

describe('atom set', () => {

    test('atom set', async () => {

        const user = atom({
            path: "users",
            default: mono.just({
                name: 'eric'
            })
        })

        const usersPermission = atom({
            path: "users-permission",
            default: user.get().pipe(user => ({
                user,
                rules: 'admin'
            }))
        })

        const store = new ZoldyStoreImpl({})
        const snapshot = new ZoldySnapshotImpl(store, null);
        const result = await zoldySnapshotProvider.define(snapshot)
            .flatPipe(() => usersPermission.get())
            .zipWhen(() => user.set({ name: "ericfillipe" }).then(usersPermission.get()))
            .zipWhen(() => user.reset().then(usersPermission.get()))
            .pipe(([v1, v2]) => [...v1, v2])
            .blockFirst()

        expect(result).toStrictEqual(
            [
                { "user": { "name": "eric" }, "rules": "admin" },
                { "user": { "name": "ericfillipe" }, "rules": "admin" },
                { "user": { "name": "eric" }, "rules": "admin" }
            ]
        );
    });

});