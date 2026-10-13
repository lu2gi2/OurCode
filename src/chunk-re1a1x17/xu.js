import { Le } from "./Le.js";
let __wakaru_xu_cache;
export function xu() {
    if (__wakaru_xu_cache) {
        return __wakaru_xu_cache;
    }
    const e = {};
    __wakaru_xu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = {
        keyword: "anyOf",
        schemaType: "array",
        trackErrors: true,
        code: Le().validateUnion,
        error: {
            message: "must match a schema in anyOf"
        }
    };
    e.default = t;
    return e;
}
