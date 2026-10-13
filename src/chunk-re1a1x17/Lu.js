import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_Lu_cache;
export function Lu() {
    if (__wakaru_Lu_cache) {
        return __wakaru_Lu_cache;
    }
    const e = {};
    __wakaru_Lu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let r = ne();
    let s = {
        keyword: "propertyNames",
        type: "object",
        schemaType: [
            "object",
            "boolean"
        ],
        error: {
            message: "property name must be valid",
            params: ({ params })=>t._`{propertyName: ${params.propertyName}}`
        },
        code (a) {
            let { gen, schema, data, it } = a;
            if (r.alwaysValidSchema(it, schema)) {
                return;
            }
            let d = gen.name("valid");
            gen.forIn("key", data, (m)=>{
                a.setParams({
                    propertyName: m
                });
                a.subschema({
                    keyword: "propertyNames",
                    data: m,
                    dataTypes: [
                        "string"
                    ],
                    propertyName: m,
                    compositeRule: true
                }, d);
                gen.if(t.not(d), ()=>{
                    a.error(true);
                    if (!it.allErrors) {
                        gen.break();
                    }
                });
            });
            a.ok(d);
        }
    };
    e.default = s;
    return e;
}
