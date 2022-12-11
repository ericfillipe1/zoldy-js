import { ZoldyAtomFamilyStateImpl, ZoldyAtomFamilyValueImpl } from "./impl";
import { ZoldySelectorFamilyStatic } from "./interface";

const atomfamily: ZoldySelectorFamilyStatic = (config: any) => {
    if ("set" in config) {
        return new ZoldyAtomFamilyStateImpl(config, new ZoldyAtomFamilyValueImpl(config)) as any;
    } else {

        return new ZoldyAtomFamilyValueImpl(config) as any;
    }
}
export default atomfamily;