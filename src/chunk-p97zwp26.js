import { kmo, RPt } from "/$bunfs/root/chunk-wxcp89vn.js";
import { Se, C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const Sr = C(function(xd, qs) {
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const toString = Object.prototype.toString;
    const { defineProperty, getOwnPropertyDescriptor } = Object;
    const Ps = (t)=>{
        if (typeof Array.isArray === "function") {
            return Array.isArray(t);
        }
        return toString.call(t) === "[object Array]";
    };
    const Is = (t)=>{
        if (!t || toString.call(t) !== "[object Object]") {
            return false;
        }
        const r = hasOwnProperty.call(t, "constructor");
        const s = t.constructor && t.constructor.prototype && hasOwnProperty.call(t.constructor.prototype, "isPrototypeOf");
        if (t.constructor && !r && !s) {
            return false;
        }
        let n;
        for(n in t);
        return typeof n === "undefined" || hasOwnProperty.call(t, n);
    };
    const Us = (t, r)=>{
        if (defineProperty && r.name === "__proto__") {
            defineProperty(t, r.name, {
                enumerable: true,
                configurable: true,
                value: r.newValue,
                writable: true
            });
        } else {
            t[r.name] = r.newValue;
        }
    };
    const js = (t, r)=>{
        if (r === "__proto__") {
            if (!hasOwnProperty.call(t, r)) {
                return;
            } else if (getOwnPropertyDescriptor) {
                return getOwnPropertyDescriptor(t, r).value;
            }
        }
        return t[r];
    };
    qs.exports = function e(g) {
        let t;
        let r;
        let s;
        let newValue;
        let a;
        let h;
        let E = 1;
        const arguments_length = arguments.length;
        let T = false;
        if (typeof g === "boolean") {
            T = g;
            g = arguments[1] || {};
            E = 2;
        }
        if (g == null || typeof g !== "object" && typeof g !== "function") {
            g = {};
        }
        for(; E < arguments_length; ++E){
            t = arguments[E];
            if (t != null) {
                for(r in t){
                    s = js(g, r);
                    newValue = js(t, r);
                    if (g !== newValue) {
                        if (T && newValue && (Is(newValue) || (a = Ps(newValue)))) {
                            if (a) {
                                a = false;
                                h = s && Ps(s) ? s : [];
                            } else {
                                h = s && Is(s) ? s : {};
                            }
                            Us(g, {
                                name: r,
                                newValue: e(T, h, newValue)
                            });
                        } else if (typeof newValue !== "undefined") {
                            Us(g, {
                                name: r,
                                newValue
                            });
                        }
                    }
                }
            }
        }
        return g;
    };
});
const Fs = C(function(bd, kc) {
    kc.exports = {
        name: "gaxios",
        version: "7.1.4",
        description: "A simple common HTTP client specifically for Google APIs and services.",
        main: "build/cjs/src/index.js",
        types: "build/cjs/src/index.d.ts",
        files: [
            "build/"
        ],
        exports: {
            ".": {
                import: {
                    types: "./build/esm/src/index.d.ts",
                    default: "./build/esm/src/index.js"
                },
                require: {
                    types: "./build/cjs/src/index.d.ts",
                    default: "./build/cjs/src/index.js"
                }
            }
        },
        scripts: {
            lint: "gts check --no-inline-config",
            test: "c8 mocha build/esm/test",
            "presystem-test": "npm run compile",
            "system-test": "mocha build/esm/system-test --timeout 80000",
            compile: "tsc -b ./tsconfig.json ./tsconfig.cjs.json && node utils/enable-esm.mjs",
            fix: "gts fix",
            prepare: "npm run compile",
            pretest: "npm run compile",
            webpack: "webpack",
            "prebrowser-test": "npm run compile",
            "browser-test": "node build/browser-test/browser-test-runner.js",
            docs: "jsdoc -c .jsdoc.js",
            "docs-test": "linkinator docs",
            "predocs-test": "npm run docs",
            "samples-test": "cd samples/ && npm link ../ && npm test && cd ../",
            prelint: "cd samples; npm link ../; npm install",
            clean: "gts clean"
        },
        repository: {
            type: "git",
            directory: "packages/gaxios",
            url: "https://github.com/googleapis/google-cloud-node-core.git"
        },
        keywords: [
            "google"
        ],
        engines: {
            node: ">=18"
        },
        author: "Google, LLC",
        license: "Apache-2.0",
        devDependencies: {
            "@babel/plugin-proposal-private-methods": "^7.18.6",
            "@types/cors": "^2.8.6",
            "@types/express": "^5.0.0",
            "@types/extend": "^3.0.1",
            "@types/mocha": "^10.0.10",
            "@types/multiparty": "4.2.1",
            "@types/mv": "^2.1.0",
            "@types/ncp": "^2.0.8",
            "@types/node": "^22.13.1",
            "@types/sinon": "^17.0.3",
            "@types/tmp": "^0.2.6",
            assert: "^2.0.0",
            browserify: "^17.0.0",
            c8: "^10.1.3",
            cors: "^2.8.5",
            express: "^5.0.0",
            gts: "^6.0.2",
            "is-docker": "^3.0.0",
            jsdoc: "^4.0.4",
            "jsdoc-fresh": "^5.0.0",
            "jsdoc-region-tag": "^4.0.0",
            karma: "^6.0.0",
            "karma-chrome-launcher": "^3.0.0",
            "karma-coverage": "^2.0.0",
            "karma-firefox-launcher": "^2.0.0",
            "karma-mocha": "^2.0.0",
            "karma-remap-coverage": "^0.1.5",
            "karma-sourcemap-loader": "^0.4.0",
            "karma-webpack": "^5.0.1",
            linkinator: "^6.1.2",
            mocha: "^11.1.0",
            multiparty: "^4.2.1",
            mv: "^2.1.1",
            ncp: "^2.0.0",
            nock: "^14.0.5",
            "null-loader": "^4.0.1",
            "pack-n-play": "^4.0.0",
            puppeteer: "^24.0.0",
            sinon: "^21.0.0",
            "stream-browserify": "^3.0.0",
            tmp: "0.2.5",
            "ts-loader": "^9.5.2",
            typescript: "5.8.3",
            webpack: "^5.97.1",
            "webpack-cli": "^6.0.1"
        },
        dependencies: {
            extend: "^3.0.2",
            "https-proxy-agent": "^7.0.1",
            "node-fetch": "^3.3.2"
        },
        homepage: "https://github.com/googleapis/google-cloud-node-core/tree/main/packages/gaxios"
    };
});
const Ls = C(function(Nd, Ms) {
    const pkg = Fs();
    Ms.exports = {
        pkg
    };
});
const xr = C(function(ye) {
    const Bs = ye && ye.__importDefault || ((e)=>{
        if (e && e.__esModule) {
            return e;
        }
        return {
            default: e
        };
    });
    Object.defineProperty(ye, "__esModule", {
        value: true
    });
    ye.GaxiosError = ye.GAXIOS_ERROR_SYMBOL = undefined;
    ye.defaultErrorRedactor = Hs;
    const Gs = Bs(Sr());
    const Oc = Bs(Ls());
    const pkg = Oc.default.pkg;
    ye.GAXIOS_ERROR_SYMBOL = Symbol.for(`${pkg.name}-gaxios-error`);
    class Rr extends Error {
        config;
        response;
        code;
        status;
        error;
        [ye.GAXIOS_ERROR_SYMBOL] = pkg.version;
        static [Symbol.hasInstance](e) {
            if (e && typeof e === "object" && ye.GAXIOS_ERROR_SYMBOL in e && e[ye.GAXIOS_ERROR_SYMBOL] === pkg.version) {
                return true;
            }
            return Function.prototype[Symbol.hasInstance].call(Rr, e);
        }
        constructor(e, t, r, cause){
            super(e, {
                cause
            });
            this.config = t;
            this.response = r;
            this.error = cause instanceof Error ? cause : undefined;
            this.config = Gs.default(true, {}, t);
            if (this.response) {
                this.response.config = Gs.default(true, {}, this.response.config);
            }
            if (this.response) {
                try {
                    this.response.data = Rc(this.config.responseType, this.response?.bodyUsed ? this.response?.data : undefined);
                } catch  {}
                this.status = this.response.status;
            }
            if (cause instanceof DOMException) {
                this.code = cause.name;
            } else if (cause && typeof cause === "object" && "code" in cause && (typeof cause.code === "string" || typeof cause.code === "number")) {
                this.code = cause.code;
            }
        }
        static extractAPIErrorFromResponse(e, t = "The request failed") {
            let message = t;
            if (typeof e.data === "string") {
                message = e.data;
            }
            if (e.data && typeof e.data === "object" && "error" in e.data && e.data.error && !e.ok) {
                if (typeof e.data.error === "string") {
                    return {
                        message: e.data.error,
                        code: e.status,
                        status: e.statusText
                    };
                }
                if (typeof e.data.error === "object") {
                    message = "message" in e.data.error && typeof e.data.error.message === "string" ? e.data.error.message : message;
                    let status = "status" in e.data.error && typeof e.data.error.status === "string" ? e.data.error.status : e.statusText;
                    let code = "code" in e.data.error && typeof e.data.error.code === "number" ? e.data.error.code : e.status;
                    if ("errors" in e.data.error && Array.isArray(e.data.error.errors)) {
                        let a = [];
                        for (let h of e.data.error.errors){
                            if (typeof h === "object" && "message" in h && typeof h.message === "string") {
                                a.push(h.message);
                            }
                        }
                        return {
                            message: a.join(`
`) || message,
                            code,
                            status,
                            ...e.data.error
                        };
                    }
                    return {
                        message,
                        code,
                        status,
                        ...e.data.error
                    };
                }
            }
            return {
                message,
                code: e.status,
                status: e.statusText
            };
        }
    }
    ye.GaxiosError = Rr;
    function Rc(responseType, t) {
        switch(responseType){
            case "stream":
                return t;
            case "json":
                return JSON.parse(JSON.stringify(t));
            case "arraybuffer":
                return JSON.parse(Buffer.from(t).toString("utf8"));
            case "blob":
                return JSON.parse(t.text());
            default:
                return t;
        }
    }
    function Hs(e) {
        function r(headers) {
            if (!headers) {
                return;
            }
            headers.forEach((h, g)=>{
                if (/^authentication$/i.test(g) || /^authorization$/i.test(g) || /secret/i.test(g)) {
                    headers.set(g, "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
                }
            });
        }
        function s(a, h) {
            if (typeof a === "object" && a !== null && typeof a[h] === "string") {
                let g = a[h];
                if (/grant_type=/i.test(g) || /assertion=/i.test(g) || /secret/i.test(g)) {
                    a[h] = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
                }
            }
        }
        function n(a) {
            if (!a || typeof a !== "object") {
                return;
            } else if (a instanceof FormData || a instanceof URLSearchParams || "forEach" in a && "set" in a) {
                a.forEach((h, g)=>{
                    if ([
                        "grant_type",
                        "assertion"
                    ].includes(g) || /secret/.test(g)) {
                        a.set(g, "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
                    }
                });
            } else {
                if ("grant_type" in a) {
                    a.grant_type = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
                }
                if ("assertion" in a) {
                    a.assertion = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
                }
                if ("client_secret" in a) {
                    a.client_secret = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
                }
            }
        }
        if (e.config) {
            r(e.config.headers);
            s(e.config, "data");
            n(e.config.data);
            s(e.config, "body");
            n(e.config.body);
            if (e.config.url.searchParams.has("token")) {
                e.config.url.searchParams.set("token", "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
            }
            if (e.config.url.searchParams.has("client_secret")) {
                e.config.url.searchParams.set("client_secret", "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
            }
        }
        if (e.response) {
            Hs({
                config: e.response.config
            });
            r(e.response.headers);
            if (e.response.bodyUsed) {
                s(e.response, "data");
                n(e.response.data);
            }
        }
        return e;
    }
});
const Ks = C(function(Js) {
    Object.defineProperty(Js, "__esModule", {
        value: true
    });
    Js.getRetryConfig = xc;
    async function xc(e) {
        let t = $s(e);
        if (!e || !e.config || !t && !e.config.retry) {
            return {
                shouldRetry: false
            };
        }
        t = t || {};
        t.currentRetryAttempt = t.currentRetryAttempt || 0;
        t.retry = t.retry === undefined || t.retry === null ? 3 : t.retry;
        t.httpMethodsToRetry = t.httpMethodsToRetry || [
            "GET",
            "HEAD",
            "PUT",
            "OPTIONS",
            "DELETE"
        ];
        t.noResponseRetries = t.noResponseRetries === undefined || t.noResponseRetries === null ? 2 : t.noResponseRetries;
        t.retryDelayMultiplier = t.retryDelayMultiplier ? t.retryDelayMultiplier : 2;
        t.timeOfFirstRequest = t.timeOfFirstRequest ? t.timeOfFirstRequest : Date.now();
        t.totalTimeout = t.totalTimeout ? t.totalTimeout : Number.MAX_SAFE_INTEGER;
        t.maxRetryDelay = t.maxRetryDelay ? t.maxRetryDelay : Number.MAX_SAFE_INTEGER;
        let r = [
            [
                100,
                199
            ],
            [
                408,
                408
            ],
            [
                429,
                429
            ],
            [
                500,
                599
            ]
        ];
        t.statusCodesToRetry = t.statusCodesToRetry || r;
        e.config.retryConfig = t;
        if (!await (t.shouldRetry || bc)(e)) {
            return {
                shouldRetry: false,
                config: e.config
            };
        }
        let n = Nc(t);
        e.config.retryConfig.currentRetryAttempt += 1;
        let a = t.retryBackoff ? t.retryBackoff(e, n) : new Promise((resolve)=>{
            setTimeout(resolve, n);
        });
        if (t.onRetryAttempt) {
            await t.onRetryAttempt(e);
        }
        await a;
        return {
            shouldRetry: true,
            config: e.config
        };
    }
    function bc(e) {
        let t = $s(e);
        if (e.config.signal?.aborted && e.code !== "TimeoutError" || e.code === "AbortError") {
            return false;
        }
        if (!t || t.retry === 0) {
            return false;
        }
        if (!e.response && (t.currentRetryAttempt || 0) >= t.noResponseRetries) {
            return false;
        }
        if (!t.httpMethodsToRetry || !t.httpMethodsToRetry.includes(e.config.method?.toUpperCase() || "GET")) {
            return false;
        }
        if (e.response && e.response.status) {
            let r = false;
            for (let [s, n] of t.statusCodesToRetry){
                let a = e.response.status;
                if (a >= s && a <= n) {
                    r = true;
                    break;
                }
            }
            if (!r) {
                return false;
            }
        }
        t.currentRetryAttempt = t.currentRetryAttempt || 0;
        if (t.currentRetryAttempt >= t.retry) {
            return false;
        }
        return true;
    }
    function $s(e) {
        if (e && e.config && e.config.retryConfig) {
            return e.config.retryConfig;
        }
    }
    function Nc(e) {
        let r = (e.currentRetryAttempt ? 0 : e.retryDelay ?? 100) + (e.retryDelayMultiplier ** e.currentRetryAttempt - 1) / 2 * 1000;
        let s = e.totalTimeout - (Date.now() - e.timeOfFirstRequest);
        return Math.min(r, s, e.maxRetryDelay);
    }
});
const br = C(function(Vs) {
    Object.defineProperty(Vs, "__esModule", {
        value: true
    });
    Vs.GaxiosInterceptorManager = undefined;
    class Ws extends Set {
    }
    Vs.GaxiosInterceptorManager = Ws;
});
const Qs = C(function(it) {
    const Ic = it && it.__importDefault || ((e)=>{
        if (e && e.__esModule) {
            return e;
        }
        return {
            default: e
        };
    });
    let nt;
    Object.defineProperty(it, "__esModule", {
        value: true
    });
    it.Gaxios = undefined;
    const Uc = Ic(Sr());
    const Xs = Le("https");
    const ue = xr();
    const zs = Ks();
    const It = Le("stream");
    const Ut = br();
    const jc = async ()=>globalThis.crypto?.randomUUID() || (await import("crypto")).randomUUID();
    const Dc = 204;
    class Nr {
        agentCache = new Map;
        defaults;
        interceptors;
        constructor(e){
            this.defaults = e || {};
            this.interceptors = {
                request: new Ut.GaxiosInterceptorManager,
                response: new Ut.GaxiosInterceptorManager
            };
        }
        fetch(...e) {
            let t = e[0];
            let r = e[1];
            let s;
            let n = new Headers;
            if (typeof t === "string") {
                s = new URL(t);
            } else if (t instanceof URL) {
                s = t;
            } else if (t && t.url) {
                s = new URL(t.url);
            }
            if (t && typeof t === "object" && "headers" in t) {
                nt.mergeHeaders(n, t.headers);
            }
            if (r) {
                nt.mergeHeaders(n, new Headers(r.headers));
            }
            if (typeof t === "object" && !(t instanceof URL)) {
                return this.request({
                    ...r,
                    ...t,
                    headers: n,
                    url: s
                });
            } else {
                return this.request({
                    ...r,
                    headers: n,
                    url: s
                });
            }
        }
        async request(e = {}) {
            let t = await this.#s(e);
            t = await this.#t(t);
            return this.#r(this._request(t));
        }
        async _defaultAdapter(e) {
            let t = e.fetchImplementation || this.defaults.fetchImplementation || await nt.#c();
            let r = {
                ...e
            };
            delete r.data;
            let s = await t(e.url, r);
            let n = await this.getResponseData(e, s);
            if (!Object.getOwnPropertyDescriptor(s, "data")?.configurable) {
                Object.defineProperties(s, {
                    data: {
                        configurable: true,
                        writable: true,
                        enumerable: true,
                        value: n
                    }
                });
            }
            return Object.assign(s, {
                config: e,
                data: n
            });
        }
        async _request(e) {
            try {
                let t;
                if (e.adapter) {
                    t = await e.adapter(e, this._defaultAdapter.bind(this));
                } else {
                    t = await this._defaultAdapter(e);
                }
                if (!e.validateStatus(t.status)) {
                    if (e.responseType === "stream") {
                        let s = [];
                        for await (let n of t.data){
                            s.push(n);
                        }
                        t.data = s.toString();
                    }
                    let r = ue.GaxiosError.extractAPIErrorFromResponse(t, `Request failed with status code ${t.status}`);
                    throw new ue.GaxiosError(r?.message, e, t, r);
                }
                return t;
            } catch (error) {
                let r;
                if (error instanceof ue.GaxiosError) {
                    r = error;
                } else if (error instanceof Error) {
                    r = new ue.GaxiosError(error.message, e, undefined, error);
                } else {
                    r = new ue.GaxiosError("Unexpected Gaxios Error", e, undefined, error);
                }
                let { shouldRetry, config } = await zs.getRetryConfig(r);
                if (shouldRetry && config) {
                    r.config.retryConfig.currentRetryAttempt = config.retryConfig.currentRetryAttempt;
                    e.retryConfig = r.config?.retryConfig;
                    this.#n(e);
                    return this._request(e);
                }
                if (e.errorRedactor) {
                    e.errorRedactor(r);
                }
                throw r;
            }
        }
        async getResponseData(e, t) {
            if (t.status === Dc) {
                return "";
            }
            if (e.maxContentLength && t.headers.has("content-length") && e.maxContentLength < Number.parseInt(t.headers?.get("content-length") || "")) {
                throw new ue.GaxiosError("Response's `Content-Length` is over the limit.", e, Object.assign(t, {
                    config: e
                }));
            }
            switch(e.responseType){
                case "stream":
                    return t.body;
                case "json":
                    {
                        let r = await t.text();
                        try {
                            return JSON.parse(r);
                        } catch  {
                            return r;
                        }
                    }
                case "arraybuffer":
                    return t.arrayBuffer();
                case "blob":
                    return t.blob();
                case "text":
                    return t.text();
                default:
                    return this.getResponseDataFromContentType(t);
            }
        }
        #e(e, t = []) {
            let r = new URL(e);
            let s = [
                ...t
            ];
            let n = (process.env.NO_PROXY ?? process.env.no_proxy)?.split(",") || [];
            for (let a of n){
                s.push(a.trim());
            }
            for (let a of s){
                if (a instanceof RegExp) {
                    if (a.test(r.toString())) {
                        return false;
                    }
                } else if (a instanceof URL) {
                    if (a.origin === r.origin) {
                        return false;
                    }
                } else if (a.startsWith("*.") || a.startsWith(".")) {
                    let h = a.replace(/^\*\./, ".");
                    if (r.hostname.endsWith(h)) {
                        return false;
                    }
                } else if (a === r.origin || a === r.hostname || a === r.href) {
                    return false;
                }
            }
            return true;
        }
        async #t(e) {
            let t = Promise.resolve(e);
            for (let r of this.interceptors.request.values()){
                if (r) {
                    t = t.then(r.resolved, r.rejected);
                }
            }
            return t;
        }
        async #r(e) {
            let t = Promise.resolve(e);
            for (let r of this.interceptors.response.values()){
                if (r) {
                    t = t.then(r.resolved, r.rejected);
                }
            }
            return t;
        }
        async #s(e) {
            let t = new Headers(this.defaults.headers);
            nt.mergeHeaders(t, e.headers);
            let r = Uc.default(true, {}, this.defaults, e);
            if (!r.url) {
                throw Error("URL is required.");
            }
            if (r.baseURL) {
                r.url = new URL(r.url, r.baseURL);
            }
            r.url = new URL(r.url);
            if (r.params) {
                if (r.paramsSerializer) {
                    let a = r.paramsSerializer(r.params);
                    if (a.startsWith("?")) {
                        a = a.slice(1);
                    }
                    let h = r.url.toString().includes("?") ? "&" : "?";
                    r.url = r.url + h + a;
                } else {
                    let a = r.url instanceof URL ? r.url : new URL(r.url);
                    for (let [h, g] of new URLSearchParams(r.params)){
                        a.searchParams.append(h, g);
                    }
                    r.url = a;
                }
            }
            if (typeof e.maxContentLength === "number") {
                r.size = e.maxContentLength;
            }
            if (typeof e.maxRedirects === "number") {
                r.follow = e.maxRedirects;
            }
            let s = typeof r.data === "string" || r.data instanceof ArrayBuffer || r.data instanceof Blob || globalThis.File && r.data instanceof File || r.data instanceof FormData || r.data instanceof It.Readable || r.data instanceof ReadableStream || r.data instanceof String || r.data instanceof URLSearchParams || ArrayBuffer.isView(r.data) || [
                "Blob",
                "File",
                "FormData"
            ].includes(r.data?.constructor?.name || "");
            if (r.multipart?.length) {
                let a = await jc();
                t.set("content-type", `multipart/related; boundary=${a}`);
                r.body = It.Readable.from(this.getMultipartRequest(r.multipart, a));
            } else if (s) {
                r.body = r.data;
            } else if (typeof r.data === "object") {
                if (t.get("Content-Type") === "application/x-www-form-urlencoded") {
                    r.body = r.paramsSerializer ? r.paramsSerializer(r.data) : new URLSearchParams(r.data);
                } else {
                    if (!t.has("content-type")) {
                        t.set("content-type", "application/json");
                    }
                    r.body = JSON.stringify(r.data);
                }
            } else if (r.data) {
                r.body = r.data;
            }
            r.validateStatus = r.validateStatus || this.validateStatus;
            r.responseType = r.responseType || "unknown";
            if (!t.has("accept") && r.responseType === "json") {
                t.set("accept", "application/json");
            }
            let n = r.proxy || process?.env?.HTTPS_PROXY || process?.env?.https_proxy || process?.env?.HTTP_PROXY || process?.env?.http_proxy;
            if (r.agent) ;
            else if (n && this.#e(r.url, r.noProxy)) {
                let a = await nt.#a();
                if (this.agentCache.has(n)) {
                    r.agent = this.agentCache.get(n);
                } else {
                    r.agent = new a(n, {
                        cert: r.cert,
                        key: r.key
                    });
                    this.agentCache.set(n, r.agent);
                }
            } else if (r.cert && r.key) {
                if (this.agentCache.has(r.key)) {
                    r.agent = this.agentCache.get(r.key);
                } else {
                    r.agent = new Xs.Agent({
                        cert: r.cert,
                        key: r.key
                    });
                    this.agentCache.set(r.key, r.agent);
                }
            }
            if (typeof r.errorRedactor !== "function" && r.errorRedactor !== false) {
                r.errorRedactor = ue.defaultErrorRedactor;
            }
            if (r.body && !("duplex" in r)) {
                r.duplex = "half";
            }
            this.#n(r);
            return Object.assign(r, {
                headers: t,
                url: r.url instanceof URL ? r.url : new URL(r.url)
            });
        }
        #n(e) {
            if (e.timeout) {
                let t = AbortSignal.timeout(e.timeout);
                if (e.signal && !e.signal.aborted) {
                    e.signal = AbortSignal.any([
                        e.signal,
                        t
                    ]);
                } else {
                    e.signal = t;
                }
            }
        }
        validateStatus(e) {
            return e >= 200 && e < 300;
        }
        async getResponseDataFromContentType(e) {
            let t = e.headers.get("Content-Type");
            if (t === null) {
                return e.text();
            }
            t = t.toLowerCase();
            if (t.includes("application/json")) {
                let r = await e.text();
                try {
                    r = JSON.parse(r);
                } catch  {}
                return r;
            } else if (t.match(/^text\//)) {
                return e.text();
            } else {
                return e.blob();
            }
        }
        async *getMultipartRequest(e, t) {
            let r = `--${t}--`;
            for (let s of e){
                let n = s.headers.get("Content-Type") || "application/octet-stream";
                yield `--${t}\r
Content-Type: ${n}\r
\r
`;
                if (typeof s.content === "string") {
                    yield s.content;
                } else {
                    yield* s.content;
                }
                yield `\r
`;
            }
            yield r;
        }
        static #i;
        static #o;
        static async #a() {
            this.#i ||= (await import("/$bunfs/root/chunk-5t14zt5z.js").then((m)=>Se(m.default))).HttpsProxyAgent;
            return this.#i;
        }
        static async #c() {
            let e = typeof window !== "undefined" && !!window;
            this.#o ||= e ? window.fetch : (await import("node-fetch")).default;
            return this.#o;
        }
        static mergeHeaders(e, ...t) {
            e = e instanceof Headers ? e : new Headers(e);
            for (let r of t){
                (r instanceof Headers ? r : new Headers(r)).forEach((n, a)=>{
                    if (a === "set-cookie") {
                        e.append(a, n);
                    } else {
                        e.set(a, n);
                    }
                });
            }
            return e;
        }
    }
    it.Gaxios = Nr;
    nt = Nr;
});
const re = C(function(ae) {
    const qc = ae && ae.__createBinding || (Object.create ? (e, t, r, s = r)=>{
        let n = Object.getOwnPropertyDescriptor(t, r);
        if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) {
            n = {
                enumerable: true,
                get: function() {
                    return t[r];
                }
            };
        }
        Object.defineProperty(e, s, n);
    } : (e, t, r, s = r)=>{
        e[s] = t[r];
    });
    const Fc = ae && ae.__exportStar || ((e, t)=>{
        for(const r in e){
            if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) {
                qc(t, e, r);
            }
        }
    });
    Object.defineProperty(ae, "__esModule", {
        value: true
    });
    ae.instance = ae.Gaxios = ae.GaxiosError = undefined;
    ae.request = Lc;
    const jt = Qs();
    Object.defineProperty(ae, "Gaxios", {
        enumerable: true,
        get: function() {
            return jt.Gaxios;
        }
    });
    const Mc = xr();
    Object.defineProperty(ae, "GaxiosError", {
        enumerable: true,
        get: function() {
            return Mc.GaxiosError;
        }
    });
    Fc(br(), ae);
    ae.instance = new jt.Gaxios;
    async function Lc(e) {
        return ae.instance.request(e);
    }
});
const Pr = C(function(Zs, Dt) {
    ((e)=>{
        let t;
        const r = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;
        const { ceil, floor } = Math;
        const a = "[BigNumber Error] ";
        const h = `${a}Number primitive has more than 15 significant digits: `;
        const g = 100000000000000;
        const E = 14;
        const S = 9007199254740991;
        const T = [
            1,
            10,
            100,
            1000,
            10000,
            100000,
            1000000,
            10000000,
            100000000,
            1000000000,
            10000000000,
            100000000000,
            1000000000000,
            10000000000000
        ];
        const j = 10000000;
        const I = 1000000000;
        function Y(D) {
            let U;
            let L;
            let W;
            const v = constructor.prototype = {
                constructor,
                toString: null,
                valueOf: null
            };
            const ee = new constructor(1);
            var DECIMAL_PLACES = 20;
            var ROUNDING_MODE = 4;
            let ce = -7;
            let de = 21;
            var Ze = -10000000;
            var ke = 10000000;
            let CRYPTO = false;
            let MODULO_MODE = 1;
            let POW_PRECISION = 0;
            let FORMAT = {
                prefix: "",
                groupSize: 3,
                secondaryGroupSize: 0,
                groupSeparator: ",",
                decimalSeparator: ".",
                fractionGroupSize: 0,
                fractionGroupSeparator: "\xA0",
                suffix: ""
            };
            var ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";
            var Ar = true;
            function constructor(i, o) {
                let c;
                let y;
                let l;
                let f;
                let m;
                let u;
                let d;
                let _;
                let p = this;
                if (!(p instanceof constructor)) {
                    return new constructor(i, o);
                }
                if (o == null) {
                    if (i && i._isBigNumber === true) {
                        p.s = i.s;
                        if (!i.c || i.e > ke) {
                            p.c = p.e = null;
                        } else if (i.e < Ze) {
                            p.c = [
                                p.e = 0
                            ];
                        } else {
                            p.e = i.e;
                            p.c = i.c.slice();
                        }
                        return;
                    }
                    if ((u = typeof i === "number") && i * 0 == 0) {
                        p.s = 1 / i < 0 ? (i = -i, -1) : 1;
                        if (i === ~~i) {
                            f = 0;
                            for(m = i; m >= 10; m /= 10, f++);
                            if (f > ke) {
                                p.c = p.e = null;
                            } else {
                                p.e = f;
                                p.c = [
                                    i
                                ];
                            }
                            return;
                        }
                        _ = String(i);
                    } else {
                        if (!r.test(_ = String(i))) {
                            return W(p, _, u);
                        }
                        p.s = _.charCodeAt(0) == 45 ? (_ = _.slice(1), -1) : 1;
                    }
                    if ((f = _.indexOf(".")) > -1) {
                        _ = _.replace(".", "");
                    }
                    if ((m = _.search(/e/i)) > 0) {
                        if (f < 0) {
                            f = m;
                        }
                        f += +_.slice(m + 1);
                        _ = _.substring(0, m);
                    } else if (f < 0) {
                        f = _.length;
                    }
                } else {
                    O(o, 2, ALPHABET.length, "Base");
                    if (o == 10 && Ar) {
                        p = new constructor(i);
                        return pe(p, DECIMAL_PLACES + p.e + 1, ROUNDING_MODE);
                    }
                    _ = String(i);
                    if (u = typeof i === "number") {
                        if (i * 0 != 0) {
                            return W(p, _, u, o);
                        }
                        p.s = 1 / i < 0 ? (_ = _.slice(1), -1) : 1;
                        if (constructor.DEBUG && _.replace(/^0\.0*|\./, "").length > 15) {
                            throw Error(h + i);
                        }
                    } else {
                        p.s = _.charCodeAt(0) === 45 ? (_ = _.slice(1), -1) : 1;
                    }
                    c = ALPHABET.slice(0, o);
                    m = 0;
                    f = 0;
                    for(d = _.length; m < d; m++){
                        if (c.indexOf(y = _.charAt(m)) < 0) {
                            if (y == ".") {
                                if (m > f) {
                                    f = d;
                                    continue;
                                }
                            } else if (!l) {
                                if (_ == _.toUpperCase() && (_ = _.toLowerCase()) || _ == _.toLowerCase() && (_ = _.toUpperCase())) {
                                    l = true;
                                    m = -1;
                                    f = 0;
                                    continue;
                                }
                            }
                            return W(p, String(i), u, o);
                        }
                    }
                    u = false;
                    _ = L(_, o, 10, p.s);
                    if ((f = _.indexOf(".")) > -1) {
                        _ = _.replace(".", "");
                    } else {
                        f = _.length;
                    }
                }
                for(m = 0; _.charCodeAt(m) === 48; m++);
                for(d = _.length; _.charCodeAt(--d) === 48;);
                if (_ = _.slice(m, ++d)) {
                    d -= m;
                    if (u && constructor.DEBUG && d > 15 && (i > S || i !== floor(i))) {
                        throw Error(h + p.s * i);
                    }
                    if ((f = f - m - 1) > ke) {
                        p.c = p.e = null;
                    } else if (f < Ze) {
                        p.c = [
                            p.e = 0
                        ];
                    } else {
                        p.e = f;
                        p.c = [];
                        m = (f + 1) % E;
                        if (f < 0) {
                            m += E;
                        }
                        if (m < d) {
                            if (m) {
                                p.c.push(+_.slice(0, m));
                            }
                            for(d -= E; m < d;){
                                p.c.push(+_.slice(m, m += E));
                            }
                            m = E - (_ = _.slice(m)).length;
                        } else {
                            m -= d;
                        }
                        for(; m--; _ += "0");
                        p.c.push(+_);
                    }
                } else {
                    p.c = [
                        p.e = 0
                    ];
                }
            }
            constructor.clone = Y;
            constructor.ROUND_UP = 0;
            constructor.ROUND_DOWN = 1;
            constructor.ROUND_CEIL = 2;
            constructor.ROUND_FLOOR = 3;
            constructor.ROUND_HALF_UP = 4;
            constructor.ROUND_HALF_DOWN = 5;
            constructor.ROUND_HALF_EVEN = 6;
            constructor.ROUND_HALF_CEIL = 7;
            constructor.ROUND_HALF_FLOOR = 8;
            constructor.EUCLID = 9;
            constructor.config = constructor.set = function(i) {
                let o;
                let c;
                if (i != null) {
                    if (typeof i === "object") {
                        if (i.hasOwnProperty(o = "DECIMAL_PLACES")) {
                            c = i[o];
                            O(c, 0, I, o);
                            DECIMAL_PLACES = c;
                        }
                        if (i.hasOwnProperty(o = "ROUNDING_MODE")) {
                            c = i[o];
                            O(c, 0, 8, o);
                            ROUNDING_MODE = c;
                        }
                        if (i.hasOwnProperty(o = "EXPONENTIAL_AT")) {
                            c = i[o];
                            if (c && c.pop) {
                                O(c[0], -I, 0, o);
                                O(c[1], 0, I, o);
                                ce = c[0];
                                de = c[1];
                            } else {
                                O(c, -I, I, o);
                                ce = -(de = c < 0 ? -c : c);
                            }
                        }
                        if (i.hasOwnProperty(o = "RANGE")) {
                            c = i[o];
                            if (c && c.pop) {
                                O(c[0], -I, -1, o);
                                O(c[1], 1, I, o);
                                Ze = c[0];
                                ke = c[1];
                            } else {
                                O(c, -I, I, o);
                                if (c) {
                                    Ze = -(ke = c < 0 ? -c : c);
                                } else {
                                    throw Error(`${a + o} cannot be zero: ${c}`);
                                }
                            }
                        }
                        if (i.hasOwnProperty(o = "CRYPTO")) {
                            c = i[o];
                            if (c === !!c) {
                                if (c) {
                                    if (typeof crypto !== "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                                        CRYPTO = c;
                                    } else {
                                        CRYPTO = !c;
                                        throw Error(`${a}crypto unavailable`);
                                    }
                                } else {
                                    CRYPTO = c;
                                }
                            } else {
                                throw Error(`${a + o} not true or false: ${c}`);
                            }
                        }
                        if (i.hasOwnProperty(o = "MODULO_MODE")) {
                            c = i[o];
                            O(c, 0, 9, o);
                            MODULO_MODE = c;
                        }
                        if (i.hasOwnProperty(o = "POW_PRECISION")) {
                            c = i[o];
                            O(c, 0, I, o);
                            POW_PRECISION = c;
                        }
                        if (i.hasOwnProperty(o = "FORMAT")) {
                            c = i[o];
                            if (typeof c === "object") {
                                FORMAT = c;
                            } else {
                                throw Error(`${a + o} not an object: ${c}`);
                            }
                        }
                        if (i.hasOwnProperty(o = "ALPHABET")) {
                            c = i[o];
                            if (typeof c === "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(c)) {
                                Ar = c.slice(0, 10) == "0123456789";
                                ALPHABET = c;
                            } else {
                                throw Error(`${a + o} invalid: ${c}`);
                            }
                        }
                    } else {
                        throw Error(`${a}Object expected: ${i}`);
                    }
                }
                return {
                    DECIMAL_PLACES,
                    ROUNDING_MODE,
                    EXPONENTIAL_AT: [
                        ce,
                        de
                    ],
                    RANGE: [
                        Ze,
                        ke
                    ],
                    CRYPTO,
                    MODULO_MODE,
                    POW_PRECISION,
                    FORMAT,
                    ALPHABET
                };
            };
            constructor.isBigNumber = function(i) {
                if (!i || i._isBigNumber !== true) {
                    return false;
                }
                if (!constructor.DEBUG) {
                    return true;
                }
                let o;
                let c;
                const { c: c_1, e: e_1, s } = i;
                e: if (Object.prototype.toString.call(c_1) == "[object Array]") {
                    if ((s === 1 || s === -1) && e_1 >= -I && e_1 <= I && e_1 === floor(e_1)) {
                        if (c_1[0] === 0) {
                            if (e_1 === 0 && c_1.length === 1) {
                                return true;
                            }
                            break e;
                        }
                        o = (e_1 + 1) % E;
                        if (o < 1) {
                            o += E;
                        }
                        if (String(c_1[0]).length == o) {
                            for(o = 0; o < c_1.length; o++){
                                c = c_1[o];
                                if (c < 0 || c >= g || c !== floor(c)) {
                                    break e;
                                }
                            }
                            if (c !== 0) {
                                return true;
                            }
                        }
                    }
                } else if (c_1 === null && e_1 === null && (s === null || s === 1 || s === -1)) {
                    return true;
                }
                throw Error(`${a}Invalid BigNumber: ${i}`);
            };
            constructor.maximum = constructor.max = function() {
                return xs(arguments, -1);
            };
            constructor.minimum = constructor.min = function() {
                return xs(arguments, 1);
            };
            constructor.random = (()=>{
                const i = 9007199254740992;
                const o = Math.random() * i & 2097151 ? ()=>floor(Math.random() * i) : ()=>(Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
                return function(c) {
                    let y;
                    let l;
                    let f;
                    let m;
                    let u;
                    let d = 0;
                    let _ = [];
                    const p = new constructor(ee);
                    if (c == null) {
                        c = DECIMAL_PLACES;
                    } else {
                        O(c, 0, I);
                    }
                    m = ceil(c / E);
                    if (CRYPTO) {
                        if (crypto.getRandomValues) {
                            y = crypto.getRandomValues(new Uint32Array(m *= 2));
                            while(d < m){
                                u = y[d] * 131072 + (y[d + 1] >>> 11);
                                if (u >= 9000000000000000) {
                                    l = crypto.getRandomValues(new Uint32Array(2));
                                    y[d] = l[0];
                                    y[d + 1] = l[1];
                                } else {
                                    _.push(u % 100000000000000);
                                    d += 2;
                                }
                            }
                            d = m / 2;
                        } else if (crypto.randomBytes) {
                            y = crypto.randomBytes(m *= 7);
                            while(d < m){
                                u = (y[d] & 31) * 281474976710656 + y[d + 1] * 1099511627776 + y[d + 2] * 4294967296 + y[d + 3] * 16777216 + (y[d + 4] << 16) + (y[d + 5] << 8) + y[d + 6];
                                if (u >= 9000000000000000) {
                                    crypto.randomBytes(7).copy(y, d);
                                } else {
                                    _.push(u % 100000000000000);
                                    d += 7;
                                }
                            }
                            d = m / 7;
                        } else {
                            CRYPTO = false;
                            throw Error(`${a}crypto unavailable`);
                        }
                    }
                    if (!CRYPTO) {
                        while(d < m){
                            u = o();
                            if (u < 9000000000000000) {
                                _[d++] = u % 100000000000000;
                            }
                        }
                    }
                    m = _[--d];
                    c %= E;
                    if (m && c) {
                        u = T[E - c];
                        _[d] = floor(m / u) * u;
                    }
                    for(; _[d] === 0; _.pop(), d--);
                    if (d < 0) {
                        _ = [
                            f = 0
                        ];
                    } else {
                        for(f = -1; _[0] === 0; _.splice(0, 1), f -= E);
                        d = 1;
                        for(u = _[0]; u >= 10; u /= 10, d++);
                        if (d < E) {
                            f -= E - d;
                        }
                    }
                    p.e = f;
                    p.c = _;
                    return p;
                };
            })();
            constructor.sum = function() {
                let i = 1;
                const o = arguments;
                let c = new constructor(o[0]);
                while(i < o.length){
                    c = c.plus(o[i++]);
                }
                return c;
            };
            L = (()=>{
                const i = "0123456789";
                function o(c, y, l, f) {
                    let m;
                    const u = [
                        0
                    ];
                    let d;
                    let _ = 0;
                    const c_length = c.length;
                    while(_ < c_length){
                        for(d = u.length; d--; u[d] *= y);
                        u[0] += f.indexOf(c.charAt(_++));
                        for(m = 0; m < u.length; m++){
                            if (u[m] > l - 1) {
                                if (u[m + 1] == null) {
                                    u[m + 1] = 0;
                                }
                                u[m + 1] += u[m] / l | 0;
                                u[m] %= l;
                            }
                        }
                    }
                    return u.reverse();
                }
                return function(c, y, l, f, m) {
                    let u;
                    let d;
                    let _;
                    let p;
                    let w;
                    let x;
                    let b;
                    let M;
                    let z = c.indexOf(".");
                    const te = DECIMAL_PLACES;
                    const F = ROUNDING_MODE;
                    if (z >= 0) {
                        p = POW_PRECISION;
                        POW_PRECISION = 0;
                        c = c.replace(".", "");
                        M = new constructor(y);
                        x = M.pow(c.length - z);
                        POW_PRECISION = p;
                        M.c = o(ie(R(x.c), x.e, "0"), 10, l, i);
                        M.e = M.c.length;
                    }
                    b = o(c, y, l, m ? (u = ALPHABET, i) : (u = i, ALPHABET));
                    _ = p = b.length;
                    for(; b[--p] == 0; b.pop());
                    if (!b[0]) {
                        return u.charAt(0);
                    }
                    if (z < 0) {
                        --_;
                    } else {
                        x.c = b;
                        x.e = _;
                        x.s = f;
                        x = U(x, M, te, F, l);
                        b = x.c;
                        w = x.r;
                        _ = x.e;
                    }
                    d = _ + te + 1;
                    z = b[d];
                    p = l / 2;
                    w = w || d < 0 || b[d + 1] != null;
                    w = F < 4 ? (z != null || w) && (F == 0 || F == (x.s < 0 ? 3 : 2)) : z > p || z == p && (F == 4 || w || F == 6 && b[d - 1] & 1 || F == (x.s < 0 ? 8 : 7));
                    if (d < 1 || !b[0]) {
                        c = w ? ie(u.charAt(1), -te, u.charAt(0)) : u.charAt(0);
                    } else {
                        b.length = d;
                        if (w) {
                            for(--l; ++b[--d] > l;){
                                b[d] = 0;
                                if (!d) {
                                    ++_;
                                    b = [
                                        1
                                    ].concat(b);
                                }
                            }
                        }
                        for(p = b.length; !b[--p];);
                        z = 0;
                        for(c = ""; z <= p; c += u.charAt(b[z++]));
                        c = ie(c, _, u.charAt(0));
                    }
                    return c;
                };
            })();
            U = (()=>{
                function i(y, l, f) {
                    let m;
                    let u;
                    let d;
                    let _;
                    let p = 0;
                    let y_length = y.length;
                    const x = l % j;
                    const b = l / j | 0;
                    for(y = y.slice(); y_length--;){
                        d = y[y_length] % j;
                        _ = y[y_length] / j | 0;
                        m = b * d + _ * x;
                        u = x * d + m % j * j + p;
                        p = (u / f | 0) + (m / j | 0) + b * _;
                        y[y_length] = u % f;
                    }
                    if (p) {
                        y = [
                            p
                        ].concat(y);
                    }
                    return y;
                }
                function o(y, l, f, m) {
                    let u;
                    let d;
                    if (f != m) {
                        d = f > m ? 1 : -1;
                    } else {
                        for(u = d = 0; u < f; u++){
                            if (y[u] != l[u]) {
                                d = y[u] > l[u] ? 1 : -1;
                                break;
                            }
                        }
                    }
                    return d;
                }
                function c(y, l, f, m) {
                    let u = 0;
                    while(f--){
                        y[f] -= u;
                        u = y[f] < l[f] ? 1 : 0;
                        y[f] = u * m + y[f] - l[f];
                    }
                    for(; !y[0] && y.length > 1; y.splice(0, 1));
                }
                return function(y, l, f, m, u) {
                    let d;
                    let _;
                    let p;
                    let w;
                    let x;
                    let b;
                    let M;
                    let z;
                    let te;
                    let F;
                    let B;
                    let ne;
                    let Nt;
                    let vr;
                    let kr;
                    let be;
                    let At;
                    let ge = y.s == l.s ? 1 : -1;
                    let oe = y.c;
                    let Q = l.c;
                    if (!oe || !oe[0] || !Q || !Q[0]) {
                        return new constructor(!y.s || !l.s || (oe ? Q && oe[0] == Q[0] : !Q) ? NaN : oe && oe[0] == 0 || !Q ? ge * 0 : ge / 0);
                    }
                    z = new constructor(ge);
                    te = z.c = [];
                    _ = y.e - l.e;
                    ge = f + _ + 1;
                    if (!u) {
                        u = g;
                        _ = K(y.e / E) - K(l.e / E);
                        ge = ge / E | 0;
                    }
                    for(p = 0; Q[p] == (oe[p] || 0); p++);
                    if (Q[p] > (oe[p] || 0)) {
                        _--;
                    }
                    if (ge < 0) {
                        te.push(1);
                        w = true;
                    } else {
                        vr = oe.length;
                        be = Q.length;
                        p = 0;
                        ge += 2;
                        x = floor(u / (Q[0] + 1));
                        if (x > 1) {
                            Q = i(Q, x, u);
                            oe = i(oe, x, u);
                            be = Q.length;
                            vr = oe.length;
                        }
                        Nt = be;
                        F = oe.slice(0, be);
                        B = F.length;
                        for(; B < be; F[B++] = 0);
                        At = Q.slice();
                        At = [
                            0
                        ].concat(At);
                        kr = Q[0];
                        if (Q[1] >= u / 2) {
                            kr++;
                        }
                        do {
                            x = 0;
                            d = o(Q, F, be, B);
                            if (d < 0) {
                                ne = F[0];
                                if (be != B) {
                                    ne = ne * u + (F[1] || 0);
                                }
                                x = floor(ne / kr);
                                if (x > 1) {
                                    if (x >= u) {
                                        x = u - 1;
                                    }
                                    b = i(Q, x, u);
                                    M = b.length;
                                    B = F.length;
                                    while(o(b, F, M, B) == 1){
                                        x--;
                                        c(b, be < M ? At : Q, M, u);
                                        M = b.length;
                                        d = 1;
                                    }
                                } else {
                                    if (x == 0) {
                                        x = 1;
                                        d = 1;
                                    }
                                    b = Q.slice();
                                    M = b.length;
                                }
                                if (M < B) {
                                    b = [
                                        0
                                    ].concat(b);
                                }
                                c(F, b, B, u);
                                B = F.length;
                                if (d == -1) {
                                    while(o(Q, F, be, B) < 1){
                                        x++;
                                        c(F, be < B ? At : Q, B, u);
                                        B = F.length;
                                    }
                                }
                            } else if (d === 0) {
                                x++;
                                F = [
                                    0
                                ];
                            }
                            te[p++] = x;
                            if (F[0]) {
                                F[B++] = oe[Nt] || 0;
                            } else {
                                F = [
                                    oe[Nt]
                                ];
                                B = 1;
                            }
                        }while ((Nt++ < vr || F[0] != null) && ge--)
                        w = F[0] != null;
                        if (!te[0]) {
                            te.splice(0, 1);
                        }
                    }
                    if (u == g) {
                        p = 1;
                        for(ge = te[0]; ge >= 10; ge /= 10, p++);
                        pe(z, f + (z.e = p + _ * E - 1) + 1, m, w);
                    } else {
                        z.e = _;
                        z.r = +w;
                    }
                    return z;
                };
            })();
            function Tr(i, o, c, y) {
                let l;
                let f;
                let m;
                let u;
                let d;
                if (c == null) {
                    c = ROUNDING_MODE;
                } else {
                    O(c, 0, 8);
                }
                if (!i.c) {
                    return i.toString();
                }
                l = i.c[0];
                m = i.e;
                if (o == null) {
                    d = R(i.c);
                    d = y == 1 || y == 2 && (m <= ce || m >= de) ? Z(d, m) : ie(d, m, "0");
                } else {
                    i = pe(new constructor(i), o, c);
                    f = i.e;
                    d = R(i.c);
                    u = d.length;
                    if (y == 1 || y == 2 && (o <= f || f <= ce)) {
                        for(; u < o; d += "0", u++);
                        d = Z(d, f);
                    } else {
                        o -= m;
                        d = ie(d, f, "0");
                        if (f + 1 > u) {
                            if (--o > 0) {
                                for(d += "."; o--; d += "0");
                            }
                        } else {
                            o += f - u;
                            if (o > 0) {
                                if (f + 1 == u) {
                                    d += ".";
                                }
                                for(; o--; d += "0");
                            }
                        }
                    }
                }
                if (i.s < 0 && l) {
                    return `-${d}`;
                }
                return d;
            }
            function xs(i, o) {
                let c;
                let y;
                let l = 1;
                let f = new constructor(i[0]);
                for(; l < i.length; l++){
                    y = new constructor(i[l]);
                    if (!y.s || (c = P(f, y)) === o || c === 0 && f.s === o) {
                        f = y;
                    }
                }
                return f;
            }
            function Cr(i, o, c) {
                let y = 1;
                let o_length = o.length;
                for(; !o[--o_length]; o.pop());
                for(o_length = o[0]; o_length >= 10; o_length /= 10, y++);
                if ((c = y + c * E - 1) > ke) {
                    i.c = i.e = null;
                } else if (c < Ze) {
                    i.c = [
                        i.e = 0
                    ];
                } else {
                    i.e = c;
                    i.c = o;
                }
                return i;
            }
            W = (()=>{
                const i = /^(-?)0([xbo])(?=\w[\w.]*$)/i;
                const o = /^([^.]+)\.$/;
                const c = /^\.([^.]+)$/;
                const y = /^-?(Infinity|NaN)$/;
                const l = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
                return function(f, m, u, d) {
                    let _;
                    let p = u ? m : m.replace(l, "");
                    if (y.test(p)) {
                        f.s = isNaN(p) ? null : p < 0 ? -1 : 1;
                    } else {
                        if (!u) {
                            p = p.replace(i, (w, x, b)=>{
                                _ = (b = b.toLowerCase()) == "x" ? 16 : b == "b" ? 2 : 8;
                                if (!d || d == _) {
                                    return x;
                                }
                                return w;
                            });
                            if (d) {
                                _ = d;
                                p = p.replace(o, "$1").replace(c, "0.$1");
                            }
                            if (m != p) {
                                return new constructor(p, _);
                            }
                        }
                        if (constructor.DEBUG) {
                            throw Error(`${a}Not a${d ? ` base ${d}` : ""} number: ${m}`);
                        }
                        f.s = null;
                    }
                    f.c = f.e = null;
                };
            })();
            function pe(i, o, c, y) {
                let l;
                let f;
                let m;
                let u;
                let d;
                let _;
                let p;
                const w = i.c;
                const x = T;
                if (w) {
                    e: {
                        l = 1;
                        for(u = w[0]; u >= 10; u /= 10, l++);
                        f = o - l;
                        if (f < 0) {
                            f += E;
                            m = o;
                            d = w[_ = 0];
                            p = floor(d / x[l - m - 1] % 10);
                        } else {
                            _ = ceil((f + 1) / E);
                            if (_ >= w.length) {
                                if (y) {
                                    for(; w.length <= _; w.push(0));
                                    p = 0;
                                    d = 0;
                                    l = 1;
                                    f %= E;
                                    m = f - E + 1;
                                } else {
                                    break e;
                                }
                            } else {
                                d = u = w[_];
                                for(l = 1; u >= 10; u /= 10, l++);
                                f %= E;
                                m = f - E + l;
                                p = m < 0 ? 0 : floor(d / x[l - m - 1] % 10);
                            }
                        }
                        y = y || o < 0 || w[_ + 1] != null || (m < 0 ? d : d % x[l - m - 1]);
                        y = c < 4 ? (p || y) && (c == 0 || c == (i.s < 0 ? 3 : 2)) : p > 5 || p == 5 && (c == 4 || y || c == 6 && (f > 0 ? m > 0 ? d / x[l - m] : 0 : w[_ - 1]) % 10 & 1 || c == (i.s < 0 ? 8 : 7));
                        if (o < 1 || !w[0]) {
                            w.length = 0;
                            if (y) {
                                o -= i.e + 1;
                                w[0] = x[(E - o % E) % E];
                                i.e = -o || 0;
                            } else {
                                w[0] = i.e = 0;
                            }
                            return i;
                        }
                        if (f == 0) {
                            w.length = _;
                            u = 1;
                            _--;
                        } else {
                            w.length = _ + 1;
                            u = x[E - f];
                            w[_] = m > 0 ? floor(d / x[l - m] % x[m]) * u : 0;
                        }
                        if (y) {
                            while(true){
                                if (_ == 0) {
                                    f = 1;
                                    for(m = w[0]; m >= 10; m /= 10, f++);
                                    m = w[0] += u;
                                    for(u = 1; m >= 10; m /= 10, u++);
                                    if (f != u) {
                                        i.e++;
                                        if (w[0] == g) {
                                            w[0] = 1;
                                        }
                                    }
                                    break;
                                } else {
                                    w[_] += u;
                                    if (w[_] != g) {
                                        break;
                                    }
                                    w[_--] = 0;
                                    u = 1;
                                }
                            }
                        }
                        for(f = w.length; w[--f] === 0; w.pop());
                    }
                    if (i.e > ke) {
                        i.c = i.e = null;
                    } else if (i.e < Ze) {
                        i.c = [
                            i.e = 0
                        ];
                    }
                }
                return i;
            }
            function De(i) {
                let o;
                const c = i.e;
                if (c === null) {
                    return i.toString();
                }
                o = R(i.c);
                o = c <= ce || c >= de ? Z(o, c) : ie(o, c, "0");
                if (i.s < 0) {
                    return `-${o}`;
                }
                return o;
            }
            v.absoluteValue = v.abs = function() {
                const i = new constructor(this);
                if (i.s < 0) {
                    i.s = 1;
                }
                return i;
            };
            v.comparedTo = function(i, o) {
                return P(this, new constructor(i, o));
            };
            v.decimalPlaces = v.dp = function(i, o) {
                let c;
                let y;
                let l;
                const f = this;
                if (i != null) {
                    O(i, 0, I);
                    if (o == null) {
                        o = ROUNDING_MODE;
                    } else {
                        O(o, 0, 8);
                    }
                    return pe(new constructor(f), i + f.e + 1, o);
                }
                if (!(c = f.c)) {
                    return null;
                }
                y = ((l = c.length - 1) - K(this.e / E)) * E;
                if (l = c[l]) {
                    for(; l % 10 == 0; l /= 10, y--);
                }
                if (y < 0) {
                    y = 0;
                }
                return y;
            };
            v.dividedBy = v.div = function(i, o) {
                return U(this, new constructor(i, o), DECIMAL_PLACES, ROUNDING_MODE);
            };
            v.dividedToIntegerBy = v.idiv = function(i, o) {
                return U(this, new constructor(i, o), 0, 1);
            };
            v.exponentiatedBy = v.pow = function(i, o) {
                let c;
                let y;
                let l;
                let f;
                let m;
                let u;
                let d;
                let _;
                let p;
                let w = this;
                i = new constructor(i);
                if (i.c && !i.isInteger()) {
                    throw Error(`${a}Exponent not an integer: ${De(i)}`);
                }
                if (o != null) {
                    o = new constructor(o);
                }
                u = i.e > 14;
                if (!w.c || !w.c[0] || w.c[0] == 1 && !w.e && w.c.length == 1 || !i.c || !i.c[0]) {
                    p = new constructor((+De(w)) ** (u ? i.s * (2 - G(i)) : +De(i)));
                    if (o) {
                        return p.mod(o);
                    }
                    return p;
                }
                d = i.s < 0;
                if (o) {
                    if (o.c ? !o.c[0] : !o.s) {
                        return new constructor(NaN);
                    }
                    y = !d && w.isInteger() && o.isInteger();
                    if (y) {
                        w = w.mod(o);
                    }
                } else if (i.e > 9 && (w.e > 0 || w.e < -1 || (w.e == 0 ? w.c[0] > 1 || u && w.c[1] >= 240000000 : w.c[0] < 80000000000000 || u && w.c[0] <= 99999750000000))) {
                    f = w.s < 0 && G(i) ? -0 : 0;
                    if (w.e > -1) {
                        f = 1 / f;
                    }
                    return new constructor(d ? 1 / f : f);
                } else if (POW_PRECISION) {
                    f = ceil(POW_PRECISION / E + 2);
                }
                if (u) {
                    c = new constructor(0.5);
                    if (d) {
                        i.s = 1;
                    }
                    _ = G(i);
                } else {
                    l = Math.abs(+De(i));
                    _ = l % 2;
                }
                p = new constructor(ee);
                while(true){
                    if (_) {
                        p = p.times(w);
                        if (!p.c) {
                            break;
                        }
                        if (f) {
                            if (p.c.length > f) {
                                p.c.length = f;
                            }
                        } else if (y) {
                            p = p.mod(o);
                        }
                    }
                    if (l) {
                        l = floor(l / 2);
                        if (l === 0) {
                            break;
                        }
                        _ = l % 2;
                    } else {
                        i = i.times(c);
                        pe(i, i.e + 1, 1);
                        if (i.e > 14) {
                            _ = G(i);
                        } else {
                            l = +De(i);
                            if (l === 0) {
                                break;
                            }
                            _ = l % 2;
                        }
                    }
                    w = w.times(w);
                    if (f) {
                        if (w.c && w.c.length > f) {
                            w.c.length = f;
                        }
                    } else if (y) {
                        w = w.mod(o);
                    }
                }
                if (y) {
                    return p;
                }
                if (d) {
                    p = ee.div(p);
                }
                if (o) {
                    return p.mod(o);
                }
                if (f) {
                    return pe(p, POW_PRECISION, ROUNDING_MODE, m);
                }
                return p;
            };
            v.integerValue = function(i) {
                const o = new constructor(this);
                if (i == null) {
                    i = ROUNDING_MODE;
                } else {
                    O(i, 0, 8);
                }
                return pe(o, o.e + 1, i);
            };
            v.isEqualTo = v.eq = function(i, o) {
                return P(this, new constructor(i, o)) === 0;
            };
            v.isFinite = function() {
                return !!this.c;
            };
            v.isGreaterThan = v.gt = function(i, o) {
                return P(this, new constructor(i, o)) > 0;
            };
            v.isGreaterThanOrEqualTo = v.gte = function(i, o) {
                return (o = P(this, new constructor(i, o))) === 1 || o === 0;
            };
            v.isInteger = function() {
                return !!this.c && K(this.e / E) > this.c.length - 2;
            };
            v.isLessThan = v.lt = function(i, o) {
                return P(this, new constructor(i, o)) < 0;
            };
            v.isLessThanOrEqualTo = v.lte = function(i, o) {
                return (o = P(this, new constructor(i, o))) === -1 || o === 0;
            };
            v.isNaN = function() {
                return !this.s;
            };
            v.isNegative = function() {
                return this.s < 0;
            };
            v.isPositive = function() {
                return this.s > 0;
            };
            v.isZero = function() {
                return !!this.c && this.c[0] == 0;
            };
            v.minus = function(i, o) {
                let c;
                let y;
                let l;
                let f;
                const m = this;
                let u = m.s;
                i = new constructor(i, o);
                o = i.s;
                if (!u || !o) {
                    return new constructor(NaN);
                }
                if (u != o) {
                    i.s = -o;
                    return m.plus(i);
                }
                let d = m.e / E;
                let _ = i.e / E;
                let p = m.c;
                let w = i.c;
                if (!d || !_) {
                    if (!p || !w) {
                        if (p) {
                            i.s = -o;
                            return i;
                        }
                        return new constructor(w ? m : NaN);
                    }
                    if (!p[0] || !w[0]) {
                        if (w[0]) {
                            i.s = -o;
                            return i;
                        }
                        return new constructor(p[0] ? m : ROUNDING_MODE == 3 ? -0 : 0);
                    }
                }
                d = K(d);
                _ = K(_);
                p = p.slice();
                if (u = d - _) {
                    if (f = u < 0) {
                        u = -u;
                        l = p;
                    } else {
                        _ = d;
                        l = w;
                    }
                    l.reverse();
                    for(o = u; o--; l.push(0));
                    l.reverse();
                } else {
                    y = (f = (u = p.length) < (o = w.length)) ? u : o;
                    for(u = o = 0; o < y; o++){
                        if (p[o] != w[o]) {
                            f = p[o] < w[o];
                            break;
                        }
                    }
                }
                if (f) {
                    l = p;
                    p = w;
                    w = l;
                    i.s = -i.s;
                }
                o = (y = w.length) - (c = p.length);
                if (o > 0) {
                    for(; o--; p[c++] = 0);
                }
                o = g - 1;
                while(y > u){
                    if (p[--y] < w[y]) {
                        for(c = y; c && !p[--c]; p[c] = o);
                        --p[c];
                        p[y] += g;
                    }
                    p[y] -= w[y];
                }
                for(; p[0] == 0; p.splice(0, 1), --_);
                if (!p[0]) {
                    i.s = ROUNDING_MODE == 3 ? -1 : 1;
                    i.c = [
                        i.e = 0
                    ];
                    return i;
                }
                return Cr(i, p, _);
            };
            v.modulo = v.mod = function(i, o) {
                let c;
                let y;
                const l = this;
                i = new constructor(i, o);
                if (!l.c || !i.s || i.c && !i.c[0]) {
                    return new constructor(NaN);
                } else if (!i.c || l.c && !l.c[0]) {
                    return new constructor(l);
                }
                if (MODULO_MODE == 9) {
                    y = i.s;
                    i.s = 1;
                    c = U(l, i, 0, 3);
                    i.s = y;
                    c.s *= y;
                } else {
                    c = U(l, i, 0, MODULO_MODE);
                }
                i = l.minus(c.times(i));
                if (!i.c[0] && MODULO_MODE == 1) {
                    i.s = l.s;
                }
                return i;
            };
            v.multipliedBy = v.times = function(i, o) {
                let c;
                let y;
                let l;
                let f;
                let m;
                let u;
                let d;
                let _;
                let p;
                let w;
                let x;
                let b;
                let M;
                let z;
                let te;
                const F = this;
                let B = F.c;
                let ne = (i = new constructor(i, o)).c;
                if (!B || !ne || !B[0] || !ne[0]) {
                    if (!F.s || !i.s || B && !B[0] && !ne || ne && !ne[0] && !B) {
                        i.c = i.e = i.s = null;
                    } else {
                        i.s *= F.s;
                        if (!B || !ne) {
                            i.c = i.e = null;
                        } else {
                            i.c = [
                                0
                            ];
                            i.e = 0;
                        }
                    }
                    return i;
                }
                y = K(F.e / E) + K(i.e / E);
                i.s *= F.s;
                d = B.length;
                w = ne.length;
                if (d < w) {
                    M = B;
                    B = ne;
                    ne = M;
                    l = d;
                    d = w;
                    w = l;
                }
                l = d + w;
                for(M = []; l--; M.push(0));
                z = g;
                te = j;
                for(l = w; --l >= 0;){
                    c = 0;
                    x = ne[l] % te;
                    b = ne[l] / te | 0;
                    m = d;
                    for(f = l + m; f > l;){
                        _ = B[--m] % te;
                        p = B[m] / te | 0;
                        u = b * _ + p * x;
                        _ = x * _ + u % te * te + M[f] + c;
                        c = (_ / z | 0) + (u / te | 0) + b * p;
                        M[f--] = _ % z;
                    }
                    M[f] = c;
                }
                if (c) {
                    ++y;
                } else {
                    M.splice(0, 1);
                }
                return Cr(i, M, y);
            };
            v.negated = function() {
                const i = new constructor(this);
                i.s = -i.s || null;
                return i;
            };
            v.plus = function(i, o) {
                let c;
                const y = this;
                let l = y.s;
                i = new constructor(i, o);
                o = i.s;
                if (!l || !o) {
                    return new constructor(NaN);
                }
                if (l != o) {
                    i.s = -o;
                    return y.minus(i);
                }
                let f = y.e / E;
                let m = i.e / E;
                let u = y.c;
                let d = i.c;
                if (!f || !m) {
                    if (!u || !d) {
                        return new constructor(l / 0);
                    }
                    if (!u[0] || !d[0]) {
                        if (d[0]) {
                            return i;
                        }
                        return new constructor(u[0] ? y : l * 0);
                    }
                }
                f = K(f);
                m = K(m);
                u = u.slice();
                if (l = f - m) {
                    if (l > 0) {
                        m = f;
                        c = d;
                    } else {
                        l = -l;
                        c = u;
                    }
                    c.reverse();
                    for(; l--; c.push(0));
                    c.reverse();
                }
                l = u.length;
                o = d.length;
                if (l - o < 0) {
                    c = d;
                    d = u;
                    u = c;
                    o = l;
                }
                for(l = 0; o;){
                    l = (u[--o] = u[o] + d[o] + l) / g | 0;
                    u[o] = g === u[o] ? 0 : u[o] % g;
                }
                if (l) {
                    u = [
                        l
                    ].concat(u);
                    ++m;
                }
                return Cr(i, u, m);
            };
            v.precision = v.sd = function(i, o) {
                let c;
                let y;
                let l;
                const f = this;
                if (i != null && i !== !!i) {
                    O(i, 1, I);
                    if (o == null) {
                        o = ROUNDING_MODE;
                    } else {
                        O(o, 0, 8);
                    }
                    return pe(new constructor(f), i, o);
                }
                if (!(c = f.c)) {
                    return null;
                }
                l = c.length - 1;
                y = l * E + 1;
                if (l = c[l]) {
                    for(; l % 10 == 0; l /= 10, y--);
                    for(l = c[0]; l >= 10; l /= 10, y++);
                }
                if (i && f.e + 1 > y) {
                    y = f.e + 1;
                }
                return y;
            };
            v.shiftedBy = function(i) {
                O(i, -S, S);
                return this.times(`1e${i}`);
            };
            v.squareRoot = v.sqrt = function() {
                let i;
                let o;
                let c;
                let y;
                let l;
                const f = this;
                let { c: c_1, s, e } = f;
                let _ = DECIMAL_PLACES + 4;
                const p = new constructor("0.5");
                if (s !== 1 || !c_1 || !c_1[0]) {
                    return new constructor(!s || s < 0 && (!c_1 || c_1[0]) ? NaN : c_1 ? f : Infinity);
                }
                s = Math.sqrt(+De(f));
                if (s == 0 || s == Infinity) {
                    o = R(c_1);
                    if ((o.length + e) % 2 == 0) {
                        o += "0";
                    }
                    s = Math.sqrt(+o);
                    e = K((e + 1) / 2) - (e < 0 || e % 2);
                    if (s == Infinity) {
                        o = `5e${e}`;
                    } else {
                        o = s.toExponential();
                        o = o.slice(0, o.indexOf("e") + 1) + e;
                    }
                    c = new constructor(o);
                } else {
                    c = new constructor(`${s}`);
                }
                if (c.c[0]) {
                    e = c.e;
                    s = e + _;
                    if (s < 3) {
                        s = 0;
                    }
                    while(true){
                        l = c;
                        c = p.times(l.plus(U(f, l, _, 1)));
                        if (R(l.c).slice(0, s) === (o = R(c.c)).slice(0, s)) {
                            if (c.e < e) {
                                --s;
                            }
                            o = o.slice(s - 3, s + 1);
                            if (o == "9999" || !y && o == "4999") {
                                if (!y) {
                                    pe(l, l.e + DECIMAL_PLACES + 2, 0);
                                    if (l.times(l).eq(f)) {
                                        c = l;
                                        break;
                                    }
                                }
                                _ += 4;
                                s += 4;
                                y = 1;
                            } else {
                                if (!+o || !+o.slice(1) && o.charAt(0) == "5") {
                                    pe(c, c.e + DECIMAL_PLACES + 2, 1);
                                    i = !c.times(c).eq(f);
                                }
                                break;
                            }
                        }
                    }
                }
                return pe(c, c.e + DECIMAL_PLACES + 1, ROUNDING_MODE, i);
            };
            v.toExponential = function(i, o) {
                if (i != null) {
                    O(i, 0, I);
                    i++;
                }
                return Tr(this, i, o, 1);
            };
            v.toFixed = function(i, o) {
                if (i != null) {
                    O(i, 0, I);
                    i = i + this.e + 1;
                }
                return Tr(this, i, o);
            };
            v.toFormat = function(i, o, c) {
                let y;
                const l = this;
                if (c == null) {
                    if (i != null && o && typeof o === "object") {
                        c = o;
                        o = null;
                    } else if (i && typeof i === "object") {
                        c = i;
                        o = null;
                        i = null;
                    } else {
                        c = FORMAT;
                    }
                } else if (typeof c !== "object") {
                    throw Error(`${a}Argument not an object: ${c}`);
                }
                y = l.toFixed(i, o);
                if (l.c) {
                    let f;
                    const m = y.split(".");
                    let u = +c.groupSize;
                    let d = +c.secondaryGroupSize;
                    const _ = c.groupSeparator || "";
                    let p = m[0];
                    const w = m[1];
                    const x = l.s < 0;
                    const b = x ? p.slice(1) : p;
                    let M = b.length;
                    if (d) {
                        f = u;
                        u = d;
                        d = f;
                        M -= f;
                    }
                    if (u > 0 && M > 0) {
                        f = M % u || u;
                        p = b.substr(0, f);
                        for(; f < M; f += u){
                            p += _ + b.substr(f, u);
                        }
                        if (d > 0) {
                            p += _ + b.slice(f);
                        }
                        if (x) {
                            p = `-${p}`;
                        }
                    }
                    y = w ? p + (c.decimalSeparator || "") + ((d = +c.fractionGroupSize) ? w.replace(new RegExp(`\\d{${d}}\\B`, "g"), `\$&${c.fractionGroupSeparator || ""}`) : w) : p;
                }
                return (c.prefix || "") + y + (c.suffix || "");
            };
            v.toFraction = function(i) {
                let o;
                let c;
                let y;
                let l;
                let f;
                let m;
                let u;
                let d;
                let _;
                let p;
                let w;
                let x;
                const b = this;
                const M = b.c;
                if (i != null) {
                    u = new constructor(i);
                    if (!u.isInteger() && (u.c || u.s !== 1) || u.lt(ee)) {
                        throw Error(`${a}Argument ${u.isInteger() ? "out of range: " : "not an integer: "}${De(u)}`);
                    }
                }
                if (!M) {
                    return new constructor(b);
                }
                o = new constructor(ee);
                _ = c = new constructor(ee);
                y = d = new constructor(ee);
                x = R(M);
                f = o.e = x.length - b.e - 1;
                o.c[0] = T[(m = f % E) < 0 ? E + m : m];
                i = !i || u.comparedTo(o) > 0 ? f > 0 ? o : _ : u;
                m = ke;
                ke = Infinity;
                u = new constructor(x);
                d.c[0] = 0;
                while(true){
                    p = U(u, o, 0, 1);
                    l = c.plus(p.times(y));
                    if (l.comparedTo(i) == 1) {
                        break;
                    }
                    c = y;
                    y = l;
                    _ = d.plus(p.times(l = _));
                    d = l;
                    o = u.minus(p.times(l = o));
                    u = l;
                }
                l = U(i.minus(c), y, 0, 1);
                d = d.plus(l.times(_));
                c = c.plus(l.times(y));
                d.s = _.s = b.s;
                f = f * 2;
                w = U(_, y, f, ROUNDING_MODE).minus(b).abs().comparedTo(U(d, c, f, ROUNDING_MODE).minus(b).abs()) < 1 ? [
                    _,
                    y
                ] : [
                    d,
                    c
                ];
                ke = m;
                return w;
            };
            v.toNumber = function() {
                return +De(this);
            };
            v.toPrecision = function(i, o) {
                if (i != null) {
                    O(i, 1, I);
                }
                return Tr(this, i, o, 2);
            };
            v.toString = function(i) {
                let o;
                let c = this;
                const { s, e } = c;
                if (e === null) {
                    if (s) {
                        o = "Infinity";
                        if (s < 0) {
                            o = `-${o}`;
                        }
                    } else {
                        o = "NaN";
                    }
                } else {
                    if (i == null) {
                        o = e <= ce || e >= de ? Z(R(c.c), e) : ie(R(c.c), e, "0");
                    } else if (i === 10 && Ar) {
                        c = pe(new constructor(c), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
                        o = ie(R(c.c), c.e, "0");
                    } else {
                        O(i, 2, ALPHABET.length, "Base");
                        o = L(ie(R(c.c), e, "0"), 10, i, s, true);
                    }
                    if (s < 0 && c.c[0]) {
                        o = `-${o}`;
                    }
                }
                return o;
            };
            v.valueOf = v.toJSON = function() {
                return De(this);
            };
            v._isBigNumber = true;
            if (D != null) {
                constructor.set(D);
            }
            return constructor;
        }
        function K(D) {
            const U = D | 0;
            if (D > 0 || D === U) {
                return U;
            }
            return U - 1;
        }
        function R(D) {
            let U;
            let L;
            let W = 1;
            let D_length = D.length;
            let ee = `${D[0]}`;
            while(W < D_length){
                U = `${D[W++]}`;
                L = E - U.length;
                for(; L--; U = `0${U}`);
                ee += U;
            }
            for(D_length = ee.length; ee.charCodeAt(--D_length) === 48;);
            return ee.slice(0, D_length + 1 || 1);
        }
        function P(D, U) {
            let L;
            let W;
            const v = D.c;
            const ee = U.c;
            let V = D.s;
            let X = U.s;
            let ce = D.e;
            let de = U.e;
            if (!V || !X) {
                return null;
            }
            L = v && !v[0];
            W = ee && !ee[0];
            if (L || W) {
                if (L) {
                    if (W) {
                        return 0;
                    }
                    return -X;
                }
                return V;
            }
            if (V != X) {
                return V;
            }
            L = V < 0;
            W = ce == de;
            if (!v || !ee) {
                if (W) {
                    return 0;
                }
                if (!v ^ L) {
                    return 1;
                }
                return -1;
            }
            if (!W) {
                if (ce > de ^ L) {
                    return 1;
                }
                return -1;
            }
            X = (ce = v.length) < (de = ee.length) ? ce : de;
            for(V = 0; V < X; V++){
                if (v[V] != ee[V]) {
                    if (v[V] > ee[V] ^ L) {
                        return 1;
                    }
                    return -1;
                }
            }
            if (ce == de) {
                return 0;
            }
            if (ce > de ^ L) {
                return 1;
            }
            return -1;
        }
        function O(D, U, L, W) {
            if (D < U || D > L || D !== floor(D)) {
                throw Error(a + (W || "Argument") + (typeof D === "number" ? D < U || D > L ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(D));
            }
        }
        function G(D) {
            const U = D.c.length - 1;
            return K(D.e / E) == U && D.c[U] % 2 != 0;
        }
        function Z(D, U) {
            return (D.length > 1 ? `${D.charAt(0)}.${D.slice(1)}` : D) + (U < 0 ? "e" : "e+") + U;
        }
        function ie(D, U, L) {
            let W;
            let v;
            if (U < 0) {
                for(v = `${L}.`; ++U; v += L);
                D = v + D;
            } else {
                W = D.length;
                if (++U > W) {
                    v = L;
                    for(U -= W; --U; v += L);
                    D += v;
                } else if (U < W) {
                    D = `${D.slice(0, U)}.${D.slice(U)}`;
                }
            }
            return D;
        }
        t = Y();
        t.default = t.BigNumber = t;
        if (typeof define === "function" && define.amd) {
            define(function() {
                return t;
            });
        } else if (typeof Dt !== "undefined" && Dt.exports) {
            Dt.exports = t;
        } else {
            if (!e) {
                e = typeof self !== "undefined" && self ? self : window;
            }
            e.BigNumber = t;
        }
    })(Zs);
});
const sn = C(function(qd, rn) {
    const en = Pr();
    const tn = qd;
    (()=>{
        function e(S) {
            if (S < 10) {
                return `0${S}`;
            }
            return S;
        }
        const t = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        const r = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        let s;
        let n;
        const a = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\\"",
            "\\": "\\\\"
        };
        let h;
        function g(S) {
            r.lastIndex = 0;
            if (r.test(S)) {
                return `"${S.replace(r, (T)=>{
                    const j = a[T];
                    if (typeof j === "string") {
                        return j;
                    }
                    return `\\u${`0000${T.charCodeAt(0).toString(16)}`.slice(-4)}`;
                })}"`;
            }
            return `"${S}"`;
        }
        function E(S, T) {
            let j;
            let I;
            let Y;
            let K;
            const R = s;
            let P;
            let O = T[S];
            const G = O != null && (O instanceof en || en.isBigNumber(O));
            if (O && typeof O === "object" && typeof O.toJSON === "function") {
                O = O.toJSON(S);
            }
            if (typeof h === "function") {
                O = h.call(T, S, O);
            }
            switch(typeof O){
                case "string":
                    if (G) {
                        return O;
                    } else {
                        return g(O);
                    }
                case "number":
                    if (isFinite(O)) {
                        return String(O);
                    }
                    return "null";
                case "boolean":
                case "null":
                case "bigint":
                    return String(O);
                case "object":
                    if (!O) {
                        return "null";
                    }
                    s += n;
                    P = [];
                    if (Object.prototype.toString.apply(O) === "[object Array]") {
                        K = O.length;
                        for(j = 0; j < K; j += 1){
                            P[j] = E(j, O) || "null";
                        }
                        Y = P.length === 0 ? "[]" : s ? `${`[
` + s + P.join(`,
` + s) + `
` + R}]` : `[${P.join(",")}]`;
                        s = R;
                        return Y;
                    }
                    if (h && typeof h === "object") {
                        K = h.length;
                        for(j = 0; j < K; j += 1){
                            if (typeof h[j] === "string") {
                                I = h[j];
                                Y = E(I, O);
                                if (Y) {
                                    P.push(g(I) + (s ? ": " : ":") + Y);
                                }
                            }
                        }
                    } else {
                        Object.keys(O).forEach((Z)=>{
                            const ie = E(Z, O);
                            if (ie) {
                                P.push(g(Z) + (s ? ": " : ":") + ie);
                            }
                        });
                    }
                    Y = P.length === 0 ? "{}" : s ? `${`{
` + s + P.join(`,
` + s) + `
` + R}}` : `{${P.join(",")}}`;
                    s = R;
                    return Y;
            }
        }
        if (typeof tn.stringify !== "function") {
            tn.stringify = function(S, T, j) {
                let I;
                s = "";
                n = "";
                if (typeof j === "number") {
                    for(I = 0; I < j; I += 1){
                        n += " ";
                    }
                } else if (typeof j === "string") {
                    n = j;
                }
                h = T;
                if (T && typeof T !== "function" && (typeof T !== "object" || typeof T.length !== "number")) {
                    throw Error("JSON.stringify");
                }
                return E("", {
                    "": S
                });
            };
        }
    })();
});
const on = C(function(Fd, nn) {
    let qt = null;
    const Gc = /(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/;
    const Bc = /(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;
    const Hc = function(e) {
        const t = {
            strict: false,
            storeAsString: false,
            alwaysParseAsBig: false,
            useNativeBigInt: false,
            protoAction: "error",
            constructorAction: "error"
        };
        if (e !== undefined && e !== null) {
            if (e.strict === true) {
                t.strict = true;
            }
            if (e.storeAsString === true) {
                t.storeAsString = true;
            }
            t.alwaysParseAsBig = e.alwaysParseAsBig === true ? e.alwaysParseAsBig : false;
            t.useNativeBigInt = e.useNativeBigInt === true ? e.useNativeBigInt : false;
            if (typeof e.constructorAction !== "undefined") {
                if (e.constructorAction === "error" || e.constructorAction === "ignore" || e.constructorAction === "preserve") {
                    t.constructorAction = e.constructorAction;
                } else {
                    throw Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${e.constructorAction}`);
                }
            }
            if (typeof e.protoAction !== "undefined") {
                if (e.protoAction === "error" || e.protoAction === "ignore" || e.protoAction === "preserve") {
                    t.protoAction = e.protoAction;
                } else {
                    throw Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${e.protoAction}`);
                }
            }
        }
        let at;
        let s;
        const n = {
            '"': '"',
            "\\": "\\",
            "/": "/",
            b: "\b",
            f: "\f",
            n: `
`,
            r: "\r",
            t: "\t"
        };
        let text;
        const h = (message)=>{
            throw {
                name: "SyntaxError",
                message,
                at,
                text
            };
        };
        const g = (R)=>{
            if (R && R !== s) {
                h(`Expected '${R}' instead of '${s}'`);
            }
            s = text.charAt(at);
            at += 1;
            return s;
        };
        const E = ()=>{
            let R;
            let P = "";
            if (s === "-") {
                P = "-";
                g("-");
            }
            while(s >= "0" && s <= "9"){
                P += s;
                g();
            }
            if (s === ".") {
                P += ".";
                while(g() && s >= "0" && s <= "9"){
                    P += s;
                }
            }
            if (s === "e" || s === "E") {
                P += s;
                g();
                if (s === "-" || s === "+") {
                    P += s;
                    g();
                }
                while(s >= "0" && s <= "9"){
                    P += s;
                    g();
                }
            }
            R = +P;
            if (!isFinite(R)) {
                h("Bad number");
            } else {
                if (qt == null) {
                    qt = Pr();
                }
                if (P.length > 15) {
                    if (t.storeAsString) {
                        return P;
                    }
                    if (t.useNativeBigInt) {
                        return BigInt(P);
                    }
                    return new qt(P);
                } else {
                    if (!t.alwaysParseAsBig) {
                        return R;
                    }
                    if (t.useNativeBigInt) {
                        return BigInt(R);
                    }
                    return new qt(R);
                }
            }
        };
        const S = ()=>{
            let R;
            let P;
            let O = "";
            let G;
            if (s === '"') {
                let Z = at;
                while(g()){
                    if (s === '"') {
                        if (at - 1 > Z) {
                            O += text.substring(Z, at - 1);
                        }
                        g();
                        return O;
                    }
                    if (s === "\\") {
                        if (at - 1 > Z) {
                            O += text.substring(Z, at - 1);
                        }
                        g();
                        if (s === "u") {
                            G = 0;
                            for(P = 0; P < 4; P += 1){
                                R = parseInt(g(), 16);
                                if (!isFinite(R)) {
                                    break;
                                }
                                G = G * 16 + R;
                            }
                            O += String.fromCharCode(G);
                        } else if (typeof n[s] === "string") {
                            O += n[s];
                        } else {
                            break;
                        }
                        Z = at;
                    }
                }
            }
            h("Bad string");
        };
        const T = ()=>{
            while(s && s <= " "){
                g();
            }
        };
        const j = ()=>{
            switch(s){
                case "t":
                    g("t");
                    g("r");
                    g("u");
                    g("e");
                    return true;
                case "f":
                    g("f");
                    g("a");
                    g("l");
                    g("s");
                    g("e");
                    return false;
                case "n":
                    g("n");
                    g("u");
                    g("l");
                    g("l");
                    return null;
            }
            h(`Unexpected '${s}'`);
        };
        let I;
        const Y = ()=>{
            const R = [];
            if (s === "[") {
                g("[");
                T();
                if (s === "]") {
                    g("]");
                    return R;
                }
                while(s){
                    R.push(I());
                    T();
                    if (s === "]") {
                        g("]");
                        return R;
                    }
                    g(",");
                    T();
                }
            }
            h("Bad array");
        };
        const K = ()=>{
            let R;
            const P = Object.create(null);
            if (s === "{") {
                g("{");
                T();
                if (s === "}") {
                    g("}");
                    return P;
                }
                while(s){
                    R = S();
                    T();
                    g(":");
                    if (t.strict === true && Object.hasOwnProperty.call(P, R)) {
                        h(`Duplicate key "${R}"`);
                    }
                    if (Gc.test(R) === true) {
                        if (t.protoAction === "error") {
                            h("Object contains forbidden prototype property");
                        } else if (t.protoAction === "ignore") {
                            I();
                        } else {
                            P[R] = I();
                        }
                    } else if (Bc.test(R) === true) {
                        if (t.constructorAction === "error") {
                            h("Object contains forbidden constructor property");
                        } else if (t.constructorAction === "ignore") {
                            I();
                        } else {
                            P[R] = I();
                        }
                    } else {
                        P[R] = I();
                    }
                    T();
                    if (s === "}") {
                        g("}");
                        return P;
                    }
                    g(",");
                    T();
                }
            }
            h("Bad object");
        };
        I = function() {
            T();
            switch(s){
                case "{":
                    return K();
                case "[":
                    return Y();
                case '"':
                    return S();
                case "-":
                    return E();
                default:
                    if (s >= "0" && s <= "9") {
                        return E();
                    }
                    return j();
            }
        };
        return function(R, P) {
            let O;
            text = `${R}`;
            at = 0;
            s = " ";
            O = I();
            T();
            if (s) {
                h("Syntax error");
            }
            if (typeof P === "function") {
                return function G(Z, ie) {
                    let U;
                    const L = Z[ie];
                    if (L && typeof L === "object") {
                        Object.keys(L).forEach((W)=>{
                            U = G(L, W);
                            if (U !== undefined) {
                                L[W] = U;
                            } else {
                                delete L[W];
                            }
                        });
                    }
                    return P.call(Z, ie, L);
                }({
                    "": O
                }, "");
            }
            return O;
        };
    };
    nn.exports = Hc;
});
const un = C(function(Md, Ft) {
    const stringify = sn().stringify;
    const cn = on();
    Ft.exports = function(e) {
        return {
            parse: cn(e),
            stringify
        };
    };
    Ft.exports.parse = cn();
    Ft.exports.stringify = stringify;
});
const Ir = C(function(pn) {
    Object.defineProperty(pn, "__esModule", {
        value: true
    });
    pn.GCE_LINUX_BIOS_PATHS = undefined;
    pn.isGoogleCloudServerless = ln;
    pn.isGoogleComputeEngineLinux = dn;
    pn.isGoogleComputeEngineMACAddress = hn;
    pn.isGoogleComputeEngine = fn;
    pn.detectGCPResidency = Jc;
    var Mt = Le("fs");
    var Gt = Le("os");
    pn.GCE_LINUX_BIOS_PATHS = {
        BIOS_DATE: "/sys/class/dmi/id/bios_date",
        BIOS_VENDOR: "/sys/class/dmi/id/bios_vendor"
    };
    var $c = /^42:01/;
    function ln() {
        return !!(process.env.CLOUD_RUN_JOB || process.env.FUNCTION_NAME || process.env.K_SERVICE);
    }
    function dn() {
        if (Gt.platform() !== "linux") {
            return false;
        }
        try {
            Mt.statSync(pn.GCE_LINUX_BIOS_PATHS.BIOS_DATE);
            let e = Mt.readFileSync(pn.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, "utf8");
            return /Google/.test(e);
        } catch  {
            return false;
        }
    }
    function hn() {
        let e = Gt.networkInterfaces();
        for (let t of Object.values(e)){
            if (!t) {
                continue;
            }
            for (let { mac } of t){
                if ($c.test(mac)) {
                    return true;
                }
            }
        }
        return false;
    }
    function fn() {
        return dn() || hn();
    }
    function Jc() {
        return ln() || fn();
    }
});
const _n = C(function(gn) {
    Object.defineProperty(gn, "__esModule", {
        value: true
    });
    gn.Colours = undefined;
    class q {
        static isEnabled(e) {
            return e && e.isTTY && (typeof e.getColorDepth === "function" ? e.getColorDepth() > 2 : true);
        }
        static refresh() {
            q.enabled = q.isEnabled(process?.stderr);
            if (!this.enabled) {
                q.reset = "";
                q.bright = "";
                q.dim = "";
                q.red = "";
                q.green = "";
                q.yellow = "";
                q.blue = "";
                q.magenta = "";
                q.cyan = "";
                q.white = "";
                q.grey = "";
            } else {
                q.reset = "\x1B[0m";
                q.bright = "\x1B[1m";
                q.dim = "\x1B[2m";
                q.red = "\x1B[31m";
                q.green = "\x1B[32m";
                q.yellow = "\x1B[33m";
                q.blue = "\x1B[34m";
                q.magenta = "\x1B[35m";
                q.cyan = "\x1B[36m";
                q.white = "\x1B[37m";
                q.grey = "\x1B[90m";
            }
        }
    }
    gn.Colours = q;
    q.enabled = false;
    q.reset = "";
    q.bright = "";
    q.dim = "";
    q.red = "";
    q.green = "";
    q.yellow = "";
    q.blue = "";
    q.magenta = "";
    q.cyan = "";
    q.white = "";
    q.grey = "";
    q.refresh();
});
const kn = C(function(H) {
    const zc = H && H.__createBinding || (Object.create ? (e, t, r, s = r)=>{
        let n = Object.getOwnPropertyDescriptor(t, r);
        if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) {
            n = {
                enumerable: true,
                get: function() {
                    return t[r];
                }
            };
        }
        Object.defineProperty(e, s, n);
    } : (e, t, r, s = r)=>{
        e[s] = t[r];
    });
    const Qc = H && H.__setModuleDefault || (Object.create ? (e, t)=>{
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : (e, t)=>{
        e.default = t;
    });
    const mn = H && H.__importStar || (()=>{
        let e = function(t) {
            e = Object.getOwnPropertyNames || function(r) {
                const s = [];
                for(const n in r){
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        s[s.length] = n;
                    }
                }
                return s;
            };
            return e(t);
        };
        return function(t) {
            if (t && t.__esModule) {
                return t;
            }
            const r = {};
            if (t != null) {
                for(let s = e(t), n = 0; n < s.length; n++){
                    if (s[n] !== "default") {
                        zc(r, t, s[n]);
                    }
                }
            }
            Qc(r, t);
            return r;
        };
    })();
    Object.defineProperty(H, "__esModule", {
        value: true
    });
    H.env = H.DebugLogBackendBase = H.placeholder = H.AdhocDebugLogger = H.LogSeverity = undefined;
    H.getNodeBackend = Ur;
    H.getDebugBackend = Zc;
    H.getStructuredBackend = eu;
    H.setBackend = tu;
    H.log = vn;
    const En = Le("events");
    var Tt = mn(Le("process"));
    const wn = mn(Le("util"));
    const J = _n();
    let Oe;
    ((e)=>{
        e.DEFAULT = "DEFAULT";
        e.DEBUG = "DEBUG";
        e.INFO = "INFO";
        e.WARNING = "WARNING";
        e.ERROR = "ERROR";
    })(Oe || (H.LogSeverity = Oe = {}));
    class Bt extends En.EventEmitter {
        constructor(e, t){
            super();
            this.namespace = e;
            this.upstream = t;
            this.func = Object.assign(this.invoke.bind(this), {
                instance: this,
                on: (r, s)=>this.on(r, s)
            });
            this.func.debug = (...r)=>this.invokeSeverity(Oe.DEBUG, ...r);
            this.func.info = (...r)=>this.invokeSeverity(Oe.INFO, ...r);
            this.func.warn = (...r)=>this.invokeSeverity(Oe.WARNING, ...r);
            this.func.error = (...r)=>this.invokeSeverity(Oe.ERROR, ...r);
            this.func.sublog = (r)=>vn(r, this.func);
        }
        invoke(e, ...t) {
            if (this.upstream) {
                try {
                    this.upstream(e, ...t);
                } catch (r) {}
            }
            try {
                this.emit("log", e, t);
            } catch (r) {}
        }
        invokeSeverity(e, ...t) {
            this.invoke({
                severity: e
            }, ...t);
        }
    }
    H.AdhocDebugLogger = Bt;
    H.placeholder = new Bt("", ()=>{}).func;
    class Ct {
        constructor(){
            this.cached = new Map;
            this.filters = [];
            this.filtersSet = false;
            let t = Tt.env[H.env.nodeEnables] ?? "*";
            if (t === "all") {
                t = "*";
            }
            this.filters = t.split(",");
        }
        log(e, t, ...r) {
            try {
                if (!this.filtersSet) {
                    this.setFilters();
                    this.filtersSet = true;
                }
                let s = this.cached.get(e);
                if (!s) {
                    s = this.makeLogger(e);
                    this.cached.set(e, s);
                }
                s(t, ...r);
            } catch (error) {
                console.error(error);
            }
        }
    }
    H.DebugLogBackendBase = Ct;
    class An extends Ct {
        constructor(){
            super(...arguments);
            this.enabledRegexp = /.*/g;
        }
        isEnabled(e) {
            return this.enabledRegexp.test(e);
        }
        makeLogger(e) {
            if (!this.enabledRegexp.test(e)) {
                return ()=>{};
            }
            return (t, ...r)=>{
                let n = `${J.Colours.green}${e}${J.Colours.reset}`;
                let a = `${J.Colours.yellow}${Tt.pid}${J.Colours.reset}`;
                let h;
                switch(t.severity){
                    case Oe.ERROR:
                        h = `${J.Colours.red}${t.severity}${J.Colours.reset}`;
                        break;
                    case Oe.INFO:
                        h = `${J.Colours.magenta}${t.severity}${J.Colours.reset}`;
                        break;
                    case Oe.WARNING:
                        h = `${J.Colours.yellow}${t.severity}${J.Colours.reset}`;
                        break;
                    default:
                        h = t.severity ?? Oe.DEFAULT;
                        break;
                }
                let g = wn.formatWithOptions({
                    colors: J.Colours.enabled
                }, ...r);
                let E = {
                    ...t
                };
                delete E.severity;
                let S = Object.getOwnPropertyNames(E).length ? JSON.stringify(E) : "";
                let T = S ? `${J.Colours.grey}${S}${J.Colours.reset}` : "";
                console.error("%s [%s|%s] %s%s", a, n, h, g, S ? ` ${T}` : "");
            };
        }
        setFilters() {
            let t = this.filters.join(",").replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^");
            this.enabledRegexp = new RegExp(`^${t}$`, "i");
        }
    }
    function Ur() {
        return new An;
    }
    class Tn extends Ct {
        constructor(e){
            super();
            this.debugPkg = e;
        }
        makeLogger(e) {
            let t = this.debugPkg(e);
            return (r, ...s)=>{
                t(s[0], ...s.slice(1));
            };
        }
        setFilters() {
            let t = Tt.env.NODE_DEBUG ?? "";
            Tt.env.NODE_DEBUG = `${t}${t ? "," : ""}${this.filters.join(",")}`;
        }
    }
    function Zc(e) {
        return new Tn(e);
    }
    class Cn extends Ct {
        constructor(e){
            super();
            this.upstream = e ?? undefined;
        }
        makeLogger(e) {
            let r = this.upstream?.makeLogger(e);
            return (s, ...n)=>{
                let h = s.severity ?? Oe.INFO;
                let g = {
                    severity: h,
                    message: wn.format(...n),
                    ...s
                };
                let E = JSON.stringify(g);
                if (r) {
                    r(s, E);
                } else {
                    console.log("%s", E);
                }
            };
        }
        setFilters() {
            this.upstream?.setFilters();
        }
    }
    function eu(e) {
        return new Cn(e);
    }
    H.env = {
        nodeEnables: "GOOGLE_SDK_NODE_LOGGING"
    };
    var jr = new Map;
    var he;
    function tu(e) {
        he = e;
        jr.clear();
    }
    function vn(e, t) {
        if (!he) {
            if (!Tt.env[H.env.nodeEnables]) {
                return H.placeholder;
            }
        }
        if (!e) {
            return H.placeholder;
        }
        if (t) {
            e = `${t.instance.namespace}:${e}`;
        }
        let r = jr.get(e);
        if (r) {
            return r.func;
        }
        if (he === null) {
            return H.placeholder;
        } else if (he === undefined) {
            he = Ur();
        }
        let s = (()=>{
            let n;
            return new Bt(e, (h, ...g)=>{
                if (n !== he) {
                    if (he === null) {
                        return;
                    } else if (he === undefined) {
                        he = Ur();
                    }
                    n = he;
                }
                he?.log(e, h, ...g);
            });
        })();
        jr.set(e, s);
        return s.func;
    }
});
const Dr = C(function(rt) {
    const ru = rt && rt.__createBinding || (Object.create ? (e, t, r, s = r)=>{
        let n = Object.getOwnPropertyDescriptor(t, r);
        if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) {
            n = {
                enumerable: true,
                get: function() {
                    return t[r];
                }
            };
        }
        Object.defineProperty(e, s, n);
    } : (e, t, r, s = r)=>{
        e[s] = t[r];
    });
    const su = rt && rt.__exportStar || ((e, t)=>{
        for(const r in e){
            if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) {
                ru(t, e, r);
            }
        }
    });
    Object.defineProperty(rt, "__esModule", {
        value: true
    });
    su(kn(), rt);
});
const kt = C(function(N) {
    const On = N && N.__createBinding || (Object.create ? (e, t, r, s = r)=>{
        let n = Object.getOwnPropertyDescriptor(t, r);
        if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) {
            n = {
                enumerable: true,
                get: function() {
                    return t[r];
                }
            };
        }
        Object.defineProperty(e, s, n);
    } : (e, t, r, s = r)=>{
        e[s] = t[r];
    });
    const nu = N && N.__setModuleDefault || (Object.create ? (e, t)=>{
        Object.defineProperty(e, "default", {
            enumerable: true,
            value: t
        });
    } : (e, t)=>{
        e.default = t;
    });
    const iu = N && N.__importStar || (()=>{
        let e = function(t) {
            e = Object.getOwnPropertyNames || function(r) {
                const s = [];
                for(const n in r){
                    if (Object.prototype.hasOwnProperty.call(r, n)) {
                        s[s.length] = n;
                    }
                }
                return s;
            };
            return e(t);
        };
        return function(t) {
            if (t && t.__esModule) {
                return t;
            }
            const r = {};
            if (t != null) {
                for(let s = e(t), n = 0; n < s.length; n++){
                    if (s[n] !== "default") {
                        On(r, t, s[n]);
                    }
                }
            }
            nu(r, t);
            return r;
        };
    })();
    const ou = N && N.__exportStar || ((e, t)=>{
        for(const r in e){
            if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) {
                On(t, e, r);
            }
        }
    });
    Object.defineProperty(N, "__esModule", {
        value: true
    });
    N.gcpResidencyCache = N.METADATA_SERVER_DETECTION = N.HEADERS = N.HEADER_VALUE = N.HEADER_NAME = N.SECONDARY_HOST_ADDRESS = N.HOST_ADDRESS = N.BASE_PATH = undefined;
    N.instance = lu;
    N.project = du;
    N.universe = hu;
    N.bulk = fu;
    N.isAvailable = gu;
    N.resetIsAvailableCache = yu;
    N.getGCPResidency = Fr;
    N.setGCPResidency = bn;
    N.requestTimeout = Nn;
    var ot = re();
    var Rn = un();
    var xn = Ir();
    const au = iu(Dr());
    N.BASE_PATH = "/computeMetadata/v1";
    N.HOST_ADDRESS = "http://169.254.169.254";
    N.SECONDARY_HOST_ADDRESS = "http://metadata.google.internal.";
    N.HEADER_NAME = "Metadata-Flavor";
    N.HEADER_VALUE = "Google";
    N.HEADERS = Object.freeze({
        [N.HEADER_NAME]: N.HEADER_VALUE
    });
    var Sn = au.log("gcp-metadata");
    N.METADATA_SERVER_DETECTION = Object.freeze({
        "assume-present": "don't try to ping the metadata server, but assume it's present",
        none: "don't try to ping the metadata server, but don't try to use it either",
        "bios-only": "treat the result of a BIOS probe as canonical (don't fall back to pinging)",
        "ping-only": "skip the BIOS probe, and go straight to pinging"
    });
    function qr(e) {
        if (!e) {
            e = process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST || N.HOST_ADDRESS;
        }
        if (!/^https?:\/\//.test(e)) {
            e = `http://${e}`;
        }
        return new URL(N.BASE_PATH, e).href;
    }
    function cu(e) {
        Object.keys(e).forEach((t)=>{
            switch(t){
                case "params":
                case "property":
                case "headers":
                    break;
                case "qs":
                    throw Error("'qs' is not a valid configuration option. Please use 'params' instead.");
                default:
                    throw Error(`'${t}' is not a valid configuration option.`);
            }
        });
    }
    async function vt(e, t = {}, noResponseRetries = 3, s = false) {
        let n = new Headers(N.HEADERS);
        let a = "";
        let params = {};
        if (typeof e === "object") {
            let j = e;
            new Headers(j.headers).forEach((I, Y)=>n.set(Y, I));
            a = j.metadataKey;
            params = j.params || params;
            noResponseRetries = j.noResponseRetries || noResponseRetries;
            s = j.fastFail || s;
        } else {
            a = e;
        }
        if (typeof t === "string") {
            a += `/${t}`;
        } else {
            cu(t);
            if (t.property) {
                a += `/${t.property}`;
            }
            new Headers(t.headers).forEach((j, I)=>n.set(I, j));
            params = t.params || params;
        }
        let g = s ? uu : ot.request;
        let E = {
            url: `${qr()}/${a}`,
            headers: n,
            retryConfig: {
                noResponseRetries
            },
            params,
            responseType: "text",
            timeout: Nn()
        };
        Sn.info("instance request %j", E);
        let S = await g(E);
        Sn.info("instance metadata is %s", S.data);
        let T = S.headers.get(N.HEADER_NAME);
        if (T !== N.HEADER_VALUE) {
            throw RangeError(`Invalid response from metadata service: incorrect ${N.HEADER_NAME} header. Expected '${N.HEADER_VALUE}', got ${T ? `'${T}'` : "no header"}`);
        }
        if (typeof S.data === "string") {
            try {
                return Rn.parse(S.data);
            } catch  {}
        }
        return S.data;
    }
    async function uu(e) {
        let t = {
            ...e,
            url: e.url?.toString().replace(qr(), qr(N.SECONDARY_HOST_ADDRESS))
        };
        let r = ot.request(e);
        let s = ot.request(t);
        return Promise.any([
            r,
            s
        ]);
    }
    function lu(e) {
        return vt("instance", e);
    }
    function du(e) {
        return vt("project", e);
    }
    function hu(e) {
        return vt("universe", e);
    }
    async function fu(e) {
        let t = {};
        await Promise.all(e.map((r)=>(async ()=>{
                let s = await vt(r);
                let r_metadataKey = r.metadataKey;
                t[r_metadataKey] = s;
            })()));
        return t;
    }
    function pu() {
        if (process.env.DETECT_GCP_RETRIES) {
            return Number(process.env.DETECT_GCP_RETRIES);
        }
        return 0;
    }
    var Ht;
    async function gu() {
        if (process.env.METADATA_SERVER_DETECTION) {
            let e = process.env.METADATA_SERVER_DETECTION.trim().toLocaleLowerCase();
            if (!(e in N.METADATA_SERVER_DETECTION)) {
                throw RangeError(`Unknown \`METADATA_SERVER_DETECTION\` env variable. Got \`${e}\`, but it should be \`${Object.keys(N.METADATA_SERVER_DETECTION).join("`, `")}\`, or unset`);
            }
            switch(e){
                case "assume-present":
                    return true;
                case "none":
                    return false;
                case "bios-only":
                    return Fr();
                case "ping-only":
            }
        }
        try {
            if (Ht === undefined) {
                Ht = vt("instance", undefined, pu(), !(process.env.GCE_METADATA_IP || process.env.GCE_METADATA_HOST));
            }
            await Ht;
            return true;
        } catch (error) {
            let t = error;
            if (process.env.DEBUG_AUTH) {
                console.info(t);
            }
            if (t.type === "request-timeout") {
                return false;
            }
            if (t.response && t.response.status === 404) {
                return false;
            } else {
                if (!(t.response && t.response.status === 404) && (!t.code || ![
                    "EHOSTDOWN",
                    "EHOSTUNREACH",
                    "ENETUNREACH",
                    "ENOENT",
                    "ENOTFOUND",
                    "ECONNREFUSED"
                ].includes(t.code.toString()))) {
                    let r = "UNKNOWN";
                    if (t.code) {
                        r = t.code.toString();
                    }
                    process.emitWarning(`received unexpected error = ${t.message} code = ${r}`, "MetadataLookupWarning");
                }
                return false;
            }
        }
    }
    function yu() {
        Ht = undefined;
    }
    N.gcpResidencyCache = null;
    function Fr() {
        if (N.gcpResidencyCache === null) {
            bn();
        }
        return N.gcpResidencyCache;
    }
    function bn(e = null) {
        N.gcpResidencyCache = e !== null ? e : xn.detectGCPResidency();
    }
    function Nn() {
        if (Fr()) {
            return 0;
        }
        return 3000;
    }
    ou(Ir(), N);
});
const In = C(function(vu) {
    vu.byteLength = mu;
    vu.toByteArray = wu;
    vu.fromByteArray = Cu;
    var Ne = [];
    var _e = [];
    var _u = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    const Mr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    He = 0;
    for(Lr = Mr.length; He < Lr; ++He){
        Ne[He] = Mr[He];
        _e[Mr.charCodeAt(He)] = He;
    }
    var He;
    var Lr;
    _e[45] = 62;
    _e[95] = 63;
    function Pn(e) {
        const e_length = e.length;
        if (e_length % 4 > 0) {
            throw Error("Invalid string. Length must be a multiple of 4");
        }
        let r = e.indexOf("=");
        if (r === -1) {
            r = e_length;
        }
        const s = r === e_length ? 0 : 4 - r % 4;
        return [
            r,
            s
        ];
    }
    function mu(e) {
        const t = Pn(e);
        const r = t[0];
        const s = t[1];
        return (r + s) * 3 / 4 - s;
    }
    function Eu(e, t, r) {
        return (t + r) * 3 / 4 - r;
    }
    function wu(e) {
        let t;
        const r = Pn(e);
        const s = r[0];
        const n = r[1];
        const a = new _u(Eu(e, s, n));
        let h = 0;
        const g = n > 0 ? s - 4 : s;
        let E;
        for(E = 0; E < g; E += 4){
            t = _e[e.charCodeAt(E)] << 18 | _e[e.charCodeAt(E + 1)] << 12 | _e[e.charCodeAt(E + 2)] << 6 | _e[e.charCodeAt(E + 3)];
            a[h++] = t >> 16 & 255;
            a[h++] = t >> 8 & 255;
            a[h++] = t & 255;
        }
        if (n === 2) {
            t = _e[e.charCodeAt(E)] << 2 | _e[e.charCodeAt(E + 1)] >> 4;
            a[h++] = t & 255;
        }
        if (n === 1) {
            t = _e[e.charCodeAt(E)] << 10 | _e[e.charCodeAt(E + 1)] << 4 | _e[e.charCodeAt(E + 2)] >> 2;
            a[h++] = t >> 8 & 255;
            a[h++] = t & 255;
        }
        return a;
    }
    function Au(e) {
        return Ne[e >> 18 & 63] + Ne[e >> 12 & 63] + Ne[e >> 6 & 63] + Ne[e & 63];
    }
    function Tu(e, t, r) {
        let s;
        const n = [];
        for(let a = t; a < r; a += 3){
            s = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255);
            n.push(Au(s));
        }
        return n.join("");
    }
    function Cu(e) {
        let t;
        const e_length = e.length;
        const s = e_length % 3;
        const n = [];
        const a = 16383;
        for(let h = 0, g = e_length - s; h < g; h += a){
            n.push(Tu(e, h, h + a > g ? g : h + a));
        }
        if (s === 1) {
            t = e[e_length - 1];
            n.push(`${Ne[t >> 2] + Ne[t << 4 & 63]}==`);
        } else if (s === 2) {
            t = (e[e_length - 2] << 8) + e[e_length - 1];
            n.push(`${Ne[t >> 10] + Ne[t >> 4 & 63] + Ne[t << 2 & 63]}=`);
        }
        return n.join("");
    }
});
const Gr = C(function(Un) {
    Object.defineProperty(Un, "__esModule", {
        value: true
    });
    Un.fromArrayBufferToHex = Ru;
    function Ru(e) {
        return Array.from(new Uint8Array(e)).map((r)=>r.toString(16).padStart(2, "0")).join("");
    }
});
const Fn = C(function(Dn) {
    Object.defineProperty(Dn, "__esModule", {
        value: true
    });
    Dn.BrowserCrypto = undefined;
    const me = In();
    const jn = Gr();
    class $t {
        constructor(){
            if (typeof window === "undefined" || window.crypto === undefined || window.crypto.subtle === undefined) {
                throw Error("SubtleCrypto not found. Make sure it's an https:// website.");
            }
        }
        async sha256DigestBase64(e) {
            let t = new TextEncoder().encode(e);
            let r = await window.crypto.subtle.digest("SHA-256", t);
            return me.fromByteArray(new Uint8Array(r));
        }
        randomBytesBase64(e) {
            let t = new Uint8Array(e);
            window.crypto.getRandomValues(t);
            return me.fromByteArray(t);
        }
        static padBase64(e) {
            while(e.length % 4 !== 0){
                e += "=";
            }
            return e;
        }
        async verify(e, t, r) {
            let s = {
                name: "RSASSA-PKCS1-v1_5",
                hash: {
                    name: "SHA-256"
                }
            };
            let n = new TextEncoder().encode(t);
            let a = me.toByteArray($t.padBase64(r));
            let h = await window.crypto.subtle.importKey("jwk", e, s, true, [
                "verify"
            ]);
            return await window.crypto.subtle.verify(s, h, Buffer.from(a), n);
        }
        async sign(e, t) {
            let r = {
                name: "RSASSA-PKCS1-v1_5",
                hash: {
                    name: "SHA-256"
                }
            };
            let s = new TextEncoder().encode(t);
            let n = await window.crypto.subtle.importKey("jwk", e, r, true, [
                "sign"
            ]);
            let a = await window.crypto.subtle.sign(r, n, s);
            return me.fromByteArray(new Uint8Array(a));
        }
        decodeBase64StringUtf8(e) {
            let t = me.toByteArray($t.padBase64(e));
            return new TextDecoder().decode(t);
        }
        encodeBase64StringUtf8(e) {
            let t = new TextEncoder().encode(e);
            return me.fromByteArray(t);
        }
        async sha256DigestHex(e) {
            let t = new TextEncoder().encode(e);
            let r = await window.crypto.subtle.digest("SHA-256", t);
            return jn.fromArrayBufferToHex(r);
        }
        async signWithHmacSha256(e, t) {
            let r = typeof e === "string" ? e : String.fromCharCode(...new Uint16Array(e));
            let s = new TextEncoder;
            let n = await window.crypto.subtle.importKey("raw", s.encode(r), {
                name: "HMAC",
                hash: {
                    name: "SHA-256"
                }
            }, false, [
                "sign"
            ]);
            return window.crypto.subtle.sign("HMAC", n, s.encode(t));
        }
    }
    Dn.BrowserCrypto = $t;
});
const Bn = C(function(Ln) {
    Object.defineProperty(Ln, "__esModule", {
        value: true
    });
    Ln.NodeCrypto = undefined;
    const Ee = Le("crypto");
    class Mn {
        async sha256DigestBase64(e) {
            return Ee.createHash("sha256").update(e).digest("base64");
        }
        randomBytesBase64(e) {
            return Ee.randomBytes(e).toString("base64");
        }
        async verify(e, t, r) {
            let s = Ee.createVerify("RSA-SHA256");
            s.update(t);
            s.end();
            return s.verify(e, r, "base64");
        }
        async sign(e, t) {
            let r = Ee.createSign("RSA-SHA256");
            r.update(t);
            r.end();
            return r.sign(e, "base64");
        }
        decodeBase64StringUtf8(e) {
            return Buffer.from(e, "base64").toString("utf-8");
        }
        encodeBase64StringUtf8(e) {
            return Buffer.from(e, "utf-8").toString("base64");
        }
        async sha256DigestHex(e) {
            return Ee.createHash("sha256").update(e).digest("hex");
        }
        async signWithHmacSha256(e, t) {
            let r = typeof e === "string" ? e : Nu(e);
            return bu(Ee.createHmac("sha256", r).update(t).digest());
        }
    }
    Ln.NodeCrypto = Mn;
    function bu(e) {
        let t = new ArrayBuffer(e.length);
        let r = new Uint8Array(t);
        for(let s = 0; s < e.length; ++s){
            r[s] = e[s];
        }
        return t;
    }
    function Nu(e) {
        return Buffer.from(e);
    }
});
const St = C(function(qe) {
    const Pu = qe && qe.__createBinding || (Object.create ? (e, t, r, s = r)=>{
        let n = Object.getOwnPropertyDescriptor(t, r);
        if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) {
            n = {
                enumerable: true,
                get: function() {
                    return t[r];
                }
            };
        }
        Object.defineProperty(e, s, n);
    } : (e, t, r, s = r)=>{
        e[s] = t[r];
    });
    const Iu = qe && qe.__exportStar || ((e, t)=>{
        for(const r in e){
            if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) {
                Pu(t, e, r);
            }
        }
    });
    Object.defineProperty(qe, "__esModule", {
        value: true
    });
    qe.createCrypto = Uu;
    qe.hasBrowserCrypto = Jn;
    var Hn = Fn();
    var $n = Bn();
    Iu(Gr(), qe);
    function Uu() {
        if (Jn()) {
            return new Hn.BrowserCrypto;
        }
        return new $n.NodeCrypto;
    }
    function Jn() {
        return typeof window !== "undefined" && typeof window.crypto !== "undefined" && typeof window.crypto.subtle !== "undefined";
    }
});
const Re = C(function(zn) {
    Object.defineProperty(zn, "__esModule", {
        value: true
    });
    zn.LRUCache = undefined;
    zn.snakeToCamel = Yn;
    zn.originalOrCamelOptions = Du;
    zn.removeUndefinedValuesInObject = qu;
    zn.isValidFile = Fu;
    zn.getWellKnownCertificateConfigFileLocation = Mu;
    var Wn = Le("fs");
    var Vn = Le("os");
    var at = Le("path");
    var ju = "certificate_config.json";
    var Kn = "gcloud";
    function Yn(e) {
        return e.replace(/([_][^_])/g, (t)=>t.slice(1).toUpperCase());
    }
    function Du(e) {
        function get(r) {
            let s = e || {};
            return s[r] ?? s[Yn(r)];
        }
        return {
            get
        };
    }
    class Xn {
        capacity;
        #e = new Map;
        maxAge;
        constructor(e){
            this.capacity = e.capacity;
            this.maxAge = e.maxAge;
        }
        #t(e, t) {
            this.#e.delete(e);
            this.#e.set(e, {
                value: t,
                lastAccessed: Date.now()
            });
        }
        set(e, t) {
            this.#t(e, t);
            this.#r();
        }
        get(e) {
            let t = this.#e.get(e);
            if (!t) {
                return;
            }
            this.#t(e, t.value);
            this.#r();
            return t.value;
        }
        #r() {
            let e = this.maxAge ? Date.now() - this.maxAge : 0;
            let t = this.#e.entries().next();
            while(!t.done && (this.#e.size > this.capacity || t.value[1].lastAccessed < e)){
                this.#e.delete(t.value[0]);
                t = this.#e.entries().next();
            }
        }
    }
    zn.LRUCache = Xn;
    function qu(e) {
        Object.entries(e).forEach(([t, r])=>{
            if (r === undefined || r === "undefined") {
                delete e[t];
            }
        });
        return e;
    }
    async function Fu(e) {
        try {
            return (await Wn.promises.lstat(e)).isFile();
        } catch (t) {
            return false;
        }
    }
    function Mu() {
        let e = process.env.CLOUDSDK_CONFIG || (Lu() ? at.join(process.env.APPDATA || "", Kn) : at.join(process.env.HOME || "", ".config", Kn));
        return at.join(e, ju);
    }
    function Lu() {
        return Vn.platform().startsWith("win");
    }
});
const Zn = C(function(zd, Ku) {
    Ku.exports = {
        name: "google-auth-library",
        version: "10.6.2",
        author: "Google Inc.",
        description: "Google APIs Authentication Client Library for Node.js",
        engines: {
            node: ">=18"
        },
        main: "./build/src/index.js",
        types: "./build/src/index.d.ts",
        repository: {
            type: "git",
            directory: "packages/google-auth-library-nodejs",
            url: "https://github.com/googleapis/google-cloud-node-core.git"
        },
        keywords: [
            "google",
            "api",
            "google apis",
            "client",
            "client library"
        ],
        dependencies: {
            "base64-js": "^1.3.0",
            "ecdsa-sig-formatter": "^1.0.11",
            gaxios: "^7.1.4",
            "gcp-metadata": "8.1.2",
            "google-logging-utils": "1.1.3",
            jws: "^4.0.0"
        },
        devDependencies: {
            "@types/base64-js": "^1.2.5",
            "@types/jws": "^3.1.0",
            "@types/mocha": "^10.0.10",
            "@types/mv": "^2.1.0",
            "@types/ncp": "^2.0.8",
            "@types/node": "^24.0.0",
            "@types/sinon": "^21.0.0",
            "assert-rejects": "^1.0.0",
            c8: "^10.1.3",
            codecov: "^3.8.3",
            gts: "^6.0.2",
            "is-docker": "^3.0.0",
            jsdoc: "^4.0.4",
            "jsdoc-fresh": "^5.0.0",
            "jsdoc-region-tag": "^4.0.0",
            karma: "^6.0.0",
            "karma-chrome-launcher": "^3.0.0",
            "karma-coverage": "^2.0.0",
            "karma-firefox-launcher": "^2.0.0",
            "karma-mocha": "^2.0.0",
            "karma-sourcemap-loader": "^0.4.0",
            "karma-webpack": "^5.0.1",
            keypair: "^1.0.4",
            mocha: "^11.1.0",
            mv: "^2.1.1",
            ncp: "^2.0.0",
            nock: "^14.0.5",
            "null-loader": "^4.0.1",
            puppeteer: "^24.0.0",
            sinon: "^21.0.0",
            "ts-loader": "^9.5.2",
            typescript: "5.8.3",
            webpack: "^5.97.1",
            "webpack-cli": "^6.0.1"
        },
        files: [
            "build/src",
            "!build/src/**/*.map"
        ],
        scripts: {
            test: "c8 mocha build/test",
            clean: "gts clean",
            prepare: "npm run compile",
            lint: "gts check --no-inline-config",
            compile: "tsc -p .",
            fix: "gts fix",
            pretest: "npm run compile -- --sourceMap",
            docs: "jsdoc -c .jsdoc.js",
            "samples-setup": "cd samples/ && npm link ../ && npm run setup && cd ../",
            "samples-test": "cd samples/ && npm link ../ && npm test && cd ../",
            "system-test": "mocha build/system-test --timeout 60000",
            "presystem-test": "npm run compile -- --sourceMap",
            webpack: "webpack",
            "browser-test": "karma start",
            "docs-test": "echo 'disabled until linkinator is fixed'",
            "predocs-test": "npm run docs",
            prelint: "cd samples; npm link ../; npm install"
        },
        license: "Apache-2.0",
        homepage: "https://github.com/googleapis/google-cloud-node-core/tree/main/packages/google-auth-library-nodejs"
    };
});
const Hr = C(function(ti) {
    Object.defineProperty(ti, "__esModule", {
        value: true
    });
    ti.USER_AGENT = ti.PRODUCT_NAME = ti.pkg = undefined;
    const Br = Zn();
    ti.pkg = Br;
    const ei = "google-api-nodejs-client";
    ti.PRODUCT_NAME = ei;
    const Wu = `${ei}/${Br.version}`;
    ti.USER_AGENT = Wu;
});
const fe = C(function(oi) {
    Object.defineProperty(oi, "__esModule", {
        value: true
    });
    oi.AuthClient = oi.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = oi.DEFAULT_UNIVERSE = undefined;
    const si = Le("events");
    const ct = re();
    const ni = Re();
    const ii = Dr();
    const ut = Hr();
    oi.DEFAULT_UNIVERSE = "googleapis.com";
    oi.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = 300000;
    class se extends si.EventEmitter {
        apiKey;
        projectId;
        quotaProjectId;
        transporter;
        credentials = {};
        eagerRefreshThresholdMillis = oi.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS;
        forceRefreshOnFailure = false;
        universeDomain = oi.DEFAULT_UNIVERSE;
        static RequestMethodNameSymbol = Symbol("request method name");
        static RequestLogIdSymbol = Symbol("request log id");
        constructor(e = {}){
            super();
            let t = ni.originalOrCamelOptions(e);
            this.apiKey = e.apiKey;
            this.projectId = t.get("project_id") ?? null;
            this.quotaProjectId = t.get("quota_project_id");
            this.credentials = t.get("credentials") ?? {};
            this.universeDomain = t.get("universe_domain") ?? oi.DEFAULT_UNIVERSE;
            this.transporter = e.transporter ?? new ct.Gaxios(e.transporterOptions);
            if (t.get("useAuthRequestParameters") !== false) {
                this.transporter.interceptors.request.add(se.DEFAULT_REQUEST_INTERCEPTOR);
                this.transporter.interceptors.response.add(se.DEFAULT_RESPONSE_INTERCEPTOR);
            }
            if (e.eagerRefreshThresholdMillis) {
                this.eagerRefreshThresholdMillis = e.eagerRefreshThresholdMillis;
            }
            this.forceRefreshOnFailure = e.forceRefreshOnFailure ?? false;
        }
        fetch(...e) {
            let t = e[0];
            let r = e[1];
            let s;
            let n = new Headers;
            if (typeof t === "string") {
                s = new URL(t);
            } else if (t instanceof URL) {
                s = t;
            } else if (t && t.url) {
                s = new URL(t.url);
            }
            if (t && typeof t === "object" && "headers" in t) {
                ct.Gaxios.mergeHeaders(n, t.headers);
            }
            if (r) {
                ct.Gaxios.mergeHeaders(n, new Headers(r.headers));
            }
            if (typeof t === "object" && !(t instanceof URL)) {
                return this.request({
                    ...r,
                    ...t,
                    headers: n,
                    url: s
                });
            } else {
                return this.request({
                    ...r,
                    headers: n,
                    url: s
                });
            }
        }
        setCredentials(e) {
            this.credentials = e;
        }
        addSharedMetadataHeaders(e) {
            if (!e.has("x-goog-user-project") && this.quotaProjectId) {
                e.set("x-goog-user-project", this.quotaProjectId);
            }
            return e;
        }
        addUserProjectAndAuthHeaders(e, t) {
            let r = t.get("x-goog-user-project");
            let s = t.get("authorization");
            if (r) {
                e.set("x-goog-user-project", r);
            }
            if (s) {
                e.set("authorization", s);
            }
            return e;
        }
        static log = ii.log("auth");
        static DEFAULT_REQUEST_INTERCEPTOR = {
            resolved: async (e)=>{
                if (!e.headers.has("x-goog-api-client")) {
                    let r = process.version.replace(/^v/, "");
                    e.headers.set("x-goog-api-client", `gl-node/${r}`);
                }
                let t = e.headers.get("User-Agent");
                if (!t) {
                    e.headers.set("User-Agent", ut.USER_AGENT);
                } else if (!t.includes(`${ut.PRODUCT_NAME}/`)) {
                    e.headers.set("User-Agent", `${t} ${ut.USER_AGENT}`);
                }
                try {
                    let r = e;
                    let s = r[se.RequestMethodNameSymbol];
                    let n = `${Math.floor(Math.random() * 1000)}`;
                    r[se.RequestLogIdSymbol] = n;
                    let a = {
                        url: e.url,
                        headers: e.headers
                    };
                    if (s) {
                        se.log.info("%s [%s] request %j", s, n, a);
                    } else {
                        se.log.info("[%s] request %j", n, a);
                    }
                } catch (r) {}
                return e;
            }
        };
        static DEFAULT_RESPONSE_INTERCEPTOR = {
            resolved: async (e)=>{
                try {
                    let t = e.config;
                    let r = t[se.RequestMethodNameSymbol];
                    let s = t[se.RequestLogIdSymbol];
                    if (r) {
                        se.log.info("%s [%s] response %j", r, s, e.data);
                    } else {
                        se.log.info("[%s] response %j", s, e.data);
                    }
                } catch (t) {}
                return e;
            },
            rejected: async (e)=>{
                try {
                    let t = e.config;
                    let r = t[se.RequestMethodNameSymbol];
                    let s = t[se.RequestLogIdSymbol];
                    if (r) {
                        se.log.info("%s [%s] error %j", r, s, e.response?.data);
                    } else {
                        se.log.error("[%s] error %j", s, e.response?.data);
                    }
                } catch (t) {}
                throw e;
            }
        };
        static setMethodName(e, t) {
            try {
                let r = e;
                r[se.RequestMethodNameSymbol] = t;
            } catch (r) {}
        }
        static get RETRY_CONFIG() {
            return {
                retry: true,
                retryConfig: {
                    httpMethodsToRetry: [
                        "GET",
                        "PUT",
                        "POST",
                        "HEAD",
                        "OPTIONS",
                        "DELETE"
                    ]
                }
            };
        }
    }
    oi.AuthClient = se;
});
const Jr = C(function(li) {
    Object.defineProperty(li, "__esModule", {
        value: true
    });
    li.LoginTicket = undefined;
    class ui {
        envelope;
        payload;
        constructor(e, t){
            this.envelope = e;
            this.payload = t;
        }
        getEnvelope() {
            return this.envelope;
        }
        getPayload() {
            return this.payload;
        }
        getUserId() {
            let e = this.getPayload();
            if (e && e.sub) {
                return e.sub;
            }
            return null;
        }
        getAttributes() {
            return {
                envelope: this.getEnvelope(),
                payload: this.getPayload()
            };
        }
    }
    li.LoginTicket = ui;
});
const st = C(function(_i) {
    Object.defineProperty(_i, "__esModule", {
        value: true
    });
    _i.OAuth2Client = _i.ClientAuthentication = _i.CertificateFormat = _i.CodeChallengeMethod = undefined;
    const Jt = re();
    const fi = Le("querystring");
    const pi = Le("stream");
    const gi = kmo();
    const Kt = Re();
    const lt = St();
    const Ae = fe();
    const yi = Jr();
    let hi;
    ((e)=>{
        e.Plain = "plain";
        e.S256 = "S256";
    })(hi || (_i.CodeChallengeMethod = hi = {}));
    let Fe;
    ((e)=>{
        e.PEM = "PEM";
        e.JWK = "JWK";
    })(Fe || (_i.CertificateFormat = Fe = {}));
    let Ot;
    ((e)=>{
        e.ClientSecretPost = "ClientSecretPost";
        e.ClientSecretBasic = "ClientSecretBasic";
        e.None = "None";
    })(Ot || (_i.ClientAuthentication = Ot = {}));
    class we extends Ae.AuthClient {
        redirectUri;
        certificateCache = {};
        certificateExpiry = null;
        certificateCacheFormat = Fe.PEM;
        refreshTokenPromises = new Map;
        endpoints;
        issuers;
        clientAuthentication;
        _clientId;
        _clientSecret;
        refreshHandler;
        constructor(e = {}, t, redirectUri){
            super(typeof e === "object" ? e : {});
            if (typeof e !== "object") {
                e = {
                    clientId: e,
                    clientSecret: t,
                    redirectUri
                };
            }
            this._clientId = e.clientId || e.client_id;
            this._clientSecret = e.clientSecret || e.client_secret;
            this.redirectUri = e.redirectUri || e.redirect_uris?.[0];
            this.endpoints = {
                tokenInfoUrl: "https://oauth2.googleapis.com/tokeninfo",
                oauth2AuthBaseUrl: "https://accounts.google.com/o/oauth2/v2/auth",
                oauth2TokenUrl: "https://oauth2.googleapis.com/token",
                oauth2RevokeUrl: "https://oauth2.googleapis.com/revoke",
                oauth2FederatedSignonPemCertsUrl: "https://www.googleapis.com/oauth2/v1/certs",
                oauth2FederatedSignonJwkCertsUrl: "https://www.googleapis.com/oauth2/v3/certs",
                oauth2IapPublicKeyUrl: "https://www.gstatic.com/iap/verify/public_key",
                ...e.endpoints
            };
            this.clientAuthentication = e.clientAuthentication || Ot.ClientSecretPost;
            this.issuers = e.issuers || [
                "accounts.google.com",
                "https://accounts.google.com",
                this.universeDomain
            ];
        }
        static GOOGLE_TOKEN_INFO_URL = "https://oauth2.googleapis.com/tokeninfo";
        static CLOCK_SKEW_SECS_ = 300;
        static DEFAULT_MAX_TOKEN_LIFETIME_SECS_ = 86400;
        generateAuthUrl(e = {}) {
            if (e.code_challenge_method && !e.code_challenge) {
                throw Error("If a code_challenge_method is provided, code_challenge must be included.");
            }
            e.response_type = e.response_type || "code";
            e.client_id = e.client_id || this._clientId;
            e.redirect_uri = e.redirect_uri || this.redirectUri;
            if (Array.isArray(e.scope)) {
                e.scope = e.scope.join(" ");
            }
            return `${this.endpoints.oauth2AuthBaseUrl.toString()}?${fi.stringify(e)}`;
        }
        generateCodeVerifier() {
            throw Error("generateCodeVerifier is removed, please use generateCodeVerifierAsync instead.");
        }
        async generateCodeVerifierAsync() {
            let e = lt.createCrypto();
            let codeVerifier = e.randomBytesBase64(96).replace(/\+/g, "~").replace(/=/g, "_").replace(/\//g, "-");
            let codeChallenge = (await e.sha256DigestBase64(codeVerifier)).split("=")[0].replace(/\+/g, "-").replace(/\//g, "_");
            return {
                codeVerifier,
                codeChallenge
            };
        }
        getToken(code, t) {
            let r = typeof code === "string" ? {
                code
            } : code;
            if (t) {
                this.getTokenAsync(r).then((s)=>t(null, s.tokens, s.res), (s)=>t(s, null, s.response));
            } else {
                return this.getTokenAsync(r);
            }
        }
        async getTokenAsync(e) {
            let t = this.endpoints.oauth2TokenUrl.toString();
            let r = new Headers;
            let s = {
                client_id: e.client_id || this._clientId,
                code_verifier: e.codeVerifier,
                code: e.code,
                grant_type: "authorization_code",
                redirect_uri: e.redirect_uri || this.redirectUri
            };
            if (this.clientAuthentication === Ot.ClientSecretBasic) {
                let g = Buffer.from(`${this._clientId}:${this._clientSecret}`);
                r.set("authorization", `Basic ${g.toString("base64")}`);
            }
            if (this.clientAuthentication === Ot.ClientSecretPost) {
                s.client_secret = this._clientSecret;
            }
            let n = {
                ...we.RETRY_CONFIG,
                method: "POST",
                url: t,
                data: new URLSearchParams(Kt.removeUndefinedValuesInObject(s)),
                headers: r
            };
            Ae.AuthClient.setMethodName(n, "getTokenAsync");
            let a = await this.transporter.request(n);
            let a_data = a.data;
            if (a.data && a.data.expires_in) {
                a_data.expiry_date = new Date().getTime() + a.data.expires_in * 1000;
                delete a_data.expires_in;
            }
            this.emit("tokens", a_data);
            return {
                tokens: a_data,
                res: a
            };
        }
        async refreshToken(e) {
            if (!e) {
                return this.refreshTokenNoCache(e);
            }
            if (this.refreshTokenPromises.has(e)) {
                return this.refreshTokenPromises.get(e);
            }
            let t = this.refreshTokenNoCache(e).then((r)=>{
                this.refreshTokenPromises.delete(e);
                return r;
            }, (r)=>{
                this.refreshTokenPromises.delete(e);
                throw r;
            });
            this.refreshTokenPromises.set(e, t);
            return t;
        }
        async refreshTokenNoCache(refresh_token) {
            if (!refresh_token) {
                throw Error("No refresh token is set.");
            }
            let t = this.endpoints.oauth2TokenUrl.toString();
            let r = {
                refresh_token,
                client_id: this._clientId,
                client_secret: this._clientSecret,
                grant_type: "refresh_token"
            };
            let s;
            try {
                let a = {
                    ...we.RETRY_CONFIG,
                    method: "POST",
                    url: t,
                    data: new URLSearchParams(Kt.removeUndefinedValuesInObject(r))
                };
                Ae.AuthClient.setMethodName(a, "refreshTokenNoCache");
                s = await this.transporter.request(a);
            } catch (error) {
                if (error instanceof Jt.GaxiosError && error.message === "invalid_grant" && error.response?.data && /ReAuth/i.test(error.response.data.error_description)) {
                    error.message = JSON.stringify(error.response.data);
                }
                throw error;
            }
            let s_data = s.data;
            if (s.data && s.data.expires_in) {
                s_data.expiry_date = new Date().getTime() + s.data.expires_in * 1000;
                delete s_data.expires_in;
            }
            this.emit("tokens", s_data);
            return {
                tokens: s_data,
                res: s
            };
        }
        refreshAccessToken(e) {
            if (e) {
                this.refreshAccessTokenAsync().then((t)=>e(null, t.credentials, t.res), e);
            } else {
                return this.refreshAccessTokenAsync();
            }
        }
        async refreshAccessTokenAsync() {
            let e = await this.refreshToken(this.credentials.refresh_token);
            let e_tokens = e.tokens;
            e_tokens.refresh_token = this.credentials.refresh_token;
            this.credentials = e_tokens;
            return {
                credentials: this.credentials,
                res: e.res
            };
        }
        getAccessToken(e) {
            if (e) {
                this.getAccessTokenAsync().then((t)=>e(null, t.token, t.res), e);
            } else {
                return this.getAccessTokenAsync();
            }
        }
        async getAccessTokenAsync() {
            if (!this.credentials.access_token || this.isTokenExpiring()) {
                if (!this.credentials.refresh_token) {
                    if (this.refreshHandler) {
                        let r = await this.processAndValidateRefreshHandler();
                        if (r?.access_token) {
                            this.setCredentials(r);
                            return {
                                token: this.credentials.access_token
                            };
                        }
                    } else {
                        throw Error("No refresh token or refresh handler callback is set.");
                    }
                }
                let t = await this.refreshAccessTokenAsync();
                if (!t.credentials || t.credentials && !t.credentials.access_token) {
                    throw Error("Could not refresh access token.");
                }
                return {
                    token: t.credentials.access_token,
                    res: t.res
                };
            } else {
                return {
                    token: this.credentials.access_token
                };
            }
        }
        async getRequestHeaders(e) {
            return (await this.getRequestMetadataAsync(e)).headers;
        }
        async getRequestMetadataAsync(e) {
            let credentials = this.credentials;
            if (!credentials.access_token && !credentials.refresh_token && !this.apiKey && !this.refreshHandler) {
                throw Error("No access, refresh token, API key or refresh handler callback is set.");
            }
            if (credentials.access_token && !this.isTokenExpiring()) {
                credentials.token_type = credentials.token_type || "Bearer";
                let h = new Headers({
                    authorization: `${credentials.token_type} ${credentials.access_token}`
                });
                return {
                    headers: this.addSharedMetadataHeaders(h)
                };
            }
            if (this.refreshHandler) {
                let h = await this.processAndValidateRefreshHandler();
                if (h?.access_token) {
                    this.setCredentials(h);
                    let g = new Headers({
                        authorization: `Bearer ${this.credentials.access_token}`
                    });
                    return {
                        headers: this.addSharedMetadataHeaders(g)
                    };
                }
            }
            if (this.apiKey) {
                return {
                    headers: new Headers({
                        "X-Goog-Api-Key": this.apiKey
                    })
                };
            }
            let r = null;
            let s = null;
            try {
                r = await this.refreshToken(credentials.refresh_token);
                s = r.tokens;
            } catch (error) {
                let g = error;
                if (g.response && (g.response.status === 403 || g.response.status === 404)) {
                    g.message = `Could not refresh access token: ${g.message}`;
                }
                throw g;
            }
            let credentials_1 = this.credentials;
            credentials_1.token_type = credentials_1.token_type || "Bearer";
            s.refresh_token = credentials_1.refresh_token;
            this.credentials = s;
            let a = new Headers({
                authorization: `${credentials_1.token_type} ${s.access_token}`
            });
            return {
                headers: this.addSharedMetadataHeaders(a),
                res: r.res
            };
        }
        static getRevokeTokenUrl(e) {
            return new we().getRevokeTokenURL(e).toString();
        }
        getRevokeTokenURL(e) {
            let t = new URL(this.endpoints.oauth2RevokeUrl);
            t.searchParams.append("token", e);
            return t;
        }
        revokeToken(e, t) {
            let r = {
                ...we.RETRY_CONFIG,
                url: this.getRevokeTokenURL(e).toString(),
                method: "POST"
            };
            Ae.AuthClient.setMethodName(r, "revokeToken");
            if (t) {
                this.transporter.request(r).then((s)=>t(null, s), t);
            } else {
                return this.transporter.request(r);
            }
        }
        revokeCredentials(e) {
            if (e) {
                this.revokeCredentialsAsync().then((t)=>e(null, t), e);
            } else {
                return this.revokeCredentialsAsync();
            }
        }
        async revokeCredentialsAsync() {
            let access_token = this.credentials.access_token;
            this.credentials = {};
            if (access_token) {
                return this.revokeToken(access_token);
            } else {
                throw Error("No access token to revoke.");
            }
        }
        request(e, t) {
            if (t) {
                this.requestAsync(e).then((r)=>t(null, r), (r)=>t(r, r.response));
            } else {
                return this.requestAsync(e);
            }
        }
        async requestAsync(e, t = false) {
            try {
                let r = await this.getRequestMetadataAsync();
                e.headers = Jt.Gaxios.mergeHeaders(e.headers);
                this.addUserProjectAndAuthHeaders(e.headers, r.headers);
                if (this.apiKey) {
                    e.headers.set("X-Goog-Api-Key", this.apiKey);
                }
                return await this.transporter.request(e);
            } catch (error) {
                let s = error.response;
                if (s) {
                    let n = s.status;
                    let a = this.credentials && this.credentials.access_token && this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure);
                    let h = this.credentials && this.credentials.access_token && !this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure) && this.refreshHandler;
                    let g = s.config.data instanceof pi.Readable;
                    let E = n === 401 || n === 403;
                    if (!t && E && !g && a) {
                        await this.refreshAccessTokenAsync();
                        return this.requestAsync(e, true);
                    } else if (!t && E && !g && h) {
                        let S = await this.processAndValidateRefreshHandler();
                        if (S?.access_token) {
                            this.setCredentials(S);
                        }
                        return this.requestAsync(e, true);
                    }
                }
                throw error;
            }
        }
        verifyIdToken(e, t) {
            if (t && typeof t !== "function") {
                throw Error("This method accepts an options object as the first parameter, which includes the idToken, audience, and maxExpiry.");
            }
            if (t) {
                this.verifyIdTokenAsync(e).then((r)=>t(null, r), t);
            } else {
                return this.verifyIdTokenAsync(e);
            }
        }
        async verifyIdTokenAsync(e) {
            if (!e.idToken) {
                throw Error("The verifyIdToken method requires an ID Token");
            }
            let t = await this.getFederatedSignonCertsAsync();
            return await this.verifySignedJwtWithCertsAsync(e.idToken, t.certs, e.audience, this.issuers, e.maxExpiry);
        }
        async getTokenInfo(e) {
            let { data } = await this.transporter.request({
                ...we.RETRY_CONFIG,
                method: "POST",
                headers: {
                    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
                    authorization: `Bearer ${e}`
                },
                url: this.endpoints.tokenInfoUrl.toString()
            });
            let r = {
                expiry_date: new Date().getTime() + data.expires_in * 1000,
                scopes: data.scope.split(" "),
                ...data
            };
            delete r.expires_in;
            delete r.scope;
            return r;
        }
        getFederatedSignonCerts(e) {
            if (e) {
                this.getFederatedSignonCertsAsync().then((t)=>e(null, t.certs, t.res), e);
            } else {
                return this.getFederatedSignonCertsAsync();
            }
        }
        async getFederatedSignonCertsAsync() {
            let e = new Date().getTime();
            let format = lt.hasBrowserCrypto() ? Fe.JWK : Fe.PEM;
            if (this.certificateExpiry && e < this.certificateExpiry.getTime() && this.certificateCacheFormat === format) {
                return {
                    certs: this.certificateCache,
                    format
                };
            }
            let r;
            let s;
            switch(format){
                case Fe.PEM:
                    s = this.endpoints.oauth2FederatedSignonPemCertsUrl.toString();
                    break;
                case Fe.JWK:
                    s = this.endpoints.oauth2FederatedSignonJwkCertsUrl.toString();
                    break;
                default:
                    throw Error(`Unsupported certificate format ${format}`);
            }
            try {
                let E = {
                    ...we.RETRY_CONFIG,
                    url: s
                };
                Ae.AuthClient.setMethodName(E, "getFederatedSignonCertsAsync");
                r = await this.transporter.request(E);
            } catch (error) {
                if (error instanceof Error) {
                    error.message = `Failed to retrieve verification certificates: ${error.message}`;
                }
                throw error;
            }
            let n = r?.headers.get("cache-control");
            let a = -1;
            if (n) {
                let E = /max-age=(?<maxAge>[0-9]+)/.exec(n)?.groups?.maxAge;
                if (E) {
                    a = Number(E) * 1000;
                }
            }
            let certs = {};
            switch(format){
                case Fe.PEM:
                    certs = r.data;
                    break;
                case Fe.JWK:
                    for (let E of r.data.keys){
                        certs[E.kid] = E;
                    }
                    break;
                default:
                    throw Error(`Unsupported certificate format ${format}`);
            }
            let g = new Date;
            this.certificateExpiry = a === -1 ? null : new Date(g.getTime() + a);
            this.certificateCache = certs;
            this.certificateCacheFormat = format;
            return {
                certs,
                format,
                res: r
            };
        }
        getIapPublicKeys(e) {
            if (e) {
                this.getIapPublicKeysAsync().then((t)=>e(null, t.pubkeys, t.res), e);
            } else {
                return this.getIapPublicKeysAsync();
            }
        }
        async getIapPublicKeysAsync() {
            let e;
            let t = this.endpoints.oauth2IapPublicKeyUrl.toString();
            try {
                let r = {
                    ...we.RETRY_CONFIG,
                    url: t
                };
                Ae.AuthClient.setMethodName(r, "getIapPublicKeysAsync");
                e = await this.transporter.request(r);
            } catch (error) {
                if (error instanceof Error) {
                    error.message = `Failed to retrieve verification certificates: ${error.message}`;
                }
                throw error;
            }
            return {
                pubkeys: e.data,
                res: e
            };
        }
        verifySignedJwtWithCerts() {
            throw Error("verifySignedJwtWithCerts is removed, please use verifySignedJwtWithCertsAsync instead.");
        }
        async verifySignedJwtWithCertsAsync(e, t, r, s, n) {
            let a = lt.createCrypto();
            if (!n) {
                n = we.DEFAULT_MAX_TOKEN_LIFETIME_SECS_;
            }
            let h = e.split(".");
            if (h.length !== 3) {
                throw Error(`Wrong number of segments in token: ${e}`);
            }
            let g = `${h[0]}.${h[1]}`;
            let E = h[2];
            let S;
            let T;
            try {
                S = JSON.parse(a.decodeBase64StringUtf8(h[0]));
            } catch (error) {
                if (error instanceof Error) {
                    error.message = `Can't parse token envelope: ${h[0]}': ${error.message}`;
                }
                throw error;
            }
            if (!S) {
                throw Error(`Can't parse token envelope: ${h[0]}`);
            }
            try {
                T = JSON.parse(a.decodeBase64StringUtf8(h[1]));
            } catch (error) {
                if (error instanceof Error) {
                    error.message = `Can't parse token payload '${h[0]}`;
                }
                throw error;
            }
            if (!T) {
                throw Error(`Can't parse token payload: ${h[1]}`);
            }
            if (!Object.prototype.hasOwnProperty.call(t, S.kid)) {
                throw Error(`No pem found for envelope: ${JSON.stringify(S)}`);
            }
            let j = t[S.kid];
            if (S.alg === "ES256") {
                E = gi.joseToDer(E, "ES256").toString("base64");
            }
            if (!await a.verify(j, g, E)) {
                throw Error(`Invalid token signature: ${e}`);
            }
            if (!T.iat) {
                throw Error(`No issue time in token: ${JSON.stringify(T)}`);
            }
            if (!T.exp) {
                throw Error(`No expiration time in token: ${JSON.stringify(T)}`);
            }
            let Y = Number(T.iat);
            if (isNaN(Y)) {
                throw Error("iat field using invalid format");
            }
            let K = Number(T.exp);
            if (isNaN(K)) {
                throw Error("exp field using invalid format");
            }
            let R = new Date().getTime() / 1000;
            if (K >= R + n) {
                throw Error(`Expiration time too far in future: ${JSON.stringify(T)}`);
            }
            let P = Y - we.CLOCK_SKEW_SECS_;
            let O = K + we.CLOCK_SKEW_SECS_;
            if (R < P) {
                throw Error(`Token used too early, ${R} < ${P}: ${JSON.stringify(T)}`);
            }
            if (R > O) {
                throw Error(`Token used too late, ${R} > ${O}: ${JSON.stringify(T)}`);
            }
            if (s && s.indexOf(T.iss) < 0) {
                throw Error(`Invalid issuer, expected one of [${s}], but got ${T.iss}`);
            }
            if (typeof r !== "undefined" && r !== null) {
                let G = T.aud;
                let Z = false;
                if (r.constructor === Array) {
                    Z = r.indexOf(G) > -1;
                } else {
                    Z = G === r;
                }
                if (!Z) {
                    throw Error("Wrong recipient, payload audience != requiredAudience");
                }
            }
            return new yi.LoginTicket(S, T);
        }
        async processAndValidateRefreshHandler() {
            if (this.refreshHandler) {
                let e = await this.refreshHandler();
                if (!e.access_token) {
                    throw Error("No access token is returned by the refreshHandler callback.");
                }
                return e;
            }
        }
        isTokenExpiring() {
            let expiry_date = this.credentials.expiry_date;
            if (expiry_date) {
                return expiry_date <= new Date().getTime() + this.eagerRefreshThresholdMillis;
            }
            return false;
        }
    }
    _i.OAuth2Client = we;
});
const Kr = C(function(Ti) {
    Object.defineProperty(Ti, "__esModule", {
        value: true
    });
    Ti.Compute = undefined;
    const Ei = re();
    const Wt = kt();
    const wi = st();
    class Ai extends wi.OAuth2Client {
        serviceAccountEmail;
        scopes;
        constructor(e = {}){
            super(e);
            this.credentials = {
                expiry_date: 1,
                refresh_token: "compute-placeholder"
            };
            this.serviceAccountEmail = e.serviceAccountEmail || "default";
            this.scopes = Array.isArray(e.scopes) ? e.scopes : e.scopes ? [
                e.scopes
            ] : [];
        }
        async refreshTokenNoCache() {
            let e = `service-accounts/${this.serviceAccountEmail}/token`;
            let t;
            try {
                let s = {
                    property: e
                };
                if (this.scopes.length > 0) {
                    s.params = {
                        scopes: this.scopes.join(",")
                    };
                }
                t = await Wt.instance(s);
            } catch (error) {
                if (error instanceof Ei.GaxiosError) {
                    error.message = `Could not refresh access token: ${error.message}`;
                    this.wrapError(error);
                }
                throw error;
            }
            let r = t;
            if (t && t.expires_in) {
                r.expiry_date = new Date().getTime() + t.expires_in * 1000;
                delete r.expires_in;
            }
            this.emit("tokens", r);
            return {
                tokens: r,
                res: null
            };
        }
        async fetchIdToken(e) {
            let t = `service-accounts/${this.serviceAccountEmail}/identity?format=full&audience=${e}`;
            let r;
            try {
                r = await Wt.instance({
                    property: t
                });
            } catch (error) {
                if (error instanceof Error) {
                    error.message = `Could not fetch ID token: ${error.message}`;
                }
                throw error;
            }
            return r;
        }
        wrapError(e) {
            let e_response = e.response;
            if (e_response && e_response.status) {
                e.status = e_response.status;
                if (e_response.status === 403) {
                    e.message = `A Forbidden error was returned while attempting to retrieve an access token for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have the correct permission scopes specified: ${e.message}`;
                } else if (e_response.status === 404) {
                    e.message = `A Not Found error was returned while attempting to retrieve an accesstoken for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have any permission scopes specified: ${e.message}`;
                }
            }
        }
    }
    Ti.Compute = Ai;
});
const Wr = C(function(Si) {
    Object.defineProperty(Si, "__esModule", {
        value: true
    });
    Si.IdTokenClient = undefined;
    const vi = st();
    class ki extends vi.OAuth2Client {
        targetAudience;
        idTokenProvider;
        constructor(e){
            super(e);
            this.targetAudience = e.targetAudience;
            this.idTokenProvider = e.idTokenProvider;
        }
        async getRequestMetadataAsync() {
            if (!this.credentials.id_token || !this.credentials.expiry_date || this.isTokenExpiring()) {
                let id_token = await this.idTokenProvider.fetchIdToken(this.targetAudience);
                this.credentials = {
                    id_token,
                    expiry_date: this.getIdTokenExpiryDate(id_token)
                };
            }
            return {
                headers: new Headers({
                    authorization: `Bearer ${this.credentials.id_token}`
                })
            };
        }
        getIdTokenExpiryDate(e) {
            let t = e.split(".")[1];
            if (t) {
                return JSON.parse(Buffer.from(t, "base64").toString("ascii")).exp * 1000;
            }
        }
    }
    Si.IdTokenClient = ki;
});
const Vr = C(function(Ri) {
    Object.defineProperty(Ri, "__esModule", {
        value: true
    });
    Ri.GCPEnv = undefined;
    Ri.clear = Zu;
    Ri.getEnv = el;
    var Vt = kt();
    var Pe;
    ((e)=>{
        e.APP_ENGINE = "APP_ENGINE";
        e.KUBERNETES_ENGINE = "KUBERNETES_ENGINE";
        e.CLOUD_FUNCTIONS = "CLOUD_FUNCTIONS";
        e.COMPUTE_ENGINE = "COMPUTE_ENGINE";
        e.CLOUD_RUN = "CLOUD_RUN";
        e.CLOUD_RUN_JOBS = "CLOUD_RUN_JOBS";
        e.NONE = "NONE";
    })(Pe || (Ri.GCPEnv = Pe = {}));
    var Rt;
    function Zu() {
        Rt = undefined;
    }
    async function el() {
        if (Rt) {
            return Rt;
        }
        Rt = tl();
        return Rt;
    }
    async function tl() {
        let Pe_NONE = Pe.NONE;
        if (rl()) {
            Pe_NONE = Pe.APP_ENGINE;
        } else if (sl()) {
            Pe_NONE = Pe.CLOUD_FUNCTIONS;
        } else if (await al()) {
            if (await ol()) {
                Pe_NONE = Pe.KUBERNETES_ENGINE;
            } else if (nl()) {
                Pe_NONE = Pe.CLOUD_RUN;
            } else if (il()) {
                Pe_NONE = Pe.CLOUD_RUN_JOBS;
            } else {
                Pe_NONE = Pe.COMPUTE_ENGINE;
            }
        } else {
            Pe_NONE = Pe.NONE;
        }
        return Pe_NONE;
    }
    function rl() {
        return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME);
    }
    function sl() {
        return !!(process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET);
    }
    function nl() {
        return !!process.env.K_CONFIGURATION;
    }
    function il() {
        return !!process.env.CLOUD_RUN_JOB;
    }
    async function ol() {
        try {
            await Vt.instance("attributes/cluster-name");
            return true;
        } catch (e) {
            return false;
        }
    }
    async function al() {
        return Vt.isAvailable();
    }
});
const Ii = C(function(Pi) {
    Object.defineProperty(Pi, "__esModule", {
        value: true
    });
    Pi.buildPayloadForJwsSign = Ni;
    Pi.getJwsSign = hl;
    var bi = RPt();
    var alg = "RS256";
    var aud = "https://oauth2.googleapis.com/token";
    function Ni(e) {
        let t = Math.floor(new Date().getTime() / 1000);
        return {
            iss: e.iss,
            scope: e.scope,
            aud,
            exp: t + 3600,
            iat: t,
            sub: e.sub,
            ...e.additionalClaims
        };
    }
    function hl(e) {
        let t = Ni(e);
        return bi.sign({
            header: {
                alg
            },
            payload: t,
            secret: e.key
        });
    }
});
const Di = C(function(ji) {
    Object.defineProperty(ji, "__esModule", {
        value: true
    });
    ji.getToken = ml;
    const Ui = Ii();
    const gl = "https://oauth2.googleapis.com/token";
    const grant_type = "urn:ietf:params:oauth:grant-type:jwt-bearer";
    var _l = (e)=>({
            method: "POST",
            url: gl,
            data: new URLSearchParams({
                grant_type,
                assertion: Ui.getJwsSign(e)
            }),
            responseType: "json",
            retryConfig: {
                httpMethodsToRetry: [
                    "POST"
                ]
            }
        });
    async function ml(e) {
        if (!e.transporter) {
            throw Error("No transporter set.");
        }
        try {
            let t = _l(e);
            return (await e.transporter.request(t)).data;
        } catch (error) {
            let r = error;
            let s = r.response?.data;
            if (s?.error) {
                r.message = `${s.error}: ${s.error_description}`;
            }
            throw r;
        }
    }
});
const Li = C(function(Fi) {
    Object.defineProperty(Fi, "__esModule", {
        value: true
    });
    Fi.ErrorWithCode = undefined;
    class qi extends Error {
        code;
        constructor(e, t){
            super(e);
            this.code = t;
        }
    }
    Fi.ErrorWithCode = qi;
});
const Yr = C(function(Vi) {
    Object.defineProperty(Vi, "__esModule", {
        value: true
    });
    Vi.getCredentials = wl;
    const Gi = Le("path");
    const Yt = Le("fs");
    const Bi = Le("util");
    const Je = Li();
    const Hi = Yt.readFile ? Bi.promisify(Yt.readFile) : async ()=>{
        throw new Je.ErrorWithCode("use key rather than keyFile.", "MISSING_CREDENTIALS");
    };
    const $e = {
        JSON: ".json",
        DER: ".der",
        CRT: ".crt",
        PEM: ".pem",
        P12: ".p12",
        PFX: ".pfx"
    };
    class $i {
        keyFilePath;
        constructor(e){
            this.keyFilePath = e;
        }
        async getCredentials() {
            let e = await Hi(this.keyFilePath, "utf8");
            let t;
            try {
                t = JSON.parse(e);
            } catch (error) {
                throw Error(`Invalid JSON key file: ${error.message}`);
            }
            let t_private_key = t.private_key;
            let t_client_email = t.client_email;
            if (!t_private_key || !t_client_email) {
                throw new Je.ErrorWithCode("private_key and client_email are required.", "MISSING_CREDENTIALS");
            }
            return {
                privateKey: t_private_key,
                clientEmail: t_client_email
            };
        }
    }
    class Ji {
        keyFilePath;
        constructor(e){
            this.keyFilePath = e;
        }
        async getCredentials() {
            return {
                privateKey: await Hi(this.keyFilePath, "utf8")
            };
        }
    }
    class Ki {
        async getCredentials() {
            throw new Je.ErrorWithCode("*.p12 certificates are not supported after v6.1.2. Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.", "UNKNOWN_CERTIFICATE_TYPE");
        }
    }
    class Wi {
        static create(e) {
            switch(Gi.extname(e)){
                case $e.JSON:
                    return new $i(e);
                case $e.DER:
                case $e.CRT:
                case $e.PEM:
                    return new Ji(e);
                case $e.P12:
                case $e.PFX:
                    return new Ki;
                default:
                    throw new Je.ErrorWithCode("Unknown certificate type. Type is determined based on file extension. Current supported extensions are *.json, and *.pem.", "UNKNOWN_CERTIFICATE_TYPE");
            }
        }
    }
    async function wl(e) {
        return Wi.create(e).getCredentials();
    }
});
const eo = C(function(Qi) {
    Object.defineProperty(Qi, "__esModule", {
        value: true
    });
    Qi.TokenHandler = undefined;
    const Yi = Di();
    const Xi = Yr();
    class zi {
        token;
        tokenExpiresAt;
        inFlightRequest;
        tokenOptions;
        constructor(e){
            this.tokenOptions = e;
        }
        async processCredentials() {
            if (!this.tokenOptions.key && !this.tokenOptions.keyFile) {
                throw Error("No key or keyFile set.");
            }
            if (!this.tokenOptions.key && this.tokenOptions.keyFile) {
                let e = await Xi.getCredentials(this.tokenOptions.keyFile);
                this.tokenOptions.key = e.privateKey;
                this.tokenOptions.email = e.clientEmail;
            }
        }
        isTokenExpiring() {
            if (!this.token || !this.tokenExpiresAt) {
                return true;
            }
            let e = new Date().getTime();
            let t = this.tokenOptions.eagerRefreshThresholdMillis ?? 0;
            return this.tokenExpiresAt <= e + t;
        }
        hasExpired() {
            let e = new Date().getTime();
            if (this.token && this.tokenExpiresAt) {
                return new Date().getTime() >= this.tokenExpiresAt;
            }
            return true;
        }
        async getToken(e) {
            await this.processCredentials();
            if (this.inFlightRequest && !e) {
                return this.inFlightRequest;
            }
            if (this.token && !this.isTokenExpiring() && !e) {
                return this.token;
            }
            try {
                this.inFlightRequest = Yi.getToken(this.tokenOptions);
                let t = await this.inFlightRequest;
                this.token = t;
                this.tokenExpiresAt = new Date().getTime() + (t.expires_in ?? 0) * 1000;
                return t;
            } finally{
                this.inFlightRequest = undefined;
            }
        }
    }
    Qi.TokenHandler = zi;
});
const ro = C(function(to) {
    Object.defineProperty(to, "__esModule", {
        value: true
    });
    to.revokeToken = vl;
    var Tl = "https://oauth2.googleapis.com/revoke?token=";
    var retry = true;
    async function vl(e, t) {
        let r = Tl + e;
        return await t.request({
            url: r,
            retry
        });
    }
});
const Xr = C(function(oo) {
    Object.defineProperty(oo, "__esModule", {
        value: true
    });
    oo.GoogleToken = undefined;
    const so = re();
    const Xt = eo();
    const no = ro();
    class io {
        tokenOptions;
        tokenHandler;
        constructor(e){
            this.tokenOptions = e || {};
            this.tokenOptions.transporter = this.tokenOptions.transporter || {
                request: (t)=>so.request(t)
            };
            if (!this.tokenOptions.iss) {
                this.tokenOptions.iss = this.tokenOptions.email;
            }
            if (typeof this.tokenOptions.scope === "object") {
                this.tokenOptions.scope = this.tokenOptions.scope.join(" ");
            }
            this.tokenHandler = new Xt.TokenHandler(this.tokenOptions);
        }
        get expiresAt() {
            return this.tokenHandler.tokenExpiresAt;
        }
        get accessToken() {
            return this.tokenHandler.token?.access_token;
        }
        get idToken() {
            return this.tokenHandler.token?.id_token;
        }
        get tokenType() {
            return this.tokenHandler.token?.token_type;
        }
        get refreshToken() {
            return this.tokenHandler.token?.refresh_token;
        }
        hasExpired() {
            return this.tokenHandler.hasExpired();
        }
        isTokenExpiring() {
            return this.tokenHandler.isTokenExpiring();
        }
        getToken(e, t = {
            forceRefresh: false
        }) {
            let r;
            if (typeof e === "function") {
                r = e;
            } else if (typeof e === "object") {
                t = e;
            }
            let s = this.tokenHandler.getToken(t.forceRefresh ?? false);
            if (r) {
                s.then((n)=>r(null, n), r);
            }
            return s;
        }
        revokeToken(e) {
            if (!this.accessToken) {
                return Promise.reject(Error("No token to revoke."));
            }
            let t = no.revokeToken(this.accessToken, this.tokenOptions.transporter);
            if (e) {
                t.then(()=>e(), e);
            }
            this.tokenHandler = new Xt.TokenHandler(this.tokenOptions);
        }
        get googleTokenOptions() {
            return this.tokenOptions;
        }
    }
    oo.GoogleToken = io;
});
const Qr = C(function(ho) {
    Object.defineProperty(ho, "__esModule", {
        value: true
    });
    ho.JWTAccess = undefined;
    const uo = RPt();
    const lo = Re();
    const co = {
        alg: "RS256",
        typ: "JWT"
    };
    class zr {
        email;
        key;
        keyId;
        projectId;
        eagerRefreshThresholdMillis;
        cache = new lo.LRUCache({
            capacity: 500,
            maxAge: 3600000
        });
        constructor(e, t, r, s){
            this.email = e;
            this.key = t;
            this.keyId = r;
            this.eagerRefreshThresholdMillis = s ?? 300000;
        }
        getCachedKey(e, t) {
            let r = e;
            if (t && Array.isArray(t) && t.length) {
                r = e ? `${e}_${t.join("_")}` : `${t.join("_")}`;
            } else if (typeof t === "string") {
                r = e ? `${e}_${t}` : t;
            }
            if (!r) {
                throw Error("Scopes or url must be provided");
            }
            return r;
        }
        getRequestHeaders(aud, t, scope) {
            let s = this.getCachedKey(aud, scope);
            let n = this.cache.get(s);
            let a = Date.now();
            if (n && n.expiration - a > this.eagerRefreshThresholdMillis) {
                return new Headers(n.headers);
            }
            let h = Math.floor(Date.now() / 1000);
            let exp = zr.getExpirationTime(h);
            let E;
            if (Array.isArray(scope)) {
                scope = scope.join(" ");
            }
            if (scope) {
                E = {
                    iss: this.email,
                    sub: this.email,
                    scope,
                    exp,
                    iat: h
                };
            } else {
                E = {
                    iss: this.email,
                    sub: this.email,
                    aud,
                    exp,
                    iat: h
                };
            }
            if (t) {
                for(let Y in E){
                    if (t[Y]) {
                        throw Error(`The '${Y}' property is not allowed when passing additionalClaims. This claim is included in the JWT by default.`);
                    }
                }
            }
            let header = this.keyId ? {
                ...co,
                kid: this.keyId
            } : co;
            let T = Object.assign(E, t);
            let j = uo.sign({
                header,
                payload: T,
                secret: this.key
            });
            let I = new Headers({
                authorization: `Bearer ${j}`
            });
            this.cache.set(s, {
                expiration: exp * 1000,
                headers: I
            });
            return I;
        }
        static getExpirationTime(e) {
            return e + 3600;
        }
        fromJSON(e) {
            if (!e) {
                throw Error("Must pass in a JSON object containing the service account auth settings.");
            }
            if (!e.client_email) {
                throw Error("The incoming JSON object does not contain a client_email field");
            }
            if (!e.private_key) {
                throw Error("The incoming JSON object does not contain a private_key field");
            }
            this.email = e.client_email;
            this.key = e.private_key;
            this.keyId = e.private_key_id;
            this.projectId = e.project_id;
        }
        fromStream(e, t) {
            if (t) {
                this.fromStreamAsync(e).then(()=>t(), t);
            } else {
                return this.fromStreamAsync(e);
            }
        }
        fromStreamAsync(e) {
            return new Promise((resolve, reject)=>{
                if (!e) {
                    reject(Error("Must pass in a stream containing the service account auth settings."));
                }
                let s = "";
                e.setEncoding("utf8").on("data", (n)=>s += n).on("error", reject).on("end", ()=>{
                    try {
                        let n = JSON.parse(s);
                        this.fromJSON(n);
                        resolve();
                    } catch (error) {
                        reject(error);
                    }
                });
            });
        }
    }
    ho.JWTAccess = zr;
});
const es = C(function(_o) {
    Object.defineProperty(_o, "__esModule", {
        value: true
    });
    _o.JWT = undefined;
    const zt = Xr();
    const po = Yr();
    const go = Qr();
    const yo = st();
    const Ke = fe();
    class Zr extends yo.OAuth2Client {
        email;
        keyFile;
        key;
        keyId;
        defaultScopes;
        scopes;
        scope;
        subject;
        gtoken;
        additionalClaims;
        useJWTAccessWithScope;
        defaultServicePath;
        access;
        constructor(e = {}){
            super(e);
            this.email = e.email;
            this.keyFile = e.keyFile;
            this.key = e.key;
            this.keyId = e.keyId;
            this.scopes = e.scopes;
            this.subject = e.subject;
            this.additionalClaims = e.additionalClaims;
            this.credentials = {
                refresh_token: "jwt-placeholder",
                expiry_date: 1
            };
        }
        createScoped(e) {
            let t = new Zr(this);
            t.scopes = e;
            return t;
        }
        async getRequestMetadataAsync(e) {
            e = this.defaultServicePath ? `https://${this.defaultServicePath}/` : e;
            let t = !this.hasUserScopes() && e || this.useJWTAccessWithScope && this.hasAnyScopes() || this.universeDomain !== Ke.DEFAULT_UNIVERSE;
            if (this.subject && this.universeDomain !== Ke.DEFAULT_UNIVERSE) {
                throw RangeError(`Service Account user is configured for the credential. Domain-wide delegation is not supported in universes other than ${Ke.DEFAULT_UNIVERSE}`);
            }
            if (!this.apiKey && t) {
                if (this.additionalClaims && this.additionalClaims.target_audience) {
                    let { tokens } = await this.refreshToken();
                    return {
                        headers: this.addSharedMetadataHeaders(new Headers({
                            authorization: `Bearer ${tokens.id_token}`
                        }))
                    };
                } else {
                    if (!this.access) {
                        this.access = new go.JWTAccess(this.email, this.key, this.keyId, this.eagerRefreshThresholdMillis);
                    }
                    let r;
                    if (this.hasUserScopes()) {
                        r = this.scopes;
                    } else if (!e) {
                        r = this.defaultScopes;
                    }
                    let s = this.useJWTAccessWithScope || this.universeDomain !== Ke.DEFAULT_UNIVERSE;
                    let n = await this.access.getRequestHeaders(e ?? undefined, this.additionalClaims, s ? r : undefined);
                    return {
                        headers: this.addSharedMetadataHeaders(n)
                    };
                }
            } else if (this.hasAnyScopes() || this.apiKey) {
                return super.getRequestMetadataAsync(e);
            } else {
                return {
                    headers: new Headers
                };
            }
        }
        async fetchIdToken(e) {
            let t = new zt.GoogleToken({
                iss: this.email,
                sub: this.subject,
                scope: this.scopes || this.defaultScopes,
                keyFile: this.keyFile,
                key: this.key,
                additionalClaims: {
                    target_audience: e
                },
                transporter: this.transporter
            });
            await t.getToken({
                forceRefresh: true
            });
            if (!t.idToken) {
                throw Error("Unknown error: Failed to fetch ID token");
            }
            return t.idToken;
        }
        hasUserScopes() {
            if (!this.scopes) {
                return false;
            }
            return this.scopes.length > 0;
        }
        hasAnyScopes() {
            if (this.scopes && this.scopes.length > 0) {
                return true;
            }
            if (this.defaultScopes && this.defaultScopes.length > 0) {
                return true;
            }
            return false;
        }
        authorize(e) {
            if (e) {
                this.authorizeAsync().then((t)=>e(null, t), e);
            } else {
                return this.authorizeAsync();
            }
        }
        async authorizeAsync() {
            let e = await this.refreshToken();
            if (!e) {
                throw Error("No result returned");
            }
            this.credentials = e.tokens;
            this.credentials.refresh_token = "jwt-placeholder";
            this.key = this.gtoken.googleTokenOptions?.key;
            this.email = this.gtoken.googleTokenOptions?.iss;
            return e.tokens;
        }
        async refreshTokenNoCache() {
            let e = this.createGToken();
            let r = {
                access_token: (await e.getToken({
                    forceRefresh: this.isTokenExpiring()
                })).access_token,
                token_type: "Bearer",
                expiry_date: e.expiresAt,
                id_token: e.idToken
            };
            this.emit("tokens", r);
            return {
                res: null,
                tokens: r
            };
        }
        createGToken() {
            if (!this.gtoken) {
                this.gtoken = new zt.GoogleToken({
                    iss: this.email,
                    sub: this.subject,
                    scope: this.scopes || this.defaultScopes,
                    keyFile: this.keyFile,
                    key: this.key,
                    additionalClaims: this.additionalClaims,
                    transporter: this.transporter
                });
            }
            return this.gtoken;
        }
        fromJSON(e) {
            if (!e) {
                throw Error("Must pass in a JSON object containing the service account auth settings.");
            }
            if (!e.client_email) {
                throw Error("The incoming JSON object does not contain a client_email field");
            }
            if (!e.private_key) {
                throw Error("The incoming JSON object does not contain a private_key field");
            }
            this.email = e.client_email;
            this.key = e.private_key;
            this.keyId = e.private_key_id;
            this.projectId = e.project_id;
            this.quotaProjectId = e.quota_project_id;
            this.universeDomain = e.universe_domain || this.universeDomain;
        }
        fromStream(e, t) {
            if (t) {
                this.fromStreamAsync(e).then(()=>t(), t);
            } else {
                return this.fromStreamAsync(e);
            }
        }
        fromStreamAsync(e) {
            return new Promise((resolve, reject)=>{
                if (!e) {
                    throw Error("Must pass in a stream containing the service account auth settings.");
                }
                let s = "";
                e.setEncoding("utf8").on("error", reject).on("data", (n)=>s += n).on("end", ()=>{
                    try {
                        let n = JSON.parse(s);
                        this.fromJSON(n);
                        resolve();
                    } catch (error) {
                        reject(error);
                    }
                });
            });
        }
        fromAPIKey(e) {
            if (typeof e !== "string") {
                throw Error("Must provide an API Key string.");
            }
            this.apiKey = e;
        }
        async getCredentials() {
            if (this.key) {
                return {
                    private_key: this.key,
                    client_email: this.email
                };
            } else if (this.keyFile) {
                let e = this.createGToken();
                let t = await po.getCredentials(this.keyFile);
                return {
                    private_key: t.privateKey,
                    client_email: t.clientEmail
                };
            }
            throw Error("A key or a keyFile must be provided to getCredentials.");
        }
    }
    _o.JWT = Zr;
});
const ts = C(function(Ao) {
    Object.defineProperty(Ao, "__esModule", {
        value: true
    });
    Ao.UserRefreshClient = Ao.USER_REFRESH_ACCOUNT_TYPE = undefined;
    const Eo = st();
    const wo = fe();
    Ao.USER_REFRESH_ACCOUNT_TYPE = "authorized_user";
    class Qt extends Eo.OAuth2Client {
        _refreshToken;
        constructor(e, t, refreshToken, eagerRefreshThresholdMillis, forceRefreshOnFailure){
            let a = e && typeof e === "object" ? e : {
                clientId: e,
                clientSecret: t,
                refreshToken,
                eagerRefreshThresholdMillis,
                forceRefreshOnFailure
            };
            super(a);
            this._refreshToken = a.refreshToken;
            this.credentials.refresh_token = a.refreshToken;
        }
        async refreshTokenNoCache() {
            return super.refreshTokenNoCache(this._refreshToken);
        }
        async fetchIdToken(e) {
            let t = {
                ...Qt.RETRY_CONFIG,
                url: this.endpoints.oauth2TokenUrl,
                method: "POST",
                data: new URLSearchParams({
                    client_id: this._clientId,
                    client_secret: this._clientSecret,
                    grant_type: "refresh_token",
                    refresh_token: this._refreshToken,
                    target_audience: e
                }),
                responseType: "json"
            };
            wo.AuthClient.setMethodName(t, "fetchIdToken");
            return (await this.transporter.request(t)).data.id_token;
        }
        fromJSON(e) {
            if (!e) {
                throw Error("Must pass in a JSON object containing the user refresh token");
            }
            if (e.type !== "authorized_user") {
                throw Error('The incoming JSON object does not have the "authorized_user" type');
            }
            if (!e.client_id) {
                throw Error("The incoming JSON object does not contain a client_id field");
            }
            if (!e.client_secret) {
                throw Error("The incoming JSON object does not contain a client_secret field");
            }
            if (!e.refresh_token) {
                throw Error("The incoming JSON object does not contain a refresh_token field");
            }
            this._clientId = e.client_id;
            this._clientSecret = e.client_secret;
            this._refreshToken = e.refresh_token;
            this.credentials.refresh_token = e.refresh_token;
            this.quotaProjectId = e.quota_project_id;
            this.universeDomain = e.universe_domain || this.universeDomain;
        }
        fromStream(e, t) {
            if (t) {
                this.fromStreamAsync(e).then(()=>t(), t);
            } else {
                return this.fromStreamAsync(e);
            }
        }
        async fromStreamAsync(e) {
            return new Promise((resolve, reject)=>{
                if (!e) {
                    return reject(Error("Must pass in a stream containing the user refresh token."));
                }
                let s = "";
                e.setEncoding("utf8").on("error", reject).on("data", (n)=>s += n).on("end", ()=>{
                    try {
                        let n = JSON.parse(s);
                        this.fromJSON(n);
                        return resolve();
                    } catch (error) {
                        return reject(error);
                    }
                });
            });
        }
        static fromJSON(e) {
            let t = new Qt;
            t.fromJSON(e);
            return t;
        }
    }
    Ao.UserRefreshClient = Qt;
});
const rs = C(function(ko) {
    Object.defineProperty(ko, "__esModule", {
        value: true
    });
    ko.Impersonated = ko.IMPERSONATED_ACCOUNT_TYPE = undefined;
    const Zt = st();
    const Co = re();
    const vo = Re();
    ko.IMPERSONATED_ACCOUNT_TYPE = "impersonated_service_account";
    class xt extends Zt.OAuth2Client {
        sourceClient;
        targetPrincipal;
        targetScopes;
        delegates;
        lifetime;
        endpoint;
        constructor(e = {}){
            super(e);
            this.credentials = {
                expiry_date: 1,
                refresh_token: "impersonated-placeholder"
            };
            this.sourceClient = e.sourceClient ?? new Zt.OAuth2Client;
            this.targetPrincipal = e.targetPrincipal ?? "";
            this.delegates = e.delegates ?? [];
            this.targetScopes = e.targetScopes ?? [];
            this.lifetime = e.lifetime ?? 3600;
            if (!vo.originalOrCamelOptions(e).get("universe_domain")) {
                this.universeDomain = this.sourceClient.universeDomain;
            } else if (this.sourceClient.universeDomain !== this.universeDomain) {
                throw RangeError(`Universe domain ${this.sourceClient.universeDomain} in source credentials does not match ${this.universeDomain} universe domain set for impersonated credentials.`);
            }
            this.endpoint = e.endpoint ?? `https://iamcredentials.${this.universeDomain}`;
        }
        async sign(e) {
            await this.sourceClient.getAccessToken();
            let t = `projects/-/serviceAccounts/${this.targetPrincipal}`;
            let r = `${this.endpoint}/v1/${t}:signBlob`;
            let s = {
                delegates: this.delegates,
                payload: Buffer.from(e).toString("base64")
            };
            return (await this.sourceClient.request({
                ...xt.RETRY_CONFIG,
                url: r,
                data: s,
                method: "POST"
            })).data;
        }
        getTargetPrincipal() {
            return this.targetPrincipal;
        }
        async refreshToken() {
            try {
                await this.sourceClient.getAccessToken();
                let e = `projects/-/serviceAccounts/${this.targetPrincipal}`;
                let t = `${this.endpoint}/v1/${e}:generateAccessToken`;
                let r = {
                    delegates: this.delegates,
                    scope: this.targetScopes,
                    lifetime: `${this.lifetime}s`
                };
                let s = await this.sourceClient.request({
                    ...xt.RETRY_CONFIG,
                    url: t,
                    data: r,
                    method: "POST"
                });
                let n = s.data;
                this.credentials.access_token = n.accessToken;
                this.credentials.expiry_date = Date.parse(n.expireTime);
                return {
                    tokens: this.credentials,
                    res: s
                };
            } catch (error) {
                if (!(error instanceof Error)) {
                    throw error;
                }
                let t = 0;
                let r = "";
                if (error instanceof Co.GaxiosError) {
                    t = error?.response?.data?.error?.status;
                    r = error?.response?.data?.error?.message;
                }
                if (t && r) {
                    error.message = `${t}: unable to impersonate: ${r}`;
                    throw error;
                } else {
                    error.message = `unable to impersonate: ${error}`;
                    throw error;
                }
            }
        }
        async fetchIdToken(audience, t) {
            await this.sourceClient.getAccessToken();
            let r = `projects/-/serviceAccounts/${this.targetPrincipal}`;
            let s = `${this.endpoint}/v1/${r}:generateIdToken`;
            let n = {
                delegates: this.delegates,
                audience,
                includeEmail: t?.includeEmail ?? true,
                useEmailAzp: t?.includeEmail ?? true
            };
            return (await this.sourceClient.request({
                ...xt.RETRY_CONFIG,
                url: s,
                data: n,
                method: "POST"
            })).data.token;
        }
    }
    ko.Impersonated = xt;
});
const ss = C(function(xo) {
    Object.defineProperty(xo, "__esModule", {
        value: true
    });
    xo.OAuthClientAuthHandler = undefined;
    xo.getErrorFromOAuthErrorResponse = xl;
    const Te = re();
    const Oo = St();
    const Rl = [
        "PUT",
        "POST",
        "PATCH"
    ];
    class Ro {
        #e = Oo.createCrypto();
        #t;
        transporter;
        constructor(e){
            if (e && "clientId" in e) {
                this.#t = e;
                this.transporter = new Te.Gaxios;
            } else {
                this.#t = e?.clientAuthentication;
                this.transporter = e?.transporter || new Te.Gaxios;
            }
        }
        applyClientAuthenticationOptions(e, t) {
            e.headers = Te.Gaxios.mergeHeaders(e.headers);
            this.injectAuthenticatedHeaders(e, t);
            if (!t) {
                this.injectAuthenticatedRequestBody(e);
            }
        }
        injectAuthenticatedHeaders(e, t) {
            if (t) {
                e.headers = Te.Gaxios.mergeHeaders(e.headers, {
                    authorization: `Bearer ${t}`
                });
            } else if (this.#t?.confidentialClientType === "basic") {
                e.headers = Te.Gaxios.mergeHeaders(e.headers);
                let r = this.#t.clientId;
                let s = this.#t.clientSecret || "";
                let n = this.#e.encodeBase64StringUtf8(`${r}:${s}`);
                Te.Gaxios.mergeHeaders(e.headers, {
                    authorization: `Basic ${n}`
                });
            }
        }
        injectAuthenticatedRequestBody(e) {
            if (this.#t?.confidentialClientType === "request-body") {
                let t = (e.method || "GET").toUpperCase();
                if (!Rl.includes(t)) {
                    throw Error(`${t} HTTP method does not support ${this.#t.confidentialClientType} client authentication`);
                }
                let s = new Headers(e.headers).get("content-type");
                if (s?.startsWith("application/x-www-form-urlencoded") || e.data instanceof URLSearchParams) {
                    let n = new URLSearchParams(e.data ?? "");
                    n.append("client_id", this.#t.clientId);
                    n.append("client_secret", this.#t.clientSecret || "");
                    e.data = n;
                } else if (s?.startsWith("application/json")) {
                    e.data = e.data || {};
                    Object.assign(e.data, {
                        client_id: this.#t.clientId,
                        client_secret: this.#t.clientSecret || ""
                    });
                } else {
                    throw Error(`${s} content-types are not supported with ${this.#t.confidentialClientType} client authentication`);
                }
            }
        }
        static get RETRY_CONFIG() {
            return {
                retry: true,
                retryConfig: {
                    httpMethodsToRetry: [
                        "GET",
                        "PUT",
                        "POST",
                        "HEAD",
                        "OPTIONS",
                        "DELETE"
                    ]
                }
            };
        }
    }
    xo.OAuthClientAuthHandler = Ro;
    function xl({ error, error_description, error_uri }, t) {
        let a = `Error code ${error}`;
        if (typeof error_description !== "undefined") {
            a += `: ${error_description}`;
        }
        if (typeof error_uri !== "undefined") {
            a += ` - ${error_uri}`;
        }
        let h = Error(a);
        if (t) {
            let g = Object.keys(t);
            if (t.stack) {
                g.push("stack");
            }
            g.forEach((E)=>{
                if (E !== "message") {
                    Object.defineProperty(h, E, {
                        value: t[E],
                        writable: false,
                        enumerable: true
                    });
                }
            });
        }
        return h;
    }
});
const tr = C(function(Uo) {
    Object.defineProperty(Uo, "__esModule", {
        value: true
    });
    Uo.StsCredentials = undefined;
    const No = re();
    const Po = fe();
    const er = ss();
    const Io = Re();
    class ns extends er.OAuthClientAuthHandler {
        #e;
        constructor(tokenExchangeEndpoint = {
            tokenExchangeEndpoint: ""
        }, t){
            if (typeof tokenExchangeEndpoint !== "object" || tokenExchangeEndpoint instanceof URL) {
                tokenExchangeEndpoint = {
                    tokenExchangeEndpoint,
                    clientAuthentication: t
                };
            }
            super(tokenExchangeEndpoint);
            this.#e = tokenExchangeEndpoint.tokenExchangeEndpoint;
        }
        async exchangeToken(e, t, r) {
            let s = {
                grant_type: e.grantType,
                resource: e.resource,
                audience: e.audience,
                scope: e.scope?.join(" "),
                requested_token_type: e.requestedTokenType,
                subject_token: e.subjectToken,
                subject_token_type: e.subjectTokenType,
                actor_token: e.actingParty?.actorToken,
                actor_token_type: e.actingParty?.actorTokenType,
                options: r && JSON.stringify(r)
            };
            let n = {
                ...ns.RETRY_CONFIG,
                url: this.#e.toString(),
                method: "POST",
                headers: t,
                data: new URLSearchParams(Io.removeUndefinedValuesInObject(s)),
                responseType: "json"
            };
            Po.AuthClient.setMethodName(n, "exchangeToken");
            this.applyClientAuthenticationOptions(n);
            try {
                let a = await this.transporter.request(n);
                let h = a.data;
                h.res = a;
                return h;
            } catch (error) {
                if (error instanceof No.GaxiosError && error.response) {
                    throw er.getErrorFromOAuthErrorResponse(error.response.data, error);
                }
                throw error;
            }
        }
    }
    Uo.StsCredentials = ns;
});
const We = C(function(Lo) {
    Object.defineProperty(Lo, "__esModule", {
        value: true
    });
    Lo.BaseExternalAccountClient = Lo.CLOUD_RESOURCE_MANAGER = Lo.EXTERNAL_ACCOUNT_TYPE = Lo.EXPIRATION_TIME_OFFSET = undefined;
    const Do = re();
    const qo = Le("stream");
    const dt = fe();
    const Fo = tr();
    const rr = Re();
    const Mo = Hr();
    const Nl = "urn:ietf:params:oauth:grant-type:token-exchange";
    const Pl = "urn:ietf:params:oauth:token-type:access_token";
    const is = "https://www.googleapis.com/auth/cloud-platform";
    const Il = 3600;
    Lo.EXPIRATION_TIME_OFFSET = 300000;
    Lo.EXTERNAL_ACCOUNT_TYPE = "external_account";
    Lo.CLOUD_RESOURCE_MANAGER = "https://cloudresourcemanager.googleapis.com/v1/projects/";
    const Ul = "//iam\\.googleapis\\.com/locations/[^/]+/workforcePools/[^/]+/providers/.+";
    const jl = "https://sts.{universeDomain}/v1/token";
    class sr extends dt.AuthClient {
        scopes;
        projectNumber;
        audience;
        subjectTokenType;
        stsCredential;
        clientAuth;
        credentialSourceType;
        cachedAccessToken;
        serviceAccountImpersonationUrl;
        serviceAccountImpersonationLifetime;
        workforcePoolUserProject;
        configLifetimeRequested;
        tokenUrl;
        cloudResourceManagerURL;
        supplierContext;
        #e = null;
        constructor(e){
            super(e);
            let t = rr.originalOrCamelOptions(e);
            let r = t.get("type");
            if (r && r !== Lo.EXTERNAL_ACCOUNT_TYPE) {
                throw Error(`Expected "${Lo.EXTERNAL_ACCOUNT_TYPE}" type but received "${e.type}"`);
            }
            let s = t.get("client_id");
            let n = t.get("client_secret");
            this.tokenUrl = t.get("token_url") ?? jl.replace("{universeDomain}", this.universeDomain);
            let a = t.get("subject_token_type");
            let h = t.get("workforce_pool_user_project");
            let g = t.get("service_account_impersonation_url");
            let E = t.get("service_account_impersonation");
            let S = rr.originalOrCamelOptions(E).get("token_lifetime_seconds");
            this.cloudResourceManagerURL = new URL(t.get("cloud_resource_manager_url") || `https://cloudresourcemanager.${this.universeDomain}/v1/projects/`);
            if (s) {
                this.clientAuth = {
                    confidentialClientType: "basic",
                    clientId: s,
                    clientSecret: n
                };
            }
            this.stsCredential = new Fo.StsCredentials({
                tokenExchangeEndpoint: this.tokenUrl,
                clientAuthentication: this.clientAuth
            });
            this.scopes = t.get("scopes") || [
                is
            ];
            this.cachedAccessToken = null;
            this.audience = t.get("audience");
            this.subjectTokenType = a;
            this.workforcePoolUserProject = h;
            let T = new RegExp(Ul);
            if (this.workforcePoolUserProject && !this.audience.match(T)) {
                throw Error("workforcePoolUserProject should not be set for non-workforce pool credentials.");
            }
            this.serviceAccountImpersonationUrl = g;
            this.serviceAccountImpersonationLifetime = S;
            if (this.serviceAccountImpersonationLifetime) {
                this.configLifetimeRequested = true;
            } else {
                this.configLifetimeRequested = false;
                this.serviceAccountImpersonationLifetime = Il;
            }
            this.projectNumber = this.getProjectNumber(this.audience);
            this.supplierContext = {
                audience: this.audience,
                subjectTokenType: this.subjectTokenType,
                transporter: this.transporter
            };
        }
        getServiceAccountEmail() {
            if (this.serviceAccountImpersonationUrl) {
                if (this.serviceAccountImpersonationUrl.length > 256) {
                    throw RangeError(`URL is too long: ${this.serviceAccountImpersonationUrl}`);
                }
                return /serviceAccounts\/(?<email>[^:]+):generateAccessToken$/.exec(this.serviceAccountImpersonationUrl)?.groups?.email || null;
            }
            return null;
        }
        setCredentials(e) {
            super.setCredentials(e);
            this.cachedAccessToken = e;
        }
        async getAccessToken() {
            if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) {
                await this.refreshAccessTokenAsync();
            }
            return {
                token: this.cachedAccessToken.access_token,
                res: this.cachedAccessToken.res
            };
        }
        async getRequestHeaders() {
            let e = await this.getAccessToken();
            let t = new Headers({
                authorization: `Bearer ${e.token}`
            });
            return this.addSharedMetadataHeaders(t);
        }
        request(e, t) {
            if (t) {
                this.requestAsync(e).then((r)=>t(null, r), (r)=>t(r, r.response));
            } else {
                return this.requestAsync(e);
            }
        }
        async getProjectId() {
            let e = this.projectNumber || this.workforcePoolUserProject;
            if (this.projectId) {
                return this.projectId;
            } else if (e) {
                let t = await this.getRequestHeaders();
                let r = {
                    ...sr.RETRY_CONFIG,
                    headers: t,
                    url: `${this.cloudResourceManagerURL.toString()}${e}`,
                    responseType: "json"
                };
                dt.AuthClient.setMethodName(r, "getProjectId");
                let s = await this.transporter.request(r);
                this.projectId = s.data.projectId;
                return this.projectId;
            }
            return null;
        }
        async requestAsync(e, t = false) {
            let r;
            try {
                let s = await this.getRequestHeaders();
                e.headers = Do.Gaxios.mergeHeaders(e.headers);
                this.addUserProjectAndAuthHeaders(e.headers, s);
                r = await this.transporter.request(e);
            } catch (error) {
                let n = error.response;
                if (n) {
                    let a = n.status;
                    let h = n.config.data instanceof qo.Readable;
                    if (!t && (a === 401 || a === 403) && !h && this.forceRefreshOnFailure) {
                        await this.refreshAccessTokenAsync();
                        return await this.requestAsync(e, true);
                    }
                }
                throw error;
            }
            return r;
        }
        async refreshAccessTokenAsync() {
            this.#e = this.#e || this.#t();
            try {
                return await this.#e;
            } finally{
                this.#e = null;
            }
        }
        async #t() {
            let subjectToken = await this.retrieveSubjectToken();
            let t = {
                grantType: Nl,
                audience: this.audience,
                requestedTokenType: Pl,
                subjectToken,
                subjectTokenType: this.subjectTokenType,
                scope: this.serviceAccountImpersonationUrl ? [
                    is
                ] : this.getScopesArray()
            };
            let r = !this.clientAuth && this.workforcePoolUserProject ? {
                userProject: this.workforcePoolUserProject
            } : undefined;
            let s = new Headers({
                "x-goog-api-client": this.getMetricsHeaderValue()
            });
            let n = await this.stsCredential.exchangeToken(t, s, r);
            if (this.serviceAccountImpersonationUrl) {
                this.cachedAccessToken = await this.getImpersonatedAccessToken(n.access_token);
            } else if (n.expires_in) {
                this.cachedAccessToken = {
                    access_token: n.access_token,
                    expiry_date: new Date().getTime() + n.expires_in * 1000,
                    res: n.res
                };
            } else {
                this.cachedAccessToken = {
                    access_token: n.access_token,
                    res: n.res
                };
            }
            this.credentials = {};
            Object.assign(this.credentials, this.cachedAccessToken);
            delete this.credentials.res;
            this.emit("tokens", {
                refresh_token: null,
                expiry_date: this.cachedAccessToken.expiry_date,
                access_token: this.cachedAccessToken.access_token,
                token_type: "Bearer",
                id_token: null
            });
            return this.cachedAccessToken;
        }
        getProjectNumber(e) {
            let t = e.match(/\/projects\/([^/]+)/);
            if (!t) {
                return null;
            }
            return t[1];
        }
        async getImpersonatedAccessToken(e) {
            let t = {
                ...sr.RETRY_CONFIG,
                url: this.serviceAccountImpersonationUrl,
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${e}`
                },
                data: {
                    scope: this.getScopesArray(),
                    lifetime: `${this.serviceAccountImpersonationLifetime}s`
                },
                responseType: "json"
            };
            dt.AuthClient.setMethodName(t, "getImpersonatedAccessToken");
            let r = await this.transporter.request(t);
            let r_data = r.data;
            return {
                access_token: r_data.accessToken,
                expiry_date: new Date(r_data.expireTime).getTime(),
                res: r
            };
        }
        isExpired(e) {
            let t = new Date().getTime();
            if (e.expiry_date) {
                return t >= e.expiry_date - this.eagerRefreshThresholdMillis;
            }
            return false;
        }
        getScopesArray() {
            if (typeof this.scopes === "string") {
                return [
                    this.scopes
                ];
            }
            return this.scopes || [
                is
            ];
        }
        getMetricsHeaderValue() {
            let e = process.version.replace(/^v/, "");
            let t = this.serviceAccountImpersonationUrl !== undefined;
            let r = this.credentialSourceType ? this.credentialSourceType : "unknown";
            return `gl-node/${e} auth/${Mo.pkg.version} google-byoid-sdk source/${r} sa-impersonation/${t} config-lifetime/${this.configLifetimeRequested}`;
        }
        getTokenUrl() {
            return this.tokenUrl;
        }
    }
    Lo.BaseExternalAccountClient = sr;
});
const Jo = C(function(Ho) {
    Object.defineProperty(Ho, "__esModule", {
        value: true
    });
    Ho.FileSubjectTokenSupplier = undefined;
    const ht = Le("util");
    const ft = Le("fs");
    const Fl = ht.promisify(ft.readFile ?? (()=>{}));
    const Ml = ht.promisify(ft.realpath ?? (()=>{}));
    const Ll = ht.promisify(ft.lstat ?? (()=>{}));
    class Bo {
        filePath;
        formatType;
        subjectTokenFieldName;
        constructor(e){
            this.filePath = e.filePath;
            this.formatType = e.formatType;
            this.subjectTokenFieldName = e.subjectTokenFieldName;
        }
        async getSubjectToken() {
            let filePath = this.filePath;
            try {
                filePath = await Ml(filePath);
                if (!(await Ll(filePath)).isFile()) {
                    throw Error();
                }
            } catch (error) {
                if (error instanceof Error) {
                    error.message = `The file at ${filePath} does not exist, or it is not a file. ${error.message}`;
                }
                throw error;
            }
            let t;
            let r = await Fl(filePath, {
                encoding: "utf8"
            });
            if (this.formatType === "text") {
                t = r;
            } else if (this.formatType === "json" && this.subjectTokenFieldName) {
                t = JSON.parse(r)[this.subjectTokenFieldName];
            }
            if (!t) {
                throw Error("Unable to parse the subject_token from the credential_source file");
            }
            return t;
        }
    }
    Ho.FileSubjectTokenSupplier = Bo;
});
const Xo = C(function(Vo) {
    Object.defineProperty(Vo, "__esModule", {
        value: true
    });
    Vo.UrlSubjectTokenSupplier = undefined;
    const Ko = fe();
    class Wo {
        url;
        headers;
        formatType;
        subjectTokenFieldName;
        additionalGaxiosOptions;
        constructor(e){
            this.url = e.url;
            this.formatType = e.formatType;
            this.subjectTokenFieldName = e.subjectTokenFieldName;
            this.headers = e.headers;
            this.additionalGaxiosOptions = e.additionalGaxiosOptions;
        }
        async getSubjectToken(e) {
            let t = {
                ...this.additionalGaxiosOptions,
                url: this.url,
                method: "GET",
                headers: this.headers,
                responseType: this.formatType
            };
            Ko.AuthClient.setMethodName(t, "getSubjectToken");
            let r;
            if (this.formatType === "text") {
                r = (await e.transporter.request(t)).data;
            } else if (this.formatType === "json" && this.subjectTokenFieldName) {
                r = (await e.transporter.request(t)).data[this.subjectTokenFieldName];
            }
            if (!r) {
                throw Error("Unable to parse the subject_token from the credential_source URL");
            }
            return r;
        }
    }
    Vo.UrlSubjectTokenSupplier = Wo;
});
const ta = C(function(Zo) {
    Object.defineProperty(Zo, "__esModule", {
        value: true
    });
    Zo.CertificateSubjectTokenSupplier = Zo.InvalidConfigurationError = Zo.CertificateSourceUnavailableError = Zo.CERTIFICATE_CONFIGURATION_ENV_VARIABLE = undefined;
    const Ve = Re();
    const Ye = Le("fs");
    const Xe = Le("crypto");
    const zo = Le("https");
    Zo.CERTIFICATE_CONFIGURATION_ENV_VARIABLE = "GOOGLE_API_CERTIFICATE_CONFIG";
    class Me extends Error {
        constructor(e){
            super(e);
            this.name = "CertificateSourceUnavailableError";
        }
    }
    Zo.CertificateSourceUnavailableError = Me;
    class xe extends Error {
        constructor(e){
            super(e);
            this.name = "InvalidConfigurationError";
        }
    }
    Zo.InvalidConfigurationError = xe;
    class Qo {
        certificateConfigPath;
        trustChainPath;
        cert;
        key;
        constructor(e){
            if (!e.useDefaultCertificateConfig && !e.certificateConfigLocation) {
                throw new xe("Either `useDefaultCertificateConfig` must be true or a `certificateConfigLocation` must be provided.");
            }
            if (e.useDefaultCertificateConfig && e.certificateConfigLocation) {
                throw new xe("Both `useDefaultCertificateConfig` and `certificateConfigLocation` cannot be provided.");
            }
            this.trustChainPath = e.trustChainPath;
            this.certificateConfigPath = e.certificateConfigLocation ?? "";
        }
        async createMtlsHttpsAgent() {
            if (!this.key || !this.cert) {
                throw new xe("Cannot create mTLS Agent with missing certificate or key");
            }
            return new zo.Agent({
                key: this.key,
                cert: this.cert
            });
        }
        async getSubjectToken() {
            this.certificateConfigPath = await this.#e();
            let { certPath, keyPath } = await this.#t();
            ({ cert: this.cert, key: this.key } = await this.#r(certPath, keyPath));
            return await this.#s(this.cert);
        }
        async #e() {
            let certificateConfigPath = this.certificateConfigPath;
            if (certificateConfigPath) {
                if (await Ve.isValidFile(certificateConfigPath)) {
                    return certificateConfigPath;
                }
                throw new Me(`Provided certificate config path is invalid: ${certificateConfigPath}`);
            }
            let t = process.env[Zo.CERTIFICATE_CONFIGURATION_ENV_VARIABLE];
            if (t) {
                if (await Ve.isValidFile(t)) {
                    return t;
                }
                throw new Me(`Path from environment variable "${Zo.CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" is invalid: ${t}`);
            }
            let r = Ve.getWellKnownCertificateConfigFileLocation();
            if (await Ve.isValidFile(r)) {
                return r;
            }
            throw new Me(`Could not find certificate configuration file. Searched override path, the "${Zo.CERTIFICATE_CONFIGURATION_ENV_VARIABLE}" env var, and the gcloud path (${r}).`);
        }
        async #t() {
            let certificateConfigPath = this.certificateConfigPath;
            let t;
            try {
                t = await Ye.promises.readFile(certificateConfigPath, "utf8");
            } catch (r) {
                throw new Me(`Failed to read certificate config file at: ${certificateConfigPath}`);
            }
            try {
                let r = JSON.parse(t);
                let certPath = r?.cert_configs?.workload?.cert_path;
                let keyPath = r?.cert_configs?.workload?.key_path;
                if (!certPath || !keyPath) {
                    throw new xe(`Certificate config file (${certificateConfigPath}) is missing required "cert_path" or "key_path" in the workload config.`);
                }
                return {
                    certPath,
                    keyPath
                };
            } catch (error) {
                if (error instanceof xe) {
                    throw error;
                }
                throw new xe(`Failed to parse certificate config from ${certificateConfigPath}: ${error.message}`);
            }
        }
        async #r(e, t) {
            let cert;
            let s;
            try {
                cert = await Ye.promises.readFile(e);
                new Xe.X509Certificate(cert);
            } catch (error) {
                let a = error instanceof Error ? error.message : String(error);
                throw new Me(`Failed to read certificate file at ${e}: ${a}`);
            }
            try {
                s = await Ye.promises.readFile(t);
                Xe.createPrivateKey(s);
            } catch (error) {
                let a = error instanceof Error ? error.message : String(error);
                throw new Me(`Failed to read private key file at ${t}: ${a}`);
            }
            return {
                cert,
                key: s
            };
        }
        async #s(e) {
            let t = new Xe.X509Certificate(e);
            if (!this.trustChainPath) {
                return JSON.stringify([
                    t.raw.toString("base64")
                ]);
            }
            try {
                let n = ((await Ye.promises.readFile(this.trustChainPath, "utf8")).match(/-----BEGIN CERTIFICATE-----[^-]+-----END CERTIFICATE-----/g) ?? []).map((g, E)=>{
                    try {
                        return new Xe.X509Certificate(g);
                    } catch (error) {
                        let T = error instanceof Error ? error.message : String(error);
                        throw new xe(`Failed to parse certificate at index ${E} in trust chain file ${this.trustChainPath}: ${T}`);
                    }
                });
                let a = n.findIndex((g)=>t.raw.equals(g.raw));
                let h;
                if (a === -1) {
                    h = [
                        t,
                        ...n
                    ];
                } else if (a === 0) {
                    h = n;
                } else {
                    throw new xe(`Leaf certificate exists in the trust chain but is not the first entry (found at index ${a}).`);
                }
                return JSON.stringify(h.map((g)=>g.raw.toString("base64")));
            } catch (error) {
                if (error instanceof xe) {
                    throw error;
                }
                let s = error instanceof Error ? error.message : String(error);
                throw new Me(`Failed to process certificate chain from ${this.trustChainPath}: ${s}`);
            }
        }
    }
    Zo.CertificateSubjectTokenSupplier = Qo;
});
const cs = C(function(oa) {
    Object.defineProperty(oa, "__esModule", {
        value: true
    });
    oa.IdentityPoolClient = undefined;
    const ra = We();
    const pt = Re();
    const sa = Jo();
    const na = Xo();
    const ir = ta();
    const ia = tr();
    const or = re();
    class as extends ra.BaseExternalAccountClient {
        subjectTokenSupplier;
        constructor(e){
            super(e);
            let t = pt.originalOrCamelOptions(e);
            let r = t.get("credential_source");
            let s = t.get("subject_token_supplier");
            if (!r && !s) {
                throw Error("A credential source or subject token supplier must be specified.");
            }
            if (r && s) {
                throw Error("Only one of credential source or subject token supplier can be specified.");
            }
            if (s) {
                this.subjectTokenSupplier = s;
                this.credentialSourceType = "programmatic";
            } else {
                let n = pt.originalOrCamelOptions(r);
                let a = pt.originalOrCamelOptions(n.get("format"));
                let formatType = a.get("type") || "text";
                let subjectTokenFieldName = a.get("subject_token_field_name");
                if (formatType !== "json" && formatType !== "text") {
                    throw Error(`Invalid credential_source format "${formatType}"`);
                }
                if (formatType === "json" && !subjectTokenFieldName) {
                    throw Error("Missing subject_token_field_name for JSON credential_source format");
                }
                let filePath = n.get("file");
                let S = n.get("url");
                let T = n.get("certificate");
                let j = n.get("headers");
                if (filePath && S || S && T || filePath && T) {
                    throw Error('No valid Identity Pool "credential_source" provided, must be either file, url, or certificate.');
                } else if (filePath) {
                    this.credentialSourceType = "file";
                    this.subjectTokenSupplier = new sa.FileSubjectTokenSupplier({
                        filePath,
                        formatType,
                        subjectTokenFieldName
                    });
                } else if (S) {
                    this.credentialSourceType = "url";
                    this.subjectTokenSupplier = new na.UrlSubjectTokenSupplier({
                        url: S,
                        formatType,
                        subjectTokenFieldName,
                        headers: j,
                        additionalGaxiosOptions: as.RETRY_CONFIG
                    });
                } else if (T) {
                    this.credentialSourceType = "certificate";
                    let I = new ir.CertificateSubjectTokenSupplier({
                        useDefaultCertificateConfig: T.use_default_certificate_config,
                        certificateConfigLocation: T.certificate_config_location,
                        trustChainPath: T.trust_chain_path
                    });
                    this.subjectTokenSupplier = I;
                } else {
                    throw Error('No valid Identity Pool "credential_source" provided, must be either file, url, or certificate.');
                }
            }
        }
        async retrieveSubjectToken() {
            let e = await this.subjectTokenSupplier.getSubjectToken(this.supplierContext);
            if (this.subjectTokenSupplier instanceof ir.CertificateSubjectTokenSupplier) {
                let agent = await this.subjectTokenSupplier.createMtlsHttpsAgent();
                this.stsCredential = new ia.StsCredentials({
                    tokenExchangeEndpoint: this.getTokenUrl(),
                    clientAuthentication: this.clientAuth,
                    transporter: new or.Gaxios({
                        ...this.transporter.defaults || {},
                        agent
                    })
                });
                this.transporter = new or.Gaxios({
                    ...this.transporter.defaults || {},
                    agent
                });
            }
            return e;
        }
    }
    oa.IdentityPoolClient = as;
});
const us = C(function(la) {
    Object.defineProperty(la, "__esModule", {
        value: true
    });
    la.AwsRequestSigner = undefined;
    const ze = re();
    const ar = St();
    const ca = "AWS4-HMAC-SHA256";
    const Hl = "aws4_request";
    class ua {
        getCredentials;
        region;
        crypto;
        constructor(e, t){
            this.getCredentials = e;
            this.region = t;
            this.crypto = ar.createCrypto();
        }
        async getRequestOptions(e) {
            if (!e.url) {
                throw RangeError('"url" is required in "amzOptions"');
            }
            let t = typeof e.data === "object" ? JSON.stringify(e.data) : e.data;
            let e_url = e.url;
            let method = e.method || "GET";
            let requestPayload = e.body || t;
            let e_headers = e.headers;
            let securityCredentials = await this.getCredentials();
            let g = new URL(e_url);
            if (typeof requestPayload !== "string" && requestPayload !== undefined) {
                throw TypeError(`'requestPayload' is expected to be a string if provided. Got: ${requestPayload}`);
            }
            let E = await Jl({
                crypto: this.crypto,
                host: g.host,
                canonicalUri: g.pathname,
                canonicalQuerystring: g.search.slice(1),
                method,
                region: this.region,
                securityCredentials,
                requestPayload,
                additionalAmzHeaders: e_headers
            });
            let S = ze.Gaxios.mergeHeaders(E.amzDate ? {
                "x-amz-date": E.amzDate
            } : {}, {
                authorization: E.authorizationHeader,
                host: g.host
            }, e_headers || {});
            if (securityCredentials.token) {
                ze.Gaxios.mergeHeaders(S, {
                    "x-amz-security-token": securityCredentials.token
                });
            }
            let T = {
                url: e_url,
                method,
                headers: S
            };
            if (requestPayload !== undefined) {
                T.body = requestPayload;
            }
            return T;
        }
    }
    la.AwsRequestSigner = ua;
    async function bt(crypto, t, r) {
        return await crypto.signWithHmacSha256(t, r);
    }
    async function $l(crypto, secretAccessKey, r, region, n) {
        let a = await bt(crypto, `AWS4${secretAccessKey}`, r);
        let h = await bt(crypto, a, region);
        let g = await bt(crypto, h, n);
        return await bt(crypto, g, "aws4_request");
    }
    async function Jl(e) {
        let t = ze.Gaxios.mergeHeaders(e.additionalAmzHeaders);
        let r = e.requestPayload || "";
        let s = e.host.split(".")[0];
        let n = new Date;
        let a = n.toISOString().replace(/[-:]/g, "").replace(/\.[0-9]+/, "");
        let h = n.toISOString().replace(/[-]/g, "").replace(/T.*/, "");
        if (e.securityCredentials.token) {
            t.set("x-amz-security-token", e.securityCredentials.token);
        }
        let g = ze.Gaxios.mergeHeaders({
            host: e.host
        }, t.has("date") ? {} : {
            "x-amz-date": a
        }, t);
        let E = "";
        let S = [
            ...g.keys()
        ].sort();
        S.forEach((G)=>{
            E += `${G}:${g.get(G)}
`;
        });
        let T = S.join(";");
        let j = await e.crypto.sha256DigestHex(r);
        let I = `${e.method.toUpperCase()}
${e.canonicalUri}
${e.canonicalQuerystring}
${E}
${T}
${j}`;
        let Y = `${h}/${e.region}/${s}/${Hl}`;
        let K = `${ca}
${a}
${Y}
` + await e.crypto.sha256DigestHex(I);
        let R = await $l(e.crypto, e.securityCredentials.secretAccessKey, h, e.region, s);
        let P = await bt(e.crypto, R, K);
        let authorizationHeader = `${ca} Credential=${e.securityCredentials.accessKeyId}/${Y}, SignedHeaders=${T}, Signature=${ar.fromArrayBufferToHex(P)}`;
        return {
            amzDate: t.has("date") ? undefined : a,
            authorizationHeader,
            canonicalQuerystring: e.canonicalQuerystring
        };
    }
});
const ga = C(function(fa) {
    Object.defineProperty(fa, "__esModule", {
        value: true
    });
    fa.DefaultAwsSecurityCredentialsSupplier = undefined;
    const Qe = fe();
    class ha {
        regionUrl;
        securityCredentialsUrl;
        imdsV2SessionTokenUrl;
        additionalGaxiosOptions;
        constructor(e){
            this.regionUrl = e.regionUrl;
            this.securityCredentialsUrl = e.securityCredentialsUrl;
            this.imdsV2SessionTokenUrl = e.imdsV2SessionTokenUrl;
            this.additionalGaxiosOptions = e.additionalGaxiosOptions;
        }
        async getAwsRegion(e) {
            if (this.#s) {
                return this.#s;
            }
            let t = new Headers;
            if (!this.#s && this.imdsV2SessionTokenUrl) {
                t.set("x-aws-ec2-metadata-token", await this.#e(e.transporter));
            }
            if (!this.regionUrl) {
                throw RangeError('Unable to determine AWS region due to missing "options.credential_source.region_url"');
            }
            let r = {
                ...this.additionalGaxiosOptions,
                url: this.regionUrl,
                method: "GET",
                responseType: "text",
                headers: t
            };
            Qe.AuthClient.setMethodName(r, "getAwsRegion");
            let s = await e.transporter.request(r);
            return s.data.substr(0, s.data.length - 1);
        }
        async getAwsSecurityCredentials(e) {
            if (this.#n) {
                return this.#n;
            }
            let t = new Headers;
            if (this.imdsV2SessionTokenUrl) {
                t.set("x-aws-ec2-metadata-token", await this.#e(e.transporter));
            }
            let r = await this.#t(t, e.transporter);
            let s = await this.#r(r, t, e.transporter);
            return {
                accessKeyId: s.AccessKeyId,
                secretAccessKey: s.SecretAccessKey,
                token: s.Token
            };
        }
        async #e(e) {
            let t = {
                ...this.additionalGaxiosOptions,
                url: this.imdsV2SessionTokenUrl,
                method: "PUT",
                responseType: "text",
                headers: {
                    "x-aws-ec2-metadata-token-ttl-seconds": "300"
                }
            };
            Qe.AuthClient.setMethodName(t, "#getImdsV2SessionToken");
            return (await e.request(t)).data;
        }
        async #t(e, t) {
            if (!this.securityCredentialsUrl) {
                throw Error('Unable to determine AWS role name due to missing "options.credential_source.url"');
            }
            let r = {
                ...this.additionalGaxiosOptions,
                url: this.securityCredentialsUrl,
                method: "GET",
                responseType: "text",
                headers: e
            };
            Qe.AuthClient.setMethodName(r, "#getAwsRoleName");
            return (await t.request(r)).data;
        }
        async #r(e, t, r) {
            let s = {
                ...this.additionalGaxiosOptions,
                url: `${this.securityCredentialsUrl}/${e}`,
                headers: t,
                responseType: "json"
            };
            Qe.AuthClient.setMethodName(s, "#retrieveAwsSecurityCredentials");
            return (await r.request(s)).data;
        }
        get #s() {
            return process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || null;
        }
        get #n() {
            if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
                return {
                    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                    token: process.env.AWS_SESSION_TOKEN
                };
            }
            return null;
        }
    }
    fa.DefaultAwsSecurityCredentialsSupplier = ha;
});
const ls = C(function(wa) {
    Object.defineProperty(wa, "__esModule", {
        value: true
    });
    wa.AwsClient = undefined;
    const ya = us();
    const _a = We();
    const ma = ga();
    const cr = Re();
    const Ea = re();
    class ur extends _a.BaseExternalAccountClient {
        environmentId;
        awsSecurityCredentialsSupplier;
        regionalCredVerificationUrl;
        awsRequestSigner;
        region;
        static #e = "https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15";
        static AWS_EC2_METADATA_IPV4_ADDRESS = "169.254.169.254";
        static AWS_EC2_METADATA_IPV6_ADDRESS = "fd00:ec2::254";
        constructor(e){
            super(e);
            let t = cr.originalOrCamelOptions(e);
            let r = t.get("credential_source");
            let s = t.get("aws_security_credentials_supplier");
            if (!r && !s) {
                throw Error("A credential source or AWS security credentials supplier must be specified.");
            }
            if (r && s) {
                throw Error("Only one of credential source or AWS security credentials supplier can be specified.");
            }
            if (s) {
                this.awsSecurityCredentialsSupplier = s;
                this.regionalCredVerificationUrl = ur.#e;
                this.credentialSourceType = "programmatic";
            } else {
                let n = cr.originalOrCamelOptions(r);
                this.environmentId = n.get("environment_id");
                let regionUrl = n.get("region_url");
                let securityCredentialsUrl = n.get("url");
                let imdsV2SessionTokenUrl = n.get("imdsv2_session_token_url");
                this.awsSecurityCredentialsSupplier = new ma.DefaultAwsSecurityCredentialsSupplier({
                    regionUrl,
                    securityCredentialsUrl,
                    imdsV2SessionTokenUrl
                });
                this.regionalCredVerificationUrl = n.get("regional_cred_verification_url");
                this.credentialSourceType = "aws";
                this.validateEnvironmentId();
            }
            this.awsRequestSigner = null;
            this.region = "";
        }
        validateEnvironmentId() {
            let e = this.environmentId?.match(/^(aws)(\d+)$/);
            if (!e || !this.regionalCredVerificationUrl) {
                throw Error('No valid AWS "credential_source" provided');
            } else if (parseInt(e[2], 10) !== 1) {
                throw Error(`aws version "${e[2]}" is not supported in the current build.`);
            }
        }
        async retrieveSubjectToken() {
            if (!this.awsRequestSigner) {
                this.region = await this.awsSecurityCredentialsSupplier.getAwsRegion(this.supplierContext);
                this.awsRequestSigner = new ya.AwsRequestSigner(async ()=>this.awsSecurityCredentialsSupplier.getAwsSecurityCredentials(this.supplierContext), this.region);
            }
            let e = await this.awsRequestSigner.getRequestOptions({
                ...ur.RETRY_CONFIG,
                url: this.regionalCredVerificationUrl.replace("{region}", this.region),
                method: "POST"
            });
            let t = [];
            Ea.Gaxios.mergeHeaders({
                "x-goog-cloud-target-resource": this.audience
            }, e.headers).forEach((s, key)=>t.push({
                    key,
                    value: s
                }));
            return encodeURIComponent(JSON.stringify({
                url: e.url,
                method: e.method,
                headers: t
            }));
        }
    }
    wa.AwsClient = ur;
});
const ms = C(function(va) {
    Object.defineProperty(va, "__esModule", {
        value: true
    });
    va.InvalidSubjectTokenError = va.InvalidMessageFieldError = va.InvalidCodeFieldError = va.InvalidTokenTypeFieldError = va.InvalidExpirationTimeFieldError = va.InvalidSuccessFieldError = va.InvalidVersionFieldError = va.ExecutableResponseError = va.ExecutableResponse = undefined;
    const lr = "urn:ietf:params:oauth:token-type:saml2";
    const ds = "urn:ietf:params:oauth:token-type:id_token";
    const hs = "urn:ietf:params:oauth:token-type:jwt";
    class Ta {
        version;
        success;
        expirationTime;
        tokenType;
        errorCode;
        errorMessage;
        subjectToken;
        constructor(e){
            if (!e.version) {
                throw new fs("Executable response must contain a 'version' field.");
            }
            if (e.success === undefined) {
                throw new ps("Executable response must contain a 'success' field.");
            }
            this.version = e.version;
            this.success = e.success;
            if (this.success) {
                this.expirationTime = e.expiration_time;
                this.tokenType = e.token_type;
                if (this.tokenType !== lr && this.tokenType !== ds && this.tokenType !== hs) {
                    throw new gs(`Executable response must contain a 'token_type' field when successful and it must be one of ${ds}, ${hs}, or ${lr}.`);
                }
                if (this.tokenType === lr) {
                    if (!e.saml_response) {
                        throw new dr(`Executable response must contain a 'saml_response' field when token_type=${lr}.`);
                    }
                    this.subjectToken = e.saml_response;
                } else {
                    if (!e.id_token) {
                        throw new dr(`Executable response must contain a 'id_token' field when token_type=${ds} or ${hs}.`);
                    }
                    this.subjectToken = e.id_token;
                }
            } else {
                if (!e.code) {
                    throw new ys("Executable response must contain a 'code' field when unsuccessful.");
                }
                if (!e.message) {
                    throw new _s("Executable response must contain a 'message' field when unsuccessful.");
                }
                this.errorCode = e.code;
                this.errorMessage = e.message;
            }
        }
        isValid() {
            return !this.isExpired() && this.success;
        }
        isExpired() {
            return this.expirationTime !== undefined && this.expirationTime < Math.round(Date.now() / 1000);
        }
    }
    va.ExecutableResponse = Ta;
    class Ge extends Error {
        constructor(e){
            super(e);
            Object.setPrototypeOf(this, new.target.prototype);
        }
    }
    va.ExecutableResponseError = Ge;
    class fs extends Ge {
    }
    va.InvalidVersionFieldError = fs;
    class ps extends Ge {
    }
    va.InvalidSuccessFieldError = ps;
    class Ca extends Ge {
    }
    va.InvalidExpirationTimeFieldError = Ca;
    class gs extends Ge {
    }
    va.InvalidTokenTypeFieldError = gs;
    class ys extends Ge {
    }
    va.InvalidCodeFieldError = ys;
    class _s extends Ge {
    }
    va.InvalidMessageFieldError = _s;
    class dr extends Ge {
    }
    va.InvalidSubjectTokenError = dr;
});
const As = C(function(Oa) {
    Object.defineProperty(Oa, "__esModule", {
        value: true
    });
    Oa.PluggableAuthHandler = Oa.ExecutableError = undefined;
    const le = ms();
    const Sa = Le("child_process");
    const gt = Le("fs");
    class Es extends Error {
        code;
        constructor(e, t){
            super(`The executable failed with exit code: ${t} and error message: ${e}.`);
            this.code = t;
            Object.setPrototypeOf(this, new.target.prototype);
        }
    }
    Oa.ExecutableError = Es;
    class ws {
        commandComponents;
        timeoutMillis;
        outputFile;
        constructor(e){
            if (!e.command) {
                throw Error("No command provided.");
            }
            this.commandComponents = ws.parseCommand(e.command);
            this.timeoutMillis = e.timeoutMillis;
            if (!this.timeoutMillis) {
                throw Error("No timeoutMillis provided.");
            }
            this.outputFile = e.outputFile;
        }
        retrieveResponseFromExecutable(e) {
            return new Promise((resolve, reject)=>{
                let s = Sa.spawn(this.commandComponents[0], this.commandComponents.slice(1), {
                    env: {
                        ...process.env,
                        ...Object.fromEntries(e)
                    }
                });
                let n = "";
                s.stdout.on("data", (h)=>{
                    n += h;
                });
                s.stderr.on("data", (h)=>{
                    n += h;
                });
                let a = setTimeout(()=>{
                    s.removeAllListeners();
                    s.kill();
                    return reject(Error("The executable failed to finish within the timeout specified."));
                }, this.timeoutMillis);
                s.on("close", (h)=>{
                    clearTimeout(a);
                    if (h === 0) {
                        try {
                            let g = JSON.parse(n);
                            let E = new le.ExecutableResponse(g);
                            return resolve(E);
                        } catch (error) {
                            if (error instanceof le.ExecutableResponseError) {
                                return reject(error);
                            }
                            return reject(new le.ExecutableResponseError(`The executable returned an invalid response: ${n}`));
                        }
                    } else {
                        return reject(new Es(n, h.toString()));
                    }
                });
            });
        }
        async retrieveCachedResponse() {
            if (!this.outputFile || this.outputFile.length === 0) {
                return;
            }
            let e;
            try {
                e = await gt.promises.realpath(this.outputFile);
            } catch  {
                return;
            }
            if (!(await gt.promises.lstat(e)).isFile()) {
                return;
            }
            let t = await gt.promises.readFile(e, {
                encoding: "utf8"
            });
            if (t === "") {
                return;
            }
            try {
                let r = JSON.parse(t);
                if (new le.ExecutableResponse(r).isValid()) {
                    return new le.ExecutableResponse(r);
                }
                return;
            } catch (error) {
                if (error instanceof le.ExecutableResponseError) {
                    throw error;
                }
                throw new le.ExecutableResponseError(`The output file contained an invalid response: ${t}`);
            }
        }
        static parseCommand(e) {
            let t = e.match(/(?:[^\s"]+|"[^"]*")+/g);
            if (!t) {
                throw Error(`Provided command: "${e}" could not be parsed.`);
            }
            for(let r = 0; r < t.length; r++){
                if (t[r][0] === '"' && t[r].slice(-1) === '"') {
                    t[r] = t[r].slice(1, -1);
                }
            }
            return t;
        }
    }
    Oa.PluggableAuthHandler = ws;
});
const Cs = C(function(Ts) {
    Object.defineProperty(Ts, "__esModule", {
        value: true
    });
    Ts.PluggableAuthClient = Ts.ExecutableError = undefined;
    const Pa = We();
    const Ia = ms();
    const hr = As();
    const td = As();
    Object.defineProperty(Ts, "ExecutableError", {
        enumerable: true,
        get: function() {
            return td.ExecutableError;
        }
    });
    const rd = 30000;
    const xa = 5000;
    const ba = 120000;
    const sd = "GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES";
    const Na = 1;
    class Ua extends Pa.BaseExternalAccountClient {
        command;
        timeoutMillis;
        outputFile;
        handler;
        constructor(e){
            super(e);
            if (!e.credential_source.executable) {
                throw Error('No valid Pluggable Auth "credential_source" provided.');
            }
            this.command = e.credential_source.executable.command;
            if (!this.command) {
                throw Error('No valid Pluggable Auth "credential_source" provided.');
            }
            if (e.credential_source.executable.timeout_millis === undefined) {
                this.timeoutMillis = rd;
            } else {
                this.timeoutMillis = e.credential_source.executable.timeout_millis;
                if (this.timeoutMillis < xa || this.timeoutMillis > ba) {
                    throw Error(`Timeout must be between ${xa} and ${ba} milliseconds.`);
                }
            }
            this.outputFile = e.credential_source.executable.output_file;
            this.handler = new hr.PluggableAuthHandler({
                command: this.command,
                timeoutMillis: this.timeoutMillis,
                outputFile: this.outputFile
            });
            this.credentialSourceType = "executable";
        }
        async retrieveSubjectToken() {
            if (process.env[sd] !== "1") {
                throw Error("Pluggable Auth executables need to be explicitly allowed to run by setting the GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment Variable to 1.");
            }
            let e;
            if (this.outputFile) {
                e = await this.handler.retrieveCachedResponse();
            }
            if (!e) {
                let t = new Map;
                t.set("GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE", this.audience);
                t.set("GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE", this.subjectTokenType);
                t.set("GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE", "0");
                if (this.outputFile) {
                    t.set("GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE", this.outputFile);
                }
                let r = this.getServiceAccountEmail();
                if (r) {
                    t.set("GOOGLE_EXTERNAL_ACCOUNT_IMPERSONATED_EMAIL", r);
                }
                e = await this.handler.retrieveResponseFromExecutable(t);
            }
            if (e.version > Na) {
                throw Error(`Version of executable is not currently supported, maximum supported version is ${Na}.`);
            }
            if (!e.success) {
                throw new hr.ExecutableError(e.errorMessage, e.errorCode);
            }
            if (this.outputFile) {
                if (!e.expirationTime) {
                    throw new Ia.InvalidExpirationTimeFieldError("The executable response must contain the `expiration_time` field for successful responses when an output_file has been specified in the configuration.");
                }
            }
            if (e.isExpired()) {
                throw Error("Executable response is expired.");
            }
            return e.subjectToken;
        }
    }
    Ts.PluggableAuthClient = Ua;
});
const vs = C(function(Ga) {
    Object.defineProperty(Ga, "__esModule", {
        value: true
    });
    Ga.ExternalAccountClient = undefined;
    const Da = We();
    const qa = cs();
    const Fa = ls();
    const Ma = Cs();
    class La {
        constructor(){
            throw Error("ExternalAccountClients should be initialized via: ExternalAccountClient.fromJSON(), directly via explicit constructors, eg. new AwsClient(options), new IdentityPoolClient(options), newPluggableAuthClientOptions, or via new GoogleAuth(options).getClient()");
        }
        static fromJSON(e) {
            if (e && e.type === Da.EXTERNAL_ACCOUNT_TYPE) {
                if (e.credential_source?.environment_id) {
                    return new Fa.AwsClient(e);
                } else if (e.credential_source?.executable) {
                    return new Ma.PluggableAuthClient(e);
                } else {
                    return new qa.IdentityPoolClient(e);
                }
            } else {
                return null;
            }
        }
    }
    Ga.ExternalAccountClient = La;
});
const Ss = C(function(Ka) {
    Object.defineProperty(Ka, "__esModule", {
        value: true
    });
    Ka.ExternalAccountAuthorizedUserClient = Ka.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = undefined;
    const pr = fe();
    const fr = ss();
    const gr = re();
    const Ha = Le("stream");
    const $a = We();
    Ka.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = "external_account_authorized_user";
    const nd = "https://sts.{universeDomain}/v1/oauthtoken";
    class ks extends fr.OAuthClientAuthHandler {
        #e;
        constructor(e){
            super(e);
            this.#e = e.tokenRefreshEndpoint;
        }
        async refreshToken(refresh_token, t) {
            let r = {
                ...ks.RETRY_CONFIG,
                url: this.#e,
                method: "POST",
                headers: t,
                data: new URLSearchParams({
                    grant_type: "refresh_token",
                    refresh_token
                }),
                responseType: "json"
            };
            pr.AuthClient.setMethodName(r, "refreshToken");
            this.applyClientAuthenticationOptions(r);
            try {
                let s = await this.transporter.request(r);
                let n = s.data;
                n.res = s;
                return n;
            } catch (error) {
                if (error instanceof gr.GaxiosError && error.response) {
                    throw fr.getErrorFromOAuthErrorResponse(error.response.data, error);
                }
                throw error;
            }
        }
    }
    class Ja extends pr.AuthClient {
        cachedAccessToken;
        externalAccountAuthorizedUserHandler;
        refreshToken;
        constructor(e){
            super(e);
            if (e.universe_domain) {
                this.universeDomain = e.universe_domain;
            }
            this.refreshToken = e.refresh_token;
            let t = {
                confidentialClientType: "basic",
                clientId: e.client_id,
                clientSecret: e.client_secret
            };
            this.externalAccountAuthorizedUserHandler = new ks({
                tokenRefreshEndpoint: e.token_url ?? nd.replace("{universeDomain}", this.universeDomain),
                transporter: this.transporter,
                clientAuthentication: t
            });
            this.cachedAccessToken = null;
            this.quotaProjectId = e.quota_project_id;
            if (typeof e?.eagerRefreshThresholdMillis !== "number") {
                this.eagerRefreshThresholdMillis = $a.EXPIRATION_TIME_OFFSET;
            } else {
                this.eagerRefreshThresholdMillis = e.eagerRefreshThresholdMillis;
            }
            this.forceRefreshOnFailure = !!e?.forceRefreshOnFailure;
        }
        async getAccessToken() {
            if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) {
                await this.refreshAccessTokenAsync();
            }
            return {
                token: this.cachedAccessToken.access_token,
                res: this.cachedAccessToken.res
            };
        }
        async getRequestHeaders() {
            let e = await this.getAccessToken();
            let t = new Headers({
                authorization: `Bearer ${e.token}`
            });
            return this.addSharedMetadataHeaders(t);
        }
        request(e, t) {
            if (t) {
                this.requestAsync(e).then((r)=>t(null, r), (r)=>t(r, r.response));
            } else {
                return this.requestAsync(e);
            }
        }
        async requestAsync(e, t = false) {
            let r;
            try {
                let s = await this.getRequestHeaders();
                e.headers = gr.Gaxios.mergeHeaders(e.headers);
                this.addUserProjectAndAuthHeaders(e.headers, s);
                r = await this.transporter.request(e);
            } catch (error) {
                let n = error.response;
                if (n) {
                    let a = n.status;
                    let h = n.config.data instanceof Ha.Readable;
                    if (!t && (a === 401 || a === 403) && !h && this.forceRefreshOnFailure) {
                        await this.refreshAccessTokenAsync();
                        return await this.requestAsync(e, true);
                    }
                }
                throw error;
            }
            return r;
        }
        async refreshAccessTokenAsync() {
            let e = await this.externalAccountAuthorizedUserHandler.refreshToken(this.refreshToken);
            this.cachedAccessToken = {
                access_token: e.access_token,
                expiry_date: new Date().getTime() + e.expires_in * 1000,
                res: e.res
            };
            if (e.refresh_token !== undefined) {
                this.refreshToken = e.refresh_token;
            }
            return this.cachedAccessToken;
        }
        isExpired(e) {
            let t = new Date().getTime();
            if (e.expiry_date) {
                return t >= e.expiry_date - this.eagerRefreshThresholdMillis;
            }
            return false;
        }
    }
    Ka.ExternalAccountAuthorizedUserClient = Ja;
});
const ic = C(function(sc) {
    Object.defineProperty(sc, "__esModule", {
        value: true
    });
    sc.GoogleAuth = sc.GoogleAuthExceptionMessages = undefined;
    const Va = Le("child_process");
    const Ie = Le("fs");
    const Ya = re();
    const Ue = kt();
    const Xa = Le("os");
    const _t = Le("path");
    const za = St();
    const Qa = Kr();
    const Za = Wr();
    const ec = Vr();
    const Ce = es();
    const yr = ts();
    const ve = rs();
    const tc = vs();
    const je = We();
    const mt = fe();
    const _r = Ss();
    const mr = Re();
    sc.GoogleAuthExceptionMessages = {
        API_KEY_WITH_CREDENTIALS: "API Keys and Credentials are mutually exclusive authentication methods and cannot be used together.",
        NO_PROJECT_ID_FOUND: `Unable to detect a Project Id in the current environment. 
To learn more about authentication and Google APIs, visit: 
https://cloud.google.com/docs/authentication/getting-started`,
        NO_CREDENTIALS_FOUND: `Unable to find credentials in current environment. 
To learn more about authentication and Google APIs, visit: 
https://cloud.google.com/docs/authentication/getting-started`,
        NO_ADC_FOUND: "Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.",
        NO_UNIVERSE_DOMAIN_FOUND: `Unable to detect a Universe Domain in the current environment.
To learn more about Universe Domain retrieval, visit: 
https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys`
    };
    class rc {
        checkIsGCE = undefined;
        useJWTAccessWithScope;
        defaultServicePath;
        get isGCE() {
            return this.checkIsGCE;
        }
        _findProjectIdPromise;
        _cachedProjectId;
        jsonContent = null;
        apiKey;
        cachedCredential = null;
        #e = null;
        defaultScopes;
        keyFilename;
        scopes;
        clientOptions = {};
        constructor(e = {}){
            this._cachedProjectId = e.projectId || null;
            this.cachedCredential = e.authClient || null;
            this.keyFilename = e.keyFilename || e.keyFile;
            this.scopes = e.scopes;
            this.clientOptions = e.clientOptions || {};
            this.jsonContent = e.credentials || null;
            this.apiKey = e.apiKey || this.clientOptions.apiKey || null;
            if (this.apiKey && (this.jsonContent || this.clientOptions.credentials)) {
                throw RangeError(sc.GoogleAuthExceptionMessages.API_KEY_WITH_CREDENTIALS);
            }
            if (e.universeDomain) {
                this.clientOptions.universeDomain = e.universeDomain;
            }
        }
        setGapicJWTValues(e) {
            e.defaultServicePath = this.defaultServicePath;
            e.useJWTAccessWithScope = this.useJWTAccessWithScope;
            e.defaultScopes = this.defaultScopes;
        }
        getProjectId(e) {
            if (e) {
                this.getProjectIdAsync().then((t)=>e(null, t), e);
            } else {
                return this.getProjectIdAsync();
            }
        }
        async getProjectIdOptional() {
            try {
                return await this.getProjectId();
            } catch (error) {
                if (error instanceof Error && error.message === sc.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND) {
                    return null;
                } else {
                    throw error;
                }
            }
        }
        async findAndCacheProjectId() {
            let e = null;
            e ||= await this.getProductionProjectId();
            e ||= await this.getFileProjectId();
            e ||= await this.getDefaultServiceProjectId();
            e ||= await this.getGCEProjectId();
            e ||= await this.getExternalAccountClientProjectId();
            if (e) {
                this._cachedProjectId = e;
                return e;
            } else {
                throw Error(sc.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND);
            }
        }
        async getProjectIdAsync() {
            if (this._cachedProjectId) {
                return this._cachedProjectId;
            }
            if (!this._findProjectIdPromise) {
                this._findProjectIdPromise = this.findAndCacheProjectId();
            }
            return this._findProjectIdPromise;
        }
        async getUniverseDomainFromMetadataServer() {
            let e;
            try {
                e = await Ue.universe("universe-domain");
                e ||= mt.DEFAULT_UNIVERSE;
            } catch (error) {
                if (error && error?.response?.status === 404) {
                    e = mt.DEFAULT_UNIVERSE;
                } else {
                    throw error;
                }
            }
            return e;
        }
        async getUniverseDomain() {
            let e = mr.originalOrCamelOptions(this.clientOptions).get("universe_domain");
            try {
                e ??= (await this.getClient()).universeDomain;
            } catch  {
                e ??= mt.DEFAULT_UNIVERSE;
            }
            return e;
        }
        getAnyScopes() {
            return this.scopes || this.defaultScopes;
        }
        getApplicationDefault(e = {}, t) {
            let r;
            if (typeof e === "function") {
                t = e;
            } else {
                r = e;
            }
            if (t) {
                this.getApplicationDefaultAsync(r).then((s)=>t(null, s.credential, s.projectId), t);
            } else {
                return this.getApplicationDefaultAsync(r);
            }
        }
        async getApplicationDefaultAsync(e = {}) {
            if (this.cachedCredential) {
                return await this.#t(this.cachedCredential, null);
            }
            let t;
            t = await this._tryGetApplicationCredentialsFromEnvironmentVariable(e);
            if (t) {
                if (t instanceof Ce.JWT) {
                    t.scopes = this.scopes;
                } else if (t instanceof je.BaseExternalAccountClient) {
                    t.scopes = this.getAnyScopes();
                }
                return await this.#t(t);
            }
            t = await this._tryGetApplicationCredentialsFromWellKnownFile(e);
            if (t) {
                if (t instanceof Ce.JWT) {
                    t.scopes = this.scopes;
                } else if (t instanceof je.BaseExternalAccountClient) {
                    t.scopes = this.getAnyScopes();
                }
                return await this.#t(t);
            }
            if (await this._checkIsGCE()) {
                e.scopes = this.getAnyScopes();
                return await this.#t(new Qa.Compute(e));
            }
            throw Error(sc.GoogleAuthExceptionMessages.NO_ADC_FOUND);
        }
        async #t(credential, t = process.env.GOOGLE_CLOUD_QUOTA_PROJECT || null) {
            let projectId = await this.getProjectIdOptional();
            if (t) {
                credential.quotaProjectId = t;
            }
            this.cachedCredential = credential;
            return {
                credential,
                projectId
            };
        }
        async _checkIsGCE() {
            if (this.checkIsGCE === undefined) {
                this.checkIsGCE = Ue.getGCPResidency() || await Ue.isAvailable();
            }
            return this.checkIsGCE;
        }
        async _tryGetApplicationCredentialsFromEnvironmentVariable(e) {
            let t = process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.google_application_credentials;
            if (!t || t.length === 0) {
                return null;
            }
            try {
                return this._getApplicationCredentialsFromFilePath(t, e);
            } catch (error) {
                if (error instanceof Error) {
                    error.message = `Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable: ${error.message}`;
                }
                throw error;
            }
        }
        async _tryGetApplicationCredentialsFromWellKnownFile(e) {
            let t = null;
            if (this._isWindows()) {
                t = process.env.APPDATA;
            } else {
                let s = process.env.HOME;
                if (s) {
                    t = _t.join(s, ".config");
                }
            }
            if (t) {
                t = _t.join(t, "gcloud", "application_default_credentials.json");
                if (!Ie.existsSync(t)) {
                    t = null;
                }
            }
            if (!t) {
                return null;
            }
            return await this._getApplicationCredentialsFromFilePath(t, e);
        }
        async _getApplicationCredentialsFromFilePath(e, t = {}) {
            if (!e || e.length === 0) {
                throw Error("The file path is invalid.");
            }
            try {
                e = Ie.realpathSync(e);
                if (!Ie.lstatSync(e).isFile()) {
                    throw Error();
                }
            } catch (error) {
                if (error instanceof Error) {
                    error.message = `The file at ${e} does not exist, or it is not a file. ${error.message}`;
                }
                throw error;
            }
            let r = Ie.createReadStream(e);
            return this.fromStream(r, t);
        }
        fromImpersonatedJSON(e) {
            if (!e) {
                throw Error("Must pass in a JSON object containing an  impersonated refresh token");
            }
            if (e.type !== ve.IMPERSONATED_ACCOUNT_TYPE) {
                throw Error(`The incoming JSON object does not have the "${ve.IMPERSONATED_ACCOUNT_TYPE}" type`);
            }
            if (!e.source_credentials) {
                throw Error("The incoming JSON object does not contain a source_credentials field");
            }
            if (!e.service_account_impersonation_url) {
                throw Error("The incoming JSON object does not contain a service_account_impersonation_url field");
            }
            let sourceClient = this.fromJSON(e.source_credentials);
            if (e.service_account_impersonation_url?.length > 256) {
                throw RangeError(`Target principal is too long: ${e.service_account_impersonation_url}`);
            }
            let targetPrincipal = /(?<target>[^/]+):(generateAccessToken|generateIdToken)$/.exec(e.service_account_impersonation_url)?.groups?.target;
            if (!targetPrincipal) {
                throw RangeError(`Cannot extract target principal from ${e.service_account_impersonation_url}`);
            }
            let s = (this.scopes || e.scopes || this.defaultScopes) ?? [];
            return new ve.Impersonated({
                ...e,
                sourceClient,
                targetPrincipal,
                targetScopes: Array.isArray(s) ? s : [
                    s
                ]
            });
        }
        fromJSON(e, t = {}) {
            let r;
            let s = mr.originalOrCamelOptions(t).get("universe_domain");
            if (e.type === yr.USER_REFRESH_ACCOUNT_TYPE) {
                r = new yr.UserRefreshClient(t);
                r.fromJSON(e);
            } else if (e.type === ve.IMPERSONATED_ACCOUNT_TYPE) {
                r = this.fromImpersonatedJSON(e);
            } else if (e.type === je.EXTERNAL_ACCOUNT_TYPE) {
                r = tc.ExternalAccountClient.fromJSON({
                    ...e,
                    ...t
                });
                r.scopes = this.getAnyScopes();
            } else if (e.type === _r.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE) {
                r = new _r.ExternalAccountAuthorizedUserClient({
                    ...e,
                    ...t
                });
            } else {
                t.scopes = this.scopes;
                r = new Ce.JWT(t);
                this.setGapicJWTValues(r);
                r.fromJSON(e);
            }
            if (s) {
                r.universeDomain = s;
            }
            return r;
        }
        _cacheClientFromJSON(e, t) {
            let r = this.fromJSON(e, t);
            this.jsonContent = e;
            this.cachedCredential = r;
            return r;
        }
        fromStream(e, t = {}, r) {
            let s = {};
            if (typeof t === "function") {
                r = t;
            } else {
                s = t;
            }
            if (r) {
                this.fromStreamAsync(e, s).then((n)=>r(null, n), r);
            } else {
                return this.fromStreamAsync(e, s);
            }
        }
        fromStreamAsync(e, t) {
            return new Promise((resolve, reject)=>{
                if (!e) {
                    throw Error("Must pass in a stream containing the Google auth settings.");
                }
                let n = [];
                e.setEncoding("utf8").on("error", reject).on("data", (a)=>n.push(a)).on("end", ()=>{
                    try {
                        try {
                            let a = JSON.parse(n.join(""));
                            let h = this._cacheClientFromJSON(a, t);
                            return resolve(h);
                        } catch (error) {
                            if (!this.keyFilename) {
                                throw error;
                            }
                            let h = new Ce.JWT({
                                ...this.clientOptions,
                                keyFile: this.keyFilename
                            });
                            this.cachedCredential = h;
                            this.setGapicJWTValues(h);
                            return resolve(h);
                        }
                    } catch (error) {
                        return reject(error);
                    }
                });
            });
        }
        fromAPIKey(apiKey, t = {}) {
            return new Ce.JWT({
                ...t,
                apiKey
            });
        }
        _isWindows() {
            let e = Xa.platform();
            if (e && e.length >= 3) {
                if (e.substring(0, 3).toLowerCase() === "win") {
                    return true;
                }
            }
            return false;
        }
        async getDefaultServiceProjectId() {
            return new Promise((resolve)=>{
                Va.exec("gcloud config config-helper --format json", (t, r)=>{
                    if (!t && r) {
                        try {
                            let s = JSON.parse(r).configuration.properties.core.project;
                            resolve(s);
                            return;
                        } catch (s) {}
                    }
                    resolve(null);
                });
            });
        }
        getProductionProjectId() {
            return process.env.GCLOUD_PROJECT || process.env.GOOGLE_CLOUD_PROJECT || process.env.gcloud_project || process.env.google_cloud_project;
        }
        async getFileProjectId() {
            if (this.cachedCredential) {
                return this.cachedCredential.projectId;
            }
            if (this.keyFilename) {
                let t = await this.getClient();
                if (t && t.projectId) {
                    return t.projectId;
                }
            }
            let e = await this._tryGetApplicationCredentialsFromEnvironmentVariable();
            if (e) {
                return e.projectId;
            } else {
                return null;
            }
        }
        async getExternalAccountClientProjectId() {
            if (!this.jsonContent || this.jsonContent.type !== je.EXTERNAL_ACCOUNT_TYPE) {
                return null;
            }
            return await (await this.getClient()).getProjectId();
        }
        async getGCEProjectId() {
            try {
                return await Ue.project("project-id");
            } catch (e) {
                return null;
            }
        }
        getCredentials(e) {
            if (e) {
                this.getCredentialsAsync().then((t)=>e(null, t), e);
            } else {
                return this.getCredentialsAsync();
            }
        }
        async getCredentialsAsync() {
            let e = await this.getClient();
            if (e instanceof ve.Impersonated) {
                return {
                    client_email: e.getTargetPrincipal()
                };
            }
            if (e instanceof je.BaseExternalAccountClient) {
                let client_email = e.getServiceAccountEmail();
                if (client_email) {
                    return {
                        client_email,
                        universe_domain: e.universeDomain
                    };
                }
            }
            if (this.jsonContent) {
                return {
                    client_email: this.jsonContent.client_email,
                    private_key: this.jsonContent.private_key,
                    universe_domain: this.jsonContent.universe_domain
                };
            }
            if (await this._checkIsGCE()) {
                let [client_email, universe_domain] = await Promise.all([
                    Ue.instance("service-accounts/default/email"),
                    this.getUniverseDomain()
                ]);
                return {
                    client_email,
                    universe_domain
                };
            }
            throw Error(sc.GoogleAuthExceptionMessages.NO_CREDENTIALS_FOUND);
        }
        async getClient() {
            if (this.cachedCredential) {
                return this.cachedCredential;
            }
            this.#e = this.#e || this.#r();
            try {
                return await this.#e;
            } finally{
                this.#e = null;
            }
        }
        async #r() {
            if (this.jsonContent) {
                return this._cacheClientFromJSON(this.jsonContent, this.clientOptions);
            } else if (this.keyFilename) {
                let e = _t.resolve(this.keyFilename);
                let t = Ie.createReadStream(e);
                return await this.fromStreamAsync(t, this.clientOptions);
            } else if (this.apiKey) {
                let e = await this.fromAPIKey(this.apiKey, this.clientOptions);
                e.scopes = this.scopes;
                let { credential } = await this.#t(e);
                return credential;
            } else {
                let { credential } = await this.getApplicationDefaultAsync(this.clientOptions);
                return credential;
            }
        }
        async getIdTokenClient(targetAudience) {
            let idTokenProvider = await this.getClient();
            if (!("fetchIdToken" in idTokenProvider)) {
                throw Error("Cannot fetch ID token in this environment, use GCE or set the GOOGLE_APPLICATION_CREDENTIALS environment variable to a service account credentials JSON file.");
            }
            return new Za.IdTokenClient({
                targetAudience,
                idTokenProvider
            });
        }
        async getAccessToken() {
            return (await (await this.getClient()).getAccessToken()).token;
        }
        async getRequestHeaders(e) {
            return (await this.getClient()).getRequestHeaders(e);
        }
        async authorizeRequest(e = {}) {
            let e_url = e.url;
            let s = await (await this.getClient()).getRequestHeaders(e_url);
            e.headers = Ya.Gaxios.mergeHeaders(e.headers, s);
            return e;
        }
        async fetch(...e) {
            return (await this.getClient()).fetch(...e);
        }
        async request(e) {
            return (await this.getClient()).request(e);
        }
        getEnv() {
            return ec.getEnv();
        }
        async sign(e, t) {
            let r = await this.getClient();
            let s = await this.getUniverseDomain();
            t = t || `https://iamcredentials.${s}/v1/projects/-/serviceAccounts/`;
            if (r instanceof ve.Impersonated) {
                return (await r.sign(e)).signedBlob;
            }
            let n = za.createCrypto();
            if (r instanceof Ce.JWT && r.key) {
                return await n.sign(r.key, e);
            }
            let a = await this.getCredentials();
            if (!a.client_email) {
                throw Error("Cannot sign data without `client_email`.");
            }
            return this.signBlob(n, a.client_email, e, t);
        }
        async signBlob(e, t, r, s) {
            let n = new URL(s + `${t}:signBlob`);
            return (await this.request({
                method: "POST",
                url: n.href,
                data: {
                    payload: e.encodeBase64StringUtf8(r)
                },
                retry: true,
                retryConfig: {
                    httpMethodsToRetry: [
                        "POST"
                    ]
                }
            })).data.signedBlob;
        }
    }
    sc.GoogleAuth = rc;
});
const uc = C(function(ac) {
    Object.defineProperty(ac, "__esModule", {
        value: true
    });
    ac.IAMAuth = undefined;
    class oc {
        selector;
        token;
        constructor(e, t){
            this.selector = e;
            this.token = t;
            this.selector = e;
            this.token = t;
        }
        getRequestHeaders() {
            return {
                "x-goog-iam-authority-selector": this.selector,
                "x-goog-iam-authorization-token": this.token
            };
        }
    }
    ac.IAMAuth = oc;
});
const yc = C(function(pc) {
    Object.defineProperty(pc, "__esModule", {
        value: true
    });
    pc.DownscopedClient = pc.EXPIRATION_TIME_OFFSET = pc.MAX_ACCESS_BOUNDARY_RULES_COUNT = undefined;
    const lc = re();
    const dc = Le("stream");
    const Et = fe();
    const hc = tr();
    const od = "urn:ietf:params:oauth:grant-type:token-exchange";
    const ad = "urn:ietf:params:oauth:token-type:access_token";
    const subjectTokenType = "urn:ietf:params:oauth:token-type:access_token";
    pc.MAX_ACCESS_BOUNDARY_RULES_COUNT = 10;
    pc.EXPIRATION_TIME_OFFSET = 300000;
    class fc extends Et.AuthClient {
        authClient;
        credentialAccessBoundary;
        cachedDownscopedAccessToken;
        stsCredential;
        constructor(e, t = {
            accessBoundary: {
                accessBoundaryRules: []
            }
        }){
            super(e instanceof Et.AuthClient ? {} : e);
            if (e instanceof Et.AuthClient) {
                this.authClient = e;
                this.credentialAccessBoundary = t;
            } else {
                this.authClient = e.authClient;
                this.credentialAccessBoundary = e.credentialAccessBoundary;
            }
            if (this.credentialAccessBoundary.accessBoundary.accessBoundaryRules.length === 0) {
                throw Error("At least one access boundary rule needs to be defined.");
            } else if (this.credentialAccessBoundary.accessBoundary.accessBoundaryRules.length > pc.MAX_ACCESS_BOUNDARY_RULES_COUNT) {
                throw Error(`The provided access boundary has more than ${pc.MAX_ACCESS_BOUNDARY_RULES_COUNT} access boundary rules.`);
            }
            for (let r of this.credentialAccessBoundary.accessBoundary.accessBoundaryRules){
                if (r.availablePermissions.length === 0) {
                    throw Error("At least one permission should be defined in access boundary rules.");
                }
            }
            this.stsCredential = new hc.StsCredentials({
                tokenExchangeEndpoint: `https://sts.${this.universeDomain}/v1/token`
            });
            this.cachedDownscopedAccessToken = null;
        }
        setCredentials(e) {
            if (!e.expiry_date) {
                throw Error("The access token expiry_date field is missing in the provided credentials.");
            }
            super.setCredentials(e);
            this.cachedDownscopedAccessToken = e;
        }
        async getAccessToken() {
            if (!this.cachedDownscopedAccessToken || this.isExpired(this.cachedDownscopedAccessToken)) {
                await this.refreshAccessTokenAsync();
            }
            return {
                token: this.cachedDownscopedAccessToken.access_token,
                expirationTime: this.cachedDownscopedAccessToken.expiry_date,
                res: this.cachedDownscopedAccessToken.res
            };
        }
        async getRequestHeaders() {
            let e = await this.getAccessToken();
            let t = new Headers({
                authorization: `Bearer ${e.token}`
            });
            return this.addSharedMetadataHeaders(t);
        }
        request(e, t) {
            if (t) {
                this.requestAsync(e).then((r)=>t(null, r), (r)=>t(r, r.response));
            } else {
                return this.requestAsync(e);
            }
        }
        async requestAsync(e, t = false) {
            let r;
            try {
                let s = await this.getRequestHeaders();
                e.headers = lc.Gaxios.mergeHeaders(e.headers);
                this.addUserProjectAndAuthHeaders(e.headers, s);
                r = await this.transporter.request(e);
            } catch (error) {
                let n = error.response;
                if (n) {
                    let a = n.status;
                    let h = n.config.data instanceof dc.Readable;
                    if (!t && (a === 401 || a === 403) && !h && this.forceRefreshOnFailure) {
                        await this.refreshAccessTokenAsync();
                        return await this.requestAsync(e, true);
                    }
                }
                throw error;
            }
            return r;
        }
        async refreshAccessTokenAsync() {
            let token = (await this.authClient.getAccessToken()).token;
            let t = {
                grantType: od,
                requestedTokenType: ad,
                subjectToken: token,
                subjectTokenType
            };
            let r = await this.stsCredential.exchangeToken(t, undefined, this.credentialAccessBoundary);
            let s = this.authClient.credentials?.expiry_date || null;
            let expiry_date = r.expires_in ? new Date().getTime() + r.expires_in * 1000 : s;
            this.cachedDownscopedAccessToken = {
                access_token: r.access_token,
                expiry_date,
                res: r.res
            };
            this.credentials = {};
            Object.assign(this.credentials, this.cachedDownscopedAccessToken);
            delete this.credentials.res;
            this.emit("tokens", {
                refresh_token: null,
                expiry_date: this.cachedDownscopedAccessToken.expiry_date,
                access_token: this.cachedDownscopedAccessToken.access_token,
                token_type: "Bearer",
                id_token: null
            });
            return this.cachedDownscopedAccessToken;
        }
        isExpired(e) {
            let t = new Date().getTime();
            if (e.expiry_date) {
                return t >= e.expiry_date - this.eagerRefreshThresholdMillis;
            }
            return false;
        }
    }
    pc.DownscopedClient = fc;
});
const Ac = C(function(Ec) {
    Object.defineProperty(Ec, "__esModule", {
        value: true
    });
    Ec.PassThroughClient = undefined;
    const _c = fe();
    class mc extends _c.AuthClient {
        async request(e) {
            return this.transporter.request(e);
        }
        async getAccessToken() {
            return {};
        }
        async getRequestHeaders() {
            return new Headers;
        }
    }
    Ec.PassThroughClient = mc;
});
export const aFn = C(function(k) {
    const ld = k && k.__createBinding || (Object.create ? (e, t, r, s = r)=>{
        let n = Object.getOwnPropertyDescriptor(t, r);
        if (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) {
            n = {
                enumerable: true,
                get: function() {
                    return t[r];
                }
            };
        }
        Object.defineProperty(e, s, n);
    } : (e, t, r, s = r)=>{
        e[s] = t[r];
    });
    const dd = k && k.__exportStar || ((e, t)=>{
        for(const r in e){
            if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) {
                ld(t, e, r);
            }
        }
    });
    Object.defineProperty(k, "__esModule", {
        value: true
    });
    k.GoogleAuth = k.auth = k.PassThroughClient = k.ExternalAccountAuthorizedUserClient = k.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = k.ExecutableError = k.PluggableAuthClient = k.DownscopedClient = k.BaseExternalAccountClient = k.ExternalAccountClient = k.IdentityPoolClient = k.AwsRequestSigner = k.AwsClient = k.UserRefreshClient = k.LoginTicket = k.ClientAuthentication = k.OAuth2Client = k.CodeChallengeMethod = k.Impersonated = k.JWT = k.JWTAccess = k.IdTokenClient = k.IAMAuth = k.GCPEnv = k.Compute = k.DEFAULT_UNIVERSE = k.AuthClient = k.gaxios = k.gcpMetadata = undefined;
    const Er = ic();
    Object.defineProperty(k, "GoogleAuth", {
        enumerable: true,
        get: function() {
            return Er.GoogleAuth;
        }
    });
    k.gcpMetadata = kt();
    k.gaxios = re();
    const Tc = fe();
    Object.defineProperty(k, "AuthClient", {
        enumerable: true,
        get: function() {
            return Tc.AuthClient;
        }
    });
    Object.defineProperty(k, "DEFAULT_UNIVERSE", {
        enumerable: true,
        get: function() {
            return Tc.DEFAULT_UNIVERSE;
        }
    });
    const hd = Kr();
    Object.defineProperty(k, "Compute", {
        enumerable: true,
        get: function() {
            return hd.Compute;
        }
    });
    const fd = Vr();
    Object.defineProperty(k, "GCPEnv", {
        enumerable: true,
        get: function() {
            return fd.GCPEnv;
        }
    });
    const pd = uc();
    Object.defineProperty(k, "IAMAuth", {
        enumerable: true,
        get: function() {
            return pd.IAMAuth;
        }
    });
    const gd = Wr();
    Object.defineProperty(k, "IdTokenClient", {
        enumerable: true,
        get: function() {
            return gd.IdTokenClient;
        }
    });
    const yd = Qr();
    Object.defineProperty(k, "JWTAccess", {
        enumerable: true,
        get: function() {
            return yd.JWTAccess;
        }
    });
    const _d = es();
    Object.defineProperty(k, "JWT", {
        enumerable: true,
        get: function() {
            return _d.JWT;
        }
    });
    const md = rs();
    Object.defineProperty(k, "Impersonated", {
        enumerable: true,
        get: function() {
            return md.Impersonated;
        }
    });
    const Rs = st();
    Object.defineProperty(k, "CodeChallengeMethod", {
        enumerable: true,
        get: function() {
            return Rs.CodeChallengeMethod;
        }
    });
    Object.defineProperty(k, "OAuth2Client", {
        enumerable: true,
        get: function() {
            return Rs.OAuth2Client;
        }
    });
    Object.defineProperty(k, "ClientAuthentication", {
        enumerable: true,
        get: function() {
            return Rs.ClientAuthentication;
        }
    });
    const Ed = Jr();
    Object.defineProperty(k, "LoginTicket", {
        enumerable: true,
        get: function() {
            return Ed.LoginTicket;
        }
    });
    const wd = ts();
    Object.defineProperty(k, "UserRefreshClient", {
        enumerable: true,
        get: function() {
            return wd.UserRefreshClient;
        }
    });
    const Ad = ls();
    Object.defineProperty(k, "AwsClient", {
        enumerable: true,
        get: function() {
            return Ad.AwsClient;
        }
    });
    const Td = us();
    Object.defineProperty(k, "AwsRequestSigner", {
        enumerable: true,
        get: function() {
            return Td.AwsRequestSigner;
        }
    });
    const Cd = cs();
    Object.defineProperty(k, "IdentityPoolClient", {
        enumerable: true,
        get: function() {
            return Cd.IdentityPoolClient;
        }
    });
    const vd = vs();
    Object.defineProperty(k, "ExternalAccountClient", {
        enumerable: true,
        get: function() {
            return vd.ExternalAccountClient;
        }
    });
    const kd = We();
    Object.defineProperty(k, "BaseExternalAccountClient", {
        enumerable: true,
        get: function() {
            return kd.BaseExternalAccountClient;
        }
    });
    const Sd = yc();
    Object.defineProperty(k, "DownscopedClient", {
        enumerable: true,
        get: function() {
            return Sd.DownscopedClient;
        }
    });
    const Cc = Cs();
    Object.defineProperty(k, "PluggableAuthClient", {
        enumerable: true,
        get: function() {
            return Cc.PluggableAuthClient;
        }
    });
    Object.defineProperty(k, "ExecutableError", {
        enumerable: true,
        get: function() {
            return Cc.ExecutableError;
        }
    });
    const vc = Ss();
    Object.defineProperty(k, "EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE", {
        enumerable: true,
        get: function() {
            return vc.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE;
        }
    });
    Object.defineProperty(k, "ExternalAccountAuthorizedUserClient", {
        enumerable: true,
        get: function() {
            return vc.ExternalAccountAuthorizedUserClient;
        }
    });
    const Od = Ac();
    Object.defineProperty(k, "PassThroughClient", {
        enumerable: true,
        get: function() {
            return Od.PassThroughClient;
        }
    });
    dd(Xr(), k);
    const Rd = new Er.GoogleAuth;
    k.auth = Rd;
});
