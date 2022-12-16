import { mono } from "rakun";
import atom from "../../atom";
import { ZoldySnapshotCacheImpl, ZoldySnapshotImpl } from "../../snapshot/impl";
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

        const cache = new ZoldySnapshotCacheImpl({})
        const snapshot = new ZoldySnapshotImpl(cache, null);
        const result = await zoldySnapshotProvider.define(snapshot)
            .flatPipe(() => usersPermission.get())
            .zipWhen(() => user.set({ name: "ericfillipe" }).then(usersPermission.get()))
            .blockFirst()
        expect(result).toStrictEqual(
            [
                {
                    user: {
                        name: "eric"
                    },
                    rules: "admin"
                },
                {
                    user: {
                        name: "ericfillipe"
                    },
                    rules: "admin"
                }
            ]
        );
    });

});