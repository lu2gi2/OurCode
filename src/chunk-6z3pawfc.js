import { Xv } from "/$bunfs/root/chunk-xgw72tt1.js";
import { Qe, HDt } from "/$bunfs/root/chunk-qch5xj2a.js";
function t(n) {
    return HDt(Qe(n, "."), " ");
}
function $so(n) {
    return /^con(in|out)\$$/i.test(t(n));
}
const e = /[<>"|?*\\\x00-\x1f]/;
function xds(n) {
    return n.split("/").some((o)=>e.test(o));
}
function qMn(n) {
    return n.split("/").some((o)=>o.includes(":") || o.endsWith(".") || o.endsWith(" ") || Xv(t(o).replace(/ {2,}/g, " ")) || $so(o));
}
const r = /^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;
function i(n) {
    return HDt(Qe(n, ":"), ". ");
}
function Y5t(n) {
    return n.split("/").some((o)=>r.test(i(o)));
}
export { $so, xds, qMn, Y5t };
