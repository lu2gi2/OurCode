import { G2 } from "/$bunfs/root/chunk-vmr48rzv.js";
import { l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { An, Cs, zUe, B1, it, ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { KE, Arn, Ot } from "/$bunfs/root/chunk-2d9a83dh.js";
import { bs } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { wYt, oye, GRn, VDe, icr, kYt, VRn, TYt, rkt, CYt, okt, lcr, ccr, wTe } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { IW, Ui } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { Tk } from "/$bunfs/root/chunk-46dhek9m.js";
import { xqn, Van } from "/$bunfs/root/chunk-5eqja8yr.js";
import { m$t } from "/$bunfs/root/chunk-ph2t5k7c.js";
import { $Wo } from "/$bunfs/root/chunk-gfqbjhwg.js";
import { TD, AD } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { constants } from "fs";
import { open, realpath, lstat, mkdir, mkdtemp, opendir, rm, writeFile } from "fs/promises";
import { basename, dirname, join } from "path";
import { tmpdir } from "os";
const Ae = 65536;
const se = 1000000;
const Oe = 33554432;
const Fe = 65536;
const Ie = 65536;
const Ge = 1000000;
const Me = 67108864;
const Ne = 256;
const xe = 20000;
const Be = 4096;
const Le = [
    [
        "core.commitGraph",
        "false"
    ],
    [
        "core.multiPackIndex",
        "false"
    ]
];
const ue = {
    disposition: "skip"
};
const fe = new Map([
    [
        "config",
        {
            disposition: "copy",
            kind: "file",
            maxBytes: se
        }
    ],
    [
        "config.worktree",
        {
            disposition: "copy",
            kind: "file",
            maxBytes: se
        }
    ],
    [
        "HEAD",
        {
            disposition: "copy",
            kind: "file",
            maxBytes: Ae
        }
    ],
    [
        "packed-refs",
        {
            disposition: "copy",
            kind: "file",
            maxBytes: Oe
        }
    ],
    [
        "shallow",
        {
            disposition: "copy",
            kind: "file",
            maxBytes: Ie
        }
    ],
    [
        "refs",
        {
            disposition: "copy",
            kind: "dir",
            maxFileBytes: Fe,
            entries: "all"
        }
    ],
    [
        "info",
        {
            disposition: "copy",
            kind: "dir",
            maxFileBytes: Ge,
            entries: new Set([
                "exclude",
                "attributes",
                "sparse-checkout",
                "grafts"
            ])
        }
    ],
    [
        "objects",
        {
            disposition: "in-place",
            kind: "dir"
        }
    ],
    [
        "index",
        {
            disposition: "in-place",
            kind: "file"
        }
    ],
    [
        "commondir",
        {
            disposition: "refuse"
        }
    ],
    [
        "gitdir",
        {
            disposition: "refuse"
        }
    ],
    [
        "reftable",
        {
            disposition: "refuse"
        }
    ],
    ...[
        "hooks",
        "logs",
        "branches",
        "remotes",
        "FETCH_HEAD",
        "ORIG_HEAD",
        "MERGE_HEAD",
        "AUTO_MERGE",
        "REBASE_HEAD",
        "CHERRY_PICK_HEAD",
        "REVERT_HEAD",
        "MERGE_AUTOSTASH",
        "COMMIT_EDITMSG",
        "MERGE_MSG",
        "MERGE_MODE",
        "MERGE_RR",
        "SQUASH_MSG",
        "TAG_EDITMSG",
        "rebase-merge",
        "rebase-apply",
        "sequencer",
        "rr-cache",
        "worktrees",
        "modules",
        "lfs",
        "gc.log",
        "gc.pid",
        "description",
        "gitk.cache"
    ].map((e)=>[
            e,
            ue
        ])
]);
const Ce = /^(?:BISECT_[A-Z_]+|fsmonitor--daemon.*|.+\.lock)$/;
function He(name) {
    return fe.get(name) ?? (Ce.test(name) ? ue : undefined);
}
const ze = [
    /^(?:commit|tag|pull|push|rebase|init|advice|color|column|help|status|fetch|user|branch)\..+$/,
    /^core\.(?:repositoryformatversion|filemode|bare|logallrefupdates|ignorecase|precomposeunicode|symlinks|autocrlf|eol|safecrlf|longpaths|sparsecheckout|sparsecheckoutcone|quotepath|abbrev|checkstat|trustctime|untrackedcache)$/,
    /^remote\..+\.(?:url|pushurl|fetch|promisor|partialclonefilter|tagopt|prune|mirror|gh-resolved)$/,
    /^submodule\.active$/,
    /^submodule\..+\.(?:active|branch|url)$/,
    /^http\.(?:.+\.)?extraheader$/,
    /^maintenance\..+$/,
    /^(?:extensions\.(?:objectformat|partialclone|worktreeconfig)|lfs\.repositoryformatversion)$/
];
const We = new Set([
    "checkout",
    "rebase",
    "merge",
    "none"
]);
async function le(e) {
    let n = TYt(e);
    if (n === null || n.workTree === null) {
        return null;
    }
    let { gitDir, workTree } = n;
    let i;
    try {
        let o = await je(gitDir);
        if (typeof o === "string") {
            return x(o);
        }
        let c = await Ue(join(gitDir, "objects"));
        if (c !== undefined) {
            return x(c);
        }
        i = await mkdtemp(join(tmpdir(), "ccdiff-"));
        let a = i;
        let u = await Ye(gitDir, a, o) ?? await Ke(a, o.has("config.worktree"));
        if (u !== undefined) {
            await Y(a);
            return x(u);
        }
        return {
            spawn: $e(a, gitDir, workTree),
            dispose: ()=>Y(a)
        };
    } catch (error) {
        if (i !== undefined) {
            await Y(i);
        }
        return x(`unexpected error (${l(error)})`);
    }
}
async function Y(e) {
    await rm(e, {
        recursive: true,
        force: true
    }).catch(()=>{});
}
function x(e) {
    t(`workspace diff: discovered repository refused (${e})`, {
        level: "warn"
    });
    return null;
}
function de() {
    return [
        ...zUe(),
        ...Le
    ];
}
function $e(e, gitDir, workTree) {
    return {
        env: {
            ...Cs(oye, {
                base: bs(),
                repository: {
                    gitDir: e,
                    workTree,
                    commonDir: e
                }
            }),
            ...wYt,
            ...B1(undefined, de()),
            GIT_OBJECT_DIRECTORY: join(gitDir, "objects"),
            GIT_INDEX_FILE: join(gitDir, "index")
        },
        extendEnv: false
    };
}
async function je(gitDir) {
    let n = new Set;
    let r = 0;
    for await (let s of (await opendir(gitDir))){
        if (++r > Ne) {
            return "oversized .git";
        }
        let i = He(s.name);
        if (i === undefined) {
            return "unknown .git entry";
        }
        switch(i.disposition){
            case "skip":
                continue;
            case "refuse":
                return `.git/${s.name}`;
            case "copy":
            case "in-place":
                if (s.name === "index") {
                    let o = await lstat(join(gitDir, s.name));
                    if (!o.isFile() || o.nlink > 1) {
                        return "symlinked, hardlinked or unexpected .git/index";
                    }
                } else if (await J(gitDir, s) !== i.kind) {
                    return `symlinked or unexpected .git/${s.name}`;
                }
                n.add(s.name);
        }
    }
    if (!n.has("config") || !n.has("HEAD")) {
        return "no .git/config or .git/HEAD";
    }
    return n;
}
async function Ue(e) {
    for (let n of [
        e,
        join(e, "pack"),
        join(e, "info")
    ]){
        if (!await Je(n)) {
            return "symlinked or oversized .git/objects entry";
        }
    }
    if (await qe(join(e, "info", "alternates"))) {
        return ".git/objects/info/alternates";
    }
}
async function Ye(gitDir, n, r) {
    await mkdir(join(n, "refs"), {
        recursive: true
    });
    let s = {
        entries: 0,
        bytes: 0
    };
    for (let [i, o] of fe){
        if (o.disposition !== "copy" || !r.has(i)) {
            continue;
        }
        let c = join(gitDir, i);
        let a = join(n, i);
        if (o.kind === "file") {
            if (await ge(c, a, o.maxBytes, s) !== "copied") {
                return `unreadable, linked or oversized .git/${i}`;
            }
            continue;
        }
        await mkdir(a, {
            recursive: true
        });
        if (!await pe(c, a, o.maxFileBytes, s, o.entries)) {
            return `unreadable, linked or oversized entry under .git/${i}`;
        }
    }
}
async function Ke(e, n) {
    let r = new Set(de().map(([i])=>i.toLowerCase()));
    let s = n ? [
        "config",
        "config.worktree"
    ] : [
        "config"
    ];
    for (let i of s){
        let o = await it(Ot(), [
            "config",
            "--file",
            join(e, i),
            "--no-includes",
            "-z",
            "--list"
        ], {
            timeout: VDe,
            maxBuffer: 4000000,
            env: {
                ...Cs(oye, {
                    base: bs()
                }),
                ...wYt
            },
            extendEnv: false,
            stdin: "ignore"
        });
        if (o.code !== 0) {
            return `config ${i} unlistable`;
        }
        for (let c of o.stdout.split("\x00")){
            if (c === "") {
                continue;
            }
            let a = c.indexOf(`
`);
            let u = a === -1 ? c : c.slice(0, a);
            let f = a === -1 ? "" : c.slice(a + 1);
            if (f.includes(`
`)) {
                return `multi-line value for ${oe(u)}`;
            }
            if (!Xe(u, f, r)) {
                return `config entry ${oe(u)}`;
            }
        }
    }
}
function Xe(e, n, r) {
    if (e === "extensions.refstorage") {
        return n === "files";
    }
    if (/^submodule\..+\.update$/.test(e)) {
        return We.has(n);
    }
    return r.has(e) || ze.some((s)=>s.test(e));
}
function oe(e) {
    let n = e.split(".");
    if (n.length <= 2) {
        return e;
    }
    return `${n[0]}.<...>.${n.at(-1)}`;
}
async function pe(e, n, r, s, i) {
    let o;
    try {
        o = await opendir(e);
    } catch (error) {
        return z(error);
    }
    for await (let c of o){
        if (++s.entries > xe) {
            return false;
        }
        if (i !== "all" && !i.has(c.name)) {
            continue;
        }
        let a = join(e, c.name);
        let u = join(n, c.name);
        let f = await J(e, c);
        if (f === "dir" && i === "all") {
            await mkdir(u, {
                recursive: true
            });
            if (!await pe(a, u, r, s, "all")) {
                return false;
            }
        } else if (f === "file") {
            if (await ge(a, u, r, s) !== "copied") {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}
async function J(e, n) {
    if (n.isSymbolicLink()) {
        return "reject";
    }
    if (n.isDirectory()) {
        return "dir";
    }
    if (n.isFile()) {
        return "file";
    }
    try {
        let r = await lstat(join(e, n.name));
        if (r.isSymbolicLink()) {
            return "reject";
        }
        if (r.isDirectory()) {
            return "dir";
        }
        if (r.isFile()) {
            return "file";
        }
        return "reject";
    } catch  {
        return "reject";
    }
}
async function Je(e) {
    let n;
    try {
        n = await opendir(e);
    } catch (error) {
        return z(error);
    }
    let r = 0;
    for await (let s of n){
        if (++r > Be || await J(e, s) === "reject") {
            return false;
        }
    }
    return true;
}
function me() {
    if (O() === "windows") {
        return constants.O_RDONLY;
    }
    return constants.O_RDONLY | constants.O_NONBLOCK | constants.O_NOFOLLOW;
}
async function ge(e, n, r, s) {
    let i;
    try {
        i = await open(e, me());
    } catch (error) {
        if (z(error)) {
            return "absent";
        }
        return "refused";
    }
    try {
        let o = await i.stat();
        if (!o.isFile() || o.nlink > 1 || o.size > r) {
            return "refused";
        }
        s.bytes += o.size;
        if (s.bytes > Me) {
            return "refused";
        }
        let c = Buffer.alloc(o.size);
        let a = 0;
        while(a < o.size){
            let { bytesRead } = await i.read(c, a, o.size - a, a);
            if (bytesRead === 0) {
                break;
            }
            a += bytesRead;
        }
        if (a !== o.size) {
            return "refused";
        }
        await writeFile(n, c);
        return "copied";
    } catch  {
        return "refused";
    } finally{
        await i.close().catch(()=>{});
    }
}
async function qe(e) {
    let n;
    try {
        n = await open(e, me());
    } catch (error) {
        return !z(error);
    }
    try {
        let r = await n.stat();
        return !r.isFile() || r.size > 0;
    } finally{
        await n.close().catch(()=>{});
    }
}
async function Qe(e) {
    let n = dirname(e);
    let r = [
        basename(e)
    ];
    for(let s = 0; s < 64; s++){
        try {
            let o = await realpath(n);
            return join(o, ...r);
        } catch (error) {
            if (error?.code !== "ENOENT") {
                return;
            }
        }
        let i = dirname(n);
        if (i === n) {
            return;
        }
        r.unshift(basename(n));
        n = i;
    }
}
const et = 2000000;
const tt = new Set([
    "100644",
    "100755",
    "100664"
]);
const Q = 10000000;
const maxEditLength = 10000;
const rt = {
    perFileMs: 5000,
    totalMs: 10000
};
const st = xqn | (constants.O_NOFOLLOW ?? 0);
function we(e) {
    if (e.length === 0 || e.startsWith('"')) {
        return false;
    }
    if (/[\u0000-\u001f\u007f\uFFFD]/.test(e)) {
        return false;
    }
    if (e.startsWith("-") || e.startsWith(":") || e.includes(" => ") || e.includes("\\") || !lcr(e)) {
        return false;
    }
    return e.split("/").every((n)=>n !== "" && IW(n) !== ".");
}
function B(e) {
    if (!ccr.test(e)) {
        return e;
    }
    let n = e.length > 1 && e.startsWith('"') && e.endsWith('"') && !e.includes('" => ');
    return $Wo(n ? wTe(e.slice(1, -1)) : e);
}
const ye = /^[0-9a-f]{40,64}$/;
function R(e) {
    return [
        "--literal-pathspecs",
        ...An,
        ...e
    ];
}
function b(cwd, n) {
    return {
        ...n,
        cwd,
        timeout: VDe,
        preserveOutputOnError: false
    };
}
async function ot(e, n, r, s) {
    let { stdout, code } = await ct(Ot(), R([
        "ls-tree",
        "-r",
        "-l",
        "-z",
        "--full-tree",
        n,
        "--",
        ...r
    ]), {
        ...b(e, s),
        maxBuffer: 10000000
    });
    if (code !== 0) {
        return null;
    }
    let c = new Map;
    for (let a of stdout.split("\x00")){
        if (!a) {
            continue;
        }
        let u = a.match(/^(\d{6}) (\S+) ([0-9a-f]{40,64}) +(\d+|-)\t(.+)$/s);
        if (!u) {
            continue;
        }
        let [, f = "", m, p = "", w, y] = u;
        if (y === undefined) {
            continue;
        }
        c.set(y, {
            mode: f,
            oid: p,
            size: m === "blob" && w !== "-" ? Number(w) : -1
        });
    }
    return c;
}
async function at(e, n, r) {
    let { stdout, code } = await ct(Ot(), R([
        "ls-files",
        "--stage",
        "-z",
        "--",
        ...n
    ]), {
        ...b(e, r),
        maxBuffer: 10000000
    });
    if (code !== 0) {
        return null;
    }
    let o = new Map;
    let c = new Set;
    for (let m of stdout.split("\x00")){
        if (!m) {
            continue;
        }
        let p = m.match(/^(\d{6}) ([0-9a-f]{40,64}) (\d+)\t(.+)$/s);
        if (!p) {
            continue;
        }
        let [, w = "", y = "", v, T] = p;
        if (T === undefined) {
            continue;
        }
        if (v !== "0") {
            c.add(T);
            continue;
        }
        o.set(T, {
            mode: w,
            oid: y,
            size: -1
        });
    }
    for (let m of c){
        o.delete(m);
    }
    if (o.size === 0) {
        return o;
    }
    let a = D(Array.from(o.values(), (m)=>m.oid));
    let u = await ct(Ot(), R([
        "cat-file",
        "--batch-check=%(objectname) %(objectsize)"
    ]), {
        ...b(e, r),
        maxBuffer: 10000000,
        input: a.join(`
`) + `
`
    });
    if (u.code !== 0) {
        return null;
    }
    let f = new Map;
    for (let m of u.stdout.split(`
`)){
        let p = m.match(/^([0-9a-f]{40,64}) (\d+)$/);
        if (p && p[1] !== undefined) {
            f.set(p[1], Number(p[2]));
        }
    }
    for (let [m, p] of o){
        let w = f.get(p.oid);
        if (w === undefined) {
            o.delete(m);
        } else {
            p.size = w;
        }
    }
    return o;
}
async function ut(e, oid, r) {
    if (!ye.test(oid)) {
        return null;
    }
    let { stdout, code } = await ct(Ot(), R([
        "cat-file",
        "blob",
        oid
    ]), {
        ...b(e, r),
        maxBuffer: Q + 65536,
        stripFinalNewline: false
    });
    if (code === 0) {
        return stdout;
    }
    return null;
}
async function ft(e, n) {
    let r;
    try {
        r = await open(e, st);
    } catch (error) {
        if (error?.code === "ENOENT") {
            return {
                kind: "missing"
            };
        }
        return {
            kind: "restricted"
        };
    }
    try {
        let s = await r.stat({
            bigint: true
        });
        if (!s.isFile()) {
            return {
                kind: "not-regular-file"
            };
        }
        if (s.nlink !== 1n || s.dev === 0n || s.ino === 0n) {
            return {
                kind: "restricted"
            };
        }
        let i;
        try {
            i = await realpath(e);
        } catch  {
            return {
                kind: "restricted"
            };
        }
        let o = await Arn(r, s, i);
        if (o === undefined) {
            return {
                kind: "restricted"
            };
        }
        i = o;
        if (!Tk(i, n, "read").allowed || Ui(i, n, "read", "ask") !== null) {
            return {
                kind: "restricted"
            };
        }
        if (AD(i, n.trustedNetworkDirectories) !== undefined) {
            return {
                kind: "restricted"
            };
        }
        if (!await Van(i, n)) {
            return {
                kind: "restricted"
            };
        }
        let c = await KE(r, Q, s.size);
        if (c.overLimit) {
            return {
                kind: "too-large"
            };
        }
        return {
            kind: "ok",
            content: c.bytes.toString("utf-8")
        };
    } catch  {
        return {
            kind: "restricted"
        };
    } finally{
        await r.close().catch(()=>{});
    }
}
async function q(e, n) {
    let r;
    try {
        r = await realpath(e);
    } catch (error) {
        r = error?.code === "ENOENT" ? await Qe(e) : undefined;
    }
    return r !== undefined && AD(r, n.trustedNetworkDirectories) === undefined && await Van(r, n);
}
async function lt(e, n, r) {
    let { stdout, code } = await ct(Ot(), R([
        "check-attr",
        "-z",
        "-a",
        "--",
        ...n
    ]), {
        ...b(e, r),
        maxBuffer: 10000000
    });
    if (code !== 0) {
        return null;
    }
    let o = new Map(n.map((a)=>[
            a,
            {
                text: "unspecified",
                eol: "unspecified",
                converted: false
            }
        ]));
    let c = stdout.split("\x00");
    for(let a = 0; a + 2 < c.length; a += 3){
        let u = c[a];
        let f = c[a + 1];
        let m = c[a + 2];
        if (u === undefined || f === undefined || m === undefined) {
            continue;
        }
        let p = o.get(u);
        if (!p) {
            continue;
        }
        if (f === "text") {
            p.text = m;
        } else if (f === "eol") {
            p.eol = m;
        } else if (f === "filter" || f === "working-tree-encoding") {
            p.converted = true;
        }
    }
    return o;
}
async function dt(e, n) {
    let { stdout, exitCode } = await ct(Ot(), R([
        "config",
        "--get",
        "core.autocrlf"
    ]), b(e, n));
    if (exitCode !== 0) {
        return false;
    }
    let i = stdout.trim().toLowerCase();
    switch(i){
        case "true":
            return "true";
        case "input":
            return "input";
        default:
            return false;
    }
}
function pt(e) {
    return e.slice(0, 8000).includes("\x00");
}
function mt(e, n, r, s) {
    if (!n || n.converted) {
        return "unsupported";
    }
    if (n.text === "unset") {
        return e;
    }
    let i;
    if (n.text === "set") {
        i = false;
    } else if (n.text === "auto") {
        i = true;
    } else if (n.text === "unspecified") {
        if (r === "true" || r === "input") {
            i = true;
        } else if (n.eol === "crlf" || n.eol === "lf") {
            i = true;
        } else {
            return e;
        }
    } else {
        return e;
    }
    if (!e.includes(`\r
`)) {
        return e;
    }
    if (i && (pt(e) || s.includes(`\r
`))) {
        return e;
    }
    return e.replaceAll(`\r
`, `
`);
}
function gt(e, n, timeout) {
    let s = G2("a", "b", e, n, "", "", {
        context: 3,
        maxEditLength,
        timeout
    });
    if (!s) {
        return null;
    }
    return s.hunks.map((i)=>({
            oldStart: i.oldStart,
            oldLines: i.oldLines,
            newStart: i.newStart,
            newLines: i.newLines,
            lines: i.lines.filter((o)=>!o.startsWith("\\"))
        })).filter((i)=>i.lines.length > 0);
}
function ht(e) {
    let n = kYt;
    let r = [];
    for (let s of e){
        if (n <= 0) {
            break;
        }
        let lines = s.lines.slice(0, n);
        n -= lines.length;
        r.push({
            ...s,
            lines
        });
    }
    return r;
}
async function iMr(e, n, r = rt) {
    let s = await m$t();
    if (s === null) {
        return {
            diff: null
        };
    }
    let i = s.nested ? s.root : null;
    let o = i === null ? null : await le(i);
    if (i !== null && o === null) {
        return {
            diff: null
        };
    }
    try {
        return await Et(e, n, r, s.root, i, o?.spawn);
    } finally{
        await o?.dispose();
    }
}
async function Et(e, n, r, root, i, o) {
    let c = i ?? undefined;
    let a = o ?? {};
    let u = await VRn(e, undefined, "branch-point", c, o);
    if (u === null) {
        return {
            diff: null
        };
    }
    let f = i ?? await CYt();
    if (f === null || f !== root) {
        return {
            diff: null
        };
    }
    let m = rkt(u);
    let p = (d)=>({
            diff: {
                stats: u.stats,
                perFileStats: Array.from(u.perFileStats, ([h, k])=>({
                        path: B(h),
                        ...k
                    })),
                hunks: d.hunks.map((h)=>({
                        ...h,
                        path: B(h.path)
                    })),
                skippedLarge: d.skippedLarge.map(B),
                restricted: d.restricted.map(B),
                source: u.source
            }
        });
    let w = [];
    for (let [d, h] of u.perFileStats){
        let newPath_1 = h.newPath ?? d;
        let oldPath_1 = h.previousPath ?? newPath_1;
        if (h.status === undefined || h.isUntracked || h.isBinary || !we(oldPath_1) || !we(newPath_1)) {
            continue;
        }
        w.push({
            key: d,
            oldPath: oldPath_1,
            newPath: newPath_1,
            removed: h.status === "removed"
        });
    }
    if (w.length === 0) {
        return p({
            hunks: [],
            skippedLarge: [],
            restricted: []
        });
    }
    let y = m === "--cached";
    if (!y && m !== "HEAD" && !ye.test(m)) {
        return p({
            hunks: [],
            skippedLarge: [],
            restricted: []
        });
    }
    let v = w.map((d)=>d.oldPath);
    let T = y ? await at(f, v, a) : await ot(f, m, v, a);
    if (T === null) {
        return p({
            hunks: [],
            skippedLarge: [],
            restricted: []
        });
    }
    let ee = null;
    if (y) {
        let d = await ct(Ot(), R([
            ...GRn,
            "--numstat"
        ]), {
            ...b(f, a),
            maxBuffer: 10000000
        });
        if (d.code !== 0) {
            return p({
                hunks: [],
                skippedLarge: [],
                restricted: []
            });
        }
        ee = new Set(okt(d.stdout, Number.POSITIVE_INFINITY).perFileStats.keys());
    }
    let Se = y ? null : await lt(f, w.map((d)=>d.newPath), a);
    let ke = y ? false : await dt(f, a);
    let skippedLarge = [];
    let restricted = [];
    let te = [];
    let ne = et;
    let r_totalMs = r.totalMs;
    for (let { key, oldPath, newPath, removed } of w){
        await new Promise((resolve)=>setImmediate(resolve));
        let ie = join(f, newPath);
        let F = join(f, oldPath);
        let I = [];
        for (let g of new Set([
            ie,
            F
        ])){
            let M = TD(g, g, n.trustedNetworkDirectories);
            if (!M.ok) {
                I = null;
                break;
            }
            I.push(...M.pathsToCheck);
        }
        if (I === null) {
            restricted.push(key);
            continue;
        }
        if (!I.every((g)=>Tk(g, n, "read").allowed && Ui(g, n, "read", "ask") === null)) {
            restricted.push(key);
            continue;
        }
        let S = T.get(oldPath);
        if (S && !tt.has(S.mode)) {
            continue;
        }
        if (S && (S.size < 0 || S.size > Q)) {
            skippedLarge.push(key);
            continue;
        }
        let C = null;
        if (y) {
            if (!S || ee?.has(key)) {
                continue;
            }
            if (!await q(F, n)) {
                restricted.push(key);
                continue;
            }
        } else {
            let g = removed ? {
                kind: "missing"
            } : await ft(ie, n);
            if (g.kind === "restricted") {
                restricted.push(key);
                continue;
            }
            if (g.kind === "not-regular-file") {
                continue;
            }
            if (g.kind === "too-large") {
                skippedLarge.push(key);
                continue;
            }
            if (g.kind === "missing") {
                if (!S) {
                    continue;
                }
                if (!await q(F, n)) {
                    restricted.push(key);
                    continue;
                }
            } else {
                C = g.content;
                if (S && oldPath !== newPath && !await q(F, n)) {
                    restricted.push(key);
                    continue;
                }
            }
        }
        if (r_totalMs <= 0) {
            skippedLarge.push(key);
            continue;
        }
        let H = S ? await ut(f, S.oid, a) : "";
        if (H === null) {
            continue;
        }
        let W = H;
        let G;
        if (y) {
            W = "";
            G = H;
        } else if (C === null) {
            G = "";
        } else {
            let g = mt(C, Se?.get(newPath), ke, W);
            if (g === "unsupported") {
                continue;
            }
            G = g;
        }
        let _e = Date.now();
        let re = gt(W, G, Math.min(r.perFileMs, r_totalMs));
        r_totalMs -= Date.now() - _e;
        if (re === null) {
            skippedLarge.push(key);
            continue;
        }
        let j = ht(re);
        if (j.length === 0) {
            continue;
        }
        let U = j.reduce((acc, item)=>acc + item.lines.reduce((acc_1, line)=>acc_1 + line.length + 1, 0), 0);
        if (U > icr || U > ne) {
            skippedLarge.push(key);
            continue;
        }
        ne -= U;
        te.push({
            path: key,
            hunks: j
        });
    }
    return p({
        hunks: te,
        skippedLarge,
        restricted
    });
}
export { iMr };
