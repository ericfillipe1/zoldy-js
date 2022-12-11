import { ZoldyAtomImpl } from "./impl";
import { ZoldyAtomStatic } from "./interface";

const atom: ZoldyAtomStatic = (config) => {
    return new ZoldyAtomImpl({
        default: () => config.default,
        path: config.path
    });
}
export default atom;