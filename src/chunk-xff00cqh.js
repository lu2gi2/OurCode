import { Yc } from "/$bunfs/root/chunk-qch5xj2a.js";
const Dzr = 255;
const r = 255;
const t = /[\x00-\x20\x7f~^:?*[\\]/;
const o = /[\p{Cc}\p{Cf}\uFFFD]/u;
const l = 250;
function e_n(e) {
    return Buffer.byteLength(e, "utf8") <= r && i(e);
}
function i(e) {
    return e.length <= Dzr && e !== "@" && e !== "HEAD" && Yc(e) && s(e) && !o.test(e) && !e.startsWith("-") && e.split("/").every((n)=>Buffer.byteLength(n, "utf8") <= l);
}
function s(e) {
    return !t.test(e) && !e.endsWith(".") && !e.includes("..") && !e.includes("@{") && e.split("/").every((n)=>n !== "" && !n.startsWith(".") && !n.endsWith(".lock"));
}
export { Dzr, e_n };
