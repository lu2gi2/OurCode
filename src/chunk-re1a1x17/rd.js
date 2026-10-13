import { ne } from "./ne.js";
let __wakaru_rd_cache;
export function rd() {
    if (__wakaru_rd_cache) {
        return __wakaru_rd_cache;
    }
    const e = {};
    __wakaru_rd_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = ne();
    let r = {
        keyword: [
            "maxContains",
            "minContains"
        ],
        type: "array",
        schemaType: "number",
        code ({ keyword, parentSchema, it }) {
            if (parentSchema.contains === undefined) {
                t.checkStrictMode(it, `"${keyword}" without "contains" is ignored`);
            }
        }
    };
    e.default = r;
    return e;
}
