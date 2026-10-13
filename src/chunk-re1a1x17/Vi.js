import { Le } from "./Le.js";
import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_Vi_cache;
export function Vi() {
    if (__wakaru_Vi_cache) {
        return __wakaru_Vi_cache;
    }
    const e = {};
    __wakaru_Vi_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.validateTuple = undefined;
    let t = te();
    let r = ne();
    let s = Le();
    let a = {
        keyword: "items",
        type: "array",
        schemaType: [
            "object",
            "array",
            "boolean"
        ],
        before: "uniqueItems",
        code (i) {
            let { schema, it } = i;
            if (Array.isArray(schema)) {
                return n(i, "additionalItems", schema);
            }
            it.items = true;
            if (r.alwaysValidSchema(it, schema)) {
                return;
            }
            i.ok(s.validateArray(i));
        }
    };
    function n(i, l, c = i.schema) {
        let { gen, parentSchema, data, keyword, it } = i;
        p(parentSchema);
        if (it.opts.unevaluated && c.length && it.items !== true) {
            it.items = r.mergeEvaluated.items(gen, c.length, it.items);
        }
        let y = gen.name("valid");
        let v = gen.const("len", t._`${data}.length`);
        c.forEach((h, g)=>{
            if (r.alwaysValidSchema(it, h)) {
                return;
            }
            gen.if(t._`${v} > ${g}`, ()=>i.subschema({
                    keyword,
                    schemaProp: g,
                    dataProp: g
                }, y));
            i.ok(y);
        });
        function p(parentSchema) {
            let { opts, errSchemaPath } = it;
            let c_length = c.length;
            let C = c_length === parentSchema.minItems && (c_length === parentSchema.maxItems || parentSchema[l] === false);
            if (opts.strictTuples && !C) {
                let b = `"${keyword}" is ${c_length}-tuple, but minItems or maxItems/${l} are not specified or different at path "${errSchemaPath}"`;
                r.checkStrictMode(it, b, opts.strictTuples);
            }
        }
    }
    e.validateTuple = n;
    e.default = a;
    return e;
}
