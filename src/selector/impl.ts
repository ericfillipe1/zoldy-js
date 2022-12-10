
import { mono, RakunMono, Void, WrappedValue_OPAQUE } from "rakun";
import { zoldySnapshotProvider } from "../snapshot/provider";
import { getSnapshotOrThrow } from "../snapshot/static";
import { ZoldySelector, ZoldySelectorBuildConfig } from "./interface";


export class ZoldySelectorImpl<T> implements ZoldySelector<T>  {
    _get: RakunMono<T>;
    path: string;
    constructor(config: ZoldySelectorBuildConfig<T>) {
        let result = config['get'];
        this.path = config['path'];
        if (result instanceof Promise) {
            this._get = mono.fromPromise(result)
        } else if (WrappedValue_OPAQUE in (result as any)) {
            this._get = result as RakunMono<T>
        } else {
            this._get = mono.just(result as T)
        }
    }

    set(value: T): RakunMono<Void> {
        var path = this.path
        return zoldySnapshotProvider.get()
            .flatPipe(getSnapshotOrThrow)
            .flatPipe(zoldyContext => {
                return zoldyContext
                    .set({
                        value,
                        path
                    });
            })
    }
    get(): RakunMono<T> {
        var path = this.path
        return zoldySnapshotProvider.get()
            .flatPipe(getSnapshotOrThrow)
            .flatPipe(zoldyContext => {
                return zoldyContext.get({
                    get: () => this["_get"],
                    path
                });
            })
    }

}