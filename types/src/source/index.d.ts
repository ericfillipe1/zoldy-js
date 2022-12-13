import { RakunMono, Void } from "rakun";
export declare abstract class ZoldyValue<T> {
    abstract path: string;
    abstract get(): RakunMono<T>;
}
export declare abstract class ZoldyState<T> extends ZoldyValue<T> {
    abstract set(value: T): RakunMono<typeof Void>;
    abstract reset(): RakunMono<typeof Void>;
}
