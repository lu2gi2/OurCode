import { Yc } from "/$bunfs/root/chunk-qch5xj2a.js";
import { WJ } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { oTn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { qMn } from "/$bunfs/root/chunk-6z3pawfc.js";
import { posix } from "path";
const D = posix.dirname(WJ);
const l = "/mnt/user-data/working";
const hVr = posix.join(l, WJ);
const Bze = 32;
const fte = 524288;
const Ezt = 2097152;
const yVr = 200;
const E = 237;
const a = 4;
const NX = "CLAUDE.md";
const MEe = "rules";
const jze = "output-styles";
const ebt = "settings.json";
const e = ".md";
const p = /[\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u2024-\u2026\u2044\u2215\u2216\u2236\u2571\u2572\u27CB\u27CD\u29F5\u29F8\u29F9\u02D0\u05C3\u0589\uA789\uFE13\uFE52\uFE55\uFE68\uFF0E\uFF0F\uFF1A\uFF3C\uFF61\u3002]|(?!\u0020)\p{Zs}/u;
const c = /^\p{M}/u;
function d(t) {
    return t !== "" && t === t.trim() && Buffer.byteLength(t, "utf8") <= E && !t.startsWith(".") && !qMn(t) && !t.includes("\\") && !p.test(t) && !c.test(t) && !t.endsWith("~") && !t.endsWith(".swp") && !t.endsWith(".tmp");
}
function u(t) {
    return t.length > e.length && t.endsWith(e);
}
function kzt(t) {
    return oTn(t);
}
function M(t) {
    return u(kzt(t));
}
function HEe(t) {
    if (t.length > yVr || !Yc(t) || t.normalize("NFC") !== t) {
        return null;
    }
    let n = t.split("/");
    if (!n.every(d)) {
        return null;
    }
    let [i, ...o] = n;
    if (o.length === 0) {
        if (i === NX) {
            return "claude_md";
        }
        return null;
    }
    let s = o.slice(0, -1);
    let _ = o.at(-1) ?? "";
    if (!u(_) || s.some(M)) {
        return null;
    }
    if (o.length > a) {
        return null;
    }
    if (i === MEe) {
        return "rule";
    }
    if (i === jze) {
        return "output_style";
    }
    return null;
}
function tbt(t) {
    return HEe(t) !== null;
}
function W7e(destination) {
    let kind = HEe(destination);
    if (kind === null) {
        return null;
    }
    return {
        destination,
        kind
    };
}
export { hVr, Bze, fte, Ezt, yVr, NX, MEe, jze, ebt, kzt, HEe, tbt, W7e };
