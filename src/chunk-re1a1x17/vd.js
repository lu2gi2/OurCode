import { _d } from "./_d.js";
import { te } from "./te.js";
import { yd } from "./yd.js";
let __wakaru_vd_cache;
export function vd() {
    if (__wakaru_vd_cache) {
        return __wakaru_vd_cache.exports;
    }
    let exports = {};
    const t = {
        exports
    };
    __wakaru_vd_cache = t;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    let r = _d();
    let s = yd();
    let a = te();
    let n = new a.Name("fullFormats");
    let i = new a.Name("fastFormats");
    let l = (d, m = {
        keywords: true
    })=>{
        if (Array.isArray(m)) {
            c(d, m, r.fullFormats, n);
            return d;
        }
        let [_, w] = m.mode === "fast" ? [
            r.fastFormats,
            i
        ] : [
            r.fullFormats,
            n
        ];
        c(d, m.formats || r.formatNames, _, w);
        if (m.keywords) {
            s.default(d);
        }
        return d;
    };
    l.get = (d, m = "full")=>{
        let _ = (m === "fast" ? r.fastFormats : r.fullFormats)[d];
        if (!_) {
            throw Error(`Unknown format "${d}"`);
        }
        return _;
    };
    function c(d, m, _, w) {
        let P;
        let y;
        if (!((P = (y = d.opts.code).formats) !== null && P !== undefined)) {
            y.formats = a._`require("ajv-formats/dist/formats").${w}`;
        }
        for (let v of m){
            d.addFormat(v, _[v]);
        }
    }
    t.exports = exports = l;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = l;
    return t.exports;
}
