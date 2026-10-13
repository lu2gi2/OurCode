import { lG } from "/$bunfs/root/chunk-dn762950.js";
import { Ne, Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, lt, B, Hsn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { aBe } from "/$bunfs/root/chunk-x0qpydt2.js";
import { Rpe } from "/$bunfs/root/chunk-craerjpn.js";
import { ar, Sq } from "/$bunfs/root/chunk-c56kpkt7.js";
import { Xnn, jxe } from "/$bunfs/root/chunk-6gk7mpsm.js";
import { ka } from "/$bunfs/root/chunk-5mfg4ngf.js";
import { hi } from "/$bunfs/root/chunk-vvkk7cgc.js";
import { ftn } from "/$bunfs/root/chunk-jcpp67yk.js";
import { ln } from "/$bunfs/root/chunk-pj42g5eb.js";
import { posix } from "path";
const u = (e)=>JSON.stringify(e);
const L = new Set([
    "api.anthropic.com",
    "api-staging.anthropic.com",
    ...aBe.map((e)=>new URL(e).hostname)
]);
function bCs(e) {
    let r = wMt();
    if (!e) {
        if (r.status === "absent") {
            return null;
        }
        if (r.status === "rejected") {
            return {
                code: r.code,
                reason: r.reason
            };
        }
        return {
            code: "view_mismatch",
            reason: "the eager argv scan sees a --sdk-url value commander did not bind"
        };
    }
    if (r.status === "rejected") {
        return {
            code: r.code,
            reason: r.reason
        };
    }
    if (r.status === "absent" || r.url !== e) {
        return {
            code: "view_mismatch",
            reason: "the --sdk-url value commander bound disagrees with the eager argv scan"
        };
    }
    return null;
}
function pdt(e) {
    let r;
    try {
        r = new URL(e);
    } catch  {
        return {
            code: "unparseable",
            reason: `could not parse ${u(e)} as a URL`
        };
    }
    if (L.has(r.hostname)) {
        if (r.protocol !== "wss:" && r.protocol !== "https:") {
            return {
                code: "bad_scheme",
                reason: `scheme ${u(r.protocol)} is not permitted for host ${u(r.hostname)}; only wss:// and https:// are accepted`
            };
        }
        return null;
    }
    return {
        code: "not_allowlisted",
        reason: `host ${u(r.hostname)} is not an approved Anthropic endpoint`
    };
}
function wMt() {
    let e = Hsn();
    if (e !== undefined) {
        return {
            status: "ok",
            url: e
        };
    }
    let r = Rpe("--sdk-url");
    let n = r.filter(Boolean).at(-1);
    if (!n) {
        return {
            status: "absent"
        };
    }
    if (new Set(r).size > 1) {
        return {
            status: "rejected",
            code: "conflicting",
            reason: "conflicting --sdk-url occurrences"
        };
    }
    let t = pdt(n);
    if (t) {
        return {
            status: "rejected",
            ...t
        };
    }
    return {
        status: "ok",
        url: n
    };
}
function dxe(e) {
    if (e.protocol === "wss:") {
        e.protocol = "https:";
    } else if (e.protocol === "ws:") {
        e.protocol = "http:";
    }
    return e;
}
const p = "/v2/ccr-sessions/-/meta/mcp";
const cp = "claude-code-remote";
const YSo = [
    "list_triggers",
    "create_trigger",
    "update_trigger",
    "delete_trigger",
    "fire_trigger",
    "send_later"
];
const SCs = [
    "add_repo",
    "check_repo_access",
    "list_repos"
];
const wCs = "Claude Code Remote";
const itn = "bf7c680d-5fdc-5ef4-b4a0-abadb619bf0a";
function fdt(e, r) {
    return {
        type: "http",
        url: e,
        headers: {
            ["X-MCP-Server-ID"]: "bf7c680d-5fdc-5ef4-b4a0-abadb619bf0a",
            "X-Session-UUID": r,
            "anthropic-version": "2023-06-01"
        },
        alwaysLoad: true
    };
}
const Mc = "hearthbot";
const CSe = `mcp__${Mc}__reply`;
const Zkr = `mcp__${Mc}__fetch_messages`;
const eTr = `mcp__${Mc}__fetch_thread`;
const tTr = `mcp__${Mc}__fetch_project_timeline`;
const vMt = new Set([
    Zkr,
    eTr,
    tTr
]);
const XSo = /^[A-Za-z0-9_-]{1,160}$/;
function JSo(e) {
    return `/v2/ccr-sessions/${e}/hearthbot/mcp`;
}
function vCs(e, r) {
    return {
        type: "http",
        url: e,
        headers: {
            "X-Session-UUID": r,
            "anthropic-version": "2023-06-01"
        },
        alwaysLoad: true
    };
}
const ECs = new Set([
    "reply",
    "update_status",
    "no_reply_needed",
    "switch_model",
    "fetch_thread",
    "fetch_project_timeline",
    "fetch_messages",
    "search_channels",
    "set_thread_label",
    "set_thread_resolved",
    "list_thread_sessions",
    "list_thread_connectors",
    "list_project_members",
    "list_project_artifacts",
    "list_project_prs",
    "list_project_files",
    "read_project_file",
    "react",
    "unreact",
    "update_message",
    "get_channel_session_id",
    "get_project_session_id",
    "read_memory",
    "update_memory",
    "report_issue",
    "set_time_zone",
    "pin_artifact",
    "unpin_artifact",
    "suggest_connectors",
    "post_widget",
    "cookie_sign_in_request"
]);
const kCs = new Set([
    "update_memory",
    "update_message",
    "set_thread_resolved",
    "switch_model",
    "pin_artifact",
    "unpin_artifact",
    "report_issue",
    "set_time_zone",
    "cookie_sign_in_request",
    "post_widget",
    "suggest_connectors"
]);
class S {
    reconnect = null;
    toggle = null;
    isDisabled = null;
    dialBlockCause = null;
    policyColdStartWaiter = null;
    skippedDynamicServers = [];
    cliOwnedConfigs = new WeakSet;
    cliOwnedBearerProviders = new WeakMap;
    cliOwnedAsyncBearerProviders = new WeakMap;
    cliOwnedResponseObservers = new WeakMap;
    cliOwnedRequestHeaderProviders = new WeakMap;
    ccrInjectedConfigs = new WeakSet;
    clientAuthProviders = new WeakMap;
    clientFirstPartyBearers = new WeakMap;
    firstToolsListReports = new WeakMap;
    toolsListAhead = new WeakMap;
    stepUpReauthFlights = new Map;
    stepUpReauthExhausted = new Map;
    identityEpoch = 0;
    identityBaseline = undefined;
    identitySeedAttempted = false;
    identityChangedThisProcess = false;
    identityTrippedHandler = null;
    identityTripUnowned = false;
    headlessMcpTeardown = null;
    headlessConnectorMountInFlight = undefined;
    transientRetryPasses = new Map;
    awaitsNextTurnRedial = null;
    authCacheRead = null;
    authCacheWriteChain = Promise.resolve();
    discoverVerdictsRead = null;
    discoverVerdictsWriteChain = Promise.resolve();
    firstPartyDesignConsentAsks = new Map;
    claudeAiConfigsFetch = null;
    claudeAiConnectorIdIndex = undefined;
    claudeAiConnectorListStatus = "pending";
    claudeAiConnectorListGeneration = 0;
    claudeAiConnectorListFetchSeq = 0;
    claudeAiConnectorListSettledSeq = 0;
    claudeAiConfigsFetchTransientFailures = new WeakSet;
    pendingCrossOrgNotice = undefined;
    claudeAiConnectedThisSession = new Set;
    needsAuthNoticedThisSession = new Set;
    pendingScopeExpansionNotice = undefined;
    scopeExpansionDisclosed = false;
    officialUrls = undefined;
    vscodeClient = null;
    stopVscodePolicyGatesRefresh = null;
    toolRefreshSequences = new WeakMap;
    droppedToolsSeqByConnection = new WeakMap;
    toolsListErrorByResult = new WeakMap;
    discoveryFetchErrors = new WeakMap;
    rawToolsByResult = new WeakMap;
    rawCommandsByResult = new WeakMap;
    rawResourcesByResult = new WeakMap;
    rawFetchedAtByResult = new WeakMap;
    persistedDiscoveryRounds = new WeakSet;
    listChangedRefetchHandlers = new WeakMap;
    burnedListingDiscoverPriors = new Set;
    skillsFunnelSeen = new Set;
    skillsFetcher = null;
    discoveryCacheStore = null;
    connectionCache = null;
    cachedFirstDialArmsRan = new WeakSet;
    supersededDials = new WeakSet;
    swrRefreshDialsInFlight = new WeakSet;
    reauthDecisionSinkForTest = undefined;
    holdStaleReauthEntryForTest = false;
    oauthCallbackListeners = new Map;
    oauthCallbackSubmitters = new Map;
    activeOAuthFlows = new Map;
    authLost = Oe();
    reauthReconnect = Oe();
    cachedAdopt = Oe();
    cachedDialFailed = Oe();
}
const U = new q(()=>new S);
function $t() {
    return U.of(B().host);
}
function TCs(e) {
    return $t().clientAuthProviders.has(hi(e.client));
}
function Rue(e, r) {
    let n = $t();
    n.cliOwnedConfigs.add(e);
    if (r?.getBearerToken) {
        n.cliOwnedBearerProviders.set(e, r.getBearerToken);
    }
    if (r?.resolveBearerToken) {
        n.cliOwnedAsyncBearerProviders.set(e, r.resolveBearerToken);
    }
    if (r?.onResponse) {
        n.cliOwnedResponseObservers.set(e, r.onResponse);
    }
    if (r?.requestHeaders) {
        n.cliOwnedRequestHeaderProviders.set(e, r.requestHeaders);
    }
    return e;
}
function kp(e) {
    return typeof e === "object" && e !== null && $t().cliOwnedConfigs.has(e);
}
function $Fe(e) {
    if (typeof e !== "object" || e === null) {
        return false;
    }
    let r = $t();
    return r.cliOwnedBearerProviders.has(e) || r.cliOwnedAsyncBearerProviders.has(e);
}
function D(e) {
    if (typeof e !== "object" || e === null) {
        return null;
    }
    let r = $t().cliOwnedBearerProviders.get(e);
    if (!r) {
        return null;
    }
    try {
        return r() || null;
    } catch  {
        return null;
    }
}
async function Ijn(e) {
    if (typeof e !== "object" || e === null) {
        return null;
    }
    let r = $t().cliOwnedAsyncBearerProviders.get(e);
    if (!r) {
        return D(e);
    }
    try {
        return await r() || null;
    } catch  {
        return null;
    }
}
function Ojn(e, r) {
    if (typeof e !== "object" || e === null) {
        return {};
    }
    let n = $t().cliOwnedRequestHeaderProviders.get(e);
    if (!n) {
        return {};
    }
    try {
        return n(r);
    } catch  {
        return {};
    }
}
function Mjn(e, r) {
    if (typeof e !== "object" || e === null) {
        return;
    }
    let n = $t().cliOwnedResponseObservers.get(e);
    if (!n) {
        return;
    }
    try {
        n({
            method: r.method,
            status: r.status,
            headers: r.headers,
            requestHeaders: r.requestHeaders,
            bearerFingerprint: r.bearerFingerprint
        });
    } catch  {}
}
const da = "remote-devices";
const A3e = "claude_ai";
const mdt = "widgets";
const ACs = "visualize";
const uxe = "memory";
const atn = `mcp__${uxe}__memory_`;
const ltn = "63d0e670-f310-5da6-b45c-86ffaf444223";
function EMt(e, r) {
    return lG(r, lG(e, k));
}
var k = "00000000-0000-0000-0000-000000000000";
function FFe(e) {
    if (e.type !== "http") {
        return;
    }
    let r = "headers" in e ? e.headers : undefined;
    for (let [n, t] of Object.entries(r ?? {})){
        if (n.toLowerCase() === "x-mcp-server-id") {
            return t.toLowerCase();
        }
    }
}
const Hjn = new lt(()=>({}));
function CCs(e) {
    return FFe(e) === ltn;
}
const gdt = "758bbc64-7e6c-5dab-a3a5-2a4c7ca423fc";
const Djn = "667a974b-0f6b-57fc-8973-52854120fcb3";
const kMt = new Set([
    "Claude_Pages",
    "Claude_Docs"
]);
const QSo = "1a59c906-04da-521d-bda7-7f71b9f9e01c";
const Ljn = "/v1/pages/mcp";
const Njn = "2cd180e1-ecb6-5156-82c8-41224ae6346e";
const RCs = "claude-artifacts";
const xCs = "/v1/code/mcp/ccr-artifacts";
const ZSo = "/api/artifacts/mcp";
function $jn(e) {
    return FFe(e) === QSo;
}
const ctn = `mcp__${da}__device_bash`;
const nTr = "ide";
const PCs = `mcp__${nTr}__executeCode`;
const h = "office_bridge.listing";
function pxe({ _meta }) {
    let n = typeof _meta === "object" && _meta !== null && h in _meta ? _meta[h] : undefined;
    if (n === "stub" || n === "live") {
        return n;
    }
}
const ICs = [
    ctn,
    `mcp__${da}__device_list_dir`,
    `mcp__${da}__device_stage_files`,
    `mcp__${da}__device_commit_files`
];
const ewo = new Set([
    nTr,
    da
]);
const H = [
    "claude_in_chrome",
    "claude_browser",
    "claude_preview",
    "claude_code_ios_simulator",
    "claude_code_android_emulator",
    "computer_use",
    "framebuffer",
    "plugins",
    "skills",
    "mcp_registry",
    "scheduled_tasks",
    "cowork",
    "session_info",
    "dispatch",
    "remote_devices",
    "ccd_directory"
];
const N = new Set([
    "workspace",
    "terminal",
    "office",
    "visualize",
    "window_halo",
    "dev_debug",
    "ccd_session",
    ftn
]);
function f(e) {
    return e.replace(/[^a-zA-Z0-9_-]+/g, "_").toLowerCase().replace(/-/g, "_");
}
const C = [
    "claude_browser"
];
function dtn(e, r = C) {
    let n = f(e);
    return r.find((t)=>f(t) === n) ?? null;
}
function hdt(e) {
    return e.toLowerCase().replace(/[^a-z0-9]/g, "");
}
function ydt(e, r) {
    let n = hdt(e);
    return n.length > 0 && n === hdt(r);
}
function OCs(e, r = C) {
    if (ewo.has(e)) {
        return true;
    }
    if (dtn(e, r) !== null) {
        return false;
    }
    let n = f(e);
    return N.has(n) || H.some((t)=>n.startsWith(t));
}
const g = [
    "/v2/session_ingress/shttp/mcp/",
    "/v2/session_ingress/mcp/ws/",
    "/v2/ccr-sessions/",
    "/v1/code/"
];
const MCs = "spent";
class O {
    captured = E();
    carrier = R();
    ownSessionIds = y();
    get atStartup() {
        return this.captured;
    }
    get ownCcrSessionIds() {
        return this.ownSessionIds;
    }
    get bridgeCarrier() {
        return this.carrier;
    }
    get isBridgeCarrierChild() {
        return this.carrier === "child";
    }
    reset() {
        this.captured = E();
        this.carrier = R();
        this.ownSessionIds = y();
    }
}
const ny = new O;
function two() {
    if (ny.bridgeCarrier) {
        return [
            "CLAUDE_CODE_SESSION_ACCESS_TOKEN",
            "SESSION_INGRESS_URL",
            "CLAUDE_CODE_BRIDGE_PROMPT_SHA256"
        ];
    }
    return [];
}
function $y(e) {
    let ny_atStartup = ny.atStartup;
    if (!ny_atStartup) {
        return false;
    }
    let n;
    let t;
    try {
        n = new URL(e);
        t = new URL(ny_atStartup);
    } catch  {
        return false;
    }
    if ((n.protocol === "wss:" ? `https://${n.host}` : n.protocol === "ws:" ? `http://${n.host}` : n.origin) !== t.origin) {
        return false;
    }
    return g.some((o)=>n.pathname.includes(o));
}
function Fjn(e, r) {
    if (!("url" in r) || typeof r.url !== "string") {
        return false;
    }
    if (!$y(r.url)) {
        return false;
    }
    switch(ny.bridgeCarrier){
        case undefined:
            return true;
        case "child":
            return r.scope === "dynamic" && e === cp;
        case "descendant":
            return false;
    }
}
function j(e, r) {
    let n = l(e, r);
    if (!n) {
        return false;
    }
    if (n.pathname === p) {
        return n.search === "";
    }
    let t = n.searchParams.getAll("toolbox_mcp_server_id");
    return g.some((s)=>n.pathname.includes(s)) && t.length === 1 && t[0] === itn;
}
function HCs(e) {
    let r = _();
    if (r === null) {
        return false;
    }
    let n = l(e, r);
    if (!n) {
        return false;
    }
    let t = UFe.exec(n.pathname)?.[1];
    if (t === undefined) {
        return false;
    }
    if (!ny.ownCcrSessionIds.some((d)=>ar(d) === ar(t))) {
        return false;
    }
    let s = [
        ...n.searchParams.keys()
    ];
    let o = n.searchParams.getAll("toolbox_mcp_server_id");
    let i = n.searchParams.get("mcp_server_id");
    let a = n.searchParams.get("mcp_url");
    return new Set(s).size === s.length && s.every((d)=>m.includes(d)) && o.length === 1 && o[0] === gdt && (i === null || P().has(i)) && (a === null || l(a, r) !== null);
}
function DCs(e) {
    if (!$y(e)) {
        return false;
    }
    let r;
    try {
        r = new URL(e);
    } catch  {
        return false;
    }
    let n = [
        ...r.searchParams.getAll("mcp_server_id"),
        ...r.searchParams.getAll("toolbox_mcp_server_id")
    ];
    if (n.length === 0) {
        return false;
    }
    let t;
    try {
        t = decodeURIComponent(r.pathname);
    } catch  {
        return true;
    }
    let s = posix.normalize(t);
    let o;
    for (let c of [
        UFe,
        T,
        W,
        G
    ]){
        o = c.exec(r.pathname)?.[1] ?? c.exec(s)?.[1];
        if (o !== undefined) {
            break;
        }
    }
    if (o === undefined && [
        "/v2/ccr-sessions/",
        "/v1/code/sessions/",
        "/v2/session_ingress/shttp/mcp/",
        "/v2/session_ingress/mcp/ws/"
    ].some((c)=>r.pathname.includes(c) || t.includes(c) || s.includes(c))) {
        return true;
    }
    if (o === z && ny.ownCcrSessionIds.length === 0) {
        return true;
    }
    let a = P();
    let d = o === undefined ? [] : A(ar(o));
    return n.some((c)=>a.has(c) || d.includes(c) || c.toLowerCase() === ka);
}
function P() {
    let e = new Set([
        gdt
    ]);
    for (let r of ny.ownCcrSessionIds){
        for (let n of A(ar(r))){
            e.add(n);
        }
    }
    return e;
}
function A(e) {
    return [
        `cse_${e}`,
        `session_${e}`
    ].map((r)=>EMt(r, ka));
}
var UFe = /^\/v2\/ccr-sessions\/([A-Za-z0-9_-]+)\/mcp$/;
var T = /^\/v1\/code\/sessions\/([A-Za-z0-9_-]+)\/mcp$/;
function x(e) {
    return `/internal/v2/ccr-sessions/${e}/toolport/`;
}
const F = new RegExp(`^${x("[A-Za-z0-9_-]+")}mcp$`);
function nwo(e) {
    return $y(e) && F.test(new URL(e).pathname);
}
const V = new RegExp(`^${x("[^/]+")}`);
function Ujn(e) {
    if (!$y(e)) {
        return false;
    }
    let r;
    try {
        r = posix.normalize(decodeURIComponent(new URL(e).pathname));
    } catch  {
        return true;
    }
    return V.test(r);
}
var W = /^\/v2\/session_ingress\/shttp\/mcp\/([A-Za-z0-9_-]+)$/;
var G = /^\/v2\/session_ingress\/mcp\/ws\/([A-Za-z0-9_-]+)$/;
var z = "-";
function Bjn(e, r, n) {
    let t = l(e, r);
    if (!t) {
        return null;
    }
    let s = UFe.exec(t.pathname);
    let o = Y(t, r);
    if (!s || s[1] !== n || !o) {
        return null;
    }
    return `${r}/v2/ccr-sessions/${n}/mcp?${o}`;
}
var m = [
    "mcp_url",
    "mcp_server_id",
    "toolbox_mcp_server_id"
];
const rTr = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Y(e, r) {
    let n = [
        ...e.searchParams.keys()
    ];
    if (new Set(n).size !== n.length || n.some((i)=>!m.includes(i)) || e.searchParams.get("toolbox_mcp_server_id") !== itn) {
        return null;
    }
    let t = new URLSearchParams;
    let s = e.searchParams.get("mcp_url");
    if (s !== null) {
        let i = l(s, r);
        if (!i || i.pathname !== p || i.search !== "") {
            return null;
        }
        t.set("mcp_url", `${r}${p}`);
    }
    let o = e.searchParams.get("mcp_server_id");
    if (o !== null) {
        if (!rTr.test(o)) {
            return null;
        }
        t.set("mcp_server_id", o);
    }
    t.set("toolbox_mcp_server_id", itn);
    return t.toString();
}
function l(e, r) {
    let n;
    try {
        n = new URL(e);
    } catch  {
        return null;
    }
    if (n.origin === r && n.username === "" && n.password === "" && n.hash === "") {
        return n;
    }
    return null;
}
function _() {
    let ny_atStartup = ny.atStartup;
    if (!ny_atStartup) {
        return null;
    }
    try {
        return new URL(ny_atStartup).origin;
    } catch  {
        return null;
    }
}
function LCs(e) {
    let r = _();
    let n = r === null ? null : l(e, r);
    if (!n) {
        return false;
    }
    let t = (UFe.exec(n.pathname) ?? T.exec(n.pathname))?.[1];
    return t !== undefined && ny.ownCcrSessionIds.some((s)=>ar(s) === ar(t));
}
function jjn(e) {
    let r = _();
    return r !== null && j(e, r);
}
function NCs(e) {
    let r = _();
    let n = r === null ? null : l(e, r);
    let sessionSegment = n ? UFe.exec(n.pathname)?.[1] : undefined;
    if (!n || sessionSegment === undefined) {
        return null;
    }
    let s = [
        ...n.searchParams.keys()
    ];
    let mcpServerId = n.searchParams.get("mcp_server_id");
    let toolboxMcpServerId = n.searchParams.get("toolbox_mcp_server_id");
    if (new Set(s).size !== s.length || s.some((a)=>!m.includes(a)) || mcpServerId === null || !rTr.test(mcpServerId) || toolboxMcpServerId === null) {
        return null;
    }
    return {
        sessionSegment,
        mcpServerId,
        toolboxMcpServerId,
        upstreamUrl: n.searchParams.get("mcp_url") ?? undefined
    };
}
function _dt(e) {
    if (e !== undefined && pdt(e) === null) {
        return new URL(e).origin;
    }
    return null;
}
const K = "/v1/code/mcp/hearthbot";
const X = /^\/v2\/ccr-sessions\/(?:-|[A-Za-z0-9_-]+)\/hearthbot\/mcp$/;
function Wjn(e) {
    if (!$y(e)) {
        return false;
    }
    let r;
    try {
        r = new URL(e);
    } catch  {
        return false;
    }
    return r.username === "" && r.password === "" && r.hash === "" && r.search === "" && (r.pathname === K || X.test(r.pathname));
}
const b = new Set([
    "bridge.claudeusercontent.com",
    "bridge-staging.claudeusercontent.com"
]);
const Z = "/devices/mcp";
function oTr(e) {
    let r;
    try {
        r = new URL(e);
    } catch  {
        return false;
    }
    return r.protocol === "wss:" && r.username === "" && r.password === "" && b.has(r.hostname);
}
function fxe(e) {
    if ("url" in e && typeof e.url === "string" && $y(e.url)) {
        return true;
    }
    return kp(e);
}
function I(e) {
    if (!$y(e) || !URL.canParse(e)) {
        return;
    }
    return new URL(e).searchParams.get("mcp_url") || undefined;
}
const J = new Set([
    "http:",
    "https:",
    "ws:",
    "wss:"
]);
function rwo(e) {
    let r = I(e);
    if (r === undefined || !URL.canParse(r)) {
        return;
    }
    let n = new URL(r);
    if (J.has(n.protocol)) {
        return n.hostname.toLowerCase();
    }
}
function RSe(e) {
    let r = I(e);
    if (!r) {
        return false;
    }
    try {
        let n = new URL(r);
        return b.has(n.hostname) && n.pathname === Z;
    } catch  {
        return false;
    }
}
function xSe(e) {
    if (!("url" in e) || typeof e.url !== "string") {
        return;
    }
    try {
        let r = new URL(e.url);
        r.search = "";
        r.username = "";
        r.password = "";
        r.hash = "";
        return r.toString().replace(/\/$/, "");
    } catch  {
        return;
    }
}
function IF(e) {
    if (e) {
        return ln(e);
    }
}
function $Cs(e) {
    if (!URL.canParse(e)) {
        return;
    }
    let r = new URL(e);
    if (r.origin === "null") {
        return;
    }
    if (r.pathname !== "/" || r.search !== "" || r.hash !== "") {
        return `${r.origin}/\u2026`;
    }
    return r.origin;
}
function E() {
    return process.env.SESSION_INGRESS_URL ?? process.env.ANTHROPIC_BASE_URL;
}
function R() {
    let CLAUDE_CODE_BRIDGE_MCP_CARRIER = process.env.CLAUDE_CODE_BRIDGE_MCP_CARRIER;
    if (CLAUDE_CODE_BRIDGE_MCP_CARRIER === "1" || !CLAUDE_CODE_BRIDGE_MCP_CARRIER) {
        if (CLAUDE_CODE_BRIDGE_MCP_CARRIER) {
            return "child";
        }
        return undefined;
    }
    if (process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && Ne(process.env.CLAUDE_CODE_REMOTE)) {
        delete process.env.CLAUDE_CODE_BRIDGE_MCP_CARRIER;
        return;
    }
    return "descendant";
}
function y() {
    return [
        process.env.CLAUDE_CODE_REMOTE_SESSION_ID,
        process.env.CLAUDE_CODE_SESSION_ID
    ].filter((e)=>e !== undefined && Sq(e));
}
function BFe(e) {
    if ("url" in e) {
        return e.url;
    }
    return null;
}
function C3e(e) {
    if (e.type !== undefined && e.type !== "stdio") {
        return null;
    }
    let r = e;
    return [
        r.command,
        ...r.args ?? []
    ];
}
function owo(e) {
    if (!g.some((r)=>e.includes(r))) {
        return e;
    }
    try {
        return new URL(e).searchParams.get("mcp_url") || e;
    } catch  {
        return e;
    }
}
function ose(e) {
    return e.type ?? ("command" in e ? "stdio" : "unknown");
}
function zjn(e) {
    let { authoredUnexpanded, expanded, cliOwned } = e;
    let s = e.detail ?? "endpoint";
    if (authoredUnexpanded) {
        let i = BFe(authoredUnexpanded);
        if (i) {
            if (s === "endpoint") {
                return jxe(i);
            }
            if (Q(i)) {
                return v(i);
            }
            return M(i) ?? v(i);
        }
        let a = C3e(authoredUnexpanded);
        if (a) {
            if (s === "endpoint") {
                return jxe(a.join(" "));
            }
            return undefined;
        }
        if (s === "endpoint") {
            return ose(authoredUnexpanded);
        }
        return undefined;
    }
    let o = BFe(expanded);
    if (o) {
        let i = cliOwned && $y(o) ? owo(o) : o;
        let a = M(i);
        if (a !== undefined) {
            return a;
        }
    }
    if (s === "endpoint") {
        return ose(expanded);
    }
}
function M(e) {
    try {
        let r = new URL(e).origin;
        if (r === "null") {
            return undefined;
        }
        return r;
    } catch  {
        return;
    }
}
function utn(e, r = e) {
    let n = (i)=>{
        let e_length = e.length;
        for (let d of [
            "/",
            "?",
            "#",
            "\\"
        ]){
            let c = r.indexOf(d, i);
            if (c !== -1 && c < e_length) {
                e_length = c;
            }
        }
        return e_length;
    };
    let t = r.indexOf("://");
    let s = t !== -1 && t < n(0) && /^[A-Za-z][A-Za-z0-9+.-]*$/.test(r.slice(0, t)) ? t + 3 : 0;
    let o = n(s);
    return {
        scheme: e.slice(0, s),
        authority: e.slice(s, o),
        rest: e.slice(o)
    };
}
function Q(e) {
    return utn(e, Xnn(e)).authority.includes("${");
}
function v(e) {
    let r = Xnn(e);
    let { scheme, authority } = utn(r);
    let scheme_length = scheme.length;
    let o = scheme_length + authority.length;
    if (r.includes("@", o)) {
        return `${jxe(e.slice(0, scheme_length))}[unparseable-authority]`;
    }
    let i = authority.lastIndexOf("@");
    let a = e.slice(i === -1 ? scheme_length : scheme_length + i + 1, o);
    if (a === "") {
        return;
    }
    return jxe(e.slice(0, scheme_length) + a);
}
export { bCs, pdt, wMt, dxe, cp, YSo, SCs, wCs, itn, fdt, Mc, CSe, Zkr, eTr, tTr, vMt, XSo, JSo, vCs, ECs, kCs, $t, TCs, Rue, kp, $Fe, Ijn, Ojn, Mjn, da, A3e, mdt, ACs, uxe, atn, ltn, EMt, FFe, Hjn, CCs, gdt, Djn, kMt, QSo, Ljn, Njn, RCs, xCs, ZSo, $jn, ctn, nTr, PCs, pxe, ICs, ewo, dtn, hdt, ydt, OCs, MCs, ny, two, $y, Fjn, HCs, DCs, UFe, nwo, Ujn, Bjn, rTr, LCs, jjn, NCs, _dt, Wjn, oTr, fxe, rwo, RSe, xSe, IF, $Cs, BFe, C3e, owo, ose, zjn, utn };
