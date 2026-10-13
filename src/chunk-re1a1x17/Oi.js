let __wakaru_Oi_cache;
export function Oi() {
    if (__wakaru_Oi_cache) {
        return __wakaru_Oi_cache;
    }
    const e = {};
    __wakaru_Oi_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.getRules = e.isJSONType = undefined;
    let t = new Set([
        "string",
        "number",
        "integer",
        "boolean",
        "null",
        "object",
        "array"
    ]);
    function r(a) {
        return typeof a === "string" && t.has(a);
    }
    e.isJSONType = r;
    function s() {
        let a = {
            number: {
                type: "number",
                rules: []
            },
            string: {
                type: "string",
                rules: []
            },
            array: {
                type: "array",
                rules: []
            },
            object: {
                type: "object",
                rules: []
            }
        };
        return {
            types: {
                ...a,
                integer: true,
                boolean: true,
                null: true
            },
            rules: [
                {
                    rules: []
                },
                a.number,
                a.string,
                a.array,
                a.object
            ],
            post: {
                rules: []
            },
            all: {},
            keywords: {}
        };
    }
    e.getRules = s;
    return e;
}
