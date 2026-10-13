import { vs } from "/$bunfs/root/chunk-j27d47mr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Ei, ne, Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { Too } from "/$bunfs/root/chunk-vmr48rzv.js";
import { _Yt, HRn, y7r, b7r } from "/$bunfs/root/chunk-5nm75yfw.js";
import { Sdn, Aee } from "/$bunfs/root/chunk-ra821xz1.js";
import { L0e, rot } from "/$bunfs/root/chunk-0ev62b0n.js";
import { ae } from "/$bunfs/root/chunk-223dyewd.js";
import { O0r } from "/$bunfs/root/chunk-4nfvaqps.js";
import { ea } from "/$bunfs/root/chunk-75wzvwyz.js";
import { ra, aGn } from "/$bunfs/root/chunk-98pm569t.js";
import { basename, extname } from "path";
const mdn = 2000;
function LXe(e, n = 0) {
    if (e.length - n <= mdn) {
        return {
            code: e.slice(n),
            truncatedChars: 0
        };
    }
    let t = e.slice(n, n + mdn + 1);
    let code = ne(t, mdn);
    return {
        code,
        truncatedChars: e.length - n - code.length
    };
}
function lje(e) {
    return ` \u2026 [+${e} chars]`;
}
function j() {
    return Sdn();
}
const v = "\x1B[0m";
const A = "\x1B[2m";
const J = "\x1B[22m";
function l(e, g, b) {
    return {
        r: e,
        g,
        b,
        a: 255
    };
}
function x(e) {
    return {
        r: e,
        g: 0,
        b: 0,
        a: 0
    };
}
const L = {
    r: 0,
    g: 0,
    b: 0,
    a: 1
};
function Y(e) {
    if (e.includes("ansi")) {
        return "ansi";
    }
    if (ge.level >= 3) {
        return "truecolor";
    }
    return "color256";
}
const I = [
    0,
    95,
    135,
    175,
    215,
    255
];
function fe(e, n, t) {
    let s = (m)=>{
        if (m < 48) {
            return 0;
        }
        if (m < 115) {
            return 1;
        }
        if (m < 155) {
            return 2;
        }
        if (m < 195) {
            return 3;
        }
        if (m < 235) {
            return 4;
        }
        return 5;
    };
    let r = s(e);
    let i = s(n);
    let o = s(t);
    let f = 16 + 36 * r + 6 * i + o;
    let u = Math.round((e + n + t) / 3);
    if (u < 5) {
        return 16;
    }
    if (u > 244 && r === i && i === o) {
        return f;
    }
    let d = Math.max(0, Math.min(23, Math.round((u - 8) / 10)));
    let h = 232 + d;
    let b = 8 + d * 10;
    let g = I[r];
    let y = I[i];
    let k = I[o];
    let S = (e - g) ** 2 + (n - y) ** 2 + (t - k) ** 2;
    if ((e - b) ** 2 + (n - b) ** 2 + (t - b) ** 2 < S) {
        return h;
    }
    return f;
}
function N(e, n, t) {
    if (e.a === 0) {
        let r = e.r;
        if (r < 8) {
            return `\x1B[${(n ? 30 : 40) + r}m`;
        }
        if (r < 16) {
            return `\x1B[${(n ? 90 : 100) + (r - 8)}m`;
        }
        return `\x1B[${n ? 38 : 48};5;${r}m`;
    }
    if (e.a === 1) {
        if (n) {
            return "\x1B[39m";
        }
        return "\x1B[49m";
    }
    let s = n ? 38 : 48;
    if (t === "truecolor") {
        return `\x1B[${s};2;${e.r};${e.g};${e.b}m`;
    }
    return `\x1B[${s};5;${fe(e.r, e.g, e.b)}m`;
}
function E(e, mode, t, s) {
    let r = s ? v + A : v;
    for (let [i, o] of e){
        r += N(i.foreground, true, mode);
        if (!t) {
            r += N(i.background, false, mode);
        }
        r += o;
    }
    return r + v;
}
function pe(e) {
    if (e.includes("ansi")) {
        return "ansi";
    }
    if (e.includes("dark")) {
        return "Monokai Extended";
    }
    return "GitHub";
}
const G = new Map([
    [
        "keyword",
        l(249, 38, 114)
    ],
    [
        "_storage",
        l(102, 217, 239)
    ],
    [
        "built_in",
        l(166, 226, 46)
    ],
    [
        "type",
        l(166, 226, 46)
    ],
    [
        "literal",
        l(190, 132, 255)
    ],
    [
        "number",
        l(190, 132, 255)
    ],
    [
        "string",
        l(230, 219, 116)
    ],
    [
        "title",
        l(166, 226, 46)
    ],
    [
        "title.function",
        l(166, 226, 46)
    ],
    [
        "title.class",
        l(166, 226, 46)
    ],
    [
        "title.class.inherited",
        l(166, 226, 46)
    ],
    [
        "params",
        l(253, 151, 31)
    ],
    [
        "comment",
        l(117, 113, 94)
    ],
    [
        "meta",
        l(117, 113, 94)
    ],
    [
        "attr",
        l(166, 226, 46)
    ],
    [
        "attribute",
        l(166, 226, 46)
    ],
    [
        "variable",
        l(255, 255, 255)
    ],
    [
        "variable.language",
        l(255, 255, 255)
    ],
    [
        "property",
        l(255, 255, 255)
    ],
    [
        "operator",
        l(249, 38, 114)
    ],
    [
        "punctuation",
        l(248, 248, 242)
    ],
    [
        "symbol",
        l(190, 132, 255)
    ],
    [
        "regexp",
        l(230, 219, 116)
    ],
    [
        "subst",
        l(248, 248, 242)
    ]
]);
const P = new Map([
    [
        "keyword",
        l(167, 29, 93)
    ],
    [
        "_storage",
        l(167, 29, 93)
    ],
    [
        "built_in",
        l(0, 134, 179)
    ],
    [
        "type",
        l(0, 134, 179)
    ],
    [
        "literal",
        l(0, 134, 179)
    ],
    [
        "number",
        l(0, 134, 179)
    ],
    [
        "string",
        l(24, 54, 145)
    ],
    [
        "title",
        l(121, 93, 163)
    ],
    [
        "title.function",
        l(121, 93, 163)
    ],
    [
        "title.class",
        l(0, 0, 0)
    ],
    [
        "title.class.inherited",
        l(0, 0, 0)
    ],
    [
        "params",
        l(0, 134, 179)
    ],
    [
        "comment",
        l(150, 152, 150)
    ],
    [
        "meta",
        l(150, 152, 150)
    ],
    [
        "attr",
        l(0, 134, 179)
    ],
    [
        "attribute",
        l(0, 134, 179)
    ],
    [
        "variable",
        l(0, 134, 179)
    ],
    [
        "variable.language",
        l(0, 134, 179)
    ],
    [
        "property",
        l(0, 134, 179)
    ],
    [
        "operator",
        l(167, 29, 93)
    ],
    [
        "punctuation",
        l(51, 51, 51)
    ],
    [
        "symbol",
        l(0, 134, 179)
    ],
    [
        "regexp",
        l(24, 54, 145)
    ],
    [
        "subst",
        l(51, 51, 51)
    ]
]);
const me = new Set([
    "const",
    "let",
    "var",
    "function",
    "class",
    "type",
    "interface",
    "enum",
    "namespace",
    "module",
    "def",
    "fn",
    "func",
    "struct",
    "trait",
    "impl"
]);
const he = new Map([
    [
        "keyword",
        x(13)
    ],
    [
        "_storage",
        x(14)
    ],
    [
        "built_in",
        x(14)
    ],
    [
        "type",
        x(14)
    ],
    [
        "literal",
        x(12)
    ],
    [
        "number",
        x(12)
    ],
    [
        "string",
        x(10)
    ],
    [
        "title",
        x(11)
    ],
    [
        "title.function",
        x(11)
    ],
    [
        "title.class",
        x(11)
    ],
    [
        "comment",
        x(8)
    ],
    [
        "meta",
        x(8)
    ]
]);
function Q(e, n) {
    let t = e.includes("dark");
    let s = e.includes("ansi");
    let r = e.includes("daltonized");
    let i = n === "truecolor";
    if (s) {
        return {
            addLine: L,
            addWord: L,
            addDecoration: x(10),
            deleteLine: L,
            deleteWord: L,
            deleteDecoration: x(9),
            foreground: t ? x(7) : x(0),
            background: L,
            scopes: he
        };
    }
    if (t) {
        let h = l(248, 248, 242);
        let b = l(61, 1, 0);
        let g = l(92, 2, 0);
        let y = l(220, 90, 90);
        if (r) {
            return {
                addLine: i ? l(0, 27, 41) : x(17),
                addWord: i ? l(0, 48, 71) : x(24),
                addDecoration: l(81, 160, 200),
                deleteLine: b,
                deleteWord: g,
                deleteDecoration: y,
                foreground: h,
                background: L,
                scopes: G
            };
        }
        return {
            addLine: i ? l(2, 40, 0) : x(22),
            addWord: i ? l(4, 71, 0) : x(28),
            addDecoration: l(80, 200, 80),
            deleteLine: b,
            deleteWord: g,
            deleteDecoration: y,
            foreground: h,
            background: L,
            scopes: G
        };
    }
    let o = l(51, 51, 51);
    let f = l(255, 220, 220);
    let u = l(255, 199, 199);
    let d = l(207, 34, 46);
    if (r) {
        return {
            addLine: l(219, 237, 255),
            addWord: l(179, 217, 255),
            addDecoration: l(36, 87, 138),
            deleteLine: f,
            deleteWord: u,
            deleteDecoration: d,
            foreground: o,
            background: L,
            scopes: P
        };
    }
    return {
        addLine: l(220, 255, 220),
        addWord: l(178, 255, 178),
        addDecoration: l(36, 138, 61),
        deleteLine: f,
        deleteWord: u,
        deleteDecoration: d,
        foreground: o,
        background: L,
        scopes: P
    };
}
const be = new Map([
    [
        "black",
        0
    ],
    [
        "red",
        1
    ],
    [
        "green",
        2
    ],
    [
        "yellow",
        3
    ],
    [
        "blue",
        4
    ],
    [
        "magenta",
        5
    ],
    [
        "cyan",
        6
    ],
    [
        "white",
        7
    ],
    [
        "blackBright",
        8
    ],
    [
        "redBright",
        9
    ],
    [
        "greenBright",
        10
    ],
    [
        "yellowBright",
        11
    ],
    [
        "blueBright",
        12
    ],
    [
        "magentaBright",
        13
    ],
    [
        "cyanBright",
        14
    ],
    [
        "whiteBright",
        15
    ]
]);
function D(e) {
    if (e === undefined) {
        return null;
    }
    let n = /^rgb\(\s?(\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\s?\)$/.exec(e);
    if (n) {
        return l(Number(n[1]), Number(n[2]), Number(n[3]));
    }
    let t = /^#([0-9a-fA-F]{6})$/.exec(e);
    if (t) {
        let i = parseInt(t[1], 16);
        return l(i >> 16, i >> 8 & 255, i & 255);
    }
    let s = /^#([0-9a-fA-F]{3})$/.exec(e);
    if (s) {
        let [i, o, f] = s[1];
        return l(parseInt(i + i, 16), parseInt(o + o, 16), parseInt(f + f, 16));
    }
    let r = /^ansi256\(\s?(\d{1,3})\s?\)$/.exec(e);
    if (r) {
        return x(Number(r[1]));
    }
    if (e.startsWith("ansi:")) {
        let i = be.get(e.slice(5));
        if (i === undefined) {
            return null;
        }
        return x(i);
    }
    return null;
}
function ke(e, n, t) {
    let s = D((t ? n.diffAddedDimmed : undefined) ?? n.diffAdded);
    let r = D((t ? n.diffRemovedDimmed : undefined) ?? n.diffRemoved);
    let i = D(n.diffAddedWord);
    let o = D(n.diffRemovedWord);
    return {
        ...e,
        addLine: s ?? e.addLine,
        deleteLine: r ?? e.deleteLine,
        addWord: i ?? e.addWord,
        deleteWord: o ?? e.deleteWord
    };
}
function B(e) {
    return {
        foreground: e.foreground,
        background: e.background
    };
}
function W(marker, n) {
    switch(marker){
        case "+":
            return n.addLine;
        case "-":
            return n.deleteLine;
        case " ":
            return n.background;
    }
}
function ye(marker, n) {
    switch(marker){
        case "+":
            return n.addWord;
        case "-":
            return n.deleteWord;
        case " ":
            return n.background;
    }
}
function V(marker, n) {
    switch(marker){
        case "+":
            return n.addDecoration;
        case "-":
            return n.deleteDecoration;
        case " ":
            return n.foreground;
    }
}
const F = new Map([
    [
        "Dockerfile",
        "dockerfile"
    ],
    [
        "Makefile",
        "makefile"
    ],
    [
        "Rakefile",
        "ruby"
    ],
    [
        "Gemfile",
        "ruby"
    ],
    [
        "CMakeLists",
        "cmake"
    ]
]);
function Z(filePath, n) {
    let t = basename(filePath);
    let s = extname(filePath).slice(1);
    let r = Qe(t, ".");
    let i = F.get(t) ?? F.get(r);
    if (i) {
        let o = Aee(i);
        if (o) {
            return o;
        }
    }
    if (s) {
        let o = Aee(s);
        if (o) {
            return o;
        }
    }
    if (n) {
        let o = n.startsWith("\uFEFF") ? n.slice(1) : n;
        if (o.startsWith("#!")) {
            if (o.includes("bash") || o.includes("/sh")) {
                return Aee("bash");
            }
            if (o.includes("python")) {
                return Aee("python");
            }
            if (o.includes("node")) {
                return Aee("javascript");
            }
            if (o.includes("ruby")) {
                return Aee("ruby");
            }
            if (o.includes("perl")) {
                return Aee("perl");
            }
        }
        if (o.startsWith("<?php")) {
            return Aee("php");
        }
        if (o.startsWith("<?xml")) {
            return Aee("xml");
        }
    }
    return null;
}
function Ce(e, n, t) {
    if (!e) {
        return t.foreground;
    }
    if (e === "keyword" && me.has(n.trim())) {
        return t.scopes.get("_storage") ?? t.foreground;
    }
    return t.scopes.get(e) ?? t.scopes.get(Qe(e, ".")) ?? t.foreground;
}
function ee(e, n, t, s) {
    let r = e.scope ?? e.kind ?? t;
    for (let i of e.children){
        if (typeof i === "string") {
            let o = Ce(r, i, n);
            s.push([
                {
                    foreground: o,
                    background: n.background
                },
                i
            ]);
        } else {
            ee(i, n, r, s);
        }
    }
}
function xe(_emitter) {
    return typeof _emitter === "object" && _emitter !== null && "rootNode" in _emitter && typeof _emitter.rootNode === "object" && _emitter.rootNode !== null && "children" in _emitter.rootNode;
}
function te(e, code, t) {
    let s = code + `
`;
    if (!e.lang) {
        return [
            [
                B(t),
                s
            ]
        ];
    }
    if (s.length > _Yt) {
        e.limited ??= b7r(j(), e.lang);
    }
    let r = y7r(s, e.limited ?? e.lang);
    e.squares += r;
    if (r > 0 && e.squares > HRn) {
        return [
            [
                B(t),
                s
            ]
        ];
    }
    let i;
    try {
        i = j().highlight(s, {
            language: e.lang,
            ignoreIllegals: true
        });
    } catch  {
        e.lang = null;
        return [
            [
                B(t),
                s
            ]
        ];
    }
    if (!xe(i._emitter)) {
        if (ea().claim("color_diff_hljs_emitter_shape_error")) {
            c(Error(`color-diff: hljs emitter shape mismatch (keys: ${Object.keys(i._emitter).join(",")}). Syntax highlighting disabled.`));
        }
        return [
            [
                B(t),
                s
            ]
        ];
    }
    let o = [];
    ee(i._emitter.rootNode, t, undefined, o);
    return Se(o);
}
function Se(e) {
    let n = e.map(([, r])=>r);
    let t = aGn(n);
    if (t === n) {
        return e;
    }
    let s = [];
    for(let r = 0; r < e.length; r++){
        let i = t[r];
        if (i.length > 0) {
            s.push([
                e[r][0],
                i
            ]);
        }
    }
    return s;
}
const Te = 0.4;
function U(e) {
    let n = [];
    let t = 0;
    while(t < e.length){
        let s = e[t];
        if (/[\p{L}\p{N}_]/u.test(s)) {
            let r = t + 1;
            while(r < e.length && /[\p{L}\p{N}_]/u.test(e[r])){
                r++;
            }
            n.push(e.slice(t, r));
            t = r;
        } else if (/\s/.test(s)) {
            let r = t + 1;
            while(r < e.length && /\s/.test(e[r])){
                r++;
            }
            n.push(e.slice(t, r));
            t = r;
        } else {
            let i = e.codePointAt(t) > 65535 ? 2 : 1;
            n.push(e.slice(t, t + i));
            t += i;
        }
    }
    return n;
}
function Me(e) {
    let n = [];
    let t = 0;
    while(t < e.length){
        if (e[t] === "-") {
            let s = t;
            let r = t;
            while(r < e.length && e[r] === "-"){
                r++;
            }
            let i = r;
            while(i < e.length && e[i] === "+"){
                i++;
            }
            let o = r - s;
            let f = i - r;
            if (o > 0 && f > 0) {
                let u = Math.min(o, f);
                for(let d = 0; d < u; d++){
                    n.push([
                        s + d,
                        r + d
                    ]);
                }
                t = i;
            } else {
                t = r;
            }
        } else {
            t++;
        }
    }
    return n;
}
function we(code, n) {
    let t = U(code);
    let s = U(n);
    let r = Too(t, s);
    let i = code.length + n.length;
    let o = 0;
    let f = [];
    let u = [];
    let d = 0;
    let h = 0;
    for (let b of r){
        let g = b.value.reduce((acc, item)=>acc + item.length, 0);
        if (b.removed) {
            o += g;
            f.push({
                start: d,
                end: d + g
            });
            d += g;
        } else if (b.added) {
            o += g;
            u.push({
                start: h,
                end: h + g
            });
            h += g;
        } else {
            d += g;
            h += g;
        }
    }
    if (i > 0 && o / i > Te) {
        return [
            [],
            []
        ];
    }
    return [
        f,
        u
    ];
}
function re(e) {
    e.lines = e.lines.map((n)=>n.flatMap(([t, s])=>s.split(`
`).filter((r)=>r.length > 0).map((r)=>[
                    t,
                    r
                ])));
}
function Le(segment) {
    if (segment.length !== 1) {
        return false;
    }
    let n = segment.codePointAt(0);
    for (let [t, s] of L0e){
        if (n >= t && n <= s) {
            return true;
        }
    }
    return false;
}
const oe = /^[\x20-\x7e]*$/;
function q(segment) {
    if (segment === "\t") {
        return 8;
    }
    if (Le(segment)) {
        return 1;
    }
    return ae(segment);
}
function R(e) {
    if (!O0r.test(e)) {
        return ae(e);
    }
    let n = e.split(rot);
    let t = n.length - 1;
    for (let s of n){
        t += ae(s);
    }
    return t;
}
function K(e) {
    return e.map(([, n])=>n).join("");
}
const Be = 256;
function ie(e, n) {
    if (oe.test(n)) {
        return n.length;
    }
    let t = e.slice(-Be);
    return R(t + n) - R(t);
}
function Re(e, n, t) {
    return N(e.foreground, true, n) + (t ? "" : N(e.background, false, n));
}
function Ee(e, n, t) {
    let s = [];
    let r = null;
    for (let [i, o] of e){
        let f = Re(i, n, t);
        let u = s.at(-1);
        if (u && f === r) {
            s[s.length - 1] = [
                u[0],
                u[1] + o
            ];
        } else {
            s.push([
                i,
                o
            ]);
            r = f;
        }
    }
    return s;
}
function _e(e) {
    if (!e.some(([, r])=>r.includes("\t"))) {
        return e;
    }
    let n = "";
    let t = 0;
    let s = [];
    for (let [r, i] of e){
        let o = i.split("\t");
        let f = "";
        for(let u = 0; u < o.length; u++){
            let d = u === 0 ? o[u] : Ei(" ", 8 - t % 8) + o[u];
            t += ie(n, d);
            f += d;
            n += d;
        }
        s.push([
            r,
            f
        ]);
    }
    return s;
}
function se(e, n, t, s, r) {
    let i = [];
    for (let o of e.lines){
        let f = i.length;
        let u = [];
        let d = "";
        let h = 0;
        for (let [b, g] of _e(Ee(o, s, r))){
            let y = h + ie(d, g);
            if (y <= n) {
                if (g.length > 0) {
                    u.push([
                        b,
                        g
                    ]);
                    d += g;
                    h = y;
                }
                continue;
            }
            if (n >= 1 && oe.test(g)) {
                let p = 0;
                let m = n - h;
                while(g.length - p > m){
                    if (m > 0) {
                        u.push([
                            b,
                            g.slice(p, p + m)
                        ]);
                        p += m;
                    }
                    if (u.length > 0) {
                        i.push(u);
                        u = [];
                        d = "";
                    }
                    h = 0;
                    m = n;
                }
                if (p < g.length) {
                    u.push([
                        b,
                        g.slice(p)
                    ]);
                    d += g.slice(p);
                    h += g.length - p;
                }
                continue;
            }
            let k = 0;
            let S = 0;
            for (let { segment, index } of ra().segment(g)){
                let C = q(segment);
                if (h + S + C > n) {
                    if (index > k) {
                        u.push([
                            b,
                            g.slice(k, index)
                        ]);
                    }
                    if (u.length > 0) {
                        i.push(u);
                        u = [];
                        d = "";
                        h = 0;
                    }
                    k = index;
                    S = 0;
                    if (C > n) {
                        i.push([
                            [
                                b,
                                g.slice(index, index + segment.length)
                            ]
                        ]);
                        k = index + segment.length;
                        continue;
                    }
                }
                S += C;
            }
            if (k < g.length) {
                u.push([
                    b,
                    g.slice(k)
                ]);
                d += g.slice(k);
                h = R(d);
            }
        }
        if (u.length > 0 || i.length === f) {
            i.push(u);
        }
    }
    e.lines = i;
    e.lines = e.lines.map((o)=>{
        let f = K(o);
        if (R(f) <= n) {
            return o;
        }
        let u = Math.max(0, n - 1);
        let d = [
            [
                0,
                0,
                0
            ]
        ];
        let h = 0;
        let b = 0;
        e: for(let C = 0; C < o.length; C++){
            let T = o[C][1];
            for (let { segment, index } of ra().segment(T)){
                h += q(segment);
                if (h > u) {
                    break e;
                }
                let w = index + segment.length;
                d.push([
                    C,
                    w,
                    b + w
                ]);
            }
            b += T.length;
        }
        let g = 0;
        let y = d.length - 1;
        while(g < y){
            let C = g + y + 1 >> 1;
            if (R(f.slice(0, d[C][2])) <= u) {
                g = C;
            } else {
                y = C - 1;
            }
        }
        let [k, S] = d[g];
        let p = o.slice(0, k);
        if (S > 0) {
            p.push([
                o[k][0],
                o[k][1].slice(0, S)
            ]);
        }
        let m = p.at(-1)?.[0] ?? o[0][0];
        p.push([
            m,
            "…"
        ]);
        return p;
    });
    if (e.marker && e.marker !== " ") {
        let background = W(e.marker, t);
        let f = {
            foreground: t.foreground,
            background
        };
        for (let u of e.lines){
            let d = R(K(u));
            if (d < n) {
                u.push([
                    f,
                    Ei(" ", n - d)
                ]);
            }
        }
    }
}
function le(e, n, t, s) {
    let r = {
        foreground: e.marker ? V(e.marker, n) : n.foreground,
        background: e.marker ? W(e.marker, n) : n.background
    };
    let i = e.marker === null || e.marker === " ";
    for(let o = 0; o < e.lines.length; o++){
        let f = o === 0 ? ` ${String(e.lineNumber).padStart(t)} ` : " ".repeat(t + 2);
        let u = i && !s ? `${A}${f}${J}` : f;
        e.lines[o].unshift([
            r,
            u
        ]);
    }
}
function De(e, n) {
    if (!e.marker) {
        return;
    }
    let t = {
        foreground: V(e.marker, n),
        background: W(e.marker, n)
    };
    for (let s of e.lines){
        s.unshift([
            t,
            e.marker
        ]);
    }
}
function Ne(e) {
    for (let n of e.lines){
        if (n.length > 0) {
            n[0][1] = A + n[0][1];
            let t = n.length - 1;
            n[t][1] = n[t][1] + J;
        }
    }
}
function We(e, n) {
    if (n.length === 0) {
        return n;
    }
    let t = [
        0
    ];
    for (let o of ra().segment(e)){
        t.push(o.index + o.segment.length);
    }
    let s = (o)=>{
        let f = 0;
        let u = t.length - 1;
        while(f < u){
            let d = f + u + 1 >> 1;
            if (t[d] <= o) {
                f = d;
            } else {
                u = d - 1;
            }
        }
        return t[f];
    };
    let r = (o)=>{
        let f = 0;
        let u = t.length - 1;
        while(f < u){
            let d = f + u >> 1;
            if (t[d] >= o) {
                u = d;
            } else {
                f = d + 1;
            }
        }
        return t[f];
    };
    let i = [];
    for (let o of n){
        let f = s(Math.min(o.start, e.length));
        let end = Math.max(f, r(Math.min(o.end, e.length)));
        let d = i.at(-1);
        if (d && f <= d.end) {
            d.end = Math.max(d.end, end);
        } else {
            i.push({
                start: f,
                end
            });
        }
    }
    return i;
}
function ve(e, n, t) {
    if (!e.marker) {
        return;
    }
    let background = W(e.marker, n);
    let r = ye(e.marker, n);
    let i = e.lines.map((d)=>d.map(([, h])=>h).join("")).join("");
    let o = We(i, t);
    let f = 0;
    let u = 0;
    for(let d = 0; d < e.lines.length; d++){
        let h = [];
        for (let [b, g] of e.lines[d]){
            let y = u;
            let k = u + g.length;
            while(f < o.length && o[f].end <= y){
                f++;
            }
            if (f >= o.length) {
                h.push([
                    {
                        ...b,
                        background
                    },
                    g
                ]);
                u = k;
                continue;
            }
            let S = g;
            let p = y;
            while(S.length > 0 && f < o.length){
                let m = o[f];
                let C = p >= m.start && p < m.end;
                let T;
                if (C) {
                    T = Math.min(m.end, k);
                } else if (m.start > p && m.start < k) {
                    T = m.start;
                } else {
                    T = k;
                }
                let M = T - p;
                let _ = S.slice(0, M);
                h.push([
                    {
                        ...b,
                        background: C ? r : background
                    },
                    _
                ]);
                S = S.slice(M);
                p = T;
                if (p >= m.end) {
                    f++;
                }
            }
            if (S.length > 0) {
                h.push([
                    {
                        ...b,
                        background
                    },
                    S
                ]);
            }
            u = k;
        }
        e.lines[d] = h;
    }
}
function Ie(hunk) {
    let n = Math.max(0, hunk.oldStart + hunk.oldLines - 1);
    let t = Math.max(0, hunk.newStart + hunk.newLines - 1);
    return Math.max(n, t);
}
function Ae(e) {
    if (e === "+" || e === "-") {
        return e;
    }
    return " ";
}
const X = 2;
const z = 1;
class O {
    hunk;
    filePath;
    firstLine;
    prefixContent;
    constructor(e, n, t, s){
        this.hunk = e;
        this.filePath = t;
        this.firstLine = n;
        this.prefixContent = s ?? null;
    }
    render(e, n, t, s) {
        let { rows, mode } = this.buildRows(e, n, t, s);
        return rows.map((o)=>E(o, mode, false, t));
    }
    renderSplit(e, n, t, s) {
        let { rows, mode } = this.buildRows(e, n, t, s);
        return {
            gutters: rows.map((o)=>E(o.slice(0, X), mode, false, t)),
            contents: rows.map((o)=>E(o.slice(X), mode, false, t))
        };
    }
    buildRows(e, n, t, s) {
        let r = Y(e);
        let i = Q(e, r);
        let o = s ? ke(i, s, t) : i;
        let u = {
            lang: Z(this.filePath, this.firstLine),
            stack: null,
            squares: 0
        };
        this.prefixContent;
        let length = String(Ie(this.hunk)).length;
        let oldStart = this.hunk.oldStart;
        let newStart = this.hunk.newStart;
        let g = Math.max(1, n - length - 2 - 1);
        let y = this.hunk.lines.map((p)=>{
            let marker = Ae(p.slice(0, 1));
            let { code, truncatedChars } = LXe(p, 1);
            let lineNumber;
            switch(marker){
                case "+":
                    lineNumber = newStart++;
                    break;
                case "-":
                    lineNumber = oldStart++;
                    break;
                case " ":
                    lineNumber = newStart;
                    oldStart++;
                    newStart++;
                    break;
            }
            return {
                lineNumber,
                marker,
                code,
                truncatedChars
            };
        });
        let k = y.map(()=>[]);
        if (!t) {
            let p = y.map((m)=>m.marker);
            for (let [m, C] of Me(p)){
                let [T, M] = we(y[m].code, y[C].code);
                k[m] = T;
                k[C] = M;
            }
        }
        let S = [];
        for(let p = 0; p < y.length; p++){
            let { lineNumber, marker, code, truncatedChars } = y[p];
            let _ = marker === "-" ? [
                [
                    B(o),
                    code
                ]
            ] : te(u, code, o);
            let w = {
                marker,
                lineNumber,
                lines: [
                    _
                ]
            };
            re(w);
            ve(w, o, k[p]);
            if (truncatedChars > 0) {
                w.lines[0].push([
                    B(o),
                    lje(truncatedChars)
                ]);
            }
            se(w, g, o, r, false);
            if (r === "ansi" && marker === "-") {
                Ne(w);
            }
            De(w, o);
            le(w, o, length, t);
            S.push(...w.lines);
        }
        return {
            rows: S,
            mode: r
        };
    }
}
class H {
    code;
    filePath;
    constructor(e, n){
        this.code = e;
        this.filePath = n;
    }
    render(e, n, t) {
        let { rows, mode } = this.buildRows(e, n, t);
        return rows.map((i)=>E(i, mode, true, t));
    }
    renderSplit(e, n, t) {
        let { rows, mode } = this.buildRows(e, n, t);
        return {
            gutters: rows.map((i)=>E(i.slice(0, z), mode, true, t)),
            contents: rows.map((i)=>E(i.slice(z), mode, true, t))
        };
    }
    buildRows(e, n, t) {
        let s = Y(e);
        let r = Q(e, s);
        let i = this.code.split(`
`);
        if (i.at(-1) === "") {
            i.pop();
        }
        let o = i[0] ?? null;
        let u = {
            lang: Z(this.filePath, o),
            stack: null,
            squares: 0
        };
        let length = String(i.length).length;
        let h = Math.max(1, n - length - 2);
        let b = [];
        for(let g = 0; g < i.length; g++){
            let { code, truncatedChars } = LXe(i[g]);
            let S = te(u, code, r);
            if (truncatedChars > 0) {
                S.push([
                    B(r),
                    lje(truncatedChars)
                ]);
            }
            let p = {
                marker: null,
                lineNumber: g + 1,
                lines: [
                    S
                ]
            };
            re(p);
            se(p, h, r, s, true);
            le(p, r, length, t);
            b.push(...p.lines);
        }
        return {
            rows: b,
            mode: s
        };
    }
}
function ce(e) {
    return {
        theme: pe(e),
        source: null
    };
}
function E$t() {
    if (vs(a.CLAUDE_CODE_SYNTAX_HIGHLIGHT)) {
        return "env";
    }
    return null;
}
function nNo() {
    if (E$t() === null) {
        return O;
    }
    return null;
}
function a0r() {
    if (E$t() === null) {
        return H;
    }
    return null;
}
function l0r(e) {
    if (E$t() === null) {
        return ce(e);
    }
    return null;
}
export { mdn, LXe, lje, E$t, nNo, a0r, l0r };
