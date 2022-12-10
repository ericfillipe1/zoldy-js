import { context } from "rakun";
import { ZoldySnapshot } from "./interface";

export const zoldyPathParentProvider = context.create<string | null>(null)
export const zoldySnapshotProvider = context.create<ZoldySnapshot | null>(null)