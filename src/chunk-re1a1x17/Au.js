import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_Au_cache;
export function Au() {
    if (__wakaru_Au_cache) {
        return __wakaru_Au_cache;
    }
    const e = {};
    __wakaru_Au_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let r = ne();
    let s = {
        keyword: "contains",
        type: "array",
        schemaType: [
            "object",
            "boolean"
        ],
        before: "uniqueItems",
        trackErrors: true,
        error: {
            message: ({ params: { min, max } })=>{
                if (max === undefined) {
                    return t.str`must contain at least ${min} valid item(s)`;
                }
                return t.str`must contain at least ${min} and no more than ${max} valid item(s)`;
            },
            params: ({ params: { min, max } })=>{
                if (max === undefined) {
                    return t._`{minContains: ${min}}`;
                }
                return t._`{minContains: ${min}, maxContains: ${max}}`;
            }
        },
        code (a) {
            let { gen, schema, parentSchema, data, it } = a;
            let min;
            let max;
            let { minContains, maxContains } = parentSchema;
            if (it.opts.next) {
                min = minContains === undefined ? 1 : minContains;
                max = maxContains;
            } else {
                min = 1;
            }
            let y = gen.const("len", t._`${data}.length`);
            a.setParams({
                min,
                max
            });
            if (max === undefined && min === 0) {
                r.checkStrictMode(it, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
                return;
            }
            if (max !== undefined && min > max) {
                r.checkStrictMode(it, '"minContains" > "maxContains" is always invalid');
                a.fail();
                return;
            }
            if (r.alwaysValidSchema(it, schema)) {
                let f = t._`${y} >= ${min}`;
                if (max !== undefined) {
                    f = t._`${f} && ${y} <= ${max}`;
                }
                a.pass(f);
                return;
            }
            it.items = true;
            let v = gen.name("valid");
            if (max === undefined && min === 1) {
                h(v, ()=>gen.if(v, ()=>gen.break()));
            } else if (min === 0) {
                gen.let(v, true);
                if (max !== undefined) {
                    gen.if(t._`${data}.length > 0`, p);
                }
            } else {
                gen.let(v, false);
                p();
            }
            a.result(v, ()=>a.reset());
            function p() {
                let f = gen.name("_valid");
                let R = gen.let("count", 0);
                h(f, ()=>gen.if(f, ()=>g(R)));
            }
            function h(f, R) {
                gen.forRange("i", 0, y, (dataProp)=>{
                    a.subschema({
                        keyword: "contains",
                        dataProp,
                        dataPropType: r.Type.Num,
                        compositeRule: true
                    }, f);
                    R();
                });
            }
            function g(f) {
                gen.code(t._`${f}++`);
                if (max === undefined) {
                    gen.if(t._`${f} >= ${min}`, ()=>gen.assign(v, true).break());
                } else {
                    gen.if(t._`${f} > ${max}`, ()=>gen.assign(v, false).break());
                    if (min === 1) {
                        gen.assign(v, true);
                    } else {
                        gen.if(t._`${f} >= ${min}`, ()=>gen.assign(v, true));
                    }
                }
            }
        }
    };
    e.default = s;
    return e;
}
