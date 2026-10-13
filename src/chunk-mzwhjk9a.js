import { lt, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { P, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
const mEe = "continue";
function F2o(t, e, n) {
    if (n && e === mEe && t === `${mEe}/`) {
        return "/";
    }
    if (e.startsWith("/") && t.length === mEe.length + e.length + 1 && t.startsWith(mEe + e)) {
        return t.slice(mEe.length);
    }
    return t;
}
class o {
    lastResult = null;
    listeners = new Set;
    inFlight = null;
}
const l = new lt(()=>new o);
function i() {
    return l.of(B());
}
function JXn(t) {
    let e = i();
    e.lastResult = t;
    for (let n of e.listeners){
        n(t);
    }
}
function U2o() {
    return i().inFlight;
}
function vWr(t) {
    i().inFlight = t;
}
function B2o() {
    JXn(null);
    i().inFlight = null;
}
function j2o() {
    let [t, e] = y(()=>i().lastResult);
    P(()=>{
        let n = i();
        e(n.lastResult);
        n.listeners.add(e);
        return ()=>{
            n.listeners.delete(e);
        };
    }, []);
    return t;
}
export { mEe, F2o, JXn, U2o, vWr, B2o, j2o };
