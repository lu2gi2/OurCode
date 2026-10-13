import { wQe, Xht, Jht, Vee, LG, vQe, b9n, lx, Qht, yOe, S9n, Zht, w9n, k1r } from "/$bunfs/root/chunk-re1a1x17.js";
import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { b, d, pe, $q, gl, zb } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ke, x, l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { iBe } from "/$bunfs/root/chunk-x0qpydt2.js";
import { _, X, ie } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { re } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ja } from "/$bunfs/root/chunk-hz24p3zh.js";
import { na } from "/$bunfs/root/chunk-55x53sfe.js";
import { Zl, Jn, HF, kz, $m } from "/$bunfs/root/chunk-ph7a449e.js";
import { Dw, ZV } from "/$bunfs/root/chunk-vpp1psvz.js";
import { FV, T7, cue, zl, Wk, k, H6e, D6e } from "/$bunfs/root/chunk-0ycjphb5.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { $t } from "/$bunfs/root/chunk-xb9cceab.js";
import { _Oe } from "/$bunfs/root/chunk-3d2fd069.js";
import { tD } from "/$bunfs/root/chunk-c49tne6j.js";
import { wg, tyt, eD } from "/$bunfs/root/chunk-vvnqpdfm.js";
import { b1t, IWe, eEe } from "/$bunfs/root/chunk-q676wb6j.js";
import { Nie, Ygn, ik, qr, nD, rD } from "/$bunfs/root/chunk-g2whb6bt.js";
import { lv } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Egn, m9n, g9n, kgn, S1r } from "/$bunfs/root/chunk-2z08cpnr.js";
import { Jve, Cgn, Rgn, eyt } from "/$bunfs/root/chunk-y9404g3q.js";
import { xj, Fs } from "/$bunfs/root/chunk-cg7f88dh.js";
import { Wxe } from "/$bunfs/root/chunk-485vtzdj.js";
import { ln } from "/$bunfs/root/chunk-pj42g5eb.js";
import { o, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { ye } from "/$bunfs/root/chunk-tybndaby.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { randomBytes, randomUUID } from "crypto";
import { createServer } from "http";
import { join } from "path";
import { parse } from "url";
const He = 30000;
const grant_type = "urn:ietf:params:oauth:grant-type:token-exchange";
const grant_type_1 = "urn:ietf:params:oauth:grant-type:jwt-bearer";
const requested_token_type = "urn:ietf:params:oauth:token-type:id-jag";
const subject_token_type = "urn:ietf:params:oauth:token-type:id_token";
function Oe(e) {
    return (t, n)=>{
        let r = AbortSignal.timeout(He);
        let signal = e ? AbortSignal.any([
            r,
            e
        ]) : r;
        return fetch(t, {
            ...n,
            ...na({
                url: String(t)
            }),
            signal
        }).catch((S)=>rD(S, t));
    };
}
const de = Oe();
function ce(e) {
    try {
        return new URL(e).href.replace(/\/$/, "");
    } catch  {
        return e.replace(/\/$/, "");
    }
}
class q extends Error {
    shouldClearIdToken;
    constructor(e, t){
        super(e);
        this.name = "XaaTokenExchangeError";
        this.shouldClearIdToken = t;
    }
}
const Be = /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;
function te(e) {
    return (typeof e === "string" ? e : _(e)).replace(Be, (n, r)=>`"${r}":"[REDACTED]"`);
}
const We = p(()=>u({
        access_token: o().optional(),
        issued_token_type: o().optional(),
        expires_in: Wxe().optional(),
        scope: o().optional()
    }));
const Ge = p(()=>u({
        access_token: o().min(1),
        token_type: o().default("Bearer"),
        expires_in: Wxe().optional(),
        scope: o().optional(),
        refresh_token: o().optional()
    }));
async function qe(url, t) {
    let n;
    try {
        n = await S9n(url, undefined, t?.fetchFn ?? de);
    } catch (error) {
        if (Ke(error)) {
            throw error;
        }
        let c = error instanceof Error ? /^HTTP (\d{3}) /.exec(error.message)?.[1] : undefined;
        throw Error(`XAA: PRM discovery failed for ${qr(url)} (${c ? `HTTP ${c}` : error instanceof Error ? error.name : typeof error})`);
    }
    if (!n.resource || !n.authorization_servers?.[0]) {
        throw Error("XAA: PRM discovery failed: PRM missing resource or authorization_servers");
    }
    if (ce(n.resource) !== ce(url)) {
        throw Error(`XAA: PRM discovery failed: PRM resource mismatch: expected ${qr(url)}, got ${qr(n.resource)}`);
    }
    return {
        resource: n.resource,
        authorization_servers: n.authorization_servers
    };
}
async function Ve(e, t) {
    let n;
    try {
        n = await Zht(e, {
            fetchFn: t?.fetchFn ?? de,
            skipIssuerValidation: true
        });
    } catch (error) {
        if (Ke(error)) {
            throw error;
        }
        let c = error instanceof Error ? /^HTTP (\d{3}) /.exec(error.message)?.[1] : undefined;
        throw new x(`XAA: AS metadata discovery failed (${c ? `HTTP ${c}` : error instanceof Error ? error.name : typeof error})`, "XAA: AS metadata discovery failed");
    }
    if (!n?.issuer || !n.token_endpoint) {
        throw Error(`XAA: AS metadata discovery failed: no valid metadata at ${qr(e)}`);
    }
    if (ce(n.issuer) !== ce(e)) {
        throw Error(`XAA: AS metadata discovery failed: issuer mismatch: expected ${qr(e)}, got ${qr(n.issuer)}`);
    }
    if (!URL.canParse(n.token_endpoint) || new URL(n.token_endpoint).protocol !== "https:") {
        throw Error(`XAA: refusing non-HTTPS token endpoint: ${qr(n.token_endpoint)}`);
    }
    return {
        issuer: n.issuer,
        token_endpoint: n.token_endpoint,
        grant_types_supported: n.grant_types_supported,
        token_endpoint_auth_methods_supported: n.token_endpoint_auth_methods_supported
    };
}
async function Je(e) {
    let t = e.fetchFn ?? de;
    let n = new URLSearchParams({
        grant_type,
        requested_token_type,
        audience: e.audience,
        resource: e.resource,
        subject_token: e.idToken,
        subject_token_type,
        client_id: e.clientId
    });
    if (e.clientSecret) {
        n.set("client_secret", e.clientSecret);
    }
    if (e.scope) {
        n.set("scope", e.scope);
    }
    let r = await t(e.tokenEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: n
    });
    if (!r.ok) {
        let A = te(await r.text()).slice(0, 200);
        let h = r.status < 500;
        throw new q(`XAA: token exchange failed: HTTP ${r.status}: ${A}`, h);
    }
    let c;
    try {
        c = await r.json();
    } catch  {
        throw new q(`XAA: token exchange returned non-JSON (captive portal?) at ${qr(e.tokenEndpoint)}`, false);
    }
    let S = We().safeParse(c);
    if (!S.success) {
        throw new q(`XAA: token exchange response did not match expected shape: ${te(c)}`, true);
    }
    let S_data = S.data;
    if (!S_data.access_token) {
        throw new q(`XAA: token exchange response missing access_token: ${te(S_data)}`, true);
    }
    if (S_data.issued_token_type !== requested_token_type) {
        throw new q(`XAA: token exchange returned unexpected issued_token_type: ${S_data.issued_token_type}`, true);
    }
    return {
        jwtAuthGrant: S_data.access_token,
        expiresIn: S_data.expires_in,
        scope: S_data.scope
    };
}
async function Ye(e) {
    let t = e.fetchFn ?? de;
    let n = e.authMethod ?? "client_secret_basic";
    let r = new URLSearchParams({
        grant_type: grant_type_1,
        assertion: e.assertion
    });
    if (e.scope) {
        r.set("scope", e.scope);
    }
    let c = {
        "Content-Type": "application/x-www-form-urlencoded"
    };
    if (n === "client_secret_basic") {
        let h = Buffer.from(`${encodeURIComponent(e.clientId)}:${encodeURIComponent(e.clientSecret)}`).toString("base64");
        c.Authorization = `Basic ${h}`;
        wg().record(h);
    } else {
        r.set("client_id", e.clientId);
        r.set("client_secret", e.clientSecret);
    }
    wg().record(e.clientSecret);
    wg().record(e.assertion);
    let S = await t(e.tokenEndpoint, {
        method: "POST",
        headers: c,
        body: r
    });
    if (!S.ok) {
        let h = te(await S.text()).slice(0, 200);
        throw Error(`XAA: jwt-bearer grant failed: HTTP ${S.status}: ${h}`);
    }
    let s;
    try {
        s = await S.json();
    } catch  {
        throw Error(`XAA: jwt-bearer grant returned non-JSON (captive portal?) at ${qr(e.tokenEndpoint)}`);
    }
    let A = Ge().safeParse(s);
    if (!A.success) {
        throw Error(`XAA: jwt-bearer response did not match expected shape: ${te(s)}`);
    }
    return A.data;
}
async function ge(url, t, n = "xaa", r) {
    let c = Oe(r);
    re(n, `XAA: discovering PRM for ${qr(url)}`);
    let S = await qe(url, {
        fetchFn: c
    });
    re(n, `XAA: discovered resource=${qr(S.resource)} ASes=[${S.authorization_servers.map(qr).join(", ")}]`);
    let s;
    let A = [];
    for (let R of S.authorization_servers){
        let M;
        try {
            M = await Ve(R, {
                fetchFn: c
            });
        } catch (error) {
            if (r?.aborted) {
                throw error;
            }
            A.push(`${qr(R)}: ${error instanceof Error ? error.message : String(error)}`);
            continue;
        }
        if (M.grant_types_supported && !M.grant_types_supported.includes(grant_type_1)) {
            A.push(`${qr(R)}: does not advertise jwt-bearer grant (supported: ${M.grant_types_supported.join(", ")})`);
            continue;
        }
        s = M;
        break;
    }
    if (!s) {
        throw new x(`XAA: no authorization server supports jwt-bearer. Tried: ${A.join("; ")}`, `XAA: no authorization server supports jwt-bearer (tried ${S.authorization_servers.length})`);
    }
    let s_token_endpoint_auth_methods_supported = s.token_endpoint_auth_methods_supported;
    let y = s_token_endpoint_auth_methods_supported && !s_token_endpoint_auth_methods_supported.includes("client_secret_basic") && s_token_endpoint_auth_methods_supported.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
    re(n, `XAA: AS issuer=${qr(s.issuer)} token_endpoint=${qr(s.token_endpoint)} auth_method=${y}`);
    re(n, "XAA: exchanging id_token for ID-JAG at IdP");
    let w = await Je({
        tokenEndpoint: t.idpTokenEndpoint,
        audience: s.issuer,
        resource: S.resource,
        idToken: t.idpIdToken,
        clientId: t.idpClientId,
        clientSecret: t.idpClientSecret,
        fetchFn: c
    });
    re(n, "XAA: ID-JAG obtained");
    re(n, "XAA: exchanging ID-JAG for access_token at AS");
    let C = await Ye({
        tokenEndpoint: s.token_endpoint,
        assertion: w.jwtAuthGrant,
        clientId: t.clientId,
        clientSecret: t.clientSecret,
        authMethod: y,
        fetchFn: c
    });
    re(n, "XAA: access_token obtained");
    return {
        ...C,
        authorizationServerUrl: s.issuer
    };
}
const it = 30000;
const nt = 500;
const Ee = 600000;
const st = new Set([
    ...kz,
    ...HF,
    "ETIMEDOUT"
]);
function ot(error) {
    if (Ke(error)) {
        return true;
    }
    if (error instanceof Error && error.name === "TimeoutError") {
        return true;
    }
    let t = $m(error);
    return t !== null && st.has(t.code);
}
function Se(e) {
    let t = e;
    return (t?.name === "ZodError" || t?.name === "$ZodError") && Array.isArray(t?.issues);
}
const at = new Set(Object.values(Vee));
const ct = [
    "authorization_pending",
    "expired_token",
    "slow_down"
];
const dt = [
    ...Object.values(Vee),
    ...ct
];
function nDs(e) {
    let t = dt.find((n)=>n === e);
    return pe(t) ?? b("other");
}
function rDs(e, t) {
    let n = t instanceof Error ? `${e}
${t.message}` : e;
    if (t instanceof DG) {
        return "issuer_echo_denied";
    }
    if (t instanceof vQe) {
        if (t.kind === "metadata") {
            return "issuer_echo_mismatch";
        }
        return "issuer_response_mismatch";
    }
    if (t instanceof b9n) {
        return "dcr_rejected";
    }
    if (n.includes("dynamic client registration") || t instanceof LG && t.code === "invalid_client_metadata") {
        return "dcr_failed";
    }
    if (n.includes("trying to load") && n.includes("metadata") || n.includes("Incompatible auth server")) {
        return "discovery_failed";
    }
    if (t instanceof LG) {
        return "dcr_rejected";
    }
    if (n.includes("Issuer mismatch in authorization server metadata")) {
        return "issuer_echo_mismatch";
    }
    if (n.includes("Issuer mismatch in authorization response")) {
        return "issuer_response_mismatch";
    }
    let r = v(t) ?? v(t instanceof Error ? t.cause : undefined);
    if (r && D6e.has(r)) {
        return "network_failed";
    }
    return "sdk_auth_failed";
}
const ve = 5;
function xzo(e) {
    return qr(e.origin + e.pathname) + Ygn(e);
}
const ut = new Set([
    "invalid_refresh_token",
    "expired_refresh_token",
    "token_expired"
]);
async function Pzo(e) {
    if (!e.ok) {
        return e;
    }
    let t = await e.text();
    let n;
    try {
        n = X(t);
    } catch  {
        return new Response(t, e);
    }
    if (Xht.safeParse(n).success) {
        return new Response(t, e);
    }
    let r = Jht.safeParse(n);
    if (!r.success) {
        return new Response(t, e);
    }
    let c = ut.has(r.data.error) ? {
        error: "invalid_grant",
        error_description: r.data.error_description ?? `Server returned non-standard error code: ${r.data.error}`
    } : r.data;
    return new Response(_(c), {
        status: 400,
        statusText: "Bad Request",
        headers: e.headers
    });
}
function p9n() {
    return async (e, t)=>{
        try {
            return await Re(e, t);
        } catch (error) {
            if (t?.signal?.aborted || !ot(error)) {
                throw error;
            }
            await Q(nt, t?.signal ?? undefined);
            return await Re(e, t);
        }
    };
}
async function Re(e, t) {
    let signal = AbortSignal.timeout(it);
    let r = t?.method?.toUpperCase() === "POST";
    let c = na({
        url: String(e)
    });
    if (!t?.signal) {
        let h;
        try {
            h = await fetch(e, {
                ...t,
                ...c,
                signal
            });
        } catch (error) {
            rD(error, e);
        }
        if (r) {
            return Pzo(h);
        }
        return h;
    }
    let S = new AbortController;
    let s = ()=>S.abort();
    t.signal.addEventListener("abort", s);
    signal.addEventListener("abort", s);
    let A = ()=>{
        t.signal?.removeEventListener("abort", s);
        signal.removeEventListener("abort", s);
    };
    if (t.signal.aborted) {
        S.abort();
    }
    try {
        let h = await fetch(e, {
            ...t,
            ...c,
            signal: S.signal
        });
        A();
        if (r) {
            return Pzo(h);
        }
        return h;
    } catch (error) {
        A();
        rD(error, e);
    }
}
async function he(e, t, n) {
    let { configuredMetadataUrl, fetchFn, resourceMetadataUrl, serverConfigForAnalytics } = n ?? {};
    let A = fetchFn ?? p9n();
    if (configuredMetadataUrl) {
        if (!configuredMetadataUrl.startsWith("https://")) {
            throw Error(`authServerMetadataUrl must use https:// (got: ${qr(configuredMetadataUrl)})`);
        }
        let y = await A(configuredMetadataUrl, {
            headers: {
                Accept: "application/json"
            }
        });
        if (y.ok) {
            let w;
            try {
                w = await y.json();
            } catch  {
                throw Error(`Configured auth server metadata at ${qr(configuredMetadataUrl)} is not valid JSON`);
            }
            return wQe.parse(w);
        }
        throw Error(`HTTP ${y.status} fetching configured auth server metadata from ${qr(configuredMetadataUrl)}`);
    }
    try {
        let { authorizationServerUrl, authorizationServerMetadata } = await w9n(t, {
            fetchFn: A,
            ...resourceMetadataUrl && {
                resourceMetadataUrl
            },
            skipIssuerMetadataValidation: true
        });
        if (authorizationServerMetadata) {
            wgn({
                serverName: e,
                site: "rfc9728_chain",
                expectedIssuer: authorizationServerUrl,
                receivedIssuer: authorizationServerMetadata.issuer,
                serverConfig: serverConfigForAnalytics
            });
            return authorizationServerMetadata;
        }
    } catch (error) {
        if (error instanceof DG) {
            throw error;
        }
        re(e, `RFC 9728 discovery failed, falling back: ${nD(error, t)}`);
    }
    let h = new URL(t);
    if (h.pathname === "/") {
        return;
    }
    try {
        let y = await Zht(h, {
            fetchFn: A,
            skipIssuerValidation: true
        });
        if (y) {
            wgn({
                serverName: e,
                site: "legacy_path_fallback",
                expectedIssuer: h.href,
                receivedIssuer: y.issuer,
                serverConfig: serverConfigForAnalytics
            });
        }
        return y;
    } catch (error) {
        if (error instanceof DG) {
            throw error;
        }
        re(e, `Path-aware auth server discovery failed: ${nD(error, t)}`);
        return;
    }
}
class DG extends x {
    expected;
    received;
    constructor(e, t){
        super(`Issuer echo cross-origin mismatch (RFC 8414 \xA73.3): expected ${_(e)}, received ${_(t)}`, "issuer echo cross-origin mismatch (RFC 8414 §3.3)", "issuer_echo_denied");
        this.expected = e;
        this.received = t;
        this.name = "IssuerEchoCrossOriginError";
    }
}
function ue() {
    try {
        return k("tengu_mcp_issuer_strict_echo", false) === true;
    } catch  {
        return false;
    }
}
function ht(expectedIssuer, receivedIssuer) {
    return receivedIssuer === expectedIssuer || expectedIssuer.endsWith("/") && receivedIssuer === expectedIssuer.slice(0, -1);
}
function le(e) {
    try {
        let t = new URL(e);
        if ((t.protocol === "https:" || t.protocol === "http:") && t.origin !== "null") {
            return t;
        }
    } catch  {}
}
function lt(expectedIssuer, receivedIssuer) {
    let n = le(expectedIssuer);
    let r = le(receivedIssuer);
    if (!n || !r) {
        return "unparseable";
    }
    if (n.username !== "" || n.password !== "" || r.username !== "" || r.password !== "" || r.search !== "" || r.hash !== "") {
        return "cross_origin";
    }
    if (n.origin === r.origin) {
        return "same_origin";
    }
    return "cross_origin";
}
function ft(expectedIssuer, receivedIssuer) {
    let n = le(expectedIssuer);
    let r = le(receivedIssuer);
    if (!n || !r) {
        return [];
    }
    let c = [];
    if (n.protocol !== r.protocol) {
        c.push("scheme");
    }
    if (n.username !== r.username || n.password !== r.password) {
        c.push("userinfo");
    }
    if (n.hostname !== r.hostname) {
        c.push("host");
    }
    if (n.port !== r.port) {
        c.push("port");
    }
    if (n.pathname !== r.pathname) {
        c.push("path");
    }
    if (n.search !== r.search) {
        c.push("query");
    }
    if (n.hash !== r.hash) {
        c.push("fragment");
    }
    if (c.length === 0) {
        c.push("normalization_only");
    }
    return c;
}
function wgn({ serverName, site, expectedIssuer, receivedIssuer, serverConfig }) {
    if (expectedIssuer === undefined) {
        return;
    }
    if (receivedIssuer !== undefined && ht(expectedIssuer, receivedIssuer)) {
        return;
    }
    let S = receivedIssuer === undefined ? "unparseable" : lt(expectedIssuer, receivedIssuer);
    let s = ue() ? "enforce" : "observe";
    let A = s === "enforce" && S !== "same_origin";
    try {
        let h = receivedIssuer === undefined ? [
            "issuer_missing"
        ] : ft(expectedIssuer, receivedIssuer);
        let y = serverConfig ? lv(serverConfig) : undefined;
        let mcpServerName = serverConfig ? zb(serverName, Wk(serverName, serverConfig)) : undefined;
        i("tengu_mcp_oauth_issuer_echo_mismatch", {
            site: d(site),
            mode: d(s),
            originRelation: d(S),
            outcome: A ? b("denied") : b("proceeded"),
            ...h.length > 0 && {
                mismatchFacets: gl(h)
            },
            expectedIssuerHash: ln(expectedIssuer),
            ...receivedIssuer !== undefined && {
                receivedIssuerHash: ln(receivedIssuer)
            },
            ...y && {
                mcpServerBaseUrl: y
            },
            ...mcpServerName && {
                mcpServerName
            }
        });
    } catch (error) {
        try {
            re(serverName, `issuer-echo telemetry failed: ${l(error)}`);
        } catch  {}
    }
    if (A) {
        throw new DG(expectedIssuer, receivedIssuer);
    }
}
class Izo extends lx {
    serverName;
    constructor(e){
        super("Authentication required; client registration is deferred until the user authenticates");
        this.serverName = e;
        this.name = "McpClientRegistrationDeferredError";
    }
}
class e1t extends Error {
    constructor(){
        super("Authentication was cancelled");
        this.name = "AuthenticationCancelledError";
    }
}
function ke(e) {
    try {
        let t = new URL(e);
        return `${t.protocol}//${t.hostname}`;
    } catch  {
        return e;
    }
}
function Pe(redirectUri) {
    let t = ke(redirectUri);
    return t === "http://127.0.0.1" || t === "http://localhost";
}
function Me(e) {
    if (!e?.clientId || !e.redirectUri || !Pe(e.redirectUri)) {
        return;
    }
    let t = Number(new URL(e.redirectUri).port);
    if (t && e.redirectUri.replace("//127.0.0.1:", "//localhost:") === IWe(t)) {
        return t;
    }
}
function xe() {
    return a.MCP_OAUTH_CLIENT_METADATA_URL || iBe;
}
function be(redirectUri) {
    if (!Pe(redirectUri)) {
        return false;
    }
    try {
        return new URL(redirectUri).pathname === "/callback";
    } catch  {
        return false;
    }
}
function pt(e) {
    return e !== undefined && (e === iBe || e === xe());
}
function M1s(e) {
    return $t().oauthCallbackSubmitters.get(e);
}
function H1s(e, t) {
    let activeOAuthFlows = $t().activeOAuthFlows;
    activeOAuthFlows.set(e, t);
    t.finally(()=>{
        if (activeOAuthFlows.get(e) === t) {
            activeOAuthFlows.delete(e);
        }
    }).catch(()=>{});
}
function D1s(e) {
    return $t().activeOAuthFlows.get(e);
}
async function f9n(e, t) {
    let n = zl(e, t);
    let r = (await Jn().readAsync())?.mcpOAuth?.[n];
    if (!r || r.accessToken || r.refreshToken) {
        return;
    }
    try {
        await Jn().mutate((c)=>{
            let S = c.mcpOAuth?.[n];
            if (!S || S.accessToken || S.refreshToken) {
                return c;
            }
            let s = {
                ...c.mcpOAuth
            };
            delete s[n];
            return {
                ...c,
                mcpOAuth: s
            };
        });
    } catch (error) {
        re(e, `clear tokenless stub failed: ${l(error)}`);
    }
}
async function Ie({ serverName, endpoint, token, tokenTypeHint, clientId, clientSecret, accessToken, authMethod = "client_secret_basic" }) {
    let h = new URLSearchParams;
    h.set("token", token);
    h.set("token_type_hint", tokenTypeHint);
    let y = {
        "Content-Type": "application/x-www-form-urlencoded"
    };
    if (clientId && clientSecret) {
        if (authMethod === "client_secret_post") {
            h.set("client_id", clientId);
            h.set("client_secret", clientSecret);
        } else {
            let w = Buffer.from(`${encodeURIComponent(clientId)}:${encodeURIComponent(clientSecret)}`).toString("base64");
            y.Authorization = `Basic ${w}`;
            wg().record(w);
        }
    } else if (clientId) {
        h.set("client_id", clientId);
    } else {
        re(serverName, `No client_id available for ${tokenTypeHint} revocation - server may reject`);
    }
    try {
        await At.post(endpoint, h, {
            headers: y
        });
        re(serverName, `Successfully revoked ${tokenTypeHint}`);
    } catch (error) {
        if (At.isAxiosError(error) && error.response?.status === 401 && accessToken) {
            re(serverName, `Got 401, retrying ${tokenTypeHint} revocation with Bearer auth`);
            h.delete("client_id");
            h.delete("client_secret");
            await At.post(endpoint, h, {
                headers: {
                    ...y,
                    Authorization: `Bearer ${accessToken}`
                }
            });
            re(serverName, `Successfully revoked ${tokenTypeHint} with Bearer auth`);
        } else {
            throw error;
        }
    }
}
async function L1s(e, t) {
    let r = (await Jn().readAsync())?.mcpOAuth?.[zl(e, t)];
    if (!r?.accessToken && !r?.refreshToken) {
        return;
    }
    return {
        accessToken: r.accessToken || undefined,
        refreshToken: r.refreshToken,
        clientId: r.clientId,
        clientSecret: r.clientSecret,
        ...r.discoveryState && {
            discoveryState: Jve(r.discoveryState)
        }
    };
}
async function $e(e, t, n) {
    let r = wg();
    r.record(n.accessToken);
    r.record(n.refreshToken);
    r.record(n.clientSecret);
    let c;
    try {
        let S = n.discoveryState?.authorizationServerUrl ?? t.url;
        let s = await he(e, S, {
            configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
            serverConfigForAnalytics: t
        });
        if (!s) {
            re(e, "No OAuth metadata found");
            c = "no_metadata";
        } else {
            let A = "revocation_endpoint" in s ? s.revocation_endpoint : null;
            if (!A) {
                re(e, "Server does not support token revocation");
                c = "no_revocation_endpoint";
            } else {
                let endpoint = String(A);
                let y = ("revocation_endpoint_auth_methods_supported" in s ? s.revocation_endpoint_auth_methods_supported : undefined) ?? ("token_endpoint_auth_methods_supported" in s ? s.token_endpoint_auth_methods_supported : undefined);
                let w = y && !y.includes("client_secret_basic") && y.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
                re(e, `Revoking tokens via ${qr(endpoint)} (${w})`);
                if (n.refreshToken) {
                    try {
                        await Ie({
                            serverName: e,
                            endpoint,
                            token: n.refreshToken,
                            tokenTypeHint: "refresh_token",
                            clientId: n.clientId,
                            clientSecret: n.clientSecret,
                            accessToken: n.accessToken,
                            authMethod: w
                        });
                    } catch (error) {
                        re(e, `Failed to revoke refresh token: ${l(error)}`);
                        c = "server_revoke_failed";
                    }
                }
                if (n.accessToken) {
                    try {
                        await Ie({
                            serverName: e,
                            endpoint,
                            token: n.accessToken,
                            tokenTypeHint: "access_token",
                            clientId: n.clientId,
                            clientSecret: n.clientSecret,
                            accessToken: n.accessToken,
                            authMethod: w
                        });
                    } catch (error) {
                        re(e, `Failed to revoke access token: ${l(error)}`);
                        c = "server_revoke_failed";
                    }
                }
            }
        }
    } catch (error) {
        re(e, `Failed to revoke tokens: ${l(error)}`);
        c = error instanceof DG ? "issuer_echo_denied" : "server_revoke_failed";
    }
    return c;
}
async function N1s(e, t, n) {
    let r;
    try {
        let c = (await Jn().readAsync())?.mcpOAuth?.[zl(e, t)];
        let S = {
            ...n,
            accessToken: n.accessToken && n.accessToken !== c?.accessToken ? n.accessToken : undefined,
            refreshToken: n.refreshToken && n.refreshToken !== c?.refreshToken ? n.refreshToken : undefined
        };
        if (!S.accessToken && !S.refreshToken) {
            re(e, "No replaced tokens to revoke");
            g("mcp_oauth_revoke");
            return;
        }
        r = await $e(e, t, S);
    } catch (error) {
        re(e, `Failed to revoke replaced tokens: ${l(error)}`);
        r = "server_revoke_failed";
    }
    if (r) {
        f("mcp_oauth_revoke", r);
    } else {
        g("mcp_oauth_revoke");
    }
}
async function $1s(e, t, { preserveStepUpState = false } = {}) {
    let r = Jn();
    let c = await r.readAsync();
    if (!c?.mcpOAuth) {
        g("mcp_oauth_revoke");
        return;
    }
    let S = zl(e, t);
    let s = c.mcpOAuth[S];
    let A;
    if (s?.accessToken || s?.refreshToken) {
        A = await $e(e, t, {
            accessToken: s.accessToken || undefined,
            refreshToken: s.refreshToken,
            clientId: s.clientId,
            clientSecret: s.clientSecret,
            ...s.discoveryState && {
                discoveryState: Jve(s.discoveryState)
            }
        });
    } else {
        re(e, "No tokens to revoke");
    }
    try {
        if (preserveStepUpState && s && (s.stepUpScope || s.discoveryState || s.clientId)) {
            await r.mutate((h)=>{
                let y = h.mcpOAuth?.[S];
                if (y?.accessToken !== s.accessToken || y?.clientId !== s.clientId) {
                    return h;
                }
                return {
                    ...h,
                    mcpOAuth: {
                        ...h.mcpOAuth,
                        [S]: {
                            serverName: e,
                            serverUrl: t.url,
                            accessToken: "",
                            refreshToken: undefined,
                            expiresAt: undefined,
                            ...s.clientId && {
                                clientId: s.clientId,
                                ...s.redirectUri && {
                                    redirectUri: s.redirectUri
                                },
                                ...s.clientSecret !== undefined && {
                                    clientSecret: s.clientSecret
                                }
                            },
                            ...s.stepUpScope && {
                                stepUpScope: s.stepUpScope
                            },
                            ...s.discoveryState && {
                                discoveryState: {
                                    ...Jve(s.discoveryState),
                                    resourceMetadataUrl: s.discoveryState.resourceMetadataUrl
                                }
                            }
                        }
                    }
                };
            });
            re(e, "Preserved step-up auth state across revocation");
        } else {
            await Ozo(e, t);
        }
    } catch (error) {
        re(e, `clear local tokens failed: ${l(error)}`);
        A ??= "local_clear_failed";
    }
    eD(e);
    if (A) {
        f("mcp_oauth_revoke", A);
    } else {
        g("mcp_oauth_revoke");
    }
}
async function Ozo(e, t, n) {
    let r = zl(e, t);
    let c;
    await Jn().mutate((S)=>{
        let s = S.mcpOAuth?.[r];
        if (!s) {
            return S;
        }
        let A = {
            ...S.mcpOAuth
        };
        if (s.clientId && n?.preserveClientRegistration?.(s)) {
            if (!s.accessToken && !s.refreshToken) {
                return S;
            }
            A[r] = {
                ...s,
                accessToken: "",
                refreshToken: undefined,
                expiresAt: 0,
                scope: undefined
            };
            c = "tokens";
        } else {
            delete A[r];
            c = "all";
        }
        return {
            ...S,
            mcpOAuth: A
        };
    });
    if (c) {
        re(e, c === "tokens" ? "Cleared stored tokens (preserved client registration)" : "Cleared stored tokens");
    }
}
function De(e, t, n, r) {
    if (n?.success) {
        return;
    }
    let c = r ? "mutate_rejected" : "storage_write_failed";
    let S = r ? l(r) : n?.warning ?? "storage write failed";
    re(e, `Token persist failed: ${S}`);
    let s = lv(t);
    i("tengu_mcp_oauth_token_persist_failed", {
        transportType: d(t.type),
        ...s && {
            mcpServerBaseUrl: s
        },
        reason: d(c)
    });
}
async function _t(e, t, onAuthorizationUrl, abortSignal, skipBrowserOpen) {
    if (!t.oauth?.xaa) {
        throw Error("XAA: oauth.xaa must be set");
    }
    let S = T7();
    if (!S) {
        throw Error("XAA: no IdP connection configured. Run 'claude mcp xaa setup --issuer <url> --client-id <id> --client-secret' to configure.");
    }
    let s = t.oauth?.clientId;
    if (!s) {
        throw Error(`XAA: server '${e}' needs an AS client_id. Re-add with --client-id.`);
    }
    let clientSecret = (await Mzo(e, t))?.clientSecret;
    if (!clientSecret) {
        let R = zl(e, t);
        let M = Object.keys((await Jn().readAsync())?.mcpOAuthClientConfig ?? {});
        let N = Nie(t.headers ?? {});
        re(e, `XAA: secret lookup miss. wanted=${R} have=[${M.join(", ")}] configHeaders=${_(N)}`);
        throw Error(`XAA: AS client secret not found for '${e}'. Re-add with --client-secret.`);
    }
    re(e, "XAA: starting cross-app access flow");
    let y = await g9n(S.issuer);
    let idTokenCacheHit = await Egn(S.issuer) !== undefined;
    let C = "idp_login";
    try {
        let R;
        try {
            R = await S1r({
                idpIssuer: S.issuer,
                idpClientId: S.clientId,
                idpClientSecret: y,
                callbackPort: S.callbackPort,
                onAuthorizationUrl,
                skipBrowserOpen,
                abortSignal
            });
        } catch (error) {
            if (abortSignal?.aborted) {
                throw new e1t;
            }
            throw error;
        }
        C = "discovery";
        let M = await kgn(S.issuer);
        C = "token_exchange";
        wg().record(clientSecret);
        let N;
        try {
            N = await ge(t.url, {
                clientId: s,
                clientSecret,
                idpClientId: S.clientId,
                idpClientSecret: y,
                idpIdToken: R,
                idpTokenEndpoint: M.token_endpoint
            }, e, abortSignal);
        } catch (error) {
            if (abortSignal?.aborted) {
                throw new e1t;
            }
            let P = l(error);
            if (error instanceof q) {
                if (error.shouldClearIdToken) {
                    await m9n(S.issuer);
                    re(e, "XAA: cleared cached id_token after token-exchange failure");
                }
            } else if (P.includes("PRM discovery failed") || P.includes("AS metadata discovery failed") || P.includes("no authorization server supports jwt-bearer")) {
                C = "discovery";
            } else if (P.includes("jwt-bearer")) {
                C = "jwt_bearer";
            }
            throw error;
        }
        let U = zl(e, t);
        let E = wg();
        E.record(N.access_token);
        E.record(N.refresh_token);
        let I;
        let K;
        try {
            I = await Jn().mutate((T)=>{
                let P = T.mcpOAuth?.[U];
                return {
                    ...T,
                    mcpOAuth: {
                        ...T.mcpOAuth,
                        [U]: {
                            ...P,
                            serverName: e,
                            serverUrl: t.url,
                            accessToken: N.access_token,
                            refreshToken: N.refresh_token ?? P?.refreshToken,
                            expiresAt: N.expires_in != null ? Date.now() + N.expires_in * 1000 : undefined,
                            scope: N.scope,
                            clientId: s,
                            clientSecret,
                            discoveryState: eyt({
                                previous: P?.discoveryState,
                                issuedBy: N.authorizationServerUrl,
                                interactiveSignIn: true
                            })
                        }
                    }
                };
            });
        } catch (error) {
            K = error;
        }
        if (I?.success) {
            re(e, "XAA: tokens saved");
        } else {
            De(e, t, I, K);
        }
        i("tengu_mcp_oauth_flow_success", {
            authMethod: b("xaa"),
            idTokenCacheHit
        });
        g("mcp_oauth_flow");
    } catch (error) {
        if (error instanceof e1t) {
            throw error;
        }
        m("mcp_oauth_flow", "mcp_oauth_xaa_failed");
        i("tengu_mcp_oauth_flow_failure", {
            authMethod: b("xaa"),
            xaaFailureStage: d(C),
            idTokenCacheHit
        });
        throw error;
    }
}
async function b1r(e, t, n, r, c) {
    if (!URL.canParse(t.url)) {
        m("mcp_oauth_flow", "mcp_oauth_no_valid_url");
        let U = "configError" in t && typeof t.configError === "string" ? t.configError : undefined;
        throw new x(U || "This server's URL is missing or not a valid URL, so sign-in can't start. Fix the URL in its MCP config (or set the environment variable it uses) and try again.", "MCP OAuth refused: no valid server URL");
    }
    if (t.oauth?.xaa) {
        if (!FV()) {
            throw Error(`XAA is not enabled (set CLAUDE_CODE_ENABLE_XAA=1). Remove 'oauth.xaa' from server '${e}' to use the standard consent flow.`);
        }
        i("tengu_mcp_oauth_flow_start", {
            isOAuthFlow: true,
            authMethod: b("xaa"),
            transportType: d(t.type),
            ...lv(t) && {
                mcpServerBaseUrl: lv(t)
            }
        });
        await _t(e, t, n, r, c?.skipBrowserOpen);
        return;
    }
    let S = Jn();
    let s = zl(e, t);
    let A = (await S.readAsync())?.mcpOAuth?.[s];
    let scope = A?.stepUpScope;
    let y = A?.discoveryState?.resourceMetadataUrl;
    let w = Me(A);
    let resourceMetadataUrl;
    if (y) {
        try {
            resourceMetadataUrl = new URL(y);
        } catch  {
            re(e, `Invalid cached resourceMetadataUrl: ${qr(y)}`);
        }
    }
    let R = {
        scope,
        resourceMetadataUrl
    };
    let M = randomUUID();
    i("tengu_mcp_oauth_flow_start", {
        flowAttemptId: ye(M),
        isOAuthFlow: true,
        transportType: d(t.type),
        ...lv(t) && {
            mcpServerBaseUrl: lv(t)
        }
    });
    let N = false;
    try {
        let U = t.oauth?.callbackPort;
        let E = !!c?.redirectUri;
        let I = E ? 0 : U ?? await eEe(w);
        let K = c?.redirectUri ?? IWe(I);
        re(e, E ? `Using custom redirectUri: ${qr(K)} (no localhost listener)` : `Using redirect port: ${I}${U ? " (from config)" : w && I === w ? " (reusing registered port)" : ""}`);
        try {
            await Ozo(e, t, {
                preserveClientRegistration: (z)=>I === Me(z) || z.redirectUri === K
            });
        } catch (error) {
            re(e, `clear stored credentials failed: ${l(error)}`);
        }
        let T = $t();
        let P = new AbortController;
        if (!E) {
            T.oauthCallbackListeners.get(I)?.abort();
            T.oauthCallbackListeners.set(I, P);
        }
        let G = new t1t(e, t, K, true, n, c?.skipBrowserOpen);
        let ne = Boolean(t.oauth?.scopes || t.oauth?.authServerMetadataUrl);
        if (R.scope && !ne) {
            G.markStepUpPending(R.scope);
        }
        try {
            let z = await he(e, t.url, {
                configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
                resourceMetadataUrl: R.resourceMetadataUrl,
                serverConfigForAnalytics: t
            });
            if (z) {
                G.setMetadata(z);
                re(e, `Fetched OAuth metadata with scope: ${ik("scope", Ne(z) ?? "") || "NONE"}`);
            }
        } catch (error) {
            if (error instanceof DG) {
                throw error;
            }
            re(e, `Failed to fetch OAuth metadata: ${nD(error, t.url)}`);
        }
        let se = await G.state();
        let B = null;
        let H = null;
        let D = null;
        let W = null;
        let V = ()=>{
            if (B) {
                B.removeAllListeners();
                B.on("error", ()=>{});
                B.close();
                B = null;
            }
            if (H) {
                clearTimeout(H);
                H = null;
            }
            if (D) {
                r?.removeEventListener("abort", D);
                P.signal.removeEventListener("abort", D);
                D = null;
            }
            if (T.oauthCallbackListeners.get(I) === P) {
                T.oauthCallbackListeners.delete(I);
            }
            if (T.oauthCallbackSubmitters.get(e) === W) {
                T.oauthCallbackSubmitters.delete(e);
            }
            re(e, "MCP OAuth server cleaned up");
        };
        let { code, iss } = await new Promise((resolve, reject)=>{
            let oe = false;
            let we = (code_1, iss_1)=>{
                if (oe) {
                    return;
                }
                oe = true;
                resolve({
                    code: code_1,
                    iss: iss_1
                });
            };
            let J = (F)=>{
                if (oe) {
                    return;
                }
                oe = true;
                reject(F);
            };
            D = ()=>{
                V();
                J(new e1t);
            };
            if (r?.aborted || P.signal.aborted) {
                D();
                return;
            }
            r?.addEventListener("abort", D);
            P.signal.addEventListener("abort", D);
            {
                let F = (L)=>{
                    try {
                        let j = new URL(L);
                        let Z = j.searchParams.get("code");
                        let _e = j.searchParams.get("state");
                        let Y = j.searchParams.get("error");
                        let ee = b1t(j.searchParams.get("iss"));
                        if (!Z && !Y) {
                            return false;
                        }
                        if (_e !== se) {
                            re(e, "Ignoring manual callback URL whose state belongs to a different flow");
                            return false;
                        }
                        if (Y) {
                            let ae = j.searchParams.get("error_description") || "";
                            V();
                            J(Error(`OAuth error: ${Y} - ${ae}`));
                            return true;
                        }
                        if (!Z) {
                            return false;
                        }
                        re(e, "Received auth code via manual callback URL");
                        V();
                        we(Z, ee);
                        return true;
                    } catch  {
                        return false;
                    }
                };
                W = F;
                T.oauthCallbackSubmitters.set(e, F);
                c?.onWaitingForCallback?.(F, I, se);
            }
            let Te = async ()=>{
                try {
                    re(e, "Starting SDK auth");
                    re(e, `Server URL: ${qr(t.url)}`);
                    let F = await Qht(G, {
                        serverUrl: t.url,
                        scope: R.scope,
                        resourceMetadataUrl: R.resourceMetadataUrl,
                        fetchFn: p9n(),
                        skipIssuerMetadataValidation: true
                    });
                    re(e, `Initial auth result: ${F}`);
                    if (F !== "REDIRECT") {
                        re(e, `Unexpected auth result, expected REDIRECT: ${F}`);
                    }
                } catch (error) {
                    re(e, `SDK auth error: ${nD(error, t.url)}`);
                    V();
                    J(Object.assign(new x(`SDK auth failed: ${nD(error, t.url)}`, "SDK auth failed"), {
                        cause: error
                    }));
                }
            };
            if (E) {
                Te();
            } else {
                B = createServer((F, L)=>{
                    let j = parse(F.url || "", true);
                    if (j.pathname === "/callback") {
                        let Z = j.query.code;
                        let _e = j.query.state;
                        let Y = j.query.error;
                        let ee = j.query.error_description;
                        let ae = j.query.error_uri;
                        let Le = b1t(j.query.iss);
                        if (_e !== se) {
                            L.writeHead(400, {
                                "Content-Type": "text/html"
                            });
                            L.end(tD({
                                ok: false,
                                heading: "Authentication failed",
                                message: "Invalid state parameter. Close this tab and try again from Claude Code."
                            }));
                            return;
                        }
                        if (Y) {
                            L.writeHead(200, {
                                "Content-Type": "text/html"
                            });
                            L.end(tD({
                                ok: false,
                                heading: "Authentication failed",
                                message: "Close this tab and try again from Claude Code.",
                                detail: `${String(Y)}: ${ee ?? ""}`
                            }));
                            V();
                            let me = `OAuth error: ${Y}`;
                            if (ee) {
                                me += ` - ${ee}`;
                            }
                            if (ae) {
                                me += ` (See: ${ae})`;
                            }
                            J(Error(me));
                            return;
                        }
                        if (Z) {
                            L.writeHead(200, {
                                "Content-Type": "text/html"
                            });
                            L.end(tD({
                                ok: true,
                                heading: "Authentication successful",
                                message: "You can close this tab and return to Claude Code."
                            }));
                            V();
                            we(Z, Le);
                        }
                    } else {
                        L.writeHead(404, {
                            "Content-Type": "text/html"
                        });
                        L.end(tD({
                            ok: false,
                            heading: "Not found",
                            message: `This is the Claude Code MCP OAuth callback listener. It only handles /callback. If your OAuth provider redirected here, the registered redirect_uri must be ${qr(K)}.`
                        }));
                    }
                });
                B.on("error", (F)=>{
                    V();
                    if (F.code === "EADDRINUSE") {
                        let L = O() === "windows" ? `netstat -ano | findstr :${I}` : `lsof -ti:${I} -sTCP:LISTEN`;
                        J(new x(`OAuth callback port ${I} is already in use \u2014 another process may be holding it. ` + `Run \`${L}\` to find it.`, "OAuth callback port already in use"));
                    } else {
                        J(new x(`OAuth callback server failed: ${F.message}`, "OAuth callback server failed"));
                    }
                });
                B.listen(I, "127.0.0.1", ()=>void Te());
                B.unref();
            }
            H = setTimeout((F, L)=>{
                F();
                L(new x("Authentication timeout", "Authentication timeout"));
            }, 300000, V, J);
            H.unref();
        });
        N = true;
        re(e, "Completing auth flow with authorization code");
        wg().record(code);
        let fe = await Qht(G, {
            serverUrl: t.url,
            authorizationCode: code,
            iss,
            resourceMetadataUrl: R.resourceMetadataUrl,
            fetchFn: p9n(),
            skipIssuerMetadataValidation: true
        });
        re(e, `Auth result: ${fe}`);
        if (fe === "AUTHORIZED") {
            let z = await G.tokens().catch(()=>{});
            re(e, `Tokens after auth: ${z ? "Present" : "Missing"}`);
            if (z) {
                re(e, `Token expires_in: ${z.expires_in}`);
            }
            i("tengu_mcp_oauth_flow_success", {
                flowAttemptId: ye(M),
                transportType: d(t.type),
                ...lv(t) && {
                    mcpServerBaseUrl: lv(t)
                }
            });
            g("mcp_oauth_flow");
        } else {
            throw new x(`Unexpected auth result: ${fe}`, "Unexpected auth result");
        }
    } catch (error) {
        re(e, `Error during auth completion: ${nD(error, t.url)}`);
        let E = "unknown";
        let I;
        let K;
        let T = l(error);
        let P = error instanceof Error ? error.cause : undefined;
        if (error instanceof e1t) {
            E = "cancelled";
        } else if (error instanceof DG || P instanceof DG) {
            E = "issuer_echo_denied";
        } else if (error instanceof vQe || P instanceof vQe) {
            E = [
                error,
                P
            ].find((D)=>D instanceof vQe)?.kind === "metadata" ? "issuer_echo_mismatch" : "issuer_response_mismatch";
        } else if (/AADSTS\d/.test(T)) {
            E = "entra_specific";
        } else if (/redirect[_ ]uri/i.test(T)) {
            E = "redirect_uri_mismatch";
        } else if (N && (Se(error) || Se(P))) {
            E = "token_response_schema_rejected";
        } else if (N) {
            E = "token_exchange_failed";
        } else if (T.includes("Authentication timeout")) {
            E = "timeout";
        } else if (T.includes("OAuth error:")) {
            E = "provider_denied";
        } else if (T.includes("already in use") || T.includes("EADDRINUSE") || T.includes("callback server failed") || T.includes("No available port")) {
            E = "port_unavailable";
        } else if (T.includes("SDK auth failed")) {
            E = rDs(T, P);
        }
        let G = [
            P,
            error
        ].find((H)=>H instanceof b9n);
        let ne = (P instanceof Error ? P : error instanceof Error ? error : null)?.message.match(/^HTTP (\d{3})\b/);
        if (G) {
            K = G.status;
        } else if (ne) {
            K = Number(ne[1]);
        }
        if (P instanceof LG) {
            I = P.code;
        }
        if (error instanceof LG) {
            I = error.code;
            if (error.code === "invalid_client" || error.code === "unauthorized_client") {
                let H = zl(e, t);
                try {
                    await Jn().mutate((D)=>{
                        let W = D.mcpOAuth?.[H];
                        if (!W) {
                            return D;
                        }
                        return {
                            ...D,
                            mcpOAuth: {
                                ...D.mcpOAuth,
                                [H]: {
                                    ...W,
                                    clientId: undefined,
                                    clientSecret: undefined
                                }
                            }
                        };
                    });
                } catch (err) {
                    re(e, `clear clientId failed: ${l(err)}`);
                }
            }
        }
        if (!/^OAuth error: access_denied(?: |$)/.test(T) && (E === "timeout" || T.includes("OAuth error:"))) {
            let H = zl(e, t);
            await Jn().mutate((D)=>{
                let W = D.mcpOAuth?.[H];
                if (!W?.clientId || W.accessToken || W.refreshToken || W.clientId !== A?.clientId) {
                    return D;
                }
                return {
                    ...D,
                    mcpOAuth: {
                        ...D.mcpOAuth,
                        [H]: {
                            ...W,
                            clientId: undefined,
                            clientSecret: undefined
                        }
                    }
                };
            }).catch((D)=>re(e, `drop clientId failed: ${l(D)}`));
        }
        if (E !== "cancelled") {
            m("mcp_oauth_flow", "mcp_oauth_flow_failed");
        }
        i("tengu_mcp_oauth_flow_error", {
            flowAttemptId: ye(M),
            reason: d(E),
            error_code: I === undefined ? undefined : nDs(I),
            http_status: $q(K),
            transportType: d(t.type),
            ...lv(t) && {
                mcpServerBaseUrl: lv(t)
            }
        });
        let B = nD(error, t.url);
        throw B === l(error) ? error : Error(B, {
            cause: error
        });
    }
}
function vgn(e, t) {
    return async (n, r)=>{
        let c = await e(n, r);
        if (c.status === 401 || c.status === 403) {
            t.sawAuthChallenge = true;
        }
        t.noteServerAnswer(n, c.status === 401 || c.status === 403 && yOe(c).error === "insufficient_scope");
        if (!new Headers(r?.headers).has("authorization")) {
            return c;
        }
        if (c.status === 403) {
            let { error, scope } = yOe(c);
            if (error === "insufficient_scope" && scope) {
                t.markStepUpPending(scope);
            }
        } else if (c.status === 401) {
            t.clearStepUpPending();
        }
        return c;
    };
}
class t1t {
    serverName;
    serverConfig;
    redirectUri;
    handleRedirection;
    _codeVerifier;
    _flowDiscoveryState;
    _flowDiscoveryStateAt = 0;
    _flowDiscoveryStateFromConfiguredUrl = false;
    _metadataEchoMode;
    _authorizationUrl;
    _state;
    _scopes;
    _metadata;
    _refreshInProgress;
    _pendingStepUpScope;
    _servedOverrideAuthorizationServerUrl;
    _servedOverrideDocuments = new WeakMap;
    _discoveredAuthorizationServer;
    _lastServedClientId;
    _lastServedAccessToken;
    _lastServedRefreshToken;
    _presented;
    onAuthorizationUrlCallback;
    skipBrowserOpen;
    constructor(e, t, n = IWe(), r = false, c, S){
        this.serverName = e;
        this.serverConfig = t;
        this.redirectUri = n;
        this.handleRedirection = r;
        this.onAuthorizationUrlCallback = c;
        this.skipBrowserOpen = S ?? false;
        this._presented = wg();
    }
    get redirectUrl() {
        return this.redirectUri;
    }
    get authorizationUrl() {
        return this._authorizationUrl;
    }
    get clientMetadata() {
        let e = {
            client_name: `Claude Code (${this.serverName})`,
            redirect_uris: [
                this.redirectUri
            ],
            grant_types: [
                "authorization_code",
                "refresh_token"
            ],
            response_types: [
                "code"
            ],
            token_endpoint_auth_method: "none"
        };
        let t = this.getCuratedMetadataScope();
        if (t) {
            e.scope = t;
            re(this.serverName, `Using scope from metadata: ${ik("scope", e.scope)}`);
        }
        return e;
    }
    get clientMetadataUrl() {
        if (!be(this.redirectUri)) {
            re(this.serverName, `redirectUri ${qr(this.redirectUri)} is not the document's loopback /callback: withholding CIMD client_id \u2014 registering via DCR`);
            return;
        }
        let e = xe();
        if (e !== iBe) {
            re(this.serverName, `Using CIMD URL from env: ${e}`);
        }
        return e;
    }
    setMetadata(e) {
        this._metadata = e;
        this._metadataEchoMode = ue() ? "enforce" : "observe";
    }
    getCuratedMetadataScope() {
        let e = Ne(this._metadata);
        if (e !== undefined) {
            return e;
        }
        if (this.serverConfig.oauth?.authServerMetadataUrl && Array.isArray(this._metadata?.scopes_supported)) {
            return this._metadata.scopes_supported.join(" ");
        }
    }
    markStepUpPending(e) {
        this._pendingStepUpScope = e;
        re(this.serverName, `Marked step-up pending: ${ik("scope", e)}`);
    }
    get pendingStepUpScope() {
        return this._pendingStepUpScope;
    }
    clearStepUpPending() {
        this._pendingStepUpScope = undefined;
    }
    clearStepUpPendingOnCredentialGone() {
        if (!this.handleRedirection) {
            this.clearStepUpPending();
        }
    }
    sawAuthChallenge = false;
    authChallengeOpen = false;
    noteServerAnswer(e, t) {
        let url = this.serverConfig.url;
        if (String(e) === (URL.canParse(url) ? new URL(url).href : url)) {
            this.authChallengeOpen = t;
        }
    }
    registrationOfferedByDiscovery = false;
    async readCredentialStore() {
        let e = await cue();
        if (e === Zl) {
            re(this.serverName, "Credential store read failed; not reporting credentials as absent");
            throw new H6e(this.serverName);
        }
        return e;
    }
    async state() {
        if (!this._state) {
            this._state = randomBytes(32).toString("base64url");
            re(this.serverName, "Generated new OAuth state");
        }
        return this._state;
    }
    async clientInformation() {
        let e = await this.resolveClientInformation();
        this._presented.record(e?.client_secret);
        this._presented.record(tyt(e?.client_id, e?.client_secret));
        return e;
    }
    async resolveClientInformation() {
        let e = await this.readCredentialStore();
        let t = zl(this.serverName, this.serverConfig);
        let client_secret = e?.mcpOAuthClientConfig?.[t]?.clientSecret;
        let r = this.serverConfig.oauth?.clientId;
        let c = e?.mcpOAuth?.[t];
        let S = this.handleRedirection && pt(c?.clientId) && !be(this.redirectUri);
        if (S) {
            re(this.serverName, `Stored client_id is the CIMD document URL (loopback /callback only); current redirectUri is ${qr(this.redirectUri)} \u2014 ${r ? "serving the configured client" : "registering via DCR"} instead`);
            if (r) {
                await this.patchStoredClientEntry(t, {
                    clientId: r,
                    clientSecret: undefined,
                    redirectUri: this.redirectUri
                }, "stale CIMD client_id repair");
            }
        }
        if (c?.clientId && !S) {
            let s = c.redirectUri;
            if (this.handleRedirection && (s ? ke(s) !== ke(this.redirectUri) : !this.redirectUri.startsWith("http://localhost"))) {
                let A = s ? qr(s) : "localhost";
                if (!r) {
                    re(this.serverName, `Cached client_id was registered for ${A}; current redirectUri is ${qr(this.redirectUri)} \u2014 forcing re-DCR`);
                    return;
                }
                if (c.clientId !== r) {
                    re(this.serverName, `Stored client_id is stale and its redirectUri ${A} predates ${qr(this.redirectUri)} \u2014 serving the configured client (no registration to redo)`);
                    await this.patchStoredClientEntry(t, {
                        clientId: r,
                        clientSecret: undefined,
                        redirectUri: this.redirectUri
                    }, "stale client_id repair");
                    this._lastServedClientId = r;
                    return {
                        client_id: r,
                        issuer: c.issuer,
                        client_secret
                    };
                }
                re(this.serverName, `Stored redirectUri ${A} predates ${qr(this.redirectUri)}, but the client_id is the configured one \u2014 serving it (no registration to redo)`);
                await this.patchStoredClientEntry(t, {
                    redirectUri: this.redirectUri
                }, "stored redirectUri convergence");
            }
            re(this.serverName, "Found client info");
            this._lastServedClientId = c.clientId;
            return {
                client_id: c.clientId,
                issuer: c.issuer,
                client_secret: c.clientSecret ?? (c.clientId === r ? client_secret : undefined)
            };
        }
        if (r) {
            re(this.serverName, "Using pre-configured client ID");
            this._lastServedClientId = r;
            return {
                client_id: r,
                client_secret
            };
        }
        if (!this.handleRedirection && this.registrationOfferedByDiscovery && !c?.accessToken && !c?.refreshToken) {
            re(this.serverName, "No client info found; deferring client registration to authentication time");
            throw new Izo(this.serverName);
        }
        re(this.serverName, "No client info found");
    }
    async patchStoredClientEntry(e, t, n) {
        try {
            if (!(await Jn().mutate((c)=>{
                let S = c.mcpOAuth?.[e];
                if (!S) {
                    return c;
                }
                return {
                    ...c,
                    mcpOAuth: {
                        ...c.mcpOAuth,
                        [e]: {
                            ...S,
                            ...t
                        }
                    }
                };
            }))?.success) {
                re(this.serverName, `${n} resolved unsuccessful`);
            }
        } catch (error) {
            re(this.serverName, `${n} failed: ${l(error)}`);
        }
    }
    async saveClientInformation(e) {
        this._presented.record(e.client_secret);
        this._presented.record(tyt(e.client_id, e.client_secret));
        let t = zl(this.serverName, this.serverConfig);
        try {
            if ((await Jn().mutate((r)=>({
                    ...r,
                    mcpOAuth: {
                        ...r.mcpOAuth,
                        [t]: {
                            ...r.mcpOAuth?.[t],
                            serverName: this.serverName,
                            serverUrl: this.serverConfig.url,
                            clientId: e.client_id,
                            clientSecret: e.issuer !== undefined && e.client_id === r.mcpOAuth?.[t]?.clientId && r.mcpOAuth?.[t]?.clientSecret === undefined && e.client_id === this.serverConfig.oauth?.clientId ? undefined : e.client_secret,
                            issuer: e.issuer ?? r.mcpOAuth?.[t]?.issuer,
                            redirectUri: !this.handleRedirection && e.client_id === r.mcpOAuth?.[t]?.clientId ? r.mcpOAuth?.[t]?.redirectUri : this.redirectUri,
                            accessToken: r.mcpOAuth?.[t]?.accessToken || "",
                            expiresAt: r.mcpOAuth?.[t]?.expiresAt
                        }
                    }
                })))?.success) {
                this._lastServedClientId = e.client_id;
            } else {
                re(this.serverName, "saveClientInformation persist resolved unsuccessful");
            }
        } catch (error) {
            re(this.serverName, `saveClientInformation persist failed: ${l(error)}`);
        }
    }
    async tokens() {
        let e = await this.readCredentialStore();
        let t = zl(this.serverName, this.serverConfig);
        let n = e?.mcpOAuth?.[t];
        if (FV() && this.serverConfig.oauth?.xaa && !n?.refreshToken && (!n?.accessToken || n.expiresAt != null && (n.expiresAt - Date.now()) / 1000 <= 300)) {
            if (!this._refreshInProgress) {
                re(this.serverName, n ? "XAA: access_token expiring, attempting silent exchange" : "XAA: no access_token yet, attempting silent exchange");
                this._refreshInProgress = this.xaaRefresh().finally(()=>{
                    this._refreshInProgress = undefined;
                });
            }
            try {
                let A = await this._refreshInProgress;
                if (A) {
                    this._lastServedAccessToken = A.access_token;
                    this._presented.record(A.access_token);
                    this._presented.record(A.refresh_token);
                    this._lastServedRefreshToken = A.refresh_token ?? this._lastServedRefreshToken;
                    return {
                        ...A,
                        issuer: n?.issuer
                    };
                }
            } catch (error) {
                re(this.serverName, `XAA silent exchange failed: ${l(error)}`);
            }
        }
        if (!n) {
            re(this.serverName, "No token data found");
            this.clearStepUpPendingOnCredentialGone();
            return;
        }
        if (!n.accessToken) {
            re(this.serverName, "No access token in storage");
            this.clearStepUpPendingOnCredentialGone();
            return;
        }
        this._lastServedAccessToken = n.accessToken;
        this._presented.record(n.accessToken);
        this._presented.record(n.refreshToken);
        this._lastServedRefreshToken = n.refreshToken;
        let r = n.expiresAt != null ? (n.expiresAt - Date.now()) / 1000 : undefined;
        let _pendingStepUpScope = this._pendingStepUpScope;
        let S = _pendingStepUpScope !== undefined;
        if (S) {
            re(this.serverName, `Step-up pending (${ik("scope", _pendingStepUpScope)}), omitting refresh_token`);
        }
        if (r != null && r <= 0 && !n.refreshToken) {
            re(this.serverName, "Token expired without refresh token");
            this.clearStepUpPendingOnCredentialGone();
            return;
        }
        if (r != null && r <= 300 && n.refreshToken && !S) {
            if (!this._refreshInProgress) {
                re(this.serverName, `Token expires in ${Math.floor(r)}s, attempting proactive refresh`);
                this._refreshInProgress = this.refreshAuthorization(n.refreshToken).finally(()=>{
                    this._refreshInProgress = undefined;
                });
            } else {
                re(this.serverName, "Token refresh already in progress, reusing existing promise");
            }
            try {
                let A = await this._refreshInProgress;
                if (A) {
                    re(this.serverName, "Token refreshed successfully");
                    this._lastServedAccessToken = A.access_token;
                    this._presented.record(A.access_token);
                    this._presented.record(A.refresh_token);
                    this._lastServedRefreshToken = A.refresh_token ?? this._lastServedRefreshToken;
                    return {
                        ...A,
                        issuer: n?.issuer
                    };
                }
                re(this.serverName, "Token refresh failed, returning current tokens");
            } catch (error) {
                re(this.serverName, `Token refresh error: ${nD(error, this.serverConfig.url)}`);
            }
        }
        let s = {
            access_token: n.accessToken,
            refresh_token: S ? undefined : n.refreshToken,
            expires_in: r,
            scope: n.scope,
            token_type: "Bearer",
            issuer: n.issuer
        };
        re(this.serverName, "Returning tokens");
        re(this.serverName, `Has refresh token: ${!!s.refresh_token}`);
        re(this.serverName, r != null ? `Expires in: ${Math.floor(r)}s` : "No expiration specified");
        return s;
    }
    async saveTokens(e) {
        this._presented.record(e.access_token);
        this._presented.record(e.refresh_token);
        let t = e.access_token !== this._lastServedAccessToken;
        let _flowDiscoveryStateAt = this._flowDiscoveryStateAt;
        if (t && this.handleRedirection) {
            this._pendingStepUpScope = undefined;
        }
        let r = zl(this.serverName, this.serverConfig);
        re(this.serverName, "Saving tokens");
        re(this.serverName, `Token expires in: ${e.expires_in}`);
        re(this.serverName, `Has refresh token: ${!!e.refresh_token}`);
        let signIn = this._servedOverrideAuthorizationServerUrl === undefined ? this._discoveredAuthorizationServer : {
            authorizationServerUrl: this._servedOverrideAuthorizationServerUrl,
            oauthMetadataFound: true
        };
        let S = this.servedMetadataUrl() ?? this._discoveredAuthorizationServer?.servedMetadataUrl;
        let s;
        let A;
        try {
            s = await Jn().mutate((h)=>({
                    ...h,
                    mcpOAuth: {
                        ...h.mcpOAuth,
                        [r]: {
                            ...h.mcpOAuth?.[r],
                            serverName: this.serverName,
                            serverUrl: this.serverConfig.url,
                            accessToken: e.access_token,
                            refreshToken: e.refresh_token ?? h.mcpOAuth?.[r]?.refreshToken,
                            expiresAt: e.expires_in != null ? Date.now() + e.expires_in * 1000 : undefined,
                            scope: e.scope,
                            issuer: e.issuer ?? h.mcpOAuth?.[r]?.issuer,
                            discoveryState: Rgn({
                                previous: h.mcpOAuth?.[r]?.discoveryState,
                                signIn,
                                servedMetadataUrl: S,
                                interactiveSignIn: this.handleRedirection
                            })
                        }
                    }
                }));
        } catch (error) {
            A = error;
        }
        if (s?.success) {
            this._lastServedAccessToken = e.access_token;
            this._lastServedRefreshToken = e.refresh_token ?? this._lastServedRefreshToken;
        }
        this.logTokenPersistFailed(s, A);
        if (t && this._flowDiscoveryStateAt === _flowDiscoveryStateAt) {
            this._flowDiscoveryState = undefined;
            this._flowDiscoveryStateAt = 0;
        }
    }
    logTokenPersistFailed(e, t) {
        De(this.serverName, this.serverConfig, e, t);
    }
    async xaaRefresh() {
        let e = T7();
        if (!e) {
            return;
        }
        let t = await Egn(e.issuer);
        if (!t) {
            re(this.serverName, "XAA: id_token not cached, needs interactive re-auth");
            return;
        }
        let n = this.serverConfig.oauth?.clientId;
        let r = await Mzo(this.serverName, this.serverConfig);
        if (!n || !r?.clientSecret) {
            re(this.serverName, "XAA: missing clientId or clientSecret in config — skipping silent refresh");
            return;
        }
        let c = await g9n(e.issuer);
        let S;
        try {
            S = await kgn(e.issuer);
        } catch (error) {
            re(this.serverName, `XAA: OIDC discovery failed in silent refresh: ${l(error)}`);
            return;
        }
        this._presented.record(r.clientSecret);
        try {
            let s = await ge(this.serverConfig.url, {
                clientId: n,
                clientSecret: r.clientSecret,
                idpClientId: e.clientId,
                idpClientSecret: c,
                idpIdToken: t,
                idpTokenEndpoint: S.token_endpoint
            }, this.serverName);
            let A = zl(this.serverName, this.serverConfig);
            let h;
            let y;
            try {
                h = await Jn().mutate((w)=>{
                    let C = w.mcpOAuth?.[A];
                    return {
                        ...w,
                        mcpOAuth: {
                            ...w.mcpOAuth,
                            [A]: {
                                ...C,
                                serverName: this.serverName,
                                serverUrl: this.serverConfig.url,
                                accessToken: s.access_token,
                                refreshToken: s.refresh_token ?? C?.refreshToken,
                                expiresAt: s.expires_in != null ? Date.now() + s.expires_in * 1000 : undefined,
                                scope: s.scope,
                                clientId: n,
                                clientSecret: r.clientSecret,
                                discoveryState: eyt({
                                    previous: C?.discoveryState,
                                    issuedBy: s.authorizationServerUrl,
                                    interactiveSignIn: false
                                })
                            }
                        }
                    };
                });
            } catch (error) {
                y = error;
            }
            this.logTokenPersistFailed(h, y);
            return {
                access_token: s.access_token,
                token_type: "Bearer",
                expires_in: s.expires_in,
                scope: s.scope,
                refresh_token: s.refresh_token
            };
        } catch (error) {
            if (error instanceof q && error.shouldClearIdToken) {
                await m9n(e.issuer);
                re(this.serverName, "XAA: cleared id_token after exchange failure");
            }
            throw error;
        }
    }
    async redirectToAuthorization(e) {
        let t = this._pendingStepUpScope ? undefined : this.serverConfig.oauth?.scopes || (this.serverConfig.oauth?.authServerMetadataUrl ? this.getCuratedMetadataScope() : undefined);
        let n = e.searchParams.get("scope");
        let r = t ?? n;
        if (r !== n) {
            re(this.serverName, `Overrode authorization scope from ${n ? ik("scope", n) : "NONE"} to configured: ${r ? ik("scope", r) : "NONE"}`);
        }
        let c = r === null ? null : oDs(r, this._metadata);
        if (c !== null && c !== n) {
            e.searchParams.set("scope", c);
            if (c !== t) {
                re(this.serverName, "Appended offline_access to authorization scope");
            }
        }
        let S = sDs(e);
        let s = e.searchParams.getAll("prompt");
        let A = S ? s.filter((M)=>M !== "consent") : s;
        if (A.length !== s.length || A.length > 1) {
            e.searchParams.delete("prompt");
            if (A.length > 0) {
                e.searchParams.set("prompt", A.includes("consent") ? "consent" : A.at(-1));
            }
        }
        this._authorizationUrl = e.toString();
        let h = e.searchParams.get("scope");
        re(this.serverName, `Authorization URL: ${xzo(e)}`);
        re(this.serverName, `Scopes in URL: ${h ? ik("scope", h) : "NOT FOUND"}`);
        if (h) {
            this._scopes = h;
            re(this.serverName, `Captured scopes from authorization URL: ${ik("scope", h)}`);
        } else {
            let M = this.getCuratedMetadataScope();
            if (M) {
                this._scopes = M;
                re(this.serverName, `Using scopes from metadata: ${ik("scope", M)}`);
            } else {
                re(this.serverName, "No scopes available from URL or metadata");
            }
        }
        if (this._scopes && !this.handleRedirection && this._pendingStepUpScope) {
            let M = zl(this.serverName, this.serverConfig);
            let stepUpScope = this._scopes;
            let U = false;
            try {
                await Jn().mutate((E)=>{
                    let I = E.mcpOAuth?.[M];
                    if (!I) {
                        return E;
                    }
                    U = true;
                    return {
                        ...E,
                        mcpOAuth: {
                            ...E.mcpOAuth,
                            [M]: {
                                ...I,
                                stepUpScope
                            }
                        }
                    };
                });
            } catch (error) {
                re(this.serverName, `step-up scope persist failed: ${l(error)}`);
            }
            if (U) {
                re(this.serverName, `Persisted step-up scope: ${ik("scope", stepUpScope)}`);
            }
        }
        if (!this.handleRedirection) {
            re(this.serverName, "Redirection handling is disabled, skipping redirect");
            return;
        }
        let y = e.toString();
        if (!y.startsWith("http://") && !y.startsWith("https://")) {
            throw Error("Invalid authorization URL: must use http:// or https:// scheme");
        }
        re(this.serverName, "Redirecting to authorization URL");
        let w = xzo(e);
        re(this.serverName, `Authorization URL: ${w}`);
        if (this.onAuthorizationUrlCallback) {
            this.onAuthorizationUrlCallback(y);
        }
        if (this.skipBrowserOpen) {
            re(this.serverName, `Skipping browser open (skipBrowserOpen=true). URL: ${w}`);
            return;
        }
        let headless = xj();
        if (headless) {
            re(this.serverName, `Skipping browser open (headless environment). URL: ${w}`);
        } else {
            re(this.serverName, `Opening authorization URL: ${w}`);
        }
        let success = headless ? false : await Fs(y);
        i("tengu_mcp_oauth_browser_open", {
            success,
            headless,
            platform: d(O())
        });
        if (!headless && !success) {
            re(this.serverName, "Browser didn't open automatically. URL is shown in UI.");
        }
    }
    async saveCodeVerifier(e) {
        re(this.serverName, "Saving code verifier");
        this._codeVerifier = e;
    }
    async codeVerifier() {
        if (!this._codeVerifier) {
            re(this.serverName, "No code verifier saved");
            throw Error("No code verifier saved");
        }
        re(this.serverName, "Returning code verifier");
        this._presented.record(this._codeVerifier);
        return this._codeVerifier;
    }
    async invalidateCredentials(e) {
        if (e === "verifier") {
            this._codeVerifier = undefined;
            re(this.serverName, "Invalidated credentials (scope: verifier)");
            return;
        }
        let t = e;
        let n = zl(this.serverName, this.serverConfig);
        let r = false;
        try {
            let c = this._lastServedClientId;
            let S = this._lastServedAccessToken;
            let s = this._lastServedRefreshToken;
            await Jn().mutate((A)=>{
                let h = A.mcpOAuth?.[n];
                if (!h) {
                    return A;
                }
                let y = {
                    ...A.mcpOAuth
                };
                switch(t){
                    case "all":
                        {
                            let w = S != null && !!h.accessToken && h.accessToken !== S;
                            let C = c != null && h.clientId != null && h.clientId !== c;
                            if (w || C) {
                                re(this.serverName, `invalidateCredentials('all') preserved: ${w ? "foreign token" : "concurrent re-registration"}`);
                                return A;
                            }
                            if (!h.clientId && !h.refreshToken && h.accessToken === "") {
                                return A;
                            }
                            y[n] = {
                                serverName: h.serverName,
                                serverUrl: h.serverUrl,
                                accessToken: "",
                                ...h.discoveryState && {
                                    discoveryState: h.discoveryState
                                },
                                ...h.stepUpScope && {
                                    stepUpScope: h.stepUpScope
                                }
                            };
                            break;
                        }
                    case "client":
                        y[n] = {
                            ...h,
                            clientId: undefined,
                            clientSecret: undefined
                        };
                        break;
                    case "tokens":
                        {
                            if (s != null && h.refreshToken && h.refreshToken !== s || S != null && !!h.accessToken && h.accessToken !== S) {
                                re(this.serverName, "invalidateCredentials('tokens') preserved: concurrent rotation");
                                return A;
                            }
                            y[n] = {
                                ...h,
                                accessToken: "",
                                refreshToken: undefined,
                                expiresAt: 0
                            };
                            break;
                        }
                    case "discovery":
                        {
                            if (!h.discoveryState?.authorizationServerMetadata) {
                                re(this.serverName, "invalidateCredentials('discovery') preserved: concurrent URL-only re-save");
                                return A;
                            }
                            y[n] = {
                                ...h,
                                discoveryState: Jve(h.discoveryState)
                            };
                            break;
                        }
                }
                r = true;
                return {
                    ...A,
                    mcpOAuth: y
                };
            });
        } catch (error) {
            re(this.serverName, `invalidateCredentials persist failed: ${l(error)}`);
        }
        if (r) {
            re(this.serverName, `Invalidated credentials (scope: ${e})`);
        }
    }
    async saveDiscoveryState(e) {
        if (e.authorizationServerMetadata) {
            wgn({
                serverName: this.serverName,
                site: "sdk_auth",
                expectedIssuer: e.authorizationServerUrl,
                receivedIssuer: e.authorizationServerMetadata.issuer,
                serverConfig: this.serverConfig
            });
        }
        this._flowDiscoveryState = e;
        this._flowDiscoveryStateAt = Date.now();
        this._flowDiscoveryStateFromConfiguredUrl = false;
        let t = zl(this.serverName, this.serverConfig);
        re(this.serverName, `Saving discovery state (authServer: ${qr(e.authorizationServerUrl)})`);
        let e_authorizationServerMetadata = e.authorizationServerMetadata;
        this.registrationOfferedByDiscovery = e_authorizationServerMetadata !== undefined && (typeof e_authorizationServerMetadata.registration_endpoint === "string" || e_authorizationServerMetadata.client_id_metadata_document_supported === true && this.clientMetadataUrl !== undefined);
        let discovered = {
            authorizationServerUrl: e.authorizationServerUrl,
            oauthMetadataFound: !!e.authorizationServerMetadata
        };
        let c = (e.authorizationServerMetadata !== undefined ? this._servedOverrideDocuments.get(e.authorizationServerMetadata) : undefined) ?? this.servedMetadataUrl();
        this._discoveredAuthorizationServer = {
            ...discovered,
            servedMetadataUrl: c
        };
        try {
            await Jn().mutate((S)=>{
                let s = Cgn({
                    previous: S.mcpOAuth?.[t]?.discoveryState,
                    discovered,
                    servedMetadataUrl: c
                });
                return {
                    ...S,
                    mcpOAuth: {
                        ...S.mcpOAuth,
                        [t]: {
                            ...S.mcpOAuth?.[t],
                            serverName: this.serverName,
                            serverUrl: this.serverConfig.url,
                            accessToken: S.mcpOAuth?.[t]?.accessToken || "",
                            expiresAt: S.mcpOAuth?.[t]?.expiresAt,
                            discoveryState: {
                                ...s,
                                resourceMetadataUrl: e.resourceMetadataUrl,
                                registrationNotOfferedAt: e_authorizationServerMetadata === undefined ? S.mcpOAuth?.[t]?.discoveryState?.registrationNotOfferedAt : typeof e_authorizationServerMetadata.registration_endpoint !== "string" && e_authorizationServerMetadata.client_id_metadata_document_supported !== true ? Date.now() : undefined
                            }
                        }
                    }
                };
            });
        } catch (error) {
            re(this.serverName, `saveDiscoveryState persist failed: ${l(error)}`);
        }
    }
    servePolicyCheckedDiscoveryState(e) {
        if (e?.authorizationServerMetadata && e.authorizationServerUrl) {
            try {
                wgn({
                    serverName: this.serverName,
                    site: "persisted_state",
                    expectedIssuer: e.authorizationServerUrl,
                    receivedIssuer: e.authorizationServerMetadata.issuer,
                    serverConfig: this.serverConfig
                });
            } catch (error) {
                if (error instanceof DG && this._flowDiscoveryState === e) {
                    this._flowDiscoveryState = undefined;
                    this._flowDiscoveryStateAt = 0;
                }
                throw error;
            }
        }
        return e;
    }
    servedMetadataUrl() {
        if (this._servedOverrideAuthorizationServerUrl === undefined) {
            return undefined;
        }
        return this.serverConfig.oauth?.authServerMetadataUrl;
    }
    async discoveryState() {
        this._servedOverrideAuthorizationServerUrl = undefined;
        let configuredMetadataUrl = this.serverConfig.oauth?.authServerMetadataUrl;
        if (configuredMetadataUrl) {
            re(this.serverName, `Fetching metadata from configured URL: ${qr(configuredMetadataUrl)}`);
            try {
                let authorizationServerMetadata = await he(this.serverName, this.serverConfig.url, {
                    configuredMetadataUrl
                });
                if (authorizationServerMetadata) {
                    let A = {
                        authorizationServerUrl: authorizationServerMetadata.issuer,
                        authorizationServerMetadata
                    };
                    this._servedOverrideAuthorizationServerUrl = authorizationServerMetadata.issuer;
                    this._servedOverrideDocuments.set(authorizationServerMetadata, configuredMetadataUrl);
                    this._flowDiscoveryState = A;
                    this._flowDiscoveryStateFromConfiguredUrl = true;
                    return this.servePolicyCheckedDiscoveryState(A);
                }
            } catch (error) {
                re(this.serverName, `Failed to fetch from configured metadata URL: ${nD(error, this.serverConfig.url)}`);
            }
            if (this._flowDiscoveryStateFromConfiguredUrl) {
                this._servedOverrideAuthorizationServerUrl = this._flowDiscoveryState?.authorizationServerUrl;
            }
            return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
        }
        if (this._flowDiscoveryState && Date.now() - this._flowDiscoveryStateAt < Ee) {
            return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
        }
        let _flowDiscoveryStateAt = this._flowDiscoveryStateAt;
        let r = await Jn().readAsync();
        if (this._flowDiscoveryState && this._flowDiscoveryStateAt !== _flowDiscoveryStateAt && Date.now() - this._flowDiscoveryStateAt < Ee) {
            return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
        }
        let c = zl(this.serverName, this.serverConfig);
        let S = r?.mcpOAuth?.[c]?.discoveryState;
        if (S?.authorizationServerUrl) {
            re(this.serverName, `Returning cached discovery state (authServer: ${qr(S.authorizationServerUrl)})`);
            let s = {
                authorizationServerUrl: S.authorizationServerUrl,
                resourceMetadataUrl: S.resourceMetadataUrl,
                resourceMetadata: S.resourceMetadata,
                authorizationServerMetadata: S.authorizationServerMetadata
            };
            try {
                this.servePolicyCheckedDiscoveryState(s);
            } catch (error) {
                if (error instanceof DG) {
                    await this.invalidateCredentials("discovery").catch(()=>{});
                    if (this._flowDiscoveryStateAt === _flowDiscoveryStateAt) {
                        this._flowDiscoveryState = undefined;
                        this._flowDiscoveryStateAt = 0;
                    }
                }
                throw error;
            }
            this._flowDiscoveryStateFromConfiguredUrl = false;
            return this._flowDiscoveryState = s;
        }
        return this.servePolicyCheckedDiscoveryState(this._flowDiscoveryState);
    }
    async refreshAuthorization(e) {
        let t = zl(this.serverName, this.serverConfig);
        let n = Dw();
        await ie().mkdir(n);
        let r = t.replace(/[^a-zA-Z0-9]/g, "_");
        let c = join(n, `mcp-refresh-${r}.lock`);
        let S;
        for(let s = 0; s < ve; s++){
            try {
                re(this.serverName, `Acquiring refresh lock (attempt ${s + 1})`);
                S = await ja(c, {
                    realpath: false,
                    stale: 60000,
                    update: 5000,
                    onCompromised: ()=>{
                        re(this.serverName, "Refresh lock was compromised");
                    }
                });
                re(this.serverName, "Acquired refresh lock");
                break;
            } catch (error) {
                let h = v(error);
                if (h === "ELOCKED") {
                    re(this.serverName, `Refresh lock held by another process, waiting (attempt ${s + 1}/${ve})`);
                    await Q(1000 + Math.random() * 1000);
                    continue;
                }
                re(this.serverName, `Failed to acquire refresh lock: ${h}; skipping refresh`);
                return;
            }
        }
        if (!S) {
            re(this.serverName, `Could not acquire refresh lock after ${ve} retries; skipping refresh`);
            return;
        }
        try {
            ZV();
            let h = (await Jn().readAsync())?.mcpOAuth?.[t];
            if (h) {
                let y = h.expiresAt != null ? (h.expiresAt - Date.now()) / 1000 : undefined;
                if (h.accessToken && (y == null || y > 300)) {
                    re(this.serverName, y != null ? `Another process already refreshed tokens (expires in ${Math.floor(y)}s)` : "Another process already refreshed tokens (no expiration)");
                    return {
                        access_token: h.accessToken,
                        refresh_token: h.refreshToken,
                        expires_in: y,
                        scope: h.scope,
                        token_type: "Bearer"
                    };
                }
                if (h.refreshToken) {
                    e = h.refreshToken;
                    this._lastServedRefreshToken = h.refreshToken;
                    this._presented.record(h.refreshToken);
                }
            }
            return await this._doRefresh(e);
        } finally{
            if (S) {
                try {
                    await S();
                    re(this.serverName, "Released refresh lock");
                } catch  {
                    re(this.serverName, "Failed to release refresh lock");
                }
            }
        }
    }
    async readConcurrentRefreshWinner() {
        ZV();
        let tokenData = (await Jn().readAsync())?.mcpOAuth?.[zl(this.serverName, this.serverConfig)];
        let n = tokenData?.expiresAt != null ? (tokenData.expiresAt - Date.now()) / 1000 : undefined;
        if (tokenData?.accessToken && (n == null || n > 300)) {
            re(this.serverName, "Another process landed fresh tokens; using those");
            let freshTokens = {
                access_token: tokenData.accessToken,
                refresh_token: tokenData.refreshToken,
                expires_in: n,
                scope: tokenData.scope,
                token_type: "Bearer"
            };
            return {
                tokenData,
                freshTokens
            };
        }
        return {
            tokenData,
            freshTokens: undefined
        };
    }
    async _doRefresh(refreshToken) {
        this._presented.record(refreshToken);
        let t = 3;
        let n = lv(this.serverConfig);
        let r = (c, S)=>{
            i(c === "success" ? "tengu_mcp_oauth_refresh_success" : "tengu_mcp_oauth_refresh_failure", {
                transportType: d(this.serverConfig.type),
                ...n && {
                    mcpServerBaseUrl: n
                },
                ...S && {
                    reason: d(S)
                }
            });
        };
        for(let c = 1; c <= t; c++){
            let clientInformation;
            try {
                re(this.serverName, "Starting token refresh");
                let s = p9n();
                let A = ue() ? "enforce" : "observe";
                let metadata = this._metadataEchoMode === A ? this._metadata : undefined;
                if (!metadata) {
                    let w = await this.discoveryState();
                    if (w?.authorizationServerMetadata) {
                        metadata = w.authorizationServerMetadata;
                    } else if (w?.authorizationServerUrl) {
                        re(this.serverName, `Re-discovering metadata from persisted auth server URL: ${qr(w.authorizationServerUrl)}`);
                        let expectedIssuer = w.authorizationServerUrl;
                        metadata = await Zht(expectedIssuer, {
                            fetchFn: s,
                            skipIssuerValidation: true
                        });
                        if (metadata) {
                            wgn({
                                serverName: this.serverName,
                                site: "refresh_rediscovery",
                                expectedIssuer,
                                receivedIssuer: metadata.issuer,
                                serverConfig: this.serverConfig
                            });
                        }
                    }
                }
                if (!metadata) {
                    metadata = await he(this.serverName, this.serverConfig.url, {
                        configuredMetadataUrl: this.serverConfig.oauth?.authServerMetadataUrl,
                        fetchFn: s,
                        serverConfigForAnalytics: this.serverConfig
                    });
                }
                if (!metadata) {
                    re(this.serverName, "Failed to discover OAuth metadata");
                    r("failure", "metadata_discovery_failed");
                    m("mcp_oauth_refresh", "mcp_oauth_refresh_metadata_failed");
                    return;
                }
                this._metadata = metadata;
                this._metadataEchoMode = ue() ? "enforce" : "observe";
                clientInformation = await this.clientInformation();
                if (!clientInformation) {
                    re(this.serverName, "No client information available");
                    r("failure", "no_client_info");
                    m("mcp_oauth_refresh", "mcp_oauth_refresh_no_client_info");
                    return;
                }
                let y = await k1r(new URL(this.serverConfig.url), {
                    metadata,
                    clientInformation,
                    refreshToken,
                    resource: new URL(this.serverConfig.url),
                    fetchFn: s
                });
                if (y) {
                    re(this.serverName, "Token refresh successful");
                    await this.saveTokens(y);
                    r("success");
                    g("mcp_oauth_refresh");
                    return y;
                }
                re(this.serverName, "Token refresh returned no tokens");
                r("failure", "no_tokens_returned");
                m("mcp_oauth_refresh", "mcp_oauth_refresh_no_tokens");
                return;
            } catch (error) {
                if (error instanceof DG) {
                    re(this.serverName, `Token refresh denied by issuer-echo policy: ${l(error)}`);
                    r("failure", "issuer_echo_denied");
                    m("mcp_oauth_refresh", "mcp_oauth_refresh_issuer_echo_denied");
                    return;
                }
                if (error instanceof LG && error.code === Vee.InvalidGrant) {
                    re(this.serverName, `Token refresh failed with invalid_grant: ${error.message}`);
                    let { freshTokens } = await this.readConcurrentRefreshWinner();
                    if (freshTokens) {
                        f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner");
                        return freshTokens;
                    }
                    re(this.serverName, "No valid tokens in storage, clearing stored tokens");
                    r("failure", "invalid_grant");
                    m("mcp_oauth_refresh", "mcp_oauth_refresh_invalid_grant");
                    await this.invalidateCredentials("tokens");
                    _Oe.emit(this.serverName);
                    return;
                }
                if (error instanceof LG && (error.code === "invalid_client" || error.code === "unauthorized_client")) {
                    re(this.serverName, "Token refresh failed: DCR client expired or invalid; clearing stored client registration");
                    let { tokenData, freshTokens } = await this.readConcurrentRefreshWinner();
                    if (freshTokens) {
                        f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner");
                        return freshTokens;
                    }
                    if (tokenData?.clientId && clientInformation && tokenData.clientId !== clientInformation.client_id) {
                        re(this.serverName, "Another process re-registered client; preserving");
                        r("failure", "concurrent_reregister");
                        f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_reregister");
                        return;
                    }
                    r("failure", error.code === "unauthorized_client" ? "unauthorized_client" : "invalid_client");
                    m("mcp_oauth_refresh", error.code === "unauthorized_client" ? "mcp_oauth_refresh_unauthorized_client" : "mcp_oauth_refresh_invalid_client");
                    await this.invalidateCredentials("all");
                    _Oe.emit(this.serverName);
                    return;
                }
                if (Se(error)) {
                    re(this.serverName, `Token refresh failed: token response rejected by SDK schema: ${l(error)}`);
                    r("failure", "token_response_schema_rejected");
                    m("mcp_oauth_refresh", "mcp_oauth_refresh_token_response_schema_rejected");
                    return;
                }
                let A = error instanceof H6e;
                let h = error instanceof Error && /timeout|timed out|etimedout|econnreset/i.test(error.message);
                let y = error instanceof LG && (error.code === Vee.ServerError || error.code === Vee.TemporarilyUnavailable || error.code === Vee.TooManyRequests || !at.has(error.code));
                let w = h || y || A;
                if (!w || c >= t) {
                    re(this.serverName, `Token refresh failed: ${nD(error, this.serverConfig.url)}`);
                    r("failure", w ? "transient_retries_exhausted" : "request_failed");
                    m("mcp_oauth_refresh", "mcp_oauth_refresh_request_failed");
                    return;
                }
                let C = 1000 * 2 ** (c - 1);
                re(this.serverName, `Token refresh failed, retrying in ${C}ms (attempt ${c}/${t})`);
                await Q(C);
            }
        }
    }
}
async function F1s() {
    let MCP_CLIENT_SECRET = process.env.MCP_CLIENT_SECRET;
    if (MCP_CLIENT_SECRET) {
        return MCP_CLIENT_SECRET;
    }
    if (!process.stdin.isTTY) {
        throw Error("No TTY available to prompt for client secret. Set MCP_CLIENT_SECRET env var instead.");
    }
    return new Promise((resolve, reject)=>{
        process.stderr.write("Enter OAuth client secret: ");
        process.stdin.setRawMode?.(true);
        let r = "";
        let c = (S)=>{
            let s = S.toString();
            if (s === `
` || s === "\r") {
                process.stdin.setRawMode?.(false);
                process.stdin.removeListener("data", c);
                process.stderr.write(`
`);
                resolve(r);
            } else if (s === "\x03") {
                process.stdin.setRawMode?.(false);
                process.stdin.removeListener("data", c);
                reject(Error("Cancelled"));
            } else if (s === "\x7F" || s === "\b") {
                r = r.slice(0, -1);
            } else {
                r += s;
            }
        };
        process.stdin.on("data", c);
    });
}
async function U1s(e, t, clientSecret) {
    let r = zl(e, t);
    try {
        return await Jn().mutate((c)=>({
                ...c,
                mcpOAuthClientConfig: {
                    ...c.mcpOAuthClientConfig,
                    [r]: {
                        clientSecret
                    }
                }
            }));
    } catch (error) {
        return {
            success: false,
            warning: l(error)
        };
    }
}
async function B1s(e, t) {
    let n = zl(e, t);
    await Jn().mutate((r)=>{
        if (!r.mcpOAuthClientConfig?.[n]) {
            return r;
        }
        let mcpOAuthClientConfig = {
            ...r.mcpOAuthClientConfig
        };
        delete mcpOAuthClientConfig[n];
        return {
            ...r,
            mcpOAuthClientConfig
        };
    });
}
async function Mzo(e, t) {
    let r = await Jn().readAsync();
    let c = zl(e, t);
    return r?.mcpOAuthClientConfig?.[c];
}
function Ne(e) {
    if (!e) {
        return;
    }
    if ("scope" in e && typeof e.scope === "string") {
        return e.scope;
    }
    if ("default_scope" in e && typeof e.default_scope === "string") {
        return e.default_scope;
    }
}
function oDs(e, t) {
    if (e !== null && e.split(" ").includes("offline_access")) {
        return e;
    }
    if (!t?.scopes_supported?.includes("offline_access")) {
        return e;
    }
    if (e === null) {
        return "offline_access";
    }
    return `${e} offline_access`;
}
const mt = [
    "login.microsoftonline.com",
    "login.microsoftonline.us",
    "login.partner.microsoftonline.cn",
    "login.chinacloudapi.cn"
];
const gt = [
    ".b2clogin.com",
    ".ciamlogin.com"
];
function sDs(e) {
    try {
        let t = (typeof e === "string" ? new URL(e) : e).hostname;
        return mt.includes(t) || gt.some((n)=>t.endsWith(n));
    } catch  {
        return false;
    }
}
export { nDs, rDs, xzo, Pzo, p9n, DG, wgn, Izo, e1t, M1s, H1s, D1s, f9n, L1s, N1s, $1s, Ozo, b1r, vgn, t1t, F1s, U1s, B1s, Mzo, oDs, sDs };
