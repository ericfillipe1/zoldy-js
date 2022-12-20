import { RakunMono, Void } from "rakun";
export declare abstract class ZoldyValue<T> {
    abstract path: string;
    abstract get(): RakunMono<T>;
    abstract getState(): RakunMono<ZoldyStoreState<T>>;
    abstract reset(): RakunMono<typeof Void>;
    abstract subscribe(callback: (value: ZoldyStoreState<T>) => void): RakunMono<() => RakunMono<typeof Void>>;
}
export declare abstract class ZoldyState<T> extends ZoldyValue<T> {
    abstract set(value: T): RakunMono<typeof Void>;
}
export type ZoldyStoreState<T = any> = {
    value: T;
    state: "hasValue";
    dependencies: string[];
} | {
    value: null;
    state: "loading";
    dependencies: string[];
};
export type ZoldyStoreStateType = ZoldyStoreState["state"];
export type Default<T> = RakunMono<T>;
export type DefaultFamily<P, T> = (params: P) => RakunMono<T>;
export type Get<T> = RakunMono<T>;
export type Set<T> = (value: T) => RakunMono<typeof Void>;
export type GetFamily<P, T> = (params: P) => RakunMono<T>;
export type SetFamily<P, T> = (params: P, value: T) => RakunMono<typeof Void>;
