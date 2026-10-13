import { v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { Qa, Gi } from "/$bunfs/root/chunk-xgw72tt1.js";
import { ec } from "/$bunfs/root/chunk-r3z1chqx.js";
import { PH } from "/$bunfs/root/chunk-z0brrd3r.js";
import { An, n9, Cs, YCr, G5e, ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { gC, v_, GHt, Ot } from "/$bunfs/root/chunk-2d9a83dh.js";
import { ac, rV } from "/$bunfs/root/chunk-pedbhwf4.js";
import { mtn, ul } from "/$bunfs/root/chunk-fnj5y75n.js";
import { rl } from "/$bunfs/root/chunk-w6rkdzfe.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { constants } from "fs";
import { lstat, open, opendir, realpath } from "fs/promises";
import { dirname, isAbsolute, join, resolve, sep } from "path";
import { finished } from "stream/promises";
const ie = 15000;
const P = 512;
const re = 8;
const se = 1000000;
const W = 4096;
const z = 4096;
const maxBuffer = 8388608;
const ae = 74 + 4 * z;
const M = "submodule inspection deadline";
async function v5(e, t) {
    let n = t?.deadlineMs ?? ie;
    try {
        return await Ut(ue(e, n), n, M);
    } catch (error) {
        return {
            kind: "unverifiable",
            reason: error instanceof Error && error.message === M ? "timeout" : "unreadable"
        };
    }
}
function h_e(e) {
    if (e.kind === "unverifiable") {
        return {
            kind: "unverifiable",
            reason: e.reason,
            path: e.path
        };
    }
    let paths = [
        ...e.withTrackedChanges,
        ...e.withUntrackedFiles
    ];
    if (paths.length > 0) {
        return {
            kind: "changes",
            paths
        };
    }
}
function wre(e) {
    if (e.kind === "changes") {
        let n = e.paths.slice(0, 3).map(A).filter(Boolean);
        let i = e.paths.length - n.length;
        return `changes inside ${e.paths.length === 1 ? "submodule" : "submodules"} ${n.join(", ")}${i > 0 ? ` and ${i} more` : ""}`;
    }
    let t = e.path === undefined ? undefined : A(e.path) || undefined;
    switch(e.reason){
        case "nested_repository":
            return `${t ?? "a directory"} is a separate git repository inside the worktree, not a submodule checkout`;
        case "gitdir_outside_modules":
            return `submodule ${t ?? "checkout"} points at a git directory outside this worktree's own, or its object alternates or config lead somewhere this worktree cannot vouch for`;
        case "unconfigured_gitlink":
            return `${t ?? "a directory"} is a nested repository recorded in the index but not a configured submodule`;
        case "nested_submodules":
            return `submodule ${t ?? "checkout"} holds submodules of its own, which can't be inspected`;
        case "too_many":
            return `it records more than ${P} submodules, too many to inspect`;
        case "unreadable":
            if (t === undefined) {
                return "its submodules' state could not be read";
            }
            return `the state of submodule ${t} could not be read`;
        case "timeout":
            return "inspecting its submodules took too long";
    }
}
const de = {
    head: 24,
    tail: 16
};
function A(e) {
    return ec(e, de);
}
async function ue(e, deadlineMs) {
    let n = {
        repository: [],
        env: ac(e),
        deadlineMs
    };
    let i = await lgr(e, n);
    if (typeof i === "string") {
        return {
            kind: "unverifiable",
            reason: i
        };
    }
    if (i.length === 0) {
        return {
            kind: "verified",
            withTrackedChanges: [],
            withUntrackedFiles: []
        };
    }
    let o = await iao(e, n);
    if (typeof o === "string") {
        return {
            kind: "unverifiable",
            reason: o
        };
    }
    let s = await gC(e);
    if (s === null) {
        return {
            kind: "unverifiable",
            reason: "unreadable"
        };
    }
    let real;
    try {
        real = join(await realpath(s), "modules");
    } catch  {
        return {
            kind: "unverifiable",
            reason: "unreadable"
        };
    }
    let d = {
        lexical: join(s, "modules"),
        real
    };
    let c = new Set(o);
    let a = rl(re, (g)=>{
        if (c.has(g)) {
            return fe(e, g, d, n);
        }
        return ge(e, g);
    });
    let l = await Promise.all(i.map((g)=>a(g)));
    let withTrackedChanges = [];
    let withUntrackedFiles = [];
    for (let [g, p] of l.entries()){
        let w = i[g];
        switch(p){
            case "absent":
            case "clean":
                break;
            case "tracked":
                withTrackedChanges.push(w);
                break;
            case "untracked":
                withUntrackedFiles.push(w);
                break;
            default:
                return {
                    kind: "unverifiable",
                    reason: p.unverifiable,
                    path: w
                };
        }
    }
    return {
        kind: "verified",
        withTrackedChanges,
        withUntrackedFiles
    };
}
async function iao(e, t) {
    let n = await x(join(e, ".gitmodules"), se);
    switch(n.kind){
        case "absent":
            return [];
        case "directory":
        case "other":
            return "unreadable";
        case "file":
            break;
    }
    let i = await X(n.text, "^submodule\\..*\\.path$", e, t);
    if (i === "unreadable") {
        return i;
    }
    return H(i.map((o)=>o.value));
}
async function X(input, t, n, { repository, env, deadlineMs }) {
    let r = await ct(Ot(), [
        ...repository,
        ...An,
        "config",
        "--file",
        "-",
        "--no-includes",
        "-z",
        "--get-regexp",
        t
    ], {
        cwd: n,
        env,
        input,
        timeout: deadlineMs,
        preserveOutputOnError: false
    });
    let d = r.exitCode === 1 && r.error === undefined && !r.timedOut && !r.maxBufferExceeded;
    if (r.code !== 0 && !d) {
        return "unreadable";
    }
    let c = [];
    for (let a of r.stdout.split("\x00")){
        if (a === "") {
            continue;
        }
        let l = a.indexOf(`
`);
        if (l === -1) {
            return "unreadable";
        }
        c.push({
            key: a.slice(0, l),
            value: a.slice(l + 1)
        });
    }
    return c;
}
async function lgr(e, t) {
    return Y(e, t, "160000");
}
async function Gus(e, t) {
    return Y(e, t, "120000");
}
async function Y(e, t, n) {
    let i = [
        ...t.repository,
        ...An,
        "ls-files",
        "-s",
        "-z"
    ];
    let o = await ct(Ot(), i, {
        cwd: e,
        env: t.env,
        timeout: t.deadlineMs,
        maxBuffer,
        preserveOutputOnError: false,
        stdin: "ignore"
    });
    if (o.maxBufferExceeded) {
        return ce(e, i, t, n);
    }
    if (o.code !== 0) {
        return "unreadable";
    }
    let s = new D(n);
    s.push(Buffer.from(o.stdout, "utf8"));
    return s.end();
}
async function ce(e, t, { env, deadlineMs }, o) {
    let s = G5e(Ot(), t, env);
    let r = new D(o);
    try {
        let d = PH(Ot(), s?.args ?? t, {
            cwd: e,
            env: s?.env ?? env,
            timeout: deadlineMs,
            stdin: "ignore",
            stdout: "pipe",
            stderr: "ignore"
        });
        d.stdout?.on("data", (f)=>{
            if (r.push(Buffer.isBuffer(f) ? f : Buffer.from(f, "utf8")) !== undefined) {
                d.kill();
            }
        });
        let c = d.stdout ? finished(d.stdout).catch(()=>{}) : Promise.resolve();
        let a = await d;
        let l = !a.timedOut && !a.isCanceled && a.signal === undefined && a.exitCode === 0;
        if (!l) {
            d.stdout?.destroy();
        }
        await c;
        let u = r.end();
        if (typeof u === "string") {
            return u;
        }
        if (l) {
            return u;
        }
        return "unreadable";
    } catch  {
        return "unreadable";
    }
}
class D {
    prefix;
    paths = new Set;
    record = "none";
    pending = [];
    pendingBytes = 0;
    verdict = undefined;
    constructor(e){
        this.prefix = `${e} `;
    }
    push(e) {
        let t = 0;
        while(this.verdict === undefined && t < e.length){
            let n = e.indexOf(0, t);
            let i = n === -1 ? e.length : n;
            this.append(e.subarray(t, i));
            if (n === -1) {
                break;
            }
            this.completeRecord();
            t = n + 1;
        }
        return this.verdict;
    }
    end() {
        if (this.verdict !== undefined) {
            return this.verdict;
        }
        if (this.record !== "none") {
            return "unreadable";
        }
        return H([
            ...this.paths
        ]);
    }
    append(e) {
        if (e.length === 0 || this.record === "other") {
            return;
        }
        this.pending.push(e);
        this.pendingBytes += e.length;
        if (this.record === "none") {
            this.record = "undecided";
        }
        if (this.record === "undecided" && this.pendingBytes >= this.prefix.length) {
            let t = this.pending.length === 1 ? e : Buffer.concat(this.pending);
            if (t.toString("latin1", 0, this.prefix.length) === this.prefix) {
                this.record = "listed";
                this.pending = [
                    t
                ];
            } else {
                this.record = "other";
                this.pending = [];
            }
        }
        if (this.record === "listed" && this.pendingBytes > ae) {
            this.verdict = "unreadable";
        }
    }
    completeRecord() {
        if (this.record === "listed" && this.verdict === undefined) {
            let e = Buffer.concat(this.pending).toString("utf8");
            let t = e.indexOf("\t");
            if (t === -1) {
                this.verdict = "unreadable";
            } else {
                this.paths.add(e.slice(t + 1));
                if (this.paths.size > P) {
                    this.verdict = "too_many";
                }
            }
        }
        this.record = "none";
        this.pending = [];
        this.pendingBytes = 0;
    }
}
function H(e) {
    let t = new Set;
    for (let n of e){
        if (n.includes("\uFFFD") || !le(n)) {
            return "unreadable";
        }
        t.add(n);
        if (t.size > P) {
            return "too_many";
        }
    }
    return [
        ...t
    ];
}
function le(e) {
    if (e.length === 0 || e.length > z) {
        return false;
    }
    return e.split("/").every((t)=>{
        let n = ul(t);
        return t.replace(/[. ]+$/, "") !== "" && n !== ".git" && n !== "git~1" && !mtn.test(t) && [
            ...t
        ].every((i)=>i !== "\\" && i !== ":" && i !== ";" && i > "\x1F" && i !== "\x7F");
    });
}
async function fe(e, t, n, i) {
    let { deadlineMs } = i;
    let s = await V(e, t);
    if (s.kind !== "directory") {
        if (s.kind === "absent") {
            return "absent";
        }
        return {
            unverifiable: "unreadable"
        };
    }
    let s_path = s.path;
    let d = await x(join(s_path, ".git"), W);
    switch(d.kind){
        case "absent":
            return J(s_path);
        case "directory":
            return {
                unverifiable: "nested_repository"
            };
        case "other":
            return {
                unverifiable: "unreadable"
            };
        case "file":
            break;
    }
    let c = d.text.trim();
    if (!c.startsWith("gitdir:")) {
        return {
            unverifiable: "unreadable"
        };
    }
    let a = c.slice(7).trim();
    if (a === "" || Gi(a, s_path)) {
        return {
            unverifiable: "gitdir_outside_modules"
        };
    }
    let l = resolve(s_path, a);
    if (!T(l, n.lexical) && !T(l, n.real)) {
        return {
            unverifiable: "gitdir_outside_modules"
        };
    }
    if (v_(a, s_path)) {
        return {
            unverifiable: "gitdir_outside_modules"
        };
    }
    let GIT_COMMON_DIR;
    try {
        GIT_COMMON_DIR = await realpath(l);
    } catch  {
        return {
            unverifiable: "unreadable"
        };
    }
    if (!T(GIT_COMMON_DIR, n.real)) {
        return {
            unverifiable: "gitdir_outside_modules"
        };
    }
    try {
        await lstat(join(GIT_COMMON_DIR, "commondir"));
        return {
            unverifiable: "gitdir_outside_modules"
        };
    } catch (error) {
        if (v(error) !== "ENOENT") {
            return {
                unverifiable: "unreadable"
            };
        }
    }
    let f = join(GIT_COMMON_DIR, "objects");
    let g = await Z(f, 0, new Set([
        f
    ]));
    if (g !== undefined) {
        return {
            unverifiable: g
        };
    }
    let p = [
        join(GIT_COMMON_DIR, "config"),
        join(GIT_COMMON_DIR, "config.worktree")
    ];
    let w = new Set(p);
    for (let m of p){
        let B = await j(m, e, i, 0, w);
        if (B !== undefined) {
            return {
                unverifiable: B
            };
        }
    }
    let GIT_CEILING_DIRECTORIES = YCr(dirname(s_path));
    if (GIT_CEILING_DIRECTORIES === null) {
        return {
            unverifiable: "unreadable"
        };
    }
    let envPins = {
        GIT_CEILING_DIRECTORIES,
        GIT_COMMON_DIR
    };
    let _ = {
        repository: [
            `--git-dir=${GIT_COMMON_DIR}`,
            `--work-tree=${s_path}`
        ],
        env: Cs(envPins),
        deadlineMs
    };
    if (await we(s_path, _)) {
        return {
            unverifiable: "nested_submodules"
        };
    }
    let R = await rV(s_path, {
        repository: _.repository,
        envPins
    });
    if (!R.ok) {
        return {
            unverifiable: "unreadable"
        };
    }
    let C = await ct(Ot(), [
        ..._.repository,
        ...R.args,
        ...An,
        "--no-optional-locks",
        ...n9
    ], {
        cwd: s_path,
        env: _.env,
        timeout: deadlineMs,
        preserveOutputOnError: false
    });
    if (C.code !== 0) {
        return {
            unverifiable: "unreadable"
        };
    }
    let L = C.stdout.split(`
`).filter((m)=>m.length > 0);
    if (L.some((m)=>!m.startsWith("??"))) {
        return "tracked";
    }
    if (L.length > 0) {
        return "untracked";
    }
    return "clean";
}
async function ge(e, t) {
    let n = await q(e, t);
    switch(n){
        case "absent":
        case "untracked":
            return n;
        case "repository":
            return {
                unverifiable: "unconfigured_gitlink"
            };
        case "unreadable":
            return {
                unverifiable: "unreadable"
            };
    }
}
function T(e, t) {
    return e.startsWith(t + sep);
}
const he = 5;
const be = 10;
const S = 16;
const pe = /^[A-Za-z]:(?![\\/])/;
const me = /^(?:\.\.\/+)*/;
function K(e, t) {
    return e.includes("\uFFFD") || pe.test(e) || Qa(isAbsolute(e) ? e : e.replace(me, "")) || Gi(e, t) || v_(e, t);
}
async function Z(e, t, n) {
    if (t > he || n.size > S) {
        return "gitdir_outside_modules";
    }
    try {
        if (!(await lstat(e)).isDirectory()) {
            return "gitdir_outside_modules";
        }
    } catch  {
        return "unreadable";
    }
    let i = join(e, "info");
    try {
        if (!(await lstat(i)).isDirectory()) {
            return "gitdir_outside_modules";
        }
    } catch (error) {
        if (b(v(error))) {
            return undefined;
        }
        return "unreadable";
    }
    try {
        await lstat(join(i, "http-alternates"));
        return "gitdir_outside_modules";
    } catch (error) {
        if (!b(v(error))) {
            return "unreadable";
        }
    }
    let o = await x(join(i, "alternates"), W);
    switch(o.kind){
        case "absent":
            return;
        case "directory":
        case "other":
            return "unreadable";
        case "file":
            break;
    }
    let s = 0;
    for (let r of o.text.split(`
`)){
        if (r === "" || r.startsWith("#")) {
            continue;
        }
        s++;
        if (s > S || r.startsWith('"') || K(r, e)) {
            return "gitdir_outside_modules";
        }
        let d;
        try {
            d = await realpath(resolve(e, r));
        } catch (error) {
            if (b(v(error))) {
                continue;
            }
            return "unreadable";
        }
        if (n.has(d)) {
            continue;
        }
        n.add(d);
        let c = await Z(d, t + 1, n);
        if (c !== undefined) {
            return c;
        }
    }
}
const ye = "^(include\\.path|includeif\\..*\\.path|core\\.excludesfile|core\\.attributesfile)$";
async function j(e, t, n, i, o) {
    if (i > be || o.size > S) {
        return "gitdir_outside_modules";
    }
    let s = await x(e, GHt);
    switch(s.kind){
        case "absent":
            return;
        case "directory":
        case "other":
            return "unreadable";
        case "file":
            break;
    }
    if (!/include|excludesfile|attributesfile/i.test(s.text)) {
        return;
    }
    let r = await X(s.text, ye, t, n);
    if (r === "unreadable") {
        return "unreadable";
    }
    if (r.length > S) {
        return "gitdir_outside_modules";
    }
    let d = dirname(e);
    for (let { key, value } of r){
        let l = key.startsWith("include");
        if (value === "" || value.startsWith("~") || value.startsWith("%(prefix)/") || !l && !isAbsolute(value) || K(value, d)) {
            return "gitdir_outside_modules";
        }
        if (!l) {
            continue;
        }
        let u = resolve(d, value);
        let f;
        try {
            f = await realpath(u);
        } catch (error) {
            if (b(v(error))) {
                continue;
            }
            return "unreadable";
        }
        if (f !== u) {
            return "gitdir_outside_modules";
        }
        if (o.has(f)) {
            continue;
        }
        o.add(f);
        let g = await j(f, t, n, i + 1, o);
        if (g !== undefined) {
            return g;
        }
    }
}
async function we(e, t) {
    let n = await lgr(e, t);
    if (typeof n === "string") {
        return true;
    }
    return (await Promise.all(n.map((o)=>q(e, o)))).some((o)=>o !== "absent");
}
async function q(e, t) {
    let n = await V(e, t);
    if (n.kind !== "directory") {
        return n.kind;
    }
    try {
        await lstat(join(n.path, ".git"));
        return "repository";
    } catch (error) {
        if (!b(v(error))) {
            return "unreadable";
        }
    }
    let i = await J(n.path);
    if (i === "absent" || i === "untracked") {
        return i;
    }
    return "unreadable";
}
async function J(e) {
    let t;
    try {
        t = await opendir(e);
    } catch (error) {
        if (b(v(error))) {
            return "absent";
        }
        return {
            unverifiable: "unreadable"
        };
    }
    try {
        if (await t.read() === null) {
            return "absent";
        }
        return "untracked";
    } catch  {
        return {
            unverifiable: "unreadable"
        };
    } finally{
        try {
            await t.close();
        } catch  {}
    }
}
async function V(e, t) {
    let n = e;
    for (let i of t.split("/")){
        n = join(n, i);
        try {
            if (!(await lstat(n)).isDirectory()) {
                return {
                    kind: "absent"
                };
            }
        } catch (error) {
            if (b(v(error))) {
                return {
                    kind: "absent"
                };
            }
            return {
                kind: "unreadable"
            };
        }
    }
    return {
        kind: "directory",
        path: n
    };
}
function b(e) {
    return e === "ENOENT" || e === "ENOTDIR";
}
async function x(e, t) {
    let n = O() === "windows";
    let i;
    if (n) {
        try {
            let s = await lstat(e, {
                bigint: true
            });
            if (s.isDirectory()) {
                return {
                    kind: "directory"
                };
            }
            if (!s.isFile()) {
                return {
                    kind: "other"
                };
            }
            i = {
                dev: s.dev,
                ino: s.ino
            };
        } catch (error) {
            if (b(v(error))) {
                return {
                    kind: "absent"
                };
            }
            return {
                kind: "other"
            };
        }
    }
    let o;
    try {
        o = await open(e, n ? constants.O_RDONLY : constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
    } catch (error) {
        let r = v(error);
        if (b(r)) {
            return {
                kind: "absent"
            };
        }
        if (r === "EISDIR") {
            return {
                kind: "directory"
            };
        }
        return {
            kind: "other"
        };
    }
    try {
        let s = await o.stat({
            bigint: true
        });
        if (i !== undefined && (s.dev !== i.dev || s.ino !== i.ino)) {
            return {
                kind: "other"
            };
        }
        if (s.isDirectory()) {
            return {
                kind: "directory"
            };
        }
        if (!s.isFile() || s.size > BigInt(t)) {
            return {
                kind: "other"
            };
        }
        let r = Number(s.size);
        let { buffer, bytesRead } = await o.read(Buffer.alloc(r + 1), 0, r + 1, 0);
        if (bytesRead > r) {
            return {
                kind: "other"
            };
        }
        return {
            kind: "file",
            text: buffer.toString("utf8", 0, bytesRead)
        };
    } catch  {
        return {
            kind: "other"
        };
    } finally{
        await o.close();
    }
}
export { v5, h_e, wre, iao, lgr, Gus };
