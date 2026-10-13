const SYMBOL_REACT_TRANSITIONAL_ELEMENT = Symbol.for("react.transitional.element");
const SYMBOL_REACT_FRAGMENT = Symbol.for("react.fragment");
function k(type, t, props) {
    let l = null;
    if (props !== undefined) {
        l = `${props}`;
    }
    if (t.key !== undefined) {
        l = `${t.key}`;
    }
    if ("key" in t) {
        props = {};
        for(const E in t){
            if (E !== "key") {
                props[E] = t[E];
            }
        }
    } else {
        props = t;
    }
    t = props.ref;
    return {
        $$typeof: SYMBOL_REACT_TRANSITIONAL_ELEMENT,
        type,
        key: l,
        ref: t !== undefined ? t : null,
        props
    };
}
const Y = SYMBOL_REACT_FRAGMENT;
const e = k;
const r = k;
export { Y, e, r };
