import { ji } from "./ji.js";
let __wakaru_vu_cache;
export function vu() {
    if (__wakaru_vu_cache) {
        return __wakaru_vu_cache.exports;
    }
    const exports = {};
    const t = {
        exports
    };
    __wakaru_vu_cache = t;
    let { isUUID } = ji();
    let s = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
    let a = [
        "http",
        "https",
        "ws",
        "wss",
        "urn",
        "urn:uuid"
    ];
    function isValidSchemeName(S) {
        return a.indexOf(S) !== -1;
    }
    function wsIsSecure(S) {
        if (S.secure === true) {
            return true;
        } else if (S.secure === false) {
            return false;
        } else if (S.scheme) {
            return S.scheme.length === 3 && (S.scheme[0] === "w" || S.scheme[0] === "W") && (S.scheme[1] === "s" || S.scheme[1] === "S") && (S.scheme[2] === "s" || S.scheme[2] === "S");
        } else {
            return false;
        }
    }
    function l(S) {
        if (!S.host) {
            S.error = S.error || "HTTP URIs must have a host.";
        }
        return S;
    }
    function c(S) {
        let k = String(S.scheme).toLowerCase() === "https";
        if (S.port === (k ? 443 : 80) || S.port === "") {
            S.port = undefined;
        }
        if (!S.path) {
            S.path = "/";
        }
        return S;
    }
    function d(S) {
        S.secure = wsIsSecure(S);
        S.resourceName = (S.path || "/") + (S.query ? `?${S.query}` : "");
        S.path = undefined;
        S.query = undefined;
        return S;
    }
    function m(S) {
        if (S.port === (wsIsSecure(S) ? 443 : 80) || S.port === "") {
            S.port = undefined;
        }
        if (typeof S.secure === "boolean") {
            S.scheme = S.secure ? "wss" : "ws";
            S.secure = undefined;
        }
        if (S.resourceName) {
            let [k, L] = S.resourceName.split("?");
            S.path = k && k !== "/" ? k : undefined;
            S.query = L;
            S.resourceName = undefined;
        }
        S.fragment = undefined;
        return S;
    }
    function _(S, k) {
        if (!S.path) {
            S.error = "URN can not be parsed";
            return S;
        }
        let L = S.path.match(s);
        if (L) {
            let K = k.scheme || S.scheme || "urn";
            S.nid = L[1].toLowerCase();
            S.nss = L[2];
            let N = getSchemeHandler(`${K}:${k.nid || S.nid}`);
            S.path = undefined;
            if (N) {
                S = N.parse(S, k);
            }
        } else {
            S.error = S.error || "URN can not be parsed.";
        }
        return S;
    }
    function w(S, k) {
        if (S.nid === undefined) {
            throw Error("URN without nid cannot be serialized");
        }
        let L = k.scheme || S.scheme || "urn";
        let K = S.nid.toLowerCase();
        let N = getSchemeHandler(`${L}:${k.nid || K}`);
        if (N) {
            S = N.serialize(S, k);
        }
        let F = S;
        let S_nss = S.nss;
        F.path = `${K || k.nid}:${S_nss}`;
        k.skipEscape = true;
        return F;
    }
    function P(S, k) {
        let L = S;
        L.uuid = L.nss;
        L.nss = undefined;
        if (!k.tolerant && (!L.uuid || !isUUID(L.uuid))) {
            L.error = L.error || "UUID is not valid.";
        }
        return L;
    }
    function y(S) {
        let k = S;
        k.nss = (S.uuid || "").toLowerCase();
        return k;
    }
    let http = {
        scheme: "http",
        domainHost: true,
        parse: l,
        serialize: c
    };
    let https = {
        scheme: "https",
        domainHost: http.domainHost,
        parse: l,
        serialize: c
    };
    let ws = {
        scheme: "ws",
        domainHost: true,
        parse: d,
        serialize: m
    };
    let wss = {
        scheme: "wss",
        domainHost: ws.domainHost,
        parse: ws.parse,
        serialize: ws.serialize
    };
    let SCHEMES = {
        http,
        https,
        ws,
        wss,
        urn: {
            scheme: "urn",
            parse: _,
            serialize: w,
            skipNormalize: true
        },
        "urn:uuid": {
            scheme: "urn:uuid",
            parse: P,
            serialize: y,
            skipNormalize: true
        }
    };
    Object.setPrototypeOf(SCHEMES, null);
    function getSchemeHandler(S) {
        return S && (SCHEMES[S] || SCHEMES[S.toLowerCase()]) || undefined;
    }
    t.exports = {
        wsIsSecure,
        SCHEMES,
        isValidSchemeName,
        getSchemeHandler
    };
    return t.exports;
}
