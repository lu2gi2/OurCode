import { v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { FN } from "/$bunfs/root/chunk-xgw72tt1.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { lstat, readdir, readlink, realpath, rmdir, unlink } from "fs/promises";
import { basename, dirname, isAbsolute, join, normalize, sep } from "path";
function Ku(n) {
    return n.toLowerCase().replace(/\u0131/g, "i").replace(/\u017F/g, "s");
}
function Vyr(n) {
    let e = "";
    for (let o of n){
        e += o.toLowerCase();
    }
    return Ku(e).replace(/\u03C2/g, "σ");
}
function qyr(n) {
    let e = O();
    if (e === "windows" || e === "macos") {
        return Ku(n);
    }
    return n;
}
function chs(n, e) {
    let o = null;
    let s = 0;
    let r = [];
    for (let a of n.split("\x00\x00")){
        let u = a.split("\x00");
        let c = u.find((C)=>C.startsWith("worktree "));
        if (c === undefined) {
            continue;
        }
        let f = c.slice(9);
        if (!axt(f)) {
            return null;
        }
        let h = normalize(f);
        r.push(F5(h));
        if (u.includes(`branch refs/heads/${e}`)) {
            s++;
            o ??= h;
        }
    }
    if (o === null || s !== 1) {
        return null;
    }
    let l = F5(o);
    let i = 0;
    for (let a of r){
        if (a === l) {
            i++;
        }
    }
    if (i === 1) {
        return o;
    }
    return null;
}
function Kyr(n) {
    if (O() === "windows") {
        return n.replaceAll("\\", "/");
    }
    return n;
}
function dc(n) {
    let e = n.replace(O() === "windows" ? /[\\/]+$/ : /\/+$/, "");
    if (e === "") {
        return n;
    }
    return e;
}
function F5(n) {
    let e = dc(n);
    return qyr(O() === "macos" ? e.normalize("NFC") : e);
}
function Mit(n, e) {
    let o = d(n);
    return e.some((s)=>d(normalize(s)) === o);
}
function sJt(n, e) {
    let o = F5(n);
    return e.find((s)=>F5(normalize(s)) === o) ?? null;
}
function d(n) {
    let e = dc(n);
    if (O() === "macos") {
        return e.normalize("NFC");
    }
    return e;
}
const L = /\p{Cc}/u;
function axt(n) {
    if (L.test(n) || !isAbsolute(n) || FN(n)) {
        return false;
    }
    return O() !== "windows" || /^(?:[A-Za-z]:[\\/]|[\\/]{2})/.test(n);
}
function iuo(n) {
    let e = new Set;
    for (let o of n.split("\x00\x00")){
        let s = o.split("\x00").find((a)=>a.startsWith("worktree "));
        if (s === undefined) {
            continue;
        }
        let r = s.slice(9);
        if (!axt(r)) {
            return false;
        }
        let l = normalize(r);
        let i = dc(O() === "macos" ? l.normalize("NFC") : l);
        if (e.has(i)) {
            return false;
        }
        e.add(i);
    }
    return true;
}
function Yyr(n, e) {
    if (!iuo(n)) {
        return null;
    }
    let o = (r, l)=>{
        if (O() === "macos") {
            return r.normalize("NFC") === l.normalize("NFC");
        }
        return r === l;
    };
    let s = null;
    for (let r of n.split("\x00\x00")){
        let l = r.split("\x00").find((a)=>a.startsWith("worktree "));
        if (l === undefined) {
            continue;
        }
        let i = normalize(l.slice(9));
        if (s === null && e.some((a)=>o(dc(i), dc(normalize(a))))) {
            s = i;
        }
    }
    return s;
}
async function zL(n, e) {
    return (await auo(n, e)).verdict;
}
async function auo(n, e) {
    let o = [];
    for(let l = dc(n); dirname(l) !== l && l !== e; l = dirname(l)){
        o.push(l);
    }
    if (o.length === 0) {
        return {
            verdict: "unknown"
        };
    }
    let s = O() === "windows";
    let r = null;
    for (let l of o.reverse()){
        let at = dc(l);
        let verdict = await readlink(at).then(()=>"link", (u)=>{
            let c = v(u);
            if (c === "EINVAL") {
                return "clear";
            }
            if (c === "ENOENT" || c === "ENOTDIR") {
                return "missing";
            }
            return "unknown";
        });
        if (verdict === "clear") {
            if (s) {
                let u = await lstat(at).catch(()=>null);
                if (u === null || !u.isDirectory()) {
                    return {
                        verdict: "unknown",
                        at
                    };
                }
                let c = r ?? await realpath(dirname(at)).catch(()=>null);
                let f = await realpath(at).catch(()=>null);
                if (c === null || f === null || Vyr(dc(f)) !== Vyr(join(dc(c), basename(at)))) {
                    return {
                        verdict: "unknown",
                        at
                    };
                }
                r = f;
            }
            continue;
        }
        if (verdict === "missing" && !await luo(at)) {
            return {
                verdict: "unknown",
                at
            };
        }
        return {
            verdict,
            at
        };
    }
    return {
        verdict: "clear"
    };
}
async function luo(n) {
    if (O() !== "windows") {
        return true;
    }
    return lstat(`${n}.lnk`).then(()=>false, (e)=>z(e));
}
async function iNn(n, e) {
    return await zL(n, e) === "clear";
}
async function iJt(n, e, o) {
    if (!await iNn(n, o)) {
        return false;
    }
    let s = await realpath(n).catch(()=>null);
    if (s === null || d(s) !== d(e)) {
        return false;
    }
    let r = await lstat(dc(n)).catch(()=>null);
    if (r === null || !r.isDirectory()) {
        return false;
    }
    return INe(n);
}
async function INe(n) {
    if (O() !== "windows") {
        return true;
    }
    let e = await realpath(dirname(n)).catch(()=>null);
    return !await b(n, e == null ? null : Ku(join(e, basename(n))));
}
async function b(n, e) {
    try {
        await unlink(n);
        t(`[worktree] unlinked reparse point before removal: ${n}`);
        return false;
    } catch  {}
    try {
        await rmdir(n);
        t(`[worktree] removed reparse point or empty directory before removal: ${n}`);
        return false;
    } catch (error) {
        if (z(error)) {
            return false;
        }
        if (v(error) !== "ENOTEMPTY") {
            let i = await readlink(n).then(()=>"link", (a)=>{
                if (v(a) === "EINVAL" || z(a)) {
                    return "not-link";
                }
                return "unknown";
            }) !== "not-link" || e == null ? null : await realpath(n).then((a)=>Ku(a)).catch(()=>null);
            if (i == null || i !== e && !i.startsWith(e + sep)) {
                t(`[worktree] refusing to enumerate unremovable entry before removal: ${n}`, {
                    level: "warn"
                });
                return true;
            }
        }
    }
    let o = await readdir(n, {
        withFileTypes: true
    }).catch((r)=>{
        if (z(r)) {
            return [];
        }
        return null;
    });
    if (o == null) {
        t(`[worktree] could not enumerate ${n} before removal; not certifying`, {
            level: "warn"
        });
        return true;
    }
    let s = false;
    for (let r of o){
        if (r.isSymbolicLink() || r.isDirectory()) {
            s = await b(join(n, r.name), e) || s;
        }
    }
    return s;
}
export { Ku, Vyr, qyr, chs, Kyr, dc, F5, Mit, sJt, axt, iuo, Yyr, zL, auo, luo, iNn, iJt, INe };
