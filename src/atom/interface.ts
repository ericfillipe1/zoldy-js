
import { Default, ZoldyState } from "../types";



export interface ZoldyAtomStatic {
    <T>(path: ZoldyAtomBuildConfig<T>): ZoldyState<T>
}


export type ZoldyAtomBuildConfig<T> = {
    path: string
    default: Default<T>
}
