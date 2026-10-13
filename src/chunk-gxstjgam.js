import { Zx, NPt, Vat } from "/$bunfs/root/chunk-sw8e7v35.js";
import { qxe } from "/$bunfs/root/chunk-55x53sfe.js";
import { C } from "/$bunfs/root/chunk-cj4xndke.js";
const q = C(function(J) {
    const x = (name, aliases)=>{
        let r = [];
        if (name) {
            r.push(name);
        }
        if (aliases) {
            for (let n of aliases){
                r.push(n);
            }
        }
        return r;
    };
    const v = (name, aliases)=>`${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
    const b = ()=>{
        let e = [];
        let t = [];
        let r = false;
        let n = new Set;
        let a = (i)=>i.sort((s, l)=>A[l.step] - A[s.step] || P[l.priority || "normal"] - P[s.priority || "normal"]);
        let o = (i)=>{
            let s = false;
            let l = (h)=>{
                let m = x(h.name, h.aliases);
                if (m.includes(i)) {
                    s = true;
                    for (let c of m){
                        n.delete(c);
                    }
                    return false;
                }
                return true;
            };
            e = e.filter(l);
            t = t.filter(l);
            return s;
        };
        let d = (i)=>{
            let s = false;
            let l = (h)=>{
                if (h.middleware === i) {
                    s = true;
                    for (let m of x(h.name, h.aliases)){
                        n.delete(m);
                    }
                    return false;
                }
                return true;
            };
            e = e.filter(l);
            t = t.filter(l);
            return s;
        };
        let applyToStack = (i)=>{
            e.forEach((s)=>{
                i.add(s.middleware, {
                    ...s
                });
            });
            t.forEach((s)=>{
                i.addRelativeTo(s.middleware, {
                    ...s
                });
            });
            i.identifyOnResolve?.(I.identifyOnResolve());
            return i;
        };
        let g = (i)=>{
            let s = [];
            i.before.forEach((l)=>{
                if (l.before.length === 0 && l.after.length === 0) {
                    s.push(l);
                } else {
                    s.push(...g(l));
                }
            });
            s.push(i);
            i.after.reverse().forEach((l)=>{
                if (l.before.length === 0 && l.after.length === 0) {
                    s.push(l);
                } else {
                    s.push(...g(l));
                }
            });
            return s;
        };
        let w = (i = false)=>{
            let s = [];
            let l = [];
            let h = {};
            e.forEach((c)=>{
                let f = {
                    ...c,
                    before: [],
                    after: []
                };
                for (let p of x(f.name, f.aliases)){
                    h[p] = f;
                }
                s.push(f);
            });
            t.forEach((c)=>{
                let f = {
                    ...c,
                    before: [],
                    after: []
                };
                for (let p of x(f.name, f.aliases)){
                    h[p] = f;
                }
                l.push(f);
            });
            l.forEach((c)=>{
                if (c.toMiddleware) {
                    let f = h[c.toMiddleware];
                    if (f === undefined) {
                        if (i) {
                            return;
                        }
                        throw Error(`${c.toMiddleware} is not found when adding ${v(c.name, c.aliases)} middleware ${c.relation} ${c.toMiddleware}`);
                    }
                    if (c.relation === "after") {
                        f.after.push(c);
                    }
                    if (c.relation === "before") {
                        f.before.push(c);
                    }
                }
            });
            return a(s).map(g).reduce((acc, item)=>{
                acc.push(...item);
                return acc;
            }, []);
        };
        let I = {
            add: (i, s = {})=>{
                let { name, override, aliases } = s;
                let c = {
                    step: "initialize",
                    priority: "normal",
                    middleware: i,
                    ...s
                };
                let f = x(name, aliases);
                if (f.length > 0) {
                    if (f.some((p)=>n.has(p))) {
                        if (!override) {
                            throw Error(`Duplicate middleware name '${v(name, aliases)}'`);
                        }
                        for (let p of f){
                            let S = e.findIndex((M)=>M.name === p || M.aliases?.some((N)=>N === p));
                            if (S === -1) {
                                continue;
                            }
                            let y = e[S];
                            if (y.step !== c.step || c.priority !== y.priority) {
                                throw Error(`"${v(y.name, y.aliases)}" middleware with ${y.priority} priority in ${y.step} step cannot be overridden by "${v(name, aliases)}" middleware with ${c.priority} priority in ${c.step} step.`);
                            }
                            e.splice(S, 1);
                        }
                    }
                    for (let p of f){
                        n.add(p);
                    }
                }
                e.push(c);
            },
            addRelativeTo: (i, s)=>{
                let { name, override, aliases } = s;
                let c = {
                    middleware: i,
                    ...s
                };
                let f = x(name, aliases);
                if (f.length > 0) {
                    if (f.some((p)=>n.has(p))) {
                        if (!override) {
                            throw Error(`Duplicate middleware name '${v(name, aliases)}'`);
                        }
                        for (let p of f){
                            let S = t.findIndex((M)=>M.name === p || M.aliases?.some((N)=>N === p));
                            if (S === -1) {
                                continue;
                            }
                            let y = t[S];
                            if (y.toMiddleware !== c.toMiddleware || y.relation !== c.relation) {
                                throw Error(`"${v(y.name, y.aliases)}" middleware ${y.relation} "${y.toMiddleware}" middleware cannot be overridden by "${v(name, aliases)}" middleware ${c.relation} "${c.toMiddleware}" middleware.`);
                            }
                            t.splice(S, 1);
                        }
                    }
                    for (let p of f){
                        n.add(p);
                    }
                }
                t.push(c);
            },
            clone: ()=>applyToStack(b()),
            use: (i)=>{
                i.applyToStack(I);
            },
            remove: (i)=>{
                if (typeof i === "string") {
                    return o(i);
                } else {
                    return d(i);
                }
            },
            removeByTag: (i)=>{
                let s = false;
                let l = ({ tags, name, aliases })=>{
                    if (tags && tags.includes(i)) {
                        let p = x(name, aliases);
                        for (let S of p){
                            n.delete(S);
                        }
                        s = true;
                        return false;
                    }
                    return true;
                };
                e = e.filter(l);
                t = t.filter(l);
                return s;
            },
            concat: (i)=>{
                let s = applyToStack(b());
                s.use(i);
                s.identifyOnResolve(r || s.identifyOnResolve() || (i.identifyOnResolve?.() ?? false));
                return s;
            },
            applyToStack,
            identify: ()=>w(true).map((i)=>{
                    let s = i.step ?? `${i.relation} ${i.toMiddleware}`;
                    return `${v(i.name, i.aliases)} - ${s}`;
                }),
            identifyOnResolve (i) {
                if (typeof i === "boolean") {
                    r = i;
                }
                return r;
            },
            resolve: (i, s)=>{
                for (let l of w().map((h)=>h.middleware).reverse()){
                    i = l(i, s);
                }
                if (r) {
                    console.log(I.identify());
                }
                return i;
            }
        };
        return I;
    };
    var A = {
        initialize: 5,
        serialize: 4,
        build: 3,
        finalizeRequest: 2,
        deserialize: 1
    };
    var P = {
        high: 3,
        normal: 2,
        low: 1
    };
    J.constructStack = b;
});
export const Rd = C(function(E) {
    const V = q();
    const T = Vat();
    const O = qxe();
    const K = Zx();
    const D = NPt();
    class j {
        config;
        middlewareStack = V.constructStack();
        initConfig;
        handlers;
        constructor(e){
            this.config = e;
        }
        send(e, t, r) {
            let n = typeof t !== "function" ? t : undefined;
            let a = typeof t === "function" ? t : r;
            let o = n === undefined && this.config.cacheMiddleware === true;
            let d;
            if (o) {
                if (!this.handlers) {
                    this.handlers = new WeakMap;
                }
                let u = this.handlers;
                if (u.has(e.constructor)) {
                    d = u.get(e.constructor);
                } else {
                    d = e.resolveMiddleware(this.middlewareStack, this.config, n);
                    u.set(e.constructor, d);
                }
            } else {
                delete this.handlers;
                d = e.resolveMiddleware(this.middlewareStack, this.config, n);
            }
            if (a) {
                d(e).then((u)=>a(null, u.output), (u)=>a(u)).catch(()=>{});
            } else {
                return d(e).then((u)=>u.output);
            }
        }
        destroy() {
            this.config?.requestHandler?.destroy?.();
            delete this.handlers;
        }
    }
    const z = "***SensitiveInformation***";
    function R(e, t) {
        if (t == null) {
            return t;
        }
        let r = K.NormalizedSchema.of(e);
        if (r.getMergedTraits().sensitive) {
            return z;
        }
        if (r.isListSchema()) {
            if (r.getValueSchema().getMergedTraits().sensitive) {
                return z;
            }
        } else if (r.isMapSchema()) {
            if (!!r.getKeySchema().getMergedTraits().sensitive || !!r.getValueSchema().getMergedTraits().sensitive) {
                return z;
            }
        } else if (r.isStructSchema() && typeof t === "object") {
            let n = t;
            let a = {};
            for (let [o, d] of r.structIterator()){
                if (n[o] != null) {
                    a[o] = R(d, n[o]);
                }
            }
            return a;
        }
        return t;
    }
    class F {
        middlewareStack = V.constructStack();
        schema;
        static classBuilder() {
            return new W;
        }
        resolveMiddlewareWithContext(e, t, r, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
            for (let m of middlewareFn.bind(this)(CommandCtor, e, t, r)){
                this.middlewareStack.use(m);
            }
            let i = e.concat(this.middlewareStack);
            let { logger } = t;
            let l = {
                logger,
                clientName,
                commandName,
                inputFilterSensitiveLog,
                outputFilterSensitiveLog,
                [O.SMITHY_CONTEXT_KEY]: {
                    commandInstance: this,
                    ...smithyContext
                },
                ...additionalContext
            };
            let { requestHandler } = t;
            return i.resolve((m)=>requestHandler.handle(m.request, r || {}), l);
        }
    }
    class W {
        _init = ()=>{};
        _ep = {};
        _middlewareFn = ()=>[];
        _commandName = "";
        _clientName = "";
        _additionalContext = {};
        _smithyContext = {};
        _inputFilterSensitiveLog = undefined;
        _outputFilterSensitiveLog = undefined;
        _serializer = null;
        _deserializer = null;
        _operationSchema;
        init(e) {
            this._init = e;
        }
        ep(e) {
            this._ep = e;
            return this;
        }
        m(e) {
            this._middlewareFn = e;
            return this;
        }
        s(service, operation, r = {}) {
            this._smithyContext = {
                service,
                operation,
                ...r
            };
            return this;
        }
        c(e = {}) {
            this._additionalContext = e;
            return this;
        }
        n(e, t) {
            this._clientName = e;
            this._commandName = t;
            return this;
        }
        f(e = (r)=>r, t = (r)=>r) {
            this._inputFilterSensitiveLog = e;
            this._outputFilterSensitiveLog = t;
            return this;
        }
        ser(e) {
            this._serializer = e;
            return this;
        }
        de(e) {
            this._deserializer = e;
            return this;
        }
        sc(e) {
            this._operationSchema = e;
            this._smithyContext.operationSchema = e;
            return this;
        }
        build() {
            let e = this;
            let CommandCtor;
            return CommandCtor = class extends F {
                input;
                static getEndpointParameterInstructions() {
                    return e._ep;
                }
                constructor(...[r]){
                    super();
                    this.input = r ?? {};
                    e._init(this);
                    this.schema = e._operationSchema;
                }
                resolveMiddleware(r, n, a) {
                    let e__operationSchema = e._operationSchema;
                    let d = e__operationSchema?.[4] ?? e__operationSchema?.input;
                    let u = e__operationSchema?.[5] ?? e__operationSchema?.output;
                    return this.resolveMiddlewareWithContext(r, n, a, {
                        CommandCtor,
                        middlewareFn: e._middlewareFn,
                        clientName: e._clientName,
                        commandName: e._commandName,
                        inputFilterSensitiveLog: e._inputFilterSensitiveLog ?? (e__operationSchema ? R.bind(null, d) : (g)=>g),
                        outputFilterSensitiveLog: e._outputFilterSensitiveLog ?? (e__operationSchema ? R.bind(null, u) : (g)=>g),
                        smithyContext: e._smithyContext,
                        additionalContext: e._additionalContext
                    });
                }
                serialize = e._serializer;
                deserialize = e._deserializer;
            };
        }
    }
    const ee = "***SensitiveInformation***";
    const te = (e, t)=>{
        for (let r of Object.keys(e)){
            let n = e[r];
            let a = async function(d, u, g) {
                let w = new n(d);
                if (typeof u === "function") {
                    this.send(w, u);
                } else if (typeof g === "function") {
                    if (typeof u !== "object") {
                        throw Error(`Expected http options but got ${typeof u}`);
                    }
                    this.send(w, u || {}, g);
                } else {
                    return this.send(w, u);
                }
            };
            let o = (r[0].toLowerCase() + r.slice(1)).replace(/Command$/, "");
            t.prototype[o] = a;
        }
    };
    class _ extends Error {
        $fault;
        $response;
        $retryable;
        $metadata;
        constructor(e){
            super(e.message);
            Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
            this.name = e.name;
            this.$fault = e.$fault;
            this.$metadata = e.$metadata;
        }
        static isInstance(e) {
            if (!e) {
                return false;
            }
            let t = e;
            return _.prototype.isPrototypeOf(t) || Boolean(t.$fault) && Boolean(t.$metadata) && (t.$fault === "client" || t.$fault === "server");
        }
        static [Symbol.hasInstance](e) {
            if (!e) {
                return false;
            }
            let t = e;
            if (this === _) {
                return _.isInstance(e);
            }
            if (_.isInstance(e)) {
                if (t.name && this.name) {
                    return this.prototype.isPrototypeOf(e) || t.name === this.name;
                }
                return this.prototype.isPrototypeOf(e);
            }
            return false;
        }
    }
    const B = (e, t = {})=>{
        Object.entries(t).filter(([, n])=>n !== undefined).forEach(([n, a])=>{
            if (e[n] == null || e[n] === "") {
                e[n] = a;
            }
        });
        let r = e.message || e.Message || "UnknownError";
        e.message = r;
        delete e.Message;
        return e;
    };
    const H = ({ output, parsedBody, exceptionCtor, errorCode })=>{
        let a = ne(output);
        let o = a.httpStatusCode ? `${a.httpStatusCode}` : undefined;
        let d = new exceptionCtor({
            name: parsedBody?.code || parsedBody?.Code || errorCode || o || "UnknownError",
            $fault: "client",
            $metadata: a
        });
        throw B(d, parsedBody);
    };
    const re = (exceptionCtor)=>({ output, parsedBody, errorCode })=>{
            H({
                output,
                parsedBody,
                exceptionCtor,
                errorCode
            });
        };
    var ne = (output)=>({
            httpStatusCode: output.statusCode,
            requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
            extendedRequestId: output.headers["x-amz-id-2"],
            cfId: output.headers["x-amz-cf-id"]
        });
    const ie = (e)=>{
        switch(e){
            case "standard":
                return {
                    retryMode: "standard",
                    connectionTimeout: 3100
                };
            case "in-region":
                return {
                    retryMode: "standard",
                    connectionTimeout: 1100
                };
            case "cross-region":
                return {
                    retryMode: "standard",
                    connectionTimeout: 3100
                };
            case "mobile":
                return {
                    retryMode: "standard",
                    connectionTimeout: 30000
                };
            default:
                return {};
        }
    };
    let L = false;
    const se = (e)=>{
        if (e && !L && parseInt(e.substring(1, e.indexOf("."))) < 16) {
            L = true;
        }
    };
    const oe = (e)=>{
        let t = [];
        for(let r in O.AlgorithmId){
            let n = O.AlgorithmId[r];
            if (e[n] === undefined) {
                continue;
            }
            t.push({
                algorithmId: ()=>n,
                checksumConstructor: ()=>e[n]
            });
        }
        return {
            addChecksumAlgorithm (r) {
                t.push(r);
            },
            checksumAlgorithms () {
                return t;
            }
        };
    };
    const ae = (e)=>{
        let t = {};
        e.checksumAlgorithms().forEach((r)=>{
            t[r.algorithmId()] = r.checksumConstructor();
        });
        return t;
    };
    const le = (e)=>({
            setRetryStrategy (t) {
                e.retryStrategy = t;
            },
            retryStrategy () {
                return e.retryStrategy;
            }
        });
    const ce = (e)=>{
        let t = {};
        t.retryStrategy = e.retryStrategy();
        return t;
    };
    const U = (e)=>Object.assign(oe(e), le(e));
    const de = U;
    const ue = (e)=>Object.assign(ae(e), ce(e));
    const fe = (e)=>{
        if (Array.isArray(e)) {
            return e;
        }
        return [
            e
        ];
    };
    const G = (e)=>{
        for(let r in e){
            if (e.hasOwnProperty(r) && e[r]["#text"] !== undefined) {
                e[r] = e[r]["#text"];
            } else if (typeof e[r] === "object" && e[r] !== null) {
                e[r] = G(e[r]);
            }
        }
        return e;
    };
    const he = (e)=>e != null;
    class Y {
        trace() {}
        debug() {}
        info() {}
        warn() {}
        error() {}
    }
    function Z(e, t, r) {
        let n;
        let a;
        let o;
        if (typeof t === "undefined" && typeof r === "undefined") {
            n = {};
            o = e;
        } else {
            n = e;
            if (typeof t === "function") {
                a = t;
                o = r;
                return ge(n, a, o);
            } else {
                o = t;
            }
        }
        for (let d of Object.keys(o)){
            if (!Array.isArray(o[d])) {
                n[d] = o[d];
                continue;
            }
            X(n, null, o, d);
        }
        return n;
    }
    const me = (e)=>{
        let t = {};
        for (let [r, n] of Object.entries(e || {})){
            t[r] = [
                ,
                n
            ];
        }
        return t;
    };
    const pe = (e, t)=>{
        let r = {};
        for(let n in t){
            X(r, e, t, n);
        }
        return r;
    };
    var ge = (e, t, r)=>Z(e, Object.entries(r).reduce((acc, [a, o])=>{
            if (Array.isArray(o)) {
                acc[a] = o;
            } else if (typeof o === "function") {
                acc[a] = [
                    t,
                    o()
                ];
            } else {
                acc[a] = [
                    t,
                    o
                ];
            }
            return acc;
        }, {}));
    var X = (e, t, r, n)=>{
        if (t !== null) {
            let d = r[n];
            if (typeof d === "function") {
                d = [
                    ,
                    d
                ];
            }
            let [u = ye, g = we, w = n] = d;
            if (typeof u === "function" && u(t[w]) || typeof u !== "function" && !!u) {
                e[n] = g(t[w]);
            }
            return;
        }
        let [a, o] = r[n];
        if (typeof o === "function") {
            let d;
            let u = a === undefined && (d = o()) != null;
            let g = typeof a === "function" && !!a(undefined) || typeof a !== "function" && !!a;
            if (u) {
                e[n] = d;
            } else if (g) {
                e[n] = o();
            }
        } else {
            let d = a === undefined && o != null;
            let u = typeof a === "function" && !!a(o) || typeof a !== "function" && !!a;
            if (d || u) {
                e[n] = o;
            }
        }
    };
    var ye = (e)=>e != null;
    var we = (e)=>e;
    const Se = (e)=>{
        if (e !== e) {
            return "NaN";
        }
        switch(e){
            case Infinity:
                return "Infinity";
            case -Infinity:
                return "-Infinity";
            default:
                return e;
        }
    };
    const ve = (e)=>e.toISOString().replace(".000Z", "Z");
    const k = (e)=>{
        if (e == null) {
            return {};
        }
        if (Array.isArray(e)) {
            return e.filter((t)=>t != null).map(k);
        }
        if (typeof e === "object") {
            let t = {};
            for (let r of Object.keys(e)){
                if (e[r] == null) {
                    continue;
                }
                t[r] = k(e[r]);
            }
            return t;
        }
        return e;
    };
    Object.defineProperty(E, "collectBody", {
        enumerable: true,
        get: function() {
            return T.collectBody;
        }
    });
    Object.defineProperty(E, "extendedEncodeURIComponent", {
        enumerable: true,
        get: function() {
            return T.extendedEncodeURIComponent;
        }
    });
    Object.defineProperty(E, "resolvedPath", {
        enumerable: true,
        get: function() {
            return T.resolvedPath;
        }
    });
    E.Client = j;
    E.Command = F;
    E.NoOpLogger = Y;
    E.SENSITIVE_STRING = ee;
    E.ServiceException = _;
    E._json = k;
    E.convertMap = me;
    E.createAggregatedClient = te;
    E.decorateServiceException = B;
    E.emitWarningIfUnsupportedVersion = se;
    E.getArrayIfSingleItem = fe;
    E.getDefaultClientConfiguration = de;
    E.getDefaultExtensionConfiguration = U;
    E.getValueFromTextNode = G;
    E.isSerializableHeaderValue = he;
    E.loadConfigsForDefaultMode = ie;
    E.map = Z;
    E.resolveDefaultRuntimeConfig = ue;
    E.serializeDateTime = ve;
    E.serializeFloat = Se;
    E.take = pe;
    E.throwDefaultError = H;
    E.withBaseException = re;
    Object.keys(D).forEach((e)=>{
        if (e !== "default" && !Object.prototype.hasOwnProperty.call(E, e)) {
            Object.defineProperty(E, e, {
                enumerable: true,
                get: function() {
                    return D[e];
                }
            });
        }
    });
});
