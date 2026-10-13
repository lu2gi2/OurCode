import { ji } from "./ji.js";
import { vu } from "./vu.js";
let __wakaru_bu_cache;
export function bu() {
    if (__wakaru_bu_cache) {
        return __wakaru_bu_cache.exports;
    }
    const exports = {};
    const t = {
        exports
    };
    __wakaru_bu_cache = t;
    let { normalizeIPv6, removeDotSegments, recomposeAuthority, normalizeComponentEncoding, isIPv4, nonSimpleDomain } = ji();
    let { SCHEMES, getSchemeHandler } = vu();
    function normalize(g, f) {
        if (typeof g === "string") {
            g = serialize(parse(g, f), f);
        } else if (typeof g === "object") {
            g = parse(serialize(g, f), f);
        }
        return g;
    }
    function resolve(g, f, R) {
        let C = R ? {
            scheme: "null",
            ...R
        } : {
            scheme: "null"
        };
        let b = resolveComponent(parse(g, C), parse(f, C), C, true);
        C.skipEscape = true;
        return serialize(b, C);
    }
    function resolveComponent(g, f, R, C) {
        let b = {};
        if (!C) {
            g = parse(serialize(g, R), R);
            f = parse(serialize(f, R), R);
        }
        R = R || {};
        if (!R.tolerant && f.scheme) {
            b.scheme = f.scheme;
            b.userinfo = f.userinfo;
            b.host = f.host;
            b.port = f.port;
            b.path = removeDotSegments(f.path || "");
            b.query = f.query;
        } else {
            if (f.userinfo !== undefined || f.host !== undefined || f.port !== undefined) {
                b.userinfo = f.userinfo;
                b.host = f.host;
                b.port = f.port;
                b.path = removeDotSegments(f.path || "");
                b.query = f.query;
            } else {
                if (!f.path) {
                    b.path = g.path;
                    if (f.query !== undefined) {
                        b.query = f.query;
                    } else {
                        b.query = g.query;
                    }
                } else {
                    if (f.path[0] === "/") {
                        b.path = removeDotSegments(f.path);
                    } else {
                        if ((g.userinfo !== undefined || g.host !== undefined || g.port !== undefined) && !g.path) {
                            b.path = `/${f.path}`;
                        } else if (!g.path) {
                            b.path = f.path;
                        } else {
                            b.path = g.path.slice(0, g.path.lastIndexOf("/") + 1) + f.path;
                        }
                        b.path = removeDotSegments(b.path);
                    }
                    b.query = f.query;
                }
                b.userinfo = g.userinfo;
                b.host = g.host;
                b.port = g.port;
            }
            b.scheme = g.scheme;
        }
        b.fragment = f.fragment;
        return b;
    }
    function equal(g, f, R) {
        if (typeof g === "string") {
            g = unescape(g);
            g = serialize(normalizeComponentEncoding(parse(g, R), true), {
                ...R,
                skipEscape: true
            });
        } else if (typeof g === "object") {
            g = serialize(normalizeComponentEncoding(g, true), {
                ...R,
                skipEscape: true
            });
        }
        if (typeof f === "string") {
            f = unescape(f);
            f = serialize(normalizeComponentEncoding(parse(f, R), true), {
                ...R,
                skipEscape: true
            });
        } else if (typeof f === "object") {
            f = serialize(normalizeComponentEncoding(f, true), {
                ...R,
                skipEscape: true
            });
        }
        return g.toLowerCase() === f.toLowerCase();
    }
    function serialize(g, f) {
        let R = {
            host: g.host,
            scheme: g.scheme,
            userinfo: g.userinfo,
            port: g.port,
            path: g.path,
            query: g.query,
            nid: g.nid,
            nss: g.nss,
            uuid: g.uuid,
            fragment: g.fragment,
            reference: g.reference,
            resourceName: g.resourceName,
            secure: g.secure,
            error: ""
        };
        let C = {
            ...f
        };
        let b = [];
        let S = getSchemeHandler(C.scheme || R.scheme);
        if (S && S.serialize) {
            S.serialize(R, C);
        }
        if (R.path !== undefined) {
            if (!C.skipEscape) {
                R.path = escape(R.path);
                if (R.scheme !== undefined) {
                    R.path = R.path.split("%3A").join(":");
                }
            } else {
                R.path = unescape(R.path);
            }
        }
        if (C.reference !== "suffix" && R.scheme) {
            b.push(R.scheme, ":");
        }
        let k = recomposeAuthority(R);
        if (k !== undefined) {
            if (C.reference !== "suffix") {
                b.push("//");
            }
            b.push(k);
            if (R.path && R.path[0] !== "/") {
                b.push("/");
            }
        }
        if (R.path !== undefined) {
            let L = R.path;
            if (!C.absolutePath && (!S || !S.absolutePath)) {
                L = removeDotSegments(L);
            }
            if (k === undefined && L[0] === "/" && L[1] === "/") {
                L = `/%2F${L.slice(2)}`;
            }
            b.push(L);
        }
        if (R.query !== undefined) {
            b.push("?", R.query);
        }
        if (R.fragment !== undefined) {
            b.push("#", R.fragment);
        }
        return b.join("");
    }
    let v = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
    function parse(g, f) {
        let R = {
            ...f
        };
        let C = {
            scheme: undefined,
            userinfo: undefined,
            host: "",
            port: undefined,
            path: "",
            query: undefined,
            fragment: undefined
        };
        let b = false;
        if (R.reference === "suffix") {
            if (R.scheme) {
                g = `${R.scheme}:${g}`;
            } else {
                g = `//${g}`;
            }
        }
        let S = g.match(v);
        if (S) {
            C.scheme = S[1];
            C.userinfo = S[3];
            C.host = S[4];
            C.port = parseInt(S[5], 10);
            C.path = S[6] || "";
            C.query = S[7];
            C.fragment = S[8];
            if (isNaN(C.port)) {
                C.port = S[5];
            }
            if (C.host) {
                if (isIPv4(C.host) === false) {
                    let L = normalizeIPv6(C.host);
                    C.host = L.host.toLowerCase();
                    b = L.isIPV6;
                } else {
                    b = true;
                }
            }
            if (C.scheme === undefined && C.userinfo === undefined && C.host === undefined && C.port === undefined && C.query === undefined && !C.path) {
                C.reference = "same-document";
            } else if (C.scheme === undefined) {
                C.reference = "relative";
            } else if (C.fragment === undefined) {
                C.reference = "absolute";
            } else {
                C.reference = "uri";
            }
            if (R.reference && R.reference !== "suffix" && R.reference !== C.reference) {
                C.error = C.error || `URI is not a ${R.reference} reference.`;
            }
            let k = getSchemeHandler(R.scheme || C.scheme);
            if (!R.unicodeSupport && (!k || !k.unicodeSupport)) {
                if (C.host && (R.domainHost || k && k.domainHost) && b === false && nonSimpleDomain(C.host)) {
                    try {
                        C.host = URL.domainToASCII(C.host.toLowerCase());
                    } catch (error) {
                        C.error = C.error || `Host's domain name can not be converted to ASCII: ${error}`;
                    }
                }
            }
            if (!k || k && !k.skipNormalize) {
                if (g.indexOf("%") !== -1) {
                    if (C.scheme !== undefined) {
                        C.scheme = unescape(C.scheme);
                    }
                    if (C.host !== undefined) {
                        C.host = unescape(C.host);
                    }
                }
                if (C.path) {
                    C.path = escape(unescape(C.path));
                }
                if (C.fragment) {
                    C.fragment = encodeURI(decodeURIComponent(C.fragment));
                }
            }
            if (k && k.parse) {
                k.parse(C, R);
            }
        } else {
            C.error = C.error || "URI can not be parsed.";
        }
        return C;
    }
    let h = {
        SCHEMES,
        normalize,
        resolve,
        resolveComponent,
        equal,
        serialize,
        parse
    };
    t.exports = h;
    t.exports.default = h;
    t.exports.fastUri = h;
    return t.exports;
}
