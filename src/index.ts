import _atomFamily from "./atomFamily";
import _atom from "./atom";
import _selector from "./selector";
import _selectorFamily from "./selectorFamily";

export * from "./atomFamily";
export * from "./atom";
export * from "./selector";
export * from "./selectorFamily";
export * from "./types";
export * from "./snapshot";



export default {
    atomFamily: _atomFamily,
    atom: _atom,
    selector: _selector,
}

export const atomFamily = _atomFamily;
export const atom = _atom;
export const selector = _selector;
export const selectorFamily = _selectorFamily;

