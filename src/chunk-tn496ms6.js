import { q, cs, WZ, C9 } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Cr } from "/$bunfs/root/chunk-6kc68p18.js";
import { Pr, cn } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { fe, MSe, Qn, Dv, JFe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { KJt } from "/$bunfs/root/chunk-ssn8w7cj.js";
import { vh } from "/$bunfs/root/chunk-fbhagmpx.js";
function cc(o) {
    let t = fe("policySettings")?.strictPluginOnlyCustomization;
    if (t === true) {
        return true;
    }
    if (Array.isArray(t)) {
        return t.includes(o);
    }
    return false;
}
const p = new Set([
    "plugin",
    "policySettings",
    "built-in",
    "builtin",
    "bundled"
]);
function mV(o) {
    return o !== undefined && p.has(o);
}
function a(o) {
    return o;
}
function Ggs() {
    return null;
}
function Vgs(o) {
    return false;
}
function LLn(o) {
    return null;
}
const c = "cli";
class g {
    snapshotKey = ()=>c;
    snapshotsBySessionId = new Map;
    setSnapshotKey(o) {
        this.snapshotKey = o;
    }
    current() {
        let o = this.snapshotKey();
        let t = this.snapshotsBySessionId.get(o);
        if (!t) {
            t = {
                initialHooksConfig: null
            };
            this.snapshotsBySessionId.set(o, t);
        }
        return t;
    }
    store(o) {
        let t = this.current();
        t.initialHooksConfig = o;
        if (vh()) {
            t.userHooksConfig = fe("userSettings")?.hooks ?? {};
        } else {
            delete t.userHooksConfig;
        }
    }
    evict(o) {
        if (o === c) {
            return;
        }
        this.snapshotsBySessionId.delete(o);
    }
}
const k = new q(()=>new g);
function e() {
    return cs(k);
}
function r() {
    let o = fe("policySettings");
    if (o?.disableAllHooks === true) {
        return {};
    }
    if (o?.allowManagedHooksOnly === true || Cr()) {
        return o?.hooks ?? {};
    }
    if (cc("hooks")) {
        return o?.hooks ?? {};
    }
    let t = Qn();
    if (t.disableAllHooks === true) {
        if (!NLn()) {
            return o?.hooks ?? {};
        }
        return m(f.filter(cn).map((n)=>fe(n)?.hooks));
    }
    return a(t.hooks ?? {});
}
var f = [
    "userSettings",
    "flagSettings",
    "policySettings"
];
function m(o) {
    let t = {};
    for (let n of o){
        for (let [s, l] of Object.entries(n ?? {})){
            let i = s;
            t[i] = [
                ...t[i] ?? [],
                ...l ?? []
            ];
        }
    }
    return t;
}
function NLn() {
    return d() && !Y$();
}
function Odo() {
    return d() && Y$();
}
function d() {
    if (!vh() || Cr() || cc("hooks") || Qn().disableAllHooks !== true) {
        return false;
    }
    return fe("policySettings")?.allowManagedHooksOnly !== true && f.filter(cn).every((t)=>fe(t)?.disableAllHooks !== true);
}
function Ag() {
    return Cr() || Zce();
}
function Zce() {
    let o = fe("policySettings");
    if (o?.allowManagedHooksOnly === true) {
        return true;
    }
    if (Qn().disableAllHooks === true && o?.disableAllHooks !== true) {
        return true;
    }
    return false;
}
function Tyr() {
    return Cr() || fe("policySettings")?.allowManagedHooksOnly === true || Y$();
}
function Y$() {
    return JFe(Dv()).length > 0 || WZ() && MSe();
}
function Mdo() {
    return Tyr() || cc("hooks");
}
function Py() {
    return fe("policySettings")?.disableAllHooks === true;
}
function hCe() {
    return Py() || Zce();
}
function Hdo() {
    e().store(r());
    C9();
}
function DB(o) {
    Pr(o);
    e().store(r());
    C9();
}
async function QRt(o) {
    let t = await KJt(o);
    try {
        e().store(r());
        C9();
    } finally{
        t?.();
    }
}
function* Ddo() {
    for (let o of e().snapshotsBySessionId.values()){
        if (o.initialHooksConfig !== null) {
            yield o.initialHooksConfig;
        }
    }
}
function q4() {
    let o = e().current();
    if (o.initialHooksConfig === null) {
        Pr();
        e().store(r());
        C9();
    }
    return o.initialHooksConfig;
}
function Ayr() {
    q4();
    return e().current().userHooksConfig ?? (vh() ? fe("userSettings")?.hooks ?? {} : {});
}
export { cc, mV, Ggs, Vgs, LLn, NLn, Odo, Ag, Zce, Tyr, Y$, Mdo, Py, hCe, Hdo, DB, QRt, Ddo, q4, Ayr };
