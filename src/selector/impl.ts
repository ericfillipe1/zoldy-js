
import { RakunMono, Void } from "rakun";
import { zoldySnapshotProvider } from "../snapshot/provider";
import { getSnapshotOrThrow } from "../snapshot/static";
import { Get, Set, ZoldyState, ZoldyStoreState, ZoldyValue } from "../types";
import { ZoldySelectorBuildConfig, ZoldySelectorBuildConfigReadOnly } from "./interface";


export class ZoldySelectorValueImpl<T> implements ZoldyValue<T>  {
    _get: Get<T>;
    path: string;
    constructor(config: ZoldySelectorBuildConfigReadOnly<T>) {
        this.path = config['path'];
        this._get = config['get'];
    }

    subscribe(callback: (value: ZoldyStoreState) => void): RakunMono<() => RakunMono<typeof Void>> {
        var path = this.path
        return zoldySnapshotProvider.get()
            .flatPipe(getSnapshotOrThrow)
            .flatPipe(zoldySnapshot => {
                return zoldySnapshot.subscribe(path, callback)
            })
    }
    getState(): RakunMono<ZoldyStoreState<T>> {
        var path = this.path
        return zoldySnapshotProvider.get()
            .flatPipe(getSnapshotOrThrow)
            .flatPipe(zoldySnapshot => {
                return zoldySnapshot.getState({
                    get: () => this["_get"],
                    path
                });
            })
    }
    get(): RakunMono<T> {
        return this.getState()
            .pipe((s) => s.value as T)
    }
    reset(): RakunMono<typeof Void> {
        var path = this.path
        return zoldySnapshotProvider.get()
            .flatPipe(getSnapshotOrThrow)
            .flatPipe(zoldySnapshot => {
                return zoldySnapshot.reset(path);
            })
    }
}



export class ZoldySelectorStateImpl<T> implements ZoldyState<T>  {
    private _set: Set<T>;
    get path() {
        return this.zoldyValue.path;
    };
    constructor(config: ZoldySelectorBuildConfig<T>, private zoldyValue: ZoldyValue<T>) {
        this._set = config.set
    }
    getState(): RakunMono<ZoldyStoreState<T>> {
        return this.zoldyValue.getState();
    }
    subscribe(callback: (value: ZoldyStoreState) => void): RakunMono<() => RakunMono<typeof Void>> {
        return this.zoldyValue.subscribe(callback);
    }
    get(): RakunMono<T> {
        return this.zoldyValue.get();
    }
    set(value: T): RakunMono<typeof Void> {

        return this._set(value);
    }

    reset(): RakunMono<typeof Void> {
        return this.zoldyValue.reset();
    }
}

