
import { RakunMono, Void } from "rakun";
import { zoldySnapshotProvider } from "../snapshot/provider";
import { getSnapshotOrThrow } from "../snapshot/static";
import { ZoldyState } from "../source";
import { Default } from "../types";

export type Config<T> = {
    path: string
    default: () => Default<T>
}


export class ZoldyAtomImpl<T> implements ZoldyState<T>  {
    private _default: () => Default<T>;
    path: string;
    constructor(config: Config<T>) {
        this.path = config['path'];
        this._default = config['default'];
    }
    reset(): RakunMono<typeof Void> {
        var path = this.path
        return zoldySnapshotProvider.get()
            .flatPipe(getSnapshotOrThrow)
            .flatPipe(zoldyContext => {
                return zoldyContext
                    .cleanCache(path);
            })
    }

    set(value: T): RakunMono<typeof Void> {
        var path = this.path
        return zoldySnapshotProvider.get()
            .flatPipe(getSnapshotOrThrow)
            .flatPipe(zoldyContext => {
                return zoldyContext
                    .set({
                        value,
                        path
                    });
            })
    }
    get(): RakunMono<T> {
        var path = this.path
        return zoldySnapshotProvider.get()
            .flatPipe(getSnapshotOrThrow)
            .flatPipe(zoldyContext => {
                return zoldyContext.get({
                    get: () => this._default(),
                    path
                });
            })
    }

}