import { Lmo, xb } from "/$bunfs/root/chunk-4r8zj2v5.js";
import { nP } from "/$bunfs/root/chunk-964dstky.js";
import { t0 } from "/$bunfs/root/chunk-nh84xq74.js";
import { uY, Fk } from "/$bunfs/root/chunk-dvxpnma3.js";
import { OYe } from "/$bunfs/root/chunk-2e6e7dc3.js";
import { GW } from "/$bunfs/root/chunk-xy7epjk2.js";
import { Rd } from "/$bunfs/root/chunk-gxstjgam.js";
import { Zx, $mo, NPt, Vat } from "/$bunfs/root/chunk-sw8e7v35.js";
import { eP } from "/$bunfs/root/chunk-53tyrfzz.js";
import { tP } from "/$bunfs/root/chunk-04nmpby8.js";
import { Hm } from "/$bunfs/root/chunk-3vxngrsq.js";
import { jm } from "/$bunfs/root/chunk-55x53sfe.js";
import { pDt, Qk, $R } from "/$bunfs/root/chunk-dze6yaxw.js";
import { C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const goe = C(function(oo) {
    const so = jm();
    function no(e) {
        return e;
    }
    const zr = (e)=>(t)=>async (r)=>{
                if (!so.HttpRequest.isInstance(r.request)) {
                    return t(r);
                }
                let { request } = r;
                let { handlerProtocol = "" } = e.requestHandler.metadata || {};
                if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
                    delete request.headers.host;
                    request.headers[":authority"] = request.hostname + (request.port ? `:${request.port}` : "");
                } else if (!request.headers.host) {
                    let a = request.hostname;
                    if (request.port != null) {
                        a += `:${request.port}`;
                    }
                    request.headers.host = a;
                }
                return t(r);
            };
    const $r = {
        name: "hostHeaderMiddleware",
        step: "build",
        priority: "low",
        tags: [
            "HOST"
        ],
        override: true
    };
    const io = (e)=>({
            applyToStack: (t)=>{
                t.add(zr(e), $r);
            }
        });
    oo.getHostHeaderPlugin = io;
    oo.hostHeaderMiddleware = zr;
    oo.hostHeaderMiddlewareOptions = $r;
    oo.resolveHostHeaderConfig = no;
});
const hoe = C(function(fo) {
    const Br = ()=>(e, t)=>async (r)=>{
                try {
                    let s = await e(r);
                    let { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = t;
                    let { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
                    let y = overrideInputFilterSensitiveLog ?? t.inputFilterSensitiveLog;
                    let b = overrideOutputFilterSensitiveLog ?? t.outputFilterSensitiveLog;
                    let { $metadata, ...rest } = s.output;
                    logger?.info?.({
                        clientName,
                        commandName,
                        input: y(r.input),
                        output: b(rest),
                        metadata: $metadata
                    });
                    return s;
                } catch (error) {
                    let { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = t;
                    let { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
                    let m = overrideInputFilterSensitiveLog ?? t.inputFilterSensitiveLog;
                    logger?.error?.({
                        clientName,
                        commandName,
                        input: m(r.input),
                        error,
                        metadata: error.$metadata
                    });
                    throw error;
                }
            };
    const Lr = {
        name: "loggerMiddleware",
        tags: [
            "LOGGER"
        ],
        step: "initialize",
        override: true
    };
    const ho = (e)=>({
            applyToStack: (t)=>{
                t.add(Br(), Lr);
            }
        });
    fo.getLoggerPlugin = ho;
    fo.loggerMiddleware = Br;
    fo.loggerMiddlewareOptions = Lr;
});
const Vr = C(function(yo) {
    const ve = {
        REQUEST_ID: Symbol.for("_AWS_LAMBDA_REQUEST_ID"),
        X_RAY_TRACE_ID: Symbol.for("_AWS_LAMBDA_X_RAY_TRACE_ID"),
        TENANT_ID: Symbol.for("_AWS_LAMBDA_TENANT_ID")
    };
    const xt = [
        "true",
        "1"
    ].includes(process.env?.AWS_LAMBDA_NODEJS_NO_GLOBAL_AWSLAMBDA ?? "");
    if (!xt) {
        globalThis.awslambda = globalThis.awslambda || {};
    }
    class Xe {
        static PROTECTED_KEYS = ve;
        isProtectedKey(e) {
            return Object.values(ve).includes(e);
        }
        getRequestId() {
            return this.get(ve.REQUEST_ID) ?? "-";
        }
        getXRayTraceId() {
            return this.get(ve.X_RAY_TRACE_ID);
        }
        getTenantId() {
            return this.get(ve.TENANT_ID);
        }
    }
    class Ur extends Xe {
        currentContext;
        getContext() {
            return this.currentContext;
        }
        hasContext() {
            return this.currentContext !== undefined;
        }
        get(e) {
            return this.currentContext?.[e];
        }
        set(e, t) {
            if (this.isProtectedKey(e)) {
                throw Error(`Cannot modify protected Lambda context field: ${String(e)}`);
            }
            this.currentContext = this.currentContext || {};
            this.currentContext[e] = t;
        }
        run(e, t) {
            this.currentContext = e;
            try {
                return t();
            } finally{
                this.currentContext = undefined;
            }
        }
    }
    class Nt extends Xe {
        als;
        static async create() {
            let e = new Nt;
            let t = await import("async_hooks");
            e.als = new t.AsyncLocalStorage;
            return e;
        }
        getContext() {
            return this.als.getStore();
        }
        hasContext() {
            return this.als.getStore() !== undefined;
        }
        get(e) {
            return this.als.getStore()?.[e];
        }
        set(e, t) {
            if (this.isProtectedKey(e)) {
                throw Error(`Cannot modify protected Lambda context field: ${String(e)}`);
            }
            let r = this.als.getStore();
            if (!r) {
                throw Error("No context available");
            }
            r[e] = t;
        }
        run(e, t) {
            return this.als.run(e, t);
        }
    }
    yo.InvokeStore = undefined;
    ((e)=>{
        let t = null;
        async function r() {
            if (!t) {
                t = (async ()=>{
                    let o = "AWS_LAMBDA_MAX_CONCURRENCY" in process.env ? await Nt.create() : new Ur;
                    if (!xt && globalThis.awslambda?.InvokeStore) {
                        return globalThis.awslambda.InvokeStore;
                    } else if (!xt && globalThis.awslambda) {
                        globalThis.awslambda.InvokeStore = o;
                        return o;
                    } else {
                        return o;
                    }
                })();
            }
            return t;
        }
        e.getInstanceAsync = r;
        e._testing = process.env.AWS_LAMBDA_BENCHMARK_MODE === "1" ? {
            reset: ()=>{
                t = null;
                if (globalThis.awslambda?.InvokeStore) {
                    delete globalThis.awslambda.InvokeStore;
                }
                globalThis.awslambda = {};
            }
        } : undefined;
    })(yo.InvokeStore || (yo.InvokeStore = {}));
    yo.InvokeStoreBase = Xe;
});
const Gr = C(function(qr) {
    Object.defineProperty(qr, "__esModule", {
        value: true
    });
    qr.recursionDetectionMiddleware = undefined;
    const Fr = Vr();
    const jr = jm();
    const Tt = "X-Amzn-Trace-Id";
    const So = "AWS_LAMBDA_FUNCTION_NAME";
    const wo = "_X_AMZN_TRACE_ID";
    const xo = ()=>(e)=>async (t)=>{
                let { request } = t;
                if (!jr.HttpRequest.isInstance(request)) {
                    return e(t);
                }
                let s = Object.keys(request.headers ?? {}).find((y)=>y.toLowerCase() === Tt.toLowerCase()) ?? Tt;
                if (request.headers.hasOwnProperty(s)) {
                    return e(t);
                }
                let o = process.env[So];
                let a = process.env[wo];
                let f = (await Fr.InvokeStore.getInstanceAsync())?.getXRayTraceId() ?? a;
                let m = (y)=>typeof y === "string" && y.length > 0;
                if (m(o) && m(f)) {
                    request.headers[Tt] = f;
                }
                return e({
                    ...t,
                    request
                });
            };
    qr.recursionDetectionMiddleware = xo;
});
const yoe = C(function(Ct) {
    const _t = Gr();
    const bo = {
        step: "build",
        tags: [
            "RECURSION_DETECTION"
        ],
        name: "recursionDetectionMiddleware",
        override: true,
        priority: "low"
    };
    const No = (e)=>({
            applyToStack: (t)=>{
                t.add(_t.recursionDetectionMiddleware(), bo);
            }
        });
    Ct.getRecursionDetectionPlugin = No;
    Object.keys(_t).forEach((e)=>{
        if (e !== "default" && !Object.prototype.hasOwnProperty.call(Ct, e)) {
            Object.defineProperty(Ct, e, {
                enumerable: true,
                get: function() {
                    return _t[e];
                }
            });
        }
    });
});
const t7 = C(function(We) {
    const Ce = uY();
    const _o = GW();
    const isVirtualHostableS3Bucket = (e, t = false)=>{
        if (t) {
            for (let r of e.split(".")){
                if (!isVirtualHostableS3Bucket(r)) {
                    return false;
                }
            }
            return true;
        }
        if (!Ce.isValidHostLabel(e)) {
            return false;
        }
        if (e.length < 3 || e.length > 63) {
            return false;
        }
        if (e !== e.toLowerCase()) {
            return false;
        }
        if (Ce.isIpAddress(e)) {
            return false;
        }
        return true;
    };
    const Xr = ":";
    const Co = "/";
    const parseArn = (e)=>{
        let t = e.split(Xr);
        if (t.length < 6) {
            return null;
        }
        let [r, s, o, region, accountId, ...d] = t;
        if (r !== "arn" || s === "" || o === "" || d.join(Xr) === "") {
            return null;
        }
        let resourceId = d.map((m)=>m.split(Co)).flat();
        return {
            partition: s,
            service: o,
            region,
            accountId,
            resourceId
        };
    };
    const partitions = [
        {
            id: "aws",
            outputs: {
                dnsSuffix: "amazonaws.com",
                dualStackDnsSuffix: "api.aws",
                implicitGlobalRegion: "us-east-1",
                name: "aws",
                supportsDualStack: true,
                supportsFIPS: true
            },
            regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
            regions: {
                "af-south-1": {
                    description: "Africa (Cape Town)"
                },
                "ap-east-1": {
                    description: "Asia Pacific (Hong Kong)"
                },
                "ap-east-2": {
                    description: "Asia Pacific (Taipei)"
                },
                "ap-northeast-1": {
                    description: "Asia Pacific (Tokyo)"
                },
                "ap-northeast-2": {
                    description: "Asia Pacific (Seoul)"
                },
                "ap-northeast-3": {
                    description: "Asia Pacific (Osaka)"
                },
                "ap-south-1": {
                    description: "Asia Pacific (Mumbai)"
                },
                "ap-south-2": {
                    description: "Asia Pacific (Hyderabad)"
                },
                "ap-southeast-1": {
                    description: "Asia Pacific (Singapore)"
                },
                "ap-southeast-2": {
                    description: "Asia Pacific (Sydney)"
                },
                "ap-southeast-3": {
                    description: "Asia Pacific (Jakarta)"
                },
                "ap-southeast-4": {
                    description: "Asia Pacific (Melbourne)"
                },
                "ap-southeast-5": {
                    description: "Asia Pacific (Malaysia)"
                },
                "ap-southeast-6": {
                    description: "Asia Pacific (New Zealand)"
                },
                "ap-southeast-7": {
                    description: "Asia Pacific (Thailand)"
                },
                "aws-global": {
                    description: "aws global region"
                },
                "ca-central-1": {
                    description: "Canada (Central)"
                },
                "ca-west-1": {
                    description: "Canada West (Calgary)"
                },
                "eu-central-1": {
                    description: "Europe (Frankfurt)"
                },
                "eu-central-2": {
                    description: "Europe (Zurich)"
                },
                "eu-north-1": {
                    description: "Europe (Stockholm)"
                },
                "eu-south-1": {
                    description: "Europe (Milan)"
                },
                "eu-south-2": {
                    description: "Europe (Spain)"
                },
                "eu-west-1": {
                    description: "Europe (Ireland)"
                },
                "eu-west-2": {
                    description: "Europe (London)"
                },
                "eu-west-3": {
                    description: "Europe (Paris)"
                },
                "il-central-1": {
                    description: "Israel (Tel Aviv)"
                },
                "me-central-1": {
                    description: "Middle East (UAE)"
                },
                "me-south-1": {
                    description: "Middle East (Bahrain)"
                },
                "mx-central-1": {
                    description: "Mexico (Central)"
                },
                "sa-east-1": {
                    description: "South America (Sao Paulo)"
                },
                "us-east-1": {
                    description: "US East (N. Virginia)"
                },
                "us-east-2": {
                    description: "US East (Ohio)"
                },
                "us-west-1": {
                    description: "US West (N. California)"
                },
                "us-west-2": {
                    description: "US West (Oregon)"
                }
            }
        },
        {
            id: "aws-cn",
            outputs: {
                dnsSuffix: "amazonaws.com.cn",
                dualStackDnsSuffix: "api.amazonwebservices.com.cn",
                implicitGlobalRegion: "cn-northwest-1",
                name: "aws-cn",
                supportsDualStack: true,
                supportsFIPS: true
            },
            regionRegex: "^cn\\-\\w+\\-\\d+$",
            regions: {
                "aws-cn-global": {
                    description: "aws-cn global region"
                },
                "cn-north-1": {
                    description: "China (Beijing)"
                },
                "cn-northwest-1": {
                    description: "China (Ningxia)"
                }
            }
        },
        {
            id: "aws-eusc",
            outputs: {
                dnsSuffix: "amazonaws.eu",
                dualStackDnsSuffix: "api.amazonwebservices.eu",
                implicitGlobalRegion: "eusc-de-east-1",
                name: "aws-eusc",
                supportsDualStack: true,
                supportsFIPS: true
            },
            regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
            regions: {
                "eusc-de-east-1": {
                    description: "EU (Germany)"
                }
            }
        },
        {
            id: "aws-iso",
            outputs: {
                dnsSuffix: "c2s.ic.gov",
                dualStackDnsSuffix: "api.aws.ic.gov",
                implicitGlobalRegion: "us-iso-east-1",
                name: "aws-iso",
                supportsDualStack: true,
                supportsFIPS: true
            },
            regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
            regions: {
                "aws-iso-global": {
                    description: "aws-iso global region"
                },
                "us-iso-east-1": {
                    description: "US ISO East"
                },
                "us-iso-west-1": {
                    description: "US ISO WEST"
                }
            }
        },
        {
            id: "aws-iso-b",
            outputs: {
                dnsSuffix: "sc2s.sgov.gov",
                dualStackDnsSuffix: "api.aws.scloud",
                implicitGlobalRegion: "us-isob-east-1",
                name: "aws-iso-b",
                supportsDualStack: true,
                supportsFIPS: true
            },
            regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
            regions: {
                "aws-iso-b-global": {
                    description: "aws-iso-b global region"
                },
                "us-isob-east-1": {
                    description: "US ISOB East (Ohio)"
                },
                "us-isob-west-1": {
                    description: "US ISOB West"
                }
            }
        },
        {
            id: "aws-iso-e",
            outputs: {
                dnsSuffix: "cloud.adc-e.uk",
                dualStackDnsSuffix: "api.cloud-aws.adc-e.uk",
                implicitGlobalRegion: "eu-isoe-west-1",
                name: "aws-iso-e",
                supportsDualStack: true,
                supportsFIPS: true
            },
            regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
            regions: {
                "aws-iso-e-global": {
                    description: "aws-iso-e global region"
                },
                "eu-isoe-west-1": {
                    description: "EU ISOE West"
                }
            }
        },
        {
            id: "aws-iso-f",
            outputs: {
                dnsSuffix: "csp.hci.ic.gov",
                dualStackDnsSuffix: "api.aws.hci.ic.gov",
                implicitGlobalRegion: "us-isof-south-1",
                name: "aws-iso-f",
                supportsDualStack: true,
                supportsFIPS: true
            },
            regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
            regions: {
                "aws-iso-f-global": {
                    description: "aws-iso-f global region"
                },
                "us-isof-east-1": {
                    description: "US ISOF EAST"
                },
                "us-isof-south-1": {
                    description: "US ISOF SOUTH"
                }
            }
        },
        {
            id: "aws-us-gov",
            outputs: {
                dnsSuffix: "amazonaws.com",
                dualStackDnsSuffix: "api.aws",
                implicitGlobalRegion: "us-gov-west-1",
                name: "aws-us-gov",
                supportsDualStack: true,
                supportsFIPS: true
            },
            regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
            regions: {
                "aws-us-gov-global": {
                    description: "aws-us-gov global region"
                },
                "us-gov-east-1": {
                    description: "AWS GovCloud (US-East)"
                },
                "us-gov-west-1": {
                    description: "AWS GovCloud (US-West)"
                }
            }
        }
    ];
    const version = "1.1";
    const Kr = {
        partitions,
        version
    };
    let Qr = Kr;
    let Yr = "";
    const partition = (e)=>{
        let { partitions } = Qr;
        for (let s of partitions){
            let { regions, outputs } = s;
            for (let [c, d] of Object.entries(regions)){
                if (c === e) {
                    return {
                        ...outputs,
                        ...d
                    };
                }
            }
        }
        for (let s of partitions){
            let { regionRegex, outputs } = s;
            if (new RegExp(regionRegex).test(e)) {
                return {
                    ...outputs
                };
            }
        }
        let r = partitions.find((s)=>s.id === "aws");
        if (!r) {
            throw Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
        }
        return {
            ...r.outputs
        };
    };
    const Zr = (e, t = "")=>{
        Qr = e;
        Yr = t;
    };
    const Oo = ()=>{
        Zr(Kr, "");
    };
    const Mo = ()=>Yr;
    const es = {
        isVirtualHostableS3Bucket,
        parseArn,
        partition
    };
    Ce.customEndpointFunctions.aws = es;
    const Do = (e)=>{
        if (typeof e.endpointProvider !== "function") {
            throw Error("@aws-sdk/util-endpoint - endpointProvider and endpoint missing in config for this client.");
        }
        let { endpoint } = e;
        if (endpoint === undefined) {
            e.endpoint = async ()=>ts(e.endpointProvider({
                    Region: typeof e.region === "function" ? await e.region() : e.region,
                    UseDualStack: typeof e.useDualstackEndpoint === "function" ? await e.useDualstackEndpoint() : e.useDualstackEndpoint,
                    UseFIPS: typeof e.useFipsEndpoint === "function" ? await e.useFipsEndpoint() : e.useFipsEndpoint,
                    Endpoint: undefined
                }, {
                    logger: e.logger
                }));
        }
        return e;
    };
    var ts = (e)=>_o.parseUrl(e.url);
    Object.defineProperty(We, "EndpointError", {
        enumerable: true,
        get: function() {
            return Ce.EndpointError;
        }
    });
    Object.defineProperty(We, "isIpAddress", {
        enumerable: true,
        get: function() {
            return Ce.isIpAddress;
        }
    });
    Object.defineProperty(We, "resolveEndpoint", {
        enumerable: true,
        get: function() {
            return Ce.resolveEndpoint;
        }
    });
    We.awsEndpointFunctions = es;
    We.getUserAgentPrefix = Mo;
    We.partition = partition;
    We.resolveDefaultAwsRegionalEndpointsConfig = Do;
    We.setPartitionInfo = Zr;
    We.toEndpointV1 = ts;
    We.useDefaultPartitionInfo = Oo;
});
const ss = C(function(Vo) {
    const rs = typeof TextEncoder === "function" ? new TextEncoder : null;
    const Uo = (e)=>{
        if (typeof e === "string") {
            if (rs) {
                return rs.encode(e).byteLength;
            }
            let t = e.length;
            for(let r = t - 1; r >= 0; r--){
                let s = e.charCodeAt(r);
                if (s > 127 && s <= 2047) {
                    t++;
                } else if (s > 2047 && s <= 65535) {
                    t += 2;
                }
                if (s >= 56320 && s <= 57343) {
                    r--;
                }
            }
            return t;
        } else if (typeof e.byteLength === "number") {
            return e.byteLength;
        } else if (typeof e.size === "number") {
            return e.size;
        }
        throw Error(`Body Length computation failed for ${e}`);
    };
    Vo.calculateBodyLength = Uo;
});
const Ut = C(function(da) {
    const Ze = NPt();
    const as = Qk();
    const $e = Vat();
    const jo = jm();
    const qo = ss();
    const Ae = Zx();
    const Ho = eP();
    const cs = $R();
    const Ye = 0;
    const Je = 1;
    const Ne = 2;
    const fe = 3;
    const ze = 4;
    const Ke = 5;
    const us = 6;
    const At = 7;
    const ls = 20;
    const Ot = 21;
    const ds = 22;
    const Go = 23;
    const Dt = 24;
    const Te = 25;
    const _e = 26;
    const pe = 27;
    const Pt = 31;
    function Re(e) {
        if (typeof Buffer !== "undefined") {
            return Buffer.alloc(e);
        }
        return new Uint8Array(e);
    }
    const kt = Symbol("@smithy/core/cbor::tagSymbol");
    function vt(e) {
        e[kt] = true;
        return e;
    }
    const Xo = typeof TextDecoder !== "undefined";
    const Wo = typeof Buffer !== "undefined";
    let V = Re(0);
    let ue = new DataView(V.buffer, V.byteOffset, V.byteLength);
    const ns = Xo ? new TextDecoder : null;
    let P = 0;
    function Ko(e) {
        V = e;
        ue = new DataView(V.buffer, V.byteOffset, V.byteLength);
    }
    function le(e, t) {
        if (e >= t) {
            throw Error("unexpected end of (decode) payload.");
        }
        let r = (V[e] & 224) >> 5;
        let s = V[e] & 31;
        switch(r){
            case Ye:
            case Je:
            case us:
                let o;
                let a;
                if (s < 24) {
                    o = s;
                    a = 1;
                } else {
                    switch(s){
                        case Dt:
                        case Te:
                        case _e:
                        case pe:
                            let c = fs[s];
                            let d = c + 1;
                            a = d;
                            if (t - e < d) {
                                throw Error(`countLength ${c} greater than remaining buf len.`);
                            }
                            let f = e + 1;
                            if (c === 1) {
                                o = V[f];
                            } else if (c === 2) {
                                o = ue.getUint16(f);
                            } else if (c === 4) {
                                o = ue.getUint32(f);
                            } else {
                                o = ue.getBigUint64(f);
                            }
                            break;
                        default:
                            throw Error(`unexpected minor value ${s}.`);
                    }
                }
                if (r === Ye) {
                    P = a;
                    return Rt(o);
                } else if (r === Je) {
                    let c;
                    if (typeof o === "bigint") {
                        c = BigInt(-1) - o;
                    } else {
                        c = -1 - o;
                    }
                    P = a;
                    return Rt(c);
                } else if (s === 2 || s === 3) {
                    let c = Be(e + a, t);
                    let d = BigInt(0);
                    let f = e + a + P;
                    for(let m = f; m < f + c; ++m){
                        d = d << BigInt(8) | BigInt(V[m]);
                    }
                    P = a + P + c;
                    if (s === 3) {
                        return -d - BigInt(1);
                    }
                    return d;
                } else if (s === 4) {
                    let c = le(e + a, t);
                    let [d, f] = c;
                    let m = f < 0 ? -1 : 1;
                    let y = "0".repeat(Math.abs(d) + 1) + String(BigInt(m) * BigInt(f));
                    let b;
                    let x = f < 0 ? "-" : "";
                    b = d === 0 ? y : `${y.slice(0, y.length + d)}.${y.slice(d)}`;
                    b = b.replace(/^0+/g, "");
                    if (b === "") {
                        b = "0";
                    }
                    if (b[0] === ".") {
                        b = `0${b}`;
                    }
                    b = x + b;
                    P = a + P;
                    return Ze.nv(b);
                } else {
                    let value = le(e + a, t);
                    P = a + P;
                    return vt({
                        tag: Rt(o),
                        value
                    });
                }
            case fe:
            case Ke:
            case ze:
            case Ne:
                if (s === Pt) {
                    switch(r){
                        case fe:
                            return Zo(e, t);
                        case Ke:
                            return na(e, t);
                        case ze:
                            return ra(e, t);
                        case Ne:
                            return ea(e, t);
                    }
                } else {
                    switch(r){
                        case fe:
                            return Jo(e, t);
                        case Ke:
                            return sa(e, t);
                        case ze:
                            return ta(e, t);
                        case Ne:
                            return zt(e, t);
                    }
                }
            default:
                return ia(e, t);
        }
    }
    function hs(e, t, r) {
        if (Wo && e.constructor?.name === "Buffer") {
            return e.toString("utf-8", t, r);
        }
        if (ns) {
            return ns.decode(e.subarray(t, r));
        }
        return as.toUtf8(e.subarray(t, r));
    }
    function Qo(e) {
        let t = Number(e);
        if (t < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < t) {
            console.warn(Error(`@smithy/core/cbor - truncating BigInt(${e}) to ${t} with loss of precision.`));
        }
        return t;
    }
    var fs = {
        [Dt]: 1,
        [Te]: 2,
        [_e]: 4,
        [pe]: 8
    };
    function Yo(e, t) {
        let r = e >> 7;
        let s = (e & 124) >> 2;
        let o = (e & 3) << 8 | t;
        let a = r === 0 ? 1 : -1;
        let c;
        let d;
        if (s === 0) {
            if (o === 0) {
                return 0;
            } else {
                c = 2 ** -14;
                d = 0;
            }
        } else if (s === 31) {
            if (o === 0) {
                return a * Infinity;
            } else {
                return NaN;
            }
        } else {
            c = 2 ** (s - 15);
            d = 1;
        }
        d += o / 1024;
        return a * (c * d);
    }
    function Be(e, t) {
        let r = V[e] & 31;
        if (r < 24) {
            P = 1;
            return r;
        }
        if (r === Dt || r === Te || r === _e || r === pe) {
            let s = fs[r];
            P = s + 1;
            if (t - e < P) {
                throw Error(`countLength ${s} greater than remaining buf len.`);
            }
            let o = e + 1;
            if (s === 1) {
                return V[o];
            } else if (s === 2) {
                return ue.getUint16(o);
            } else if (s === 4) {
                return ue.getUint32(o);
            }
            return Qo(ue.getBigUint64(o));
        }
        throw Error(`unexpected minor value ${r}.`);
    }
    function Jo(e, t) {
        let r = Be(e, t);
        let s = P;
        e += s;
        if (t - e < r) {
            throw Error(`string len ${r} greater than remaining buf len.`);
        }
        let o = hs(V, e, e + r);
        P = s + r;
        return o;
    }
    function Zo(e, t) {
        e += 1;
        let r = [];
        for(let s = e; e < t;){
            if (V[e] === 255) {
                let f = Re(r.length);
                f.set(r, 0);
                P = e - s + 2;
                return hs(f, 0, f.length);
            }
            let o = (V[e] & 224) >> 5;
            let a = V[e] & 31;
            if (o !== fe) {
                throw Error(`unexpected major type ${o} in indefinite string.`);
            }
            if (a === Pt) {
                throw Error("nested indefinite string.");
            }
            let c = zt(e, t);
            e += P;
            for(let f = 0; f < c.length; ++f){
                r.push(c[f]);
            }
        }
        throw Error("expected break marker.");
    }
    function zt(e, t) {
        let r = Be(e, t);
        let s = P;
        e += s;
        if (t - e < r) {
            throw Error(`unstructured byte string len ${r} greater than remaining buf len.`);
        }
        let o = V.subarray(e, e + r);
        P = s + r;
        return o;
    }
    function ea(e, t) {
        e += 1;
        let r = [];
        for(let s = e; e < t;){
            if (V[e] === 255) {
                let f = Re(r.length);
                f.set(r, 0);
                P = e - s + 2;
                return f;
            }
            let o = (V[e] & 224) >> 5;
            let a = V[e] & 31;
            if (o !== Ne) {
                throw Error(`unexpected major type ${o} in indefinite string.`);
            }
            if (a === Pt) {
                throw Error("nested indefinite string.");
            }
            let c = zt(e, t);
            e += P;
            for(let f = 0; f < c.length; ++f){
                r.push(c[f]);
            }
        }
        throw Error("expected break marker.");
    }
    function ta(e, t) {
        let r = Be(e, t);
        let s = P;
        e += s;
        let o = e;
        let a = Array(r);
        for(let c = 0; c < r; ++c){
            let d = le(e, t);
            let f = P;
            a[c] = d;
            e += f;
        }
        P = s + (e - o);
        return a;
    }
    function ra(e, t) {
        e += 1;
        let r = [];
        for(let s = e; e < t;){
            if (V[e] === 255) {
                P = e - s + 2;
                return r;
            }
            let o = le(e, t);
            e += P;
            r.push(o);
        }
        throw Error("expected break marker.");
    }
    function sa(e, t) {
        let r = Be(e, t);
        let s = P;
        e += s;
        let o = e;
        let a = {};
        for(let c = 0; c < r; ++c){
            if (e >= t) {
                throw Error("unexpected end of map payload.");
            }
            let d = (V[e] & 224) >> 5;
            if (d !== fe) {
                throw Error(`unexpected major type ${d} for map key at index ${e}.`);
            }
            let f = le(e, t);
            e += P;
            let m = le(e, t);
            e += P;
            a[f] = m;
        }
        P = s + (e - o);
        return a;
    }
    function na(e, t) {
        e += 1;
        let r = e;
        let s = {};
        while(e < t){
            if (e >= t) {
                throw Error("unexpected end of map payload.");
            }
            if (V[e] === 255) {
                P = e - r + 2;
                return s;
            }
            let o = (V[e] & 224) >> 5;
            if (o !== fe) {
                throw Error(`unexpected major type ${o} for map key.`);
            }
            let a = le(e, t);
            e += P;
            let c = le(e, t);
            e += P;
            s[a] = c;
        }
        throw Error("expected break marker.");
    }
    function ia(e, t) {
        let r = V[e] & 31;
        switch(r){
            case Ot:
            case ls:
                P = 1;
                return r === Ot;
            case ds:
                P = 1;
                return null;
            case Go:
                P = 1;
                return null;
            case Te:
                if (t - e < 3) {
                    throw Error("incomplete float16 at end of buf.");
                }
                P = 3;
                return Yo(V[e + 1], V[e + 2]);
            case _e:
                if (t - e < 5) {
                    throw Error("incomplete float32 at end of buf.");
                }
                P = 5;
                return ue.getFloat32(e + 1);
            case pe:
                if (t - e < 9) {
                    throw Error("incomplete float64 at end of buf.");
                }
                P = 9;
                return ue.getFloat64(e + 1);
            default:
                throw Error(`unexpected minor value ${r}.`);
        }
    }
    function Rt(e) {
        if (typeof e === "number") {
            return e;
        }
        let t = Number(e);
        if (Number.MIN_SAFE_INTEGER <= t && t <= Number.MAX_SAFE_INTEGER) {
            return t;
        }
        return e;
    }
    const is = typeof Buffer !== "undefined";
    const oa = 2048;
    let O = Re(oa);
    let ce = new DataView(O.buffer, O.byteOffset, O.byteLength);
    let R = 0;
    function It(e) {
        if (O.byteLength - R < e) {
            if (R < 16000000) {
                Mt(Math.max(O.byteLength * 4, O.byteLength + e));
            } else {
                Mt(O.byteLength + e + 16000000);
            }
        }
    }
    function os() {
        let e = Re(R);
        e.set(O.subarray(0, R), 0);
        R = 0;
        return e;
    }
    function Mt(e) {
        let t = O;
        O = Re(e);
        if (t) {
            if (t.copy) {
                t.copy(O, 0, 0, t.byteLength);
            } else {
                O.set(t, 0);
            }
        }
        ce = new DataView(O.buffer, O.byteOffset, O.byteLength);
    }
    function ae(e, t) {
        if (t < 24) {
            O[R++] = e << 5 | t;
        } else if (t < 256) {
            O[R++] = e << 5 | 24;
            O[R++] = t;
        } else if (t < 65536) {
            O[R++] = e << 5 | Te;
            ce.setUint16(R, t);
            R += 2;
        } else if (t < 4294967296) {
            O[R++] = e << 5 | _e;
            ce.setUint32(R, t);
            R += 4;
        } else {
            O[R++] = e << 5 | pe;
            ce.setBigUint64(R, typeof t === "bigint" ? t : BigInt(t));
            R += 8;
        }
    }
    function aa(e) {
        let t = [
            e
        ];
        while(t.length){
            let r = t.pop();
            It(typeof r === "string" ? r.length * 4 : 64);
            if (typeof r === "string") {
                if (is) {
                    ae(fe, Buffer.byteLength(r));
                    R += O.write(r, R);
                } else {
                    let s = as.fromUtf8(r);
                    ae(fe, s.byteLength);
                    O.set(s, R);
                    R += s.byteLength;
                }
                continue;
            } else if (typeof r === "number") {
                if (Number.isInteger(r)) {
                    let s = r >= 0;
                    let o = s ? Ye : Je;
                    let a = s ? r : -r - 1;
                    if (a < 24) {
                        O[R++] = o << 5 | a;
                    } else if (a < 256) {
                        O[R++] = o << 5 | 24;
                        O[R++] = a;
                    } else if (a < 65536) {
                        O[R++] = o << 5 | Te;
                        O[R++] = a >> 8;
                        O[R++] = a;
                    } else if (a < 4294967296) {
                        O[R++] = o << 5 | _e;
                        ce.setUint32(R, a);
                        R += 4;
                    } else {
                        O[R++] = o << 5 | pe;
                        ce.setBigUint64(R, BigInt(a));
                        R += 8;
                    }
                    continue;
                }
                O[R++] = At << 5 | pe;
                ce.setFloat64(R, r);
                R += 8;
                continue;
            } else if (typeof r === "bigint") {
                let s = r >= 0;
                let o = s ? Ye : Je;
                let a = s ? r : -r - BigInt(1);
                let c = Number(a);
                if (c < 24) {
                    O[R++] = o << 5 | c;
                } else if (c < 256) {
                    O[R++] = o << 5 | 24;
                    O[R++] = c;
                } else if (c < 65536) {
                    O[R++] = o << 5 | Te;
                    O[R++] = c >> 8;
                    O[R++] = c & 255;
                } else if (c < 4294967296) {
                    O[R++] = o << 5 | _e;
                    ce.setUint32(R, c);
                    R += 4;
                } else if (a < BigInt("18446744073709551616")) {
                    O[R++] = o << 5 | pe;
                    ce.setBigUint64(R, a);
                    R += 8;
                } else {
                    let d = a.toString(2);
                    let f = new Uint8Array(Math.ceil(d.length / 8));
                    let m = a;
                    let y = 0;
                    while(f.byteLength - ++y >= 0){
                        f[f.byteLength - y] = Number(m & BigInt(255));
                        m >>= BigInt(8);
                    }
                    It(f.byteLength * 2);
                    O[R++] = s ? 194 : 195;
                    if (is) {
                        ae(Ne, Buffer.byteLength(f));
                    } else {
                        ae(Ne, f.byteLength);
                    }
                    O.set(f, R);
                    R += f.byteLength;
                }
                continue;
            } else if (r === null) {
                O[R++] = At << 5 | ds;
                continue;
            } else if (typeof r === "boolean") {
                O[R++] = At << 5 | (r ? Ot : ls);
                continue;
            } else if (typeof r === "undefined") {
                throw Error("@smithy/core/cbor: client may not serialize undefined value.");
            } else if (Array.isArray(r)) {
                for(let s = r.length - 1; s >= 0; --s){
                    t.push(r[s]);
                }
                ae(ze, r.length);
                continue;
            } else if (typeof r.byteLength === "number") {
                It(r.length * 2);
                ae(Ne, r.length);
                O.set(r, R);
                R += r.byteLength;
                continue;
            } else if (typeof r === "object") {
                if (r instanceof Ze.NumericValue) {
                    let o = r.string.indexOf(".");
                    let a = o === -1 ? 0 : o - r.string.length + 1;
                    let c = BigInt(r.string.replace(".", ""));
                    O[R++] = 196;
                    t.push(c);
                    t.push(a);
                    ae(ze, 2);
                    continue;
                }
                if (r[kt]) {
                    if ("tag" in r && "value" in r) {
                        t.push(r.value);
                        ae(us, r.tag);
                        continue;
                    } else {
                        throw Error(`tag encountered with missing fields, need 'tag' and 'value', found: ${JSON.stringify(r)}`);
                    }
                }
                let s = Object.keys(r);
                for(let o = s.length - 1; o >= 0; --o){
                    let a = s[o];
                    t.push(r[a]);
                    t.push(a);
                }
                ae(Ke, s.length);
                continue;
            }
            throw Error(`data type ${r?.constructor?.name ?? typeof r} not compatible for encoding.`);
        }
    }
    const et = {
        deserialize (e) {
            Ko(e);
            return le(0, e.length);
        },
        serialize (e) {
            try {
                aa(e);
                return os();
            } catch (error) {
                os();
                throw error;
            }
        },
        resizeEncodingBuffer (e) {
            Mt(e);
        }
    };
    const ps = (e, t)=>$e.collectBody(e, t).then(async (r)=>{
            if (r.length) {
                try {
                    return et.deserialize(r);
                } catch (error) {
                    Object.defineProperty(error, "$responseBodyText", {
                        value: t.utf8Encoder(r)
                    });
                    throw error;
                }
            }
            return {};
        });
    const Qe = (e)=>vt({
            tag: 1,
            value: e.getTime() / 1000
        });
    const ca = async (e, t)=>{
        let r = await ps(e, t);
        r.message = r.message ?? r.Message;
        return r;
    };
    const ms = (e, t)=>{
        let r = (o)=>{
            let a = o;
            if (typeof a === "number") {
                a = a.toString();
            }
            if (a.indexOf(",") >= 0) {
                a = a.split(",")[0];
            }
            if (a.indexOf(":") >= 0) {
                a = a.split(":")[0];
            }
            if (a.indexOf("#") >= 0) {
                a = a.split("#")[1];
            }
            return a;
        };
        if (t.__type !== undefined) {
            return r(t.__type);
        }
        let s = Object.keys(t).find((o)=>o.toLowerCase() === "code");
        if (s && t[s] !== undefined) {
            return r(t[s]);
        }
    };
    const ua = (e)=>{
        if (String(e.headers["smithy-protocol"]).toLowerCase() !== "rpc-v2-cbor") {
            throw Error(`Malformed RPCv2 CBOR response, status: ${e.statusCode}`);
        }
    };
    const la = async (e, t, r, s, o)=>{
        let { hostname, protocol = "https", port, path } = await e.endpoint();
        let m = {
            protocol,
            hostname,
            port,
            method: "POST",
            path: path.endsWith("/") ? path.slice(0, -1) + r : path + r,
            headers: {
                ...t
            }
        };
        if (s !== undefined) {
            m.hostname = s;
        }
        if (o !== undefined) {
            m.body = o;
            try {
                m.headers["content-length"] = String(qo.calculateBodyLength(o));
            } catch (y) {}
        }
        return new jo.HttpRequest(m);
    };
    class $t extends $e.SerdeContext {
        createSerializer() {
            let e = new Bt;
            e.setSerdeContext(this.serdeContext);
            return e;
        }
        createDeserializer() {
            let e = new Lt;
            e.setSerdeContext(this.serdeContext);
            return e;
        }
    }
    class Bt extends $e.SerdeContext {
        value;
        write(e, t) {
            this.value = this.serialize(e, t);
        }
        serialize(e, t) {
            let r = Ae.NormalizedSchema.of(e);
            if (t == null) {
                if (r.isIdempotencyToken()) {
                    return Ze.generateIdempotencyToken();
                }
                return t;
            }
            if (r.isBlobSchema()) {
                if (typeof t === "string") {
                    return (this.serdeContext?.base64Decoder ?? cs.fromBase64)(t);
                }
                return t;
            }
            if (r.isTimestampSchema()) {
                if (typeof t === "number" || typeof t === "bigint") {
                    return Qe(new Date(Number(t) / 1000 | 0));
                }
                return Qe(t);
            }
            if (typeof t === "function" || typeof t === "object") {
                let s = t;
                if (r.isListSchema() && Array.isArray(s)) {
                    let a = !!r.getMergedTraits().sparse;
                    let c = [];
                    let d = 0;
                    for (let f of s){
                        let m = this.serialize(r.getValueSchema(), f);
                        if (m != null || a) {
                            c[d++] = m;
                        }
                    }
                    return c;
                }
                if (s instanceof Date) {
                    return Qe(s);
                }
                let o = {};
                if (r.isMapSchema()) {
                    let a = !!r.getMergedTraits().sparse;
                    for (let c of Object.keys(s)){
                        let d = this.serialize(r.getValueSchema(), s[c]);
                        if (d != null || a) {
                            o[c] = d;
                        }
                    }
                } else if (r.isStructSchema()) {
                    for (let [a, c] of r.structIterator()){
                        let d = this.serialize(c, s[a]);
                        if (d != null) {
                            o[a] = d;
                        }
                    }
                } else if (r.isDocumentSchema()) {
                    for (let a of Object.keys(s)){
                        o[a] = this.serialize(r.getValueSchema(), s[a]);
                    }
                }
                return o;
            }
            return t;
        }
        flush() {
            let e = et.serialize(this.value);
            this.value = undefined;
            return e;
        }
    }
    class Lt extends $e.SerdeContext {
        read(e, t) {
            let r = et.deserialize(t);
            return this.readValue(e, r);
        }
        readValue(e, t) {
            let r = Ae.NormalizedSchema.of(e);
            if (r.isTimestampSchema() && typeof t === "number") {
                return Ze._parseEpochTimestamp(t);
            }
            if (r.isBlobSchema()) {
                if (typeof t === "string") {
                    return (this.serdeContext?.base64Decoder ?? cs.fromBase64)(t);
                }
                return t;
            }
            if (typeof t === "undefined" || typeof t === "boolean" || typeof t === "number" || typeof t === "string" || typeof t === "bigint" || typeof t === "symbol") {
                return t;
            } else if (typeof t === "function" || typeof t === "object") {
                if (t === null) {
                    return null;
                }
                if ("byteLength" in t) {
                    return t;
                }
                if (t instanceof Date) {
                    return t;
                }
                if (r.isDocumentSchema()) {
                    return t;
                }
                if (r.isListSchema()) {
                    let o = [];
                    let a = r.getValueSchema();
                    let c = !!r.getMergedTraits().sparse;
                    for (let d of t){
                        let f = this.readValue(a, d);
                        if (f != null || c) {
                            o.push(f);
                        }
                    }
                    return o;
                }
                let s = {};
                if (r.isMapSchema()) {
                    let o = !!r.getMergedTraits().sparse;
                    let a = r.getValueSchema();
                    for (let c of Object.keys(t)){
                        let d = this.readValue(a, t[c]);
                        if (d != null || o) {
                            s[c] = d;
                        }
                    }
                } else if (r.isStructSchema()) {
                    for (let [o, a] of r.structIterator()){
                        let c = this.readValue(a, t[o]);
                        if (c != null) {
                            s[o] = c;
                        }
                    }
                }
                return s;
            } else {
                return t;
            }
        }
    }
    class gs extends $e.RpcProtocol {
        codec = new $t;
        serializer = this.codec.createSerializer();
        deserializer = this.codec.createDeserializer();
        constructor({ defaultNamespace }){
            super({
                defaultNamespace
            });
        }
        getShapeId() {
            return "smithy.protocols#rpcv2Cbor";
        }
        getPayloadCodec() {
            return this.codec;
        }
        async serializeRequest(e, t, r) {
            let s = await super.serializeRequest(e, t, r);
            Object.assign(s.headers, {
                "content-type": this.getDefaultContentType(),
                "smithy-protocol": "rpc-v2-cbor",
                accept: this.getDefaultContentType()
            });
            if (Ae.deref(e.input) === "unit") {
                delete s.body;
                delete s.headers["content-type"];
            } else {
                if (!s.body) {
                    this.serializer.write(15, {});
                    s.body = this.serializer.flush();
                }
                try {
                    s.headers["content-length"] = String(s.body.byteLength);
                } catch (d) {}
            }
            let { service, operation } = Ho.getSmithyContext(r);
            let c = `/service/${service}/operation/${operation}`;
            if (s.path.endsWith("/")) {
                s.path += c.slice(1);
            } else {
                s.path += c;
            }
            return s;
        }
        async deserializeResponse(e, t, r) {
            return super.deserializeResponse(e, t, r);
        }
        async handleError(e, t, r, s, o) {
            let a = ms(r, s) ?? "Unknown";
            let defaultNamespace = this.options.defaultNamespace;
            if (a.includes("#")) {
                [defaultNamespace] = a.split("#");
            }
            let d = {
                $metadata: o,
                $fault: r.statusCode <= 500 ? "client" : "server"
            };
            let f = Ae.TypeRegistry.for(defaultNamespace);
            let m;
            try {
                m = f.getSchema(a);
            } catch (I) {
                if (s.Message) {
                    s.message = s.Message;
                }
                let F = Ae.TypeRegistry.for(`smithy.ts.sdk.synthetic.${defaultNamespace}`);
                let v = F.getBaseException();
                if (v) {
                    let W = F.getErrorCtor(v);
                    throw Object.assign(new W({
                        name: a
                    }), d, s);
                }
                throw Object.assign(Error(a), d, s);
            }
            let y = Ae.NormalizedSchema.of(m);
            let b = f.getErrorCtor(m);
            let x = s.message ?? s.Message ?? "Unknown";
            let N = new b(x);
            let T = {};
            for (let [I, F] of y.structIterator()){
                T[I] = this.deserializer.readValue(F, s[I]);
            }
            throw Object.assign(N, d, {
                $fault: y.getMergedTraits().error,
                message: x
            }, T);
        }
        getDefaultContentType() {
            return "application/cbor";
        }
    }
    da.CborCodec = $t;
    da.CborShapeDeserializer = Lt;
    da.CborShapeSerializer = Bt;
    da.SmithyRpcV2CborProtocol = gs;
    da.buildHttpRpcRequest = la;
    da.cbor = et;
    da.checkCborResponse = ua;
    da.dateToTag = Qe;
    da.loadSmithyRpcV2CborErrorCode = ms;
    da.parseCborBody = ps;
    da.parseCborErrorBody = ca;
    da.tag = vt;
    da.tagSymbol = kt;
});
const Es = C(function(Sh, ys) {
    (()=>{
        var e = {
            d: (n, i)=>{
                for(var u in i){
                    if (e.o(i, u) && !e.o(n, u)) {
                        Object.defineProperty(n, u, {
                            enumerable: true,
                            get: i[u]
                        });
                    }
                }
            },
            o: (n, i)=>Object.prototype.hasOwnProperty.call(n, i),
            r: (n)=>{
                if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                    Object.defineProperty(n, Symbol.toStringTag, {
                        value: "Module"
                    });
                }
                Object.defineProperty(n, "__esModule", {
                    value: true
                });
            }
        };
        var t = {};
        e.r(t);
        e.d(t, {
            XMLBuilder: ()=>to,
            XMLParser: ()=>Mr,
            XMLValidator: ()=>ro
        });
        let r = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
        let s = new RegExp(`^[${r}][${r}\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*\$`);
        function o(n, i) {
            let u = [];
            let l = i.exec(n);
            while(l){
                let p = [];
                p.startIndex = i.lastIndex - l[0].length;
                let h = l.length;
                for(let S = 0; S < h; S++){
                    p.push(l[S]);
                }
                u.push(p);
                l = i.exec(n);
            }
            return u;
        }
        let a = (n)=>s.exec(n) != null;
        let c = [
            "hasOwnProperty",
            "toString",
            "valueOf",
            "__defineGetter__",
            "__defineSetter__",
            "__lookupGetter__",
            "__lookupSetter__"
        ];
        let d = [
            "__proto__",
            "constructor",
            "prototype"
        ];
        let f = {
            allowBooleanAttributes: false,
            unpairedTags: []
        };
        function validate(n, i) {
            i = {
                ...f,
                ...i
            };
            let u = [];
            let l = false;
            let p = false;
            if (n[0] === "\uFEFF") {
                n = n.substr(1);
            }
            for(let h = 0; h < n.length; h++){
                if (n[h] === "<" && n[h + 1] === "?") {
                    h += 2;
                    h = b(n, h);
                    if (h.err) {
                        return h;
                    }
                } else {
                    if (n[h] !== "<") {
                        if (y(n[h])) {
                            continue;
                        }
                        return M("InvalidChar", `char '${n[h]}' is not expected.`, q(n, h));
                    }
                    {
                        let tagStartPos = h;
                        h++;
                        if (n[h] === "!") {
                            h = x(n, h);
                            continue;
                        }
                        {
                            let g = false;
                            if (n[h] === "/") {
                                g = true;
                                h++;
                            }
                            let E = "";
                            for(; h < n.length && n[h] !== ">" && n[h] !== " " && n[h] !== "\t" && n[h] !== `
` && n[h] !== "\r"; h++){
                                E += n[h];
                            }
                            E = E.trim();
                            if (E[E.length - 1] === "/") {
                                E = E.substring(0, E.length - 1);
                                h--;
                            }
                            if (!Pe(E)) {
                                let _;
                                _ = E.trim().length === 0 ? "Invalid space after '<'." : `Tag '${E}' is an invalid name.`;
                                return M("InvalidTag", _, q(n, h));
                            }
                            let w = I(n, h);
                            if (w === false) {
                                return M("InvalidAttr", `Attributes for '${E}' have open quote.`, q(n, h));
                            }
                            let A = w.value;
                            h = w.index;
                            if (A[A.length - 1] === "/") {
                                let _ = h - A.length;
                                A = A.substring(0, A.length - 1);
                                let z = v(A, i);
                                if (z !== true) {
                                    return M(z.err.code, z.err.msg, q(n, _ + z.err.line));
                                }
                                l = true;
                            } else if (g) {
                                if (!w.tagClosed) {
                                    return M("InvalidTag", `Closing tag '${E}' doesn't have proper closing.`, q(n, h));
                                }
                                if (A.trim().length > 0) {
                                    return M("InvalidTag", `Closing tag '${E}' can't have attributes or invalid starting.`, q(n, tagStartPos));
                                }
                                if (u.length === 0) {
                                    return M("InvalidTag", `Closing tag '${E}' has not been opened.`, q(n, tagStartPos));
                                }
                                {
                                    let _ = u.pop();
                                    if (E !== _.tagName) {
                                        let z = q(n, _.tagStartPos);
                                        return M("InvalidTag", `Expected closing tag '${_.tagName}' (opened in line ${z.line}, col ${z.col}) instead of closing tag '${E}'.`, q(n, tagStartPos));
                                    }
                                    if (u.length == 0) {
                                        p = true;
                                    }
                                }
                            } else {
                                let _ = v(A, i);
                                if (_ !== true) {
                                    return M(_.err.code, _.err.msg, q(n, h - A.length + _.err.line));
                                }
                                if (p === true) {
                                    return M("InvalidXml", "Multiple possible root nodes found.", q(n, h));
                                }
                                if (i.unpairedTags.indexOf(E) === -1) {
                                    u.push({
                                        tagName: E,
                                        tagStartPos
                                    });
                                }
                                l = true;
                            }
                            for(h++; h < n.length; h++){
                                if (n[h] === "<") {
                                    if (n[h + 1] === "!") {
                                        h++;
                                        h = x(n, h);
                                        continue;
                                    }
                                    if (n[h + 1] !== "?") {
                                        break;
                                    }
                                    h = b(n, ++h);
                                    if (h.err) {
                                        return h;
                                    }
                                } else if (n[h] === "&") {
                                    let _ = W(n, h);
                                    if (_ == -1) {
                                        return M("InvalidChar", "char '&' is not expected.", q(n, h));
                                    }
                                    h = _;
                                } else if (p === true && !y(n[h])) {
                                    return M("InvalidXml", "Extra text at the end", q(n, h));
                                }
                            }
                            if (n[h] === "<") {
                                h--;
                            }
                        }
                    }
                }
            }
            if (l) {
                if (u.length == 1) {
                    return M("InvalidTag", `Unclosed tag '${u[0].tagName}'.`, q(n, u[0].tagStartPos));
                }
                return !(u.length > 0) || M("InvalidXml", `Invalid '${JSON.stringify(u.map((h)=>h.tagName), null, 4).replace(/\r?\n/g, "")}' found.`, {
                    line: 1,
                    col: 1
                });
            }
            return M("InvalidXml", "Start tag expected.", 1);
        }
        function y(n) {
            return n === " " || n === "\t" || n === `
` || n === "\r";
        }
        function b(n, i) {
            let u = i;
            for(; i < n.length; i++){
                if (n[i] == "?" || n[i] == " ") {
                    let l = n.substr(u, i - u);
                    if (i > 5 && l === "xml") {
                        return M("InvalidXml", "XML declaration allowed only at the start of the document.", q(n, i));
                    }
                    if (n[i] == "?" && n[i + 1] == ">") {
                        i++;
                        break;
                    }
                    continue;
                }
            }
            return i;
        }
        function x(n, i) {
            if (n.length > i + 5 && n[i + 1] === "-" && n[i + 2] === "-") {
                for(i += 3; i < n.length; i++){
                    if (n[i] === "-" && n[i + 1] === "-" && n[i + 2] === ">") {
                        i += 2;
                        break;
                    }
                }
            } else if (n.length > i + 8 && n[i + 1] === "D" && n[i + 2] === "O" && n[i + 3] === "C" && n[i + 4] === "T" && n[i + 5] === "Y" && n[i + 6] === "P" && n[i + 7] === "E") {
                let u = 1;
                for(i += 8; i < n.length; i++){
                    if (n[i] === "<") {
                        u++;
                    } else if (n[i] === ">" && (u--, u === 0)) {
                        break;
                    }
                }
            } else if (n.length > i + 9 && n[i + 1] === "[" && n[i + 2] === "C" && n[i + 3] === "D" && n[i + 4] === "A" && n[i + 5] === "T" && n[i + 6] === "A" && n[i + 7] === "[") {
                for(i += 8; i < n.length; i++){
                    if (n[i] === "]" && n[i + 1] === "]" && n[i + 2] === ">") {
                        i += 2;
                        break;
                    }
                }
            }
            return i;
        }
        let N = '"';
        let T = "'";
        function I(n, i) {
            let u = "";
            let l = "";
            let tagClosed = false;
            for(; i < n.length; i++){
                if (n[i] === N || n[i] === T) {
                    if (l === "") {
                        l = n[i];
                    } else if (l === n[i]) {
                        l = "";
                    }
                } else if (n[i] === ">" && l === "") {
                    tagClosed = true;
                    break;
                }
                u += n[i];
            }
            return l === "" && {
                value: u,
                index: i,
                tagClosed
            };
        }
        let F = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
        function v(n, i) {
            let u = o(n, F);
            let l = {};
            for(let p = 0; p < u.length; p++){
                if (u[p][1].length === 0) {
                    return M("InvalidAttr", `Attribute '${u[p][2]}' has no space in starting.`, K(u[p]));
                }
                if (u[p][3] !== undefined && u[p][4] === undefined) {
                    return M("InvalidAttr", `Attribute '${u[p][2]}' is without value.`, K(u[p]));
                }
                if (u[p][3] === undefined && !i.allowBooleanAttributes) {
                    return M("InvalidAttr", `boolean attribute '${u[p][2]}' is not allowed.`, K(u[p]));
                }
                let h = u[p][2];
                if (!ee(h)) {
                    return M("InvalidAttr", `Attribute '${h}' is an invalid name.`, K(u[p]));
                }
                if (Object.prototype.hasOwnProperty.call(l, h)) {
                    return M("InvalidAttr", `Attribute '${h}' is repeated.`, K(u[p]));
                }
                l[h] = 1;
            }
            return true;
        }
        function W(n, i) {
            if (n[++i] === ";") {
                return -1;
            }
            if (n[i] === "#") {
                return ((l, p)=>{
                    let h = /\d/;
                    for(l[p] === "x" && (p++, h = /[\da-fA-F]/); p < l.length; p++){
                        if (l[p] === ";") {
                            return p;
                        }
                        if (!l[p].match(h)) {
                            break;
                        }
                    }
                    return -1;
                })(n, ++i);
            }
            let u = 0;
            for(; i < n.length; i++, u++){
                if (!(n[i].match(/\w/) && u < 20)) {
                    if (n[i] === ";") {
                        break;
                    }
                    return -1;
                }
            }
            return i;
        }
        function M(code, msg, u) {
            return {
                err: {
                    code,
                    msg,
                    line: u.line || u,
                    col: u.col
                }
            };
        }
        function ee(n) {
            return a(n);
        }
        function Pe(n) {
            return a(n);
        }
        function q(n, i) {
            let u = n.substring(0, i).split(/\r?\n/);
            return {
                line: u.length,
                col: u[u.length - 1].length + 1
            };
        }
        function K(n) {
            return n.startIndex + n[1].length;
        }
        let onDangerousProperty = (n)=>{
            if (c.includes(n)) {
                return `__${n}`;
            }
            return n;
        };
        let xi = {
            preserveOrder: false,
            attributeNamePrefix: "@_",
            attributesGroupName: false,
            textNodeName: "#text",
            ignoreAttributes: true,
            removeNSPrefix: false,
            allowBooleanAttributes: false,
            parseTagValue: true,
            parseAttributeValue: false,
            trimValues: true,
            cdataPropName: false,
            numberParseOptions: {
                hex: true,
                leadingZeros: true,
                eNotation: true
            },
            tagValueProcessor: function(n, i) {
                return i;
            },
            attributeValueProcessor: function(n, i) {
                return i;
            },
            stopNodes: [],
            alwaysCreateTextNode: false,
            isArray: ()=>false,
            commentPropName: false,
            unpairedTags: [],
            processEntities: true,
            htmlEntities: false,
            ignoreDeclaration: false,
            ignorePiTags: false,
            transformTagName: false,
            transformAttributeName: false,
            updateTag: function(n, i, u) {
                return n;
            },
            captureMetaData: false,
            maxNestedTags: 100,
            strictReservedNames: true,
            jPath: true,
            onDangerousProperty
        };
        function bi(n, name) {
            if (typeof n !== "string") {
                return;
            }
            let u = n.toLowerCase();
            if (c.some((l)=>u === l.toLowerCase())) {
                throw Error(`[SECURITY] Invalid ${name}: "${n}" is a reserved JavaScript keyword that could cause prototype pollution`);
            }
            if (d.some((l)=>u === l.toLowerCase())) {
                throw Error(`[SECURITY] Invalid ${name}: "${n}" is a reserved JavaScript keyword that could cause prototype pollution`);
            }
        }
        function Tr(enabled) {
            if (typeof enabled === "boolean") {
                return {
                    enabled,
                    maxEntitySize: 10000,
                    maxExpansionDepth: 10,
                    maxTotalExpansions: 1000,
                    maxExpandedLength: 100000,
                    maxEntityCount: 100,
                    allowedTags: null,
                    tagFilter: null
                };
            }
            if (typeof enabled === "object" && enabled !== null) {
                return {
                    enabled: enabled.enabled !== false,
                    maxEntitySize: Math.max(1, enabled.maxEntitySize ?? 10000),
                    maxExpansionDepth: Math.max(1, enabled.maxExpansionDepth ?? 10),
                    maxTotalExpansions: Math.max(1, enabled.maxTotalExpansions ?? 1000),
                    maxExpandedLength: Math.max(1, enabled.maxExpandedLength ?? 100000),
                    maxEntityCount: Math.max(1, enabled.maxEntityCount ?? 100),
                    allowedTags: enabled.allowedTags ?? null,
                    tagFilter: enabled.tagFilter ?? null
                };
            }
            return Tr(true);
        }
        let Ni = (n)=>{
            let i = {
                ...xi,
                ...n
            };
            let u = [
                {
                    value: i.attributeNamePrefix,
                    name: "attributeNamePrefix"
                },
                {
                    value: i.attributesGroupName,
                    name: "attributesGroupName"
                },
                {
                    value: i.textNodeName,
                    name: "textNodeName"
                },
                {
                    value: i.cdataPropName,
                    name: "cdataPropName"
                },
                {
                    value: i.commentPropName,
                    name: "commentPropName"
                }
            ];
            for (let { value, name } of u){
                if (value) {
                    bi(value, name);
                }
            }
            if (i.onDangerousProperty === null) {
                i.onDangerousProperty = onDangerousProperty;
            }
            i.processEntities = Tr(i.processEntities);
            if (i.stopNodes && Array.isArray(i.stopNodes)) {
                i.stopNodes = i.stopNodes.map((l)=>{
                    if (typeof l === "string" && l.startsWith("*.")) {
                        return `..${l.substring(2)}`;
                    }
                    return l;
                });
            }
            return i;
        };
        let pt;
        pt = typeof Symbol !== "function" ? "@@xmlMetadata" : Symbol("XML Node Metadata");
        class oe {
            constructor(n){
                this.tagname = n;
                this.child = [];
                this[":@"] = Object.create(null);
            }
            add(n, i) {
                if (n === "__proto__") {
                    n = "#__proto__";
                }
                this.child.push({
                    [n]: i
                });
            }
            addChild(n, startIndex) {
                if (n.tagname === "__proto__") {
                    n.tagname = "#__proto__";
                }
                if (n[":@"] && Object.keys(n[":@"]).length > 0) {
                    this.child.push({
                        [n.tagname]: n.child,
                        ":@": n[":@"]
                    });
                } else {
                    this.child.push({
                        [n.tagname]: n.child
                    });
                }
                if (startIndex !== undefined) {
                    this.child[this.child.length - 1][pt] = {
                        startIndex
                    };
                }
            }
            static getMetaDataSymbol() {
                return pt;
            }
        }
        class _r {
            constructor(n){
                this.suppressValidationErr = !n;
                this.options = n;
            }
            readDocType(n, i) {
                let entities = Object.create(null);
                let l = 0;
                if (n[i + 3] !== "O" || n[i + 4] !== "C" || n[i + 5] !== "T" || n[i + 6] !== "Y" || n[i + 7] !== "P" || n[i + 8] !== "E") {
                    throw Error("Invalid Tag instead of DOCTYPE");
                }
                {
                    i += 9;
                    let p = 1;
                    let h = false;
                    let S = false;
                    let g = "";
                    for(; i < n.length; i++){
                        if (n[i] !== "<" || S) {
                            if (n[i] === ">") {
                                if (S) {
                                    if (n[i - 1] === "-" && n[i - 2] === "-") {
                                        S = false;
                                        p--;
                                    }
                                } else {
                                    p--;
                                }
                                if (p === 0) {
                                    break;
                                }
                            } else {
                                if (n[i] === "[") {
                                    h = true;
                                } else {
                                    g += n[i];
                                }
                            }
                        } else {
                            if (h && we(n, "!ENTITY", i)) {
                                let E;
                                let w;
                                i += 7;
                                [E, w, i] = this.readEntityExp(n, i + 1, this.suppressValidationErr);
                                if (w.indexOf("&") === -1) {
                                    if (this.options.enabled !== false && this.options.maxEntityCount != null && l >= this.options.maxEntityCount) {
                                        throw Error(`Entity count (${l + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`);
                                    }
                                    let A = E.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                                    entities[E] = {
                                        regx: RegExp(`&${A};`, "g"),
                                        val: w
                                    };
                                    l++;
                                }
                            } else if (h && we(n, "!ELEMENT", i)) {
                                i += 8;
                                let { index } = this.readElementExp(n, i + 1);
                                i = index;
                            } else if (h && we(n, "!ATTLIST", i)) {
                                i += 8;
                            } else if (h && we(n, "!NOTATION", i)) {
                                i += 9;
                                let { index } = this.readNotationExp(n, i + 1, this.suppressValidationErr);
                                i = index;
                            } else {
                                if (!we(n, "!--", i)) {
                                    throw Error("Invalid DOCTYPE");
                                }
                                S = true;
                            }
                            p++;
                            g = "";
                        }
                    }
                    if (p !== 0) {
                        throw Error("Unclosed DOCTYPE");
                    }
                }
                return {
                    entities,
                    i
                };
            }
            readEntityExp(n, i) {
                let u = i = J(n, i);
                while(i < n.length && !/\s/.test(n[i]) && n[i] !== '"' && n[i] !== "'"){
                    i++;
                }
                let l = n.substring(u, i);
                ke(l);
                i = J(n, i);
                if (!this.suppressValidationErr) {
                    if (n.substring(i, i + 6).toUpperCase() === "SYSTEM") {
                        throw Error("External entities are not supported");
                    }
                    if (n[i] === "%") {
                        throw Error("Parameter entities are not supported");
                    }
                }
                let p = "";
                [i, p] = this.readIdentifierVal(n, i, "entity");
                if (this.options.enabled !== false && this.options.maxEntitySize != null && p.length > this.options.maxEntitySize) {
                    throw Error(`Entity "${l}" size (${p.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);
                }
                return [
                    l,
                    p,
                    --i
                ];
            }
            readNotationExp(n, i) {
                let u = i = J(n, i);
                while(i < n.length && !/\s/.test(n[i])){
                    i++;
                }
                let notationName = n.substring(u, i);
                if (!this.suppressValidationErr) {
                    ke(notationName);
                }
                i = J(n, i);
                let p = n.substring(i, i + 6).toUpperCase();
                if (!this.suppressValidationErr && p !== "SYSTEM" && p !== "PUBLIC") {
                    throw Error(`Expected SYSTEM or PUBLIC, found "${p}"`);
                }
                i += p.length;
                i = J(n, i);
                let publicIdentifier = null;
                let systemIdentifier = null;
                if (p === "PUBLIC") {
                    [i, publicIdentifier] = this.readIdentifierVal(n, i, "publicIdentifier");
                    if (!(n[i = J(n, i)] !== '"' && n[i] !== "'")) {
                        [i, systemIdentifier] = this.readIdentifierVal(n, i, "systemIdentifier");
                    }
                } else if (p === "SYSTEM" && ([i, systemIdentifier] = this.readIdentifierVal(n, i, "systemIdentifier"), !this.suppressValidationErr && !systemIdentifier)) {
                    throw Error("Missing mandatory system identifier for SYSTEM notation");
                }
                return {
                    notationName,
                    publicIdentifier,
                    systemIdentifier,
                    index: --i
                };
            }
            readIdentifierVal(n, i, u) {
                let l = "";
                let p = n[i];
                if (p !== '"' && p !== "'") {
                    throw Error(`Expected quoted string, found "${p}"`);
                }
                let h = ++i;
                while(i < n.length && n[i] !== p){
                    i++;
                }
                l = n.substring(h, i);
                if (n[i] !== p) {
                    throw Error(`Unterminated ${u} value`);
                }
                return [
                    ++i,
                    l
                ];
            }
            readElementExp(n, i) {
                let u = i = J(n, i);
                while(i < n.length && !/\s/.test(n[i])){
                    i++;
                }
                let l = n.substring(u, i);
                if (!this.suppressValidationErr && !a(l)) {
                    throw Error(`Invalid element name: "${l}"`);
                }
                let p = "";
                if (n[i = J(n, i)] === "E" && we(n, "MPTY", i)) {
                    i += 4;
                } else if (n[i] === "A" && we(n, "NY", i)) {
                    i += 2;
                } else if (n[i] === "(") {
                    let h = ++i;
                    while(i < n.length && n[i] !== ")"){
                        i++;
                    }
                    p = n.substring(h, i);
                    if (n[i] !== ")") {
                        throw Error("Unterminated content model");
                    }
                } else if (!this.suppressValidationErr) {
                    throw Error(`Invalid Element Expression, found "${n[i]}"`);
                }
                return {
                    elementName: l,
                    contentModel: p.trim(),
                    index: i
                };
            }
            readAttlistExp(n, i) {
                let u = i = J(n, i);
                while(i < n.length && !/\s/.test(n[i])){
                    i++;
                }
                let l = n.substring(u, i);
                ke(l);
                for(u = i = J(n, i); i < n.length && !/\s/.test(n[i]);){
                    i++;
                }
                let attributeName = n.substring(u, i);
                if (!ke(attributeName)) {
                    throw Error(`Invalid attribute name: "${attributeName}"`);
                }
                i = J(n, i);
                let attributeType = "";
                if (n.substring(i, i + 8).toUpperCase() === "NOTATION") {
                    attributeType = "NOTATION";
                    if (n[i = J(n, i += 8)] !== "(") {
                        throw Error(`Expected '(', found "${n[i]}"`);
                    }
                    i++;
                    let g = [];
                    while(i < n.length && n[i] !== ")"){
                        let E = i;
                        while(i < n.length && n[i] !== "|" && n[i] !== ")"){
                            i++;
                        }
                        let w = n.substring(E, i);
                        w = w.trim();
                        if (!ke(w)) {
                            throw Error(`Invalid notation name: "${w}"`);
                        }
                        g.push(w);
                        if (n[i] === "|") {
                            i++;
                            i = J(n, i);
                        }
                    }
                    if (n[i] !== ")") {
                        throw Error("Unterminated list of notations");
                    }
                    i++;
                    attributeType += ` (${g.join("|")})`;
                } else {
                    let g = i;
                    while(i < n.length && !/\s/.test(n[i])){
                        i++;
                    }
                    attributeType += n.substring(g, i);
                    let E = [
                        "CDATA",
                        "ID",
                        "IDREF",
                        "IDREFS",
                        "ENTITY",
                        "ENTITIES",
                        "NMTOKEN",
                        "NMTOKENS"
                    ];
                    if (!this.suppressValidationErr && !E.includes(attributeType.toUpperCase())) {
                        throw Error(`Invalid attribute type: "${attributeType}"`);
                    }
                }
                i = J(n, i);
                let defaultValue = "";
                if (n.substring(i, i + 8).toUpperCase() === "#REQUIRED") {
                    defaultValue = "#REQUIRED";
                    i += 8;
                } else if (n.substring(i, i + 7).toUpperCase() === "#IMPLIED") {
                    defaultValue = "#IMPLIED";
                    i += 7;
                } else {
                    [i, defaultValue] = this.readIdentifierVal(n, i, "ATTLIST");
                }
                return {
                    elementName: l,
                    attributeName,
                    attributeType,
                    defaultValue,
                    index: i
                };
            }
        }
        let J = (n, i)=>{
            while(i < n.length && /\s/.test(n[i])){
                i++;
            }
            return i;
        };
        function we(n, i, u) {
            for(let l = 0; l < i.length; l++){
                if (i[l] !== n[u + l + 1]) {
                    return false;
                }
            }
            return true;
        }
        function ke(n) {
            if (a(n)) {
                return n;
            }
            throw Error(`Invalid entity name ${n}`);
        }
        let Ti = /^[-+]?0x[a-fA-F0-9]+$/;
        let _i = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;
        let Ci = {
            hex: true,
            leadingZeros: true,
            decimalPoint: ".",
            eNotation: true,
            infinity: "original"
        };
        let Ai = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
        let Ri = new Set([
            "push",
            "pop",
            "reset",
            "updateCurrent",
            "restore"
        ]);
        class Ge {
            constructor(n = {}){
                this.separator = n.separator || ".";
                this.path = [];
                this.siblingStacks = [];
            }
            push(tag, i = null, u = null) {
                if (this.path.length > 0) {
                    this.path[this.path.length - 1].values = undefined;
                }
                let length = this.path.length;
                if (!this.siblingStacks[length]) {
                    this.siblingStacks[length] = new Map;
                }
                let p = this.siblingStacks[length];
                let h = u ? `${u}:${tag}` : tag;
                let counter = p.get(h) || 0;
                let position = 0;
                for (let w of p.values()){
                    position += w;
                }
                p.set(h, counter + 1);
                let E = {
                    tag,
                    position,
                    counter
                };
                if (u != null) {
                    E.namespace = u;
                }
                if (i != null) {
                    E.values = i;
                }
                this.path.push(E);
            }
            pop() {
                if (this.path.length === 0) {
                    return;
                }
                let n = this.path.pop();
                if (this.siblingStacks.length > this.path.length + 1) {
                    this.siblingStacks.length = this.path.length + 1;
                }
                return n;
            }
            updateCurrent(n) {
                if (this.path.length > 0) {
                    let i = this.path[this.path.length - 1];
                    if (n != null) {
                        i.values = n;
                    }
                }
            }
            getCurrentTag() {
                if (this.path.length > 0) {
                    return this.path[this.path.length - 1].tag;
                }
            }
            getCurrentNamespace() {
                if (this.path.length > 0) {
                    return this.path[this.path.length - 1].namespace;
                }
            }
            getAttrValue(n) {
                if (this.path.length === 0) {
                    return;
                }
                return this.path[this.path.length - 1].values?.[n];
            }
            hasAttr(n) {
                if (this.path.length === 0) {
                    return false;
                }
                let i = this.path[this.path.length - 1];
                return i.values !== undefined && n in i.values;
            }
            getPosition() {
                if (this.path.length === 0) {
                    return -1;
                }
                return this.path[this.path.length - 1].position ?? 0;
            }
            getCounter() {
                if (this.path.length === 0) {
                    return -1;
                }
                return this.path[this.path.length - 1].counter ?? 0;
            }
            getIndex() {
                return this.getPosition();
            }
            getDepth() {
                return this.path.length;
            }
            toString(n, i = true) {
                let u = n || this.separator;
                return this.path.map((l)=>{
                    if (i && l.namespace) {
                        return `${l.namespace}:${l.tag}`;
                    }
                    return l.tag;
                }).join(u);
            }
            toArray() {
                return this.path.map((n)=>n.tag);
            }
            reset() {
                this.path = [];
                this.siblingStacks = [];
            }
            matches(n) {
                let n_segments = n.segments;
                return n_segments.length !== 0 && (n.hasDeepWildcard() ? this._matchWithDeepWildcard(n_segments) : this._matchSimple(n_segments));
            }
            _matchSimple(n) {
                if (this.path.length !== n.length) {
                    return false;
                }
                for(let i = 0; i < n.length; i++){
                    let u = n[i];
                    let l = this.path[i];
                    let p = i === this.path.length - 1;
                    if (!this._matchSegment(u, l, p)) {
                        return false;
                    }
                }
                return true;
            }
            _matchWithDeepWildcard(n) {
                let i = this.path.length - 1;
                let u = n.length - 1;
                while(u >= 0 && i >= 0){
                    let l = n[u];
                    if (l.type === "deep-wildcard") {
                        u--;
                        if (u < 0) {
                            return true;
                        }
                        let p = n[u];
                        let h = false;
                        for(let S = i; S >= 0; S--){
                            let g = S === this.path.length - 1;
                            if (this._matchSegment(p, this.path[S], g)) {
                                i = S - 1;
                                u--;
                                h = true;
                                break;
                            }
                        }
                        if (!h) {
                            return false;
                        }
                    } else {
                        let p = i === this.path.length - 1;
                        if (!this._matchSegment(l, this.path[i], p)) {
                            return false;
                        }
                        i--;
                        u--;
                    }
                }
                return u < 0;
            }
            _matchSegment(n, i, u) {
                if (n.tag !== "*" && n.tag !== i.tag) {
                    return false;
                }
                if (n.namespace !== undefined && n.namespace !== "*" && n.namespace !== i.namespace) {
                    return false;
                }
                if (n.attrName !== undefined) {
                    if (!u) {
                        return false;
                    }
                    if (!i.values || !(n.attrName in i.values)) {
                        return false;
                    }
                    if (n.attrValue !== undefined) {
                        let l = i.values[n.attrName];
                        if (String(l) !== String(n.attrValue)) {
                            return false;
                        }
                    }
                }
                if (n.position !== undefined) {
                    if (!u) {
                        return false;
                    }
                    let l = i.counter ?? 0;
                    if (n.position === "first" && l !== 0) {
                        return false;
                    }
                    if (n.position === "odd" && l % 2 != 1) {
                        return false;
                    }
                    if (n.position === "even" && l % 2 != 0) {
                        return false;
                    }
                    if (n.position === "nth" && l !== n.positionValue) {
                        return false;
                    }
                }
                return true;
            }
            snapshot() {
                return {
                    path: this.path.map((n)=>({
                            ...n
                        })),
                    siblingStacks: this.siblingStacks.map((n)=>new Map(n))
                };
            }
            restore(n) {
                this.path = n.path.map((i)=>({
                        ...i
                    }));
                this.siblingStacks = n.siblingStacks.map((i)=>new Map(i));
            }
            readOnly() {
                return new Proxy(this, {
                    get (n, i, u) {
                        if (Ri.has(i)) {
                            return ()=>{
                                throw TypeError(`Cannot call '${i}' on a read-only Matcher. Obtain a writable instance to mutate state.`);
                            };
                        }
                        let l = Reflect.get(n, i, u);
                        if (i === "path" || i === "siblingStacks") {
                            return Object.freeze(Array.isArray(l) ? l.map((p)=>{
                                if (p instanceof Map) {
                                    return Object.freeze(new Map(p));
                                }
                                return Object.freeze({
                                    ...p
                                });
                            }) : l);
                        }
                        if (typeof l === "function") {
                            return l.bind(n);
                        }
                        return l;
                    },
                    set (n, i) {
                        throw TypeError(`Cannot set property '${String(i)}' on a read-only Matcher.`);
                    },
                    deleteProperty (n, i) {
                        throw TypeError(`Cannot delete property '${String(i)}' from a read-only Matcher.`);
                    }
                });
            }
        }
        class xe {
            constructor(n, i = {}){
                this.pattern = n;
                this.separator = i.separator || ".";
                this.segments = this._parse(n);
                this._hasDeepWildcard = this.segments.some((u)=>u.type === "deep-wildcard");
                this._hasAttributeCondition = this.segments.some((u)=>u.attrName !== undefined);
                this._hasPositionSelector = this.segments.some((u)=>u.position !== undefined);
            }
            _parse(n) {
                let i = [];
                let u = 0;
                let l = "";
                while(u < n.length){
                    if (n[u] === this.separator) {
                        if (u + 1 < n.length && n[u + 1] === this.separator) {
                            if (l.trim()) {
                                i.push(this._parseSegment(l.trim()));
                                l = "";
                            }
                            i.push({
                                type: "deep-wildcard"
                            });
                            u += 2;
                        } else {
                            if (l.trim()) {
                                i.push(this._parseSegment(l.trim()));
                            }
                            l = "";
                            u++;
                        }
                    } else {
                        l += n[u];
                        u++;
                    }
                }
                if (l.trim()) {
                    i.push(this._parseSegment(l.trim()));
                }
                return i;
            }
            _parseSegment(n) {
                let i = {
                    type: "tag"
                };
                let u = null;
                let l = n;
                let p = n.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
                if (p && (l = p[1] + p[3], p[2])) {
                    let w = p[2].slice(1, -1);
                    if (w) {
                        u = w;
                    }
                }
                let h;
                let S;
                let g = l;
                if (l.includes("::")) {
                    let w = l.indexOf("::");
                    h = l.substring(0, w).trim();
                    g = l.substring(w + 2).trim();
                    if (!h) {
                        throw Error(`Invalid namespace in pattern: ${n}`);
                    }
                }
                let E = null;
                if (g.includes(":")) {
                    let w = g.lastIndexOf(":");
                    let A = g.substring(0, w).trim();
                    let _ = g.substring(w + 1).trim();
                    if ([
                        "first",
                        "last",
                        "odd",
                        "even"
                    ].includes(_) || /^nth\(\d+\)$/.test(_)) {
                        S = A;
                        E = _;
                    } else {
                        S = g;
                    }
                } else {
                    S = g;
                }
                if (!S) {
                    throw Error(`Invalid segment pattern: ${n}`);
                }
                i.tag = S;
                if (h) {
                    i.namespace = h;
                }
                if (u) {
                    if (u.includes("=")) {
                        let w = u.indexOf("=");
                        i.attrName = u.substring(0, w).trim();
                        i.attrValue = u.substring(w + 1).trim();
                    } else {
                        i.attrName = u.trim();
                    }
                }
                if (E) {
                    let w = E.match(/^nth\((\d+)\)$/);
                    if (w) {
                        i.position = "nth";
                        i.positionValue = parseInt(w[1], 10);
                    } else {
                        i.position = E;
                    }
                }
                return i;
            }
            get length() {
                return this.segments.length;
            }
            hasDeepWildcard() {
                return this._hasDeepWildcard;
            }
            hasAttributeCondition() {
                return this._hasAttributeCondition;
            }
            hasPositionSelector() {
                return this._hasPositionSelector;
            }
            toString() {
                return this.pattern;
            }
        }
        function Ii(n, options) {
            if (!n) {
                return {};
            }
            let u = options.attributesGroupName ? n[options.attributesGroupName] : n;
            if (!u) {
                return {};
            }
            let l = {};
            for(let p in u){
                if (p.startsWith(options.attributeNamePrefix)) {
                    l[p.substring(options.attributeNamePrefix.length)] = u[p];
                } else {
                    l[p] = u[p];
                }
            }
            return l;
        }
        function Oi(rawTagName) {
            if (!rawTagName || typeof rawTagName !== "string") {
                return;
            }
            let i = rawTagName.indexOf(":");
            if (i !== -1 && i > 0) {
                let u = rawTagName.substring(0, i);
                if (u !== "xmlns") {
                    return u;
                }
            }
        }
        class Cr {
            constructor(n){
                var i;
                this.options = n;
                this.currentNode = null;
                this.tagsNodeStack = [];
                this.docTypeEntities = {};
                this.lastEntities = {
                    apos: {
                        regex: /&(apos|#39|#x27);/g,
                        val: "'"
                    },
                    gt: {
                        regex: /&(gt|#62|#x3E);/g,
                        val: ">"
                    },
                    lt: {
                        regex: /&(lt|#60|#x3C);/g,
                        val: "<"
                    },
                    quot: {
                        regex: /&(quot|#34|#x22);/g,
                        val: '"'
                    }
                };
                this.ampEntity = {
                    regex: /&(amp|#38|#x26);/g,
                    val: "&"
                };
                this.htmlEntities = {
                    space: {
                        regex: /&(nbsp|#160);/g,
                        val: " "
                    },
                    cent: {
                        regex: /&(cent|#162);/g,
                        val: "¢"
                    },
                    pound: {
                        regex: /&(pound|#163);/g,
                        val: "£"
                    },
                    yen: {
                        regex: /&(yen|#165);/g,
                        val: "¥"
                    },
                    euro: {
                        regex: /&(euro|#8364);/g,
                        val: "€"
                    },
                    copyright: {
                        regex: /&(copy|#169);/g,
                        val: "©"
                    },
                    reg: {
                        regex: /&(reg|#174);/g,
                        val: "®"
                    },
                    inr: {
                        regex: /&(inr|#8377);/g,
                        val: "₹"
                    },
                    num_dec: {
                        regex: /&#([0-9]{1,7});/g,
                        val: (u, l)=>Rr(l, 10, "&#")
                    },
                    num_hex: {
                        regex: /&#x([0-9a-fA-F]{1,6});/g,
                        val: (u, l)=>Rr(l, 16, "&#x")
                    }
                };
                this.addExternalEntities = Mi;
                this.parseXml = zi;
                this.parseTextData = Di;
                this.resolveNameSpace = Pi;
                this.buildAttributesMap = vi;
                this.isItStopNode = Ui;
                this.replaceEntitiesValue = Bi;
                this.readStopNodeData = Vi;
                this.saveTextToParentTag = Li;
                this.addChild = $i;
                this.ignoreAttributesFn = typeof (i = this.options.ignoreAttributes) === "function" ? i : Array.isArray(i) ? (u)=>{
                    for (let l of i){
                        if (typeof l === "string" && u === l) {
                            return true;
                        }
                        if (l instanceof RegExp && l.test(u)) {
                            return true;
                        }
                    }
                } : ()=>false;
                this.entityExpansionCount = 0;
                this.currentExpandedLength = 0;
                this.matcher = new Ge;
                this.readonlyMatcher = this.matcher.readOnly();
                this.isCurrentNodeStopNode = false;
                if (this.options.stopNodes && this.options.stopNodes.length > 0) {
                    this.stopNodeExpressions = [];
                    for(let u = 0; u < this.options.stopNodes.length; u++){
                        let stopNode = this.options.stopNodes[u];
                        if (typeof stopNode === "string") {
                            this.stopNodeExpressions.push(new xe(stopNode));
                        } else if (stopNode instanceof xe) {
                            this.stopNodeExpressions.push(stopNode);
                        }
                    }
                }
            }
        }
        function Mi(n) {
            let i = Object.keys(n);
            for (const l of i){
                let p = l.replace(/[.\-+*:]/g, "\\.");
                this.lastEntities[l] = {
                    regex: new RegExp(`&${p};`, "g"),
                    val: n[l]
                };
            }
        }
        function Di(n, i, u, l, p, h, S) {
            if (n !== undefined && (this.options.trimValues && !l && (n = n.trim()), n.length > 0)) {
                if (!S) {
                    n = this.replaceEntitiesValue(n, i, u);
                }
                let g = this.options.jPath ? u.toString() : u;
                let E = this.options.tagValueProcessor(i, n, g, p, h);
                if (E == null) {
                    return n;
                }
                if (typeof E != typeof n || E !== n) {
                    return E;
                }
                if (this.options.trimValues || n.trim() === n) {
                    return Ar(n, this.options.parseTagValue, this.options.numberParseOptions);
                }
                return n;
            }
        }
        function Pi(n) {
            if (this.options.removeNSPrefix) {
                let i = n.split(":");
                let u = n.charAt(0) === "/" ? "/" : "";
                if (i[0] === "xmlns") {
                    return "";
                }
                if (i.length === 2) {
                    n = u + i[1];
                }
            }
            return n;
        }
        let ki = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
        function vi(n, i, u) {
            if (this.options.ignoreAttributes !== true && typeof n === "string") {
                let l = o(n, ki);
                let p = l.length;
                let h = {};
                let S = {};
                for(let g = 0; g < p; g++){
                    let E = this.resolveNameSpace(l[g][1]);
                    let w = l[g][4];
                    if (E.length && w !== undefined) {
                        let A = w;
                        if (this.options.trimValues) {
                            A = A.trim();
                        }
                        A = this.replaceEntitiesValue(A, u, this.readonlyMatcher);
                        S[E] = A;
                    }
                }
                if (Object.keys(S).length > 0 && typeof i === "object" && i.updateCurrent) {
                    i.updateCurrent(S);
                }
                for(let g = 0; g < p; g++){
                    let E = this.resolveNameSpace(l[g][1]);
                    let w = this.options.jPath ? i.toString() : this.readonlyMatcher;
                    if (this.ignoreAttributesFn(E, w)) {
                        continue;
                    }
                    let A = l[g][4];
                    let _ = this.options.attributeNamePrefix + E;
                    if (E.length) {
                        if (this.options.transformAttributeName) {
                            _ = this.options.transformAttributeName(_);
                        }
                        _ = Ir(_, this.options);
                        if (A !== undefined) {
                            if (this.options.trimValues) {
                                A = A.trim();
                            }
                            A = this.replaceEntitiesValue(A, u, this.readonlyMatcher);
                            let z = this.options.jPath ? i.toString() : this.readonlyMatcher;
                            let D = this.options.attributeValueProcessor(E, A, z);
                            h[_] = D == null ? A : typeof D != typeof A || D !== A ? D : Ar(A, this.options.parseAttributeValue, this.options.numberParseOptions);
                        } else {
                            if (this.options.allowBooleanAttributes) {
                                h[_] = true;
                            }
                        }
                    }
                }
                if (!Object.keys(h).length) {
                    return;
                }
                if (this.options.attributesGroupName) {
                    let g = {};
                    g[this.options.attributesGroupName] = h;
                    return g;
                }
                return h;
            }
        }
        let zi = function(n) {
            n = n.replace(/\r\n?/g, `
`);
            let i = new oe("!xml");
            let u = i;
            let l = "";
            this.matcher.reset();
            this.entityExpansionCount = 0;
            this.currentExpandedLength = 0;
            let p = new _r(this.options.processEntities);
            for(let h = 0; h < n.length; h++){
                if (n[h] === "<") {
                    if (n[h + 1] === "/") {
                        let S = be(n, ">", h, "Closing Tag is not closed.");
                        let g = n.substring(h + 2, S).trim();
                        if (this.options.removeNSPrefix) {
                            let w = g.indexOf(":");
                            if (w !== -1) {
                                g = g.substr(w + 1);
                            }
                        }
                        g = gt(this.options.transformTagName, g, "", this.options).tagName;
                        if (u) {
                            l = this.saveTextToParentTag(l, u, this.readonlyMatcher);
                        }
                        let E = this.matcher.getCurrentTag();
                        if (g && this.options.unpairedTags.indexOf(g) !== -1) {
                            throw Error(`Unpaired tag can not be used as closing tag: </${g}>`);
                        }
                        if (E && this.options.unpairedTags.indexOf(E) !== -1) {
                            this.matcher.pop();
                            this.tagsNodeStack.pop();
                        }
                        this.matcher.pop();
                        this.isCurrentNodeStopNode = false;
                        u = this.tagsNodeStack.pop();
                        l = "";
                        h = S;
                    } else if (n[h + 1] === "?") {
                        let S = mt(n, h, false, "?>");
                        if (!S) {
                            throw Error("Pi Tag is not closed.");
                        }
                        l = this.saveTextToParentTag(l, u, this.readonlyMatcher);
                        if (this.options.ignoreDeclaration && S.tagName === "?xml" || this.options.ignorePiTags) ;
                        else {
                            let g = new oe(S.tagName);
                            g.add(this.options.textNodeName, "");
                            if (S.tagName !== S.tagExp && S.attrExpPresent) {
                                g[":@"] = this.buildAttributesMap(S.tagExp, this.matcher, S.tagName);
                            }
                            this.addChild(u, g, this.readonlyMatcher, h);
                        }
                        h = S.closeIndex + 1;
                    } else if (n.substr(h + 1, 3) === "!--") {
                        let S = be(n, "-->", h + 4, "Comment is not closed.");
                        if (this.options.commentPropName) {
                            let g = n.substring(h + 4, S - 2);
                            l = this.saveTextToParentTag(l, u, this.readonlyMatcher);
                            u.add(this.options.commentPropName, [
                                {
                                    [this.options.textNodeName]: g
                                }
                            ]);
                        }
                        h = S;
                    } else if (n.substr(h + 1, 2) === "!D") {
                        let S = p.readDocType(n, h);
                        this.docTypeEntities = S.entities;
                        h = S.i;
                    } else if (n.substr(h + 1, 2) === "![") {
                        let S = be(n, "]]>", h, "CDATA is not closed.") - 2;
                        let g = n.substring(h + 9, S);
                        l = this.saveTextToParentTag(l, u, this.readonlyMatcher);
                        let E = this.parseTextData(g, u.tagname, this.readonlyMatcher, true, false, true, true);
                        if (E == null) {
                            E = "";
                        }
                        if (this.options.cdataPropName) {
                            u.add(this.options.cdataPropName, [
                                {
                                    [this.options.textNodeName]: g
                                }
                            ]);
                        } else {
                            u.add(this.options.textNodeName, E);
                        }
                        h = S + 2;
                    } else {
                        let S = mt(n, h, this.options.removeNSPrefix);
                        if (!S) {
                            let Z = n.substring(Math.max(0, h - 50), Math.min(n.length, h + 50));
                            throw Error(`readTagExp returned undefined at position ${h}. Context: "${Z}"`);
                        }
                        let { tagName, rawTagName, tagExp, attrExpPresent, closeIndex } = S;
                        ({ tagName, tagExp } = gt(this.options.transformTagName, tagName, tagExp, this.options));
                        if (this.options.strictReservedNames && (tagName === this.options.commentPropName || tagName === this.options.cdataPropName || tagName === this.options.textNodeName || tagName === this.options.attributesGroupName)) {
                            throw Error(`Invalid tag name: ${tagName}`);
                        }
                        if (u && l && u.tagname !== "!xml") {
                            l = this.saveTextToParentTag(l, u, this.readonlyMatcher, false);
                        }
                        let z = u;
                        if (z && this.options.unpairedTags.indexOf(z.tagname) !== -1) {
                            u = this.tagsNodeStack.pop();
                            this.matcher.pop();
                        }
                        let D = false;
                        if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                            D = true;
                            if (tagName[tagName.length - 1] === "/") {
                                tagName = tagName.substr(0, tagName.length - 1);
                                tagExp = tagName;
                            } else {
                                tagExp = tagExp.substr(0, tagExp.length - 1);
                            }
                            attrExpPresent = tagName !== tagExp;
                        }
                        let k;
                        let B = null;
                        let ne = {};
                        k = Oi(rawTagName);
                        if (tagName !== i.tagname) {
                            this.matcher.push(tagName, {}, k);
                        }
                        if (tagName !== tagExp && attrExpPresent) {
                            B = this.buildAttributesMap(tagExp, this.matcher, tagName);
                            if (B) {
                                ne = Ii(B, this.options);
                            }
                        }
                        if (tagName !== i.tagname) {
                            this.isCurrentNodeStopNode = this.isItStopNode(this.stopNodeExpressions, this.matcher);
                        }
                        let H = h;
                        if (this.isCurrentNodeStopNode) {
                            let Z = "";
                            if (D) {
                                h = S.closeIndex;
                            } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                                h = S.closeIndex;
                            } else {
                                let wt = this.readStopNodeData(n, rawTagName, closeIndex + 1);
                                if (!wt) {
                                    throw Error(`Unexpected end of ${rawTagName}`);
                                }
                                h = wt.i;
                                Z = wt.tagContent;
                            }
                            let St = new oe(tagName);
                            if (B) {
                                St[":@"] = B;
                            }
                            St.add(this.options.textNodeName, Z);
                            this.matcher.pop();
                            this.isCurrentNodeStopNode = false;
                            this.addChild(u, St, this.readonlyMatcher, H);
                        } else {
                            if (D) {
                                ({ tagName, tagExp } = gt(this.options.transformTagName, tagName, tagExp, this.options));
                                let Z = new oe(tagName);
                                if (B) {
                                    Z[":@"] = B;
                                }
                                this.addChild(u, Z, this.readonlyMatcher, H);
                                this.matcher.pop();
                                this.isCurrentNodeStopNode = false;
                            } else {
                                if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                                    let Z = new oe(tagName);
                                    if (B) {
                                        Z[":@"] = B;
                                    }
                                    this.addChild(u, Z, this.readonlyMatcher, H);
                                    this.matcher.pop();
                                    this.isCurrentNodeStopNode = false;
                                    h = S.closeIndex;
                                    continue;
                                }
                                {
                                    let Z = new oe(tagName);
                                    if (this.tagsNodeStack.length > this.options.maxNestedTags) {
                                        throw Error("Maximum nested tags exceeded");
                                    }
                                    this.tagsNodeStack.push(u);
                                    if (B) {
                                        Z[":@"] = B;
                                    }
                                    this.addChild(u, Z, this.readonlyMatcher, H);
                                    u = Z;
                                }
                            }
                            l = "";
                            h = closeIndex;
                        }
                    }
                } else {
                    l += n[h];
                }
            }
            return i.child;
        };
        function $i(n, i, u, l) {
            if (!this.options.captureMetaData) {
                l = undefined;
            }
            let p = this.options.jPath ? u.toString() : u;
            let h = this.options.updateTag(i.tagname, p, i[":@"]);
            if (h !== false) {
                if (typeof h === "string") {
                    i.tagname = h;
                    n.addChild(i, l);
                } else {
                    n.addChild(i, l);
                }
            }
        }
        function Bi(n, i, u) {
            let processEntities = this.options.processEntities;
            if (!processEntities || !processEntities.enabled) {
                return n;
            }
            if (processEntities.allowedTags) {
                let p = this.options.jPath ? u.toString() : u;
                if (!(Array.isArray(processEntities.allowedTags) ? processEntities.allowedTags.includes(i) : processEntities.allowedTags(i, p))) {
                    return n;
                }
            }
            if (processEntities.tagFilter) {
                let p = this.options.jPath ? u.toString() : u;
                if (!processEntities.tagFilter(i, p)) {
                    return n;
                }
            }
            for (let p of Object.keys(this.docTypeEntities)){
                let h = this.docTypeEntities[p];
                let S = n.match(h.regx);
                if (S) {
                    this.entityExpansionCount += S.length;
                    if (processEntities.maxTotalExpansions && this.entityExpansionCount > processEntities.maxTotalExpansions) {
                        throw Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${processEntities.maxTotalExpansions}`);
                    }
                    let g = n.length;
                    n = n.replace(h.regx, h.val);
                    if (processEntities.maxExpandedLength && (this.currentExpandedLength += n.length - g, this.currentExpandedLength > processEntities.maxExpandedLength)) {
                        throw Error(`Total expanded content size exceeded: ${this.currentExpandedLength} > ${processEntities.maxExpandedLength}`);
                    }
                }
            }
            for (let p of Object.keys(this.lastEntities)){
                let h = this.lastEntities[p];
                let S = n.match(h.regex);
                if (S && (this.entityExpansionCount += S.length, processEntities.maxTotalExpansions && this.entityExpansionCount > processEntities.maxTotalExpansions)) {
                    throw Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${processEntities.maxTotalExpansions}`);
                }
                n = n.replace(h.regex, h.val);
            }
            if (n.indexOf("&") === -1) {
                return n;
            }
            if (this.options.htmlEntities) {
                for (let p of Object.keys(this.htmlEntities)){
                    let h = this.htmlEntities[p];
                    let S = n.match(h.regex);
                    if (S && (this.entityExpansionCount += S.length, processEntities.maxTotalExpansions && this.entityExpansionCount > processEntities.maxTotalExpansions)) {
                        throw Error(`Entity expansion limit exceeded: ${this.entityExpansionCount} > ${processEntities.maxTotalExpansions}`);
                    }
                    n = n.replace(h.regex, h.val);
                }
            }
            return n.replace(this.ampEntity.regex, this.ampEntity.val);
        }
        function Li(n, i, u, l) {
            if (n) {
                if (l === undefined) {
                    l = i.child.length === 0;
                }
                if ((n = this.parseTextData(n, i.tagname, u, false, !!i[":@"] && Object.keys(i[":@"]).length !== 0, l)) !== undefined && n !== "") {
                    i.add(this.options.textNodeName, n);
                }
                n = "";
            }
            return n;
        }
        function Ui(n, i) {
            if (!n || n.length === 0) {
                return false;
            }
            for(let u = 0; u < n.length; u++){
                if (i.matches(n[u])) {
                    return true;
                }
            }
            return false;
        }
        function be(n, i, u, l) {
            let p = n.indexOf(i, u);
            if (p === -1) {
                throw Error(l);
            }
            return p + i.length - 1;
        }
        function mt(n, i, u, l = ">") {
            let p = ((_, z, D = ">")=>{
                let k;
                let B = "";
                for(let ne = z; ne < _.length; ne++){
                    let H = _[ne];
                    if (k) {
                        if (H === k) {
                            k = "";
                        }
                    } else if (H === '"' || H === "'") {
                        k = H;
                    } else if (H === D[0]) {
                        if (!D[1]) {
                            return {
                                data: B,
                                index: ne
                            };
                        }
                        if (_[ne + 1] === D[1]) {
                            return {
                                data: B,
                                index: ne
                            };
                        }
                    } else {
                        if (H === "\t") {
                            H = " ";
                        }
                    }
                    B += H;
                }
            })(n, i + 1, l);
            if (!p) {
                return;
            }
            let { data, index } = p;
            let g = data.search(/\s/);
            let E = data;
            let attrExpPresent = true;
            if (g !== -1) {
                E = data.substring(0, g);
                data = data.substring(g + 1).trimStart();
            }
            let rawTagName = E;
            if (u) {
                let _ = E.indexOf(":");
                if (_ !== -1) {
                    E = E.substr(_ + 1);
                    attrExpPresent = E !== p.data.substr(_ + 1);
                }
            }
            return {
                tagName: E,
                tagExp: data,
                closeIndex: index,
                attrExpPresent,
                rawTagName
            };
        }
        function Vi(n, i, u) {
            let l = u;
            let p = 1;
            for(; u < n.length; u++){
                if (n[u] === "<") {
                    if (n[u + 1] === "/") {
                        let i_1 = be(n, ">", u, `${i} is not closed`);
                        if (n.substring(u + 2, i_1).trim() === i && (p--, p === 0)) {
                            return {
                                tagContent: n.substring(l, u),
                                i: i_1
                            };
                        }
                        u = i_1;
                    } else if (n[u + 1] === "?") {
                        u = be(n, "?>", u + 1, "StopNode is not closed.");
                    } else if (n.substr(u + 1, 3) === "!--") {
                        u = be(n, "-->", u + 3, "StopNode is not closed.");
                    } else if (n.substr(u + 1, 2) === "![") {
                        u = be(n, "]]>", u, "StopNode is not closed.") - 2;
                    } else {
                        let h = mt(n, u, ">");
                        if (h) {
                            if ((h && h.tagName) === i && h.tagExp[h.tagExp.length - 1] !== "/") {
                                p++;
                            }
                            u = h.closeIndex;
                        }
                    }
                }
            }
        }
        function Ar(n, i, numberParseOptions) {
            if (i && typeof n === "string") {
                let l = n.trim();
                return l === "true" || l !== "false" && ((p, h = {})=>{
                    h = {
                        ...Ci,
                        ...h
                    };
                    if (!p || typeof p !== "string") {
                        return p;
                    }
                    let S = p.trim();
                    if (h.skipLike !== undefined && h.skipLike.test(S)) {
                        return p;
                    }
                    if (p === "0") {
                        return 0;
                    }
                    if (h.hex && Ti.test(S)) {
                        return ((E)=>{
                            if (parseInt) {
                                return parseInt(E, 16);
                            }
                            if (Number.parseInt) {
                                return Number.parseInt(E, 16);
                            }
                            if (window && window.parseInt) {
                                return window.parseInt(E, 16);
                            }
                            throw Error("parseInt, Number.parseInt, window.parseInt are not supported");
                        })(S);
                    }
                    if (isFinite(S)) {
                        if (S.includes("e") || S.includes("E")) {
                            return ((E, w, A)=>{
                                if (!A.eNotation) {
                                    return E;
                                }
                                let _ = w.match(Ai);
                                if (_) {
                                    let z = _[1] || "";
                                    let D = _[3].indexOf("e") === -1 ? "E" : "e";
                                    let k = _[2];
                                    let B = z ? E[k.length + 1] === D : E[k.length] === D;
                                    if (k.length > 1 && B) {
                                        return E;
                                    }
                                    if ((k.length !== 1 || !_[3].startsWith(`.${D}`) && _[3][0] !== D) && k.length > 0) {
                                        if (A.leadingZeros && !B) {
                                            w = (_[1] || "") + _[3];
                                            return Number(w);
                                        }
                                        return E;
                                    }
                                    return Number(w);
                                }
                                return E;
                            })(p, S, h);
                        }
                        {
                            let E = _i.exec(S);
                            if (E) {
                                let w = E[1] || "";
                                let A = E[2];
                                let _ = (g = E[3]) && g.indexOf(".") !== -1 ? ((g = g.replace(/0+$/, "")) === "." ? g = "0" : g[0] === "." ? g = `0${g}` : g[g.length - 1] === "." && (g = g.substring(0, g.length - 1)), g) : g;
                                let z = w ? p[A.length + 1] === "." : p[A.length] === ".";
                                if (!h.leadingZeros && (A.length > 1 || A.length === 1 && !z)) {
                                    return p;
                                }
                                {
                                    let D = Number(S);
                                    let k = String(D);
                                    if (D === 0) {
                                        return D;
                                    }
                                    if (k.search(/[eE]/) !== -1) {
                                        if (h.eNotation) {
                                            return D;
                                        }
                                        return p;
                                    }
                                    if (S.indexOf(".") !== -1) {
                                        if (k === "0" || k === _ || k === `${w}${_}`) {
                                            return D;
                                        }
                                        return p;
                                    }
                                    let B = A ? _ : S;
                                    if (A) {
                                        if (B === k || w + B === k) {
                                            return D;
                                        }
                                        return p;
                                    }
                                    if (B === k || B === w + k) {
                                        return D;
                                    }
                                    return p;
                                }
                            }
                            return p;
                        }
                    }
                    var g;
                    return ((E, w, A)=>{
                        let _ = w === Infinity;
                        switch(A.infinity.toLowerCase()){
                            case "null":
                                return null;
                            case "infinity":
                                return w;
                            case "string":
                                if (_) {
                                    return "Infinity";
                                }
                                return "-Infinity";
                            default:
                                return E;
                        }
                    })(p, Number(S), h);
                })(n, numberParseOptions);
            }
            if (n !== undefined) {
                return n;
            }
            return "";
        }
        function Rr(n, i, u) {
            let l = Number.parseInt(n, i);
            if (l >= 0 && l <= 1114111) {
                return String.fromCodePoint(l);
            }
            return `${u + n};`;
        }
        function gt(transformTagName, i, tagExp, options) {
            if (transformTagName) {
                let p = transformTagName(i);
                if (tagExp === i) {
                    tagExp = p;
                }
                i = p;
            }
            return {
                tagName: i = Ir(i, options),
                tagExp
            };
        }
        function Ir(n, options) {
            if (d.includes(n)) {
                throw Error(`[SECURITY] Invalid name: "${n}" is a reserved JavaScript keyword that could cause prototype pollution`);
            }
            if (c.includes(n)) {
                return options.onDangerousProperty(n);
            }
            return n;
        }
        let yt = oe.getMetaDataSymbol();
        function Fi(n, attributeNamePrefix) {
            if (!n || typeof n !== "object") {
                return {};
            }
            if (!attributeNamePrefix) {
                return n;
            }
            let u = {};
            for(let l in n){
                if (l.startsWith(attributeNamePrefix)) {
                    u[l.substring(attributeNamePrefix.length)] = n[l];
                } else {
                    u[l] = n[l];
                }
            }
            return u;
        }
        function ji(n, options, matcher, readonlyMatcher) {
            return Or(n, options, matcher, readonlyMatcher);
        }
        function Or(n, i, u, l) {
            let p;
            let h = {};
            for (const g of n){
                let E = qi(g);
                if (E !== undefined && E !== i.textNodeName) {
                    let w = Fi(g[":@"] || {}, i.attributeNamePrefix);
                    u.push(E, w);
                }
                if (E === i.textNodeName) {
                    if (p === undefined) {
                        p = g[E];
                    } else {
                        p += `${g[E]}`;
                    }
                } else {
                    if (E === undefined) {
                        continue;
                    }
                    if (g[E]) {
                        let w = Or(g[E], i, u, l);
                        let A = Gi(w, i);
                        if (g[":@"]) {
                            Hi(w, g[":@"], l, i);
                        } else if (Object.keys(w).length !== 1 || w[i.textNodeName] === undefined || i.alwaysCreateTextNode) {
                            if (Object.keys(w).length === 0) {
                                if (i.alwaysCreateTextNode) {
                                    w[i.textNodeName] = "";
                                } else {
                                    w = "";
                                }
                            }
                        } else {
                            w = w[i.textNodeName];
                        }
                        if (g[yt] !== undefined && typeof w === "object" && w !== null) {
                            w[yt] = g[yt];
                        }
                        if (h[E] !== undefined && Object.prototype.hasOwnProperty.call(h, E)) {
                            if (!Array.isArray(h[E])) {
                                h[E] = [
                                    h[E]
                                ];
                            }
                            h[E].push(w);
                        } else {
                            let _ = i.jPath ? l.toString() : l;
                            if (i.isArray(E, _, A)) {
                                h[E] = [
                                    w
                                ];
                            } else {
                                h[E] = w;
                            }
                        }
                        if (E !== undefined && E !== i.textNodeName) {
                            u.pop();
                        }
                    }
                }
            }
            if (typeof p === "string") {
                if (p.length > 0) {
                    h[i.textNodeName] = p;
                }
            } else if (p !== undefined) {
                h[i.textNodeName] = p;
            }
            return h;
        }
        function qi(n) {
            let i = Object.keys(n);
            for (const l of i){
                if (l !== ":@") {
                    return l;
                }
            }
        }
        function Hi(n, i, u, l) {
            if (i) {
                let p = Object.keys(i);
                let h = p.length;
                for(let S = 0; S < h; S++){
                    let g = p[S];
                    let E = g.startsWith(l.attributeNamePrefix) ? g.substring(l.attributeNamePrefix.length) : g;
                    let w = l.jPath ? `${u.toString()}.${E}` : u;
                    if (l.isArray(g, w, true, true)) {
                        n[g] = [
                            i[g]
                        ];
                    } else {
                        n[g] = i[g];
                    }
                }
            }
        }
        function Gi(n, { textNodeName }) {
            let length = Object.keys(n).length;
            return length === 0 || !(length !== 1 || !n[textNodeName] && typeof n[textNodeName] !== "boolean" && n[textNodeName] !== 0);
        }
        class Mr {
            constructor(n){
                this.externalEntities = {};
                this.options = Ni(n);
            }
            parse(n, i) {
                if (typeof n !== "string" && n.toString) {
                    n = n.toString();
                } else if (typeof n !== "string") {
                    throw Error("XML data is accepted in String or Bytes[] form.");
                }
                if (i) {
                    if (i === true) {
                        i = {};
                    }
                    let p = validate(n, i);
                    if (p !== true) {
                        throw Error(`${p.err.msg}:${p.err.line}:${p.err.col}`);
                    }
                }
                let u = new Cr(this.options);
                u.addExternalEntities(this.externalEntities);
                let l = u.parseXml(n);
                if (this.options.preserveOrder || l === undefined) {
                    return l;
                }
                return ji(l, this.options, u.matcher, u.readonlyMatcher);
            }
            addEntity(n, i) {
                if (i.indexOf("&") !== -1) {
                    throw Error("Entity value can't have '&'");
                }
                if (n.indexOf("&") !== -1 || n.indexOf(";") !== -1) {
                    throw Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
                }
                if (i === "&") {
                    throw Error("An entity with value '&' is not permitted");
                }
                this.externalEntities[n] = i;
            }
            static getMetaDataSymbol() {
                return oe.getMetaDataSymbol();
            }
        }
        function Xi(n, options) {
            let u = "";
            if (options.format && options.indentBy.length > 0) {
                u = `
`;
            }
            let l = [];
            if (options.stopNodes && Array.isArray(options.stopNodes)) {
                for(let p = 0; p < options.stopNodes.length; p++){
                    let stopNode = options.stopNodes[p];
                    if (typeof stopNode === "string") {
                        l.push(new xe(stopNode));
                    } else if (stopNode instanceof xe) {
                        l.push(stopNode);
                    }
                }
            }
            return Dr(n, options, u, new Ge, l);
        }
        function Dr(n, i, u, l, p) {
            let h = "";
            let S = false;
            if (i.maxNestedTags && l.getDepth() > i.maxNestedTags) {
                throw Error("Maximum nested tags exceeded");
            }
            if (!Array.isArray(n)) {
                if (n != null) {
                    let g = n.toString();
                    g = Et(g, i);
                    return g;
                }
                return "";
            }
            for (const E of n){
                let w = kr(E);
                if (w === undefined) {
                    continue;
                }
                let A = Wi(E[":@"], i);
                l.push(w, A);
                let _ = Qi(l, p);
                if (w === i.textNodeName) {
                    let B = E[w];
                    if (!_) {
                        B = i.tagValueProcessor(w, B);
                        B = Et(B, i);
                    }
                    if (S) {
                        h += u;
                    }
                    h += B;
                    S = false;
                    l.pop();
                    continue;
                }
                if (w === i.cdataPropName) {
                    if (S) {
                        h += u;
                    }
                    h += `<![CDATA[${E[w][0][i.textNodeName]}]]>`;
                    S = false;
                    l.pop();
                    continue;
                }
                if (w === i.commentPropName) {
                    h += u + `<!--${E[w][0][i.textNodeName]}-->`;
                    S = true;
                    l.pop();
                    continue;
                }
                if (w[0] === "?") {
                    let B = vr(E[":@"], i, _);
                    let ne = w === "?xml" ? "" : u;
                    let H = E[w][0][i.textNodeName];
                    H = H.length !== 0 ? ` ${H}` : "";
                    h += ne + `<${w}${H}${B}?>`;
                    S = true;
                    l.pop();
                    continue;
                }
                let z = u;
                if (z !== "") {
                    z += i.indentBy;
                }
                let D = u + `<${w}${vr(E[":@"], i, _)}`;
                let k;
                k = _ ? Pr(E[w], i) : Dr(E[w], i, z, l, p);
                if (i.unpairedTags.indexOf(w) !== -1) {
                    if (i.suppressUnpairedNode) {
                        h += `${D}>`;
                    } else {
                        h += `${D}/>`;
                    }
                } else if (k && k.length !== 0 || !i.suppressEmptyNode) {
                    if (k && k.endsWith(">")) {
                        h += D + `>${k}${u}</${w}>`;
                    } else {
                        h += `${D}>`;
                        if (k && u !== "" && (k.includes("/>") || k.includes("</"))) {
                            h += u + i.indentBy + k + u;
                        } else {
                            h += k;
                        }
                        h += `</${w}>`;
                    }
                } else {
                    h += `${D}/>`;
                }
                S = true;
                l.pop();
            }
            return h;
        }
        function Wi(n, i) {
            if (!n || i.ignoreAttributes) {
                return null;
            }
            let u = {};
            let l = false;
            for(let p in n){
                if (Object.prototype.hasOwnProperty.call(n, p)) {
                    u[p.startsWith(i.attributeNamePrefix) ? p.substr(i.attributeNamePrefix.length) : p] = n[p];
                    l = true;
                }
            }
            if (l) {
                return u;
            }
            return null;
        }
        function Pr(n, i) {
            if (!Array.isArray(n)) {
                if (n != null) {
                    return n.toString();
                }
                return "";
            }
            let u = "";
            for (const p of n){
                let h = kr(p);
                if (h === i.textNodeName) {
                    u += p[h];
                } else if (h === i.cdataPropName) {
                    u += p[h][0][i.textNodeName];
                } else if (h === i.commentPropName) {
                    u += p[h][0][i.textNodeName];
                } else {
                    if (h && h[0] === "?") {
                        continue;
                    }
                    if (h) {
                        let S = Ki(p[":@"], i);
                        let g = Pr(p[h], i);
                        if (g && g.length !== 0) {
                            u += `<${h}${S}>${g}</${h}>`;
                        } else {
                            u += `<${h}${S}/>`;
                        }
                    }
                }
            }
            return u;
        }
        function Ki(n, i) {
            let u = "";
            if (n && !i.ignoreAttributes) {
                for(let l in n){
                    if (!Object.prototype.hasOwnProperty.call(n, l)) {
                        continue;
                    }
                    let p = n[l];
                    if (p === true && i.suppressBooleanAttributes) {
                        u += ` ${l.substr(i.attributeNamePrefix.length)}`;
                    } else {
                        u += ` ${l.substr(i.attributeNamePrefix.length)}="${p}"`;
                    }
                }
            }
            return u;
        }
        function kr(n) {
            let i = Object.keys(n);
            for (const l of i){
                if (Object.prototype.hasOwnProperty.call(n, l) && l !== ":@") {
                    return l;
                }
            }
        }
        function vr(n, i, u) {
            let l = "";
            if (n && !i.ignoreAttributes) {
                for(let p in n){
                    if (!Object.prototype.hasOwnProperty.call(n, p)) {
                        continue;
                    }
                    let h;
                    if (u) {
                        h = n[p];
                    } else {
                        h = i.attributeValueProcessor(p, n[p]);
                        h = Et(h, i);
                    }
                    if (h === true && i.suppressBooleanAttributes) {
                        l += ` ${p.substr(i.attributeNamePrefix.length)}`;
                    } else {
                        l += ` ${p.substr(i.attributeNamePrefix.length)}="${h}"`;
                    }
                }
            }
            return l;
        }
        function Qi(n, i) {
            if (!i || i.length === 0) {
                return false;
            }
            for(let u = 0; u < i.length; u++){
                if (n.matches(i[u])) {
                    return true;
                }
            }
            return false;
        }
        function Et(n, i) {
            if (n && n.length > 0 && i.processEntities) {
                for(let u = 0; u < i.entities.length; u++){
                    let entity = i.entities[u];
                    n = n.replace(entity.regex, entity.val);
                }
            }
            return n;
        }
        let Yi = {
            attributeNamePrefix: "@_",
            attributesGroupName: false,
            textNodeName: "#text",
            ignoreAttributes: true,
            cdataPropName: false,
            format: false,
            indentBy: "  ",
            suppressEmptyNode: false,
            suppressUnpairedNode: true,
            suppressBooleanAttributes: true,
            tagValueProcessor: function(n, i) {
                return i;
            },
            attributeValueProcessor: function(n, i) {
                return i;
            },
            preserveOrder: false,
            commentPropName: false,
            unpairedTags: [],
            entities: [
                {
                    regex: new RegExp("&", "g"),
                    val: "&amp;"
                },
                {
                    regex: new RegExp(">", "g"),
                    val: "&gt;"
                },
                {
                    regex: new RegExp("<", "g"),
                    val: "&lt;"
                },
                {
                    regex: new RegExp("'", "g"),
                    val: "&apos;"
                },
                {
                    regex: new RegExp('"', "g"),
                    val: "&quot;"
                }
            ],
            processEntities: true,
            stopNodes: [],
            oneListGroup: false,
            maxNestedTags: 100,
            jPath: true
        };
        class te {
            constructor(n){
                this.options = {
                    ...Yi,
                    ...n
                };
                if (this.options.stopNodes && Array.isArray(this.options.stopNodes)) {
                    this.options.stopNodes = this.options.stopNodes.map((u)=>{
                        if (typeof u === "string" && u.startsWith("*.")) {
                            return `..${u.substring(2)}`;
                        }
                        return u;
                    });
                }
                this.stopNodeExpressions = [];
                if (this.options.stopNodes && Array.isArray(this.options.stopNodes)) {
                    for(let u = 0; u < this.options.stopNodes.length; u++){
                        let stopNode = this.options.stopNodes[u];
                        if (typeof stopNode === "string") {
                            this.stopNodeExpressions.push(new xe(stopNode));
                        } else if (stopNode instanceof xe) {
                            this.stopNodeExpressions.push(stopNode);
                        }
                    }
                }
                let i;
                if (this.options.ignoreAttributes === true || this.options.attributesGroupName) {
                    this.isAttribute = function() {
                        return false;
                    };
                } else {
                    this.ignoreAttributesFn = typeof (i = this.options.ignoreAttributes) === "function" ? i : Array.isArray(i) ? (u)=>{
                        for (let l of i){
                            if (typeof l === "string" && u === l) {
                                return true;
                            }
                            if (l instanceof RegExp && l.test(u)) {
                                return true;
                            }
                        }
                    } : ()=>false;
                    this.attrPrefixLen = this.options.attributeNamePrefix.length;
                    this.isAttribute = eo;
                }
                this.processTextOrObjNode = Ji;
                if (this.options.format) {
                    this.indentate = Zi;
                    this.tagEndChar = `>
`;
                    this.newLine = `
`;
                } else {
                    this.indentate = function() {
                        return "";
                    };
                    this.tagEndChar = ">";
                    this.newLine = "";
                }
            }
            build(n) {
                if (this.options.preserveOrder) {
                    return Xi(n, this.options);
                }
                {
                    if (Array.isArray(n) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
                        n = {
                            [this.options.arrayNodeName]: n
                        };
                    }
                    let i = new Ge;
                    return this.j2x(n, 0, i).val;
                }
            }
            j2x(n, i, u) {
                let attrStr = "";
                let p = "";
                if (this.options.maxNestedTags && u.getDepth() >= this.options.maxNestedTags) {
                    throw Error("Maximum nested tags exceeded");
                }
                let h = this.options.jPath ? u.toString() : u;
                let S = this.checkStopNode(u);
                for(let g in n){
                    if (Object.prototype.hasOwnProperty.call(n, g)) {
                        if (n[g] === undefined) {
                            if (this.isAttribute(g)) {
                                p += "";
                            }
                        } else if (n[g] === null) {
                            if (this.isAttribute(g) || g === this.options.cdataPropName) {
                                p += "";
                            } else if (g[0] === "?") {
                                p += `${this.indentate(i)}<${g}?${this.tagEndChar}`;
                            } else {
                                p += `${this.indentate(i)}<${g}/${this.tagEndChar}`;
                            }
                        } else if (n[g] instanceof Date) {
                            p += this.buildTextValNode(n[g], g, "", i, u);
                        } else if (typeof n[g] !== "object") {
                            let E = this.isAttribute(g);
                            if (E && !this.ignoreAttributesFn(E, h)) {
                                attrStr += this.buildAttrPairStr(E, `${n[g]}`, S);
                            } else if (!E) {
                                if (g === this.options.textNodeName) {
                                    let w = this.options.tagValueProcessor(g, `${n[g]}`);
                                    p += this.replaceEntitiesValue(w);
                                } else {
                                    u.push(g);
                                    let w = this.checkStopNode(u);
                                    u.pop();
                                    if (w) {
                                        let A = `${n[g]}`;
                                        p += A === "" ? `${this.indentate(i)}<${g}${this.closeTag(g)}${this.tagEndChar}` : `${this.indentate(i)}<${g}>${A}</${g}${this.tagEndChar}`;
                                    } else {
                                        p += this.buildTextValNode(n[g], g, "", i, u);
                                    }
                                }
                            }
                        } else if (Array.isArray(n[g])) {
                            let E = n[g].length;
                            let w = "";
                            let A = "";
                            for(let _ = 0; _ < E; _++){
                                let z = n[g][_];
                                if (z === undefined) ;
                                else if (z === null) {
                                    if (g[0] === "?") {
                                        p += `${this.indentate(i)}<${g}?${this.tagEndChar}`;
                                    } else {
                                        p += `${this.indentate(i)}<${g}/${this.tagEndChar}`;
                                    }
                                } else if (typeof z === "object") {
                                    if (this.options.oneListGroup) {
                                        u.push(g);
                                        let D = this.j2x(z, i + 1, u);
                                        u.pop();
                                        w += D.val;
                                        if (this.options.attributesGroupName && z.hasOwnProperty(this.options.attributesGroupName)) {
                                            A += D.attrStr;
                                        }
                                    } else {
                                        w += this.processTextOrObjNode(z, g, i, u);
                                    }
                                } else if (this.options.oneListGroup) {
                                    let D = this.options.tagValueProcessor(g, z);
                                    D = this.replaceEntitiesValue(D);
                                    w += D;
                                } else {
                                    u.push(g);
                                    let D = this.checkStopNode(u);
                                    u.pop();
                                    if (D) {
                                        let k = `${z}`;
                                        w += k === "" ? `${this.indentate(i)}<${g}${this.closeTag(g)}${this.tagEndChar}` : `${this.indentate(i)}<${g}>${k}</${g}${this.tagEndChar}`;
                                    } else {
                                        w += this.buildTextValNode(z, g, "", i, u);
                                    }
                                }
                            }
                            if (this.options.oneListGroup) {
                                w = this.buildObjectNode(w, g, A, i);
                            }
                            p += w;
                        } else if (this.options.attributesGroupName && g === this.options.attributesGroupName) {
                            let E = Object.keys(n[g]);
                            let w = E.length;
                            for(let A = 0; A < w; A++){
                                attrStr += this.buildAttrPairStr(E[A], `${n[g][E[A]]}`, S);
                            }
                        } else {
                            p += this.processTextOrObjNode(n[g], g, i, u);
                        }
                    }
                }
                return {
                    attrStr,
                    val: p
                };
            }
            buildAttrPairStr(n, i, u) {
                if (!u) {
                    i = this.options.attributeValueProcessor(n, `${i}`);
                    i = this.replaceEntitiesValue(i);
                }
                if (this.options.suppressBooleanAttributes && i === "true") {
                    return ` ${n}`;
                }
                return ` ${n}="${i}"`;
            }
            extractAttributes(n) {
                if (!n || typeof n !== "object") {
                    return null;
                }
                let i = {};
                let u = false;
                if (this.options.attributesGroupName && n[this.options.attributesGroupName]) {
                    let l = n[this.options.attributesGroupName];
                    for(let p in l){
                        if (Object.prototype.hasOwnProperty.call(l, p)) {
                            i[p.startsWith(this.options.attributeNamePrefix) ? p.substring(this.options.attributeNamePrefix.length) : p] = l[p];
                            u = true;
                        }
                    }
                } else {
                    for(let l in n){
                        if (!Object.prototype.hasOwnProperty.call(n, l)) {
                            continue;
                        }
                        let p = this.isAttribute(l);
                        if (p) {
                            i[p] = n[l];
                            u = true;
                        }
                    }
                }
                if (u) {
                    return i;
                }
                return null;
            }
            buildRawContent(n) {
                if (typeof n === "string") {
                    return n;
                }
                if (typeof n !== "object" || n === null) {
                    return String(n);
                }
                if (n[this.options.textNodeName] !== undefined) {
                    return n[this.options.textNodeName];
                }
                let i = "";
                for(let u in n){
                    if (!Object.prototype.hasOwnProperty.call(n, u)) {
                        continue;
                    }
                    if (this.isAttribute(u)) {
                        continue;
                    }
                    if (this.options.attributesGroupName && u === this.options.attributesGroupName) {
                        continue;
                    }
                    let l = n[u];
                    if (u === this.options.textNodeName) {
                        i += l;
                    } else if (Array.isArray(l)) {
                        for (let p of l){
                            if (typeof p === "string" || typeof p === "number") {
                                i += `<${u}>${p}</${u}>`;
                            } else if (typeof p === "object" && p !== null) {
                                let h = this.buildRawContent(p);
                                let S = this.buildAttributesForStopNode(p);
                                i += h === "" ? `<${u}${S}/>` : `<${u}${S}>${h}</${u}>`;
                            }
                        }
                    } else if (typeof l === "object" && l !== null) {
                        let p = this.buildRawContent(l);
                        let h = this.buildAttributesForStopNode(l);
                        i += p === "" ? `<${u}${h}/>` : `<${u}${h}>${p}</${u}>`;
                    } else {
                        i += `<${u}>${l}</${u}>`;
                    }
                }
                return i;
            }
            buildAttributesForStopNode(n) {
                if (!n || typeof n !== "object") {
                    return "";
                }
                let i = "";
                if (this.options.attributesGroupName && n[this.options.attributesGroupName]) {
                    let u = n[this.options.attributesGroupName];
                    for(let l in u){
                        if (!Object.prototype.hasOwnProperty.call(u, l)) {
                            continue;
                        }
                        let p = l.startsWith(this.options.attributeNamePrefix) ? l.substring(this.options.attributeNamePrefix.length) : l;
                        let h = u[l];
                        if (h === true && this.options.suppressBooleanAttributes) {
                            i += ` ${p}`;
                        } else {
                            i += ` ${p}="${h}"`;
                        }
                    }
                } else {
                    for(let u in n){
                        if (!Object.prototype.hasOwnProperty.call(n, u)) {
                            continue;
                        }
                        let l = this.isAttribute(u);
                        if (l) {
                            let p = n[u];
                            if (p === true && this.options.suppressBooleanAttributes) {
                                i += ` ${l}`;
                            } else {
                                i += ` ${l}="${p}"`;
                            }
                        }
                    }
                }
                return i;
            }
            buildObjectNode(n, i, u, l) {
                if (n === "") {
                    if (i[0] === "?") {
                        return `${this.indentate(l)}<${i}${u}?${this.tagEndChar}`;
                    }
                    return `${this.indentate(l)}<${i}${u}${this.closeTag(i)}${this.tagEndChar}`;
                }
                {
                    let p = `</${i}${this.tagEndChar}`;
                    let h = "";
                    if (i[0] === "?") {
                        h = "?";
                        p = "";
                    }
                    if (!u && u !== "" || n.indexOf("<") !== -1) {
                        if (this.options.commentPropName !== false && i === this.options.commentPropName && h.length === 0) {
                            return this.indentate(l) + `<!--${n}-->` + this.newLine;
                        }
                        return `${this.indentate(l)}<${i}${u}${h}${this.tagEndChar}${n}${this.indentate(l)}${p}`;
                    }
                    return `${this.indentate(l)}<${i}${u}${h}>${n}${p}`;
                }
            }
            closeTag(n) {
                let i = "";
                if (this.options.unpairedTags.indexOf(n) !== -1) {
                    if (!this.options.suppressUnpairedNode) {
                        i = "/";
                    }
                } else {
                    i = this.options.suppressEmptyNode ? "/" : `></${n}`;
                }
                return i;
            }
            checkStopNode(n) {
                if (!this.stopNodeExpressions || this.stopNodeExpressions.length === 0) {
                    return false;
                }
                for(let i = 0; i < this.stopNodeExpressions.length; i++){
                    if (n.matches(this.stopNodeExpressions[i])) {
                        return true;
                    }
                }
                return false;
            }
            buildTextValNode(n, i, u, l, p) {
                if (this.options.cdataPropName !== false && i === this.options.cdataPropName) {
                    return this.indentate(l) + `<![CDATA[${n}]]>` + this.newLine;
                }
                if (this.options.commentPropName !== false && i === this.options.commentPropName) {
                    return this.indentate(l) + `<!--${n}-->` + this.newLine;
                }
                if (i[0] === "?") {
                    return `${this.indentate(l)}<${i}${u}?${this.tagEndChar}`;
                }
                {
                    let h = this.options.tagValueProcessor(i, n);
                    h = this.replaceEntitiesValue(h);
                    if (h === "") {
                        return `${this.indentate(l)}<${i}${u}${this.closeTag(i)}${this.tagEndChar}`;
                    }
                    return `${this.indentate(l)}<${i}${u}>${h}</${i}${this.tagEndChar}`;
                }
            }
            replaceEntitiesValue(n) {
                if (n && n.length > 0 && this.options.processEntities) {
                    for(let i = 0; i < this.options.entities.length; i++){
                        let entity = this.options.entities[i];
                        n = n.replace(entity.regex, entity.val);
                    }
                }
                return n;
            }
        }
        function Ji(n, i, u, l) {
            let p = this.extractAttributes(n);
            l.push(i, p);
            if (this.checkStopNode(l)) {
                let S = this.buildRawContent(n);
                let g = this.buildAttributesForStopNode(n);
                l.pop();
                return this.buildObjectNode(S, i, g, u);
            }
            let h = this.j2x(n, u + 1, l);
            l.pop();
            if (n[this.options.textNodeName] !== undefined && Object.keys(n).length === 1) {
                return this.buildTextValNode(n[this.options.textNodeName], i, h.attrStr, u, l);
            }
            return this.buildObjectNode(h.val, i, h.attrStr, u);
        }
        function Zi(n) {
            return this.options.indentBy.repeat(n);
        }
        function eo(n) {
            return !(!n.startsWith(this.options.attributeNamePrefix) || n === this.options.textNodeName) && n.substr(this.attrPrefixLen);
        }
        let to = te;
        let ro = {
            validate
        };
        ys.exports = t;
    })();
});
const xs = C(function(ws) {
    Object.defineProperty(ws, "__esModule", {
        value: true
    });
    ws.parseXML = _a;
    const Ss = Es();
    var Vt = new Ss.XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (e, t)=>{
            if (t.trim() === "" && t.includes(`
`)) {
                return "";
            }
        }
    });
    Vt.addEntity("#xD", "\r");
    Vt.addEntity("#10", `
`);
    function _a(e) {
        return Vt.parse(e, true);
    }
});
const jt = C(function(bs) {
    const Aa = xs();
    function Ra(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    function Ia(e) {
        return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#x0D;").replace(/\n/g, "&#x0A;").replace(/\u0085/g, "&#x85;").replace(/\u2028/, "&#x2028;");
    }
    class Ft {
        value;
        constructor(e){
            this.value = e;
        }
        toString() {
            return Ia(`${this.value}`);
        }
    }
    class Ue {
        name;
        children;
        attributes = {};
        static of(e, t, r) {
            let s = new Ue(e);
            if (t !== undefined) {
                s.addChildNode(new Ft(t));
            }
            if (r !== undefined) {
                s.withName(r);
            }
            return s;
        }
        constructor(e, t = []){
            this.name = e;
            this.children = t;
        }
        withName(e) {
            this.name = e;
            return this;
        }
        addAttribute(e, t) {
            this.attributes[e] = t;
            return this;
        }
        addChildNode(e) {
            this.children.push(e);
            return this;
        }
        removeAttribute(e) {
            delete this.attributes[e];
            return this;
        }
        n(e) {
            this.name = e;
            return this;
        }
        c(e) {
            this.children.push(e);
            return this;
        }
        a(e, t) {
            if (t != null) {
                this.attributes[e] = t;
            }
            return this;
        }
        cc(e, t, r = t) {
            if (e[t] != null) {
                let s = Ue.of(t, e[t]).withName(r);
                this.c(s);
            }
        }
        l(e, t, r, s) {
            if (e[t] != null) {
                s().map((a)=>{
                    a.withName(r);
                    this.c(a);
                });
            }
        }
        lc(e, t, r, s) {
            if (e[t] != null) {
                let o = s();
                let a = new Ue(r);
                o.map((c)=>{
                    a.c(c);
                });
                this.c(a);
            }
        }
        toString() {
            let e = Boolean(this.children.length);
            let t = `<${this.name}`;
            let attributes = this.attributes;
            for (let s of Object.keys(attributes)){
                let o = attributes[s];
                if (o != null) {
                    t += ` ${s}="${Ra(`${o}`)}"`;
                }
            }
            return t += !e ? "/>" : `>${this.children.map((s)=>s.toString()).join("")}</${this.name}>`;
        }
    }
    Object.defineProperty(bs, "parseXML", {
        enumerable: true,
        get: function() {
            return Aa.parseXML;
        }
    });
    bs.XmlNode = Ue;
    bs.XmlText = Ft;
});
const DT = C(function(Ja) {
    const Ht = jm();
    const me = xb();
    const Ns = Hm();
    const Da = tP();
    const Ts = OYe();
    const _s = Ut();
    const L = Zx();
    const de = Rd();
    const Q = Vat();
    const G = NPt();
    const Fe = $R();
    const Ds = Qk();
    const re = jt();
    const qt = {
        warningEmitted: false
    };
    const Pa = (e)=>{
        if (e && !qt.warningEmitted && parseInt(e.substring(1, e.indexOf("."))) < 18) {
            qt.warningEmitted = true;
            process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`);
        }
    };
    function ka(e, t, r) {
        if (!e.$source) {
            e.$source = {};
        }
        e.$source[t] = r;
        return e;
    }
    function va(e, t, r) {
        if (!e.__aws_sdk_context) {
            e.__aws_sdk_context = {
                features: {}
            };
        } else if (!e.__aws_sdk_context.features) {
            e.__aws_sdk_context.features = {};
        }
        e.__aws_sdk_context.features[t] = r;
    }
    function za(e, t, r) {
        if (!e.$source) {
            e.$source = {};
        }
        e.$source[t] = r;
        return e;
    }
    const Cs = (e)=>{
        if (Ht.HttpResponse.isInstance(e)) {
            return e.headers?.date ?? e.headers?.Date;
        }
    };
    const Gt = (e)=>new Date(Date.now() + e);
    const $a = (e, systemClockOffset)=>Math.abs(Gt(systemClockOffset).getTime() - e) >= 300000;
    const As = (e, systemClockOffset)=>{
        let r = Date.parse(e);
        if ($a(r, systemClockOffset)) {
            return r - Date.now();
        }
        return systemClockOffset;
    };
    const Ve = (e, t)=>{
        if (!t) {
            throw Error(`Property \`${e}\` is not resolved for AWS SDK SigV4Auth`);
        }
        return t;
    };
    const Xt = async (e)=>{
        let t = Ve("context", e.context);
        let config = Ve("config", e.config);
        let s = t.endpointV2?.properties?.authSchemes?.[0];
        let signer = await Ve("signer", config.signer)(s);
        let c = e?.signingRegion;
        let signingRegionSet = e?.signingRegionSet;
        let signingName = e?.signingName;
        return {
            config,
            signer,
            signingRegion: c,
            signingRegionSet,
            signingName
        };
    };
    class tt {
        async sign(e, t, r) {
            if (!Ht.HttpRequest.isInstance(e)) {
                throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
            }
            let s = await Xt(r);
            let { config, signer } = s;
            let { signingRegion, signingName } = s;
            let r_context = r.context;
            if (r_context?.authSchemes?.length ?? false) {
                let [y, b] = r_context.authSchemes;
                if (y?.name === "sigv4a" && b?.name === "sigv4") {
                    signingRegion = b?.signingRegion ?? signingRegion;
                    signingName = b?.signingName ?? signingName;
                }
            }
            return await signer.sign(e, {
                signingDate: Gt(config.systemClockOffset),
                signingRegion,
                signingService: signingName
            });
        }
        errorHandler(e) {
            return (t)=>{
                let r = t.ServerTime ?? Cs(t.$response);
                if (r) {
                    let s = Ve("config", e.config);
                    let o = s.systemClockOffset;
                    s.systemClockOffset = As(r, s.systemClockOffset);
                    if (s.systemClockOffset !== o && t.$metadata) {
                        t.$metadata.clockSkewCorrected = true;
                    }
                }
                throw t;
            };
        }
        successHandler(e, t) {
            let r = Cs(e);
            if (r) {
                let s = Ve("config", t.config);
                s.systemClockOffset = As(r, s.systemClockOffset);
            }
        }
    }
    const Ba = tt;
    class Ps extends tt {
        async sign(e, t, r) {
            if (!Ht.HttpRequest.isInstance(e)) {
                throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
            }
            let { config, signer, signingRegion, signingRegionSet, signingName } = await Xt(r);
            let m = (await config.sigv4aSigningRegionSet?.() ?? signingRegionSet ?? [
                signingRegion
            ]).join(",");
            return await signer.sign(e, {
                signingDate: Gt(config.systemClockOffset),
                signingRegion: m,
                signingService: signingName
            });
        }
    }
    const Rs = (e)=>{
        if (typeof e === "string" && e.length > 0) {
            return e.split(",").map((t)=>t.trim());
        }
        return [];
    };
    const ks = (e)=>`AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`;
    const Is = "AWS_AUTH_SCHEME_PREFERENCE";
    const Os = "auth_scheme_preference";
    const La = {
        environmentVariableSelector: (e, t)=>{
            if (t?.signingName) {
                if (ks(t.signingName) in e) {
                    return [
                        "httpBearerAuth"
                    ];
                }
            }
            if (!(Is in e)) {
                return;
            }
            return Rs(e[Is]);
        },
        configFileSelector: (e)=>{
            if (!(Os in e)) {
                return;
            }
            return Rs(e[Os]);
        },
        default: []
    };
    const Ua = (e)=>{
        e.sigv4aSigningRegionSet = me.normalizeProvider(e.sigv4aSigningRegionSet);
        return e;
    };
    const Va = {
        environmentVariableSelector (e) {
            if (e.AWS_SIGV4A_SIGNING_REGION_SET) {
                return e.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((t)=>t.trim());
            }
            throw new Ns.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
                tryNextLink: true
            });
        },
        configFileSelector (e) {
            if (e.sigv4a_signing_region_set) {
                return (e.sigv4a_signing_region_set ?? "").split(",").map((t)=>t.trim());
            }
            throw new Ns.ProviderError("sigv4a_signing_region_set not set in profile.", {
                tryNextLink: true
            });
        },
        default: undefined
    };
    const vs = (e)=>{
        let e_credentials = e.credentials;
        let r = !!e.credentials;
        let s;
        Object.defineProperty(e, "credentials", {
            set (m) {
                if (m && m !== e_credentials && m !== s) {
                    r = true;
                }
                e_credentials = m;
                let y = ja(e, {
                    credentials: e_credentials,
                    credentialDefaultProvider: e.credentialDefaultProvider
                });
                let b = qa(e, y);
                if (r && !b.attributed) {
                    s = async (x)=>b(x).then((N)=>Da.setCredentialFeature(N, "CREDENTIALS_CODE", "e"));
                    s.memoized = b.memoized;
                    s.configBound = b.configBound;
                    s.attributed = true;
                } else {
                    s = b;
                }
            },
            get () {
                return s;
            },
            enumerable: true,
            configurable: true
        });
        e.credentials = e_credentials;
        let { signingEscapePath = true, systemClockOffset = e.systemClockOffset || 0, sha256 } = e;
        let signer;
        if (e.signer) {
            signer = me.normalizeProvider(e.signer);
        } else if (e.regionInfoProvider) {
            signer = ()=>me.normalizeProvider(e.region)().then(async (m)=>[
                        await e.regionInfoProvider(m, {
                            useFipsEndpoint: await e.useFipsEndpoint(),
                            useDualstackEndpoint: await e.useDualstackEndpoint()
                        }) || {},
                        m
                    ]).then(([m, y])=>{
                    let { signingRegion, signingService } = m;
                    e.signingRegion = e.signingRegion || signingRegion || y;
                    e.signingName = e.signingName || signingService || e.serviceId;
                    let N = {
                        ...e,
                        credentials: e.credentials,
                        region: e.signingRegion,
                        service: e.signingName,
                        sha256,
                        uriEscapePath: signingEscapePath
                    };
                    return new (e.signerConstructor || Ts.SignatureV4)(N);
                });
        } else {
            signer = async (m)=>{
                m = {
                    name: "sigv4",
                    signingName: e.signingName || e.defaultSigningName,
                    signingRegion: await me.normalizeProvider(e.region)(),
                    properties: {},
                    ...m
                };
                let m_signingRegion = m.signingRegion;
                let m_signingName = m.signingName;
                e.signingRegion = e.signingRegion || m_signingRegion;
                e.signingName = e.signingName || m_signingName || e.serviceId;
                let x = {
                    ...e,
                    credentials: e.credentials,
                    region: e.signingRegion,
                    service: e.signingName,
                    sha256,
                    uriEscapePath: signingEscapePath
                };
                return new (e.signerConstructor || Ts.SignatureV4)(x);
            };
        }
        return Object.assign(e, {
            systemClockOffset,
            signingEscapePath,
            signer
        });
    };
    const Fa = vs;
    function ja(parentClientConfig, { credentials, credentialDefaultProvider }) {
        let s;
        if (credentials) {
            if (!credentials?.memoized) {
                s = me.memoizeIdentityProvider(credentials, me.isIdentityExpired, me.doesIdentityRequireRefresh);
            } else {
                s = credentials;
            }
        } else if (credentialDefaultProvider) {
            s = me.normalizeProvider(credentialDefaultProvider({
                ...parentClientConfig,
                parentClientConfig
            }));
        } else {
            s = async ()=>{
                throw Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
            };
        }
        s.memoized = true;
        return s;
    }
    function qa(callerClientConfig, t) {
        if (t.configBound) {
            return t;
        }
        let r = async (s)=>t({
                ...s,
                callerClientConfig
            });
        r.memoized = t.memoized;
        r.configBound = true;
        return r;
    }
    class Ie {
        queryCompat;
        constructor(e = false){
            this.queryCompat = e;
        }
        resolveRestContentType(e, t) {
            let r = t.getMemberSchemas();
            let s = Object.values(r).find((o)=>!!o.getMergedTraits().httpPayload);
            if (s) {
                let o = s.getMergedTraits().mediaType;
                if (o) {
                    return o;
                } else if (s.isStringSchema()) {
                    return "text/plain";
                } else if (s.isBlobSchema()) {
                    return "application/octet-stream";
                } else {
                    return e;
                }
            } else if (!t.isUnitSchema()) {
                if (Object.values(r).find((a)=>{
                    let { httpQuery, httpQueryParams, httpHeader, httpLabel, httpPrefixHeaders } = a.getMergedTraits();
                    return !httpQuery && !httpQueryParams && !httpHeader && !httpLabel && httpPrefixHeaders === undefined;
                })) {
                    return e;
                }
            }
        }
        async getErrorSchemaOrThrowBaseException(e, t, r, s, o, a) {
            let c = t;
            let d = e;
            if (e.includes("#")) {
                [c, d] = e.split("#");
            }
            let f = {
                $metadata: o,
                $fault: r.statusCode < 500 ? "client" : "server"
            };
            let m = L.TypeRegistry.for(c);
            try {
                return {
                    errorSchema: a?.(m, d) ?? m.getSchema(e),
                    errorMetadata: f
                };
            } catch (y) {
                s.message = s.message ?? s.Message ?? "UnknownError";
                let b = L.TypeRegistry.for(`smithy.ts.sdk.synthetic.${c}`);
                let x = b.getBaseException();
                if (x) {
                    let N = b.getErrorCtor(x) ?? Error;
                    throw this.decorateServiceException(Object.assign(new N({
                        name: d
                    }), f), s);
                }
                throw this.decorateServiceException(Object.assign(Error(d), f), s);
            }
        }
        decorateServiceException(e, t = {}) {
            if (this.queryCompat) {
                let r = e.Message ?? t.Message;
                let s = de.decorateServiceException(e, t);
                if (r) {
                    s.Message = r;
                    s.message = r;
                }
                return s;
            }
            return de.decorateServiceException(e, t);
        }
        setQueryCompatError(e, t) {
            let r = t.headers?.["x-amzn-query-error"];
            if (e !== undefined && r != null) {
                let [s, o] = r.split(";");
                let a = Object.entries(e);
                let c = {
                    Code: s,
                    Type: o
                };
                Object.assign(e, c);
                for (let [d, f] of a){
                    c[d] = f;
                }
                delete c.__type;
                e.Error = c;
            }
        }
        queryCompatOutput(e, t) {
            if (e.Error) {
                t.Error = e.Error;
            }
            if (e.Type) {
                t.Type = e.Type;
            }
            if (e.Code) {
                t.Code = e.Code;
            }
        }
    }
    class zs extends _s.SmithyRpcV2CborProtocol {
        awsQueryCompatible;
        mixin;
        constructor({ defaultNamespace, awsQueryCompatible }){
            super({
                defaultNamespace
            });
            this.awsQueryCompatible = !!awsQueryCompatible;
            this.mixin = new Ie(this.awsQueryCompatible);
        }
        async serializeRequest(e, t, r) {
            let s = await super.serializeRequest(e, t, r);
            if (this.awsQueryCompatible) {
                s.headers["x-amzn-query-mode"] = "true";
            }
            return s;
        }
        async handleError(e, t, r, s, o) {
            if (this.awsQueryCompatible) {
                this.mixin.setQueryCompatError(s, r);
            }
            let a = _s.loadSmithyRpcV2CborErrorCode(r, s) ?? "Unknown";
            let { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o);
            let f = L.NormalizedSchema.of(errorSchema);
            let m = s.message ?? s.Message ?? "Unknown";
            let b = new (L.TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error)(m);
            let x = {};
            for (let [N, T] of f.structIterator()){
                x[N] = this.deserializer.readValue(T, s[N]);
            }
            if (this.awsQueryCompatible) {
                this.mixin.queryCompatOutput(s, x);
            }
            throw this.mixin.decorateServiceException(Object.assign(b, errorMetadata, {
                $fault: f.getMergedTraits().error,
                message: m
            }, x), s);
        }
    }
    const Ha = (e)=>{
        if (e == null) {
            return e;
        }
        if (typeof e === "number" || typeof e === "bigint") {
            let t = Error(`Received number ${e} where a string was expected.`);
            t.name = "Warning";
            console.warn(t);
            return String(e);
        }
        if (typeof e === "boolean") {
            let t = Error(`Received boolean ${e} where a string was expected.`);
            t.name = "Warning";
            console.warn(t);
            return String(e);
        }
        return e;
    };
    const Ga = (e)=>{
        if (e == null) {
            return e;
        }
        if (typeof e === "string") {
            let t = e.toLowerCase();
            if (e !== "" && t !== "false" && t !== "true") {
                let r = Error(`Received string "${e}" where a boolean was expected.`);
                r.name = "Warning";
                console.warn(r);
            }
            return e !== "" && t !== "false";
        }
        return e;
    };
    const Xa = (e)=>{
        if (e == null) {
            return e;
        }
        if (typeof e === "string") {
            let t = Number(e);
            if (t.toString() !== e) {
                let r = Error(`Received string "${e}" where a number was expected.`);
                r.name = "Warning";
                console.warn(r);
                return e;
            }
            return t;
        }
        return e;
    };
    class ge {
        serdeContext;
        setSerdeContext(e) {
            this.serdeContext = e;
        }
    }
    function Wa(e, t, r) {
        if (r?.source) {
            let s = r.source;
            if (typeof t === "number") {
                if (t > Number.MAX_SAFE_INTEGER || t < Number.MIN_SAFE_INTEGER || s !== String(t)) {
                    if (s.includes(".")) {
                        return new G.NumericValue(s, "bigDecimal");
                    } else {
                        return BigInt(s);
                    }
                }
            }
        }
        return t;
    }
    const $s = (e, t)=>de.collectBody(e, t).then((r)=>(t?.utf8Encoder ?? Ds.toUtf8)(r));
    const Wt = (e, t)=>$s(e, t).then((r)=>{
            if (r.length) {
                try {
                    return JSON.parse(r);
                } catch (error) {
                    if (error?.name === "SyntaxError") {
                        Object.defineProperty(error, "$responseBodyText", {
                            value: r
                        });
                    }
                    throw error;
                }
            }
            return {};
        });
    const Ka = async (e, t)=>{
        let r = await Wt(e, t);
        r.message = r.message ?? r.Message;
        return r;
    };
    const Kt = (e, t)=>{
        let r = (a, c)=>Object.keys(a).find((d)=>d.toLowerCase() === c.toLowerCase());
        let s = (a)=>{
            let c = a;
            if (typeof c === "number") {
                c = c.toString();
            }
            if (c.indexOf(",") >= 0) {
                c = c.split(",")[0];
            }
            if (c.indexOf(":") >= 0) {
                c = c.split(":")[0];
            }
            if (c.indexOf("#") >= 0) {
                c = c.split("#")[1];
            }
            return c;
        };
        let o = r(e.headers, "x-amzn-errortype");
        if (o !== undefined) {
            return s(e.headers[o]);
        }
        if (t && typeof t === "object") {
            let a = r(t, "code");
            if (a && t[a] !== undefined) {
                return s(t[a]);
            }
            if (t.__type !== undefined) {
                return s(t.__type);
            }
        }
    };
    class Qt extends ge {
        settings;
        constructor(e){
            super();
            this.settings = e;
        }
        async read(e, t) {
            return this._read(e, typeof t === "string" ? JSON.parse(t, Wa) : await Wt(t, this.serdeContext));
        }
        readObject(e, t) {
            return this._read(e, t);
        }
        _read(e, t) {
            let r = t !== null && typeof t === "object";
            let s = L.NormalizedSchema.of(e);
            if (s.isListSchema() && Array.isArray(t)) {
                let a = s.getValueSchema();
                let c = [];
                let d = !!s.getMergedTraits().sparse;
                for (let f of t){
                    if (d || f != null) {
                        c.push(this._read(a, f));
                    }
                }
                return c;
            } else if (s.isMapSchema() && r) {
                let a = s.getValueSchema();
                let c = {};
                let d = !!s.getMergedTraits().sparse;
                for (let [f, m] of Object.entries(t)){
                    if (d || m != null) {
                        c[f] = this._read(a, m);
                    }
                }
                return c;
            } else if (s.isStructSchema() && r) {
                let a = {};
                for (let [c, d] of s.structIterator()){
                    let f = this.settings.jsonName ? d.getMergedTraits().jsonName ?? c : c;
                    let m = this._read(d, t[f]);
                    if (m != null) {
                        a[c] = m;
                    }
                }
                return a;
            }
            if (s.isBlobSchema() && typeof t === "string") {
                return Fe.fromBase64(t);
            }
            let mediaType = s.getMergedTraits().mediaType;
            if (s.isStringSchema() && typeof t === "string" && mediaType) {
                if (mediaType === "application/json" || mediaType.endsWith("+json")) {
                    return G.LazyJsonString.from(t);
                }
            }
            if (s.isTimestampSchema() && t != null) {
                switch(Q.determineTimestampFormat(s, this.settings)){
                    case 5:
                        return G.parseRfc3339DateTimeWithOffset(t);
                    case 6:
                        return G.parseRfc7231DateTime(t);
                    case 7:
                        return G.parseEpochTimestamp(t);
                    default:
                        console.warn("Missing timestamp format, parsing value with Date constructor:", t);
                        return new Date(t);
                }
            }
            if (s.isBigIntegerSchema() && (typeof t === "number" || typeof t === "string")) {
                return BigInt(t);
            }
            if (s.isBigDecimalSchema() && t != null) {
                if (t instanceof G.NumericValue) {
                    return t;
                }
                let a = t;
                if (a.type === "bigDecimal" && "string" in a) {
                    return new G.NumericValue(a.string, a.type);
                }
                return new G.NumericValue(String(t), "bigDecimal");
            }
            if (s.isNumericSchema() && typeof t === "string") {
                switch(t){
                    case "Infinity":
                        return Infinity;
                    case "-Infinity":
                        return -Infinity;
                    case "NaN":
                        return NaN;
                }
            }
            if (s.isDocumentSchema()) {
                if (r) {
                    let a = Array.isArray(t) ? [] : {};
                    for (let [c, d] of Object.entries(t)){
                        if (d instanceof G.NumericValue) {
                            a[c] = d;
                        } else {
                            a[c] = this._read(s, d);
                        }
                    }
                    return a;
                } else {
                    return structuredClone(t);
                }
            }
            return t;
        }
    }
    const Ms = String.fromCharCode(925);
    class Bs {
        values = new Map;
        counter = 0;
        stage = 0;
        createReplacer() {
            if (this.stage === 1) {
                throw Error("@aws-sdk/core/protocols - JsonReplacer already created.");
            }
            if (this.stage === 2) {
                throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
            }
            this.stage = 1;
            return (e, t)=>{
                if (t instanceof G.NumericValue) {
                    let r = `${`${Ms}nv${this.counter++}`}_` + t.string;
                    this.values.set(`"${r}"`, t.string);
                    return r;
                }
                if (typeof t === "bigint") {
                    let r = t.toString();
                    let s = `${`${Ms}b${this.counter++}`}_` + r;
                    this.values.set(`"${s}"`, r);
                    return s;
                }
                return t;
            };
        }
        replaceInJson(e) {
            if (this.stage === 0) {
                throw Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
            }
            if (this.stage === 2) {
                throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
            }
            this.stage = 2;
            if (this.counter === 0) {
                return e;
            }
            for (let [t, r] of this.values){
                e = e.replace(t, r);
            }
            return e;
        }
    }
    class Yt extends ge {
        settings;
        buffer;
        rootSchema;
        constructor(e){
            super();
            this.settings = e;
        }
        write(e, t) {
            this.rootSchema = L.NormalizedSchema.of(e);
            this.buffer = this._write(this.rootSchema, t);
        }
        writeDiscriminatedDocument(e, t) {
            this.write(e, t);
            if (typeof this.buffer === "object") {
                this.buffer.__type = L.NormalizedSchema.of(e).getName(true);
            }
        }
        flush() {
            let { rootSchema } = this;
            this.rootSchema = undefined;
            if (rootSchema?.isStructSchema() || rootSchema?.isDocumentSchema()) {
                let t = new Bs;
                return t.replaceInJson(JSON.stringify(this.buffer, t.createReplacer(), 0));
            }
            return this.buffer;
        }
        _write(e, t, r) {
            let s = t !== null && typeof t === "object";
            let o = L.NormalizedSchema.of(e);
            if (o.isListSchema() && Array.isArray(t)) {
                let a = o.getValueSchema();
                let c = [];
                let d = !!o.getMergedTraits().sparse;
                for (let f of t){
                    if (d || f != null) {
                        c.push(this._write(a, f));
                    }
                }
                return c;
            } else if (o.isMapSchema() && s) {
                let a = o.getValueSchema();
                let c = {};
                let d = !!o.getMergedTraits().sparse;
                for (let [f, m] of Object.entries(t)){
                    if (d || m != null) {
                        c[f] = this._write(a, m);
                    }
                }
                return c;
            } else if (o.isStructSchema() && s) {
                let a = {};
                for (let [c, d] of o.structIterator()){
                    let f = this.settings.jsonName ? d.getMergedTraits().jsonName ?? c : c;
                    let m = this._write(d, t[c], o);
                    if (m !== undefined) {
                        a[f] = m;
                    }
                }
                return a;
            }
            if (t === null && r?.isStructSchema()) {
                return;
            }
            if (o.isBlobSchema() && (t instanceof Uint8Array || typeof t === "string") || o.isDocumentSchema() && t instanceof Uint8Array) {
                if (o === this.rootSchema) {
                    return t;
                }
                return (this.serdeContext?.base64Encoder ?? Fe.toBase64)(t);
            }
            if ((o.isTimestampSchema() || o.isDocumentSchema()) && t instanceof Date) {
                switch(Q.determineTimestampFormat(o, this.settings)){
                    case 5:
                        return t.toISOString().replace(".000Z", "Z");
                    case 6:
                        return G.dateToUtcString(t);
                    case 7:
                        return t.getTime() / 1000;
                    default:
                        console.warn("Missing timestamp format, using epoch seconds", t);
                        return t.getTime() / 1000;
                }
            }
            if (o.isNumericSchema() && typeof t === "number") {
                if (Math.abs(t) === Infinity || isNaN(t)) {
                    return String(t);
                }
            }
            if (o.isStringSchema()) {
                if (typeof t === "undefined" && o.isIdempotencyToken()) {
                    return G.generateIdempotencyToken();
                }
                let a = o.getMergedTraits().mediaType;
                if (t != null && a) {
                    if (a === "application/json" || a.endsWith("+json")) {
                        return G.LazyJsonString.from(t);
                    }
                }
            }
            if (o.isDocumentSchema()) {
                if (s) {
                    let a = Array.isArray(t) ? [] : {};
                    for (let [c, d] of Object.entries(t)){
                        if (d instanceof G.NumericValue) {
                            a[c] = d;
                        } else {
                            a[c] = this._write(o, d);
                        }
                    }
                    return a;
                } else {
                    return structuredClone(t);
                }
            }
            return t;
        }
    }
    class rt extends ge {
        settings;
        constructor(e){
            super();
            this.settings = e;
        }
        createSerializer() {
            let e = new Yt(this.settings);
            e.setSerdeContext(this.serdeContext);
            return e;
        }
        createDeserializer() {
            let e = new Qt(this.settings);
            e.setSerdeContext(this.serdeContext);
            return e;
        }
    }
    class st extends Q.RpcProtocol {
        serializer;
        deserializer;
        serviceTarget;
        codec;
        mixin;
        awsQueryCompatible;
        constructor({ defaultNamespace, serviceTarget, awsQueryCompatible }){
            super({
                defaultNamespace
            });
            this.serviceTarget = serviceTarget;
            this.codec = new rt({
                timestampFormat: {
                    useTrait: true,
                    default: 7
                },
                jsonName: false
            });
            this.serializer = this.codec.createSerializer();
            this.deserializer = this.codec.createDeserializer();
            this.awsQueryCompatible = !!awsQueryCompatible;
            this.mixin = new Ie(this.awsQueryCompatible);
        }
        async serializeRequest(e, t, r) {
            let s = await super.serializeRequest(e, t, r);
            if (!s.path.endsWith("/")) {
                s.path += "/";
            }
            Object.assign(s.headers, {
                "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`,
                "x-amz-target": `${this.serviceTarget}.${e.name}`
            });
            if (this.awsQueryCompatible) {
                s.headers["x-amzn-query-mode"] = "true";
            }
            if (L.deref(e.input) === "unit" || !s.body) {
                s.body = "{}";
            }
            return s;
        }
        getPayloadCodec() {
            return this.codec;
        }
        async handleError(e, t, r, s, o) {
            if (this.awsQueryCompatible) {
                this.mixin.setQueryCompatError(s, r);
            }
            let a = Kt(r, s) ?? "Unknown";
            let { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o);
            let f = L.NormalizedSchema.of(errorSchema);
            let m = s.message ?? s.Message ?? "Unknown";
            let b = new (L.TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error)(m);
            let x = {};
            for (let [N, T] of f.structIterator()){
                let I = T.getMergedTraits().jsonName ?? N;
                x[N] = this.codec.createDeserializer().readObject(T, s[I]);
            }
            if (this.awsQueryCompatible) {
                this.mixin.queryCompatOutput(s, x);
            }
            throw this.mixin.decorateServiceException(Object.assign(b, errorMetadata, {
                $fault: f.getMergedTraits().error,
                message: m
            }, x), s);
        }
    }
    class Ls extends st {
        constructor({ defaultNamespace, serviceTarget, awsQueryCompatible }){
            super({
                defaultNamespace,
                serviceTarget,
                awsQueryCompatible
            });
        }
        getShapeId() {
            return "aws.protocols#awsJson1_0";
        }
        getJsonRpcVersion() {
            return "1.0";
        }
        getDefaultContentType() {
            return "application/x-amz-json-1.0";
        }
    }
    class Us extends st {
        constructor({ defaultNamespace, serviceTarget, awsQueryCompatible }){
            super({
                defaultNamespace,
                serviceTarget,
                awsQueryCompatible
            });
        }
        getShapeId() {
            return "aws.protocols#awsJson1_1";
        }
        getJsonRpcVersion() {
            return "1.1";
        }
        getDefaultContentType() {
            return "application/x-amz-json-1.1";
        }
    }
    class Vs extends Q.HttpBindingProtocol {
        serializer;
        deserializer;
        codec;
        mixin = new Ie;
        constructor({ defaultNamespace }){
            super({
                defaultNamespace
            });
            let t = {
                timestampFormat: {
                    useTrait: true,
                    default: 7
                },
                httpBindings: true,
                jsonName: true
            };
            this.codec = new rt(t);
            this.serializer = new Q.HttpInterceptingShapeSerializer(this.codec.createSerializer(), t);
            this.deserializer = new Q.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), t);
        }
        getShapeId() {
            return "aws.protocols#restJson1";
        }
        getPayloadCodec() {
            return this.codec;
        }
        setSerdeContext(e) {
            this.codec.setSerdeContext(e);
            super.setSerdeContext(e);
        }
        async serializeRequest(e, t, r) {
            let s = await super.serializeRequest(e, t, r);
            let o = L.NormalizedSchema.of(e.input);
            if (!s.headers["content-type"]) {
                let a = this.mixin.resolveRestContentType(this.getDefaultContentType(), o);
                if (a) {
                    s.headers["content-type"] = a;
                }
            }
            if (s.body == null && s.headers["content-type"] === this.getDefaultContentType()) {
                s.body = "{}";
            }
            return s;
        }
        async deserializeResponse(e, t, r) {
            let s = await super.deserializeResponse(e, t, r);
            let o = L.NormalizedSchema.of(e.output);
            for (let [a, c] of o.structIterator()){
                if (c.getMemberTraits().httpPayload && !(a in s)) {
                    s[a] = null;
                }
            }
            return s;
        }
        async handleError(e, t, r, s, o) {
            let a = Kt(r, s) ?? "Unknown";
            let { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o);
            let f = L.NormalizedSchema.of(errorSchema);
            let m = s.message ?? s.Message ?? "Unknown";
            let b = new (L.TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error)(m);
            await this.deserializeHttpMessage(errorSchema, t, r, s);
            let x = {};
            for (let [N, T] of f.structIterator()){
                let I = T.getMergedTraits().jsonName ?? N;
                x[N] = this.codec.createDeserializer().readObject(T, s[I]);
            }
            throw this.mixin.decorateServiceException(Object.assign(b, errorMetadata, {
                $fault: f.getMergedTraits().error,
                message: m
            }, x), s);
        }
        getDefaultContentType() {
            return "application/json";
        }
    }
    const Qa = (e)=>{
        if (e == null) {
            return;
        }
        if (typeof e === "object" && "__type" in e) {
            delete e.__type;
        }
        return de.expectUnion(e);
    };
    class nt extends ge {
        settings;
        stringDeserializer;
        constructor(e){
            super();
            this.settings = e;
            this.stringDeserializer = new Q.FromStringShapeDeserializer(e);
        }
        setSerdeContext(e) {
            this.serdeContext = e;
            this.stringDeserializer.setSerdeContext(e);
        }
        read(e, t, r) {
            let s = L.NormalizedSchema.of(e);
            let o = s.getMemberSchemas();
            if (s.isStructSchema() && s.isMemberSchema() && !!Object.values(o).find((f)=>!!f.getMemberTraits().eventPayload)) {
                let f = {};
                let m = Object.keys(o)[0];
                if (o[m].isBlobSchema()) {
                    f[m] = t;
                } else {
                    f[m] = this.read(o[m], t);
                }
                return f;
            }
            let c = (this.serdeContext?.utf8Encoder ?? Ds.toUtf8)(t);
            let d = this.parseXml(c);
            return this.readSchema(e, r ? d[r] : d);
        }
        readSchema(e, t) {
            let r = L.NormalizedSchema.of(e);
            if (r.isUnitSchema()) {
                return;
            }
            let s = r.getMergedTraits();
            if (r.isListSchema() && !Array.isArray(t)) {
                return this.readSchema(r, [
                    t
                ]);
            }
            if (t == null) {
                return t;
            }
            if (typeof t === "object") {
                let o = !!s.sparse;
                let a = !!s.xmlFlattened;
                if (r.isListSchema()) {
                    let d = r.getValueSchema();
                    let f = [];
                    let m = d.getMergedTraits().xmlName ?? "member";
                    let y = a ? t : (t[0] ?? t)[m];
                    let b = Array.isArray(y) ? y : [
                        y
                    ];
                    for (let x of b){
                        if (x != null || o) {
                            f.push(this.readSchema(d, x));
                        }
                    }
                    return f;
                }
                let c = {};
                if (r.isMapSchema()) {
                    let d = r.getKeySchema();
                    let f = r.getValueSchema();
                    let m;
                    if (a) {
                        m = Array.isArray(t) ? t : [
                            t
                        ];
                    } else {
                        m = Array.isArray(t.entry) ? t.entry : [
                            t.entry
                        ];
                    }
                    let y = d.getMergedTraits().xmlName ?? "key";
                    let b = f.getMergedTraits().xmlName ?? "value";
                    for (let x of m){
                        let N = x[y];
                        let T = x[b];
                        if (T != null || o) {
                            c[N] = this.readSchema(f, T);
                        }
                    }
                    return c;
                }
                if (r.isStructSchema()) {
                    for (let [d, f] of r.structIterator()){
                        let m = f.getMergedTraits();
                        let y = !m.httpPayload ? f.getMemberTraits().xmlName ?? d : m.xmlName ?? f.getName();
                        if (t[y] != null) {
                            c[d] = this.readSchema(f, t[y]);
                        }
                    }
                    return c;
                }
                if (r.isDocumentSchema()) {
                    return t;
                }
                throw Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${r.getName(true)}`);
            }
            if (r.isListSchema()) {
                return [];
            }
            if (r.isMapSchema() || r.isStructSchema()) {
                return {};
            }
            return this.stringDeserializer.read(r, t);
        }
        parseXml(e) {
            if (e.length) {
                let t;
                try {
                    t = re.parseXML(e);
                } catch (error) {
                    if (error && typeof error === "object") {
                        Object.defineProperty(error, "$responseBodyText", {
                            value: e
                        });
                    }
                    throw error;
                }
                let r = "#text";
                let s = Object.keys(t)[0];
                let o = t[s];
                if (o[r]) {
                    o[s] = o[r];
                    delete o[r];
                }
                return de.getValueFromTextNode(o);
            }
            return {};
        }
    }
    class Fs extends ge {
        settings;
        buffer;
        constructor(e){
            super();
            this.settings = e;
        }
        write(e, t, r = "") {
            if (this.buffer === undefined) {
                this.buffer = "";
            }
            let s = L.NormalizedSchema.of(e);
            if (r && !r.endsWith(".")) {
                r += ".";
            }
            if (s.isBlobSchema()) {
                if (typeof t === "string" || t instanceof Uint8Array) {
                    this.writeKey(r);
                    this.writeValue((this.serdeContext?.base64Encoder ?? Fe.toBase64)(t));
                }
            } else if (s.isBooleanSchema() || s.isNumericSchema() || s.isStringSchema()) {
                if (t != null) {
                    this.writeKey(r);
                    this.writeValue(String(t));
                } else if (s.isIdempotencyToken()) {
                    this.writeKey(r);
                    this.writeValue(G.generateIdempotencyToken());
                }
            } else if (s.isBigIntegerSchema()) {
                if (t != null) {
                    this.writeKey(r);
                    this.writeValue(String(t));
                }
            } else if (s.isBigDecimalSchema()) {
                if (t != null) {
                    this.writeKey(r);
                    this.writeValue(t instanceof G.NumericValue ? t.string : String(t));
                }
            } else if (s.isTimestampSchema()) {
                if (t instanceof Date) {
                    this.writeKey(r);
                    switch(Q.determineTimestampFormat(s, this.settings)){
                        case 5:
                            this.writeValue(t.toISOString().replace(".000Z", "Z"));
                            break;
                        case 6:
                            this.writeValue(de.dateToUtcString(t));
                            break;
                        case 7:
                            this.writeValue(String(t.getTime() / 1000));
                            break;
                    }
                }
            } else if (s.isDocumentSchema()) {
                throw Error(`@aws-sdk/core/protocols - QuerySerializer unsupported document type ${s.getName(true)}`);
            } else if (s.isListSchema()) {
                if (Array.isArray(t)) {
                    if (t.length === 0) {
                        if (this.settings.serializeEmptyLists) {
                            this.writeKey(r);
                            this.writeValue("");
                        }
                    } else {
                        let o = s.getValueSchema();
                        let a = this.settings.flattenLists || s.getMergedTraits().xmlFlattened;
                        let c = 1;
                        for (let d of t){
                            if (d == null) {
                                continue;
                            }
                            let f = this.getKey("member", o.getMergedTraits().xmlName);
                            let m = a ? `${r}${c}` : `${r}${f}.${c}`;
                            this.write(o, d, m);
                            ++c;
                        }
                    }
                }
            } else if (s.isMapSchema()) {
                if (t && typeof t === "object") {
                    let o = s.getKeySchema();
                    let a = s.getValueSchema();
                    let c = s.getMergedTraits().xmlFlattened;
                    let d = 1;
                    for (let [f, m] of Object.entries(t)){
                        if (m == null) {
                            continue;
                        }
                        let y = this.getKey("key", o.getMergedTraits().xmlName);
                        let b = c ? `${r}${d}.${y}` : `${r}entry.${d}.${y}`;
                        let x = this.getKey("value", a.getMergedTraits().xmlName);
                        let N = c ? `${r}${d}.${x}` : `${r}entry.${d}.${x}`;
                        this.write(o, f, b);
                        this.write(a, m, N);
                        ++d;
                    }
                }
            } else if (s.isStructSchema()) {
                if (t && typeof t === "object") {
                    for (let [o, a] of s.structIterator()){
                        if (t[o] == null && !a.isIdempotencyToken()) {
                            continue;
                        }
                        let c = this.getKey(o, a.getMergedTraits().xmlName);
                        let d = `${r}${c}`;
                        this.write(a, t[o], d);
                    }
                }
            } else if (s.isUnitSchema()) ;
            else {
                throw Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${s.getName(true)}`);
            }
        }
        flush() {
            if (this.buffer === undefined) {
                throw Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
            }
            let buffer = this.buffer;
            delete this.buffer;
            return buffer;
        }
        getKey(e, t) {
            let r = t ?? e;
            if (this.settings.capitalizeKeys) {
                return r[0].toUpperCase() + r.slice(1);
            }
            return r;
        }
        writeKey(e) {
            if (e.endsWith(".")) {
                e = e.slice(0, e.length - 1);
            }
            this.buffer += `&${Q.extendedEncodeURIComponent(e)}=`;
        }
        writeValue(e) {
            this.buffer += Q.extendedEncodeURIComponent(e);
        }
    }
    class Jt extends Q.RpcProtocol {
        options;
        serializer;
        deserializer;
        mixin = new Ie;
        constructor(e){
            super({
                defaultNamespace: e.defaultNamespace
            });
            this.options = e;
            let t = {
                timestampFormat: {
                    useTrait: true,
                    default: 5
                },
                httpBindings: false,
                xmlNamespace: e.xmlNamespace,
                serviceNamespace: e.defaultNamespace,
                serializeEmptyLists: true
            };
            this.serializer = new Fs(t);
            this.deserializer = new nt(t);
        }
        getShapeId() {
            return "aws.protocols#awsQuery";
        }
        setSerdeContext(e) {
            this.serializer.setSerdeContext(e);
            this.deserializer.setSerdeContext(e);
        }
        getPayloadCodec() {
            throw Error("AWSQuery protocol has no payload codec.");
        }
        async serializeRequest(e, t, r) {
            let s = await super.serializeRequest(e, t, r);
            if (!s.path.endsWith("/")) {
                s.path += "/";
            }
            Object.assign(s.headers, {
                "content-type": "application/x-www-form-urlencoded"
            });
            if (L.deref(e.input) === "unit" || !s.body) {
                s.body = "";
            }
            let o = e.name.split("#")[1] ?? e.name;
            s.body = `Action=${o}&Version=${this.options.version}` + s.body;
            if (s.body.endsWith("&")) {
                s.body = s.body.slice(-1);
            }
            return s;
        }
        async deserializeResponse(e, t, r) {
            let deserializer = this.deserializer;
            let o = L.NormalizedSchema.of(e.output);
            let a = {};
            if (r.statusCode >= 300) {
                let y = await Q.collectBody(r.body, t);
                if (y.byteLength > 0) {
                    Object.assign(a, await deserializer.read(15, y));
                }
                await this.handleError(e, t, r, a, this.deserializeMetadata(r));
            }
            for(let y in r.headers){
                let b = r.headers[y];
                delete r.headers[y];
                r.headers[y.toLowerCase()] = b;
            }
            let c = e.name.split("#")[1] ?? e.name;
            let d = o.isStructSchema() && this.useNestedResult() ? `${c}Result` : undefined;
            let f = await Q.collectBody(r.body, t);
            if (f.byteLength > 0) {
                Object.assign(a, await deserializer.read(o, f, d));
            }
            return {
                $metadata: this.deserializeMetadata(r),
                ...a
            };
        }
        useNestedResult() {
            return true;
        }
        async handleError(e, t, r, s, o) {
            let a = this.loadQueryErrorCode(r, s) ?? "Unknown";
            let c = this.loadQueryError(s);
            let d = this.loadQueryErrorMessage(s);
            c.message = d;
            c.Error = {
                Type: c.Type,
                Code: c.Code,
                Message: d
            };
            let { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, c, o, (T, I)=>{
                try {
                    return T.getSchema(I);
                } catch (F) {
                    return T.find((v)=>L.NormalizedSchema.of(v).getMergedTraits().awsQueryError?.[0] === I);
                }
            });
            let y = L.NormalizedSchema.of(errorSchema);
            let x = new (L.TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error)(d);
            let N = {
                Error: c.Error
            };
            for (let [T, I] of y.structIterator()){
                let F = I.getMergedTraits().xmlName ?? T;
                let v = c[F] ?? s[F];
                N[T] = this.deserializer.readSchema(I, v);
            }
            throw this.mixin.decorateServiceException(Object.assign(x, errorMetadata, {
                $fault: y.getMergedTraits().error,
                message: d
            }, N), s);
        }
        loadQueryErrorCode(e, t) {
            let r = (t.Errors?.[0]?.Error ?? t.Errors?.Error ?? t.Error)?.Code;
            if (r !== undefined) {
                return r;
            }
            if (e.statusCode == 404) {
                return "NotFound";
            }
        }
        loadQueryError(e) {
            return e.Errors?.[0]?.Error ?? e.Errors?.Error ?? e.Error;
        }
        loadQueryErrorMessage(e) {
            let t = this.loadQueryError(e);
            return t?.message ?? t?.Message ?? e.message ?? e.Message ?? "Unknown";
        }
        getDefaultContentType() {
            return "application/x-www-form-urlencoded";
        }
    }
    class js extends Jt {
        options;
        constructor(e){
            super(e);
            this.options = e;
            let t = {
                capitalizeKeys: true,
                flattenLists: true,
                serializeEmptyLists: false
            };
            Object.assign(this.serializer.settings, t);
        }
        useNestedResult() {
            return false;
        }
    }
    const qs = (e, t)=>$s(e, t).then((r)=>{
            if (r.length) {
                let s;
                try {
                    s = re.parseXML(r);
                } catch (error) {
                    if (error && typeof error === "object") {
                        Object.defineProperty(error, "$responseBodyText", {
                            value: r
                        });
                    }
                    throw error;
                }
                let o = "#text";
                let a = Object.keys(s)[0];
                let c = s[a];
                if (c[o]) {
                    c[a] = c[o];
                    delete c[o];
                }
                return de.getValueFromTextNode(c);
            }
            return {};
        });
    const Ya = async (e, t)=>{
        let r = await qs(e, t);
        if (r.Error) {
            r.Error.message = r.Error.message ?? r.Error.Message;
        }
        return r;
    };
    const Hs = (e, t)=>{
        if (t?.Error?.Code !== undefined) {
            return t.Error.Code;
        }
        if (t?.Code !== undefined) {
            return t.Code;
        }
        if (e.statusCode == 404) {
            return "NotFound";
        }
    };
    class Zt extends ge {
        settings;
        stringBuffer;
        byteBuffer;
        buffer;
        constructor(e){
            super();
            this.settings = e;
        }
        write(e, t) {
            let r = L.NormalizedSchema.of(e);
            if (r.isStringSchema() && typeof t === "string") {
                this.stringBuffer = t;
            } else if (r.isBlobSchema()) {
                this.byteBuffer = "byteLength" in t ? t : (this.serdeContext?.base64Decoder ?? Fe.fromBase64)(t);
            } else {
                this.buffer = this.writeStruct(r, t, undefined);
                let s = r.getMergedTraits();
                if (s.httpPayload && !s.xmlName) {
                    this.buffer.withName(r.getName());
                }
            }
        }
        flush() {
            if (this.byteBuffer !== undefined) {
                let t = this.byteBuffer;
                delete this.byteBuffer;
                return t;
            }
            if (this.stringBuffer !== undefined) {
                let t = this.stringBuffer;
                delete this.stringBuffer;
                return t;
            }
            let buffer = this.buffer;
            if (this.settings.xmlNamespace) {
                if (!buffer?.attributes?.xmlns) {
                    buffer.addAttribute("xmlns", this.settings.xmlNamespace);
                }
            }
            delete this.buffer;
            return buffer.toString();
        }
        writeStruct(e, t, r) {
            let s = e.getMergedTraits();
            let o = e.isMemberSchema() && !s.httpPayload ? e.getMemberTraits().xmlName ?? e.getMemberName() : s.xmlName ?? e.getName();
            if (!o || !e.isStructSchema()) {
                throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${e.getName(true)}.`);
            }
            let a = re.XmlNode.of(o);
            let [c, d] = this.getXmlnsAttribute(e, r);
            for (let [f, m] of e.structIterator()){
                let y = t[f];
                if (y != null || m.isIdempotencyToken()) {
                    if (m.getMergedTraits().xmlAttribute) {
                        a.addAttribute(m.getMergedTraits().xmlName ?? f, this.writeSimple(m, y));
                        continue;
                    }
                    if (m.isListSchema()) {
                        this.writeList(m, y, a, d);
                    } else if (m.isMapSchema()) {
                        this.writeMap(m, y, a, d);
                    } else if (m.isStructSchema()) {
                        a.addChildNode(this.writeStruct(m, y, d));
                    } else {
                        let b = re.XmlNode.of(m.getMergedTraits().xmlName ?? m.getMemberName());
                        this.writeSimpleInto(m, y, b, d);
                        a.addChildNode(b);
                    }
                }
            }
            if (d) {
                a.addAttribute(c, d);
            }
            return a;
        }
        writeList(e, t, r, s) {
            if (!e.isMemberSchema()) {
                throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${e.getName(true)}`);
            }
            let o = e.getMergedTraits();
            let a = e.getValueSchema();
            let c = a.getMergedTraits();
            let d = !!c.sparse;
            let f = !!o.xmlFlattened;
            let [m, y] = this.getXmlnsAttribute(e, s);
            let b = (x, N)=>{
                if (a.isListSchema()) {
                    this.writeList(a, Array.isArray(N) ? N : [
                        N
                    ], x, y);
                } else if (a.isMapSchema()) {
                    this.writeMap(a, N, x, y);
                } else if (a.isStructSchema()) {
                    let T = this.writeStruct(a, N, y);
                    x.addChildNode(T.withName(f ? o.xmlName ?? e.getMemberName() : c.xmlName ?? "member"));
                } else {
                    let T = re.XmlNode.of(f ? o.xmlName ?? e.getMemberName() : c.xmlName ?? "member");
                    this.writeSimpleInto(a, N, T, y);
                    x.addChildNode(T);
                }
            };
            if (f) {
                for (let x of t){
                    if (d || x != null) {
                        b(r, x);
                    }
                }
            } else {
                let x = re.XmlNode.of(o.xmlName ?? e.getMemberName());
                if (y) {
                    x.addAttribute(m, y);
                }
                for (let N of t){
                    if (d || N != null) {
                        b(x, N);
                    }
                }
                r.addChildNode(x);
            }
        }
        writeMap(e, t, r, s, o = false) {
            if (!e.isMemberSchema()) {
                throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${e.getName(true)}`);
            }
            let a = e.getMergedTraits();
            let c = e.getKeySchema();
            let f = c.getMergedTraits().xmlName ?? "key";
            let m = e.getValueSchema();
            let y = m.getMergedTraits();
            let b = y.xmlName ?? "value";
            let x = !!y.sparse;
            let N = !!a.xmlFlattened;
            let [T, I] = this.getXmlnsAttribute(e, s);
            let F = (v, W, M)=>{
                let ee = re.XmlNode.of(f, W);
                let [Pe, q] = this.getXmlnsAttribute(c, I);
                if (q) {
                    ee.addAttribute(Pe, q);
                }
                v.addChildNode(ee);
                let K = re.XmlNode.of(b);
                if (m.isListSchema()) {
                    this.writeList(m, M, K, I);
                } else if (m.isMapSchema()) {
                    this.writeMap(m, M, K, I, true);
                } else if (m.isStructSchema()) {
                    K = this.writeStruct(m, M, I);
                } else {
                    this.writeSimpleInto(m, M, K, I);
                }
                v.addChildNode(K);
            };
            if (N) {
                for (let [v, W] of Object.entries(t)){
                    if (x || W != null) {
                        let M = re.XmlNode.of(a.xmlName ?? e.getMemberName());
                        F(M, v, W);
                        r.addChildNode(M);
                    }
                }
            } else {
                let v;
                if (!o) {
                    v = re.XmlNode.of(a.xmlName ?? e.getMemberName());
                    if (I) {
                        v.addAttribute(T, I);
                    }
                    r.addChildNode(v);
                }
                for (let [W, M] of Object.entries(t)){
                    if (x || M != null) {
                        let ee = re.XmlNode.of("entry");
                        F(ee, W, M);
                        (o ? r : v).addChildNode(ee);
                    }
                }
            }
        }
        writeSimple(e, t) {
            if (t === null) {
                throw Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
            }
            let r = L.NormalizedSchema.of(e);
            let s = null;
            if (t && typeof t === "object") {
                if (r.isBlobSchema()) {
                    s = (this.serdeContext?.base64Encoder ?? Fe.toBase64)(t);
                } else if (r.isTimestampSchema() && t instanceof Date) {
                    switch(Q.determineTimestampFormat(r, this.settings)){
                        case 5:
                            s = t.toISOString().replace(".000Z", "Z");
                            break;
                        case 6:
                            s = de.dateToUtcString(t);
                            break;
                        case 7:
                            s = String(t.getTime() / 1000);
                            break;
                        default:
                            console.warn("Missing timestamp format, using http date", t);
                            s = de.dateToUtcString(t);
                            break;
                    }
                } else if (r.isBigDecimalSchema() && t) {
                    if (t instanceof G.NumericValue) {
                        return t.string;
                    }
                    return String(t);
                } else if (r.isMapSchema() || r.isListSchema()) {
                    throw Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.");
                } else {
                    throw Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${r.getName(true)}`);
                }
            }
            if (r.isBooleanSchema() || r.isNumericSchema() || r.isBigIntegerSchema() || r.isBigDecimalSchema()) {
                s = String(t);
            }
            if (r.isStringSchema()) {
                if (t === undefined && r.isIdempotencyToken()) {
                    s = G.generateIdempotencyToken();
                } else {
                    s = String(t);
                }
            }
            if (s === null) {
                throw Error(`Unhandled schema-value pair ${r.getName(true)}=${t}`);
            }
            return s;
        }
        writeSimpleInto(e, t, r, s) {
            let o = this.writeSimple(e, t);
            let a = L.NormalizedSchema.of(e);
            let c = new re.XmlText(o);
            let [d, f] = this.getXmlnsAttribute(a, s);
            if (f) {
                r.addAttribute(d, f);
            }
            r.addChildNode(c);
        }
        getXmlnsAttribute(e, t) {
            let r = e.getMergedTraits();
            let [s, o] = r.xmlNamespace ?? [];
            if (o && o !== t) {
                return [
                    s ? `xmlns:${s}` : "xmlns",
                    o
                ];
            }
            return [
                undefined,
                undefined
            ];
        }
    }
    class er extends ge {
        settings;
        constructor(e){
            super();
            this.settings = e;
        }
        createSerializer() {
            let e = new Zt(this.settings);
            e.setSerdeContext(this.serdeContext);
            return e;
        }
        createDeserializer() {
            let e = new nt(this.settings);
            e.setSerdeContext(this.serdeContext);
            return e;
        }
    }
    class Gs extends Q.HttpBindingProtocol {
        codec;
        serializer;
        deserializer;
        mixin = new Ie;
        constructor(e){
            super(e);
            let t = {
                timestampFormat: {
                    useTrait: true,
                    default: 5
                },
                httpBindings: true,
                xmlNamespace: e.xmlNamespace,
                serviceNamespace: e.defaultNamespace
            };
            this.codec = new er(t);
            this.serializer = new Q.HttpInterceptingShapeSerializer(this.codec.createSerializer(), t);
            this.deserializer = new Q.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), t);
        }
        getPayloadCodec() {
            return this.codec;
        }
        getShapeId() {
            return "aws.protocols#restXml";
        }
        async serializeRequest(e, t, r) {
            let s = await super.serializeRequest(e, t, r);
            let o = L.NormalizedSchema.of(e.input);
            if (!s.headers["content-type"]) {
                let a = this.mixin.resolveRestContentType(this.getDefaultContentType(), o);
                if (a) {
                    s.headers["content-type"] = a;
                }
            }
            if (s.headers["content-type"] === this.getDefaultContentType()) {
                if (typeof s.body === "string") {
                    s.body = `<?xml version="1.0" encoding="UTF-8"?>${s.body}`;
                }
            }
            return s;
        }
        async deserializeResponse(e, t, r) {
            return super.deserializeResponse(e, t, r);
        }
        async handleError(e, t, r, s, o) {
            let a = Hs(r, s) ?? "Unknown";
            let { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o);
            let f = L.NormalizedSchema.of(errorSchema);
            let m = s.Error?.message ?? s.Error?.Message ?? s.message ?? s.Message ?? "Unknown";
            let b = new (L.TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error)(m);
            await this.deserializeHttpMessage(errorSchema, t, r, s);
            let x = {};
            for (let [N, T] of f.structIterator()){
                let I = T.getMergedTraits().xmlName ?? N;
                let F = s.Error?.[I] ?? s[I];
                x[N] = this.codec.createDeserializer().readSchema(T, F);
            }
            throw this.mixin.decorateServiceException(Object.assign(b, errorMetadata, {
                $fault: f.getMergedTraits().error,
                message: m
            }, x), s);
        }
        getDefaultContentType() {
            return "application/xml";
        }
    }
    Ja.AWSSDKSigV4Signer = Ba;
    Ja.AwsEc2QueryProtocol = js;
    Ja.AwsJson1_0Protocol = Ls;
    Ja.AwsJson1_1Protocol = Us;
    Ja.AwsJsonRpcProtocol = st;
    Ja.AwsQueryProtocol = Jt;
    Ja.AwsRestJsonProtocol = Vs;
    Ja.AwsRestXmlProtocol = Gs;
    Ja.AwsSdkSigV4ASigner = Ps;
    Ja.AwsSdkSigV4Signer = tt;
    Ja.AwsSmithyRpcV2CborProtocol = zs;
    Ja.JsonCodec = rt;
    Ja.JsonShapeDeserializer = Qt;
    Ja.JsonShapeSerializer = Yt;
    Ja.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS = La;
    Ja.NODE_SIGV4A_CONFIG_OPTIONS = Va;
    Ja.XmlCodec = er;
    Ja.XmlShapeDeserializer = nt;
    Ja.XmlShapeSerializer = Zt;
    Ja._toBool = Ga;
    Ja._toNum = Xa;
    Ja._toStr = Ha;
    Ja.awsExpectUnion = Qa;
    Ja.emitWarningIfUnsupportedVersion = Pa;
    Ja.getBearerTokenEnvKey = ks;
    Ja.loadRestJsonErrorCode = Kt;
    Ja.loadRestXmlErrorCode = Hs;
    Ja.parseJsonBody = Wt;
    Ja.parseJsonErrorBody = Ka;
    Ja.parseXmlBody = qs;
    Ja.parseXmlErrorBody = Ya;
    Ja.resolveAWSSDKSigV4Config = Fa;
    Ja.resolveAwsSdkSigV4AConfig = Ua;
    Ja.resolveAwsSdkSigV4Config = vs;
    Ja.setCredentialFeature = ka;
    Ja.setFeature = va;
    Ja.setTokenFeature = za;
    Ja.state = qt;
    Ja.validateSigningProperties = Xt;
});
const n7 = C(function(Qc) {
    const Bc = xb();
    const Lc = t7();
    const Uc = jm();
    const ie = DT();
    let Qs;
    function Vc(e) {
        if (e === undefined) {
            return true;
        }
        return typeof e === "string" && e.length <= 50;
    }
    function Fc(e) {
        let t = Bc.normalizeProvider(e.userAgentAppId ?? Qs);
        let { customUserAgent } = e;
        return Object.assign(e, {
            customUserAgent: typeof customUserAgent === "string" ? [
                [
                    customUserAgent
                ]
            ] : customUserAgent,
            userAgentAppId: async ()=>{
                let s = await t();
                if (!Vc(s)) {
                    let o = e.logger?.constructor?.name === "NoOpLogger" || !e.logger ? console : e.logger;
                    if (typeof s !== "string") {
                        o?.warn("userAgentAppId must be a string or undefined.");
                    } else if (s.length > 50) {
                        o?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
                    }
                }
                return s;
            }
        });
    }
    const jc = /\d{12}\.ddb/;
    async function qc(e, t, r) {
        if (r.request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
            ie.setFeature(e, "PROTOCOL_RPC_V2_CBOR", "M");
        }
        if (typeof t.retryStrategy === "function") {
            let a = await t.retryStrategy();
            if (typeof a.acquireInitialRetryToken === "function") {
                if (a.constructor?.name?.includes("Adaptive")) {
                    ie.setFeature(e, "RETRY_MODE_ADAPTIVE", "F");
                } else {
                    ie.setFeature(e, "RETRY_MODE_STANDARD", "E");
                }
            } else {
                ie.setFeature(e, "RETRY_MODE_LEGACY", "D");
            }
        }
        if (typeof t.accountIdEndpointMode === "function") {
            let a = e.endpointV2;
            if (String(a?.url?.hostname).match(jc)) {
                ie.setFeature(e, "ACCOUNT_ID_ENDPOINT", "O");
            }
            switch(await t.accountIdEndpointMode?.()){
                case "disabled":
                    ie.setFeature(e, "ACCOUNT_ID_MODE_DISABLED", "Q");
                    break;
                case "preferred":
                    ie.setFeature(e, "ACCOUNT_ID_MODE_PREFERRED", "P");
                    break;
                case "required":
                    ie.setFeature(e, "ACCOUNT_ID_MODE_REQUIRED", "R");
                    break;
            }
        }
        let o = e.__smithy_context?.selectedHttpAuthScheme?.identity;
        if (o?.$source) {
            let a = o;
            if (a.accountId) {
                ie.setFeature(e, "RESOLVED_ACCOUNT_ID", "T");
            }
            for (let [c, d] of Object.entries(a.$source ?? {})){
                ie.setFeature(e, c, d);
            }
        }
    }
    const Xs = "user-agent";
    const tr = "x-amz-user-agent";
    const Ws = " ";
    const rr = "/";
    const Hc = /[^!$%&'*+\-.^_`|~\w]/g;
    const Gc = /[^!$%&'*+\-.^_`|~\w#]/g;
    const Ks = "-";
    const Xc = 1024;
    function Wc(e) {
        let t = "";
        for(let r in e){
            let s = e[r];
            if (t.length + s.length + 1 <= Xc) {
                if (t.length) {
                    t += `,${s}`;
                } else {
                    t += s;
                }
                continue;
            }
            break;
        }
        return t;
    }
    const Ys = (e)=>(t, r)=>async (s)=>{
                let { request } = s;
                if (!Uc.HttpRequest.isInstance(request)) {
                    return t(s);
                }
                let { headers } = request;
                let c = r?.userAgent?.map(it) || [];
                let d = (await e.defaultUserAgentProvider()).map(it);
                await qc(r, e, s);
                let f = r;
                d.push(`m/${Wc({
                    ...r.__smithy_context?.features,
                    ...f.__aws_sdk_context?.features
                })}`);
                let m = e?.customUserAgent?.map(it) || [];
                let y = await e.userAgentAppId();
                if (y) {
                    d.push(it([
                        "app",
                        `${y}`
                    ]));
                }
                let b = Lc.getUserAgentPrefix();
                let x = (b ? [
                    b
                ] : []).concat([
                    ...d,
                    ...c,
                    ...m
                ]).join(Ws);
                let N = [
                    ...d.filter((T)=>T.startsWith("aws-sdk-")),
                    ...m
                ].join(Ws);
                if (e.runtime !== "browser") {
                    if (N) {
                        headers[tr] = headers[tr] ? `${headers[Xs]} ${N}` : N;
                    }
                    headers[Xs] = x;
                } else {
                    headers[tr] = x;
                }
                return t({
                    ...s,
                    request
                });
            };
    var it = (e)=>{
        let t = e[0].split(rr).map((c)=>c.replace(Hc, Ks)).join(rr);
        let r = e[1]?.replace(Gc, Ks);
        let s = t.indexOf(rr);
        let o = t.substring(0, s);
        let a = t.substring(s + 1);
        if (o === "api") {
            a = a.toLowerCase();
        }
        return [
            o,
            a,
            r
        ].filter((c)=>c && c.length > 0).reduce((acc, item, index)=>{
            switch(index){
                case 0:
                    return item;
                case 1:
                    return `${acc}/${item}`;
                default:
                    return `${acc}#${item}`;
            }
        }, "");
    };
    const Js = {
        name: "getUserAgentMiddleware",
        step: "build",
        priority: "low",
        tags: [
            "SET_USER_AGENT",
            "USER_AGENT"
        ],
        override: true
    };
    const Kc = (e)=>({
            applyToStack: (t)=>{
                t.add(Ys(e), Js);
            }
        });
    Qc.DEFAULT_UA_APP_ID = Qs;
    Qc.getUserAgentMiddlewareOptions = Js;
    Qc.getUserAgentPlugin = Kc;
    Qc.resolveUserAgentConfig = Fc;
    Qc.userAgentMiddleware = Ys;
});
const _oe = C(function(nu) {
    const ru = jm();
    const Zs = "content-length";
    function en(e) {
        return (t)=>async (r)=>{
                let r_request = r.request;
                if (ru.HttpRequest.isInstance(r_request)) {
                    let { body, headers } = r_request;
                    if (body && Object.keys(headers).map((c)=>c.toLowerCase()).indexOf(Zs) === -1) {
                        try {
                            let c = e(body);
                            r_request.headers = {
                                ...r_request.headers,
                                [Zs]: String(c)
                            };
                        } catch (c) {}
                    }
                }
                return t({
                    ...r,
                    request: r_request
                });
            };
    }
    const tn = {
        step: "build",
        tags: [
            "SET_CONTENT_LENGTH",
            "CONTENT_LENGTH"
        ],
        name: "contentLengthMiddleware",
        override: true
    };
    const su = (e)=>({
            applyToStack: (t)=>{
                t.add(en(e.bodyLengthChecker), tn);
            }
        });
    nu.contentLengthMiddleware = en;
    nu.contentLengthMiddlewareOptions = tn;
    nu.getContentLengthPlugin = su;
});
const an = C(function(nn) {
    Object.defineProperty(nn, "__esModule", {
        value: true
    });
    nn.getEndpointUrlConfig = undefined;
    const ot = t0();
    const rn = "AWS_ENDPOINT_URL";
    const sn = "endpoint_url";
    const cu = (e)=>({
            environmentVariableSelector: (t)=>{
                let r = e.split(" ").map((a)=>a.toUpperCase());
                let s = t[[
                    rn,
                    ...r
                ].join("_")];
                if (s) {
                    return s;
                }
                let o = t[rn];
                if (o) {
                    return o;
                }
            },
            configFileSelector: (t, r)=>{
                if (r && t.services) {
                    let o = r[[
                        "services",
                        t.services
                    ].join(ot.CONFIG_PREFIX_SEPARATOR)];
                    if (o) {
                        let a = e.split(" ").map((d)=>d.toLowerCase());
                        let c = o[[
                            a.join("_"),
                            sn
                        ].join(ot.CONFIG_PREFIX_SEPARATOR)];
                        if (c) {
                            return c;
                        }
                    }
                }
                let s = t[sn];
                if (s) {
                    return s;
                }
            },
            default: undefined
        });
    nn.getEndpointUrlConfig = cu;
});
const hn = C(function(ln) {
    Object.defineProperty(ln, "__esModule", {
        value: true
    });
    ln.getEndpointFromConfig = undefined;
    const cn = nP();
    const un = an();
    const uu = async (e)=>cn.loadConfig(un.getEndpointUrlConfig(e ?? ""))();
    ln.getEndpointFromConfig = uu;
});
const KB = C(function(bu) {
    const pn = hn();
    const fn = GW();
    const lu = xb();
    const at = eP();
    const du = Lmo();
    const hu = async (e)=>{
        let t = e?.Bucket || "";
        if (typeof e.Bucket === "string") {
            e.Bucket = t.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
        }
        if (yu(t)) {
            if (e.ForcePathStyle === true) {
                throw Error("Path-style addressing cannot be used with ARN buckets");
            }
        } else if (!gu(t) || t.indexOf(".") !== -1 && !String(e.Endpoint).startsWith("http:") || t.toLowerCase() !== t || t.length < 3) {
            e.ForcePathStyle = true;
        }
        if (e.DisableMultiRegionAccessPoints) {
            e.disableMultiRegionAccessPoints = true;
            e.DisableMRAP = true;
        }
        return e;
    };
    const fu = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
    const pu = /(\d+\.){3}\d+/;
    const mu = /\.\./;
    var gu = (e)=>fu.test(e) && !pu.test(e) && !mu.test(e);
    var yu = (e)=>{
        let [t, r, s, , , o] = e.split(":");
        let a = t === "arn" && e.split(":").length >= 6;
        let c = Boolean(a && r && s && o);
        if (a && !c) {
            throw Error(`Invalid ARN: ${e} was an invalid ARN.`);
        }
        return c;
    };
    const Eu = (name, t, r)=>{
        let s = async ()=>{
            let o = r[name] ?? r[t];
            if (typeof o === "function") {
                return o();
            }
            return o;
        };
        if (name === "credentialScope" || t === "CredentialScope") {
            return async ()=>{
                let o = typeof r.credentials === "function" ? await r.credentials() : r.credentials;
                return o?.credentialScope ?? o?.CredentialScope;
            };
        }
        if (name === "accountId" || t === "AccountId") {
            return async ()=>{
                let o = typeof r.credentials === "function" ? await r.credentials() : r.credentials;
                return o?.accountId ?? o?.AccountId;
            };
        }
        if (name === "endpoint" || t === "endpoint") {
            return async ()=>{
                if (r.isCustomEndpoint === false) {
                    return;
                }
                let o = await s();
                if (o && typeof o === "object") {
                    if ("url" in o) {
                        return o.url.href;
                    }
                    if ("hostname" in o) {
                        let { protocol, hostname, port, path } = o;
                        return `${protocol}//${hostname}${port ? `:${port}` : ""}${path}`;
                    }
                }
                return o;
            };
        }
        return s;
    };
    const sr = (e)=>{
        if (typeof e === "object") {
            if ("url" in e) {
                return fn.parseUrl(e.url);
            }
            return e;
        }
        return fn.parseUrl(e);
    };
    const mn = async (e, t, r, s)=>{
        if (!r.isCustomEndpoint) {
            let c;
            if (r.serviceConfiguredEndpoint) {
                c = await r.serviceConfiguredEndpoint();
            } else {
                c = await pn.getEndpointFromConfig(r.serviceId);
            }
            if (c) {
                r.endpoint = ()=>Promise.resolve(sr(c));
                r.isCustomEndpoint = true;
            }
        }
        let o = await gn(e, t, r);
        if (typeof r.endpointProvider !== "function") {
            throw Error("config.endpointProvider is not set.");
        }
        return r.endpointProvider(o, s);
    };
    var gn = async (e, t, r)=>{
        let s = {};
        let o = t?.getEndpointParameterInstructions?.() || {};
        for (let [a, c] of Object.entries(o)){
            switch(c.type){
                case "staticContextParams":
                    s[a] = c.value;
                    break;
                case "contextParams":
                    s[a] = e[c.name];
                    break;
                case "clientContextParams":
                case "builtInParams":
                    s[a] = await Eu(c.name, a, r)();
                    break;
                case "operationContextParams":
                    s[a] = c.get(e);
                    break;
                default:
                    throw Error(`Unrecognized endpoint parameter instruction: ${JSON.stringify(c)}`);
            }
        }
        if (Object.keys(o).length === 0) {
            Object.assign(s, r);
        }
        if (String(r.serviceId).toLowerCase() === "s3") {
            await hu(s);
        }
        return s;
    };
    const yn = ({ config, instructions })=>(r, s)=>async (o)=>{
                if (config.isCustomEndpoint) {
                    lu.setFeature(s, "ENDPOINT_OVERRIDE", "N");
                }
                let a = await mn(o.input, {
                    getEndpointParameterInstructions () {
                        return instructions;
                    }
                }, {
                    ...config
                }, s);
                s.endpointV2 = a;
                s.authSchemes = a.properties?.authSchemes;
                let c = s.authSchemes?.[0];
                if (c) {
                    s.signing_region = c.signingRegion;
                    s.signing_service = c.signingName;
                    let f = at.getSmithyContext(s)?.selectedHttpAuthScheme?.httpAuthOption;
                    if (f) {
                        f.signingProperties = Object.assign(f.signingProperties || {}, {
                            signing_region: c.signingRegion,
                            signingRegion: c.signingRegion,
                            signing_service: c.signingName,
                            signingName: c.signingName,
                            signingRegionSet: c.signingRegionSet
                        }, c.properties);
                    }
                }
                return r({
                    ...o
                });
            };
    const En = {
        step: "serialize",
        tags: [
            "ENDPOINT_PARAMETERS",
            "ENDPOINT_V2",
            "ENDPOINT"
        ],
        name: "endpointV2Middleware",
        override: true,
        relation: "before",
        toMiddleware: du.serializerMiddlewareOption.name
    };
    const Su = (config, instructions)=>({
            applyToStack: (r)=>{
                r.addRelativeTo(yn({
                    config,
                    instructions
                }), En);
            }
        });
    const wu = (e)=>{
        let tls = e.tls ?? true;
        let { endpoint, useDualstackEndpoint, useFipsEndpoint } = e;
        let endpoint_1 = endpoint != null ? async ()=>sr(await at.normalizeProvider(endpoint)()) : undefined;
        let d = Object.assign(e, {
            endpoint: endpoint_1,
            tls,
            isCustomEndpoint: !!endpoint,
            useDualstackEndpoint: at.normalizeProvider(useDualstackEndpoint ?? false),
            useFipsEndpoint: at.normalizeProvider(useFipsEndpoint ?? false)
        });
        let f;
        d.serviceConfiguredEndpoint = async ()=>{
            if (e.serviceId && !f) {
                f = pn.getEndpointFromConfig(e.serviceId);
            }
            return f;
        };
        return d;
    };
    const xu = (e)=>{
        let { endpoint } = e;
        if (endpoint === undefined) {
            e.endpoint = async ()=>{
                throw Error("@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.");
            };
        }
        return e;
    };
    bu.endpointMiddleware = yn;
    bu.endpointMiddlewareOptions = En;
    bu.getEndpointFromInstructions = mn;
    bu.getEndpointPlugin = Su;
    bu.resolveEndpointConfig = wu;
    bu.resolveEndpointRequiredConfig = xu;
    bu.resolveParams = gn;
    bu.toEndpointV1 = sr;
});
const ir = C(function(Uu) {
    const Mu = [
        "AuthFailure",
        "InvalidSignatureException",
        "RequestExpired",
        "RequestInTheFuture",
        "RequestTimeTooSkewed",
        "SignatureDoesNotMatch"
    ];
    const Du = [
        "BandwidthLimitExceeded",
        "EC2ThrottledException",
        "LimitExceededException",
        "PriorRequestNotComplete",
        "ProvisionedThroughputExceededException",
        "RequestLimitExceeded",
        "RequestThrottled",
        "RequestThrottledException",
        "SlowDown",
        "ThrottledException",
        "Throttling",
        "ThrottlingException",
        "TooManyRequestsException",
        "TransactionInProgressException"
    ];
    const Pu = [
        "TimeoutError",
        "RequestTimeout",
        "RequestTimeoutException"
    ];
    const ku = [
        500,
        502,
        503,
        504
    ];
    const vu = [
        "ECONNRESET",
        "ECONNREFUSED",
        "EPIPE",
        "ETIMEDOUT"
    ];
    const zu = [
        "EHOSTUNREACH",
        "ENETUNREACH",
        "ENOTFOUND"
    ];
    const Sn = (e)=>e?.$retryable !== undefined;
    const $u = (e)=>Mu.includes(e.name);
    const wn = (e)=>e.$metadata?.clockSkewCorrected;
    const xn = (e)=>{
        let t = new Set([
            "Failed to fetch",
            "NetworkError when attempting to fetch resource",
            "The Internet connection appears to be offline",
            "Load failed",
            "Network request failed"
        ]);
        if (!(e && e instanceof TypeError)) {
            return false;
        }
        return t.has(e.message);
    };
    const Bu = (e)=>e.$metadata?.httpStatusCode === 429 || Du.includes(e.name) || e.$retryable?.throttling == true;
    const nr = (e, t = 0)=>Sn(e) || wn(e) || Pu.includes(e.name) || vu.includes(e?.code || "") || zu.includes(e?.code || "") || ku.includes(e.$metadata?.httpStatusCode || 0) || xn(e) || e.cause !== undefined && t <= 10 && nr(e.cause, t + 1);
    const Lu = (e)=>{
        if (e.$metadata?.httpStatusCode !== undefined) {
            let t = e.$metadata.httpStatusCode;
            if (t >= 500 && t <= 599 && !nr(e)) {
                return true;
            }
            return false;
        }
        return false;
    };
    Uu.isBrowserNetworkError = xn;
    Uu.isClockSkewCorrectedError = wn;
    Uu.isClockSkewError = $u;
    Uu.isRetryableByTrait = Sn;
    Uu.isServerError = Lu;
    Uu.isThrottlingError = Bu;
    Uu.isTransientError = nr;
});
const r7 = C(function(Zu) {
    const Wu = ir();
    Zu.RETRY_MODES = undefined;
    ((e)=>{
        e.STANDARD = "standard";
        e.ADAPTIVE = "adaptive";
    })(Zu.RETRY_MODES || (Zu.RETRY_MODES = {}));
    const or = 3;
    const STANDARD = Zu.RETRY_MODES.STANDARD;
    class ct {
        static setTimeoutFn = setTimeout;
        beta;
        minCapacity;
        minFillRate;
        scaleConstant;
        smooth;
        currentCapacity = 0;
        enabled = false;
        lastMaxRate = 0;
        measuredTxRate = 0;
        requestCount = 0;
        fillRate;
        lastThrottleTime;
        lastTimestamp = 0;
        lastTxRateBucket;
        maxCapacity;
        timeWindow = 0;
        constructor(e){
            this.beta = e?.beta ?? 0.7;
            this.minCapacity = e?.minCapacity ?? 1;
            this.minFillRate = e?.minFillRate ?? 0.5;
            this.scaleConstant = e?.scaleConstant ?? 0.4;
            this.smooth = e?.smooth ?? 0.8;
            let t = this.getCurrentTimeInSeconds();
            this.lastThrottleTime = t;
            this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
            this.fillRate = this.minFillRate;
            this.maxCapacity = this.minCapacity;
        }
        getCurrentTimeInSeconds() {
            return Date.now() / 1000;
        }
        async getSendToken() {
            return this.acquireTokenBucket(1);
        }
        async acquireTokenBucket(e) {
            if (!this.enabled) {
                return;
            }
            this.refillTokenBucket();
            if (e > this.currentCapacity) {
                let t = (e - this.currentCapacity) / this.fillRate * 1000;
                await new Promise((resolve)=>ct.setTimeoutFn(resolve, t));
            }
            this.currentCapacity = this.currentCapacity - e;
        }
        refillTokenBucket() {
            let e = this.getCurrentTimeInSeconds();
            if (!this.lastTimestamp) {
                this.lastTimestamp = e;
                return;
            }
            let t = (e - this.lastTimestamp) * this.fillRate;
            this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + t);
            this.lastTimestamp = e;
        }
        updateClientSendingRate(e) {
            let t;
            this.updateMeasuredRate();
            if (Wu.isThrottlingError(e)) {
                let s = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
                this.lastMaxRate = s;
                this.calculateTimeWindow();
                this.lastThrottleTime = this.getCurrentTimeInSeconds();
                t = this.cubicThrottle(s);
                this.enableTokenBucket();
            } else {
                this.calculateTimeWindow();
                t = this.cubicSuccess(this.getCurrentTimeInSeconds());
            }
            let r = Math.min(t, 2 * this.measuredTxRate);
            this.updateTokenBucketRate(r);
        }
        calculateTimeWindow() {
            this.timeWindow = this.getPrecise((this.lastMaxRate * (1 - this.beta) / this.scaleConstant) ** 0.3333333333333333);
        }
        cubicThrottle(e) {
            return this.getPrecise(e * this.beta);
        }
        cubicSuccess(e) {
            return this.getPrecise(this.scaleConstant * (e - this.lastThrottleTime - this.timeWindow) ** 3 + this.lastMaxRate);
        }
        enableTokenBucket() {
            this.enabled = true;
        }
        updateTokenBucketRate(e) {
            this.refillTokenBucket();
            this.fillRate = Math.max(e, this.minFillRate);
            this.maxCapacity = Math.max(e, this.minCapacity);
            this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
        }
        updateMeasuredRate() {
            let e = this.getCurrentTimeInSeconds();
            let t = Math.floor(e * 2) / 2;
            this.requestCount++;
            if (t > this.lastTxRateBucket) {
                let r = this.requestCount / (t - this.lastTxRateBucket);
                this.measuredTxRate = this.getPrecise(r * this.smooth + this.measuredTxRate * (1 - this.smooth));
                this.requestCount = 0;
                this.lastTxRateBucket = t;
            }
        }
        getPrecise(e) {
            return parseFloat(e.toFixed(8));
        }
    }
    const retryDelay_1 = 100;
    const cr = 20000;
    const Nn = 500;
    const ar = 500;
    const Tn = 5;
    const _n = 10;
    const Cn = 1;
    const Qu = "amz-sdk-invocation-id";
    const Yu = "amz-sdk-request";
    const Ju = ()=>{
        let e = retryDelay_1;
        return {
            computeNextBackoffDelay: (s)=>Math.floor(Math.min(cr, Math.random() * 2 ** s * e)),
            setDelayBase: (s)=>{
                e = s;
            }
        };
    };
    const bn = ({ retryDelay, retryCount, retryCost })=>({
            getRetryCount: ()=>retryCount,
            getRetryDelay: ()=>Math.min(cr, retryDelay),
            getRetryCost: ()=>retryCost
        });
    class ut {
        maxAttempts;
        mode = Zu.RETRY_MODES.STANDARD;
        capacity = ar;
        retryBackoffStrategy = Ju();
        maxAttemptsProvider;
        constructor(e){
            this.maxAttempts = e;
            this.maxAttemptsProvider = typeof e === "function" ? e : async ()=>e;
        }
        async acquireInitialRetryToken(e) {
            return bn({
                retryDelay: retryDelay_1,
                retryCount: 0
            });
        }
        async refreshRetryTokenForRetry(e, t) {
            let r = await this.getMaxAttempts();
            if (this.shouldRetry(e, t, r)) {
                let s = t.errorType;
                this.retryBackoffStrategy.setDelayBase(s === "THROTTLING" ? Nn : retryDelay_1);
                let o = this.retryBackoffStrategy.computeNextBackoffDelay(e.getRetryCount());
                let retryDelay = t.retryAfterHint ? Math.max(t.retryAfterHint.getTime() - Date.now() || 0, o) : o;
                let retryCost = this.getCapacityCost(s);
                this.capacity -= retryCost;
                return bn({
                    retryDelay,
                    retryCount: e.getRetryCount() + 1,
                    retryCost
                });
            }
            throw Error("No retry token available");
        }
        recordSuccess(e) {
            this.capacity = Math.max(ar, this.capacity + (e.getRetryCost() ?? Cn));
        }
        getCapacity() {
            return this.capacity;
        }
        async getMaxAttempts() {
            try {
                return await this.maxAttemptsProvider();
            } catch (e) {
                console.warn(`Max attempts provider could not resolve. Using default of ${or}`);
                return or;
            }
        }
        shouldRetry(e, t, r) {
            return e.getRetryCount() + 1 < r && this.capacity >= this.getCapacityCost(t.errorType) && this.isRetryableError(t.errorType);
        }
        getCapacityCost(e) {
            if (e === "TRANSIENT") {
                return _n;
            }
            return Tn;
        }
        isRetryableError(e) {
            return e === "THROTTLING" || e === "TRANSIENT";
        }
    }
    class An {
        maxAttemptsProvider;
        rateLimiter;
        standardRetryStrategy;
        mode = Zu.RETRY_MODES.ADAPTIVE;
        constructor(e, t){
            this.maxAttemptsProvider = e;
            let { rateLimiter } = t ?? {};
            this.rateLimiter = rateLimiter ?? new ct;
            this.standardRetryStrategy = new ut(e);
        }
        async acquireInitialRetryToken(e) {
            await this.rateLimiter.getSendToken();
            return this.standardRetryStrategy.acquireInitialRetryToken(e);
        }
        async refreshRetryTokenForRetry(e, t) {
            this.rateLimiter.updateClientSendingRate(t);
            return this.standardRetryStrategy.refreshRetryTokenForRetry(e, t);
        }
        recordSuccess(e) {
            this.rateLimiter.updateClientSendingRate({});
            this.standardRetryStrategy.recordSuccess(e);
        }
    }
    class Rn extends ut {
        computeNextBackoffDelay;
        constructor(e, t = retryDelay_1){
            super(typeof e === "function" ? e : async ()=>e);
            if (typeof t === "number") {
                this.computeNextBackoffDelay = ()=>t;
            } else {
                this.computeNextBackoffDelay = t;
            }
        }
        async refreshRetryTokenForRetry(e, t) {
            let r = await super.refreshRetryTokenForRetry(e, t);
            r.getRetryDelay = ()=>this.computeNextBackoffDelay(r.getRetryCount());
            return r;
        }
    }
    Zu.AdaptiveRetryStrategy = An;
    Zu.ConfiguredRetryStrategy = Rn;
    Zu.DEFAULT_MAX_ATTEMPTS = or;
    Zu.DEFAULT_RETRY_DELAY_BASE = retryDelay_1;
    Zu.DEFAULT_RETRY_MODE = STANDARD;
    Zu.DefaultRateLimiter = ct;
    Zu.INITIAL_RETRY_TOKENS = ar;
    Zu.INVOCATION_ID_HEADER = Qu;
    Zu.MAXIMUM_RETRY_DELAY = cr;
    Zu.NO_RETRY_INCREMENT = Cn;
    Zu.REQUEST_HEADER = Yu;
    Zu.RETRY_COST = Tn;
    Zu.StandardRetryStrategy = ut;
    Zu.THROTTLING_RETRY_DELAY_BASE = Nn;
    Zu.TIMEOUT_RETRY_COST = _n;
});
const Dn = C(function(On) {
    Object.defineProperty(On, "__esModule", {
        value: true
    });
    On.isStreamingPayload = undefined;
    const In = Le("stream");
    const ml = (e)=>e?.body instanceof In.Readable || typeof ReadableStream !== "undefined" && e?.body instanceof ReadableStream;
    On.isStreamingPayload = ml;
});
const aF = C(function(Rl) {
    const j = r7();
    const Me = jm();
    const ye = ir();
    const kn = $mo();
    const Pn = eP();
    const gl = Rd();
    const yl = Dn();
    const El = (INITIAL_RETRY_TOKENS, t)=>{
        let r = INITIAL_RETRY_TOKENS;
        let { NO_RETRY_INCREMENT, RETRY_COST, TIMEOUT_RETRY_COST } = j;
        let c = INITIAL_RETRY_TOKENS;
        let d = (b)=>{
            if (b.name === "TimeoutError") {
                return TIMEOUT_RETRY_COST;
            }
            return RETRY_COST;
        };
        let hasRetryTokens = (b)=>d(b) <= c;
        return Object.freeze({
            hasRetryTokens,
            retrieveRetryTokens: (b)=>{
                if (!hasRetryTokens(b)) {
                    throw Error("No retry token available");
                }
                let x = d(b);
                c -= x;
                return x;
            },
            releaseRetryTokens: (b)=>{
                c += b ?? NO_RETRY_INCREMENT;
                c = Math.min(c, r);
            }
        });
    };
    const vn = (e, t)=>Math.floor(Math.min(j.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** t * e));
    const zn = (e)=>{
        if (!e) {
            return false;
        }
        return ye.isRetryableByTrait(e) || ye.isClockSkewError(e) || ye.isThrottlingError(e) || ye.isTransientError(e);
    };
    const $n = (error)=>{
        if (error instanceof Error) {
            return error;
        }
        if (error instanceof Object) {
            return Object.assign(Error(), error);
        }
        if (typeof error === "string") {
            return Error(error);
        }
        return Error(`AWS SDK error wrapper for ${error}`);
    };
    class dr {
        maxAttemptsProvider;
        retryDecider;
        delayDecider;
        retryQuota;
        mode = j.RETRY_MODES.STANDARD;
        constructor(e, t){
            this.maxAttemptsProvider = e;
            this.retryDecider = t?.retryDecider ?? zn;
            this.delayDecider = t?.delayDecider ?? vn;
            this.retryQuota = t?.retryQuota ?? El(j.INITIAL_RETRY_TOKENS);
        }
        shouldRetry(e, t, r) {
            return t < r && this.retryDecider(e) && this.retryQuota.hasRetryTokens(e);
        }
        async getMaxAttempts() {
            let e;
            try {
                e = await this.maxAttemptsProvider();
            } catch (t) {
                e = j.DEFAULT_MAX_ATTEMPTS;
            }
            return e;
        }
        async retry(e, t, r) {
            let s;
            let o = 0;
            let a = 0;
            let c = await this.getMaxAttempts();
            let { request } = t;
            if (Me.HttpRequest.isInstance(request)) {
                request.headers[j.INVOCATION_ID_HEADER] = kn.v4();
            }
            while(true){
                try {
                    if (Me.HttpRequest.isInstance(request)) {
                        request.headers[j.REQUEST_HEADER] = `attempt=${o + 1}; max=${c}`;
                    }
                    if (r?.beforeRequest) {
                        await r.beforeRequest();
                    }
                    let { response, output } = await e(t);
                    if (r?.afterRequest) {
                        r.afterRequest(response);
                    }
                    this.retryQuota.releaseRetryTokens(s);
                    output.$metadata.attempts = o + 1;
                    output.$metadata.totalRetryDelay = a;
                    return {
                        response,
                        output
                    };
                } catch (error) {
                    let m = $n(error);
                    o++;
                    if (this.shouldRetry(m, o, c)) {
                        s = this.retryQuota.retrieveRetryTokens(m);
                        let y = this.delayDecider(ye.isThrottlingError(m) ? j.THROTTLING_RETRY_DELAY_BASE : j.DEFAULT_RETRY_DELAY_BASE, o);
                        let b = Sl(m.$response);
                        let x = Math.max(b || 0, y);
                        a += x;
                        await new Promise((resolve)=>setTimeout(resolve, x));
                        continue;
                    }
                    if (!m.$metadata) {
                        m.$metadata = {};
                    }
                    m.$metadata.attempts = o;
                    m.$metadata.totalRetryDelay = a;
                    throw m;
                }
            }
        }
    }
    const Sl = ($response)=>{
        if (!Me.HttpResponse.isInstance($response)) {
            return;
        }
        let t = Object.keys($response.headers).find((a)=>a.toLowerCase() === "retry-after");
        if (!t) {
            return;
        }
        let r = $response.headers[t];
        let s = Number(r);
        if (!Number.isNaN(s)) {
            return s * 1000;
        }
        return new Date(r).getTime() - Date.now();
    };
    class Bn extends dr {
        rateLimiter;
        constructor(e, t){
            let { rateLimiter, ...rest } = t ?? {};
            super(e, rest);
            this.rateLimiter = rateLimiter ?? new j.DefaultRateLimiter;
            this.mode = j.RETRY_MODES.ADAPTIVE;
        }
        async retry(e, t) {
            return super.retry(e, t, {
                beforeRequest: async ()=>this.rateLimiter.getSendToken(),
                afterRequest: (r)=>{
                    this.rateLimiter.updateClientSendingRate(r);
                }
            });
        }
    }
    const ur = "AWS_MAX_ATTEMPTS";
    const lr = "max_attempts";
    const wl = {
        environmentVariableSelector: (e)=>{
            let t = e[ur];
            if (!t) {
                return;
            }
            let r = parseInt(t);
            if (Number.isNaN(r)) {
                throw Error(`Environment variable ${ur} mast be a number, got "${t}"`);
            }
            return r;
        },
        configFileSelector: (e)=>{
            let t = e[lr];
            if (!t) {
                return;
            }
            let r = parseInt(t);
            if (Number.isNaN(r)) {
                throw Error(`Shared config file entry ${lr} mast be a number, got "${t}"`);
            }
            return r;
        },
        default: j.DEFAULT_MAX_ATTEMPTS
    };
    const xl = (e)=>{
        let { retryStrategy, retryMode, maxAttempts } = e;
        let maxAttempts_1 = Pn.normalizeProvider(maxAttempts ?? j.DEFAULT_MAX_ATTEMPTS);
        return Object.assign(e, {
            maxAttempts: maxAttempts_1,
            retryStrategy: async ()=>{
                if (retryStrategy) {
                    return retryStrategy;
                }
                if (await Pn.normalizeProvider(retryMode)() === j.RETRY_MODES.ADAPTIVE) {
                    return new j.AdaptiveRetryStrategy(maxAttempts_1);
                }
                return new j.StandardRetryStrategy(maxAttempts_1);
            }
        });
    };
    const Ln = "AWS_RETRY_MODE";
    const Un = "retry_mode";
    const bl = {
        environmentVariableSelector: (e)=>e[Ln],
        configFileSelector: (e)=>e[Un],
        default: j.DEFAULT_RETRY_MODE
    };
    const Vn = ()=>(e)=>async (t)=>{
                let { request } = t;
                if (Me.HttpRequest.isInstance(request)) {
                    delete request.headers[j.INVOCATION_ID_HEADER];
                    delete request.headers[j.REQUEST_HEADER];
                }
                return e(t);
            };
    const Fn = {
        name: "omitRetryHeadersMiddleware",
        tags: [
            "RETRY",
            "HEADERS",
            "OMIT_RETRY_HEADERS"
        ],
        relation: "before",
        toMiddleware: "awsAuthMiddleware",
        override: true
    };
    const Nl = (e)=>({
            applyToStack: (t)=>{
                t.addRelativeTo(Vn(), Fn);
            }
        });
    const jn = (e)=>(t, r)=>async (s)=>{
                let o = await e.retryStrategy();
                let a = await e.maxAttempts();
                if (Tl(o)) {
                    o = o;
                    let c = await o.acquireInitialRetryToken(r.partition_id);
                    let d = Error();
                    let f = 0;
                    let m = 0;
                    let { request } = s;
                    let b = Me.HttpRequest.isInstance(request);
                    if (b) {
                        request.headers[j.INVOCATION_ID_HEADER] = kn.v4();
                    }
                    while(true){
                        try {
                            if (b) {
                                request.headers[j.REQUEST_HEADER] = `attempt=${f + 1}; max=${a}`;
                            }
                            let { response, output } = await t(s);
                            o.recordSuccess(c);
                            output.$metadata.attempts = f + 1;
                            output.$metadata.totalRetryDelay = m;
                            return {
                                response,
                                output
                            };
                        } catch (error) {
                            let N = _l(error);
                            d = $n(error);
                            if (b && yl.isStreamingPayload(request)) {
                                (r.logger instanceof gl.NoOpLogger ? console : r.logger)?.warn("An error was encountered in a non-retryable streaming request.");
                                throw d;
                            }
                            try {
                                c = await o.refreshRetryTokenForRetry(c, N);
                            } catch (I) {
                                if (!d.$metadata) {
                                    d.$metadata = {};
                                }
                                d.$metadata.attempts = f + 1;
                                d.$metadata.totalRetryDelay = m;
                                throw d;
                            }
                            f = c.getRetryCount();
                            let T = c.getRetryDelay();
                            m += T;
                            await new Promise((resolve)=>setTimeout(resolve, T));
                        }
                    }
                } else {
                    o = o;
                    if (o?.mode) {
                        r.userAgent = [
                            ...r.userAgent || [],
                            [
                                "cfg/retry-mode",
                                o.mode
                            ]
                        ];
                    }
                    return o.retry(t, s);
                }
            };
    var Tl = (e)=>typeof e.acquireInitialRetryToken !== "undefined" && typeof e.refreshRetryTokenForRetry !== "undefined" && typeof e.recordSuccess !== "undefined";
    var _l = (error)=>{
        let t = {
            error,
            errorType: Cl(error)
        };
        let r = Hn(error.$response);
        if (r) {
            t.retryAfterHint = r;
        }
        return t;
    };
    var Cl = (error)=>{
        if (ye.isThrottlingError(error)) {
            return "THROTTLING";
        }
        if (ye.isTransientError(error)) {
            return "TRANSIENT";
        }
        if (ye.isServerError(error)) {
            return "SERVER_ERROR";
        }
        return "CLIENT_ERROR";
    };
    const qn = {
        name: "retryMiddleware",
        tags: [
            "RETRY"
        ],
        step: "finalizeRequest",
        priority: "high",
        override: true
    };
    const Al = (e)=>({
            applyToStack: (t)=>{
                t.add(jn(e), qn);
            }
        });
    var Hn = (e)=>{
        if (!Me.HttpResponse.isInstance(e)) {
            return;
        }
        let t = Object.keys(e.headers).find((a)=>a.toLowerCase() === "retry-after");
        if (!t) {
            return;
        }
        let r = e.headers[t];
        let s = Number(r);
        if (!Number.isNaN(s)) {
            return new Date(s * 1000);
        }
        return new Date(r);
    };
    Rl.AdaptiveRetryStrategy = Bn;
    Rl.CONFIG_MAX_ATTEMPTS = lr;
    Rl.CONFIG_RETRY_MODE = Un;
    Rl.ENV_MAX_ATTEMPTS = ur;
    Rl.ENV_RETRY_MODE = Ln;
    Rl.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = wl;
    Rl.NODE_RETRY_MODE_CONFIG_OPTIONS = bl;
    Rl.StandardRetryStrategy = dr;
    Rl.defaultDelayDecider = vn;
    Rl.defaultRetryDecider = zn;
    Rl.getOmitRetryHeadersPlugin = Nl;
    Rl.getRetryAfterHint = Hn;
    Rl.getRetryPlugin = Al;
    Rl.omitRetryHeadersMiddleware = Vn;
    Rl.omitRetryHeadersMiddlewareOptions = Fn;
    Rl.resolveRetryConfig = xl;
    Rl.retryMiddleware = jn;
    Rl.retryMiddlewareOptions = qn;
});
const Wn = C(function(Xn) {
    Object.defineProperty(Xn, "__esModule", {
        value: true
    });
    Xn.warning = undefined;
    Xn.stsRegionDefaultResolver = Xl;
    var lt = Fk();
    var Gn = nP();
    function Xl(e = {}) {
        return Gn.loadConfig({
            ...lt.NODE_REGION_CONFIG_OPTIONS,
            async default () {
                if (!Xn.warning.silence) {
                    console.warn("@aws-sdk - WARN - default STS region of us-east-1 used. See @aws-sdk/credential-providers README and set a region explicitly.");
                }
                return "us-east-1";
            }
        }, {
            ...lt.NODE_REGION_CONFIG_FILE_OPTIONS,
            ...e
        });
    }
    Xn.warning = {
        silence: false
    };
});
const o7 = C(function(Ee) {
    const qe = Fk();
    const Kn = Wn();
    const Kl = (e)=>({
            setRegion (t) {
                e.region = t;
            },
            region () {
                return e.region;
            }
        });
    const Ql = (e)=>({
            region: e.region()
        });
    Object.defineProperty(Ee, "NODE_REGION_CONFIG_FILE_OPTIONS", {
        enumerable: true,
        get: function() {
            return qe.NODE_REGION_CONFIG_FILE_OPTIONS;
        }
    });
    Object.defineProperty(Ee, "NODE_REGION_CONFIG_OPTIONS", {
        enumerable: true,
        get: function() {
            return qe.NODE_REGION_CONFIG_OPTIONS;
        }
    });
    Object.defineProperty(Ee, "REGION_ENV_NAME", {
        enumerable: true,
        get: function() {
            return qe.REGION_ENV_NAME;
        }
    });
    Object.defineProperty(Ee, "REGION_INI_NAME", {
        enumerable: true,
        get: function() {
            return qe.REGION_INI_NAME;
        }
    });
    Object.defineProperty(Ee, "resolveRegionConfig", {
        enumerable: true,
        get: function() {
            return qe.resolveRegionConfig;
        }
    });
    Ee.getAwsRegionExtensionConfiguration = Kl;
    Ee.resolveAwsRegionExtensionConfiguration = Ql;
    Object.keys(Kn).forEach((e)=>{
        if (e !== "default" && !Object.prototype.hasOwnProperty.call(Ee, e)) {
            Object.defineProperty(Ee, e, {
                enumerable: true,
                get: function() {
                    return Kn[e];
                }
            });
        }
    });
});
const boe = C(function(nd) {
    const Qn = Le("os");
    const fr = Le("process");
    const Zl = n7();
    const Yn = {
        isCrtAvailable: false
    };
    const ed = ()=>{
        if (Yn.isCrtAvailable) {
            return [
                "md/crt-avail"
            ];
        }
        return null;
    };
    const Jn = ({ serviceId, clientVersion })=>async (r)=>{
            let s = [
                [
                    "aws-sdk-js",
                    clientVersion
                ],
                [
                    "ua",
                    "2.1"
                ],
                [
                    `os/${Qn.platform()}`,
                    Qn.release()
                ],
                [
                    "lang/js"
                ],
                [
                    "md/nodejs",
                    `${fr.versions.node}`
                ]
            ];
            let o = ed();
            if (o) {
                s.push(o);
            }
            if (serviceId) {
                s.push([
                    `api/${serviceId}`,
                    clientVersion
                ]);
            }
            if (fr.env.AWS_EXECUTION_ENV) {
                s.push([
                    `exec-env/${fr.env.AWS_EXECUTION_ENV}`
                ]);
            }
            let a = await r?.userAgentAppId?.();
            if (a) {
                return [
                    ...s,
                    [
                        `app/${a}`
                    ]
                ];
            }
            return [
                ...s
            ];
        };
    const td = Jn;
    const Zn = "AWS_SDK_UA_APP_ID";
    const ei = "sdk_ua_app_id";
    const rd = "sdk-ua-app-id";
    const sd = {
        environmentVariableSelector: (e)=>e[Zn],
        configFileSelector: (e)=>e[ei] ?? e[rd],
        default: Zl.DEFAULT_UA_APP_ID
    };
    nd.NODE_APP_ID_CONFIG_OPTIONS = sd;
    nd.UA_APP_ID_ENV_NAME = Zn;
    nd.UA_APP_ID_INI_NAME = ei;
    nd.createDefaultUserAgentProvider = Jn;
    nd.crtAvailability = Yn;
    nd.defaultUserAgent = td;
});
const Soe = C(function(fd) {
    const pr = pDt();
    const dd = Qk();
    const hd = Le("buffer");
    const ti = Le("crypto");
    class si {
        algorithmIdentifier;
        secret;
        hash;
        constructor(e, t){
            this.algorithmIdentifier = e;
            this.secret = t;
            this.reset();
        }
        update(e, t) {
            this.hash.update(dd.toUint8Array(ri(e, t)));
        }
        digest() {
            return Promise.resolve(this.hash.digest());
        }
        reset() {
            this.hash = this.secret ? ti.createHmac(this.algorithmIdentifier, ri(this.secret)) : ti.createHash(this.algorithmIdentifier);
        }
    }
    function ri(e, t) {
        if (hd.Buffer.isBuffer(e)) {
            return e;
        }
        if (typeof e === "string") {
            return pr.fromString(e, t);
        }
        if (ArrayBuffer.isView(e)) {
            return pr.fromArrayBuffer(e.buffer, e.byteOffset, e.byteLength);
        }
        return pr.fromArrayBuffer(e);
    }
    fd.Hash = si;
});
const woe = C(function(gd) {
    const mr = Le("fs");
    const md = (e)=>{
        if (!e) {
            return 0;
        }
        if (typeof e === "string") {
            return Buffer.byteLength(e);
        } else if (typeof e.byteLength === "number") {
            return e.byteLength;
        } else if (typeof e.size === "number") {
            return e.size;
        } else if (typeof e.start === "number" && typeof e.end === "number") {
            return e.end + 1 - e.start;
        } else if (e instanceof mr.ReadStream) {
            if (e.path != null) {
                return mr.lstatSync(e.path).size;
            } else if (typeof e.fd === "number") {
                return mr.fstatSync(e.fd).size;
            }
        }
        throw Error(`Body Length computation failed for ${e}`);
    };
    gd.calculateBodyLength = md;
});
const Eoe = C(function(Md) {
    const Ed = Fk();
    const ni = nP();
    const Sd = Hm();
    const wd = "AWS_EXECUTION_ENV";
    const ii = "AWS_REGION";
    const oi = "AWS_DEFAULT_REGION";
    const xd = "AWS_EC2_METADATA_DISABLED";
    const bd = [
        "in-region",
        "cross-region",
        "mobile",
        "standard",
        "legacy"
    ];
    const path = "/latest/meta-data/placement/region";
    const Td = "AWS_DEFAULTS_MODE";
    const _d = "defaults_mode";
    const Cd = {
        environmentVariableSelector: (e)=>e[Td],
        configFileSelector: (e)=>e[_d],
        default: "legacy"
    };
    const Ad = ({ region = ni.loadConfig(Ed.NODE_REGION_CONFIG_OPTIONS), defaultsMode = ni.loadConfig(Cd) } = {})=>Sd.memoize(async ()=>{
            let r = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
            switch(r?.toLowerCase()){
                case "auto":
                    return Id(region);
                case "in-region":
                case "cross-region":
                case "mobile":
                case "standard":
                case "legacy":
                    return Promise.resolve(r?.toLocaleLowerCase());
                case undefined:
                    return Promise.resolve("legacy");
                default:
                    throw Error(`Invalid parameter for "defaultsMode", expect ${bd.join(", ")}, got ${r}`);
            }
        });
    var Id = async (region)=>{
        if (region) {
            let t = typeof region === "function" ? await region() : region;
            let r = await Od();
            if (!r) {
                return "standard";
            }
            if (t === r) {
                return "in-region";
            } else {
                return "cross-region";
            }
        }
        return "standard";
    };
    var Od = async ()=>{
        if (process.env[wd] && (process.env[ii] || process.env[oi])) {
            return process.env[ii] ?? process.env[oi];
        }
        if (!process.env[xd]) {
            try {
                let { getInstanceMetadataEndpoint, httpRequest } = await import("/$bunfs/root/chunk-1wxtxsr3.js");
                let r = await getInstanceMetadataEndpoint();
                return (await httpRequest({
                    ...r,
                    path
                })).toString();
            } catch (e) {}
        }
    };
    Md.resolveDefaultsModeConfig = Ad;
});
const voe = C(function(Ud) {
    const ai = Ut();
    const U = Zx();
    const he = Rd();
    const Y = Vat();
    const X = NPt();
    const He = $R();
    const ui = Qk();
    const se = jt();
    class De {
        queryCompat;
        constructor(e = false){
            this.queryCompat = e;
        }
        resolveRestContentType(e, t) {
            let r = t.getMemberSchemas();
            let s = Object.values(r).find((o)=>!!o.getMergedTraits().httpPayload);
            if (s) {
                let o = s.getMergedTraits().mediaType;
                if (o) {
                    return o;
                } else if (s.isStringSchema()) {
                    return "text/plain";
                } else if (s.isBlobSchema()) {
                    return "application/octet-stream";
                } else {
                    return e;
                }
            } else if (!t.isUnitSchema()) {
                if (Object.values(r).find((a)=>{
                    let { httpQuery, httpQueryParams, httpHeader, httpLabel, httpPrefixHeaders } = a.getMergedTraits();
                    return !httpQuery && !httpQueryParams && !httpHeader && !httpLabel && httpPrefixHeaders === undefined;
                })) {
                    return e;
                }
            }
        }
        async getErrorSchemaOrThrowBaseException(e, t, r, s, o, a) {
            let c = t;
            let d = e;
            if (e.includes("#")) {
                [c, d] = e.split("#");
            }
            let f = {
                $metadata: o,
                $fault: r.statusCode < 500 ? "client" : "server"
            };
            let m = U.TypeRegistry.for(c);
            try {
                return {
                    errorSchema: a?.(m, d) ?? m.getSchema(e),
                    errorMetadata: f
                };
            } catch (y) {
                s.message = s.message ?? s.Message ?? "UnknownError";
                let b = U.TypeRegistry.for(`smithy.ts.sdk.synthetic.${c}`);
                let x = b.getBaseException();
                if (x) {
                    let N = b.getErrorCtor(x) ?? Error;
                    throw this.decorateServiceException(Object.assign(new N({
                        name: d
                    }), f), s);
                }
                throw this.decorateServiceException(Object.assign(Error(d), f), s);
            }
        }
        decorateServiceException(e, t = {}) {
            if (this.queryCompat) {
                let r = e.Message ?? t.Message;
                let s = he.decorateServiceException(e, t);
                if (r) {
                    s.Message = r;
                    s.message = r;
                }
                return s;
            }
            return he.decorateServiceException(e, t);
        }
        setQueryCompatError(e, t) {
            let r = t.headers?.["x-amzn-query-error"];
            if (e !== undefined && r != null) {
                let [s, o] = r.split(";");
                let a = Object.entries(e);
                let c = {
                    Code: s,
                    Type: o
                };
                Object.assign(e, c);
                for (let [d, f] of a){
                    c[d] = f;
                }
                delete c.__type;
                e.Error = c;
            }
        }
        queryCompatOutput(e, t) {
            if (e.Error) {
                t.Error = e.Error;
            }
            if (e.Type) {
                t.Type = e.Type;
            }
            if (e.Code) {
                t.Code = e.Code;
            }
        }
    }
    class li extends ai.SmithyRpcV2CborProtocol {
        awsQueryCompatible;
        mixin;
        constructor({ defaultNamespace, awsQueryCompatible }){
            super({
                defaultNamespace
            });
            this.awsQueryCompatible = !!awsQueryCompatible;
            this.mixin = new De(this.awsQueryCompatible);
        }
        async serializeRequest(e, t, r) {
            let s = await super.serializeRequest(e, t, r);
            if (this.awsQueryCompatible) {
                s.headers["x-amzn-query-mode"] = "true";
            }
            return s;
        }
        async handleError(e, t, r, s, o) {
            if (this.awsQueryCompatible) {
                this.mixin.setQueryCompatError(s, r);
            }
            let a = ai.loadSmithyRpcV2CborErrorCode(r, s) ?? "Unknown";
            let { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o);
            let f = U.NormalizedSchema.of(errorSchema);
            let m = s.message ?? s.Message ?? "Unknown";
            let b = new (U.TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error)(m);
            let x = {};
            for (let [N, T] of f.structIterator()){
                x[N] = this.deserializer.readValue(T, s[N]);
            }
            if (this.awsQueryCompatible) {
                this.mixin.queryCompatOutput(s, x);
            }
            throw this.mixin.decorateServiceException(Object.assign(b, errorMetadata, {
                $fault: f.getMergedTraits().error,
                message: m
            }, x), s);
        }
    }
    const Pd = (e)=>{
        if (e == null) {
            return e;
        }
        if (typeof e === "number" || typeof e === "bigint") {
            let t = Error(`Received number ${e} where a string was expected.`);
            t.name = "Warning";
            console.warn(t);
            return String(e);
        }
        if (typeof e === "boolean") {
            let t = Error(`Received boolean ${e} where a string was expected.`);
            t.name = "Warning";
            console.warn(t);
            return String(e);
        }
        return e;
    };
    const kd = (e)=>{
        if (e == null) {
            return e;
        }
        if (typeof e === "string") {
            let t = e.toLowerCase();
            if (e !== "" && t !== "false" && t !== "true") {
                let r = Error(`Received string "${e}" where a boolean was expected.`);
                r.name = "Warning";
                console.warn(r);
            }
            return e !== "" && t !== "false";
        }
        return e;
    };
    const vd = (e)=>{
        if (e == null) {
            return e;
        }
        if (typeof e === "string") {
            let t = Number(e);
            if (t.toString() !== e) {
                let r = Error(`Received string "${e}" where a number was expected.`);
                r.name = "Warning";
                console.warn(r);
                return e;
            }
            return t;
        }
        return e;
    };
    class Se {
        serdeContext;
        setSerdeContext(e) {
            this.serdeContext = e;
        }
    }
    function zd(e, t, r) {
        if (r?.source) {
            let s = r.source;
            if (typeof t === "number") {
                if (t > Number.MAX_SAFE_INTEGER || t < Number.MIN_SAFE_INTEGER || s !== String(t)) {
                    if (s.includes(".")) {
                        return new X.NumericValue(s, "bigDecimal");
                    } else {
                        return BigInt(s);
                    }
                }
            }
        }
        return t;
    }
    const di = (e, t)=>he.collectBody(e, t).then((r)=>(t?.utf8Encoder ?? ui.toUtf8)(r));
    const gr = (e, t)=>di(e, t).then((r)=>{
            if (r.length) {
                try {
                    return JSON.parse(r);
                } catch (error) {
                    if (error?.name === "SyntaxError") {
                        Object.defineProperty(error, "$responseBodyText", {
                            value: r
                        });
                    }
                    throw error;
                }
            }
            return {};
        });
    const $d = async (e, t)=>{
        let r = await gr(e, t);
        r.message = r.message ?? r.Message;
        return r;
    };
    const yr = (e, t)=>{
        let r = (a, c)=>Object.keys(a).find((d)=>d.toLowerCase() === c.toLowerCase());
        let s = (a)=>{
            let c = a;
            if (typeof c === "number") {
                c = c.toString();
            }
            if (c.indexOf(",") >= 0) {
                c = c.split(",")[0];
            }
            if (c.indexOf(":") >= 0) {
                c = c.split(":")[0];
            }
            if (c.indexOf("#") >= 0) {
                c = c.split("#")[1];
            }
            return c;
        };
        let o = r(e.headers, "x-amzn-errortype");
        if (o !== undefined) {
            return s(e.headers[o]);
        }
        if (t && typeof t === "object") {
            let a = r(t, "code");
            if (a && t[a] !== undefined) {
                return s(t[a]);
            }
            if (t.__type !== undefined) {
                return s(t.__type);
            }
        }
    };
    class Er extends Se {
        settings;
        constructor(e){
            super();
            this.settings = e;
        }
        async read(e, t) {
            return this._read(e, typeof t === "string" ? JSON.parse(t, zd) : await gr(t, this.serdeContext));
        }
        readObject(e, t) {
            return this._read(e, t);
        }
        _read(e, t) {
            let r = t !== null && typeof t === "object";
            let s = U.NormalizedSchema.of(e);
            if (s.isListSchema() && Array.isArray(t)) {
                let a = s.getValueSchema();
                let c = [];
                let d = !!s.getMergedTraits().sparse;
                for (let f of t){
                    if (d || f != null) {
                        c.push(this._read(a, f));
                    }
                }
                return c;
            } else if (s.isMapSchema() && r) {
                let a = s.getValueSchema();
                let c = {};
                let d = !!s.getMergedTraits().sparse;
                for (let [f, m] of Object.entries(t)){
                    if (d || m != null) {
                        c[f] = this._read(a, m);
                    }
                }
                return c;
            } else if (s.isStructSchema() && r) {
                let a = {};
                for (let [c, d] of s.structIterator()){
                    let f = this.settings.jsonName ? d.getMergedTraits().jsonName ?? c : c;
                    let m = this._read(d, t[f]);
                    if (m != null) {
                        a[c] = m;
                    }
                }
                return a;
            }
            if (s.isBlobSchema() && typeof t === "string") {
                return He.fromBase64(t);
            }
            let mediaType = s.getMergedTraits().mediaType;
            if (s.isStringSchema() && typeof t === "string" && mediaType) {
                if (mediaType === "application/json" || mediaType.endsWith("+json")) {
                    return X.LazyJsonString.from(t);
                }
            }
            if (s.isTimestampSchema() && t != null) {
                switch(Y.determineTimestampFormat(s, this.settings)){
                    case 5:
                        return X.parseRfc3339DateTimeWithOffset(t);
                    case 6:
                        return X.parseRfc7231DateTime(t);
                    case 7:
                        return X.parseEpochTimestamp(t);
                    default:
                        console.warn("Missing timestamp format, parsing value with Date constructor:", t);
                        return new Date(t);
                }
            }
            if (s.isBigIntegerSchema() && (typeof t === "number" || typeof t === "string")) {
                return BigInt(t);
            }
            if (s.isBigDecimalSchema() && t != null) {
                if (t instanceof X.NumericValue) {
                    return t;
                }
                let a = t;
                if (a.type === "bigDecimal" && "string" in a) {
                    return new X.NumericValue(a.string, a.type);
                }
                return new X.NumericValue(String(t), "bigDecimal");
            }
            if (s.isNumericSchema() && typeof t === "string") {
                switch(t){
                    case "Infinity":
                        return Infinity;
                    case "-Infinity":
                        return -Infinity;
                    case "NaN":
                        return NaN;
                }
            }
            if (s.isDocumentSchema()) {
                if (r) {
                    let a = Array.isArray(t) ? [] : {};
                    for (let [c, d] of Object.entries(t)){
                        if (d instanceof X.NumericValue) {
                            a[c] = d;
                        } else {
                            a[c] = this._read(s, d);
                        }
                    }
                    return a;
                } else {
                    return structuredClone(t);
                }
            }
            return t;
        }
    }
    const ci = String.fromCharCode(925);
    class hi {
        values = new Map;
        counter = 0;
        stage = 0;
        createReplacer() {
            if (this.stage === 1) {
                throw Error("@aws-sdk/core/protocols - JsonReplacer already created.");
            }
            if (this.stage === 2) {
                throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
            }
            this.stage = 1;
            return (e, t)=>{
                if (t instanceof X.NumericValue) {
                    let r = `${`${ci}nv${this.counter++}`}_` + t.string;
                    this.values.set(`"${r}"`, t.string);
                    return r;
                }
                if (typeof t === "bigint") {
                    let r = t.toString();
                    let s = `${`${ci}b${this.counter++}`}_` + r;
                    this.values.set(`"${s}"`, r);
                    return s;
                }
                return t;
            };
        }
        replaceInJson(e) {
            if (this.stage === 0) {
                throw Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
            }
            if (this.stage === 2) {
                throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
            }
            this.stage = 2;
            if (this.counter === 0) {
                return e;
            }
            for (let [t, r] of this.values){
                e = e.replace(t, r);
            }
            return e;
        }
    }
    class Sr extends Se {
        settings;
        buffer;
        rootSchema;
        constructor(e){
            super();
            this.settings = e;
        }
        write(e, t) {
            this.rootSchema = U.NormalizedSchema.of(e);
            this.buffer = this._write(this.rootSchema, t);
        }
        writeDiscriminatedDocument(e, t) {
            this.write(e, t);
            if (typeof this.buffer === "object") {
                this.buffer.__type = U.NormalizedSchema.of(e).getName(true);
            }
        }
        flush() {
            let { rootSchema } = this;
            this.rootSchema = undefined;
            if (rootSchema?.isStructSchema() || rootSchema?.isDocumentSchema()) {
                let t = new hi;
                return t.replaceInJson(JSON.stringify(this.buffer, t.createReplacer(), 0));
            }
            return this.buffer;
        }
        _write(e, t, r) {
            let s = t !== null && typeof t === "object";
            let o = U.NormalizedSchema.of(e);
            if (o.isListSchema() && Array.isArray(t)) {
                let a = o.getValueSchema();
                let c = [];
                let d = !!o.getMergedTraits().sparse;
                for (let f of t){
                    if (d || f != null) {
                        c.push(this._write(a, f));
                    }
                }
                return c;
            } else if (o.isMapSchema() && s) {
                let a = o.getValueSchema();
                let c = {};
                let d = !!o.getMergedTraits().sparse;
                for (let [f, m] of Object.entries(t)){
                    if (d || m != null) {
                        c[f] = this._write(a, m);
                    }
                }
                return c;
            } else if (o.isStructSchema() && s) {
                let a = {};
                for (let [c, d] of o.structIterator()){
                    let f = this.settings.jsonName ? d.getMergedTraits().jsonName ?? c : c;
                    let m = this._write(d, t[c], o);
                    if (m !== undefined) {
                        a[f] = m;
                    }
                }
                return a;
            }
            if (t === null && r?.isStructSchema()) {
                return;
            }
            if (o.isBlobSchema() && (t instanceof Uint8Array || typeof t === "string") || o.isDocumentSchema() && t instanceof Uint8Array) {
                if (o === this.rootSchema) {
                    return t;
                }
                return (this.serdeContext?.base64Encoder ?? He.toBase64)(t);
            }
            if ((o.isTimestampSchema() || o.isDocumentSchema()) && t instanceof Date) {
                switch(Y.determineTimestampFormat(o, this.settings)){
                    case 5:
                        return t.toISOString().replace(".000Z", "Z");
                    case 6:
                        return X.dateToUtcString(t);
                    case 7:
                        return t.getTime() / 1000;
                    default:
                        console.warn("Missing timestamp format, using epoch seconds", t);
                        return t.getTime() / 1000;
                }
            }
            if (o.isNumericSchema() && typeof t === "number") {
                if (Math.abs(t) === Infinity || isNaN(t)) {
                    return String(t);
                }
            }
            if (o.isStringSchema()) {
                if (typeof t === "undefined" && o.isIdempotencyToken()) {
                    return X.generateIdempotencyToken();
                }
                let a = o.getMergedTraits().mediaType;
                if (t != null && a) {
                    if (a === "application/json" || a.endsWith("+json")) {
                        return X.LazyJsonString.from(t);
                    }
                }
            }
            if (o.isDocumentSchema()) {
                if (s) {
                    let a = Array.isArray(t) ? [] : {};
                    for (let [c, d] of Object.entries(t)){
                        if (d instanceof X.NumericValue) {
                            a[c] = d;
                        } else {
                            a[c] = this._write(o, d);
                        }
                    }
                    return a;
                } else {
                    return structuredClone(t);
                }
            }
            return t;
        }
    }
    class dt extends Se {
        settings;
        constructor(e){
            super();
            this.settings = e;
        }
        createSerializer() {
            let e = new Sr(this.settings);
            e.setSerdeContext(this.serdeContext);
            return e;
        }
        createDeserializer() {
            let e = new Er(this.settings);
            e.setSerdeContext(this.serdeContext);
            return e;
        }
    }
    class ht extends Y.RpcProtocol {
        serializer;
        deserializer;
        serviceTarget;
        codec;
        mixin;
        awsQueryCompatible;
        constructor({ defaultNamespace, serviceTarget, awsQueryCompatible }){
            super({
                defaultNamespace
            });
            this.serviceTarget = serviceTarget;
            this.codec = new dt({
                timestampFormat: {
                    useTrait: true,
                    default: 7
                },
                jsonName: false
            });
            this.serializer = this.codec.createSerializer();
            this.deserializer = this.codec.createDeserializer();
            this.awsQueryCompatible = !!awsQueryCompatible;
            this.mixin = new De(this.awsQueryCompatible);
        }
        async serializeRequest(e, t, r) {
            let s = await super.serializeRequest(e, t, r);
            if (!s.path.endsWith("/")) {
                s.path += "/";
            }
            Object.assign(s.headers, {
                "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`,
                "x-amz-target": `${this.serviceTarget}.${e.name}`
            });
            if (this.awsQueryCompatible) {
                s.headers["x-amzn-query-mode"] = "true";
            }
            if (U.deref(e.input) === "unit" || !s.body) {
                s.body = "{}";
            }
            return s;
        }
        getPayloadCodec() {
            return this.codec;
        }
        async handleError(e, t, r, s, o) {
            if (this.awsQueryCompatible) {
                this.mixin.setQueryCompatError(s, r);
            }
            let a = yr(r, s) ?? "Unknown";
            let { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o);
            let f = U.NormalizedSchema.of(errorSchema);
            let m = s.message ?? s.Message ?? "Unknown";
            let b = new (U.TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error)(m);
            let x = {};
            for (let [N, T] of f.structIterator()){
                let I = T.getMergedTraits().jsonName ?? N;
                x[N] = this.codec.createDeserializer().readObject(T, s[I]);
            }
            if (this.awsQueryCompatible) {
                this.mixin.queryCompatOutput(s, x);
            }
            throw this.mixin.decorateServiceException(Object.assign(b, errorMetadata, {
                $fault: f.getMergedTraits().error,
                message: m
            }, x), s);
        }
    }
    class fi extends ht {
        constructor({ defaultNamespace, serviceTarget, awsQueryCompatible }){
            super({
                defaultNamespace,
                serviceTarget,
                awsQueryCompatible
            });
        }
        getShapeId() {
            return "aws.protocols#awsJson1_0";
        }
        getJsonRpcVersion() {
            return "1.0";
        }
        getDefaultContentType() {
            return "application/x-amz-json-1.0";
        }
    }
    class pi extends ht {
        constructor({ defaultNamespace, serviceTarget, awsQueryCompatible }){
            super({
                defaultNamespace,
                serviceTarget,
                awsQueryCompatible
            });
        }
        getShapeId() {
            return "aws.protocols#awsJson1_1";
        }
        getJsonRpcVersion() {
            return "1.1";
        }
        getDefaultContentType() {
            return "application/x-amz-json-1.1";
        }
    }
    class mi extends Y.HttpBindingProtocol {
        serializer;
        deserializer;
        codec;
        mixin = new De;
        constructor({ defaultNamespace }){
            super({
                defaultNamespace
            });
            let t = {
                timestampFormat: {
                    useTrait: true,
                    default: 7
                },
                httpBindings: true,
                jsonName: true
            };
            this.codec = new dt(t);
            this.serializer = new Y.HttpInterceptingShapeSerializer(this.codec.createSerializer(), t);
            this.deserializer = new Y.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), t);
        }
        getShapeId() {
            return "aws.protocols#restJson1";
        }
        getPayloadCodec() {
            return this.codec;
        }
        setSerdeContext(e) {
            this.codec.setSerdeContext(e);
            super.setSerdeContext(e);
        }
        async serializeRequest(e, t, r) {
            let s = await super.serializeRequest(e, t, r);
            let o = U.NormalizedSchema.of(e.input);
            if (!s.headers["content-type"]) {
                let a = this.mixin.resolveRestContentType(this.getDefaultContentType(), o);
                if (a) {
                    s.headers["content-type"] = a;
                }
            }
            if (s.body == null && s.headers["content-type"] === this.getDefaultContentType()) {
                s.body = "{}";
            }
            return s;
        }
        async deserializeResponse(e, t, r) {
            let s = await super.deserializeResponse(e, t, r);
            let o = U.NormalizedSchema.of(e.output);
            for (let [a, c] of o.structIterator()){
                if (c.getMemberTraits().httpPayload && !(a in s)) {
                    s[a] = null;
                }
            }
            return s;
        }
        async handleError(e, t, r, s, o) {
            let a = yr(r, s) ?? "Unknown";
            let { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o);
            let f = U.NormalizedSchema.of(errorSchema);
            let m = s.message ?? s.Message ?? "Unknown";
            let b = new (U.TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error)(m);
            await this.deserializeHttpMessage(errorSchema, t, r, s);
            let x = {};
            for (let [N, T] of f.structIterator()){
                let I = T.getMergedTraits().jsonName ?? N;
                x[N] = this.codec.createDeserializer().readObject(T, s[I]);
            }
            throw this.mixin.decorateServiceException(Object.assign(b, errorMetadata, {
                $fault: f.getMergedTraits().error,
                message: m
            }, x), s);
        }
        getDefaultContentType() {
            return "application/json";
        }
    }
    const Bd = (e)=>{
        if (e == null) {
            return;
        }
        if (typeof e === "object" && "__type" in e) {
            delete e.__type;
        }
        return he.expectUnion(e);
    };
    class ft extends Se {
        settings;
        stringDeserializer;
        constructor(e){
            super();
            this.settings = e;
            this.stringDeserializer = new Y.FromStringShapeDeserializer(e);
        }
        setSerdeContext(e) {
            this.serdeContext = e;
            this.stringDeserializer.setSerdeContext(e);
        }
        read(e, t, r) {
            let s = U.NormalizedSchema.of(e);
            let o = s.getMemberSchemas();
            if (s.isStructSchema() && s.isMemberSchema() && !!Object.values(o).find((f)=>!!f.getMemberTraits().eventPayload)) {
                let f = {};
                let m = Object.keys(o)[0];
                if (o[m].isBlobSchema()) {
                    f[m] = t;
                } else {
                    f[m] = this.read(o[m], t);
                }
                return f;
            }
            let c = (this.serdeContext?.utf8Encoder ?? ui.toUtf8)(t);
            let d = this.parseXml(c);
            return this.readSchema(e, r ? d[r] : d);
        }
        readSchema(e, t) {
            let r = U.NormalizedSchema.of(e);
            if (r.isUnitSchema()) {
                return;
            }
            let s = r.getMergedTraits();
            if (r.isListSchema() && !Array.isArray(t)) {
                return this.readSchema(r, [
                    t
                ]);
            }
            if (t == null) {
                return t;
            }
            if (typeof t === "object") {
                let o = !!s.sparse;
                let a = !!s.xmlFlattened;
                if (r.isListSchema()) {
                    let d = r.getValueSchema();
                    let f = [];
                    let m = d.getMergedTraits().xmlName ?? "member";
                    let y = a ? t : (t[0] ?? t)[m];
                    let b = Array.isArray(y) ? y : [
                        y
                    ];
                    for (let x of b){
                        if (x != null || o) {
                            f.push(this.readSchema(d, x));
                        }
                    }
                    return f;
                }
                let c = {};
                if (r.isMapSchema()) {
                    let d = r.getKeySchema();
                    let f = r.getValueSchema();
                    let m;
                    if (a) {
                        m = Array.isArray(t) ? t : [
                            t
                        ];
                    } else {
                        m = Array.isArray(t.entry) ? t.entry : [
                            t.entry
                        ];
                    }
                    let y = d.getMergedTraits().xmlName ?? "key";
                    let b = f.getMergedTraits().xmlName ?? "value";
                    for (let x of m){
                        let N = x[y];
                        let T = x[b];
                        if (T != null || o) {
                            c[N] = this.readSchema(f, T);
                        }
                    }
                    return c;
                }
                if (r.isStructSchema()) {
                    for (let [d, f] of r.structIterator()){
                        let m = f.getMergedTraits();
                        let y = !m.httpPayload ? f.getMemberTraits().xmlName ?? d : m.xmlName ?? f.getName();
                        if (t[y] != null) {
                            c[d] = this.readSchema(f, t[y]);
                        }
                    }
                    return c;
                }
                if (r.isDocumentSchema()) {
                    return t;
                }
                throw Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${r.getName(true)}`);
            }
            if (r.isListSchema()) {
                return [];
            }
            if (r.isMapSchema() || r.isStructSchema()) {
                return {};
            }
            return this.stringDeserializer.read(r, t);
        }
        parseXml(e) {
            if (e.length) {
                let t;
                try {
                    t = se.parseXML(e);
                } catch (error) {
                    if (error && typeof error === "object") {
                        Object.defineProperty(error, "$responseBodyText", {
                            value: e
                        });
                    }
                    throw error;
                }
                let r = "#text";
                let s = Object.keys(t)[0];
                let o = t[s];
                if (o[r]) {
                    o[s] = o[r];
                    delete o[r];
                }
                return he.getValueFromTextNode(o);
            }
            return {};
        }
    }
    class gi extends Se {
        settings;
        buffer;
        constructor(e){
            super();
            this.settings = e;
        }
        write(e, t, r = "") {
            if (this.buffer === undefined) {
                this.buffer = "";
            }
            let s = U.NormalizedSchema.of(e);
            if (r && !r.endsWith(".")) {
                r += ".";
            }
            if (s.isBlobSchema()) {
                if (typeof t === "string" || t instanceof Uint8Array) {
                    this.writeKey(r);
                    this.writeValue((this.serdeContext?.base64Encoder ?? He.toBase64)(t));
                }
            } else if (s.isBooleanSchema() || s.isNumericSchema() || s.isStringSchema()) {
                if (t != null) {
                    this.writeKey(r);
                    this.writeValue(String(t));
                } else if (s.isIdempotencyToken()) {
                    this.writeKey(r);
                    this.writeValue(X.generateIdempotencyToken());
                }
            } else if (s.isBigIntegerSchema()) {
                if (t != null) {
                    this.writeKey(r);
                    this.writeValue(String(t));
                }
            } else if (s.isBigDecimalSchema()) {
                if (t != null) {
                    this.writeKey(r);
                    this.writeValue(t instanceof X.NumericValue ? t.string : String(t));
                }
            } else if (s.isTimestampSchema()) {
                if (t instanceof Date) {
                    this.writeKey(r);
                    switch(Y.determineTimestampFormat(s, this.settings)){
                        case 5:
                            this.writeValue(t.toISOString().replace(".000Z", "Z"));
                            break;
                        case 6:
                            this.writeValue(he.dateToUtcString(t));
                            break;
                        case 7:
                            this.writeValue(String(t.getTime() / 1000));
                            break;
                    }
                }
            } else if (s.isDocumentSchema()) {
                throw Error(`@aws-sdk/core/protocols - QuerySerializer unsupported document type ${s.getName(true)}`);
            } else if (s.isListSchema()) {
                if (Array.isArray(t)) {
                    if (t.length === 0) {
                        if (this.settings.serializeEmptyLists) {
                            this.writeKey(r);
                            this.writeValue("");
                        }
                    } else {
                        let o = s.getValueSchema();
                        let a = this.settings.flattenLists || s.getMergedTraits().xmlFlattened;
                        let c = 1;
                        for (let d of t){
                            if (d == null) {
                                continue;
                            }
                            let f = this.getKey("member", o.getMergedTraits().xmlName);
                            let m = a ? `${r}${c}` : `${r}${f}.${c}`;
                            this.write(o, d, m);
                            ++c;
                        }
                    }
                }
            } else if (s.isMapSchema()) {
                if (t && typeof t === "object") {
                    let o = s.getKeySchema();
                    let a = s.getValueSchema();
                    let c = s.getMergedTraits().xmlFlattened;
                    let d = 1;
                    for (let [f, m] of Object.entries(t)){
                        if (m == null) {
                            continue;
                        }
                        let y = this.getKey("key", o.getMergedTraits().xmlName);
                        let b = c ? `${r}${d}.${y}` : `${r}entry.${d}.${y}`;
                        let x = this.getKey("value", a.getMergedTraits().xmlName);
                        let N = c ? `${r}${d}.${x}` : `${r}entry.${d}.${x}`;
                        this.write(o, f, b);
                        this.write(a, m, N);
                        ++d;
                    }
                }
            } else if (s.isStructSchema()) {
                if (t && typeof t === "object") {
                    for (let [o, a] of s.structIterator()){
                        if (t[o] == null && !a.isIdempotencyToken()) {
                            continue;
                        }
                        let c = this.getKey(o, a.getMergedTraits().xmlName);
                        let d = `${r}${c}`;
                        this.write(a, t[o], d);
                    }
                }
            } else if (s.isUnitSchema()) ;
            else {
                throw Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${s.getName(true)}`);
            }
        }
        flush() {
            if (this.buffer === undefined) {
                throw Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
            }
            let buffer = this.buffer;
            delete this.buffer;
            return buffer;
        }
        getKey(e, t) {
            let r = t ?? e;
            if (this.settings.capitalizeKeys) {
                return r[0].toUpperCase() + r.slice(1);
            }
            return r;
        }
        writeKey(e) {
            if (e.endsWith(".")) {
                e = e.slice(0, e.length - 1);
            }
            this.buffer += `&${Y.extendedEncodeURIComponent(e)}=`;
        }
        writeValue(e) {
            this.buffer += Y.extendedEncodeURIComponent(e);
        }
    }
    class wr extends Y.RpcProtocol {
        options;
        serializer;
        deserializer;
        mixin = new De;
        constructor(e){
            super({
                defaultNamespace: e.defaultNamespace
            });
            this.options = e;
            let t = {
                timestampFormat: {
                    useTrait: true,
                    default: 5
                },
                httpBindings: false,
                xmlNamespace: e.xmlNamespace,
                serviceNamespace: e.defaultNamespace,
                serializeEmptyLists: true
            };
            this.serializer = new gi(t);
            this.deserializer = new ft(t);
        }
        getShapeId() {
            return "aws.protocols#awsQuery";
        }
        setSerdeContext(e) {
            this.serializer.setSerdeContext(e);
            this.deserializer.setSerdeContext(e);
        }
        getPayloadCodec() {
            throw Error("AWSQuery protocol has no payload codec.");
        }
        async serializeRequest(e, t, r) {
            let s = await super.serializeRequest(e, t, r);
            if (!s.path.endsWith("/")) {
                s.path += "/";
            }
            Object.assign(s.headers, {
                "content-type": "application/x-www-form-urlencoded"
            });
            if (U.deref(e.input) === "unit" || !s.body) {
                s.body = "";
            }
            let o = e.name.split("#")[1] ?? e.name;
            s.body = `Action=${o}&Version=${this.options.version}` + s.body;
            if (s.body.endsWith("&")) {
                s.body = s.body.slice(-1);
            }
            return s;
        }
        async deserializeResponse(e, t, r) {
            let deserializer = this.deserializer;
            let o = U.NormalizedSchema.of(e.output);
            let a = {};
            if (r.statusCode >= 300) {
                let y = await Y.collectBody(r.body, t);
                if (y.byteLength > 0) {
                    Object.assign(a, await deserializer.read(15, y));
                }
                await this.handleError(e, t, r, a, this.deserializeMetadata(r));
            }
            for(let y in r.headers){
                let b = r.headers[y];
                delete r.headers[y];
                r.headers[y.toLowerCase()] = b;
            }
            let c = e.name.split("#")[1] ?? e.name;
            let d = o.isStructSchema() && this.useNestedResult() ? `${c}Result` : undefined;
            let f = await Y.collectBody(r.body, t);
            if (f.byteLength > 0) {
                Object.assign(a, await deserializer.read(o, f, d));
            }
            return {
                $metadata: this.deserializeMetadata(r),
                ...a
            };
        }
        useNestedResult() {
            return true;
        }
        async handleError(e, t, r, s, o) {
            let a = this.loadQueryErrorCode(r, s) ?? "Unknown";
            let c = this.loadQueryError(s);
            let d = this.loadQueryErrorMessage(s);
            c.message = d;
            c.Error = {
                Type: c.Type,
                Code: c.Code,
                Message: d
            };
            let { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, c, o, (T, I)=>{
                try {
                    return T.getSchema(I);
                } catch (F) {
                    return T.find((v)=>U.NormalizedSchema.of(v).getMergedTraits().awsQueryError?.[0] === I);
                }
            });
            let y = U.NormalizedSchema.of(errorSchema);
            let x = new (U.TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error)(d);
            let N = {
                Error: c.Error
            };
            for (let [T, I] of y.structIterator()){
                let F = I.getMergedTraits().xmlName ?? T;
                let v = c[F] ?? s[F];
                N[T] = this.deserializer.readSchema(I, v);
            }
            throw this.mixin.decorateServiceException(Object.assign(x, errorMetadata, {
                $fault: y.getMergedTraits().error,
                message: d
            }, N), s);
        }
        loadQueryErrorCode(e, t) {
            let r = (t.Errors?.[0]?.Error ?? t.Errors?.Error ?? t.Error)?.Code;
            if (r !== undefined) {
                return r;
            }
            if (e.statusCode == 404) {
                return "NotFound";
            }
        }
        loadQueryError(e) {
            return e.Errors?.[0]?.Error ?? e.Errors?.Error ?? e.Error;
        }
        loadQueryErrorMessage(e) {
            let t = this.loadQueryError(e);
            return t?.message ?? t?.Message ?? e.message ?? e.Message ?? "Unknown";
        }
        getDefaultContentType() {
            return "application/x-www-form-urlencoded";
        }
    }
    class yi extends wr {
        options;
        constructor(e){
            super(e);
            this.options = e;
            let t = {
                capitalizeKeys: true,
                flattenLists: true,
                serializeEmptyLists: false
            };
            Object.assign(this.serializer.settings, t);
        }
        useNestedResult() {
            return false;
        }
    }
    const Ei = (e, t)=>di(e, t).then((r)=>{
            if (r.length) {
                let s;
                try {
                    s = se.parseXML(r);
                } catch (error) {
                    if (error && typeof error === "object") {
                        Object.defineProperty(error, "$responseBodyText", {
                            value: r
                        });
                    }
                    throw error;
                }
                let o = "#text";
                let a = Object.keys(s)[0];
                let c = s[a];
                if (c[o]) {
                    c[a] = c[o];
                    delete c[o];
                }
                return he.getValueFromTextNode(c);
            }
            return {};
        });
    const Ld = async (e, t)=>{
        let r = await Ei(e, t);
        if (r.Error) {
            r.Error.message = r.Error.message ?? r.Error.Message;
        }
        return r;
    };
    const Si = (e, t)=>{
        if (t?.Error?.Code !== undefined) {
            return t.Error.Code;
        }
        if (t?.Code !== undefined) {
            return t.Code;
        }
        if (e.statusCode == 404) {
            return "NotFound";
        }
    };
    class xr extends Se {
        settings;
        stringBuffer;
        byteBuffer;
        buffer;
        constructor(e){
            super();
            this.settings = e;
        }
        write(e, t) {
            let r = U.NormalizedSchema.of(e);
            if (r.isStringSchema() && typeof t === "string") {
                this.stringBuffer = t;
            } else if (r.isBlobSchema()) {
                this.byteBuffer = "byteLength" in t ? t : (this.serdeContext?.base64Decoder ?? He.fromBase64)(t);
            } else {
                this.buffer = this.writeStruct(r, t, undefined);
                let s = r.getMergedTraits();
                if (s.httpPayload && !s.xmlName) {
                    this.buffer.withName(r.getName());
                }
            }
        }
        flush() {
            if (this.byteBuffer !== undefined) {
                let t = this.byteBuffer;
                delete this.byteBuffer;
                return t;
            }
            if (this.stringBuffer !== undefined) {
                let t = this.stringBuffer;
                delete this.stringBuffer;
                return t;
            }
            let buffer = this.buffer;
            if (this.settings.xmlNamespace) {
                if (!buffer?.attributes?.xmlns) {
                    buffer.addAttribute("xmlns", this.settings.xmlNamespace);
                }
            }
            delete this.buffer;
            return buffer.toString();
        }
        writeStruct(e, t, r) {
            let s = e.getMergedTraits();
            let o = e.isMemberSchema() && !s.httpPayload ? e.getMemberTraits().xmlName ?? e.getMemberName() : s.xmlName ?? e.getName();
            if (!o || !e.isStructSchema()) {
                throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${e.getName(true)}.`);
            }
            let a = se.XmlNode.of(o);
            let [c, d] = this.getXmlnsAttribute(e, r);
            for (let [f, m] of e.structIterator()){
                let y = t[f];
                if (y != null || m.isIdempotencyToken()) {
                    if (m.getMergedTraits().xmlAttribute) {
                        a.addAttribute(m.getMergedTraits().xmlName ?? f, this.writeSimple(m, y));
                        continue;
                    }
                    if (m.isListSchema()) {
                        this.writeList(m, y, a, d);
                    } else if (m.isMapSchema()) {
                        this.writeMap(m, y, a, d);
                    } else if (m.isStructSchema()) {
                        a.addChildNode(this.writeStruct(m, y, d));
                    } else {
                        let b = se.XmlNode.of(m.getMergedTraits().xmlName ?? m.getMemberName());
                        this.writeSimpleInto(m, y, b, d);
                        a.addChildNode(b);
                    }
                }
            }
            if (d) {
                a.addAttribute(c, d);
            }
            return a;
        }
        writeList(e, t, r, s) {
            if (!e.isMemberSchema()) {
                throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${e.getName(true)}`);
            }
            let o = e.getMergedTraits();
            let a = e.getValueSchema();
            let c = a.getMergedTraits();
            let d = !!c.sparse;
            let f = !!o.xmlFlattened;
            let [m, y] = this.getXmlnsAttribute(e, s);
            let b = (x, N)=>{
                if (a.isListSchema()) {
                    this.writeList(a, Array.isArray(N) ? N : [
                        N
                    ], x, y);
                } else if (a.isMapSchema()) {
                    this.writeMap(a, N, x, y);
                } else if (a.isStructSchema()) {
                    let T = this.writeStruct(a, N, y);
                    x.addChildNode(T.withName(f ? o.xmlName ?? e.getMemberName() : c.xmlName ?? "member"));
                } else {
                    let T = se.XmlNode.of(f ? o.xmlName ?? e.getMemberName() : c.xmlName ?? "member");
                    this.writeSimpleInto(a, N, T, y);
                    x.addChildNode(T);
                }
            };
            if (f) {
                for (let x of t){
                    if (d || x != null) {
                        b(r, x);
                    }
                }
            } else {
                let x = se.XmlNode.of(o.xmlName ?? e.getMemberName());
                if (y) {
                    x.addAttribute(m, y);
                }
                for (let N of t){
                    if (d || N != null) {
                        b(x, N);
                    }
                }
                r.addChildNode(x);
            }
        }
        writeMap(e, t, r, s, o = false) {
            if (!e.isMemberSchema()) {
                throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${e.getName(true)}`);
            }
            let a = e.getMergedTraits();
            let c = e.getKeySchema();
            let f = c.getMergedTraits().xmlName ?? "key";
            let m = e.getValueSchema();
            let y = m.getMergedTraits();
            let b = y.xmlName ?? "value";
            let x = !!y.sparse;
            let N = !!a.xmlFlattened;
            let [T, I] = this.getXmlnsAttribute(e, s);
            let F = (v, W, M)=>{
                let ee = se.XmlNode.of(f, W);
                let [Pe, q] = this.getXmlnsAttribute(c, I);
                if (q) {
                    ee.addAttribute(Pe, q);
                }
                v.addChildNode(ee);
                let K = se.XmlNode.of(b);
                if (m.isListSchema()) {
                    this.writeList(m, M, K, I);
                } else if (m.isMapSchema()) {
                    this.writeMap(m, M, K, I, true);
                } else if (m.isStructSchema()) {
                    K = this.writeStruct(m, M, I);
                } else {
                    this.writeSimpleInto(m, M, K, I);
                }
                v.addChildNode(K);
            };
            if (N) {
                for (let [v, W] of Object.entries(t)){
                    if (x || W != null) {
                        let M = se.XmlNode.of(a.xmlName ?? e.getMemberName());
                        F(M, v, W);
                        r.addChildNode(M);
                    }
                }
            } else {
                let v;
                if (!o) {
                    v = se.XmlNode.of(a.xmlName ?? e.getMemberName());
                    if (I) {
                        v.addAttribute(T, I);
                    }
                    r.addChildNode(v);
                }
                for (let [W, M] of Object.entries(t)){
                    if (x || M != null) {
                        let ee = se.XmlNode.of("entry");
                        F(ee, W, M);
                        (o ? r : v).addChildNode(ee);
                    }
                }
            }
        }
        writeSimple(e, t) {
            if (t === null) {
                throw Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
            }
            let r = U.NormalizedSchema.of(e);
            let s = null;
            if (t && typeof t === "object") {
                if (r.isBlobSchema()) {
                    s = (this.serdeContext?.base64Encoder ?? He.toBase64)(t);
                } else if (r.isTimestampSchema() && t instanceof Date) {
                    switch(Y.determineTimestampFormat(r, this.settings)){
                        case 5:
                            s = t.toISOString().replace(".000Z", "Z");
                            break;
                        case 6:
                            s = he.dateToUtcString(t);
                            break;
                        case 7:
                            s = String(t.getTime() / 1000);
                            break;
                        default:
                            console.warn("Missing timestamp format, using http date", t);
                            s = he.dateToUtcString(t);
                            break;
                    }
                } else if (r.isBigDecimalSchema() && t) {
                    if (t instanceof X.NumericValue) {
                        return t.string;
                    }
                    return String(t);
                } else if (r.isMapSchema() || r.isListSchema()) {
                    throw Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.");
                } else {
                    throw Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${r.getName(true)}`);
                }
            }
            if (r.isBooleanSchema() || r.isNumericSchema() || r.isBigIntegerSchema() || r.isBigDecimalSchema()) {
                s = String(t);
            }
            if (r.isStringSchema()) {
                if (t === undefined && r.isIdempotencyToken()) {
                    s = X.generateIdempotencyToken();
                } else {
                    s = String(t);
                }
            }
            if (s === null) {
                throw Error(`Unhandled schema-value pair ${r.getName(true)}=${t}`);
            }
            return s;
        }
        writeSimpleInto(e, t, r, s) {
            let o = this.writeSimple(e, t);
            let a = U.NormalizedSchema.of(e);
            let c = new se.XmlText(o);
            let [d, f] = this.getXmlnsAttribute(a, s);
            if (f) {
                r.addAttribute(d, f);
            }
            r.addChildNode(c);
        }
        getXmlnsAttribute(e, t) {
            let r = e.getMergedTraits();
            let [s, o] = r.xmlNamespace ?? [];
            if (o && o !== t) {
                return [
                    s ? `xmlns:${s}` : "xmlns",
                    o
                ];
            }
            return [
                undefined,
                undefined
            ];
        }
    }
    class br extends Se {
        settings;
        constructor(e){
            super();
            this.settings = e;
        }
        createSerializer() {
            let e = new xr(this.settings);
            e.setSerdeContext(this.serdeContext);
            return e;
        }
        createDeserializer() {
            let e = new ft(this.settings);
            e.setSerdeContext(this.serdeContext);
            return e;
        }
    }
    class wi extends Y.HttpBindingProtocol {
        codec;
        serializer;
        deserializer;
        mixin = new De;
        constructor(e){
            super(e);
            let t = {
                timestampFormat: {
                    useTrait: true,
                    default: 5
                },
                httpBindings: true,
                xmlNamespace: e.xmlNamespace,
                serviceNamespace: e.defaultNamespace
            };
            this.codec = new br(t);
            this.serializer = new Y.HttpInterceptingShapeSerializer(this.codec.createSerializer(), t);
            this.deserializer = new Y.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), t);
        }
        getPayloadCodec() {
            return this.codec;
        }
        getShapeId() {
            return "aws.protocols#restXml";
        }
        async serializeRequest(e, t, r) {
            let s = await super.serializeRequest(e, t, r);
            let o = U.NormalizedSchema.of(e.input);
            if (!s.headers["content-type"]) {
                let a = this.mixin.resolveRestContentType(this.getDefaultContentType(), o);
                if (a) {
                    s.headers["content-type"] = a;
                }
            }
            if (s.headers["content-type"] === this.getDefaultContentType()) {
                if (typeof s.body === "string") {
                    s.body = `<?xml version="1.0" encoding="UTF-8"?>${s.body}`;
                }
            }
            return s;
        }
        async deserializeResponse(e, t, r) {
            return super.deserializeResponse(e, t, r);
        }
        async handleError(e, t, r, s, o) {
            let a = Si(r, s) ?? "Unknown";
            let { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(a, this.options.defaultNamespace, r, s, o);
            let f = U.NormalizedSchema.of(errorSchema);
            let m = s.Error?.message ?? s.Error?.Message ?? s.message ?? s.Message ?? "Unknown";
            let b = new (U.TypeRegistry.for(errorSchema[1]).getErrorCtor(errorSchema) ?? Error)(m);
            await this.deserializeHttpMessage(errorSchema, t, r, s);
            let x = {};
            for (let [N, T] of f.structIterator()){
                let I = T.getMergedTraits().xmlName ?? N;
                let F = s.Error?.[I] ?? s[I];
                x[N] = this.codec.createDeserializer().readSchema(T, F);
            }
            throw this.mixin.decorateServiceException(Object.assign(b, errorMetadata, {
                $fault: f.getMergedTraits().error,
                message: m
            }, x), s);
        }
        getDefaultContentType() {
            return "application/xml";
        }
    }
    Ud.AwsEc2QueryProtocol = yi;
    Ud.AwsJson1_0Protocol = fi;
    Ud.AwsJson1_1Protocol = pi;
    Ud.AwsJsonRpcProtocol = ht;
    Ud.AwsQueryProtocol = wr;
    Ud.AwsRestJsonProtocol = mi;
    Ud.AwsRestXmlProtocol = wi;
    Ud.AwsSmithyRpcV2CborProtocol = li;
    Ud.JsonCodec = dt;
    Ud.JsonShapeDeserializer = Er;
    Ud.JsonShapeSerializer = Sr;
    Ud.XmlCodec = br;
    Ud.XmlShapeDeserializer = ft;
    Ud.XmlShapeSerializer = xr;
    Ud._toBool = kd;
    Ud._toNum = vd;
    Ud._toStr = Pd;
    Ud.awsExpectUnion = Bd;
    Ud.loadRestJsonErrorCode = yr;
    Ud.loadRestXmlErrorCode = Si;
    Ud.parseJsonBody = gr;
    Ud.parseJsonErrorBody = $d;
    Ud.parseXmlBody = Ei;
    Ud.parseXmlErrorBody = Ld;
});
export { goe, hoe, yoe, t7, DT, n7, _oe, KB, r7, aF, boe, Soe, woe, voe, Eoe, o7 };
