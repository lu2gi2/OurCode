import { cd } from "./cd.js";
import { dd } from "./dd.js";
import { fd } from "./fd.js";
import { hd } from "./hd.js";
import { ld } from "./ld.js";
import { md } from "./md.js";
import { pd } from "./pd.js";
import { ud } from "./ud.js";
let __wakaru_Sd_cache;
export function Sd() {
    if (__wakaru_Sd_cache) {
        return __wakaru_Sd_cache;
    }
    const e = {};
    __wakaru_Sd_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = cd();
    let r = ld();
    let s = ud();
    let a = dd();
    let n = hd();
    let i = md();
    let l = pd();
    let c = fd();
    let d = [
        "/properties"
    ];
    function m(_) {
        [
            t,
            r,
            s,
            a,
            n,
            w(this, i),
            l,
            w(this, c)
        ].forEach((P)=>this.addMetaSchema(P, undefined, false));
        return this;
        function w(P, y) {
            if (_) {
                return P.$dataMetaSchema(y, d);
            }
            return y;
        }
    }
    e.default = m;
    return e;
}
