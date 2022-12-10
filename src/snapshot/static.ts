
import { mono, RakunMono } from "rakun";
import { ZoldySnapshot } from "./interface";


export const getSnapshotOrThrow = (zoldyContext: ZoldySnapshot | null): RakunMono<ZoldySnapshot> => {
    return zoldyContext != null ?
        mono.just(zoldyContext) :
        mono.error(new Error("NotFound ZoldySnapshot"));
}
