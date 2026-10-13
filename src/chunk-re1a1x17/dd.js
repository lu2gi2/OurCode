let __wakaru_dd_cache;
export function dd() {
    if (__wakaru_dd_cache) {
        return __wakaru_dd_cache.exports;
    }
    const exports = {};
    const t = {
        exports
    };
    __wakaru_dd_cache = t;
    t.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/content",
        $vocabulary: {
            "https://json-schema.org/draft/2020-12/vocab/content": true
        },
        $dynamicAnchor: "meta",
        title: "Content vocabulary meta-schema",
        type: [
            "object",
            "boolean"
        ],
        properties: {
            contentEncoding: {
                type: "string"
            },
            contentMediaType: {
                type: "string"
            },
            contentSchema: {
                $dynamicRef: "#meta"
            }
        }
    };
    return t.exports;
}
