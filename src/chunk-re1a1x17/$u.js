import { te } from "./te.js";
let __wakaru_$u_cache;
export function $u() {
    if (__wakaru_$u_cache) {
        return __wakaru_$u_cache;
    }
    const e = {};
    __wakaru_$u_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let r = {
        keyword: "multipleOf",
        type: "number",
        schemaType: "number",
        $data: true,
        error: {
            message: ({ schemaCode })=>t.str`must be multiple of ${schemaCode}`,
            params: ({ schemaCode })=>t._`{multipleOf: ${schemaCode}}`
        },
        code (s) {
            let { gen, data, schemaCode, it } = s;
            let multipleOfPrecision = it.opts.multipleOfPrecision;
            let d = gen.let("res");
            let m = multipleOfPrecision ? t._`Math.abs(Math.round(${d}) - ${d}) > 1e-${multipleOfPrecision}` : t._`${d} !== parseInt(${d})`;
            s.fail$data(t._`(${schemaCode} === 0 || (${d} = ${data}/${schemaCode}, ${m}))`);
        }
    };
    e.default = r;
    return e;
}
