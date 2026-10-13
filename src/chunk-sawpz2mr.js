import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import v from "process";
import V from "os";
import N from "tty";
const x = (e = 0)=>(r)=>`\x1B[${r + e}m`;
const E = (e = 0)=>(r)=>`\x1B[${38 + e};5;${r}m`;
const I = (e = 0)=>(r, t, o)=>`\x1B[${38 + e};2;${r};${t};${o}m`;
const l = {
    modifier: {
        reset: [
            0,
            0
        ],
        bold: [
            1,
            22
        ],
        dim: [
            2,
            22
        ],
        italic: [
            3,
            23
        ],
        underline: [
            4,
            24
        ],
        overline: [
            53,
            55
        ],
        inverse: [
            7,
            27
        ],
        hidden: [
            8,
            28
        ],
        strikethrough: [
            9,
            29
        ]
    },
    color: {
        black: [
            30,
            39
        ],
        red: [
            31,
            39
        ],
        green: [
            32,
            39
        ],
        yellow: [
            33,
            39
        ],
        blue: [
            34,
            39
        ],
        magenta: [
            35,
            39
        ],
        cyan: [
            36,
            39
        ],
        white: [
            37,
            39
        ],
        blackBright: [
            90,
            39
        ],
        gray: [
            90,
            39
        ],
        grey: [
            90,
            39
        ],
        redBright: [
            91,
            39
        ],
        greenBright: [
            92,
            39
        ],
        yellowBright: [
            93,
            39
        ],
        blueBright: [
            94,
            39
        ],
        magentaBright: [
            95,
            39
        ],
        cyanBright: [
            96,
            39
        ],
        whiteBright: [
            97,
            39
        ]
    },
    bgColor: {
        bgBlack: [
            40,
            49
        ],
        bgRed: [
            41,
            49
        ],
        bgGreen: [
            42,
            49
        ],
        bgYellow: [
            43,
            49
        ],
        bgBlue: [
            44,
            49
        ],
        bgMagenta: [
            45,
            49
        ],
        bgCyan: [
            46,
            49
        ],
        bgWhite: [
            47,
            49
        ],
        bgBlackBright: [
            100,
            49
        ],
        bgGray: [
            100,
            49
        ],
        bgGrey: [
            100,
            49
        ],
        bgRedBright: [
            101,
            49
        ],
        bgGreenBright: [
            102,
            49
        ],
        bgYellowBright: [
            103,
            49
        ],
        bgBlueBright: [
            104,
            49
        ],
        bgMagentaBright: [
            105,
            49
        ],
        bgCyanBright: [
            106,
            49
        ],
        bgWhiteBright: [
            107,
            49
        ]
    }
};
const ce = Object.keys(l.modifier);
const P = Object.keys(l.color);
const Y = Object.keys(l.bgColor);
const ue = [
    ...P,
    ...Y
];
function U() {
    let e = new Map;
    for (let [r, t] of Object.entries(l)){
        for (let [o, n] of Object.entries(t)){
            l[o] = {
                open: `\x1B[${n[0]}m`,
                close: `\x1B[${n[1]}m`
            };
            t[o] = l[o];
            e.set(n[0], n[1]);
        }
        Object.defineProperty(l, r, {
            value: t,
            enumerable: false
        });
    }
    Object.defineProperty(l, "codes", {
        value: e,
        enumerable: false
    });
    l.color.close = "\x1B[39m";
    l.bgColor.close = "\x1B[49m";
    l.color.ansi = x();
    l.color.ansi256 = E();
    l.color.ansi16m = I();
    l.bgColor.ansi = x(10);
    l.bgColor.ansi256 = E(10);
    l.bgColor.ansi16m = I(10);
    Object.defineProperties(l, {
        rgbToAnsi256: {
            value (r, t, o) {
                if (r === t && t === o) {
                    if (r < 8) {
                        return 16;
                    }
                    if (r > 248) {
                        return 231;
                    }
                    return Math.round((r - 8) / 247 * 24) + 232;
                }
                return 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(t / 255 * 5) + Math.round(o / 255 * 5);
            },
            enumerable: false
        },
        hexToRgb: {
            value (r) {
                let t = /[a-f\d]{6}|[a-f\d]{3}/i.exec(r.toString(16));
                if (!t) {
                    return [
                        0,
                        0,
                        0
                    ];
                }
                let [o] = t;
                if (o.length === 3) {
                    o = [
                        ...o
                    ].map((i)=>i + i).join("");
                }
                let n = Number.parseInt(o, 16);
                return [
                    n >> 16 & 255,
                    n >> 8 & 255,
                    n & 255
                ];
            },
            enumerable: false
        },
        hexToAnsi256: {
            value: (r)=>l.rgbToAnsi256(...l.hexToRgb(r)),
            enumerable: false
        },
        ansi256ToAnsi: {
            value (r) {
                if (r < 8) {
                    return 30 + r;
                }
                if (r < 16) {
                    return 90 + (r - 8);
                }
                let t;
                let o;
                let n;
                if (r >= 232) {
                    t = ((r - 232) * 10 + 8) / 255;
                    o = t;
                    n = t;
                } else {
                    r -= 16;
                    let A = r % 36;
                    t = Math.floor(r / 36) / 5;
                    o = Math.floor(A / 6) / 5;
                    n = A % 6 / 5;
                }
                let i = Math.max(t, o, n) * 2;
                if (i === 0) {
                    return 30;
                }
                let c = 30 + (Math.round(n) << 2 | Math.round(o) << 1 | Math.round(t));
                if (i === 2) {
                    c += 60;
                }
                return c;
            },
            enumerable: false
        },
        rgbToAnsi: {
            value: (r, t, o)=>l.ansi256ToAnsi(l.rgbToAnsi256(r, t, o)),
            enumerable: false
        },
        hexToAnsi: {
            value: (r)=>l.ansi256ToAnsi(l.hexToAnsi256(r)),
            enumerable: false
        }
    });
    return l;
}
const D = U();
const h = D;
function f(e, r = globalThis.Deno ? globalThis.Deno.args : v.argv) {
    let t = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--";
    let o = r.indexOf(t + e);
    let n = r.indexOf("--");
    return o !== -1 && (n === -1 || o < n);
}
const { env } = v;
let O;
if (f("no-color") || f("no-colors") || f("color=false") || f("color=never")) {
    O = 0;
} else if (f("color") || f("colors") || f("color=true") || f("color=always")) {
    O = 1;
}
function K() {
    if ("FORCE_COLOR" in env) {
        if (env.FORCE_COLOR === "true") {
            return 1;
        }
        if (env.FORCE_COLOR === "false") {
            return 0;
        }
        if (env.FORCE_COLOR.length === 0) {
            return 1;
        }
        return Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function W(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function X(e, { streamIsTTY, sniffFlags = true } = {}) {
    let o = K();
    if (o !== undefined) {
        O = o;
    }
    let n = sniffFlags ? O : o;
    if (n === 0) {
        return 0;
    }
    if (sniffFlags) {
        if (f("color=16m") || f("color=full") || f("color=truecolor")) {
            return 3;
        }
        if (f("color=256")) {
            return 2;
        }
    }
    if ("TF_BUILD" in env && "AGENT_NAME" in env) {
        return 1;
    }
    if (e && !streamIsTTY && n === undefined) {
        return 0;
    }
    let i = n || 0;
    if (env.TERM === "dumb") {
        return i;
    }
    if (v.platform === "win32") {
        let c = V.release().split(".");
        if (Number(c[0]) >= 10 && Number(c[2]) >= 10586) {
            if (Number(c[2]) >= 14931) {
                return 3;
            }
            return 2;
        }
        return 1;
    }
    if ("CI" in env) {
        if ([
            "GITHUB_ACTIONS",
            "GITEA_ACTIONS",
            "CIRCLECI"
        ].some((c)=>c in env)) {
            return 3;
        }
        if ([
            "TRAVIS",
            "APPVEYOR",
            "GITLAB_CI",
            "BUILDKITE",
            "DRONE"
        ].some((c)=>c in env) || env.CI_NAME === "codeship") {
            return 1;
        }
        return i;
    }
    if ("TEAMCITY_VERSION" in env) {
        if (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION)) {
            return 1;
        }
        return 0;
    }
    if (env.COLORTERM === "truecolor") {
        return 3;
    }
    if (env.TERM === "xterm-kitty") {
        return 3;
    }
    if (env.TERM === "xterm-ghostty") {
        return 3;
    }
    if (env.TERM === "wezterm") {
        return 3;
    }
    if ("TERM_PROGRAM" in env) {
        let c = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch(env.TERM_PROGRAM){
            case "iTerm.app":
                if (c >= 3) {
                    return 3;
                }
                return 2;
            case "Apple_Terminal":
                return 2;
        }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
    }
    if ("COLORTERM" in env) {
        return 1;
    }
    return i;
}
function F(e, r = {}) {
    let t = X(e, {
        streamIsTTY: e && e.isTTY,
        ...r
    });
    return W(t);
}
const z = {
    stdout: F({
        isTTY: N.isatty(1)
    }),
    stderr: F({
        isTTY: N.isatty(2)
    })
};
const M = z;
function S(e, close, open) {
    let o = e.indexOf(close);
    if (o === -1) {
        return e;
    }
    let r_length = close.length;
    let i = 0;
    let c = "";
    do {
        c += e.slice(i, o) + close + open;
        i = o + r_length;
        o = e.indexOf(close, i);
    }while (o !== -1)
    c += e.slice(i);
    return c;
}
function L(e, closeAll, openAll, o) {
    let n = 0;
    let i = "";
    do {
        let c = e[o - 1] === "\r";
        i += e.slice(n, c ? o - 1 : o) + closeAll + (c ? `\r
` : `
`) + openAll;
        n = o + 1;
        o = e.indexOf(`
`, n);
    }while (o !== -1)
    i += e.slice(n);
    return i;
}
const { stdout, stderr } = M;
const R = Symbol("GENERATOR");
const m = Symbol("STYLER");
const d = Symbol("IS_EMPTY");
const k = [
    "ansi",
    "ansi",
    "ansi256",
    "ansi16m"
];
const b = Object.create(null);
const H = (e, r = {})=>{
    if (r.level && !(Number.isInteger(r.level) && r.level >= 0 && r.level <= 3)) {
        throw Error("The `level` option should be an integer from 0 to 3");
    }
    let t = stdout ? stdout.level : 0;
    e.level = r.level === undefined ? t : r.level;
};
class pTr {
    constructor(e){
        return w(e);
    }
}
var w = (e)=>{
    let r = (...t)=>t.join(" ");
    H(r, e);
    Object.setPrototypeOf(r, g.prototype);
    return r;
};
function g(e) {
    return w(e);
}
Object.setPrototypeOf(g.prototype, Function.prototype);
for (let [e, r] of Object.entries(h)){
    b[e] = {
        get () {
            let t = C(this, y(r.open, r.close, this[m]), this[d]);
            Object.defineProperty(this, e, {
                value: t
            });
            return t;
        }
    };
}
b.visible = {
    get () {
        let e = C(this, this[m], true);
        Object.defineProperty(this, "visible", {
            value: e
        });
        return e;
    }
};
const T = (e, r, t, ...o)=>{
    if (e === "rgb") {
        if (r === "ansi16m") {
            return h[t].ansi16m(...o);
        }
        if (r === "ansi256") {
            return h[t].ansi256(h.rgbToAnsi256(...o));
        }
        return h[t].ansi(h.rgbToAnsi(...o));
    }
    if (e === "hex") {
        return T("rgb", r, t, ...h.hexToRgb(...o));
    }
    return h[t][e](...o);
};
const J = [
    "rgb",
    "hex",
    "ansi256"
];
for (let e of J){
    b[e] = {
        get () {
            let { level } = this;
            return function(...o) {
                let n = y(T(e, k[level], "color", ...o), h.color.close, this[m]);
                return C(this, n, this[d]);
            };
        }
    };
    let r = `bg${e[0].toUpperCase()}${e.slice(1)}`;
    b[r] = {
        get () {
            let { level } = this;
            return function(...o) {
                let n = y(T(e, k[level], "bgColor", ...o), h.bgColor.close, this[m]);
                return C(this, n, this[d]);
            };
        }
    };
}
const q = Object.defineProperties(()=>{}, {
    ...b,
    level: {
        enumerable: true,
        get () {
            return this[R].level;
        },
        set (e) {
            this[R].level = e;
        }
    }
});
var y = (open, close, parent)=>{
    let openAll;
    let closeAll;
    if (parent === undefined) {
        openAll = open;
        closeAll = close;
    } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
    }
    return {
        open,
        close,
        openAll,
        closeAll,
        parent
    };
};
var C = (e, r, t)=>{
    let o = (...n)=>Q(o, n.length === 1 ? `${n[0]}` : n.join(" "));
    Object.setPrototypeOf(o, q);
    o[R] = e;
    o[m] = r;
    o[d] = t;
    return o;
};
var Q = (e, r)=>{
    if (e.level <= 0 || !r) {
        if (e[d]) {
            return "";
        }
        return r;
    }
    let t = e[m];
    if (t === undefined) {
        return r;
    }
    let { openAll, closeAll } = t;
    if (r.includes("\x1B")) {
        while(t !== undefined){
            r = S(r, t.close, t.open);
            t = t.parent;
        }
    }
    let i = r.indexOf(`
`);
    if (i !== -1) {
        r = L(r, closeAll, openAll, i);
    }
    return openAll + r + closeAll;
};
Object.defineProperties(g.prototype, b);
const Z = g();
const Re = g({
    level: stderr ? stderr.level : 0
});
const u = Z;
const ee = new Set([
    "--no-color",
    "--no-colors",
    "--color=false",
    "--color=never"
]);
const re = new Set([
    "--color",
    "--colors",
    "--color=true",
    "--color=always",
    "--color=256",
    "--color=16m",
    "--color=full",
    "--color=truecolor"
]);
function G(e) {
    let r = process.argv.indexOf("--");
    return (r === -1 ? process.argv : process.argv.slice(0, r)).some((o)=>e.has(o));
}
const te = ()=>G(ee);
const oe = ()=>G(re);
function ne() {
    if (a.NO_COLOR && a.FORCE_COLOR === undefined && !oe() && u.level > 0) {
        u.level = 0;
        return true;
    }
    return false;
}
function le() {
    if (a.TERM_PROGRAM === "vscode" && u.level === 2) {
        u.level = 3;
        return true;
    }
    return false;
}
const se = new Set([
    "alacritty",
    "contour",
    "foot",
    "ghostty",
    "rio",
    "wezterm",
    "xterm-ghostty",
    "xterm-kitty"
]);
function ie() {
    if (!process.stdout.isTTY || a.NO_COLOR || a.FORCE_COLOR !== undefined || te()) {
        return false;
    }
    let a_TERM = a.TERM;
    if (a_TERM && se.has(a_TERM) && u.level < 3) {
        u.level = 3;
        return true;
    }
    return false;
}
function ae() {
    if (a.CLAUDE_CODE_TMUX_TRUECOLOR) {
        return false;
    }
    if (a.TMUX && u.level > 2) {
        u.level = 2;
        return true;
    }
    return false;
}
function JCs(e) {
    p.ensureInit();
    if (e && u.level > 2) {
        u.level = 2;
        return true;
    }
    return false;
}
function V7(e) {
    p.ensureInit();
    return `[7m${e}[27m`;
}
class j {
    initState = "pending";
    nativeLevel = 0;
    generation = 0;
    ensureInit() {
        if (this.initState !== "pending") {
            return;
        }
        this.initState = "running";
        try {
            ne();
            le();
            ie();
            ae();
            this.nativeLevel = u.level;
            this.initState = "done";
        } catch (error) {
            this.initState = "pending";
            throw error;
        }
    }
    get levelGeneration() {
        this.ensureInit();
        return this.generation;
    }
    clampForAttacher(e) {
        this.ensureInit();
        let r = e !== undefined && e < this.nativeLevel ? e : this.nativeLevel;
        if (r !== u.level) {
            u.level = r;
            this.generation++;
        }
    }
}
var p = new j;
const ge = new Proxy(u, {
    get (e, r) {
        p.ensureInit();
        return Reflect.get(e, r, e);
    },
    set (e, r, t) {
        p.ensureInit();
        return Reflect.set(e, r, t, e);
    },
    has (e, r) {
        p.ensureInit();
        return Reflect.has(e, r);
    },
    apply (e, r, t) {
        p.ensureInit();
        return Reflect.apply(e, r, t);
    }
});
function vdt() {
    return p.levelGeneration;
}
function QCs(e) {
    p.clampForAttacher(e);
}
export { pTr, JCs, V7, ge, vdt, QCs };
