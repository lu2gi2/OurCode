import { pUn, ywr, REr, xEr, eu, ya, O6e, WRe, mg, Ea, Fn, k, RY } from "/$bunfs/root/chunk-0ycjphb5.js";
import { B, Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { DI, PL, u3t, Pqe, Vur, qur, LI } from "/$bunfs/root/chunk-j6dkn7h7.js";
import { vbs } from "/$bunfs/root/chunk-2atph4yw.js";
import { _re, nst } from "/$bunfs/root/chunk-eck15hm6.js";
import { ru } from "/$bunfs/root/chunk-m6z3m7rx.js";
const m = 30000;
const Rqe = (o)=>pUn(o) && !WRe();
function i(o) {
    if (Rqe(o) && xEr()) {
        return o.over.promise;
    }
    return Promise.resolve();
}
const p = (o)=>Ge(i(o), m);
const jrt = (o)=>REr.of(o).fetchHold;
function R0e() {
    return jrt(B().host);
}
const s = (o)=>WRe() || pUn(o);
const a = (o)=>o.hasHeld || Rqe(o);
const d = ()=>(Ee() || a(R0e())) && s(R0e()) && !ya() && Fn(DI, PL).source === "fallback";
const xqe = ()=>mg() && Fn(DI, PL).source === "disk" && Vur();
const u = ()=>a(R0e()) && xqe() && LI();
const f = ()=>s(R0e()) && xqe() && !LI();
const n = ()=>f() && O6e();
async function h() {
    await Ea().catch(()=>{});
    if (n()) {
        return Ea().catch(()=>{});
    }
}
const c = ()=>Math.max(0, _re - vbs());
function F({ timedOut }) {
    let r = !timedOut && ya();
    if (timedOut) {
        return `no answer within ${_re}ms`;
    }
    if (r) {
        return "the flag payload landed";
    }
    return "the fetch settled with no payload";
}
async function l(initialize = Ea) {
    let e = await nst({
        initialize,
        budgetMs: c()
    });
    t(`installed plugins' hooks modules held ${Math.round(e.waitMs)}ms for the rollout flag (${DI}): ` + F(e));
}
async function ULs() {
    await Pqe();
    let o = f();
    let e = d() || u();
    let r = o || e;
    let x = o ? h : Ea;
    if (r) {
        await p(R0e());
    }
    if (r) {
        return l(x);
    }
}
function BLs(o) {
    if (!(xqe() && !LI())) {
        return;
    }
    let r = eu(()=>{
        if (!ya()) {
            return;
        }
        r();
        if (LI()) {
            t(`installed plugins' hooks modules load late: the rollout flag (${DI}) answered on after the load went on over a saved off`);
            o();
        }
    });
}
const d3t = {
    served: "the rollout switch served off",
    saved: "the rollout switch was saved off by an earlier session and is not refreshed yet"
};
function jLs() {
    if (xqe()) {
        return d3t.saved;
    }
    return d3t.served;
}
const _ = {
    override: "from a local override",
    payload: "from GrowthBook (this session's payload)",
    disk: "from GrowthBook (the disk cache of an earlier session)",
    disabled: "from the default (GrowthBook is off for this session: a third-party provider, or telemetry opted out)",
    fallback: "from the default (a cold GrowthBook cache, no payload yet)"
};
function WLs() {
    if (ru()) {
        return "in a tool server's daemon";
    }
    return _[Fn(DI, PL).source];
}
function $Ls() {
    u3t.isFollowed = true;
}
const Gur = ()=>RY(Fn(DI, PL).source);
async function FLs() {
    if (Gur()) {
        return undefined;
    }
    return l();
}
const fis = [
    "NODE_ENV",
    "DISABLE_GROWTHBOOK",
    "DISABLE_TELEMETRY",
    "DO_NOT_TRACK",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC",
    "CLAUDE_CODE_GB_DISK_CACHE_WHEN_TELEMETRY_OFF",
    "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST",
    "CLAUDE_CODE_CUSTOM_OAUTH_URL",
    "CLAUDE_INTERNAL_FC_OVERRIDES",
    ...ywr
];
const mis = ()=>qur() !== k(DI, PL);
export { Rqe, jrt, R0e, xqe, $Ls, Gur, FLs, ULs, BLs, d3t, jLs, WLs, fis, mis };
