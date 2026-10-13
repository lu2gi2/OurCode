import { Wmo } from "/$bunfs/root/chunk-2b1rbkfn.js";
import { q, B, bu } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { eG, Lpe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { yc, Ise, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { u0 } from "/$bunfs/root/chunk-6g4165br.js";
import { AH, Gz, j5e, bZ } from "/$bunfs/root/chunk-223dyewd.js";
import { Mx } from "/$bunfs/root/chunk-yq147k4z.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { Ji, Le } from "/$bunfs/root/chunk-cj4xndke.js";
import { Buffer } from "buffer";
import { isAbsolute } from "path";
function kt(e) {
    if (e === null || typeof e !== "object") {
        return null;
    }
    e = et && e[et] || e["@@iterator"];
    if (typeof e === "function") {
        return e;
    }
    return null;
}
function _(e, r, n) {
    this.props = e;
    this.context = r;
    this.refs = ut;
    this.updater = n || st;
}
function at() {}
function L(e, r, n) {
    this.props = e;
    this.context = r;
    this.refs = ut;
    this.updater = n || st;
}
function I() {}
function lt(e, key, props) {
    const n_ref = props.ref;
    return {
        $$typeof: M,
        type: e,
        key,
        ref: n_ref !== undefined ? n_ref : null,
        props
    };
}
function Ut(e, r) {
    return lt(e.type, r, e.props);
}
function H(e) {
    return typeof e === "object" && e !== null && e.$$typeof === M;
}
function Yt(e) {
    const r = {
        "=": "=0",
        ":": "=2"
    };
    return `\$${e.replace(/[=:]/g, (n)=>r[n])}`;
}
function w(e, r) {
    if (typeof e === "object" && e !== null && e.key != null) {
        return Yt(`${e.key}`);
    }
    return r.toString(36);
}
function jt(e) {
    switch(e.status){
        case "fulfilled":
            return e.value;
        case "rejected":
            throw e.reason;
        default:
            if (typeof e.status === "string") {
                e.then(I, I);
            } else {
                e.status = "pending";
                e.then((r)=>{
                    if (e.status === "pending") {
                        e.status = "fulfilled";
                        e.value = r;
                    }
                }, (r)=>{
                    if (e.status === "pending") {
                        e.status = "rejected";
                        e.reason = r;
                    }
                });
            }
            switch(e.status){
                case "fulfilled":
                    return e.value;
                case "rejected":
                    throw e.reason;
            }
    }
    throw e;
}
function S(e, r, n, o, i) {
    let s = typeof e;
    if (s === "undefined" || s === "boolean") {
        e = null;
    }
    let u = false;
    if (e === null) {
        u = true;
    } else {
        switch(s){
            case "bigint":
            case "string":
            case "number":
                u = true;
                break;
            case "object":
                switch(e.$$typeof){
                    case M:
                    case wt:
                        u = true;
                        break;
                    case $t:
                        u = e._init;
                        return S(u(e._payload), r, n, o, i);
                }
        }
    }
    if (u) {
        i = i(e);
        u = o === "" ? `.${w(e, 0)}` : o;
        if (rt(i)) {
            n = "";
            if (u != null) {
                n = `${u.replace(nt, "$&/")}/`;
            }
            S(i, r, n, "", function(m) {
                return m;
            });
        } else if (i != null) {
            if (H(i)) {
                i = Ut(i, n + (i.key == null || e && e.key === i.key ? "" : `${`${i.key}`.replace(nt, "$&/")}/`) + u);
            }
            r.push(i);
        }
        return 1;
    }
    u = 0;
    const d = o === "" ? "." : `${o}:`;
    if (rt(e)) {
        for(var f = 0; f < e.length; f++){
            o = e[f];
            s = d + w(o, f);
            u += S(o, r, n, s, i);
        }
    } else {
        f = kt(e);
        if (typeof f === "function") {
            e = f.call(e);
            for(f = 0; !(o = e.next()).done;){
                o = o.value;
                s = d + w(o, f++);
                u += S(o, r, n, s, i);
            }
        } else if (s === "object") {
            if (typeof e.then === "function") {
                return S(jt(e), r, n, o, i);
            }
            r = String(e);
            throw Error(`Objects are not valid as a React child (found: ${r === "[object Object]" ? `object with keys {${Object.keys(e).join(", ")}}` : r}). If you meant to render a collection of children, use an array instead.`);
        }
    }
    return u;
}
function map(e, r, n) {
    if (e == null) {
        return e;
    }
    const o = [];
    let i = 0;
    S(e, o, "", "", function(s) {
        return r.call(n, s, i++);
    });
    return o;
}
var M;
var wt;
let It;
let Ot;
let Pt;
let Mt;
let Nt;
var $t;
let Lt;
var et;
var st;
let Ht;
var ut;
let k;
var rt;
let p;
let Dt;
var nt;
let ot;
let Wt;
let bcr;
let Ry;
let I7r;
let Zc;
let O7r;
let jr;
let LYt;
const qt = function(e) {
    e = {
        $$typeof: Pt,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null
    };
    e.Provider = e;
    e.Consumer = {
        $$typeof: Ot,
        _context: e
    };
    return e;
};
const Cc = function(e, r, n) {
    let o;
    const i = {};
    let s = null;
    if (r != null) {
        if (r.key !== undefined) {
            s = `${r.key}`;
        }
        for(o in r){
            if (Dt.call(r, o) && o !== "key" && o !== "__self" && o !== "__source") {
                i[o] = r[o];
            }
        }
    }
    let u = arguments.length - 2;
    if (u === 1) {
        i.children = n;
    } else if (u > 1) {
        const d = Array(u);
        for(let f = 0; f < u; f++){
            d[f] = arguments[f + 2];
        }
        i.children = d;
    }
    if (e && e.defaultProps) {
        u = e.defaultProps;
        for(o in u){
            if (i[o] === undefined) {
                i[o] = u[o];
            }
        }
    }
    return lt(e, s, i);
};
const M7r = function() {
    return {
        current: null
    };
};
let em;
const km = function(e, r) {
    return {
        $$typeof: Nt,
        type: e,
        compare: r === undefined ? null : r
    };
};
const Scr = function(e) {
    const r = p.T;
    const n = {};
    p.T = n;
    try {
        const o = e();
        const i = p.S;
        if (i !== null) {
            i(n, o);
        }
        if (typeof o === "object" && o !== null && typeof o.then === "function") {
            o.then(I, ot);
        }
    } catch (error) {
        ot(error);
    } finally{
        if (r !== null && n.types !== null) {
            r.types = n.types;
        }
        p.T = r;
    }
};
const Ir = function(e) {
    return p.H.use(e);
};
const useLe = function(e, r) {
    return p.H.useCallback(e, r);
};
const useTe = function(e) {
    return p.H.useContext(e);
};
const useDJ = function(e, r) {
    return p.H.useDeferredValue(e, r);
};
const useP = function(e, r) {
    return p.H.useEffect(e, r);
};
const Co = function(e) {
    return p.H.useEffectEvent(e);
};
const H7r = function() {
    return p.H.useId();
};
const aye = function(e, r, n) {
    return p.H.useImperativeHandle(e, r, n);
};
const YDe = function(e, r) {
    return p.H.useInsertionEffect(e, r);
};
const useEn = function(e, r) {
    return p.H.useLayoutEffect(e, r);
};
const useZ = function(e, r) {
    return p.H.useMemo(e, r);
};
const useGh = function(e, r, n) {
    return p.H.useReducer(e, r, n);
};
const useR = function(e) {
    return p.H.useRef(e);
};
const useY = function(e) {
    return p.H.useState(e);
};
const useRt = function(e, r, n) {
    return p.H.useSyncExternalStore(e, r, n);
};
const wcr = function() {
    return p.H.useTransition();
};
const N = Ji(()=>{
    M = Symbol.for("react.transitional.element");
    wt = Symbol.for("react.portal");
    It = Symbol.for("react.fragment");
    Ot = Symbol.for("react.consumer");
    Pt = Symbol.for("react.context");
    Mt = Symbol.for("react.suspense");
    Nt = Symbol.for("react.memo");
    $t = Symbol.for("react.lazy");
    Lt = Symbol.for("react.activity");
    et = Symbol.iterator;
    st = {
        isMounted: function() {
            return false;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    };
    Ht = Object.assign;
    ut = {};
    _.prototype.isReactComponent = {};
    _.prototype.setState = function(e, r) {
        if (typeof e !== "object" && typeof e !== "function" && e != null) {
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        }
        this.updater.enqueueSetState(this, e, r, "setState");
    };
    _.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    at.prototype = _.prototype;
    k = L.prototype = new at;
    k.constructor = L;
    Ht(k, _.prototype);
    k.isPureReactComponent = true;
    rt = Array.isArray;
    p = {
        H: null,
        A: null,
        T: null,
        S: null
    };
    Dt = Object.prototype.hasOwnProperty;
    nt = /\/+/g;
    ot = typeof reportError === "function" ? reportError : function(error) {
        if (typeof window === "object" && typeof window.ErrorEvent === "function") {
            const r = new window.ErrorEvent("error", {
                bubbles: true,
                cancelable: true,
                message: typeof error === "object" && error !== null && typeof error.message === "string" ? String(error.message) : String(error),
                error
            });
            if (!window.dispatchEvent(r)) {
                return;
            }
        } else if (typeof process === "object" && typeof process.emit === "function") {
            process.emit("uncaughtException", error);
            return;
        }
        console.error(error);
    };
    Wt = {
        map,
        forEach: function(e, r, n) {
            map(e, function() {
                r.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            let r = 0;
            map(e, ()=>{
                r++;
            });
            return r;
        },
        toArray: function(e) {
            return map(e, (r)=>r) || [];
        },
        only: function(e) {
            if (!H(e)) {
                throw Error("React.Children.only expected to receive a single React element child.");
            }
            return e;
        }
    };
    bcr = Lt;
    Ry = Wt;
    I7r = _;
    Zc = It;
    O7r = L;
    jr = Mt;
    LYt = p;
    em = H;
});
let g = null;
let D = false;
function E() {
    if (D) {
        return g;
    }
    D = true;
    try {
        g = Wmo();
        return g;
    } catch  {}
    let e = "x64-linux";
    let n = [
        e,
        `${e}-musl`
    ].flatMap((o)=>[
            `./vendor/clipboard-napi/${o}/clipboard-napi.node`,
            `../clipboard-napi/${o}/clipboard-napi.node`
        ]);
    for (let o of n){
        try {
            g = Le(o);
            return g;
        } catch  {}
    }
    return null;
}
const C = AH + String.fromCharCode(bZ.OSC);
const JRn = `${AH}\\`;
function A() {
    return bu()?.terminal ?? a.terminal;
}
function HYt() {
    let e = bu();
    if (e) {
        return e.mux;
    }
    if (a.TMUX) {
        return "tmux";
    }
    if (a.STY) {
        return "screen";
    }
    if (a.ZELLIJ) {
        return "zellij";
    }
    return null;
}
function b() {
    return bu()?.ssh ?? !!a.SSH_CONNECTION;
}
function K() {
    let e = bu();
    if (e) {
        if (e.mux !== "tmux" || !e.tmuxSocket) {
            return null;
        }
        if (isAbsolute(e.tmuxSocket) && u0(e.tmuxSocket)) {
            return [
                "-S",
                e.tmuxSocket
            ];
        }
        return null;
    }
    if (a.TMUX) {
        return [];
    }
    return null;
}
function vVe() {
    let e = A();
    if (e === "Apple_Terminal") {
        return "Fn";
    }
    if (e === "iTerm.app") {
        return "Option";
    }
    if (bu()?.isVscodeTerm || e && ft.has(e)) {
        if (O() === "macos") {
            return "Option";
        }
        return "Shift";
    }
    if (e && pt.has(e)) {
        return "Shift";
    }
    if (a.LC_TERMINAL === "iTerm2") {
        return "Option";
    }
    if (b() || HYt() !== null || O() === "macos") {
        return "Shift (Option in iTerm2, Fn in Terminal.app)";
    }
    return "Shift";
}
var pt = new Set([
    "ghostty",
    "kitty",
    "WezTerm",
    "alacritty",
    "xterm",
    "gnome-terminal",
    "vte-based",
    "konsole",
    "windows-terminal",
    "mintty",
    ...Ise
]);
var ft = new Set([
    "vscode",
    "cursor",
    "windsurf",
    "antigravity",
    "codium"
]);
function mh(...e) {
    let r = A() === "kitty" ? JRn : Gz;
    return `${C}${e.join(j5e)}${r}`;
}
function xI(e) {
    let r = HYt();
    if (r === "tmux") {
        return `\x1BPtmux;${e.replaceAll("\x1B", "\x1B\x1B")}\x1B\\`;
    }
    if (r === "screen") {
        return `\x1BP${e.replaceAll("\x1B", "\x1B\x1B")}\x1B\\`;
    }
    return e;
}
class F {
    tool = undefined;
    addonWriteFailed = false;
    addonWriteSucceeded = false;
    waylandCopyGeneration = 0;
    async probe() {
        if (O() !== "linux" || typeof this.tool === "string" && this.tool !== "addon") {
            return;
        }
        let { display, waylandDisplay } = X();
        if (waylandDisplay && await yc("wl-copy")) {
            this.tool = "wl-copy";
            return;
        }
        if (display) {
            if (await yc("xclip")) {
                this.tool = "xclip";
                return;
            }
            if (await yc("xsel")) {
                this.tool = "xsel";
                return;
            }
        }
        if (!this.addonWriteFailed && z() && E()?.setLinuxClipboardText) {
            this.tool = "addon";
            return;
        }
        this.tool = null;
    }
    recordAddonWrite(e) {
        if (e) {
            this.addonWriteSucceeded = true;
        } else {
            this.addonWriteFailed ||= !this.addonWriteSucceeded;
        }
    }
    beginWaylandCopy() {
        return ++this.waylandCopyGeneration;
    }
    isLatestWaylandCopy(e) {
        return e === this.waylandCopyGeneration;
    }
    reset() {
        this.tool = undefined;
        this.addonWriteFailed = false;
        this.addonWriteSucceeded = false;
    }
}
const dt = new q(()=>new F);
function x() {
    return dt.of(B().host);
}
function iye() {
    if (!b()) {
        switch(O()){
            case "macos":
            case "windows":
            case "wsl":
                return "native";
            case "linux":
                if (typeof x().tool === "string") {
                    return "native";
                }
                break;
        }
    }
    if (K()) {
        return "tmux-buffer";
    }
    return "osc52";
}
function QRn() {
    return x().probe();
}
function Zts() {
    if (O() !== "linux") {
        return "not_linux";
    }
    let { tool } = x();
    if (tool === undefined) {
        return "not_probed";
    }
    return tool ?? "none";
}
function R7r() {
    return a.VTE_VERSION != null;
}
function X() {
    return {
        display: process.env.DISPLAY,
        waylandDisplay: process.env.WAYLAND_DISPLAY
    };
}
function z() {
    let { display, waylandDisplay } = X();
    if (display) {
        return /^(unix)?:/.test(display);
    }
    return !!waylandDisplay;
}
function mt(e) {
    return /[^\x00-\x7f]/.test(e);
}
function ZRn(e) {
    if (!Mx.hasOsc52ClipboardUtf8Bug() || !mt(e)) {
        return null;
    }
    return "VS Code 1.123/1.124 will mojibake this paste — update to ≥1.125";
}
async function Tt(e) {
    let r = K();
    if (!r) {
        return false;
    }
    let n = {
        input: e,
        useCwd: false,
        timeout: 2000
    };
    let o = a.LC_TERMINAL ?? "unset";
    let i = r.length > 0 ? "attacher socket" : "$TMUX";
    let { code } = await it("tmux", [
        ...r,
        "load-buffer",
        "-w",
        "-"
    ], n);
    t(`clipboard: tmux load-buffer -w - \u2192 exit ${code} (server=${i} LC_TERMINAL=${o})`);
    if (code === 0) {
        return true;
    }
    let u = await it("tmux", [
        ...r,
        "load-buffer",
        "-"
    ], n);
    t(`clipboard: retry tmux load-buffer - \u2192 exit ${u.code} (server=${i} LC_TERMINAL=${o})`);
    return u.code === 0;
}
const U = 76;
async function yE(e) {
    let r = Buffer.from(e, "utf8").toString("base64");
    let n = b();
    let o = O();
    let i = false;
    if (!n) {
        if (o === "linux" && typeof x().tool !== "string") {
            await x().probe();
        }
        i = St(e);
    }
    await Tt(e);
    let s = HYt();
    let u = A();
    let d = s === null && i && (o === "linux" || o === "wsl") && R7r() && (u === "vte-based" || u === "gnome-terminal") && a.TERM?.startsWith("xterm") === true && !a.XTERM_VERSION && !a.ALACRITTY_WINDOW_ID && !a.ALACRITTY_LOG && !a.KITTY_WINDOW_ID && !a.WEZTERM_PANE;
    let f = d ? "none(vte)" : s === "tmux" ? "raw+dcs" : s === "screen" ? "dcs" : "raw";
    t(`clipboard: setClipboard mux=${s ?? "none"} ssh=${n} native=${i} predicted=${iye()} emit=${f} bytes=${e.length}`);
    if (d) {
        return "";
    }
    if (s === "tmux") {
        let m = `${AH}]52;c;${r}${Gz}`;
        return m + xI(m);
    }
    if (s === "screen") {
        let m = [];
        for(let T = 0; T < r.length; T += U){
            m.push(r.slice(T, T + U));
        }
        return `${AH}P${AH}]52;c;${m.join(`${JRn}${AH}P`)}${Gz}${JRn}`;
    }
    return mh(Yp.CLIPBOARD, "c", r);
}
const Y = "[Console]::InputEncoding = [Text.Encoding]::UTF8; Set-Clipboard -Value ([Console]::In.ReadToEnd())";
const xt = "[Console]::OutputEncoding = [Text.Encoding]::UTF8; Get-Clipboard -Raw";
function St(e) {
    let r = {
        input: e,
        useCwd: false,
        timeout: 2000
    };
    switch(O()){
        case "macos":
            it("pbcopy", [], r);
            return true;
        case "linux":
            {
                let n = x();
                if (n.tool === "wl-copy") {
                    _t(e);
                    return true;
                }
                if (n.tool === "xclip") {
                    let o = {
                        ...r,
                        useToolMemoryCgroup: false
                    };
                    it("xclip", [
                        "-selection",
                        "clipboard"
                    ], o);
                    it("xclip", [
                        "-selection",
                        "primary"
                    ], o);
                    return true;
                }
                if (n.tool === "xsel") {
                    let o = {
                        ...r,
                        useToolMemoryCgroup: false
                    };
                    it("xsel", [
                        "--clipboard",
                        "--input"
                    ], o);
                    it("xsel", [
                        "--primary",
                        "--input"
                    ], o);
                    return true;
                }
                if (n.tool === "addon") {
                    let o;
                    try {
                        o = E()?.setLinuxClipboardText(e) === true;
                    } catch  {
                        o = false;
                    }
                    n.recordAddonWrite(o);
                    n.probe();
                    return o;
                }
                return false;
            }
        case "wsl":
            it("powershell.exe", [
                "-NoProfile",
                "-NonInteractive",
                "-Command",
                Y
            ], r);
            return true;
        case "windows":
            it("powershell", [
                "-NoProfile",
                "-NonInteractive",
                "-Command",
                Y
            ], r);
            return true;
    }
    return false;
}
async function _t(e) {
    let r = x();
    let n = r.beginWaylandCopy();
    let o = {
        input: e,
        useCwd: false,
        timeout: 2000,
        stdout: "ignore",
        stderr: "ignore",
        useToolMemoryCgroup: false
    };
    await it("wl-copy", [], o);
    if (!r.isLatestWaylandCopy(n)) {
        return;
    }
    await it("wl-copy", [
        "--primary"
    ], o);
}
async function dkt(e = "clipboard") {
    if (b()) {
        return "";
    }
    let r = {
        useCwd: false,
        timeout: 2000
    };
    switch(O()){
        case "macos":
            {
                let n = await it("pbpaste", [], r);
                if (n.code === 0) {
                    return n.stdout;
                }
                return "";
            }
        case "windows":
        case "wsl":
            {
                let n = await it(O() === "wsl" ? "powershell.exe" : "powershell", [
                    "-NoProfile",
                    "-NonInteractive",
                    "-Command",
                    xt
                ], r);
                if (n.code === 0) {
                    return n.stdout.replace(/\r\n/g, `
`).replace(/\n$/, "");
                }
                return "";
            }
        case "linux":
            {
                let n = e === "primary";
                let o = [
                    [
                        "wl-paste",
                        n ? [
                            "--primary",
                            "--no-newline"
                        ] : [
                            "--no-newline"
                        ]
                    ],
                    [
                        "xclip",
                        [
                            "-selection",
                            n ? "primary" : "clipboard",
                            "-o"
                        ]
                    ],
                    [
                        "xsel",
                        [
                            n ? "--primary" : "--clipboard",
                            "--output"
                        ]
                    ]
                ];
                for (let [i, s] of o){
                    let u = await it(i, [
                        ...s
                    ], r);
                    if (u.code === 0) {
                        return u.stdout;
                    }
                }
                return await gt(n, r.timeout) ?? "";
            }
        default:
            return "";
    }
}
async function gt(e, timeout) {
    if (!z()) {
        return null;
    }
    try {
        return (await E()?.getLinuxClipboardText?.(e, timeout))?.replace(/\r?\n$|\r$/, "") ?? null;
    } catch (error) {
        t(`clipboard: addon read: ${l(error)}`);
        return null;
    }
}
var Yp = {
    SET_TITLE_AND_ICON: 0,
    SET_ICON: 1,
    SET_TITLE: 2,
    SET_COLOR: 4,
    SET_CWD: 7,
    HYPERLINK: 8,
    ITERM2: 9,
    SET_FG_COLOR: 10,
    SET_BG_COLOR: 11,
    SET_CURSOR_COLOR: 12,
    CLIPBOARD: 52,
    KITTY: 99,
    RESET_COLOR: 104,
    RESET_FG_COLOR: 110,
    RESET_BG_COLOR: 111,
    RESET_CURSOR_COLOR: 112,
    SEMANTIC_PROMPT: 133,
    GHOSTTY: 777,
    ITERM2_PROPRIETARY: 1337,
    PROGRAM_STATUS: 7501,
    TAB_STATUS: 21337
};
function ens(e) {
    let r = e.indexOf(";");
    let n = r >= 0 ? e.slice(0, r) : e;
    let o = r >= 0 ? e.slice(r + 1) : "";
    let i = parseInt(n, 10);
    if (i === Yp.SET_TITLE_AND_ICON) {
        return {
            type: "title",
            action: {
                type: "both",
                title: o
            }
        };
    }
    if (i === Yp.SET_ICON) {
        return {
            type: "title",
            action: {
                type: "iconName",
                name: o
            }
        };
    }
    if (i === Yp.SET_TITLE) {
        return {
            type: "title",
            action: {
                type: "windowTitle",
                title: o
            }
        };
    }
    if (i === Yp.HYPERLINK) {
        let s = o.split(";");
        let u = s[0] ?? "";
        let url = s.slice(1).join(";");
        if (url === "") {
            return {
                type: "link",
                action: {
                    type: "end"
                }
            };
        }
        let f = {};
        if (u) {
            for (let m of u.split(":")){
                let T = m.indexOf("=");
                if (T >= 0) {
                    f[m.slice(0, T)] = m.slice(T + 1);
                }
            }
        }
        return {
            type: "link",
            action: {
                type: "start",
                url,
                params: Object.keys(f).length > 0 ? f : undefined
            }
        };
    }
    if (i === Yp.TAB_STATUS) {
        return {
            type: "tabStatus",
            action: Et(o)
        };
    }
    return {
        type: "unknown",
        sequence: `\x1B]${e}`
    };
}
function j(e) {
    let r = e.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (r) {
        return {
            type: "rgb",
            r: parseInt(r[1], 16),
            g: parseInt(r[2], 16),
            b: parseInt(r[3], 16)
        };
    }
    let n = e.match(/^rgb:([0-9a-f]{1,4})\/([0-9a-f]{1,4})\/([0-9a-f]{1,4})$/i);
    if (n) {
        let o = (i)=>Math.round(parseInt(i, 16) / (16 ** i.length - 1) * 255);
        return {
            type: "rgb",
            r: o(n[1]),
            g: o(n[2]),
            b: o(n[3])
        };
    }
    return null;
}
function Et(e) {
    let r = {};
    for (let [n, o] of yt(e)){
        switch(n){
            case "indicator":
                r.indicator = o === "" ? null : j(o);
                break;
            case "status":
                r.status = o === "" ? null : o;
                break;
            case "status-color":
                r.statusColor = o === "" ? null : j(o);
                break;
        }
    }
    return r;
}
function* yt(e) {
    let r = "";
    let n = "";
    let o = false;
    let i = false;
    for (let s of e){
        if (i) {
            if (o) {
                n += s;
            } else {
                r += s;
            }
            i = false;
        } else if (s === "\\") {
            i = true;
        } else if (s === ";") {
            yield [
                r,
                n
            ];
            r = "";
            n = "";
            o = false;
        } else if (s === "=" && !o) {
            o = true;
        } else if (o) {
            n += s;
        } else {
            r += s;
        }
    }
    if (r || o) {
        yield [
            r,
            n
        ];
    }
}
const V = new RegExp(eG.source, "g");
function $nt(e, r) {
    let n = e.replace(V, "");
    if (!n) {
        return Fnt;
    }
    let o = {
        id: Ct(n),
        ...r
    };
    let i = Object.entries(o).map(([s, u])=>`${s}=${u}`).join(":");
    return mh(Yp.HYPERLINK, i, n);
}
function Ct(e) {
    let r = 0;
    for(let n = 0; n < e.length; n++){
        r = (r << 5) - r + e.charCodeAt(n) | 0;
    }
    return (r >>> 0).toString(36);
}
var Fnt = mh(Yp.HYPERLINK, "", "");
const ukt = {
    NOTIFY: 0,
    BADGE: 2,
    PROGRESS: 4
};
const pkt = {
    CLEAR: 0,
    SET: 1,
    ERROR: 2,
    INDETERMINATE: 3
};
const exn = `${C}${Yp.ITERM2};${ukt.PROGRESS};${pkt.CLEAR};${Gz}`;
const tns = `${C}${Yp.SET_TITLE_AND_ICON};${Gz}`;
const txn = mh(Yp.TAB_STATUS, "indicator=;status=;status-color=");
function DYt() {
    return false;
}
function nns(e) {
    let r = [];
    let n = (o)=>{
        if (o.type === "rgb") {
            return `#${[
                o.r,
                o.g,
                o.b
            ].map((i)=>i.toString(16).padStart(2, "0")).join("")}`;
        }
        return "";
    };
    if ("indicator" in e) {
        r.push(`indicator=${e.indicator ? n(e.indicator) : ""}`);
    }
    if ("status" in e) {
        r.push(`status=${e.status?.replaceAll("\\", "\\\\").replaceAll(";", "\\;") ?? ""}`);
    }
    if ("statusColor" in e) {
        r.push(`status-color=${e.statusColor ? n(e.statusColor) : ""}`);
    }
    return mh(Yp.TAB_STATUS, r.join(";"));
}
const bt = 2048;
const ht = 192;
const vt = 32;
function rns(e) {
    let r = e.replace(/[^A-Za-z0-9_.+-]/g, "-").slice(0, vt);
    if (r.length > 0) {
        return r;
    }
}
function W(e, r) {
    let n = Lpe(e.replace(V, " "), r);
    return Buffer.from(n).toString("base64");
}
function _cr(e) {
    let r = [
        `state=${e.state}`,
        "app=claude-code"
    ];
    if (e.id !== undefined) {
        r.push(`id=${e.id}`);
    }
    if (e.state === "blocked" && e.kind) {
        r.push(`kind=${e.kind}`);
    }
    if ((e.state === "working" || e.state === "blocked") && e.progress !== undefined && Number.isFinite(e.progress)) {
        let n = Math.min(100, Math.max(0, Math.round(e.progress)));
        r.push(`progress=${n}`);
    }
    if (e.title) {
        r.push(`title=${W(e.title, ht)}`);
    }
    if (e.msg) {
        r.push(`msg=${W(e.msg, bt)}`);
    }
    return mh(Yp.PROGRAM_STATUS, r.join(":"));
}
const nxn = `${C}${Yp.PROGRAM_STATUS};state=clear${Gz}`;
function ons(e) {
    return mh(Yp.PROGRAM_STATUS, `state=clear:id=${e}`);
}
class J {
    hooks = null;
    uiMounted = false;
    setHooks(e) {
        this.hooks = e;
    }
    setUiMounted(e) {
        this.uiMounted = e;
    }
}
const h = new J;
function x7r(e) {
    h.setHooks(e);
}
function P7r() {
    return h.hooks;
}
function Q(e) {
    h.setUiMounted(e);
}
function rxn() {
    return h.uiMounted;
}
class tt extends Map {
    get everMounted() {
        return rxn();
    }
    set everMounted(e) {
        Q(e);
    }
    set(e, r) {
        this.everMounted = true;
        let n = this.get(e);
        if (n && n !== r && !n.hasUnmounted && n.holdsRawMode) {
            c(Error("ink: second root created on a stream whose mounted root still holds stdin (raw mode); unmount the previous root first"));
        }
        return super.set(e, r);
    }
    treeRoots = new Map;
    standaloneRender = null;
    claimForStandaloneRender(e) {
        let r = ()=>{
            if (this.standaloneRender === n) {
                this.standaloneRender = null;
            }
        };
        let n = e.then(r, r);
        this.standaloneRender = n;
    }
    get pendingStandaloneRender() {
        return this.standaloneRender;
    }
}
const At = new q(()=>new tt);
function ri() {
    return At.of(B().host);
}
export { JRn, HYt, vVe, mh, xI, iye, QRn, Zts, R7r, ZRn, yE, dkt, Yp, ens, $nt, Fnt, ukt, pkt, exn, tns, txn, DYt, nns, rns, _cr, nxn, ons, x7r, P7r, rxn, ri, bcr, Ry, I7r, Zc, O7r, jr, LYt, qt, Cc, M7r, em, km, Scr, Ir, useLe as le, useTe as Te, useDJ as DJ, useP as P, Co, H7r, aye, YDe, useEn as en, useZ as Z, useGh as gh, useR as R, useY as y, useRt as Rt, wcr, N };
