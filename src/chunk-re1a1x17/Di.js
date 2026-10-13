import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_Di_cache;
export function Di() {
    if (__wakaru_Di_cache) {
        return __wakaru_Di_cache;
    }
    const e = {};
    __wakaru_Di_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.validateAdditionalItems = undefined;
    let t = te();
    let r = ne();
    let s = {
        keyword: "additionalItems",
        type: "array",
        schemaType: [
            "boolean",
            "object"
        ],
        before: "uniqueItems",
        error: {
            message: ({ params: { len } })=>t.str`must NOT have more than ${len} items`,
            params: ({ params: { len } })=>t._`{limit: ${len}}`
        },
        code (n) {
            let { parentSchema, it } = n;
            let { items } = parentSchema;
            if (!Array.isArray(items)) {
                r.checkStrictMode(it, '"additionalItems" is ignored when "items" is not an array of schemas');
                return;
            }
            a(n, items);
        }
    };
    function a(n, i) {
        let { gen, schema, data, keyword, it } = n;
        it.items = true;
        let w = gen.const("len", t._`${data}.length`);
        if (schema === false) {
            n.setParams({
                len: i.length
            });
            n.pass(t._`${w} <= ${i.length}`);
        } else if (typeof schema === "object" && !r.alwaysValidSchema(it, schema)) {
            let y = gen.var("valid", t._`${w} <= ${i.length}`);
            gen.if(t.not(y), ()=>P(y));
            n.ok(y);
        }
        function P(y) {
            gen.forRange("i", i.length, w, (dataProp)=>{
                n.subschema({
                    keyword,
                    dataProp,
                    dataPropType: r.Type.Num
                }, y);
                if (!it.allErrors) {
                    gen.if(t.not(y), ()=>gen.break());
                }
            });
        }
    }
    e.validateAdditionalItems = a;
    e.default = s;
    return e;
}
