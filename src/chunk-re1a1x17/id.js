import { Fi } from "./Fi.js";
import { Hi } from "./Hi.js";
import { Ki } from "./Ki.js";
import { Li } from "./Li.js";
import { Qu } from "./Qu_2.js";
import { Ui } from "./Ui.js";
import { nd } from "./nd.js";
import { sd } from "./sd.js";
let __wakaru_id_cache;
export function id() {
    if (__wakaru_id_cache) {
        return __wakaru_id_cache;
    }
    const e = {};
    __wakaru_id_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = Li();
    let r = Ui();
    let s = Fi();
    let a = Qu();
    let n = sd();
    let i = nd();
    let l = Hi();
    let c = Ki();
    let d = [
        a.default,
        t.default,
        r.default,
        s.default(true),
        l.default,
        c.metadataVocabulary,
        c.contentVocabulary,
        n.default,
        i.default
    ];
    e.default = d;
    return e;
}
