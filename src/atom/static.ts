import { ZoldyAtomImpl } from "./impl";
import { ZoldyAtomStatic } from "./interface";

const atom: ZoldyAtomStatic = (config) => {
    return new ZoldyAtomImpl(config);
}
export default atom;