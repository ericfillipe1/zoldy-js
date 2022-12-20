import produce from "immer";
import { RakunMono, Void, mono, RakunFlux, flux } from "rakun";
import { EventEmitter } from 'events'

import { GetParams, SetParams, ZoldySnapshot, ZoldyStore, ZoldyStoreEvents, ZoldyStoreStates } from "./interface";
import { zoldyPathParentProvider } from "./provider";
import { ZoldyStoreState } from "../types";

const initialValue: ZoldyStoreState = {
    dependencies: [],
    state: "noValue",
    value: null,
    version: 0
}
export class ZoldyStoreImpl implements ZoldyStore {
    constructor(
        public states: ZoldyStoreStates = {},
        public events: ZoldyStoreEvents = []
    ) {
    }

    getEvents(): ZoldyStoreEvents {
        return this.events
    }
    setEvents(events: ZoldyStoreEvents): void {
        this.events = events
    }
    getValue(path: string): any | null {
        return this.states[path]?.value
    }
    getState = (path: string): ZoldyStoreState => {
        return this.states[path] ?? initialValue
    }
    inProcess = false;

    addDependency(path: string, dependency: string): void {
        this.states = produce(this.states, draft => {
            draft[path] = produce(draft[path] ?? initialValue, d => {
                if (!d.dependencies.includes(dependency)) {
                    d.dependencies = [...d.dependencies, dependency]
                }
            })
        })
    }
    hasDependency(path: string, dependency: string): boolean {
        const dependencies: string[] = this.states[path]?.dependencies ?? []
        return dependencies.includes(dependency)
    }
    set(path: string, value: any): void {
        const [data, events] = produce([this.states, this.events], draft => {
            this._recipeSet(path, value, draft)
        })
        this.states = data
        this.events = events
    }
    getDependencies(path: string): string[] {
        return this.states[path]?.dependencies ?? []
    }
    setDependency(path: string, dependencies: string[]): void {
        this.states = produce(this.states, draft => {
            draft[path] = produce(draft[path] ?? initialValue, d => {
                d.dependencies = dependencies;
            })
        })
    }
    _recipeReset(path: string, [data, events]: [ZoldyStoreStates, ZoldyStoreEvents]) {
        if (path in data) {
            data[path] = produce(data[path], d => {
                d.state = "cleanValue";
                d.value = null;
                d.version = d.version + 1;
            })
        }
        for (const p of data[path]?.dependencies ?? []) {
            this._recipeReset(p, [data, events])
        }
        events.push([path, data[path]])
    }

    _recipeSet(path: string, value: any, [states, events]: [ZoldyStoreStates, ZoldyStoreEvents]) {
        states[path] = produce(states[path] ?? initialValue, d => {
            d.state = "hasValue"
            d.value = value
            d.version = d.version + 1
        })
        const dependencies = states[path]?.dependencies ?? []
        for (const p of dependencies) {
            this._recipeReset(p, [states, events])
        }
        events.push([path, states[path]])
    }

    reset(path: string) {
        const [states, events] = produce([this.states, this.events], draft => {
            this._recipeReset(path, draft)
        })
        this.states = states
        this.events = events
    }

}


export class ZoldySnapshotImpl implements ZoldySnapshot {
    public eventEmitter: EventEmitter;

    constructor(public cache: ZoldyStore, public parent: ZoldySnapshot | null) {

        this.eventEmitter = new EventEmitter();
    }
    reset(path: string): RakunMono<typeof Void> {
        const snapshot = this;
        return snapshot.getCacheState(path)
            .flatPipe(() => {
                snapshot.cache.reset(path);
                if (snapshot.parent) {
                    return snapshot.parent.reset(path)
                } else {
                    return mono.then();
                }
            })
            .flatPipe(() => {
                return snapshot.emitEvents()
            });
    }
    emitEvents(): RakunMono<typeof Void> {
        const snapshot = this;
        const events = snapshot.cache.getEvents()
        events.forEach(e => this.eventEmitter.emit(e[0], e[1]))
        snapshot.cache.setEvents([]);
        return mono.then();
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
            snapshot.cache.set(path, value)
            return [Void]
        });
    }
    getCacheState(path: string): RakunMono<ZoldyStoreState> {
        const snapshot = this;
        return mono.just(path)
            .pipe(snapshot.cache.getState)
            .flatPipe((state) => {
                if (state.state != 'hasValue' && snapshot.parent) {
                    return snapshot.parent.getCacheState(path);
                }
                return mono.just(snapshot.cache.getState(path))
            });
    }
    getState({ get, path }: GetParams): RakunMono<ZoldyStoreState> {
        const snapshot = this;
        return snapshot.getCacheState(path)
            .flatPipe((state) => {
                if (state.state == "hasValue") {
                    return mono.just(state)
                } else {
                    return this._get(path, get)
                        .then(snapshot.getCacheState(path));
                }
            });
    }
    private _get(path: string, get: () => RakunMono<any>): RakunMono<typeof Void> {
        const snapshot = this;
        return zoldyPathParentProvider.get()
            .flatPipe(value => {
                if (value) {
                    return this.addDependency(path, value)
                        .thenReturn(value)
                }
                return mono.just(value)
            })
            .flatPipe((oldPathParent) => {
                return zoldyPathParentProvider.define(path)
                    .then(get()
                        .flatPipe((v) =>
                            snapshot.setCacheValue(path, v)
                                .then(zoldyPathParentProvider.define(oldPathParent))
                        ))
            })
            .flatPipe(() => {
                return snapshot.emitEvents()
            });

    }

    subscribe(path: string, callback: (value: ZoldyStoreState) => void): RakunMono<() => RakunMono<typeof Void>> {
        const snapshot = this;

        return mono.fromCallBack(() => {
            snapshot.eventEmitter.on(path, callback)
            return [callback]
        }).flatPipe((cb) => {
            return mono.just(() => {
                snapshot.eventEmitter.removeListener(path, cb);
                return mono.then();
            })
        })
    }

    set({ path, value }: SetParams): RakunMono<typeof Void> {
        const snapshot = this;
        return snapshot.setCacheValue(path, value)
            .then()
            .flatPipe(() => {
                return snapshot.emitEvents()
            });
    }
}