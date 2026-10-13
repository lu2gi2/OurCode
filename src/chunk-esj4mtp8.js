import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { Sdn, Aee } from "/$bunfs/root/chunk-ra821xz1.js";
import { aGn } from "/$bunfs/root/chunk-98pm569t.js";
const s = "\x1B[0m";
function i(t) {
    if (ge.level > 0 && t.includes(s)) {
        return s + t.replace(/\r?\n/g, `${s}$&${s}`) + s;
    }
    return ge.reset(t);
}
const c = new Map(Object.entries({
    keyword: ge.blue,
    built_in: ge.cyan,
    type: ge.cyan.dim,
    literal: ge.blue,
    number: ge.green,
    regexp: ge.red,
    string: ge.red,
    subst: i,
    symbol: i,
    class: ge.blue,
    function: ge.yellow,
    title: i,
    "title.function": ge.yellow,
    "title.class": ge.blue,
    params: i,
    comment: ge.green,
    doctag: ge.green,
    meta: ge.grey,
    "meta-keyword": i,
    "meta-string": i,
    "meta.keyword": i,
    "meta.string": i,
    section: i,
    tag: ge.grey,
    name: ge.blue,
    attr: ge.cyan,
    attribute: i,
    variable: i,
    bullet: i,
    code: i,
    emphasis: ge.italic,
    strong: ge.bold,
    link: ge.underline,
    quote: i,
    addition: ge.green,
    deletion: ge.red
}));
function m(t) {
    let e = t.replace(/^hljs-/, "");
    while(true){
        let r = c.get(e);
        if (r) {
            return r;
        }
        let n = e.lastIndexOf(".");
        if (n < 0) {
            return;
        }
        e = e.slice(0, n);
    }
}
function d(t) {
    let e = [];
    let r = [];
    p(t, e, r);
    let n = aGn(r);
    if (n === r) {
        return;
    }
    e.forEach(({ siblings, at }, l)=>{
        siblings[at] = n[l];
    });
}
function p(t, e, r) {
    t.children.forEach((n, at)=>{
        if (typeof n === "string") {
            e.push({
                siblings: t.children,
                at
            });
            r.push(n);
        } else {
            p(n, e, r);
        }
    });
}
function u(t) {
    if (typeof t === "string") {
        return t;
    }
    let e = t.children.map(u).join("");
    let r = t.scope ?? t.kind;
    let n = r ? m(r) : undefined;
    if (n) {
        return n(e);
    }
    return e;
}
function highlight(t, e) {
    let r = e?.language;
    if (!r) {
        return t;
    }
    try {
        let language = Aee(r);
        if (!language) {
            return t;
        }
        let o = Sdn().highlight(t, {
            language,
            ignoreIllegals: true
        });
        let a = o._emitter ?? o.emitter;
        let l = a?.rootNode ?? a?.root;
        if (!l || typeof l === "string") {
            return t;
        }
        d(l);
        return l.children.map(u).join("");
    } catch  {
        return t;
    }
}
function supportsLanguage(t) {
    return Aee(t) !== null;
}
const h = {
    highlight,
    supportsLanguage
};
function SU() {
    return h;
}
export { SU };
