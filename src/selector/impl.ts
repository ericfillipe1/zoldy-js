
import { RakunMono, Void } from "rakun";
import { zoldySnapshotProvider } from "../snapshot/provider";
import { getSnapshotOrThrow } from "../snapshot/static";
import { ZoldyState, ZoldyValue } from "../source";
import { Get, Set } from "../types";
import { ZoldySelectorBuildConfig, ZoldySelectorBuildConfigReadOnly } from "./interface";


export class ZoldySelectorValueImpl<T> implements ZoldyValue<T>  {
    _get: Get<T>;
    path: string;
    constructor(config: ZoldySelectorBuildConfigReadOnly<T>) {
        this.path = config['path'];
        this._get = config['get'];
    }
    get(): RakunMono<T> {
        var path = this.path
        return zoldySnapshotProvider.get()
            .flatPipe(getSnapshotOrThrow)
            .flatPipe(zoldyContext => {
                return zoldyContext.get({
                    get: () => this["_get"],
                    path
                });
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
    reset(): RakunMono<typeof Void> {
        var path = this.path
        return zoldySnapshotProvider.get()
            .flatPipe(getSnapshotOrThrow)
            .flatPipe(zoldyContext => {
                return zoldyContext.cleanCache(path);
            })
    }
    get(): RakunMono<T> {
        return this.zoldyValue.get();
    }
    set(value: T): RakunMono<typeof Void> {

        return this._set(value);
    }

}

