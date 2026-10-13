import { te } from "./te.js";
let __wakaru_qu_cache;
export function qu() {
    if (__wakaru_qu_cache) {
        return __wakaru_qu_cache;
    }
    const e = {};
    __wakaru_qu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let r = {
        keyword: [
            "maxItems",
            "minItems"
        ],
        type: "array",
        schemaType: "number",
        $data: true,
        error: {
            message ({ keyword, schemaCode }) {
                let n = keyword === "maxItems" ? "more" : "fewer";
                return t.str`must NOT have ${n} than ${schemaCode} items`;
            },
            params: ({ schemaCode })=>t._`{limit: ${schemaCode}}`
        },
        code (s) {
            let { keyword, data, schemaCode } = s;
            let l = keyword === "maxItems" ? t.operators.GT : t.operators.LT;
            s.fail$data(t._`${data}.length ${l} ${schemaCode}`);
        }
    };
    e.default = r;
    return e;
}
