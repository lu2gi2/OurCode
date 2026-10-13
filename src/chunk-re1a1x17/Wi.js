import { Ae } from "./Ae.js";
import { fn } from "./fn.js";
import { te } from "./te.js";
let __wakaru_Wi_cache;
export function Wi() {
    if (__wakaru_Wi_cache) {
        return __wakaru_Wi_cache;
    }
    const e = {};
    __wakaru_Wi_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.dynamicRef = undefined;
    let t = te();
    let r = Ae();
    let s = fn();
    let a = {
        keyword: "$dynamicRef",
        schemaType: "string",
        code: (i)=>n(i, i.schema)
    };
    function n(i, l) {
        let { gen, keyword, it } = i;
        if (l[0] !== "#") {
            throw Error(`"${keyword}" only supports hash fragment reference`);
        }
        let _ = l.slice(1);
        if (it.allErrors) {
            w();
        } else {
            let y = gen.let("valid", false);
            w(y);
            i.ok(y);
        }
        function w(y) {
            if (it.schemaEnv.root.dynamicAnchors[_]) {
                let v = gen.let("_v", t._`${r.default.dynamicAnchors}${t.getProperty(_)}`);
                gen.if(v, P(v, y), P(it.validateName, y));
            } else {
                P(it.validateName, y)();
            }
        }
        function P(y, v) {
            if (v) {
                return ()=>gen.block(()=>{
                        s.callRef(i, y);
                        gen.let(v, true);
                    });
            }
            return ()=>s.callRef(i, y);
        }
    }
    e.dynamicRef = n;
    e.default = a;
    return e;
}
