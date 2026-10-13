import { q, B, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Xn, ot, W, l, xs, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { lCs, cCs, jkr, adt, dCs, uCs, ldt, pCs, Wkr, zkr, rse, etn, HFe, hu, v3e, _Mt, Ov, Cjn, E3e } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { ja } from "/$bunfs/root/chunk-hz24p3zh.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { mkdir, readFile, stat } from "fs/promises";
import { dirname, join } from "path";
const HT = "0.128.0";
const RSs = ()=>typeof window !== "undefined" && typeof window.document !== "undefined" && typeof navigator !== "undefined";
function ee() {
    if (typeof Deno !== "undefined" && Deno.build != null) {
        return "deno";
    }
    if (typeof EdgeRuntime !== "undefined") {
        return "edge";
    }
    if (Object.prototype.toString.call(typeof globalThis.process !== "undefined" ? globalThis.process : 0) === "[object process]") {
        return "node";
    }
    return "unknown";
}
const te = ()=>{
    let e = ee();
    if (e === "deno") {
        return {
            "X-Stainless-Lang": "js",
            "X-Stainless-Package-Version": HT,
            "X-Stainless-OS": x(Deno.build.os),
            "X-Stainless-Arch": D(Deno.build.arch),
            "X-Stainless-Runtime": "deno",
            "X-Stainless-Runtime-Version": typeof Deno.version === "string" ? Deno.version : Deno.version?.deno ?? "unknown"
        };
    }
    if (typeof EdgeRuntime !== "undefined") {
        return {
            "X-Stainless-Lang": "js",
            "X-Stainless-Package-Version": HT,
            "X-Stainless-OS": "Unknown",
            "X-Stainless-Arch": `other:${EdgeRuntime}`,
            "X-Stainless-Runtime": "edge",
            "X-Stainless-Runtime-Version": globalThis.process?.version ?? "unknown"
        };
    }
    if (e === "node") {
        return {
            "X-Stainless-Lang": "js",
            "X-Stainless-Package-Version": HT,
            "X-Stainless-OS": x(globalThis.process.platform ?? "unknown"),
            "X-Stainless-Arch": D(globalThis.process.arch ?? "unknown"),
            "X-Stainless-Runtime": "node",
            "X-Stainless-Runtime-Version": globalThis.process.version ?? "unknown"
        };
    }
    let n = ne();
    if (n) {
        return {
            "X-Stainless-Lang": "js",
            "X-Stainless-Package-Version": HT,
            "X-Stainless-OS": "Unknown",
            "X-Stainless-Arch": "unknown",
            "X-Stainless-Runtime": `browser:${n.browser}`,
            "X-Stainless-Runtime-Version": n.version
        };
    }
    return {
        "X-Stainless-Lang": "js",
        "X-Stainless-Package-Version": HT,
        "X-Stainless-OS": "Unknown",
        "X-Stainless-Arch": "unknown",
        "X-Stainless-Runtime": "unknown",
        "X-Stainless-Runtime-Version": "unknown"
    };
};
function ne() {
    if (typeof navigator === "undefined" || !navigator) {
        return null;
    }
    let e = [
        {
            key: "edge",
            pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
        },
        {
            key: "ie",
            pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
        },
        {
            key: "ie",
            pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/
        },
        {
            key: "chrome",
            pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
        },
        {
            key: "firefox",
            pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
        },
        {
            key: "safari",
            pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/
        }
    ];
    for (let { key, pattern } of e){
        let s = pattern.exec(navigator.userAgent);
        if (s) {
            let o = s[1] || 0;
            let u = s[2] || 0;
            let f = s[3] || 0;
            return {
                browser: key,
                version: `${o}.${u}.${f}`
            };
        }
    }
    return null;
}
var D = (e)=>{
    if (e === "x32") {
        return "x32";
    }
    if (e === "x86_64" || e === "x64") {
        return "x64";
    }
    if (e === "arm") {
        return "arm";
    }
    if (e === "aarch64" || e === "arm64") {
        return "arm64";
    }
    if (e) {
        return `other:${e}`;
    }
    return "unknown";
};
var x = (e)=>{
    e = e.toLowerCase();
    if (e.includes("ios")) {
        return "iOS";
    }
    if (e === "android") {
        return "Android";
    }
    if (e === "darwin") {
        return "MacOS";
    }
    if (e === "win32") {
        return "Windows";
    }
    if (e === "freebsd") {
        return "FreeBSD";
    }
    if (e === "openbsd") {
        return "OpenBSD";
    }
    if (e === "linux") {
        return "Linux";
    }
    if (e) {
        return `Other:${e}`;
    }
    return "Unknown";
};
let b;
const iFn = ()=>b ??= te();
const Oy = (e)=>{
    if (typeof globalThis.process !== "undefined") {
        return globalThis.process.env?.[e]?.trim() || undefined;
    }
    if (typeof globalThis.Deno !== "undefined") {
        return globalThis.Deno.env?.get?.(e)?.trim() || undefined;
    }
};
const xSs = "1.0";
const xQt = "1.0";
const re = /^[A-Za-z0-9_.-]+$/;
function H(e) {
    if (!e) {
        throw Error("profile name is empty");
    }
    if (e === "." || e === "..") {
        throw Error(`profile name "${e}" is not allowed`);
    }
    if (e.includes("/") || e.includes("\\")) {
        throw Error(`profile name "${e}" must not contain path separators`);
    }
    if (!re.test(e)) {
        throw Error(`profile name "${e}" contains disallowed characters (allowed: letters, digits, '_', '.', '-')`);
    }
}
const L = async (e)=>(await O(e))?.config ?? null;
var O = async (e)=>{
    var n;
    var r;
    let s = await C();
    if (s === null) {
        return null;
    }
    let o = e ?? await U();
    if (o === null) {
        return null;
    }
    H(o);
    let { fs, path } = await import("/$bunfs/root/chunk-e23swnms.js");
    let h = path.join(s, "configs", `${o}.json`);
    let _;
    try {
        _ = await fs.promises.readFile(h, "utf-8");
    } catch (error) {
        if (error?.code !== "ENOENT") {
            throw Error(`failed to read config file ${h}: ${error}`);
        }
        _ = null;
    }
    if (_ === null) {
        let E = Oy("ANTHROPIC_ORGANIZATION_ID");
        let k = Oy("ANTHROPIC_IDENTITY_TOKEN_FILE");
        let I = Oy("ANTHROPIC_FEDERATION_RULE_ID");
        if (I && E) {
            return {
                fromFile: false,
                config: {
                    organization_id: E,
                    workspace_id: Oy("ANTHROPIC_WORKSPACE_ID"),
                    base_url: Oy("ANTHROPIC_BASE_URL"),
                    authentication: {
                        type: "oidc_federation",
                        federation_rule_id: I,
                        service_account_id: Oy("ANTHROPIC_SERVICE_ACCOUNT_ID"),
                        identity_token: k ? {
                            source: "file",
                            path: k
                        } : undefined,
                        scope: Oy("ANTHROPIC_SCOPE")
                    }
                }
            };
        }
        return null;
    }
    let config;
    try {
        config = JSON.parse(_);
    } catch (error) {
        throw Error(`failed to parse config file ${h}: ${error}`);
    }
    if (!config.authentication) {
        throw Error(`config file ${h} is missing "authentication"`);
    }
    let type = config.authentication.type;
    if (type !== "oidc_federation" && type !== "user_oauth") {
        throw Error(`authentication.type "${type}" is not a known authentication type`);
    }
    config.organization_id ??= Oy("ANTHROPIC_ORGANIZATION_ID");
    config.workspace_id ??= Oy("ANTHROPIC_WORKSPACE_ID");
    config.base_url ??= Oy("ANTHROPIC_BASE_URL");
    (n = config.authentication).scope ?? (n.scope = Oy("ANTHROPIC_SCOPE"));
    if (config.authentication.type === "oidc_federation") {
        if (!config.authentication.identity_token) {
            let E = Oy("ANTHROPIC_IDENTITY_TOKEN_FILE");
            if (E) {
                config.authentication.identity_token = {
                    source: "file",
                    path: E
                };
            }
        }
        if (!config.authentication.federation_rule_id) {
            config.authentication.federation_rule_id = Oy("ANTHROPIC_FEDERATION_RULE_ID") ?? "";
        }
        (r = config.authentication).service_account_id ?? (r.service_account_id = Oy("ANTHROPIC_SERVICE_ACCOUNT_ID"));
    }
    return {
        config,
        fromFile: true
    };
};
const S = async (e, n)=>{
    if (e?.authentication.credentials_path) {
        return e.authentication.credentials_path;
    }
    let r = await C();
    if (!r) {
        return null;
    }
    let s = n ?? await U();
    if (!s) {
        return null;
    }
    H(s);
    let { path } = await import("/$bunfs/root/chunk-e23swnms.js");
    return path.join(r, "credentials", `${s}.json`);
};
var C = async ()=>{
    if (!ie()) {
        return null;
    }
    let { path } = await import("/$bunfs/root/chunk-e23swnms.js");
    let n = Oy("ANTHROPIC_CONFIG_DIR");
    if (n) {
        return n;
    }
    if (iFn()["X-Stainless-OS"] === "Windows") {
        let u = Oy("APPDATA");
        if (u) {
            return path.join(u, "Anthropic");
        }
        let f = Oy("USERPROFILE");
        if (f) {
            return path.join(f, "AppData", "Roaming", "Anthropic");
        }
        return null;
    }
    let s = Oy("XDG_CONFIG_HOME");
    if (s) {
        return path.join(s, "anthropic");
    }
    let o = Oy("HOME");
    if (o) {
        return path.join(o, ".config", "anthropic");
    }
    return null;
};
var ie = ()=>{
    let e = iFn()["X-Stainless-Runtime"];
    return e === "node" || e === "deno";
};
var U = async ()=>{
    let e = await C();
    if (!e) {
        return null;
    }
    let n = Oy("ANTHROPIC_PROFILE");
    if (n) {
        return n;
    }
    let { fs, path } = await import("/$bunfs/root/chunk-e23swnms.js");
    let o = path.join(e, "active_config");
    try {
        return (await fs.promises.readFile(o, "utf-8")).trim() || "default";
    } catch (error) {
        if (error?.code !== "ENOENT") {
            throw Error(`failed to read ${o}: ${error}`);
        }
        return "default";
    }
};
function y() {
    return Math.floor(Date.now() / 1000);
}
function N(e) {
    if (!e) {
        throw new Xn("Identity token file path is empty");
    }
    return async ()=>{
        let { fs } = await import("/$bunfs/root/chunk-e23swnms.js");
        let r;
        try {
            r = await fs.promises.readFile(e, "utf-8");
        } catch (error) {
            throw new Xn(`Failed to read identity token file at ${e}: ${error}`);
        }
        let s = r.trim();
        if (!s) {
            throw new Xn(`Identity token file at ${e} is empty`);
        }
        return s;
    };
}
function X(e) {
    if (!e) {
        throw new Xn("Identity token value is empty");
    }
    return ()=>e;
}
function K(e) {
    return async ()=>{
        Wkr(e.baseURL);
        let assertion = await e.identityTokenProvider();
        if (assertion.length > 16384) {
            throw new hu(`Identity token is ${Math.ceil(assertion.length / 1024)} KiB, exceeds the 16 KiB assertion limit`);
        }
        let r = {
            grant_type: lCs,
            assertion,
            federation_rule_id: e.federationRuleId,
            organization_id: e.organizationId
        };
        if (e.serviceAccountId) {
            r.service_account_id = e.serviceAccountId;
        }
        if (e.workspaceId) {
            r.workspace_id = e.workspaceId;
        }
        let s = `${e.baseURL}${jkr}`;
        let o;
        try {
            o = await e.fetch(s, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "anthropic-beta": `${adt},${dCs}`,
                    "User-Agent": e.userAgent || `anthropic-sdk-typescript/${HT} oidcFederationProvider`
                },
                body: JSON.stringify(r)
            });
        } catch (error) {
            throw new hu(`Failed to reach token endpoint ${s}: ${error}`);
        }
        let u = o.headers.get("Request-Id");
        if (!o.ok) {
            let _ = await o.text().catch(()=>"");
            let p = rse(_);
            let w = "";
            if (o.status === 401) {
                w = ` Ensure your federation rule matches your identity token. ${e.workspaceId ? "" : "If your federation rule is scoped to multiple workspaces, set the ANTHROPIC_WORKSPACE_ID environment variable, the 'workspace_id' config key, or the `workspaceId` option. "}View your authentication events in the Workload identity page of Claude Console for more details.`;
            }
            throw new hu(`Token exchange failed with status ${o.status}${u ? ` (request-id ${u})` : ""}: ${p}${w}`, o.status, p, u);
        }
        let f = await zkr(o, u);
        let h = Number(f.expires_in);
        if (!Number.isFinite(h)) {
            throw new hu(`Token endpoint response missing required fields: ${JSON.stringify(rse(f))}`, o.status, rse(f), u);
        }
        return {
            token: f.access_token,
            expiresAt: y() + h
        };
    };
}
function V(e) {
    return async (n)=>{
        let { fs } = await import("/$bunfs/root/chunk-e23swnms.js");
        await etn(e.credentialsPath, e.onSafetyWarning);
        let s;
        try {
            s = await fs.promises.readFile(e.credentialsPath, "utf-8");
        } catch (error) {
            throw new hu(`Credentials file not found at ${e.credentialsPath}: ${error}`);
        }
        let o;
        try {
            o = JSON.parse(s);
        } catch (error) {
            throw new hu(`Credentials file at ${e.credentialsPath} is not valid JSON: ${error}`);
        }
        let o_access_token = o.access_token;
        if (!o_access_token) {
            throw new hu(`Credentials file at ${e.credentialsPath} must include 'access_token'`);
        }
        let o_expires_at = o.expires_at;
        if (!n?.forceRefresh && (o_expires_at == null || y() < o_expires_at - ldt)) {
            return {
                token: o_access_token,
                expiresAt: o_expires_at ?? null
            };
        }
        let o_refresh_token = o.refresh_token;
        if (!e.clientId || !o_refresh_token) {
            throw new hu(`Access token at ${e.credentialsPath} has expired and no refresh is available (client_id ${e.clientId ? "set" : "empty"}, refresh_token ${o_refresh_token ? "set" : "empty"})`);
        }
        Wkr(e.baseURL);
        let _ = {
            grant_type: cCs,
            refresh_token: o_refresh_token,
            client_id: e.clientId
        };
        let p = `${e.baseURL}${jkr}`;
        let w;
        try {
            w = await e.fetch(p, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "anthropic-beta": adt,
                    "User-Agent": e.userAgent || `anthropic-sdk-typescript/${HT} userOAuthProvider`
                },
                body: JSON.stringify(_)
            });
        } catch (error) {
            throw new hu(`User OAuth refresh failed to reach token endpoint: ${error}`);
        }
        let E = w.headers.get("Request-Id");
        if (!w.ok) {
            let T = await w.text().catch(()=>"");
            throw new hu(`User OAuth refresh failed (HTTP ${w.status}): ${rse(T)}`, w.status, rse(T), E);
        }
        let k = await zkr(w, E);
        let I = Number(k.expires_in);
        if (!Number.isFinite(I)) {
            throw new hu(`User OAuth refresh response missing or invalid expires_in: ${JSON.stringify(rse(k))}`, w.status, rse(k), E);
        }
        let F = y() + I;
        let refresh_token = k.refresh_token || o_refresh_token;
        await HFe(e.credentialsPath, {
            ...o,
            version: xQt,
            type: "oauth_token",
            access_token: k.access_token,
            expires_at: F,
            refresh_token
        });
        return {
            token: k.access_token,
            expiresAt: F
        };
    };
}
function TPt(e, n) {
    let r = e.authentication.credentials_path ?? null;
    let s = (e.base_url || n.baseURL).replace(/\/+$/, "");
    let provider = oe(e, r, s, n);
    let extraHeaders = {};
    if (e.workspace_id && e.authentication.type === "user_oauth") {
        extraHeaders["anthropic-workspace-id"] = e.workspace_id;
    }
    return {
        provider,
        extraHeaders,
        baseURL: e.base_url || undefined
    };
}
async function PSs(e, n) {
    let r = await O(n);
    if (!r) {
        return null;
    }
    let { config, fromFile } = r;
    let u = config.authentication.credentials_path || !fromFile ? config : {
        ...config,
        authentication: {
            ...config.authentication,
            credentials_path: await S(config, n) ?? undefined
        }
    };
    return TPt(u, e);
}
function oe(e, credentialsPath, baseURL, s) {
    switch(e.authentication.type){
        case "oidc_federation":
            {
                let o = e.authentication;
                let identityTokenProvider = se(o);
                if (!identityTokenProvider) {
                    throw new hu("oidc_federation config requires an identity token (set authentication.identity_token, ANTHROPIC_IDENTITY_TOKEN_FILE, or ANTHROPIC_IDENTITY_TOKEN)");
                }
                if (!o.federation_rule_id) {
                    throw new hu("oidc_federation config requires 'federation_rule_id'. Set it in authentication.federation_rule_id in your profile, or via ANTHROPIC_FEDERATION_RULE_ID (profile takes precedence).");
                }
                if (!e.organization_id) {
                    throw new hu("oidc_federation config requires organization_id (set ANTHROPIC_ORGANIZATION_ID or config.organization_id)");
                }
                let f = K({
                    identityTokenProvider,
                    federationRuleId: o.federation_rule_id,
                    organizationId: e.organization_id,
                    serviceAccountId: o.service_account_id,
                    workspaceId: e.workspace_id,
                    baseURL,
                    fetch: s.fetch,
                    userAgent: s.userAgent
                });
                if (credentialsPath) {
                    return ae(f, credentialsPath, s.onCacheWriteError, s.onSafetyWarning);
                }
                return f;
            }
        case "user_oauth":
            {
                if (!credentialsPath) {
                    throw new hu("user_oauth config requires authentication.credentials_path (or load via a profile so it defaults to <config_dir>/credentials/<profile>.json)");
                }
                return V({
                    credentialsPath,
                    clientId: e.authentication.client_id,
                    baseURL,
                    fetch: s.fetch,
                    userAgent: s.userAgent,
                    onSafetyWarning: s.onSafetyWarning
                });
            }
        default:
            {
                let o = e.authentication.type;
                throw new hu(`authentication.type "${o}" is not a known authentication type`);
            }
    }
}
function se(e) {
    if (e.identity_token) {
        let s = e.identity_token.source;
        if (s !== "file") {
            throw new hu(`identity_token.source "${s}" is not supported by this SDK version (only "file")`);
        }
        if (!e.identity_token.path) {
            throw new hu('identity_token.source "file" requires a non-empty path');
        }
        return N(e.identity_token.path);
    }
    let n = Oy("ANTHROPIC_IDENTITY_TOKEN_FILE");
    if (n) {
        return N(n);
    }
    let r = Oy("ANTHROPIC_IDENTITY_TOKEN");
    if (r) {
        return X(r);
    }
    return null;
}
function ae(e, credentialsPath, onCacheWriteError, onSafetyWarning) {
    return async (o)=>{
        let { fs } = await import("/$bunfs/root/chunk-e23swnms.js");
        await etn(credentialsPath, onSafetyWarning);
        let f;
        try {
            let _ = await fs.promises.readFile(credentialsPath, "utf-8");
            f = JSON.parse(_);
            let p = f?.access_token;
            if (p && !o?.forceRefresh) {
                let w = f?.expires_at;
                if (w == null || y() < w - ldt) {
                    return {
                        token: p,
                        expiresAt: w ?? null
                    };
                }
            }
        } catch (error) {
            if (error?.code !== "ENOENT" && !(error instanceof SyntaxError)) {
                onCacheWriteError?.(error);
            }
        }
        let h = await e(o);
        try {
            await HFe(credentialsPath, {
                ...f ?? {},
                version: xQt,
                type: "oauth_token",
                access_token: h.token,
                expires_at: h.expiresAt
            });
        } catch (error) {
            onCacheWriteError?.(error);
        }
        return h;
    };
}
class kPt {
    constructor(e, n){
        this.cached = null;
        this.pendingRefresh = null;
        this.nextForce = false;
        this.lastAdvisoryError = 0;
        this.provider = e;
        this.onAdvisoryRefreshError = n;
    }
    async getToken() {
        let nextForce = this.nextForce;
        this.nextForce = false;
        let cached = this.cached;
        if (nextForce || cached == null) {
            return (await this.refresh(nextForce)).token;
        }
        if (cached.expiresAt == null) {
            return cached.token;
        }
        let r = cached.expiresAt - y();
        if (r > uCs) {
            return cached.token;
        }
        if (r > ldt) {
            this.backgroundRefresh();
            return cached.token;
        }
        return (await this.refresh()).token;
    }
    invalidate() {
        this.cached = null;
        this.nextForce = true;
    }
    refresh(e = false) {
        if (this.pendingRefresh && !e) {
            return this.pendingRefresh;
        }
        return this.doRefresh(e);
    }
    backgroundRefresh() {
        if (this.pendingRefresh) {
            return;
        }
        if (y() - this.lastAdvisoryError < pCs) {
            return;
        }
        this.doRefresh().catch((e)=>{
            this.lastAdvisoryError = y();
            this.onAdvisoryRefreshError?.(e);
        });
    }
    doRefresh(e = false) {
        this.pendingRefresh = this.provider(e ? {
            forceRefresh: true
        } : undefined).then((n)=>{
            this.cached = n;
            this.pendingRefresh = null;
            return n;
        }, (n)=>{
            this.pendingRefresh = null;
            throw n;
        });
        return this.pendingRefresh;
    }
}
const de = {
    "fail-closed": 5,
    "fail-open": 15
};
function P(e, n, r) {
    return (s)=>j(n, ()=>e(s), r);
}
function wmo(e, n) {
    return j(dirname(e), n, "fail-closed");
}
async function j(e, n, r) {
    let s = de[r];
    let o;
    try {
        o = await le(e, s, r);
    } catch (error) {
        if (r === "fail-closed" || error instanceof hu) {
            throw error;
        }
        t(`wif: credentials lock unavailable at ${e} (${l(error)}); refreshing without cross-process serialization`);
        return n();
    }
    try {
        i("tengu_wif_user_oauth_lock_acquired", {
            mode: d(r)
        });
        return await n();
    } finally{
        i("tengu_wif_user_oauth_lock_released", {
            mode: d(r)
        });
        try {
            await o();
        } catch (error) {
            if (xs(error)) {
                t(`wif: lock release failed: ${error}`);
            } else {
                c(error);
            }
        }
    }
}
async function le(e, n, r) {
    for(let attempt = 0;; attempt++){
        try {
            return await ja(e, {
                stale: 60000,
                update: 5000,
                onCompromised: (o)=>t(`WIF credentials lock compromised: ${o}`, {
                        level: "error"
                    })
            });
        } catch (error) {
            if (error.code !== "ELOCKED") {
                throw error;
            }
            if (attempt >= n) {
                i("tengu_wif_user_oauth_lock_retry_limit", {
                    attempt,
                    mode: d(r)
                });
                let u = new hu(`Could not acquire credentials lock at ${e} after ${n} retries`);
                u.cause = Object.assign(Error("credentials lock busy"), {
                    code: "ELOCKED"
                });
                throw u;
            }
            i("tengu_wif_user_oauth_lock_retry", {
                attempt,
                mode: d(r)
            });
            await Q(1000 + Math.random() * 1000);
        }
    }
}
class J {
    generation = 0;
    credentialsPromise = undefined;
    tokenCachePromise = undefined;
    resolvedBaseUrlSnapshot = undefined;
    failedAccessTokens = new Set;
    reset() {
        this.generation += 1;
        this.credentialsPromise = undefined;
        this.tokenCachePromise = undefined;
        this.resolvedBaseUrlSnapshot = undefined;
        this.failedAccessTokens.clear();
    }
}
const _e = new q(()=>new J);
function A() {
    return _e.of(B().host);
}
const we = 20;
function Pde() {
    return A().resolvedBaseUrlSnapshot;
}
function d$e() {
    return v(A());
}
function v(e) {
    if (e.credentialsPromise === undefined) {
        let { generation } = e;
        e.credentialsPromise = Zr("wif_credentials_resolve", async ()=>{
            let r = await ye();
            if (e.generation !== generation) {
                return z(e);
            }
            if (r === null) {
                e.resolvedBaseUrlSnapshot = null;
                return null;
            }
            let base_url = a.ANTHROPIC_BASE_URL || r.base_url;
            let baseURL = base_url || "https://api.anthropic.com";
            let credentials_path = Ov() === "env-quad" ? await Te(r, baseURL) : await S(r);
            let h = {
                ...r,
                base_url,
                ...r.authentication.credentials_path || credentials_path === null ? {} : {
                    authentication: {
                        ...r.authentication,
                        credentials_path
                    }
                }
            };
            let [{ getUserAgent }, { getProxyFetchOptions }] = await Promise.all([
                import("/$bunfs/root/chunk-pkm01axg.js"),
                import("/$bunfs/root/chunk-g1ar6avr.js")
            ]);
            let w = TPt(h, {
                baseURL,
                fetch: (E, k)=>fetch(E, {
                        ...k,
                        ...getProxyFetchOptions({
                            forAnthropicAPI: true,
                            url: String(E)
                        }),
                        signal: AbortSignal.timeout(10000)
                    }),
                userAgent: getUserAgent(),
                onSafetyWarning: (E)=>t(E, {
                        level: "warn"
                    }),
                onCacheWriteError: (E)=>t(String(E), {
                        level: "warn"
                    })
            });
            if (credentials_path) {
                switch(r.authentication.type){
                    case "user_oauth":
                        w.provider = P(M(me(w.provider, credentials_path), credentials_path, "after-recorded-401", e.failedAccessTokens), dirname(credentials_path), "fail-closed");
                        break;
                    case "oidc_federation":
                        {
                            let E = E3e();
                            if (E === null) {
                                break;
                            }
                            await mkdir(E, {
                                recursive: true,
                                mode: 448
                            }).catch((k)=>t(`wif: cannot create ${E} (${l(k)}); the credentials lock may be unavailable`, {
                                    level: "warn"
                                }));
                            w.provider = P(M(w.provider, credentials_path, "always", e.failedAccessTokens), E, "fail-open");
                            break;
                        }
                }
            }
            if (e.generation !== generation) {
                return z(e);
            }
            e.resolvedBaseUrlSnapshot = w.baseURL ?? null;
            return w;
        }).catch((r)=>{
            t(`WIF credential resolution failed: ${l(r)}`, {
                level: "error"
            });
            throw r instanceof hu ? r : new hu(l(r));
        });
    }
    return e.credentialsPromise;
}
function z(e) {
    t("wif: sign-in state was reset during this lookup; looking it up again");
    return v(e);
}
async function vmo(e) {
    let n = A();
    let r = await G(n).catch(()=>null);
    if (r === null) {
        return;
    }
    if (e) {
        n.failedAccessTokens.add(e);
        if (n.failedAccessTokens.size > we) {
            for (let s of n.failedAccessTokens){
                n.failedAccessTokens.delete(s);
                break;
            }
        }
    }
    r.invalidate();
}
function mbe() {
    return G(A());
}
function G(e) {
    e.tokenCachePromise ??= v(e).then((n)=>{
        if (n === null) {
            return null;
        }
        return new kPt(async (s)=>{
            try {
                let o = await n.provider(s);
                g("wif_token_exchange");
                return o;
            } catch (error) {
                let u = error instanceof hu ? error : new hu(error instanceof Error ? error.message : String(error), null);
                if (u !== error) {
                    u.cause = error;
                }
                m("wif_token_exchange", ke(u));
                throw u;
            }
        }, (s)=>t(String(s), {
                level: "warn"
            }));
    });
    return e.tokenCachePromise;
}
function M(e, credentials_path, r, failedAccessTokens) {
    return async (o)=>{
        if (!o?.forceRefresh) {
            return e(o);
        }
        if (r === "always" || failedAccessTokens.size > 0) {
            try {
                await etn(credentials_path, (p)=>t(p, {
                        level: "warn"
                    }));
                let u = await import("fs");
                let f = JSON.parse(await u.promises.readFile(credentials_path, "utf-8"));
                let h = f.access_token;
                let expiresAt = f.expires_at == null ? null : Number(f.expires_at);
                if (typeof h === "string" && h && !failedAccessTokens.has(h) && (expiresAt === null || Date.now() / 1000 < expiresAt - ldt)) {
                    let { logEvent } = await import("/$bunfs/root/chunk-mj49rkzw.js");
                    let { fromEnum } = await import("/$bunfs/root/chunk-a0ewv7yv.js");
                    logEvent("tengu_wif_user_oauth_refresh_race_resolved", {
                        mode: fromEnum(r)
                    });
                    t("wif: adopting sibling-rotated access token from credentials file; skipping refresh grant");
                    return {
                        token: h,
                        expiresAt
                    };
                }
            } catch (error) {
                t(`wif: rotated-token adoption check failed: ${l(error)}`);
            }
        }
        return e(o);
    };
}
function me(provider, credentials_path) {
    let r = async ()=>{
        try {
            let s = await import("fs");
            return JSON.parse(await s.promises.readFile(credentials_path, "utf-8"));
        } catch  {
            return null;
        }
    };
    return async (s)=>{
        let u = (await r())?.refresh_token;
        try {
            return await provider(s);
        } catch (error) {
            if (error instanceof hu && (error.statusCode === 400 || error.statusCode === 401) && typeof error.body === "string" && error.body.includes('"invalid_grant"') && v3e(error) === null && typeof u === "string" && u) {
                try {
                    let h = await r();
                    if (h && h.refresh_token === u) {
                        let { logEvent } = await import("/$bunfs/root/chunk-mj49rkzw.js");
                        await HFe(credentials_path, {
                            ...h,
                            refresh_token: undefined
                        });
                        logEvent("tengu_wif_user_oauth_refresh_token_cleared", {});
                    }
                } catch (err) {
                    if (jt(err)) {
                        t(`wif: refresh-token cleanup write failed: ${err}`);
                    } else {
                        c(ot(W(err), "WIF: failed to clear stale user_oauth refresh_token"));
                    }
                }
            }
            throw error;
        }
    };
}
function qzs(e) {
    if (e instanceof hu && typeof e.statusCode === "number") {
        return e.statusCode >= 500 || e.statusCode === 429 || e.statusCode === 408;
    }
    let n = e;
    for(let r = 0; r < 4 && n instanceof Error; r++){
        if (n.name === "TimeoutError" || Ee(n)) {
            return true;
        }
        n = n.cause;
    }
    return false;
}
function Ee(e) {
    switch("code" in e && typeof e.code === "string" ? e.code : ""){
        case "ECONNRESET":
        case "ECONNREFUSED":
        case "ECONNABORTED":
        case "ETIMEDOUT":
        case "EHOSTUNREACH":
        case "ENETUNREACH":
        case "ENETDOWN":
        case "ENOTFOUND":
        case "EAI_AGAIN":
        case "EPIPE":
        case "UND_ERR_SOCKET":
        case "UND_ERR_CONNECT_TIMEOUT":
        case "ELOCKED":
        case "ConnectionRefused":
        case "ConnectionClosed":
        case "FailedToOpenSocket":
        case "Timeout":
            return true;
        default:
            return false;
    }
}
function ke(e) {
    if (_Mt(e)) {
        return "no_refresh_available";
    }
    if (v3e(e)) {
        return "account_on_hold";
    }
    if (typeof e.body === "string" && e.body.includes('"invalid_grant"')) {
        return "invalid_grant";
    }
    if (typeof e.statusCode === "number") {
        if (e.statusCode >= 500) {
            return "http_5xx";
        }
        if (e.statusCode >= 400) {
            return "http_4xx";
        }
    }
    let n = e.message.toLowerCase();
    if (n.includes("parse") || n.includes("json")) {
        return "parse_failed";
    }
    return "network_error";
}
function lSr() {
    A().reset();
    Cjn();
}
const R = (e)=>process.env[e]?.trim() || undefined;
async function ye() {
    if (Ov() === "env-quad") {
        let e = R("ANTHROPIC_FEDERATION_RULE_ID");
        let n = R("ANTHROPIC_ORGANIZATION_ID");
        if (e && n) {
            let r = R("ANTHROPIC_IDENTITY_TOKEN_FILE");
            return {
                organization_id: n,
                workspace_id: R("ANTHROPIC_WORKSPACE_ID"),
                base_url: R("ANTHROPIC_BASE_URL"),
                authentication: {
                    type: "oidc_federation",
                    federation_rule_id: e,
                    service_account_id: R("ANTHROPIC_SERVICE_ACCOUNT_ID"),
                    identity_token: r ? {
                        source: "file",
                        path: r
                    } : undefined,
                    scope: R("ANTHROPIC_SCOPE")
                }
            };
        }
    }
    if (Ce()) {
        return null;
    }
    return L();
}
async function Te(e, baseURL) {
    if (e.authentication.type !== "oidc_federation") {
        return null;
    }
    let r = e.authentication.identity_token?.path;
    let s;
    if (r) {
        try {
            s = (await readFile(r, "utf-8")).trim();
        } catch (error) {
            t(`wif: cannot read identity token at ${r} (${l(error)}); federation token cache disabled`);
            return null;
        }
    } else {
        s = R("ANTHROPIC_IDENTITY_TOKEN");
    }
    if (!s) {
        t("wif: no identity token; federation token cache disabled");
        return null;
    }
    let o = E3e();
    if (o === null) {
        t("wif: no config directory, or a diskless session; federation token cache disabled");
        return null;
    }
    try {
        await mkdir(o, {
            recursive: true,
            mode: 448
        });
        {
            let f = await stat(o);
            let h = f.mode & 511;
            if (h & 63) {
                t(`wif: ${o} is mode 0o${h.toString(8)} (filesystem ignores modes, or directory pre-existed shared); federation token cache disabled`);
                return null;
            }
            let _ = process.getuid?.();
            if (_ !== undefined && f.uid !== _) {
                t(`wif: ${o} is owned by uid ${f.uid}, not ${_}; federation token cache disabled`);
                return null;
            }
        }
    } catch (error) {
        t(`wif: cannot prepare ${o} (${l(error)}); federation token cache disabled`);
        return null;
    }
    let u = at(JSON.stringify([
        e.authentication.federation_rule_id,
        e.organization_id,
        e.workspace_id ?? "",
        e.authentication.service_account_id ?? "",
        e.authentication.scope ?? "",
        baseURL,
        at(s)
    ]));
    return join(o, `${u}.json`);
}
export { HT, RSs, iFn, kPt, Oy, xSs, xQt, TPt, PSs, wmo, Pde, d$e, vmo, mbe, qzs, lSr };
