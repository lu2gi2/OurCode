import { nU } from "/$bunfs/root/chunk-bd805sh6.js";
import { MO } from "/$bunfs/root/chunk-svqqgdca.js";
const LAo = new Set([
    "http",
    "https",
    "ws",
    "wss",
    "ftp"
]);
function _q(t) {
    t = t.replace(/^[\x00-\x20]+/, "").replace(/[\t\n\r]/g, "");
    let n = t.indexOf("://");
    if (n === -1) {
        return false;
    }
    let r = t.slice(n + 3);
    let s = t.slice(0, n).toLowerCase();
    if (LAo.has(s)) {
        let o = r.match(/^[/\\]+/)?.[0] ?? "";
        if (o.includes("\\")) {
            return true;
        }
        r = r.slice(o.length);
    }
    let e = r.search(/[/?#]/);
    return (e === -1 ? r : r.slice(0, e)).includes("\\");
}
const nr = "github.com";
const NAo = [
    `git@${nr}:`,
    `ssh://git@${nr}/`
];
const m = [
    `https://${nr}`,
    `https://${nr}/`,
    nr
];
const x = `users.noreply.${nr}`;
const a = "https://api.github.com";
const u = /[:/\\?#@\s]/;
const s8e = /^(?!\.{1,2}$)[a-z0-9.-]+$/;
const oon = /^(?!\.{1,2}$)[a-zA-Z0-9._-]+$/;
function _C(t) {
    let n = c(t.replace(/[\t\n\r]/g, "").toLowerCase());
    if (n === "" || u.test(n)) {
        return n;
    }
    try {
        let r = new URL(`https://${n}`);
        if (r.username !== "" || r.password !== "" || r.port !== "" || r.pathname !== "/" || r.search !== "" || r.hash !== "") {
            return n;
        }
        return c(r.hostname);
    } catch  {
        return n;
    }
}
const i8e = MO(function(n) {
    let r = _C(n);
    while(r.startsWith("www.")){
        r = r.slice(4);
    }
    return r;
}, (t)=>t, 50);
function lDt(t, n) {
    return i8e(t) === n;
}
function ho(t) {
    return lDt(t, nr);
}
function Rse(t, n) {
    if (!t || !n) {
        return false;
    }
    let r = _C(t);
    return r !== "" && r === _C(n);
}
function TZ(t) {
    if (ho(t)) {
        return a;
    }
    return `https://${t}/api/v3`;
}
function VIs(t) {
    if (ho(t)) {
        return `${a}/graphql`;
    }
    return `https://${t}/api/graphql`;
}
function i(t) {
    return /[%\x00-\x1f\x7f-\u{10FFFF}]/u.test(t);
}
function bq(t) {
    if (nU(t)) {
        return true;
    }
    if (t.includes("://")) {
        if (_q(t)) {
            return true;
        }
        try {
            let e = new URL(t);
            if (e.protocol === "http:" || e.protocol === "https:") {
                return false;
            }
            return i(e.hostname);
        } catch  {
            return true;
        }
    }
    let n = t.indexOf(":");
    let r = t.indexOf("@");
    if (n >= 0 && r > n) {
        return true;
    }
    let s = t.match(/^(?:[^@]+@)?([^:]+):/)?.[1];
    if (s) {
        return i(s);
    }
    return false;
}
function c(t) {
    let t_length = t.length;
    while(t_length > 0 && t[t_length - 1] === "."){
        t_length--;
    }
    return t.slice(0, t_length);
}
export { LAo, _q, nr, NAo, s8e, oon, _C, i8e, lDt, ho, Rse, TZ, VIs, bq };
