import { RakunMono, Void } from "rakun";
import { ZoldyParamsBuild } from "../param/interface";
import { ZoldyStateFamily, ZoldyValueFamily } from "../source";
import { GetFamily } from "../types";
import { ZoldySelectorFamilyBuildConfig, ZoldySelectorFamilyBuildConfigReadOnly } from "./interface";
export declare class ZoldyAtomFamilyValueImpl<P, T> extends ZoldyValueFamily<P, T> {
    _get: GetFamily<P, T>;
    paramsBuild: ZoldyParamsBuild<P>;
    constructor(config: ZoldySelectorFamilyBuildConfigReadOnly<P, T>);
    get(params: P): RakunMono<T>;
}
export declare class ZoldyAtomFamilyStateImpl<P, T> extends ZoldyStateFamily<P, T> {
    private zoldyValueFamily;
    private _set;
    get paramsBuild(): ZoldyParamsBuild<P>;
    constructor(config: ZoldySelectorFamilyBuildConfig<P, T>, zoldyValueFamily: ZoldyValueFamily<P, T>);
    set(params: P, value: T): RakunMono<Void>;
    get(params: P): RakunMono<T>;
}
