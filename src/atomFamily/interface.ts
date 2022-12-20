
import { Fields } from "../param/interface";
import { DefaultFamily, ZoldyState } from "../types";

export type ZoldyAtomFamilyBuildConfig<P, T> = {
    path: string
    params: Fields<P>
    default: DefaultFamily<P, T>
}



export type ZoldyAtomFamilyStatic = {
    <P, T>(config: ZoldyAtomFamilyBuildConfig<P, T>): (params: P) => ZoldyState<T>
}