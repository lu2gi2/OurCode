let __wakaru_ud_cache;
export function ud() {
    if (__wakaru_ud_cache) {
        return __wakaru_ud_cache.exports;
    }
    const exports = {};
    const t = {
        exports
    };
    __wakaru_ud_cache = t;
    t.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/unevaluated",
        $vocabulary: {
            "https://json-schema.org/draft/2020-12/vocab/unevaluated": true
        },
        $dynamicAnchor: "meta",
        title: "Unevaluated applicator vocabulary meta-schema",
        type: [
            "object",
            "boolean"
        ],
        properties: {
            unevaluatedItems: {
                $dynamicRef: "#meta"
            },
            unevaluatedProperties: {
                $dynamicRef: "#meta"
            }
        }
    };
    return t.exports;
}
