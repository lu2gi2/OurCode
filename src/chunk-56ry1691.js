import { qQ, KQ, rbe } from "/$bunfs/root/chunk-gr4a0fky.js";
import { HT } from "/$bunfs/root/chunk-n10cystb.js";
import { Xn } from "/$bunfs/root/chunk-m1rt7wpr.js";
let c = (e)=>{
    c = Array.isArray;
    return c(e);
};
const l = c;
const SYMBOL_BRAND_PRIVATE_NULLABLE_HEADERS = Symbol.for("brand.privateNullableHeaders");
function* h(e) {
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
    let n;
    if (e instanceof Headers) {
        n = e.entries();
    } else if (l(e)) {
        n = e;
    } else {
        t = true;
        n = Object.entries(e ?? {});
    }
    for (let r of n){
        let o = r[0];
        if (typeof o !== "string") {
            throw TypeError("expected header name to be a string");
        }
        let i = l(r[1]) ? r[1] : [
            r[1]
        ];
        let f = false;
        for (let s of i){
            if (s === undefined) {
                continue;
            }
            if (t && !f) {
                f = true;
                yield [
                    o,
                    a
                ];
            }
            yield [
                o,
                s
            ];
        }
    }
}
var a = Symbol("clear");
const b = new Set([
    "x-stainless-helper"
]);
const x = (e, t)=>{
    let n = e ? e.split(",").map((r)=>r.trim()).filter(Boolean) : [];
    for (let r of t.split(",").map((o)=>o.trim())){
        if (r && !n.includes(r)) {
            n.push(r);
        }
    }
    return n.join(", ");
};
const p = (e)=>{
    let values = new Headers;
    let nulls = new Set;
    for (let r of e){
        let o = new Set;
        for (let [i, f] of h(r)){
            let s = i.toLowerCase();
            if (b.has(s)) {
                if (f === a) {
                    continue;
                }
                if (f === null) {
                    values.delete(i);
                    nulls.add(s);
                } else {
                    values.set(i, x(values.get(i), f));
                    nulls.delete(s);
                }
                continue;
            }
            if (f === a || !o.has(s)) {
                values.delete(i);
                o.add(s);
                if (f === a) {
                    continue;
                }
            }
            if (f === null) {
                values.delete(i);
                nulls.add(s);
            } else {
                values.append(i, f);
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
const u = (e)=>{
    if (typeof globalThis.process !== "undefined") {
        return globalThis.process.env?.[e]?.trim() || undefined;
    }
    if (typeof globalThis.Deno !== "undefined") {
        return globalThis.Deno.env?.get?.(e)?.trim() || undefined;
    }
};
export class AnthropicFoundry extends rbe {
    constructor({ baseURL = u("ANTHROPIC_FOUNDRY_BASE_URL"), apiKey = u("ANTHROPIC_FOUNDRY_API_KEY"), resource = u("ANTHROPIC_FOUNDRY_RESOURCE"), azureADTokenProvider, dangerouslyAllowBrowser, ...rest } = {}){
        if (typeof azureADTokenProvider === "function") {
            dangerouslyAllowBrowser = true;
        }
        if (!azureADTokenProvider && !apiKey) {
            throw new Xn("Missing credentials. Please pass one of `apiKey` and `azureTokenProvider`, or set the `ANTHROPIC_FOUNDRY_API_KEY` environment variable.");
        }
        if (azureADTokenProvider && apiKey) {
            throw new Xn("The `apiKey` and `azureADTokenProvider` arguments are mutually exclusive; only one can be passed at a time.");
        }
        if (!baseURL) {
            if (!resource) {
                throw new Xn("Must provide one of the `baseURL` or `resource` arguments, or the `ANTHROPIC_FOUNDRY_RESOURCE` environment variable");
            }
            baseURL = `https://${resource}.services.ai.azure.com/anthropic/`;
        } else if (resource) {
            throw new Xn("baseURL and resource are mutually exclusive");
        }
        super({
            apiKey: azureADTokenProvider ?? apiKey,
            baseURL,
            ...rest,
            ...dangerouslyAllowBrowser !== undefined ? {
                dangerouslyAllowBrowser
            } : {}
        });
        this.resource = null;
        this.messages = w(this);
        this.beta = E(this);
        this.models = undefined;
    }
    async authHeaders() {
        if (typeof this._options.apiKey === "function") {
            let e;
            try {
                e = await this._options.apiKey();
            } catch (cause) {
                if (cause instanceof Xn) {
                    throw cause;
                }
                throw new Xn(`Failed to get token from azureADTokenProvider: ${cause.message}`, {
                    cause
                });
            }
            if (typeof e !== "string" || !e) {
                throw new Xn(`Expected azureADTokenProvider function argument to return a string but it returned ${e}`);
            }
            return p([
                {
                    Authorization: `Bearer ${e}`
                }
            ]);
        }
        if (typeof this._options.apiKey === "string") {
            return p([
                {
                    "x-api-key": this.apiKey
                }
            ]);
        }
    }
    validateHeaders() {}
    getUserAgent() {
        return `AnthropicFoundry/JS ${HT}`;
    }
}
function w(e) {
    let t = new KQ(e);
    delete t.batches;
    return t;
}
function E(e) {
    let t = new qQ(e);
    delete t.messages.batches;
    return t;
}
