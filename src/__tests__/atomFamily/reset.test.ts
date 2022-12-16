import { mono } from "rakun";
import atomFamily from "../../atomFamily";
import param from "../../param";
import { ZoldySnapshotCacheImpl, ZoldySnapshotImpl } from "../../snapshot/impl";
import { zoldySnapshotProvider } from "../../snapshot/provider";

describe('atom set', () => {

    test('atom set', async () => {

        const user = atomFamily({
            path: "users/:id",
            params: param.string,
            default: (id) => mono.just({
                name: 'eric',
                id
            })
        })

        const usersPermission = atomFamily({
            params: param.string,
            path: "users-permission/:id",
            default: (id) => user(id).get().pipe(user => ({
                user,
                id,
                rules: 'admin'
            }))
        })

        const cache = new ZoldySnapshotCacheImpl({})
        const snapshot = new ZoldySnapshotImpl(cache, null);
        const result = await zoldySnapshotProvider.define(snapshot)
            .flatPipe(() => usersPermission("1234").get())
            .zipWhen(() => user("1234").set({ name: "ericfillipe", id: "1234" }).then(usersPermission("1234").get()))
            .blockFirst()

        expect(result).toStrictEqual(
            [
                {
                    id: "1234",
                    user: {
                        id: "1234",
                        name: "eric"
                    },
                    rules: "admin"
                },
                {
                    id: "1234",
                    user: {
                        id: "1234",
                        name: "ericfillipe"
                    },
                    rules: "admin"
                }
            ]
        );

    });

});