import { bu, O0, Uxo, Bxo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Nt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { MJt, ee, qNn } from "/$bunfs/root/chunk-499b1h1a.js";
import { hK, Uh, Bh, Ey } from "/$bunfs/root/chunk-8qgm3a5n.js";
import { uT } from "/$bunfs/root/chunk-kasbfbhj.js";
function Lme() {
    if (!Nt()) {
        return true;
    }
    return bu() !== null && Uxo();
}
function ZVo(e) {
    let t = O0(e);
    let n = Bxo(e);
    return ()=>{
        t();
        n();
    };
}
function i7e() {
    if (ee().autoReact.enabledMemo !== true) {
        return new Set;
    }
    return new Set(Array.from(u(), (e)=>e.slug));
}
function JOe() {
    let { autoReact, durable, live, wakes } = ee();
    let i = new Set;
    if (autoReact.enabledMemo === false || autoReact.userDisarmed) {
        return i;
    }
    for (let [o, s] of live.bootingWiredArms){
        if (s.scanGeneration !== wakes.scanGeneration || live.retiredInFlightArms.has(o) || durable.stopLatches.isStopped(o)) {
            continue;
        }
        if (!Uh(o) || s.freshPublish && Ey(o) && s.stopGeneration === hK(o)) {
            i.add(o);
        }
    }
    return i;
}
function* u() {
    for (let e of ee().live.supervisors.values()){
        if (!e.stopped && e.autoReactWiring !== undefined && !Bh(e.slug)) {
            yield e;
        }
    }
}
function Pzr(e) {
    let { live } = ee();
    for (let n of u()){
        if (e?.reconnecting !== true || n.timer !== undefined || live.inFlightSubscribes.has(n.slug)) {
            return true;
        }
    }
    return false;
}
function eqo() {
    return ee().autoReact.enabledMemo === true && Pzr({
        reconnecting: true
    });
}
function aWt(e) {
    let live = ee().live;
    for (let n of e){
        let r = live.supervisors.get(n);
        if (r !== undefined) {
            MJt(r);
            live.supervisors.delete(n);
        }
        live.heardVersions.delete(n);
        qNn(n);
        ee().liveDocWatch.headSinks.get(n)?.sourceEnded();
    }
    c(e);
}
function c(e) {
    let live = ee().live;
    for (let n of e){
        if (live.inFlightSubscribes.has(n) && !live.supervisors.has(n)) {
            live.retiredInFlightArms.add(n);
            live.bootingWiredArms.delete(n);
            live.inFlightWiredIntent.delete(n);
        }
    }
}
const a7e = 10000;
function a() {
    return ee().autoReact.unattendedReplies;
}
function Izr(e) {
    let t = a();
    t.set(e, Math.min((t.get(e) ?? 0) + 1, a7e));
}
function Ozr(e, t) {
    if (t > 0) {
        let n = a();
        n.set(e, Math.min((n.get(e) ?? 0) + t, a7e));
    }
}
function tqo(e) {
    let t = a();
    let n = t.get(e) ?? 0;
    t.delete(e);
    return n;
}
function Qyn() {
    let autoReact = ee().autoReact;
    let e_unattendedReplies = autoReact.unattendedReplies;
    autoReact.unattendedReplies = new Map;
    let total = 0;
    for (let r of e_unattendedReplies.values()){
        total += r;
    }
    return {
        total,
        bySlug: e_unattendedReplies
    };
}
function Zyn(e, { where, stop }) {
    return uT(`Claude auto-replied to ${e} ${I(e, "comment")}${where} while you were away.${stop}`, "notice");
}
export { Lme, ZVo, i7e, JOe, Pzr, eqo, aWt, a7e, Izr, Ozr, tqo, Qyn, Zyn };
