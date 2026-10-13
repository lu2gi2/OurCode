import { $u } from "./$u.js";
import { Cu } from "./Cu.js";
import { Iu } from "./Iu.js";
import { Nu } from "./Nu.js";
import { Ou } from "./Ou.js";
import { Pu } from "./Pu_2.js";
import { Tu } from "./Tu.js";
import { ku } from "./ku.js";
import { qu } from "./qu.js";
import { wu } from "./wu.js";
let __wakaru_Ui_cache;
export function Ui() {
    if (__wakaru_Ui_cache) {
        return __wakaru_Ui_cache;
    }
    const e = {};
    __wakaru_Ui_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = wu();
    let r = $u();
    let s = Pu();
    let a = Tu();
    let n = Cu();
    let i = ku();
    let l = qu();
    let c = Iu();
    let d = Ou();
    let m = Nu();
    let _ = [
        t.default,
        r.default,
        s.default,
        a.default,
        n.default,
        i.default,
        l.default,
        c.default,
        {
            keyword: "type",
            schemaType: [
                "string",
                "array"
            ]
        },
        {
            keyword: "nullable",
            schemaType: "boolean"
        },
        d.default,
        m.default
    ];
    e.default = _;
    return e;
}
