import { eP } from "/$bunfs/root/chunk-53tyrfzz.js";
import { qxe } from "/$bunfs/root/chunk-55x53sfe.js";
import { C } from "/$bunfs/root/chunk-cj4xndke.js";
const v = C(function(re) {
    const ne = (e, n, t)=>{
        if (!(n in e)) {
            return;
        }
        if (e[n] === "true") {
            return true;
        }
        if (e[n] === "false") {
            return false;
        }
        throw Error(`Cannot load ${t} "${n}". Expected "true" or "false", got ${e[n]}.`);
    };
    const te = (e, n, t)=>{
        if (!(n in e)) {
            return;
        }
        let r = parseInt(e[n], 10);
        if (Number.isNaN(r)) {
            throw TypeError(`Cannot load ${t} '${n}'. Expected number, got '${e[n]}'.`);
        }
        return r;
    };
    re.SelectorType = undefined;
    ((e)=>{
        e.ENV = "env";
        e.CONFIG = "shared config entry";
    })(re.SelectorType || (re.SelectorType = {}));
    re.booleanSelector = ne;
    re.numberSelector = te;
});
const uY = C(function($e) {
    const O = qxe();
    class x {
        capacity;
        data = new Map;
        parameters = [];
        constructor({ size, params }){
            this.capacity = size ?? 50;
            if (params) {
                this.parameters = params;
            }
        }
        get(e, n) {
            let t = this.hash(e);
            if (t === false) {
                return n();
            }
            if (!this.data.has(t)) {
                if (this.data.size > this.capacity + 10) {
                    let r = this.data.keys();
                    let s = 0;
                    while(true){
                        let { value, done } = r.next();
                        this.data.delete(value);
                        if (done || ++s > 10) {
                            break;
                        }
                    }
                }
                this.data.set(t, n());
            }
            return this.data.get(t);
        }
        size() {
            return this.data.size;
        }
        hash(e) {
            let n = "";
            let { parameters } = this;
            if (parameters.length === 0) {
                return false;
            }
            for (let r of parameters){
                let s = String(e[r] ?? "");
                if (s.includes("|;")) {
                    return false;
                }
                n += `${s}|;`;
            }
            return n;
        }
    }
    const ie = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$");
    const U = (e)=>ie.test(e) || e.startsWith("[") && e.endsWith("]");
    const ce = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$");
    const isValidHostLabel = (e, n = false)=>{
        if (!n) {
            return ce.test(e);
        }
        let t = e.split(".");
        for (let r of t){
            if (!isValidHostLabel(r)) {
                return false;
            }
        }
        return true;
    };
    const I = {};
    const N = "endpoints";
    function d(e) {
        if (typeof e !== "object" || e == null) {
            return e;
        }
        if ("ref" in e) {
            return `$${d(e.ref)}`;
        }
        if ("fn" in e) {
            return `${e.fn}(${(e.argv || []).map(d).join(", ")})`;
        }
        return JSON.stringify(e, null, 2);
    }
    class u extends Error {
        constructor(e){
            super(e);
            this.name = "EndpointError";
        }
    }
    const booleanEquals = (e, n)=>e === n;
    const le = (e)=>{
        let n = e.split(".");
        let t = [];
        for (let r of n){
            let s = r.indexOf("[");
            if (s !== -1) {
                if (r.indexOf("]") !== r.length - 1) {
                    throw new u(`Path: '${e}' does not end with ']'`);
                }
                let o = r.slice(s + 1, -1);
                if (Number.isNaN(parseInt(o))) {
                    throw new u(`Invalid array index: '${o}' in path: '${e}'`);
                }
                if (s !== 0) {
                    t.push(r.slice(0, s));
                }
                t.push(o);
            } else {
                t.push(r);
            }
        }
        return t;
    };
    const getAttr = (e, n)=>le(n).reduce((acc, item)=>{
            if (typeof acc !== "object") {
                throw new u(`Index '${item}' in '${n}' not found in '${JSON.stringify(e)}'`);
            } else if (Array.isArray(acc)) {
                return acc[parseInt(item)];
            }
            return acc[item];
        }, e);
    const isSet = (e)=>e != null;
    const not = (e)=>!e;
    const S = {
        [O.EndpointURLScheme.HTTP]: 80,
        [O.EndpointURLScheme.HTTPS]: 443
    };
    const parseURL = (e)=>{
        let n = (()=>{
            try {
                if (e instanceof URL) {
                    return e;
                }
                if (typeof e === "object" && "hostname" in e) {
                    let { hostname, port, protocol = "", path = "", query = {} } = e;
                    let T = new URL(`${protocol}//${hostname}${port ? `:${port}` : ""}${path}`);
                    T.search = Object.entries(query).map(([Y, ee])=>`${Y}=${ee}`).join("&");
                    return T;
                }
                return new URL(e);
            } catch (E) {
                return null;
            }
        })();
        if (!n) {
            console.error(`Unable to parse ${JSON.stringify(e)} as a whatwg URL.`);
            return null;
        }
        let n_href = n.href;
        let { host, hostname, pathname, protocol, search } = n;
        if (search) {
            return null;
        }
        let scheme = protocol.slice(0, -1);
        if (!Object.values(O.EndpointURLScheme).includes(scheme)) {
            return null;
        }
        let isIp = U(hostname);
        let g = n_href.includes(`${host}:${S[scheme]}`) || typeof e === "string" && e.includes(`${host}:${S[scheme]}`);
        let authority = `${host}${g ? `:${S[scheme]}` : ""}`;
        return {
            scheme,
            authority,
            path: pathname,
            normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
            isIp
        };
    };
    const stringEquals = (e, n)=>e === n;
    const substring = (e, n, t, r)=>{
        if (n >= t || e.length < t) {
            return null;
        }
        if (!r) {
            return e.substring(n, t);
        }
        return e.substring(e.length - t, e.length - n);
    };
    const uriEncode = (e)=>encodeURIComponent(e).replace(/[!*'()]/g, (n)=>`%${n.charCodeAt(0).toString(16).toUpperCase()}`);
    const Ne = {
        booleanEquals,
        getAttr,
        isSet,
        isValidHostLabel,
        not,
        parseURL,
        stringEquals,
        substring,
        uriEncode
    };
    const D = (e, n)=>{
        let t = [];
        let r = {
            ...n.endpointParams,
            ...n.referenceRecord
        };
        let s = 0;
        while(s < e.length){
            let o = e.indexOf("{", s);
            if (o === -1) {
                t.push(e.slice(s));
                break;
            }
            t.push(e.slice(s, o));
            let i = e.indexOf("}", o);
            if (i === -1) {
                t.push(e.slice(o));
                break;
            }
            if (e[o + 1] === "{" && e[i + 1] === "}") {
                t.push(e.slice(o + 1, i));
                s = i + 2;
            }
            let a = e.substring(o + 1, i);
            if (a.includes("#")) {
                let [l, c] = a.split("#");
                t.push(getAttr(r[l], c));
            } else {
                t.push(r[a]);
            }
            s = i + 1;
        }
        return t.join("");
    };
    const he = ({ ref }, n)=>({
            ...n.endpointParams,
            ...n.referenceRecord
        })[ref];
    const evaluateExpression = (e, n, t)=>{
        if (typeof e === "string") {
            return D(e, t);
        } else if (e.fn) {
            return F.callFunction(e, t);
        } else if (e.ref) {
            return he(e, t);
        }
        throw new u(`'${n}': ${String(e)} is not a string, function or reference.`);
    };
    const callFunction = ({ fn, argv }, t)=>{
        let r = argv.map((o)=>{
            if ([
                "boolean",
                "number"
            ].includes(typeof o)) {
                return o;
            }
            return F.evaluateExpression(o, "arg", t);
        });
        let s = fn.split(".");
        if (s[0] in I && s[1] != null) {
            return I[s[0]][s[1]](...r);
        }
        return Ne[fn](...r);
    };
    var F = {
        evaluateExpression,
        callFunction
    };
    const _e = ({ assign, ...rest }, t)=>{
        if (assign && assign in t.referenceRecord) {
            throw new u(`'${assign}' is already defined in Reference Record.`);
        }
        let r = callFunction(rest, t);
        t.logger?.debug?.(`${N} evaluateCondition: ${d(rest)} = ${d(r)}`);
        return {
            result: r === "" ? true : !!r,
            ...assign != null && {
                toAssign: {
                    name: assign,
                    value: r
                }
            }
        };
    };
    const w = (e = [], n)=>{
        let referenceRecord = {};
        for (let r of e){
            let { result, toAssign } = _e(r, {
                ...n,
                referenceRecord: {
                    ...n.referenceRecord,
                    ...referenceRecord
                }
            });
            if (!result) {
                return {
                    result
                };
            }
            if (toAssign) {
                referenceRecord[toAssign.name] = toAssign.value;
                n.logger?.debug?.(`${N} assign: ${toAssign.name} := ${d(toAssign.value)}`);
            }
        }
        return {
            result: true,
            referenceRecord
        };
    };
    const Re = (headers, n)=>Object.entries(headers).reduce((acc, [r, s])=>({
                ...acc,
                [r]: s.map((o)=>{
                    let i = evaluateExpression(o, "Header value entry", n);
                    if (typeof i !== "string") {
                        throw new u(`Header '${r}' value '${i}' is not a string`);
                    }
                    return i;
                })
            }), {});
    const getEndpointProperties = (e, n)=>Object.entries(e).reduce((acc, [r, s])=>({
                ...acc,
                [r]: G.getEndpointProperty(s, n)
            }), {});
    const getEndpointProperty = (e, n)=>{
        if (Array.isArray(e)) {
            return e.map((t)=>getEndpointProperty(t, n));
        }
        switch(typeof e){
            case "string":
                return D(e, n);
            case "object":
                if (e === null) {
                    throw new u(`Unexpected endpoint property: ${e}`);
                }
                return G.getEndpointProperties(e, n);
            case "boolean":
                return e;
            default:
                throw new u(`Unexpected endpoint property type: ${typeof e}`);
        }
    };
    var G = {
        getEndpointProperty,
        getEndpointProperties
    };
    const Se = (url, n)=>{
        let t = evaluateExpression(url, "Endpoint URL", n);
        if (typeof t === "string") {
            try {
                return new URL(t);
            } catch (error) {
                console.error(`Failed to construct URL with ${t}`, error);
                throw error;
            }
        }
        throw new u(`Endpoint URL must be a string, got ${typeof t}`);
    };
    const Oe = ({ conditions, endpoint }, n)=>{
        let { result, referenceRecord } = w(conditions, n);
        if (!result) {
            return;
        }
        let i = {
            ...n,
            referenceRecord: {
                ...n.referenceRecord,
                ...referenceRecord
            }
        };
        let { url, properties, headers } = endpoint;
        n.logger?.debug?.(`${N} Resolving endpoint from template: ${d(endpoint)}`);
        return {
            ...headers != null && {
                headers: Re(headers, i)
            },
            ...properties != null && {
                properties: getEndpointProperties(properties, i)
            },
            url: Se(url, i)
        };
    };
    const Ie = ({ conditions, error }, n)=>{
        let { result, referenceRecord } = w(conditions, n);
        if (!result) {
            return;
        }
        throw new u(evaluateExpression(error, "Error", {
            ...n,
            referenceRecord: {
                ...n.referenceRecord,
                ...referenceRecord
            }
        }));
    };
    const evaluateRules = (e, n)=>{
        for (let t of e){
            if (t.type === "endpoint") {
                let r = Oe(t, n);
                if (r) {
                    return r;
                }
            } else if (t.type === "error") {
                Ie(t, n);
            } else if (t.type === "tree") {
                let r = z.evaluateTreeRule(t, n);
                if (r) {
                    return r;
                }
            } else {
                throw new u(`Unknown endpoint rule: ${t}`);
            }
        }
        throw new u("Rules evaluation failed");
    };
    const evaluateTreeRule = ({ conditions, rules }, n)=>{
        let { result, referenceRecord } = w(conditions, n);
        if (!result) {
            return;
        }
        return z.evaluateRules(rules, {
            ...n,
            referenceRecord: {
                ...n.referenceRecord,
                ...referenceRecord
            }
        });
    };
    var z = {
        evaluateRules,
        evaluateTreeRule
    };
    const we = (e, n)=>{
        let { endpointParams, logger } = n;
        let { parameters, rules } = e;
        n.logger?.debug?.(`${N} Initial EndpointParams: ${d(endpointParams)}`);
        let i = Object.entries(parameters).filter(([, c])=>c.default != null).map(([c, g])=>[
                c,
                g.default
            ]);
        if (i.length > 0) {
            for (let [c, g] of i){
                endpointParams[c] = endpointParams[c] ?? g;
            }
        }
        let a = Object.entries(parameters).filter(([, c])=>c.required).map(([c])=>c);
        for (let c of a){
            if (endpointParams[c] == null) {
                throw new u(`Missing required parameter: '${c}'`);
            }
        }
        let l = evaluateRules(rules, {
            endpointParams,
            logger,
            referenceRecord: {}
        });
        n.logger?.debug?.(`${N} Resolved endpoint: ${d(l)}`);
        return l;
    };
    $e.EndpointCache = x;
    $e.EndpointError = u;
    $e.customEndpointFunctions = I;
    $e.isIpAddress = U;
    $e.isValidHostLabel = isValidHostLabel;
    $e.resolveEndpoint = we;
});
const Fk = C(function(Be) {
    const f = v();
    const _ = eP();
    const De = uY();
    const W = "AWS_USE_DUALSTACK_ENDPOINT";
    const K = "use_dualstack_endpoint";
    const be = false;
    const Ce = {
        environmentVariableSelector: (e)=>f.booleanSelector(e, W, f.SelectorType.ENV),
        configFileSelector: (e)=>f.booleanSelector(e, K, f.SelectorType.CONFIG),
        default: false
    };
    const j = "AWS_USE_FIPS_ENDPOINT";
    const M = "use_fips_endpoint";
    const Fe = false;
    const ye = {
        environmentVariableSelector: (e)=>f.booleanSelector(e, j, f.SelectorType.ENV),
        configFileSelector: (e)=>f.booleanSelector(e, M, f.SelectorType.CONFIG),
        default: false
    };
    const Le = (e)=>{
        let { tls, endpoint, urlParser, useDualstackEndpoint } = e;
        return Object.assign(e, {
            tls: tls ?? true,
            endpoint: _.normalizeProvider(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
            isCustomEndpoint: true,
            useDualstackEndpoint: _.normalizeProvider(useDualstackEndpoint ?? false)
        });
    };
    const Ge = async (e)=>{
        let { tls = true } = e;
        let t = await e.region();
        if (!new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(t)) {
            throw Error("Invalid region in client config");
        }
        let s = await e.useDualstackEndpoint();
        let useFipsEndpoint = await e.useFipsEndpoint();
        let { hostname } = await e.regionInfoProvider(t, {
            useDualstackEndpoint: s,
            useFipsEndpoint
        }) ?? {};
        if (!hostname) {
            throw Error("Cannot resolve hostname from client config");
        }
        return e.urlParser(`${tls ? "https:" : "http:"}//${hostname}`);
    };
    const Ve = (e)=>{
        let n = _.normalizeProvider(e.useDualstackEndpoint ?? false);
        let { endpoint, useFipsEndpoint, urlParser, tls } = e;
        return Object.assign(e, {
            tls: tls ?? true,
            endpoint: endpoint ? _.normalizeProvider(typeof endpoint === "string" ? urlParser(endpoint) : endpoint) : ()=>Ge({
                    ...e,
                    useDualstackEndpoint: n,
                    useFipsEndpoint
                }),
            isCustomEndpoint: !!endpoint,
            useDualstackEndpoint: n
        });
    };
    const H = "AWS_REGION";
    const Z = "region";
    const ze = {
        environmentVariableSelector: (e)=>e[H],
        configFileSelector: (e)=>e[Z],
        default: ()=>{
            throw Error("Region is missing");
        }
    };
    const ke = {
        preferredFile: "credentials"
    };
    const k = new Set;
    const qe = (e, n = De.isValidHostLabel)=>{
        if (!k.has(e) && !n(e)) {
            if (e === "*") {
                console.warn('@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.');
            } else {
                throw Error(`Region not accepted: region="${e}" is not a valid hostname component.`);
            }
        } else {
            k.add(e);
        }
    };
    const B = (e)=>typeof e === "string" && (e.startsWith("fips-") || e.endsWith("-fips"));
    const We = (e)=>{
        if (B(e)) {
            if ([
                "fips-aws-global",
                "aws-fips"
            ].includes(e)) {
                return "us-east-1";
            }
            return e.replace(/fips-(dkr-|prod-)?|-fips/, "");
        }
        return e;
    };
    const Ke = (e)=>{
        let { region, useFipsEndpoint } = e;
        if (!region) {
            throw Error("Region is missing");
        }
        return Object.assign(e, {
            region: async ()=>{
                let r = typeof region === "function" ? await region() : region;
                let s = We(r);
                qe(s);
                return s;
            },
            useFipsEndpoint: async ()=>{
                let r = typeof region === "string" ? region : await region();
                if (B(r)) {
                    return true;
                }
                if (typeof useFipsEndpoint !== "function") {
                    return Promise.resolve(!!useFipsEndpoint);
                }
                return useFipsEndpoint();
            }
        });
    };
    const q = (e = [], { useFipsEndpoint, useDualstackEndpoint })=>e.find(({ tags })=>useFipsEndpoint === tags.includes("fips") && useDualstackEndpoint === tags.includes("dualstack"))?.hostname;
    const je = (resolvedRegion, { regionHostname, partitionHostname })=>{
        if (regionHostname) {
            return regionHostname;
        }
        if (partitionHostname) {
            return partitionHostname.replace("{region}", resolvedRegion);
        }
    };
    const Me = (e, { partitionHash })=>Object.keys(partitionHash || {}).find((t)=>partitionHash[t].regions.includes(e)) ?? "aws";
    const He = (hostname, { signingRegion, regionRegex, useFipsEndpoint })=>{
        if (signingRegion) {
            return signingRegion;
        } else if (useFipsEndpoint) {
            let s = regionRegex.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\.");
            let o = hostname.match(s);
            if (o) {
                return o[0].slice(1, -1);
            }
        }
    };
    const Ze = (e, { useFipsEndpoint = false, useDualstackEndpoint = false, signingService, regionHash, partitionHash })=>{
        let partition = Me(e, {
            partitionHash
        });
        let resolvedRegion = e in regionHash ? e : partitionHash[partition]?.endpoint ?? e;
        let l = {
            useFipsEndpoint,
            useDualstackEndpoint
        };
        let regionHostname = q(regionHash[resolvedRegion]?.variants, l);
        let partitionHostname = q(partitionHash[partition]?.variants, l);
        let hostname = je(resolvedRegion, {
            regionHostname,
            partitionHostname
        });
        if (hostname === undefined) {
            throw Error(`Endpoint resolution failed for: ${{
                resolvedRegion,
                useFipsEndpoint,
                useDualstackEndpoint
            }}`);
        }
        let signingRegion = He(hostname, {
            signingRegion: regionHash[resolvedRegion]?.signingRegion,
            regionRegex: partitionHash[partition].regionRegex,
            useFipsEndpoint
        });
        return {
            partition,
            signingService,
            hostname,
            ...signingRegion && {
                signingRegion
            },
            ...regionHash[resolvedRegion]?.signingService && {
                signingService: regionHash[resolvedRegion].signingService
            }
        };
    };
    Be.CONFIG_USE_DUALSTACK_ENDPOINT = K;
    Be.CONFIG_USE_FIPS_ENDPOINT = M;
    Be.DEFAULT_USE_DUALSTACK_ENDPOINT = be;
    Be.DEFAULT_USE_FIPS_ENDPOINT = Fe;
    Be.ENV_USE_DUALSTACK_ENDPOINT = W;
    Be.ENV_USE_FIPS_ENDPOINT = j;
    Be.NODE_REGION_CONFIG_FILE_OPTIONS = ke;
    Be.NODE_REGION_CONFIG_OPTIONS = ze;
    Be.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = Ce;
    Be.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = ye;
    Be.REGION_ENV_NAME = H;
    Be.REGION_INI_NAME = Z;
    Be.getRegionInfo = Ze;
    Be.resolveCustomEndpointsConfig = Le;
    Be.resolveEndpointsConfig = Ve;
    Be.resolveRegionConfig = Ke;
});
export { uY, Fk };
