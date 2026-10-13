import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { lt, B, K, Xe, UZ, Ip, oG, kBe, Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _, $o, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Nk, MJt, ee, _ys, qNn, bys, Sys } from "/$bunfs/root/chunk-499b1h1a.js";
import { Zz, c } from "/$bunfs/root/chunk-etbngzss.js";
import { Bt } from "/$bunfs/root/chunk-1ej05ybf.js";
import { Pb, r0, cP, oH, J$e, bd, k, Pv } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { rn } from "/$bunfs/root/chunk-223dyewd.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Po, EAs, kAs, TAs, AAs, g1, rr, I8, xn, Iv, Gk } from "/$bunfs/root/chunk-k3tkc302.js";
import { Qx, Yuo, eYe } from "/$bunfs/root/chunk-0vgmtssp.js";
import { _sr, bsr, Ssr, wsr, SKt, vsr, Ja, uv } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Int, yVe } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { pE, Jbt, n2t, bae, yer, _er, SGe, QG, Wl, Sae, wae, vae, VX } from "/$bunfs/root/chunk-gs3dthpm.js";
import { Wbt, w4r, Nwn, rer, vte, Fj, fGe, mGe, LGt, oer, jwn, NC, c3o, CK, d3o } from "/$bunfs/root/chunk-sqysdndt.js";
import { pZe } from "/$bunfs/root/chunk-ngnr7vez.js";
import { Fme, Qie, e_t, hK, w_n, v_n, Uh, Bh, y7e, Ey, Mqo, e$, wEe, Nqo, KJn, Bqo, jqo, Wqo, BG, zqo, Gqo, XJn, Vqo, t_t, n_t, A_n, qqo, Kqo, Yqo, Xqo, nGr, rGr, Jqo, Qqo, Zqo, t$, nQn, b7e, r_t, nKo, rKo, oKo, aKo, x_, lKo, R_n, yK, cKo, uKo } from "/$bunfs/root/chunk-8qgm3a5n.js";
import { Bme, jme, Wme } from "/$bunfs/root/chunk-kryjzbmh.js";
import { o7e, yJn, Dyn, hEe, Gyt, Xjt, Jjt } from "/$bunfs/root/chunk-amw6mwbm.js";
import { Vyt, Lyn, Dme, aVo, hzr, TJn, cVo, uVo, rze, kVo, nWt, Gp, CVo, zyn, rWt, XOe, Xie, xVo } from "/$bunfs/root/chunk-qq8ywh7q.js";
import { VVo, JVo } from "/$bunfs/root/chunk-veap1cg5.js";
import { tHe, _5o } from "/$bunfs/root/chunk-w02k0xx9.js";
import { Xb } from "/$bunfs/root/chunk-eej2qpd0.js";
import { kzr, Tzr, j6, qyn, s7e, oze, LVo } from "/$bunfs/root/chunk-meqp16n8.js";
import { sWt, CJn } from "/$bunfs/root/chunk-y3qdm018.js";
import { Pzr } from "/$bunfs/root/chunk-40bs4ws1.js";
import { Hbn } from "/$bunfs/root/chunk-zqknd0d1.js";
import { SK } from "/$bunfs/root/chunk-7we8z6s5.js";
import { Fi } from "/$bunfs/root/chunk-z79q35bb.js";
import { gs } from "/$bunfs/root/chunk-ghreee2m.js";
import { o, E, M, oe, u } from "/$bunfs/root/chunk-smx21d0k.js";
class Cn {
    working = gs({
        working: false
    });
    userPrompt = gs({
        waitingFor: undefined
    });
}
const Se = new lt(()=>new Cn);
function r7e(e, working) {
    Se.of(e).working.setState((r)=>{
        if (r.working === working) {
            return r;
        }
        return {
            working
        };
    });
}
function xyn(e) {
    return Se.of(e).working.getState().working;
}
function rJn(e, n) {
    return Se.of(e).working.subscribe(n);
}
function Pyn(e, waitingFor) {
    Se.of(e).userPrompt.setState((r)=>{
        if (r.waitingFor === waitingFor) {
            return r;
        }
        return {
            waitingFor
        };
    });
}
function Iyn(e) {
    return KWr(e) !== undefined;
}
function KWr(e) {
    return Se.of(e).userPrompt.getState().waitingFor;
}
function nVo(e, n) {
    return Se.of(e).userPrompt.subscribe(n);
}
const Ot = 120;
const Ln = `act:${Ot}`;
const oi = "act:0";
function Wn(e) {
    if (!e.activityOkReported) {
        e.activityOkReported = true;
        g("artifact_activity_emit");
    }
}
function In(e, n, r) {
    n(r);
    Wn(e);
}
function On(e, n, r) {
    n(r);
    Wn(e);
}
function It(e, n) {
    for (let r of e.activitySenders.values()){
        In(e, r, n ? Ln : oi);
    }
    for (let r of e.agentActivitySinks.values()){
        On(e, r, n ? Ot : 0);
    }
}
function Mn(e) {
    return e.activitySenders.size + e.agentActivitySinks.size;
}
function Mt(e) {
    if (Mn(e) === 0) {
        return;
    }
    if (e.activityRefreshTimer !== undefined) {
        return;
    }
    e.activityRefreshTimer = setInterval((n)=>It(n, true), e.activityRefreshMs, e);
    e.activityRefreshTimer.unref?.();
}
function Pn(e) {
    if (Mn(e) === 0 && e.activityRefreshTimer !== undefined) {
        clearInterval(e.activityRefreshTimer);
        e.activityRefreshTimer = undefined;
    }
}
function si(e, n) {
    if (n) {
        if (e.activityClearTimer !== undefined) {
            clearTimeout(e.activityClearTimer);
            e.activityClearTimer = undefined;
            return;
        }
        e.activityOnsetTimer ??= setTimeout((r)=>{
            r.activityOnsetTimer = undefined;
            It(r, true);
            Mt(r);
        }, e.activityEdgeDebounceMs, e);
        e.activityOnsetTimer.unref?.();
    } else {
        if (e.activityOnsetTimer !== undefined) {
            clearTimeout(e.activityOnsetTimer);
            e.activityOnsetTimer = undefined;
            return;
        }
        e.activityClearTimer ??= setTimeout((r)=>{
            r.activityClearTimer = undefined;
            if (r.activityRefreshTimer !== undefined) {
                clearInterval(r.activityRefreshTimer);
                r.activityRefreshTimer = undefined;
            }
            It(r, false);
        }, e.activityEdgeDebounceMs, e);
        e.activityClearTimer.unref?.();
    }
}
function Dn() {
    return B();
}
function Fn(e) {
    if (e.activityUnsubscribe !== undefined) {
        return;
    }
    let n = Dn();
    e.activityUnsubscribe = rJn(n, ()=>{
        try {
            si(e, xyn(n));
        } catch (error) {
            c(error);
        }
    });
}
function Vn(e) {
    return xyn(Dn()) && e.activityOnsetTimer === undefined || e.activityClearTimer !== undefined;
}
function Nn(e, slug, r) {
    if (e.disposed) {
        return;
    }
    Fn(e);
    e.activitySenders.set(slug, r);
    zqo(e, slug);
    if (Vn(e)) {
        In(e, r, Ln);
        Mt(e);
    }
}
function Un(e, slug, r) {
    if (e.activitySenders.get(slug) === r) {
        e.activitySenders.delete(slug);
        Gqo(e, slug);
        Pn(e);
    }
}
function Qe(e, n, r) {
    if (e.disposed) {
        return;
    }
    Fn(e);
    e.agentActivitySinks.set(n, r);
    if (Vn(e)) {
        On(e, r, Ot);
        Mt(e);
    }
}
function Ze(e, n, r) {
    if (e.agentActivitySinks.get(n) === r) {
        e.agentActivitySinks.delete(n);
        Pn(e);
    }
}
const et = "frame-sync.v1";
function Pe(e, n) {
    let r = new URL("/api/frame/sync", TAs());
    r.searchParams.set("slug", e);
    if (n?.commentHint === true) {
        r.searchParams.set("comment_hint", "1");
    }
    if (n?.versionNotices === true) {
        r.searchParams.set("vn", Wbt);
    }
    return yJn(r);
}
const Pt = /^(?=.{1,1024}$)[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+){5}$/;
function ve(e) {
    if (!Pt.test(e)) {
        return false;
    }
    let n = e.split(".", 4)[2];
    return n !== undefined && ui(n).role.endsWith("_agent");
}
const ai = 28;
function ui(role) {
    let n = role.length - ai;
    if (n <= 0 || role.slice(n, n + 4) !== "_id_") {
        return {
            role
        };
    }
    let id = role.slice(n + 4);
    if (pZe.test(id)) {
        return {
            role: role.slice(0, n),
            id
        };
    }
    return {
        role: ""
    };
}
function tt(e) {
    let n = e.split(".", 6)[4];
    if (n === undefined || !/^[0-9]{1,12}$/.test(n)) {
        return;
    }
    let r = Number(n);
    if (Number.isSafeInteger(r) && r > 0) {
        return r;
    }
}
const ci = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function me(e) {
    let [n, r] = e.split(".", 3);
    if (n === undefined || r === undefined || r === "") {
        return;
    }
    let accountUuid = Buffer.from(n, "base64url").toString("utf8");
    if (!ci.test(accountUuid) || Buffer.from(accountUuid, "utf8").toString("base64url") !== n) {
        return;
    }
    return {
        accountUuid,
        organizationUuid: r
    };
}
const di = 60000;
const errorCode = "boot_request_error";
const Dt = "TOKEN_REFRESH_DECLINED_REASON_LINEAGE_EXPIRED";
const Hn = "JOIN_DENIED_REASON_DENIED";
const Kn = "JOIN_DENIED_REASON_CAP_INVALID";
const Bn = {
    on: "socket",
    detail: "4503",
    opened: true,
    uptimeMs: 0,
    ageMs: 0
};
const nt = p(()=>u({
        kind: o(),
        slug: o().optional(),
        actor: o().optional(),
        payload: oe().optional()
    }));
const Ft = p(()=>u({
        cap: o(),
        exp: E()
    }));
const De = p(()=>u({
        reason: o()
    }));
function Vt(slug, busyS) {
    return _({
        kind: "activity",
        slug,
        payload: {
            busyS
        }
    });
}
function jn(e) {
    if (a.CLAUDE_CODE_REMOTE) {
        return "remote";
    }
    if (AAs()) {
        return "cp_override";
    }
    if (Jjt(Pe(e)) !== null) {
        return "egress_denied";
    }
    return null;
}
async function qn(e, n) {
    let e_storedCap = e.storedCap;
    if (!e.rebootNeeded && e_storedCap !== undefined && e_storedCap.exp * 1000 - Date.now() > di) {
        let v = await Pv(e.context.storageV5).catch(()=>{});
        if (!n.isCurrent()) {
            return {
                outcome: "stale"
            };
        }
        if (Pb(e.owner, v)) {
            return {
                outcome: "token",
                token: e_storedCap.cap,
                boot: undefined
            };
        }
    }
    let i;
    let l = Date.now();
    try {
        i = await NC({
            slug: e.slug,
            env: Po()
        }, n.feature, e.abort.signal, {
            agentPeer: true,
            ...e.bootedVersion !== undefined && {
                lean: {
                    version: e.bootedVersion,
                    mustCarry: (v)=>"syncToken" in v
                }
            },
            speculative: true,
            credentials: e.context.credentials
        });
    } catch  {
        i = {
            err: "boot threw",
            errorCode
        };
    }
    if (!n.isCurrent()) {
        return {
            outcome: "stale"
        };
    }
    if (i.err !== null) {
        if (Fj(i)) {
            return {
                outcome: "other_org"
            };
        }
        if (vte(i)) {
            return {
                outcome: "not_found"
            };
        }
        return {
            outcome: "boot_failed",
            status: i.status,
            noAnswer: i.errorCode === errorCode,
            elapsedMs: Date.now() - l
        };
    }
    if (i.assetToken === undefined) {
        return {
            outcome: "public_outside_org"
        };
    }
    let syncToken = i.data.syncToken;
    let h = typeof syncToken === "string" && Pt.test(syncToken) ? me(syncToken) : undefined;
    if (e.owner !== undefined && h !== undefined && !Pb(e.owner, h)) {
        return {
            outcome: "owner_changed"
        };
    }
    let b = typeof syncToken === "string" && ve(syncToken) ? h : undefined;
    if (typeof syncToken !== "string" || b === undefined) {
        return {
            outcome: "not_admitted"
        };
    }
    e.owner = b;
    e.rebootNeeded = false;
    e.bootedVersion = i.ver;
    zn(e, li(syncToken));
    return {
        outcome: "token",
        token: syncToken,
        boot: i.data
    };
}
function li(cap) {
    return {
        cap,
        exp: tt(cap) ?? Math.floor((Date.now() + A_n) / 1000)
    };
}
function zn(e, n) {
    let r = Date.now();
    let i = Math.min(r + A_n, Math.max(r + qqo, n.exp * 1000));
    e.storedCap = {
        cap: n.cap,
        exp: Math.floor(i / 1000)
    };
    e.capStrikes = 0;
}
function Yn(e, kind, payload) {
    switch(kind){
        case "ctrl:token_refresh":
            {
                let i = Ft().safeParse(payload);
                if (i.success && ve(i.data.cap) && Pb(e.owner, me(i.data.cap))) {
                    zn(e, {
                        cap: i.data.cap,
                        exp: i.data.exp
                    });
                }
                return true;
            }
        case "ctrl:token_refresh_declined":
            {
                let i = De().safeParse(payload);
                if (i.success && i.data.reason === Dt) {
                    e.rebootNeeded = true;
                    e.storedCap = undefined;
                }
                return true;
            }
        default:
            return false;
    }
}
function fi(e, n, r) {
    if (n()) {
        return;
    }
    if (e.taskId !== undefined) {
        try {
            x_(e.taskId, e.context.taskRegistry, {
                quiet: true
            });
        } catch  {}
    }
    r("error");
}
function rt(e) {
    e.stopped = true;
    e.storedCap = undefined;
    e.abort.abort();
    if (e.reconnectTimer !== undefined) {
        clearTimeout(e.reconnectTimer);
        e.reconnectTimer = undefined;
    }
    e.send = undefined;
    e.state = "closed";
    if (e.taskId !== undefined) {
        let n = e.taskId;
        e.taskId = undefined;
        try {
            x_(n, e.context.taskRegistry, {
                quiet: true
            });
        } catch  {}
    }
}
const pi = 404;
function mi(detail) {
    let n = Number(detail);
    return n === 1008 || n >= 4000 && n <= 4999;
}
function Jn(e, n, timing) {
    switch(n.on){
        case "dial_error":
            if (n.deterministic) {
                return "refused";
            }
            return "dropped";
        case "boot":
            if (CK(n.status)) {
                return "unavailable";
            }
            if (n.noAnswer) {
                if (n.elapsedMs >= timing.stallThresholdMs) {
                    return "unavailable";
                }
                return "dropped";
            }
            return "refused";
        case "socket":
            {
                if (n.detail === n_t) {
                    return "revoked";
                }
                if (n.opened) {
                    if (n.uptimeMs >= timing.stallThresholdMs) {
                        return "dropped";
                    }
                    if (n.detail === t_t && !e.rebootNeeded) {
                        return "unavailable";
                    }
                    if (mi(n.detail)) {
                        return "refused";
                    }
                    return "dropped";
                }
                let i = hEe(n.detail);
                if (i !== null) {
                    if (CK(i.status) || i.cfMitigated || i.status === pi) {
                        return "unavailable";
                    }
                    return "refused";
                }
                if (n.detail === Dyn || n.ageMs >= timing.stallThresholdMs) {
                    return "unavailable";
                }
                return "dropped";
            }
    }
}
function Xn(e, n, timing) {
    let i = Jn(e, n, timing);
    return i === "refused" || i === "revoked";
}
function Qn(e, timing, r) {
    let i = Jn(e, r, timing);
    if (i === "revoked" || i === "refused") {
        e.storedCap = undefined;
    } else if (i === "dropped" && r.on !== "boot" && e.storedCap !== undefined) {
        let s = r.on === "socket" && r.opened && r.uptimeMs >= timing.minUptimeMs;
        e.capStrikes = s ? 0 : e.capStrikes + 1;
        if (e.capStrikes >= Kqo) {
            e.storedCap = undefined;
        }
    }
    if (i === "revoked") {
        return {
            next: "end",
            reason: "revoked"
        };
    }
    if (i === "unavailable") {
        let stallRunStarted = e.stalledSince === undefined;
        if (stallRunStarted) {
            e.stalledSince = Date.now();
            e.stalls = 0;
        }
        let h = Math.min(timing.stallMinMs * 2 ** e.stalls, timing.stallMaxMs / 2);
        let b = Math.min(h * 2, timing.stallMaxMs);
        e.stalls++;
        return {
            next: "redial",
            delayMs: Math.round(h + Math.random() * (b - h)),
            stalled: true,
            stallRunStarted
        };
    }
    e.stalledSince = undefined;
    if (i === "refused") {
        e.refusals++;
        if (e.refusals > timing.maxConsecutiveRefusals) {
            return {
                next: "end",
                reason: "refused"
            };
        }
    }
    if (r.on === "socket" && r.opened) {
        if (r.uptimeMs >= timing.stallThresholdMs) {
            e.refusals = 0;
        }
        if (r.uptimeMs >= timing.minUptimeMs) {
            e.backoff = 0;
        }
    }
    let l = Math.min(timing.capMs, timing.baseMs * 2 ** Math.min(e.backoff, 5));
    e.backoff++;
    return {
        next: "redial",
        delayMs: Math.round(Math.random() * l),
        stalled: false,
        stallRunStarted: false
    };
}
function Nt(e, n, r) {
    if (e.reconnectTimer !== undefined) {
        clearTimeout(e.reconnectTimer);
    }
    e.state = "closed";
    e.reconnectTimer = setTimeout(hi, n, e, r);
    e.reconnectTimer.unref?.();
}
function hi(e, n) {
    e.reconnectTimer = undefined;
    n(e);
}
async function Zn(e, token, r, i) {
    let { slug } = e;
    let { live } = ee();
    let opened = false;
    let b = false;
    let v;
    let S;
    let A = ()=>b || !i();
    let x = Date.now();
    let G = ()=>{
        if (opened && e.openedAt > 0) {
            return Date.now() - e.openedAt;
        }
        return 0;
    };
    let L = (R)=>{
        if (A()) {
            return;
        }
        b = true;
        let uptimeMs = G();
        let ageMs = Date.now() - x;
        if (e.send === v) {
            e.send = undefined;
            e.state = "closed";
            e.openedAt = 0;
        }
        r.onEnded(R, {
            opened,
            uptimeMs,
            ageMs
        });
    };
    try {
        let R = await Xjt({
            ws: {
                url: Pe(slug, {
                    versionNotices: true
                }),
                protocols: [
                    et,
                    token
                ]
            },
            headers: {
                "User-Agent": r0()
            },
            description: r.description,
            timeout_ms: 0,
            persistent: true,
            quietLifecycle: true,
            ambient: true,
            handshakeDeadlineMs: r.handshakeDeadlineMs,
            ...e.taskId !== undefined && {
                reuseTaskId: e.taskId
            },
            transform: (T)=>{
                r.onFrame(T);
                return null;
            },
            keepalive: r.keepalive,
            onSender: (T)=>{
                if (A()) {
                    return;
                }
                v = T;
                e.send = T;
                e.state = "open";
                S = (P)=>T(Vt(slug, P));
                Qe(live, r.activitySinkKey, S);
            },
            onSenderClosed: ()=>{
                if (S !== undefined) {
                    Ze(live, r.activitySinkKey, S);
                }
                if (v !== undefined && e.send === v) {
                    e.send = undefined;
                    if (e.state === "open") {
                        e.state = "closed";
                    }
                }
                if (A()) {
                    return;
                }
                let e_taskId = e.taskId;
                let P = e_taskId === undefined ? undefined : e.context.taskRegistry.all()[e_taskId];
                if (e_taskId !== undefined && P?.status !== "running") {
                    L("task_ended");
                    return;
                }
                setTimeout(fi, 0, e, A, L).unref?.();
            },
            onLifecycle: (T, P)=>{
                if (A()) {
                    return;
                }
                if (T === "open") {
                    opened = true;
                    e.everOpened = true;
                    e.openedAt = Date.now();
                    r.onOpen();
                    return;
                }
                L(P);
            }
        }, e.context);
        e.taskId = R.data.taskId;
        if (!i()) {
            x_(R.data.taskId, e.context.taskRegistry, {
                quiet: true
            });
            return {
                outcome: "stale"
            };
        }
        return {
            outcome: "armed"
        };
    } catch (error) {
        t(`[${r.label}] connect failed slug=${slug}: ${error instanceof Error ? error.name : "error"}`);
        return {
            outcome: "error",
            error
        };
    }
}
const gi = "tengu_slate_lantern_hush";
const bi = [
    600,
    86400
];
const _i = [
    25,
    600
];
const Si = 50;
const vi = p(()=>{
    let e = E().optional().catch(undefined);
    return u({
        idleAfterS: e,
        idleKeepaliveS: e
    });
});
function er(e, [n, r]) {
    return Math.min(Math.max(Math.round(e), n), r);
}
function wi() {
    let e = k(gi, null);
    if (typeof e === "string") {
        e = mt(e, false);
    }
    let n = vi().safeParse(e);
    let r = n.success ? n.data : {};
    let idleAfterMs = r.idleAfterS === undefined || r.idleAfterS <= 0 ? 0 : er(r.idleAfterS, bi) * 1000;
    let idleKeepaliveMs = (r.idleKeepaliveS === undefined ? Si : er(r.idleKeepaliveS, _i)) * 1000;
    return {
        idleAfterMs,
        idleKeepaliveMs
    };
}
function Ai(e, n) {
    if (tHe()) {
        return 0;
    }
    let r = Math.max(_5o(), Ip(), UZ() ?? 0, e.lastArtifactToolCallAt);
    return Math.max(0, n - r);
}
function it(e, keepaliveMs, r = Date.now()) {
    let i = wi();
    if (i.idleAfterMs <= 0) {
        return keepaliveMs;
    }
    if (Ai(e, r) >= i.idleAfterMs) {
        return Math.max(i.idleKeepaliveMs, keepaliveMs);
    }
    return keepaliveMs;
}
const Ut = p(()=>u({
        tag: o(),
        ver: o(),
        replay: M().optional()
    }));
const Gt = "INVALIDATE_TAG_LIVE";
const $t = "INVALIDATE_TAG_SHARED";
const nr = "INVALIDATE_TAG_HEAD";
const ir = p(()=>u({
        commentsEmpty: M(),
        readAtMs: E().int().positive().max(8640000000000000)
    }));
function Ht(keepaliveMs) {
    return keepaliveMs * 3 + 5000;
}
function Ri() {
    return a.CLAUDE_CODE_ARTIFACT_PRESENCE ?? k("tengu_brass_plover", false);
}
function ot(e) {
    if (!Ri()) {
        return "flag_off";
    }
    return jn(e);
}
function Ae() {
    return ee().presence;
}
function Fe(e) {
    return !e.stopped && Ae().conns.get(e.slug) === e;
}
function or(e) {
    let { slug, url } = e;
    try {
        let i = ot(slug);
        if (i !== null) {
            if (i !== "flag_off") {
                t(`[artifactPresence] not arming slug=${slug}: ${i}`);
            }
            return;
        }
        let l = Ae();
        if (l.declined.has(slug)) {
            return;
        }
        let s = Gyt(e.context);
        l.dispose = Li;
        l.accountChanged = Wi;
        l.disposeSlug = xi;
        l.retireSlug = ur;
        let h = l.conns.get(slug);
        if (h !== undefined && !h.stopped) {
            h.url = url;
            if (h.stalledSince !== undefined && h.reconnectTimer !== undefined) {
                Nt(h, Math.round(Math.random() * l.timing.capMs), ar);
            }
            return;
        }
        yi(l, slug, url, s);
    } catch (error) {
        t(`[artifactPresence] arm threw slug=${slug}: ${error instanceof Error ? error.name : "error"}`);
    }
}
function yi(e, slug, url, context) {
    let l = {
        slug,
        url,
        context,
        send: undefined,
        state: "connecting",
        storedCap: undefined,
        capStrikes: 0,
        owner: undefined,
        rebootNeeded: false,
        bootedVersion: undefined,
        backoff: 0,
        refusals: 0,
        stalledSince: undefined,
        stalls: 0,
        openedAt: 0,
        everOpened: false,
        reconnectTimer: undefined,
        taskId: undefined,
        refusedAdmission: false,
        stopped: false,
        abort: new AbortController
    };
    e.conns.set(slug, l);
    oKo(ki);
    sr(l, "initial").catch((s)=>{
        t(`[artifactPresence] connect threw slug=${slug}: ${s instanceof Error ? s.name : "error"}`);
        we(l, {
            on: "dial_error",
            deterministic: false
        });
    });
}
var ki = {
    closeByTaskId: (e)=>Ei(e)
};
function Ei(e) {
    let n = _ys();
    if (n === undefined) {
        return false;
    }
    for (let r of n.conns.values()){
        if (r.taskId !== e) {
            continue;
        }
        r.taskId = undefined;
        n.declined.add(r.slug);
        re(r);
        return true;
    }
    return false;
}
async function sr(e, n) {
    let r = ot(e.slug);
    if (r !== null) {
        t(`[artifactPresence] closing slug=${e.slug}: ${r}`);
        re(e);
        return;
    }
    e.state = "connecting";
    let i = await qn(e, {
        feature: "artifact_presence",
        isCurrent: ()=>Fe(e)
    });
    switch(i.outcome){
        case "stale":
            return;
        case "not_found":
            re(e);
            return;
        case "other_org":
        case "public_outside_org":
            f("artifact_presence", i.outcome);
            re(e);
            return;
        case "boot_failed":
            {
                let l = {
                    on: "boot",
                    status: i.status,
                    noAnswer: i.noAnswer,
                    elapsedMs: i.elapsedMs
                };
                if (n === "initial" && Xn(e, l, Ae().timing)) {
                    t(`[artifactPresence] boot failed for slug=${e.slug}; no presence connection`);
                    re(e);
                } else {
                    we(e, l);
                }
                return;
            }
        case "not_admitted":
            t(`[artifactPresence] no agent token minted for slug=${e.slug}; no presence connection`);
            re(e);
            return;
        case "owner_changed":
            f("artifact_presence", "owner_changed");
            re(e);
            return;
        case "token":
            await Ti(e, i.token);
            return;
    }
}
async function Ti(e, token) {
    let { timing } = Ae();
    let { slug } = e;
    let l = !e.everOpened;
    e.refusedAdmission = false;
    let s = await Zn(e, token, {
        description: `presence on artifact ${e.url}`,
        keepalive: {
            openFrames: [],
            frame: _({
                kind: "ping",
                slug
            }),
            intervalMs: timing.keepaliveMs,
            sendEveryMs: ()=>it(ee().live, timing.keepaliveMs),
            deadlineMs: timing.keepaliveDeadlineMs ?? Ht(timing.keepaliveMs)
        },
        onFrame: (b)=>Ci(e, b),
        onOpen: ()=>{
            if (l) {
                g("artifact_presence", {
                    connected: true
                });
            }
        },
        onEnded: (b, v)=>{
            let e_refusedAdmission = e.refusedAdmission;
            e.refusedAdmission = false;
            if (e_refusedAdmission && b !== n_t) {
                we(e, Bn);
                return;
            }
            if (v.opened) {
                if (b !== t_t && b !== n_t) {
                    f("artifact_presence", `closed_${b ?? "unknown"}`);
                }
            } else {
                let A = hEe(b);
                m("artifact_presence", "connect_failed", A === null ? undefined : {
                    http_status: A.status,
                    cf_mitigated: A.cfMitigated
                });
            }
            we(e, {
                on: "socket",
                detail: b,
                ...v
            });
        },
        handshakeDeadlineMs: timing.handshakeDeadlineMs,
        activitySinkKey: `presence:${slug}`,
        label: "artifactPresence"
    }, ()=>Fe(e));
    if (s.outcome !== "error") {
        return;
    }
    let deterministic = s.error instanceof o7e && !s.error.message.startsWith("could not resolve");
    if (!Fe(e)) {
        return;
    }
    if (l && deterministic) {
        m("artifact_presence", "ws_open_error");
        re(e);
        return;
    }
    f("artifact_presence", "ws_open_error");
    e.state = "closed";
    we(e, {
        on: "dial_error",
        deterministic
    });
}
function we(e, n) {
    if (!Fe(e)) {
        return;
    }
    let r = Qn(e, Ae().timing, n);
    if (r.next === "end") {
        f("artifact_presence", r.reason === "revoked" ? "closed_4403" : "refused_gave_up");
        re(e);
        return;
    }
    if (r.stallRunStarted) {
        let i = n.on === "boot" ? n.status : n.on === "socket" ? hEe(n.detail)?.status : undefined;
        f("artifact_presence", "stall_run_started", {
            boot: n.on === "boot",
            ...i !== undefined && {
                http_status: i
            }
        });
    }
    Nt(e, r.delayMs, ar);
}
function ar(e) {
    if (!Fe(e)) {
        return;
    }
    sr(e, "reconnect").catch((n)=>{
        t(`[artifactPresence] reconnect threw slug=${e.slug}: ${n instanceof Error ? n.name : "error"}`);
        we(e, {
            on: "dial_error",
            deterministic: false
        });
    });
}
function re(e) {
    rt(e);
    let n = Ae();
    if (n.conns.get(e.slug) === e) {
        n.conns.delete(e.slug);
    }
}
function Ci(e, n) {
    if (e.stopped || n.charCodeAt(0) !== 123) {
        return;
    }
    let r;
    try {
        r = $o(n);
    } catch  {
        return;
    }
    let i = nt().safeParse(r);
    if (!i.success) {
        return;
    }
    let { kind, slug, actor, payload } = i.data;
    if (actor !== undefined || slug !== undefined && slug !== e.slug) {
        return;
    }
    if (Yn(e, kind, payload)) {
        return;
    }
    switch(kind){
        case "join_denied":
            {
                let v = De().safeParse(payload).data?.reason;
                if (v === Hn) {
                    m("artifact_presence", "join_denied");
                    re(e);
                    return;
                }
                f("artifact_presence", "join_denied");
                if (v === Kn) {
                    e.storedCap = undefined;
                }
                e.refusedAdmission = true;
                if (e.taskId !== undefined) {
                    try {
                        x_(e.taskId, e.context.taskRegistry, {
                            quiet: true
                        });
                    } catch  {}
                }
                return;
            }
        case "ctrl:comment":
            tr(e.slug)?.comment();
            return;
        case "ctrl:invalidate":
            {
                let v = Ut().safeParse(payload);
                if (v.success && (v.data.tag === Gt || v.data.tag === $t)) {
                    tr(e.slug)?.ver(v.data.ver, "sync");
                }
                return;
            }
        default:
            return;
    }
}
function tr(slug) {
    let n = ee().live.supervisors.get(slug);
    if (n !== undefined && !n.stopped) {
        return n.wake;
    }
}
function xi(e, n) {
    e.declined.delete(n);
    ur(e, n);
}
function ur(e, n) {
    let r = e.conns.get(n);
    if (r !== undefined) {
        re(r);
    }
}
function Li(e) {
    e.declined.clear();
    for (let n of [
        ...e.conns.values()
    ]){
        rt(n);
    }
    e.conns.clear();
}
function Wi(e, n) {
    for (let r of [
        ...e.conns.values()
    ]){
        if (Pb(r.owner, n)) {
            continue;
        }
        rt(r);
        if (e.conns.get(r.slug) === r) {
            e.conns.delete(r.slug);
        }
    }
}
function oJn(e, n) {
    return Kt(e, n) >= 0;
}
function Kt(e, n) {
    return jt(e, n).at(-1) ?? -1;
}
function jt(e, n) {
    let r = n.toLowerCase();
    let i = [];
    for(let l = 0; l < e.length; l++){
        let s = e[l];
        try {
            let h = !cP(s) ? null : s.type === "user" ? lr(s.message?.content) : s.type === "attachment" && s.attachment.type === "queued_command" ? lr(s.attachment.prompt) : null;
            if (h !== null && Ui(h, r)) {
                i.push(l);
            }
        } catch  {}
    }
    return i;
}
const cr = /^https?:\/\//i;
const Ii = /^[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::\d+)?\//i;
const fr = "\\t\\n\\v\\f\\r \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000";
const Oi = new RegExp(`[${fr}]+`);
const Mi = /[\u200b-\u200f\u202a-\u202e\u2060-\u2064\ufeff]/;
const pr = "(<[{'\"`*_~";
const Pi = new RegExp(`^[${pr}]+`);
const Di = /[.,;:!?)\]}'">`*_~\u200b]+$/;
const Vi = new RegExp(`(?<=^|[${fr}])[${pr}]*!?\\[[^\\][\\n]*\\]\\(([^\\s()]+)\\)`, "g");
const Ni = "artifact-files";
function Ui(e, n) {
    for (let r of e.matchAll(Vi)){
        if (dr(r[1], n)) {
            return true;
        }
    }
    return e.split(Oi).some((r)=>dr(r.replace(Pi, ""), n));
}
function dr(e, n) {
    let r = e.replace(Di, "");
    if (Mi.test(r)) {
        return false;
    }
    if (cr.test(r) || Ii.test(r)) {
        let l = cr.test(r) ? r : `https://${r}`;
        return I8(l)?.slug === n;
    }
    let i = r.toLowerCase().split(/[/\\]/);
    if (i.length > 1) {
        return i.some((l, s)=>l === n && i[s - 1] === Ni);
    }
    return i[0] === n || g1(r) === n;
}
function lr(e) {
    if (typeof e === "string") {
        return e;
    }
    if (!Array.isArray(e)) {
        return null;
    }
    let n = [];
    for (let r of e){
        if (typeof r === "object" && r !== null && "type" in r && r.type === "text" && "text" in r && typeof r.text === "string") {
            n.push(r.text);
        }
    }
    if (n.length > 0) {
        return n.join(`
`);
    }
    return null;
}
const Gi = "Could not register a durable wake subscription; publishing and reading still work.";
const $i = {
    invalid_slug: "That address is not an artifact this session can name, so nothing was registered; retrying with the same address will not help.",
    trigger_limit: "This session already holds the maximum number of webhook triggers (10); unwatch an artifact to free one.",
    no_originator: "This session currently has no linked human originator, so it cannot hold wake subscriptions. Common causes: the session was started by a background event, or the connection between the chat platform and the Claude account needs re-linking. After the user addresses that (re-link and/or restart the session) — or if the server-side policy changes — a deliberate watch retry will re-check; automatic retries while the session stays originator-less are answered locally without contacting the server.",
    client_policy: "This environment's network policy disables artifact subscriptions; no request was sent, and retrying will not help while the policy is active.",
    no_auth: "No credential is available for the artifact service, so the subscription could not be registered; retrying will not help until the session has credentials.",
    session_not_found: "The server no longer has an active record of this remote session, so it cannot hold a wake subscription; retrying in this session will not help.",
    unavailable_in_deployment: "Wake subscriptions are not provisioned in this deployment; retrying will not help.",
    no_wake_minter: "No wake-webhook minter is reachable (the session's own MCP mount was not found or did not connect), so the subscription could not be registered.",
    tool_not_offered: "The server does not offer wake subscriptions to this session, so none was registered; retrying will not help while that holds.",
    org_not_enabled: "Wake subscriptions are not enabled for the user's organization, so none was registered; retrying will not help while that holds.",
    relay_not_served: "This cloud session cannot register wake subscriptions, so none was registered; retrying will not help while that holds.",
    subscribe_forbidden: "The artifact service refuses wake subscriptions from this session, for any artifact until the session ends, so retrying will not help. Later publishes in this session are not armed; only an explicit watch re-checks with the service.",
    relay_unavailable: "This cloud session reaches the artifact service only through its session gateway, and the gateway refused to carry the wake subscription (commonly because wake subscriptions are not enabled there for the user's organization), so none was registered and retrying will not help while that holds. Later publishes in this session are not armed; only an explicit watch re-checks with the gateway.",
    session_device_bound: "This cloud session is bound to the desktop it was started from (Cowork or `claude --cloud`), and that device's trusted-device check means activity on the artifact can't wake it, so no wake subscription was registered. Publishing and reading still work; retrying won't help in this session.",
    aborted: "The request was cancelled before the registration finished (the turn was interrupted); nothing is wrong with the artifact or the session.",
    watch_trigger_release_failed: "The request was cancelled before the registration finished, and the webhook trigger minted for it could not be released — it counts against this session until the session ends."
};
const Hi = new Map(Object.entries($i));
function Oyn(e, n) {
    let r = Hi.get(e) ?? Gi;
    if (n === undefined) {
        return r;
    }
    let i = /[.!?]['")\]]*$/.test(n) ? "" : ".";
    return `${r} Server said: "${n}"${i}`;
}
function YWr(e) {
    if (e.status === undefined) {
        return;
    }
    if (e.relayed) {
        if (e.fromGateway) {
            return `HTTP ${e.status} via the session gateway, not attributed to the artifact service`;
        }
        return `HTTP ${e.status} from the artifact service via the session gateway`;
    }
    if (e.gatewayDeclined === undefined) {
        return `HTTP ${e.status} from the artifact service`;
    }
    if (e.gatewayDeclined === 0) {
        return `HTTP ${e.status} direct from the artifact service, after the session gateway did not answer`;
    }
    return `HTTP ${e.status} direct from the artifact service, after the session gateway declined with HTTP ${e.gatewayDeclined}`;
}
const Ki = new Set([
    "no_originator",
    "client_policy",
    "no_auth",
    "session_not_found",
    "unavailable_in_deployment",
    "tool_not_offered",
    "org_not_enabled",
    "relay_not_served",
    "subscribe_forbidden",
    "relay_unavailable",
    "session_device_bound",
    "invalid_slug"
]);
function sJn(e) {
    if (Ki.has(e)) {
        return null;
    }
    return Ssr;
}
function rVo(e) {
    let { armsInFlight } = ee().durable;
    armsInFlight.set(e, (armsInFlight.get(e) ?? 0) + 1);
}
function oVo(e, n) {
    let durable = ee().durable;
    let i = (durable.armsInFlight.get(e) ?? 1) - 1;
    if (i > 0) {
        durable.armsInFlight.set(e, i);
    } else {
        durable.armsInFlight.delete(e);
    }
    if (n?.outcome === "subscribed" || n?.outcome === "already_watching") {
        JWr(e);
        return {
            settled: "registered"
        };
    }
    let l = n === undefined ? "arm_threw" : n.reason;
    if (l === "stop_latched" || durable.stopLatches.isStopped(e)) {
        return {
            settled: "stopped"
        };
    }
    let s = durable.armOutcomes.get(e);
    let h = n?.outcome === "failed" && n.latched && s?.reason === l ? s : undefined;
    let b = (n?.outcome === "failed" ? YWr(n) : undefined) ?? h?.detail;
    let serverMessage = (n?.outcome === "failed" ? n.serverMessage : undefined) ?? h?.serverMessage;
    let S = {
        reason: l,
        ...b !== undefined && {
            detail: b
        },
        ...serverMessage !== undefined && {
            serverMessage
        }
    };
    wsr(durable.armOutcomes, e, {
        ...S,
        at: Date.now()
    }, _sr);
    if (i > 0) {
        return {
            settled: "pending",
            ...S
        };
    }
    return {
        settled: "unregistered",
        ...S
    };
}
function XWr(e) {
    let durable = ee().durable;
    for (let [r, i] of durable.armOutcomes){
        if (i.reason === e) {
            durable.armOutcomes.delete(r);
        }
    }
    for (let r of durable.announcedArmFailures){
        if (r.endsWith(`:${e}`)) {
            durable.announcedArmFailures.delete(r);
        }
    }
}
function JWr(e) {
    let durable = ee().durable;
    durable.armOutcomes.delete(e);
    vsr(durable.announcedArmFailures, e);
}
function hr(slug, reason) {
    return SKt(ee().durable.announcedArmFailures, `${slug}:${reason}`, bsr);
}
function sVo(e) {
    let durable = ee().durable;
    let r = [];
    let i = new Set;
    for (let l of durable.armsInFlight.keys()){
        if (!mr(durable, l, e)) {
            continue;
        }
        r.push({
            slug: l,
            state: "arming"
        });
        i.add(l);
    }
    for (let [l, s] of durable.armOutcomes){
        if (!mr(durable, l, e) || i.has(l)) {
            continue;
        }
        r.push({
            slug: l,
            state: "failed",
            reason: s.reason,
            ...s.detail !== undefined && {
                detail: s.detail
            },
            ...s.serverMessage !== undefined && {
                serverMessage: s.serverMessage
            },
            at: s.at
        });
    }
    return r;
}
function mr(durable, n, r) {
    return (r === undefined || n === r) && !durable.rows.has(n) && !durable.stopLatches.isStopped(n);
}
const Bi = "frame-live.v1";
const queue = {
    enqueuePendingNotification: (e)=>Ja(e)
};
const intervalMs = 25000;
function QWr() {
    ee().live.lastArtifactToolCallAt = Date.now();
}
const zi = 90000;
const zt = "To pause them again, press Ctrl+C at an idle prompt (Stop in Desktop/SDK); to stop them for good, ✕ the watch in the tasks list or use the kill-all-agents gesture.";
const Yi = "If this wasn't intended, kill the task again to stop them for this artifact, or use the kill-all-agents gesture to disarm auto-replies for the whole session.";
function Ji(live, slug, r) {
    let i = live.supervisors.get(slug);
    if (i !== undefined) {
        i.explicit = false;
    }
    for (let l of Object.values(r.all())){
        if (t$(l) && l.status === "running" && l.frameLive?.slug === slug && l.frameLive.explicit) {
            r.update(l.id, (s)=>{
                if (t$(s) && s.frameLive !== undefined) {
                    return {
                        ...s,
                        description: Yt(xn({
                            slug,
                            env: Po()
                        }), false, s.frameLive.armedVia),
                        frameLive: {
                            ...s.frameLive,
                            explicit: false
                        }
                    };
                }
                return s;
            });
        }
    }
}
function Xi(e, n) {
    let live = ee().live;
    let storageV5 = live.supervisors.get(e)?.context.storageV5 ?? Tzr();
    Lyn(storageV5);
    let l;
    if (n.taskStop) {
        ee().durable.stopLatches.confirmStop(e);
        if (!e$(e)) {
            s7e(e, {
                storageV5
            });
            import("/$bunfs/root/chunk-rs1v3j84.js").then((h)=>h.notifyTakenOverSlugStopped(e));
        }
        let { wasWatching } = vr({
            slug: e,
            taskRegistry: n.taskRegistry,
            announce: !n.running,
            killRow: (h)=>{
                if (h.id !== n.taskId) {
                    x_(h.id, n.taskRegistry, {
                        userStop: true
                    });
                }
            }
        });
        l = wasWatching;
    } else {
        if (!Qi(live, e, n)) {
            return false;
        }
        te(live, e);
        l = true;
    }
    if (n.modelOrigin !== true) {
        CJn(e, storageV5);
    }
    return l;
}
function vr(e) {
    let { slug, taskRegistry } = e;
    let live = ee().live;
    let l = live.supervisors.get(slug);
    let wasWatching = l !== undefined && !l.stopped || live.inFlightSubscribes.has(slug);
    if (l?.autoReactWiring !== undefined) {
        lKo(slug);
    }
    let h = Object.values(taskRegistry.all()).filter((b)=>t$(b) && b.status === "running" && b.frameLive?.slug === slug);
    if (e.announce && l !== undefined && !l.stopped && h.length === 0 && (l.taskId !== undefined || l.timer !== undefined)) {
        ut(live, l, "watching this artifact was stopped just now");
    } else {
        te(live, slug);
    }
    for (let b of h){
        wasWatching = true;
        e.killRow(b);
    }
    if (wasWatching && Ey(slug)) {
        R_n(slug);
    }
    hzr(slug);
    return {
        wasWatching
    };
}
function Qi(live, n, r) {
    let i = live.supervisors.get(n);
    if (i === undefined || i.stopped) {
        return false;
    }
    if (r.running) {
        return i.taskId === undefined || i.taskId === r.taskId;
    }
    if (i.taskId === undefined || i.taskId !== r.taskId) {
        return false;
    }
    return i.timer !== undefined || live.inFlightSubscribes.has(n);
}
function te(e, n) {
    let r = e.supervisors.get(n);
    if (r) {
        MJt(r);
        e.supervisors.delete(n);
    }
    Nwn(n);
    qNn(n);
    Ve(n)?.sourceEnded();
}
function Re(e, n, r) {
    if (r) {
        return {
            ...n,
            humanTurnSnapshot: true
        };
    }
    if (e === undefined) {
        return n;
    }
    let { humanTurnSnapshot, ...rest } = n;
    return {
        ...rest,
        context: e.context,
        publishTranscript: e.publishTranscript,
        ...e.humanTurnSnapshot && {
            humanTurnSnapshot: true
        }
    };
}
function gr(e, slug, r) {
    let i = e.supervisors.get(slug)?.autoReactWiring;
    return i?.humanTurnSnapshot === true && (r?.humanTurnSnapshot !== true || i.context !== r.context);
}
function br(e, n) {
    let r = e.supervisors.get(n.slug);
    if (r && !r.stopped) {
        if (n.carriedVer !== undefined) {
            r.carriedVer = n.carriedVer;
        }
        let l = r.armedVia === "mcp_write";
        if (!n.machineArm) {
            r.lastActivityAt = Date.now();
            if (r.timer !== undefined) {
                clearTimeout(r.timer);
                r.timer = undefined;
            }
            r.stalledSince = undefined;
            r.lastStalledAt = undefined;
            r.stallOutAfterMs = undefined;
            if (r.taskId === undefined && !e.inFlightSubscribes.has(n.slug) && Hme(n.context, n.slug).length === 0) {
                r.watchedSince = Date.now();
                r.armedVia = n.armedVia;
                TJn(n.slug);
            } else if (n.armedVia === "publish") {
                r.armedVia = "publish";
            } else if (r.armedVia === "mcp_write") {
                r.armedVia = n.armedVia;
            }
            if (l && r.armedVia !== "mcp_write") {
                BG(e, n.slug);
            }
        }
        r.explicit = r.explicit || n.explicit;
        if (n.autoReactWiring !== undefined) {
            r.autoReactWiring = Re(r.autoReactWiring, n.autoReactWiring, n.humanTurnWiring === true);
        }
        return r;
    }
    let i = {
        slug: n.slug,
        url: n.url,
        getKnownVer: n.getKnownVer,
        ownPublishes: n.ownPublishes,
        context: n.context,
        abort: new AbortController,
        explicit: n.explicit,
        stopped: false,
        watchedSince: Date.now(),
        lastActivityAt: Date.now(),
        armedVia: n.armedVia,
        consecutiveFailures: 0,
        ...n.carriedVer !== undefined && {
            carriedVer: n.carriedVer
        },
        ...n.autoReactWiring !== undefined && {
            autoReactWiring: Re(undefined, n.autoReactWiring, n.humanTurnWiring === true)
        }
    };
    e.supervisors.set(n.slug, i);
    TJn(n.slug, i.watchedSince);
    return i;
}
function Zi(e, n, slug, taskId) {
    if (e.supervisors.get(slug) === n) {
        n.taskId = taskId;
    }
}
function eo(e, n) {
    let { rewatchTiming } = e;
    if (rewatchTiming.idleTtlMs <= 0) {
        return false;
    }
    if (n.explicit || wr(e, n) || Date.now() - n.lastActivityAt < rewatchTiming.idleTtlMs) {
        return false;
    }
    return !(n.autoReactWiring !== undefined && Gp() && (!Uh(n.slug) || Ey(n.slug)));
}
function wr(e, n) {
    return n.slug === e.mostRecentPublishSlug && n.armedVia !== "mcp_write";
}
function Myn(e, n) {
    if (e) {
        return "watch";
    }
    if (n === "watch") {
        return "watch_stopped";
    }
    return n;
}
function iJn(e) {
    return Zqo.find((n)=>n === e) ?? "publish";
}
function zjt(e) {
    switch(e){
        case "publish":
            return {
                task: "auto-armed on publish",
                row: "armed by a publish",
                idle: "automatically when you published this artifact"
            };
        case "attach":
            return {
                task: "attached via /artifacts",
                row: "armed when the user attached it from /artifacts",
                idle: "automatically when you attached this artifact from /artifacts"
            };
        case "watch":
            return {
                task: "watch requested",
                row: "requested by you",
                idle: "when you asked to watch this artifact"
            };
        case "resume":
            return {
                task: "resume requested",
                row: "re-armed when the user asked to resume replies",
                idle: "when you asked to resume its comment auto-replies"
            };
        case "session_resume":
            return {
                task: "re-armed on session resume",
                row: "re-armed when this session was resumed",
                idle: "automatically when this session was resumed"
            };
        case "mcp_write":
            return {
                task: "presence while editing via MCP",
                row: "armed when this session edited the page through an MCP tool",
                idle: "automatically when this session edited this page through an MCP tool"
            };
        case "watch_stopped":
            return {
                task: "watch requested; auto-replies since stopped",
                row: "requested by you; its auto-replies since stopped by the user",
                idle: "when you asked to watch this artifact"
            };
    }
}
function to(e, n) {
    let idle = zjt(n.armedVia).idle;
    let i = n.armedVia === "watch" ? "(your watch request was later stopped; idle auto-armed watches are retired)" : "(idle auto-armed watches are retired)";
    return `it was armed ${idle} and has seen no activity for over ${rn(e.rewatchTiming.idleTtlMs, {
        hideTrailingZeros: true
    })} ${i}`;
}
function no(closeCode, n, rewatchTiming) {
    return closeCode === Dyn || n >= rewatchTiming.stallThresholdMs;
}
function ro(closeCode) {
    let n = hEe(closeCode);
    return n !== null && (CK(n.status) || n.cfMitigated);
}
function io(rewatchTiming) {
    return Math.max(rewatchTiming.stallMaxMs, rewatchTiming.longStallMaxMs) + 2 * oer + rewatchTiming.handshakeDeadlineMs + 60000;
}
function Xt(e, n, r) {
    let { uptimeMs, resumeNeverOpened = false, stalled = false } = r;
    let { rewatchTiming } = e;
    let b = e.supervisors.get(n);
    if (!b || b.stopped) {
        return;
    }
    if (ee().durable.stopLatches.isStopped(n)) {
        f("artifact_live_subscribe", "stop_latched");
        if (resumeNeverOpened) {
            he(e, b, "the resumed live watch could not connect, so the earlier stop stays in place and comment auto-replies were not resumed", "could not connect", {
                advice: "tell the user, and call resume_replies again only if they still want auto-replies resumed"
            });
        } else {
            ut(e, b);
        }
        return;
    }
    if (eo(e, b)) {
        g("artifact_live_subscribe", {
            idle_retired: true
        });
        he(e, b, to(e, b), "idle", {
            advice: Wo,
            passive: true
        });
        return;
    }
    let v = false;
    let S = false;
    if (stalled) {
        let R = Date.now();
        if (b.stalledSince === undefined || b.lastStalledAt === undefined || b.stallOutAfterMs === undefined || R - b.lastStalledAt > io(rewatchTiming)) {
            b.stalledSince = R;
            b.stallOutAfterMs = rewatchTiming.maxStallMs + Math.round(Math.random() * rewatchTiming.stallOutJitterMs);
            let T = r.httpStatus ?? hEe(r.closeCode)?.status;
            f("artifact_live_subscribe", "stall_run_started", {
                boot: r.closeCode === undefined,
                ...T !== undefined && {
                    http_status: T
                }
            });
        } else {
            S = true;
        }
        b.lastStalledAt = R;
        v = R - b.stalledSince >= b.stallOutAfterMs;
    } else {
        b.stalledSince = undefined;
        b.lastStalledAt = undefined;
        b.stallOutAfterMs = undefined;
        if (uptimeMs >= rewatchTiming.minUptimeMs) {
            b.consecutiveFailures = 0;
        } else if (r.reuseRefused !== true) {
            b.consecutiveFailures++;
        }
    }
    if (b.consecutiveFailures > rewatchTiming.maxConsecutiveFailures || v) {
        if (v) {
            f("artifact_live_subscribe", "rewatch_gave_up", {
                stalled: true
            });
        } else {
            f("artifact_live_subscribe", "rewatch_gave_up");
        }
        he(e, b, "the live connection kept failing and reconnecting has stopped", Vr, {
            advice: ct,
            passive: true
        });
        return;
    }
    let leaseMode = wae();
    let longStall = stalled && S && (hEe(r.closeCode)?.cfMitigated === true || !leaseMode || b.lease === undefined || !rGr(b.lease, rewatchTiming, ee().accountEpoch, Date.now() + rewatchTiming.stallMinMs));
    let spread = uptimeMs > 0 && uptimeMs >= rewatchTiming.minUptimeMs && r.closeCode !== undefined && !(r.expired === true && b.transport !== "sync");
    let L = Jqo({
        timing: rewatchTiming,
        consecutiveFailures: b.consecutiveFailures,
        leaseMode,
        stalled,
        longStall,
        spread
    });
    if (leaseMode && spread && r.expired !== true) {
        b.spreadReconnect = true;
    }
    if (b.timer !== undefined) {
        clearTimeout(b.timer);
    }
    b.timer = setTimeout(Ar, L, e, n);
    b.timer.unref?.();
    b.nextRewatchAt = Date.now() + L;
}
function he(e, n, r, i, { advice = "watch it again if you still need that", passive = false } = {}) {
    if (e.supervisors.get(n.slug) === n) {
        te(e, n.slug);
        if (!ee().durable.stopLatches.isStopped(n.slug)) {
            Mr(e, n.slug, "ended", i);
            if (n.autoReactWiring !== undefined) {
                import("/$bunfs/root/chunk-rs1v3j84.js").then((v)=>v.handBackTakenOverSlug(n.slug));
            }
        }
    } else {
        MJt(n);
    }
    let n_resumeAnnounce = n.resumeAnnounce;
    if (n_resumeAnnounce !== undefined) {
        n.resumeAnnounce = undefined;
        n_resumeAnnounce.onGiveUp();
    }
    if (n.armedVia === "mcp_write") {
        return;
    }
    let b = XOe(()=>n.autoReactWiring?.title, n.url);
    Ja({
        value: Fi({
            taskType: Zz,
            summary: Bt(Bqo(b, i)),
            body: `
<event>${Bt(`Watch on ${n.url} ended \u2014 ${r}. This session no longer keeps track of new versions of it; ${advice}.`)}</event>`
        }),
        mode: "task-notification",
        ...passive && {
            passive: true
        },
        priority: "next",
        origin: {
            kind: "task-notification",
            source: Zz,
            slug: n.slug,
            displayName: b,
            watchEnded: true
        },
        agentId: Xe()
    });
}
function ut(e, n, r = "watching this artifact was stopped earlier in this session") {
    n.resumeAnnounce = undefined;
    he(e, n, r, "stopped", {
        advice: "do not watch it again unless the user asks you to"
    });
}
function X(e, slug, r, i, l, { unavailable = false, httpStatus } = {}) {
    Qt(e, slug, r, {
        unavailable,
        httpStatus
    });
    To(e, slug, r, i, l);
    return {
        outcome: "skipped",
        reason: i,
        ...unavailable && {
            unavailable: true
        },
        ...unavailable && httpStatus !== undefined && {
            httpStatus
        }
    };
}
function Qt(e, n, r, { unavailable = false, httpStatus } = {}) {
    if (r) {
        return;
    }
    let s = e.supervisors.get(n);
    if (s !== undefined && !s.stopped && s.timer === undefined) {
        Xt(e, n, {
            uptimeMs: 0,
            stalled: unavailable,
            ...httpStatus !== undefined && {
                httpStatus
            }
        });
    }
}
async function Ar(e, n) {
    let r = e.supervisors.get(n);
    if (!r || r.stopped) {
        return;
    }
    r.timer = undefined;
    if (ee().durable.stopLatches.isStopped(n)) {
        f("artifact_live_subscribe", "stop_latched");
        ut(e, r);
        return;
    }
    if (r.autoReactWiring !== undefined && Uh(n) && !Ey(n)) {
        delete r.autoReactWiring;
    }
    g("artifact_live_subscribe", {
        rewatch_attempt: true
    });
    let i = await pe(e, {
        slug: r.slug,
        url: r.url,
        getKnownVer: r.getKnownVer,
        ownPublishes: r.ownPublishes,
        context: r.context,
        signal: r.abort.signal,
        machineArm: true,
        seedKnownVerFromBoot: true,
        ...r.carriedVer !== undefined && {
            seedSurfacedVer: r.carriedVer
        },
        ...r.autoReactWiring !== undefined && {
            autoReactWiring: r.autoReactWiring
        }
    });
    if (i.outcome === "skipped" && i.reason === "stop_latched") {
        return;
    }
    if (r.stopped || e.supervisors.get(n) !== r) {
        if (i.outcome === "skipped") {
            Qt(e, n, undefined, {
                unavailable: i.unavailable === true,
                httpStatus: i.httpStatus
            });
        }
        return;
    }
    if (i.outcome === "skipped") {
        if (i.reason === "boot_failed" || i.reason === "ws_open_error" || i.reason === "sync_unavailable") {
            r.lastFailure = i.reason;
            Xt(e, n, {
                uptimeMs: 0,
                stalled: i.unavailable === true,
                ...i.httpStatus !== undefined && {
                    httpStatus: i.httpStatus
                }
            });
        } else {
            f("artifact_live_subscribe", `rewatch_stopped_${i.reason}`);
            he(e, r, KOe(i.reason) ?? i.reason, tn[i.reason] ?? Ur, Oo(i.reason));
        }
    }
}
async function oo(e, slug) {
    let r = e.supervisors.get(slug);
    let i = r?.lease;
    if (!wae() || r === undefined || r.stopped || i === undefined || i.probed) {
        return;
    }
    i.probed = true;
    let l;
    try {
        l = await jwn({
            slug,
            env: Po()
        }, r.abort.signal, {
            agentPeer: at(slug),
            syncLive: at(slug),
            watchBoot: true,
            credentials: r.context.credentials
        });
    } catch  {
        return;
    }
    if (e.supervisors.get(slug) !== r || r.stopped) {
        return;
    }
    let s = l.err === null ? l.assetToken === undefined ? "public_outside_org" : undefined : l.status === 404 ? "not_found" : Fj(l) ? "other_org" : undefined;
    if (s !== undefined) {
        f("artifact_live_subscribe", `read_stopped_${s}`);
        he(e, r, KOe(s) ?? s, tn[s] ?? s, {
            advice: YOe(s)
        });
        for (let v of Object.values(r.context.taskRegistry.all())){
            if (t$(v) && v.status === "running" && v.frameLive?.slug === slug) {
                x_(v.id, r.context.taskRegistry, {
                    quiet: true
                });
            }
        }
        return;
    }
    if (l.err === null && rer(l.data) !== undefined) {
        g("artifact_live_subscribe", {
            read_refused_boot_ok: true
        });
        return;
    }
    let h = l.err === null ? "tokenless" : l.status ?? l.errorCode;
    f("artifact_live_subscribe", `read_refused_boot_${h}`);
    if ((h === "tokenless" || typeof h === "number" && h < 500 && h !== 408 && h !== 429) && r.lease === i) {
        delete r.lease;
        delete r.renewable;
    }
}
function Rr(slug) {
    return yJn(new URL(`/edge-api/frame-live/${slug}/ws`, EAs()));
}
const so = 8;
function ao(e) {
    let { slug, url, ownPublishes, getKnownVer, autoReact, onSurfaced } = e;
    let b = e.surfacedVers ?? [];
    function v(R) {
        b.push(R);
        if (b.length > so) {
            b.shift();
        }
    }
    if (e.seedSurfacedVer !== undefined && !b.includes(e.seedSurfacedVer)) {
        v(e.seedSurfacedVer);
    }
    let S = Wme(Bme, jme);
    let A = false;
    let x = false;
    function comment() {
        yr(slug);
        cVo(slug);
        if (autoReact && Gp()) {
            Xie({
                slug,
                url,
                env: autoReact.env,
                tool: autoReact.tool,
                context: autoReact.context,
                ...autoReact.publishTranscript !== undefined && {
                    publishTranscript: autoReact.publishTranscript
                },
                ...autoReact.getWiring !== undefined && {
                    getWiring: autoReact.getWiring
                },
                abort: autoReact.abort,
                notify: autoReact.notify,
                ...autoReact.getTitle !== undefined && {
                    getTitle: autoReact.getTitle
                },
                ...autoReact.onReadRefused !== undefined && {
                    onReadRefused: autoReact.onReadRefused
                }
            });
        }
    }
    function ver(R, T) {
        if (!R || !pE.test(R)) {
            return;
        }
        if (e.presenceOnly?.()) {
            return;
        }
        w4r(slug, R);
        if (b.includes(R)) {
            return;
        }
        let P = T === "sync" && {
            via_sync: true
        };
        if (n2t(ownPublishes, slug, R)) {
            g("artifact_live_subscribe", {
                ...A ? {
                    suppressed_own: true
                } : {
                    suppressed_catch_up: true
                },
                ...P
            });
            A = true;
            return;
        }
        if (R === getKnownVer()) {
            return;
        }
        if (SGe(ownPublishes, slug)) {
            g("artifact_live_subscribe", {
                suppressed_in_flight: true,
                ...P
            });
            return;
        }
        if (!S.tryConsume()) {
            if (!x) {
                x = true;
                f("artifact_live_subscribe", "ver_rate_suppressed", {
                    ...P
                });
            }
            return;
        }
        x = false;
        v(R);
        try {
            onSurfaced?.(R);
        } catch  {}
        g("artifact_live_subscribe", {
            surfaced: true,
            passive: Wbt === "passive",
            ...P
        });
    }
    return {
        comment,
        ver
    };
}
function uo(e) {
    return (n)=>{
        if (!n.startsWith("{")) {
            return null;
        }
        let r;
        try {
            r = $o(n);
        } catch  {
            return null;
        }
        if (r.kind === "comment") {
            e.comment();
            return null;
        }
        if (r.kind === "summon") {
            return null;
        }
        if (typeof r.ver === "string") {
            e.ver(r.ver, "live");
        }
        return null;
    };
}
const co = /^\d{1,15}$/;
function Ve(e) {
    return ee().liveDocWatch.headSinks.get(e);
}
function yr(slug) {
    let live = ee().live;
    let r = live.supervisors.get(slug);
    if (r !== undefined && !r.stopped && r.armedVia !== "mcp_write" && !live.inFlightSubscribes.has(slug)) {
        r.lastActivityAt = Date.now();
    }
}
function lo(e, slug, r) {
    return (i)=>{
        if (i.charCodeAt(0) !== 123) {
            return null;
        }
        let l;
        try {
            l = $o(i);
        } catch  {
            return null;
        }
        let s = nt().safeParse(l);
        if (!s.success) {
            return null;
        }
        let { kind, actor, payload } = s.data;
        if (actor !== undefined || s.data.slug !== undefined && s.data.slug !== slug) {
            return null;
        }
        switch(kind){
            case "ctrl:comment":
                e.comment();
                return null;
            case "ctrl:invalidate":
                {
                    let S = Ut().safeParse(payload);
                    if (!S.success) {
                        return null;
                    }
                    if (S.data.tag === Gt || S.data.tag === $t) {
                        e.ver(S.data.ver, "sync");
                    } else if (S.data.tag === nr && co.test(S.data.ver)) {
                        yr(slug);
                        Ve(slug)?.seq(Number(S.data.ver));
                    }
                    return null;
                }
            case "ctrl:token_refresh":
                {
                    let S = Ft().safeParse(payload);
                    if (S.success && ve(S.data.cap)) {
                        r.onTokenRefresh(S.data.cap, S.data.exp);
                    }
                    return null;
                }
            case "ctrl:token_refresh_declined":
                {
                    let S = De().safeParse(payload);
                    if (S.success && S.data.reason === Dt) {
                        r.onExpiryAnnounced();
                    }
                    return null;
                }
            case "ctrl:comment_hint":
                {
                    let S = ir().safeParse(payload);
                    if (S.success) {
                        r.onCommentHint(S.data.commentsEmpty, S.data.readAtMs);
                    }
                    return null;
                }
            default:
                return null;
        }
    };
}
function kr(e, slug, r, i, l, s) {
    if (!s(e, r)) {
        return "dead";
    }
    if (i && (Uh(slug) ? l && (e.autoReactArmed !== true || !Ey(slug) || wEe(slug)) : e.autoReactArmed !== true)) {
        return "replace";
    }
    return "keep";
}
function fo(e, n) {
    return r_t(e.id) && b7e(e, n);
}
function po(context, slug, r, humanTurnWiring) {
    let l = Date.now();
    let s = null;
    for (let h of Object.values(context.taskRegistry.all())){
        if (!t$(h) || h.status !== "running" || h.frameLive?.slug !== slug) {
            continue;
        }
        let b = kr(h, slug, l, r, humanTurnWiring, b7e);
        if (b !== "dead") {
            if (b === "replace") {
                x_(h.id, context.taskRegistry, {
                    quiet: true
                });
                continue;
            }
            s = h.id;
            continue;
        }
        x_(h.id, context.taskRegistry, {
            quiet: true,
            connectionLost: true
        });
    }
    return s;
}
function Er(e, n) {
    return Object.values(e.all()).some((r)=>t$(r) && r.status === "running" && r.frameLive?.slug === n);
}
function mo(e) {
    return nQn(e, Gp, {
        includeStopLatched: true
    });
}
function Gjt(e) {
    return nQn(e, Gp);
}
function Mme(e, n) {
    Lyn(n?.storageV5);
    Qie();
    e_t();
    let live = ee().live;
    let i = n?.durable !== false;
    let l = 0;
    let s = new Set;
    for (let h of Object.values(e.all())){
        if (mo(h)) {
            let b = h.autoReactSlug !== undefined && Uh(h.autoReactSlug) && (!Ey(h.autoReactSlug) || e$(h.autoReactSlug));
            if (i) {
                x_(h.id, e, {
                    quiet: true,
                    userStop: true
                });
                if (h.autoReactSlug !== undefined) {
                    rWt(h.autoReactSlug);
                    s.add(h.autoReactSlug);
                }
            } else if (h.autoReactSlug !== undefined) {
                s.add(h.autoReactSlug);
            }
            if (!b && !(h.autoReactSlug !== undefined && !i && Uh(h.autoReactSlug))) {
                l++;
                if (!i && h.autoReactSlug !== undefined) {
                    y7e(h.autoReactSlug);
                    BG(live, h.autoReactSlug);
                }
            }
        }
    }
    for (let h of live.supervisors.values()){
        if (h.autoReactWiring === undefined) {
            continue;
        }
        if (i) {
            delete h.autoReactWiring;
        }
        if (i && Gp() && (!Uh(h.slug) || s.has(h.slug))) {
            if (Er(e, h.slug) || live.inFlightSubscribes.has(h.slug)) {
                Ji(live, h.slug, e);
            } else {
                te(live, h.slug);
                CJn(h.slug, h.context.storageV5);
            }
        }
        if (!s.has(h.slug) && Gp() && !Uh(h.slug)) {
            s.add(h.slug);
            l++;
            if (i) {
                rWt(h.slug);
                w_n(h.slug);
            } else {
                y7e(h.slug);
            }
        }
    }
    if (i) {
        zyn({
            storageV5: n?.storageV5
        });
    } else if (l > 0) {
        Dme({
            flush: true,
            storageV5: n?.storageV5
        });
    }
    return l;
}
function Zt(e, n, r, i) {
    if (!Ey(n) || wEe(n) || !Gp()) {
        return null;
    }
    let l = Tr(e, n);
    if (l === undefined) {
        return null;
    }
    i?.();
    let { live, wakes } = ee();
    v_n(n);
    wakes.liftedAtScanGeneration.set(n, wakes.scanGeneration);
    BG(live, n);
    let lastWakeArgs = Fme(n).lastWakeArgs;
    if (!r_t(l.id) || lastWakeArgs === null) {
        return "cleared";
    }
    r?.(lastWakeArgs);
    Xie({
        ...lastWakeArgs,
        seed: false,
        confirm: undefined,
        confirmBase: undefined,
        confirmAfter: undefined,
        reentry: undefined,
        idlePass: undefined,
        suppressSummonStatus: undefined
    });
    return "lifted";
}
function Tr(e, n) {
    return Object.values(e.all()).find((r)=>t$(r) && r.status === "running" && r.autoReactArmed === true && r.autoReactSlug === n && b7e(r));
}
function ho(taskRegistry, n) {
    if (n.ownWords) {
        let notice_latch_released = cKo((i)=>CVo(i) || go(taskRegistry, Yuo(i)));
        if (notice_latch_released > 0) {
            g("artifact_live_subscribe", {
                notice_latch_released
            });
        }
    }
    return _o(taskRegistry);
}
function go(taskRegistry, n) {
    if (n === undefined) {
        return false;
    }
    return Object.values(taskRegistry.all()).some((r)=>r.startTime >= n && bo(r));
}
function bo(e) {
    let n = e.status === "running" || e.status === "pending";
    if (e.type === "local_bash" || Int(e)) {
        return n;
    }
    if (!yVe.has(e.type) || e.type === "in_process_teammate") {
        return false;
    }
    let r = e.status === "completed" && "keepaliveReasons" in e && e.keepaliveReasons instanceof Set && [
        ...e.keepaliveReasons
    ].some((l)=>l !== "flag:idle-window");
    let i = "resuming" in e && e.resuming === true;
    return n || r || i;
}
function _o(taskRegistry) {
    let { wakes } = ee();
    wakes.humanTurnAtScanGeneration = wakes.scanGeneration;
    let unpaused_on_turn = 0;
    for (let i of [
        ...wakes.sweptSlugs
    ]){
        if (Zt(taskRegistry, i) !== null) {
            unpaused_on_turn++;
        }
    }
    if (unpaused_on_turn > 0) {
        g("artifact_live_subscribe", {
            unpaused_on_turn
        });
    }
    return unpaused_on_turn;
}
function Vjt() {
    return Gp() && Pzr();
}
function Hme(e, n) {
    let r = [];
    let i;
    let l = ()=>i ??= Gp();
    let s = ee();
    let userDisarmed = s.autoReact.userDisarmed;
    for (let b of Object.values(e.taskRegistry.all())){
        if (!t$(b) || b.status !== "running" || b.frameLive === undefined || n !== undefined && b.frameLive.slug !== n) {
            continue;
        }
        let v = s.live.supervisors.get(b.frameLive.slug);
        r.push({
            slug: b.frameLive.slug,
            taskId: b.id,
            since: b.frameLive.watchedSince,
            explicit: v?.explicit ?? b.frameLive.explicit,
            connected: b7e(b),
            tokenExpiresAt: v?.lease?.expMs ?? b.frameLive.armedAt + (v?.transport === "sync" ? A_n : XJn),
            armedVia: v?.armedVia ?? b.frameLive.armedVia,
            autoReply: b.autoReactArmed !== true ? Bh(b.frameLive.slug) ? userDisarmed ? "disarmed" : l() ? "stopped" : "none" : "none" : userDisarmed ? "disarmed" : !l() ? "none" : b.autoReactSlug !== undefined && Bh(b.autoReactSlug) ? Ey(b.autoReactSlug) ? e$(b.autoReactSlug) ? "yielded" : "paused" : "stopped" : So(b.frameLive.slug)
        });
    }
    return r.sort((b, v)=>b.since - v.since);
}
function So(slug) {
    let n = ee().autoReact.artifacts.get(slug);
    let r = n?.lastProbeDeniedBy ?? null;
    if (r !== null) {
        if (r === "denied_by_auto_mode") {
            return "declined";
        }
        return "denied";
    }
    if (n?.lastReplyDeclinedByAutoMode === true) {
        return "declined";
    }
    return "armed";
}
function aJn(e, n) {
    let { live, autoReact, wakes } = ee();
    let s = [];
    let h;
    let b = ()=>h ??= Gp();
    for (let v of wakes.stoppedSlugs){
        if (n !== undefined && v !== n) {
            continue;
        }
        if (Er(e.taskRegistry, v) || live.inFlightSubscribes.has(v) || !autoReact.userDisarmed && !b()) {
            continue;
        }
        let S = live.supervisors.get(v);
        let A = S !== undefined && !S.stopped ? S : undefined;
        s.push({
            slug: v,
            ...A !== undefined && {
                since: A.watchedSince,
                explicit: A.explicit,
                armedVia: A.armedVia
            },
            stopKind: Ey(v) ? e$(v) ? "yielded" : "interrupt" : "user",
            autoReply: autoReact.userDisarmed ? "disarmed" : "stopped"
        });
    }
    return s.sort((v, S)=>(v.since ?? Number.POSITIVE_INFINITY) - (S.since ?? Number.POSITIVE_INFINITY));
}
function st(e, context, { forPublish = false } = {}) {
    let { supervisors } = e;
    let l = [];
    for (let row of Hme(context)){
        let h = supervisors.get(row.slug);
        let b = Lr(e, row, context);
        if (b === "explicit" || b === "most_recent_publish") {
            continue;
        }
        if (b === "auto_reply") {
            if (!forPublish || kVo(row.slug)) {
                continue;
            }
            l.push({
                row,
                tier: 3
            });
            continue;
        }
        l.push({
            row,
            tier: h === undefined || h.stopped ? 0 : h.armedVia === "mcp_write" ? 1 : 2
        });
    }
    return l.sort((s, h)=>{
        if (s.tier !== h.tier) {
            return s.tier - h.tier;
        }
        let b = supervisors.get(s.row.slug);
        let v = supervisors.get(h.row.slug);
        let S = b && !b.stopped ? b.lastActivityAt : 0;
        let A = v && !v.stopped ? v.lastActivityAt : 0;
        return S - A || s.row.since - h.row.since;
    }).map((s)=>s.row);
}
function Cr(e, n, context, i) {
    let l = e.supervisors.get(n.slug);
    let s = Lr(e, n, context) === "auto_reply";
    x_(n.taskId, context.taskRegistry, {
        quiet: true
    });
    if (s && !e$(n.slug)) {
        oze(n.slug, {
            storageV5: l?.context.storageV5 ?? Tzr()
        });
    }
    if (l !== undefined && !l.stopped) {
        he(e, l, i?.why ?? `this session reached its limit of ${Nk} artifact watches and made room to watch a newer one${s ? "; it was auto-replying to comments, and that stops until its next publish" : ""}`, i?.shortReason ?? "made room for a newer watch", i !== undefined ? {
            advice: ct,
            passive: true
        } : s ? {
            advice: "do not watch it again unless the user asks"
        } : undefined);
    } else {
        te(e, n.slug);
    }
    g("artifact_live_subscribe", {
        evicted_least_active: true,
        ...s && {
            evicted_autoreply: true
        }
    });
}
function xr(e, slug) {
    let r = e.supervisors.get(slug);
    if (r === undefined || r.stopped) {
        return null;
    }
    if (r.explicit) {
        return "explicit";
    }
    if (wr(e, r)) {
        return "most_recent_publish";
    }
    if (r.autoReactWiring !== undefined && Gp() && (!Uh(slug) || Ey(slug))) {
        return "auto_reply";
    }
    return null;
}
function _r(e, slug) {
    return xr(e, slug) !== null;
}
function Lr(e, n, r) {
    let i = e.supervisors.get(n.slug);
    if (i !== undefined && !i.stopped) {
        return xr(e, n.slug);
    }
    let l = r.taskRegistry.all()[n.taskId];
    if (n.explicit) {
        return "explicit";
    }
    if (Gjt(l)) {
        return "auto_reply";
    }
    return null;
}
function vo(e, context) {
    let r = st(e, context);
    if (r.length === 0) {
        return false;
    }
    Cr(e, r[0], context, {
        why: `this session reached its limit of ${Nk} artifact watches and made room for a protected watch to reconnect`,
        shortReason
    });
    return true;
}
function ZWr() {
    let live = ee().live;
    live.handoffGeneration += 1;
    live.bootingWiredArms.clear();
    kBe(sWt(oG()));
    Dme({
        flush: true
    });
    aVo();
    Qie();
    e_t();
    for (let n of [
        ...live.supervisors.keys()
    ]){
        te(live, n);
    }
    live.armOutcomes.clear();
    live.announcedArmFailures.clear();
    uKo();
}
function wo(e) {
    let live = ee().live;
    live.handoffGeneration += 1;
    Qie();
    e_t();
    let r = 0;
    for (let s of [
        ...live.supervisors.values()
    ]){
        if (!s.stopped) {
            r++;
        }
        if (s.autoReactWiring !== undefined) {
            let { slug } = s;
            import("/$bunfs/root/chunk-rs1v3j84.js").then((b)=>b.handBackTakenOverSlug(slug));
        }
        delete s.autoReactWiring;
        te(live, s.slug);
        for (let h of Object.values(s.context.taskRegistry.all())){
            if (!t$(h) || h.status !== "running" || h.frameLive?.slug !== s.slug) {
                continue;
            }
            x_(h.id, s.context.taskRegistry, {
                quiet: true
            });
        }
    }
    live.armOutcomes.clear();
    live.announcedArmFailures.clear();
    if (r === 0) {
        return r;
    }
    let i = `${r} artifact ${r === 1 ? "watch" : "watches"}`;
    let l = e === "signed_out" ? "Those watches were opened as the account that signed out: this session no longer keeps track of new versions of those artifacts or hears comments on them, and their comment auto-replies are off. A publish or watch of yours once someone is signed in opens a fresh watch; do not re-watch just to resume listening unless the user asks." : "Those watches were opened as the previous account: this session no longer keeps track of new versions of those artifacts or hears comments on them, and their comment auto-replies are off. A publish or watch of yours opens a fresh watch as the current account; do not re-watch just to resume listening unless the user asks.";
    Ja({
        value: Fi({
            taskType: Zz,
            summary: Bt(`Stopped watching ${i} (${e === "signed_out" ? "signed out" : "the signed-in account changed"})`),
            body: `
<event>${Bt(l)}</event>`
        }),
        mode: "task-notification",
        passive: true,
        priority: "next",
        origin: {
            kind: "task-notification",
            source: Zz
        },
        agentId: Xe()
    });
    return r;
}
function ezr(e, n, r) {
    let { wasWatching } = Wr(e, n);
    ee().live.nonEditorSlugs.delete(e);
    if (r !== undefined) {
        let l = ee().live.repliesConsent;
        let s = l.outstanding.get(e);
        if (s !== undefined) {
            l.outstanding.delete(e);
            if (s.allowed !== true) {
                l.declined.set(e, {
                    namingMessages: s.namingMessages
                });
            }
        }
        l.approved.delete(e);
    }
    g("artifact_live_subscribe", {
        unwatched: wasWatching
    });
    return {
        wasWatching
    };
}
function tzr(e, n) {
    CJn(e, n.storageV5);
    let { wasWatching } = Wr(e, n);
    if (wasWatching) {
        g("artifact_live_subscribe", {
            unwatched: true,
            artifact_deleted: true
        });
    }
}
function Wr(e, n) {
    let live = ee().live;
    Lyn(n.storageV5);
    live.armOutcomes.delete(e);
    Jt(live, e);
    uVo(e);
    let i = live.supervisors.get(e)?.autoReactWiring !== undefined;
    let { wasWatching } = vr({
        slug: e,
        taskRegistry: n.taskRegistry,
        announce: false,
        killRow: (s)=>{
            let h = s.autoReactArmed === true;
            x_(s.id, n.taskRegistry, h ? {
                quiet: true,
                userStop: true,
                modelOrigin: true
            } : {
                quiet: true
            });
            if (h && s.autoReactSlug !== undefined) {
                rWt(s.autoReactSlug);
            }
        }
    });
    if (i) {
        rWt(e);
    }
    return {
        wasWatching
    };
}
async function nzr(e) {
    let { slug, url, publishContext, getKnownVer, context, tool, commentVerbsInSchema } = e;
    if (!SK(publishContext)) {
        return {
            outcome: "skipped",
            reason: "publish_context"
        };
    }
    let live = ee().live;
    let S = tool !== undefined && commentVerbsInSchema === true && Gp();
    let degraded = !S ? undefined : !J$e(context.messages) ? "unattended_turn" : !oJn(context.messages, slug) || !oH(context.messages) ? "not_named_by_user" : live.repliesConsent.declined.has(slug) ? "declined" : live.nonEditorSlugs.has(slug) ? "not_editor" : e.repliesApproved !== true ? "not_approved" : undefined;
    let x = Ir({
        tool: S && degraded === undefined ? tool : undefined,
        commentVerbsInSchema,
        context
    });
    let pickUpRecentSummons = x.autoReactWiring !== undefined;
    let L = live.supervisors.get(slug)?.autoReactWiring?.title;
    let R = await pe(live, {
        slug,
        url,
        getKnownVer,
        ownPublishes: context.artifactRegistries.ownPublishes,
        ...ye(context),
        ...x,
        pickUpRecentSummons,
        ...x.autoReactWiring !== undefined && {
            autoReactWiring: {
                ...x.autoReactWiring,
                title: L
            },
            editorGatedWiring: true
        }
    });
    if (pickUpRecentSummons && R.outcome === "armed" && R.degraded === undefined && !(Uh(slug) && !Ey(slug)) && Ne()) {
        qyn(slug, {
            title: live.supervisors.get(slug)?.autoReactWiring?.title ?? L,
            storageV5: context.storageV5
        });
    }
    if (degraded !== undefined && R.outcome === "armed") {
        return {
            ...R,
            degraded
        };
    }
    if (degraded !== undefined && R.outcome === "already_watching") {
        return {
            ...R,
            degraded
        };
    }
    return R;
}
function rzr(e) {
    return ee().live.nonEditorSlugs.has(e);
}
function ozr(e, n, r, i) {
    let repliesConsent = ee().live.repliesConsent;
    let s = repliesConsent.outstanding.get(n);
    if (e === undefined) {
        return {
            declined: repliesConsent.declined.has(n) || r !== undefined && s !== undefined && s.toolUseId !== r && s.allowed !== true,
            approved: false
        };
    }
    if (r !== undefined && s !== undefined && s.toolUseId !== r) {
        repliesConsent.outstanding.delete(n);
        if (s.allowed !== true) {
            repliesConsent.declined.set(n, {
                namingMessages: s.namingMessages
            });
        }
    }
    let h = repliesConsent.declined.get(n);
    let b = Ao(i, n);
    if (h !== undefined && b !== null && !h.namingMessages.has(b)) {
        repliesConsent.declined.delete(n);
    }
    return {
        declined: repliesConsent.declined.has(n),
        approved: repliesConsent.approved.has(n)
    };
}
function Ao(e, n) {
    let r = Kt(e, n);
    if (r >= 0) {
        return e[r]?.uuid ?? null;
    }
    return null;
}
function lJn(e, n, toolUseId, i, l = false) {
    if (e === undefined) {
        return;
    }
    ee().live.repliesConsent.outstanding.set(n, {
        toolUseId,
        ...l && {
            allowed: true
        },
        namingMessages: new Set(jt(i, n).flatMap((s)=>{
            if (i[s]?.uuid !== undefined) {
                return [
                    i[s].uuid
                ];
            }
            return [];
        }))
    });
}
function szr(e, n) {
    if (e === undefined || n === undefined) {
        return;
    }
    let { outstanding } = ee().live.repliesConsent;
    for (let [i, l] of outstanding){
        if (l.toolUseId === n) {
            outstanding.delete(i);
            return {
                slug: i
            };
        }
    }
}
function izr(e, n, r, i) {
    let repliesConsent = ee().live.repliesConsent;
    if (e === undefined) {
        return false;
    }
    let s = n?.slug === r;
    if (s && i) {
        repliesConsent.approved.add(r);
        repliesConsent.declined.delete(r);
    }
    return s || repliesConsent.approved.has(r);
}
function qjt(e) {
    return ee().live.repliesConsent.declined.has(e);
}
function azr(e) {
    let { declined, outstanding } = ee().live.repliesConsent;
    let i = outstanding.get(e);
    return declined.has(e) || i !== undefined && i.allowed !== true;
}
function Ro(e, n) {
    let r = e.mcpWriteSlugs.get(n);
    if (r === undefined) {
        r = {
            arming: false
        };
        e.mcpWriteSlugs.set(n, r);
    }
    return r;
}
const yo = new Set([
    "not_found",
    "no_subscription_token",
    "publish_context",
    "invalid_slug",
    "remote"
]);
const ko = 5000;
function Sr(ownPublishes, n) {
    yer(ownPublishes, n);
    setTimeout((r, i)=>_er(r, i), ko, ownPublishes, n).unref?.();
}
async function Ejs(e, n, r) {
    try {
        if (!rr.test(e)) {
            return;
        }
        let i = ee();
        let l = i.live;
        if (l.disposed) {
            return;
        }
        let s = l.supervisors.get(e);
        let ownPublishes = n.artifactRegistries.ownPublishes;
        if (s !== undefined && !s.stopped) {
            Sr(ownPublishes, e);
            if (l.inFlightSubscribes.has(e)) {
                return;
            }
            s.lastActivityAt = Date.now();
            if (s.timer !== undefined && s.consecutiveFailures === 0 && s.stalledSince === undefined) {
                clearTimeout(s.timer);
                s.timer = undefined;
                s.nextRewatchAt = undefined;
                Ar(l, e);
            }
            return;
        }
        let b = Ro(l, e);
        if (l.inFlightSubscribes.has(e)) {
            if (b.arming) {
                Sr(ownPublishes, e);
            }
            return;
        }
        let { publishContext } = vae({
            agentId: n.agentId,
            agentType: n.agentContext?.agentType,
            isNonInteractiveSession: n.options.isNonInteractiveSession
        });
        if (!SK(publishContext)) {
            return;
        }
        if (b.declinedEpoch === i.accountEpoch) {
            return;
        }
        let S = i.accountEpoch;
        b.arming = true;
        await pe(l, {
            slug: e,
            url: xn({
                slug: e,
                env: Po()
            }),
            getKnownVer: r,
            ownPublishes,
            ...ye(n),
            seedKnownVerFromBoot: true,
            mcpWrite: true
        }).then((A)=>{
            b.arming = false;
            if (A.outcome === "skipped" && yo.has(A.reason)) {
                b.declinedEpoch = S;
            }
        }, (A)=>{
            b.arming = false;
            c(A);
        });
    } catch (error) {
        c(error);
    }
}
async function lzr(e) {
    let { slug, url, publishContext, getKnownVer, context } = e;
    if (ee().autoReact.userDisarmed) {
        return {
            outcome: "refused",
            reason: "session_disarmed"
        };
    }
    if (!SK(publishContext)) {
        return {
            outcome: "skipped",
            reason: "publish_context"
        };
    }
    if (!e.commentVerbsInSchema) {
        return {
            outcome: "skipped",
            reason: "comments_off"
        };
    }
    if (!Uh(slug)) {
        return {
            outcome: "skipped",
            reason: "not_stopped"
        };
    }
    if (!Gp()) {
        return {
            outcome: "skipped",
            reason: "not_enabled"
        };
    }
    let live = ee().live;
    if (context.abortController.signal.aborted) {
        return {
            outcome: "skipped",
            reason: "cancelled"
        };
    }
    let b = Tr(context.taskRegistry, slug)?.id;
    let v = Zt(context.taskRegistry, slug, (S)=>{
        Qx(slug);
        S.notify({
            summary: KJn(XOe(S.getTitle, url)),
            detail: `Auto-replies on artifact ${url} were resumed by a resume_replies request \u2014 they had been paused when the user interrupted the session (Ctrl+C or Stop). ${zt}`
        });
    }, ()=>{
        let S = live.supervisors.get(slug);
        if (S !== undefined && !S.stopped) {
            S.autoReactWiring = Re(S.autoReactWiring, {
                tool: e.tool,
                commentVerbsInSchema: e.commentVerbsInSchema,
                context,
                title: S.autoReactWiring?.title
            }, true);
        }
    });
    if (v !== null && b !== undefined) {
        g("artifact_live_subscribe", {
            resumed_in_place: true
        });
        if (v === "cleared") {
            ee().wakes.pendingResumeDisclosure.add(slug);
        }
        return {
            outcome: "armed",
            taskId: b,
            inPlace: v === "lifted",
            ...v === "cleared" && {
                connecting: true
            }
        };
    }
    return pe(live, {
        slug,
        url,
        getKnownVer,
        ownPublishes: context.artifactRegistries.ownPublishes,
        ...ye(context),
        seedKnownVerFromBoot: true,
        autoReactWiring: {
            tool: e.tool,
            commentVerbsInSchema: e.commentVerbsInSchema,
            context,
            title: live.supervisors.get(slug)?.autoReactWiring?.title
        },
        userResumeWiring: true,
        approvedRelatchGen: e.approvedRelatchGen
    });
}
function cJn(e, n) {
    let { live } = ee();
    if (!live.inFlightSubscribes.has(e)) {
        n();
        return;
    }
    let i = live.armSettleWaiters.get(e) ?? [];
    i.push(n);
    live.armSettleWaiters.set(e, i);
}
function dJn(e) {
    let n = ee().live.supervisors.get(e);
    return n !== undefined && !n.stopped && n.autoReactWiring !== undefined;
}
async function czr({ slug, url, getKnownVer, tool, commentVerbsInSchema, context }) {
    if (tool !== undefined && bd()) {
        kzr().catch(()=>{});
    }
    let b = ee();
    let v = await pe(b.live, {
        slug,
        url,
        getKnownVer,
        ownPublishes: context.artifactRegistries.ownPublishes,
        ...ye(context),
        ...Ir({
            tool,
            commentVerbsInSchema,
            context
        })
    });
    if (tool !== undefined && commentVerbsInSchema === true && v.outcome !== "skipped" && Ne()) {
        qyn(slug, {
            title: b.live.supervisors.get(slug)?.autoReactWiring?.title,
            storageV5: context.storageV5
        });
    }
    return v;
}
function Ir({ tool, commentVerbsInSchema, context }) {
    return {
        seedKnownVerFromBoot: true,
        explicit: true,
        pickUpRecentSummons: true,
        ...tool !== undefined && commentVerbsInSchema === true && {
            autoReactWiring: {
                tool,
                commentVerbsInSchema,
                context
            }
        }
    };
}
async function qOe(e) {
    let { slug, url, version, publishContext, getKnownVer, tool, commentVerbsInSchema, title, context } = e;
    if (tool !== undefined && bd()) {
        kzr().catch(()=>{});
    }
    let ownPublishes = context.artifactRegistries.ownPublishes;
    let live = ee().live;
    if (version !== undefined) {
        Jbt(ownPublishes, slug, version, {
            merged: !bae(ownPublishes, slug, version)
        });
        let T = live.supervisors.get(slug);
        if (T !== undefined && !T.stopped) {
            T.lastActivityAt = Date.now();
        }
        if (SK(publishContext)) {
            live.mostRecentPublishSlug = slug;
        }
    }
    if (!SK(publishContext)) {
        f("artifact_live_subscribe", "publish_context", {
            publish_context: d(publishContext)
        });
        return {
            outcome: "skipped",
            reason: "publish_context"
        };
    }
    let G = tool !== undefined && commentVerbsInSchema === true;
    let L = e.carriedPublishConsent !== true && e.resumedPublishConsent !== true && e.chainPublish !== true && e.adoptedPublish !== true && J$e(context.messages);
    let R = await pe(live, {
        slug,
        url,
        getKnownVer,
        ownPublishes,
        ...ye(context),
        ...e.onOpen !== undefined && e.onGiveUp !== undefined && {
            onOpen: e.onOpen,
            onGiveUp: e.onGiveUp
        },
        ...e.seedKnownVerFromBoot === true && {
            seedKnownVerFromBoot: true
        },
        ...(e.resumedPublishConsent === true || e.carriedPublishConsent === true) && {
            requireEditor: true
        },
        ...e.sessionResume === true && {
            sessionResume: true
        },
        ...L && version !== undefined && {
            freshPublish: true
        },
        ...e.announceArmlessEnd === true && {
            announceArmlessEnd: true
        },
        ...e.resumedPublishConsent === true && G && {
            pickUpRecentSummons: true
        },
        ...G && {
            autoReactWiring: {
                tool,
                commentVerbsInSchema,
                context,
                title,
                ...e.publishTranscript !== undefined && {
                    publishTranscript: e.publishTranscript
                }
            },
            ...L && {
                freshPublishWiring: true
            }
        }
    });
    if ((version !== undefined || e.adoptedPublish === true) && R.outcome !== "skipped") {
        let { autoReact, wakes } = ee();
        let ie = !G ? "bare_watch_comments_off" : autoReact.userDisarmed ? "bare_watch_session_disarmed" : !nWt() ? "bare_watch_autoreact_off" : Uh(slug) && !L && !(Ey(slug) && !wEe(slug) && wakes.humanTurnAtScanGeneration === wakes.scanGeneration) ? "bare_watch_slug_stopped" : undefined;
        if (ie !== undefined) {
            f("artifact_live_subscribe", ie, {
                publish_context: d(publishContext)
            });
        }
    }
    if (G && R.outcome !== "skipped" && !(R.outcome === "already_watching" && (e.resumedPublishConsent === true || e.carriedPublishConsent === true)) && !(R.outcome === "armed" && R.degraded !== undefined) && Ne()) {
        qyn(slug, {
            title: live.supervisors.get(slug)?.autoReactWiring?.title ?? title,
            storageV5: context.storageV5
        });
    }
    return R;
}
function Ne() {
    return !ee().autoReact.userDisarmed && nWt();
}
function Yt(e, n, armedVia) {
    return `live updates for artifact ${e} (${zjt(Myn(n, armedVia)).task})`;
}
function ye(e) {
    return {
        context: Gyt(e),
        signal: e.abortController.signal
    };
}
function Kjt(e, n) {
    return ()=>VX(e(), n);
}
function Or(slug) {
    if (!Sae()) {
        return {
            reason: "flag_off"
        };
    }
    if (a.CLAUDE_CODE_REMOTE) {
        return {
            reason: "remote"
        };
    }
    return Eo(Rr(slug));
}
function at(slug) {
    return Sae() && ot(slug) === null && !Sys(slug);
}
function Eo(e) {
    if (kAs()) {
        return {
            reason: "cp_override"
        };
    }
    let n = Jjt(e);
    if (n !== null) {
        return {
            reason: "egress_denied",
            egressKind: n.kind
        };
    }
    return null;
}
function dzr({ context, slug, wantWiring, canClearLatch }) {
    let s = Date.now();
    for (let h of Object.values(context.taskRegistry.all())){
        if (t$(h) && h.status === "running" && h.frameLive?.slug === slug && kr(h, slug, s, wantWiring, canClearLatch, fo) === "keep") {
            return true;
        }
    }
    return false;
}
function uJn(e) {
    if (ee().durable.stopLatches.isStopped(e.slug)) {
        return "stop_latched";
    }
    if (!SK(e.publishContext)) {
        return "publish_context";
    }
    return Or(e.slug)?.reason ?? null;
}
const zyt = "auto-replies armed";
const pJn = "auto-replies paused by the user's interrupt (Ctrl+C or Stop) — the user's next message resumes them, as does a publish of this artifact the user asks for or an asked-for resume (publishing it without being asked, while handling a notification or a wake-up, leaves them paused); comments sent to Claude meanwhile are answered then; no comment notifications arrive until then (do not republish or resume just to re-enable them)";
const fJn = "auto-replies handed to another session of this conversation (the user reopened the conversation there, or published there) — that session answers the comments now; a publish of this artifact the user asks for here, or resume_replies when the user asks for it, takes them back (do not republish or call resume_replies just to take them back unless the user asks — the user asking is not itself the take-back); no comment notifications arrive here meanwhile";
const mJn = "auto mode did not approve the last comment's auto-reply; the next comment is checked again unless repeated refusals pause the thread";
const gJn = "a permission rule or setting blocked the last comment's auto-reply (no notice); later comments are still checked";
function qt() {
    if (Xb()) {
        return `; a comment on it sent to Claude reaches this session while this artifact's status row says ${zyt}, and plain comments never notify \u2014 read them with ${Wl('action "comments"', ()=>`the ${QG("comments")}`)} when asked`;
    }
    return "";
}
function KOe(e) {
    switch(e){
        case "flag_off":
            return "the live-subscribe feature flag is off in this session's cached config, so this session does not keep track of new versions of this artifact published elsewhere";
        case "publish_context":
            return "only a main-loop session (interactive, SDK, or background) holds the watch, not a subagent, teammate, or print session";
        case "stop_latched":
            return "watching this artifact was stopped earlier in this session; do not retry on your own. If the user asks you to resume watching it, call the watch action (in permission modes that prompt, they confirm it there)";
        case "remote":
            return "remote sessions do not hold the watch";
        case "cp_override":
            return "the artifact control plane is overridden to a local stack, so the live edge is not reachable";
        case "egress_denied":
            return "network egress to the claude.ai edge is denied by policy, so this session does not keep track of new versions of this artifact published elsewhere";
        case "not_found":
            return "no such artifact for this account (it was deleted, or it has not been shared with the user)";
        case "other_org":
            return fGe;
        case "public_outside_org":
            return LGt;
        case "not_editor":
            return "a restored publish decision does not carry for an artifact this account cannot publish to";
        case "no_subscription_token":
            return "the control plane minted no live-channel credential for this artifact";
        case "boot_failed":
            return "the artifact could not be read right now (network or auth); try again later";
        case "watch_cap":
            return `this session already holds its maximum of ${Nk} artifact watches and none could make room (each is a watch you requested, the artifact you most recently published, or one auto-replying to comments: a new publish can displace an idle one, a watch request cannot; or watch slots are still connecting); unwatch one first`;
        case "watch_cap_reconnect":
            return `this session was already holding its maximum of ${Nk} artifact watches when this one tried to reconnect, and none of the other watches could make room`;
        case "invalid_slug":
            return "that is not an artifact this session can name";
        case "cancelled":
            return "the request was cancelled before the connection opened";
        case "ws_open_error":
            return "the live connection could not be opened from this environment";
        case "sync_unavailable":
            return "the live channel is not available to this session right now";
        default:
            return null;
    }
}
function Yjt(e) {
    switch(e){
        case "arming":
            return `Live subscription: arming in the background \u2014 not connected yet, so this is not a watch until \`status\` shows it connected (you are told if it cannot connect, unless this turn is interrupted first). Once connected, this session keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${qt()}.`;
        case "connected":
            return `Live subscription: already connected from earlier in this session \u2014 this session keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${qt()}.`;
        case "publish_adopted":
            return `Live subscription: this agent holds no watch; the session that launched it takes over live updates for this artifact when this agent finishes normally \u2014 that session then keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${qt()}.`;
        case "publish_context":
            return "Live subscription: none — this is a print (-p), cloud, subagent, or teammate session, which does not keep track of new versions of this artifact published elsewhere (only the main conversation of a local interactive, background, or TypeScript/Python Agent SDK session does). Expected; not an error.";
        case "remote_unsupported":
            {
                let n = Xb();
                return `Live subscription: not supported yet from remote sessions \u2014 nothing notifies this session of new versions${n ? " or of comments sent to Claude" : ""}; re-read the artifact${n ? " (and its comments)" : ""} when the user asks.`;
            }
        default:
            {
                let n = KOe(e);
                if (n !== null) {
                    return `Live subscription: skipped \u2014 ${n}.`;
                }
                return `Live subscription: skipped (${Gk(e, 64)}).`;
            }
    }
}
const uzr = "Live subscription: none in this kind of session (see the earlier publish result); not an error.";
async function hJn({ slug, url, getKnownVer, context }) {
    return pe(ee().live, {
        slug,
        url,
        getKnownVer,
        ownPublishes: context.artifactRegistries.ownPublishes,
        ...ye(context),
        seedKnownVerFromBoot: true
    });
}
async function pe(e, n) {
    let { slug, url, getKnownVer, ownPublishes, context, seedKnownVerFromBoot, seedSurfacedVer, explicit = false, signal } = n;
    Vyt();
    let x = e.supervisors.get(slug)?.carriedVer;
    e.endAll ??= wo;
    let G = n.autoReactWiring !== undefined && n.autoReactWiring.commentVerbsInSchema;
    let armedVia = n.userResumeWiring === true ? "resume" : explicit ? "watch" : n.sessionResume === true ? "session_resume" : n.mcpWrite === true ? "mcp_write" : seedKnownVerFromBoot ? "attach" : "publish";
    if (!rr.test(slug)) {
        return {
            outcome: "skipped",
            reason: "invalid_slug"
        };
    }
    e.armOutcomes.delete(slug);
    let stopLatches = ee().durable.stopLatches;
    j6({
        storageV5: context.storageV5
    });
    let T = n.userResumeWiring === true ? n.approvedRelatchGen : undefined;
    let P = ()=>stopLatches.isStopped(slug) && (T === undefined || stopLatches.latchGeneration(slug) !== T);
    if (P()) {
        f("artifact_live_subscribe", "stop_latched");
        return {
            outcome: "skipped",
            reason: "stop_latched"
        };
    }
    let ie = Or(slug);
    if (ie !== null) {
        if (ie.reason === "cp_override") {
            f("artifact_live_subscribe", "cp_override_active");
        } else if (ie.reason === "egress_denied") {
            f("artifact_live_subscribe", `egress_denied_${ie.egressKind === "sandbox-policy" ? "sandbox_policy" : ie.egressKind}`);
        }
        return {
            outcome: "skipped",
            reason: ie.reason
        };
    }
    let url_1 = Rr(slug);
    let syncLive = at(slug);
    let humanTurnWiring = (n.freshPublishWiring === true || n.userResumeWiring === true) && !n.signal.aborted;
    let ft = e.supervisors.get(slug)?.autoReactWiring;
    let ae = po(context, slug, G, humanTurnWiring);
    if (ae !== null || e.inFlightSubscribes.has(slug)) {
        if (ae === null && T !== undefined && stopLatches.isStopped(slug)) {
            f("artifact_live_subscribe", "arm_in_flight");
            return {
                outcome: "skipped",
                reason: "arm_in_flight"
            };
        }
        if (!(armedVia === "resume" && ae === null && !e.supervisors.has(slug))) {
            br(e, {
                slug,
                url,
                getKnownVer,
                ownPublishes,
                context,
                explicit,
                machineArm: n.machineArm,
                armedVia,
                ...n.requireEditor !== true && n.editorGatedWiring !== true && {
                    autoReactWiring: n.autoReactWiring,
                    humanTurnWiring
                }
            });
        }
        if (ae !== null) {
            let C = e.supervisors.get(slug);
            if (C !== undefined) {
                let description = Yt(url, C.explicit, C.armedVia);
                context.taskRegistry.update(ae, (D)=>{
                    if (!t$(D) || D.frameLive === undefined) {
                        return D;
                    }
                    if (D.description === description && D.frameLive.explicit === C.explicit && D.frameLive.armedVia === C.armedVia) {
                        return D;
                    }
                    return {
                        ...D,
                        description,
                        frameLive: {
                            ...D.frameLive,
                            explicit: C.explicit,
                            armedVia: C.armedVia
                        }
                    };
                });
            }
        }
        if (ae !== null && n.freshPublishWiring === true && !n.signal.aborted) {
            Zt(context.taskRegistry, slug);
        }
        if (ae === null && n.autoReactWiring !== undefined && n.autoReactWiring.commentVerbsInSchema && n.requireEditor !== true && n.editorGatedWiring !== true) {
            let C = e.pendingInFlightWiring.get(slug);
            let J = n.freshPublishWiring === true && !n.signal.aborted;
            let D = J || C === undefined ? {
                scanGeneration: ee().wakes.scanGeneration,
                stopGeneration: hK(slug)
            } : {
                scanGeneration: C.scanGeneration,
                stopGeneration: C.stopGeneration
            };
            e.pendingInFlightWiring.set(slug, {
                wiring: Re(C?.wiring, n.autoReactWiring, humanTurnWiring),
                freshPublishWiring: J || C?.freshPublishWiring === true,
                ...D
            });
            e.inFlightWiredIntent.add(slug);
            if (Ne()) {
                LVo(slug, {
                    storageV5: context.storageV5
                });
            }
            if (J && nWt()) {
                e.bootingWiredArms.set(slug, {
                    title: n.autoReactWiring.title,
                    freshPublish: true,
                    ...D
                });
            }
        }
        return {
            outcome: "already_watching",
            ...ae !== null && {
                taskId: ae
            }
        };
    }
    let Y = {
        url,
        announce: n.announceArmlessEnd === true && !n.machineArm,
        handoffGen: e.handoffGeneration,
        getTitle: ()=>e.supervisors.get(slug)?.autoReactWiring?.title ?? n.autoReactWiring?.title
    };
    let nn = Hme(context).length + e.inFlightSubscribes.size;
    if (n.machineArm && Hme(context).length >= Nk) {
        if (!_r(e, slug) || st(e, context).length === 0) {
            f("artifact_live_subscribe", "watch_cap_reconnect");
            return {
                outcome: "skipped",
                reason: "watch_cap_reconnect"
            };
        }
    }
    if (n.mcpWrite && nn >= Nk) {
        f("artifact_live_subscribe", "watch_cap");
        return X(e, slug, n.machineArm, "watch_cap", Y);
    }
    let forPublish = !n.machineArm && n.freshPublish === true;
    if (!n.machineArm && nn >= Nk && st(e, context, {
        forPublish
    }).length === 0) {
        f("artifact_live_subscribe", "watch_cap");
        return X(e, slug, n.machineArm, "watch_cap", Y);
    }
    let scanGeneration = ee().wakes.scanGeneration;
    let stopGeneration = hK(slug);
    let sn = n.machineArm ? e.supervisors.get(slug)?.lastActivityAt : undefined;
    let e_handoffGeneration = e.handoffGeneration;
    nKo(Xi);
    aKo(hzr);
    rKo((C)=>ho(context.taskRegistry, C));
    e.inFlightSubscribes.add(slug);
    e.inFlightGenerations.set(slug, e_handoffGeneration);
    if (n.autoReactWiring !== undefined) {
        e.inFlightWiredIntent.add(slug);
    }
    let Ce;
    let xe = false;
    try {
        if (n.autoReactWiring?.commentVerbsInSchema === true && n.requireEditor !== true && n.machineArm !== true && n.userResumeWiring !== true && nWt()) {
            e.bootingWiredArms.set(slug, {
                title: n.autoReactWiring.title,
                freshPublish: n.freshPublishWiring === true && !n.signal.aborted,
                scanGeneration,
                stopGeneration
            });
        }
        let C = ()=>e.handoffGeneration !== e_handoffGeneration || e.retiredInFlightArms.has(slug);
        let J = wae();
        if (!J) {
            let w = e.supervisors.get(slug);
            if (w !== undefined) {
                delete w.lease;
                delete w.renewable;
            }
        }
        let accountEpoch = ee().accountEpoch;
        let ge = J && n.machineArm === true ? e.supervisors.get(slug)?.lease : undefined;
        let F = ge !== undefined && (ge.transport === "live" || syncLive) && rGr(ge, e.rewatchTiming, accountEpoch) ? ge : undefined;
        if (F !== undefined && F.transport === "sync") {
            let w = await Pv(context.storageV5).catch(()=>{});
            if (!Pb(me(F.token), w)) {
                F = undefined;
            }
            if (signal.aborted || C()) {
                return X(e, slug, n.machineArm, "cancelled", Y);
            }
        }
        let W;
        let pt = false;
        let un = 0;
        if (F !== undefined) {
            W = {
                err: null,
                token: F.token,
                transport: F.transport,
                ver: F.ver,
                editor: undefined,
                tokenExp: undefined,
                renewable: false
            };
        } else {
            let w = J && !syncLive && n.machineArm === true && e.supervisors.get(slug)?.renewable === true;
            try {
                let j;
                if (w) {
                    let be = await d3o(slug, signal, context.credentials);
                    if (be.err === null) {
                        j = be;
                        pt = true;
                    } else {
                        f("artifact_live_subscribe", `renew_miss_${be.status ?? "no_response"}`);
                        let ue = e.supervisors.get(slug);
                        if (ue !== undefined) {
                            delete ue.renewable;
                        }
                        if (signal.aborted || C()) {
                            return X(e, slug, true, "cancelled", Y);
                        }
                    }
                }
                un = Date.now();
                W = j ?? await c3o(slug, signal, context.credentials, {
                    syncLive,
                    ...n.machineArm === true && {
                        lean: e.supervisors.get(slug)?.bootedVersion
                    }
                });
            } catch  {
                return X(e, slug, n.machineArm, signal.aborted || C() ? "cancelled" : "boot_failed", Y);
            }
        }
        let receivedAtMs = Date.now();
        if (C()) {
            return X(e, slug, n.machineArm, "cancelled", Y);
        }
        if (W.err !== null) {
            let w = signal.aborted ? "cancelled" : W.status === 404 ? "not_found" : Fj(W) ? "other_org" : W.publicOutsideOrg === true ? "public_outside_org" : "boot_failed";
            let unavailable = w === "boot_failed" && (W.unavailable === true || W.noAnswer === true && Date.now() - un >= e.rewatchTiming.stallThresholdMs);
            return X(e, slug, n.machineArm, w, Y, {
                unavailable,
                httpStatus: W.status
            });
        }
        let Ge = n.requireEditor === true && !W.editor;
        let se = Ge || n.editorGatedWiring === true && n.autoReactWiring !== undefined && W.editor !== true;
        let cn = Ge ? "restored_consent_not_editor" : "watch_not_editor";
        if (W.editor === true) {
            e.nonEditorSlugs.delete(slug);
        }
        if (se) {
            e.inFlightWiredIntent.delete(slug);
            e.bootingWiredArms.delete(slug);
            if (!Ge && ee().accountEpoch === accountEpoch) {
                e.nonEditorSlugs.add(slug);
            }
        }
        let dn = W.title === undefined ? null : Iv(W.title);
        let autoReactWiring = se || n.autoReactWiring === undefined ? undefined : dn === null ? n.autoReactWiring : {
            ...n.autoReactWiring,
            title: dn
        };
        let onOpen = se ? undefined : n.onOpen;
        let onGiveUp = se ? undefined : n.onGiveUp;
        let transport = W.transport;
        if (transport === "sync" && (!at(slug) || W.token === undefined || !ve(W.token))) {
            f("artifact_live_subscribe", "sync_unavailable");
            return X(e, slug, n.machineArm, "sync_unavailable", Y, {
                unavailable: true
            });
        }
        let Le = W.token;
        if (!Le) {
            f("artifact_live_subscribe", se ? cn : "no_subscription_token");
            return X(e, slug, n.machineArm, Ge ? "not_editor" : "no_subscription_token", Y);
        }
        if (se) {
            f("artifact_live_subscribe", cn);
        }
        let ver = W.ver;
        let Kr = seedKnownVerFromBoot ? ()=>getKnownVer() ?? ver : getKnownVer;
        let O = F ?? (J ? Yqo({
            transport,
            token: Le,
            ver,
            accountEpoch,
            expUnixSeconds: transport === "sync" ? tt(Le) : W.tokenExp,
            receivedAtMs
        }) : undefined);
        if (signal.aborted || C()) {
            return X(e, slug, n.machineArm, "cancelled", Y);
        }
        let He = Hme(context).length + e.inFlightSubscribes.size - 1;
        let gt = e.supervisors.get(slug);
        let Br = n.machineArm === true && sn !== undefined && gt !== undefined && !gt.stopped && gt.lastActivityAt > sn;
        let fn = Hme(context).length + e.pendingRegistrations;
        if (n.machineArm && !Br && He >= Nk) {
            if (fn >= Nk) {
                if (!_r(e, slug) || !vo(e, context)) {
                    f("artifact_live_subscribe", "watch_cap_reconnect");
                    return {
                        outcome: "skipped",
                        reason: "watch_cap_reconnect"
                    };
                }
            }
        } else if (n.mcpWrite && He >= Nk) {
            f("artifact_live_subscribe", "watch_cap");
            return X(e, slug, n.machineArm, "watch_cap", Y);
        } else if (He >= Nk) {
            let w = He - Nk + 1;
            let j = st(e, context, {
                forPublish
            });
            if (j.length < w) {
                if (n.machineArm) {
                    f("artifact_live_subscribe", "watch_cap_reconnect");
                    return {
                        outcome: "skipped",
                        reason: "watch_cap_reconnect"
                    };
                }
                f("artifact_live_subscribe", "watch_cap");
                return X(e, slug, n.machineArm, "watch_cap", Y);
            }
            if (fn >= Nk) {
                Cr(e, j[0], context, n.machineArm ? {
                    why: `this session reached its limit of ${Nk} artifact watches and made room for an already-held watch to reconnect`,
                    shortReason
                } : undefined);
            }
        }
        e.pendingRegistrations++;
        xe = true;
        let q = e.supervisors.get(slug);
        let jr = q !== undefined && !q.stopped && q.explicit;
        let explicit_1 = explicit || jr;
        let _t = q !== undefined && !q.stopped;
        let reuseTaskId = _t ? q.taskId : undefined;
        let qr = q === undefined;
        let zr = explicit && q !== undefined && !q.explicit;
        let mn = !n.machineArm && q !== undefined && q.armedVia === "mcp_write" && armedVia !== "publish" && armedVia !== "mcp_write";
        let hn = mn ? q.autoReactWiring : undefined;
        let gn = autoReactWiring !== undefined && !gr(e, slug, ft);
        let bn = n.userResumeWiring === true && gn && _t && q.autoReactWiring?.humanTurnSnapshot === true;
        let St = e.supervisors.get(slug)?.carriedVer;
        let seedSurfacedVer_1 = St !== undefined && St !== x ? St : seedSurfacedVer;
        let y = br(e, {
            slug,
            url,
            getKnownVer,
            ownPublishes,
            context,
            explicit,
            machineArm: n.machineArm,
            armedVia,
            carriedVer: seedSurfacedVer_1 ?? W.ver,
            ...gn && {
                autoReactWiring
            },
            humanTurnWiring: humanTurnWiring && !bn
        });
        if (F === undefined && y.armedVia !== "mcp_write") {
            w4r(slug, ver);
        }
        if (F === undefined && !pt) {
            y.bootedVersion = ver;
        }
        let Yr = y.autoReactWiring;
        if (O !== undefined && O.accountEpoch === ee().accountEpoch) {
            y.lease = O;
            if (F === undefined && W.renewable) {
                y.renewable = true;
            } else if (F === undefined) {
                delete y.renewable;
            }
        } else {
            delete y.lease;
            delete y.renewable;
        }
        let Jr = y.lastActivityAt;
        if (onOpen !== undefined && onGiveUp !== undefined) {
            y.resumeAnnounce = {
                onOpen,
                onGiveUp,
                wired: autoReactWiring !== undefined
            };
        }
        let wt = armedVia === "resume" && y.armedVia !== "watch" && y.armedVia !== "resume" ? y.armedVia : undefined;
        if (wt !== undefined) {
            y.armedVia = "resume";
        }
        y.transport = transport;
        let ne = false;
        let _n = K();
        let Sn = false;
        let At;
        let Ke;
        let vn = false;
        let We;
        let abort = new AbortController;
        let Q = se ? undefined : e.pendingInFlightWiring.get(slug);
        if (!se) {
            e.pendingInFlightWiring.delete(slug);
        }
        let fe = autoReactWiring ?? Q?.wiring;
        let Qr = Q?.wiring.humanTurnSnapshot === true && (ft?.humanTurnSnapshot !== true || Q.wiring.context !== ft.context);
        if (Q !== undefined && (autoReactWiring === undefined || Qr) && Q.stopGeneration === hK(slug)) {
            let w = e.supervisors.get(slug);
            if (w !== undefined && !w.stopped) {
                w.autoReactWiring = Re(w.autoReactWiring, {
                    ...Q.wiring,
                    title: Q.wiring.title ?? w.autoReactWiring?.title
                }, Q.wiring.humanTurnSnapshot === true);
            }
        }
        let wn = n.freshPublishWiring === true || Q?.freshPublishWiring === true;
        if (Q?.freshPublishWiring === true) {
            scanGeneration = Q.scanGeneration;
            stopGeneration = Q.stopGeneration;
        }
        let Z = n.userResumeWiring === true;
        let Zr = humanTurnWiring || fe?.humanTurnSnapshot === true;
        let getTitle = ()=>e.supervisors.get(slug)?.autoReactWiring?.title ?? fe?.title;
        let autoReact_1 = fe === undefined || !fe.commentVerbsInSchema ? undefined : {
            env: Po(),
            tool: fe.tool,
            context: fe.context,
            ...fe.publishTranscript !== undefined && {
                publishTranscript: fe.publishTranscript
            },
            getWiring: ()=>{
                let w = e.supervisors.get(slug)?.autoReactWiring;
                if (w?.humanTurnSnapshot === true || !Zr) {
                    return w;
                }
            },
            abort,
            getTitle,
            onReadRefused: ()=>{
                oo(e, slug);
            },
            notify: (w)=>{
                if ("coalesce" in w) {
                    Wqo({
                        queue,
                        slug,
                        family: w.coalesce.family,
                        artifactName: w.coalesce.artifactName,
                        threadId: w.coalesce.threadId,
                        detail: w.detail,
                        mergeDetails: "append",
                        ownGesture: w.ownGesture === true
                    });
                    return;
                }
                Ja({
                    value: Fi({
                        taskType: "artifact-auto-react",
                        summary: Bt(w.summary),
                        body: `
${Bt(w.detail)}`
                    }),
                    mode: "task-notification",
                    origin: {
                        kind: "task-notification",
                        source: "artifact-auto-react",
                        slug,
                        displayName: XOe(getTitle, url)
                    },
                    uuid: Hbn(w.handOff, w.ownGesture === true ? slug : undefined),
                    ...w.handOff !== undefined && {
                        artifactCommentTurn: "handoff"
                    },
                    agentId: Xe()
                });
            }
        };
        y.surfacedVers ??= [];
        let An = y.wake;
        let Be = ao({
            slug,
            url,
            ownPublishes,
            presenceOnly: ()=>e.supervisors.get(slug)?.armedVia === "mcp_write",
            getKnownVer: Kr,
            surfacedVers: y.surfacedVers,
            ...seedSurfacedVer_1 !== undefined && {
                seedSurfacedVer: seedSurfacedVer_1
            },
            onSurfaced: (w)=>{
                let j = e.supervisors.get(slug);
                if (j && !j.stopped) {
                    j.carriedVer = w;
                    j.lastActivityAt = Date.now();
                }
            },
            autoReact: autoReact_1
        });
        y.wake = Be;
        let yt = 0;
        let kt;
        let ei = F?.opened === true ? F : undefined;
        try {
            let w = await Xjt({
                ws: transport === "sync" ? {
                    url: Pe(slug, {
                        commentHint: autoReact_1 !== undefined && Gp() && !Uh(slug),
                        versionNotices: true
                    }),
                    protocols: [
                        et,
                        Le
                    ]
                } : {
                    url: url_1,
                    protocols: [
                        Bi,
                        Le
                    ]
                },
                ...transport === "sync" && {
                    headers: {
                        "User-Agent": r0()
                    }
                },
                description: Yt(url, explicit_1, y.armedVia),
                timeout_ms: 0,
                persistent: true,
                quietLifecycle: true,
                ...reuseTaskId !== undefined && {
                    reuseTaskId
                },
                ambient: true,
                handshakeDeadlineMs: e.rewatchTiming.handshakeDeadlineMs,
                autoReactArmed: autoReact_1 !== undefined,
                autoReactSlug: autoReact_1 !== undefined ? slug : undefined,
                frameLive: {
                    slug,
                    explicit: explicit_1,
                    watchedSince: y.watchedSince,
                    armedVia: y.armedVia
                },
                transform: transport === "sync" ? lo(Be, slug, {
                    onTokenRefresh: (U, expUnixSeconds)=>{
                        if (O !== undefined && Pb(me(O.token), me(U))) {
                            Xqo(O, {
                                token: U,
                                expUnixSeconds,
                                receivedAtMs: Date.now()
                            });
                        }
                    },
                    onExpiryAnnounced: ()=>{
                        vn = true;
                    },
                    onCommentHint: (comments_empty, V)=>{
                        let Ie = kt;
                        kt = undefined;
                        let seed_skipped = comments_empty && Ie !== undefined && xVo(slug, Ie, V);
                        g("artifact_live_subscribe", {
                            comment_hint: true,
                            comments_empty,
                            seed_parked: Ie !== undefined,
                            seed_skipped,
                            sync_transport: true
                        });
                    }
                }) : uo(Be),
                keepalive: transport === "sync" ? {
                    openFrames: [],
                    frame: _({
                        kind: "ping",
                        slug
                    }),
                    intervalMs: ee().presence.timing.keepaliveMs,
                    sendEveryMs: ()=>it(e, ee().presence.timing.keepaliveMs),
                    deadlineMs: ee().presence.timing.keepaliveDeadlineMs ?? Ht(ee().presence.timing.keepaliveMs)
                } : {
                    openFrames: [
                        "ping",
                        "hb"
                    ],
                    frame: "ping",
                    intervalMs
                },
                onSender: (U)=>{
                    if (transport === "sync") {
                        Ke = (V)=>U(Vt(slug, V));
                        Qe(e, `watch:${slug}`, Ke);
                        return;
                    }
                    At = U;
                    Nn(e, slug, U);
                },
                onSenderClosed: ()=>{
                    if (Ke !== undefined) {
                        Ze(e, `watch:${slug}`, Ke);
                    }
                    if (At !== undefined) {
                        Un(e, slug, At);
                    }
                },
                onLifecycle: (U, closeCode, Ie)=>{
                    if (U === "open") {
                        ne = true;
                        y.lastFailure = undefined;
                        We = {
                            stalledSince: y.stalledSince,
                            lastStalledAt: y.lastStalledAt,
                            stallOutAfterMs: y.stallOutAfterMs
                        };
                        y.stalledSince = undefined;
                        y.lastStalledAt = undefined;
                        y.stallOutAfterMs = undefined;
                        let Oe = y.spreadReconnect === true;
                        y.spreadReconnect = undefined;
                        yt = Date.now();
                        if (O !== undefined) {
                            O.opened = true;
                        }
                        if (T !== undefined && signal.aborted && stopLatches.isStopped(slug) && y.taskId !== undefined) {
                            x_(y.taskId, context.taskRegistry, {
                                quiet: true
                            });
                            te(e, slug);
                            f("artifact_live_subscribe", "stop_latched");
                            return;
                        }
                        let Me = e.supervisors.get(slug);
                        if (Me !== undefined && !Me.stopped) {
                            if (transport === "sync") {
                                bys(slug);
                                Ve(slug)?.reopened();
                            } else {
                                or({
                                    slug,
                                    url,
                                    context
                                });
                                Ve(slug)?.sourceEnded();
                            }
                        }
                        g("artifact_live_subscribe", {
                            armed: true,
                            ...transport === "sync" && {
                                sync_transport: true
                            },
                            ...explicit_1 && {
                                explicit: true
                            },
                            ...F !== undefined && {
                                token_reused: true,
                                lease_remaining_min: Math.max(0, Math.floor((F.expMs - yt) / 60000))
                            },
                            ...pt && {
                                token_renewed: true
                            }
                        });
                        let kn = autoReact_1 !== undefined && ee().wakes.scanGeneration !== scanGeneration;
                        let ni = hK(slug) !== stopGeneration;
                        let { wakes } = ee();
                        let ri = wakes.liftedAtScanGeneration.get(slug) === wakes.scanGeneration || wakes.humanTurnAtScanGeneration === wakes.scanGeneration;
                        if (kn && !ri && !Uh(slug) && Gp()) {
                            y7e(slug);
                            yK(1, [], {
                                catchUp: false,
                                nameChordGesture: !Ee(),
                                passive: !Ee()
                            });
                            Dme({
                                flush: true
                            });
                        }
                        if (T !== undefined && !signal.aborted) {
                            stopLatches.clearByApprovedRewatch(slug, T);
                        }
                        if (autoReact_1 !== undefined) {
                            Fme(slug).lastWakeArgs = {
                                slug,
                                url,
                                ...autoReact_1
                            };
                        }
                        let En = Z && P();
                        if (Z && autoReact_1 !== undefined && !signal.aborted && !En && Ne()) {
                            let N = e.supervisors.get(slug)?.autoReactWiring;
                            qyn(slug, {
                                title: N?.title,
                                storageV5: N?.context.storageV5
                            });
                        }
                        if (autoReact_1 !== undefined && signal.aborted) ;
                        else if (autoReact_1 !== undefined) {
                            if (!Z && Ey(slug) && !wEe(slug) && wakes.humanTurnAtScanGeneration === wakes.scanGeneration) {
                                v_n(slug);
                                wakes.liftedAtScanGeneration.set(slug, wakes.scanGeneration);
                                BG(e, slug);
                                Xie({
                                    slug,
                                    url,
                                    ...autoReact_1,
                                    seed: false
                                });
                            } else if (Uh(slug) && (kn || ni || En || !(wn || Z))) ;
                            else if (Uh(slug)) {
                                let N = Ey(slug);
                                let de = e$(slug);
                                if (Gp() && (Z || !N || de)) {
                                    Qx(slug);
                                    eYe(slug);
                                    autoReact_1.notify({
                                        summary: (Z ? KJn : Nqo)(XOe(autoReact_1.getTitle, url)),
                                        detail: `Auto-replies on artifact ${url} were ${Z ? "resumed by a resume_replies request" : "re-enabled by this publish"} \u2014 they had been ${de ? "handed to another session of this conversation that resumed it or published there" : N ? "paused when the user interrupted the session (Ctrl+C or Stop) and the watch had since dropped" : "stopped when their live-updates task was killed"}. ${N && !de ? zt : Yi}`
                                    });
                                }
                                if (!N || de) {
                                    rWt(slug);
                                }
                                Mqo(slug);
                                JVo(slug);
                                v_n(slug);
                                BG(e, slug);
                                Xie({
                                    slug,
                                    url,
                                    ...autoReact_1,
                                    seed: true
                                });
                            } else {
                                if (wakes.pendingResumeDisclosure.delete(slug)) {
                                    Qx(slug);
                                    eYe(slug);
                                    autoReact_1.notify({
                                        summary: KJn(XOe(autoReact_1.getTitle, url)),
                                        detail: `Auto-replies on artifact ${url} were resumed by a resume_replies request \u2014 they had been paused when the user interrupted the session (Ctrl+C or Stop); the watch has now connected. ${zt}`
                                    });
                                }
                                Xie({
                                    slug,
                                    url,
                                    ...autoReact_1,
                                    seed: true,
                                    ...n.pickUpRecentSummons === true && n.machineArm !== true && {
                                        pickUpRecentSummons: true
                                    },
                                    ...n.machineArm === true && Oe && wae() && {
                                        deferMs: Qqo(e.rewatchTiming)
                                    }
                                });
                                if (transport === "sync") {
                                    let N = Fme(slug);
                                    kt = {
                                        kickCount: N.kickCount,
                                        cancelGeneration: N.cancelGeneration
                                    };
                                }
                            }
                        }
                        let qe = e.supervisors.get(slug);
                        let Lt = qe?.resumeAnnounce;
                        if (qe !== undefined && Lt !== undefined) {
                            qe.resumeAnnounce = undefined;
                            let { autoReact } = ee();
                            let de = autoReact_1 !== undefined && !Bh(slug) && !autoReact.userDisarmed && autoReact.enabledMemo === true;
                            if (!signal.aborted && !qe.stopped && !stopLatches.isStopped(slug) && (de || !Lt.wired && autoReact_1 === undefined)) {
                                Lt.onOpen();
                            }
                        }
                        if (autoReact_1 !== undefined && (wn || Z || explicit) && !Sn && !signal.aborted && !stopLatches.isStopped(slug) && !Bh(slug) && !ee().autoReact.userDisarmed && ee().autoReact.enabledMemo === true) {
                            Sn = true;
                            let claim = VVo([
                                slug
                            ], Date.now());
                            (async ()=>{
                                let de = await import("/$bunfs/root/chunk-p30zpwzv.js");
                                let ze = await import("/$bunfs/root/chunk-9p73ps73.js");
                                let Ye = await rze({
                                    records: await de.listRegisteredSessionRecords(),
                                    sessionId: _n,
                                    selfPid: process.pid,
                                    isRunning: ze.isProcessRunning,
                                    isSameProcess: ze.provenSameProcessAsync
                                });
                                if (Ye.verdict !== "live") {
                                    claim.end();
                                    return;
                                }
                                let { requestReplyTakeover } = await import("/$bunfs/root/chunk-rs1v3j84.js");
                                let Wt = (await requestReplyTakeover({
                                    holders: [
                                        Ye.holder,
                                        ...Ye.otherHolders
                                    ],
                                    holdersIncomplete: Ye.unproven === true,
                                    conversationId: _n,
                                    slugs: [
                                        slug
                                    ],
                                    reason: "claim",
                                    alreadyReplying: true,
                                    claim
                                })).yielded.has(slug);
                                let Tn = !Wt && claim.lost.has(slug);
                                let Je = XOe(()=>getTitle(), url);
                                Ja({
                                    value: Fi({
                                        taskType: Zz,
                                        summary: Bt(Wt ? `Another session of this conversation handed its replies on ${Je} to this one` : Tn ? `This session handed its replies on ${Je} to another session of this conversation` : `Another session of this conversation is open while replies are armed on ${Je}`),
                                        body: `
<event>${Bt(Wt ? `Another live session of this same conversation was also armed to reply to comments on ${url}; it paused its replies at this session's request, so only this session answers them now. Nothing to do; do not stop a watch on your own.` : Tn ? `Another live session of this same conversation claimed the replies to comments on ${url} a moment after this one; this session paused its own at that session's request, so only that session answers them now. Nothing to do \u2014 a publish the user asks for here takes them back; do not republish or stop a watch on your own.` : `Another live session of this same conversation is running. If it is also replying to comments on ${url}, every comment will get a reply from both sessions until one stops. Tell the user; they can end either session's live-updates task in /tasks. Do not stop a watch on your own.`)}</event>`
                                    }),
                                    mode: "task-notification",
                                    passive: true,
                                    priority: "next",
                                    origin: {
                                        kind: "task-notification",
                                        source: Zz,
                                        slug,
                                        displayName: Je
                                    },
                                    agentId: Xe()
                                });
                            })().catch(()=>{
                                claim.end();
                            });
                        }
                        return;
                    }
                    let _e = ne ? Date.now() - yt : 0;
                    let Et = !ne && ro(closeCode);
                    let expired = transport === "sync" ? closeCode === t_t && (vn || O !== undefined && Date.now() >= O.expMs - zi) : closeCode === Vqo;
                    let je = transport === "sync" && (ne && closeCode === t_t && !expired || !ne && hEe(closeCode)?.status === 404);
                    let stalled = je || !ne && (Et || no(closeCode, Ie, e.rewatchTiming));
                    let xt = ne || stalled ? undefined : ei;
                    let z = e.supervisors.get(slug);
                    if (je && ne && _e < e.rewatchTiming.minUptimeMs && z !== undefined && z.stalledSince === undefined && We?.stalledSince !== undefined) {
                        z.stalledSince = We.stalledSince;
                        z.lastStalledAt = We.lastStalledAt;
                        z.stallOutAfterMs = We.stallOutAfterMs;
                    }
                    if (z !== undefined && transport === "sync" && closeCode === n_t && O !== undefined && z.lease === O) {
                        delete z.lease;
                    }
                    if (O !== undefined && z?.lease === O && (!wae() || !Et && !je && !nGr(O, {
                        expired,
                        refused: xt !== undefined,
                        healthy: ne && _e >= e.rewatchTiming.minUptimeMs
                    }))) {
                        delete z.lease;
                        if (!O.opened) {
                            delete z.renewable;
                        }
                    }
                    if (ne) {
                        f("artifact_live_subscribe", `socket_closed_${closeCode ?? "unknown"}`, {
                            chain_spared: ee().autoReact.artifacts.get(slug)?.scanning === true
                        });
                    } else if (xt !== undefined) {
                        f("artifact_live_subscribe", "reuse_connect_failed");
                    } else {
                        let Oe = hEe(closeCode);
                        let Me = {
                            ...stalled && {
                                stalled: true
                            },
                            ...Et && {
                                shed: true
                            },
                            ...Oe !== null && {
                                http_status: Oe.status,
                                cf_mitigated: Oe.cfMitigated
                            }
                        };
                        if (Object.keys(Me).length > 0) {
                            m("artifact_live_subscribe", "connect_failed", Me);
                        } else {
                            m("artifact_live_subscribe", "connect_failed");
                        }
                    }
                    if (z !== undefined && !z.stopped) {
                        z.lastFailure = _e < e.rewatchTiming.minUptimeMs ? closeCode ?? "unknown" : undefined;
                    }
                    Xt(e, slug, {
                        uptimeMs: je ? 0 : _e,
                        ...closeCode !== undefined && {
                            closeCode
                        },
                        resumeNeverOpened: Z && !ne,
                        reuseRefused: xt !== undefined,
                        stalled,
                        expired
                    });
                }
            }, context);
            Zi(e, y, slug, w.data.taskId);
            if (xe) {
                e.pendingRegistrations--;
                xe = false;
            }
            let j = e.supervisors.get(slug);
            if (j === undefined || j !== y) {
                x_(w.data.taskId, context.taskRegistry, {
                    quiet: true
                });
                Qt(e, slug, n.machineArm);
                return {
                    outcome: "skipped",
                    reason: "cancelled"
                };
            }
            if (C()) {
                x_(w.data.taskId, context.taskRegistry, {
                    quiet: true
                });
                te(e, slug);
                return {
                    outcome: "skipped",
                    reason: "cancelled"
                };
            }
            if (P()) {
                x_(w.data.taskId, context.taskRegistry, {
                    quiet: true
                });
                f("artifact_live_subscribe", "stop_latched");
                e.armOutcomes.delete(slug);
                Jt(e, slug);
                if (_t || y.lastActivityAt !== Jr) {
                    ut(e, y);
                } else {
                    te(e, slug);
                }
                return {
                    outcome: "skipped",
                    reason: "stop_latched"
                };
            }
            let be = Z && signal.aborted;
            if (be && T !== undefined && stopLatches.isStopped(slug)) {
                x_(w.data.taskId, context.taskRegistry, {
                    quiet: true
                });
                te(e, slug);
                return {
                    outcome: "skipped",
                    reason: "cancelled"
                };
            }
            e.armOutcomes.delete(slug);
            Jt(e, slug);
            if (be) {
                return {
                    outcome: "skipped",
                    reason: "cancelled"
                };
            }
            if (Z && (ee().wakes.scanGeneration !== scanGeneration || hK(slug) !== stopGeneration)) {
                return {
                    outcome: "skipped",
                    reason: "stopped_again"
                };
            }
            if (bn && autoReactWiring !== undefined) {
                let U = e.supervisors.get(slug);
                if (U === y && !U.stopped && !gr(e, slug, Yr)) {
                    U.autoReactWiring = Re(U.autoReactWiring, {
                        ...autoReactWiring,
                        title: U.autoReactWiring?.title ?? autoReactWiring.title
                    }, true);
                }
            }
            let ue = se ? undefined : e.pendingInFlightWiring.get(slug);
            let Rn = Uh(slug);
            let ti = Rn || autoReact_1 !== undefined && ee().wakes.scanGeneration !== scanGeneration;
            let yn = ue !== undefined && ue.freshPublishWiring && ue.scanGeneration === ee().wakes.scanGeneration && ue.stopGeneration === hK(slug);
            if (ue === undefined || signal.aborted || !(autoReact_1 === undefined ? !Rn || yn : !Z && ti && yn)) {
                return {
                    outcome: "armed",
                    taskId: w.data.taskId,
                    ...se && {
                        degraded: "not_editor"
                    }
                };
            }
            e.pendingInFlightWiring.delete(slug);
            Ce = ue;
            x_(w.data.taskId, context.taskRegistry, {
                quiet: true
            });
        } catch  {
            let w = e.supervisors.get(slug);
            if (qr && w === y && !(w !== undefined && w.explicit && !explicit)) {
                te(e, slug);
            } else if (zr && w !== undefined && w === q) {
                w.explicit = false;
            }
            if (wt !== undefined && w === y && w.armedVia === "resume") {
                w.armedVia = wt;
            } else if (mn && w === y && w.armedVia === armedVia && !w.explicit) {
                w.armedVia = "mcp_write";
                if (hn === undefined) {
                    delete w.autoReactWiring;
                } else {
                    w.autoReactWiring = hn;
                }
                BG(e, slug);
            }
            if (w !== undefined && w === y && w.wake === Be) {
                if (An === undefined) {
                    delete w.wake;
                } else {
                    w.wake = An;
                }
            }
            if (w !== undefined && onOpen !== undefined) {
                w.resumeAnnounce = undefined;
            }
            if (O !== undefined && w?.lease === O && !nGr(O, {
                expired: false,
                refused: false,
                healthy: false
            })) {
                delete w.lease;
                if (!O.opened) {
                    delete w.renewable;
                }
            }
            m("artifact_live_subscribe", F !== undefined ? "reuse_ws_open_error" : "ws_open_error");
            return X(e, slug, n.machineArm, "ws_open_error", Y);
        }
    } finally{
        e.inFlightSubscribes.delete(slug);
        e.inFlightWiredIntent.delete(slug);
        e.retiredInFlightArms.delete(slug);
        e.inFlightGenerations.delete(slug);
        e.bootingWiredArms.delete(slug);
        let C = e.supervisors.get(slug);
        if (C === undefined || C.stopped) {
            Ve(slug)?.sourceEnded();
        }
        let J = e.armSettleWaiters.get(slug) ?? [];
        e.armSettleWaiters.delete(slug);
        for (let D of J){
            try {
                D();
            } catch (error) {
                c(error);
            }
        }
        e.pendingInFlightWiring.delete(slug);
        if (xe) {
            e.pendingRegistrations--;
            xe = false;
        }
    }
    if (Ce === undefined) {
        throw Error("armLiveSubscription: late-park fall-through lost its park");
    }
    return pe(e, {
        ...n,
        machineArm: undefined,
        userResumeWiring: undefined,
        approvedRelatchGen: undefined,
        sessionResume: undefined,
        pickUpRecentSummons: undefined,
        editorGatedWiring: undefined,
        autoReactWiring: Ce.wiring,
        freshPublishWiring: Ce.freshPublishWiring,
        freshPublish: n.freshPublish === true || Ce.freshPublishWiring
    });
}
function Mr(e, n, outcome, reason) {
    wsr(e.armOutcomes, n, {
        outcome,
        reason,
        at: Date.now()
    }, _sr);
}
function To(e, slug, r, i, l) {
    if (r || e.handoffGeneration !== l.handoffGen || e.retiredInFlightArms.has(slug)) {
        return;
    }
    let s = e.supervisors.get(slug);
    if (s !== undefined && !s.stopped && s.timer !== undefined) {
        if (i !== "cancelled") {
            s.lastFailure = i;
        }
        return;
    }
    if (e.armOutcomes.has(slug)) {
        return;
    }
    let h = ee().durable.stopLatches.isStopped(slug);
    if (!h) {
        Mr(e, slug, "failed", i);
    }
    if (l.announce && i !== "cancelled" && !h) {
        Mo(e, slug, l, i);
    }
}
const not_found = "artifact not found";
const Co = "there is nothing to retry unless the artifact is shared with the user again";
const other_org = "other organization";
const public_outside_org = "public, outside your organization";
const xo = `there is nothing to retry until ${mGe}`;
const Lo = "there is nothing to retry: read it with the read action instead";
var ct = "it will not come back on its own — watch it again only if the user asks or your current task still depends on its republishes";
var Wo = "watch it again when you next work on this artifact";
const Io = "there is nothing to re-watch while live updates are switched off";
function Oo(reason) {
    switch(reason){
        case "not_found":
        case "other_org":
        case "public_outside_org":
            return {
                advice: YOe(reason)
            };
        case "flag_off":
            return {
                advice: Io,
                passive: true
            };
        default:
            return {
                advice: ct,
                passive: true
            };
    }
}
function YOe(e) {
    switch(e){
        case "not_found":
        case not_found:
            return Co;
        case "other_org":
        case other_org:
            return xo;
        case "public_outside_org":
        case public_outside_org:
            return Lo;
        case Vr:
        case no_subscription_token:
        case Ur:
        case shortReason:
            return ct;
        default:
            return;
    }
}
var Vr = "connection lost";
var no_subscription_token = "no live credential";
var Ur = "could not reconnect";
var shortReason = "made room for another watch";
var tn = {
    boot_failed: "could not connect",
    ws_open_error: "could not connect",
    sync_unavailable: "could not connect",
    not_found,
    other_org,
    public_outside_org,
    no_subscription_token,
    watch_cap: "watch limit reached"
};
function Jt(e, n) {
    vsr(e.announcedArmFailures, n);
    Hyn(n);
}
function Hyn(e) {
    uv((n)=>n.origin?.kind === "task-notification" && n.origin.source === Zz && n.origin.slug === e && (n.origin.armFailed === true || n.origin.watchEnded === true));
}
function Mo(e, n, r, i) {
    if (!SKt(e.announcedArmFailures, `${n}:${i}`, bsr)) {
        return;
    }
    let l = KOe(i) ?? i;
    let s = YOe(i) ?? Ssr;
    Gr({
        slug: n,
        artifactName: XOe(r.getTitle, r.url),
        shortReason: tn[i] ?? "not armed",
        event: `The live subscription for ${r.url} did not arm \u2014 ${l}. This session is NOT watching it and does not keep track of new versions of it; ${s}, and do not claim to be watching it meanwhile.`
    });
}
function Gr(e) {
    Ja({
        value: Fi({
            taskType: Zz,
            summary: Bt(jqo(e.artifactName, e.shortReason)),
            body: `
<event>${Bt(e.event)}</event>`
        }),
        mode: "task-notification",
        priority: "next",
        origin: {
            kind: "task-notification",
            source: Zz,
            slug: e.slug,
            displayName: e.artifactName,
            armFailed: true
        },
        agentId: Xe()
    });
}
function pzr(e) {
    let { slug, url, liveDocLoss, settlement } = e;
    if (settlement.settled === "registered") {
        Hyn(slug);
        return;
    }
    if (settlement.settled !== "unregistered" || !hr(slug, settlement.reason)) {
        return;
    }
    let { reason, detail, serverMessage } = settlement;
    let v = liveDocLoss ?? `This session will NOT be woken when ${Xb() ? "it is republished or a comment on it is sent to Claude" : "it is republished"}`;
    let S = sJn(reason);
    Gr({
        slug,
        artifactName: XOe(e.getTitle, url),
        shortReason: "wake subscription not registered",
        event: `The durable wake subscription for ${url} was not registered (${reason}${detail !== undefined ? `: ${detail}` : ""}) \u2014 ${Oyn(reason, serverMessage)} ${v}${S === null ? "" : `; ${S}`} \u2014 do not claim to be subscribed to it meanwhile.`
    });
}
function fzr(e) {
    return e.connected && !r_t(e.taskId);
}
function mzr(e, n) {
    let live = ee().live;
    let i = new Set;
    for (let S of Object.values(e.taskRegistry.all())){
        if (t$(S) && S.status === "running" && S.frameLive !== undefined) {
            i.add(S.frameLive.slug);
        }
    }
    let stopLatches = ee().durable.stopLatches;
    let s = (S)=>(n === undefined || S === n) && !i.has(S) && !stopLatches.isStopped(S);
    let h = new Set(aJn(e, n).map((S)=>S.slug));
    let b = [];
    let v = new Set;
    for (let S of live.inFlightSubscribes){
        if (!s(S) || (live.inFlightGenerations.get(S) ?? live.handoffGeneration) !== live.handoffGeneration || live.retiredInFlightArms.has(S)) {
            continue;
        }
        v.add(S);
        let A = live.supervisors.get(S);
        let x = A !== undefined && !A.stopped ? A : undefined;
        b.push({
            slug: S,
            state: "arming",
            reconnect: x?.taskId !== undefined,
            failures: x?.consecutiveFailures ?? 0,
            ...x?.lastFailure !== undefined && {
                lastFailure: x.lastFailure
            }
        });
    }
    for (let S of live.supervisors.values()){
        if (!s(S.slug) || v.has(S.slug) || S.stopped || S.timer === undefined) {
            continue;
        }
        v.add(S.slug);
        if (h.has(S.slug)) {
            continue;
        }
        b.push({
            slug: S.slug,
            state: "backing_off",
            failures: S.consecutiveFailures,
            maxFailures: live.rewatchTiming.maxConsecutiveFailures,
            nextAt: S.nextRewatchAt ?? Date.now(),
            ...S.lastFailure !== undefined && {
                lastFailure: S.lastFailure
            }
        });
    }
    for (let [S, A] of live.armOutcomes){
        if (!s(S) || v.has(S)) {
            continue;
        }
        b.push({
            slug: S,
            state: A.outcome,
            reason: A.reason,
            at: A.at
        });
    }
    return b;
}
export { r7e, xyn, rJn, Pyn, Iyn, KWr, nVo, oJn, Oyn, YWr, sJn, rVo, oVo, XWr, JWr, sVo, QWr, Myn, iJn, zjt, Gjt, Mme, Vjt, Hme, aJn, ZWr, ezr, tzr, nzr, rzr, ozr, lJn, szr, izr, qjt, azr, Ejs, lzr, cJn, dJn, czr, qOe, Kjt, dzr, uJn, zyt, pJn, fJn, mJn, gJn, KOe, Yjt, uzr, hJn, YOe, Hyn, pzr, fzr, mzr };
