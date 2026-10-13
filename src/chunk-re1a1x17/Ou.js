import { Sn } from "./Sn.js";
import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_Ou_cache;
export function Ou() {
    if (__wakaru_Ou_cache) {
        return __wakaru_Ou_cache;
    }
    const e = {};
    __wakaru_Ou_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let r = ne();
    let s = Sn();
    let a = {
        keyword: "const",
        $data: true,
        error: {
            message: "must be equal to constant",
            params: ({ schemaCode })=>t._`{allowedValue: ${schemaCode}}`
        },
        code (n) {
            let { gen, data, $data, schemaCode, schema } = n;
            if ($data || schema && typeof schema === "object") {
                n.fail$data(t._`!${r.useFunc(gen, s.default)}(${data}, ${schemaCode})`);
            } else {
                n.fail(t._`${schema} !== ${data}`);
            }
        }
    };
    e.default = a;
    return e;
}
