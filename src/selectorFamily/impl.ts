
import { RakunMono, Void } from "rakun";
import { ZoldyParamsImpl } from "../param/impl";
import { ZoldyParamsBuild } from "../param/interface";
import { zoldySnapshotProvider } from "../snapshot/provider";
import { getSnapshotOrThrow } from "../snapshot/static";
import { ZoldyStateFamily, ZoldyValueFamily } from "../source";
import { GetFamily, SetFamily } from "../types";
import { ZoldyAtomFamilyBuildConfig, ZoldyAtomFamilyBuildConfigReadOnly } from "./interface";



export class ZoldyAtomFamilyValueImpl<P, T> extends ZoldyValueFamily<P, T>  {
    _get: GetFamily<P, T>;
    paramsBuild: ZoldyParamsBuild<P>;
    constructor(config: ZoldyAtomFamilyBuildConfigReadOnly<P, T>) {
        super();
        this.paramsBuild = new ZoldyParamsImpl<P>(config.path, config.params)
        this._get = config['get']
    }
    get(params: P): RakunMono<T> {
        var path = this.paramsBuild.encode(params)
        return zoldySnapshotProvider.get()
            .flatPipe(getSnapshotOrThrow)
            .flatPipe(zoldyContext => {
                return zoldyContext.get({
                    get: () => this['_get'](params),
                    path
                });
            })
    }
}


export class ZoldyAtomFamilyStateImpl<P, T> extends ZoldyStateFamily<P, T>  {
    private _set: SetFamily<P, T>;
    get paramsBuild() {
        return this.zoldyValueFamily.paramsBuild
    }
    constructor(config: ZoldyAtomFamilyBuildConfig<P, T>, private zoldyValueFamily: ZoldyValueFamily<P, T>) {
        super();
        this._set = config['set']
    }
    set(params: P, value: T): RakunMono<Void> {
        return this._set(params, value);
    }
    get(params: P): RakunMono<T> {
        return this.zoldyValueFamily.get(params)
    }
}