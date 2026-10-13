import { Wi } from "./Wi.js";
let __wakaru_Zu_cache;
export function Zu() {
    if (__wakaru_Zu_cache) {
        return __wakaru_Zu_cache;
    }
    const e = {};
    __wakaru_Zu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = Wi();
    let r = {
        keyword: "$recursiveRef",
        schemaType: "string",
        code: (s)=>t.dynamicRef(s, s.schema)
    };
    e.default = r;
    return e;
}
