import { Ne, vs } from "/$bunfs/root/chunk-j27d47mr.js";
import { Ee, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { QZ } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import { JQ, rF, lbe } from "/$bunfs/root/chunk-1eajkkr7.js";
import { Wa } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { dp, ou, yPe, ZY, K1, Vv, up, JAo, Y1, eCo } from "/$bunfs/root/chunk-x47nahfr.js";
import { cSe, Id, i3e } from "/$bunfs/root/chunk-k3tkc302.js";
import { ee, UNe } from "/$bunfs/root/chunk-499b1h1a.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { m0, cn } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { S_, fe, DTr, Ap, XFe, cse, $3e } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { CRe, kr, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Axt, Cxt, IE } from "/$bunfs/root/chunk-8yfbbt6t.js";
import { yxt, PCe, vt } from "/$bunfs/root/chunk-0vgmtssp.js";
import { Yhs } from "/$bunfs/root/chunk-0bdyt27e.js";
import { r$e, Ibr, coe, Jh, K5, bQt, sn, s$e, Fp, fPt, mS } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { Qg, XQ } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { fde, HNn } from "/$bunfs/root/chunk-0xz61zj0.js";
import { l7 } from "/$bunfs/root/chunk-xv9n7kza.js";
const G = "/_warmup";
const timeout = 3000;
const V = 600000;
const maxContentLength = 262144;
function jhs(e) {
    let n = ee();
    return n.contentHostEgressDenied.has(e.env) || n.contentHostEgressUnanswered.has(i3e(e));
}
function J(e) {
    let n = ee().contentHostEgressProbed.get(e);
    return n !== undefined && Date.now() - n < V;
}
async function Y4e(e, n) {
    let r = ee();
    let o = i3e(e);
    if (Ce()) {
        r.contentHostEgressProbed.delete(o);
        r.contentHostEgressUnanswered.add(o);
        return;
    }
    if (r.contentHostEgressDenied.has(e.env)) {
        r.contentHostEgressProbed.delete(o);
        r.contentHostEgressUnanswered.add(o);
        return;
    }
    if (J(o)) {
        return;
    }
    let s = r.contentHostEgressInFlight.get(o);
    if (s !== undefined) {
        return s.catch((l)=>{
            if (n.aborted) {
                throw l;
            }
            return Y4e(e, n);
        });
    }
    let u = z(e, o, n).finally(()=>{
        r.contentHostEgressInFlight.delete(o);
    });
    r.contentHostEgressInFlight.set(o, u);
    return u;
}
async function z(e, n, r) {
    let o = ee();
    let s = ()=>{
        o.contentHostEgressUnanswered.delete(n);
        o.contentHostEgressProbed.set(n, Date.now());
    };
    let u = (p)=>{
        t(`[artifact] egress probe of ${n}: ${p}; reading the host as unreachable for this check`);
        o.contentHostEgressProbed.delete(n);
        o.contentHostEgressUnanswered.add(n);
    };
    let l = ()=>{
        o.contentHostEgressProbed.delete(n);
        o.contentHostEgressUnanswered.add(n);
        o.contentHostEgressDenied.add(e.env);
    };
    let c;
    try {
        c = await Wa.get(`${n}${G}`, {
            signal: AbortSignal.any([
                r,
                AbortSignal.timeout(timeout)
            ]),
            timeout,
            maxRedirects: 0,
            maxContentLength,
            responseType: "text",
            validateStatus: ()=>true
        });
    } catch (error) {
        if (r.aborted) {
            throw error;
        }
        if (lbe(error)) {
            return l();
        }
        return u(QZ(error) ? "an answer larger than the cap" : "no answer");
    }
    if (rF(c.status, c.headers)) {
        return l();
    }
    let h = ()=>JQ(c.headers, c.data, (p)=>p);
    if (!(c.status >= 200 && c.status < 300 || c.status === 403 && PCe(c.headers, h()) || c.status === 404 && yxt(c.headers, h()))) {
        return u(`unrecognised HTTP ${c.status}`);
    }
    return s();
}
const _ = "classifier";
const A = "person";
const Whs = "classifier";
function VS(e) {
    switch(e.operation){
        case "delete":
            return f("delete", "person", "this_call", "known");
        case "change_access":
            return f("access_change", "person", "this_call", "known");
        case "standing_job":
            if (e.turnStartedByHuman) {
                return f("standing_job", "classifier", "artifact", "known");
            }
            return f("standing_job", "classifier", "this_call", "unattended");
        case "write":
            {
                if (!e.turnStartedByHuman) {
                    if ((e.routineWrite === true || e.commentWrite === true) && e.public === false && e.canWrite === true && e.invitedByOtherOrg !== true) {
                        return {
                            ask: false,
                            foreignRead: false
                        };
                    }
                    return f("public_change", "classifier", "this_call", "unattended");
                }
                if (e.public === true) {
                    return f("public_change", "classifier", "artifact", "known");
                }
                if (e.public === undefined) {
                    return f("public_change", "classifier", "this_call", "facts_missing", "public");
                }
                if (e.invitedByOtherOrg === true) {
                    return {
                        ...f("public_change", "classifier", "artifact", "known"),
                        about: "someone_else"
                    };
                }
                return {
                    ask: false,
                    foreignRead: false
                };
            }
        case "read":
            {
                if (e.owned === true) {
                    return {
                        ask: false,
                        foreignRead: false
                    };
                }
                if (e.outsideOrg === true) {
                    return {
                        ...f("foreign_read", A, e.turnStartedByHuman ? "artifact" : "this_call", "known"),
                        about: "outside_org"
                    };
                }
                if (e.owned === undefined) {
                    return f("foreign_read", _, "this_call", "facts_missing", "owned");
                }
                if (e.networkOff === undefined) {
                    return f("foreign_read", _, "this_call", "facts_missing", "networkOff");
                }
                if (e.networkOff) {
                    return f("foreign_read", _, e.turnStartedByHuman ? "artifact" : "this_call", "known");
                }
                return {
                    ask: false,
                    foreignRead: true
                };
            }
    }
}
const Q = true;
function zhs(e) {
    if (!Q || e.public === false) {
        return {
            ask: false,
            foreignRead: false
        };
    }
    if (e.public === true) {
        return f("public_change", "classifier", "this_call", "known");
    }
    return f("public_change", "classifier", "this_call", "facts_missing", "public");
}
function f(e, answeredBy, remember, basis, missing) {
    return {
        ask: true,
        class: e,
        answeredBy,
        remember,
        basis,
        ...missing !== undefined && {
            missing
        }
    };
}
function xNn(e) {
    return e.ask && e.remember === "artifact";
}
function Vit(e) {
    if (e.endpoint) {
        return `${e.class}:endpoint`;
    }
    return e.class;
}
function SV(e, n) {
    return ee().askClassConsent.has(g(e, n));
}
function Ghs(e, n, r = false) {
    let o = ee();
    o.askClassConsent.add(g(e, n));
    if (r) {
        o.askClassPersonConsent.add(g(e, n));
    }
}
function K_e(e, n, r = false) {
    let o = Vit(e);
    if (e.informedOnly) {
        return Puo(n);
    }
    if (e.answeredBy === "person" || r) {
        return fxt(o, n);
    }
    return SV(o, n);
}
function Vhs(e) {
    ee().askClassOutsideOrgConsent.add(g("foreign_read", e));
}
function Puo(e) {
    return ee().askClassOutsideOrgConsent.has(g("foreign_read", e));
}
const X = 512;
function X4e(e, n, r) {
    if (e.toolUseId === undefined) {
        return;
    }
    let askNamedOtherOrg = ee().askNamedOtherOrg;
    let s = askNamedOtherOrg.get(e.toolUseId);
    let u = r ? n : [];
    let l = s === undefined ? u : u.filter((c)=>s.includes(c));
    askNamedOtherOrg.delete(e.toolUseId);
    askNamedOtherOrg.set(e.toolUseId, l);
    if (askNamedOtherOrg.size > X) {
        let c = askNamedOtherOrg.keys().next().value;
        if (c !== undefined) {
            askNamedOtherOrg.delete(c);
        }
    }
}
function l_r(e) {
    if (e.toolUseId !== undefined) {
        ee().askNamedOtherOrg.delete(e.toolUseId);
    }
}
function qit(e, n) {
    return e.toolUseId !== undefined && (ee().askNamedOtherOrg.get(e.toolUseId) ?? []).includes(n);
}
function fxt(e, n) {
    return ee().askClassPersonConsent.has(g(e, n));
}
const Z = [
    "artifactDbReadConsentSlugs",
    "artifactDbReadHumanConsentSlugs",
    "artifactReadConsentSlugs",
    "artifactAssetUploadConsentSlugs",
    "artifactAssetUploadHumanConsentSlugs",
    "artifactAssetReadConsentSlugs",
    "artifactAssetReadHumanConsentSlugs",
    "artifactOutsideOrgConsentSlugs",
    "artifactHandlersReadConsentSlugs",
    "artifactHandlersReadHumanConsentSlugs",
    "artifactHandlersWriteConsentSlugs",
    "artifactHandlersWriteHumanConsentSlugs"
];
const qhs = [
    ...Z,
    "artifactRoomJoinConsentSlugs",
    "artifactPlanPublishConsentPaths",
    "artifactWatchApproved",
    "artifactDbWriteApproved",
    "artifactDbWriteHumanApproved",
    "artifactReadPageDataApproved",
    "artifactReadPageDataHumanApproved"
];
const te = Object.freeze({});
function Y_e(e) {
    if ((e.artifactConsentEpoch ?? 0) === ee().accountEpoch) {
        return e;
    }
    return te;
}
function W5(e, n, r) {
    return Y_e(e)[n]?.[r] === true;
}
function PNn(e, n) {
    return W5({
        artifactConsentEpoch: e.consentEpoch.get(),
        artifactReadConsentSlugs: e.sharedReadConsent.get()
    }, "artifactReadConsentSlugs", n);
}
function J4e() {
    let { accountEpoch, conversationEpoch } = ee();
    return `${accountEpoch}:${conversationEpoch}`;
}
function g(e, n) {
    return `${J4e()}:${e}:${n}`;
}
const m = " · web fetch, design sync and Channels wait for it";
function S() {
    let e = mS();
    if (e === null) {
        return "nothing";
    }
    if (e === r$e) {
        return "unrestricted";
    }
    return "stale_cache";
}
function INn() {
    let reason = K5();
    if (reason !== undefined) {
        return {
            state: "ineligible",
            reason
        };
    }
    let n = coe();
    let hasCache = mS() !== null;
    let egressKeysWithheld = bQt("allow_web_fetch");
    if (n === null) {
        return {
            state: "pending",
            hasCache,
            egressKeysWithheld
        };
    }
    return {
        state: "settled",
        outcome: n,
        served: S(),
        egressKeysWithheld
    };
}
function ne(reason) {
    switch(reason){
        case "third_party_provider":
            return "not fetched: this session doesn't connect to the Anthropic API directly (Bedrock, Vertex, Foundry, or a gateway)";
        case "custom_base_url":
            return "not fetched with a custom ANTHROPIC_BASE_URL";
        case "no_auth":
            return "not fetched: no API key or claude.ai sign-in for the policy lookup (apiKeyHelper keys are not used for it)";
        case "oauth_no_inference_scope":
            return "not fetched: this sign-in lacks the inference scope";
        case "prosumer_oauth":
            return "not applicable to Pro and Max accounts";
    }
}
function re(errorCode, httpStatus, host, retrying) {
    let s = retrying ? "" : " · Retried hourly while Claude Code runs; restart to retry now";
    switch(errorCode){
        case "auth_failed":
            if (httpStatus === 403) {
                return `${host}, or a proxy in front of it, refused the request (HTTP 403) \xB7 Fix: if you use a web proxy make sure it allows ${host}; if your organization restricts by IP, check this machine is allowed${s}`;
            }
            if (httpStatus === 401 && retrying) {
                return `${host} rejected this session's sign-in (HTTP 401) while it was being refreshed \xB7 Claude Code is retrying with the refreshed sign-in`;
            }
            if (httpStatus) {
                return `${host} rejected this session's credentials (HTTP ${httpStatus}) \xB7 Fix: sign in again or check the API key this session uses`;
            }
            return "Couldn't attach credentials to the request · Fix: sign in, set the API key this session should use, or check your workload-identity setup";
        case "timeout":
            return `${host} took too long to answer \xB7 Fix: check your network or proxy${s}`;
        case "network_error":
            return `Couldn't reach ${host} \xB7 Fix: check your network or proxy${s}`;
        case "parse_failed":
            return `The answer from ${host} couldn't be read, either because a proxy replaced it or because this version of Claude Code doesn't understand it \xB7 Fix: check your proxy settings, or update Claude Code${s}`;
        case "spurious_304":
            return `${host} confirmed a cached copy from a previous sign-in, which this session can't use${s}`;
        case "stale_tunnel_credential":
            return `The machine running claude ssh changed credentials while ${host} was answering, so that answer wasn't used${s}`;
        case "request_failed":
            if (httpStatus === 404) {
                return `The request for ${cSe} on ${host} got a 404, which usually means a proxy or gateway between you and the API isn't forwarding that path \xB7 Fix: ask your network admin to allow it${s}`;
            }
            if (httpStatus === 304) {
                return `A caching proxy between you and ${host} answered in place of the API (HTTP 304) \xB7 Fix: ask your network admin to stop caching ${cSe}${s}`;
            }
            if (httpStatus === 407) {
                return `Your proxy asked for authentication before it would forward the request to ${host} (HTTP 407) \xB7 Fix: check your proxy credentials${s}`;
            }
            if (httpStatus) {
                return `HTTP ${httpStatus} on the request to ${host}${s}`;
            }
            return `Couldn't complete the request to ${host}; if a proxy intercepts TLS, its certificate must be trusted (NODE_EXTRA_CA_CERTS) \xB7 Fix: check your network or proxy${s}`;
    }
}
function ONn(e) {
    switch(e.state){
        case "ineligible":
            return ne(e.reason);
        case "pending":
            if (e.hasCache) {
                return `Using the copy on disk \xB7 not refreshed yet this session${e.egressKeysWithheld ? m : ""}`;
            }
            return `Not loaded yet${e.egressKeysWithheld ? m : ""} \xB7 if this persists, check your network or proxy`;
        case "settled":
            {
                let { outcome } = e;
                if (outcome.success) {
                    return `Loaded from ${outcome.host}`;
                }
                let r = re(outcome.errorCode, outcome.httpStatus, outcome.host, outcome.retrying);
                let o = outcome.retrying ? " yet, still retrying" : "";
                let s = e.egressKeysWithheld ? ", web fetch, design sync, Channels" : "";
                switch(e.served){
                    case "stale_cache":
                        return `Couldn't refresh${o} \xB7 using the last copy on this machine${e.egressKeysWithheld ? m : ""} \xB7 ${r}`;
                    case "unrestricted":
                        if (e.egressKeysWithheld) {
                            return `Couldn't load${o} \xB7 no restrictions applied this session, except that web fetch, design sync and Channels stay off until it loads \xB7 ${r}`;
                        }
                        return `Couldn't load${o} \xB7 no restrictions applied this session \xB7 ${r}`;
                    case "nothing":
                        return `Couldn't load${o} \xB7 features that must check it first (Remote Control, cloud sessions, /feedback${s} and others) stay off, and some need a restart once it loads \xB7 ${r}`;
                }
            }
    }
}
function Khs(e) {
    switch(e.state){
        case "pending":
            return false;
        case "settled":
            return !e.outcome.success;
        case "ineligible":
            return e.reason === "third_party_provider" || e.reason === "custom_base_url";
    }
}
const oe = [
    "policySettings",
    "flagSettings",
    "userSettings"
];
const ie = [
    "localSettings",
    "projectSettings"
];
function L(e) {
    let offSources = [];
    if (e.envDisableVar !== undefined && ae(e.envDisableVar)) {
        offSources.push({
            layer: "env",
            via: "envVar"
        });
    }
    let r;
    for (let l of oe){
        let c = O(l, e);
        v(offSources, l, l === "policySettings" ? [
            ...c,
            ...cse()
        ] : c, e);
        if (r === undefined && c.some((h)=>h?.[e.enableKey] === true) && (l !== "policySettings" || $3e())) {
            r = l;
        }
    }
    let lockedAboveUser = offSources.some((l)=>l.layer === "env" || l.layer === "policySettings" || l.layer === "flagSettings");
    for (let l of ie){
        v(offSources, l, O(l, e), e);
    }
    let s = offSources.some((l)=>l.layer === "localSettings" || l.layer === "projectSettings");
    return {
        enabled: offSources.length === 0 && (e.defaultOn || r !== undefined),
        decidedBy: offSources[0]?.layer ?? r ?? "default",
        offSources,
        lockedAboveUser,
        userControllable: !lockedAboveUser && !s && cn("userSettings")
    };
}
function O(e, n) {
    if (e === "policySettings") {
        return [
            ...Ap(),
            fe("policySettings")
        ];
    }
    if (!cn(e)) {
        return [];
    }
    if (e === "localSettings") {
        return [
            fe(e),
            DTr()
        ];
    }
    let r = fe(e);
    if (e === "projectSettings" && se(r, n) && cn("userSettings") && S_()) {
        return [];
    }
    return [
        r
    ];
}
function se(e, n) {
    return e?.[n.enableKey] !== undefined || n.legacyDisableKey !== undefined && e?.[n.legacyDisableKey] !== undefined;
}
function v(offSources, layer, r, o) {
    if (r.some((u)=>u?.[o.enableKey] === false)) {
        offSources.push({
            layer,
            via: "enableKey"
        });
    }
    let o_legacyDisableKey = o.legacyDisableKey;
    if (o_legacyDisableKey !== undefined && r.some((u)=>u?.[o_legacyDisableKey] === true)) {
        offSources.push({
            layer,
            via: "legacyDisableKey"
        });
    }
}
function ae(envDisableVar) {
    if (a[envDisableVar] || Ne(E(Qg(), envDisableVar)) || Ne(XFe(envDisableVar)) || Ne(E(XQ(), envDisableVar))) {
        return true;
    }
    for (let n of [
        "flagSettings",
        "userSettings"
    ]){
        if (cn(n) && Ne(E(fe(n)?.env, envDisableVar))) {
            return true;
        }
    }
    return false;
}
function E(e, envDisableVar) {
    if (e === undefined) {
        return;
    }
    if (envDisableVar in e) {
        return e[envDisableVar];
    }
    let r = T.get(e);
    if (r?.has(envDisableVar)) {
        return r.get(envDisableVar);
    }
    let o = Object.entries(e).find(([s])=>s.toUpperCase() === envDisableVar)?.[1];
    if (Object.isFrozen(e)) {
        if (r) {
            r.set(envDisableVar, o);
        } else {
            T.set(e, new Map([
                [
                    envDisableVar,
                    o
                ]
            ]));
        }
    }
    return o;
}
var T = new WeakMap;
const F = {
    enableKey: "enableArtifact",
    legacyDisableKey: "disableArtifact",
    envDisableVar: "CLAUDE_CODE_DISABLE_ARTIFACT",
    defaultOn: true
};
function mxt() {
    return L(F);
}
function y() {
    return !mxt().enabled;
}
function c_r() {
    let a_CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
    return K1() || a_CLAUDE_CODE_ENTRYPOINT === "claude-code-github-action" || a_CLAUDE_CODE_ENTRYPOINT === "mcp";
}
function I(e) {
    return e === "local-agent" || e?.startsWith("claude-coworker") === true;
}
function IT() {
    return Vv() === "local-agent" && up() && !Y1() && eCo();
}
function X4() {
    return yPe() && JAo() || IT();
}
function LNe() {
    return ZY();
}
function kw(e) {
    return e !== undefined && LNe() && jhs(e);
}
function xCe(e, n) {
    return !e && (kw(n) || pde(n.slug));
}
function qD(e) {
    return e !== undefined && e.outsideOrgReader === true && IE();
}
function pde(e) {
    return A === "person" && qD(vt(e));
}
function VA(e) {
    return qD(e) || gxt(e);
}
function gxt(e) {
    return e !== undefined && e.external === true && IE();
}
function d_r(e) {
    return e !== undefined && e.probeFailed !== true && e.external !== true && (e.outsideOrgReader === false || e.role === "owner");
}
function le() {
    let a_CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
    if (a_CLAUDE_CODE_ENTRYPOINT === "local-agent" && IT()) {
        return false;
    }
    return I(a_CLAUDE_CODE_ENTRYPOINT);
}
function gJt() {
    return I(Vv()) && !IT();
}
function ce() {
    return Axt() && ue();
}
function ue() {
    return U() === null;
}
function U() {
    if (Ie() !== "firstParty") {
        return "third_party_provider";
    }
    if (Tt()) {
        return "essential_traffic_only";
    }
    if (vs(a.CLAUDE_CODE_ARTIFACT)) {
        return "artifact_env_off";
    }
    if (!Ne(a.CLAUDE_CODE_ARTIFACT) && !Ne(a.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT) && c_r()) {
        return "sdk_default_off";
    }
    return null;
}
function W() {
    return Axt() && R();
}
function R() {
    return K() === null;
}
function K() {
    if (le()) {
        return "surface_excluded";
    }
    return U();
}
function Ezs() {
    if (y()) {
        return false;
    }
    return W();
}
function Iuo() {
    return a.CLAUDE_CODE_ARTIFACT_ASSETS === undefined && JI() && Id() === null && !a.CLAUDE_CODE_REMOTE;
}
function de() {
    let e = K5();
    return e === undefined || e === "prosumer_oauth" || e === "no_auth";
}
function N() {
    return Ne(a.CLAUDE_CODE_ARTIFACT) && false || k("tengu_cobalt_plinth", de());
}
function M() {
    return N() && hxt();
}
function ge() {
    return B() === null;
}
function B() {
    if (!N()) {
        return "growthbook_off";
    }
    if (Cxt() || hxt()) {
        Y();
        return null;
    }
    if (MNn() !== null) {
        return null;
    }
    return "admin_policy";
}
function MNn() {
    if (Cxt()) {
        return null;
    }
    if (!P(kr())) {
        return null;
    }
    let e = Fp("allow_cobalt_plinth");
    if (e !== "cache_miss" && e !== "route_missing") {
        Y();
        return null;
    }
    if (fPt("allow_cobalt_plinth")) {
        return null;
    }
    let cause = e === "route_missing" ? "policy_route_missing" : "policy_fetch_failed";
    let r = coe();
    if (r !== null && !r.success && he(r)) {
        ee().artifactPolicyFetchAnswer = r;
        return {
            cause,
            outcome: r
        };
    }
    let o = u_r();
    if (o === null) {
        return null;
    }
    return {
        cause,
        outcome: o
    };
}
function u_r() {
    if (UNe()) {
        return ee().artifactPolicyFetchAnswer;
    }
    return null;
}
function Ouo() {
    if (fPt("allow_cobalt_plinth")) {
        return "org_denied";
    }
    let e = Fp("allow_cobalt_plinth");
    if (e === "org_denied" || e === "latched") {
        return e;
    }
    return null;
}
function he(e) {
    if (!e.retrying) {
        return true;
    }
    if (e.errorCode === "auth_failed" && e.httpStatus === 401 || e.errorCode === "spurious_304") {
        return false;
    }
    return !Ibr(e);
}
function Y() {
    if (UNe()) {
        ee().artifactPolicyFetchAnswer = null;
    }
}
function JI() {
    if (Id() !== null) {
        return Jx();
    }
    return Axt() && Jx() && hxt();
}
function Jx() {
    return p_r() === null;
}
function p_r() {
    if (y()) {
        return "switched_off";
    }
    if (Id() !== null) {
        return null;
    }
    return K() ?? B();
}
function hJt() {
    if (y()) {
        return false;
    }
    if (!ce()) {
        return false;
    }
    return M();
}
function w() {
    let e = new Set;
    let n = false;
    let r = false;
    for (let s of mxt().offSources){
        switch(s.layer){
            case "env":
                e.add("env");
                break;
            case "userSettings":
                e.add(s.via === "legacyDisableKey" ? "setting" : "config_pref");
                break;
            case "policySettings":
            case "flagSettings":
                n = true;
                break;
            case "localSettings":
            case "projectSettings":
                r = true;
                break;
        }
    }
    if (n) {
        e.delete("setting");
        e.delete("config_pref");
    }
    if (e.size > 1) {
        return "multiple";
    }
    let [o] = e;
    if (o !== undefined) {
        return o;
    }
    if (n || r) {
        return "admin_managed";
    }
    return null;
}
function ye() {
    return w() !== null && W() && M();
}
function Muo() {
    let e = ee();
    if (e.artifactDisabledSessionEvaluated) {
        return;
    }
    if (m0() === null) {
        return;
    }
    e.artifactDisabledSessionEvaluated = true;
    if (!ye()) {
        return;
    }
    let n = w();
    if (n === null) {
        return;
    }
    C("tengu_artifact_disabled_session", {
        mechanism: d(n),
        session_interactivity: !Ee() || dp() === "claude-vscode" || ou() ? b("interactive") : b("noninteractive")
    });
}
function Huo(e) {
    if (!eCo() || Vv() !== "local-agent" || Y1()) {
        return;
    }
    let n = ee();
    let tool_listed = e === null && !Cxt() && !hxt() && MNn() !== null;
    let o = tool_listed ? "admin_policy" : e;
    if (o === null) {
        n.artifactRegisteredSeen = true;
        let l = n.artifactWithheldReasonsLogged.at(-1);
        if (l === undefined || n.artifactWithheldRecoveryLogged) {
            return;
        }
        n.artifactWithheldRecoveryLogged = true;
        C("tengu_artifact_tool_recovered", {
            withheld_reason: d(l),
            ...D(l)
        });
        return;
    }
    if (m0() === null) {
        return;
    }
    let s = be(o);
    let u = n.artifactWithheldReasonsLogged.includes(s);
    if (u && (!tool_listed || n.artifactWithheldListedLogged)) {
        return;
    }
    if (!u) {
        n.artifactWithheldReasonsLogged.push(s);
    }
    if (tool_listed) {
        n.artifactWithheldListedLogged = true;
    }
    C("tengu_artifact_tool_withheld", {
        reason: d(s),
        off_mechanism: pe(s === "switched_off" ? w() : null),
        after_registered: n.artifactRegisteredSeen,
        tool_listed,
        ...D(s)
    });
}
function D(e) {
    if (e !== "org_policy_denied" && e !== "compliance_taint" && e !== "policy_cache_miss" && e !== "policy_route_missing") {
        return {};
    }
    let n = coe();
    let r = S();
    let o = r === "nothing" ? "none" : r === "unrestricted" ? "fail_open" : n?.success ? "network" : "disk";
    let s = !Jh() ? "ineligible" : n === null || !n.success && n.retrying ? "pending" : n.success ? "ok" : "failed";
    return {
        policy_source: d(o),
        policy_fetch: d(s)
    };
}
function kzs() {
    ee().heldStartupTelemetry ??= [];
    return {
        flush,
        [Symbol.dispose]: flush
    };
}
function flush() {
    let e = ee();
    let e_heldStartupTelemetry = e.heldStartupTelemetry;
    e.heldStartupTelemetry = null;
    for (let r of e_heldStartupTelemetry ?? []){
        r();
    }
}
function C(...e) {
    let heldStartupTelemetry = ee().heldStartupTelemetry;
    if (heldStartupTelemetry === null) {
        i(...e);
        return;
    }
    heldStartupTelemetry.push(()=>i(...e));
}
function be(e) {
    switch(e){
        case "surface_excluded":
            if (up()) {
                return "surface_excluded";
            }
            return "nested_child_session";
        case "admin_policy":
            {
                if (!P(kr())) {
                    return "subscription_ineligible";
                }
                let n = mS();
                if (n === null) {
                    if (s$e()) {
                        return "policy_route_missing";
                    }
                    return "policy_cache_miss";
                }
                if (n.restrictions.allow_cobalt_plinth === undefined) {
                    return "compliance_taint";
                }
                return "org_policy_denied";
            }
        default:
            return e;
    }
}
function f_r() {
    return F.defaultOn;
}
function _e() {
    return R() && ge();
}
function yJt() {
    return _e() && mxt().userControllable;
}
function hxt() {
    return Ae();
}
function Ae() {
    if (Cxt()) {
        return j() === null;
    }
    if (!P(kr())) {
        return false;
    }
    return sn("allow_cobalt_plinth");
}
function P(e) {
    return e === "team" || e === "enterprise" || e === "pro" || e === "max" || e == null;
}
function Duo() {
    return j();
}
function j() {
    if (!Cxt()) {
        return null;
    }
    let e = CRe();
    if (e === null) {
        return "plan_unreadable";
    }
    if (e !== "pro" && e !== "max") {
        return "org_policy_unverifiable";
    }
    if (!Jh()) {
        return "policy_unavailable";
    }
    if (sn("allow_cobalt_plinth")) {
        return null;
    }
    let n = Fp("allow_cobalt_plinth") ?? "org_denied";
    switch(n){
        case "org_denied":
        case "latched":
        case "cache_miss":
            return n;
        case "route_missing":
            return "policy_route_missing";
    }
}
function qre() {
    return JI() && k("tengu_gable_onyx_sluice", false);
}
Yhs(qre);
function Luo() {
    return Jx() && k("tengu_gable_onyx_sluice", false);
}
function Nuo() {
    return false;
}
function $uo() {
    return false;
}
function m_r() {
    return false;
}
function Fuo() {
    return qre() && !l7(fde) && !k("tengu_cedar_transom", false);
}
function Uuo() {
    return m_r() && !l7(HNn);
}
function Buo() {
    return false;
}
function _Jt() {
    return k("tengu_cobalt_plinth_thrift", false) === true;
}
const me = "tengu_russet_pergola";
function juo() {
    return false;
}
function g_r() {
    return false;
}
function Wuo() {
    return g_r();
}
function Se() {
    return false;
}
function NNe() {
    let e = ee();
    if (e.prReviewComposeLatch === null) {
        e.prReviewComposeLatch = Se();
    }
    return e.prReviewComposeLatch;
}
function X_e() {
    return JI();
}
function $Ne() {
    return !y() && R();
}
export { jhs, Y4e, Whs, VS, zhs, xNn, Vit, SV, Ghs, K_e, Vhs, Puo, X4e, l_r, qit, fxt, qhs, Y_e, W5, PNn, J4e, INn, ONn, Khs, mxt, c_r, IT, X4, LNe, kw, xCe, qD, pde, VA, gxt, d_r, gJt, Ezs, Iuo, MNn, u_r, Ouo, JI, Jx, p_r, hJt, Muo, Huo, kzs, f_r, yJt, hxt, Duo, qre, Luo, Nuo, $uo, m_r, Fuo, Uuo, Buo, _Jt, juo, g_r, Wuo, NNe, X_e, $Ne };
