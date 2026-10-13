import { gn } from "./gn.js";
let __wakaru_td_cache;
export function td() {
    if (__wakaru_td_cache) {
        return __wakaru_td_cache;
    }
    const e = {};
    __wakaru_td_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = gn();
    let r = {
        keyword: "dependentSchemas",
        type: "object",
        schemaType: "object",
        code: (s)=>t.validateSchemaDeps(s)
    };
    e.default = r;
    return e;
}
