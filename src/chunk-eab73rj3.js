import { cp } from "/$bunfs/root/chunk-xb9cceab.js";
import { __ } from "/$bunfs/root/chunk-jynzk4xv.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { It, Qce, ww } from "/$bunfs/root/chunk-4r6b8efh.js";
import { Be } from "/$bunfs/root/chunk-6dwnw6av.js";
import { yi } from "/$bunfs/root/chunk-52bcnmbr.js";
import { Kf } from "/$bunfs/root/chunk-mvz09dzd.js";
import { Lfs } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { trt } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { JOn, Ioo, kcs, b5t } from "/$bunfs/root/chunk-5ne6jp11.js";
import { yh } from "/$bunfs/root/chunk-7aeb6f08.js";
import { YOn, EAt } from "/$bunfs/root/chunk-h1cqrn2f.js";
import { N3n } from "/$bunfs/root/chunk-sfjcyk7w.js";
import { Sk } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { j2 } from "/$bunfs/root/chunk-8yak0fbv.js";
import { Bo, rd } from "/$bunfs/root/chunk-2dp0fzyb.js";
const p = new Set([
    Kf,
    __
]);
function cUr(o, e) {
    if (e.length === 0) {
        return o;
    }
    let t = e.map((r)=>[
            r,
            Bo(r)
        ]);
    let n = o.filter((r)=>!t.some(([m, i])=>rd(r, m, i)));
    if (n.length === o.length) {
        return o;
    }
    return n;
}
function c(o) {
    return o.mcpInfo?.cliOwned === true && o.mcpInfo.serverName === cp;
}
const l = import.meta.require("/$bunfs/root/chunk-g3qtn8xk.js");
function Afn() {
    return (process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS ?? "").split(",").map((o)=>o.trim()).filter(Boolean);
}
function dUr(o, e = Afn()) {
    if (YOn(o) || Ioo.includes(o.name)) {
        return true;
    }
    let t = Bo(o.name);
    return e.some((n)=>n.startsWith(t));
}
function zHs(o) {
    let a_CLAUDE_CODE_BRIEF = a.CLAUDE_CODE_BRIEF;
    let t = new Set(Afn());
    let n = b5t();
    return o.filter((r)=>JOn.has(r.name) || n && It(r, Be) && !yh(r) || kcs(r.name) || c(r) || EAt(r) || a_CLAUDE_CODE_BRIEF && p.has(r.name) || ww(r, t));
}
function PUt(o, e, t, n) {
    let [r, m] = Sk(N3n(yi(trt([
        ...o,
        ...e
    ]), "name"), n), (s)=>yh(s) || j2(s));
    let i = [
        ...m.sort(Qce),
        ...r.sort(Qce)
    ];
    if (l.isCoordinatorMode()) {
        return zHs(i);
    }
    return i;
}
function IUt(o, e) {
    let t = o.length === 1 ? o[0] : undefined;
    if (t && Lfs(e, t)) {
        return [];
    }
    return o;
}
export { cUr, Afn, dUr, zHs, PUt, IUt };
