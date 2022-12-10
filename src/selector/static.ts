import { ZoldySelectorImpl } from "./impl";
import { ZoldySelectorStatic } from "./interface";

const Selector: ZoldySelectorStatic = (config) => {
    return new ZoldySelectorImpl(config);
}
export default Selector;