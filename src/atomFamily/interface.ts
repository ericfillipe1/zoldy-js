import { RakunMono, RakunSource, Void } from "rakun";
import { Fields } from "../param/interface";
import { DefaultFamily } from "../types";

export type ZoldyAtomFamilyBuildConfig<P, T> = {
    path: string
    params: Fields<P>
    default: DefaultFamily<P, T>
}



export type ZoldyAtomFamilyStatic = {
    <P, T>(config: ZoldyAtomFamilyBuildConfig<P, T>): ZoldyAtomFamily<P, T>
}




export interface ZoldyAtomFamily<P, T> {
    set(params: P, value: T): RakunMono<Void>;
    get(params: P): RakunMono<T>;
}