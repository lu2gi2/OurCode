let __wakaru_yu_cache;
export function yu() {
    if (__wakaru_yu_cache) {
        return __wakaru_yu_cache.exports;
    }
    const exports = {};
    const t = {
        exports
    };
    __wakaru_yu_cache = t;
    t.exports = {
        $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
        description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
        type: "object",
        required: [
            "$data"
        ],
        properties: {
            $data: {
                type: "string",
                anyOf: [
                    {
                        format: "relative-json-pointer"
                    },
                    {
                        format: "json-pointer"
                    }
                ]
            }
        },
        additionalProperties: false
    };
    return t.exports;
}
