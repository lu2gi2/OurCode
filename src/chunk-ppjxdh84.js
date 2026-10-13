import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
function gzr(n) {
    if (n === null || typeof n !== "object") {
        return;
    }
    let n_protocols = n.protocols;
    if (!Array.isArray(n_protocols)) {
        return;
    }
    let t = n_protocols.filter((r)=>typeof r === "string");
    if (t.length > 0) {
        return t;
    }
}
function iVo(n) {
    let o = gzr(n);
    if (o === undefined) {
        return "";
    }
    return ` (subprotocols: ${o.map((t)=>`"${t}"`).join(", ")})`;
}
const _Jn = 4;
const e = 48;
function Qjt(n) {
    let o = n.slice(0, _Jn).map((r)=>{
        if (r.length > e) {
            return `${ne(r, e)}\u2026`;
        }
        return r;
    });
    let t = n.length - o.length;
    return `${o.map((r)=>`"${r}"`).join(", ")}${t > 0 ? ` (+${t} more)` : ""}`;
}
export { gzr, iVo, _Jn, Qjt };
