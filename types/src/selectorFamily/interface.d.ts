import { Fields } from "../param/interface";
import { ZoldyStateFamily, ZoldyValueFamily } from "../source";
import { SetFamily, GetFamily } from "../types";
export type ZoldySelectorFamilyBuildConfigReadOnly<P, T> = {
    path: string;
    params: Fields<P>;
    get: GetFamily<P, T>;
};
export type ZoldySelectorFamilyBuildConfig<P, T> = {
    set: SetFamily<P, T>;
} & ZoldySelectorFamilyBuildConfigReadOnly<P, T>;
export type ZoldySelectorFamilyStatic = {
    <P, T>(config: ZoldySelectorFamilyBuildConfigReadOnly<P, T>): ZoldyValueFamily<P, T>;
    <P, T>(config: ZoldySelectorFamilyBuildConfig<P, T>): ZoldyStateFamily<P, T>;
};
