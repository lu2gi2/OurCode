import { bu } from "./bu.js";
let __wakaru_Ru_cache;
export function Ru() {
    if (__wakaru_Ru_cache) {
        return __wakaru_Ru_cache;
    }
    const e = {};
    __wakaru_Ru_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = bu();
    t.code = 'require("ajv/dist/runtime/uri").default';
    e.default = t;
    return e;
}
