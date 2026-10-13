import { ne } from "./ne.js";
let __wakaru_Vu_cache;
export function Vu() {
    if (__wakaru_Vu_cache) {
        return __wakaru_Vu_cache;
    }
    const e = {};
    __wakaru_Vu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = ne();
    let r = {
        keyword: "not",
        schemaType: [
            "object",
            "boolean"
        ],
        trackErrors: true,
        code (s) {
            let { gen, schema, it } = s;
            if (t.alwaysValidSchema(it, schema)) {
                s.fail();
                return;
            }
            let l = gen.name("valid");
            s.subschema({
                keyword: "not",
                compositeRule: true,
                createErrors: false,
                allErrors: false
            }, l);
            s.failResult(l, ()=>s.reset(), ()=>s.error());
        },
        error: {
            message: "must NOT be valid"
        }
    };
    e.default = r;
    return e;
}
