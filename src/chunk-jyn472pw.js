import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { uue } from "/$bunfs/root/chunk-0ycjphb5.js";
class r {
    stampMs = 0;
    detachedSinceLastAttach = false;
    reset() {
        this.stampMs = 0;
        this.detachedSinceLastAttach = false;
    }
}
const s = new q(()=>new r);
function a() {
    return s.of(B().host);
}
function J$r(e) {
    let t = a();
    if (e === 0) {
        t.reset();
        return;
    }
    if (t.detachedSinceLastAttach || t.stampMs === 0) {
        t.stampMs = e;
    }
    t.detachedSinceLastAttach = false;
}
function uUt() {
    a().detachedSinceLastAttach = true;
}
function Q$r() {
    return a().detachedSinceLastAttach;
}
function Xje() {
    return a().stampMs;
}
function pUt(e) {
    return false;
}
async function rfn() {
    while(true){
        let e = Date.now();
        if (!pUt(e)) {
            return;
        }
        let { detachedSinceLastAttach, stampMs } = a();
        let c = detachedSinceLastAttach || stampMs === 0 ? 500 : stampMs + 500 - e;
        await Q(Math.max(25, c) + 25);
    }
}
export { J$r, uUt, Q$r, Xje, pUt, rfn };
