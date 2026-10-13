let __wakaru_ji_cache;
export function ji() {
    if (__wakaru_ji_cache) {
        return __wakaru_ji_cache.exports;
    }
    const exports = {};
    const t = {
        exports
    };
    __wakaru_ji_cache = t;
    let isUUID = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu);
    let isIPv4 = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
    function stringArrayToHexStripped(y) {
        let v = "";
        let p = 0;
        let h = 0;
        for(h = 0; h < y.length; h++){
            p = y[h].charCodeAt(0);
            if (p === 48) {
                continue;
            }
            if (!(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102)) {
                return "";
            }
            v += y[h];
            break;
        }
        for(h += 1; h < y.length; h++){
            p = y[h].charCodeAt(0);
            if (!(p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102)) {
                return "";
            }
            v += y[h];
        }
        return v;
    }
    let nonSimpleDomain = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
    function i(y) {
        y.length = 0;
        return true;
    }
    function l(y, v, p) {
        if (y.length) {
            let h = stringArrayToHexStripped(y);
            if (h !== "") {
                v.push(h);
            } else {
                p.error = true;
                return false;
            }
            y.length = 0;
        }
        return true;
    }
    function c(host) {
        let v = 0;
        let p = {
            error: false,
            address: "",
            zone: ""
        };
        let h = [];
        let g = [];
        let f = false;
        let R = false;
        let C = l;
        for(let b = 0; b < host.length; b++){
            let S = host[b];
            if (S === "[" || S === "]") {
                continue;
            }
            if (S === ":") {
                if (f === true) {
                    R = true;
                }
                if (!C(g, h, p)) {
                    break;
                }
                if (++v > 7) {
                    p.error = true;
                    break;
                }
                if (b > 0 && host[b - 1] === ":") {
                    f = true;
                }
                h.push(":");
                continue;
            } else if (S === "%") {
                if (!C(g, h, p)) {
                    break;
                }
                C = i;
            } else {
                g.push(S);
                continue;
            }
        }
        if (g.length) {
            if (C === i) {
                p.zone = g.join("");
            } else if (R) {
                h.push(g.join(""));
            } else {
                h.push(stringArrayToHexStripped(g));
            }
        }
        p.address = h.join("");
        return p;
    }
    function normalizeIPv6(host) {
        if (m(host, ":") < 2) {
            return {
                host,
                isIPV6: false
            };
        }
        let v = c(host);
        if (!v.error) {
            let { address, address: address_1 } = v;
            if (v.zone) {
                address += `%${v.zone}`;
                address_1 += `%25${v.zone}`;
            }
            return {
                host: address,
                isIPV6: true,
                escapedHost: address_1
            };
        } else {
            return {
                host,
                isIPV6: false
            };
        }
    }
    function m(host, v) {
        let p = 0;
        for(let h = 0; h < host.length; h++){
            if (host[h] === v) {
                p++;
            }
        }
        return p;
    }
    function removeDotSegments(y) {
        let v = y;
        let p = [];
        let h = -1;
        let g = 0;
        while(g = v.length){
            if (g === 1) {
                if (v === ".") {
                    break;
                } else if (v === "/") {
                    p.push("/");
                    break;
                } else {
                    p.push(v);
                    break;
                }
            } else if (g === 2) {
                if (v[0] === ".") {
                    if (v[1] === ".") {
                        break;
                    } else if (v[1] === "/") {
                        v = v.slice(2);
                        continue;
                    }
                } else if (v[0] === "/") {
                    if (v[1] === "." || v[1] === "/") {
                        p.push("/");
                        break;
                    }
                }
            } else if (g === 3) {
                if (v === "/..") {
                    if (p.length !== 0) {
                        p.pop();
                    }
                    p.push("/");
                    break;
                }
            }
            if (v[0] === ".") {
                if (v[1] === ".") {
                    if (v[2] === "/") {
                        v = v.slice(3);
                        continue;
                    }
                } else if (v[1] === "/") {
                    v = v.slice(2);
                    continue;
                }
            } else if (v[0] === "/") {
                if (v[1] === ".") {
                    if (v[2] === "/") {
                        v = v.slice(2);
                        continue;
                    } else if (v[2] === ".") {
                        if (v[3] === "/") {
                            v = v.slice(3);
                            if (p.length !== 0) {
                                p.pop();
                            }
                            continue;
                        }
                    }
                }
            }
            if ((h = v.indexOf("/", 1)) === -1) {
                p.push(v);
                break;
            } else {
                p.push(v.slice(0, h));
                v = v.slice(h);
            }
        }
        return p.join("");
    }
    function normalizeComponentEncoding(y, v) {
        let p = v !== true ? escape : unescape;
        if (y.scheme !== undefined) {
            y.scheme = p(y.scheme);
        }
        if (y.userinfo !== undefined) {
            y.userinfo = p(y.userinfo);
        }
        if (y.host !== undefined) {
            y.host = p(y.host);
        }
        if (y.path !== undefined) {
            y.path = p(y.path);
        }
        if (y.query !== undefined) {
            y.query = p(y.query);
        }
        if (y.fragment !== undefined) {
            y.fragment = p(y.fragment);
        }
        return y;
    }
    function recomposeAuthority(y) {
        let v = [];
        if (y.userinfo !== undefined) {
            v.push(y.userinfo);
            v.push("@");
        }
        if (y.host !== undefined) {
            let p = unescape(y.host);
            if (!isIPv4(p)) {
                let h = normalizeIPv6(p);
                if (h.isIPV6 === true) {
                    p = `[${h.escapedHost}]`;
                } else {
                    p = y.host;
                }
            }
            v.push(p);
        }
        if (typeof y.port === "number" || typeof y.port === "string") {
            v.push(":");
            v.push(String(y.port));
        }
        if (v.length) {
            return v.join("");
        }
    }
    t.exports = {
        nonSimpleDomain,
        recomposeAuthority,
        normalizeComponentEncoding,
        removeDotSegments,
        isIPv4,
        isUUID,
        normalizeIPv6,
        stringArrayToHexStripped
    };
    return t.exports;
}
