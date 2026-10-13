import { Ld } from "/$bunfs/root/chunk-xgw72tt1.js";
import { f9 } from "/$bunfs/root/chunk-x0qpydt2.js";
import { _o } from "/$bunfs/root/chunk-bd805sh6.js";
import { ml } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Rs } from "/$bunfs/root/chunk-w1n7t02f.js";
import { Unn, P1 } from "/$bunfs/root/chunk-52bcnmbr.js";
import { Be, Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Ic } from "/$bunfs/root/chunk-4r6b8efh.js";
import { Kx, gV, Vs, X$, hV, wCe, FQ, zM, ECe, D5, z4e } from "/$bunfs/root/chunk-6sdmsz4f.js";
import { fke, DJo, hL, Zet, Hl } from "/$bunfs/root/chunk-kasbfbhj.js";
import { to, f4e, m4e, oco, sco, MW } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { xKe, PKe, h8t, IKe, nR } from "/$bunfs/root/chunk-46dhek9m.js";
import { TL } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { sbt } from "/$bunfs/root/chunk-g4qw45xk.js";
import { ld } from "/$bunfs/root/chunk-r17zw85x.js";
import { so } from "/$bunfs/root/chunk-dyspjvns.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { homedir } from "os";
import { basename, isAbsolute, join, resolve } from "path";
const j = "tengu_violin_lining";
function bve() {
    return ld(j, {
        safe: true
    });
}
async function bFt(e) {
    if (!bve()) {
        return X$(e);
    }
    let n = await gV(e);
    if (n === Kx && e.trim() !== "") {
        return {
            kind: "too-complex",
            reason: "the parser gave up on the command"
        };
    }
    if (n === null) {
        return {
            kind: "simple",
            commands: [],
            bareAssignmentNames: []
        };
    }
    return hV(e, n);
}
const X = 16;
const T = 64;
function R(e) {
    return z4e(e) || e === "PWD" || e === "OLDPWD";
}
function W(e) {
    return !/^(?:LANG|LANGUAGE|LC_[A-Z]+)$/i.test(e) && R(e);
}
const Y = new Set([
    "export",
    "declare",
    "typeset",
    "readonly",
    "local",
    "unset"
]);
const q = new Set([
    ...FQ,
    ...wCe,
    ...zM,
    ...ECe,
    ...D5,
    "xargs",
    "parallel"
]);
const M = [
    h8t,
    xKe,
    PKe
];
function x(e) {
    return e === "[" || e === "[[" || /^[A-Za-z0-9_.+:~/-]+$/.test(e);
}
async function SFt(e, n, t, s) {
    let r = t.behavior === "ask" && Hl(t.decisionReason, P1) !== undefined;
    if (e.name === Be) {
        if (typeof n.command !== "string") {
            return "uncertain";
        }
        let l = await ee(n.command, s, r);
        if (l === "none" && t.behavior === "ask" && Hl(t.decisionReason, Unn) !== undefined) {
            return "uncertain";
        }
        return l;
    }
    if (e.name !== Ct) {
        return "none";
    }
    if (r) {
        return "settings";
    }
    if (t.behavior === "ask" && H(t)) {
        return "uncertain";
    }
    return "none";
}
async function wFt(e, n, t, s = false) {
    if (e.name !== Be && e.name !== Ct || !Y9(n, "file") || !await I6n(e, n, t)) {
        return false;
    }
    let n_command = n.command;
    return !(s && e.name === Be && typeof n_command === "string" && await kLr(n_command));
}
async function I6n(e, n, t) {
    try {
        let s = n.command;
        if (e.name === Ct && typeof s === "string") {
            return !sbt(s, await fke(s));
        }
        return !e.isReadOnly(n, t);
    } catch (error) {
        c(Error("a served shell line's read-only check threw; the line counts as not read-only", {
            cause: error
        }));
        return true;
    }
}
function ELr() {
    return {
        paths: [
            ...IKe(),
            ...TL().flatMap((e)=>M.map((n)=>join(e, n)))
        ],
        globalConfigNames: f9.map((e)=>`.claude${e}.json`)
    };
}
const v = {
    simctl: [
        "launch",
        "terminate",
        "uninstall",
        "get_app_container",
        "appinfo",
        "privacy"
    ],
    open: [
        "-b"
    ],
    defaults: [
        "read",
        "read-type",
        "write",
        "delete"
    ]
};
const B = String.raw`(?:[a-z][a-z0-9_-]*\.){2,}claude`;
const J = new RegExp(`^${B}$`, "i");
const Q = /[|`\\(]|\$[{_]|\$BASH|<<|\bfunction\b/;
async function kLr(e) {
    if (Q.test(e)) {
        return false;
    }
    try {
        let n = await bFt(e);
        if (n.kind !== "simple" || n.bareAssignmentNames.some(R)) {
            return false;
        }
        let t = [];
        let command = e.replace(new RegExp(String.raw`(^|\s)(${B})(?=$|[\s;&])`, "gi"), (o, d, u)=>{
            t.push(u);
            return `${d}APPID`;
        });
        let r = [];
        let l = 0;
        for (let { argv, envVars, redirects } of n.commands){
            if (envVars.some((p)=>R(p.name)) || redirects.some(({ op, target })=>target !== "/dev/null" && !(op === ">&" && (target === "1" || target === "2")))) {
                return false;
            }
            let i = argv[0];
            let g = i === "simctl" ? 0 : (i === "xcrun" || i === "/usr/bin/xcrun") && argv[1] === "simctl" ? 1 : undefined;
            let m = g === undefined ? undefined : argv[g + 1];
            let _ = g !== undefined && m !== undefined && v.simctl.includes(m) ? g + 1 : undefined;
            let S = (i === "defaults" || i === "/usr/bin/defaults") && argv[1] !== undefined && v.defaults.includes(argv[1]);
            let a = i === "open" || i === "/usr/bin/open";
            if (g === undefined && !S && !a && i !== undefined && i !== "sleep") {
                return false;
            }
            for (let [p, h] of argv.entries()){
                if (!J.test(h)) {
                    continue;
                }
                r.push(h);
                let E = argv[p - 1];
                if (_ !== undefined && p > _ || S && p === 2 || a && E !== undefined && v.open.includes(E)) {
                    l += 1;
                }
            }
        }
        return t.length > 0 && l === r.length && t.toSorted().join(" ") === r.toSorted().join(" ") && !Y9({
            command
        }, "file");
    } catch (error) {
        c(Error("reading a served shell line's app identifiers threw; the line counts as naming settings", {
            cause: error
        }));
        return false;
    }
}
function Y9({ command }, n) {
    if (typeof command !== "string") {
        return true;
    }
    let { files, dirs } = m4e();
    let l = n !== "file_or_folder";
    let o = n === "own_file";
    let d = dirs.flatMap((a)=>[
            a,
            Rs(a)
        ]);
    let u = ELr();
    let i = l ? u.paths : [];
    let g = [
        ...o ? [] : [
            ...oco(),
            "managed-settings"
        ],
        ...l ? u.globalConfigNames : [
            ...f4e,
            ...d
        ],
        ...[
            ...o ? [] : files,
            ...i
        ].flatMap((a)=>[
                a,
                Rs(a)
            ])
    ];
    let m = sco();
    let _ = l ? [
        ...o ? [] : f4e,
        ...M
    ] : files.map((a)=>basename(a)).filter((a)=>a.includes("."));
    return [
        "",
        "/"
    ].some((a)=>{
        let p = A(command, a);
        if (g.some((y)=>p.includes(A(y, a)))) {
            return true;
        }
        let h = m.some((y)=>new RegExp(`${ml(A(y, a))}(?![a-z0-9_])`).test(p));
        let E = _.some((y)=>new RegExp(`(?<![a-z0-9_])${ml(A(y, a))}(?![a-z0-9_])`).test(p));
        if (!l) {
            return h || E;
        }
        return E && (h || d.some((y)=>p.includes(A(y, a)))) || (o ? [] : [
            ...m,
            ...d
        ]).some((y)=>new RegExp(`${ml(A(y, a))}(?![a-z0-9_-])(?=((?:/+(?:\\.(?![a-z0-9_.-]))?)*))\\1(?!\\.?[a-z0-9_-])`).test(p));
    });
}
function A(e, n) {
    return to(e.normalize("NFKC")).replace(/['"`]/g, "").replaceAll("\\", n);
}
function H(e) {
    let e_decisionReason = e.decisionReason;
    if (e_decisionReason?.type === "subcommandResults") {
        for (let t of e_decisionReason.reasons.values()){
            if (t.behavior === "ask" && H(t)) {
                return true;
            }
        }
        return false;
    }
    if (e_decisionReason === undefined) {
        return e.blockedPath === undefined;
    }
    if (e_decisionReason.type === "safetyCheck" && !P1(e_decisionReason)) {
        return Unn(e_decisionReason) || e.blockedPath === undefined;
    }
    return e_decisionReason.type === "other";
}
async function ee(command, n, t = false) {
    let s = await bFt(command);
    if (s.kind !== "simple") {
        return "uncertain";
    }
    let r = s.bareAssignmentNames.some(R);
    let l = [
        n
    ];
    let o = true;
    let d = false;
    let u = true;
    let i = 0;
    for (let g of s.commands){
        let { simple, wrapperWords, pathSpelled, doubt } = V(g);
        if (doubt || te(simple)) {
            r = true;
        }
        let p = z(simple, l);
        if (p === "unknown") {
            o = false;
        } else if (p !== undefined) {
            l = p;
            if (simple.argv.slice(1).some(U)) {
                o = false;
            }
        }
        let h = DJo(simple);
        if (h.writesUnseen) {
            r = true;
        }
        if (!h.known && p === undefined && simple.argv.length > 0) {
            u = false;
        }
        let E = (f)=>{
            if (isAbsolute(f) || f.startsWith("~")) {
                return [
                    n
                ];
            }
            return l;
        };
        let y = [
            ...wrapperWords,
            ...h.known && !pathSpelled ? [] : simple.argv.slice(1),
            ...simple.envVars.map((f)=>f.value)
        ].flatMap((f)=>G(f));
        if (!h.known && p === undefined && simple.argv.length > 0 && l.some((f)=>vFt(".", f))) {
            r = true;
        }
        if (!o && y.some((f)=>f !== "" && !isAbsolute(f) && !f.startsWith("~") && vFt(f, resolve(n, ".claude")))) {
            r = true;
        }
        for (let f of [
            ...y,
            ...h.landings
        ]){
            if (f !== "" && E(f).some((w)=>vFt(f, w))) {
                r = true;
            }
        }
        for (let f of h.written){
            i++;
            if (i > T) {
                return "uncertain";
            }
            if (Vs(f) || E(f) === l && !o) {
                r = true;
            }
            for (let w of E(f)){
                let I = P(f, w);
                if (I === "settings") {
                    return "settings";
                }
                if (I === "uncertain") {
                    r = true;
                }
            }
        }
        for (let f of h.copySources){
            i++;
            if (i > T) {
                return "uncertain";
            }
            if (E(f).some((w)=>P(f, w) === "settings")) {
                d = true;
            } else if (E(f).some((w)=>re(f, w))) {
                r = true;
            }
        }
    }
    if (r || t && !(d && u)) {
        return "uncertain";
    }
    return "none";
}
const N = new Set([
    "HOME",
    "CDPATH",
    "PWD",
    "OLDPWD"
]);
const ne = /^-[^-]*[CD]|^--chd/;
async function H$o(e, n) {
    let t = await bFt(e);
    if (t.kind !== "simple" || t.hasLoop !== false) {
        return "unparsed";
    }
    let s = t.bareAssignmentNames.some((d)=>N.has(d));
    let directories = [
        n
    ];
    let l = false;
    let o = [];
    for (let d of t.commands){
        if (d.envVars.some((S)=>N.has(S.name)) || d.argv.some((S)=>S.includes("=") && N.has(S.split(/\+?=/, 1)[0] ?? ""))) {
            s = true;
        }
        let { simple, wrapperWords } = V(d);
        let mayBeElsewhere = l;
        let m = z(simple, directories);
        if (m === "unknown" || m !== undefined && (s || simple.argv.slice(1).some(U))) {
            l = true;
        }
        if (m !== undefined && m !== "unknown") {
            directories = m;
        }
        let _ = wrapperWords.some((S)=>ne.test(S));
        for (let S of [
            {
                list: d.argv,
                directories: _ ? [] : directories,
                mayBeElsewhere: mayBeElsewhere || _
            },
            {
                list: [
                    ...d.envVars.map((a)=>a.value),
                    ...d.redirects.filter((a)=>a.op !== "<<" && a.op !== "<<<").map((a)=>a.target)
                ],
                directories,
                mayBeElsewhere
            }
        ]){
            for (let a of S.list){
                for (let word of G(a)){
                    o.push({
                        word,
                        directories: S.directories,
                        mayBeElsewhere: S.mayBeElsewhere
                    });
                }
            }
        }
    }
    return o;
}
function G(e) {
    return [
        e,
        ...e.includes("=") ? [
            e.slice(e.indexOf("=") + 1)
        ] : [],
        .../^-[^-]./.test(e) ? Array.from({
            length: e.length - 2
        }, (n, t)=>e.slice(t + 2)) : []
    ];
}
function V(simple) {
    let [n, ...t] = simple.argv;
    if (n === undefined) {
        return {
            simple,
            wrapperWords: [],
            pathSpelled: false,
            doubt: false
        };
    }
    let s = [
        k(n),
        ...t
    ];
    let argv = hL(Zet(s));
    let l = s.length - argv.length;
    let o = l >= 0 && argv.every((g, m)=>g === s[l + m]);
    let wrapperWords = o ? s.slice(0, l) : s;
    let u = o && l === 0 ? n : argv[0];
    let i = u === undefined ? undefined : k(u);
    return {
        simple: o && l === 0 && n === s[0] ? simple : {
            ...simple,
            argv,
            text: so(argv)
        },
        wrapperWords,
        pathSpelled: n !== s[0] || u !== undefined && u !== i,
        doubt: !o || !x(n) || [
            ...wrapperWords,
            ...u === undefined ? [] : [
                u
            ]
        ].some(Vs) || wrapperWords.some((g)=>g.startsWith("-") && g !== "-" && g !== "--" || W(/^([A-Za-z_][A-Za-z0-9_]*)\+?=/.exec(g)?.[1] ?? "")) || u !== undefined && i !== undefined && (!x(u) || i.startsWith("-") || q.has(i))
    };
}
function k(e) {
    return e.replace(O() === "windows" ? /^.*[\\/]/ : /^.*\//, "");
}
function te(simple) {
    let [n, ...t] = simple.argv;
    return simple.envVars.some((s)=>W(s.name)) || n !== undefined && Y.has(n) && t.some((s)=>{
        let r = s.split(/\+?=/, 1)[0] ?? "";
        return Vs(r) || R(r);
    });
}
function P(e, n) {
    let t = nR(e, n, Ic(), "write");
    if (t.allowed) {
        return "none";
    }
    if (t.decisionReason?.type === "safetyCheck") {
        if (P1(t.decisionReason)) {
            return "settings";
        }
        if (Unn(t.decisionReason)) {
            return "uncertain";
        }
        return "none";
    }
    if (t.decisionReason?.type !== "other") {
        return "none";
    }
    if (vFt(e, n)) {
        return "settings";
    }
    return "uncertain";
}
function re(e, n) {
    let t = nR(e, n, Ic(), "write");
    return !t.allowed && t.decisionReason?.type === "safetyCheck" && Unn(t.decisionReason);
}
function vFt(e, n) {
    let t = resolve(n, Ld(O() === "windows" ? e.replaceAll("\\", "/") : e));
    let s = MW(t, [
        t
    ]);
    return !s.safe && P1(s);
}
function z(simple, n) {
    let [t, ...s] = simple.argv;
    if (t === "popd") {
        return "unknown";
    }
    if (t !== "cd" && t !== "chdir" && t !== "pushd") {
        return;
    }
    let r = [];
    let l = false;
    for (let i of s){
        if (!l) {
            if (i === "--") {
                l = true;
                continue;
            }
            if (i.startsWith("-") && i !== "-") {
                continue;
            }
            l = true;
        }
        r.push(i);
    }
    let o = r[0];
    if (o === undefined) {
        if (t === "pushd") {
            return "unknown";
        }
        return F(n, [
            homedir()
        ]);
    }
    if (r.length > 1 || o === "-" || t === "pushd" && /^[+-]\d+$/.test(o) || Vs(o) || P(o, n[0] ?? homedir()) === "uncertain") {
        return "unknown";
    }
    let d = Ld(o);
    let u = isAbsolute(d) ? [
        d
    ] : n.map((i)=>resolve(i, d));
    return F(n, [
        ...u,
        ...u.flatMap(se)
    ]);
}
function U(e) {
    let n = false;
    for (let t of e.split(/[\\/]/)){
        if (t === "..") {
            if (n) {
                return true;
            }
        } else if (t !== "" && t !== ".") {
            n = true;
        }
    }
    return false;
}
function se(e) {
    try {
        return _o(e).filter((n)=>n !== e);
    } catch  {
        return [];
    }
}
function F(e, n) {
    let t = D([
        ...e,
        ...n
    ]);
    if (t.length > X) {
        return "unknown";
    }
    return t;
}
export { bve, bFt, SFt, wFt, I6n, ELr, kLr, Y9, H$o, vFt };
