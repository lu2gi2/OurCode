import { Le } from "./Le.js";
import { as } from "./as.js";
import { ne } from "./ne.js";
import { xi } from "./xi.js";
let __wakaru_Uu_cache;
export function Uu() {
    if (__wakaru_Uu_cache) {
        return __wakaru_Uu_cache;
    }
    const e = {};
    __wakaru_Uu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = as();
    let r = Le();
    let s = ne();
    let a = xi();
    let n = {
        keyword: "properties",
        type: "object",
        schemaType: "object",
        code (i) {
            let { gen, schema, parentSchema, data, it } = i;
            if (it.opts.removeAdditional === "all" && parentSchema.additionalProperties === undefined) {
                a.default.code(new t.KeywordCxt(it, a.default, "additionalProperties"));
            }
            let w = r.allSchemaProperties(schema);
            for (let h of w){
                it.definedProperties.add(h);
            }
            if (it.opts.unevaluated && w.length && it.props !== true) {
                it.props = s.mergeEvaluated.props(gen, s.toHash(w), it.props);
            }
            let P = w.filter((h)=>!s.alwaysValidSchema(it, schema[h]));
            if (P.length === 0) {
                return;
            }
            let y = gen.name("valid");
            for (let h of P){
                if (v(h)) {
                    p(h);
                } else {
                    gen.if(r.propertyInData(gen, data, h, it.opts.ownProperties));
                    p(h);
                    if (!it.allErrors) {
                        gen.else().var(y, true);
                    }
                    gen.endIf();
                }
                i.it.definedProperties.add(h);
                i.ok(y);
            }
            function v(h) {
                return it.opts.useDefaults && !it.compositeRule && schema[h].default !== undefined;
            }
            function p(h) {
                i.subschema({
                    keyword: "properties",
                    schemaProp: h,
                    dataProp: h
                }, y);
            }
        }
    };
    e.default = n;
    return e;
}
