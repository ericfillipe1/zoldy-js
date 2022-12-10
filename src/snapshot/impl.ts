import { RakunMono, Void, mono, RakunFlux, VoidValue, flux } from "rakun";
import { GetParams, SetParams, ZoldySnapshot, ZoldySnapshotCache, ZoldySnapshotCacheState } from "./interface";
let version = 0
export class ZoldySnapshotImpl implements ZoldySnapshot {
    cache: ZoldySnapshotCache = {}
    constructor(public parent: ZoldySnapshot | null) {

    }
    addDependency(path: string, dependency: string): RakunMono<Void> {
        const snapshot = this;
        return snapshot.hasDependency(path, dependency)
            .flatPipe(b => {
                if (!b) {
                    return snapshot.getDependencies(path)
                        .array()
                        .flatPipe(array => snapshot.setDependency(path, [...array, dependency]))
                }
                return mono.returnVoid()
            })
    }
    hasDependency(path: string, dependency: string): RakunMono<boolean> {
        const snapshot = this;
        return mono.fromCallBack(async () => {
            const dependencies: string[] = snapshot.cache[path]?.dependencies ?? []
            return [dependencies.includes(dependency)]
        });
    }
    setDependency(path: string, dependencies: string[]): RakunMono<Void> {
        const snapshot = this;
        return mono.fromCallBack(async () => {
            snapshot.cache[path] = {
                ...snapshot.cache[path] ?? { state: "noValue" },
                dependencies
            }
            return [VoidValue]
        });
    }
    getDependencies(path: string): RakunFlux<string> {
        return flux.fromCallBack(async () => {
            const dependencies: string[] = this.cache[path]?.dependencies ?? []
            return dependencies
        });
    }
    hasCacheState(path: string): RakunMono<ZoldySnapshotCacheState> {
        const snapshot = this;
        return mono.fromCallBack(async () => {
            return [snapshot.cache[path]?.state ?? "noValue"]
        });
    }
    setCacheValue(path: string, value: any): RakunMono<Void> {
        const snapshot = this;
        return mono.fromCallBack(async () => {
            version = version + 1
            snapshot.cache[path] = {
                ...snapshot.cache[path] ?? { state: "hasValue" },
                value: value,
                version: version
            }
            return [VoidValue]
        });
    }
    getCacheValue(path: string): RakunMono<[ZoldySnapshotCacheState, any]> {
        const snapshot = this;
        return this.hasCacheState(path)
            .flatPipe((state) => {
                if (state == 'noValue' && snapshot.parent) {
                    return snapshot.parent.getCacheValue(path);
                }
                const value = snapshot.cache[path]?.value
                return mono.just([state, value])
            });
    }
    get({ get, path }: GetParams): RakunMono<any> {
        const snapshot = this;
        return snapshot.getCacheValue(path)
            .flatPipe(([state, value]) => {
                if (state == "hasValue") {
                    return mono.just(value)
                } else {
                    return get()
                        .flatPipe((v) =>
                            snapshot.setCacheValue(path, v)
                                .thenReturn(v)
                        )
                }
            });
    }
    set({ path, value }: SetParams): RakunMono<Void> {
        return this.setCacheValue(path, value)
    }

}