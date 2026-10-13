import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { qt, Te, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
N();
const o = qt(false);
function w$t(n) {
    let t = w(2);
    let { children } = n;
    let a;
    if (t[0] !== children) {
        a = e(o.Provider, {
            value: true,
            children
        });
        t[0] = children;
        t[1] = a;
    } else {
        a = t[1];
    }
    return a;
}
function Pmt() {
    return Te(o);
}
function GN(n, r) {
    let t = Te(o);
    return Boolean(n || r || t);
}
export { w$t, Pmt, GN };
