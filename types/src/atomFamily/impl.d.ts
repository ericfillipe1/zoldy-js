import { RakunMono, Void } from "rakun";
import { ZoldyParamsBuild } from "../param/interface";
import { ZoldyStateFamily } from "../source";
import { ZoldyAtomFamilyBuildConfig } from "./interface";
export declare class ZoldyAtomFamilyImpl<P, T> extends ZoldyStateFamily<P, T> {
    private _default;
    paramsBuild: ZoldyParamsBuild<P>;
    constructor(config: ZoldyAtomFamilyBuildConfig<P, T>);
    set(params: P, value: T): RakunMono<Void>;
    get(params: P): RakunMono<T>;
}
