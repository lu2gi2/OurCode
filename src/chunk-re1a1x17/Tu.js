import { Le } from "./Le.js";
import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_Tu_cache;
export function Tu() {
    if (__wakaru_Tu_cache) {
        return __wakaru_Tu_cache;
    }
    const e = {};
    __wakaru_Tu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = Le();
    let r = ne();
    let s = te();
    let a = {
        keyword: "pattern",
        type: "string",
        schemaType: "string",
        $data: true,
        error: {
            message: ({ schemaCode })=>s.str`must match pattern "${schemaCode}"`,
            params: ({ schemaCode })=>s._`{pattern: ${schemaCode}}`
        },
        code (n) {
            let { gen, data, $data, schema, schemaCode, it } = n;
            let w = it.opts.unicodeRegExp ? "u" : "";
            if ($data) {
                let { regExp } = it.opts.code;
                let y = regExp.code === "new RegExp" ? s._`new RegExp` : r.useFunc(gen, regExp);
                let v = gen.let("valid");
                gen.try(()=>gen.assign(v, s._`${y}(${schemaCode}, ${w}).test(${data})`), ()=>gen.assign(v, false));
                n.fail$data(s._`!${v}`);
            } else {
                let P = t.usePattern(n, schema);
                n.fail$data(s._`!${P}.test(${data})`);
            }
        }
    };
    e.default = a;
    return e;
}
