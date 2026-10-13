import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { vq } from "/$bunfs/root/chunk-etbngzss.js";
import { LO } from "/$bunfs/root/chunk-bd805sh6.js";
import { pt } from "/$bunfs/root/chunk-223dyewd.js";
import { x3e } from "/$bunfs/root/chunk-1ej05ybf.js";
import { Bn, my, uG } from "/$bunfs/root/chunk-xgw72tt1.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { readFileSync, lstatSync } from "fs";
import { lstat, readFile } from "fs/promises";
import { createHmac } from "crypto";
import { basename, dirname, resolve } from "path";
async function Ba(e, n) {
    try {
        let r = await lstat(e);
        if (!r.isFile() || r.size > n) {
            return null;
        }
        return await readFile(e, "utf8");
    } catch  {
        return null;
    }
}
function jAs(e, n) {
    try {
        let r = lstatSync(e);
        if (!r.isFile() || r.size > n) {
            return null;
        }
        return readFileSync(e, "utf8");
    } catch  {
        return null;
    }
}
async function Vk(e, n, r, s) {
    let t = await e.stat(n);
    if (!t.isFile() || t.size > r) {
        s?.(t);
        return null;
    }
    return await e.readFile(n, {
        encoding: "utf8"
    });
}
function WAs(e, n, r) {
    let s = e.statSync(n);
    if (!s.isFile() || s.size > r) {
        return null;
    }
    return e.readFileSync(n, {
        encoding: "utf8"
    });
}
const k = /[^\p{L}\p{N}._-]+/gu;
const H = /^[._-]+|[._-]+$/gu;
const W = /[\p{L}\p{N}]/u;
const v = 20;
function Ly(e) {
    let n = B(e).trim();
    let r = [
        ...n
    ];
    if (r.length > 64) {
        return `${r.slice(0, 64).join("")}\u2026`;
    }
    return n;
}
function B(e) {
    return e.replace(/[\p{Cf}\p{Cc}\p{Cs}\p{Zl}\p{Zp}]/gu, "");
}
function Jct(e, n = v) {
    let r = Ly(e).replace(k, "-").replace(H, "");
    if (!W.test(r)) {
        return "";
    }
    let s = ne(r, n);
    if (s === r) {
        return r;
    }
    return `${s}\u2026`;
}
const Lkr = 512;
const g = 4 * Lkr;
function hjn(e, n) {
    let r = 0;
    while(r <= e.length){
        let s = e.indexOf(`
`, r);
        let t = s === -1 ? e.length : s;
        let i = t - r <= g;
        let o = ne(e.slice(r, Math.min(t, r + g)), g);
        let d = n(o).replace(/\s+/g, " ").trim();
        if (d !== "" || !i) {
            let c = ne(d, Lkr);
            if (!i || c.length < d.length) {
                return `${c}\u2026`;
            }
            return c;
        }
        if (s === -1) {
            break;
        }
        r = s + 1;
    }
    return "";
}
function Qct(e) {
    if (typeof e !== "string") {
        return;
    }
    let n = Ly(e.replace(/["<>]/g, ""));
    if (n === "") {
        return undefined;
    }
    return n;
}
const wP = 200;
function xF(e, n) {
    return `${e}@${n}`;
}
function Nkr(e) {
    return e.replace(/%|[^\x20-\x7e]/gu, (n)=>encodeURIComponent(n));
}
function yjn(e, n) {
    let r = Date.now();
    return `${e}-${r}@${n}`;
}
const ca = "team-lead";
const axe = "user";
const Zct = "system";
const zAs = /^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$/;
const Qoe = "claude-swarm";
const Wen = "swarm-view";
const Zoe = "tmux";
const g3e = "cat";
function zen() {
    return `claude-swarm-${process.pid}`;
}
const GAs = "CLAUDE_CODE_TEAMMATE_COMMAND";
const wSo = 120;
function Gen(e) {
    let n = hjn(e, (r)=>LO(r, " ", {
            keepEmojiJoiners: true
        }));
    if (n === "") {
        return "";
    }
    return pt(n, wSo);
}
const x = [
    "bypass",
    "prompting"
];
const G = new Set(x);
function VAs(e) {
    return G.has(e);
}
function R(e) {
    let n = new TextEncoder;
    return e.replace(/[^A-Za-z0-9:_/.\\-]/gu, (r)=>Array.from(n.encode(r), (s)=>`%${s.toString(16).toUpperCase().padStart(2, "0")}`).join(""));
}
function lxe(e) {
    return `bridge:${R(e)}`;
}
function XV(e) {
    return `uds:${R(e)}`;
}
function E(e) {
    try {
        return decodeURIComponent(e);
    } catch  {
        return e;
    }
}
const h = /^[A-Za-z0-9_-]{1,80}$/;
const Ven = 32;
const y = 24;
function qAs(e, n) {
    return createHmac("sha256", n).update(e).digest("hex").slice(0, y);
}
const f = "A-Za-z0-9%:_/.\\\\-";
const A = `[0-9a-f]{${y}}`;
const X = `${A}(?:,${A}){0,${Ven - 1}}`;
const C = new RegExp(`^${X}$`);
const vSo = 300;
const j = new RegExp(`^[${f}]{1,${vSo}}$`);
function KAs(e) {
    return j.test(e);
}
function _jn(e, n) {
    if (e === undefined) {
        return;
    }
    let r = [
        ...e
    ];
    if (n) {
        r.push(n);
    }
    if (r.length === 0) {
        return;
    }
    if (r.length > Ven) {
        return r.slice(r.length - Ven);
    }
    return r;
}
function V(e, n, r, s, t, i) {
    let o = [];
    if (e) {
        o.push(`from="${e}"`);
    }
    if (r && h.test(r)) {
        o.push(`from-session="${r}"`);
    }
    if (s !== undefined && s.length > 0) {
        let l = s.join(",");
        if (C.test(l)) {
            o.push(`hop-chain="${l}"`);
        }
    }
    let d = n === undefined ? undefined : Ly(n.replace(/["<>]/g, ""));
    if (d) {
        o.push(`from-name="${d}"`);
    }
    if (t) {
        o.push(`from-mode="${t}"`);
    }
    let c = i === undefined ? undefined : Ly(i.replace(/["<>]/g, ""));
    if (c) {
        o.push(`from-plugin="${c}"`);
    }
    if (o.length > 0) {
        return ` ${o.join(" ")}`;
    }
    return "";
}
const bjn = new RegExp(`^<${vq} from="([^"]+)"`);
function edt(e, n, r, s, t, i, o) {
    let d = V(e, n, s, t, i, o);
    return `<${vq}${d}>
${x3e(vq, r)}
</${vq}>`;
}
function _(e) {
    {
        if (typeof e !== "string") {
            return;
        }
        let n = h.source.replace(/^\^|\$$/g, "");
        let r = C.source.replace(/^\^|\$$/g, "");
        let s = e;
        let t = s.match(new RegExp(`^<${vq}(?: from="([${f}]+)")?(?: from-session="(${n})")?(?: hop-chain="(${r})")?(?: from-name="([^"<>\\n\\r]+)")?(?: from-mode="(${x.join("|")})")?(?: from-plugin="([^"<>\\n\\r]+)")?>\\n([\\s\\S]*)\\n</${vq}>$`));
        if (!t) {
            return;
        }
        let hopChain = t[3] !== undefined ? t[3].split(",") : undefined;
        let fromMode = t[5];
        if (edt(t[1], t[4], t[7] ?? "", t[2], hopChain, fromMode, t[6]) !== s) {
            return;
        }
        return {
            ...t[1] !== undefined && {
                from: t[1]
            },
            ...t[2] !== undefined && {
                fromSession: t[2]
            },
            ...hopChain !== undefined && {
                hopChain
            },
            ...t[4] !== undefined && {
                fromName: t[4]
            },
            ...fromMode !== undefined && {
                fromMode
            },
            ...t[6] !== undefined && {
                fromPlugin: t[6]
            },
            body: t[7] ?? ""
        };
    }
}
function Sjn(e) {
    let n = _(e);
    if (!n || n.hopChain === undefined) {
        return e;
    }
    return edt(n.from, n.fromName, n.body, n.fromSession, undefined, n.fromMode, n.fromPlugin);
}
function ESo(e, n) {
    if (n === undefined) {
        return e;
    }
    let r = _(e);
    if (!r || r.fromPlugin !== undefined) {
        return e;
    }
    return edt(r.from, r.fromName, r.body, r.fromSession, r.hopChain, r.fromMode, n);
}
function wSe(e, n, r) {
    if (e.body === undefined || n === r) {
        return e;
    }
    let { body, ...rest } = e;
    return rest;
}
function CFe(e) {
    let n = _(e);
    if (!n) {
        return {};
    }
    let r = n.fromName ? Ly(n.fromName) : "";
    return {
        ...r && {
            name: r
        },
        ...n.fromSession !== undefined && {
            fromSession: n.fromSession
        },
        ...n.hopChain !== undefined && {
            hopChain: n.hopChain
        },
        ...n.fromMode !== undefined && {
            fromMode: n.fromMode
        },
        body: n.body
    };
}
function h3e(e) {
    for(let n = e.length - 1; n >= 0; n--){
        let r = e[n];
        if (r.type !== "user" || r.toolUseResult || r.isCompactSummary) {
            continue;
        }
        if (r.origin?.kind === "peer") {
            return r.origin.hopChain ?? [];
        }
        return undefined;
    }
}
const K = new RegExp(`^(?:uds|bridge|did):[${f}]{1,200}$`);
function ese(e) {
    return K.test(e);
}
const Y = /^\/\S*\.sock$/;
const q = /^[\\/]{2}[.?][\\/]pipe[\\/]/i;
const J = /^\/\S*\.sock/;
function kSo(e) {
    return J.test(e);
}
function Ch(target) {
    if (target.startsWith("uds:")) {
        return {
            scheme: "uds",
            target: E(target.slice(4))
        };
    }
    if (target.startsWith("bridge:")) {
        return {
            scheme: "bridge",
            target: E(target.slice(7))
        };
    }
    if (target.startsWith("did:")) {
        return {
            scheme: "did",
            target
        };
    }
    if (Y.test(target) || q.test(target)) {
        return {
            scheme: "uds",
            target
        };
    }
    return {
        scheme: "other",
        target
    };
}
function wjn(e, n) {
    if (e.trim().length === 0) {
        return "to must not be empty";
    }
    let r = Ch(e);
    if ((r.scheme === "bridge" || r.scheme === "uds") && r.target.trim().length === 0) {
        return "address target must not be empty";
    }
    if (!u0(r.target) || !u0(e)) {
        return `'${e}' is not a local socket address. Use an address from ${n}.`;
    }
}
function u0(e) {
    if (!Bn(e)) {
        return true;
    }
    return ESe(e) !== undefined;
}
function vSe(e, n) {
    return T(e, n) === "same";
}
function tse(e, n) {
    return T(e, n) !== "different";
}
function T(e, n) {
    let r = ESe(e);
    let s = ESe(n);
    if (r !== undefined || s !== undefined) {
        if (r === undefined || s === undefined) {
            return "different";
        }
        if ($kr(r) === $kr(s)) {
            return "same";
        }
        if (P(r) === P(s) || m(r) === m(s)) {
            return "maybe";
        }
        return "different";
    }
    if (e === n) {
        return "same";
    }
    if (my(e) || my(n)) {
        if (p(a(resolve(e))) === p(a(resolve(n)))) {
            return "maybe";
        }
        return "different";
    }
    let t = a(resolve(e));
    let i = a(resolve(n));
    if (t === i) {
        return "same";
    }
    let o = O();
    let d = o === "macos" || o === "windows";
    if (p(t) === p(i) || d && m(t) === m(i)) {
        return "maybe";
    }
    return "different";
}
function p(e) {
    let n = O();
    if (n === "macos" || n === "windows") {
        return a(P(Q(e)));
    }
    return e;
}
function $kr(e) {
    return e.replace(/[A-Z]/g, (n)=>n.toLowerCase());
}
function P(e) {
    let n = "";
    for (let r of e){
        let s = r.toUpperCase();
        let t = N(s) ? s : r;
        let i = t.toLowerCase();
        n += N(i) ? i : t;
    }
    return n;
}
function N(e) {
    let n = e.codePointAt(0);
    return n !== undefined && e.length === (n > 65535 ? 2 : 1);
}
function m(e) {
    return e.toUpperCase().toLowerCase();
}
function Q(e) {
    if (O() === "macos") {
        return e.normalize("NFC");
    }
    return e;
}
function a(e) {
    if (O() !== "macos") {
        return e;
    }
    let n = uG(e);
    let r = /^\/private(\/(?:var|tmp|etc)(?:\/.*)?)$/.exec(n);
    if (r) {
        return r[1];
    }
    return n;
}
function ESe(e) {
    let n = /^[\\/]{2}[.?][\\/]pipe[\\/](?:(LOCAL)[\\/])?([^\\/]+)$/i.exec(e);
    if (n === null || n[2] === "." || n[2] === "..") {
        return;
    }
    if (/[. ]$/.test(n[2])) {
        return;
    }
    if (e.startsWith("\\\\?\\") && e.includes("/")) {
        return;
    }
    if (n[1] === undefined) {
        return n[2];
    }
    return `${b}\\${n[2]}`;
}
function TSo(e, n, r) {
    if (ESe(n) !== undefined) {
        let s = ESe(e);
        return s !== undefined && re.test(s);
    }
    if (my(e)) {
        return false;
    }
    if (dirname(resolve(e)) === dirname(resolve(n))) {
        return e.endsWith(".sock");
    }
    return r?.verifiedPeerPid !== undefined && r.ownerUids !== undefined && D(e, r.ownerUids);
}
const ASo = "reply_across_default_dirs";
const ee = [
    /^\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/,
    /^\/private\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/,
    /^\/run\/user\/(0|[1-9]\d*)\/cc-socks$/,
    /^\/data\/data\/com\.termux\/files\/usr\/tmp\/cc-socks(?:-(0|[1-9]\d*))?$/
];
function D(e, n) {
    let r = resolve(e);
    if (!/^(\d+(-[0-9a-f]{8})?|[0-9a-f]{1,16})\.sock$/.test(basename(r))) {
        return false;
    }
    let s = dirname(r);
    for (let t of ee){
        let i = t.exec(s);
        if (i) {
            return i[1] === undefined || n.some((o)=>String(o) === i[1]);
        }
    }
    return false;
}
function YAs(e, n, r, s = []) {
    let t = ESe(e);
    let i = ESe(n);
    if (t !== undefined && i !== undefined && I.test(i) && !I.test(t)) {
        return false;
    }
    if (TSo(e, n)) {
        return true;
    }
    return (r?.includes(ASo) ?? false) && D(e, s);
}
const M = "cc-msg-";
var b = "LOCAL";
var re = new RegExp(`^(?:${b}\\\\)?${M}[0-9a-f]{32}$`, "i");
var I = new RegExp(`^${M}[0-9a-f]{32}$`, "i");
export { Ba, jAs, Vk, WAs, Ly, Jct, Lkr, hjn, Qct, wP, xF, Nkr, yjn, ca, axe, Zct, zAs, Qoe, Wen, Zoe, g3e, zen, GAs, wSo, Gen, VAs, lxe, XV, Ven, qAs, vSo, KAs, _jn, bjn, edt, Sjn, ESo, wSe, CFe, h3e, ese, kSo, Ch, wjn, u0, vSe, tse, $kr, ESe, TSo, ASo, YAs };
