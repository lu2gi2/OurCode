const Ne = {
    parse
};
function kb() {
    return Ne;
}
var j = new Set([
    "?",
    "$",
    "@",
    "*",
    "#",
    "-",
    "!",
    "_"
]);
var ee = new Set([
    "#",
    "^",
    "=",
    "~",
    "+"
]);
function Ie(e, o) {
    let src = e.L.src;
    let s = o;
    while(s < e.L.len && ee.has(src[s])){
        s++;
    }
    let i = false;
    while(s < e.L.len){
        let r = src[s];
        if (C(r)) {
            s++;
        } else if (r >= "\x80") {
            i = true;
            s++;
        } else {
            break;
        }
    }
    if (i) {
        return s;
    }
    return -1;
}
var Ee = new Set([
    "export",
    "declare",
    "typeset",
    "readonly",
    "local"
]);
var $yr = new Set([
    "if",
    "then",
    "elif",
    "else",
    "fi",
    "while",
    "until",
    "for",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "function",
    "select"
]);
function Oe(e) {
    return {
        src: e,
        len: e.length,
        i: 0,
        b: 0,
        heredocs: [],
        byteTable: null,
        zshCondParenDiff: false
    };
}
function n(e) {
    let o = e.src.charCodeAt(e.i);
    e.i++;
    if (o < 128) {
        e.b++;
    } else if (o < 2048) {
        e.b += 2;
    } else if (o >= 55296 && o <= 56319) {
        e.b += 4;
        e.i++;
    } else {
        e.b += 3;
    }
}
function L(e, o = 0) {
    if (e.i + o < e.len) {
        return e.src[e.i + o];
    }
    return "";
}
function ge(e, o) {
    if (e.byteTable) {
        return e.byteTable[o];
    }
    let t = new Uint32Array(e.len + 1);
    let s = 0;
    let i = 0;
    while(i < e.len){
        t[i] = s;
        let r = e.src.charCodeAt(i);
        if (r < 128) {
            s++;
            i++;
        } else if (r < 2048) {
            s += 2;
            i++;
        } else if (r >= 55296 && r <= 56319) {
            t[i + 1] = s + 2;
            s += 4;
            i += 2;
        } else {
            s += 3;
            i++;
        }
    }
    t[e.len] = s;
    e.byteTable = t;
    return t[o];
}
function we(e) {
    return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "_" || e === "/" || e === "." || e === "-" || e === "+" || e === ":" || e === "@" || e === "%" || e === "," || e === "~" || e === "^" || e === "?" || e === "*" || e === "!" || e === "=" || e === "[" || e === "]" || e >= "\x80";
}
function Re(e) {
    return we(e) || e === "\\";
}
function Te(e) {
    return e === "" || e === " " || e === "\t" || e === `
` || e === "\r" || e === ";" || e === "&" || e === "|" || e === "(" || e === ")" || e === "<" || e === ">";
}
function Le(e) {
    return Te(e) && e !== "(";
}
function O(e) {
    return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_";
}
function C(e) {
    return O(e) || e >= "0" && e <= "9";
}
function E(e) {
    return e >= "0" && e <= "9";
}
function De(e) {
    return E(e) || e >= "a" && e <= "f" || e >= "A" && e <= "F";
}
function Ae(e) {
    return C(e) || e === "@";
}
function $e(e) {
    return e !== "" && e !== " " && e !== "\t" && e !== `
` && e !== "<" && e !== ">" && e !== "|" && e !== "&" && e !== ";" && e !== "(" && e !== ")" && e !== "'" && e !== '"' && e !== "`" && e !== "\\";
}
function h(e) {
    while(e.i < e.len){
        let o = e.src[e.i];
        if (o === " " || o === "\t" || o === "\r") {
            n(e);
        } else if (o === "\\") {
            if (e.src[e.i + 1] === `
`) {
                n(e);
                n(e);
            } else {
                break;
            }
        } else {
            break;
        }
    }
}
function Ce(e) {
    while(e.i < e.len){
        let o = e.src[e.i];
        if (o === " " || o === "\t") {
            n(e);
        } else if (o === "\\" && e.src[e.i + 1] === `
`) {
            n(e);
            n(e);
        } else {
            break;
        }
    }
}
function T(e, o = "arg") {
    h(e);
    let t = e.b;
    if (e.i >= e.len) {
        return {
            type: "EOF",
            value: "",
            start: t,
            end: t
        };
    }
    let s = e.src[e.i];
    let i = L(e, 1);
    let r = L(e, 2);
    if (s === `
`) {
        n(e);
        return {
            type: "NEWLINE",
            value: `
`,
            start: t,
            end: e.b
        };
    }
    if (s === "#") {
        let l = e.i > 0 ? e.src[e.i - 1] : "";
        if (l === "" || " \t\n;&|<>()`".includes(l)) {
            let c = e.i;
            while(e.i < e.len && e.src[e.i] !== `
`){
                n(e);
            }
            return {
                type: "COMMENT",
                value: e.src.slice(c, e.i),
                start: t,
                end: e.b
            };
        }
    }
    if (s === "&" && i === "&") {
        n(e);
        n(e);
        return {
            type: "OP",
            value: "&&",
            start: t,
            end: e.b
        };
    }
    if (s === "|" && i === "|") {
        n(e);
        n(e);
        return {
            type: "OP",
            value: "||",
            start: t,
            end: e.b
        };
    }
    if (s === "|" && i === "&") {
        n(e);
        n(e);
        return {
            type: "OP",
            value: "|&",
            start: t,
            end: e.b
        };
    }
    if (s === ";" && i === ";" && r === "&") {
        n(e);
        n(e);
        n(e);
        return {
            type: "OP",
            value: ";;&",
            start: t,
            end: e.b
        };
    }
    if (s === ";" && i === ";") {
        n(e);
        n(e);
        return {
            type: "OP",
            value: ";;",
            start: t,
            end: e.b
        };
    }
    if (s === ";" && i === "&") {
        n(e);
        n(e);
        return {
            type: "OP",
            value: ";&",
            start: t,
            end: e.b
        };
    }
    if (s === ">" && i === ">") {
        n(e);
        n(e);
        return {
            type: "OP",
            value: ">>",
            start: t,
            end: e.b
        };
    }
    if (s === ">" && i === "&" && r === "-") {
        n(e);
        n(e);
        n(e);
        return {
            type: "OP",
            value: ">&-",
            start: t,
            end: e.b
        };
    }
    if (s === ">" && i === "&") {
        n(e);
        n(e);
        return {
            type: "OP",
            value: ">&",
            start: t,
            end: e.b
        };
    }
    if (s === ">" && i === "|") {
        n(e);
        n(e);
        return {
            type: "OP",
            value: ">|",
            start: t,
            end: e.b
        };
    }
    if (s === "&" && i === ">" && r === ">") {
        n(e);
        n(e);
        n(e);
        return {
            type: "OP",
            value: "&>>",
            start: t,
            end: e.b
        };
    }
    if (s === "&" && i === ">") {
        n(e);
        n(e);
        return {
            type: "OP",
            value: "&>",
            start: t,
            end: e.b
        };
    }
    if (s === "<" && i === "<" && r === "<") {
        n(e);
        n(e);
        n(e);
        return {
            type: "OP",
            value: "<<<",
            start: t,
            end: e.b
        };
    }
    if (s === "<" && i === "<" && r === "-") {
        n(e);
        n(e);
        n(e);
        return {
            type: "OP",
            value: "<<-",
            start: t,
            end: e.b
        };
    }
    if (s === "<" && i === "<") {
        n(e);
        n(e);
        return {
            type: "OP",
            value: "<<",
            start: t,
            end: e.b
        };
    }
    if (s === "<" && i === "&" && r === "-") {
        n(e);
        n(e);
        n(e);
        return {
            type: "OP",
            value: "<&-",
            start: t,
            end: e.b
        };
    }
    if (s === "<" && i === "&") {
        n(e);
        n(e);
        return {
            type: "OP",
            value: "<&",
            start: t,
            end: e.b
        };
    }
    if (s === "<" && i === "(") {
        n(e);
        n(e);
        return {
            type: "LT_PAREN",
            value: "<(",
            start: t,
            end: e.b
        };
    }
    if (s === ">" && i === "(") {
        n(e);
        n(e);
        return {
            type: "GT_PAREN",
            value: ">(",
            start: t,
            end: e.b
        };
    }
    if (s === "(" && i === "(") {
        n(e);
        n(e);
        return {
            type: "OP",
            value: "((",
            start: t,
            end: e.b
        };
    }
    if (s === ")" && i === ")") {
        n(e);
        n(e);
        return {
            type: "OP",
            value: "))",
            start: t,
            end: e.b
        };
    }
    if (s === "|" || s === "&" || s === ";" || s === ">" || s === "<") {
        n(e);
        return {
            type: "OP",
            value: s,
            start: t,
            end: e.b
        };
    }
    if (s === "(" || s === ")") {
        n(e);
        return {
            type: "OP",
            value: s,
            start: t,
            end: e.b
        };
    }
    if (o === "cmd") {
        if (s === "[") {
            let l = false;
            let c = (u)=>{
                while(e.src[u] === "\\"){
                    if (e.src[u + 1] === `
`) {
                        u += 2;
                        l = true;
                    } else if (e.src[u + 1] === "\r" && e.src[u + 2] === `
`) {
                        u += 3;
                        l = true;
                    } else {
                        break;
                    }
                }
                return u;
            };
            let f = c(e.i + 1);
            if (e.src[f] === "[") {
                let u = c(f + 1);
                if (l && e.src[u] === "(") {
                    e.zshCondParenDiff = true;
                }
            }
        }
        if (s === "[" && i === "[" && (r === " " || r === "\t" || r === `
` || r === "" || r === "(")) {
            if (r === "(") {
                e.zshCondParenDiff = true;
            }
            n(e);
            n(e);
            return {
                type: "OP",
                value: "[[",
                start: t,
                end: e.b
            };
        }
        if (s === "[") {
            n(e);
            return {
                type: "OP",
                value: "[",
                start: t,
                end: e.b
            };
        }
        if (s === "{" && (i === " " || i === "\t" || i === `
`)) {
            n(e);
            return {
                type: "OP",
                value: "{",
                start: t,
                end: e.b
            };
        }
        if (s === "}") {
            n(e);
            return {
                type: "OP",
                value: "}",
                start: t,
                end: e.b
            };
        }
        if (s === "!" && (i === " " || i === "\t")) {
            n(e);
            return {
                type: "OP",
                value: "!",
                start: t,
                end: e.b
            };
        }
    }
    if (s === '"') {
        n(e);
        return {
            type: "DQUOTE",
            value: '"',
            start: t,
            end: e.b
        };
    }
    if (s === "'") {
        let l = e.i;
        n(e);
        while(e.i < e.len && e.src[e.i] !== "'"){
            n(e);
        }
        if (e.i < e.len) {
            n(e);
        }
        return {
            type: "SQUOTE",
            value: e.src.slice(l, e.i),
            start: t,
            end: e.b
        };
    }
    if (s === "$") {
        if (i === "(" && r === "(") {
            n(e);
            n(e);
            n(e);
            return {
                type: "DOLLAR_DPAREN",
                value: "$((",
                start: t,
                end: e.b
            };
        }
        if (i === "(") {
            n(e);
            n(e);
            return {
                type: "DOLLAR_PAREN",
                value: "$(",
                start: t,
                end: e.b
            };
        }
        if (i === "{") {
            n(e);
            n(e);
            return {
                type: "DOLLAR_BRACE",
                value: "${",
                start: t,
                end: e.b
            };
        }
        if (i === "'") {
            let l = e.i;
            n(e);
            n(e);
            while(e.i < e.len && e.src[e.i] !== "'"){
                if (e.src[e.i] === "\\" && e.i + 1 < e.len) {
                    n(e);
                }
                n(e);
            }
            if (e.i < e.len) {
                n(e);
            }
            return {
                type: "ANSI_C",
                value: e.src.slice(l, e.i),
                start: t,
                end: e.b
            };
        }
        n(e);
        return {
            type: "DOLLAR",
            value: "$",
            start: t,
            end: e.b
        };
    }
    if (s === "`") {
        n(e);
        return {
            type: "BACKTICK",
            value: "`",
            start: t,
            end: e.b
        };
    }
    if (E(s)) {
        let l = e.i;
        while(l < e.len && E(e.src[l])){
            l++;
        }
        let c = l < e.len ? e.src[l] : "";
        if (c === ">" || c === "<") {
            let f = e.i;
            while(e.i < l){
                n(e);
            }
            return {
                type: "WORD",
                value: e.src.slice(f, e.i),
                start: t,
                end: e.b
            };
        }
    }
    if (Re(s) || s === "{" || s === "}") {
        let l = e.i;
        while(e.i < e.len){
            let c = e.src[e.i];
            if (c === "\\") {
                if (e.i + 1 >= e.len) {
                    break;
                }
                if (e.src[e.i + 1] === `
`) {
                    n(e);
                    n(e);
                    continue;
                }
                n(e);
                n(e);
                continue;
            }
            if (!we(c) && c !== "{" && c !== "}" && c !== "#") {
                break;
            }
            n(e);
        }
        if (e.i > l) {
            let c = e.src.slice(l, e.i);
            if (/^-?\d+$/.test(c)) {
                return {
                    type: "NUMBER",
                    value: c,
                    start: t,
                    end: e.b
                };
            }
            return {
                type: "WORD",
                value: c,
                start: t,
                end: e.b
            };
        }
    }
    n(e);
    return {
        type: "WORD",
        value: s,
        start: t,
        end: e.b
    };
}
function parse(e, o) {
    let L_1 = Oe(e);
    let srcBytes = Me(e);
    if (srcBytes >= 67108864) {
        return null;
    }
    let i = {
        L: L_1,
        src: e,
        srcBytes,
        isAscii: srcBytes === e.length,
        nodeCount: 0,
        deadline: performance.now() + (o ?? 50),
        aborted: false,
        inBacktick: 0,
        inDquote: 0,
        stopToken: null,
        zshBraceDiff: false
    };
    try {
        let r = ze(i);
        if (i.aborted) {
            return null;
        }
        if (i.zshBraceDiff) {
            return a(i, "ERROR", r.startIndex, r.endIndex, [
                r
            ]);
        }
        if (i.L.zshCondParenDiff) {
            return a(i, "ERROR", r.startIndex, r.endIndex, [
                r
            ]);
        }
        return r;
    } catch  {
        return null;
    }
}
function Me(e) {
    let o = 0;
    for(let t = 0; t < e.length; t++){
        let s = e.charCodeAt(t);
        if (s < 128) {
            o++;
        } else if (s < 2048) {
            o += 2;
        } else if (s >= 55296 && s <= 56319) {
            o += 4;
            t++;
        } else {
            o += 3;
        }
    }
    return o;
}
function We(e) {
    e.nodeCount++;
    if (e.nodeCount > 50000) {
        e.aborted = true;
        throw Error("budget");
    }
    if ((e.nodeCount & 127) === 0 && performance.now() > e.deadline) {
        e.aborted = true;
        throw Error("timeout");
    }
}
function a(e, type, startIndex, endIndex, children) {
    We(e);
    return {
        type,
        text: z(e, startIndex, endIndex),
        startIndex,
        endIndex,
        children
    };
}
function Fyr(e) {
    return /\$(?:\{(?:\([^)}]{0,32}\))?)?[#^=~+!]*(?:[A-Za-z_]\w*)?[\u0080-\uffff]/.test(e);
}
function z(e, o, t) {
    if (e.isAscii) {
        return e.src.slice(o, t);
    }
    let s = e.L;
    if (!s.byteTable) {
        ge(s, 0);
    }
    let s_byteTable = s.byteTable;
    let r = 0;
    let length = e.src.length;
    while(r < length){
        let f = r + length >>> 1;
        if (s_byteTable[f] < o) {
            r = f + 1;
        } else {
            length = f;
        }
    }
    let c = r;
    r = c;
    length = e.src.length;
    while(r < length){
        let f = r + length >>> 1;
        if (s_byteTable[f] < t) {
            r = f + 1;
        } else {
            length = f;
        }
    }
    return e.src.slice(c, r);
}
function y(e, o, t) {
    return a(e, o, t.start, t.end, []);
}
function ze(e) {
    let o = [];
    h(e.L);
    while(true){
        let i = k(e.L);
        if (T(e.L, "cmd").type === "NEWLINE") {
            h(e.L);
            continue;
        }
        v(e.L, i);
        break;
    }
    let t = e.L.b;
    while(e.L.i < e.L.len){
        let i = k(e.L);
        let r = T(e.L, "cmd");
        if (r.type === "EOF") {
            break;
        }
        if (r.type === "NEWLINE") {
            continue;
        }
        if (r.type === "COMMENT") {
            o.push(y(e, "comment", r));
            continue;
        }
        v(e.L, i);
        let l = D(e, null);
        for (let c of l){
            o.push(c);
        }
        if (l.length === 0) {
            let c = T(e.L, "cmd");
            if (c.type === "EOF") {
                break;
            }
            if (c.type === "OP" && c.value === ";;" && o.length > 0) {
                continue;
            }
            o.push(a(e, "ERROR", c.start, c.end, []));
        }
    }
    let s = o.length > 0 ? e.srcBytes : t;
    return a(e, "program", t, s, o);
}
function k(e) {
    return e.b * 67108864 + e.i;
}
function v(e, o) {
    let t = Math.floor(o / 67108864);
    e.i = o - t * 67108864;
    e.b = t;
}
function D(e, o) {
    let t = [];
    while(true){
        h(e.L);
        let s = k(e.L);
        let i = T(e.L, "cmd");
        if (i.type === "EOF") {
            v(e.L, s);
            break;
        }
        if (i.type === "NEWLINE") {
            if (e.L.heredocs.length > 0) {
                ce(e);
            }
            continue;
        }
        if (i.type === "COMMENT") {
            t.push(y(e, "comment", i));
            continue;
        }
        if (o && i.type === "OP" && i.value === o) {
            v(e.L, s);
            break;
        }
        if (i.type === "OP" && (i.value === ")" || i.value === "}" || i.value === ";;" || i.value === ";&" || i.value === ";;&" || i.value === "))" || i.value === "]]" || i.value === "]")) {
            v(e.L, s);
            break;
        }
        if (i.type === "BACKTICK" && e.inBacktick > 0) {
            v(e.L, s);
            break;
        }
        if (i.type === "WORD" && (i.value === "then" || i.value === "elif" || i.value === "else" || i.value === "fi" || i.value === "do" || i.value === "done" || i.value === "esac")) {
            v(e.L, s);
            break;
        }
        v(e.L, s);
        let r = ke(e);
        if (!r) {
            break;
        }
        t.push(r);
        h(e.L);
        let l = k(e.L);
        let c = T(e.L, "cmd");
        if (c.type === "OP" && (c.value === ";" || c.value === "&")) {
            let f = k(e.L);
            let u = T(e.L, "cmd");
            v(e.L, f);
            t.push(y(e, c.value, c));
            if (u.type === "EOF" || u.type === "OP" && (u.value === ")" || u.value === "}" || u.value === ";;" || u.value === ";&" || u.value === ";;&") || u.type === "WORD" && (u.value === "then" || u.value === "elif" || u.value === "else" || u.value === "fi" || u.value === "do" || u.value === "done" || u.value === "esac")) {
                continue;
            }
        } else if (c.type === "NEWLINE") {
            if (e.L.heredocs.length > 0) {
                ce(e);
            }
            continue;
        } else {
            v(e.L, l);
        }
    }
    return t;
}
function ke(e) {
    let o = de(e);
    if (!o) {
        return null;
    }
    while(true){
        let t = k(e.L);
        let s = T(e.L, "cmd");
        if (s.type === "OP" && (s.value === "&&" || s.value === "||")) {
            let i = y(e, s.value, s);
            F(e);
            let r = de(e);
            if (!r) {
                o = a(e, "ERROR", o.startIndex, i.endIndex, [
                    o,
                    i
                ]);
                break;
            }
            if (r.type === "redirected_statement" && r.children.length >= 2) {
                let l = r.children[0];
                let c = r.children.slice(1);
                let f = a(e, "list", o.startIndex, l.endIndex, [
                    o,
                    i,
                    l
                ]);
                let u = c.at(-1);
                o = a(e, "redirected_statement", f.startIndex, u.endIndex, [
                    f,
                    ...c
                ]);
            } else {
                o = a(e, "list", o.startIndex, r.endIndex, [
                    o,
                    i,
                    r
                ]);
            }
        } else {
            v(e.L, t);
            break;
        }
    }
    return o;
}
function F(e) {
    while(true){
        let o = k(e.L);
        if (T(e.L, "cmd").type !== "NEWLINE") {
            v(e.L, o);
            break;
        }
    }
}
function de(e) {
    let o = K(e);
    if (!o) {
        return null;
    }
    let t = [
        o
    ];
    while(true){
        let i = k(e.L);
        let r = T(e.L, "cmd");
        if (r.type === "OP" && (r.value === "|" || r.value === "|&")) {
            let l = y(e, r.value, r);
            F(e);
            let c = K(e);
            if (!c) {
                t.push(l);
                break;
            }
            if (c.type === "redirected_statement" && c.children.length >= 2 && t.length >= 1) {
                let f = c.children[0];
                let u = c.children.slice(1);
                let d = [
                    ...t,
                    l,
                    f
                ];
                let b = a(e, "pipeline", d[0].startIndex, f.endIndex, d);
                let p = u.at(-1);
                let x = a(e, "redirected_statement", b.startIndex, p.endIndex, [
                    b,
                    ...u
                ]);
                t.length = 0;
                t.push(x);
                o = x;
                continue;
            }
            t.push(l, c);
        } else {
            v(e.L, i);
            break;
        }
    }
    if (t.length === 1) {
        return t[0];
    }
    let s = t.at(-1);
    return a(e, "pipeline", t[0].startIndex, s.endIndex, t);
}
function K(e) {
    h(e.L);
    let o = k(e.L);
    let t = T(e.L, "cmd");
    if (t.type === "EOF") {
        v(e.L, o);
        return null;
    }
    if (t.type === "OP" && t.value === "!") {
        let s = y(e, "!", t);
        let i = K(e);
        if (!i) {
            return a(e, "negated_command", s.startIndex, s.endIndex, [
                s
            ]);
        }
        if (i.type === "redirected_statement" && i.children.length >= 2) {
            let r = i.children[0];
            let l = i.children.slice(1);
            let c = a(e, "negated_command", s.startIndex, r.endIndex, [
                s,
                r
            ]);
            let f = l.at(-1);
            return a(e, "redirected_statement", c.startIndex, f.endIndex, [
                c,
                ...l
            ]);
        }
        return a(e, "negated_command", s.startIndex, i.endIndex, [
            s,
            i
        ]);
    }
    if (t.type === "OP" && t.value === "(") {
        let s = y(e, "(", t);
        let i = D(e, ")");
        let r = T(e.L, "cmd");
        let l = r.type === "OP" && r.value === ")" ? y(e, ")", r) : a(e, ")", s.endIndex, s.endIndex, []);
        let c = a(e, "subshell", s.startIndex, l.endIndex, [
            s,
            ...i,
            l
        ]);
        return M(e, c);
    }
    if (t.type === "OP" && t.value === "((") {
        let s = y(e, "((", t);
        let i = X(e, "))", "var");
        let r = T(e.L, "cmd");
        let l = r.value === "))" ? y(e, "))", r) : a(e, "))", s.endIndex, s.endIndex, []);
        return a(e, "compound_statement", s.startIndex, l.endIndex, [
            s,
            ...i,
            l
        ]);
    }
    if (t.type === "OP" && t.value === "{") {
        let s = y(e, "{", t);
        let i = D(e, "}");
        let r = T(e.L, "cmd");
        let l = r.type === "OP" && r.value === "}" ? y(e, "}", r) : a(e, "}", s.endIndex, s.endIndex, []);
        let c = a(e, "compound_statement", s.startIndex, l.endIndex, [
            s,
            ...i,
            l
        ]);
        return M(e, c);
    }
    if (t.type === "OP" && (t.value === "[" || t.value === "[[")) {
        let s = y(e, t.value, t);
        let i = t.value === "[" ? "]" : "]]";
        let r = k(e.L);
        let l = he(e, i);
        h(e.L);
        if (t.value === "[" && L(e.L) !== "]") {
            v(e.L, r);
            let b = e.stopToken;
            e.stopToken = "]";
            let p = K(e);
            e.stopToken = b;
            if (p && p.type === "redirected_statement") {
                l = p;
            } else {
                v(e.L, r);
                l = he(e, i);
            }
            h(e.L);
        }
        let c = k(e.L);
        let f = T(e.L, "arg");
        let u;
        if (f.value === i && Le(L(e.L))) {
            u = y(e, i, f);
        } else {
            v(e.L, c);
            u = a(e, i, s.endIndex, s.endIndex, []);
        }
        let d = l ? [
            s,
            l,
            u
        ] : [
            s,
            u
        ];
        return M(e, a(e, "test_command", s.startIndex, u.endIndex, d));
    }
    if (t.type === "WORD" && Te(L(e.L))) {
        if (t.value === "if") {
            return M(e, Ge(e, t), true);
        }
        if (t.value === "while" || t.value === "until") {
            return M(e, Ye(e, t), true);
        }
        if (t.value === "for") {
            return M(e, pe(e, t), true);
        }
        if (t.value === "select") {
            return M(e, pe(e, t), true);
        }
        if (t.value === "case") {
            return M(e, Je(e, t), true);
        }
        if (t.value === "function") {
            return tn(e, t);
        }
        if (Ee.has(t.value)) {
            return M(e, sn(e, t));
        }
        if (t.value === "unset" || t.value === "unsetenv") {
            let s = k(e.L);
            h(e.L);
            let i = false;
            if (L(e.L) === "(") {
                T(e.L, "cmd");
                h(e.L);
                i = L(e.L) === ")";
            }
            v(e.L, s);
            if (!i) {
                return M(e, rn(e, t));
            }
        }
    }
    v(e.L, o);
    return Fe(e);
}
function Fe(e) {
    let o = e.L.b;
    let t = [];
    let s = [];
    while(true){
        h(e.L);
        let m = Se(e);
        if (m) {
            t.push(m);
            continue;
        }
        let _ = U(e);
        if (_) {
            s.push(_);
            continue;
        }
        break;
    }
    h(e.L);
    let i = k(e.L);
    let r = T(e.L, "cmd");
    if (r.type === "EOF" || r.type === "NEWLINE" || r.type === "COMMENT" || r.type === "BACKTICK" || r.type === "OP" && r.value !== "{" && r.value !== "[" && r.value !== "[[" || r.type === "WORD" && $yr.has(r.value) && r.value !== "in") {
        v(e.L, i);
        if (t.length === 1 && s.length === 0) {
            return t[0];
        }
        if (s.length > 0 && t.length === 0) {
            let m = s.at(-1);
            return a(e, "redirected_statement", s[0].startIndex, m.endIndex, s);
        }
        if (t.length > 1 && s.length === 0) {
            let m = t.at(-1);
            return a(e, "variable_assignments", t[0].startIndex, m.endIndex, t);
        }
        if (t.length > 0 || s.length > 0) {
            let m = [
                ...t,
                ...s
            ];
            let _ = m.at(-1);
            return a(e, "command", o, _.endIndex, m);
        }
        return null;
    }
    v(e.L, i);
    let l = k(e.L);
    let c = A(e, "cmd");
    if (c && c.type === "word") {
        h(e.L);
        let m = false;
        if (L(e.L) === "(") {
            let _ = k(e.L);
            T(e.L, "cmd");
            h(e.L);
            m = L(e.L) === ")";
            v(e.L, _);
        }
        if (m) {
            let _ = T(e.L, "cmd");
            h(e.L);
            let S = T(e.L, "cmd");
            let N = y(e, "(", _);
            let R = y(e, ")", S);
            h(e.L);
            F(e);
            let B = K(e);
            if (B) {
                let H = [
                    B
                ];
                if (B.type === "redirected_statement" && B.children.length >= 2 && B.children[0].type === "compound_statement") {
                    H = B.children;
                }
                let re = H.at(-1);
                return a(e, "function_definition", c.startIndex, re.endIndex, [
                    c,
                    N,
                    R,
                    ...H
                ]);
            }
        }
    }
    v(e.L, l);
    let f = A(e, "cmd");
    if (!f) {
        if (t.length === 1) {
            return t[0];
        }
        return null;
    }
    let u = a(e, "command_name", f.startIndex, f.endIndex, [
        f
    ]);
    let d = [];
    let b = [];
    let p = null;
    while(true){
        h(e.L);
        let m = U(e, true);
        if (m) {
            if (m.type === "heredoc_redirect") {
                p = m;
            } else if (m.type === "herestring_redirect") {
                d.push(m);
            } else {
                b.push(m);
            }
            continue;
        }
        if (b.length > 0) {
            break;
        }
        if (e.stopToken === "]" && L(e.L) === "]") {
            break;
        }
        let _ = k(e.L);
        let S = T(e.L, "arg");
        if (S.type === "EOF" || S.type === "NEWLINE" || S.type === "COMMENT" || S.type === "OP" && (S.value === "|" || S.value === "|&" || S.value === "&&" || S.value === "||" || S.value === ";" || S.value === ";;" || S.value === ";&" || S.value === ";;&" || S.value === "&" || S.value === ")" || S.value === "}" || S.value === "))")) {
            v(e.L, _);
            break;
        }
        v(e.L, _);
        let N = A(e, "arg");
        if (!N) {
            if (L(e.L) === "(") {
                let R = T(e.L, "cmd");
                let B = y(e, "(", R);
                let H = D(e, ")");
                let re = k(e.L);
                let oe = T(e.L, "cmd");
                let G;
                if (oe.type === "OP" && oe.value === ")") {
                    G = y(e, ")", oe);
                } else {
                    v(e.L, re);
                    G = a(e, ")", B.endIndex, B.endIndex, []);
                }
                d.push(a(e, "subshell", B.startIndex, G.endIndex, [
                    B,
                    ...H,
                    G
                ]));
                continue;
            }
            break;
        }
        if (N.type === "word" && N.text === "=") {
            d.push(a(e, "ERROR", N.startIndex, N.endIndex, [
                N
            ]));
            continue;
        }
        if ((N.type === "word" || N.type === "concatenation") && L(e.L) === "(" && e.L.b === N.endIndex) {
            d.push(a(e, "ERROR", N.startIndex, N.endIndex, [
                N
            ]));
            continue;
        }
        d.push(N);
    }
    let x = [
        ...t,
        ...s,
        u,
        ...d
    ];
    let I = x.length > 0 ? x.at(-1).endIndex : u.endIndex;
    let startIndex = x[0].startIndex;
    let g = a(e, "command", startIndex, I, x);
    if (p) {
        ce(e);
        let m = e.L.heredocs.shift();
        if (m && p.children.length >= 2) {
            let N = a(e, "heredoc_body", m.bodyStart, m.bodyEnd, m.quoted ? [] : Ue(e, m.bodyStart, m.bodyEnd));
            let R = a(e, "heredoc_end", m.endStart, m.endEnd, []);
            p.children.push(N, R);
            p.endIndex = m.endEnd;
            p.text = z(e, p.startIndex, m.endEnd);
        }
        let _ = [
            ...s,
            p,
            ...b
        ];
        let S = s.length > 0 ? Math.min(g.startIndex, s[0].startIndex) : g.startIndex;
        return a(e, "redirected_statement", S, p.endIndex, [
            g,
            ..._
        ]);
    }
    if (b.length > 0) {
        let m = b.at(-1);
        return a(e, "redirected_statement", g.startIndex, m.endIndex, [
            g,
            ...b
        ]);
    }
    return g;
}
function M(e, o, t = false) {
    let s = [];
    while(true){
        h(e.L);
        let r = k(e.L);
        let l = U(e);
        if (!l) {
            break;
        }
        if (l.type === "herestring_redirect" && !t) {
            v(e.L, r);
            break;
        }
        s.push(l);
    }
    if (s.length === 0) {
        return o;
    }
    let i = s.at(-1);
    return a(e, "redirected_statement", o.startIndex, i.endIndex, [
        o,
        ...s
    ]);
}
function Se(e) {
    let o = k(e.L);
    h(e.L);
    let t = e.L.b;
    if (!O(L(e.L))) {
        v(e.L, o);
        return null;
    }
    while(C(L(e.L))){
        n(e.L);
    }
    let s = e.L.b;
    let i = s;
    if (L(e.L) === "[") {
        n(e.L);
        let g = 1;
        while(e.L.i < e.L.len && g > 0){
            let m = L(e.L);
            if (m === "[") {
                g++;
            } else if (m === "]") {
                g--;
            }
            n(e.L);
        }
        i = e.L.b;
    }
    let r = L(e.L);
    let l = L(e.L, 1);
    let c;
    if (r === "=" && l !== "=") {
        c = "=";
    } else if (r === "+" && l === "=") {
        c = "+=";
    } else {
        v(e.L, o);
        return null;
    }
    let f = a(e, "variable_name", t, s, []);
    let u = f;
    if (i > s) {
        let g = a(e, "[", s, s + 1, []);
        let m = Ke(e, s + 1, i - 1);
        let _ = a(e, "]", i - 1, i, []);
        u = a(e, "subscript", t, i, [
            f,
            g,
            m,
            _
        ]);
    }
    let d = e.L.b;
    n(e.L);
    if (c === "+=") {
        n(e.L);
    }
    let b = e.L.b;
    let p = a(e, c, d, b, []);
    let x = null;
    if (L(e.L) === "(") {
        let g = T(e.L, "cmd");
        let m = y(e, "(", g);
        let _ = [
            m
        ];
        while(true){
            h(e.L);
            if (L(e.L) === ")") {
                break;
            }
            let R = A(e, "arg");
            if (!R) {
                break;
            }
            _.push(R);
        }
        let S = T(e.L, "cmd");
        let N = S.value === ")" ? y(e, ")", S) : a(e, ")", m.endIndex, m.endIndex, []);
        _.push(N);
        x = a(e, "array", m.startIndex, N.endIndex, _);
    } else {
        let g = L(e.L);
        if (g && g !== " " && g !== "\t" && g !== `
` && g !== ";" && g !== "&" && g !== "|" && g !== ")" && g !== "}") {
            x = A(e, "arg");
        }
    }
    let I = x ? [
        u,
        p,
        x
    ] : [
        u,
        p
    ];
    let w = x ? x.endIndex : b;
    return a(e, "variable_assignment", t, w, I);
}
function qe(e) {
    h(e.L);
    let o = L(e.L);
    if ((o === "@" || o === "*") && L(e.L, 1) === "]") {
        let t = e.L.b;
        n(e.L);
        return a(e, "word", t, e.L.b, []);
    }
    if (o === "(" && L(e.L, 1) === "(") {
        let t = e.L.b;
        n(e.L);
        n(e.L);
        let s = a(e, "((", t, e.L.b, []);
        let i = ne(e, "))", "var");
        h(e.L);
        let r;
        if (L(e.L) === ")" && L(e.L, 1) === ")") {
            let c = e.L.b;
            n(e.L);
            n(e.L);
            r = a(e, "))", c, e.L.b, []);
        } else {
            r = a(e, "))", e.L.b, e.L.b, []);
        }
        let l = i ? [
            s,
            i,
            r
        ] : [
            s,
            r
        ];
        return a(e, "compound_statement", s.startIndex, r.endIndex, l);
    }
    return ne(e, "]", "word");
}
function Ke(e, o, t) {
    let s = z(e, o, t);
    if (/^\d+$/.test(s)) {
        return a(e, "number", o, t, []);
    }
    if (/^\$([a-zA-Z_]\w*)$/.exec(s)) {
        let r = a(e, "$", o, o + 1, []);
        let l = a(e, "variable_name", o + 1, t, []);
        return a(e, "simple_expansion", o, t, [
            r,
            l
        ]);
    }
    if (s.length === 2 && s[0] === "$" && j.has(s[1])) {
        let r = a(e, "$", o, o + 1, []);
        let l = a(e, "special_variable_name", o + 1, t, []);
        return a(e, "simple_expansion", o, t, [
            r,
            l
        ]);
    }
    return a(e, "word", o, t, []);
}
function be(e) {
    let o = L(e.L);
    if (o === "" || o === `
`) {
        return false;
    }
    if (o === "|" || o === "&" || o === ";" || o === "(" || o === ")") {
        return false;
    }
    if (o === "<" || o === ">") {
        return L(e.L, 1) === "(";
    }
    if (E(o)) {
        let t = e.L.i;
        while(t < e.L.len && E(e.L.src[t])){
            t++;
        }
        let s = t < e.L.len ? e.L.src[t] : "";
        if (s === ">" || s === "<") {
            return false;
        }
    }
    if (o === "}") {
        return false;
    }
    if (e.stopToken === "]" && o === "]") {
        return false;
    }
    return true;
}
function U(e, o = false) {
    let t = k(e.L);
    h(e.L);
    let s = null;
    if (E(L(e.L))) {
        let l = e.L.b;
        let c = e.L.i;
        while(c < e.L.len && E(e.L.src[c])){
            c++;
        }
        let f = c < e.L.len ? e.L.src[c] : "";
        if (f === ">" || f === "<") {
            while(e.L.i < c){
                n(e.L);
            }
            s = a(e, "file_descriptor", l, e.L.b, []);
        }
    }
    if (s === null && L(e.L) === "{") {
        let l = e.L.i + 1;
        if (l < e.L.len && /[A-Za-z_]/.test(e.L.src[l])) {
            while(l < e.L.len && /[A-Za-z0-9_]/.test(e.L.src[l])){
                l++;
            }
            if (e.L.src[l] === "[") {
                let c = 0;
                let f = false;
                let u = false;
                while(l < e.L.len){
                    let d = e.L.src[l];
                    if (f) {
                        if (d === "'") {
                            f = false;
                        }
                    } else if (u) {
                        if (d === "\\" && l + 1 < e.L.len) {
                            l++;
                        } else if (d === '"') {
                            u = false;
                        }
                    } else if (d === "\\" && l + 1 < e.L.len) {
                        l++;
                    } else if (d === "'") {
                        f = true;
                    } else if (d === '"') {
                        u = true;
                    } else if (d === "[") {
                        c++;
                    } else if (d === "]") {
                        c--;
                        if (c === 0) {
                            l++;
                            break;
                        }
                    } else if (d === "\\" && e.L.src[l + 1] === `
`) {
                        l += 2;
                        continue;
                    } else if (d === `
`) {
                        break;
                    }
                    l++;
                }
            }
            if (e.L.src[l] === "}") {
                let c = l + 1 < e.L.len ? e.L.src[l + 1] : "";
                if (c === ">" || c === "<") {
                    let f = e.L.b;
                    while(e.L.i <= l){
                        n(e.L);
                    }
                    s = a(e, "variable_name", f, e.L.b, []);
                }
            }
        }
    }
    let i = T(e.L, "arg");
    if (i.type !== "OP") {
        v(e.L, t);
        return null;
    }
    let i_value = i.value;
    if (i_value === "<<<") {
        let l = y(e, "<<<", i);
        h(e.L);
        let c = A(e, "arg");
        let f = c ? c.endIndex : l.endIndex;
        let u = c ? [
            l,
            c
        ] : [
            l
        ];
        return a(e, "herestring_redirect", s ? s.startIndex : l.startIndex, f, s ? [
            s,
            ...u
        ] : u);
    }
    if (i_value === "<<" || i_value === "<<-") {
        let l = y(e, i_value, i);
        Ce(e.L);
        let c = e.L.b;
        let quoted = false;
        let delim = "";
        let d = L(e.L);
        if (d === "'" || d === '"') {
            quoted = true;
            n(e.L);
            while(e.L.i < e.L.len && L(e.L) !== d){
                delim += L(e.L);
                n(e.L);
            }
            if (e.L.i < e.L.len) {
                n(e.L);
            }
        } else if (d === "\\") {
            quoted = true;
            n(e.L);
            if (e.L.i < e.L.len && L(e.L) !== `
`) {
                delim += L(e.L);
                n(e.L);
            }
            while(e.L.i < e.L.len && C(L(e.L))){
                delim += L(e.L);
                n(e.L);
            }
        } else {
            while(e.L.i < e.L.len && $e(L(e.L))){
                delim += L(e.L);
                n(e.L);
            }
        }
        let b = e.L.b;
        if (d === '"' && /[`$\\\n]/.test(delim)) {
            e.aborted = true;
            throw Error("heredoc delimiter contains substitution/escape chars");
        }
        if (e.L.i < e.L.len) {
            let w = L(e.L);
            if (w !== " " && w !== "\t" && w !== `
` && w !== "<" && w !== ">" && w !== "|" && w !== "&" && w !== ";" && w !== "(" && w !== ")") {
                e.aborted = true;
                throw Error("heredoc delimiter word continues past scanned segment");
            }
        }
        if (/[\uD800-\uDFFF]/.test(delim)) {
            e.aborted = true;
            throw Error("heredoc delimiter contains astral/surrogate code unit");
        }
        let p = a(e, "heredoc_start", c, b, []);
        e.L.heredocs.push({
            delim,
            stripTabs: i_value === "<<-",
            quoted,
            bodyStart: 0,
            bodyEnd: 0,
            endStart: 0,
            endEnd: 0
        });
        let x = s ? [
            s,
            l,
            p
        ] : [
            l,
            p
        ];
        let I = s ? s.startIndex : l.startIndex;
        while(true){
            h(e.L);
            let w = L(e.L);
            if (w === `
` || w === "" || e.L.i >= e.L.len) {
                break;
            }
            if (w === ">" || w === "<" || E(w)) {
                let _ = k(e.L);
                let S = U(e);
                if (S && S.type === "file_redirect") {
                    x.push(S);
                    continue;
                }
                v(e.L, _);
            }
            if (w === "|" && L(e.L, 1) !== "|") {
                let _ = e.L.b;
                n(e.L);
                h(e.L);
                let S = [];
                while(true){
                    let N = K(e);
                    if (!N) {
                        break;
                    }
                    S.push(N);
                    h(e.L);
                    if (L(e.L) === "|" && L(e.L, 1) !== "|") {
                        let R = e.L.b;
                        n(e.L);
                        S.push(a(e, "|", R, e.L.b, []));
                        h(e.L);
                        continue;
                    }
                    break;
                }
                if (S.length > 0) {
                    let N = S.at(-1);
                    x.push(a(e, "pipeline", S[0].startIndex, N.endIndex, S));
                } else {
                    x.push(a(e, "ERROR", _, e.L.b, []));
                }
                continue;
            }
            if (w === "&" && L(e.L, 1) === "&" || w === "|" && L(e.L, 1) === "|") {
                let _ = e.L.b;
                n(e.L);
                n(e.L);
                h(e.L);
                let S = K(e);
                if (S) {
                    x.push(S);
                } else {
                    x.push(a(e, "ERROR", _, e.L.b, []));
                }
                continue;
            }
            if (w === "&" || w === ";" || w === "(" || w === ")") {
                let _ = e.L.b;
                while(e.L.i < e.L.len && L(e.L) !== `
`){
                    n(e.L);
                }
                x.push(a(e, "ERROR", _, e.L.b, []));
                break;
            }
            let g = A(e, "arg");
            if (g) {
                x.push(g);
                continue;
            }
            let m = e.L.b;
            while(e.L.i < e.L.len && L(e.L) !== `
`){
                n(e.L);
            }
            if (e.L.b > m) {
                x.push(a(e, "ERROR", m, e.L.b, []));
            }
            break;
        }
        return a(e, "heredoc_redirect", I, e.L.b, x);
    }
    if (i_value === "<&-" || i_value === ">&-") {
        let l = y(e, i_value, i);
        let c = [];
        if (s) {
            c.push(s);
        }
        c.push(l);
        h(e.L);
        let f = k(e.L);
        let u = be(e) ? A(e, "arg") : null;
        if (u) {
            c.push(u);
        } else {
            v(e.L, f);
        }
        let d = s ? s.startIndex : l.startIndex;
        let b = u ? u.endIndex : l.endIndex;
        return a(e, "file_redirect", d, b, c);
    }
    if (i_value === ">" || i_value === ">>" || i_value === ">&" || i_value === ">|" || i_value === "&>" || i_value === "&>>" || i_value === "<" || i_value === "<&") {
        let l = y(e, i_value, i);
        let c = [];
        if (s) {
            c.push(s);
        }
        c.push(l);
        let f = l.endIndex;
        let u = 0;
        while(true){
            h(e.L);
            if (!be(e)) {
                break;
            }
            if (!o && u >= 1) {
                break;
            }
            let b = L(e.L);
            let p = L(e.L, 1);
            let x = null;
            if ((b === "<" || b === ">") && p === "(") {
                x = te(e);
            } else {
                x = A(e, "arg");
            }
            if (!x) {
                break;
            }
            c.push(x);
            f = x.endIndex;
            u++;
        }
        let d = s ? s.startIndex : l.startIndex;
        return a(e, "file_redirect", d, f, c);
    }
    v(e.L, t);
    return null;
}
function te(e) {
    let o = L(e.L);
    if (o !== "<" && o !== ">" || L(e.L, 1) !== "(") {
        return null;
    }
    let t = e.L.b;
    n(e.L);
    n(e.L);
    let s = a(e, `${o}(`, t, e.L.b, []);
    let i = D(e, ")");
    h(e.L);
    let r;
    if (L(e.L) === ")") {
        let l = e.L.b;
        n(e.L);
        r = a(e, ")", l, e.L.b, []);
    } else {
        r = a(e, ")", e.L.b, e.L.b, []);
    }
    return a(e, "process_substitution", t, r.endIndex, [
        s,
        ...i,
        r
    ]);
}
function ce(e) {
    while(e.L.i < e.L.len && e.L.src[e.L.i] !== `
`){
        n(e.L);
    }
    if (e.L.i < e.L.len) {
        n(e.L);
    }
    for (let o of e.L.heredocs){
        o.bodyStart = e.L.b;
        let t = o.delim.length;
        if (o.stripTabs && o.delim.startsWith("\t")) {
            e.aborted = true;
            throw Error("ambiguous heredoc terminator (<<- tab-prefixed delim)");
        }
        while(e.L.i < e.L.len){
            let s = e.L.i;
            let i = e.L.b;
            let r = s;
            if (o.stripTabs) {
                while(r < e.L.len && e.L.src[r] === "\t"){
                    r++;
                }
            }
            if (e.L.src.startsWith(o.delim, r)) {
                let l = r + t;
                let c = l < e.L.len ? e.L.src[l] : "";
                if (c === "" || c === `
` || c === "\r") {
                    o.bodyEnd = i;
                    while(e.L.i < r){
                        n(e.L);
                    }
                    o.endStart = e.L.b;
                    for(let u = 0; u < t; u++){
                        n(e.L);
                    }
                    o.endEnd = e.L.b;
                    if (e.L.i < e.L.len && e.L.src[e.L.i] === `
`) {
                        n(e.L);
                    }
                    return;
                }
                let f = l;
                while(f < e.L.len){
                    let u = e.L.src[f];
                    if (u === `
`) {
                        break;
                    }
                    if (u === ")" || u === "`" || u === "}") {
                        e.aborted = true;
                        throw Error("ambiguous heredoc terminator (shell_eof_token)");
                    }
                    f++;
                }
            }
            while(e.L.i < e.L.len && e.L.src[e.L.i] !== `
`){
                n(e.L);
            }
            if (e.L.i < e.L.len) {
                n(e.L);
            }
        }
        o.bodyEnd = e.L.b;
        o.endStart = e.L.b;
        o.endEnd = e.L.b;
    }
}
function Ue(e, bodyStart, bodyEnd) {
    let s = k(e.L);
    je(e, bodyStart);
    let i = [];
    let r = e.L.b;
    let l = false;
    while(e.L.b < bodyEnd){
        let c = L(e.L);
        if (c === "\\") {
            let f = L(e.L, 1);
            if (f === "$" || f === "`" || f === "\\") {
                n(e.L);
                n(e.L);
                continue;
            }
            n(e.L);
            continue;
        }
        if (c === "$" || c === "`") {
            if (c === "$" && L(e.L, 1) === "'") {
                n(e.L);
                continue;
            }
            let f = e.L.b;
            let u = q(e);
            if (u && (u.type === "simple_expansion" || u.type === "expansion" || u.type === "command_substitution" || u.type === "arithmetic_expansion")) {
                if (l && f > r) {
                    i.push(a(e, "heredoc_content", r, f, []));
                }
                i.push(u);
                r = e.L.b;
                l = true;
            }
            continue;
        }
        n(e.L);
    }
    if (l) {
        i.push(a(e, "heredoc_content", r, bodyEnd, []));
    }
    v(e.L, s);
    return i;
}
function je(e, bodyStart) {
    if (!e.L.byteTable) {
        ge(e.L, 0);
    }
    let byteTable = e.L.byteTable;
    let s = 0;
    let length = e.src.length;
    while(s < length){
        let r = s + length >>> 1;
        if (byteTable[r] < bodyStart) {
            s = r + 1;
        } else {
            length = r;
        }
    }
    e.L.i = s;
    e.L.b = bodyStart;
}
function A(e, o) {
    h(e.L);
    let t = [];
    while(e.L.i < e.L.len){
        let r = L(e.L);
        if (r === " " || r === "\t" || r === `
` || r === "\r" || r === "" || r === "|" || r === "&" || r === ";" || r === "(" || r === ")") {
            break;
        }
        if (r === "<" || r === ">") {
            if (L(e.L, 1) === "(") {
                let c = te(e);
                if (c) {
                    t.push(c);
                }
                continue;
            }
            break;
        }
        if (r === '"') {
            t.push(W(e));
            continue;
        }
        if (r === "'") {
            let c = T(e.L, "arg");
            t.push(y(e, "raw_string", c));
            continue;
        }
        if (r === "$") {
            let c = L(e.L, 1);
            if (c === "'") {
                let u = T(e.L, "arg");
                t.push(y(e, "ansi_c_string", u));
                continue;
            }
            if (c === '"') {
                let u = {
                    type: "DOLLAR",
                    value: "$",
                    start: e.L.b,
                    end: e.L.b + 1
                };
                n(e.L);
                t.push(y(e, "$", u));
                t.push(W(e));
                continue;
            }
            if (c === "`") {
                let u = {
                    type: "DOLLAR",
                    value: "$",
                    start: e.L.b,
                    end: e.L.b + 1
                };
                n(e.L);
                t.push(y(e, "$", u));
                continue;
            }
            let f = q(e);
            if (f) {
                t.push(f);
            }
            continue;
        }
        if (r === "`") {
            if (e.inBacktick > 0) {
                break;
            }
            let c = se(e);
            t.push(c);
            continue;
        }
        if (r === "{") {
            let c = Qe(e);
            if (c) {
                t.push(c);
                continue;
            }
            let f = L(e.L, 1);
            if (f === ";" || f === "|" || f === "&" || f === `
` || f === "" || f === ")" || f === " " || f === "\t") {
                let d = e.L.b;
                n(e.L);
                t.push(a(e, "word", d, e.L.b, []));
                continue;
            }
            let u = Xe(e);
            if (u) {
                for (let d of u){
                    t.push(d);
                }
                continue;
            }
        }
        if (r === "}") {
            let c = e.L.b;
            n(e.L);
            t.push(a(e, "word", c, e.L.b, []));
            continue;
        }
        if (r === "[" || r === "]") {
            let c = e.L.b;
            n(e.L);
            t.push(a(e, "word", c, e.L.b, []));
            continue;
        }
        let l = He(e);
        if (!l) {
            break;
        }
        if (l.type === "word" && /^-?(0x)?[0-9]+#$/.test(l.text) && L(e.L) === "$" && (L(e.L, 1) === "{" || L(e.L, 1) === "(")) {
            let c = q(e);
            if (c) {
                t.push(a(e, "number", l.startIndex, c.endIndex, [
                    c
                ]));
                continue;
            }
        }
        t.push(l);
    }
    if (t.length === 0) {
        return null;
    }
    if (t.length === 1) {
        return t[0];
    }
    let s = t[0];
    let i = t.at(-1);
    return a(e, "concatenation", s.startIndex, i.endIndex, t);
}
function He(e) {
    let o = e.L.b;
    let t = e.L.i;
    while(e.L.i < e.L.len){
        let r = L(e.L);
        if (r === "\\") {
            if (e.L.i + 1 >= e.L.len) {
                break;
            }
            if (e.L.src[e.L.i + 1] === `
`) {
                break;
            }
            n(e.L);
            n(e.L);
            continue;
        }
        if (r === " " || r === "\t" || r === `
` || r === "\r" || r === "" || r === "|" || r === "&" || r === ";" || r === "(" || r === ")" || r === "<" || r === ">" || r === '"' || r === "'" || r === "$" || r === "`" || r === "{" || r === "}" || r === "[" || r === "]") {
            break;
        }
        n(e.L);
    }
    if (e.L.b === o) {
        return null;
    }
    let s = e.src.slice(t, e.L.i);
    let i = /^-?\d+$/.test(s) ? "number" : "word";
    return a(e, i, o, e.L.b, []);
}
function Qe(e) {
    let o = k(e.L);
    if (L(e.L) !== "{") {
        return null;
    }
    let t = e.L.b;
    n(e.L);
    let s = e.L.b;
    let i = e.L.b;
    while(E(L(e.L)) || O(L(e.L))){
        n(e.L);
    }
    let r = e.L.b;
    if (r === i || L(e.L) !== "." || L(e.L, 1) !== ".") {
        v(e.L, o);
        return null;
    }
    let l = e.L.b;
    n(e.L);
    n(e.L);
    let c = e.L.b;
    let f = e.L.b;
    while(E(L(e.L)) || O(L(e.L))){
        n(e.L);
    }
    let u = e.L.b;
    if (u === f || L(e.L) !== "}") {
        v(e.L, o);
        return null;
    }
    let d = e.L.b;
    n(e.L);
    let b = e.L.b;
    let p = z(e, i, r);
    let x = z(e, f, u);
    let I = /^\d+$/.test(p);
    let w = /^\d+$/.test(x);
    if (I !== w) {
        v(e.L, o);
        return null;
    }
    if (!I && (p.length !== 1 || x.length !== 1)) {
        v(e.L, o);
        return null;
    }
    let g = I ? "number" : "word";
    let m = w ? "number" : "word";
    return a(e, "brace_expression", t, b, [
        a(e, "{", t, s, []),
        a(e, g, i, r, []),
        a(e, "..", l, c, []),
        a(e, m, f, u, []),
        a(e, "}", d, b, [])
    ]);
}
function Xe(e) {
    if (L(e.L) !== "{") {
        return null;
    }
    let o = e.L.b;
    n(e.L);
    let t = e.L.b;
    let s = [
        a(e, "word", o, t, [])
    ];
    while(e.L.i < e.L.len){
        let i = L(e.L);
        if (i === "}" || i === `
` || i === ";" || i === "|" || i === "&" || i === " " || i === "\t" || i === "<" || i === ">" || i === "(" || i === ")") {
            break;
        }
        if (i === "[" || i === "]") {
            let c = e.L.b;
            n(e.L);
            s.push(a(e, "word", c, e.L.b, []));
            continue;
        }
        let r = e.L.b;
        while(e.L.i < e.L.len){
            let c = L(e.L);
            if (c === "\\" && e.L.i + 1 < e.L.len) {
                n(e.L);
                n(e.L);
                continue;
            }
            if (c === "}" || c === `
` || c === ";" || c === "|" || c === "&" || c === " " || c === "\t" || c === "<" || c === ">" || c === "(" || c === ")" || c === "[" || c === "]") {
                break;
            }
            n(e.L);
        }
        let l = e.L.b;
        if (l > r) {
            let c = z(e, r, l);
            let f = /^-?\d+$/.test(c) ? "number" : "word";
            s.push(a(e, f, r, l, []));
        } else {
            break;
        }
    }
    if (L(e.L) === "}") {
        let i = e.L.b;
        n(e.L);
        s.push(a(e, "word", i, e.L.b, []));
    }
    return s;
}
function W(e) {
    let o = e.L.b;
    n(e.L);
    e.inDquote++;
    let t = e.L.b;
    let i = [
        a(e, '"', o, t, [])
    ];
    let r = e.L.b;
    let l = e.L.i;
    let c = ()=>{
        if (e.L.b > r) {
            let u = e.src.slice(l, e.L.i);
            if (!/^[ \t]+$/.test(u)) {
                i.push(a(e, "string_content", r, e.L.b, []));
            }
        }
    };
    while(e.L.i < e.L.len){
        let u = L(e.L);
        if (u === '"') {
            break;
        }
        if (u === "\\" && e.L.i + 1 < e.L.len) {
            n(e.L);
            n(e.L);
            continue;
        }
        if (u === `
`) {
            c();
            n(e.L);
            r = e.L.b;
            l = e.L.i;
            continue;
        }
        if (u === "$") {
            let d = L(e.L, 1);
            if (d === "(" || d === "{" || O(d) || j.has(d) || E(d) || d >= "\x80" || ee.has(d) && Ie(e, e.L.i + 1) !== -1) {
                c();
                let b = q(e);
                if (b) {
                    i.push(b);
                }
                r = e.L.b;
                l = e.L.i;
                continue;
            }
            if (d !== '"' && d !== "") {
                c();
                let b = e.L.b;
                n(e.L);
                i.push(a(e, "$", b, e.L.b, []));
                r = e.L.b;
                l = e.L.i;
                continue;
            }
        }
        if (u === "`") {
            c();
            let d = se(e);
            i.push(d);
            r = e.L.b;
            l = e.L.i;
            continue;
        }
        n(e.L);
    }
    c();
    let f;
    if (L(e.L) === '"') {
        let u = e.L.b;
        n(e.L);
        f = a(e, '"', u, e.L.b, []);
    } else {
        f = a(e, '"', e.L.b, e.L.b, []);
    }
    i.push(f);
    e.inDquote--;
    return a(e, "string", o, f.endIndex, i);
}
function q(e) {
    let o = L(e.L, 1);
    let t = e.L.b;
    if (o === "(" && L(e.L, 2) === "(") {
        n(e.L);
        n(e.L);
        n(e.L);
        let c = a(e, "$((", t, e.L.b, []);
        let f = k(e.L);
        let u = X(e, "))", "var");
        h(e.L);
        let d;
        let b = false;
        if (L(e.L) !== ")" || L(e.L, 1) !== ")") {
            ye(e, f, "))");
            b = true;
        }
        if (L(e.L) === ")" && L(e.L, 1) === ")") {
            let p = e.L.b;
            n(e.L);
            n(e.L);
            d = a(e, "))", p, e.L.b, []);
        } else {
            d = a(e, "))", e.L.b, e.L.b, []);
        }
        return a(e, b ? "ERROR" : "arithmetic_expansion", t, d.endIndex, [
            c,
            ...u,
            d
        ]);
    }
    if (o === "[") {
        n(e.L);
        n(e.L);
        let c = a(e, "$[", t, e.L.b, []);
        let f = k(e.L);
        let u = X(e, "]", "var");
        h(e.L);
        let d;
        let b = false;
        if (L(e.L) !== "]") {
            ye(e, f, "]");
            b = true;
        }
        if (L(e.L) === "]") {
            let p = e.L.b;
            n(e.L);
            d = a(e, "]", p, e.L.b, []);
        } else {
            d = a(e, "]", e.L.b, e.L.b, []);
        }
        return a(e, b ? "ERROR" : "arithmetic_expansion", t, d.endIndex, [
            c,
            ...u,
            d
        ]);
    }
    if (o === "(") {
        n(e.L);
        n(e.L);
        let c = a(e, "$(", t, e.L.b, []);
        let f = e.inDquote;
        e.inDquote = 0;
        let u = D(e, ")");
        e.inDquote = f;
        h(e.L);
        let d;
        let b = false;
        if (L(e.L) === ")") {
            let p = e.L.b;
            n(e.L);
            d = a(e, ")", p, e.L.b, []);
        } else {
            b = true;
            let p = e.L.b;
            let x = 1;
            while(e.L.i < e.L.len){
                let I = L(e.L);
                if (I === "\\" && e.L.i + 1 < e.L.len) {
                    n(e.L);
                    n(e.L);
                    continue;
                }
                if (I === '"' || I === "'") {
                    n(e.L);
                    while(e.L.i < e.L.len && L(e.L) !== I){
                        if (I === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                            n(e.L);
                        }
                        n(e.L);
                    }
                    if (e.L.i < e.L.len) {
                        n(e.L);
                    }
                    continue;
                }
                if (I === "`") {
                    n(e.L);
                    while(e.L.i < e.L.len && L(e.L) !== "`"){
                        if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                            n(e.L);
                        }
                        n(e.L);
                    }
                    if (e.L.i < e.L.len) {
                        n(e.L);
                    }
                    continue;
                }
                if (I === "$" && L(e.L, 1) === "$") {
                    n(e.L);
                    n(e.L);
                    continue;
                }
                if (I === "$" && L(e.L, 1) === "'") {
                    n(e.L);
                    n(e.L);
                    while(e.L.i < e.L.len && L(e.L) !== "'"){
                        if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                            n(e.L);
                        }
                        n(e.L);
                    }
                    if (e.L.i < e.L.len) {
                        n(e.L);
                    }
                    continue;
                }
                if (I === "(") {
                    x++;
                } else if (I === ")") {
                    x--;
                    if (x === 0) {
                        break;
                    }
                }
                n(e.L);
            }
            u.push(a(e, "ERROR", p, e.L.b, []));
            if (L(e.L) === ")") {
                let I = e.L.b;
                n(e.L);
                d = a(e, ")", I, e.L.b, []);
            } else {
                d = a(e, "ERROR", e.L.b, e.L.b, []);
            }
        }
        if (!b && u.length === 1 && u[0].type === "redirected_statement" && u[0].children.length === 1 && u[0].children[0].type === "file_redirect") {
            u = u[0].children;
        }
        return a(e, b ? "ERROR" : "command_substitution", t, d.endIndex, [
            c,
            ...u,
            d
        ]);
    }
    if (o === "{") {
        n(e.L);
        n(e.L);
        let c = a(e, "${", t, e.L.b, []);
        let f = Ze(e);
        let u;
        let d = false;
        while(L(e.L) === `
`){
            n(e.L);
        }
        if (L(e.L) === "}") {
            let b = e.L.b;
            n(e.L);
            u = a(e, "}", b, e.L.b, []);
        } else {
            d = true;
            let b = e.L.b;
            let p = 1;
            while(e.L.i < e.L.len){
                let I = L(e.L);
                if (I === "\\" && e.L.i + 1 < e.L.len) {
                    n(e.L);
                    n(e.L);
                    continue;
                }
                if (I === '"' || I === "'") {
                    n(e.L);
                    while(e.L.i < e.L.len && L(e.L) !== I){
                        if (I === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                            n(e.L);
                        }
                        n(e.L);
                    }
                    if (e.L.i < e.L.len) {
                        n(e.L);
                    }
                    continue;
                }
                if (I === "$" && L(e.L, 1) === "(") {
                    let w = 1;
                    n(e.L);
                    n(e.L);
                    while(e.L.i < e.L.len && w > 0){
                        let g = L(e.L);
                        if (g === "\\" && e.L.i + 1 < e.L.len) {
                            n(e.L);
                        } else if (g === "$" && L(e.L, 1) === "$") {
                            n(e.L);
                        } else if (g === "$" && L(e.L, 1) === "'") {
                            n(e.L);
                            n(e.L);
                            while(e.L.i < e.L.len && L(e.L) !== "'"){
                                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                                    n(e.L);
                                }
                                n(e.L);
                            }
                        } else if (g === '"' || g === "'") {
                            n(e.L);
                            while(e.L.i < e.L.len && L(e.L) !== g){
                                if (g === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                                    n(e.L);
                                }
                                n(e.L);
                            }
                        } else if (g === "`") {
                            n(e.L);
                            while(e.L.i < e.L.len && L(e.L) !== "`"){
                                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                                    n(e.L);
                                }
                                n(e.L);
                            }
                        } else if (g === "(") {
                            w++;
                        } else if (g === ")") {
                            w--;
                        }
                        n(e.L);
                    }
                    continue;
                }
                if (I === "`") {
                    n(e.L);
                    while(e.L.i < e.L.len && L(e.L) !== "`"){
                        if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                            n(e.L);
                        }
                        n(e.L);
                    }
                    if (e.L.i < e.L.len) {
                        n(e.L);
                    }
                    continue;
                }
                if (I === "$" && L(e.L, 1) === "$") {
                    n(e.L);
                    n(e.L);
                    continue;
                }
                if (I === "$" && L(e.L, 1) === "'") {
                    n(e.L);
                    n(e.L);
                    while(e.L.i < e.L.len && L(e.L) !== "'"){
                        if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                            n(e.L);
                        }
                        n(e.L);
                    }
                    if (e.L.i < e.L.len) {
                        n(e.L);
                    }
                    continue;
                }
                if (I === "$" && L(e.L, 1) === "{") {
                    p++;
                    n(e.L);
                } else if (I === "}") {
                    p--;
                    if (p === 0) {
                        break;
                    }
                }
                n(e.L);
            }
            let x = a(e, "ERROR", b, e.L.b, []);
            if (L(e.L) === "}") {
                let I = e.L.b;
                n(e.L);
                u = a(e, "}", I, e.L.b, []);
            } else {
                u = a(e, "ERROR", e.L.b, e.L.b, []);
            }
            f.push(x);
        }
        if (!d && e.inDquote > 0 && z(e, c.endIndex, u.startIndex).includes("'")) {
            d = true;
        }
        if (!d && Fyr(z(e, t, u.startIndex))) {
            d = true;
        }
        return a(e, d || e.zshBraceDiff ? "ERROR" : "expansion", t, u.endIndex, [
            c,
            ...f,
            u
        ]);
    }
    n(e.L);
    let s = e.L.b;
    let i = a(e, "$", t, s, []);
    let r = L(e.L);
    if (r >= "\x80") {
        while(C(L(e.L)) || L(e.L) >= "\x80"){
            n(e.L);
        }
        return a(e, "ERROR", t, e.L.b, []);
    }
    if (r === "_" && !C(L(e.L, 1)) && L(e.L, 1) < "\x80") {
        let c = e.L.b;
        n(e.L);
        let f = a(e, "special_variable_name", c, e.L.b, []);
        return a(e, "simple_expansion", t, e.L.b, [
            i,
            f
        ]);
    }
    if (O(r)) {
        let c = e.L.b;
        while(C(L(e.L))){
            n(e.L);
        }
        if (L(e.L) >= "\x80") {
            while(C(L(e.L)) || L(e.L) >= "\x80"){
                n(e.L);
            }
            return a(e, "ERROR", t, e.L.b, []);
        }
        let f = a(e, "variable_name", c, e.L.b, []);
        return a(e, "simple_expansion", t, e.L.b, [
            i,
            f
        ]);
    }
    let l = r === "#" && !ee.has(L(e.L, 1));
    if (ee.has(r) && !l) {
        let c = Ie(e, e.L.i);
        if (c !== -1) {
            while(e.L.i < c){
                n(e.L);
            }
            return a(e, "ERROR", t, e.L.b, []);
        }
    }
    if (E(r)) {
        let c = e.L.b;
        n(e.L);
        let f = a(e, "variable_name", c, e.L.b, []);
        return a(e, "simple_expansion", t, e.L.b, [
            i,
            f
        ]);
    }
    if (j.has(r)) {
        let c = e.L.b;
        n(e.L);
        let f = a(e, "special_variable_name", c, e.L.b, []);
        return a(e, "simple_expansion", t, e.L.b, [
            i,
            f
        ]);
    }
    if (r === "'") {
        n(e.L);
        while(e.L.i < e.L.len && L(e.L) !== "'"){
            if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                n(e.L);
            }
            n(e.L);
        }
        if (L(e.L) === "'") {
            n(e.L);
        }
        return a(e, "ansi_c_string", t, e.L.b, []);
    }
    return i;
}
function Ze(e) {
    let o = [];
    h(e.L);
    {
        let r = L(e.L);
        let l = L(e.L, 1);
        if (r === "#" && l === "!" && L(e.L, 2) === "}") {
            n(e.L);
            n(e.L);
            return o;
        }
        if (r === "!" && l === "#") {
            let c = 2;
            if (L(e.L, c) === "#") {
                c++;
            }
            if (L(e.L, c) === " ") {
                c++;
            }
            if (L(e.L, c) === "}") {
                while(c-- > 0){
                    n(e.L);
                }
                return o;
            }
        }
    }
    if (L(e.L) === "#") {
        let r = e.L.b;
        n(e.L);
        o.push(a(e, "#", r, e.L.b, []));
    }
    let t = L(e.L);
    if ((t === "!" || t === "=" || t === "~") && (O(L(e.L, 1)) || E(L(e.L, 1)))) {
        let r = e.L.b;
        n(e.L);
        o.push(a(e, t, r, e.L.b, []));
    }
    h(e.L);
    if (O(L(e.L))) {
        let r = e.L.b;
        while(C(L(e.L))){
            n(e.L);
        }
        o.push(a(e, "variable_name", r, e.L.b, []));
    } else if (E(L(e.L))) {
        let r = e.L.b;
        while(E(L(e.L))){
            n(e.L);
        }
        o.push(a(e, "variable_name", r, e.L.b, []));
    } else if (j.has(L(e.L))) {
        let r = e.L.b;
        n(e.L);
        o.push(a(e, "special_variable_name", r, e.L.b, []));
    }
    if (L(e.L) === "[") {
        let r = o.at(-1);
        let l = e.L.b;
        n(e.L);
        let c = a(e, "[", l, e.L.b, []);
        let f = qe(e);
        h(e.L);
        let u = e.L.b;
        if (L(e.L) === "]") {
            n(e.L);
        }
        let d = a(e, "]", u, e.L.b, []);
        if (r) {
            let b = f ? [
                r,
                c,
                f,
                d
            ] : [
                r,
                c,
                d
            ];
            o[o.length - 1] = a(e, "subscript", r.startIndex, e.L.b, b);
        }
    }
    h(e.L);
    let s = L(e.L);
    if ((s === "*" || s === "@") && L(e.L, 1) === "}") {
        let r = e.L.b;
        n(e.L);
        o.push(a(e, s, r, e.L.b, []));
        return o;
    }
    if (s === "@" && O(L(e.L, 1))) {
        let r = e.L.b;
        n(e.L);
        o.push(a(e, "@", r, e.L.b, []));
        while(C(L(e.L))){
            n(e.L);
        }
        return o;
    }
    let i = L(e.L);
    if (i === ":") {
        let r = L(e.L, 1);
        if (r === "}") {
            n(e.L);
            return o;
        }
        if (r !== "-" && r !== "=" && r !== "?" && r !== "+") {
            n(e.L);
            h(e.L);
            let l = L(e.L);
            let c;
            if (l === "-" && E(L(e.L, 1))) {
                let f = e.L.b;
                n(e.L);
                while(E(L(e.L))){
                    n(e.L);
                }
                c = a(e, "number", f, e.L.b, []);
            } else {
                c = ne(e, ":}", "var");
            }
            if (c) {
                o.push(c);
            }
            h(e.L);
            if (L(e.L) === ":") {
                n(e.L);
                h(e.L);
                let f = L(e.L);
                let u;
                if (f === "-" && E(L(e.L, 1))) {
                    let d = e.L.b;
                    n(e.L);
                    while(E(L(e.L))){
                        n(e.L);
                    }
                    u = a(e, "number", d, e.L.b, []);
                } else {
                    u = ne(e, "}", "var");
                }
                if (u) {
                    o.push(u);
                }
            }
            return o;
        }
    }
    if (i === ":" || i === "#" || i === "%" || i === "/" || i === "^" || i === "," || i === "-" || i === "=" || i === "?" || i === "+") {
        let r = e.L.b;
        let l = L(e.L, 1);
        let c = i;
        if (i === ":" && (l === "-" || l === "=" || l === "?" || l === "+")) {
            n(e.L);
            n(e.L);
            c = i + l;
        } else if ((i === "#" || i === "%" || i === "/" || i === "^" || i === ",") && l === i) {
            n(e.L);
            n(e.L);
            c = i + i;
        } else {
            n(e.L);
        }
        o.push(a(e, c, r, e.L.b, []));
        let f = c === "#" || c === "##" || c === "%" || c === "%%" || c === "/" || c === "//" || c === "^" || c === "^^" || c === "," || c === ",,";
        if (c === "/" || c === "//") {
            let u = L(e.L);
            if (u === "#" || u === "%") {
                let d = e.L.b;
                n(e.L);
                o.push(a(e, u, d, e.L.b, []));
            }
            if (L(e.L) === '"') {
                o.push(W(e));
                let d = Y(e, "regex", true);
                if (d) {
                    o.push(d);
                }
            } else {
                let d = Y(e, "regex", true);
                if (d) {
                    o.push(d);
                }
            }
            if (L(e.L) === "/") {
                let d = e.L.b;
                n(e.L);
                o.push(a(e, "/", d, e.L.b, []));
                let b = Y(e, "replword", false);
                if (b) {
                    if (b.type === "concatenation" && b.children.length === 2 && b.children[0].type === "command_substitution") {
                        o.push(b.children[0]);
                        o.push(b.children[1]);
                    } else {
                        o.push(b);
                    }
                }
            }
        } else if (c === "#" || c === "##" || c === "%" || c === "%%") {
            for (let u of Ve(e)){
                o.push(u);
            }
        } else {
            let u = Y(e, f ? "regex" : "word", false);
            if (u) {
                o.push(u);
            }
        }
    }
    return o;
}
function Y(e, o, t) {
    let s = e.L.b;
    if (o === "word" && L(e.L) === "(") {
        n(e.L);
        let u = [
            a(e, "(", s, e.L.b, [])
        ];
        while(e.L.i < e.L.len){
            h(e.L);
            let d = L(e.L);
            if (d === ")" || d === "}" || d === `
` || d === "") {
                break;
            }
            let b = e.L.b;
            while(e.L.i < e.L.len){
                let p = L(e.L);
                if (p === ")" || p === "}" || p === " " || p === "\t" || p === `
` || p === "") {
                    break;
                }
                if (p === "\\" && e.L.i + 1 < e.L.len) {
                    n(e.L);
                    n(e.L);
                    continue;
                }
                if (p === "$" && L(e.L, 1) === "$") {
                    n(e.L);
                    n(e.L);
                    continue;
                }
                if (p === "$" && L(e.L, 1) === "'") {
                    n(e.L);
                    n(e.L);
                    while(e.L.i < e.L.len && L(e.L) !== "'"){
                        if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                            n(e.L);
                        }
                        n(e.L);
                    }
                    if (L(e.L) === "'") {
                        n(e.L);
                    }
                    continue;
                }
                if (p === "$" && L(e.L, 1) === "(") {
                    e.zshBraceDiff = true;
                }
                if (p === '"' || p === "'") {
                    n(e.L);
                    while(e.L.i < e.L.len && L(e.L) !== p){
                        if (p === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                            n(e.L);
                        }
                        n(e.L);
                    }
                    if (L(e.L) === p) {
                        n(e.L);
                    }
                    continue;
                }
                if (p === "`") {
                    e.zshBraceDiff = true;
                    n(e.L);
                    while(e.L.i < e.L.len && L(e.L) !== "`"){
                        if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                            n(e.L);
                        }
                        n(e.L);
                    }
                    if (L(e.L) === "`") {
                        n(e.L);
                    }
                    continue;
                }
                if (p === "{") {
                    e.zshBraceDiff = true;
                }
                n(e.L);
            }
            if (e.L.b > b) {
                u.push(a(e, "word", b, e.L.b, []));
            } else {
                break;
            }
        }
        if (L(e.L) === ")") {
            let d = e.L.b;
            n(e.L);
            u.push(a(e, ")", d, e.L.b, []));
        }
        while(L(e.L) === `
`){
            n(e.L);
        }
        return a(e, "array", s, e.L.b, u);
    }
    if (o === "regex") {
        while(e.L.i < e.L.len){
            let u = L(e.L);
            if (u === "{") {
                e.zshBraceDiff = true;
            }
            if (u === "}") {
                break;
            }
            if (t && u === "/") {
                break;
            }
            if (u === "\\" && e.L.i + 1 < e.L.len) {
                n(e.L);
                n(e.L);
                continue;
            }
            if (u === '"' || u === "'") {
                n(e.L);
                while(e.L.i < e.L.len && L(e.L) !== u){
                    if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                        n(e.L);
                    }
                    n(e.L);
                }
                if (L(e.L) === u) {
                    n(e.L);
                }
                continue;
            }
            if (u === "`") {
                e.zshBraceDiff = true;
                n(e.L);
                while(e.L.i < e.L.len && L(e.L) !== "`"){
                    if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                        n(e.L);
                    }
                    n(e.L);
                }
                if (L(e.L) === "`") {
                    n(e.L);
                }
                continue;
            }
            if (u === "$") {
                let d = L(e.L, 1);
                if (d === "{") {
                    let b = 0;
                    n(e.L);
                    n(e.L);
                    b++;
                    while(e.L.i < e.L.len && b > 0){
                        let p = L(e.L);
                        if (p === "\\" && e.L.i + 1 < e.L.len) {
                            n(e.L);
                        } else if (p === "$" && L(e.L, 1) === "$") {
                            n(e.L);
                        } else if (p === "$" && L(e.L, 1) === "'") {
                            n(e.L);
                            n(e.L);
                            while(e.L.i < e.L.len && L(e.L) !== "'"){
                                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                                    n(e.L);
                                }
                                n(e.L);
                            }
                        } else if (p === '"' || p === "'") {
                            n(e.L);
                            while(e.L.i < e.L.len && L(e.L) !== p){
                                if (p === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                                    n(e.L);
                                }
                                n(e.L);
                            }
                        } else if (p === "`") {
                            e.zshBraceDiff = true;
                            n(e.L);
                            while(e.L.i < e.L.len && L(e.L) !== "`"){
                                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                                    n(e.L);
                                }
                                n(e.L);
                            }
                        } else if (p === "$" && L(e.L, 1) === "{") {
                            b++;
                            n(e.L);
                        } else if (p === "$" && L(e.L, 1) === "(") {
                            e.zshBraceDiff = true;
                        } else if (p === "{") {
                            e.zshBraceDiff = true;
                        } else if (p === "}") {
                            b--;
                        }
                        n(e.L);
                    }
                    continue;
                }
                if (d === "(") {
                    e.zshBraceDiff = true;
                    let b = 0;
                    n(e.L);
                    n(e.L);
                    b++;
                    while(e.L.i < e.L.len && b > 0){
                        let p = L(e.L);
                        if (p === "\\" && e.L.i + 1 < e.L.len) {
                            n(e.L);
                        } else if (p === "$" && L(e.L, 1) === "$") {
                            n(e.L);
                        } else if (p === "$" && L(e.L, 1) === "'") {
                            n(e.L);
                            n(e.L);
                            while(e.L.i < e.L.len && L(e.L) !== "'"){
                                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                                    n(e.L);
                                }
                                n(e.L);
                            }
                        } else if (p === '"' || p === "'") {
                            n(e.L);
                            while(e.L.i < e.L.len && L(e.L) !== p){
                                if (p === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                                    n(e.L);
                                }
                                n(e.L);
                            }
                        } else if (p === "`") {
                            n(e.L);
                            while(e.L.i < e.L.len && L(e.L) !== "`"){
                                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                                    n(e.L);
                                }
                                n(e.L);
                            }
                        } else if (p === "(") {
                            b++;
                        } else if (p === ")") {
                            b--;
                        }
                        n(e.L);
                    }
                    continue;
                }
            }
            n(e.L);
        }
        let f = e.L.b;
        if (f === s) {
            return null;
        }
        return a(e, "regex", s, f, []);
    }
    let i = [];
    let r = e.L.b;
    let l = ()=>{
        if (e.L.b > r) {
            i.push(a(e, "word", r, e.L.b, []));
        }
    };
    while(e.L.i < e.L.len){
        let f = L(e.L);
        if (f === "}") {
            break;
        }
        if (f === "{") {
            e.zshBraceDiff = true;
        }
        if (t && f === "/") {
            break;
        }
        if (f === "\\" && e.L.i + 1 < e.L.len) {
            n(e.L);
            n(e.L);
            continue;
        }
        let u = L(e.L, 1);
        if (f === "$") {
            if (u === "{" || u === "(" || u === "[") {
                l();
                let d = q(e);
                if (d) {
                    i.push(d);
                }
                r = e.L.b;
                continue;
            }
            if (u === "'") {
                l();
                let d = e.L.b;
                n(e.L);
                n(e.L);
                while(e.L.i < e.L.len && L(e.L) !== "'"){
                    if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                        n(e.L);
                    }
                    n(e.L);
                }
                if (L(e.L) === "'") {
                    n(e.L);
                }
                i.push(a(e, "ansi_c_string", d, e.L.b, []));
                r = e.L.b;
                continue;
            }
            if (O(u) || E(u) || j.has(u) || u >= "\x80") {
                l();
                let d = q(e);
                if (d) {
                    i.push(d);
                }
                r = e.L.b;
                continue;
            }
        }
        if (f === '"') {
            l();
            i.push(W(e));
            r = e.L.b;
            continue;
        }
        if (f === "'") {
            l();
            let d = e.L.b;
            n(e.L);
            while(e.L.i < e.L.len && L(e.L) !== "'"){
                n(e.L);
            }
            if (L(e.L) === "'") {
                n(e.L);
            }
            i.push(a(e, "raw_string", d, e.L.b, []));
            r = e.L.b;
            continue;
        }
        if ((f === "<" || f === ">") && u === "(") {
            e.zshBraceDiff = true;
            l();
            let d = te(e);
            if (d) {
                i.push(d);
            }
            r = e.L.b;
            continue;
        }
        if (f === "`") {
            l();
            let d = se(e);
            i.push(d);
            r = e.L.b;
            continue;
        }
        n(e.L);
    }
    l();
    if (i.length > 1 && i[0].type === "word" && /^[ \t]+$/.test(i[0].text)) {
        i.shift();
    }
    if (i.length === 0) {
        return null;
    }
    if (i.length === 1) {
        return i[0];
    }
    let c = i.at(-1);
    return a(e, "concatenation", i[0].startIndex, c.endIndex, i);
}
function Ve(e) {
    let o = [];
    let t = e.L.b;
    let s = ()=>{
        if (e.L.b > t) {
            o.push(a(e, "regex", t, e.L.b, []));
        }
    };
    while(e.L.i < e.L.len){
        let i = L(e.L);
        if (i === "}") {
            break;
        }
        if (i === "{") {
            e.zshBraceDiff = true;
        }
        if (i === "\\" && e.L.i + 1 < e.L.len) {
            n(e.L);
            n(e.L);
            continue;
        }
        if (i === '"') {
            s();
            o.push(W(e));
            t = e.L.b;
            continue;
        }
        if (i === "'") {
            s();
            let r = e.L.b;
            n(e.L);
            while(e.L.i < e.L.len && L(e.L) !== "'"){
                n(e.L);
            }
            if (L(e.L) === "'") {
                n(e.L);
            }
            o.push(a(e, "raw_string", r, e.L.b, []));
            t = e.L.b;
            continue;
        }
        if (i === "`") {
            e.zshBraceDiff = true;
            n(e.L);
            while(e.L.i < e.L.len && L(e.L) !== "`"){
                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                    n(e.L);
                }
                n(e.L);
            }
            if (L(e.L) === "`") {
                n(e.L);
            }
            continue;
        }
        if (i === "$") {
            let r = L(e.L, 1);
            if (r === "$") {
                n(e.L);
                n(e.L);
                continue;
            }
            if (r === "'") {
                s();
                let l = e.L.b;
                n(e.L);
                n(e.L);
                while(e.L.i < e.L.len && L(e.L) !== "'"){
                    if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                        n(e.L);
                    }
                    n(e.L);
                }
                if (L(e.L) === "'") {
                    n(e.L);
                }
                o.push(a(e, "ansi_c_string", l, e.L.b, []));
                t = e.L.b;
                continue;
            }
            if (r === "{") {
                let l = 1;
                n(e.L);
                n(e.L);
                while(e.L.i < e.L.len && l > 0){
                    let c = L(e.L);
                    if (c === "\\" && e.L.i + 1 < e.L.len) {
                        n(e.L);
                    } else if (c === "$" && L(e.L, 1) === "$") {
                        n(e.L);
                    } else if (c === "$" && L(e.L, 1) === "'") {
                        n(e.L);
                        n(e.L);
                        while(e.L.i < e.L.len && L(e.L) !== "'"){
                            if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                                n(e.L);
                            }
                            n(e.L);
                        }
                    } else if (c === '"' || c === "'") {
                        n(e.L);
                        while(e.L.i < e.L.len && L(e.L) !== c){
                            if (c === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                                n(e.L);
                            }
                            n(e.L);
                        }
                    } else if (c === "`") {
                        e.zshBraceDiff = true;
                        n(e.L);
                        while(e.L.i < e.L.len && L(e.L) !== "`"){
                            if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                                n(e.L);
                            }
                            n(e.L);
                        }
                    } else if (c === "$" && L(e.L, 1) === "{") {
                        l++;
                        n(e.L);
                    } else if (c === "$" && L(e.L, 1) === "(") {
                        e.zshBraceDiff = true;
                    } else if (c === "{") {
                        e.zshBraceDiff = true;
                    } else if (c === "}") {
                        l--;
                    }
                    n(e.L);
                }
                continue;
            }
            if (r === "(") {
                e.zshBraceDiff = true;
                let l = 1;
                n(e.L);
                n(e.L);
                while(e.L.i < e.L.len && l > 0){
                    let c = L(e.L);
                    if (c === "\\" && e.L.i + 1 < e.L.len) {
                        n(e.L);
                    } else if (c === "$" && L(e.L, 1) === "$") {
                        n(e.L);
                    } else if (c === "$" && L(e.L, 1) === "'") {
                        n(e.L);
                        n(e.L);
                        while(e.L.i < e.L.len && L(e.L) !== "'"){
                            if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                                n(e.L);
                            }
                            n(e.L);
                        }
                    } else if (c === '"' || c === "'") {
                        n(e.L);
                        while(e.L.i < e.L.len && L(e.L) !== c){
                            if (c === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                                n(e.L);
                            }
                            n(e.L);
                        }
                    } else if (c === "`") {
                        n(e.L);
                        while(e.L.i < e.L.len && L(e.L) !== "`"){
                            if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                                n(e.L);
                            }
                            n(e.L);
                        }
                    } else if (c === "(") {
                        l++;
                    } else if (c === ")") {
                        l--;
                    }
                    n(e.L);
                }
                continue;
            }
        }
        n(e.L);
    }
    s();
    return o;
}
function se(e) {
    let o = e.L.b;
    n(e.L);
    let t = a(e, "`", o, e.L.b, []);
    let s = e.L.i;
    {
        let u = false;
        while(s < e.L.len){
            let d = e.L.src[s];
            if (d === "\\") {
                let b = e.L.src[s + 1];
                if (b === "`" || b === "$" || b === "\\") {
                    u = true;
                }
                s += 2;
                continue;
            }
            if (d === "`") {
                break;
            }
            s++;
        }
        if (u) {
            let d = e.L.b;
            while(e.L.i < s){
                n(e.L);
            }
            let b = a(e, "backtick_escape_unsupported", d, e.L.b, []);
            let p;
            if (L(e.L) === "`") {
                let x = e.L.b;
                n(e.L);
                p = a(e, "`", x, e.L.b, []);
            } else {
                p = a(e, "`", e.L.b, e.L.b, []);
            }
            return a(e, "command_substitution", o, p.endIndex, [
                t,
                b,
                p
            ]);
        }
    }
    e.inBacktick++;
    let e_inDquote = e.inDquote;
    e.inDquote = 0;
    let r = k(e.L);
    let heredocs = e.L.heredocs;
    e.L.heredocs = [];
    let c = [];
    while(true){
        h(e.L);
        if (L(e.L) === "`" || L(e.L) === "") {
            break;
        }
        let u = k(e.L);
        let d = T(e.L, "cmd");
        if (d.type === "EOF" || d.type === "BACKTICK") {
            v(e.L, u);
            break;
        }
        if (d.type === "NEWLINE") {
            continue;
        }
        v(e.L, u);
        let b = ke(e);
        if (!b) {
            break;
        }
        c.push(b);
        h(e.L);
        if (L(e.L) === "`") {
            break;
        }
        let p = k(e.L);
        let x = T(e.L, "cmd");
        if (x.type === "OP" && (x.value === ";" || x.value === "&")) {
            c.push(y(e, x.value, x));
        } else if (x.type !== "NEWLINE") {
            v(e.L, p);
        }
    }
    e.L.heredocs = heredocs;
    e.inBacktick--;
    e.inDquote = e_inDquote;
    if (e.L.i !== s) {
        v(e.L, r);
        while(e.L.i < s){
            n(e.L);
        }
        c.length = 0;
        c.push(a(e, "backtick_body_overrun", t.endIndex, e.L.b, []));
    }
    let f;
    if (L(e.L) === "`") {
        let u = e.L.b;
        n(e.L);
        f = a(e, "`", u, e.L.b, []);
    } else {
        f = a(e, "`", e.L.b, e.L.b, []);
    }
    if (c.length === 0) {
        c.push(a(e, "backtick_body_empty", t.endIndex, e.L.b, []));
    }
    return a(e, "command_substitution", o, f.endIndex, [
        t,
        ...c,
        f
    ]);
}
function Ge(e, o) {
    let t = y(e, "if", o);
    let s = [
        t
    ];
    let i = D(e, null);
    s.push(...i);
    Q(e, "then", s);
    let r = D(e, null);
    s.push(...r);
    while(true){
        let c = k(e.L);
        let f = T(e.L, "cmd");
        if (f.type === "WORD" && f.value === "elif") {
            let u = y(e, "elif", f);
            let d = D(e, null);
            let b = [
                u,
                ...d
            ];
            Q(e, "then", b);
            let p = D(e, null);
            b.push(...p);
            let x = b.at(-1);
            s.push(a(e, "elif_clause", u.startIndex, x.endIndex, b));
        } else if (f.type === "WORD" && f.value === "else") {
            let u = y(e, "else", f);
            let d = D(e, null);
            let b = d.length > 0 ? d.at(-1) : u;
            s.push(a(e, "else_clause", u.startIndex, b.endIndex, [
                u,
                ...d
            ]));
        } else {
            v(e.L, c);
            break;
        }
    }
    Q(e, "fi", s);
    let l = s.at(-1);
    return a(e, "if_statement", t.startIndex, l.endIndex, s);
}
function Ye(e, o) {
    let t = y(e, o.value, o);
    let s = [
        t
    ];
    let i = D(e, null);
    s.push(...i);
    let r = le(e);
    if (r) {
        s.push(r);
    }
    let l = s.at(-1);
    return a(e, "while_statement", t.startIndex, l.endIndex, s);
}
function pe(e, o) {
    let t = y(e, o.value, o);
    h(e.L);
    if (o.value === "for" && L(e.L) === "(" && L(e.L, 1) === "(") {
        let b = e.L.b;
        n(e.L);
        n(e.L);
        let p = a(e, "((", b, e.L.b, []);
        let x = [
            t,
            p
        ];
        for(let _ = 0; _ < 3; _++){
            h(e.L);
            let S = X(e, _ < 2 ? ";" : "))", "assign");
            x.push(...S);
            if (_ < 2) {
                if (L(e.L) === ";") {
                    let N = e.L.b;
                    n(e.L);
                    x.push(a(e, ";", N, e.L.b, []));
                }
            }
        }
        h(e.L);
        if (L(e.L) === ")" && L(e.L, 1) === ")") {
            let _ = e.L.b;
            n(e.L);
            n(e.L);
            x.push(a(e, "))", _, e.L.b, []));
        }
        let I = k(e.L);
        let w = T(e.L, "cmd");
        if (w.type === "OP" && w.value === ";") {
            x.push(y(e, ";", w));
        } else if (w.type !== "NEWLINE") {
            v(e.L, I);
        }
        let g = le(e);
        if (g) {
            x.push(g);
        } else {
            F(e);
            h(e.L);
            if (L(e.L) === "{") {
                let _ = e.L.b;
                n(e.L);
                let S = a(e, "{", _, e.L.b, []);
                let N = D(e, "}");
                let R;
                if (L(e.L) === "}") {
                    let B = e.L.b;
                    n(e.L);
                    R = a(e, "}", B, e.L.b, []);
                } else {
                    R = a(e, "}", e.L.b, e.L.b, []);
                }
                x.push(a(e, "compound_statement", S.startIndex, R.endIndex, [
                    S,
                    ...N,
                    R
                ]));
            }
        }
        let m = x.at(-1);
        return a(e, "c_style_for_statement", t.startIndex, m.endIndex, x);
    }
    let s = [
        t
    ];
    let i = T(e.L, "arg");
    if (i.type === "WORD" && O(i.value[0] ?? "") && [
        ...i.value
    ].every(C)) {
        s.push(a(e, "variable_name", i.start, i.end, []));
    } else {
        s.push(a(e, "ERROR", i.start, i.end, []));
    }
    h(e.L);
    let r = k(e.L);
    let l = T(e.L, "arg");
    if (l.type === "WORD" && l.value === "in") {
        s.push(y(e, "in", l));
        while(true){
            h(e.L);
            let b = L(e.L);
            if (b === ";" || b === `
` || b === "") {
                break;
            }
            let p = A(e, "arg");
            if (!p) {
                break;
            }
            s.push(p);
        }
    } else {
        v(e.L, r);
    }
    let c = k(e.L);
    let f = T(e.L, "cmd");
    if (f.type === "OP" && f.value === ";") {
        s.push(y(e, ";", f));
    } else if (f.type !== "NEWLINE") {
        v(e.L, c);
    }
    let u = le(e);
    if (u) {
        s.push(u);
    }
    let d = s.at(-1);
    return a(e, "for_statement", t.startIndex, d.endIndex, s);
}
function le(e) {
    F(e);
    let o = k(e.L);
    let t = T(e.L, "cmd");
    if (t.type !== "WORD" || t.value !== "do") {
        v(e.L, o);
        return null;
    }
    let s = y(e, "do", t);
    let i = D(e, null);
    let r = [
        s,
        ...i
    ];
    Q(e, "done", r);
    let l = r.at(-1);
    return a(e, "do_group", s.startIndex, l.endIndex, r);
}
function Je(e, o) {
    let t = y(e, "case", o);
    let s = [
        t
    ];
    h(e.L);
    let i = A(e, "arg");
    if (i) {
        s.push(i);
    }
    h(e.L);
    Q(e, "in", s);
    F(e);
    while(true){
        h(e.L);
        F(e);
        let l = k(e.L);
        let c = T(e.L, "arg");
        if (c.type === "WORD" && c.value === "esac") {
            s.push(y(e, "esac", c));
            break;
        }
        if (c.type === "EOF") {
            break;
        }
        v(e.L, l);
        let f = Pe(e);
        if (!f) {
            break;
        }
        s.push(f);
    }
    let r = s.at(-1);
    return a(e, "case_statement", t.startIndex, r.endIndex, s);
}
function Pe(e) {
    h(e.L);
    let o = e.L.b;
    let t = [];
    if (L(e.L) === "(") {
        let f = e.L.b;
        n(e.L);
        t.push(a(e, "(", f, e.L.b, []));
    }
    let s = true;
    while(true){
        h(e.L);
        let f = L(e.L);
        if (f === ")" || f === "") {
            break;
        }
        let u = en(e);
        if (u.length === 0) {
            break;
        }
        if (!s && u.length > 1) {
            let d = u.map((x)=>{
                if (x.type === "extglob_pattern") {
                    return a(e, "word", x.startIndex, x.endIndex, []);
                }
                return x;
            });
            let b = d[0];
            let p = d.at(-1);
            t.push(a(e, "concatenation", b.startIndex, p.endIndex, d));
        } else {
            t.push(...u);
        }
        s = false;
        h(e.L);
        if (L(e.L) === "\\" && L(e.L, 1) === `
`) {
            n(e.L);
            n(e.L);
            h(e.L);
        }
        if (L(e.L) === "|") {
            let d = e.L.b;
            n(e.L);
            t.push(a(e, "|", d, e.L.b, []));
            if (L(e.L) === "\\" && L(e.L, 1) === `
`) {
                n(e.L);
                n(e.L);
            }
        } else {
            break;
        }
    }
    if (L(e.L) === ")") {
        let f = e.L.b;
        n(e.L);
        t.push(a(e, ")", f, e.L.b, []));
    }
    let i = D(e, null);
    t.push(...i);
    let r = k(e.L);
    let l = T(e.L, "cmd");
    if (l.type === "OP" && (l.value === ";;" || l.value === ";&" || l.value === ";;&")) {
        t.push(y(e, l.value, l));
    } else {
        v(e.L, r);
    }
    if (t.length === 0) {
        return null;
    }
    if (i.length === 0) {
        for(let f = 0; f < t.length; f++){
            let u = t[f];
            if (u.type !== "extglob_pattern") {
                continue;
            }
            let d = z(e, u.startIndex, u.endIndex);
            if (/^[-+?*@!][a-zA-Z]/.test(d) && !/[*?(]/.test(d)) {
                t[f] = a(e, "word", u.startIndex, u.endIndex, []);
            }
        }
    }
    let c = t.at(-1);
    return a(e, "case_item", o, c.endIndex, t);
}
function en(e) {
    h(e.L);
    let o = k(e.L);
    let t = e.L.b;
    let s = e.L.i;
    let i = 0;
    let r = false;
    let l = false;
    let c = false;
    while(e.L.i < e.L.len){
        let b = L(e.L);
        if (b === "\\" && e.L.i + 1 < e.L.len) {
            n(e.L);
            n(e.L);
            continue;
        }
        if (b === '"' || b === "'") {
            c = true;
            n(e.L);
            while(e.L.i < e.L.len && L(e.L) !== b){
                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                    n(e.L);
                }
                n(e.L);
            }
            if (L(e.L) === b) {
                n(e.L);
            }
            continue;
        }
        if (b === "(") {
            i++;
            n(e.L);
            continue;
        }
        if (i > 0) {
            if (b === ")") {
                i--;
                n(e.L);
                continue;
            }
            if (b === `
`) {
                break;
            }
            n(e.L);
            continue;
        }
        if (b === ")" || b === "|" || b === " " || b === "\t" || b === `
`) {
            break;
        }
        if (b === "$") {
            r = true;
        }
        if (b === "[") {
            l = true;
        }
        n(e.L);
    }
    if (e.L.b === t) {
        return [];
    }
    let f = e.src.slice(s, e.L.i);
    let u = /[*?+@!]\(/.test(f);
    if (c && !u) {
        v(e.L, o);
        return nn(e);
    }
    if (!u && (r || l)) {
        v(e.L, o);
        let b = A(e, "arg");
        if (b) {
            return [
                b
            ];
        }
        return [];
    }
    let d = u || /[*?]/.test(f) || /^[-+?*@!][a-zA-Z]/.test(f) ? "extglob_pattern" : "word";
    return [
        a(e, d, t, e.L.b, [])
    ];
}
function nn(e) {
    let o = [];
    let t = e.L.b;
    let s = e.L.i;
    let i = ()=>{
        if (e.L.i > s) {
            let r = e.src.slice(s, e.L.i);
            let l = /[*?]/.test(r) ? "extglob_pattern" : "word";
            o.push(a(e, l, t, e.L.b, []));
        }
    };
    while(e.L.i < e.L.len){
        let r = L(e.L);
        if (r === "\\" && e.L.i + 1 < e.L.len) {
            n(e.L);
            n(e.L);
            continue;
        }
        if (r === '"') {
            i();
            o.push(W(e));
            t = e.L.b;
            s = e.L.i;
            continue;
        }
        if (r === "'") {
            i();
            let l = T(e.L, "arg");
            o.push(y(e, "raw_string", l));
            t = e.L.b;
            s = e.L.i;
            continue;
        }
        if (r === ")" || r === "|" || r === " " || r === "\t" || r === `
`) {
            break;
        }
        n(e.L);
    }
    i();
    return o;
}
function tn(e, o) {
    let t = y(e, "function", o);
    h(e.L);
    let s = T(e.L, "arg");
    let i = a(e, "word", s.start, s.end, []);
    let r = [
        t,
        i
    ];
    h(e.L);
    if (L(e.L) === "(" && L(e.L, 1) === ")") {
        let f = T(e.L, "cmd");
        r.push(y(e, "(", f));
        let u = e.L.b;
        n(e.L);
        r.push(a(e, ")", u, e.L.b, []));
    }
    h(e.L);
    F(e);
    let l = K(e);
    if (l) {
        if (l.type === "redirected_statement" && l.children.length >= 2 && l.children[0].type === "compound_statement") {
            r.push(...l.children);
        } else {
            r.push(l);
        }
    }
    let c = r.at(-1);
    return a(e, "function_definition", t.startIndex, c.endIndex, r);
}
function sn(e, o) {
    let t = y(e, o.value, o);
    let s = [
        t
    ];
    let i = [];
    while(true){
        h(e.L);
        let u = U(e);
        if (u) {
            i.push(u);
            continue;
        }
        let d = L(e.L);
        if (d === "(") {
            s.push(a(e, "variable_name", e.L.b, e.L.b + 1, []));
            break;
        }
        if (d === "" || d === `
` || d === ";" || d === "&" || d === "|" || d === ")" || d === "<" || d === ">") {
            break;
        }
        let b = Se(e);
        if (b) {
            s.push(b);
            continue;
        }
        if (d === '"' || d === "'" || d === "$") {
            let I = A(e, "arg");
            if (I) {
                s.push(I);
                continue;
            }
            break;
        }
        let p = k(e.L);
        let x = T(e.L, "arg");
        if (x.type === "WORD" || x.type === "NUMBER") {
            if (x.value.startsWith("-")) {
                s.push(y(e, "word", x));
            } else if (O(x.value[0] ?? "")) {
                s.push(a(e, "variable_name", x.start, x.end, []));
            } else {
                s.push(y(e, "word", x));
            }
        } else {
            v(e.L, p);
            break;
        }
    }
    let r = s.at(-1);
    let l = a(e, "declaration_command", t.startIndex, r.endIndex, s);
    if (i.length === 0) {
        return l;
    }
    let c = i.at(-1);
    let f = Math.max(l.endIndex, c.endIndex);
    return a(e, "redirected_statement", t.startIndex, f, [
        l,
        ...i
    ]);
}
function rn(e, o) {
    let t = y(e, "unset", o);
    let s = [
        t
    ];
    let i = [];
    while(true){
        h(e.L);
        let u = U(e);
        if (u) {
            i.push(u);
            continue;
        }
        let d = L(e.L);
        if (d === "(") {
            s.push(a(e, "variable_name", e.L.b, e.L.b + 1, []));
            break;
        }
        if (d === "" || d === `
` || d === ";" || d === "&" || d === "|" || d === ")" || d === "<" || d === ">") {
            break;
        }
        let b = A(e, "arg");
        if (!b) {
            break;
        }
        if (b.type === "word") {
            if (b.text.startsWith("-")) {
                s.push(b);
            } else {
                s.push(a(e, "variable_name", b.startIndex, b.endIndex, []));
            }
        } else {
            s.push(b);
        }
    }
    let r = s.at(-1);
    let l = a(e, "unset_command", t.startIndex, r.endIndex, s);
    if (i.length === 0) {
        return l;
    }
    let c = i.at(-1);
    let f = Math.max(l.endIndex, c.endIndex);
    return a(e, "redirected_statement", t.startIndex, f, [
        l,
        ...i
    ]);
}
function Q(e, o, t) {
    F(e);
    let s = k(e.L);
    let i = T(e.L, "cmd");
    if (i.type === "WORD" && i.value === o) {
        t.push(y(e, o, i));
    } else {
        v(e.L, s);
    }
}
function he(e, o) {
    return fe(e, o);
}
function fe(e, o) {
    let t = xe(e, o);
    if (!t) {
        return null;
    }
    while(true){
        h(e.L);
        let s = k(e.L);
        if (o === "]]" && L(e.L) === "|" && L(e.L, 1) === "|") {
            let i = e.L.b;
            n(e.L);
            n(e.L);
            let r = a(e, "||", i, e.L.b, []);
            ie(e, o);
            let l = xe(e, o);
            if (!l) {
                v(e.L, s);
                break;
            }
            t = a(e, "binary_expression", t.startIndex, l.endIndex, [
                t,
                r,
                l
            ]);
        } else {
            break;
        }
    }
    return t;
}
function xe(e, o) {
    let t = ve(e, o);
    if (!t) {
        return null;
    }
    while(true){
        h(e.L);
        let s = k(e.L);
        if (o === "]]" && L(e.L) === "&" && L(e.L, 1) === "&") {
            let i = e.L.b;
            n(e.L);
            n(e.L);
            let r = a(e, "&&", i, e.L.b, []);
            ie(e, o);
            let l = ve(e, o);
            if (!l) {
                v(e.L, s);
                break;
            }
            t = a(e, "binary_expression", t.startIndex, l.endIndex, [
                t,
                r,
                l
            ]);
        } else {
            break;
        }
    }
    return t;
}
function ie(e, o) {
    h(e.L);
    if (o === "]]") {
        while(true){
            let t = L(e.L);
            if (t === `
`) {
                n(e.L);
                h(e.L);
            } else if (t === "#") {
                while(L(e.L) && L(e.L) !== `
`){
                    n(e.L);
                }
            } else {
                break;
            }
        }
    }
}
function ve(e, o) {
    ie(e, o);
    if (L(e.L) === "(") {
        let s = e.L.b;
        n(e.L);
        let i = a(e, "(", s, e.L.b, []);
        let r = fe(e, o);
        h(e.L);
        let l;
        if (L(e.L) === ")") {
            let f = e.L.b;
            n(e.L);
            l = a(e, ")", f, e.L.b, []);
        } else {
            l = a(e, ")", e.L.b, e.L.b, []);
        }
        let c = r ? [
            i,
            r,
            l
        ] : [
            i,
            l
        ];
        return a(e, "parenthesized_expression", i.startIndex, l.endIndex, c);
    }
    return on(e, o);
}
function _e(e, o) {
    ie(e, o);
    let t = L(e.L);
    let s = (i)=>i === " " || i === "\t" || i === `
` || i === "";
    if (t === "!" && (s(L(e.L, 1)) || L(e.L, 1) === "(")) {
        let i = e.L.b;
        n(e.L);
        let r = a(e, "!", i, e.L.b, []);
        let l = _e(e, o);
        if (!l) {
            return r;
        }
        return a(e, "unary_expression", r.startIndex, l.endIndex, [
            r,
            l
        ]);
    }
    if (t === "(") {
        let i = e.L.b;
        n(e.L);
        let r = a(e, "(", i, e.L.b, []);
        let l = fe(e, o);
        h(e.L);
        let c;
        if (L(e.L) === ")") {
            let u = e.L.b;
            n(e.L);
            c = a(e, ")", u, e.L.b, []);
        } else {
            c = a(e, ")", e.L.b, e.L.b, []);
        }
        let f = l ? [
            r,
            l,
            c
        ] : [
            r,
            c
        ];
        return a(e, "parenthesized_expression", r.startIndex, c.endIndex, f);
    }
    if (t === "-" && O(L(e.L, 1))) {
        let i = k(e.L);
        let r = e.L.b;
        n(e.L);
        while(C(L(e.L))){
            n(e.L);
        }
        if (!s(L(e.L))) {
            v(e.L, i);
            return P(e, o);
        }
        let l = a(e, "test_operator", r, e.L.b, []);
        let c = e.L.i;
        h(e.L);
        let f = P(e, o);
        if (!f) {
            let u = e.src.slice(c, e.L.i);
            if (!/^(?:[ \t]|\\\n)*$/.test(u)) {
                let d = a(e, "test_rhs_missing", l.endIndex, e.L.b, []);
                return a(e, "unary_expression", l.startIndex, e.L.b, [
                    l,
                    d
                ]);
            }
            return l;
        }
        return a(e, "unary_expression", l.startIndex, f.endIndex, [
            l,
            f
        ]);
    }
    return P(e, o);
}
function J(e, o, t) {
    let s = a(e, "test_rhs_missing", t.endIndex, e.L.b, []);
    return a(e, "binary_expression", o.startIndex, e.L.b, [
        o,
        t,
        s
    ]);
}
function on(e, o) {
    h(e.L);
    let t = _e(e, o);
    if (!t) {
        return null;
    }
    h(e.L);
    let s = L(e.L);
    let i = L(e.L, 1);
    let r = null;
    let l = e.L.b;
    if (s === "=" && i === "=") {
        n(e.L);
        n(e.L);
        r = a(e, "==", l, e.L.b, []);
    } else if (s === "!" && i === "=") {
        n(e.L);
        n(e.L);
        r = a(e, "!=", l, e.L.b, []);
    } else if (s === "=" && i === "~") {
        n(e.L);
        n(e.L);
        r = a(e, "=~", l, e.L.b, []);
    } else if (s === "=" && i !== "=") {
        n(e.L);
        r = a(e, "=", l, e.L.b, []);
    } else if (o === "]]" && s === "<" && i !== "<") {
        n(e.L);
        r = a(e, "<", l, e.L.b, []);
    } else if (o === "]]" && s === ">" && i !== ">") {
        n(e.L);
        r = a(e, ">", l, e.L.b, []);
    } else if (s === "-" && O(i)) {
        n(e.L);
        while(C(L(e.L))){
            n(e.L);
        }
        r = a(e, "test_operator", l, e.L.b, []);
    }
    if (!r) {
        return t;
    }
    h(e.L);
    if (o === "]]") {
        let f = r.type;
        if (f === "=~") {
            h(e.L);
            let u = L(e.L);
            let d = null;
            if (u === '"' || u === "'") {
                let b = k(e.L);
                let p = u === '"' ? W(e) : y(e, "raw_string", T(e.L, "arg"));
                let x = e.L.i;
                let I = x;
                while(I < e.L.len && (e.src[I] === " " || e.src[I] === "\t")){
                    I++;
                }
                let w = e.src[I] ?? "";
                let g = I + 1;
                while(e.src[g] === "\\"){
                    if (e.src[g + 1] === `
`) {
                        g += 2;
                    } else if (e.src[g + 1] === "\r" && e.src[g + 2] === `
`) {
                        g += 3;
                    } else {
                        break;
                    }
                }
                let m = e.src[g] ?? "";
                if (w === "]" && m === "]" && I > x || w === "&" && m === "&" || w === "|" && m === "|" && I > x || w === `
` || w === "") {
                    d = p;
                } else {
                    v(e.L, b);
                }
            }
            if (!d) {
                d = me(e, true);
            }
            if (!d) {
                return J(e, t, r);
            }
            return a(e, "binary_expression", t.startIndex, d.endIndex, [
                t,
                r,
                d
            ]);
        }
        if (f === "=") {
            let u = me(e, false);
            if (!u) {
                return J(e, t, r);
            }
            return a(e, "binary_expression", t.startIndex, u.endIndex, [
                t,
                r,
                u
            ]);
        }
        if (f === "==" || f === "!=") {
            let u = Ln(e);
            if (u.length === 0) {
                return J(e, t, r);
            }
            let d = u.at(-1);
            return a(e, "binary_expression", t.startIndex, d.endIndex, [
                t,
                r,
                ...u
            ]);
        }
    }
    let c = P(e, o);
    if (!c) {
        return J(e, t, r);
    }
    return a(e, "binary_expression", t.startIndex, c.endIndex, [
        t,
        r,
        c
    ]);
}
function me(e, o) {
    h(e.L);
    let t = e.L.b;
    let s = 0;
    while(e.L.i < e.L.len){
        let i = L(e.L);
        if (i === "\\" && e.L.i + 1 < e.L.len) {
            n(e.L);
            n(e.L);
            continue;
        }
        if (i === `
`) {
            if (s === 0) {
                break;
            }
            n(e.L);
            continue;
        }
        if (i === '"' || i === "'") {
            let r = i;
            n(e.L);
            while(e.L.i < e.L.len && L(e.L) !== r){
                if (r === '"' && L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                    n(e.L);
                }
                n(e.L);
            }
            if (e.L.i < e.L.len) {
                n(e.L);
            }
            continue;
        }
        if (i === "`") {
            n(e.L);
            while(e.L.i < e.L.len && L(e.L) !== "`"){
                if (L(e.L) === "\\" && e.L.i + 1 < e.L.len) {
                    n(e.L);
                }
                n(e.L);
            }
            if (e.L.i < e.L.len) {
                n(e.L);
            }
            continue;
        }
        if (s === 0) {
            if (i === " " || i === "\t") {
                break;
            }
            if (i === "&" || !o && i === "|") {
                break;
            }
            if (i === ")") {
                break;
            }
        }
        if (i === "(") {
            s++;
        } else if (i === ")" && s > 0) {
            s--;
        }
        n(e.L);
    }
    if (e.L.b === t) {
        return null;
    }
    return a(e, "regex", t, e.L.b, []);
}
function Ln(e) {
    h(e.L);
    let o = [];
    let t = e.L.b;
    let s = e.L.i;
    let i = 0;
    let r = ()=>{
        if (e.L.i > s) {
            let l = e.src.slice(s, e.L.i);
            let c = /^\d+$/.test(l) ? "number" : "extglob_pattern";
            o.push(a(e, c, t, e.L.b, []));
        }
    };
    while(e.L.i < e.L.len){
        let l = L(e.L);
        if (l === "\\" && e.L.i + 1 < e.L.len) {
            n(e.L);
            n(e.L);
            continue;
        }
        if (l === `
`) {
            if (i === 0) {
                break;
            }
            n(e.L);
            continue;
        }
        if (i === 0) {
            if (l === "&" || l === "|") {
                break;
            }
            if (l === " " || l === "\t") {
                let c = e.L.i;
                while(true){
                    let b = e.L.src[c];
                    if (b === " " || b === "\t") {
                        c++;
                    } else if (b === "\\" && e.L.src[c + 1] === `
`) {
                        c += 2;
                    } else if (b === "\\" && e.L.src[c + 1] === "\r" && e.L.src[c + 2] === `
`) {
                        c += 3;
                    } else {
                        break;
                    }
                }
                let f = e.L.src[c] ?? "";
                let u = c + 1;
                while(e.L.src[u] === "\\"){
                    if (e.L.src[u + 1] === `
`) {
                        u += 2;
                    } else if (e.L.src[u + 1] === "\r" && e.L.src[u + 2] === `
`) {
                        u += 3;
                    } else {
                        break;
                    }
                }
                let d = e.L.src[u] ?? "";
                if (f === "]" && d === "]" || f === "&" && d === "&" || f === "|" && d === "|" || f === "#" || f === `
`) {
                    break;
                }
                n(e.L);
                continue;
            }
        }
        if (l === "$") {
            let c = L(e.L, 1);
            if (c === "'") {
                r();
                let f = T(e.L, "arg");
                o.push(y(e, "ansi_c_string", f));
                t = e.L.b;
                s = e.L.i;
                continue;
            }
            if (c === '"') {
                r();
                let f = {
                    type: "DOLLAR",
                    value: "$",
                    start: e.L.b,
                    end: e.L.b + 1
                };
                n(e.L);
                o.push(y(e, "$", f));
                o.push(W(e));
                t = e.L.b;
                s = e.L.i;
                continue;
            }
            if (c === "(" || c === "{" || O(c) || j.has(c) || c >= "\x80") {
                r();
                let f = q(e);
                if (f) {
                    o.push(f);
                }
                t = e.L.b;
                s = e.L.i;
                continue;
            }
        }
        if (l === '"') {
            r();
            o.push(W(e));
            t = e.L.b;
            s = e.L.i;
            continue;
        }
        if (l === "'") {
            r();
            let c = T(e.L, "arg");
            o.push(y(e, "raw_string", c));
            t = e.L.b;
            s = e.L.i;
            continue;
        }
        if (l === "`") {
            r();
            let c = se(e);
            o.push(c);
            t = e.L.b;
            s = e.L.i;
            continue;
        }
        if ((l === "<" || l === ">") && L(e.L, 1) === "(") {
            r();
            let c = te(e);
            if (c) {
                o.push(c);
            }
            t = e.L.b;
            s = e.L.i;
            continue;
        }
        if (l === ")" && i === 0) {
            break;
        }
        if (l === "(") {
            i++;
        } else if (l === ")" && i > 0) {
            i--;
        }
        n(e.L);
    }
    r();
    return o;
}
function P(e, o) {
    h(e.L);
    if (o === "]" && L(e.L) === "]" && Le(L(e.L, 1) ?? "")) {
        return null;
    }
    if (o === "]]" && L(e.L) === "]" && L(e.L, 1) === "]" && Le(L(e.L, 2) ?? "")) {
        return null;
    }
    return A(e, "arg");
}
var cn = {
    "=": 2,
    "+=": 2,
    "-=": 2,
    "*=": 2,
    "/=": 2,
    "%=": 2,
    "<<=": 2,
    ">>=": 2,
    "&=": 2,
    "^=": 2,
    "|=": 2,
    "||": 4,
    "&&": 5,
    "|": 6,
    "^": 7,
    "&": 8,
    "==": 9,
    "!=": 9,
    "<": 10,
    ">": 10,
    "<=": 10,
    ">=": 10,
    "<<": 11,
    ">>": 11,
    "+": 12,
    "-": 12,
    "*": 13,
    "/": 13,
    "%": 13,
    "**": 14
};
var ln = new Set([
    "=",
    "+=",
    "-=",
    "*=",
    "/=",
    "%=",
    "<<=",
    ">>=",
    "&=",
    "^=",
    "|=",
    "**"
]);
function ye(e, o, t) {
    v(e.L, o);
    let s = 0;
    while(e.L.i < e.L.len){
        let i = L(e.L);
        if (t === "))" || t === ")") {
            if (i === "(") {
                s++;
            } else if (i === ")") {
                if (s === 0) {
                    if (t === ")" || L(e.L, 1) === ")") {
                        return;
                    }
                } else {
                    s--;
                }
            }
        } else if (t === "]") {
            if (i === "[") {
                s++;
            } else if (i === "]") {
                if (s === 0) {
                    return;
                }
                s--;
            }
        } else if (V(e, t)) {
            return;
        }
        n(e.L);
    }
}
function ne(e, o, t = "var") {
    return Z(e, o, t);
}
function X(e, o, t = "var") {
    let s = [];
    while(true){
        let i = Z(e, o, t);
        if (i) {
            s.push(i);
        }
        h(e.L);
        if (L(e.L) === "," && !V(e, o)) {
            n(e.L);
            continue;
        }
        break;
    }
    return s;
}
function Z(e, o, t) {
    let s = ae(e, o, 0, t);
    if (!s) {
        return null;
    }
    h(e.L);
    if (L(e.L) === "?") {
        let i = e.L.b;
        n(e.L);
        let r = a(e, "?", i, e.L.b, []);
        let l = ae(e, ":", 0, t);
        h(e.L);
        let c;
        if (L(e.L) === ":") {
            let b = e.L.b;
            n(e.L);
            c = a(e, ":", b, e.L.b, []);
        } else {
            c = a(e, ":", e.L.b, e.L.b, []);
        }
        let f = Z(e, o, t);
        let u = f ?? c;
        let d = [
            s,
            r
        ];
        if (l) {
            d.push(l);
        }
        d.push(c);
        if (f) {
            d.push(f);
        }
        return a(e, "ternary_expression", s.startIndex, u.endIndex, d);
    }
    return s;
}
function an(e) {
    let o = L(e.L);
    let t = L(e.L, 1);
    let s = L(e.L, 2);
    if (o === "<" && t === "<" && s === "=") {
        return [
            "<<=",
            3
        ];
    }
    if (o === ">" && t === ">" && s === "=") {
        return [
            ">>=",
            3
        ];
    }
    if (o === "*" && t === "*") {
        return [
            "**",
            2
        ];
    }
    if (o === "<" && t === "<") {
        return [
            "<<",
            2
        ];
    }
    if (o === ">" && t === ">") {
        return [
            ">>",
            2
        ];
    }
    if (o === "=" && t === "=") {
        return [
            "==",
            2
        ];
    }
    if (o === "!" && t === "=") {
        return [
            "!=",
            2
        ];
    }
    if (o === "<" && t === "=") {
        return [
            "<=",
            2
        ];
    }
    if (o === ">" && t === "=") {
        return [
            ">=",
            2
        ];
    }
    if (o === "&" && t === "&") {
        return [
            "&&",
            2
        ];
    }
    if (o === "|" && t === "|") {
        return [
            "||",
            2
        ];
    }
    if (o === "+" && t === "=") {
        return [
            "+=",
            2
        ];
    }
    if (o === "-" && t === "=") {
        return [
            "-=",
            2
        ];
    }
    if (o === "*" && t === "=") {
        return [
            "*=",
            2
        ];
    }
    if (o === "/" && t === "=") {
        return [
            "/=",
            2
        ];
    }
    if (o === "%" && t === "=") {
        return [
            "%=",
            2
        ];
    }
    if (o === "&" && t === "=") {
        return [
            "&=",
            2
        ];
    }
    if (o === "^" && t === "=") {
        return [
            "^=",
            2
        ];
    }
    if (o === "|" && t === "=") {
        return [
            "|=",
            2
        ];
    }
    if (o === "+" && t !== "+") {
        return [
            "+",
            1
        ];
    }
    if (o === "-" && t !== "-") {
        return [
            "-",
            1
        ];
    }
    if (o === "*") {
        return [
            "*",
            1
        ];
    }
    if (o === "/") {
        return [
            "/",
            1
        ];
    }
    if (o === "%") {
        return [
            "%",
            1
        ];
    }
    if (o === "<") {
        return [
            "<",
            1
        ];
    }
    if (o === ">") {
        return [
            ">",
            1
        ];
    }
    if (o === "&") {
        return [
            "&",
            1
        ];
    }
    if (o === "|") {
        return [
            "|",
            1
        ];
    }
    if (o === "^") {
        return [
            "^",
            1
        ];
    }
    if (o === "=") {
        return [
            "=",
            1
        ];
    }
    return null;
}
function ae(e, o, t, s) {
    let i = ue(e, o, s);
    if (!i) {
        return null;
    }
    while(true){
        h(e.L);
        if (V(e, o)) {
            break;
        }
        if (L(e.L) === ",") {
            break;
        }
        let r = an(e);
        if (!r) {
            break;
        }
        let [l, c] = r;
        let f = cn[l];
        if (f === undefined || f < t) {
            break;
        }
        let u = e.L.b;
        for(let x = 0; x < c; x++){
            n(e.L);
        }
        let d = a(e, l, u, e.L.b, []);
        let b = ln.has(l) ? f : f + 1;
        let p = ae(e, o, b, s);
        if (!p) {
            break;
        }
        i = a(e, "binary_expression", i.startIndex, p.endIndex, [
            i,
            d,
            p
        ]);
    }
    return i;
}
function ue(e, o, t) {
    h(e.L);
    if (V(e, o)) {
        return null;
    }
    let s = L(e.L);
    let i = L(e.L, 1);
    if (s === "+" && i === "+" || s === "-" && i === "-") {
        let r = e.L.b;
        n(e.L);
        n(e.L);
        let l = a(e, s + i, r, e.L.b, []);
        let c = ue(e, o, t);
        if (!c) {
            return l;
        }
        return a(e, "unary_expression", l.startIndex, c.endIndex, [
            l,
            c
        ]);
    }
    if (s === "-" || s === "+" || s === "!" || s === "~") {
        if (t !== "var" && s === "-" && E(i)) {
            let f = e.L.b;
            n(e.L);
            while(E(L(e.L))){
                n(e.L);
            }
            return a(e, "number", f, e.L.b, []);
        }
        let r = e.L.b;
        n(e.L);
        let l = a(e, s, r, e.L.b, []);
        let c = ue(e, o, t);
        if (!c) {
            return l;
        }
        return a(e, "unary_expression", l.startIndex, c.endIndex, [
            l,
            c
        ]);
    }
    return un(e, o, t);
}
function un(e, o, t) {
    let s = fn(e, o, t);
    if (!s) {
        return null;
    }
    let i = L(e.L);
    let r = L(e.L, 1);
    if (i === "+" && r === "+" || i === "-" && r === "-") {
        let l = e.L.b;
        n(e.L);
        n(e.L);
        let c = a(e, i + r, l, e.L.b, []);
        return a(e, "postfix_expression", s.startIndex, c.endIndex, [
            s,
            c
        ]);
    }
    return s;
}
function fn(e, o, t) {
    h(e.L);
    if (V(e, o)) {
        return null;
    }
    let s = L(e.L);
    if (s === "(") {
        let i = e.L.b;
        n(e.L);
        let r = a(e, "(", i, e.L.b, []);
        let l = X(e, ")", t);
        h(e.L);
        let c;
        if (L(e.L) === ")") {
            let f = e.L.b;
            n(e.L);
            c = a(e, ")", f, e.L.b, []);
        } else {
            c = a(e, ")", e.L.b, e.L.b, []);
        }
        return a(e, "parenthesized_expression", r.startIndex, c.endIndex, [
            r,
            ...l,
            c
        ]);
    }
    if (s === '"') {
        return W(e);
    }
    if (s === "$") {
        return q(e);
    }
    if (E(s)) {
        let i = e.L.b;
        while(E(L(e.L))){
            n(e.L);
        }
        if (e.L.b - i === 1 && s === "0" && (L(e.L) === "x" || L(e.L) === "X")) {
            n(e.L);
            while(De(L(e.L))){
                n(e.L);
            }
        } else if (L(e.L) === "#") {
            n(e.L);
            while(Ae(L(e.L))){
                n(e.L);
            }
        }
        return a(e, "number", i, e.L.b, []);
    }
    if (O(s)) {
        let i = e.L.b;
        while(C(L(e.L))){
            n(e.L);
        }
        let r = L(e.L);
        if (t === "assign") {
            h(e.L);
            let c = L(e.L);
            let f = L(e.L, 1);
            if (c === "=" && f !== "=") {
                let u = a(e, "variable_name", i, e.L.b, []);
                let d = e.L.b;
                n(e.L);
                let b = a(e, "=", d, e.L.b, []);
                let p = Z(e, o, t);
                let x = p ? p.endIndex : b.endIndex;
                return a(e, "variable_assignment", i, x, p ? [
                    u,
                    b,
                    p
                ] : [
                    u,
                    b
                ]);
            }
        }
        if (r === "[") {
            let c = a(e, "variable_name", i, e.L.b, []);
            let f = e.L.b;
            n(e.L);
            let u = a(e, "[", f, e.L.b, []);
            let d = Z(e, "]", "var") ?? q(e);
            h(e.L);
            let b;
            if (L(e.L) === "]") {
                let x = e.L.b;
                n(e.L);
                b = a(e, "]", x, e.L.b, []);
            } else {
                b = a(e, "]", e.L.b, e.L.b, []);
            }
            let p = d ? [
                c,
                u,
                d,
                b
            ] : [
                c,
                u,
                b
            ];
            return a(e, "subscript", i, b.endIndex, p);
        }
        return a(e, t === "var" ? "variable_name" : "word", i, e.L.b, []);
    }
    return null;
}
function V(e, o) {
    let t = L(e.L);
    if (o === "))") {
        return t === ")" && L(e.L, 1) === ")";
    }
    if (o === ")") {
        return t === ")";
    }
    if (o === ";") {
        return t === ";";
    }
    if (o === ":") {
        return t === ":";
    }
    if (o === "]") {
        return t === "]";
    }
    if (o === "}") {
        return t === "}";
    }
    if (o === ":}") {
        return t === ":" || t === "}";
    }
    return t === "" || t === `
`;
}
export { kb, $yr, Fyr };
