let a = null;
let s = null;
let u = null;
function sIs() {
    if (!u) {
        u = new Intl.DisplayNames([
            "en"
        ], {
            type: "language"
        });
    }
    return u;
}
function ra() {
    if (!a) {
        a = new Intl.Segmenter(undefined, {
            granularity: "grapheme"
        });
    }
    return a;
}
function KSe(e) {
    if (!e) {
        return "";
    }
    return ra().segment(e)[Symbol.iterator]().next().value?.segment ?? "";
}
function D1(e) {
    if (!e) {
        return "";
    }
    let t = "";
    for (let { segment } of ra().segment(e)){
        t = segment;
    }
    return t;
}
function _Z(e) {
    if (!e) {
        return 0;
    }
    let t = 0;
    for (let r of ra().segment(e)){
        t++;
    }
    return t;
}
function wpe(e) {
    if (!e) {
        return [];
    }
    return Array.from(ra().segment(e), (t)=>t.segment);
}
function aGn(e) {
    if (e.length < 2) {
        return e;
    }
    let t = e.join("");
    if (!y(t)) {
        return e;
    }
    let r = [];
    let n = "";
    let i = 0;
    let length = e[0].length;
    for (let { segment, index } of ra().segment(t)){
        while(index >= length && i < e.length - 1){
            r.push(n);
            n = "";
            i++;
            length += e[i].length;
        }
        n += segment;
    }
    r.push(n);
    while(r.length < e.length){
        r.push("");
    }
    return r;
}
function y(e) {
    for(let t = 0; t < e.length; t++){
        let r = e.charCodeAt(t);
        if (r >= 128 || r === 13) {
            return true;
        }
    }
    return false;
}
function uAo() {
    if (!s) {
        s = new Intl.Segmenter(undefined, {
            granularity: "word"
        });
    }
    return s;
}
function iIs(e) {
    let t = e.trim();
    if (t === "") {
        return 0;
    }
    let length = t.split(/\s+/).length;
    let n = 0;
    for (let i of uAo().segment(t)){
        if (i.isWordLike) {
            n++;
        }
    }
    return Math.max(length, n);
}
const m = new Map;
function pAo(style, numeric) {
    let r = `${style}:${numeric}`;
    let n = m.get(r);
    if (!n) {
        n = new Intl.RelativeTimeFormat("en", {
            style,
            numeric
        });
        m.set(r, n);
    }
    return n;
}
let g = null;
function aIs() {
    if (!g) {
        g = Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    return g;
}
let l = null;
function lIs() {
    if (l === null) {
        try {
            let e = Intl.DateTimeFormat().resolvedOptions().locale;
            l = new Intl.Locale(e).language;
        } catch  {
            l = undefined;
        }
    }
    return l;
}
const f = new WeakMap;
function p(e) {
    if (!e) {
        return "";
    }
    let t = f.get(e);
    if (t !== undefined) {
        return t;
    }
    let r = Object.entries(e).sort(([i], [o])=>{
        if (i < o) {
            return -1;
        }
        if (i > o) {
            return 1;
        }
        return 0;
    });
    let n = "";
    for (let [i, o] of r){
        n += `${i}=${String(o)};`;
    }
    f.set(e, n);
    return n;
}
const c = new Map;
function nPe(e, timeZone) {
    if (timeZone) {
        return {
            ...e,
            timeZone
        };
    }
    return e;
}
function L1(e, t) {
    let r = `${e ?? ""}|${p(t)}`;
    let n = c.get(r);
    if (!n) {
        n = new Intl.DateTimeFormat(e, t);
        c.set(r, n);
    }
    return n;
}
const d = new Map;
function cIs(e, t) {
    let r = `${e ?? ""}|${p(t)}`;
    let n = d.get(r);
    if (!n) {
        n = new Intl.NumberFormat(e, t);
        d.set(r, n);
    }
    return n;
}
export { sIs, ra, KSe, D1, _Z, wpe, aGn, uAo, iIs, pAo, aIs, lIs, nPe, L1, cIs };
