import { Ae } from "./Ae.js";
import { Le } from "./Le.js";
import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_xi_cache;
export function xi() {
    if (__wakaru_xi_cache) {
        return __wakaru_xi_cache;
    }
    const e = {};
    __wakaru_xi_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = Le();
    let r = te();
    let s = Ae();
    let a = ne();
    let n = {
        keyword: "additionalProperties",
        type: [
            "object"
        ],
        schemaType: [
            "boolean",
            "object"
        ],
        allowUndefined: true,
        trackErrors: true,
        error: {
            message: "must NOT have additional properties",
            params: ({ params })=>r._`{additionalProperty: ${params.additionalProperty}}`
        },
        code (i) {
            let { gen, schema, parentSchema, data, errsCount, it } = i;
            if (!errsCount) {
                throw Error("ajv implementation error");
            }
            let { allErrors, opts } = it;
            it.props = true;
            if (opts.removeAdditional !== "all" && a.alwaysValidSchema(it, schema)) {
                return;
            }
            let v = t.allSchemaProperties(parentSchema.properties);
            let p = t.allSchemaProperties(parentSchema.patternProperties);
            h();
            i.ok(r._`${errsCount} === ${s.default.errors}`);
            function h() {
                gen.forIn("key", data, (b)=>{
                    if (!v.length && !p.length) {
                        R(b);
                    } else {
                        gen.if(g(b), ()=>R(b));
                    }
                });
            }
            function g(b) {
                let S;
                if (v.length > 8) {
                    let k = a.schemaRefOrVal(it, parentSchema.properties, "properties");
                    S = t.isOwnProperty(gen, k, b);
                } else if (v.length) {
                    S = r.or(...v.map((k)=>r._`${b} === ${k}`));
                } else {
                    S = r.nil;
                }
                if (p.length) {
                    S = r.or(S, ...p.map((k)=>r._`${t.usePattern(i, k)}.test(${b})`));
                }
                return r.not(S);
            }
            function f(additionalProperty) {
                gen.code(r._`delete ${data}[${additionalProperty}]`);
            }
            function R(additionalProperty) {
                if (opts.removeAdditional === "all" || opts.removeAdditional && schema === false) {
                    f(additionalProperty);
                    return;
                }
                if (schema === false) {
                    i.setParams({
                        additionalProperty
                    });
                    i.error();
                    if (!allErrors) {
                        gen.break();
                    }
                    return;
                }
                if (typeof schema === "object" && !a.alwaysValidSchema(it, schema)) {
                    let S = gen.name("valid");
                    if (opts.removeAdditional === "failing") {
                        C(additionalProperty, S, false);
                        gen.if(r.not(S), ()=>{
                            i.reset();
                            f(additionalProperty);
                        });
                    } else {
                        C(additionalProperty, S);
                        if (!allErrors) {
                            gen.if(r.not(S), ()=>gen.break());
                        }
                    }
                }
            }
            function C(dataProp, S, k) {
                let L = {
                    keyword: "additionalProperties",
                    dataProp,
                    dataPropType: a.Type.Str
                };
                if (k === false) {
                    Object.assign(L, {
                        compositeRule: true,
                        createErrors: false,
                        allErrors: false
                    });
                }
                i.subschema(L, S);
            }
        }
    };
    e.default = n;
    return e;
}
