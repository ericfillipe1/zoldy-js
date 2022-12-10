import { ZoldyAtomFamilyImpl } from "./impl";
import { ZoldyAtomFamilyStatic } from "./interface";

const atomfamily: ZoldyAtomFamilyStatic = (config: any) => {
    return new ZoldyAtomFamilyImpl(config);
}
export default atomfamily;