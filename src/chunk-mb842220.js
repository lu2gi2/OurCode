import { Bn, _m } from "/$bunfs/root/chunk-xgw72tt1.js";
import { eG } from "/$bunfs/root/chunk-qch5xj2a.js";
import { posix } from "path";
const UOn = String.raw`\s\u2800\uFFF9-\uFFFB\p{Cc}\p{M}\p{Default_Ignorable_Code_Point}`;
const c = new RegExp(`^[${UOn}]+`, "u");
function boo(n) {
    return n.replace(c, "");
}
function nfr(n, r = woo(n)) {
    return Bn(n) || _ot(n) || eG.test(r[0]) || r.map(boo).some((e)=>Bn(e) || _ot(e));
}
const u = /^\.\.\//;
function _ot(n) {
    return _m(n) || _m(posix.normalize(n).replace(u, "/")) || l(n) && _m(`/${n}`);
}
function l(n) {
    let r = posix.normalize(n);
    return r === ".." || r.startsWith("../");
}
function Soo(n) {
    let r = n.slice(7);
    return nfr(r) || nfr(r.slice(1));
}
const i = /(?:%[0-9A-Fa-f]{2}){1,512}/g;
const f = /^%[0-9A-Fa-f]{2}/;
function woo(n) {
    if (!n.includes("%")) {
        return [
            n,
            n
        ];
    }
    let r = new TextDecoder("utf-8", {
        fatal: false,
        ignoreBOM: true
    });
    return [
        n.replace(i, (e, t)=>{
            let o = t + e.length;
            return r.decode(s(e), {
                stream: f.test(n.slice(o, o + 3))
            });
        }),
        n.replace(i, (e)=>Array.from(s(e), (t)=>String.fromCharCode(t)).join(""))
    ];
}
function s(n) {
    return Uint8Array.from(n.slice(1).split("%"), (r)=>parseInt(r, 16));
}
export { UOn, boo, nfr, _ot, Soo, woo };
