import { Di } from "./Di.js";
import { Le } from "./Le.js";
import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_ju_cache;
export function ju() {
    if (__wakaru_ju_cache) {
        return __wakaru_ju_cache;
    }
    const e = {};
    __wakaru_ju_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let r = ne();
    let s = Le();
    let a = Di();
    let n = {
        keyword: "items",
        type: "array",
        schemaType: [
            "object",
            "boolean"
        ],
        before: "uniqueItems",
        error: {
            message: ({ params: { len } })=>t.str`must NOT have more than ${len} items`,
            params: ({ params: { len } })=>t._`{limit: ${len}}`
        },
        code (i) {
            let { schema, parentSchema, it } = i;
            let { prefixItems } = parentSchema;
            it.items = true;
            if (r.alwaysValidSchema(it, schema)) {
                return;
            }
            if (prefixItems) {
                a.validateAdditionalItems(i, prefixItems);
            } else {
                i.ok(s.validateArray(i));
            }
        }
    };
    e.default = n;
    return e;
}
