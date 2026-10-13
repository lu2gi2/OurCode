import { Sn } from "./Sn.js";
import { ne } from "./ne.js";
import { po } from "./po.js";
import { te } from "./te.js";
let __wakaru_Iu_cache;
export function Iu() {
    if (__wakaru_Iu_cache) {
        return __wakaru_Iu_cache;
    }
    const e = {};
    __wakaru_Iu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = po();
    let r = te();
    let s = ne();
    let a = Sn();
    let n = {
        keyword: "uniqueItems",
        type: "array",
        schemaType: "boolean",
        $data: true,
        error: {
            message: ({ params: { i, j } })=>r.str`must NOT have duplicate items (items ## ${j} and ${i} are identical)`,
            params: ({ params: { i, j } })=>r._`{i: ${i}, j: ${j}}`
        },
        code (i) {
            let { gen, data, $data, schema, parentSchema, schemaCode, it } = i;
            if (!$data && !schema) {
                return;
            }
            let y = gen.let("valid");
            let v = parentSchema.items ? t.getSchemaTypes(parentSchema.items) : [];
            i.block$data(y, p, r._`${schemaCode} === false`);
            i.ok(y);
            function p() {
                let i_1 = gen.let("i", r._`${data}.length`);
                let j = gen.let("j");
                i.setParams({
                    i: i_1,
                    j
                });
                gen.assign(y, true);
                gen.if(r._`${i_1} > 1`, ()=>(h() ? g : f)(i_1, j));
            }
            function h() {
                return v.length > 0 && !v.some((R)=>R === "object" || R === "array");
            }
            function g(R, C) {
                let b = gen.name("item");
                let S = t.checkDataTypes(v, b, it.opts.strictNumbers, t.DataType.Wrong);
                let k = gen.const("indices", r._`{}`);
                gen.for(r._`;${R}--;`, ()=>{
                    gen.let(b, r._`${data}[${R}]`);
                    gen.if(S, r._`continue`);
                    if (v.length > 1) {
                        gen.if(r._`typeof ${b} == "string"`, r._`${b} += "_"`);
                    }
                    gen.if(r._`typeof ${k}[${b}] == "number"`, ()=>{
                        gen.assign(C, r._`${k}[${b}]`);
                        i.error();
                        gen.assign(y, false).break();
                    }).code(r._`${k}[${b}] = ${R}`);
                });
            }
            function f(R, C) {
                let b = s.useFunc(gen, a.default);
                let S = gen.name("outer");
                gen.label(S).for(r._`;${R}--;`, ()=>gen.for(r._`${C} = ${R}; ${C}--;`, ()=>gen.if(r._`${b}(${data}[${R}], ${data}[${C}])`, ()=>{
                            i.error();
                            gen.assign(y, false).break(S);
                        })));
            }
        }
    };
    e.default = n;
    return e;
}
