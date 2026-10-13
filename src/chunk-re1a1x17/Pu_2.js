import { Eu } from "./Eu.js";
import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_Pu_cache;
export function Pu() {
    if (__wakaru_Pu_cache) {
        return __wakaru_Pu_cache;
    }
    const e = {};
    __wakaru_Pu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let r = ne();
    let s = Eu();
    let a = {
        keyword: [
            "maxLength",
            "minLength"
        ],
        type: "string",
        schemaType: "number",
        $data: true,
        error: {
            message ({ keyword, schemaCode }) {
                let l = keyword === "maxLength" ? "more" : "fewer";
                return t.str`must NOT have ${l} than ${schemaCode} characters`;
            },
            params: ({ schemaCode })=>t._`{limit: ${schemaCode}}`
        },
        code (n) {
            let { keyword, data, schemaCode, it } = n;
            let m = keyword === "maxLength" ? t.operators.GT : t.operators.LT;
            let _ = it.opts.unicode === false ? t._`${data}.length` : t._`${r.useFunc(n.gen, s.default)}(${data})`;
            n.fail$data(t._`${_} ${m} ${schemaCode}`);
        }
    };
    e.default = a;
    return e;
}
