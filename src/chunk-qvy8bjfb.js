import { rbe } from "/$bunfs/root/chunk-gr4a0fky.js";
import { nP } from "/$bunfs/root/chunk-964dstky.js";
import { Fk } from "/$bunfs/root/chunk-dvxpnma3.js";
import "/$bunfs/root/chunk-09p18edh.js";
import { Mxt } from "/$bunfs/root/chunk-abmdh7pn.js";
import "/$bunfs/root/chunk-97t027xh.js";
import { HT } from "/$bunfs/root/chunk-n10cystb.js";
import { OYe } from "/$bunfs/root/chunk-2e6e7dc3.js";
import "/$bunfs/root/chunk-53tyrfzz.js";
import "/$bunfs/root/chunk-nh84xq74.js";
import { jm } from "/$bunfs/root/chunk-55x53sfe.js";
import { owe } from "/$bunfs/root/chunk-dze6yaxw.js";
import { Xn, Su } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import ee from "assert";
let d = (e)=>{
    d = Array.isArray;
    return d(e);
};
const A = d;
const SYMBOL_BRAND_PRIVATE_NULLABLE_HEADERS = Symbol.for("brand.privateNullableHeaders");
function* M(e) {
    if (!e) {
        return;
    }
    if (SYMBOL_BRAND_PRIVATE_NULLABLE_HEADERS in e) {
        let { values, nulls } = e;
        yield* values.entries();
        for (let i of nulls){
            yield [
                i,
                null
            ];
        }
        return;
    }
    let t = false;
    let r;
    if (e instanceof Headers) {
        r = e.entries();
    } else if (A(e)) {
        r = e;
    } else {
        t = true;
        r = Object.entries(e ?? {});
    }
    for (let n of r){
        let o = n[0];
        if (typeof o !== "string") {
            throw TypeError("expected header name to be a string");
        }
        let i = A(n[1]) ? n[1] : [
            n[1]
        ];
        let s = false;
        for (let a of i){
            if (a === undefined) {
                continue;
            }
            if (t && !s) {
                s = true;
                yield [
                    o,
                    w
                ];
            }
            yield [
                o,
                a
            ];
        }
    }
}
var w = Symbol("clear");
const Q = new Set([
    "x-stainless-helper"
]);
const J = (e, t)=>{
    let r = e ? e.split(",").map((n)=>n.trim()).filter(Boolean) : [];
    for (let n of t.split(",").map((o)=>o.trim())){
        if (n && !r.includes(n)) {
            r.push(n);
        }
    }
    return r.join(", ");
};
const E = (e)=>{
    let values = new Headers;
    let nulls = new Set;
    for (let n of e){
        let o = new Set;
        for (let [i, s] of M(n)){
            let a = i.toLowerCase();
            if (Q.has(a)) {
                if (s === w) {
                    continue;
                }
                if (s === null) {
                    values.delete(i);
                    nulls.add(a);
                } else {
                    values.set(i, J(values.get(i), s));
                    nulls.delete(a);
                }
                continue;
            }
            if (s === w || !o.has(a)) {
                values.delete(i);
                o.add(a);
                if (s === w) {
                    continue;
                }
            }
            if (s === null) {
                values.delete(i);
                nulls.add(a);
            } else {
                values.append(i, s);
                nulls.delete(a);
            }
        }
    }
    return {
        [SYMBOL_BRAND_PRIVATE_NULLABLE_HEADERS]: true,
        values,
        nulls
    };
};
const f = (e)=>{
    if (typeof globalThis.process !== "undefined") {
        return globalThis.process.env?.[e]?.trim() || undefined;
    }
    if (typeof globalThis.Deno !== "undefined") {
        return globalThis.Deno.env?.get?.(e)?.trim() || undefined;
    }
};
const T = {
    off: 0,
    error: 200,
    warn: 300,
    info: 400,
    debug: 500
};
function p() {}
function b(e, t, r) {
    if (!t || T[e] > T[r]) {
        return p;
    } else {
        return t[e].bind(t);
    }
}
const Y = {
    error: p,
    warn: p,
    info: p,
    debug: p
};
const v = new WeakMap;
function X(e, t) {
    let r = v.get(e);
    if (r && r[0] === t) {
        return r[1];
    }
    let n = {
        error: b("error", e, t),
        warn: b("warn", e, t),
        info: b("info", e, t),
        debug: b("debug", e, t)
    };
    v.set(e, [
        t,
        n
    ]);
    return n;
}
function _(e) {
    let e_logger = e.logger;
    let r = e.logLevel ?? "off";
    if (!e_logger) {
        return Y;
    }
    return X(e_logger, r);
}
const H = Se(nP(), 1);
const g = Se(Fk(), 1);
const k = Se(owe(), 1);
const N = Se(jm(), 1);
const D = Se(OYe(), 1);
const j = (error)=>{
    if (error instanceof Error) {
        return error;
    }
    if (typeof error === "object" && error !== null) {
        try {
            let t = Object.prototype.toString.call(error);
            if (t === "[object Error]" || t === "[object DOMException]") {
                let r = Error(error.message, error.cause ? {
                    cause: error.cause
                } : {});
                if (error.stack) {
                    r.stack = error.stack;
                }
                if (error.cause && !r.cause) {
                    r.cause = error.cause;
                }
                if (error.name) {
                    r.name = error.name;
                }
                return r;
            }
        } catch  {}
        try {
            return Error(JSON.stringify(error));
        } catch  {}
    }
    return Error(error);
};
const te = (awsProfile, logger)=>import("/$bunfs/root/chunk-8f79dj0j.js").then(({ createCredentialChain, fromEnv, fromNodeProviderChain })=>{
        let i = fromNodeProviderChain({
            ...awsProfile != null ? {
                profile: awsProfile
            } : {},
            ...logger != null ? {
                logger
            } : {},
            clientConfig: {
                ...logger != null ? {
                    logger
                } : {},
                requestHandler: new k.FetchHttpHandler({
                    requestInit: (s)=>({
                            ...s
                        })
                })
            }
        });
        if (awsProfile != null) {
            return i;
        }
        return createCredentialChain(fromEnv(logger != null ? {
            logger
        } : {}), i);
    }).catch((r)=>{
        throw Error(`Failed to import '@aws-sdk/credential-providers'. You can provide a custom \`providerChainResolver\` in the client options if your runtime does not have access to '@aws-sdk/credential-providers': \`new AnthropicAws({ providerChainResolver })\` Original error: ${r.message}`);
    });
const F = async (e, t)=>{
    ee(e.method, "Expected request method property to be set");
    let credentials;
    if (t.awsAccessKey && t.awsSecretAccessKey) {
        credentials = {
            accessKeyId: t.awsAccessKey,
            secretAccessKey: t.awsSecretAccessKey,
            ...t.awsSessionToken != null && {
                sessionToken: t.awsSessionToken
            }
        };
    } else {
        let c = await (t.providerChainResolver ? t.providerChainResolver() : te(t.awsProfile, t.logger));
        try {
            credentials = await c();
        } catch (error) {
            throw new Su({
                message: "Failed to resolve AWS credentials from the credential provider chain.",
                cause: j(error)
            });
        }
    }
    let n = new D.SignatureV4({
        service: t.serviceName,
        region: t.regionName,
        credentials,
        sha256: Mxt
    });
    let o = new URL(t.url);
    let headers = !e.headers ? {} : Symbol.iterator in e.headers ? Object.fromEntries(Array.from(e.headers).map((c)=>[
            ...c
        ])) : {
        ...e.headers
    };
    delete headers.connection;
    headers.host = o.host;
    let query = Object.fromEntries([
        ...new Set(o.searchParams.keys())
    ].map((c)=>[
            c,
            o.searchParams.getAll(c)
        ]));
    let a = new N.HttpRequest({
        method: e.method.toUpperCase(),
        protocol: o.protocol,
        path: o.pathname,
        query,
        headers,
        body: e.body
    });
    return (await n.sign(a)).headers;
};
const re = (e, t, r, n)=>{
    if (r === "a" && !n) {
        throw TypeError("Private accessor was defined without a getter");
    }
    if (typeof t === "function" ? e !== t || !n : !t.has(e)) {
        throw TypeError("Cannot read private member from an object whose class did not declare it");
    }
    if (r === "m") {
        return n;
    }
    if (r === "a") {
        return n.call(e);
    }
    if (n) {
        return n.value;
    }
    return t.get(e);
};
let S;
let L;
const serviceName = "aws-external-anthropic";
const P = ()=>new Xn("No AWS region or base URL found. Set `awsRegion` in the constructor, the `AWS_REGION` / `AWS_DEFAULT_REGION` environment variable, configure a `region` for your profile in `~/.aws/config`, or provide a `baseURL` / `ANTHROPIC_AWS_BASE_URL` environment variable.");
export class AnthropicAws extends rbe {
    constructor({ awsRegion, baseURL, apiKey, awsAccessKey = null, awsSecretAccessKey = null, awsSessionToken = null, awsProfile, providerChainResolver = null, workspaceId, skipAuth = false, credentials, config, profile, ...rest } = {}){
        let h = awsRegion ?? f("AWS_REGION") ?? f("AWS_DEFAULT_REGION");
        let l = baseURL ?? f("ANTHROPIC_AWS_BASE_URL");
        let y;
        if (l) {
            y = l;
        } else if (h) {
            y = `https://aws-external-anthropic.${h}.api.aws`;
        } else {
            y = undefined;
        }
        let W = apiKey != null;
        if (awsAccessKey != null !== (awsSecretAccessKey != null)) {
            throw new Xn("`awsAccessKey` and `awsSecretAccessKey` must be provided together. You provided only one.");
        }
        let G = awsAccessKey != null && awsSecretAccessKey != null;
        let V = awsProfile != null;
        let u;
        if (W) {
            u = apiKey;
        } else if (!G && !V) {
            u = f("ANTHROPIC_AWS_API_KEY") ?? undefined;
        }
        let workspaceId_1 = workspaceId ?? f("ANTHROPIC_AWS_WORKSPACE_ID");
        if (!workspaceId_1 && !skipAuth) {
            throw new Xn("No workspace ID found. Set `workspaceId` in the constructor or the `ANTHROPIC_AWS_WORKSPACE_ID` environment variable.");
        }
        super({
            apiKey: u ?? null,
            authToken: null,
            baseURL: y,
            ...rest,
            defaultHeaders: E([
                rest.defaultHeaders,
                {
                    "anthropic-workspace-id": workspaceId_1
                }
            ])
        });
        S.add(this);
        this.skipAuth = false;
        if (credentials != null || config != null || profile != null) {
            _(this).warn("`credentials`, `config`, and `profile` are not supported by the AWS client and were ignored. Authenticate with `apiKey` or AWS credentials (SigV4) instead.");
        }
        this._baseURLIsExplicit = !!l;
        this.awsRegion = h;
        this.awsAccessKey = awsAccessKey;
        this.awsSecretAccessKey = awsSecretAccessKey;
        this.awsSessionToken = awsSessionToken;
        this.awsProfile = awsProfile ?? null;
        this.providerChainResolver = providerChainResolver;
        this.workspaceId = workspaceId_1;
        this.skipAuth = skipAuth;
        this._useSigV4 = u == null;
        let q = {
            ...this._options,
            apiKey: u ?? null,
            baseURL: l,
            awsRegion,
            awsAccessKey,
            awsSecretAccessKey,
            awsSessionToken,
            awsProfile,
            providerChainResolver,
            workspaceId: workspaceId_1,
            skipAuth
        };
        this._options = q;
        if (h || l || skipAuth) {
            this.ready = Promise.resolve();
        } else {
            this.ready = this._resolveRegionFromConfig(awsProfile).then((C)=>{
                this.awsRegion = C;
                this.baseURL = `https://aws-external-anthropic.${C}.api.aws`;
            });
            this.ready.catch(()=>{});
        }
    }
    _shouldResolveDefaultCredentials() {
        return false;
    }
    withOptions(e) {
        return super.withOptions({
            awsRegion: this.awsRegion,
            ...e
        });
    }
    _resolveRegionFromConfig(profile) {
        return H.loadConfig({
            ...g.NODE_REGION_CONFIG_OPTIONS,
            default: ()=>{
                throw P();
            }
        }, {
            ...g.NODE_REGION_CONFIG_FILE_OPTIONS,
            ...profile && {
                profile
            }
        })();
    }
    async prepareOptions(e) {
        await super.prepareOptions(e);
        await this.ready;
    }
    async authHeaders(e) {
        if (this.skipAuth) {
            return;
        }
        if (!this._useSigV4) {
            return super.authHeaders(e);
        }
    }
    validateHeaders() {}
    getUserAgent() {
        return `AnthropicAws/JS ${HT}`;
    }
    backendMiddleware() {
        return [
            async (e, t)=>t(await re(this, S, "m", L).call(this, e))
        ];
    }
}
S = new WeakSet;
L = async function(t) {
    if (this.skipAuth || !this._useSigV4) {
        return t;
    }
    if (!this.awsRegion) {
        throw P();
    }
    let r = await F(t, {
        url: t.url,
        regionName: this.awsRegion,
        serviceName,
        awsAccessKey: this.awsAccessKey,
        awsSecretAccessKey: this.awsSecretAccessKey,
        awsSessionToken: this.awsSessionToken,
        awsProfile: this.awsProfile,
        providerChainResolver: this.providerChainResolver,
        logger: _(this)
    });
    return {
        ...t,
        headers: E([
            t.headers,
            r
        ]).values
    };
};
