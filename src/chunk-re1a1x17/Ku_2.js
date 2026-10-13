import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_Ku_cache;
export function Ku() {
    if (__wakaru_Ku_cache) {
        return __wakaru_Ku_cache;
    }
    const e = {};
    __wakaru_Ku_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let r = ne();
    let s = {
        keyword: "if",
        schemaType: [
            "object",
            "boolean"
        ],
        trackErrors: true,
        error: {
            message: ({ params })=>t.str`must match "${params.ifClause}" schema`,
            params: ({ params })=>t._`{failingKeyword: ${params.ifClause}}`
        },
        code (n) {
            let { gen, parentSchema, it } = n;
            if (parentSchema.then === undefined && parentSchema.else === undefined) {
                r.checkStrictMode(it, '"if" without "then" and "else" is ignored');
            }
            let d = a(it, "then");
            let m = a(it, "else");
            if (!d && !m) {
                return;
            }
            let _ = gen.let("valid", true);
            let w = gen.name("_valid");
            P();
            n.reset();
            if (d && m) {
                let ifClause = gen.let("ifClause");
                n.setParams({
                    ifClause
                });
                gen.if(w, y("then", ifClause), y("else", ifClause));
            } else if (d) {
                gen.if(w, y("then"));
            } else {
                gen.if(t.not(w), y("else"));
            }
            n.pass(_, ()=>n.error(true));
            function P() {
                let v = n.subschema({
                    keyword: "if",
                    compositeRule: true,
                    createErrors: false,
                    allErrors: false
                }, w);
                n.mergeEvaluated(v);
            }
            function y(v, p) {
                return ()=>{
                    let h = n.subschema({
                        keyword: v
                    }, w);
                    gen.assign(_, w);
                    n.mergeValidEvaluated(h, _);
                    if (p) {
                        gen.assign(p, t._`${v}`);
                    } else {
                        n.setParams({
                            ifClause: v
                        });
                    }
                };
            }
        }
    };
    function a(n, i) {
        let l = n.schema[i];
        return l !== undefined && !r.alwaysValidSchema(n, l);
    }
    e.default = s;
    return e;
}
