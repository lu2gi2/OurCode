let __wakaru_md_cache;
export function md() {
    if (__wakaru_md_cache) {
        return __wakaru_md_cache.exports;
    }
    const exports = {};
    const t = {
        exports
    };
    __wakaru_md_cache = t;
    t.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/format-annotation",
        $vocabulary: {
            "https://json-schema.org/draft/2020-12/vocab/format-annotation": true
        },
        $dynamicAnchor: "meta",
        title: "Format vocabulary meta-schema for annotation results",
        type: [
            "object",
            "boolean"
        ],
        properties: {
            format: {
                type: "string"
            }
        }
    };
    return t.exports;
}
