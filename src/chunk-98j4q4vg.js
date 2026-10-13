import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Dzr, e_n } from "/$bunfs/root/chunk-xff00cqh.js";
import { m2e, iQo } from "/$bunfs/root/chunk-kasbfbhj.js";
import { o, T, u, A } from "/$bunfs/root/chunk-smx21d0k.js";
const n = 1;
const a = 64;
const s = "offer";
const t = p(()=>o().regex(m2e).refine(iQo));
const c = p(()=>u({
        v: A(n),
        head: t(),
        branch: o().min(1).max(Dzr).refine(e_n),
        ancestors: T(t()).max(a)
    }));
function qDo(e) {
    let r = c().safeParse(e[s]);
    if (r.success) {
        return r.data;
    }
    return null;
}
export { qDo };
