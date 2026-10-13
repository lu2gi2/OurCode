import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
const n = new Set([
    "hipaa"
]);
class o {
    latched = new Set;
    latchedTaints = [];
    taints = [];
    current = [];
    changed = Oe();
    verdict = undefined;
    replaceTaints(e) {
        this.current = D(e).sort();
        for (let r of e){
            if (n.has(r)) {
                this.latched.add(r);
            }
        }
        if (this.latched.size !== this.latchedTaints.length) {
            this.latchedTaints = Array.from(this.latched).sort();
        }
        return this.refreshEffectiveTaints();
    }
    latchTaints(e) {
        let r = false;
        for (let i of e){
            if (n.has(i) && !this.latched.has(i)) {
                this.latched.add(i);
                r = true;
            }
        }
        if (!r) {
            return false;
        }
        this.latchedTaints = Array.from(this.latched).sort();
        return this.refreshEffectiveTaints();
    }
    refreshEffectiveTaints() {
        let e = D([
            ...this.latchedTaints,
            ...this.current
        ]).sort();
        if (e.length === this.taints.length && e.every((r, i)=>r === this.taints[i])) {
            return false;
        }
        this.taints = e;
        this.changed.emit(this.taints);
        return true;
    }
    registerVerdict(e) {
        this.verdict = e;
    }
    resetForTesting() {
        this.latched.clear();
        this.latchedTaints = [];
        this.taints = [];
        this.current = [];
    }
}
const a = new q(()=>new o);
function t() {
    return a.of(B().host);
}
function dTr(e) {
    return t().replaceTaints(e);
}
function zCs(e) {
    return t().latchTaints(e);
}
function GCs(e) {
    return n.has(e);
}
function sl(e) {
    return t().taints.includes(e);
}
function OF() {
    return t().taints;
}
function Oue() {
    return t().current;
}
function uTr() {
    return t().latchedTaints;
}
function G7(e) {
    return t().changed.subscribe(e);
}
function VCs() {
    t().resetForTesting();
}
function qCs(e) {
    t().registerVerdict(e);
}
function wS(e) {
    return t().verdict?.isPolicyAllowed(e) ?? false;
}
function KCs() {
    let verdict = t().verdict;
    if (verdict) {
        return verdict.rememberedCoreSkills();
    }
    return [];
}
function Qjn(e) {
    try {
        return t().verdict?.commandPolicyGateAllows(e) ?? false;
    } catch  {
        return false;
    }
}
function dC(e) {
    let verdict = t().verdict;
    if (!verdict) {
        return "unregistered";
    }
    return verdict.policyDenyKind(e);
}
function QV(e, r, i) {
    return t().verdict?.policyDeniedReason(e, r, i) ?? null;
}
function Zjn() {
    return t().verdict?.complianceTaintsSettled() ?? false;
}
function Mue() {
    let verdict = t().verdict;
    if (verdict === undefined) {
        return false;
    }
    try {
        return !verdict.policyLimitsCacheLoaded();
    } catch  {
        return true;
    }
}
function YCs() {
    let verdict = t().verdict;
    if (verdict === undefined) {
        return "loaded";
    }
    try {
        return verdict.autoDefaultVerdictState();
    } catch  {
        return "pending";
    }
}
function eWn() {
    let verdict = t().verdict;
    if (verdict === undefined) {
        return false;
    }
    try {
        return verdict.policyVerdictAbsent();
    } catch  {
        return true;
    }
}
function XCs() {
    let verdict = t().verdict;
    if (verdict === undefined) {
        return false;
    }
    try {
        return verdict.principalSeenUnderHipaa();
    } catch  {
        return true;
    }
}
export { dTr, zCs, GCs, sl, OF, Oue, uTr, G7, VCs, qCs, wS, KCs, Qjn, dC, QV, Zjn, Mue, YCs, eWn, XCs };
