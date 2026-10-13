import { Mx } from "/$bunfs/root/chunk-yq147k4z.js";
import { Gz, pl, mAo, UUe, Ub, SZ, Ese, XE, XHt, JHt, hIs, yIs, hAo, _Is, W5e } from "/$bunfs/root/chunk-223dyewd.js";
import { q, B, bu } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Ise, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { EBr, RWo, MC, ABt, Ug } from "/$bunfs/root/chunk-ezr23nse.js";
import { QS } from "/$bunfs/root/chunk-0ycjphb5.js";
import { tFt, nJe, SNo, qdn, Kdn, Xmt, wNo, Ydn, VH, qH, Jmt, Qmt, Ffe, vNo, ENo, Jdn } from "/$bunfs/root/chunk-avb6ma1z.js";
import { mh, xI, Yp, $nt, ukt, pkt, qt, le, Te, Z, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { ty } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { EventEmitter } from "events";
const Ee = pl(0, "f");
function _No() {
    return XE + XHt + Ub;
}
function K0r() {
    return XE + Ub;
}
function ZXe(r) {
    return Ub + (Ese + mAo(1)).repeat(r) + Ub;
}
class QXe {
    _didStopImmediatePropagation = false;
    didStopImmediatePropagation() {
        return this._didStopImmediatePropagation;
    }
    stopImmediatePropagation() {
        this._didStopImmediatePropagation = true;
    }
}
class Y$t extends EventEmitter {
    constructor(){
        super();
        this.setMaxListeners(0);
    }
    emit(r, ...n) {
        if (r === "error") {
            return super.emit(r, ...n);
        }
        let o = this.rawListeners(r);
        if (o.length === 0) {
            return false;
        }
        let u = n[0] instanceof QXe ? n[0] : null;
        for (let i of o){
            i.apply(this, n);
            if (u?.didStopImmediatePropagation()) {
                break;
            }
        }
        return true;
    }
}
class E {
    value = undefined;
    get() {
        let r = ABt();
        let n = bu();
        let wheelFlood = n?.wheelFlood ?? G0r();
        let jediTerm = n ? Ise.includes(n.terminal ?? "") : Mx.isJetBrainsIdeTerminal();
        let wtSession = n?.wtSession ?? !!a.WT_SESSION;
        let p = Ug();
        let value = this.value;
        if (value && value.xtversion === (r ?? "(no reply)") && value.wheelFlood === wheelFlood && value.jediTerm === jediTerm && value.wtSession === wtSession && value.xtermJs === p) {
            return value;
        }
        let platform = "linux";
        this.value = {
            useDecayCurve: !wheelFlood && (p || platform === "win32" || wtSession),
            useAdaptiveDrain: p,
            base: jediTerm ? 2 : ie(p, wheelFlood, wtSession),
            xtermJs: p,
            wheelFlood,
            jediTerm,
            termProgram: a.TERM_PROGRAM ?? "unset",
            termProgramVersion: a.TERM_PROGRAM_VERSION ?? "unset",
            xtversion: r ?? "(no reply)",
            wtSession,
            scrollSpeedEnv: a.CLAUDE_CODE_SCROLL_SPEED ?? "unset",
            platform
        };
        return this.value;
    }
    invalidate() {
        this.value = undefined;
    }
}
const S = new q(()=>new E);
function tK() {
    return S.of(B().host).get();
}
function G0r() {
    if (process.env.CURSOR_TRACE_ID !== undefined) {
        return true;
    }
    if (a.VSCODE_GIT_ASKPASS_MAIN?.includes("cursor")) {
        return true;
    }
    if (a.TERM_PROGRAM === "vscode") {
        let r = oe(a.TERM_PROGRAM_VERSION);
        if (r !== null) {
            return r >= 1092000 && r < 1105000;
        }
    }
    return ABt()?.startsWith("xterm.js") ?? false;
}
function oe(TERM_PROGRAM_VERSION) {
    if (!TERM_PROGRAM_VERSION) {
        return null;
    }
    let n = /^(\d+)\.(\d+)\.(\d+)/.exec(TERM_PROGRAM_VERSION);
    if (!n) {
        return null;
    }
    return +n[1] * 1000000 + +n[2] * 1000 + +n[3];
}
function a6n(r, n, o) {
    if (!n && (r || false || o)) {
        return 3;
    }
    return 1;
}
function ie(r, wheelFlood, wtSession) {
    let u = a6n(r, wheelFlood, wtSession);
    let a_CLAUDE_CODE_SCROLL_SPEED = a.CLAUDE_CODE_SCROLL_SPEED;
    if (!a_CLAUDE_CODE_SCROLL_SPEED) {
        return u;
    }
    let p = parseFloat(a_CLAUDE_CODE_SCROLL_SPEED);
    if (Number.isNaN(p) || p <= 0) {
        return u;
    }
    return Math.min(p, 20);
}
function X$t() {
    S.of(B().host).invalidate();
}
function bNo() {
    if (a.TMUX && MC().get("synchronizedOutput").state === "pending") {
        return;
    }
    return yve();
}
function Iee() {
    return g({
        beforeTheAnswer: false
    });
}
function yve() {
    return g({
        beforeTheAnswer: true
    });
}
function g({ beforeTheAnswer }) {
    if (a.CLAUDE_BG_BACKEND === "daemon") {
        return bu()?.syncOutput !== false;
    }
    if (!a.TMUX && a.CLAUDE_CODE_FORCE_SYNC_OUTPUT) {
        return true;
    }
    let n = MC().get("synchronizedOutput");
    if (n.state === "settled") {
        return n.value;
    }
    return beforeTheAnswer && n.likely;
}
function l6n(r = Iee()) {
    if (a.CLAUDE_BG_BACKEND === "daemon") {
        return false;
    }
    return r && a.TMUX == null && process.env.ZELLIJ == null && !Mx.isJetBrainsIdeTerminal() && !Ug() && a.WT_SESSION == null;
}
const b = Se(ty(), 1);
function eJe() {
    let r = bu()?.progressReporting;
    if (r !== undefined) {
        return r;
    }
    if (!process.stdout.isTTY) {
        return false;
    }
    if (a.WT_SESSION) {
        return false;
    }
    if (a.ConEmuANSI || a.ConEmuPID || a.ConEmuTask) {
        return true;
    }
    let n = b.coerce(a.TERM_PROGRAM_VERSION);
    if (!n) {
        return false;
    }
    if (a.TERM_PROGRAM === "ghostty") {
        return QS(n.version, "1.2.0");
    }
    if (a.TERM_PROGRAM === "iTerm.app") {
        return QS(n.version, "3.6.6");
    }
    return false;
}
function y(r) {
    if (r != null) {
        return EBr.includes(r);
    }
    return MC().now("extendedKeys");
}
function J$t(r = a.terminal, n = MC()) {
    if (a.TMUX || a.STY || !n.now("extendedKeys")) {
        return false;
    }
    return r === null || !RWo.includes(r) || n.confirmed("kittyKeyboard");
}
function OIe() {
    if (y() || MC().now("kittyKeyboard")) {
        return hAo;
    }
    return "";
}
function Ymt(r) {
    if (y()) {
        return hAo + (r?.legacyKitty ? yIs : hIs) + _Is;
    }
    return "";
}
function Q$t(r) {
    return Jmt + XE + Ub + Ymt(r);
}
function Oee() {
    return OIe() + Qmt + W5e;
}
const Wdn = 5000;
function Z$t() {
    return !!a.WT_SESSION;
}
const c6n = l6n(yve());
function d6n(r, startedMs, bytes) {
    let endedMs = performance.now();
    let r_slowestWrite = r.slowestWrite;
    if (r_slowestWrite === undefined || endedMs - startedMs >= r_slowestWrite.endedMs - r_slowestWrite.startedMs) {
        r.slowestWrite = {
            startedMs,
            endedMs,
            bytes
        };
    }
}
function zdn(r, n) {
    if (r.stdoutDead) {
        return;
    }
    let o = performance.now();
    let u = Buffer.byteLength(n);
    try {
        r.stdout.write(n);
    } catch (error) {
        if (r.tolerateDeadStdout && (v(error) === "EIO" || v(error) === "EPIPE")) {
            r.stdoutDead = true;
            d6n(r, o, u);
            return;
        }
        throw error;
    }
    d6n(r, o, u);
}
function Y0r(r, n, o = false, u, i = "") {
    let p = u !== undefined && u > 1 ? u - 1 : undefined;
    if (n.length === 0) {
        if (i !== "") {
            zdn(r, i);
        }
        return;
    }
    let s = !o;
    let d = i + (s ? tFt : "");
    for (let c of n){
        switch(c.type){
            case "stdout":
                d += c.content;
                break;
            case "clear":
                if (c.count > 0) {
                    d += JHt(c.count);
                }
                break;
            case "clearTerminal":
                d += c.altScreen ? _No() : ZXe(c.viewportRows);
                break;
            case "cursorHide":
                d += qH;
                break;
            case "cursorShow":
                d += VH;
                break;
            case "cursorMove":
                d += SZ(c.x, p !== undefined ? Math.max(-p, Math.min(p, c.y)) : c.y);
                break;
            case "cursorTo":
                d += UUe(c.col);
                break;
            case "carriageReturn":
                d += "\r";
                break;
            case "hyperlink":
                d += $nt(c.uri);
                break;
            case "styleStr":
                d += c.str;
                break;
        }
    }
    if (s) {
        d += nJe;
    }
    zdn(r, d);
}
function v(error) {
    if (error && typeof error === "object" && "code" in error) {
        return String(error.code);
    }
}
function Gdn(hidden, label, role, state, preserveWhitespace) {
    if (hidden === undefined && label === undefined && role === undefined && state === undefined && preserveWhitespace === undefined) {
        return;
    }
    return {
        hidden,
        label,
        role,
        state,
        preserveWhitespace
    };
}
function GH(r, n) {
    if (r === undefined) {
        return;
    }
    if (Number.isInteger(r)) {
        return;
    }
    t(`${n} should be an integer, got ${r}`, {
        level: "warn"
    });
}
function ae({ children, ref, tabIndex, autoFocus, onClick, onFocus, onFocusCapture, onBlur, onBlurCapture, onMouseEnter, onMouseLeave, onPointer, hoverIgnoresBlankCells, hoverFollowsPaint, renderEvent, renderComponent, drawPending, elementKey, elementPlugin, onKeyDown, onKeyDownCapture, onPaste, onPasteCapture, onWheel, onWheelCapture, keybindingScope, textEntry, onAction, onActionCapture, "aria-hidden": aria_hidden, "aria-label": aria_label, "aria-role": aria_role, "aria-state": aria_state, "aria-preserve-whitespace": aria_preserve_whitespace, ...rest }) {
    GH(rest.margin, "margin");
    GH(rest.marginX, "marginX");
    GH(rest.marginY, "marginY");
    GH(rest.marginTop, "marginTop");
    GH(rest.marginBottom, "marginBottom");
    if (rest.marginLeft !== "auto") {
        GH(rest.marginLeft, "marginLeft");
    }
    if (rest.marginRight !== "auto") {
        GH(rest.marginRight, "marginRight");
    }
    GH(rest.padding, "padding");
    GH(rest.paddingX, "paddingX");
    GH(rest.paddingY, "paddingY");
    GH(rest.paddingTop, "paddingTop");
    GH(rest.paddingBottom, "paddingBottom");
    GH(rest.paddingLeft, "paddingLeft");
    GH(rest.paddingRight, "paddingRight");
    GH(rest.gap, "gap");
    GH(rest.columnGap, "columnGap");
    GH(rest.rowGap, "rowGap");
    rest.flexWrap ??= "nowrap";
    rest.flexDirection ??= "row";
    rest.flexGrow ??= 0;
    rest.flexShrink ??= 1;
    rest.overflowX = rest.overflowX ?? rest.overflow ?? "visible";
    rest.overflowY = rest.overflowY ?? rest.overflow ?? "visible";
    return e("ink-box", {
        ref,
        tabIndex,
        autoFocus,
        onClick,
        onFocus,
        onFocusCapture,
        onBlur,
        onBlurCapture,
        onMouseEnter,
        onMouseLeave,
        onPointer,
        hoverIgnoresBlankCells,
        hoverFollowsPaint,
        renderEvent,
        renderComponent,
        drawPending,
        elementKey,
        elementPlugin,
        onKeyDown,
        onKeyDownCapture,
        onPaste,
        onPasteCapture,
        onWheel,
        onWheelCapture,
        keybindingScope,
        textEntry,
        onAction,
        onActionCapture,
        accessibility: Gdn(aria_hidden, aria_label, aria_role, aria_state, aria_preserve_whitespace),
        style: rest,
        children
    });
}
const ad = ae;
N();
function m(r) {
    let n = "";
    for(let o = 0; o < r.length; o++){
        let u = r.charCodeAt(o);
        n += u < 32 || u >= 127 && u <= 159 ? " " : r[o];
    }
    return n;
}
const kU = qt(null);
const Vdn = kU.Provider;
function XO() {
    let r = Te(kU);
    if (!r) {
        throw Error("useTerminalNotification must be used within TerminalWriteProvider");
    }
    let notifyITerm2 = le(({ message, title })=>{
        let c = title ? `${title}: ${message}` : message;
        r(xI(mh(Yp.ITERM2, m(c))));
    }, [
        r
    ]);
    let notifyKitty = le(({ message, title, id })=>{
        r(xI(mh(Yp.KITTY, `i=${id}:d=0:p=title`, m(title))));
        r(xI(mh(Yp.KITTY, `i=${id}:p=body`, m(message))));
        r(xI(mh(Yp.KITTY, `i=${id}:d=1:a=focus`, "")));
    }, [
        r
    ]);
    let notifyGhostty = le(({ message, title })=>{
        r(xI(mh(Yp.GHOSTTY, "notify", m(title), m(message))));
    }, [
        r
    ]);
    let notifyBell = le(()=>{
        r(Gz);
    }, [
        r
    ]);
    let progress = le((s, d)=>{
        if (!eJe()) {
            return;
        }
        if (!s) {
            r(xI(mh(Yp.ITERM2, ukt.PROGRESS, pkt.CLEAR, "")));
            return;
        }
        let c = Math.max(0, Math.min(100, Math.round(d ?? 0)));
        switch(s){
            case "completed":
                r(xI(mh(Yp.ITERM2, ukt.PROGRESS, pkt.CLEAR, "")));
                break;
            case "error":
                r(xI(mh(Yp.ITERM2, ukt.PROGRESS, pkt.ERROR, c)));
                break;
            case "indeterminate":
                r(xI(mh(Yp.ITERM2, ukt.PROGRESS, pkt.INDETERMINATE, "")));
                break;
            case "running":
                r(xI(mh(Yp.ITERM2, ukt.PROGRESS, pkt.SET, c)));
                break;
            case null:
                break;
        }
    }, [
        r
    ]);
    return Z(()=>({
            notifyITerm2,
            notifyKitty,
            notifyGhostty,
            notifyBell,
            progress
        }), [
        notifyITerm2,
        notifyKitty,
        notifyGhostty,
        notifyBell,
        progress
    ]);
}
function Kmt() {
    return {
        lastWheelTime: 0,
        lastWheelDownTime: 0,
        bugConfirmed: false,
        notified: false,
        trackpadGesture: false,
        pendingArrowBoost: 0
    };
}
function ue(r) {
    r.bugConfirmed = true;
    r.trackpadGesture = true;
    r.pendingArrowBoost++;
}
function h(r) {
    r.trackpadGesture = false;
    r.pendingArrowBoost = 0;
}
function hNo(r) {
    let r_pendingArrowBoost = r.pendingArrowBoost;
    r.pendingArrowBoost = 0;
    return r_pendingArrowBoost;
}
function V0r(r) {
    if (r.bugConfirmed) {
        return true;
    }
    if (process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED !== undefined || process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS !== undefined) {
        r.bugConfirmed = true;
        return true;
    }
    return false;
}
const de = 75;
const pe = 250;
const q0r = 200;
function yNo(r, n, o, u) {
    if (!tK().jediTerm) {
        h(r);
        return n;
    }
    let i = null;
    for(let p = 0; p < n.length; p++){
        let s = n[p];
        if (s.kind !== "key") {
            i?.push(s);
            continue;
        }
        if (s.name === "wheelup" || s.name === "wheeldown") {
            if (o - r.lastWheelTime > q0r) {
                r.lastWheelDownTime = 0;
                h(r);
            }
            r.lastWheelTime = o;
            if (s.name === "wheeldown") {
                r.lastWheelDownTime = o;
            }
            if (s.name === "wheelup" && o - r.lastWheelDownTime < pe && V0r(r)) {
                i ??= n.slice(0, p);
                i.push({
                    ...s,
                    name: "wheeldown"
                });
                continue;
            }
            i?.push(s);
            continue;
        }
        if ((s.name === "up" || s.name === "down") && !s.ctrl && !s.meta && !s.shift && o - r.lastWheelTime < de) {
            if (!r.notified) {
                r.notified = true;
                u();
            }
            ue(r);
            i ??= n.slice(0, p);
            continue;
        }
        i?.push(s);
    }
    return i ?? n;
}
N();
const InternalStdinContext = qt({
    stdin: process.stdin,
    internal_eventEmitter: new Y$t,
    setRawMode () {},
    isRawModeSupported: false,
    internal_querier: null,
    internal_jediTermInput: Kmt()
});
InternalStdinContext.displayName = "InternalStdinContext";
const $fe = InternalStdinContext;
N();
const Zm = qt(null);
function T({ background, foreground }) {
    return mh(Yp.SET_BG_COLOR, background) + mh(Yp.SET_FG_COLOR, foreground);
}
function x() {
    return mh(Yp.RESET_BG_COLOR) + mh(Yp.RESET_FG_COLOR);
}
const f = {
    bracketedPaste: 0,
    themeReports: 0,
    extendedKeys: 0,
    altScreen: 1,
    altScreenKeys: 2,
    mouse: 2,
    mousePixels: 2,
    surface: 3,
    focusEvents: 4
};
function w(r) {
    switch(r){
        case "bracketedPaste":
            return {
                mode: r,
                on: SNo,
                off: qdn
            };
        case "themeReports":
            return {
                mode: r,
                on: wNo,
                off: Ydn
            };
        case "focusEvents":
            return {
                mode: r,
                on: Kdn,
                off: Xmt
            };
        case "mousePixels":
            return {
                mode: r,
                on: vNo,
                off: ENo
            };
        case "extendedKeys":
            return {
                mode: r,
                get on () {
                    return Ymt();
                },
                get off () {
                    return W5e + OIe();
                }
            };
        case "altScreen":
            return {
                mode: r,
                on: Jmt + XE + Ub,
                off: Qmt + W5e
            };
        case "altScreenKeys":
            return {
                mode: r,
                get on () {
                    return Ymt();
                },
                get off () {
                    return OIe();
                }
            };
    }
}
class tJe {
    entries = [];
    suspended = false;
    kept;
    get isSuspended() {
        return this.suspended;
    }
    isSet(r) {
        return this.entries.some((n)=>n.mode === r);
    }
    set(r, n) {
        if (this.isSet(r)) {
            return "";
        }
        let o = this.add(this.entry(r, n));
        if (r === "altScreen") {
            o += this.add(w("altScreenKeys"));
        }
        if (this.suspended) {
            return "";
        }
        return o;
    }
    reset(r) {
        if (!this.isSet(r)) {
            return "";
        }
        let n = r === "altScreen" ? this.remove("altScreenKeys") : "";
        let o = this.remove(r);
        if (this.suspended && r === this.kept) {
            this.kept = undefined;
            return o;
        }
        if (this.suspended) {
            return "";
        }
        return n + o;
    }
    reassert(r) {
        if (this.suspended) {
            return "";
        }
        return this.entries.find((n)=>n.mode === r)?.on ?? "";
    }
    reassertKeys() {
        if (this.suspended) {
            return "";
        }
        let r = this.isSet("altScreen") ? "altScreenKeys" : "extendedKeys";
        return this.entries.find((n)=>n.mode === r)?.on ?? "";
    }
    reassertFrom(r) {
        if (this.suspended || !this.isSet(r)) {
            return "";
        }
        return this.entries.filter((n)=>f[n.mode] >= f[r]).reduce((acc, item)=>acc + item.on, "");
    }
    suspend(r) {
        if (this.suspended) {
            return "";
        }
        this.suspended = true;
        this.kept = r;
        return this.entries.reduceRight((acc, entry)=>{
            if (entry.mode === r) {
                return acc;
            }
            return acc + entry.off;
        }, "");
    }
    resume({ clearKeys = false } = {}) {
        if (!this.suspended) {
            return "";
        }
        this.suspended = false;
        this.kept = undefined;
        let n = this.isSet("altScreen");
        let o = clearKeys ? W5e + (n ? "" : OIe()) : "";
        return this.entries.reduce((acc, entry)=>acc + entry.on + (clearKeys && entry.mode === "altScreen" ? OIe() : ""), o);
    }
    resetAll() {
        let r = this.suspended ? this.entries.filter((n)=>n.mode === this.kept) : this.entries;
        this.entries = [];
        this.kept = undefined;
        return r.reduceRight((acc, item)=>acc + item.off, "");
    }
    entry(r, n) {
        switch(r){
            case "mouse":
                {
                    let o = typeof n === "string" ? n : "off";
                    return {
                        mode: r,
                        on: Jdn(o),
                        off: o === "off" ? "" : Ffe
                    };
                }
            case "surface":
                return {
                    mode: r,
                    on: typeof n === "object" ? T(n) : "",
                    off: x()
                };
            default:
                return w(r);
        }
    }
    add(r) {
        let n = this.entries.findIndex((o)=>f[o.mode] > f[r.mode]);
        if (n === -1) {
            this.entries.push(r);
        } else {
            this.entries.splice(n, 0, r);
        }
        return r.on;
    }
    remove(r) {
        let n = this.entries.findIndex((o)=>o.mode === r);
        if (n === -1) {
            return "";
        }
        return this.entries.splice(n, 1)[0].off;
    }
}
N();
const InternalTerminalModesContext = qt(new tJe);
InternalTerminalModesContext.displayName = "InternalTerminalModesContext";
const eFt = InternalTerminalModesContext;
export { QXe, GH, Y$t, tK, G0r, a6n, X$t, Kmt, hNo, V0r, q0r, yNo, $fe, _No, K0r, ZXe, bNo, Iee, yve, l6n, eJe, J$t, OIe, Ymt, Q$t, Oee, Wdn, Z$t, c6n, d6n, zdn, Y0r, Gdn, ad, Zm, tJe, eFt, kU, Vdn, XO };
