import { qQ, KQ, lat } from "/$bunfs/root/chunk-gr4a0fky.js";
import { aFn } from "/$bunfs/root/chunk-p97zwp26.js";
import { HT } from "/$bunfs/root/chunk-n10cystb.js";
import { Su } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
const _ = Se(aFn(), 1);
const g = (error)=>{
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
const l = (e)=>{
    if (typeof globalThis.process !== "undefined") {
        return globalThis.process.env?.[e]?.trim() || undefined;
    }
    if (typeof globalThis.Deno !== "undefined") {
        return globalThis.Deno.env?.get?.(e)?.trim() || undefined;
    }
};
let d = (e)=>{
    d = Array.isArray;
    return d(e);
};
const f = d;
function b(e) {
    return e != null && typeof e === "object" && !Array.isArray(e);
}
const w = (body)=>{
    try {
        return JSON.parse(body);
    } catch (t) {
        return;
    }
};
const SYMBOL_BRAND_PRIVATE_NULLABLE_HEADERS = Symbol.for("brand.privateNullableHeaders");
function* O(e) {
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
    } else if (f(e)) {
        r = e;
    } else {
        t = true;
        r = Object.entries(e ?? {});
    }
    for (let o of r){
        let a = o[0];
        if (typeof a !== "string") {
            throw TypeError("expected header name to be a string");
        }
        let i = f(o[1]) ? o[1] : [
            o[1]
        ];
        let n = false;
        for (let s of i){
            if (s === undefined) {
                continue;
            }
            if (t && !n) {
                n = true;
                yield [
                    a,
                    u
                ];
            }
            yield [
                a,
                s
            ];
        }
    }
}
var u = Symbol("clear");
const C = new Set([
    "x-stainless-helper"
]);
const P = (e, t)=>{
    let r = e ? e.split(",").map((o)=>o.trim()).filter(Boolean) : [];
    for (let o of t.split(",").map((a)=>a.trim())){
        if (o && !r.includes(o)) {
            r.push(o);
        }
    }
    return r.join(", ");
};
const E = (e)=>{
    let values = new Headers;
    let nulls = new Set;
    for (let o of e){
        let a = new Set;
        for (let [i, n] of O(o)){
            let s = i.toLowerCase();
            if (C.has(s)) {
                if (n === u) {
                    continue;
                }
                if (n === null) {
                    values.delete(i);
                    nulls.add(s);
                } else {
                    values.set(i, P(values.get(i), n));
                    nulls.delete(s);
                }
                continue;
            }
            if (n === u || !a.has(s)) {
                values.delete(i);
                a.add(s);
                if (n === u) {
                    continue;
                }
            }
            if (n === null) {
                values.delete(i);
                nulls.add(s);
            } else {
                values.append(i, n);
                nulls.delete(s);
            }
        }
    }
    return {
        [SYMBOL_BRAND_PRIVATE_NULLABLE_HEADERS]: true,
        values,
        nulls
    };
};
const j = (e, t, r, o)=>{
    if (r === "a" && !o) {
        throw TypeError("Private accessor was defined without a getter");
    }
    if (typeof t === "function" ? e !== t || !o : !t.has(e)) {
        throw TypeError("Cannot read private member from an object whose class did not declare it");
    }
    if (r === "m") {
        return o;
    }
    if (r === "a") {
        return o.call(e);
    }
    if (o) {
        return o.value;
    }
    return t.get(e);
};
let h;
let x;
const R = "vertex-2023-10-16";
const T = new Set([
    "/v1/messages",
    "/v1/messages?beta=true"
]);
export class AnthropicVertex extends lat {
    constructor({ baseURL = l("ANTHROPIC_VERTEX_BASE_URL"), region = l("CLOUD_ML_REGION") ?? null, projectId = l("ANTHROPIC_VERTEX_PROJECT_ID") ?? null, ...rest } = {}){
        if (!region) {
            throw Error("No region was given. The client should be instantiated with the `region` option or the `CLOUD_ML_REGION` environment variable should be set.");
        }
        if (!baseURL) {
            switch(region){
                case "global":
                    baseURL = "https://aiplatform.googleapis.com/v1";
                    break;
                case "us":
                    baseURL = "https://aiplatform.us.rep.googleapis.com/v1";
                    break;
                case "eu":
                    baseURL = "https://aiplatform.eu.rep.googleapis.com/v1";
                    break;
                default:
                    baseURL = `https://${region}-aiplatform.googleapis.com/v1`;
            }
        }
        super({
            baseURL,
            apiKey: null,
            authToken: null,
            ...rest
        });
        h.add(this);
        this.messages = N(this);
        this.beta = S(this);
        this.region = region;
        this.projectId = projectId;
        this.accessToken = rest.accessToken ?? null;
        if (rest.authClient && rest.googleAuth) {
            throw Error("You cannot provide both `authClient` and `googleAuth`. Please provide only one of them.");
        } else if (rest.authClient) {
            this._authClientPromise = Promise.resolve(rest.authClient);
        } else {
            this._auth = rest.googleAuth ?? new _.GoogleAuth({
                scopes: "https://www.googleapis.com/auth/cloud-platform"
            });
            this._authClientPromise = this._auth.getClient();
        }
    }
    validateHeaders() {}
    _shouldResolveDefaultCredentials() {
        return false;
    }
    async authHeaders() {}
    getUserAgent() {
        return `AnthropicVertex/JS ${HT}`;
    }
    backendMiddleware() {
        return [
            async (e, t, r)=>t(await j(this, h, "m", x).call(this, e, r.options))
        ];
    }
}
h = new WeakSet;
x = async function(t, r) {
    let o;
    let a;
    try {
        o = await this._authClientPromise;
        a = await o.getRequestHeaders();
    } catch (error) {
        throw new Su({
            message: "Failed to acquire Google OAuth credentials.",
            cause: g(error)
        });
    }
    let i = o.projectId ?? a.get("x-goog-user-project");
    if (!this.projectId && i) {
        this.projectId = i;
    }
    let n = new URL(t.url);
    let s;
    if (typeof t.body === "string") {
        let c = w(t.body);
        if (b(c)) {
            s = c;
        }
    }
    if (s && !s.anthropic_version) {
        s.anthropic_version = R;
    }
    if (r && T.has(r.path) && r.method === "post") {
        let c = r.path.split("?")[0];
        if (n.pathname.endsWith(c)) {
            if (!this.projectId) {
                throw Error("No projectId was given and it could not be resolved from credentials. The client should be instantiated with the `projectId` option or the `ANTHROPIC_VERTEX_PROJECT_ID` environment variable should be set.");
            }
            if (!s) {
                throw Error("Expected request body to be an object for post /v1/messages");
            }
            let p = s.model;
            delete s.model;
            let v = s.stream ?? false ? "streamRawPredict" : "rawPredict";
            let I = n.pathname.slice(0, n.pathname.length - c.length);
            n.pathname = `${I}/projects/${this.projectId}/locations/${this.region}/publishers/anthropic/models/${p}:${v}`;
            n.searchParams.delete("beta");
        }
    }
    if (r && (r.path === "/v1/messages/count_tokens" || r.path == "/v1/messages/count_tokens?beta=true" && r.method === "post")) {
        let c = r.path.split("?")[0];
        if (n.pathname.endsWith(c)) {
            if (!this.projectId) {
                throw Error("No projectId was given and it could not be resolved from credentials. The client should be instantiated with the `projectId` option or the `ANTHROPIC_VERTEX_PROJECT_ID` environment variable should be set.");
            }
            let p = n.pathname.slice(0, n.pathname.length - c.length);
            n.pathname = `${p}/projects/${this.projectId}/locations/${this.region}/publishers/anthropic/models/count-tokens:rawPredict`;
            n.searchParams.delete("beta");
        }
    }
    let m = {
        ...t,
        url: n.toString(),
        headers: E([
            a,
            t.headers
        ]).values
    };
    if (s) {
        m.body = JSON.stringify(s);
    }
    return m;
};
function N(e) {
    let t = new KQ(e);
    delete t.batches;
    return t;
}
function S(e) {
    let t = new qQ(e);
    delete t.messages.batches;
    return t;
}
