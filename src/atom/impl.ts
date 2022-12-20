
import { RakunMono, Void } from "rakun";
import { zoldySnapshotProvider } from "../snapshot/provider";
import { getSnapshotOrThrow } from "../snapshot/static";
import { Default, ZoldyState, ZoldyStoreState } from "../types";

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
    get(): RakunMono<T> {
        return this.getState()
            .pipe((s) => s.value as T)
    }
    getState(): RakunMono<ZoldyStoreState<T>> {
        var path = this.path
        return zoldySnapshotProvider.get()
            .flatPipe(getSnapshotOrThrow)
            .flatPipe(zoldySnapshot => {
                return zoldySnapshot.getState({
                    get: () => this._default(),
                    path
                });
            })
    }
    subscribe(callback: (value: ZoldyStoreState) => void): RakunMono<() => RakunMono<typeof Void>> {
        var path = this.path
        return zoldySnapshotProvider.get()
            .flatPipe(getSnapshotOrThrow)
            .flatPipe(zoldySnapshot => {
                return zoldySnapshot.subscribe(path, callback)
            })
    }

    reset(): RakunMono<typeof Void> {

        var path = this.path
        return zoldySnapshotProvider.get()
            .flatPipe(getSnapshotOrThrow)
            .flatPipe(zoldySnapshot => {
                return zoldySnapshot
                    .reset(path);
            })
    }

    set(value: T): RakunMono<typeof Void> {
        var path = this.path
        return zoldySnapshotProvider.get()
            .flatPipe(getSnapshotOrThrow)
            .flatPipe(zoldySnapshot => {
                return zoldySnapshot
                    .set({
                        value,
                        path
                    });
            })
    }

}