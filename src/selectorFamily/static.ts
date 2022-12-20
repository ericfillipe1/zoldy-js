
import { ZoldyParamsImpl } from "../param/impl";
import selector from "../selector/static";
import { ZoldySelectorFamilyStatic } from "./interface";

const selectorFamily: ZoldySelectorFamilyStatic = (config: any) => {
    return (params) => {
        const paramsBuild = new ZoldyParamsImpl<typeof params>(config.path, config.params)
        if ("set" in config) {
            return selector({
                get: config.get(params),
                path: paramsBuild.encode(params),
                set: (v: any) => config.set(params, v)
            }) as any;
        } else {
            return selector({
                get: config.get(params),
                path: paramsBuild.encode(params)
            }) as any;
        }
    }
}
export default selectorFamily;