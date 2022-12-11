
import atom from "../atom/static";
import { ZoldyParamsImpl } from "../param/impl";
import { ZoldyAtomFamilyStatic } from "./interface";

const atomfamily: ZoldyAtomFamilyStatic = (config: any) => {
    return (params) => {
        const paramsBuild = new ZoldyParamsImpl<typeof params>(config.path, config.params)
        return atom({
            default: config.default(params),
            path: paramsBuild.encode(params)
        });
    }
}
export default atomfamily;