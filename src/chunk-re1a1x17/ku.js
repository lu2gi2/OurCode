import { Le } from "./Le.js";
import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_ku_cache;
export function ku() {
    if (__wakaru_ku_cache) {
        return __wakaru_ku_cache;
    }
    const e = {};
    __wakaru_ku_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = Le();
    let r = te();
    let s = ne();
    let a = {
        keyword: "required",
        type: "object",
        schemaType: "array",
        $data: true,
        error: {
            message: ({ params: { missingProperty } })=>r.str`must have required property '${missingProperty}'`,
            params: ({ params: { missingProperty } })=>r._`{missingProperty: ${missingProperty}}`
        },
        code (n) {
            let { gen, schema, schemaCode, data, $data, it } = n;
            let { opts } = it;
            if (!$data && schema.length === 0) {
                return;
            }
            let P = schema.length >= opts.loopRequired;
            if (it.allErrors) {
                y();
            } else {
                v();
            }
            if (opts.strictRequired) {
                let g = n.parentSchema.properties;
                let { definedProperties } = n.it;
                for (let R of schema){
                    if (g?.[R] === undefined && !definedProperties.has(R)) {
                        let C = `required property "${R}" is not defined at "${it.schemaEnv.baseId + it.errSchemaPath}" (strictRequired)`;
                        s.checkStrictMode(it, C, it.opts.strictRequired);
                    }
                }
            }
            function y() {
                if (P || $data) {
                    n.block$data(r.nil, p);
                } else {
                    for (let g of schema){
                        t.checkReportMissingProp(n, g);
                    }
                }
            }
            function v() {
                let g = gen.let("missing");
                if (P || $data) {
                    let f = gen.let("valid", true);
                    n.block$data(f, ()=>h(g, f));
                    n.ok(f);
                } else {
                    gen.if(t.checkMissingProp(n, schema, g));
                    t.reportMissingProp(n, g);
                    gen.else();
                }
            }
            function p() {
                gen.forOf("prop", schemaCode, (g)=>{
                    n.setParams({
                        missingProperty: g
                    });
                    gen.if(t.noPropertyInData(gen, data, g, opts.ownProperties), ()=>n.error());
                });
            }
            function h(g, f) {
                n.setParams({
                    missingProperty: g
                });
                gen.forOf(g, schemaCode, ()=>{
                    gen.assign(f, t.propertyInData(gen, data, g, opts.ownProperties));
                    gen.if(r.not(f), ()=>{
                        n.error();
                        gen.break();
                    });
                }, r.nil);
            }
        }
    };
    e.default = a;
    return e;
}
