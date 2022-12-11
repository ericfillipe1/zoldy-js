import { RakunMono, Void } from "rakun";
import { ZoldyParamsBuild } from "../param/interface";
export declare abstract class ZoldyValueFamily<P, T> {
    abstract paramsBuild: ZoldyParamsBuild<P>;
    abstract get(params: P): RakunMono<T>;
}
export declare abstract class ZoldyStateFamily<P, T> extends ZoldyValueFamily<P, T> {
    abstract set(params: P, value: T): RakunMono<Void>;
}
export declare abstract class ZoldyValue<T> {
    abstract path: string;
    abstract get(): RakunMono<T>;
}
export declare abstract class ZoldyState<T> extends ZoldyValue<T> {
    abstract set(value: T): RakunMono<Void>;
}
