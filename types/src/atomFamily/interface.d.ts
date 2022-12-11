import { Fields } from "../param/interface";
import { ZoldyState } from "../source";
import { DefaultFamily } from "../types";
export type ZoldyAtomFamilyBuildConfig<P, T> = {
    path: string;
    params: Fields<P>;
    default: DefaultFamily<P, T>;
};
export type ZoldyAtomFamilyStatic = {
    <P, T>(config: ZoldyAtomFamilyBuildConfig<P, T>): (params: P) => ZoldyState<T>;
};
