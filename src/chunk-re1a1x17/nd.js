import { ad } from "./ad.js";
import { od } from "./od.js";
let __wakaru_nd_cache;
export function nd() {
    if (__wakaru_nd_cache) {
        return __wakaru_nd_cache;
    }
    const e = {};
    __wakaru_nd_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = ad();
    let r = od();
    let s = [
        t.default,
        r.default
    ];
    e.default = s;
    return e;
}
