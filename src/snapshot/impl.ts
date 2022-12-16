import produce from "immer";
import { RakunMono, Void, mono, RakunFlux, flux } from "rakun";
import { GetParams, SetParams, ZoldySnapshot, ZoldySnapshotCache, ZoldySnapshotCacheData, ZoldySnapshotCacheDataItem, ZoldySnapshotCacheState } from "./interface";
import { zoldyPathParentProvider } from "./provider";

const initialValue: ZoldySnapshotCacheDataItem = {
    dependencies: [],
    state: "noValue",
    value: null,
    version: 0
}
export class ZoldySnapshotCacheImpl implements ZoldySnapshotCache {
    constructor(public data: ZoldySnapshotCacheData) {

    }
    getValue(path: string): any | null {
        return this.data[path]?.value
    }
    getState(path: string): ZoldySnapshotCacheState {
        return this.data[path]?.state ?? "noValue"
    }
    addDependency(path: string, dependency: string): void {
        this.data = produce(this.data, draft => {
            draft[path] = produce(draft[path] ?? initialValue, d => {
                if (!d.dependencies.includes(dependency)) {
                    d.dependencies = [...d.dependencies, dependency]
                }
            })
        })
    }
    hasDependency(path: string, dependency: string): boolean {
        const dependencies: string[] = this.data[path]?.dependencies ?? []
        return dependencies.includes(dependency)
    }
    setCacheValue(path: string, value: any): void {
        this.data = produce(this.data, draft => {
            draft[path] = produce(draft[path] ?? initialValue, d => {
                d.state = "hasValue"
                d.value = value
                d.version = d.version + 1
            })
        })
    }
    getDependencies(path: string): string[] {
        return this.data[path]?.dependencies ?? []
    }
    setDependency(path: string, dependencies: string[]): void {
        this.data = produce(this.data, draft => {
            draft[path] = produce(draft[path] ?? initialValue, d => {
                d.dependencies = dependencies;
            })
        })
    }
    get(path: string): any {
        return this.data[path]
    }

    cleanCache(path: string) {
        this.data = produce(this.data, draft => {
            if (path in draft) {
                draft[path] = produce(draft[path], d => {
                    d.state = "cleanValue";
                    d.value = null;
                    d.version = d.version + 1;
                })
            }
            for (const p in draft) {
                if (draft[p]?.dependencies && draft[p].dependencies.includes(path)) {
                    draft[p].dependencies = draft[p].dependencies.filter(dep => dep != path)
                }
            }
        })
    }

}


export class ZoldySnapshotImpl implements ZoldySnapshot {
    constructor(public cache: ZoldySnapshotCache, public parent: ZoldySnapshot | null) {

    }
    cleanCache(path: string): RakunMono<typeof Void> {
        const snapshot = this;
        return snapshot.getCacheValue(path)
            .flatPipe(([]) => {
                snapshot.cache.cleanCache(path);
                if (snapshot.parent) {
                    return snapshot.parent.cleanCache(path)
                } else {
                    return mono.then();
                }

            });
    }
    addDependency(path: string, dependency: string): RakunMono<typeof Void> {
        const snapshot = this;
        return mono.fromCallBack(async () => {
            snapshot.cache.addDependency(path, dependency)
            return [Void]
        })
    }
    hasDependency(path: string, dependency: string): RakunMono<boolean> {
        const snapshot = this;
        return mono.fromCallBack(async () => {
            return [snapshot.cache.hasDependency(path, dependency)]
        });
    }
    getDependencies(path: string): RakunFlux<string> {
        const snapshot = this;
        return flux.fromCallBack(async () => {
            return snapshot.cache.getDependencies(path)
        });
    }
    setCacheValue(path: string, value: any): RakunMono<typeof Void> {
        const snapshot = this;
        return mono.fromCallBack(async () => {
            snapshot.cache.setCacheValue(path, value)
            return [Void]
        });
    }
    getCacheValue(path: string): RakunMono<[ZoldySnapshotCacheState, any]> {
        const snapshot = this;
        return mono.just(path)
            .pipe(snapshot.cache.getState.bind(snapshot.cache))
            .flatPipe((state) => {
                if (state != 'hasValue' && snapshot.parent) {
                    return snapshot.parent.getCacheValue(path);
                }
                const value = snapshot.cache.getValue(path)
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
                    return zoldyPathParentProvider.get()
                        .flatPipe(value => value == null ? mono.then() : this.addDependency(path, value))
                        .then(zoldyPathParentProvider.define(path)
                            .then(get()
                                .flatPipe((v) =>
                                    snapshot.setCacheValue(path, v)
                                        .thenReturn(v)
                                )))
                }
            });
    }
    set({ path, value }: SetParams): RakunMono<typeof Void> {
        return this.setCacheValue(path, value)
            .flatPipeMany(() => this.getDependencies(path).flatPipe(dep => {
                return this.cleanCache(dep)
            }))
            .then()
    }
}