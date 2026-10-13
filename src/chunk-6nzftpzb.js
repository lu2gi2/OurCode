import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Qs } from "/$bunfs/root/chunk-2d9a83dh.js";
function nWe(n) {
    return n.replace(/[\r\n\u2028\u2029]+/g, " ");
}
function oOe(n, r) {
    let e = Qs(n);
    if (e.length <= r) {
        return e;
    }
    let t = ne(e, r);
    let length = Array.from(e.slice(t.length)).length;
    return `${t} \u2026 (${length} more characters follow that are NOT shown in this message)`;
}
export { nWe, oOe };
