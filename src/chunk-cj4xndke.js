const { getPrototypeOf, defineProperty, getOwnPropertyNames } = Object;
const hasOwnProperty = Object.prototype.hasOwnProperty;
function n(a) {
    return this[a];
}
let o;
let p;
const Se = (a, b, c)=>{
    var d = a != null && typeof a === "object";
    if (d) {
        var h = b ? o ??= new WeakMap : p ??= new WeakMap;
        var i = h.get(a);
        if (i) {
            return i;
        }
    }
    c = a != null ? Object.create(getPrototypeOf(a)) : {};
    let e = b || !a || !a.__esModule || !hasOwnProperty.call(a, "default") ? defineProperty(c, "default", {
        value: a,
        enumerable: true
    }) : c;
    if (a && typeof a === "object" || typeof a === "function") {
        for (let g of getOwnPropertyNames(a)){
            if (!hasOwnProperty.call(e, g)) {
                defineProperty(e, g, {
                    get: n.bind(a, g),
                    enumerable: true
                });
            }
        }
    }
    if (d) {
        h.set(a, e);
    }
    return e;
};
const C = (a, b)=>()=>{
        if (!b) {
            a((b = {
                exports: {}
            }).exports, b);
        }
        return b.exports;
    };
const q = (a)=>a;
function r(a, b) {
    this[a] = q.bind(null, b);
}
const Mr = (a, b)=>{
    for(var c in b){
        defineProperty(a, c, {
            get: b[c],
            enumerable: true,
            configurable: true,
            set: r.bind(b, c)
        });
    }
};
const Ji = (a, b, c)=>()=>{
        if (a) {
            try {
                b = a(a = 0);
            } catch (error) {
                c = [
                    error
                ];
            }
        }
        if (c) {
            throw c[0];
        }
        return b;
    };
const SYMBOL_REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
const SYMBOL_REACT_EARLY_RETURN_SENTINEL = Symbol.for("react.early_return_sentinel");
const NFs = (a, b, c)=>{
    for(var d in b){
        defineProperty(a, d, {
            get: b[d],
            set: c[d],
            enumerable: true,
            configurable: true
        });
    }
};
const Le = import.meta.require;
export { Se, C, Mr, Ji, SYMBOL_REACT_MEMO_CACHE_SENTINEL as S, SYMBOL_REACT_EARLY_RETURN_SENTINEL as Sn, NFs, Le };
