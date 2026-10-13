let __wakaru_hu_cache;
export function hu() {
    if (__wakaru_hu_cache) {
        return __wakaru_hu_cache;
    }
    const e = {};
    __wakaru_hu_cache = e;
    const t = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g;
    const r = /\\([\u000b\u0020-\u00ff])/g;
    const s = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
    e.parse = a;
    function a(l) {
        if (!l) {
            throw TypeError("argument string is required");
        }
        const c = typeof l === "object" ? n(l) : l;
        if (typeof c !== "string") {
            throw TypeError("argument string is required to be a string");
        }
        let d = c.indexOf(";");
        const m = d !== -1 ? c.slice(0, d).trim() : c.trim();
        if (!s.test(m)) {
            throw TypeError("invalid media type");
        }
        const _ = new i(m.toLowerCase());
        if (d !== -1) {
            let w;
            let P;
            let y;
            t.lastIndex = d;
            while(P = t.exec(c)){
                if (P.index !== d) {
                    throw TypeError("invalid parameter format");
                }
                d += P[0].length;
                w = P[1].toLowerCase();
                y = P[2];
                if (y.charCodeAt(0) === 34) {
                    y = y.slice(1, -1);
                    if (y.indexOf("\\") !== -1) {
                        y = y.replace(r, "$1");
                    }
                }
                _.parameters[w] = y;
            }
            if (d !== c.length) {
                throw TypeError("invalid parameter format");
            }
        }
        return _;
    }
    function n(l) {
        let c;
        if (typeof l.getHeader === "function") {
            c = l.getHeader("content-type");
        } else if (typeof l.headers === "object") {
            c = l.headers && l.headers["content-type"];
        }
        if (typeof c !== "string") {
            throw TypeError("content-type header is missing from object");
        }
        return c;
    }
    function i(l) {
        this.parameters = Object.create(null);
        this.type = l;
    }
    return e;
}
