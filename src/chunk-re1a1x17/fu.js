import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_fu_cache;
export function fu() {
    if (__wakaru_fu_cache) {
        return __wakaru_fu_cache;
    }
    const e = {};
    __wakaru_fu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.assignDefaults = undefined;
    let t = te();
    let r = ne();
    function s(n, i) {
        let { properties, items } = n.schema;
        if (i === "object" && properties) {
            for(let d in properties){
                a(n, d, properties[d].default);
            }
        } else if (i === "array" && Array.isArray(items)) {
            items.forEach((d, m)=>a(n, m, d.default));
        }
    }
    e.assignDefaults = s;
    function a(n, i, l) {
        let { gen, compositeRule, data, opts } = n;
        if (l === undefined) {
            return;
        }
        let w = t._`${data}${t.getProperty(i)}`;
        if (compositeRule) {
            r.checkStrictMode(n, `default is ignored for: ${w}`);
            return;
        }
        let P = t._`${w} === undefined`;
        if (opts.useDefaults === "empty") {
            P = t._`${P} || ${w} === null || ${w} === ""`;
        }
        gen.if(P, t._`${w} = ${t.stringify(l)}`);
    }
    return e;
}
