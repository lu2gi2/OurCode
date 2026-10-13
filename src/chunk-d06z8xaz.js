import { uK, sWr, OXn, HOe, MXn, HXn, iWr, aWr, lWr, gX } from "/$bunfs/root/chunk-psf99gkh.js";
import { Da, Of } from "/$bunfs/root/chunk-6dwnw6av.js";
import { C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const ml = C(function(pl) {
    Object.defineProperty(pl, "__esModule", {
        value: true
    });
    pl.VERSION = undefined;
    pl.VERSION = "0.208.0";
});
const k = C(function(Sl) {
    Object.defineProperty(Sl, "__esModule", {
        value: true
    });
    Sl.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = Sl.DEFAULT_MAX_SEND_MESSAGE_LENGTH = Sl.Propagate = Sl.LogVerbosity = Sl.Status = undefined;
    let vl;
    ((e)=>{
        e[e.OK = 0] = "OK";
        e[e.CANCELLED = 1] = "CANCELLED";
        e[e.UNKNOWN = 2] = "UNKNOWN";
        e[e.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT";
        e[e.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED";
        e[e.NOT_FOUND = 5] = "NOT_FOUND";
        e[e.ALREADY_EXISTS = 6] = "ALREADY_EXISTS";
        e[e.PERMISSION_DENIED = 7] = "PERMISSION_DENIED";
        e[e.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED";
        e[e.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION";
        e[e.ABORTED = 10] = "ABORTED";
        e[e.OUT_OF_RANGE = 11] = "OUT_OF_RANGE";
        e[e.UNIMPLEMENTED = 12] = "UNIMPLEMENTED";
        e[e.INTERNAL = 13] = "INTERNAL";
        e[e.UNAVAILABLE = 14] = "UNAVAILABLE";
        e[e.DATA_LOSS = 15] = "DATA_LOSS";
        e[e.UNAUTHENTICATED = 16] = "UNAUTHENTICATED";
    })(vl || (Sl.Status = vl = {}));
    let yl;
    ((e)=>{
        e[e.DEBUG = 0] = "DEBUG";
        e[e.INFO = 1] = "INFO";
        e[e.ERROR = 2] = "ERROR";
        e[e.NONE = 3] = "NONE";
    })(yl || (Sl.LogVerbosity = yl = {}));
    let _l;
    ((e)=>{
        e[e.DEADLINE = 1] = "DEADLINE";
        e[e.CENSUS_STATS_CONTEXT = 2] = "CENSUS_STATS_CONTEXT";
        e[e.CENSUS_TRACING_CONTEXT = 4] = "CENSUS_TRACING_CONTEXT";
        e[e.CANCELLATION = 8] = "CANCELLATION";
        e[e.DEFAULTS = 65535] = "DEFAULTS";
    })(_l || (Sl.Propagate = _l = {}));
    Sl.DEFAULT_MAX_SEND_MESSAGE_LENGTH = -1;
    Sl.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = 4194304;
});
const ia = C(function(bw, qy) {
    qy.exports = {
        name: "@grpc/grpc-js",
        version: "1.14.4",
        description: "gRPC Library for Node - pure JS implementation",
        homepage: "https://grpc.io/",
        repository: "https://github.com/grpc/grpc-node/tree/master/packages/grpc-js",
        main: "build/src/index.js",
        engines: {
            node: ">=12.10.0"
        },
        keywords: [],
        author: {
            name: "Google Inc."
        },
        types: "build/src/index.d.ts",
        license: "Apache-2.0",
        devDependencies: {
            "@grpc/proto-loader": "file:../proto-loader",
            "@types/gulp": "^4.0.17",
            "@types/gulp-mocha": "0.0.37",
            "@types/lodash": "^4.14.202",
            "@types/mocha": "^10.0.6",
            "@types/ncp": "^2.0.8",
            "@types/node": ">=20.11.20",
            "@types/pify": "^5.0.4",
            "@types/semver": "^7.5.8",
            "@typescript-eslint/eslint-plugin": "^7.1.0",
            "@typescript-eslint/parser": "^7.1.0",
            "@typescript-eslint/typescript-estree": "^7.1.0",
            "clang-format": "^1.8.0",
            eslint: "^8.42.0",
            "eslint-config-prettier": "^8.8.0",
            "eslint-plugin-node": "^11.1.0",
            "eslint-plugin-prettier": "^4.2.1",
            execa: "^2.0.3",
            gulp: "^4.0.2",
            "gulp-mocha": "^6.0.0",
            lodash: "^4.17.21",
            madge: "^5.0.1",
            "mocha-jenkins-reporter": "^0.4.1",
            ncp: "^2.0.0",
            pify: "^4.0.1",
            prettier: "^2.8.8",
            rimraf: "^3.0.2",
            semver: "^7.6.0",
            "ts-node": "^10.9.2",
            typescript: "^5.3.3"
        },
        contributors: [
            {
                name: "Google Inc."
            }
        ],
        scripts: {
            build: "npm run compile",
            clean: "rimraf ./build",
            compile: "tsc -p .",
            format: 'clang-format -i -style="{Language: JavaScript, BasedOnStyle: Google, ColumnLimit: 80}" src/*.ts test/*.ts',
            lint: "eslint src/*.ts test/*.ts",
            prepare: "npm run copy-protos && npm run generate-types && npm run generate-test-types && npm run compile",
            test: "gulp test",
            check: "npm run lint",
            fix: "eslint --fix src/*.ts test/*.ts",
            pretest: "npm run generate-types && npm run generate-test-types && npm run compile",
            posttest: "npm run check && madge -c ./build/src",
            "generate-types": "proto-loader-gen-types --keepCase --longs String --enums String --defaults --oneofs --includeComments --includeDirs proto/ --include-dirs proto/ proto/xds/ proto/protoc-gen-validate/ -O src/generated/ --grpcLib ../index channelz.proto xds/service/orca/v3/orca.proto",
            "generate-test-types": "proto-loader-gen-types --keepCase --longs String --enums String --defaults --oneofs --includeComments --include-dirs test/fixtures/ -O test/generated/ --grpcLib ../../src/index test_service.proto echo_service.proto",
            "copy-protos": "node ./copy-protos"
        },
        dependencies: {
            "@grpc/proto-loader": "^0.8.0",
            "@js-sdsl/ordered-map": "^4.4.2"
        },
        files: [
            "src/**/*.ts",
            "build/src/**/*.{js,d.ts,js.map}",
            "proto/**/*.proto",
            "proto/**/LICENSE",
            "LICENSE",
            "deps/envoy-api/envoy/api/v2/**/*.proto",
            "deps/envoy-api/envoy/config/**/*.proto",
            "deps/envoy-api/envoy/service/**/*.proto",
            "deps/envoy-api/envoy/type/**/*.proto",
            "deps/udpa/udpa/**/*.proto",
            "deps/googleapis/google/api/*.proto",
            "deps/googleapis/google/rpc/*.proto",
            "deps/protoc-gen-validate/validate/**/*.proto"
        ]
    };
});
const K = C(function(bl) {
    Object.defineProperty(bl, "__esModule", {
        value: true
    });
    bl.log = bl.setLoggerVerbosity = bl.setLogger = bl.getLogger = undefined;
    bl.trace = Yy;
    bl.isTracerEnabled = Rl;
    const _e = k();
    var El = Le("process");
    var version = ia().version;
    const By = {
        error: (e, ...t)=>{
            console.error(`E ${e}`, ...t);
        },
        info: (e, ...t)=>{
            console.error(`I ${e}`, ...t);
        },
        debug: (e, ...t)=>{
            console.error(`D ${e}`, ...t);
        }
    };
    let gr = By;
    let ERROR = _e.LogVerbosity.ERROR;
    const zy = process.env.GRPC_NODE_VERBOSITY ?? process.env.GRPC_VERBOSITY ?? "";
    switch(zy.toUpperCase()){
        case "DEBUG":
            ERROR = _e.LogVerbosity.DEBUG;
            break;
        case "INFO":
            ERROR = _e.LogVerbosity.INFO;
            break;
        case "ERROR":
            ERROR = _e.LogVerbosity.ERROR;
            break;
        case "NONE":
            ERROR = _e.LogVerbosity.NONE;
            break;
        default:
    }
    const Hy = ()=>gr;
    bl.getLogger = Hy;
    const Wy = (e)=>{
        gr = e;
    };
    bl.setLogger = Wy;
    const jy = (e)=>{
        ERROR = e;
    };
    bl.setLoggerVerbosity = jy;
    const Gy = (e, ...t)=>{
        let r;
        if (e >= ERROR) {
            switch(e){
                case _e.LogVerbosity.DEBUG:
                    r = gr.debug;
                    break;
                case _e.LogVerbosity.INFO:
                    r = gr.info;
                    break;
                case _e.LogVerbosity.ERROR:
                    r = gr.error;
                    break;
            }
            if (!r) {
                r = gr.error;
            }
            if (r) {
                r.bind(gr)(...t);
            }
        }
    };
    bl.log = Gy;
    const $y = process.env.GRPC_NODE_TRACE ?? process.env.GRPC_TRACE ?? "";
    var la = new Set;
    var Tl = new Set;
    for (let e of $y.split(",")){
        if (e.startsWith("-")) {
            Tl.add(e.substring(1));
        } else {
            la.add(e);
        }
    }
    var Vy = la.has("all");
    function Yy(e, t, r) {
        if (Rl(t)) {
            bl.log(e, `${new Date().toISOString()} | v${version} ${El.pid} | ${t} | ${r}`);
        }
    }
    function Rl(e) {
        return !Tl.has(e) && (Vy || la.has(e));
    }
});
const Qi = C(function(Ol) {
    Object.defineProperty(Ol, "__esModule", {
        value: true
    });
    Ol.getErrorMessage = e_;
    Ol.getErrorCode = t_;
    function e_(e) {
        if (e instanceof Error) {
            return e.message;
        } else {
            return String(e);
        }
    }
    function t_(e) {
        if (typeof e === "object" && e !== null && "code" in e && typeof e.code === "number") {
            return e.code;
        } else {
            return null;
        }
    }
});
const ue = C(function(Il) {
    Object.defineProperty(Il, "__esModule", {
        value: true
    });
    Il.Metadata = undefined;
    const Al = K();
    const Pl = k();
    const Nl = Qi();
    const s_ = /^[:0-9a-z_.-]+$/;
    const n_ = /^[ -~]*$/;
    function a_(e) {
        return s_.test(e);
    }
    function o_(e) {
        return n_.test(e);
    }
    function Ml(e) {
        return e.endsWith("-bin");
    }
    function l_(e) {
        return !e.startsWith("grpc-");
    }
    function Zi(e) {
        return e.toLowerCase();
    }
    function wl(e, t) {
        if (!a_(e)) {
            throw Error(`Metadata key "${e}" contains illegal characters`);
        }
        if (t !== null && t !== undefined) {
            if (Ml(e)) {
                if (!Buffer.isBuffer(t)) {
                    throw Error("keys that end with '-bin' must have Buffer values");
                }
            } else {
                if (Buffer.isBuffer(t)) {
                    throw Error("keys that don't end with '-bin' must have String values");
                }
                if (!o_(t)) {
                    throw Error(`Metadata string value "${t}" contains illegal characters`);
                }
            }
        }
    }
    class es {
        constructor(e = {}){
            this.internalRepr = new Map;
            this.opaqueData = new Map;
            this.options = e;
        }
        set(e, t) {
            e = Zi(e);
            wl(e, t);
            this.internalRepr.set(e, [
                t
            ]);
        }
        add(e, t) {
            e = Zi(e);
            wl(e, t);
            let r = this.internalRepr.get(e);
            if (r === undefined) {
                this.internalRepr.set(e, [
                    t
                ]);
            } else {
                r.push(t);
            }
        }
        remove(e) {
            e = Zi(e);
            this.internalRepr.delete(e);
        }
        get(e) {
            e = Zi(e);
            return this.internalRepr.get(e) || [];
        }
        getMap() {
            let e = {};
            for (let [t, r] of this.internalRepr){
                if (r.length > 0) {
                    let i = r[0];
                    e[t] = Buffer.isBuffer(i) ? Buffer.from(i) : i;
                }
            }
            return e;
        }
        clone() {
            let e = new es(this.options);
            let e_internalRepr = e.internalRepr;
            for (let [r, i] of this.internalRepr){
                let s = i.map((n)=>{
                    if (Buffer.isBuffer(n)) {
                        return Buffer.from(n);
                    } else {
                        return n;
                    }
                });
                e_internalRepr.set(r, s);
            }
            return e;
        }
        merge(e) {
            for (let [t, r] of e.internalRepr){
                let i = (this.internalRepr.get(t) || []).concat(r);
                this.internalRepr.set(t, i);
            }
        }
        setOptions(e) {
            this.options = e;
        }
        getOptions() {
            return this.options;
        }
        toHttp2Headers() {
            let e = {};
            for (let [t, r] of this.internalRepr){
                if (t.startsWith(":")) {
                    continue;
                }
                e[t] = r.map(c_);
            }
            return e;
        }
        toJSON() {
            let e = {};
            for (let [t, r] of this.internalRepr){
                e[t] = r;
            }
            return e;
        }
        setOpaque(e, t) {
            this.opaqueData.set(e, t);
        }
        getOpaque(e) {
            return this.opaqueData.get(e);
        }
        static fromHttp2Headers(e) {
            let t = new es;
            for (let r of Object.keys(e)){
                if (r.charAt(0) === ":") {
                    continue;
                }
                let i = e[r];
                try {
                    if (Ml(r)) {
                        if (Array.isArray(i)) {
                            i.forEach((s)=>{
                                t.add(r, Buffer.from(s, "base64"));
                            });
                        } else if (i !== undefined) {
                            if (l_(r)) {
                                i.split(",").forEach((s)=>{
                                    t.add(r, Buffer.from(s.trim(), "base64"));
                                });
                            } else {
                                t.add(r, Buffer.from(i, "base64"));
                            }
                        }
                    } else if (Array.isArray(i)) {
                        i.forEach((s)=>{
                            t.add(r, s);
                        });
                    } else if (i !== undefined) {
                        t.add(r, i);
                    }
                } catch (error) {
                    let n = `Failed to add metadata entry ${r}: ${i}. ${Nl.getErrorMessage(error)}. For more information see https://github.com/grpc/grpc-node/issues/1173`;
                    Al.log(Pl.LogVerbosity.ERROR, n);
                }
            }
            return t;
        }
    }
    Il.Metadata = es;
    var c_ = (e)=>{
        if (Buffer.isBuffer(e)) {
            return e.toString("base64");
        }
        return e;
    };
});
const rs = C(function(kl) {
    Object.defineProperty(kl, "__esModule", {
        value: true
    });
    kl.CallCredentials = undefined;
    const br = ue();
    function u_(e) {
        return "getRequestHeaders" in e && typeof e.getRequestHeaders === "function";
    }
    class Or {
        static createFromMetadataGenerator(e) {
            return new ua(e);
        }
        static createFromGoogleCredential(e) {
            return Or.createFromMetadataGenerator((t, r)=>{
                let i;
                if (u_(e)) {
                    i = e.getRequestHeaders(t.service_url);
                } else {
                    i = new Promise((resolve, reject)=>{
                        e.getRequestMetadata(t.service_url, (a, o)=>{
                            if (a) {
                                reject(a);
                                return;
                            }
                            if (!o) {
                                reject(Error("Headers not set by metadata plugin"));
                                return;
                            }
                            resolve(o);
                        });
                    });
                }
                i.then((s)=>{
                    let n = new br.Metadata;
                    for (let a of Object.keys(s)){
                        n.add(a, s[a]);
                    }
                    r(null, n);
                }, (s)=>{
                    r(s);
                });
            });
        }
        static createEmpty() {
            return new da;
        }
    }
    kl.CallCredentials = Or;
    class ts extends Or {
        constructor(e){
            super();
            this.creds = e;
        }
        async generateMetadata(e) {
            let t = new br.Metadata;
            let r = await Promise.all(this.creds.map((i)=>i.generateMetadata(e)));
            for (let i of r){
                t.merge(i);
            }
            return t;
        }
        compose(e) {
            return new ts(this.creds.concat([
                e
            ]));
        }
        _equals(e) {
            if (this === e) {
                return true;
            }
            if (e instanceof ts) {
                return this.creds.every((t, r)=>t._equals(e.creds[r]));
            } else {
                return false;
            }
        }
    }
    class ua extends Or {
        constructor(e){
            super();
            this.metadataGenerator = e;
        }
        generateMetadata(e) {
            return new Promise((resolve, reject)=>{
                this.metadataGenerator(e, (i, s)=>{
                    if (s !== undefined) {
                        resolve(s);
                    } else {
                        reject(i);
                    }
                });
            });
        }
        compose(e) {
            return new ts([
                this,
                e
            ]);
        }
        _equals(e) {
            if (this === e) {
                return true;
            }
            if (e instanceof ua) {
                return this.metadataGenerator === e.metadataGenerator;
            } else {
                return false;
            }
        }
    }
    class da extends Or {
        generateMetadata(e) {
            return Promise.resolve(new br.Metadata);
        }
        compose(e) {
            return e;
        }
        _equals(e) {
            return e instanceof da;
        }
    }
});
const fa = C(function(ql) {
    Object.defineProperty(ql, "__esModule", {
        value: true
    });
    ql.CIPHER_SUITES = undefined;
    ql.getDefaultRootsData = d_;
    var Fl = Le("fs");
    ql.CIPHER_SUITES = process.env.GRPC_SSL_CIPHER_SUITES;
    var GRPC_DEFAULT_SSL_ROOTS_FILE_PATH = process.env.GRPC_DEFAULT_SSL_ROOTS_FILE_PATH;
    var ha = null;
    function d_() {
        if (GRPC_DEFAULT_SSL_ROOTS_FILE_PATH) {
            if (ha === null) {
                ha = Fl.readFileSync(GRPC_DEFAULT_SSL_ROOTS_FILE_PATH);
            }
            return ha;
        }
        return null;
    }
});
const we = C(function(zl) {
    Object.defineProperty(zl, "__esModule", {
        value: true
    });
    zl.parseUri = p_;
    zl.splitHostPort = g_;
    zl.combineHostPort = m_;
    zl.uriToString = v_;
    var f_ = /^(?:([A-Za-z0-9+.-]+):)?(?:\/\/([^/]*)\/)?(.+)$/;
    function p_(e) {
        let t = f_.exec(e);
        if (t === null) {
            return null;
        }
        return {
            scheme: t[1],
            authority: t[2],
            path: t[3]
        };
    }
    var Bl = /^\d+$/;
    function g_(e) {
        if (e.startsWith("[")) {
            let t = e.indexOf("]");
            if (t === -1) {
                return null;
            }
            let r = e.substring(1, t);
            if (r.indexOf(":") === -1) {
                return null;
            }
            if (e.length > t + 1) {
                if (e[t + 1] === ":") {
                    let i = e.substring(t + 2);
                    if (Bl.test(i)) {
                        return {
                            host: r,
                            port: +i
                        };
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            } else {
                return {
                    host: r
                };
            }
        } else {
            let t = e.split(":");
            if (t.length === 2) {
                if (Bl.test(t[1])) {
                    return {
                        host: t[0],
                        port: +t[1]
                    };
                } else {
                    return null;
                }
            } else {
                return {
                    host: e
                };
            }
        }
    }
    function m_(e) {
        if (e.port === undefined) {
            return e.host;
        } else if (e.host.includes(":")) {
            return `[${e.host}]:${e.port}`;
        } else {
            return `${e.host}:${e.port}`;
        }
    }
    function v_(e) {
        let t = "";
        if (e.scheme !== undefined) {
            t += `${e.scheme}:`;
        }
        if (e.authority !== undefined) {
            t += `//${e.authority}/`;
        }
        t += e.path;
        return t;
    }
});
const rt = C(function(Hl) {
    Object.defineProperty(Hl, "__esModule", {
        value: true
    });
    Hl.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = undefined;
    Hl.registerResolver = E_;
    Hl.registerDefaultScheme = T_;
    Hl.createResolver = R_;
    Hl.getDefaultAuthority = b_;
    Hl.mapUriDefaultScheme = O_;
    var Ar = we();
    Hl.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = "grpc.internal.config_selector";
    var wr = {};
    var scheme = null;
    function E_(e, t) {
        wr[e] = t;
    }
    function T_(e) {
        scheme = e;
    }
    function R_(e, t, r) {
        if (e.scheme !== undefined && e.scheme in wr) {
            return new wr[e.scheme](e, t, r);
        } else {
            throw Error(`No resolver could be created for target ${Ar.uriToString(e)}`);
        }
    }
    function b_(e) {
        if (e.scheme !== undefined && e.scheme in wr) {
            return wr[e.scheme].getDefaultAuthority(e);
        } else {
            throw Error(`Invalid target ${Ar.uriToString(e)}`);
        }
    }
    function O_(e) {
        if (e.scheme === undefined || !(e.scheme in wr)) {
            if (scheme !== null) {
                return {
                    scheme,
                    authority: undefined,
                    path: Ar.uriToString(e)
                };
            } else {
                return null;
            }
        }
        return e;
    }
});
const Mr = C(function(Kl) {
    Object.defineProperty(Kl, "__esModule", {
        value: true
    });
    Kl.ChannelCredentials = undefined;
    Kl.createCertificateProviderChannelCredentials = I_;
    const ut = Le("tls");
    const Wt = rs();
    const Pr = fa();
    const is = we();
    const jl = rt();
    const Gl = K();
    const $l = k();
    function ga(e, t) {
        if (e && !(e instanceof Buffer)) {
            throw TypeError(`${t}, if provided, must be a Buffer.`);
        }
    }
    class Nr {
        compose(e) {
            return new ns(this, e);
        }
        static createSsl(e, t, r, i) {
            ga(e, "Root certificate");
            ga(t, "Private key");
            ga(r, "Certificate chain");
            if (t && !r) {
                throw Error("Private key must be given with accompanying certificate chain");
            }
            if (!t && r) {
                throw Error("Certificate chain must be given with accompanying private key");
            }
            let n = ut.createSecureContext({
                ca: e ?? Pr.getDefaultRootsData() ?? undefined,
                key: t ?? undefined,
                cert: r ?? undefined,
                ciphers: Pr.CIPHER_SUITES
            });
            return new ss(n, i ?? {});
        }
        static createFromSecureContext(e, t) {
            return new ss(e, t ?? {});
        }
        static createInsecure() {
            return new ma;
        }
    }
    Kl.ChannelCredentials = Nr;
    class ma extends Nr {
        constructor(){
            super();
        }
        compose(e) {
            throw Error("Cannot compose insecure credentials");
        }
        _isSecure() {
            return false;
        }
        _equals(e) {
            return e instanceof ma;
        }
        _createSecureConnector(e, t, r) {
            return {
                connect (i) {
                    return Promise.resolve({
                        socket: i,
                        secure: false
                    });
                },
                waitForReady: ()=>Promise.resolve(),
                getCallCredentials: ()=>r ?? Wt.CallCredentials.createEmpty(),
                destroy () {}
            };
        }
    }
    function Vl(secureContext, verifyOptions, r, i) {
        let a = {
            secureContext
        };
        let o = r;
        if ("grpc.http_connect_target" in i) {
            let d = is.parseUri(i["grpc.http_connect_target"]);
            if (d) {
                o = d;
            }
        }
        let l = jl.getDefaultAuthority(o);
        let c = is.splitHostPort(l);
        let u = c?.host ?? l;
        a.host = u;
        if (verifyOptions.checkServerIdentity) {
            a.checkServerIdentity = verifyOptions.checkServerIdentity;
        }
        if (verifyOptions.rejectUnauthorized !== undefined) {
            a.rejectUnauthorized = verifyOptions.rejectUnauthorized;
        }
        a.ALPNProtocols = [
            "h2"
        ];
        if (i["grpc.ssl_target_name_override"]) {
            let d = i["grpc.ssl_target_name_override"];
            let h = a.checkServerIdentity ?? ut.checkServerIdentity;
            a.checkServerIdentity = (m, f)=>h(d, f);
            a.servername = d;
        } else {
            a.servername = u;
        }
        if (i["grpc-node.tls_enable_trace"]) {
            a.enableTrace = true;
        }
        return a;
    }
    class Yl {
        constructor(e, t){
            this.connectionOptions = e;
            this.callCredentials = t;
        }
        connect(e) {
            let t = {
                socket: e,
                ...this.connectionOptions
            };
            return new Promise((resolve, reject)=>{
                let s = ut.connect(t, ()=>{
                    if ((this.connectionOptions.rejectUnauthorized ?? true) && !s.authorized) {
                        reject(s.authorizationError);
                        return;
                    }
                    resolve({
                        socket: s,
                        secure: true
                    });
                });
                s.on("error", (n)=>{
                    reject(n);
                });
            });
        }
        waitForReady() {
            return Promise.resolve();
        }
        getCallCredentials() {
            return this.callCredentials;
        }
        destroy() {}
    }
    class ss extends Nr {
        constructor(e, t){
            super();
            this.secureContext = e;
            this.verifyOptions = t;
        }
        _isSecure() {
            return true;
        }
        _equals(e) {
            if (this === e) {
                return true;
            }
            if (e instanceof ss) {
                return this.secureContext === e.secureContext && this.verifyOptions.checkServerIdentity === e.verifyOptions.checkServerIdentity;
            } else {
                return false;
            }
        }
        _createSecureConnector(e, t, r) {
            let i = Vl(this.secureContext, this.verifyOptions, e, t);
            return new Yl(i, r ?? Wt.CallCredentials.createEmpty());
        }
    }
    class Ci extends Nr {
        constructor(e, t, r){
            super();
            this.caCertificateProvider = e;
            this.identityCertificateProvider = t;
            this.verifyOptions = r;
            this.refcount = 0;
            this.latestCaUpdate = undefined;
            this.latestIdentityUpdate = undefined;
            this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this);
            this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this);
            this.secureContextWatchers = [];
        }
        _isSecure() {
            return true;
        }
        _equals(e) {
            if (this === e) {
                return true;
            }
            if (e instanceof Ci) {
                return this.caCertificateProvider === e.caCertificateProvider && this.identityCertificateProvider === e.identityCertificateProvider && this.verifyOptions?.checkServerIdentity === e.verifyOptions?.checkServerIdentity;
            } else {
                return false;
            }
        }
        ref() {
            if (this.refcount === 0) {
                this.caCertificateProvider.addCaCertificateListener(this.caCertificateUpdateListener);
                this.identityCertificateProvider?.addIdentityCertificateListener(this.identityCertificateUpdateListener);
            }
            this.refcount += 1;
        }
        unref() {
            this.refcount -= 1;
            if (this.refcount === 0) {
                this.caCertificateProvider.removeCaCertificateListener(this.caCertificateUpdateListener);
                this.identityCertificateProvider?.removeIdentityCertificateListener(this.identityCertificateUpdateListener);
            }
        }
        _createSecureConnector(e, t, r) {
            this.ref();
            return new Ci.SecureConnectorImpl(this, e, t, r ?? Wt.CallCredentials.createEmpty());
        }
        maybeUpdateWatchers() {
            if (this.hasReceivedUpdates()) {
                for (let e of this.secureContextWatchers){
                    e(this.getLatestSecureContext());
                }
                this.secureContextWatchers = [];
            }
        }
        handleCaCertificateUpdate(e) {
            this.latestCaUpdate = e;
            this.maybeUpdateWatchers();
        }
        handleIdentityCertitificateUpdate(e) {
            this.latestIdentityUpdate = e;
            this.maybeUpdateWatchers();
        }
        hasReceivedUpdates() {
            if (this.latestCaUpdate === undefined) {
                return false;
            }
            if (this.identityCertificateProvider && this.latestIdentityUpdate === undefined) {
                return false;
            }
            return true;
        }
        getSecureContext() {
            if (this.hasReceivedUpdates()) {
                return Promise.resolve(this.getLatestSecureContext());
            } else {
                return new Promise((resolve)=>{
                    this.secureContextWatchers.push(resolve);
                });
            }
        }
        getLatestSecureContext() {
            if (!this.latestCaUpdate) {
                return null;
            }
            if (this.identityCertificateProvider !== null && !this.latestIdentityUpdate) {
                return null;
            }
            try {
                return ut.createSecureContext({
                    ca: this.latestCaUpdate.caCertificate,
                    key: this.latestIdentityUpdate?.privateKey,
                    cert: this.latestIdentityUpdate?.certificate,
                    ciphers: Pr.CIPHER_SUITES
                });
            } catch (error) {
                Gl.log($l.LogVerbosity.ERROR, `Failed to createSecureContext with error ${error.message}`);
                return null;
            }
        }
    }
    Ci.SecureConnectorImpl = class {
        constructor(e, t, r, i){
            this.parent = e;
            this.channelTarget = t;
            this.options = r;
            this.callCredentials = i;
        }
        connect(e) {
            return new Promise((resolve, reject)=>{
                let i = this.parent.getLatestSecureContext();
                if (!i) {
                    reject(Error("Failed to load credentials"));
                    return;
                }
                if (e.closed) {
                    reject(Error("Socket closed while loading credentials"));
                }
                let s = Vl(i, this.parent.verifyOptions, this.channelTarget, this.options);
                let n = {
                    socket: e,
                    ...s
                };
                let a = ()=>{
                    reject(Error("Socket closed"));
                };
                let o = (c)=>{
                    reject(c);
                };
                let l = ut.connect(n, ()=>{
                    l.removeListener("close", a);
                    l.removeListener("error", o);
                    if ((this.parent.verifyOptions.rejectUnauthorized ?? true) && !l.authorized) {
                        reject(l.authorizationError);
                        return;
                    }
                    resolve({
                        socket: l,
                        secure: true
                    });
                });
                l.once("close", a);
                l.once("error", o);
            });
        }
        async waitForReady() {
            await this.parent.getSecureContext();
        }
        getCallCredentials() {
            return this.callCredentials;
        }
        destroy() {
            this.parent.unref();
        }
    };
    function I_(e, t, r) {
        return new Ci(e, t, r ?? {});
    }
    class ns extends Nr {
        constructor(e, t){
            super();
            this.channelCredentials = e;
            this.callCredentials = t;
            if (!e._isSecure()) {
                throw Error("Cannot compose insecure credentials");
            }
        }
        compose(e) {
            let t = this.callCredentials.compose(e);
            return new ns(this.channelCredentials, t);
        }
        _isSecure() {
            return true;
        }
        _equals(e) {
            if (this === e) {
                return true;
            }
            if (e instanceof ns) {
                return this.channelCredentials._equals(e.channelCredentials) && this.callCredentials._equals(e.callCredentials);
            } else {
                return false;
            }
        }
        _createSecureConnector(e, t, r) {
            let i = this.callCredentials.compose(r ?? Wt.CallCredentials.createEmpty());
            return this.channelCredentials._createSecureConnector(e, t, i);
        }
    }
});
const Gt = C(function(ec) {
    Object.defineProperty(ec, "__esModule", {
        value: true
    });
    ec.createChildChannelControlHelper = k_;
    ec.registerLoadBalancerType = D_;
    ec.registerDefaultLoadBalancerType = L_;
    ec.createLoadBalancer = F_;
    ec.isLoadBalancerNameRegistered = q_;
    ec.parseLoadBalancingConfig = Zl;
    ec.getDefaultConfig = U_;
    ec.selectLbConfigFromList = B_;
    var Xl = K();
    var Ql = k();
    function k_(e, t) {
        return {
            createSubchannel: t.createSubchannel?.bind(t) ?? e.createSubchannel.bind(e),
            updateState: t.updateState?.bind(t) ?? e.updateState.bind(e),
            requestReresolution: t.requestReresolution?.bind(t) ?? e.requestReresolution.bind(e),
            addChannelzChild: t.addChannelzChild?.bind(t) ?? e.addChannelzChild.bind(e),
            removeChannelzChild: t.removeChannelzChild?.bind(t) ?? e.removeChannelzChild.bind(e)
        };
    }
    var jt = {};
    var Ei = null;
    function D_(e, LoadBalancer, LoadBalancingConfig) {
        jt[e] = {
            LoadBalancer,
            LoadBalancingConfig
        };
    }
    function L_(e) {
        Ei = e;
    }
    function F_(e, t) {
        let r = e.getLoadBalancerName();
        if (r in jt) {
            return new jt[r].LoadBalancer(t);
        } else {
            return null;
        }
    }
    function q_(e) {
        return e in jt;
    }
    function Zl(e) {
        let t = Object.keys(e);
        if (t.length !== 1) {
            throw Error("Provided load balancing config has multiple conflicting entries");
        }
        let r = t[0];
        if (r in jt) {
            try {
                return jt[r].LoadBalancingConfig.createFromJson(e[r]);
            } catch (error) {
                throw Error(`${r}: ${error.message}`);
            }
        } else {
            throw Error(`Unrecognized load balancing config name ${r}`);
        }
    }
    function U_() {
        if (!Ei) {
            throw Error("No default load balancer type registered");
        }
        return new jt[Ei].LoadBalancingConfig;
    }
    function B_(e, t = false) {
        for (let r of e){
            try {
                return Zl(r);
            } catch (error) {
                Xl.log(Ql.LogVerbosity.DEBUG, "Config parsing failed with error", error.message);
                continue;
            }
        }
        if (t) {
            if (Ei) {
                return new jt[Ei].LoadBalancingConfig;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
});
const va = C(function(sc) {
    Object.defineProperty(sc, "__esModule", {
        value: true
    });
    sc.validateRetryThrottling = rc;
    sc.validateServiceConfig = ic;
    sc.extractAndSelectServiceConfig = iS;
    var tc = Le("os");
    var $t = k();
    var as = /^\d+(\.\d{1,9})?s$/;
    var K_ = "node";
    function J_(e) {
        if ("service" in e && e.service !== "") {
            if (typeof e.service !== "string") {
                throw Error(`Invalid method config name: invalid service: expected type string, got ${typeof e.service}`);
            }
            if ("method" in e && e.method !== "") {
                if (typeof e.method !== "string") {
                    throw Error(`Invalid method config name: invalid method: expected type string, got ${typeof e.service}`);
                }
                return {
                    service: e.service,
                    method: e.method
                };
            } else {
                return {
                    service: e.service
                };
            }
        } else {
            if ("method" in e && e.method !== undefined) {
                throw Error("Invalid method config name: method set with empty or unset service");
            }
            return {};
        }
    }
    function X_(retryPolicy) {
        if (!("maxAttempts" in retryPolicy) || !Number.isInteger(retryPolicy.maxAttempts) || retryPolicy.maxAttempts < 2) {
            throw Error("Invalid method config retry policy: maxAttempts must be an integer at least 2");
        }
        if (!("initialBackoff" in retryPolicy) || typeof retryPolicy.initialBackoff !== "string" || !as.test(retryPolicy.initialBackoff)) {
            throw Error("Invalid method config retry policy: initialBackoff must be a string consisting of a positive integer or decimal followed by s");
        }
        if (!("maxBackoff" in retryPolicy) || typeof retryPolicy.maxBackoff !== "string" || !as.test(retryPolicy.maxBackoff)) {
            throw Error("Invalid method config retry policy: maxBackoff must be a string consisting of a positive integer or decimal followed by s");
        }
        if (!("backoffMultiplier" in retryPolicy) || typeof retryPolicy.backoffMultiplier !== "number" || retryPolicy.backoffMultiplier <= 0) {
            throw Error("Invalid method config retry policy: backoffMultiplier must be a number greater than 0");
        }
        if (!("retryableStatusCodes" in retryPolicy && Array.isArray(retryPolicy.retryableStatusCodes))) {
            throw Error("Invalid method config retry policy: retryableStatusCodes is required");
        }
        if (retryPolicy.retryableStatusCodes.length === 0) {
            throw Error("Invalid method config retry policy: retryableStatusCodes must be non-empty");
        }
        for (let t of retryPolicy.retryableStatusCodes){
            if (typeof t === "number") {
                if (!Object.values($t.Status).includes(t)) {
                    throw Error("Invalid method config retry policy: retryableStatusCodes value not in status code range");
                }
            } else if (typeof t === "string") {
                if (!Object.values($t.Status).includes(t.toUpperCase())) {
                    throw Error("Invalid method config retry policy: retryableStatusCodes value not a status code name");
                }
            } else {
                throw Error("Invalid method config retry policy: retryableStatusCodes value must be a string or number");
            }
        }
        return {
            maxAttempts: retryPolicy.maxAttempts,
            initialBackoff: retryPolicy.initialBackoff,
            maxBackoff: retryPolicy.maxBackoff,
            backoffMultiplier: retryPolicy.backoffMultiplier,
            retryableStatusCodes: retryPolicy.retryableStatusCodes
        };
    }
    function Q_(hedgingPolicy) {
        if (!("maxAttempts" in hedgingPolicy) || !Number.isInteger(hedgingPolicy.maxAttempts) || hedgingPolicy.maxAttempts < 2) {
            throw Error("Invalid method config hedging policy: maxAttempts must be an integer at least 2");
        }
        if ("hedgingDelay" in hedgingPolicy && (typeof hedgingPolicy.hedgingDelay !== "string" || !as.test(hedgingPolicy.hedgingDelay))) {
            throw Error("Invalid method config hedging policy: hedgingDelay must be a string consisting of a positive integer followed by s");
        }
        if ("nonFatalStatusCodes" in hedgingPolicy && Array.isArray(hedgingPolicy.nonFatalStatusCodes)) {
            for (let r of hedgingPolicy.nonFatalStatusCodes){
                if (typeof r === "number") {
                    if (!Object.values($t.Status).includes(r)) {
                        throw Error("Invalid method config hedging policy: nonFatalStatusCodes value not in status code range");
                    }
                } else if (typeof r === "string") {
                    if (!Object.values($t.Status).includes(r.toUpperCase())) {
                        throw Error("Invalid method config hedging policy: nonFatalStatusCodes value not a status code name");
                    }
                } else {
                    throw Error("Invalid method config hedging policy: nonFatalStatusCodes value must be a string or number");
                }
            }
        }
        let t = {
            maxAttempts: hedgingPolicy.maxAttempts
        };
        if (hedgingPolicy.hedgingDelay) {
            t.hedgingDelay = hedgingPolicy.hedgingDelay;
        }
        if (hedgingPolicy.nonFatalStatusCodes) {
            t.nonFatalStatusCodes = hedgingPolicy.nonFatalStatusCodes;
        }
        return t;
    }
    function Z_(e) {
        let r = {
            name: []
        };
        if (!("name" in e) || !Array.isArray(e.name)) {
            throw Error("Invalid method config: invalid name array");
        }
        for (let i of e.name){
            r.name.push(J_(i));
        }
        if ("waitForReady" in e) {
            if (typeof e.waitForReady !== "boolean") {
                throw Error("Invalid method config: invalid waitForReady");
            }
            r.waitForReady = e.waitForReady;
        }
        if ("timeout" in e) {
            if (typeof e.timeout === "object") {
                if (!("seconds" in e.timeout) || typeof e.timeout.seconds !== "number") {
                    throw Error("Invalid method config: invalid timeout.seconds");
                }
                if (!("nanos" in e.timeout) || typeof e.timeout.nanos !== "number") {
                    throw Error("Invalid method config: invalid timeout.nanos");
                }
                r.timeout = e.timeout;
            } else if (typeof e.timeout === "string" && as.test(e.timeout)) {
                let i = e.timeout.substring(0, e.timeout.length - 1).split(".");
                r.timeout = {
                    seconds: i[0] | 0,
                    nanos: (i[1] ?? 0) | 0
                };
            } else {
                throw Error("Invalid method config: invalid timeout");
            }
        }
        if ("maxRequestBytes" in e) {
            if (typeof e.maxRequestBytes !== "number") {
                throw Error("Invalid method config: invalid maxRequestBytes");
            }
            r.maxRequestBytes = e.maxRequestBytes;
        }
        if ("maxResponseBytes" in e) {
            if (typeof e.maxResponseBytes !== "number") {
                throw Error("Invalid method config: invalid maxRequestBytes");
            }
            r.maxResponseBytes = e.maxResponseBytes;
        }
        if ("retryPolicy" in e) {
            if ("hedgingPolicy" in e) {
                throw Error("Invalid method config: retryPolicy and hedgingPolicy cannot both be specified");
            } else {
                r.retryPolicy = X_(e.retryPolicy);
            }
        } else if ("hedgingPolicy" in e) {
            r.hedgingPolicy = Q_(e.hedgingPolicy);
        }
        return r;
    }
    function rc(e) {
        if (!("maxTokens" in e) || typeof e.maxTokens !== "number" || e.maxTokens <= 0 || e.maxTokens > 1000) {
            throw Error("Invalid retryThrottling: maxTokens must be a number in (0, 1000]");
        }
        if (!("tokenRatio" in e) || typeof e.tokenRatio !== "number" || e.tokenRatio <= 0) {
            throw Error("Invalid retryThrottling: tokenRatio must be a number greater than 0");
        }
        return {
            maxTokens: +e.maxTokens.toFixed(3),
            tokenRatio: +e.tokenRatio.toFixed(3)
        };
    }
    function eS(e) {
        if (!(typeof e === "object" && e !== null)) {
            throw Error(`Invalid loadBalancingConfig: unexpected type ${typeof e}`);
        }
        let t = Object.keys(e);
        if (t.length > 1) {
            throw Error(`Invalid loadBalancingConfig: unexpected multiple keys ${t}`);
        }
        if (t.length === 0) {
            throw Error("Invalid loadBalancingConfig: load balancing policy name required");
        }
        return {
            [t[0]]: e[t[0]]
        };
    }
    function ic(e) {
        let t = {
            loadBalancingConfig: [],
            methodConfig: []
        };
        if ("loadBalancingPolicy" in e) {
            if (typeof e.loadBalancingPolicy === "string") {
                t.loadBalancingPolicy = e.loadBalancingPolicy;
            } else {
                throw Error("Invalid service config: invalid loadBalancingPolicy");
            }
        }
        if ("loadBalancingConfig" in e) {
            if (Array.isArray(e.loadBalancingConfig)) {
                for (let i of e.loadBalancingConfig){
                    t.loadBalancingConfig.push(eS(i));
                }
            } else {
                throw Error("Invalid service config: invalid loadBalancingConfig");
            }
        }
        if ("methodConfig" in e) {
            if (Array.isArray(e.methodConfig)) {
                for (let i of e.methodConfig){
                    t.methodConfig.push(Z_(i));
                }
            }
        }
        if ("retryThrottling" in e) {
            t.retryThrottling = rc(e.retryThrottling);
        }
        let r = [];
        for (let i of t.methodConfig){
            for (let s of i.name){
                for (let n of r){
                    if (s.service === n.service && s.method === n.method) {
                        throw Error(`Invalid service config: duplicate name ${s.service}/${s.method}`);
                    }
                }
                r.push(s);
            }
        }
        return t;
    }
    function tS(e) {
        if (!("serviceConfig" in e)) {
            throw Error("Invalid service config choice: missing service config");
        }
        let t = {
            serviceConfig: ic(e.serviceConfig)
        };
        if ("clientLanguage" in e) {
            if (Array.isArray(e.clientLanguage)) {
                t.clientLanguage = [];
                for (let i of e.clientLanguage){
                    if (typeof i === "string") {
                        t.clientLanguage.push(i);
                    } else {
                        throw Error("Invalid service config choice: invalid clientLanguage");
                    }
                }
            } else {
                throw Error("Invalid service config choice: invalid clientLanguage");
            }
        }
        if ("clientHostname" in e) {
            if (Array.isArray(e.clientHostname)) {
                t.clientHostname = [];
                for (let i of e.clientHostname){
                    if (typeof i === "string") {
                        t.clientHostname.push(i);
                    } else {
                        throw Error("Invalid service config choice: invalid clientHostname");
                    }
                }
            } else {
                throw Error("Invalid service config choice: invalid clientHostname");
            }
        }
        if ("percentage" in e) {
            if (typeof e.percentage === "number" && e.percentage >= 0 && e.percentage <= 100) {
                t.percentage = e.percentage;
            } else {
                throw Error("Invalid service config choice: invalid percentage");
            }
        }
        let r = [
            "clientLanguage",
            "percentage",
            "clientHostname",
            "serviceConfig"
        ];
        for(let i in e){
            if (!r.includes(i)) {
                throw Error(`Invalid service config choice: unexpected field ${i}`);
            }
        }
        return t;
    }
    function rS(e, t) {
        if (!Array.isArray(e)) {
            throw Error("Invalid service config list");
        }
        for (let r of e){
            let i = tS(r);
            if (typeof i.percentage === "number" && t > i.percentage) {
                continue;
            }
            if (Array.isArray(i.clientHostname)) {
                let s = false;
                for (let n of i.clientHostname){
                    if (n === tc.hostname()) {
                        s = true;
                    }
                }
                if (!s) {
                    continue;
                }
            }
            if (Array.isArray(i.clientLanguage)) {
                let s = false;
                for (let n of i.clientLanguage){
                    if (n === K_) {
                        s = true;
                    }
                }
                if (!s) {
                    continue;
                }
            }
            return i.serviceConfig;
        }
        throw Error("No matching service config found");
    }
    function iS(e, t) {
        for (let r of e){
            if (r.length > 0 && r[0].startsWith("grpc_config=")) {
                let i = r.join("").substring(12);
                let s = JSON.parse(i);
                return rS(s, t);
            }
        }
        return null;
    }
});
const Ae = C(function(ac) {
    Object.defineProperty(ac, "__esModule", {
        value: true
    });
    ac.ConnectivityState = undefined;
    let nc;
    ((e)=>{
        e[e.IDLE = 0] = "IDLE";
        e[e.CONNECTING = 1] = "CONNECTING";
        e[e.READY = 2] = "READY";
        e[e.TRANSIENT_FAILURE = 3] = "TRANSIENT_FAILURE";
        e[e.SHUTDOWN = 4] = "SHUTDOWN";
    })(nc || (ac.ConnectivityState = nc = {}));
});
const kt = C(function(hc) {
    Object.defineProperty(hc, "__esModule", {
        value: true
    });
    hc.QueuePicker = hc.UnavailablePicker = hc.PickResultType = undefined;
    const lc = ue();
    const cc = k();
    let os;
    ((e)=>{
        e[e.COMPLETE = 0] = "COMPLETE";
        e[e.QUEUE = 1] = "QUEUE";
        e[e.TRANSIENT_FAILURE = 2] = "TRANSIENT_FAILURE";
        e[e.DROP = 3] = "DROP";
    })(os || (hc.PickResultType = os = {}));
    class uc {
        constructor(e){
            this.status = {
                code: cc.Status.UNAVAILABLE,
                details: "No connection established",
                metadata: new lc.Metadata,
                ...e
            };
        }
        pick(e) {
            return {
                pickResultType: os.TRANSIENT_FAILURE,
                subchannel: null,
                status: this.status,
                onCallStarted: null,
                onCallEnded: null
            };
        }
    }
    hc.UnavailablePicker = uc;
    class dc {
        constructor(e, t){
            this.loadBalancer = e;
            this.childPicker = t;
            this.calledExitIdle = false;
        }
        pick(e) {
            if (!this.calledExitIdle) {
                process.nextTick(()=>{
                    this.loadBalancer.exitIdle();
                });
                this.calledExitIdle = true;
            }
            if (this.childPicker) {
                return this.childPicker.pick(e);
            } else {
                return {
                    pickResultType: os.QUEUE,
                    subchannel: null,
                    status: null,
                    onCallStarted: null,
                    onCallEnded: null
                };
            }
        }
    }
    hc.QueuePicker = dc;
});
const Ir = C(function(mc) {
    Object.defineProperty(mc, "__esModule", {
        value: true
    });
    mc.BackoffTimeout = undefined;
    const pc = k();
    const gc = K();
    const cS = "backoff";
    const uS = 1000;
    const dS = 1.6;
    const hS = 120000;
    const fS = 0.2;
    function pS(e, t) {
        return Math.random() * (t - e) + e;
    }
    class ls {
        constructor(e, t){
            this.callback = e;
            this.initialDelay = uS;
            this.multiplier = dS;
            this.maxDelay = hS;
            this.jitter = fS;
            this.running = false;
            this.hasRef = true;
            this.startTime = new Date;
            this.endTime = new Date;
            this.id = ls.getNextId();
            if (t) {
                if (t.initialDelay) {
                    this.initialDelay = t.initialDelay;
                }
                if (t.multiplier) {
                    this.multiplier = t.multiplier;
                }
                if (t.jitter) {
                    this.jitter = t.jitter;
                }
                if (t.maxDelay) {
                    this.maxDelay = t.maxDelay;
                }
            }
            this.trace(`constructed initialDelay=${this.initialDelay} multiplier=${this.multiplier} jitter=${this.jitter} maxDelay=${this.maxDelay}`);
            this.nextDelay = this.initialDelay;
            this.timerId = setTimeout(()=>{}, 0);
            clearTimeout(this.timerId);
        }
        static getNextId() {
            return this.nextId++;
        }
        trace(e) {
            gc.trace(pc.LogVerbosity.DEBUG, cS, `{${this.id}} ${e}`);
        }
        runTimer(e) {
            this.trace(`runTimer(delay=${e})`);
            this.endTime = this.startTime;
            this.endTime.setMilliseconds(this.endTime.getMilliseconds() + e);
            clearTimeout(this.timerId);
            this.timerId = setTimeout(()=>{
                this.trace("timer fired");
                this.running = false;
                this.callback();
            }, e);
            if (!this.hasRef) {
                this.timerId.unref?.();
            }
        }
        runOnce() {
            this.trace("runOnce()");
            this.running = true;
            this.startTime = new Date;
            this.runTimer(this.nextDelay);
            let e = Math.min(this.nextDelay * this.multiplier, this.maxDelay);
            let t = e * this.jitter;
            this.nextDelay = e + pS(-t, t);
        }
        stop() {
            this.trace("stop()");
            clearTimeout(this.timerId);
            this.running = false;
        }
        reset() {
            this.trace(`reset() running=${this.running}`);
            this.nextDelay = this.initialDelay;
            if (this.running) {
                let e = new Date;
                let t = this.startTime;
                t.setMilliseconds(t.getMilliseconds() + this.nextDelay);
                clearTimeout(this.timerId);
                if (e < t) {
                    this.runTimer(t.getTime() - e.getTime());
                } else {
                    this.running = false;
                }
            }
        }
        isRunning() {
            return this.running;
        }
        ref() {
            this.hasRef = true;
            this.timerId.ref?.();
        }
        unref() {
            this.hasRef = false;
            this.timerId.unref?.();
        }
        getEndTime() {
            return this.endTime;
        }
    }
    mc.BackoffTimeout = ls;
    ls.nextId = 0;
});
const cs = C(function(Cc) {
    Object.defineProperty(Cc, "__esModule", {
        value: true
    });
    Cc.ChildLoadBalancerHandler = undefined;
    const yc = Gt();
    const _c = Ae();
    const gS = "child_load_balancer_helper";
    class Sc {
        constructor(e){
            this.channelControlHelper = e;
            this.currentChild = null;
            this.pendingChild = null;
            this.latestConfig = null;
            this.ChildPolicyHelper = class {
                constructor(t){
                    this.parent = t;
                    this.child = null;
                }
                createSubchannel(t, r) {
                    return this.parent.channelControlHelper.createSubchannel(t, r);
                }
                updateState(t, r, i) {
                    if (this.calledByPendingChild()) {
                        if (t === _c.ConnectivityState.CONNECTING) {
                            return;
                        }
                        this.parent.currentChild?.destroy();
                        this.parent.currentChild = this.parent.pendingChild;
                        this.parent.pendingChild = null;
                    } else if (!this.calledByCurrentChild()) {
                        return;
                    }
                    this.parent.channelControlHelper.updateState(t, r, i);
                }
                requestReresolution() {
                    let r = this.parent.pendingChild ?? this.parent.currentChild;
                    if (this.child === r) {
                        this.parent.channelControlHelper.requestReresolution();
                    }
                }
                setChild(t) {
                    this.child = t;
                }
                addChannelzChild(t) {
                    this.parent.channelControlHelper.addChannelzChild(t);
                }
                removeChannelzChild(t) {
                    this.parent.channelControlHelper.removeChannelzChild(t);
                }
                calledByPendingChild() {
                    return this.child === this.parent.pendingChild;
                }
                calledByCurrentChild() {
                    return this.child === this.parent.currentChild;
                }
            };
        }
        configUpdateRequiresNewPolicyInstance(e, t) {
            return e.getLoadBalancerName() !== t.getLoadBalancerName();
        }
        updateAddressList(e, t, r, i) {
            let s;
            if (this.currentChild === null || this.latestConfig === null || this.configUpdateRequiresNewPolicyInstance(this.latestConfig, t)) {
                let n = new this.ChildPolicyHelper(this);
                let a = yc.createLoadBalancer(t, n);
                n.setChild(a);
                if (this.currentChild === null) {
                    this.currentChild = a;
                    s = this.currentChild;
                } else {
                    if (this.pendingChild) {
                        this.pendingChild.destroy();
                    }
                    this.pendingChild = a;
                    s = this.pendingChild;
                }
            } else if (this.pendingChild === null) {
                s = this.currentChild;
            } else {
                s = this.pendingChild;
            }
            this.latestConfig = t;
            return s.updateAddressList(e, t, r, i);
        }
        exitIdle() {
            if (this.currentChild) {
                this.currentChild.exitIdle();
                if (this.pendingChild) {
                    this.pendingChild.exitIdle();
                }
            }
        }
        resetBackoff() {
            if (this.currentChild) {
                this.currentChild.resetBackoff();
                if (this.pendingChild) {
                    this.pendingChild.resetBackoff();
                }
            }
        }
        destroy() {
            if (this.currentChild) {
                this.currentChild.destroy();
                this.currentChild = null;
            }
            if (this.pendingChild) {
                this.pendingChild.destroy();
                this.pendingChild = null;
            }
        }
        getTypeName() {
            return gS;
        }
    }
    Cc.ChildLoadBalancerHandler = Sc;
});
const Dc = C(function(xc) {
    Object.defineProperty(xc, "__esModule", {
        value: true
    });
    xc.ResolvingLoadBalancer = undefined;
    const Rc = Gt();
    const bc = va();
    const V = Ae();
    const us = rt();
    const dt = kt();
    const Oc = Ir();
    const xr = k();
    const wc = ue();
    const Ac = K();
    const Pc = k();
    const Nc = we();
    const Mc = cs();
    const mS = "resolving_load_balancer";
    function Tc(e) {
        Ac.trace(Pc.LogVerbosity.DEBUG, mS, e);
    }
    const vS = [
        "SERVICE_AND_METHOD",
        "SERVICE",
        "EMPTY"
    ];
    function yS(e, t, r, i) {
        for (let s of r.name){
            switch(i){
                case "EMPTY":
                    if (!s.service && !s.method) {
                        return true;
                    }
                    break;
                case "SERVICE":
                    if (s.service === e && !s.method) {
                        return true;
                    }
                    break;
                case "SERVICE_AND_METHOD":
                    if (s.service === e && s.method === t) {
                        return true;
                    }
            }
        }
        return false;
    }
    function _S(e, t, methodConfig, i) {
        for (let s of methodConfig){
            if (yS(e, t, s, i)) {
                return s;
            }
        }
        return null;
    }
    function SS(e) {
        return {
            invoke (t, r) {
                let n = t.split("/").filter((l)=>l.length > 0);
                let a = n[0] ?? "";
                let o = n[1] ?? "";
                if (e && e.methodConfig) {
                    for (let l of vS){
                        let methodConfig = _S(a, o, e.methodConfig, l);
                        if (methodConfig) {
                            return {
                                methodConfig,
                                pickInformation: {},
                                status: xr.Status.OK,
                                dynamicFilterFactories: []
                            };
                        }
                    }
                }
                return {
                    methodConfig: {
                        name: []
                    },
                    pickInformation: {},
                    status: xr.Status.OK,
                    dynamicFilterFactories: []
                };
            },
            unref () {}
        };
    }
    class Ic {
        constructor(e, t, r, i, s){
            this.target = e;
            this.channelControlHelper = t;
            this.channelOptions = r;
            this.onSuccessfulResolution = i;
            this.onFailedResolution = s;
            this.latestChildState = V.ConnectivityState.IDLE;
            this.latestChildPicker = new dt.QueuePicker(this);
            this.latestChildErrorMessage = null;
            this.currentState = V.ConnectivityState.IDLE;
            this.previousServiceConfig = null;
            this.continueResolving = false;
            if (r["grpc.service_config"]) {
                this.defaultServiceConfig = bc.validateServiceConfig(JSON.parse(r["grpc.service_config"]));
            } else {
                this.defaultServiceConfig = {
                    loadBalancingConfig: [],
                    methodConfig: []
                };
            }
            this.updateState(V.ConnectivityState.IDLE, new dt.QueuePicker(this), null);
            this.childLoadBalancer = new Mc.ChildLoadBalancerHandler({
                createSubchannel: t.createSubchannel.bind(t),
                requestReresolution: ()=>{
                    if (this.backoffTimeout.isRunning()) {
                        Tc(`requestReresolution delayed by backoff timer until ${this.backoffTimeout.getEndTime().toISOString()}`);
                        this.continueResolving = true;
                    } else {
                        this.updateResolution();
                    }
                },
                updateState: (a, o, l)=>{
                    this.latestChildState = a;
                    this.latestChildPicker = o;
                    this.latestChildErrorMessage = l;
                    this.updateState(a, o, l);
                },
                addChannelzChild: t.addChannelzChild.bind(t),
                removeChannelzChild: t.removeChannelzChild.bind(t)
            });
            this.innerResolver = us.createResolver(e, this.handleResolverResult.bind(this), r);
            let n = {
                initialDelay: r["grpc.initial_reconnect_backoff_ms"],
                maxDelay: r["grpc.max_reconnect_backoff_ms"]
            };
            this.backoffTimeout = new Oc.BackoffTimeout(()=>{
                if (this.continueResolving) {
                    this.updateResolution();
                    this.continueResolving = false;
                } else {
                    this.updateState(this.latestChildState, this.latestChildPicker, this.latestChildErrorMessage);
                }
            }, n);
            this.backoffTimeout.unref();
        }
        handleResolverResult(e, t, r, i) {
            this.backoffTimeout.stop();
            this.backoffTimeout.reset();
            let a = true;
            let o = null;
            if (r === null) {
                o = this.defaultServiceConfig;
            } else if (r.ok) {
                o = r.value;
            } else if (this.previousServiceConfig !== null) {
                o = this.previousServiceConfig;
            } else {
                a = false;
                this.handleResolutionFailure(r.error);
            }
            if (o !== null) {
                let l = o?.loadBalancingConfig ?? [];
                let c = Rc.selectLbConfigFromList(l, true);
                if (c === null) {
                    a = false;
                    this.handleResolutionFailure({
                        code: xr.Status.UNAVAILABLE,
                        details: "All load balancer options in service config are not compatible",
                        metadata: new wc.Metadata
                    });
                } else {
                    a = this.childLoadBalancer.updateAddressList(e, c, {
                        ...this.channelOptions,
                        ...t
                    }, i);
                }
            }
            if (a) {
                this.onSuccessfulResolution(o, t[us.CHANNEL_ARGS_CONFIG_SELECTOR_KEY] ?? SS(o));
            }
            return a;
        }
        updateResolution() {
            this.innerResolver.updateResolution();
            if (this.currentState === V.ConnectivityState.IDLE) {
                this.updateState(V.ConnectivityState.CONNECTING, this.latestChildPicker, this.latestChildErrorMessage);
            }
            this.backoffTimeout.runOnce();
        }
        updateState(e, t, r) {
            Tc(`${Nc.uriToString(this.target)} ${V.ConnectivityState[this.currentState]} -> ${V.ConnectivityState[e]}`);
            if (e === V.ConnectivityState.IDLE) {
                t = new dt.QueuePicker(this, t);
            }
            this.currentState = e;
            this.channelControlHelper.updateState(e, t, r);
        }
        handleResolutionFailure(e) {
            if (this.latestChildState === V.ConnectivityState.IDLE) {
                this.updateState(V.ConnectivityState.TRANSIENT_FAILURE, new dt.UnavailablePicker(e), e.details);
                this.onFailedResolution(e);
            }
        }
        exitIdle() {
            if (this.currentState === V.ConnectivityState.IDLE || this.currentState === V.ConnectivityState.TRANSIENT_FAILURE) {
                if (this.backoffTimeout.isRunning()) {
                    this.continueResolving = true;
                } else {
                    this.updateResolution();
                }
            }
            this.childLoadBalancer.exitIdle();
        }
        updateAddressList(e, t) {
            throw Error("updateAddressList not supported on ResolvingLoadBalancer");
        }
        resetBackoff() {
            this.backoffTimeout.reset();
            this.childLoadBalancer.resetBackoff();
        }
        destroy() {
            this.childLoadBalancer.destroy();
            this.innerResolver.destroy();
            this.backoffTimeout.reset();
            this.backoffTimeout.stop();
            this.latestChildState = V.ConnectivityState.IDLE;
            this.latestChildPicker = new dt.QueuePicker(this);
            this.currentState = V.ConnectivityState.IDLE;
            this.previousServiceConfig = null;
            this.continueResolving = false;
        }
        getTypeName() {
            return "resolving_load_balancer";
        }
    }
    xc.ResolvingLoadBalancer = Ic;
});
const qc = C(function(Lc) {
    Object.defineProperty(Lc, "__esModule", {
        value: true
    });
    Lc.recognizedOptions = undefined;
    Lc.channelOptionsEqual = CS;
    Lc.recognizedOptions = {
        "grpc.ssl_target_name_override": true,
        "grpc.primary_user_agent": true,
        "grpc.secondary_user_agent": true,
        "grpc.default_authority": true,
        "grpc.keepalive_time_ms": true,
        "grpc.keepalive_timeout_ms": true,
        "grpc.keepalive_permit_without_calls": true,
        "grpc.service_config": true,
        "grpc.max_concurrent_streams": true,
        "grpc.initial_reconnect_backoff_ms": true,
        "grpc.max_reconnect_backoff_ms": true,
        "grpc.use_local_subchannel_pool": true,
        "grpc.max_send_message_length": true,
        "grpc.max_receive_message_length": true,
        "grpc.enable_http_proxy": true,
        "grpc.enable_channelz": true,
        "grpc.dns_min_time_between_resolutions_ms": true,
        "grpc.enable_retries": true,
        "grpc.per_rpc_retry_buffer_size": true,
        "grpc.retry_buffer_size": true,
        "grpc.max_connection_age_ms": true,
        "grpc.max_connection_age_grace_ms": true,
        "grpc-node.max_session_memory": true,
        "grpc.service_config_disable_resolution": true,
        "grpc.client_idle_timeout_ms": true,
        "grpc-node.tls_enable_trace": true,
        "grpc.lb.ring_hash.ring_size_cap": true,
        "grpc-node.retry_max_attempts_limit": true,
        "grpc-node.flow_control_window": true,
        "grpc.server_call_metric_recording": true
    };
    function CS(e, t) {
        let r = Object.keys(e).sort();
        let i = Object.keys(t).sort();
        if (r.length !== i.length) {
            return false;
        }
        for(let s = 0; s < r.length; s += 1){
            if (r[s] !== i[s]) {
                return false;
            }
            if (e[r[s]] !== t[i[s]]) {
                return false;
            }
        }
        return true;
    }
});
const Pe = C(function(Hc) {
    Object.defineProperty(Hc, "__esModule", {
        value: true
    });
    Hc.EndpointMap = undefined;
    Hc.isTcpSubchannelAddress = Ri;
    Hc.subchannelAddressEqual = hs;
    Hc.subchannelAddressToString = Uc;
    Hc.stringToSubchannelAddress = RS;
    Hc.endpointEqual = bS;
    Hc.endpointToString = OS;
    Hc.endpointHasAddress = Bc;
    var ds = Le("net");
    function Ri(e) {
        return "port" in e;
    }
    function hs(e, t) {
        if (!e && !t) {
            return true;
        }
        if (!e || !t) {
            return false;
        }
        if (Ri(e)) {
            return Ri(t) && e.host === t.host && e.port === t.port;
        } else {
            return !Ri(t) && e.path === t.path;
        }
    }
    function Uc(e) {
        if (Ri(e)) {
            if (ds.isIPv6(e.host)) {
                return `[${e.host}]:${e.port}`;
            } else {
                return `${e.host}:${e.port}`;
            }
        } else {
            return e.path;
        }
    }
    var TS = 443;
    function RS(e, t) {
        if (ds.isIP(e)) {
            return {
                host: e,
                port: t ?? TS
            };
        } else {
            return {
                path: e
            };
        }
    }
    function bS(e, t) {
        if (e.addresses.length !== t.addresses.length) {
            return false;
        }
        for(let r = 0; r < e.addresses.length; r++){
            if (!hs(e.addresses[r], t.addresses[r])) {
                return false;
            }
        }
        return true;
    }
    function OS(e) {
        return `[${e.addresses.map(Uc).join(", ")}]`;
    }
    function Bc(e, t) {
        for (let r of e.addresses){
            if (hs(r, t)) {
                return true;
            }
        }
        return false;
    }
    function Ti(e, key) {
        if (e.addresses.length !== key.addresses.length) {
            return false;
        }
        for (let r of e.addresses){
            let i = false;
            for (let s of key.addresses){
                if (hs(r, s)) {
                    i = true;
                    break;
                }
            }
            if (!i) {
                return false;
            }
        }
        return true;
    }
    class zc {
        constructor(){
            this.map = new Set;
        }
        get size() {
            return this.map.size;
        }
        getForSubchannelAddress(e) {
            for (let t of this.map){
                if (Bc(t.key, e)) {
                    return t.value;
                }
            }
        }
        deleteMissing(e) {
            let t = [];
            for (let r of this.map){
                let i = false;
                for (let s of e){
                    if (Ti(s, r.key)) {
                        i = true;
                    }
                }
                if (!i) {
                    t.push(r.value);
                    this.map.delete(r);
                }
            }
            return t;
        }
        get(e) {
            for (let t of this.map){
                if (Ti(e, t.key)) {
                    return t.value;
                }
            }
        }
        set(e, t) {
            for (let r of this.map){
                if (Ti(e, r.key)) {
                    r.value = t;
                    return;
                }
            }
            this.map.add({
                key: e,
                value: t
            });
        }
        delete(e) {
            for (let t of this.map){
                if (Ti(e, t.key)) {
                    this.map.delete(t);
                    return;
                }
            }
        }
        has(e) {
            for (let t of this.map){
                if (Ti(e, t.key)) {
                    return true;
                }
            }
            return false;
        }
        clear() {
            this.map.clear();
        }
        *keys() {
            for (let e of this.map){
                yield e.key;
            }
        }
        *values() {
            for (let e of this.map){
                yield e.value;
            }
        }
        *entries() {
            for (let e of this.map){
                yield [
                    e.key,
                    e.value
                ];
            }
        }
    }
    Hc.EndpointMap = zc;
});
const Qc = C(function(Xc) {
    Object.defineProperty(Xc, "t", {
        value: true
    });
    class ya {
        constructor(e, t, r = 1){
            this.i = undefined;
            this.h = undefined;
            this.o = undefined;
            this.u = e;
            this.l = t;
            this.p = r;
        }
        I() {
            let e = this;
            let t = e.o.o === e;
            if (t && e.p === 1) {
                e = e.h;
            } else if (e.i) {
                e = e.i;
                while(e.h){
                    e = e.h;
                }
            } else {
                if (t) {
                    return e.o;
                }
                let r = e.o;
                while(r.i === e){
                    e = r;
                    r = e.o;
                }
                e = r;
            }
            return e;
        }
        B() {
            let e = this;
            if (e.h) {
                e = e.h;
                while(e.i){
                    e = e.i;
                }
                return e;
            } else {
                let t = e.o;
                while(t.h === e){
                    e = t;
                    t = e.o;
                }
                if (e.h !== t) {
                    return t;
                } else {
                    return e;
                }
            }
        }
        _() {
            let e = this.o;
            let t = this.h;
            let r = t.i;
            if (e.o === this) {
                e.o = t;
            } else if (e.i === this) {
                e.i = t;
            } else {
                e.h = t;
            }
            t.o = e;
            t.i = this;
            this.o = t;
            this.h = r;
            if (r) {
                r.o = this;
            }
            return t;
        }
        g() {
            let e = this.o;
            let t = this.i;
            let r = t.h;
            if (e.o === this) {
                e.o = t;
            } else if (e.i === this) {
                e.i = t;
            } else {
                e.h = t;
            }
            t.o = e;
            t.h = this;
            this.o = t;
            this.i = r;
            if (r) {
                r.o = this;
            }
            return t;
        }
    }
    class jc extends ya {
        constructor(){
            super(...arguments);
            this.M = 1;
        }
        _() {
            let e = super._();
            this.O();
            e.O();
            return e;
        }
        g() {
            let e = super.g();
            this.O();
            e.O();
            return e;
        }
        O() {
            this.M = 1;
            if (this.i) {
                this.M += this.i.M;
            }
            if (this.h) {
                this.M += this.h.M;
            }
        }
    }
    class Gc {
        constructor(e = 0){
            this.iteratorType = e;
        }
        equals(e) {
            return this.T === e.T;
        }
    }
    class $c {
        constructor(){
            this.m = 0;
        }
        get length() {
            return this.m;
        }
        size() {
            return this.m;
        }
        empty() {
            return this.m === 0;
        }
    }
    class Vc extends $c {
    }
    function mr() {
        throw RangeError("Iterator access denied!");
    }
    class Yc extends Vc {
        constructor(e = function(r, i) {
            if (r < i) {
                return -1;
            }
            if (r > i) {
                return 1;
            }
            return 0;
        }, t = false){
            super();
            this.v = undefined;
            this.A = e;
            this.enableIndex = t;
            this.N = t ? jc : ya;
            this.C = new this.N;
        }
        R(e, t) {
            let r = this.C;
            while(e){
                let i = this.A(e.u, t);
                if (i < 0) {
                    e = e.h;
                } else if (i > 0) {
                    r = e;
                    e = e.i;
                } else {
                    return e;
                }
            }
            return r;
        }
        K(e, t) {
            let r = this.C;
            while(e){
                if (this.A(e.u, t) <= 0) {
                    e = e.h;
                } else {
                    r = e;
                    e = e.i;
                }
            }
            return r;
        }
        L(e, t) {
            let r = this.C;
            while(e){
                let i = this.A(e.u, t);
                if (i < 0) {
                    r = e;
                    e = e.h;
                } else if (i > 0) {
                    e = e.i;
                } else {
                    return e;
                }
            }
            return r;
        }
        k(e, t) {
            let r = this.C;
            while(e){
                if (this.A(e.u, t) < 0) {
                    r = e;
                    e = e.h;
                } else {
                    e = e.i;
                }
            }
            return r;
        }
        P(e) {
            while(true){
                let t = e.o;
                if (t === this.C) {
                    return;
                }
                if (e.p === 1) {
                    e.p = 0;
                    return;
                }
                if (e === t.i) {
                    let r = t.h;
                    if (r.p === 1) {
                        r.p = 0;
                        t.p = 1;
                        if (t === this.v) {
                            this.v = t._();
                        } else {
                            t._();
                        }
                    } else if (r.h && r.h.p === 1) {
                        r.p = t.p;
                        t.p = 0;
                        r.h.p = 0;
                        if (t === this.v) {
                            this.v = t._();
                        } else {
                            t._();
                        }
                        return;
                    } else if (r.i && r.i.p === 1) {
                        r.p = 1;
                        r.i.p = 0;
                        r.g();
                    } else {
                        r.p = 1;
                        e = t;
                    }
                } else {
                    let r = t.i;
                    if (r.p === 1) {
                        r.p = 0;
                        t.p = 1;
                        if (t === this.v) {
                            this.v = t.g();
                        } else {
                            t.g();
                        }
                    } else if (r.i && r.i.p === 1) {
                        r.p = t.p;
                        t.p = 0;
                        r.i.p = 0;
                        if (t === this.v) {
                            this.v = t.g();
                        } else {
                            t.g();
                        }
                        return;
                    } else if (r.h && r.h.p === 1) {
                        r.p = 1;
                        r.h.p = 0;
                        r._();
                    } else {
                        r.p = 1;
                        e = t;
                    }
                }
            }
        }
        S(e) {
            if (this.m === 1) {
                this.clear();
                return;
            }
            let t = e;
            while(t.i || t.h){
                if (t.h) {
                    t = t.h;
                    while(t.i){
                        t = t.i;
                    }
                } else {
                    t = t.i;
                }
                let i = e.u;
                e.u = t.u;
                t.u = i;
                let s = e.l;
                e.l = t.l;
                t.l = s;
                e = t;
            }
            if (this.C.i === t) {
                this.C.i = t.o;
            } else if (this.C.h === t) {
                this.C.h = t.o;
            }
            this.P(t);
            let r = t.o;
            if (t === r.i) {
                r.i = undefined;
            } else {
                r.h = undefined;
            }
            this.m -= 1;
            this.v.p = 0;
            if (this.enableIndex) {
                while(r !== this.C){
                    r.M -= 1;
                    r = r.o;
                }
            }
        }
        U(e) {
            let t = typeof e === "number" ? e : undefined;
            let r = typeof e === "function" ? e : undefined;
            let i = typeof e === "undefined" ? [] : undefined;
            let s = 0;
            let n = this.v;
            let a = [];
            while(a.length || n){
                if (n) {
                    a.push(n);
                    n = n.i;
                } else {
                    n = a.pop();
                    if (s === t) {
                        return n;
                    }
                    if (i) {
                        i.push(n);
                    }
                    if (r) {
                        r(n, s, this);
                    }
                    s += 1;
                    n = n.h;
                }
            }
            return i;
        }
        j(e) {
            while(true){
                let t = e.o;
                if (t.p === 0) {
                    return;
                }
                let r = t.o;
                if (t === r.i) {
                    let i = r.h;
                    if (i && i.p === 1) {
                        i.p = t.p = 0;
                        if (r === this.v) {
                            return;
                        }
                        r.p = 1;
                        e = r;
                        continue;
                    } else if (e === t.h) {
                        e.p = 0;
                        if (e.i) {
                            e.i.o = t;
                        }
                        if (e.h) {
                            e.h.o = r;
                        }
                        t.h = e.i;
                        r.i = e.h;
                        e.i = t;
                        e.h = r;
                        if (r === this.v) {
                            this.v = e;
                            this.C.o = e;
                        } else {
                            let s = r.o;
                            if (s.i === r) {
                                s.i = e;
                            } else {
                                s.h = e;
                            }
                        }
                        e.o = r.o;
                        t.o = e;
                        r.o = e;
                        r.p = 1;
                    } else {
                        t.p = 0;
                        if (r === this.v) {
                            this.v = r.g();
                        } else {
                            r.g();
                        }
                        r.p = 1;
                        return;
                    }
                } else {
                    let i = r.i;
                    if (i && i.p === 1) {
                        i.p = t.p = 0;
                        if (r === this.v) {
                            return;
                        }
                        r.p = 1;
                        e = r;
                        continue;
                    } else if (e === t.i) {
                        e.p = 0;
                        if (e.i) {
                            e.i.o = r;
                        }
                        if (e.h) {
                            e.h.o = t;
                        }
                        r.h = e.i;
                        t.i = e.h;
                        e.i = r;
                        e.h = t;
                        if (r === this.v) {
                            this.v = e;
                            this.C.o = e;
                        } else {
                            let s = r.o;
                            if (s.i === r) {
                                s.i = e;
                            } else {
                                s.h = e;
                            }
                        }
                        e.o = r.o;
                        t.o = e;
                        r.o = e;
                        r.p = 1;
                    } else {
                        t.p = 0;
                        if (r === this.v) {
                            this.v = r._();
                        } else {
                            r._();
                        }
                        r.p = 1;
                        return;
                    }
                }
                if (this.enableIndex) {
                    t.O();
                    r.O();
                    e.O();
                }
                return;
            }
        }
        q(e, t, r) {
            if (this.v === undefined) {
                this.m += 1;
                this.v = new this.N(e, t, 0);
                this.v.o = this.C;
                this.C.o = this.C.i = this.C.h = this.v;
                return this.m;
            }
            let i;
            let s = this.C.i;
            let n = this.A(s.u, e);
            if (n === 0) {
                s.l = t;
                return this.m;
            } else if (n > 0) {
                s.i = new this.N(e, t);
                s.i.o = s;
                i = s.i;
                this.C.i = i;
            } else {
                let a = this.C.h;
                let o = this.A(a.u, e);
                if (o === 0) {
                    a.l = t;
                    return this.m;
                } else if (o < 0) {
                    a.h = new this.N(e, t);
                    a.h.o = a;
                    i = a.h;
                    this.C.h = i;
                } else {
                    if (r !== undefined) {
                        let l = r.T;
                        if (l !== this.C) {
                            let c = this.A(l.u, e);
                            if (c === 0) {
                                l.l = t;
                                return this.m;
                            } else if (c > 0) {
                                let u = l.I();
                                let d = this.A(u.u, e);
                                if (d === 0) {
                                    u.l = t;
                                    return this.m;
                                } else if (d < 0) {
                                    i = new this.N(e, t);
                                    if (u.h === undefined) {
                                        u.h = i;
                                        i.o = u;
                                    } else {
                                        l.i = i;
                                        i.o = l;
                                    }
                                }
                            }
                        }
                    }
                    if (i === undefined) {
                        i = this.v;
                        while(true){
                            let l = this.A(i.u, e);
                            if (l > 0) {
                                if (i.i === undefined) {
                                    i.i = new this.N(e, t);
                                    i.i.o = i;
                                    i = i.i;
                                    break;
                                }
                                i = i.i;
                            } else if (l < 0) {
                                if (i.h === undefined) {
                                    i.h = new this.N(e, t);
                                    i.h.o = i;
                                    i = i.h;
                                    break;
                                }
                                i = i.h;
                            } else {
                                i.l = t;
                                return this.m;
                            }
                        }
                    }
                }
            }
            if (this.enableIndex) {
                let a = i.o;
                while(a !== this.C){
                    a.M += 1;
                    a = a.o;
                }
            }
            this.j(i);
            this.m += 1;
            return this.m;
        }
        H(e, t) {
            while(e){
                let r = this.A(e.u, t);
                if (r < 0) {
                    e = e.h;
                } else if (r > 0) {
                    e = e.i;
                } else {
                    return e;
                }
            }
            return e || this.C;
        }
        clear() {
            this.m = 0;
            this.v = undefined;
            this.C.o = undefined;
            this.C.i = this.C.h = undefined;
        }
        updateKeyByIterator({ T }, t) {
            if (T === this.C) {
                mr();
            }
            if (this.m === 1) {
                T.u = t;
                return true;
            }
            let i = T.B().u;
            if (T === this.C.i) {
                if (this.A(i, t) > 0) {
                    T.u = t;
                    return true;
                }
                return false;
            }
            let s = T.I().u;
            if (T === this.C.h) {
                if (this.A(s, t) < 0) {
                    T.u = t;
                    return true;
                }
                return false;
            }
            if (this.A(s, t) >= 0 || this.A(i, t) <= 0) {
                return false;
            }
            T.u = t;
            return true;
        }
        eraseElementByPos(e) {
            if (e < 0 || e > this.m - 1) {
                throw RangeError();
            }
            let t = this.U(e);
            this.S(t);
            return this.m;
        }
        eraseElementByKey(e) {
            if (this.m === 0) {
                return false;
            }
            let t = this.H(this.v, e);
            if (t === this.C) {
                return false;
            }
            this.S(t);
            return true;
        }
        eraseElementByIterator(e) {
            let t = e.T;
            if (t === this.C) {
                mr();
            }
            let r = t.h === undefined;
            if (e.iteratorType === 0) {
                if (r) {
                    e.next();
                }
            } else if (!r || t.i === undefined) {
                e.next();
            }
            this.S(t);
            return e;
        }
        getHeight() {
            if (this.m === 0) {
                return 0;
            }
            function e(t) {
                if (!t) {
                    return 0;
                }
                return Math.max(e(t.i), e(t.h)) + 1;
            }
            return e(this.v);
        }
    }
    class Kc extends Gc {
        constructor(e, t, r){
            super(r);
            this.T = e;
            this.C = t;
            if (this.iteratorType === 0) {
                this.pre = function() {
                    if (this.T === this.C.i) {
                        mr();
                    }
                    this.T = this.T.I();
                    return this;
                };
                this.next = function() {
                    if (this.T === this.C) {
                        mr();
                    }
                    this.T = this.T.B();
                    return this;
                };
            } else {
                this.pre = function() {
                    if (this.T === this.C.h) {
                        mr();
                    }
                    this.T = this.T.B();
                    return this;
                };
                this.next = function() {
                    if (this.T === this.C) {
                        mr();
                    }
                    this.T = this.T.I();
                    return this;
                };
            }
        }
        get index() {
            let e = this.T;
            let t = this.C.o;
            if (e === this.C) {
                if (t) {
                    return t.M - 1;
                }
                return 0;
            }
            let r = 0;
            if (e.i) {
                r += e.i.M;
            }
            while(e !== t){
                let i = e.o;
                if (e === i.h) {
                    r += 1;
                    if (i.i) {
                        r += i.i.M;
                    }
                }
                e = i;
            }
            return r;
        }
        isAccessible() {
            return this.T !== this.C;
        }
    }
    class it extends Kc {
        constructor(e, t, r, i){
            super(e, t, i);
            this.container = r;
        }
        get pointer() {
            if (this.T === this.C) {
                mr();
            }
            let e = this;
            return new Proxy([], {
                get (t, r) {
                    if (r === "0") {
                        return e.T.u;
                    } else if (r === "1") {
                        return e.T.l;
                    }
                    t[0] = e.T.u;
                    t[1] = e.T.l;
                    return t[r];
                },
                set (t, r, i) {
                    if (r !== "1") {
                        throw TypeError("prop must be 1");
                    }
                    e.T.l = i;
                    return true;
                }
            });
        }
        copy() {
            return new it(this.T, this.C, this.container, this.iteratorType);
        }
    }
    class Jc extends Yc {
        constructor(e = [], t, r){
            super(t, r);
            let i = this;
            e.forEach((s)=>{
                i.setElement(s[0], s[1]);
            });
        }
        begin() {
            return new it(this.C.i || this.C, this.C, this);
        }
        end() {
            return new it(this.C, this.C, this);
        }
        rBegin() {
            return new it(this.C.h || this.C, this.C, this, 1);
        }
        rEnd() {
            return new it(this.C, this.C, this, 1);
        }
        front() {
            if (this.m === 0) {
                return;
            }
            let e = this.C.i;
            return [
                e.u,
                e.l
            ];
        }
        back() {
            if (this.m === 0) {
                return;
            }
            let e = this.C.h;
            return [
                e.u,
                e.l
            ];
        }
        lowerBound(e) {
            let t = this.R(this.v, e);
            return new it(t, this.C, this);
        }
        upperBound(e) {
            let t = this.K(this.v, e);
            return new it(t, this.C, this);
        }
        reverseLowerBound(e) {
            let t = this.L(this.v, e);
            return new it(t, this.C, this);
        }
        reverseUpperBound(e) {
            let t = this.k(this.v, e);
            return new it(t, this.C, this);
        }
        forEach(e) {
            this.U(function(t, r, i) {
                e([
                    t.u,
                    t.l
                ], r, i);
            });
        }
        setElement(e, t, r) {
            return this.q(e, t, r);
        }
        getElementByPos(e) {
            if (e < 0 || e > this.m - 1) {
                throw RangeError();
            }
            let t = this.U(e);
            return [
                t.u,
                t.l
            ];
        }
        find(e) {
            let t = this.H(this.v, e);
            return new it(t, this.C, this);
        }
        getElementByKey(e) {
            return this.H(this.v, e).l;
        }
        union(e) {
            let t = this;
            e.forEach((r)=>{
                t.setElement(r[0], r[1]);
            });
            return this.m;
        }
        *[Symbol.iterator]() {
            let e = this.m;
            let t = this.U();
            for(let r = 0; r < e; ++r){
                let i = t[r];
                yield [
                    i.u,
                    i.l
                ];
            }
        }
    }
    Xc.OrderedMap = Jc;
});
const fs = C(function(eu) {
    Object.defineProperty(eu, "__esModule", {
        value: true
    });
    eu.registerAdminService = DS;
    eu.addAdminServicesToServer = LS;
    var Zc = [];
    function DS(getServiceDefinition, getHandlers) {
        Zc.push({
            getServiceDefinition,
            getHandlers
        });
    }
    function LS(e) {
        for (let { getServiceDefinition, getHandlers } of Zc){
            e.addService(getServiceDefinition(), getHandlers());
        }
    }
});
const lu = C(function(au) {
    Object.defineProperty(au, "__esModule", {
        value: true
    });
    au.ClientDuplexStreamImpl = au.ClientWritableStreamImpl = au.ClientReadableStreamImpl = au.ClientUnaryCallImpl = undefined;
    au.callErrorFromStatus = US;
    const tu = Le("events");
    const kr = Le("stream");
    var ht = k();
    function US(e, t) {
        let r = `${e.code} ${ht.Status[e.code]}: ${e.details}`;
        let stack = `${Error(r).stack}
for call at
${t}`;
        return Object.assign(Error(r), e, {
            stack
        });
    }
    class ru extends tu.EventEmitter {
        constructor(){
            super();
        }
        cancel() {
            this.call?.cancelWithStatus(ht.Status.CANCELLED, "Cancelled on client");
        }
        getPeer() {
            return this.call?.getPeer() ?? "unknown";
        }
        getAuthContext() {
            return this.call?.getAuthContext() ?? null;
        }
    }
    au.ClientUnaryCallImpl = ru;
    class iu extends kr.Readable {
        constructor(e){
            super({
                objectMode: true
            });
            this.deserialize = e;
        }
        cancel() {
            this.call?.cancelWithStatus(ht.Status.CANCELLED, "Cancelled on client");
        }
        getPeer() {
            return this.call?.getPeer() ?? "unknown";
        }
        getAuthContext() {
            return this.call?.getAuthContext() ?? null;
        }
        _read(e) {
            this.call?.startRead();
        }
    }
    au.ClientReadableStreamImpl = iu;
    class su extends kr.Writable {
        constructor(e){
            super({
                objectMode: true
            });
            this.serialize = e;
        }
        cancel() {
            this.call?.cancelWithStatus(ht.Status.CANCELLED, "Cancelled on client");
        }
        getPeer() {
            return this.call?.getPeer() ?? "unknown";
        }
        getAuthContext() {
            return this.call?.getAuthContext() ?? null;
        }
        _write(e, t, r) {
            let s = {
                callback: r
            };
            let n = Number(t);
            if (!Number.isNaN(n)) {
                s.flags = n;
            }
            this.call?.sendMessageWithContext(s, e);
        }
        _final(e) {
            this.call?.halfClose();
            e();
        }
    }
    au.ClientWritableStreamImpl = su;
    class nu extends kr.Duplex {
        constructor(e, t){
            super({
                objectMode: true
            });
            this.serialize = e;
            this.deserialize = t;
        }
        cancel() {
            this.call?.cancelWithStatus(ht.Status.CANCELLED, "Cancelled on client");
        }
        getPeer() {
            return this.call?.getPeer() ?? "unknown";
        }
        getAuthContext() {
            return this.call?.getAuthContext() ?? null;
        }
        _read(e) {
            this.call?.startRead();
        }
        _write(e, t, r) {
            let s = {
                callback: r
            };
            let n = Number(t);
            if (!Number.isNaN(n)) {
                s.flags = n;
            }
            this.call?.sendMessageWithContext(s, e);
        }
        _final(e) {
            this.call?.halfClose();
            e();
        }
    }
    au.ClientDuplexStreamImpl = nu;
});
const vr = C(function(du) {
    Object.defineProperty(du, "__esModule", {
        value: true
    });
    du.InterceptingListenerImpl = undefined;
    du.statusOrFromValue = jS;
    du.statusOrFromError = GS;
    du.isInterceptingListener = $S;
    var cu = ue();
    function jS(value) {
        return {
            ok: true,
            value
        };
    }
    function GS(e) {
        return {
            ok: false,
            error: {
                ...e,
                metadata: e.metadata ?? new cu.Metadata
            }
        };
    }
    function $S(e) {
        return e.onReceiveMetadata !== undefined && e.onReceiveMetadata.length === 1;
    }
    class uu {
        constructor(e, t){
            this.listener = e;
            this.nextListener = t;
            this.processingMetadata = false;
            this.hasPendingMessage = false;
            this.processingMessage = false;
            this.pendingStatus = null;
        }
        processPendingMessage() {
            if (this.hasPendingMessage) {
                this.nextListener.onReceiveMessage(this.pendingMessage);
                this.pendingMessage = null;
                this.hasPendingMessage = false;
            }
        }
        processPendingStatus() {
            if (this.pendingStatus) {
                this.nextListener.onReceiveStatus(this.pendingStatus);
            }
        }
        onReceiveMetadata(e) {
            this.processingMetadata = true;
            this.listener.onReceiveMetadata(e, (t)=>{
                this.processingMetadata = false;
                this.nextListener.onReceiveMetadata(t);
                this.processPendingMessage();
                this.processPendingStatus();
            });
        }
        onReceiveMessage(e) {
            this.processingMessage = true;
            this.listener.onReceiveMessage(e, (t)=>{
                this.processingMessage = false;
                if (this.processingMetadata) {
                    this.pendingMessage = t;
                    this.hasPendingMessage = true;
                } else {
                    this.nextListener.onReceiveMessage(t);
                    this.processPendingStatus();
                }
            });
        }
        onReceiveStatus(e) {
            this.listener.onReceiveStatus(e, (t)=>{
                if (this.processingMetadata || this.processingMessage) {
                    this.pendingStatus = t;
                } else {
                    this.nextListener.onReceiveStatus(t);
                }
            });
        }
    }
    du.InterceptingListenerImpl = uu;
});
const Ca = C(function(_u) {
    Object.defineProperty(_u, "__esModule", {
        value: true
    });
    _u.InterceptingCall = _u.RequesterBuilder = _u.ListenerBuilder = _u.InterceptorConfigurationError = undefined;
    _u.getInterceptingCall = QS;
    const fu = ue();
    const ps = vr();
    const gs = k();
    const ms = Qi();
    class Oi extends Error {
        constructor(e){
            super(e);
            this.name = "InterceptorConfigurationError";
            Error.captureStackTrace(this, Oi);
        }
    }
    _u.InterceptorConfigurationError = Oi;
    class pu {
        constructor(){
            this.metadata = undefined;
            this.message = undefined;
            this.status = undefined;
        }
        withOnReceiveMetadata(e) {
            this.metadata = e;
            return this;
        }
        withOnReceiveMessage(e) {
            this.message = e;
            return this;
        }
        withOnReceiveStatus(e) {
            this.status = e;
            return this;
        }
        build() {
            return {
                onReceiveMetadata: this.metadata,
                onReceiveMessage: this.message,
                onReceiveStatus: this.status
            };
        }
    }
    _u.ListenerBuilder = pu;
    class gu {
        constructor(){
            this.start = undefined;
            this.message = undefined;
            this.halfClose = undefined;
            this.cancel = undefined;
        }
        withStart(e) {
            this.start = e;
            return this;
        }
        withSendMessage(e) {
            this.message = e;
            return this;
        }
        withHalfClose(e) {
            this.halfClose = e;
            return this;
        }
        withCancel(e) {
            this.cancel = e;
            return this;
        }
        build() {
            return {
                start: this.start,
                sendMessage: this.message,
                halfClose: this.halfClose,
                cancel: this.cancel
            };
        }
    }
    _u.RequesterBuilder = gu;
    const _a = {
        onReceiveMetadata: (e, t)=>{
            t(e);
        },
        onReceiveMessage: (e, t)=>{
            t(e);
        },
        onReceiveStatus: (e, t)=>{
            t(e);
        }
    };
    const bi = {
        start: (e, t, r)=>{
            r(e, t);
        },
        sendMessage: (e, t)=>{
            t(e);
        },
        halfClose: (e)=>{
            e();
        },
        cancel: (e)=>{
            e();
        }
    };
    class mu {
        constructor(e, t){
            this.nextCall = e;
            this.processingMetadata = false;
            this.pendingMessageContext = null;
            this.processingMessage = false;
            this.pendingHalfClose = false;
            if (t) {
                this.requester = {
                    start: t.start ?? bi.start,
                    sendMessage: t.sendMessage ?? bi.sendMessage,
                    halfClose: t.halfClose ?? bi.halfClose,
                    cancel: t.cancel ?? bi.cancel
                };
            } else {
                this.requester = bi;
            }
        }
        cancelWithStatus(e, t) {
            this.requester.cancel(()=>{
                this.nextCall.cancelWithStatus(e, t);
            });
        }
        getPeer() {
            return this.nextCall.getPeer();
        }
        processPendingMessage() {
            if (this.pendingMessageContext) {
                this.nextCall.sendMessageWithContext(this.pendingMessageContext, this.pendingMessage);
                this.pendingMessageContext = null;
                this.pendingMessage = null;
            }
        }
        processPendingHalfClose() {
            if (this.pendingHalfClose) {
                this.nextCall.halfClose();
            }
        }
        start(e, t) {
            let l = {
                onReceiveMetadata: t?.onReceiveMetadata?.bind(t) ?? ((c)=>{}),
                onReceiveMessage: t?.onReceiveMessage?.bind(t) ?? ((c)=>{}),
                onReceiveStatus: t?.onReceiveStatus?.bind(t) ?? ((c)=>{})
            };
            this.processingMetadata = true;
            this.requester.start(e, l, (c, u)=>{
                this.processingMetadata = false;
                let f;
                if (ps.isInterceptingListener(u)) {
                    f = u;
                } else {
                    let y = {
                        onReceiveMetadata: u.onReceiveMetadata ?? _a.onReceiveMetadata,
                        onReceiveMessage: u.onReceiveMessage ?? _a.onReceiveMessage,
                        onReceiveStatus: u.onReceiveStatus ?? _a.onReceiveStatus
                    };
                    f = new ps.InterceptingListenerImpl(y, l);
                }
                this.nextCall.start(c, f);
                this.processPendingMessage();
                this.processPendingHalfClose();
            });
        }
        sendMessageWithContext(e, t) {
            this.processingMessage = true;
            this.requester.sendMessage(t, (r)=>{
                this.processingMessage = false;
                if (this.processingMetadata) {
                    this.pendingMessageContext = e;
                    this.pendingMessage = t;
                } else {
                    this.nextCall.sendMessageWithContext(e, r);
                    this.processPendingHalfClose();
                }
            });
        }
        sendMessage(e) {
            this.sendMessageWithContext({}, e);
        }
        startRead() {
            this.nextCall.startRead();
        }
        halfClose() {
            this.requester.halfClose(()=>{
                if (this.processingMetadata || this.processingMessage) {
                    this.pendingHalfClose = true;
                } else {
                    this.nextCall.halfClose();
                }
            });
        }
        getAuthContext() {
            return this.nextCall.getAuthContext();
        }
    }
    _u.InterceptingCall = mu;
    function JS(e, path, r) {
        let n = r.deadline ?? Infinity;
        let r_host = r.host;
        let o = r.parent ?? null;
        let { propagate_flags, credentials } = r;
        let u = e.createCall(path, n, r_host, o, propagate_flags);
        if (credentials) {
            u.setCredentials(credentials);
        }
        return u;
    }
    class Sa {
        constructor(e, t){
            this.call = e;
            this.methodDefinition = t;
        }
        cancelWithStatus(e, t) {
            this.call.cancelWithStatus(e, t);
        }
        getPeer() {
            return this.call.getPeer();
        }
        sendMessageWithContext(e, t) {
            let r;
            try {
                r = this.methodDefinition.requestSerialize(t);
            } catch (error) {
                this.call.cancelWithStatus(gs.Status.INTERNAL, `Request message serialization failure: ${ms.getErrorMessage(error)}`);
                return;
            }
            this.call.sendMessageWithContext(e, r);
        }
        sendMessage(e) {
            this.sendMessageWithContext({}, e);
        }
        start(e, t) {
            let r = null;
            this.call.start(e, {
                onReceiveMetadata: (i)=>{
                    t?.onReceiveMetadata?.(i);
                },
                onReceiveMessage: (i)=>{
                    let n;
                    try {
                        n = this.methodDefinition.responseDeserialize(i);
                    } catch (error) {
                        r = {
                            code: gs.Status.INTERNAL,
                            details: `Response message parsing error: ${ms.getErrorMessage(error)}`,
                            metadata: new fu.Metadata
                        };
                        this.call.cancelWithStatus(r.code, r.details);
                        return;
                    }
                    t?.onReceiveMessage?.(n);
                },
                onReceiveStatus: (i)=>{
                    if (r) {
                        t?.onReceiveStatus?.(r);
                    } else {
                        t?.onReceiveStatus?.(i);
                    }
                }
            });
        }
        startRead() {
            this.call.startRead();
        }
        halfClose() {
            this.call.halfClose();
        }
        getAuthContext() {
            return this.call.getAuthContext();
        }
    }
    class vu extends Sa {
        constructor(e, t){
            super(e, t);
        }
        start(e, t) {
            let s = false;
            let n = {
                onReceiveMetadata: t?.onReceiveMetadata?.bind(t) ?? ((a)=>{}),
                onReceiveMessage: (a)=>{
                    s = true;
                    t?.onReceiveMessage?.(a);
                },
                onReceiveStatus: (a)=>{
                    if (!s) {
                        t?.onReceiveMessage?.(null);
                    }
                    t?.onReceiveStatus?.(a);
                }
            };
            super.start(e, n);
            this.call.startRead();
        }
    }
    class yu extends Sa {
    }
    function XS(e, t, method_definition) {
        let i = JS(e, method_definition.path, t);
        if (method_definition.responseStream) {
            return new yu(i, method_definition);
        } else {
            return new vu(i, method_definition);
        }
    }
    function QS(e, method_definition, r, i) {
        if (e.clientInterceptors.length > 0 && e.clientInterceptorProviders.length > 0) {
            throw new Oi("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
        }
        if (e.callInterceptors.length > 0 && e.callInterceptorProviders.length > 0) {
            throw new Oi("Both interceptors and interceptor_providers were passed as call options. Only one of these is allowed.");
        }
        let s = [];
        if (e.callInterceptors.length > 0 || e.callInterceptorProviders.length > 0) {
            s = [].concat(e.callInterceptors, e.callInterceptorProviders.map((o)=>o(method_definition))).filter((o)=>o);
        } else {
            s = [].concat(e.clientInterceptors, e.clientInterceptorProviders.map((o)=>o(method_definition))).filter((o)=>o);
        }
        let n = {
            ...r,
            method_definition
        };
        return s.reduceRight((acc, item)=>(c)=>item(c, acc), (o)=>XS(i, o, method_definition))(n);
    }
});
const Ta = C(function(Ru) {
    Object.defineProperty(Ru, "__esModule", {
        value: true
    });
    Ru.Client = undefined;
    const ie = lu();
    const Cu = Ra();
    const Eu = Ae();
    const Se = k();
    const ze = ue();
    const Vt = Ca();
    const st = Symbol();
    const Dr = Symbol();
    const Lr = Symbol();
    const Dt = Symbol();
    function Ea(e) {
        return typeof e === "function";
    }
    function Fr(e) {
        return e.stack?.split(`
`).slice(1).join(`
`) || "no stack trace available";
    }
    class Tu {
        constructor(e, t, r = {}){
            r = {
                ...r
            };
            this[Dr] = r.interceptors ?? [];
            delete r.interceptors;
            this[Lr] = r.interceptor_providers ?? [];
            delete r.interceptor_providers;
            if (this[Dr].length > 0 && this[Lr].length > 0) {
                throw Error("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
            }
            this[Dt] = r.callInvocationTransformer;
            delete r.callInvocationTransformer;
            if (r.channelOverride) {
                this[st] = r.channelOverride;
            } else if (r.channelFactoryOverride) {
                let n = r.channelFactoryOverride;
                delete r.channelFactoryOverride;
                this[st] = n(e, t, r);
            } else {
                this[st] = new Cu.ChannelImplementation(e, t, r);
            }
        }
        close() {
            this[st].close();
        }
        getChannel() {
            return this[st];
        }
        waitForReady(e, t) {
            let r = (i)=>{
                if (i) {
                    t(Error("Failed to connect before the deadline"));
                    return;
                }
                let s;
                try {
                    s = this[st].getConnectivityState(true);
                } catch (n) {
                    t(Error("The channel has been closed"));
                    return;
                }
                if (s === Eu.ConnectivityState.READY) {
                    t();
                } else {
                    try {
                        this[st].watchConnectivityState(s, e, r);
                    } catch (n) {
                        t(Error("The channel has been closed"));
                    }
                }
            };
            setImmediate(r);
        }
        checkOptionalUnaryResponseArguments(e, t, r) {
            if (Ea(e)) {
                return {
                    metadata: new ze.Metadata,
                    options: {},
                    callback: e
                };
            } else if (Ea(t)) {
                if (e instanceof ze.Metadata) {
                    return {
                        metadata: e,
                        options: {},
                        callback: t
                    };
                } else {
                    return {
                        metadata: new ze.Metadata,
                        options: e,
                        callback: t
                    };
                }
            } else {
                if (!(e instanceof ze.Metadata && t instanceof Object && Ea(r))) {
                    throw Error("Incorrect arguments passed");
                }
                return {
                    metadata: e,
                    options: t,
                    callback: r
                };
            }
        }
        makeUnaryRequest(e, t, r, i, s, n, a) {
            let c = this.checkOptionalUnaryResponseArguments(s, n, a);
            let u = {
                path: e,
                requestStream: false,
                responseStream: false,
                requestSerialize: t,
                responseDeserialize: r
            };
            let d = {
                argument: i,
                metadata: c.metadata,
                call: new ie.ClientUnaryCallImpl,
                channel: this[st],
                methodDefinition: u,
                callOptions: c.options,
                callback: c.callback
            };
            if (this[Dt]) {
                d = this[Dt](d);
            }
            let d_call = d.call;
            let m = {
                clientInterceptors: this[Dr],
                clientInterceptorProviders: this[Lr],
                callInterceptors: d.callOptions.interceptors ?? [],
                callInterceptorProviders: d.callOptions.interceptor_providers ?? []
            };
            let f = Vt.getInterceptingCall(m, d.methodDefinition, d.callOptions, d.channel);
            d_call.call = f;
            let y = null;
            let E = false;
            let T = Error();
            f.start(d.metadata, {
                onReceiveMetadata: (P)=>{
                    d_call.emit("metadata", P);
                },
                onReceiveMessage (P) {
                    if (y !== null) {
                        f.cancelWithStatus(Se.Status.UNIMPLEMENTED, "Too many responses received");
                    }
                    y = P;
                },
                onReceiveStatus (P) {
                    if (E) {
                        return;
                    }
                    E = true;
                    if (P.code === Se.Status.OK) {
                        if (y === null) {
                            let te = Fr(T);
                            d.callback(ie.callErrorFromStatus({
                                code: Se.Status.UNIMPLEMENTED,
                                details: "No message received",
                                metadata: P.metadata
                            }, te));
                        } else {
                            d.callback(null, y);
                        }
                    } else {
                        let te = Fr(T);
                        d.callback(ie.callErrorFromStatus(P, te));
                    }
                    T = null;
                    d_call.emit("status", P);
                }
            });
            f.sendMessage(i);
            f.halfClose();
            return d_call;
        }
        makeClientStreamRequest(e, t, r, i, s, n) {
            let l = this.checkOptionalUnaryResponseArguments(i, s, n);
            let c = {
                path: e,
                requestStream: true,
                responseStream: false,
                requestSerialize: t,
                responseDeserialize: r
            };
            let u = {
                metadata: l.metadata,
                call: new ie.ClientWritableStreamImpl(t),
                channel: this[st],
                methodDefinition: c,
                callOptions: l.options,
                callback: l.callback
            };
            if (this[Dt]) {
                u = this[Dt](u);
            }
            let u_call = u.call;
            let h = {
                clientInterceptors: this[Dr],
                clientInterceptorProviders: this[Lr],
                callInterceptors: u.callOptions.interceptors ?? [],
                callInterceptorProviders: u.callOptions.interceptor_providers ?? []
            };
            let m = Vt.getInterceptingCall(h, u.methodDefinition, u.callOptions, u.channel);
            u_call.call = m;
            let f = null;
            let y = false;
            let E = Error();
            m.start(u.metadata, {
                onReceiveMetadata: (T)=>{
                    u_call.emit("metadata", T);
                },
                onReceiveMessage (T) {
                    if (f !== null) {
                        m.cancelWithStatus(Se.Status.UNIMPLEMENTED, "Too many responses received");
                    }
                    f = T;
                    m.startRead();
                },
                onReceiveStatus (T) {
                    if (y) {
                        return;
                    }
                    y = true;
                    if (T.code === Se.Status.OK) {
                        if (f === null) {
                            let P = Fr(E);
                            u.callback(ie.callErrorFromStatus({
                                code: Se.Status.UNIMPLEMENTED,
                                details: "No message received",
                                metadata: T.metadata
                            }, P));
                        } else {
                            u.callback(null, f);
                        }
                    } else {
                        let P = Fr(E);
                        u.callback(ie.callErrorFromStatus(T, P));
                    }
                    E = null;
                    u_call.emit("status", T);
                }
            });
            return u_call;
        }
        checkMetadataAndOptions(e, t) {
            let r;
            let options;
            if (e instanceof ze.Metadata) {
                r = e;
                if (t) {
                    options = t;
                } else {
                    options = {};
                }
            } else {
                if (e) {
                    options = e;
                } else {
                    options = {};
                }
                r = new ze.Metadata;
            }
            return {
                metadata: r,
                options
            };
        }
        makeServerStreamRequest(e, t, r, i, s, n) {
            let l = this.checkMetadataAndOptions(s, n);
            let c = {
                path: e,
                requestStream: false,
                responseStream: true,
                requestSerialize: t,
                responseDeserialize: r
            };
            let u = {
                argument: i,
                metadata: l.metadata,
                call: new ie.ClientReadableStreamImpl(r),
                channel: this[st],
                methodDefinition: c,
                callOptions: l.options
            };
            if (this[Dt]) {
                u = this[Dt](u);
            }
            let u_call = u.call;
            let h = {
                clientInterceptors: this[Dr],
                clientInterceptorProviders: this[Lr],
                callInterceptors: u.callOptions.interceptors ?? [],
                callInterceptorProviders: u.callOptions.interceptor_providers ?? []
            };
            let m = Vt.getInterceptingCall(h, u.methodDefinition, u.callOptions, u.channel);
            u_call.call = m;
            let f = false;
            let y = Error();
            m.start(u.metadata, {
                onReceiveMetadata (E) {
                    u_call.emit("metadata", E);
                },
                onReceiveMessage (E) {
                    u_call.push(E);
                },
                onReceiveStatus (E) {
                    if (f) {
                        return;
                    }
                    f = true;
                    u_call.push(null);
                    if (E.code !== Se.Status.OK) {
                        let T = Fr(y);
                        u_call.emit("error", ie.callErrorFromStatus(E, T));
                    }
                    y = null;
                    u_call.emit("status", E);
                }
            });
            m.sendMessage(i);
            m.halfClose();
            return u_call;
        }
        makeBidiStreamRequest(e, t, r, i, s) {
            let o = this.checkMetadataAndOptions(i, s);
            let l = {
                path: e,
                requestStream: true,
                responseStream: true,
                requestSerialize: t,
                responseDeserialize: r
            };
            let c = {
                metadata: o.metadata,
                call: new ie.ClientDuplexStreamImpl(t, r),
                channel: this[st],
                methodDefinition: l,
                callOptions: o.options
            };
            if (this[Dt]) {
                c = this[Dt](c);
            }
            let c_call = c.call;
            let d = {
                clientInterceptors: this[Dr],
                clientInterceptorProviders: this[Lr],
                callInterceptors: c.callOptions.interceptors ?? [],
                callInterceptorProviders: c.callOptions.interceptor_providers ?? []
            };
            let h = Vt.getInterceptingCall(d, c.methodDefinition, c.callOptions, c.channel);
            c_call.call = h;
            let m = false;
            let f = Error();
            h.start(c.metadata, {
                onReceiveMetadata (y) {
                    c_call.emit("metadata", y);
                },
                onReceiveMessage (y) {
                    c_call.push(y);
                },
                onReceiveStatus (y) {
                    if (m) {
                        return;
                    }
                    m = true;
                    c_call.push(null);
                    if (y.code !== Se.Status.OK) {
                        let E = Fr(f);
                        c_call.emit("error", ie.callErrorFromStatus(y, E));
                    }
                    f = null;
                    c_call.emit("status", y);
                }
            });
            return c_call;
        }
    }
    Ru.Client = Tu;
});
const vs = C(function(wu) {
    Object.defineProperty(wu, "__esModule", {
        value: true
    });
    wu.makeClientConstructor = Ou;
    wu.loadPackageDefinition = aC;
    var ft = Ta();
    var iC = {
        unary: ft.Client.prototype.makeUnaryRequest,
        server_stream: ft.Client.prototype.makeServerStreamRequest,
        client_stream: ft.Client.prototype.makeClientStreamRequest,
        bidi: ft.Client.prototype.makeBidiStreamRequest
    };
    function ba(e) {
        return [
            "__proto__",
            "prototype",
            "constructor"
        ].includes(e);
    }
    function Ou(e, t, r) {
        if (!r) {
            r = {};
        }
        class i extends ft.Client {
        }
        Object.keys(e).forEach((s)=>{
            if (ba(s)) {
                return;
            }
            let n = e[s];
            let a;
            if (typeof s === "string" && s.charAt(0) === "$") {
                throw Error("Method names cannot start with $");
            }
            if (n.requestStream) {
                if (n.responseStream) {
                    a = "bidi";
                } else {
                    a = "client_stream";
                }
            } else if (n.responseStream) {
                a = "server_stream";
            } else {
                a = "unary";
            }
            let { requestSerialize, responseDeserialize } = n;
            let c = sC(iC[a], n.path, requestSerialize, responseDeserialize);
            i.prototype[s] = c;
            Object.assign(i.prototype[s], n);
            if (n.originalName && !ba(n.originalName)) {
                i.prototype[n.originalName] = i.prototype[s];
            }
        });
        i.service = e;
        i.serviceName = t;
        return i;
    }
    function sC(e, path, requestSerialize, responseDeserialize) {
        return function(...s) {
            return e.call(this, path, requestSerialize, responseDeserialize, ...s);
        };
    }
    function nC(e) {
        return "format" in e;
    }
    function aC(e) {
        let t = {};
        for(let r in e){
            if (Object.prototype.hasOwnProperty.call(e, r)) {
                let i = e[r];
                let s = r.split(".");
                if (s.some((o)=>ba(o))) {
                    continue;
                }
                let n = s[s.length - 1];
                let a = t;
                for (let o of s.slice(0, -1)){
                    if (!a[o]) {
                        a[o] = {};
                    }
                    a = a[o];
                }
                if (nC(i)) {
                    a[n] = i;
                } else {
                    a[n] = Ou(i, n, {});
                }
            }
        }
        return t;
    }
});
const Qu = C(function(Qw, Xu) {
    const cC = Infinity;
    const uC = "[object Symbol]";
    const dC = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    const hC = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    const _s = "\\ud800-\\udfff";
    const Du = "\\u0300-\\u036f\\ufe20-\\ufe23";
    const Lu = "\\u20d0-\\u20f0";
    const Fu = "\\u2700-\\u27bf";
    const qu = "a-z\\xdf-\\xf6\\xf8-\\xff";
    const fC = "\\xac\\xb1\\xd7\\xf7";
    const pC = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
    const gC = "\\u2000-\\u206f";
    const mC = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
    const Uu = "A-Z\\xc0-\\xd6\\xd8-\\xde";
    const Bu = "\\ufe0e\\ufe0f";
    const zu = fC + pC + gC + mC;
    const wa = "['’]";
    const vC = `[${_s}]`;
    const Au = `[${zu}]`;
    const ys = `[${Du}${Lu}]`;
    const Hu = "\\d+";
    const yC = `[${Fu}]`;
    const Wu = `[${qu}]`;
    const ju = `[^${_s}${zu}${Hu}${Fu}${qu}${Uu}]`;
    const Oa = "\\ud83c[\\udffb-\\udfff]";
    const _C = `(?:${ys}|${Oa})`;
    const Gu = `[^${_s}]`;
    const Aa = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    const Pa = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    const qr = `[${Uu}]`;
    const $u = "\\u200d";
    const Pu = `(?:${Wu}|${ju})`;
    const SC = `(?:${qr}|${ju})`;
    const Nu = `(?:${wa}(?:d|ll|m|re|s|t|ve))?`;
    const Mu = `(?:${wa}(?:D|LL|M|RE|S|T|VE))?`;
    const Vu = `${_C}?`;
    const Yu = `[${Bu}]?`;
    const CC = `(?:${$u}(?:${[
        Gu,
        Aa,
        Pa
    ].join("|")})${Yu}${Vu})*`;
    const Ku = Yu + Vu + CC;
    const EC = `(?:${[
        yC,
        Aa,
        Pa
    ].join("|")})${Ku}`;
    const TC = `(?:${[
        `${Gu + ys}?`,
        ys,
        Aa,
        Pa,
        vC
    ].join("|")})`;
    const RC = RegExp(wa, "g");
    const bC = RegExp(ys, "g");
    const OC = RegExp(`${Oa}(?=${Oa})|${TC}${Ku}`, "g");
    const wC = RegExp([
        `${qr}?${Wu}+${Nu}(?=${[
            Au,
            qr,
            "$"
        ].join("|")})`,
        `${SC}+${Mu}(?=${[
            Au,
            qr + Pu,
            "$"
        ].join("|")})`,
        `${qr}?${Pu}+${Nu}`,
        `${qr}+${Mu}`,
        Hu,
        EC
    ].join("|"), "g");
    const AC = RegExp(`[${$u}${_s}${Du}${Lu}${Bu}]`);
    const PC = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    const NC = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "ss"
    };
    const MC = typeof global === "object" && global && global.Object === Object && global;
    const IC = typeof self === "object" && self && self.Object === Object && self;
    const xC = MC || IC || Function("return this")();
    function kC(e, t, r, i) {
        let s = -1;
        const n = e ? e.length : 0;
        if (i && n) {
            r = e[++s];
        }
        while(++s < n){
            r = t(r, e[s], s, e);
        }
        return r;
    }
    function DC(e) {
        return e.split("");
    }
    function LC(e) {
        return e.match(dC) || [];
    }
    function FC(e) {
        return function(t) {
            return e?.[t];
        };
    }
    const qC = FC(NC);
    function Ju(e) {
        return AC.test(e);
    }
    function UC(e) {
        return PC.test(e);
    }
    function BC(e) {
        if (Ju(e)) {
            return zC(e);
        }
        return DC(e);
    }
    function zC(e) {
        return e.match(OC) || [];
    }
    function HC(e) {
        return e.match(wC) || [];
    }
    const toString = Object.prototype.toString;
    const xC_Symbol = xC.Symbol;
    const xu = xC_Symbol ? xC_Symbol.prototype : undefined;
    const ku = xu ? xu.toString : undefined;
    function GC(e, t, r) {
        let i = -1;
        let e_length = e.length;
        if (t < 0) {
            t = -t > e_length ? 0 : e_length + t;
        }
        r = r > e_length ? e_length : r;
        if (r < 0) {
            r += e_length;
        }
        e_length = t > r ? 0 : r - t >>> 0;
        t >>>= 0;
        const n = Array(e_length);
        while(++i < e_length){
            n[i] = e[i + t];
        }
        return n;
    }
    function $C(e) {
        if (typeof e === "string") {
            return e;
        }
        if (XC(e)) {
            if (ku) {
                return ku.call(e);
            }
            return "";
        }
        const t = `${e}`;
        if (t == "0" && 1 / e == -cC) {
            return "-0";
        }
        return t;
    }
    function VC(e, t, r) {
        const e_length = e.length;
        r = r === undefined ? e_length : r;
        if (!t && r >= e_length) {
            return e;
        }
        return GC(e, t, r);
    }
    function YC(e) {
        return function(t) {
            t = Ss(t);
            const r = Ju(t) ? BC(t) : undefined;
            const i = r ? r[0] : t.charAt(0);
            const s = r ? VC(r, 1).join("") : t.slice(1);
            return i[e]() + s;
        };
    }
    function KC(e) {
        return function(t) {
            return kC(rE(eE(t).replace(RC, "")), e, "");
        };
    }
    function JC(e) {
        return !!e && typeof e === "object";
    }
    function XC(e) {
        return typeof e === "symbol" || JC(e) && toString.call(e) == uC;
    }
    function Ss(e) {
        if (e == null) {
            return "";
        }
        return $C(e);
    }
    const QC = KC(function(e, t, r) {
        t = t.toLowerCase();
        return e + (r ? ZC(t) : t);
    });
    function ZC(e) {
        return tE(Ss(e).toLowerCase());
    }
    function eE(e) {
        e = Ss(e);
        return e && e.replace(hC, qC).replace(bC, "");
    }
    var tE = YC("toUpperCase");
    function rE(e, t, r) {
        e = Ss(e);
        t = r ? undefined : t;
        if (t === undefined) {
            if (UC(e)) {
                return HC(e);
            }
            return LC(e);
        }
        return e.match(t) || [];
    }
    Xu.exports = QC;
});
const ed = C(function(Zw, Zu) {
    Zu.exports = Na;
    var iE = /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/;
    function Na(e, t) {
        if (typeof e === "string") {
            t = e;
            e = undefined;
        }
        const r = [];
        function i(n) {
            if (typeof n !== "string") {
                let a = s();
                if (Na.verbose) {
                    console.log(`codegen: ${a}`);
                }
                a = `return ${a}`;
                if (n) {
                    const o = Object.keys(n);
                    const l = Array(o.length + 1);
                    const c = Array(o.length);
                    let u = 0;
                    while(u < o.length){
                        l[u] = o[u];
                        c[u] = n[o[u++]];
                    }
                    l[u] = a;
                    return Function(...l)(...c);
                }
                return Function(a)();
            }
            const d = Array(arguments.length - 1);
            let h = 0;
            while(h < d.length){
                d[h] = arguments[++h];
            }
            h = 0;
            n = n.replace(/%([%dfijs])/g, (f, y)=>{
                const E = d[h++];
                switch(y){
                    case "d":
                    case "f":
                        return String(Number(E));
                    case "i":
                        return String(Math.floor(E));
                    case "j":
                        return JSON.stringify(E);
                    case "s":
                        return String(E);
                }
                return "%";
            });
            if (h !== d.length) {
                throw Error("parameter count mismatch");
            }
            r.push(n);
            return i;
        }
        function s(n) {
            return `function ${sE(n || t)}(${e && e.join(",") || ""}${`){
  `}${r.join(`
  `)}${`
}`}`;
        }
        i.toString = s;
        return i;
    }
    Na.verbose = false;
    function sE(e) {
        if (!e) {
            return "";
        }
        e = String(e).replace(/[^\w$]/g, "");
        if (!e) {
            return "";
        }
        if (/^\d/.test(e)) {
            e = `_${e}`;
        }
        if (iE.test(e)) {
            return `${e}_`;
        }
        return e;
    }
});
const td = C(function(exports, module) {
    module.exports = inquire;
    function inquire(moduleName) {
        try {
            const mod = moduleName === "long" ? OXn() : moduleName === "buffer" ? Le("buffer") : moduleName === "fs" ? Le("fs") : eval("quire".replace(/^/, "re"))(moduleName);
            if (mod && (mod.length || Object.keys(mod).length)) {
                return mod;
            }
        } catch (e) {}
        return null;
    }
});
const id = C(function(eA, rd) {
    rd.exports = wi;
    var nE = sWr();
    const aE = td();
    var Ma = aE("fs");
    function wi(e, t, r) {
        if (typeof t === "function") {
            r = t;
            t = {};
        } else if (!t) {
            t = {};
        }
        if (!r) {
            return nE(wi, this, e, t);
        }
        if (!t.xhr && Ma && Ma.readFile) {
            return Ma.readFile(e, function(s, n) {
                if (s && typeof XMLHttpRequest !== "undefined") {
                    return wi.xhr(e, t, r);
                }
                if (s) {
                    return r(s);
                }
                return r(null, t.binary ? n : n.toString("utf8"));
            });
        }
        return wi.xhr(e, t, r);
    }
    wi.xhr = function(t, r, i) {
        const s = new XMLHttpRequest;
        s.onreadystatechange = function() {
            if (s.readyState !== 4) {
                return;
            }
            if (s.status !== 0 && s.status !== 200) {
                return i(Error(`status ${s.status}`));
            }
            if (r.binary) {
                let a = s.response;
                if (!a) {
                    a = [];
                    for(let o = 0; o < s.responseText.length; ++o){
                        a.push(s.responseText.charCodeAt(o) & 255);
                    }
                }
                return i(null, typeof Uint8Array !== "undefined" ? new Uint8Array(a) : a);
            }
            return i(null, s.responseText);
        };
        if (r.binary) {
            if ("overrideMimeType" in s) {
                s.overrideMimeType("text/plain; charset=x-user-defined");
            }
            s.responseType = "arraybuffer";
        }
        s.open("GET", t);
        s.send();
    };
});
const ad = C(function(nd) {
    const xa = nd;
    const sd = xa.isAbsolute = function(t) {
        return /^(?:\/|\w+:)/.test(t);
    };
    const Ia = xa.normalize = function(t) {
        t = t.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
        const r = t.split("/");
        const i = sd(t);
        let s = "";
        if (i) {
            s = `${r.shift()}/`;
        }
        for(let n = 0; n < r.length;){
            if (r[n] === "..") {
                if (n > 0 && r[n - 1] !== "..") {
                    r.splice(--n, 2);
                } else if (i) {
                    r.splice(n, 1);
                } else {
                    ++n;
                }
            } else if (r[n] === ".") {
                r.splice(n, 1);
            } else {
                ++n;
            }
        }
        return s + r.join("/");
    };
    xa.resolve = function(t, r, i) {
        if (!i) {
            r = Ia(r);
        }
        if (sd(r)) {
            return r;
        }
        if (!i) {
            t = Ia(t);
        }
        if ((t = t.replace(/(?:\/|^)[^/]+$/, "")).length) {
            return Ia(`${t}/${r}`);
        }
        return r;
    };
});
const ld = C(function(od) {
    const Cs = od;
    Cs.numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
    Cs.typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
    Cs.reservedRe = /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/;
    Cs.unsafePropertyRe = /^(?:__proto__|prototype|constructor)$/;
});
const zr = C(function(iA, dd) {
    var Es = Kt();
    const ka = Yt();
    const Br = de();
    const oE = Sr();
    let yr;
    let Ur;
    let _r;
    function cd(e, t) {
        if (!(e && e.length)) {
            return;
        }
        const r = {};
        for(let i = 0; i < e.length; ++i){
            r[e[i].name] = e[i].toJSON(t);
        }
        return r;
    }
    class B extends Es {
        constructor(e, t){
            super(e, t);
            this.nested = undefined;
            this._nestedArray = null;
            this._lookupCache = Object.create(null);
            this._needsRecursiveFeatureResolution = true;
            this._needsRecursiveResolve = true;
        }
        toJSON(t) {
            return Br.toObject([
                "options",
                this.options,
                "nested",
                cd(this.nestedArray, t)
            ]);
        }
        addJSON(t, r) {
            r = Br.checkDepth(r);
            const i = this;
            if (t) {
                let a;
                for(let s = Object.keys(t), n = 0; n < s.length; ++n){
                    a = t[s[n]];
                    i.add((a.fields !== undefined ? yr.fromJSON : a.values !== undefined ? _r.fromJSON : a.methods !== undefined ? Ur.fromJSON : a.id !== undefined ? ka.fromJSON : B.fromJSON)(s[n], a, r + 1));
                }
            }
            return this;
        }
        get(t) {
            if (this.nested && Object.prototype.hasOwnProperty.call(this.nested, t)) {
                return this.nested[t];
            }
            return null;
        }
        getEnum(t) {
            if (this.nested && Object.prototype.hasOwnProperty.call(this.nested, t) && this.nested[t] instanceof _r) {
                return this.nested[t].values;
            }
            throw Error(`no such enum: ${t}`);
        }
        add(t) {
            if (!(t instanceof ka && t.extend !== undefined || t instanceof yr || t instanceof oE || t instanceof _r || t instanceof Ur || t instanceof B)) {
                throw TypeError("object must be a valid nested object");
            }
            if (t.name === "__proto__") {
                return this;
            }
            if (!this.nested) {
                this.nested = {};
            } else {
                const r = this.get(t.name);
                if (r) {
                    if (r instanceof B && t instanceof B && !(r instanceof yr || r instanceof Ur)) {
                        const i = r.nestedArray;
                        for(let s = 0; s < i.length; ++s){
                            t.add(i[s]);
                        }
                        this.remove(r);
                        if (!this.nested) {
                            this.nested = {};
                        }
                        t.setOptions(r.options, true);
                    } else {
                        throw Error(`duplicate name '${t.name}' in ${this}`);
                    }
                }
            }
            this.nested[t.name] = t;
            if (!(this instanceof yr || this instanceof Ur || this instanceof _r || this instanceof ka)) {
                if (!t._edition) {
                    t._edition = t._defaultEdition;
                }
            }
            this._needsRecursiveFeatureResolution = true;
            this._needsRecursiveResolve = true;
            let n = this;
            while(n = n.parent){
                n._needsRecursiveFeatureResolution = true;
                n._needsRecursiveResolve = true;
            }
            t.onAdd(this);
            return ud(this);
        }
        remove(t) {
            if (!(t instanceof Es)) {
                throw TypeError("object must be a ReflectionObject");
            }
            if (t.parent !== this) {
                throw Error(`${t} is not a member of ${this}`);
            }
            delete this.nested[t.name];
            if (!Object.keys(this.nested).length) {
                this.nested = undefined;
            }
            t.onRemove(this);
            return ud(this);
        }
        define(t, r) {
            if (Br.isString(t)) {
                t = t.split(".");
            } else if (!Array.isArray(t)) {
                throw TypeError("illegal path");
            }
            if (t && t.length && t[0] === "") {
                throw Error("path must be relative");
            }
            let i = this;
            while(t.length > 0){
                const s = t.shift();
                if (i.nested && i.nested[s]) {
                    i = i.nested[s];
                    if (!(i instanceof B)) {
                        throw Error("path conflicts with non-namespace objects");
                    }
                } else {
                    i.add(i = new B(s));
                }
            }
            if (r) {
                i.addJSON(r);
            }
            return i;
        }
        resolveAll() {
            if (!this._needsRecursiveResolve) {
                return this;
            }
            this._resolveFeaturesRecursive(this._edition);
            const nestedArray = this.nestedArray;
            let r = 0;
            this.resolve();
            while(r < nestedArray.length){
                if (nestedArray[r] instanceof B) {
                    nestedArray[r++].resolveAll();
                } else {
                    nestedArray[r++].resolve();
                }
            }
            this._needsRecursiveResolve = false;
            return this;
        }
        _resolveFeaturesRecursive(t) {
            if (!this._needsRecursiveFeatureResolution) {
                return this;
            }
            this._needsRecursiveFeatureResolution = false;
            t = this._edition || t;
            Es.prototype._resolveFeaturesRecursive.call(this, t);
            this.nestedArray.forEach((r)=>{
                r._resolveFeaturesRecursive(t);
            });
            return this;
        }
        lookup(t, r, i) {
            if (typeof r === "boolean") {
                i = r;
                r = undefined;
            } else if (r && !Array.isArray(r)) {
                r = [
                    r
                ];
            }
            if (Br.isString(t) && t.length) {
                if (t === ".") {
                    return this.root;
                }
                t = t.split(".");
            } else if (!t.length) {
                return this;
            }
            const s = t.join(".");
            if (t[0] === "") {
                return this.root.lookup(t.slice(1), r);
            }
            let n = this.root._fullyQualifiedObjects && this.root._fullyQualifiedObjects[`.${s}`];
            if (n && (!r || r.indexOf(n.constructor) > -1)) {
                return n;
            }
            n = this._lookupImpl(t, s);
            if (n && (!r || r.indexOf(n.constructor) > -1)) {
                return n;
            }
            if (i) {
                return null;
            }
            let a = this;
            while(a.parent){
                n = a.parent._lookupImpl(t, s);
                if (n && (!r || r.indexOf(n.constructor) > -1)) {
                    return n;
                }
                a = a.parent;
            }
            return null;
        }
        _lookupImpl(t, r) {
            if (Object.prototype.hasOwnProperty.call(this._lookupCache, r)) {
                return this._lookupCache[r];
            }
            let i = this.get(t[0]);
            let s = null;
            if (i) {
                if (t.length === 1) {
                    s = i;
                } else if (i instanceof B) {
                    t = t.slice(1);
                    s = i._lookupImpl(t, t.join("."));
                }
            } else {
                for(let n = 0; n < this.nestedArray.length; ++n){
                    if (this._nestedArray[n] instanceof B && (i = this._nestedArray[n]._lookupImpl(t, r))) {
                        s = i;
                        break;
                    }
                }
            }
            this._lookupCache[r] = s;
            return s;
        }
        lookupType(t) {
            const r = this.lookup(t, [
                yr
            ]);
            if (!r) {
                throw Error(`no such type: ${t}`);
            }
            return r;
        }
        lookupEnum(t) {
            const r = this.lookup(t, [
                _r
            ]);
            if (!r) {
                throw Error(`no such Enum '${t}' in ${this}`);
            }
            return r;
        }
        lookupTypeOrEnum(t) {
            const r = this.lookup(t, [
                yr,
                _r
            ]);
            if (!r) {
                throw Error(`no such Type or Enum '${t}' in ${this}`);
            }
            return r;
        }
        lookupService(t) {
            const r = this.lookup(t, [
                Ur
            ]);
            if (!r) {
                throw Error(`no such Service '${t}' in ${this}`);
            }
            return r;
        }
        static _configure(e, t, r) {
            yr = e;
            Ur = t;
            _r = r;
        }
    }
    dd.exports = B;
    B.fromJSON = function(t, r, i) {
        i = Br.checkDepth(i);
        return new B(t, r.options).addJSON(r.nested, i);
    };
    B.arrayToJSON = cd;
    B.isReservedId = function(t, r) {
        if (t) {
            for(let i = 0; i < t.length; ++i){
                if (typeof t[i] !== "string" && t[i][0] <= r && t[i][1] > r) {
                    return true;
                }
            }
        }
        return false;
    };
    B.isReservedName = function(t, r) {
        if (t) {
            for(let i = 0; i < t.length; ++i){
                if (t[i] === r) {
                    return true;
                }
            }
        }
        return false;
    };
    B.className = "Namespace";
    function ud(e) {
        e._nestedArray = null;
        e._lookupCache = Object.create(null);
        let t = e;
        while(t = t.parent){
            t._lookupCache = Object.create(null);
        }
        return e;
    }
    Object.defineProperty(B.prototype, "nestedArray", {
        get: function() {
            return this._nestedArray || (this._nestedArray = Br.toArray(this.nested));
        }
    });
});
const Ts = C(function(sA, hd) {
    var La = Yt();
    const lE = Cr();
    var Ai = de();
    class Lt extends La {
        constructor(e, t, r, i, s, n){
            super(e, t, i, undefined, undefined, s, n);
            if (!Ai.isString(r)) {
                throw TypeError("keyType must be a string");
            }
            this.keyType = r;
            this.resolvedKeyType = null;
            this.map = true;
        }
        static fromJSON(t, r) {
            return new Lt(t, r.id, r.keyType, r.type, r.options, r.comment);
        }
        toJSON(t) {
            const r = t ? Boolean(t.keepComments) : false;
            return Ai.toObject([
                "keyType",
                this.keyType,
                "type",
                this.type,
                "id",
                this.id,
                "extend",
                this.extend,
                "options",
                this.options,
                "comment",
                r ? this.comment : undefined
            ]);
        }
        resolve() {
            if (this.resolved) {
                return this;
            }
            if (lE.mapKey[this.keyType] === undefined) {
                throw Error(`invalid key type: ${this.keyType}`);
            }
            return La.prototype.resolve.call(this);
        }
        static d(t, r, i) {
            if (typeof i === "function") {
                i = Ai.decorateType(i).name;
            } else if (i && typeof i === "object") {
                i = Ai.decorateEnum(i).name;
            }
            return function(n, a) {
                Ai.decorateType(n.constructor).add(new Lt(a, t, r, i));
            };
        }
    }
    hd.exports = Lt;
    Lt.className = "MapField";
});
const Rs = C(function(nA, fd) {
    var Fa = Kt();
    var Hr = de();
    class Er extends Fa {
        constructor(e, t, r, i, s, n, a, o, l){
            if (Hr.isObject(s)) {
                a = s;
                n = undefined;
                s = undefined;
            } else if (Hr.isObject(n)) {
                a = n;
                n = undefined;
            }
            if (!(t === undefined || Hr.isString(t))) {
                throw TypeError("type must be a string");
            }
            if (!Hr.isString(r)) {
                throw TypeError("requestType must be a string");
            }
            if (!Hr.isString(i)) {
                throw TypeError("responseType must be a string");
            }
            super(e, a);
            this.type = t || "rpc";
            this.requestType = r;
            this.requestStream = s ? true : undefined;
            this.responseType = i;
            this.responseStream = n ? true : undefined;
            this.resolvedRequestType = null;
            this.resolvedResponseType = null;
            this.comment = o;
            this.parsedOptions = l;
        }
        static fromJSON(t, r) {
            return new Er(t, r.type, r.requestType, r.responseType, r.requestStream, r.responseStream, r.options, r.comment, r.parsedOptions);
        }
        toJSON(t) {
            const r = t ? Boolean(t.keepComments) : false;
            return Hr.toObject([
                "type",
                this.type !== "rpc" && this.type || undefined,
                "requestType",
                this.requestType,
                "requestStream",
                this.requestStream,
                "responseType",
                this.responseType,
                "responseStream",
                this.responseStream,
                "options",
                this.options,
                "comment",
                r ? this.comment : undefined,
                "parsedOptions",
                this.parsedOptions
            ]);
        }
        resolve() {
            if (this.resolved) {
                return this;
            }
            this.resolvedRequestType = this.parent.lookupType(this.requestType);
            this.resolvedResponseType = this.parent.lookupType(this.responseType);
            return Fa.prototype.resolve.call(this);
        }
    }
    fd.exports = Er;
    Er.className = "Method";
});
const bs = C(function(aA, gd) {
    var Ft = zr();
    const qa = Rs();
    const Wr = de();
    const cE = iWr();
    const reservedRe = Wr.patterns.reservedRe;
    class De extends Ft {
        constructor(e, t){
            super(e, t);
            this.methods = {};
            this._methodsArray = null;
        }
        static fromJSON(t, r, i) {
            i = Wr.checkDepth(i);
            const s = new De(t, r.options);
            if (r.methods) {
                for(let n = Object.keys(r.methods), a = 0; a < n.length; ++a){
                    s.add(qa.fromJSON(n[a], r.methods[n[a]]));
                }
            }
            if (r.nested) {
                s.addJSON(r.nested, i);
            }
            if (r.edition) {
                s._edition = r.edition;
            }
            s.comment = r.comment;
            s._defaultEdition = "proto3";
            return s;
        }
        toJSON(t) {
            const r = Ft.prototype.toJSON.call(this, t);
            const i = t ? Boolean(t.keepComments) : false;
            return Wr.toObject([
                "edition",
                this._editionToJSON(),
                "options",
                r && r.options || undefined,
                "methods",
                Ft.arrayToJSON(this.methodsArray, t) || {},
                "nested",
                r && r.nested || undefined,
                "comment",
                i ? this.comment : undefined
            ]);
        }
        get(t) {
            if (Object.prototype.hasOwnProperty.call(this.methods, t)) {
                return this.methods[t];
            }
            return Ft.prototype.get.call(this, t);
        }
        resolveAll() {
            if (!this._needsRecursiveResolve) {
                return this;
            }
            Ft.prototype.resolve.call(this);
            const methodsArray = this.methodsArray;
            for(let r = 0; r < methodsArray.length; ++r){
                methodsArray[r].resolve();
            }
            return this;
        }
        _resolveFeaturesRecursive(t) {
            if (!this._needsRecursiveFeatureResolution) {
                return this;
            }
            t = this._edition || t;
            Ft.prototype._resolveFeaturesRecursive.call(this, t);
            this.methodsArray.forEach((r)=>{
                r._resolveFeaturesRecursive(t);
            });
            return this;
        }
        add(t) {
            if (this.get(t.name)) {
                throw Error(`duplicate name '${t.name}' in ${this}`);
            }
            if (t instanceof qa) {
                if (t.name === "__proto__") {
                    return this;
                }
                this.methods[t.name] = t;
                t.parent = this;
                return pd(this);
            }
            return Ft.prototype.add.call(this, t);
        }
        remove(t) {
            if (t instanceof qa) {
                if (this.methods[t.name] !== t) {
                    throw Error(`${t} is not a member of ${this}`);
                }
                delete this.methods[t.name];
                t.parent = null;
                return pd(this);
            }
            return Ft.prototype.remove.call(this, t);
        }
        create(t, r, i) {
            const s = new cE.Service(t, r, i);
            let m;
            for(let n = 0; n < this.methodsArray.length; ++n){
                const o = Wr.lcFirst((m = this._methodsArray[n]).resolve().name).replace(/[^$\w_]/g, "");
                s[o] = Wr.codegen([
                    "r",
                    "c"
                ], reservedRe.test(o) ? `${o}_` : o)("return this.rpcCall(m,q,s,r,c)")({
                    m,
                    q: m.resolvedRequestType.ctor,
                    s: m.resolvedResponseType.ctor
                });
            }
            return s;
        }
    }
    gd.exports = De;
    De.className = "Service";
    Object.defineProperty(De.prototype, "methodsArray", {
        get: function() {
            return this._methodsArray || (this._methodsArray = Wr.toArray(this.methods));
        }
    });
    function pd(e) {
        e._methodsArray = null;
        return e;
    }
});
const Os = C(function(oA, md) {
    const dE = HOe();
    class pt {
        constructor(e){
            if (e) {
                for(let t = Object.keys(e), r = 0; r < t.length; ++r){
                    const i = t[r];
                    if (i === "__proto__") {
                        continue;
                    }
                    this[i] = e[i];
                }
            }
        }
        static create(t) {
            return this.$type.create(t);
        }
        static encode(t, r) {
            return this.$type.encode(t, r);
        }
        static encodeDelimited(t, r) {
            return this.$type.encodeDelimited(t, r);
        }
        static decode(t) {
            return this.$type.decode(t);
        }
        static decodeDelimited(t) {
            return this.$type.decodeDelimited(t);
        }
        static verify(t) {
            return this.$type.verify(t);
        }
        static fromObject(t) {
            return this.$type.fromObject(t);
        }
        static toObject(t, r) {
            return this.$type.toObject(t, r);
        }
        toJSON() {
            return this.$type.toObject(this, dE.toJSONOptions);
        }
    }
    md.exports = pt;
});
const Ua = C(function(lA, yd) {
    yd.exports = pE;
    var hE = nt();
    var qt = Cr();
    var vd = de();
    function fE(e) {
        return `missing required '${e.name}'`;
    }
    function pE(e) {
        const t = vd.codegen([
            "r",
            "l",
            "e",
            "n"
        ], `${e.name}\$decode`)("if(!(r instanceof Reader))")("r=Reader.create(r)")("if(n===undefined)n=0")("if(n>Reader.recursionLimit)")('throw Error("maximum nesting depth exceeded")')(`var c=l===undefined?r.len:r.pos+l,m=new this.ctor${e.fieldsArray.filter((o)=>o.map).length ? ",k,value" : ""}`)("while(r.pos<c){")("var t=r.uint32()")("if(t===e)")("break")("switch(t>>>3){");
        let r = 0;
        for(; r < e.fieldsArray.length; ++r){
            const i = e._fieldsArray[r].resolve();
            const s = i.resolvedType instanceof hE ? "int32" : i.type;
            const n = `m${vd.safeProp(i.name)}`;
            t("case %i: {", i.id);
            if (i.map) {
                t("if(%s===util.emptyObject)", n)("%s={}", n)("var c2 = r.uint32()+r.pos");
                if (qt.defaults[i.keyType] !== undefined) {
                    t("k=%j", qt.defaults[i.keyType]);
                } else {
                    t("k=null");
                }
                if (qt.defaults[s] !== undefined) {
                    t("value=%j", qt.defaults[s]);
                } else {
                    t("value=null");
                }
                t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", i.keyType)("case 2:");
                if (qt.basic[s] === undefined) {
                    t("value=types[%i].decode(r,r.uint32(),undefined,n+1)", r);
                } else {
                    t("value=r.%s()", s);
                }
                t("break")("default:")("r.skipType(tag2&7,n)")("break")("}")("}");
                if (qt.long[i.keyType] !== undefined) {
                    t('%s[typeof k==="object"?util.longToHash(k):k]=value', n);
                } else {
                    if (i.keyType === "string") {
                        t('if(k==="__proto__")')("util.makeProp(%s,k)", n);
                    }
                    t("%s[k]=value", n);
                }
            } else if (i.repeated) {
                t("if(!(%s&&%s.length))", n, n)("%s=[]", n);
                if (qt.packed[s] !== undefined) {
                    t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", n, s)("}else");
                }
                if (qt.basic[s] === undefined) {
                    t(i.delimited ? "%s.push(types[%i].decode(r,undefined,((t&~7)|4),n+1))" : "%s.push(types[%i].decode(r,r.uint32(),undefined,n+1))", n, r);
                } else {
                    t("%s.push(r.%s())", n, s);
                }
            } else if (qt.basic[s] === undefined) {
                t(i.delimited ? "%s=types[%i].decode(r,undefined,((t&~7)|4),n+1)" : "%s=types[%i].decode(r,r.uint32(),undefined,n+1)", n, r);
            } else {
                t("%s=r.%s()", n, s);
            }
            t("break")("}");
        }
        t("default:")("r.skipType(t&7,n)")("break")("}")("}");
        for(r = 0; r < e._fieldsArray.length; ++r){
            const a = e._fieldsArray[r];
            if (a.required) {
                t("if(!m.hasOwnProperty(%j))", a.name)("throw util.ProtocolError(%j,{instance:m})", fE(a));
            }
        }
        return t("return m");
    }
});
const Ha = C(function(cA, _d) {
    _d.exports = vE;
    var gE = nt();
    var Ba = de();
    function He(e, t) {
        return `${e.name}: ${t}${e.repeated && t !== "array" ? "[]" : e.map && t !== "object" ? `{k:${e.keyType}}` : ""} expected`;
    }
    function za(e, t, r, i) {
        if (t.resolvedType) {
            if (t.resolvedType instanceof gE) {
                e("switch(%s){", i)("default:")("return%j", He(t, "enum value"));
                for(let s = Object.keys(t.resolvedType.values), n = 0; n < s.length; ++n){
                    e("case %i:", t.resolvedType.values[s[n]]);
                }
                e("break")("}");
            } else {
                e("{")("var e=types[%i].verify(%s,n+1);", r, i)("if(e)")("return%j+e", `${t.name}.`)("}");
            }
        } else {
            switch(t.type){
                case "int32":
                case "uint32":
                case "sint32":
                case "fixed32":
                case "sfixed32":
                    e("if(!util.isInteger(%s))", i)("return%j", He(t, "integer"));
                    break;
                case "int64":
                case "uint64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", i, i, i, i)("return%j", He(t, "integer|Long"));
                    break;
                case "float":
                case "double":
                    e('if(typeof %s!=="number")', i)("return%j", He(t, "number"));
                    break;
                case "bool":
                    e('if(typeof %s!=="boolean")', i)("return%j", He(t, "boolean"));
                    break;
                case "string":
                    e("if(!util.isString(%s))", i)("return%j", He(t, "string"));
                    break;
                case "bytes":
                    e('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', i, i, i)("return%j", He(t, "buffer"));
                    break;
            }
        }
        return e;
    }
    function mE(e, t, r) {
        switch(t.keyType){
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
                e("if(!util.key32Re.test(%s))", r)("return%j", He(t, "integer key"));
                break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
                e("if(!util.key64Re.test(%s))", r)("return%j", He(t, "integer|Long key"));
                break;
            case "bool":
                e("if(!util.key2Re.test(%s))", r)("return%j", He(t, "boolean key"));
                break;
        }
        return e;
    }
    function vE(e) {
        const t = Ba.codegen([
            "m",
            "n"
        ], `${e.name}\$verify`)('if(typeof m!=="object"||m===null)')("return%j", "object expected")("if(n===undefined)n=0")("if(n>util.recursionLimit)")("return%j", "maximum nesting depth exceeded");
        const e_oneofsArray = e.oneofsArray;
        const i = {};
        if (e_oneofsArray.length) {
            t("var p={}");
        }
        for(let s = 0; s < e.fieldsArray.length; ++s){
            const n = e._fieldsArray[s].resolve();
            const a = `m${Ba.safeProp(n.name)}`;
            if (n.optional) {
                t("if(%s!=null&&m.hasOwnProperty(%j)){", a, n.name);
            }
            if (n.map) {
                t("if(!util.isObject(%s))", a)("return%j", He(n, "object"))("var k=Object.keys(%s)", a)("for(var i=0;i<k.length;++i){");
                mE(t, n, "k[i]");
                za(t, n, s, `${a}[k[i]]`)("}");
            } else if (n.repeated) {
                t("if(!Array.isArray(%s))", a)("return%j", He(n, "array"))("for(var i=0;i<%s.length;++i){", a);
                za(t, n, s, `${a}[i]`)("}");
            } else {
                if (n.partOf) {
                    const o = Ba.safeProp(n.partOf.name);
                    if (i[n.partOf.name] === 1) {
                        t("if(p%s===1)", o)("return%j", `${n.partOf.name}: multiple values`);
                    }
                    i[n.partOf.name] = 1;
                    t("p%s=1", o);
                }
                za(t, n, s, a);
            }
            if (n.optional) {
                t("}");
            }
        }
        return t("return null");
    }
});
const Ga = C(function(Cd) {
    const Sd = Cd;
    const Pi = nt();
    const gt = de();
    function Wa(e, t, r, i) {
        let s = false;
        if (t.resolvedType) {
            if (t.resolvedType instanceof Pi) {
                e("switch(d%s){", i);
                const n = t.resolvedType.values;
                for(let a = Object.keys(n), o = 0; o < a.length; ++o){
                    if (n[a[o]] === t.typeDefault && !s) {
                        e("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', i, i, i);
                        if (!t.repeated) {
                            e("break");
                        }
                        s = true;
                    }
                    e("case%j:", a[o])("case %i:", n[a[o]])("m%s=%j", i, n[a[o]])("break");
                }
                e("}");
            } else {
                e('if(typeof d%s!=="object")', i)("throw TypeError(%j)", `${t.fullName}: object expected`)("m%s=types[%i].fromObject(d%s,n+1)", i, r, i);
            }
        } else {
            let l = false;
            switch(t.type){
                case "double":
                case "float":
                    e("m%s=Number(d%s)", i, i);
                    break;
                case "uint32":
                case "fixed32":
                    e("m%s=d%s>>>0", i, i);
                    break;
                case "int32":
                case "sint32":
                case "sfixed32":
                    e("m%s=d%s|0", i, i);
                    break;
                case "uint64":
                    l = true;
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    e("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", i, i, l)('else if(typeof d%s==="string")', i)("m%s=parseInt(d%s,10)", i, i)('else if(typeof d%s==="number")', i)("m%s=d%s", i, i)('else if(typeof d%s==="object")', i)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", i, i, i, l ? "true" : "");
                    break;
                case "bytes":
                    e('if(typeof d%s==="string")', i)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", i, i, i)("else if(d%s.length >= 0)", i)("m%s=d%s", i, i);
                    break;
                case "string":
                    e("m%s=String(d%s)", i, i);
                    break;
                case "bool":
                    e("m%s=Boolean(d%s)", i, i);
                    break;
            }
        }
        return e;
    }
    Sd.fromObject = function(t) {
        const t_fieldsArray = t.fieldsArray;
        const i = gt.codegen([
            "d",
            "n"
        ], `${t.name}\$fromObject`)("if(d instanceof this.ctor)")("return d")("if(n===undefined)n=0")("if(n>util.recursionLimit)")('throw Error("maximum nesting depth exceeded")');
        if (!t_fieldsArray.length) {
            return i("return new this.ctor");
        }
        i("var m=new this.ctor");
        for(let s = 0; s < t_fieldsArray.length; ++s){
            const n = t_fieldsArray[s].resolve();
            const a = gt.safeProp(n.name);
            if (n.map) {
                i("if(d%s){", a)('if(typeof d%s!=="object")', a)("throw TypeError(%j)", `${n.fullName}: object expected`)("m%s={}", a)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", a);
                i('if(ks[i]==="__proto__")')("util.makeProp(m%s,ks[i])", a);
                Wa(i, n, s, `${a}[ks[i]]`)("}")("}");
            } else if (n.repeated) {
                i("if(d%s){", a)("if(!Array.isArray(d%s))", a)("throw TypeError(%j)", `${n.fullName}: array expected`)("m%s=[]", a)("for(var i=0;i<d%s.length;++i){", a);
                Wa(i, n, s, `${a}[i]`)("}")("}");
            } else {
                if (!(n.resolvedType instanceof Pi)) {
                    i("if(d%s!=null){", a);
                }
                Wa(i, n, s, a);
                if (!(n.resolvedType instanceof Pi)) {
                    i("}");
                }
            }
        }
        return i("return m");
    };
    function ja(e, t, r, i) {
        if (t.resolvedType) {
            if (t.resolvedType instanceof Pi) {
                e("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", i, r, i, i, r, i, i);
            } else {
                e("d%s=types[%i].toObject(m%s,o)", i, r, i);
            }
        } else {
            let s = false;
            switch(t.type){
                case "double":
                case "float":
                    e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", i, i, i, i);
                    break;
                case "uint64":
                    s = true;
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    e('if(typeof m%s==="number")', i)("d%s=o.longs===String?String(m%s):m%s", i, i, i)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", i, i, i, i, s ? "true" : "", i);
                    break;
                case "bytes":
                    e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", i, i, i, i, i);
                    break;
                default:
                    e("d%s=m%s", i, i);
                    break;
            }
        }
        return e;
    }
    Sd.toObject = function(t) {
        const r = t.fieldsArray.slice().sort(gt.compareFieldsById);
        if (!r.length) {
            return gt.codegen()("return {}");
        }
        const i = gt.codegen([
            "m",
            "o"
        ], `${t.name}\$toObject`)("if(!o)")("o={}")("var d={}");
        const s = [];
        const n = [];
        const a = [];
        let o = 0;
        for(; o < r.length; ++o){
            if (!r[o].partOf) {
                (r[o].resolve().repeated ? s : r[o].map ? n : a).push(r[o]);
            }
        }
        if (s.length) {
            i("if(o.arrays||o.defaults){");
            for(o = 0; o < s.length; ++o){
                i("d%s=[]", gt.safeProp(s[o].name));
            }
            i("}");
        }
        if (n.length) {
            i("if(o.objects||o.defaults){");
            for(o = 0; o < n.length; ++o){
                i("d%s={}", gt.safeProp(n[o].name));
            }
            i("}");
        }
        if (a.length) {
            i("if(o.defaults){");
            for(o = 0; o < a.length; ++o){
                var l = a[o];
                var c = gt.safeProp(l.name);
                if (l.resolvedType instanceof Pi) {
                    i("d%s=o.enums===String?%j:%j", c, l.resolvedType.valuesById[l.typeDefault], l.typeDefault);
                } else if (l.long) {
                    i("if(util.Long){")("var n=new util.Long(%i,%i,%j)", l.typeDefault.low, l.typeDefault.high, l.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", c)("}else")("d%s=o.longs===String?%j:%i", c, l.typeDefault.toString(), l.typeDefault.toNumber());
                } else if (l.bytes) {
                    const u = Array.prototype.slice.call(l.typeDefault);
                    i("if(o.bytes===String)d%s=%j", c, String.fromCharCode(...l.typeDefault))("else{")("d%s=%j", c, u)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", c, c)("}");
                } else {
                    i("d%s=%j", c, l.typeDefault);
                }
            }
            i("}");
        }
        let d = false;
        for(o = 0; o < r.length; ++o){
            var l = r[o];
            const h = t._fieldsArray.indexOf(l);
            var c = gt.safeProp(l.name);
            if (l.map) {
                if (!d) {
                    d = true;
                    i("var ks2");
                }
                i("if(m%s&&(ks2=Object.keys(m%s)).length){", c, c)("d%s={}", c)("for(var j=0;j<ks2.length;++j){");
                i('if(ks2[j]==="__proto__")')("util.makeProp(d%s,ks2[j])", c);
                ja(i, l, h, `${c}[ks2[j]]`)("}");
            } else if (l.repeated) {
                i("if(m%s&&m%s.length){", c, c)("d%s=[]", c)("for(var j=0;j<m%s.length;++j){", c);
                ja(i, l, h, `${c}[j]`)("}");
            } else {
                i("if(m%s!=null&&m.hasOwnProperty(%j)){", c, l.name);
                ja(i, l, h, c);
                if (l.partOf) {
                    i("if(o.oneofs)")("d%s=%j", gt.safeProp(l.partOf.name), l.name);
                }
            }
            i("}");
        }
        return i("return d");
    };
});
const $a = C(function(Ed) {
    const yE = Ed;
    const _E = Os();
    yE[".google.protobuf.Any"] = {
        fromObject: function(e, t) {
            if (e && e["@type"]) {
                const r = e["@type"].substring(e["@type"].lastIndexOf("/") + 1);
                const i = this.lookup(r);
                if (i) {
                    let type_url = e["@type"].charAt(0) === "." ? e["@type"].slice(1) : e["@type"];
                    if (type_url.indexOf("/") === -1) {
                        type_url = `/${type_url}`;
                    }
                    const n = t === undefined ? 1 : t + 1;
                    return this.create({
                        type_url,
                        value: i.encode(i.fromObject(e, n)).finish()
                    });
                }
            }
            return this.fromObject(e, t);
        },
        toObject: function(e, t) {
            const r = "type.googleapis.com/";
            let i = "";
            let s = "";
            if (t && t.json && e.type_url && e.value) {
                s = e.type_url.substring(e.type_url.lastIndexOf("/") + 1);
                i = e.type_url.substring(0, e.type_url.lastIndexOf("/") + 1);
                const n = this.lookup(s);
                if (n) {
                    e = n.decode(e.value);
                }
            }
            if (!(e instanceof this.ctor) && e instanceof _E) {
                const a = e.$type.toObject(e, t);
                const o = e.$type.fullName[0] === "." ? e.$type.fullName.slice(1) : e.$type.fullName;
                if (i === "") {
                    i = r;
                }
                s = i + o;
                a["@type"] = s;
                return a;
            }
            return this.toObject(e, t);
        }
    };
});
const Ps = C(function(hA, Rd) {
    var We = zr();
    const SE = nt();
    const Ka = Sr();
    const ws = Yt();
    const CE = Ts();
    const EE = bs();
    const Va = Os();
    const Reader = HXn();
    const Writer = MXn();
    const util = de();
    const RE = Ja();
    const bE = Ua();
    const OE = Ha();
    const Td = Ga();
    const wE = $a();
    class J extends We {
        constructor(e, t){
            e = e.replace(/\W/g, "");
            super(e, t);
            this.fields = {};
            this.oneofs = undefined;
            this.extensions = undefined;
            this.reserved = undefined;
            this.group = undefined;
            this._fieldsById = null;
            this._fieldsArray = null;
            this._oneofsArray = null;
            this._ctor = null;
        }
        static generateConstructor(t) {
            const r = util.codegen([
                "p"
            ], t.name);
            let s;
            for(let i = 0; i < t.fieldsArray.length; ++i){
                if ((s = t._fieldsArray[i]).map) {
                    r("this%s={}", util.safeProp(s.name));
                } else if (s.repeated) {
                    r("this%s=[]", util.safeProp(s.name));
                }
            }
            return r('if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null&&ks[i]!=="__proto__")')("this[ks[i]]=p[ks[i]]");
        }
        static fromJSON(t, r, i) {
            i = util.checkDepth(i);
            const s = new J(t, r.options);
            s.extensions = r.extensions;
            s.reserved = r.reserved;
            let n = Object.keys(r.fields);
            let a = 0;
            for(; a < n.length; ++a){
                s.add((typeof r.fields[n[a]].keyType !== "undefined" ? CE.fromJSON : ws.fromJSON)(n[a], r.fields[n[a]]));
            }
            if (r.oneofs) {
                n = Object.keys(r.oneofs);
                for(a = 0; a < n.length; ++a){
                    s.add(Ka.fromJSON(n[a], r.oneofs[n[a]]));
                }
            }
            if (r.nested) {
                n = Object.keys(r.nested);
                for(a = 0; a < n.length; ++a){
                    const o = r.nested[n[a]];
                    s.add((o.id !== undefined ? ws.fromJSON : o.fields !== undefined ? J.fromJSON : o.values !== undefined ? SE.fromJSON : o.methods !== undefined ? EE.fromJSON : We.fromJSON)(n[a], o, i + 1));
                }
            }
            if (r.extensions && r.extensions.length) {
                s.extensions = r.extensions;
            }
            if (r.reserved && r.reserved.length) {
                s.reserved = r.reserved;
            }
            if (r.group) {
                s.group = true;
            }
            if (r.comment) {
                s.comment = r.comment;
            }
            if (r.edition) {
                s._edition = r.edition;
            }
            s._defaultEdition = "proto3";
            return s;
        }
        toJSON(t) {
            const r = We.prototype.toJSON.call(this, t);
            const i = t ? Boolean(t.keepComments) : false;
            return util.toObject([
                "edition",
                this._editionToJSON(),
                "options",
                r && r.options || undefined,
                "oneofs",
                We.arrayToJSON(this.oneofsArray, t),
                "fields",
                We.arrayToJSON(this.fieldsArray.filter((s)=>!s.declaringField), t) || {},
                "extensions",
                this.extensions && this.extensions.length ? this.extensions : undefined,
                "reserved",
                this.reserved && this.reserved.length ? this.reserved : undefined,
                "group",
                this.group || undefined,
                "nested",
                r && r.nested || undefined,
                "comment",
                i ? this.comment : undefined
            ]);
        }
        resolveAll() {
            if (!this._needsRecursiveResolve) {
                return this;
            }
            We.prototype.resolveAll.call(this);
            const oneofsArray = this.oneofsArray;
            i = 0;
            while(i < oneofsArray.length){
                oneofsArray[i++].resolve();
            }
            const fieldsArray = this.fieldsArray;
            var i = 0;
            while(i < fieldsArray.length){
                fieldsArray[i++].resolve();
            }
            return this;
        }
        _resolveFeaturesRecursive(t) {
            if (!this._needsRecursiveFeatureResolution) {
                return this;
            }
            t = this._edition || t;
            We.prototype._resolveFeaturesRecursive.call(this, t);
            this.oneofsArray.forEach((r)=>{
                r._resolveFeatures(t);
            });
            this.fieldsArray.forEach((r)=>{
                r._resolveFeatures(t);
            });
            return this;
        }
        get(t) {
            if (Object.prototype.hasOwnProperty.call(this.fields, t)) {
                return this.fields[t];
            }
            if (this.oneofs && Object.prototype.hasOwnProperty.call(this.oneofs, t)) {
                return this.oneofs[t];
            }
            if (this.nested && Object.prototype.hasOwnProperty.call(this.nested, t)) {
                return this.nested[t];
            }
            return null;
        }
        add(t) {
            if (this.get(t.name)) {
                throw Error(`duplicate name '${t.name}' in ${this}`);
            }
            if (t instanceof ws && t.extend === undefined) {
                if (this._fieldsById ? this._fieldsById[t.id] : this.fieldsById[t.id]) {
                    throw Error(`duplicate id ${t.id} in ${this}`);
                }
                if (this.isReservedId(t.id)) {
                    throw Error(`id ${t.id} is reserved in ${this}`);
                }
                if (this.isReservedName(t.name)) {
                    throw Error(`name '${t.name}' is reserved in ${this}`);
                }
                if (t.name === "__proto__") {
                    return this;
                }
                if (t.parent) {
                    t.parent.remove(t);
                }
                this.fields[t.name] = t;
                t.message = this;
                t.onAdd(this);
                return As(this);
            }
            if (t instanceof Ka) {
                if (t.name === "__proto__") {
                    return this;
                }
                if (!this.oneofs) {
                    this.oneofs = {};
                }
                this.oneofs[t.name] = t;
                t.onAdd(this);
                return As(this);
            }
            return We.prototype.add.call(this, t);
        }
        remove(t) {
            if (t instanceof ws && t.extend === undefined) {
                if (!this.fields || this.fields[t.name] !== t) {
                    throw Error(`${t} is not a member of ${this}`);
                }
                delete this.fields[t.name];
                t.parent = null;
                t.onRemove(this);
                return As(this);
            }
            if (t instanceof Ka) {
                if (!this.oneofs || this.oneofs[t.name] !== t) {
                    throw Error(`${t} is not a member of ${this}`);
                }
                delete this.oneofs[t.name];
                t.parent = null;
                t.onRemove(this);
                return As(this);
            }
            return We.prototype.remove.call(this, t);
        }
        isReservedId(t) {
            return We.isReservedId(this.reserved, t);
        }
        isReservedName(t) {
            return We.isReservedName(this.reserved, t);
        }
        create(t) {
            return new this.ctor(t);
        }
        setup() {
            const fullName = this.fullName;
            const types = [];
            for(let i = 0; i < this.fieldsArray.length; ++i){
                types.push(this._fieldsArray[i].resolve().resolvedType);
            }
            this.encode = RE(this)({
                Writer,
                types,
                util
            });
            this.decode = bE(this)({
                Reader,
                types,
                util
            });
            this.verify = OE(this)({
                types,
                util
            });
            this.fromObject = Td.fromObject(this)({
                types,
                util
            });
            this.toObject = Td.toObject(this)({
                types,
                util
            });
            const s = wE[fullName];
            if (s) {
                const n = Object.create(this);
                n.fromObject = this.fromObject;
                this.fromObject = s.fromObject.bind(n);
                n.toObject = this.toObject;
                this.toObject = s.toObject.bind(n);
            }
            return this;
        }
        encode(t, r) {
            return this.setup().encode(t, r);
        }
        encodeDelimited(t, r) {
            return this.encode(t, r && r.len ? r.fork() : r).ldelim();
        }
        decode(t, r, i, s) {
            return this.setup().decode(t, r, i, s);
        }
        decodeDelimited(t) {
            if (!(t instanceof Reader)) {
                t = Reader.create(t);
            }
            return this.decode(t, t.uint32());
        }
        verify(t, r) {
            return this.setup().verify(t, r);
        }
        fromObject(t, r) {
            return this.setup().fromObject(t, r);
        }
        toObject(t, r) {
            return this.setup().toObject(t, r);
        }
        static d(t) {
            return function(i) {
                util.decorateType(i, t);
            };
        }
    }
    Rd.exports = J;
    J.className = "Type";
    Object.defineProperties(J.prototype, {
        fieldsById: {
            get: function() {
                if (this._fieldsById) {
                    return this._fieldsById;
                }
                this._fieldsById = {};
                for(let e = Object.keys(this.fields), t = 0; t < e.length; ++t){
                    const r = this.fields[e[t]];
                    const i = r.id;
                    if (this._fieldsById[i]) {
                        throw Error(`duplicate id ${i} in ${this}`);
                    }
                    this._fieldsById[i] = r;
                }
                return this._fieldsById;
            }
        },
        fieldsArray: {
            get: function() {
                return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
            }
        },
        oneofsArray: {
            get: function() {
                return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
            }
        },
        ctor: {
            get: function() {
                return this._ctor || (this.ctor = J.generateConstructor(this)());
            },
            set: function(e) {
                const e_prototype = e.prototype;
                if (!(e_prototype instanceof Va)) {
                    (e.prototype = new Va).constructor = e;
                    util.merge(e.prototype, e_prototype);
                }
                e.$type = e.prototype.$type = this;
                util.merge(e, Va, true);
                this._ctor = e;
                let r = 0;
                for(; r < this.fieldsArray.length; ++r){
                    this._fieldsArray[r].resolve();
                }
                const i = {};
                for(r = 0; r < this.oneofsArray.length; ++r){
                    i[this._oneofsArray[r].resolve().name] = {
                        get: util.oneOfGetter(this._oneofsArray[r].oneof),
                        set: util.oneOfSetter(this._oneofsArray[r].oneof)
                    };
                }
                if (r) {
                    Object.defineProperties(e.prototype, i);
                }
            }
        }
    });
    function As(e) {
        e._fieldsById = e._fieldsArray = e._oneofsArray = null;
        delete e.encode;
        delete e.decode;
        delete e.verify;
        return e;
    }
});
const xs = C(function(fA, wd) {
    var Is = zr();
    const Ns = Yt();
    const Xa = nt();
    const AE = Sr();
    const Ut = de();
    let Qa;
    let Za;
    let Ni;
    class Fe extends Is {
        constructor(e){
            super("", e);
            this.deferred = [];
            this.files = [];
            this._edition = "proto2";
            this._fullyQualifiedObjects = {};
        }
        static fromJSON(t, r, i) {
            i = Ut.checkDepth(i);
            if (!r) {
                r = new Fe;
            }
            if (t.options) {
                r.setOptions(t.options);
            }
            return r.addJSON(t.nested, i).resolveAll();
        }
        loadSync(t, r) {
            if (!Ut.isNode) {
                throw Error("not supported");
            }
            return this.load(t, r, Od);
        }
        resolveAll() {
            if (!this._needsRecursiveResolve) {
                return this;
            }
            if (this.deferred.length) {
                throw Error(`unresolvable extensions: ${this.deferred.map((t)=>`'extend ${t.extend}' in ${t.parent.fullName}`).join(", ")}`);
            }
            return Is.prototype.resolveAll.call(this);
        }
        _handleAdd(t) {
            if (t instanceof Ns) {
                if (t.extend !== undefined && !t.extensionField) {
                    if (!bd(this, t)) {
                        this.deferred.push(t);
                    }
                }
            } else if (t instanceof Xa) {
                if (Ms.test(t.name)) {
                    t.parent[t.name] = t.values;
                }
            } else if (!(t instanceof AE)) {
                if (t instanceof Qa) {
                    for(let r = 0; r < this.deferred.length;){
                        if (bd(this, this.deferred[r])) {
                            this.deferred.splice(r, 1);
                        } else {
                            ++r;
                        }
                    }
                }
                for(let i = 0; i < t.nestedArray.length; ++i){
                    this._handleAdd(t._nestedArray[i]);
                }
                if (Ms.test(t.name)) {
                    t.parent[t.name] = t;
                }
            }
            if (t instanceof Qa || t instanceof Xa || t instanceof Ns) {
                this._fullyQualifiedObjects[t.fullName] = t;
            }
        }
        _handleRemove(t) {
            if (t instanceof Ns) {
                if (t.extend !== undefined) {
                    if (t.extensionField) {
                        t.extensionField.parent.remove(t.extensionField);
                        t.extensionField = null;
                    } else {
                        const r = this.deferred.indexOf(t);
                        if (r > -1) {
                            this.deferred.splice(r, 1);
                        }
                    }
                }
            } else if (t instanceof Xa) {
                if (Ms.test(t.name)) {
                    delete t.parent[t.name];
                }
            } else if (t instanceof Is) {
                for(let i = 0; i < t.nestedArray.length; ++i){
                    this._handleRemove(t._nestedArray[i]);
                }
                if (Ms.test(t.name)) {
                    delete t.parent[t.name];
                }
            }
            delete this._fullyQualifiedObjects[t.fullName];
        }
        static _configure(e, t, r) {
            Qa = e;
            Za = t;
            Ni = r;
        }
    }
    wd.exports = Fe;
    Fe.className = "Root";
    Fe.prototype.resolvePath = Ut.path.resolve;
    Fe.prototype.fetch = Ut.fetch;
    function Od() {}
    Fe.prototype.load = function e(t, r, i) {
        if (typeof r === "function") {
            i = r;
            r = undefined;
        }
        const s = this;
        if (!i) {
            return Ut.asPromise(e, s, t, r);
        }
        const n = i === Od;
        function a(m, f) {
            if (!i) {
                return;
            }
            if (n) {
                throw m;
            }
            if (f) {
                f.resolveAll();
            }
            const y = i;
            i = null;
            y(m, f);
        }
        function o(m) {
            const f = m.lastIndexOf("google/protobuf/");
            if (f > -1) {
                const y = m.substring(f);
                if (y in Ni) {
                    return y;
                }
            }
            return null;
        }
        function l(m, f) {
            try {
                if (Ut.isString(f) && f.charAt(0) === "{") {
                    f = JSON.parse(f);
                }
                if (!Ut.isString(f)) {
                    s.setOptions(f.options).addJSON(f.nested);
                } else {
                    Za.filename = m;
                    const y = Za(f, s, r);
                    let E;
                    let T = 0;
                    if (y.imports) {
                        for(; T < y.imports.length; ++T){
                            if (E = o(y.imports[T]) || s.resolvePath(m, y.imports[T])) {
                                c(E);
                            }
                        }
                    }
                    if (y.weakImports) {
                        for(T = 0; T < y.weakImports.length; ++T){
                            if (E = o(y.weakImports[T]) || s.resolvePath(m, y.weakImports[T])) {
                                c(E, true);
                            }
                        }
                    }
                }
            } catch (error) {
                a(error);
            }
            if (!n && !u) {
                a(null, s);
            }
        }
        function c(m, f) {
            m = o(m) || m;
            if (s.files.indexOf(m) > -1) {
                return;
            }
            s.files.push(m);
            if (m in Ni) {
                if (n) {
                    l(m, Ni[m]);
                } else {
                    ++u;
                    setTimeout(()=>{
                        --u;
                        l(m, Ni[m]);
                    });
                }
                return;
            }
            if (n) {
                let y;
                try {
                    y = Ut.fs.readFileSync(m).toString("utf8");
                } catch (error) {
                    if (!f) {
                        a(error);
                    }
                    return;
                }
                l(m, y);
            } else {
                ++u;
                s.fetch(m, function(E, T) {
                    --u;
                    if (!i) {
                        return;
                    }
                    if (E) {
                        if (!f) {
                            a(E);
                        } else if (!u) {
                            a(null, s);
                        }
                        return;
                    }
                    l(m, T);
                });
            }
        }
        var u = 0;
        if (Ut.isString(t)) {
            t = [
                t
            ];
        }
        let h;
        for(let d = 0; d < t.length; ++d){
            if (h = s.resolvePath("", t[d])) {
                c(h);
            }
        }
        if (n) {
            s.resolveAll();
            return s;
        }
        if (!u) {
            a(null, s);
        }
        return s;
    };
    const Ms = /^[A-Z]/;
    function bd(e, t) {
        const r = t.parent.lookup(t.extend);
        if (r) {
            const i = new Ns(t.fullName, t.id, t.type, t.rule, undefined, t.options);
            if (r.get(i.name)) {
                return true;
            }
            i.declaringField = t;
            t.extensionField = i;
            r.add(i);
            return true;
        }
        return false;
    }
});
var de = C(function(pA, Nd) {
    const Z = Nd.exports = HOe();
    const Ad = aWr();
    let eo;
    let to;
    Z.codegen = ed();
    Z.fetch = id();
    Z.path = ad();
    Z.patterns = ld();
    const reservedRe = Z.patterns.reservedRe;
    const unsafePropertyRe = Z.patterns.unsafePropertyRe;
    Z.fs = Z.inquire("fs");
    Z.checkDepth = function(t = 0) {
        if (t > Z.recursionLimit) {
            throw Error("max depth exceeded");
        }
        return t;
    };
    Z.toArray = function(t) {
        if (t) {
            const r = Object.keys(t);
            const i = Array(r.length);
            let s = 0;
            while(s < r.length){
                i[s] = t[r[s++]];
            }
            return i;
        }
        return [];
    };
    Z.toObject = function(t) {
        const r = {};
        let i = 0;
        while(i < t.length){
            const s = t[i++];
            const n = t[i++];
            if (n !== undefined) {
                r[s] = n;
            }
        }
        return r;
    };
    Z.isReserved = function(t) {
        return reservedRe.test(t);
    };
    Z.safeProp = function(t) {
        if (!/^[$\w_]+$/.test(t) || reservedRe.test(t)) {
            return `[${JSON.stringify(t)}]`;
        }
        return `.${t}`;
    };
    Z.ucFirst = function(t) {
        return t.charAt(0).toUpperCase() + t.substring(1);
    };
    const NE = /_([a-z])/g;
    Z.camelCase = function(t) {
        return t.substring(0, 1) + t.substring(1).replace(NE, (r, i)=>i.toUpperCase());
    };
    Z.compareFieldsById = function(t, r) {
        return t.id - r.id;
    };
    Z.decorateType = function(t, r) {
        if (t.$type) {
            if (r && t.$type.name !== r) {
                Z.decorateRoot.remove(t.$type);
                t.$type.name = r;
                Z.decorateRoot.add(t.$type);
            }
            return t.$type;
        }
        if (!eo) {
            eo = Ps();
        }
        const i = new eo(r || t.name);
        Z.decorateRoot.add(i);
        i.ctor = t;
        Object.defineProperty(t, "$type", {
            value: i,
            enumerable: false
        });
        Object.defineProperty(t.prototype, "$type", {
            value: i,
            enumerable: false
        });
        return i;
    };
    let ME = 0;
    Z.decorateEnum = function(t) {
        if (t.$type) {
            return t.$type;
        }
        if (!to) {
            to = nt();
        }
        const r = new to(`Enum${ME++}`, t);
        Z.decorateRoot.add(r);
        Object.defineProperty(t, "$type", {
            value: r,
            enumerable: false
        });
        return r;
    };
    Z.setProperty = function(t, r, i, s) {
        function n(a, o, l) {
            const c = o.shift();
            if (unsafePropertyRe.test(c)) {
                return a;
            }
            if (o.length > 0) {
                a[c] = n(a[c] || {}, o, l);
            } else {
                const u = a[c];
                if (u && s) {
                    return a;
                }
                if (u) {
                    l = [].concat(u).concat(l);
                }
                a[c] = l;
            }
            return a;
        }
        if (typeof t !== "object") {
            throw TypeError("dst must be an object");
        }
        if (!r) {
            throw TypeError("path must be specified");
        }
        r = r.split(".");
        return n(t, r, i);
    };
    Object.defineProperty(Z, "decorateRoot", {
        get: function() {
            return Ad.decorated || (Ad.decorated = new (xs()));
        }
    });
});
var Cr = C(function(Md) {
    const Mi = Md;
    const IE = de();
    const xE = [
        "double",
        "float",
        "int32",
        "uint32",
        "sint32",
        "fixed32",
        "sfixed32",
        "int64",
        "uint64",
        "sint64",
        "fixed64",
        "sfixed64",
        "bool",
        "string",
        "bytes"
    ];
    function Ii(e, t) {
        let r = 0;
        const i = Object.create(null);
        t |= 0;
        while(r < e.length){
            i[xE[r + t]] = e[r++];
        }
        return i;
    }
    Mi.basic = Ii([
        1,
        5,
        0,
        0,
        0,
        5,
        5,
        0,
        0,
        0,
        1,
        1,
        0,
        2,
        2
    ]);
    Mi.defaults = Ii([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        false,
        "",
        IE.emptyArray,
        null
    ]);
    Mi.long = Ii([
        0,
        0,
        0,
        1,
        1
    ], 7);
    Mi.mapKey = Ii([
        0,
        0,
        0,
        5,
        5,
        0,
        0,
        0,
        1,
        1,
        0,
        2
    ], 2);
    Mi.packed = Ii([
        1,
        5,
        0,
        0,
        0,
        5,
        5,
        0,
        0,
        0,
        1,
        1,
        0
    ]);
});
var Yt = C(function(mA, xd) {
    var ki = Kt();
    const Id = nt();
    var ro = Cr();
    var se = de();
    let xi;
    var kE = /^required|optional|repeated$/;
    class he extends ki {
        constructor(e, t, r, i, s, n, a){
            if (se.isObject(i)) {
                a = s;
                n = i;
                s = undefined;
                i = undefined;
            } else if (se.isObject(s)) {
                a = n;
                n = s;
                s = undefined;
            }
            super(e, n);
            if (!se.isInteger(t) || t < 0) {
                throw TypeError("id must be a non-negative integer");
            }
            if (!se.isString(r)) {
                throw TypeError("type must be a string");
            }
            if (i !== undefined && !kE.test(i = i.toString().toLowerCase())) {
                throw TypeError("rule must be a string rule");
            }
            if (s !== undefined && !se.isString(s)) {
                throw TypeError("extend must be a string");
            }
            if (i === "proto3_optional") {
                i = "optional";
            }
            this.rule = i && i !== "optional" ? i : undefined;
            this.type = r;
            this.id = t;
            this.extend = s || undefined;
            this.repeated = i === "repeated";
            this.map = false;
            this.message = null;
            this.partOf = null;
            this.typeDefault = null;
            this.defaultValue = null;
            this.long = se.Long ? ro.long[r] !== undefined : false;
            this.bytes = r === "bytes";
            this.resolvedType = null;
            this.extensionField = null;
            this.declaringField = null;
            this.comment = a;
        }
        setOption(t, r, i) {
            return ki.prototype.setOption.call(this, t, r, i);
        }
        toJSON(t) {
            const r = t ? Boolean(t.keepComments) : false;
            return se.toObject([
                "edition",
                this._editionToJSON(),
                "rule",
                this.rule !== "optional" && this.rule || undefined,
                "type",
                this.type,
                "id",
                this.id,
                "extend",
                this.extend,
                "options",
                this.options,
                "comment",
                r ? this.comment : undefined
            ]);
        }
        resolve() {
            if (this.resolved) {
                return this;
            }
            if ((this.typeDefault = ro.defaults[this.type]) === undefined) {
                this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
                if (this.resolvedType instanceof xi) {
                    this.typeDefault = null;
                } else {
                    this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
                }
            } else if (this.options && this.options.proto3_optional) {
                this.typeDefault = null;
            }
            if (this.options && this.options.default != null) {
                this.typeDefault = this.options.default;
                if (this.resolvedType instanceof Id && typeof this.typeDefault === "string") {
                    this.typeDefault = this.resolvedType.values[this.typeDefault];
                }
            }
            if (this.options) {
                if (this.options.packed !== undefined && this.resolvedType && !(this.resolvedType instanceof Id)) {
                    delete this.options.packed;
                }
                if (!Object.keys(this.options).length) {
                    this.options = undefined;
                }
            }
            if (this.long) {
                this.typeDefault = se.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");
                if (Object.freeze) {
                    Object.freeze(this.typeDefault);
                }
            } else if (this.bytes && typeof this.typeDefault === "string") {
                let t;
                if (se.base64.test(this.typeDefault)) {
                    se.base64.decode(this.typeDefault, t = se.newBuffer(se.base64.length(this.typeDefault)), 0);
                } else {
                    se.utf8.write(this.typeDefault, t = se.newBuffer(se.utf8.length(this.typeDefault)), 0);
                }
                this.typeDefault = t;
            }
            if (this.map) {
                this.defaultValue = se.emptyObject;
            } else if (this.repeated) {
                this.defaultValue = se.emptyArray;
            } else {
                this.defaultValue = this.typeDefault;
            }
            if (this.parent instanceof xi) {
                this.parent.ctor.prototype[this.name] = this.defaultValue;
            }
            return ki.prototype.resolve.call(this);
        }
        _inferLegacyProtoFeatures(t) {
            if (t !== "proto2" && t !== "proto3") {
                return {};
            }
            const r = {};
            if (this.rule === "required") {
                r.field_presence = "LEGACY_REQUIRED";
            }
            if (this.parent && ro.defaults[this.type] === undefined) {
                const i = this.parent.get(this.type.split(".").pop());
                if (i && i instanceof xi && i.group) {
                    r.message_encoding = "DELIMITED";
                }
            }
            if (this.getOption("packed") === true) {
                r.repeated_field_encoding = "PACKED";
            } else if (this.getOption("packed") === false) {
                r.repeated_field_encoding = "EXPANDED";
            }
            return r;
        }
        _resolveFeatures(t) {
            return ki.prototype._resolveFeatures.call(this, this._edition || t);
        }
        static d(t, r, i, s) {
            if (typeof r === "function") {
                r = se.decorateType(r).name;
            } else if (r && typeof r === "object") {
                r = se.decorateEnum(r).name;
            }
            return function(a, o) {
                se.decorateType(a.constructor).add(new he(o, t, r, i, {
                    default: s
                }));
            };
        }
        static _configure(t) {
            xi = t;
        }
    }
    xd.exports = he;
    he.fromJSON = function(t, r) {
        const i = new he(t, r.id, r.type, r.rule, r.extend, r.options, r.comment);
        if (r.edition) {
            i._edition = r.edition;
        }
        i._defaultEdition = "proto3";
        return i;
    };
    he.className = "Field";
    Object.defineProperty(he.prototype, "required", {
        get: function() {
            return this._features.field_presence === "LEGACY_REQUIRED";
        }
    });
    Object.defineProperty(he.prototype, "optional", {
        get: function() {
            return !this.required;
        }
    });
    Object.defineProperty(he.prototype, "delimited", {
        get: function() {
            return this.resolvedType instanceof xi && this._features.message_encoding === "DELIMITED";
        }
    });
    Object.defineProperty(he.prototype, "packed", {
        get: function() {
            return this._features.repeated_field_encoding === "PACKED";
        }
    });
    Object.defineProperty(he.prototype, "hasPresence", {
        get: function() {
            if (this.repeated || this.map) {
                return false;
            }
            return this.partOf || this.declaringField || this.extensionField || this._features.field_presence !== "IMPLICIT";
        }
    });
});
var Sr = C(function(vA, Ld) {
    var Ds = Kt();
    const kd = Yt();
    const ks = de();
    class qe extends Ds {
        constructor(e, t, r, i){
            if (!Array.isArray(t)) {
                r = t;
                t = undefined;
            }
            super(e, r);
            if (!(t === undefined || Array.isArray(t))) {
                throw TypeError("fieldNames must be an Array");
            }
            this.oneof = t || [];
            this.fieldsArray = [];
            this.comment = i;
        }
        static fromJSON(t, r) {
            return new qe(t, r.oneof, r.options, r.comment);
        }
        toJSON(t) {
            const r = t ? Boolean(t.keepComments) : false;
            return ks.toObject([
                "options",
                this.options,
                "oneof",
                this.oneof,
                "comment",
                r ? this.comment : undefined
            ]);
        }
        add(t) {
            if (!(t instanceof kd)) {
                throw TypeError("field must be a Field");
            }
            if (t.parent && t.parent !== this.parent) {
                t.parent.remove(t);
            }
            this.oneof.push(t.name);
            this.fieldsArray.push(t);
            t.partOf = this;
            Dd(this);
            return this;
        }
        remove(t) {
            if (!(t instanceof kd)) {
                throw TypeError("field must be a Field");
            }
            let r = this.fieldsArray.indexOf(t);
            if (r < 0) {
                throw Error(`${t} is not a member of ${this}`);
            }
            this.fieldsArray.splice(r, 1);
            r = this.oneof.indexOf(t.name);
            if (r > -1) {
                this.oneof.splice(r, 1);
            }
            t.partOf = null;
            return this;
        }
        onAdd(t) {
            Ds.prototype.onAdd.call(this, t);
            const r = this;
            for(let i = 0; i < this.oneof.length; ++i){
                const s = t.get(this.oneof[i]);
                if (s && !s.partOf) {
                    s.partOf = r;
                    r.fieldsArray.push(s);
                }
            }
            Dd(this);
        }
        onRemove(t) {
            let i;
            for(let r = 0; r < this.fieldsArray.length; ++r){
                if ((i = this.fieldsArray[r]).parent) {
                    i.parent.remove(i);
                }
            }
            Ds.prototype.onRemove.call(this, t);
        }
        static d(...args) {
            const t = Array(args.length);
            let r = 0;
            while(r < args.length){
                t[r] = args[r++];
            }
            return function(s, n) {
                ks.decorateType(s.constructor).add(new qe(n, t));
                Object.defineProperty(s, n, {
                    get: ks.oneOfGetter(t),
                    set: ks.oneOfSetter(t)
                });
            };
        }
    }
    Ld.exports = qe;
    qe.className = "OneOf";
    function Dd(e) {
        if (e.parent) {
            for(let t = 0; t < e.fieldsArray.length; ++t){
                if (!e.fieldsArray[t].parent) {
                    e.parent.add(e.fieldsArray[t]);
                }
            }
        }
    }
    Object.defineProperty(qe.prototype, "isProto3Optional", {
        get: function() {
            if (this.fieldsArray == null || this.fieldsArray.length !== 1) {
                return false;
            }
            const e = this.fieldsArray[0];
            return e.options != null && e.options.proto3_optional === true;
        }
    });
});
var Kt = C(function(yA, Fd) {
    const DE = Sr();
    var Di = de();
    let Ls;
    const LE = {
        enum_type: "OPEN",
        field_presence: "EXPLICIT",
        json_format: "ALLOW",
        message_encoding: "LENGTH_PREFIXED",
        repeated_field_encoding: "PACKED",
        utf8_validation: "VERIFY"
    };
    const FE = {
        enum_type: "CLOSED",
        field_presence: "EXPLICIT",
        json_format: "LEGACY_BEST_EFFORT",
        message_encoding: "LENGTH_PREFIXED",
        repeated_field_encoding: "EXPANDED",
        utf8_validation: "NONE"
    };
    const qE = {
        enum_type: "OPEN",
        field_presence: "IMPLICIT",
        json_format: "ALLOW",
        message_encoding: "LENGTH_PREFIXED",
        repeated_field_encoding: "PACKED",
        utf8_validation: "VERIFY"
    };
    class ye {
        constructor(e, t){
            if (!Di.isString(e)) {
                throw TypeError("name must be a string");
            }
            if (t && !Di.isObject(t)) {
                throw TypeError("options must be an object");
            }
            this.options = t;
            this.parsedOptions = null;
            this.name = e;
            this._edition = null;
            this._defaultEdition = "proto2";
            this._features = {};
            this._featuresResolved = false;
            this.parent = null;
            this.resolved = false;
            this.comment = null;
            this.filename = null;
        }
        toJSON() {
            throw Error();
        }
        onAdd(t) {
            if (this.parent && this.parent !== t) {
                this.parent.remove(this);
            }
            this.parent = t;
            this.resolved = false;
            const t_root = t.root;
            if (t_root instanceof Ls) {
                t_root._handleAdd(this);
            }
        }
        onRemove({ root }) {
            if (root instanceof Ls) {
                root._handleRemove(this);
            }
            this.parent = null;
            this.resolved = false;
        }
        resolve() {
            if (this.resolved) {
                return this;
            }
            if (this.root instanceof Ls) {
                this.resolved = true;
            }
            return this;
        }
        _resolveFeaturesRecursive(t) {
            return this._resolveFeatures(this._edition || t);
        }
        _resolveFeatures(t) {
            if (this._featuresResolved) {
                return;
            }
            let r = {};
            if (!t) {
                throw Error(`Unknown edition for ${this.fullName}`);
            }
            const i = Object.assign(this.options ? {
                ...this.options.features
            } : {}, this._inferLegacyProtoFeatures(t));
            if (this._edition) {
                if (t === "proto2") {
                    r = {
                        ...FE
                    };
                } else if (t === "proto3") {
                    r = {
                        ...qE
                    };
                } else if (t === "2023") {
                    r = {
                        ...LE
                    };
                } else {
                    throw Error(`Unknown edition: ${t}`);
                }
                this._features = Object.assign(r, i || {});
                this._featuresResolved = true;
                return;
            }
            if (this.partOf instanceof DE) {
                const s = {
                    ...this.partOf._features
                };
                this._features = Object.assign(s, i || {});
            } else if (this.declaringField) ;
            else if (this.parent) {
                const n = {
                    ...this.parent._features
                };
                this._features = Object.assign(n, i || {});
            } else {
                throw Error(`Unable to find a parent for ${this.fullName}`);
            }
            if (this.extensionField) {
                this.extensionField._features = this._features;
            }
            this._featuresResolved = true;
        }
        _inferLegacyProtoFeatures() {
            return {};
        }
        getOption(t) {
            if (this.options) {
                return this.options[t];
            }
        }
        setOption(t, r, i) {
            if (t === "__proto__") {
                return this;
            }
            if (!this.options) {
                this.options = {};
            }
            if (/^features\./.test(t)) {
                Di.setProperty(this.options, t, r, i);
            } else if (!i || this.options[t] === undefined) {
                if (this.getOption(t) !== r) {
                    this.resolved = false;
                }
                this.options[t] = r;
            }
            return this;
        }
        setParsedOption(t, r, i) {
            if (t === "__proto__") {
                return this;
            }
            if (!this.parsedOptions) {
                this.parsedOptions = [];
            }
            const parsedOptions = this.parsedOptions;
            if (i) {
                let n = parsedOptions.find((l)=>Object.prototype.hasOwnProperty.call(l, t));
                if (n) {
                    const a = n[t];
                    Di.setProperty(a, i, r);
                } else {
                    n = {};
                    n[t] = Di.setProperty({}, i, r);
                    parsedOptions.push(n);
                }
            } else {
                const o = {};
                o[t] = r;
                parsedOptions.push(o);
            }
            return this;
        }
        setOptions(t, r) {
            if (t) {
                for(let i = Object.keys(t), s = 0; s < i.length; ++s){
                    this.setOption(i[s], t[i[s]], r);
                }
            }
            return this;
        }
        toString() {
            const className = this.constructor.className;
            const fullName = this.fullName;
            if (fullName.length) {
                return `${className} ${fullName}`;
            }
            return className;
        }
        _editionToJSON() {
            if (!this._edition || this._edition === "proto3") {
                return;
            }
            return this._edition;
        }
        static _configure(e) {
            Ls = e;
        }
    }
    Fd.exports = ye;
    ye.className = "ReflectionObject";
    Object.defineProperties(ye.prototype, {
        root: {
            get: function() {
                let e = this;
                while(e.parent !== null){
                    e = e.parent;
                }
                return e;
            }
        },
        fullName: {
            get: function() {
                const e = [
                    this.name
                ];
                let parent = this.parent;
                while(parent){
                    e.unshift(parent.name);
                    parent = parent.parent;
                }
                return e.join(".");
            }
        }
    });
});
var nt = C(function(_A, Ud) {
    var io = Kt();
    const qd = zr();
    const Fs = de();
    class at extends io {
        constructor(e, t, r, i, s, n){
            super(e, r);
            if (t && typeof t !== "object") {
                throw TypeError("values must be an object");
            }
            this.valuesById = {};
            this.values = Object.create(this.valuesById);
            this.comment = i;
            this.comments = s || {};
            this.valuesOptions = n;
            this._valuesFeatures = {};
            this.reserved = undefined;
            if (t) {
                for(let a = Object.keys(t), o = 0; o < a.length; ++o){
                    if (a[o] !== "__proto__" && typeof t[a[o]] === "number") {
                        this.valuesById[this.values[a[o]] = t[a[o]]] = a[o];
                    }
                }
            }
        }
        _resolveFeatures(t) {
            t = this._edition || t;
            io.prototype._resolveFeatures.call(this, t);
            Object.keys(this.values).forEach((r)=>{
                var i = {
                    ...this._features
                };
                this._valuesFeatures[r] = Object.assign(i, this.valuesOptions && this.valuesOptions[r] && this.valuesOptions[r].features);
            });
            return this;
        }
        static fromJSON(t, r) {
            const i = new at(t, r.values, r.options, r.comment, r.comments);
            i.reserved = r.reserved;
            if (r.edition) {
                i._edition = r.edition;
            }
            i._defaultEdition = "proto3";
            return i;
        }
        toJSON(t) {
            const r = t ? Boolean(t.keepComments) : false;
            return Fs.toObject([
                "edition",
                this._editionToJSON(),
                "options",
                this.options,
                "valuesOptions",
                this.valuesOptions,
                "values",
                this.values,
                "reserved",
                this.reserved && this.reserved.length ? this.reserved : undefined,
                "comment",
                r ? this.comment : undefined,
                "comments",
                r ? this.comments : undefined
            ]);
        }
        add(t, r, i, s) {
            if (!Fs.isString(t)) {
                throw TypeError("name must be a string");
            }
            if (!Fs.isInteger(r)) {
                throw TypeError("id must be an integer");
            }
            if (t === "__proto__") {
                return this;
            }
            if (this.values[t] !== undefined) {
                throw Error(`duplicate name '${t}' in ${this}`);
            }
            if (this.isReservedId(r)) {
                throw Error(`id ${r} is reserved in ${this}`);
            }
            if (this.isReservedName(t)) {
                throw Error(`name '${t}' is reserved in ${this}`);
            }
            if (this.valuesById[r] !== undefined) {
                if (!(this.options && this.options.allow_alias)) {
                    throw Error(`duplicate id ${r} in ${this}`);
                }
                this.values[t] = r;
            } else {
                this.valuesById[this.values[t] = r] = t;
            }
            if (s) {
                if (this.valuesOptions === undefined) {
                    this.valuesOptions = {};
                }
                this.valuesOptions[t] = s || null;
            }
            this.comments[t] = i || null;
            return this;
        }
        remove(t) {
            if (!Fs.isString(t)) {
                throw TypeError("name must be a string");
            }
            const r = this.values[t];
            if (r == null) {
                throw Error(`name '${t}' does not exist in ${this}`);
            }
            delete this.valuesById[r];
            delete this.values[t];
            delete this.comments[t];
            if (this.valuesOptions) {
                delete this.valuesOptions[t];
            }
            return this;
        }
        isReservedId(t) {
            return qd.isReservedId(this.reserved, t);
        }
        isReservedName(t) {
            return qd.isReservedName(this.reserved, t);
        }
    }
    Ud.exports = at;
    at.className = "Enum";
});
var Ja = C(function(SA, zd) {
    zd.exports = BE;
    var UE = nt();
    var so = Cr();
    var no = de();
    function Bd(e, t, r, i) {
        if (t.delimited) {
            return e("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", r, i, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0);
        }
        return e("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", r, i, (t.id << 3 | 2) >>> 0);
    }
    function BE(e) {
        const t = no.codegen([
            "m",
            "w"
        ], `${e.name}\$encode`)("if(!w)")("w=Writer.create()");
        var r;
        let i;
        const s = e.fieldsArray.slice().sort(no.compareFieldsById);
        for(var r = 0; r < s.length; ++r){
            const n = s[r].resolve();
            const a = e._fieldsArray.indexOf(n);
            const o = n.resolvedType instanceof UE ? "int32" : n.type;
            const l = so.basic[o];
            i = `m${no.safeProp(n.name)}`;
            if (n.map) {
                t("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", i, n.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", i)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (n.id << 3 | 2) >>> 0, 8 | so.mapKey[n.keyType], n.keyType);
                if (l === undefined) {
                    t("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", a, i);
                } else {
                    t(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | l, o, i);
                }
                t("}")("}");
            } else if (n.repeated) {
                t("if(%s!=null&&%s.length){", i, i);
                if (n.packed && so.packed[o] !== undefined) {
                    t("w.uint32(%i).fork()", (n.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", i)("w.%s(%s[i])", o, i)("w.ldelim()");
                } else {
                    t("for(var i=0;i<%s.length;++i)", i);
                    if (l === undefined) {
                        Bd(t, n, a, `${i}[i]`);
                    } else {
                        t("w.uint32(%i).%s(%s[i])", (n.id << 3 | l) >>> 0, o, i);
                    }
                }
                t("}");
            } else {
                if (n.optional) {
                    t("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", i, n.name);
                }
                if (l === undefined) {
                    Bd(t, n, a, i);
                } else {
                    t("w.uint32(%i).%s(%s)", (n.id << 3 | l) >>> 0, o, i);
                }
            }
        }
        return t("return w");
    }
});
const Wd = C(function(CA, Hd) {
    const z = Hd.exports = lWr();
    z.build = "light";
    function zE(e, t, r) {
        if (typeof t === "function") {
            r = t;
            t = new z.Root;
        } else if (!t) {
            t = new z.Root;
        }
        return t.load(e, r);
    }
    z.load = zE;
    function HE(e, t) {
        if (!t) {
            t = new z.Root;
        }
        return t.loadSync(e);
    }
    z.loadSync = HE;
    z.encoder = Ja();
    z.decoder = Ua();
    z.verifier = Ha();
    z.converter = Ga();
    z.ReflectionObject = Kt();
    z.Namespace = zr();
    z.Root = xs();
    z.Enum = nt();
    z.Type = Ps();
    z.Field = Yt();
    z.OneOf = Sr();
    z.MapField = Ts();
    z.Service = bs();
    z.Method = Rs();
    z.Message = Os();
    z.wrappers = $a();
    z.types = Cr();
    z.util = de();
    z.ReflectionObject._configure(z.Root);
    z.Namespace._configure(z.Type, z.Service, z.Enum);
    z.Root._configure(z.Type);
    z.Field._configure(z.Type);
});
const oo = C(function(EA, $d) {
    $d.exports = Gd;
    var ao = /[\s{}=;:[\],'"()<>]/g;
    var WE = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
    var jE = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
    var GE = /^ *[*/]+ */;
    var $E = /^\s*\*?\/*/;
    var VE = /\n/g;
    var YE = /\s/;
    var KE = /\\(.?)/g;
    var JE = {
        0: "\x00",
        r: "\r",
        n: `
`,
        t: "\t"
    };
    function jd(e) {
        return e.replace(KE, (t, r)=>{
            switch(r){
                case "\\":
                case "":
                    return r;
                default:
                    return JE[r] || "";
            }
        });
    }
    Gd.unescape = jd;
    function Gd(e, t) {
        e = e.toString();
        let r = 0;
        const e_length = e.length;
        let s = 1;
        let n = 0;
        const a = {};
        const o = [];
        let l = null;
        function c(v) {
            return Error(`illegal ${v} (line ${s})`);
        }
        function u() {
            const v = l === "'" ? jE : WE;
            v.lastIndex = r - 1;
            const U = v.exec(e);
            if (!U) {
                throw c("string");
            }
            r = v.lastIndex;
            push(l);
            l = null;
            return jd(U[1]);
        }
        function d(v) {
            return e.charAt(v);
        }
        function h(v, U, leading) {
            const W = {
                type: e.charAt(v++),
                lineEmpty: false,
                leading
            };
            let X;
            if (t) {
                X = 2;
            } else {
                X = 3;
            }
            let D = v - X;
            let le;
            do {
                if (--D < 0 || (le = e.charAt(D)) === `
`) {
                    W.lineEmpty = true;
                    break;
                }
            }while (le === " " || le === "\t")
            const Ue = e.substring(v, U).split(VE);
            for(let Ze = 0; Ze < Ue.length; ++Ze){
                Ue[Ze] = Ue[Ze].replace(t ? $E : GE, "").trim();
            }
            W.text = Ue.join(`
`).trim();
            a[s] = W;
            n = s;
        }
        function m(v) {
            const U = f(v);
            const w = e.substring(v, U);
            const W = /^\s*\/\//.test(w);
            return W;
        }
        function f(v) {
            let U = v;
            while(U < e_length && d(U) !== `
`){
                U++;
            }
            return U;
        }
        function next() {
            if (o.length > 0) {
                return o.shift();
            }
            if (l) {
                return u();
            }
            let v;
            let U;
            let w;
            let W;
            let X;
            let D = r === 0;
            do {
                if (r === e_length) {
                    return null;
                }
                v = false;
                while(YE.test(w = d(r))){
                    if (w === `
`) {
                        D = true;
                        ++s;
                    }
                    if (++r === e_length) {
                        return null;
                    }
                }
                if (d(r) === "/") {
                    if (++r === e_length) {
                        throw c("comment");
                    }
                    if (d(r) === "/") {
                        if (!t) {
                            X = d(W = r + 1) === "/";
                            while(d(++r) !== `
`){
                                if (r === e_length) {
                                    return null;
                                }
                            }
                            ++r;
                            if (X) {
                                h(W, r - 1, D);
                                D = true;
                            }
                            ++s;
                            v = true;
                        } else {
                            W = r;
                            X = false;
                            if (m(r - 1)) {
                                X = true;
                                do {
                                    r = f(r);
                                    if (r === e_length) {
                                        break;
                                    }
                                    r++;
                                    if (!D) {
                                        break;
                                    }
                                }while (m(r))
                            } else {
                                r = Math.min(e_length, f(r) + 1);
                            }
                            if (X) {
                                h(W, r, D);
                                D = true;
                            }
                            s++;
                            v = true;
                        }
                    } else if ((w = d(r)) === "*") {
                        W = r + 1;
                        X = t || d(W) === "*";
                        do {
                            if (w === `
`) {
                                ++s;
                            }
                            if (++r === e_length) {
                                throw c("comment");
                            }
                            U = w;
                            w = d(r);
                        }while (U !== "*" || w !== "/")
                        ++r;
                        if (X) {
                            h(W, r - 2, D);
                            D = true;
                        }
                        v = true;
                    } else {
                        return "/";
                    }
                }
            }while (v)
            let le = r;
            ao.lastIndex = 0;
            const Ue = ao.test(d(le++));
            if (!Ue) {
                while(le < e_length && !ao.test(d(le))){
                    ++le;
                }
            }
            const Ze = e.substring(r, r = le);
            if (Ze === '"' || Ze === "'") {
                l = Ze;
            }
            return Ze;
        }
        function push(v) {
            o.push(v);
        }
        function peek() {
            if (!o.length) {
                const v = next();
                if (v === null) {
                    return null;
                }
                push(v);
            }
            return o[0];
        }
        function skip(v, U) {
            const w = peek();
            const W = w === v;
            if (W) {
                next();
                return true;
            }
            if (!U) {
                throw c(`token '${w}', '${v}' expected`);
            }
            return false;
        }
        function cmnt(v) {
            let U = null;
            let w;
            if (v === undefined) {
                w = a[s - 1];
                delete a[s - 1];
                if (w && (t || w.type === "*" || w.lineEmpty)) {
                    U = w.leading ? w.text : null;
                }
            } else {
                if (n < v) {
                    peek();
                }
                w = a[v];
                delete a[v];
                if (w && !w.lineEmpty && (t || w.type === "/")) {
                    U = w.leading ? null : w.text;
                }
            }
            return U;
        }
        return Object.defineProperty({
            next,
            peek,
            push,
            skip,
            cmnt
        }, "line", {
            get: function() {
                return s;
            }
        });
    }
});
const Qd = C(function(TA, Xd) {
    Xd.exports = Bt;
    Bt.filename = null;
    Bt.defaults = {
        keepCase: false
    };
    var XE = oo();
    var Vd = xs();
    var Yd = Ps();
    var Kd = Yt();
    var QE = Ts();
    var Jd = Sr();
    var ZE = nt();
    var eT = bs();
    var tT = Rs();
    var rT = Kt();
    var iT = Cr();
    var yt = de();
    var sT = /^[1-9][0-9]*$/;
    var nT = /^-?[1-9][0-9]*$/;
    var aT = /^0[x][0-9a-fA-F]+$/;
    var oT = /^-?0[x][0-9a-fA-F]+$/;
    var lT = /^0[0-7]+$/;
    var cT = /^-?0[0-7]+$/;
    var numberRe = yt.patterns.numberRe;
    var mt = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
    var typeRefRe = yt.patterns.typeRefRe;
    function Bt(e, root, r) {
        if (!(root instanceof Vd)) {
            r = root;
            root = new Vd;
        }
        if (!r) {
            r = Bt.defaults;
        }
        const i = r.preferTrailingComment || false;
        const s = XE(e, r.alternateCommentMode || false);
        const { next, push, peek, skip, cmnt } = s;
        let u = true;
        let d;
        let imports;
        let weakImports;
        let f = "proto2";
        let y = root;
        const E = [];
        const T = {};
        const P = r.keepCase ? (g)=>g : yt.camelCase;
        function te() {
            E.forEach((g)=>{
                g._edition = f;
                Object.keys(T).forEach((p)=>{
                    if (g.getOption(p) !== undefined) {
                        return;
                    }
                    g.setOption(p, T[p], true);
                });
            });
        }
        function v(g, p, _) {
            const Bt_filename = Bt.filename;
            if (!_) {
                Bt.filename = null;
            }
            return Error(`illegal ${p || "token"} '${g}' (${Bt_filename ? `${Bt_filename}, ` : ""}line ${s.line})`);
        }
        function U() {
            const g = [];
            let p;
            do {
                if ((p = next()) !== '"' && p !== "'") {
                    throw v(p);
                }
                g.push(next());
                skip(p);
                p = peek();
            }while (p === '"' || p === "'")
            return g.join("");
        }
        function w(g) {
            const p = next();
            switch(p){
                case "'":
                case '"':
                    push(p);
                    return U();
                case "true":
                case "TRUE":
                    return true;
                case "false":
                case "FALSE":
                    return false;
            }
            try {
                return X(p, true);
            } catch (_) {
                if (g && typeRefRe.test(p)) {
                    return p;
                }
                throw v(p, "value");
            }
        }
        function W(g, p) {
            let _;
            let S;
            do {
                if (p && ((_ = peek()) === '"' || _ === "'")) {
                    const A = U();
                    g.push(A);
                    if (f >= 2023) {
                        throw v(A, "id");
                    }
                } else {
                    try {
                        g.push([
                            S = D(next()),
                            skip("to", true) ? D(next()) : S
                        ]);
                    } catch (error) {
                        if (p && typeRefRe.test(_) && f >= 2023) {
                            g.push(_);
                        } else {
                            throw error;
                        }
                    }
                }
            }while (skip(",", true))
            const R = {
                options: undefined
            };
            R.setOption = function(I, ce) {
                if (this.options === undefined) {
                    this.options = {};
                }
                this.options[I] = ce;
            };
            et(R, (ce)=>{
                if (ce === "option") {
                    tt(R, ce);
                    skip(";");
                } else {
                    throw v(ce);
                }
            }, function() {
                Xi(R);
            });
        }
        function X(g, p) {
            let _ = 1;
            if (g.charAt(0) === "-") {
                _ = -1;
                g = g.substring(1);
            }
            switch(g){
                case "inf":
                case "INF":
                case "Inf":
                    return _ * Infinity;
                case "nan":
                case "NAN":
                case "Nan":
                case "NaN":
                    return NaN;
                case "0":
                    return 0;
            }
            if (sT.test(g)) {
                return _ * parseInt(g, 10);
            }
            if (aT.test(g)) {
                return _ * parseInt(g, 16);
            }
            if (lT.test(g)) {
                return _ * parseInt(g, 8);
            }
            if (numberRe.test(g)) {
                return _ * parseFloat(g);
            }
            throw v(g, "number", p);
        }
        function D(g, p) {
            switch(g){
                case "max":
                case "MAX":
                case "Max":
                    return 536870911;
                case "0":
                    return 0;
            }
            if (!p && g.charAt(0) === "-") {
                throw v(g, "id");
            }
            if (nT.test(g)) {
                return parseInt(g, 10);
            }
            if (oT.test(g)) {
                return parseInt(g, 16);
            }
            if (cT.test(g)) {
                return parseInt(g, 8);
            }
            throw v(g, "id");
        }
        function le() {
            if (d !== undefined) {
                throw v("package");
            }
            d = next();
            if (!typeRefRe.test(d)) {
                throw v(d, "name");
            }
            y = y.define(d);
            skip(";");
        }
        function Ue() {
            let g = peek();
            let p;
            switch(g){
                case "weak":
                    p = weakImports || (weakImports = []);
                    next();
                    break;
                case "public":
                    next();
                default:
                    p = imports || (imports = []);
                    break;
            }
            g = U();
            skip(";");
            p.push(g);
        }
        function Ze() {
            skip("=");
            f = U();
            if (f < 2023) {
                throw v(f, "syntax");
            }
            skip(";");
        }
        function by() {
            skip("=");
            f = U();
            if (![
                "2023"
            ].includes(f)) {
                throw v(f, "edition");
            }
            skip(";");
        }
        function ea(g, p, _) {
            _ = yt.checkDepth(_);
            switch(p){
                case "option":
                    tt(g, p);
                    skip(";");
                    return true;
                case "message":
                    dl(g, p, _ + 1);
                    return true;
                case "enum":
                    hl(g, p);
                    return true;
                case "service":
                    My(g, p, _ + 1);
                    return true;
                case "extend":
                    xy(g, p, _);
                    return true;
            }
            return false;
        }
        function et(g, p, _) {
            const s_line = s.line;
            if (g) {
                if (typeof g.comment !== "string") {
                    g.comment = cmnt();
                }
                g.filename = Bt.filename;
            }
            if (skip("{", true)) {
                let A;
                while((A = next()) !== "}"){
                    p(A);
                }
                skip(";", true);
            } else {
                if (_) {
                    _();
                }
                skip(";");
                if (g && (typeof g.comment !== "string" || i)) {
                    g.comment = cmnt(s_line) || g.comment;
                }
            }
        }
        function dl(g, p, _) {
            _ = yt.checkDepth(_);
            if (!mt.test(p = next())) {
                throw v(p, "type name");
            }
            const S = new Yd(p);
            et(S, (R)=>{
                if (ea(S, R, _)) {
                    return;
                }
                switch(R){
                    case "map":
                        wy(S, R);
                        break;
                    case "required":
                        if (f !== "proto2") {
                            throw v(R);
                        }
                    case "repeated":
                        Be(S, R, undefined, _ + 1);
                        break;
                    case "optional":
                        if (f === "proto3") {
                            Be(S, "proto3_optional", undefined, _ + 1);
                        } else if (f !== "proto2") {
                            throw v(R);
                        } else {
                            Be(S, "optional", undefined, _ + 1);
                        }
                        break;
                    case "oneof":
                        Ay(S, R, _ + 1);
                        break;
                    case "extensions":
                        W(S.extensions || (S.extensions = []));
                        break;
                    case "reserved":
                        W(S.reserved || (S.reserved = []), true);
                        break;
                    default:
                        if (f === "proto2" || !typeRefRe.test(R)) {
                            throw v(R);
                        }
                        push(R);
                        Be(S, "optional", undefined, _ + 1);
                        break;
                }
            });
            g.add(S);
            if (g === y) {
                E.push(S);
            }
        }
        function Be(g, p, _, S) {
            let A = next();
            if (A === "group") {
                Oy(g, p, S);
                return;
            }
            while(A.endsWith(".") || peek().startsWith(".")){
                A += next();
            }
            if (!typeRefRe.test(A)) {
                throw v(A, "type");
            }
            let R = next();
            if (!mt.test(R)) {
                throw v(R, "name");
            }
            R = P(R);
            skip("=");
            const I = new Kd(R, D(next()), A, p, _);
            et(I, (Oe)=>{
                if (Oe === "option") {
                    tt(I, Oe);
                    skip(";");
                } else {
                    throw v(Oe);
                }
            }, function() {
                Xi(I);
            });
            if (p === "proto3_optional") {
                const ce = new Jd(`_${R}`);
                I.setOption("proto3_optional", true);
                ce.add(I);
                g.add(ce);
            } else {
                g.add(I);
            }
            if (g === y) {
                E.push(I);
            }
        }
        function Oy(g, p, _) {
            _ = yt.checkDepth(_);
            if (f >= 2023) {
                throw v("group");
            }
            let S = next();
            if (!mt.test(S)) {
                throw v(S, "name");
            }
            const A = yt.lcFirst(S);
            if (S === A) {
                S = yt.ucFirst(S);
            }
            skip("=");
            const R = D(next());
            const I = new Yd(S);
            I.group = true;
            const ce = new Kd(A, R, S, p);
            ce.filename = Bt.filename;
            et(I, (Oe)=>{
                switch(Oe){
                    case "option":
                        tt(I, Oe);
                        skip(";");
                        break;
                    case "required":
                    case "repeated":
                        Be(I, Oe, undefined, _ + 1);
                        break;
                    case "optional":
                        if (f === "proto3") {
                            Be(I, "proto3_optional", undefined, _ + 1);
                        } else {
                            Be(I, "optional", undefined, _ + 1);
                        }
                        break;
                    case "message":
                        dl(I, Oe, _ + 1);
                        break;
                    case "enum":
                        hl(I, Oe);
                        break;
                    case "reserved":
                        W(I.reserved || (I.reserved = []), true);
                        break;
                    default:
                        throw v(Oe);
                }
            });
            g.add(I).add(ce);
        }
        function wy(g) {
            skip("<");
            const p = next();
            if (iT.mapKey[p] === undefined) {
                throw v(p, "type");
            }
            skip(",");
            const _ = next();
            if (!typeRefRe.test(_)) {
                throw v(_, "type");
            }
            skip(">");
            const S = next();
            if (!mt.test(S)) {
                throw v(S, "name");
            }
            skip("=");
            const A = new QE(P(S), D(next()), p, _);
            et(A, (I)=>{
                if (I === "option") {
                    tt(A, I);
                    skip(";");
                } else {
                    throw v(I);
                }
            }, function() {
                Xi(A);
            });
            g.add(A);
        }
        function Ay(g, p, _) {
            if (!mt.test(p = next())) {
                throw v(p, "name");
            }
            const S = new Jd(P(p));
            et(S, (R)=>{
                if (R === "option") {
                    tt(S, R);
                    skip(";");
                } else {
                    push(R);
                    Be(S, "optional", undefined, _);
                }
            });
            g.add(S);
        }
        function hl(g, p) {
            if (!mt.test(p = next())) {
                throw v(p, "name");
            }
            const _ = new ZE(p);
            et(_, (A)=>{
                switch(A){
                    case "option":
                        tt(_, A);
                        skip(";");
                        break;
                    case "reserved":
                        W(_.reserved || (_.reserved = []), true);
                        if (_.reserved === undefined) {
                            _.reserved = [];
                        }
                        break;
                    default:
                        Py(_, A);
                }
            });
            g.add(_);
            if (g === y) {
                E.push(_);
            }
        }
        function Py(g, p) {
            if (!mt.test(p)) {
                throw v(p, "name");
            }
            skip("=");
            const _ = D(next(), true);
            const S = {
                options: undefined
            };
            S.getOption = function(A) {
                return this.options[A];
            };
            S.setOption = function(A, R) {
                rT.prototype.setOption.call(S, A, R);
            };
            S.setParsedOption = function() {};
            et(S, (R)=>{
                if (R === "option") {
                    tt(S, R);
                    skip(";");
                } else {
                    throw v(R);
                }
            }, function() {
                Xi(S);
            });
            g.add(p, _, S.comment, S.parsedOptions || S.options);
        }
        function tt(g, p) {
            let _;
            let S;
            let A = true;
            if (p === "option") {
                p = next();
            }
            while(p !== "="){
                if (p === "(") {
                    const R = next();
                    skip(")");
                    p = `(${R})`;
                }
                if (A) {
                    A = false;
                    if (p.includes(".") && !p.includes("(")) {
                        const I = p.split(".");
                        _ = `${I[0]}.`;
                        p = I[1];
                        continue;
                    }
                    _ = p;
                } else {
                    S = S ? S += p : p;
                }
                p = next();
            }
            const ce = S ? _.concat(S) : _;
            const ct = fl(g, ce);
            S = S && S[0] === "." ? S.slice(1) : S;
            _ = _ && _[_.length - 1] === "." ? _.slice(0, -1) : _;
            Ny(g, _, ct, S);
        }
        function fl(g, p, _) {
            _ = yt.checkDepth(_);
            if (skip("{", true)) {
                const S = {};
                while(!skip("}", true)){
                    if (!mt.test(me = next())) {
                        throw v(me, "name");
                    }
                    if (me === null) {
                        throw v(me, "end of input");
                    }
                    let A;
                    const R = me;
                    skip(":", true);
                    if (peek() === "{") {
                        A = fl(g, `${p}.${me}`, _ + 1);
                    } else if (peek() === "[") {
                        A = [];
                        let I;
                        if (skip("[", true)) {
                            do {
                                I = w(true);
                                A.push(I);
                            }while (skip(",", true))
                            skip("]");
                            if (typeof I !== "undefined") {
                                ta(g, `${p}.${me}`, I);
                            }
                        }
                    } else {
                        A = w(true);
                        ta(g, `${p}.${me}`, A);
                    }
                    const ce = S[R];
                    if (ce) {
                        A = [].concat(ce).concat(A);
                    }
                    if (R !== "__proto__") {
                        S[R] = A;
                    }
                    skip(",", true);
                    skip(";", true);
                }
                return S;
            }
            const ct = w(true);
            ta(g, p, ct);
            return ct;
        }
        function ta(g, p, _) {
            if (y === g && /^features\./.test(p)) {
                T[p] = _;
                return;
            }
            if (g.setOption) {
                g.setOption(p, _);
            }
        }
        function Ny(g, p, _, S) {
            if (g.setParsedOption) {
                g.setParsedOption(p, _, S);
            }
        }
        function Xi(g) {
            if (skip("[", true)) {
                do {
                    tt(g, "option");
                }while (skip(",", true))
                skip("]");
            }
            return g;
        }
        function My(g, p, _) {
            _ = yt.checkDepth(_);
            if (!mt.test(p = next())) {
                throw v(p, "service name");
            }
            const S = new eT(p);
            et(S, (R)=>{
                if (ea(S, R, _)) {
                    return;
                }
                if (R === "rpc") {
                    Iy(S, R);
                } else {
                    throw v(R);
                }
            });
            g.add(S);
            if (g === y) {
                E.push(S);
            }
        }
        function Iy(g, p) {
            const _ = cmnt();
            const S = p;
            if (!mt.test(p = next())) {
                throw v(p, "name");
            }
            const A = p;
            let R;
            let I;
            let ce;
            let ct;
            skip("(");
            if (skip("stream", true)) {
                I = true;
            }
            if (!typeRefRe.test(p = next())) {
                throw v(p);
            }
            R = p;
            skip(")");
            skip("returns");
            skip("(");
            if (skip("stream", true)) {
                ct = true;
            }
            if (!typeRefRe.test(p = next())) {
                throw v(p);
            }
            ce = p;
            skip(")");
            const Oe = new tT(A, S, R, ce, I, ct);
            Oe.comment = _;
            et(Oe, (ra)=>{
                if (ra === "option") {
                    tt(Oe, ra);
                    skip(";");
                } else {
                    throw v(ra);
                }
            });
            g.add(Oe);
        }
        function xy(g, p, _) {
            if (!typeRefRe.test(p = next())) {
                throw v(p, "reference");
            }
            const S = p;
            et(null, (R)=>{
                switch(R){
                    case "required":
                    case "repeated":
                        Be(g, R, S, _ + 1);
                        break;
                    case "optional":
                        if (f === "proto3") {
                            Be(g, "proto3_optional", S, _ + 1);
                        } else {
                            Be(g, "optional", S, _ + 1);
                        }
                        break;
                    default:
                        if (f === "proto2" || !typeRefRe.test(R)) {
                            throw v(R);
                        }
                        push(R);
                        Be(g, "optional", S, _ + 1);
                        break;
                }
            });
        }
        var me;
        while((me = next()) !== null){
            switch(me){
                case "package":
                    if (!u) {
                        throw v(me);
                    }
                    le();
                    break;
                case "import":
                    if (!u) {
                        throw v(me);
                    }
                    Ue();
                    break;
                case "syntax":
                    if (!u) {
                        throw v(me);
                    }
                    Ze();
                    break;
                case "edition":
                    if (!u) {
                        throw v(me);
                    }
                    by();
                    break;
                case "option":
                    tt(y, me);
                    skip(";", true);
                    break;
                default:
                    if (ea(y, me, 0)) {
                        u = false;
                        continue;
                    }
                    throw v(me);
            }
        }
        te();
        Bt.filename = null;
        return {
            package: d,
            imports,
            weakImports,
            root
        };
    }
});
const th = C(function(RA, eh) {
    eh.exports = ot;
    var dT = /\/|\./;
    function ot(e, nested) {
        if (!dT.test(e)) {
            e = `google/protobuf/${e}.proto`;
            nested = {
                nested: {
                    google: {
                        nested: {
                            protobuf: {
                                nested
                            }
                        }
                    }
                }
            };
        }
        ot[e] = nested;
    }
    ot("any", {
        Any: {
            fields: {
                type_url: {
                    type: "string",
                    id: 1
                },
                value: {
                    type: "bytes",
                    id: 2
                }
            }
        }
    });
    let Timestamp;
    ot("duration", {
        Duration: Timestamp = {
            fields: {
                seconds: {
                    type: "int64",
                    id: 1
                },
                nanos: {
                    type: "int32",
                    id: 2
                }
            }
        }
    });
    ot("timestamp", {
        Timestamp
    });
    ot("empty", {
        Empty: {
            fields: {}
        }
    });
    ot("struct", {
        Struct: {
            fields: {
                fields: {
                    keyType: "string",
                    type: "Value",
                    id: 1
                }
            }
        },
        Value: {
            oneofs: {
                kind: {
                    oneof: [
                        "nullValue",
                        "numberValue",
                        "stringValue",
                        "boolValue",
                        "structValue",
                        "listValue"
                    ]
                }
            },
            fields: {
                nullValue: {
                    type: "NullValue",
                    id: 1
                },
                numberValue: {
                    type: "double",
                    id: 2
                },
                stringValue: {
                    type: "string",
                    id: 3
                },
                boolValue: {
                    type: "bool",
                    id: 4
                },
                structValue: {
                    type: "Struct",
                    id: 5
                },
                listValue: {
                    type: "ListValue",
                    id: 6
                }
            }
        },
        NullValue: {
            values: {
                NULL_VALUE: 0
            }
        },
        ListValue: {
            fields: {
                values: {
                    rule: "repeated",
                    type: "Value",
                    id: 1
                }
            }
        }
    });
    ot("wrappers", {
        DoubleValue: {
            fields: {
                value: {
                    type: "double",
                    id: 1
                }
            }
        },
        FloatValue: {
            fields: {
                value: {
                    type: "float",
                    id: 1
                }
            }
        },
        Int64Value: {
            fields: {
                value: {
                    type: "int64",
                    id: 1
                }
            }
        },
        UInt64Value: {
            fields: {
                value: {
                    type: "uint64",
                    id: 1
                }
            }
        },
        Int32Value: {
            fields: {
                value: {
                    type: "int32",
                    id: 1
                }
            }
        },
        UInt32Value: {
            fields: {
                value: {
                    type: "uint32",
                    id: 1
                }
            }
        },
        BoolValue: {
            fields: {
                value: {
                    type: "bool",
                    id: 1
                }
            }
        },
        StringValue: {
            fields: {
                value: {
                    type: "string",
                    id: 1
                }
            }
        },
        BytesValue: {
            fields: {
                value: {
                    type: "bytes",
                    id: 1
                }
            }
        }
    });
    ot("field_mask", {
        FieldMask: {
            fields: {
                paths: {
                    rule: "repeated",
                    type: "string",
                    id: 1
                }
            }
        }
    });
    ot.get = function(t) {
        return ot[t] || null;
    };
});
const qs = C(function(bA, rh) {
    const Jt = rh.exports = Wd();
    Jt.build = "full";
    Jt.tokenize = oo();
    Jt.parse = Qd();
    Jt.common = th();
    Jt.Root._configure(Jt.Type, Jt.parse, Jt.common);
});
const lo = C(function(OA, hT) {
    hT.exports = {
        nested: {
            google: {
                nested: {
                    protobuf: {
                        options: {
                            go_package: "google.golang.org/protobuf/types/descriptorpb",
                            java_package: "com.google.protobuf",
                            java_outer_classname: "DescriptorProtos",
                            csharp_namespace: "Google.Protobuf.Reflection",
                            objc_class_prefix: "GPB",
                            cc_enable_arenas: true,
                            optimize_for: "SPEED"
                        },
                        nested: {
                            FileDescriptorSet: {
                                edition: "proto2",
                                fields: {
                                    file: {
                                        rule: "repeated",
                                        type: "FileDescriptorProto",
                                        id: 1
                                    }
                                },
                                extensions: [
                                    [
                                        536000000,
                                        536000000
                                    ]
                                ]
                            },
                            Edition: {
                                edition: "proto2",
                                values: {
                                    EDITION_UNKNOWN: 0,
                                    EDITION_LEGACY: 900,
                                    EDITION_PROTO2: 998,
                                    EDITION_PROTO3: 999,
                                    EDITION_2023: 1000,
                                    EDITION_2024: 1001,
                                    EDITION_1_TEST_ONLY: 1,
                                    EDITION_2_TEST_ONLY: 2,
                                    EDITION_99997_TEST_ONLY: 99997,
                                    EDITION_99998_TEST_ONLY: 99998,
                                    EDITION_99999_TEST_ONLY: 99999,
                                    EDITION_MAX: 2147483647
                                }
                            },
                            FileDescriptorProto: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    package: {
                                        type: "string",
                                        id: 2
                                    },
                                    dependency: {
                                        rule: "repeated",
                                        type: "string",
                                        id: 3
                                    },
                                    publicDependency: {
                                        rule: "repeated",
                                        type: "int32",
                                        id: 10
                                    },
                                    weakDependency: {
                                        rule: "repeated",
                                        type: "int32",
                                        id: 11
                                    },
                                    optionDependency: {
                                        rule: "repeated",
                                        type: "string",
                                        id: 15
                                    },
                                    messageType: {
                                        rule: "repeated",
                                        type: "DescriptorProto",
                                        id: 4
                                    },
                                    enumType: {
                                        rule: "repeated",
                                        type: "EnumDescriptorProto",
                                        id: 5
                                    },
                                    service: {
                                        rule: "repeated",
                                        type: "ServiceDescriptorProto",
                                        id: 6
                                    },
                                    extension: {
                                        rule: "repeated",
                                        type: "FieldDescriptorProto",
                                        id: 7
                                    },
                                    options: {
                                        type: "FileOptions",
                                        id: 8
                                    },
                                    sourceCodeInfo: {
                                        type: "SourceCodeInfo",
                                        id: 9
                                    },
                                    syntax: {
                                        type: "string",
                                        id: 12
                                    },
                                    edition: {
                                        type: "Edition",
                                        id: 14
                                    }
                                }
                            },
                            DescriptorProto: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    field: {
                                        rule: "repeated",
                                        type: "FieldDescriptorProto",
                                        id: 2
                                    },
                                    extension: {
                                        rule: "repeated",
                                        type: "FieldDescriptorProto",
                                        id: 6
                                    },
                                    nestedType: {
                                        rule: "repeated",
                                        type: "DescriptorProto",
                                        id: 3
                                    },
                                    enumType: {
                                        rule: "repeated",
                                        type: "EnumDescriptorProto",
                                        id: 4
                                    },
                                    extensionRange: {
                                        rule: "repeated",
                                        type: "ExtensionRange",
                                        id: 5
                                    },
                                    oneofDecl: {
                                        rule: "repeated",
                                        type: "OneofDescriptorProto",
                                        id: 8
                                    },
                                    options: {
                                        type: "MessageOptions",
                                        id: 7
                                    },
                                    reservedRange: {
                                        rule: "repeated",
                                        type: "ReservedRange",
                                        id: 9
                                    },
                                    reservedName: {
                                        rule: "repeated",
                                        type: "string",
                                        id: 10
                                    },
                                    visibility: {
                                        type: "SymbolVisibility",
                                        id: 11
                                    }
                                },
                                nested: {
                                    ExtensionRange: {
                                        fields: {
                                            start: {
                                                type: "int32",
                                                id: 1
                                            },
                                            end: {
                                                type: "int32",
                                                id: 2
                                            },
                                            options: {
                                                type: "ExtensionRangeOptions",
                                                id: 3
                                            }
                                        }
                                    },
                                    ReservedRange: {
                                        fields: {
                                            start: {
                                                type: "int32",
                                                id: 1
                                            },
                                            end: {
                                                type: "int32",
                                                id: 2
                                            }
                                        }
                                    }
                                }
                            },
                            ExtensionRangeOptions: {
                                edition: "proto2",
                                fields: {
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    },
                                    declaration: {
                                        rule: "repeated",
                                        type: "Declaration",
                                        id: 2,
                                        options: {
                                            retention: "RETENTION_SOURCE"
                                        }
                                    },
                                    features: {
                                        type: "FeatureSet",
                                        id: 50
                                    },
                                    verification: {
                                        type: "VerificationState",
                                        id: 3,
                                        options: {
                                            default: "UNVERIFIED",
                                            retention: "RETENTION_SOURCE"
                                        }
                                    }
                                },
                                extensions: [
                                    [
                                        1000,
                                        536870911
                                    ]
                                ],
                                nested: {
                                    Declaration: {
                                        fields: {
                                            number: {
                                                type: "int32",
                                                id: 1
                                            },
                                            fullName: {
                                                type: "string",
                                                id: 2
                                            },
                                            type: {
                                                type: "string",
                                                id: 3
                                            },
                                            reserved: {
                                                type: "bool",
                                                id: 5
                                            },
                                            repeated: {
                                                type: "bool",
                                                id: 6
                                            }
                                        },
                                        reserved: [
                                            [
                                                4,
                                                4
                                            ]
                                        ]
                                    },
                                    VerificationState: {
                                        values: {
                                            DECLARATION: 0,
                                            UNVERIFIED: 1
                                        }
                                    }
                                }
                            },
                            FieldDescriptorProto: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    number: {
                                        type: "int32",
                                        id: 3
                                    },
                                    label: {
                                        type: "Label",
                                        id: 4
                                    },
                                    type: {
                                        type: "Type",
                                        id: 5
                                    },
                                    typeName: {
                                        type: "string",
                                        id: 6
                                    },
                                    extendee: {
                                        type: "string",
                                        id: 2
                                    },
                                    defaultValue: {
                                        type: "string",
                                        id: 7
                                    },
                                    oneofIndex: {
                                        type: "int32",
                                        id: 9
                                    },
                                    jsonName: {
                                        type: "string",
                                        id: 10
                                    },
                                    options: {
                                        type: "FieldOptions",
                                        id: 8
                                    },
                                    proto3Optional: {
                                        type: "bool",
                                        id: 17
                                    }
                                },
                                nested: {
                                    Type: {
                                        values: {
                                            TYPE_DOUBLE: 1,
                                            TYPE_FLOAT: 2,
                                            TYPE_INT64: 3,
                                            TYPE_UINT64: 4,
                                            TYPE_INT32: 5,
                                            TYPE_FIXED64: 6,
                                            TYPE_FIXED32: 7,
                                            TYPE_BOOL: 8,
                                            TYPE_STRING: 9,
                                            TYPE_GROUP: 10,
                                            TYPE_MESSAGE: 11,
                                            TYPE_BYTES: 12,
                                            TYPE_UINT32: 13,
                                            TYPE_ENUM: 14,
                                            TYPE_SFIXED32: 15,
                                            TYPE_SFIXED64: 16,
                                            TYPE_SINT32: 17,
                                            TYPE_SINT64: 18
                                        }
                                    },
                                    Label: {
                                        values: {
                                            LABEL_OPTIONAL: 1,
                                            LABEL_REPEATED: 3,
                                            LABEL_REQUIRED: 2
                                        }
                                    }
                                }
                            },
                            OneofDescriptorProto: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    options: {
                                        type: "OneofOptions",
                                        id: 2
                                    }
                                }
                            },
                            EnumDescriptorProto: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    value: {
                                        rule: "repeated",
                                        type: "EnumValueDescriptorProto",
                                        id: 2
                                    },
                                    options: {
                                        type: "EnumOptions",
                                        id: 3
                                    },
                                    reservedRange: {
                                        rule: "repeated",
                                        type: "EnumReservedRange",
                                        id: 4
                                    },
                                    reservedName: {
                                        rule: "repeated",
                                        type: "string",
                                        id: 5
                                    },
                                    visibility: {
                                        type: "SymbolVisibility",
                                        id: 6
                                    }
                                },
                                nested: {
                                    EnumReservedRange: {
                                        fields: {
                                            start: {
                                                type: "int32",
                                                id: 1
                                            },
                                            end: {
                                                type: "int32",
                                                id: 2
                                            }
                                        }
                                    }
                                }
                            },
                            EnumValueDescriptorProto: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    number: {
                                        type: "int32",
                                        id: 2
                                    },
                                    options: {
                                        type: "EnumValueOptions",
                                        id: 3
                                    }
                                }
                            },
                            ServiceDescriptorProto: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    method: {
                                        rule: "repeated",
                                        type: "MethodDescriptorProto",
                                        id: 2
                                    },
                                    options: {
                                        type: "ServiceOptions",
                                        id: 3
                                    }
                                }
                            },
                            MethodDescriptorProto: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    inputType: {
                                        type: "string",
                                        id: 2
                                    },
                                    outputType: {
                                        type: "string",
                                        id: 3
                                    },
                                    options: {
                                        type: "MethodOptions",
                                        id: 4
                                    },
                                    clientStreaming: {
                                        type: "bool",
                                        id: 5
                                    },
                                    serverStreaming: {
                                        type: "bool",
                                        id: 6
                                    }
                                }
                            },
                            FileOptions: {
                                edition: "proto2",
                                fields: {
                                    javaPackage: {
                                        type: "string",
                                        id: 1
                                    },
                                    javaOuterClassname: {
                                        type: "string",
                                        id: 8
                                    },
                                    javaMultipleFiles: {
                                        type: "bool",
                                        id: 10
                                    },
                                    javaGenerateEqualsAndHash: {
                                        type: "bool",
                                        id: 20,
                                        options: {
                                            deprecated: true
                                        }
                                    },
                                    javaStringCheckUtf8: {
                                        type: "bool",
                                        id: 27
                                    },
                                    optimizeFor: {
                                        type: "OptimizeMode",
                                        id: 9,
                                        options: {
                                            default: "SPEED"
                                        }
                                    },
                                    goPackage: {
                                        type: "string",
                                        id: 11
                                    },
                                    ccGenericServices: {
                                        type: "bool",
                                        id: 16
                                    },
                                    javaGenericServices: {
                                        type: "bool",
                                        id: 17
                                    },
                                    pyGenericServices: {
                                        type: "bool",
                                        id: 18
                                    },
                                    deprecated: {
                                        type: "bool",
                                        id: 23
                                    },
                                    ccEnableArenas: {
                                        type: "bool",
                                        id: 31,
                                        options: {
                                            default: true
                                        }
                                    },
                                    objcClassPrefix: {
                                        type: "string",
                                        id: 36
                                    },
                                    csharpNamespace: {
                                        type: "string",
                                        id: 37
                                    },
                                    swiftPrefix: {
                                        type: "string",
                                        id: 39
                                    },
                                    phpClassPrefix: {
                                        type: "string",
                                        id: 40
                                    },
                                    phpNamespace: {
                                        type: "string",
                                        id: 41
                                    },
                                    phpMetadataNamespace: {
                                        type: "string",
                                        id: 44
                                    },
                                    rubyPackage: {
                                        type: "string",
                                        id: 45
                                    },
                                    features: {
                                        type: "FeatureSet",
                                        id: 50
                                    },
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    }
                                },
                                extensions: [
                                    [
                                        1000,
                                        536870911
                                    ]
                                ],
                                reserved: [
                                    [
                                        42,
                                        42
                                    ],
                                    [
                                        38,
                                        38
                                    ],
                                    "php_generic_services"
                                ],
                                nested: {
                                    OptimizeMode: {
                                        values: {
                                            SPEED: 1,
                                            CODE_SIZE: 2,
                                            LITE_RUNTIME: 3
                                        }
                                    }
                                }
                            },
                            MessageOptions: {
                                edition: "proto2",
                                fields: {
                                    messageSetWireFormat: {
                                        type: "bool",
                                        id: 1
                                    },
                                    noStandardDescriptorAccessor: {
                                        type: "bool",
                                        id: 2
                                    },
                                    deprecated: {
                                        type: "bool",
                                        id: 3
                                    },
                                    mapEntry: {
                                        type: "bool",
                                        id: 7
                                    },
                                    deprecatedLegacyJsonFieldConflicts: {
                                        type: "bool",
                                        id: 11,
                                        options: {
                                            deprecated: true
                                        }
                                    },
                                    features: {
                                        type: "FeatureSet",
                                        id: 12
                                    },
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    }
                                },
                                extensions: [
                                    [
                                        1000,
                                        536870911
                                    ]
                                ],
                                reserved: [
                                    [
                                        4,
                                        4
                                    ],
                                    [
                                        5,
                                        5
                                    ],
                                    [
                                        6,
                                        6
                                    ],
                                    [
                                        8,
                                        8
                                    ],
                                    [
                                        9,
                                        9
                                    ]
                                ]
                            },
                            FieldOptions: {
                                edition: "proto2",
                                fields: {
                                    ctype: {
                                        type: "CType",
                                        id: 1,
                                        options: {
                                            default: "STRING"
                                        }
                                    },
                                    packed: {
                                        type: "bool",
                                        id: 2
                                    },
                                    jstype: {
                                        type: "JSType",
                                        id: 6,
                                        options: {
                                            default: "JS_NORMAL"
                                        }
                                    },
                                    lazy: {
                                        type: "bool",
                                        id: 5
                                    },
                                    unverifiedLazy: {
                                        type: "bool",
                                        id: 15
                                    },
                                    deprecated: {
                                        type: "bool",
                                        id: 3
                                    },
                                    weak: {
                                        type: "bool",
                                        id: 10,
                                        options: {
                                            deprecated: true
                                        }
                                    },
                                    debugRedact: {
                                        type: "bool",
                                        id: 16
                                    },
                                    retention: {
                                        type: "OptionRetention",
                                        id: 17
                                    },
                                    targets: {
                                        rule: "repeated",
                                        type: "OptionTargetType",
                                        id: 19
                                    },
                                    editionDefaults: {
                                        rule: "repeated",
                                        type: "EditionDefault",
                                        id: 20
                                    },
                                    features: {
                                        type: "FeatureSet",
                                        id: 21
                                    },
                                    featureSupport: {
                                        type: "FeatureSupport",
                                        id: 22
                                    },
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    }
                                },
                                extensions: [
                                    [
                                        1000,
                                        536870911
                                    ]
                                ],
                                reserved: [
                                    [
                                        4,
                                        4
                                    ],
                                    [
                                        18,
                                        18
                                    ]
                                ],
                                nested: {
                                    CType: {
                                        values: {
                                            STRING: 0,
                                            CORD: 1,
                                            STRING_PIECE: 2
                                        }
                                    },
                                    JSType: {
                                        values: {
                                            JS_NORMAL: 0,
                                            JS_STRING: 1,
                                            JS_NUMBER: 2
                                        }
                                    },
                                    OptionRetention: {
                                        values: {
                                            RETENTION_UNKNOWN: 0,
                                            RETENTION_RUNTIME: 1,
                                            RETENTION_SOURCE: 2
                                        }
                                    },
                                    OptionTargetType: {
                                        values: {
                                            TARGET_TYPE_UNKNOWN: 0,
                                            TARGET_TYPE_FILE: 1,
                                            TARGET_TYPE_EXTENSION_RANGE: 2,
                                            TARGET_TYPE_MESSAGE: 3,
                                            TARGET_TYPE_FIELD: 4,
                                            TARGET_TYPE_ONEOF: 5,
                                            TARGET_TYPE_ENUM: 6,
                                            TARGET_TYPE_ENUM_ENTRY: 7,
                                            TARGET_TYPE_SERVICE: 8,
                                            TARGET_TYPE_METHOD: 9
                                        }
                                    },
                                    EditionDefault: {
                                        fields: {
                                            edition: {
                                                type: "Edition",
                                                id: 3
                                            },
                                            value: {
                                                type: "string",
                                                id: 2
                                            }
                                        }
                                    },
                                    FeatureSupport: {
                                        fields: {
                                            editionIntroduced: {
                                                type: "Edition",
                                                id: 1
                                            },
                                            editionDeprecated: {
                                                type: "Edition",
                                                id: 2
                                            },
                                            deprecationWarning: {
                                                type: "string",
                                                id: 3
                                            },
                                            editionRemoved: {
                                                type: "Edition",
                                                id: 4
                                            }
                                        }
                                    }
                                }
                            },
                            OneofOptions: {
                                edition: "proto2",
                                fields: {
                                    features: {
                                        type: "FeatureSet",
                                        id: 1
                                    },
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    }
                                },
                                extensions: [
                                    [
                                        1000,
                                        536870911
                                    ]
                                ]
                            },
                            EnumOptions: {
                                edition: "proto2",
                                fields: {
                                    allowAlias: {
                                        type: "bool",
                                        id: 2
                                    },
                                    deprecated: {
                                        type: "bool",
                                        id: 3
                                    },
                                    deprecatedLegacyJsonFieldConflicts: {
                                        type: "bool",
                                        id: 6,
                                        options: {
                                            deprecated: true
                                        }
                                    },
                                    features: {
                                        type: "FeatureSet",
                                        id: 7
                                    },
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    }
                                },
                                extensions: [
                                    [
                                        1000,
                                        536870911
                                    ]
                                ],
                                reserved: [
                                    [
                                        5,
                                        5
                                    ]
                                ]
                            },
                            EnumValueOptions: {
                                edition: "proto2",
                                fields: {
                                    deprecated: {
                                        type: "bool",
                                        id: 1
                                    },
                                    features: {
                                        type: "FeatureSet",
                                        id: 2
                                    },
                                    debugRedact: {
                                        type: "bool",
                                        id: 3
                                    },
                                    featureSupport: {
                                        type: "FieldOptions.FeatureSupport",
                                        id: 4
                                    },
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    }
                                },
                                extensions: [
                                    [
                                        1000,
                                        536870911
                                    ]
                                ]
                            },
                            ServiceOptions: {
                                edition: "proto2",
                                fields: {
                                    features: {
                                        type: "FeatureSet",
                                        id: 34
                                    },
                                    deprecated: {
                                        type: "bool",
                                        id: 33
                                    },
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    }
                                },
                                extensions: [
                                    [
                                        1000,
                                        536870911
                                    ]
                                ]
                            },
                            MethodOptions: {
                                edition: "proto2",
                                fields: {
                                    deprecated: {
                                        type: "bool",
                                        id: 33
                                    },
                                    idempotencyLevel: {
                                        type: "IdempotencyLevel",
                                        id: 34,
                                        options: {
                                            default: "IDEMPOTENCY_UNKNOWN"
                                        }
                                    },
                                    features: {
                                        type: "FeatureSet",
                                        id: 35
                                    },
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    }
                                },
                                extensions: [
                                    [
                                        1000,
                                        536870911
                                    ]
                                ],
                                nested: {
                                    IdempotencyLevel: {
                                        values: {
                                            IDEMPOTENCY_UNKNOWN: 0,
                                            NO_SIDE_EFFECTS: 1,
                                            IDEMPOTENT: 2
                                        }
                                    }
                                }
                            },
                            UninterpretedOption: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        rule: "repeated",
                                        type: "NamePart",
                                        id: 2
                                    },
                                    identifierValue: {
                                        type: "string",
                                        id: 3
                                    },
                                    positiveIntValue: {
                                        type: "uint64",
                                        id: 4
                                    },
                                    negativeIntValue: {
                                        type: "int64",
                                        id: 5
                                    },
                                    doubleValue: {
                                        type: "double",
                                        id: 6
                                    },
                                    stringValue: {
                                        type: "bytes",
                                        id: 7
                                    },
                                    aggregateValue: {
                                        type: "string",
                                        id: 8
                                    }
                                },
                                nested: {
                                    NamePart: {
                                        fields: {
                                            namePart: {
                                                rule: "required",
                                                type: "string",
                                                id: 1
                                            },
                                            isExtension: {
                                                rule: "required",
                                                type: "bool",
                                                id: 2
                                            }
                                        }
                                    }
                                }
                            },
                            FeatureSet: {
                                edition: "proto2",
                                fields: {
                                    fieldPresence: {
                                        type: "FieldPresence",
                                        id: 1,
                                        options: {
                                            retention: "RETENTION_RUNTIME",
                                            targets: "TARGET_TYPE_FILE",
                                            "feature_support.edition_introduced": "EDITION_2023",
                                            "edition_defaults.edition": "EDITION_2023",
                                            "edition_defaults.value": "EXPLICIT"
                                        }
                                    },
                                    enumType: {
                                        type: "EnumType",
                                        id: 2,
                                        options: {
                                            retention: "RETENTION_RUNTIME",
                                            targets: "TARGET_TYPE_FILE",
                                            "feature_support.edition_introduced": "EDITION_2023",
                                            "edition_defaults.edition": "EDITION_PROTO3",
                                            "edition_defaults.value": "OPEN"
                                        }
                                    },
                                    repeatedFieldEncoding: {
                                        type: "RepeatedFieldEncoding",
                                        id: 3,
                                        options: {
                                            retention: "RETENTION_RUNTIME",
                                            targets: "TARGET_TYPE_FILE",
                                            "feature_support.edition_introduced": "EDITION_2023",
                                            "edition_defaults.edition": "EDITION_PROTO3",
                                            "edition_defaults.value": "PACKED"
                                        }
                                    },
                                    utf8Validation: {
                                        type: "Utf8Validation",
                                        id: 4,
                                        options: {
                                            retention: "RETENTION_RUNTIME",
                                            targets: "TARGET_TYPE_FILE",
                                            "feature_support.edition_introduced": "EDITION_2023",
                                            "edition_defaults.edition": "EDITION_PROTO3",
                                            "edition_defaults.value": "VERIFY"
                                        }
                                    },
                                    messageEncoding: {
                                        type: "MessageEncoding",
                                        id: 5,
                                        options: {
                                            retention: "RETENTION_RUNTIME",
                                            targets: "TARGET_TYPE_FILE",
                                            "feature_support.edition_introduced": "EDITION_2023",
                                            "edition_defaults.edition": "EDITION_LEGACY",
                                            "edition_defaults.value": "LENGTH_PREFIXED"
                                        }
                                    },
                                    jsonFormat: {
                                        type: "JsonFormat",
                                        id: 6,
                                        options: {
                                            retention: "RETENTION_RUNTIME",
                                            targets: "TARGET_TYPE_FILE",
                                            "feature_support.edition_introduced": "EDITION_2023",
                                            "edition_defaults.edition": "EDITION_PROTO3",
                                            "edition_defaults.value": "ALLOW"
                                        }
                                    },
                                    enforceNamingStyle: {
                                        type: "EnforceNamingStyle",
                                        id: 7,
                                        options: {
                                            retention: "RETENTION_SOURCE",
                                            targets: "TARGET_TYPE_METHOD",
                                            "feature_support.edition_introduced": "EDITION_2024",
                                            "edition_defaults.edition": "EDITION_2024",
                                            "edition_defaults.value": "STYLE2024"
                                        }
                                    },
                                    defaultSymbolVisibility: {
                                        type: "VisibilityFeature.DefaultSymbolVisibility",
                                        id: 8,
                                        options: {
                                            retention: "RETENTION_SOURCE",
                                            targets: "TARGET_TYPE_FILE",
                                            "feature_support.edition_introduced": "EDITION_2024",
                                            "edition_defaults.edition": "EDITION_2024",
                                            "edition_defaults.value": "EXPORT_TOP_LEVEL"
                                        }
                                    }
                                },
                                extensions: [
                                    [
                                        1000,
                                        9994
                                    ],
                                    [
                                        9995,
                                        9999
                                    ],
                                    [
                                        10000,
                                        10000
                                    ]
                                ],
                                reserved: [
                                    [
                                        999,
                                        999
                                    ]
                                ],
                                nested: {
                                    FieldPresence: {
                                        values: {
                                            FIELD_PRESENCE_UNKNOWN: 0,
                                            EXPLICIT: 1,
                                            IMPLICIT: 2,
                                            LEGACY_REQUIRED: 3
                                        }
                                    },
                                    EnumType: {
                                        values: {
                                            ENUM_TYPE_UNKNOWN: 0,
                                            OPEN: 1,
                                            CLOSED: 2
                                        }
                                    },
                                    RepeatedFieldEncoding: {
                                        values: {
                                            REPEATED_FIELD_ENCODING_UNKNOWN: 0,
                                            PACKED: 1,
                                            EXPANDED: 2
                                        }
                                    },
                                    Utf8Validation: {
                                        values: {
                                            UTF8_VALIDATION_UNKNOWN: 0,
                                            VERIFY: 2,
                                            NONE: 3
                                        }
                                    },
                                    MessageEncoding: {
                                        values: {
                                            MESSAGE_ENCODING_UNKNOWN: 0,
                                            LENGTH_PREFIXED: 1,
                                            DELIMITED: 2
                                        }
                                    },
                                    JsonFormat: {
                                        values: {
                                            JSON_FORMAT_UNKNOWN: 0,
                                            ALLOW: 1,
                                            LEGACY_BEST_EFFORT: 2
                                        }
                                    },
                                    EnforceNamingStyle: {
                                        values: {
                                            ENFORCE_NAMING_STYLE_UNKNOWN: 0,
                                            STYLE2024: 1,
                                            STYLE_LEGACY: 2
                                        }
                                    },
                                    VisibilityFeature: {
                                        fields: {},
                                        reserved: [
                                            [
                                                1,
                                                536870911
                                            ]
                                        ],
                                        nested: {
                                            DefaultSymbolVisibility: {
                                                values: {
                                                    DEFAULT_SYMBOL_VISIBILITY_UNKNOWN: 0,
                                                    EXPORT_ALL: 1,
                                                    EXPORT_TOP_LEVEL: 2,
                                                    LOCAL_ALL: 3,
                                                    STRICT: 4
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            FeatureSetDefaults: {
                                edition: "proto2",
                                fields: {
                                    defaults: {
                                        rule: "repeated",
                                        type: "FeatureSetEditionDefault",
                                        id: 1
                                    },
                                    minimumEdition: {
                                        type: "Edition",
                                        id: 4
                                    },
                                    maximumEdition: {
                                        type: "Edition",
                                        id: 5
                                    }
                                },
                                nested: {
                                    FeatureSetEditionDefault: {
                                        fields: {
                                            edition: {
                                                type: "Edition",
                                                id: 3
                                            },
                                            overridableFeatures: {
                                                type: "FeatureSet",
                                                id: 4
                                            },
                                            fixedFeatures: {
                                                type: "FeatureSet",
                                                id: 5
                                            }
                                        },
                                        reserved: [
                                            [
                                                1,
                                                1
                                            ],
                                            [
                                                2,
                                                2
                                            ],
                                            "features"
                                        ]
                                    }
                                }
                            },
                            SourceCodeInfo: {
                                edition: "proto2",
                                fields: {
                                    location: {
                                        rule: "repeated",
                                        type: "Location",
                                        id: 1
                                    }
                                },
                                extensions: [
                                    [
                                        536000000,
                                        536000000
                                    ]
                                ],
                                nested: {
                                    Location: {
                                        fields: {
                                            path: {
                                                rule: "repeated",
                                                type: "int32",
                                                id: 1,
                                                options: {
                                                    packed: true
                                                }
                                            },
                                            span: {
                                                rule: "repeated",
                                                type: "int32",
                                                id: 2,
                                                options: {
                                                    packed: true
                                                }
                                            },
                                            leadingComments: {
                                                type: "string",
                                                id: 3
                                            },
                                            trailingComments: {
                                                type: "string",
                                                id: 4
                                            },
                                            leadingDetachedComments: {
                                                rule: "repeated",
                                                type: "string",
                                                id: 6
                                            }
                                        }
                                    }
                                }
                            },
                            GeneratedCodeInfo: {
                                edition: "proto2",
                                fields: {
                                    annotation: {
                                        rule: "repeated",
                                        type: "Annotation",
                                        id: 1
                                    }
                                },
                                nested: {
                                    Annotation: {
                                        fields: {
                                            path: {
                                                rule: "repeated",
                                                type: "int32",
                                                id: 1,
                                                options: {
                                                    packed: true
                                                }
                                            },
                                            sourceFile: {
                                                type: "string",
                                                id: 2
                                            },
                                            begin: {
                                                type: "int32",
                                                id: 3
                                            },
                                            end: {
                                                type: "int32",
                                                id: 4
                                            },
                                            semantic: {
                                                type: "Semantic",
                                                id: 5
                                            }
                                        },
                                        nested: {
                                            Semantic: {
                                                values: {
                                                    NONE: 0,
                                                    SET: 1,
                                                    ALIAS: 2
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            SymbolVisibility: {
                                edition: "proto2",
                                values: {
                                    VISIBILITY_UNSET: 0,
                                    VISIBILITY_LOCAL: 1,
                                    VISIBILITY_EXPORT: 2
                                }
                            }
                        }
                    }
                }
            }
        }
    };
});
const uh = C(function(x, ch) {
    const Ne = qs();
    ch.exports = x = Ne.descriptor = Ne.Root.fromJSON(lo()).lookup(".google.protobuf");
    const { Namespace, Root, Enum, Type, Field, MapField, OneOf, Service, Method } = Ne;
    const patterns = Ne.util.patterns;
    const { numberRe, typeRefRe } = patterns;
    Root.fromDescriptor = function(t) {
        if (typeof t.length === "number") {
            t = x.FileDescriptorSet.decode(t);
        }
        const r = new Root;
        if (t.file) {
            let i;
            let s;
            let a;
            for(let n = 0; n < t.file.length; ++n){
                s = r;
                if ((i = t.file[n]).package && i.package.length) {
                    s = r.define(i.package);
                }
                const o = TT(i);
                if (i.name && i.name.length) {
                    r.files.push(s.filename = i.name);
                }
                if (i.messageType) {
                    for(a = 0; a < i.messageType.length; ++a){
                        s.add(Type.fromDescriptor(i.messageType[a], o));
                    }
                }
                if (i.enumType) {
                    for(a = 0; a < i.enumType.length; ++a){
                        s.add(Enum.fromDescriptor(i.enumType[a], o));
                    }
                }
                if (i.extension) {
                    for(a = 0; a < i.extension.length; ++a){
                        s.add(Field.fromDescriptor(i.extension[a], o));
                    }
                }
                if (i.service) {
                    for(a = 0; a < i.service.length; ++a){
                        s.add(Service.fromDescriptor(i.service[a], o));
                    }
                }
                const l = jr(i.options, x.FileOptions);
                if (l) {
                    const c = Object.keys(l);
                    for(a = 0; a < c.length; ++a){
                        s.setOption(c[a], l[c[a]]);
                    }
                }
            }
        }
        return r.resolveAll();
    };
    Root.prototype.toDescriptor = function(t) {
        const r = x.FileDescriptorSet.create();
        nh(this, r.file, t);
        return r;
    };
    function nh(e, t, r) {
        const i = x.FileDescriptorProto.create({
            name: e.filename || `${e.fullName.substring(1).replace(/\./g, "_") || "root"}.proto`
        });
        RT(r, i);
        if (!(e instanceof Root)) {
            i.package = e.fullName.substring(1);
        }
        let n;
        for(let s = 0; s < e.nestedArray.length; ++s){
            if ((n = e._nestedArray[s]) instanceof Type) {
                i.messageType.push(n.toDescriptor(r));
            } else if (n instanceof Enum) {
                i.enumType.push(n.toDescriptor());
            } else if (n instanceof Field) {
                i.extension.push(n.toDescriptor(r));
            } else if (n instanceof Service) {
                i.service.push(n.toDescriptor());
            } else if (n instanceof Namespace) {
                nh(n, t, r);
            }
        }
        i.options = Gr(e.options, x.FileOptions);
        if (i.messageType.length + i.enumType.length + i.extension.length + i.service.length) {
            t.push(i);
        }
    }
    let gT = 0;
    Type.fromDescriptor = function(t, r, i) {
        if (typeof t.length === "number") {
            t = x.DescriptorProto.decode(t);
        }
        const s = new Type(t.name.length ? t.name : `Type${gT++}`, jr(t.options, x.MessageOptions));
        let n;
        if (!i) {
            s._edition = r;
        }
        if (t.oneofDecl) {
            for(n = 0; n < t.oneofDecl.length; ++n){
                s.add(OneOf.fromDescriptor(t.oneofDecl[n]));
            }
        }
        if (t.field) {
            for(n = 0; n < t.field.length; ++n){
                const a = Field.fromDescriptor(t.field[n], r, true);
                s.add(a);
                if (t.field[n].hasOwnProperty("oneofIndex")) {
                    s.oneofsArray[t.field[n].oneofIndex].add(a);
                }
            }
        }
        if (t.extension) {
            for(n = 0; n < t.extension.length; ++n){
                s.add(Field.fromDescriptor(t.extension[n], r, true));
            }
        }
        if (t.nestedType) {
            for(n = 0; n < t.nestedType.length; ++n){
                s.add(Type.fromDescriptor(t.nestedType[n], r, true));
                if (t.nestedType[n].options && t.nestedType[n].options.mapEntry) {
                    s.setOption("map_entry", true);
                }
            }
        }
        if (t.enumType) {
            for(n = 0; n < t.enumType.length; ++n){
                s.add(Enum.fromDescriptor(t.enumType[n], r, true));
            }
        }
        if (t.extensionRange && t.extensionRange.length) {
            s.extensions = [];
            for(n = 0; n < t.extensionRange.length; ++n){
                s.extensions.push([
                    t.extensionRange[n].start,
                    t.extensionRange[n].end
                ]);
            }
        }
        if (t.reservedRange && t.reservedRange.length || t.reservedName && t.reservedName.length) {
            s.reserved = [];
            if (t.reservedRange) {
                for(n = 0; n < t.reservedRange.length; ++n){
                    s.reserved.push([
                        t.reservedRange[n].start,
                        t.reservedRange[n].end
                    ]);
                }
            }
            if (t.reservedName) {
                for(n = 0; n < t.reservedName.length; ++n){
                    s.reserved.push(t.reservedName[n]);
                }
            }
        }
        return s;
    };
    Type.prototype.toDescriptor = function(t) {
        const r = x.DescriptorProto.create({
            name: this.name
        });
        let i;
        for(i = 0; i < this.fieldsArray.length; ++i){
            let s;
            r.field.push(s = this._fieldsArray[i].toDescriptor(t));
            if (this._fieldsArray[i] instanceof MapField) {
                const n = co(this._fieldsArray[i].keyType, this._fieldsArray[i].resolvedKeyType, false);
                const a = co(this._fieldsArray[i].type, this._fieldsArray[i].resolvedType, false);
                const typeName = a === 11 || a === 14 ? this._fieldsArray[i].resolvedType && lh(this.parent, this._fieldsArray[i].resolvedType) || this._fieldsArray[i].type : undefined;
                r.nestedType.push(x.DescriptorProto.create({
                    name: s.typeName,
                    field: [
                        x.FieldDescriptorProto.create({
                            name: "key",
                            number: 1,
                            label: 1,
                            type: n
                        }),
                        x.FieldDescriptorProto.create({
                            name: "value",
                            number: 2,
                            label: 1,
                            type: a,
                            typeName
                        })
                    ],
                    options: x.MessageOptions.create({
                        mapEntry: true
                    })
                }));
            }
        }
        for(i = 0; i < this.oneofsArray.length; ++i){
            r.oneofDecl.push(this._oneofsArray[i].toDescriptor());
        }
        for(i = 0; i < this.nestedArray.length; ++i){
            if (this._nestedArray[i] instanceof Field) {
                r.field.push(this._nestedArray[i].toDescriptor(t));
            } else if (this._nestedArray[i] instanceof Type) {
                r.nestedType.push(this._nestedArray[i].toDescriptor(t));
            } else if (this._nestedArray[i] instanceof Enum) {
                r.enumType.push(this._nestedArray[i].toDescriptor());
            }
        }
        if (this.extensions) {
            for(i = 0; i < this.extensions.length; ++i){
                r.extensionRange.push(x.DescriptorProto.ExtensionRange.create({
                    start: this.extensions[i][0],
                    end: this.extensions[i][1]
                }));
            }
        }
        if (this.reserved) {
            for(i = 0; i < this.reserved.length; ++i){
                if (typeof this.reserved[i] === "string") {
                    r.reservedName.push(this.reserved[i]);
                } else {
                    r.reservedRange.push(x.DescriptorProto.ReservedRange.create({
                        start: this.reserved[i][0],
                        end: this.reserved[i][1]
                    }));
                }
            }
        }
        r.options = Gr(this.options, x.MessageOptions);
        return r;
    };
    Field.fromDescriptor = function(t, r, i) {
        if (typeof t.length === "number") {
            t = x.DescriptorProto.decode(t);
        }
        if (typeof t.number !== "number") {
            throw Error("missing field id");
        }
        const t_typeName = t.typeName;
        let n;
        if (t_typeName != null && t_typeName !== "") {
            if (typeof t_typeName !== "string" || !typeRefRe.test(t_typeName)) {
                throw Error(`illegal type name: ${t_typeName}`);
            }
            n = t_typeName;
        } else {
            n = ST(t.type);
        }
        let a;
        switch(t.label){
            case 1:
                a = undefined;
                break;
            case 2:
                a = "required";
                break;
            case 3:
                a = "repeated";
                break;
            default:
                throw Error(`illegal label: ${t.label}`);
        }
        let t_extendee = t.extendee;
        if (t_extendee != null && t_extendee !== "") {
            if (typeof t_extendee !== "string" || !typeRefRe.test(t_extendee)) {
                throw Error(`illegal type name: ${t_extendee}`);
            }
        } else {
            t_extendee = undefined;
        }
        const l = new Field(t.name.length ? t.name : `field${t.number}`, t.number, n, a, t_extendee);
        if (!i) {
            l._edition = r;
        }
        l.options = jr(t.options, x.FieldOptions);
        if (t.proto3_optional) {
            l.options.proto3_optional = true;
        }
        if (t.defaultValue && t.defaultValue.length) {
            let c = t.defaultValue;
            switch(c){
                case "true":
                case "TRUE":
                    c = true;
                    break;
                case "false":
                case "FALSE":
                    c = false;
                    break;
                default:
                    const u = numberRe.exec(c);
                    if (u) {
                        c = parseInt(c);
                    }
                    break;
            }
            l.setOption("default", c);
        }
        if (CT(t.type)) {
            if (r === "proto3") {
                if (t.options && !t.options.packed) {
                    l.setOption("packed", false);
                }
            } else if ((!r || r === "proto2") && t.options && t.options.packed) {
                l.setOption("packed", true);
            }
        }
        return l;
    };
    Field.prototype.toDescriptor = function(t) {
        const r = x.FieldDescriptorProto.create({
            name: this.name,
            number: this.id
        });
        if (this.map) {
            r.type = 11;
            r.typeName = Ne.util.ucFirst(this.name);
            r.label = 3;
        } else {
            switch(r.type = co(this.type, this.resolve().resolvedType, this.delimited)){
                case 10:
                case 11:
                case 14:
                    r.typeName = this.resolvedType ? lh(this.parent, this.resolvedType) : this.type;
                    break;
            }
            if (this.rule === "repeated") {
                r.label = 3;
            } else if (this.required && t === "proto2") {
                r.label = 2;
            } else {
                r.label = 1;
            }
        }
        r.extendee = this.extensionField ? this.extensionField.parent.fullName : this.extend;
        if (this.partOf && this.parent instanceof Type) {
            if ((r.oneofIndex = this.parent.oneofsArray.indexOf(this.partOf)) < 0) {
                throw Error("missing oneof");
            }
        }
        if (this.options) {
            r.options = Gr(this.options, x.FieldOptions);
            if (this.options.default != null) {
                r.defaultValue = String(this.options.default);
            }
            if (this.options.proto3_optional) {
                r.proto3_optional = true;
            }
        }
        if (t === "proto3") {
            if (!this.packed) {
                (r.options || (r.options = x.FieldOptions.create())).packed = false;
            }
        } else if ((!t || t === "proto2") && this.packed) {
            (r.options || (r.options = x.FieldOptions.create())).packed = true;
        }
        return r;
    };
    let mT = 0;
    Enum.fromDescriptor = function(t, r, i) {
        if (typeof t.length === "number") {
            t = x.EnumDescriptorProto.decode(t);
        }
        const s = {};
        if (t.value) {
            for(let n = 0; n < t.value.length; ++n){
                const a = t.value[n].name;
                const o = t.value[n].number || 0;
                s[a && a.length ? a : `NAME${o}`] = o;
            }
        }
        const l = new Enum(t.name && t.name.length ? t.name : `Enum${mT++}`, s, jr(t.options, x.EnumOptions));
        if (!i) {
            l._edition = r;
        }
        return l;
    };
    Enum.prototype.toDescriptor = function() {
        const t = [];
        for(let r = 0, i = Object.keys(this.values); r < i.length; ++r){
            t.push(x.EnumValueDescriptorProto.create({
                name: i[r],
                number: this.values[i[r]]
            }));
        }
        return x.EnumDescriptorProto.create({
            name: this.name,
            value: t,
            options: Gr(this.options, x.EnumOptions)
        });
    };
    let vT = 0;
    OneOf.fromDescriptor = function(t) {
        if (typeof t.length === "number") {
            t = x.OneofDescriptorProto.decode(t);
        }
        return new OneOf(t.name && t.name.length ? t.name : `oneof${vT++}`);
    };
    OneOf.prototype.toDescriptor = function() {
        return x.OneofDescriptorProto.create({
            name: this.name
        });
    };
    let yT = 0;
    Service.fromDescriptor = function(t, r, i) {
        if (typeof t.length === "number") {
            t = x.ServiceDescriptorProto.decode(t);
        }
        const s = new Service(t.name && t.name.length ? t.name : `Service${yT++}`, jr(t.options, x.ServiceOptions));
        if (!i) {
            s._edition = r;
        }
        if (t.method) {
            for(let n = 0; n < t.method.length; ++n){
                s.add(Method.fromDescriptor(t.method[n]));
            }
        }
        return s;
    };
    Service.prototype.toDescriptor = function() {
        const method = [];
        for(let r = 0; r < this.methodsArray.length; ++r){
            method.push(this._methodsArray[r].toDescriptor());
        }
        return x.ServiceDescriptorProto.create({
            name: this.name,
            method,
            options: Gr(this.options, x.ServiceOptions)
        });
    };
    let _T = 0;
    Method.fromDescriptor = function(t) {
        if (typeof t.length === "number") {
            t = x.MethodDescriptorProto.decode(t);
        }
        const { inputType, outputType } = t;
        if (inputType != null && inputType !== "") {
            if (typeof inputType !== "string" || !typeRefRe.test(inputType)) {
                throw Error(`illegal type name: ${inputType}`);
            }
        }
        if (outputType != null && outputType !== "") {
            if (typeof outputType !== "string" || !typeRefRe.test(outputType)) {
                throw Error(`illegal type name: ${outputType}`);
            }
        }
        return new Method(t.name && t.name.length ? t.name : `Method${_T++}`, "rpc", inputType, outputType, Boolean(t.clientStreaming), Boolean(t.serverStreaming), jr(t.options, x.MethodOptions));
    };
    Method.prototype.toDescriptor = function() {
        return x.MethodDescriptorProto.create({
            name: this.name,
            inputType: this.resolvedRequestType ? this.resolvedRequestType.fullName : this.requestType,
            outputType: this.resolvedResponseType ? this.resolvedResponseType.fullName : this.responseType,
            clientStreaming: this.requestStream,
            serverStreaming: this.responseStream,
            options: Gr(this.options, x.MethodOptions)
        });
    };
    function ST(type) {
        switch(type){
            case 1:
                return "double";
            case 2:
                return "float";
            case 3:
                return "int64";
            case 4:
                return "uint64";
            case 5:
                return "int32";
            case 6:
                return "fixed64";
            case 7:
                return "fixed32";
            case 8:
                return "bool";
            case 9:
                return "string";
            case 12:
                return "bytes";
            case 13:
                return "uint32";
            case 15:
                return "sfixed32";
            case 16:
                return "sfixed64";
            case 17:
                return "sint32";
            case 18:
                return "sint64";
        }
        throw Error(`illegal type: ${type}`);
    }
    function CT(type) {
        switch(type){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
                return true;
        }
        return false;
    }
    function co(e, t, r) {
        switch(e){
            case "double":
                return 1;
            case "float":
                return 2;
            case "int64":
                return 3;
            case "uint64":
                return 4;
            case "int32":
                return 5;
            case "fixed64":
                return 6;
            case "fixed32":
                return 7;
            case "bool":
                return 8;
            case "string":
                return 9;
            case "bytes":
                return 12;
            case "uint32":
                return 13;
            case "sfixed32":
                return 15;
            case "sfixed64":
                return 16;
            case "sint32":
                return 17;
            case "sint64":
                return 18;
        }
        if (t instanceof Enum) {
            return 14;
        }
        if (t instanceof Type) {
            if (r) {
                return 10;
            }
            return 11;
        }
        throw Error(`illegal type: ${e}`);
    }
    function ah(e, t) {
        const r = {};
        let s;
        let n;
        for(let i = 0; i < t.fieldsArray.length; ++i){
            if ((n = (s = t._fieldsArray[i]).name) === "uninterpretedOption") {
                continue;
            }
            if (!Object.prototype.hasOwnProperty.call(e, n)) {
                continue;
            }
            const a = ET(n);
            if (s.resolvedType instanceof Type) {
                r[a] = ah(e[n], s.resolvedType);
            } else if (s.resolvedType instanceof Enum) {
                r[a] = s.resolvedType.valuesById[e[n]];
            } else {
                r[a] = e[n];
            }
        }
        return r;
    }
    function jr(options, t) {
        if (!options) {
            return;
        }
        return ah(t.toObject(options), t);
    }
    function oh(e, t) {
        const r = {};
        const i = Object.keys(e);
        for (const n of i){
            const a = Ne.util.camelCase(n);
            if (!Object.prototype.hasOwnProperty.call(t.fields, a)) {
                continue;
            }
            const o = t.fields[a];
            if (o.resolvedType instanceof Type) {
                r[a] = oh(e[n], o.resolvedType);
            } else {
                r[a] = e[n];
            }
            if (o.repeated && !Array.isArray(r[a])) {
                r[a] = [
                    r[a]
                ];
            }
        }
        return r;
    }
    function Gr(options, t) {
        if (!options) {
            return;
        }
        return t.fromObject(oh(options, t));
    }
    function lh(parent, resolvedType) {
        const r = parent.fullName.split(".");
        const i = resolvedType.fullName.split(".");
        let s = 0;
        let n = 0;
        const a = i.length - 1;
        if (!(parent instanceof Root) && resolvedType instanceof Namespace) {
            while(s < r.length && n < a && r[s] === i[n]){
                const o = resolvedType.lookup(r[s++], true);
                if (o !== null && o !== resolvedType) {
                    break;
                }
                ++n;
            }
        } else {
            for(; s < r.length && n < a && r[s] === i[n]; ++s, ++n);
        }
        return i.slice(n).join(".");
    }
    function ET(e) {
        return e.substring(0, 1) + e.substring(1).replace(/([A-Z])(?=[a-z]|$)/g, (t, r)=>`_${r.toLowerCase()}`);
    }
    function TT(e) {
        if (e.syntax === "editions") {
            switch(e.edition){
                case x.Edition.EDITION_2023:
                    return "2023";
                default:
                    throw Error(`Unsupported edition ${e.edition}`);
            }
        }
        if (e.syntax === "proto3") {
            return "proto3";
        }
        return "proto2";
    }
    function RT(e, t) {
        if (!e) {
            return;
        }
        if (e === "proto2" || e === "proto3") {
            t.syntax = e;
        } else {
            t.syntax = "editions";
            switch(e){
                case "2023":
                    t.edition = x.Edition.EDITION_2023;
                    break;
                default:
                    throw Error(`Unsupported edition ${e}`);
            }
        }
    }
});
const dh = C(function(wA, bT) {
    bT.exports = {
        nested: {
            google: {
                nested: {
                    protobuf: {
                        nested: {
                            Api: {
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    methods: {
                                        rule: "repeated",
                                        type: "Method",
                                        id: 2
                                    },
                                    options: {
                                        rule: "repeated",
                                        type: "Option",
                                        id: 3
                                    },
                                    version: {
                                        type: "string",
                                        id: 4
                                    },
                                    sourceContext: {
                                        type: "SourceContext",
                                        id: 5
                                    },
                                    mixins: {
                                        rule: "repeated",
                                        type: "Mixin",
                                        id: 6
                                    },
                                    syntax: {
                                        type: "Syntax",
                                        id: 7
                                    }
                                }
                            },
                            Method: {
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    requestTypeUrl: {
                                        type: "string",
                                        id: 2
                                    },
                                    requestStreaming: {
                                        type: "bool",
                                        id: 3
                                    },
                                    responseTypeUrl: {
                                        type: "string",
                                        id: 4
                                    },
                                    responseStreaming: {
                                        type: "bool",
                                        id: 5
                                    },
                                    options: {
                                        rule: "repeated",
                                        type: "Option",
                                        id: 6
                                    },
                                    syntax: {
                                        type: "Syntax",
                                        id: 7
                                    }
                                }
                            },
                            Mixin: {
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    root: {
                                        type: "string",
                                        id: 2
                                    }
                                }
                            },
                            SourceContext: {
                                fields: {
                                    fileName: {
                                        type: "string",
                                        id: 1
                                    }
                                }
                            },
                            Option: {
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    value: {
                                        type: "Any",
                                        id: 2
                                    }
                                }
                            },
                            Syntax: {
                                values: {
                                    SYNTAX_PROTO2: 0,
                                    SYNTAX_PROTO3: 1
                                }
                            }
                        }
                    }
                }
            }
        }
    };
});
const hh = C(function(AA, OT) {
    OT.exports = {
        nested: {
            google: {
                nested: {
                    protobuf: {
                        nested: {
                            SourceContext: {
                                fields: {
                                    fileName: {
                                        type: "string",
                                        id: 1
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
});
const fh = C(function(PA, wT) {
    wT.exports = {
        nested: {
            google: {
                nested: {
                    protobuf: {
                        nested: {
                            Type: {
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    fields: {
                                        rule: "repeated",
                                        type: "Field",
                                        id: 2
                                    },
                                    oneofs: {
                                        rule: "repeated",
                                        type: "string",
                                        id: 3
                                    },
                                    options: {
                                        rule: "repeated",
                                        type: "Option",
                                        id: 4
                                    },
                                    sourceContext: {
                                        type: "SourceContext",
                                        id: 5
                                    },
                                    syntax: {
                                        type: "Syntax",
                                        id: 6
                                    }
                                }
                            },
                            Field: {
                                fields: {
                                    kind: {
                                        type: "Kind",
                                        id: 1
                                    },
                                    cardinality: {
                                        type: "Cardinality",
                                        id: 2
                                    },
                                    number: {
                                        type: "int32",
                                        id: 3
                                    },
                                    name: {
                                        type: "string",
                                        id: 4
                                    },
                                    typeUrl: {
                                        type: "string",
                                        id: 6
                                    },
                                    oneofIndex: {
                                        type: "int32",
                                        id: 7
                                    },
                                    packed: {
                                        type: "bool",
                                        id: 8
                                    },
                                    options: {
                                        rule: "repeated",
                                        type: "Option",
                                        id: 9
                                    },
                                    jsonName: {
                                        type: "string",
                                        id: 10
                                    },
                                    defaultValue: {
                                        type: "string",
                                        id: 11
                                    }
                                },
                                nested: {
                                    Kind: {
                                        values: {
                                            TYPE_UNKNOWN: 0,
                                            TYPE_DOUBLE: 1,
                                            TYPE_FLOAT: 2,
                                            TYPE_INT64: 3,
                                            TYPE_UINT64: 4,
                                            TYPE_INT32: 5,
                                            TYPE_FIXED64: 6,
                                            TYPE_FIXED32: 7,
                                            TYPE_BOOL: 8,
                                            TYPE_STRING: 9,
                                            TYPE_GROUP: 10,
                                            TYPE_MESSAGE: 11,
                                            TYPE_BYTES: 12,
                                            TYPE_UINT32: 13,
                                            TYPE_ENUM: 14,
                                            TYPE_SFIXED32: 15,
                                            TYPE_SFIXED64: 16,
                                            TYPE_SINT32: 17,
                                            TYPE_SINT64: 18
                                        }
                                    },
                                    Cardinality: {
                                        values: {
                                            CARDINALITY_UNKNOWN: 0,
                                            CARDINALITY_OPTIONAL: 1,
                                            CARDINALITY_REQUIRED: 2,
                                            CARDINALITY_REPEATED: 3
                                        }
                                    }
                                }
                            },
                            Enum: {
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    enumvalue: {
                                        rule: "repeated",
                                        type: "EnumValue",
                                        id: 2
                                    },
                                    options: {
                                        rule: "repeated",
                                        type: "Option",
                                        id: 3
                                    },
                                    sourceContext: {
                                        type: "SourceContext",
                                        id: 4
                                    },
                                    syntax: {
                                        type: "Syntax",
                                        id: 5
                                    }
                                }
                            },
                            EnumValue: {
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    number: {
                                        type: "int32",
                                        id: 2
                                    },
                                    options: {
                                        rule: "repeated",
                                        type: "Option",
                                        id: 3
                                    }
                                }
                            },
                            Option: {
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    value: {
                                        type: "Any",
                                        id: 2
                                    }
                                }
                            },
                            Syntax: {
                                values: {
                                    SYNTAX_PROTO2: 0,
                                    SYNTAX_PROTO3: 1
                                }
                            },
                            Any: {
                                fields: {
                                    type_url: {
                                        type: "string",
                                        id: 1
                                    },
                                    value: {
                                        type: "bytes",
                                        id: 2
                                    }
                                }
                            },
                            SourceContext: {
                                fields: {
                                    fileName: {
                                        type: "string",
                                        id: 1
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
});
const vh = C(function(gh) {
    Object.defineProperty(gh, "__esModule", {
        value: true
    });
    gh.addCommonProtos = gh.loadProtosWithOptionsSync = gh.loadProtosWithOptions = undefined;
    const Hs = Le("fs");
    const Ws = Le("path");
    const je = qs();
    function ph(e, includeDirs) {
        let e_resolvePath = e.resolvePath;
        e.resolvePath = (i, s)=>{
            if (Ws.isAbsolute(s)) {
                return s;
            }
            for (let n of includeDirs){
                let a = Ws.join(n, s);
                try {
                    Hs.accessSync(a, Hs.constants.R_OK);
                    return a;
                } catch (o) {
                    continue;
                }
            }
            process.emitWarning(`${s} not found in any of the include paths ${includeDirs}`);
            return e_resolvePath(i, s);
        };
    }
    async function AT(e, t) {
        let r = new je.Root;
        t = t || {};
        if (t.includeDirs) {
            if (!Array.isArray(t.includeDirs)) {
                return Promise.reject(Error("The includeDirs option must be an array"));
            }
            ph(r, t.includeDirs);
        }
        let i = await r.load(e, t);
        i.resolveAll();
        return i;
    }
    gh.loadProtosWithOptions = AT;
    function PT(e, t) {
        let r = new je.Root;
        t = t || {};
        if (t.includeDirs) {
            if (!Array.isArray(t.includeDirs)) {
                throw Error("The includeDirs option must be an array");
            }
            ph(r, t.includeDirs);
        }
        let i = r.loadSync(e, t);
        i.resolveAll();
        return i;
    }
    gh.loadProtosWithOptionsSync = PT;
    function NT() {
        let e = dh();
        let t = lo();
        let r = hh();
        let i = fh();
        je.common("api", e.nested.google.nested.protobuf.nested);
        je.common("descriptor", t.nested.google.nested.protobuf.nested);
        je.common("source_context", r.nested.google.nested.protobuf.nested);
        je.common("type", i.nested.google.nested.protobuf.nested);
    }
    gh.addCommonProtos = NT;
});
const po = C(function(Th) {
    Object.defineProperty(Th, "__esModule", {
        value: true
    });
    Th.loadFileDescriptorSetFromObject = Th.loadFileDescriptorSetFromBuffer = Th.fromJSON = Th.loadSync = Th.load = Th.IdempotencyLevel = Th.isAnyExtension = Th.Long = undefined;
    const xT = Qu();
    const ne = qs();
    const $r = uh();
    const Vr = vh();
    const kT = OXn();
    Th.Long = kT;
    function DT(e) {
        return "@type" in e && typeof e["@type"] === "string";
    }
    Th.isAnyExtension = DT;
    let _h;
    ((e)=>{
        e.IDEMPOTENCY_UNKNOWN = "IDEMPOTENCY_UNKNOWN";
        e.NO_SIDE_EFFECTS = "NO_SIDE_EFFECTS";
        e.IDEMPOTENT = "IDEMPOTENT";
    })(_h = Th.IdempotencyLevel || (Th.IdempotencyLevel = {}));
    const Sh = {
        longs: String,
        enums: String,
        bytes: String,
        defaults: true,
        oneofs: true,
        json: true
    };
    function LT(e, name) {
        if (e === "") {
            return name;
        } else {
            return `${e}.${name}`;
        }
    }
    function FT(e) {
        return e instanceof ne.Service || e instanceof ne.Type || e instanceof ne.Enum;
    }
    function qT(e) {
        return e instanceof ne.Namespace || e instanceof ne.Root;
    }
    function Ch(e, t) {
        let r = LT(t, e.name);
        if (FT(e)) {
            return [
                [
                    r,
                    e
                ]
            ];
        } else if (qT(e) && typeof e.nested !== "undefined") {
            return Object.keys(e.nested).map((i)=>Ch(e.nested[i], r)).reduce((acc, item)=>acc.concat(item), []);
        }
        return [];
    }
    function uo(e, t) {
        return function(i) {
            return e.toObject(e.decode(i), t);
        };
    }
    function ho(e) {
        return function(r) {
            if (Array.isArray(r)) {
                throw Error(`Failed to serialize message: expected object with ${e.name} structure, got array instead`);
            }
            let i = e.fromObject(r);
            return e.encode(i).finish();
        };
    }
    function UT(parsedOptions) {
        return (parsedOptions || []).reduce((acc, item)=>{
            for (let [i, s] of Object.entries(item)){
                switch(i){
                    case "uninterpreted_option":
                        acc.uninterpreted_option.push(item.uninterpreted_option);
                        break;
                    default:
                        acc[i] = s;
                }
            }
            return acc;
        }, {
            deprecated: false,
            idempotency_level: _h.IDEMPOTENCY_UNKNOWN,
            uninterpreted_option: []
        });
    }
    function BT(e, t, r, i) {
        let { resolvedRequestType, resolvedResponseType } = e;
        return {
            path: `/${t}/${e.name}`,
            requestStream: !!e.requestStream,
            responseStream: !!e.responseStream,
            requestSerialize: ho(resolvedRequestType),
            requestDeserialize: uo(resolvedRequestType, r),
            responseSerialize: ho(resolvedResponseType),
            responseDeserialize: uo(resolvedResponseType, r),
            originalName: xT(e.name),
            requestType: fo(resolvedRequestType, r, i),
            responseType: fo(resolvedResponseType, r, i),
            options: UT(e.parsedOptions)
        };
    }
    function zT(e, t, r, i) {
        let s = {};
        for (let n of e.methodsArray){
            s[n.name] = BT(n, t, r, i);
        }
        return s;
    }
    function fo(e, t, r) {
        let i = e.toDescriptor("proto3");
        return {
            format: "Protocol Buffer 3 DescriptorProto",
            type: i.$type.toObject(i, Sh),
            fileDescriptorProtos: r,
            serialize: ho(e),
            deserialize: uo(e, t)
        };
    }
    function HT(e, t) {
        let r = e.toDescriptor("proto3");
        return {
            format: "Protocol Buffer 3 EnumDescriptorProto",
            type: r.$type.toObject(r, Sh),
            fileDescriptorProtos: t
        };
    }
    function WT(e, t, r, i) {
        if (e instanceof ne.Service) {
            return zT(e, t, r, i);
        } else if (e instanceof ne.Type) {
            return fo(e, r, i);
        } else if (e instanceof ne.Enum) {
            return HT(e, i);
        } else {
            throw Error("Type mismatch in reflection object handling");
        }
    }
    function js(e, t) {
        let r = {};
        e.resolveAll();
        let s = e.toDescriptor("proto3").file.map((n)=>Buffer.from($r.FileDescriptorProto.encode(n).finish()));
        for (let [n, a] of Ch(e, "")){
            r[n] = WT(a, n, t, s);
        }
        return r;
    }
    function Eh(e, t) {
        t = t || {};
        let r = ne.Root.fromDescriptor(e);
        r.resolveAll();
        return js(r, t);
    }
    function jT(e, t) {
        return Vr.loadProtosWithOptions(e, t).then((r)=>js(r, t));
    }
    Th.load = jT;
    function GT(e, t) {
        let r = Vr.loadProtosWithOptionsSync(e, t);
        return js(r, t);
    }
    Th.loadSync = GT;
    function $T(e, t) {
        t = t || {};
        let r = ne.Root.fromJSON(e);
        r.resolveAll();
        return js(r, t);
    }
    Th.fromJSON = $T;
    function VT(e, t) {
        let r = $r.FileDescriptorSet.decode(e);
        return Eh(r, t);
    }
    Th.loadFileDescriptorSetFromBuffer = VT;
    function YT(e, t) {
        let r = $r.FileDescriptorSet.fromObject(e);
        return Eh(r, t);
    }
    Th.loadFileDescriptorSetFromObject = YT;
    Vr.addCommonProtos();
});
const Zt = C(function(zh) {
    const __dirname = "/home/runner/work/claude-cli-internal/claude-cli-internal/node_modules/@grpc/grpc-js/build/src";
    Object.defineProperty(zh, "__esModule", {
        value: true
    });
    zh.registerChannelzSocket = zh.registerChannelzServer = zh.registerChannelzSubchannel = zh.registerChannelzChannel = zh.ChannelzCallTrackerStub = zh.ChannelzCallTracker = zh.ChannelzChildrenTrackerStub = zh.ChannelzChildrenTracker = zh.ChannelzTrace = zh.ChannelzTraceStub = undefined;
    zh.unregisterChannelzRef = r0;
    zh.getChannelzHandlers = Uh;
    zh.getChannelzServiceDefinition = Bh;
    zh.setup = f0;
    var Qt = Le("net");
    const Me = Qc();
    var _t = Ae();
    var Ct = k();
    var Ph = Pe();
    var Nh = fs();
    var Mh = vs();
    function go(e) {
        return {
            channel_id: e.id,
            name: e.name
        };
    }
    function mo(e) {
        return {
            subchannel_id: e.id,
            name: e.name
        };
    }
    function t0(ref) {
        return {
            server_id: ref.id
        };
    }
    function $s(ref) {
        return {
            socket_id: ref.id,
            name: ref.name
        };
    }
    const bh = 32;
    var vo = 100;
    class Ih {
        constructor(){
            this.events = [];
            this.creationTimestamp = new Date;
            this.eventsLogged = 0;
        }
        addTrace() {}
        getTraceMessage() {
            return {
                creation_timestamp: St(this.creationTimestamp),
                num_events_logged: this.eventsLogged,
                events: []
            };
        }
    }
    zh.ChannelzTraceStub = Ih;
    class xh {
        constructor(){
            this.events = [];
            this.eventsLogged = 0;
            this.creationTimestamp = new Date;
        }
        addTrace(severity, description, r) {
            let timestamp = new Date;
            this.events.push({
                description,
                severity,
                timestamp,
                childChannel: r?.kind === "channel" ? r : undefined,
                childSubchannel: r?.kind === "subchannel" ? r : undefined
            });
            if (this.events.length >= bh * 2) {
                this.events = this.events.slice(bh);
            }
            this.eventsLogged += 1;
        }
        getTraceMessage() {
            return {
                creation_timestamp: St(this.creationTimestamp),
                num_events_logged: this.eventsLogged,
                events: this.events.map((e)=>({
                        description: e.description,
                        severity: e.severity,
                        timestamp: St(e.timestamp),
                        channel_ref: e.childChannel ? go(e.childChannel) : null,
                        subchannel_ref: e.childSubchannel ? mo(e.childSubchannel) : null
                    }))
            };
        }
    }
    zh.ChannelzTrace = xh;
    class yo {
        constructor(){
            this.channelChildren = new Me.OrderedMap;
            this.subchannelChildren = new Me.OrderedMap;
            this.socketChildren = new Me.OrderedMap;
            this.trackerMap = {
                channel: this.channelChildren,
                subchannel: this.subchannelChildren,
                socket: this.socketChildren
            };
        }
        refChild(e) {
            let t = this.trackerMap[e.kind];
            let r = t.find(e.id);
            if (r.equals(t.end())) {
                t.setElement(e.id, {
                    ref: e,
                    count: 1
                }, r);
            } else {
                r.pointer[1].count += 1;
            }
        }
        unrefChild(e) {
            let t = this.trackerMap[e.kind];
            let r = t.getElementByKey(e.id);
            if (r !== undefined) {
                r.count -= 1;
                if (r.count === 0) {
                    t.eraseElementByKey(e.id);
                }
            }
        }
        getChildLists() {
            return {
                channels: this.channelChildren,
                subchannels: this.subchannelChildren,
                sockets: this.socketChildren
            };
        }
    }
    zh.ChannelzChildrenTracker = yo;
    class kh extends yo {
        refChild() {}
        unrefChild() {}
    }
    zh.ChannelzChildrenTrackerStub = kh;
    class _o {
        constructor(){
            this.callsStarted = 0;
            this.callsSucceeded = 0;
            this.callsFailed = 0;
            this.lastCallStartedTimestamp = null;
        }
        addCallStarted() {
            this.callsStarted += 1;
            this.lastCallStartedTimestamp = new Date;
        }
        addCallSucceeded() {
            this.callsSucceeded += 1;
        }
        addCallFailed() {
            this.callsFailed += 1;
        }
    }
    zh.ChannelzCallTracker = _o;
    class Dh extends _o {
        addCallStarted() {}
        addCallSucceeded() {}
        addCallFailed() {}
    }
    zh.ChannelzCallTrackerStub = Dh;
    var Ht = {
        channel: new Me.OrderedMap,
        subchannel: new Me.OrderedMap,
        server: new Me.OrderedMap,
        socket: new Me.OrderedMap
    };
    const Vs = (kind)=>{
        let t = 1;
        function r() {
            return t++;
        }
        let i = Ht[kind];
        return (name, getInfo, a)=>{
            let id_1 = r();
            let l = {
                id: id_1,
                name,
                kind
            };
            if (a) {
                i.setElement(id_1, {
                    ref: l,
                    getInfo
                });
            }
            return l;
        };
    };
    zh.registerChannelzChannel = Vs("channel");
    zh.registerChannelzSubchannel = Vs("subchannel");
    zh.registerChannelzServer = Vs("server");
    zh.registerChannelzSocket = Vs("socket");
    function r0(e) {
        Ht[e.kind].eraseElementByKey(e.id);
    }
    function i0(e) {
        let t = Number.parseInt(e, 16);
        return [
            t / 256 | 0,
            t % 256
        ];
    }
    function Oh(e) {
        if (e === "") {
            return [];
        }
        let t = e.split(":").map((i)=>i0(i));
        return [].concat(...t);
    }
    function s0(host) {
        return Qt.isIPv6(host) && host.toLowerCase().startsWith("::ffff:") && Qt.isIPv4(host.substring(7));
    }
    function wh(e) {
        return Buffer.from(Uint8Array.from(e.split(".").map((t)=>Number.parseInt(t))));
    }
    function n0(host) {
        if (Qt.isIPv4(host)) {
            return wh(host);
        } else if (s0(host)) {
            return wh(host.substring(7));
        } else if (Qt.isIPv6(host)) {
            let t;
            let r;
            let i = host.indexOf("::");
            if (i === -1) {
                t = host;
                r = "";
            } else {
                t = host.substring(0, i);
                r = host.substring(i + 2);
            }
            let s = Buffer.from(Oh(t));
            let n = Buffer.from(Oh(r));
            let a = Buffer.alloc(16 - s.length - n.length, 0);
            return Buffer.concat([
                s,
                a,
                n
            ]);
        } else {
            return null;
        }
    }
    function Lh(state) {
        switch(state){
            case _t.ConnectivityState.CONNECTING:
                return {
                    state: "CONNECTING"
                };
            case _t.ConnectivityState.IDLE:
                return {
                    state: "IDLE"
                };
            case _t.ConnectivityState.READY:
                return {
                    state: "READY"
                };
            case _t.ConnectivityState.SHUTDOWN:
                return {
                    state: "SHUTDOWN"
                };
            case _t.ConnectivityState.TRANSIENT_FAILURE:
                return {
                    state: "TRANSIENT_FAILURE"
                };
            default:
                return {
                    state: "UNKNOWN"
                };
        }
    }
    function St(e) {
        if (!e) {
            return null;
        }
        let t = e.getTime();
        return {
            seconds: t / 1000 | 0,
            nanos: t % 1000 * 1000000
        };
    }
    function Fh(e) {
        let t = e.getInfo();
        let channel_ref = [];
        let subchannel_ref = [];
        t.children.channels.forEach((s)=>{
            channel_ref.push(go(s[1].ref));
        });
        t.children.subchannels.forEach((s)=>{
            subchannel_ref.push(mo(s[1].ref));
        });
        return {
            ref: go(e.ref),
            data: {
                target: t.target,
                state: Lh(t.state),
                calls_started: t.callTracker.callsStarted,
                calls_succeeded: t.callTracker.callsSucceeded,
                calls_failed: t.callTracker.callsFailed,
                last_call_started_timestamp: St(t.callTracker.lastCallStartedTimestamp),
                trace: t.trace.getTraceMessage()
            },
            channel_ref,
            subchannel_ref
        };
    }
    function GetChannel(e, t) {
        let r = parseInt(e.request.channel_id, 10);
        let i = Ht.channel.getElementByKey(r);
        if (i === undefined) {
            t({
                code: Ct.Status.NOT_FOUND,
                details: `No channel data found for id ${r}`
            });
            return;
        }
        t(null, {
            channel: Fh(i)
        });
    }
    function GetTopChannels(e, t) {
        let r = parseInt(e.request.max_results, 10) || vo;
        let channel = [];
        let s = parseInt(e.request.start_channel_id, 10);
        let Ht_channel = Ht.channel;
        let a;
        for(a = Ht_channel.lowerBound(s); !a.equals(Ht_channel.end()) && channel.length < r; a = a.next()){
            channel.push(Fh(a.pointer[1]));
        }
        t(null, {
            channel,
            end: a.equals(Ht_channel.end())
        });
    }
    function qh(e) {
        let t = e.getInfo();
        let listen_socket = [];
        t.listenerChildren.sockets.forEach((i)=>{
            listen_socket.push($s(i[1].ref));
        });
        return {
            ref: t0(e.ref),
            data: {
                calls_started: t.callTracker.callsStarted,
                calls_succeeded: t.callTracker.callsSucceeded,
                calls_failed: t.callTracker.callsFailed,
                last_call_started_timestamp: St(t.callTracker.lastCallStartedTimestamp),
                trace: t.trace.getTraceMessage()
            },
            listen_socket
        };
    }
    function GetServer(e, t) {
        let r = parseInt(e.request.server_id, 10);
        let s = Ht.server.getElementByKey(r);
        if (s === undefined) {
            t({
                code: Ct.Status.NOT_FOUND,
                details: `No server data found for id ${r}`
            });
            return;
        }
        t(null, {
            server: qh(s)
        });
    }
    function GetServers(e, t) {
        let r = parseInt(e.request.max_results, 10) || vo;
        let i = parseInt(e.request.start_server_id, 10);
        let Ht_server = Ht.server;
        let server = [];
        let a;
        for(a = Ht_server.lowerBound(i); !a.equals(Ht_server.end()) && server.length < r; a = a.next()){
            server.push(qh(a.pointer[1]));
        }
        t(null, {
            server,
            end: a.equals(Ht_server.end())
        });
    }
    function GetSubchannel(e, t) {
        let r = parseInt(e.request.subchannel_id, 10);
        let i = Ht.subchannel.getElementByKey(r);
        if (i === undefined) {
            t({
                code: Ct.Status.NOT_FOUND,
                details: `No subchannel data found for id ${r}`
            });
            return;
        }
        let s = i.getInfo();
        let n = [];
        s.children.sockets.forEach((o)=>{
            n.push($s(o[1].ref));
        });
        let subchannel = {
            ref: mo(i.ref),
            data: {
                target: s.target,
                state: Lh(s.state),
                calls_started: s.callTracker.callsStarted,
                calls_succeeded: s.callTracker.callsSucceeded,
                calls_failed: s.callTracker.callsFailed,
                last_call_started_timestamp: St(s.callTracker.lastCallStartedTimestamp),
                trace: s.trace.getTraceMessage()
            },
            socket_ref: n
        };
        t(null, {
            subchannel
        });
    }
    function Ah(e) {
        if (Ph.isTcpSubchannelAddress(e)) {
            return {
                address: "tcpip_address",
                tcpip_address: {
                    ip_address: n0(e.host) ?? undefined,
                    port: e.port
                }
            };
        } else {
            return {
                address: "uds_address",
                uds_address: {
                    filename: e.path
                }
            };
        }
    }
    function GetSocket(e, t) {
        let o = parseInt(e.request.socket_id, 10);
        let l = Ht.socket.getElementByKey(o);
        if (l === undefined) {
            t({
                code: Ct.Status.NOT_FOUND,
                details: `No socket data found for id ${o}`
            });
            return;
        }
        let c = l.getInfo();
        let security = c.security ? {
            model: "tls",
            tls: {
                cipher_suite: c.security.cipherSuiteStandardName ? "standard_name" : "other_name",
                standard_name: c.security.cipherSuiteStandardName ?? undefined,
                other_name: c.security.cipherSuiteOtherName ?? undefined,
                local_certificate: c.security.localCertificate ?? undefined,
                remote_certificate: c.security.remoteCertificate ?? undefined
            }
        } : null;
        let d = {
            ref: $s(l.ref),
            local: c.localAddress ? Ah(c.localAddress) : null,
            remote: c.remoteAddress ? Ah(c.remoteAddress) : null,
            remote_name: c.remoteName ?? undefined,
            security,
            data: {
                keep_alives_sent: c.keepAlivesSent,
                streams_started: c.streamsStarted,
                streams_succeeded: c.streamsSucceeded,
                streams_failed: c.streamsFailed,
                last_local_stream_created_timestamp: St(c.lastLocalStreamCreatedTimestamp),
                last_remote_stream_created_timestamp: St(c.lastRemoteStreamCreatedTimestamp),
                messages_received: c.messagesReceived,
                messages_sent: c.messagesSent,
                last_message_received_timestamp: St(c.lastMessageReceivedTimestamp),
                last_message_sent_timestamp: St(c.lastMessageSentTimestamp),
                local_flow_control_window: c.localFlowControlWindow ? {
                    value: c.localFlowControlWindow
                } : null,
                remote_flow_control_window: c.remoteFlowControlWindow ? {
                    value: c.remoteFlowControlWindow
                } : null
            }
        };
        t(null, {
            socket: d
        });
    }
    function GetServerSockets(e, t) {
        let r = parseInt(e.request.server_id, 10);
        let i = Ht.server.getElementByKey(r);
        if (i === undefined) {
            t({
                code: Ct.Status.NOT_FOUND,
                details: `No server data found for id ${r}`
            });
            return;
        }
        let s = parseInt(e.request.start_socket_id, 10);
        let n = parseInt(e.request.max_results, 10) || vo;
        let sockets = i.getInfo().sessionChildren.sockets;
        let l = [];
        let c;
        for(c = sockets.lowerBound(s); !c.equals(sockets.end()) && l.length < n; c = c.next()){
            l.push($s(c.pointer[1].ref));
        }
        t(null, {
            socket_ref: l,
            end: c.equals(sockets.end())
        });
    }
    function Uh() {
        return {
            GetChannel,
            GetTopChannels,
            GetServer,
            GetServers,
            GetSubchannel,
            GetSocket,
            GetServerSockets
        };
    }
    var Gs = null;
    function Bh() {
        if (Gs) {
            return Gs;
        }
        let loadSync = po().loadSync;
        let t = loadSync("channelz.proto", {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
            includeDirs: [
                `${__dirname}/../../proto`
            ]
        });
        Gs = Mh.loadPackageDefinition(t).grpc.channelz.v1.Channelz.service;
        return Gs;
    }
    function f0() {
        Nh.registerAdminService(Bh, Uh);
    }
});
const Ys = C(function(Wh) {
    Object.defineProperty(Wh, "__esModule", {
        value: true
    });
    Wh.getNextCallNumber = A0;
    var w0 = 0;
    function A0() {
        return w0++;
    }
});
const So = C(function(Gh) {
    Object.defineProperty(Gh, "__esModule", {
        value: true
    });
    Gh.CompressionAlgorithms = undefined;
    let jh;
    ((e)=>{
        e[e.identity = 0] = "identity";
        e[e.deflate = 1] = "deflate";
        e[e.gzip = 2] = "gzip";
    })(jh || (Gh.CompressionAlgorithms = jh = {}));
});
const Co = C(function(Yh) {
    Object.defineProperty(Yh, "__esModule", {
        value: true
    });
    Yh.BaseFilter = undefined;
    class Vh {
        async sendMetadata(e) {
            return e;
        }
        receiveMetadata(e) {
            return e;
        }
        async sendMessage(e) {
            return e;
        }
        async receiveMessage(e) {
            return e;
        }
        receiveTrailers(e) {
            return e;
        }
    }
    Yh.BaseFilter = Vh;
});
const To = C(function(sf) {
    Object.defineProperty(sf, "__esModule", {
        value: true
    });
    sf.CompressionFilterFactory = sf.CompressionFilter = undefined;
    const er = Le("zlib");
    const Ks = So();
    const Ce = k();
    const Xh = Co();
    const Qh = K();
    const N0 = (e)=>typeof e === "number" && typeof Ks.CompressionAlgorithms[e] === "string";
    class qi {
        async writeMessage(e, t) {
            let r = e;
            if (t) {
                r = await this.compressMessage(r);
            }
            let i = Buffer.allocUnsafe(r.length + 5);
            i.writeUInt8(t ? 1 : 0, 0);
            i.writeUInt32BE(r.length, 1);
            r.copy(i, 5);
            return i;
        }
        async readMessage(e) {
            let t = e.readUInt8(0) === 1;
            let r = e.slice(5);
            if (t) {
                r = await this.decompressMessage(r);
            }
            return r;
        }
    }
    class Yr extends qi {
        async compressMessage(e) {
            return e;
        }
        async writeMessage(e, t) {
            let r = Buffer.allocUnsafe(e.length + 5);
            r.writeUInt8(0, 0);
            r.writeUInt32BE(e.length, 1);
            e.copy(r, 5);
            return r;
        }
        decompressMessage(e) {
            return Promise.reject(Error('Received compressed message but "grpc-encoding" header was identity'));
        }
    }
    class Zh extends qi {
        constructor(e){
            super();
            this.maxRecvMessageLength = e;
        }
        compressMessage(e) {
            return new Promise((resolve, reject)=>{
                er.deflate(e, (i, s)=>{
                    if (i) {
                        reject(i);
                    } else {
                        resolve(s);
                    }
                });
            });
        }
        decompressMessage(e) {
            return new Promise((resolve, reject)=>{
                let i = 0;
                let s = [];
                let n = er.createInflate();
                n.on("error", (a)=>{
                    reject({
                        code: Ce.Status.INTERNAL,
                        details: "Failed to decompress deflate-encoded message"
                    });
                });
                n.on("data", (a)=>{
                    s.push(a);
                    i += a.byteLength;
                    if (this.maxRecvMessageLength !== -1 && i > this.maxRecvMessageLength) {
                        n.destroy();
                        reject({
                            code: Ce.Status.RESOURCE_EXHAUSTED,
                            details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}`
                        });
                    }
                });
                n.on("end", ()=>{
                    resolve(Buffer.concat(s));
                });
                n.write(e);
                n.end();
            });
        }
    }
    class ef extends qi {
        constructor(e){
            super();
            this.maxRecvMessageLength = e;
        }
        compressMessage(e) {
            return new Promise((resolve, reject)=>{
                er.gzip(e, (i, s)=>{
                    if (i) {
                        reject(i);
                    } else {
                        resolve(s);
                    }
                });
            });
        }
        decompressMessage(e) {
            return new Promise((resolve, reject)=>{
                let i = 0;
                let s = [];
                let n = er.createGunzip();
                n.on("error", (a)=>{
                    reject({
                        code: Ce.Status.INTERNAL,
                        details: "Failed to decompress gzip-encoded message"
                    });
                });
                n.on("data", (a)=>{
                    s.push(a);
                    i += a.byteLength;
                    if (this.maxRecvMessageLength !== -1 && i > this.maxRecvMessageLength) {
                        n.destroy();
                        reject({
                            code: Ce.Status.RESOURCE_EXHAUSTED,
                            details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}`
                        });
                    }
                });
                n.on("end", ()=>{
                    resolve(Buffer.concat(s));
                });
                n.write(e);
                n.end();
            });
        }
    }
    class tf extends qi {
        constructor(e){
            super();
            this.compressionName = e;
        }
        compressMessage(e) {
            return Promise.reject(Error(`Received message compressed with unsupported compression method ${this.compressionName}`));
        }
        decompressMessage(e) {
            return Promise.reject(Error(`Compression method not supported: ${this.compressionName}`));
        }
    }
    function Jh(e, t) {
        switch(e){
            case "identity":
                return new Yr;
            case "deflate":
                return new Zh(t);
            case "gzip":
                return new ef(t);
            default:
                return new tf(e);
        }
    }
    class Eo extends Xh.BaseFilter {
        constructor(e, t){
            super();
            this.sharedFilterConfig = t;
            this.sendCompression = new Yr;
            this.receiveCompression = new Yr;
            this.currentCompressionAlgorithm = "identity";
            let n = e["grpc.default_compression_algorithm"];
            this.maxReceiveMessageLength = e["grpc.max_receive_message_length"] ?? Ce.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
            this.maxSendMessageLength = e["grpc.max_send_message_length"] ?? Ce.DEFAULT_MAX_SEND_MESSAGE_LENGTH;
            if (n !== undefined) {
                if (N0(n)) {
                    let a = Ks.CompressionAlgorithms[n];
                    let o = t.serverSupportedEncodingHeader?.split(",");
                    if (!o || o.includes(a)) {
                        this.currentCompressionAlgorithm = a;
                        this.sendCompression = Jh(this.currentCompressionAlgorithm, -1);
                    }
                } else {
                    Qh.log(Ce.LogVerbosity.ERROR, `Invalid value provided for grpc.default_compression_algorithm option: ${n}`);
                }
            }
        }
        async sendMetadata(e) {
            let t = await e;
            t.set("grpc-accept-encoding", "identity,deflate,gzip");
            t.set("accept-encoding", "identity");
            if (this.currentCompressionAlgorithm === "identity") {
                t.remove("grpc-encoding");
            } else {
                t.set("grpc-encoding", this.currentCompressionAlgorithm);
            }
            return t;
        }
        receiveMetadata(e) {
            let t = e.get("grpc-encoding");
            if (t.length > 0) {
                let i = t[0];
                if (typeof i === "string") {
                    this.receiveCompression = Jh(i, this.maxReceiveMessageLength);
                }
            }
            e.remove("grpc-encoding");
            let r = e.get("grpc-accept-encoding")[0];
            if (r) {
                this.sharedFilterConfig.serverSupportedEncodingHeader = r;
                if (!r.split(",").includes(this.currentCompressionAlgorithm)) {
                    this.sendCompression = new Yr;
                    this.currentCompressionAlgorithm = "identity";
                }
            }
            e.remove("grpc-accept-encoding");
            return e;
        }
        async sendMessage(e) {
            let r = await e;
            if (this.maxSendMessageLength !== -1 && r.message.length > this.maxSendMessageLength) {
                throw {
                    code: Ce.Status.RESOURCE_EXHAUSTED,
                    details: `Attempted to send message with a size larger than ${this.maxSendMessageLength}`
                };
            }
            let i;
            if (this.sendCompression instanceof Yr) {
                i = false;
            } else {
                i = ((r.flags ?? 0) & 2) === 0;
            }
            return {
                message: await this.sendCompression.writeMessage(r.message, i),
                flags: r.flags
            };
        }
        async receiveMessage(e) {
            return this.receiveCompression.readMessage(await e);
        }
    }
    sf.CompressionFilter = Eo;
    class rf {
        constructor(e, t){
            this.options = t;
            this.sharedFilterConfig = {};
        }
        createFilter() {
            return new Eo(this.options, this.sharedFilterConfig);
        }
    }
    sf.CompressionFilterFactory = rf;
});
const Ui = C(function(af) {
    Object.defineProperty(af, "__esModule", {
        value: true
    });
    af.restrictControlPlaneStatusCode = x0;
    var ae = k();
    var I0 = [
        ae.Status.OK,
        ae.Status.INVALID_ARGUMENT,
        ae.Status.NOT_FOUND,
        ae.Status.ALREADY_EXISTS,
        ae.Status.FAILED_PRECONDITION,
        ae.Status.ABORTED,
        ae.Status.OUT_OF_RANGE,
        ae.Status.DATA_LOSS
    ];
    function x0(e, t) {
        if (I0.includes(e)) {
            return {
                code: ae.Status.INTERNAL,
                details: `Invalid status from control plane: ${e} ${ae.Status[e]} ${t}`
            };
        } else {
            return {
                code: e,
                details: t
            };
        }
    }
});
const Kr = C(function(of) {
    Object.defineProperty(of, "__esModule", {
        value: true
    });
    of.minDeadline = D0;
    of.getDeadlineTimeoutString = F0;
    of.getRelativeTimeout = U0;
    of.deadlineToString = B0;
    of.formatDateDifference = z0;
    function D0(...e) {
        let t = Infinity;
        for (let r of e){
            let i = r instanceof Date ? r.getTime() : r;
            if (i < t) {
                t = i;
            }
        }
        return t;
    }
    var L0 = [
        [
            "m",
            1
        ],
        [
            "S",
            1000
        ],
        [
            "M",
            60000
        ],
        [
            "H",
            3600000
        ]
    ];
    function F0(e) {
        let t = new Date().getTime();
        if (e instanceof Date) {
            e = e.getTime();
        }
        let r = Math.max(e - t, 0);
        for (let [i, s] of L0){
            let n = r / s;
            if (n < 100000000) {
                return String(Math.ceil(n)) + i;
            }
        }
        throw Error("Deadline is too far in the future");
    }
    var q0 = 2147483647;
    function U0(e) {
        let t = e instanceof Date ? e.getTime() : e;
        let r = new Date().getTime();
        let i = t - r;
        if (i < 0) {
            return 0;
        } else if (i > q0) {
            return Infinity;
        } else {
            return i;
        }
    }
    function B0(e) {
        if (e instanceof Date) {
            return e.toISOString();
        } else {
            let t = new Date(e);
            if (Number.isNaN(t.getTime())) {
                return `${e}`;
            } else {
                return t.toISOString();
            }
        }
    }
    function z0(e, t) {
        return `${((t.getTime() - e.getTime()) / 1000).toFixed(3)}s`;
    }
});
const Js = C(function(lf) {
    Object.defineProperty(lf, "__esModule", {
        value: true
    });
    lf.FilterStackFactory = lf.FilterStack = undefined;
    class Ro {
        constructor(e){
            this.filters = e;
        }
        sendMetadata(e) {
            let t = e;
            for(let r = 0; r < this.filters.length; r++){
                t = this.filters[r].sendMetadata(t);
            }
            return t;
        }
        receiveMetadata(e) {
            let t = e;
            for(let r = this.filters.length - 1; r >= 0; r--){
                t = this.filters[r].receiveMetadata(t);
            }
            return t;
        }
        sendMessage(e) {
            let t = e;
            for(let r = 0; r < this.filters.length; r++){
                t = this.filters[r].sendMessage(t);
            }
            return t;
        }
        receiveMessage(e) {
            let t = e;
            for(let r = this.filters.length - 1; r >= 0; r--){
                t = this.filters[r].receiveMessage(t);
            }
            return t;
        }
        receiveTrailers(e) {
            let t = e;
            for(let r = this.filters.length - 1; r >= 0; r--){
                t = this.filters[r].receiveTrailers(t);
            }
            return t;
        }
        push(e) {
            this.filters.unshift(...e);
        }
        getFilters() {
            return this.filters;
        }
    }
    lf.FilterStack = Ro;
    class bo {
        constructor(e){
            this.factories = e;
        }
        push(e) {
            this.factories.unshift(...e);
        }
        clone() {
            return new bo([
                ...this.factories
            ]);
        }
        createFilter() {
            return new Ro(this.factories.map((e)=>e.createFilter()));
        }
    }
    lf.FilterStackFactory = bo;
});
const Cf = C(function(_f) {
    Object.defineProperty(_f, "__esModule", {
        value: true
    });
    _f.SingleSubchannelChannel = undefined;
    const uf = Ys();
    const Et = Zt();
    const df = To();
    const hf = Ae();
    const Tt = k();
    const ff = Ui();
    const pf = Kr();
    const gf = Js();
    const Jr = ue();
    const mf = rt();
    const tr = we();
    class vf {
        constructor(e, t, r, i, s){
            this.subchannel = e;
            this.method = t;
            this.options = i;
            this.callNumber = s;
            this.childCall = null;
            this.pendingMessage = null;
            this.readPending = false;
            this.halfClosePending = false;
            this.pendingStatus = null;
            this.readFilterPending = false;
            this.writeFilterPending = false;
            let o = this.method.split("/");
            let l = "";
            if (o.length >= 2) {
                l = o[1];
            }
            let c = tr.splitHostPort(this.options.host)?.host ?? "localhost";
            this.serviceUrl = `https://${c}/${l}`;
            let u = pf.getRelativeTimeout(i.deadline);
            if (u !== Infinity) {
                if (u <= 0) {
                    this.cancelWithStatus(Tt.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
                } else {
                    setTimeout(()=>{
                        this.cancelWithStatus(Tt.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
                    }, u);
                }
            }
            this.filterStack = r.createFilter();
        }
        cancelWithStatus(e, t) {
            if (this.childCall) {
                this.childCall.cancelWithStatus(e, t);
            } else {
                this.pendingStatus = {
                    code: e,
                    details: t,
                    metadata: new Jr.Metadata
                };
            }
        }
        getPeer() {
            return this.childCall?.getPeer() ?? this.subchannel.getAddress();
        }
        async start(e, t) {
            if (this.pendingStatus) {
                t.onReceiveStatus(this.pendingStatus);
                return;
            }
            if (this.subchannel.getConnectivityState() !== hf.ConnectivityState.READY) {
                t.onReceiveStatus({
                    code: Tt.Status.UNAVAILABLE,
                    details: "Subchannel not ready",
                    metadata: new Jr.Metadata
                });
                return;
            }
            let r = await this.filterStack.sendMetadata(Promise.resolve(e));
            let i;
            try {
                i = await this.subchannel.getCallCredentials().generateMetadata({
                    method_name: this.method,
                    service_url: this.serviceUrl
                });
            } catch (error) {
                let a = error;
                let { code, details } = ff.restrictControlPlaneStatusCode(typeof a.code === "number" ? a.code : Tt.Status.UNKNOWN, `Getting metadata from plugin failed with error: ${a.message}`);
                t.onReceiveStatus({
                    code,
                    details,
                    metadata: new Jr.Metadata
                });
                return;
            }
            i.merge(r);
            let s = {
                onReceiveMetadata: async (n)=>{
                    t.onReceiveMetadata(await this.filterStack.receiveMetadata(n));
                },
                onReceiveMessage: async (n)=>{
                    this.readFilterPending = true;
                    let a = await this.filterStack.receiveMessage(n);
                    this.readFilterPending = false;
                    t.onReceiveMessage(a);
                    if (this.pendingStatus) {
                        t.onReceiveStatus(this.pendingStatus);
                    }
                },
                onReceiveStatus: async (n)=>{
                    let a = await this.filterStack.receiveTrailers(n);
                    if (this.readFilterPending) {
                        this.pendingStatus = a;
                    } else {
                        t.onReceiveStatus(a);
                    }
                }
            };
            this.childCall = this.subchannel.createCall(i, this.options.host, this.method, s);
            if (this.readPending) {
                this.childCall.startRead();
            }
            if (this.pendingMessage) {
                this.childCall.sendMessageWithContext(this.pendingMessage.context, this.pendingMessage.message);
            }
            if (this.halfClosePending && !this.writeFilterPending) {
                this.childCall.halfClose();
            }
        }
        async sendMessageWithContext(e, t) {
            this.writeFilterPending = true;
            let r = await this.filterStack.sendMessage(Promise.resolve({
                message: t,
                flags: e.flags
            }));
            this.writeFilterPending = false;
            if (this.childCall) {
                this.childCall.sendMessageWithContext(e, r.message);
                if (this.halfClosePending) {
                    this.childCall.halfClose();
                }
            } else {
                this.pendingMessage = {
                    context: e,
                    message: r.message
                };
            }
        }
        startRead() {
            if (this.childCall) {
                this.childCall.startRead();
            } else {
                this.readPending = true;
            }
        }
        halfClose() {
            if (this.childCall && !this.writeFilterPending) {
                this.childCall.halfClose();
            } else {
                this.halfClosePending = true;
            }
        }
        getCallNumber() {
            return this.callNumber;
        }
        setCredentials(e) {
            throw Error("Method not implemented.");
        }
        getAuthContext() {
            if (this.childCall) {
                return this.childCall.getAuthContext();
            } else {
                return null;
            }
        }
    }
    class yf {
        constructor(e, t, r){
            this.subchannel = e;
            this.target = t;
            this.channelzEnabled = false;
            this.channelzTrace = new Et.ChannelzTrace;
            this.callTracker = new Et.ChannelzCallTracker;
            this.childrenTracker = new Et.ChannelzChildrenTracker;
            this.channelzEnabled = r["grpc.enable_channelz"] !== 0;
            this.channelzRef = Et.registerChannelzChannel(tr.uriToString(t), ()=>({
                    target: `${tr.uriToString(t)} (${e.getAddress()})`,
                    state: this.subchannel.getConnectivityState(),
                    trace: this.channelzTrace,
                    callTracker: this.callTracker,
                    children: this.childrenTracker.getChildLists()
                }), this.channelzEnabled);
            if (this.channelzEnabled) {
                this.childrenTracker.refChild(e.getChannelzRef());
            }
            this.filterStackFactory = new gf.FilterStackFactory([
                new df.CompressionFilterFactory(this, r)
            ]);
        }
        close() {
            if (this.channelzEnabled) {
                this.childrenTracker.unrefChild(this.subchannel.getChannelzRef());
            }
            Et.unregisterChannelzRef(this.channelzRef);
        }
        getTarget() {
            return tr.uriToString(this.target);
        }
        getConnectivityState(e) {
            throw Error("Method not implemented.");
        }
        watchConnectivityState(e, t, r) {
            throw Error("Method not implemented.");
        }
        getChannelzRef() {
            return this.channelzRef;
        }
        createCall(e, t) {
            let r = {
                deadline: t,
                host: mf.getDefaultAuthority(this.target),
                flags: Tt.Propagate.DEFAULTS,
                parentCall: null
            };
            return new vf(this.subchannel, e, this.filterStackFactory, r, uf.getNextCallNumber());
        }
    }
    _f.SingleSubchannelChannel = yf;
});
const Nf = C(function(Af) {
    Object.defineProperty(Af, "__esModule", {
        value: true
    });
    Af.Subchannel = undefined;
    const b = Ae();
    const Ef = Ir();
    const Xr = K();
    const rr = k();
    const Tf = we();
    const Rf = Pe();
    const oe = Zt();
    const bf = Cf();
    const Y0 = "subchannel";
    const K0 = 2147483647;
    class wf {
        constructor(e, t, r, i, s){
            this.channelTarget = e;
            this.subchannelAddress = t;
            this.options = r;
            this.connector = s;
            this.connectivityState = b.ConnectivityState.IDLE;
            this.transport = null;
            this.continueConnecting = false;
            this.stateListeners = new Set;
            this.refcount = 0;
            this.channelzEnabled = true;
            this.dataProducers = new Map;
            this.subchannelChannel = null;
            let a = {
                initialDelay: r["grpc.initial_reconnect_backoff_ms"],
                maxDelay: r["grpc.max_reconnect_backoff_ms"]
            };
            this.backoffTimeout = new Ef.BackoffTimeout(()=>{
                this.handleBackoffTimer();
            }, a);
            this.backoffTimeout.unref();
            this.subchannelAddressString = Rf.subchannelAddressToString(t);
            this.keepaliveTime = r["grpc.keepalive_time_ms"] ?? -1;
            if (r["grpc.enable_channelz"] === 0) {
                this.channelzEnabled = false;
                this.channelzTrace = new oe.ChannelzTraceStub;
                this.callTracker = new oe.ChannelzCallTrackerStub;
                this.childrenTracker = new oe.ChannelzChildrenTrackerStub;
                this.streamTracker = new oe.ChannelzCallTrackerStub;
            } else {
                this.channelzTrace = new oe.ChannelzTrace;
                this.callTracker = new oe.ChannelzCallTracker;
                this.childrenTracker = new oe.ChannelzChildrenTracker;
                this.streamTracker = new oe.ChannelzCallTracker;
            }
            this.channelzRef = oe.registerChannelzSubchannel(this.subchannelAddressString, ()=>this.getChannelzInfo(), this.channelzEnabled);
            this.channelzTrace.addTrace("CT_INFO", "Subchannel created");
            this.trace(`Subchannel constructed with options ${JSON.stringify(r, undefined, 2)}`);
            this.secureConnector = i._createSecureConnector(e, r);
        }
        getChannelzInfo() {
            return {
                state: this.connectivityState,
                trace: this.channelzTrace,
                callTracker: this.callTracker,
                children: this.childrenTracker.getChildLists(),
                target: this.subchannelAddressString
            };
        }
        trace(e) {
            Xr.trace(rr.LogVerbosity.DEBUG, Y0, `(${this.channelzRef.id}) ${this.subchannelAddressString} ${e}`);
        }
        refTrace(e) {
            Xr.trace(rr.LogVerbosity.DEBUG, "subchannel_refcount", `(${this.channelzRef.id}) ${this.subchannelAddressString} ${e}`);
        }
        handleBackoffTimer() {
            if (this.continueConnecting) {
                this.transitionToState([
                    b.ConnectivityState.TRANSIENT_FAILURE
                ], b.ConnectivityState.CONNECTING);
            } else {
                this.transitionToState([
                    b.ConnectivityState.TRANSIENT_FAILURE
                ], b.ConnectivityState.IDLE);
            }
        }
        startBackoff() {
            this.backoffTimeout.runOnce();
        }
        stopBackoff() {
            this.backoffTimeout.stop();
            this.backoffTimeout.reset();
        }
        startConnectingInternal() {
            let options = this.options;
            if (options["grpc.keepalive_time_ms"]) {
                let t = Math.min(this.keepaliveTime, K0);
                options = {
                    ...options,
                    "grpc.keepalive_time_ms": t
                };
            }
            this.connector.connect(this.subchannelAddress, this.secureConnector, options).then((t)=>{
                if (this.transitionToState([
                    b.ConnectivityState.CONNECTING
                ], b.ConnectivityState.READY)) {
                    this.transport = t;
                    if (this.channelzEnabled) {
                        this.childrenTracker.refChild(t.getChannelzRef());
                    }
                    t.addDisconnectListener((r)=>{
                        this.transitionToState([
                            b.ConnectivityState.READY
                        ], b.ConnectivityState.IDLE);
                        if (r && this.keepaliveTime > 0) {
                            this.keepaliveTime *= 2;
                            Xr.log(rr.LogVerbosity.ERROR, `Connection to ${Tf.uriToString(this.channelTarget)} at ${this.subchannelAddressString} rejected by server because of excess pings. Increasing ping interval to ${this.keepaliveTime} ms`);
                        }
                    });
                } else {
                    t.shutdown();
                }
            }, (t)=>{
                this.transitionToState([
                    b.ConnectivityState.CONNECTING
                ], b.ConnectivityState.TRANSIENT_FAILURE, `${t}`);
            });
        }
        transitionToState(e, t, r) {
            if (e.indexOf(this.connectivityState) === -1) {
                return false;
            }
            if (r) {
                this.trace(`${b.ConnectivityState[this.connectivityState]} -> ${b.ConnectivityState[t]} with error "${r}"`);
            } else {
                this.trace(`${b.ConnectivityState[this.connectivityState]} -> ${b.ConnectivityState[t]}`);
            }
            if (this.channelzEnabled) {
                this.channelzTrace.addTrace("CT_INFO", `Connectivity state change to ${b.ConnectivityState[t]}`);
            }
            let connectivityState = this.connectivityState;
            this.connectivityState = t;
            switch(t){
                case b.ConnectivityState.READY:
                    this.stopBackoff();
                    break;
                case b.ConnectivityState.CONNECTING:
                    this.startBackoff();
                    this.startConnectingInternal();
                    this.continueConnecting = false;
                    break;
                case b.ConnectivityState.TRANSIENT_FAILURE:
                    if (this.channelzEnabled && this.transport) {
                        this.childrenTracker.unrefChild(this.transport.getChannelzRef());
                    }
                    this.transport?.shutdown();
                    this.transport = null;
                    if (!this.backoffTimeout.isRunning()) {
                        process.nextTick(()=>{
                            this.handleBackoffTimer();
                        });
                    }
                    break;
                case b.ConnectivityState.IDLE:
                    if (this.channelzEnabled && this.transport) {
                        this.childrenTracker.unrefChild(this.transport.getChannelzRef());
                    }
                    this.transport?.shutdown();
                    this.transport = null;
                    break;
                default:
                    throw Error(`Invalid state: unknown ConnectivityState ${t}`);
            }
            for (let a of this.stateListeners){
                a(this, connectivityState, t, this.keepaliveTime, r);
            }
            return true;
        }
        ref() {
            this.refTrace(`refcount ${this.refcount} -> ${this.refcount + 1}`);
            this.refcount += 1;
        }
        unref() {
            this.refTrace(`refcount ${this.refcount} -> ${this.refcount - 1}`);
            this.refcount -= 1;
            if (this.refcount === 0) {
                this.channelzTrace.addTrace("CT_INFO", "Shutting down");
                oe.unregisterChannelzRef(this.channelzRef);
                this.secureConnector.destroy();
                process.nextTick(()=>{
                    this.transitionToState([
                        b.ConnectivityState.CONNECTING,
                        b.ConnectivityState.READY
                    ], b.ConnectivityState.IDLE);
                });
            }
        }
        unrefIfOneRef() {
            if (this.refcount === 1) {
                this.unref();
                return true;
            }
            return false;
        }
        createCall(e, t, r, i) {
            if (!this.transport) {
                throw Error("Cannot create call, subchannel not READY");
            }
            let s;
            if (this.channelzEnabled) {
                this.callTracker.addCallStarted();
                this.streamTracker.addCallStarted();
                s = {
                    onCallEnd: (n)=>{
                        if (n.code === rr.Status.OK) {
                            this.callTracker.addCallSucceeded();
                        } else {
                            this.callTracker.addCallFailed();
                        }
                    }
                };
            } else {
                s = {};
            }
            return this.transport.createCall(e, t, r, i, s);
        }
        startConnecting() {
            process.nextTick(()=>{
                if (!this.transitionToState([
                    b.ConnectivityState.IDLE
                ], b.ConnectivityState.CONNECTING)) {
                    if (this.connectivityState === b.ConnectivityState.TRANSIENT_FAILURE) {
                        this.continueConnecting = true;
                    }
                }
            });
        }
        getConnectivityState() {
            return this.connectivityState;
        }
        addConnectivityStateListener(e) {
            this.stateListeners.add(e);
        }
        removeConnectivityStateListener(e) {
            this.stateListeners.delete(e);
        }
        resetBackoff() {
            process.nextTick(()=>{
                this.backoffTimeout.reset();
                this.transitionToState([
                    b.ConnectivityState.TRANSIENT_FAILURE
                ], b.ConnectivityState.CONNECTING);
            });
        }
        getAddress() {
            return this.subchannelAddressString;
        }
        getChannelzRef() {
            return this.channelzRef;
        }
        isHealthy() {
            return true;
        }
        addHealthStateWatcher(e) {}
        removeHealthStateWatcher(e) {}
        getRealSubchannel() {
            return this;
        }
        realSubchannelEquals(e) {
            return e.getRealSubchannel() === this;
        }
        throttleKeepalive(e) {
            if (e > this.keepaliveTime) {
                this.keepaliveTime = e;
            }
        }
        getCallCredentials() {
            return this.secureConnector.getCallCredentials();
        }
        getChannel() {
            if (!this.subchannelChannel) {
                this.subchannelChannel = new bf.SingleSubchannelChannel(this, this.channelTarget, this.options);
            }
            return this.subchannelChannel;
        }
        addDataWatcher(e) {
            throw Error("Not implemented");
        }
        getOrCreateDataProducer(e, t) {
            let r = this.dataProducers.get(e);
            if (r) {
                return r;
            }
            let i = t(this);
            this.dataProducers.set(e, i);
            return i;
        }
        removeDataProducer(e) {
            this.dataProducers.delete(e);
        }
    }
    Af.Subchannel = wf;
});
const xf = C(function(Mf) {
    Object.defineProperty(Mf, "__esModule", {
        value: true
    });
    Mf.GRPC_NODE_USE_ALTERNATIVE_RESOLVER = undefined;
    Mf.GRPC_NODE_USE_ALTERNATIVE_RESOLVER = (process.env.GRPC_NODE_USE_ALTERNATIVE_RESOLVER ?? "false") === "true";
});
const wo = C(function(Bf) {
    Object.defineProperty(Bf, "__esModule", {
        value: true
    });
    Bf.DEFAULT_PORT = undefined;
    Bf.setup = Q0;
    var Xs = rt();
    const Qr = Le("dns");
    const kf = va();
    const Zr = k();
    const Ge = vr();
    const Df = ue();
    const Lf = K();
    const Ff = k();
    const Ee = we();
    const Qs = Le("net");
    const qf = Ir();
    const Zs = xf();
    const J0 = "dns_resolver";
    function Rt(e) {
        Lf.trace(Ff.LogVerbosity.DEBUG, J0, e);
    }
    Bf.DEFAULT_PORT = 443;
    const X0 = 30000;
    class Uf {
        constructor(e, t, r){
            this.target = e;
            this.listener = t;
            this.pendingLookupPromise = null;
            this.pendingTxtPromise = null;
            this.latestLookupResult = null;
            this.latestServiceConfigResult = null;
            this.continueResolving = false;
            this.isNextResolutionTimerRunning = false;
            this.isServiceConfigEnabled = true;
            this.returnedIpResult = false;
            this.alternativeResolver = new Qr.promises.Resolver;
            Rt(`Resolver constructed for target ${Ee.uriToString(e)}`);
            if (e.authority) {
                this.alternativeResolver.setServers([
                    e.authority
                ]);
            }
            let a = Ee.splitHostPort(e.path);
            if (a === null) {
                this.ipResult = null;
                this.dnsHostname = null;
                this.port = null;
            } else if (Qs.isIPv4(a.host) || Qs.isIPv6(a.host)) {
                this.ipResult = [
                    {
                        addresses: [
                            {
                                host: a.host,
                                port: a.port ?? Bf.DEFAULT_PORT
                            }
                        ]
                    }
                ];
                this.dnsHostname = null;
                this.port = null;
            } else {
                this.ipResult = null;
                this.dnsHostname = a.host;
                this.port = a.port ?? Bf.DEFAULT_PORT;
            }
            this.percentage = Math.random() * 100;
            if (r["grpc.service_config_disable_resolution"] === 1) {
                this.isServiceConfigEnabled = false;
            }
            this.defaultResolutionError = {
                code: Zr.Status.UNAVAILABLE,
                details: `Name resolution failed for target ${Ee.uriToString(this.target)}`,
                metadata: new Df.Metadata
            };
            let o = {
                initialDelay: r["grpc.initial_reconnect_backoff_ms"],
                maxDelay: r["grpc.max_reconnect_backoff_ms"]
            };
            this.backoff = new qf.BackoffTimeout(()=>{
                if (this.continueResolving) {
                    this.startResolutionWithBackoff();
                }
            }, o);
            this.backoff.unref();
            this.minTimeBetweenResolutionsMs = r["grpc.dns_min_time_between_resolutions_ms"] ?? X0;
            this.nextResolutionTimer = setTimeout(()=>{}, 0);
            clearTimeout(this.nextResolutionTimer);
        }
        startResolution() {
            if (this.ipResult !== null) {
                if (!this.returnedIpResult) {
                    Rt(`Returning IP address for target ${Ee.uriToString(this.target)}`);
                    setImmediate(()=>{
                        this.listener(Ge.statusOrFromValue(this.ipResult), {}, null, "");
                    });
                    this.returnedIpResult = true;
                }
                this.backoff.stop();
                this.backoff.reset();
                this.stopNextResolutionTimer();
                return;
            }
            if (this.dnsHostname === null) {
                Rt(`Failed to parse DNS address ${Ee.uriToString(this.target)}`);
                setImmediate(()=>{
                    this.listener(Ge.statusOrFromError({
                        code: Zr.Status.UNAVAILABLE,
                        details: `Failed to parse DNS address ${Ee.uriToString(this.target)}`
                    }), {}, null, "");
                });
                this.stopNextResolutionTimer();
            } else {
                if (this.pendingLookupPromise !== null) {
                    return;
                }
                Rt(`Looking up DNS hostname ${this.dnsHostname}`);
                this.latestLookupResult = null;
                let e = this.dnsHostname;
                this.pendingLookupPromise = this.lookup(e);
                this.pendingLookupPromise.then((t)=>{
                    if (this.pendingLookupPromise === null) {
                        return;
                    }
                    this.pendingLookupPromise = null;
                    this.latestLookupResult = Ge.statusOrFromValue(t.map((s)=>({
                            addresses: [
                                s
                            ]
                        })));
                    let r = `[${t.map((s)=>`${s.host}:${s.port}`).join(",")}]`;
                    Rt(`Resolved addresses for target ${Ee.uriToString(this.target)}: ${r}`);
                    let i = this.listener(this.latestLookupResult, {}, this.latestServiceConfigResult, "");
                    this.handleHealthStatus(i);
                }, (t)=>{
                    if (this.pendingLookupPromise === null) {
                        return;
                    }
                    Rt(`Resolution error for target ${Ee.uriToString(this.target)}: ${t.message}`);
                    this.pendingLookupPromise = null;
                    this.stopNextResolutionTimer();
                    this.listener(Ge.statusOrFromError(this.defaultResolutionError), {}, this.latestServiceConfigResult, "");
                });
                if (this.isServiceConfigEnabled && this.pendingTxtPromise === null) {
                    this.pendingTxtPromise = this.resolveTxt(e);
                    this.pendingTxtPromise.then((t)=>{
                        if (this.pendingTxtPromise === null) {
                            return;
                        }
                        this.pendingTxtPromise = null;
                        let r;
                        try {
                            r = kf.extractAndSelectServiceConfig(t, this.percentage);
                            if (r) {
                                this.latestServiceConfigResult = Ge.statusOrFromValue(r);
                            } else {
                                this.latestServiceConfigResult = null;
                            }
                        } catch (error) {
                            this.latestServiceConfigResult = Ge.statusOrFromError({
                                code: Zr.Status.UNAVAILABLE,
                                details: `Parsing service config failed with error ${error.message}`
                            });
                        }
                        if (this.latestLookupResult !== null) {
                            this.listener(this.latestLookupResult, {}, this.latestServiceConfigResult, "");
                        }
                    }, (t)=>{});
                }
            }
        }
        handleHealthStatus(e) {
            if (e) {
                this.backoff.stop();
                this.backoff.reset();
            } else {
                this.continueResolving = true;
            }
        }
        async lookup(e) {
            if (Zs.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) {
                Rt("Using alternative DNS resolver.");
                let r = await Promise.allSettled([
                    this.alternativeResolver.resolve4(e),
                    this.alternativeResolver.resolve6(e)
                ]);
                if (r.every((i)=>i.status === "rejected")) {
                    throw Error(r[0].reason);
                }
                return r.reduce((acc, item)=>{
                    if (item.status === "fulfilled") {
                        return [
                            ...acc,
                            ...item.value
                        ];
                    }
                    return acc;
                }, []).map((host)=>({
                        host,
                        port: +this.port
                    }));
            }
            return (await Qr.promises.lookup(e, {
                all: true
            })).map((r)=>({
                    host: r.address,
                    port: +this.port
                }));
        }
        async resolveTxt(e) {
            if (Zs.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) {
                Rt("Using alternative DNS resolver.");
                return this.alternativeResolver.resolveTxt(e);
            }
            return Qr.promises.resolveTxt(e);
        }
        startNextResolutionTimer() {
            clearTimeout(this.nextResolutionTimer);
            this.nextResolutionTimer = setTimeout(()=>{
                this.stopNextResolutionTimer();
                if (this.continueResolving) {
                    this.startResolutionWithBackoff();
                }
            }, this.minTimeBetweenResolutionsMs);
            this.nextResolutionTimer.unref?.();
            this.isNextResolutionTimerRunning = true;
        }
        stopNextResolutionTimer() {
            clearTimeout(this.nextResolutionTimer);
            this.isNextResolutionTimerRunning = false;
        }
        startResolutionWithBackoff() {
            if (this.pendingLookupPromise === null) {
                this.continueResolving = false;
                this.backoff.runOnce();
                this.startNextResolutionTimer();
                this.startResolution();
            }
        }
        updateResolution() {
            if (this.pendingLookupPromise === null) {
                if (this.isNextResolutionTimerRunning || this.backoff.isRunning()) {
                    if (this.isNextResolutionTimerRunning) {
                        Rt('resolution update delayed by "min time between resolutions" rate limit');
                    } else {
                        Rt(`resolution update delayed by backoff timer until ${this.backoff.getEndTime().toISOString()}`);
                    }
                    this.continueResolving = true;
                } else {
                    this.startResolutionWithBackoff();
                }
            }
        }
        destroy() {
            this.continueResolving = false;
            this.backoff.reset();
            this.backoff.stop();
            this.stopNextResolutionTimer();
            this.pendingLookupPromise = null;
            this.pendingTxtPromise = null;
            this.latestLookupResult = null;
            this.latestServiceConfigResult = null;
            this.returnedIpResult = false;
        }
        static getDefaultAuthority(e) {
            return e.path;
        }
    }
    function Q0() {
        Xs.registerResolver("dns", Uf);
        Xs.registerDefaultScheme("dns");
    }
});
const Ao = C(function(Vf) {
    Object.defineProperty(Vf, "__esModule", {
        value: true
    });
    Vf.parseCIDR = Gf;
    Vf.mapProxyName = nR;
    Vf.getProxiedConnection = aR;
    var bt = K();
    var $e = k();
    var rn = Le("net");
    var zf = Le("http");
    var Hf = K();
    var tn = Pe();
    var Ot = we();
    var Wf = Le("url");
    var jf = wo();
    var eR = "proxy";
    function ei(e) {
        Hf.trace($e.LogVerbosity.DEBUG, eR, e);
    }
    function tR() {
        let e = "";
        let t = "";
        if (process.env.grpc_proxy) {
            t = "grpc_proxy";
            e = process.env.grpc_proxy;
        } else if (process.env.https_proxy) {
            t = "https_proxy";
            e = process.env.https_proxy;
        } else if (process.env.http_proxy) {
            t = "http_proxy";
            e = process.env.http_proxy;
        } else {
            return {};
        }
        let r;
        try {
            r = new Wf.URL(e);
        } catch (o) {
            bt.log($e.LogVerbosity.ERROR, `cannot parse value of "${t}" env var`);
            return {};
        }
        if (r.protocol !== "http:") {
            bt.log($e.LogVerbosity.ERROR, `"${r.protocol}" scheme not supported in proxy URI`);
            return {};
        }
        let i = null;
        if (r.username) {
            if (r.password) {
                bt.log($e.LogVerbosity.INFO, "userinfo found in proxy URI");
                i = decodeURIComponent(`${r.username}:${r.password}`);
            } else {
                i = r.username;
            }
        }
        let r_hostname = r.hostname;
        let r_port = r.port;
        if (r_port === "") {
            r_port = "80";
        }
        let a = {
            address: `${r_hostname}:${r_port}`
        };
        if (i) {
            a.creds = i;
        }
        ei(`Proxy server ${a.address} set by environment variable ${t}`);
        return a;
    }
    function rR() {
        let no_grpc_proxy = process.env.no_grpc_proxy;
        let t = "no_grpc_proxy";
        if (!no_grpc_proxy) {
            no_grpc_proxy = process.env.no_proxy;
            t = "no_proxy";
        }
        if (no_grpc_proxy) {
            ei(`No proxy server list set by environment variable ${t}`);
            return no_grpc_proxy.split(",");
        } else {
            return [];
        }
    }
    function Gf(e) {
        let t = e.split("/");
        if (t.length !== 2) {
            return null;
        }
        let prefixLength = parseInt(t[1], 10);
        if (!rn.isIPv4(t[0]) || Number.isNaN(prefixLength) || prefixLength < 0 || prefixLength > 32) {
            return null;
        }
        return {
            ip: $f(t[0]),
            prefixLength
        };
    }
    function $f(e) {
        return e.split(".").reduce((acc, item)=>(acc << 8) + parseInt(item, 10), 0);
    }
    function iR(e, t) {
        let r = e.ip;
        let i = -1 << 32 - e.prefixLength;
        return ($f(t) & i) === (r & i);
    }
    function sR(e) {
        for (let t of rR()){
            let r = Gf(t);
            if (rn.isIPv4(e) && r && iR(r, e)) {
                return true;
            } else if (e.endsWith(t)) {
                return true;
            }
        }
        return false;
    }
    function nR(target, t) {
        let i = {
            target,
            extraOptions: {}
        };
        if ((t["grpc.enable_http_proxy"] ?? 1) === 0) {
            return i;
        }
        if (target.scheme === "unix") {
            return i;
        }
        let s = tR();
        if (!s.address) {
            return i;
        }
        let n = Ot.splitHostPort(target.path);
        if (!n) {
            return i;
        }
        let n_host = n.host;
        if (sR(n_host)) {
            ei(`Not using proxy for target in no_proxy list: ${Ot.uriToString(target)}`);
            return i;
        }
        let extraOptions = {
            "grpc.http_connect_target": Ot.uriToString(target)
        };
        if (s.creds) {
            extraOptions["grpc.http_connect_creds"] = s.creds;
        }
        return {
            target: {
                scheme: "dns",
                path: s.address
            },
            extraOptions
        };
    }
    function aR(e, t) {
        if (!("grpc.http_connect_target" in t)) {
            return Promise.resolve(null);
        }
        let i = t["grpc.http_connect_target"];
        let s = Ot.parseUri(i);
        if (s === null) {
            return Promise.resolve(null);
        }
        let n = Ot.splitHostPort(s.path);
        if (n === null) {
            return Promise.resolve(null);
        }
        let a = `${n.host}:${n.port ?? jf.DEFAULT_PORT}`;
        let o = {
            method: "CONNECT",
            path: a
        };
        let l = {
            Host: a
        };
        if (tn.isTcpSubchannelAddress(e)) {
            o.host = e.host;
            o.port = e.port;
        } else {
            o.socketPath = e.path;
        }
        if ("grpc.http_connect_creds" in t) {
            l["Proxy-Authorization"] = `Basic ${Buffer.from(t["grpc.http_connect_creds"]).toString("base64")}`;
        }
        o.headers = l;
        let c = tn.subchannelAddressToString(e);
        ei(`Using proxy ${c} to connect to ${o.path}`);
        return new Promise((resolve, reject)=>{
            let h = zf.request(o);
            h.once("connect", (m, f, y)=>{
                h.removeAllListeners();
                f.removeAllListeners();
                if (m.statusCode === 200) {
                    ei(`Successfully connected to ${o.path} through proxy ${c}`);
                    if (y.length > 0) {
                        f.unshift(y);
                    }
                    ei(`Successfully established a plaintext connection to ${o.path} through proxy ${c}`);
                    resolve(f);
                } else {
                    bt.log($e.LogVerbosity.ERROR, `Failed to connect to ${o.path} through proxy ${c} with status ${m.statusCode}`);
                    reject();
                }
            });
            h.once("error", (m)=>{
                h.removeAllListeners();
                bt.log($e.LogVerbosity.ERROR, `Failed to connect to proxy ${c} with error ${m.message}`);
                reject();
            });
            h.end();
        });
    }
});
const Po = C(function(Kf) {
    Object.defineProperty(Kf, "__esModule", {
        value: true
    });
    Kf.StreamDecoder = undefined;
    const wt = {
        NO_DATA: 0,
        0: "NO_DATA",
        READING_SIZE: 1,
        1: "READING_SIZE",
        READING_MESSAGE: 2,
        2: "READING_MESSAGE"
    };
    class Yf {
        constructor(e){
            this.maxReadMessageLength = e;
            this.readState = wt.NO_DATA;
            this.readCompressFlag = Buffer.alloc(1);
            this.readPartialSize = Buffer.alloc(4);
            this.readSizeRemaining = 4;
            this.readMessageSize = 0;
            this.readPartialMessage = [];
            this.readMessageRemaining = 0;
        }
        write(e) {
            let t = 0;
            let r;
            let i = [];
            while(t < e.length){
                switch(this.readState){
                    case wt.NO_DATA:
                        this.readCompressFlag = e.slice(t, t + 1);
                        t += 1;
                        this.readState = wt.READING_SIZE;
                        this.readPartialSize.fill(0);
                        this.readSizeRemaining = 4;
                        this.readMessageSize = 0;
                        this.readMessageRemaining = 0;
                        this.readPartialMessage = [];
                        break;
                    case wt.READING_SIZE:
                        r = Math.min(e.length - t, this.readSizeRemaining);
                        e.copy(this.readPartialSize, 4 - this.readSizeRemaining, t, t + r);
                        this.readSizeRemaining -= r;
                        t += r;
                        if (this.readSizeRemaining === 0) {
                            this.readMessageSize = this.readPartialSize.readUInt32BE(0);
                            if (this.maxReadMessageLength !== -1 && this.readMessageSize > this.maxReadMessageLength) {
                                throw Error(`Received message larger than max (${this.readMessageSize} vs ${this.maxReadMessageLength})`);
                            }
                            this.readMessageRemaining = this.readMessageSize;
                            if (this.readMessageRemaining > 0) {
                                this.readState = wt.READING_MESSAGE;
                            } else {
                                let s = Buffer.concat([
                                    this.readCompressFlag,
                                    this.readPartialSize
                                ], 5);
                                this.readState = wt.NO_DATA;
                                i.push(s);
                            }
                        }
                        break;
                    case wt.READING_MESSAGE:
                        r = Math.min(e.length - t, this.readMessageRemaining);
                        this.readPartialMessage.push(e.slice(t, t + r));
                        this.readMessageRemaining -= r;
                        t += r;
                        if (this.readMessageRemaining === 0) {
                            let s = [
                                this.readCompressFlag,
                                this.readPartialSize
                            ].concat(this.readPartialMessage);
                            let n = Buffer.concat(s, this.readMessageSize + 5);
                            this.readState = wt.NO_DATA;
                            i.push(n);
                        }
                        break;
                    default:
                        throw Error("Unexpected read state");
                }
            }
            return i;
        }
    }
    Kf.StreamDecoder = Yf;
});
const sp = C(function(rp) {
    Object.defineProperty(rp, "__esModule", {
        value: true
    });
    rp.Http2SubchannelCall = undefined;
    const fe = Le("http2");
    const Xf = Le("os");
    const O = k();
    const pe = ue();
    const Qf = Po();
    const Zf = K();
    const ep = k();
    const uR = "subchannel_call";
    function dR(errno) {
        for (let [t, r] of Object.entries(Xf.constants.errno)){
            if (r === errno) {
                return t;
            }
        }
        return `Unknown system error ${errno}`;
    }
    function No(httpStatusCode) {
        let details = `Received HTTP status code ${httpStatusCode}`;
        let r;
        switch(httpStatusCode){
            case 400:
                r = O.Status.INTERNAL;
                break;
            case 401:
                r = O.Status.UNAUTHENTICATED;
                break;
            case 403:
                r = O.Status.PERMISSION_DENIED;
                break;
            case 404:
                r = O.Status.UNIMPLEMENTED;
                break;
            case 429:
            case 502:
            case 503:
            case 504:
                r = O.Status.UNAVAILABLE;
                break;
            default:
                r = O.Status.UNKNOWN;
        }
        return {
            code: r,
            details,
            metadata: new pe.Metadata
        };
    }
    class tp {
        constructor(e, t, r, i, s){
            this.http2Stream = e;
            this.callEventTracker = t;
            this.listener = r;
            this.transport = i;
            this.callId = s;
            this.isReadFilterPending = false;
            this.isPushPending = false;
            this.canPush = false;
            this.readsClosed = false;
            this.statusOutput = false;
            this.unpushedReadMessages = [];
            this.finalStatus = null;
            this.internalError = null;
            this.serverEndedCall = false;
            this.connectionDropped = false;
            let a = i.getOptions()["grpc.max_receive_message_length"] ?? O.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
            this.decoder = new Qf.StreamDecoder(a);
            e.on("response", (o, l)=>{
                let c = "";
                for (let u of Object.keys(o)){
                    c += `\t\t${u}: ${o[u]}${`
`}`;
                }
                this.trace(`Received server headers:
` + c);
                this.httpStatusCode = o[":status"];
                if (l & fe.constants.NGHTTP2_FLAG_END_STREAM) {
                    this.handleTrailers(o);
                } else {
                    let u;
                    try {
                        u = pe.Metadata.fromHttp2Headers(o);
                    } catch (error) {
                        this.endCall({
                            code: O.Status.UNKNOWN,
                            details: error.message,
                            metadata: new pe.Metadata
                        });
                        return;
                    }
                    this.listener.onReceiveMetadata(u);
                }
            });
            e.on("trailers", (o)=>{
                this.handleTrailers(o);
            });
            e.on("data", (o)=>{
                if (this.statusOutput) {
                    return;
                }
                this.trace(`receive HTTP/2 data frame of length ${o.length}`);
                let l;
                try {
                    l = this.decoder.write(o);
                } catch (error) {
                    if (this.httpStatusCode !== undefined && this.httpStatusCode !== 200) {
                        let u = No(this.httpStatusCode);
                        this.cancelWithStatus(u.code, u.details);
                    } else {
                        this.cancelWithStatus(O.Status.RESOURCE_EXHAUSTED, error.message);
                    }
                    return;
                }
                for (let c of l){
                    this.trace(`parsed message of length ${c.length}`);
                    this.callEventTracker.addMessageReceived();
                    this.tryPush(c);
                }
            });
            e.on("end", ()=>{
                this.readsClosed = true;
                this.maybeOutputStatus();
            });
            e.on("close", ()=>{
                this.serverEndedCall = true;
                process.nextTick(()=>{
                    this.trace(`HTTP/2 stream closed with code ${e.rstCode}`);
                    if (this.finalStatus?.code === O.Status.OK) {
                        return;
                    }
                    let l;
                    let c = "";
                    switch(e.rstCode){
                        case fe.constants.NGHTTP2_NO_ERROR:
                            if (this.finalStatus !== null) {
                                return;
                            }
                            if (this.httpStatusCode && this.httpStatusCode !== 200) {
                                let u = No(this.httpStatusCode);
                                l = u.code;
                                c = u.details;
                            } else {
                                l = O.Status.INTERNAL;
                                c = `Received RST_STREAM with code ${e.rstCode} (Call ended without gRPC status)`;
                            }
                            break;
                        case fe.constants.NGHTTP2_REFUSED_STREAM:
                            l = O.Status.UNAVAILABLE;
                            c = "Stream refused by server";
                            break;
                        case fe.constants.NGHTTP2_CANCEL:
                            if (this.connectionDropped) {
                                l = O.Status.UNAVAILABLE;
                                c = "Connection dropped";
                            } else {
                                l = O.Status.CANCELLED;
                                c = "Call cancelled";
                            }
                            break;
                        case fe.constants.NGHTTP2_ENHANCE_YOUR_CALM:
                            l = O.Status.RESOURCE_EXHAUSTED;
                            c = "Bandwidth exhausted or memory limit exceeded";
                            break;
                        case fe.constants.NGHTTP2_INADEQUATE_SECURITY:
                            l = O.Status.PERMISSION_DENIED;
                            c = "Protocol not secure enough";
                            break;
                        case fe.constants.NGHTTP2_INTERNAL_ERROR:
                            l = O.Status.INTERNAL;
                            if (this.internalError === null) {
                                c = `Received RST_STREAM with code ${e.rstCode} (Internal server error)`;
                            } else if (this.internalError.code === "ECONNRESET" || this.internalError.code === "ETIMEDOUT") {
                                l = O.Status.UNAVAILABLE;
                                c = this.internalError.message;
                            } else {
                                c = `Received RST_STREAM with code ${e.rstCode} triggered by internal client error: ${this.internalError.message}`;
                            }
                            break;
                        default:
                            l = O.Status.INTERNAL;
                            c = `Received RST_STREAM with code ${e.rstCode}`;
                    }
                    this.endCall({
                        code: l,
                        details: c,
                        metadata: new pe.Metadata,
                        rstCode: e.rstCode
                    });
                });
            });
            e.on("error", (o)=>{
                if (o.code !== "ERR_HTTP2_STREAM_ERROR") {
                    this.trace(`Node error event: message=${o.message} code=${o.code} errno=${dR(o.errno)} syscall=${o.syscall}`);
                    this.internalError = o;
                }
                this.callEventTracker.onStreamEnd(false);
            });
        }
        getDeadlineInfo() {
            return [
                `remote_addr=${this.getPeer()}`
            ];
        }
        onDisconnect() {
            this.connectionDropped = true;
            setImmediate(()=>{
                this.endCall({
                    code: O.Status.UNAVAILABLE,
                    details: "Connection dropped",
                    metadata: new pe.Metadata
                });
            });
        }
        outputStatus() {
            if (!this.statusOutput) {
                this.statusOutput = true;
                this.trace(`ended with status: code=${this.finalStatus.code} details="${this.finalStatus.details}"`);
                this.callEventTracker.onCallEnd(this.finalStatus);
                process.nextTick(()=>{
                    this.listener.onReceiveStatus(this.finalStatus);
                });
                this.http2Stream.resume();
            }
        }
        trace(e) {
            Zf.trace(ep.LogVerbosity.DEBUG, uR, `[${this.callId}] ${e}`);
        }
        endCall(e) {
            if (this.finalStatus === null || this.finalStatus.code === O.Status.OK) {
                this.finalStatus = e;
                this.maybeOutputStatus();
            }
            this.destroyHttp2Stream();
        }
        maybeOutputStatus() {
            if (this.finalStatus !== null) {
                if (this.finalStatus.code !== O.Status.OK || this.readsClosed && this.unpushedReadMessages.length === 0 && !this.isReadFilterPending && !this.isPushPending) {
                    this.outputStatus();
                }
            }
        }
        push(e) {
            this.trace(`pushing to reader message of length ${e instanceof Buffer ? e.length : null}`);
            this.canPush = false;
            this.isPushPending = true;
            process.nextTick(()=>{
                this.isPushPending = false;
                if (this.statusOutput) {
                    return;
                }
                this.listener.onReceiveMessage(e);
                this.maybeOutputStatus();
            });
        }
        tryPush(e) {
            if (this.canPush) {
                this.http2Stream.pause();
                this.push(e);
            } else {
                this.trace(`unpushedReadMessages.push message of length ${e.length}`);
                this.unpushedReadMessages.push(e);
            }
        }
        handleTrailers(e) {
            this.serverEndedCall = true;
            this.callEventTracker.onStreamEnd(true);
            let t = "";
            for (let n of Object.keys(e)){
                t += `\t\t${n}: ${e[n]}${`
`}`;
            }
            this.trace(`Received server trailers:
` + t);
            let r;
            try {
                r = pe.Metadata.fromHttp2Headers(e);
            } catch (n) {
                r = new pe.Metadata;
            }
            let i = r.getMap();
            let s;
            if (typeof i["grpc-status"] === "string") {
                let n = Number(i["grpc-status"]);
                this.trace(`received status code ${n} from server`);
                r.remove("grpc-status");
                let a = "";
                if (typeof i["grpc-message"] === "string") {
                    try {
                        a = decodeURI(i["grpc-message"]);
                    } catch (o) {
                        a = i["grpc-message"];
                    }
                    r.remove("grpc-message");
                    this.trace(`received status details string "${a}" from server`);
                }
                s = {
                    code: n,
                    details: a,
                    metadata: r
                };
            } else if (this.httpStatusCode) {
                s = No(this.httpStatusCode);
                s.metadata = r;
            } else {
                s = {
                    code: O.Status.UNKNOWN,
                    details: "No status information received",
                    metadata: r
                };
            }
            this.endCall(s);
        }
        destroyHttp2Stream() {
            if (this.http2Stream.destroyed) {
                return;
            }
            if (this.serverEndedCall) {
                this.http2Stream.end();
            } else {
                let t;
                if (this.finalStatus?.code === O.Status.OK) {
                    t = fe.constants.NGHTTP2_NO_ERROR;
                } else {
                    t = fe.constants.NGHTTP2_CANCEL;
                }
                this.trace(`close http2 stream with code ${t}`);
                this.http2Stream.close(t);
            }
        }
        cancelWithStatus(e, t) {
            this.trace(`cancelWithStatus code: ${e} details: "${t}"`);
            this.endCall({
                code: e,
                details: t,
                metadata: new pe.Metadata
            });
        }
        getStatus() {
            return this.finalStatus;
        }
        getPeer() {
            return this.transport.getPeerName();
        }
        getCallNumber() {
            return this.callId;
        }
        getAuthContext() {
            return this.transport.getAuthContext();
        }
        startRead() {
            if (this.finalStatus !== null && this.finalStatus.code !== O.Status.OK) {
                this.readsClosed = true;
                this.maybeOutputStatus();
                return;
            }
            this.canPush = true;
            if (this.unpushedReadMessages.length > 0) {
                let e = this.unpushedReadMessages.shift();
                this.push(e);
                return;
            }
            this.http2Stream.resume();
        }
        sendMessageWithContext(e, t) {
            this.trace(`write() called with message of length ${t.length}`);
            let r = (i)=>{
                process.nextTick(()=>{
                    let UNAVAILABLE = O.Status.UNAVAILABLE;
                    if (i?.code === "ERR_STREAM_WRITE_AFTER_END") {
                        UNAVAILABLE = O.Status.INTERNAL;
                    }
                    if (i) {
                        this.cancelWithStatus(UNAVAILABLE, `Write error: ${i.message}`);
                    }
                    e.callback?.();
                });
            };
            this.trace(`sending data chunk of length ${t.length}`);
            this.callEventTracker.addMessageSent();
            try {
                this.http2Stream.write(t, r);
            } catch (error) {
                this.endCall({
                    code: O.Status.UNAVAILABLE,
                    details: `Write failed with error ${error.message}`,
                    metadata: new pe.Metadata
                });
            }
        }
        halfClose() {
            this.trace("end() called");
            this.trace("calling end() on HTTP/2 stream");
            this.http2Stream.end();
        }
    }
    rp.Http2SubchannelCall = tp;
});
const gp = C(function(fp) {
    Object.defineProperty(fp, "__esModule", {
        value: true
    });
    fp.Http2SubchannelConnector = undefined;
    const Ve = Le("http2");
    const np = Le("tls");
    const ir = Zt();
    const At = k();
    const ap = Ao();
    const Ye = K();
    const op = rt();
    const sr = Pe();
    const ti = we();
    const lp = Le("net");
    const cp = sp();
    const up = Ys();
    const Mo = "transport";
    const hR = "transport_flowctrl";
    const version = ia().version;
    const { HTTP2_HEADER_AUTHORITY, HTTP2_HEADER_CONTENT_TYPE, HTTP2_HEADER_METHOD, HTTP2_HEADER_PATH, HTTP2_HEADER_TE, HTTP2_HEADER_USER_AGENT } = Ve.constants;
    const SR = 20000;
    const CR = Buffer.from("too_many_pings", "ascii");
    class dp {
        constructor(e, t, r, i){
            this.session = e;
            this.options = r;
            this.remoteName = i;
            this.keepaliveTimer = null;
            this.pendingSendKeepalivePing = false;
            this.activeCalls = new Set;
            this.disconnectListeners = [];
            this.disconnectHandled = false;
            this.channelzEnabled = true;
            this.keepalivesSent = 0;
            this.messagesSent = 0;
            this.messagesReceived = 0;
            this.lastMessageSentTimestamp = null;
            this.lastMessageReceivedTimestamp = null;
            this.subchannelAddressString = sr.subchannelAddressToString(t);
            if (r["grpc.enable_channelz"] === 0) {
                this.channelzEnabled = false;
                this.streamTracker = new ir.ChannelzCallTrackerStub;
            } else {
                this.streamTracker = new ir.ChannelzCallTracker;
            }
            this.channelzRef = ir.registerChannelzSocket(this.subchannelAddressString, ()=>this.getChannelzInfo(), this.channelzEnabled);
            this.userAgent = [
                r["grpc.primary_user_agent"],
                `grpc-node-js/${version}`,
                r["grpc.secondary_user_agent"]
            ].filter((s)=>s).join(" ");
            if ("grpc.keepalive_time_ms" in r) {
                this.keepaliveTimeMs = r["grpc.keepalive_time_ms"];
            } else {
                this.keepaliveTimeMs = -1;
            }
            if ("grpc.keepalive_timeout_ms" in r) {
                this.keepaliveTimeoutMs = r["grpc.keepalive_timeout_ms"];
            } else {
                this.keepaliveTimeoutMs = SR;
            }
            if ("grpc.keepalive_permit_without_calls" in r) {
                this.keepaliveWithoutCalls = r["grpc.keepalive_permit_without_calls"] === 1;
            } else {
                this.keepaliveWithoutCalls = false;
            }
            e.once("close", ()=>{
                this.trace("session closed");
                this.handleDisconnect();
            });
            e.once("goaway", (s, n, a)=>{
                let o = false;
                if (s === Ve.constants.NGHTTP2_ENHANCE_YOUR_CALM && a && a.equals(CR)) {
                    o = true;
                }
                this.trace(`connection closed by GOAWAY with code ${s} and data ${a?.toString()}`);
                this.reportDisconnectToOwner(o);
            });
            e.once("error", (s)=>{
                this.trace(`connection closed with error ${s.message}`);
                this.handleDisconnect();
            });
            e.socket.once("close", (s)=>{
                this.trace(`connection closed. hadError=${s}`);
                this.handleDisconnect();
            });
            if (Ye.isTracerEnabled(Mo)) {
                e.on("remoteSettings", (s)=>{
                    this.trace(`new settings received${this.session !== e ? " on the old connection" : ""}: ${JSON.stringify(s)}`);
                });
                e.on("localSettings", (s)=>{
                    this.trace(`local settings acknowledged by remote${this.session !== e ? " on the old connection" : ""}: ${JSON.stringify(s)}`);
                });
            }
            if (this.keepaliveWithoutCalls) {
                this.maybeStartKeepalivePingTimer();
            }
            if (e.socket instanceof np.TLSSocket) {
                this.authContext = {
                    transportSecurityType: "ssl",
                    sslPeerCertificate: e.socket.getPeerCertificate()
                };
            } else {
                this.authContext = {};
            }
        }
        getChannelzInfo() {
            let socket = this.session.socket;
            let s = socket.remoteAddress ? sr.stringToSubchannelAddress(socket.remoteAddress, socket.remotePort) : null;
            let n = socket.localAddress ? sr.stringToSubchannelAddress(socket.localAddress, socket.localPort) : null;
            let a;
            if (this.session.encrypted) {
                let l = socket;
                let c = l.getCipher();
                let u = l.getCertificate();
                let d = l.getPeerCertificate();
                a = {
                    cipherSuiteStandardName: c.standardName ?? null,
                    cipherSuiteOtherName: c.standardName ? null : c.name,
                    localCertificate: u && "raw" in u ? u.raw : null,
                    remoteCertificate: d && "raw" in d ? d.raw : null
                };
            } else {
                a = null;
            }
            return {
                remoteAddress: s,
                localAddress: n,
                security: a,
                remoteName: this.remoteName,
                streamsStarted: this.streamTracker.callsStarted,
                streamsSucceeded: this.streamTracker.callsSucceeded,
                streamsFailed: this.streamTracker.callsFailed,
                messagesSent: this.messagesSent,
                messagesReceived: this.messagesReceived,
                keepAlivesSent: this.keepalivesSent,
                lastLocalStreamCreatedTimestamp: this.streamTracker.lastCallStartedTimestamp,
                lastRemoteStreamCreatedTimestamp: null,
                lastMessageSentTimestamp: this.lastMessageSentTimestamp,
                lastMessageReceivedTimestamp: this.lastMessageReceivedTimestamp,
                localFlowControlWindow: this.session.state.localWindowSize ?? null,
                remoteFlowControlWindow: this.session.state.remoteWindowSize ?? null
            };
        }
        trace(e) {
            Ye.trace(At.LogVerbosity.DEBUG, Mo, `(${this.channelzRef.id}) ${this.subchannelAddressString} ${e}`);
        }
        keepaliveTrace(e) {
            Ye.trace(At.LogVerbosity.DEBUG, "keepalive", `(${this.channelzRef.id}) ${this.subchannelAddressString} ${e}`);
        }
        flowControlTrace(e) {
            Ye.trace(At.LogVerbosity.DEBUG, hR, `(${this.channelzRef.id}) ${this.subchannelAddressString} ${e}`);
        }
        internalsTrace(e) {
            Ye.trace(At.LogVerbosity.DEBUG, "transport_internals", `(${this.channelzRef.id}) ${this.subchannelAddressString} ${e}`);
        }
        reportDisconnectToOwner(e) {
            if (this.disconnectHandled) {
                return;
            }
            this.disconnectHandled = true;
            this.disconnectListeners.forEach((t)=>t(e));
        }
        handleDisconnect() {
            this.clearKeepaliveTimeout();
            this.reportDisconnectToOwner(false);
            for (let e of this.activeCalls){
                e.onDisconnect();
            }
            setImmediate(()=>{
                this.session.destroy();
            });
        }
        addDisconnectListener(e) {
            this.disconnectListeners.push(e);
        }
        canSendPing() {
            return !this.session.destroyed && this.keepaliveTimeMs > 0 && (this.keepaliveWithoutCalls || this.activeCalls.size > 0);
        }
        maybeSendPing() {
            if (!this.canSendPing()) {
                this.pendingSendKeepalivePing = true;
                return;
            }
            if (this.keepaliveTimer) {
                console.error("keepaliveTimeout is not null");
                return;
            }
            if (this.channelzEnabled) {
                this.keepalivesSent += 1;
            }
            this.keepaliveTrace(`Sending ping with timeout ${this.keepaliveTimeoutMs}ms`);
            this.keepaliveTimer = setTimeout(()=>{
                this.keepaliveTimer = null;
                this.keepaliveTrace("Ping timeout passed without response");
                this.handleDisconnect();
            }, this.keepaliveTimeoutMs);
            this.keepaliveTimer.unref?.();
            let r = "";
            try {
                if (!this.session.ping((s, n, a)=>{
                    this.clearKeepaliveTimeout();
                    if (s) {
                        this.keepaliveTrace(`Ping failed with error ${s.message}`);
                        this.handleDisconnect();
                    } else {
                        this.keepaliveTrace("Received ping response");
                        this.maybeStartKeepalivePingTimer();
                    }
                })) {
                    r = "Ping returned false";
                }
            } catch (error) {
                r = (error instanceof Error ? error.message : "") || "Unknown error";
            }
            if (r) {
                this.keepaliveTrace(`Ping send failed: ${r}`);
                this.handleDisconnect();
            }
        }
        maybeStartKeepalivePingTimer() {
            if (!this.canSendPing()) {
                return;
            }
            if (this.pendingSendKeepalivePing) {
                this.pendingSendKeepalivePing = false;
                this.maybeSendPing();
            } else if (!this.keepaliveTimer) {
                this.keepaliveTrace(`Starting keepalive timer for ${this.keepaliveTimeMs}ms`);
                this.keepaliveTimer = setTimeout(()=>{
                    this.keepaliveTimer = null;
                    this.maybeSendPing();
                }, this.keepaliveTimeMs);
                this.keepaliveTimer.unref?.();
            }
        }
        clearKeepaliveTimeout() {
            if (this.keepaliveTimer) {
                clearTimeout(this.keepaliveTimer);
                this.keepaliveTimer = null;
            }
        }
        removeActiveCall(e) {
            this.activeCalls.delete(e);
            if (this.activeCalls.size === 0) {
                this.session.unref();
            }
        }
        addActiveCall(e) {
            this.activeCalls.add(e);
            if (this.activeCalls.size === 1) {
                this.session.ref();
                if (!this.keepaliveWithoutCalls) {
                    this.maybeStartKeepalivePingTimer();
                }
            }
        }
        createCall(e, t, r, i, s) {
            let n = e.toHttp2Headers();
            n[HTTP2_HEADER_AUTHORITY] = t;
            n[HTTP2_HEADER_USER_AGENT] = this.userAgent;
            n[HTTP2_HEADER_CONTENT_TYPE] = "application/grpc";
            n[HTTP2_HEADER_METHOD] = "POST";
            n[HTTP2_HEADER_PATH] = r;
            n[HTTP2_HEADER_TE] = "trailers";
            let a;
            try {
                a = this.session.request(n);
            } catch (error) {
                this.handleDisconnect();
                throw error;
            }
            this.flowControlTrace(`local window size: ${this.session.state.localWindowSize} remote window size: ${this.session.state.remoteWindowSize}`);
            this.internalsTrace(`session.closed=${this.session.closed} session.destroyed=${this.session.destroyed} session.socket.destroyed=${this.session.socket.destroyed}`);
            let o;
            let l;
            if (this.channelzEnabled) {
                this.streamTracker.addCallStarted();
                o = {
                    addMessageSent: ()=>{
                        this.messagesSent += 1;
                        this.lastMessageSentTimestamp = new Date;
                        s.addMessageSent?.();
                    },
                    addMessageReceived: ()=>{
                        this.messagesReceived += 1;
                        this.lastMessageReceivedTimestamp = new Date;
                        s.addMessageReceived?.();
                    },
                    onCallEnd: (c)=>{
                        s.onCallEnd?.(c);
                        this.removeActiveCall(l);
                    },
                    onStreamEnd: (c)=>{
                        if (c) {
                            this.streamTracker.addCallSucceeded();
                        } else {
                            this.streamTracker.addCallFailed();
                        }
                        s.onStreamEnd?.(c);
                    }
                };
            } else {
                o = {
                    addMessageSent: ()=>{
                        s.addMessageSent?.();
                    },
                    addMessageReceived: ()=>{
                        s.addMessageReceived?.();
                    },
                    onCallEnd: (c)=>{
                        s.onCallEnd?.(c);
                        this.removeActiveCall(l);
                    },
                    onStreamEnd: (c)=>{
                        s.onStreamEnd?.(c);
                    }
                };
            }
            l = new cp.Http2SubchannelCall(a, o, i, this, up.getNextCallNumber());
            this.addActiveCall(l);
            return l;
        }
        getChannelzRef() {
            return this.channelzRef;
        }
        getPeerName() {
            return this.subchannelAddressString;
        }
        getOptions() {
            return this.options;
        }
        getAuthContext() {
            return this.authContext;
        }
        shutdown() {
            this.session.close();
            ir.unregisterChannelzRef(this.channelzRef);
        }
    }
    class hp {
        constructor(e){
            this.channelTarget = e;
            this.session = null;
            this.isShutdown = false;
        }
        trace(e) {
            Ye.trace(At.LogVerbosity.DEBUG, Mo, `${ti.uriToString(this.channelTarget)} ${e}`);
        }
        createSession(e, t, r) {
            if (this.isShutdown) {
                return Promise.reject();
            }
            if (e.socket.closed) {
                return Promise.reject("Connection closed before starting HTTP/2 handshake");
            }
            return new Promise((resolve, reject)=>{
                let m = null;
                let channelTarget = this.channelTarget;
                if ("grpc.http_connect_target" in r) {
                    let D = ti.parseUri(r["grpc.http_connect_target"]);
                    if (D) {
                        channelTarget = D;
                        m = ti.uriToString(D);
                    }
                }
                let y = e.secure ? "https" : "http";
                let E = op.getDefaultAuthority(channelTarget);
                let T = ()=>{
                    this.session?.destroy();
                    this.session = null;
                    setImmediate(()=>{
                        if (!X) {
                            X = true;
                            reject(`${W.trim()} (${new Date().toISOString()})`);
                        }
                    });
                };
                let P = (D)=>{
                    this.session?.destroy();
                    W = D.message;
                    this.trace(`connection failed with error ${W}`);
                    if (!X) {
                        X = true;
                        reject(`${W} (${new Date().toISOString()})`);
                    }
                };
                let te = {
                    createConnection: (D, le)=>e.socket,
                    settings: {
                        initialWindowSize: r["grpc-node.flow_control_window"] ?? Ve.getDefaultSettings?.()?.initialWindowSize ?? 65535
                    },
                    maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER,
                    maxSessionMemory: r["grpc-node.max_session_memory"] ?? Number.MAX_SAFE_INTEGER
                };
                let v = Ve.connect(`${y}://${E}`, te);
                let U = Ve.getDefaultSettings?.()?.initialWindowSize ?? 65535;
                let w = r["grpc-node.flow_control_window"];
                this.session = v;
                let W = "Failed to connect";
                let X = false;
                v.unref();
                v.once("remoteSettings", ()=>{
                    if (w && w > U) {
                        try {
                            v.setLocalWindowSize(w);
                        } catch (le) {
                            let Ue = w - (v.state.localWindowSize ?? U);
                            if (Ue > 0) {
                                v.incrementWindowSize(Ue);
                            }
                        }
                    }
                    v.removeAllListeners();
                    e.socket.removeListener("close", T);
                    e.socket.removeListener("error", P);
                    resolve(new dp(v, t, r, m));
                    this.session = null;
                });
                v.once("close", T);
                v.once("error", P);
                e.socket.once("close", T);
                e.socket.once("error", P);
            });
        }
        tcpConnect(e, t) {
            return ap.getProxiedConnection(e, t).then((r)=>{
                if (r) {
                    return r;
                } else {
                    return new Promise((resolve, reject)=>{
                        let n = ()=>{
                            reject(Error("Socket closed"));
                        };
                        let a = (l)=>{
                            reject(l);
                        };
                        let o = lp.connect(e, ()=>{
                            o.removeListener("close", n);
                            o.removeListener("error", a);
                            resolve(o);
                        });
                        o.once("close", n);
                        o.once("error", a);
                    });
                }
            });
        }
        async connect(e, t, r) {
            if (this.isShutdown) {
                return Promise.reject();
            }
            let i = null;
            let s = null;
            let n = sr.subchannelAddressToString(e);
            try {
                this.trace(`${n} Waiting for secureConnector to be ready`);
                await t.waitForReady();
                this.trace(`${n} secureConnector is ready`);
                i = await this.tcpConnect(e, r);
                i.setNoDelay();
                this.trace(`${n} Established TCP connection`);
                s = await t.connect(i);
                this.trace(`${n} Established secure connection`);
                return this.createSession(s, e, r);
            } catch (error) {
                i?.destroy();
                if (!(s === null || s === undefined)) {
                    s.socket.destroy();
                }
                throw error;
            }
        }
        shutdown() {
            this.isShutdown = true;
            this.session?.close();
            this.session = null;
        }
    }
    fp.Http2SubchannelConnector = hp;
});
const Tp = C(function(Cp) {
    Object.defineProperty(Cp, "__esModule", {
        value: true
    });
    Cp.SubchannelPool = undefined;
    Cp.getSubchannelPool = RR;
    const mp = qc();
    const vp = Nf();
    const yp = Pe();
    const _p = we();
    const Sp = gp();
    const ER = 10000;
    class sn {
        constructor(){
            this.pool = Object.create(null);
            this.cleanupTimer = null;
        }
        unrefUnusedSubchannels() {
            let e = true;
            for(let t in this.pool){
                let i = this.pool[t].filter((s)=>!s.subchannel.unrefIfOneRef());
                if (i.length > 0) {
                    e = false;
                }
                this.pool[t] = i;
            }
            if (e && this.cleanupTimer !== null) {
                clearInterval(this.cleanupTimer);
                this.cleanupTimer = null;
            }
        }
        ensureCleanupTask() {
            if (this.cleanupTimer === null) {
                this.cleanupTimer = setInterval(()=>{
                    this.unrefUnusedSubchannels();
                }, ER);
                this.cleanupTimer.unref?.();
            }
        }
        getOrCreateSubchannel(e, subchannelAddress, channelArguments, channelCredentials) {
            this.ensureCleanupTask();
            let s = _p.uriToString(e);
            if (s in this.pool) {
                let a = this.pool[s];
                for (let o of a){
                    if (yp.subchannelAddressEqual(subchannelAddress, o.subchannelAddress) && mp.channelOptionsEqual(channelArguments, o.channelArguments) && channelCredentials._equals(o.channelCredentials)) {
                        return o.subchannel;
                    }
                }
            }
            let subchannel = new vp.Subchannel(e, subchannelAddress, channelArguments, channelCredentials, new Sp.Http2SubchannelConnector(e));
            if (!(s in this.pool)) {
                this.pool[s] = [];
            }
            this.pool[s].push({
                subchannelAddress,
                channelArguments,
                channelCredentials,
                subchannel
            });
            subchannel.ref();
            return subchannel;
        }
    }
    Cp.SubchannelPool = sn;
    var TR = new sn;
    function RR(e) {
        if (e) {
            return TR;
        } else {
            return new sn;
        }
    }
});
const Np = C(function(Ap) {
    Object.defineProperty(Ap, "__esModule", {
        value: true
    });
    Ap.LoadBalancingCall = undefined;
    const nn = Ae();
    const nr = k();
    const an = Kr();
    const ar = ue();
    const Pt = kt();
    const Rp = we();
    const bp = K();
    const ri = Ui();
    const Op = Le("http2");
    const OR = "load_balancing_call";
    class wp {
        constructor(e, t, r, i, s, n, a){
            this.channel = e;
            this.callConfig = t;
            this.methodName = r;
            this.host = i;
            this.credentials = s;
            this.deadline = n;
            this.callNumber = a;
            this.child = null;
            this.readPending = false;
            this.pendingMessage = null;
            this.pendingHalfClose = false;
            this.ended = false;
            this.metadata = null;
            this.listener = null;
            this.onCallEnded = null;
            this.childStartTime = null;
            let c = this.methodName.split("/");
            let u = "";
            if (c.length >= 2) {
                u = c[1];
            }
            let d = Rp.splitHostPort(this.host)?.host ?? "localhost";
            this.serviceUrl = `https://${d}/${u}`;
            this.startTime = new Date;
        }
        getDeadlineInfo() {
            let r = [];
            if (this.childStartTime) {
                if (this.childStartTime > this.startTime) {
                    if (this.metadata?.getOptions().waitForReady) {
                        r.push("wait_for_ready");
                    }
                    r.push(`LB pick: ${an.formatDateDifference(this.startTime, this.childStartTime)}`);
                }
                r.push(...this.child.getDeadlineInfo());
                return r;
            } else {
                if (this.metadata?.getOptions().waitForReady) {
                    r.push("wait_for_ready");
                }
                r.push("Waiting for LB pick");
            }
            return r;
        }
        trace(e) {
            bp.trace(nr.LogVerbosity.DEBUG, OR, `[${this.callNumber}] ${e}`);
        }
        outputStatus(e, progress) {
            if (!this.ended) {
                this.ended = true;
                this.trace(`ended with status: code=${e.code} details="${e.details}" start time=${this.startTime.toISOString()}`);
                let s = {
                    ...e,
                    progress
                };
                this.listener?.onReceiveStatus(s);
                this.onCallEnded?.(s.code, s.details, s.metadata);
            }
        }
        doPick() {
            if (this.ended) {
                return;
            }
            if (!this.metadata) {
                throw Error("doPick called before start");
            }
            this.trace("Pick called");
            let r = this.metadata.clone();
            let i = this.channel.doPick(r, this.callConfig.pickInformation);
            let s = i.subchannel ? `(${i.subchannel.getChannelzRef().id}) ${i.subchannel.getAddress()}` : `${i.subchannel}`;
            this.trace(`Pick result: ${Pt.PickResultType[i.pickResultType]} subchannel: ${s} status: ${i.status?.code} ${i.status?.details}`);
            switch(i.pickResultType){
                case Pt.PickResultType.COMPLETE:
                    this.credentials.compose(i.subchannel.getCallCredentials()).generateMetadata({
                        method_name: this.methodName,
                        service_url: this.serviceUrl
                    }).then((l)=>{
                        if (this.ended) {
                            this.trace("Credentials metadata generation finished after call ended");
                            return;
                        }
                        r.merge(l);
                        if (r.get("authorization").length > 1) {
                            this.outputStatus({
                                code: nr.Status.INTERNAL,
                                details: '"authorization" metadata cannot have multiple values',
                                metadata: new ar.Metadata
                            }, "PROCESSED");
                        }
                        if (i.subchannel.getConnectivityState() !== nn.ConnectivityState.READY) {
                            this.trace(`Picked subchannel ${s} has state ${nn.ConnectivityState[i.subchannel.getConnectivityState()]} after getting credentials metadata. Retrying pick`);
                            this.doPick();
                            return;
                        }
                        if (this.deadline !== Infinity) {
                            r.set("grpc-timeout", an.getDeadlineTimeoutString(this.deadline));
                        }
                        try {
                            this.child = i.subchannel.getRealSubchannel().createCall(r, this.host, this.methodName, {
                                onReceiveMetadata: (u)=>{
                                    this.trace("Received metadata");
                                    this.listener.onReceiveMetadata(u);
                                },
                                onReceiveMessage: (u)=>{
                                    this.trace("Received message");
                                    this.listener.onReceiveMessage(u);
                                },
                                onReceiveStatus: (u)=>{
                                    this.trace("Received status");
                                    if (u.rstCode === Op.constants.NGHTTP2_REFUSED_STREAM) {
                                        this.outputStatus(u, "REFUSED");
                                    } else {
                                        this.outputStatus(u, "PROCESSED");
                                    }
                                }
                            });
                            this.childStartTime = new Date;
                        } catch (error) {
                            this.trace(`Failed to start call on picked subchannel ${s} with error ${error.message}`);
                            this.outputStatus({
                                code: nr.Status.INTERNAL,
                                details: `Failed to start HTTP/2 stream with error ${error.message}`,
                                metadata: new ar.Metadata
                            }, "NOT_STARTED");
                            return;
                        }
                        i.onCallStarted?.();
                        this.onCallEnded = i.onCallEnded;
                        this.trace(`Created child call [${this.child.getCallNumber()}]`);
                        if (this.readPending) {
                            this.child.startRead();
                        }
                        if (this.pendingMessage) {
                            this.child.sendMessageWithContext(this.pendingMessage.context, this.pendingMessage.message);
                        }
                        if (this.pendingHalfClose) {
                            this.child.halfClose();
                        }
                    }, (l)=>{
                        let { code, details } = ri.restrictControlPlaneStatusCode(typeof l.code === "number" ? l.code : nr.Status.UNKNOWN, `Getting metadata from plugin failed with error: ${l.message}`);
                        this.outputStatus({
                            code,
                            details,
                            metadata: new ar.Metadata
                        }, "PROCESSED");
                    });
                    break;
                case Pt.PickResultType.DROP:
                    let { code, details } = ri.restrictControlPlaneStatusCode(i.status.code, i.status.details);
                    setImmediate(()=>{
                        this.outputStatus({
                            code,
                            details,
                            metadata: i.status.metadata
                        }, "DROP");
                    });
                    break;
                case Pt.PickResultType.TRANSIENT_FAILURE:
                    if (this.metadata.getOptions().waitForReady) {
                        this.channel.queueCallForPick(this);
                    } else {
                        let { code: code_1, details: details_1 } = ri.restrictControlPlaneStatusCode(i.status.code, i.status.details);
                        setImmediate(()=>{
                            this.outputStatus({
                                code: code_1,
                                details: details_1,
                                metadata: i.status.metadata
                            }, "PROCESSED");
                        });
                    }
                    break;
                case Pt.PickResultType.QUEUE:
                    this.channel.queueCallForPick(this);
            }
        }
        cancelWithStatus(e, t) {
            this.trace(`cancelWithStatus code: ${e} details: "${t}"`);
            this.child?.cancelWithStatus(e, t);
            this.outputStatus({
                code: e,
                details: t,
                metadata: new ar.Metadata
            }, "PROCESSED");
        }
        getPeer() {
            return this.child?.getPeer() ?? this.channel.getTarget();
        }
        start(e, t) {
            this.trace("start called");
            this.listener = t;
            this.metadata = e;
            this.doPick();
        }
        sendMessageWithContext(e, t) {
            this.trace(`write() called with message of length ${t.length}`);
            if (this.child) {
                this.child.sendMessageWithContext(e, t);
            } else {
                this.pendingMessage = {
                    context: e,
                    message: t
                };
            }
        }
        startRead() {
            this.trace("startRead called");
            if (this.child) {
                this.child.startRead();
            } else {
                this.readPending = true;
            }
        }
        halfClose() {
            this.trace("halfClose called");
            if (this.child) {
                this.child.halfClose();
            } else {
                this.pendingHalfClose = true;
            }
        }
        setCredentials(e) {
            throw Error("Method not implemented.");
        }
        getCallNumber() {
            return this.callNumber;
        }
        getAuthContext() {
            if (this.child) {
                return this.child.getAuthContext();
            } else {
                return null;
            }
        }
    }
    Ap.LoadBalancingCall = wp;
});
const Fp = C(function(Dp) {
    Object.defineProperty(Dp, "__esModule", {
        value: true
    });
    Dp.ResolvingCall = undefined;
    const Mp = rs();
    const Ie = k();
    const xe = Kr();
    const on = ue();
    const Ip = K();
    const xp = Ui();
    const wR = "resolving_call";
    class kp {
        constructor(e, t, r, i, s){
            this.channel = e;
            this.method = t;
            this.filterStackFactory = i;
            this.callNumber = s;
            this.child = null;
            this.readPending = false;
            this.pendingMessage = null;
            this.pendingHalfClose = false;
            this.ended = false;
            this.readFilterPending = false;
            this.writeFilterPending = false;
            this.pendingChildStatus = null;
            this.metadata = null;
            this.listener = null;
            this.statusWatchers = [];
            this.deadlineTimer = setTimeout(()=>{}, 0);
            this.filterStack = null;
            this.deadlineStartTime = null;
            this.configReceivedTime = null;
            this.childStartTime = null;
            this.credentials = Mp.CallCredentials.createEmpty();
            this.deadline = r.deadline;
            this.host = r.host;
            if (r.parentCall) {
                if (r.flags & Ie.Propagate.CANCELLATION) {
                    r.parentCall.on("cancelled", ()=>{
                        this.cancelWithStatus(Ie.Status.CANCELLED, "Cancelled by parent call");
                    });
                }
                if (r.flags & Ie.Propagate.DEADLINE) {
                    this.trace(`Propagating deadline from parent: ${r.parentCall.getDeadline()}`);
                    this.deadline = xe.minDeadline(this.deadline, r.parentCall.getDeadline());
                }
            }
            this.trace("Created");
            this.runDeadlineTimer();
        }
        trace(e) {
            Ip.trace(Ie.LogVerbosity.DEBUG, wR, `[${this.callNumber}] ${e}`);
        }
        runDeadlineTimer() {
            clearTimeout(this.deadlineTimer);
            this.deadlineStartTime = new Date;
            this.trace(`Deadline: ${xe.deadlineToString(this.deadline)}`);
            let e = xe.getRelativeTimeout(this.deadline);
            if (e !== Infinity) {
                this.trace(`Deadline will be reached in ${e}ms`);
                let t = ()=>{
                    if (!this.deadlineStartTime) {
                        this.cancelWithStatus(Ie.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
                        return;
                    }
                    let r = [];
                    let i = new Date;
                    r.push(`Deadline exceeded after ${xe.formatDateDifference(this.deadlineStartTime, i)}`);
                    if (this.configReceivedTime) {
                        if (this.configReceivedTime > this.deadlineStartTime) {
                            r.push(`name resolution: ${xe.formatDateDifference(this.deadlineStartTime, this.configReceivedTime)}`);
                        }
                        if (this.childStartTime) {
                            if (this.childStartTime > this.configReceivedTime) {
                                r.push(`metadata filters: ${xe.formatDateDifference(this.configReceivedTime, this.childStartTime)}`);
                            }
                        } else {
                            r.push("waiting for metadata filters");
                        }
                    } else {
                        r.push("waiting for name resolution");
                    }
                    if (this.child) {
                        r.push(...this.child.getDeadlineInfo());
                    }
                    this.cancelWithStatus(Ie.Status.DEADLINE_EXCEEDED, r.join(","));
                };
                if (e <= 0) {
                    process.nextTick(t);
                } else {
                    this.deadlineTimer = setTimeout(t, e);
                }
            }
        }
        outputStatus(e) {
            if (!this.ended) {
                this.ended = true;
                if (!this.filterStack) {
                    this.filterStack = this.filterStackFactory.createFilter();
                }
                clearTimeout(this.deadlineTimer);
                let t = this.filterStack.receiveTrailers(e);
                this.trace(`ended with status: code=${t.code} details="${t.details}"`);
                this.statusWatchers.forEach((r)=>r(t));
                process.nextTick(()=>{
                    this.listener?.onReceiveStatus(t);
                });
            }
        }
        sendMessageOnChild(e, t) {
            if (!this.child) {
                throw Error("sendMessageonChild called with child not populated");
            }
            let child = this.child;
            this.writeFilterPending = true;
            this.filterStack.sendMessage(Promise.resolve({
                message: t,
                flags: e.flags
            })).then((i)=>{
                this.writeFilterPending = false;
                child.sendMessageWithContext(e, i.message);
                if (this.pendingHalfClose) {
                    child.halfClose();
                }
            }, (i)=>{
                this.cancelWithStatus(i.code, i.details);
            });
        }
        getConfig() {
            if (this.ended) {
                return;
            }
            if (!this.metadata || !this.listener) {
                throw Error("getConfig called before start");
            }
            let e = this.channel.getConfig(this.method, this.metadata);
            if (e.type === "NONE") {
                this.channel.queueCallForConfig(this);
                return;
            } else if (e.type === "ERROR") {
                if (this.metadata.getOptions().waitForReady) {
                    this.channel.queueCallForConfig(this);
                } else {
                    this.outputStatus(e.error);
                }
                return;
            }
            this.configReceivedTime = new Date;
            let e_config = e.config;
            if (e_config.status !== Ie.Status.OK) {
                let { code, details } = xp.restrictControlPlaneStatusCode(e_config.status, `Failed to route call to method ${this.method}`);
                this.outputStatus({
                    code,
                    details,
                    metadata: new on.Metadata
                });
                return;
            }
            if (e_config.methodConfig.timeout) {
                let r = new Date;
                r.setSeconds(r.getSeconds() + e_config.methodConfig.timeout.seconds);
                r.setMilliseconds(r.getMilliseconds() + e_config.methodConfig.timeout.nanos / 1000000);
                this.deadline = xe.minDeadline(this.deadline, r);
                this.runDeadlineTimer();
            }
            this.filterStackFactory.push(e_config.dynamicFilterFactories);
            this.filterStack = this.filterStackFactory.createFilter();
            this.filterStack.sendMetadata(Promise.resolve(this.metadata)).then((r)=>{
                this.child = this.channel.createRetryingCall(e_config, this.method, this.host, this.credentials, this.deadline);
                this.trace(`Created child [${this.child.getCallNumber()}]`);
                this.childStartTime = new Date;
                this.child.start(r, {
                    onReceiveMetadata: (i)=>{
                        this.trace("Received metadata");
                        this.listener.onReceiveMetadata(this.filterStack.receiveMetadata(i));
                    },
                    onReceiveMessage: (i)=>{
                        this.trace("Received message");
                        this.readFilterPending = true;
                        this.filterStack.receiveMessage(i).then((s)=>{
                            this.trace("Finished filtering received message");
                            this.readFilterPending = false;
                            this.listener.onReceiveMessage(s);
                            if (this.pendingChildStatus) {
                                this.outputStatus(this.pendingChildStatus);
                            }
                        }, (s)=>{
                            this.cancelWithStatus(s.code, s.details);
                        });
                    },
                    onReceiveStatus: (i)=>{
                        this.trace("Received status");
                        if (this.readFilterPending) {
                            this.pendingChildStatus = i;
                        } else {
                            this.outputStatus(i);
                        }
                    }
                });
                if (this.readPending) {
                    this.child.startRead();
                }
                if (this.pendingMessage) {
                    this.sendMessageOnChild(this.pendingMessage.context, this.pendingMessage.message);
                } else if (this.pendingHalfClose) {
                    this.child.halfClose();
                }
            }, (r)=>{
                this.outputStatus(r);
            });
        }
        reportResolverError(e) {
            if (this.metadata?.getOptions().waitForReady) {
                this.channel.queueCallForConfig(this);
            } else {
                this.outputStatus(e);
            }
        }
        cancelWithStatus(e, t) {
            this.trace(`cancelWithStatus code: ${e} details: "${t}"`);
            this.child?.cancelWithStatus(e, t);
            this.outputStatus({
                code: e,
                details: t,
                metadata: new on.Metadata
            });
        }
        getPeer() {
            return this.child?.getPeer() ?? this.channel.getTarget();
        }
        start(e, t) {
            this.trace("start called");
            this.metadata = e.clone();
            this.listener = t;
            this.getConfig();
        }
        sendMessageWithContext(e, t) {
            this.trace(`write() called with message of length ${t.length}`);
            if (this.child) {
                this.sendMessageOnChild(e, t);
            } else {
                this.pendingMessage = {
                    context: e,
                    message: t
                };
            }
        }
        startRead() {
            this.trace("startRead called");
            if (this.child) {
                this.child.startRead();
            } else {
                this.readPending = true;
            }
        }
        halfClose() {
            this.trace("halfClose called");
            if (this.child && !this.writeFilterPending) {
                this.child.halfClose();
            } else {
                this.pendingHalfClose = true;
            }
        }
        setCredentials(e) {
            this.credentials = e;
        }
        addStatusWatcher(e) {
            this.statusWatchers.push(e);
        }
        getCallNumber() {
            return this.callNumber;
        }
        getAuthContext() {
            if (this.child) {
                return this.child.getAuthContext();
            } else {
                return null;
            }
        }
    }
    Dp.ResolvingCall = kp;
});
const $p = C(function(jp) {
    Object.defineProperty(jp, "__esModule", {
        value: true
    });
    jp.RetryingCall = jp.MessageBufferTracker = jp.RetryThrottler = undefined;
    const or = k();
    const qp = Kr();
    const Up = ue();
    const Bp = K();
    const AR = "retrying_call";
    class zp {
        constructor(e, t, r){
            this.maxTokens = e;
            this.tokenRatio = t;
            if (r) {
                this.tokens = r.tokens * (e / r.maxTokens);
            } else {
                this.tokens = e;
            }
        }
        addCallSucceeded() {
            this.tokens = Math.min(this.tokens + this.tokenRatio, this.maxTokens);
        }
        addCallFailed() {
            this.tokens = Math.max(this.tokens - 1, 0);
        }
        canRetryCall() {
            return this.tokens > this.maxTokens / 2;
        }
    }
    jp.RetryThrottler = zp;
    class Hp {
        constructor(e, t){
            this.totalLimit = e;
            this.limitPerCall = t;
            this.totalAllocated = 0;
            this.allocatedPerCall = new Map;
        }
        allocate(e, t) {
            let i = this.allocatedPerCall.get(t) ?? 0;
            if (this.limitPerCall - i < e || this.totalLimit - this.totalAllocated < e) {
                return false;
            }
            this.allocatedPerCall.set(t, i + e);
            this.totalAllocated += e;
            return true;
        }
        free(e, t) {
            if (this.totalAllocated < e) {
                throw Error(`Invalid buffer allocation state: call ${t} freed ${e} > total allocated ${this.totalAllocated}`);
            }
            this.totalAllocated -= e;
            let i = this.allocatedPerCall.get(t) ?? 0;
            if (i < e) {
                throw Error(`Invalid buffer allocation state: call ${t} freed ${e} > allocated for call ${i}`);
            }
            this.allocatedPerCall.set(t, i - e);
        }
        freeAll(e) {
            let r = this.allocatedPerCall.get(e) ?? 0;
            if (this.totalAllocated < r) {
                throw Error(`Invalid buffer allocation state: call ${e} allocated ${r} > total allocated ${this.totalAllocated}`);
            }
            this.totalAllocated -= r;
            this.allocatedPerCall.delete(e);
        }
    }
    jp.MessageBufferTracker = Hp;
    const Io = "grpc-previous-rpc-attempts";
    const PR = 5;
    class Wp {
        constructor(e, t, r, i, s, n, a, o, l){
            this.channel = e;
            this.callConfig = t;
            this.methodName = r;
            this.host = i;
            this.credentials = s;
            this.deadline = n;
            this.callNumber = a;
            this.bufferTracker = o;
            this.retryThrottler = l;
            this.listener = null;
            this.initialMetadata = null;
            this.underlyingCalls = [];
            this.writeBuffer = [];
            this.writeBufferOffset = 0;
            this.readStarted = false;
            this.transparentRetryUsed = false;
            this.attempts = 0;
            this.hedgingTimer = null;
            this.committedCallIndex = null;
            this.initialRetryBackoffSec = 0;
            this.nextRetryBackoffSec = 0;
            let u = e.getOptions()["grpc-node.retry_max_attempts_limit"] ?? PR;
            if (e.getOptions()["grpc.enable_retries"] === 0) {
                this.state = "NO_RETRY";
                this.maxAttempts = 1;
            } else if (t.methodConfig.retryPolicy) {
                this.state = "RETRY";
                let d = t.methodConfig.retryPolicy;
                this.nextRetryBackoffSec = this.initialRetryBackoffSec = Number(d.initialBackoff.substring(0, d.initialBackoff.length - 1));
                this.maxAttempts = Math.min(d.maxAttempts, u);
            } else if (t.methodConfig.hedgingPolicy) {
                this.state = "HEDGING";
                this.maxAttempts = Math.min(t.methodConfig.hedgingPolicy.maxAttempts, u);
            } else {
                this.state = "TRANSPARENT_ONLY";
                this.maxAttempts = 1;
            }
            this.startTime = new Date;
        }
        getDeadlineInfo() {
            if (this.underlyingCalls.length === 0) {
                return [];
            }
            let e = [];
            let t = this.underlyingCalls[this.underlyingCalls.length - 1];
            if (this.underlyingCalls.length > 1) {
                e.push(`previous attempts: ${this.underlyingCalls.length - 1}`);
            }
            if (t.startTime > this.startTime) {
                e.push(`time to current attempt start: ${qp.formatDateDifference(this.startTime, t.startTime)}`);
            }
            e.push(...t.call.getDeadlineInfo());
            return e;
        }
        getCallNumber() {
            return this.callNumber;
        }
        trace(e) {
            Bp.trace(or.LogVerbosity.DEBUG, AR, `[${this.callNumber}] ${e}`);
        }
        reportStatus(e) {
            this.trace(`ended with status: code=${e.code} details="${e.details}" start time=${this.startTime.toISOString()}`);
            this.bufferTracker.freeAll(this.callNumber);
            this.writeBufferOffset = this.writeBufferOffset + this.writeBuffer.length;
            this.writeBuffer = [];
            process.nextTick(()=>{
                this.listener?.onReceiveStatus({
                    code: e.code,
                    details: e.details,
                    metadata: e.metadata
                });
            });
        }
        cancelWithStatus(e, t) {
            this.trace(`cancelWithStatus code: ${e} details: "${t}"`);
            this.reportStatus({
                code: e,
                details: t,
                metadata: new Up.Metadata
            });
            for (let { call } of this.underlyingCalls){
                call.cancelWithStatus(e, t);
            }
        }
        getPeer() {
            if (this.committedCallIndex !== null) {
                return this.underlyingCalls[this.committedCallIndex].call.getPeer();
            } else {
                return "unknown";
            }
        }
        getBufferEntry(e) {
            return this.writeBuffer[e - this.writeBufferOffset] ?? {
                entryType: "FREED",
                allocated: false
            };
        }
        getNextBufferIndex() {
            return this.writeBufferOffset + this.writeBuffer.length;
        }
        clearSentMessages() {
            if (this.state !== "COMMITTED") {
                return;
            }
            let e;
            if (this.underlyingCalls[this.committedCallIndex].state === "COMPLETED") {
                e = this.getNextBufferIndex();
            } else {
                e = this.underlyingCalls[this.committedCallIndex].nextMessageToSend;
            }
            for(let t = this.writeBufferOffset; t < e; t++){
                let r = this.getBufferEntry(t);
                if (r.allocated) {
                    this.bufferTracker.free(r.message.message.length, this.callNumber);
                }
            }
            this.writeBuffer = this.writeBuffer.slice(e - this.writeBufferOffset);
            this.writeBufferOffset = e;
        }
        commitCall(e) {
            if (this.state === "COMMITTED") {
                return;
            }
            this.trace(`Committing call [${this.underlyingCalls[e].call.getCallNumber()}] at index ${e}`);
            this.state = "COMMITTED";
            this.callConfig.onCommitted?.();
            this.committedCallIndex = e;
            for(let i = 0; i < this.underlyingCalls.length; i++){
                if (i === e) {
                    continue;
                }
                if (this.underlyingCalls[i].state === "COMPLETED") {
                    continue;
                }
                this.underlyingCalls[i].state = "COMPLETED";
                this.underlyingCalls[i].call.cancelWithStatus(or.Status.CANCELLED, "Discarded in favor of other hedged attempt");
            }
            this.clearSentMessages();
        }
        commitCallWithMostMessages() {
            if (this.state === "COMMITTED") {
                return;
            }
            let e = -1;
            let t = -1;
            for (let [r, i] of this.underlyingCalls.entries()){
                if (i.state === "ACTIVE" && i.nextMessageToSend > e) {
                    e = i.nextMessageToSend;
                    t = r;
                }
            }
            if (t === -1) {
                this.state = "TRANSPARENT_ONLY";
            } else {
                this.commitCall(t);
            }
        }
        isStatusCodeInList(e, t) {
            return e.some((r)=>r === t || r.toString().toLowerCase() === or.Status[t]?.toLowerCase());
        }
        getNextRetryJitter() {
            return Math.random() * 0.3999999999999999 + 0.8;
        }
        getNextRetryBackoffMs() {
            let t = this.callConfig?.methodConfig.retryPolicy;
            if (!t) {
                return 0;
            }
            let i = this.getNextRetryJitter() * this.nextRetryBackoffSec * 1000;
            let s = Number(t.maxBackoff.substring(0, t.maxBackoff.length - 1));
            this.nextRetryBackoffSec = Math.min(this.nextRetryBackoffSec * t.backoffMultiplier, s);
            return i;
        }
        maybeRetryCall(e, t) {
            if (this.state !== "RETRY") {
                t(false);
                return;
            }
            if (this.attempts >= this.maxAttempts) {
                t(false);
                return;
            }
            let r;
            if (e === null) {
                r = this.getNextRetryBackoffMs();
            } else if (e < 0) {
                this.state = "TRANSPARENT_ONLY";
                t(false);
                return;
            } else {
                r = e;
                this.nextRetryBackoffSec = this.initialRetryBackoffSec;
            }
            setTimeout(()=>{
                if (this.state !== "RETRY") {
                    t(false);
                    return;
                }
                if (this.retryThrottler?.canRetryCall() ?? true) {
                    t(true);
                    this.attempts += 1;
                    this.startNewAttempt();
                } else {
                    this.trace("Retry attempt denied by throttling policy");
                    t(false);
                }
            }, r);
        }
        countActiveCalls() {
            let e = 0;
            for (let t of this.underlyingCalls){
                if (t?.state === "ACTIVE") {
                    e += 1;
                }
            }
            return e;
        }
        handleProcessedStatus(e, t, r) {
            switch(this.state){
                case "COMMITTED":
                case "NO_RETRY":
                case "TRANSPARENT_ONLY":
                    this.commitCall(t);
                    this.reportStatus(e);
                    break;
                case "HEDGING":
                    if (this.isStatusCodeInList(this.callConfig.methodConfig.hedgingPolicy.nonFatalStatusCodes ?? [], e.code)) {
                        this.retryThrottler?.addCallFailed();
                        let a;
                        if (r === null) {
                            a = 0;
                        } else if (r < 0) {
                            this.state = "TRANSPARENT_ONLY";
                            this.commitCall(t);
                            this.reportStatus(e);
                            return;
                        } else {
                            a = r;
                        }
                        setTimeout(()=>{
                            this.maybeStartHedgingAttempt();
                            if (this.countActiveCalls() === 0) {
                                this.commitCall(t);
                                this.reportStatus(e);
                            }
                        }, a);
                    } else {
                        this.commitCall(t);
                        this.reportStatus(e);
                    }
                    break;
                case "RETRY":
                    if (this.isStatusCodeInList(this.callConfig.methodConfig.retryPolicy.retryableStatusCodes, e.code)) {
                        this.retryThrottler?.addCallFailed();
                        this.maybeRetryCall(r, (a)=>{
                            if (!a) {
                                this.commitCall(t);
                                this.reportStatus(e);
                            }
                        });
                    } else {
                        this.commitCall(t);
                        this.reportStatus(e);
                    }
                    break;
            }
        }
        getPushback(e) {
            let t = e.get("grpc-retry-pushback-ms");
            if (t.length === 0) {
                return null;
            }
            try {
                return parseInt(t[0]);
            } catch (r) {
                return -1;
            }
        }
        handleChildStatus(e, t) {
            if (this.underlyingCalls[t].state === "COMPLETED") {
                return;
            }
            this.trace(`state=${this.state} handling status with progress ${e.progress} from child [${this.underlyingCalls[t].call.getCallNumber()}] in state ${this.underlyingCalls[t].state}`);
            this.underlyingCalls[t].state = "COMPLETED";
            if (e.code === or.Status.OK) {
                this.retryThrottler?.addCallSucceeded();
                this.commitCall(t);
                this.reportStatus(e);
                return;
            }
            if (this.state === "NO_RETRY") {
                this.commitCall(t);
                this.reportStatus(e);
                return;
            }
            if (this.state === "COMMITTED") {
                this.reportStatus(e);
                return;
            }
            let i = this.getPushback(e.metadata);
            switch(e.progress){
                case "NOT_STARTED":
                    this.startNewAttempt();
                    break;
                case "REFUSED":
                    if (this.transparentRetryUsed) {
                        this.handleProcessedStatus(e, t, i);
                    } else {
                        this.transparentRetryUsed = true;
                        this.startNewAttempt();
                    }
                    break;
                case "DROP":
                    this.commitCall(t);
                    this.reportStatus(e);
                    break;
                case "PROCESSED":
                    this.handleProcessedStatus(e, t, i);
                    break;
            }
        }
        maybeStartHedgingAttempt() {
            if (this.state !== "HEDGING") {
                return;
            }
            if (!this.callConfig.methodConfig.hedgingPolicy) {
                return;
            }
            if (this.attempts >= this.maxAttempts) {
                return;
            }
            this.attempts += 1;
            this.startNewAttempt();
            this.maybeStartHedgingTimer();
        }
        maybeStartHedgingTimer() {
            if (this.hedgingTimer) {
                clearTimeout(this.hedgingTimer);
            }
            if (this.state !== "HEDGING") {
                return;
            }
            if (!this.callConfig.methodConfig.hedgingPolicy) {
                return;
            }
            let hedgingPolicy = this.callConfig.methodConfig.hedgingPolicy;
            if (this.attempts >= this.maxAttempts) {
                return;
            }
            let s = hedgingPolicy.hedgingDelay ?? "0s";
            let n = Number(s.substring(0, s.length - 1));
            this.hedgingTimer = setTimeout(()=>{
                this.maybeStartHedgingAttempt();
            }, n * 1000);
            this.hedgingTimer.unref?.();
        }
        startNewAttempt() {
            let call = this.channel.createLoadBalancingCall(this.callConfig, this.methodName, this.host, this.credentials, this.deadline);
            this.trace(`Created child call [${call.getCallNumber()}] for attempt ${this.attempts}`);
            let length = this.underlyingCalls.length;
            this.underlyingCalls.push({
                state: "ACTIVE",
                call,
                nextMessageToSend: 0,
                startTime: new Date
            });
            let r = this.attempts - 1;
            let i = this.initialMetadata.clone();
            if (r > 0) {
                i.set(Io, `${r}`);
            }
            let s = false;
            call.start(i, {
                onReceiveMetadata: (n)=>{
                    this.trace(`Received metadata from child [${call.getCallNumber()}]`);
                    this.commitCall(length);
                    s = true;
                    if (r > 0) {
                        n.set(Io, `${r}`);
                    }
                    if (this.underlyingCalls[length].state === "ACTIVE") {
                        this.listener.onReceiveMetadata(n);
                    }
                },
                onReceiveMessage: (n)=>{
                    this.trace(`Received message from child [${call.getCallNumber()}]`);
                    this.commitCall(length);
                    if (this.underlyingCalls[length].state === "ACTIVE") {
                        this.listener.onReceiveMessage(n);
                    }
                },
                onReceiveStatus: (n)=>{
                    this.trace(`Received status from child [${call.getCallNumber()}]`);
                    if (!s && r > 0) {
                        n.metadata.set(Io, `${r}`);
                    }
                    this.handleChildStatus(n, length);
                }
            });
            this.sendNextChildMessage(length);
            if (this.readStarted) {
                call.startRead();
            }
        }
        start(e, t) {
            this.trace("start called");
            this.listener = t;
            this.initialMetadata = e;
            this.attempts += 1;
            this.startNewAttempt();
            this.maybeStartHedgingTimer();
        }
        handleChildWriteCompleted(e, t) {
            this.getBufferEntry(t).callback?.();
            this.clearSentMessages();
            let s = this.underlyingCalls[e];
            s.nextMessageToSend += 1;
            this.sendNextChildMessage(e);
        }
        sendNextChildMessage(e) {
            let t = this.underlyingCalls[e];
            if (t.state === "COMPLETED") {
                return;
            }
            let t_nextMessageToSend = t.nextMessageToSend;
            if (this.getBufferEntry(t_nextMessageToSend)) {
                let i = this.getBufferEntry(t_nextMessageToSend);
                switch(i.entryType){
                    case "MESSAGE":
                        t.call.sendMessageWithContext({
                            callback: (n)=>{
                                this.handleChildWriteCompleted(e, t_nextMessageToSend);
                            }
                        }, i.message.message);
                        if (this.getBufferEntry(t_nextMessageToSend + 1).entryType === "HALF_CLOSE") {
                            this.trace(`Sending halfClose immediately after message to child [${t.call.getCallNumber()}] - optimizing for unary/final message`);
                            t.nextMessageToSend += 1;
                            t.call.halfClose();
                        }
                        break;
                    case "HALF_CLOSE":
                        t.nextMessageToSend += 1;
                        t.call.halfClose();
                        break;
                    case "FREED":
                        break;
                }
            }
        }
        sendMessageWithContext(e, t) {
            this.trace(`write() called with message of length ${t.length}`);
            let r = {
                message: t,
                flags: e.flags
            };
            let i = this.getNextBufferIndex();
            let s = {
                entryType: "MESSAGE",
                message: r,
                allocated: this.bufferTracker.allocate(t.length, this.callNumber)
            };
            this.writeBuffer.push(s);
            if (s.allocated) {
                process.nextTick(()=>{
                    e.callback?.();
                });
                for (let [n, a] of this.underlyingCalls.entries()){
                    if (a.state === "ACTIVE" && a.nextMessageToSend === i) {
                        a.call.sendMessageWithContext({
                            callback: (o)=>{
                                this.handleChildWriteCompleted(n, i);
                            }
                        }, t);
                    }
                }
            } else {
                this.commitCallWithMostMessages();
                if (this.committedCallIndex === null) {
                    return;
                }
                let n = this.underlyingCalls[this.committedCallIndex];
                s.callback = e.callback;
                if (n.state === "ACTIVE" && n.nextMessageToSend === i) {
                    n.call.sendMessageWithContext({
                        callback: (a)=>{
                            this.handleChildWriteCompleted(this.committedCallIndex, i);
                        }
                    }, t);
                }
            }
        }
        startRead() {
            this.trace("startRead called");
            this.readStarted = true;
            for (let e of this.underlyingCalls){
                if (e?.state === "ACTIVE") {
                    e.call.startRead();
                }
            }
        }
        halfClose() {
            this.trace("halfClose called");
            let e = this.getNextBufferIndex();
            this.writeBuffer.push({
                entryType: "HALF_CLOSE",
                allocated: false
            });
            for (let t of this.underlyingCalls){
                if (t?.state === "ACTIVE") {
                    if (t.nextMessageToSend === e || t.nextMessageToSend === e - 1) {
                        this.trace(`Sending halfClose immediately to child [${t.call.getCallNumber()}] - all messages already sent`);
                        t.nextMessageToSend += 1;
                        t.call.halfClose();
                    }
                }
            }
        }
        setCredentials(e) {
            throw Error("Method not implemented.");
        }
        getMethod() {
            return this.methodName;
        }
        getHost() {
            return this.host;
        }
        getAuthContext() {
            if (this.committedCallIndex !== null) {
                return this.underlyingCalls[this.committedCallIndex].call.getAuthContext();
            } else {
                return null;
            }
        }
    }
    jp.RetryingCall = Wp;
});
const Bi = C(function(Yp) {
    Object.defineProperty(Yp, "__esModule", {
        value: true
    });
    Yp.BaseSubchannelWrapper = undefined;
    class Vp {
        constructor(e){
            this.child = e;
            this.healthy = true;
            this.healthListeners = new Set;
            this.refcount = 0;
            this.dataWatchers = new Set;
            e.addHealthStateWatcher((t)=>{
                if (this.healthy) {
                    this.updateHealthListeners();
                }
            });
        }
        updateHealthListeners() {
            for (let e of this.healthListeners){
                e(this.isHealthy());
            }
        }
        getConnectivityState() {
            return this.child.getConnectivityState();
        }
        addConnectivityStateListener(e) {
            this.child.addConnectivityStateListener(e);
        }
        removeConnectivityStateListener(e) {
            this.child.removeConnectivityStateListener(e);
        }
        startConnecting() {
            this.child.startConnecting();
        }
        getAddress() {
            return this.child.getAddress();
        }
        throttleKeepalive(e) {
            this.child.throttleKeepalive(e);
        }
        ref() {
            this.child.ref();
            this.refcount += 1;
        }
        unref() {
            this.child.unref();
            this.refcount -= 1;
            if (this.refcount === 0) {
                this.destroy();
            }
        }
        destroy() {
            for (let e of this.dataWatchers){
                e.destroy();
            }
        }
        getChannelzRef() {
            return this.child.getChannelzRef();
        }
        isHealthy() {
            return this.healthy && this.child.isHealthy();
        }
        addHealthStateWatcher(e) {
            this.healthListeners.add(e);
        }
        removeHealthStateWatcher(e) {
            this.healthListeners.delete(e);
        }
        addDataWatcher(e) {
            e.setSubchannel(this.getRealSubchannel());
            this.dataWatchers.add(e);
        }
        setHealthy(e) {
            if (e !== this.healthy) {
                this.healthy = e;
                if (this.child.isHealthy()) {
                    this.updateHealthListeners();
                }
            }
        }
        getRealSubchannel() {
            return this.child.getRealSubchannel();
        }
        realSubchannelEquals(e) {
            return this.getRealSubchannel() === e.getRealSubchannel();
        }
        getCallCredentials() {
            return this.child.getCallCredentials();
        }
        getChannel() {
            return this.child.getChannel();
        }
    }
    Yp.BaseSubchannelWrapper = Vp;
});
const xo = C(function(hg) {
    Object.defineProperty(hg, "__esModule", {
        value: true
    });
    hg.InternalChannel = hg.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = undefined;
    const Jp = Mr();
    const Xp = Dc();
    const Qp = Tp();
    const ni = kt();
    const Zp = ue();
    const Te = k();
    const eg = Js();
    const tg = To();
    const cn = rt();
    const lr = K();
    const rg = Ao();
    const cr = we();
    const ee = Ae();
    const Nt = Zt();
    const ig = Np();
    const sg = Kr();
    const ng = Fp();
    const ii = Ys();
    const ag = Ui();
    const si = $p();
    const og = Bi();
    const IR = 2147483647;
    const xR = 1000;
    const kR = 1800000;
    const ln = new Map;
    const DR = 16777216;
    const LR = 1048576;
    class lg extends og.BaseSubchannelWrapper {
        constructor(e, t){
            super(e);
            this.channel = t;
            this.refCount = 0;
            this.subchannelStateListener = (r, i, s, n)=>{
                t.throttleKeepalive(n);
            };
        }
        ref() {
            if (this.refCount === 0) {
                this.child.addConnectivityStateListener(this.subchannelStateListener);
                this.channel.addWrappedSubchannel(this);
            }
            this.child.ref();
            this.refCount += 1;
        }
        unref() {
            this.child.unref();
            this.refCount -= 1;
            if (this.refCount <= 0) {
                this.child.removeConnectivityStateListener(this.subchannelStateListener);
                this.channel.removeWrappedSubchannel(this);
            }
        }
    }
    class cg {
        pick(e) {
            return {
                pickResultType: ni.PickResultType.DROP,
                status: {
                    code: Te.Status.UNAVAILABLE,
                    details: "Channel closed before call started",
                    metadata: new Zp.Metadata
                },
                subchannel: null,
                onCallStarted: null,
                onCallEnded: null
            };
        }
    }
    hg.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = "grpc.internal.no_subchannel";
    class ug {
        constructor(e){
            this.target = e;
            this.trace = new Nt.ChannelzTrace;
            this.callTracker = new Nt.ChannelzCallTracker;
            this.childrenTracker = new Nt.ChannelzChildrenTracker;
            this.state = ee.ConnectivityState.IDLE;
        }
        getChannelzInfoCallback() {
            return ()=>({
                    target: this.target,
                    state: this.state,
                    trace: this.trace,
                    callTracker: this.callTracker,
                    children: this.childrenTracker.getChildLists()
                });
        }
    }
    class dg {
        constructor(e, t, r){
            this.credentials = t;
            this.options = r;
            this.connectivityState = ee.ConnectivityState.IDLE;
            this.currentPicker = new ni.UnavailablePicker;
            this.configSelectionQueue = [];
            this.pickQueue = [];
            this.connectivityStateWatchers = [];
            this.callRefTimer = null;
            this.configSelector = null;
            this.currentResolutionError = null;
            this.wrappedSubchannels = new Set;
            this.callCount = 0;
            this.idleTimer = null;
            this.channelzEnabled = true;
            this.randomChannelId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
            if (typeof e !== "string") {
                throw TypeError("Channel target must be a string");
            }
            if (!(t instanceof Jp.ChannelCredentials)) {
                throw TypeError("Channel credentials must be a ChannelCredentials object");
            }
            if (r) {
                if (typeof r !== "object") {
                    throw TypeError("Channel options must be an object");
                }
            }
            this.channelzInfoTracker = new ug(e);
            let c = cr.parseUri(e);
            if (c === null) {
                throw Error(`Could not parse target name "${e}"`);
            }
            let u = cn.mapUriDefaultScheme(c);
            if (u === null) {
                throw Error(`Could not find a default scheme for target name "${e}"`);
            }
            if (this.options["grpc.enable_channelz"] === 0) {
                this.channelzEnabled = false;
            }
            this.channelzRef = Nt.registerChannelzChannel(e, this.channelzInfoTracker.getChannelzInfoCallback(), this.channelzEnabled);
            if (this.channelzEnabled) {
                this.channelzInfoTracker.trace.addTrace("CT_INFO", "Channel created");
            }
            if (this.options["grpc.default_authority"]) {
                this.defaultAuthority = this.options["grpc.default_authority"];
            } else {
                this.defaultAuthority = cn.getDefaultAuthority(u);
            }
            let d = rg.mapProxyName(u, r);
            this.target = d.target;
            this.options = {
                ...this.options,
                ...d.extraOptions
            };
            this.subchannelPool = Qp.getSubchannelPool((this.options["grpc.use_local_subchannel_pool"] ?? 0) === 0);
            this.retryBufferTracker = new si.MessageBufferTracker(this.options["grpc.retry_buffer_size"] ?? DR, this.options["grpc.per_rpc_retry_buffer_size"] ?? LR);
            this.keepaliveTime = this.options["grpc.keepalive_time_ms"] ?? -1;
            this.idleTimeoutMs = Math.max(this.options["grpc.client_idle_timeout_ms"] ?? kR, xR);
            let h = {
                createSubchannel: (f, y)=>{
                    let E = {};
                    for (let [te, v] of Object.entries(y)){
                        if (!te.startsWith(hg.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX)) {
                            E[te] = v;
                        }
                    }
                    let T = this.subchannelPool.getOrCreateSubchannel(this.target, f, E, this.credentials);
                    T.throttleKeepalive(this.keepaliveTime);
                    if (this.channelzEnabled) {
                        this.channelzInfoTracker.trace.addTrace("CT_INFO", "Created subchannel or used existing subchannel", T.getChannelzRef());
                    }
                    return new lg(T, this);
                },
                updateState: (f, y)=>{
                    this.currentPicker = y;
                    let E = this.pickQueue.slice();
                    this.pickQueue = [];
                    if (E.length > 0) {
                        this.callRefTimerUnref();
                    }
                    for (let T of E){
                        T.doPick();
                    }
                    this.updateState(f);
                },
                requestReresolution: ()=>{
                    throw Error("Resolving load balancer should never call requestReresolution");
                },
                addChannelzChild: (f)=>{
                    if (this.channelzEnabled) {
                        this.channelzInfoTracker.childrenTracker.refChild(f);
                    }
                },
                removeChannelzChild: (f)=>{
                    if (this.channelzEnabled) {
                        this.channelzInfoTracker.childrenTracker.unrefChild(f);
                    }
                }
            };
            this.resolvingLoadBalancer = new Xp.ResolvingLoadBalancer(this.target, h, this.options, (f, y)=>{
                if (f.retryThrottling) {
                    ln.set(this.getTarget(), new si.RetryThrottler(f.retryThrottling.maxTokens, f.retryThrottling.tokenRatio, ln.get(this.getTarget())));
                } else {
                    ln.delete(this.getTarget());
                }
                if (this.channelzEnabled) {
                    this.channelzInfoTracker.trace.addTrace("CT_INFO", "Address resolution succeeded");
                }
                this.configSelector?.unref();
                this.configSelector = y;
                this.currentResolutionError = null;
                process.nextTick(()=>{
                    let configSelectionQueue = this.configSelectionQueue;
                    this.configSelectionQueue = [];
                    if (configSelectionQueue.length > 0) {
                        this.callRefTimerUnref();
                    }
                    for (let P of configSelectionQueue){
                        P.getConfig();
                    }
                });
            }, (f)=>{
                if (this.channelzEnabled) {
                    this.channelzInfoTracker.trace.addTrace("CT_WARNING", `Address resolution failed with code ${f.code} and details "${f.details}"`);
                }
                if (this.configSelectionQueue.length > 0) {
                    this.trace("Name resolution failed with calls queued for config selection");
                }
                if (this.configSelector === null) {
                    this.currentResolutionError = {
                        ...ag.restrictControlPlaneStatusCode(f.code, f.details),
                        metadata: f.metadata
                    };
                }
                let configSelectionQueue = this.configSelectionQueue;
                this.configSelectionQueue = [];
                if (configSelectionQueue.length > 0) {
                    this.callRefTimerUnref();
                }
                for (let E of configSelectionQueue){
                    E.reportResolverError(f);
                }
            });
            this.filterStackFactory = new eg.FilterStackFactory([
                new tg.CompressionFilterFactory(this, this.options)
            ]);
            this.trace(`Channel constructed with options ${JSON.stringify(r, undefined, 2)}`);
            let m = Error();
            if (lr.isTracerEnabled("channel_stacktrace")) {
                lr.trace(Te.LogVerbosity.DEBUG, "channel_stacktrace", `(${this.channelzRef.id}${`) Channel constructed 
`}${m.stack?.substring(m.stack.indexOf(`
`) + 1)}`);
            }
            this.lastActivityTimestamp = new Date;
        }
        trace(e, t) {
            lr.trace(t ?? Te.LogVerbosity.DEBUG, "channel", `(${this.channelzRef.id}) ${cr.uriToString(this.target)} ${e}`);
        }
        callRefTimerRef() {
            if (!this.callRefTimer) {
                this.callRefTimer = setInterval(()=>{}, IR);
            }
            if (!this.callRefTimer.hasRef?.()) {
                this.trace(`callRefTimer.ref | configSelectionQueue.length=${this.configSelectionQueue.length} pickQueue.length=${this.pickQueue.length}`);
                this.callRefTimer.ref?.();
            }
        }
        callRefTimerUnref() {
            if (!this.callRefTimer?.hasRef || this.callRefTimer.hasRef()) {
                this.trace(`callRefTimer.unref | configSelectionQueue.length=${this.configSelectionQueue.length} pickQueue.length=${this.pickQueue.length}`);
                this.callRefTimer?.unref?.();
            }
        }
        removeConnectivityStateWatcher(e) {
            let t = this.connectivityStateWatchers.findIndex((r)=>r === e);
            if (t >= 0) {
                this.connectivityStateWatchers.splice(t, 1);
            }
        }
        updateState(e) {
            lr.trace(Te.LogVerbosity.DEBUG, "connectivity_state", `(${this.channelzRef.id}) ${cr.uriToString(this.target)} ${ee.ConnectivityState[this.connectivityState]} -> ${ee.ConnectivityState[e]}`);
            if (this.channelzEnabled) {
                this.channelzInfoTracker.trace.addTrace("CT_INFO", `Connectivity state change to ${ee.ConnectivityState[e]}`);
            }
            this.connectivityState = e;
            this.channelzInfoTracker.state = e;
            let t = this.connectivityStateWatchers.slice();
            for (let r of t){
                if (e !== r.currentState) {
                    if (r.timer) {
                        clearTimeout(r.timer);
                    }
                    this.removeConnectivityStateWatcher(r);
                    r.callback();
                }
            }
            if (e !== ee.ConnectivityState.TRANSIENT_FAILURE) {
                this.currentResolutionError = null;
            }
        }
        throttleKeepalive(e) {
            if (e > this.keepaliveTime) {
                this.keepaliveTime = e;
                for (let t of this.wrappedSubchannels){
                    t.throttleKeepalive(e);
                }
            }
        }
        addWrappedSubchannel(e) {
            this.wrappedSubchannels.add(e);
        }
        removeWrappedSubchannel(e) {
            this.wrappedSubchannels.delete(e);
        }
        doPick(metadata, extraPickInfo) {
            return this.currentPicker.pick({
                metadata,
                extraPickInfo
            });
        }
        queueCallForPick(e) {
            this.pickQueue.push(e);
            this.callRefTimerRef();
        }
        getConfig(e, t) {
            if (this.connectivityState !== ee.ConnectivityState.SHUTDOWN) {
                this.resolvingLoadBalancer.exitIdle();
            }
            if (this.configSelector) {
                return {
                    type: "SUCCESS",
                    config: this.configSelector.invoke(e, t, this.randomChannelId)
                };
            } else if (this.currentResolutionError) {
                return {
                    type: "ERROR",
                    error: this.currentResolutionError
                };
            } else {
                return {
                    type: "NONE"
                };
            }
        }
        queueCallForConfig(e) {
            this.configSelectionQueue.push(e);
            this.callRefTimerRef();
        }
        enterIdle() {
            this.resolvingLoadBalancer.destroy();
            this.updateState(ee.ConnectivityState.IDLE);
            this.currentPicker = new ni.QueuePicker(this.resolvingLoadBalancer);
            if (this.idleTimer) {
                clearTimeout(this.idleTimer);
                this.idleTimer = null;
            }
            if (this.callRefTimer) {
                clearInterval(this.callRefTimer);
                this.callRefTimer = null;
            }
        }
        startIdleTimeout(e) {
            this.idleTimer = setTimeout(()=>{
                if (this.callCount > 0) {
                    this.startIdleTimeout(this.idleTimeoutMs);
                    return;
                }
                let s = new Date().valueOf() - this.lastActivityTimestamp.valueOf();
                if (s >= this.idleTimeoutMs) {
                    this.trace(`Idle timer triggered after ${this.idleTimeoutMs}ms of inactivity`);
                    this.enterIdle();
                } else {
                    this.startIdleTimeout(this.idleTimeoutMs - s);
                }
            }, e);
            this.idleTimer.unref?.();
        }
        maybeStartIdleTimer() {
            if (this.connectivityState !== ee.ConnectivityState.SHUTDOWN && !this.idleTimer) {
                this.startIdleTimeout(this.idleTimeoutMs);
            }
        }
        onCallStart() {
            if (this.channelzEnabled) {
                this.channelzInfoTracker.callTracker.addCallStarted();
            }
            this.callCount += 1;
        }
        onCallEnd(e) {
            if (this.channelzEnabled) {
                if (e.code === Te.Status.OK) {
                    this.channelzInfoTracker.callTracker.addCallSucceeded();
                } else {
                    this.channelzInfoTracker.callTracker.addCallFailed();
                }
            }
            this.callCount -= 1;
            this.lastActivityTimestamp = new Date;
            this.maybeStartIdleTimer();
        }
        createLoadBalancingCall(e, t, r, i, s) {
            let n = ii.getNextCallNumber();
            this.trace(`createLoadBalancingCall [${n}] method="${t}"`);
            return new ig.LoadBalancingCall(this, e, t, r, i, s, n);
        }
        createRetryingCall(e, t, r, i, s) {
            let n = ii.getNextCallNumber();
            this.trace(`createRetryingCall [${n}] method="${t}"`);
            return new si.RetryingCall(this, e, t, r, i, s, n, this.retryBufferTracker, ln.get(this.getTarget()));
        }
        createResolvingCall(e, t, r, parentCall, s) {
            let n = ii.getNextCallNumber();
            this.trace(`createResolvingCall [${n}] method="${e}", deadline=${sg.deadlineToString(t)}`);
            let a = {
                deadline: t,
                flags: s ?? Te.Propagate.DEFAULTS,
                host: r ?? this.defaultAuthority,
                parentCall
            };
            let o = new ng.ResolvingCall(this, e, a, this.filterStackFactory.clone(), n);
            this.onCallStart();
            o.addStatusWatcher((l)=>{
                this.onCallEnd(l);
            });
            return o;
        }
        close() {
            this.resolvingLoadBalancer.destroy();
            this.updateState(ee.ConnectivityState.SHUTDOWN);
            this.currentPicker = new cg;
            for (let t of this.configSelectionQueue){
                t.cancelWithStatus(Te.Status.UNAVAILABLE, "Channel closed before call started");
            }
            this.configSelectionQueue = [];
            for (let t of this.pickQueue){
                t.cancelWithStatus(Te.Status.UNAVAILABLE, "Channel closed before call started");
            }
            this.pickQueue = [];
            if (this.callRefTimer) {
                clearInterval(this.callRefTimer);
            }
            if (this.idleTimer) {
                clearTimeout(this.idleTimer);
            }
            if (this.channelzEnabled) {
                Nt.unregisterChannelzRef(this.channelzRef);
            }
            this.subchannelPool.unrefUnusedSubchannels();
            this.configSelector?.unref();
            this.configSelector = null;
        }
        getTarget() {
            return cr.uriToString(this.target);
        }
        getConnectivityState(e) {
            let connectivityState = this.connectivityState;
            if (e) {
                this.resolvingLoadBalancer.exitIdle();
                this.lastActivityTimestamp = new Date;
                this.maybeStartIdleTimer();
            }
            return connectivityState;
        }
        watchConnectivityState(currentState, t, r) {
            if (this.connectivityState === ee.ConnectivityState.SHUTDOWN) {
                throw Error("Channel has been shut down");
            }
            let timer = null;
            if (t !== Infinity) {
                let n = t instanceof Date ? t : new Date(t);
                let a = new Date;
                if (t === -Infinity || n <= a) {
                    process.nextTick(r, Error("Deadline passed without connectivity state change"));
                    return;
                }
                timer = setTimeout(()=>{
                    this.removeConnectivityStateWatcher(s);
                    r(Error("Deadline passed without connectivity state change"));
                }, n.getTime() - a.getTime());
            }
            let s = {
                currentState,
                callback: r,
                timer
            };
            this.connectivityStateWatchers.push(s);
        }
        getChannelzRef() {
            return this.channelzRef;
        }
        createCall(e, t, r, i, s) {
            if (typeof e !== "string") {
                throw TypeError("Channel#createCall: method must be a string");
            }
            if (!(typeof t === "number" || t instanceof Date)) {
                throw TypeError("Channel#createCall: deadline must be a number or Date");
            }
            if (this.connectivityState === ee.ConnectivityState.SHUTDOWN) {
                throw Error("Channel has been shut down");
            }
            return this.createResolvingCall(e, t, r, i, s);
        }
        getOptions() {
            return this.options;
        }
    }
    hg.InternalChannel = dg;
});
var Ra = C(function(yg) {
    Object.defineProperty(yg, "__esModule", {
        value: true
    });
    yg.ChannelImplementation = undefined;
    const gg = Mr();
    const mg = xo();
    class vg {
        constructor(e, t, r){
            if (typeof e !== "string") {
                throw TypeError("Channel target must be a string");
            }
            if (!(t instanceof gg.ChannelCredentials)) {
                throw TypeError("Channel credentials must be a ChannelCredentials object");
            }
            if (r) {
                if (typeof r !== "object") {
                    throw TypeError("Channel options must be an object");
                }
            }
            this.internalChannel = new mg.InternalChannel(e, t, r);
        }
        close() {
            this.internalChannel.close();
        }
        getTarget() {
            return this.internalChannel.getTarget();
        }
        getConnectivityState(e) {
            return this.internalChannel.getConnectivityState(e);
        }
        watchConnectivityState(e, t, r) {
            this.internalChannel.watchConnectivityState(e, t, r);
        }
        getChannelzRef() {
            return this.internalChannel.getChannelzRef();
        }
        createCall(e, t, r, i, s) {
            if (typeof e !== "string") {
                throw TypeError("Channel#createCall: method must be a string");
            }
            if (!(typeof t === "number" || t instanceof Date)) {
                throw TypeError("Channel#createCall: deadline must be a number or Date");
            }
            return this.internalChannel.createCall(e, t, r, i, s);
        }
    }
    yg.ChannelImplementation = vg;
});
const wg = C(function(bg) {
    Object.defineProperty(bg, "__esModule", {
        value: true
    });
    bg.ServerDuplexStreamImpl = bg.ServerWritableStreamImpl = bg.ServerReadableStreamImpl = bg.ServerUnaryCallImpl = undefined;
    bg.serverErrorToStatus = ko;
    const Sg = Le("events");
    const ai = Le("stream");
    var oi = k();
    const un = ue();
    function ko(e, t) {
        let i = {
            code: oi.Status.UNKNOWN,
            details: "message" in e ? e.message : "Unknown Error",
            metadata: t ?? e.metadata ?? null
        };
        if ("code" in e && typeof e.code === "number" && Number.isInteger(e.code)) {
            i.code = e.code;
            if ("details" in e && typeof e.details === "string") {
                i.details = e.details;
            }
        }
        return i;
    }
    class Cg extends Sg.EventEmitter {
        constructor(e, t, r, i){
            super();
            this.path = e;
            this.call = t;
            this.metadata = r;
            this.request = i;
            this.cancelled = false;
        }
        getPeer() {
            return this.call.getPeer();
        }
        sendMetadata(e) {
            this.call.sendMetadata(e);
        }
        getDeadline() {
            return this.call.getDeadline();
        }
        getPath() {
            return this.path;
        }
        getHost() {
            return this.call.getHost();
        }
        getAuthContext() {
            return this.call.getAuthContext();
        }
        getMetricsRecorder() {
            return this.call.getMetricsRecorder();
        }
    }
    bg.ServerUnaryCallImpl = Cg;
    class Eg extends ai.Readable {
        constructor(e, t, r){
            super({
                objectMode: true
            });
            this.path = e;
            this.call = t;
            this.metadata = r;
            this.cancelled = false;
        }
        _read(e) {
            this.call.startRead();
        }
        getPeer() {
            return this.call.getPeer();
        }
        sendMetadata(e) {
            this.call.sendMetadata(e);
        }
        getDeadline() {
            return this.call.getDeadline();
        }
        getPath() {
            return this.path;
        }
        getHost() {
            return this.call.getHost();
        }
        getAuthContext() {
            return this.call.getAuthContext();
        }
        getMetricsRecorder() {
            return this.call.getMetricsRecorder();
        }
    }
    bg.ServerReadableStreamImpl = Eg;
    class Tg extends ai.Writable {
        constructor(e, t, r, i){
            super({
                objectMode: true
            });
            this.path = e;
            this.call = t;
            this.metadata = r;
            this.request = i;
            this.pendingStatus = {
                code: oi.Status.OK,
                details: "OK"
            };
            this.cancelled = false;
            this.trailingMetadata = new un.Metadata;
            this.on("error", (s)=>{
                this.pendingStatus = ko(s);
                this.end();
            });
        }
        getPeer() {
            return this.call.getPeer();
        }
        sendMetadata(e) {
            this.call.sendMetadata(e);
        }
        getDeadline() {
            return this.call.getDeadline();
        }
        getPath() {
            return this.path;
        }
        getHost() {
            return this.call.getHost();
        }
        getAuthContext() {
            return this.call.getAuthContext();
        }
        getMetricsRecorder() {
            return this.call.getMetricsRecorder();
        }
        _write(e, t, r) {
            this.call.sendMessage(e, r);
        }
        _final(e) {
            e(null);
            this.call.sendStatus({
                ...this.pendingStatus,
                metadata: this.pendingStatus.metadata ?? this.trailingMetadata
            });
        }
        end(e) {
            if (e) {
                this.trailingMetadata = e;
            }
            return super.end();
        }
    }
    bg.ServerWritableStreamImpl = Tg;
    class Rg extends ai.Duplex {
        constructor(e, t, r){
            super({
                objectMode: true
            });
            this.path = e;
            this.call = t;
            this.metadata = r;
            this.pendingStatus = {
                code: oi.Status.OK,
                details: "OK"
            };
            this.cancelled = false;
            this.trailingMetadata = new un.Metadata;
            this.on("error", (i)=>{
                this.pendingStatus = ko(i);
                this.end();
            });
        }
        getPeer() {
            return this.call.getPeer();
        }
        sendMetadata(e) {
            this.call.sendMetadata(e);
        }
        getDeadline() {
            return this.call.getDeadline();
        }
        getPath() {
            return this.path;
        }
        getHost() {
            return this.call.getHost();
        }
        getAuthContext() {
            return this.call.getAuthContext();
        }
        getMetricsRecorder() {
            return this.call.getMetricsRecorder();
        }
        _read(e) {
            this.call.startRead();
        }
        _write(e, t, r) {
            this.call.sendMessage(e, r);
        }
        _final(e) {
            e(null);
            this.call.sendStatus({
                ...this.pendingStatus,
                metadata: this.pendingStatus.metadata ?? this.trailingMetadata
            });
        }
        end(e) {
            if (e) {
                this.trailingMetadata = e;
            }
            return super.end();
        }
    }
    bg.ServerDuplexStreamImpl = Rg;
});
const dn = C(function(Ag) {
    Object.defineProperty(Ag, "__esModule", {
        value: true
    });
    Ag.ServerCredentials = undefined;
    Ag.createCertificateProviderServerCredentials = zR;
    Ag.createServerCredentialsWithInterceptors = HR;
    const li = fa();
    class ci {
        constructor(e, t){
            this.serverConstructorOptions = e;
            this.watchers = new Set;
            this.latestContextOptions = null;
            this.latestContextOptions = t ?? null;
        }
        _addWatcher(e) {
            this.watchers.add(e);
        }
        _removeWatcher(e) {
            this.watchers.delete(e);
        }
        getWatcherCount() {
            return this.watchers.size;
        }
        updateSecureContextOptions(e) {
            this.latestContextOptions = e;
            for (let t of this.watchers){
                t(this.latestContextOptions);
            }
        }
        _isSecure() {
            return this.serverConstructorOptions !== null;
        }
        _getSecureContextOptions() {
            return this.latestContextOptions;
        }
        _getConstructorOptions() {
            return this.serverConstructorOptions;
        }
        _getInterceptors() {
            return [];
        }
        static createInsecure() {
            return new Do;
        }
        static createSsl(e, t, requestCert = false) {
            if (e !== null && !Buffer.isBuffer(e)) {
                throw TypeError("rootCerts must be null or a Buffer");
            }
            if (!Array.isArray(t)) {
                throw TypeError("keyCertPairs must be an array");
            }
            if (typeof requestCert !== "boolean") {
                throw TypeError("checkClientCertificate must be a boolean");
            }
            let cert = [];
            let n = [];
            for(let a = 0; a < t.length; a++){
                let o = t[a];
                if (o === null || typeof o !== "object") {
                    throw TypeError(`keyCertPair[${a}] must be an object`);
                }
                if (!Buffer.isBuffer(o.private_key)) {
                    throw TypeError(`keyCertPair[${a}].private_key must be a Buffer`);
                }
                if (!Buffer.isBuffer(o.cert_chain)) {
                    throw TypeError(`keyCertPair[${a}].cert_chain must be a Buffer`);
                }
                cert.push(o.cert_chain);
                n.push(o.private_key);
            }
            return new Lo({
                requestCert,
                ciphers: li.CIPHER_SUITES
            }, {
                ca: e ?? li.getDefaultRootsData() ?? undefined,
                cert,
                key: n
            });
        }
    }
    Ag.ServerCredentials = ci;
    class Do extends ci {
        constructor(){
            super(null);
        }
        _getSettings() {
            return null;
        }
        _equals(e) {
            return e instanceof Do;
        }
    }
    class Lo extends ci {
        constructor(e, t){
            super(e, t);
            this.options = {
                ...e,
                ...t
            };
        }
        _equals(e) {
            if (this === e) {
                return true;
            }
            if (!(e instanceof Lo)) {
                return false;
            }
            if (Buffer.isBuffer(this.options.ca) && Buffer.isBuffer(e.options.ca)) {
                if (!this.options.ca.equals(e.options.ca)) {
                    return false;
                }
            } else if (this.options.ca !== e.options.ca) {
                return false;
            }
            if (Array.isArray(this.options.cert) && Array.isArray(e.options.cert)) {
                if (this.options.cert.length !== e.options.cert.length) {
                    return false;
                }
                for(let t = 0; t < this.options.cert.length; t++){
                    let r = this.options.cert[t];
                    let i = e.options.cert[t];
                    if (Buffer.isBuffer(r) && Buffer.isBuffer(i)) {
                        if (!r.equals(i)) {
                            return false;
                        }
                    } else if (r !== i) {
                        return false;
                    }
                }
            } else if (this.options.cert !== e.options.cert) {
                return false;
            }
            if (Array.isArray(this.options.key) && Array.isArray(e.options.key)) {
                if (this.options.key.length !== e.options.key.length) {
                    return false;
                }
                for(let t = 0; t < this.options.key.length; t++){
                    let r = this.options.key[t];
                    let i = e.options.key[t];
                    if (Buffer.isBuffer(r) && Buffer.isBuffer(i)) {
                        if (!r.equals(i)) {
                            return false;
                        }
                    } else if (r !== i) {
                        return false;
                    }
                }
            } else if (this.options.key !== e.options.key) {
                return false;
            }
            if (this.options.requestCert !== e.options.requestCert) {
                return false;
            }
            return true;
        }
    }
    class Fo extends ci {
        constructor(e, t, rejectUnauthorized){
            super({
                requestCert: t !== null,
                rejectUnauthorized,
                ciphers: li.CIPHER_SUITES
            });
            this.identityCertificateProvider = e;
            this.caCertificateProvider = t;
            this.requireClientCertificate = rejectUnauthorized;
            this.latestCaUpdate = null;
            this.latestIdentityUpdate = null;
            this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this);
            this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this);
        }
        _addWatcher(e) {
            if (this.getWatcherCount() === 0) {
                this.caCertificateProvider?.addCaCertificateListener(this.caCertificateUpdateListener);
                this.identityCertificateProvider.addIdentityCertificateListener(this.identityCertificateUpdateListener);
            }
            super._addWatcher(e);
        }
        _removeWatcher(e) {
            super._removeWatcher(e);
            if (this.getWatcherCount() === 0) {
                this.caCertificateProvider?.removeCaCertificateListener(this.caCertificateUpdateListener);
                this.identityCertificateProvider.removeIdentityCertificateListener(this.identityCertificateUpdateListener);
            }
        }
        _equals(e) {
            if (this === e) {
                return true;
            }
            if (!(e instanceof Fo)) {
                return false;
            }
            return this.caCertificateProvider === e.caCertificateProvider && this.identityCertificateProvider === e.identityCertificateProvider && this.requireClientCertificate === e.requireClientCertificate;
        }
        calculateSecureContextOptions() {
            if (this.latestIdentityUpdate === null) {
                return null;
            }
            if (this.caCertificateProvider !== null && this.latestCaUpdate === null) {
                return null;
            }
            return {
                ca: this.latestCaUpdate?.caCertificate,
                cert: [
                    this.latestIdentityUpdate.certificate
                ],
                key: [
                    this.latestIdentityUpdate.privateKey
                ]
            };
        }
        finalizeUpdate() {
            let e = this.calculateSecureContextOptions();
            this.updateSecureContextOptions(e);
        }
        handleCaCertificateUpdate(e) {
            this.latestCaUpdate = e;
            this.finalizeUpdate();
        }
        handleIdentityCertitificateUpdate(e) {
            this.latestIdentityUpdate = e;
            this.finalizeUpdate();
        }
    }
    function zR(e, t, r) {
        return new Fo(e, t, r);
    }
    class qo extends ci {
        constructor(e, t){
            super({});
            this.childCredentials = e;
            this.interceptors = t;
        }
        _isSecure() {
            return this.childCredentials._isSecure();
        }
        _equals(e) {
            if (!(e instanceof qo)) {
                return false;
            }
            if (!this.childCredentials._equals(e.childCredentials)) {
                return false;
            }
            if (this.interceptors.length !== e.interceptors.length) {
                return false;
            }
            for(let t = 0; t < this.interceptors.length; t++){
                if (this.interceptors[t] !== e.interceptors[t]) {
                    return false;
                }
            }
            return true;
        }
        _getInterceptors() {
            return this.interceptors;
        }
        _addWatcher(e) {
            this.childCredentials._addWatcher(e);
        }
        _removeWatcher(e) {
            this.childCredentials._removeWatcher(e);
        }
        _getConstructorOptions() {
            return this.childCredentials._getConstructorOptions();
        }
        _getSecureContextOptions() {
            return this.childCredentials._getSecureContextOptions();
        }
    }
    function HR(e, t) {
        return new qo(e, t);
    }
});
const zi = C(function(Ng) {
    Object.defineProperty(Ng, "__esModule", {
        value: true
    });
    Ng.durationMessageToDuration = GR;
    Ng.msToDuration = $R;
    Ng.durationToMs = VR;
    Ng.isDuration = YR;
    Ng.isDurationMessage = KR;
    Ng.parseDuration = XR;
    Ng.durationToString = QR;
    function GR(e) {
        return {
            seconds: Number.parseInt(e.seconds),
            nanos: e.nanos
        };
    }
    function $R(e) {
        return {
            seconds: e / 1000 | 0,
            nanos: e % 1000 * 1000000 | 0
        };
    }
    function VR(e) {
        return e.seconds * 1000 + e.nanos / 1000000 | 0;
    }
    function YR(e) {
        return typeof e.seconds === "number" && typeof e.nanos === "number";
    }
    function KR(e) {
        return typeof e.seconds === "string" && typeof e.nanos === "number";
    }
    var JR = /^(\d+)(?:\.(\d+))?s$/;
    function XR(e) {
        let t = e.match(JR);
        if (!t) {
            return null;
        }
        return {
            seconds: Number.parseInt(t[1], 10),
            nanos: t[2] ? Number.parseInt(t[2].padEnd(9, "0"), 10) : 0
        };
    }
    function QR(e) {
        if (e.nanos === 0) {
            return `${e.seconds}s`;
        }
        let t;
        if (e.nanos % 1000000 === 0) {
            t = 1000000;
        } else if (e.nanos % 1000 === 0) {
            t = 1000;
        } else {
            t = 1;
        }
        return `${e.seconds}.${e.nanos / t}s`;
    }
});
const pn = C(function(Gg) {
    const __dirname = "/home/runner/work/claude-cli-internal/claude-cli-internal/node_modules/@grpc/grpc-js/build/src";
    Object.defineProperty(Gg, "__esModule", {
        value: true
    });
    Gg.OrcaOobMetricsSubchannelWrapper = Gg.GRPC_METRICS_HEADER = Gg.ServerMetricRecorder = Gg.PerRequestMetricRecorder = undefined;
    Gg.createOrcaClient = Bg;
    Gg.createMetricsReader = ob;
    var xg = vs();
    const ui = zi();
    var kg = Mr();
    const Dg = Bi();
    const hn = k();
    const Lg = Ir();
    const Fg = Ae();
    var Mg = null;
    function fn() {
        if (Mg) {
            return Mg;
        }
        let loadSync = po().loadSync;
        let t = loadSync("xds/service/orca/v3/orca.proto", {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
            includeDirs: [
                `${__dirname}/../../proto/xds`,
                `${__dirname}/../../proto/protoc-gen-validate`
            ]
        });
        return xg.loadPackageDefinition(t);
    }
    class qg {
        constructor(){
            this.message = {};
        }
        recordRequestCostMetric(e, t) {
            if (!this.message.request_cost) {
                this.message.request_cost = {};
            }
            this.message.request_cost[e] = t;
        }
        recordUtilizationMetric(e, t) {
            if (!this.message.utilization) {
                this.message.utilization = {};
            }
            this.message.utilization[e] = t;
        }
        recordNamedMetric(e, t) {
            if (!this.message.named_metrics) {
                this.message.named_metrics = {};
            }
            this.message.named_metrics[e] = t;
        }
        recordCPUUtilizationMetric(e) {
            this.message.cpu_utilization = e;
        }
        recordMemoryUtilizationMetric(e) {
            this.message.mem_utilization = e;
        }
        recordApplicationUtilizationMetric(e) {
            this.message.application_utilization = e;
        }
        recordQpsMetric(e) {
            this.message.rps_fractional = e;
        }
        recordEpsMetric(e) {
            this.message.eps = e;
        }
        serialize() {
            return fn().xds.data.orca.v3.OrcaLoadReport.serialize(this.message);
        }
    }
    Gg.PerRequestMetricRecorder = qg;
    const ab = 30000;
    class Ug {
        constructor(){
            this.message = {};
            this.serviceImplementation = {
                StreamCoreMetrics: (e)=>{
                    let t = e.request.report_interval ? ui.durationToMs(ui.durationMessageToDuration(e.request.report_interval)) : ab;
                    let r = setInterval(()=>{
                        e.write(this.message);
                    }, t);
                    e.on("cancelled", ()=>{
                        clearInterval(r);
                    });
                }
            };
        }
        putUtilizationMetric(e, t) {
            if (!this.message.utilization) {
                this.message.utilization = {};
            }
            this.message.utilization[e] = t;
        }
        setAllUtilizationMetrics(e) {
            this.message.utilization = {
                ...e
            };
        }
        deleteUtilizationMetric(e) {
            let t;
            if (!((t = this.message.utilization) === null || t === undefined)) {
                delete t[e];
            }
        }
        setCpuUtilizationMetric(e) {
            this.message.cpu_utilization = e;
        }
        deleteCpuUtilizationMetric() {
            delete this.message.cpu_utilization;
        }
        setApplicationUtilizationMetric(e) {
            this.message.application_utilization = e;
        }
        deleteApplicationUtilizationMetric() {
            delete this.message.application_utilization;
        }
        setQpsMetric(e) {
            this.message.rps_fractional = e;
        }
        deleteQpsMetric() {
            delete this.message.rps_fractional;
        }
        setEpsMetric(e) {
            this.message.eps = e;
        }
        deleteEpsMetric() {
            delete this.message.eps;
        }
        addToServer(e) {
            let service = fn().xds.service.orca.v3.OpenRcaService.service;
            e.addService(service, this.serviceImplementation);
        }
    }
    Gg.ServerMetricRecorder = Ug;
    function Bg(channelOverride) {
        return new (fn()).xds.service.orca.v3.OpenRcaService("unused", kg.ChannelCredentials.createInsecure(), {
            channelOverride
        });
    }
    Gg.GRPC_METRICS_HEADER = "endpoint-load-metrics-bin";
    var Ig = "grpc_orca_load_report";
    function ob(e, t) {
        return (r, i, s)=>{
            let n = s.getOpaque(Ig);
            if (n) {
                e(n);
            } else {
                let a = s.get(Gg.GRPC_METRICS_HEADER);
                if (a.length > 0) {
                    n = fn().xds.data.orca.v3.OrcaLoadReport.deserialize(a[0]);
                    e(n);
                    s.setOpaque(Ig, n);
                }
            }
            if (t) {
                t(r, i, s);
            }
        };
    }
    const zg = "orca_oob_metrics";
    class Hg {
        constructor(e, t){
            this.metricsListener = e;
            this.intervalMs = t;
            this.dataProducer = null;
        }
        setSubchannel(e) {
            let t = e.getOrCreateDataProducer(zg, lb);
            this.dataProducer = t;
            t.addDataWatcher(this);
        }
        destroy() {
            this.dataProducer?.removeDataWatcher(this);
        }
        getInterval() {
            return this.intervalMs;
        }
        onMetricsUpdate(e) {
            this.metricsListener(e);
        }
    }
    class Wg {
        constructor(e){
            this.subchannel = e;
            this.dataWatchers = new Set;
            this.orcaSupported = true;
            this.metricsCall = null;
            this.currentInterval = Infinity;
            this.backoffTimer = new Lg.BackoffTimeout(()=>this.updateMetricsSubscription());
            this.subchannelStateListener = ()=>this.updateMetricsSubscription();
            let t = e.getChannel();
            this.client = Bg(t);
            e.addConnectivityStateListener(this.subchannelStateListener);
        }
        addDataWatcher(e) {
            this.dataWatchers.add(e);
            this.updateMetricsSubscription();
        }
        removeDataWatcher(e) {
            this.dataWatchers.delete(e);
            if (this.dataWatchers.size === 0) {
                this.subchannel.removeDataProducer(zg);
                this.metricsCall?.cancel();
                this.metricsCall = null;
                this.client.close();
                this.subchannel.removeConnectivityStateListener(this.subchannelStateListener);
            } else {
                this.updateMetricsSubscription();
            }
        }
        updateMetricsSubscription() {
            if (this.dataWatchers.size === 0 || !this.orcaSupported || this.subchannel.getConnectivityState() !== Fg.ConnectivityState.READY) {
                return;
            }
            let t = Math.min(...Array.from(this.dataWatchers).map((r)=>r.getInterval()));
            if (!this.metricsCall || t !== this.currentInterval) {
                this.metricsCall?.cancel();
                this.currentInterval = t;
                let r = this.client.streamCoreMetrics({
                    report_interval: ui.msToDuration(t)
                });
                this.metricsCall = r;
                r.on("data", (i)=>{
                    this.dataWatchers.forEach((s)=>{
                        s.onMetricsUpdate(i);
                    });
                });
                r.on("error", (i)=>{
                    this.metricsCall = null;
                    if (i.code === hn.Status.UNIMPLEMENTED) {
                        this.orcaSupported = false;
                        return;
                    }
                    if (i.code === hn.Status.CANCELLED) {
                        return;
                    }
                    this.backoffTimer.runOnce();
                });
            }
        }
    }
    class jg extends Dg.BaseSubchannelWrapper {
        constructor(e, t, r){
            super(e);
            this.addDataWatcher(new Hg(t, r));
        }
        getWrappedSubchannel() {
            return this.child;
        }
    }
    Gg.OrcaOobMetricsSubchannelWrapper = jg;
    function lb(e) {
        return new Wg(e);
    }
});
const Ho = C(function(nm) {
    Object.defineProperty(nm, "__esModule", {
        value: true
    });
    nm.BaseServerInterceptingCall = nm.ServerInterceptingCall = nm.ResponderBuilder = nm.ServerListenerBuilder = undefined;
    nm.isInterceptingServerListener = fb;
    nm.getServerInterceptingCall = yb;
    const ur = ue();
    const j = k();
    const Ke = Le("http2");
    const vn = Qi();
    const yn = Le("zlib");
    const Xg = Po();
    const Sn = K();
    const Qg = Le("tls");
    const _n = pn();
    const Zg = "server_call";
    function Tr(e) {
        Sn.trace(j.LogVerbosity.DEBUG, Zg, e);
    }
    class em {
        constructor(){
            this.metadata = undefined;
            this.message = undefined;
            this.halfClose = undefined;
            this.cancel = undefined;
        }
        withOnReceiveMetadata(e) {
            this.metadata = e;
            return this;
        }
        withOnReceiveMessage(e) {
            this.message = e;
            return this;
        }
        withOnReceiveHalfClose(e) {
            this.halfClose = e;
            return this;
        }
        withOnCancel(e) {
            this.cancel = e;
            return this;
        }
        build() {
            return {
                onReceiveMetadata: this.metadata,
                onReceiveMessage: this.message,
                onReceiveHalfClose: this.halfClose,
                onCancel: this.cancel
            };
        }
    }
    nm.ServerListenerBuilder = em;
    function fb(e) {
        return e.onReceiveMetadata !== undefined && e.onReceiveMetadata.length === 1;
    }
    class tm {
        constructor(e, t){
            this.listener = e;
            this.nextListener = t;
            this.cancelled = false;
            this.processingMetadata = false;
            this.hasPendingMessage = false;
            this.pendingMessage = null;
            this.processingMessage = false;
            this.hasPendingHalfClose = false;
        }
        processPendingMessage() {
            if (this.hasPendingMessage) {
                this.nextListener.onReceiveMessage(this.pendingMessage);
                this.pendingMessage = null;
                this.hasPendingMessage = false;
            }
        }
        processPendingHalfClose() {
            if (this.hasPendingHalfClose) {
                this.nextListener.onReceiveHalfClose();
                this.hasPendingHalfClose = false;
            }
        }
        onReceiveMetadata(e) {
            if (this.cancelled) {
                return;
            }
            this.processingMetadata = true;
            this.listener.onReceiveMetadata(e, (t)=>{
                this.processingMetadata = false;
                if (this.cancelled) {
                    return;
                }
                this.nextListener.onReceiveMetadata(t);
                this.processPendingMessage();
                this.processPendingHalfClose();
            });
        }
        onReceiveMessage(e) {
            if (this.cancelled) {
                return;
            }
            this.processingMessage = true;
            this.listener.onReceiveMessage(e, (t)=>{
                this.processingMessage = false;
                if (this.cancelled) {
                    return;
                }
                if (this.processingMetadata) {
                    this.pendingMessage = t;
                    this.hasPendingMessage = true;
                } else {
                    this.nextListener.onReceiveMessage(t);
                    this.processPendingHalfClose();
                }
            });
        }
        onReceiveHalfClose() {
            if (this.cancelled) {
                return;
            }
            this.listener.onReceiveHalfClose(()=>{
                if (this.cancelled) {
                    return;
                }
                if (this.processingMetadata || this.processingMessage) {
                    this.hasPendingHalfClose = true;
                } else {
                    this.nextListener.onReceiveHalfClose();
                }
            });
        }
        onCancel() {
            this.cancelled = true;
            this.listener.onCancel();
            this.nextListener.onCancel();
        }
    }
    class rm {
        constructor(){
            this.start = undefined;
            this.metadata = undefined;
            this.message = undefined;
            this.status = undefined;
        }
        withStart(e) {
            this.start = e;
            return this;
        }
        withSendMetadata(e) {
            this.metadata = e;
            return this;
        }
        withSendMessage(e) {
            this.message = e;
            return this;
        }
        withSendStatus(e) {
            this.status = e;
            return this;
        }
        build() {
            return {
                start: this.start,
                sendMetadata: this.metadata,
                sendMessage: this.message,
                sendStatus: this.status
            };
        }
    }
    nm.ResponderBuilder = rm;
    const gn = {
        onReceiveMetadata: (e, t)=>{
            t(e);
        },
        onReceiveMessage: (e, t)=>{
            t(e);
        },
        onReceiveHalfClose: (e)=>{
            e();
        },
        onCancel: ()=>{}
    };
    const mn = {
        start: (e)=>{
            e();
        },
        sendMetadata: (e, t)=>{
            t(e);
        },
        sendMessage: (e, t)=>{
            t(e);
        },
        sendStatus: (e, t)=>{
            t(e);
        }
    };
    class im {
        constructor(e, t){
            this.nextCall = e;
            this.processingMetadata = false;
            this.sentMetadata = false;
            this.processingMessage = false;
            this.pendingMessage = null;
            this.pendingMessageCallback = null;
            this.pendingStatus = null;
            this.responder = {
                start: t?.start ?? mn.start,
                sendMetadata: t?.sendMetadata ?? mn.sendMetadata,
                sendMessage: t?.sendMessage ?? mn.sendMessage,
                sendStatus: t?.sendStatus ?? mn.sendStatus
            };
        }
        processPendingMessage() {
            if (this.pendingMessageCallback) {
                this.nextCall.sendMessage(this.pendingMessage, this.pendingMessageCallback);
                this.pendingMessage = null;
                this.pendingMessageCallback = null;
            }
        }
        processPendingStatus() {
            if (this.pendingStatus) {
                this.nextCall.sendStatus(this.pendingStatus);
                this.pendingStatus = null;
            }
        }
        start(e) {
            this.responder.start((t)=>{
                let a = {
                    onReceiveMetadata: t?.onReceiveMetadata ?? gn.onReceiveMetadata,
                    onReceiveMessage: t?.onReceiveMessage ?? gn.onReceiveMessage,
                    onReceiveHalfClose: t?.onReceiveHalfClose ?? gn.onReceiveHalfClose,
                    onCancel: t?.onCancel ?? gn.onCancel
                };
                let o = new tm(a, e);
                this.nextCall.start(o);
            });
        }
        sendMetadata(e) {
            this.processingMetadata = true;
            this.sentMetadata = true;
            this.responder.sendMetadata(e, (t)=>{
                this.processingMetadata = false;
                this.nextCall.sendMetadata(t);
                this.processPendingMessage();
                this.processPendingStatus();
            });
        }
        sendMessage(e, t) {
            this.processingMessage = true;
            if (!this.sentMetadata) {
                this.sendMetadata(new ur.Metadata);
            }
            this.responder.sendMessage(e, (r)=>{
                this.processingMessage = false;
                if (this.processingMetadata) {
                    this.pendingMessage = r;
                    this.pendingMessageCallback = t;
                } else {
                    this.nextCall.sendMessage(r, t);
                }
            });
        }
        sendStatus(e) {
            this.responder.sendStatus(e, (t)=>{
                if (this.processingMetadata || this.processingMessage) {
                    this.pendingStatus = t;
                } else {
                    this.nextCall.sendStatus(t);
                }
            });
        }
        startRead() {
            this.nextCall.startRead();
        }
        getPeer() {
            return this.nextCall.getPeer();
        }
        getDeadline() {
            return this.nextCall.getDeadline();
        }
        getHost() {
            return this.nextCall.getHost();
        }
        getAuthContext() {
            return this.nextCall.getAuthContext();
        }
        getConnectionInfo() {
            return this.nextCall.getConnectionInfo();
        }
        getMetricsRecorder() {
            return this.nextCall.getMetricsRecorder();
        }
    }
    nm.ServerInterceptingCall = im;
    const sm = "grpc-accept-encoding";
    const Bo = "grpc-encoding";
    const Yg = "grpc-message";
    const Kg = "grpc-status";
    const Uo = "grpc-timeout";
    const pb = /(\d{1,8})\s*([HMSmun])/;
    const gb = {
        H: 3600000,
        M: 60000,
        S: 1000,
        m: 1,
        u: 0.001,
        n: 0.000001
    };
    const mb = {
        [sm]: "identity,deflate,gzip",
        [Bo]: "identity"
    };
    const Jg = {
        [Ke.constants.HTTP2_HEADER_STATUS]: Ke.constants.HTTP_STATUS_OK,
        [Ke.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto"
    };
    const vb = {
        waitForTrailers: true
    };
    class zo {
        constructor(e, t, r, i, s){
            this.stream = e;
            this.callEventTracker = r;
            this.handler = i;
            this.listener = null;
            this.deadlineTimer = null;
            this.deadline = Infinity;
            this.maxSendMessageSize = j.DEFAULT_MAX_SEND_MESSAGE_LENGTH;
            this.maxReceiveMessageSize = j.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
            this.cancelled = false;
            this.metadataSent = false;
            this.wantTrailers = false;
            this.cancelNotified = false;
            this.incomingEncoding = "identity";
            this.readQueue = [];
            this.isReadPending = false;
            this.receivedHalfClose = false;
            this.streamEnded = false;
            this.metricsRecorder = new _n.PerRequestMetricRecorder;
            this.stream.once("close", ()=>{
                Tr(`Request to method ${this.handler?.path} stream closed with rstCode ${this.stream.rstCode}`);
                if (this.callEventTracker && !this.streamEnded) {
                    this.streamEnded = true;
                    this.callEventTracker.onStreamEnd(false);
                    this.callEventTracker.onCallEnd({
                        code: j.Status.CANCELLED,
                        details: "Stream closed before sending status",
                        metadata: null
                    });
                }
                this.notifyOnCancel();
            });
            this.stream.on("data", (d)=>{
                this.handleDataFrame(d);
            });
            this.stream.pause();
            this.stream.on("end", ()=>{
                this.handleEndEvent();
            });
            if ("grpc.max_send_message_length" in s) {
                this.maxSendMessageSize = s["grpc.max_send_message_length"];
            }
            if ("grpc.max_receive_message_length" in s) {
                this.maxReceiveMessageSize = s["grpc.max_receive_message_length"];
            }
            this.host = t[":authority"] ?? t.host;
            this.decoder = new Xg.StreamDecoder(this.maxReceiveMessageSize);
            let o = ur.Metadata.fromHttp2Headers(t);
            if (Sn.isTracerEnabled(Zg)) {
                Tr(`Request to ${this.handler.path} received headers ${JSON.stringify(o.toJSON())}`);
            }
            let l = o.get(Uo);
            if (l.length > 0) {
                this.handleTimeoutHeader(l[0]);
            }
            let c = o.get(Bo);
            if (c.length > 0) {
                this.incomingEncoding = c[0];
            }
            o.remove(Uo);
            o.remove(Bo);
            o.remove(sm);
            o.remove(Ke.constants.HTTP2_HEADER_ACCEPT_ENCODING);
            o.remove(Ke.constants.HTTP2_HEADER_TE);
            o.remove(Ke.constants.HTTP2_HEADER_CONTENT_TYPE);
            this.metadata = o;
            let u = e.session?.socket;
            this.connectionInfo = {
                localAddress: u?.localAddress,
                localPort: u?.localPort,
                remoteAddress: u?.remoteAddress,
                remotePort: u?.remotePort
            };
            this.shouldSendMetrics = !!s["grpc.server_call_metric_recording"];
        }
        handleTimeoutHeader(e) {
            let t = e.toString().match(pb);
            if (t === null) {
                let s = {
                    code: j.Status.INTERNAL,
                    details: `Invalid ${Uo} value "${e}"`,
                    metadata: null
                };
                process.nextTick(()=>{
                    this.sendStatus(s);
                });
                return;
            }
            let r = +t[1] * gb[t[2]] | 0;
            let i = new Date;
            this.deadline = i.setMilliseconds(i.getMilliseconds() + r);
            this.deadlineTimer = setTimeout(()=>{
                let s = {
                    code: j.Status.DEADLINE_EXCEEDED,
                    details: "Deadline exceeded",
                    metadata: null
                };
                this.sendStatus(s);
            }, r);
        }
        checkCancelled() {
            if (!this.cancelled && (this.stream.destroyed || this.stream.closed)) {
                this.notifyOnCancel();
                this.cancelled = true;
            }
            return this.cancelled;
        }
        notifyOnCancel() {
            if (this.cancelNotified) {
                return;
            }
            this.cancelNotified = true;
            this.cancelled = true;
            process.nextTick(()=>{
                this.listener?.onCancel();
            });
            if (this.deadlineTimer) {
                clearTimeout(this.deadlineTimer);
            }
            this.stream.resume();
        }
        maybeSendMetadata() {
            if (!this.metadataSent) {
                this.sendMetadata(new ur.Metadata);
            }
        }
        serializeMessage(e) {
            let t = this.handler.serialize(e);
            let t_byteLength = t.byteLength;
            let i = Buffer.allocUnsafe(t_byteLength + 5);
            i.writeUInt8(0, 0);
            i.writeUInt32BE(t_byteLength, 1);
            t.copy(i, 5);
            return i;
        }
        decompressMessage(e, t) {
            let r = e.subarray(5);
            if (t === "identity") {
                return r;
            } else if (t === "deflate" || t === "gzip") {
                let i;
                if (t === "deflate") {
                    i = yn.createInflate();
                } else {
                    i = yn.createGunzip();
                }
                return new Promise((resolve, reject)=>{
                    let a = 0;
                    let o = [];
                    i.on("error", (l)=>{
                        reject({
                            code: j.Status.INTERNAL,
                            details: "Failed to decompress message"
                        });
                    });
                    i.on("data", (l)=>{
                        o.push(l);
                        a += l.byteLength;
                        if (this.maxReceiveMessageSize !== -1 && a > this.maxReceiveMessageSize) {
                            i.destroy();
                            reject({
                                code: j.Status.RESOURCE_EXHAUSTED,
                                details: `Received message that decompresses to a size larger than ${this.maxReceiveMessageSize}`
                            });
                        }
                    });
                    i.on("end", ()=>{
                        resolve(Buffer.concat(o));
                    });
                    i.write(r);
                    i.end();
                });
            } else {
                return Promise.reject({
                    code: j.Status.UNIMPLEMENTED,
                    details: `Received message compressed with unsupported encoding "${t}"`
                });
            }
        }
        async decompressAndMaybePush(e) {
            if (e.type !== "COMPRESSED") {
                throw Error(`Invalid queue entry type: ${e.type}`);
            }
            let r = e.compressedMessage.readUInt8(0) === 1 ? this.incomingEncoding : "identity";
            let i;
            try {
                i = await this.decompressMessage(e.compressedMessage, r);
            } catch (error) {
                this.sendStatus(error);
                return;
            }
            try {
                e.parsedMessage = this.handler.deserialize(i);
            } catch (error) {
                this.sendStatus({
                    code: j.Status.INTERNAL,
                    details: `Error deserializing request: ${error.message}`
                });
                return;
            }
            e.type = "READABLE";
            this.maybePushNextMessage();
        }
        maybePushNextMessage() {
            if (this.listener && this.isReadPending && this.readQueue.length > 0 && this.readQueue[0].type !== "COMPRESSED") {
                this.isReadPending = false;
                let e = this.readQueue.shift();
                if (e.type === "READABLE") {
                    this.listener.onReceiveMessage(e.parsedMessage);
                } else {
                    this.listener.onReceiveHalfClose();
                }
            }
        }
        handleDataFrame(e) {
            if (this.checkCancelled()) {
                return;
            }
            Tr(`Request to ${this.handler.path} received data frame of size ${e.length}`);
            let r;
            try {
                r = this.decoder.write(e);
            } catch (error) {
                this.sendStatus({
                    code: j.Status.RESOURCE_EXHAUSTED,
                    details: error.message
                });
                return;
            }
            for (let compressedMessage of r){
                this.stream.pause();
                let s = {
                    type: "COMPRESSED",
                    compressedMessage,
                    parsedMessage: null
                };
                this.readQueue.push(s);
                this.decompressAndMaybePush(s);
                this.callEventTracker?.addMessageReceived();
            }
        }
        handleEndEvent() {
            this.readQueue.push({
                type: "HALF_CLOSE",
                compressedMessage: null,
                parsedMessage: null
            });
            this.receivedHalfClose = true;
            this.maybePushNextMessage();
        }
        start(e) {
            Tr(`Request to ${this.handler.path} start called`);
            if (this.checkCancelled()) {
                return;
            }
            this.listener = e;
            e.onReceiveMetadata(this.metadata);
        }
        sendMetadata(e) {
            if (this.checkCancelled()) {
                return;
            }
            if (this.metadataSent) {
                return;
            }
            this.metadataSent = true;
            let t = e ? e.toHttp2Headers() : null;
            let r = {
                ...Jg,
                ...mb,
                ...t
            };
            this.stream.respond(r, vb);
        }
        sendMessage(e, t) {
            if (this.checkCancelled()) {
                return;
            }
            let r;
            try {
                r = this.serializeMessage(e);
            } catch (error) {
                this.sendStatus({
                    code: j.Status.INTERNAL,
                    details: `Error serializing response: ${vn.getErrorMessage(error)}`,
                    metadata: null
                });
                return;
            }
            if (this.maxSendMessageSize !== -1 && r.length - 5 > this.maxSendMessageSize) {
                this.sendStatus({
                    code: j.Status.RESOURCE_EXHAUSTED,
                    details: `Sent message larger than max (${r.length} vs. ${this.maxSendMessageSize})`,
                    metadata: null
                });
                return;
            }
            this.maybeSendMetadata();
            Tr(`Request to ${this.handler.path} sent data frame of size ${r.length}`);
            this.stream.write(r, (i)=>{
                if (i) {
                    this.sendStatus({
                        code: j.Status.INTERNAL,
                        details: `Error writing message: ${vn.getErrorMessage(i)}`,
                        metadata: null
                    });
                    return;
                }
                this.callEventTracker?.addMessageSent();
                t();
            });
        }
        sendStatus(e) {
            if (this.checkCancelled()) {
                return;
            }
            Tr(`Request to method ${this.handler?.path} ended with status code: ${j.Status[e.code]} details: ${e.details}`);
            let s = e.metadata?.clone() ?? new ur.Metadata;
            if (this.shouldSendMetrics) {
                s.set(_n.GRPC_METRICS_HEADER, this.metricsRecorder.serialize());
            }
            if (this.metadataSent) {
                if (!this.wantTrailers) {
                    this.wantTrailers = true;
                    this.stream.once("wantTrailers", ()=>{
                        if (this.callEventTracker && !this.streamEnded) {
                            this.streamEnded = true;
                            this.callEventTracker.onStreamEnd(true);
                            this.callEventTracker.onCallEnd(e);
                        }
                        let n = {
                            [Kg]: e.code,
                            [Yg]: encodeURI(e.details),
                            ...s.toHttp2Headers()
                        };
                        this.stream.sendTrailers(n);
                        this.notifyOnCancel();
                    });
                    this.stream.end();
                } else {
                    this.notifyOnCancel();
                }
            } else {
                if (this.callEventTracker && !this.streamEnded) {
                    this.streamEnded = true;
                    this.callEventTracker.onStreamEnd(true);
                    this.callEventTracker.onCallEnd(e);
                }
                let n = {
                    [Kg]: e.code,
                    [Yg]: encodeURI(e.details),
                    ...Jg,
                    ...s.toHttp2Headers()
                };
                this.stream.respond(n, {
                    endStream: true
                });
                this.notifyOnCancel();
            }
        }
        startRead() {
            Tr(`Request to ${this.handler.path} startRead called`);
            if (this.checkCancelled()) {
                return;
            }
            this.isReadPending = true;
            if (this.readQueue.length === 0) {
                if (!this.receivedHalfClose) {
                    this.stream.resume();
                }
            } else {
                this.maybePushNextMessage();
            }
        }
        getPeer() {
            let t = this.stream.session?.socket;
            if (t?.remoteAddress) {
                if (t.remotePort) {
                    return `${t.remoteAddress}:${t.remotePort}`;
                } else {
                    return t.remoteAddress;
                }
            } else {
                return "unknown";
            }
        }
        getDeadline() {
            return this.deadline;
        }
        getHost() {
            return this.host;
        }
        getAuthContext() {
            if (this.stream.session?.socket instanceof Qg.TLSSocket) {
                let t = this.stream.session.socket.getPeerCertificate();
                return {
                    transportSecurityType: "ssl",
                    sslPeerCertificate: t.raw ? t : undefined
                };
            } else {
                return {};
            }
        }
        getConnectionInfo() {
            return this.connectionInfo;
        }
        getMetricsRecorder() {
            return this.metricsRecorder;
        }
    }
    nm.BaseServerInterceptingCall = zo;
    function yb(e, t, r, i, s, n) {
        let a = {
            path: s.path,
            requestStream: s.type === "clientStream" || s.type === "bidi",
            responseStream: s.type === "serverStream" || s.type === "bidi",
            requestDeserialize: s.deserialize,
            responseSerialize: s.serialize
        };
        let o = new zo(t, r, i, s, n);
        return e.reduce((acc, item)=>item(a, acc), o);
    }
});
const hm = C(function(dr) {
    const Rb = dr && dr.__runInitializers || function(e, t, r) {
        const i = arguments.length > 2;
        for(let s = 0; s < t.length; s++){
            r = i ? t[s].call(e, r) : t[s].call(e);
        }
        if (i) {
            return r;
        }
    };
    const bb = dr && dr.__esDecorate || ((e, t, r, i, s, n)=>{
        function a(T) {
            if (T !== undefined && typeof T !== "function") {
                throw TypeError("Function expected");
            }
            return T;
        }
        const i_kind = i.kind;
        const l = i_kind === "getter" ? "get" : i_kind === "setter" ? "set" : "value";
        const c = !t && e ? i.static ? e : e.prototype : null;
        const u = t || (c ? Object.getOwnPropertyDescriptor(c, i.name) : {});
        let d;
        let h = false;
        for(let m = r.length - 1; m >= 0; m--){
            const f = {};
            for(var y in i){
                f[y] = y === "access" ? {} : i[y];
            }
            for(var y in i.access){
                f.access[y] = i.access[y];
            }
            f.addInitializer = function(T) {
                if (h) {
                    throw TypeError("Cannot add initializers after decoration has completed");
                }
                n.push(a(T || null));
            };
            const E = r[m](i_kind === "accessor" ? {
                get: u.get,
                set: u.set
            } : u[l], f);
            if (i_kind === "accessor") {
                if (E === undefined) {
                    continue;
                }
                if (E === null || typeof E !== "object") {
                    throw TypeError("Object expected");
                }
                if (d = a(E.get)) {
                    u.get = d;
                }
                if (d = a(E.set)) {
                    u.set = d;
                }
                if (d = a(E.init)) {
                    s.unshift(d);
                }
            } else if (d = a(E)) {
                if (i_kind === "field") {
                    s.unshift(d);
                } else {
                    u[l] = d;
                }
            }
        }
        if (c) {
            Object.defineProperty(c, i.name, u);
        }
        h = true;
    });
    Object.defineProperty(dr, "__esModule", {
        value: true
    });
    dr.Server = undefined;
    const Y = Le("http2");
    const dm = Le("util");
    const N = k();
    const Xe = wg();
    const hi = dn();
    const Cn = rt();
    const Je = K();
    const Re = Pe();
    const re = we();
    const L = Zt();
    const En = Ho();
    const di = 2147483647;
    const Wo = 2147483647;
    const Ob = 20000;
    const om = 2147483647;
    const { HTTP2_HEADER_PATH } = Y.constants;
    const wb = "server";
    const cm = Buffer.from("max_age");
    function um(e) {
        Je.trace(N.LogVerbosity.DEBUG, "server_call", e);
    }
    function Ab() {}
    function Pb(e) {
        return function(t, r) {
            return dm.deprecate(t, e);
        };
    }
    function jo(e) {
        return {
            code: N.Status.UNIMPLEMENTED,
            details: `The server does not implement the method ${e}`
        };
    }
    function Nb(e, t) {
        let r = jo(t);
        switch(e){
            case "unary":
                return (i, s)=>{
                    s(r, null);
                };
            case "clientStream":
                return (i, s)=>{
                    s(r, null);
                };
            case "serverStream":
                return (i)=>{
                    i.emit("error", r);
                };
            case "bidi":
                return (i)=>{
                    i.emit("error", r);
                };
            default:
                throw Error(`Invalid handlerType ${e}`);
        }
    }
    const Mb = (()=>{
        var e;
        let t = [];
        let r;
        e = class {
            constructor(s){
                this.boundPorts = (Rb(this, t), new Map);
                this.http2Servers = new Map;
                this.sessionIdleTimeouts = new Map;
                this.handlers = new Map;
                this.sessions = new Map;
                this.started = false;
                this.shutdown = false;
                this.serverAddressString = "null";
                this.channelzEnabled = true;
                this.options = s ?? {};
                if (this.options["grpc.enable_channelz"] === 0) {
                    this.channelzEnabled = false;
                    this.channelzTrace = new L.ChannelzTraceStub;
                    this.callTracker = new L.ChannelzCallTrackerStub;
                    this.listenerChildrenTracker = new L.ChannelzChildrenTrackerStub;
                    this.sessionChildrenTracker = new L.ChannelzChildrenTrackerStub;
                } else {
                    this.channelzTrace = new L.ChannelzTrace;
                    this.callTracker = new L.ChannelzCallTracker;
                    this.listenerChildrenTracker = new L.ChannelzChildrenTracker;
                    this.sessionChildrenTracker = new L.ChannelzChildrenTracker;
                }
                this.channelzRef = L.registerChannelzServer("server", ()=>this.getChannelzInfo(), this.channelzEnabled);
                this.channelzTrace.addTrace("CT_INFO", "Server created");
                this.maxConnectionAgeMs = this.options["grpc.max_connection_age_ms"] ?? di;
                this.maxConnectionAgeGraceMs = this.options["grpc.max_connection_age_grace_ms"] ?? di;
                this.keepaliveTimeMs = this.options["grpc.keepalive_time_ms"] ?? Wo;
                this.keepaliveTimeoutMs = this.options["grpc.keepalive_timeout_ms"] ?? Ob;
                this.sessionIdleTimeout = this.options["grpc.max_connection_idle_ms"] ?? om;
                this.commonServerOptions = {
                    maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER
                };
                if ("grpc-node.max_session_memory" in this.options) {
                    this.commonServerOptions.maxSessionMemory = this.options["grpc-node.max_session_memory"];
                } else {
                    this.commonServerOptions.maxSessionMemory = Number.MAX_SAFE_INTEGER;
                }
                if ("grpc.max_concurrent_streams" in this.options) {
                    this.commonServerOptions.settings = {
                        maxConcurrentStreams: this.options["grpc.max_concurrent_streams"]
                    };
                }
                this.interceptors = this.options.interceptors ?? [];
                this.trace("Server constructed");
            }
            getChannelzInfo() {
                return {
                    trace: this.channelzTrace,
                    callTracker: this.callTracker,
                    listenerChildren: this.listenerChildrenTracker.getChildLists(),
                    sessionChildren: this.sessionChildrenTracker.getChildLists()
                };
            }
            getChannelzSessionInfo(s) {
                let l = this.sessions.get(s);
                let s_socket = s.socket;
                let u = s_socket.remoteAddress ? Re.stringToSubchannelAddress(s_socket.remoteAddress, s_socket.remotePort) : null;
                let d = s_socket.localAddress ? Re.stringToSubchannelAddress(s_socket.localAddress, s_socket.localPort) : null;
                let h;
                if (s.encrypted) {
                    let f = s_socket;
                    let y = f.getCipher();
                    let E = f.getCertificate();
                    let T = f.getPeerCertificate();
                    h = {
                        cipherSuiteStandardName: y.standardName ?? null,
                        cipherSuiteOtherName: y.standardName ? null : y.name,
                        localCertificate: E && "raw" in E ? E.raw : null,
                        remoteCertificate: T && "raw" in T ? T.raw : null
                    };
                } else {
                    h = null;
                }
                return {
                    remoteAddress: u,
                    localAddress: d,
                    security: h,
                    remoteName: null,
                    streamsStarted: l.streamTracker.callsStarted,
                    streamsSucceeded: l.streamTracker.callsSucceeded,
                    streamsFailed: l.streamTracker.callsFailed,
                    messagesSent: l.messagesSent,
                    messagesReceived: l.messagesReceived,
                    keepAlivesSent: l.keepAlivesSent,
                    lastLocalStreamCreatedTimestamp: null,
                    lastRemoteStreamCreatedTimestamp: l.streamTracker.lastCallStartedTimestamp,
                    lastMessageSentTimestamp: l.lastMessageSentTimestamp,
                    lastMessageReceivedTimestamp: l.lastMessageReceivedTimestamp,
                    localFlowControlWindow: s.state.localWindowSize ?? null,
                    remoteFlowControlWindow: s.state.remoteWindowSize ?? null
                };
            }
            trace(s) {
                Je.trace(N.LogVerbosity.DEBUG, wb, `(${this.channelzRef.id}) ${s}`);
            }
            keepaliveTrace(s) {
                Je.trace(N.LogVerbosity.DEBUG, "keepalive", `(${this.channelzRef.id}) ${s}`);
            }
            addProtoService() {
                throw Error("Not implemented. Use addService() instead");
            }
            addService(s, n) {
                if (s === null || typeof s !== "object" || n === null || typeof n !== "object") {
                    throw Error("addService() requires two objects as arguments");
                }
                let a = Object.keys(s);
                if (a.length === 0) {
                    throw Error("Cannot add an empty service to a server");
                }
                a.forEach((o)=>{
                    let l = s[o];
                    let c;
                    if (l.requestStream) {
                        if (l.responseStream) {
                            c = "bidi";
                        } else {
                            c = "clientStream";
                        }
                    } else if (l.responseStream) {
                        c = "serverStream";
                    } else {
                        c = "unary";
                    }
                    let u = n[o];
                    let d;
                    if (u === undefined && typeof l.originalName === "string") {
                        u = n[l.originalName];
                    }
                    if (u !== undefined) {
                        d = u.bind(n);
                    } else {
                        d = Nb(c, o);
                    }
                    if (this.register(l.path, d, l.responseSerialize, l.requestDeserialize, c) === false) {
                        throw Error(`Method handler for ${l.path} already provided.`);
                    }
                });
            }
            removeService(s) {
                if (s === null || typeof s !== "object") {
                    throw Error("removeService() requires object as argument");
                }
                Object.keys(s).forEach((a)=>{
                    let o = s[a];
                    this.unregister(o.path);
                });
            }
            bind(s, n) {
                throw Error("Not implemented. Use bindAsync() instead");
            }
            experimentalRegisterListenerToChannelz(s) {
                return L.registerChannelzSocket(Re.subchannelAddressToString(s), ()=>({
                        localAddress: s,
                        remoteAddress: null,
                        security: null,
                        remoteName: null,
                        streamsStarted: 0,
                        streamsSucceeded: 0,
                        streamsFailed: 0,
                        messagesSent: 0,
                        messagesReceived: 0,
                        keepAlivesSent: 0,
                        lastLocalStreamCreatedTimestamp: null,
                        lastRemoteStreamCreatedTimestamp: null,
                        lastMessageSentTimestamp: null,
                        lastMessageReceivedTimestamp: null,
                        localFlowControlWindow: null,
                        remoteFlowControlWindow: null
                    }), this.channelzEnabled);
            }
            experimentalUnregisterListenerFromChannelz(s) {
                L.unregisterChannelzRef(s);
            }
            createHttp2Server(s) {
                let n;
                if (s._isSecure()) {
                    let a = s._getConstructorOptions();
                    let o = s._getSecureContextOptions();
                    let l = {
                        ...this.commonServerOptions,
                        ...a,
                        ...o,
                        enableTrace: this.options["grpc-node.tls_enable_trace"] === 1
                    };
                    let c = o !== null;
                    this.trace(`Initial credentials valid: ${c}`);
                    n = Y.createSecureServer(l);
                    n.prependListener("connection", (d)=>{
                        if (!c) {
                            this.trace(`Dropped connection from ${JSON.stringify(d.address())} due to unloaded credentials`);
                            d.destroy();
                        }
                    });
                    n.on("secureConnection", (d)=>{
                        d.on("error", (h)=>{
                            this.trace(`An incoming TLS connection closed with error: ${h.message}`);
                        });
                    });
                    let u = (d)=>{
                        if (d) {
                            let h = n;
                            try {
                                h.setSecureContext(d);
                            } catch (error) {
                                Je.log(N.LogVerbosity.ERROR, `Failed to set secure context with error ${error.message}`);
                                d = null;
                            }
                        }
                        c = d !== null;
                        this.trace(`Post-update credentials valid: ${c}`);
                    };
                    s._addWatcher(u);
                    n.on("close", ()=>{
                        s._removeWatcher(u);
                    });
                } else {
                    n = Y.createServer(this.commonServerOptions);
                }
                n.setTimeout(0, Ab);
                this._setupHandlers(n, s._getInterceptors());
                return n;
            }
            bindOneAddress(s, n) {
                this.trace(`Attempting to bind ${Re.subchannelAddressToString(s)}`);
                let a = this.createHttp2Server(n.credentials);
                return new Promise((resolve, reject)=>{
                    let c = (u)=>{
                        this.trace(`Failed to bind ${Re.subchannelAddressToString(s)} with error ${u.message}`);
                        resolve({
                            port: "port" in s ? s.port : 1,
                            error: u.message
                        });
                    };
                    a.once("error", c);
                    a.listen(s, ()=>{
                        let u = a.address();
                        let d;
                        if (typeof u === "string") {
                            d = {
                                path: u
                            };
                        } else {
                            d = {
                                host: u.address,
                                port: u.port
                            };
                        }
                        let h = this.experimentalRegisterListenerToChannelz(d);
                        this.listenerChildrenTracker.refChild(h);
                        this.http2Servers.set(a, {
                            channelzRef: h,
                            sessions: new Set,
                            ownsChannelzRef: true
                        });
                        n.listeningServers.add(a);
                        this.trace(`Successfully bound ${Re.subchannelAddressToString(d)}`);
                        resolve({
                            port: "port" in d ? d.port : 1
                        });
                        a.removeListener("error", c);
                    });
                });
            }
            async bindManyPorts(s, n) {
                if (s.length === 0) {
                    return {
                        count: 0,
                        port: 0,
                        errors: []
                    };
                }
                if (Re.isTcpSubchannelAddress(s[0]) && s[0].port === 0) {
                    let a = await this.bindOneAddress(s[0], n);
                    if (a.error) {
                        let o = await this.bindManyPorts(s.slice(1), n);
                        return {
                            ...o,
                            errors: [
                                a.error,
                                ...o.errors
                            ]
                        };
                    } else {
                        let o = s.slice(1).map((u)=>{
                            if (Re.isTcpSubchannelAddress(u)) {
                                return {
                                    host: u.host,
                                    port: a.port
                                };
                            }
                            return u;
                        });
                        let l = await Promise.all(o.map((u)=>this.bindOneAddress(u, n)));
                        let c = [
                            a,
                            ...l
                        ];
                        return {
                            count: c.filter((u)=>u.error === undefined).length,
                            port: a.port,
                            errors: c.filter((u)=>u.error).map((u)=>u.error)
                        };
                    }
                } else {
                    let a = await Promise.all(s.map((o)=>this.bindOneAddress(o, n)));
                    return {
                        count: a.filter((o)=>o.error === undefined).length,
                        port: a[0].port,
                        errors: a.filter((o)=>o.error).map((o)=>o.error)
                    };
                }
            }
            async bindAddressList(s, n) {
                let a = await this.bindManyPorts(s, n);
                if (a.count > 0) {
                    if (a.count < s.length) {
                        Je.log(N.LogVerbosity.INFO, `WARNING Only ${a.count} addresses added out of total ${s.length} resolved`);
                    }
                    return a.port;
                } else {
                    let o = `No address added out of total ${s.length} resolved`;
                    Je.log(N.LogVerbosity.ERROR, o);
                    throw Error(`${o} errors: [${a.errors.join(",")}]`);
                }
            }
            resolvePort(s) {
                return new Promise((resolve, reject)=>{
                    let o = false;
                    Cn.createResolver(s, (u, d, h, m)=>{
                        if (o) {
                            return true;
                        }
                        o = true;
                        if (!u.ok) {
                            reject(Error(u.error.details));
                            return true;
                        }
                        let f = [].concat(...u.value.map((y)=>y.addresses));
                        if (f.length === 0) {
                            reject(Error(`No addresses resolved for port ${s}`));
                            return true;
                        }
                        resolve(f);
                        return true;
                    }, this.options).updateResolution();
                });
            }
            async bindPort(s, n) {
                let a = await this.resolvePort(s);
                if (n.cancelled) {
                    this.completeUnbind(n);
                    throw Error("bindAsync operation cancelled by unbind call");
                }
                let o = await this.bindAddressList(a, n);
                if (n.cancelled) {
                    this.completeUnbind(n);
                    throw Error("bindAsync operation cancelled by unbind call");
                }
                return o;
            }
            normalizePort(s) {
                let n = re.parseUri(s);
                if (n === null) {
                    throw Error(`Could not parse port "${s}"`);
                }
                let a = Cn.mapUriDefaultScheme(n);
                if (a === null) {
                    throw Error(`Could not get a default scheme for port "${s}"`);
                }
                return a;
            }
            bindAsync(s, credentials, a) {
                if (this.shutdown) {
                    throw Error("bindAsync called after shutdown");
                }
                if (typeof s !== "string") {
                    throw TypeError("port must be a string");
                }
                if (credentials === null || !(credentials instanceof hi.ServerCredentials)) {
                    throw TypeError("creds must be a ServerCredentials object");
                }
                if (typeof a !== "function") {
                    throw TypeError("callback must be a function");
                }
                this.trace(`bindAsync port=${s}`);
                let originalUri = this.normalizePort(s);
                let l = (h, m)=>{
                    process.nextTick(()=>a(h, m));
                };
                let c = this.boundPorts.get(re.uriToString(originalUri));
                if (c) {
                    if (!credentials._equals(c.credentials)) {
                        l(Error(`${s} already bound with incompatible credentials`), 0);
                        return;
                    }
                    c.cancelled = false;
                    if (c.completionPromise) {
                        c.completionPromise.then((h)=>a(null, h), (h)=>a(h, 0));
                    } else {
                        l(null, c.portNumber);
                    }
                    return;
                }
                c = {
                    mapKey: re.uriToString(originalUri),
                    originalUri,
                    completionPromise: null,
                    cancelled: false,
                    portNumber: 0,
                    credentials,
                    listeningServers: new Set
                };
                let u = re.splitHostPort(originalUri.path);
                let d = this.bindPort(originalUri, c);
                c.completionPromise = d;
                if (u?.port === 0) {
                    d.then((port)=>{
                        let m = {
                            scheme: originalUri.scheme,
                            authority: originalUri.authority,
                            path: re.combineHostPort({
                                host: u.host,
                                port
                            })
                        };
                        c.mapKey = re.uriToString(m);
                        c.completionPromise = null;
                        c.portNumber = port;
                        this.boundPorts.set(c.mapKey, c);
                        a(null, port);
                    }, (h)=>{
                        a(h, 0);
                    });
                } else {
                    this.boundPorts.set(c.mapKey, c);
                    d.then((h)=>{
                        c.completionPromise = null;
                        c.portNumber = h;
                        a(null, h);
                    }, (h)=>{
                        a(h, 0);
                    });
                }
            }
            registerInjectorToChannelz() {
                return L.registerChannelzSocket("injector", ()=>({
                        localAddress: null,
                        remoteAddress: null,
                        security: null,
                        remoteName: null,
                        streamsStarted: 0,
                        streamsSucceeded: 0,
                        streamsFailed: 0,
                        messagesSent: 0,
                        messagesReceived: 0,
                        keepAlivesSent: 0,
                        lastLocalStreamCreatedTimestamp: null,
                        lastRemoteStreamCreatedTimestamp: null,
                        lastMessageSentTimestamp: null,
                        lastMessageReceivedTimestamp: null,
                        localFlowControlWindow: null,
                        remoteFlowControlWindow: null
                    }), this.channelzEnabled);
            }
            experimentalCreateConnectionInjectorWithChannelzRef(s, n, ownsChannelzRef = false) {
                if (s === null || !(s instanceof hi.ServerCredentials)) {
                    throw TypeError("creds must be a ServerCredentials object");
                }
                if (this.channelzEnabled) {
                    this.listenerChildrenTracker.refChild(n);
                }
                let o = this.createHttp2Server(s);
                let sessions = new Set;
                this.http2Servers.set(o, {
                    channelzRef: n,
                    sessions,
                    ownsChannelzRef
                });
                return {
                    injectConnection: (c)=>{
                        o.emit("connection", c);
                    },
                    drain: (c)=>{
                        for (let h of sessions){
                            this.closeSession(h);
                        }
                        setTimeout(()=>{
                            for (let h of sessions){
                                h.destroy(Y.constants.NGHTTP2_CANCEL);
                            }
                        }, c).unref?.();
                    },
                    destroy: ()=>{
                        this.closeServer(o);
                        for (let c of sessions){
                            this.closeSession(c);
                        }
                    }
                };
            }
            createConnectionInjector(s) {
                if (s === null || !(s instanceof hi.ServerCredentials)) {
                    throw TypeError("creds must be a ServerCredentials object");
                }
                let n = this.registerInjectorToChannelz();
                return this.experimentalCreateConnectionInjectorWithChannelzRef(s, n, true);
            }
            closeServer(s, n) {
                this.trace(`Closing server with address ${JSON.stringify(s.address())}`);
                let a = this.http2Servers.get(s);
                s.close(()=>{
                    if (a && a.ownsChannelzRef) {
                        this.listenerChildrenTracker.unrefChild(a.channelzRef);
                        L.unregisterChannelzRef(a.channelzRef);
                    }
                    this.http2Servers.delete(s);
                    n?.();
                });
            }
            closeSession(s, n) {
                this.trace(`Closing session initiated by ${s.socket?.remoteAddress}`);
                let o = this.sessions.get(s);
                let l = ()=>{
                    if (o) {
                        this.sessionChildrenTracker.unrefChild(o.ref);
                        L.unregisterChannelzRef(o.ref);
                    }
                    n?.();
                };
                if (s.closed) {
                    queueMicrotask(l);
                } else {
                    s.close(l);
                }
            }
            completeUnbind(s) {
                for (let n of s.listeningServers){
                    let a = this.http2Servers.get(n);
                    this.closeServer(n, ()=>{
                        s.listeningServers.delete(n);
                    });
                    if (a) {
                        for (let o of a.sessions){
                            this.closeSession(o);
                        }
                    }
                }
                this.boundPorts.delete(s.mapKey);
            }
            unbind(s) {
                this.trace(`unbind port=${s}`);
                let n = this.normalizePort(s);
                let a = re.splitHostPort(n.path);
                if (a?.port === 0) {
                    throw Error("Cannot unbind port 0");
                }
                let o = this.boundPorts.get(re.uriToString(n));
                if (o) {
                    this.trace(`unbinding ${o.mapKey} originally bound as ${re.uriToString(o.originalUri)}`);
                    if (o.completionPromise) {
                        o.cancelled = true;
                    } else {
                        this.completeUnbind(o);
                    }
                }
            }
            drain(s, n) {
                this.trace(`drain port=${s} graceTimeMs=${n}`);
                let l = this.normalizePort(s);
                let c = re.splitHostPort(l.path);
                if (c?.port === 0) {
                    throw Error("Cannot drain port 0");
                }
                let u = this.boundPorts.get(re.uriToString(l));
                if (!u) {
                    return;
                }
                let d = new Set;
                for (let h of u.listeningServers){
                    let m = this.http2Servers.get(h);
                    if (m) {
                        for (let f of m.sessions){
                            d.add(f);
                            this.closeSession(f, ()=>{
                                d.delete(f);
                            });
                        }
                    }
                }
                setTimeout(()=>{
                    for (let h of d){
                        h.destroy(Y.constants.NGHTTP2_CANCEL);
                    }
                }, n).unref?.();
            }
            forceShutdown() {
                for (let s of this.boundPorts.values()){
                    s.cancelled = true;
                }
                this.boundPorts.clear();
                for (let s of this.http2Servers.keys()){
                    this.closeServer(s);
                }
                this.sessions.forEach((s, n)=>{
                    this.closeSession(n);
                    n.destroy(Y.constants.NGHTTP2_CANCEL);
                });
                this.sessions.clear();
                L.unregisterChannelzRef(this.channelzRef);
                this.shutdown = true;
            }
            register(s, func, serialize, deserialize, l) {
                if (this.handlers.has(s)) {
                    return false;
                }
                this.handlers.set(s, {
                    func,
                    serialize,
                    deserialize,
                    type: l,
                    path: s
                });
                return true;
            }
            unregister(s) {
                return this.handlers.delete(s);
            }
            start() {
                if (this.http2Servers.size === 0 || [
                    ...this.http2Servers.keys()
                ].every((s)=>!s.listening)) {
                    throw Error("server must be bound in order to start");
                }
                if (this.started === true) {
                    throw Error("server is already started");
                }
                this.started = true;
            }
            tryShutdown(s) {
                let a = (c)=>{
                    L.unregisterChannelzRef(this.channelzRef);
                    s(c);
                };
                let o = 0;
                function l() {
                    o--;
                    if (o === 0) {
                        a();
                    }
                }
                this.shutdown = true;
                for (let [c, u] of this.http2Servers.entries()){
                    o++;
                    let d = u.channelzRef.name;
                    this.trace(`Waiting for server ${d} to close`);
                    this.closeServer(c, ()=>{
                        this.trace(`Server ${d} finished closing`);
                        l();
                    });
                    for (let h of u.sessions.keys()){
                        o++;
                        let m = h.socket?.remoteAddress;
                        this.trace(`Waiting for session ${m} to close`);
                        this.closeSession(h, ()=>{
                            this.trace(`Session ${m} finished closing`);
                            l();
                        });
                    }
                }
                if (o === 0) {
                    a();
                }
            }
            addHttp2Port() {
                throw Error("Not yet implemented");
            }
            getChannelzRef() {
                return this.channelzRef;
            }
            _verifyContentType(s, n) {
                let a = n[Y.constants.HTTP2_HEADER_CONTENT_TYPE];
                if (typeof a !== "string" || !a.startsWith("application/grpc")) {
                    s.respond({
                        [Y.constants.HTTP2_HEADER_STATUS]: Y.constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE
                    }, {
                        endStream: true
                    });
                    return false;
                }
                return true;
            }
            _retrieveHandler(s) {
                um(`Received call to method ${s} at address ${this.serverAddressString}`);
                let n = this.handlers.get(s);
                if (n === undefined) {
                    um(`No handler registered for method ${s}. Sending UNIMPLEMENTED status.`);
                    return null;
                }
                return n;
            }
            _respondWithError(s, n, a = null) {
                let c = {
                    "grpc-status": s.code ?? N.Status.INTERNAL,
                    "grpc-message": s.details,
                    [Y.constants.HTTP2_HEADER_STATUS]: Y.constants.HTTP_STATUS_OK,
                    [Y.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto",
                    ...s.metadata?.toHttp2Headers()
                };
                n.respond(c, {
                    endStream: true
                });
                this.callTracker.addCallFailed();
                if (!(a === null || a === undefined)) {
                    a.streamTracker.addCallFailed();
                }
            }
            _channelzHandler(s, n, a) {
                n.once("error", (h)=>{});
                this.onStreamOpened(n);
                let o = this.sessions.get(n.session);
                this.callTracker.addCallStarted();
                if (!(o === null || o === undefined)) {
                    o.streamTracker.addCallStarted();
                }
                if (!this._verifyContentType(n, a)) {
                    this.callTracker.addCallFailed();
                    if (!(o === null || o === undefined)) {
                        o.streamTracker.addCallFailed();
                    }
                    return;
                }
                let l = a[HTTP2_HEADER_PATH];
                let c = this._retrieveHandler(l);
                if (!c) {
                    this._respondWithError(jo(l), n, o);
                    return;
                }
                let u = {
                    addMessageSent: ()=>{
                        if (o) {
                            o.messagesSent += 1;
                            o.lastMessageSentTimestamp = new Date;
                        }
                    },
                    addMessageReceived: ()=>{
                        if (o) {
                            o.messagesReceived += 1;
                            o.lastMessageReceivedTimestamp = new Date;
                        }
                    },
                    onCallEnd: (h)=>{
                        if (h.code === N.Status.OK) {
                            this.callTracker.addCallSucceeded();
                        } else {
                            this.callTracker.addCallFailed();
                        }
                    },
                    onStreamEnd: (h)=>{
                        if (o) {
                            if (h) {
                                o.streamTracker.addCallSucceeded();
                            } else {
                                o.streamTracker.addCallFailed();
                            }
                        }
                    }
                };
                let d = En.getServerInterceptingCall([
                    ...s,
                    ...this.interceptors
                ], n, a, u, c, this.options);
                if (!this._runHandlerForCall(d, c)) {
                    this.callTracker.addCallFailed();
                    if (!(o === null || o === undefined)) {
                        o.streamTracker.addCallFailed();
                    }
                    d.sendStatus({
                        code: N.Status.INTERNAL,
                        details: `Unknown handler type: ${c.type}`
                    });
                }
            }
            _streamHandler(s, n, a) {
                n.once("error", (u)=>{});
                this.onStreamOpened(n);
                if (this._verifyContentType(n, a) !== true) {
                    return;
                }
                let o = a[HTTP2_HEADER_PATH];
                let l = this._retrieveHandler(o);
                if (!l) {
                    this._respondWithError(jo(o), n, null);
                    return;
                }
                let c = En.getServerInterceptingCall([
                    ...s,
                    ...this.interceptors
                ], n, a, null, l, this.options);
                if (!this._runHandlerForCall(c, l)) {
                    c.sendStatus({
                        code: N.Status.INTERNAL,
                        details: `Unknown handler type: ${l.type}`
                    });
                }
            }
            _runHandlerForCall(s, n) {
                let { type } = n;
                if (type === "unary") {
                    Ib(s, n);
                } else if (type === "clientStream") {
                    xb(s, n);
                } else if (type === "serverStream") {
                    kb(s, n);
                } else if (type === "bidi") {
                    Db(s, n);
                } else {
                    return false;
                }
                return true;
            }
            _setupHandlers(s, n) {
                if (s === null) {
                    return;
                }
                let a = s.address();
                let o = "null";
                if (a) {
                    if (typeof a === "string") {
                        o = a;
                    } else {
                        o = `${a.address}:${a.port}`;
                    }
                }
                this.serverAddressString = o;
                let l = this.channelzEnabled ? this._channelzHandler : this._streamHandler;
                let c = this.channelzEnabled ? this._channelzSessionHandler(s) : this._sessionHandler(s);
                s.on("stream", l.bind(this, n));
                s.on("session", c);
            }
            _sessionHandler(s) {
                return (n)=>{
                    this.http2Servers.get(s)?.sessions.add(n);
                    let l = null;
                    let c = null;
                    let u = null;
                    let d = false;
                    let h = this.enableIdleTimeout(n);
                    if (this.maxConnectionAgeMs !== di) {
                        let T = this.maxConnectionAgeMs / 10;
                        let P = Math.random() * T * 2 - T;
                        l = setTimeout(()=>{
                            d = true;
                            this.trace(`Connection dropped by max connection age: ${n.socket?.remoteAddress}`);
                            try {
                                n.goaway(Y.constants.NGHTTP2_NO_ERROR, 2147483647, cm);
                            } catch (U) {
                                n.destroy();
                                return;
                            }
                            n.close();
                            if (this.maxConnectionAgeGraceMs !== di) {
                                c = setTimeout(()=>{
                                    n.destroy();
                                }, this.maxConnectionAgeGraceMs);
                                c.unref?.();
                            }
                        }, this.maxConnectionAgeMs + P);
                        l.unref?.();
                    }
                    let m = ()=>{
                        if (u) {
                            clearTimeout(u);
                            u = null;
                        }
                    };
                    let f = ()=>!n.destroyed && this.keepaliveTimeMs < Wo && this.keepaliveTimeMs > 0;
                    let y;
                    let E = ()=>{
                        if (!f()) {
                            return;
                        }
                        this.keepaliveTrace(`Starting keepalive timer for ${this.keepaliveTimeMs}ms`);
                        u = setTimeout(()=>{
                            m();
                            y();
                        }, this.keepaliveTimeMs);
                        u.unref?.();
                    };
                    y = ()=>{
                        if (!f()) {
                            return;
                        }
                        this.keepaliveTrace(`Sending ping with timeout ${this.keepaliveTimeoutMs}ms`);
                        let P = "";
                        try {
                            if (!n.ping((v, U, w)=>{
                                m();
                                if (v) {
                                    this.keepaliveTrace(`Ping failed with error: ${v.message}`);
                                    d = true;
                                    n.destroy();
                                } else {
                                    this.keepaliveTrace("Received ping response");
                                    E();
                                }
                            })) {
                                P = "Ping returned false";
                            }
                        } catch (error) {
                            P = (error instanceof Error ? error.message : "") || "Unknown error";
                        }
                        if (P) {
                            this.keepaliveTrace(`Ping send failed: ${P}`);
                            this.trace(`Connection dropped due to ping send error: ${P}`);
                            d = true;
                            n.destroy();
                            return;
                        }
                        u = setTimeout(()=>{
                            m();
                            this.keepaliveTrace("Ping timeout passed without response");
                            this.trace("Connection dropped by keepalive timeout");
                            d = true;
                            n.destroy();
                        }, this.keepaliveTimeoutMs);
                        u.unref?.();
                    };
                    E();
                    n.on("close", ()=>{
                        if (!d) {
                            this.trace(`Connection dropped by client ${n.socket?.remoteAddress}`);
                        }
                        if (l) {
                            clearTimeout(l);
                        }
                        if (c) {
                            clearTimeout(c);
                        }
                        m();
                        if (h !== null) {
                            clearTimeout(h.timeout);
                            this.sessionIdleTimeouts.delete(n);
                        }
                        this.http2Servers.get(s)?.sessions.delete(n);
                    });
                };
            }
            _channelzSessionHandler(s) {
                return (n)=>{
                    let u = L.registerChannelzSocket(n.socket?.remoteAddress ?? "unknown", this.getChannelzSessionInfo.bind(this, n), this.channelzEnabled);
                    let d = {
                        ref: u,
                        streamTracker: new L.ChannelzCallTracker,
                        messagesSent: 0,
                        messagesReceived: 0,
                        keepAlivesSent: 0,
                        lastMessageSentTimestamp: null,
                        lastMessageReceivedTimestamp: null
                    };
                    this.http2Servers.get(s)?.sessions.add(n);
                    this.sessions.set(n, d);
                    let h = `${n.socket.remoteAddress}:${n.socket.remotePort}`;
                    this.channelzTrace.addTrace("CT_INFO", `Connection established by client ${h}`);
                    this.trace(`Connection established by client ${h}`);
                    this.sessionChildrenTracker.refChild(u);
                    let m = null;
                    let f = null;
                    let y = null;
                    let E = false;
                    let T = this.enableIdleTimeout(n);
                    if (this.maxConnectionAgeMs !== di) {
                        let w = this.maxConnectionAgeMs / 10;
                        let W = Math.random() * w * 2 - w;
                        m = setTimeout(()=>{
                            E = true;
                            this.channelzTrace.addTrace("CT_INFO", `Connection dropped by max connection age from ${h}`);
                            try {
                                n.goaway(Y.constants.NGHTTP2_NO_ERROR, 2147483647, cm);
                            } catch (D) {
                                n.destroy();
                                return;
                            }
                            n.close();
                            if (this.maxConnectionAgeGraceMs !== di) {
                                f = setTimeout(()=>{
                                    n.destroy();
                                }, this.maxConnectionAgeGraceMs);
                                f.unref?.();
                            }
                        }, this.maxConnectionAgeMs + W);
                        m.unref?.();
                    }
                    let P = ()=>{
                        if (y) {
                            clearTimeout(y);
                            y = null;
                        }
                    };
                    let te = ()=>!n.destroyed && this.keepaliveTimeMs < Wo && this.keepaliveTimeMs > 0;
                    let v;
                    let U = ()=>{
                        if (!te()) {
                            return;
                        }
                        this.keepaliveTrace(`Starting keepalive timer for ${this.keepaliveTimeMs}ms`);
                        y = setTimeout(()=>{
                            P();
                            v();
                        }, this.keepaliveTimeMs);
                        y.unref?.();
                    };
                    v = ()=>{
                        if (!te()) {
                            return;
                        }
                        this.keepaliveTrace(`Sending ping with timeout ${this.keepaliveTimeoutMs}ms`);
                        let W = "";
                        try {
                            if (!n.ping((D, le, Ue)=>{
                                P();
                                if (D) {
                                    this.keepaliveTrace(`Ping failed with error: ${D.message}`);
                                    this.channelzTrace.addTrace("CT_INFO", `Connection dropped due to error of a ping frame ${D.message} return in ${le}`);
                                    E = true;
                                    n.destroy();
                                } else {
                                    this.keepaliveTrace("Received ping response");
                                    U();
                                }
                            })) {
                                W = "Ping returned false";
                            }
                        } catch (error) {
                            W = (error instanceof Error ? error.message : "") || "Unknown error";
                        }
                        if (W) {
                            this.keepaliveTrace(`Ping send failed: ${W}`);
                            this.channelzTrace.addTrace("CT_INFO", `Connection dropped due to ping send error: ${W}`);
                            E = true;
                            n.destroy();
                            return;
                        }
                        d.keepAlivesSent += 1;
                        y = setTimeout(()=>{
                            P();
                            this.keepaliveTrace("Ping timeout passed without response");
                            this.channelzTrace.addTrace("CT_INFO", `Connection dropped by keepalive timeout from ${h}`);
                            E = true;
                            n.destroy();
                        }, this.keepaliveTimeoutMs);
                        y.unref?.();
                    };
                    U();
                    n.on("close", ()=>{
                        if (!E) {
                            this.channelzTrace.addTrace("CT_INFO", `Connection dropped by client ${h}`);
                        }
                        this.sessionChildrenTracker.unrefChild(u);
                        L.unregisterChannelzRef(u);
                        if (m) {
                            clearTimeout(m);
                        }
                        if (f) {
                            clearTimeout(f);
                        }
                        P();
                        if (T !== null) {
                            clearTimeout(T.timeout);
                            this.sessionIdleTimeouts.delete(n);
                        }
                        this.http2Servers.get(s)?.sessions.delete(n);
                        this.sessions.delete(n);
                    });
                };
            }
            enableIdleTimeout(s) {
                if (this.sessionIdleTimeout >= om) {
                    return null;
                }
                let o = {
                    activeStreams: 0,
                    lastIdle: Date.now(),
                    onClose: this.onStreamClose.bind(this, s),
                    timeout: setTimeout(this.onIdleTimeout, this.sessionIdleTimeout, this, s)
                };
                o.timeout.unref?.();
                this.sessionIdleTimeouts.set(s, o);
                let { socket } = s;
                this.trace(`Enable idle timeout for ${socket.remoteAddress}:${socket.remotePort}`);
                return o;
            }
            onIdleTimeout(s, n) {
                let { socket } = n;
                let o = s.sessionIdleTimeouts.get(n);
                if (o !== undefined && o.activeStreams === 0) {
                    if (Date.now() - o.lastIdle >= s.sessionIdleTimeout) {
                        s.trace(`Session idle timeout triggered for ${socket?.remoteAddress}:${socket?.remotePort} last idle at ${o.lastIdle}`);
                        s.closeSession(n);
                    } else {
                        o.timeout.refresh();
                    }
                }
            }
            onStreamOpened(s) {
                let s_session = s.session;
                let a = this.sessionIdleTimeouts.get(s_session);
                if (a) {
                    a.activeStreams += 1;
                    s.once("close", a.onClose);
                }
            }
            onStreamClose(s) {
                let o = this.sessionIdleTimeouts.get(s);
                if (o) {
                    o.activeStreams -= 1;
                    if (o.activeStreams === 0) {
                        o.lastIdle = Date.now();
                        o.timeout.refresh();
                        this.trace(`Session onStreamClose${s.socket?.remoteAddress}:${s.socket?.remotePort} at ${o.lastIdle}`);
                    }
                }
            }
        };
        (()=>{
            let i = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : undefined;
            r = [
                Pb("Calling start() is no longer necessary. It can be safely omitted.")
            ];
            bb(e, null, r, {
                kind: "method",
                name: "start",
                static: false,
                private: false,
                access: {
                    has: (s)=>"start" in s,
                    get: (s)=>s.start
                },
                metadata: i
            }, null, t);
            if (i) {
                Object.defineProperty(e, Symbol.metadata, {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: i
                });
            }
        })();
        return e;
    })();
    dr.Server = Mb;
    async function Ib(e, t) {
        let r;
        function i(a, o, l, c) {
            if (a) {
                e.sendStatus(Xe.serverErrorToStatus(a, l));
                return;
            }
            e.sendMessage(o, ()=>{
                e.sendStatus({
                    code: N.Status.OK,
                    details: "OK",
                    metadata: l ?? null
                });
            });
        }
        let s;
        let n = null;
        e.start({
            onReceiveMetadata (a) {
                s = a;
                e.startRead();
            },
            onReceiveMessage (a) {
                if (n) {
                    e.sendStatus({
                        code: N.Status.UNIMPLEMENTED,
                        details: `Received a second request message for server streaming method ${t.path}`,
                        metadata: null
                    });
                    return;
                }
                n = a;
                e.startRead();
            },
            onReceiveHalfClose () {
                if (!n) {
                    e.sendStatus({
                        code: N.Status.UNIMPLEMENTED,
                        details: `Received no request message for server streaming method ${t.path}`,
                        metadata: null
                    });
                    return;
                }
                r = new Xe.ServerWritableStreamImpl(t.path, e, s, n);
                try {
                    t.func(r, i);
                } catch (error) {
                    e.sendStatus({
                        code: N.Status.UNKNOWN,
                        details: `Server method handler threw error ${error.message}`,
                        metadata: null
                    });
                }
            },
            onCancel () {
                if (r) {
                    r.cancelled = true;
                    r.emit("cancelled", "cancelled");
                }
            }
        });
    }
    function xb(e, t) {
        let r;
        function i(s, n, a, o) {
            if (s) {
                e.sendStatus(Xe.serverErrorToStatus(s, a));
                return;
            }
            e.sendMessage(n, ()=>{
                e.sendStatus({
                    code: N.Status.OK,
                    details: "OK",
                    metadata: a ?? null
                });
            });
        }
        e.start({
            onReceiveMetadata (s) {
                r = new Xe.ServerDuplexStreamImpl(t.path, e, s);
                try {
                    t.func(r, i);
                } catch (error) {
                    e.sendStatus({
                        code: N.Status.UNKNOWN,
                        details: `Server method handler threw error ${error.message}`,
                        metadata: null
                    });
                }
            },
            onReceiveMessage (s) {
                r.push(s);
            },
            onReceiveHalfClose () {
                r.push(null);
            },
            onCancel () {
                if (r) {
                    r.cancelled = true;
                    r.emit("cancelled", "cancelled");
                    r.destroy();
                }
            }
        });
    }
    function kb(e, t) {
        let r;
        let i;
        let s = null;
        e.start({
            onReceiveMetadata (n) {
                i = n;
                e.startRead();
            },
            onReceiveMessage (n) {
                if (s) {
                    e.sendStatus({
                        code: N.Status.UNIMPLEMENTED,
                        details: `Received a second request message for server streaming method ${t.path}`,
                        metadata: null
                    });
                    return;
                }
                s = n;
                e.startRead();
            },
            onReceiveHalfClose () {
                if (!s) {
                    e.sendStatus({
                        code: N.Status.UNIMPLEMENTED,
                        details: `Received no request message for server streaming method ${t.path}`,
                        metadata: null
                    });
                    return;
                }
                r = new Xe.ServerWritableStreamImpl(t.path, e, i, s);
                try {
                    t.func(r);
                } catch (error) {
                    e.sendStatus({
                        code: N.Status.UNKNOWN,
                        details: `Server method handler threw error ${error.message}`,
                        metadata: null
                    });
                }
            },
            onCancel () {
                if (r) {
                    r.cancelled = true;
                    r.emit("cancelled", "cancelled");
                    r.destroy();
                }
            }
        });
    }
    function Db(e, t) {
        let r;
        e.start({
            onReceiveMetadata (i) {
                r = new Xe.ServerDuplexStreamImpl(t.path, e, i);
                try {
                    t.func(r);
                } catch (error) {
                    e.sendStatus({
                        code: N.Status.UNKNOWN,
                        details: `Server method handler threw error ${error.message}`,
                        metadata: null
                    });
                }
            },
            onReceiveMessage (i) {
                r.push(i);
            },
            onReceiveHalfClose () {
                r.push(null);
            },
            onCancel () {
                if (r) {
                    r.cancelled = true;
                    r.emit("cancelled", "cancelled");
                    r.destroy();
                }
            }
        });
    }
});
const mm = C(function(pm) {
    Object.defineProperty(pm, "__esModule", {
        value: true
    });
    pm.StatusBuilder = undefined;
    class fm {
        constructor(){
            this.code = null;
            this.details = null;
            this.metadata = null;
        }
        withCode(e) {
            this.code = e;
            return this;
        }
        withDetails(e) {
            this.details = e;
            return this;
        }
        withMetadata(e) {
            this.metadata = e;
            return this;
        }
        build() {
            let e = {};
            if (this.code !== null) {
                e.code = this.code;
            }
            if (this.details !== null) {
                e.details = this.details;
            }
            if (this.metadata !== null) {
                e.metadata = this.metadata;
            }
            return e;
        }
    }
    pm.StatusBuilder = fm;
});
const ji = C(function(Rm) {
    Object.defineProperty(Rm, "__esModule", {
        value: true
    });
    Rm.LeafLoadBalancer = Rm.PickFirstLoadBalancer = Rm.PickFirstLoadBalancingConfig = undefined;
    Rm.shuffled = Cm;
    Rm.setup = Bb;
    var fi = Gt();
    const M = Ae();
    const be = kt();
    const Tn = Pe();
    const vm = K();
    const ym = k();
    const Rn = Pe();
    const bn = Le("net");
    const _m = vr();
    const Lb = "pick_first";
    function Hi(e) {
        vm.trace(ym.LogVerbosity.DEBUG, Lb, e);
    }
    var Wi = "pick_first";
    const Fb = 250;
    class pi {
        constructor(e){
            this.shuffleAddressList = e;
        }
        getLoadBalancerName() {
            return Wi;
        }
        toJsonObject() {
            return {
                [Wi]: {
                    shuffleAddressList: this.shuffleAddressList
                }
            };
        }
        getShuffleAddressList() {
            return this.shuffleAddressList;
        }
        static createFromJson(e) {
            if ("shuffleAddressList" in e && typeof e.shuffleAddressList !== "boolean") {
                throw Error("pick_first config field shuffleAddressList must be a boolean if provided");
            }
            return new pi(e.shuffleAddressList === true);
        }
    }
    Rm.PickFirstLoadBalancingConfig = pi;
    class Sm {
        constructor(e){
            this.subchannel = e;
        }
        pick(e) {
            return {
                pickResultType: be.PickResultType.COMPLETE,
                subchannel: this.subchannel,
                status: null,
                onCallStarted: null,
                onCallEnded: null
            };
        }
    }
    function Cm(e) {
        let t = e.slice();
        for(let r = t.length - 1; r > 1; r--){
            let i = Math.floor(Math.random() * (r + 1));
            let s = t[r];
            t[r] = t[i];
            t[i] = s;
        }
        return t;
    }
    function qb(e) {
        if (e.length === 0) {
            return [];
        }
        let t = [];
        let r = [];
        let i = [];
        let s = Rn.isTcpSubchannelAddress(e[0]) && bn.isIPv6(e[0].host);
        for (let o of e){
            if (Rn.isTcpSubchannelAddress(o) && bn.isIPv6(o.host)) {
                r.push(o);
            } else {
                i.push(o);
            }
        }
        let n = s ? r : i;
        let a = s ? i : r;
        for(let o = 0; o < Math.max(n.length, a.length); o++){
            if (o < n.length) {
                t.push(n[o]);
            }
            if (o < a.length) {
                t.push(a[o]);
            }
        }
        return t;
    }
    const Em = "grpc-node.internal.pick-first.report_health_status";
    class On {
        constructor(e){
            this.channelControlHelper = e;
            this.children = [];
            this.currentState = M.ConnectivityState.IDLE;
            this.currentSubchannelIndex = 0;
            this.currentPick = null;
            this.subchannelStateListener = (t, r, i, s, n)=>{
                this.onSubchannelStateUpdate(t, r, i, n);
            };
            this.pickedSubchannelHealthListener = ()=>this.calculateAndReportNewState();
            this.stickyTransientFailureMode = false;
            this.reportHealthStatus = false;
            this.lastError = null;
            this.latestAddressList = null;
            this.latestOptions = {};
            this.latestResolutionNote = "";
            this.connectionDelayTimeout = setTimeout(()=>{}, 0);
            clearTimeout(this.connectionDelayTimeout);
        }
        allChildrenHaveReportedTF() {
            return this.children.every((e)=>e.hasReportedTransientFailure);
        }
        resetChildrenReportedTF() {
            this.children.every((e)=>e.hasReportedTransientFailure = false);
        }
        calculateAndReportNewState() {
            if (this.currentPick) {
                if (this.reportHealthStatus && !this.currentPick.isHealthy()) {
                    let t = `Picked subchannel ${this.currentPick.getAddress()} is unhealthy`;
                    this.updateState(M.ConnectivityState.TRANSIENT_FAILURE, new be.UnavailablePicker({
                        details: t
                    }), t);
                } else {
                    this.updateState(M.ConnectivityState.READY, new Sm(this.currentPick), null);
                }
            } else if (this.latestAddressList?.length === 0) {
                let t = `No connection established. Last error: ${this.lastError}. Resolution note: ${this.latestResolutionNote}`;
                this.updateState(M.ConnectivityState.TRANSIENT_FAILURE, new be.UnavailablePicker({
                    details: t
                }), t);
            } else if (this.children.length === 0) {
                this.updateState(M.ConnectivityState.IDLE, new be.QueuePicker(this), null);
            } else if (this.stickyTransientFailureMode) {
                let t = `No connection established. Last error: ${this.lastError}. Resolution note: ${this.latestResolutionNote}`;
                this.updateState(M.ConnectivityState.TRANSIENT_FAILURE, new be.UnavailablePicker({
                    details: t
                }), t);
            } else {
                this.updateState(M.ConnectivityState.CONNECTING, new be.QueuePicker(this), null);
            }
        }
        requestReresolution() {
            this.channelControlHelper.requestReresolution();
        }
        maybeEnterStickyTransientFailureMode() {
            if (!this.allChildrenHaveReportedTF()) {
                return;
            }
            this.requestReresolution();
            this.resetChildrenReportedTF();
            if (this.stickyTransientFailureMode) {
                this.calculateAndReportNewState();
                return;
            }
            this.stickyTransientFailureMode = true;
            for (let { subchannel } of this.children){
                subchannel.startConnecting();
            }
            this.calculateAndReportNewState();
        }
        removeCurrentPick() {
            if (this.currentPick !== null) {
                this.currentPick.removeConnectivityStateListener(this.subchannelStateListener);
                this.channelControlHelper.removeChannelzChild(this.currentPick.getChannelzRef());
                this.currentPick.removeHealthStateWatcher(this.pickedSubchannelHealthListener);
                this.currentPick.unref();
                this.currentPick = null;
            }
        }
        onSubchannelStateUpdate(e, t, r, i) {
            if (this.currentPick?.realSubchannelEquals(e)) {
                if (r !== M.ConnectivityState.READY) {
                    this.removeCurrentPick();
                    this.calculateAndReportNewState();
                }
                return;
            }
            for (let [n, a] of this.children.entries()){
                if (e.realSubchannelEquals(a.subchannel)) {
                    if (r === M.ConnectivityState.READY) {
                        this.pickSubchannel(a.subchannel);
                    }
                    if (r === M.ConnectivityState.TRANSIENT_FAILURE) {
                        a.hasReportedTransientFailure = true;
                        if (i) {
                            this.lastError = i;
                        }
                        this.maybeEnterStickyTransientFailureMode();
                        if (n === this.currentSubchannelIndex) {
                            this.startNextSubchannelConnecting(n + 1);
                        }
                    }
                    a.subchannel.startConnecting();
                    return;
                }
            }
        }
        startNextSubchannelConnecting(e) {
            clearTimeout(this.connectionDelayTimeout);
            for (let [t, r] of this.children.entries()){
                if (t >= e) {
                    let i = r.subchannel.getConnectivityState();
                    if (i === M.ConnectivityState.IDLE || i === M.ConnectivityState.CONNECTING) {
                        this.startConnecting(t);
                        return;
                    }
                }
            }
            this.maybeEnterStickyTransientFailureMode();
        }
        startConnecting(e) {
            clearTimeout(this.connectionDelayTimeout);
            this.currentSubchannelIndex = e;
            if (this.children[e].subchannel.getConnectivityState() === M.ConnectivityState.IDLE) {
                Hi(`Start connecting to subchannel with address ${this.children[e].subchannel.getAddress()}`);
                process.nextTick(()=>{
                    this.children[e]?.subchannel.startConnecting();
                });
            }
            this.connectionDelayTimeout = setTimeout(()=>{
                this.startNextSubchannelConnecting(e + 1);
            }, Fb);
            this.connectionDelayTimeout.unref?.();
        }
        pickSubchannel(e) {
            Hi(`Pick subchannel with address ${e.getAddress()}`);
            this.stickyTransientFailureMode = false;
            e.ref();
            this.channelControlHelper.addChannelzChild(e.getChannelzRef());
            this.removeCurrentPick();
            this.resetSubchannelList();
            e.addConnectivityStateListener(this.subchannelStateListener);
            e.addHealthStateWatcher(this.pickedSubchannelHealthListener);
            this.currentPick = e;
            clearTimeout(this.connectionDelayTimeout);
            this.calculateAndReportNewState();
        }
        updateState(e, t, r) {
            Hi(`${M.ConnectivityState[this.currentState]} -> ${M.ConnectivityState[e]}`);
            this.currentState = e;
            this.channelControlHelper.updateState(e, t, r);
        }
        resetSubchannelList() {
            for (let e of this.children){
                e.subchannel.removeConnectivityStateListener(this.subchannelStateListener);
                e.subchannel.unref();
                this.channelControlHelper.removeChannelzChild(e.subchannel.getChannelzRef());
            }
            this.currentSubchannelIndex = 0;
            this.children = [];
        }
        connectToAddressList(e, t) {
            Hi(`connectToAddressList([${e.map((i)=>Tn.subchannelAddressToString(i))}])`);
            let r = e.map((i)=>({
                    subchannel: this.channelControlHelper.createSubchannel(i, t),
                    hasReportedTransientFailure: false
                }));
            for (let { subchannel } of r){
                if (subchannel.getConnectivityState() === M.ConnectivityState.READY) {
                    this.pickSubchannel(subchannel);
                    return;
                }
            }
            for (let { subchannel } of r){
                subchannel.ref();
                this.channelControlHelper.addChannelzChild(subchannel.getChannelzRef());
            }
            this.resetSubchannelList();
            this.children = r;
            for (let { subchannel } of this.children){
                subchannel.addConnectivityStateListener(this.subchannelStateListener);
            }
            for (let i of this.children){
                if (i.subchannel.getConnectivityState() === M.ConnectivityState.TRANSIENT_FAILURE) {
                    i.hasReportedTransientFailure = true;
                }
            }
            this.startNextSubchannelConnecting(0);
            this.calculateAndReportNewState();
        }
        updateAddressList(e, t, r, i) {
            if (!(t instanceof pi)) {
                return false;
            }
            if (!e.ok) {
                if (this.children.length === 0 && this.currentPick === null) {
                    this.channelControlHelper.updateState(M.ConnectivityState.TRANSIENT_FAILURE, new be.UnavailablePicker(e.error), e.error.details);
                }
                return true;
            }
            let e_value = e.value;
            this.reportHealthStatus = r[Em];
            if (t.getShuffleAddressList()) {
                e_value = Cm(e_value);
            }
            let n = [].concat(...e_value.map((o)=>o.addresses));
            Hi(`updateAddressList([${n.map((o)=>Tn.subchannelAddressToString(o))}])`);
            let a = qb(n);
            this.latestAddressList = a;
            this.latestOptions = r;
            this.connectToAddressList(a, r);
            this.latestResolutionNote = i;
            if (n.length > 0) {
                return true;
            } else {
                this.lastError = "No addresses resolved";
                return false;
            }
        }
        exitIdle() {
            if (this.currentState === M.ConnectivityState.IDLE && this.latestAddressList) {
                this.connectToAddressList(this.latestAddressList, this.latestOptions);
            }
        }
        resetBackoff() {}
        destroy() {
            this.resetSubchannelList();
            this.removeCurrentPick();
        }
        getTypeName() {
            return Wi;
        }
    }
    Rm.PickFirstLoadBalancer = On;
    const Ub = new pi(false);
    class Tm {
        constructor(e, t, r, i){
            this.endpoint = e;
            this.options = r;
            this.resolutionNote = i;
            this.latestState = M.ConnectivityState.IDLE;
            let s = fi.createChildChannelControlHelper(t, {
                updateState: (n, a, o)=>{
                    this.latestState = n;
                    this.latestPicker = a;
                    t.updateState(n, a, o);
                }
            });
            this.pickFirstBalancer = new On(s);
            this.latestPicker = new be.QueuePicker(this.pickFirstBalancer);
        }
        startConnecting() {
            this.pickFirstBalancer.updateAddressList(_m.statusOrFromValue([
                this.endpoint
            ]), Ub, {
                ...this.options,
                [Em]: true
            }, this.resolutionNote);
        }
        updateEndpoint(e, t) {
            this.options = t;
            this.endpoint = e;
            if (this.latestState !== M.ConnectivityState.IDLE) {
                this.startConnecting();
            }
        }
        getConnectivityState() {
            return this.latestState;
        }
        getPicker() {
            return this.latestPicker;
        }
        getEndpoint() {
            return this.endpoint;
        }
        exitIdle() {
            this.pickFirstBalancer.exitIdle();
        }
        destroy() {
            this.pickFirstBalancer.destroy();
        }
    }
    Rm.LeafLoadBalancer = Tm;
    function Bb() {
        fi.registerLoadBalancerType(Wi, On, pi);
        fi.registerDefaultLoadBalancerType(Wi);
    }
});
const xm = C(function(Mm) {
    Object.defineProperty(Mm, "__esModule", {
        value: true
    });
    Mm.FileWatcherCertificateProvider = undefined;
    const Om = Le("fs");
    const wm = K();
    const Am = k();
    const Pm = Le("util");
    const Gb = "certificate_provider";
    function wn(e) {
        wm.trace(Am.LogVerbosity.DEBUG, Gb, e);
    }
    const Go = Pm.promisify(Om.readFile);
    class Nm {
        constructor(e){
            this.config = e;
            this.refreshTimer = null;
            this.fileResultPromise = null;
            this.latestCaUpdate = undefined;
            this.caListeners = new Set;
            this.latestIdentityUpdate = undefined;
            this.identityListeners = new Set;
            this.lastUpdateTime = null;
            if (e.certificateFile === undefined !== (e.privateKeyFile === undefined)) {
                throw Error("certificateFile and privateKeyFile must be set or unset together");
            }
            if (e.certificateFile === undefined && e.caCertificateFile === undefined) {
                throw Error("At least one of certificateFile and caCertificateFile must be set");
            }
            wn(`File watcher constructed with config ${JSON.stringify(e)}`);
        }
        updateCertificates() {
            if (this.fileResultPromise) {
                return;
            }
            this.fileResultPromise = Promise.allSettled([
                this.config.certificateFile ? Go(this.config.certificateFile) : Promise.reject(),
                this.config.privateKeyFile ? Go(this.config.privateKeyFile) : Promise.reject(),
                this.config.caCertificateFile ? Go(this.config.caCertificateFile) : Promise.reject()
            ]);
            this.fileResultPromise.then(([e, t, r])=>{
                if (!this.refreshTimer) {
                    return;
                }
                wn(`File watcher read certificates certificate ${e.status}, privateKey ${t.status}, CA certificate ${r.status}`);
                this.lastUpdateTime = new Date;
                this.fileResultPromise = null;
                if (e.status === "fulfilled" && t.status === "fulfilled") {
                    this.latestIdentityUpdate = {
                        certificate: e.value,
                        privateKey: t.value
                    };
                } else {
                    this.latestIdentityUpdate = null;
                }
                if (r.status === "fulfilled") {
                    this.latestCaUpdate = {
                        caCertificate: r.value
                    };
                } else {
                    this.latestCaUpdate = null;
                }
                for (let i of this.identityListeners){
                    i(this.latestIdentityUpdate);
                }
                for (let i of this.caListeners){
                    i(this.latestCaUpdate);
                }
            });
            wn("File watcher initiated certificate update");
        }
        maybeStartWatchingFiles() {
            if (!this.refreshTimer) {
                let e = this.lastUpdateTime ? new Date().getTime() - this.lastUpdateTime.getTime() : Infinity;
                if (e > this.config.refreshIntervalMs) {
                    this.updateCertificates();
                }
                if (e > this.config.refreshIntervalMs * 2) {
                    this.latestCaUpdate = undefined;
                    this.latestIdentityUpdate = undefined;
                }
                this.refreshTimer = setInterval(()=>this.updateCertificates(), this.config.refreshIntervalMs);
                wn("File watcher started watching");
            }
        }
        maybeStopWatchingFiles() {
            if (this.caListeners.size === 0 && this.identityListeners.size === 0) {
                this.fileResultPromise = null;
                if (this.refreshTimer) {
                    clearInterval(this.refreshTimer);
                    this.refreshTimer = null;
                }
            }
        }
        addCaCertificateListener(e) {
            this.caListeners.add(e);
            this.maybeStartWatchingFiles();
            if (this.latestCaUpdate !== undefined) {
                process.nextTick(e, this.latestCaUpdate);
            }
        }
        removeCaCertificateListener(e) {
            this.caListeners.delete(e);
            this.maybeStopWatchingFiles();
        }
        addIdentityCertificateListener(e) {
            this.identityListeners.add(e);
            this.maybeStartWatchingFiles();
            if (this.latestIdentityUpdate !== undefined) {
                process.nextTick(e, this.latestIdentityUpdate);
            }
        }
        removeIdentityCertificateListener(e) {
            this.identityListeners.delete(e);
            this.maybeStopWatchingFiles();
        }
    }
    Mm.FileWatcherCertificateProvider = Nm;
});
const Yo = C(function(F) {
    Object.defineProperty(F, "__esModule", {
        value: true
    });
    F.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = F.createCertificateProviderChannelCredentials = F.FileWatcherCertificateProvider = F.createCertificateProviderServerCredentials = F.createServerCredentialsWithInterceptors = F.BaseSubchannelWrapper = F.registerAdminService = F.FilterStackFactory = F.BaseFilter = F.statusOrFromError = F.statusOrFromValue = F.PickResultType = F.QueuePicker = F.UnavailablePicker = F.ChildLoadBalancerHandler = F.EndpointMap = F.endpointHasAddress = F.endpointToString = F.subchannelAddressToString = F.LeafLoadBalancer = F.isLoadBalancerNameRegistered = F.parseLoadBalancingConfig = F.selectLbConfigFromList = F.registerLoadBalancerType = F.createChildChannelControlHelper = F.BackoffTimeout = F.parseDuration = F.durationToMs = F.splitHostPort = F.uriToString = F.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = F.createResolver = F.registerResolver = F.log = F.trace = undefined;
    const km = K();
    Object.defineProperty(F, "trace", {
        enumerable: true,
        get: function() {
            return km.trace;
        }
    });
    Object.defineProperty(F, "log", {
        enumerable: true,
        get: function() {
            return km.log;
        }
    });
    const $o = rt();
    Object.defineProperty(F, "registerResolver", {
        enumerable: true,
        get: function() {
            return $o.registerResolver;
        }
    });
    Object.defineProperty(F, "createResolver", {
        enumerable: true,
        get: function() {
            return $o.createResolver;
        }
    });
    Object.defineProperty(F, "CHANNEL_ARGS_CONFIG_SELECTOR_KEY", {
        enumerable: true,
        get: function() {
            return $o.CHANNEL_ARGS_CONFIG_SELECTOR_KEY;
        }
    });
    const Dm = we();
    Object.defineProperty(F, "uriToString", {
        enumerable: true,
        get: function() {
            return Dm.uriToString;
        }
    });
    Object.defineProperty(F, "splitHostPort", {
        enumerable: true,
        get: function() {
            return Dm.splitHostPort;
        }
    });
    const Lm = zi();
    Object.defineProperty(F, "durationToMs", {
        enumerable: true,
        get: function() {
            return Lm.durationToMs;
        }
    });
    Object.defineProperty(F, "parseDuration", {
        enumerable: true,
        get: function() {
            return Lm.parseDuration;
        }
    });
    const $b = Ir();
    Object.defineProperty(F, "BackoffTimeout", {
        enumerable: true,
        get: function() {
            return $b.BackoffTimeout;
        }
    });
    const Gi = Gt();
    Object.defineProperty(F, "createChildChannelControlHelper", {
        enumerable: true,
        get: function() {
            return Gi.createChildChannelControlHelper;
        }
    });
    Object.defineProperty(F, "registerLoadBalancerType", {
        enumerable: true,
        get: function() {
            return Gi.registerLoadBalancerType;
        }
    });
    Object.defineProperty(F, "selectLbConfigFromList", {
        enumerable: true,
        get: function() {
            return Gi.selectLbConfigFromList;
        }
    });
    Object.defineProperty(F, "parseLoadBalancingConfig", {
        enumerable: true,
        get: function() {
            return Gi.parseLoadBalancingConfig;
        }
    });
    Object.defineProperty(F, "isLoadBalancerNameRegistered", {
        enumerable: true,
        get: function() {
            return Gi.isLoadBalancerNameRegistered;
        }
    });
    const Vb = ji();
    Object.defineProperty(F, "LeafLoadBalancer", {
        enumerable: true,
        get: function() {
            return Vb.LeafLoadBalancer;
        }
    });
    const An = Pe();
    Object.defineProperty(F, "subchannelAddressToString", {
        enumerable: true,
        get: function() {
            return An.subchannelAddressToString;
        }
    });
    Object.defineProperty(F, "endpointToString", {
        enumerable: true,
        get: function() {
            return An.endpointToString;
        }
    });
    Object.defineProperty(F, "endpointHasAddress", {
        enumerable: true,
        get: function() {
            return An.endpointHasAddress;
        }
    });
    Object.defineProperty(F, "EndpointMap", {
        enumerable: true,
        get: function() {
            return An.EndpointMap;
        }
    });
    const Yb = cs();
    Object.defineProperty(F, "ChildLoadBalancerHandler", {
        enumerable: true,
        get: function() {
            return Yb.ChildLoadBalancerHandler;
        }
    });
    const Vo = kt();
    Object.defineProperty(F, "UnavailablePicker", {
        enumerable: true,
        get: function() {
            return Vo.UnavailablePicker;
        }
    });
    Object.defineProperty(F, "QueuePicker", {
        enumerable: true,
        get: function() {
            return Vo.QueuePicker;
        }
    });
    Object.defineProperty(F, "PickResultType", {
        enumerable: true,
        get: function() {
            return Vo.PickResultType;
        }
    });
    const Fm = vr();
    Object.defineProperty(F, "statusOrFromValue", {
        enumerable: true,
        get: function() {
            return Fm.statusOrFromValue;
        }
    });
    Object.defineProperty(F, "statusOrFromError", {
        enumerable: true,
        get: function() {
            return Fm.statusOrFromError;
        }
    });
    const Kb = Co();
    Object.defineProperty(F, "BaseFilter", {
        enumerable: true,
        get: function() {
            return Kb.BaseFilter;
        }
    });
    const Jb = Js();
    Object.defineProperty(F, "FilterStackFactory", {
        enumerable: true,
        get: function() {
            return Jb.FilterStackFactory;
        }
    });
    const Xb = fs();
    Object.defineProperty(F, "registerAdminService", {
        enumerable: true,
        get: function() {
            return Xb.registerAdminService;
        }
    });
    const Qb = Bi();
    Object.defineProperty(F, "BaseSubchannelWrapper", {
        enumerable: true,
        get: function() {
            return Qb.BaseSubchannelWrapper;
        }
    });
    const qm = dn();
    Object.defineProperty(F, "createServerCredentialsWithInterceptors", {
        enumerable: true,
        get: function() {
            return qm.createServerCredentialsWithInterceptors;
        }
    });
    Object.defineProperty(F, "createCertificateProviderServerCredentials", {
        enumerable: true,
        get: function() {
            return qm.createCertificateProviderServerCredentials;
        }
    });
    const Zb = xm();
    Object.defineProperty(F, "FileWatcherCertificateProvider", {
        enumerable: true,
        get: function() {
            return Zb.FileWatcherCertificateProvider;
        }
    });
    const eO = Mr();
    Object.defineProperty(F, "createCertificateProviderChannelCredentials", {
        enumerable: true,
        get: function() {
            return eO.createCertificateProviderChannelCredentials;
        }
    });
    const tO = xo();
    Object.defineProperty(F, "SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX", {
        enumerable: true,
        get: function() {
            return tO.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX;
        }
    });
});
const Wm = C(function(Hm) {
    Object.defineProperty(Hm, "__esModule", {
        value: true
    });
    Hm.setup = iO;
    var Um = rt();
    const Bm = vr();
    class zm {
        constructor(e, t, r){
            this.listener = t;
            this.hasReturnedResult = false;
            this.endpoints = [];
            let i;
            if (e.authority === "") {
                i = `/${e.path}`;
            } else {
                i = e.path;
            }
            this.endpoints = [
                {
                    addresses: [
                        {
                            path: i
                        }
                    ]
                }
            ];
        }
        updateResolution() {
            if (!this.hasReturnedResult) {
                this.hasReturnedResult = true;
                process.nextTick(this.listener, Bm.statusOrFromValue(this.endpoints), {}, null, "");
            }
        }
        destroy() {
            this.hasReturnedResult = false;
        }
        static getDefaultAuthority(e) {
            return "localhost";
        }
    }
    function iO() {
        Um.registerResolver("unix", zm);
    }
});
const Ym = C(function(Vm) {
    Object.defineProperty(Vm, "__esModule", {
        value: true
    });
    Vm.setup = oO;
    const Pn = Le("net");
    const Nn = vr();
    const hr = k();
    const gi = ue();
    var Mn = rt();
    const Gm = Pe();
    const In = we();
    const $m = K();
    const nO = "ip_resolver";
    function jm(e) {
        $m.trace(hr.LogVerbosity.DEBUG, nO, e);
    }
    var Ko = "ipv4";
    var Jo = "ipv6";
    const aO = 443;
    class Xo {
        constructor(e, t, r){
            this.listener = t;
            this.endpoints = [];
            this.error = null;
            this.hasReturnedResult = false;
            jm(`Resolver constructed for target ${In.uriToString(e)}`);
            let s = [];
            if (!(e.scheme === Ko || e.scheme === Jo)) {
                this.error = {
                    code: hr.Status.UNAVAILABLE,
                    details: `Unrecognized scheme ${e.scheme} in IP resolver`,
                    metadata: new gi.Metadata
                };
                return;
            }
            let n = e.path.split(",");
            for (let a of n){
                let o = In.splitHostPort(a);
                if (o === null) {
                    this.error = {
                        code: hr.Status.UNAVAILABLE,
                        details: `Failed to parse ${e.scheme} address ${a}`,
                        metadata: new gi.Metadata
                    };
                    return;
                }
                if (e.scheme === Ko && !Pn.isIPv4(o.host) || e.scheme === Jo && !Pn.isIPv6(o.host)) {
                    this.error = {
                        code: hr.Status.UNAVAILABLE,
                        details: `Failed to parse ${e.scheme} address ${a}`,
                        metadata: new gi.Metadata
                    };
                    return;
                }
                s.push({
                    host: o.host,
                    port: o.port ?? aO
                });
            }
            this.endpoints = s.map((a)=>({
                    addresses: [
                        a
                    ]
                }));
            jm(`Parsed ${e.scheme} address list ${s.map(Gm.subchannelAddressToString)}`);
        }
        updateResolution() {
            if (!this.hasReturnedResult) {
                this.hasReturnedResult = true;
                process.nextTick(()=>{
                    if (this.error) {
                        this.listener(Nn.statusOrFromError(this.error), {}, null, "");
                    } else {
                        this.listener(Nn.statusOrFromValue(this.endpoints), {}, null, "");
                    }
                });
            }
        }
        destroy() {
            this.hasReturnedResult = false;
        }
        static getDefaultAuthority(e) {
            return e.path.split(",")[0];
        }
    }
    function oO() {
        Mn.registerResolver(Ko, Xo);
        Mn.registerResolver(Jo, Xo);
    }
});
const rv = C(function(ev) {
    Object.defineProperty(ev, "__esModule", {
        value: true
    });
    ev.RoundRobinLoadBalancer = undefined;
    ev.setup = dO;
    var Dn = Gt();
    const H = Ae();
    const Mt = kt();
    const Jm = K();
    const Xm = k();
    const xn = Pe();
    const Qm = ji();
    const cO = "round_robin";
    function Km(e) {
        Jm.trace(Xm.LogVerbosity.DEBUG, cO, e);
    }
    var kn = "round_robin";
    class Ln {
        getLoadBalancerName() {
            return kn;
        }
        constructor(){}
        toJsonObject() {
            return {
                [kn]: {}
            };
        }
        static createFromJson(e) {
            return new Ln;
        }
    }
    class Zm {
        constructor(e, t = 0){
            this.children = e;
            this.nextIndex = t;
        }
        pick(e) {
            let picker = this.children[this.nextIndex].picker;
            this.nextIndex = (this.nextIndex + 1) % this.children.length;
            return picker.pick(e);
        }
        peekNextEndpoint() {
            return this.children[this.nextIndex].endpoint;
        }
    }
    function uO(e, t) {
        return [
            ...e.slice(t),
            ...e.slice(0, t)
        ];
    }
    class Qo {
        constructor(e){
            this.channelControlHelper = e;
            this.children = [];
            this.currentState = H.ConnectivityState.IDLE;
            this.currentReadyPicker = null;
            this.updatesPaused = false;
            this.lastError = null;
            this.childChannelControlHelper = Dn.createChildChannelControlHelper(e, {
                updateState: (t, r, i)=>{
                    if (this.currentState === H.ConnectivityState.READY && t !== H.ConnectivityState.READY) {
                        this.channelControlHelper.requestReresolution();
                    }
                    if (i) {
                        this.lastError = i;
                    }
                    this.calculateAndUpdateState();
                }
            });
        }
        countChildrenWithState(e) {
            return this.children.filter((t)=>t.getConnectivityState() === e).length;
        }
        calculateAndUpdateState() {
            if (this.updatesPaused) {
                return;
            }
            if (this.countChildrenWithState(H.ConnectivityState.READY) > 0) {
                let e = this.children.filter((r)=>r.getConnectivityState() === H.ConnectivityState.READY);
                let t = 0;
                if (this.currentReadyPicker !== null) {
                    let r = this.currentReadyPicker.peekNextEndpoint();
                    t = e.findIndex((i)=>xn.endpointEqual(i.getEndpoint(), r));
                    if (t < 0) {
                        t = 0;
                    }
                }
                this.updateState(H.ConnectivityState.READY, new Zm(e.map((r)=>({
                        endpoint: r.getEndpoint(),
                        picker: r.getPicker()
                    })), t), null);
            } else if (this.countChildrenWithState(H.ConnectivityState.CONNECTING) > 0) {
                this.updateState(H.ConnectivityState.CONNECTING, new Mt.QueuePicker(this), null);
            } else if (this.countChildrenWithState(H.ConnectivityState.TRANSIENT_FAILURE) > 0) {
                let e = `round_robin: No connection established. Last error: ${this.lastError}`;
                this.updateState(H.ConnectivityState.TRANSIENT_FAILURE, new Mt.UnavailablePicker({
                    details: e
                }), e);
            } else {
                this.updateState(H.ConnectivityState.IDLE, new Mt.QueuePicker(this), null);
            }
            for (let e of this.children){
                if (e.getConnectivityState() === H.ConnectivityState.IDLE) {
                    e.exitIdle();
                }
            }
        }
        updateState(e, t, r) {
            Km(`${H.ConnectivityState[this.currentState]} -> ${H.ConnectivityState[e]}`);
            if (e === H.ConnectivityState.READY) {
                this.currentReadyPicker = t;
            } else {
                this.currentReadyPicker = null;
            }
            this.currentState = e;
            this.channelControlHelper.updateState(e, t, r);
        }
        resetSubchannelList() {
            for (let e of this.children){
                e.destroy();
            }
            this.children = [];
        }
        updateAddressList(e, t, r, i) {
            if (!(t instanceof Ln)) {
                return false;
            }
            if (!e.ok) {
                if (this.children.length === 0) {
                    this.updateState(H.ConnectivityState.TRANSIENT_FAILURE, new Mt.UnavailablePicker(e.error), e.error.details);
                }
                return true;
            }
            let s = Math.random() * e.value.length | 0;
            let n = uO(e.value, s);
            this.resetSubchannelList();
            if (n.length === 0) {
                let a = `No addresses resolved. Resolution note: ${i}`;
                this.updateState(H.ConnectivityState.TRANSIENT_FAILURE, new Mt.UnavailablePicker({
                    details: a
                }), a);
            }
            Km(`Connect to endpoint list ${n.map(xn.endpointToString)}`);
            this.updatesPaused = true;
            this.children = n.map((a)=>new Qm.LeafLoadBalancer(a, this.childChannelControlHelper, r, i));
            for (let a of this.children){
                a.startConnecting();
            }
            this.updatesPaused = false;
            this.calculateAndUpdateState();
            return true;
        }
        exitIdle() {}
        resetBackoff() {}
        destroy() {
            this.resetSubchannelList();
        }
        getTypeName() {
            return kn;
        }
    }
    ev.RoundRobinLoadBalancer = Qo;
    function dO() {
        Dn.registerLoadBalancerType(kn, Qo, Ln);
    }
});
const pv = C(function(hv) {
    Object.defineProperty(hv, "__esModule", {
        value: true
    });
    hv.OutlierDetectionLoadBalancer = hv.OutlierDetectionLoadBalancingConfig = undefined;
    hv.setup = vO;
    const iv = Ae();
    const qn = k();
    const ke = zi();
    var Un = Yo();
    const sv = Gt();
    const nv = cs();
    const av = kt();
    const vi = Pe();
    const ov = Bi();
    const lv = K();
    const fO = "outlier_detection";
    function ge(e) {
        lv.trace(qn.LogVerbosity.DEBUG, fO, e);
    }
    var rl = "outlier_detection";
    var pO = (process.env.GRPC_EXPERIMENTAL_ENABLE_OUTLIER_DETECTION ?? "true") === "true";
    const gO = {
        stdev_factor: 1900,
        enforcement_percentage: 100,
        minimum_hosts: 5,
        request_volume: 100
    };
    const mO = {
        threshold: 85,
        enforcement_percentage: 100,
        minimum_hosts: 5,
        request_volume: 50
    };
    function mi(e, t, r, i) {
        if (t in e && e[t] !== undefined && typeof e[t] !== r) {
            let s = i ? `${i}.${t}` : t;
            throw Error(`outlier detection config ${s} parse error: expected ${r}, got ${typeof e[t]}`);
        }
    }
    function el(e, t, r) {
        let i = r ? `${r}.${t}` : t;
        if (t in e && e[t] !== undefined) {
            if (!ke.isDuration(e[t])) {
                throw Error(`outlier detection config ${i} parse error: expected Duration, got ${typeof e[t]}`);
            }
            if (!(e[t].seconds >= 0 && e[t].seconds <= 315576000000 && e[t].nanos >= 0 && e[t].nanos <= 999999999)) {
                throw Error(`outlier detection config ${i} parse error: values out of range for non-negative Duaration`);
            }
        }
    }
    function Fn(e, t, r) {
        let i = r ? `${r}.${t}` : t;
        mi(e, t, "number", r);
        if (t in e && e[t] !== undefined && !(e[t] >= 0 && e[t] <= 100)) {
            throw Error(`outlier detection config ${i} parse error: value out of range for percentage (0-100)`);
        }
    }
    class $i {
        constructor(e, t, r, i, s, n, a){
            this.childPolicy = a;
            if (a.getLoadBalancerName() === "pick_first") {
                throw Error("outlier_detection LB policy cannot have a pick_first child policy");
            }
            this.intervalMs = e ?? 10000;
            this.baseEjectionTimeMs = t ?? 30000;
            this.maxEjectionTimeMs = r ?? 300000;
            this.maxEjectionPercent = i ?? 10;
            this.successRateEjection = s ? {
                ...gO,
                ...s
            } : null;
            this.failurePercentageEjection = n ? {
                ...mO,
                ...n
            } : null;
        }
        getLoadBalancerName() {
            return rl;
        }
        toJsonObject() {
            return {
                outlier_detection: {
                    interval: ke.msToDuration(this.intervalMs),
                    base_ejection_time: ke.msToDuration(this.baseEjectionTimeMs),
                    max_ejection_time: ke.msToDuration(this.maxEjectionTimeMs),
                    max_ejection_percent: this.maxEjectionPercent,
                    success_rate_ejection: this.successRateEjection ?? undefined,
                    failure_percentage_ejection: this.failurePercentageEjection ?? undefined,
                    child_policy: [
                        this.childPolicy.toJsonObject()
                    ]
                }
            };
        }
        getIntervalMs() {
            return this.intervalMs;
        }
        getBaseEjectionTimeMs() {
            return this.baseEjectionTimeMs;
        }
        getMaxEjectionTimeMs() {
            return this.maxEjectionTimeMs;
        }
        getMaxEjectionPercent() {
            return this.maxEjectionPercent;
        }
        getSuccessRateEjectionConfig() {
            return this.successRateEjection;
        }
        getFailurePercentageEjectionConfig() {
            return this.failurePercentageEjection;
        }
        getChildPolicy() {
            return this.childPolicy;
        }
        static createFromJson(e) {
            el(e, "interval");
            el(e, "base_ejection_time");
            el(e, "max_ejection_time");
            Fn(e, "max_ejection_percent");
            if ("success_rate_ejection" in e && e.success_rate_ejection !== undefined) {
                if (typeof e.success_rate_ejection !== "object") {
                    throw Error("outlier detection config success_rate_ejection must be an object");
                }
                mi(e.success_rate_ejection, "stdev_factor", "number", "success_rate_ejection");
                Fn(e.success_rate_ejection, "enforcement_percentage", "success_rate_ejection");
                mi(e.success_rate_ejection, "minimum_hosts", "number", "success_rate_ejection");
                mi(e.success_rate_ejection, "request_volume", "number", "success_rate_ejection");
            }
            if ("failure_percentage_ejection" in e && e.failure_percentage_ejection !== undefined) {
                if (typeof e.failure_percentage_ejection !== "object") {
                    throw Error("outlier detection config failure_percentage_ejection must be an object");
                }
                Fn(e.failure_percentage_ejection, "threshold", "failure_percentage_ejection");
                Fn(e.failure_percentage_ejection, "enforcement_percentage", "failure_percentage_ejection");
                mi(e.failure_percentage_ejection, "minimum_hosts", "number", "failure_percentage_ejection");
                mi(e.failure_percentage_ejection, "request_volume", "number", "failure_percentage_ejection");
            }
            if (!("child_policy" in e) || !Array.isArray(e.child_policy)) {
                throw Error("outlier detection config child_policy must be an array");
            }
            let r = sv.selectLbConfigFromList(e.child_policy);
            if (!r) {
                throw Error("outlier detection config child_policy: no valid recognized policy found");
            }
            return new $i(e.interval ? ke.durationToMs(e.interval) : null, e.base_ejection_time ? ke.durationToMs(e.base_ejection_time) : null, e.max_ejection_time ? ke.durationToMs(e.max_ejection_time) : null, e.max_ejection_percent ?? null, e.success_rate_ejection, e.failure_percentage_ejection, r);
        }
    }
    hv.OutlierDetectionLoadBalancingConfig = $i;
    class cv extends ov.BaseSubchannelWrapper {
        constructor(e, t){
            super(e);
            this.mapEntry = t;
            this.refCount = 0;
        }
        ref() {
            this.child.ref();
            this.refCount += 1;
        }
        unref() {
            this.child.unref();
            this.refCount -= 1;
            if (this.refCount <= 0) {
                if (this.mapEntry) {
                    let e = this.mapEntry.subchannelWrappers.indexOf(this);
                    if (e >= 0) {
                        this.mapEntry.subchannelWrappers.splice(e, 1);
                    }
                }
            }
        }
        eject() {
            this.setHealthy(false);
        }
        uneject() {
            this.setHealthy(true);
        }
        getMapEntry() {
            return this.mapEntry;
        }
        getWrappedSubchannel() {
            return this.child;
        }
    }
    function tl() {
        return {
            success: 0,
            failure: 0
        };
    }
    class uv {
        constructor(){
            this.activeBucket = tl();
            this.inactiveBucket = tl();
        }
        addSuccess() {
            this.activeBucket.success += 1;
        }
        addFailure() {
            this.activeBucket.failure += 1;
        }
        switchBuckets() {
            this.inactiveBucket = this.activeBucket;
            this.activeBucket = tl();
        }
        getLastSuccesses() {
            return this.inactiveBucket.success;
        }
        getLastFailures() {
            return this.inactiveBucket.failure;
        }
    }
    class dv {
        constructor(e, t){
            this.wrappedPicker = e;
            this.countCalls = t;
        }
        pick(e) {
            let t = this.wrappedPicker.pick(e);
            if (t.pickResultType === av.PickResultType.COMPLETE) {
                let r = t.subchannel;
                let i = r.getMapEntry();
                if (i) {
                    let onCallEnded = t.onCallEnded;
                    if (this.countCalls) {
                        onCallEnded = (n, a, o)=>{
                            if (n === qn.Status.OK) {
                                i.counter.addSuccess();
                            } else {
                                i.counter.addFailure();
                            }
                            t.onCallEnded?.(n, a, o);
                        };
                    }
                    return {
                        ...t,
                        subchannel: r.getWrappedSubchannel(),
                        onCallEnded
                    };
                } else {
                    return {
                        ...t,
                        subchannel: r.getWrappedSubchannel()
                    };
                }
            } else {
                return t;
            }
        }
    }
    class il {
        constructor(e){
            this.entryMap = new vi.EndpointMap;
            this.latestConfig = null;
            this.timerStartTime = null;
            this.childBalancer = new nv.ChildLoadBalancerHandler(Un.createChildChannelControlHelper(e, {
                createSubchannel: (t, r)=>{
                    let i = e.createSubchannel(t, r);
                    let s = this.entryMap.getForSubchannelAddress(t);
                    let n = new cv(i, s);
                    if (s?.currentEjectionTimestamp !== null) {
                        n.eject();
                    }
                    if (!(s === null || s === undefined)) {
                        s.subchannelWrappers.push(n);
                    }
                    return n;
                },
                updateState: (t, r, i)=>{
                    if (t === iv.ConnectivityState.READY) {
                        e.updateState(t, new dv(r, this.isCountingEnabled()), i);
                    } else {
                        e.updateState(t, r, i);
                    }
                }
            }));
            this.ejectionTimer = setInterval(()=>{}, 0);
            clearInterval(this.ejectionTimer);
        }
        isCountingEnabled() {
            return this.latestConfig !== null && (this.latestConfig.getSuccessRateEjectionConfig() !== null || this.latestConfig.getFailurePercentageEjectionConfig() !== null);
        }
        getCurrentEjectionPercent() {
            let e = 0;
            for (let t of this.entryMap.values()){
                if (t.currentEjectionTimestamp !== null) {
                    e += 1;
                }
            }
            return e * 100 / this.entryMap.size;
        }
        runSuccessRateCheck(e) {
            if (!this.latestConfig) {
                return;
            }
            let t = this.latestConfig.getSuccessRateEjectionConfig();
            if (!t) {
                return;
            }
            ge("Running success rate check");
            let t_request_volume = t.request_volume;
            let i = 0;
            let s = [];
            for (let [u, d] of this.entryMap.entries()){
                let h = d.counter.getLastSuccesses();
                let m = d.counter.getLastFailures();
                ge(`Stats for ${vi.endpointToString(u)}: successes=${h} failures=${m} targetRequestVolume=${t_request_volume}`);
                if (h + m >= t_request_volume) {
                    i += 1;
                    s.push(h / (h + m));
                }
            }
            ge(`Found ${i} success rate candidates; currentEjectionPercent=${this.getCurrentEjectionPercent()} successRates=[${s}]`);
            if (i < t.minimum_hosts) {
                return;
            }
            let n = s.reduce((acc, item)=>acc + item) / s.length;
            let a = 0;
            for (let u of s){
                let d = u - n;
                a += d * d;
            }
            let o = a / s.length;
            let l = Math.sqrt(o);
            let c = n - l * (t.stdev_factor / 1000);
            ge(`stdev=${l} ejectionThreshold=${c}`);
            for (let [u, d] of this.entryMap.entries()){
                if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) {
                    break;
                }
                let h = d.counter.getLastSuccesses();
                let m = d.counter.getLastFailures();
                if (h + m < t_request_volume) {
                    continue;
                }
                let f = h / (h + m);
                ge(`Checking candidate ${u} successRate=${f}`);
                if (f < c) {
                    let y = Math.random() * 100;
                    ge(`Candidate ${u} randomNumber=${y} enforcement_percentage=${t.enforcement_percentage}`);
                    if (y < t.enforcement_percentage) {
                        ge(`Ejecting candidate ${u}`);
                        this.eject(d, e);
                    }
                }
            }
        }
        runFailurePercentageCheck(e) {
            if (!this.latestConfig) {
                return;
            }
            let t = this.latestConfig.getFailurePercentageEjectionConfig();
            if (!t) {
                return;
            }
            ge(`Running failure percentage check. threshold=${t.threshold} request volume threshold=${t.request_volume}`);
            let r = 0;
            for (let i of this.entryMap.values()){
                let s = i.counter.getLastSuccesses();
                let n = i.counter.getLastFailures();
                if (s + n >= t.request_volume) {
                    r += 1;
                }
            }
            if (r < t.minimum_hosts) {
                return;
            }
            for (let [i, s] of this.entryMap.entries()){
                if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) {
                    break;
                }
                let n = s.counter.getLastSuccesses();
                let a = s.counter.getLastFailures();
                ge(`Candidate successes=${n} failures=${a}`);
                if (n + a < t.request_volume) {
                    continue;
                }
                if (a * 100 / (a + n) > t.threshold) {
                    let l = Math.random() * 100;
                    ge(`Candidate ${i} randomNumber=${l} enforcement_percentage=${t.enforcement_percentage}`);
                    if (l < t.enforcement_percentage) {
                        ge(`Ejecting candidate ${i}`);
                        this.eject(s, e);
                    }
                }
            }
        }
        eject(e, t) {
            e.currentEjectionTimestamp = new Date;
            e.ejectionTimeMultiplier += 1;
            for (let r of e.subchannelWrappers){
                r.eject();
            }
        }
        uneject(e) {
            e.currentEjectionTimestamp = null;
            for (let t of e.subchannelWrappers){
                t.uneject();
            }
        }
        switchAllBuckets() {
            for (let e of this.entryMap.values()){
                e.counter.switchBuckets();
            }
        }
        startTimer(e) {
            this.ejectionTimer = setTimeout(()=>this.runChecks(), e);
            this.ejectionTimer.unref?.();
        }
        runChecks() {
            let e = new Date;
            ge("Ejection timer running");
            this.switchAllBuckets();
            if (!this.latestConfig) {
                return;
            }
            this.timerStartTime = e;
            this.startTimer(this.latestConfig.getIntervalMs());
            this.runSuccessRateCheck(e);
            this.runFailurePercentageCheck(e);
            for (let [t, r] of this.entryMap.entries()){
                if (r.currentEjectionTimestamp === null) {
                    if (r.ejectionTimeMultiplier > 0) {
                        r.ejectionTimeMultiplier -= 1;
                    }
                } else {
                    let i = this.latestConfig.getBaseEjectionTimeMs();
                    let s = this.latestConfig.getMaxEjectionTimeMs();
                    let n = new Date(r.currentEjectionTimestamp.getTime());
                    n.setMilliseconds(n.getMilliseconds() + Math.min(i * r.ejectionTimeMultiplier, Math.max(i, s)));
                    if (n < new Date) {
                        ge(`Unejecting ${t}`);
                        this.uneject(r);
                    }
                }
            }
        }
        updateAddressList(e, t, r, i) {
            if (!(t instanceof $i)) {
                return false;
            }
            ge(`Received update with config: ${JSON.stringify(t.toJsonObject(), undefined, 2)}`);
            if (e.ok) {
                for (let n of e.value){
                    if (!this.entryMap.has(n)) {
                        ge(`Adding map entry for ${vi.endpointToString(n)}`);
                        this.entryMap.set(n, {
                            counter: new uv,
                            currentEjectionTimestamp: null,
                            ejectionTimeMultiplier: 0,
                            subchannelWrappers: []
                        });
                    }
                }
                this.entryMap.deleteMissing(e.value);
            }
            let s = t.getChildPolicy();
            this.childBalancer.updateAddressList(e, s, r, i);
            if (t.getSuccessRateEjectionConfig() || t.getFailurePercentageEjectionConfig()) {
                if (this.timerStartTime) {
                    ge("Previous timer existed. Replacing timer");
                    clearTimeout(this.ejectionTimer);
                    let n = t.getIntervalMs() - (new Date().getTime() - this.timerStartTime.getTime());
                    this.startTimer(n);
                } else {
                    ge("Starting new timer");
                    this.timerStartTime = new Date;
                    this.startTimer(t.getIntervalMs());
                    this.switchAllBuckets();
                }
            } else {
                ge("Counting disabled. Cancelling timer.");
                this.timerStartTime = null;
                clearTimeout(this.ejectionTimer);
                for (let n of this.entryMap.values()){
                    this.uneject(n);
                    n.ejectionTimeMultiplier = 0;
                }
            }
            this.latestConfig = t;
            return true;
        }
        exitIdle() {
            this.childBalancer.exitIdle();
        }
        resetBackoff() {
            this.childBalancer.resetBackoff();
        }
        destroy() {
            clearTimeout(this.ejectionTimer);
            this.childBalancer.destroy();
        }
        getTypeName() {
            return rl;
        }
    }
    hv.OutlierDetectionLoadBalancer = il;
    function vO() {
        if (pO) {
            Un.registerLoadBalancerType(rl, il, $i);
        }
    }
});
const yv = C(function(mv) {
    Object.defineProperty(mv, "__esModule", {
        value: true
    });
    mv.PriorityQueue = undefined;
    const yi = 0;
    const sl = (e)=>Math.floor(e / 2);
    const Bn = (e)=>e * 2 + 1;
    const Vi = (e)=>e * 2 + 2;
    class gv {
        constructor(e = (t, r)=>t > r){
            this.comparator = e;
            this.heap = [];
        }
        size() {
            return this.heap.length;
        }
        isEmpty() {
            return this.size() == 0;
        }
        peek() {
            return this.heap[yi];
        }
        push(...e) {
            e.forEach((t)=>{
                this.heap.push(t);
                this.siftUp();
            });
            return this.size();
        }
        pop() {
            let e = this.peek();
            let t = this.size() - 1;
            if (t > yi) {
                this.swap(yi, t);
            }
            this.heap.pop();
            this.siftDown();
            return e;
        }
        replace(e) {
            let t = this.peek();
            this.heap[yi] = e;
            this.siftDown();
            return t;
        }
        greater(e, t) {
            return this.comparator(this.heap[e], this.heap[t]);
        }
        swap(e, t) {
            [this.heap[e], this.heap[t]] = [
                this.heap[t],
                this.heap[e]
            ];
        }
        siftUp() {
            let e = this.size() - 1;
            while(e > yi && this.greater(e, sl(e))){
                this.swap(e, sl(e));
                e = sl(e);
            }
        }
        siftDown() {
            let e = yi;
            while(Bn(e) < this.size() && this.greater(Bn(e), e) || Vi(e) < this.size() && this.greater(Vi(e), e)){
                let t = Vi(e) < this.size() && this.greater(Vi(e), Bn(e)) ? Vi(e) : Bn(e);
                this.swap(e, t);
                e = t;
            }
        }
    }
    mv.PriorityQueue = gv;
});
const Av = C(function(Ov) {
    Object.defineProperty(Ov, "__esModule", {
        value: true
    });
    Ov.WeightedRoundRobinLoadBalancingConfig = undefined;
    Ov.setup = OO;
    const q = Ae();
    const Sv = k();
    const Q = zi();
    var Wn = Gt();
    const Cv = ji();
    const Ev = K();
    const jn = pn();
    const Qe = kt();
    const Tv = yv();
    const Hn = Pe();
    const SO = "weighted_round_robin";
    function nl(e) {
        Ev.trace(Sv.LogVerbosity.DEBUG, SO, e);
    }
    var al = "weighted_round_robin";
    const CO = 10000;
    const EO = 10000;
    const TO = 180000;
    const RO = 1000;
    const bO = 1;
    function _v(e, t, r) {
        if (t in e && e[t] !== undefined && typeof e[t] !== r) {
            throw Error(`weighted round robin config ${t} parse error: expected ${r}, got ${typeof e[t]}`);
        }
    }
    function zn(e, t) {
        if (t in e && e[t] !== undefined && e[t] !== null) {
            let r;
            if (Q.isDuration(e[t])) {
                r = e[t];
            } else if (Q.isDurationMessage(e[t])) {
                r = Q.durationMessageToDuration(e[t]);
            } else if (typeof e[t] === "string") {
                let i = Q.parseDuration(e[t]);
                if (!i) {
                    throw Error(`weighted round robin config ${t}: failed to parse duration string ${e[t]}`);
                }
                r = i;
            } else {
                throw Error(`weighted round robin config ${t}: expected duration, got ${typeof e[t]}`);
            }
            return Q.durationToMs(r);
        }
        return null;
    }
    class Yi {
        constructor(e, t, r, i, s, n){
            this.enableOobLoadReport = e ?? false;
            this.oobLoadReportingPeriodMs = t ?? CO;
            this.blackoutPeriodMs = r ?? EO;
            this.weightExpirationPeriodMs = i ?? TO;
            this.weightUpdatePeriodMs = Math.max(s ?? RO, 100);
            this.errorUtilizationPenalty = n ?? bO;
        }
        getLoadBalancerName() {
            return al;
        }
        toJsonObject() {
            return {
                enable_oob_load_report: this.enableOobLoadReport,
                oob_load_reporting_period: Q.durationToString(Q.msToDuration(this.oobLoadReportingPeriodMs)),
                blackout_period: Q.durationToString(Q.msToDuration(this.blackoutPeriodMs)),
                weight_expiration_period: Q.durationToString(Q.msToDuration(this.weightExpirationPeriodMs)),
                weight_update_period: Q.durationToString(Q.msToDuration(this.weightUpdatePeriodMs)),
                error_utilization_penalty: this.errorUtilizationPenalty
            };
        }
        static createFromJson(e) {
            _v(e, "enable_oob_load_report", "boolean");
            _v(e, "error_utilization_penalty", "number");
            if (e.error_utilization_penalty < 0) {
                throw Error("weighted round robin config error_utilization_penalty < 0");
            }
            return new Yi(e.enable_oob_load_report, zn(e, "oob_load_reporting_period"), zn(e, "blackout_period"), zn(e, "weight_expiration_period"), zn(e, "weight_update_period"), e.error_utilization_penalty);
        }
        getEnableOobLoadReport() {
            return this.enableOobLoadReport;
        }
        getOobLoadReportingPeriodMs() {
            return this.oobLoadReportingPeriodMs;
        }
        getBlackoutPeriodMs() {
            return this.blackoutPeriodMs;
        }
        getWeightExpirationPeriodMs() {
            return this.weightExpirationPeriodMs;
        }
        getWeightUpdatePeriodMs() {
            return this.weightUpdatePeriodMs;
        }
        getErrorUtilizationPenalty() {
            return this.errorUtilizationPenalty;
        }
    }
    Ov.WeightedRoundRobinLoadBalancingConfig = Yi;
    class Rv {
        constructor(e, t){
            this.metricsHandler = t;
            this.queue = new Tv.PriorityQueue((s, n)=>s.deadline < n.deadline);
            let r = e.filter((s)=>s.weight > 0);
            let i;
            if (r.length < 2) {
                i = 1;
            } else {
                let s = 0;
                for (let { weight } of r){
                    s += weight;
                }
                i = s / r.length;
            }
            for (let s of e){
                let period = s.weight > 0 ? 1 / s.weight : i;
                this.queue.push({
                    endpointName: s.endpointName,
                    picker: s.picker,
                    period,
                    deadline: Math.random() * period
                });
            }
        }
        pick(e) {
            let t = this.queue.pop();
            this.queue.push({
                ...t,
                deadline: t.deadline + t.period
            });
            let r = t.picker.pick(e);
            if (r.pickResultType === Qe.PickResultType.COMPLETE) {
                if (this.metricsHandler) {
                    return {
                        ...r,
                        onCallEnded: jn.createMetricsReader((i)=>this.metricsHandler(i, t.endpointName), r.onCallEnded)
                    };
                } else {
                    let i = r.subchannel;
                    return {
                        ...r,
                        subchannel: i.getWrappedSubchannel()
                    };
                }
            } else {
                return r;
            }
        }
    }
    class bv {
        constructor(e){
            this.channelControlHelper = e;
            this.latestConfig = null;
            this.children = new Map;
            this.currentState = q.ConnectivityState.IDLE;
            this.updatesPaused = false;
            this.lastError = null;
            this.weightUpdateTimer = null;
        }
        countChildrenWithState(e) {
            let t = 0;
            for (let r of this.children.values()){
                if (r.child.getConnectivityState() === e) {
                    t += 1;
                }
            }
            return t;
        }
        updateWeight(e, t) {
            let { rps_fractional, application_utilization } = t;
            if (application_utilization > 0 && rps_fractional > 0) {
                application_utilization += t.eps / rps_fractional * (this.latestConfig?.getErrorUtilizationPenalty() ?? 0);
            }
            let a = application_utilization === 0 ? 0 : rps_fractional / application_utilization;
            if (a === 0) {
                return;
            }
            let o = new Date;
            if (e.nonEmptySince === null) {
                e.nonEmptySince = o;
            }
            e.lastUpdated = o;
            e.weight = a;
        }
        getWeight(e) {
            if (!this.latestConfig) {
                return 0;
            }
            let t = new Date().getTime();
            if (t - e.lastUpdated.getTime() >= this.latestConfig.getWeightExpirationPeriodMs()) {
                e.nonEmptySince = null;
                return 0;
            }
            let r = this.latestConfig.getBlackoutPeriodMs();
            if (r > 0 && (e.nonEmptySince === null || t - e.nonEmptySince.getTime() < r)) {
                return 0;
            }
            return e.weight;
        }
        calculateAndUpdateState() {
            if (this.updatesPaused || !this.latestConfig) {
                return;
            }
            if (this.countChildrenWithState(q.ConnectivityState.READY) > 0) {
                let e = [];
                for (let [endpointName, i] of this.children){
                    if (i.child.getConnectivityState() !== q.ConnectivityState.READY) {
                        continue;
                    }
                    e.push({
                        endpointName,
                        picker: i.child.getPicker(),
                        weight: this.getWeight(i)
                    });
                }
                nl(`Created picker with weights: ${e.map((r)=>`${r.endpointName}:${r.weight}`).join(",")}`);
                let t;
                if (!this.latestConfig.getEnableOobLoadReport()) {
                    t = (r, i)=>{
                        let s = this.children.get(i);
                        if (s) {
                            this.updateWeight(s, r);
                        }
                    };
                } else {
                    t = null;
                }
                this.updateState(q.ConnectivityState.READY, new Rv(e, t), null);
            } else if (this.countChildrenWithState(q.ConnectivityState.CONNECTING) > 0) {
                this.updateState(q.ConnectivityState.CONNECTING, new Qe.QueuePicker(this), null);
            } else if (this.countChildrenWithState(q.ConnectivityState.TRANSIENT_FAILURE) > 0) {
                let e = `weighted_round_robin: No connection established. Last error: ${this.lastError}`;
                this.updateState(q.ConnectivityState.TRANSIENT_FAILURE, new Qe.UnavailablePicker({
                    details: e
                }), e);
            } else {
                this.updateState(q.ConnectivityState.IDLE, new Qe.QueuePicker(this), null);
            }
            for (let { child } of this.children.values()){
                if (child.getConnectivityState() === q.ConnectivityState.IDLE) {
                    child.exitIdle();
                }
            }
        }
        updateState(e, t, r) {
            nl(`${q.ConnectivityState[this.currentState]} -> ${q.ConnectivityState[e]}`);
            this.currentState = e;
            this.channelControlHelper.updateState(e, t, r);
        }
        updateAddressList(e, t, r, i) {
            if (!(t instanceof Yi)) {
                return false;
            }
            if (!e.ok) {
                if (this.children.size === 0) {
                    this.updateState(q.ConnectivityState.TRANSIENT_FAILURE, new Qe.UnavailablePicker(e.error), e.error.details);
                }
                return true;
            }
            if (e.value.length === 0) {
                let l = `No addresses resolved. Resolution note: ${i}`;
                this.updateState(q.ConnectivityState.TRANSIENT_FAILURE, new Qe.UnavailablePicker({
                    details: l
                }), l);
                return false;
            }
            nl(`Connect to endpoint list ${e.value.map(Hn.endpointToString)}`);
            let lastUpdated = new Date;
            let o = new Set;
            this.updatesPaused = true;
            this.latestConfig = t;
            for (let l of e.value){
                let c = Hn.endpointToString(l);
                o.add(c);
                let u = this.children.get(c);
                if (!u) {
                    u = {
                        child: new Cv.LeafLoadBalancer(l, Wn.createChildChannelControlHelper(this.channelControlHelper, {
                            updateState: (d, h, m)=>{
                                if (this.currentState === q.ConnectivityState.READY && d !== q.ConnectivityState.READY) {
                                    this.channelControlHelper.requestReresolution();
                                }
                                if (d === q.ConnectivityState.READY) {
                                    u.nonEmptySince = null;
                                }
                                if (m) {
                                    this.lastError = m;
                                }
                                this.calculateAndUpdateState();
                            },
                            createSubchannel: (d, h)=>{
                                let m = this.channelControlHelper.createSubchannel(d, h);
                                if (u?.oobMetricsListener) {
                                    return new jn.OrcaOobMetricsSubchannelWrapper(m, u.oobMetricsListener, this.latestConfig.getOobLoadReportingPeriodMs());
                                } else {
                                    return m;
                                }
                            }
                        }), r, i),
                        lastUpdated,
                        nonEmptySince: null,
                        weight: 0,
                        oobMetricsListener: null
                    };
                    this.children.set(c, u);
                }
                if (t.getEnableOobLoadReport()) {
                    u.oobMetricsListener = (d)=>{
                        this.updateWeight(u, d);
                    };
                } else {
                    u.oobMetricsListener = null;
                }
            }
            for (let [l, c] of this.children){
                if (o.has(l)) {
                    c.child.startConnecting();
                } else {
                    c.child.destroy();
                    this.children.delete(l);
                }
            }
            this.updatesPaused = false;
            this.calculateAndUpdateState();
            if (this.weightUpdateTimer) {
                clearInterval(this.weightUpdateTimer);
            }
            this.weightUpdateTimer = setInterval(()=>{
                if (this.currentState === q.ConnectivityState.READY) {
                    this.calculateAndUpdateState();
                }
            }, t.getWeightUpdatePeriodMs()).unref?.();
            return true;
        }
        exitIdle() {}
        resetBackoff() {}
        destroy() {
            for (let e of this.children.values()){
                e.child.destroy();
            }
            this.children.clear();
            if (this.weightUpdateTimer) {
                clearInterval(this.weightUpdateTimer);
            }
        }
        getTypeName() {
            return al;
        }
    }
    function OO() {
        Wn.registerLoadBalancerType(al, bv, Yi);
    }
});
const Ki = C(function(G) {
    Object.defineProperty(G, "__esModule", {
        value: true
    });
    G.experimental = G.ServerMetricRecorder = G.ServerInterceptingCall = G.ResponderBuilder = G.ServerListenerBuilder = G.addAdminServicesToServer = G.getChannelzHandlers = G.getChannelzServiceDefinition = G.InterceptorConfigurationError = G.InterceptingCall = G.RequesterBuilder = G.ListenerBuilder = G.StatusBuilder = G.getClientChannel = G.ServerCredentials = G.Server = G.setLogVerbosity = G.setLogger = G.load = G.loadObject = G.CallCredentials = G.ChannelCredentials = G.waitForClientReady = G.closeClient = G.Channel = G.makeGenericClientConstructor = G.makeClientConstructor = G.loadPackageDefinition = G.Client = G.compressionAlgorithms = G.propagate = G.connectivityState = G.status = G.logVerbosity = G.Metadata = G.credentials = undefined;
    const fr = rs();
    Object.defineProperty(G, "CallCredentials", {
        enumerable: true,
        get: function() {
            return fr.CallCredentials;
        }
    });
    const Pv = Ra();
    Object.defineProperty(G, "Channel", {
        enumerable: true,
        get: function() {
            return Pv.ChannelImplementation;
        }
    });
    const Nv = So();
    Object.defineProperty(G, "compressionAlgorithms", {
        enumerable: true,
        get: function() {
            return Nv.CompressionAlgorithms;
        }
    });
    const Mv = Ae();
    Object.defineProperty(G, "connectivityState", {
        enumerable: true,
        get: function() {
            return Mv.ConnectivityState;
        }
    });
    const pr = Mr();
    Object.defineProperty(G, "ChannelCredentials", {
        enumerable: true,
        get: function() {
            return pr.ChannelCredentials;
        }
    });
    const Gn = Ta();
    Object.defineProperty(G, "Client", {
        enumerable: true,
        get: function() {
            return Gn.Client;
        }
    });
    const _i = k();
    Object.defineProperty(G, "logVerbosity", {
        enumerable: true,
        get: function() {
            return _i.LogVerbosity;
        }
    });
    Object.defineProperty(G, "status", {
        enumerable: true,
        get: function() {
            return _i.Status;
        }
    });
    Object.defineProperty(G, "propagate", {
        enumerable: true,
        get: function() {
            return _i.Propagate;
        }
    });
    const $n = K();
    const Si = vs();
    Object.defineProperty(G, "loadPackageDefinition", {
        enumerable: true,
        get: function() {
            return Si.loadPackageDefinition;
        }
    });
    Object.defineProperty(G, "makeClientConstructor", {
        enumerable: true,
        get: function() {
            return Si.makeClientConstructor;
        }
    });
    Object.defineProperty(G, "makeGenericClientConstructor", {
        enumerable: true,
        get: function() {
            return Si.makeClientConstructor;
        }
    });
    const Iv = ue();
    Object.defineProperty(G, "Metadata", {
        enumerable: true,
        get: function() {
            return Iv.Metadata;
        }
    });
    const xv = hm();
    Object.defineProperty(G, "Server", {
        enumerable: true,
        get: function() {
            return xv.Server;
        }
    });
    const kv = dn();
    Object.defineProperty(G, "ServerCredentials", {
        enumerable: true,
        get: function() {
            return kv.ServerCredentials;
        }
    });
    const Dv = mm();
    Object.defineProperty(G, "StatusBuilder", {
        enumerable: true,
        get: function() {
            return Dv.StatusBuilder;
        }
    });
    G.credentials = {
        combineChannelCredentials: (e, ...t)=>t.reduce((acc, item)=>acc.compose(item), e),
        combineCallCredentials: (e, ...t)=>t.reduce((acc, item)=>acc.compose(item), e),
        createInsecure: pr.ChannelCredentials.createInsecure,
        createSsl: pr.ChannelCredentials.createSsl,
        createFromSecureContext: pr.ChannelCredentials.createFromSecureContext,
        createFromMetadataGenerator: fr.CallCredentials.createFromMetadataGenerator,
        createFromGoogleCredential: fr.CallCredentials.createFromGoogleCredential,
        createEmpty: fr.CallCredentials.createEmpty
    };
    const AO = (e)=>e.close();
    G.closeClient = AO;
    const PO = (e, t, r)=>e.waitForReady(t, r);
    G.waitForClientReady = PO;
    const NO = (e, t)=>{
        throw Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
    };
    G.loadObject = NO;
    const MO = (e, t, r)=>{
        throw Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
    };
    G.load = MO;
    const IO = (e)=>{
        $n.setLogger(e);
    };
    G.setLogger = IO;
    const xO = (e)=>{
        $n.setLoggerVerbosity(e);
    };
    G.setLogVerbosity = xO;
    const kO = (e)=>Gn.Client.prototype.getChannel.call(e);
    G.getClientChannel = kO;
    const Vn = Ca();
    Object.defineProperty(G, "ListenerBuilder", {
        enumerable: true,
        get: function() {
            return Vn.ListenerBuilder;
        }
    });
    Object.defineProperty(G, "RequesterBuilder", {
        enumerable: true,
        get: function() {
            return Vn.RequesterBuilder;
        }
    });
    Object.defineProperty(G, "InterceptingCall", {
        enumerable: true,
        get: function() {
            return Vn.InterceptingCall;
        }
    });
    Object.defineProperty(G, "InterceptorConfigurationError", {
        enumerable: true,
        get: function() {
            return Vn.InterceptorConfigurationError;
        }
    });
    const Lv = Zt();
    Object.defineProperty(G, "getChannelzServiceDefinition", {
        enumerable: true,
        get: function() {
            return Lv.getChannelzServiceDefinition;
        }
    });
    Object.defineProperty(G, "getChannelzHandlers", {
        enumerable: true,
        get: function() {
            return Lv.getChannelzHandlers;
        }
    });
    const DO = fs();
    Object.defineProperty(G, "addAdminServicesToServer", {
        enumerable: true,
        get: function() {
            return DO.addAdminServicesToServer;
        }
    });
    const ol = Ho();
    Object.defineProperty(G, "ServerListenerBuilder", {
        enumerable: true,
        get: function() {
            return ol.ServerListenerBuilder;
        }
    });
    Object.defineProperty(G, "ResponderBuilder", {
        enumerable: true,
        get: function() {
            return ol.ResponderBuilder;
        }
    });
    Object.defineProperty(G, "ServerInterceptingCall", {
        enumerable: true,
        get: function() {
            return ol.ServerInterceptingCall;
        }
    });
    const LO = pn();
    Object.defineProperty(G, "ServerMetricRecorder", {
        enumerable: true,
        get: function() {
            return LO.ServerMetricRecorder;
        }
    });
    const FO = Yo();
    G.experimental = FO;
    const Fv = wo();
    const qv = Wm();
    const Uv = Ym();
    const Bv = ji();
    const zv = rv();
    const Hv = pv();
    const Wv = Av();
    const jv = Zt();
    (()=>{
        Fv.setup();
        qv.setup();
        Uv.setup();
        Bv.setup();
        zv.setup();
        Hv.setup();
        Wv.setup();
        jv.setup();
    })();
});
const Kv = C(function(Vv) {
    Object.defineProperty(Vv, "__esModule", {
        value: true
    });
    Vv.createServiceClientConstructor = undefined;
    const $v = Ki();
    function $O(e, t) {
        return $v.makeGenericClientConstructor({
            export: {
                path: e,
                requestStream: false,
                responseStream: false,
                requestSerialize: (i)=>i,
                requestDeserialize: (i)=>i,
                responseSerialize: (i)=>i,
                responseDeserialize: (i)=>i
            }
        }, t);
    }
    Vv.createServiceClientConstructor = $O;
});
const Ji = C(function(Qv) {
    Object.defineProperty(Qv, "__esModule", {
        value: true
    });
    Qv.createOtlpGrpcExporterTransport = Qv.GrpcExporterTransport = Qv.createEmptyMetadata = Qv.createSslCredentials = Qv.createInsecureCredentials = undefined;
    const Xv = ml();
    const Jv = `OTel-OTLP-Exporter-JavaScript/${Xv.VERSION}`;
    function VO(userAgent) {
        if (userAgent) {
            return `${userAgent} ${Jv}`;
        }
        return Jv;
    }
    const YO = 0;
    const KO = 2;
    function JO(compression) {
        if (compression === "gzip") {
            return KO;
        }
        return YO;
    }
    function XO() {
        let { credentials } = Ki();
        return credentials.createInsecure();
    }
    Qv.createInsecureCredentials = XO;
    function QO(e, t, r) {
        let { credentials } = Ki();
        return credentials.createSsl(e, t, r);
    }
    Qv.createSslCredentials = QO;
    function ZO() {
        let { Metadata } = Ki();
        return new Metadata;
    }
    Qv.createEmptyMetadata = ZO;
    class ll {
        _parameters;
        _client;
        _metadata;
        constructor(e){
            this._parameters = e;
        }
        shutdown() {
            this._client?.close();
        }
        send(e, t) {
            let r = Buffer.from(e);
            if (this._client == null) {
                let { createServiceClientConstructor } = Kv();
                try {
                    this._metadata = this._parameters.metadata();
                } catch (error) {
                    return Promise.resolve({
                        status: "failure",
                        error
                    });
                }
                let s = createServiceClientConstructor(this._parameters.grpcPath, this._parameters.grpcName);
                try {
                    this._client = new s(this._parameters.address, this._parameters.credentials(), {
                        "grpc.default_compression_algorithm": JO(this._parameters.compression),
                        "grpc.primary_user_agent": VO(this._parameters.userAgent)
                    });
                } catch (error) {
                    return Promise.resolve({
                        status: "failure",
                        error
                    });
                }
            }
            return new Promise((resolve)=>{
                let s = Date.now() + t;
                if (this._metadata == null) {
                    return resolve({
                        error: Error("metadata was null"),
                        status: "failure"
                    });
                }
                this._client.export(r, this._metadata, {
                    deadline: s
                }, (error, data)=>{
                    if (error) {
                        resolve({
                            status: "failure",
                            error
                        });
                    } else {
                        resolve({
                            data,
                            status: "success"
                        });
                    }
                });
            });
        }
    }
    Qv.GrpcExporterTransport = ll;
    function ew(e) {
        return new ll(e);
    }
    Qv.createOtlpGrpcExporterTransport = ew;
});
const ny = C(function(iy) {
    Object.defineProperty(iy, "__esModule", {
        value: true
    });
    iy.getOtlpGrpcDefaultConfiguration = iy.mergeOtlpGrpcConfigurationWithDefaults = iy.validateAndNormalizeUrl = undefined;
    const Kn = uK();
    const It = Ji();
    const ty = Le("url");
    const Yn = Da();
    function ry(e) {
        e = e.trim();
        if (!e.match(/^([\w]{1,8}):\/\//)) {
            e = `https://${e}`;
        }
        let r = new ty.URL(e);
        if (r.protocol === "unix:") {
            return e;
        }
        if (r.pathname && r.pathname !== "/") {
            Yn.diag.warn("URL path should not be set when using grpc, the path part of the URL will be ignored.");
        }
        if (r.protocol !== "" && !r.protocol?.match(/^(http)s?:$/)) {
            Yn.diag.warn("URL protocol should be http(s)://. Using http://.");
        }
        return r.host;
    }
    iy.validateAndNormalizeUrl = ry;
    function ey(e, t) {
        for (let [r, i] of Object.entries(t.getMap())){
            if (e.get(r).length < 1) {
                e.set(r, i);
            }
        }
    }
    function nw(e, t, r) {
        let i = e.url ?? t.url ?? r.url;
        return {
            ...Kn.mergeOtlpSharedConfigurationWithDefaults(e, t, r),
            metadata: ()=>{
                let s = r.metadata();
                ey(s, e.metadata?.().clone() ?? It.createEmptyMetadata());
                ey(s, t.metadata?.() ?? It.createEmptyMetadata());
                return s;
            },
            url: ry(i),
            credentials: e.credentials ?? t.credentials?.(i) ?? r.credentials(i),
            userAgent: e.userAgent
        };
    }
    iy.mergeOtlpGrpcConfigurationWithDefaults = nw;
    function aw() {
        return {
            ...Kn.getSharedConfigurationDefaults(),
            metadata: ()=>It.createEmptyMetadata(),
            url: "http://localhost:4317",
            credentials: (e)=>{
                if (e.startsWith("http://")) {
                    return ()=>It.createInsecureCredentials();
                } else {
                    return ()=>It.createSslCredentials();
                }
            }
        };
    }
    iy.getOtlpGrpcDefaultConfiguration = aw;
});
const fy = C(function(dy) {
    Object.defineProperty(dy, "__esModule", {
        value: true
    });
    dy.getOtlpGrpcConfigurationFromEnv = undefined;
    const Jn = Of();
    const xt = Ji();
    const oy = gX();
    const ly = Le("fs");
    const cy = Le("path");
    const Xn = Da();
    function cl(e, t) {
        if (e != null && e !== "") {
            return e;
        }
        if (t != null && t !== "") {
            return t;
        }
    }
    function cw(e) {
        let t = process.env[`OTEL_EXPORTER_OTLP_${e}_HEADERS`]?.trim();
        let r = process.env.OTEL_EXPORTER_OTLP_HEADERS?.trim();
        let i = Jn.parseKeyPairsIntoRecord(t);
        let s = Jn.parseKeyPairsIntoRecord(r);
        if (Object.keys(i).length === 0 && Object.keys(s).length === 0) {
            return;
        }
        let n = {
            ...s,
            ...i
        };
        let a = xt.createEmptyMetadata();
        for (let [o, l] of Object.entries(n)){
            a.set(o, l);
        }
        return a;
    }
    function uw(e) {
        let t = cw(e);
        if (t == null) {
            return;
        }
        return ()=>t;
    }
    function dw(e) {
        let t = process.env[`OTEL_EXPORTER_OTLP_${e}_ENDPOINT`]?.trim();
        let r = process.env.OTEL_EXPORTER_OTLP_ENDPOINT?.trim();
        return cl(t, r);
    }
    function hw(e) {
        let t = process.env[`OTEL_EXPORTER_OTLP_${e}_INSECURE`]?.toLowerCase().trim();
        let r = process.env.OTEL_EXPORTER_OTLP_INSECURE?.toLowerCase().trim();
        return cl(t, r) === "true";
    }
    function ul(e, t, r) {
        let i = process.env[e]?.trim();
        let s = process.env[t]?.trim();
        let n = cl(i, s);
        if (n != null) {
            try {
                return ly.readFileSync(cy.resolve(process.cwd(), n));
            } catch  {
                Xn.diag.warn(r);
                return;
            }
        } else {
            return;
        }
    }
    function fw(e) {
        return ul(`OTEL_EXPORTER_OTLP_${e}_CLIENT_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE", "Failed to read client certificate chain file");
    }
    function pw(e) {
        return ul(`OTEL_EXPORTER_OTLP_${e}_CLIENT_KEY`, "OTEL_EXPORTER_OTLP_CLIENT_KEY", "Failed to read client certificate private key file");
    }
    function ay(e) {
        return ul(`OTEL_EXPORTER_OTLP_${e}_CERTIFICATE`, "OTEL_EXPORTER_OTLP_CERTIFICATE", "Failed to read root certificate file");
    }
    function uy(e) {
        let t = pw(e);
        let r = fw(e);
        let i = ay(e);
        let s = t != null && r != null;
        if (i != null && !s) {
            Xn.diag.warn("Client key and certificate must both be provided, but one was missing - attempting to create credentials from just the root certificate");
            return xt.createSslCredentials(ay(e));
        }
        return xt.createSslCredentials(i, t, r);
    }
    function gw(e) {
        if (hw(e)) {
            return xt.createInsecureCredentials();
        }
        return uy(e);
    }
    function mw(e) {
        return {
            ...oy.getSharedConfigurationFromEnvironment(e),
            metadata: uw(e),
            url: dw(e),
            credentials: (t)=>{
                if (t.startsWith("http://")) {
                    return ()=>xt.createInsecureCredentials();
                } else if (t.startsWith("https://")) {
                    return ()=>uy(e);
                }
                return ()=>gw(e);
            }
        };
    }
    dy.getOtlpGrpcConfigurationFromEnv = mw;
});
const _y = C(function(vy) {
    Object.defineProperty(vy, "__esModule", {
        value: true
    });
    vy.convertLegacyOtlpGrpcOptions = undefined;
    const py = Da();
    const Qn = ny();
    const gy = Ji();
    const my = fy();
    function vw(e, t) {
        if (e.headers) {
            py.diag.warn("Headers cannot be set when using grpc");
        }
        let e_credentials = e.credentials;
        return Qn.mergeOtlpGrpcConfigurationWithDefaults({
            url: e.url,
            metadata: ()=>e.metadata ?? gy.createEmptyMetadata(),
            compression: e.compression,
            timeoutMillis: e.timeoutMillis,
            concurrencyLimit: e.concurrencyLimit,
            credentials: e_credentials != null ? ()=>e_credentials : undefined,
            userAgent: e.userAgent
        }, my.getOtlpGrpcConfigurationFromEnv(t), Qn.getOtlpGrpcDefaultConfiguration());
    }
    vy.convertLegacyOtlpGrpcOptions = vw;
});
const Ry = C(function(Ey) {
    Object.defineProperty(Ey, "__esModule", {
        value: true
    });
    Ey.createOtlpGrpcExportDelegate = undefined;
    const Sy = uK();
    const Cy = Ji();
    function yw(e, t, grpcName, grpcPath) {
        return Sy.createOtlpNetworkExportDelegate(e, t, Cy.createOtlpGrpcExporterTransport({
            address: e.url,
            compression: e.compression,
            credentials: e.credentials,
            metadata: e.metadata,
            userAgent: e.userAgent,
            grpcName,
            grpcPath
        }));
    }
    Ey.createOtlpGrpcExportDelegate = yw;
});
export const bjt = C(function(Zn) {
    Object.defineProperty(Zn, "__esModule", {
        value: true
    });
    Zn.createOtlpGrpcExportDelegate = Zn.convertLegacyOtlpGrpcOptions = undefined;
    const _w = _y();
    Object.defineProperty(Zn, "convertLegacyOtlpGrpcOptions", {
        enumerable: true,
        get: function() {
            return _w.convertLegacyOtlpGrpcOptions;
        }
    });
    const Sw = Ry();
    Object.defineProperty(Zn, "createOtlpGrpcExportDelegate", {
        enumerable: true,
        get: function() {
            return Sw.createOtlpGrpcExportDelegate;
        }
    });
});
