import { x, l, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ze, Gi } from "/$bunfs/root/chunk-xgw72tt1.js";
import { Hg, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { OP, Irn, w0, Ot } from "/$bunfs/root/chunk-2d9a83dh.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { ai, U5e } from "/$bunfs/root/chunk-zwxj12s4.js";
import { An, Cs, ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { Ku, qyr, dc, F5, Mit, axt, zL, auo, luo } from "/$bunfs/root/chunk-jn6evvyh.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { constants } from "fs";
import { lstat, open, realpath, stat, readdir, readlink, access, rm } from "fs/promises";
import { basename, dirname, isAbsolute, join, normalize, parse, relative, resolve, sep } from "path";
import { randomBytes } from "crypto";
const ae = String.raw`'([^']*)'(?:(=)(?:'([^']*)')?)?`;
const kt = new RegExp(String.raw`^(?:${ae}(?:[ \t\r\n]+${ae})*)?[ \t\r\n]*$`);
function ycr(e = process.env) {
    let n = [];
    let e_GIT_CONFIG_COUNT = e.GIT_CONFIG_COUNT;
    if (e_GIT_CONFIG_COUNT !== undefined) {
        if (!/^\d{1,3}$/.test(e_GIT_CONFIG_COUNT)) {
            return {};
        }
        for(let c = 0; c < Number(e_GIT_CONFIG_COUNT); c++){
            let d = e[`GIT_CONFIG_KEY_${c}`];
            let u = e[`GIT_CONFIG_VALUE_${c}`];
            if (d === undefined || u === undefined) {
                return {};
            }
            n.push([
                d,
                u
            ]);
        }
    }
    let e_GIT_CONFIG_PARAMETERS = e.GIT_CONFIG_PARAMETERS;
    if (e_GIT_CONFIG_PARAMETERS !== undefined && kt.test(e_GIT_CONFIG_PARAMETERS)) {
        for (let [, c = "", d, u = ""] of e_GIT_CONFIG_PARAMETERS.matchAll(new RegExp(ae, "g"))){
            let w = d === undefined ? c.indexOf("=") : -1;
            n.push(d !== undefined || w === -1 ? [
                c,
                u
            ] : [
                c.slice(0, w),
                c.slice(w + 1)
            ]);
        }
    }
    let o = {};
    let s = 0;
    for (let [c, d] of n){
        if (c.toLowerCase() === "safe.directory") {
            o[`GIT_CONFIG_KEY_${s}`] = "safe.directory";
            o[`GIT_CONFIG_VALUE_${s}`] = d;
            s++;
        }
    }
    if (s === 0) {
        return {};
    }
    o.GIT_CONFIG_COUNT = String(s);
    return o;
}
const Ae = 65536;
const vt = 4096;
const Et = (e, n)=>ct(Ot(), e, n);
async function Lnt(e, { dotGitLink = "refuse", run = Et } = {}) {
    let r = (skipped, why)=>{
        t(`Could not vet the worktree registrations of ${e}: ${why}`, {
            level: "warn"
        });
        return {
            skipped,
            why
        };
    };
    let o = O() === "windows";
    let s = async (p)=>{
        let E = await readlink(p).then(()=>"link", (b)=>{
            if (v(b) === "EINVAL") {
                return "clear";
            }
            if (z(b)) {
                return "missing";
            }
            return "unknown";
        });
        if (E !== "missing") {
            return E;
        }
        if (await luo(p)) {
            return "missing";
        }
        return "unknown";
    };
    let c = join(e, ".git");
    let d = await zL(c, e);
    let u;
    let w;
    if (d === "clear") {
        let [p, E] = await Promise.all([
            lstat(c).catch(()=>null),
            stat(e).then((b)=>b, (b)=>{
                if (z(b)) {
                    return null;
                }
            })
        ]);
        if (E === null) {
            return r("gone", "the repository root is gone");
        }
        if (E === undefined) {
            return r("unvettable", "the repository root cannot be stat'd");
        }
        if (p === null) {
            return r("unvettable", ".git vanished");
        }
        if (!p.isDirectory()) {
            return r("pointer", ".git is not a real directory (a pointer file)");
        }
        u = c;
        w = [
            p.uid,
            E.uid
        ];
    } else if (d === "missing") {
        let [p, E, b] = await Promise.all([
            lstat(join(e, "HEAD")).catch(()=>null),
            lstat(join(e, "objects")).catch(()=>null),
            stat(e).then((k)=>k, (k)=>{
                if (z(k)) {
                    return null;
                }
            })
        ]);
        if (b === null) {
            return r("gone", "the repository root is gone");
        }
        if (b === undefined) {
            return r("unvettable", "the repository root cannot be stat'd");
        }
        if (p === null || !p.isFile() || E === null || !E.isDirectory()) {
            return r("not-a-repository", "no .git, and the root is not a bare git directory");
        }
        u = e;
        w = [
            b.uid
        ];
    } else if (d === "link" && dotGitLink === "vet") {
        let p = await fe(c, e);
        if ("refused" in p) {
            return r("unvettable", `.git is a link whose text ${p.refused}`);
        }
        let E = p.text;
        let b = dc(resolve(e, E));
        let k = dc(normalize(e));
        if (await zL(b, b.startsWith(k + sep) ? k : undefined) !== "clear") {
            return r("unvettable", ".git is a link whose target is missing, goes through another link, or cannot be probed");
        }
        let [S, L, V, j] = await Promise.all([
            lstat(b).catch(()=>null),
            lstat(join(b, "HEAD")).catch(()=>null),
            lstat(join(b, "objects")).catch(()=>null),
            stat(e).then((D)=>D, (D)=>{
                if (z(D)) {
                    return null;
                }
            })
        ]);
        if (j === null) {
            return r("gone", "the repository root is gone");
        }
        if (j === undefined) {
            return r("unvettable", "the repository root cannot be stat'd");
        }
        if (S === null || !S.isDirectory() || L === null || !L.isFile() || V === null || !V.isDirectory()) {
            return r("unvettable", ".git is a link to something other than a git directory");
        }
        u = b;
        w = [
            S.uid,
            j.uid
        ];
    } else {
        return r("unvettable", ".git is a link, a mount point, or cannot be probed");
    }
    if (await s(join(u, "commondir")) !== "missing") {
        return r("unvettable", `${u}/commondir exists, which git never writes into a main git dir`);
    }
    let g = o || !w.every(_t) ? await Tt(e, u, run) : null;
    if (g !== null) {
        return r("unvettable", g);
    }
    let h = join(u, "worktrees");
    let y = await zL(h, e);
    let vetted = new Map;
    let refused = new Map;
    if (y === "missing") {
        return {
            gitDir: u,
            vetted,
            refused
        };
    }
    let f = y === "clear" ? await readdir(h, {
        encoding: "buffer"
    }).catch(()=>null) : null;
    if (f === null) {
        return r("unvettable", `${h} is a link or cannot be read`);
    }
    for (let p of f){
        let E = Oe(p);
        if (E === null) {
            let P = join(h, `<${p.toString("hex")}>`);
            let S = "has a name this check and git would read differently";
            refused.set(P, "has a name this check and git would read differently");
            t(`Refused worktree admin entry ${P}: has a name this check and git would read differently`, {
                level: "warn"
            });
            continue;
        }
        let b = join(h, E);
        let k = await $t(b, e, s, o);
        if (k === "missing") {
            continue;
        }
        if (k === null) {
            continue;
        }
        if (typeof k === "object") {
            vetted.set(b, k.worktree);
        } else {
            refused.set(b, k);
            t(`Refused worktree admin entry ${b}: ${k}`, {
                level: "warn"
            });
        }
    }
    return {
        gitDir: u,
        vetted,
        refused
    };
}
async function te(e) {
    for (let n of [
        "objects",
        "config",
        "packed-refs",
        "hooks",
        "worktrees"
    ]){
        if (await e(n).catch(()=>"unchecked") !== null) {
            return true;
        }
    }
    return false;
}
async function $t(e, n, i, r) {
    let o = await zL(e, n);
    if (o === "missing") {
        return "missing";
    }
    if (o !== "clear") {
        return "is a link, a mount point, or cannot be probed";
    }
    let s = await lstat(e).then((m)=>m, (m)=>{
        if (z(m)) {
            return null;
        }
    });
    if (s === undefined) {
        return "cannot be probed";
    }
    if (s === null) {
        return "missing";
    }
    if (s.isSymbolicLink()) {
        return "became a link";
    }
    if (!s.isDirectory()) {
        if (r) {
            return "is not a directory";
        }
        return null;
    }
    let c = await St(e, i, r ? Infinity : 1);
    if (c !== null) {
        return c;
    }
    if (await te((m)=>lstat(join(e, m)).catch((f)=>{
            if (z(f)) {
                return null;
            }
            throw f;
        }))) {
        return "holds a git directory's own files (objects, config, packed-refs, hooks or worktrees), or could not be checked for them";
    }
    let d = join(e, "gitdir");
    let u = await lstat(d).then((m)=>m, (m)=>{
        if (z(m)) {
            return null;
        }
    });
    if (u === undefined) {
        return "gitdir cannot be probed";
    }
    if (u === null) {
        if (await i(d) === "missing") {
            return {
                worktree: null
            };
        }
        return "gitdir is absent to lstat but not to the probe (a shortcut beside it, or a race)";
    }
    if (!u.isFile()) {
        return "gitdir is not a regular file";
    }
    if (u.size > Ae) {
        return "gitdir is larger than any git writes";
    }
    let w = await OP(d, Ae, {
        noFollow: true
    }).catch(()=>null);
    if (w === null) {
        return "gitdir cannot be read";
    }
    let g = w.replace(/[\r\n]+$/, "");
    if (g === "") {
        return {
            worktree: null
        };
    }
    let h = de(g, n, r);
    if (h !== null) {
        return h;
    }
    let y;
    let T;
    if (isAbsolute(g)) {
        let m = normalize(g);
        let f = dc(normalize(n));
        y = [
            m
        ];
        let p = (k, P)=>{
            if (r && P === 0) {
                return k.toLowerCase();
            }
            return k;
        };
        let E = m.split(sep);
        let b = f.split(sep);
        T = E.length > b.length && b.every((k, P)=>p(k, P) === p(E[P] ?? "", P)) ? E.slice(0, b.length).join(sep) : undefined;
    } else {
        let m = await realpath(n).catch(()=>null);
        if (m === null) {
            return "the repository root does not resolve";
        }
        T = m;
        let f = dc(normalize(n));
        let p = e.startsWith(f + sep) ? join(m, relative(n, e)) : e;
        y = [
            resolve(p, g),
            resolve(m, g)
        ];
    }
    for (let m of y){
        if (Gi(m, T ?? n)) {
            return "gitdir names another host";
        }
        let f = await zL(dirname(m), T);
        if (f === "link" || f === "unknown") {
            return "gitdir walks through a link, or a component cannot be probed";
        }
        if (f === "clear") {
            let p = await i(m);
            if (p === "link" || p === "unknown") {
                return "gitdir names a link, or one that cannot be probed";
            }
        }
    }
    return {
        worktree: y[0] ?? null
    };
}
async function Tt(cwd, n, run) {
    let r = {};
    for (let u of [
        "GIT_CONFIG_GLOBAL",
        "GIT_CONFIG_SYSTEM"
    ]){
        let w = process.env[u];
        if (w !== undefined) {
            r[u] = w;
        }
    }
    let o = await run([
        ...An,
        "-C",
        cwd,
        "rev-parse",
        "--git-dir"
    ], {
        cwd,
        env: Cs({
            ...r,
            ...ycr()
        }),
        timeout: 10000
    }).catch((u)=>{
        t(`Could not run git to check the ownership of ${n}: ${l(u)}`, {
            level: "error"
        });
        return null;
    });
    if (o === null) {
        return `git could not be run to check the ownership of ${n}`;
    }
    if (o.code !== 0) {
        return `git's ownership check for ${n} failed (exit ${o.code}); if another user owns it, it needs a safe.directory entry`;
    }
    let s = o.stdout.trim();
    if (s === "") {
        return `git gave no answer when checking the ownership of ${n}`;
    }
    let [c, d] = await Promise.all([
        realpath(resolve(cwd, s)).catch(()=>null),
        realpath(n).catch(()=>null)
    ]);
    if (c !== null && d !== null && dc(c) === dc(d)) {
        return null;
    }
    return `git's ownership check did not name ${n}`;
}
function _t(e) {
    let n = process.geteuid?.();
    if (n === undefined || e === n) {
        return true;
    }
    if (n !== 0) {
        return false;
    }
    let a_SUDO_UID = a.SUDO_UID;
    return e === 0 || a_SUDO_UID !== undefined && e === a_SUDO_UID;
}
function de(e, n, i) {
    if (e.includes("\uFFFD") || /\p{Cc}/u.test(e) || /^[A-Za-z]:(?![\\/])/.test(e)) {
        return "gitdir holds bytes git would read differently";
    }
    let r = i ? /[\\/]+/ : /\/+/;
    if (i && e.split(r).some((o)=>o !== "." && o !== ".." && /[. ]$/.test(o))) {
        return "gitdir holds a component ending in a dot or space";
    }
    if (!isAbsolute(e)) {
        let o = e.split(r);
        let s = o.findIndex((d)=>d !== "..");
        if ((s < 0 ? [] : o.slice(s)).some((d)=>d === "" || d === "." || d === "..")) {
            return "gitdir is a relative value git would not write";
        }
        return null;
    }
    if (e.split(r).some((o)=>o === "." || o === "..")) {
        return "gitdir holds a dot segment git would not write";
    }
    if (!axt(e)) {
        return "gitdir is rooted without a drive or a host";
    }
    if (Gi(e, n)) {
        return "gitdir names another host";
    }
    if (r.test(e.slice(-1))) {
        return "gitdir ends in a separator git would not write";
    }
    return null;
}
async function fe(e, n) {
    let i = await readlink(e, {
        encoding: "buffer"
    }).then((s)=>{
        let c = s.toString("utf-8");
        if (c.includes("\x00") || !Buffer.from(c, "utf-8").equals(s)) {
            return null;
        }
        return c;
    }, ()=>null);
    if (i === null) {
        return {
            refused: "cannot be read"
        };
    }
    if (/[\p{Cc}\uFFFD]/u.test(i)) {
        return {
            refused: "holds a control character or U+FFFD"
        };
    }
    if (Gi(i, n)) {
        return {
            refused: "names another host"
        };
    }
    let r = O() === "windows";
    let o = r ? /[\\/]+/ : /\/+/;
    if (i === "" || o.test(i.slice(-1)) || i.split(o).some((s)=>s === "." || s === "..") || isAbsolute(i) && !axt(i) || r && /^[A-Za-z]:(?![\\/])/.test(i)) {
        return {
            refused: "is empty, ends in a separator, holds a dot segment, or is rooted or drive-relative in a way git would read differently"
        };
    }
    return {
        text: i
    };
}
function Oe(e) {
    let n = e.toString("utf8");
    if (!n.includes("\uFFFD") && !/\p{Cc}/u.test(n) && !(O() === "windows" && /[. ]$/.test(n)) && Buffer.from(n, "utf8").equals(e)) {
        return n;
    }
    return null;
}
async function St(e, n, i) {
    let r = O() === "windows";
    let o = vt;
    let s = async (c, d)=>{
        let u = await readdir(c, {
            encoding: "buffer"
        }).catch(()=>null);
        if (u === null) {
            return `${c} cannot be read`;
        }
        for (let w of u){
            if (--o < 0) {
                return "holds more files than any entry git writes";
            }
            let g = Oe(w);
            if (g === null) {
                return `${c} holds a name that is not valid UTF-8`;
            }
            if (r && g.toLowerCase().endsWith(".lnk")) {
                return `${join(c, g)} is named as a shortcut, which git never writes here`;
            }
            let h = join(c, g);
            let y = await lstat(h).catch(()=>null);
            if (y === null) {
                return `${h} cannot be probed`;
            }
            let T = r && y.isDirectory() ? await zL(h, c) : await n(h);
            if (T === "link" || T === "unknown") {
                return `${h} is a link or cannot be probed`;
            }
            if (y.isDirectory() && d > 1) {
                let m = await s(h, d - 1);
                if (m !== null) {
                    return m;
                }
            }
        }
        return null;
    };
    return s(e, i);
}
const Be = 65536;
const We = 65536;
const we = ze({
    afterMatch: null,
    beforeMutation: null
}, (e)=>{
    e.afterMatch = null;
    e.beforeMutation = null;
});
async function MYt(e) {
    let n = await Lnt(e, {
        dotGitLink: "vet"
    });
    if ("skipped" in n) {
        return null;
    }
    let i = await KDe(e, n.gitDir);
    if ("refused" in i) {
        t(`Could not vet the worktree registrations of ${e}: ${i.refused}`, {
            level: "warn"
        });
        return null;
    }
    return i.gitDir;
}
async function KDe(e, n) {
    let i = q(e);
    let r = q(n);
    if (r === i) {
        if (await lstat(join(i, ".git")).then(()=>true, (c)=>!z(c))) {
            return {
                refused: `the repository's .git is a link to its own root, ${i}, which cannot be used as a git directory safely`
            };
        }
        return xe(i, "");
    }
    if (r === q(join(e, ".git"))) {
        return xe(i, ".git");
    }
    let o = await It(r, i);
    if (o === "elsewhere") {
        return {
            gitDir: r
        };
    }
    return {
        refused: o === "inside" ? `the repository's .git is a link to ${r}, inside its own working tree, which cannot be opened safely` : `the repository's .git is a link to ${r}, which could not be checked against the working tree`
    };
}
async function xe(e, n) {
    let i = await realpath(e).catch(()=>null);
    if (i === null) {
        return {
            refused: `${e} could not be resolved`
        };
    }
    return {
        gitDir: join(i, n)
    };
}
function q(e) {
    let n = normalize(e);
    if (parse(n).root === n) {
        return n;
    }
    return dc(n);
}
async function It(e, n) {
    if (ye(F5(e), F5(n))) {
        return "inside";
    }
    let i = await stat(n, {
        bigint: true
    }).catch(()=>null);
    if (i === null) {
        return "unknown";
    }
    for(let r = e;; r = dirname(r)){
        let o = await lstat(r, {
            bigint: true
        }).catch(()=>null);
        if (o === null) {
            return "unknown";
        }
        if (o.dev === i.dev && o.ino === i.ino) {
            return "inside";
        }
        if (dirname(r) === r) {
            return "elsewhere";
        }
    }
}
async function He(repoSpelled) {
    let n = q(repoSpelled);
    let i = await realpath(n).catch(()=>null);
    return {
        root: n,
        tops: [
            n,
            i
        ].filter((r)=>r !== null)
    };
}
async function Rt(e, repoSpelled) {
    let gitdirs = new Set;
    let unresolved = [];
    let { root, tops } = await He(repoSpelled);
    for (let c of e){
        let d = dc(normalize(c));
        gitdirs.add(join(d, ".git"));
        if (Gi(d, root)) {
            continue;
        }
        let u = dirname(d);
        let w = await Nt(u, Ue(u, tops));
        if ("refused" in w) {
            unresolved.push(`${d}: ${w.refused}`);
            continue;
        }
        gitdirs.add(join(w.resolved, basename(d), ".git"));
    }
    return {
        gitdirs,
        unresolved,
        tops
    };
}
const Ce = 16;
async function Nt(e, n) {
    let resolved = e;
    let r = n;
    for(let o = 0; o <= Ce; o++){
        let s = resolved === r ? {
            verdict: "clear",
            at: undefined
        } : await auo(resolved, r);
        if (s.verdict === "clear" || s.verdict === "missing") {
            if (r === undefined) {
                return {
                    resolved
                };
            }
            let u = await realpath(r).catch(()=>null);
            if (u === null) {
                return {
                    refused: `${r} could not be resolved`
                };
            }
            return {
                resolved: join(u, relative(r, resolved))
            };
        }
        if (s.verdict !== "link" || s.at === undefined) {
            return {
                refused: `a component of ${resolved} cannot be probed`
            };
        }
        let c = await fe(s.at, dirname(s.at));
        if ("refused" in c) {
            return {
                refused: `the text of the link ${s.at} ${c.refused}`
            };
        }
        let d = resolve(dirname(s.at), c.text);
        resolved = join(d, relative(s.at, resolved));
        if (r !== undefined && !ye(d, r)) {
            r = undefined;
        }
    }
    return {
        refused: `more than ${Ce} links lead to ${e}`
    };
}
function ye(e, n) {
    return e === n || e.startsWith(n.endsWith(sep) ? n : n + sep);
}
function je(e, n) {
    let i = e.replace(/[\r\n]+$/, "");
    if (i === "" || de(i, n, O() === "windows") !== null || Gi(i, n)) {
        return null;
    }
    let r = normalize(isAbsolute(i) ? i : resolve(n, i));
    if (basename(r) === ".git" && axt(r)) {
        return r;
    }
    return null;
}
function Ue(e, n) {
    let i;
    for (let r of n){
        for(let o = r;; o = dirname(o)){
            if (ye(e, o)) {
                if (i === undefined || o.length > i.length) {
                    i = o;
                }
                break;
            }
            if (dirname(o) === o) {
                break;
            }
        }
    }
    return i;
}
async function Ke(e, n, i) {
    let r = i?.tops ?? (await He(n.repoSpelled)).tops;
    return await zL(e, Ue(dirname(e), r)) === "missing";
}
function Ye(e) {
    return e !== "" && e !== "." && e !== ".." && !/[\\/\p{Cc}\uFFFD]/u.test(e);
}
function Ve(e) {
    let n = new Set;
    for (let i of e){
        let r = basename(dc(normalize(i)));
        for (let o of [
            Gt(r),
            r
        ]){
            if (o === "") {
                continue;
            }
            n.add(o);
            for(let s = 1; s <= 99; s++){
                n.add(`${o}${s}`);
            }
        }
    }
    return [
        ...n
    ];
}
function Gt(e) {
    let n = "";
    for(let i = 0; i < e.length; i++){
        let r = e[i];
        let o = r.charCodeAt(0);
        if (r === "." && (i === 0 || e[i - 1] === ".")) {
            n += i === 0 ? "-" : "";
        } else if (r === "{" && e[i - 1] === "@") {
            n += "-";
        } else if (o < 32 || o === 127 || " :?[\\^~*".includes(r)) {
            n += "-";
        } else {
            n += r;
        }
    }
    while(n.endsWith(".lock")){
        n = n.slice(0, -5);
    }
    return n;
}
async function xt() {
    let [e, n] = await Promise.all([
        import("/$bunfs/root/chunk-yef5j2vs.js"),
        import("/$bunfs/root/chunk-9zzkszba.js")
    ]);
    return {
        ...e,
        host: n.createDeviceTreeHost()
    };
}
async function Xe(e, repoSpelled) {
    let modules = await xt().catch((d)=>({
            failed: l(d)
        }));
    if ("failed" in modules) {
        return {
            unavailable: `its module did not load: ${modules.failed}`,
            modules: null
        };
    }
    let r = await realpath(q(repoSpelled)).catch(()=>null);
    let o = r !== null && parse(r).root !== r && e === join(r, ".git");
    let s = o ? r : e;
    let c = await (o || parse(e).root === e ? modules.openTreeAnchor(modules.host, {
        gitRoot: s,
        realRoot: s
    }) : modules.openTreeAnchorAtName(modules.host, e)).catch((d)=>({
            unavailable: l(d)
        }));
    if ("unavailable" in c) {
        return {
            unavailable: c.unavailable,
            modules
        };
    }
    if (!o) {
        return c;
    }
    try {
        let d = await c.anchorBeneath(".git");
        let u = await d.lstat("").catch(()=>null);
        if (u === null || u.ino === 0n) {
            await d.close().catch(()=>{});
            return {
                refused: u === null ? `${e}: its file id could not be read once it was opened` : `${e} is on a volume that reports no file ids`
            };
        }
        return d;
    } catch (error) {
        return {
            refused: `could not open ${e} from ${s} without following a link: ${l(error)}`
        };
    } finally{
        await c.close().catch(()=>{});
    }
}
async function Ze(e, n, i) {
    let r = await e.open(n, constants.O_RDONLY | constants.O_NONBLOCK).catch((o)=>v(o) ?? "EIO");
    if (typeof r === "string") {
        if (r !== "ENOENT") {
            return {
                unread: pe(r)
            };
        }
        let o = await e.lstat(n).then(()=>"present", (s)=>v(s) ?? "EIO");
        if (o === "ENOENT") {
            return "absent";
        }
        return {
            unread: o === "present" ? "could not be opened where the held folder has it" : pe(o)
        };
    }
    try {
        let o = await r.stat({
            bigint: true
        });
        if (e.backend === "darwin_at") {
            let c = await e.lstat(n);
            if (o.dev !== c.dev || o.ino !== c.ino) {
                return {
                    unread: "was replaced as it was opened"
                };
            }
        }
        if (!o.isFile()) {
            return {
                unread: "is not a regular file"
            };
        }
        let s = await me(r, i);
        if (s === null) {
            return {
                unread: "is larger than git writes"
            };
        }
        return {
            text: s
        };
    } catch  {
        return {
            unread: "could not be read"
        };
    } finally{
        await r.close().catch(()=>{});
    }
}
async function me(e, n) {
    let i = Buffer.alloc(n + 1);
    let r = 0;
    while(true){
        let { bytesRead } = await e.read(i, r, i.length - r, r);
        if (bytesRead === 0) {
            break;
        }
        r += bytesRead;
        if (r > n) {
            return null;
        }
    }
    return i.subarray(0, r).toString("utf-8");
}
function be(e) {
    if (typeof e.worktreePath === "string") {
        return [
            e.worktreePath
        ];
    }
    return e.worktreePath;
}
async function ve(e) {
    if ("worktreePath" in e) {
        return Rt(be(e), e.repoSpelled);
    }
    return null;
}
function C(e, n) {
    e.unchecked++;
    e.kinds.add(n);
}
function pe(e) {
    switch(e){
        case "ELOOP":
            return "is a link";
        case "EISDIR":
            return "is not a regular file";
        default:
            return "could not be opened";
    }
}
function qe(e) {
    return e.replace(/[\r\n]+$/, "") === "";
}
function Ee(e, n, i) {
    let r = join(e, "worktrees");
    let { unchecked, kinds } = i;
    let c = [
        ...n === null || n.unresolved.length === 0 ? [] : [
            `a folder on the way to the worktree could not be resolved safely (${n.unresolved.join("; ")}), so a registration recorded under its resolved path could not be matched`
        ],
        ...i.guessed ? [
            `${r} cannot be listed here without following links, so only the names git would have given this worktree were checked, and a registration under another name may remain`
        ] : [],
        ...unchecked === 0 ? [] : [
            i.guessed ? `some of the names tried in ${r} could not be checked (${[
                ...kinds
            ].join(", ")}), so one of them may still register this worktree` : `${unchecked === 1 ? "one entry" : `${unchecked} entries`} in ${r} could not be checked (${[
                ...kinds
            ].join(", ")}), so ${unchecked === 1 ? "it" : "one of them"} may still register this worktree`
        ]
    ];
    if (c.length === 0) {
        return {
            outcome: "none"
        };
    }
    return {
        unmatched: c.join("; ")
    };
}
function Je(e, n) {
    return n === null || Mit(Fe(e), [
        ...n.gitdirs
    ].map(Fe));
}
function Fe(e) {
    if (O() === "windows") {
        return e.replace(/^[a-z](?=:)/, (n)=>n.toUpperCase());
    }
    return e;
}
async function Qe(e, n, i, r) {
    let o = {
        guessed: false,
        unchecked: 0,
        kinds: new Set
    };
    let s = "entryId" in i ? [
        i.entryId
    ] : await e.list("worktrees").catch((c)=>{
        if (z(c)) {
            return [];
        }
        if (v(c) === "WORKING_LIST_UNSUPPORTED") {
            o.guessed = true;
            return Ve(be(i));
        }
        throw c;
    });
    for (let c of s){
        if (!Ye(c)) {
            if (!o.guessed) {
                C(o, "an entry name this check cannot read exactly");
            }
            continue;
        }
        let rel = `worktrees/${c}`;
        let u = await e.lstat(rel).catch((y)=>{
            if (z(y)) {
                return null;
            }
        });
        if (u === undefined) {
            C(o, "an entry that could not be inspected");
            continue;
        }
        if (u === null || !u.isDirectory()) {
            if (u?.isSymbolicLink()) {
                C(o, "an entry that is a link");
            } else if (u !== null && O() === "windows") {
                C(o, "an entry that is not a folder");
            }
            continue;
        }
        let w = await Ze(e, `${rel}/gitdir`, Be);
        if (w === "absent") {
            continue;
        }
        if ("unread" in w) {
            C(o, `a gitdir file that ${w.unread}`);
            continue;
        }
        let recordedGitdir = je(w.text, join(n, "worktrees", c));
        if (recordedGitdir === null && !qe(w.text)) {
            C(o, "a gitdir file whose path could not be checked safely");
        }
        if (recordedGitdir === null || !Je(recordedGitdir, r)) {
            continue;
        }
        let locked = await e.lstat(`${rel}/locked`).then(()=>true, (y)=>!z(y));
        return {
            entryId: c,
            locked,
            recordedGitdir,
            rel,
            identity: {
                dev: u.dev,
                ino: u.ino
            }
        };
    }
    return o;
}
async function $e(e, n) {
    return Ct(e, n).catch((i)=>({
            unavailable: l(i)
        }));
}
async function Ct(e, n) {
    let i = await Xe(e, n.repoSpelled);
    if ("refused" in i) {
        return {
            unavailable: i.refused
        };
    }
    if ("unavailable" in i) {
        return {
            unavailable: i.unavailable
        };
    }
    try {
        let r = await ve(n);
        let o = await Qe(i, e, n, r);
        if ("unchecked" in o) {
            let s = Ee(e, r, o);
            if ("unmatched" in s) {
                return {
                    unavailable: s.unmatched
                };
            }
            return null;
        }
        return {
            entryId: o.entryId,
            locked: o.locked,
            recordedGitdir: o.recordedGitdir
        };
    } finally{
        await i.close().catch(()=>{});
    }
}
async function HJ(e, n, i) {
    return Ft(e, n, i).catch((r)=>A(e, l(r)));
}
async function Ft(e, n, i) {
    let r = await Xe(e, n.repoSpelled);
    if ("refused" in r) {
        return A(e, r.refused);
    }
    if ("unavailable" in r) {
        let { modules } = r;
        if (r.unavailable === "no_ffi" && modules !== null && modules.host.platform() === "macos") {
            return Wt(e, n, i, await modules.darwinNoFollowAnyEnforced(modules.host));
        }
        return A(e, `this build cannot open files here without following links (${r.unavailable})`);
    }
    try {
        let o = await ve(n);
        let s = await Qe(r, e, n, o);
        if ("unchecked" in s) {
            let u = Ee(e, o, s);
            if ("unmatched" in u) {
                return A(e, u.unmatched);
            }
            return u;
        }
        if (!await Ke(s.recordedGitdir, n, o)) {
            return A(e, `could not confirm the worktree is gone: ${s.recordedGitdir} exists, or a link or unreadable folder is on the way to it`);
        }
        await we.afterMatch?.(s.entryId);
        let c = async ()=>{
            let u = await r.lstat(s.rel).catch(()=>null);
            return u !== null && u.dev === s.identity.dev && u.ino === s.identity.ino;
        };
        if (!await c()) {
            return A(e, `worktrees/${s.entryId} changed since it was read`);
        }
        if (await Le(r, s.rel)) {
            return A(e, `${et(s.entryId)}, so nothing in it was removed`);
        }
        if (s.locked) {
            if (!await Bt(r, s.rel, i.locked)) {
                return A(e, `worktrees/${s.entryId} is locked`);
            }
        }
        await we.beforeMutation?.(s.entryId);
        await r.unlink(`${s.rel}/gitdir`);
        if (!await c()) {
            return {
                outcome: "dropped",
                entryId: s.entryId,
                adminRemoved: false
            };
        }
        if (await Le(r, s.rel)) {
            t(`Dropped the registration worktrees/${s.entryId} in ${e} (git no longer lists it) but left its folder, which now has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them. git's next \`git worktree prune\` or \`git gc\` deletes that folder whole; move out anything you need first.`, {
                level: "warn"
            });
            return {
                outcome: "dropped",
                entryId: s.entryId,
                adminRemoved: false
            };
        }
        let adminRemoved = await Mt(r, s.rel);
        await r.rmdir("worktrees").catch(()=>{});
        return {
            outcome: "dropped",
            entryId: s.entryId,
            adminRemoved
        };
    } catch (error) {
        return A(e, l(error));
    } finally{
        await r.close().catch(()=>{});
    }
}
async function wVe(repoSpelled, n, i = {
    locked: "keep"
}) {
    let r = await MYt(repoSpelled);
    if (r === null) {
        return A(repoSpelled, 'the repository could not be vetted (see the "Could not vet the worktree registrations" line above)');
    }
    return HJ(r, {
        worktreePath: n,
        repoSpelled
    }, i);
}
function A(e, n) {
    t(`Left a git worktree registration in ${e} in place: ${n}`, {
        level: "warn"
    });
    return {
        outcome: "kept",
        reason: n
    };
}
const Lt = [
    "logs/HEAD",
    "HEAD",
    "ORIG_HEAD",
    "FETCH_HEAD",
    "AUTO_MERGE",
    "MERGE_HEAD",
    "MERGE_MSG",
    "MERGE_RR",
    "MERGE_AUTOSTASH",
    "MERGE_MODE",
    "SQUASH_MSG",
    "COMMIT_EDITMSG",
    "REBASE_HEAD",
    "CHERRY_PICK_HEAD",
    "REVERT_HEAD",
    "BISECT_LOG",
    "BISECT_START",
    "BISECT_TERMS",
    "BISECT_NAMES",
    "BISECT_EXPECTED_REV",
    "BISECT_ANCESTORS_OK",
    "BISECT_RUN",
    "BISECT_FIRST_PARENT",
    "BISECT_HEAD",
    "index",
    "index.lock",
    "commondir",
    "locked",
    "config.worktree",
    "info/sparse-checkout",
    "CLAUDE_BASE"
];
const Dt = [
    "refs/bisect",
    "refs/worktree",
    "refs/rewritten",
    "refs",
    "logs",
    "info"
];
function Le(e, rel) {
    return te((i)=>e.lstat(`${rel}/${i}`).catch((r)=>{
            if (z(r)) {
                return null;
            }
            throw r;
        }));
}
function et(e) {
    return `worktrees/${e} has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them`;
}
async function Mt(e, rel) {
    await Te(e, rel);
    return e.rmdir(rel).then(()=>true, (i)=>{
        t(`Dropped the registration ${rel} but left its folder: ${l(i)}`, {
            level: "warn"
        });
        return false;
    });
}
async function Te(e, n) {
    for (let i of Lt){
        await e.unlink(`${n}/${i}`).catch(()=>{});
    }
    for (let i of Dt){
        await e.rmdir(`${n}/${i}`).catch(()=>{});
    }
}
async function Bt(e, rel, locked) {
    if (locked === "drop") {
        return true;
    }
    if (locked === "keep") {
        return false;
    }
    let r = await Ze(e, `${rel}/locked`, We);
    if (r === "absent" || "unread" in r || !locked.unlockIf(r.text.replace(/[\r\n]+$/, ""))) {
        return false;
    }
    await e.unlink(`${rel}/locked`);
    return true;
}
async function Wt(e, n, i, r) {
    if (!r) {
        return A(e, "this macOS version does not enforce O_NOFOLLOW_ANY, so links cannot be refused");
    }
    let o = await ve(n);
    let s = "entryId" in n ? [
        n.entryId
    ] : Ve(be(n));
    let c = {
        guessed: !("entryId" in n),
        unchecked: 0,
        kinds: new Set
    };
    let d = constants.O_NONBLOCK | U5e | ai;
    for (let w of s){
        if (!Ye(w)) {
            if (!c.guessed) {
                C(c, "an entry name this check cannot read exactly");
            }
            continue;
        }
        let g = join(e, "worktrees", w);
        let h = await open(join(g, "gitdir"), constants.O_RDWR | d).catch((y)=>v(y) ?? "EIO");
        if (typeof h === "string") {
            if (h !== "ENOENT" && h !== "ENOTDIR") {
                C(c, h === "ELOOP" ? "a gitdir file that is a link, or a link on the way to it" : `a gitdir file that ${pe(h)}`);
            }
            continue;
        }
        try {
            let y = await h.stat();
            if (!y.isFile() || y.nlink !== 1) {
                C(c, !y.isFile() ? "a gitdir file that is not a regular file" : y.nlink > 1 ? "a gitdir file with more than one name" : "a gitdir file that was removed after it was opened");
                continue;
            }
            let T = await me(h, Be);
            let m = T === null ? null : je(T, g);
            if (T === null) {
                C(c, "a gitdir file that is larger than git writes");
            } else if (m === null && !qe(T)) {
                C(c, "a gitdir file whose path could not be checked safely");
            }
            if (m === null || !Je(m, o)) {
                continue;
            }
            let f = await open(join(g, "locked"), constants.O_RDONLY | d).catch((p)=>{
                if (z(p)) {
                    return null;
                }
            });
            if (f !== null) {
                let p = await f?.stat().catch(()=>null);
                let E = f !== undefined && p?.isFile() === true ? await me(f, We).catch(()=>null) : null;
                await f?.close().catch(()=>{});
                if (E === null || i.locked === "keep" || i.locked !== "drop" && !i.locked.unlockIf(E.replace(/[\r\n]+$/, ""))) {
                    return A(e, `worktrees/${w} is locked`);
                }
            }
            if (!await Ke(m, n, o)) {
                return A(e, `could not confirm the worktree is gone: ${m} exists, or a link or unreadable folder is on the way to it`);
            }
            if (await te(async (p)=>{
                let E = await open(join(g, p), constants.O_RDONLY | d).catch((b)=>{
                    if (z(b)) {
                        return null;
                    }
                    throw b;
                });
                if (E === null) {
                    return null;
                }
                try {
                    return await E.stat();
                } finally{
                    await E.close().catch(()=>{});
                }
            })) {
                return A(e, `${et(w)}, so nothing in it was changed`);
            }
            await we.beforeMutation?.(w);
            await h.truncate(0);
            return {
                outcome: "dropped",
                entryId: w,
                adminRemoved: false
            };
        } catch (error) {
            return A(e, l(error));
        } finally{
            await h.close().catch(()=>{});
        }
    }
    let u = Ee(e, o, c);
    if ("unmatched" in u) {
        return A(e, u.unmatched);
    }
    return u;
}
const Vt = 65536;
const zt = 3;
let tt = null;
function Xt() {
    return tt ??= Promise.all([
        import("/$bunfs/root/chunk-yef5j2vs.js"),
        import("/$bunfs/root/chunk-9zzkszba.js")
    ]).then(([tree, n])=>({
            tree,
            host: n.createDeviceTreeHost()
        })).catch((e)=>{
        tt = null;
        throw e;
    });
}
function Zt() {
    if (O() === "windows") {
        return constants.O_RDONLY;
    }
    return constants.O_RDONLY | constants.O_NONBLOCK;
}
async function Nnt(e, n, { forceTwice = false, git, trustedRoot, resolveAboveParent = false, deregisterIfStopped = false, pointerFirst = false } = {}) {
    let u = await ft(trustedRoot === undefined ? [
        e
    ] : [
        e,
        trustedRoot
    ], n, {
        parentLinkToRoot: resolveAboveParent
    });
    if (u === null) {
        return {
            outcome: "refused",
            reason: `${n} has no parent directory`
        };
    }
    if ("refused" in u) {
        return {
            outcome: "refused",
            reason: u.refused
        };
    }
    let { base, rel, underRoot } = u;
    let y = git ?? await rn(e);
    if ("why" in y) {
        return {
            outcome: "refused",
            reason: `the repository's git directory failed its safety checks (${y.why})`
        };
    }
    let y_dir = y.dir;
    let m = await se(base, underRoot ? "root" : resolveAboveParent ? "not_a_link" : "canonical");
    if (!("held" in m)) {
        if (m.outcome === "unanchored") {
            return m;
        }
        return {
            outcome: "refused",
            reason: m.reason
        };
    }
    let { held, realBase } = m;
    try {
        let E = await held.lstat(rel).then((_)=>_.isDirectory(), ()=>false);
        if (E && await held.list(rel).then(()=>false, (_)=>Se(_))) {
            return {
                outcome: "unanchored",
                reason: "no_descriptor_listing"
            };
        }
        let b = underRoot || resolveAboveParent ? [
            n,
            join(realBase, ...rel.split("/"))
        ] : [
            n
        ];
        let k = await $e(y_dir, {
            worktreePath: b,
            repoSpelled: y.root
        });
        if (E && k !== null && !("unavailable" in k)) {
            let _ = await cn(held, rel, [
                n,
                join(realBase, ...rel.split("/"))
            ], e, y_dir);
            if (_ !== null && _ !== k.entryId) {
                let X = await $e(y_dir, {
                    entryId: _,
                    worktreePath: b,
                    repoSpelled: y.root
                });
                if (X !== null && !("unavailable" in X)) {
                    k = X;
                }
            }
        }
        if (k !== null && "unavailable" in k) {
            return {
                outcome: "refused",
                reason: `git's records of worktrees in ${y_dir} could not be checked safely (${k.unavailable})`
            };
        }
        if (k === null) {
            return {
                outcome: "not_registered"
            };
        }
        if (!underRoot && !ut(k.recordedGitdir, [
            n,
            join(realBase, ...rel.split("/"))
        ].map((_)=>join(normalize(_), ".git")))) {
            return {
                outcome: "refused",
                reason: `the folder holding ${n} resolved to a different place while it was being checked (a link may have been swapped in)`
            };
        }
        if (k.locked && !forceTwice) {
            return {
                outcome: "locked"
            };
        }
        let locked = forceTwice ? "drop" : "keep";
        let S = await held.lstat(rel).then((_)=>_, (_)=>({
                error: _
            }));
        if ("error" in S && z(S.error) && await held.lstat(Jt(rel)).then((_)=>_.isDirectory(), ()=>false)) {
            return ot(n, await HJ(y_dir, {
                entryId: k.entryId,
                repoSpelled: y.root
            }, {
                locked
            }), y_dir, k.entryId);
        }
        if ("error" in S || !S.isDirectory()) {
            return {
                outcome: "refused",
                reason: "error" in S && z(S.error) ? `the directory holding ${n} is missing` : `${n} is not a directory reachable without a link (${"error" in S ? v(S.error) ?? "unknown error" : "not a directory"})`
            };
        }
        let L = await wt(held, `${rel}/.git`);
        if ("error" in L) {
            return {
                outcome: "refused",
                reason: `the .git file in ${n} could not be read (${L.error})`
            };
        }
        if (L.value === null || !await ht(L.value, [
            n,
            join(realBase, ...rel.split("/"))
        ], e, y_dir, k.entryId)) {
            return {
                outcome: "not_pointing_back"
            };
        }
        let V = deregisterIfStopped ? await lt(y_dir, k.entryId) : null;
        let j = typeof V === "object" ? V : null;
        let D = {
            deleted: false
        };
        try {
            await dn(held, rel, L.bytes, D, {
                pointerFirst
            });
        } catch (error) {
            if (!D.deleted && Se(error)) {
                return {
                    outcome: "unanchored",
                    reason: "no_descriptor_listing"
                };
            }
            let X = sn(error);
            t(`Worktree checkout ${n} not fully deleted: ${l(error)}`, {
                level: "warn"
            });
            let deregistered = j !== null && D.deleted && await on(y_dir, k.entryId, j, locked);
            return {
                outcome: "delete_failed",
                reason: X,
                started: D.deleted,
                deregistered
            };
        }
        return ot(n, await HJ(y_dir, {
            entryId: k.entryId,
            repoSpelled: y.root
        }, {
            locked
        }), y_dir, k.entryId);
    } finally{
        await held.close().catch(()=>{});
    }
}
async function qt(e, n, { rootIsCanonical = false } = {}) {
    let r = n === undefined ? gt(e) : await ft([
        n
    ], e);
    if (r === null) {
        throw new x(`${e} has no parent directory`, "the path to delete has no parent directory");
    }
    if ("refused" in r) {
        throw new x(r.refused, "the path to delete reaches its root by a spelling that cannot be checked safely");
    }
    let o = await se(r.base, n === undefined || !r.underRoot ? "not_a_link" : rootIsCanonical ? "canonical" : "root");
    if (!("held" in o)) {
        if (o.outcome === "unanchored") {
            return {
                unanchored: o.reason
            };
        }
        if (o.absent === true) {
            return "absent";
        }
        throw new x(`could not open the directory above ${e}: ${o.reason}`, "the directory above the path to delete could not be opened");
    }
    try {
        if (await mt(o.held, r.rel)) {
            return "deleted";
        }
        return "absent";
    } catch (error) {
        if (Se(error)) {
            return {
                unanchored: "no_descriptor_listing"
            };
        }
        throw error;
    } finally{
        await o.held.close().catch(()=>{});
    }
}
async function Qts(e, n, i = {}) {
    if (typeof await qt(e, n, i) === "object") {
        await rm(e, {
            recursive: true,
            force: true
        });
    }
}
function ETe(e) {
    switch(e.outcome){
        case "removed":
            return "removed";
        case "not_registered":
            return "git has no usable record of a worktree at this path; nothing was deleted";
        case "locked":
            return "the worktree is locked (by `git worktree lock`); nothing was deleted. `git worktree unlock <path>` unlocks it";
        case "not_pointing_back":
            return "the worktree's .git file is missing or does not point to git's record of it; nothing was deleted";
        case "refused":
            return `${e.reason}; nothing was deleted`;
        case "delete_failed":
            if (e.reason === nt) {
                return `${nt}; try removing it again once nothing is writing to it`;
            }
            if (e.reason === "WORKING_NAME_NOT_PLAIN") {
                return "it holds a file name that Windows cannot delete this way; some of its other files may already be deleted";
            }
            if (e.reason === "ENOTEMPTY") {
                return "a folder in it could not be emptied: it may be unreadable, or something may still be writing to it; check its permissions and try removing it again";
            }
            if (e.reason === "WORKING_FILE_HELD") {
                return "a program has one of its files open; try removing it again once that program closes it";
            }
            if (e.reason === "EBUSY") {
                return "some of its files could not be deleted: EBUSY; a program may have them open, so try removing it again";
            }
            return `some of its files could not be deleted: ${e.reason}`;
        case "registration_kept":
            return `its files were deleted, but git still lists it (${e.reason})`;
        case "unanchored":
            if (e.reason === "no_descriptor_listing") {
                return "this machine cannot list a folder it holds open, so it cannot delete it without following links";
            }
            return `this machine cannot open folders without following links (${e.reason})`;
    }
}
var nt = "files kept appearing in the worktree while it was being deleted";
function Se(e) {
    return v(e) === "WORKING_LIST_UNSUPPORTED";
}
function Jt(rel) {
    if (rel.includes("/")) {
        return rel.slice(0, rel.lastIndexOf("/"));
    }
    return "";
}
async function se(e, n, { holdBase = false } = {}) {
    let r = (f, absent = false)=>({
            outcome: "refused",
            reason: f,
            absent
        });
    let realBase = await (async ()=>{
        if (n === "root") {
            return realpath(e);
        }
        let f = join(await realpath(dirname(e)), basename(e));
        if (n === "not_a_link" && O() !== "windows" && await tn(f)) {
            return realpath(f);
        }
        return f;
    })().catch((f)=>{
        if (z(f)) {
            return undefined;
        }
        if (v(f) === "ELOOP") {
            return "link";
        }
        return null;
    });
    if (realBase === "link") {
        return r(`${e} is a link, or its spelling differs from the one on disk`);
    }
    if (realBase === undefined || realBase === null) {
        return r(`${e} does not exist or cannot be read`, realBase === undefined);
    }
    if (n === "canonical" && !ie(realBase, e)) {
        return r(`${e} is reached through a link, or its spelling differs from the one on disk (it resolves to ${realBase})`);
    }
    let root = parse(realBase).root;
    let d = O() === "windows" || holdBase ? realBase : await Qt(realBase);
    if (d === null) {
        return r(`a directory above ${e} cannot be read`);
    }
    let u = await Xt().catch((f)=>({
            failed: l(f)
        }));
    if ("failed" in u) {
        return r(`${e} could not be opened safely (${u.failed})`);
    }
    let { tree, host } = u;
    let h = await tree.openTreeAnchor(host, {
        gitRoot: d,
        realRoot: d
    }).catch((f)=>({
            failed: l(f),
            code: v(f)
        }));
    if ("failed" in h) {
        let f = d === realBase;
        if (f && h.code === "ENOENT") {
            return r(`${e} does not exist`, true);
        }
        if (f && (h.code === "ELOOP" || h.code === "ENOTDIR")) {
            return r(`${e} is a link, or changed while it was being opened`);
        }
        if (f && h.code === "WORKING_ROOT_NOT_CANONICAL") {
            return r(`${e} is reached through a link, or its spelling differs from the one on disk`);
        }
        return r(`${e} could not be opened safely (${h.failed})`);
    }
    if ("unavailable" in h) {
        let f = tree.getUnavailableReason(await tree.checkAnchoring(root, {
            host
        }));
        let p = f === "no_ffi" || f === "remote_volume" && (n !== "not_a_link" || await en(e, root));
        if (f !== null && (O() !== "windows" || p)) {
            return {
                outcome: "unanchored",
                reason: f
            };
        }
        return r(`${e} could not be opened safely (${h.unavailable})`);
    }
    let y = d === realBase ? "" : realBase.slice(dc(d).length).split(sep).filter(Boolean).join("/");
    let held = nn(h, y);
    let m = await held.lstat("").then((f)=>f, (f)=>({
            error: f
        }));
    if ("error" in m || !m.isDirectory()) {
        await h.close().catch(()=>{});
        if ("error" in m && z(m.error)) {
            return r(`${e} does not exist`, true);
        }
        return r(`${e} is a link, or changed while it was being opened`);
    }
    return {
        held,
        realBase
    };
}
async function Qt(realBase) {
    let root = parse(realBase).root;
    let i = realBase.slice(root.length).split(sep).filter(Boolean);
    let r = root;
    let o = root;
    let s = false;
    for (let c of i){
        let d = await Pe(o, constants.R_OK);
        let u = await Pe(o, constants.W_OK);
        if (d === null || u === null) {
            return null;
        }
        if (!d) {
            let w = await lstat(o).then((g)=>g.uid, ()=>null);
            if (w === null || w === process.getuid?.() || u || s) {
                return null;
            }
            r = join(o, c);
        }
        s ||= u;
        o = join(o, c);
    }
    return r;
}
async function en(e, root) {
    let i = await realpath(parse(e).root).catch(()=>null);
    return i !== null && Ku(dc(parse(i).root)) === Ku(dc(root));
}
async function Pe(e, n) {
    return access(e, n).then(()=>true, (i)=>{
        if ([
            "EACCES",
            "EPERM",
            "EROFS"
        ].includes(v(i) ?? "")) {
            return false;
        }
        return null;
    });
}
async function tn(e) {
    let n = await lstat(e).catch(()=>null);
    if (n === null || !n.isSymbolicLink()) {
        return false;
    }
    for(let i = dirname(e);; i = dirname(i)){
        if (await lstat(i).then((o)=>o.uid, ()=>null) !== 0 || await Pe(i, constants.W_OK) !== false) {
            return false;
        }
        if (dirname(i) === i) {
            return true;
        }
    }
}
function nn(e, n) {
    let i = (r)=>{
        if (n === "") {
            return r;
        }
        if (r === "") {
            return n;
        }
        return `${n}/${r}`;
    };
    return {
        lstat: (r)=>e.lstat(i(r)),
        list: (r, o)=>e.list(i(r), o),
        unlink: (r)=>e.unlink(i(r)),
        rmdir: (r)=>e.rmdir(i(r)),
        rename: (r, o)=>e.rename(i(r), i(o)),
        removeTree: (r, o)=>e.removeTree(i(r), o),
        open: (r, o)=>e.open(i(r), o),
        create: (r, o, s)=>e.create(i(r), o, s),
        close: ()=>e.close()
    };
}
async function rn(e) {
    let n = e;
    let i = await Lnt(e, {
        dotGitLink: "vet"
    });
    if ("skipped" in i && i.skipped === "pointer") {
        let o = w0(e);
        if (o !== null && o !== e) {
            n = o;
            i = await Lnt(o, {
                dotGitLink: "vet"
            });
        } else {
            let s = await Irn(e);
            if (s === null) {
                return {
                    why: "its .git file names no usable git directory"
                };
            }
            if ("refused" in await KDe(e, s)) {
                return {
                    why: `its .git file names ${s}, which is inside the working tree, or could not be checked against it`
                };
            }
            let [c, d] = await Promise.all([
                s,
                e
            ].map((w)=>realpath(w).catch(()=>null)));
            if (c == null || d == null) {
                return {
                    why: c == null ? `its .git file names ${s}, which does not exist or cannot be resolved` : "the repository root cannot be resolved"
                };
            }
            if (dt(qyr(c), qyr(d))) {
                return {
                    why: `its .git file names ${s}, which resolves into the working tree`
                };
            }
            if (await lstat(join(c, "commondir")).then(()=>false, (w)=>z(w))) {
                return {
                    dir: c,
                    root: e
                };
            }
            return {
                why: "its .git file names another worktree"
            };
        }
    }
    if ("skipped" in i) {
        return {
            why: i.why
        };
    }
    let r = await KDe(n, i.gitDir);
    if ("refused" in r) {
        return {
            why: r.refused
        };
    }
    return {
        dir: r.gitDir,
        root: n
    };
}
async function rt(held, n, i) {
    return held.lstat(n).then((r)=>r.isDirectory() && r.dev !== 0n && !Hg(r.ino) && r.dev === i.dev && r.ino === i.ino, ()=>false);
}
async function it(held, n) {
    for (let i of [
        "objects",
        "config",
        "packed-refs",
        "hooks",
        "worktrees"
    ]){
        if (await held.lstat(`${n}/${i}`).then(()=>true, (o)=>!z(o))) {
            return true;
        }
    }
    return false;
}
async function on(e, entryId, i, locked) {
    let o = await se(e, "canonical", {
        holdBase: true
    });
    if (!("held" in o)) {
        t(`Kept the registration ${entryId} in ${e}: ${o.reason}`, {
            level: "warn"
        });
        return false;
    }
    try {
        let s = `worktrees/${entryId}`;
        if (!await rt(o.held, s, i)) {
            throw Error("its folder changed after it was checked, or this volume cannot show it is the same folder");
        }
        if (locked === "keep" && await o.held.lstat(`worktrees/${entryId}/locked`).then(()=>true, (u)=>!z(u))) {
            throw Error("it was locked while the checkout was being deleted");
        }
        let c = new x(`${s} has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them, so nothing in it was removed`, "the registration entry has a git directory's own files in it, or could not be checked for them");
        if (await it(o.held, s)) {
            throw c;
        }
        await o.held.unlink(`${s}/gitdir`).catch((u)=>{
            if (!z(u)) {
                throw u;
            }
        });
        if (await it(o.held, s)) {
            t(`Dropped the registration ${s} in ${e} (git no longer lists it) but left its folder, which now has a git directory's own files (objects, config, packed-refs, hooks or worktrees) in it, or could not be checked for them. git's next \`git worktree prune\` or \`git gc\` deletes that folder whole; move out anything you need first.`, {
                level: "warn"
            });
            return false;
        }
        await Te(o.held, s);
        if (await o.held.rmdir(s).then(()=>true, (u)=>z(u))) {
            return true;
        }
        if (!await rt(o.held, s, i)) {
            t(`Dropped the registration ${s} in ${e} (git no longer lists it) but left its folder: it changed while it was being emptied`, {
                level: "warn"
            });
            return false;
        }
        let d = `${s}.claude-dropped-${randomBytes(4).toString("hex")}`;
        return await o.held.rename(s, d).then(()=>{
            t(`Dropped the registration ${s} in ${e}; its folder held files Claude Code does not delete (such as a reftable repository's refs), so it was moved to ${d}; git worktree prune removes it`, {
                level: "warn"
            });
            return true;
        }, (u)=>{
            t(`Dropped the registration ${s} in ${e} (git no longer lists it) but could not move its folder aside (${l(u)}); git worktree prune removes it`, {
                level: "warn"
            });
            return false;
        });
    } catch (error) {
        t(`Kept the registration ${entryId} in ${e}: ${l(error)}`, {
            level: "warn"
        });
        return false;
    } finally{
        await o.held.close().catch(()=>{});
    }
}
async function ot(e, n, i, entryId) {
    let o = join(i, "worktrees", entryId);
    if (n.outcome === "dropped" || n.outcome === "none" && await lt(i, entryId) === "absent") {
        return {
            outcome: "removed"
        };
    }
    let s = n.outcome === "kept" ? n.reason : `git's record of it at ${o} could not be read`;
    t(`Worktree ${e} is gone but git still lists it: ${s}`, {
        level: "warn"
    });
    return {
        outcome: "registration_kept",
        reason: s
    };
}
async function lt(e, entryId) {
    let i = await se(e, "canonical", {
        holdBase: true
    });
    if (!("held" in i)) {
        return null;
    }
    try {
        return await i.held.lstat(`worktrees/${entryId}`).then((r)=>({
                dev: r.dev,
                ino: r.ino
            }), (r)=>{
            if (z(r)) {
                return "absent";
            }
            return null;
        });
    } finally{
        await i.held.close().catch(()=>{});
    }
}
function sn(error) {
    if (v(error) === "ENOTEMPTY" && !("syscall" in Object(error))) {
        return l(error);
    }
    return v(error) ?? "an unknown error";
}
function ie(e, n) {
    return oe(e) === oe(n);
}
function ut(e, n) {
    return Mit(oe(e), n.map(oe));
}
function oe(e) {
    if (O() === "windows") {
        return e.replace(/^[a-z](?=:)/, (n)=>n.toUpperCase());
    }
    return e;
}
function st(e, n) {
    return e.length > n.length + 1 && ie(e.slice(0, n.length + 1), n + sep);
}
function dt(e, n) {
    return e === n || e.startsWith(n.endsWith(sep) ? n : n + sep);
}
async function an(e, n) {
    let [i, r, o] = await Promise.all([
        lstat(e, {
            bigint: true
        }).catch(()=>null),
        lstat(n, {
            bigint: true
        }).catch(()=>null),
        lstat(dirname(n), {
            bigint: true
        }).catch(()=>null)
    ]);
    return i !== null && r !== null && o !== null && i.dev !== 0n && !Hg(i.ino) && i.dev === r.dev && i.ino === r.ino && !(o.dev === r.dev && o.ino === r.ino);
}
async function ft(e, n, { parentLinkToRoot = false } = {}) {
    let r = dc(normalize(n));
    let o = (g, h)=>g.slice(h.length + 1).split(sep).join("/");
    let s = [];
    let c = [];
    for (let g of e){
        let h = await realpath(g).catch(()=>null);
        s.push(g, ...h === null ? [] : [
            h
        ]);
        if (h !== null) {
            c.push(dc(h));
        }
    }
    let d = s.map((g)=>dc(normalize(g)));
    for (let g of d){
        if (st(r, g)) {
            let h = r.slice(0, g.length);
            return {
                base: h.endsWith(":") ? h + sep : h,
                rel: o(r, g),
                underRoot: true
            };
        }
    }
    let u = (g)=>Ku(g.normalize("NFC"));
    let w = d.find((g)=>st(u(r), u(g)));
    if (w !== undefined) {
        let g = r.split(sep);
        let h = w.split(sep).length;
        if (O() !== "windows" && await an(g.slice(0, h).join(sep), w)) {
            return {
                base: w,
                rel: g.slice(h).join("/"),
                underRoot: true
            };
        }
        return {
            refused: `${n} spells the repository folder ${w} in another letter case or Unicode form (use the path as git records it)`
        };
    }
    if (c.length > 0) {
        let g = r.split(sep);
        let h = null;
        for(let f = 1; f < g.length - 1; f++){
            let p = g.slice(0, f).join(sep);
            let E = p === "" || p.endsWith(":") ? p + sep : p;
            let b = await realpath(E).catch(()=>null);
            h = b;
            let k = b === null ? null : dc(b);
            let P = k === null ? undefined : c.find((S)=>ie(k, S));
            if (P !== undefined) {
                return {
                    base: P,
                    rel: g.slice(f).join("/"),
                    underRoot: true
                };
            }
            if (k !== null && c.some((S)=>dt(k, S))) {
                return {
                    refused: `${n} is reached through a link into the repository at ${E}`
                };
            }
        }
        let y = h === null ? null : join(h, g.at(-2));
        let T = y === null || !parentLinkToRoot ? null : await ln(y);
        let m = [
            y,
            T
        ].flatMap((f)=>{
            if (f === null) {
                return [];
            }
            return [
                f
            ];
        }).map((f)=>c.find((p)=>ie(f, p))).find((f)=>f !== undefined);
        if (m !== undefined) {
            return {
                base: m,
                rel: g.at(-1),
                underRoot: true
            };
        }
    }
    return gt(r);
}
async function ln(e) {
    let n = await readlink(e).catch(()=>null);
    if (n === null) {
        return null;
    }
    let i = O() === "windows" && /^\\\\\?\\[A-Za-z]:\\/.test(n);
    if (i && n.includes("/")) {
        return null;
    }
    let r = i ? n.slice(4) : n;
    let o = r.split(sep === "\\" ? /[\\/]/ : /\//);
    if ((isAbsolute(r) ? o : o.slice(Math.max(0, o.findIndex((c)=>c !== "..")))).some((c)=>c === "." || c === "..")) {
        return null;
    }
    return dc(normalize(isAbsolute(r) ? r : join(dirname(e), r)));
}
function gt(e) {
    let n = dc(normalize(e));
    let root = parse(n).root;
    let r = n.lastIndexOf(sep);
    if (n === root || r === n.length - 1 || r < 0) {
        return null;
    }
    return {
        base: r < root.length ? root : n.slice(0, r),
        rel: n.slice(r + 1),
        underRoot: false
    };
}
async function ht(e, n, i, r, o) {
    let s = isAbsolute(e) ? [
        normalize(e)
    ] : n.map((u)=>normalize(resolve(u, e)));
    let c = await realpath(i).catch(()=>null);
    let d = [
        r,
        join(i, ".git")
    ].concat(c === null ? [] : [
        join(c, ".git")
    ]).map((u)=>join(u, "worktrees", o));
    return s.some((u)=>ut(u, d));
}
async function cn(held, rel, i, r, o) {
    let s = await wt(held, `${rel}/.git`);
    if ("error" in s || s.value === null) {
        return null;
    }
    let c = basename(normalize(s.value));
    if (await ht(s.value, i, r, o, c)) {
        return c;
    }
    return null;
}
async function un(e, n) {
    let i = Buffer.alloc(n + 1);
    let r = 0;
    while(true){
        let { bytesRead } = await e.read(i, r, i.length - r, r);
        if (bytesRead === 0) {
            return i.subarray(0, r);
        }
        r += bytesRead;
        if (r > n) {
            return null;
        }
    }
}
async function wt(held, n) {
    let i = {
        value: null,
        bytes: Buffer.alloc(0)
    };
    let r;
    try {
        r = await held.open(n, Zt());
    } catch (error) {
        let s = v(error);
        if (s === "ENOENT" || s === "ELOOP" || s === "EISDIR") {
            return i;
        }
        return {
            error: s ?? l(error)
        };
    }
    try {
        if (!(await r.stat()).isFile()) {
            return i;
        }
        let bytes = await un(r, Vt);
        if (bytes === null) {
            return i;
        }
        let s = /^gitdir: ([^\r\n]+)[\r\n]*$/.exec(bytes.toString("utf8"));
        return {
            value: s ? s[1] : null,
            bytes
        };
    } catch (error) {
        return {
            error: v(error) ?? l(error)
        };
    } finally{
        await r.close().catch(()=>{});
    }
}
async function mt(held, n, i = {
    deleted: false
}) {
    try {
        await held.unlink(n);
        i.deleted = true;
        return true;
    } catch (error) {
        let o = v(error);
        if (o === "ENOENT") {
            return false;
        }
        if (o !== "EISDIR" && o !== "EPERM" && o !== "EACCES") {
            throw error;
        }
        let s = await held.lstat(n).catch(()=>null);
        if (s === null || !s.isDirectory()) {
            throw error;
        }
        await held.removeTree(n, {
            onDeleted: ()=>{
                i.deleted = true;
            }
        });
        return true;
    }
}
async function dn(held, rel, bytes, r = {
    deleted: false
}, { pointerFirst = false } = {}) {
    if (pointerFirst) {
        await held.unlink(`${rel}/.git`);
        r.deleted = true;
    }
    for(let s = 0;; s++){
        let c = (await held.list(rel)).filter((d)=>d !== ".git");
        if (c.length === 0) {
            break;
        }
        if (s === zt) {
            let d = Error("files kept appearing in the worktree while it was being deleted");
            d.code = "ENOTEMPTY";
            throw d;
        }
        if (c.some((d)=>d.includes("\uFFFD"))) {
            await held.removeTree(rel, {
                keep: ".git",
                onDeleted: ()=>{
                    r.deleted = true;
                }
            });
            continue;
        }
        for (let d of c){
            await mt(held, `${rel}/${d}`, r);
        }
    }
    if (!pointerFirst) {
        await held.unlink(`${rel}/.git`);
        r.deleted = true;
    }
    try {
        await held.removeTree(rel);
    } catch (error) {
        if (!pointerFirst) {
            await held.create(`${rel}/.git`, bytes, 420).catch(()=>{});
        }
        throw error;
    }
}
export { ycr, Lnt, MYt, KDe, HJ, wVe, Nnt, Qts, ETe };
