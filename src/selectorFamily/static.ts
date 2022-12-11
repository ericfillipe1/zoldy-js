
import { ZoldyParamsImpl } from "../param/impl";
import selector from "../selector/static";
import { ZoldySelectorFamilyStatic } from "./interface";

const selectorFamily: ZoldySelectorFamilyStatic = (config: any) => {
    return (params) => {
        const paramsBuild = new ZoldyParamsImpl<typeof params>(config.path, config.params)
        return selector({
            get: config.get(params),
            path: paramsBuild.encode(params)
        }) as any;
    }
}
export default selectorFamily;