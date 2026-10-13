import { Mi } from "./Mi.js";
let __wakaru_Sn_cache;
export function Sn() {
    if (__wakaru_Sn_cache) {
        return __wakaru_Sn_cache;
    }
    const e = {};
    __wakaru_Sn_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = Mi();
    t.code = 'require("ajv/dist/runtime/equal").default';
    e.default = t;
    return e;
}
