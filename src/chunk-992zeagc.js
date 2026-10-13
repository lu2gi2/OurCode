import { Op } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Mt } from "/$bunfs/root/chunk-7mawjt4q.js";
import { TP } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Nt, k } from "/$bunfs/root/chunk-0ycjphb5.js";
function YWt() {
    return TP("autoContinueAtUsageLimit")[0];
}
function abn(e) {
    return YWt() ?? e === "absent";
}
const u = "tengu_marble_heron";
function DQn() {
    let e = n();
    if (o(e)) {
        return e;
    }
    return {};
}
function cMe() {
    let e = n();
    return r(o(e) ? e.enabled : e);
}
function XWt() {
    return Op() && !Nt() && !Mt();
}
function t4o() {
    return XWt() && cMe();
}
function lbn() {
    return r(DQn().autoArm);
}
function n() {
    return k(u, {});
}
function o(e) {
    return typeof e === "object" && e !== null && !Array.isArray(e);
}
function r(e) {
    if (e === undefined) {
        return true;
    }
    if (typeof e === "string") {
        let t = e.trim().toLowerCase();
        return t !== "" && t !== "false" && t !== "0";
    }
    return Boolean(e);
}
export { YWt, abn, DQn, cMe, XWt, t4o, lbn };
