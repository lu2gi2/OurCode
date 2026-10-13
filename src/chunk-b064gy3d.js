import { rbe } from "/$bunfs/root/chunk-gr4a0fky.js";
import { aFn } from "/$bunfs/root/chunk-p97zwp26.js";
import { HT } from "/$bunfs/root/chunk-n10cystb.js";
import { Xn } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
let p = (e)=>{
    p = Array.isArray;
    return p(e);
};
const O = p;
const SYMBOL_BRAND_PRIVATE_NULLABLE_HEADERS = Symbol.for("brand.privateNullableHeaders");
function* F(e) {
    if (!e) {
        return;
    }
    if (SYMBOL_BRAND_PRIVATE_NULLABLE_HEADERS in e) {
        let { values, nulls } = e;
        yield* values.entries();
        for (let s of nulls){
            yield [
                s,
                null
            ];
        }
        return;
    }
    let o = false;
    let t;
    if (e instanceof Headers) {
        t = e.entries();
    } else if (O(e)) {
        t = e;
    } else {
        o = true;
        t = Object.entries(e ?? {});
    }
    for (let r of t){
        let n = r[0];
        if (typeof n !== "string") {
            throw TypeError("expected header name to be a string");
        }
        let s = O(r[1]) ? r[1] : [
            r[1]
        ];
        let i = false;
        for (let f of s){
            if (f === undefined) {
                continue;
            }
            if (o && !i) {
                i = true;
                yield [
                    n,
                    m
                ];
            }
            yield [
                n,
                f
            ];
        }
    }
}
var m = Symbol("clear");
const G = new Set([
    "x-stainless-helper"
]);
const H = (e, o)=>{
    let t = e ? e.split(",").map((r)=>r.trim()).filter(Boolean) : [];
    for (let r of o.split(",").map((n)=>n.trim())){
        if (r && !t.includes(r)) {
            t.push(r);
        }
    }
    return t.join(", ");
};
const E = (e)=>{
    let values = new Headers;
    let nulls = new Set;
    for (let r of e){
        let n = new Set;
        for (let [s, i] of F(r)){
            let f = s.toLowerCase();
            if (G.has(f)) {
                if (i === m) {
                    continue;
                }
                if (i === null) {
                    values.delete(s);
                    nulls.add(f);
                } else {
                    values.set(s, H(values.get(s), i));
                    nulls.delete(f);
                }
                continue;
            }
            if (i === m || !n.has(f)) {
                values.delete(s);
                n.add(f);
                if (i === m) {
                    continue;
                }
            }
            if (i === null) {
                values.delete(s);
                nulls.add(f);
            } else {
                values.append(s, i);
                nulls.delete(f);
            }
        }
    }
    return {
        [SYMBOL_BRAND_PRIVATE_NULLABLE_HEADERS]: true,
        values,
        nulls
    };
};
const l = (e)=>{
    if (typeof globalThis.process !== "undefined") {
        return globalThis.process.env?.[e]?.trim() || undefined;
    }
    if (typeof globalThis.Deno !== "undefined") {
        return globalThis.Deno.env?.get?.(e)?.trim() || undefined;
    }
};
const A = Se(aFn(), 1);
const c = (e, o, t, r, n)=>{
    if (r === "m") {
        throw TypeError("Private method is not writable");
    }
    if (r === "a" && !n) {
        throw TypeError("Private accessor was defined without a setter");
    }
    if (typeof o === "function" ? e !== o || !n : !o.has(e)) {
        throw TypeError("Cannot write private member to an object whose class did not declare it");
    }
    if (r === "a") {
        n.call(e, t);
    } else if (n) {
        n.value = t;
    } else {
        o.set(e, t);
    }
    return t;
};
const a = (e, o, t, r)=>{
    if (t === "a" && !r) {
        throw TypeError("Private accessor was defined without a getter");
    }
    if (typeof o === "function" ? e !== o || !r : !o.has(e)) {
        throw TypeError("Cannot read private member from an object whose class did not declare it");
    }
    if (t === "m") {
        return r;
    }
    if (t === "a") {
        return r.call(e);
    }
    if (r) {
        return r.value;
    }
    return o.get(e);
};
let C;
let d;
let b;
let g;
let u;
let w;
let v;
const scopes = "https://www.googleapis.com/auth/cloud-platform";
const W = "global";
const L = (e, o, t)=>`https://claude.googleapis.com/v1alpha/projects/${e}/locations/${o}/workspaces/${t}/invoke`;
const D = "Set `project` or the `ANTHROPIC_GOOGLE_CLOUD_PROJECT` environment variable (or provide `baseURL`).";
const z = [
    "apiKey",
    "authToken",
    "credentials",
    "config",
    "profile"
];
export class AnthropicGoogleCloud extends rbe {
    get completions() {
        throw new Xn("The deprecated text Completions API is not available on Claude Platform on Google Cloud");
    }
    set completions(e) {}
    constructor({ baseURL = l("ANTHROPIC_GOOGLE_CLOUD_BASE_URL"), project = l("ANTHROPIC_GOOGLE_CLOUD_PROJECT") ?? l("GOOGLE_CLOUD_PROJECT"), location = l("ANTHROPIC_GOOGLE_CLOUD_LOCATION"), workspaceId = l("ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID"), bearerTokenProvider, googleAuth, authClient, skipAuth = false, ...rest } = {}){
        if (authClient && googleAuth) {
            throw new Xn("The `authClient` and `googleAuth` arguments are mutually exclusive; only one can be passed at a time.");
        }
        if (skipAuth && (bearerTokenProvider || googleAuth || authClient)) {
            throw new Xn("The `skipAuth` option is mutually exclusive with `bearerTokenProvider`, `googleAuth`, and `authClient`; `skipAuth` disables authentication entirely.");
        }
        for (let h of z){
            if (rest[h] != null) {
                throw new Xn(`The \`${h}\` option is not supported by AnthropicGoogleCloud; authentication uses a Google bearer token (\`bearerTokenProvider\`, \`googleAuth\`/\`authClient\`, or Application Default Credentials).`);
            }
        }
        location = location || W;
        if (!workspaceId && !(skipAuth && baseURL)) {
            throw new Xn("No workspace ID found. Set `workspaceId` in the constructor or the `ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID` environment variable.");
        }
        let x = baseURL;
        let k = false;
        if (!x) {
            if (project) {
                x = L(project, location, workspaceId);
            } else if (skipAuth) {
                throw new Xn(`No project was given. ${D}`);
            } else {
                k = true;
            }
        }
        super({
            baseURL: x ?? null,
            ...rest,
            apiKey: null,
            authToken: null,
            ...{
                __auth: {
                    provider: null,
                    tokenCache: null,
                    resolution: null,
                    error: null,
                    extraHeaders: {}
                }
            }
        });
        C.add(this);
        d.set(this, undefined);
        b.set(this, undefined);
        g.set(this, undefined);
        u.set(this, undefined);
        w.set(this, undefined);
        this.project = project ?? null;
        this.location = location ?? null;
        this.workspaceId = workspaceId;
        this.skipAuth = skipAuth;
        c(this, d, bearerTokenProvider, "f");
        c(this, b, googleAuth ?? null, "f");
        c(this, g, authClient ?? null, "f");
        c(this, w, !!baseURL, "f");
        let _;
        if (!skipAuth && !bearerTokenProvider) {
            if (authClient) {
                c(this, u, Promise.resolve(authClient), "f");
            } else {
                _ = googleAuth ?? new A.GoogleAuth({
                    scopes
                });
                c(this, u, _.getClient(), "f");
                a(this, u, "f").catch(()=>{});
            }
        }
        if (!k) {
            this.ready = Promise.resolve();
        } else {
            let h = _ ?? googleAuth ?? new A.GoogleAuth({
                scopes,
                ...authClient ? {
                    authClient
                } : {}
            });
            let P = location;
            let N = workspaceId;
            this.baseURL = "https://unresolved.invalid";
            this.ready = h.getProjectId().then((y)=>{
                this.project = y;
                this.baseURL = L(y, P, N);
            }, (y)=>{
                let j = new Xn(`No project was given and it could not be resolved from Google credentials. ${D}`);
                j.cause = y;
                throw j;
            });
            this.ready.catch(()=>{});
        }
    }
    withOptions(e) {
        return super.withOptions({
            project: this.project ?? undefined,
            location: this.location ?? undefined,
            workspaceId: this.workspaceId,
            bearerTokenProvider: a(this, d, "f"),
            googleAuth: a(this, b, "f") ?? undefined,
            authClient: a(this, g, "f") ?? undefined,
            skipAuth: this.skipAuth,
            baseURL: a(this, w, "f") ? this.baseURL : undefined,
            ...e
        });
    }
    async prepareOptions(e) {
        await super.prepareOptions(e);
        await this.ready;
    }
    async buildRequest(e, o = {}) {
        await this.ready;
        return await super.buildRequest(e, o);
    }
    async authHeaders(e) {
        if (this.skipAuth) {
            return;
        }
        let o = E([
            this._options.defaultHeaders,
            e.headers
        ]);
        if (o.values.get("authorization") || o.nulls.has("authorization")) {
            return;
        }
        let t = await a(this, C, "m", v).call(this);
        return E([
            {
                Authorization: `Bearer ${t}`
            }
        ]);
    }
    validateHeaders() {}
    getUserAgent() {
        return `AnthropicGoogleCloud/JS ${HT}`;
    }
}
d = new WeakMap;
b = new WeakMap;
g = new WeakMap;
u = new WeakMap;
w = new WeakMap;
C = new WeakSet;
v = async function() {
    if (a(this, d, "f")) {
        return await a(this, d, "f").call(this);
    }
    let o = await a(this, u, "f");
    let { token } = await o.getAccessToken();
    if (!token) {
        throw new Xn("Failed to obtain a Google access token from Application Default Credentials.");
    }
    return token;
};
