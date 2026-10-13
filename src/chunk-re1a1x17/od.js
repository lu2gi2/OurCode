import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_od_cache;
export function od() {
    if (__wakaru_od_cache) {
        return __wakaru_od_cache;
    }
    const e = {};
    __wakaru_od_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let r = ne();
    let s = {
        keyword: "unevaluatedItems",
        type: "array",
        schemaType: [
            "boolean",
            "object"
        ],
        error: {
            message: ({ params: { len } })=>t.str`must NOT have more than ${len} items`,
            params: ({ params: { len } })=>t._`{limit: ${len}}`
        },
        code (a) {
            let { gen, schema, data, it } = a;
            let len = it.items || 0;
            if (len === true) {
                return;
            }
            let m = gen.const("len", t._`${data}.length`);
            if (schema === false) {
                a.setParams({
                    len
                });
                a.fail(t._`${m} > ${len}`);
            } else if (typeof schema === "object" && !r.alwaysValidSchema(it, schema)) {
                let w = gen.var("valid", t._`${m} <= ${len}`);
                gen.if(t.not(w), ()=>_(w, len));
                a.ok(w);
            }
            it.items = true;
            function _(w, len) {
                gen.forRange("i", len, m, (dataProp)=>{
                    a.subschema({
                        keyword: "unevaluatedItems",
                        dataProp,
                        dataPropType: r.Type.Num
                    }, w);
                    if (!it.allErrors) {
                        gen.if(t.not(w), ()=>gen.break());
                    }
                });
            }
        }
    };
    e.default = s;
    return e;
}
