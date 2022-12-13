import { RakunMono, Void } from "rakun";
import { ZoldyState } from "../source";
import { Default } from "../types";
export type Config<T> = {
    path: string;
    default: () => Default<T>;
};
export declare class ZoldyAtomImpl<T> implements ZoldyState<T> {
    private _default;
    path: string;
    constructor(config: Config<T>);
    reset(): RakunMono<typeof Void>;
    set(value: T): RakunMono<typeof Void>;
    get(): RakunMono<T>;
}
