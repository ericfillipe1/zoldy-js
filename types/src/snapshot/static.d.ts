import { RakunMono } from "rakun";
import { ZoldySnapshot } from "./interface";
export declare const getSnapshotOrThrow: (zoldyContext: ZoldySnapshot | null) => RakunMono<ZoldySnapshot>;
export declare const createSnapshot: (parent: ZoldySnapshot | null) => ZoldySnapshot;
