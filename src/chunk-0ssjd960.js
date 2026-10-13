import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { hs } from "/$bunfs/root/chunk-nb5ge4vq.js";
const KNn = "in-process";
class Tys {
    captured = null;
    cliOverride = null;
    setCliOverride(e) {
        this.cliOverride = e;
    }
    capture(e) {
        this.captured = e;
    }
    replaceWith(e) {
        this.captured = e;
        this.cliOverride = null;
    }
}
const hNs = new q(()=>new Tys);
function o() {
    return hNs.of(B().host);
}
function Azs(e) {
    o().setCliOverride(e);
}
function dpo() {
    return o().cliOverride;
}
function upo(e) {
    o().replaceWith(e);
    t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`);
}
function ppo() {
    return o().captured !== null;
}
function C_r() {
    let e = o();
    if (e.cliOverride) {
        e.capture(e.cliOverride);
        t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);
    } else {
        e.capture(hs("teammateMode", KNn).value);
        t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`);
    }
}
function Oxt() {
    let e = o();
    if (e.captured === null) {
        c(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug"));
        C_r();
    }
    return e.captured ?? KNn;
}
export { KNn, Tys, hNs, Azs, dpo, upo, ppo, C_r, Oxt };
