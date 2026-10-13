import "/$bunfs/root/chunk-wkmq9ht0.js";
import { v, z, Jc } from "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import { On, Gi } from "/$bunfs/root/chunk-xgw72tt1.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import { Ph, Wy } from "/$bunfs/root/chunk-3fj60qgx.js";
import "/$bunfs/root/chunk-se8vehhp.js";
import { Hg, ie } from "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-etbngzss.js";
import { NHt, Xzn } from "/$bunfs/root/chunk-2d9a83dh.js";
import "/$bunfs/root/chunk-kgp7t7yx.js";
import { Hzt } from "/$bunfs/root/chunk-me4tj4a2.js";
import { OSn } from "/$bunfs/root/chunk-qkqvbzgj.js";
import "/$bunfs/root/chunk-hz24p3zh.js";
import "/$bunfs/root/chunk-4vzryamf.js";
import { Lss, Nss, $ss as ignoreFile } from "/$bunfs/root/chunk-qwvy7ma3.js";
import "/$bunfs/root/chunk-v214ecah.js";
import { ai, U5e, qSe } from "/$bunfs/root/chunk-zwxj12s4.js";
import "/$bunfs/root/chunk-nnawdxg4.js";
import "/$bunfs/root/chunk-79wfew46.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { constants } from "fs";
import { basename, dirname, isAbsolute, join, parse, resolve, sep } from "path";
const S = 90000;
const A = "writer-locks";
const b = 8192;
const P = ".git";
const U = sep === "\\" ? /[\\/]+/ : /\/+/;
export async function sweepCheckoutSessionTrash(e, cutoffMs, t = Hzt()) {
    let tally = {
        removed: 0,
        errors: 0,
        newestKeptMs: null
    };
    try {
        let s = await C(t, join(e, Xzn, "objects", "info", "alternates"), e, (c)=>c.split(/\r?\n/, 1)[0] ?? "");
        if (s === "absent" || s === "leads_nowhere" || s === "malformed" || s !== "refused" && basename(s) !== "objects") {
            return tally;
        }
        if (s === "refused") {
            l(tally);
            return tally;
        }
        let n = dirname(s);
        let identity = await t.fs.lstat(n, {
            bigint: true
        });
        let a = await t.fs.lstat(join(n, "HEAD")).catch(()=>null);
        if (!a?.isFile() && !a?.isSymbolicLink()) {
            l(tally);
            return tally;
        }
        await I(t, {
            kind: "git_dir",
            dir: n,
            identity
        }, {
            cutoffMs,
            isLive: await N(t, e, dirname(n)),
            tally
        });
        for (let c of (await Q(t, n, tally))){
            await I(t, c, {
                cutoffMs,
                isLive: await N(t, e, c.dir),
                tally
            }).catch(()=>l(tally));
        }
    } catch  {
        l(tally);
    }
    return tally;
}
function g(e) {
    e.newestKeptMs = Date.now();
}
function h(e, i, t = sep) {
    let [r, s] = [
        e,
        i
    ].map((n)=>On((t === "\\" ? n.replaceAll("/", t) : n).replace(/^[a-z](?=:)/, (o)=>o.toUpperCase())));
    return r === s;
}
function q(realRoot, i) {
    let t = (r)=>r.replace(/[A-Z]/g, (s)=>s.toLowerCase());
    return h(realRoot, i) || h(t(realRoot), t(i));
}
function l(tally) {
    tally.errors++;
    g(tally);
}
const W = (e)=>e.replace(/(?<![\r\n])[\r\n]+$/, "");
async function C(e, i, t, r, s) {
    let n = await M(e, i, r);
    if (n === "absent" || n === "malformed" || n === "refused") {
        return n;
    }
    if (Gi(n, t)) {
        return "refused";
    }
    let o = s === undefined ? n : resolve(s, n);
    if (!isAbsolute(o)) {
        return "refused";
    }
    let a = await E(e, o);
    if (a === "plainly") {
        return o;
    }
    if (a === "missing" && !/[\r\n]/.test(n)) {
        return "leads_nowhere";
    }
    return "refused";
}
async function E(e, i) {
    let { root } = parse(i);
    let r = root;
    for (let s of i.slice(root.length).split(U)){
        if (s === "") {
            continue;
        }
        r = join(r, s);
        try {
            if ((await e.fs.lstat(r)).isSymbolicLink()) {
                return "refused";
            }
        } catch (error) {
            if (Jc(error)) {
                return "missing";
            }
            return "refused";
        }
    }
    return "plainly";
}
async function M(e, i, t) {
    try {
        let r = await ie().readFileFdGated(i, b);
        if (r === null) {
            let n = await e.fs.lstat(i);
            if (n.isFile() && n.size <= b) {
                return "refused";
            }
            return "malformed";
        }
        let s = t(r.content);
        if (s === "" || s.includes("\x00")) {
            return "malformed";
        }
        return s;
    } catch (error) {
        if (z(error)) {
            return "absent";
        }
        return "refused";
    }
}
async function N(e, i, t) {
    let r = dirname(dirname(i));
    let s = join(Ph(await Wy(t, undefined), r), NHt);
    let n = await Promise.all(D([
        i,
        s
    ]).map((o)=>J(e, o)));
    return (o)=>n.some((a)=>a(o));
}
async function J(e, i) {
    let t = join(i, A);
    let r;
    try {
        r = await e.fs.readdir(t);
    } catch (error) {
        if (z(error)) {
            return ()=>false;
        }
        return ()=>true;
    }
    let s = new Set;
    for (let n of r){
        let o = n.endsWith(".writer") ? await e.fs.lstat(join(t, n)).catch(()=>null) : null;
        if (o !== null && Date.now() - o.mtimeMs < S) {
            s.add(n.slice(0, -7));
        }
    }
    return (n)=>s.has(n);
}
async function Q(e, i, tally) {
    let r = join(i, "worktrees");
    let s = await e.fs.lstat(r).catch((a)=>{
        if (z(a)) {
            return "absent";
        }
        return null;
    });
    if (s === "absent") {
        if (!(await e.fs.lstat(i).catch(()=>null))?.isDirectory()) {
            l(tally);
        }
        return [];
    }
    let n = s?.isDirectory() && await E(e, r) === "plainly" ? await e.fs.readdir(r).catch(()=>null) : null;
    if (n === null) {
        l(tally);
        return [];
    }
    let o = [];
    for (let a of n){
        let c = join(r, a);
        let m = await e.fs.lstat(c).catch(()=>null);
        if (m === null || m.isSymbolicLink()) {
            l(tally);
            continue;
        }
        if (!m.isDirectory()) {
            continue;
        }
        let f = await C(e, join(c, "gitdir"), c, (p)=>p.trimEnd(), c);
        if (f === "leads_nowhere") {
            continue;
        }
        if (f === "absent" || f === "refused" || f === "malformed" || basename(f) !== P) {
            l(tally);
            continue;
        }
        let d = dirname(f);
        let gitFileLine = await M(e, f, W);
        if (gitFileLine === "absent" || gitFileLine === "refused") {
            l(tally);
            continue;
        }
        if (gitFileLine === "malformed" || !gitFileLine.startsWith("gitdir: ")) {
            g(tally);
            continue;
        }
        let T = gitFileLine.slice(8);
        if (Gi(T, d)) {
            g(tally);
            continue;
        }
        let O = await E(e, resolve(d, T));
        if (O === "refused") {
            l(tally);
            continue;
        }
        if (O === "missing") {
            g(tally);
            continue;
        }
        if (h(resolve(d, T), c)) {
            o.push({
                kind: "linked_worktree",
                dir: d,
                gitFileLine
            });
        } else {
            let [p, R] = await Promise.all([
                resolve(d, T),
                c
            ].map((Y)=>e.fs.lstat(Y, {
                    bigint: true
                }).catch(()=>null)));
            if (p?.ino && p.dev === R?.dev && p.ino === R.ino) {
                l(tally);
            } else {
                g(tally);
            }
        }
    }
    return o;
}
async function X(e, i) {
    switch(i.kind){
        case "git_dir":
            {
                let t = await e.lstat("");
                return t.dev === i.identity.dev && t.ino === i.identity.ino;
            }
        case "linked_worktree":
            return V(e, i.gitFileLine);
    }
}
const Z = {
    git_dir: {
        trashName: Lss,
        ignoreFile: undefined
    },
    linked_worktree: {
        trashName: Nss,
        ignoreFile
    }
};
async function V(e, gitFileLine) {
    let t = await e.open(P, constants.O_RDONLY | constants.O_NONBLOCK).catch(()=>null);
    if (t === null) {
        return false;
    }
    try {
        let [r, s] = await Promise.all([
            t.stat({
                bigint: true
            }),
            e.lstat(P)
        ]);
        if (r.dev !== s.dev || r.ino !== s.ino) {
            return false;
        }
        let n = Buffer.alloc(b + 1);
        let { bytesRead } = await t.read(n, 0, n.length, 0);
        return bytesRead <= b && W(n.toString("utf8", 0, bytesRead)) === gitFileLine;
    } catch  {
        return false;
    } finally{
        await t.close().catch(()=>{});
    }
}
function ee(e, i, t) {
    let { root, dir, base } = e.path.parse(e.path.normalize(t));
    return i.holdOutside(root, [
        ...dir.slice(root.length).split(e.path.sep),
        base
    ].filter((o)=>o !== "").join("/"), true);
}
async function x(e, i, t = i.realRoot) {
    let r = constants.O_DIRECTORY | ai;
    let s = r | qSe | constants.O_NOFOLLOW;
    let n = await (i.backend === "win32_handle" ? ee(e, i, t) : i.backend === "darwin_at" ? e.fs.open(t, r | U5e) : t.split("/").filter((o)=>o !== "").reduce(async (acc, item)=>{
        let c = await acc;
        return e.fs.open(`/proc/self/fd/${c.fd}/${item}`, s).finally(()=>c.close().catch(()=>{}));
    }, e.fs.open("/", s))).catch(()=>null);
    if (n === null) {
        return false;
    }
    try {
        let [o, a] = await Promise.all([
            "fd" in n ? n.stat({
                bigint: true
            }) : n.stat(),
            i.lstat("")
        ]);
        return !Hg(a.ino) && o.dev === a.dev && o.ino === a.ino;
    } catch  {
        return false;
    } finally{
        await n.close().catch(()=>{});
    }
}
async function I(e, i, { cutoffMs, isLive, tally }) {
    let i_dir = i.dir;
    let { trashName, ignoreFile } = Z[i.kind];
    try {
        if (!(await e.fs.lstat(e.path.join(i_dir, trashName))).isDirectory()) {
            l(tally);
            return;
        }
    } catch (error) {
        if (!z(error) || await E(e, i_dir) !== "plainly") {
            l(tally);
        }
        return;
    }
    let realRoot = await e.fs.realpath(i_dir).catch(()=>null);
    if (realRoot === null || !q(realRoot, i_dir)) {
        l(tally);
        return;
    }
    let m = e.path.join(realRoot, trashName);
    let f = await OSn(e, {
        gitRoot: i_dir,
        realRoot
    }).catch(()=>null);
    if (f === null || "unavailable" in f) {
        l(tally);
        return;
    }
    let d = f;
    try {
        if (!await x(e, d) || !h(realRoot, i_dir) && !await x(e, d, i_dir) || !await X(d, i) || !(await d.lstat(trashName)).isDirectory()) {
            l(tally);
            return;
        }
        await te(e, d, trashName, m, {
            cutoffMs,
            isLive,
            tally
        });
        await ne(e, d, trashName, m, tally, ignoreFile);
    } catch (error) {
        if (!z(error)) {
            l(tally);
        }
    } finally{
        await d.close().catch(()=>{});
    }
}
async function te(e, i, trashName, r, { cutoffMs, isLive, tally }) {
    let a = await e.fs.readdir(r);
    for (let c of a){
        let m = `${trashName}/${c}`;
        try {
            if (!(await i.lstat(m)).isDirectory()) {
                continue;
            }
            if (isLive(c.replace(/\.staging$/, ""))) {
                g(tally);
                continue;
            }
            let f = await j(e, e.path.join(r, c));
            if (f < cutoffMs) {
                await K(i, e, m, cutoffMs);
                tally.removed++;
            } else {
                tally.newestKeptMs = Math.max(tally.newestKeptMs ?? -Infinity, f);
            }
        } catch (error) {
            if (error instanceof L) {
                g(tally);
            } else if (!z(error)) {
                l(tally);
            }
        }
    }
}
async function ne(e, i, trashName, r, tally, ignoreFile) {
    let o = await e.fs.readdir(r).catch(()=>[
            "?"
        ]);
    try {
        if (ignoreFile !== undefined && o.length === 1 && o[0] === ignoreFile) {
            if ((await i.lstat(`${trashName}/${ignoreFile}`)).isFile()) {
                await i.unlink(`${trashName}/${ignoreFile}`);
                await i.rmdir(trashName).catch(async (a)=>{
                    if (v(a) !== "ENOTEMPTY") {
                        throw a;
                    }
                    await i.create(`${trashName}/${ignoreFile}`, Buffer.from(`*
`), 384);
                });
            }
        } else if (o.length === 0) {
            await i.rmdir(trashName);
        }
    } catch (error) {
        if (!z(error) && v(error) !== "ENOTEMPTY") {
            tally.errors++;
        }
    }
}
async function j(e, i) {
    let mtimeMs = (await e.fs.lstat(i)).mtimeMs;
    let r = await e.fs.readdir(i);
    for (let s of r){
        let n = e.path.join(i, s);
        try {
            let o = await e.fs.lstat(n);
            mtimeMs = Math.max(mtimeMs, o.mtimeMs);
            if (o.isDirectory()) {
                mtimeMs = Math.max(mtimeMs, await j(e, n));
            }
        } catch (error) {
            if (!z(error)) {
                throw error;
            }
        }
    }
    return mtimeMs;
}
class L extends Error {
}
async function K(e, i, t, r) {
    if (!(Number((await e.lstat(t)).mtimeMs) < r)) {
        throw new L;
    }
    let s = await i.fs.readdir(i.path.join(e.realRoot, ...t.split("/"))).catch(()=>[]);
    let n = [];
    for (let o of s){
        let a = `${t}/${o}`;
        try {
            if ((await e.lstat(a)).isDirectory()) {
                await K(e, i, a, r);
            } else {
                await e.unlink(a);
            }
        } catch (error) {
            if (error instanceof L || v(error) === "ENOTEMPTY") {
                throw error;
            }
            if (!z(error)) {
                n.push(error);
            }
        }
    }
    if (n.length > 0) {
        throw n[0];
    }
    await e.rmdir(t);
}
