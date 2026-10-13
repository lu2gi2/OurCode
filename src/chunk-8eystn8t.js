import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Ed } from "/$bunfs/root/chunk-4nfvaqps.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { Z, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { a5, D$ } from "/$bunfs/root/chunk-cmf2ckg9.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
const L = {
    default: {
        keyCase: "title",
        modCase: "lower",
        caretCtrl: false,
        modSep: "+",
        arrowSep: "/",
        chordSep: " ",
        shiftAsCase: false,
        charCase: "preserve",
        platform: "other"
    },
    compact: {
        keyCase: "lower",
        modCase: "lower",
        caretCtrl: true,
        modSep: "+",
        arrowSep: "",
        chordSep: " ",
        shiftAsCase: true,
        charCase: "preserve",
        platform: "other"
    },
    symbol: {
        keyCase: "glyph",
        modCase: "glyph",
        caretCtrl: false,
        modSep: "",
        arrowSep: "",
        chordSep: " ",
        shiftAsCase: true,
        charCase: "upper",
        platform: "other"
    }
};
function D({ style, ...rest }) {
    return {
        ...L[style ?? "default"],
        ..._(rest)
    };
}
function _(rest) {
    let o = {};
    for(let s in rest){
        if (rest[s] !== undefined) {
            o[s] = rest[s];
        }
    }
    return o;
}
function jYn(t, o = {}) {
    let s = D(o);
    let n = (i)=>I(i, s);
    let a = (i)=>i.map(n).join(s.chordSep);
    if (t.length === 0) {
        return "";
    }
    if (t.length === 1) {
        return a(t[0]);
    }
    let l = t.every((i)=>i.length === 1) ? t.map((i)=>i[0]) : undefined;
    if (!l) {
        return t.map(a).join("/");
    }
    let p = W(l, s);
    let c = l.every((i)=>Y.has(i.key)) && (!!p || l.every((i)=>g(i, s).length === 0)) ? s.arrowSep : "/";
    if (p) {
        let i = l.map((f)=>n({
                ...f,
                ...q
            }));
        return J(p, s) + i.join(c);
    }
    return l.map(n).join(c);
}
const B = {
    enter: [
        "Enter",
        "enter",
        "⏎"
    ],
    escape: [
        "Esc",
        "esc",
        "⎋"
    ],
    tab: [
        "Tab",
        "tab",
        "⇥"
    ],
    " ": [
        "Space",
        "space",
        "␣"
    ],
    backspace: [
        "Backspace",
        "backspace",
        "⌫"
    ],
    delete: [
        "Delete",
        "delete",
        "⌦"
    ],
    up: [
        "↑",
        "↑",
        "↑"
    ],
    down: [
        "↓",
        "↓",
        "↓"
    ],
    left: [
        "←",
        "←",
        "←"
    ],
    right: [
        "→",
        "→",
        "→"
    ],
    pageup: [
        "PageUp",
        "pgup",
        "⇞"
    ],
    pagedown: [
        "PageDown",
        "pgdn",
        "⇟"
    ],
    home: [
        "Home",
        "home",
        "↖"
    ],
    end: [
        "End",
        "end",
        "↘"
    ]
};
const U = {
    title: 0,
    lower: 1,
    glyph: 2
};
const H = {
    ctrl: {
        lower: "ctrl",
        title: "Ctrl",
        glyph: "⌃"
    },
    shift: {
        lower: "shift",
        title: "Shift",
        glyph: "⇧"
    },
    alt: {
        lower: (t)=>{
            if (t === "macos") {
                return "opt";
            }
            return "alt";
        },
        title: (t)=>{
            if (t === "macos") {
                return "Opt";
            }
            return "Alt";
        },
        glyph: "⌥"
    },
    super: {
        lower: (t)=>{
            if (t === "macos") {
                return "cmd";
            }
            return "super";
        },
        title: (t)=>{
            if (t === "macos") {
                return "Cmd";
            }
            return "Super";
        },
        glyph: "⌘"
    }
};
var Y = new Set([
    "up",
    "down",
    "left",
    "right"
]);
var q = {
    ctrl: false,
    alt: false,
    shift: false,
    meta: false,
    super: false
};
function C(t) {
    let o = [];
    if (t.ctrl) {
        o.push("ctrl");
    }
    if (t.shift) {
        o.push("shift");
    }
    if (t.alt || t.meta) {
        o.push("alt");
    }
    if (t.super) {
        o.push("super");
    }
    return o;
}
function y(t, o) {
    let s = H[t][o.modCase];
    if (typeof s === "function") {
        return s(o.platform);
    }
    return s;
}
function z(key, o) {
    let s = B[key];
    if (s) {
        return s[U[o.keyCase]];
    }
    if (o.charCase === "upper") {
        return key.toUpperCase();
    }
    return key;
}
function R(t) {
    return t.shift && !t.ctrl && !t.alt && !t.meta && !t.super && t.key.length === 1 && t.key >= "a" && t.key <= "z";
}
function I(t, o) {
    if (o.shiftAsCase && R(t)) {
        return t.key.toUpperCase();
    }
    let s = C(t);
    let n = z(t.key, o);
    if (o.caretCtrl && s.length === 1 && s[0] === "ctrl") {
        return `^${n}`;
    }
    if (o.modCase === "glyph") {
        return s.map((a)=>y(a, o)).join("") + n;
    }
    return [
        ...s.map((a)=>y(a, o)),
        n
    ].join(o.modSep);
}
function W([s, ...n], o) {
    if (!g(s, o).length) {
        return;
    }
    if (n.every((l)=>X(s, l, o))) {
        return s;
    }
}
function g(t, o) {
    if (o.shiftAsCase && R(t)) {
        return [];
    }
    return C(t);
}
function X(t, o, s) {
    let n = g(t, s);
    let a = g(o, s);
    return n.length === a.length && n.every((l, p)=>l === a[p]);
}
function J(t, o) {
    let s = C(t);
    if (o.caretCtrl && s.length === 1 && s[0] === "ctrl") {
        return "^";
    }
    if (o.modCase === "glyph") {
        return s.map((n)=>y(n, o)).join("");
    }
    return s.map((n)=>y(n, o)).join(o.modSep) + o.modSep;
}
function G(t) {
    let f = w(15);
    let { chord, action, format, parens, bold, terse } = t;
    let E = parens === undefined ? false : parens;
    let c = bold === undefined ? false : bold;
    let i = terse === undefined ? false : terse;
    let x;
    if (f[0] === S) {
        x = v();
        f[0] = x;
    } else {
        x = f[0];
    }
    let te = x;
    let T;
    if (f[1] !== chord || f[2] !== format) {
        T = P(chord, format, te);
        f[1] = chord;
        f[2] = format;
        f[3] = T;
    } else {
        T = f[3];
    }
    let children = T;
    if (!children) {
        return null;
    }
    let F;
    if (f[4] !== c || f[5] !== children) {
        F = c ? e(Ed, {
            bold: true,
            children
        }) : children;
        f[4] = c;
        f[5] = children;
        f[6] = F;
    } else {
        F = f[6];
    }
    let d = F;
    let m = i ? " " : " to ";
    if (E) {
        let h;
        if (f[7] !== action || f[8] !== m || f[9] !== d) {
            h = r(Ed, {
                children: [
                    "(",
                    d,
                    m,
                    action,
                    ")"
                ]
            });
            f[7] = action;
            f[8] = m;
            f[9] = d;
            f[10] = h;
        } else {
            h = f[10];
        }
        return h;
    }
    let h;
    if (f[11] !== action || f[12] !== m || f[13] !== d) {
        h = r(Ed, {
            children: [
                d,
                m,
                action
            ]
        });
        f[11] = action;
        f[12] = m;
        f[13] = d;
        f[14] = h;
    } else {
        h = f[14];
    }
    return h;
}
function q0({ chord, action, format, parens = false, terse = false }) {
    let l = P(chord, format, v());
    if (!l) {
        return "";
    }
    let p = `${l}${terse ? " " : " to "}${action}`;
    if (parens) {
        return `(${p})`;
    }
    return p;
}
function v() {
    if (D$() === "macos") {
        return "macos";
    }
    return "other";
}
function P(chord, format, s) {
    let n = (typeof chord === "string" ? [
        chord
    ] : chord).filter((a)=>a !== "");
    return jYn(n.map(a5), {
        ...format,
        platform: format?.platform ?? s
    });
}
export { jYn, G, q0 };
