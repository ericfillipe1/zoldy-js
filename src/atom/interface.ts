import { ZoldyState } from "../source";
import { Default } from "../types";



export interface ZoldyAtomStatic {
    <T>(path: ZoldyAtomBuildConfig<T>): ZoldyState<T>
}


export type ZoldyAtomBuildConfig<T> = {
    path: string
    default: Default<T>
}
