import { RakunMono, Void, RakunFlux } from "rakun";
import { GetParams, SetParams, ZoldySnapshot, ZoldySnapshotCache, ZoldySnapshotCacheState } from "./interface";
export declare class ZoldySnapshotImpl implements ZoldySnapshot {
    parent: ZoldySnapshot | null;
    cache: ZoldySnapshotCache;
    constructor(parent: ZoldySnapshot | null);
    addDependency(path: string, dependency: string): RakunMono<Void>;
    hasDependency(path: string, dependency: string): RakunMono<boolean>;
    setDependency(path: string, dependencies: string[]): RakunMono<Void>;
    getDependencies(path: string): RakunFlux<string>;
    hasCacheState(path: string): RakunMono<ZoldySnapshotCacheState>;
    setCacheValue(path: string, value: any): RakunMono<Void>;
    getCacheValue(path: string): RakunMono<[ZoldySnapshotCacheState, any]>;
    get({ get, path }: GetParams): RakunMono<any>;
    set({ path, value }: SetParams): RakunMono<Void>;
}
