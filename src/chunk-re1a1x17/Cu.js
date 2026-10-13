import { te } from "./te.js";
let __wakaru_Cu_cache;
export function Cu() {
    if (__wakaru_Cu_cache) {
        return __wakaru_Cu_cache;
    }
    const e = {};
    __wakaru_Cu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let r = {
        keyword: [
            "maxProperties",
            "minProperties"
        ],
        type: "object",
        schemaType: "number",
        $data: true,
        error: {
            message ({ keyword, schemaCode }) {
                let n = keyword === "maxProperties" ? "more" : "fewer";
                return t.str`must NOT have ${n} than ${schemaCode} properties`;
            },
            params: ({ schemaCode })=>t._`{limit: ${schemaCode}}`
        },
        code (s) {
            let { keyword, data, schemaCode } = s;
            let l = keyword === "maxProperties" ? t.operators.GT : t.operators.LT;
            s.fail$data(t._`Object.keys(${data}).length ${l} ${schemaCode}`);
        }
    };
    e.default = r;
    return e;
}
