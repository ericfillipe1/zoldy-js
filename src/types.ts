import { RakunMono } from "rakun"

export type Default<T> = RakunMono<T>
export type DefaultFamily<P, T> = (params: P) => Default<T>