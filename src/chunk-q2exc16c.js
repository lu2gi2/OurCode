import { jY } from "/$bunfs/root/chunk-63xa24b4.js";
import { _, Oi } from "/$bunfs/root/chunk-bd805sh6.js";
const d = /[\x7f-\x9f]/g;
const t = (e)=>e.replace(d, (r)=>`\\u${r.charCodeAt(0).toString(16).padStart(4, "0")}`);
const c = /[\x00-\x1f\x7f-\x9f]/g;
function pgn(e) {
    return e.replace(c, "");
}
function fgn(e, { verbose }) {
    if (Object.keys(e).length === 0) {
        return "";
    }
    let n = jY(e);
    if (n !== null) {
        return n;
    }
    return Object.entries(e).map(([o, i])=>{
        let s = t(_(i));
        return `${t(Oi(o).slice(1, -1))}: ${s}`;
    }).join(", ");
}
export { pgn, fgn };
