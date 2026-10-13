import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { cOn, dB, G3t } from "/$bunfs/root/chunk-yq147k4z.js";
import { OU, AGr, CGr, aI } from "/$bunfs/root/chunk-cgpqvjrr.js";
function qme() {
    return OU().cachedSystemTheme() ?? s() ?? "dark";
}
function MKo() {
    return OU().cachedSystemTheme() ?? s();
}
function Y_n() {
    return OU().cachedSystemTheme();
}
function UWt(e) {
    OU().setSystemTheme(e);
}
function g_t(e) {
    return OU().onSystemThemeChange(e);
}
function BWt(e) {
    if (e === "auto") {
        return qme();
    }
    if (cOn(e)) {
        return e;
    }
    let t = aI(e);
    return t && AGr(t) || "dark";
}
function yze(e) {
    let t = dB(BWt(e));
    let n = aI(e);
    if (!n) {
        return t;
    }
    return G3t(t, CGr(n)?.overrides);
}
function HKo(e) {
    let t = i(e);
    if (!t) {
        return;
    }
    if (0.2126 * t.r + 0.7152 * t.g + 0.0722 * t.b > 0.5) {
        return "light";
    }
    return "dark";
}
function i(e) {
    let t = /^rgba?:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})/i.exec(e);
    if (t) {
        return {
            r: m(t[1]),
            g: m(t[2]),
            b: m(t[3])
        };
    }
    let n = /^#([0-9a-f]+)$/i.exec(e);
    if (n && n[1].length % 3 === 0) {
        let r = n[1];
        let o = r.length / 3;
        return {
            r: m(r.slice(0, o)),
            g: m(r.slice(o, 2 * o)),
            b: m(r.slice(2 * o))
        };
    }
}
function m(e) {
    let t = 16 ** e.length - 1;
    return parseInt(e, 16) / t;
}
function s() {
    let a_COLORFGBG = a.COLORFGBG;
    if (!a_COLORFGBG) {
        return;
    }
    let n = a_COLORFGBG.split(";").at(-1);
    if (n === undefined || n === "") {
        return;
    }
    let r = Number(n);
    if (!Number.isInteger(r) || r < 0 || r > 15) {
        return;
    }
    if (r <= 6 || r === 8) {
        return "dark";
    }
    return "light";
}
export { qme, MKo, Y_n, UWt, g_t, BWt, yze, HKo };
