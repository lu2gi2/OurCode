import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { vce } from "/$bunfs/root/chunk-k3pmdjj0.js";
import { xa } from "/$bunfs/root/chunk-mddy60q9.js";
import { Bo, rd } from "/$bunfs/root/chunk-2dp0fzyb.js";
function afr(o, e) {
    if (o.type !== "pending") {
        return false;
    }
    let n = Bo(o.name);
    return !e.some((t)=>rd(t, o.name, n));
}
async function lfr(o, e, { maxWaitMs, until, pollMs = 50 }) {
    let i = (r)=>r.clients.some((c)=>e(c, r));
    if (!i(o())) {
        return;
    }
    let p = Date.now() + maxWaitMs;
    while(Date.now() < p){
        await Q(pollMs);
        let r = o();
        if (until?.(r) || !i(r)) {
            return;
        }
    }
}
function czs(o) {
    return o.some(YOn);
}
function YOn(o) {
    return "role" in o.config && o.config.role === "comms";
}
function EAt(o) {
    return o.mcpInfo?.role === "comms";
}
function Zne(o) {
    if (xa()) {
        return o.filter((e)=>!EAt(e));
    }
    return o;
}
async function uKe(o) {
    if (!xa()) {
        return;
    }
    await lfr(o, (e, n)=>afr(e, n.tools) && !YOn(e), {
        maxWaitMs: vce
    });
}
export { afr, lfr, czs, YOn, EAt, Zne, uKe };
