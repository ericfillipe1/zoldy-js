import { RakunFlux, RakunMono, Void } from "rakun";
export type GetParams = {
    path: string;
    get: () => RakunMono<any>;
};
export type SetParams = {
    path: string;
    value: any;
};
export type ZoldySnapshotCacheState = "hasValue" | "noValue";
export type ZoldySnapshotCache = {
    [path: string]: {
        value: any;
        version: number;
        state: ZoldySnapshotCacheState;
        dependencies: any;
    };
};
export interface ZoldySnapshot {
    parent: ZoldySnapshot | null;
    hasCacheState(path: string): RakunMono<ZoldySnapshotCacheState>;
    setCacheValue(path: string, value: any): RakunMono<Void>;
    getCacheValue(path: string): RakunMono<[ZoldySnapshotCacheState, any]>;
    addDependency(path: string, dependency: string): RakunMono<Void>;
    hasDependency(path: string, dependency: string): RakunMono<boolean>;
    setDependency(path: string, dependencies: string[]): RakunMono<Void>;
    getDependencies(path: string): RakunFlux<string>;
    get(params: GetParams): RakunMono<any>;
    set({ path, value }: SetParams): RakunMono<Void>;
}
