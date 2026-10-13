import { ed } from "./ed.js";
import { rd } from "./rd.js";
import { td } from "./td.js";
let __wakaru_sd_cache;
export function sd() {
    if (__wakaru_sd_cache) {
        return __wakaru_sd_cache;
    }
    const e = {};
    __wakaru_sd_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = ed();
    let r = td();
    let s = rd();
    let a = [
        t.default,
        r.default,
        s.default
    ];
    e.default = a;
    return e;
}
