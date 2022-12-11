import { ZoldySelectorStateImpl, ZoldySelectorValueImpl } from "./impl";
import { ZoldySelectorStatic } from "./interface";

const selector: ZoldySelectorStatic = (config) => {

    if ("set" in config) {
        return new ZoldySelectorStateImpl(config, new ZoldySelectorValueImpl(config)) as any;
    } else {

        return new ZoldySelectorValueImpl(config) as any;
    }

}
export default selector;