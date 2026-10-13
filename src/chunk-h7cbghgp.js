import { c9, Xut, dDt, Xz, Al, QIs } from "/$bunfs/root/chunk-z0brrd3r.js";
import { kn } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, ot, W, v, xs } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { SRr } from "/$bunfs/root/chunk-7mawjt4q.js";
import { St, TS, sh, Oi, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { vo } from "/$bunfs/root/chunk-6cee9jwv.js";
import { so } from "/$bunfs/root/chunk-dyspjvns.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { constants } from "buffer";
import { basename, sep, delimiter, dirname, isAbsolute, resolve } from "path";
import { homedir } from "os";
import { mkdir } from "fs/promises";
function nDt(e) {}
const Brn = "<user-code>";
function je() {
    try {
        return homedir();
    } catch  {
        return "";
    }
}
const ce = "cli";
const de = new Set([
    "cli.js",
    ce,
    "sdk.mjs",
    "browser-sdk.js",
    "agentSdk.js"
]);
const ue = /^chunk-[0-9a-z]+\.js$/;
function ae(e) {
    return e[0] === "/" && ue.test(e.slice(1));
}
function le(file) {
    return ae(file) || file[0] === "/" && de.has(file.slice(1));
}
function bIs(e) {
    if (ae(e)) {
        return `/${ce}`;
    }
    return e;
}
const Ke = /^(?:\/(?:\$bunfs|~BUN)|\/?[A-Za-z]:[\\/](?:\$bunfs|~BUN))[\\/]/;
function fe(e) {
    let n = e.startsWith("file://") ? e.slice(7) : e;
    return Ke.test(n);
}
function Je(e) {
    let n = e;
    if (n.startsWith("file://")) {
        n = n.slice(7);
    }
    if (fe(n)) {
        return qCr(n);
    }
    if (n.startsWith("/snapshot/")) {
        n = n.slice(10);
    }
    let r = je();
    if (r && n.startsWith(r + sep)) {
        n = `~${n.slice(r.length)}`;
    }
    return n;
}
const Ye = [
    "src/",
    "packages/"
];
function qCr(e) {
    let n = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\"));
    if (n === -1) {
        return e;
    }
    return e.slice(n + 1);
}
function dGn(e) {
    return le(e.file) || Ye.some((n)=>e.file.startsWith(n));
}
const ze = [
    "node:",
    "bun:",
    "internal:"
];
const Xe = new Set([
    "native",
    "unknown",
    "ws",
    "undici",
    "node-fetch",
    "isomorphic-fetch",
    "vercel_fetch",
    "utf-8-validate"
]);
function pe(e) {
    return Xe.has(e) || ze.some((n)=>e.startsWith(n));
}
function SAo(e) {
    return pe(e.file);
}
function SIs(e) {
    let n = e.find((r)=>!SAo(r));
    if (n === undefined) {
        return e.length >= ge;
    }
    return n.file === Brn || n.file.startsWith("node_modules/");
}
function wIs(e) {
    return le(e.file) && (e.function == null || e.function === "<anonymous>");
}
function Ze(e) {
    let n = e.split(/[/\\]/);
    let r = -1;
    for(let u = n.length - 1; u >= 0; u--){
        if (n[u] === "node_modules") {
            r = u;
            break;
        }
    }
    if (r === -1 || r >= n.length - 1) {
        return null;
    }
    let o = n[r + 1];
    let i;
    if (o.startsWith("@")) {
        if (r + 2 >= n.length) {
            return null;
        }
        i = `${o}/${n[r + 2]}`;
    } else {
        i = o;
    }
    let s = n.at(-1);
    if (!s) {
        return null;
    }
    return `node_modules/${i}/${s}`;
}
function qe(e) {
    let n = Je(e);
    let r = qCr(n);
    let o = Ze(n);
    if (de.has(r) && (o === null || o.startsWith("node_modules/@anthropic-ai/")) || fe(e) && ue.test(r)) {
        return `/${r}`;
    }
    let i = null;
    if (i) {
        return i;
    }
    if (pe(n)) {
        return n;
    }
    return Brn;
}
function et(e) {
    let n = e.trim();
    if (!n.startsWith("at ")) {
        return null;
    }
    let r = n.slice(3);
    let o = r.indexOf(" (");
    let i;
    let s;
    if (o !== -1 && r.endsWith(")")) {
        i = r.slice(0, o).trim();
        s = r.slice(o + 2, -1);
    } else {
        s = r.trim();
    }
    if (i) {
        i = i.replace(/^async\s+/, "").replace(/^new\s+/, "");
        i = i.replace(/\s*\[as\s+[^\]]+\]$/, "");
        if (!i) {
            i = undefined;
        }
    }
    let u = s.match(/^(.*):(\d+):(\d+)$/);
    if (!u) {
        return null;
    }
    let [, d, p, f] = u;
    let file = qe(d);
    return {
        file,
        line: Number(p),
        column: Number(f),
        function: file === Brn && i ? Brn : i
    };
}
var ge = 50;
function jrn(e, n = ge) {
    let r = [];
    for (let o of rDt(e).split(`
`)){
        let i = et(o);
        if (i) {
            r.push(i);
            if (r.length >= n) {
                break;
            }
        }
    }
    return r;
}
function rDt(e) {
    let n = typeof e.stack === "string" ? e.stack : "";
    let r = typeof e.message === "string" ? e.message : "";
    let o = tt(n, e.name, r);
    if (o === -1) {
        return n;
    }
    return n.slice(o + 1);
}
function tt(e, name, r) {
    let o = (s)=>s !== "" && e.startsWith(`${s}
`);
    if (r !== "") {
        let s = typeof name === "string" && name !== "" ? `${name}: ${r}` : "";
        if (s !== "" && o(s)) {
            return s.length;
        }
        let u = `: ${r}`;
        let d = e.indexOf(`${u}
`);
        if (d > 0 && !e.slice(0, d).includes(`
`)) {
            return d + u.length;
        }
        if (name === "" && o(r)) {
            return r.length;
        }
        return -1;
    }
    let i = name === undefined ? "Error" : typeof name === "string" ? name : typeof name === "number" || typeof name === "boolean" || typeof name === "bigint" || name === null ? String(name) : "";
    if (o(i)) {
        return i.length;
    }
    return -1;
}
function me(e, telemetry) {
    try {
        let r = typeof e.stack === "string" ? e.stack : "";
        let o = rDt(e);
        let s = o.length < r.length && r.endsWith(o) ? o.replace(/\n$/, "").split(`
`) : [];
        let u = s.every((d)=>d.trimStart().startsWith("at ")) ? s : [];
        e.stack = [
            `${e.name}: ${telemetry}`,
            ...u
        ].join(`
`);
        e.message = telemetry;
    } catch  {}
    return e;
}
function vIs(e, n) {
    return [
        `${e.name}: ${e.message}`,
        ...n.map((r)=>{
            let o = `${r.file}${r.line ? `:${r.line}` : ""}${r.column ? `:${r.column}` : ""}`;
            if (r.function) {
                return `    at ${r.function} (${o})`;
            }
            return `    at ${o}`;
        })
    ].join(`
`);
}
const An = Object.freeze([
    "-c",
    "core.hooksPath=/dev/null",
    "-c",
    "core.fsmonitor="
]);
const Q_ = "--ignore-submodules=dirty";
const n9 = Object.freeze([
    "status",
    "--porcelain",
    "--untracked-files=normal",
    "--ignore-submodules=dirty"
]);
const R = Object.freeze({
    GIT_LFS_SKIP_SMUDGE: "1"
});
const jUe = "/";
const _e = [
    "'alias.remote-none=version'",
    "'alias.remote-none.command=version'",
    "'alias.remote-/.command=version'",
    "'fetch.bundleURI='",
    "'help.autocorrect=0'"
];
const GIT_CONFIG_PARAMETERS = _e.join(" ");
const nt = Object.freeze({
    GIT_ALLOW_PROTOCOL: "/",
    GIT_CONFIG_PARAMETERS,
    GIT_NO_LAZY_FETCH: "1",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_TERMINAL_PROMPT: "0",
    ...R
});
const rt = Object.freeze({
    GIT_SSH_COMMAND: "false"
});
const uGn = 2000;
const But = Object.freeze([
    ...An,
    "-c",
    "safe.bareRepository=explicit",
    "-c",
    "protocol.file.allow=never"
]);
const pGn = [
    "GIT_DIR",
    "GIT_WORK_TREE",
    "GIT_COMMON_DIR",
    "GIT_INDEX_FILE",
    "GIT_CEILING_DIRECTORIES",
    "GIT_DISCOVERY_ACROSS_FILESYSTEM",
    "GIT_OBJECT_DIRECTORY",
    "GIT_ALTERNATE_OBJECT_DIRECTORIES",
    "GIT_SHALLOW_FILE",
    "GIT_NAMESPACE",
    "GIT_IMPLICIT_WORK_TREE",
    "GIT_REFERENCE_BACKEND"
];
const WUe = [
    ...pGn,
    "GIT_CONFIG_COUNT",
    "GIT_CONFIG_PARAMETERS",
    "GIT_CONFIG_GLOBAL",
    "GIT_CONFIG_SYSTEM",
    "GIT_CONFIG"
];
const st = /^GIT_CONFIG_(KEY|VALUE)_\d+$/;
const Wrn = new RegExp(st.source, "i");
const dt = new Set(WUe);
function Cs(e, n = {}) {
    let r = e?.GIT_ALLOW_PROTOCOL?.split(":").includes("ssh") ?? false;
    return lt(Te({
        ...nt,
        ...!r && rt
    }, e, n));
}
function fGn(e, n = {}) {
    let r = Te({}, e, n);
    for (let o of ut){
        if (!(o in r)) {
            r[o] = undefined;
        }
    }
    return r;
}
var ut = [
    "GIT_LFS_SKIP_SMUDGE",
    "GIT_NO_LAZY_FETCH",
    "GIT_NO_REPLACE_OBJECTS"
];
function Te(e, n, { base = process.env, repository }) {
    let i = at({
        ...e,
        ...repository !== undefined && {
            GIT_DIR: repository.gitDir,
            GIT_COMMON_DIR: repository.commonDir
        },
        ...repository !== undefined && (repository.workTree !== null ? {
            GIT_WORK_TREE: repository.workTree
        } : {
            GIT_IMPLICIT_WORK_TREE: "0"
        }),
        ...n
    });
    let s = {};
    for (let d of WUe){
        s[d] = undefined;
    }
    let u = new Set(Object.keys(i).map((d)=>d.toUpperCase()));
    for (let d of Object.keys(base)){
        let p = d.toUpperCase();
        if (dt.has(p) || Wrn.test(d) || u.has(p) && !(d in i)) {
            s[d] = undefined;
        }
    }
    return {
        ...base,
        ...s,
        ...i
    };
}
function at(e) {
    let e_GIT_ALLOW_PROTOCOL = e.GIT_ALLOW_PROTOCOL;
    if (e_GIT_ALLOW_PROTOCOL === undefined) {
        return {
            ...e
        };
    }
    let r = e_GIT_ALLOW_PROTOCOL.split(":").filter((d)=>d !== "/");
    if (r.find((d)=>!/^[A-Za-z0-9-]*$/.test(d)) !== undefined) {
        throw Error('GIT_ALLOW_PROTOCOL may list only transport names made of letters, digits and "-"');
    }
    let i = [
        ...new Set([
            ..._e,
            ...r.flatMap((d)=>[
                    `'alias.remote-${d}=version'`,
                    `'alias.remote-${d}.command=version'`
                ])
        ])
    ];
    let e_GIT_CONFIG_PARAMETERS = e.GIT_CONFIG_PARAMETERS;
    return {
        ...e,
        GIT_CONFIG_PARAMETERS: [
            ...e_GIT_CONFIG_PARAMETERS === undefined || e_GIT_CONFIG_PARAMETERS === "" || e_GIT_CONFIG_PARAMETERS === GIT_CONFIG_PARAMETERS ? [] : [
                e_GIT_CONFIG_PARAMETERS
            ],
            ...i
        ].join(" ")
    };
}
function lt(e) {
    let o = (d)=>d;
    let i = (d)=>d.startsWith("/");
    let s = (d)=>{
        if (d === undefined) {
            return;
        }
        let p = d.split(":").map(o).filter((f)=>f !== "" && i(f));
        if (p.length > 0) {
            return p.join(":");
        }
        return "/dev/null";
    };
    let u = Object.keys(e).filter((d)=>d === "PATH");
    return {
        ...e,
        ...Object.fromEntries(u.map((d)=>[
                d,
                s(e[d])
            ]))
    };
}
const KCr = `f() { git --git-dir="$1" for-each-ref --format='%(objectname)'; }; f`;
function YCr(e) {
    if (e.includes(delimiter)) {
        return null;
    }
    return e;
}
function jut() {
    return a.CLAUDE_CODE_REMOTE || a.CLAUDE_CODE_PLUGIN_PREFER_HTTPS;
}
const kpe = "--upload-pack=git-upload-pack";
const In = [
    "-c",
    `core.alternateRefsCommand=${KCr}`
];
function XCr() {
    if (O() === "windows") {
        return "\\\\.\\NUL";
    }
    return "/dev/null";
}
const _t = /^core\.hooksPath=(?:\/dev\/null|\\\\\.\\nul)$/i;
const Et = [
    "applypatch-msg",
    "pre-applypatch",
    "post-applypatch",
    "pre-commit",
    "pre-merge-commit",
    "prepare-commit-msg",
    "commit-msg",
    "post-commit",
    "pre-rebase",
    "post-checkout",
    "post-merge",
    "pre-push",
    "pre-receive",
    "update",
    "proc-receive",
    "post-receive",
    "post-update",
    "reference-transaction",
    "push-to-checkout",
    "pre-auto-gc",
    "post-rewrite",
    "sendemail-validate",
    "fsmonitor-watchman",
    "p4-changelist",
    "p4-prepare-changelist",
    "p4-post-changelist",
    "p4-pre-submit",
    "post-index-change"
];
const JCr = Et.map((e)=>[
        `hook.${e}.enabled`,
        "false"
    ]);
function zUe() {
    return [
        [
            "core.fsmonitor",
            ""
        ],
        [
            "core.hooksPath",
            XCr()
        ],
        [
            "core.askPass",
            ""
        ],
        [
            "protocol.ext.allow",
            "never"
        ],
        [
            "submodule.recurse",
            "false"
        ],
        [
            "log.showSignature",
            "false"
        ],
        [
            "format.pretty",
            "medium"
        ],
        [
            "gc.auto",
            "0"
        ],
        [
            "maintenance.auto",
            "false"
        ],
        ...JCr
    ];
}
const Tt = new Set([
    "core.hooksPath",
    "core.askPass",
    "submodule.recurse",
    ...JCr.map(([e])=>e)
]);
const QCr = {
    GIT_NO_LAZY_FETCH: "1",
    GIT_NO_REPLACE_OBJECTS: "1",
    GIT_TERMINAL_PROMPT: "0",
    ...R
};
function wAo(e, { allowGitTerminalPrompt = false } = {}) {
    return vo(QCr, (r, o)=>!(allowGitTerminalPrompt && o === "GIT_TERMINAL_PROMPT") && !Nt(e, o));
}
function G5e(e, n, r, o = r.GIT_CONFIG_COUNT, { allowRepoGitHooks = false, allowGitTerminalPrompt = false } = {}) {
    let u = basename(e).toLowerCase();
    if (!/^git(\.exe|\.cmd|\.bat|\.com)?$/.test(u)) {
        return null;
    }
    let d = allowRepoGitHooks ? zUe().filter(([f])=>!Tt.has(f)) : zUe();
    let p = Oe(n).map((f)=>n[f]);
    return {
        args: d.filter(([f])=>!p.some((_)=>_.startsWith(`${f}=`))).flatMap(([f, _])=>[
                "-c",
                `${f}=${_}`
            ]).concat(ht(n)),
        env: {
            ...r,
            ...wAo(r, {
                allowGitTerminalPrompt
            }),
            ...B1(o, d),
            GIT_PROXY_COMMAND: r.GIT_PROXY_COMMAND ?? ""
        }
    };
}
const Ot = new Set([
    "-C",
    "--git-dir",
    "--work-tree",
    "--namespace",
    "--super-prefix",
    "--config-env",
    "--attr-source",
    "--exec-path"
]);
function Oe(e) {
    let n = [];
    let r = 0;
    while(r < e.length){
        let o = e[r];
        if (o === "-c" && r + 1 < e.length) {
            n.push(r + 1);
            r += 2;
        } else if (Ot.has(o) && r + 1 < e.length) {
            r += 2;
        } else if (o.startsWith("-")) {
            r += 1;
        } else {
            break;
        }
    }
    return n;
}
function ht(e) {
    let n = [
        ...e
    ];
    for (let r of Oe(n)){
        if (_t.test(n[r])) {
            n[r] = `core.hooksPath=${XCr()}`;
        }
    }
    return n;
}
const r9 = {
    GIT_TERMINAL_PROMPT: "0",
    GIT_ASKPASS: "",
    GCM_INTERACTIVE: "never"
};
function EIs(e) {
    let n = {};
    for (let [r, o] of Object.entries(r9)){
        if (tA(e, r) === undefined) {
            n[r] = o;
        }
    }
    return n;
}
function Wut(e = process.env) {
    return {
        ...e,
        ...N(e, (n, r)=>Object.hasOwn(r9, n) && r !== n),
        ...r9,
        ...B1(tA(e, "GIT_CONFIG_COUNT"), [
            [
                "credential.interactive",
                "false"
            ]
        ], e)
    };
}
function N(e, n) {
    let r = {};
    for (let o of Object.keys(e)){
        if (n(o.toUpperCase(), o)) {
            r[o] = undefined;
        }
    }
    return r;
}
function tA(e, n) {
    if (e[n] !== undefined || O() !== "windows") {
        return e[n];
    }
    for (let [r, o] of Object.entries(e)){
        if (r.toUpperCase() === n && o !== undefined) {
            return o;
        }
    }
}
function Nt(e, n) {
    if (Object.hasOwn(e, n)) {
        return true;
    }
    return O() === "windows" && Object.keys(e).some((r)=>r.toUpperCase() === n);
}
function B1(e, n, r = {}) {
    let o = Number(e);
    let i = Number.isInteger(o) && o > 0 ? o : 0;
    let s = {
        GIT_CONFIG_COUNT: String(i + n.length)
    };
    n.forEach(([d, p], f)=>{
        s[`GIT_CONFIG_KEY_${i + f}`] = d;
        s[`GIT_CONFIG_VALUE_${i + f}`] = p;
    });
    let u = new Set(Object.keys(s));
    return {
        ...N(r, (d, p)=>u.has(d) && !u.has(p)),
        ...s
    };
}
const GUe = [
    "-c",
    "core.sshCommand=ssh -o BatchMode=yes -o StrictHostKeyChecking=yes"
];
const It = "-o BatchMode=yes -o StrictHostKeyChecking=yes";
const Ct = "-o BatchMode=yes";
const he = "-batch";
function Rt(e, strictHostKeys) {
    switch(e){
        case "ssh":
            if (strictHostKeys) {
                return It;
            }
            return Ct;
        case "plink":
            return he;
        case "other":
            return;
    }
}
function zrn(e, n) {
    let r = O() === "windows" ? e.replace(/\\/g, "/") : e;
    return `CDPATH= cd -- ${so([
        r
    ])} 2>/dev/null || cd / || exit 1; ${n}`;
}
function V5e() {
    let e = "";
    try {
        e = homedir();
    } catch  {}
    if (isAbsolute(e)) {
        return e;
    }
    return resolve("/");
}
function vAo(e, n) {
    if (e !== undefined && e !== "auto") {
        return e;
    }
    let r = xt(n).toLowerCase().replace(/\.exe$/, "");
    if ([
        "ssh",
        "plink",
        "tortoiseplink"
    ].includes(r)) {
        return r;
    }
    return "auto";
}
function xt(e) {
    let n = "";
    let r;
    let o = true;
    for(let s = 0; s < e.length; s++){
        let u = e[s];
        let d;
        if (r === undefined && /[ \t\n\r]/.test(u)) {
            o = false;
        } else if (r === undefined && (u === "'" || u === '"')) {
            r = u;
        } else if (u === r) {
            r = undefined;
        } else if (u === "\\" && r !== "'") {
            s++;
            if (s >= e.length) {
                return "";
            }
            d = e[s];
        } else {
            d = u;
        }
        if (o && d !== undefined) {
            n += d;
        }
    }
    if (r !== undefined) {
        return "";
    }
    let i = O() === "windows" ? /[\\/]/ : /\//;
    return n.split(i).filter((s)=>s !== "").at(-1) ?? "";
}
function Ne(e, GIT_SSH_COMMAND) {
    return {
        ...e,
        ...N(e, (r)=>r === "GIT_SSH_COMMAND" || r === "GIT_SSH"),
        GIT_SSH: undefined,
        GIT_SSH_COMMAND
    };
}
function mGn(e, n, { strictHostKeys = true } = {}) {
    let { chosen, named } = K(e, n);
    let s = Rt(named === undefined ? "ssh" : yt(e, named), strictHostKeys);
    if (s === undefined || s === he && At(chosen)) {
        return {
            command: chosen,
            env: e
        };
    }
    let command = `${chosen} ${s}`;
    return {
        command,
        env: Ne(e, command)
    };
}
function K(e, n) {
    let r = H(tA(e, "GIT_SSH_COMMAND")) ?? H(n);
    let o = H(tA(e, "GIT_SSH"));
    return {
        chosen: r ?? so([
            o ?? "ssh"
        ]),
        named: r !== undefined ? wt(r) : o
    };
}
function kIs(e, n) {
    let r = tA(e, "GIT_SSH_VARIANT");
    let { chosen, named } = K(e, n);
    if ((r === undefined || r === "auto") && named !== undefined && ![
        "ssh",
        "plink",
        "tortoiseplink"
    ].includes(Ie(named))) {
        return chosen;
    }
}
async function TIs(e, n) {
    if (O() !== "windows") {
        return e;
    }
    let r = tA(e, "GIT_SSH_COMMAND");
    if (r !== undefined) {
        if (r.trim() === "") {
            return e;
        }
        return mGn(e, undefined, {
            strictHostKeys: false
        }).env;
    }
    let o = await n([
        "config",
        "--null",
        "--get",
        "core.sshCommand"
    ]);
    let i = o.exitCode === 0 && o.stdout.includes("\x00") ? Qe(o.stdout, "\x00") : undefined;
    if (i?.trim() === "") {
        return e;
    }
    return mGn(e, i, {
        strictHostKeys: false
    }).env;
}
function H(e) {
    if (e !== undefined && e.trim() !== "") {
        return e;
    }
}
function yt(e, named) {
    let r = tA(e, "GIT_SSH_VARIANT");
    if (r !== undefined && r !== "auto") {
        if (r === "plink") {
            return "plink";
        }
        if ([
            "putty",
            "tortoiseplink",
            "simple"
        ].includes(r)) {
            return "other";
        }
        return "ssh";
    }
    let o = Ie(named);
    if (o === "ssh" || o === "plink") {
        return o;
    }
    return "other";
}
function Ie(named) {
    return basename(named.trim().replace(/\\/g, "/")).toLowerCase().replace(/\.exe$/, "");
}
function At(chosen) {
    let n = chosen.trim().match(/^(?:"[^"]*"|'[^']*'|\S+)/)?.[0] ?? "";
    return /(?:^|\s)-batch(?:\s|$)/.test(chosen.trim().slice(n.length));
}
function wt(e) {
    let n = e.trim().match(/^(?:"([^"]*)"|'([^']*)'|(\S+))/);
    return n?.[1] ?? n?.[2] ?? n?.[3] ?? "";
}
const Pt = [
    "-c",
    "protocol.ext.allow=never",
    "-c",
    "protocol.fd.allow=never",
    "-c",
    "protocol.git.allow=never",
    "-c",
    "protocol.ftp.allow=never",
    "-c",
    "protocol.ftps.allow=never"
];
function Gt(e) {
    return {
        ...e,
        ...N(e, (n)=>n === "GIT_ALLOW_PROTOCOL"),
        GIT_ALLOW_PROTOCOL: undefined
    };
}
function vt(e) {
    let n = tA(e, "GIT_ALLOW_PROTOCOL");
    if (n === undefined) {
        return [];
    }
    let r = new Set(n.split(":"));
    return [
        "https",
        "http",
        "ssh",
        "file"
    ].filter((o)=>!r.has(o)).flatMap((o)=>[
            "-c",
            `protocol.${o}.allow=never`
        ]);
}
function bt(e) {
    return [
        ...Pt,
        ...vt(e)
    ];
}
function Lt(e = Wut(Ft()), n) {
    let pinArgs = bt(e);
    let o = tA(e, "GIT_SSH_VARIANT");
    let i = o === undefined || o === "auto" ? {
        ...e,
        ...N(e, (s)=>s === "GIT_SSH_VARIANT"),
        GIT_SSH_VARIANT: vAo(n.variant, K(e, n.command).chosen)
    } : e;
    return {
        pinArgs,
        inCheckoutArgs: [
            ...An,
            ...GUe,
            ...pinArgs
        ],
        env: {
            ...Ne(Gt(i), zrn(V5e(), mGn(i, n.command).command)),
            ...N(e, (s, u)=>Object.hasOwn(R, s) && u !== s),
            ...R
        }
    };
}
function Ft() {
    let e = new Set(pGn);
    let process_env = process.env;
    return {
        ...process_env,
        ...N(process_env, (r)=>e.has(r)),
        ...Object.fromEntries([
            ...e
        ].map((r)=>[
                r,
                undefined
            ]))
    };
}
function JSe(e, n) {
    let r = Lt(undefined, n);
    return {
        ...r,
        env: {
            ...r.env,
            GIT_CEILING_DIRECTORIES: Ce(dirname(e))
        }
    };
}
function gGn(e) {
    let n = {};
    for (let r of [
        ...Object.keys(r9),
        "GIT_CEILING_DIRECTORIES"
    ]){
        let o = e[r];
        if (o !== undefined) {
            n[r] = o;
        }
    }
    return n;
}
function Ce(e) {
    let n = YCr(resolve(e));
    if (n === null) {
        throw new x(`Cannot run git under ${resolve(e)}: its path contains "${delimiter}", which git's discovery ceiling (a "${delimiter}"-separated list) cannot express. Use a location without "${delimiter}" for this directory (the plugins cache \u2014 CLAUDE_CODE_PLUGIN_CACHE_DIR \u2014 or the temporary directory \u2014 TMPDIR \u2014 whichever this path is under).`, "git working directory path contains the PATH delimiter; git discovery ceiling inexpressible");
    }
    return n;
}
async function zut(e, n) {
    let cwd = dirname(e);
    await mkdir(cwd, {
        recursive: true
    });
    return {
        cwd,
        env: {
            ...n,
            GIT_CEILING_DIRECTORIES: Ce(dirname(cwd))
        }
    };
}
const kt = 1000;
const Mt = 60;
function hGn(e, { abortSignal, timeout = 10 * Mt * kt, input, stdio = [
    "ignore",
    "pipe",
    "pipe"
], useToolMemoryCgroup } = {}) {
    abortSignal?.throwIfAborted();
    using u = sh`exec: ${e.slice(0, 200)}`;
    try {
        let d = QIs(e, {
            env: process.env,
            maxBuffer: 1000000,
            timeout,
            cwd: SRr(),
            stdio,
            reject: false,
            input,
            useToolMemoryCgroup
        });
        if (!d.stdout) {
            return null;
        }
        return d.stdout.trim() || null;
    } catch  {
        return null;
    }
}
const J = 1000;
const Y = 60;
function it(e, n, r = {
    timeout: 10 * Y * J,
    preserveOutputOnError: true,
    useCwd: true
}) {
    return Le(()=>ct(e, n, {
            allowRepoGitHooks: r.allowRepoGitHooks,
            allowGitTerminalPrompt: r.allowGitTerminalPrompt,
            abortSignal: r.abortSignal,
            timeout: r.timeout,
            preserveOutputOnError: r.preserveOutputOnError,
            cwd: r.cwd ?? (r.useCwd ? SRr() : undefined),
            env: r.env,
            extendEnv: r.extendEnv,
            stdin: r.stdin,
            input: r.input,
            stdout: r.stdout,
            stderr: r.stderr,
            maxBuffer: r.maxBuffer,
            stripFinalNewline: r.stripFinalNewline,
            useToolMemoryCgroup: r.useToolMemoryCgroup,
            toolCgroupClass: r.toolCgroupClass,
            waitForExitAfterKill: r.waitForExitAfterKill
        }));
}
async function Le(e) {
    try {
        return await e();
    } catch (error) {
        c(error);
        return {
            stdout: "",
            stderr: "",
            code: 1,
            error: W(error).message
        };
    }
}
function ct(e, n, r) {
    return Le(()=>{
        if (r === undefined) {
            return ve(e, n);
        }
        return ve(e, n, r);
    });
}
function Re(e) {
    if (e <= 1) {
        return;
    }
    try {
        process.kill(-e, "SIGTERM");
    } catch  {}
}
const Ut = 6000;
const $t = 5000;
function Bt(e, pid, abortSignal, tellBeforeKill, i) {
    let s;
    let u = false;
    let d = ()=>{
        if (e.exitCode !== null || e.signalCode !== null) {
            return;
        }
        Promise.resolve().then(()=>tellBeforeKill(pid)).catch(()=>false).then((p)=>{
            if (u) {
                return;
            }
            if (!p) {
                i.abort(abortSignal.reason);
                return;
            }
            s = setTimeout((f, _, { stdout, stderr })=>{
                f.abort(_);
                stdout?.destroy();
                stderr?.destroy();
            }, $t, i, abortSignal.reason, e);
        });
    };
    if (abortSignal.aborted) {
        d();
    } else {
        abortSignal.addEventListener("abort", d, {
            once: true
        });
    }
    return ()=>{
        u = true;
        abortSignal.removeEventListener("abort", d);
        clearTimeout(s);
    };
}
async function Ht(e, n) {
    if (e.pid === undefined || e.exitCode !== null || e.signalCode !== null) {
        return;
    }
    await Ge(new Promise((resolvePromise)=>e.once("exit", ()=>resolvePromise())), n);
}
function xe(e) {
    return v(e) === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER" || e?.isMaxBuffer === true || e?.name === "MaxBufferError";
}
const y = {
    cwd: "execFileNoThrow spawn rejected: null byte in cwd",
    file: "execFileNoThrow spawn rejected: null byte in executable path",
    argv: "execFileNoThrow spawn rejected: null byte in argv",
    envName: "execFileNoThrow spawn rejected: null byte in env name",
    envValue: "execFileNoThrow spawn rejected: null byte in env value"
};
function Wt(e, n, cwd, o, i, s) {
    let u = `the runtime rejected ${Fe(basename(e))} because`;
    if (typeof cwd === "string" && cwd.includes("\x00")) {
        return {
            telemetry: y.cwd,
            local: `${u} the working directory contains a null byte (\\0)`
        };
    }
    if (e.includes("\x00")) {
        return {
            telemetry: y.file,
            local: `${u} the executable path contains a null byte (\\0)`
        };
    }
    let d = n.findIndex((m)=>typeof m === "string" && m.includes("\x00"));
    if (d !== -1) {
        return {
            telemetry: y.argv,
            local: `${u} the argument at index ${d} (zero-based) contains a null byte (\\0)`
        };
    }
    let p = Object.entries({
        ...i,
        ...o
    }).filter(([, m])=>m !== undefined);
    let f = p.find(([m])=>m.includes("\x00"));
    if (f !== undefined) {
        return {
            telemetry: y.envName,
            local: `${u} the name of environment variable ${we(f[0])} contains a null byte (\\0)${ye(f, s)}`
        };
    }
    let _ = p.find(([, m])=>typeof m === "string" && m.includes("\x00"));
    return _ && {
        telemetry: y.envValue,
        local: `${u} the value of environment variable ${we(_[0])} contains a null byte (\\0)${ye(_, s)}`
    };
}
function ye([e, n], r) {
    if (r[e] === n) {
        return "; every program this process starts will fail the same way until that variable is removed from its environment";
    }
    return " (in the env passed for this command)";
}
const Ae = 200;
function Vt(e) {
    if (e === 1) {
        return "1 character";
    }
    return `${e} characters`;
}
function Fe(e) {
    return Oi(e).slice(1, -1).replace(/[^\x20-\x7e]/g, (n)=>`\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function we(e) {
    let n = e.indexOf("=");
    let r = n === -1 ? e : e.slice(0, n);
    let o = r.length > Ae;
    let i = `"${Fe(o ? r.slice(0, Ae) : r)}"${o ? "…" : ""}`;
    if (n === -1) {
        return i;
    }
    return `${i} (then '=' and ${Vt(e.length - n - 1)}, not shown)`;
}
const jt = new Set([
    "EPIPE",
    "ECONNRESET",
    "ENOTCONN",
    "EOF"
]);
function Kt(e) {
    let n = {};
    let r;
    try {
        r = e.stdin;
    } catch  {
        return n;
    }
    if (!r) {
        return n;
    }
    r.removeAllListeners("error");
    r.on("error", (o)=>{
        let i = v(o) ?? "unknown";
        if (jt.has(i)) {
            return;
        }
        n.truncatedBy ??= i;
        e.kill();
    });
    return n;
}
function Jt(e, code) {
    if (e.shortMessage) {
        return e.shortMessage;
    }
    if (typeof e.signal === "string") {
        return e.signal;
    }
    return String(code);
}
function Yt(e, n) {
    if (!xs(n) || n.code === undefined || typeof n.syscall !== "string" || !n.syscall.startsWith("spawn") || e.exitCode !== undefined || e.timedOut || e.isCanceled || v(e) === n.code) {
        return;
    }
    return `Command failed with ${n.code}: ${e.command}
${n.message}`;
}
const zt = 3;
const Xt = 100000000;
function Pe(e, encoding) {
    if (e instanceof Uint8Array && encoding === "utf8-keep-bom") {
        return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
    }
    let r = e instanceof Uint8Array ? Buffer.from(e).toString("latin1") : typeof e === "string" ? e : "";
    if (encoding === "utf8-keep-bom") {
        return Buffer.from(r, "latin1").toString("utf8");
    }
    return r;
}
async function ve(e, n, { abortSignal, timeout = 10 * Y * J, preserveOutputOnError = true, cwd, env, extendEnv, maxBuffer, shell, stdin, input, stdout, stderr, stripFinalNewline, encoding, allowRepoGitHooks, allowGitTerminalPrompt, useToolMemoryCgroup = true, toolCgroupClass = "helper", waitForExitAfterKill = false, onStdoutData, withoutControllingTerminal = false, tellBeforeKill } = {
    timeout: 10 * Y * J,
    preserveOutputOnError: true,
    maxBuffer: 1000000
}) {
    if (Xz()) {
        return {
            stdout: "",
            stderr: dDt,
            code: 126,
            error: dDt
        };
    }
    let F = e;
    let process_env = process.env;
    let Q = G5e(F, n, env === undefined ? process_env : extendEnv === false ? env : {
        ...process_env,
        ...env
    }, env && "GIT_CONFIG_COUNT" in env ? env.GIT_CONFIG_COUNT : a.GIT_CONFIG_COUNT, {
        allowRepoGitHooks,
        allowGitTerminalPrompt
    });
    let He = Q?.args ?? n;
    let k = Q?.env ?? env;
    let M = withoutControllingTerminal && O() !== "windows";
    if (M && TS()) {
        let l = `${basename(e)} was not started because Claude Code was exiting; try again after it restarts`;
        return {
            stdout: "",
            stderr: l,
            code: 1,
            error: l
        };
    }
    let g;
    let C;
    let ee;
    let te;
    let D = tellBeforeKill !== undefined && abortSignal !== undefined ? new AbortController : undefined;
    let U;
    let ne = O() === "linux" ? {
        noChildLeft: true
    } : {};
    let w = ne;
    let re;
    let T = encoding === "utf8-keep-bom" ? maxBuffer ?? Xt : undefined;
    try {
        let l = Xut(F, He, {
            signal: D?.signal ?? abortSignal,
            timeout,
            cwd,
            env: k,
            shell,
            stdin,
            ...T !== undefined ? {
                maxBuffer: Math.min(T * zt, constants.MAX_STRING_LENGTH)
            } : maxBuffer === undefined ? {} : {
                maxBuffer
            },
            ...stripFinalNewline === undefined ? {} : {
                stripFinalNewline
            },
            ...encoding !== undefined && encoding !== "utf8" && {
                encoding: "latin1"
            },
            ...stdout === undefined ? {} : {
                stdout
            },
            ...stderr === undefined ? {} : {
                stderr
            },
            ...extendEnv === undefined ? {} : {
                extendEnv
            },
            ...useToolMemoryCgroup ? Al(toolCgroupClass) : {},
            ...M && {
                detached: true
            },
            reject: false
        });
        w = l.pid === undefined ? ne : {};
        if (tellBeforeKill !== undefined && abortSignal !== undefined && D !== undefined && l.pid !== undefined) {
            te = Bt(l, l.pid, abortSignal, tellBeforeKill, D);
        }
        C = M ? l.pid : undefined;
        if (C !== undefined) {
            let E = C;
            let S = ()=>Re(E);
            let h = St(S);
            let b = c9(S, {
                alwaysLast: true
            });
            ee = ()=>{
                h();
                b();
            };
        }
        l.once("error", (E)=>{
            re = E;
        });
        U = input === undefined ? undefined : Kt(l);
        if (input !== undefined && l.pid !== undefined) {
            l.stdin?.end(input);
        }
        if (onStdoutData && l.pid !== undefined) {
            l.stdout?.on("data", (E)=>{
                try {
                    onStdoutData(E.toString());
                } catch (error) {
                    c(error);
                }
            });
        }
        g = await l;
        if (waitForExitAfterKill && g.exitCode === undefined && (abortSignal?.aborted === true || g.timedOut)) {
            await Ht(l, Ut);
        }
    } catch (error) {
        let E = error.message;
        if (xs(error)) {
            t(`execFileNoThrow spawn failed: ${v(error)} ${E}`, {
                level: "error"
            });
            return {
                stdout: "",
                stderr: "",
                code: 1,
                ...w
            };
        } else if (xe(error)) {
            t(`execFileNoThrow maxBuffer exceeded: ${E}`, {
                level: "error"
            });
            return {
                stdout: "",
                stderr: "",
                code: 1,
                maxBufferExceeded: true
            };
        } else {
            let S = process.env;
            let h = v(error) === "ERR_INVALID_ARG_VALUE" ? Wt(F, n, cwd, k, extendEnv === false && k !== undefined ? undefined : S, S) : undefined;
            if (h) {
                t(`execFileNoThrow spawn refused: ${h.local}`, {
                    level: "error"
                });
            }
            let b = W(error);
            c(ot(h ? me(b, h.telemetry) : b, h?.telemetry ?? "execFileNoThrow unexpected rejection"));
        }
        return {
            stdout: "",
            stderr: "",
            code: 1
        };
    } finally{
        te?.();
        ee?.();
        if (C !== undefined && (g === undefined || g.exitCode === undefined)) {
            Re(C);
        }
    }
    if (U?.truncatedBy !== undefined) {
        let error = `stdin write failed: ${U.truncatedBy}`;
        t(`execFileNoThrow ${error}`, {
            level: "error"
        });
        return {
            stdout: "",
            stderr: "",
            code: 1,
            error
        };
    }
    let stdout_1 = Pe(g.stdout, encoding);
    let stderr_1 = Pe(g.stderr, encoding);
    if (T !== undefined && (stdout_1.length > T || stderr_1.length > T)) {
        if (preserveOutputOnError) {
            return {
                stdout: stdout_1.slice(0, T),
                stderr: stderr_1.slice(0, T),
                code: 1,
                error: `Command failed: ${g.command}
maxBuffer exceeded`,
                maxBufferExceeded: true
            };
        }
        return {
            stdout: "",
            stderr: "",
            code: 1,
            maxBufferExceeded: true
        };
    }
    if (!g.failed) {
        return {
            stdout: stdout_1,
            stderr: stderr_1,
            code: 0,
            exitCode: 0
        };
    }
    let oe = xe(g) ? {
        maxBufferExceeded: true
    } : {};
    let ie = g.timedOut ? {
        timedOut: true
    } : {};
    if (!preserveOutputOnError) {
        return {
            stdout: "",
            stderr: "",
            code: g.exitCode ?? 1,
            exitCode: g.exitCode,
            ...oe,
            ...ie,
            ...w
        };
    }
    let code = g.exitCode ?? 1;
    return {
        stdout: stdout_1,
        stderr: stderr_1,
        code,
        error: Yt(g, re) ?? Jt(g, code),
        exitCode: g.exitCode,
        ...oe,
        ...ie,
        ...w
    };
}
export { nDt, Brn, bIs, qCr, dGn, SAo, SIs, wIs, jrn, rDt, vIs, An, Q_, n9, jUe, uGn, But, pGn, WUe, Wrn, Cs, fGn, KCr, YCr, jut, kpe, XCr, JCr, zUe, QCr, wAo, G5e, r9, EIs, Wut, tA, B1, GUe, zrn, V5e, vAo, mGn, kIs, TIs, JSe, gGn, zut, hGn, it, ct };
