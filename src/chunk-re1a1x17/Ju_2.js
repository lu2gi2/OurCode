import { ne } from "./ne.js";
let __wakaru_Ju_cache;
export function Ju() {
    if (__wakaru_Ju_cache) {
        return __wakaru_Ju_cache;
    }
    const e = {};
    __wakaru_Ju_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = ne();
    let r = {
        keyword: [
            "then",
            "else"
        ],
        schemaType: [
            "object",
            "boolean"
        ],
        code ({ keyword, parentSchema, it }) {
            if (parentSchema.if === undefined) {
                t.checkStrictMode(it, `"${keyword}" without "if" is ignored`);
            }
        }
    };
    e.default = r;
    return e;
}
