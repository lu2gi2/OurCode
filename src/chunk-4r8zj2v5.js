import { Vat } from "/$bunfs/root/chunk-sw8e7v35.js";
import { eP } from "/$bunfs/root/chunk-53tyrfzz.js";
import { qxe, jm } from "/$bunfs/root/chunk-55x53sfe.js";
import { C } from "/$bunfs/root/chunk-cj4xndke.js";
const Lmo = C(function(B) {
    const N = jm();
    const g = (e, r)=>(t, i)=>async (n)=>{
                let { response } = await t(n);
                try {
                    let output = await r(response, e);
                    return {
                        response,
                        output
                    };
                } catch (error) {
                    Object.defineProperty(error, "$response", {
                        value: response,
                        enumerable: false,
                        writable: false,
                        configurable: false
                    });
                    if (!("$metadata" in error)) {
                        try {
                            error.message += `
  Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
                        } catch (d) {
                            if (!i.logger || i.logger?.constructor?.name === "NoOpLogger") {
                                console.warn("Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.");
                            } else {
                                i.logger?.warn?.("Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.");
                            }
                        }
                        if (typeof error.$responseBodyText !== "undefined") {
                            if (error.$response) {
                                error.$response.body = error.$responseBodyText;
                            }
                        }
                        try {
                            if (N.HttpResponse.isInstance(response)) {
                                let { headers = {} } = response;
                                let a = Object.entries(headers);
                                error.$metadata = {
                                    httpStatusCode: response.statusCode,
                                    requestId: m(/^x-[\w-]+-request-?id$/, a),
                                    extendedRequestId: m(/^x-[\w-]+-id-2$/, a),
                                    cfId: m(/^x-[\w-]+-cf-id$/, a)
                                };
                            }
                        } catch (d) {}
                    }
                    throw error;
                }
            };
    var m = (e, r)=>(r.find(([t])=>t.match(e)) || [
            undefined,
            undefined
        ])[1];
    const S = (e, r)=>(t, i)=>async (n)=>{
                let o = e;
                let endpoint = i.endpointV2?.url && o.urlParser ? async ()=>o.urlParser(i.endpointV2.url) : o.endpoint;
                if (!endpoint) {
                    throw Error("No valid endpoint provider available.");
                }
                let request = await r(n.input, {
                    ...e,
                    endpoint
                });
                return t({
                    ...n,
                    request
                });
            };
    const A = {
        name: "deserializerMiddleware",
        step: "deserialize",
        tags: [
            "DESERIALIZER"
        ],
        override: true
    };
    const v = {
        name: "serializerMiddleware",
        step: "serialize",
        tags: [
            "SERIALIZER"
        ],
        override: true
    };
    function j(e, r, t) {
        return {
            applyToStack: (i)=>{
                i.add(g(e, t), A);
                i.add(S(e, r), v);
            }
        };
    }
    B.deserializerMiddleware = g;
    B.deserializerMiddlewareOption = A;
    B.getSerdePlugin = j;
    B.serializerMiddleware = S;
    B.serializerMiddlewareOption = v;
});
const xb = C(function(z) {
    const f = qxe();
    const x = eP();
    const U = Lmo();
    const w = jm();
    const V = Vat();
    const G = (e)=>e[f.SMITHY_CONTEXT_KEY] || (e[f.SMITHY_CONTEXT_KEY] = {});
    const Z = (e, r)=>{
        if (!r || r.length === 0) {
            return e;
        }
        let t = [];
        for (let i of r){
            for (let n of e){
                if (n.schemeId.split("#")[1] === i) {
                    t.push(n);
                }
            }
        }
        for (let i of e){
            if (!t.find(({ schemeId })=>schemeId === i.schemeId)) {
                t.push(i);
            }
        }
        return t;
    };
    function Q(httpAuthSchemes) {
        let r = new Map;
        for (let t of httpAuthSchemes){
            r.set(t.schemeId, t);
        }
        return r;
    }
    const y = (e, r)=>(t, i)=>async (n)=>{
                let o = e.httpAuthSchemeProvider(await r.httpAuthSchemeParametersProvider(e, i, n.input));
                let s = e.authSchemePreference ? await e.authSchemePreference() : [];
                let c = Z(o, s);
                let d = Q(e.httpAuthSchemes);
                let a = x.getSmithyContext(i);
                let p = [];
                for (let httpAuthOption of c){
                    let h = d.get(httpAuthOption.schemeId);
                    if (!h) {
                        p.push(`HttpAuthScheme \`${httpAuthOption.schemeId}\` was not enabled for this service.`);
                        continue;
                    }
                    let l = h.identityProvider(await r.identityProviderConfigProvider(e));
                    if (!l) {
                        p.push(`HttpAuthScheme \`${httpAuthOption.schemeId}\` did not have an IdentityProvider configured.`);
                        continue;
                    }
                    let { identityProperties = {}, signingProperties = {} } = httpAuthOption.propertiesExtractor?.(e, i) || {};
                    httpAuthOption.identityProperties = Object.assign(httpAuthOption.identityProperties || {}, identityProperties);
                    httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, signingProperties);
                    a.selectedHttpAuthScheme = {
                        httpAuthOption,
                        identity: await l(httpAuthOption.identityProperties),
                        signer: h.signer
                    };
                    break;
                }
                if (!a.selectedHttpAuthScheme) {
                    throw Error(p.join(`
`));
                }
                return t(n);
            };
    const M = {
        step: "serialize",
        tags: [
            "HTTP_AUTH_SCHEME"
        ],
        name: "httpAuthSchemeMiddleware",
        override: true,
        relation: "before",
        toMiddleware: "endpointV2Middleware"
    };
    const J = (e, { httpAuthSchemeParametersProvider, identityProviderConfigProvider })=>({
            applyToStack: (i)=>{
                i.addRelativeTo(y(e, {
                    httpAuthSchemeParametersProvider,
                    identityProviderConfigProvider
                }), M);
            }
        });
    const P = {
        step: "serialize",
        tags: [
            "HTTP_AUTH_SCHEME"
        ],
        name: "httpAuthSchemeMiddleware",
        override: true,
        relation: "before",
        toMiddleware: U.serializerMiddlewareOption.name
    };
    const W = (e, { httpAuthSchemeParametersProvider, identityProviderConfigProvider })=>({
            applyToStack: (i)=>{
                i.addRelativeTo(y(e, {
                    httpAuthSchemeParametersProvider,
                    identityProviderConfigProvider
                }), P);
            }
        });
    const ee = (e)=>(r)=>{
            throw r;
        };
    const te = (e, r)=>{};
    const E = (e)=>(r, t)=>async (i)=>{
                if (!w.HttpRequest.isInstance(i.request)) {
                    return r(i);
                }
                let selectedHttpAuthScheme = x.getSmithyContext(t).selectedHttpAuthScheme;
                if (!selectedHttpAuthScheme) {
                    throw Error("No HttpAuthScheme was selected: unable to sign request");
                }
                let { httpAuthOption: { signingProperties = {} }, identity, signer } = selectedHttpAuthScheme;
                let a = await r({
                    ...i,
                    request: await signer.sign(i.request, identity, signingProperties)
                }).catch((signer.errorHandler || ee)(signingProperties));
                (signer.successHandler || te)(a.response, signingProperties);
                return a;
            };
    const H = {
        step: "finalizeRequest",
        tags: [
            "HTTP_SIGNING"
        ],
        name: "httpSigningMiddleware",
        aliases: [
            "apiKeyMiddleware",
            "tokenMiddleware",
            "awsAuthMiddleware"
        ],
        override: true,
        relation: "after",
        toMiddleware: "retryMiddleware"
    };
    const re = (e)=>({
            applyToStack: (r)=>{
                r.addRelativeTo(E(), H);
            }
        });
    const ie = (e)=>{
        if (typeof e === "function") {
            return e;
        }
        let r = Promise.resolve(e);
        return ()=>r;
    };
    const ne = async (e, client, t, i = (o)=>o, ...n)=>{
        let o = new e(t);
        o = i(o) ?? o;
        return await client.send(o, ...n);
    };
    function se(e, r, t, i, n) {
        return async function*(s, c, ...d) {
            let a = c;
            let p = s.startingToken ?? a[t];
            let u = true;
            let h;
            while(u){
                a[t] = p;
                if (n) {
                    a[n] = a[n] ?? s.pageSize;
                }
                if (s.client instanceof e) {
                    h = await ne(r, s.client, c, s.withCommand, ...d);
                } else {
                    throw Error(`Invalid client, expected instance of ${e.name}`);
                }
                yield h;
                let l = p;
                p = oe(h, i);
                u = !!(p && (!s.stopOnSameToken || p !== l));
            }
        };
    }
    var oe = (e, r)=>{
        let t = e;
        let i = r.split(".");
        for (let n of i){
            if (!t || typeof t !== "object") {
                return;
            }
            t = t[n];
        }
        return t;
    };
    function ae(e, r, t) {
        if (!e.__smithy_context) {
            e.__smithy_context = {
                features: {}
            };
        } else if (!e.__smithy_context.features) {
            e.__smithy_context.features = {};
        }
        e.__smithy_context.features[r] = t;
    }
    class I {
        authSchemes = new Map;
        constructor(e){
            for (let [r, t] of Object.entries(e)){
                if (t !== undefined) {
                    this.authSchemes.set(r, t);
                }
            }
        }
        getIdentityProvider(e) {
            return this.authSchemes.get(e);
        }
    }
    class q {
        async sign(e, r, t) {
            if (!t) {
                throw Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
            }
            if (!t.name) {
                throw Error("request could not be signed with `apiKey` since the `name` signer property is missing");
            }
            if (!t.in) {
                throw Error("request could not be signed with `apiKey` since the `in` signer property is missing");
            }
            if (!r.apiKey) {
                throw Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
            }
            let i = w.HttpRequest.clone(e);
            if (t.in === f.HttpApiKeyAuthLocation.QUERY) {
                i.query[t.name] = r.apiKey;
            } else if (t.in === f.HttpApiKeyAuthLocation.HEADER) {
                i.headers[t.name] = t.scheme ? `${t.scheme} ${r.apiKey}` : r.apiKey;
            } else {
                throw Error(`request can only be signed with \`apiKey\` locations \`query\` or \`header\`, but found: \`${t.in}\``);
            }
            return i;
        }
    }
    class R {
        async sign(e, r, t) {
            let i = w.HttpRequest.clone(e);
            if (!r.token) {
                throw Error("request could not be signed with `token` since the `token` is not defined");
            }
            i.headers.Authorization = `Bearer ${r.token}`;
            return i;
        }
    }
    class O {
        async sign(e, r, t) {
            return e;
        }
    }
    const _ = (e)=>function(t) {
            return b(t) && t.expiration.getTime() - Date.now() < e;
        };
    const T = 300000;
    const de = _(T);
    var b = (e)=>e.expiration !== undefined;
    const ce = (e, r, t)=>{
        if (e === undefined) {
            return;
        }
        let i = typeof e !== "function" ? async ()=>Promise.resolve(e) : e;
        let n;
        let o;
        let s;
        let c = false;
        let d = async (a)=>{
            if (!o) {
                o = i(a);
            }
            try {
                n = await o;
                s = true;
                c = false;
            } finally{
                o = undefined;
            }
            return n;
        };
        if (r === undefined) {
            return async (a)=>{
                if (!s || a?.forceRefresh) {
                    n = await d(a);
                }
                return n;
            };
        }
        return async (a)=>{
            if (!s || a?.forceRefresh) {
                n = await d(a);
            }
            if (c) {
                return n;
            }
            if (!t(n)) {
                c = true;
                return n;
            }
            if (r(n)) {
                await d(a);
                return n;
            }
            return n;
        };
    };
    Object.defineProperty(z, "requestBuilder", {
        enumerable: true,
        get: function() {
            return V.requestBuilder;
        }
    });
    z.DefaultIdentityProviderConfig = I;
    z.EXPIRATION_MS = T;
    z.HttpApiKeyAuthSigner = q;
    z.HttpBearerAuthSigner = R;
    z.NoAuthSigner = O;
    z.createIsIdentityExpiredFunction = _;
    z.createPaginator = se;
    z.doesIdentityRequireRefresh = b;
    z.getHttpAuthSchemeEndpointRuleSetPlugin = J;
    z.getHttpAuthSchemePlugin = W;
    z.getHttpSigningPlugin = re;
    z.getSmithyContext = G;
    z.httpAuthSchemeEndpointRuleSetMiddlewareOptions = M;
    z.httpAuthSchemeMiddleware = y;
    z.httpAuthSchemeMiddlewareOptions = P;
    z.httpSigningMiddleware = E;
    z.httpSigningMiddlewareOptions = H;
    z.isIdentityExpired = de;
    z.memoizeIdentityProvider = ce;
    z.normalizeProvider = ie;
    z.setFeature = ae;
});
export { Lmo, xb };
