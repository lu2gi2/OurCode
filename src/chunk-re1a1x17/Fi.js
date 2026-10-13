import { Au } from "./Au.js";
import { Di } from "./Di.js";
import { Du } from "./Du.js";
import { Fu } from "./Fu_2.js";
import { Hu } from "./Hu_2.js";
import { Ju } from "./Ju_2.js";
import { Ku } from "./Ku_2.js";
import { Lu } from "./Lu.js";
import { Mu } from "./Mu.js";
import { Uu } from "./Uu.js";
import { Vi } from "./Vi.js";
import { Vu } from "./Vu_2.js";
import { gn } from "./gn.js";
import { ju } from "./ju.js";
import { xi } from "./xi.js";
import { xu } from "./xu.js";
let __wakaru_Fi_cache;
export function Fi() {
    if (__wakaru_Fi_cache) {
        return __wakaru_Fi_cache;
    }
    const e = {};
    __wakaru_Fi_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = Di();
    let r = Mu();
    let s = Vi();
    let a = ju();
    let n = Au();
    let i = gn();
    let l = Lu();
    let c = xi();
    let d = Uu();
    let m = Du();
    let _ = Vu();
    let w = xu();
    let P = Fu();
    let y = Hu();
    let v = Ku();
    let p = Ju();
    function h(g = false) {
        let f = [
            _.default,
            w.default,
            P.default,
            y.default,
            v.default,
            p.default,
            l.default,
            c.default,
            i.default,
            d.default,
            m.default
        ];
        if (g) {
            f.push(r.default, a.default);
        } else {
            f.push(t.default, s.default);
        }
        f.push(n.default);
        return f;
    }
    e.default = h;
    return e;
}
