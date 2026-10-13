import { ot } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { MO } from "/$bunfs/root/chunk-svqqgdca.js";
import { open, readFile, stat } from "fs/promises";
function Io(e) {
    if (e.startsWith("\uFEFF")) {
        return e.slice(1);
    }
    return e;
}
function U(e, i = false) {
    let e_length = e.length;
    let n = 0;
    let l = "";
    let s = 0;
    let u = 16;
    let o = 0;
    let f = 0;
    let h = 0;
    let p = 0;
    let k = 0;
    function y(g, b) {
        let a = 0;
        let d = 0;
        while(a < g || !b){
            let m = e.charCodeAt(n);
            if (m >= 48 && m <= 57) {
                d = d * 16 + m - 48;
            } else if (m >= 65 && m <= 70) {
                d = d * 16 + m - 65 + 10;
            } else if (m >= 97 && m <= 102) {
                d = d * 16 + m - 97 + 10;
            } else {
                break;
            }
            n++;
            a++;
        }
        if (a < g) {
            d = -1;
        }
        return d;
    }
    function setPosition(g) {
        n = g;
        l = "";
        s = 0;
        u = 16;
        k = 0;
    }
    function w() {
        let g = n;
        if (e.charCodeAt(n) === 48) {
            n++;
        } else {
            n++;
            while(n < e.length && x(e.charCodeAt(n))){
                n++;
            }
        }
        if (n < e.length && e.charCodeAt(n) === 46) {
            n++;
            if (n < e.length && x(e.charCodeAt(n))) {
                n++;
                while(n < e.length && x(e.charCodeAt(n))){
                    n++;
                }
            } else {
                k = 3;
                return e.substring(g, n);
            }
        }
        let b = n;
        if (n < e.length && (e.charCodeAt(n) === 69 || e.charCodeAt(n) === 101)) {
            n++;
            if (n < e.length && e.charCodeAt(n) === 43 || e.charCodeAt(n) === 45) {
                n++;
            }
            if (n < e.length && x(e.charCodeAt(n))) {
                n++;
                while(n < e.length && x(e.charCodeAt(n))){
                    n++;
                }
                b = n;
            } else {
                k = 3;
            }
        }
        return e.substring(g, b);
    }
    function v() {
        let g = "";
        let b = n;
        while(true){
            if (n >= e_length) {
                g += e.substring(b, n);
                k = 2;
                break;
            }
            let a = e.charCodeAt(n);
            if (a === 34) {
                g += e.substring(b, n);
                n++;
                break;
            }
            if (a === 92) {
                g += e.substring(b, n);
                n++;
                if (n >= e_length) {
                    k = 2;
                    break;
                }
                switch(e.charCodeAt(n++)){
                    case 34:
                        g += '"';
                        break;
                    case 92:
                        g += "\\";
                        break;
                    case 47:
                        g += "/";
                        break;
                    case 98:
                        g += "\b";
                        break;
                    case 102:
                        g += "\f";
                        break;
                    case 110:
                        g += `
`;
                        break;
                    case 114:
                        g += "\r";
                        break;
                    case 116:
                        g += "\t";
                        break;
                    case 117:
                        let m = y(4, true);
                        if (m >= 0) {
                            g += String.fromCharCode(m);
                        } else {
                            k = 4;
                        }
                        break;
                    default:
                        k = 5;
                }
                b = n;
                continue;
            }
            if (a >= 0 && a <= 31) {
                if (J(a)) {
                    g += e.substring(b, n);
                    k = 2;
                    break;
                } else {
                    k = 6;
                }
            }
            n++;
        }
        return g;
    }
    function N() {
        l = "";
        k = 0;
        s = n;
        f = o;
        p = h;
        if (n >= e_length) {
            s = e_length;
            return u = 17;
        }
        let g = e.charCodeAt(n);
        if (H(g)) {
            do {
                n++;
                l += String.fromCharCode(g);
                g = e.charCodeAt(n);
            }while (H(g))
            return u = 15;
        }
        if (J(g)) {
            n++;
            l += String.fromCharCode(g);
            if (g === 13 && e.charCodeAt(n) === 10) {
                n++;
                l += `
`;
            }
            o++;
            h = n;
            return u = 14;
        }
        switch(g){
            case 123:
                n++;
                return u = 1;
            case 125:
                n++;
                return u = 2;
            case 91:
                n++;
                return u = 3;
            case 93:
                n++;
                return u = 4;
            case 58:
                n++;
                return u = 6;
            case 44:
                n++;
                return u = 5;
            case 34:
                n++;
                l = v();
                return u = 10;
            case 47:
                let b = n - 1;
                if (e.charCodeAt(n + 1) === 47) {
                    n += 2;
                    while(n < e_length){
                        if (J(e.charCodeAt(n))) {
                            break;
                        }
                        n++;
                    }
                    l = e.substring(b, n);
                    return u = 12;
                }
                if (e.charCodeAt(n + 1) === 42) {
                    n += 2;
                    let a = e_length - 1;
                    let d = false;
                    while(n < a){
                        let m = e.charCodeAt(n);
                        if (m === 42 && e.charCodeAt(n + 1) === 47) {
                            n += 2;
                            d = true;
                            break;
                        }
                        n++;
                        if (J(m)) {
                            if (m === 13 && e.charCodeAt(n) === 10) {
                                n++;
                            }
                            o++;
                            h = n;
                        }
                    }
                    if (!d) {
                        n++;
                        k = 1;
                    }
                    l = e.substring(b, n);
                    return u = 13;
                }
                l += String.fromCharCode(g);
                n++;
                return u = 16;
            case 45:
                l += String.fromCharCode(g);
                n++;
                if (n === e_length || !x(e.charCodeAt(n))) {
                    return u = 16;
                }
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                l += w();
                return u = 11;
            default:
                while(n < e_length && S(g)){
                    n++;
                    g = e.charCodeAt(n);
                }
                if (s !== n) {
                    l = e.substring(s, n);
                    switch(l){
                        case "true":
                            return u = 8;
                        case "false":
                            return u = 9;
                        case "null":
                            return u = 7;
                    }
                    return u = 16;
                }
                l += String.fromCharCode(g);
                n++;
                return u = 16;
        }
    }
    function S(g) {
        if (H(g) || J(g)) {
            return false;
        }
        switch(g){
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
                return false;
        }
        return true;
    }
    function B() {
        let g;
        do {
            g = N();
        }while (g >= 12 && g <= 15)
        return g;
    }
    return {
        setPosition,
        getPosition: ()=>n,
        scan: i ? B : N,
        getToken: ()=>u,
        getTokenValue: ()=>l,
        getTokenOffset: ()=>s,
        getTokenLength: ()=>n - s,
        getTokenStartLine: ()=>f,
        getTokenStartCharacter: ()=>s - p,
        getTokenError: ()=>k
    };
}
function H(e) {
    return e === 32 || e === 9;
}
function J(e) {
    return e === 10 || e === 13;
}
function x(e) {
    return e >= 48 && e <= 57;
}
const K = {
    lineFeed: 10,
    10: "lineFeed",
    carriageReturn: 13,
    13: "carriageReturn",
    space: 32,
    32: "space",
    _0: 48,
    48: "_0",
    _1: 49,
    49: "_1",
    _2: 50,
    50: "_2",
    _3: 51,
    51: "_3",
    _4: 52,
    52: "_4",
    _5: 53,
    53: "_5",
    _6: 54,
    54: "_6",
    _7: 55,
    55: "_7",
    _8: 56,
    56: "_8",
    _9: 57,
    57: "_9",
    a: 97,
    97: "a",
    b: 98,
    98: "b",
    c: 99,
    99: "c",
    d: 100,
    100: "d",
    e: 101,
    101: "e",
    f: 102,
    102: "f",
    g: 103,
    103: "g",
    h: 104,
    104: "h",
    i: 105,
    105: "i",
    j: 106,
    106: "j",
    k: 107,
    107: "k",
    l: 108,
    108: "l",
    m: 109,
    109: "m",
    n: 110,
    110: "n",
    o: 111,
    111: "o",
    p: 112,
    112: "p",
    q: 113,
    113: "q",
    r: 114,
    114: "r",
    s: 115,
    115: "s",
    t: 116,
    116: "t",
    u: 117,
    117: "u",
    v: 118,
    118: "v",
    w: 119,
    119: "w",
    x: 120,
    120: "x",
    y: 121,
    121: "y",
    z: 122,
    122: "z",
    A: 65,
    65: "A",
    B: 66,
    66: "B",
    C: 67,
    67: "C",
    D: 68,
    68: "D",
    E: 69,
    69: "E",
    F: 70,
    70: "F",
    G: 71,
    71: "G",
    H: 72,
    72: "H",
    I: 73,
    73: "I",
    J: 74,
    74: "J",
    K: 75,
    75: "K",
    L: 76,
    76: "L",
    M: 77,
    77: "M",
    N: 78,
    78: "N",
    O: 79,
    79: "O",
    P: 80,
    80: "P",
    Q: 81,
    81: "Q",
    R: 82,
    82: "R",
    S: 83,
    83: "S",
    T: 84,
    84: "T",
    U: 85,
    85: "U",
    V: 86,
    86: "V",
    W: 87,
    87: "W",
    X: 88,
    88: "X",
    Y: 89,
    89: "Y",
    Z: 90,
    90: "Z",
    asterisk: 42,
    42: "asterisk",
    backslash: 92,
    92: "backslash",
    closeBrace: 125,
    125: "closeBrace",
    closeBracket: 93,
    93: "closeBracket",
    colon: 58,
    58: "colon",
    comma: 44,
    44: "comma",
    dot: 46,
    46: "dot",
    doubleQuote: 34,
    34: "doubleQuote",
    minus: 45,
    45: "minus",
    openBrace: 123,
    123: "openBrace",
    openBracket: 91,
    91: "openBracket",
    plus: 43,
    43: "plus",
    slash: 47,
    47: "slash",
    formFeed: 12,
    12: "formFeed",
    tab: 9,
    9: "tab"
};
const L = Array(20).fill(0).map((e, i)=>" ".repeat(i));
const Q = {
    " ": {
        "\n": Array(200).fill(0).map((e, i)=>`
` + " ".repeat(i)),
        "\r": Array(200).fill(0).map((e, i)=>`\r${" ".repeat(i)}`),
        "\r\n": Array(200).fill(0).map((e, i)=>`\r
` + " ".repeat(i))
    },
    "\t": {
        "\n": Array(200).fill(0).map((e, i)=>`
` + "\t".repeat(i)),
        "\r": Array(200).fill(0).map((e, i)=>`\r${"\t".repeat(i)}`),
        "\r\n": Array(200).fill(0).map((e, i)=>`\r
` + "\t".repeat(i))
    }
};
const C = [
    `
`,
    "\r",
    `\r
`
];
function X(e, i, r) {
    let n;
    let l;
    let s;
    let u;
    let o;
    if (i) {
        u = i.offset;
        o = u + i.length;
        s = u;
        while(s > 0 && !P(e, s - 1)){
            s--;
        }
        let a = o;
        while(a < e.length && !P(e, a)){
            a++;
        }
        l = e.substring(s, a);
        n = ue(l, r);
    } else {
        l = e;
        n = 0;
        s = 0;
        u = 0;
        o = e.length;
    }
    let f = ce(r, e);
    let h = C.includes(f);
    let p = 0;
    let k = 0;
    let y;
    if (r.insertSpaces) {
        y = L[r.tabSize || 4] ?? j(L[1], r.tabSize || 4);
    } else {
        y = "\t";
    }
    let T = y === "\t" ? "\t" : " ";
    let w = U(l, false);
    let v = false;
    function N() {
        if (p > 1) {
            return j(f, p) + j(y, n + k);
        }
        let a = y.length * (n + k);
        if (!h || a > Q[T][f].length) {
            return f + j(y, n + k);
        }
        if (a <= 0) {
            return f;
        }
        return Q[T][f][a];
    }
    function S() {
        let a = w.scan();
        p = 0;
        while(a === 15 || a === 14){
            if (a === 14 && r.keepLines) {
                p += 1;
            } else if (a === 14) {
                p = 1;
            }
            a = w.scan();
        }
        v = a === 16 || w.getTokenError() !== 0;
        return a;
    }
    let B = [];
    function g(a, d, m) {
        if (!v && (!i || d < o && m > u) && e.substring(d, m) !== a) {
            B.push({
                offset: d,
                length: m - d,
                content: a
            });
        }
    }
    let b = S();
    if (r.keepLines && p > 0) {
        g(j(f, p), 0, 0);
    }
    if (b !== 17) {
        let a = w.getTokenOffset() + s;
        let d = y.length * n < 20 && r.insertSpaces ? L[y.length * n] : j(y, n);
        g(d, s, a);
    }
    while(b !== 17){
        let a = w.getTokenOffset() + w.getTokenLength() + s;
        let d = S();
        let m = "";
        let E = false;
        while(p === 0 && (d === 12 || d === 13)){
            let W = w.getTokenOffset() + s;
            g(L[1], a, W);
            a = w.getTokenOffset() + w.getTokenLength() + s;
            E = d === 12;
            m = E ? N() : "";
            d = S();
        }
        if (d === 2) {
            if (b !== 1) {
                k--;
            }
            if (r.keepLines && p > 0 || !r.keepLines && b !== 1) {
                m = N();
            } else if (r.keepLines) {
                m = L[1];
            }
        } else if (d === 4) {
            if (b !== 3) {
                k--;
            }
            if (r.keepLines && p > 0 || !r.keepLines && b !== 3) {
                m = N();
            } else if (r.keepLines) {
                m = L[1];
            }
        } else {
            switch(b){
                case 3:
                case 1:
                    k++;
                    if (r.keepLines && p > 0 || !r.keepLines) {
                        m = N();
                    } else {
                        m = L[1];
                    }
                    break;
                case 5:
                    if (r.keepLines && p > 0 || !r.keepLines) {
                        m = N();
                    } else {
                        m = L[1];
                    }
                    break;
                case 12:
                    m = N();
                    break;
                case 13:
                    if (p > 0) {
                        m = N();
                    } else if (!E) {
                        m = L[1];
                    }
                    break;
                case 6:
                    if (r.keepLines && p > 0) {
                        m = N();
                    } else if (!E) {
                        m = L[1];
                    }
                    break;
                case 10:
                    if (r.keepLines && p > 0) {
                        m = N();
                    } else if (d === 6 && !E) {
                        m = "";
                    }
                    break;
                case 7:
                case 8:
                case 9:
                case 11:
                case 2:
                case 4:
                    if (r.keepLines && p > 0) {
                        m = N();
                    } else if ((d === 12 || d === 13) && !E) {
                        m = L[1];
                    } else if (d !== 5 && d !== 17) {
                        v = true;
                    }
                    break;
                case 16:
                    v = true;
                    break;
            }
            if (p > 0 && (d === 12 || d === 13)) {
                m = N();
            }
        }
        if (d === 17) {
            if (r.keepLines && p > 0) {
                m = N();
            } else {
                m = r.insertFinalNewline ? f : "";
            }
        }
        let z = w.getTokenOffset() + s;
        g(m, a, z);
        b = d;
    }
    return B;
}
function j(e, i) {
    let r = "";
    for(let n = 0; n < i; n++){
        r += e;
    }
    return r;
}
function ue(e, i) {
    let r = 0;
    let n = 0;
    let l = i.tabSize || 4;
    while(r < e.length){
        let s = e.charAt(r);
        if (s === L[1]) {
            n++;
        } else if (s === "\t") {
            n += l;
        } else {
            break;
        }
        r++;
    }
    return Math.floor(n / l);
}
function ce(e, i) {
    for(let r = 0; r < i.length; r++){
        let n = i.charAt(r);
        if (n === "\r") {
            if (r + 1 < i.length && i.charAt(r + 1) === `
`) {
                return `\r
`;
            }
            return "\r";
        } else if (n === `
`) {
            return `
`;
        }
    }
    return e && e.eol || `
`;
}
function P(e, i) {
    return `\r
`.indexOf(e.charAt(i)) !== -1;
}
let V;
{
    const e = V || (V = {});
    e.DEFAULT = {
        allowTrailingComma: false
    };
}function ee(e, i = [], r = V.DEFAULT) {
    let n = null;
    let l = [];
    let s = [];
    function onLiteralValue(f) {
        if (Array.isArray(l)) {
            l.push(f);
        } else if (n !== null) {
            l[n] = f;
        }
    }
    q(e, {
        onObjectBegin: ()=>{
            let f = {};
            onLiteralValue(f);
            s.push(l);
            l = f;
            n = null;
        },
        onObjectProperty: (f)=>{
            n = f;
        },
        onObjectEnd: ()=>{
            l = s.pop();
        },
        onArrayBegin: ()=>{
            let f = [];
            onLiteralValue(f);
            s.push(l);
            l = f;
            n = null;
        },
        onArrayEnd: ()=>{
            l = s.pop();
        },
        onLiteralValue,
        onError: (f, h, p)=>{
            i.push({
                error: f,
                offset: h,
                length: p
            });
        }
    }, r);
    return l[0];
}
function Z(e, i = [], r = V.DEFAULT) {
    let parent = {
        type: "array",
        offset: -1,
        length: -1,
        children: [],
        parent: undefined
    };
    function l(f) {
        if (parent.type === "property") {
            parent.length = f - parent.offset;
            parent = parent.parent;
        }
    }
    function s(f) {
        parent.children.push(f);
        return f;
    }
    q(e, {
        onObjectBegin: (f)=>{
            parent = s({
                type: "object",
                offset: f,
                length: -1,
                parent,
                children: []
            });
        },
        onObjectProperty: (value, h, p)=>{
            parent = s({
                type: "property",
                offset: h,
                length: -1,
                parent,
                children: []
            });
            parent.children.push({
                type: "string",
                value,
                offset: h,
                length: p,
                parent
            });
        },
        onObjectEnd: (f, h)=>{
            l(f + h);
            parent.length = f + h - parent.offset;
            parent = parent.parent;
            l(f + h);
        },
        onArrayBegin: (f, h)=>{
            parent = s({
                type: "array",
                offset: f,
                length: -1,
                parent,
                children: []
            });
        },
        onArrayEnd: (f, h)=>{
            parent.length = f + h - parent.offset;
            parent = parent.parent;
            l(f + h);
        },
        onLiteralValue: (f, h, p)=>{
            s({
                type: pe(f),
                offset: h,
                length: p,
                parent,
                value: f
            });
            l(h + p);
        },
        onSeparator: (f, h, p)=>{
            if (parent.type === "property") {
                if (f === ":") {
                    parent.colonOffset = h;
                } else if (f === ",") {
                    l(h);
                }
            }
        },
        onError: (f, h, p)=>{
            i.push({
                error: f,
                offset: h,
                length: p
            });
        }
    }, r);
    let o = parent.children[0];
    if (o) {
        delete o.parent;
    }
    return o;
}
function R(e, i) {
    if (!e) {
        return;
    }
    let r = e;
    for (let n of i){
        if (typeof n === "string") {
            if (r.type !== "object" || !Array.isArray(r.children)) {
                return;
            }
            let l = false;
            for (let s of r.children){
                if (Array.isArray(s.children) && s.children[0].value === n && s.children.length === 2) {
                    r = s.children[1];
                    l = true;
                    break;
                }
            }
            if (!l) {
                return;
            }
        } else {
            let l = n;
            if (r.type !== "array" || l < 0 || !Array.isArray(r.children) || l >= r.children.length) {
                return;
            }
            r = r.children[l];
        }
    }
    return r;
}
function q(e, i, r = V.DEFAULT) {
    let n = U(e, false);
    let l = [];
    function s(O) {
        if (O) {
            return ()=>O(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter());
        }
        return ()=>true;
    }
    function u(O) {
        if (O) {
            return ()=>O(n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), ()=>l.slice());
        }
        return ()=>true;
    }
    function o(O) {
        if (O) {
            return (A)=>O(A, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter());
        }
        return ()=>true;
    }
    function f(O) {
        if (O) {
            return (A)=>O(A, n.getTokenOffset(), n.getTokenLength(), n.getTokenStartLine(), n.getTokenStartCharacter(), ()=>l.slice());
        }
        return ()=>true;
    }
    let h = u(i.onObjectBegin);
    let p = f(i.onObjectProperty);
    let k = s(i.onObjectEnd);
    let y = u(i.onArrayBegin);
    let T = s(i.onArrayEnd);
    let w = f(i.onLiteralValue);
    let v = o(i.onSeparator);
    let N = s(i.onComment);
    let S = o(i.onError);
    let B = r && r.disallowComments;
    let g = r && r.allowTrailingComma;
    function b() {
        while(true){
            let O = n.scan();
            switch(n.getTokenError()){
                case 4:
                    a(14);
                    break;
                case 5:
                    a(15);
                    break;
                case 3:
                    a(13);
                    break;
                case 1:
                    if (!B) {
                        a(11);
                    }
                    break;
                case 2:
                    a(12);
                    break;
                case 6:
                    a(16);
                    break;
            }
            switch(O){
                case 12:
                case 13:
                    if (B) {
                        a(10);
                    } else {
                        N();
                    }
                    break;
                case 16:
                    a(1);
                    break;
                case 15:
                case 14:
                    break;
                default:
                    return O;
            }
        }
    }
    function a(O, A = [], G = []) {
        S(O);
        if (A.length + G.length > 0) {
            let M = n.getToken();
            while(M !== 17){
                if (A.indexOf(M) !== -1) {
                    b();
                    break;
                } else if (G.indexOf(M) !== -1) {
                    break;
                }
                M = b();
            }
        }
    }
    function d(O) {
        let A = n.getTokenValue();
        if (O) {
            w(A);
        } else {
            p(A);
            l.push(A);
        }
        b();
        return true;
    }
    function m() {
        switch(n.getToken()){
            case 11:
                let O = n.getTokenValue();
                let A = Number(O);
                if (isNaN(A)) {
                    a(2);
                    A = 0;
                }
                w(A);
                break;
            case 7:
                w(null);
                break;
            case 8:
                w(true);
                break;
            case 9:
                w(false);
                break;
            default:
                return false;
        }
        b();
        return true;
    }
    function E() {
        if (n.getToken() !== 10) {
            a(3, [], [
                2,
                5
            ]);
            return false;
        }
        d(false);
        if (n.getToken() === 6) {
            v(":");
            b();
            if (!Y()) {
                a(4, [], [
                    2,
                    5
                ]);
            }
        } else {
            a(5, [], [
                2,
                5
            ]);
        }
        l.pop();
        return true;
    }
    function z() {
        h();
        b();
        let O = false;
        while(n.getToken() !== 2 && n.getToken() !== 17){
            if (n.getToken() === 5) {
                if (!O) {
                    a(4, [], []);
                }
                v(",");
                b();
                if (n.getToken() === 2 && g) {
                    break;
                }
            } else if (O) {
                a(6, [], []);
            }
            if (!E()) {
                a(4, [], [
                    2,
                    5
                ]);
            }
            O = true;
        }
        k();
        if (n.getToken() !== 2) {
            a(7, [
                2
            ], []);
        } else {
            b();
        }
        return true;
    }
    function W() {
        y();
        b();
        let O = true;
        let A = false;
        while(n.getToken() !== 4 && n.getToken() !== 17){
            if (n.getToken() === 5) {
                if (!A) {
                    a(4, [], []);
                }
                v(",");
                b();
                if (n.getToken() === 4 && g) {
                    break;
                }
            } else if (A) {
                a(6, [], []);
            }
            if (O) {
                l.push(0);
                O = false;
            } else {
                l[l.length - 1]++;
            }
            if (!Y()) {
                a(4, [], [
                    4,
                    5
                ]);
            }
            A = true;
        }
        T();
        if (!O) {
            l.pop();
        }
        if (n.getToken() !== 4) {
            a(8, [
                4
            ], []);
        } else {
            b();
        }
        return true;
    }
    function Y() {
        switch(n.getToken()){
            case 3:
                return W();
            case 1:
                return z();
            case 10:
                return d(true);
            default:
                return m();
        }
    }
    b();
    if (n.getToken() === 17) {
        if (r.allowEmptyContent) {
            return true;
        }
        a(4, [], []);
        return false;
    }
    if (!Y()) {
        a(4, [], []);
        return false;
    }
    if (n.getToken() !== 17) {
        a(9, [], []);
    }
    return true;
}
function pe(e) {
    switch(typeof e){
        case "boolean":
            return "boolean";
        case "number":
            return "number";
        case "string":
            return "string";
        case "object":
            {
                if (!e) {
                    return "null";
                } else if (Array.isArray(e)) {
                    return "array";
                }
                return "object";
            }
        default:
            return "null";
    }
}
function ne(e, i, r, n) {
    let l = i.slice();
    let u = Z(e, []);
    let o;
    let f;
    while(l.length > 0){
        f = l.pop();
        o = R(u, l);
        if (o === undefined && r !== undefined) {
            if (typeof f === "string") {
                r = {
                    [f]: r
                };
            } else {
                r = [
                    r
                ];
            }
        } else {
            break;
        }
    }
    if (!o) {
        if (r === undefined) {
            throw Error("Can not delete in empty document");
        }
        return I(e, {
            offset: u ? u.offset : 0,
            length: u ? u.length : 0,
            content: JSON.stringify(r)
        }, n);
    } else if (o.type === "object" && typeof f === "string" && Array.isArray(o.children)) {
        let h = R(o, [
            f
        ]);
        if (h !== undefined) {
            if (r === undefined) {
                if (!h.parent) {
                    throw Error("Malformed AST");
                }
                let p = o.children.indexOf(h.parent);
                let k;
                let y = h.parent.offset + h.parent.length;
                if (p > 0) {
                    let T = o.children[p - 1];
                    k = T.offset + T.length;
                } else {
                    k = o.offset + 1;
                    if (o.children.length > 1) {
                        y = o.children[1].offset;
                    }
                }
                return I(e, {
                    offset: k,
                    length: y - k,
                    content: ""
                }, n);
            } else {
                return I(e, {
                    offset: h.offset,
                    length: h.length,
                    content: JSON.stringify(r)
                }, n);
            }
        } else {
            if (r === undefined) {
                return [];
            }
            let p = `${JSON.stringify(f)}: ${JSON.stringify(r)}`;
            let k = n.getInsertionIndex ? n.getInsertionIndex(o.children.map((T)=>T.children[0].value)) : o.children.length;
            let y;
            if (k > 0) {
                let T = o.children[k - 1];
                y = {
                    offset: T.offset + T.length,
                    length: 0,
                    content: `,${p}`
                };
            } else if (o.children.length === 0) {
                y = {
                    offset: o.offset + 1,
                    length: 0,
                    content: p
                };
            } else {
                y = {
                    offset: o.offset + 1,
                    length: 0,
                    content: `${p},`
                };
            }
            return I(e, y, n);
        }
    } else if (o.type === "array" && typeof f === "number" && Array.isArray(o.children)) {
        let h = f;
        if (h === -1) {
            let p = `${JSON.stringify(r)}`;
            let k;
            if (o.children.length === 0) {
                k = {
                    offset: o.offset + 1,
                    length: 0,
                    content: p
                };
            } else {
                let y = o.children[o.children.length - 1];
                k = {
                    offset: y.offset + y.length,
                    length: 0,
                    content: `,${p}`
                };
            }
            return I(e, k, n);
        } else if (r === undefined && o.children.length >= 0) {
            let p = f;
            let k = o.children[p];
            let y;
            if (o.children.length === 1) {
                y = {
                    offset: o.offset + 1,
                    length: o.length - 2,
                    content: ""
                };
            } else if (o.children.length - 1 === p) {
                let T = o.children[p - 1];
                let w = T.offset + T.length;
                let v = o.offset + o.length;
                y = {
                    offset: w,
                    length: v - 2 - w,
                    content: ""
                };
            } else {
                y = {
                    offset: k.offset,
                    length: o.children[p + 1].offset - k.offset,
                    content: ""
                };
            }
            return I(e, y, n);
        } else if (r !== undefined) {
            let p;
            let k = `${JSON.stringify(r)}`;
            if (!n.isArrayInsertion && o.children.length > f) {
                let y = o.children[f];
                p = {
                    offset: y.offset,
                    length: y.length,
                    content: k
                };
            } else if (o.children.length === 0 || f === 0) {
                p = {
                    offset: o.offset + 1,
                    length: 0,
                    content: o.children.length === 0 ? k : `${k},`
                };
            } else {
                let y = f > o.children.length ? o.children.length : f;
                let T = o.children[y - 1];
                p = {
                    offset: T.offset + T.length,
                    length: 0,
                    content: `,${k}`
                };
            }
            return I(e, p, n);
        } else {
            throw Error(`Can not ${r === undefined ? "remove" : n.isArrayInsertion ? "insert" : "modify"} Array index ${h} as length is not sufficient`);
        }
    } else {
        throw Error(`Can not add ${typeof f !== "number" ? "index" : "property"} to parent of type ${o.type}`);
    }
}
function I(e, i, r) {
    if (!r.formattingOptions) {
        return [
            i
        ];
    }
    let n = D(e, i);
    let i_offset = i.offset;
    let s = i.offset + i.content.length;
    if (i.length === 0 || i.content.length === 0) {
        while(i_offset > 0 && !P(n, i_offset - 1)){
            i_offset--;
        }
        while(s < n.length && !P(n, s)){
            s++;
        }
    }
    let u = X(n, {
        offset: i_offset,
        length: s - i_offset
    }, {
        ...r.formattingOptions,
        keepLines: false
    });
    for(let f = u.length - 1; f >= 0; f--){
        let h = u[f];
        n = D(n, h);
        i_offset = Math.min(i_offset, h.offset);
        s = Math.max(s, h.offset + h.length);
        s += h.content.length - h.length;
    }
    let o = e.length - (n.length - s) - i_offset;
    return [
        {
            offset: i_offset,
            length: o,
            content: n.substring(i_offset, s)
        }
    ];
}
function D(e, i) {
    return e.substring(0, i.offset) + i.content + e.substring(i.offset + i.length);
}
const te = {
    None: 0,
    0: "None",
    UnexpectedEndOfComment: 1,
    1: "UnexpectedEndOfComment",
    UnexpectedEndOfString: 2,
    2: "UnexpectedEndOfString",
    UnexpectedEndOfNumber: 3,
    3: "UnexpectedEndOfNumber",
    InvalidUnicode: 4,
    4: "InvalidUnicode",
    InvalidEscapeCharacter: 5,
    5: "InvalidEscapeCharacter",
    InvalidCharacter: 6,
    6: "InvalidCharacter"
};
const re = {
    OpenBraceToken: 1,
    1: "OpenBraceToken",
    CloseBraceToken: 2,
    2: "CloseBraceToken",
    OpenBracketToken: 3,
    3: "OpenBracketToken",
    CloseBracketToken: 4,
    4: "CloseBracketToken",
    CommaToken: 5,
    5: "CommaToken",
    ColonToken: 6,
    6: "ColonToken",
    NullKeyword: 7,
    7: "NullKeyword",
    TrueKeyword: 8,
    8: "TrueKeyword",
    FalseKeyword: 9,
    9: "FalseKeyword",
    StringLiteral: 10,
    10: "StringLiteral",
    NumericLiteral: 11,
    11: "NumericLiteral",
    LineCommentTrivia: 12,
    12: "LineCommentTrivia",
    BlockCommentTrivia: 13,
    13: "BlockCommentTrivia",
    LineBreakTrivia: 14,
    14: "LineBreakTrivia",
    Trivia: 15,
    15: "Trivia",
    Unknown: 16,
    16: "Unknown",
    EOF: 17,
    17: "EOF"
};
const kUe = ee;
const ie = {
    InvalidSymbol: 1,
    1: "InvalidSymbol",
    InvalidNumberFormat: 2,
    2: "InvalidNumberFormat",
    PropertyNameExpected: 3,
    3: "PropertyNameExpected",
    ValueExpected: 4,
    4: "ValueExpected",
    ColonExpected: 5,
    5: "ColonExpected",
    CommaExpected: 6,
    6: "CommaExpected",
    CloseBraceExpected: 7,
    7: "CloseBraceExpected",
    CloseBracketExpected: 8,
    8: "CloseBracketExpected",
    EndOfFileExpected: 9,
    9: "EndOfFileExpected",
    InvalidCommentToken: 10,
    10: "InvalidCommentToken",
    UnexpectedEndOfComment: 11,
    11: "UnexpectedEndOfComment",
    UnexpectedEndOfString: 12,
    12: "UnexpectedEndOfString",
    UnexpectedEndOfNumber: 13,
    13: "UnexpectedEndOfNumber",
    InvalidUnicode: 14,
    14: "InvalidUnicode",
    InvalidEscapeCharacter: 15,
    15: "InvalidEscapeCharacter",
    InvalidCharacter: 16,
    16: "InvalidCharacter"
};
function Jnn(e, i, r, n) {
    return ne(e, i, r, n);
}
function Pzn(e, i) {
    let r = i.slice(0).sort((l, s)=>{
        let u = l.offset - s.offset;
        if (u === 0) {
            return l.length - s.length;
        }
        return u;
    });
    let e_length = e.length;
    for(let l = r.length - 1; l >= 0; l--){
        let s = r[l];
        if (s.offset + s.length <= e_length) {
            e = D(e, s);
        } else {
            throw Error("Overlapping edit");
        }
        e_length = s.offset;
    }
    return e;
}
const bHt = "__unparsedToolInput";
function zxe(e) {
    if (typeof e !== "object" || e === null || Array.isArray(e)) {
        return false;
    }
    let i = Object.entries(e);
    if (i.length !== 1) {
        return false;
    }
    let [r, n] = i[0];
    return r === bHt && typeof n === "object" && n !== null && typeof n.raw === "string" && typeof n.len === "number";
}
function jY(e) {
    if (typeof e !== "object" || e === null || Array.isArray(e)) {
        return null;
    }
    let i = Object.entries(e);
    if (i.length !== 1) {
        return null;
    }
    let [r, n] = i[0];
    if (r !== bHt || typeof n !== "object" || n === null) {
        return null;
    }
    let { raw, len } = n;
    if (typeof raw !== "string" || typeof len !== "number") {
        return null;
    }
    return `input JSON failed to parse \u2014 ${len} bytes`;
}
const be = 8192;
function se(e, i) {
    try {
        return {
            ok: true,
            value: JSON.parse(Io(e))
        };
    } catch (error) {
        if (i) {
            c(ot(error, `safeParseJSON: invalid JSON (${error instanceof Error ? error.constructor.name : typeof error}, ${e.length} bytes)`));
        }
        return {
            ok: false
        };
    }
}
class oe {
    cached = MO(se, (e)=>e, 50);
    cache = this.cached.cache;
    parse(e, i) {
        return this.cached(e, i);
    }
}
const le = new oe;
function GF(e) {
    return e.trim().replace(/^```[a-zA-Z]*\s*/, "").replace(/\s*```$/, "").trim();
}
const mt = Object.assign(function(i, r = true) {
    if (!i) {
        return null;
    }
    let n = i.length > be ? se(i, r) : le.parse(i, r);
    if (n.ok) {
        return n.value;
    }
    return null;
}, {
    cache: le.cache
});
function Gxe(e) {
    if (!e) {
        return null;
    }
    try {
        return kUe(Io(e));
    } catch (error) {
        t(`Failed to parse JSONC: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
        });
        return null;
    }
}
function jko() {
    return Bun.JSONL?.parseChunk;
}
function ye(e, i) {
    let e_length = e.length;
    let n = i(e);
    if (!n.error || n.done || n.read >= e_length) {
        return n.values;
    }
    let { values, read } = n;
    while(read < e_length){
        let u = typeof e === "string" ? e.indexOf(`
`, read) : e.indexOf(10, read);
        if (u === -1) {
            break;
        }
        read = u + 1;
        let o = i(e, read);
        if (o.values.length > 0) {
            values = values.concat(o.values);
        }
        if (!o.error || o.done || o.read >= e_length) {
            break;
        }
        read = o.read;
    }
    return values;
}
function Oe(e) {
    let e_length = e.length;
    let r = 0;
    if (e[0] === 239 && e[1] === 187 && e[2] === 191) {
        r = 3;
    }
    let n = [];
    while(r < e_length){
        let l = e.indexOf(10, r);
        if (l === -1) {
            l = e_length;
        }
        let s = e.toString("utf8", r, l).trim();
        r = l + 1;
        if (!s) {
            continue;
        }
        try {
            n.push(JSON.parse(s));
        } catch  {}
    }
    return n;
}
function Te(e) {
    let i = Io(e);
    let i_length = i.length;
    let n = 0;
    let l = [];
    while(n < i_length){
        let s = i.indexOf(`
`, n);
        if (s === -1) {
            s = i_length;
        }
        let u = i.substring(n, s).trim();
        n = s + 1;
        if (!u) {
            continue;
        }
        try {
            l.push(JSON.parse(u));
        } catch  {}
    }
    return l;
}
function vut(e) {
    let i = jko();
    if (i) {
        return ye(e, i);
    }
    if (typeof e === "string") {
        return Te(e);
    }
    return Oe(e);
}
const F = 104857600;
async function Eut(e) {
    let { size } = await stat(e);
    if (size <= F) {
        return vut(await readFile(e));
    }
    await using r = await open(e, "r");
    let n = Buffer.allocUnsafe(F);
    let l = 0;
    let s = size - F;
    while(l < F){
        let { bytesRead } = await r.read(n, l, F - l, s + l);
        if (bytesRead === 0) {
            break;
        }
        l += bytesRead;
    }
    let u = n.indexOf(10);
    if (u !== -1 && u < l - 1) {
        return vut(n.subarray(u + 1, l));
    }
    return vut(n.subarray(0, l));
}
function Wko(e, i, r) {
    if (!e || e.trim() === "") {
        return _({
            [i]: r
        }, null, 4);
    }
    let n = Io(e);
    try {
        let l = [];
        let s = kUe(n, l);
        if (l.length > 0 || s === null || typeof s !== "object" || Array.isArray(s)) {
            return e;
        }
        let u = Jnn(n, [
            i
        ], r, {
            formattingOptions: {
                insertSpaces: true,
                tabSize: 4
            }
        });
        if (!u || u.length === 0) {
            return n;
        }
        return Pzn(n, u);
    } catch (error) {
        t(`Failed to set JSONC property "${i}": ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
        });
        return e;
    }
}
function nPs(e, i) {
    try {
        if (!e || e.trim() === "") {
            return _([
                i
            ], null, 4);
        }
        let r = Io(e);
        let n = kUe(r);
        if (Array.isArray(n)) {
            let l = n.length;
            let o = Jnn(r, l === 0 ? [
                0
            ] : [
                l
            ], i, {
                formattingOptions: {
                    insertSpaces: true,
                    tabSize: 4
                },
                isArrayInsertion: true
            });
            if (!o || o.length === 0) {
                let f = [
                    ...n,
                    i
                ];
                return _(f, null, 4);
            }
            return Pzn(r, o);
        } else {
            return _([
                i
            ], null, 4);
        }
    } catch (error) {
        t(`Failed to insert item into user JSONC array, falling back to overwrite: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
        });
        return _([
            i
        ], null, 4);
    }
}
export { Io, kUe, Jnn, Pzn, bHt, zxe, jY, GF, mt, Gxe, jko, vut, Eut, Wko, nPs };
