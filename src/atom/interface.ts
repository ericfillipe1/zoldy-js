import { RakunMono, RakunSource, Void } from "rakun";
import { Default } from "../types";



export interface ZoldyAtomStatic {
    <T>(path: ZoldyAtomBuildConfig<T>): ZoldyAtom<T>
}

export interface ZoldyAtom<T> {
    set(value: T): RakunMono<Void>;
    get(): RakunMono<T>;
}

export type ZoldyAtomBuildConfig<T> = {
    path: string
    default: Default<T>
}
