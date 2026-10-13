import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { jn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { mr } from "/$bunfs/root/chunk-6kc68p18.js";
import { wC } from "/$bunfs/root/chunk-x0qpydt2.js";
import { Bbe, vl, FE, um, bn, wt, If, C7, ya, mg, _1n, Fn, k, g_, xY, ce, W6e } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { w9, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { RDt, GRr } from "/$bunfs/root/chunk-etbngzss.js";
import { no } from "/$bunfs/root/chunk-c56kpkt7.js";
import { BCs } from "/$bunfs/root/chunk-fnj5y75n.js";
import { m0 } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { Lw, B3e, Ie, qn, kxe, af } from "/$bunfs/root/chunk-nj0630nv.js";
import { OF, Oue } from "/$bunfs/root/chunk-pp3y3t61.js";
import { ZOt, QRe, yue, Cct } from "/$bunfs/root/chunk-k3tkc302.js";
import { lPt, KM, yQt, K5, Y5, sn, zW, doe, s$e, amo, Fp, X$n, mPt, cmo, mS, X5 } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { wQ, Agr, Jao } from "/$bunfs/root/chunk-f07wx4fp.js";
import { _Se } from "/$bunfs/root/chunk-wtrd0hw3.js";
function sV() {
    if (!qn()) {
        return false;
    }
    if (KM() !== undefined) {
        return true;
    }
    if (a.ANTHROPIC_UNIX_SOCKET) {
        return false;
    }
    return af();
}
function Est() {
    return sV() && c() && (k("tengu_ccr_bridge", false) || g());
}
function g() {
    if (mg() || a.DISABLE_GROWTHBOOK || RDt() !== "no-telemetry" || BCs() || !sV() || !p() || !h()?.organizationUuid || z()) {
        return false;
    }
    try {
        let e = bn();
        let o = e?.refreshToken ? e.subscriptionType ?? null : null;
        return o !== null && w.includes(o);
    } catch  {
        return false;
    }
}
var w = [
    "pro",
    "max",
    "team",
    "enterprise"
];
function e9t() {
    if (Est()) {
        return null;
    }
    if (!f()) {
        return "not_signed_in";
    }
    if (!c()) {
        return "api_key_auth";
    }
    if (!p()) {
        return "no_profile_scope";
    }
    return "not_in_rollout";
}
function u() {
    return false;
}
function TW() {
    return m0()?.settings.disableRemoteControl === true;
}
function rR() {
    if (u()) {
        return true;
    }
    if (TW()) {
        return false;
    }
    return !FD() && Est();
}
function Dao() {
    if (u()) {
        return true;
    }
    return !TW() && !FD() && sV();
}
async function Lao() {
    return await ygr() === null;
}
async function ygr() {
    if (u()) {
        return null;
    }
    if (TW()) {
        return "managed_disabled";
    }
    if (!sV()) {
        return "not_first_party";
    }
    if (FD()) {
        return "cloud_session";
    }
    if (!c()) {
        if (f()) {
            return "not_subscription_auth";
        }
        return "not_signed_in";
    }
    if (g() || await g_("tengu_ccr_bridge")) {
        return null;
    }
    if (!mg()) {
        return "flags_disabled";
    }
    if (ya()) {
        return "gate_off";
    }
    return "flags_unreachable";
}
const T = "Remote Control is disabled by your organization's policy. Contact your organization admin for access.";
const L = 86400000;
const M = 2147483647;
function I() {
    return X5();
}
function gDn() {
    let { featureLabel, verb } = Y5("allow_remote_control");
    return ZOt(featureLabel, verb, OF(), T);
}
function PLe(e) {
    let o = e ? [
        "allow_remote_control",
        "allow_remote_sessions"
    ] : [
        "allow_remote_control"
    ];
    try {
        for (let policy of o){
            let kind = Fp(policy);
            switch(kind){
                case null:
                case "cache_miss":
                case "route_missing":
                    continue;
                case "latched":
                    {
                        if (!doe() && !B()) {
                            continue;
                        }
                        let { featureLabel, verb } = Y5(policy);
                        return {
                            policy,
                            kind,
                            detail: QRe(featureLabel, verb)
                        };
                    }
                case "org_denied":
                    if (mS()?.restrictions[policy]?.allowed !== false && !doe() && !B()) {
                        continue;
                    }
                    return {
                        policy,
                        kind,
                        detail: policy === "allow_remote_control" ? Jao : "Session mirroring was turned off by your organization's policy (allow_remote_sessions)."
                    };
                default:
                    return {
                        policy,
                        kind: "org_denied",
                        detail: Jao
                    };
            }
        }
        return null;
    } catch  {
        return null;
    }
}
function B() {
    let e = K5();
    return e !== undefined && yQt.has(e);
}
const i = (code, reason)=>({
        reason,
        code,
        orgPolicyDenied: false
    });
async function SCt() {
    if (u()) {
        return null;
    }
    if (!sV()) {
        return i("not_first_party", V());
    }
    if (FD()) {
        return i("cloud_session", "Remote Control is not available inside a cloud session.");
    }
    if (TW()) {
        return i("managed_disabled", wQ);
    }
    if (!f()) {
        return i("not_signed_in", "Remote Control requires a claude.ai subscription. Run `claude auth login` to sign in with your claude.ai account.");
    }
    if (!c()) {
        return i("not_subscription_auth", wCt({
            prefix: "Remote Control requires claude.ai subscription auth.",
            suffix: "to use Remote Control."
        }));
    }
    if (!p()) {
        return i("token_scope_limited", "Remote Control requires a full-scope login token. Long-lived tokens (from `claude setup-token` or CLAUDE_CODE_OAUTH_TOKEN) are limited to inference-only for security reasons. Run `claude auth login` to use Remote Control.");
    }
    if (!h()?.organizationUuid) {
        return i("no_organization", "Unable to determine your organization for Remote Control eligibility. Run `claude auth login` to refresh your account information.");
    }
    await vre();
    let e = vCt();
    if (e === "unavailable") {
        return i("policy_unverified", Agr);
    }
    if (e === "denied") {
        return {
            reason: D(),
            code: "org_policy_denied",
            orgPolicyDenied: true
        };
    }
    if (g()) {
        return null;
    }
    if (!mg()) {
        let o = GRr();
        if (o) {
            return i("flags_disabled", `Remote Control requires feature-flag evaluation, which is disabled because ${o} is set. Unset it (or run in a shell without it) to use Remote Control.`);
        }
        if (a.DISABLE_GROWTHBOOK) {
            return i("flags_disabled", "Remote Control requires feature-flag evaluation, which is disabled because DISABLE_GROWTHBOOK is set. Unset it (or run in a shell without it) to use Remote Control.");
        }
        return i("flags_disabled", "Remote Control requires feature-flag evaluation, which is unavailable in this environment.");
    }
    if (!await g_("tengu_ccr_bridge")) {
        if (!ya()) {
            xY();
            if (await g_("tengu_ccr_bridge")) {
                return null;
            }
            if (!ya()) {
                return i("flags_unreachable", "Couldn't verify Remote Control eligibility — the feature-flag service was unreachable (offline or blocked). Retry, or run with `--debug` / `claude doctor` for details.");
            }
        }
        return i("gate_off", "Remote Control isn't enabled for this account. If you recently changed plans, run `claude auth logout` then `claude auth login` to refresh your entitlements, or `claude doctor` for details.");
    }
    return null;
}
async function N() {
    return (await SCt())?.reason ?? null;
}
function D() {
    try {
        if (s$e()) {
            return Cct("Remote Control");
        }
        if (X$n("allow_remote_control")) {
            return QRe("Remote Control", "is");
        }
        if (!I()) {
            return yue("Remote Control");
        }
        if (!amo()) {
            return T;
        }
        return gDn();
    } catch  {
        return Agr;
    }
}
const x = "set by your organization's configuration, not an admin setting";
function U({ policyVerdict, policyDenialIsAuthoritative, currentTaints }) {
    if (policyVerdict !== "denied" || !policyDenialIsAuthoritative) {
        return false;
    }
    try {
        return !s$e() && !X$n("allow_remote_control") && _Se(currentTaints).length > 0;
    } catch  {
        return false;
    }
}
function kst() {
    if (u()) {
        return null;
    }
    if (TW()) {
        return wQ;
    }
    let e = no();
    let policyCacheRevision = lPt();
    let e_remoteControlLockReason = e.remoteControlLockReason;
    if (e_remoteControlLockReason !== undefined && e_remoteControlLockReason.policyCacheRevision === policyCacheRevision) {
        return e_remoteControlLockReason.reason;
    }
    let reason = H();
    e.remoteControlLockReason = {
        policyCacheRevision,
        reason
    };
    return reason;
}
function H() {
    let e = vCt();
    if (e === "allowed") {
        return null;
    }
    if (e === "unavailable") {
        return Agr;
    }
    return D();
}
function bzs() {
    if (!w9()) {
        return "";
    }
    let e = (o)=>{
        if (o) {
            return "set";
        }
        return "unset";
    };
    try {
        let o = bn();
        let n = Object.values(B3e).filter((r)=>Ne(process.env[r]));
        return [
            "",
            "[debug] Remote Control auth state:",
            `  isBareMode=${mr()}`,
            `  hasOAuthAccessToken=${!!o?.accessToken}`,
            `  oauthScopes=${o?.scopes?.join(",") ?? "none"}`,
            `  hasClaudeAIInferenceScope=${f()}`,
            `  isClaudeAISubscriber=${c()}`,
            `  hasProfileScope=${p()}`,
            `  oauthAccount.organizationUuid=${h()?.organizationUuid ? "set" : "unset"}`,
            `  ANTHROPIC_API_KEY=${e(process.env.ANTHROPIC_API_KEY)}`,
            `  ANTHROPIC_AUTH_TOKEN=${e(process.env.ANTHROPIC_AUTH_TOKEN)}`,
            `  apiKeyHelper=${um() ? "set" : "unset"}`,
            `  CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR=${e(process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR)}`,
            `  CLAUDE_CODE_OAUTH_TOKEN=${e(process.env.CLAUDE_CODE_OAUTH_TOKEN)}`,
            `  ANTHROPIC_UNIX_SOCKET=${e(process.env.ANTHROPIC_UNIX_SOCKET)}`,
            `  3P env=${n.length ? n.join(",") : "none"}`,
            ...K()
        ].join(`
`);
    } catch (error) {
        return `
[debug] failed to collect auth state: ${error}`;
    }
}
function K() {
    let e = (DISABLE_GROWTHBOOK)=>{
        if (DISABLE_GROWTHBOOK) {
            return "set";
        }
        return "unset";
    };
    let o = C7();
    let n = F();
    return [
        `  isGrowthBookEnabled=${mg()}`,
        `  telemetryDisabledBy=${GRr() ?? "none"}`,
        `  DISABLE_GROWTHBOOK=${e(process.env.DISABLE_GROWTHBOOK)}`,
        `  hasFreshGrowthBookFeatures=${ya()}`,
        `  growthBookFeaturesLoaded=${Object.keys(o).length}`,
        `  growthBookLastFetched=${n ? `${G(Date.now() - n)} ago` : "never"}`,
        `  tengu_ccr_bridge=${String(o.tengu_ccr_bridge ?? "unset")}`
    ];
}
async function Nao() {
    if (FD() && !u()) {
        return {
            disabledReason: null,
            inRemoteSession: true,
            checks: []
        };
    }
    xY();
    await vre();
    let e = await N();
    let o = GRr() ?? (a.DISABLE_GROWTHBOOK ? "DISABLE_GROWTHBOOK" : null);
    let n = sV();
    let r = !TW();
    let l = f();
    let d = c();
    let m = p();
    let y = !!h()?.organizationUuid;
    let policyVerdict = vCt();
    let policyDenialIsAuthoritative = I();
    let P = U({
        policyVerdict,
        policyDenialIsAuthoritative,
        currentTaints: Oue()
    });
    let A = mg();
    let b = g();
    let O = b || await g_("tengu_ccr_bridge");
    let S = ya();
    let checks = [
        {
            label: n ? "Connected to the Anthropic API (api.anthropic.com)" : "Not connected to the Anthropic API (api.anthropic.com)",
            ok: n
        },
        {
            label: r ? "Not disabled by org policy (disableRemoteControl)" : "Disabled by org policy (disableRemoteControl)",
            ok: r
        },
        {
            label: l ? "Signed in to claude.ai" : "Not signed in to claude.ai",
            ok: l
        },
        {
            label: d ? "claude.ai subscription active" : "claude.ai subscription auth not active",
            ok: d
        },
        {
            label: m ? "Sign-in includes the user:profile scope" : "Sign-in is missing the user:profile scope",
            ok: m
        },
        {
            label: y ? "Organization resolved" : "Organization not resolved",
            ok: y
        },
        {
            label: policyVerdict === "allowed" ? "Org policy allows Remote Control (allow_remote_control)" : policyVerdict === "unavailable" ? "Org policy could not be verified (allow_remote_control)" : !policyDenialIsAuthoritative ? "Org policy not loaded, see the Organization policy line above (allow_remote_control)" : "Org policy does not allow Remote Control (allow_remote_control)",
            ok: policyVerdict === "allowed",
            detail: P ? x : undefined
        },
        {
            label: A ? "Feature-flag evaluation enabled" : "Feature-flag evaluation disabled",
            ok: A || b,
            detail: o ? b ? `disabled by ${o}; Remote Control does not need it on a paid plan` : `disabled by ${o}` : undefined
        },
        {
            label: O ? "Remote Control enabled for this account" : S ? "Remote Control not enabled for this account" : "Remote Control availability could not be verified",
            ok: O,
            detail: b ? "decided from your plan, feature flags are off" : S ? undefined : "no server response this session"
        }
    ];
    return {
        disabledReason: e !== null && n && r && l && d && m && y && policyVerdict === "denied" && !policyDenialIsAuthoritative ? "Remote Control needs your organization's policy, which isn't loaded — see the Organization policy line above." : e,
        inRemoteSession: false,
        checks
    };
}
function F() {
    try {
        return ce().cachedGrowthBookFeaturesAt;
    } catch  {
        return;
    }
}
function G(e) {
    let o = Math.round(e / 1000);
    if (o < 120) {
        return `${o}s`;
    }
    let n = Math.round(o / 60);
    if (n < 120) {
        return `${n}m`;
    }
    let r = Math.round(n / 60);
    if (r < 48) {
        return `${r}h`;
    }
    return `${Math.round(r / 24)}d`;
}
function wCt({ prefix, suffix }) {
    try {
        let { source } = FE({
            skipRetrievingKeyFromApiKeyHelper: true
        });
        if (source === "ANTHROPIC_API_KEY") {
            return `${prefix} ANTHROPIC_API_KEY is set, so this session is using API-key auth \u2014 unset it (or run in a shell without it) ${suffix}`;
        }
        if (source === "apiKeyHelper") {
            return `${prefix} apiKeyHelper is configured, so this session is using API-key auth \u2014 unset it ${suffix}`;
        }
        if (process.env.ANTHROPIC_AUTH_TOKEN) {
            return `${prefix} ANTHROPIC_AUTH_TOKEN is set, so this session is using API-key auth \u2014 unset it (or run in a shell without it) ${suffix}`;
        }
        let { source: source_1 } = vl();
        let l = Bbe(source_1);
        if (source_1 !== "none" && l) {
            return `${prefix} This session is using ${source_1} auth \u2014 ${l}`;
        }
        if (process.env.ANTHROPIC_UNIX_SOCKET) {
            return `${prefix} ANTHROPIC_UNIX_SOCKET is set without CLAUDE_CODE_OAUTH_TOKEN, so requests on the socket carry no claude.ai login (on a claude ssh remote: the local machine is API-key-authed).`;
        }
    } catch  {}
    return `${prefix} Unset ANTHROPIC_API_KEY / apiKeyHelper / ANTHROPIC_AUTH_TOKEN ${suffix}`;
}
const s = "Remote Control is only available when using Claude via api.anthropic.com.";
const C = "unset it (or run in a shell without it) to use Remote Control.";
const Y = "unset them (or run in a shell without them) to use Remote Control.";
function V() {
    let e = Ie();
    if (e !== "firstParty") {
        if (e === "gateway") {
            return `${s} This session uses a ${Lw.gateway}, which does not support Remote Control.`;
        }
        if (e === "bedrock" && kxe() === "mantle") {
            return `${s} ${B3e.bedrock} and ${B3e.mantle} are set, so this session is using ${Lw.bedrock} + ${Lw.mantle} \u2014 ${Y}`;
        }
        return `${s} ${B3e[e]} is set, so this session is using ${Lw[e]} \u2014 ${C}`;
    }
    if (!af()) {
        let o = a._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL ? " (_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL does not apply to Remote Control.)" : "";
        return `${s} ANTHROPIC_BASE_URL is set and does not point at api.anthropic.com, so this session is using a custom endpoint \u2014 ${C}${o}`;
    }
    if (a.ANTHROPIC_UNIX_SOCKET) {
        return `${s} ANTHROPIC_UNIX_SOCKET is set, so this session sends requests through a local socket rather than to api.anthropic.com \u2014 ${C}`;
    }
    return s;
}
function f() {
    try {
        return Boolean(bn()?.scopes?.includes(wC));
    } catch  {
        return false;
    }
}
function c() {
    try {
        return wt();
    } catch  {
        return false;
    }
}
function p() {
    try {
        return If();
    } catch  {
        return false;
    }
}
function h() {
    try {
        return ce().oauthAccount;
    } catch  {
        return;
    }
}
function z() {
    try {
        return mPt("require_trusted_devices") || zW();
    } catch  {
        return true;
    }
}
async function vre() {
    try {
        await W();
    } catch (error) {
        t(`[bridge] policy-limits hydrate for the Remote Control diagnostic failed: ${error instanceof Error ? error.message : String(error)}`);
    }
}
async function W() {
    try {
        if (mS() !== null) {
            return;
        }
    } catch  {}
    let e = await import("/$bunfs/root/chunk-z4ckrxvt.js");
    e.initializePolicyLimitsLoadingPromise();
    let o = no();
    if (o.diagnosticPolicyKick === undefined) {
        let n = e.loadPolicyLimits();
        n.catch(()=>{}).finally(()=>{
            o.diagnosticPolicyKick = undefined;
        });
        o.diagnosticPolicyKick = Ut(n, e.POLICY_LIMITS_COLD_AWAIT_MS, "bridge_diagnostic_policy_limits").catch(()=>{});
    }
    await o.diagnosticPolicyKick;
}
function vCt() {
    try {
        if (sn("allow_remote_control")) {
            return "allowed";
        }
        return "denied";
    } catch  {
        return "unavailable";
    }
}
function E_e() {
    return rR() && vCt() === "allowed";
}
function FD() {
    return Ne(process.env.CLAUDE_CODE_REMOTE) || jn();
}
function $ao() {
    return k("tengu_bridge_repl_v2_cse_shim_enabled", true);
}
function k_e() {
    return k("tengu_luminous_seal", true);
}
function Fao() {
    return k("tengu_bridge_partial_messages", false);
}
function hDn() {
    return k("tengu_wobbly_pinwheel", true);
}
function _gr() {
    return k("tengu_copper_kestrel", true);
}
function ECt() {
    return k("tengu_bridge_auth_revive", true);
}
function bgr() {
    return k("tengu_ethereal_mist", true);
}
function Uao() {
    return k("tengu_wild_gosling", false);
}
function Tst() {
    return k("tengu_humble_petal", true);
}
function Bao() {
    return k("tengu_moonlit_lagoon", true);
}
function jao() {
    return k("tengu_bridge_resume_respects_local_owner", true);
}
function Wao() {
    return k("tengu_sequential_puffin", true);
}
function T_e() {
    return k("tengu_bridge_owner_pinned_end", true);
}
function yDn() {
    return k("tengu_glimmering_glade", true);
}
function zao() {
    return k("tengu_lucky_quill", true);
}
function Gao() {
    return k("tengu_keen_lantern", true);
}
function Sgr() {
    return k("tengu_bridge_host_declined_end", true);
}
function Vao() {
    return k("tengu_bridge_signed_out_neutral", true);
}
function t9t() {
    return k("tengu_ccr_v2_send_events_cli", true);
}
function AW() {
    return k("tengu_ccr_v2_session_crud_cli", false);
}
function Szs() {
    return k("tengu_ccr_v2_bridge_create_cli", false);
}
function n9t() {
    return k("tengu_composed_quail", true);
}
function qao() {
    return k("tengu_gravel_chorus", true);
}
function Ast() {
    return wgr().value;
}
function wgr() {
    if (FD()) {
        return {
            value: false,
            source: "remote_env"
        };
    }
    let e = cmo("remote_control_at_startup");
    if (g()) {
        return {
            value: false,
            source: e === false ? "org_policy" : "growthbook"
        };
    }
    if (JAe()) {
        return {
            value: true,
            source: "persistent_remote_session"
        };
    }
    if (e !== undefined) {
        return {
            value: e,
            source: "org_policy"
        };
    }
    return {
        value: k("tengu_cobalt_harbor", false),
        source: "growthbook"
    };
}
function Ere() {
    let e = W6e();
    if (e !== undefined) {
        return e;
    }
    return Ast();
}
function JAe() {
    return false;
}
function wzs() {
    return false;
}
function r9t() {
    return k("tengu_amber_relay", false);
}
function YKe() {
    {
        let { value, source } = Fn("tengu_bridge_apply_server_session_config", true);
        if (value !== false) {
            return true;
        }
        if (source === "override") {
            return false;
        }
        return !(source === "payload" && _1n().organizationUUID);
    }
    return false;
}
function vgr() {
    return k("tengu_bridge_child_auto_mode", true);
}
function Kao() {
    return k("tengu_bridge_child_auto_over_settings", true);
}
function Egr() {
    return k("tengu_bridge_rc_child_artifact", true);
}
function _Dn() {
    return k("tengu_bridge_rc_projects_hint", true);
}
function kgr() {
    return k("tengu_bridge_child_machine_settings", true);
}
function Tgr() {
    return k("tengu_bridge_rc_child_auto_compact", true);
}
function Yao() {
    let e = k("tengu_bridge_rc_child_idle_exit_ms", L);
    if (typeof e !== "number" || !Number.isFinite(e) || e < 1) {
        return 0;
    }
    return Math.min(Math.floor(e), M);
}
function o9t() {
    return k("tengu_bridge_rc_child_restart_resume", true);
}
function s9t() {
    return {
        enabled: k("tengu_bridge_subagent_frames", true),
        forwardText: k("tengu_bridge_subagent_text", false)
    };
}
function Xao(e, replBridgeEnabled) {
    if (e.replBridgeOutboundOnly && !replBridgeEnabled) {
        if (e.replBridgeSessionGroupingId !== undefined) {
            return {
                ...e,
                replBridgeSessionGroupingId: undefined
            };
        }
        return e;
    }
    if (e.replBridgeEnabled === replBridgeEnabled && !e.replBridgeOutboundOnly) {
        if (!replBridgeEnabled && e.replBridgeSessionGroupingId !== undefined) {
            return {
                ...e,
                replBridgeSessionGroupingId: undefined
            };
        }
        return e;
    }
    return {
        ...e,
        replBridgeEnabled,
        replBridgeOutboundOnly: false,
        ...!replBridgeEnabled && {
            replBridgeSessionGroupingId: undefined
        }
    };
}
export { sV, Est, e9t, TW, rR, Dao, Lao, ygr, gDn, PLe, SCt, kst, bzs, Nao, wCt, vre, vCt, E_e, FD, $ao, k_e, Fao, hDn, _gr, ECt, bgr, Uao, Tst, Bao, jao, Wao, T_e, yDn, zao, Gao, Sgr, Vao, t9t, AW, Szs, n9t, qao, Ast, wgr, Ere, JAe, wzs, r9t, YKe, vgr, Kao, Egr, _Dn, kgr, Tgr, Yao, o9t, s9t, Xao };
