import { ZoldyAtomFamilyStateImpl, ZoldyAtomFamilyValueImpl } from "./impl";
import { ZoldyAtomFamilyStatic } from "./interface";

const atomfamily: ZoldyAtomFamilyStatic = (config: any) => {
    if ("set" in config) {
        return new ZoldyAtomFamilyStateImpl(config, new ZoldyAtomFamilyValueImpl(config)) as any;
    } else {

        return new ZoldyAtomFamilyValueImpl(config) as any;
    }
}
export default atomfamily;