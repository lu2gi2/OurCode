import { Vi } from "./Vi.js";
let __wakaru_Mu_cache;
export function Mu() {
    if (__wakaru_Mu_cache) {
        return __wakaru_Mu_cache;
    }
    const e = {};
    __wakaru_Mu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = Vi();
    let r = {
        keyword: "prefixItems",
        type: "array",
        schemaType: [
            "array"
        ],
        before: "uniqueItems",
        code: (s)=>t.validateTuple(s, "items")
    };
    e.default = r;
    return e;
}
