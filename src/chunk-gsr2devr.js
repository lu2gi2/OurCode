import { K, vxr, MBe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { J2n } from "/$bunfs/root/chunk-xgw72tt1.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { join } from "path";
function $L() {
    return MBe() ?? join(Pio(), K());
}
function Pio() {
    return join(ve(), "uploads");
}
function xHn(t, e) {
    return `${t}-${u(e)}`;
}
const s = /^[A-Za-z0-9_-]{8}-/;
function o(t) {
    return J2n(t.replace(/_+$/, ""));
}
function u(t) {
    if (o(t)) {
        return `${t}_`;
    }
    return t;
}
function Rus(t) {
    let e = t.replace(s, "");
    if (e.endsWith("_") && o(e)) {
        return e.slice(0, -1);
    }
    return e || t;
}
const c = 1024;
function xus(t, e) {
    let n = vxr();
    if (!n.has(t) && n.size >= c) {
        let r = n.keys().next().value;
        if (r !== undefined) {
            n.delete(r);
        }
    }
    n.set(t, e);
}
function A8t(t) {
    return vxr().get(t);
}
export { $L, Pio, xHn, Rus, xus, A8t };
