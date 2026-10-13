import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B, Op, eo, DH, O2n } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { b, d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, z, ti, s9e } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q, Ut, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { St, _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { tj } from "/$bunfs/root/chunk-24agvrd9.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { pp, dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { rBe, A0, MRr, FGn } from "/$bunfs/root/chunk-x47nahfr.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { FSe, jF, sZ, Bxs, USe, uzn, WEo, RAr, BSe, pzn, xAr, zEo, uut, ay, KEo, gUe, fzn, xP, Kk, s5e, Ann, fse, mzn, Cnn, i5e, gzn, xnn, $b, l5e, Nxe, V8, gut } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { r8, Xgo, wlt, cIt, Sbe, hUn, yUn, _Un, dIt, wbe, Uws, JS, HV, Ult, vl, Wp, X7t, J7t, FE, bn, m8, fg, rZt, oZt, _6e, bS, zIt, joe, wt, qf as readStoredAccount, r0, jvr, GIt, VIt, qBn, KBn, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { MF } from "/$bunfs/root/chunk-ph7a449e.js";
import { Ie, af, Ktn } from "/$bunfs/root/chunk-nj0630nv.js";
import { Pr } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { ITr, ORs } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { T8 } from "/$bunfs/root/chunk-6dwnw6av.js";
import { DFe, fCs, mCs } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { KM } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { I$n, rQt, Nbs, q5, fbr, sQt, mbr, O$n, gbr, M$n, H$n, hbr, Mat } from "/$bunfs/root/chunk-k8dhpbv8.js";
import { FOn } from "/$bunfs/root/chunk-53bavyda.js";
import { Pa } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { iPt, e$e, cQt, dQt } from "/$bunfs/root/chunk-9s2mtk47.js";
import { Xns, Jns } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { ri } from "/$bunfs/root/chunk-j9ep7722.js";
import { $St, w2, Ps, Ds } from "/$bunfs/root/chunk-kasbfbhj.js";
import { nbr, sY, KA, rbr } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { _E } from "/$bunfs/root/chunk-6xvcnbea.js";
import { VQe } from "/$bunfs/root/chunk-271a0dc5.js";
import { Cqo } from "/$bunfs/root/chunk-cq4hjme9.js";
import { o, oe, u, ue } from "/$bunfs/root/chunk-smx21d0k.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { Ko } from "/$bunfs/root/chunk-7qc48pza.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { createHash } from "crypto";
import { hostname } from "os";
import { open, readFile, rm, unlink, writeFile } from "fs/promises";
const Ne = "tengu_managed_config_prefetch_off";
function ijt() {
    let a_CLAUDE_CODE_MANAGED_CONFIG_PREFETCH = a.CLAUDE_CODE_MANAGED_CONFIG_PREFETCH;
    if (a_CLAUDE_CODE_MANAGED_CONFIG_PREFETCH !== undefined) {
        return a_CLAUDE_CODE_MANAGED_CONFIG_PREFETCH;
    }
    if (Ie() !== "firstParty" || !af() && KM() === undefined) {
        return false;
    }
    return !k(Ne, false);
}
const Be = 5000;
class le {
    updates = new _E;
    owner;
    constructor(e){
        this.owner = e;
    }
    supersede(settings, baseline, r) {
        let owner = this.owner;
        this.owner = r;
        this.updates.enqueue({
            settings,
            baseline
        });
        owner("superseded");
    }
    settle(e) {
        this.updates.done();
        this.owner(e);
    }
}
class fe {
    replRequester = null;
    requesterWaiters = [];
    noConsentSurface = false;
    stopsWhenApprovalCannotBeAsked = false;
    standaloneDialogUnanswered = null;
    pendingReview = null;
    registerRequester(e) {
        this.replRequester = e;
        if (e && this.requesterWaiters.length > 0) {
            let n = this.requesterWaiters;
            this.requesterWaiters = [];
            for (let r of n){
                r(e);
            }
        }
    }
    addWaiter(e) {
        this.requesterWaiters.push(e);
    }
    dropWaiter(e) {
        this.requesterWaiters = this.requesterWaiters.filter((n)=>n !== e);
    }
    review(e, n, r) {
        return new Promise((resolve)=>{
            if (this.pendingReview) {
                this.pendingReview.supersede(n, r, resolve);
                return;
            }
            let y = new le(resolve);
            this.pendingReview = y;
            i("tengu_managed_settings_security_dialog_shown", {});
            let S;
            try {
                S = e(n, r, y.updates);
            } catch  {
                S = Promise.resolve("deferred_no_consent_surface");
            }
            S.then((R)=>this.close(y, R), ()=>this.close(y, "deferred_no_consent_surface"));
        });
    }
    close(e, n) {
        this.pendingReview = null;
        if (n === "approved") {
            i("tengu_managed_settings_security_dialog_accepted", {});
            g("remote_managed_settings_security_check");
        } else if (n === "rejected") {
            i("tengu_managed_settings_security_dialog_rejected", {});
        }
        e.settle(n);
    }
    startupConsentRelease = null;
    fireStartupConsentRelease() {
        let startupConsentRelease = this.startupConsentRelease;
        if (startupConsentRelease) {
            this.startupConsentRelease = null;
            startupConsentRelease();
        }
    }
    consentNeededRelease = null;
    async fireConsentNeededRelease() {
        let consentNeededRelease = this.consentNeededRelease;
        if (consentNeededRelease) {
            this.consentNeededRelease = null;
            await consentNeededRelease();
        }
    }
    consentHandoffHolds = new Set;
    consentHandoffSignal = Oe();
    consentHandoffRevealActive = false;
}
const je = new q(()=>new fe);
function x() {
    return je.of(B().host);
}
function ge() {
    return ri().pendingStandaloneRender !== null;
}
function Lhn() {
    return x().standaloneDialogUnanswered;
}
function Njr(e) {
    x().registerRequester(e);
}
function he(e) {
    let n = x();
    n.startupConsentRelease = e;
    return ()=>{
        if (n.startupConsentRelease === e) {
            n.startupConsentRelease = null;
        }
    };
}
function $jr() {
    let e = x();
    let n = Symbol("consent-handoff-hold");
    e.consentHandoffHolds.add(n);
    if (e.consentHandoffHolds.size === 1) {
        e.consentHandoffSignal.emit();
    }
    return ()=>{
        if (e.consentHandoffHolds.delete(n) && e.consentHandoffHolds.size === 0) {
            e.consentHandoffSignal.emit();
        }
    };
}
function Tyt() {
    return x().consentHandoffHolds.size > 0;
}
function Fjr() {
    return x().consentHandoffRevealActive;
}
function JGo(e) {
    return x().consentHandoffSignal.subscribe(e);
}
function QGo(e) {
    let n = x();
    n.consentNeededRelease = e;
    return ()=>{
        if (n.consentNeededRelease === e) {
            n.consentNeededRelease = null;
        }
    };
}
function Ujr() {
    x().noConsentSurface = true;
    zEo();
}
function ZGo() {
    x().stopsWhenApprovalCannotBeAsked = true;
}
function me() {
    return x().noConsentSurface;
}
async function de() {
    let e = x();
    let n;
    let r = new Promise((resolve)=>{
        n = resolve;
        e.addWaiter(resolve);
    });
    let s = await Ut(r, Be, "managed-settings security dialog requester wait timed out").catch(()=>null);
    if (s === null) {
        e.dropWaiter(n);
    }
    return s;
}
async function ye(e, n, showSecurityDialog) {
    if (!n || !sZ(jF(n))) {
        return "no_check_needed";
    }
    if (!Bxs(e, n)) {
        return "no_check_needed";
    }
    let s = x();
    if (!Op() || MRr() && a.CLAUDE_CODE_SESSION_KIND === "bg") {
        if (s.noConsentSurface) {
            return "deferred_no_consent_surface";
        }
        return "deferred_non_interactive";
    }
    let y = e.source === "consented_payload" ? e.settings : e.consentedPayload;
    if (s.replRequester) {
        if (s.consentNeededRelease) {
            let h = null;
            try {
                h = $jr();
                await s.fireConsentNeededRelease();
                let E = s.replRequester;
                if (E) {
                    s.consentHandoffRevealActive = true;
                    return await s.review(E, n, y);
                }
                if (ri().has(process.stdout)) {
                    let w = await de();
                    if (w) {
                        s.consentHandoffRevealActive = true;
                        return await s.review(w, n, y);
                    }
                }
                return "deferred_no_consent_surface";
            } finally{
                s.consentHandoffRevealActive = false;
                h?.();
            }
        } else {
            return s.review(s.replRequester, n, y);
        }
    }
    if (s.noConsentSurface) {
        return "deferred_no_consent_surface";
    }
    let S = ri();
    if (S.has(process.stdout)) {
        s.fireStartupConsentRelease();
        let h = await de();
        if (h) {
            return s.review(h, n, y);
        }
    }
    if (showSecurityDialog === undefined || s.noConsentSurface || s.stopsWhenApprovalCannotBeAsked && VQe.get().kind === "unavailable") {
        if (!s.noConsentSurface) {
            s.standaloneDialogUnanswered = "not_asked";
        }
        return "deferred_no_consent_surface";
    }
    i("tengu_managed_settings_security_dialog_shown", {});
    let R = S.has(process.stdout);
    let C = showSecurityDialog(n, R, y);
    if (!R) {
        S.claimForStandaloneRender(C);
    }
    let v;
    try {
        v = await C;
        s.standaloneDialogUnanswered = null;
    } catch (error) {
        s.standaloneDialogUnanswered = "closed_unanswered";
        m("remote_managed_settings_security_check", "dialog_unavailable");
        throw error;
    }
    i(v === "approved" ? "tengu_managed_settings_security_dialog_accepted" : "tengu_managed_settings_security_dialog_rejected", {});
    if (v === "approved") {
        g("remote_managed_settings_security_check");
    }
    return v;
}
const Bjr = "Managed settings were not approved; exiting without applying them.";
const e2o = "Your organization's managed settings need your approval, which couldn't be asked for here. Run `claude` in a terminal and approve them, then run this command again.";
const jjr = Oe();
function Se(e) {
    switch(e){
        case "rejected":
            if (process.stderr.isTTY && !Ds()) {
                T8();
                w2(Bjr);
            }
            if (!Ds()) {
                jjr.emit();
            }
            Ps(1);
            return false;
        case "deferred_no_consent_surface":
            return false;
        case "superseded":
            return false;
        case "approved":
        case "no_check_needed":
        case "deferred_non_interactive":
            return true;
    }
}
const _e = p(()=>u({
        uuid: o(),
        checksum: o(),
        settings: ue(o(), oe())
    }));
const timeout = 10000;
const Qe = 5;
const Ze = 3600000;
const et = 30000;
class ke {
    poller = null;
    loadingCompletePromise = null;
    loadingCompleteResolve = null;
    fetchSettledPromise = null;
    fetchSettledResolve = null;
    signedCacheShadowChecked = false;
    backstopReleased = false;
    prefetch = new O$n;
    oauthRefreshLatch = {
        attempted: false,
        recoveries: {
            begun: 0,
            running: 0
        }
    };
    createBarrier(e) {
        this.fetchSettledPromise = new Promise((resolve)=>{
            this.fetchSettledResolve = resolve;
            e?.(resolve);
        });
        this.loadingCompletePromise = new Promise((resolve)=>{
            this.loadingCompleteResolve = resolve;
        });
    }
    releaseLoadBarrier() {
        this.loadingCompleteResolve?.();
        this.loadingCompleteResolve = null;
    }
    releaseBarrier() {
        this.releaseLoadBarrier();
        this.fetchSettledResolve?.();
        this.fetchSettledResolve = null;
    }
    detachBarrier() {
        let loadingCompleteResolve = this.loadingCompleteResolve;
        let fetchSettledResolve = this.fetchSettledResolve;
        this.loadingCompleteResolve = null;
        this.loadingCompletePromise = null;
        this.fetchSettledResolve = null;
        this.fetchSettledPromise = null;
        if (!loadingCompleteResolve && !fetchSettledResolve) {
            return null;
        }
        return ()=>{
            loadingCompleteResolve?.();
            fetchSettledResolve?.();
        };
    }
    startPoller(e) {
        this.poller = e;
    }
    stopPoller() {
        this.poller?.[Symbol.dispose]();
        this.poller = null;
    }
}
const tt = new q(()=>new ke);
function M() {
    return tt.of(B().host);
}
function Ayt() {
    Ae();
    let e = M();
    if (e.loadingCompletePromise) {
        return;
    }
    if (KA()) {
        e.createBarrier((n)=>{
            setTimeout((r, s)=>{
                if (s.fetchSettledResolve === r) {
                    if (ge()) {
                        t("Remote settings: Loading promise timeout deferred — consent dialog pending");
                        return;
                    }
                    t("Remote settings: Loading promise timed out, resolving anyway (load and fetch barriers)");
                    s.backstopReleased = true;
                    s.releaseBarrier();
                }
            }, et, n, e);
        });
    }
}
function Wjr(e) {
    if (eo() || !KA() || Kk() || s5e() || mzn() !== undefined) {
        return;
    }
    if (bn()?.refreshToken && readStoredAccount() === undefined) {
        return;
    }
    let n = xnn();
    let r = n ? FSe(n) : undefined;
    let s = M();
    let { oauthRefreshLatch } = s;
    s.prefetch.set({
        checksum: r,
        epoch: BSe(),
        endpoint: se(),
        principal: Ce()
    }, (S)=>ie(r, false, e, S, oauthRefreshLatch), (S)=>S.success);
}
function _Xn() {
    let e = M();
    e.prefetch.clear();
    e.oauthRefreshLatch = {
        attempted: false,
        recoveries: {
            begun: 0,
            running: 0
        }
    };
}
function Ce() {
    if (eo()) {
        return "gateway";
    }
    let e = bn();
    let n = readStoredAccount();
    return at(_([
        wt() && rbr(),
        e?.accessToken === undefined ? null : e.refreshToken ? [
            n?.organizationUuid ?? "",
            n?.accountUuid ?? "",
            at(e.accessToken)
        ] : at(e.accessToken),
        X7t().fingerprint,
        Ult() ? DFe()?.organizationUuid ?? "" : null
    ]));
}
function nt() {
    let e = r0();
    if (!MRr()) {
        return e;
    }
    let n = `, ${a.CLAUDE_CODE_ENTRYPOINT ?? "cli"}`;
    let r = e.indexOf(n);
    if (r === -1) {
        return e;
    }
    return e.slice(0, r + n.length) + `, ${FGn}` + e.slice(r + n.length);
}
function se() {
    let e = eo();
    if (e) {
        return `${e.url}/managed/settings`;
    }
    return `${dn().BASE_API_URL}/api/claude_code/settings`;
}
function Y(e) {
    if (!e) {
        return e;
    }
    return Nxe(e, "remote managed settings").settings ?? {};
}
function be(e, n) {
    let r = RAr(e);
    let s = Nxe(r, n);
    let y = r;
    let S = Object.keys(y);
    if (!s.settings && S.length > 0 && !S.every((R)=>s.removed.includes(R)) && !rt(y)) {
        t(`Remote settings: ruled_empty - no key in the payload could be applied as written (${s.errors.length} rulings); nothing of it applies`);
        return {
            ruledEmpty: {
                success: false,
                error: "No setting in the payload could be applied as written",
                errorKind: "ruled_empty",
                rulings: s.errors,
                skipRetry: true
            }
        };
    }
    if (s.errors.length > 0) {
        t(`Remote settings: Payload contains ${s.errors.length} invalid entries; applying the salvaged subset`);
    }
    return {
        settings: r,
        salvagedSettings: st(y, s)
    };
}
function rt(e) {
    let n = Object.keys(e);
    return n.length > 0 && n.every((r)=>gut.some((s)=>s === r));
}
function Ee(e, n, r) {
    let s = [
        ...gut.filter((y)=>y in n && !(y in e)),
        ...r.onlySubstitutes ? r.errors.filter((y)=>y.onlySubstitutes).map((y)=>y.path) : []
    ].filter((y)=>y in n);
    if (s.length === 0) {
        return e;
    }
    return {
        ...e,
        ...Object.fromEntries(s.map((y)=>[
                y,
                n[y]
            ]))
    };
}
function ot(e) {
    let n = Nxe(e, "remote managed settings");
    return Ee(n.settings ?? {}, e, n);
}
function st(e, n) {
    let r = n.errors.length > 0 ? n.settings ?? {} : undefined;
    if (r === undefined) {
        return undefined;
    }
    return Ee(r, e, n);
}
async function it(credentials) {
    let n = mzn();
    if (n === undefined) {
        return null;
    }
    if (n === "fail") {
        return {
            success: false,
            error: "mocked fetch failure",
            errorKind: "unknown_error",
            skipRetry: true
        };
    }
    if (n === "empty") {
        return {
            success: true,
            settings: {},
            checksum: undefined,
            consentIdentity: await ne(credentials)
        };
    }
    try {
        let r = Cnn();
        let s = r !== undefined ? await readFile(r, "utf-8") : n;
        let y = X(s);
        if (!y || typeof y !== "object" || Array.isArray(y)) {
            return {
                success: false,
                error: "mock JSON parse failed",
                errorKind: "parse_error",
                skipRetry: true
            };
        }
        let S = be(y, "mock remote settings");
        if ("ruledEmpty" in S) {
            return S.ruledEmpty;
        }
        return {
            success: true,
            ...S,
            checksum: "mock",
            consentIdentity: await ne(credentials)
        };
    } catch  {
        return {
            success: false,
            error: "mock JSON parse failed",
            errorKind: "parse_error",
            skipRetry: true
        };
    }
}
function bXn() {
    return KA();
}
async function PU() {
    let e = M();
    if (e.loadingCompletePromise) {
        await e.loadingCompletePromise;
    }
}
async function GQe() {
    let e = M();
    if (e.fetchSettledPromise) {
        await e.fetchSettledPromise;
    }
}
Uws(GQe);
function Cyt() {
    return M().backstopReleased;
}
function aEe() {
    return KA() && !$b();
}
function SXn() {
    return !rBe() && KA() && gzn();
}
function Ae() {
    Cqo(async ()=>{
        if (SXn()) {
            await GQe();
        } else if (aEe()) {
            await PU();
        }
    });
}
async function ct(e) {
    let n = eo();
    if (n) {
        let pinnedFingerprint = DH(n) ? await Me(n, e) : undefined;
        return {
            headers: {
                Authorization: `Bearer ${n.jwt}`
            },
            authType: "gateway_jwt",
            consentIdentity: Fe(n, pinnedFingerprint),
            pinnedFingerprint
        };
    }
    if (wt() && rbr()) {
        let s = bn();
        if (s?.accessToken) {
            return {
                headers: {
                    Authorization: `Bearer ${s.accessToken}`,
                    "anthropic-beta": pp
                },
                authType: "oauth",
                accessToken: s.accessToken,
                ...await te(e)
            };
        }
    }
    try {
        let { key } = FE({
            skipRetrievingKeyFromApiKeyHelper: true
        });
        if (key) {
            return {
                headers: {
                    "x-api-key": key
                },
                authType: "api_key"
            };
        }
    } catch  {}
    if (Ult()) {
        if (fCs()) {
            t("Remote settings: the settings endpoint rejected the profile credential after a forced refresh; not fetching with it again until the next sign-in or restart");
            return {
                headers: {},
                error: "Remote settings: the settings endpoint rejected the profile credential after a forced refresh; not fetching with it again until the next sign-in or restart",
                authType: "profile",
                profileError: true
            };
        }
        try {
            let { getWIFCredentials, getWIFTokenCache } = await import("/$bunfs/root/chunk-kh6pfp5w.js");
            let [S, R] = await Promise.all([
                getWIFTokenCache(),
                getWIFCredentials()
            ]);
            if (S !== null) {
                if (!nbr(R?.baseURL)) {
                    let v = `Remote settings: profile base URL ${R?.baseURL ?? "(unknown)"} is not the settings endpoint's host; not fetching with the profile credential`;
                    t(v);
                    return {
                        headers: {},
                        error: v,
                        authType: "profile",
                        profileError: true
                    };
                }
                let accessToken = await S.getToken();
                return {
                    headers: {
                        ...R?.extraHeaders,
                        Authorization: `Bearer ${accessToken}`
                    },
                    authType: "profile",
                    accessToken,
                    profileBearer: true,
                    consentIdentity: Pe()
                };
            }
        } catch (error) {
            let y = `Remote settings: profile credential unavailable: ${l(error)}`;
            t(y, {
                level: "error"
            });
            let { isWIFTransientExchangeError } = await import("/$bunfs/root/chunk-kh6pfp5w.js");
            return {
                headers: {},
                error: y,
                authType: "profile",
                profileError: true,
                retryable: isWIFTransientExchangeError(error)
            };
        }
    }
    let r = bn();
    if (r?.accessToken) {
        return {
            headers: {
                Authorization: `Bearer ${r.accessToken}`,
                "anthropic-beta": pp
            },
            authType: "oauth",
            accessToken: r.accessToken,
            ...await te(e)
        };
    }
    return {
        headers: {},
        error: "No authentication available",
        authType: "none"
    };
}
async function dt(e) {
    return (await te(e)).consentIdentity;
}
async function te(e) {
    let n = readStoredAccount();
    let r = await fg(e);
    let credentialOrigin = r === "store" ? "stored_login" : r === "env" || r === "fd" ? "injected_token" : undefined;
    if (r !== "store") {
        return {
            credentialOrigin
        };
    }
    return {
        credentialOrigin,
        consentIdentity: n?.organizationUuid ? {
            organizationUuid: n.organizationUuid,
            accountUuid: n.accountUuid
        } : undefined
    };
}
function Pe() {
    let e = DFe();
    let n = readStoredAccount();
    if (e?.organizationUuid && e.accountEmail && n?.organizationUuid === e.organizationUuid && n.emailAddress === e.accountEmail && n.accountUuid) {
        return {
            organizationUuid: e.organizationUuid,
            accountUuid: n.accountUuid
        };
    }
}
const Te = "gateway:";
const ut = 256;
function Fe(e, n) {
    if (!DH(e) || !n || n === Xgo) {
        return;
    }
    let r;
    try {
        r = new URL(e.url);
    } catch  {
        return;
    }
    if (r.protocol !== "https:") {
        return;
    }
    let s = `${r.origin}${r.pathname === "/" ? "" : r.pathname}`;
    let y = FOn(e) ?? "";
    return {
        organizationUuid: `${Te}${s}#${n}`,
        accountUuid: y.length > ut ? `sha256:${createHash("sha256").update(y).digest("hex")}` : y
    };
}
async function Me(e, n) {
    return Sbe(r8(new URL(e.url)), n);
}
async function ne(credentials) {
    let n = eo();
    if (n) {
        return Fe(n, await Me(n, credentials).catch(()=>{}));
    }
    if (Wp({
        skipRetrievingKeyFromApiKeyHelper: true
    }).key === null && Ult()) {
        return Pe();
    }
    return dt(credentials);
}
async function Z(consentIdentity, n, storageV5, credentials) {
    if (!consentIdentity) {
        return;
    }
    let y = consentIdentity.organizationUuid.startsWith(Te) ? await ne(credentials) : readStoredAccount();
    if (y?.organizationUuid !== consentIdentity.organizationUuid || y.accountUuid !== consentIdentity.accountUuid) {
        t("Remote settings: consent identity no longer matches the fetch identity; not recording org consent");
        return;
    }
    await Jns(consentIdentity, n, storageV5);
}
function H(e) {
    if (BSe() === e) {
        return false;
    }
    t("Remote settings: Cache was reset (login/logout) during this fetch; discarding its result");
    f("remote_managed_settings_pull", "reset_during_fetch");
    return true;
}
function G(e) {
    if (e.httpStatus !== undefined) {
        return `${e.errorKind}/${e.httpStatus}`;
    }
    return e.errorKind;
}
async function lt(bodySha, n = {}) {
    let r = await it(n.credentials);
    if (r) {
        return r;
    }
    let s = null;
    let y = eo() && !n.background || n.singleAttempt ? 0 : Qe;
    let S = ijt();
    let R = S && n.startupAwaited === true && !n.background && !eo();
    let C = S ? n.oauthRefreshLatch : undefined;
    let send = (w)=>ie(bodySha, false, n.credentials, w, C);
    let n_prefetched = n.prefetched;
    let E = false;
    for(let w = 1; w <= y + 1; w++){
        let first = n_prefetched ?? sQt(send);
        n_prefetched = undefined;
        if (R && w === 1) {
            let T = await mbr({
                first,
                send,
                isAnswer: (O, K)=>O.success || O.skipRetry === true && !(K && O.errorKind === "http_401"),
                stillWanted: ijt,
                retryFollows: y > 0
            });
            s = T.result;
            E ||= T.hedged;
        } else {
            s = await first.attempt;
        }
        s.attempts = w;
        if (E) {
            s.hedged = true;
        }
        if (s.success) {
            return s;
        }
        if (s.skipRetry) {
            return s;
        }
        if (w > y) {
            return s;
        }
        let F = MF(w);
        t(`Remote settings: Retry ${w}/${y} after ${F}ms (${G({
            errorKind: s.errorKind ?? "unknown_error",
            ...s.httpStatus !== undefined && {
                httpStatus: s.httpStatus
            }
        })})`);
        await Q(F);
    }
    return s;
}
const ft = Date.now();
function we(e) {
    let errorCode = (()=>{
        switch(e.errorKind){
            case "http_401":
            case "http_403":
                return "auth_failed";
            case "timeout":
                return "timeout";
            case "network_error":
                return "network_error";
            case "parse_error":
            case "ruled_empty":
                return "parse_failed";
            case "http_4xx":
            case "http_5xx":
            case "unknown_error":
            case "gateway_cert_mismatch":
            case "gateway_public_address":
            case "gateway_pin_refused":
            case "gateway_pin_unreadable":
                return "request_failed";
            case "no_auth_available":
            case "profile_credential_error":
            case undefined:
                return;
        }
    })();
    let httpStatus = e.errorKind === "http_401" ? 401 : e.errorKind === "http_403" ? 403 : e.httpStatus;
    let authType = e.authType === "oauth" ? "oauth" : e.authType === "api_key" ? "api_key" : e.authType === "profile" ? "wif" : undefined;
    return hbr({
        errorCode,
        httpStatus,
        serverErrorType: e.serverErrorType,
        serverErrorCode: e.serverErrorCode,
        serverAuthDenial: e.serverAuthDenial,
        tokenRefreshOutcome: e.tokenRefreshOutcome,
        forcedRefreshOutcome: e.forcedRefreshOutcome,
        authType,
        credentialOrigin: e.authType === "api_key" ? "static_key" : e.credentialOrigin,
        injectedTokenRecovery: e.credentialOrigin === "injected_token" ? zIt() : undefined,
        noResponse: e.noResponse
    });
}
async function ie(e, n = false, r, signal, y) {
    let S = y && GIt(y.recoveries);
    let R;
    let C = false;
    let consentIdentity;
    let h = {};
    let E = (w)=>{
        t(`Remote settings: Fetch attempt failed (${G({
            errorKind: w.errorKind ?? "unknown_error",
            ...w.httpStatus !== undefined && {
                httpStatus: w.httpStatus
            }
        })})`);
        return {
            ...h,
            ...w
        };
    };
    try {
        let w = await joe({
            credentials: r
        });
        await HV(r);
        let P = await ct(r);
        R = P.accessToken;
        C = P.profileBearer === true;
        consentIdentity = P.consentIdentity;
        h = {
            authType: P.authType,
            credentialOrigin: P.credentialOrigin,
            tokenRefreshOutcome: P.authType === "oauth" ? w : undefined
        };
        if (P.error) {
            return E({
                success: false,
                error: P.profileError ? P.error : "Authentication required for remote settings",
                errorKind: P.profileError ? "profile_credential_error" : "no_auth_available",
                skipRetry: !(P.profileError && P.retryable)
            });
        }
        let F = se();
        let headers = {
            ...P.headers,
            "User-Agent": A0() ? nt() : Ko(),
            "Cache-Control": "no-cache",
            Pragma: "no-cache"
        };
        if (e) {
            headers["If-None-Match"] = `"${e}"`;
        }
        let O = eo()?.hostVerdict;
        let httpsAgent = wbe(P.pinnedFingerprint, F) ?? (O && "verified" in O && O.verified && !("vouched" in O) ? yUn(F, O.network) : undefined);
        let A = await At.get(F, {
            headers,
            timeout,
            ...httpsAgent && {
                httpsAgent
            },
            validateStatus: (L)=>L === 200 || L === 204 || L === 304 || L === 404,
            signal
        });
        if (A.status === 304) {
            if (!e) {
                t("Remote settings: 304 to an unconditional request");
                return {
                    success: false,
                    error: "Unexpected 304 Not Modified",
                    errorKind: "unknown_error",
                    httpStatus: 304,
                    skipRetry: true,
                    ...h,
                    ...M$n(A.headers)
                };
            }
            t("Remote settings: Using cached settings (304)");
            return {
                success: true,
                settings: null,
                checksum: e,
                signature: iPt(A.headers),
                consentIdentity,
                ...h,
                responseKind: "not_modified"
            };
        }
        if (A.status === 204 || A.status === 404) {
            t(`Remote settings: No settings found (${A.status})`);
            return {
                success: true,
                settings: {},
                checksum: undefined,
                signature: iPt(A.headers),
                consentIdentity,
                ...h,
                responseKind: "none_configured",
                ...M$n(A.headers)
            };
        }
        let D = _e().safeParse(A.data);
        if (!D.success) {
            t(`Remote settings: Invalid response format - ${D.error.message}`);
            return {
                success: false,
                error: "Invalid remote settings format",
                errorKind: "parse_error",
                skipRetry: true,
                ...h,
                ...M$n(A.headers)
            };
        }
        let U = be(D.data.settings, "remote managed settings");
        if ("ruledEmpty" in U) {
            return {
                ...U.ruledEmpty,
                ...h
            };
        }
        if (y && D.data.checksum) {
            VIt(y, S);
        }
        t("Remote settings: Fetched successfully");
        return {
            success: true,
            ...U,
            checksum: D.data.checksum,
            signature: iPt(A.headers),
            consentIdentity,
            ...h
        };
    } catch (error) {
        let P = l(error?.cause);
        if (l(error).includes(wlt)) {
            return E({
                success: false,
                error: "Cloud gateway TLS pin is in a symlinked credentials file",
                errorKind: "gateway_pin_refused",
                skipRetry: true
            });
        }
        if (l(error).includes(cIt)) {
            return E({
                success: false,
                error: "Cloud gateway TLS pin could not be read from the credentials file",
                errorKind: "gateway_pin_unreadable"
            });
        }
        if (l(error).includes(_Un) || P.includes(_Un)) {
            let gatewayPinMismatch = dIt(error);
            return E({
                success: false,
                error: "Cloud gateway TLS certificate does not match stored pin",
                errorKind: "gateway_cert_mismatch",
                ...gatewayPinMismatch && {
                    gatewayPinMismatch
                },
                skipRetry: true
            });
        }
        if (l(error).includes(hUn) || P.includes(hUn)) {
            return E({
                success: false,
                error: "Cloud gateway connection outside the network it was checked on",
                errorKind: "gateway_public_address",
                skipRetry: true
            });
        }
        let { kind, status, message } = ti(error);
        if (status === 404) {
            return {
                success: true,
                settings: {},
                checksum: "",
                consentIdentity,
                ...h,
                responseKind: "none_configured",
                ...H$n(error)
            };
        }
        let K = {
            ...rQt(error),
            ...H$n(error)
        };
        switch(kind){
            case "auth":
                {
                    let A = {
                        success: false,
                        error: "Not authorized for remote settings",
                        errorKind: status === 401 ? "http_401" : "http_403",
                        skipRetry: true,
                        ...K
                    };
                    if (signal?.aborted) {
                        return E(A);
                    }
                    if (status === 401 && R && !n && !y?.attempted) {
                        let D = R;
                        let L = await jvr(y, async ()=>{
                            if (C) {
                                if (y) {
                                    y.attempted = true;
                                }
                                let { getWIFTokenCache, invalidateWIFToken } = await import("/$bunfs/root/chunk-kh6pfp5w.js");
                                await invalidateWIFToken(D);
                                return getWIFTokenCache().then((Ue)=>Ue?.getToken()).catch(()=>{});
                            }
                            await bS(D, r, undefined, {
                                onForcedRefreshOutcome: (I)=>{
                                    A.forcedRefreshOutcome = I;
                                    if (y) {
                                        y.attempted = true;
                                        y.lastOutcome = I;
                                    }
                                }
                            });
                            return bn()?.accessToken;
                        });
                        if (L && L !== R) {
                            E(A);
                            i("tengu_remote_settings_401_force_refresh_retry", {});
                            let I = await ie(e, true, r, signal, y);
                            return {
                                ...I,
                                retriedAfter401: true,
                                forcedRefreshOutcome: I.forcedRefreshOutcome ?? A.forcedRefreshOutcome
                            };
                        }
                    }
                    if (status === 401 && C && n) {
                        mCs(true);
                    }
                    if (status === 401 && A.forcedRefreshOutcome === undefined && y?.attempted) {
                        A.forcedRefreshOutcome = y.lastOutcome;
                    }
                    return E(A);
                }
            case "timeout":
                return E({
                    success: false,
                    error: "Remote settings request timeout",
                    errorKind: "timeout",
                    errno: Mat(error)
                });
            case "network":
                return E({
                    success: false,
                    error: "Cannot connect to server",
                    errorKind: "network_error",
                    errno: Mat(error)
                });
            default:
                return E({
                    success: false,
                    error: message,
                    errorKind: status !== undefined && status >= 500 ? "http_5xx" : status !== undefined && status >= 400 ? "http_4xx" : "unknown_error",
                    ...status !== undefined && status >= 400 && {
                        httpStatus: status
                    },
                    ...kind === "http" && status === undefined && {
                        noResponse: true,
                        errno: Mat(error)
                    },
                    ...K,
                    ...s9e(status) && {
                        skipRetry: true
                    }
                });
        }
    }
}
async function ve(e, storageV5, r) {
    if (Ann()) {
        return;
    }
    let s = _(e, null, 2);
    let y = WEo(e);
    if (j() && storageV5 !== undefined && !Kk()) {
        let S = await storageV5.write($e.state("remote-settings"), s, {
            publishDiscipline: "inPlace",
            mode: 384,
            flush: true
        });
        if (!S.ok) {
            t(`Remote settings: Failed to save - ${gt(S.error)}`);
            return;
        }
        t("Remote settings: Saved via storage backend");
        i5e("cache", s);
        await e$e(fse(), r);
        if (y !== undefined) {
            let R = await storageV5.write($e.state(USe), y, {
                publishDiscipline: "inPlace",
                mode: 384
            });
            t(R.ok ? "Remote settings: Saved helper consent via storage backend" : `Remote settings: Failed to save helper consent - ${gt(R.error)}`);
            if (R.ok) {
                i5e("helperConsent", y);
            }
        }
        return;
    }
    try {
        let S = fse();
        let R = await open(S, "w", 384);
        try {
            await R.writeFile(s, {
                encoding: "utf-8"
            });
            await R.datasync();
        } finally{
            await R.close();
        }
        t(`Remote settings: Saved to ${S}`);
    } catch (error) {
        t(`Remote settings: Failed to save - ${error instanceof Error ? error.message : "unknown error"}`);
        return;
    }
    if (j() && !Kk()) {
        i5e("cache", s);
    }
    await e$e(fse(), r);
    if (y === undefined) {
        return;
    }
    try {
        await writeFile(uzn(), y, {
            mode: 384
        });
        if (j() && !Kk()) {
            i5e("helperConsent", y);
        }
    } catch (error) {
        t(`Remote settings: Failed to save helper consent - ${l(error)}`);
    }
}
async function ajt(e) {
    Fhn();
    sY();
    Pr();
    _Xn();
    M().detachBarrier()?.();
    let n = j() && e !== undefined ? await e.delete($e.state(USe)).then((r)=>{
        if (r.ok) {
            return undefined;
        }
        return gt(r.error);
    }) : await rm(uzn(), {
        force: true
    }).then(()=>{}, l);
    if (n !== undefined) {
        t(`Remote settings: Failed to remove helper consent - ${n}`);
        return;
    }
    if (j() && !Kk()) {
        i5e("helperConsent", null);
    }
    if (Kk()) {
        return;
    }
    await cQt(fse());
    if (j() && e !== undefined) {
        if ((await e.delete($e.state("remote-settings"))).ok) {
            i5e("cache", null);
        }
        return;
    }
    try {
        let r = fse();
        await unlink(r);
    } catch (error) {
        if (j() && !z(error)) {
            return;
        }
    }
    if (j()) {
        i5e("cache", null);
    }
}
let ae;
async function ce(e = {}) {
    try {
        return await pt(e);
    } finally{
        let n = ()=>V8().settings;
        ORs(n);
        ITr(n);
    }
}
async function pt(e) {
    if (!KA()) {
        M().prefetch.clear();
        return {
            settings: null,
            fetchSucceeded: true,
            resolution: "ineligible"
        };
    }
    let n = Kk();
    if (n || s5e()) {
        M().prefetch.clear();
        t(n ? `Remote settings: Using override file ${n} (CLAUDE_CODE_REMOTE_SETTINGS_PATH), skipping API fetch` : "Remote settings: confined evaluation child — serving the harness-written policy snapshot, no fetch");
        return {
            settings: $b(),
            fetchSucceeded: true,
            resolution: "local"
        };
    }
    let r = xnn();
    let s = ay();
    let bodySha = r ? FSe(r) : undefined;
    let S = BSe();
    let R = M();
    if (!R.signedCacheShadowChecked) {
        R.signedCacheShadowChecked = true;
        if (bodySha !== undefined) {
            gbr({
                kind: "managed-settings",
                cachePath: fse(),
                bodySha,
                readStoredAccount
            });
        }
    }
    if (!e.background && R.prefetch.pending) {
        let v = await fg(e.credentials);
        if (v !== "store") {
            m8();
        }
        if (oZt(v)) {
            await _6e(B().host, e.credentials);
        }
    }
    let prefetched = e.background ? undefined : R.prefetch.take((v)=>v.checksum === bodySha && v.epoch === S && v.endpoint === se() && v.principal === Ce());
    try {
        let v = Date.now();
        let h = await lt(bodySha, {
            ...e,
            prefetched,
            oauthRefreshLatch: e.background ? undefined : R.oauthRefreshLatch
        });
        let duration_ms = Date.now() - v;
        if (e.cycleFacts) {
            e.cycleFacts.hadCache = r !== null;
            e.cycleFacts.fetchMs = duration_ms;
        }
        let w = v + duration_ms;
        let P = h.authType === "oauth";
        let credentialState = h.success ? undefined : we(h);
        let T = qBn(h.success ? {
            succeeded: true,
            responseKind: h.responseKind ?? "body"
        } : {
            succeeded: false,
            failure: h.errorKind === "no_auth_available" ? "no_credentials" : h.errorKind === "profile_credential_error" ? "credential_exchange" : h.errorKind === "timeout" ? "timeout" : h.errorKind === "network_error" || h.errorKind === "gateway_public_address" || h.noResponse ? "network" : h.errorKind === "gateway_cert_mismatch" || h.errorKind === "gateway_pin_refused" || h.errorKind === "gateway_pin_unreadable" ? "tls" : h.errorKind === "parse_error" || h.errorKind === "ruled_empty" ? "parse" : h.httpStatus !== undefined || h.errorKind === "http_401" || h.errorKind === "http_403" ? "http" : "other",
            httpStatus: h.httpStatus ?? (h.errorKind === "http_401" ? 401 : h.errorKind === "http_403" ? 403 : undefined),
            serverErrorType: h.serverErrorType,
            serverErrorCode: h.serverErrorCode,
            serverAuthDenial: h.serverAuthDenial,
            credentialState,
            tokenRefreshOutcome: h.tokenRefreshOutcome,
            forcedRefreshOutcome: h.forcedRefreshOutcome,
            errno: h.errno,
            responseContentType: h.responseContentType,
            requestIdPresent: h.requestIdPresent,
            exchangeFinal: h.errorKind === "profile_credential_error" ? h.skipRetry === true : undefined
        });
        if (e.cycleFacts) {
            e.cycleFacts.outcomeReason = T;
        }
        i("tengu_remote_settings_fetch", {
            duration_ms,
            ms_since_startup: w - ft,
            success: h.success,
            error_kind: pe(h.errorKind),
            http_status: h.httpStatus,
            attempts: h.attempts,
            had_cache: r !== null,
            is_load: !e.background,
            awaited: e.startupAwaited === true,
            auth_type: pe(h.authType),
            token_source: d(vl().source),
            credential_origin: pe(h.credentialOrigin),
            api_key_prefix: h.authType === "api_key" ? d(J7t()) : undefined,
            has_custom_base_url: Ktn(),
            token_refresh_outcome: P ? pe(h.tokenRefreshOutcome) : undefined,
            forced_refresh_outcome: P ? pe(h.forcedRefreshOutcome) : undefined,
            retried_after_401: h.retriedAfter401 ?? false,
            server_error_type: pe(h.serverErrorType),
            server_error_code: pe(h.serverErrorCode),
            server_auth_denial: pe(h.serverAuthDenial),
            injected_token_recovery: pe(!h.success && h.credentialOrigin === "injected_token" ? zIt() : undefined),
            credential_state: pe(credentialState),
            error_errno: pe(h.errno),
            outcome_reason: d(T),
            response_kind: pe(h.success ? h.responseKind ?? "body" : undefined),
            request_id_present: h.requestIdPresent,
            response_content_type: pe(h.responseContentType),
            prefetched: prefetched !== undefined,
            hedged: h.hedged === true
        });
        if (H(S)) {
            return {
                settings: null,
                fetchSucceeded: false,
                resolution: "reset"
            };
        }
        if (!h.success && h.errorKind === "ruled_empty") {
            if (r) {
                uut(r);
            }
            if (r !== null && Object.keys(r).length > 0) {
                f("remote_managed_settings_pull", "ruled_empty_kept_previous");
                t("Remote settings: ruled_empty_kept_previous - the previously accepted settings stay in force");
            } else {
                m("remote_managed_settings_pull", "ruled_empty_nothing_kept");
                t("Remote settings: ruled_empty_nothing_kept - no previously accepted settings to keep; nothing applied");
            }
            return {
                settings: r,
                fetchSucceeded: false,
                failure: {
                    errorKind: "ruled_empty",
                    message: h.error ?? "ruled empty",
                    rulings: h.rulings ?? []
                },
                resolution: "ruled_empty"
            };
        }
        if (!h.success) {
            m("remote_managed_settings_pull", h.errorKind ?? "remote_managed_settings_fetch_failed");
            let failure = {
                errorKind: h.errorKind ?? "unknown_error",
                message: h.error ?? "Unknown error",
                ...h.httpStatus !== undefined && {
                    httpStatus: h.httpStatus
                },
                ...h.serverErrorType !== undefined && {
                    serverErrorType: h.serverErrorType
                },
                ...(h.errorKind === "http_401" || h.errorKind === "http_403") && {
                    credentialState: we(h)
                },
                ...h.gatewayPinMismatch && {
                    gatewayPinMismatch: h.gatewayPinMismatch
                }
            };
            if (r) {
                t(`Remote settings: Using stale cache after fetch failure (${G(failure)})`);
                uut(r);
                return {
                    settings: r,
                    fetchSucceeded: false,
                    failure,
                    resolution: "failed"
                };
            }
            t(`Remote settings: Fetch failed (${G(failure)}) and no cached settings`);
            return {
                settings: null,
                fetchSucceeded: false,
                failure,
                resolution: "failed"
            };
        }
        if (h.settings === null && r && r === pzn()) {
            t("Remote settings: Cache still valid (304 Not Modified)");
            uut(r, {
                verified: true
            });
            if (!Ann()) {
                await e$e(fse(), h.signature);
                let A = H(S);
                await dQt(fse(), A);
                if (A) {
                    return {
                        settings: null,
                        fetchSucceeded: false,
                        resolution: "reset"
                    };
                }
            }
            if (!s) {
                await ee();
                if (H(S)) {
                    return {
                        settings: null,
                        fetchSucceeded: false,
                        resolution: "reset"
                    };
                }
                if (r === pzn()) {
                    await Z(h.consentIdentity, Y(r), e.storageV5, e.credentials);
                    if (H(S)) {
                        return {
                            settings: null,
                            fetchSucceeded: false,
                            resolution: "reset"
                        };
                    }
                }
            }
            g("remote_managed_settings_pull", {
                status: b("not_modified")
            });
            return {
                settings: r,
                fetchSucceeded: true,
                resolution: "applied"
            };
        }
        let O = h.settings ?? r ?? {};
        if (Object.keys(O).length > 0) {
            let dangerousSettingsHash = h.consentIdentity ? await Xns(h.consentIdentity, e.storageV5) : null;
            let D = Y(pzn());
            let U = dangerousSettingsHash !== null ? {
                source: "org_record",
                dangerousSettingsHash,
                consentedPayload: D
            } : {
                source: "consented_payload",
                settings: D
            };
            let L = Y(O);
            let I = await ye(U, L, e.showSecurityDialog);
            if (H(S)) {
                return {
                    settings: null,
                    fetchSucceeded: false,
                    resolution: "reset"
                };
            }
            if (!Se(I)) {
                if (I === "superseded") {
                    t("Remote settings: A newer fetch took over the pending consent review; leaving the decision to it");
                    return {
                        settings: r,
                        fetchSucceeded: true,
                        resolution: "consent_superseded"
                    };
                }
                if (I === "deferred_no_consent_surface") {
                    let N = me();
                    if (N) {
                        t("Remote settings: Consent prompt deferred to the next interactive session (this command cannot host it); keeping the consented baseline");
                        f("remote_managed_settings_pull", "consent_deferred_no_surface");
                    } else {
                        t("Remote settings: No consent surface in this interactive session; keeping the consented baseline");
                        m("remote_managed_settings_pull", "remote_managed_settings_no_consent_surface");
                    }
                    return {
                        settings: r,
                        fetchSucceeded: false,
                        resolution: N ? "deferred" : "no_consent_surface"
                    };
                }
                t("Remote settings: User rejected new settings, using cached settings");
                return {
                    settings: r,
                    fetchSucceeded: true,
                    resolution: "rejected"
                };
            }
            uut(O, {
                verified: true,
                consentDeferred: I === "deferred_non_interactive"
            });
            if (!s) {
                await ee();
                if (H(S)) {
                    return {
                        settings: null,
                        fetchSucceeded: false,
                        resolution: "reset"
                    };
                }
            }
            switch(I){
                case "approved":
                case "no_check_needed":
                    xAr(O);
                    await Z(h.consentIdentity, L, e.storageV5, e.credentials);
                    if (H(S)) {
                        return {
                            settings: null,
                            fetchSucceeded: false,
                            resolution: "reset"
                        };
                    }
                    await ve(h.salvagedSettings ?? (h.settings === null ? ot(O) : O), e.storageV5, h.salvagedSettings === undefined && h.settings !== null ? h.signature : undefined);
                    t("Remote settings: Applied new settings successfully");
                    g("remote_managed_settings_pull", {
                        status: b("updated")
                    });
                    break;
                case "deferred_non_interactive":
                    t("Remote settings: Applied for this non-interactive run; consent deferred — not persisting the disk cache as consented");
                    g("remote_managed_settings_pull", {
                        status: b("applied_consent_deferred")
                    });
                    break;
                case "rejected":
                case "deferred_no_consent_surface":
                case "superseded":
                    break;
            }
            return {
                settings: O,
                fetchSucceeded: true,
                resolution: "applied"
            };
        }
        uut(O, {
            verified: true
        });
        if (!s) {
            await ee();
            if (H(S)) {
                return {
                    settings: null,
                    fetchSucceeded: false,
                    resolution: "reset"
                };
            }
        }
        xAr(O);
        await Z(h.consentIdentity, O, e.storageV5, e.credentials);
        if (H(S)) {
            return {
                settings: null,
                fetchSucceeded: false,
                resolution: "reset"
            };
        }
        await ve({}, e.storageV5, h.signature);
        t("Remote settings: Saved empty sentinel (404 response)");
        g("remote_managed_settings_pull", {
            status: b("no_content")
        });
        return {
            settings: O,
            fetchSucceeded: true,
            resolution: "none"
        };
    } catch  {
        if (H(S)) {
            return {
                settings: null,
                fetchSucceeded: false,
                resolution: "reset"
            };
        }
        m("remote_managed_settings_pull", "remote_managed_settings_unexpected");
        let failure = {
            errorKind: "unknown_error",
            message: "Unexpected error while applying remote settings"
        };
        if (r) {
            t("Remote settings: Using stale cache after error");
            uut(r);
            return {
                settings: r,
                fetchSucceeded: false,
                failure,
                resolution: "failed"
            };
        }
        return {
            settings: null,
            fetchSucceeded: false,
            failure,
            resolution: "failed"
        };
    }
}
function J(e) {
    if (!KA()) {
        let reason = gUe();
        if (reason) {
            fzn({
                state: "ineligible",
                reason
            });
        }
        return;
    }
    let n = xe() !== undefined;
    if (e.fetchSucceeded) {
        fzn({
            state: "ok",
            hasSettings: e.settings !== null && Object.keys(e.settings).length > 0
        });
        if (n) {
            Pr();
        }
        return;
    }
    if (e.failure) {
        let r = e.settings !== null && Object.keys(e.settings).length > 0;
        fzn(r ? {
            state: "stale_cache",
            failure: e.failure,
            transportEnvWithheld: !ay()
        } : {
            state: "failed",
            failure: e.failure
        });
        if (n || e.failure.rulings !== undefined) {
            Pr();
        }
    }
}
function xe() {
    let e = xP();
    if (e?.state === "failed" || e?.state === "stale_cache") {
        return e.failure.rulings;
    }
}
async function ljt(e, n, r) {
    Ae();
    Nbs(ht);
    let s = M();
    if (KA() && !s.loadingCompletePromise) {
        s.createBarrier();
    }
    let s_fetchSettledResolve = s.fetchSettledResolve;
    let R = BSe();
    let hadCache = $b() !== null;
    if (hadCache && s.loadingCompleteResolve) {
        s.releaseLoadBarrier();
    }
    let awaited = r?.startupAwaited === true;
    if (hadCache && !awaited) {
        q5("settings", {
            source: "cache",
            hadCache,
            awaited
        });
    }
    let h = {};
    let E = "error";
    let w = awaited ? fbr("settings") : null;
    try {
        let P = await ce({
            ...r,
            showSecurityDialog: e,
            storageV5: n,
            cycleFacts: h
        });
        let { settings, fetchSucceeded } = P;
        E = De(P);
        if (BSe() === R) {
            J(P);
        }
        if (BSe() === R && KA() && !Kk() && !s5e()) {
            Ke(e, n, r?.credentials);
        }
        if (settings !== null) {
            V();
        }
        return fetchSucceeded;
    } finally{
        Le(s_fetchSettledResolve);
        if (h.outcomeReason !== undefined) {
            ae = h.outcomeReason;
        }
        q5("settings", {
            source: E,
            hadCache,
            awaited,
            fetchMs: h.fetchMs
        });
        w?.("completed");
    }
}
function ht() {
    let e = gUe();
    let n = KA() ? ae : KBn(rZt(e));
    return {
        settings_outcome_reason: pe(n),
        settings_ineligible_reason: pe(e)
    };
}
function De({ resolution, settings }) {
    switch(resolution){
        case "applied":
            if (settings !== null && Object.keys(settings).length > 0) {
                return "fetch";
            }
            return "none";
        case "none":
            return "none";
        case "local":
            return "cache";
        case "failed":
        case "ruled_empty":
        case "no_consent_surface":
            return "error";
        case "reset":
        case "consent_superseded":
            return "superseded";
        case "rejected":
            return "rejected";
        case "deferred":
            return "deferred";
        case "ineligible":
            return "ineligible";
    }
}
function Le(e) {
    let n = M();
    if (n.fetchSettledResolve && n.fetchSettledResolve === e) {
        n.releaseBarrier();
    }
}
async function POe(e, n, r, s) {
    return (await Nhn(e, n, r, s)).fetchSucceeded;
}
const mt = 5000;
async function zjr(e, n, r) {
    let s;
    let y = new Promise((resolve)=>{
        s = he(()=>resolve("consent_pending"));
    });
    let S = fbr("settings", {
        supersede: true
    });
    let R = Nhn(e, n, r, {
        startupAwaited: true,
        callerRecordsBarrier: true
    }).then(({ fetchSucceeded })=>{
        if (fetchSucceeded) {
            return "refreshed";
        }
        return "failed";
    }, (C)=>{
        c(C);
        return "failed";
    });
    try {
        let C = await Ge(Promise.race([
            R,
            y
        ]), mt);
        S(C === undefined ? "timed_out" : "completed");
        if (C === undefined) {
            f("remote_managed_settings_startup_await", "deadline_expired");
            return "timed_out";
        }
        return C;
    } finally{
        s?.();
        S("completed");
    }
}
async function Nhn(e, n, r, s) {
    let y = s?.startupAwaited === true;
    Fhn();
    sY();
    let S = BSe();
    let R = M();
    let C = R.detachBarrier();
    if (!KA()) {
        R.prefetch.clear();
        C?.();
        J({
            settings: null,
            fetchSucceeded: true,
            resolution: "ineligible"
        });
        q5("settings", {
            source: "ineligible",
            hadCache: false,
            awaited: y
        });
        V();
        ITr(()=>V8().settings);
        return {
            fetchSucceeded: true
        };
    }
    Ayt();
    let R_fetchSettledResolve = R.fetchSettledResolve;
    if (C) {
        if (R.fetchSettledPromise) {
            R.fetchSettledPromise.then(C);
        } else {
            C();
        }
    }
    let h;
    let E;
    let w = {};
    let P = "error";
    let F = y && !s?.callerRecordsBarrier ? fbr("settings", {
        supersede: true
    }) : null;
    try {
        E = await ce({
            showSecurityDialog: e,
            storageV5: n,
            credentials: r,
            startupAwaited: y,
            cycleFacts: w
        });
        P = De(E);
        h = {
            fetchSucceeded: E.fetchSucceeded,
            ...E.failure && {
                failure: E.failure
            }
        };
    } finally{
        Le(R_fetchSettledResolve);
        if (w.outcomeReason !== undefined) {
            ae = w.outcomeReason;
        }
        q5("settings", {
            source: P,
            hadCache: w.hadCache === true,
            awaited: y,
            fetchMs: w.fetchMs
        });
        F?.("completed");
    }
    t("Remote settings: Refreshed after auth change");
    if (BSe() !== S) {
        t("Remote settings: Refresh superseded by a login/logout reset; not notifying");
        return h;
    }
    J(E);
    if (!Kk()) {
        Ke(e, n, r);
    }
    V();
    return h;
}
function V() {
    try {
        KEo();
        Pa.notifyChange("policySettings");
    } catch (error) {
        c(error);
    }
}
async function ee() {
    try {
        let [{ applyConfigEnvironmentVariables, applySafeConfigEnvironmentVariables }, { checkHasTrustDialogAccepted }, { captureAdmin3PSteeringSnapshot }] = await Promise.all([
            import("/$bunfs/root/chunk-6m00yfqj.js"),
            import("/$bunfs/root/chunk-edz5qxx7.js"),
            import("/$bunfs/root/chunk-0g7b76qq.js")
        ]);
        if (checkHasTrustDialogAccepted()) {
            applyConfigEnvironmentVariables();
        } else {
            applySafeConfigEnvironmentVariables();
            let [{ clearProxyCache, configureGlobalAgents }, { clearCACertsCache, loadExtraCACerts }, { clearMTLSCache, loadMTLSClientMaterial }] = await Promise.all([
                import("/$bunfs/root/chunk-g1ar6avr.js"),
                import("/$bunfs/root/chunk-3h8naf48.js"),
                import("/$bunfs/root/chunk-985szz8v.js")
            ]);
            clearProxyCache();
            clearCACertsCache();
            clearMTLSCache();
            await Promise.all([
                loadExtraCACerts(),
                loadMTLSClientMaterial()
            ]);
            configureGlobalAgents();
        }
        captureAdmin3PSteeringSnapshot();
    } catch (error) {
        c(error);
    }
}
function $hn(e) {
    let [n] = l5e(e?.slice(0, 1) ?? []);
    if (!n || !e) {
        return "";
    }
    let r = e.length - 1;
    return ` (${n.path}: ${n.message}${r > 0 ? `, and ${r} more` : ""})`;
}
function re(url) {
    let { origin, pathname } = new URL(url);
    return `${origin}${pathname.replace(/\/$/, "")}`;
}
function W(url) {
    return `Claude Desktop runs Claude Code under your organization's policy from the gateway at ${re(url)}, but`;
}
function Gjr(e) {
    let n = eo();
    let r = n?.hostVerdict;
    if (!n || !r) {
        return;
    }
    if ("unresolvedReason" in r) {
        return `${W(n.url)} it could not be checked. ${r.unresolvedReason} If this keeps happening, contact your administrator.`;
    }
    if (r.verified) {
        return;
    }
    let s = r.reason ?? "it is not Anthropic-operated or inside your organization's network.";
    if (e) {
        return `Your organization requires managed settings, but the gateway at ${re(n.url)} is not an accepted source for them: ${s} Contact your administrator.`;
    }
    if (r.codeTabRulesUnanswered !== undefined) {
        return `${W(n.url)} Claude Code couldn't ask that gateway whether it has rules for this session (${r.codeTabRulesUnanswered}). Send your message again. This check runs because Claude Code on ${hostname()} doesn't take settings from that gateway: ${s}`;
    }
    if (r.hasCodeTabRules) {
        return `${W(n.url)} Claude Code on ${hostname()} doesn't take settings from that gateway: ${s}`;
    }
    if (r.hasCodeTabRules === false) {
        t(`[gateway] ${re(n.url)} is not accepted as a source of managed settings. It says that it has no Code tab rules for this person, so no warning is shown`);
        return;
    }
    He(`the gateway at ${n.url} is not an accepted source for them: ${s.replace(/\.\s*$/, "")}`);
}
function wXn(e) {
    let n = eo();
    if (!n || !O2n(n)) {
        return;
    }
    let r = W(n.url);
    let s = xP();
    let y = s?.state === "failed" || s?.state === "stale_cache" ? s.failure : undefined;
    if (y?.errorKind === "gateway_public_address") {
        return `${r} this machine is no longer reaching it from inside your organization's network (it may have left that network or VPN, or the gateway's name now resolves elsewhere), so the policy was not fetched. Reconnect to that network and start again, or contact your administrator.`;
    }
    if (y?.errorKind === "ruled_empty") {
        return `${r} none of the settings it served could be applied as written${$hn(y.rulings)}. Ask your administrator to fix them.`;
    }
    if (!e || y) {
        let S = y ? `: ${$St(y.errorKind, y.httpStatus)}` : "";
        return `${r} the policy could not be loaded from it${S}. Check your network connection, or contact your administrator.`;
    }
    vXn();
}
function vXn() {
    let e = eo();
    if (!e || !O2n(e)) {
        return;
    }
    let n = xP();
    if (n?.state === "ok" && !n.hasSettings) {
        He(`the gateway at ${e.url} has no Claude Code policy for this Desktop session (self-hosted gateway admins: set \`serve_to_desktop: true\` on this user's policy, or change \`cli\` to \`code\` in every policy)`);
    }
}
function He(e) {
    let n = `Starting without your organization's managed settings: ${e}.`;
    t(`Remote settings: ${n}`, {
        level: "warn"
    });
    tj(`${n}
`);
}
async function cjt(e) {
    try {
        if (await e()) {
            return {
                valid: true
            };
        }
    } catch (error) {
        c(error);
    }
    let n = xe();
    if (n !== undefined) {
        return {
            valid: false,
            message: `Your organization requires remote managed settings to load, but they could not be loaded. None of the settings the server returned could be applied as written${$hn(n)}; ask your administrator to fix them.`
        };
    }
    return {
        valid: false,
        message: `Your organization requires remote managed settings to load, but they could not be loaded. ${JS() ? "You can check your network connection or contact your admin." : "Run `claude auth login` to re-authenticate, check your network connection, or contact your administrator."}`
    };
}
async function yt(showSecurityDialog, storageV5, credentials) {
    if (!KA()) {
        return;
    }
    let s = $b();
    let y = s ? _(s) : null;
    let S = ay();
    let R = BSe();
    try {
        let C = await ce({
            background: true,
            showSecurityDialog,
            storageV5,
            credentials
        });
        if (BSe() !== R) {
            t("Remote settings: Background poll superseded by a login/logout reset; not notifying");
            return;
        }
        if (C.fetchSucceeded || C.failure?.errorKind === "ruled_empty") {
            J(C);
        }
        let v = $b();
        let E = (v ? _(v) : null) !== y;
        let w = !S && ay();
        if (E || w) {
            t(E ? "Remote settings: Changed during background poll" : "Remote settings: Confirmed by a background poll");
            V();
        }
    } catch  {}
}
function Ke(e, n, r) {
    let s = M();
    if (s.poller !== null) {
        return;
    }
    if (!KA()) {
        return;
    }
    let S = I$n(()=>void yt(e, n, r), Ze, {
        unref: true
    });
    s.startPoller(S);
    St(S);
}
function Fhn() {
    M().stopPoller();
}
export { ijt, Lhn, Njr, $jr, Tyt, Fjr, JGo, QGo, Ujr, ZGo, Bjr, e2o, jjr, Ayt, Wjr, _Xn, bXn, PU, GQe, Cyt, aEe, SXn, ajt, ljt, POe, zjr, Nhn, $hn, Gjr, wXn, vXn, cjt, Fhn };
