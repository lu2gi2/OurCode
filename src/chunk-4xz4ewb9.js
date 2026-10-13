import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { rn } from "/$bunfs/root/chunk-223dyewd.js";
const Nye = 128;
const B2 = /^[\x21-\x7e]+$/;
const kpr = "io.modelcontextprotocol/tasks";
function gce(r) {
    return ne(r.replace(/[\p{Cc}\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu, ""), Nye);
}
function zne(r) {
    return ne(gce(r), 8);
}
function wro(r) {
    if (!Number.isFinite(r) || r <= 0) {
        return;
    }
    if (r < 1000) {
        return `${r}ms`;
    }
    return rn(r);
}
export { Nye, B2, kpr, gce, zne, wro };
