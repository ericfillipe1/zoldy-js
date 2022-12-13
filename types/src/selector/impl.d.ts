import { RakunMono, Void } from "rakun";
import { ZoldyState, ZoldyValue } from "../source";
import { Get } from "../types";
import { ZoldySelectorBuildConfig, ZoldySelectorBuildConfigReadOnly } from "./interface";
export declare class ZoldySelectorValueImpl<T> implements ZoldyValue<T> {
    _get: Get<T>;
    path: string;
    constructor(config: ZoldySelectorBuildConfigReadOnly<T>);
    get(): RakunMono<T>;
}
export declare class ZoldySelectorStateImpl<T> implements ZoldyState<T> {
    private zoldyValue;
    private _set;
    get path(): string;
    constructor(config: ZoldySelectorBuildConfig<T>, zoldyValue: ZoldyValue<T>);
    reset(): RakunMono<typeof Void>;
    get(): RakunMono<T>;
    set(value: T): RakunMono<typeof Void>;
}
