import { Le } from "./Le.js";
import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_gn_cache;
export function gn() {
    if (__wakaru_gn_cache) {
        return __wakaru_gn_cache;
    }
    const e = {};
    __wakaru_gn_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.validateSchemaDeps = e.validatePropertyDeps = e.error = undefined;
    let t = te();
    let r = ne();
    let s = Le();
    e.error = {
        message: ({ params: { property, depsCount, deps } })=>{
            let _ = depsCount === 1 ? "property" : "properties";
            return t.str`must have ${_} ${deps} when property ${property} is present`;
        },
        params: ({ params: { property, depsCount, deps, missingProperty } })=>t._`{property: ${property},
    missingProperty: ${missingProperty},
    depsCount: ${depsCount},
    deps: ${deps}}`
    };
    let a = {
        keyword: "dependencies",
        type: "object",
        schemaType: "object",
        error: e.error,
        code (c) {
            let [d, m] = n(c);
            i(c, d);
            l(c, m);
        }
    };
    function n({ schema }) {
        let d = {};
        let m = {};
        for(let _ in schema){
            if (_ === "__proto__") {
                continue;
            }
            let w = Array.isArray(schema[_]) ? d : m;
            w[_] = schema[_];
        }
        return [
            d,
            m
        ];
    }
    function i(c, d = c.schema) {
        let { gen, data, it } = c;
        if (Object.keys(d).length === 0) {
            return;
        }
        let P = gen.let("missing");
        for(let property in d){
            let v = d[property];
            if (v.length === 0) {
                continue;
            }
            let p = s.propertyInData(gen, data, property, it.opts.ownProperties);
            c.setParams({
                property,
                depsCount: v.length,
                deps: v.join(", ")
            });
            if (it.allErrors) {
                gen.if(p, ()=>{
                    for (let h of v){
                        s.checkReportMissingProp(c, h);
                    }
                });
            } else {
                gen.if(t._`${p} && (${s.checkMissingProp(c, v, P)})`);
                s.reportMissingProp(c, P);
                gen.else();
            }
        }
    }
    e.validatePropertyDeps = i;
    function l(c, d = c.schema) {
        let { gen, data, keyword, it } = c;
        let y = gen.name("valid");
        for(let schemaProp in d){
            if (r.alwaysValidSchema(it, d[schemaProp])) {
                continue;
            }
            gen.if(s.propertyInData(gen, data, schemaProp, it.opts.ownProperties), ()=>{
                let p = c.subschema({
                    keyword,
                    schemaProp
                }, y);
                c.mergeValidEvaluated(p, y);
            }, ()=>gen.var(y, true));
            c.ok(y);
        }
    }
    e.validateSchemaDeps = l;
    e.default = a;
    return e;
}
