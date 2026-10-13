import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { X } from "/$bunfs/root/chunk-bd805sh6.js";
import { o, oe, ue } from "/$bunfs/root/chunk-smx21d0k.js";
const VDs = '<wake reason="external-event"';
function qDs(n) {
    return n.startsWith(VDs);
}
const y = /^[a-z0-9-]{1,32}$/;
const b = /^[a-z0-9_.-]{1,64}$/;
const x = 2048;
const c = /([a-z][a-z-]*)="([^"\s]{0,256})"/g;
const w = new Set([
    "reason",
    "current-time"
]);
const R = new Set([
    "source",
    "kind",
    "from",
    "trust",
    "untrusted-keys"
]);
const W = p(()=>ue(o(), oe()));
function s(n) {
    return n.trim() === "";
}
function B4r(n) {
    if (!qDs(n)) {
        return null;
    }
    let l = n.indexOf(">");
    if (l === -1 || l > x) {
        return null;
    }
    let k = n.slice(5, l);
    if (!s(k.replace(c, " "))) {
        return null;
    }
    for (let e of k.matchAll(c)){
        if (!w.has(e[1])) {
            return null;
        }
    }
    let i = n.indexOf("<event ", l + 1);
    if (i === -1 || !s(n.slice(l + 1, i))) {
        return null;
    }
    let u = n.indexOf(">", i);
    if (u === -1 || u - i > x) {
        return null;
    }
    let f = n.indexOf("</event>", u + 1);
    if (f === -1) {
        return null;
    }
    let T = f + 8;
    let d = n.indexOf("</wake>", T);
    if (d === -1 || !s(n.slice(T, d))) {
        return null;
    }
    if (!s(n.slice(d + 7))) {
        return null;
    }
    let t = new Map;
    let h = n.slice(i + 6, u);
    if (!s(h.replace(c, " "))) {
        return null;
    }
    for (let e of h.matchAll(c)){
        if (!R.has(e[1])) {
            return null;
        }
        let _ = e[1];
        if (!t.has(_)) {
            t.set(_, e[2]);
        }
    }
    let source = t.get("source");
    let kind = t.get("kind");
    if (source === undefined || kind === undefined || !y.test(source) || !b.test(kind)) {
        return null;
    }
    let r = n.slice(u + 1, f);
    let g = r.indexOf("<!--");
    if (g !== -1) {
        if (!s(r.slice(0, g))) {
            return null;
        }
        let e = r.indexOf("-->", g + 4);
        if (e === -1) {
            return null;
        }
        r = r.slice(e + 3);
    }
    let A = r.trim();
    if (!A.startsWith("{")) {
        return null;
    }
    let a;
    try {
        a = X(A);
    } catch  {
        return null;
    }
    if (typeof a !== "object" || a === null || Array.isArray(a)) {
        return null;
    }
    let v = W().safeParse(a);
    if (!v.success) {
        return null;
    }
    let from = t.get("from");
    let untrustedKeys = (t.get("untrusted-keys") ?? "").split(",").filter((e)=>e !== "");
    return {
        source,
        kind,
        ...from !== undefined && {
            from
        },
        data: v.data,
        untrustedKeys
    };
}
function zGt(n) {
    return n.source === "session-inbox" && n.kind === "message.received";
}
export { VDs, qDs, B4r, zGt };
