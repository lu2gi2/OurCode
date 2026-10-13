import { Nse } from "/$bunfs/root/chunk-ctt36bn8.js";
import { oT } from "/$bunfs/root/chunk-xgw72tt1.js";
const s = /\s/;
function d(r) {
    let r_length = r.length;
    while(r_length-- && s.test(r.charAt(r_length)));
    return r_length;
}
const i = d;
const c = /^\s+/;
function a(r) {
    if (r) {
        return r.slice(0, i(r) + 1).replace(c, "");
    }
    return r;
}
const o = a;
const n = NaN;
const x = /^[-+]0x[0-9a-f]+$/i;
const I = /^0b[01]+$/i;
const b = /^0o[0-7]+$/i;
const u = parseInt;
function y(r) {
    if (typeof r === "number") {
        return r;
    }
    if (Nse(r)) {
        return n;
    }
    if (oT(r)) {
        const t = typeof r.valueOf === "function" ? r.valueOf() : r;
        r = oT(t) ? `${t}` : t;
    }
    if (typeof r !== "string") {
        if (r === 0) {
            return r;
        }
        return +r;
    }
    r = o(r);
    const e = I.test(r);
    if (e || b.test(r)) {
        return u(r.slice(2), e ? 2 : 8);
    }
    if (x.test(r)) {
        return n;
    }
    return +r;
}
const $en = y;
const f = Infinity;
const E = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
function N(r) {
    if (!r) {
        if (r === 0) {
            return r;
        }
        return 0;
    }
    r = $en(r);
    if (r === f || r === -f) {
        const t = r < 0 ? -1 : 1;
        return t * E;
    }
    if (r === r) {
        return r;
    }
    return 0;
}
const m = N;
function T(r) {
    const t = m(r);
    const e = t % 1;
    if (t === t) {
        if (e) {
            return t - e;
        }
        return t;
    }
    return 0;
}
const xkr = T;
const O = "Expected a function";
function h(r, t) {
    let e;
    if (typeof t !== "function") {
        throw TypeError(O);
    }
    r = xkr(r);
    return function() {
        if (--r > 0) {
            e = t.apply(this, arguments);
        }
        if (r <= 1) {
            t = undefined;
        }
        return e;
    };
}
const p = h;
function F(r) {
    return p(2, r);
}
const c0 = F;
export { $en, xkr, c0 };
