import { Le } from "./Le.js";
import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_Du_cache;
export function Du() {
    if (__wakaru_Du_cache) {
        return __wakaru_Du_cache;
    }
    const e = {};
    __wakaru_Du_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = Le();
    let r = te();
    let s = ne();
    let a = ne();
    let n = {
        keyword: "patternProperties",
        type: "object",
        schemaType: "object",
        code (i) {
            let { gen, schema, data, parentSchema, it } = i;
            let { opts } = it;
            let P = t.allSchemaProperties(schema);
            let y = P.filter((C)=>s.alwaysValidSchema(it, schema[C]));
            if (P.length === 0 || y.length === P.length && (!it.opts.unevaluated || it.props === true)) {
                return;
            }
            let v = opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties;
            let p = gen.name("valid");
            if (it.props !== true && !(it.props instanceof r.Name)) {
                it.props = a.evaluatedPropsToName(gen, it.props);
            }
            let { props } = it;
            g();
            function g() {
                for (let C of P){
                    if (v) {
                        f(C);
                    }
                    if (it.allErrors) {
                        R(C);
                    } else {
                        gen.var(p, true);
                        R(C);
                        gen.if(p);
                    }
                }
            }
            function f(C) {
                for(let b in v){
                    if (new RegExp(C).test(b)) {
                        s.checkStrictMode(it, `property ${b} matches pattern ${C} (use allowMatchingProperties)`);
                    }
                }
            }
            function R(schemaProp) {
                gen.forIn("key", data, (dataProp)=>{
                    gen.if(r._`${t.usePattern(i, schemaProp)}.test(${dataProp})`, ()=>{
                        let S = y.includes(schemaProp);
                        if (!S) {
                            i.subschema({
                                keyword: "patternProperties",
                                schemaProp,
                                dataProp,
                                dataPropType: a.Type.Str
                            }, p);
                        }
                        if (it.opts.unevaluated && props !== true) {
                            gen.assign(r._`${props}[${dataProp}]`, true);
                        } else if (!S && !it.allErrors) {
                            gen.if(r.not(p), ()=>gen.break());
                        }
                    });
                });
            }
        }
    };
    e.default = n;
    return e;
}
