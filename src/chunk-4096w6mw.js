import { q, B, bu } from "/$bunfs/root/chunk-ctt36bn8.js";
import { S8e, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Qe, Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { ri } from "/$bunfs/root/chunk-j9ep7722.js";
import { PN, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { NR, wRr } from "/$bunfs/root/chunk-z0brrd3r.js";
import { FS, R$, UJ, Qle } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { tPe } from "/$bunfs/root/chunk-zwxj12s4.js";
import { zh } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { spawn, spawnSync } from "child_process";
import { basename } from "path";
function v(n) {
    return !!PN(n);
}
const L = new Set([
    "start",
    "cmd",
    "cmd.exe"
]);
function x(n) {
    let e = n.trim().split(/\s+/);
    for (let r of e){
        if (/^\/[^/]+$/.test(r)) {
            continue;
        }
        if (r.startsWith("-")) {
            continue;
        }
        let o = basename(r);
        if (L.has(o.toLowerCase())) {
            continue;
        }
        return o;
    }
    return basename(e[0] ?? n);
}
const T = [
    "code",
    "cursor",
    "windsurf",
    "codium",
    "subl",
    "atom",
    "gedit",
    "notepad++",
    "notepad"
];
const b = /\b(vi|vim|nvim|nano|emacs|pico|micro|helix|hx)\b/;
const D = new Set([
    "code",
    "cursor",
    "windsurf",
    "codium"
]);
function E(n) {
    let e = x(n);
    return T.find((r)=>e.includes(r));
}
function A(n, e, r) {
    if (!r) {
        return [
            e
        ];
    }
    if (D.has(n)) {
        return [
            "-g",
            `${e}:${r}`
        ];
    }
    if (n === "subl") {
        return [
            `${e}:${r}`
        ];
    }
    return [
        e
    ];
}
function R(n, e, r) {
    let o = E(n);
    if (o) {
        return A(o, e, r);
    }
    if (r && b.test(basename(Qe(n, " ")))) {
        return [
            `+${r}`,
            e
        ];
    }
    return [
        e
    ];
}
function VWe(n, e) {
    let r = ux();
    if (!r) {
        return false;
    }
    let o = r.split(" ");
    let c = o[0] ?? r;
    let d = o.slice(1);
    let g = E(r);
    if (g) {
        let p = A(g, n, e);
        let l = {
            detached: true,
            stdio: "ignore",
            windowsHide: true
        };
        let i;
        i = spawn(c, [
            ...d,
            ...p
        ], l);
        i.on("error", (s)=>t(`editor spawn failed: ${s}`, {
                level: "error"
            }));
        NR(i.pid);
        i.unref();
        return true;
    }
    let u = ri().get(process.stdout);
    if (!u) {
        return false;
    }
    let m = e && b.test(basename(c));
    u.enterAlternateScreen();
    try {
        let p = {
            stdio: "inherit"
        };
        let l;
        {
            let i = [
                ...d,
                ...m ? [
                    `+${e}`,
                    n
                ] : [
                    n
                ]
            ];
            let s = wRr();
            l = spawnSync(c, i, {
                ...p,
                ...s
            });
            if (l.error && s.cgroup !== undefined) {
                l = spawnSync(c, i, p);
            }
        }
        if (l.error) {
            t(`editor spawn failed: ${l.error}`, {
                level: "error"
            });
            return false;
        }
        return true;
    } finally{
        u.exitAlternateScreen();
    }
}
class C {
    isResolved = false;
    editor = undefined;
    resolve() {
        if (this.isResolved) {
            return this.editor;
        }
        if (a.VISUAL) {
            this.editor = a.VISUAL;
        } else if (a.EDITOR) {
            this.editor = a.EDITOR;
        } else {
            let n = [
                "code",
                "vi",
                "nano"
            ];
            this.editor = n.find((e)=>v(e));
        }
        this.isResolved = true;
        return this.editor;
    }
    reset() {
        this.isResolved = false;
        this.editor = undefined;
    }
}
const F = new q(()=>new C);
function P() {
    return F.of(B().host);
}
function ux() {
    return bu()?.editor ?? P().resolve();
}
function UG() {
    let n = ux();
    if (!n) {
        return;
    }
    let e = x(n);
    if (e && e.length <= 8) {
        return e;
    }
}
const N = {
    code: "code -w",
    subl: "subl --wait"
};
function Gie(n, e) {
    let r = ie();
    let o = ri().get(process.stdout);
    if (!o) {
        throw Error("Ink instance not found - cannot pause rendering");
    }
    let c = ux();
    if (!c) {
        return {
            content: null
        };
    }
    try {
        r.statSync(n);
    } catch  {
        return {
            content: null
        };
    }
    let d = E(c) === undefined;
    if (d) {
        o.enterAlternateScreen();
    } else {
        o.prepareTerminalForHandoff();
    }
    try {
        let g = N[c] ?? c;
        let u = g.split(" ");
        let m = u[0] ?? g;
        let p = u.slice(1);
        let l = R(c, n, e);
        let i;
        {
            let f = wRr();
            i = spawnSync(m, [
                ...p,
                ...l
            ], {
                stdio: "inherit",
                ...f
            });
            if (i.error && f.cgroup !== undefined) {
                i = spawnSync(m, [
                    ...p,
                    ...l
                ], {
                    stdio: "inherit"
                });
            }
        }
        if (i.error || i.signal || i.status !== null && i.status !== 0) {
            let f = FS(c);
            return {
                content: null,
                error: i.error ? `Couldn't open ${f} \u2014 ${i.error.message}` : i.signal ? `${f} closed unexpectedly (${i.signal})` : `${f} quit unexpectedly (exit code ${i.status})`
            };
        }
        return {
            content: r.readFileSync(n, {
                encoding: "utf-8"
            })
        };
    } catch  {
        return {
            content: null
        };
    } finally{
        if (d) {
            o.exitAlternateScreen();
        } else {
            o.restoreTerminalAfterHandoff();
        }
    }
}
function U(content, e, r) {
    let o = content;
    for (let [c, d] of Object.entries(r)){
        if (d.type === "text") {
            let g = parseInt(c);
            let u = d.content;
            if (d.unavailable || u === "") {
                continue;
            }
            if (d.inline) {
                continue;
            }
            let m = o.indexOf(u);
            if (m !== -1) {
                let p = R$(u);
                let l = UJ(g, p);
                o = o.slice(0, m) + l + o.slice(m + u.length);
            }
        }
    }
    return o;
}
const S = "# ─── Write your reply below this line ──────────────────────────";
const O = 50;
function k(n) {
    let e = zh(n).split(`
`);
    if (e.length > O) {
        e = e.slice(-O);
        e.unshift("… (earlier output truncated)");
    }
    return `# \u2500\u2500\u2500 Claude's last response (for reference; removed on save) \u2500\u2500\u2500
` + `${e.map((o)=>{
        if (o) {
            return `# ${o}`;
        }
        return "#";
    }).join(`
`)}
${S}

`;
}
function W(content) {
    let e = content.indexOf(S);
    if (e === -1) {
        return content;
    }
    return content.slice(e + S.length).replace(/^\r?\n\r?\n?/, "");
}
function Rj(n, e, r, o) {
    let c = ie();
    let d = tPe();
    try {
        let g = e ? Qle(n, e) : n;
        let u = r ? k(r) : "";
        let m = u + g;
        let p = n.slice(0, o);
        let l = o === undefined ? undefined : 1 + Lt(u, `
`) + Lt(e ? Qle(p, e) : p, `
`);
        S8e(d, m, {
            encoding: "utf-8",
            flush: true
        });
        let i = Gie(d, l);
        if (i.content === null) {
            return i;
        }
        let content = i.content;
        if (r) {
            content = W(content);
        }
        let f = content.endsWith(`\r
`) ? `\r
` : `
`;
        if (content.endsWith(f) && !content.endsWith(f + f)) {
            content = content.slice(0, -f.length);
        }
        if (e) {
            content = U(content, n, e);
        }
        return {
            content
        };
    } finally{
        try {
            c.unlinkSync(d);
        } catch  {}
    }
}
export { VWe, ux, UG, Gie, Rj };
