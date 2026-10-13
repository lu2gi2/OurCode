import { fn } from "./fn.js";
import { zu } from "./zu.js";
let __wakaru_Li_cache;
export function Li() {
    if (__wakaru_Li_cache) {
        return __wakaru_Li_cache;
    }
    const e = {};
    __wakaru_Li_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = zu();
    let r = fn();
    let s = [
        "$schema",
        "$id",
        "$defs",
        "$vocabulary",
        {
            keyword: "$comment"
        },
        "definitions",
        t.default,
        r.default
    ];
    e.default = s;
    return e;
}
