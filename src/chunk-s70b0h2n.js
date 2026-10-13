import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { E8 } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Mc } from "/$bunfs/root/chunk-xb9cceab.js";
const d = new q(()=>({
        degraded: false
    }));
function t() {
    return d.of(B().host);
}
function Rte(n, r) {
    if (n !== Mc) {
        return;
    }
    let e = t();
    if (r === undefined) {
        e.degraded = false;
        return;
    }
    let o = E8(r);
    if (o === "downstream_unreachable") {
        e.degraded = true;
    } else if (o === "downstream_error") {
        e.degraded = false;
    }
}
function i5o() {
    return t().degraded;
}
export { Rte, i5o };
