import { qlr } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { XTr } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { zw, axr, oU } from "/$bunfs/root/chunk-ctt36bn8.js";
function m(r, e) {
    const t = [];
    qlr(r, function(o, f, i) {
        if (e(o, f, i)) {
            t.push(o);
        }
    });
    return t;
}
const a = m;
export function zN(r, e) {
    const t = zw(r) ? axr : a;
    return t(r, XTr(oU(e, 3)));
}
