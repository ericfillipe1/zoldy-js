import { mono } from "rakun";
import atomFamily from "../../atomFamily";
import param from "../../param";
import { ZoldyStoreImpl, ZoldySnapshotImpl } from "../../snapshot/impl";
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

        const store = new ZoldyStoreImpl({})
        const snapshot = new ZoldySnapshotImpl(store, null);
        const result = await zoldySnapshotProvider.define(snapshot)
            .flatPipe(() => usersPermission("1234").get())
            .zipWhen(() => user("1234").set({ name: "ericfillipe", id: "1234" }).then(usersPermission("1234").get()))
            .zipWhen(() => user("1234").reset().then(usersPermission("1234").get()))
            .pipe(([v1, v2]) => [...v1, v2])
            .blockFirst()
        expect(result).toStrictEqual(
            [
                {
                    "user": {
                        "name": "eric",
                        "id": "1234"
                    },
                    "id": "1234",
                    "rules": "admin"
                },
                {
                    "user": {
                        "name": "ericfillipe",
                        "id": "1234"
                    },
                    "id": "1234",
                    "rules": "admin"
                },
                {
                    "user": {
                        "name": "eric",
                        "id": "1234"
                    },
                    "id": "1234",
                    "rules": "admin"
                }
            ]
        );

    });

});