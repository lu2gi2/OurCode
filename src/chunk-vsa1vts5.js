import { gf } from "/$bunfs/root/chunk-bd805sh6.js";
import { Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { O5e } from "/$bunfs/root/chunk-2d9a83dh.js";
import { Joe } from "/$bunfs/root/chunk-tw5t5h13.js";
const Iu = "MEMORY.md";
const iN = 200;
const Roe = 25000;
const cwr = 4 * Roe;
const nRe = 200;
const xoe = 4096;
function glt(t) {
    let trimmed = t.trim();
    return {
        trimmed,
        lineCount: Lt(trimmed, `
`) + 1,
        byteCount: trimmed.length
    };
}
function nO(t) {
    return t.normalize("NFC").toLowerCase();
}
function KW(t) {
    let r = t?.lastIndexOf("/") ?? -1;
    if (r <= 0) {
        return "";
    }
    let n = t.slice(0, r + 1);
    if (n.split("/").some((e)=>e.startsWith("."))) {
        return "";
    }
    return n;
}
const T$e = "This directory already exists — write to it directly with the Write tool (do not run mkdir or check for its existence).";
const dwr = "Both directories already exist — write to them directly with the Write tool (do not run mkdir or check for their existence).";
function pF(t) {
    let r = "";
    for (let n of O5e(gf(t.replace(/\r\n?|[\u2028\u2029]/g, `
`)))){
        let e = n.codePointAt(0);
        let o = e !== 9 && e !== 10 && (e < 32 || e >= 127 && e <= 159);
        r += o ? "\uFFFD" : n;
    }
    return r;
}
function Poe(t) {
    return Joe(s(t));
}
function Rws(t) {
    return hlt(t) || /[\p{Cc}\u2028\u2029]/u.test(t);
}
function l7t(t) {
    return Poe(t.replace(/[\t\n\r\u2028\u2029]/g, ""));
}
const zgo = new Set([
    8204,
    8205,
    65038,
    65039
]);
const i = /^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;
function hlt(t) {
    let r = t.codePointAt(0);
    if (zgo.has(r) || r === 9 || r === 10 || r === 13) {
        return false;
    }
    return i.test(t) || r < 32 || r >= 127 && r <= 159;
}
function s(t) {
    let r = "";
    for (let n of t.replace(/\r\n?|[\u2028\u2029]/g, `
`)){
        if (hlt(n)) {
            continue;
        }
        r += n;
    }
    return r;
}
export { Iu, iN, Roe, cwr, nRe, xoe, glt, nO, KW, T$e, dwr, pF, Poe, Rws, l7t, zgo, hlt };
