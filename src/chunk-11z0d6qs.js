import { Lh, aG } from "/$bunfs/root/chunk-ctt36bn8.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { wo } from "/$bunfs/root/chunk-6s83kxfy.js";
import { It } from "/$bunfs/root/chunk-4r6b8efh.js";
import { dg } from "/$bunfs/root/chunk-s7aawpq2.js";
import { Ro } from "/$bunfs/root/chunk-5aqxznmv.js";
import { qM } from "/$bunfs/root/chunk-0xz61zj0.js";
import { xV, QW } from "/$bunfs/root/chunk-xv9n7kza.js";
function EOe(o) {
    let l = wo();
    l.workflowAuthoringSkillAvailable ??= e();
    return l.workflowAuthoringSkillAvailable && !QW(qM) && (o === undefined || i(o));
}
function e() {
    if (!dg()) {
        return false;
    }
    if (xV() || Lh()) {
        return false;
    }
    if (a.CLAUDE_CODE_ENTRYPOINT === "local-agent") {
        return false;
    }
    let o = ft().skillOverrides?.[qM];
    if (o === "off" || o === "user-invocable-only") {
        return false;
    }
    let l = aG();
    if (l !== undefined && !l.includes(qM)) {
        return false;
    }
    return true;
}
function i(o) {
    return o.some((l)=>It(l, Ro));
}
export { EOe };
