import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { qt, Te, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
const Gb = qt(null);
function el() {
    return Te(Gb) !== null;
}
function ns(o) {
    let c = w(3);
    let l = Te(Gb);
    let n;
    if (c[0] !== l || c[1] !== o) {
        n = l ? {
            rows: l.rows,
            columns: l.columns
        } : o;
        c[0] = l;
        c[1] = o;
        c[2] = n;
    } else {
        n = c[2];
    }
    return n;
}
function Mfe() {
    return Te(Gb)?.scrollViewport ?? null;
}
function zXe() {
    return Te(Gb)?.claimScrollBox ?? null;
}
export { Gb, el, ns, Mfe, zXe };
