import { Ww, Lse } from "/$bunfs/root/chunk-qch5xj2a.js";
const n = /(?![\u200C\u200D])[\p{Cf}\u2028\u2029]/gu;
const o = /[\u001b\u0080-\u009f]/g;
const c = 8;
function BH(u) {
    let e = u.replace(o, "").replace(Lse, "").replace(/[\v\f\r]/g, "");
    for(let r = 0; r < c; r++){
        let t = Ww(e.replace(n, ""));
        if (t === e) {
            return e;
        }
        e = t;
    }
    return e.replace(/[\ud800-\udfff]/g, "").replace(n, "");
}
export { BH };
