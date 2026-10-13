import { Sn } from "./Sn.js";
import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_Nu_cache;
export function Nu() {
    if (__wakaru_Nu_cache) {
        return __wakaru_Nu_cache;
    }
    const e = {};
    __wakaru_Nu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let r = ne();
    let s = Sn();
    let a = {
        keyword: "enum",
        schemaType: "array",
        $data: true,
        error: {
            message: "must be equal to one of the allowed values",
            params: ({ schemaCode })=>t._`{allowedValues: ${schemaCode}}`
        },
        code (n) {
            let { gen, data, $data, schema, schemaCode, it } = n;
            if (!$data && schema.length === 0) {
                throw Error("enum must have non-empty array");
            }
            let w = schema.length >= it.opts.loopEnum;
            let P;
            let y = ()=>P ??= r.useFunc(gen, s.default);
            let v;
            if (w || $data) {
                v = gen.let("valid");
                n.block$data(v, p);
            } else {
                if (!Array.isArray(schema)) {
                    throw Error("ajv implementation error");
                }
                let g = gen.const("vSchema", schemaCode);
                v = t.or(...schema.map((f, R)=>h(g, R)));
            }
            n.pass(v);
            function p() {
                gen.assign(v, false);
                gen.forOf("v", schemaCode, (g)=>gen.if(t._`${y()}(${data}, ${g})`, ()=>gen.assign(v, true).break()));
            }
            function h(g, f) {
                let R = schema[f];
                if (typeof R === "object" && R !== null) {
                    return t._`${y()}(${data}, ${g}[${f}])`;
                }
                return t._`${data} === ${R}`;
            }
        }
    };
    e.default = a;
    return e;
}
