let __wakaru__u_cache;
export function _u() {
    if (__wakaru__u_cache) {
        return __wakaru__u_cache.exports;
    }
    const exports = {};
    const t = {
        exports
    };
    __wakaru__u_cache = t;
    var r = t.exports = function(n, i, l) {
        if (typeof i === "function") {
            l = i;
            i = {};
        }
        l = i.cb || l;
        const c = typeof l === "function" ? l : l.pre || function() {};
        const d = l.post || function() {};
        s(i, c, d, n, "", n);
    };
    r.keywords = {
        additionalItems: true,
        items: true,
        contains: true,
        additionalProperties: true,
        propertyNames: true,
        not: true,
        if: true,
        then: true,
        else: true
    };
    r.arrayKeywords = {
        items: true,
        allOf: true,
        anyOf: true,
        oneOf: true
    };
    r.propsKeywords = {
        $defs: true,
        definitions: true,
        properties: true,
        patternProperties: true,
        dependencies: true
    };
    r.skipKeywords = {
        default: true,
        enum: true,
        const: true,
        required: true,
        maximum: true,
        minimum: true,
        exclusiveMaximum: true,
        exclusiveMinimum: true,
        multipleOf: true,
        maxLength: true,
        minLength: true,
        pattern: true,
        format: true,
        maxItems: true,
        minItems: true,
        uniqueItems: true,
        maxProperties: true,
        minProperties: true
    };
    function s(n, i, l, c, d, m, _, w, P, y) {
        if (c && typeof c === "object" && !Array.isArray(c)) {
            i(c, d, m, _, w, P, y);
            for(const v in c){
                const p = c[v];
                if (Array.isArray(p)) {
                    if (v in r.arrayKeywords) {
                        for(let h = 0; h < p.length; h++){
                            s(n, i, l, p[h], `${d}/${v}/${h}`, m, d, v, c, h);
                        }
                    }
                } else if (v in r.propsKeywords) {
                    if (p && typeof p === "object") {
                        for(const g in p){
                            s(n, i, l, p[g], `${d}/${v}/${a(g)}`, m, d, v, c, g);
                        }
                    }
                } else if (v in r.keywords || n.allKeys && !(v in r.skipKeywords)) {
                    s(n, i, l, p, `${d}/${v}`, m, d, v, c);
                }
            }
            l(c, d, m, _, w, P, y);
        }
    }
    function a(n) {
        return n.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    return t.exports;
}
