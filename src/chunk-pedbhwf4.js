import { z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Gi, Qse, FPr } from "/$bunfs/root/chunk-xgw72tt1.js";
import { m2n } from "/$bunfs/root/chunk-bd805sh6.js";
import { An, pGn, Cs, fGn, ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { Sse, DTo, FPs, zHt, VF, H1, v_, D5e, GHt, L5e, Ot } from "/$bunfs/root/chunk-2d9a83dh.js";
import { ec } from "/$bunfs/root/chunk-r3z1chqx.js";
import { Ku } from "/$bunfs/root/chunk-jn6evvyh.js";
import { pxt } from "/$bunfs/root/chunk-z07je2n9.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { lstatSync, realpathSync, statSync } from "fs";
import { devNull } from "os";
import { basename, dirname, join, resolve } from "path";
const M = 4096;
function h(n) {
    let e;
    let t = n.includes("\x00") || n.split(/\r?\n/).map((r)=>r.replace(/^[ \t]+/, "")).some((r)=>!/^[#;]/.test(r) && /[\r\t]|(?:^|[^\\])(?:\\\\)*\\$/.test(r));
    pxt(n, {
        entry: (r, o, i)=>{
            if (r?.name === "core" && !r.quoted && o === "worktree") {
                e = i;
                t ||= i === undefined || i === "" || i.length > M || /^(?:~|%\(|:\()/.test(i);
            }
        },
        malformed: ()=>{
            t = true;
        }
    }, {
        maxLines: Infinity
    });
    if (t) {
        return null;
    }
    return e;
}
const RLe = join(devNull, "not-a-git-repository");
const U = new Set([
    "true",
    "yes",
    "on"
]);
function _(n) {
    let e = n.trim().toLowerCase();
    let t = /^[+-]?(\d+)[kmg]?$/.exec(e);
    return U.has(e) || t !== null && Number(t[1]) !== 0;
}
const C = /(^|\])[^\S\n\r\u2028\u2029]*worktree\s*=/im;
function YAe(n) {
    let e = join(n, ".git");
    let t;
    try {
        t = lstatSync(e);
    } catch (error) {
        let l = z(error) && V(n) ? G(n) : null;
        if (l === null) {
            return null;
        }
        return {
            gitDir: l,
            workTree: null,
            commonDir: l
        };
    }
    let r = G(n);
    if (r === null) {
        return null;
    }
    if (t.isDirectory()) {
        let s = join(r, ".git");
        if (A(s)) {
            return {
                gitDir: s,
                workTree: r,
                commonDir: s
            };
        }
        return null;
    }
    let o;
    if (t.isSymbolicLink()) {
        o = zHt(e);
    } else if (t.isFile()) {
        let s = L5e(e, D5e)?.trim();
        o = s !== undefined && s.startsWith("gitdir:") ? s.slice(7).trim() : null;
    } else {
        return null;
    }
    if (o === null || o === "" || Gi(o, n) || v_(o, n)) {
        return null;
    }
    let i = Qse(resolve(n, o));
    if (i === null) {
        return null;
    }
    return Y(i, r);
}
const W = new Set([
    "ENOENT",
    "ENOTDIR",
    "ELOOP"
]);
function G(n) {
    let { real, code } = FPr(n);
    if (real !== undefined) {
        return real;
    }
    if (code !== undefined && W.has(code)) {
        return null;
    }
    return resolve(n);
}
function Y(n, e) {
    let t = J(n, e);
    if (t !== null) {
        let commonDir = dirname(dirname(n));
        if (basename(dirname(n)) === "worktrees" && y(t, e) && q(n, commonDir, e)) {
            return {
                gitDir: n,
                workTree: e,
                commonDir
            };
        }
        return null;
    }
    let r = H(n);
    if (r !== null && y(r, e) && A(n)) {
        return {
            gitDir: n,
            workTree: e,
            commonDir: n
        };
    }
    return null;
}
function nV(n) {
    return YAe(n) ?? {
        gitDir: RLe,
        workTree: n,
        commonDir: RLe
    };
}
function ac(n, e) {
    return Cs(e, {
        repository: nV(n)
    });
}
function Vus(n, e) {
    return fGn(e, {
        repository: nV(n)
    });
}
function qus(n, e) {
    let { gitDir, workTree, commonDir } = nV(e);
    let i = new Set(pGn);
    let s = {};
    for (let l of Object.keys(n)){
        if (i.has(l.toUpperCase())) {
            s[l] = undefined;
        }
    }
    return {
        ...n,
        ...s,
        GIT_DIR: gitDir,
        ...workTree !== null ? {
            GIT_WORK_TREE: workTree
        } : {
            GIT_IMPLICIT_WORK_TREE: "0"
        },
        GIT_COMMON_DIR: commonDir
    };
}
function V(n) {
    try {
        if (!lstatSync(join(n, "HEAD")).isFile() || !lstatSync(join(n, "refs")).isDirectory() || !T(n, "commondir")) {
            return false;
        }
    } catch  {
        return false;
    }
    let e = S(n);
    if (e === null || e.read.some((r)=>C.test(r)) || e.unread !== undefined && (C.test(e.unread) || DTo(e.unread, "core", null, "bare").some((r)=>!_(r)))) {
        return false;
    }
    let t = e.read.flatMap((r)=>DTo(r, "core", null, "bare")).at(-1);
    return t !== undefined && _(t);
}
function S(n) {
    let e = w(n, "config");
    if (e === undefined) {
        return null;
    }
    if (T(n, "config.worktree")) {
        return {
            read: [
                e
            ],
            unread: undefined
        };
    }
    let unread = w(n, "config.worktree");
    if (unread === undefined) {
        return null;
    }
    let r = FPs(e, "extensions", null, "worktreeConfig").at(-1);
    if (r !== undefined && _(r)) {
        return {
            read: [
                e,
                unread
            ],
            unread: undefined
        };
    }
    return {
        read: [
            e
        ],
        unread
    };
}
function w(n, e) {
    let t = join(n, e);
    let r = H1(t, n) ? undefined : L5e(t, GHt);
    if (r !== undefined && Sse(r)) {
        return undefined;
    }
    return r;
}
function A(n) {
    return T(n, "commondir");
}
function T(n, e) {
    try {
        lstatSync(join(n, e));
        return false;
    } catch (error) {
        return z(error);
    }
}
function q(n, commonDir, t) {
    let r = join(n, "commondir");
    if (VF(r, n)) {
        return false;
    }
    let o = L5e(r, D5e)?.trim();
    if (o === undefined || o === "" || Gi(o, t) || v_(o, n, t)) {
        return false;
    }
    return y(resolve(n, o), commonDir);
}
function y(n, e) {
    try {
        let t = statSync(n, {
            bigint: true
        });
        let r = statSync(e, {
            bigint: true
        });
        if (!t.isDirectory() || t.dev !== r.dev) {
            return false;
        }
        if (t.ino !== 0n && r.ino !== 0n) {
            return t.ino === r.ino;
        }
        return N(realpathSync.native(n)) === N(realpathSync.native(e));
    } catch  {
        return false;
    }
}
function N(n) {
    switch(O()){
        case "macos":
            return Ku(n.normalize("NFC"));
        case "windows":
            return Ku(n);
        default:
            return n;
    }
}
function J(n, e) {
    let t = join(n, "gitdir");
    if (VF(t, n)) {
        return null;
    }
    let r = L5e(t, D5e)?.trim();
    if (r === undefined || Gi(r, e) || v_(r, n, e)) {
        return null;
    }
    let o = resolve(n, r);
    if (basename(o) === ".git") {
        return dirname(o);
    }
    return null;
}
function H(n) {
    let e = S(n);
    let t = e === null || e.unread !== undefined && C.test(e.unread) ? [
        null
    ] : e.read.map((i)=>h(i));
    let [r, ...o] = D(t.filter((i)=>i !== undefined)).map((i)=>{
        if (i === null || Gi(i, n) || v_(i, n)) {
            return null;
        }
        return resolve(n, i);
    });
    if (typeof r === "string" && o.every((i)=>i !== null && y(r, i))) {
        return r;
    }
    return null;
}
const X = /^filter\.(.*)\.(?:clean|smudge|process|required)$/is;
function cgr(n) {
    return n.normalize("NFKD").replace(/\p{M}+/gu, "").toLowerCase();
}
function aao(n) {
    return D(Array.from(n).flatMap((e)=>{
        let t = X.exec(e)?.[1];
        if (t === undefined) {
            return [];
        }
        return [
            t
        ];
    }));
}
function lao(n) {
    return n.flatMap((e)=>[
            [
                `filter.${e}.clean`,
                ""
            ],
            [
                `filter.${e}.smudge`,
                ""
            ],
            [
                `filter.${e}.process`,
                ""
            ],
            [
                `filter.${e}.required`,
                "false"
            ]
        ]);
}
const maxBuffer = 1048576;
const timeout = 5000;
const j = Object.fromEntries([
    "GIT_TRACE",
    "GIT_TRACE_SETUP",
    "GIT_TRACE_PACKET",
    "GIT_TRACE_PACKFILE",
    "GIT_TRACE_PERFORMANCE",
    "GIT_TRACE_SHALLOW",
    "GIT_TRACE_CURL",
    "GIT_TRACE_REFS",
    "GIT_TRACE_FSMONITOR",
    "GIT_TRACE2",
    "GIT_TRACE2_EVENT",
    "GIT_TRACE2_PERF"
].map((n)=>[
        n,
        "0"
    ]));
const cao = "if that setting is yours, move it to your global git config; if you don't recognize it, remove it from the repository's config, since a tool or checkout you don't trust may have written it";
function G8t(n) {
    switch(n.reason){
        case "config_unreadable":
            return "git's configuration for the repository could not be read in full";
        case "conditional_include":
            return "the repository's own git config has a conditional include (includeIf), so what a spawn there would load cannot be determined";
        case "unsafe_key":
            return `the repository's own git config sets ${n.lfsKey === undefined ? n.key : `${n.key}, an entry git-lfs reads as ${n.lfsKey}`}, which names a program git-lfs would run for any LFS path, on checkout and on status alike (${cao})`;
    }
}
const Z = /^includeif\..*\.path$/s;
const v = /lfs.customtransfer..+?.path|^lfs\.(?:.*\.)?standalonetransferagent$|^lfs\.extension\./su;
const Q = {
    head: 60,
    tail: 40
};
function dgr(n) {
    return ec(m2n(n), Q);
}
async function rV(n, e = {}) {
    let t = await zHn(n, e);
    if (!t.ok) {
        return t;
    }
    let r = aao(t.entries.map(([o])=>o));
    if (r.some((o)=>o.includes("=") || o.includes(`
`))) {
        return {
            ok: false,
            reason: "filter_name_unrepresentable"
        };
    }
    return {
        ok: true,
        args: lao(r).flatMap(([o, i])=>[
                "-c",
                `${o}=${i}`
            ])
    };
}
function nn(n, e) {
    return ct(Ot(), n, {
        ...e,
        stdin: "ignore"
    });
}
async function zHn(n, { repository = [], pin, envPins = {}, run = nn } = {}) {
    let i = {
        args: repository,
        envPins,
        pin: repository.length > 0 ? undefined : pin ?? nV(n),
        run
    };
    let s = await L(n, "--local", i);
    if (s === null) {
        return {
            ok: false,
            reason: "config_unreadable"
        };
    }
    let l = await L(n, "--worktree", i);
    if (l === null) {
        return {
            ok: false,
            reason: "config_unreadable"
        };
    }
    let entries = [
        ...s,
        ...l
    ];
    for (let d of entries){
        let [u] = d;
        if (Z.test(cgr(u))) {
            return {
                ok: false,
                reason: "conditional_include"
            };
        }
        for (let f of D([
            u,
            ...en(d)
        ])){
            if (v.test(f) || v.test(cgr(f))) {
                return {
                    ok: false,
                    reason: "unsafe_key",
                    key: dgr(u),
                    ...f === u ? {} : {
                        lfsKey: dgr(f)
                    }
                };
            }
        }
    }
    return {
        ok: true,
        entries
    };
}
async function pst(n, e, { envPins, base, repository }) {
    let i = await ct(Ot(), [
        ...An,
        "config",
        "--includes",
        "--null",
        "--show-scope",
        "--get-regexp",
        e
    ], {
        cwd: n,
        env: Cs(envPins, {
            base,
            repository
        }),
        extendEnv: false,
        timeout,
        preserveOutputOnError: false,
        stdin: "ignore"
    });
    if (i.code !== 0) {
        if ((i.exitCode === 1 || i.exitCode === 129) && !i.timedOut && !i.maxBufferExceeded) {
            return [];
        }
        return null;
    }
    let s = i.stdout.split("\x00");
    let l = [];
    for(let a = 0; a + 1 < s.length; a += 2){
        let d = s[a];
        let u = s[a + 1] ?? "";
        let f = u.indexOf(`
`);
        if ((d === "system" || d === "global" || d === "command") && f !== -1) {
            l.push([
                u.slice(0, f),
                u.slice(f + 1)
            ]);
        }
    }
    return l;
}
async function L(n, e, { args, envPins, pin, run }) {
    let { code, stdout, stderr, maxBufferExceeded } = await run([
        ...args,
        ...An,
        "config",
        e,
        "--includes",
        "-z",
        "--list"
    ], {
        cwd: n,
        env: Cs({
            ...envPins,
            LC_ALL: "C",
            ...j
        }, {
            repository: pin
        }),
        timeout,
        maxBuffer
    });
    if (maxBufferExceeded === true || Buffer.byteLength(stdout) >= maxBuffer) {
        return null;
    }
    let u = stderr.replace(/\n+$/, "");
    let f = u.search(/^fatal: /m);
    let k = f === -1 ? u : u.slice(f);
    if (code === 128 && /^fatal: unable to read config file '[^\n]*config(?:\.worktree)?': No such file or directory$/.test(k)) {
        return [];
    }
    if (e === "--worktree" && code === 128 && /^fatal: --worktree cannot be used with multiple working trees unless the config\nextension worktreeConfig is enabled\. Please read "CONFIGURATION FILE"\nsection in "git help worktree" for details$/.test(k)) {
        return [];
    }
    if (e === "--worktree" && code === 129 && /unknown option `worktree'/.test(stderr)) {
        return [];
    }
    if (code !== 0) {
        return null;
    }
    let I = stdout.split("\x00").filter((g)=>g !== "").map((g)=>{
        let E = g.indexOf(`
`);
        if (E === -1) {
            return [
                g,
                null
            ];
        }
        return [
            g.slice(0, E),
            g.slice(E + 1)
        ];
    });
    if (I.some(([g])=>g.includes("\uFFFD"))) {
        return null;
    }
    return I;
}
function en([n, e]) {
    return (e === null ? n : `${n}=${e}`).split(`
`).flatMap((t)=>{
        let r = t.indexOf("=");
        if (r === -1) {
            return [];
        }
        return [
            t.slice(0, r).trim()
        ];
    });
}
export { RLe, YAe, nV, ac, Vus, qus, cgr, aao, lao, cao, G8t, dgr, rV, zHn, pst };
