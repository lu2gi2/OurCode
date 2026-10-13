import { Ne, vs } from "/$bunfs/root/chunk-j27d47mr.js";
import { eo, vPo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { dRe, Ult, FE, Xu, CRe, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { Oi, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { ua, sxs, BMt, G3e, Ztn, NWn, Axe, FF, enn, nnn, ixs, jWn, qdt, q3e, Kvo, Kdt, axs, qEo, XEo, Oz, Kk, JEo } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { gPe, ou, QY } from "/$bunfs/root/chunk-x47nahfr.js";
import { Pr, Lo, cn } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { uWn, LF, Pwo, $Rs, HTr, yn, fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Ie, vi } from "/$bunfs/root/chunk-nj0630nv.js";
import { mpe, dTo, X8, fTo, fCr, ES, gpe } from "/$bunfs/root/chunk-55x53sfe.js";
import { ddt, udt, Vkr, qkr, LFe, NFe } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { MT } from "/$bunfs/root/chunk-9xenmz7v.js";
import { Dbs, vh } from "/$bunfs/root/chunk-fbhagmpx.js";
import { Yz } from "/$bunfs/root/chunk-svqqgdca.js";
import { ru } from "/$bunfs/root/chunk-m6z3m7rx.js";
function zB() {
    return a.CLAUDE_CODE_REMOTE && a.CLAUDE_CODE_REMOTE_HERMETIC_MODE;
}
function N(e) {
    try {
        return new URL(e).host;
    } catch  {
        return;
    }
}
function nbr(e = a.ANTHROPIC_BASE_URL || ddt()) {
    if (!e) {
        return true;
    }
    let n = N(dn().BASE_API_URL);
    return n !== undefined && N(e) === n;
}
function sY() {
    qEo();
}
function KA() {
    let e = Oz();
    if (e !== undefined) {
        return e;
    }
    let { eligible, ineligibleReason } = k();
    let E = a.CLAUDE_CODE_EVAL_CONFINED === true;
    let r = !eligible && E;
    JEo(r);
    let o = eligible || r;
    return XEo(o, o ? undefined : ineligibleReason);
}
function Y() {
    return rbr() || Xu() && CRe() === null;
}
function rbr() {
    if (!Xu()) {
        return false;
    }
    let e = CRe();
    return e === "enterprise" || e === "team";
}
function k() {
    if (Kk()) {
        return {
            eligible: true
        };
    }
    if (zB()) {
        return {
            eligible: false,
            ineligibleReason: "hermetic_remote_session"
        };
    }
    if (Ie() === "gateway") {
        let i = eo();
        let eligible = vPo(i);
        return {
            eligible,
            ineligibleReason: eligible ? undefined : i?.hostVerdict !== undefined ? "host_gateway_not_accepted" : "unpinned_gateway"
        };
    }
    if (Ie() !== "firstParty") {
        return {
            eligible: false,
            ineligibleReason: "third_party_provider"
        };
    }
    if (!vi()) {
        return {
            eligible: false,
            ineligibleReason: "custom_base_url"
        };
    }
    let a_CLAUDE_CODE_ENTRYPOINT = a.CLAUDE_CODE_ENTRYPOINT;
    if (a_CLAUDE_CODE_ENTRYPOINT === "local-agent" || QY() || a_CLAUDE_CODE_ENTRYPOINT?.startsWith("claude-coworker")) {
        return {
            eligible: false,
            ineligibleReason: "sandboxed_entrypoint"
        };
    }
    let n = false;
    try {
        n = Ult();
    } catch (error) {
        t(`Remote settings: could not read the profile store (${l(error)}); not treating this session as profile-authenticated`, {
            level: "warn"
        });
    }
    if (n) {
        if (nbr()) {
            return {
                eligible: true
            };
        }
        return {
            eligible: false,
            ineligibleReason: "profile_base_url_mismatch"
        };
    }
    if (Y()) {
        return {
            eligible: true
        };
    }
    try {
        let { key } = FE({
            skipRetrievingKeyFromApiKeyHelper: true
        });
        if (key) {
            return {
                eligible: true
            };
        }
    } catch  {}
    return {
        eligible: false,
        ineligibleReason: Xu() ? "unsupported_subscription" : "no_auth"
    };
}
const j = [
    "CLAUDE_CODE_REMOTE",
    "CLAUDE_CODE_IS_COWORK"
];
function KNe(e) {
    return j.some((n)=>{
        if (e) {
            return Ne(e[n]);
        }
        return a[n];
    });
}
function g(e, n) {
    if (sxs.test(e)) {
        return "invalid-name";
    }
    if (typeof n !== "string") {
        return "non-string-value";
    }
    if (n.includes("\x00")) {
        return "nul-in-value";
    }
}
const Qxt = {
    "invalid-name": "it isn't a valid environment variable name",
    "non-string-value": "its value isn't a string",
    "nul-in-value": "its value contains a NUL character"
};
function A$n(kept) {
    let n = Object.entries(kept);
    let dropped = n.flatMap(([r, o])=>{
        let problem = g(r, o);
        if (problem === undefined) {
            return [];
        }
        return [
            {
                name: r,
                problem
            }
        ];
    });
    if (dropped.length === 0) {
        return {
            kept,
            dropped
        };
    }
    let E = new Set(dropped.map((r)=>r.name));
    return {
        kept: Object.fromEntries(n.filter(([r])=>!E.has(r))),
        dropped
    };
}
const u = 200;
function x(e) {
    if (e === 1) {
        return "1 character";
    }
    return `${e} characters`;
}
function T(e) {
    return Oi(e).slice(1, -1).replace(/[^\x20-\x7e]/g, (n)=>`\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function Cat(e) {
    let n = e.indexOf("=");
    let i = n === -1 ? e : e.slice(0, n);
    let E = i.length > u;
    let r = `"${T(E ? i.slice(0, u) : i)}"${E ? "…" : ""}`;
    if (n === -1) {
        return r;
    }
    return `${r} (then '=' and ${x(e.length - n - 1)}, not shown)`;
}
const X = new Set([
    "ANTHROPIC_UNIX_SOCKET",
    "ANTHROPIC_BASE_URL",
    "ANTHROPIC_API_KEY",
    "ANTHROPIC_AUTH_TOKEN",
    "CLAUDE_CODE_OAUTH_TOKEN",
    ...FF.filter((e)=>e.startsWith("CLAUDE_CODE_ARTIFACT") || Axe(e))
]);
function h(e) {
    if (!e || !process.env.ANTHROPIC_UNIX_SOCKET) {
        return e || {};
    }
    let n = {};
    for (let [i, E] of Object.entries(e)){
        if (!X.has(i.toUpperCase())) {
            n[i] = E;
        }
    }
    return n;
}
const P = Object.freeze({
    managedByHost: false,
    managedByHostFlag: false,
    desktopHost: false,
    hostOrchestrated: false,
    storedLoginPinned: false
});
function v() {
    let managedByHostFlag = Ne(process.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST);
    let desktopHost = ou();
    let CLAUDE_CODE_ENVIRONMENT_KIND = process.env.CLAUDE_CODE_ENVIRONMENT_KIND;
    return {
        managedByHost: managedByHostFlag || !!process.env.CLAUDE_CODE_HOST_AUTH_ENV_VAR,
        managedByHostFlag,
        desktopHost,
        hostOrchestrated: desktopHost || CLAUDE_CODE_ENVIRONMENT_KIND === "byoc",
        storedLoginPinned: LF()
    };
}
const J = new Set([
    "policySettings",
    "projectSettings",
    "localSettings"
]);
const z = [];
const q = [];
const Q = [];
const obr = new Set([
    MT,
    "CLAUDE_CODE_CUSTOM_OAUTH_URL",
    "CLAUDE_CODE_SYNC_SKILLS",
    "CLAUDE_CODE_SYNC_PLUGINS",
    "CLAUDE_CODE_TRANSCRIPT_LOCAL_GC",
    "CLAUDE_CODE_CCR_SURFACE",
    "CLAUDE_CODE_RELAUNCH_PROACTIVITY_BASELINE",
    "CLAUDE_CODE_RELAUNCH_PROACTIVITY_DECIDED",
    "CLAUDE_CODE_RELAUNCH_PROACTIVITY_EVER_ON",
    "CLAUDE_CODE_RELAUNCH_PROACTIVITY_LEVEL",
    "CLAUDE_CODE_DISABLE_PROACTIVITY",
    "CLAUDE_CODE_DISABLE_ATTACHMENTS",
    "CLAUDE_CODE_TETHER_LIVE",
    "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT",
    "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT",
    "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS",
    "CLAUDE_CODE_MCP_APPS_HOST",
    "CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD",
    "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN",
    "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED",
    "CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT",
    "CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT",
    "CLAUDE_CODE_3P_PROBE_WROTE_HAIKU_DEFAULT",
    "CLAUDE_CODE_3P_SEEDED_SONNET_DEFAULT",
    "CLAUDE_CODE_3P_SEEDED_OPUS_DEFAULT",
    "CLAUDE_CODE_SANDBOXED",
    "CLAUDE_CODE_ATTRIBUTION_STATUS_TIMEOUT_MS",
    "CLAUDE_CODE_TOOL_USE_ID",
    "CLAUDE_CODE_DISABLE_ATTRIBUTION_CROSS_REPO",
    "CLAUDE_CODE_DISABLE_WEB_FETCH",
    "CCR_SESSION_PROFILE",
    "CLAUDE_CODE_MCP_STARTUP_WAIT_MS",
    "CLAUDE_CODE_MCP_CONNECTOR_PREWAIT_MS",
    "CLAUDE_CODE_MCP_PREWAIT_SERVERS",
    "CLAUDE_CODE_MCP_PREWAIT_SERVERS_MS",
    "CLAUDE_CODE_SKILL_PROPOSALS",
    "CLAUDE_CODE_PLUGIN_CACHE_DIR",
    "CLAUDE_CODE_PLUGIN_SEED_DIR",
    "CLAUDE_CODE_PLUGIN_DIRS",
    "CLAUDE_CODE_PLUGIN_DIR_WATCH",
    "CLAUDE_CODE_ENABLE_FUNCTION_HOOKS",
    "CLAUDE_CODE_PLUGIN_ATTRIBUTION",
    "CLAUDE_CODE_SKILL_ATTRIBUTION",
    "CLAUDE_CODE_MODEL_CATALOG_URL",
    "CLAUDE_CODE_CLIENT_DATA_URL",
    "CLAUDE_CODE_REMOVE_PROMPT_STRINGS",
    ...udt,
    "CLAUDE_CODE_SUBSCRIPTION_TYPE",
    "CLAUDE_CODE_RATE_LIMIT_TIER",
    "CLAUDE_CODE_DISABLE_DANGEROUS_RM_TIMEOUT",
    "CLAUDE_CODE_DISABLE_SUBSTITUTION_RM_PROMPT",
    "CLAUDE_CODE_DISABLE_INLINE_SHELL_RM_PROMPT",
    "CLAUDE_CODE_DISABLE_POWERSHELL_CMD_RM_DENY",
    "CLAUDE_CODE_FEDERATION_CACHE_DIR",
    "ANTHROPIC_CONFIG_DIR",
    "XDG_CONFIG_HOME",
    "HOME",
    "APPDATA",
    "USERPROFILE",
    "HOMEDRIVE",
    "HOMEPATH",
    "PROGRAMDATA",
    "ALLUSERSPROFILE",
    "SYSTEMROOT",
    "WINDIR",
    "COMSPEC",
    "SYSTEMDRIVE",
    "PROGRAMFILES",
    "PROGRAMFILES(X86)",
    "PROGRAMW6432",
    "LOCALAPPDATA",
    "PATHEXT",
    "COMMONPROGRAMFILES",
    "COMMONPROGRAMFILES(X86)",
    "COMMONPROGRAMW6432",
    "PSMODULEPATH",
    "HOMESHARE",
    "ONEDRIVE",
    "ONEDRIVECONSUMER",
    "ONEDRIVECOMMERCIAL",
    "CDPATH",
    "PWD",
    "XDG_DATA_HOME",
    "XDG_CACHE_HOME",
    "XDG_STATE_HOME",
    "CLAUDE_CODE_SAFE_MODE",
    "CLAUDE_CODE_SIMPLE",
    "CLAUDE_CODE_HARBOR_KITE",
    "CLAUDE_CODE_HARBOR_KITE_CLOUD",
    "CLAUDE_CODE_HARBOR_KITE_PACING_OFF",
    "CLAUDE_CODE_SILENT_TURN_REMINDER",
    "CLAUDE_CODE_SILENT_TURN_REMINDER_TURNS",
    "CLAUDE_CODE_SILENT_TURN_REMINDER_SECONDS",
    "CLAUDE_CODE_SILENT_TURN_REMINDER_TEXT",
    "CLAUDE_CODE_MODEL_CAPABILITIES",
    "CLAUDE_CODE_ARTIFACT_ROOM",
    "CLAUDE_CODE_BASH_EDIT_DIFF",
    "CLAUDE_CODE_FORWARD_USER_INTENT",
    "CLAUDE_CODE_WHIMSICAL_ELEPHANT",
    "CLAUDE_CODE_ARTIFACT_PRESENCE",
    "CLAUDE_CODE_ARTIFACT_OPEN_ACTION",
    "CLAUDE_CODE_ARTIFACT_REPL",
    "CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR",
    "USER_TYPE",
    "CLAUDE_CODE_MESSAGING_SOCKET",
    "CLAUDE_CODE_MESSAGING_TOKEN",
    "CLAUDE_CODE_DISABLE_ADMIN_ENV_UNION",
    "CLAUDE_CODE_MANAGED_SETTINGS_PATH",
    "CLAUDE_CODE_TOASTY_THIMBLE",
    "CLAUDE_CODE_GENTLE_PARASOL",
    "CLAUDE_CODE_STREAMED_BUMBLEBEE_TEXT",
    "CLAUDE_CODE_LEGACY_BUNDLE",
    "CCR_ENABLE_BUNDLE",
    "CCR_FORCE_BUNDLE",
    "GITHUB_ACTIONS",
    "RUNNER_ENVIRONMENT",
    "CLAUDE_CODE_SUBPROCESS_ENV_SCRUB",
    "ENABLE_BETA_TRACING_DETAILED",
    "BETA_TRACING_ENDPOINT",
    "OTEL_LOG_RAW_API_BODIES",
    ...Ztn,
    "CLAUDE_PTY_RECORD",
    "CLAUDE_CODE_DEBUG_LOGS_DIR",
    "CLAUDE_CODE_DIAGNOSTICS_FILE",
    "CLAUDE_CODE_PERFETTO_TRACE",
    "CLAUDE_CODE_FRAME_TIMING_LOG",
    "CLAUDE_CODE_REMOTE_MEMORY_DIR",
    "CLAUDE_COWORK_MEMORY_PATH_OVERRIDE",
    "AUTOMODE_DECISION_LOG",
    "CLAUDE_CONFIG_DIR",
    "CLAUDE_SECURESTORAGE_CONFIG_DIR",
    "CLAUDE_CODE_TMPDIR",
    "CLAUDE_TMPDIR",
    "TMPDIR",
    "TMP",
    "TEMP",
    "XDG_RUNTIME_DIR",
    "CLAUDE_JOB_DIR",
    "CLAUDE_CODE_DISABLE_BG_STABLE_PATH",
    "CLAUDE_CODE_REMOTE_TOOLS_FORWARD",
    "CLAUDE_CODE_USER_DIALOG_TIMEOUT_MS",
    "CLAUDE_AFK_TIMEOUT_MS",
    "CLAUDE_AFK_COUNTDOWN_MS",
    "CLAUDE_CHROME_CLASSIFIER_FLOOR",
    "CLAUDE_CHROME_PERMISSION_MODE",
    "CLAUDE_CODE_ENABLE_CFC",
    "CLAUDE_CODE_WORKFLOW_SUBAGENT_MODEL",
    ...z
]);
const Z = [
    ...q
];
function ee(e) {
    let n = e.toUpperCase();
    return obr.has(n) || Z.some((i)=>n.startsWith(i));
}
function m(e, n, projectScopeDropWarned, E) {
    if (!e || !G3e(n)) {
        return e;
    }
    let r;
    for (let o of Object.keys(e)){
        if (!ee(o) || NWn(o, e[o], E) || Kvo.has(o) && Ne(e[o]) || K(o.toUpperCase(), e[o])) {
            continue;
        }
        r ??= {
            ...e
        };
        delete r[o];
        if (!projectScopeDropWarned.has(o)) {
            projectScopeDropWarned.add(o);
            let _ = n === "localSettings" ? ".claude/settings.local.json" : ".claude/settings.json";
            let s = I.get(o.toUpperCase());
            t(V.has(o.toUpperCase()) ? `${o} in ${_} is ignored: this key can only come from the environment Claude Code is started with, not from any settings file.` : s !== undefined ? `${o} in ${_} is ignored: a project's settings can only set it to "${s}". Set any other value in ~/.claude/settings.json or managed settings; in a remote or Cowork session, only in the environment Claude Code is started with.` : `${o} in ${_} is ignored \u2014 project-scoped settings can't set this key. Set it in ~/.claude/settings.json or managed settings instead.`, {
                level: "warn"
            });
        }
    }
    return r ?? e;
}
const te = {
    ...Qxt,
    "non-string-value": "its value isn't a string, a number or a boolean"
};
function L(e, n, invalidEnvKeyWarned) {
    if (!e) {
        return e;
    }
    let E;
    for (let [r, o] of Object.entries(e)){
        let _ = o;
        let s = typeof _ === "string" ? _ : typeof _ === "number" || typeof _ === "boolean" ? String(_) : undefined;
        let A = g(r, s);
        if (A === undefined) {
            if (s !== undefined && s !== _) {
                E ??= {
                    ...e
                };
                E[r] = s;
            }
            continue;
        }
        E ??= {
            ...e
        };
        delete E[r];
        let R = te[A];
        let D = Cat(r);
        let d = `${n}:${R}:${D}`;
        if (!invalidEnvKeyWarned.has(d)) {
            invalidEnvKeyWarned.add(d);
            t(`Env key ${D} from ${n} is ignored: ${R}.`, {
                level: "warn"
            });
        }
    }
    return E ?? e;
}
var V = new Set([
    ...q3e,
    "CLAUDE_CODE_HOST_GATEWAY_LINEAGE",
    "CLAUDE_CODE_HOST_CREDS_FILE",
    "CLAUDE_CODE_HOST_AUTH_ENV_VAR",
    "CLAUDE_BG_AUTH_SNAPSHOT_PATH",
    "CLAUDE_BG_SOCKET_TOKENS_PATH",
    ...enn,
    "CLAUDE_CODE_MESSAGING_SOCKET",
    "CLAUDE_CODE_MESSAGING_TOKEN",
    "CLAUDE_CODE_DISABLE_ADMIN_ENV_UNION",
    "CLAUDE_CODE_DISABLE_DANGEROUS_RM_TIMEOUT",
    "CLAUDE_CODE_DISABLE_SUBSTITUTION_RM_PROMPT",
    "CLAUDE_CODE_DISABLE_INLINE_SHELL_RM_PROMPT",
    "CLAUDE_CODE_DISABLE_POWERSHELL_CMD_RM_DENY",
    "CLAUDE_CODE_TRANSCRIPT_LOCAL_GC",
    "CLAUDE_CODE_MANAGED_SETTINGS_PATH",
    "CLAUDE_CODE_EVAL_CONFINED",
    "CLAUDE_CODE_TUI_TRIAL",
    "CLAUDE_RELAUNCH_SESSION_ADD_DIRS",
    "CLAUDE_BG_SESSION_PERMISSION_RULES",
    "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    "CLAUDE_SESSION_INGRESS_TOKEN_FILE",
    "CLAUDE_CODE_SESSION_ACCESS_TOKEN",
    "CLAUDE_CODE_SESSION_KIND",
    "CLAUDE_CODE_SANDBOXED",
    "CLAUDE_BG_WORKSPACE_TRUSTED",
    "CLAUDE_BG_CARRIED_PROMPTS_SHA256",
    "CLAUDE_CODE_RELAUNCH_HOME_TRUST",
    "CLAUDE_BRIDGE_REATTACH_SESSION",
    "CLAUDE_CODE_PROJECT_DIR_NAME",
    "CLAUDE_PTY_HOST_EXEC",
    "CLAUDE_BG_PTY_AUTH",
    "CLAUDE_BG_RV_AUTH",
    "CLAUDE_BG_CLAIM_AUTH",
    "CLAUDE_BG_RENDEZVOUS_SOCK",
    "CLAUDE_BG_BACKEND",
    "CLAUDE_BG_TCC_DISCLAIMED",
    "CLAUDE_PTY_HOST_NO_STABLE_PATH"
]);
const ne = new Set([
    "CLAUDE_CODE_TRANSCRIPT_LOCAL_GC"
]);
function Ee(e, n, i) {
    return i === "policySettings" && ne.has(e.toUpperCase()) && vs(n);
}
function p(hostManagedDropWarned, n, i, E = false) {
    if (hostManagedDropWarned.has(n)) {
        return;
    }
    hostManagedDropWarned.add(n);
    let r = T(n);
    t(E ? `Ignoring ${r} from ${i} \u2014 repo-committed settings can't re-point the TLS/proxy channel of a session whose credential comes from the host. Set it in ~/.claude/settings.json or managed settings instead.` : `Ignoring ${r} from ${i} \u2014 this session's provider routing is managed by the host (CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST or a host-auth-callback marker), so settings-sourced provider/auth configuration does not apply.`, {
        level: "warn"
    });
}
function M(e, n, providerStripContext, hostManagedDropWarned) {
    if (!e) {
        return {};
    }
    let r = providerStripContext.managedByHost || providerStripContext.desktopHost && J.has(n);
    let o = {};
    for (let [_, s] of Object.entries(e)){
        if (V.has(_.toUpperCase()) && !Ee(_, s, n)) {
            continue;
        }
        if (!r) {
            o[_] = s;
            continue;
        }
        if (nnn(_) && (providerStripContext.managedByHost || !ixs(_))) {
            if (providerStripContext.managedByHost) {
                p(hostManagedDropWarned, _, n);
            }
            continue;
        }
        if (providerStripContext.managedByHost && _.toUpperCase() === "ANTHROPIC_CUSTOM_HEADERS") {
            p(hostManagedDropWarned, _, n);
            continue;
        }
        if (providerStripContext.managedByHostFlag && (!providerStripContext.desktopHost || G3e(n)) && (jWn(_) || qdt(_))) {
            p(hostManagedDropWarned, _, n, providerStripContext.desktopHost);
            continue;
        }
        o[_] = s;
    }
    return o;
}
function y(e, hostSpawnEnvKeys, i) {
    if (!e || !hostSpawnEnvKeys) {
        return e || {};
    }
    let E = {};
    let r = [];
    for (let [o, _] of Object.entries(e)){
        if (!hostSpawnEnvKeys.has(o.toUpperCase())) {
            E[o] = _;
            continue;
        }
        if (i && process.env[o] !== _) {
            r.push(o);
        }
    }
    if (i && r.length > 0) {
        ie(r, i.source, i.warned);
    }
    return E;
}
function ie(e, source, warned) {
    let E = e.filter((o)=>{
        let _ = `${source}:${o}`;
        if (warned.has(_)) {
            return false;
        }
        warned.add(_);
        return true;
    });
    if (E.length === 0) {
        return;
    }
    let r = E.map(T).join(", ");
    t(`Ignoring ${r} from ${source}: the environment this session was launched with already sets ${E.length === 1 ? "it" : "them"}, and when the desktop app or a runner starts the session, the launch environment takes precedence over settings.`, {
        level: "warn"
    });
}
const re = new Set([
    "CLAUDE_CODE_SUBPROCESS_ENV_SCRUB",
    "CLAUDE_CODE_PERFORCE_MODE"
]);
const oe = new Set(Ztn);
function W(e, n) {
    let i = e.toUpperCase();
    return ru() && !(Kdt(e, n) && !nnn(e) && !NFe(i) && !oe.has(i)) && !(re.has(i) && Ne(n));
}
function _e(e, settingsEnvForChildren) {
    if (!e) {
        return {};
    }
    let i = {};
    for (let [E, r] of Object.entries(e)){
        let o = E.toUpperCase();
        if (o === "NO_COLOR" || o === "FORCE_COLOR" || W(E, r)) {
            settingsEnvForChildren[LFe(settingsEnvForChildren, E)] = r;
            continue;
        }
        delete settingsEnvForChildren[LFe(settingsEnvForChildren, E)];
        i[E] = r;
    }
    return i;
}
const se = new Set([
    "CLAUDE_CODE_REMOTE",
    "CLAUDE_CODE_REMOTE_HERMETIC_MODE",
    "CLAUDE_CODE_HOSTED_DESKTOP",
    "CLAUDE_CODE_ENVIRONMENT_KIND",
    "CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT",
    "CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT",
    "CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS",
    "CLAUDE_CODE_BRIDGE_MCP_CARRIER",
    "CLAUDE_CODE_BRIDGE_PROMPT_SHA256",
    "CLAUDE_CODE_APPEND_PROMPT_HEAD",
    "CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID",
    "CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID",
    "CLAUDE_CODE_BRIDGE_SOURCE_DIR",
    "VOICE_STREAM_BASE_URL",
    "CLAUDE_CODE_POLL_EVENTS",
    "CLAUDE_CODE_POLL_EVENT_DECLARATIONS",
    "CLAUDE_CODE_ACCOUNT_UUID",
    "CLAUDE_CODE_ORGANIZATION_UUID",
    "CLAUDE_CODE_USER_EMAIL",
    "CLAUDE_CODE_CONTAINER_ID",
    "CLAUDE_CODE_SESSION_ID",
    "CLAUDE_CODE_SYNC_SESSION_REFS",
    "CLAUDE_CODE_SKILL_PROPOSALS",
    "CLAUDE_CODE_REMOTE_SESSION_ID",
    "CLAUDE_CODE_HOVER_REST",
    "CCR_AGENT_PROXY_ENABLED",
    "CCR_AGENT_PROXY_RELAY_MODE",
    "CCR_AGENT_PROXY_INCLUDE_HOSTS",
    "CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED",
    "CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED",
    "CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY",
    "CCR_AGENT_PROXY_CA_WATCH_ENABLED",
    "CCR_AGENT_PROXY_CA_CERT_B64",
    "CCR_AGENT_PROXY_FRAME_HOSTS",
    "AGENT_PROXY_URL",
    "AGENT_PROXY_AUTH_TOKEN",
    "CLAUDE_CODE_MCP_SERVE_AUTH_TOKEN",
    "CLAUDE_CODE_MCP_SERVE_SETTINGS",
    "CLAUDE_CODE_MCP_SERVE_TOOL_OUTPUT",
    ...[],
    "CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG",
    "CLAUDE_CODE_AGENT_PROXY_GH_SHIM",
    "CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS",
    "SESSION_INGRESS_URL",
    "CLAUDE_CODE_REMOTE_SDK_URL",
    "CCR_SESSION_PROFILE",
    "CLAUDE_CODE_REMOTE_SESSION_ORIGIN",
    "CLAUDE_CODE_WORKER_EPOCH",
    "CLAUDE_CODE_DISABLE_WORKING_SYNC",
    ...[],
    "CLAUDE_CODE_CCR_EARLY_HYDRATE_PREFETCH",
    "CLAUDE_CODE_CCR_EARLY_REMOTE_CONNECT",
    "CLAUDE_CODE_CCR_EARLY_PLUGINS_SYNC",
    "CLAUDE_CODE_CCR_EARLY_SKILLS_SYNC",
    "CLAUDE_CODE_SYNC_REUSE_WITHIN_MS",
    "CLAUDE_CODE_CCR_FOLD_FIRST_TURN_RESCAN",
    "CLAUDE_CODE_GROWTHBOOK_KICK_FROM_INIT",
    "CLAUDE_CODE_GROWTHBOOK_KICK_ON_WARM_CACHE",
    "CLAUDE_CODE_SLEEP_COMPACT",
    "CLAUDE_CODE_SLEEP_COMPACT_AFTER_MS",
    "CLAUDE_CODE_CCR_SKIP_FRESH_MIGRATIONS",
    "CLAUDE_CODE_MANAGED_CONFIG_PREFETCH",
    "CLAUDE_CODE_CONFIG_WATCH_EVENTS",
    "CLAUDE_CODE_FLAG_FETCH_WAIT_MS",
    "CLAUDE_CODE_GB_DISK_CACHE_WHEN_TELEMETRY_OFF",
    "CLAUDE_CODE_HOME_SEED_HOLD_TIMEOUT_MS",
    "CLAUDE_CODE_HOME_SEED_VERDICT_TIMEOUT_MS",
    "CLAUDE_CODE_RESUME_SESSIONSTART_HOOKS_WAIT_MS",
    "CLAUDE_CODE_DISABLE_HOOK_FORWARDING",
    "CLAUDE_CODE_DISABLE_PLUGIN_FORWARDING",
    "CLAUDE_CODE_DISABLE_TURN_HANDOFF",
    "CLAUDE_CODE_RESTRICTED",
    "CLAUDE_CODE_RESTRICT_PERSONAL_CONFIG"
]);
const Ce = new Set([
    "CLAUDE_REMOTE_WORKFLOW_SCRIPT",
    "CLAUDE_REMOTE_WORKFLOW_ARGS",
    "CLAUDE_WORKFLOW_NAME_ONLY"
]);
const ae = new Set([
    "CLAUDE_CODE_ENTRYPOINT",
    "CLAUDE_CODE_HOST_SESSION_ID",
    "CLAUDE_CODE_HOST_WORKTREE",
    "CLAUDE_CODE_HOST_WORKTREE_FENCE",
    "CLAUDE_CODE_AUTOUPDATER_DISABLED_BY_HOST",
    "CLAUDE_CODE_IS_COWORK",
    "CLAUDE_CODE_COWORK_FRAME_ARTIFACTS",
    "CLAUDE_CODE_HOST_SCHEDULED_RUN",
    "CLAUDE_CODE_ARTIFACT_SHARE",
    "CLAUDE_CODE_ARTIFACT_VERSIONS",
    "CLAUDE_CODE_CCR_SURFACE",
    "CLAUDE_CODE_SESSION_ORIGIN",
    "SYSTEM_REMINDER_MEMORY_CONTEXT",
    "CLAUDE_CODE_MEMORY_SUBAGENT_APPEND",
    "CLAUDE_CODE_POST_TURN_MEMORY",
    "CLAUDE_CODE_POST_TURN_MEMORY_CONFIG",
    "CLAUDE_CODE_POST_TURN_MEMORY_SYNC",
    ...Q,
    "CLAUDE_CODE_QUESTION_EXTENDED",
    "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS",
    "CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES",
    "CLAUDE_CODE_MCP_APPS_HOST",
    "CLAUDE_CODE_HOST_PROMPT_SUPERSEDES_RECORD",
    "CLAUDE_CODE_REMOTE_TOOLS_PIN_STORED_LOGIN",
    "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED",
    "CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH",
    "CLAUDE_CODE_SDK_READS_SESSION_STATE",
    "CLAUDE_CHROME_PAIRED_DEVICE_ID",
    "CLAUDE_CHROME_TAB_GROUP_KEY",
    gPe,
    "CLAUDE_CODE_SANDBOXED",
    "CLAUDE_CODE_ATTRIBUTION_STATUS_TIMEOUT_MS",
    "CLAUDE_CODE_TOOL_USE_ID",
    "CLAUDE_CODE_DISABLE_ATTRIBUTION_CROSS_REPO",
    "CLAUDE_CODE_CONFIG_PROBE"
]);
const Oe = new Set([
    "CLAUDE_STAGE_FILE_ROOT"
]);
var I = new Map([
    [
        "CLAUDE_CHROME_CLASSIFIER_FLOOR",
        "1"
    ],
    [
        "CLAUDE_CHROME_PERMISSION_MODE",
        "ask"
    ],
    [
        "CLAUDE_CODE_ENABLE_CFC",
        "0"
    ]
]);
function K(e, n) {
    switch(e){
        case "CLAUDE_CHROME_CLASSIFIER_FLOOR":
            return Ne(n);
        case "CLAUDE_CHROME_PERMISSION_MODE":
            return n === "ask";
        case "CLAUDE_CODE_ENABLE_CFC":
            return vs(n);
        default:
            return false;
    }
}
function cfo() {
    for (let e of I.keys()){
        delete process.env[e];
    }
}
const De = "CLAUDE_CODE_DISABLE_DIR_";
const Se = new Set([
    "CLAUDE_CODE_PLUGIN_DIRS",
    "CLAUDE_CODE_PLUGIN_DIR_WATCH",
    "CLAUDE_CODE_PROCESS_WRAPPER"
]);
function Ae(e, source) {
    if (e === undefined || !vh() || source !== "userSettings" && source !== "globalConfig") {
        return e;
    }
    return ua(e, (i, E)=>Se.has(E.toUpperCase()));
}
function H(e) {
    if (!e) {
        return {};
    }
    let n = KNe();
    let i = {};
    for (let [E, r] of Object.entries(e)){
        let o = E.toUpperCase();
        if (!se.has(o) && !o.startsWith(De) && !Ce.has(o) && !ae.has(o) && !Oe.has(o) && !(n && I.has(o) && !K(o, r)) && true && o !== "CLAUDE_CODE_REMOTE_TOOLS_FORWARD") {
            i[E] = r;
        }
    }
    return i;
}
function dfo() {
    return O.envAboveProjectSettings();
}
function YA() {
    return O.getPreSettingsEnvSnapshot();
}
function gYe() {
    let e = {
        ...YA()
    };
    for (let n of Object.keys(e)){
        if (process.env[n] === undefined) {
            delete e[n];
        }
    }
    return e;
}
function JJt(e, n) {
    return O.isSettingsSourcedEnvValue(e, n);
}
function Qg() {
    return O.peekPreSettingsEnvSnapshot();
}
function XQ() {
    return O.getAppliedGlobalConfigEnv();
}
$Rs(YA);
Dbs(Qg);
function ufo(e) {
    O.dropPreSettingsEnvSnapshot(e);
}
function iY(e, n = "policySettings") {
    return O.filterPolicyPredicateEnv(e, n, {
        forPolicyMatch: false
    });
}
function Zxt(e, n = "policySettings") {
    return O.filterPolicyPredicateEnv(e, n, {
        forPolicyMatch: true
    });
}
function YNe(e, n) {
    return O.withoutInvalidSettingsEnv(e, n);
}
const Re = [
    "userSettings",
    "flagSettings",
    "policySettings"
];
const U = [
    "TRACES",
    "METRICS",
    "LOGS",
    "PROFILES"
];
const BMt_1 = BMt;
const F = new Set([
    "HEADERS",
    "CLIENT_KEY",
    "CLIENT_CERTIFICATE"
]);
const G = new Set([
    "OTEL_LOGS_EXPORTER",
    "OTEL_TRACES_EXPORTER"
]);
const B = "CLAUDE_CODE_ENABLE_TELEMETRY";
const b = "BETA_TRACING_ENDPOINT";
const ct = new Set([
    `${BMt}ENDPOINT`,
    `${BMt}HEADERS`,
    `${BMt}PROTOCOL`
]);
function f(e) {
    return e;
}
function le(e) {
    return !e.split(",").map((n)=>n.trim()).includes("otlp");
}
class w {
    providerStripContext = P;
    projectScopeDropWarned = new Set;
    hostManagedDropWarned = new Set;
    invalidEnvKeyWarned = new Set;
    hostSpawnEnvKeys = undefined;
    settingsEnvForChildren = {};
    materializedProcessWrapper = undefined;
    preSettingsEnvSnapshot = undefined;
    userTierNames = new Set;
    launchNamesBeforeClaim = undefined;
    userTierNamesInSnapshot = new Set;
    otelDominanceDropWarned = new Set;
    hostSpawnEnvDropWarned = new Set;
    servedFolderEnvWithheld = false;
    getPreSettingsEnvSnapshot() {
        this.preSettingsEnvSnapshot ??= this.latchPreSettingsEnvSnapshot({
            ...process.env
        });
        return this.preSettingsEnvSnapshot;
    }
    latchPreSettingsEnvSnapshot(e) {
        let launchNamesBeforeClaim = this.launchNamesBeforeClaim;
        this.userTierNamesInSnapshot = new Set(launchNamesBeforeClaim === undefined ? [] : Object.keys(e).map((i)=>i.toUpperCase()).filter((i)=>this.userTierNames.has(i) && !launchNamesBeforeClaim.has(i)));
        return Object.freeze(e);
    }
    envAboveProjectSettings() {
        let e = this.getPreSettingsEnvSnapshot();
        let n = {};
        for (let [i, E] of Object.entries(e)){
            if (!this.userTierNamesInSnapshot.has(i.toUpperCase())) {
                n[i] = E;
            }
        }
        return {
            ...n,
            ...fe("flagSettings")?.env,
            ...fe("policySettings")?.env
        };
    }
    peekPreSettingsEnvSnapshot() {
        return this.preSettingsEnvSnapshot;
    }
    appliedGlobalConfigEnv = undefined;
    settingsOfferedEnvValues = new Map;
    getAppliedGlobalConfigEnv() {
        return this.appliedGlobalConfigEnv;
    }
    dropPreSettingsEnvSnapshot(e) {
        if (e !== undefined && this.preSettingsEnvSnapshot) {
            this.launchNamesBeforeClaim = new Set([
                ...Object.keys(this.preSettingsEnvSnapshot),
                ...e
            ].map((n)=>n.toUpperCase()));
        }
        this.preSettingsEnvSnapshot = undefined;
    }
    reset() {
        this.providerStripContext = P;
        this.projectScopeDropWarned.clear();
        this.hostManagedDropWarned.clear();
        this.invalidEnvKeyWarned.clear();
        this.hostSpawnEnvKeys = undefined;
        this.settingsEnvForChildren = {};
        this.materializedProcessWrapper = undefined;
        this.preSettingsEnvSnapshot = undefined;
        this.userTierNames.clear();
        this.launchNamesBeforeClaim = undefined;
        this.userTierNamesInSnapshot = new Set;
        this.appliedGlobalConfigEnv = undefined;
        this.settingsOfferedEnvValues.clear();
        this.otelDominanceDropWarned.clear();
        this.hostSpawnEnvDropWarned.clear();
        this.servedFolderEnvWithheld = false;
    }
    servedFolderEnvWasWithheld() {
        return this.servedFolderEnvWithheld;
    }
    filterSettingsEnv(e, source) {
        if (this.withholdsEnvFrom(source)) {
            return {};
        }
        let i = _e(y(M(H(h(m(L(Ae(this.asFromAFolderNobodyTrusted(e, source, true), source), source, this.invalidEnvKeyWarned), source, this.projectScopeDropWarned, ()=>this.envAboveProjectSettings()))), source, this.providerStripContext, this.hostManagedDropWarned), this.hostSpawnEnvKeys, {
            source,
            warned: this.hostSpawnEnvDropWarned
        }), this.settingsEnvForChildren);
        for (let [E, r] of Object.entries(i)){
            let o = E.toUpperCase();
            let _ = r.trim();
            let s = this.settingsOfferedEnvValues.get(o);
            if (s) {
                s.add(_);
            } else {
                this.settingsOfferedEnvValues.set(o, new Set([
                    _
                ]));
            }
        }
        if (source === "globalConfig" || source === "userSettings") {
            for (let E of Object.keys(i)){
                this.userTierNames.add(E.toUpperCase());
            }
        }
        return i;
    }
    withoutInvalidSettingsEnv(e, n) {
        return L(e, n, this.invalidEnvKeyWarned);
    }
    isSettingsSourcedEnvValue(e, n) {
        return this.settingsOfferedEnvValues.get(e.toUpperCase())?.has(n.trim()) === true;
    }
    filterPolicyPredicateEnv(e, n, { forPolicyMatch }) {
        if (!forPolicyMatch && this.withholdsEnvFrom(n)) {
            return {};
        }
        let E = y(M(H(h(m(L(forPolicyMatch ? e : this.asFromAFolderNobodyTrusted(e, n, false), n, this.invalidEnvKeyWarned), n, this.projectScopeDropWarned, ()=>this.envAboveProjectSettings()))), n, this.providerStripContext, this.hostManagedDropWarned), this.hostSpawnEnvKeys);
        let r = {};
        for (let [o, _] of Object.entries(E)){
            let s = o.toUpperCase();
            if (s === "NO_COLOR" || s === "FORCE_COLOR") {
                continue;
            }
            if (!forPolicyMatch && W(o, _)) {
                continue;
            }
            r[o] = _;
        }
        return r;
    }
    withholdsEnvFrom(e) {
        return this.providerStripContext.storedLoginPinned && HTr(e);
    }
    asFromAFolderNobodyTrusted(e, n, i) {
        if (e === undefined || !uWn(n)) {
            return e;
        }
        let E = {};
        for (let [r, o] of Object.entries(e)){
            if (typeof o === "string" && axs(r, o)) {
                E[r] = o;
            } else if (i) {
                this.servedFolderEnvWithheld = true;
            }
        }
        return E;
    }
    processWrapperKeyFrom(e) {
        if (this.withholdsEnvFrom(e) || ru() || e === "userSettings" && vh()) {
            return undefined;
        }
        return fe(e)?.processWrapper;
    }
    dropDominatedOtelKey(e, n, i, E, r = "managed settings") {
        if (E.get(e) === process.env[e]) {
            return;
        }
        if (this.hostSpawnEnvKeys?.has(e.toUpperCase())) {
            return;
        }
        if (process.env[e] === undefined) {
            return;
        }
        if (!this.otelDominanceDropWarned.has(e)) {
            this.otelDominanceDropWarned.add(e);
            t(`Dropping ${T(e)}: ${T(i)} is claimed by ${r}, so lower-trust scopes cannot redirect ${n}`, {
                level: "warn"
            });
        }
        delete process.env[e];
    }
    dropDominatedAntAlias(e, n, i, E = "managed settings") {}
    dropDominatedBetaTracingEndpoint(e, n, i = "managed settings") {
        this.dropDominatedOtelKey(b, "the logs and traces signals through detailed beta tracing", e, n, i);
    }
    hostSpawnOtelClaims() {
        let e = new Map;
        let hostSpawnEnvKeys = this.hostSpawnEnvKeys;
        if (!hostSpawnEnvKeys) {
            return e;
        }
        let i = [
            ...hostSpawnEnvKeys
        ].some((E)=>{
            let r = f(E);
            return (r.startsWith(BMt_1) && r.endsWith("_ENDPOINT") || r === b) && (process.env[E] ?? "").trim() !== "";
        });
        for (let E of hostSpawnEnvKeys){
            let r = f(E);
            let o = G.has(r) || r === B;
            let _ = i && r.startsWith(BMt_1);
            if (!o && !_) {
                continue;
            }
            let s = process.env[E];
            if (s !== undefined) {
                e.set(E, s);
            }
        }
        return e;
    }
    enforceManagedOtelFamilyDominance() {
        let e = fe("policySettings");
        let n = e?.env;
        let i = (e?.otelHeadersHelper ?? "").trim() !== "";
        let E = new Map;
        for (let [r, o] of Object.entries(n ?? {})){
            let _ = r.toUpperCase();
            if (!E.has(_) || r === _) {
                E.set(_, o);
            }
        }
        this.applyOtelFamilyClaims(this.hostSpawnOtelClaims(), E, "the host spawn env");
        if (!n && !i) {
            return;
        }
        if (i) {
            for (let r of U){
                this.dropDominatedOtelKey(`${BMt_1}${r}_ENDPOINT`, `the ${r.toLowerCase()} signal`, "otelHeadersHelper", E);
            }
            this.dropDominatedOtelKey(`${BMt_1}ENDPOINT`, "telemetry for any signal", "otelHeadersHelper", E);
            this.dropDominatedAntAlias(`${BMt_1}ENDPOINT`, "otelHeadersHelper", E);
            this.dropDominatedBetaTracingEndpoint("otelHeadersHelper", E);
        }
        this.applyOtelFamilyClaims(E, E, "managed settings");
    }
    applyOtelFamilyClaims(e, n, i) {
        for (let [E, r] of e){
            let o = f(E);
            if (o === B) {
                if (process.env[E] === r && !Ne(r)) {
                    this.dropDominatedBetaTracingEndpoint(E, n, i);
                }
                continue;
            }
            if (G.has(o)) {
                if (process.env[E] === r && le(r)) {
                    this.dropDominatedBetaTracingEndpoint(E, n, i);
                }
                continue;
            }
            if (!o.startsWith(BMt_1)) {
                continue;
            }
            if (r.trim() === "") {
                continue;
            }
            if (process.env[E] !== r) {
                continue;
            }
            let _ = U.find((D)=>o.startsWith(`${BMt_1}${D}_`));
            if (_) {
                let D = o.slice(`${BMt_1}${_}_`.length);
                let d = _ === "TRACES" || _ === "LOGS";
                if (F.has(D)) {
                    this.dropDominatedOtelKey(`${BMt_1}${_}_ENDPOINT`, `the ${_.toLowerCase()} signal`, E, n, i);
                    if (d) {
                        this.dropDominatedBetaTracingEndpoint(E, n, i);
                    }
                } else if (D === "ENDPOINT" && d) {
                    this.dropDominatedBetaTracingEndpoint(E, n, i);
                }
                continue;
            }
            let s = o.slice(BMt_1.length);
            let A = F.has(s);
            let R = A ? [
                s,
                "ENDPOINT"
            ] : [
                s
            ];
            for (let D of R){
                for (let d of U){
                    this.dropDominatedOtelKey(`${BMt_1}${d}_${D}`, `the ${d.toLowerCase()} signal`, E, n, i);
                }
            }
            if (A) {
                this.dropDominatedOtelKey(`${BMt_1}ENDPOINT`, "telemetry for any signal", E, n, i);
                this.dropDominatedAntAlias(`${BMt_1}ENDPOINT`, E, n, i);
            }
            if (R.includes("ENDPOINT")) {
                this.dropDominatedBetaTracingEndpoint(E, n, i);
            }
            this.dropDominatedAntAlias(o, E, n, i);
        }
    }
    resetSettingsIfUserSettingsFileMoved(e) {
        if (yn("userSettings") !== e) {
            Pr();
        }
    }
    applySafeConfigEnvironmentVariables() {
        this.getPreSettingsEnvSnapshot();
        this.providerStripContext = v();
        let e = yn("userSettings");
        if (this.hostSpawnEnvKeys === undefined) {
            this.hostSpawnEnvKeys = this.providerStripContext.hostOrchestrated ? new Set(Object.keys(process.env).map((E)=>E.toUpperCase())) : null;
            if (qkr()) {
                this.hostSpawnEnvKeys?.delete("FORCE_COLOR");
            }
        }
        this.settingsEnvForChildren = {};
        this.appliedGlobalConfigEnv = this.filterSettingsEnv(ce().env, "globalConfig");
        Object.assign(process.env, this.appliedGlobalConfigEnv);
        for (let E of Re){
            if (E === "policySettings") {
                continue;
            }
            if (!cn(E)) {
                continue;
            }
            Object.assign(process.env, this.filterSettingsEnv(fe(E)?.env, E));
        }
        KA();
        Object.assign(process.env, this.filterSettingsEnv(fe("policySettings")?.env, "policySettings"));
        let n = new Map;
        for (let E of Lo()){
            let r = this.filterSettingsEnv(fe(E)?.env, E);
            for (let [o, value_1] of Object.entries(r)){
                n.set(o.toUpperCase(), {
                    key: o,
                    value: value_1
                });
            }
        }
        for (let { key, value } of n.values()){
            if (Kdt(key, value)) {
                process.env[key] = value;
            }
        }
        Vkr(this.settingsEnvForChildren);
        let i = process.env[MT];
        if (!i || i === this.materializedProcessWrapper) {
            let E = [
                this.processWrapperKeyFrom("policySettings"),
                this.processWrapperKeyFrom("flagSettings"),
                cn("userSettings") ? this.processWrapperKeyFrom("userSettings") : undefined
            ].find((r)=>typeof r === "string" && r !== "");
            if (E !== undefined) {
                process.env[MT] = E;
                this.materializedProcessWrapper = E;
            }
        }
        this.enforceManagedOtelFamilyDominance();
        this.resetSettingsIfUserSettingsFileMoved(e);
    }
    applyConfigEnvironmentVariables() {
        this.getPreSettingsEnvSnapshot();
        this.providerStripContext = v();
        this.settingsEnvForChildren = {};
        let a_NODE_EXTRA_CA_CERTS = a.NODE_EXTRA_CA_CERTS;
        let a_CLAUDE_CODE_CERT_STORE = a.CLAUDE_CODE_CERT_STORE;
        let a_NODE_OPTIONS = a.NODE_OPTIONS;
        let a_CLAUDE_CODE_CLIENT_CERT = a.CLAUDE_CODE_CLIENT_CERT;
        let a_CLAUDE_CODE_CLIENT_KEY = a.CLAUDE_CODE_CLIENT_KEY;
        this.appliedGlobalConfigEnv = this.filterSettingsEnv(ce().env, "globalConfig");
        Object.assign(process.env, this.appliedGlobalConfigEnv);
        for (let R of Lo()){
            Object.assign(process.env, this.filterSettingsEnv(fe(R)?.env, R));
        }
        Vkr(this.settingsEnvForChildren);
        this.enforceManagedOtelFamilyDominance();
        let o = a.NODE_EXTRA_CA_CERTS !== a_NODE_EXTRA_CA_CERTS || a.CLAUDE_CODE_CLIENT_CERT !== a_CLAUDE_CODE_CLIENT_CERT || a.CLAUDE_CODE_CLIENT_KEY !== a_CLAUDE_CODE_CLIENT_KEY;
        if (a.NODE_EXTRA_CA_CERTS !== a_NODE_EXTRA_CA_CERTS || a.CLAUDE_CODE_CERT_STORE !== a_CLAUDE_CODE_CERT_STORE || a.NODE_OPTIONS !== a_NODE_OPTIONS) {
            dTo();
        }
        let { certPath, keyPath } = fTo();
        let A = (a.CLAUDE_CODE_CLIENT_CERT !== certPath || a.CLAUDE_CODE_CLIENT_KEY !== keyPath) && (certPath !== undefined || keyPath !== undefined);
        if (!A) {
            fCr();
        }
        gpe();
        ES();
        Promise.all([
            mpe(),
            X8()
        ]).then(([R, D])=>{
            if (A && D.readFailed) {
                fCr();
            }
            if (o || A || R || D.changed) {
                gpe();
                ES();
            }
        }).catch(c);
    }
}
var O = new w;
const pt = Yz({
    clear
});
function roe() {
    try {
        O.applySafeConfigEnvironmentVariables();
    } finally{
        Pwo();
    }
    dRe();
}
function XA() {
    try {
        O.applyConfigEnvironmentVariables();
    } finally{
        Pwo();
    }
    dRe();
}
function pfo() {
    return O.servedFolderEnvWasWithheld();
}
function clear() {
    O.reset();
}
export { zB, nbr, sY, KA, rbr, KNe, Qxt, A$n, Cat, obr, cfo, dfo, YA, gYe, JJt, Qg, XQ, ufo, iY, Zxt, YNe, roe, XA, pfo };
