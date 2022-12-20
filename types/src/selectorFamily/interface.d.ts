import { Fields } from "../param/interface";
import { SetFamily, GetFamily, ZoldyValue, ZoldyState } from "../types";
export type ZoldySelectorFamilyBuildConfigReadOnly<P, T> = {
    path: string;
    params: Fields<P>;
    get: GetFamily<P, T>;
};
export type ZoldySelectorFamilyBuildConfig<P, T> = {
    set: SetFamily<P, T>;
} & ZoldySelectorFamilyBuildConfigReadOnly<P, T>;
export type ZoldySelectorFamilyStatic = {
    <P, T>(config: ZoldySelectorFamilyBuildConfigReadOnly<P, T>): (params: P) => ZoldyValue<T>;
    <P, T>(config: ZoldySelectorFamilyBuildConfig<P, T>): (params: P) => ZoldyState<T>;
};
