import { RakunMono, Void, RakunFlux } from "rakun";
import { GetParams, SetParams, ZoldySnapshot, ZoldySnapshotCache, ZoldySnapshotCacheState } from "./interface";
export declare class ZoldySnapshotImpl implements ZoldySnapshot {
    parent: ZoldySnapshot | null;
    cache: ZoldySnapshotCache;
    constructor(parent: ZoldySnapshot | null);
    cleanCache(path: string): RakunMono<typeof Void>;
    addDependency(path: string, dependency: string): RakunMono<typeof Void>;
    hasDependency(path: string, dependency: string): RakunMono<boolean>;
    setDependency(path: string, dependencies: string[]): RakunMono<typeof Void>;
    getDependencies(path: string): RakunFlux<string>;
    hasCacheState(path: string): RakunMono<ZoldySnapshotCacheState>;
    setCacheValue(path: string, value: any): RakunMono<typeof Void>;
    getCacheValue(path: string): RakunMono<[ZoldySnapshotCacheState, any]>;
    get({ get, path }: GetParams): RakunMono<any>;
    set({ path, value }: SetParams): RakunMono<typeof Void>;
}
