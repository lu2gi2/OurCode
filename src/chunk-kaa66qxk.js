import { Ynn, Xnn } from "/$bunfs/root/chunk-6gk7mpsm.js";
import { yas } from "/$bunfs/root/chunk-8yak0fbv.js";
import { kp, BFe, C3e, ose, zjn, utn } from "/$bunfs/root/chunk-xb9cceab.js";
import { n4, qp } from "/$bunfs/root/chunk-kasbfbhj.js";
function m(t) {
    if (!("scope" in t)) {
        return;
    }
    let t_scope = t.scope;
    return n4.find((n)=>n === t_scope);
}
function tL(t, expanded, n) {
    let cliOwned = kp(expanded);
    let authoredUnexpanded = S(t, expanded);
    if (authoredUnexpanded === undefined && m(expanded)) {
        if (n?.detail === "origin") {
            return undefined;
        }
        return ose(expanded);
    }
    return zjn({
        authoredUnexpanded,
        expanded,
        cliOwned,
        detail: n?.detail
    });
}
function S(t, e) {
    let n = m(e);
    if (n === undefined) {
        return;
    }
    try {
        let r = qp(n, {
            expandVars: false
        }).servers[t];
        if (r && nWr(r, e)) {
            return r;
        }
        return undefined;
    } catch  {
        return;
    }
}
function M(t) {
    if (!URL.canParse(t)) {
        return false;
    }
    let { protocol } = new URL(t);
    return protocol === "http:" || protocol === "https:" || protocol === "ws:" || protocol === "wss:";
}
function nWr(t, e) {
    if ((t.type ?? "stdio") !== (e.type ?? "stdio")) {
        return false;
    }
    let n = BFe(t);
    let r = BFe(e);
    if (n !== null || r !== null) {
        if (!(()=>{
            if (n === null || r === null) {
                return false;
            }
            let l = Xnn(n);
            let o = utn(n, l);
            let s = utn(r);
            let g = (C)=>Ynn(C).every((y)=>y === "");
            if (g(n)) {
                return true;
            }
            if (o.scheme === "" && g(o.authority)) {
                return f(n, r);
            }
            let a = utn(l).authority.lastIndexOf("@");
            let d = s.authority.lastIndexOf("@");
            if (a === -1 !== (d === -1)) {
                return false;
            }
            if (o.scheme === "") {
                return s.scheme === "" && !M(r) && f(n, r);
            }
            if (s.scheme === "") {
                return false;
            }
            return f(o.scheme.toLowerCase(), s.scheme.toLowerCase()) && (a === -1 || f(o.authority.slice(0, a), s.authority.slice(0, d))) && f(o.authority.slice(a + 1), s.authority.slice(d + 1)) && f(o.rest, s.rest);
        })()) {
            return false;
        }
    }
    let i = C3e(t);
    let c = C3e(e);
    if (i !== null || c !== null) {
        if (i === null || c === null || i.length !== c.length || !i.every((u, l)=>f(u, c[l] ?? ""))) {
            return false;
        }
    }
    return h(p(t, "headers"), p(e, "headers")) && h(p(t, "env"), p(e, "env"));
}
function p(t, e) {
    let n = t[e];
    if (n && typeof n === "object") {
        return n;
    }
}
function h(t, e) {
    let n = Object.entries(t ?? {});
    let r = e ?? {};
    if (n.length !== Object.keys(r).length) {
        return false;
    }
    return n.every(([i, c])=>typeof r[i] === "string" && f(c, r[i]));
}
function f(t, e) {
    let n = Ynn(t);
    if (n.length === 1) {
        return t === e;
    }
    let r = n[0] ?? "";
    let i = n.at(-1) ?? "";
    if (!e.startsWith(r) || !e.endsWith(i)) {
        return false;
    }
    let r_length = r.length;
    let u = e.length - i.length;
    for(let l = 1; l < n.length - 1; l++){
        let o = n[l] ?? "";
        let s = e.indexOf(o, r_length);
        if (s === -1 || s + o.length > u) {
            return false;
        }
        r_length = s + o.length;
    }
    return r_length <= u;
}
function fd(t, e, n) {
    try {
        return yas(n, e, tL(t, e, {
            detail: "origin"
        }) ?? ose(e), S(t, e));
    } catch  {
        return "[mcp error detail unavailable: redaction failed]";
    }
}
export { tL, nWr, fd };
