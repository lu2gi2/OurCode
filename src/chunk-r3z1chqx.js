import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { qy, Rn } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne, jl, c6, Ww, Nr, dy } from "/$bunfs/root/chunk-qch5xj2a.js";
const s = /[\p{Pi}\p{Pf}\u201a\u201e\u201f\u2e32\u2e34\u2e41\u2e49\u2e42\u3003\u300c-\u300f\ufe41-\ufe44\u301d-\u301f\u275b-\u2760\u276e\u276f\u{1f676}-\u{1f678}\u2032-\u2037\u2057\u02b9\u02ba\u0374\u02bd-\u02bf\u02c8\u02d2\u02d3\u02ca\u02ce\u02cf\u02dd\u02f4-\u02f6\u02ee\u00b4\u0384\u0385\u1fbd\u1fbf\u1fcd-\u1fcf\u1fdd-\u1fdf\u1ffd\u1ffe\u05f3\u05f4\u0559-\u055b\u07f4\u07f5\ua67f\ua78b\ua78c\uff02\uff07\uff62\uff63]/gu;
const i = /(?<![^\s\p{P}])\p{M}+/gu;
function EH(e) {
    return Rn(orn(Ww(e))).replace(/ {2,}/g, " ").trim();
}
const a = /\x1b\[[\x30-\x3f]*[\x20-\x2f]*[\x40-\x7e]|\x1b[\]PX^_][^\x1b\x07]*(?:\x07|\x1b\\)/g;
const d = 4;
function orn(e) {
    let n = e;
    for(let t = 0; t < d; t++){
        let r = n.replace(a, "");
        if (r === n) {
            break;
        }
        n = r;
    }
    return n;
}
function Et(e, n = 160) {
    return WY(EH(g(e, n)).normalize("NFC").replace(/[`\uff40\u02cb\u1fef\u2035]/g, "'").replace(i, ""), n);
}
const x = new RegExp(`[^\\S ]|[${qy}]`, "u");
function Cut(e, n) {
    return e.length <= n && !x.test(e) && Et(e, n) === e.replaceAll("`", "'");
}
function vHt(e, n = 2000) {
    let t = EH(g(e, n));
    if (t.length > n) {
        return `${ne(t, n)}\u2026`;
    }
    return t;
}
function WY(e, n = 2000) {
    if (e.length > n) {
        return `${ne(e, n)}\u2026`;
    }
    return e;
}
function $z(e, n = 160) {
    let t = Ww(e).replace(/[\p{Cc}\p{Cf}]/gu, (r)=>{
        if (/\s/.test(r)) {
            return r;
        }
        return "";
    }).replace(/\s+/g, " ").trim();
    if (t.length > n) {
        return `${ne(t, n)}\u2026`;
    }
    return t;
}
function Js(e, n = 300) {
    return Et(e ?? "", n);
}
function je(e, n = 300) {
    return Et(e ?? "", n).replace(s, "").replace(/[\u02bb\u02bc]/g, "’").replace(/"/g, "”").replace(/'/g, "’").replace(i, "");
}
function ec(e, n) {
    let t = Nr(dy(Ww(e).replace(/\s+/g, " "))).normalize("NFC").replace(s, "'").replace(/["\u02BB\u02BC]/g, "'").replace(i, "").trim();
    if (!t) {
        return "";
    }
    return `\u201C${n ? c6(t, n.head, n.tail, ()=>"…") : t}\u201D`;
}
function aPs(e, n) {
    let t = ec(e) || "“”";
    if (t.length <= n) {
        return t;
    }
    return ec(e, {
        head: n - 3,
        tail: 0
    });
}
function Yko(e, { head, tail }) {
    if (e.length <= head + tail) {
        return e;
    }
    let r = head > 0 ? ne(e, head) : "";
    let u = tail > 0 ? jl(e, tail) : "";
    let o = (r.match(/\u201C/g)?.length ?? 0) > (r.match(/\u201D/g)?.length ?? 0);
    let c = u.indexOf("”");
    let f = u.indexOf("“");
    let p = c !== -1 && (f === -1 || c < f);
    return `${r}${o === p ? "…" : o ? "…”…" : "…“…"}${u}`;
}
function g(e, n) {
    let t = ne(e, n * 8);
    if (t.length === e.length) {
        return t;
    }
    let r = /\x1b(?:[\]PX^_][^\x1b\x07]*\x1b?|\[[\x30-\x3f]*[\x20-\x2f]*)$/.exec(t);
    if (r === null) {
        return t;
    }
    let u = e.slice(r.index);
    if (u[1] === "[" ? /^\x1b\[[\x30-\x3f]*[\x20-\x2f]*[\x40-\x7e]/.test(u) : /^\x1b[\]PX^_][^\x1b\x07]*(?:\x07|\x1b\\)/.test(u)) {
        return t.slice(0, r.index);
    }
    return t;
}
function Yk(e, { isComposed } = {}) {
    let t = l(e);
    if (isComposed?.(e)) {
        return vHt(t, 2000);
    }
    return Et(t, 500);
}
export { EH, orn, Et, Cut, vHt, WY, $z, Js, je, ec, aPs, Yko, Yk };
