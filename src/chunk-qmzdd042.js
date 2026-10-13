import { qQ, aat, KQ, lat } from "/$bunfs/root/chunk-gr4a0fky.js";
import { Mxt } from "/$bunfs/root/chunk-abmdh7pn.js";
import { lFn, iF, xPt, PPt, IPt, OPt, MPt, HPt } from "/$bunfs/root/chunk-h2sk1gb6.js";
import { HT } from "/$bunfs/root/chunk-n10cystb.js";
import { OYe } from "/$bunfs/root/chunk-2e6e7dc3.js";
import { Rd } from "/$bunfs/root/chunk-gxstjgam.js";
import { jm } from "/$bunfs/root/chunk-55x53sfe.js";
import { $R, owe } from "/$bunfs/root/chunk-dze6yaxw.js";
import { Xn, Su } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import de from "assert";
const D = Se(owe(), 1);
const K = Se(jm(), 1);
const M = Se(OYe(), 1);
function j(e) {
    return typeof e === "object" && e !== null && ("name" in e && e.name === "AbortError" || "message" in e && String(e.message).includes("FetchRequestCanceledException"));
}
const x = (error)=>{
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
const ue = (logger)=>import("/$bunfs/root/chunk-8f79dj0j.js").then(({ createCredentialChain, fromEnv, fromNodeProviderChain })=>createCredentialChain(fromEnv(logger != null ? {
            logger
        } : {}), fromNodeProviderChain({
            ...logger != null ? {
                logger
            } : {},
            clientConfig: {
                ...logger != null ? {
                    logger
                } : {},
                requestHandler: new D.FetchHttpHandler({
                    requestInit: (s)=>({
                            ...s
                        })
                })
            }
        }))).catch((t)=>{
        throw Error(`Failed to import '@aws-sdk/credential-providers'.You can provide a custom \`providerChainResolver\` in the client options if your runtime does not have access to '@aws-sdk/credential-providers': \`new AnthropicBedrock({ providerChainResolver })\` Original error: ${t.message}`);
    });
const U = async (e, t)=>{
    de(e.method, "Expected request method property to be set");
    let r;
    if (t.awsAccessKey && t.awsSecretKey) {
        r = {
            accessKeyId: t.awsAccessKey,
            secretAccessKey: t.awsSecretKey,
            ...t.awsSessionToken != null && {
                sessionToken: t.awsSessionToken
            }
        };
    } else {
        let l = await (t.providerChainResolver ? t.providerChainResolver() : ue(t.logger));
        try {
            r = await l();
        } catch (error) {
            throw new Su({
                message: "Failed to resolve AWS credentials from the credential provider chain.",
                cause: x(error)
            });
        }
    }
    let n = new M.SignatureV4({
        service: "bedrock",
        region: t.regionName,
        credentials: r,
        sha256: Mxt
    });
    let s = new URL(t.url);
    let o = !e.headers ? {} : Symbol.iterator in e.headers ? Object.fromEntries(Array.from(e.headers).map((l)=>[
            ...l
        ])) : {
        ...e.headers
    };
    delete o.connection;
    o.host = s.host;
    let i = Object.fromEntries([
        ...new Set(s.searchParams.keys())
    ].map((l)=>[
            l,
            s.searchParams.getAll(l)
        ]));
    let a = new K.HttpRequest({
        method: e.method.toUpperCase(),
        protocol: s.protocol,
        path: s.pathname,
        query: i,
        headers: o,
        body: e.body
    });
    return (await n.sign(a)).headers;
};
const k = Se($R(), 1);
const J = Se(owe(), 1);
const c = Se(Rd(), 1);
const he = async (e, t)=>{
    let r = c.map({});
    let e_body = e.body;
    let s = c.take(e_body, {
        message: c.expectString
    });
    Object.assign(r, s);
    let o = new xPt({
        $metadata: b(e),
        ...r
    });
    return c.decorateServiceException(o, e.body);
};
const pe = async (e, t)=>{
    let r = c.map({});
    let e_body = e.body;
    let s = c.take(e_body, {
        message: c.expectString,
        originalMessage: c.expectString,
        originalStatusCode: c.expectInt32
    });
    Object.assign(r, s);
    let o = new HPt({
        $metadata: b(e),
        ...r
    });
    return c.decorateServiceException(o, e.body);
};
const fe = async (e, t)=>{
    let r = c.map({});
    let e_body = e.body;
    let s = c.take(e_body, {
        message: c.expectString
    });
    Object.assign(r, s);
    let o = new MPt({
        $metadata: b(e),
        ...r
    });
    return c.decorateServiceException(o, e.body);
};
const me = async (e, t)=>{
    let r = c.map({});
    let e_body = e.body;
    let s = c.take(e_body, {
        message: c.expectString
    });
    Object.assign(r, s);
    let o = new OPt({
        $metadata: b(e),
        ...r
    });
    return c.decorateServiceException(o, e.body);
};
const ye = async (e, t)=>{
    let r = c.map({});
    let e_body = e.body;
    let s = c.take(e_body, {
        message: c.expectString
    });
    Object.assign(r, s);
    let o = new PPt({
        $metadata: b(e),
        ...r
    });
    return c.decorateServiceException(o, e.body);
};
const we = async (e, t)=>{
    let r = c.map({});
    let e_body = e.body;
    let s = c.take(e_body, {
        message: c.expectString
    });
    Object.assign(r, s);
    let o = new IPt({
        $metadata: b(e),
        ...r
    });
    return c.decorateServiceException(o, e.body);
};
const F = (e, t)=>t.eventStreamMarshaller.deserialize(e, async (r)=>{
        if (r.chunk != null) {
            return {
                chunk: await ve(r.chunk, t)
            };
        }
        if (r.internalServerException != null) {
            return {
                internalServerException: await be(r.internalServerException, t)
            };
        }
        if (r.modelStreamErrorException != null) {
            return {
                modelStreamErrorException: await ge(r.modelStreamErrorException, t)
            };
        }
        if (r.validationException != null) {
            return {
                validationException: await Re(r.validationException, t)
            };
        }
        if (r.throttlingException != null) {
            return {
                throttlingException: await Ae(r.throttlingException, t)
            };
        }
        if (r.modelTimeoutException != null) {
            return {
                modelTimeoutException: await Ee(r.modelTimeoutException, t)
            };
        }
        if (r.serviceUnavailableException != null) {
            return {
                serviceUnavailableException: await xe(r.serviceUnavailableException, t)
            };
        }
        return {
            $unknown: e
        };
    });
var be = async (internalServerException, t)=>{
    let r = {
        ...internalServerException,
        body: await w(internalServerException.body, t)
    };
    return he(r, t);
};
var ge = async (modelStreamErrorException, t)=>{
    let r = {
        ...modelStreamErrorException,
        body: await w(modelStreamErrorException.body, t)
    };
    return pe(r, t);
};
var Ee = async (modelTimeoutException, t)=>{
    let r = {
        ...modelTimeoutException,
        body: await w(modelTimeoutException.body, t)
    };
    return fe(r, t);
};
var ve = async (chunk, t)=>{
    let r = {};
    let n = await w(chunk.body, t);
    Object.assign(r, _e(n, t));
    return r;
};
var xe = async (serviceUnavailableException, t)=>{
    let r = {
        ...serviceUnavailableException,
        body: await w(serviceUnavailableException.body, t)
    };
    return me(r, t);
};
var Ae = async (throttlingException, t)=>{
    let r = {
        ...throttlingException,
        body: await w(throttlingException.body, t)
    };
    return ye(r, t);
};
var Re = async (validationException, t)=>{
    let r = {
        ...validationException,
        body: await w(validationException.body, t)
    };
    return we(r, t);
};
var _e = (e, t)=>c.take(e, {
        bytes: t.base64Decoder
    });
var b = (e)=>({
        httpStatusCode: e.statusCode,
        requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"] ?? "",
        extendedRequestId: e.headers["x-amz-id-2"] ?? "",
        cfId: e.headers["x-amz-cf-id"] ?? ""
    });
const ke = (body, t)=>c.collectBody(body, t).then((r)=>t.utf8Encoder(r));
var w = (body, t)=>ke(body, t).then((r)=>{
        if (r.length) {
            return JSON.parse(r);
        }
        return {};
    });
function Oe(...e) {
    let globalThis_ReadableStream = globalThis.ReadableStream;
    if (typeof globalThis_ReadableStream === "undefined") {
        throw Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");
    }
    return new globalThis_ReadableStream(...e);
}
function W(e) {
    let t = Symbol.asyncIterator in e ? e[Symbol.asyncIterator]() : e[Symbol.iterator]();
    return Oe({
        start () {},
        async pull (r) {
            let { done, value } = await t.next();
            if (done) {
                r.close();
            } else {
                r.enqueue(value);
            }
        },
        async cancel () {
            await t.return?.();
        }
    });
}
function z(e) {
    if (e[Symbol.asyncIterator]) {
        return e;
    }
    let t = e.getReader();
    return {
        async next () {
            try {
                let r = await t.read();
                if (r?.done) {
                    t.releaseLock();
                }
                return r;
            } catch (error) {
                t.releaseLock();
                throw error;
            }
        },
        async return () {
            let r = t.cancel();
            t.releaseLock();
            await r;
            return {
                done: true,
                value: undefined
            };
        },
        [Symbol.asyncIterator] () {
            return this;
        }
    };
}
let N = (e)=>{
    N = Array.isArray;
    return N(e);
};
const P = N;
function A(e) {
    return e != null && typeof e === "object" && !Array.isArray(e);
}
const R = (e)=>{
    try {
        return JSON.parse(e);
    } catch (t) {
        return;
    }
};
const utf8Encoder = (e)=>new TextDecoder("utf-8").decode(e);
const utf8Decoder = (e)=>new TextEncoder().encode(e);
const Ce = ()=>{
    let eventStreamMarshaller = new lFn({
        utf8Encoder,
        utf8Decoder
    });
    return {
        base64Decoder: k.fromBase64,
        base64Encoder: k.toBase64,
        utf8Decoder,
        utf8Encoder,
        eventStreamMarshaller,
        streamCollector: J.streamCollector
    };
};
function G(e) {
    let e_body = e.body;
    if (!e_body) {
        return e;
    }
    async function* r() {
        let o = F(z(e_body), Ce());
        try {
            for await (let i of o){
                if (i.chunk && i.chunk.bytes) {
                    let a = utf8Encoder(i.chunk.bytes);
                    let d = R(a);
                    if (d === undefined) {
                        throw new Xn(`Could not parse a Bedrock chunk into JSON: ${a}`);
                    }
                    let l = A(d) && typeof d.type === "string" ? d.type : null;
                    if (l != null) {
                        yield utf8Decoder(`event: ${l}
data: ${JSON.stringify(d)}

`);
                    }
                }
            }
        } catch (err) {
            let error = Te(err);
            if (!error) {
                throw err;
            }
            yield utf8Decoder(`event: error
data: ${JSON.stringify({
                type: "error",
                error
            })}

`);
        }
    }
    let n = new Headers(e.headers);
    n.set("content-type", "text/event-stream; charset=utf-8");
    n.delete("content-length");
    let s = new Response(W(r()), {
        status: e.status,
        statusText: e.statusText,
        headers: n
    });
    Object.defineProperty(s, "url", {
        value: e.url
    });
    return s;
}
function Te(err) {
    if (err instanceof iF) {
        return {
            type: err.name.charAt(0).toLowerCase() + err.name.slice(1),
            message: err.message
        };
    }
    if (err instanceof Error && Object.getPrototypeOf(err) === Error.prototype && err.name !== "Error" && !j(err)) {
        return {
            type: err.name,
            message: err.message
        };
    }
}
const f = (e)=>{
    if (typeof globalThis.process !== "undefined") {
        return globalThis.process.env?.[e]?.trim() || undefined;
    }
    if (typeof globalThis.Deno !== "undefined") {
        return globalThis.Deno.env?.get?.(e)?.trim() || undefined;
    }
};
const SYMBOL_BRAND_PRIVATE_NULLABLE_HEADERS = Symbol.for("brand.privateNullableHeaders");
function* Ie(e) {
    if (!e) {
        return;
    }
    if (SYMBOL_BRAND_PRIVATE_NULLABLE_HEADERS in e) {
        let { values, nulls } = e;
        yield* values.entries();
        for (let o of nulls){
            yield [
                o,
                null
            ];
        }
        return;
    }
    let t = false;
    let r;
    if (e instanceof Headers) {
        r = e.entries();
    } else if (P(e)) {
        r = e;
    } else {
        t = true;
        r = Object.entries(e ?? {});
    }
    for (let n of r){
        let s = n[0];
        if (typeof s !== "string") {
            throw TypeError("expected header name to be a string");
        }
        let o = P(n[1]) ? n[1] : [
            n[1]
        ];
        let i = false;
        for (let a of o){
            if (a === undefined) {
                continue;
            }
            if (t && !i) {
                i = true;
                yield [
                    s,
                    O
                ];
            }
            yield [
                s,
                a
            ];
        }
    }
}
var O = Symbol("clear");
const Ne = new Set([
    "x-stainless-helper"
]);
const Pe = (e, t)=>{
    let r = e ? e.split(",").map((n)=>n.trim()).filter(Boolean) : [];
    for (let n of t.split(",").map((s)=>s.trim())){
        if (n && !r.includes(n)) {
            r.push(n);
        }
    }
    return r.join(", ");
};
const g = (e)=>{
    let values = new Headers;
    let nulls = new Set;
    for (let n of e){
        let s = new Set;
        for (let [o, i] of Ie(n)){
            let a = o.toLowerCase();
            if (Ne.has(a)) {
                if (i === O) {
                    continue;
                }
                if (i === null) {
                    values.delete(o);
                    nulls.add(a);
                } else {
                    values.set(o, Pe(values.get(o), i));
                    nulls.delete(a);
                }
                continue;
            }
            if (i === O || !s.has(a)) {
                values.delete(o);
                s.add(a);
                if (i === O) {
                    continue;
                }
            }
            if (i === null) {
                values.delete(o);
                nulls.add(a);
            } else {
                values.append(o, i);
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
function Y(e) {
    return e.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
const q = Object.freeze(Object.create(null));
const Be = (e = Y)=>function(r, ...n) {
        if (r.length === 1) {
            return r[0];
        }
        let s = false;
        let o = [];
        let i = r.reduce((acc, item, index)=>{
            if (/[?#]/.test(item)) {
                s = true;
            }
            let h = n[index];
            let y = (s ? encodeURIComponent : e)(`${h}`);
            if (index !== n.length && (h == null || typeof h === "object" && h.toString === Object.getPrototypeOf(Object.getPrototypeOf(h.hasOwnProperty ?? q) ?? q)?.toString)) {
                y = `${h}`;
                o.push({
                    start: acc.length + item.length,
                    length: y.length,
                    error: `Value of type ${Object.prototype.toString.call(h).slice(8, -1)} is not a valid path parameter`
                });
            }
            return acc + item + (index === n.length ? "" : y);
        }, "");
        let a = i.split(/[?#]/, 1)[0];
        let d = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi;
        let l;
        while((l = d.exec(a)) !== null){
            o.push({
                start: l.index,
                length: l[0].length,
                error: `Value "${l[0]}" can't be safely passed as a path parameter`
            });
        }
        o.sort((u, p)=>u.start - p.start);
        if (o.length > 0) {
            let u = 0;
            let p = o.reduce((acc, item)=>{
                let y = " ".repeat(item.start - u);
                let I = "^".repeat(item.length);
                u = item.start + item.length;
                return acc + y + I;
            }, "");
            throw new Xn(`Path parameters result in path with invalid segments:
${o.map((m)=>m.error).join(`
`)}
${i}
${p}`);
        }
        return i;
    };
const L = Be(Y);
const Z = {
    off: 0,
    error: 200,
    warn: 300,
    info: 400,
    debug: 500
};
function E() {}
function C(e, t, r) {
    if (!t || Z[e] > Z[r]) {
        return E;
    } else {
        return t[e].bind(t);
    }
}
const Le = {
    error: E,
    warn: E,
    info: E,
    debug: E
};
const Q = new WeakMap;
function He(e, t) {
    let r = Q.get(e);
    if (r && r[0] === t) {
        return r[1];
    }
    let n = {
        error: C("error", e, t),
        warn: C("warn", e, t),
        info: C("info", e, t),
        debug: C("debug", e, t)
    };
    Q.set(e, [
        t,
        n
    ]);
    return n;
}
function S(e) {
    let e_logger = e.logger;
    let r = e.logLevel ?? "off";
    if (!e_logger) {
        return Le;
    }
    return He(e_logger, r);
}
const X = (e, t, r, n)=>{
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
let T;
let ee;
let te;
const $e = "bedrock-2023-05-31";
const De = new Set([
    "/v1/complete",
    "/v1/messages",
    "/v1/messages?beta=true"
]);
export class AnthropicBedrock extends lat {
    constructor({ awsRegion = f("AWS_REGION") ?? "us-east-1", baseURL = f("ANTHROPIC_BEDROCK_BASE_URL") ?? `https://bedrock-runtime.${awsRegion}.amazonaws.com`, apiKey = f("AWS_BEARER_TOKEN_BEDROCK"), awsSecretKey = null, awsAccessKey = null, awsSessionToken = null, providerChainResolver = null, ...rest } = {}){
        super({
            baseURL,
            authToken: apiKey ?? null,
            apiKey: null,
            ...rest
        });
        T.add(this);
        this.skipAuth = false;
        this.messages = Ke(this);
        this.completions = new aat(this);
        this.beta = Me(this);
        let d = awsAccessKey != null;
        let l = awsSecretKey != null;
        if (d !== l) {
            S(this).warn("Warning: Passing only one of `awsAccessKey` or `awsSecretKey` is deprecated. Please provide both keys, or provide neither and rely on the AWS credential provider chain.");
        }
        this.awsSecretKey = awsSecretKey;
        this.awsAccessKey = awsAccessKey;
        this.awsRegion = awsRegion;
        this.awsSessionToken = awsSessionToken;
        this.skipAuth = rest.skipAuth ?? false;
        this.providerChainResolver = providerChainResolver;
    }
    validateHeaders() {}
    _shouldResolveDefaultCredentials() {
        return false;
    }
    getUserAgent() {
        return `AnthropicBedrock/JS ${HT}`;
    }
    async authHeaders(e) {
        if (this.skipAuth) {
            return undefined;
        }
        return super.authHeaders(e);
    }
    backendMiddleware() {
        return [
            async (e, t, r)=>{
                let n = await t(await X(this, T, "m", ee).call(this, e, r.options));
                return X(this, T, "m", te).call(this, n);
            }
        ];
    }
}
T = new WeakSet;
ee = async function(t, r) {
    let n = new URL(t.url);
    let s = new Headers(t.headers);
    let o;
    if (typeof t.body === "string") {
        let a = R(t.body);
        if (A(a)) {
            o = a;
        }
    }
    if (o) {
        if (!o.anthropic_version) {
            o.anthropic_version = $e;
        }
        let a = s.get("anthropic-beta");
        if (a != null && !o.anthropic_beta) {
            o.anthropic_beta = a.split(",").map((d)=>d.trim());
        }
    }
    if (r && De.has(r.path) && r.method === "post") {
        let a = r.path.split("?")[0];
        if (n.pathname.endsWith(a)) {
            if (!o) {
                throw Error(`Expected request body to be a JSON object for post ${a}`);
            }
            let d = o.model;
            delete o.model;
            let l = o.stream;
            delete o.stream;
            let u = n.pathname.slice(0, n.pathname.length - a.length);
            n.pathname = u + (l ? L`/model/${d}/invoke-with-response-stream` : L`/model/${d}/invoke`);
            n.searchParams.delete("beta");
        }
    }
    let i = {
        ...t,
        url: n.toString(),
        headers: s
    };
    if (o) {
        i.body = JSON.stringify(o);
    }
    if (!this.skipAuth && !this.authToken) {
        let regionName = this.awsRegion;
        if (!regionName) {
            throw Error("Expected `awsRegion` option to be passed to the client or the `AWS_REGION` environment variable to be present");
        }
        let d = await U(i, {
            url: i.url,
            regionName,
            awsAccessKey: this.awsAccessKey,
            awsSecretKey: this.awsSecretKey,
            awsSessionToken: this.awsSessionToken,
            fetchOptions: this.fetchOptions,
            providerChainResolver: this.providerChainResolver,
            logger: S(this)
        });
        i.headers = g([
            i.headers,
            d
        ]).values;
    }
    return i;
};
te = function(t) {
    if (t.body && t.headers.get("content-type")?.includes("application/vnd.amazon.eventstream")) {
        return G(t);
    }
    return t;
};
function Ke(e) {
    let t = new KQ(e);
    delete t.batches;
    delete t.countTokens;
    return t;
}
function Me(e) {
    let t = new qQ(e);
    delete t.promptCaching;
    delete t.messages.batches;
    delete t.messages.countTokens;
    return t;
}
const ne = Se(owe(), 1);
const oe = Se(jm(), 1);
const se = Se(OYe(), 1);
const Fe = (profile, logger)=>import("/$bunfs/root/chunk-8f79dj0j.js").then(({ createCredentialChain, fromEnv, fromNodeProviderChain })=>{
        let o = fromNodeProviderChain({
            ...profile != null ? {
                profile
            } : {},
            ...logger != null ? {
                logger
            } : {},
            clientConfig: {
                ...logger != null ? {
                    logger
                } : {},
                requestHandler: new ne.FetchHttpHandler({
                    requestInit: (i)=>({
                            ...i
                        })
                })
            }
        });
        if (profile != null) {
            return o;
        }
        return createCredentialChain(fromEnv(logger != null ? {
            logger
        } : {}), o);
    }).catch((r)=>{
        throw Error(`Failed to import '@aws-sdk/credential-providers'. You can provide a custom \`providerChainResolver\` in the client options if your runtime does not have access to '@aws-sdk/credential-providers': \`new AnthropicAws({ providerChainResolver })\` Original error: ${r.message}`);
    });
const ae = async (e, t)=>{
    de(e.method, "Expected request method property to be set");
    let r;
    if (t.awsAccessKey && t.awsSecretAccessKey) {
        r = {
            accessKeyId: t.awsAccessKey,
            secretAccessKey: t.awsSecretAccessKey,
            ...t.awsSessionToken != null && {
                sessionToken: t.awsSessionToken
            }
        };
    } else {
        let l = await (t.providerChainResolver ? t.providerChainResolver() : Fe(t.awsProfile, t.logger));
        try {
            r = await l();
        } catch (error) {
            throw new Su({
                message: "Failed to resolve AWS credentials from the credential provider chain.",
                cause: x(error)
            });
        }
    }
    let n = new se.SignatureV4({
        service: t.serviceName,
        region: t.regionName,
        credentials: r,
        sha256: Mxt
    });
    let s = new URL(t.url);
    let o = !e.headers ? {} : Symbol.iterator in e.headers ? Object.fromEntries(Array.from(e.headers).map((l)=>[
            ...l
        ])) : {
        ...e.headers
    };
    delete o.connection;
    o.host = s.host;
    let i = Object.fromEntries([
        ...new Set(s.searchParams.keys())
    ].map((l)=>[
            l,
            s.searchParams.getAll(l)
        ]));
    let a = new oe.HttpRequest({
        method: e.method.toUpperCase(),
        protocol: s.protocol,
        path: s.pathname,
        query: i,
        headers: o,
        body: e.body
    });
    return (await n.sign(a)).headers;
};
const We = (e, t, r, n)=>{
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
let H;
let ie;
const serviceName = "bedrock-mantle";
export class AnthropicBedrockMantle extends lat {
    constructor({ awsRegion, baseURL, apiKey, awsAccessKey = null, awsSecretAccessKey = null, awsSessionToken = null, awsProfile, providerChainResolver = null, skipAuth = false, ...rest } = {}){
        let u = awsRegion ?? f("AWS_REGION") ?? f("AWS_DEFAULT_REGION");
        let baseURL_1 = baseURL ?? f("ANTHROPIC_BEDROCK_MANTLE_BASE_URL") ?? (u ? `https://bedrock-mantle.${u}.api.aws/anthropic` : undefined);
        if (!baseURL_1) {
            throw new Xn("No AWS region or base URL found. Set `awsRegion` in the constructor, the `AWS_REGION` / `AWS_DEFAULT_REGION` environment variable, or provide a `baseURL` / `ANTHROPIC_BEDROCK_MANTLE_BASE_URL` environment variable.");
        }
        let m = apiKey != null;
        if (awsAccessKey != null !== (awsSecretAccessKey != null)) {
            throw new Xn("`awsAccessKey` and `awsSecretAccessKey` must be provided together. You provided only one.");
        }
        let y = awsAccessKey != null && awsSecretAccessKey != null;
        let I = awsProfile != null;
        let v;
        if (m) {
            v = apiKey;
        } else if (!y && !I) {
            v = f("AWS_BEARER_TOKEN_BEDROCK") ?? undefined;
        }
        super({
            apiKey: v ?? null,
            authToken: null,
            baseURL: baseURL_1,
            ...rest
        });
        H.add(this);
        this.messages = new KQ(this);
        this.beta = Je(this);
        this.skipAuth = false;
        this.awsRegion = u;
        this.awsAccessKey = awsAccessKey;
        this.awsSecretAccessKey = awsSecretAccessKey;
        this.awsSessionToken = awsSessionToken;
        this.awsProfile = awsProfile ?? null;
        this.providerChainResolver = providerChainResolver;
        this.skipAuth = skipAuth;
        this._useSigV4 = v == null;
    }
    async authHeaders(e) {
        if (this.skipAuth) {
            return;
        }
        if (!this._useSigV4) {
            return g([
                {
                    Authorization: `Bearer ${this.apiKey}`
                }
            ]);
        }
    }
    validateHeaders() {}
    _shouldResolveDefaultCredentials() {
        return false;
    }
    getUserAgent() {
        return `AnthropicBedrockMantle/JS ${HT}`;
    }
    backendMiddleware() {
        return [
            async (e, t)=>t(await We(this, H, "m", ie).call(this, e))
        ];
    }
}
H = new WeakSet;
ie = async function(t) {
    if (this.skipAuth || !this._useSigV4) {
        return t;
    }
    let awsRegion = this.awsRegion;
    if (!awsRegion) {
        throw new Xn("No AWS region found. Set `awsRegion` in the constructor or the `AWS_REGION` / `AWS_DEFAULT_REGION` environment variable.");
    }
    let n = await ae(t, {
        url: t.url,
        regionName: awsRegion,
        serviceName,
        awsAccessKey: this.awsAccessKey,
        awsSecretAccessKey: this.awsSecretAccessKey,
        awsSessionToken: this.awsSessionToken,
        awsProfile: this.awsProfile,
        providerChainResolver: this.providerChainResolver,
        logger: S(this)
    });
    return {
        ...t,
        headers: g([
            t.headers,
            n
        ]).values
    };
};
function Je(e) {
    let { messages } = new qQ(e);
    return {
        messages
    };
}
