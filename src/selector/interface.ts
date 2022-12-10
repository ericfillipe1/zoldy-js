import { RakunMono, Void } from "rakun";
import { Default } from "../types";



export interface ZoldySelectorStatic {
    <T>(path: ZoldySelectorBuildConfig<T>): ZoldySelector<T>
}

export interface ZoldySelector<T> {
    set(value: T): RakunMono<Void>;
    get(): RakunMono<T>;
}

export type ZoldySelectorBuildConfig<T> = {
    path: string
    get: Default<T>
}
