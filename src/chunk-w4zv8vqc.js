import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q as sleep } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { po } from "/$bunfs/root/chunk-xgw72tt1.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { i3 as clearSystemPromptSections, z9o, pk, vx, tAn, Yj, oAn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { Fw } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Io } from "/$bunfs/root/chunk-63xa24b4.js";
import { Atn, Pdt, pWn, yn, Evo } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Pa } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { gTt, WJ, vrt } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { sF as enabledNow } from "/$bunfs/root/chunk-md7g8y4m.js";
import { Cu } from "/$bunfs/root/chunk-jfcrjtbk.js";
import { wMe, gYo } from "/$bunfs/root/chunk-sdbat3z2.js";
import { C7n, Tzt, iae, nbt, DEe, rbt } from "/$bunfs/root/chunk-m4z5ws6t.js";
import { SSn, rge, vzt, oge, wSn, mVr } from "/$bunfs/root/chunk-gvnqty6z.js";
import { Bze, fte, yVr, MEe, jze, ebt, HEe, tbt, W7e } from "/$bunfs/root/chunk-f3nx7zc0.js";
import { cVr, gSn } from "/$bunfs/root/chunk-gtsztadj.js";
import { rft } from "/$bunfs/root/chunk-4gh64t8y.js";
import { NIr } from "/$bunfs/root/chunk-3hp2mm66.js";
import { Vpn, HBo } from "/$bunfs/root/chunk-wtzfqazn.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { o, Hf, oe, T, De, ue, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { Jk, at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { join, basename, dirname, resolve, sep, relative, posix, isAbsolute } from "path";
import { lstat, open, realpath, unlink, stat, mkdir } from "fs/promises";
const version = 1;
const Mn = 4;
const Fe = Bze * Mn;
const We = 131072;
const jt = p(()=>De({
        version: A(version),
        generation: Hf().min(1),
        writtenAtMs: Hf().min(0),
        entries: T(De({
            path: o().min(1).max(yVr),
            sha256: o().regex(Jk)
        })).max(Fe),
        settingsSha256: o().regex(Jk).nullable(),
        packEtag: o().min(1).max(NIr).optional()
    }));
function pt(content) {
    if (content.length > We) {
        return null;
    }
    let e = vzt(content.toString("utf8"));
    if (!L(e) || Array.isArray(e.entries) && e.entries.length > Fe) {
        return null;
    }
    let n = jt().safeParse(e);
    if (n.success) {
        return n.data;
    }
    return null;
}
function Ut(t) {
    let e = jt().safeParse({
        ...t,
        entries: t.entries.slice(-Fe)
    });
    if (!e.success) {
        throw Error("home sidecar is off its own schema");
    }
    let n = Buffer.from(_(e.data));
    if (n.length > We) {
        throw Error("home sidecar exceeds its byte bound");
    }
    return n;
}
function Ye(document) {
    let e = mVr(document);
    return {
        document,
        rendered: e,
        sha256: at(e)
    };
}
const Ve = p(()=>ue(o(), oe()));
const Pe = 1048576;
function Le(t) {
    let e = T(oe()).safeParse(t);
    if (e.success) {
        return e.data.filter((n)=>typeof n === "string");
    }
    return [];
}
function Xe(t, e) {
    let n = new Set(t);
    return [
        ...t,
        ...D(e).filter((l)=>!n.has(l))
    ];
}
function Bt(t, e, n) {
    if (e.kind === "unusable") {
        return "unreadable";
    }
    let l = e.kind === "object" ? e.value : {};
    let u = Ve().safeParse(l.permissions ?? {});
    if (!u.success) {
        return "unreadable";
    }
    let c = n !== "refused_over_ours";
    if (c && t === null) {
        return null;
    }
    let b = (K)=>{
        let P = Le(u.data[K]);
        let Y = t?.document.permissions?.[K] ?? [];
        if (n === "restore") {
            return Xe(P, Y);
        }
        return D([
            ...P,
            ...Y
        ].toReversed()).toReversed();
    };
    let H = b("deny");
    let R = b("ask");
    if (H.length === 0 && R.length === 0) {
        return null;
    }
    let permissions = {
        ...H.length > 0 && {
            deny: H
        },
        ...R.length > 0 && {
            ask: R
        }
    };
    if (!c) {
        return Ye({
            permissions
        });
    }
    let w = _({
        ...l,
        permissions: {
            ...u.data,
            ...permissions
        }
    }, null, 2) + `
`;
    if (Buffer.byteLength(w) > Pe) {
        return "unreadable";
    }
    return {
        rendered: w,
        sha256: at(w)
    };
}
function gt({ pack, packEtag, refused, sidecar, lastAppliedGeneration, permissionsAdmissible }) {
    if (pack.generation <= lastAppliedGeneration) {
        return {
            kind: "stale_generation",
            generation: pack.generation,
            lastApplied: lastAppliedGeneration
        };
    }
    let b = new Map((sidecar?.entries ?? []).flatMap((P)=>{
        let Y = W7e(P.path);
        if (Y === null) {
            return [];
        }
        return [
            [
                Y.destination,
                {
                    path: Y.destination,
                    kind: Y.kind,
                    sha256: P.sha256
                }
            ]
        ];
    }));
    let priorEntries = new Map([
        ...b.values()
    ].map(({ path, sha256 })=>[
            path,
            sha256
        ]));
    let R = pack.files.filter((P)=>!oge(P.content.toString("utf8")));
    let E = new Set(R.map((P)=>P.path));
    let removals = [
        ...b.values()
    ].filter(({ path })=>!E.has(path));
    let K = In(pack.settings, permissionsAdmissible);
    return {
        kind: "plan",
        plan: {
            generation: pack.generation,
            packEtag,
            writes: R.flatMap(Nn),
            removals,
            settings: K.plan,
            priorSettingsSha256: sidecar?.settingsSha256 ?? null,
            priorEntries,
            counts: {
                refused,
                refilteredKeys: K.refilteredKeys,
                refilteredCredentials: K.refilteredCredentials + pack.files.length - R.length,
                refilteredCredentialRestrictions: K.refilteredCredentialRestrictions,
                refilteredCredentialFiles: pack.files.length - R.length,
                permissionsDropped: K.permissionsDropped
            }
        }
    };
}
function Nn(t) {
    let kind = HEe(t.path);
    if (kind === null) {
        return [];
    }
    return [
        {
            ...t,
            kind
        }
    ];
}
function In(settings, permissionsAdmissible) {
    if (settings === null) {
        return {
            plan: null,
            refilteredKeys: 0,
            refilteredCredentials: 0,
            refilteredCredentialRestrictions: 0,
            permissionsDropped: false
        };
    }
    let n = wSn(settings, {
        settingsToCloud: ()=>true,
        preToolUseHookActiveHere: false,
        hasLostAnAllowEntryAtParse: false
    });
    let l = {
        refilteredKeys: n.counts.withheldKeys,
        refilteredCredentials: n.counts.rules.droppedCredential + n.counts.withheldCredentialTexts,
        refilteredCredentialRestrictions: n.counts.rules.droppedCredentialRestrictions
    };
    if (n.document === null) {
        return {
            plan: null,
            ...l,
            permissionsDropped: false
        };
    }
    let { permissions, ...rest } = n.document;
    let permissionsDropped = permissions?.allow !== undefined && !permissionsAdmissible;
    let { allow, ...rest_1 } = permissions ?? {};
    let E = permissionsDropped ? Object.keys(rest_1).length === 0 ? rest : {
        ...rest,
        permissions: rest_1
    } : n.document;
    if (Object.keys(E).length === 0) {
        return {
            plan: null,
            ...l,
            permissionsDropped
        };
    }
    return {
        plan: Ye(E),
        ...l,
        permissionsDropped
    };
}
const yt = 300000;
const bt = 60000;
const requestAttempts = 3;
const requestRetryDelayMs = 500;
const Wn = 2000;
const permissionsFromAnyAnnouncedPack = true;
const Ln = /^[A-Za-z][A-Za-z0-9_*-]{0,127}(?:\([A-Za-z0-9 ._\-/:*~@+=,]{1,64}\))?$/;
const Kn = 200;
const packEtag = "restored-without-announcement";
const $n = {
    etag: "",
    beforeFirstCommand: true,
    ordinal: 0.5
};
function jn(t) {
    try {
        return t.enabledNow?.() === true;
    } catch  {
        return false;
    }
}
function Gt(t, e, n) {
    if (e === undefined) {
        return;
    }
    queueMicrotask(()=>{
        try {
            t(e);
        } catch  {
            J("error", n, {});
        }
    });
}
function Vt(t, e) {
    let verdict;
    let deaf = false;
    let deafReason;
    let c = false;
    let b = new Set;
    let H = new Set;
    let R;
    let E;
    let w = false;
    let lastAppliedGeneration = 0;
    let runs = 0;
    let Y = false;
    let ne = false;
    let V;
    let G;
    let q = false;
    let Te = 0;
    let N;
    let ce;
    let fe = false;
    let ae;
    let keepsForeignFiles = t.foreignFiles !== "replaced";
    let be;
    let Be;
    let we = false;
    let S = false;
    let Z = false;
    let re = !e.epochGt1;
    let le = e.epochGt1 && jn(e);
    let Re = false;
    let Ce = false;
    let Me;
    let ve;
    let afterAnnouncedRun = false;
    let rt;
    let sidecarCountedAsAbsent = false;
    let Ht = false;
    let He = new Set;
    let me = ()=>{
        for (let r of [
            ...He
        ]){
            r();
        }
    };
    let pe = (r)=>{
        if (!deaf) {
            deafReason = r;
            if (V !== undefined || G !== undefined) {
                Et();
            }
        }
        deaf = true;
        V = undefined;
        G = undefined;
        if (Z && !Re) {
            X("lane_unavailable", 0, e.now(), false);
        }
        Z = false;
        le = false;
        re = true;
        me();
    };
    let Et = ()=>{
        if (!w) {
            w = true;
            J("info", "home_seed_announcement_discarded", {
                reason: deafReason ?? "stopped"
            });
        }
    };
    let it = ()=>{
        let r = [
            V,
            G,
            Z || le ? $n : undefined
        ].filter((s)=>s !== undefined);
        if (r.length === 0) {
            return undefined;
        }
        return r.reduce((acc, item)=>{
            if (item.ordinal > acc.ordinal) {
                return item;
            }
            return acc;
        });
    };
    function At(r) {
        if (deaf || c) {
            Et();
            return;
        }
        if (r.etag === V?.etag || r.etag === G?.etag) {
            return;
        }
        if (r.etag === ce) {
            if (ae !== undefined && N === undefined) {
                N = {
                    etag: r.etag,
                    ready: On(ae),
                    readyWritten: false
                };
            }
            if (N !== undefined && !N.readyWritten) {
                if (q || !Y || verdict !== "served") {
                    fe = true;
                } else {
                    dt();
                }
            }
            return;
        }
        if (N !== undefined && r.etag === N.etag) {
            if (!N.readyWritten) {
                if (q) {
                    fe = true;
                } else {
                    dt();
                }
            }
            return;
        }
        V = r;
        if (e.epochGt1 && !Ht) {
            Ht = true;
            let s = e.now();
            be ??= e.readSidecar(t.configHome).catch(()=>null);
            be.then((k)=>{
                kn(k, s);
            });
        }
        if (verdict === "served") {
            ze(false);
        }
    }
    function kn(r, s) {
        if (r === null || r.packEtag === undefined || r.packEtag === packEtag || V?.etag !== r.packEtag || N !== undefined || ce !== undefined) {
            return;
        }
        ce = r.packEtag;
        ae = r;
        V = undefined;
        lt();
        te("already_applied", "none", null, r.generation, s);
        me();
    }
    function wn(r, s) {
        if (deaf || c) {
            return;
        }
        verdict = r;
        if (r === "served") {
            if (V !== undefined) {
                ze(!s);
            } else if (fe) {
                Ae();
            } else {
                st(!s);
                Ie(s);
            }
            return;
        }
        pe(r === "off" ? "verdict_off" : "verdict_refused");
    }
    function Ft() {
        if (!re && Y && rt === "absent" && !deaf && !c) {
            re = true;
            Z = true;
            le = false;
        }
    }
    function st(r = false) {
        Ft();
        if (!Z || verdict !== "served" || q || deaf || c) {
            return;
        }
        q = true;
        Re = true;
        let s = e.now();
        Rn(!r, s).catch((k)=>{
            J("error", "home_seed_recovery_threw", {
                name: wMe(k)
            });
            ge("threw", 0, s);
        }).finally(()=>{
            q = false;
            Z = false;
            me();
            Ae();
            if (G === undefined || S) {
                Ne();
            }
        });
    }
    async function Rn(r, s) {
        runs++;
        if (r) {
            let ee = await e.getRow(gTt);
            if (Ee(s)) {
                return;
            }
            if (ee.kind !== "ok" && ee.kind !== "not_found") {
                let he = Ge(ee);
                if (he === "refused" || he === "rejected") {
                    pe("probe_refused");
                }
                X(he === "auth" ? "auth_failed" : "request_failed", 0, s, he === "auth");
                return;
            }
        }
        let k = await e.getRow(vrt);
        if (Ee(s)) {
            return;
        }
        if (k.kind !== "ok") {
            if (k.kind === "not_found") {
                X("no_ready_row", 0, s, false);
            } else {
                let ee = Ge(k);
                if (ee === "refused") {
                    pe("ready_refused");
                }
                X(ee === "auth" ? "auth_failed" : "request_failed", 0, s, ee === "auth");
            }
            return;
        }
        let y = gSn(k.buf);
        if (!y.ok) {
            X("ready_unreadable", 0, s, true);
            return;
        }
        let generation = y.ready.generation;
        let x = await e.getRow(WJ);
        if (Ee(s)) {
            return;
        }
        if (x.kind !== "ok") {
            let ee = x.kind === "not_found" ? "not_found" : Ge(x);
            if (ee === "refused") {
                pe("pack_refused");
            }
            X(ee === "not_found" ? "pack_absent" : ee === "auth" ? "auth_failed" : "request_failed", generation, s, true);
            return;
        }
        let O = rge(x.buf);
        if (!O.ok) {
            J("warn", "home_seed_bad_pack", {
                reason: O.reason
            });
            X("pack_unreadable", generation, s, true);
            return;
        }
        if (O.pack.generation !== generation) {
            X("generation_mismatch", generation, s, true);
            return;
        }
        let W = gt({
            pack: O.pack,
            packEtag,
            refused: O.refused,
            sidecar: null,
            lastAppliedGeneration: 0,
            permissionsAdmissible: false
        });
        if (W.kind === "stale_generation") {
            X("generation_mismatch", generation, s, true);
            return;
        }
        if (O.refused.settings !== "none") {
            X("settings_refused", generation, s, true);
            return;
        }
        let C = Pt(W.plan, O.pack.settings);
        if (C.deny.length === 0 && C.ask.length === 0) {
            if (C.dropped > 0) {
                X("rules_unverifiable", generation, s, true, C.dropped);
            } else {
                X("no_rules", generation, s, false);
            }
            return;
        }
        if (t.settingsPath === undefined) {
            X("no_rules", generation, s, false);
            return;
        }
        let U = await e.readStandingSettings(t.settingsPath).catch(()=>({
                kind: "unusable"
            }));
        if (Ee(s)) {
            return;
        }
        let M = U.kind === "unusable" ? null : vn(W.plan, C, U);
        if (M === null) {
            X("settings_unusable", generation, s, true);
            return;
        }
        let B = await e.execute(M, t, e.applyDeps());
        let beforeFirstAsk = !S;
        if (B.outcome === "config_home_unsafe" || B.outcome === "flag_off") {
            te(B.outcome, "recovery", B, B.generation, s);
            X("nothing_applied", generation, s, false);
            return;
        }
        if (!B.settingsWritten) {
            te(B.outcome, "recovery", B, B.generation, s);
            X("nothing_applied", generation, s, true);
            return;
        }
        try {
            e.afterApply(B, {
                beforeFirstAsk,
                applied: xt(M, B)
            });
        } catch  {
            J("error", "home_seed_after_apply_threw", {});
        }
        ve = {
            kind: "restored",
            denyRules: C.deny.length,
            askRules: C.ask.length,
            droppedRules: C.dropped,
            beforeFirstAsk,
            duringHold: He.size > 0,
            keepsForeignFiles
        };
        te(B.outcome, "recovery", B, B.generation, s);
        ge("restored", generation, s, C.dropped);
    }
    function Pt(plan, settings) {
        let k = plan.settings?.document.permissions;
        let y = (U)=>(U ?? []).filter((M)=>Ln.test(M)).slice(0, Kn);
        let h = y(k?.deny);
        let x = y(k?.ask);
        let O = Ve().safeParse(settings?.permissions);
        let W = (U)=>{
            if (O.success) {
                return D(Le(O.data[U])).length;
            }
            return 0;
        };
        let dropped = Math.max(0, W("deny") + W("ask") - h.length - x.length);
        return {
            deny: h,
            ask: x,
            dropped
        };
    }
    function vn(plan, s, k) {
        let y = k.kind === "object" ? k.value : {};
        let h = Ve().safeParse(y.permissions);
        if (y.permissions !== undefined && y.permissions !== null && !h.success) {
            return null;
        }
        let x = h.success ? h.data : {};
        let O = Xe(Le(x.deny), s.deny);
        let W = Xe(Le(x.ask), s.ask);
        let C = {
            ...y,
            permissions: {
                ...x,
                ...O.length > 0 && {
                    deny: O
                },
                ...W.length > 0 && {
                    ask: W
                }
            }
        };
        let U = _(C, null, 2) + `
`;
        if (Buffer.byteLength(U) > Pe) {
            return null;
        }
        return {
            ...plan,
            writes: [],
            removals: [],
            counts: {
                ...plan.counts,
                refilteredCredentialFiles: 0
            },
            restoreRecord: true,
            settings: {
                document: {
                    permissions: {
                        ...s.deny.length > 0 && {
                            deny: [
                                ...s.deny
                            ]
                        },
                        ...s.ask.length > 0 && {
                            ask: [
                                ...s.ask
                            ]
                        }
                    }
                },
                rendered: U,
                sha256: at(U)
            }
        };
    }
    function Ge(r) {
        let s = ht(r);
        J("warn", "home_seed_lane_request_failed", {
            outcome: s,
            kind: r.errorKind,
            status: r.status ?? 0
        });
        return s;
    }
    function Ee(r) {
        if (deaf || c) {
            ge("gate_closed", 0, r);
            return true;
        }
        return false;
    }
    function lt() {
        if (Z) {
            Z = false;
            ge("superseded", 0, e.now());
        }
        re = true;
        le = false;
    }
    function X(r, s, k, y, h = 0) {
        Z = false;
        ge(r, s, k, h);
        if (y && En(r)) {
            ve = {
                kind: "not_restored",
                reason: r,
                keepsForeignFiles
            };
        }
    }
    function Ne() {
        let r = ve;
        ve = undefined;
        if (r !== undefined) {
            Tt(r);
        }
    }
    let Ot = ()=>V !== undefined || G !== undefined || N !== undefined || ce !== undefined;
    function Ie(r = true) {
        if (!Ce || !S || verdict !== "served" || deaf || c || Ot()) {
            return;
        }
        Ce = false;
        let s = e.now();
        Hn(r, s).catch((k)=>{
            J("error", "home_seed_recovery_threw", {
                name: wMe(k)
            });
            ge("threw", 0, s);
        });
    }
    async function Hn(r, s) {
        let k = (h)=>{
            X(Ge(h) === "auth" ? "auth_failed" : "request_failed", 0, s, false);
            Ce = true;
        };
        if (r) {
            let h = await e.getRow(gTt);
            if (Ee(s)) {
                return;
            }
            if (h.kind !== "ok" && h.kind !== "not_found") {
                k(h);
                return;
            }
        }
        let y = await e.getRow(vrt);
        if (Ee(s)) {
            return;
        }
        if (Ot()) {
            Ce = true;
            return;
        }
        if (y.kind === "not_found") {
            X("no_ready_row", 0, s, false);
            return;
        }
        if (y.kind !== "ok") {
            k(y);
            return;
        }
        X("settings_gone", 0, s, true);
        Ne();
    }
    function En(r) {
        return r === "ready_unreadable" || r === "rules_unverifiable" || r === "settings_refused" || r === "auth_failed" || r === "pack_absent" || r === "pack_unreadable" || r === "generation_mismatch" || r === "request_failed" || r === "settings_unusable" || r === "nothing_applied" || r === "settings_gone";
    }
    function ge(r, s, k, rulesDropped = 0) {
        try {
            e.telemetry.recovery({
                outcome: r,
                generation: s,
                durationMs: e.now() - k,
                rulesDropped,
                afterAnnouncedRun,
                sidecarCountedAsAbsent
            });
        } catch  {
            J("error", "home_seed_telemetry_threw", {});
        }
    }
    function Tt(r) {
        let s = (k, y, h)=>{
            for (let x of k){
                try {
                    x(y);
                } catch  {
                    J("error", h, {});
                }
            }
        };
        if (r.kind === "restored" || r.kind === "not_restored") {
            E = H.size === 0 ? r : undefined;
            if (r.kind === "not_restored" && H.size > 0) {
                Me = r.reason;
            }
            s(H, r, "home_seed_restore_listener_threw");
        } else {
            R = b.size === 0 ? r : undefined;
            s(b, r, "home_seed_applied_listener_threw");
        }
    }
    function ze(r) {
        if (!Y || q || V === undefined || deaf || c) {
            return;
        }
        if (afterAnnouncedRun && !re) {
            return;
        }
        q = true;
        An(r).catch((s)=>{
            J("error", "home_seed_run_threw", {
                name: wMe(s)
            });
        }).finally(()=>{
            q = false;
            G = undefined;
            Ne();
            me();
            Ae();
            Ie();
        });
    }
    function Ae() {
        st();
        if (q) {
            return;
        }
        if (V !== undefined && verdict === "served") {
            ze(false);
            if (q) {
                fe = false;
            }
            return;
        }
        if (!fe) {
            return;
        }
        if (N === undefined || N.readyWritten) {
            fe = false;
            return;
        }
        dt();
        if (q) {
            fe = false;
        }
    }
    function dt() {
        if (N === undefined || q || deaf || c || !Y || verdict !== "served") {
            return;
        }
        let r = N;
        q = true;
        ut(r.ready).then((s)=>{
            if (s) {
                r.readyWritten = true;
            }
        }).catch((s)=>{
            J("error", "home_seed_run_threw", {
                name: wMe(s)
            });
        }).finally(()=>{
            q = false;
            me();
            Ae();
        });
    }
    async function An(r) {
        let s = e.now();
        let k = V;
        if (k === undefined) {
            return;
        }
        V = undefined;
        if (N !== undefined && k.etag === N.etag) {
            if (!N.readyWritten) {
                N.readyWritten = await ut(N.ready);
            }
            return;
        }
        if (k.etag === ce) {
            return;
        }
        G = k;
        afterAnnouncedRun = true;
        runs++;
        if (e.epochGt1 && N === undefined && ce === undefined) {
            let ie = await (be ?? e.readSidecar(t.configHome));
            if (ie?.packEtag === k.etag && k.etag !== packEtag) {
                ce = k.etag;
                ae = ie;
                lt();
                te("already_applied", "none", null, ie.generation, s);
                return;
            }
        }
        let y = "verdict_wake";
        if (!r) {
            let ie = await Ct(gTt);
            if (ie.kind === "deaf") {
                return;
            }
            y = Pn(ie.kind);
            if (ie.kind === "refused" || ie.kind === "rejected") {
                te("refused_lane", y, null, 0, s);
                pe("probe_refused");
                return;
            }
            if (ie.kind === "auth" || ie.kind === "transport") {
                te(ie.kind === "auth" ? "auth_skipped" : "transport_failed", y, null, 0, s);
                return;
            }
        }
        let h = await Ct(WJ);
        switch(h.kind){
            case "deaf":
                return;
            case "refused":
                te("refused_lane", y, null, 0, s);
                pe("pack_refused");
                return;
            case "rejected":
                te("request_rejected", y, null, 0, s);
                return;
            case "auth":
            case "transport":
                te(h.kind === "auth" ? "auth_skipped" : "transport_failed", y, null, 0, s);
                return;
            case "not_found":
                te("pack_absent", y, null, 0, s);
                return;
            case "ok":
                break;
        }
        let x = e.announcements.remembered().findLast((ie)=>ie.etag === h.etag);
        if (x === undefined) {
            te("unannounced_row", y, null, 0, s);
            return;
        }
        let O = rge(h.buf);
        if (!O.ok) {
            J("warn", "home_seed_bad_pack", {
                reason: O.reason
            });
            te("bad_pack", y, null, 0, s);
            return;
        }
        let W = gt({
            pack: O.pack,
            packEtag: h.etag,
            refused: O.refused,
            sidecar: await e.readSidecar(t.configHome),
            lastAppliedGeneration,
            permissionsAdmissible: e.limits.permissionsFromAnyAnnouncedPack || x.beforeFirstCommand && !e.epochGt1
        });
        if (W.kind === "stale_generation") {
            te("stale_generation", y, null, W.generation, s);
            return;
        }
        let C = t.foreignFiles !== "replaced" ? Pt(W.plan, O.pack.settings) : null;
        let U = C === null ? W.plan : {
            ...W.plan,
            restrictingSettings: {
                plan: C.deny.length === 0 && C.ask.length === 0 ? null : Ye({
                    permissions: {
                        ...C.deny.length > 0 && {
                            deny: [
                                ...C.deny
                            ]
                        },
                        ...C.ask.length > 0 && {
                            ask: [
                                ...C.ask
                            ]
                        }
                    }
                }),
                rulesLeftOut: C.dropped
            }
        };
        let M = await e.execute(U, t, e.applyDeps());
        let B = !S;
        if (M.outcome === "config_home_unsafe" || M.outcome === "flag_off") {
            te(M.outcome, y, M, M.generation, s);
            return;
        }
        lastAppliedGeneration = M.generation;
        let _e = {
            beforeFirstAsk: B,
            applied: xt(U, M)
        };
        try {
            e.afterApply(M, _e);
        } catch  {
            J("error", "home_seed_after_apply_threw", {});
        }
        lt();
        let restoreNoticeSuperseded = M.settingsWritten && (ve ?? E) !== undefined;
        if (restoreNoticeSuperseded) {
            ve = undefined;
            E = undefined;
        }
        Ne();
        let he = He.size > 0;
        let outputStyleCheck = await Fn(U, M);
        let answersNotRestored = Me !== undefined && (Me === "settings_gone" || M.settingsWritten);
        Tt({
            ..._e,
            outcome: M.outcome,
            generation: M.generation,
            duringHold: he || He.size > 0,
            outputStyleMissing: outputStyleCheck === "unresolved",
            answersNotRestored
        });
        if (answersNotRestored && M.outcome === "applied") {
            Me = undefined;
        }
        te(M.outcome, y, M, M.generation, s, {
            appliedBeforeFirstAsk: B,
            outputStyleCheck,
            restoreNoticeSuperseded,
            answersNotRestored
        });
        let ready = Tn(M, B);
        let $t = {
            etag: h.etag,
            ready,
            readyWritten: false
        };
        N = $t;
        G = undefined;
        me();
        $t.readyWritten = await ut(ready);
    }
    function Dt(r, s) {
        if (!s.settingsWritten) {
            return;
        }
        return (s.settingsKeptForeign ? r.restrictingSettings?.plan : r.settings)?.document;
    }
    function xt(r, s) {
        let k = Dt(r, s);
        let y = k?.permissions;
        return {
            claudeMd: s.appliedByKind.claude_md > 0,
            rules: s.appliedByKind.rule,
            outputStyles: s.appliedByKind.output_style,
            permissionRules: (y?.allow?.length ?? 0) + (y?.deny?.length ?? 0) + (y?.ask?.length ?? 0),
            settingsKeys: Object.keys(k ?? {}).filter((h)=>h !== "permissions"),
            settingsNotWritten: s.settingsAttempted && !s.settingsWritten && !s.settingsKeptForeign,
            settingsRefused: s.settingsRefused !== "none" && !s.settingsKeptForeign,
            settingsKeptForeign: s.settingsKeptForeign,
            credentialRestrictionsLeftOut: s.refilteredCredentialRestrictions,
            rulesLeftOut: Math.max(0, s.rulesLeftOut - s.refilteredCredentialRestrictions),
            credentialFilesLeftOut: s.filesRefused.credential,
            filesKeptForeign: s.filesRefused.keptForeign,
            filesNotApplied: Object.values(s.filesRefused).reduce((acc, item)=>acc + item, 0) - s.filesRefused.credential - s.filesRefused.keptForeign + s.filesFailed,
            filesRemoved: s.filesRemoved,
            settingsRemoved: s.settingsRemoved,
            removalsFailed: s.removalsFailed,
            settingsRemoveFailed: s.settingsRemoveFailed
        };
    }
    async function Fn(r, s) {
        let k = Dt(r, s)?.outputStyle;
        let e_outputStyleAvailable = e.outputStyleAvailable;
        if (k === undefined || e_outputStyleAvailable === undefined) {
            return "not_asked";
        }
        let h = await new Promise((resolvePromise)=>{
            let O = e.setTimer(()=>resolvePromise("ask_capped"), Wn);
            Promise.resolve().then(()=>e_outputStyleAvailable(k)).then((W)=>{
                if (W) {
                    return "available";
                }
                return "unresolved";
            }, ()=>"ask_failed").then((W)=>{
                O();
                resolvePromise(W);
            });
        });
        if (h === "unresolved") {
            J("info", "home_seed_output_style_unresolved", {});
        }
        return h;
    }
    function Pn(kind) {
        switch(kind){
            case "ok":
                return "found";
            case "not_found":
                return "absent";
            case "refused":
            case "rejected":
                return "refused";
            case "auth":
            case "transport":
                return kind;
        }
    }
    function te(r, probe, report, y, h, x = {
        appliedBeforeFirstAsk: !S,
        outputStyleCheck: "not_asked",
        restoreNoticeSuperseded: false,
        answersNotRestored: false
    }) {
        try {
            e.telemetry.apply({
                outcome: r,
                probe,
                report,
                generation: y,
                epochGt1: e.epochGt1,
                durationMs: e.now() - h,
                ...x
            });
        } catch  {
            J("error", "home_seed_telemetry_threw", {});
        }
    }
    async function Ct(r) {
        let requestRetryDelayMs = e.limits.requestRetryDelayMs;
        for(let k = 1;; k++){
            if (deaf || c) {
                return {
                    kind: "deaf"
                };
            }
            let y = await e.getRow(r);
            if (y.kind === "ok") {
                return {
                    kind: "ok",
                    buf: y.buf,
                    etag: y.content_sha256
                };
            }
            if (y.kind === "not_found") {
                return {
                    kind: "not_found"
                };
            }
            let h = ht(y);
            if (h !== "transport" || k >= e.limits.requestAttempts) {
                J("warn", "home_seed_lane_request_failed", {
                    outcome: h,
                    kind: y.errorKind,
                    status: y.status ?? 0
                });
                return {
                    kind: h
                };
            }
            await e.sleep(requestRetryDelayMs);
            requestRetryDelayMs *= 2;
        }
    }
    async function ut(ready) {
        let requestRetryDelayMs = e.limits.requestRetryDelayMs;
        let k = false;
        for(let y = 1;; y++){
            if (deaf || c) {
                return false;
            }
            let h = await e.putRow(vrt, ready, Be);
            if (h.kind === "ok") {
                Be = h.content_sha256;
                return true;
            }
            if (h.kind === "conflict" && !k) {
                k = true;
                if (deaf || c) {
                    return false;
                }
                let O = await e.getRow(vrt);
                Be = O.kind === "ok" ? O.content_sha256 : undefined;
                continue;
            }
            if (!(h.kind === "error" && ht(h) === "transport") || y >= e.limits.requestAttempts) {
                J("warn", "home_seed_ready_put_failed", {
                    kind: h.kind,
                    ...h.kind === "error" && {
                        errorKind: h.errorKind,
                        status: h.status ?? 0
                    }
                });
                return false;
            }
            await e.sleep(requestRetryDelayMs);
            requestRetryDelayMs *= 2;
        }
    }
    function On(r) {
        return cVr({
            generation: r.generation,
            appliedBeforeFirstAsk: false,
            outcome: "applied",
            filesApplied: r.entries.length,
            filesRefused: 0,
            settingsWritten: r.settingsSha256 !== null,
            replacedForeign: 0,
            writtenAtMs: e.now()
        });
    }
    function Tn(r, appliedBeforeFirstAsk) {
        return cVr({
            generation: r.generation,
            appliedBeforeFirstAsk,
            outcome: r.outcome === "applied" ? "applied" : "partial",
            filesApplied: r.filesApplied,
            filesRefused: Object.values(r.filesRefused).reduce((acc, item)=>acc + item, 0) + r.filesFailed,
            settingsWritten: r.settingsWritten && r.settingsAttempted,
            replacedForeign: r.filesReplacedForeign + (r.replacedExistingSettings === "foreign" ? 1 : 0),
            writtenAtMs: e.now()
        });
    }
    function Dn(r) {
        let s = e.now();
        let firstAsk = !S;
        let y = ()=>{
            let h = deaf || c ? undefined : it();
            if (h !== undefined && h.ordinal > Te) {
                return h;
            }
        };
        if (y() === undefined || e.limits.holdMaxMs <= 0) {
            S = true;
            Ie();
            return Promise.resolve();
        }
        return new Promise((resolvePromise)=>{
            let x = false;
            let verdictWaitMs = 0;
            let W = verdict !== undefined && ne;
            let C = [];
            let U = (ee)=>{
                if (x) {
                    return;
                }
                x = true;
                for (let he of C){
                    he();
                }
                He.delete(M);
                if (ee !== "released" && ee !== "gate_off") {
                    Te = Math.max(Te, it()?.ordinal ?? 0);
                }
                S = true;
                Ie();
                resolvePromise();
                try {
                    e.telemetry.hold({
                        outcome: ee,
                        waitedMs: e.now() - s,
                        verdictWaitMs,
                        firstAsk
                    });
                } catch  {
                    J("error", "home_seed_telemetry_threw", {});
                }
            };
            let M = ()=>{
                if (!W && verdict !== undefined && ne) {
                    W = true;
                    verdictWaitMs = e.now() - s;
                    B();
                }
                if (deaf || c) {
                    U("gate_off");
                } else if (y() === undefined) {
                    U("released");
                }
            };
            let B = ()=>{};
            if (r.aborted) {
                U("interrupted");
                return;
            }
            He.add(M);
            C.push(e.setTimer(()=>U("timeout"), e.limits.holdMaxMs));
            if (!W) {
                B = e.setTimer(()=>{
                    verdictWaitMs = e.now() - s;
                    if (verdict === undefined) {
                        U("verdict_timeout");
                    } else if (!ne) {
                        U("flag_timeout");
                    }
                }, e.limits.verdictWaitMaxMs);
                C.push(()=>B());
            }
            let _e = ()=>U("interrupted");
            r.addEventListener("abort", _e, {
                once: true
            });
            C.push(()=>r.removeEventListener("abort", _e));
        });
    }
    let ct;
    try {
        ct = e.enabled();
    } catch  {
        ct = Promise.resolve(false);
    }
    let qe = false;
    let Mt = ()=>{
        if (qe && rt === "absent") {
            qe = false;
            ge("restore_gate_off", 0, e.now());
            Ce = true;
            Ie();
        }
    };
    ct.then((r)=>{
        ne = true;
        if (r === true || r === "announced_only") {
            Y = true;
            qe = e.epochGt1 && r !== true;
            re ||= r !== true;
            Mt();
            le = !re;
            It();
            Ft();
            if (V !== undefined && verdict === "served") {
                ze(false);
            } else if (fe) {
                Ae();
            } else {
                st();
            }
            return;
        }
        pe("flag_off");
    }, ()=>{
        ne = true;
        pe("flag_off");
    }).finally(me);
    let Nt = false;
    let It = ()=>{
        if (Nt || !e.epochGt1) {
            return;
        }
        Nt = true;
        e.sidecarState(t.configHome).then(async (r)=>{
            sidecarCountedAsAbsent = r === "valid" && t.foreignFiles !== "replaced" && (await e.readSidecar(t.configHome))?.settingsSha256 === null;
            if (sidecarCountedAsAbsent) {
                return "absent";
            }
            return r;
        }).catch(()=>"invalid").then((r)=>{
            rt = r;
            Mt();
            if (r !== "absent") {
                if (r === "invalid" && (!re || qe)) {
                    ge("sidecar_invalid", 0, e.now());
                }
                re = true;
                le = false;
            }
            Ae();
            me();
        });
    };
    if (le) {
        It();
    }
    for (let r of e.announcements.remembered()){
        At(r);
    }
    let xn = e.announcements.subscribe((r)=>{
        queueMicrotask(()=>{
            At(r);
            me();
        });
    });
    let Wt = ()=>{};
    we = true;
    try {
        Wt = e.verdicts.subscribe((r)=>{
            let s = we;
            queueMicrotask(()=>{
                wn(r, s);
                me();
            });
        });
    } catch  {
        J("error", "home_seed_verdict_subscribe_threw", {});
    } finally{
        we = false;
    }
    return {
        beforeTurn: (r)=>Dn(r).then(Ne),
        state: ()=>({
                verdict,
                deaf,
                deafReason,
                lastAppliedGeneration,
                pending: it() !== undefined || q || !re,
                runs,
                restore: Re ? q && Z ? "running" : "done" : Z ? "armed" : le ? "provisional" : re ? "done" : "none"
            }),
        onApplied: (r)=>{
            b.add(r);
            Gt(r, R, "home_seed_applied_listener_threw");
            R = undefined;
            return ()=>b.delete(r);
        },
        onRestore: (r)=>{
            H.add(r);
            Gt((s)=>{
                if (s.kind === "not_restored") {
                    Me = s.reason;
                }
                r(s);
            }, E, "home_seed_restore_listener_threw");
            E = undefined;
            return ()=>H.delete(r);
        },
        stop: ()=>{
            c = true;
            xn();
            Wt();
            pe("stopped");
        }
    };
}
const Un = 501;
const Bn = 409;
function ht(t) {
    if (t.errorKind === "auth") {
        return "auth";
    }
    if (t.errorKind === "gated" || t.status === Un || t.status === Bn) {
        return "refused";
    }
    if (t.retryable) {
        return "transport";
    }
    return "rejected";
}
async function Xn(t) {
    try {
        await stat(t);
        return true;
    } catch  {
        return false;
    }
}
async function Qe(homeReal, e) {
    try {
        let n = dirname(e);
        let l = [];
        while(!await Xn(n)){
            l.unshift(basename(n));
            let H = dirname(n);
            if (H === n) {
                return null;
            }
            n = H;
        }
        let u = await realpath(n);
        let c = join(u, ...l, basename(e));
        let b = relative(homeReal, c);
        if (b === "" || b.startsWith("..")) {
            return null;
        }
        return b.split(sep).join("/");
    } catch  {
        return null;
    }
}
function tr(t) {
    if (t === ebt) {
        return $e.userSettings();
    }
    let e = HEe(t);
    let [, ...n] = t.split("/");
    switch(e){
        case null:
            return null;
        case "claude_md":
            return $e.state("user-memory");
        case "rule":
            return $e.userConfigDir(MEe, n);
        case "output_style":
            return $e.userConfigDir(jze, n);
    }
}
function tn({ storageV5, flagOn, configHome, settingsToCloud = Vpn }) {
    let u = (b)=>async (H, R, E)=>{
            if (!await settingsToCloud().catch(()=>false)) {
                throw de(Error("settings forwarding is not enabled for this account"), "HOME_DEST_FLAG_OFF");
            }
            return b(H, R, E);
        };
    if (!flagOn || storageV5 === undefined) {
        return u(en);
    }
    let c = resolve(configHome);
    return u(async (b, H, R)=>{
        if (resolve(b) !== c) {
            throw de(Error("destination names a config home the backend does not address"), "HOME_DEST_HOME_MISMATCH");
        }
        let E = relative(b, H).split(sep).join(posix.sep);
        let w = tr(E);
        if (w === null) {
            return en(b, H, R);
        }
        await nr(b, H);
        let K = await storageV5.write(w, R, {
            publishDiscipline: "atomic",
            mode: C7n,
            precondition: {
                type: "none"
            },
            parent: "mustExist"
        });
        if (!K.ok) {
            let { error } = K;
            throw de(Error("storage backend refused the write"), error.code === "Failed" ? `HOME_STORAGE_FAILED_${error.failureClass.toUpperCase()}${error.telemetryCode === undefined ? "" : `_${error.telemetryCode.toUpperCase()}`}` : `HOME_STORAGE_${error.code.toUpperCase()}`);
        }
    });
}
function en(t, e, n) {
    return rbt(t, e, n, "replace");
}
async function nr(t, e) {
    if (iae(relative(t, e))) {
        throw de(Error("destination name is one the lane writer ignores"), "HOME_DEST_IGNORED");
    }
    await mkdir(t).catch((u)=>{
        if (v(u) !== "EEXIST") {
            throw u;
        }
    });
    let n = await realpath(t);
    await rr(n, dirname(e));
    await mkdir(dirname(e), {
        recursive: true
    });
    let l = await realpath(dirname(e));
    if (!nn({
        path: l,
        directory: n
    })) {
        throw de(Error("destination parent escaped the config home"), "HOME_DEST_PARENT_ESCAPE");
    }
    if (iae(relative(n, join(l, basename(e))))) {
        throw de(Error("destination resolves to a name the lane writer ignores"), "HOME_DEST_IGNORED");
    }
    try {
        let u = await lstat(e);
        if (u.isSymbolicLink()) {
            throw de(Error("destination is a symlink"), "HOME_DEST_SYMLINK");
        }
        if (u.isDirectory()) {
            throw de(Error("destination is a directory"), "HOME_DEST_IS_DIRECTORY");
        }
        if (u.nlink > 1) {
            throw de(Error("destination is hard-linked elsewhere"), "HOME_DEST_HARD_LINKED");
        }
    } catch (error) {
        if (!z(error)) {
            throw error;
        }
    }
}
async function rr(t, e) {
    let n = e;
    while(true){
        try {
            let l = await realpath(n);
            if (!nn({
                path: l,
                directory: t
            })) {
                throw de(Error("destination ancestor escaped the config home"), "HOME_DEST_PARENT_ESCAPE");
            }
            if (iae(relative(t, l))) {
                throw de(Error("destination ancestor resolves to a name the lane writer ignores"), "HOME_DEST_IGNORED");
            }
            return;
        } catch (error) {
            if (v(error) !== "ENOENT") {
                throw error;
            }
            let u = dirname(n);
            if (u === n) {
                throw error;
            }
            n = u;
        }
    }
}
function nn({ path, directory }) {
    return path === directory || path.startsWith(directory.endsWith(sep) ? directory : directory + sep);
}
function de(t, e) {
    t.code = e;
    return t;
}
function on(homeReal, e) {
    try {
        return z9o(e.content.toString("utf8"), join(homeReal, ...e.path.split("/")), "User").every((n)=>ar(homeReal, n));
    } catch  {
        return false;
    }
}
function ar(homeReal, e) {
    let n = relative(homeReal, e);
    if (n === "" || n === ".." || n.startsWith(`..${sep}`) || isAbsolute(n)) {
        return false;
    }
    let l = W7e(n.split(sep).join("/"));
    return l !== null && l.kind !== "output_style";
}
async function readSidecar(t) {
    let e = await Oe(join(t, rft), We);
    if (e.kind === "read") {
        return pt(e.content);
    }
    return null;
}
async function sidecarState(t) {
    let e = await Oe(join(t, rft), We);
    if (e.kind === "absent") {
        return "absent";
    }
    if (e.kind === "read" && pt(e.content) !== null) {
        return "valid";
    }
    return "invalid";
}
async function readStandingSettings(t) {
    let e = await Oe(t, Pe);
    return vt(e, t);
}
function vt(t, e) {
    if (t.kind === "absent") {
        return {
            kind: "absent"
        };
    }
    if (t.kind !== "read" || t.content.length > Pe) {
        return {
            kind: "unusable"
        };
    }
    let n = t.content.toString("utf8");
    let l = Io(n);
    let u = ur().safeParse(l.trim() === "" ? {} : vzt(l));
    if (u.success && Fw(n, e).settings !== null) {
        return {
            kind: "object",
            value: u.data
        };
    }
    return {
        kind: "unusable"
    };
}
function dr(t, e) {
    try {
        let n = vt(t, e);
        return n.kind === "object" && Object.keys(n.value).length === 0;
    } catch  {
        return false;
    }
}
var ur = p(()=>ue(o(), oe()));
function Ue(t) {
    return t === "ENOENT" || t === "ENOTDIR";
}
async function Oe(t, e) {
    try {
        let n = await open(t, Cu());
        try {
            let l = await n.stat();
            if (!l.isFile()) {
                return {
                    kind: "not_regular"
                };
            }
            if (l.size > e) {
                return {
                    kind: "too_large"
                };
            }
            return {
                kind: "read",
                content: await kr(n, l.size)
            };
        } finally{
            await n.close();
        }
    } catch (error) {
        let l = v(error) ?? "unknown";
        if (Ue(l)) {
            return {
                kind: "absent"
            };
        }
        if (l === "ELOOP" || l === "EISDIR" || l === "ENXIO") {
            return {
                kind: "not_regular"
            };
        }
        return {
            kind: "unreadable",
            code: l
        };
    }
}
function pn({ storageV5, configHome }) {
    return {
        writeHomeFile: tn({
            storageV5,
            flagOn: j(),
            configHome
        }),
        markInternalWrite: Pdt,
        consumeInternalWrite: (n)=>{
            pWn(n, Atn);
        },
        inSettingsWriteQueue: (n)=>Evo(yn("userSettings") ?? join(configHome, ebt), n),
        now: ()=>Date.now(),
        settingsToCloud: Vpn
    };
}
async function cr(configHome, repoRoot, n = Tzt) {
    let l = resolve(configHome);
    let u;
    try {
        u = await lstat(l);
    } catch (error) {
        return {
            ok: false,
            reason: z(error) ? "missing" : "unresolvable"
        };
    }
    if (u.isSymbolicLink()) {
        return {
            ok: false,
            reason: "symlink"
        };
    }
    if (!u.isDirectory()) {
        return {
            ok: false,
            reason: "not_directory"
        };
    }
    let c;
    let b;
    try {
        c = await realpath(l);
        b = await realpath(repoRoot);
    } catch  {
        return {
            ok: false,
            reason: "unresolvable"
        };
    }
    if (et({
        path: b,
        directory: c
    })) {
        return {
            ok: false,
            reason: "overlaps_repo"
        };
    }
    if (await gn(c)) {
        return {
            ok: false,
            reason: "inside_git_worktree"
        };
    }
    if (et({
        path: c,
        directory: b
    })) {
        J("info", "home_under_cwd_no_worktree", {});
    }
    let H;
    try {
        H = await realpath(n);
    } catch (error) {
        if (!Ue(v(error))) {
            return {
                ok: false,
                reason: "unresolvable"
            };
        }
        H = null;
    }
    if ([
        n,
        H
    ].some((E)=>E !== null && (et({
            path: c,
            directory: E
        }) || et({
            path: E,
            directory: c
        })))) {
        return {
            ok: false,
            reason: "inside_synced_root"
        };
    }
    return {
        ok: true,
        real: c
    };
}
async function gn(t) {
    for(let e = t;; e = dirname(e)){
        if (await je(join(e, ".git")) !== "absent") {
            return true;
        }
        if (dirname(e) === e) {
            return false;
        }
    }
}
async function je(t) {
    try {
        return await lstat(t);
    } catch (error) {
        if (Ue(v(error))) {
            return "absent";
        }
        return "unverifiable";
    }
}
function et({ path, directory }) {
    return path === directory || path.startsWith(directory.endsWith(sep) ? directory : directory + sep);
}
async function execute(t, e, deps) {
    let gate = await Promise.resolve().then(deps.settingsToCloud).then((S)=>{
        if (S) {
            return "on";
        }
        return "off";
    }, ()=>"threw");
    if (gate !== "on") {
        J("info", "home_seed_apply_flag_off", {
            gate
        });
        return {
            outcome: "flag_off",
            generation: t.generation
        };
    }
    let u = await cr(e.configHome, e.repoRoot, e.syncedRoot);
    if (!u.ok) {
        J("warn", "home_seed_config_home_unsafe", {
            reason: u.reason
        });
        return {
            outcome: "config_home_unsafe",
            generation: t.generation,
            reason: u.reason
        };
    }
    let c = {
        configHome: resolve(e.configHome),
        homeReal: u.real,
        keepsForeignFiles: e.foreignFiles !== "replaced",
        deps
    };
    let b = [];
    for (let S of t.removals){
        b.push({
            removal: S,
            result: await an(S, c)
        });
    }
    let H = [];
    for (let file of t.writes){
        let { result, stoodForeign } = await fr(file, t.priorEntries.get(file.path), c);
        H.push({
            file,
            result,
            stoodForeign
        });
        let sha256 = t.priorEntries.get(file.path);
        if (result === "loader_reach" && sha256 !== undefined) {
            let Re = {
                path: file.path,
                kind: file.kind,
                sha256
            };
            b.push({
                removal: Re,
                result: await an(Re, c)
            });
        }
    }
    let R = await c.deps.inSettingsWriteQueue(()=>yr(t, e.settingsPath, c));
    let E = H.filter(({ result })=>result === "applied");
    let w = b.filter(({ result })=>result === "removed");
    let K = new Set(b.filter(({ result })=>result !== "failed").map(({ removal })=>removal.path));
    let P = H.filter(({ result })=>result === "applied" || result === "unverified");
    let Y = new Set(P.map(({ file })=>file.path));
    let ne = new Map([
        ...[
            ...t.priorEntries
        ].filter(([S])=>!K.has(S) && !Y.has(S)),
        ...P.map(({ file })=>[
                file.path,
                file.sha256
            ])
    ]);
    let settingsAttempted = t.settings !== null && e.settingsPath !== undefined;
    let G = t.settings === null && t.priorSettingsSha256 !== null && e.settingsPath !== undefined;
    let q = settingsAttempted || G || e.settingsPath !== undefined && t.counts.refused.settings !== "none";
    let Te = t.counts.refused.settings === "none" && !R.keptForeign && (R.written || G && !R.removeFailed);
    let N = t.writes.length + t.counts.refilteredCredentialFiles + b.length + (q ? 1 : 0);
    let removalsFailed = F(b, ({ result })=>result === "failed");
    let fe = E.length + (b.length - removalsFailed) + (Te ? 1 : 0);
    let ae = (S)=>F(H, (Z)=>Z.result === S);
    let xe = N === 0 ? "empty" : fe === N ? "applied" : "partial";
    let be = t.restoreRecord === true;
    let sidecarWritten = !(be ? !R.written : ne.size === 0 && R.sha256After === null && t.priorEntries.size === 0 && t.priorSettingsSha256 === null) && await Sr(c, {
        version,
        generation: t.generation,
        writtenAtMs: deps.now(),
        entries: be ? (await readSidecar(e.configHome))?.entries ?? [] : [
            ...ne
        ].map(([path, sha256])=>({
                path,
                sha256
            })),
        settingsSha256: be && !(c.keepsForeignFiles && R.nothingStood) ? null : R.sha256After,
        ...xe !== "partial" && {
            packEtag: t.packEtag
        }
    });
    if (sidecarWritten && ne.size > Fe) {
        J("warn", "home_seed_sidecar_trimmed", {
            dropped: ne.size - Fe
        });
    }
    return {
        outcome: xe,
        generation: t.generation,
        filesApplied: E.length,
        appliedByKind: {
            claude_md: F(E, ({ file })=>file.kind === "claude_md"),
            rule: F(E, ({ file })=>file.kind === "rule"),
            output_style: F(E, ({ file })=>file.kind === "output_style")
        },
        filesReplacedForeign: F(E, ({ stoodForeign })=>stoodForeign),
        filesRefused: {
            destination: t.counts.refused.destination,
            overCap: t.counts.refused.overCap,
            resolvedDestination: ae("refused") + ae("unverified"),
            parentNotDirectory: ae("parent_not_directory"),
            destIsDirectory: ae("dest_is_directory"),
            loaderReach: ae("loader_reach"),
            credential: t.counts.refilteredCredentialFiles,
            keptForeign: ae("kept_foreign")
        },
        filesFailed: ae("failed"),
        filesRemoved: w.length,
        removalsFailed,
        settingsAttempted,
        settingsWritten: R.written,
        settingsKeptForeign: R.keptForeign,
        rulesLeftOut: R.keptForeign ? t.restrictingSettings?.rulesLeftOut ?? 0 : 0,
        settingsRemoved: R.removed,
        settingsRemoveFailed: R.removeFailed,
        standingSettingsUnreadable: R.unreadable,
        settingsRefused: t.counts.refused.settings,
        replacedExistingSettings: R.replaced,
        refilteredKeys: t.counts.refilteredKeys,
        refilteredCredentials: t.counts.refilteredCredentials,
        refilteredCredentialRestrictions: t.counts.refilteredCredentialRestrictions,
        permissionsDropped: t.counts.permissionsDropped,
        touchedKinds: new Set([
            ...P.map(({ file })=>file.kind),
            ...w.map(({ removal })=>removal.kind)
        ]),
        sidecarWritten
    };
}
function ke(configHome, e) {
    return join(configHome, ...e.split("/"));
}
async function fr(file, e, n) {
    let result = await mr(file, n);
    if (result !== "clear") {
        return {
            result,
            stoodForeign: false
        };
    }
    let stoodForeign = await hr(file.path, e, n);
    if (stoodForeign && n.keepsForeignFiles) {
        return {
            result: "kept_foreign",
            stoodForeign: false
        };
    }
    return {
        result: await pr(file, n),
        stoodForeign
    };
}
async function mr(file, e) {
    if (file.kind !== "output_style" && !on(e.homeReal, file)) {
        J("warn", "home_seed_destination_refused", {
            reason: "loader_reach"
        });
        return "loader_reach";
    }
    let n = ke(e.configHome, file.path);
    let l = await Qe(e.homeReal, n);
    if (l === null || !tbt(l)) {
        J("warn", "home_seed_destination_refused", {
            reason: "resolved_spelling"
        });
        return "refused";
    }
    let u = await _r(file.path, e);
    if (u !== "clear") {
        J("warn", "home_seed_destination_obstructed", {
            reason: u
        });
        if (u === "parent_not_directory" || u === "dest_is_directory") {
            return u;
        }
        return "refused";
    }
    if (!await ye(e)) {
        J("warn", "home_seed_destination_refused", {
            reason: "home_unvetted"
        });
        return "refused";
    }
    return "clear";
}
async function pr(file, e) {
    let n = ke(e.configHome, file.path);
    try {
        await e.deps.writeHomeFile(e.configHome, n, file.content);
        if (!await gr(file.path, e)) {
            return "unverified";
        }
        return "applied";
    } catch (error) {
        let u = v(error) ?? "unknown";
        if (u.startsWith("WORKING_") || u.startsWith("HOME_DEST_")) {
            J("warn", "home_seed_destination_refused", {
                reason: u
            });
            return "refused";
        }
        J("warn", "home_seed_write_failed", {
            code: u
        });
        return "failed";
    }
}
async function ye(t) {
    try {
        return await realpath(t.configHome) === t.homeReal && !await gn(t.homeReal);
    } catch  {
        return false;
    }
}
async function gr(path, e) {
    let n = ke(e.configHome, path);
    let u = await Qe(e.homeReal, n) !== path ? "resolved_spelling" : await tt(n);
    if (u !== null) {
        J("warn", "home_seed_write_escaped", {
            reason: u
        });
        return false;
    }
    if (!await ye(e)) {
        J("warn", "home_seed_write_unverified", {});
        return false;
    }
    return true;
}
async function tt(t) {
    let e = await je(t);
    if (e === "absent") {
        return "leaf_absent";
    }
    if (e === "unverifiable") {
        return "leaf_unverifiable";
    }
    if (e.isFile()) {
        return null;
    }
    return "leaf_not_regular";
}
async function hn(path, e) {
    let n = path.split("/");
    for(let l = 1; l < n.length; l++){
        let u = ke(e.configHome, n.slice(0, l).join("/"));
        let c = await je(u);
        if (c === "absent") {
            return "none";
        }
        if (c === "unverifiable") {
            return "ancestor_unverifiable";
        }
        if (c.isSymbolicLink()) {
            return "ancestor_is_symlink";
        }
        if (!c.isDirectory()) {
            return "parent_not_directory";
        }
        let b = await je(join(u, ".git"));
        if (b === "unverifiable") {
            return "ancestor_unverifiable";
        }
        if (b !== "absent") {
            return "ancestor_in_worktree";
        }
    }
    return "none";
}
async function _r(path, e) {
    let n = await hn(path, e);
    if (n !== "none") {
        return n;
    }
    let l = await je(ke(e.configHome, path));
    if (l === "absent") {
        return "clear";
    }
    if (l === "unverifiable") {
        return "leaf_unverifiable";
    }
    if (l.isSymbolicLink()) {
        return "leaf_is_symlink";
    }
    if (l.isDirectory()) {
        return "dest_is_directory";
    }
    if (l.isFile()) {
        return "clear";
    }
    return "leaf_not_regular";
}
async function hr(path, e, n) {
    let l = await Oe(ke(n.configHome, path), fte);
    switch(l.kind){
        case "absent":
        case "not_regular":
            return false;
        case "too_large":
        case "unreadable":
            return true;
        case "read":
            return e === undefined || at(l.content) !== e;
    }
}
async function an(t, e) {
    let n = ke(e.configHome, t.path);
    let l = await Qe(e.homeReal, n);
    let u = !await ye(e) ? "home_unvetted" : l === null ? "unresolvable" : !tbt(l) ? "resolves_elsewhere" : await hn(t.path, e);
    if (u !== "none") {
        J("warn", "home_seed_remove_obstructed", {
            reason: u
        });
        return "failed";
    }
    let c = await Oe(n, fte);
    switch(c.kind){
        case "absent":
            return "gone";
        case "too_large":
            return "not_ours";
        case "not_regular":
            J("warn", "home_seed_remove_obstructed", {
                reason: "not_regular"
            });
            return "failed";
        case "unreadable":
            J("warn", "home_seed_remove_failed", {
                code: c.code
            });
            return "failed";
        case "read":
            break;
    }
    if (at(c.content) !== t.sha256) {
        return "not_ours";
    }
    try {
        await unlink(n);
        return "removed";
    } catch (error) {
        let H = v(error) ?? "unknown";
        if (Ue(H)) {
            return "gone";
        }
        J("warn", "home_seed_remove_failed", {
            code: H
        });
        return "failed";
    }
}
async function yr(t, settingsPath, n) {
    let l = {
        written: false,
        keptForeign: false,
        nothingStood: false,
        removed: false,
        removeFailed: false,
        unreadable: false,
        replaced: "none",
        sha256After: t.priorSettingsSha256
    };
    if (settingsPath === undefined || t.settings === null && t.priorSettingsSha256 === null) {
        return l;
    }
    if (basename(settingsPath) !== ebt || !await br(n.homeReal, settingsPath)) {
        J("warn", "home_seed_settings_path_refused", {});
        if (t.settings === null) {
            return {
                ...l,
                removeFailed: true
            };
        }
        return l;
    }
    let u = settingsPath;
    if (t.settings === null && !await ye(n)) {
        J("warn", "home_seed_settings_remove_failed", {
            code: "home_unvetted"
        });
        return {
            ...l,
            removeFailed: true
        };
    }
    let c = await Oe(u, SSn);
    if (c.kind === "not_regular" || c.kind === "unreadable") {
        J("warn", "home_seed_settings_not_replaceable", {
            reason: c.kind
        });
        return {
            ...l,
            unreadable: true,
            removeFailed: t.settings === null
        };
    }
    let b = c.kind === "absent" ? "none" : c.kind === "read" && at(c.content) === t.priorSettingsSha256 ? "ours" : "foreign";
    let H = t.restoreRecord === true;
    let R = t.counts.refused.settings !== "none" && !H;
    let nothingStood = c.kind === "absent" || n.keepsForeignFiles && dr(c, u);
    let w = n.keepsForeignFiles && b === "foreign" && !nothingStood;
    let keptForeign = w && t.settings !== null && !H;
    let P = {
        ...l,
        keptForeign,
        nothingStood,
        replaced: keptForeign ? "none" : b
    };
    let Y = (G)=>{
        try {
            return Bt(G, vt(c, u), H && !w ? "restore" : b === "foreign" ? "refused_over_foreign" : "refused_over_ours");
        } catch  {
            return "unreadable";
        }
    };
    let ne = keptForeign ? Y(t.restrictingSettings?.plan ?? null) : R || H ? Y(t.settings) : t.settings;
    if (ne === "unreadable") {
        J("warn", "home_seed_settings_not_replaceable", {
            reason: "not_read_whole"
        });
        return {
            ...P,
            replaced: "none",
            unreadable: true
        };
    }
    if (ne === null) {
        if (b !== "ours") {
            return {
                ...P,
                sha256After: null
            };
        }
        try {
            await unlink(u);
            return {
                ...P,
                removed: true,
                sha256After: null
            };
        } catch (error) {
            let q = v(error) ?? "unknown";
            if (Ue(q)) {
                return {
                    ...P,
                    sha256After: null
                };
            }
            J("warn", "home_seed_settings_remove_failed", {
                code: q
            });
            return {
                ...P,
                removeFailed: true
            };
        }
    }
    if (!await ye(n)) {
        J("warn", "home_seed_settings_not_replaceable", {
            reason: "home_unvetted"
        });
        return P;
    }
    let sha256After = (R || keptForeign) && b === "foreign" && !nothingStood ? null : ne.sha256;
    n.deps.markInternalWrite(u);
    try {
        await n.deps.writeHomeFile(n.configHome, u, Buffer.from(ne.rendered));
        let G = await tt(u);
        if (G !== null || !await ye(n)) {
            J("warn", "home_seed_write_unverified", {
                reason: G ?? "home_unvetted"
            });
            return {
                ...P,
                sha256After
            };
        }
        return {
            ...P,
            written: true,
            sha256After
        };
    } catch (error) {
        n.deps.consumeInternalWrite(u);
        J("warn", "home_seed_settings_write_failed", {
            code: v(error) ?? "unknown"
        });
        return {
            ...P,
            sha256After: b === "ours" ? t.priorSettingsSha256 : null
        };
    }
}
async function br(homeReal, settingsPath) {
    try {
        return await realpath(dirname(settingsPath)) === homeReal && basename(settingsPath) !== "";
    } catch  {
        return false;
    }
}
async function Sr(t, e) {
    if (!await ye(t)) {
        J("warn", "home_seed_sidecar_write_failed", {
            code: "home_unvetted"
        });
        return false;
    }
    let n = join(t.configHome, rft);
    let l = await tt(n);
    if (l !== null && l !== "leaf_absent") {
        J("warn", "home_seed_sidecar_write_refused", {
            reason: l
        });
        return false;
    }
    try {
        await t.deps.writeHomeFile(t.configHome, n, Ut(e));
    } catch (error) {
        J("warn", "home_seed_sidecar_write_failed", {
            code: v(error) ?? "unknown"
        });
        return false;
    }
    let u = await tt(n);
    if (u !== null || !await ye(t)) {
        J("warn", "home_seed_sidecar_write_unverified", {
            reason: u ?? "home_unvetted"
        });
        return false;
    }
    return true;
}
async function kr(t, size) {
    let n = Buffer.allocUnsafe(size);
    let l = 0;
    while(l < size){
        let { bytesRead } = await t.read(n, l, size - l, l);
        if (bytesRead === 0) {
            break;
        }
        l += bytesRead;
    }
    return n.subarray(0, l);
}
const bn = ()=>({});
function Sn() {
    return {
        apply: ({ outcome, probe, report, generation, epochGt1, durationMs, appliedBeforeFirstAsk, outputStyleCheck, restoreNoticeSuperseded, answersNotRestored })=>{
            let w = report !== null && report.outcome !== "config_home_unsafe" && report.outcome !== "flag_off" ? report : null;
            i("tengu_home_seed_apply", {
                outcome: d(outcome),
                probe: d(probe),
                generation,
                epoch_gt1: epochGt1,
                duration_ms: durationMs,
                applied_before_first_ask: appliedBeforeFirstAsk,
                output_style_check: d(outputStyleCheck),
                restore_notice_superseded: restoreNoticeSuperseded,
                answers_not_restored: answersNotRestored,
                ...bn(),
                ...w !== null && {
                    files_applied: w.filesApplied,
                    files_replaced_foreign: w.filesReplacedForeign,
                    files_refused_destination: w.filesRefused.destination,
                    files_refused_over_cap: w.filesRefused.overCap,
                    files_refused_resolved_destination: w.filesRefused.resolvedDestination,
                    files_refused_parent_not_directory: w.filesRefused.parentNotDirectory,
                    files_refused_dest_is_directory: w.filesRefused.destIsDirectory,
                    files_refused_loader_reach: w.filesRefused.loaderReach,
                    files_refused_credential: w.filesRefused.credential,
                    files_refused_kept_foreign: w.filesRefused.keptForeign,
                    files_failed: w.filesFailed,
                    files_removed: w.filesRemoved,
                    removals_failed: w.removalsFailed,
                    settings_written: w.settingsWritten,
                    settings_kept_foreign: w.settingsKeptForeign,
                    rules_left_out: w.rulesLeftOut,
                    settings_removed: w.settingsRemoved,
                    settings_refused: d(w.settingsRefused),
                    settings_attempted: w.settingsAttempted,
                    standing_settings_unreadable: w.standingSettingsUnreadable,
                    replaced_existing_settings: d(w.replacedExistingSettings),
                    refiltered_keys: w.refilteredKeys,
                    refiltered_credentials: w.refilteredCredentials,
                    refiltered_credential_restrictions: w.refilteredCredentialRestrictions,
                    permissions_dropped: w.permissionsDropped,
                    sidecar_written: w.sidecarWritten
                },
                ...report?.outcome === "config_home_unsafe" && {
                    config_home_unsafe_reason: d(report.reason)
                }
            });
            switch(outcome){
                case "applied":
                case "already_applied":
                case "empty":
                    g("ccr_home_seed");
                    break;
                case "partial":
                case "stale_generation":
                case "auth_skipped":
                case "transport_failed":
                case "request_rejected":
                case "pack_absent":
                case "unannounced_row":
                case "refused_lane":
                case "flag_off":
                    f("ccr_home_seed", outcome);
                    break;
                case "bad_pack":
                case "config_home_unsafe":
                    m("ccr_home_seed", outcome);
                    break;
                default:
            }
        },
        hold: ({ outcome, waitedMs, verdictWaitMs, firstAsk })=>{
            i("tengu_home_seed_hold", {
                outcome: d(outcome),
                waited_ms: waitedMs,
                verdict_wait_ms: verdictWaitMs,
                first_ask: firstAsk
            });
        },
        recovery: ({ outcome, generation, durationMs, rulesDropped, afterAnnouncedRun, sidecarCountedAsAbsent })=>{
            i("tengu_home_seed_recovery", {
                outcome: d(outcome),
                generation,
                duration_ms: durationMs,
                rules_dropped: rulesDropped,
                after_announced_run: afterAnnouncedRun,
                sidecar_counted_as_absent: sidecarCountedAsAbsent,
                ...bn()
            });
            switch(outcome){
                case "restored":
                case "no_ready_row":
                case "no_rules":
                case "superseded":
                case "gate_closed":
                case "nothing_applied":
                case "restore_gate_off":
                    break;
                case "lane_unavailable":
                case "settings_gone":
                case "pack_absent":
                case "generation_mismatch":
                case "request_failed":
                case "sidecar_invalid":
                case "rules_unverifiable":
                case "settings_refused":
                case "auth_failed":
                    f("ccr_home_seed", `recovery_${outcome}`);
                    break;
                case "ready_unreadable":
                case "pack_unreadable":
                case "settings_unusable":
                case "threw":
                    m("ccr_home_seed", `recovery_${outcome}`);
                    break;
            }
        }
    };
}
function Rr(t, e, n) {
    if (t.outcome === "config_home_unsafe" || t.outcome === "flag_off") {
        return;
    }
    if (t.settingsWritten || t.settingsRemoved) {
        n.reloadUserSettings();
    }
    if (t.touchedKinds.has("claude_md") || t.touchedKinds.has("rule")) {
        n.clearMemoryFiles();
        n.clearUserContext();
    }
    if ((t.filesApplied > 0 || t.filesRemoved > 0 || t.settingsWritten || t.settingsRemoved) && !e.beforeFirstAsk) {
        n.clearSystemPromptSections();
    }
    if (t.touchedKinds.has("output_style")) {
        n.clearOutputStyles();
    }
}
const vr = {
    outputStyle: "output style",
    includeCoAuthoredBy: "co-author preference",
    includeGitInstructions: "git-instructions preference",
    alwaysThinkingEnabled: "thinking preference",
    showThinkingSummaries: "thinking-summary preference"
};
const Hr = "the output style your settings select is not available in this session, so it does not apply";
const Er = "To send your settings again, re-open this session from the machine that started it.";
const Ar = {
    ready_unreadable: "the earlier acknowledgement could not be read",
    rules_unverifiable: "none of them is in a form this environment can take without your machine",
    settings_refused: "this environment's build could not read the settings your machine sent",
    auth_failed: "this environment's credentials were refused while fetching them",
    pack_absent: "they are no longer stored for this session",
    pack_unreadable: "the stored copy could not be read",
    generation_mismatch: "the stored copy is not the one this session acknowledged",
    request_failed: "the stored copy could not be fetched",
    settings_unusable: "the settings file here could not be merged into",
    nothing_applied: "they could not be written here"
};
export function formatHomeRestoreLine(t) {
    if (t.kind === "not_restored") {
        if (t.keepsForeignFiles) {
            return {
                text: `Your deny and ask rules may not be in force in this cloud session: its environment was restarted. ${Er}`,
                level: "warning"
            };
        }
        let { reason } = t;
        if (reason === "settings_gone") {
            return {
                text: "This cloud environment was recreated, and any user settings forwarded from your machine are not in force here: deny and ask rules, CLAUDE.md and preferences among them. Re-open this session from that machine to send them again.",
                level: "warning"
            };
        }
        return {
            text: `This cloud environment was recreated and the permission rules forwarded from your machine could not be restored (${Ar[reason]}): the deny and ask rules your machine sent are not restored here; ${reason === "settings_refused" ? "a cloud environment on a newer Claude Code build will have them" : "a new cloud session started from that machine will have them"}.`,
            level: "warning"
        };
    }
    let e = [
        ...t.denyRules > 0 ? [
            `${t.denyRules} deny ${I(t.denyRules, "rule")}`
        ] : [],
        ...t.askRules > 0 ? [
            `${t.askRules} ask ${I(t.askRules, "rule")}`
        ] : []
    ];
    let n = t.beforeFirstAsk ? "" : t.duringHold ? " (in effect for this reply)" : " (from your next message)";
    let l = t.droppedRules > 0 ? ` (${t.droppedRules} ${I(t.droppedRules, "rule")} ${I(t.droppedRules, "was", "were")} left out: too long, too many, not in a plain form, or looking like a credential)` : "";
    let u = `Restored ${e.join(" and ")} from this session\u2019s stored copy of your machine\u2019s settings`;
    return {
        text: t.keepsForeignFiles ? `${u}${n}${l}.` : `${u} after this cloud environment was recreated${n}${l}; CLAUDE.md, preferences and allow rules from your machine are not restored in this environment \u2014 a new cloud session started from that machine will have them.`,
        level: "notice"
    };
}
export function formatHomeAppliedLine(t) {
    let { applied } = t;
    let n = [
        ...applied.claudeMd ? [
            "CLAUDE.md"
        ] : [],
        ...applied.rules > 0 ? [
            `${applied.rules} ${I(applied.rules, "rule")}`
        ] : [],
        ...applied.outputStyles > 0 ? [
            `${applied.outputStyles} ${I(applied.outputStyles, "output style")}`
        ] : [],
        ...applied.permissionRules > 0 ? [
            `${applied.permissionRules} ${I(applied.permissionRules, "permission rule")}`
        ] : [],
        ...applied.settingsKeys.filter((w)=>!(t.outputStyleMissing && w === "outputStyle")).map((w)=>vr[w] ?? w)
    ];
    let l = [
        ...applied.settingsKeptForeign ? [
            applied.permissionRules > 0 ? "this environment keeps its own settings file: only deny and ask rules from yours were added to it" : "this environment keeps its own settings file, and nothing from yours was added to it"
        ] : [],
        ...applied.credentialRestrictionsLeftOut > 0 ? [
            `${applied.credentialRestrictionsLeftOut} deny or ask ${I(applied.credentialRestrictionsLeftOut, "rule is", "rules are")} not in force in this session: ${I(applied.credentialRestrictionsLeftOut, "it looks like it holds", "they look like they hold")} a credential`
        ] : [],
        ...applied.rulesLeftOut > 0 ? [
            `${applied.rulesLeftOut} deny or ask ${I(applied.rulesLeftOut, "rule is", "rules are")} not in force in this session: too long, too many, or not in a plain form`
        ] : [],
        ...applied.credentialFilesLeftOut > 0 ? [
            `${applied.credentialFilesLeftOut} ${I(applied.credentialFilesLeftOut, "file was", "files were")} left out: ${I(applied.credentialFilesLeftOut, "it looks like it holds", "they look like they hold")} a credential`
        ] : [],
        ...t.outputStyleMissing ? [
            Hr
        ] : [],
        ...applied.filesKeptForeign > 0 ? [
            `${applied.filesKeptForeign} of your files ${I(applied.filesKeptForeign, "was", "were")} not written: this environment has ${I(applied.filesKeptForeign, "a file", "files")} of the same name`
        ] : [],
        ...applied.filesNotApplied > 0 ? [
            `${applied.filesNotApplied} ${I(applied.filesNotApplied, "file")} could not be applied`
        ] : [],
        ...applied.settingsNotWritten ? [
            "settings could not be written"
        ] : [],
        ...applied.settingsRefused && !applied.settingsNotWritten ? [
            applied.permissionRules > 0 ? "only the deny and ask rules from your settings file could be applied" : "settings could not be applied"
        ] : [],
        ...applied.removalsFailed > 0 ? [
            `${applied.removalsFailed} earlier ${I(applied.removalsFailed, "file")} could not be removed`
        ] : [],
        ...applied.settingsRemoveFailed ? [
            "the earlier settings could not be removed"
        ] : []
    ];
    let u = [
        ...applied.filesRemoved > 0 ? [
            `${applied.filesRemoved} ${I(applied.filesRemoved, "file")}`
        ] : [],
        ...applied.settingsRemoved ? [
            "the forwarded settings"
        ] : []
    ];
    let c = n.length === 0 && u.length > 0;
    if (n.length === 0 && !c && l.length === 0) {
        return null;
    }
    let b = t.beforeFirstAsk ? "" : t.duringHold ? " (in effect for this reply)" : " (from your next message)";
    let H = l.length > 0 ? ` (${l.join("; ")})` : "";
    let R = applied.filesRemoved + (applied.settingsRemoved ? 2 : 0);
    return {
        text: c ? `${u.join(" and ")} from your machine ${I(R, "was", "were")} removed${H}${b}` : n.length === 0 ? `Settings from your machine were not applied: ${l.join("; ")}` : t.generation === 1 ? t.beforeFirstAsk ? `Started with settings from your machine: ${n.join(", ")}${H}` : `Applied settings from your machine: ${n.join(", ")}${H}${b}` : `Updated settings from your machine: ${n.join(", ")}${H}${b}`,
        level: t.outcome === "partial" || t.outputStyleMissing || applied.credentialRestrictionsLeftOut > 0 || applied.rulesLeftOut > 0 || applied.credentialFilesLeftOut > 0 ? "warning" : l.length === 0 && !t.answersNotRestored ? "debug" : "notice"
    };
}
function Fr() {
    return {
        holdMaxMs: Math.min(a.CLAUDE_CODE_HOME_SEED_HOLD_TIMEOUT_MS ?? yt, yt),
        verdictWaitMaxMs: Math.min(a.CLAUDE_CODE_HOME_SEED_VERDICT_TIMEOUT_MS ?? bt, bt)
    };
}
export function startCloudHomeSeed({ session, record, configHome, foreignFiles, repoRoot, storageV5 }) {
    let b = {
        reloadUserSettings: ()=>Pa.notifyChange("userSettings"),
        clearMemoryFiles: ()=>pk(session),
        clearUserContext: ()=>vx(session, "settings_sync"),
        clearSystemPromptSections,
        clearOutputStyles: ()=>{
            tAn();
            oAn();
        }
    };
    let epochGt1 = (a.CLAUDE_CODE_WORKER_EPOCH ?? 1) > 1;
    return Vt({
        configHome,
        repoRoot,
        settingsPath: join(configHome, ebt),
        foreignFiles
    }, {
        verdicts: {
            subscribe: gYo.subscribe
        },
        announcements: {
            remembered: record.announcements,
            subscribe: record.announced.subscribe
        },
        getRow: DEe,
        putRow: nbt,
        readSidecar,
        sidecarState,
        readStandingSettings,
        execute,
        applyDeps: po(()=>pn({
                storageV5,
                configHome
            })),
        afterApply: (R, E)=>Rr(R, E, b),
        telemetry: Sn(),
        now: ()=>Date.now(),
        setTimer: (R, E)=>{
            let w = setTimeout(R, E);
            return ()=>clearTimeout(w);
        },
        sleep,
        epochGt1,
        outputStyleAvailable: async (R)=>Object.hasOwn(await Yj(se(), storageV5), R),
        enabled: ()=>HBo(epochGt1),
        enabledNow,
        limits: {
            ...Fr(),
            requestAttempts,
            requestRetryDelayMs,
            permissionsFromAnyAnnouncedPack
        }
    });
}
