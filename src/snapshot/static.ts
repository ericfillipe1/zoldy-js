
import { mono, RakunMono } from "rakun";
import { ZoldySnapshotCacheImpl, ZoldySnapshotImpl } from "./impl";
import { ZoldySnapshot } from "./interface";


export const getSnapshotOrThrow = (zoldyContext: ZoldySnapshot | null): RakunMono<ZoldySnapshot> => {
    return zoldyContext != null ?
        mono.just(zoldyContext) :
        mono.error(new Error("NotFound ZoldySnapshot"));
}
export const createSnapshot = (parent: ZoldySnapshot | null): ZoldySnapshot => {
    return new ZoldySnapshotImpl(new ZoldySnapshotCacheImpl({}), parent);
}
