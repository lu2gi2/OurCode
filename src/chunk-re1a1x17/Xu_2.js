import { Bi } from "./Bi.js";
import { ne } from "./ne.js";
let __wakaru_Xu_cache;
export function Xu() {
    if (__wakaru_Xu_cache) {
        return __wakaru_Xu_cache;
    }
    const e = {};
    __wakaru_Xu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = Bi();
    let r = ne();
    let s = {
        keyword: "$recursiveAnchor",
        schemaType: "boolean",
        code (a) {
            if (a.schema) {
                t.dynamicAnchor(a, "");
            } else {
                r.checkStrictMode(a.it, "$recursiveAnchor: false is ignored");
            }
        }
    };
    e.default = s;
    return e;
}
