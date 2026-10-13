import { w1t } from "/$bunfs/root/chunk-z09tvyve.js";
import { uEe } from "/$bunfs/root/chunk-vw7x8ctj.js";
import { uq, Wxe } from "/$bunfs/root/chunk-485vtzdj.js";
import { o, EHt, E, M, K8, T, u, _t, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { Uz } from "/$bunfs/root/chunk-85v8km1j.js";
const d = EHt().superRefine((e, t)=>{
    if (!URL.canParse(e)) {
        t.addIssue({
            code: uq.custom,
            message: "URL must be parseable",
            fatal: true
        });
        return Uz;
    }
}).refine((e)=>{
    let t = new URL(e);
    return t.protocol !== "javascript:" && t.protocol !== "data:" && t.protocol !== "vbscript:";
}, {
    message: "URL cannot use javascript:, data:, or vbscript: scheme"
});
const F = _t({
    resource: o().url(),
    authorization_servers: T(d).optional(),
    jwks_uri: o().url().optional(),
    scopes_supported: T(o()).optional(),
    bearer_methods_supported: T(o()).optional(),
    resource_signing_alg_values_supported: T(o()).optional(),
    resource_name: o().optional(),
    resource_documentation: o().optional(),
    resource_policy_uri: o().url().optional(),
    resource_tos_uri: o().url().optional(),
    tls_client_certificate_bound_access_tokens: M().optional(),
    authorization_details_types_supported: T(o()).optional(),
    dpop_signing_alg_values_supported: T(o()).optional(),
    dpop_bound_access_tokens_required: M().optional()
});
const Amn = _t({
    issuer: o(),
    authorization_endpoint: d,
    token_endpoint: d,
    registration_endpoint: d.optional(),
    scopes_supported: T(o()).optional(),
    response_types_supported: T(o()),
    response_modes_supported: T(o()).optional(),
    grant_types_supported: T(o()).optional(),
    token_endpoint_auth_methods_supported: T(o()).optional(),
    token_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    service_documentation: d.optional(),
    revocation_endpoint: d.optional(),
    revocation_endpoint_auth_methods_supported: T(o()).optional(),
    revocation_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    introspection_endpoint: o().optional(),
    introspection_endpoint_auth_methods_supported: T(o()).optional(),
    introspection_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    code_challenge_methods_supported: T(o()).optional(),
    client_id_metadata_document_supported: M().optional()
});
const ne = _t({
    issuer: o(),
    authorization_endpoint: d,
    token_endpoint: d,
    userinfo_endpoint: d.optional(),
    jwks_uri: d,
    registration_endpoint: d.optional(),
    scopes_supported: T(o()).optional(),
    response_types_supported: T(o()),
    response_modes_supported: T(o()).optional(),
    grant_types_supported: T(o()).optional(),
    acr_values_supported: T(o()).optional(),
    subject_types_supported: T(o()),
    id_token_signing_alg_values_supported: T(o()),
    id_token_encryption_alg_values_supported: T(o()).optional(),
    id_token_encryption_enc_values_supported: T(o()).optional(),
    userinfo_signing_alg_values_supported: T(o()).optional(),
    userinfo_encryption_alg_values_supported: T(o()).optional(),
    userinfo_encryption_enc_values_supported: T(o()).optional(),
    request_object_signing_alg_values_supported: T(o()).optional(),
    request_object_encryption_alg_values_supported: T(o()).optional(),
    request_object_encryption_enc_values_supported: T(o()).optional(),
    token_endpoint_auth_methods_supported: T(o()).optional(),
    token_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    display_values_supported: T(o()).optional(),
    claim_types_supported: T(o()).optional(),
    claims_supported: T(o()).optional(),
    service_documentation: o().optional(),
    claims_locales_supported: T(o()).optional(),
    ui_locales_supported: T(o()).optional(),
    claims_parameter_supported: M().optional(),
    request_parameter_supported: M().optional(),
    request_uri_parameter_supported: M().optional(),
    require_request_uri_registration: M().optional(),
    op_policy_uri: d.optional(),
    op_tos_uri: d.optional(),
    client_id_metadata_document_supported: M().optional()
});
const r9n = u({
    ...ne.shape,
    ...Amn.pick({
        code_challenge_methods_supported: true
    }).shape
});
const o9n = u({
    access_token: o(),
    id_token: o().optional(),
    token_type: o(),
    expires_in: Wxe().optional(),
    scope: o().optional(),
    refresh_token: o().optional()
}).strip();
const s9n = u({
    error: o(),
    error_description: o().optional(),
    error_uri: o().optional()
});
const B = d.optional().or(A("").transform(()=>{}));
const ae = u({
    redirect_uris: T(d),
    token_endpoint_auth_method: o().optional(),
    grant_types: T(o()).optional(),
    response_types: T(o()).optional(),
    client_name: o().optional(),
    client_uri: d.optional(),
    logo_uri: B,
    scope: o().optional(),
    contacts: T(o()).optional(),
    tos_uri: B,
    policy_uri: o().optional(),
    jwks_uri: d.optional(),
    jwks: K8().optional(),
    software_id: o().optional(),
    software_version: o().optional(),
    software_statement: o().optional()
}).strip();
const se = u({
    client_id: o(),
    client_secret: o().optional(),
    client_id_issued_at: E().optional(),
    client_secret_expires_at: E().optional()
}).strip();
const Z = ae.merge(se);
const Ce = u({
    error: o(),
    error_description: o().optional()
}).strip();
const ke = u({
    token: o(),
    token_type_hint: o().optional()
}).strip();
class sx extends Error {
    constructor(e, t){
        super(e);
        this.errorUri = t;
        this.name = this.constructor.name;
    }
    toResponseObject() {
        let e = {
            error: this.errorCode,
            error_description: this.message
        };
        if (this.errorUri) {
            e.error_uri = this.errorUri;
        }
        return e;
    }
    get errorCode() {
        return this.constructor.errorCode;
    }
}
class x extends sx {
}
x.errorCode = "invalid_request";
class g extends sx {
}
g.errorCode = "invalid_client";
class uQe extends sx {
}
uQe.errorCode = "invalid_grant";
class w extends sx {
}
w.errorCode = "unauthorized_client";
class U extends sx {
}
U.errorCode = "unsupported_grant_type";
class R extends sx {
}
R.errorCode = "invalid_scope";
class C extends sx {
}
C.errorCode = "access_denied";
class uOe extends sx {
}
uOe.errorCode = "server_error";
class LBt extends sx {
}
LBt.errorCode = "temporarily_unavailable";
class k extends sx {
}
k.errorCode = "unsupported_response_type";
class b extends sx {
}
b.errorCode = "unsupported_token_type";
class S extends sx {
}
S.errorCode = "invalid_token";
class v extends sx {
}
v.errorCode = "method_not_allowed";
class NBt extends sx {
}
NBt.errorCode = "too_many_requests";
class z extends sx {
}
z.errorCode = "invalid_client_metadata";
class L extends sx {
}
L.errorCode = "insufficient_scope";
class P extends sx {
}
P.errorCode = "invalid_target";
const J = {
    [x.errorCode]: x,
    [g.errorCode]: g,
    [uQe.errorCode]: uQe,
    [w.errorCode]: w,
    [U.errorCode]: U,
    [R.errorCode]: R,
    [C.errorCode]: C,
    [uOe.errorCode]: uOe,
    [LBt.errorCode]: LBt,
    [k.errorCode]: k,
    [b.errorCode]: b,
    [S.errorCode]: S,
    [v.errorCode]: v,
    [NBt.errorCode]: NBt,
    [z.errorCode]: z,
    [L.errorCode]: L,
    [P.errorCode]: P
};
function Y(serverUrl) {
    let t = typeof serverUrl === "string" ? new URL(serverUrl) : new URL(serverUrl.href);
    t.hash = "";
    return t;
}
function K({ requestedResource, configuredResource }) {
    let r = typeof requestedResource === "string" ? new URL(requestedResource) : new URL(requestedResource.href);
    let n = typeof configuredResource === "string" ? new URL(configuredResource) : new URL(configuredResource.href);
    if (r.origin !== n.origin) {
        return false;
    }
    if (r.pathname.length < n.pathname.length) {
        return false;
    }
    let a = r.pathname.endsWith("/") ? r.pathname : `${r.pathname}/`;
    let i = n.pathname.endsWith("/") ? n.pathname : `${n.pathname}/`;
    return a.startsWith(i);
}
class ix extends Error {
    constructor(e){
        super(e ?? "Unauthorized");
    }
}
function ie(token_endpoint_auth_method) {
    return [
        "client_secret_basic",
        "client_secret_post",
        "none"
    ].includes(token_endpoint_auth_method);
}
const O = "code";
const j = "S256";
function ce(clientInformation, t) {
    let r = clientInformation.client_secret !== undefined;
    if ("token_endpoint_auth_method" in clientInformation && clientInformation.token_endpoint_auth_method && ie(clientInformation.token_endpoint_auth_method) && (t.length === 0 || t.includes(clientInformation.token_endpoint_auth_method))) {
        return clientInformation.token_endpoint_auth_method;
    }
    if (t.length === 0) {
        if (r) {
            return "client_secret_basic";
        }
        return "none";
    }
    if (r && t.includes("client_secret_basic")) {
        return "client_secret_basic";
    }
    if (r && t.includes("client_secret_post")) {
        return "client_secret_post";
    }
    if (t.includes("none")) {
        return "none";
    }
    if (r) {
        return "client_secret_post";
    }
    return "none";
}
function ue(e, { client_id, client_secret }, r, tokenRequestParams) {
    switch(e){
        case "client_secret_basic":
            le(client_id, client_secret, r);
            return;
        case "client_secret_post":
            pe(client_id, client_secret, tokenRequestParams);
            return;
        case "none":
            de(client_id, tokenRequestParams);
            return;
        default:
            throw Error(`Unsupported client authentication method: ${e}`);
    }
}
function le(client_id, client_secret, r) {
    if (!client_secret) {
        throw Error("client_secret_basic authentication requires a client_secret");
    }
    let n = btoa(`${client_id}:${client_secret}`);
    r.set("Authorization", `Basic ${n}`);
}
function pe(client_id, client_secret, tokenRequestParams) {
    tokenRequestParams.set("client_id", client_id);
    if (client_secret) {
        tokenRequestParams.set("client_secret", client_secret);
    }
}
function de(client_id, tokenRequestParams) {
    tokenRequestParams.set("client_id", client_id);
}
async function X(e) {
    let t = e instanceof Response ? e.status : undefined;
    let r = e instanceof Response ? await e.text() : e;
    try {
        let n = s9n.parse(JSON.parse(r));
        let { error, error_description, error_uri } = n;
        return new (J[error] || uOe)(error_description || "", error_uri);
    } catch (error) {
        let a = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${error}. Raw body: ${r}`;
        return new uOe(a);
    }
}
async function jee(e, t) {
    try {
        return await W(e, t);
    } catch (error) {
        if (error instanceof g || error instanceof w) {
            await e.invalidateCredentials?.("all");
            return await W(e, t);
        } else if (error instanceof uQe) {
            await e.invalidateCredentials?.("tokens");
            return await W(e, t);
        }
        throw error;
    }
}
async function W(e, { serverUrl, authorizationCode, scope, resourceMetadataUrl, fetchFn }) {
    let c = await e.discoveryState?.();
    let s;
    let l;
    let p;
    let h = resourceMetadataUrl;
    if (!h && c?.resourceMetadataUrl) {
        h = new URL(c.resourceMetadataUrl);
    }
    if (c?.authorizationServerUrl) {
        l = c.authorizationServerUrl;
        s = c.resourceMetadata;
        p = c.authorizationServerMetadata ?? await Pht(l, {
            fetchFn
        });
        if (!s) {
            try {
                s = await i9n(serverUrl, {
                    resourceMetadataUrl: h
                }, fetchFn);
            } catch  {}
        }
        if (p !== c.authorizationServerMetadata || s !== c.resourceMetadata) {
            await e.saveDiscoveryState?.({
                authorizationServerUrl: String(l),
                resourceMetadataUrl: h?.toString(),
                resourceMetadata: s,
                authorizationServerMetadata: p
            });
        }
    } else {
        let _ = await VBr(serverUrl, {
            resourceMetadataUrl: h,
            fetchFn
        });
        l = _.authorizationServerUrl;
        p = _.authorizationServerMetadata;
        s = _.resourceMetadata;
        await e.saveDiscoveryState?.({
            authorizationServerUrl: String(l),
            resourceMetadataUrl: h?.toString(),
            resourceMetadata: s,
            authorizationServerMetadata: p
        });
    }
    let resource = await he(serverUrl, e, s);
    let D = scope || s?.scopes_supported?.join(" ") || e.clientMetadata.scope;
    let clientInformation = await Promise.resolve(e.clientInformation());
    if (!clientInformation) {
        if (authorizationCode !== undefined) {
            throw Error("Existing OAuth client information is required when exchanging an authorization code");
        }
        let _ = p?.client_id_metadata_document_supported === true;
        let client_id = e.clientMetadataUrl;
        if (client_id && !_e(client_id)) {
            throw new z(`clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${client_id}`);
        }
        if (_ && client_id) {
            clientInformation = {
                client_id
            };
            await e.saveClientInformation?.(clientInformation);
        } else {
            if (!e.saveClientInformation) {
                throw Error("OAuth client information must be saveable for dynamic registration");
            }
            let N = await ye(l, {
                metadata: p,
                clientMetadata: e.clientMetadata,
                scope: D,
                fetchFn
            });
            await e.saveClientInformation(N);
            clientInformation = N;
        }
    }
    let ee = !e.redirectUrl;
    if (authorizationCode !== undefined || ee) {
        let _ = await me(e, l, {
            metadata: p,
            resource,
            authorizationCode,
            fetchFn
        });
        await e.saveTokens(_);
        return "AUTHORIZED";
    }
    let V = await e.tokens();
    if (V?.refresh_token) {
        try {
            let _ = await KBr(l, {
                metadata: p,
                clientInformation,
                refreshToken: V.refresh_token,
                resource,
                addClientAuthentication: e.addClientAuthentication,
                fetchFn
            });
            await e.saveTokens(_);
            return "AUTHORIZED";
        } catch (error) {
            if (!(error instanceof sx) || error instanceof uOe) ;
            else {
                throw error;
            }
        }
    }
    let state = e.state ? await e.state() : undefined;
    let { authorizationUrl, codeVerifier } = await qBr(l, {
        metadata: p,
        clientInformation,
        state,
        redirectUrl: e.redirectUrl,
        scope: D,
        resource
    });
    await e.saveCodeVerifier(codeVerifier);
    await e.redirectToAuthorization(authorizationUrl);
    return "REDIRECT";
}
function _e(client_id) {
    if (!client_id) {
        return false;
    }
    try {
        let t = new URL(client_id);
        return t.protocol === "https:" && t.pathname !== "/";
    } catch  {
        return false;
    }
}
async function he(serverUrl, t, r) {
    let requestedResource = Y(serverUrl);
    if (t.validateResourceURL) {
        return await t.validateResourceURL(requestedResource, r?.resource);
    }
    if (!r) {
        return;
    }
    if (!K({
        requestedResource,
        configuredResource: r.resource
    })) {
        throw Error(`Protected resource ${r.resource} does not match expected ${requestedResource} (or origin)`);
    }
    return new URL(r.resource);
}
function qve(e) {
    let t = e.headers.get("WWW-Authenticate");
    if (!t) {
        return {};
    }
    let [r, n] = t.split(" ");
    if (r.toLowerCase() !== "bearer" || !n) {
        return {};
    }
    let a = H(e, "resource_metadata") || undefined;
    let i;
    if (a) {
        try {
            i = new URL(a);
        } catch  {}
    }
    let c = H(e, "scope") || undefined;
    let error = H(e, "error") || undefined;
    return {
        resourceMetadataUrl: i,
        scope: c,
        error
    };
}
function H(e, t) {
    let r = e.headers.get("WWW-Authenticate");
    if (!r) {
        return null;
    }
    let n = new RegExp(`${t}=(?:"([^"]+)"|([^\\s,]+))`);
    let a = r.match(n);
    if (a) {
        return a[1] || a[2];
    }
    return null;
}
async function i9n(e, t, r = fetch) {
    let n = await we(e, "oauth-protected-resource", r, {
        protocolVersion: t?.protocolVersion,
        metadataUrl: t?.resourceMetadataUrl
    });
    if (!n || n.status === 404) {
        await n?.body?.cancel();
        throw Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
    }
    if (!n.ok) {
        await n.body?.cancel();
        throw Error(`HTTP ${n.status} trying to load well-known OAuth protected resource metadata.`);
    }
    return F.parse(await n.json());
}
async function q(e, t, r = fetch) {
    try {
        return await r(e, {
            headers: t
        });
    } catch (error) {
        if (error instanceof TypeError) {
            if (t) {
                return q(e, undefined, r);
            } else {
                return;
            }
        }
        throw error;
    }
}
function fe(e, t = "", r = {}) {
    if (t.endsWith("/")) {
        t = t.slice(0, -1);
    }
    if (r.prependPathname) {
        return `${t}/.well-known/${e}`;
    }
    return `/.well-known/${e}${t}`;
}
async function Q(e, t, r = fetch) {
    return await q(e, {
        "MCP-Protocol-Version": t
    }, r);
}
function ge(e, pathname) {
    return !e || e.status >= 400 && e.status < 500 && pathname !== "/";
}
async function we(e, t, r, n) {
    let a = new URL(e);
    let i = n?.protocolVersion ?? uEe;
    let c;
    if (n?.metadataUrl) {
        c = new URL(n.metadataUrl);
    } else {
        let l = fe(t, a.pathname);
        c = new URL(l, n?.metadataServerUrl ?? a);
        c.search = a.search;
    }
    let s = await Q(c, i, r);
    if (!n?.metadataUrl && ge(s, a.pathname)) {
        let l = new URL(`/.well-known/${t}`, a);
        s = await Q(l, i, r);
    }
    return s;
}
function ze(e) {
    let t = typeof e === "string" ? new URL(e) : e;
    let r = t.pathname !== "/";
    let n = [];
    if (!r) {
        n.push({
            url: new URL("/.well-known/oauth-authorization-server", t.origin),
            type: "oauth"
        });
        n.push({
            url: new URL("/.well-known/openid-configuration", t.origin),
            type: "oidc"
        });
        return n;
    }
    let t_pathname = t.pathname;
    if (t_pathname.endsWith("/")) {
        t_pathname = t_pathname.slice(0, -1);
    }
    n.push({
        url: new URL(`/.well-known/oauth-authorization-server${t_pathname}`, t.origin),
        type: "oauth"
    });
    n.push({
        url: new URL(`/.well-known/openid-configuration${t_pathname}`, t.origin),
        type: "oidc"
    });
    n.push({
        url: new URL(`${t_pathname}/.well-known/openid-configuration`, t.origin),
        type: "oidc"
    });
    return n;
}
async function Pht(e, { fetchFn = fetch, protocolVersion = uEe } = {}) {
    let n = {
        "MCP-Protocol-Version": protocolVersion,
        Accept: "application/json"
    };
    let a = ze(e);
    for (let { url, type } of a){
        let s = await q(url, n, fetchFn);
        if (!s) {
            continue;
        }
        if (!s.ok) {
            await s.body?.cancel();
            if (s.status >= 400 && s.status < 500) {
                continue;
            }
            throw Error(`HTTP ${s.status} trying to load ${type === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${url}`);
        }
        if (type === "oauth") {
            return Amn.parse(await s.json());
        } else {
            return r9n.parse(await s.json());
        }
    }
}
async function VBr(e, t) {
    let r;
    let authorizationServerUrl;
    try {
        r = await i9n(e, {
            resourceMetadataUrl: t?.resourceMetadataUrl
        }, t?.fetchFn);
        if (r.authorization_servers && r.authorization_servers.length > 0) {
            authorizationServerUrl = r.authorization_servers[0];
        }
    } catch  {}
    if (!authorizationServerUrl) {
        authorizationServerUrl = String(new URL("/", e));
    }
    let authorizationServerMetadata = await Pht(authorizationServerUrl, {
        fetchFn: t?.fetchFn
    });
    return {
        authorizationServerUrl,
        authorizationServerMetadata,
        resourceMetadata: r
    };
}
async function qBr(e, { metadata, clientInformation, redirectUrl, scope, state, resource }) {
    let authorizationUrl;
    if (metadata) {
        authorizationUrl = new URL(metadata.authorization_endpoint);
        if (!metadata.response_types_supported.includes(O)) {
            throw Error(`Incompatible auth server: does not support response type ${O}`);
        }
        if (metadata.code_challenge_methods_supported && !metadata.code_challenge_methods_supported.includes(j)) {
            throw Error(`Incompatible auth server: does not support code challenge method ${j}`);
        }
    } else {
        authorizationUrl = new URL("/authorize", e);
    }
    let l = await w1t();
    let { code_verifier, code_challenge } = l;
    authorizationUrl.searchParams.set("response_type", O);
    authorizationUrl.searchParams.set("client_id", clientInformation.client_id);
    authorizationUrl.searchParams.set("code_challenge", code_challenge);
    authorizationUrl.searchParams.set("code_challenge_method", j);
    authorizationUrl.searchParams.set("redirect_uri", String(redirectUrl));
    if (state) {
        authorizationUrl.searchParams.set("state", state);
    }
    if (scope) {
        authorizationUrl.searchParams.set("scope", scope);
    }
    if (scope?.includes("offline_access")) {
        authorizationUrl.searchParams.append("prompt", "consent");
    }
    if (resource) {
        authorizationUrl.searchParams.set("resource", resource.href);
    }
    return {
        authorizationUrl,
        codeVerifier: code_verifier
    };
}
function G(code, code_verifier, r) {
    return new URLSearchParams({
        grant_type: "authorization_code",
        code,
        code_verifier,
        redirect_uri: String(r)
    });
}
async function I(e, { metadata, tokenRequestParams, clientInformation, addClientAuthentication, resource, fetchFn }) {
    let s = metadata?.token_endpoint ? new URL(metadata.token_endpoint) : new URL("/token", e);
    let l = new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
    });
    if (resource) {
        tokenRequestParams.set("resource", resource.href);
    }
    if (addClientAuthentication) {
        await addClientAuthentication(l, tokenRequestParams, s, metadata);
    } else if (clientInformation) {
        let h = metadata?.token_endpoint_auth_methods_supported ?? [];
        let m = ce(clientInformation, h);
        ue(m, clientInformation, l, tokenRequestParams);
    }
    let p = await (fetchFn ?? fetch)(s, {
        method: "POST",
        headers: l,
        body: tokenRequestParams
    });
    if (!p.ok) {
        throw await X(p);
    }
    return o9n.parse(await p.json());
}
async function rzo(e, { metadata, clientInformation, authorizationCode, codeVerifier, redirectUri, resource, addClientAuthentication, fetchFn }) {
    let p = G(authorizationCode, codeVerifier, redirectUri);
    return I(e, {
        metadata,
        tokenRequestParams: p,
        clientInformation,
        addClientAuthentication,
        resource,
        fetchFn
    });
}
async function KBr(e, { metadata, clientInformation, refreshToken, resource, addClientAuthentication, fetchFn }) {
    let s = new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken
    });
    let l = await I(e, {
        metadata,
        tokenRequestParams: s,
        clientInformation,
        addClientAuthentication,
        resource,
        fetchFn
    });
    return {
        refresh_token: refreshToken,
        ...l
    };
}
async function me(e, t, { metadata, resource, authorizationCode, fetchFn } = {}) {
    let scope = e.clientMetadata.scope;
    let s;
    if (e.prepareTokenRequest) {
        s = await e.prepareTokenRequest(scope);
    }
    if (!s) {
        if (!authorizationCode) {
            throw Error("Either provider.prepareTokenRequest() or authorizationCode is required");
        }
        if (!e.redirectUrl) {
            throw Error("redirectUrl is required for authorization_code flow");
        }
        let p = await e.codeVerifier();
        s = G(authorizationCode, p, e.redirectUrl);
    }
    let l = await e.clientInformation();
    return I(t, {
        metadata,
        tokenRequestParams: s,
        clientInformation: l ?? undefined,
        addClientAuthentication: e.addClientAuthentication,
        resource,
        fetchFn
    });
}
async function ye(e, { metadata, clientMetadata, scope, fetchFn }) {
    let i;
    if (metadata) {
        if (!metadata.registration_endpoint) {
            throw Error("Incompatible auth server: does not support dynamic client registration");
        }
        i = new URL(metadata.registration_endpoint);
    } else {
        i = new URL("/register", e);
    }
    let c = await (fetchFn ?? fetch)(i, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ...clientMetadata,
            ...scope !== undefined ? {
                scope
            } : {}
        })
    });
    if (!c.ok) {
        throw await X(c);
    }
    return Z.parse(await c.json());
}
export { Amn, r9n, o9n, s9n, sx, uQe, uOe, LBt, NBt, ix, jee, qve, i9n, Pht, VBr, qBr, rzo, KBr };
