import { ZoldyState, ZoldyValue } from "../source";
import { Get, Set } from "../types";


export type ZoldySelectorBuildConfigReadOnly<T> = {
    path: string
    get: Get<T>
}
export type ZoldySelectorBuildConfig<T> = {
    set: Set<T>
} & ZoldySelectorBuildConfigReadOnly<T>


export interface ZoldySelectorStatic {
    <T>(path: ZoldySelectorBuildConfigReadOnly<T>): ZoldyValue<T>
    <T>(path: ZoldySelectorBuildConfig<T>): ZoldyState<T>
}