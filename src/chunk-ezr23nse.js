import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B, bu } from "/$bunfs/root/chunk-ctt36bn8.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { QS } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Mx } from "/$bunfs/root/chunk-yq147k4z.js";
import { ty } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
class i {
    reading;
    settled = Oe();
    constructor(e){
        this.reading = e === undefined ? {
            state: "unasked"
        } : {
            state: "settled",
            value: e.value,
            source: e.source
        };
    }
    get() {
        return this.reading;
    }
    now() {
        return this.reading.state === "settled" && this.reading.value;
    }
    begin() {
        if (this.reading.state !== "unasked") {
            return false;
        }
        this.reading = {
            state: "asking"
        };
        return true;
    }
    unask() {
        if (this.reading.state === "asking") {
            this.reading = {
                state: "unasked"
            };
        }
    }
    answer(e) {
        if (this.reading.state === "settled") {
            return false;
        }
        this.reading = {
            state: "settled",
            ...e
        };
        try {
            this.settled.emit(e.value);
        } finally{
            this.settled.clear();
        }
        return true;
    }
    onSettle(e) {
        if (this.reading.state === "settled") {
            e(this.reading.value);
            return ()=>{};
        }
        return this.settled.subscribe(e);
    }
}
const s = {
    extendedKeys: false,
    synchronizedOutput: false,
    kittyKeyboard: true,
    kittyGraphics: false,
    mousePixels: false,
    programStatus: false
};
const O8n = Object.keys(s);
class o {
    readings = new Map;
    answeredYes = new Set;
    listeners = new Map;
    constructor(e){
        for (let t of O8n){
            let r = e[t];
            this.readings.set(t, "settled" in r ? {
                state: "settled",
                value: r.settled,
                source: r.source
            } : {
                state: "pending",
                likely: r.likely,
                source: r.source
            });
        }
    }
    get(e) {
        return this.readings.get(e);
    }
    now(e) {
        let t = this.get(e);
        if (t.state === "settled") {
            return t.value;
        }
        return s[e];
    }
    confirmed(e) {
        return this.answeredYes.has(e);
    }
    pending() {
        return O8n.filter((e)=>this.get(e).state === "pending");
    }
    answer(e, t, r) {
        let n = this.get(e);
        if (n.state === "settled") {
            if (t && n.value) {
                this.answeredYes.add(e);
            }
            return false;
        }
        if (t) {
            this.answeredYes.add(e);
        }
        this.settle(e, t, r);
        return true;
    }
    deadline() {
        for (let e of this.pending()){
            let t = this.get(e);
            this.settle(e, t.likely, `${t.source}, no answer`);
        }
    }
    onSettle(e, t) {
        let r = this.get(e);
        if (r.state === "settled") {
            t(r.value);
            return ()=>{};
        }
        let n = this.listeners.get(e) ?? new Set;
        this.listeners.set(e, n);
        n.add(t);
        return ()=>{
            n.delete(t);
        };
    }
    settle(e, t, source) {
        this.readings.set(e, {
            state: "settled",
            value: t,
            source
        });
        let n = this.listeners.get(e);
        this.listeners.delete(e);
        for (let p of n ?? []){
            p(t);
        }
    }
}
const l = Se(ty(), 1);
function vht(e) {
    if (e === undefined) {
        return null;
    }
    if (/^st(term)?(-|$)/.test(e)) {
        return "st";
    }
    if (/^rxvt(-|$)/.test(e)) {
        return "rxvt";
    }
    return null;
}
const EBr = [
    "iTerm.app",
    "kitty",
    "WezTerm",
    "ghostty",
    "tmux",
    "windows-terminal",
    "WarpTerminal"
];
const RWo = [
    "windows-terminal"
];
function u(terminal) {
    return vht(terminal) === "st";
}
function d() {
    return {
        extendedKeys: T(a.terminal, a.CLAUDE_CODE_SESSION_KIND === "bg"),
        synchronizedOutput: _(),
        kittyKeyboard: E(a.terminal, a.CLAUDE_CODE_SESSION_KIND === "bg"),
        kittyGraphics: b({
            terminal: a.terminal,
            bgWorker: a.CLAUDE_CODE_SESSION_KIND === "bg",
            multiplexed: Boolean(a.TMUX) || Boolean(a.STY),
            forced: a.CLAUDE_CODE_FORCE_TERMINAL_IMAGES
        }),
        mousePixels: y({
            terminal: a.terminal,
            bgWorker: a.CLAUDE_CODE_SESSION_KIND === "bg",
            multiplexed: Boolean(a.TMUX) || Boolean(a.STY)
        }),
        programStatus: g({
            bgWorker: a.CLAUDE_CODE_SESSION_KIND === "bg",
            tabWritesDisabled: a.CLAUDE_CODE_DISABLE_TERMINAL_TITLE
        })
    };
}
function g(e) {
    if (e.tabWritesDisabled) {
        return {
            settled: false,
            source: "env: CLAUDE_CODE_DISABLE_TERMINAL_TITLE"
        };
    }
    if (e.bgWorker) {
        return {
            settled: false,
            source: "bg worker"
        };
    }
    return {
        likely: false,
        source: "not asked yet"
    };
}
function y(e) {
    if (e.bgWorker) {
        return {
            settled: false,
            source: "bg worker"
        };
    }
    if (e.multiplexed) {
        return {
            settled: false,
            source: "env: inside tmux or screen"
        };
    }
    return {
        likely: false,
        source: `env: terminal=${e.terminal || "unknown"}, not asked yet`
    };
}
const c = [
    "kitty",
    "ghostty"
];
const m = "0.28.0";
function xWo(e) {
    if (e === null) {
        return false;
    }
    if (e.startsWith("kitty(")) {
        let t = l.coerce(e.slice(6));
        return t !== null && QS(t.version, m);
    }
    return c.some((t)=>e === t || e.startsWith(`${t} `));
}
function b(e) {
    if (e.forced) {
        return {
            settled: true,
            source: "env: CLAUDE_CODE_FORCE_TERMINAL_IMAGES"
        };
    }
    if (e.bgWorker) {
        return {
            settled: false,
            source: "bg worker"
        };
    }
    if (e.multiplexed) {
        return {
            settled: false,
            source: "env: inside tmux or screen"
        };
    }
    return {
        likely: false,
        source: `env: terminal=${e.terminal || "unknown"}, not asked yet`
    };
}
function E(terminal, t) {
    if (t) {
        return {
            settled: true,
            source: "bg worker"
        };
    }
    if (terminal !== null && u(terminal)) {
        return {
            settled: false,
            source: `env: terminal=${terminal}`
        };
    }
    return {
        likely: true,
        source: "not asked yet"
    };
}
function T(terminal, t) {
    let source = `env: terminal=${terminal || "unknown"}`;
    if (t) {
        return {
            settled: false,
            source: `${source}, bg worker`
        };
    }
    if (terminal !== null && EBr.includes(terminal)) {
        return {
            settled: true,
            source
        };
    }
    if (terminal !== null && u(terminal)) {
        return {
            settled: false,
            source
        };
    }
    return {
        likely: false,
        source
    };
}
function _() {
    if (a.TMUX) {
        return {
            likely: false,
            source: "env: TMUX (tmux answers for itself)"
        };
    }
    if (a.CLAUDE_CODE_FORCE_SYNC_OUTPUT) {
        return {
            settled: true,
            source: "env: CLAUDE_CODE_FORCE_SYNC_OUTPUT"
        };
    }
    if (Mx.isJetBrainsIdeTerminal()) {
        return {
            settled: true,
            source: "env: TERMINAL_EMULATOR=JetBrains-JediTerm"
        };
    }
    let e = x();
    if (e) {
        return {
            likely: true,
            source: `env: ${e}`
        };
    }
    return {
        likely: false,
        source: "env: no known terminal"
    };
}
function x() {
    let a_TERM_PROGRAM = a.TERM_PROGRAM;
    let a_TERM = a.TERM;
    if (a_TERM_PROGRAM === "iTerm.app" || a_TERM_PROGRAM === "WezTerm" || a_TERM_PROGRAM === "WarpTerminal" || a_TERM_PROGRAM === "ghostty" || a_TERM_PROGRAM === "contour" || a_TERM_PROGRAM === "vscode" || a_TERM_PROGRAM === "alacritty" || a_TERM_PROGRAM === "mintty" || a_TERM_PROGRAM === "rio" || a_TERM_PROGRAM === "Tabby") {
        return `TERM_PROGRAM=${a_TERM_PROGRAM}`;
    }
    if (a_TERM?.includes("kitty")) {
        return `TERM=${a_TERM}`;
    }
    if (a.KITTY_WINDOW_ID) {
        return "KITTY_WINDOW_ID";
    }
    if (a_TERM === "xterm-ghostty") {
        return `TERM=${a_TERM}`;
    }
    if (a_TERM?.startsWith("foot")) {
        return `TERM=${a_TERM}`;
    }
    if (a_TERM?.includes("alacritty")) {
        return `TERM=${a_TERM}`;
    }
    if (a.ZED_TERM) {
        return "ZED_TERM";
    }
    if (a.WT_SESSION) {
        return "WT_SESSION";
    }
    if (parseInt(a.VTE_VERSION ?? "", 10) >= 6800) {
        return `VTE_VERSION=${a.VTE_VERSION}`;
    }
}
class f {
    xtversionName = undefined;
    #e = undefined;
    get capabilities() {
        return this.#e ??= new o(d());
    }
    #t = undefined;
    get imageFiles() {
        return this.#t ??= new i(a.CLAUDE_CODE_FORCE_TERMINAL_IMAGES ? {
            value: true,
            source: "env: CLAUDE_CODE_FORCE_TERMINAL_IMAGES"
        } : undefined);
    }
    resetCapabilities() {
        this.#e = undefined;
        this.#t = undefined;
    }
    osc11Responsive = undefined;
    cellPixels = undefined;
    probeEventLogged = false;
    nativeCursorEnabled = undefined;
}
const v = new q(()=>new f);
function OC() {
    return v.of(B().host);
}
function MC() {
    return OC().capabilities;
}
function M8n() {
    return MC().now("kittyGraphics");
}
function PWo(e) {
    return MC().onSettle("kittyGraphics", e);
}
function TBt() {
    return OC().imageFiles;
}
function IWo(e) {
    OC().xtversionName = e;
}
function ABt() {
    return OC().xtversionName;
}
function Ug() {
    if (bu()?.isVscodeTerm) {
        return true;
    }
    if (a.TERM_PROGRAM === "vscode") {
        return true;
    }
    return OC().xtversionName?.startsWith("xterm.js") ?? false;
}
function OWo() {
    let e = OC().xtversionName?.toLowerCase();
    return e !== undefined && (e.startsWith("iterm2") || e.startsWith("tmux "));
}
function MWo() {
    return OC().xtversionName?.toLowerCase().startsWith("ghostty") ?? false;
}
export { O8n, vht, EBr, RWo, xWo, OC, MC, M8n, PWo, TBt, IWo, ABt, Ug, OWo, MWo };
