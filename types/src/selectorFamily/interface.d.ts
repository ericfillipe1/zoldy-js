import { Fields } from "../param/interface";
import { ZoldyStateFamily, ZoldyValueFamily } from "../source";
import { SetFamily, GetFamily } from "../types";
export type ZoldyAtomFamilyBuildConfigReadOnly<P, T> = {
    path: string;
    params: Fields<P>;
    get: GetFamily<P, T>;
};
export type ZoldyAtomFamilyBuildConfig<P, T> = {
    set: SetFamily<P, T>;
} & ZoldyAtomFamilyBuildConfigReadOnly<P, T>;
export type ZoldyAtomFamilyStatic = {
    <P, T>(config: ZoldyAtomFamilyBuildConfigReadOnly<P, T>): ZoldyValueFamily<P, T>;
    <P, T>(config: ZoldyAtomFamilyBuildConfig<P, T>): ZoldyStateFamily<P, T>;
};
