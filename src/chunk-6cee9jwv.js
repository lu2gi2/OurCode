import { NDt, ixr, lxr, $Dt, O8e, cxr, FDt, dxr, mwe, FZ, wBe, Upe, $se, D8e, oU } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Awe, oT } from "/$bunfs/root/chunk-xgw72tt1.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
function g(r, t, e) {
    const o = r[t];
    if (!(hasOwnProperty.call(r, t) && Awe(o, e)) || e === undefined && !(t in r)) {
        FZ(r, t, e);
    }
}
const q5e = g;
function P(r, t, e, o) {
    if (!oT(r)) {
        return r;
    }
    t = Upe(t, r);
    let i = -1;
    const t_length = t.length;
    const s = t_length - 1;
    let n = r;
    while(n != null && ++i < t_length){
        const f = $se(t[i]);
        let a = e;
        if (f === "__proto__" || f === "constructor" || f === "prototype") {
            return r;
        }
        if (i != s) {
            const p = n[f];
            a = o ? o(p, f, n) : undefined;
            if (a === undefined) {
                a = oT(p) ? p : O8e(t[i + 1]) ? [] : {};
            }
        }
        q5e(n, f, a);
        n = n[f];
    }
    return r;
}
const u = P;
function x(r, t, e) {
    let o = -1;
    const t_length = t.length;
    const m = {};
    while(++o < t_length){
        const s = t[o];
        const n = D8e(r, s);
        if (e(n, s)) {
            u(m, Upe(s, r), n);
        }
    }
    return m;
}
const ZCr = x;
const O = dxr(Object.getPrototypeOf, Object);
const Krn = O;
const h = !Object.getOwnPropertySymbols ? lxr : function(r) {
    const t = [];
    while(r){
        NDt(t, $Dt(r));
        r = Krn(r);
    }
    return t;
};
const eRr = h;
function K(r) {
    const t = [];
    if (r != null) {
        for(const e in Object(r)){
            t.push(e);
        }
    }
    return t;
}
const l = K;
const hasOwnProperty_1 = Object.prototype.hasOwnProperty;
function S(r) {
    if (!oT(r)) {
        return l(r);
    }
    const t = FDt(r);
    const e = [];
    for(const o in r){
        if (!(o == "constructor" && (t || !hasOwnProperty_1.call(r, o)))) {
            e.push(o);
        }
    }
    return e;
}
const y = S;
function w(r) {
    if (mwe(r)) {
        return cxr(r, true);
    }
    return y(r);
}
const VUe = w;
function b(r) {
    return ixr(r, VUe, eRr);
}
const Yrn = b;
function _(r, t) {
    if (r == null) {
        return {};
    }
    const e = wBe(Yrn(r), function(o) {
        return [
            o
        ];
    });
    t = oU(t);
    return ZCr(r, e, function(o, i) {
        return t(o, i[0]);
    });
}
const vo = _;
export { q5e, ZCr, Krn, eRr, VUe, Yrn, vo };
