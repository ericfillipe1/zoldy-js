import { RakunMono, Void } from "rakun"
export type GetParams = {
    path: string, get: () => RakunMono<any>;
}
export type SetParams = {
    path: string, value: any
}

export type ZoldySnapshotCacheState = "hasValue" | "noValue" | "cleanValue"


export type ZoldySnapshotCacheDataItem = {
    value: any
    version: number
    state: ZoldySnapshotCacheState
    dependencies: string[]
}

export type ZoldySnapshotCacheData = {
    [path: string]: {
        value: any
        version: number
        state: ZoldySnapshotCacheState
        dependencies: string[]
    }
}


export interface ZoldySnapshot {
    parent: ZoldySnapshot | null
    getCacheValue(path: string): RakunMono<[ZoldySnapshotCacheState, any]>
    cleanCache(path: string): RakunMono<typeof Void>;
    get(params: GetParams): RakunMono<any>
    set({ path, value }: SetParams): RakunMono<typeof Void>
}


export interface ZoldySnapshotCache {
    getValue(path: string): any | null
    getState(path: string): ZoldySnapshotCacheState
    addDependency(path: string, dependency: string): void
    hasDependency(path: string, dependency: string): boolean
    setCacheValue(path: string, value: any): void
    getDependencies(path: string): string[]
    setDependency(path: string, dependencies: string[]): void
    get(path: string): any
    cleanCache(path: string): void
}

