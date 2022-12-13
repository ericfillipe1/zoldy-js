import { RakunMono, Void } from "rakun"

export type Default<T> = RakunMono<T>
export type DefaultFamily<P, T> = (params: P) => RakunMono<T>
export type Get<T> = RakunMono<T>
export type Set<T> = (value: T) => RakunMono<typeof Void>
export type GetFamily<P, T> = (params: P) => RakunMono<T>
export type SetFamily<P, T> = (params: P, value: T) => RakunMono<typeof Void>