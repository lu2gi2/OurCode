import { $u } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { gTo } from "/$bunfs/root/chunk-55x53sfe.js";
function uao(n, e) {
    let o = $u() ? gTo(n) : undefined;
    if (!o) {
        return;
    }
    let { tls, ...rest } = e ?? {};
    let d = e?.proxy === undefined && e?.unix === undefined ? rest : e;
    return (r)=>o.fetch(r, d);
}
function ugr(n, e, o) {
    let s = e.proxy === undefined && o?.() ? uao("ccr", e) : undefined;
    if (s) {
        return s(n);
    }
    return fetch(n, e);
}
export { uao, ugr };
