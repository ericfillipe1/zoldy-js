
import { mono, RakunMono } from "rakun";
import { ZoldyStoreImpl, ZoldySnapshotImpl } from "./impl";
import { ZoldySnapshot } from "./interface";


export const getSnapshotOrThrow = (zoldySnapshot: ZoldySnapshot | null): RakunMono<ZoldySnapshot> => {
    return zoldySnapshot != null ?
        mono.just(zoldySnapshot) :
        mono.error(new Error("NotFound ZoldySnapshot"));
}
export const createSnapshot = (parent: ZoldySnapshot | null): ZoldySnapshot => {
    return new ZoldySnapshotImpl(new ZoldyStoreImpl({}), parent);
}
