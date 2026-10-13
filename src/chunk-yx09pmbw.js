import { V } from "/$bunfs/root/chunk-zby5bms5.js";
import { iEs, V_, Dt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { KO } from "/$bunfs/root/chunk-kxnwft6q.js";
import { ql } from "/$bunfs/root/chunk-snyys9as.js";
import { xKt, aDe } from "/$bunfs/root/chunk-kasbfbhj.js";
import { P, Z, gh, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
function t() {
    let [o, e] = gh((s)=>s + 1, 0);
    P(()=>iEs(e), []);
    return o;
}
function q4n(o, e) {
    return xKt(o) ?? xKt(e) ?? V_();
}
function _U(o) {
    return Dt(q4n(o.mainLoopModelForSession, o.mainLoopModel));
}
function Rfe() {
    let o = V((n)=>n.mainLoopModel);
    let e = V((n)=>n.mainLoopModelForSession);
    let s = KO();
    let i = t();
    let r = ql();
    return Z(()=>aDe(e, o), [
        e,
        o,
        s,
        r,
        i
    ]);
}
function jcn() {
    let o = V((n)=>n.mainLoopModel);
    let e = V((n)=>n.mainLoopModelForSession);
    let s = KO();
    let i = t();
    let r = ql();
    return Z(()=>q4n(e, o), [
        e,
        o,
        s,
        r,
        i
    ]);
}
function lu() {
    let mainLoopModel = V((n)=>n.mainLoopModel);
    let mainLoopModelForSession = V((n)=>n.mainLoopModelForSession);
    let s = KO();
    let i = t();
    let r = ql();
    return Z(()=>_U({
            mainLoopModel,
            mainLoopModelForSession
        }), [
        mainLoopModelForSession,
        mainLoopModel,
        s,
        r,
        i
    ]);
}
export { q4n, _U, Rfe, jcn, lu };
