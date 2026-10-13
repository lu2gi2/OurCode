import { ne } from "./ne.js";
let __wakaru_Hu_cache;
export function Hu() {
    if (__wakaru_Hu_cache) {
        return __wakaru_Hu_cache;
    }
    const e = {};
    __wakaru_Hu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = ne();
    let r = {
        keyword: "allOf",
        schemaType: "array",
        code (s) {
            let { gen, schema, it } = s;
            if (!Array.isArray(schema)) {
                throw Error("ajv implementation error");
            }
            let l = gen.name("valid");
            schema.forEach((c, schemaProp)=>{
                if (t.alwaysValidSchema(it, c)) {
                    return;
                }
                let m = s.subschema({
                    keyword: "allOf",
                    schemaProp
                }, l);
                s.ok(l);
                s.mergeEvaluated(m);
            });
        }
    };
    e.default = r;
    return e;
}
