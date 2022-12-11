import { RakunMono, Void } from "rakun";
import { ZoldyState } from "../source";
import { ZoldyAtomBuildConfig } from "./interface";
export declare class ZoldyAtomImpl<T> implements ZoldyState<T> {
    private _default;
    path: string;
    constructor(config: ZoldyAtomBuildConfig<T>);
    set(value: T): RakunMono<Void>;
    get(): RakunMono<T>;
}
