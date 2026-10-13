import { te } from "./te.js";
let __wakaru_wu_cache;
export function wu() {
    if (__wakaru_wu_cache) {
        return __wakaru_wu_cache;
    }
    const e = {};
    __wakaru_wu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let t_operators = t.operators;
    let s = {
        maximum: {
            okStr: "<=",
            ok: t_operators.LTE,
            fail: t_operators.GT
        },
        minimum: {
            okStr: ">=",
            ok: t_operators.GTE,
            fail: t_operators.LT
        },
        exclusiveMaximum: {
            okStr: "<",
            ok: t_operators.LT,
            fail: t_operators.GTE
        },
        exclusiveMinimum: {
            okStr: ">",
            ok: t_operators.GT,
            fail: t_operators.LTE
        }
    };
    let a = {
        keyword: Object.keys(s),
        type: "number",
        schemaType: "number",
        $data: true,
        error: {
            message: ({ keyword, schemaCode })=>t.str`must be ${s[keyword].okStr} ${schemaCode}`,
            params: ({ keyword, schemaCode })=>t._`{comparison: ${s[keyword].okStr}, limit: ${schemaCode}}`
        },
        code (n) {
            let { keyword, data, schemaCode } = n;
            n.fail$data(t._`${data} ${s[keyword].fail} ${schemaCode} || isNaN(${data})`);
        }
    };
    e.default = a;
    return e;
}
