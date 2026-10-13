import { gn } from "./gn.js";
let __wakaru_ed_cache;
export function ed() {
    if (__wakaru_ed_cache) {
        return __wakaru_ed_cache;
    }
    const e = {};
    __wakaru_ed_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = gn();
    let r = {
        keyword: "dependentRequired",
        type: "object",
        schemaType: "object",
        error: t.error,
        code: (s)=>t.validatePropertyDeps(s)
    };
    e.default = r;
    return e;
}
