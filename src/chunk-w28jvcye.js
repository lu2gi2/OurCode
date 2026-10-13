import * as F from "fs";
import { homedir } from "os";
import * as O from "path";
import { BlockList, isIP, connect } from "net";
import { connect as connect_1 } from "tls";
import { URL as URL_1 } from "url";
function Bus() {
    try {
        let e = F.readFileSync("/proc/version", {
            encoding: "utf8"
        });
        let t = e.match(/WSL(\d+)/i);
        if (t && t[1]) {
            return t[1];
        }
        if (e.toLowerCase().includes("microsoft")) {
            return "1";
        }
        return;
    } catch  {
        return;
    }
}
function _w() {
    switch("linux"){
        case "darwin":
            return "macos";
        case "linux":
            return "linux";
        case "win32":
            return "windows";
        default:
            return "unknown";
    }
}
function Pt(e, t) {
    if (!process.env.SRT_DEBUG) {
        return;
    }
    let r = t?.level || "info";
    let n = "[SandboxDebug]";
    switch(r){
        case "error":
            console.error(`${n} ${e}`);
            break;
        case "warn":
            console.warn(`${n} ${e}`);
            break;
        default:
            console.error(`${n} ${e}`);
    }
}
const DHn = [
    ".gitconfig",
    ".gitmodules",
    ".bashrc",
    ".bash_profile",
    ".zshrc",
    ".zprofile",
    ".profile",
    ".ripgreprc",
    ".mcp.json"
];
const ee = [
    ".git",
    ".vscode",
    ".idea"
];
function LHn() {
    return [
        ...ee.filter((e)=>e !== ".git"),
        ".claude/commands",
        ".claude/agents"
    ];
}
function Vio(e) {
    return e.toLowerCase();
}
function Bx(e, t) {
    return e === t || e.startsWith(t === "/" ? "/" : `${t}/`);
}
function dCt(e, t) {
    return e !== t && Bx(e, t);
}
function* qio(e) {
    for(let t = e.lastIndexOf("/"); t > 0; t = e.lastIndexOf("/", t - 1)){
        yield e.slice(0, t);
    }
    if (e !== "/") {
        yield "/";
    }
}
function jus(e) {
    try {
        let t = F.realpathSync(e);
        if (t !== e) {
            return [
                e,
                t
            ];
        }
    } catch  {}
    return [
        e
    ];
}
function NHn(e) {
    let t = e?.code;
    return t === "ENOENT" || t === "ENOTDIR" || t === "ELOOP" || t === "ENAMETOOLONG";
}
function ed(e) {
    return e.includes("*") || e.includes("?") || e.includes("[") || e.includes("]");
}
function uCt(e) {
    return e.includes("*") || e.includes("?");
}
function $Hn(e) {
    if (_w() === "windows") {
        return uCt(e);
    }
    return ed(e);
}
function Sre(e) {
    if (/^\\\\\?\\unc\\/i.test(e)) {
        return `\\\\${e.slice(8)}`;
    }
    if (e.startsWith("\\\\?\\")) {
        return e.slice(4);
    }
    return e;
}
function egr(e) {
    let t = O.win32.toNamespacedPath(e);
    return /^[\\/]{2}[?.][\\/]unc[\\/]/i.test(t);
}
function Cm(e) {
    return e.replace(/\/\*\*$/, "") || "/";
}
function $8t(e, t) {
    let r = O.normalize(e);
    let n = O.normalize(t);
    if (n === r) {
        return false;
    }
    if (r.startsWith("/tmp/") && n === `/private${r}`) {
        return false;
    }
    if (r.startsWith("/var/") && n === `/private${r}`) {
        return false;
    }
    if (r.startsWith("/private/tmp/") && n === r) {
        return false;
    }
    if (r.startsWith("/private/var/") && n === r) {
        return false;
    }
    if (n === "/") {
        return true;
    }
    if (n.split("/").filter(Boolean).length <= 1) {
        return true;
    }
    if (r.startsWith(`${n}/`)) {
        return true;
    }
    let i = r;
    if (r.startsWith("/tmp/")) {
        i = `/private${r}`;
    } else if (r.startsWith("/var/")) {
        i = `/private${r}`;
    }
    if (i !== r && i.startsWith(`${n}/`)) {
        return true;
    }
    let s = n.startsWith(`${r}/`);
    let c = i !== r && n.startsWith(`${i}/`);
    if (n !== r && !(i !== r && n === i) && !s && !c) {
        return true;
    }
    return false;
}
function tgr(e) {
    if (e === "~") {
        return homedir();
    }
    if (e.startsWith("~/")) {
        return homedir() + e.slice(1);
    }
    return e;
}
function Kio(e) {
    let t = homedir();
    let r = /^[A-Za-z]:/.test(t) ? t.slice(0, 2) : "";
    let n = r ? t.slice(2) : t;
    return e.replace(/%USERPROFILE%/gi, t).replace(/%HOMEDRIVE%/gi, r).replace(/%HOMEPATH%/gi, n);
}
function te(e) {
    return e.replace(/\/{2,}/g, "/").replace(/\/\.(?=\/)/g, "");
}
function A(e) {
    if (_w() !== "windows" && /(?:^|\/)\.\.(?:\/|$)/.test(e)) {
        Pt(`[Sandbox] "${e}" could not be resolved and still contains a ".." component, so a rule spelled this way may not match.`, {
            level: "warn"
        });
    }
    return e;
}
function TE(e, t) {
    let r = (o)=>!t?.literal && $Hn(o);
    if (_w() === "windows") {
        e = Sre(Kio(e));
        if (/^[a-z]:/.test(e)) {
            e = e[0].toUpperCase() + e.slice(1);
        }
        if (egr(e) && !r(e)) {
            return O.win32.normalize(e);
        }
    }
    if (_w() !== "windows" && e.endsWith("/") && !r(e)) {
        e = e.replace(/\/+$/, "") || "/";
    }
    let n = tgr(e);
    if (n !== e) ;
    else if (e.startsWith("./") || e.startsWith("../")) {
        n = O.resolve(process.cwd(), e);
    } else if (!O.isAbsolute(e)) {
        n = O.resolve(process.cwd(), e);
    }
    if (_w() !== "windows") {
        n = te(n);
    }
    if (r(n)) {
        let o = _w() === "windows" ? /[*?]/ : /[*?[\]]/;
        let i = n.split(o)[0];
        if (i && i !== "/") {
            let s = i.endsWith("/") ? i.slice(0, -1) : O.dirname(i);
            try {
                let c = F.realpathSync(s);
                if (!$8t(s, c)) {
                    let f = n.slice(s.length);
                    return A(c + f);
                }
            } catch  {}
        }
        return A(n);
    }
    if (_w() !== "windows" && n !== "") {
        n = n.replace(/\/\.$/, "").replace(/\/+$/, "") || "/";
    }
    try {
        let o = F.realpathSync(n);
        if ($8t(n, o)) ;
        else {
            n = o;
        }
    } catch  {}
    return A(n);
}
const ne = [
    "/dev/stdout",
    "/dev/stderr",
    "/dev/null",
    "/dev/tty",
    "/dev/dtracehelper",
    "/dev/autofs_nowait",
    "/tmp/claude",
    "/private/tmp/claude"
];
const X = [
    ".npm/_logs",
    ".claude/debug"
];
function F$(e) {
    let t = homedir();
    let r = !e || e.denyRead.length === 0 ? X : re(t, e.denyRead, e.allowRead);
    return [
        ...ne,
        ...r.map((n)=>O.join(t, n))
    ];
}
function re(e, denyRead, r = []) {
    let n = [
        ...new Set([
            e,
            TE(e, {
                literal: true
            })
        ])
    ];
    let o = denyRead.map((s)=>se(s));
    let i = r.map((s)=>Cm(s)).filter((s)=>!$Hn(s)).map((s)=>TE(s, {
            literal: true
        }));
    return X.filter((s)=>{
        let c = n.map((f)=>O.join(f, s));
        return !o.some((f)=>c.some(f) && !i.some((a)=>f(a) && c.some((g)=>Bx(g, a))));
    });
}
function se(e) {
    let t = Cm(e);
    if ($Hn(t)) {
        try {
            let n = new RegExp(B8t(TE(t)));
            return (o)=>n.test(o);
        } catch  {}
    }
    let r = TE(t, {
        literal: true
    });
    return (n)=>Bx(n, r);
}
const oe = [
    "NODE_EXTRA_CA_CERTS",
    "SSL_CERT_FILE",
    "CURL_CA_BUNDLE",
    "REQUESTS_CA_BUNDLE",
    "PIP_CERT",
    "GIT_SSL_CAINFO",
    "AWS_CA_BUNDLE",
    "CARGO_HTTP_CAINFO",
    "DENO_CERT",
    "CLOUDSDK_CORE_CUSTOM_CA_CERTS_FILE",
    "NIX_SSL_CERT_FILE"
];
function F8t(e, t, r, n, o, i) {
    let s = ce(i);
    let c = s === CLe ? s : encodeURIComponent(s);
    let f = n ? `${c}:${n}@` : "";
    let a = [
        "SANDBOX_RUNTIME=1"
    ];
    if (!o) {
        let C = process.env.CLAUDE_CODE_TMPDIR || process.env.CLAUDE_TMPDIR || "/tmp/claude";
        a.push(`TMPDIR=${C}`);
    }
    if (r) {
        for (let C of oe){
            a.push(`${C}=${r}`);
        }
    }
    if (!e && !t) {
        return a;
    }
    let g = [
        "localhost",
        "127.0.0.1",
        "::1",
        "169.254.0.0/16",
        "10.0.0.0/8",
        "172.16.0.0/12",
        "192.168.0.0/16"
    ].join(",");
    a.push(`NO_PROXY=${g}`);
    a.push(`no_proxy=${g}`);
    if (e) {
        a.push(`HTTP_PROXY=http://${f}localhost:${e}`);
        a.push(`HTTPS_PROXY=http://${f}localhost:${e}`);
        a.push(`http_proxy=http://${f}localhost:${e}`);
        a.push(`https_proxy=http://${f}localhost:${e}`);
        if (n) {
            a.push("GIT_CONFIG_PARAMETERS='http.proxyAuthMethod=basic'");
        }
    }
    let x = e ? `http://${f}localhost:${e}` : `socks5h://${f}localhost:${t}`;
    a.push(`ALL_PROXY=${x}`);
    a.push(`all_proxy=${x}`);
    a.push(`GRPC_PROXY=${x}`);
    a.push(`grpc_proxy=${x}`);
    if (t) {
        let y = _w();
        if (y === "macos") {
            a.push(`GIT_SSH_COMMAND=ssh -o ControlMaster=no -o ControlPath=none -o ProxyCommand='nc -X 5 -x localhost:${t} %h %p'`);
        } else if (y === "linux" && e) {
            let S = n ? `,proxyauth=${s}:${n}` : "";
            a.push(`GIT_SSH_COMMAND=ssh -o ControlMaster=no -o ControlPath=none -o ProxyCommand='socat - PROXY:localhost:%h:%p,proxyport=${e}${S}'`);
        }
        a.push(`FTP_PROXY=socks5h://${f}localhost:${t}`);
        a.push(`ftp_proxy=socks5h://${f}localhost:${t}`);
        a.push(`RSYNC_PROXY=localhost:${t}`);
        a.push(`DOCKER_HTTP_PROXY=http://${f}localhost:${e || t}`);
        a.push(`DOCKER_HTTPS_PROXY=http://${f}localhost:${e || t}`);
        if (e) {
            a.push("CLOUDSDK_PROXY_TYPE=http");
            a.push("CLOUDSDK_PROXY_ADDRESS=localhost");
            a.push(`CLOUDSDK_PROXY_PORT=${e}`);
            if (n) {
                a.push(`CLOUDSDK_PROXY_USERNAME=${s}`);
                a.push(`CLOUDSDK_PROXY_PASSWORD=${n}`);
            }
        }
    }
    return a;
}
const ie = 8;
function ngr(e) {
    if (e.baseEnv?.GIT_CONFIG_COUNT === "0") {
        return {};
    }
    let t = Number.parseInt(e.baseEnv?.GIT_CONFIG_COUNT ?? "", 10);
    let r = Number.isFinite(t) && t >= 0 ? t : 0;
    let n = r;
    let o = {};
    let i = (c, f)=>{
        o[`GIT_CONFIG_KEY_${n}`] = c;
        o[`GIT_CONFIG_VALUE_${n}`] = f;
        n++;
    };
    let s = [
        ...new Set(e.safeDirs.filter((c)=>!!c).map((c)=>{
            let a = c.replace(/\\/g, "/").replace(/\/+$/, "");
            if (a === "" || /^[A-Za-z]:$/.test(a)) {
                return `${a}/`;
            }
            return a;
        }))
    ];
    if (s.length > ie) {
        i("safe.directory", "*");
    } else {
        for (let c of s){
            i("safe.directory", c);
            i("safe.directory", c.endsWith("/") ? `${c}*` : `${c}/*`);
        }
    }
    if (e.schannelCa) {
        i("http.schannelUseSSLCAInfo", "true");
        i("http.schannelCheckRevoke", "false");
    }
    if (n === r) {
        return {};
    }
    o.GIT_CONFIG_COUNT = String(n);
    return o;
}
function rgr(e) {
    let baseEnv = {
        GIT_CONFIG_COUNT: process.env.GIT_CONFIG_COUNT
    };
    for (let r of e.unsetEnvVars ?? []){
        delete baseEnv[r];
    }
    Object.assign(baseEnv, e.setEnvVars ?? {});
    return ngr({
        safeDirs: e.safeDirs,
        baseEnv
    });
}
const Yio = 100;
function cst(e, t) {
    if (!t) {
        return e;
    }
    return t;
}
function Dce(e) {
    let t = e.slice(0, Yio);
    return Buffer.from(t).toString("base64");
}
function ALe(e) {
    return Buffer.from(e, "base64").toString("utf8");
}
var CLe = "srt";
const Y = 255;
const Xio = Y - Buffer.byteLength(`${CLe}.`);
function ce(e) {
    if (!e) {
        return CLe;
    }
    let t = `${CLe}.${e}`;
    if (Buffer.byteLength(t) <= Y) {
        return t;
    }
    return CLe;
}
function FHn(e) {
    if (!e || !e.startsWith(`${CLe}.`)) {
        return;
    }
    let t = e.slice(CLe.length + 1);
    if (!t || Buffer.byteLength(t) > Xio) {
        return;
    }
    return t;
}
function U8t(e) {
    return `^${e.replace(/[.^$+{}()|\\]/g, "\\$&").replace(/\[([^\]]*?)$/g, "\\[$1").replace(/\*\*\//g, "__GLOBSTAR_SLASH__").replace(/\*\*/g, "__GLOBSTAR__").replace(/\*/g, "[^/]*").replace(/\?/g, "[^/]").replace(/__GLOBSTAR_SLASH__/g, "(.*/)?").replace(/__GLOBSTAR__/g, ".*")}\$`;
}
function B8t(e) {
    return `${U8t(e).slice(0, -1)}(/.*)?\$`;
}
function j8t(e, t = {}) {
    return Qio(e, t).matches;
}
function H(e, t) {
    if (e.includes("__GLOBSTAR")) {
        return;
    }
    let r = (s)=>U8t(s).slice(1, -1);
    let n = [];
    let o = 0;
    let i = /(\[[^\]]*\])|(\*+)(\/?)|(\/)|([^[*/]+|\[)/g;
    for (let s of e.matchAll(i)){
        let [c, f, a, g, x] = s;
        if (f !== undefined) {
            if (/[*?]/.test(f)) {
                return;
            }
            let source = r(f);
            n.push(new RegExp(`^${source}$`, t).test("/") ? {
                source,
                canBeSeparator: true
            } : {
                source
            });
        } else if (a !== undefined) {
            let C = g === "/" && a.length >= 2;
            let y = a.length - (C ? 2 : 0);
            if (y >= 2) {
                n.push("any");
            } else if (y === 1) {
                n.push({
                    source: "[^/]*"
                });
            }
            if (C) {
                n.push("anyDirs");
            } else if (g === "/") {
                n.push("/");
            }
        } else if (x !== undefined) {
            n.push("/");
        } else {
            if (c === "[" && o++ > 0) {
                return;
            }
            n.push({
                source: r(c)
            });
        }
    }
    return n.filter((s, c)=>s !== "anyDirs" || n[c + 1] !== "anyDirs" && n[c + 1] !== "any");
}
function ae(e, t) {
    let r = new RegExp(U8t(e), t);
    let n = Cm(e);
    let o = n !== e ? new RegExp(U8t(n), t) : undefined;
    let i = {
        splits: false,
        start: [
            0
        ],
        next: ()=>[
                0
            ],
        matches: (u, l, d)=>r.test(d),
        matchesDirectoryForm: (u, l, d)=>o?.test(d) === true
    };
    let s = [];
    let c = "[^/]*";
    let f = (u)=>{
        let l = new Map;
        let d = (then)=>s.push({
                then
            }) - 1;
        let h = (w, p)=>{
            let m = `${w}${p ? "*" : ""}`;
            let b = l.get(m);
            if (b !== undefined) {
                return b;
            }
            if (!p && u[w] === "anyDirs") {
                let E = d(undefined);
                l.set(m, E);
                s[E].then = h(w + 1, false);
                return E;
            }
            if (!p && u[w] === "any" && w === u.length - 1) {
                let E = d(undefined);
                l.set(m, E);
                return E;
            }
            let I = {
                edges: []
            };
            let N = s.push(I) - 1;
            l.set(m, N);
            let v = (E, to)=>{
                I.edges.push({
                    regex: new RegExp(`^${E}$`, t),
                    to
                });
            };
            let R = p ? "[^/]*" : "";
            for(let E = w;; E++){
                let _ = u[E];
                if (_ === undefined) {
                    v(R, undefined);
                    break;
                }
                if (_ === "/") {
                    v(R, h(E + 1, false));
                    break;
                }
                if (_ === "any") {
                    v(`${R}[^/]*`, d(h(E + 1, true)));
                    R += "[^/]*";
                } else if (_ === "anyDirs") {
                    v(`${R}[^/]*`, d(h(E + 1, false)));
                } else if (_.canBeSeparator) {
                    v(R, h(E + 1, false));
                    R += `(?!/)${_.source}`;
                } else {
                    R += _.source;
                }
            }
            return N;
        };
        return h(0, false);
    };
    let a;
    let g;
    try {
        let u = H(e, t);
        let l = o ? H(n, t) : [];
        if (u === undefined || l === undefined) {
            return i;
        }
        a = [
            f(u)
        ];
        g = s.length;
        if (o) {
            a.push(f(l));
        }
    } catch  {
        return i;
    }
    let x = (u, l)=>{
        for(let d = l; d !== undefined && !u.has(d);){
            u.add(d);
            let h = s[d];
            d = "then" in h ? h.then : undefined;
        }
    };
    let C = (u)=>[
            ...u
        ].sort((l, d)=>l - d);
    let y = (u, l, d)=>u.some((h)=>{
            if (h >= g !== d) {
                return false;
            }
            let w = s[h];
            if ("then" in w) {
                return w.then === undefined;
            }
            return w.edges.some((p)=>p.to === undefined && p.regex.test(l));
        });
    let S = new Set;
    for (let u of a){
        x(S, u);
    }
    return {
        splits: true,
        start: C(S),
        next: (u, l)=>{
            let d = new Set;
            for (let h of u){
                let w = s[h];
                if ("then" in w) {
                    x(d, h);
                } else {
                    for (let p of w.edges){
                        if (p.to !== undefined && p.regex.test(l)) {
                            x(d, p.to);
                        }
                    }
                }
            }
            return C(d);
        },
        matches: (u, l)=>y(u, l, false),
        matchesDirectoryForm: (u, l)=>y(u, l, true)
    };
}
function Jio(e) {
    let t = e.split(/[*?[\]]/)[0];
    if (!t) {
        return "";
    }
    if (t.endsWith("/")) {
        return t.slice(0, -1);
    }
    return O.dirname(t);
}
function k(e) {
    return e;
}
function Qio(e, t = {}) {
    let r = {
        baseLocation: "",
        matches: [],
        directoryMatches: [],
        symlinks: new Set,
        uninspectableLinks: new Set,
        unlisted: [],
        realOf: new Map
    };
    let n = k(TE(e));
    let o = Jio(n);
    if (o === "" || o === "/") {
        Pt(`[Sandbox] Glob pattern has no literal directory to start from, skipping: ${e}`, {
            level: "warn"
        });
        return r;
    }
    let i = t.caseInsensitive ? "is" : "s";
    let s = ae(n, i);
    if (t.followSymlinkedDirectories && !s.splits) {
        Pt(`[Sandbox] Glob pattern ${e} cannot be followed one path component at a time, so it is matched against real paths only and not through symlinked directories`, {
            level: "warn"
        });
    }
    let c = new Map;
    let f = new Map;
    let a = [];
    let g = (S, u, l)=>{
        try {
            return l(S);
        } catch (error) {
            if (u === S) {
                throw error;
            }
            return l(u);
        }
    };
    let x = new Map;
    let C = (S, u)=>{
        let l = x.get(u);
        if (l !== undefined) {
            return l;
        }
        let d;
        try {
            d = g(u, S, (h)=>({
                    isDirectory: F.statSync(h).isDirectory(),
                    real: F.realpathSync(h)
                }));
        } catch (error) {
            d = NHn(error) ? "absent" : "uninspectable";
        }
        x.set(u, d);
        return d;
    };
    let y = o;
    try {
        y = F.realpathSync(o);
    } catch  {}
    r.baseLocation = y;
    a.push({
        dir: o,
        real: y,
        short: o.length < y.length ? o : y,
        positions: o.split("/").reduce(s.next, s.start)
    });
    for(let S = a.pop(); S !== undefined; S = a.pop()){
        let { dir, real } = S;
        let d = c.get(real);
        if (d === undefined) {
            c.set(real, d = new Set);
        }
        let h = S.positions.filter((p)=>!d.has(p));
        if (h.length === 0) {
            continue;
        }
        for (let p of h){
            d.add(p);
        }
        let w = f.get(real);
        try {
            w ??= g(real, S.short, (p)=>F.readdirSync(p, {
                    withFileTypes: true
                }));
            f.set(real, w);
        } catch (error) {
            let m = error?.code;
            Pt(`[Sandbox] Error listing ${dir} for glob pattern ${e}: ${error}`, {
                level: m === "ENOENT" ? "info" : "warn"
            });
            if (m !== "ENOENT") {
                r.unlisted.push(dir);
                if (real !== dir) {
                    r.realOf.set(dir, real);
                }
            }
            continue;
        }
        for (let p of w){
            let m = O.join(dir, p.name);
            let b = O.join(real, p.name);
            let I = k(m);
            let N = s.matches(h, p.name, I);
            if (N) {
                r.matches.push(m);
            }
            if (p.isDirectory()) {
                let M = s.next(h, p.name);
                let B = t.withDirectoryForm === true && s.matchesDirectoryForm(h, p.name, I);
                if (B) {
                    r.directoryMatches.push(m);
                }
                if ((N || B) && b !== m) {
                    r.realOf.set(m, b);
                }
                if (M.length > 0) {
                    a.push({
                        dir: m,
                        real: b,
                        short: O.join(S.short, p.name),
                        positions: M
                    });
                }
                continue;
            }
            if (!p.isSymbolicLink()) {
                if (N && b !== m) {
                    r.realOf.set(m, b);
                }
                continue;
            }
            r.symlinks.add(m);
            if (!t.followSymlinkedDirectories) {
                continue;
            }
            let v = t.withDirectoryForm === true && s.matchesDirectoryForm(h, p.name, I);
            let R = s.splits ? s.next(h, p.name) : [];
            if (!N && !v && R.length === 0) {
                continue;
            }
            let E = O.join(S.short, p.name);
            let _ = C(E, b);
            if (_ === "absent") {
                continue;
            }
            if (_ === "uninspectable") {
                r.uninspectableLinks.add(m);
                if (v) {
                    r.directoryMatches.push(m);
                }
                continue;
            }
            if (N) {
                r.realOf.set(m, _.real);
            }
            if (!_.isDirectory) {
                continue;
            }
            if (v) {
                r.directoryMatches.push(m);
                r.realOf.set(m, _.real);
            }
            if (R.length === 0) {
                continue;
            }
            if (Bx(real, _.real) || Bx(y, _.real)) {
                Pt(`[Sandbox] Not following symlink ${m} -> ${_.real} for glob pattern ${e}: it leads back up the tree`);
                continue;
            }
            a.push({
                dir: _.real,
                real: _.real,
                short: E.length < _.real.length ? E : _.real,
                positions: R
            });
        }
    }
    return r;
}
const Zio = [
    "127.0.0.0/8",
    "::1"
];
function j(e) {
    let t = isIP(e);
    switch(t){
        case 4:
            return "ipv4";
        case 6:
            return "ipv6";
        default:
            return undefined;
    }
}
function eao(e) {
    let t = e.indexOf("/");
    let r = W(t === -1 ? e : e.slice(0, t));
    let family = j(r);
    if (!family) {
        return;
    }
    let o = family === "ipv6" ? 128 : 32;
    let prefix = o;
    if (t !== -1) {
        let c = e.slice(t + 1);
        if (!/^\d{1,3}$/.test(c) || Number(c) > o) {
            return;
        }
        prefix = Number(c);
    }
    let s = family === "ipv6" ? G(r) : undefined;
    if (s !== undefined) {
        if (prefix < 96) {
            return undefined;
        }
        return {
            address: s,
            prefix: prefix - 96,
            family: "ipv4"
        };
    }
    return {
        address: r,
        prefix,
        family
    };
}
function pCt(e, t) {
    let r = eao(t);
    if (!r) {
        return false;
    }
    try {
        e.addSubnet(r.address, r.prefix, r.family);
    } catch  {
        return false;
    }
    return true;
}
function ue(Zio) {
    let t = new BlockList;
    for (let r of Zio){
        if (!pCt(t, r)) {
            throw Error(`Invalid IP address or CIDR range: ${JSON.stringify(r)}`);
        }
    }
    return t;
}
function dst(e, t) {
    let r = W(t);
    let n = j(r);
    return n !== undefined && e.check(r, n);
}
function W(e) {
    let t = e.indexOf("%");
    if (t === -1) {
        return e;
    }
    return e.slice(0, t);
}
function K(e) {
    let t;
    try {
        t = new URL(`http://[${W(e)}]/`).hostname.slice(1, -1);
    } catch  {
        return;
    }
    let [r = "", n] = t.split("::");
    let o = r ? r.split(":") : [];
    let i = n ? n.split(":") : [];
    let s = n === undefined ? 0 : 8 - o.length - i.length;
    if (s < 0 || o.length + s + i.length !== 8) {
        return;
    }
    return [
        ...o,
        ...Array(s).fill("0"),
        ...i
    ].map((c)=>parseInt(c, 16));
}
const P = (e, t)=>`${e >> 8}.${e & 255}.${t >> 8}.${t & 255}`;
function G(e) {
    if (!/ffff/i.test(e)) {
        return;
    }
    let t = K(e);
    if (t && t.slice(0, 5).every((r)=>r === 0) && t[5] === 65535) {
        return P(t[6], t[7]);
    }
}
function Wus(e) {
    if (isIP(e) !== 6) {
        return;
    }
    let t = K(e);
    if (!t) {
        return;
    }
    let r = (o, i)=>t.slice(o, i).every((s)=>s === 0);
    if (t[0] === 8194) {
        return P(t[1], t[2]);
    }
    let n = P(t[6], t[7]);
    if (t[0] === 100 && t[1] === 65435 && r(2, 6)) {
        return n;
    }
    if (r(0, 5) && (t[5] === 0 || t[5] === 65535)) {
        return n;
    }
    if (r(0, 4) && t[4] === 65535 && t[5] === 0) {
        return n;
    }
}
const le = ue(Zio);
function ogr(e) {
    return dst(le, e);
}
function zus(e) {
    let t = e.toLowerCase().replace(/\.$/, "");
    return t === "localhost" || t.endsWith(".localhost");
}
const Z = 30000;
const he = new Set([
    "connection",
    "keep-alive",
    "proxy-authenticate",
    "proxy-authorization",
    "proxy-connection",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade"
]);
function tao(e) {
    let t = e?.http ?? process.env.HTTP_PROXY ?? process.env.http_proxy ?? undefined;
    let r = e?.https ?? process.env.HTTPS_PROXY ?? process.env.https_proxy ?? t;
    let n = e?.noProxy ?? process.env.NO_PROXY ?? process.env.no_proxy ?? "";
    if (!t && !r) {
        return;
    }
    let o = (c)=>{
        if (!c) {
            return;
        }
        let a = /^[a-z][a-z0-9+.-]*:\/\//i.test(c) ? c : `http://${c}`;
        try {
            let g = new URL_1(a);
            if (g.protocol !== "http:" && g.protocol !== "https:" || !g.hostname) {
                throw Error("unsupported scheme or empty host");
            }
            return g;
        } catch  {
            Pt(`Invalid parent proxy URL, ignoring: ${xe(c)}`, {
                level: "error"
            });
            return;
        }
    };
    let httpUrl = o(t);
    let httpsUrl = o(r);
    if (!httpUrl && !httpsUrl) {
        return;
    }
    return {
        httpUrl,
        httpsUrl,
        noProxy: me(n)
    };
}
function me(e) {
    let t = {
        all: false,
        suffixes: [],
        cidr: new BlockList
    };
    for (let r of e.split(",")){
        r = r.trim();
        if (!r) {
            continue;
        }
        if (r === "*") {
            t.all = true;
            continue;
        }
        if (r.includes("/")) {
            pCt(t.cidr, r);
            continue;
        }
        let n = r.toLowerCase();
        let o = /^\[([^\]]+)\](?::\d+)?$/.exec(n);
        if (o) {
            n = o[1];
        }
        if (n.startsWith("*.")) {
            n = n.slice(1);
        }
        if (!isIP(n)) {
            let i = n.lastIndexOf(":");
            if (i !== -1 && /^\d+$/.test(n.slice(i + 1))) {
                n = n.slice(0, i);
            }
        } else if (pCt(t.cidr, n)) {
            continue;
        }
        t.suffixes.push(n);
    }
    return t;
}
function UHn(e, t) {
    let r = KAe(t.toLowerCase().replace(/\.$/, ""));
    if (r === "localhost" || ogr(r)) {
        return true;
    }
    if (e.noProxy.all) {
        return true;
    }
    if (dst(e.noProxy.cidr, r)) {
        return true;
    }
    for (let n of e.noProxy.suffixes){
        if (n.startsWith(".")) {
            if (r === n.slice(1) || r.endsWith(n)) {
                return true;
            }
        } else if (r === n || r.endsWith(`.${n}`)) {
            return true;
        }
    }
    return false;
}
function BHn(e, t) {
    if (t.isHttps) {
        return e.httpsUrl ?? e.httpUrl;
    }
    return e.httpUrl;
}
function nao(e) {
    let { destHost, destPort } = e;
    let n = KAe(destHost);
    if (!W8t(n)) {
        return Promise.reject(Error(`Invalid destination host for CONNECT: ${JSON.stringify(destHost)}`));
    }
    if (!Number.isInteger(destPort) || destPort < 1 || destPort > 65535) {
        return Promise.reject(Error(`Invalid destination port: ${destPort}`));
    }
    let o = isIP(n) === 6 ? `[${n}]:${destPort}` : `${n}:${destPort}`;
    return new Promise((resolve, reject)=>{
        let c = e.dial();
        let f = false;
        let a = (x)=>{
            if (f) {
                return;
            }
            f = true;
            c.destroy();
            reject(x);
        };
        let g = ()=>a(Error("Proxy closed during CONNECT handshake"));
        c.setTimeout(e.timeoutMs ?? Z, ()=>a(Error("CONNECT handshake timed out")));
        c.once("error", a);
        c.once("close", g);
        c.once(e.readyEvent, ()=>{
            c.write(`CONNECT ${o} HTTP/1.1\r
Host: ${o}\r
` + (e.authHeader ? `Proxy-Authorization: ${e.authHeader}\r
` : "") + `\r
`);
            let x = "";
            let C = (y)=>{
                x += y.toString("latin1");
                let S = x.indexOf(`\r
\r
`);
                if (S === -1) {
                    if (x.length > 16384) {
                        a(Error("CONNECT response header too large"));
                    }
                    return;
                }
                c.pause();
                c.removeListener("data", C);
                let u = x.slice(0, x.indexOf(`\r
`));
                if (!/^HTTP\/1\.[01] 2\d\d(?:\s|$)/.test(u)) {
                    return a(Error(`Proxy refused CONNECT: ${u.trim()}`));
                }
                let l = x.slice(S + 4);
                if (l.length) {
                    c.unshift(Buffer.from(l, "latin1"));
                }
                f = true;
                c.setTimeout(0);
                c.removeListener("error", a);
                c.removeListener("close", g);
                resolve(c);
            };
            c.on("data", C);
        });
    });
}
function sgr(e, destHost, destPort) {
    let n = KAe(e.hostname);
    let o = Number(e.port) || (e.protocol === "https:" ? 443 : 80);
    let i = e.protocol === "https:";
    return nao({
        destHost,
        destPort,
        authHeader: rao(e),
        readyEvent: i ? "secureConnect" : "connect",
        dial: ()=>{
            if (i) {
                return connect_1({
                    host: n,
                    port: o,
                    ...isIP(n) ? {} : {
                        servername: n
                    }
                });
            }
            return connect(o, n);
        }
    });
}
function rao(e) {
    if (!e.username && !e.password) {
        return;
    }
    try {
        let t = `${decodeURIComponent(e.username)}:${decodeURIComponent(e.password)}`;
        return `Basic ${Buffer.from(t).toString("base64")}`;
    } catch  {
        let t = `${e.username}:${e.password}`;
        return `Basic ${Buffer.from(t).toString("base64")}`;
    }
}
function ust(e) {
    let t = new Set;
    let e_connection = e.connection;
    if (e_connection) {
        for (let o of String(e_connection).split(",")){
            t.add(o.trim().toLowerCase());
        }
    }
    let n = {};
    for (let [o, i] of Object.entries(e)){
        let s = o.toLowerCase();
        if (!he.has(s) && !t.has(s)) {
            n[o] = i;
        }
    }
    return n;
}
function KAe(e) {
    if (e.startsWith("[") && e.endsWith("]")) {
        return e.slice(1, -1);
    }
    return e;
}
function oao(e) {
    if (!e) {
        return "-";
    }
    if (!e.username && !e.password) {
        return e.href;
    }
    let t = new URL_1(e.href);
    t.username = "***";
    t.password = "***";
    return t.href;
}
function xe(e) {
    return e.replace(/\/\/[^@/]*@/, "//***:***@");
}
function W8t(e) {
    if (!e || e.length > 255) {
        return false;
    }
    let t = KAe(e);
    if (t.includes("%")) {
        return false;
    }
    if (isIP(t)) {
        return true;
    }
    return /^[A-Za-z0-9._-]+$/.test(t);
}
function $D(e) {
    try {
        let t = KAe(e);
        let r = isIP(t) === 6 ? `[${t}]` : t;
        let n = KAe(new URL_1(`http://${r}/`).hostname);
        if (isIP(n) === 6) {
            return G(n) ?? n;
        }
        return n.replace(/\.$/, "");
    } catch  {
        return;
    }
}
function igr(e, t, r) {
    let n = isIP(e) === 6 ? `[${e}]` : e;
    if (t === r) {
        return n;
    }
    return `${n}:${t}`;
}
async function agr(servername, t, r, n) {
    let host = servername;
    if (r && !isIP(servername)) {
        let i = await jHn(servername, t, r);
        host = i.remoteAddress ?? "";
        i.destroy();
        if (!host) {
            throw Error(`connect ${servername}:${t}: no peer address`);
        }
    }
    return {
        host,
        port: t,
        ...n && !isIP(servername) ? {
            servername
        } : {},
        agent: false
    };
}
function jHn(host, port, lookup, n = Z) {
    return new Promise((resolve, reject)=>{
        let s = connect({
            port,
            host,
            lookup
        });
        let c = false;
        let f = (a)=>{
            if (c) {
                return;
            }
            c = true;
            s.setTimeout(0);
            if (a) {
                s.destroy();
                reject(a);
            } else {
                resolve(s);
            }
        };
        s.setTimeout(n, ()=>f(Error("connect timed out")));
        s.once("connect", ()=>f());
        s.once("error", f);
        s.once("close", ()=>f(Error("socket closed before connect")));
    });
}
function J(e) {
    let t = e.indexOf("%");
    if (t === -1) {
        return e;
    }
    return e.slice(0, t);
}
function bQ(hostPattern_1) {
    if (hostPattern_1.startsWith("[")) {
        let n = hostPattern_1.indexOf("]");
        if (n === -1) {
            return {
                hostPattern: hostPattern_1,
                port: undefined
            };
        }
        let o = J(hostPattern_1.slice(1, n));
        let hostPattern = $D(o) ?? o;
        let s = hostPattern_1.slice(n + 1);
        if (s === "") {
            return {
                hostPattern,
                port: undefined
            };
        }
        let c = Q(s.startsWith(":") ? s.slice(1) : "");
        if (c === undefined) {
            return {
                hostPattern: hostPattern_1,
                port: undefined
            };
        }
        return {
            hostPattern,
            port: c
        };
    }
    let t = hostPattern_1.lastIndexOf(":");
    if (t === -1) {
        return {
            hostPattern: hostPattern_1,
            port: undefined
        };
    }
    if (hostPattern_1.indexOf(":") !== t) {
        let n = J(hostPattern_1);
        return {
            hostPattern: $D(n) ?? n,
            port: undefined
        };
    }
    let r = Q(hostPattern_1.slice(t + 1));
    if (r === undefined) {
        return {
            hostPattern: hostPattern_1,
            port: undefined
        };
    }
    return {
        hostPattern: hostPattern_1.slice(0, t),
        port: r
    };
}
function Q(e) {
    if (!/^[1-9][0-9]{0,4}$/.test(e)) {
        return;
    }
    let t = Number(e);
    if (t > 65535) {
        return undefined;
    }
    return t;
}
function sao(e) {
    return e.flatMap((t)=>{
        let { hostPattern, port } = bQ(t);
        if (isIP(hostPattern)) {
            return [
                {
                    range: hostPattern,
                    port
                }
            ];
        }
        return [];
    });
}
function z8t(e) {
    return bQ(e).hostPattern;
}
function FKe(e, t) {
    let r = e.toLowerCase();
    if (t === "*") {
        return true;
    }
    if (t.startsWith("*.")) {
        if (isIP(KAe(r))) {
            return false;
        }
        let n = t.substring(2).toLowerCase();
        return r.endsWith(`.${n}`);
    }
    return r === t.toLowerCase();
}
function WHn(e, t, r) {
    let { hostPattern, port } = bQ(r);
    if (port !== undefined && port !== t) {
        return false;
    }
    return FKe(e, hostPattern);
}
function fCt(e, t) {
    let r = t.map(z8t);
    if (!e.startsWith("*.")) {
        return r.some((o)=>FKe(e, o));
    }
    let n = e.slice(2).toLowerCase();
    return r.some((o)=>{
        if (!o.startsWith("*.")) {
            return false;
        }
        let i = o.slice(2).toLowerCase();
        return n === i || n.endsWith(`.${i}`);
    });
}
export { Pt, Bus, _w, DHn, LHn, Vio, Bx, dCt, qio, jus, NHn, ed, uCt, $Hn, Sre, egr, Cm, $8t, tgr, Kio, TE, F$, F8t, ngr, rgr, Yio, cst, Dce, ALe, CLe, Xio, FHn, U8t, B8t, j8t, Jio, Qio, Zio, eao, pCt, dst, Wus, ogr, zus, tao, UHn, BHn, nao, sgr, rao, ust, KAe, oao, W8t, $D, igr, agr, jHn, bQ, sao, z8t, FKe, WHn, fCt };
