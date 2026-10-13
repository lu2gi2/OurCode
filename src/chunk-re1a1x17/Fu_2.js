import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_Fu_cache;
export function Fu() {
    if (__wakaru_Fu_cache) {
        return __wakaru_Fu_cache;
    }
    const e = {};
    __wakaru_Fu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let r = ne();
    let s = {
        keyword: "oneOf",
        schemaType: "array",
        trackErrors: true,
        error: {
            message: "must match exactly one schema in oneOf",
            params: ({ params })=>t._`{passingSchemas: ${params.passing}}`
        },
        code (a) {
            let { gen, schema, parentSchema, it } = a;
            if (!Array.isArray(schema)) {
                throw Error("ajv implementation error");
            }
            if (it.opts.discriminator && parentSchema.discriminator) {
                return;
            }
            let d = schema;
            let m = gen.let("valid", false);
            let passing = gen.let("passing", null);
            let w = gen.name("_valid");
            a.setParams({
                passing
            });
            gen.block(P);
            a.result(m, ()=>a.reset(), ()=>a.error(true));
            function P() {
                d.forEach((y, schemaProp)=>{
                    let p;
                    if (r.alwaysValidSchema(it, y)) {
                        gen.var(w, true);
                    } else {
                        p = a.subschema({
                            keyword: "oneOf",
                            schemaProp,
                            compositeRule: true
                        }, w);
                    }
                    if (schemaProp > 0) {
                        gen.if(t._`${w} && ${m}`).assign(m, false).assign(passing, t._`[${passing}, ${schemaProp}]`).else();
                    }
                    gen.if(w, ()=>{
                        gen.assign(m, true);
                        gen.assign(passing, schemaProp);
                        if (p) {
                            a.mergeEvaluated(p, t.Name);
                        }
                    });
                });
            }
        }
    };
    e.default = s;
    return e;
}
