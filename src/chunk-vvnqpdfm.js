import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { St, Oi, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { re } from "/$bunfs/root/chunk-etbngzss.js";
import { oa } from "/$bunfs/root/chunk-223dyewd.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { itn, $t, kp, $Fe, ACs, uxe, ltn, EMt, gdt, Djn, QSo, Njn, RCs, ny, $y, rTr, NCs, RSe } from "/$bunfs/root/chunk-xb9cceab.js";
import { ape } from "/$bunfs/root/chunk-6gk7mpsm.js";
import { ja } from "/$bunfs/root/chunk-hz24p3zh.js";
import { cue, zl, aH, i1, Zks, m_o } from "/$bunfs/root/chunk-0ycjphb5.js";
import { rs } from "/$bunfs/root/chunk-6dwnw6av.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { CR } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { ar, Sq } from "/$bunfs/root/chunk-c56kpkt7.js";
import { Zl, Jn } from "/$bunfs/root/chunk-ph7a449e.js";
import { JJt } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { dOn } from "/$bunfs/root/chunk-8yak0fbv.js";
import { a9o, Ha, mI, JSt, d9o, y3r, _3r, pnr, cM, b3r } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Kn } from "/$bunfs/root/chunk-rhjwzamj.js";
import { o, E, T, u, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { createHash, createCipheriv, createDecipheriv, randomBytes } from "crypto";
import { basename, join } from "path";
function Ce(e) {
    if (e.kind !== "resolved" || !Ha()) {
        return;
    }
    let r = cM();
    let r_lastResolvedAccountToken = r.lastResolvedAccountToken;
    r.lastResolvedAccountToken = e.token;
    if (r_lastResolvedAccountToken === undefined || r_lastResolvedAccountToken === e.token) {
        return;
    }
    $t().identityEpoch += 1;
    h1t();
    tt();
}
function tt() {
    let e = $t();
    if (!e.identityTrippedHandler) {
        e.identityTripUnowned = true;
        return;
    }
    queueMicrotask(()=>{
        let identityTrippedHandler = $t().identityTrippedHandler;
        if (!identityTrippedHandler) {
            $t().identityTripUnowned = true;
            return;
        }
        try {
            identityTrippedHandler();
        } catch (error) {
            t(`MCP identity-change handler failed: ${l(error)}`, {
                level: "warn"
            });
        }
    });
}
function xgn(e) {
    let r = $t();
    r.identityTrippedHandler = e;
    return ()=>{
        if (r.identityTrippedHandler === e) {
            r.identityTrippedHandler = null;
        }
    };
}
function Pgn() {
    let e = $t();
    let e_identityTripUnowned = e.identityTripUnowned;
    e.identityTripUnowned = false;
    return e_identityTripUnowned;
}
function ue() {
    if (!Ha()) {
        return;
    }
    Ce(_3r());
}
function hme() {
    let e = _3r();
    Ce(e);
    return e;
}
function A1r() {
    let e = hme();
    if (e.kind === "unwired" || e.kind === "incomplete") {
        return undefined;
    }
    return e.token;
}
function Rr() {
    ue();
    return $t().identityEpoch;
}
function g1t() {
    let e = $t();
    if (!Ha()) {
        return e.identityEpoch;
    }
    e.identityEpoch += 1;
    return e.identityEpoch;
}
const rt = "baseline:rearmed";
function Dzo() {
    if (!Ha()) {
        return;
    }
    g1t();
    cM().lastResolvedAccountToken = rt;
}
function cx(e) {
    ue();
    return e === $t().identityEpoch;
}
function h1t() {
    let e = $t();
    if (e.identityChangedThisProcess) {
        return;
    }
    e.identityChangedThisProcess = true;
    f("mcp_discovery_cache", "identity_changed");
}
function we() {
    ue();
    return $t().identityChangedThisProcess;
}
const nt = 4096;
const it = 1024;
const ot = new q(()=>new De);
function wg() {
    return ot.of(B().host);
}
function tyt(e, r) {
    if (!e || !r) {
        return;
    }
    try {
        return btoa(`${e}:${r}`);
    } catch  {
        return;
    }
}
function st() {
    return d9o() !== undefined;
}
class De {
    seen = new Set;
    off = false;
    incomplete = false;
    overflowNotice = null;
    record(e) {
        if (this.recordingOff()) {
            return;
        }
        if (typeof e !== "string" || e === "") {
            return;
        }
        let r = ne(e, it);
        if (this.seen.has(r)) {
            return;
        }
        if (this.seen.size >= nt) {
            this.incomplete = true;
            this.overflowNotice ??= true;
            return;
        }
        this.seen.add(r);
    }
    recordingOff() {
        if (!this.off && st()) {
            this.off = true;
            this.seen.clear();
            this.incomplete = false;
            this.overflowNotice = null;
        }
        return this.off;
    }
    takeOverflowNotice() {
        if (this.overflowNotice === true) {
            this.overflowNotice = false;
            return true;
        }
        return false;
    }
    snapshot() {
        this.recordingOff();
        return {
            atoms: [
                ...this.seen
            ],
            complete: !this.incomplete
        };
    }
}
const E9n = [
    gdt,
    ltn,
    QSo,
    Djn,
    itn,
    m_o,
    Njn
];
const k9n = "x-mcp-server-origin";
const _e = "x-ccr-owner-slack-user-id";
function y1t(e, r) {
    return Object.entries(e ?? {}).filter(([n])=>n.toLowerCase() === r).map(([, n])=>n);
}
const Me = 32;
const Z = 12;
const authTagLength = 16;
const V = "v2:";
const ke = Buffer.from("mcp-dc", "utf8");
const ft = /^[A-Za-z0-9+/]{43}=$/;
function Ae(e) {
    if (typeof e !== "string" || !ft.test(e)) {
        return;
    }
    let r = Buffer.from(e, "base64");
    if (r.length === Me) {
        return r;
    }
}
async function N() {
    let e = await cue();
    if (e === Zl) {
        return;
    }
    let r = Re(e?.mcpDiscoveryCacheKey);
    if (r) {
        return r;
    }
    let mcpDiscoveryCacheKey = randomBytes(Me).toString("base64");
    let i = false;
    try {
        i = (await Jn().mutate((y)=>{
            if (Ae(y.mcpDiscoveryCacheKey)) {
                return y;
            }
            return {
                ...y,
                mcpDiscoveryCacheKey
            };
        })).success;
    } catch  {
        i = false;
    }
    if (!i) {
        return;
    }
    let s = await cue();
    if (s === Zl) {
        return;
    }
    return Re(s?.mcpDiscoveryCacheKey);
}
function Re(e) {
    return Ae(e);
}
function Pe(e, r, fingerprint) {
    if (!Number.isInteger(e) || e < 0 || e > 255) {
        throw Error("discovery-cache seal: schema version must fit one byte");
    }
    let i = [
        r,
        fingerprint
    ].map((y)=>Buffer.from(y, "utf8"));
    let s = Buffer.allocUnsafe(ke.length + 1 + i.reduce((acc, item)=>acc + 4 + item.length, 0));
    let c = ke.copy(s, 0);
    c = s.writeUInt8(e, c);
    for (let y of i){
        c = s.writeUInt32BE(y.length, c);
        c += y.copy(s, c);
    }
    return s;
}
function xe(e, r) {
    let n = randomBytes(Z);
    let i = createCipheriv("aes-256-gcm", e.key, n, {
        authTagLength
    });
    i.setAAD(e.aad);
    let s = Buffer.concat([
        i.update(r, "utf8"),
        i.final()
    ]);
    let c = i.getAuthTag();
    return `${V + J(e.cacheKey)}:${Buffer.concat([
        n,
        s,
        c
    ]).toString("base64url")}`;
}
function J(e) {
    return createHash("sha256").update(e, "utf8").digest().subarray(0, Te).toString("base64url");
}
var Te = 16;
const Ie = Math.ceil(Te * 4 / 3);
const lt = new RegExp(`^[A-Za-z0-9_-]{${Ie}}$`);
const pt = /^[A-Za-z0-9_-]*$/;
function Oe(e) {
    return Le(e)?.digest;
}
function Le(e) {
    if (!e.startsWith(V)) {
        return;
    }
    let r = V.length + Ie;
    if (e.length <= r || e[r] !== ":") {
        return;
    }
    let digest = e.slice(V.length, r);
    let body = e.slice(r + 1);
    if (!lt.test(digest) || !pt.test(body)) {
        return;
    }
    return {
        digest,
        body
    };
}
function fe(e, r) {
    if (!r.startsWith(V)) {
        return {
            ok: false,
            reason: "v1"
        };
    }
    let n = Le(r);
    if (!n) {
        return {
            ok: false,
            reason: "short"
        };
    }
    if (n.digest !== J(e.cacheKey)) {
        return {
            ok: false,
            reason: "header"
        };
    }
    let i = Buffer.from(n.body, "base64url");
    if (i.length < Z + authTagLength) {
        return {
            ok: false,
            reason: "short"
        };
    }
    let s = i.subarray(0, Z);
    let c = i.subarray(i.length - authTagLength);
    let y = i.subarray(Z, i.length - authTagLength);
    try {
        let d = createDecipheriv("aes-256-gcm", e.key, s, {
            authTagLength
        });
        d.setAuthTag(c);
        d.setAAD(e.aad);
        return {
            ok: true,
            plaintext: Buffer.concat([
                d.update(y),
                d.final()
            ]).toString("utf8")
        };
    } catch  {
        return {
            ok: false,
            reason: "tag"
        };
    }
}
function Ign(e) {
    let r = cM();
    r.accountResolver = e;
    r.lastResolvedAccountToken = undefined;
}
function Ogn(e) {
    cM().eraResolver = e;
}
function ht() {
    return cM().eraResolver();
}
function Mgn() {
    return cM().accountResolver !== undefined;
}
function lE(e) {
    switch(e.type){
        case "stdio":
        case undefined:
        case "sdk":
        case "sse-ide":
        case "ws-ide":
            return false;
        default:
            return true;
    }
}
function EQe(e, r) {
    return !cx(r) && lE(e);
}
function Hgn(name, config) {
    return {
        name,
        type: "failed",
        config,
        error: dOn,
        errorCode: "IDENTITY_CHANGED"
    };
}
function Dgn(e) {
    return e.some((r)=>lE(r.config));
}
function gt() {
    return hme().token;
}
const v_1 = 1;
const vt = 900;
const Et = 14400;
const Ct = 604800;
const wt = 1;
function Ke() {
    let a_MCP_DISCOVERY_CACHE_STRIKES = a.MCP_DISCOVERY_CACHE_STRIKES;
    if (a_MCP_DISCOVERY_CACHE_STRIKES && a_MCP_DISCOVERY_CACHE_STRIKES > 0) {
        return a_MCP_DISCOVERY_CACHE_STRIKES;
    }
    return wt;
}
const Dt = 384;
const Ve = 448;
const ie = p(()=>{
    let e = import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule().discoveryWireSchemas();
    return u({
        v: A(v_1),
        serverName: o(),
        cacheKey: o(),
        savedAt: E(),
        toolsSavedAt: E().optional(),
        consecutiveRefreshFailures: E().int().nonnegative(),
        serverInfo: e.implementation.optional(),
        negotiatedEra: U(pnr).optional(),
        capabilities: e.serverCapabilities,
        tools: T(e.tool),
        commands: T(e.prompt),
        resources: T(e.resource),
        templates: T(e.resourceTemplate).optional()
    });
});
function _t() {
    let a_MCP_DISCOVERY_CACHE_TTL_S = a.MCP_DISCOVERY_CACHE_TTL_S;
    return Math.min((a_MCP_DISCOVERY_CACHE_TTL_S && a_MCP_DISCOVERY_CACHE_TTL_S > 0 ? a_MCP_DISCOVERY_CACHE_TTL_S : vt) * 1000, ze());
}
function ze() {
    let a_MCP_DISCOVERY_CACHE_MAX_STALE_S = a.MCP_DISCOVERY_CACHE_MAX_STALE_S;
    return Math.min(a_MCP_DISCOVERY_CACHE_MAX_STALE_S && a_MCP_DISCOVERY_CACHE_MAX_STALE_S > 0 ? a_MCP_DISCOVERY_CACHE_MAX_STALE_S : Et, Ct) * 1000;
}
function bOe(e) {
    return We(e) === undefined;
}
function kt(e) {
    return oe.some((r)=>r.reason === e);
}
var oe = [
    {
        prop: "discoveryCache",
        reason: "opt-out",
        excludes: (e)=>e === false,
        normalize: (e)=>{
            if (e === false) {
                return false;
            }
        },
        valueDomain: [
            undefined,
            false
        ]
    },
    {
        prop: "headersHelper",
        reason: "headers-helper",
        excludes: (e)=>Boolean(e),
        normalize: (e)=>{
            if (e) {
                return e;
            }
        },
        valueDomain: [
            undefined
        ]
    }
];
function Ue(e) {
    let r = {
        ...e
    };
    for (let { prop, normalize } of oe){
        if (!(prop in r)) {
            continue;
        }
        let s = normalize(r[prop]);
        if (s === undefined) {
            delete r[prop];
        } else {
            r[prop] = s;
        }
    }
    return r;
}
function Rt(e) {
    let r = e;
    if (typeof r.url === "string" && ape(r.url)) {
        return true;
    }
    if (r.headers && typeof r.headers === "object") {
        for (let n of Object.values(r.headers)){
            if (typeof n === "string" && ape(n)) {
                return true;
            }
        }
    }
    return false;
}
const bt = [
    "MCP_DISCOVERY_CACHE_TTL_S",
    "MCP_DISCOVERY_CACHE_MAX_STALE_S",
    "MCP_DISCOVERY_CACHE_STRIKES"
];
const Mt = [
    ACs,
    uxe,
    RCs
];
function Ge(e) {
    let r = process.env[e];
    return r !== undefined && JJt(e, r);
}
function Ye() {
    return rs() && a.MCP_DISCOVERY_CACHE === true && !Ge("MCP_DISCOVERY_CACHE");
}
function je(e) {
    if (!Ye() || bt.some(Ge) || e.type !== "http" || e.scope !== "dynamic" || e.agentSource !== undefined || CR(e)) {
        return false;
    }
    let r = NCs(e.url);
    if (r === null) {
        return false;
    }
    let n = ar(r.sessionSegment);
    if (!Sq(r.sessionSegment) || !ny.ownCcrSessionIds.some((h)=>ar(h) === n)) {
        return false;
    }
    let i = y1t(e.headers, "x-mcp-server-id");
    let s = i[0];
    if (i.length !== 1 || s === undefined || !rTr.test(s) || r.toolboxMcpServerId !== s || r.mcpServerId === s) {
        return false;
    }
    let c = y1t(e.headers, k9n);
    if (c.length !== 1 || c[0] !== "directory" && c[0] !== "custom") {
        return false;
    }
    if (y1t(e.headers, _e).length > 0 || !r.upstreamUrl || /^ccr-owner-resolved:/i.test(r.upstreamUrl)) {
        return false;
    }
    let y = [
        r.mcpServerId,
        s
    ];
    let d = [
        `cse_${n}`,
        `session_${n}`
    ];
    return !(RSe(e.url) || y.some((h)=>E9n.includes(h)) || [
        ...Zks(),
        ...Mt
    ].some((h)=>d.some((S)=>y.includes(EMt(S, h)))));
}
function xWe(e) {
    return bOe(e) && !je(e);
}
function We(e) {
    let r = JSt();
    if (r !== undefined) {
        return r;
    }
    if (we()) {
        return "identity-changed";
    }
    if (e.type !== "http" && e.type !== "sse") {
        return "transport";
    }
    if (kp(e) || $Fe(e)) {
        return "cli-owned";
    }
    if (Rt(e)) {
        return "env-placeholder";
    }
    if (i1(e.url) && !aH(e)) {
        return "ambient-credential";
    }
    if ($y(e.url)) {
        if (!je(e)) {
            return "ambient-credential";
        }
    } else if (Ye()) {
        return "ambient-credential";
    }
    let n = e;
    for (let { prop, reason, excludes } of oe){
        if (excludes(n[prop])) {
            return reason;
        }
    }
}
function O() {
    return join(ve(), "mcp-discovery-cache");
}
async function At(e, r) {
    if (!bOe(r)) {
        return false;
    }
    return (await Xe(e, r)).kind !== "degenerate";
}
async function Xe(e, r) {
    if (r.type !== "http" && r.type !== "sse") {
        return {
            kind: "none"
        };
    }
    let n = await cue();
    if (n === Zl) {
        return {
            kind: "degenerate"
        };
    }
    let i = n?.mcpOAuth?.[zl(e, r)];
    if (!i) {
        return {
            kind: "none"
        };
    }
    let i_refreshToken = i.refreshToken;
    if (!i_refreshToken) {
        return {
            kind: "degenerate"
        };
    }
    return {
        kind: "resolved",
        hash: at(i_refreshToken).slice(0, 16)
    };
}
async function Pt(e, r) {
    if (r.type !== "http" && r.type !== "sse") {
        return "grant:none";
    }
    let n = await Xe(e, r);
    switch(n.kind){
        case "none":
            return "grant:none";
        case "resolved":
            return `grant:${n.hash}`;
        case "degenerate":
            return;
    }
}
async function xt(e, r) {
    let n = hme();
    if (n.kind === "unwired" || n.kind === "incomplete") {
        return;
    }
    let grantToken = await Pt(e, r);
    if (grantToken === undefined) {
        return;
    }
    let s = [
        n.token
    ];
    if (r.type === "http" || r.type === "sse") {
        s.push(grantToken);
    }
    return {
        fingerprint: createHash("sha256").update(s.join("\x00")).digest("hex"),
        grantToken
    };
}
function ye(e, r, n, i) {
    let s = [
        e,
        r,
        `era:${n}`,
        {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION ?? "unknown",
        ...i ? [
            "offer:io.modelcontextprotocol/ui"
        ] : []
    ].join("\x00");
    return `${createHash("sha256").update(s).digest("hex").slice(0, 32)}.json`;
}
const Tt = /^[0-9a-f]{16}\0/;
function eD(e) {
    let r = `${e}-`;
    let filePathMemo = cM().filePathMemo;
    for (let i of filePathMemo.keys()){
        if (!i.startsWith(r)) {
            continue;
        }
        if (Tt.test(i.slice(r.length))) {
            filePathMemo.delete(i);
        }
    }
}
function x(e, r) {
    return Kn(e, Ue(r));
}
async function It(e, r) {
    return (await b(e, r))?.path;
}
async function vj(e, r) {
    if (!Ha()) {
        return;
    }
    try {
        return (await b(e, r))?.legToken;
    } catch  {
        return;
    }
}
async function b(e, r) {
    let n = x(e, r);
    let i = ht();
    let s = b3r();
    let c = gt();
    let y = `${n}\x00${c}\x00era:${i}\x00ui:${s}`;
    let filePathMemo = cM().filePathMemo;
    let h = filePathMemo.get(y);
    if (h) {
        return h;
    }
    let S = (async ()=>{
        let C = await xt(e, r);
        if (C === undefined) {
            return;
        }
        return {
            path: join(O(), ye(n, C.fingerprint, i, s)),
            grantToken: C.grantToken,
            fingerprint: C.fingerprint,
            cacheKey: n,
            aad: Pe(v_1, n, C.fingerprint),
            legToken: `${C.grantToken}\x00era:${i}\x00${c}`
        };
    })();
    filePathMemo.set(y, S);
    let w = ()=>{
        if (filePathMemo.get(y) === S) {
            filePathMemo.delete(y);
        }
    };
    S.then((C)=>{
        if (C === undefined) {
            w();
        }
    }, w);
    return S;
}
function L() {
    return cM().storage;
}
function R() {
    return cM().storageV5;
}
function he(e) {
    return $e.userConfigDir("mcp-discovery-cache", [
        basename(e)
    ]);
}
const Ot = {
    namespace: "userConfigDir",
    dir: "mcp-discovery-cache"
};
const F = 8388608;
function ge(e) {
    return Math.max(e.savedAt, e.toolsSavedAt ?? 0);
}
class j extends Error {
    entryPath;
    reason;
    constructor(e, r, n){
        super(n);
        this.entryPath = e;
        this.reason = r;
        this.name = "RefusedDiscoveryEntryError";
    }
}
class me extends j {
    constructor(e){
        super(e, "oversize", "discovery-cache: oversize entry");
        this.name = "OversizeDiscoveryEntryError";
    }
}
class ee extends j {
    constructor(e){
        super(e, "symlink", "discovery-cache: symlinked entry refused");
        this.name = "SymlinkedDiscoveryEntryError";
    }
}
class te extends j {
    constructor(e){
        super(e, "non-regular", "discovery-cache: non-regular entry refused");
        this.name = "NonRegularDiscoveryEntryError";
    }
}
function se(error) {
    return error instanceof j;
}
async function ce(e, r) {
    let readGateForTest = cM().readGateForTest;
    if (readGateForTest) {
        await readGateForTest;
    }
    if (r) {
        return Lt(r, e);
    }
    try {
        if (oa === 0) {
            let s = await L().lstat(e);
            if (s === undefined) {
                return;
            }
            if (s.isSymbolicLink) {
                throw new ee(e);
            }
            if (!s.isFile) {
                throw new te(e);
            }
        }
        let i;
        try {
            i = await L().readTail(e, F + 1, {
                noFollow: true
            });
        } catch (error) {
            let c = v(error);
            if (c === "ELOOP") {
                throw new ee(e);
            }
            if (c === "ENXIO") {
                throw new te(e);
            }
            throw error;
        }
        if (i.length > F) {
            throw new me(e);
        }
        return i.toString("utf8");
    } catch (error) {
        if (z(error)) {
            return;
        }
        throw error;
    }
}
async function Lt(e, r) {
    let n = he(r);
    let i = await e.read([
        {
            key: n,
            offset: 0,
            length: F + 1
        }
    ], {
        symlinks: "refuse"
    });
    if (!i.ok) {
        let c = "cause" in i.error ? v(i.error.cause) : undefined;
        if (c === "ELOOP") {
            throw new ee(r);
        }
        if (c === "ENXIO") {
            throw new te(r);
        }
        throw Error("discovery-cache: read failed", {
            cause: i.error
        });
    }
    let s = i.value.items[0];
    if (!s.found) {
        return;
    }
    if (s.totalBytes > F) {
        throw new me(r);
    }
    return Buffer.from(s.value).toString("utf8");
}
async function Ft(path, r, n) {
    if (n) {
        let s = await n.write(he(path), r);
        if (!s.ok) {
            throw Error("discovery-cache: write failed", {
                cause: s.error
            });
        }
        return;
    }
    let i = L();
    await i.mkdir(O(), Ve);
    await i.atomicWrite(path, r, Dt);
}
async function Bt(e) {
    if (!e) {
        return L().list(O());
    }
    let r = [];
    let cursor;
    do {
        let i = await e.listEntries(Ot, {
            skipKeyStats: true,
            skipScopeStats: true,
            ...cursor !== undefined && {
                cursor
            }
        });
        if (!i.ok) {
            throw Error("discovery-cache: list failed", {
                cause: i.error
            });
        }
        for (let s of i.value.items){
            if (s.kind === "key" && s.key.namespace === "userConfigDir") {
                let c = s.key.relPath[0];
                if (c !== undefined && s.key.relPath.length === 1) {
                    r.push(c);
                }
            }
        }
        cursor = i.value.cursor;
    }while (cursor)
    return r;
}
async function G(e, r) {
    if (r) {
        let n = await r.delete(he(e));
        if (!n.ok) {
            throw Error("discovery-cache: delete failed", {
                cause: n.error
            });
        }
        return;
    }
    try {
        await L().delete(e);
    } catch (error) {
        if (!z(error)) {
            throw error;
        }
    }
}
async function Lgn(e, r, n = Date.now()) {
    let i = We(r);
    if (i !== undefined && !kt(i)) {
        return {
            kind: "miss",
            reason: i === "transport" ? "transport" : "disabled"
        };
    }
    if (i !== undefined) {
        H();
        let _ = Yt(e, r);
        let M = jt(_);
        let de = cM().admissionPurgedKeySets;
        if (!de.has(M)) {
            de.add(M);
            Gt(e, r, _).then((et)=>{
                if (!et) {
                    de.delete(M);
                }
            });
        }
        re(e, `discovery-cache: ${i} \u2014 purging this server's cache-key family, serving miss`);
        return {
            kind: "miss",
            reason: "disabled"
        };
    }
    let s;
    try {
        s = await b(e, r);
    } catch (error) {
        re(e, `discovery-cache: fingerprint failed: ${error}`);
        return {
            kind: "miss",
            reason: "no-fingerprint"
        };
    }
    if (s === undefined) {
        return {
            kind: "miss",
            reason: "no-fingerprint"
        };
    }
    let s_path = s.path;
    let y = ()=>{
        P(s_path, e, undefined).catch(()=>{});
    };
    let d = ()=>{
        y();
        m("mcp_discovery_cache", "corrupt_entry");
        return {
            kind: "miss",
            reason: "corrupt"
        };
    };
    let h;
    try {
        h = await ce(s_path, R());
    } catch (error) {
        if (se(error)) {
            re(e, `discovery-cache: ${error.reason} entry, deleting`);
            return d();
        }
        re(e, `discovery-cache: read failed: ${error}`);
        return {
            kind: "miss",
            reason: "absent"
        };
    }
    if (h === undefined) {
        return {
            kind: "miss",
            reason: "absent"
        };
    }
    let S = await Ne(h, s, e, ()=>P(s_path, e, undefined));
    if (S.miss) {
        if (S.miss === "unsealed") {
            if (S.cause === "v1") {
                f("mcp_discovery_cache", "unsealed_v1");
            } else {
                m("mcp_discovery_cache", `unsealed_${S.cause}`);
            }
        }
        return {
            kind: "miss",
            reason: S.miss
        };
    }
    let w = ie().safeParse(mt(S.plaintext, false));
    if (!w.success) {
        re(e, "discovery-cache: corrupt entry, deleting");
        return d();
    }
    let w_data = w.data;
    if (w_data.cacheKey !== x(e, r)) {
        re(e, "discovery-cache: entry keyed for another server, deleting");
        return d();
    }
    if (w_data.consecutiveRefreshFailures >= Ke()) {
        y();
        return {
            kind: "miss",
            reason: "strike-threshold"
        };
    }
    let k = ze();
    if (ge(w_data) - n > k) {
        y();
        return {
            kind: "miss",
            reason: "expired"
        };
    }
    let ageMs = Math.max(0, n - w_data.savedAt);
    if (ageMs >= k) {
        y();
        return {
            kind: "miss",
            reason: "expired"
        };
    }
    if (ageMs < _t() && !(w_data.capabilities.tools && w_data.tools.length === 0)) {
        return {
            kind: "fresh",
            entry: w_data,
            ageMs
        };
    }
    return {
        kind: "stale",
        entry: w_data,
        ageMs
    };
}
function W(e, r, n) {
    return cM().serializeWrite(e, n).catch((i)=>{
        re(r, `discovery-cache: write op failed: ${i}`);
    });
}
function X(e) {
    return cM().deleteGenerationByCacheKey.get(e) ?? 0;
}
function ae(e) {
    cM().deleteGenerationByCacheKey.set(e, X(e) + 1);
}
const qe = 8;
async function Ht(serverName, config) {
    if (config.type !== "http" && config.type !== "sse") {
        return [];
    }
    let n = await cue();
    if (n === Zl) {
        return Zl;
    }
    let i = zl(serverName, config);
    let s = n?.mcpOAuth?.[i];
    let c = [];
    if (typeof s?.accessToken === "string") {
        c.push(s.accessToken);
    }
    if (typeof s?.refreshToken === "string") {
        c.push(s.refreshToken);
    }
    if (typeof s?.clientSecret === "string") {
        c.push(s.clientSecret);
    }
    let y = n?.mcpOAuthClientConfig?.[i]?.clientSecret;
    if (typeof y === "string") {
        c.push(y);
    }
    return c;
}
const le = /auth|token|key|secret|cookie|session|sig|pass|cred|bearer/i;
const Kt = /^\s*[A-Za-z][A-Za-z0-9!#$%&'*+.^_`|~-]*\s+(?=\S)/;
function Ze(e, r, n) {
    if (typeof r !== "string" || !le.test(e)) {
        return;
    }
    n(r.trim());
    n(r.replace(Kt, "").trim());
    if (/^cookie$/i.test(e)) {
        for (let i of r.split(";")){
            let s = i.indexOf("=");
            n((s === -1 ? i : i.slice(s + 1)).trim());
        }
    }
}
function PWe(e, r) {
    let n = wg();
    if (n.recordingOff()) {
        return;
    }
    let i = new Map;
    for (let [s, c] of Object.entries(e ?? {})){
        i.set(s.toLowerCase(), c);
    }
    for (let [s, c] of Object.entries(r)){
        if (i.get(s.toLowerCase()) === c) {
            continue;
        }
        Ze(s, c, (y)=>{
            if (y.length >= qe) {
                n.record(y);
            }
        });
    }
}
const Vt = 268435456;
function Fe(e) {
    let r = [
        e
    ];
    let n = Oi(e).slice(1, -1);
    if (n !== e) {
        r.push(n);
    }
    try {
        let i = encodeURIComponent(e);
        if (i !== e) {
            r.push(i);
        }
    } catch  {}
    return r;
}
function zt(e, config, n = []) {
    let i = config;
    let s = new Set;
    let c = (d)=>{
        if (d !== undefined && d.length >= qe) {
            s.add(d);
        }
    };
    for (let [d, h] of Object.entries(i.headers ?? {})){
        Ze(d, h, c);
    }
    try {
        let d = typeof i.url === "string" ? new URL(i.url) : undefined;
        for (let [h, S] of d?.searchParams.entries() ?? []){
            if (le.test(h)) {
                for (let w of Fe(S)){
                    c(w);
                }
            }
        }
        for (let h of d?.search.replace(/^\?/, "").split("&") ?? []){
            let S = h.indexOf("=");
            if (S > 0 && le.test(h.slice(0, S))) {
                c(h.slice(S + 1));
            }
        }
        for (let h of d ? [
            d.password,
            d.username
        ] : []){
            if (h) {
                c(h);
                try {
                    c(decodeURIComponent(h));
                } catch  {}
            }
        }
    } catch  {}
    for (let d of n){
        c(d);
    }
    let y = wg().snapshot();
    if (!y.complete) {
        return "presented-log-incomplete";
    }
    for (let d of y.atoms){
        c(d);
    }
    if (s.size * e.length > Vt) {
        return "scan-budget";
    }
    for (let d of s){
        for (let h of Fe(d)){
            if (e.includes(h)) {
                return "material";
            }
        }
    }
}
function Se(e, r) {
    return {
        key: e,
        cacheKey: r.cacheKey,
        aad: r.aad
    };
}
async function Ne(e, r, n, i) {
    let s = await N();
    if (s === undefined) {
        re(n, "Discovery cache: sealing key unavailable (secure storage unreadable) — cache off for this process");
        y3r();
        return {
            miss: "key-unavailable"
        };
    }
    let c = fe(Se(s, r), e);
    if (c.ok) {
        return {
            plaintext: c.plaintext
        };
    }
    re(n, `Discovery cache: entry did not open (${c.reason}) \u2014 discarded`);
    try {
        await i();
    } catch (error) {
        re(n, `discovery-cache: reap after failed open skipped ${error}`);
    }
    return {
        miss: "unsealed",
        cause: c.reason
    };
}
function I({ verdict, code }) {
    if (verdict === "written") {
        g("mcp_discovery_cache");
    } else if (verdict === "terminal") {
        m("mcp_discovery_cache", code);
    } else {
        f("mcp_discovery_cache", code);
    }
    return verdict;
}
async function Ee(e) {
    let { path, serverName, config, cacheKey, entry, context, label } = e;
    if (JSt() !== undefined) {
        re(serverName, `Discovery cache ${label} refused: the cache turned off since this round started`);
        return {
            verdict: "superseded",
            code: "disabled"
        };
    }
    if (X(cacheKey) !== e.capturedDeleteGeneration) {
        re(serverName, `Discovery cache ${label} refused: entry deleted since this round started (tombstone)`);
        return {
            verdict: "superseded",
            code: "tombstone"
        };
    }
    if (!cx(context.identityEpoch)) {
        re(serverName, `Discovery cache ${label} refused: identity changed since this round was fetched (stale epoch)`);
        return {
            verdict: "superseded",
            code: "stale_epoch"
        };
    }
    let h = await N();
    if (h === undefined) {
        y3r();
        re(serverName, `Discovery cache ${label} refused: sealing key unavailable (secure storage unreadable) \u2014 cache off for this process`);
        return {
            verdict: "superseded",
            code: "key_unavailable"
        };
    }
    let S;
    try {
        S = await Ht(serverName, config);
    } catch  {
        S = Zl;
    }
    if (S === Zl) {
        re(serverName, `Discovery cache ${label} refused: OAuth token store unreadable (cannot verify no secrets on disk)`);
        return {
            verdict: "transient",
            code: "transient"
        };
    }
    let w;
    try {
        w = await b(serverName, config);
    } catch  {
        return {
            verdict: "transient",
            code: "transient"
        };
    }
    if (w === undefined || w.path !== path || w.legToken !== context.grantLeg) {
        re(serverName, `Discovery cache ${label} refused: grant or era changed since this round was fetched (stale leg)`);
        return {
            verdict: "superseded",
            code: "stale_grant"
        };
    }
    let C = ie().safeParse(entry);
    if (!C.success) {
        re(serverName, `Discovery cache ${label} refused: entry failed schema validation`);
        return {
            verdict: "terminal",
            code: "schema"
        };
    }
    let k = Oi(C.data);
    if (Buffer.byteLength(k, "utf8") > F) {
        re(serverName, `Discovery cache ${label} refused: serialized entry exceeds DISCOVERY_ENTRY_MAX_BYTES`);
        return {
            verdict: "terminal",
            code: "oversize"
        };
    }
    if (JSt() !== undefined) {
        re(serverName, `Discovery cache ${label} refused: the cache turned off since this round started`);
        return {
            verdict: "superseded",
            code: "disabled"
        };
    }
    let D = zt(k, config, S);
    if (D !== undefined) {
        if (wg().takeOverflowNotice()) {
            re(serverName, "Discovery cache: presented-credential log is full — cache writes are refused for the rest of this process");
        }
        if (D === "scan-budget") {
            re(serverName, `Discovery cache ${label} refused: secret-material scan exceeds its work budget (materials \xD7 entry size) \u2014 not scanned, not written`);
            return {
                verdict: "terminal",
                code: "scan_budget"
            };
        }
        if (D === "presented-log-incomplete") {
            re(serverName, `Discovery cache ${label} refused: presented-credential log incomplete (cannot verify no secrets on disk)`);
            return {
                verdict: "terminal",
                code: "presented_log_incomplete"
            };
        }
        re(serverName, `Discovery cache ${label} refused: entry would carry presented secret material`);
        return {
            verdict: "terminal",
            code: "secret_material"
        };
    }
    let _ = xe(Se(h, w), k);
    if (Buffer.byteLength(_, "utf8") > F) {
        re(serverName, `Discovery cache ${label} refused: sealed entry exceeds DISCOVERY_ENTRY_MAX_BYTES`);
        return {
            verdict: "terminal",
            code: "oversize"
        };
    }
    try {
        await Ft(path, _, R());
    } catch (error) {
        re(serverName, `Discovery cache ${label} refused: disk write failed (${l(error)})`);
        return {
            verdict: "transient",
            code: "transient"
        };
    }
    return {
        verdict: "written",
        code: "written"
    };
}
async function P(e, r, n) {
    if (n !== undefined) {
        ae(n);
    }
    await W(e, r, ()=>G(e, R()));
}
async function Ut(e, r) {
    await Promise.race([
        e.then(()=>{}, ()=>{}),
        Q(r, undefined, {
            unref: true
        })
    ]);
}
async function L6(e, r = 1500) {
    H();
    await Ut(e, r);
}
function H() {
    if (!mI()) {
        return;
    }
    let e = cM();
    if (e.flushCleanup) {
        return;
    }
    e.flushCleanup = St(()=>e.drain(a9o));
}
async function Ngn(e, r, n, i) {
    let savedAt = i.now ?? Date.now();
    let c = x(e, r);
    let y = X(c);
    if (!cx(i.identityEpoch)) {
        return "superseded";
    }
    if (i.grantLeg === undefined) {
        return "superseded";
    }
    if (!bOe(r)) {
        return "superseded";
    }
    H();
    let d;
    try {
        d = await b(e, r);
    } catch  {
        return I({
            verdict: "transient",
            code: "transient"
        });
    }
    if (d === undefined) {
        return "superseded";
    }
    if (d.legToken !== i.grantLeg) {
        re(e, "Discovery cache write refused: grant changed since this round was fetched (stale grant)");
        return I({
            verdict: "superseded",
            code: "stale_grant"
        });
    }
    let d_path = d.path;
    let S = {
        v: v_1,
        serverName: e,
        cacheKey: c,
        savedAt,
        consecutiveRefreshFailures: 0,
        ...n.serverInfo && {
            serverInfo: n.serverInfo
        },
        ...n.negotiatedEra !== undefined && {
            negotiatedEra: n.negotiatedEra
        },
        capabilities: n.capabilities,
        tools: n.tools,
        commands: n.commands,
        resources: n.resources,
        templates: n.templates
    };
    let path = d_path;
    let C;
    await W(path, e, async ()=>{
        if (!await At(e, r)) {
            return;
        }
        let k;
        try {
            k = await ce(path, R());
        } catch (error) {
            if (!se(error)) {
                re(e, `Discovery cache write deferred: existing entry unreadable (${l(error)})`);
                C = {
                    verdict: "transient",
                    code: "transient"
                };
                return;
            }
            k = undefined;
        }
        if (k !== undefined) {
            let D = await N();
            let _ = D && d ? fe(Se(D, d), k) : undefined;
            let M = _?.ok ? ie().safeParse(mt(_.plaintext, false)) : undefined;
            if (M?.success && ge(M.data) > savedAt) {
                C = {
                    verdict: "superseded",
                    code: "fresher_on_disk"
                };
                return;
            }
        }
        C = await Ee({
            path,
            serverName: e,
            config: r,
            cacheKey: c,
            entry: S,
            context: i,
            capturedDeleteGeneration: y,
            label: "write"
        });
    });
    if (C) {
        return I(C);
    }
    return "superseded";
}
async function Je(e, r) {
    let e_path = e.path;
    let i;
    try {
        i = await ce(e_path, R());
    } catch (error) {
        if (se(error)) {
            await G(e_path, R());
            return;
        }
        throw error;
    }
    if (i === undefined) {
        return;
    }
    let s = await Ne(i, e, r, ()=>G(e_path, R()));
    if (s.miss) {
        return;
    }
    let c = ie().safeParse(mt(s.plaintext, false));
    if (!c.success) {
        await G(e_path, R());
        return;
    }
    return c.data;
}
async function $gn(e, r, tools, i) {
    if (!cx(i.identityEpoch)) {
        return;
    }
    if (i.grantLeg === undefined) {
        return;
    }
    let s = x(e, r);
    let c = X(s);
    H();
    if (!bOe(r)) {
        return;
    }
    let y;
    try {
        y = await b(e, r);
    } catch  {
        I({
            verdict: "transient",
            code: "transient"
        });
        return;
    }
    if (y === undefined) {
        return;
    }
    if (y.legToken !== i.grantLeg) {
        re(e, "Discovery cache tools merge refused: grant changed since this refresh was fetched (stale grant)");
        I({
            verdict: "superseded",
            code: "stale_grant"
        });
        return;
    }
    let y_path = y.path;
    await W(y_path, e, async ()=>{
        let h = await Je(y, e);
        if (!h) {
            return;
        }
        if (ge(h) > i.fetchedAt) {
            I({
                verdict: "superseded",
                code: "fresher_on_disk"
            });
            return;
        }
        let S = {
            ...h,
            tools,
            ...Number.isFinite(i.fetchedAt) && i.fetchedAt > h.savedAt && {
                toolsSavedAt: i.fetchedAt
            }
        };
        I(await Ee({
            path: y_path,
            serverName: e,
            config: r,
            cacheKey: s,
            entry: S,
            context: i,
            capturedDeleteGeneration: c,
            label: "tools merge"
        }));
    });
}
async function _1t(e, r, n) {
    if (!cx(n.identityEpoch)) {
        return;
    }
    if (n.grantLeg === undefined) {
        return;
    }
    let i = x(e, r);
    let s = X(i);
    H();
    if (!bOe(r)) {
        return;
    }
    let c;
    try {
        c = await b(e, r);
    } catch  {
        return;
    }
    if (c === undefined) {
        return;
    }
    if (c.legToken !== n.grantLeg) {
        re(e, "Discovery cache refresh-failure strike refused: grant changed since this refresh was fetched (stale grant)");
        return;
    }
    let c_path = c.path;
    await W(c_path, e, async ()=>{
        let d = await Je(c, e);
        if (!d) {
            return;
        }
        if (!cx(n.identityEpoch)) {
            re(e, "Discovery cache refresh-failure strike refused: identity changed since this refresh was fetched (stale epoch)");
            return;
        }
        let h;
        try {
            h = await b(e, r);
        } catch  {
            return;
        }
        if (h === undefined || h.path !== c_path || h.legToken !== n.grantLeg) {
            re(e, "Discovery cache refresh-failure strike refused: grant changed since this refresh was fetched (stale grant)");
            return;
        }
        let S = {
            ...d,
            consecutiveRefreshFailures: d.consecutiveRefreshFailures + 1
        };
        if (S.consecutiveRefreshFailures >= Ke()) {
            ae(i);
            await G(c_path, R());
            return;
        }
        await Ee({
            path: c_path,
            serverName: e,
            config: r,
            cacheKey: i,
            entry: S,
            context: n,
            capturedDeleteGeneration: s,
            label: "refresh-failure strike"
        });
    });
}
function Fgn(e, r) {
    (async ()=>{
        let identityEpoch = Rr();
        await _1t(e, r, {
            identityEpoch,
            grantLeg: await vj(e, r)
        });
    })().catch((n)=>t(`discovery-cache: strike after failed lazy dial of "${e}" did not land: ${l(n)}`));
}
async function Qe(e, r) {
    for (let s of r){
        ae(s);
    }
    let n = new Set([
        ...r
    ].map(J));
    let i = await Bt(R());
    for (let s of i){
        if (!s.endsWith(".json")) {
            continue;
        }
        let c = join(O(), s);
        try {
            let y;
            try {
                y = await ce(c, R());
            } catch (error) {
                if (se(error)) {
                    await P(c, e, undefined);
                    continue;
                }
                throw error;
            }
            if (y === undefined) {
                continue;
            }
            let d = Oe(y);
            if (d === undefined) {
                await P(c, e, undefined);
                continue;
            }
            if (n.has(d)) {
                await P(c, e, undefined);
            }
        } catch (error) {
            re(e, `discovery-cache: purge scan skipped ${error}`);
        }
    }
}
async function Be(e, r) {
    await Qe(e, new Set([
        x(e, r)
    ]));
}
function Gt(e, r, n) {
    let i = O();
    let s = false;
    return W(i, e, async ()=>{
        let c;
        try {
            c = (await b(e, r))?.fingerprint;
        } catch  {
            c = undefined;
        }
        if (c === undefined) {
            await Qe(e, n);
            s = true;
            return;
        }
        let y = [];
        for (let d of n){
            let h = d;
            for (let S of pnr){
                for (let w of [
                    false,
                    true
                ]){
                    y.push(P(join(i, ye(d, c, S, w)), e, h));
                    h = undefined;
                }
            }
        }
        await Promise.all(y);
        s = true;
    }).then(()=>s);
}
function Yt(e, r) {
    let n = Ue(r);
    let i = oe.map(({ prop, normalize, valueDomain })=>{
        let S = new Set(valueDomain.map((C)=>normalize(C)));
        let w = n[prop];
        if (w !== undefined) {
            S.add(w);
        }
        return {
            prop,
            states: [
                ...S
            ]
        };
    });
    let s = new Set;
    let c = (y, d)=>{
        if (y === i.length) {
            s.add(Kn(e, d));
            return;
        }
        let { prop, states } = i[y];
        for (let w of states){
            let C = {
                ...d
            };
            if (w === undefined) {
                delete C[prop];
            } else {
                C[prop] = w;
            }
            c(y + 1, C);
        }
    };
    c(0, {
        ...n
    });
    return s;
}
function jt(e) {
    return [
        ...e
    ].sort().join(`
`);
}
async function nyt(e, r) {
    if (r.type !== "http" && r.type !== "sse") {
        return;
    }
    if (!mI()) {
        return;
    }
    H();
    ae(x(e, r));
    try {
        let n = await b(e, r);
        if (n === undefined) {
            await Be(e, r);
            return;
        }
        let i = x(e, r);
        let s = O();
        let c = new Set(pnr.flatMap((d)=>[
                false,
                true
            ].map((h)=>join(s, ye(i, n.fingerprint, d, h)))));
        let y = [
            P(n.path, e, i)
        ];
        for (let d of c){
            if (d !== n.path) {
                y.push(P(d, e, undefined));
            }
        }
        await Promise.all(y);
        await Be(e, r);
    } catch (error) {
        re(e, `discovery-cache: delete failed: ${error}`);
    }
}
async function Ugn(e, r) {
    let n;
    try {
        n = await It(e, r);
    } catch  {
        return async ()=>{};
    }
    if (n === undefined) {
        return async ()=>{};
    }
    try {
        await L().mkdir(O(), Ve);
        return await ja(n, {
            realpath: false,
            retries: 0,
            stale: 60000,
            onCompromised: (i)=>re(e, `discovery-cache: refresh lock compromised, skipping refresh: ${i}`)
        });
    } catch (error) {
        let s = error instanceof Error ? error.message : String(error);
        if (error?.code === "ELOCKED" || s.includes("already being held")) {
            re(e, "discovery-cache: refresh lock held elsewhere, skipping");
            return;
        }
        re(e, `discovery-cache: lock error, proceeding: ${s}`);
        return async ()=>{};
    }
}
export { xgn, Pgn, hme, A1r, Rr, g1t, Dzo, cx, h1t, E9n, k9n, y1t, wg, tyt, Ign, Ogn, Mgn, lE, EQe, Hgn, Dgn, bOe, xWe, eD, vj, Lgn, PWe, L6, Ngn, $gn, _1t, Fgn, nyt, Ugn };
