import { l, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { my, UBe } from "/$bunfs/root/chunk-xgw72tt1.js";
import { X, gf, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I, Tr, _c, Nr } from "/$bunfs/root/chunk-qch5xj2a.js";
import { RE, W9t } from "/$bunfs/root/chunk-pfdtn0nk.js";
import { Y3e, GMt, Ydt, rnn, j8, Xue, W8, XWn, Nv, Que, gnn, JWn, iut, wEo, ZMt, uAr, use, eHt, G8, QWn, Z3e, _Ar, bAr, nzn, SAr, kEo, TEo, nHt, uUe, bnn, _0, EO, rHt, xh, iZ } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { OFn, WYe, kgo, Lde, clt, ZNs, Pgo, Igo } from "/$bunfs/root/chunk-nbx3tg29.js";
import { xr } from "/$bunfs/root/chunk-c5mcach4.js";
import { Io } from "/$bunfs/root/chunk-63xa24b4.js";
import { hSr, PSr } from "/$bunfs/root/chunk-30jbnw20.js";
import { Iae, Fge, XU, wI, u$, cJ, Q8r, Cvt, $sr, J9r, VKt, dEt } from "/$bunfs/root/chunk-kasbfbhj.js";
import { bds, Not } from "/$bunfs/root/chunk-jfcrjtbk.js";
import { uS } from "/$bunfs/root/chunk-9fvky64k.js";
import { HAe, Aso } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { st } from "/$bunfs/root/chunk-45f0zf8d.js";
import { Pie } from "/$bunfs/root/chunk-ffwr6v79.js";
import { Wve } from "/$bunfs/root/chunk-z9cp9ecj.js";
import { Hjo, lWe } from "/$bunfs/root/chunk-9jpxkq0t.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { o, T, u, ue, pa } from "/$bunfs/root/chunk-smx21d0k.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { lstat, readdir, readFile, stat } from "fs/promises";
import * as g from "path";
import { isAbsolute, relative, resolve, sep } from "path";
function me(e) {
    let n = /@ts-/i.test(e);
    let s = /\u2500\u2500 from plugin |\/\/\s*Skipped:/.test(e);
    if (n) {
        return "@ts-";
    }
    if (s) {
        return "framing";
    }
}
const A = (e, n, ...s)=>e?.kind === n && s.includes(e.text);
function Fe(e) {
    let n = A(e, "punct", "{", "(", "[");
    let s = A(e, "punct", "}", ")", "]");
    if (n) {
        return 1;
    }
    if (s) {
        return -1;
    }
    return 0;
}
const H = (kind, text, s)=>({
        kind,
        text,
        line: s
    });
const Pt = (e, n, s)=>{
    let r = e.indexOf("*/", n + 2);
    let a = r !== -1;
    let i = a ? r + 2 : e.length;
    let c = e.slice(n, i);
    let p = c.match(/\r\n|[\n\r\u2028\u2029]/g);
    let m = s + (p?.length ?? 0);
    let d = a ? me(c) : "/*";
    let k = {
        end: i,
        line: m
    };
    if (d) {
        return {
            ...k,
            token: H("stray", d, s)
        };
    }
    return k;
};
const At = (e, n, s)=>{
    let r = e.slice(n).search(/[\n\r\u2028\u2029]/);
    let a = r === -1 ? e.length : n + r;
    let i = e.slice(n, a).trim();
    let c = me(i);
    let token = i.startsWith("///") ? H("reference", i, s) : c ? H("stray", c, s) : undefined;
    if (token) {
        return {
            end: a,
            line: s,
            token
        };
    }
    return {
        end: a,
        line: s
    };
};
const De = (e, n, s)=>{
    let r = e[n] ?? "";
    let a = "";
    let i = n + 1;
    while(i < e.length){
        let p = e[i] ?? "";
        let m = p === "\\" && i + 1 < e.length;
        if (p === r || p === `
` || p === "\r") {
            break;
        }
        a += m ? e[i + 1] ?? "" : p;
        i += m ? 2 : 1;
    }
    if (e[i] === r) {
        return {
            end: i + 1,
            line: s,
            token: H("string", a, s)
        };
    }
    return {
        end: i,
        line: s,
        token: H("stray", r, s)
    };
};
const Mt = (e, n, s)=>{
    let r = n + 1;
    while(r < e.length && /[\w$]/.test(e[r] ?? "")){
        r += 1;
    }
    return {
        end: r,
        line: s,
        token: H("word", e.slice(n, r), s)
    };
};
function Ve(e, n) {
    let s = e[n] ?? "";
    let r = e.slice(n, n + 2);
    let a = {
        "//": At,
        "/*": Pt
    };
    let i = {
        "'": De,
        '"': De
    };
    let c = /[\w$]/.test(s);
    return a[r] ?? i[s] ?? (c ? Mt : undefined);
}
function He(e) {
    let n = [];
    let s = [];
    let r = 0;
    let a = 0;
    let i = 1;
    let c = false;
    let p = 1;
    while(a < e.length){
        let m = e[a] ?? "";
        let d = m === `
` || m === "\u2028" || m === "\u2029" || m === "\r" && e[a + 1] !== `
`;
        if (c) {
            let x = m === "\\";
            let y = m === "$" && e[a + 1] === "{";
            let E = m === "`";
            if (y) {
                s.push(r);
            }
            c = !y && !E;
            i += d ? 1 : 0;
            a += x || y ? 2 : 1;
            continue;
        }
        let k = Ve(e, a);
        let h = m === "`";
        let w = m === "}" && s.length > 0 && r === s.at(-1);
        let b = /[\t\n\v\f\r \u2028\u2029]/.test(m);
        let S = m === "/" || m === "\\";
        let C = /[!-~]/.test(m) && !S;
        let R = !b && !C;
        let f = S ? m : "other";
        if (k) {
            let x = k(e, a, i);
            if (x.token) {
                n.push(x.token);
            }
            a = x.end;
            i = x.line;
            continue;
        }
        if (h) {
            n.push(H("string", "`", i));
            p = i;
        }
        if (R) {
            n.push(H("stray", f, i));
        }
        if (w) {
            s.pop();
        }
        if (!h && !w && !R && !b) {
            n.push(H("punct", m, i));
            r += m === "{" ? 1 : m === "}" ? -1 : 0;
        }
        c = h || w;
        i += d ? 1 : 0;
        a += 1;
    }
    if (c || s.length > 0) {
        n.push(H("stray", "`", p));
    }
    return n;
}
const re = (e, n)=>[
        e[n],
        e[n + 1],
        e[n + 2]
    ];
function Be(e, n) {
    let [s, r, a] = re(e, n);
    let i = A(s, "word", "global") && A(r, "punct", "{");
    let c = A(s, "word", "module", "namespace") && r?.kind === "string";
    let p = A(s, "word", "as") && A(r, "word", "namespace");
    let m = A(s, "word", "interface") && r?.kind === "word" && r.line !== s?.line;
    let d = A(s, "word", "interface") && A(r, "word", "EngineInterface") && !A(a, "punct", "{");
    if (i) {
        return "`global { … }` augments the global scope";
    }
    if (c) {
        return `a nested \`module '${r.text}'\` augments another module`;
    }
    if (p) {
        return "`as namespace` declares a global";
    }
    if (m) {
        return "`interface` without its name on the same line";
    }
    if (d) {
        return "`EngineInterface` takes members only, no `extends` or type parameters";
    }
}
function Ue(e) {
    let n = [];
    let s = 0;
    for (let [r, a] of e.entries()){
        let c = s === 0 && A(e[r - 1], "word", "declare") && A(a, "word", "module") ? undefined : Be(e, r);
        s += Fe(a);
        if (c !== undefined) {
            n.push(`line ${a.line}: ${c}; the contract may only augment 'claude-code', at its top level`);
        }
    }
    return n;
}
function fe(e, n, s) {
    let [r, a, i] = re(e, n);
    return r?.kind === "word" && r.text === "interface" && a?.kind === "word" && a.text === s && a.line === r.line && i?.kind === "punct" && i.text === "{";
}
function ee(e, n) {
    let s = 0;
    for(let r = n; r < e.length; r += 1){
        let a = e[r];
        if (!(a?.kind === "punct" && (a.text === "{" || a.text === "}"))) {
            continue;
        }
        s += a.text === "{" ? 1 : -1;
        if (s === 0) {
            return r;
        }
    }
    return e.length;
}
function oe(e, n) {
    let s = [];
    let r = ee(e, n);
    let a = (p, ...m)=>e[p]?.kind === "punct" && m.includes(e[p].text);
    let i = 0;
    let c = true;
    for(let p = n + 1; p < r; p += 1){
        let m = a(p, "{", "(", "[");
        let d = a(p, "}", ")", "]");
        let k = i === 0 && a(p, ";", ",");
        let h = (e[p - 1]?.line ?? 0) < (e[p]?.line ?? 0);
        let b = e[p]?.text === "readonly" && e[p + 1]?.kind !== "punct" ? p + 1 : p;
        let S = e[b];
        let C = i === 0 && (c || h) && S !== undefined && S.kind !== "punct" && a(b + 1, ":", "?", "(", "<");
        i += m ? 1 : d ? -1 : 0;
        c = k;
        if (C) {
            s.push(S.text);
        }
    }
    return s;
}
function We(e, blocks) {
    let s = new Set;
    for (let { start, end } of blocks){
        for(let i = start; i < end; i += 1){
            if (!fe(e, i, "EngineInterface")) {
                continue;
            }
            let c = i + 2;
            for (let p of oe(e, c)){
                s.add(p);
            }
        }
    }
    return [
        ...s
    ];
}
const Ke = (e)=>e.split(/\r\n|[\n\r\u2028\u2029]/).flatMap((n, s)=>{
        if (/^\s*(?:\*\s*)?\/\/\s*(?:\u2500\u2500 from plugin |Skipped:)/.test(n) || /^\s*(?:\/\/\/?|\/?\*)\s*@ts-/i.test(n)) {
            return [
                `line ${s + 1}: a line that would read as the roll-up's framing or a compiler pragma once copied; a contract carries neither`
            ];
        }
        return [];
    });
function Ge(e) {
    let n = [];
    let s = "reaches outside the file; the contract must be self-contained (no " + "import, export … from, require or reference)";
    let r = 0;
    for (let [a, i] of e.entries()){
        let c = e[a + 1];
        let p = e[a + 2];
        let m = (f)=>i.kind === "word" && i.text === f;
        let d = c?.kind === "punct" && c.text === "(" && p?.kind === "string";
        let k = c?.kind === "string" || c?.kind === "word" || c?.kind === "punct" && (c.text === "{" || c.text === "*") || d;
        let h = i.line !== r;
        let w = i.kind === "reference";
        let b = m("import") && k;
        let S = m("from") && h && c?.kind === "string";
        let C = m("require") && h && d;
        let R = w ? "a triple-slash reference" : b ? "`import`" : S ? `\`from '${c.text}'\`` : C ? `\`require('${p.text}')\`` : undefined;
        if (R === undefined) {
            continue;
        }
        r = i.line;
        n.push(`line ${i.line}: ${R} ${s}`);
    }
    return n;
}
const Ye = /[\p{Cc}\p{Cf}\p{Cs}\p{Default_Ignorable_Code_Point}\u2028\u2029]/u;
const qe = (e)=>e.split(`
`).flatMap((n, s)=>{
        if (Ye.test(n.replace(/[\t\r]/g, ""))) {
            return [
                `line ${s + 1}: an invisible or reordering character (control, bidi, zero-width, line separator); a contract holds none`
            ];
        }
        return [];
    });
function Ze(e) {
    try {
        OFn("contract.d.ts", e);
        return;
    } catch (error) {
        return `does not parse as TypeScript: ${l(error)}`;
    }
}
function Je(e, blocks) {
    let s = new Map;
    let r = (a, i)=>e[a]?.kind === "punct" && e[a].text === i;
    for (let { start, end } of blocks){
        for(let c = start; c < end; c += 1){
            if (!fe(e, c, "PluginState")) {
                continue;
            }
            let p = c + 2;
            let m = ee(e, p);
            let d = new Set(oe(e, p));
            let k = 0;
            for(let h = p + 1; h < m; h += 1){
                let w = e[h];
                if (k === 0 && w !== undefined && w.kind !== "punct" && d.has(w.text) && r(h + 1, ":") && r(h + 2, "{")) {
                    let R = s.get(w.text) ?? new Set;
                    for (let f of oe(e, h + 2)){
                        R.add(f);
                    }
                    s.set(w.text, R);
                }
                let S = r(h, "{") || r(h, "(") || r(h, "[");
                let C = r(h, "}") || r(h, ")") || r(h, "]");
                k += Number(S) - Number(C);
            }
        }
    }
    return [
        ...s
    ].map(([plugin, i])=>({
            plugin,
            keys: [
                ...i
            ]
        }));
}
function Xe(e) {
    let n = OFn("contract.ts", e).replace(/^\s*export\s*\{\s*\};?\s*$/m, "").trim();
    let s = Tr(n);
    if (n === "") {
        return [];
    }
    return [
        `the contract holds code that would run (\`${s}\`); a contract is types only`
    ];
}
const Qe = (e)=>e.flatMap((n, s)=>{
        let r = e[s - 1];
        let a = A(n, "word", "class", "const", "enum", "function", "let", "var");
        let i = r === undefined || r.line < n.line || A(r, "punct", ";", "{", "}") || A(r, "word", "abstract", "async", "declare", "default", "export");
        let c = A(e[s + 1], "punct", ":", "?", "(", "<");
        if (a && i && !c) {
            return [
                `line ${n.line}: \`${n.text}\` declares something that runs; a contract holds types only`
            ];
        }
        return [];
    });
const et = {
    "/": "a `/` outside a comment or string (a regular expression or arithmetic)",
    "\\": "a `\\` outside a string",
    "`": "a template literal that never closes",
    "'": "a string that never closes on its line",
    '"': "a string that never closes on its line",
    "/*": "a comment that never closes",
    "@ts-": "a `@ts-` compiler pragma in a comment",
    framing: "a comment that imitates the roll-up's banner or trailer",
    other: "a character outside plain ASCII (or a control character) in code"
};
const tt = (e)=>e.filter((n)=>n.kind === "stray").map((n)=>`${`line ${n.line}: ` + (et[n.text] ?? `\`${n.text}\``)}: a type contract never holds one, so the check refuses it rather than read past it`);
const ae = "claude-code";
function nt(e, n) {
    let [s, r, a] = re(e, n);
    let [, , i] = re(e, n + 1);
    let c = A(s, "word", "declare") && A(r, "word", "module") && a?.kind === "string" && s?.line === r?.line && r?.line === a.line && A(i, "punct", "{");
    let p = c && a.text !== ae;
    let m = A(s, "word", "declare") && !c;
    let d = A(s, "word", "export") && !A(r, "word", "type", "interface");
    let k = A(s, "word", "abstract", "async", "default", "module", "namespace");
    let h = A(s, "word", "type", "interface") && !A(e[n - 1], "word", "export", "import");
    if (p) {
        return `augments module '${a.text}'; the contract may only augment '${ae}'`;
    }
    if (m) {
        return `\`declare\` at the top level opens only \`declare module '${ae}' { \u2026 }\`, its three words on one line`;
    }
    if (d) {
        return "`export` at the top level is followed by `type` or `interface`: a contract exports types and nothing else";
    }
    if (k) {
        return `\`${s?.text}\` at the top level: a contract holds type exports and \`declare module '${ae}'\` blocks only`;
    }
    if (h) {
        return `a top-level \`${s?.text}\` without \`export\` would be global in a dependent's program; export it`;
    }
}
function rt(e) {
    let n = [];
    let blocks = [];
    let r = 0;
    let a = 0;
    while(a < e.length){
        let [i, c, p] = re(e, a);
        let d = r === 0 && i?.kind === "word" ? nt(e, a) : undefined;
        let k = d === undefined || d.startsWith("augments");
        let h = r === 0 && k && A(i, "word", "declare") && A(c, "word", "module") && p?.kind === "string";
        let w = a + 2;
        r += Fe(i);
        if (d !== undefined) {
            n.push(`line ${i?.line}: ${d}`);
        }
        if (!h) {
            a += 1;
            continue;
        }
        let b = ee(e, w + 1);
        if (b === e.length) {
            n.push(`line ${i?.line}: \`declare module\` never closes: the text does not lex as a type contract, so the check refuses it`);
        }
        blocks.push({
            start: w + 2,
            end: b
        });
        a = b + 1;
    }
    return {
        problems: n,
        blocks
    };
}
function ot(text) {
    let n = Ze(text);
    if (n !== undefined) {
        return {
            problems: [
                n
            ],
            nouns: [],
            state: []
        };
    }
    let s = He(text);
    let r = s.filter((c)=>c.kind !== "reference");
    let { problems, blocks } = rt(r);
    return {
        problems: [
            ...qe(text),
            ...tt(s),
            ...Ke(text),
            ...Ge(s),
            ...problems,
            ...Qe(r),
            ...Xe(text),
            ...Ue(r)
        ],
        nouns: We(r, blocks),
        state: Je(r, blocks)
    };
}
function at(e, n, s) {
    let r = v(s);
    let a = kgo(`${e}: ${n}`, l(s));
    let i = a.includes("resolves outside the plugin's folder");
    if (r !== undefined) {
        return `not readable (${r})`;
    }
    if (i) {
        return "resolves outside the plugin's folder";
    }
    return a.replaceAll(n, ".");
}
const ie = (...e)=>({
        kind: "refused",
        problems: e.map(Nr)
    });
async function ve(e, n, s) {
    let r = resolve(n, e);
    let a = relative(n, r);
    if (a.startsWith("..") || isAbsolute(a)) {
        return ie(`${e} leaves the plugin's folder`);
    }
    let c = (S)=>ie(`${e}: ${at(s, r, S)}`);
    let p = await WYe(r, n, s).then((S)=>S, c);
    if ("kind" in p) {
        return p;
    }
    if (p.size > Cvt) {
        return ie(`${e} is over ${Cvt} bytes and was not read`);
    }
    let text = await $sr(p.real).then((S)=>S, c);
    if (typeof text !== "string") {
        return text;
    }
    let { problems, nouns, state } = ot(text);
    if (problems.length === 0) {
        return {
            kind: "read",
            text,
            nouns,
            state
        };
    }
    return ie(...problems);
}
function yn({ names, owner, declared, others }) {
    let a = new Map;
    for (let { plugin, keys } of [
        ...declared,
        ...others ?? []
    ]){
        let d = a.get(plugin) ?? new Set;
        keys.forEach((k)=>d.add(k));
        a.set(plugin, d);
    }
    let i = [];
    let c = new Set;
    for (let { plugin, key } of names.writes){
        if (plugin !== owner) {
            i.push(`$.state.set refers to ${clt({
                plugin,
                key
            })}, which ${plugin} owns: only a value's owner writes it (to change what is written, hook ${plugin}'s state.set and rewrite e.value)`);
        }
    }
    for (let { plugin, key } of [
        ...names.reads,
        ...names.writes
    ]){
        let d = plugin === owner;
        let k = d || others !== undefined;
        let h = clt({
            plugin,
            key
        });
        if (!k) {
            c.add(h);
            continue;
        }
        let w = a.get(plugin)?.has(key) === true;
        let b = d ? "the manifest's types contract" : "no enabled plugin's contract";
        let S = d ? `${h} is not declared: ${b} must name it in interface PluginState { ${plugin}: { ${key}: ... } }` : `${h} is not declared: ${b} names it in PluginState`;
        if (!w && !i.includes(S)) {
            i.push(S);
        }
    }
    return {
        problems: i,
        unchecked: [
            ...c
        ]
    };
}
const $e = [
    "monitors",
    "themes"
];
const bn = [
    {
        key: "commands",
        recordPathProperty: "source"
    },
    {
        key: "hooks",
        bareStringIndexed: true,
        jsonFile: true
    },
    {
        key: "agents",
        bareStringIndexed: true
    },
    {
        key: "skills",
        bareStringIndexed: true
    },
    {
        key: "outputStyles"
    },
    {
        key: "themes"
    },
    {
        key: "monitors",
        jsonFile: true
    },
    {
        key: "lspServers",
        jsonFile: true
    },
    {
        key: "workflows",
        bareStringIndexed: true
    },
    {
        key: "types",
        bareStringOnly: true
    },
    {
        key: "mcpServers",
        jsonFile: true,
        acceptsUrl: true,
        missingConsequence: (e)=>{
            if (e.endsWith(".json")) {
                return "The plugin loader skips a missing MCP servers file without reporting it, so none of its servers will load.";
            }
        }
    }
];
function lt(e) {
    let n = L(e.experimental) ? e.experimental : undefined;
    let s = [];
    for (let spec of bn){
        let a = e[spec.key];
        let i = spec.key;
        let c = n !== undefined && $e.includes(spec.key) && Object.hasOwn(n, spec.key) ? n[spec.key] : undefined;
        if (c != null) {
            a = c;
            i = `experimental.${spec.key}`;
        }
        let p = [];
        if (spec.bareStringOnly) {
            p.push([
                i,
                a
            ]);
        } else if (Array.isArray(a)) {
            for (let [m, d] of a.entries()){
                p.push([
                    `${i}[${m}]`,
                    d
                ]);
            }
        } else if (!L(a)) {
            p.push([
                spec.bareStringIndexed ? `${i}[0]` : i,
                a
            ]);
        } else if (spec.recordPathProperty !== undefined) {
            for (let [m, d] of Object.entries(a)){
                if (L(d)) {
                    p.push([
                        `${i}.${m}.${spec.recordPathProperty}`,
                        d[spec.recordPathProperty]
                    ]);
                }
            }
        }
        for (let [field, d] of p){
            if (typeof d === "string" && !(spec.acceptsUrl && /^[a-z][a-z0-9+.-]*:\/\//i.test(d))) {
                s.push({
                    spec,
                    field,
                    relPath: d
                });
            }
        }
    }
    return s;
}
const ct = new Set([
    "icon",
    "screenshots",
    "classification",
    "privacyPolicyUrl",
    "privacy_policy",
    "privacyPolicy",
    "supportUrl",
    "support",
    "bugs",
    "termsOfServiceUrl",
    "terms_of_service",
    "documentationUrl",
    "docs"
]);
const vn = [
    "CLAUDE_PLUGIN_ROOT",
    "CLAUDE_PLUGIN_DATA",
    "CLAUDE_PROJECT_DIR"
];
function pt(e) {
    let n = [];
    for (let [event, r] of Object.entries(e)){
        for (let a of r ?? []){
            for (let i of a.hooks){
                if (i.type !== "command" || i.args !== undefined || i.shell === "powershell") {
                    continue;
                }
                let placeholders = $n(i.command);
                if (placeholders.length > 0) {
                    n.push({
                        event,
                        command: i.command,
                        placeholders
                    });
                }
            }
        }
    }
    return n;
}
function $n(command) {
    let n = new Set;
    let s = false;
    let r = false;
    for(let a = 0; a < command.length; a++){
        let i = command[a];
        if (!s && i === "\\") {
            a++;
            continue;
        }
        if (i === "'" && !r) {
            s = !s;
            continue;
        }
        if (i === '"' && !s) {
            r = !r;
            continue;
        }
        if (i !== "$" || s || r) {
            continue;
        }
        for (let c of vn){
            let p = command.startsWith(`{${c}}`, a + 1);
            let m = command.startsWith(c, a + 1) && !/[A-Za-z0-9_]/.test(command.charAt(a + 1 + c.length));
            if (p || m) {
                n.add(`\${${c}}`);
                break;
            }
        }
    }
    return [
        ...n
    ];
}
const xe = (e)=>{
    if (e.endsWith(sep)) {
        return e.slice(0, -sep.length);
    }
    return e;
};
const pBt = (e, n)=>xe(resolve(e)) === xe(resolve(n));
function he({ source }, n, s) {
    return typeof source === "string" && pBt(resolve(n, source), s);
}
function p8n(e, n, s) {
    if (typeof e.source === "string") {
        return he(e, n, s.root);
    }
    return e.name === s.name;
}
async function f8n(e) {
    try {
        let n = bnn().safeParse(X(Io(await readFile(e, {
            encoding: "utf-8"
        }))));
        if (n.success) {
            return n.data;
        }
        return undefined;
    } catch  {
        return;
    }
}
const Nn = new Set([
    "category",
    "source",
    "tags",
    "strict",
    "id",
    "relevance",
    "headers",
    "headersHelper"
]);
const yt = new Map([
    [
        "publisher",
        "a VS Code/Cursor extension manifest"
    ],
    [
        "engines",
        "a VS Code/Cursor extension manifest"
    ],
    [
        "categories",
        "a VS Code/Cursor extension manifest"
    ],
    [
        "icon",
        "a VS Code/Cursor extension manifest"
    ],
    [
        "contributes",
        "a VS Code/Cursor extension manifest"
    ],
    [
        "activationEvents",
        "a VS Code/Cursor extension manifest"
    ],
    [
        "preview",
        "a VS Code/Cursor extension manifest"
    ],
    [
        "main",
        "an npm package.json"
    ],
    [
        "type",
        "an npm package.json"
    ],
    [
        "files",
        "an npm package.json"
    ],
    [
        "bin",
        "an npm package.json"
    ],
    [
        "scripts",
        "an npm package.json"
    ],
    [
        "private",
        "an npm package.json"
    ],
    [
        "bugs",
        "an npm package.json"
    ],
    [
        "contributors",
        "an npm package.json"
    ],
    [
        "dxt_version",
        "an MCPB/DXT manifest"
    ],
    [
        "mcpb_version",
        "an MCPB/DXT manifest"
    ],
    [
        "user_config",
        "an MCPB/DXT manifest"
    ],
    [
        "compatibility",
        "an MCPB/DXT manifest"
    ],
    [
        "server",
        "an MCP server manifest"
    ],
    [
        "tools",
        "an MCP server manifest"
    ],
    [
        "prompts",
        "an MCP server manifest"
    ],
    [
        "resources",
        "an MCP server manifest"
    ],
    [
        "logo",
        "manifests across many tools"
    ],
    [
        "readme",
        "manifests across many tools"
    ],
    [
        "changelog",
        "manifests across many tools"
    ],
    [
        "support",
        "manifests across many tools"
    ],
    [
        "privacy_policy",
        "manifests across many tools"
    ],
    [
        "privacy_policies",
        "manifests across many tools"
    ],
    [
        "terms_of_service",
        "manifests across many tools"
    ],
    [
        "_comment",
        "manifests across many tools"
    ],
    [
        "$id",
        "a JSON Schema document"
    ],
    [
        "$comment",
        "a JSON Schema document"
    ]
]);
const On = new Map([
    [
        "user_config",
        "userConfig"
    ]
]);
const kt = new Set([
    "themes",
    "monitors",
    "outputStyles",
    "evals",
    "syntaxHighlighting"
]);
const Ln = new Set(J9r.map(uS));
function Mjo(e, n) {
    let noErrors = e.every((a)=>a.success);
    let hasWarnings = e.some((a)=>a.warnings.length > 0);
    return {
        noErrors,
        hasWarnings,
        allSuccess: n.strict ? noErrors && !hasWarnings : noErrors
    };
}
function Y(e) {
    if (e === null) {
        return "null";
    }
    if (Array.isArray(e)) {
        return "array";
    }
    return typeof e;
}
function _n(e) {
    let n = g.basename(e);
    let s = g.basename(g.dirname(e));
    if (n === "plugin.json") {
        return "plugin";
    }
    if (n === "marketplace.json") {
        return "marketplace";
    }
    if (s === ".claude-plugin") {
        return "plugin";
    }
    return "unknown";
}
function ce(error) {
    return error.issues.map((n)=>({
            path: n.path.join(".") || "root",
            message: n.message,
            code: n.code
        }));
}
function In(e, n) {
    if (yt.has(e)) {
        return;
    }
    let s = e.length <= 3 ? 1 : 2;
    let r = e.toLowerCase();
    let a;
    let i = s + 1;
    for (let c of n){
        if (Math.abs(c.length - e.length) > s) {
            continue;
        }
        if (c.toLowerCase() === r) {
            return c;
        }
        let p = iZ(e, c, s);
        if (p < i) {
            i = p;
            a = c;
        }
    }
    return a;
}
function Fn(e, n, s) {
    if (s?.has(e)) {
        return `${`Field '${e}' belongs in the marketplace entry (marketplace.json), `}not plugin.json. It's harmless here but unused — Claude Code ignores it at load time.`;
    }
    let r = In(e, n);
    if (r) {
        return `Unknown field '${e}' \u2014 did you mean '${r}'? Claude Code ignores unrecognized fields at load time, so this field has no effect.`;
    }
    let a = On.get(e);
    if (a && n.has(a)) {
        return `${`Field '${e}' is the cross-tool spelling of Claude Code's '${a}'. Rename it to '${a}' for Claude Code to read it (the option `}shapes differ slightly — re-run validate after renaming to check). As-is, Claude Code ignores it at load time.`;
    }
    let i = yt.get(e);
    if (i) {
        return `Unknown field '${e}' (commonly seen in ${i}). Claude Code ignores unrecognized fields at load time, so it's safe to keep.`;
    }
    return `Unknown field '${e}'. Claude Code ignores it at load time.`;
}
function J(e, n, s, r, a, i) {
    for (let c of Object.keys(e)){
        if (n.has(c) || i?.has(c)) {
            continue;
        }
        r.push({
            path: s ? `${s}.${c}` : c,
            message: Fn(c, n, a)
        });
    }
}
function be(e) {
    let n = e.replace(/^[a-zA-Z]:/, "");
    return my(n) || UBe(n);
}
function Ce(e, n, s, r) {
    if (be(e)) {
        s.push({
            path: n,
            message: r ? `Path contains "..": ${e}. ${r}` : `Path contains ".." which could be a path traversal attempt: ${e}`
        });
    }
}
function Dn(e) {
    let n = e.replace(/^(\.\.\/)+/, "");
    return `Plugin source paths are resolved relative to the marketplace root (the directory containing .claude-plugin/), not relative to marketplace.json. Use "${n !== e ? `./${n}` : "./plugins/my-plugin"}" instead of "${e}".`;
}
async function fBt(e, n = {
    kind: "alone"
}) {
    return se(await zn(e, n));
}
async function zn(e, n) {
    let s = g.resolve(e);
    let r;
    try {
        r = await readFile(s, {
            encoding: "utf-8"
        });
    } catch (error) {
        let i = v(error);
        let c;
        if (i === "ENOENT") {
            c = `File not found: ${s}`;
        } else if (i === "EISDIR") {
            c = `Path is not a file: ${s}`;
        } else {
            c = `Failed to read file: ${l(error)}`;
        }
        return {
            success: false,
            errors: [
                {
                    path: "file",
                    message: c,
                    code: i
                }
            ],
            warnings: [],
            filePath: s,
            fileType: "plugin"
        };
    }
    return wt(s, r, n);
}
async function wt(e, n, s) {
    let r = [];
    let a = [];
    let i = [];
    let c;
    try {
        c = X(Io(n));
    } catch (error) {
        return {
            success: false,
            errors: [
                {
                    path: "json",
                    message: `Invalid JSON syntax: ${l(error)}`
                }
            ],
            warnings: [],
            filePath: e,
            fileType: "plugin"
        };
    }
    let p = Iae(c, "plugin-json", {
        pluginName: g.basename(g.dirname(g.dirname(e))),
        manifestPath: e
    });
    if (!p.ok) {
        r.push(...p.errors.map((d)=>({
                ...d,
                path: d.path || "root"
            })));
    } else {
        a.push(...p.hookNotes.map((d)=>({
                path: "hooks",
                message: `${d} at runtime`
            })));
    }
    if (c && typeof c === "object") {
        let d = p.rawCandidate ?? c;
        let k = g.dirname(e);
        let h = g.basename(k) === ".claude-plugin" ? g.dirname(k) : k;
        let w = async (relPath, field, C = "The runtime loader will report this as a load failure.")=>{
            Ce(relPath, field, r);
            if (be(relPath) || g.isAbsolute(relPath) || /^[a-zA-Z]:/.test(relPath)) {
                return;
            }
            try {
                return await stat(g.resolve(h, relPath));
            } catch (error) {
                let f = v(error);
                r.push({
                    path: field,
                    message: `Path not found: ${relPath}${f && f !== "ENOENT" ? ` (${f})` : ""}. ${C}`
                });
                return;
            }
        };
        for (let { spec, field, relPath } of lt(d)){
            let R = await w(relPath, field, spec.missingConsequence?.(relPath));
            if (R === undefined) {
                continue;
            }
            if (spec.key === "skills" && !R.isDirectory()) {
                let f = g.dirname(relPath);
                let x = g.basename(relPath).toLowerCase() === "skill.md" ? f === "." ? " — point to the plugin root '.' instead" : ` \u2014 point to the parent directory '${f}' instead` : "";
                r.push({
                    path: field,
                    message: `Path is a file; skills entries must be directories containing SKILL.md${x}: ${relPath}`
                });
            }
            if (spec.jsonFile && relPath.endsWith(".json") && R.isDirectory()) {
                r.push({
                    path: field,
                    message: `Path is a directory; ${spec.key} must point to a JSON file: ${relPath}`
                });
            }
            if (spec.key === "types") {
                let f = await ve(relPath, h, g.basename(h));
                if (f.kind === "refused") {
                    r.push(...f.problems.map((x)=>({
                            path: field,
                            message: x
                        })));
                } else {
                    i.push(`types ${relPath} declares on $: ` + (f.nouns.length > 0 ? f.nouns.map((x)=>`$.${x}`).join(", ") : "nothing (no EngineInterface member)"));
                    if (f.state.length > 0) {
                        i.push(`types ${relPath} declares state: ` + f.state.flatMap(({ plugin, keys })=>keys.map((key)=>clt({
                                    plugin,
                                    key
                                }))).join(", "));
                    }
                }
            }
        }
        if (d.mcpServers !== undefined) {
            let b = Array.isArray(d.mcpServers) ? d.mcpServers : [
                d.mcpServers
            ];
            let S;
            for (let [C, R] of b.entries()){
                let f = Array.isArray(d.mcpServers) ? `mcpServers[${C}]` : "mcpServers";
                if (L(R)) {
                    S ??= await is(d, e);
                    for (let [x, y] of Object.entries(R)){
                        let E = vt(`${f}.${Fg(x, 64)}`, y, S(x));
                        r.push(...E.errors);
                        a.push(...E.warnings);
                    }
                }
            }
        }
    }
    if (L(c)) {
        let d = c;
        let k = p.rawCandidate ?? d;
        J(k, new Set(Object.keys(G8().shape)), "", a, Nn, ct);
        if ("capabilities" in k) {
            let h = a.findIndex((b)=>b.path === "capabilities");
            let w = {
                path: "capabilities",
                message: "'capabilities' is no longer read: what a hooks module hooks and calls on $ is read from its source and listed under its hooks.json below. Delete the field."
            };
            if (h === -1) {
                a.push(w);
            } else {
                a[h] = w;
            }
        }
        for (let h of $e){
            if (h in d) {
                a.push({
                    path: h,
                    message: `'${h}' is an experimental component; declare it under 'experimental.${h}' instead of at the top level. Top-level still loads for now but will be removed in a future release.`
                });
            }
        }
        if ("experimental" in d) {
            if (L(d.experimental)) {
                let h = d.experimental;
                J(h, kt, "experimental", a);
            } else {
                a.push({
                    path: "experimental",
                    message: `'experimental' must be an object containing component declarations; got ${Y(d.experimental)}. It will be ignored at load time.`
                });
            }
        }
        if ("metadata" in k && !L(k.metadata)) {
            a.push({
                path: "metadata",
                message: `'metadata' must be a free-form object; got ${Y(k.metadata)}. It will be ignored at load time.`
            });
        }
        if ("binaries" in d) {
            if (L(d.binaries)) {
                let h = eHt(d.binaries) ?? {};
                let w = 0;
                for (let [S, C] of Object.entries(d.binaries)){
                    if (iut.test(S) && typeof C === "object" && C !== null && typeof C.sha256 === "string" && wEo.test(C.sha256)) {
                        w++;
                        continue;
                    }
                    if (!Object.hasOwn(h, S)) {
                        a.push({
                            path: `binaries.${S}`,
                            message: `Invalid binaries entry; it will be ignored at install time. The basename must match ${String(iut)} (lowercase, no leading or trailing dot) and the value must be an object with a 64-character lowercase-hex 'sha256'.`
                        });
                    }
                }
                if (w > uAr) {
                    a.push({
                        path: "binaries",
                        message: `${w} valid binaries entries declared, but the install hook processes at most ${uAr}; the rest are dropped entirely.`
                    });
                }
                let b = Object.keys(h).length;
                if (b > ZMt) {
                    a.push({
                        path: "binaries",
                        message: `${b} valid binaries entries declared, but only the first ${ZMt} are fetched at install time; the rest are ignored. Reduce the count or split across plugins.`
                    });
                }
            } else {
                a.push({
                    path: "binaries",
                    message: `'binaries' must be an object mapping basenames to { sha256 }; got ${Y(d.binaries)}. It will be ignored at install time.`
                });
            }
        }
    }
    let p_manifest = p.manifest;
    if (p_manifest) {
        let d = p_manifest;
        if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(d.name)) {
            let w = "Claude Code accepts it, but the";
            if (rHt.test(d.name)) {
                w = "Claude Code refuses a plugin with this name when it is loaded by path (such as --plugin-dir), and cannot install it from a marketplace that lists it under this name. The";
            } else if (!_0(d.name)) {
                w = "Claude Code cannot install it from a marketplace that lists it under this name, and the";
            }
            a.push({
                path: "name",
                message: `Plugin name "${d.name}" is not kebab-case. ${w} Claude.ai marketplace sync requires kebab-case (lowercase letters, digits, and hyphens only, e.g., "my-plugin").` + le(d.name)
            });
        }
        let h = s.kind === "alone" || s.kind === "entry" && s.entryName !== d.name ? lWe(d.name) : undefined;
        if (h) {
            (h.severity === "error" ? r : a).push({
                path: "name",
                message: s.kind === "alone" ? `${h.message} ${Hjo}` : h.message
            });
        }
        if (!d.version) {
            a.push({
                path: "version",
                message: 'No version specified. Consider adding a version following semver (e.g., "1.0.0")'
            });
        }
        if (!d.description) {
            a.push({
                path: "description",
                message: "No description provided. Adding a description helps users understand what your plugin does"
            });
        }
        if (!d.author) {
            a.push({
                path: "author",
                message: "No author information provided. Consider adding author details for plugin attribution"
            });
        }
    }
    return {
        success: r.length === 0,
        errors: r,
        warnings: a,
        filePath: e,
        fileType: "plugin",
        ...i.length > 0 && {
            notes: i
        }
    };
}
const mt = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/;
const Vn = new Set([
    "org",
    "org-provisioned",
    "unknown"
]);
const ke = "UNRECORDABLE_NAME";
const m8n = 'Each part of a plugin id (plugin@marketplace) may use only the letters a-z and A-Z, digits, ".", "_" and "-", and must start with a letter or digit.';
function le(name) {
    if (Fg(name, name.length) === name) {
        return "";
    }
    return " The name holds a character that is not shown here.";
}
async function Te(e) {
    return se(await Hn(e));
}
async function Hn(e) {
    let n = [];
    let s = [];
    let r = g.resolve(e);
    let a;
    try {
        a = await readFile(r, {
            encoding: "utf-8"
        });
    } catch (error) {
        let x = v(error);
        let y;
        if (x === "ENOENT") {
            y = `File not found: ${r}`;
        } else if (x === "EISDIR") {
            y = `Path is not a file: ${r}`;
        } else {
            y = `Failed to read file: ${l(error)}`;
        }
        return {
            success: false,
            errors: [
                {
                    path: "file",
                    message: y,
                    code: x
                }
            ],
            warnings: [],
            filePath: r,
            fileType: "marketplace"
        };
    }
    let i;
    try {
        i = X(Io(a));
    } catch (error) {
        return {
            success: false,
            errors: [
                {
                    path: "json",
                    message: `Invalid JSON syntax: ${l(error)}`
                }
            ],
            warnings: [],
            filePath: r,
            fileType: "marketplace"
        };
    }
    let c = [];
    let p = L(i) && L(i.metadata) ? i.metadata.pluginRoot : undefined;
    let m = kEo(p);
    let d = L(i) && typeof i.name === "string" && gnn(i.name);
    if (i && typeof i === "object") {
        let f = i;
        if (Array.isArray(f.plugins)) {
            c = f.plugins;
            f.plugins.forEach((x, y)=>{
                if (x && typeof x === "object" && "source" in x) {
                    let E = x.source;
                    if (typeof E === "string") {
                        Ce(E, `plugins[${y}].source`, n, Dn(E));
                    }
                    if (SAr(E) && m === undefined) {
                        n.push({
                            path: `plugins[${y}].source`,
                            message: p === undefined ? `Bare source name "${E}" requires metadata.pluginRoot. Use "./relative/path", or set metadata.pluginRoot (e.g. "./plugins") to allow bare names.` : typeof p === "string" ? `Bare source name "${E}" cannot resolve: metadata.pluginRoot ("${p}") must be a relative path inside the marketplace (e.g. "./plugins").` : `Bare source name "${E}" cannot resolve: metadata.pluginRoot must be a relative path inside the marketplace (e.g. "./plugins").`
                        });
                    }
                    if (E && typeof E === "object" && "path" in E && typeof E.path === "string") {
                        Ce(E.path, `plugins[${y}].source.path`, n);
                    }
                }
            });
        }
    }
    let k = bAr().extend({
        topic: o().min(1).max(64).optional(),
        signals: _Ar().extend({
            cli: T(o().min(1).max(64)).max(10).optional(),
            hosts: T(o().min(1).max(128).refine((f)=>/^[a-z0-9.-]+$/.test(f), "must be a lowercase bare hostname (no scheme, port, or path)")).max(20).optional(),
            filesRead: T(o().min(1).max(256).refine((f)=>!f.includes("\\"), 'must use forward slashes (e.g. "**/*.tf"), not backslashes')).max(10).optional(),
            manifestDeps: T(u({
                file: o().min(1).max(256).refine(QWn, "must be a valid regular expression"),
                pattern: o().min(1).max(256).refine(QWn, "must be a valid regular expression")
            })).min(1).max(10).optional(),
            cwd: T(o().min(1).max(256).refine((f)=>!f.includes("\\"), 'must use forward slashes (e.g. "Engine/Source/**"), not backslashes')).max(10).optional()
        }).refine((f)=>(f.cli?.length ?? 0) > 0 || (f.hosts?.length ?? 0) > 0 || (f.filesRead?.length ?? 0) > 0 || (f.manifestDeps?.length ?? 0) > 0 || (f.cwd?.length ?? 0) > 0, "must declare at least one signal (cli, hosts, filesRead, manifestDeps, or cwd)")
    }).optional();
    let h = nzn().extend({
        relevance: pa((f)=>{
            if (L(f)) {
                return f;
            }
        }, k)
    }).refine((f)=>typeof f.source === "string" || f.source.source !== "unsupported", {
        message: "source.source: 'unsupported' is a parse-time placeholder and cannot be authored"
    });
    let b = uUe().extend({
        plugins: T(h),
        renames: ue(o(), o().nullable()).optional()
    }).safeParse(nHt(i));
    if (!b.success) {
        n.push(...ce(b.error));
    }
    if (b.success && b.data.renames) {
        let f = new Set(b.data.plugins.map((x)=>x.name));
        for (let x of Object.keys(b.data.renames)){
            let y = dEt(x, b.data.renames, f);
            if (y?.kind === "unresolved") {
                n.push({
                    path: `renames.${x}`,
                    message: `chain does not resolve (${y.reason}) \u2014 target must be a name in plugins[], a key in renames, or null`
                });
            } else if (y?.kind === "renamed" && !EO().safeParse(`${y.to}@placeholder`).success) {
                n.push({
                    path: `renames.${x}`,
                    message: `target "${y.to}" is not a valid plugin name (PluginIdSchema)`
                });
            }
        }
    }
    if (L(i)) {
        let f = i;
        J(f, new Set(Object.keys(uUe().shape)), "", s);
        if (typeof f.name === "string" && f.name) {
            let y = _0(f.name);
            if (!y) {
                n.push({
                    path: "name",
                    code: ke,
                    message: `Claude Code cannot install plugins from marketplace "${Fg(f.name, 64)}". ${m8n} Change the marketplace's "name".` + le(f.name)
                });
            }
            if (Vn.has(f.name.toLowerCase())) {
                s.push({
                    path: "name",
                    message: `Marketplace name "${f.name}" is reserved in Claude Desktop. Claude Code accepts it, but the Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will reject the whole marketplace.`
                });
            } else if (!mt.test(f.name)) {
                s.push({
                    path: "name",
                    message: `${`Marketplace name "${f.name}" is not accepted by Claude Desktop (letters, digits, ".", "_", "-"; must start alphanumeric; max 128 chars). ` + (y ? "Claude Code accepts it, but the " : "The ")}Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will reject the whole marketplace.${le(f.name)}`
                });
            }
        }
        let x = f.metadata;
        if (L(x)) {
            J(x, new Set(Object.keys(uUe().shape.metadata.unwrap().shape)), "metadata", s);
        }
        if (Array.isArray(f.plugins)) {
            let y = new Set(Object.keys(nzn().shape));
            let E = new Set(Object.keys(bAr().shape));
            let _ = new Set(Object.keys(_Ar().shape));
            f.plugins.forEach((M, N)=>{
                if (!L(M)) {
                    return;
                }
                let j = M;
                J(j, y, `plugins[${N}]`, s);
                if (typeof j.name === "string" && j.name) {
                    let B = _0(j.name);
                    if (!B) {
                        n.push({
                            path: `plugins[${N}].name`,
                            code: ke,
                            message: `Claude Code cannot install plugin "${Fg(j.name, 64)}". ${m8n} Change this entry's "name".` + le(j.name)
                        });
                    }
                    if (!mt.test(j.name)) {
                        s.push({
                            path: `plugins[${N}].name`,
                            message: `${`Plugin name "${j.name}" is not accepted by Claude Desktop (letters, digits, ".", "_", "-"; must start alphanumeric; max 128 chars). ` + (B ? "Claude Code accepts it, but the " : "The ")}Claude Desktop managed marketplace sync (allowedPluginMarketplaces) will drop this entry.${le(j.name)}`
                        });
                    }
                    let Z = d ? undefined : lWe(j.name);
                    if (Z) {
                        (Z.severity === "error" ? n : s).push({
                            path: `plugins[${N}].name`,
                            message: Z.message
                        });
                    }
                }
                let j_experimental = j.experimental;
                if (L(j_experimental)) {
                    J(j_experimental, kt, `plugins[${N}].experimental`, s);
                } else if (j_experimental !== undefined) {
                    s.push({
                        path: `plugins[${N}].experimental`,
                        message: `'experimental' must be an object containing component declarations; got ${Y(j_experimental)}. It will be ignored at load time.`
                    });
                }
                let j_relevance = j.relevance;
                if (L(j_relevance)) {
                    J(j_relevance, E, `plugins[${N}].relevance`, s);
                    let B = j_relevance.signals;
                    if (L(B)) {
                        J(B, _, `plugins[${N}].relevance.signals`, s);
                    }
                } else if (j_relevance !== undefined) {
                    s.push({
                        path: `plugins[${N}].relevance`,
                        message: `'relevance' must be an object containing topic and signals; got ${Y(j_relevance)}. It will be ignored at load time.`
                    });
                }
                let j_metadata = j.metadata;
                if (j_metadata !== undefined && !L(j_metadata)) {
                    s.push({
                        path: `plugins[${N}].metadata`,
                        message: `'metadata' must be a free-form object; got ${Y(j_metadata)}. It will be ignored at load time.`
                    });
                }
            });
        }
    }
    if (b.success) {
        let f = b.data;
        if (!f.plugins || f.plugins.length === 0) {
            s.push({
                path: "plugins",
                message: "Marketplace has no plugins defined"
            });
        }
        if (f.plugins) {
            f.plugins.forEach((x, y)=>{
                if (f.plugins.filter((M)=>M.name === x.name).length > 1) {
                    n.push({
                        path: `plugins[${y}].name`,
                        message: `Duplicate plugin name "${x.name}" found in marketplace`
                    });
                }
                let _ = typeof x.source === "object" && x.source.source === "archive";
                if (_ && HAe(x) && x.strict !== false) {
                    n.push({
                        path: `plugins[${y}].headersHelper`,
                        message: `Plugin "${xh(x.name)}" sets headersHelper but is not "strict": false. An entry with headersHelper must inline its full manifest (strict: false, with commands/agents/hooks/mcpServers declared in the entry) so users can review what it ships before the command runs; Claude Code refuses to run the helper otherwise.`
                    });
                }
                if ((x.headers !== undefined || HAe(x)) && !_) {
                    s.push({
                        path: `plugins[${y}].${HAe(x) ? "headersHelper" : "headers"}`,
                        message: `Plugin "${xh(x.name)}" sets headers/headersHelper, which only apply to "archive" sources; they have no effect on this entry.`
                    });
                } else if (HAe(x) && typeof x.source === "object" && x.source.source === "archive" && !x.source.sha256) {
                    s.push({
                        path: `plugins[${y}].source.sha256`,
                        message: `Plugin "${xh(x.name)}" fetches its archive with a headersHelper but sets no sha256 pin. Consider pinning the digest so the bytes users install are exactly the ones you reviewed (omit it only if you rely on digest-versioned updates).`
                    });
                }
                for (let M of _ ? Object.keys(x.headers ?? {}) : []){
                    if (Aso(M)) {
                        s.push({
                            path: `plugins[${y}].headers.${xh(M)}`,
                            message: `Header "${xh(M)}" is a request-routing/identity header that catalog entries may not set; Claude Code drops it at download time.`
                        });
                    }
                }
            });
        }
        if (!f.description && !f.metadata?.description) {
            s.push({
                path: "description",
                message: "No marketplace description provided. Adding a description helps users understand what this marketplace offers"
            });
        }
    }
    let S = nzn();
    let C = g.dirname(r);
    let R = g.basename(C) === ".claude-plugin" ? g.dirname(C) : C;
    for (let [f, x] of c.entries()){
        let y = S.safeParse(TEo(x, m));
        if (!y.success) {
            continue;
        }
        let E = y.data;
        let _ = E.source;
        if (!Z3e(_) || be(_)) {
            continue;
        }
        let M = g.join(R, _);
        let N = g.join(M, ".claude-plugin", "plugin.json");
        let j = g.relative(R, N);
        let W = await wI(R, g.join(M, ".claude-plugin"));
        if (W === "not-a-directory") {
            n.push({
                path: `plugins[${f}] plugin.json \u2192 file`,
                code: "ENOTDIR",
                message: `A path component of ${j} is not a directory, so the file cannot be read. The entry will fail to load at install time.`
            });
            continue;
        }
        if (W === "refused") {
            s.push({
                path: `plugins[${f}].source`,
                message: `${`Local source "${_}" is or traverses a symlink, so ${j} was not read \u2014 `}validation never follows one. Install dereferences symlinks that stay inside the marketplace, so this entry still loads. Validate the real path separately.`
            });
            continue;
        }
        if (W !== "ok") {
            continue;
        }
        let V;
        try {
            V = await cJ(N);
        } catch (error) {
            n.push({
                path: `plugins[${f}] plugin.json \u2192 file`,
                message: `Failed to read ${j}: ${l(error)}`
            });
            continue;
        }
        if (V.kind === "refused" || V.kind === "too-large") {
            s.push({
                path: `plugins[${f}].source`,
                message: `${j} ${V.kind === "refused" ? "is a symlink or is not a regular file" : `is larger than ${use} bytes`}, so it was not validated. Install reads it anyway. Validate it separately.`
            });
            continue;
        }
        if (V.kind === "absent") {
            continue;
        }
        let q = V.content;
        if (E.version) {
            let D;
            try {
                let K = X(Io(q));
                if (typeof K.version === "string") {
                    D = K.version;
                }
            } catch (error) {
                s.push({
                    path: `plugins[${f}].source`,
                    message: `Could not parse ${g.relative(R, N)} for version cross-check: ${l(error)}`
                });
            }
            if (D && D !== E.version) {
                let K = g.relative(R, N);
                s.push({
                    path: `plugins[${f}].version`,
                    message: `${`Entry declares version "${E.version}" but ${K} says "${D}". `}At install time, plugin.json wins (calculatePluginVersion precedence) — the entry version is silently ignored. ${`Update this entry to "${D}" to match.`}`
                });
            }
        }
        let B = se(await wt(N, q, d ? {
            kind: "anthropic"
        } : {
            kind: "entry",
            entryName: E.name
        }));
        let Z = `plugins[${f}] plugin.json \u2192 `;
        for (let D of B.errors){
            n.push({
                ...D,
                path: Z + D.path
            });
        }
        for (let D of B.warnings){
            s.push({
                ...D,
                path: Z + D.path
            });
        }
    }
    return {
        success: n.length === 0,
        errors: n,
        warnings: s,
        filePath: r,
        fileType: "marketplace"
    };
}
function Fg(e, n) {
    return Nr(_c(gf(e), n));
}
function se(e) {
    return {
        ...e,
        errors: e.errors.map((n)=>({
                ...n,
                path: Fg(n.path, 200),
                message: Fg(n.message, 1000)
            })),
        warnings: e.warnings.map((n)=>({
                path: Fg(n.path, 200),
                message: Fg(n.message, 1000)
            })),
        ...e.notes !== undefined && {
            notes: e.notes.map((n)=>Fg(n, 1000))
        },
        ...e.gatingHooks !== undefined && {
            gatingHooks: e.gatingHooks.map((n)=>({
                    module: Fg(n.module, 200),
                    pattern: Fg(n.pattern, 200),
                    hook: Fg(n.hook, 1000),
                    hasCatch: n.hasCatch
                }))
        }
    };
}
function Bn(e, content, s, r) {
    let a = [];
    let i = [];
    let c = r === "project" && s === "agent";
    let p = Io(content).match(RE);
    if (!p) {
        if (!c) {
            i.push({
                path: "frontmatter",
                message: "No frontmatter block found. Add YAML frontmatter between --- delimiters at the top of the file to set description and other metadata."
            });
        }
        return {
            success: true,
            errors: a,
            warnings: i,
            filePath: e,
            fileType: s
        };
    }
    let m = W9t(p[1] || "");
    if (!m.ok) {
        let w = s !== "agent" ? `At runtime this ${s} loads with empty metadata (all frontmatter fields silently dropped).` : r === "project" ? "At runtime this agent does not load at all — with no frontmatter " + "name it is treated as a co-located reference document and skipped." : "At runtime this agent loads with its name taken from the filename and every other frontmatter field silently dropped.";
        a.push({
            path: "frontmatter",
            message: `YAML frontmatter failed to parse: ${Fg(m.error, 200)}. ` + w
        });
        return {
            success: false,
            errors: a,
            warnings: i,
            filePath: e,
            fileType: s
        };
    }
    let m_value = m.value;
    if (m_value !== null && !L(m_value)) {
        a.push({
            path: "frontmatter",
            message: `Frontmatter must be a YAML mapping (key: value pairs), got ${Array.isArray(m_value) ? "an array" : typeof m_value}.`
        });
        return {
            success: false,
            errors: a,
            warnings: i,
            filePath: e,
            fileType: s
        };
    }
    let k = m_value ?? {};
    if (k.description !== undefined) {
        let w = k.description;
        if (typeof w !== "string" && typeof w !== "number" && typeof w !== "boolean" && w !== null) {
            a.push({
                path: "description",
                message: `description must be a string, got ${Array.isArray(w) ? "array" : typeof w}. At runtime this value is dropped.`
            });
        }
    } else if (!c || typeof k.name === "string") {
        i.push({
            path: "description",
            message: `No description in frontmatter. A description helps users and Claude understand when to use this ${s}.`
        });
    }
    if (k.name !== undefined && k.name !== null && typeof k.name !== "string") {
        a.push({
            path: "name",
            message: `name must be a string, got ${typeof k.name}.`
        });
    }
    let h = k["allowed-tools"];
    if (h !== undefined && h !== null) {
        if (typeof h !== "string" && !Array.isArray(h)) {
            a.push({
                path: "allowed-tools",
                message: `allowed-tools must be a string or array of strings, got ${typeof h}.`
            });
        } else if (Array.isArray(h) && h.some((w)=>typeof w !== "string")) {
            a.push({
                path: "allowed-tools",
                message: "allowed-tools array must contain only strings."
            });
        }
    }
    if (s === "skill" || s === "command") {
        let w = false;
        ((S)=>{
            if (S == null || L(S)) {
                return;
            }
            w = true;
            i.push({
                path: "metadata",
                message: `'metadata' must be a mapping (key: value pairs); got ${Array.isArray(S) ? "array" : typeof S}. It is dropped at load time.`
            });
        })(k.metadata);
    }
    if (s === "skill" || s === "command") {
        let w = k.shell;
        if (w !== undefined && w !== null) {
            if (typeof w !== "string") {
                a.push({
                    path: "shell",
                    message: `shell must be a string, got ${typeof w}.`
                });
            } else {
                let b = w.trim().toLowerCase();
                if (b !== "bash" && b !== "powershell") {
                    a.push({
                        path: "shell",
                        message: `shell must be 'bash' or 'powershell', got '${Fg(w, 64)}'.`
                    });
                }
            }
        }
    }
    return {
        success: a.length === 0,
        errors: a,
        warnings: i,
        filePath: e,
        fileType: s
    };
}
async function Un(e, n) {
    let s = {
        result: {
            success: true,
            errors: [],
            warnings: [],
            filePath: e,
            fileType: "hooks"
        },
        modules: []
    };
    let r = (y)=>({
            result: G(e, "hooks", `${y} \u2014 hooks are read without following symlinks and are capped at ` + `${use} bytes. The plugin loader has neither limit and fails the whole plugin on bad hook config, so validate the real file separately.`),
            modules: []
        });
    let a = g.dirname(e);
    let i = await wI(g.dirname(a), a);
    if (i === "refused") {
        return r("The hooks directory is a symlink and was not read");
    }
    if (i !== "ok") {
        return s;
    }
    let c;
    try {
        c = await cJ(e);
    } catch (error) {
        return {
            result: {
                success: false,
                errors: [
                    {
                        path: "file",
                        message: `Failed to read file: ${l(error)}`
                    }
                ],
                warnings: [],
                filePath: e,
                fileType: "hooks"
            },
            modules: []
        };
    }
    if (c.kind === "refused") {
        return r("hooks.json is not a regular file (a symlink, a FIFO, a directory)");
    }
    if (c.kind === "too-large") {
        return r("hooks.json is past the size cap and was not read");
    }
    if (c.kind === "absent") {
        return s;
    }
    let c_content = c.content;
    let m;
    try {
        m = X(c_content);
    } catch (error) {
        return {
            result: {
                success: false,
                errors: [
                    {
                        path: "json",
                        message: `Invalid JSON syntax: ${l(error)}. At runtime this breaks the entire plugin load.`
                    }
                ],
                warnings: [],
                filePath: e,
                fileType: "hooks"
            },
            modules: []
        };
    }
    if (W8(m, XWn) || Xue(m)) {
        return {
            result: {
                success: false,
                errors: [
                    {
                        path: "hooks",
                        message: `PreToolUse/PermissionRequest is declared at the top level, outside the "hooks" object \u2014 ${Nv}`
                    }
                ],
                warnings: [],
                filePath: e,
                fileType: "hooks"
            },
            modules: []
        };
    }
    let d = m && typeof m === "object" && "hooks" in m ? Que(m.hooks) : {
        notes: [],
        unloadableGuards: []
    };
    let k = d.notes.map((y)=>({
            path: "hooks",
            message: `${y} at runtime`
        }));
    if (d.unloadableGuards.length > 0) {
        return {
            result: {
                success: false,
                errors: d.unloadableGuards.map((y)=>({
                        path: "hooks",
                        message: `${y} \u2014 ${Nv}`
                    })),
                warnings: k,
                filePath: e,
                fileType: "hooks"
            },
            modules: []
        };
    }
    let h = JWn().safeParse(m);
    if (!h.success) {
        return {
            result: {
                success: false,
                errors: ce(h.error),
                warnings: k,
                filePath: e,
                fileType: "hooks"
            },
            modules: []
        };
    }
    let w = [];
    for (let y of pt(h.data.hooks ?? {})){
        w.push({
            path: `hooks.${y.event}`,
            message: `Shell command uses ${y.placeholders.join(", ")} without quotes: ${Fg(y.command, 200)}. If the expanded path contains a space the command can split into several words and fail. Wrap the placeholder in double quotes, or use exec form: {"command": "<executable>", "args": ["\${CLAUDE_PLUGIN_ROOT}/..."]}.`
        });
    }
    let b = [];
    let S = [];
    let gatingHooks = [];
    let modules = h.data.modules ?? [];
    let f = modules.length > 0 ? await Wn(n) : Re;
    let f_nouns = f.nouns;
    for (let module of modules){
        let E = g.resolve(a, module);
        let _ = g.relative(n, E);
        if (_ === ".." || _.startsWith(`..${g.sep}`) || g.resolve(_) === _ || UBe(module)) {
            b.push({
                path: `modules.${module}`,
                message: "The module path leaves the plugin directory"
            });
            continue;
        }
        try {
            let { scan, registrations, renderMatchers, helperCalls, catchReads } = await ZNs(E, n, g.basename(n));
            let q = registrations.length === 0 ? "nothing" : registrations.join(", ");
            let B = [
                ...scan.calls.map((P)=>{
                    let O = helperCalls.get(P);
                    if (O === undefined) {
                        return `$.${P}`;
                    }
                    return `$.${P} (via ${O.join(", ")})`;
                }),
                ...(scan.nextTo ?? []).map((P)=>`next.to:${P}`)
            ];
            let Z = B.length === 0 ? "nothing on $" : B.join(", ");
            let D = catchReads.filter((P)=>P.isOwnCommand);
            let K = [];
            if (D.length > 0) {
                let P = xr();
                try {
                    if (!P.shippedTablesFillFailed) {
                        Pie();
                        Wve();
                        let O = VKt();
                        K.push(...D.filter((U)=>!U.commands.some((de)=>O(de) || Ln.has(uS(de)))));
                    }
                } catch (error) {
                    P.shippedTablesFillFailed = true;
                    t(`plugin validate: shipped command names unread, every command.run hook is listed as a gate: ${l(error)}`, {
                        level: "error"
                    });
                }
            }
            let Oe = catchReads.filter((P)=>!K.includes(P) && hSr(P.pattern));
            S.push(`${module} hooks: ${q}`, ...K.map((P)=>`${module} answers its own command: ${P.registration}`), ...Oe.map(({ registration, hasCatch })=>`${module} gating hook ${hasCatch ? "with" : "without"} .catch: ` + registration), `${module} calls: ${Z}`);
            gatingHooks.push(...Oe.map(({ registration, pattern, hasCatch })=>({
                    module,
                    pattern,
                    hook: registration,
                    hasCatch
                })));
            for (let { registration, matcher } of renderMatchers){
                let U = PSr(matcher);
                if (U !== undefined) {
                    k.push({
                        path: `modules.${module}`,
                        message: `on ${registration}: ${U}`
                    });
                }
            }
            let Tt = scan.hooks.some((P)=>Lde(P, "engine.create"));
            if (f_nouns.length > 0 && !Tt) {
                k.push({
                    path: `modules.${module}`,
                    message: `the manifest's types contract declares ${f_nouns.map((P)=>`$.${P}`).join(", ")} on EngineInterface, but ${module} registers no hook on engine.create, so the plugin never adds ${I(f_nouns.length, "it", "them")} to $`
                });
            }
            if (scan.env !== undefined) {
                let P = (O)=>{
                    if (O.length === 0) {
                        return "nothing";
                    }
                    return O.join(", ");
                };
                S.push(`${module} env writes: ${P(scan.env.writes)}`, `${module} env reads: ${P(scan.env.reads)}`);
            }
            let Le = Igo(scan);
            if (Le !== undefined) {
                S.push(`${module} hooks telemetry for: ${Le}`);
            }
            let _e = Pgo(scan, {
                isBuiltin: false
            });
            if (_e !== undefined) {
                b.push({
                    path: `modules.${module}`,
                    message: _e
                });
            }
            if (scan.state !== undefined) {
                let P = (U)=>{
                    if (U.length === 0) {
                        return "nothing";
                    }
                    return U.map((de)=>clt(de)).join(", ");
                };
                S.push(`${module} state writes: ${P(scan.state.writes)}`, `${module} state reads: ${P(scan.state.reads)}`);
                let O = yn({
                    names: scan.state,
                    owner: f.name ?? g.basename(n),
                    declared: f.state,
                    others: await Kn(n)
                });
                b.push(...O.problems.map((U)=>({
                        path: `modules.${module}`,
                        message: U
                    })));
                if (O.unchecked.length > 0) {
                    S.push(`${module} state of other plugins, not checked (run validate in a session with them enabled): ${O.unchecked.join(", ")}`);
                }
            }
            let Ie = await Q8r(scan.clients, n, g.basename(n));
            if (Ie !== undefined) {
                S.push(`${module} surface modules: ${Ie.map((P)=>P.module).join(", ")}`);
            }
        } catch (error) {
            b.push({
                path: `modules.${module}`,
                message: Fg(l(error), 400)
            });
        }
    }
    return {
        result: {
            success: b.length === 0,
            errors: b,
            warnings: [
                ...k,
                ...w
            ],
            filePath: e,
            fileType: "hooks",
            ...S.length > 0 && {
                notes: S
            },
            ...gatingHooks.length > 0 && {
                gatingHooks
            }
        },
        modules
    };
}
var Re = {
    name: undefined,
    nouns: [],
    state: []
};
async function Wn(e) {
    let n = await te(g.join(e, ".claude-plugin", "plugin.json"));
    let s = n === undefined ? undefined : ne(Io(n));
    let name = typeof s?.name === "string" ? s.name : undefined;
    let a = s?.types;
    if (typeof a !== "string") {
        return {
            ...Re,
            name
        };
    }
    let i = await ve(a, e, g.basename(e));
    if (i.kind === "read") {
        return {
            name,
            nouns: i.nouns,
            state: i.state
        };
    }
    return {
        ...Re,
        name
    };
}
async function Kn(e) {
    let n = st();
    let s = n.pluginLoadCacheOnly ?? n.pluginLoad;
    if (s === undefined) {
        return;
    }
    let r;
    try {
        r = (await s).enabled;
    } catch  {
        return;
    }
    let a = [];
    for (let i of r){
        let c = i.manifest.types;
        if (!(typeof c === "string" && g.resolve(i.path) !== g.resolve(e))) {
            continue;
        }
        let m = await ve(c, i.path, i.name);
        if (m.kind === "read") {
            a.push(...m.state);
        }
    }
    return a;
}
async function Gn(e) {
    let n = [
        g.join(e, "hooks", "hooks.json")
    ];
    if (!await XU(g.join(e, ".claude-plugin"))) {
        return n;
    }
    let s = await te(g.join(e, ".claude-plugin", "plugin.json"));
    let r = s === undefined ? undefined : ne(Io(s))?.hooks;
    let a = Array.isArray(r) ? r : [
        r
    ];
    for (let i of a){
        if (typeof i !== "string") {
            continue;
        }
        let c = g.resolve(e, i);
        let p = g.relative(e, c);
        if (p === ".." || p.startsWith(`..${g.sep}`) || g.resolve(p) === p || UBe(i)) {
            continue;
        }
        if (!n.includes(c)) {
            n.push(c);
        }
    }
    return n;
}
async function Yn(e) {
    let n = [];
    let s = [];
    for (let a of (await Gn(e))){
        let { result, modules } = await Un(a, e);
        if (modules.length > 0) {
            s.push(a);
        }
        if (result.errors.length > 0 || result.warnings.length > 0 || result.notes !== undefined) {
            n.push(result);
        }
    }
    let [, r] = s;
    if (r !== undefined) {
        let a = s.map((i)=>g.relative(e, i));
        n.push({
            success: false,
            errors: [
                {
                    path: "modules",
                    message: `The plugin names one hooks module per plugin, but ${a.join(" and ")} each name one; the loader refuses both`
                }
            ],
            warnings: [],
            filePath: r,
            fileType: "hooks"
        });
    }
    return n;
}
const qn = new Set([
    "stdio",
    "http",
    "streamable-http",
    "sse",
    "ws",
    "sdk",
    "sse-ide",
    "ws-ide",
    "claudeai-proxy"
]);
const Zn = /\$\{user_config\.([^}$]+)\}/g;
const bt = /\$\{[^}$]+\}/;
const Ee = 16;
const Jn = 8192;
const Xn = [
    /\bsk-[A-Za-z0-9_-]{16,}/,
    /\bgh[opsur]_[A-Za-z0-9]{30,}/,
    /\bgithub_pat_[A-Za-z0-9_]{30,}/,
    /\bxox[abeprs]-[A-Za-z0-9-]{10,}/,
    /\bAKIA[0-9A-Z]{16}\b/,
    /\bglpat-[A-Za-z0-9_-]{20,}/,
    /\bAIza[0-9A-Za-z_-]{35}\b/,
    /(?:^|[^A-Za-z0-9_-])eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]+/
];
const Qn = /authorization|api[-_]?key|token|secret|password|credential/i;
const es = /your[-_ ]|replace|example|changeme|placeholder|dummy|redacted|xxx|[<>]|\*\*\*/i;
function ts(e) {
    let n = new Map;
    for (let r of e){
        n.set(r, (n.get(r) ?? 0) + 1);
    }
    let s = 0;
    for (let r of n.values()){
        let a = r / e.length;
        s -= a * Math.log2(a);
    }
    return s;
}
function ns(e, n) {
    if (n.length > Jn || bt.test(n) || es.test(n)) {
        return false;
    }
    let s = n.trim();
    if (Xn.some((a)=>a.test(s))) {
        return true;
    }
    if (!Qn.test(e)) {
        return false;
    }
    let r = s.match(/^(?:Bearer|Basic|Token|Bot)\s+(\S+)$/i)?.[1] ?? s;
    return r.length >= 20 && !/\s/.test(r) && ts(r) >= 3;
}
const ss = /\$\{[^}$]+\}/g;
function ge(url, n) {
    return URL.parse(url.replace(ss, n)) ?? undefined;
}
function rs(url) {
    let n = ge(url, "probe-a.invalid") ?? ge(url, "1");
    let s = ge(url, "probe-b.invalid") ?? ge(url, "2");
    if (!n || !s || n.hostname !== s.hostname) {
        return;
    }
    let r = n.protocol === "http:" ? "http" : n.protocol === "ws:" ? "ws" : undefined;
    if (r === undefined) {
        return;
    }
    let n_hostname = n.hostname;
    if (n_hostname === "localhost" || n_hostname.endsWith(".localhost") || n_hostname === "127.0.0.1" || n_hostname === "[::1]") {
        return;
    }
    let i = r === "http" ? "https" : "wss";
    return `url uses ${r}:// to a non-loopback host \u2014 requests, headers and any ` + `credentials travel in cleartext. Use ${i}://; plugin directories may reject insecure remote server urls.`;
}
function os(e) {
    let n = [];
    let s = [];
    let r;
    if (e.type === undefined || e.type === "stdio") {
        s.push("command");
        r = "env";
        if (Array.isArray(e.args)) {
            for (let [i, c] of e.args.entries()){
                if (typeof c === "string") {
                    n.push({
                        field: `args[${i}]`,
                        value: c
                    });
                }
            }
        }
    } else if (Pe(e.type)) {
        s.push("url", "headersHelper");
        r = "headers";
    }
    for (let field of s){
        let c = e[field];
        if (typeof c === "string") {
            n.push({
                field,
                value: c
            });
        }
    }
    let a = r === undefined ? undefined : e[r];
    if (r !== undefined && L(a)) {
        for (let [i, c] of Object.entries(a)){
            if (typeof c === "string") {
                n.push({
                    field: `${r}.${i}`,
                    value: c
                });
            }
        }
    }
    return n;
}
function Pe(type) {
    return type === "http" || type === "streamable-http" || type === "sse" || type === "ws";
}
function vt(e, n, s) {
    let r = [];
    let a = [];
    if (!L(n)) {
        return {
            errors: r,
            warnings: a
        };
    }
    for (let { field, value } of os(n)){
        let p = new Set([
            ...value.matchAll(Zn)
        ].map((d)=>d[1]));
        if (p.size === 0) {
            continue;
        }
        let m = `${e}.${Fg(field, 64)}`;
        if (field === "headersHelper") {
            r.push({
                path: m,
                message: 'headersHelper references ${user_config.*}. Options are never substituted into headersHelper: the plugin loader refuses the server when the plugin declares any options (the value would be spliced into a shell command), and otherwise the literal text reaches the shell. Read the value inside the helper script instead (for example from a variable set in the server\'s "env" block).'
            });
            continue;
        }
        if (s === null) {
            continue;
        }
        for (let d of p){
            if (d !== undefined && !s.has(d)) {
                r.push({
                    path: m,
                    message: `references \${user_config.${Fg(d, 64)}}, which plugin.json does not declare under "userConfig" (or in this server's "channels" entry), so on a fresh install it cannot resolve: the loader drops the server or passes the literal text through. Declare the option or fix the key.`
                });
            }
        }
    }
    if (Pe(n.type) && typeof n.url === "string") {
        if (n.url.trim() === "") {
            if (typeof n.directory === "string" && n.directory !== "") {
                a.push({
                    path: `${e}.directory`,
                    message: `"directory" is set but url is empty. The key names a directory entry and counts only when this server's url is that entry's url, so plugin directories may reject this plugin. Set url to that entry's url, or remove the "directory" key.`
                });
            }
        } else if (!bt.test(n.url) && !URL.canParse(n.url)) {
            r.push({
                path: `${e}.url`,
                message: 'url is not a valid absolute URL (for example "https://host/path"). The plugin loader marks this server as invalid config and it never connects.'
            });
        } else {
            let i = rs(n.url);
            if (i) {
                a.push({
                    path: `${e}.url`,
                    message: i
                });
            }
        }
    }
    if (Pe(n.type) && L(n.headers)) {
        for (let [i, c] of Object.entries(n.headers)){
            if (typeof c === "string" && ns(i, c)) {
                a.push({
                    path: `${e}.headers.${Fg(i, 64)}`,
                    message: "header value looks like a literal credential. Everything shipped in a plugin is readable by everyone who installs it; reference a sensitive userConfig option (${user_config.KEY}) or an environment variable (${VAR}) instead of committing the value."
                });
            }
        }
    }
    return {
        errors: r,
        warnings: a
    };
}
function as(e, n, error) {
    if (!L(n)) {
        return [
            {
                path: e,
                message: `server config must be an object (got ${Y(n)}). The plugin loader silently drops this server at load.`
            }
        ];
    }
    let n_type = n.type;
    if (n_type === undefined && !("command" in n) && "url" in n) {
        return [
            {
                path: `${e}.type`,
                message: 'server has a "url" but no "type". Remote servers must set "type" to "http" (or "sse" / "ws"); without it the entry is parsed as a stdio server, fails for lacking "command", and is silently dropped at load.'
            }
        ];
    }
    if (n_type !== undefined && (typeof n_type !== "string" || !qn.has(n_type))) {
        let m = typeof n_type === "string" ? `"${Fg(n_type, 32)}"` : Y(n_type);
        return [
            {
                path: `${e}.type`,
                message: `${`unknown server type ${m} \u2014 expected "stdio" (or no type) for a local `}command, or "http", "sse", "ws" for a remote server. The plugin loader silently drops this server at load.`
            }
        ];
    }
    let c = (n_type === undefined || n_type === "stdio" ? Y3e() : n_type === "http" || n_type === "streamable-http" ? Ydt() : n_type === "sse" ? GMt() : n_type === "ws" ? rnn() : undefined)?.safeParse(n);
    if (!c) {
        return [
            {
                path: e,
                message: `is not a valid "${String(n_type)}" server config (${ce(error)[0]?.message ?? "invalid"}). The plugin loader silently drops this server at load.`
            }
        ];
    }
    return (c.success ? ce(error) : ce(c.error)).map((m)=>({
            ...m,
            path: m.path === "root" ? e : `${e}.${m.path}`,
            message: `${m.message}. The plugin loader silently drops this server at load.`
        }));
}
async function ft(e, n, s) {
    let a = (b)=>G(n, "mcp", `${b} \u2014 MCP server files are read without following symlinks and are capped at ` + `${use} bytes. The plugin loader has neither limit, so validate the real file separately.`);
    let i;
    try {
        i = await cJ(e);
    } catch (error) {
        return {
            success: false,
            errors: [
                {
                    path: "file",
                    message: `Failed to read file: ${l(error)}`
                }
            ],
            warnings: [],
            filePath: n,
            fileType: "mcp"
        };
    }
    if (i.kind === "absent") {
        return null;
    }
    if (i.kind === "refused") {
        return a("The file is not a regular file (a symlink, a FIFO, a directory) and was not read");
    }
    if (i.kind === "too-large") {
        return a("The file is past the size cap and was not read");
    }
    let c;
    try {
        c = X(i.content);
    } catch (error) {
        return {
            success: false,
            errors: [
                {
                    path: "json",
                    message: `Invalid JSON syntax: ${i.content.startsWith("\uFEFF") ? "the file starts with a UTF-8 byte-order mark (BOM), which this file (unlike plugin.json) must not have — re-save it as UTF-8 without BOM" : l(error)}. The plugin loader logs this at debug level and loads no servers from the file.`
                }
            ],
            warnings: [],
            filePath: n,
            fileType: "mcp"
        };
    }
    let p = [];
    let m = [];
    let d = L(c) && Boolean(c.mcpServers);
    let k = d && L(c) ? c.mcpServers : c;
    let h = d ? "mcpServers" : "root";
    let w;
    if (L(k)) {
        w = Object.entries(k);
    } else if (Array.isArray(k)) {
        w = k.map((b, S)=>[
                String(S),
                b
            ]);
        if (k.length > 0) {
            m.push({
                path: h,
                message: `is an array; the plugin loader keys its servers by array index ("0", "1", ...), and review tooling has misread this shape as 'no servers'. Use an object keyed by server name.`
            });
        }
    } else {
        return {
            success: false,
            errors: [
                {
                    path: h,
                    message: `must be an object mapping server names to server configs (got ${Y(k)}). No servers load from this file.`
                }
            ],
            warnings: [],
            filePath: n,
            fileType: "mcp"
        };
    }
    for (let [b, S] of w){
        let C = Fg(b, 64);
        let R = d ? `mcpServers.${C}` : C;
        let f = j8().safeParse(S);
        if (!f.success) {
            p.push(...as(R, S, f.error));
            continue;
        }
        let x = Fge(f.data.type);
        if (x !== null) {
            p.push({
                path: `${R}.type`,
                message: x === "host-only" ? `type "${f.data.type}" servers are registered by the host application at runtime and cannot be declared by a plugin. The plugin loader drops this server at load.` : 'type "claudeai-proxy" is used only by claude.ai connectors and cannot be declared ' + 'by a plugin — declare the server with type "http" instead. The plugin loader drops ' + "this server at load."
            });
            continue;
        }
        let y = vt(R, S, s(b));
        p.push(...y.errors);
        m.push(...y.warnings);
    }
    return {
        success: p.length === 0,
        errors: p,
        warnings: m,
        filePath: n,
        fileType: "mcp"
    };
}
function $t(e) {
    let n = new Set(L(e.userConfig) ? Object.keys(e.userConfig) : []);
    let s = new Map;
    if (Array.isArray(e.channels)) {
        for (let r of e.channels){
            if (L(r) && typeof r.server === "string" && !s.has(r.server)) {
                s.set(r.server, new Set(L(r.userConfig) ? Object.keys(r.userConfig) : []));
            }
        }
    }
    return (r)=>{
        let a = s.get(r);
        if (a === undefined) {
            return n;
        }
        return {
            has: (i)=>n.has(i) || a.has(i)
        };
    };
}
async function is(e, n) {
    return $t(e);
}
async function ls(e, n) {
    let s;
    let manifestPath = g.join(e, ".claude-plugin", "plugin.json");
    if (await XU(g.dirname(manifestPath))) {
        let C = await te(manifestPath);
        let R = C === undefined ? undefined : ne(Io(C));
        if (R) {
            s = Iae(R, "plugin-json", {
                pluginName: g.basename(e),
                manifestPath
            }).rawCandidate ?? R;
        }
    }
    let i = s ? $t(s) : undefined;
    let c = (C)=>{
        if (i) {
            return i(C);
        }
        return null;
    };
    let p = [];
    let m = g.join(e, ".mcp.json");
    let d = await ft(m, m, c);
    if (d) {
        p.push(d);
    }
    let k = new Set([
        g.resolve(m)
    ]);
    let h = s?.mcpServers;
    let w = h === undefined ? [] : Array.isArray(h) ? h : [
        h
    ];
    let b = Ee;
    let S = 0;
    for (let C of w){
        if (typeof C !== "string") {
            continue;
        }
        if (!C.startsWith("./") || !C.endsWith(".json") || C.includes("..")) {
            continue;
        }
        let R = g.join(e, C);
        let f = g.resolve(R);
        if (k.has(f)) {
            continue;
        }
        k.add(f);
        if (b <= 0) {
            S++;
            continue;
        }
        b--;
        let x = g.join(e, Fg(C, 128));
        let y = await wI(e, g.dirname(R));
        if (y === "refused") {
            p.push(G(x, "mcp", "A directory on the way to this MCP servers file is a symlink or " + "escapes the plugin, and the file was not read — the plugin loader " + "follows it, so validate the real file separately."));
            continue;
        }
        if (y !== "ok") {
            continue;
        }
        let E = await ft(R, x, c);
        if (E) {
            p.push(E);
        }
    }
    if (S > 0) {
        p.push(G(manifestPath, "mcp", `plugin.json names more than ${Ee} MCP server files; ${S} ${I(S, "file")} past that limit were not examined. The plugin loader reads them all, so validate those files separately.`));
    }
    return p.filter((C)=>C.errors.length > 0 || C.warnings.length > 0);
}
async function Ne(e, n) {
    let s;
    try {
        s = await readdir(e, {
            withFileTypes: true
        });
    } catch (error) {
        let c = v(error);
        if (c === "ENOENT" || c === "ENOTDIR") {
            return {
                files: [],
                skippedSymlinks: 0
            };
        }
        throw error;
    }
    let skippedSymlinks = F(s, (i)=>i.isSymbolicLink());
    if (n) {
        return {
            files: s.filter((i)=>i.isDirectory()).map((i)=>g.join(e, i.name, "SKILL.md")),
            skippedSymlinks
        };
    }
    let files = [];
    for (let i of s){
        let c = g.join(e, i.name);
        if (i.isDirectory()) {
            let p = await Ne(c, false);
            files.push(...p.files);
            skippedSymlinks += p.skippedSymlinks;
        } else if (i.isFile() && i.name.toLowerCase().endsWith(".md")) {
            files.push(c);
        }
    }
    return {
        files,
        skippedSymlinks
    };
}
const g8n = "NO_MANIFEST";
const xt = new Map([
    [
        "skills",
        "skill"
    ],
    [
        "agents",
        "agent"
    ],
    [
        "commands",
        "command"
    ]
]);
function ht(e, n) {
    return e === "project" || n === "skill";
}
async function Ae(e) {
    let n = [
        ...xt
    ].map(([r, a])=>[
            a,
            g.join(e, r)
        ]);
    let s = await Promise.all(n.map(([, r])=>wI(e, r)));
    return {
        dirs: n.filter((r, a)=>s[a] === "ok"),
        refused: n.filter((r, a)=>s[a] === "refused")
    };
}
async function cs(e) {
    if (await wI(e, g.join(e, ".claude-plugin")) === "ok") {
        return true;
    }
    let n = g.join(e, "skills");
    let s = await wI(e, n);
    if (s === "refused") {
        return true;
    }
    if (s !== "ok") {
        return false;
    }
    let { files } = await Ne(n, true);
    for (let a of files){
        if (await lstat(a).then(()=>true, (c)=>{
            let p = v(c);
            return p !== "ENOENT" && p !== "ENOTDIR";
        })) {
            return true;
        }
    }
    return false;
}
function G(e, fileType, s) {
    return {
        success: true,
        errors: [],
        warnings: [
            {
                path: "directory",
                message: s
            }
        ],
        filePath: e,
        fileType
    };
}
async function ye(e, n, s) {
    let results = [];
    let scanned = 0;
    let n_length = n.length;
    for (let [c, p] of n){
        results.push(G(p, c, `This directory is a symlink and nothing in it was read — component ${`directories are read without following symlinks. A session loading this ${s === "plugin" ? "plugin" : "project"} does follow it, so validate the real directory separately.`}`));
    }
    for (let [c, p] of e){
        let { files, skippedSymlinks } = await Ne(p, c === "skill");
        let k = ht(s, c) ? skippedSymlinks : 0;
        let h = 0;
        let w = 0;
        for (let S of files){
            let C = Fg(S, 256);
            let R;
            try {
                R = await cJ(S);
            } catch (error) {
                results.push({
                    success: false,
                    errors: [
                        {
                            path: "file",
                            message: `Failed to read: ${Fg(l(error), 200)}`
                        }
                    ],
                    warnings: [],
                    filePath: C,
                    fileType: c
                });
                continue;
            }
            if (R.kind !== "ok") {
                if (R.kind === "refused" && ht(s, c)) {
                    h++;
                } else if (R.kind === "too-large") {
                    w++;
                }
                continue;
            }
            scanned++;
            let f = Bn(C, R.content, c, s);
            if (f.errors.length > 0 || f.warnings.length > 0) {
                results.push(f);
            }
        }
        n_length += k + h + w;
        let b = `A session loading this ${s === "plugin" ? "plugin" : "directory"} does follow them, so validate the real paths separately.`;
        if (k > 0) {
            results.push(G(p, c, `${k} ${I(k, "entry", "entries")} here ${I(k, "is", "are")} ${I(k, "a symlink", "symlinks")} and ${I(k, "was", "were")} not read \u2014 components are read ` + `without following symlinks. ${b}`));
        }
        if (h > 0) {
            results.push(G(p, c, `${h} ${I(h, "component")} here ${I(h, "was", "were")} not read \u2014 the path is not a ` + `regular file (a symlink, a FIFO, a directory). ${b}`));
        }
        if (w > 0) {
            results.push(G(p, c, `${w} ${I(w, "file")} here ${I(w, "is", "are")} larger than ${use} bytes and ${I(w, "was", "were")} not validated.`));
        }
    }
    return {
        results,
        scanned,
        skipped: n_length
    };
}
async function ps(e) {
    return (await ds(e))?.map(se) ?? null;
}
async function ds(e) {
    let n = xt.get(g.basename(e));
    if (n) {
        let S = g.dirname(e);
        let C;
        if (g.basename(S) === ".claude" && !await XU(S)) {
            C = "The enclosing .claude directory is a symlink.";
        } else if (!await XU(e)) {
            C = "This path is a symlink.";
        }
        if (C) {
            return [
                {
                    success: false,
                    errors: [
                        {
                            path: "directory",
                            message: `${C} Component directories are read without following symlinks, so nothing here was validated. Pass the real directory instead.`
                        }
                    ],
                    warnings: [],
                    filePath: e,
                    fileType: n
                }
            ];
        }
        return (await ye([
            [
                n,
                e
            ]
        ], [], "project")).results;
    }
    let s = g.join(e, ".claude");
    let r = g.basename(e) === ".claude";
    let [a, i] = await Promise.all([
        wI(e, s),
        r ? Promise.resolve(false) : cs(e)
    ]);
    let c = r || i ? await Ae(e) : {
        dirs: [],
        refused: []
    };
    let p = a === "ok" ? await Ae(s) : {
        dirs: [],
        refused: []
    };
    let m = r ? "project" : "plugin";
    let [d, k] = await Promise.all([
        ye(c.dirs, c.refused, m),
        ye(p.dirs, p.refused, "project")
    ]);
    let h = [
        ...d.results,
        ...k.results
    ];
    let w = d.scanned + k.scanned;
    let b = d.skipped + k.skipped;
    if (a === "refused") {
        h.push(G(s, "plugin", "This directory is a symlink and nothing in it was read — .claude is " + "read without following symlinks. A session loading this project does follow it, so validate the real directory separately."));
    }
    if (w > 0 || b > 0 || h.length > 0) {
        return h;
    }
    return null;
}
async function h8n(e) {
    let n = [];
    let s = new Set([
        "claude.md",
        "claude.local.md"
    ]);
    let r = [];
    try {
        r = await readdir(e, {
            withFileTypes: true
        });
    } catch  {}
    for (let i of r){
        if (!i.isFile() || !s.has(i.name.toLowerCase())) {
            continue;
        }
        let p = i.name.toLowerCase() === "claude.local.md" ? "Remove it from the plugin root." : "To ship context with your plugin, use a skill (skills/<name>/SKILL.md) instead.";
        n.push({
            success: true,
            errors: [],
            warnings: [
                {
                    path: "root",
                    message: `${i.name} at the plugin root is not loaded as project context. ${p}`
                }
            ],
            filePath: g.join(e, Fg(i.name, 64)),
            fileType: "plugin"
        });
    }
    n.push(...await ms(e));
    let a = await Ae(e);
    n.push(...(await ye(a.dirs, a.refused, "plugin")).results);
    n.push(...await Yn(e));
    n.push(...await ls(e, r));
    return n.map(se);
}
async function nBr(e, n) {
    let s = se(await us(e));
    if (n?.unrecordableNames !== "warn") {
        return s;
    }
    let r = s.errors.filter((i)=>i.code !== ke);
    let a = s.errors.filter((i)=>i.code === ke).map(({ path, message })=>({
            path,
            message
        }));
    return {
        ...s,
        success: r.length === 0,
        errors: r,
        warnings: [
            ...a,
            ...s.warnings
        ]
    };
}
async function us(e) {
    let n = g.resolve(e);
    let s = null;
    try {
        s = await stat(n);
    } catch (error) {
        if (!z(error)) {
            throw error;
        }
    }
    if (s?.isDirectory()) {
        let a = g.join(n, ".claude-plugin", "marketplace.json");
        let i = await Te(a);
        let c = i.errors[0];
        if (!(c?.path === "file" && (c.code === "ENOENT" || c.code === "ENOTDIR"))) {
            return i;
        }
        let m = g.join(n, ".claude-plugin", "plugin.json");
        let d = await fBt(m);
        let k = d.errors[0]?.code;
        if (k !== "ENOENT" && k !== "ENOTDIR") {
            return d;
        }
        return {
            success: false,
            errors: [
                {
                    path: "directory",
                    code: g8n,
                    message: "No manifest found in directory. Expected .claude-plugin/marketplace.json or .claude-plugin/plugin.json"
                }
            ],
            warnings: [],
            filePath: n,
            fileType: "plugin"
        };
    }
    switch(_n(e)){
        case "plugin":
            return fBt(e);
        case "marketplace":
            return Te(e);
        case "unknown":
            {
                try {
                    let a = await readFile(n, {
                        encoding: "utf-8"
                    });
                    let i = X(Io(a));
                    if (Array.isArray(i.plugins)) {
                        return Te(e);
                    }
                } catch (error) {
                    if (v(error) === "ENOENT") {
                        return {
                            success: false,
                            errors: [
                                {
                                    path: "file",
                                    message: `File not found: ${n}`
                                }
                            ],
                            warnings: [],
                            filePath: n,
                            fileType: "plugin"
                        };
                    }
                }
                return fBt(e);
            }
    }
}
async function aWe(e) {
    let manifest = await nBr(e);
    let n_filePath = manifest.filePath;
    if (manifest.errors.some((d)=>d.code === g8n)) {
        let contents = await ps(n_filePath);
        if (contents) {
            return {
                manifest: null,
                contents,
                resolvedPath: n_filePath
            };
        }
        return {
            manifest,
            contents: [],
            resolvedPath: n_filePath
        };
    }
    let r = g.dirname(n_filePath);
    let a = g.dirname(r);
    if (g.basename(r) !== ".claude-plugin") {
        return {
            manifest,
            contents: [],
            resolvedPath: n_filePath
        };
    }
    if (manifest.fileType === "plugin") {
        let contents = await h8n(a);
        return {
            manifest,
            contents,
            resolvedPath: n_filePath
        };
    }
    if (g.resolve(e) !== a) {
        return {
            manifest,
            contents: [],
            resolvedPath: n_filePath
        };
    }
    let i = await f8n(n_filePath);
    let c = i !== undefined && gnn(i.name) && i.plugins.some((d)=>he(d, a, a));
    let p = await fBt(g.join(r, "plugin.json"), {
        kind: c ? "anthropic" : "alone"
    });
    if (p.errors[0]?.code === "ENOENT") {
        return {
            manifest,
            contents: [],
            resolvedPath: n_filePath
        };
    }
    let m = p.errors.length > 0 || p.warnings.length > 0 || (p.notes?.length ?? 0) > 0;
    return {
        manifest,
        contents: [
            ...m ? [
                p
            ] : [],
            ...await h8n(a)
        ],
        resolvedPath: n_filePath
    };
}
async function te(e) {
    return u$(e).catch(()=>{});
}
function pe(e) {
    if (L(e)) {
        return e;
    }
}
function ne(e) {
    try {
        return pe(X(e));
    } catch  {
        return;
    }
}
function Se(e, n, s) {
    let r = [];
    for (let [a, i] of Object.entries(e)){
        let c = pe(i);
        if (!c || typeof c.command !== "string") {
            continue;
        }
        let m = c.command.match(/^\$\{CLAUDE_PLUGIN_ROOT\}\/bin\/([^/\\]+)$/)?.[1];
        if (m === undefined || n.has(m) || s.has(m)) {
            continue;
        }
        let d = Fg(a, 64);
        let k = Fg(m, 64);
        r.push({
            path: `mcpServers.${d}`,
            message: `${`bin/${k} is not a shipped file, a declared binaries entry, or `}a name derivable from the declared entries — the server will fail to start. Check for a typo against the "binaries" map in plugin.json.`
        });
    }
    return r;
}
async function ms(e) {
    if (!await XU(g.join(e, ".claude-plugin"))) {
        return [];
    }
    let n = g.join(e, ".claude-plugin", "plugin.json");
    let s = await te(n);
    if (s === undefined) {
        return [];
    }
    let r = ne(Io(s));
    let a = eHt(r?.binaries);
    if (!r || !a) {
        return [];
    }
    let i = new Set(Object.keys(a));
    for (let R of bds){
        let f = new Map;
        for (let x of Object.keys(a)){
            let y = Not(x, R);
            if (y !== undefined) {
                f.set(y, (f.get(y) ?? 0) + 1);
            }
        }
        for (let [x, y] of f){
            if (y === 1) {
                i.add(x);
            }
        }
    }
    let c = g.join(e, "bin");
    let p = new Set;
    if (await XU(c)) {
        p = await readdir(c).then((R)=>new Set(R)).catch(()=>new Set);
    }
    let m = [];
    function d(R, f) {
        if (f.length > 0) {
            m.push({
                success: true,
                errors: [],
                warnings: f,
                filePath: R,
                fileType: "plugin"
            });
        }
    }
    let k = g.join(e, ".mcp.json");
    let h = await te(k);
    if (h !== undefined) {
        let R = ne(h);
        if (R) {
            let f = pe(R.mcpServers || R);
            if (f) {
                d(k, Se(f, p, i));
            }
        }
    }
    let r_mcpServers = r.mcpServers;
    let b = r_mcpServers === undefined ? [] : Array.isArray(r_mcpServers) ? r_mcpServers : [
        r_mcpServers
    ];
    let S = [];
    let C = Ee;
    for (let R of b){
        if (typeof R === "string" && C <= 0) {
            continue;
        }
        if (typeof R === "string") {
            C--;
            if (!R.startsWith("./") || be(R)) {
                continue;
            }
            let x = g.join(e, R);
            if (await wI(e, g.dirname(x)) !== "ok") {
                continue;
            }
            let y = await te(x);
            if (y === undefined) {
                continue;
            }
            let E = ne(y);
            if (!E) {
                continue;
            }
            let _ = pe(E.mcpServers || E);
            if (_) {
                d(g.join(e, Fg(R, 128)), Se(_, p, i));
            }
            continue;
        }
        let f = pe(R);
        if (f) {
            S.push(...Se(f, p, i));
        }
    }
    d(n, S);
    return m;
}
export { pBt, p8n, f8n, Mjo, fBt, m8n, Fg, g8n, h8n, nBr, aWe };
