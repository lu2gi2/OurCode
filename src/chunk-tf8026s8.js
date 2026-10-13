import { EUn, f7, Gwr, zvs, t6e, Kvs, Xr, rvr, jk, lvr, OIt, $ho, Ql, We, Gf, Dt, nH, wRe, jbe, Blt, RRe, Nt, Fn, k, Ae, ce, Nl, F_o } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { lt, B, Lg, Xc, tsn, nj, nsn, WZ, PBe, U2n } from "/$bunfs/root/chunk-ctt36bn8.js";
import { pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { vr, al } from "/$bunfs/root/chunk-7mawjt4q.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { QE } from "/$bunfs/root/chunk-x47nahfr.js";
import { ws, Lo, cn, Cp } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { Ia, $F, Iz, pC, Oz, $b } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { th, Fm } from "/$bunfs/root/chunk-52bcnmbr.js";
import { RRs, yn, Hv, fe, MSe, Ap, ft, bO, Dv, J7, Tn, F3e } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { il, w_, jdt, Ie, vc, xz } from "/$bunfs/root/chunk-nj0630nv.js";
import { sl, YCs } from "/$bunfs/root/chunk-pp3y3t61.js";
import { dg } from "/$bunfs/root/chunk-s7aawpq2.js";
import { DNe } from "/$bunfs/root/chunk-tsamgvyd.js";
import { Ht, Rp, oq } from "/$bunfs/root/chunk-77t63btp.js";
import { ln } from "/$bunfs/root/chunk-pj42g5eb.js";
import { o, oe, ue } from "/$bunfs/root/chunk-smx21d0k.js";
import { resolve } from "path";
function lde(e, n, r) {
    switch(e){
        case "ask":
            if (n.isAutoModeAvailable) {
                return "auto";
            }
            return "default";
        case "default":
            {
                if (n.isAutoModeAvailable) {
                    return "auto";
                }
                let s = r ?? "default";
                if (s === "auto" || s === "bypassPermissions" && !n.isBypassPermissionsModeAvailable) {
                    return "default";
                }
                return s;
            }
        case "proactive":
            if (n.isBypassPermissionsModeAvailable) {
                return "bypassPermissions";
            }
            if (n.isAutoModeAvailable) {
                return "auto";
            }
            return "acceptEdits";
    }
}
function H(e, n) {
    if (n === "auto" || e === "proactive" && n === "acceptEdits") {
        return n;
    }
}
const Ee = new lt(()=>({
        layers: []
    }));
function q() {
    return Ee.peek(B())?.layers ?? [];
}
function Dit(e, n) {
    return Gf(Dt(e)) === Gf(Dt(n));
}
const Se = "tengu_loggia_passage";
function T() {
    return k(Se, false);
}
function hhs({ sent, turnEffort, hookEffortValue }) {
    if (sent === undefined) {
        return {
            carry: null,
            withheld: "none_sent"
        };
    }
    if (hookEffortValue !== undefined) {
        return {
            carry: null,
            withheld: "hook"
        };
    }
    if (turnEffort !== undefined) {
        return {
            carry: null,
            withheld: "turn_layer"
        };
    }
    if (T()) {
        return {
            carry: null,
            withheld: "killed"
        };
    }
    return {
        carry: sent
    };
}
function cJt(e) {
    return {
        refused_effort_level: pe(e.carry),
        refused_effort_withheld: pe(e.carry === null ? e.withheld : undefined)
    };
}
function fuo({ refusedEffort, fallbackModel, heldBySession, loopOverride, loopEffort }) {
    if (heldBySession) {
        return {
            latchEffort: refusedEffort.carry ?? undefined,
            loopEffort: undefined
        };
    }
    let d = refusedEffort.carry ?? muo(loopOverride, loopEffort);
    return {
        latchEffort: undefined,
        loopEffort: d === undefined ? undefined : {
            model: fallbackModel,
            level: d
        }
    };
}
function muo(e, n) {
    if (n !== undefined && n.model === e) {
        return n.level;
    }
}
function Q() {
    return nj()?.carriedEffort !== undefined;
}
function O(e) {
    let n = nj();
    let r = Xc();
    if (n?.carriedEffort === undefined || r == null || T()) {
        return;
    }
    try {
        if (Dit(r, n.fallbackModel) && Dit(e, n.fallbackModel)) {
            return n.carriedEffort;
        }
        return undefined;
    } catch (error) {
        c(W(error));
        return;
    }
}
function uNn({ loopEffort, continuesMainConversation }, r) {
    if (loopEffort !== undefined) {
        if (T()) {
            return null;
        }
        return loopEffort;
    }
    return (continuesMainConversation ? O(r) : undefined) ?? null;
}
function yhs({ carried, withIt, withoutIt, isSavedSetAside }) {
    if (withIt === withoutIt) {
        if (withIt === carried) {
            return "moot";
        }
        return "no_effect";
    }
    if (withIt !== carried) {
        return "clamped";
    }
    if (isSavedSetAside) {
        return "applied_over_saved";
    }
    return "applied";
}
function pNn() {
    nsn("effort_change");
}
function _hs(e) {
    let n = nj();
    if (n !== undefined && !Dit(e, n.fallbackModel)) {
        nsn("model_change");
    }
}
function bhs() {
    let e = nj();
    if (e?.carriedEffort === undefined) {
        return;
    }
    let n = Xc();
    if (T()) {
        nsn("kill_switch");
    } else if (n == null || !Dit(n, e.fallbackModel)) {
        nsn("model_change");
    }
}
function cde() {
    return a.CLAUDE_CODE_MAX_EFFORT_REMINDER ?? k("tengu_proud_clover", false);
}
function GS(e) {
    if (U2n(e)) {
        return false;
    }
    let n = wRe(e, "effort");
    if (n !== undefined) {
        return n;
    }
    let r = We(e);
    let s = jdt("effort", r);
    if (s !== undefined) {
        return s;
    }
    let f = Gwr(e, r);
    if (f !== undefined) {
        return f.length > 0;
    }
    if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-haiku-4-5") {
        return false;
    }
    if (a.CLAUDE_CODE_ALWAYS_ENABLE_EFFORT) {
        return true;
    }
    if (w_(r, "effort", e) || r === "claude-mythos-5") {
        return true;
    }
    return xz(vc(e));
}
function Gre(e) {
    if (U2n(e)) {
        return false;
    }
    let n = wRe(e, "max_effort");
    if (n !== undefined) {
        return n;
    }
    let r = We(e);
    let s = te("max_effort", e, r);
    if (s !== undefined) {
        return s;
    }
    let f = Gwr(e, r);
    if (f !== undefined) {
        return f.includes("max");
    }
    if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-opus-4-5" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-haiku-4-5") {
        return false;
    }
    if (w_(r, "max_effort", e) || r === "claude-mythos-5") {
        return true;
    }
    return xz(vc(e));
}
function Lit(e) {
    if (U2n(e)) {
        return false;
    }
    let n = wRe(e, "xhigh_effort");
    if (n !== undefined) {
        return n;
    }
    let r = We(e);
    let s = te("xhigh_effort", e, r);
    if (s !== undefined) {
        return s;
    }
    let f = Gwr(e, r);
    if (f !== undefined) {
        return f.includes("xhigh");
    }
    if (r.includes("claude-3-") || r === "claude-opus-4-0" || r === "claude-opus-4-1" || r === "claude-opus-4-5" || r === "claude-opus-4-6" || r === "claude-sonnet-4-0" || r === "claude-sonnet-4-5" || r === "claude-sonnet-4-6" || r === "claude-haiku-4-5") {
        return false;
    }
    if (w_(r, "xhigh_effort", e) || r === "claude-mythos-5") {
        return true;
    }
    return xz(vc(e));
}
function te(e, n, r) {
    if (jdt("effort", r) === false) {
        return false;
    }
    let s = jdt(e, r);
    if (s === undefined) {
        return;
    }
    return s && GS(n);
}
function ve(e) {
    return Lit(e);
}
function XI(e) {
    return dg() && (e === undefined || ve(e));
}
function zA(e, n) {
    return e === true && XI(n);
}
function fNn(e, n, r) {
    if (n.sessionEffort?.kind === "level") {
        let s = n.sessionEffort.value;
        return !(r === s || typeof r === "string" && Tb(r) && B5(r, e) === s);
    }
    return GA(e, uc(n)) !== GA(e, r);
}
function mNn(e, n, r) {
    if (r.sessionEffort?.kind === "level" || typeof n !== "string") {
        return false;
    }
    let s = Ev(e, uc(r, e));
    let f = Ev(e, uc(r, e, {
        withHold: false
    }), {
        carriedEffort: null
    });
    return jQ(n) === s && s !== f;
}
function Tb(e) {
    return Ia.includes(e);
}
function b(e) {
    return Ia.indexOf(e);
}
const Nit = "high";
function t_r(e) {
    return Tb(e) && b(e) > b(Nit);
}
function n_r(e) {
    let n = We(e);
    return w_(n, "thinking_disabled_effort_cap", e) ?? n === "claude-opus-5";
}
function ne(e) {
    let n = [
        ...Ap(),
        ...Lo().map((f)=>fe(f)),
        ...q()
    ];
    let r = n.some((f)=>Object.values(f?.modelSettings ?? {}).some((d)=>d?.maxEffortLevel !== undefined)) ? bV(e) : undefined;
    let s = null;
    for (let f of n){
        if (!f) {
            continue;
        }
        let d;
        if (r !== undefined) {
            for (let [u, S] of Object.entries(f.modelSettings ?? {})){
                let m = S?.maxEffortLevel;
                if (m !== undefined && (d === undefined || b(m) < b(d)) && bV(u) === r) {
                    d = m;
                }
            }
        }
        d ??= f.maxEffortLevel;
        if (d !== undefined && d !== "max" && (s === null || b(d) < b(s))) {
            s = d;
        }
    }
    return s;
}
function dJt(e) {
    let n = ne(e);
    let r = null;
    let s = Ie();
    if (s === "firstParty" || s === "gateway") {
        let d = We(nH(e.trim().toLowerCase()), {
            identity: true
        });
        let u = jbe().find((S)=>We(nH(S.apiName.trim().toLowerCase()), {
                identity: true
            }) === d)?.maxEffortLevel;
        r = u != null && Tb(u) ? u : null;
    }
    let f = r === null ? n : n === null ? r : b(n) < b(r) ? n : r;
    if (f === "max") {
        return null;
    }
    return f;
}
function MNe(e) {
    if (Ie() !== "firstParty") {
        return null;
    }
    let n = Blt();
    if (n === null) {
        return null;
    }
    let n_default_effort_level = n.default_effort_level;
    if (n_default_effort_level == null || !Tb(n_default_effort_level)) {
        return null;
    }
    let s = We(nH(e.trim().toLowerCase()), {
        identity: true
    });
    if (We(nH(n.name.trim().toLowerCase()), {
        identity: true
    }) === s) {
        return n_default_effort_level;
    }
    return null;
}
function r_r(e) {
    return Blt()?.override_user_effort === true && MNe(e) !== null;
}
function o_r(e, n) {
    let r = dJt(n);
    return r === null || b(e) <= b(r);
}
function dde(e) {
    return Ia.filter((n)=>o_r(n, e));
}
function B5(e, n) {
    let r = dJt(n);
    if (r !== null && b(e) > b(r)) {
        return r;
    }
    return e;
}
function j(e, n) {
    if (n === "xhigh") {
        return Lit(e);
    }
    if (n === "max") {
        return Gre(e);
    }
    return true;
}
function Shs(e, n, r) {
    let s = dde(e).filter((f)=>f !== "max" && j(e, f));
    if (r === 1) {
        return s.find((f)=>b(f) > b(n));
    }
    return s.findLast((f)=>b(f) < b(n));
}
function whs(e) {
    let n = dJt(e);
    return n !== null && Ia.some((r)=>b(r) > b(n) && j(e, r));
}
function vhs(e, n) {
    if (typeof e !== "string" || !Tb(e)) {
        return null;
    }
    let r = dJt(n);
    if (r === null || b(e) <= b(r)) {
        return null;
    }
    let s = Ev(n, e) ?? r;
    return `Effort '${e}' exceeds the cap for ${n} set by your settings or organization; using '${s}'.`;
}
const re = {
    med: "medium"
};
const ie = {
    ultracode: "xhigh"
};
function q4e(e) {
    if (typeof e !== "string") {
        return;
    }
    let n = e.trim().toLowerCase();
    if (Object.hasOwn(ie, n)) {
        return n;
    }
}
function cxt(e) {
    let n = q4e(e);
    if (n === undefined) {
        return undefined;
    }
    return ie[n];
}
function BQ(e) {
    return String(e);
}
function jQ(e) {
    let n = e.trim().toLowerCase();
    let r = re[n] ?? n;
    if (Tb(r)) {
        return r;
    }
}
function $it(e) {
    let n = jQ(e);
    if (n !== undefined) {
        return {
            level: n,
            warning: undefined
        };
    }
    let r = q4e(e);
    if (r !== undefined) {
        return {
            level: r,
            warning: undefined
        };
    }
    return {
        level: undefined,
        warning: `Unknown --effort value '${e}' \u2014 ignoring it and using the default effort. Valid values: ${Ia.join(", ")}.`
    };
}
function NB(e) {
    if (e === undefined || e === null || e === "") {
        return;
    }
    if (typeof e === "number" && ee(e)) {
        return e;
    }
    let n = String(e).toLowerCase();
    let r = re[n] ?? n;
    if (Tb(r)) {
        return r;
    }
    let s = parseInt(n, 10);
    if (!isNaN(s) && ee(s)) {
        return s;
    }
}
function q_e(e) {
    if (e === "low" || e === "medium" || e === "high" || e === "xhigh") {
        return e;
    }
}
function gNn(e) {
    return ft().ultracode === true || q4e(e) === "ultracode";
}
function VM() {
    let a_CLAUDE_CODE_EFFORT_LEVEL = a.CLAUDE_CODE_EFFORT_LEVEL;
    if (a_CLAUDE_CODE_EFFORT_LEVEL?.toLowerCase() === "unset" || a_CLAUDE_CODE_EFFORT_LEVEL?.toLowerCase() === "auto") {
        return null;
    }
    return NB(a_CLAUDE_CODE_EFFORT_LEVEL);
}
const sessionEffort = Object.freeze({
    kind: "inherit"
});
const he = Object.freeze({
    kind: "default"
});
function WQ(value) {
    return {
        kind: "level",
        value
    };
}
function Fit(e) {
    if (e === undefined) {
        return he;
    }
    return WQ(e);
}
function be(e) {
    if (e === undefined) {
        return sessionEffort;
    }
    return WQ(e);
}
function Ehs(e) {
    if (e.kind === "level") {
        return String(e.value);
    }
    return null;
}
function Vre(e, n) {
    return e === n || e.kind === n.kind && (e.kind !== "level" || n.kind === "level" && e.value === n.value);
}
const _e = new Set([
    "claude-3-5-haiku",
    "claude-3-5-sonnet",
    "claude-3-7-sonnet",
    "claude-haiku-4-5",
    "claude-sonnet-4-0",
    "claude-sonnet-4-5",
    "claude-sonnet-4-6",
    "claude-sonnet-5",
    "claude-opus-4-0",
    "claude-opus-4-1",
    "claude-opus-4-5",
    "claude-opus-4-6",
    "claude-opus-4-7",
    "claude-opus-4-8",
    "claude-opus-5",
    "claude-fable-5",
    "claude-fable-5-1",
    "claude-mythos-5",
    "claude-mythos-5-1"
]);
const Z = new Map;
function guo(e) {
    let n = Z.get(e);
    if (n === undefined) {
        n = _e.has(e) || !oq(Rp(e));
        Z.set(e, n);
    }
    return n;
}
function Me() {
    let e = ce();
    if (e.firstStartVersion !== undefined) {
        return [];
    }
    let n = [];
    if (!e.unpinOpus47LaunchEffort) {
        n.push("claude-opus-4-7");
    }
    if (!e.unpinOpus48LaunchEffort) {
        n.push("claude-opus-4-8");
    }
    if (!e.unpinFable5LaunchEffort) {
        n.push("claude-fable-5");
        let r = a.ANTHROPIC_DEFAULT_FABLE_MODEL;
        if (r && !DNe(We(Dt(r), {
            deterministic: true,
            identity: true
        }))) {
            n.push(bV(r));
        }
    }
    return n;
}
function uJt() {
    let e = new Set;
    let n = [];
    for (let r of Lo()){
        let s = yn(r);
        if (s !== undefined) {
            let d = resolve(s);
            if (e.has(d) && r !== "flagSettings") {
                continue;
            }
            e.add(d);
        }
        let settings = fe(r);
        if (settings !== undefined && settings !== null) {
            n.push({
                source: r,
                settings
            });
        }
    }
    return n;
}
function se() {
    let e = uJt();
    let n = Blt();
    let r = n !== null && r_r(n.name) ? bV(n.name) : undefined;
    let legacyUserEffort;
    let f;
    let d = [];
    for (let { source, settings } of e){
        let setsTopLevel = settings.effortLevel !== undefined;
        if (source === "userSettings") {
            legacyUserEffort = q_e(settings.effortLevel);
            d.push({
                source,
                setsTopLevel: false,
                settings
            });
            continue;
        }
        if (setsTopLevel) {
            f = {
                level: q_e(settings.effortLevel)
            };
        }
        d.push({
            source,
            setsTopLevel,
            settings
        });
    }
    d.reverse();
    let u = d.map(({ settings })=>{
        let v = new Map;
        for (let [y, x] of Object.entries(settings.modelSettings ?? {})){
            let l = x?.effortLevel;
            if (l === undefined) {
                continue;
            }
            let h = bV(y);
            if (y === h || !v.has(h)) {
                v.set(h, l);
            }
        }
        return v;
    });
    let S = new Set;
    if (r !== undefined) {
        S.add(r);
    }
    for (let E of u){
        for (let v of E.keys()){
            S.add(v);
        }
    }
    let byModel = {};
    for (let E of S){
        if (E === r) {
            byModel[E] = undefined;
        }
        for(let v = 0; v < d.length; v++){
            if (E === r && !Le(d[v].source)) {
                continue;
            }
            let y = u[v].get(E);
            if (y !== undefined) {
                byModel[E] = q_e(y);
                break;
            }
            if (d[v].setsTopLevel) {
                byModel[E] = q_e(d[v].settings.effortLevel);
                break;
            }
        }
    }
    if (f !== undefined) {
        legacyUserEffort = undefined;
    }
    if (legacyUserEffort !== undefined) {
        for (let E of Me()){
            if (!Object.hasOwn(byModel, E) && !Object.hasOwn(Object.prototype, E)) {
                byModel[E] = undefined;
            }
        }
    }
    return {
        default: f?.level,
        legacyUserEffort,
        byModel
    };
}
function Le(source) {
    return source === "policySettings" || source === "flagSettings";
}
function hNn(e) {
    if (!r_r(e)) {
        return null;
    }
    return $B(R(de(se(), e) ?? bNn(e), e));
}
function de(e, n) {
    let r = bV(n);
    if (Object.hasOwn(e.byModel, r)) {
        return e.byModel[r];
    }
    if (e.default !== undefined || e.legacyUserEffort === undefined) {
        return e.default;
    }
    if (guo(r)) {
        return e.legacyUserEffort;
    }
}
function xe(settingsEffortTable) {
    if (settingsEffortTable.legacyUserEffort !== undefined) {
        return false;
    }
    for(let n in settingsEffortTable.byModel){
        return false;
    }
    return true;
}
function bV(e) {
    return Ht(We(Dt(e), {
        deterministic: true,
        identity: true
    }));
}
function Pe(e, effortLevel) {
    return huo(e, {
        effortLevel
    }, {
        effortLevel
    });
}
function huo(e, n, r) {
    let s = bV(e);
    if (Object.hasOwn(Object.prototype, s)) {
        return r;
    }
    return {
        modelSettings: {
            [s]: n
        }
    };
}
function uc(e, n, { withHold = true } = {}) {
    let s = e.sessionEffort ?? sessionEffort;
    switch(s.kind){
        case "level":
            return s.value;
        case "default":
            return;
        case "inherit":
            {
                if (e.settingsEffortTable === undefined) {
                    return;
                }
                if (xe(e.settingsEffortTable) && !Q()) {
                    return e.settingsEffortTable.default;
                }
                let f = n ?? e.mainLoopModelForSession ?? e.mainLoopModel ?? Ql();
                if (withHold && dxt(f) !== undefined) {
                    return undefined;
                }
                return de(e.settingsEffortTable, f);
            }
    }
}
function yNn(e, n) {
    return bV(e) === bV(n);
}
function khs(e, n) {
    return uc(yuo(e), n, {
        withHold: false
    });
}
function yuo(e) {
    if (e.sessionEffort?.kind === "level") {
        return {
            ...e,
            sessionEffort
        };
    }
    return e;
}
function Uit(e) {
    if (e.kind === "level" && typeof e.value === "string") {
        return e.value;
    }
}
function Ev(e, n, { turnEffort, hookEffortValue, carriedEffort = O(e) } = {}) {
    if (!GS(e)) {
        return;
    }
    let d = ne(e) !== null;
    if (hookEffortValue !== undefined) {
        let E = typeof hookEffortValue === "number" && d ? $B(hookEffortValue) : hookEffortValue;
        return R(E, e);
    }
    let u = VM();
    if (u === null && !d) {
        return;
    }
    let S = bNn(e, carriedEffort);
    let m = u ?? (u === null ? S : undefined) ?? turnEffort ?? n ?? S;
    if (typeof m === "number" && d) {
        m = $B(m);
    }
    return R(m, e);
}
function _Nn(e, n) {
    if (!GS(e) || VM() !== undefined) {
        return;
    }
    if (typeof n === "string") {
        return B5(n, e);
    }
    if (n === undefined && MNe(e)) {
        return zQ(e);
    }
}
function R(e, n) {
    let r = e;
    if (typeof r === "string" && Tb(r)) {
        r = B5(r, n);
    }
    if (r === "max" && !Gre(n)) {
        r = "high";
    }
    if (r === "xhigh" && !Lit(n)) {
        r = "high";
    }
    return r;
}
function zQ(e) {
    return $B(R(bNn(e), e));
}
function HNe(e, n, r, s, f) {
    if (!f) {
        return false;
    }
    let d = Lg();
    if (d === 0 || d === s) {
        return false;
    }
    if (!GS(r)) {
        return false;
    }
    if (typeof Ev(r, e) !== "number" && typeof Ev(r, n) !== "number" && EUn(r, We(r))) {
        return false;
    }
    if (Ev(r, e, {
        carriedEffort: null
    }) === Ev(r, n)) {
        return false;
    }
    if (al() && e !== undefined && q_e(typeof e === "string" ? B5(e, r) : e) === undefined) {
        return false;
    }
    return true;
}
async function Ce(e, n, r) {
    return Tn("userSettings", Pe(n, e), undefined, r);
}
async function j5(e, n, r = true, s) {
    let f = e !== undefined ? q_e(e) : undefined;
    if (r && (e === undefined || f !== undefined) && !vr()) {
        let d = await Ce(f, n, s);
        if (d.error) {
            return d.error;
        }
    }
}
function Bit(e) {
    let n = {
        sessionEffort: be(Qyr(e)),
        settingsEffortTable: se()
    };
    tsn(n);
    return n;
}
function GA(e, n, turnEffort) {
    let s = Ev(e, n, {
        turnEffort
    }) ?? "high";
    return $B(s);
}
function Iy(e, n, r) {
    if (GS(e)) {
        return GA(e, n, r);
    }
}
function pJt(e, n, turnEffort) {
    if (n === undefined && turnEffort === undefined) {
        return "";
    }
    let s = Ev(e, n, {
        turnEffort
    });
    if (s === undefined) {
        return "";
    }
    return ` with ${BQ($B(s))} effort`;
}
function ee(e) {
    return Number.isInteger(e);
}
function $B(e) {
    if (typeof e === "string") {
        if (Tb(e)) {
            return e;
        }
        return "high";
    }
    return "high";
}
function we(e) {
    switch(e){
        case "low":
            return "Quick, straightforward implementation with minimal overhead";
        case "medium":
            return "Balanced approach with standard implementation and testing";
        case "high":
            return "Comprehensive implementation with extensive testing and documentation";
        case "xhigh":
            return "Deeper reasoning than high, just below maximum (on supported models)";
        case "max":
            return `Maximum capability with deepest reasoning. ${$F}`;
    }
}
function _uo(e) {
    if (typeof e === "string") {
        let n = we(e);
        if (e === "high" && RRe() && k("tengu_slate_finch", false)) {
            return `${n} \xB7 burns fastest \u2014 medium handles most tasks`;
        }
        return n;
    }
    return "Balanced approach with standard implementation and testing";
}
function bNn(e, n) {
    let r = Y(e);
    return (r === undefined ? n : undefined) ?? MNe(e) ?? r ?? Fe(e) ?? De(e) ?? Te(e);
}
function De(e) {
    let n = Nl(e)?.default_effort;
    if (typeof n === "string" && Tb(n) && j(e, n)) {
        return n;
    }
}
function dxt(e) {
    let n = O(e);
    if (n !== undefined && Y(e) === undefined) {
        return n;
    }
}
function Ths(e) {
    return MNe(e) !== null || Y(e) !== undefined || O(e) !== undefined;
}
const ke = "tengu_witty_wand";
const Oe = p(()=>ue(o(), oe()));
function Y(e) {
    let n = k(ke, {});
    if (typeof n === "string") {
        n = mt(n, false);
    }
    let r = Oe().safeParse(n);
    if (!r.success) {
        return;
    }
    let s = r.data[Ht(We(e))];
    let f = typeof s === "string" ? s.trim().toLowerCase() : undefined;
    if (f !== undefined && Tb(f)) {
        return f;
    }
}
function Fe(e) {
    let n = zvs(e, We(e));
    if (n !== undefined && Tb(n)) {
        return n;
    }
}
function Te(e) {
    return il(We(e))?.default_effort ?? "high";
}
function Qyr(e) {
    return NB(e) ?? cxt(e);
}
function ae() {
    let { value, source } = Fn("tengu_auto_mode_config", {});
    if (value?.enabled !== "disabled") {
        return false;
    }
    return source === "override" || source === "payload";
}
function Zyr(e) {
    let { cli, env, settings, agentFrontmatter } = e;
    let d = th(cli.permissionMode);
    let u = th(cli.inheritPermissionMode);
    let cli_dangerouslySkipPermissions = cli.dangerouslySkipPermissions;
    let m = agentFrontmatter?.permissionMode;
    let modeSuppliedOnInvocation = Boolean(cli_dangerouslySkipPermissions || d || m);
    if (Ne(env.CLAUDE_CODE_SUBPROCESS_ENV_SCRUB)) {
        let g = cli_dangerouslySkipPermissions || d && d !== "default" || u && u !== "default" || m && m !== "default";
        let _ = "Permission mode forced to default — CLAUDE_CODE_SUBPROCESS_ENV_SCRUB is set " + "(allowed_non_write_users hardening). Declare allowedTools explicitly, or set CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=0 to opt out.";
        return {
            mode: "default",
            notification: g ? _ : undefined,
            fromAutoFallback: false,
            baselineMode: "default",
            decidedByProactivityLevel: false,
            modeSuppliedOnInvocation: true,
            autoDefaultWithheldForPendingVerdict: false,
            levelPickHeldForPendingVerdict: undefined,
            autoStartWithheldForHipaaTaint: false
        };
    }
    let v = settings.permissions?.disableBypassPermissionsMode === "disable";
    let y = ae();
    let isAutoModeAvailable = !y && !G(settings);
    let l = [];
    let notification;
    let D = u ? le(u, y, "inherited auto mode dropped — auto mode killswitch active (override- or payload-served)") : undefined;
    let P = u ? D?.mode ?? pC(u) : undefined;
    if (cli_dangerouslySkipPermissions) {
        if (lJt("bypassPermissions")) {
            notification = Hit;
            l.push("default");
        } else {
            l.push("bypassPermissions");
        }
    }
    if (d) {
        let g = le(d, y, "auto mode killswitch active (override- or payload-served) — falling back to default");
        if (g) {
            if (g.unconsented) {
                notification = Hit;
            }
            l.push(g.mode);
        }
    }
    if (m) {
        if (m === "auto" && y) {
            t("agent frontmatter requested auto mode but circuit breaker active — falling through", {
                level: "warn"
            });
        } else if (P && Iz(m, P) === undefined) {
            t(`agent frontmatter permissionMode "${m}" ignored \u2014 it would widen the agent view's inherited mode (effective "${P}"), and the dispatched agent name is repo-controllable (settings \`agent\`)`, {
                level: "warn"
            });
            i("tengu_agent_frontmatter_mode_widening_carry_ignored", {});
        } else {
            l.push(m);
        }
    }
    if (QE()) {
        let g = !lNn() ? undefined : z().map((_)=>th(fe(_)?.permissions?.defaultMode)).find((_)=>_ != null);
        if (g != null && Ne(env.CLAUDE_CODE_REMOTE) && !U(g)) {
            t(`settings defaultMode "${g}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`, {
                level: "warn"
            });
            if (l.length === 0) {
                i("tengu_ccr_unsupported_default_mode_ignored", {
                    mode_hash: ln(g)
                });
                l.push("default");
            }
        } else if (g === "bypassPermissions") {
            if (cli_dangerouslySkipPermissions || cli.allowDangerouslySkipPermissions) {
                if (lJt("bypassPermissions")) {
                    if (l.length === 0) {
                        notification = Hit;
                        process.stderr.write(`\u26A0 ${notification}
`);
                    }
                    l.push("default");
                } else {
                    l.push(g);
                }
            } else if (l.length === 0) {
                notification = 'Permission mode bypassPermissions from settings was ignored — enable the "Claude Code: Allow Dangerously Skip Permissions" setting in VS Code to consent to it';
                t('settings defaultMode "bypassPermissions" ignored for a VS Code-owned session without the allow-bypass setting', {
                    level: "warn"
                });
                i("tengu_settings_bypass_unconsented_noninteractive_ignored", {});
                process.stderr.write(`\u26A0 ${notification}
`);
                l.push("default");
            }
        } else if (g === "auto") {
            if (!y) {
                l.push(g);
            } else {
                t('settings defaultMode "auto" ignored for the IDE session — auto-mode circuit breaker is active', {
                    level: "warn"
                });
            }
        } else if (g != null) {
            l.push(g);
        }
    } else if (settings.permissions?.defaultMode) {
        let g = th(settings.permissions.defaultMode);
        if (Ne(env.CLAUDE_CODE_REMOTE) && !U(g)) {
            t(`settings defaultMode "${g}" is not supported in CLAUDE_CODE_REMOTE \u2014 only acceptEdits, plan, default, and auto are allowed`, {
                level: "warn"
            });
            i("tengu_ccr_unsupported_default_mode_ignored", {
                mode_hash: ln(g)
            });
        } else if (g === "bypassPermissions") {
            if (!V("bypassPermissions")) {
                t('settings defaultMode "bypassPermissions" ignored — only policy/user/flag settings may grant bypass mode (projectSettings and localSettings are repo-controllable)', {
                    level: "warn"
                });
                i("tengu_settings_bypass_mode_untrusted_source_ignored", {});
                if (!u) {
                    l.push("default");
                }
            } else if (lJt("bypassPermissions")) {
                if (l.length === 0) {
                    notification = Hit;
                }
                l.push("default");
            } else {
                l.push(g);
            }
        } else if (g !== "auto") {
            if (P && !V(g) && Iz(g, P) === undefined) {
                t(`settings defaultMode "${g}" ignored \u2014 it would widen the agent view's inherited mode (effective "${P}"), and only policy/user/flag settings may do that (projectSettings and localSettings are repo-controllable)`, {
                    level: "warn"
                });
                i("tengu_settings_mode_widening_carry_ignored", {});
            } else {
                l.push(g);
            }
        } else if (!V("auto")) {
            t('settings defaultMode "auto" ignored — only policy/user/flag settings may grant auto mode (projectSettings and localSettings are repo-controllable)', {
                level: "warn"
            });
            i("tengu_settings_auto_mode_untrusted_source_ignored", {});
        } else if (y) {
            t("auto mode killswitch active (override- or payload-served) — falling back to default", {
                level: "warn"
            });
        } else if (Ne(env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT) && G(settings)) {
            t('settings defaultMode "auto" ignored — disableAutoMode is set and this is an unattended Remote Control machine session', {
                level: "warn"
            });
        } else {
            l.push("auto");
        }
    }
    if (u) {
        let g = D;
        if (g) {
            if (g.unconsented && l.length === 0) {
                notification = Hit;
            }
            l.push(g.mode);
        }
    }
    let M;
    for (let g of l){
        if (g === "bypassPermissions" && v) {
            t("bypassPermissions mode is disabled by settings", {
                level: "warn"
            });
            notification = "Bypass permissions mode was disabled by settings";
            continue;
        }
        M = {
            mode: g,
            notification
        };
        break;
    }
    let fromAutoFallback = false;
    let autoDefaultWithheldForPendingVerdict = false;
    let levelPickHeldForPendingVerdict;
    let autoStartWithheldForHipaaTaint = false;
    if (!M) {
        let g = isAutoModeAvailable && (!Ne(env.CLAUDE_CODE_REMOTE) && lNn() && (!cli.isNonInteractiveSession || QE() || k("tengu_moss_anchor", true)) || Ne(env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT));
        let _ = "default";
        if (g) {
            let w = e_r();
            let A = Ne(env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT);
            if (w === undefined || w === "pending" && A) {
                _ = "auto";
                fromAutoFallback = true;
            } else if (w === "taint") {
                notification ??= Ve;
                autoStartWithheldForHipaaTaint = true;
            } else if (w === "pending") {
                autoDefaultWithheldForPendingVerdict = true;
            }
        }
        M = {
            mode: _,
            notification
        };
    }
    let M_mode = M.mode;
    let decidedByProactivityLevel = false;
    if (e.proactivityLevel && e.proactivityLevel !== "default" && !modeSuppliedOnInvocation) {
        let g = lde(e.proactivityLevel, {
            isAutoModeAvailable,
            isBypassPermissionsModeAvailable: false
        }, M_mode);
        let _ = H(e.proactivityLevel, g);
        let w = ACe(e.proactivityLevel, g, M_mode);
        let A = w === "pending" && Ne(env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT) ? undefined : w;
        if (_ !== undefined && A === "taint") {
            M.notification ??= me(_);
            autoStartWithheldForHipaaTaint = true;
        } else if (A === "pending") {
            autoDefaultWithheldForPendingVerdict = true;
            levelPickHeldForPendingVerdict = _;
        }
        M = {
            mode: A === undefined ? g : "default",
            notification: M.notification
        };
        fromAutoFallback = false;
        decidedByProactivityLevel = true;
    }
    return {
        mode: M.mode,
        notification: M.notification,
        fromAutoFallback,
        baselineMode: M_mode,
        decidedByProactivityLevel,
        modeSuppliedOnInvocation,
        autoDefaultWithheldForPendingVerdict,
        levelPickHeldForPendingVerdict,
        autoStartWithheldForHipaaTaint
    };
}
const ge = {
    auto: "Auto mode",
    acceptEdits: "Accept edits"
};
var Ve = me("auto");
function me(e) {
    return `${ge[e]} isn't the default for your organization \xB7 Shift+Tab to switch`;
}
function uhs(e) {
    return `${ge[e]} didn't start: your organization's policy hasn't loaded \xB7 Shift+Tab to switch`;
}
function ACe(e, n, r) {
    let s = H(e, n);
    if (s === undefined || s === r) {
        return;
    }
    return e_r();
}
function e_r() {
    let e = YCs();
    if (sl("hipaa") || e === "unobtainable_seen_hipaa") {
        return "taint";
    }
    if (e === "pending") {
        return "pending";
    }
}
function phs(e) {
    let n = e.cli.fallbackModel ?? (Array.isArray(e.settings.fallbackModel) ? e.settings.fallbackModel : undefined);
    if (n === undefined) {
        return;
    }
    return Ue(n, Xr);
}
function cuo(e) {
    return e.split(",").map((n)=>n.trim()).filter((n)=>n !== "");
}
function Ue(e, n) {
    let r = typeof e === "string" ? cuo(e) : e;
    let s = new Set;
    let f = [];
    for (let d of r){
        let u = typeof d === "string" ? d.trim() : "";
        if (u === "") {
            continue;
        }
        let S = Dt(u === "default" ? Ql() : u);
        if (s.has(S)) {
            continue;
        }
        if (!n(S)) {
            continue;
        }
        s.add(S);
        f.push(S);
        if (f.length === Be) {
            break;
        }
    }
    if (f.length > 0) {
        return f;
    }
}
var Be = 3;
function He(e) {
    switch(e){
        case "userSettings":
            return "user_settings";
        case "projectSettings":
            return "project_settings";
        case "localSettings":
            return "local_settings";
        case "flagSettings":
            return "flag_settings";
        case "policySettings":
            return "policy_settings";
        case null:
            return "settings";
    }
}
function je(settingLayer) {
    switch(settingLayer){
        case "env":
        case "user_settings":
        case "project_settings":
        case "local_settings":
        case "flag_settings":
        case "policy_settings":
        case "settings":
        case "agent_frontmatter":
        case "routine_frontmatter":
            return true;
        default:
            return false;
    }
}
function $e(e, n, r) {
    if (f7()) {
        let lastSeenOrgDefaultUpdatedAt_1 = Kvs();
        if (lastSeenOrgDefaultUpdatedAt_1 !== null && !n && PBe().includes("userSettings") && new Date(lastSeenOrgDefaultUpdatedAt_1).getTime() > new Date(ce().lastSeenOrgDefaultUpdatedAt ?? 0).getTime()) {
            Ae((l)=>{
                if (l.lastSeenOrgDefaultUpdatedAt === lastSeenOrgDefaultUpdatedAt_1) {
                    return l;
                }
                return {
                    ...l,
                    lastSeenOrgDefaultUpdatedAt: lastSeenOrgDefaultUpdatedAt_1
                };
            }, r);
        }
        if (OIt() === null) {
            return e;
        }
        let x = e ? bO("model") : null;
        if (x === "policySettings" || x === "flagSettings") {
            return e;
        }
        return;
    }
    let s = t6e();
    if (!s || lvr() === null) {
        return e;
    }
    let f = e ? bO("model") : null;
    if (f === "policySettings" || f === "flagSettings") {
        return e;
    }
    let d = PBe().includes("userSettings");
    let lastSeenOrgDefaultUpdatedAt = ce().lastSeenOrgDefaultUpdatedAt;
    let S = new Date(s.updated_at).getTime() > new Date(lastSeenOrgDefaultUpdatedAt ?? 0).getTime();
    let m = S && !n && d;
    let E = ()=>Ae((y)=>{
            if (y.lastSeenOrgDefaultUpdatedAt === s.updated_at) {
                return y;
            }
            return {
                ...y,
                lastSeenOrgDefaultUpdatedAt: s.updated_at
            };
        }, r);
    if (s.override_user_selection) {
        if (m) {
            E();
        }
        return;
    }
    if (n) {
        return e;
    }
    let v = d ? fe("userSettings")?.model : undefined;
    if (S && v) {
        Tn("userSettings", {
            model: undefined
        }, undefined, r).then((y)=>{
            if (!y.error) {
                E();
            }
        });
        if (f === "userSettings") {
            return;
        }
    } else if (m) {
        E();
    }
    return e;
}
function duo({ cli, env, settings, agentFrontmatter }, n) {
    let effectiveModel = cli.model === "default" ? Ql() : cli.model;
    let S = effectiveModel;
    let settingLayer = null;
    if (effectiveModel) {
        settingLayer = cli.model === "default" ? "cli_default" : "cli";
    }
    let E = agentFrontmatter?.model;
    let v;
    if (!effectiveModel && E && E !== "inherit") {
        v = E;
        effectiveModel = Dt(E);
        S = E;
        settingLayer = agentFrontmatter?.modelSource === "routine" ? "routine_frontmatter" : "agent_frontmatter";
    }
    let y = false;
    let modelWithoutStartupOverride;
    let l = effectiveModel;
    if (l === undefined) {
        if (env.ANTHROPIC_MODEL) {
            l = env.ANTHROPIC_MODEL;
            settingLayer = "env";
        } else {
            l = $e(settings.model || undefined, cli.isNonInteractiveSession === true, n) || undefined;
            if (l !== undefined) {
                settingLayer = He(bO("model"));
            }
        }
        S = l;
    }
    let restrictedModel;
    if (l && !Xr(l)) {
        let L = v !== undefined && !y ? v : l;
        let C = y ? null : jk(L);
        if (C !== null) {
            restrictedModel = L;
            l = C;
            if (effectiveModel !== undefined) {
                effectiveModel = C;
            }
        } else {
            if (!(L.trim().toLowerCase() === "default" || $ho(L)) && !y) {
                restrictedModel = L;
            }
            l = undefined;
            S = undefined;
            settingLayer = null;
            effectiveModel = undefined;
        }
    }
    let unservedModelSpelling;
    if (l && rvr(l, je(settingLayer) ? "persisted" : "explicit")) {
        unservedModelSpelling = l;
        l = undefined;
        S = undefined;
        settingLayer = null;
        effectiveModel = undefined;
    }
    let initialMainLoopModel = l || null;
    let resolvedInitialModel = Dt(initialMainLoopModel ?? Ql());
    return {
        effectiveModel,
        initialMainLoopModel,
        resolvedInitialModel,
        rawModelRequest: S || null,
        restrictedModel,
        unservedModelSpelling,
        settingLayer,
        modelWithoutStartupOverride
    };
}
function fhs(e) {
    let systemPrompt = e.cli.systemPrompt;
    let appendSystemPrompt = e.cli.appendSystemPrompt;
    let s = RRs();
    if (s) {
        appendSystemPrompt = appendSystemPrompt ? `${appendSystemPrompt}

${s}` : s;
    }
    return {
        systemPrompt,
        appendSystemPrompt
    };
}
function lNn() {
    return k("tengu_harbor_willow", true) || F_o()?.meadow_lantern === true;
}
const Je = ws.filter((e)=>!Cp.has(e)).toReversed();
const Ye = [
    "acceptEdits",
    "plan",
    "default",
    "auto"
];
function U(e) {
    return Ye.includes(e);
}
function z() {
    return Je.filter(cn);
}
function V(e) {
    return z().some((n)=>fe(n)?.permissions?.defaultMode === e);
}
function G(e) {
    return e.permissions?.disableAutoMode === "disable" || e.disableAutoMode === "disable";
}
function lxt(e) {
    return !G(e) && !ae();
}
function Ge(settings) {
    return z().map((r)=>th(fe(r)?.permissions?.defaultMode)).find((r)=>r != null) === "plan" && th(settings.permissions?.defaultMode) !== "plan";
}
function uuo() {
    let e = ws.filter(cn).map((n)=>({
            source: n,
            mode: (n === "policySettings" ? J7().length > 0 || Dv().some((r)=>r.userWritable === true && r.path === "") || WZ() && MSe() || Oz() !== false && !$b() : Hv(n).some((r)=>r.severity !== "warning")) ? "unreadable" : fe(n)?.permissions?.defaultMode
        })).findLast(({ source, mode })=>mode !== undefined && (mode !== "auto" || !Cp.has(source)));
    if (e === undefined || e.mode === "auto") {
        return undefined;
    }
    if (e.mode === "unreadable") {
        return "settings_unreadable";
    }
    return "stored_default";
}
function cNn({ settings, scrubbed, typedLevel, carriedMode }) {
    let f = typedLevel !== undefined && typedLevel !== "default";
    return {
        autoSeedable: lxt(settings) && !scrubbed,
        storedDefaultBar: uuo(),
        otherChoiceTyped: f || carriedMode !== undefined && carriedMode !== "auto",
        carriedPlanHolds: carriedMode === "plan" && !f,
        trustedPlanDisplaced: Ge(settings)
    };
}
function Ke(settings) {
    let n = th(settings.permissions?.defaultMode);
    if (n == null || !U(n)) {
        return;
    }
    if (n !== "auto") {
        return n;
    }
    if (V("auto") && lxt(settings)) {
        return "auto";
    }
}
function dNn({ gateOn, permissionModeTyped, dangerouslySkipPermissions, scrubbed, settings, effort }) {
    let u = !permissionModeTyped && !dangerouslySkipPermissions && !scrubbed;
    let settingsDefault = u ? Ke(settings) : undefined;
    return {
        considered: gateOn && u,
        settingsDefaultModePresent: settings.permissions?.defaultMode != null,
        settingsDefault,
        permissionMode: gateOn ? settingsDefault : undefined,
        effort: gateOn ? effort : undefined
    };
}
function mhs({ sentMode, repositorySettings }) {
    if (sentMode === "auto") {
        return;
    }
    if (sentMode !== undefined) {
        return sentMode;
    }
    let r = K(repositorySettings?.permissions?.defaultMode);
    if (r !== undefined && r !== "auto" && U(r)) {
        return r;
    }
    return "default";
}
function ghs({ seed, settingsMode, sentMode, startsIn }) {
    if (!seed.considered || !seed.settingsDefaultModePresent || seed.permissionMode !== undefined || settingsMode === undefined || sentMode !== undefined && K(settingsMode) === sentMode) {
        return null;
    }
    let f = K(settingsMode) === "auto" ? "auto mode could not be requested from this machine (it is off here, or only the repository asked for it)" : "not a mode a cloud session can start in";
    return {
        text: `Settings kept on this machine: the default permission mode in your settings (${settingsMode}) \u2014 ${f}${startsIn !== undefined ? `; the session starts in ${startsIn} mode` : ""}`,
        level: "info"
    };
}
function K(e) {
    if (e === undefined) {
        return undefined;
    }
    return Fm(e);
}
const puo = 'bypass in a background worker needs consent recorded in your user settings — add "skipDangerousModePermissionPrompt": true to ~/.claude/settings.json (accepting the interactive disclaimer writes the same key, but that dialog is skipped while consent already exists in .claude/settings.local.json or via --settings, which does not count here)';
var Hit = `Permission mode downgraded to default: ${puo}`;
function lJt(e) {
    if (!Nt()) {
        return false;
    }
    if (e === "bypassPermissions") {
        return !F3e() && !ce().bypassPermissionsModeAccepted;
    }
    return false;
}
function le(e, n, r) {
    let s = pC(e);
    if (lJt(s)) {
        return {
            mode: "default",
            unconsented: true
        };
    }
    if (s === "auto" && n) {
        t(r, {
            level: "warn"
        });
        return;
    }
    return {
        mode: s
    };
}
export { lde, Qyr, Zyr, uhs, ACe, e_r, phs, cuo, duo, fhs, lNn, lxt, uuo, cNn, dNn, mhs, ghs, puo, Hit, lJt, Dit, hhs, cJt, fuo, muo, uNn, yhs, pNn, _hs, bhs, cde, GS, Gre, Lit, XI, zA, fNn, mNn, Tb, Nit, t_r, n_r, dJt, MNe, r_r, o_r, dde, B5, Shs, whs, vhs, q4e, cxt, BQ, jQ, $it, NB, q_e, gNn, VM, WQ, Fit, Ehs, Vre, guo, uJt, hNn, bV, huo, uc, yNn, khs, yuo, Uit, Ev, _Nn, zQ, HNe, j5, Bit, GA, Iy, pJt, $B, _uo, bNn, dxt, Ths };
