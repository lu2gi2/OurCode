import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { h8, ys, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a, Yn } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { si } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Db, rr, Vt, Du, GT, Xoe, y_ } from "/$bunfs/root/chunk-k3tkc302.js";
import { Lk, BB, Cg } from "/$bunfs/root/chunk-8yfbbt6t.js";
import { qhs, J4e, kw, pde } from "/$bunfs/root/chunk-eb0vnwc4.js";
import { vt, mde, FB, UB, VL, wc, gde, Xuo } from "/$bunfs/root/chunk-0vgmtssp.js";
import { vae } from "/$bunfs/root/chunk-gs3dthpm.js";
import { pb } from "/$bunfs/root/chunk-sqysdndt.js";
import { Ste } from "/$bunfs/root/chunk-axp6y0zg.js";
import { tSn } from "/$bunfs/root/chunk-gm0rqgsx.js";
import { cg, Xg, de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { SK, C4o } from "/$bunfs/root/chunk-7we8z6s5.js";
import { jbn } from "/$bunfs/root/chunk-e4sf42mb.js";
import { o, M, u, Ue, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { LP } from "/$bunfs/root/chunk-tb7m3r21.js";
function R(e, t) {
    if (typeof e === "string" || typeof t === "string") {
        return e === t;
    }
    return LP(e, t);
}
const E = 64;
function I({ url }) {
    if (typeof url === "string") {
        return Vt(url) ?? undefined;
    }
}
async function i7n(e, t) {
    let typeCapabilityReads = ee().typeCapabilityReads;
    let r = typeCapabilityReads.get(e);
    if (r !== undefined && (!t.toolUseId || r.toolUseId === t.toolUseId)) {
        return r.capabilities;
    }
    let s = Date.now();
    let d = await Ste(e, {
        signal: t.abortController.signal,
        credentials: t.credentials
    });
    let c = d.err === null ? d.detail : null;
    let capabilities = c === null || c.declaration === "malformed" ? null : c.capabilities;
    let whole = capabilities !== null && (c?.declaration === undefined || Object.keys(c.declaration).length === capabilities.length);
    if (VL(s)) {
        return null;
    }
    if (!typeCapabilityReads.has(e) && typeCapabilityReads.size >= E) {
        let m = typeCapabilityReads.keys().next().value;
        if (m !== undefined) {
            typeCapabilityReads.delete(m);
        }
    }
    typeCapabilityReads.set(e, {
        toolUseId: t.toolUseId,
        capabilities,
        whole
    });
    return capabilities;
}
function v2r(e) {
    return ee().typeCapabilityReads.get(e)?.whole === true;
}
function U_t(e) {
    return ee().typeCapabilityReads.get(e)?.capabilities?.includes("room") === true;
}
function a7n(e, t) {
    if (ys(t.agentContext)) {
        return;
    }
    if (bK(e, t)) {
        t.setAppState((n)=>f(n, t, (r)=>{
                if (r.artifactWatchApproved) {
                    return r;
                }
                return {
                    ...r,
                    artifactWatchApproved: true
                };
            }));
    }
}
const E2r = {
    get: {
        pages: false,
        cursor: "",
        none: ""
    },
    list: {
        pages: true,
        cursor: "page with a smaller `query.limit`",
        none: "a smaller read is the only way to see them"
    },
    query: {
        pages: true,
        cursor: "page with a smaller `query.limit`",
        none: "narrow with a `query.where`"
    },
    replayed: {
        pages: false,
        cursor: "",
        none: ""
    }
};
function k2r(e, t) {
    if (ys(e.agentContext)) {
        return;
    }
    e.setAppState((n)=>f(n, e, (r)=>{
            if (r.artifactReadPageDataApproved && (!t || r.artifactReadPageDataHumanApproved)) {
                return r;
            }
            return {
                ...r,
                artifactReadPageDataApproved: true,
                ...t && {
                    artifactReadPageDataHumanApproved: true
                }
            };
        }));
}
function bK(e, t) {
    return Reflect.get(e, _p) === true && cg(t) && !Nbn(t);
}
function T2r(e) {
    if (e.toolUseId === undefined) {
        return;
    }
    let t = ee();
    let { consentCheckScopes } = t;
    consentCheckScopes.delete(e.toolUseId);
    if (consentCheckScopes.size >= x) {
        let r = consentCheckScopes.keys().next().value;
        if (r !== undefined) {
            consentCheckScopes.delete(r);
            t.consentCheckScopesEvicted = true;
        }
    }
    consentCheckScopes.set(e.toolUseId, J4e());
}
var x = 256;
function Nbn(e) {
    if (e.toolUseId === undefined) {
        return false;
    }
    let t = ee();
    let n = t.consentCheckScopes.get(e.toolUseId);
    if (n === undefined) {
        return t.consentCheckScopesEvicted;
    }
    return n !== J4e();
}
function rzt(e) {
    return cg(e) && !si(de(e).mode);
}
function mMe(e, t) {
    return (e[Bg] ?? false) && de(t).mode === "plan" || D(e);
}
function D(e) {
    return Reflect.get(e, lI) === true;
}
function f(e, t, n) {
    if (Nbn(t)) {
        return e;
    }
    let { accountEpoch } = ee();
    if ((e.artifactConsentEpoch ?? 0) === accountEpoch) {
        return n(e);
    }
    return n({
        ...e,
        ...Object.fromEntries(qhs.map((s)=>[
                s,
                tSn[s]
            ])),
        artifactConsentEpoch: accountEpoch
    });
}
function A2r(e, t, n, slug) {
    return f(e, t, (s)=>({
            ...s,
            artifactPlanPublishConsentPaths: {
                ...s.artifactPlanPublishConsentPaths,
                [n]: {
                    slug
                }
            }
        }));
}
function C(e, t, n, r, s = ()=>true) {
    return f(e, t, (d)=>{
        if (n.every((l)=>N(d[l]?.[r], s(d[l]?.[r])))) {
            return d;
        }
        let c = {
            ...d
        };
        for (let l of n){
            c[l] = {
                ...c[l],
                [r]: s(d[l]?.[r])
            };
        }
        return {
            ...d,
            ...c
        };
    });
}
function N(e, t) {
    if (e === undefined || e === true || e === "script" || t === true || t === "script") {
        return e === t;
    }
    return R(e, t);
}
function y(e, t) {
    if (t) {
        return [
            `${e}ConsentSlugs`,
            `${e}HumanConsentSlugs`
        ];
    }
    return [
        `${e}ConsentSlugs`
    ];
}
function C2r(e, t, n) {
    if (ys(t.agentContext)) {
        return;
    }
    if (!bK(e, t) || wc(vt(n))) {
        return;
    }
    t.setAppState((r)=>C(r, t, y("artifactDbRead", mMe(e, t)), n));
}
function l7n(e, t) {
    if (ys(t.agentContext)) {
        return;
    }
    if (!bK(e, t)) {
        return;
    }
    let n = mMe(e, t);
    t.setAppState((r)=>f(r, t, (s)=>{
            if (s.artifactDbWriteApproved && (!n || s.artifactDbWriteHumanApproved)) {
                return s;
            }
            return {
                ...s,
                artifactDbWriteApproved: true,
                ...n && {
                    artifactDbWriteHumanApproved: true
                }
            };
        }));
}
function DU(e) {
    return e?.cowritten === true || e?.artifactKind === Lk;
}
function V6(e) {
    return e?.typeLocked === true || e?.typeLock != null;
}
function r$(e, t = wc(e)) {
    return t && V6(e) && e?.artifactKind !== Lk;
}
function B_t(e, t = wc(e)) {
    let n = FB(e);
    return r$(e, t) && n !== undefined && pb(n) === "first_party_type";
}
function R2r(e) {
    return e !== undefined && e.typeLock != null && B_t(e) && !gde(e) && e.capabilitiesUnknown !== true && e.capsReadNotFound !== true && mde(e) && BB(e.capabilities);
}
function Pze() {
    let e = ee();
    if (e.inheritedTypeGrantLatch === null) {
        e.inheritedTypeGrantLatch = Yn.CLAUDE_CODE_ARTIFACT_INHERITED_TYPE_GRANT ?? k("tengu_swirling_squid", false) === true;
        i("tengu_artifact_inherited_type_grant", {
            on: e.inheritedTypeGrantLatch
        });
    }
    return e.inheritedTypeGrantLatch;
}
function Ize(e, t, n, r = false) {
    if (ys(t.agentContext)) {
        return;
    }
    let s = vt(n);
    let d = Reflect.get(e, oM);
    let c = (S)=>typeof d === "object" && d !== null && Reflect.get(d, S) === true;
    let l = c("classifier") || de(t).mode === "auto" && !c("userOnly");
    if (!P(e, t) || c("once") || l || wc(s) && !DU(s) && !V6(s)) {
        return;
    }
    let _ = F(e, t) || r && IEe(t);
    let m = r && !sae(t);
    t.setAppState((S)=>C(S, t, [
            ...y("artifactAssetRead", _),
            ...m ? [
                "artifactOutsideOrgConsentSlugs"
            ] : []
        ], n));
}
function x2r(e, t) {
    if (t.length === 0 || ys(e.agentContext)) {
        return;
    }
    e.setAppState((n)=>t.reduce((acc, item)=>C(acc, e, [
                "artifactOutsideOrgConsentSlugs"
            ], item), n));
}
function P2r(e, t, n) {
    if (ys(t.agentContext)) {
        return;
    }
    if (!P(e, t) || sae(t) || de(t).mode === "auto" && !kw(I(e)) && !pde(n) || wc(vt(n))) {
        return;
    }
    t.setAppState((r)=>C(r, t, [
            "artifactReadConsentSlugs"
        ], n));
}
function j_t(e, t, n, r) {
    if (ys(t.agentContext)) {
        return;
    }
    if (!bK(e, t) || de(t).mode === "auto") {
        return;
    }
    Xuo(n, r);
    t.setAppState((s)=>C(s, t, y("artifactAssetUpload", mMe(e, t)), n));
}
function $bn(e, t) {
    return Reflect.get(e, PX) === "auto" && !IEe(t);
}
function Oze(e, t) {
    return e === "auto" && !ee().roomStoppedByUser.has(t);
}
function T({ queryTracking }) {
    if (queryTracking === undefined) {
        return undefined;
    }
    return `${queryTracking.chainId}:${queryTracking.depth}`;
}
function I2r(e, t, n) {
    let { roomArmAsked } = ee();
    if (n === undefined) {
        roomArmAsked.delete(t);
    } else {
        roomArmAsked.set(t, {
            ...n,
            at: T(e)
        });
    }
}
function O2r(e, t) {
    for (let [n, r] of ee().roomArmAsked){
        if (n === t) {
            continue;
        }
        if (e.keys.includes(r.key) || e.slug !== undefined && r.slug === e.slug) {
            return true;
        }
    }
    return false;
}
function M2r(e) {
    if (e !== undefined) {
        ee().roomArmAsked.delete(e);
    }
}
const Fbn = "path:*";
function c7n(e) {
    let t = ee();
    let n = T(e);
    for (let [r, s] of t.roomArmAsked){
        if (r === e.toolUseId) {
            continue;
        }
        let d = w(e.messages, r);
        if (d === undefined && s.at !== undefined && s.at === n) {
            continue;
        }
        t.roomArmAsked.delete(r);
        let c = d?.toolDenialKind;
        if (d === undefined || c === "user-rejected" || c === "permission-rule") {
            t.roomArmRefusedByUser.add(s.key);
            t.roomArmRefusedByUser.add(Fbn);
            if (s.slug !== undefined) {
                t.roomStoppedByUser.add(s.slug);
            }
        }
    }
}
function w(messages, t) {
    for(let n = messages.length - 1; n >= 0; n--){
        let r = messages[n];
        if (r?.type === "user" && Array.isArray(r.message.content) && r.message.content.some((s)=>s.type === "tool_result" && s.tool_use_id === t)) {
            return r;
        }
    }
}
function d7n(e, t, n) {
    if (ys(t.agentContext)) {
        return;
    }
    let r = Reflect.get(e, PX);
    if (r !== true && r !== "auto" || Xg(t)) {
        return;
    }
    let s = $bn(e, t) ? "classifier" : true;
    if (s === "classifier" && !Oze(de(t).mode, n)) {
        return;
    }
    t.setAppState((d)=>f(d, t, (c)=>{
            if (c.artifactRoomJoinConsentSlugs?.[n] === s || c.artifactRoomJoinConsentSlugs?.[n] === true) {
                return c;
            }
            return {
                ...c,
                artifactRoomJoinConsentSlugs: {
                    ...c.artifactRoomJoinConsentSlugs,
                    [n]: s
                }
            };
        }));
}
function Hj(e) {
    let threadId = "thread_id" in e && typeof e.thread_id === "string" ? e.thread_id : undefined;
    let replyText = "text" in e && typeof e.text === "string" ? e.text : undefined;
    let cursor = "cursor" in e && typeof e.cursor === "string" ? e.cursor : undefined;
    return {
        threadId,
        replyText,
        cursor
    };
}
function H2r(e, t) {
    let tid = t !== undefined && rr.test(t) ? t : "(invalid)";
    let audience = "viewers of this artifact (share status could not be confirmed)";
    if (e !== null) {
        let s = vt(e.slug);
        if (s !== undefined && s.probeFailed !== true) {
            audience = s.mode === "owner" ? "viewers of this artifact (not currently shared)" : `${UB(s)} (the artifact is shared)`;
        }
    }
    return {
        tid,
        audience
    };
}
function dte(e) {
    let t = (n)=>{
        let r = e[n];
        if (typeof r === "string") {
            return r;
        }
    };
    return {
        assetId: t("asset_id"),
        outDir: t("out_dir"),
        after: t("after")
    };
}
function ozt(e, max = 1024) {
    return GT(Du(Cg(e, {
        max
    })) ?? "").replace(y_, " ").replace(Xoe, " ");
}
function Zme(e, t = 1024) {
    return `"${ozt(e, t).replace(/\\$/, "\\ ")}"`;
}
function D2r(e, t) {
    let n = e.trimEnd().replace(/\.$/, "");
    if (n === "") {
        let r = t.replace(/^[\s;,\u2014-]+/, "");
        return r.charAt(0).toUpperCase() + r.slice(1);
    }
    return `${n}${t}`;
}
function ege(e) {
    if (e.behavior !== "ask") {
        return -1;
    }
    let e_decisionReason = e.decisionReason;
    switch(e_decisionReason?.type){
        case "rule":
            return 4;
        case "safetyCheck":
            if (e_decisionReason.classifierApprovable) {
                return 1;
            }
            return 3;
        case "mode":
            return 2;
        default:
            return 0;
    }
}
var _p = "__artifactConsentAskCanReachUser";
const W_t = "__artifactWatchWouldArmReplies";
var Bg = "__artifactPlanConsentAsk";
var lI = "__artifactUserOnlyConsentAsk";
const Ubn = "__artifactVerifyTargetPinned";
function H7e(e) {
    if (typeof e.url === "string") {
        return Vt(e.url);
    }
    return ee().verify.lastPublish ?? null;
}
const q6 = "__artifactPublishTarget";
const Mze = "__artifactRoutineUnaskedFirstPublish";
const szt = "__artifactPublishSourcePin";
const h = p(()=>u({
        path: o(),
        kind: U([
            "file",
            "absent",
            "network"
        ]),
        redirected: M(),
        sha256: o().optional(),
        root: u({
            spelling: o(),
            base: o(),
            redirected: M().optional()
        }).optional(),
        copies: o().optional(),
        minted: o().optional(),
        type: Ue([
            o(),
            A(false)
        ]),
        shim: M().optional()
    }));
function u7n(e) {
    let t = Reflect.get(e, szt);
    if (t === undefined) {
        return;
    }
    let n = h().safeParse(t);
    if (n.success) {
        return n.data;
    }
    return null;
}
const v = p(()=>h().omit({
        type: true
    }));
function p7n(e) {
    let t = Reflect.get(e, szt);
    if (t === undefined) {
        return "source_pin_missing";
    }
    if (typeof t === "object" && t !== null && Reflect.get(t, "type") === undefined && v().safeParse(t).success) {
        return "source_pin_stale_build";
    }
    return "source_pin_unreadable";
}
var PX = "__artifactRoomJoinDisclosed";
const gMe = "__artifactTypeCreatePin";
const hMe = "__artifactAssetUploadPin";
const Hze = "__artifactRoomSendTarget";
var oM = "__artifactAssetTargetPin";
const izt = "__artifactReadTargetPin";
const z_t = "__artifactDeletePin";
const G_t = "__artifactDeleteTarget";
const dE = "__artifactDisplayTarget";
const O = "__artifactEndpointBodyFile";
const g = "__artifactConsentPin";
const f7n = "__artifactSyncTargetPin";
function Yb(action, t) {
    return {
        [g]: t === null ? null : {
            action,
            slug: t.slug
        }
    };
}
const b = [
    q6,
    hMe,
    Hze,
    oM,
    izt,
    z_t,
    g,
    f7n
];
function K6(e, t) {
    return b.some((n)=>n !== t && Reflect.get(e, n) !== undefined);
}
function D7e(e) {
    return b.some((t)=>Reflect.get(e, t) !== undefined);
}
function IX(e, t, n) {
    let r = Reflect.get(e, g);
    return typeof r === "object" && r !== null && Reflect.get(r, "action") === t && Reflect.get(r, "slug") === n;
}
function KG(e, t, n) {
    return K6(e, g) || Reflect.get(e, g) !== undefined && !IX(e, t, n);
}
const azt = "__artifactDbReadTargetPin";
const lzt = "__artifactDbWriteSourcePin";
const G = "__artifactHandlersPin";
const L = "__artifactLiveDocStandIn";
const V_t = "__artifactAsk";
const j = [
    _p,
    L,
    Bg,
    lI,
    W_t,
    ...b,
    PX,
    gMe,
    Ubn,
    szt,
    azt,
    lzt,
    G,
    G_t,
    dE,
    O,
    jbn,
    V_t,
    Mze
];
function L2r(e) {
    return typeof e === "object" && e !== null && j.some((t)=>Reflect.get(e, t) !== undefined);
}
function OX(e, t, n, r, s = false) {
    if (t.toolUseId !== undefined) {
        ee().shareStatus.noticeReadSights[e].note(t.toolUseId, n, r && (s || cg(t)));
    }
}
function oae(e, t, n, r) {
    if (t.toolUseId === undefined) {
        return r;
    }
    return ee().shareStatus.noticeReadSights[e].take(t.toolUseId, n) === true;
}
function N2r(e, t) {
    if (ys(t.agentContext)) {
        return false;
    }
    return (e[Bg] ?? false) && de(t).mode === "plan" && cg(t);
}
function Dj(e) {
    return vae({
        agentId: e.agentId,
        agentType: e.agentContext?.agentType,
        isNonInteractiveSession: e.options.isNonInteractiveSession
    });
}
function L7e(e) {
    return Boolean(a.CLAUDE_CODE_REMOTE) || SK(Dj(e).publishContext);
}
function IEe(e) {
    if (e.toolUseId === undefined) {
        return false;
    }
    let t = e.toolDecisions?.get(e.toolUseId)?.source;
    return t === "user_temporary" || t === "user_permanent";
}
function sae(e) {
    if (e.toolUseId === undefined) {
        return false;
    }
    let t = e.toolDecisions?.get(e.toolUseId);
    return t !== undefined && t.decision !== "reject" && t.source !== "user_temporary" && t.source !== "user_permanent";
}
function P(e, t) {
    return bK(e, t) && !Xg(t);
}
function F(e, t) {
    return mMe(e, t) && !sae(t);
}
function Bbn(e) {
    if (L7e(e) && !ys(e.agentContext)) {
        return C4o;
    }
}
function m7n(e) {
    return h8(e) && !Db(e);
}
export { i7n, v2r, U_t, a7n, E2r, k2r, bK, T2r, Nbn, rzt, mMe, A2r, C2r, l7n, DU, V6, r$, B_t, R2r, Pze, Ize, x2r, P2r, j_t, $bn, Oze, I2r, O2r, M2r, Fbn, c7n, d7n, Hj, H2r, dte, ozt, Zme, D2r, ege, _p, W_t, Bg, lI, Ubn, H7e, q6, Mze, szt, u7n, p7n, PX, gMe, hMe, Hze, oM, izt, z_t, G_t, dE, f7n, Yb, K6, D7e, IX, KG, azt, lzt, V_t, L2r, OX, oae, N2r, Dj, L7e, IEe, sae, Bbn, m7n };
