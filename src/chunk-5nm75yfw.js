import { b, kn } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Iyo, Dks, VBn, eFe, Jlt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { extname } from "path";
const S = 50000;
const R = 16000;
const N = 20000;
const H = 8000;
const I = 8000;
const v = 20000;
const D = 20000;
const u = new Map([
    [
        "asciidoc",
        R
    ],
    [
        "gcode",
        N
    ],
    [
        "http",
        H
    ],
    [
        "nestedtext",
        I
    ],
    [
        "sas",
        v
    ],
    [
        "wren",
        D
    ]
]);
const G = Math.min(S, ...u.values());
const E = new Set([
    "abnf",
    "accesslog",
    "ada",
    "angelscript",
    "applescript",
    "arcade",
    "arduino",
    "asciidoc",
    "aspectj",
    "autohotkey",
    "awk",
    "bash",
    "brainfuck",
    "c",
    "cal",
    "clojure",
    "clojure-repl",
    "coffeescript",
    "cos",
    "cpp",
    "crmsh",
    "crystal",
    "csharp",
    "css",
    "dart",
    "delphi",
    "django",
    "dns",
    "dockerfile",
    "dos",
    "dsconfig",
    "dts",
    "dust",
    "elixir",
    "erb",
    "erlang",
    "excel",
    "fsharp",
    "gams",
    "gauss",
    "gcode",
    "go",
    "graphql",
    "groovy",
    "haml",
    "handlebars",
    "haskell",
    "http",
    "ini",
    "java",
    "javascript",
    "jboss-cli",
    "julia",
    "julia-repl",
    "kotlin",
    "latex",
    "leaf",
    "less",
    "livecodeserver",
    "livescript",
    "llvm",
    "markdown",
    "matlab",
    "mipsasm",
    "mojolicious",
    "monkey",
    "moonscript",
    "nestedtext",
    "nginx",
    "nim",
    "nix",
    "node-repl",
    "nsis",
    "objectivec",
    "ocaml",
    "parser3",
    "perl",
    "pgsql",
    "php",
    "php-template",
    "pony",
    "powershell",
    "processing",
    "profile",
    "properties",
    "protobuf",
    "puppet",
    "python",
    "python-repl",
    "qml",
    "r",
    "reasonml",
    "roboconf",
    "routeros",
    "ruby",
    "rust",
    "sas",
    "scala",
    "scheme",
    "scilab",
    "scss",
    "shell",
    "smali",
    "smalltalk",
    "sml",
    "stan",
    "stata",
    "stylus",
    "swift",
    "tap",
    "tcl",
    "tp",
    "twig",
    "typescript",
    "vbnet",
    "vbscript",
    "vbscript-html",
    "verilog",
    "wren",
    "x86asm",
    "xl",
    "xml",
    "xquery",
    "yaml",
    "zephir"
]);
const w = new Set([
    ...u.keys(),
    ...E
]);
const _Yt = 256;
const HRn = 16000000;
const C = /<(?:script|style)(?=\s|>)/iu;
const P = "[`~<";
const d = new Map([
    [
        "markdown",
        [
            P,
            C
        ]
    ]
]);
const k = /\s+|[^\n]+/g;
function W(r, e) {
    let o = 0;
    for (let n of e === undefined ? "" : r){
        o += e?.includes(n) === true ? 1 : 0;
    }
    if (e === undefined) {
        return r.length;
    }
    return o;
}
function x(r, e) {
    let o = 0;
    if (r.length <= _Yt) {
        return o;
    }
    for (let [n] of r.matchAll(k)){
        let s = n.length > _Yt;
        o += s ? W(n, e) * n.length : 0;
    }
    return o;
}
function j(r, e) {
    let o = d.get(e);
    if (o === undefined || o[1].test(r)) {
        return undefined;
    }
    return o[0];
}
function y7r(r, e) {
    if (E.has(e) && r.length > _Yt) {
        return x(r, j(r, e));
    }
    return 0;
}
const _7r = (r, e)=>r.length <= (u.get(e) ?? S) && y7r(r, e) <= HRn;
function z(r) {
    let e = 0;
    for(let o = r.indexOf(`
`); o >= 0; o = r.indexOf(`
`, o + 1)){
        e += 1;
    }
    return e;
}
class h extends Error {
    constructor(){
        super("highlighting this text takes more work than its length allows");
        this.name = "HighlightBoundError";
    }
}
function l(r, e) {
    r.left -= e;
    if (r.left < 0) {
        throw new h;
    }
}
const xr = 32;
const yr = 64;
const _r = 4096;
const Tr = 24;
const wr = 3;
const Ar = 16;
const Z = (r, e)=>class o extends r {
        static isBounded = true;
        held = 0;
        breaks = 0;
        height = 0;
        constructor(n){
            super(n);
            l(e, Ar);
        }
        openNode(n) {
            this.held += 1;
            l(e, 1);
            super.openNode(n);
            this.grownTo(this.stack.length - 1);
        }
        addText(n) {
            let s = z(n);
            this.held += n.length;
            this.breaks += s;
            l(e, n.length + s * (this.stack.length - 1) ** 2);
            super.addText(n);
        }
        __addSublanguage(n, s) {
            if (n instanceof o) {
                let i = this.stack.length + n.height;
                this.held += n.held;
                this.breaks += n.breaks;
                this.grownTo(i);
                l(e, n.breaks * i ** 2);
            }
            super.__addSublanguage(n, s);
        }
        toHTML() {
            l(e, this.held);
            return super.toHTML();
        }
        grownTo(n) {
            this.height = Math.max(this.height, n);
            if (this.height > xr) {
                l(e, Number.POSITIVE_INFINITY);
            }
        }
    };
const U = (r)=>typeof r === "function" && "openNode" in r.prototype && !("isBounded" in r);
const F = (r, e)=>[
        ...[
            ("subLanguage" in e ? e.subLanguage : undefined) ?? []
        ].flat().filter((o)=>typeof o === "string").map((o)=>r.getLanguage(o)),
        ...e.contains ?? [],
        ..."variants" in e ? e.variants ?? [] : [],
        "starts" in e ? e.starts : undefined
    ];
class A extends Error {
    constructor(){
        super("this text is too long, or its lines are, for a grammar");
        this.name = "HighlightLimitError";
    }
}
const J = (code)=>code.length <= G && x(code, undefined) <= HRn;
function b7r(r, e) {
    let o = new Map([
        ...w
    ].flatMap((a)=>{
        let p = r.getLanguage(a);
        if (p === undefined) {
            return [];
        }
        return [
            [
                p,
                a
            ]
        ];
    }));
    let n = new Set;
    let s = w.has(e) ? [] : [
        r.getLanguage(e)
    ];
    let i = e;
    while(s.length > 0){
        let a = s.pop();
        if (typeof a !== "object" || a === null || n.has(a)) {
            continue;
        }
        let g = "subLanguage" in a && Array.isArray(a.subLanguage) && a.subLanguage.length === 0 ? [
            ...o.values()
        ].find((cr)=>!d.has(cr)) ?? o.values().next().value : o.get(a);
        if (g !== undefined && !d.has(g)) {
            return g;
        }
        i = g ?? i;
        n.add(a);
        s.push(...g === undefined ? F(r, a) : []);
    }
    return i;
}
const B = (r)=>({
        "before:highlight": ({ code, language })=>{
            if (!J(code) && !_7r(code, b7r(r, language))) {
                throw new A;
            }
        }
    });
function K(r, e) {
    let o = new Set;
    let n = [
        e
    ];
    let s = 0;
    while(n.length > 0){
        let i = n.pop();
        if (typeof i !== "object" || i === null || o.has(i)) {
            continue;
        }
        o.add(i);
        let a = "subLanguage" in i ? i.subLanguage : undefined;
        let p = Array.isArray(a);
        s = Math.max(s, p ? a.length || Number.POSITIVE_INFINITY : 0);
        n.push(...[
            a ?? []
        ].flat().filter((g)=>typeof g === "string").map((g)=>r.getLanguage(g)), ...i.contains ?? [], ..."variants" in i ? i.variants ?? [] : [], "starts" in i ? i.starts : undefined);
    }
    return s;
}
function X(r, e) {
    let o = new WeakMap;
    let n = 0;
    function s(i) {
        let length = r.listLanguages().length;
        if (i === undefined) {
            return 0;
        }
        if (length !== n) {
            o = new WeakMap;
            n = length;
        }
        let p = o.get(i) ?? K(r, i);
        o.set(i, p);
        return Math.min(p, length, e);
    }
    return (i, a)=>_r + a * (Tr + wr * s(r.getLanguage(i)));
}
const Y = (r, e)=>({
        "before:highlight": (o)=>{
            r.left = e(o.language, o.code.length);
        },
        "after:highlight": ()=>{
            let o = r.left < 0;
            r.left = Number.POSITIVE_INFINITY;
            if (o) {
                throw new h;
            }
        }
    });
function L(r, e) {
    let constructor = r.highlightAuto("", [])._emitter.constructor;
    if ("isBounded" in constructor) {
        return;
    }
    r.addPlugin(B(r));
    if (!U(constructor)) {
        return;
    }
    let n = {
        left: Number.POSITIVE_INFINITY
    };
    r.configure({
        __emitter: Z(constructor, n)
    });
    r.addPlugin(Y(n, X(r, e)));
}
const Rr = (r)=>L(r, yr);
const q = [
    "begin",
    "end",
    "match",
    "illegal"
];
const Q = (r)=>(e)=>{
        let o = r.get(typeof e === "string" ? e : e.source);
        try {
            if (o === undefined) {
                return e;
            }
            return new RegExp(o);
        } catch  {
            return e;
        }
    };
function _(r) {
    if (typeof r === "object" && r !== null && Object.isFrozen(r)) {
        return {
            ...r
        };
    }
    return r;
}
function V(r, e) {
    let o = new Set;
    let n = [
        r
    ];
    let s = Q(e);
    while(n.length > 0){
        let i = n.pop();
        if (!(typeof i === "object" && i !== null) || o.has(i)) {
            continue;
        }
        o.add(i);
        for (let p of q){
            let g = i[p];
            if (g !== undefined && g !== null) {
                i[p] = Array.isArray(g) ? g.map(s) : s(g);
            }
        }
        i.contains &&= i.contains.map(_);
        i.variants &&= i.variants.map(_);
        i.starts &&= _(i.starts);
        n.push(...i.contains ?? [], ...i.variants ?? [], i.starts);
    }
    return r;
}
const Nr = 1000;
const rr = 1000;
const br = 16;
const Hr = 1000;
const Ir = 12;
const vr = 1500;
const Dr = 10000;
const Gr = 16;
const T = (r)=>[
        String.raw`(${r}(decltype\(auto\)|(?:[a-zA-Z_]\w*::)?[a-zA-Z_]\w*` + String.raw`(?:<[^<>]+>)?)[\*&\s]+)+` + String.raw`(?:[a-zA-Z_]\w*::)?[a-zA-Z]\w*\s*\(`,
        String.raw`(?=[a-zA-Z_])` + String.raw`(?:(?=decltype\(auto\))|(?<!${r}[a-zA-Z_]\w*?))` + String.raw`(${r}(decltype\(auto\)|(?:[a-zA-Z_]\w*::)?[a-zA-Z_]\w*` + String.raw`(?:<[^<>]+>)?)[\*&\s]+){1,${Gr}}` + String.raw`(?:[a-zA-Z_]\w*::)?[a-zA-Z]\w*\s*\(`
    ];
const er = [
    T("")
];
const tr = [
    [
        String.raw`[ ]+((?:I|a|is|so|us|to|at|if|in|it|on|` + String.raw`[A-Za-z]+['](d|ve|re|ll|t|s|n)|[A-Za-z]+[-][a-z]+|` + String.raw`[A-Za-z][a-z]{2,})[.]?[:]?([.][ ]|[ ])){3}`,
        String.raw`(?<! )[ ]+((?:I|a|is|so|us|to|at|if|in|it|on|` + String.raw`[A-Za-z]+['](d|ve|re|ll|t|s|n)|[A-Za-z]+[-][a-z]+|` + String.raw`[A-Za-z][a-z]{2,})[.]?[:]?([.][ ]|[ ])){3}`
    ],
    [
        String.raw`[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)`,
        String.raw`(?:(?<! )[ ]+)?(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)`
    ]
];
const M = [
    T("(?!struct)")
];
const or = [
    [
        String.raw`([a-zA-Z]\w*(<[a-zA-Z]\w*(\s*,\s*[a-zA-Z]\w*)*>)?(\[\])?\s+)+` + String.raw`[a-zA-Z]\w*\s*(<[^=]+>\s*)?\(`,
        String.raw`(?=[a-zA-Z])(?<![a-zA-Z]\w*?)` + String.raw`([a-zA-Z]\w*(<[a-zA-Z]\w*(\s*,\s*[a-zA-Z]\w*)*>)?(\[\])?\s+)` + String.raw`{1,${Ir}}[a-zA-Z]\w*\s*` + String.raw`(<[^=]{1,${rr}}?>\s*)?\(`
    ],
    [
        String.raw`[a-zA-Z]\w*\s*(<[^=]+>\s*)?\(`,
        String.raw`[a-zA-Z]\w*\s*` + String.raw`(<[^=]{1,${rr}}?>\s*)?\(`
    ]
];
const nr = [
    `${String.raw`(?:\.|\.\/|\/)?(?:""|"[^"]+"|''|'[^']+'|\[\]|\[[^\]]+\]|` + String.raw`[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`}\`${String.raw`{|}~]+)(?:(\.|\/)(?:""|"[^"]+"|''|'[^']+'|\[\]|\[[^\]]+\]|`}${String.raw`[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`}\`${String.raw`{|}~]+))*`}`,
    `${String.raw`(\[\]|\[[^\]]+\]|[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`}\`${String.raw`{|}~]+)(?==)`}`
].map((r)=>[
        r,
        r.replaceAll(String.raw`[^\]]+\]`, String.raw`[^\]]{1,${Nr}}\]`)
    ]);
const ir = [
    [
        String.raw`(?:[A-Za-z0-9_-]+|"(\\"|[^"])*"|'[^']*')` + String.raw`(\s*\.\s*(?:[A-Za-z0-9_-]+|"(\\"|[^"])*"|'[^']*'))*` + String.raw`(?=\s*=\s*[^#\s])`,
        String.raw`(?:(?<![A-Za-z0-9_-])[A-Za-z0-9_-]+|` + String.raw`(?<!\\)"(\\"|[^"])*"|'[^']*')` + String.raw`(\s*\.\s*(?:[A-Za-z0-9_-]+|"(\\"|[^"])*"|'[^']*'))` + String.raw`{0,${br}}` + String.raw`(?=\s*=\s*[^#\s])`
    ]
];
const sr = [
    [
        "(`{3,})[^`](.|\\n)*?\\1`*[ ]*",
        "(`{3,})[^`][^\\r\\u2028\\u2029]*?\\1`*[ ]*"
    ],
    [
        String.raw`(~{3,})[^~](.|\n)*?\1~*[ ]*`,
        String.raw`(~{3,})[^~][^\r\u2028\u2029]*?\1~*[ ]*`
    ]
];
const ar = [
    [
        String.raw`\[.*?\]\(.*?\)`,
        String.raw`\[(?=(.*?\]\())\1.*?\)`
    ],
    [
        String.raw`\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)`,
        String.raw`\[(?=(.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/)))` + String.raw`\1.*?\)`
    ],
    [
        String.raw`\[.+?\]\([A-Za-z][A-Za-z0-9+.-]*:\/\/.*?\)`,
        String.raw`\[(?=(.+?\]\([A-Za-z][A-Za-z0-9+.-]*:\/\/))\1.*?\)`
    ],
    [
        String.raw`\[.+?\]\([./?&#].*?\)`,
        String.raw`\[(?=(.+?\]\([./?&#]))\1.*?\)`
    ]
];
const pr = [
    String.raw`(?:s|tr|y)(!|\/|\||\?|'|"|#)(?:\\.|[^\\\/])*?\1` + String.raw`(?:\\.|[^\\\/])*?\1[dualxmsipngr]{0,12}`,
    String.raw`(?:s|tr|y)\((?:\\.|[^\\\/])*?\)\(` + String.raw`(?:\\.|[^\\\/])*?\)[dualxmsipngr]{0,12}`,
    String.raw`(?:s|tr|y)\[(?:\\.|[^\\\/])*?\]\[` + String.raw`(?:\\.|[^\\\/])*?\][dualxmsipngr]{0,12}`,
    String.raw`(?:s|tr|y)\{(?:\\.|[^\\\/])*?\}\{` + String.raw`(?:\\.|[^\\\/])*?\}[dualxmsipngr]{0,12}`,
    String.raw`(?:(?:m|qr)?)\/(?:\\.|[^\\\/])*?\/[dualxmsipngr]{0,12}`,
    String.raw`(?:m|qr)(!|\/|\||\?|'|"|#)(?:\\.|[^\\\/])*?\1` + String.raw`[dualxmsipngr]{0,12}`,
    String.raw`(?:m|qr)\((?:\\.|[^\\\/])*?\)[dualxmsipngr]{0,12}`,
    String.raw`(?:m|qr)\[(?:\\.|[^\\\/])*?\][dualxmsipngr]{0,12}`,
    String.raw`(?:m|qr)\{(?:\\.|[^\\\/])*?\}[dualxmsipngr]{0,12}`
].map((r)=>[
        r,
        r.replaceAll(")*?", `){0,${vr}}?`)
    ]);
const gr = [
    [
        `${String.raw`\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=\b|and|as|assert|async|`}await|break|case|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|10|not|or|pass|raise|return|try|while|with|yield)`,
        `${String.raw`\b([1-9](_?[0-9])*|0(_?0)*)[lLjJ]?(?=\b|and|as|assert|async|`}await|break|case|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|10|not|or|pass|raise|return|try|while|with|yield)`
    ]
];
const mr = [
    [
        String.raw`<<[-~]?'?(?=(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b)`,
        String.raw`<<[-~]?'?(?=(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)` + String.raw`{0,${Hr}}?[^\S\n]*\1\b)`
    ]
];
const lr = [
    [
        String.raw`b?r(#*)"(.|\n)*?"\1(?!#)`,
        String.raw`b?r(#*)"[^]{0,${Dr}}?"\1(?!#)`
    ]
];
const ur = new Map([
    [
        "arduino",
        M
    ],
    [
        "c",
        er
    ],
    [
        "cpp",
        M
    ],
    [
        "csharp",
        or
    ],
    [
        "handlebars",
        nr
    ],
    [
        "ini",
        ir
    ],
    [
        "markdown",
        [
            ...ar,
            ...sr
        ]
    ],
    [
        "perl",
        pr
    ],
    [
        "python",
        gr
    ],
    [
        "ruby",
        mr
    ],
    [
        "rust",
        lr
    ]
]);
const O = (r, e)=>(o)=>{
        let n = e(o);
        try {
            return V(n, new Map([
                ...tr,
                ...ur.get(r) ?? []
            ]));
        } catch  {
            return e(o);
        }
    };
const jr = /^[a-z0-9][a-z0-9_+#.-]{0,63}$/;
const zr = 16;
function Zr(r) {
    return r.default ?? r;
}
class dr {
    hljs = null;
    loaded = new Set;
    failed = new Set;
    runtimeDepsEnsured = new WeakSet;
    pluginLanguages = new Map;
    pluginAliases = new Set;
    generation = 0;
    core(r) {
        if (this.hljs) {
            return this.hljs;
        }
        let e = r.loadCore();
        Rr(e);
        for (let [o, n] of Object.entries(Iyo)){
            if (!e.getLanguage(o)) {
                e.registerLanguage(o, O(o, n));
            }
        }
        for (let [o, n] of this.pluginLanguages){
            if (!e.getLanguage(o)) {
                this.registerResolvedPluginLanguage(e, o, n, {
                    emitSadTelemetry: true
                });
            }
        }
        this.hljs = e;
        return e;
    }
    ensureLanguage(r, e) {
        let o = this.core(e);
        let n = r.toLowerCase();
        let s = e.resolveId(n);
        if (s !== null) {
            if (this.failed.has(s)) {
                return null;
            }
            if (!this.loaded.has(s)) {
                let a = e.loaders[s];
                if (typeof a !== "function") {
                    return null;
                }
                try {
                    o.registerLanguage(s, O(s, Zr(a())));
                } catch (error) {
                    this.failed.add(s);
                    c(error);
                    return null;
                }
                this.loaded.add(s);
                for (let p of e.subLanguageDeps[s] ?? []){
                    this.ensureLanguage(p, e);
                }
            }
            return s;
        }
        let i = o.getLanguage(n);
        if (!i) {
            return null;
        }
        if (!this.runtimeDepsEnsured.has(i)) {
            this.runtimeDepsEnsured.add(i);
            for (let a of Ur(i)){
                if (a !== n) {
                    this.ensureLanguage(a, e);
                }
            }
        }
        return n;
    }
    get pluginGrammarGeneration() {
        return this.generation;
    }
    clearPluginLanguages() {
        this.generation++;
        if (this.hljs) {
            for (let r of this.pluginLanguages.keys()){
                this.hljs.unregisterLanguage(r);
            }
        }
        this.pluginLanguages.clear();
        this.pluginAliases.clear();
    }
    isReservedLanguageId(r) {
        return Object.prototype.hasOwnProperty.call(eFe, r) || Object.prototype.hasOwnProperty.call(Jlt, r) || Object.prototype.hasOwnProperty.call(Iyo, r) || Dks.has(r) || this.pluginLanguages.has(r) || this.pluginAliases.has(r);
    }
    isPluginLanguageId(r) {
        return this.pluginLanguages.has(r) || this.pluginAliases.has(r);
    }
    addPluginLanguage(r, e, o) {
        if (this.isReservedLanguageId(r)) {
            return false;
        }
        let n = o.map((i)=>i.toLowerCase()).filter((i)=>jr.test(i) && i !== r && !this.isReservedLanguageId(i)).slice(0, zr);
        let s = (i)=>{
            let a = e(i);
            a.name = r;
            a.aliases = n;
            a.disableAutodetect = true;
            return a;
        };
        this.pluginLanguages.set(r, s);
        for (let i of n){
            this.pluginAliases.add(i);
        }
        if (this.hljs && !this.hljs.getLanguage(r)) {
            return this.registerResolvedPluginLanguage(this.hljs, r, s, {
                emitSadTelemetry: false
            });
        }
        return true;
    }
    registerResolvedPluginLanguage(r, language, o, { emitSadTelemetry }) {
        try {
            let s = O(language, o)(r);
            r.registerLanguage(language, ()=>s);
            r.highlight("", {
                language,
                ignoreIllegals: true
            });
            return true;
        } catch (error) {
            this.pluginLanguages.delete(language);
            if (r.getLanguage(language)) {
                r.unregisterLanguage(language);
            }
            if (emitSadTelemetry) {
                f("plugin_hljs_languages", "resolve_failed");
            }
            t(`plugin hljs grammar '${language}' failed to resolve at registration: ${error instanceof Error ? error.message : String(error)}`, {
                level: "error"
            });
            return false;
        }
    }
}
function Ur(r) {
    let e = new Set;
    let o = new Set;
    function n(s) {
        if (s === null || typeof s !== "object" || o.has(s)) {
            return;
        }
        o.add(s);
        let i = s;
        for (let a of [
            i.subLanguage ?? []
        ].flat()){
            if (typeof a === "string") {
                e.add(a);
            }
        }
        for (let a of i.contains ?? []){
            n(a);
        }
        n(i.starts);
        for (let a of i.variants ?? []){
            n(a);
        }
    }
    n(r);
    return e;
}
const yTe = new dr;
function bYt(r) {
    let e = r.toLowerCase();
    if (Object.prototype.hasOwnProperty.call(eFe, e)) {
        return e;
    }
    if (Object.prototype.hasOwnProperty.call(Jlt, e)) {
        return Jlt[e] ?? null;
    }
    return null;
}
async function Tnt(r) {
    let e = extname(r).slice(1);
    if (!e) {
        return b("unknown");
    }
    let o = e.toLowerCase();
    let n = bYt(o);
    if (n !== null) {
        return hr(eFe[n]);
    }
    if (yTe.isPluginLanguageId(o)) {
        return b("plugin");
    }
    return hr(Object.prototype.hasOwnProperty.call(VBn, o) ? VBn[o] : undefined);
}
function hr(r) {
    if (r === undefined) {
        return b("unknown");
    }
    return kn(r);
}
export { _Yt, HRn, y7r, _7r, b7r, yTe, bYt, Tnt };
