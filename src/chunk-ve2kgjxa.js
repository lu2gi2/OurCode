import { Amn, o9n, s9n, sx, uQe, uOe, LBt, NBt, ix, jee, qve, i9n, Pht, VBr, KBr } from "/$bunfs/root/chunk-6qsavawp.js";
import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { b, d, pe, $q } from "/$bunfs/root/chunk-wkmq9ht0.js";
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
import { $t } from "/$bunfs/root/chunk-xb9cceab.js";
import { _Oe } from "/$bunfs/root/chunk-3d2fd069.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { FV, T7, cue, zl, H6e, D6e } from "/$bunfs/root/chunk-0ycjphb5.js";
import { tD } from "/$bunfs/root/chunk-c49tne6j.js";
import { wg, tyt, eD } from "/$bunfs/root/chunk-vvnqpdfm.js";
import { IWe, eEe } from "/$bunfs/root/chunk-q676wb6j.js";
import { Nie, Ygn, ik, qr, nD, rD } from "/$bunfs/root/chunk-g2whb6bt.js";
import { lv } from "/$bunfs/root/chunk-kasbfbhj.js";
import { wmn, t9n, n9n, vmn, GBr } from "/$bunfs/root/chunk-bxkek6bb.js";
import { Jve, Cgn, Rgn, eyt } from "/$bunfs/root/chunk-y9404g3q.js";
import { xj, Fs } from "/$bunfs/root/chunk-cg7f88dh.js";
import { Wxe } from "/$bunfs/root/chunk-485vtzdj.js";
import { o, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { ye } from "/$bunfs/root/chunk-tybndaby.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { randomBytes, randomUUID } from "crypto";
import { createServer } from "http";
import { join } from "path";
import { parse } from "url";
const $e = 30000;
const grant_type = "urn:ietf:params:oauth:grant-type:token-exchange";
const grant_type_1 = "urn:ietf:params:oauth:grant-type:jwt-bearer";
const requested_token_type = "urn:ietf:params:oauth:token-type:id-jag";
const subject_token_type = "urn:ietf:params:oauth:token-type:id_token";
function Te(e) {
    return (t, r)=>{
        let n = AbortSignal.timeout($e);
        let signal = e ? AbortSignal.any([
            n,
            e
        ]) : n;
        return fetch(t, {
            ...r,
            ...na({
                url: String(t)
            }),
            signal
        }).catch((h)=>rD(h, t));
    };
}
const se = Te();
function ne(e) {
    try {
        return new URL(e).href.replace(/\/$/, "");
    } catch  {
        return e.replace(/\/$/, "");
    }
}
class W extends Error {
    shouldClearIdToken;
    constructor(e, t){
        super(e);
        this.name = "XaaTokenExchangeError";
        this.shouldClearIdToken = t;
    }
}
const Fe = /"(access_token|refresh_token|id_token|assertion|subject_token|client_secret)"\s*:\s*"[^"]*"/g;
function ee(e) {
    return (typeof e === "string" ? e : _(e)).replace(Fe, (r, n)=>`"${n}":"[REDACTED]"`);
}
const ze = p(()=>u({
        access_token: o().optional(),
        issued_token_type: o().optional(),
        expires_in: Wxe().optional(),
        scope: o().optional()
    }));
const De = p(()=>u({
        access_token: o().min(1),
        token_type: o().default("Bearer"),
        expires_in: Wxe().optional(),
        scope: o().optional(),
        refresh_token: o().optional()
    }));
async function Xe(url, t) {
    let r;
    try {
        r = await i9n(url, undefined, t?.fetchFn ?? se);
    } catch (error) {
        if (Ke(error)) {
            throw error;
        }
        let c = error instanceof Error ? /^HTTP (\d{3}) /.exec(error.message)?.[1] : undefined;
        throw Error(`XAA: PRM discovery failed for ${qr(url)} (${c ? `HTTP ${c}` : error instanceof Error ? error.name : typeof error})`);
    }
    if (!r.resource || !r.authorization_servers?.[0]) {
        throw Error("XAA: PRM discovery failed: PRM missing resource or authorization_servers");
    }
    if (ne(r.resource) !== ne(url)) {
        throw Error(`XAA: PRM discovery failed: PRM resource mismatch: expected ${qr(url)}, got ${qr(r.resource)}`);
    }
    return {
        resource: r.resource,
        authorization_servers: r.authorization_servers
    };
}
async function He(e, t) {
    let r;
    try {
        r = await Pht(e, {
            fetchFn: t?.fetchFn ?? se
        });
    } catch (error) {
        if (Ke(error)) {
            throw error;
        }
        let c = error instanceof Error ? /^HTTP (\d{3}) /.exec(error.message)?.[1] : undefined;
        throw new x(`XAA: AS metadata discovery failed (${c ? `HTTP ${c}` : error instanceof Error ? error.name : typeof error})`, "XAA: AS metadata discovery failed");
    }
    if (!r?.issuer || !r.token_endpoint) {
        throw Error(`XAA: AS metadata discovery failed: no valid metadata at ${qr(e)}`);
    }
    if (ne(r.issuer) !== ne(e)) {
        throw Error(`XAA: AS metadata discovery failed: issuer mismatch: expected ${qr(e)}, got ${qr(r.issuer)}`);
    }
    if (!URL.canParse(r.token_endpoint) || new URL(r.token_endpoint).protocol !== "https:") {
        throw Error(`XAA: refusing non-HTTPS token endpoint: ${qr(r.token_endpoint)}`);
    }
    return {
        issuer: r.issuer,
        token_endpoint: r.token_endpoint,
        grant_types_supported: r.grant_types_supported,
        token_endpoint_auth_methods_supported: r.token_endpoint_auth_methods_supported
    };
}
async function je(e) {
    let t = e.fetchFn ?? se;
    let r = new URLSearchParams({
        grant_type,
        requested_token_type,
        audience: e.audience,
        resource: e.resource,
        subject_token: e.idToken,
        subject_token_type,
        client_id: e.clientId
    });
    if (e.clientSecret) {
        r.set("client_secret", e.clientSecret);
    }
    if (e.scope) {
        r.set("scope", e.scope);
    }
    let n = await t(e.tokenEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: r
    });
    if (!n.ok) {
        let S = ee(await n.text()).slice(0, 200);
        let k = n.status < 500;
        throw new W(`XAA: token exchange failed: HTTP ${n.status}: ${S}`, k);
    }
    let c;
    try {
        c = await n.json();
    } catch  {
        throw new W(`XAA: token exchange returned non-JSON (captive portal?) at ${qr(e.tokenEndpoint)}`, false);
    }
    let h = ze().safeParse(c);
    if (!h.success) {
        throw new W(`XAA: token exchange response did not match expected shape: ${ee(c)}`, true);
    }
    let h_data = h.data;
    if (!h_data.access_token) {
        throw new W(`XAA: token exchange response missing access_token: ${ee(h_data)}`, true);
    }
    if (h_data.issued_token_type !== requested_token_type) {
        throw new W(`XAA: token exchange returned unexpected issued_token_type: ${h_data.issued_token_type}`, true);
    }
    return {
        jwtAuthGrant: h_data.access_token,
        expiresIn: h_data.expires_in,
        scope: h_data.scope
    };
}
async function Be(e) {
    let t = e.fetchFn ?? se;
    let r = e.authMethod ?? "client_secret_basic";
    let n = new URLSearchParams({
        grant_type: grant_type_1,
        assertion: e.assertion
    });
    if (e.scope) {
        n.set("scope", e.scope);
    }
    let c = {
        "Content-Type": "application/x-www-form-urlencoded"
    };
    if (r === "client_secret_basic") {
        let k = Buffer.from(`${encodeURIComponent(e.clientId)}:${encodeURIComponent(e.clientSecret)}`).toString("base64");
        c.Authorization = `Basic ${k}`;
        wg().record(k);
    } else {
        n.set("client_id", e.clientId);
        n.set("client_secret", e.clientSecret);
    }
    wg().record(e.clientSecret);
    wg().record(e.assertion);
    let h = await t(e.tokenEndpoint, {
        method: "POST",
        headers: c,
        body: n
    });
    if (!h.ok) {
        let k = ee(await h.text()).slice(0, 200);
        throw Error(`XAA: jwt-bearer grant failed: HTTP ${h.status}: ${k}`);
    }
    let s;
    try {
        s = await h.json();
    } catch  {
        throw Error(`XAA: jwt-bearer grant returned non-JSON (captive portal?) at ${qr(e.tokenEndpoint)}`);
    }
    let S = De().safeParse(s);
    if (!S.success) {
        throw Error(`XAA: jwt-bearer response did not match expected shape: ${ee(s)}`);
    }
    return S.data;
}
async function ue(url, t, r = "xaa", n) {
    let c = Te(n);
    re(r, `XAA: discovering PRM for ${qr(url)}`);
    let h = await Xe(url, {
        fetchFn: c
    });
    re(r, `XAA: discovered resource=${qr(h.resource)} ASes=[${h.authorization_servers.map(qr).join(", ")}]`);
    let s;
    let S = [];
    for (let C of h.authorization_servers){
        let E;
        try {
            E = await He(C, {
                fetchFn: c
            });
        } catch (error) {
            if (n?.aborted) {
                throw error;
            }
            S.push(`${qr(C)}: ${error instanceof Error ? error.message : String(error)}`);
            continue;
        }
        if (E.grant_types_supported && !E.grant_types_supported.includes(grant_type_1)) {
            S.push(`${qr(C)}: does not advertise jwt-bearer grant (supported: ${E.grant_types_supported.join(", ")})`);
            continue;
        }
        s = E;
        break;
    }
    if (!s) {
        throw new x(`XAA: no authorization server supports jwt-bearer. Tried: ${S.join("; ")}`, `XAA: no authorization server supports jwt-bearer (tried ${h.authorization_servers.length})`);
    }
    let s_token_endpoint_auth_methods_supported = s.token_endpoint_auth_methods_supported;
    let A = s_token_endpoint_auth_methods_supported && !s_token_endpoint_auth_methods_supported.includes("client_secret_basic") && s_token_endpoint_auth_methods_supported.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
    re(r, `XAA: AS issuer=${qr(s.issuer)} token_endpoint=${qr(s.token_endpoint)} auth_method=${A}`);
    re(r, "XAA: exchanging id_token for ID-JAG at IdP");
    let y = await je({
        tokenEndpoint: t.idpTokenEndpoint,
        audience: s.issuer,
        resource: h.resource,
        idToken: t.idpIdToken,
        clientId: t.idpClientId,
        clientSecret: t.idpClientSecret,
        fetchFn: c
    });
    re(r, "XAA: ID-JAG obtained");
    re(r, "XAA: exchanging ID-JAG for access_token at AS");
    let T = await Be({
        tokenEndpoint: s.token_endpoint,
        assertion: y.jwtAuthGrant,
        clientId: t.clientId,
        clientSecret: t.clientSecret,
        authMethod: A,
        fetchFn: c
    });
    re(r, "XAA: access_token obtained");
    return {
        ...T,
        authorizationServerUrl: s.issuer
    };
}
const Ye = 30000;
const Ze = 500;
const Qe = new Set([
    ...kz,
    ...HF,
    "ETIMEDOUT"
]);
function et(error) {
    if (Ke(error)) {
        return true;
    }
    if (error instanceof Error && error.name === "TimeoutError") {
        return true;
    }
    let t = $m(error);
    return t !== null && Qe.has(t.code);
}
function he(e) {
    let t = e;
    return (t?.name === "ZodError" || t?.name === "$ZodError") && Array.isArray(t?.issues);
}
const tt = [
    "invalid_request",
    "invalid_client",
    "invalid_grant",
    "unauthorized_client",
    "unsupported_grant_type",
    "invalid_scope",
    "access_denied",
    "server_error",
    "temporarily_unavailable",
    "unsupported_response_type",
    "unsupported_token_type",
    "invalid_token",
    "method_not_allowed",
    "too_many_requests",
    "invalid_client_metadata",
    "insufficient_scope",
    "invalid_target",
    "authorization_pending",
    "expired_token",
    "slow_down"
];
function QHs(e) {
    let t = tt.find((r)=>r === e);
    return pe(t) ?? b("other");
}
function ZHs(e, t) {
    let r = t instanceof Error ? `${e}
${t.message}` : e;
    if (r.includes("dynamic client registration") || t instanceof sx && t.errorCode === "invalid_client_metadata") {
        return "dcr_failed";
    }
    if (r.includes("trying to load") && r.includes("metadata") || r.includes("Incompatible auth server")) {
        return "discovery_failed";
    }
    if (t instanceof sx) {
        return "dcr_rejected";
    }
    let n = v(t) ?? v(t instanceof Error ? t.cause : undefined);
    if (n && D6e.has(n)) {
        return "network_failed";
    }
    return "sdk_auth_failed";
}
const le = 5;
function QWo(e) {
    return qr(e.origin + e.pathname) + Ygn(e);
}
const rt = new Set([
    "invalid_refresh_token",
    "expired_refresh_token",
    "token_expired"
]);
async function ZWo(e) {
    if (!e.ok) {
        return e;
    }
    let t = await e.text();
    let r;
    try {
        r = X(t);
    } catch  {
        return new Response(t, e);
    }
    if (o9n.safeParse(r).success) {
        return new Response(t, e);
    }
    let n = s9n.safeParse(r);
    if (!n.success) {
        return new Response(t, e);
    }
    let c = rt.has(n.data.error) ? {
        error: "invalid_grant",
        error_description: n.data.error_description ?? `Server returned non-standard error code: ${n.data.error}`
    } : n.data;
    return new Response(_(c), {
        status: 400,
        statusText: "Bad Request",
        headers: e.headers
    });
}
function Z8n() {
    return async (e, t)=>{
        try {
            return await Ce(e, t);
        } catch (error) {
            if (t?.signal?.aborted || !et(error)) {
                throw error;
            }
            await Q(Ze, t?.signal ?? undefined);
            return await Ce(e, t);
        }
    };
}
async function Ce(e, t) {
    let signal = AbortSignal.timeout(Ye);
    let n = t?.method?.toUpperCase() === "POST";
    let c = na({
        url: String(e)
    });
    if (!t?.signal) {
        let k;
        try {
            k = await fetch(e, {
                ...t,
                ...c,
                signal
            });
        } catch (error) {
            rD(error, e);
        }
        if (n) {
            return ZWo(k);
        }
        return k;
    }
    let h = new AbortController;
    let s = ()=>h.abort();
    t.signal.addEventListener("abort", s);
    signal.addEventListener("abort", s);
    let S = ()=>{
        t.signal?.removeEventListener("abort", s);
        signal.removeEventListener("abort", s);
    };
    if (t.signal.aborted) {
        h.abort();
    }
    try {
        let k = await fetch(e, {
            ...t,
            ...c,
            signal: h.signal
        });
        S();
        if (n) {
            return ZWo(k);
        }
        return k;
    } catch (error) {
        S();
        rD(error, e);
    }
}
async function oe(e, t, r) {
    let { configuredMetadataUrl, fetchFn, resourceMetadataUrl } = r ?? {};
    let s = fetchFn ?? Z8n();
    if (configuredMetadataUrl) {
        if (!configuredMetadataUrl.startsWith("https://")) {
            throw Error(`authServerMetadataUrl must use https:// (got: ${qr(configuredMetadataUrl)})`);
        }
        let k = await s(configuredMetadataUrl, {
            headers: {
                Accept: "application/json"
            }
        });
        if (k.ok) {
            let A;
            try {
                A = await k.json();
            } catch  {
                throw Error(`Configured auth server metadata at ${qr(configuredMetadataUrl)} is not valid JSON`);
            }
            return Amn.parse(A);
        }
        throw Error(`HTTP ${k.status} fetching configured auth server metadata from ${qr(configuredMetadataUrl)}`);
    }
    try {
        let { authorizationServerMetadata } = await VBr(t, {
            fetchFn: s,
            ...resourceMetadataUrl && {
                resourceMetadataUrl
            }
        });
        if (authorizationServerMetadata) {
            return authorizationServerMetadata;
        }
    } catch (error) {
        re(e, `RFC 9728 discovery failed, falling back: ${nD(error, t)}`);
    }
    let S = new URL(t);
    if (S.pathname === "/") {
        return;
    }
    try {
        return await Pht(S, {
            fetchFn: s
        });
    } catch (error) {
        re(e, `Path-aware auth server discovery failed: ${nD(error, t)}`);
        return;
    }
}
class ezo extends ix {
    serverName;
    constructor(e){
        super("Authentication required; client registration is deferred until the user authenticates");
        this.serverName = e;
        this.name = "McpClientRegistrationDeferredError";
    }
}
class OBt extends Error {
    constructor(){
        super("Authentication was cancelled");
        this.name = "AuthenticationCancelledError";
    }
}
function fe(e) {
    try {
        let t = new URL(e);
        return `${t.protocol}//${t.hostname}`;
    } catch  {
        return e;
    }
}
function Ee(redirectUri) {
    let t = fe(redirectUri);
    return t === "http://127.0.0.1" || t === "http://localhost";
}
function Ue(e) {
    if (!e?.clientId || !e.redirectUri || !Ee(e.redirectUri)) {
        return;
    }
    let t = Number(new URL(e.redirectUri).port);
    if (t && e.redirectUri.replace("//127.0.0.1:", "//localhost:") === IWe(t)) {
        return t;
    }
}
function be() {
    return a.MCP_OAUTH_CLIENT_METADATA_URL || iBe;
}
function Oe(redirectUri) {
    if (!Ee(redirectUri)) {
        return false;
    }
    try {
        return new URL(redirectUri).pathname === "/callback";
    } catch  {
        return false;
    }
}
function nt(e) {
    return e !== undefined && (e === iBe || e === be());
}
function p1s(e) {
    return $t().oauthCallbackSubmitters.get(e);
}
function f1s(e, t) {
    let activeOAuthFlows = $t().activeOAuthFlows;
    activeOAuthFlows.set(e, t);
    t.finally(()=>{
        if (activeOAuthFlows.get(e) === t) {
            activeOAuthFlows.delete(e);
        }
    }).catch(()=>{});
}
function m1s(e) {
    return $t().activeOAuthFlows.get(e);
}
async function e9n(e, t) {
    let r = zl(e, t);
    let n = (await Jn().readAsync())?.mcpOAuth?.[r];
    if (!n || n.accessToken || n.refreshToken) {
        return;
    }
    try {
        await Jn().mutate((c)=>{
            let h = c.mcpOAuth?.[r];
            if (!h || h.accessToken || h.refreshToken) {
                return c;
            }
            let s = {
                ...c.mcpOAuth
            };
            delete s[r];
            return {
                ...c,
                mcpOAuth: s
            };
        });
    } catch (error) {
        re(e, `clear tokenless stub failed: ${l(error)}`);
    }
}
async function Re({ serverName, endpoint, token, tokenTypeHint, clientId, clientSecret, accessToken, authMethod = "client_secret_basic" }) {
    let k = new URLSearchParams;
    k.set("token", token);
    k.set("token_type_hint", tokenTypeHint);
    let A = {
        "Content-Type": "application/x-www-form-urlencoded"
    };
    if (clientId && clientSecret) {
        if (authMethod === "client_secret_post") {
            k.set("client_id", clientId);
            k.set("client_secret", clientSecret);
        } else {
            let y = Buffer.from(`${encodeURIComponent(clientId)}:${encodeURIComponent(clientSecret)}`).toString("base64");
            A.Authorization = `Basic ${y}`;
            wg().record(y);
        }
    } else if (clientId) {
        k.set("client_id", clientId);
    } else {
        re(serverName, `No client_id available for ${tokenTypeHint} revocation - server may reject`);
    }
    try {
        await At.post(endpoint, k, {
            headers: A
        });
        re(serverName, `Successfully revoked ${tokenTypeHint}`);
    } catch (error) {
        if (At.isAxiosError(error) && error.response?.status === 401 && accessToken) {
            re(serverName, `Got 401, retrying ${tokenTypeHint} revocation with Bearer auth`);
            k.delete("client_id");
            k.delete("client_secret");
            await At.post(endpoint, k, {
                headers: {
                    ...A,
                    Authorization: `Bearer ${accessToken}`
                }
            });
            re(serverName, `Successfully revoked ${tokenTypeHint} with Bearer auth`);
        } else {
            throw error;
        }
    }
}
async function g1s(e, t) {
    let n = (await Jn().readAsync())?.mcpOAuth?.[zl(e, t)];
    if (!n?.accessToken && !n?.refreshToken) {
        return;
    }
    return {
        accessToken: n.accessToken || undefined,
        refreshToken: n.refreshToken,
        clientId: n.clientId,
        clientSecret: n.clientSecret,
        ...n.discoveryState && {
            discoveryState: Jve(n.discoveryState)
        }
    };
}
async function Me(e, t, r) {
    let n = wg();
    n.record(r.accessToken);
    n.record(r.refreshToken);
    n.record(r.clientSecret);
    let c;
    try {
        let h = r.discoveryState?.authorizationServerUrl ?? t.url;
        let s = await oe(e, h, {
            configuredMetadataUrl: t.oauth?.authServerMetadataUrl
        });
        if (!s) {
            re(e, "No OAuth metadata found");
            c = "no_metadata";
        } else {
            let S = "revocation_endpoint" in s ? s.revocation_endpoint : null;
            if (!S) {
                re(e, "Server does not support token revocation");
                c = "no_revocation_endpoint";
            } else {
                let endpoint = String(S);
                let A = ("revocation_endpoint_auth_methods_supported" in s ? s.revocation_endpoint_auth_methods_supported : undefined) ?? ("token_endpoint_auth_methods_supported" in s ? s.token_endpoint_auth_methods_supported : undefined);
                let y = A && !A.includes("client_secret_basic") && A.includes("client_secret_post") ? "client_secret_post" : "client_secret_basic";
                re(e, `Revoking tokens via ${qr(endpoint)} (${y})`);
                if (r.refreshToken) {
                    try {
                        await Re({
                            serverName: e,
                            endpoint,
                            token: r.refreshToken,
                            tokenTypeHint: "refresh_token",
                            clientId: r.clientId,
                            clientSecret: r.clientSecret,
                            accessToken: r.accessToken,
                            authMethod: y
                        });
                    } catch (error) {
                        re(e, `Failed to revoke refresh token: ${l(error)}`);
                        c = "server_revoke_failed";
                    }
                }
                if (r.accessToken) {
                    try {
                        await Re({
                            serverName: e,
                            endpoint,
                            token: r.accessToken,
                            tokenTypeHint: "access_token",
                            clientId: r.clientId,
                            clientSecret: r.clientSecret,
                            accessToken: r.accessToken,
                            authMethod: y
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
        c = "server_revoke_failed";
    }
    return c;
}
async function h1s(e, t, r) {
    let n;
    try {
        let c = (await Jn().readAsync())?.mcpOAuth?.[zl(e, t)];
        let h = {
            ...r,
            accessToken: r.accessToken && r.accessToken !== c?.accessToken ? r.accessToken : undefined,
            refreshToken: r.refreshToken && r.refreshToken !== c?.refreshToken ? r.refreshToken : undefined
        };
        if (!h.accessToken && !h.refreshToken) {
            re(e, "No replaced tokens to revoke");
            g("mcp_oauth_revoke");
            return;
        }
        n = await Me(e, t, h);
    } catch (error) {
        re(e, `Failed to revoke replaced tokens: ${l(error)}`);
        n = "server_revoke_failed";
    }
    if (n) {
        f("mcp_oauth_revoke", n);
    } else {
        g("mcp_oauth_revoke");
    }
}
async function y1s(e, t, { preserveStepUpState = false } = {}) {
    let n = Jn();
    let c = await n.readAsync();
    if (!c?.mcpOAuth) {
        g("mcp_oauth_revoke");
        return;
    }
    let h = zl(e, t);
    let s = c.mcpOAuth[h];
    let S;
    if (s?.accessToken || s?.refreshToken) {
        S = await Me(e, t, {
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
            await n.mutate((k)=>{
                let A = k.mcpOAuth?.[h];
                if (A?.accessToken !== s.accessToken || A?.clientId !== s.clientId) {
                    return k;
                }
                return {
                    ...k,
                    mcpOAuth: {
                        ...k.mcpOAuth,
                        [h]: {
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
            await tzo(e, t);
        }
    } catch (error) {
        re(e, `clear local tokens failed: ${l(error)}`);
        S ??= "local_clear_failed";
    }
    eD(e);
    if (S) {
        f("mcp_oauth_revoke", S);
    } else {
        g("mcp_oauth_revoke");
    }
}
async function tzo(e, t, r) {
    let n = zl(e, t);
    let c;
    await Jn().mutate((h)=>{
        let s = h.mcpOAuth?.[n];
        if (!s) {
            return h;
        }
        let S = {
            ...h.mcpOAuth
        };
        if (s.clientId && r?.preserveClientRegistration?.(s)) {
            if (!s.accessToken && !s.refreshToken) {
                return h;
            }
            S[n] = {
                ...s,
                accessToken: "",
                refreshToken: undefined,
                expiresAt: 0,
                scope: undefined
            };
            c = "tokens";
        } else {
            delete S[n];
            c = "all";
        }
        return {
            ...h,
            mcpOAuth: S
        };
    });
    if (c) {
        re(e, c === "tokens" ? "Cleared stored tokens (preserved client registration)" : "Cleared stored tokens");
    }
}
function Ie(e, t, r, n) {
    if (r?.success) {
        return;
    }
    let c = n ? "mutate_rejected" : "storage_write_failed";
    let h = n ? l(n) : r?.warning ?? "storage write failed";
    re(e, `Token persist failed: ${h}`);
    let s = lv(t);
    i("tengu_mcp_oauth_token_persist_failed", {
        transportType: d(t.type),
        ...s && {
            mcpServerBaseUrl: s
        },
        reason: d(c)
    });
}
async function it(e, t, onAuthorizationUrl, abortSignal, skipBrowserOpen) {
    if (!t.oauth?.xaa) {
        throw Error("XAA: oauth.xaa must be set");
    }
    let h = T7();
    if (!h) {
        throw Error("XAA: no IdP connection configured. Run 'claude mcp xaa setup --issuer <url> --client-id <id> --client-secret' to configure.");
    }
    let s = t.oauth?.clientId;
    if (!s) {
        throw Error(`XAA: server '${e}' needs an AS client_id. Re-add with --client-id.`);
    }
    let clientSecret = (await nzo(e, t))?.clientSecret;
    if (!clientSecret) {
        let C = zl(e, t);
        let E = Object.keys((await Jn().readAsync())?.mcpOAuthClientConfig ?? {});
        let I = Nie(t.headers ?? {});
        re(e, `XAA: secret lookup miss. wanted=${C} have=[${E.join(", ")}] configHeaders=${_(I)}`);
        throw Error(`XAA: AS client secret not found for '${e}'. Re-add with --client-secret.`);
    }
    re(e, "XAA: starting cross-app access flow");
    let A = await n9n(h.issuer);
    let idTokenCacheHit = await wmn(h.issuer) !== undefined;
    let T = "idp_login";
    try {
        let C;
        try {
            C = await GBr({
                idpIssuer: h.issuer,
                idpClientId: h.clientId,
                idpClientSecret: A,
                callbackPort: h.callbackPort,
                onAuthorizationUrl,
                skipBrowserOpen,
                abortSignal
            });
        } catch (error) {
            if (abortSignal?.aborted) {
                throw new OBt;
            }
            throw error;
        }
        T = "discovery";
        let E = await vmn(h.issuer);
        T = "token_exchange";
        wg().record(clientSecret);
        let I;
        try {
            I = await ue(t.url, {
                clientId: s,
                clientSecret,
                idpClientId: h.clientId,
                idpClientSecret: A,
                idpIdToken: C,
                idpTokenEndpoint: E.token_endpoint
            }, e, abortSignal);
        } catch (error) {
            if (abortSignal?.aborted) {
                throw new OBt;
            }
            let N = l(error);
            if (error instanceof W) {
                if (error.shouldClearIdToken) {
                    await t9n(h.issuer);
                    re(e, "XAA: cleared cached id_token after token-exchange failure");
                }
            } else if (N.includes("PRM discovery failed") || N.includes("AS metadata discovery failed") || N.includes("no authorization server supports jwt-bearer")) {
                T = "discovery";
            } else if (N.includes("jwt-bearer")) {
                T = "jwt_bearer";
            }
            throw error;
        }
        let U = zl(e, t);
        let R = wg();
        R.record(I.access_token);
        R.record(I.refresh_token);
        let M;
        let B;
        try {
            M = await Jn().mutate((w)=>{
                let N = w.mcpOAuth?.[U];
                return {
                    ...w,
                    mcpOAuth: {
                        ...w.mcpOAuth,
                        [U]: {
                            ...N,
                            serverName: e,
                            serverUrl: t.url,
                            accessToken: I.access_token,
                            refreshToken: I.refresh_token ?? N?.refreshToken,
                            expiresAt: I.expires_in != null ? Date.now() + I.expires_in * 1000 : undefined,
                            scope: I.scope,
                            clientId: s,
                            clientSecret,
                            discoveryState: eyt({
                                previous: N?.discoveryState,
                                issuedBy: I.authorizationServerUrl,
                                interactiveSignIn: true
                            })
                        }
                    }
                };
            });
        } catch (error) {
            B = error;
        }
        if (M?.success) {
            re(e, "XAA: tokens saved");
        } else {
            Ie(e, t, M, B);
        }
        i("tengu_mcp_oauth_flow_success", {
            authMethod: b("xaa"),
            idTokenCacheHit
        });
        g("mcp_oauth_flow");
    } catch (error) {
        if (error instanceof OBt) {
            throw error;
        }
        m("mcp_oauth_flow", "mcp_oauth_xaa_failed");
        i("tengu_mcp_oauth_flow_failure", {
            authMethod: b("xaa"),
            xaaFailureStage: d(T),
            idTokenCacheHit
        });
        throw error;
    }
}
async function _1s(e, t, r, n, c) {
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
        await it(e, t, r, n, c?.skipBrowserOpen);
        return;
    }
    let h = Jn();
    let s = zl(e, t);
    let S = (await h.readAsync())?.mcpOAuth?.[s];
    let scope = S?.stepUpScope;
    let A = S?.discoveryState?.resourceMetadataUrl;
    let y = Ue(S);
    let resourceMetadataUrl;
    if (A) {
        try {
            resourceMetadataUrl = new URL(A);
        } catch  {
            re(e, `Invalid cached resourceMetadataUrl: ${qr(A)}`);
        }
    }
    let C = {
        scope,
        resourceMetadataUrl
    };
    let E = randomUUID();
    i("tengu_mcp_oauth_flow_start", {
        flowAttemptId: ye(E),
        isOAuthFlow: true,
        transportType: d(t.type),
        ...lv(t) && {
            mcpServerBaseUrl: lv(t)
        }
    });
    let I = false;
    try {
        let U = t.oauth?.callbackPort;
        let R = !!c?.redirectUri;
        let M = R ? 0 : U ?? await eEe(y);
        let B = c?.redirectUri ?? IWe(M);
        re(e, R ? `Using custom redirectUri: ${qr(B)} (no localhost listener)` : `Using redirect port: ${M}${U ? " (from config)" : y && M === y ? " (reusing registered port)" : ""}`);
        try {
            await tzo(e, t, {
                preserveClientRegistration: (z)=>M === Ue(z) || z.redirectUri === B
            });
        } catch (error) {
            re(e, `clear stored credentials failed: ${l(error)}`);
        }
        let w = $t();
        let N = new AbortController;
        if (!R) {
            w.oauthCallbackListeners.get(M)?.abort();
            w.oauthCallbackListeners.set(M, N);
        }
        let K = new MBt(e, t, B, true, r, c?.skipBrowserOpen);
        let _e = Boolean(t.oauth?.scopes || t.oauth?.authServerMetadataUrl);
        if (C.scope && !_e) {
            K.markStepUpPending(C.scope);
        }
        try {
            let z = await oe(e, t.url, {
                configuredMetadataUrl: t.oauth?.authServerMetadataUrl,
                resourceMetadataUrl: C.resourceMetadataUrl
            });
            if (z) {
                K.setMetadata(z);
                re(e, `Fetched OAuth metadata with scope: ${ik("scope", Pe(z) ?? "") || "NONE"}`);
            }
        } catch (error) {
            re(e, `Failed to fetch OAuth metadata: ${nD(error, t.url)}`);
        }
        let V = await K.state();
        let D = null;
        let L = null;
        let F = null;
        let me = null;
        let G = ()=>{
            if (D) {
                D.removeAllListeners();
                D.on("error", ()=>{});
                D.close();
                D = null;
            }
            if (L) {
                clearTimeout(L);
                L = null;
            }
            if (F) {
                n?.removeEventListener("abort", F);
                N.signal.removeEventListener("abort", F);
                F = null;
            }
            if (w.oauthCallbackListeners.get(M) === N) {
                w.oauthCallbackListeners.delete(M);
            }
            if (w.oauthCallbackSubmitters.get(e) === me) {
                w.oauthCallbackSubmitters.delete(e);
            }
            re(e, "MCP OAuth server cleaned up");
        };
        let authorizationCode = await new Promise((resolve, reject)=>{
            let te = false;
            let ve = (P)=>{
                if (te) {
                    return;
                }
                te = true;
                resolve(P);
            };
            let q = (P)=>{
                if (te) {
                    return;
                }
                te = true;
                reject(P);
            };
            F = ()=>{
                G();
                q(new OBt);
            };
            if (n?.aborted || N.signal.aborted) {
                F();
                return;
            }
            n?.addEventListener("abort", F);
            N.signal.addEventListener("abort", F);
            {
                let P = (H)=>{
                    try {
                        let j = new URL(H);
                        let Y = j.searchParams.get("code");
                        let ce = j.searchParams.get("state");
                        let J = j.searchParams.get("error");
                        if (!Y && !J) {
                            return false;
                        }
                        if (ce !== V) {
                            re(e, "Ignoring manual callback URL whose state belongs to a different flow");
                            return false;
                        }
                        if (J) {
                            let Z = j.searchParams.get("error_description") || "";
                            G();
                            q(Error(`OAuth error: ${J} - ${Z}`));
                            return true;
                        }
                        if (!Y) {
                            return false;
                        }
                        re(e, "Received auth code via manual callback URL");
                        G();
                        ve(Y);
                        return true;
                    } catch  {
                        return false;
                    }
                };
                me = P;
                w.oauthCallbackSubmitters.set(e, P);
                c?.onWaitingForCallback?.(P, M, V);
            }
            let ke = async ()=>{
                try {
                    re(e, "Starting SDK auth");
                    re(e, `Server URL: ${qr(t.url)}`);
                    let P = await jee(K, {
                        serverUrl: t.url,
                        scope: C.scope,
                        resourceMetadataUrl: C.resourceMetadataUrl,
                        fetchFn: Z8n()
                    });
                    re(e, `Initial auth result: ${P}`);
                    if (P !== "REDIRECT") {
                        re(e, `Unexpected auth result, expected REDIRECT: ${P}`);
                    }
                } catch (error) {
                    re(e, `SDK auth error: ${nD(error, t.url)}`);
                    G();
                    q(Object.assign(new x(`SDK auth failed: ${nD(error, t.url)}`, "SDK auth failed"), {
                        cause: error
                    }));
                }
            };
            if (R) {
                ke();
            } else {
                D = createServer((P, H)=>{
                    let j = parse(P.url || "", true);
                    if (j.pathname === "/callback") {
                        let Y = j.query.code;
                        let ce = j.query.state;
                        let J = j.query.error;
                        let Z = j.query.error_description;
                        let Se = j.query.error_uri;
                        if (ce !== V) {
                            H.writeHead(400, {
                                "Content-Type": "text/html"
                            });
                            H.end(tD({
                                ok: false,
                                heading: "Authentication failed",
                                message: "Invalid state parameter. Close this tab and try again from Claude Code."
                            }));
                            return;
                        }
                        if (J) {
                            H.writeHead(200, {
                                "Content-Type": "text/html"
                            });
                            H.end(tD({
                                ok: false,
                                heading: "Authentication failed",
                                message: "Close this tab and try again from Claude Code.",
                                detail: `${String(J)}: ${Z ?? ""}`
                            }));
                            G();
                            let de = `OAuth error: ${J}`;
                            if (Z) {
                                de += ` - ${Z}`;
                            }
                            if (Se) {
                                de += ` (See: ${Se})`;
                            }
                            q(Error(de));
                            return;
                        }
                        if (Y) {
                            H.writeHead(200, {
                                "Content-Type": "text/html"
                            });
                            H.end(tD({
                                ok: true,
                                heading: "Authentication successful",
                                message: "You can close this tab and return to Claude Code."
                            }));
                            G();
                            ve(Y);
                        }
                    } else {
                        H.writeHead(404, {
                            "Content-Type": "text/html"
                        });
                        H.end(tD({
                            ok: false,
                            heading: "Not found",
                            message: `This is the Claude Code MCP OAuth callback listener. It only handles /callback. If your OAuth provider redirected here, the registered redirect_uri must be ${qr(B)}.`
                        }));
                    }
                });
                D.on("error", (P)=>{
                    G();
                    if (P.code === "EADDRINUSE") {
                        let H = O() === "windows" ? `netstat -ano | findstr :${M}` : `lsof -ti:${M} -sTCP:LISTEN`;
                        q(new x(`OAuth callback port ${M} is already in use \u2014 another process may be holding it. ` + `Run \`${H}\` to find it.`, "OAuth callback port already in use"));
                    } else {
                        q(new x(`OAuth callback server failed: ${P.message}`, "OAuth callback server failed"));
                    }
                });
                D.listen(M, "127.0.0.1", ()=>void ke());
                D.unref();
            }
            L = setTimeout((P, H)=>{
                P();
                H(new x("Authentication timeout", "Authentication timeout"));
            }, 300000, G, q);
            L.unref();
        });
        I = true;
        re(e, "Completing auth flow with authorization code");
        wg().record(authorizationCode);
        let ae = await jee(K, {
            serverUrl: t.url,
            authorizationCode,
            resourceMetadataUrl: C.resourceMetadataUrl,
            fetchFn: Z8n()
        });
        re(e, `Auth result: ${ae}`);
        if (ae === "AUTHORIZED") {
            let z = await K.tokens().catch(()=>{});
            re(e, `Tokens after auth: ${z ? "Present" : "Missing"}`);
            if (z) {
                re(e, `Token expires_in: ${z.expires_in}`);
            }
            i("tengu_mcp_oauth_flow_success", {
                flowAttemptId: ye(E),
                transportType: d(t.type),
                ...lv(t) && {
                    mcpServerBaseUrl: lv(t)
                }
            });
            g("mcp_oauth_flow");
        } else {
            throw new x(`Unexpected auth result: ${ae}`, "Unexpected auth result");
        }
    } catch (error) {
        re(e, `Error during auth completion: ${nD(error, t.url)}`);
        let R = "unknown";
        let M;
        let B;
        let w = l(error);
        let N = error instanceof Error ? error.cause : undefined;
        if (error instanceof OBt) {
            R = "cancelled";
        } else if (/AADSTS\d/.test(w)) {
            R = "entra_specific";
        } else if (/redirect[_ ]uri/i.test(w)) {
            R = "redirect_uri_mismatch";
        } else if (I && (he(error) || he(N))) {
            R = "token_response_schema_rejected";
        } else if (I) {
            R = "token_exchange_failed";
        } else if (w.includes("Authentication timeout")) {
            R = "timeout";
        } else if (w.includes("OAuth error:")) {
            R = "provider_denied";
        } else if (w.includes("already in use") || w.includes("EADDRINUSE") || w.includes("callback server failed") || w.includes("No available port")) {
            R = "port_unavailable";
        } else if (w.includes("SDK auth failed")) {
            R = ZHs(w, N);
        }
        let K = (N instanceof Error ? N : error instanceof Error ? error : null)?.message.match(/^HTTP (\d{3})\b/);
        if (K) {
            B = Number(K[1]);
        }
        if (N instanceof sx) {
            M = N.errorCode;
        }
        if (error instanceof sx) {
            M = error.errorCode;
            if (error.errorCode === "invalid_client" || error.errorCode === "unauthorized_client") {
                let D = zl(e, t);
                try {
                    await Jn().mutate((L)=>{
                        let F = L.mcpOAuth?.[D];
                        if (!F) {
                            return L;
                        }
                        return {
                            ...L,
                            mcpOAuth: {
                                ...L.mcpOAuth,
                                [D]: {
                                    ...F,
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
        if (!/^OAuth error: access_denied(?: |$)/.test(w) && (R === "timeout" || w.includes("OAuth error:"))) {
            let D = zl(e, t);
            await Jn().mutate((L)=>{
                let F = L.mcpOAuth?.[D];
                if (!F?.clientId || F.accessToken || F.refreshToken || F.clientId !== S?.clientId) {
                    return L;
                }
                return {
                    ...L,
                    mcpOAuth: {
                        ...L.mcpOAuth,
                        [D]: {
                            ...F,
                            clientId: undefined,
                            clientSecret: undefined
                        }
                    }
                };
            }).catch((L)=>re(e, `drop clientId failed: ${l(L)}`));
        }
        if (R !== "cancelled") {
            m("mcp_oauth_flow", "mcp_oauth_flow_failed");
        }
        i("tengu_mcp_oauth_flow_error", {
            flowAttemptId: ye(E),
            reason: d(R),
            error_code: M === undefined ? undefined : QHs(M),
            http_status: $q(B),
            transportType: d(t.type),
            ...lv(t) && {
                mcpServerBaseUrl: lv(t)
            }
        });
        let V = nD(error, t.url);
        throw V === l(error) ? error : Error(V, {
            cause: error
        });
    }
}
function Smn(e, t) {
    return async (r, n)=>{
        let c = await e(r, n);
        if (c.status === 401 || c.status === 403) {
            t.sawAuthChallenge = true;
        }
        t.noteServerAnswer(r, c.status === 401 || c.status === 403 && qve(c).error === "insufficient_scope");
        if (!new Headers(n?.headers).has("authorization")) {
            return c;
        }
        if (c.status === 403) {
            let { error, scope } = qve(c);
            if (error === "insufficient_scope" && scope) {
                t.markStepUpPending(scope);
            }
        } else if (c.status === 401) {
            t.clearStepUpPending();
        }
        return c;
    };
}
class MBt {
    serverName;
    serverConfig;
    redirectUri;
    handleRedirection;
    _codeVerifier;
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
    constructor(e, t, r = IWe(), n = false, c, h){
        this.serverName = e;
        this.serverConfig = t;
        this.redirectUri = r;
        this.handleRedirection = n;
        this.onAuthorizationUrlCallback = c;
        this.skipBrowserOpen = h ?? false;
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
        if (!Oe(this.redirectUri)) {
            re(this.serverName, `redirectUri ${qr(this.redirectUri)} is not the document's loopback /callback: withholding CIMD client_id \u2014 registering via DCR`);
            return;
        }
        let e = be();
        if (e !== iBe) {
            re(this.serverName, `Using CIMD URL from env: ${e}`);
        }
        return e;
    }
    setMetadata(e) {
        this._metadata = e;
    }
    getCuratedMetadataScope() {
        let e = Pe(this._metadata);
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
        let n = this.serverConfig.oauth?.clientId;
        let c = e?.mcpOAuth?.[t];
        let h = this.handleRedirection && nt(c?.clientId) && !Oe(this.redirectUri);
        if (h) {
            re(this.serverName, `Stored client_id is the CIMD document URL (loopback /callback only); current redirectUri is ${qr(this.redirectUri)} \u2014 ${n ? "serving the configured client" : "registering via DCR"} instead`);
            if (n) {
                await this.patchStoredClientEntry(t, {
                    clientId: n,
                    clientSecret: undefined,
                    redirectUri: this.redirectUri
                }, "stale CIMD client_id repair");
            }
        }
        if (c?.clientId && !h) {
            let s = c.redirectUri;
            if (this.handleRedirection && (s ? fe(s) !== fe(this.redirectUri) : !this.redirectUri.startsWith("http://localhost"))) {
                let S = s ? qr(s) : "localhost";
                if (!n) {
                    re(this.serverName, `Cached client_id was registered for ${S}; current redirectUri is ${qr(this.redirectUri)} \u2014 forcing re-DCR`);
                    return;
                }
                if (c.clientId !== n) {
                    re(this.serverName, `Stored client_id is stale and its redirectUri ${S} predates ${qr(this.redirectUri)} \u2014 serving the configured client (no registration to redo)`);
                    await this.patchStoredClientEntry(t, {
                        clientId: n,
                        clientSecret: undefined,
                        redirectUri: this.redirectUri
                    }, "stale client_id repair");
                    this._lastServedClientId = n;
                    return {
                        client_id: n,
                        client_secret
                    };
                }
                re(this.serverName, `Stored redirectUri ${S} predates ${qr(this.redirectUri)}, but the client_id is the configured one \u2014 serving it (no registration to redo)`);
                await this.patchStoredClientEntry(t, {
                    redirectUri: this.redirectUri
                }, "stored redirectUri convergence");
            }
            re(this.serverName, "Found client info");
            this._lastServedClientId = c.clientId;
            return {
                client_id: c.clientId,
                client_secret: c.clientSecret ?? (c.clientId === n ? client_secret : undefined)
            };
        }
        if (n) {
            re(this.serverName, "Using pre-configured client ID");
            this._lastServedClientId = n;
            return {
                client_id: n,
                client_secret
            };
        }
        if (!this.handleRedirection && this.registrationOfferedByDiscovery && !c?.accessToken && !c?.refreshToken) {
            re(this.serverName, "No client info found; deferring client registration to authentication time");
            throw new ezo(this.serverName);
        }
        re(this.serverName, "No client info found");
    }
    async patchStoredClientEntry(e, t, r) {
        try {
            if (!(await Jn().mutate((c)=>{
                let h = c.mcpOAuth?.[e];
                if (!h) {
                    return c;
                }
                return {
                    ...c,
                    mcpOAuth: {
                        ...c.mcpOAuth,
                        [e]: {
                            ...h,
                            ...t
                        }
                    }
                };
            }))?.success) {
                re(this.serverName, `${r} resolved unsuccessful`);
            }
        } catch (error) {
            re(this.serverName, `${r} failed: ${l(error)}`);
        }
    }
    async saveClientInformation(e) {
        this._presented.record(e.client_secret);
        this._presented.record(tyt(e.client_id, e.client_secret));
        let t = zl(this.serverName, this.serverConfig);
        try {
            if ((await Jn().mutate((n)=>({
                    ...n,
                    mcpOAuth: {
                        ...n.mcpOAuth,
                        [t]: {
                            ...n.mcpOAuth?.[t],
                            serverName: this.serverName,
                            serverUrl: this.serverConfig.url,
                            clientId: e.client_id,
                            clientSecret: e.client_secret,
                            redirectUri: this.redirectUri,
                            accessToken: n.mcpOAuth?.[t]?.accessToken || "",
                            expiresAt: n.mcpOAuth?.[t]?.expiresAt
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
        let r = e?.mcpOAuth?.[t];
        if (FV() && this.serverConfig.oauth?.xaa && !r?.refreshToken && (!r?.accessToken || r.expiresAt != null && (r.expiresAt - Date.now()) / 1000 <= 300)) {
            if (!this._refreshInProgress) {
                re(this.serverName, r ? "XAA: access_token expiring, attempting silent exchange" : "XAA: no access_token yet, attempting silent exchange");
                this._refreshInProgress = this.xaaRefresh().finally(()=>{
                    this._refreshInProgress = undefined;
                });
            }
            try {
                let S = await this._refreshInProgress;
                if (S) {
                    this._lastServedAccessToken = S.access_token;
                    this._presented.record(S.access_token);
                    this._presented.record(S.refresh_token);
                    this._lastServedRefreshToken = S.refresh_token ?? this._lastServedRefreshToken;
                    return S;
                }
            } catch (error) {
                re(this.serverName, `XAA silent exchange failed: ${l(error)}`);
            }
        }
        if (!r) {
            re(this.serverName, "No token data found");
            this.clearStepUpPendingOnCredentialGone();
            return;
        }
        if (!r.accessToken) {
            re(this.serverName, "No access token in storage");
            this.clearStepUpPendingOnCredentialGone();
            return;
        }
        this._lastServedAccessToken = r.accessToken;
        this._presented.record(r.accessToken);
        this._presented.record(r.refreshToken);
        this._lastServedRefreshToken = r.refreshToken;
        let n = r.expiresAt != null ? (r.expiresAt - Date.now()) / 1000 : undefined;
        let _pendingStepUpScope = this._pendingStepUpScope;
        let h = _pendingStepUpScope !== undefined;
        if (h) {
            re(this.serverName, `Step-up pending (${ik("scope", _pendingStepUpScope)}), omitting refresh_token`);
        }
        if (n != null && n <= 0 && !r.refreshToken) {
            re(this.serverName, "Token expired without refresh token");
            this.clearStepUpPendingOnCredentialGone();
            return;
        }
        if (n != null && n <= 300 && r.refreshToken && !h) {
            if (!this._refreshInProgress) {
                re(this.serverName, `Token expires in ${Math.floor(n)}s, attempting proactive refresh`);
                this._refreshInProgress = this.refreshAuthorization(r.refreshToken).finally(()=>{
                    this._refreshInProgress = undefined;
                });
            } else {
                re(this.serverName, "Token refresh already in progress, reusing existing promise");
            }
            try {
                let S = await this._refreshInProgress;
                if (S) {
                    re(this.serverName, "Token refreshed successfully");
                    this._lastServedAccessToken = S.access_token;
                    this._presented.record(S.access_token);
                    this._presented.record(S.refresh_token);
                    this._lastServedRefreshToken = S.refresh_token ?? this._lastServedRefreshToken;
                    return S;
                }
                re(this.serverName, "Token refresh failed, returning current tokens");
            } catch (error) {
                re(this.serverName, `Token refresh error: ${nD(error, this.serverConfig.url)}`);
            }
        }
        let s = {
            access_token: r.accessToken,
            refresh_token: h ? undefined : r.refreshToken,
            expires_in: n,
            scope: r.scope,
            token_type: "Bearer"
        };
        re(this.serverName, "Returning tokens");
        re(this.serverName, `Has refresh token: ${!!s.refresh_token}`);
        re(this.serverName, n != null ? `Expires in: ${Math.floor(n)}s` : "No expiration specified");
        return s;
    }
    async saveTokens(e) {
        this._presented.record(e.access_token);
        this._presented.record(e.refresh_token);
        if (this.handleRedirection) {
            this._pendingStepUpScope = undefined;
        }
        let t = zl(this.serverName, this.serverConfig);
        re(this.serverName, "Saving tokens");
        re(this.serverName, `Token expires in: ${e.expires_in}`);
        re(this.serverName, `Has refresh token: ${!!e.refresh_token}`);
        let signIn = this._servedOverrideAuthorizationServerUrl === undefined ? this._discoveredAuthorizationServer : {
            authorizationServerUrl: this._servedOverrideAuthorizationServerUrl,
            oauthMetadataFound: true
        };
        let n = this.servedMetadataUrl() ?? this._discoveredAuthorizationServer?.servedMetadataUrl;
        let c;
        let h;
        try {
            c = await Jn().mutate((s)=>({
                    ...s,
                    mcpOAuth: {
                        ...s.mcpOAuth,
                        [t]: {
                            ...s.mcpOAuth?.[t],
                            serverName: this.serverName,
                            serverUrl: this.serverConfig.url,
                            accessToken: e.access_token,
                            refreshToken: e.refresh_token ?? s.mcpOAuth?.[t]?.refreshToken,
                            expiresAt: e.expires_in != null ? Date.now() + e.expires_in * 1000 : undefined,
                            scope: e.scope,
                            discoveryState: Rgn({
                                previous: s.mcpOAuth?.[t]?.discoveryState,
                                signIn,
                                servedMetadataUrl: n,
                                interactiveSignIn: this.handleRedirection
                            })
                        }
                    }
                }));
        } catch (error) {
            h = error;
        }
        if (c?.success) {
            this._lastServedAccessToken = e.access_token;
            this._lastServedRefreshToken = e.refresh_token ?? this._lastServedRefreshToken;
        }
        this.logTokenPersistFailed(c, h);
    }
    logTokenPersistFailed(e, t) {
        Ie(this.serverName, this.serverConfig, e, t);
    }
    async xaaRefresh() {
        let e = T7();
        if (!e) {
            return;
        }
        let t = await wmn(e.issuer);
        if (!t) {
            re(this.serverName, "XAA: id_token not cached, needs interactive re-auth");
            return;
        }
        let r = this.serverConfig.oauth?.clientId;
        let n = await nzo(this.serverName, this.serverConfig);
        if (!r || !n?.clientSecret) {
            re(this.serverName, "XAA: missing clientId or clientSecret in config — skipping silent refresh");
            return;
        }
        let c = await n9n(e.issuer);
        let h;
        try {
            h = await vmn(e.issuer);
        } catch (error) {
            re(this.serverName, `XAA: OIDC discovery failed in silent refresh: ${l(error)}`);
            return;
        }
        this._presented.record(n.clientSecret);
        try {
            let s = await ue(this.serverConfig.url, {
                clientId: r,
                clientSecret: n.clientSecret,
                idpClientId: e.clientId,
                idpClientSecret: c,
                idpIdToken: t,
                idpTokenEndpoint: h.token_endpoint
            }, this.serverName);
            let S = zl(this.serverName, this.serverConfig);
            let k;
            let A;
            try {
                k = await Jn().mutate((y)=>{
                    let T = y.mcpOAuth?.[S];
                    return {
                        ...y,
                        mcpOAuth: {
                            ...y.mcpOAuth,
                            [S]: {
                                ...T,
                                serverName: this.serverName,
                                serverUrl: this.serverConfig.url,
                                accessToken: s.access_token,
                                refreshToken: s.refresh_token ?? T?.refreshToken,
                                expiresAt: s.expires_in != null ? Date.now() + s.expires_in * 1000 : undefined,
                                scope: s.scope,
                                clientId: r,
                                clientSecret: n.clientSecret,
                                discoveryState: eyt({
                                    previous: T?.discoveryState,
                                    issuedBy: s.authorizationServerUrl,
                                    interactiveSignIn: false
                                })
                            }
                        }
                    };
                });
            } catch (error) {
                A = error;
            }
            this.logTokenPersistFailed(k, A);
            return {
                access_token: s.access_token,
                token_type: "Bearer",
                expires_in: s.expires_in,
                scope: s.scope,
                refresh_token: s.refresh_token
            };
        } catch (error) {
            if (error instanceof W && error.shouldClearIdToken) {
                await t9n(e.issuer);
                re(this.serverName, "XAA: cleared id_token after exchange failure");
            }
            throw error;
        }
    }
    async redirectToAuthorization(e) {
        let t = this._pendingStepUpScope ? undefined : this.serverConfig.oauth?.scopes || (this.serverConfig.oauth?.authServerMetadataUrl ? this.getCuratedMetadataScope() : undefined);
        let r = e.searchParams.get("scope");
        let n = t ?? r;
        if (n !== r) {
            re(this.serverName, `Overrode authorization scope from ${r ? ik("scope", r) : "NONE"} to configured: ${n ? ik("scope", n) : "NONE"}`);
        }
        let c = n === null ? null : eDs(n, this._metadata);
        if (c !== null && c !== r) {
            e.searchParams.set("scope", c);
            if (c !== t) {
                re(this.serverName, "Appended offline_access to authorization scope");
            }
        }
        let h = tDs(e);
        let s = e.searchParams.getAll("prompt");
        let S = h ? s.filter((E)=>E !== "consent") : s;
        if (S.length !== s.length || S.length > 1) {
            e.searchParams.delete("prompt");
            if (S.length > 0) {
                e.searchParams.set("prompt", S.includes("consent") ? "consent" : S.at(-1));
            }
        }
        this._authorizationUrl = e.toString();
        let k = e.searchParams.get("scope");
        re(this.serverName, `Authorization URL: ${QWo(e)}`);
        re(this.serverName, `Scopes in URL: ${k ? ik("scope", k) : "NOT FOUND"}`);
        if (k) {
            this._scopes = k;
            re(this.serverName, `Captured scopes from authorization URL: ${ik("scope", k)}`);
        } else {
            let E = this.getCuratedMetadataScope();
            if (E) {
                this._scopes = E;
                re(this.serverName, `Using scopes from metadata: ${ik("scope", E)}`);
            } else {
                re(this.serverName, "No scopes available from URL or metadata");
            }
        }
        if (this._scopes && !this.handleRedirection && this._pendingStepUpScope) {
            let E = zl(this.serverName, this.serverConfig);
            let stepUpScope = this._scopes;
            let U = false;
            try {
                await Jn().mutate((R)=>{
                    let M = R.mcpOAuth?.[E];
                    if (!M) {
                        return R;
                    }
                    U = true;
                    return {
                        ...R,
                        mcpOAuth: {
                            ...R.mcpOAuth,
                            [E]: {
                                ...M,
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
        let A = e.toString();
        if (!A.startsWith("http://") && !A.startsWith("https://")) {
            throw Error("Invalid authorization URL: must use http:// or https:// scheme");
        }
        re(this.serverName, "Redirecting to authorization URL");
        let y = QWo(e);
        re(this.serverName, `Authorization URL: ${y}`);
        if (this.onAuthorizationUrlCallback) {
            this.onAuthorizationUrlCallback(A);
        }
        if (this.skipBrowserOpen) {
            re(this.serverName, `Skipping browser open (skipBrowserOpen=true). URL: ${y}`);
            return;
        }
        let headless = xj();
        if (headless) {
            re(this.serverName, `Skipping browser open (headless environment). URL: ${y}`);
        } else {
            re(this.serverName, `Opening authorization URL: ${y}`);
        }
        let success = headless ? false : await Fs(A);
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
        let r = zl(this.serverName, this.serverConfig);
        let n = false;
        try {
            let c = this._lastServedClientId;
            let h = this._lastServedAccessToken;
            let s = this._lastServedRefreshToken;
            await Jn().mutate((S)=>{
                let k = S.mcpOAuth?.[r];
                if (!k) {
                    return S;
                }
                let A = {
                    ...S.mcpOAuth
                };
                switch(t){
                    case "all":
                        {
                            let y = h != null && !!k.accessToken && k.accessToken !== h;
                            let T = c != null && k.clientId != null && k.clientId !== c;
                            if (y || T) {
                                re(this.serverName, `invalidateCredentials('all') preserved: ${y ? "foreign token" : "concurrent re-registration"}`);
                                return S;
                            }
                            if (!k.clientId && !k.refreshToken && k.accessToken === "") {
                                return S;
                            }
                            A[r] = {
                                serverName: k.serverName,
                                serverUrl: k.serverUrl,
                                accessToken: "",
                                ...k.discoveryState && {
                                    discoveryState: k.discoveryState
                                },
                                ...k.stepUpScope && {
                                    stepUpScope: k.stepUpScope
                                }
                            };
                            break;
                        }
                    case "client":
                        A[r] = {
                            ...k,
                            clientId: undefined,
                            clientSecret: undefined
                        };
                        break;
                    case "tokens":
                        {
                            if (s != null && k.refreshToken && k.refreshToken !== s || h != null && !!k.accessToken && k.accessToken !== h) {
                                re(this.serverName, "invalidateCredentials('tokens') preserved: concurrent rotation");
                                return S;
                            }
                            A[r] = {
                                ...k,
                                accessToken: "",
                                refreshToken: undefined,
                                expiresAt: 0
                            };
                            break;
                        }
                    case "discovery":
                        A[r] = {
                            ...k,
                            discoveryState: k.discoveryState && Jve(k.discoveryState),
                            stepUpScope: undefined
                        };
                        break;
                }
                n = true;
                return {
                    ...S,
                    mcpOAuth: A
                };
            });
        } catch (error) {
            re(this.serverName, `invalidateCredentials persist failed: ${l(error)}`);
        }
        if (n) {
            re(this.serverName, `Invalidated credentials (scope: ${e})`);
        }
    }
    async saveDiscoveryState(e) {
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
            await Jn().mutate((h)=>{
                let s = Cgn({
                    previous: h.mcpOAuth?.[t]?.discoveryState,
                    discovered,
                    servedMetadataUrl: c
                });
                return {
                    ...h,
                    mcpOAuth: {
                        ...h.mcpOAuth,
                        [t]: {
                            ...h.mcpOAuth?.[t],
                            serverName: this.serverName,
                            serverUrl: this.serverConfig.url,
                            accessToken: h.mcpOAuth?.[t]?.accessToken || "",
                            expiresAt: h.mcpOAuth?.[t]?.expiresAt,
                            discoveryState: {
                                ...s,
                                resourceMetadataUrl: e.resourceMetadataUrl,
                                registrationNotOfferedAt: e_authorizationServerMetadata === undefined ? h.mcpOAuth?.[t]?.discoveryState?.registrationNotOfferedAt : typeof e_authorizationServerMetadata.registration_endpoint !== "string" && e_authorizationServerMetadata.client_id_metadata_document_supported !== true ? Date.now() : undefined
                            }
                        }
                    }
                };
            });
        } catch (error) {
            re(this.serverName, `saveDiscoveryState persist failed: ${l(error)}`);
        }
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
                let authorizationServerMetadata = await oe(this.serverName, this.serverConfig.url, {
                    configuredMetadataUrl
                });
                if (authorizationServerMetadata) {
                    this._servedOverrideAuthorizationServerUrl = authorizationServerMetadata.issuer;
                    this._servedOverrideDocuments.set(authorizationServerMetadata, configuredMetadataUrl);
                    return {
                        authorizationServerUrl: authorizationServerMetadata.issuer,
                        authorizationServerMetadata
                    };
                }
            } catch (error) {
                re(this.serverName, `Failed to fetch from configured metadata URL: ${nD(error, this.serverConfig.url)}`);
            }
            return;
        }
        let r = await Jn().readAsync();
        let n = zl(this.serverName, this.serverConfig);
        let c = r?.mcpOAuth?.[n]?.discoveryState;
        if (c?.authorizationServerUrl) {
            re(this.serverName, `Returning cached discovery state (authServer: ${qr(c.authorizationServerUrl)})`);
            return {
                authorizationServerUrl: c.authorizationServerUrl,
                resourceMetadataUrl: c.resourceMetadataUrl,
                resourceMetadata: c.resourceMetadata,
                authorizationServerMetadata: c.authorizationServerMetadata
            };
        }
    }
    async refreshAuthorization(e) {
        let t = zl(this.serverName, this.serverConfig);
        let r = Dw();
        await ie().mkdir(r);
        let n = t.replace(/[^a-zA-Z0-9]/g, "_");
        let c = join(r, `mcp-refresh-${n}.lock`);
        let h;
        for(let s = 0; s < le; s++){
            try {
                re(this.serverName, `Acquiring refresh lock (attempt ${s + 1})`);
                h = await ja(c, {
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
                let k = v(error);
                if (k === "ELOCKED") {
                    re(this.serverName, `Refresh lock held by another process, waiting (attempt ${s + 1}/${le})`);
                    await Q(1000 + Math.random() * 1000);
                    continue;
                }
                re(this.serverName, `Failed to acquire refresh lock: ${k}; skipping refresh`);
                return;
            }
        }
        if (!h) {
            re(this.serverName, `Could not acquire refresh lock after ${le} retries; skipping refresh`);
            return;
        }
        try {
            ZV();
            let k = (await Jn().readAsync())?.mcpOAuth?.[t];
            if (k) {
                let A = k.expiresAt != null ? (k.expiresAt - Date.now()) / 1000 : undefined;
                if (k.accessToken && (A == null || A > 300)) {
                    re(this.serverName, A != null ? `Another process already refreshed tokens (expires in ${Math.floor(A)}s)` : "Another process already refreshed tokens (no expiration)");
                    return {
                        access_token: k.accessToken,
                        refresh_token: k.refreshToken,
                        expires_in: A,
                        scope: k.scope,
                        token_type: "Bearer"
                    };
                }
                if (k.refreshToken) {
                    e = k.refreshToken;
                    this._lastServedRefreshToken = k.refreshToken;
                    this._presented.record(k.refreshToken);
                }
            }
            return await this._doRefresh(e);
        } finally{
            if (h) {
                try {
                    await h();
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
        let r = tokenData?.expiresAt != null ? (tokenData.expiresAt - Date.now()) / 1000 : undefined;
        if (tokenData?.accessToken && (r == null || r > 300)) {
            re(this.serverName, "Another process landed fresh tokens; using those");
            let freshTokens = {
                access_token: tokenData.accessToken,
                refresh_token: tokenData.refreshToken,
                expires_in: r,
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
        let r = lv(this.serverConfig);
        let n = (c, h)=>{
            i(c === "success" ? "tengu_mcp_oauth_refresh_success" : "tengu_mcp_oauth_refresh_failure", {
                transportType: d(this.serverConfig.type),
                ...r && {
                    mcpServerBaseUrl: r
                },
                ...h && {
                    reason: d(h)
                }
            });
        };
        for(let c = 1; c <= t; c++){
            let clientInformation;
            try {
                re(this.serverName, "Starting token refresh");
                let s = Z8n();
                let metadata = this._metadata;
                if (!metadata) {
                    let A = await this.discoveryState();
                    if (A?.authorizationServerMetadata) {
                        metadata = A.authorizationServerMetadata;
                    } else if (A?.authorizationServerUrl) {
                        re(this.serverName, `Re-discovering metadata from persisted auth server URL: ${qr(A.authorizationServerUrl)}`);
                        metadata = await Pht(A.authorizationServerUrl, {
                            fetchFn: s
                        });
                    }
                }
                if (!metadata) {
                    metadata = await oe(this.serverName, this.serverConfig.url, {
                        configuredMetadataUrl: this.serverConfig.oauth?.authServerMetadataUrl,
                        fetchFn: s
                    });
                }
                if (!metadata) {
                    re(this.serverName, "Failed to discover OAuth metadata");
                    n("failure", "metadata_discovery_failed");
                    m("mcp_oauth_refresh", "mcp_oauth_refresh_metadata_failed");
                    return;
                }
                this._metadata = metadata;
                clientInformation = await this.clientInformation();
                if (!clientInformation) {
                    re(this.serverName, "No client information available");
                    n("failure", "no_client_info");
                    m("mcp_oauth_refresh", "mcp_oauth_refresh_no_client_info");
                    return;
                }
                let k = await KBr(new URL(this.serverConfig.url), {
                    metadata,
                    clientInformation,
                    refreshToken,
                    resource: new URL(this.serverConfig.url),
                    fetchFn: s
                });
                if (k) {
                    re(this.serverName, "Token refresh successful");
                    await this.saveTokens(k);
                    n("success");
                    g("mcp_oauth_refresh");
                    return k;
                }
                re(this.serverName, "Token refresh returned no tokens");
                n("failure", "no_tokens_returned");
                m("mcp_oauth_refresh", "mcp_oauth_refresh_no_tokens");
                return;
            } catch (error) {
                if (error instanceof uQe) {
                    re(this.serverName, `Token refresh failed with invalid_grant: ${error.message}`);
                    let { freshTokens } = await this.readConcurrentRefreshWinner();
                    if (freshTokens) {
                        f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner");
                        return freshTokens;
                    }
                    re(this.serverName, "No valid tokens in storage, clearing stored tokens");
                    n("failure", "invalid_grant");
                    m("mcp_oauth_refresh", "mcp_oauth_refresh_invalid_grant");
                    await this.invalidateCredentials("tokens");
                    _Oe.emit(this.serverName);
                    return;
                }
                if (error instanceof sx && (error.errorCode === "invalid_client" || error.errorCode === "unauthorized_client")) {
                    re(this.serverName, "Token refresh failed: DCR client expired or invalid; clearing stored client registration");
                    let { tokenData, freshTokens } = await this.readConcurrentRefreshWinner();
                    if (freshTokens) {
                        f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_winner");
                        return freshTokens;
                    }
                    if (tokenData?.clientId && clientInformation && tokenData.clientId !== clientInformation.client_id) {
                        re(this.serverName, "Another process re-registered client; preserving");
                        n("failure", "concurrent_reregister");
                        f("mcp_oauth_refresh", "mcp_oauth_refresh_concurrent_reregister");
                        return;
                    }
                    n("failure", error.errorCode === "unauthorized_client" ? "unauthorized_client" : "invalid_client");
                    m("mcp_oauth_refresh", error.errorCode === "unauthorized_client" ? "mcp_oauth_refresh_unauthorized_client" : "mcp_oauth_refresh_invalid_client");
                    await this.invalidateCredentials("all");
                    _Oe.emit(this.serverName);
                    return;
                }
                if (he(error)) {
                    re(this.serverName, `Token refresh failed: token response rejected by SDK schema: ${l(error)}`);
                    n("failure", "token_response_schema_rejected");
                    m("mcp_oauth_refresh", "mcp_oauth_refresh_token_response_schema_rejected");
                    return;
                }
                let S = error instanceof H6e;
                let k = error instanceof Error && /timeout|timed out|etimedout|econnreset/i.test(error.message);
                let A = error instanceof uOe || error instanceof LBt || error instanceof NBt;
                let y = k || A || S;
                if (!y || c >= t) {
                    re(this.serverName, `Token refresh failed: ${nD(error, this.serverConfig.url)}`);
                    n("failure", y ? "transient_retries_exhausted" : "request_failed");
                    m("mcp_oauth_refresh", "mcp_oauth_refresh_request_failed");
                    return;
                }
                let T = 1000 * 2 ** (c - 1);
                re(this.serverName, `Token refresh failed, retrying in ${T}ms (attempt ${c}/${t})`);
                await Q(T);
            }
        }
    }
}
async function b1s() {
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
        let n = "";
        let c = (h)=>{
            let s = h.toString();
            if (s === `
` || s === "\r") {
                process.stdin.setRawMode?.(false);
                process.stdin.removeListener("data", c);
                process.stderr.write(`
`);
                resolve(n);
            } else if (s === "\x03") {
                process.stdin.setRawMode?.(false);
                process.stdin.removeListener("data", c);
                reject(Error("Cancelled"));
            } else if (s === "\x7F" || s === "\b") {
                n = n.slice(0, -1);
            } else {
                n += s;
            }
        };
        process.stdin.on("data", c);
    });
}
async function S1s(e, t, clientSecret) {
    let n = zl(e, t);
    try {
        return await Jn().mutate((c)=>({
                ...c,
                mcpOAuthClientConfig: {
                    ...c.mcpOAuthClientConfig,
                    [n]: {
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
async function w1s(e, t) {
    let r = zl(e, t);
    await Jn().mutate((n)=>{
        if (!n.mcpOAuthClientConfig?.[r]) {
            return n;
        }
        let mcpOAuthClientConfig = {
            ...n.mcpOAuthClientConfig
        };
        delete mcpOAuthClientConfig[r];
        return {
            ...n,
            mcpOAuthClientConfig
        };
    });
}
async function nzo(e, t) {
    let n = await Jn().readAsync();
    let c = zl(e, t);
    return n?.mcpOAuthClientConfig?.[c];
}
function Pe(e) {
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
function eDs(e, t) {
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
const st = [
    "login.microsoftonline.com",
    "login.microsoftonline.us",
    "login.partner.microsoftonline.cn",
    "login.chinacloudapi.cn"
];
const ot = [
    ".b2clogin.com",
    ".ciamlogin.com"
];
function tDs(e) {
    try {
        let t = (typeof e === "string" ? new URL(e) : e).hostname;
        return st.includes(t) || ot.some((r)=>t.endsWith(r));
    } catch  {
        return false;
    }
}
export { QHs, ZHs, QWo, ZWo, Z8n, ezo, OBt, p1s, f1s, m1s, e9n, g1s, h1s, y1s, tzo, _1s, Smn, MBt, b1s, S1s, w1s, nzo, eDs, tDs };
