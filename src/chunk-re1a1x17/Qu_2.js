import { Bi } from "./Bi.js";
import { Wi } from "./Wi.js";
import { Xu } from "./Xu_2.js";
import { Zu } from "./Zu_2.js";
let __wakaru_Qu_cache;
export function Qu() {
    if (__wakaru_Qu_cache) {
        return __wakaru_Qu_cache;
    }
    const e = {};
    __wakaru_Qu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = Bi();
    let r = Wi();
    let s = Xu();
    let a = Zu();
    let n = [
        t.default,
        r.default,
        s.default,
        a.default
    ];
    e.default = n;
    return e;
}
