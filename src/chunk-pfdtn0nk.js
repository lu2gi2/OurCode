import { Ne, vs } from "/$bunfs/root/chunk-j27d47mr.js";
import { Dd } from "/$bunfs/root/chunk-6kc68p18.js";
import { m8e } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { y9, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne, Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { b0, TN } from "/$bunfs/root/chunk-k7dkeqsc.js";
import { zre } from "/$bunfs/root/chunk-4r70ar86.js";
import { HOt } from "/$bunfs/root/chunk-6dwnw6av.js";
import { cZ, vzn } from "/$bunfs/root/chunk-092xqjkn.js";
import { Kc } from "/$bunfs/root/chunk-svqqgdca.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { createHash } from "crypto";
import { normalize } from "path";
function b(e) {
    return {
        sha256: createHash("sha256").update(e, "utf8").digest("hex"),
        bytes: Buffer.byteLength(e, "utf8")
    };
}
function xre(e, n) {
    return Buffer.byteLength(n, "utf8") === e.bytes && b(n).sha256 === e.sha256;
}
const T = "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.";
function p0n(e) {
    if (e === undefined) {
        return T;
    }
    return `File has been modified on ${e} since this session read it. Read it again there (Read with "_host": "${e}") before attempting to write it.`;
}
function ohr(e) {
    if (e === undefined) {
        return HOt;
    }
    return `File content on ${e} has changed since this session read it. Read it again there (Read with "_host": "${e}"), then retry.`;
}
const Mk = 5000;
const O = 26214400;
const L = 4096;
function shr(e) {
    return Bun.hash(e).toString(36);
}
function WA(e) {
    if ((e.offset ?? 1) > 1 || e.isPartialView) {
        return false;
    }
    if (e.limit === undefined) {
        return true;
    }
    return e.content !== "" && Lt(e.content, `
`) + 1 < e.limit;
}
function D4(e) {
    return e !== undefined && WA(e) && !e.contentNotInModelContext;
}
function z$(e, n) {
    if (e.contentHash !== undefined) {
        return e.contentHash === shr(n);
    }
    return e.content === n;
}
function oNe(e, n) {
    return F(e, n) || e.contentFromTranscript === true && n.endsWith(`
`) && F(e, n.slice(0, -1));
}
function F(e, n) {
    if (e.readBaseline !== undefined) {
        return xre(e.readBaseline, n);
    }
    return z$(e, n);
}
function WS(e) {
    if (e.charCodeAt(0) === 65279) {
        return e.slice(1);
    }
    return e;
}
function Tg(e) {
    return WS(e).replaceAll(`\r
`, `
`);
}
function f0n(e, n) {
    return z$(e, Tg(n));
}
class w {
    keepsReadBaselines;
    cache;
    constructor(max, maxSize, r = false){
        this.keepsReadBaselines = r;
        this.cache = new Kc({
            max,
            maxSize,
            sizeCalculation: (o)=>Math.max(1, Buffer.byteLength(o.content))
        });
    }
    get(e) {
        return this.cache.get(normalize(e));
    }
    set(e, n) {
        let r = normalize(e);
        let o = this.cache.get(r);
        let keepContent = n.keepContent ?? o?.keepContent;
        let contentHash = n.contentHash ?? shr(n.content);
        let contentLength = n.contentLength ?? n.content.length;
        let c = n.content !== "" || n.contentHash === undefined;
        let readBaseline = !(this.keepsReadBaselines || zre()) ? undefined : c && !n.contentFromTranscript && WA(n) ? b(n.content) : n.readBaseline ?? (contentHash === o?.contentHash ? o?.readBaseline : undefined);
        let u = keepContent && n.content === "" && contentHash === o?.contentHash && o.content ? o.content : n.content;
        let d = keepContent || Buffer.byteLength(u) <= L ? u : "";
        this.cache.set(r, {
            ...n,
            keepContent,
            contentHash,
            contentLength,
            content: d,
            readBaseline
        });
        return this;
    }
    has(e) {
        return this.cache.has(normalize(e));
    }
    delete(e) {
        return this.cache.delete(normalize(e));
    }
    clear() {
        this.cache.clear();
    }
    get size() {
        return this.cache.size;
    }
    get max() {
        return this.cache.max;
    }
    get maxSize() {
        return this.cache.maxSize;
    }
    get calculatedSize() {
        return this.cache.calculatedSize;
    }
    keys() {
        return this.cache.keys();
    }
    entries() {
        return this.cache.entries();
    }
    dump() {
        return this.cache.dump();
    }
    load(e) {
        this.cache.load(e);
    }
}
function lS(e, n = O, r = false) {
    return new w(e, n, r);
}
function m0n(e) {
    return Object.fromEntries(e.entries());
}
function Zst(e) {
    return Array.from(e.keys());
}
function Pre(e, n) {
    let r = lS(e.max, e.maxSize);
    let o = e.dump();
    if (n?.stripSeededFromContext) {
        for (let i of o){
            if (i[1].value?.seededFromContext) {
                i[1].value = {
                    ...i[1].value,
                    seededFromContext: false
                };
            }
        }
    }
    r.load(o);
    return r;
}
function g0n(e) {
    let n = [];
    for (let [r, o] of e.entries()){
        if (o.startupMemorySeed) {
            n.push([
                r,
                o
            ]);
        }
    }
    e.clear();
    for (let [r, o] of n){
        e.set(r, o);
    }
}
function Mfs(e, n) {
    let r = Pre(e);
    for (let [o, i] of n.entries()){
        let s = r.get(o);
        if (!s || i.timestamp > s.timestamp) {
            r.set(o, i);
        }
    }
    return r;
}
const M = [
    "name",
    "description",
    "model",
    "allowed-tools",
    "argument-hint",
    "arguments",
    "disable-model-invocation",
    "user-invocable",
    "effort",
    "shell",
    "version",
    "when_to_use",
    "paths",
    "hooks",
    "context",
    "agent",
    "created_by",
    "improved_by",
    "mcpServers",
    "lspServers",
    "agents",
    "outputStyles",
    "themes",
    "workflows",
    "channels",
    "monitors",
    "settings",
    "experimental",
    "commands",
    "skills",
    "dependencies",
    "userConfig",
    "metadata",
    "displayName",
    "defaultEnabled",
    "fallback",
    "evals",
    "author",
    "homepage",
    "repository",
    "license",
    "keywords",
    "compatibility",
    "tools",
    "disallowedTools",
    "color",
    "permissionMode",
    "maxTurns",
    "autoCompactWindow",
    "initialPrompt",
    "memory",
    "background",
    "omitClaudeMd",
    "isolation",
    "observer",
    "observerMessage",
    "observeSubagents",
    "keep-coding-instructions",
    "force-for-plugin",
    "type",
    "originSessionId",
    "hide-from-slash-command-tool"
];
const ie = vzn(M);
const B = [
    "argument-hint",
    "arguments",
    "disable-model-invocation",
    "user-invocable",
    "context",
    "agent",
    "paths",
    "settings"
];
const se = new Set(B.map(cZ));
function BL(e) {
    return Bun.YAML.parse(e);
}
function Ire(e) {
    return Bun.YAML.stringify(e, null, 2) + `
`;
}
const N = /[{}[\]*&#!|>%@`]|: /;
function I(e) {
    let n = e.split(`
`);
    let r = [];
    for (let o of n){
        let i = o.match(/^([a-zA-Z_-]+):\s+(\S.*)$/);
        if (i) {
            let [, s, a] = i;
            if (!s || !a) {
                r.push(o);
                continue;
            }
            if (a.startsWith('"') && a.endsWith('"') || a.startsWith("'") && a.endsWith("'")) {
                r.push(o);
                continue;
            }
            if (a.startsWith("[") && a.endsWith("]")) {
                try {
                    if (Array.isArray(BL(a))) {
                        r.push(o);
                        continue;
                    }
                } catch  {}
            }
            if (N.test(a)) {
                let c = a.replaceAll("\\", "\\\\").replaceAll('"', "\\\"");
                r.push(`${s}: "${c}"`);
                continue;
            }
        }
        r.push(o);
    }
    return r.join(`
`);
}
function v(e) {
    let quotedKeys = [];
    let unprovableKeys = [];
    let o = e.split(`
`).map((i)=>{
        let s = i.endsWith("\r");
        let a = s ? i.slice(0, -1) : i;
        let c = a.match(/^([A-Za-z0-9_][A-Za-z0-9_.-]*):[ \t]+(.*)$/);
        if (!c) {
            S(a, unprovableKeys);
            return i;
        }
        let [, l, u] = c;
        if (!l || !u) {
            return i;
        }
        let d = u.trimEnd();
        if (d === "") {
            return i;
        }
        if (/^["'|>]/.test(d)) {
            S(a, unprovableKeys);
            return i;
        }
        let f;
        try {
            f = BL(d);
        } catch  {
            return i;
        }
        if (typeof f !== "string" && f !== null) {
            S(a, unprovableKeys);
            return i;
        }
        if (!(typeof f === "string" && f !== d || f === null && ![
            "null",
            "Null",
            "NULL",
            "~"
        ].includes(d))) {
            return i;
        }
        quotedKeys.push(l);
        let g = d.replaceAll("\\", "\\\\").replaceAll('"', "\\\"");
        return `${l}: "${g}"${s ? "\r" : ""}`;
    });
    return {
        text: quotedKeys.length === 0 ? null : o.join(`
`),
        quotedKeys,
        unprovableKeys
    };
}
function S(e, unprovableKeys) {
    let r = e.match(/^("(?:[^"\\]|\\.)*"):[ \t]+(.*)$/) ?? e.match(/^('(?:[^']|'')*'):[ \t]+(.*)$/) ?? e.match(/^([^\s#][^:\n]*?):[ \t]+(.*)$/);
    if (r === null) {
        return;
    }
    let [, o, i] = r;
    if (!o || !i) {
        return;
    }
    let s = i.trimEnd().replace(/"(?:[^"\\]|\\.)*"|'(?:[^']|'')*'/g, "");
    if (/^#|[ \t]#/.test(s)) {
        unprovableKeys.push(o);
    }
}
const Ore = 30;
const aCe = 65536;
const RE = /^---\s*\n([\s\S]*?)---\s*\n?/;
const aV = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(\r?\n|$)/;
function z(e, n) {
    return e;
}
function oi(e, n, r) {
    let o = e;
    e = WS(e);
    let i = e.indexOf("---", 3) < 0 ? null : e.match(RE);
    if (!i) {
        return {
            frontmatter: {},
            content: o
        };
    }
    let s = i[1] || "";
    let a = e.slice(i[0].length);
    if (r?.untrusted && (s.length > aCe || W(s) || V(s))) {
        return {
            frontmatter: {},
            content: a,
            parseError: "the frontmatter is too long, too nested, or may hold a YAML anchor"
        };
    }
    let c = (p)=>{
        if (r?.normalizeKeys) {
            return z(p, n);
        }
        return p;
    };
    let l = {};
    let parseError;
    let d;
    if (r?.quoteLossyValues) {
        let p = e.match(aV);
        let m = p?.[1] ?? "";
        if (s.trim() !== "" || m.trim() !== "") {
            if (p === null || m.trim() !== s.trim()) {
                d = 'the closing --- is ambiguous (a value containing "---"?) — part of the block may have read as body';
            }
        }
    }
    let f;
    let h;
    if (r?.quoteLossyValues) {
        let p = v(s);
        if (p.unprovableKeys.length > 0) {
            f = `an inline '#' in [${p.unprovableKeys.join(", ")}] cannot be preserved by a rewrite`;
        }
        if (p.text !== null) {
            try {
                let m = c(C(BL(p.text)));
                let k = d ?? f ?? E(s, m);
                return {
                    frontmatter: m,
                    content: a,
                    ...k !== undefined && {
                        rewriteHazard: k
                    }
                };
            } catch  {
                h = `quoting [${p.quotedKeys.join(", ")}] broke the document; a rewrite from the plain parse would drop their inline '#' content`;
                let m = n ? ` in ${n}` : "";
                t(`quoteLossyValues: ${h}${m}`, {
                    level: "warn"
                });
            }
        }
    }
    let g = W9t(s);
    if (g.ok) {
        l = c(C(g.value));
    } else {
        parseError = g.error;
        let p = n ? ` in ${n}` : "";
        t(`Failed to parse YAML frontmatter${p}: ${parseError}`, {
            level: "warn"
        });
    }
    let x = !r?.quoteLossyValues ? undefined : parseError !== undefined ? d ?? `the frontmatter failed to parse: ${parseError}` : d ?? f ?? h ?? E(s, l);
    return {
        frontmatter: l,
        content: a,
        ...parseError !== undefined && {
            parseError
        },
        ...x !== undefined && {
            rewriteHazard: x
        }
    };
}
function W9t(e) {
    try {
        return {
            ok: true,
            value: BL(e)
        };
    } catch  {
        try {
            let n = I(e).replace(/^\t+/gm, (r)=>"  ".repeat(r.length));
            return {
                ok: true,
                value: BL(n)
            };
        } catch (error) {
            return {
                ok: false,
                error: error instanceof Error ? error.message : String(error)
            };
        }
    }
}
function E(e, n) {
    if (e.trim() !== "" && Object.keys(n).length === 0) {
        return "the frontmatter has no keys (a sequence, scalar, or comment-only document)";
    }
}
function C(e) {
    if (e && typeof e === "object" && !Array.isArray(e)) {
        return e;
    }
    return {};
}
function fRt(e) {
    return _(e, {
        results,
        bytes
    });
}
function _(e, n) {
    if (Array.isArray(e)) {
        return e.flatMap((a)=>_(a, n));
    }
    if (typeof e !== "string") {
        return [];
    }
    let r = [];
    let o = "";
    let i = 0;
    for (const c of e){
        if (c === "{") {
            i++;
            o += c;
        } else if (c === "}") {
            i--;
            o += c;
        } else if (c === "," && i === 0) {
            let l = o.trim();
            if (l) {
                r.push(l);
            }
            o = "";
        } else {
            o += c;
        }
    }
    let s = o.trim();
    if (s) {
        r.push(s);
    }
    return r.filter((a)=>a.length > 0).flatMap((a)=>P(a, n));
}
var results = 1000;
var bytes = 4194304;
function P(e, n) {
    if (!e.includes("{")) {
        return [
            e
        ];
    }
    let r = [];
    let o = [
        e
    ];
    for(let i = o.pop(); i !== undefined; i = o.pop()){
        let s = i.match(/^([^{]*)\{([^}]+)\}(.*)$/);
        if (!s) {
            r.push(i);
            continue;
        }
        let a = s[1] || "";
        let c = s[2] || "";
        let l = s[3] || "";
        let u = c.split(",").map((f)=>f.trim());
        n.bytes -= i.length;
        let d = r.length + o.length + u.length;
        if (n.bytes < 0 || d > n.results || d * e.length > n.bytes) {
            t(`Brace pattern expansion exceeds the budget; using it unexpanded: ${ne(e, 256)}`, {
                level: "warn"
            });
            return [
                e
            ];
        }
        for(let f = u.length - 1; f >= 0; f--){
            o.push(a + (u[f] ?? "") + l);
        }
    }
    n.results -= r.length;
    n.bytes -= r.length * e.length;
    return r;
}
function h0n(e) {
    if (e === undefined || e === null) {
        return;
    }
    let n = typeof e === "number" ? e : Dd(String(e));
    if (Number.isInteger(n) && n > 0) {
        return n;
    }
}
function ihr(e) {
    let n = h0n(e);
    if (n !== undefined && n >= b0 && n <= TN) {
        return n;
    }
}
function ahr({ experimental }) {
    if (typeof experimental !== "object" || experimental === null) {
        return;
    }
    let r = Object.entries(experimental).find(([o])=>cZ(o) === "cachettl")?.[1];
    return m8e.find((o)=>o === r);
}
function xQ(e, n, r) {
    if (e == null) {
        return null;
    }
    if (typeof e === "string") {
        return e.trim() || null;
    }
    if (typeof e === "number" || typeof e === "boolean") {
        return String(e);
    }
    let o = r ? `${r}:${n}` : n ?? "unknown";
    t(`Description invalid for ${o} - omitting`, {
        level: "warn"
    });
    return null;
}
function z9t(e, n) {
    if (e == null) {
        return;
    }
    let r = String(e);
    if (r.length <= y9) {
        return r;
    }
    t(`Frontmatter "name" of ${n} is over ${y9} characters - ignoring it`, {
        level: "warn"
    });
}
function lhr(e) {
    let n = (experimental)=>{
        if (experimental != null && typeof experimental === "object" && !Array.isArray(experimental)) {
            return Object.keys(experimental);
        }
        return [];
    };
    return D([
        ...Object.keys(e),
        ...n(e.experimental)
    ]);
}
function G9t(e) {
    return Mre(e) ?? false;
}
function Mre(e) {
    if (typeof e === "boolean") {
        return e;
    }
    if (typeof e !== "string" && typeof e !== "number") {
        return;
    }
    let n = String(e);
    if (Ne(n)) {
        return true;
    }
    if (vs(n)) {
        return false;
    }
}
const R = [
    "bash",
    "powershell"
];
function chr(e, n) {
    if (e == null) {
        return;
    }
    let r = String(e).trim().toLowerCase();
    if (r === "") {
        return;
    }
    if (R.includes(r)) {
        return r;
    }
    t(`Frontmatter 'shell: ${e}' in ${n} is not recognized. Valid values: ${R.join(", ")}. Falling back to bash.`, {
        level: "warn"
    });
}
const j = 256;
function V(e) {
    let n = 0;
    for(let r = 0; r < e.length; r++){
        let o = e[r];
        if (o === "[" || o === "{" || (o === "-" || o === "?") && ` 	\r
`.includes(e[r - 1] ?? " ") && ` 	\r
`.includes(e[r + 1] ?? " ")) {
            n++;
            if (n > j) {
                return true;
            }
        }
    }
    return false;
}
const Y = 256;
function W(e) {
    for(let n = e.indexOf("&"); n >= 0; n = e.indexOf("&", n + 1)){
        if (` 	\r
`.includes(e[n + 1] ?? " ")) {
            continue;
        }
        let r = e[n - 1];
        if (r !== undefined && /[\p{L}\p{N}&]/u.test(r)) {
            continue;
        }
        let o;
        if (r === " " || r === "\t") {
            let l = n - 1;
            while(e[l] === " " || e[l] === "\t"){
                l--;
            }
            let u = e[l];
            if (u === undefined || !/[\p{L}\p{N}]/u.test(u)) {
                return true;
            }
            o = l + 1;
        } else {
            o = n;
        }
        let i = o - 1;
        while(i >= 0 && !` 	\r
`.includes(e[i] ?? " ")){
            if (o - i > Y) {
                return true;
            }
            i--;
        }
        let s = e.slice(i + 1, o);
        if (s.includes("!")) {
            return true;
        }
        let a = Math.max(s.lastIndexOf("["), s.lastIndexOf("{"), s.lastIndexOf(","));
        for(let l = s.indexOf(":"); l >= 0; l = s.indexOf(":", l + 1)){
            if (l === 0 || `"']}[{,`.includes(s[l - 1] ?? "")) {
                a = Math.max(a, l);
            }
        }
        let c = s.slice(a + 1);
        if ("!&*".includes(c[0] ?? "!")) {
            return true;
        }
    }
    return false;
}
export { xre, p0n, ohr, Mk, shr, WA, D4, z$, oNe, WS, Tg, f0n, lS, m0n, Zst, Pre, g0n, Mfs, BL, Ire, Ore, aCe, RE, aV, oi, W9t, fRt, h0n, ihr, ahr, xQ, z9t, lhr, G9t, Mre, chr };
