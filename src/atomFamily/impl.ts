
import { mono, RakunMono, Void, WrappedValue_OPAQUE } from "rakun";
import { ZoldyParamsImpl } from "../param/impl";
import { ZoldyParamsBuild } from "../param/interface";
import { zoldySnapshotProvider } from "../snapshot/provider";
import { getSnapshotOrThrow } from "../snapshot/static";
import { ZoldyStateFamily } from "../source";
import { ZoldyAtomFamilyBuildConfig } from "./interface";


export class ZoldyAtomFamilyImpl<P, T> extends ZoldyStateFamily<P, T>  {
    private _default: (params: P) => RakunMono<T>;
    paramsBuild: ZoldyParamsBuild<P>;
    constructor(config: ZoldyAtomFamilyBuildConfig<P, T>) {
        super();
        this.paramsBuild = new ZoldyParamsImpl<P>(config.path, config.params)
        this._default = (params: P) => {
            let result = config['default'](params);
            if (result instanceof Promise) {
                return mono.fromPromise(result)
            } else if (WrappedValue_OPAQUE in (result as any)) {
                return result as RakunMono<T>
            } else {
                return mono.just(result as T)
            }
        }
    }
    set(params: P, value: T): RakunMono<Void> {
        var path = this.paramsBuild.encode(params)
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
    get(params: P): RakunMono<T> {
        var path = this.paramsBuild.encode(params)
        return zoldySnapshotProvider.get()
            .flatPipe(getSnapshotOrThrow)
            .flatPipe(zoldyContext => {
                return zoldyContext.get({
                    get: () => this['_default'](params),
                    path
                });
            })
    }
}