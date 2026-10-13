import { Fi } from "./Fi.js";
import { Hi } from "./Hi.js";
import { Ki } from "./Ki.js";
import { Li } from "./Li.js";
import { Ui } from "./Ui.js";
let __wakaru_Bu_cache;
export function Bu() {
    if (__wakaru_Bu_cache) {
        return __wakaru_Bu_cache;
    }
    const e = {};
    __wakaru_Bu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = Li();
    let r = Ui();
    let s = Fi();
    let a = Hi();
    let n = Ki();
    let i = [
        t.default,
        r.default,
        s.default(),
        a.default,
        n.metadataVocabulary,
        n.contentVocabulary
    ];
    e.default = i;
    return e;
}
