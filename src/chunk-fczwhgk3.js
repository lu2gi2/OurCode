import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { zc } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { sn, Fp } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { o, T, u } from "/$bunfs/root/chunk-smx21d0k.js";
const l = p(()=>T(u({
        marketplace: o(),
        plugin: o()
    })));
function nXn() {
    let e = k("tengu_harbor_ledger", []);
    let n = l().safeParse(e);
    if (n.success) {
        return n.data;
    }
    return [];
}
function QN() {
    return sn("allow_channels") && k("tengu_harbor", false);
}
function wyt() {
    if (!k("tengu_harbor", false)) {
        return true;
    }
    let e = Fp("allow_channels");
    return e !== null && e !== "cache_miss" && e !== "route_missing";
}
function Z1t(e) {
    if (!e) {
        return false;
    }
    let { name, marketplace } = zc(e);
    if (!marketplace) {
        return false;
    }
    return nXn().some((t)=>t.plugin === name && t.marketplace === marketplace);
}
export { nXn, QN, wyt, Z1t };
