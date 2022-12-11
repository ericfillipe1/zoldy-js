
import { mono, RakunMono, Void, WrappedValue_OPAQUE } from "rakun";
import { zoldySnapshotProvider } from "../snapshot/provider";
import { getSnapshotOrThrow } from "../snapshot/static";
import { ZoldyState } from "../source";
import { ZoldyAtomBuildConfig } from "./interface";


export class ZoldyAtomImpl<T> implements ZoldyState<T>  {
    private _default: RakunMono<T>;
    path: string;
    constructor(config: ZoldyAtomBuildConfig<T>) {
        let result = config['default'];
        this.path = config['path'];
        if (result instanceof Promise) {
            this._default = mono.fromPromise(result)
        } else if (WrappedValue_OPAQUE in (result as any)) {
            this._default = result as RakunMono<T>
        } else {
            this._default = mono.just(result as T)
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
                    get: () => this["_default"],
                    path
                });
            })
    }

}