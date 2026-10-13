import { jpe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { un, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { lAt } from "/$bunfs/root/chunk-yq147k4z.js";
import { Ug } from "/$bunfs/root/chunk-ezr23nse.js";
import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { $fe, ad, Zm, tJe, kU } from "/$bunfs/root/chunk-066dgc2r.js";
import { Gmt, Ddn, Vb } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ae, vse, YE, dIs, uIs, fAo, YSe } from "/$bunfs/root/chunk-223dyewd.js";
import { Vmt } from "/$bunfs/root/chunk-vqyxznfw.js";
import { Rc } from "/$bunfs/root/chunk-rk838m7w.js";
import { Aat } from "/$bunfs/root/chunk-va6abnm5.js";
import { mh, xI, Yp, ens, tns, txn, DYt, nns, x7r, ri, qt, Cc, km, le, Te, P, en, Z, gh, R, y, Rt, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { t6n, EU, hje, hie, Qy, r6n, Ed, o6n, i6n, _je, qN } from "/$bunfs/root/chunk-4nfvaqps.js";
import { nFt, PNo } from "/$bunfs/root/chunk-wmhgfdy3.js";
import { dh, Ffe } from "/$bunfs/root/chunk-avb6ma1z.js";
import { Ehn } from "/$bunfs/root/chunk-n2p0n845.js";
import { yie, ZP, bje, u6n, Zw } from "/$bunfs/root/chunk-p2nmcfaz.js";
import { cOe, dw } from "/$bunfs/root/chunk-46as0mn8.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { eg } from "/$bunfs/root/chunk-gwx5yf2x.js";
import { ra } from "/$bunfs/root/chunk-98pm569t.js";
import { S, Sn } from "/$bunfs/root/chunk-cj4xndke.js";
import { Stream } from "stream";
import { writeSync } from "fs";
N();
N();
function dt() {
    return {
        latched: null
    };
}
const F$t = qt(null);
function xe() {
    if (Rc()) {
        return "fullscreen";
    }
    return "inline";
}
function oe(o) {
    let p = w(3);
    let { value, children } = o;
    let [u] = y(dt);
    const c = value ?? u;
    let m;
    if (p[0] !== children || p[1] !== c) {
        m = e(F$t.Provider, {
            value: c,
            children
        });
        p[0] = children;
        p[1] = c;
        p[2] = m;
    } else {
        m = p[2];
    }
    return m;
}
function PC() {
    let r = w(2);
    const o = Te(F$t);
    let l;
    if (r[0] !== o) {
        l = XYn(o);
        r[0] = o;
        r[1] = l;
    } else {
        l = r[1];
    }
    return l;
}
function XYn(o) {
    if (o === null) {
        return xe();
    }
    if (typeof o === "string") {
        return o;
    }
    if (o.latched === null) {
        o.latched = xe();
    }
    return o.latched;
}
function Hi() {
    return PC() === "fullscreen";
}
N();
function Re() {
    return {
        markdownTokens: new Map,
        highlightedCode: new Map,
        structuredDiff: new WeakMap,
        parsedToolResults: new WeakMap
    };
}
const Se = qt(null);
function ke({ children }) {
    let r = R(null);
    r.current ??= Re();
    return e(Se.Provider, {
        value: r.current,
        children
    });
}
function yj() {
    let o = Te(Se);
    let r = R(null);
    if (o) {
        return o;
    }
    r.current ??= Re();
    return r.current;
}
function U$t(o, schema, l) {
    if (!schema) {
        return;
    }
    if (typeof l !== "object" || l === null) {
        return schema.safeParse(l);
    }
    let u = o.parsedToolResults.get(l);
    if (u && pt(u, schema)) {
        return u.parsed;
    }
    let parsed = schema.safeParse(l);
    o.parsedToolResults.set(l, {
        schema,
        parsed
    });
    return parsed;
}
function pt(o, schema) {
    return o.schema === schema;
}
function cleanupTerminalModes() {
    if (!process.stdout.isTTY) {
        return;
    }
    try {
        Ehn();
        let o = ri().get(process.stdout);
        writeSync(1, (o?.modes.reset("mousePixels") ?? "") + Ffe);
        o?.modes.reset("mouse");
        if (o?.isAltScreenActive) {
            try {
                o.unmount();
            } catch  {}
        }
        o?.drainStdin();
        o?.detachForShutdown();
        i6n(o?.modes ?? new tJe, (r)=>writeSync(1, r));
        if (!a.CLAUDE_CODE_DISABLE_TERMINAL_TITLE) {
            writeSync(1, tns);
        }
    } catch  {}
}
function drainStdin() {
    ri().get(process.stdout)?.drainStdin();
}
const ne = {
    cleanupTerminalModes,
    drainStdin
};
const ht = (o, r)=>{
    let l = Ct(r);
    let u = {
        stdout: process.stdout,
        stdin: process.stdin,
        stderr: process.stderr,
        exitOnCtrlC: true,
        patchConsole: true,
        ...l
    };
    let c = vt(u.stdout, ()=>new _je(u));
    c.render(o);
    return {
        rerender: c.render,
        unmount () {
            c.unmount();
        },
        waitUntilExit: c.waitUntilExit,
        cleanup: ()=>ri().delete(u.stdout)
    };
};
const gt = async (o, r)=>{
    let l = ri();
    while(l.pendingStandaloneRender){
        await l.pendingStandaloneRender;
    }
    await Promise.resolve();
    let u = ht(o, r);
    t(`[render] first ink render: ${Math.round(process.uptime() * 1000)}ms since process start`);
    return u;
};
const ie = gt;
async function Ee(o = {}) {
    await Promise.resolve();
    let r = ri();
    while(r.pendingStandaloneRender){
        await r.pendingStandaloneRender;
    }
    let l = bt(o, "react");
    return {
        render: (u)=>l.render(u),
        unmount: ()=>l.unmount(),
        waitUntilExit: ()=>l.waitUntilExit()
    };
}
function bt({ stdout = process.stdout, stdin = process.stdin, stderr = process.stderr, exitOnCtrlC = true, patchConsole = true, onFrame, nativeCursor, isScreenReaderEnabled, atlasRecorder }, h) {
    let x = ri();
    x7r(ne);
    let v = new _je({
        stdout,
        stdin,
        stderr,
        exitOnCtrlC,
        patchConsole,
        onFrame,
        nativeCursor,
        isScreenReaderEnabled,
        atlasRecorder
    });
    if (h === "react") {
        x.set(stdout, v);
    } else {
        x.treeRoots.set(stdout, v);
    }
    return v;
}
var Ct = (stdout = {})=>{
    if (stdout instanceof Stream) {
        return {
            stdout,
            stdin: process.stdin
        };
    }
    return stdout;
};
var vt = (stdout, r)=>{
    let l = ri();
    let u = l.get(stdout);
    if (!u) {
        x7r(ne);
        u = r();
        l.set(stdout, u);
    }
    return u;
};
function fNo() {
    let o = ri().get(process.stdout);
    if (!o) {
        return;
    }
    xt(o.getStylePool());
}
function we() {
    let autoResetEnabled = k("tengu_xterm_atlas_reset", true);
    let r = k("tengu_basalt_meadow", false);
    return {
        autoResetEnabled,
        recording: autoResetEnabled || r
    };
}
function xt(o) {
    let o_atlasRecorder = o.atlasRecorder;
    if (o_atlasRecorder.debugTainted) {
        return;
    }
    if (!k("tengu_basalt_meadow", false)) {
        if (!o_atlasRecorder.autoResetEnabled) {
            o_atlasRecorder.recording = false;
        }
        return;
    }
    o_atlasRecorder.recording = true;
    let r_proactiveResetStats = o_atlasRecorder.proactiveResetStats;
    i("tengu_render_glyph_cardinality", {
        stylepool_styles: o.size,
        stylepool_overflowed: o.overflowed,
        atlas_glyph_keys: o_atlasRecorder.size,
        atlas_keys_saturated: o_atlasRecorder.saturated,
        term_program: d(St()),
        is_xtermjs: Ug(),
        session_age_bucket: d(kt(jpe())),
        proactive_reset_count: r_proactiveResetStats.count,
        proactive_reset_last_reason: d(r_proactiveResetStats.lastReason)
    });
    if (!o_atlasRecorder.stylePoolHealthyReported) {
        o_atlasRecorder.stylePoolHealthyReported = true;
        g("render_stylepool");
    }
    if (o.overflowed && !o_atlasRecorder.stylePoolCapHitReported) {
        o_atlasRecorder.stylePoolCapHitReported = true;
        f("render_stylepool", "cap_hit");
    }
}
function St() {
    if (a.CURSOR_TRACE_ID !== undefined) {
        return "cursor";
    }
    switch(a.TERM_PROGRAM){
        case "vscode":
            return "vscode";
        case "iTerm.app":
            return "iterm";
        case "Apple_Terminal":
            return "apple_terminal";
        case "ghostty":
            return "ghostty";
        case "WezTerm":
            return "wezterm";
        case "tmux":
            return "tmux";
    }
    if (process.env.WT_SESSION !== undefined) {
        return "windows_terminal";
    }
    return "other";
}
function kt(o) {
    let r = o / 60000;
    if (r < 5) {
        return "lt_5m";
    }
    if (r < 30) {
        return "5m_30m";
    }
    if (r < 120) {
        return "30m_2h";
    }
    if (r < 480) {
        return "2h_8h";
    }
    return "gt_8h";
}
function j(o, r) {
    if (!o) {
        return;
    }
    if (o.startsWith("rgb(") || o.startsWith("#") || o.startsWith("ansi256(") || o.startsWith("ansi:")) {
        return o;
    }
    if (lAt(o)) {
        return r[o];
    }
}
function Tt(o) {
    let r = Vb();
    return e(ad, {
        ...o,
        borderColor: j(o.borderColor, r),
        borderTopColor: j(o.borderTopColor, r),
        borderBottomColor: j(o.borderBottomColor, r),
        borderLeftColor: j(o.borderLeftColor, r),
        borderRightColor: j(o.borderRightColor, r),
        backgroundColor: j(o.backgroundColor, r)
    });
}
const s = Tt;
N();
N();
const qXe = qt(false);
function G(o, r) {
    if (!o) {
        return;
    }
    if (o.startsWith("rgb(") || o.startsWith("#") || o.startsWith("ansi256(") || o.startsWith("ansi:")) {
        return o;
    }
    if (lAt(o)) {
        return r[o];
    }
}
function n(o) {
    let r = w(31);
    let l;
    let u;
    let c;
    let p;
    let m;
    let b;
    let C;
    let h;
    let x;
    let v;
    let E;
    if (r[0] !== o) {
        ({ color: c, backgroundColor: l, dimColor: m, bold: b, italic: C, underline: h, strikethrough: x, inverse: v, wrap: E, children: u, ...p } = o);
        r[0] = o;
        r[1] = l;
        r[2] = u;
        r[3] = c;
        r[4] = p;
        r[5] = m;
        r[6] = b;
        r[7] = C;
        r[8] = h;
        r[9] = x;
        r[10] = v;
        r[11] = E;
    } else {
        l = r[1];
        u = r[2];
        c = r[3];
        p = r[4];
        m = r[5];
        b = r[6];
        C = r[7];
        h = r[8];
        x = r[9];
        v = r[10];
        E = r[11];
    }
    let A = m === undefined ? false : m;
    let bold = b === undefined ? false : b;
    let _ = C === undefined ? false : C;
    let underline = h === undefined ? false : h;
    let strikethrough = x === undefined ? false : x;
    let inverse = v === undefined ? false : v;
    let wrap = E === undefined ? "wrap" : E;
    let D = Vb();
    let W = Te(qXe);
    let U;
    if (r[12] !== c || r[13] !== A || r[14] !== W || r[15] !== D) {
        U = A && !W ? D.inactive : G(c, D);
        r[12] = c;
        r[13] = A;
        r[14] = W;
        r[15] = D;
        r[16] = U;
    } else {
        U = r[16];
    }
    let color = U;
    let H;
    if (r[17] !== l || r[18] !== D) {
        H = G(l, D);
        r[17] = l;
        r[18] = D;
        r[19] = H;
    } else {
        H = r[19];
    }
    let backgroundColor = H;
    let te;
    if (r[20] !== bold || r[21] !== u || r[22] !== p || r[23] !== inverse || r[24] !== _ || r[25] !== backgroundColor || r[26] !== color || r[27] !== strikethrough || r[28] !== underline || r[29] !== wrap) {
        te = e(Ed, {
            color,
            backgroundColor,
            bold,
            italic: _,
            underline,
            strikethrough,
            inverse,
            wrap,
            ...p,
            children: u
        });
        r[20] = bold;
        r[21] = u;
        r[22] = p;
        r[23] = inverse;
        r[24] = _;
        r[25] = backgroundColor;
        r[26] = color;
        r[27] = strikethrough;
        r[28] = underline;
        r[29] = wrap;
        r[30] = te;
    } else {
        te = r[30];
    }
    return te;
}
N();
function Wt(o) {
    let b = w(5);
    let { children, url, fallback, assumeSupport } = o;
    let p = children ?? url;
    if (assumeSupport ? cOe() ?? true : dw()) {
        let C;
        if (b[0] !== p || b[1] !== url) {
            C = e(Ed, {
                children: e("ink-link", {
                    href: url,
                    children: p
                })
            });
            b[0] = p;
            b[1] = url;
            b[2] = C;
        } else {
            C = b[2];
        }
        return C;
    }
    const C = fallback ?? p;
    let h;
    if (b[3] !== C) {
        h = e(Ed, {
            children: C
        });
        b[3] = C;
        b[4] = h;
    } else {
        h = b[4];
    }
    return h;
}
function Oe(o) {
    if (o.length === 0) {
        return null;
    }
    let r = o[0];
    if (r === "c") {
        return {
            type: "reset"
        };
    }
    if (r === "7") {
        return {
            type: "cursor",
            action: {
                type: "save"
            }
        };
    }
    if (r === "8") {
        return {
            type: "cursor",
            action: {
                type: "restore"
            }
        };
    }
    if (r === "D") {
        return {
            type: "scroll",
            action: {
                type: "index"
            }
        };
    }
    if (r === "M") {
        return {
            type: "scroll",
            action: {
                type: "reverseIndex"
            }
        };
    }
    if (r === "E") {
        return {
            type: "cursor",
            action: {
                type: "nextLine",
                count: 1
            }
        };
    }
    if (r === "H") {
        return null;
    }
    if ("()".includes(r) && o.length >= 2) {
        return null;
    }
    return {
        type: "unknown",
        sequence: `\x1B${o}`
    };
}
function* Ne(o) {
    let r = true;
    for(let l = 0; l < o.length; l++){
        if (o.charCodeAt(l) >= 128) {
            r = false;
            break;
        }
    }
    if (r) {
        for(let l = 0; l < o.length; l++){
            yield {
                value: o[l],
                width: 1
            };
        }
        return;
    }
    for (let { segment } of ra().segment(o)){
        if (segment.length === 1) {
            let u = segment.charCodeAt(0);
            if (u >= 32 && u < 127) {
                yield {
                    value: segment,
                    width: 1
                };
                continue;
            }
        }
        yield {
            value: segment,
            width: Math.max(1, ae(segment))
        };
    }
}
function Gt(o, enabled) {
    switch(o){
        case dh.CURSOR_VISIBLE:
            return {
                type: "cursor",
                action: enabled ? {
                    type: "show"
                } : {
                    type: "hide"
                }
            };
        case dh.ALT_SCREEN_CLEAR:
        case dh.ALT_SCREEN:
            return {
                type: "mode",
                action: {
                    type: "alternateScreen",
                    enabled
                }
            };
        case dh.BRACKETED_PASTE:
            return {
                type: "mode",
                action: {
                    type: "bracketedPaste",
                    enabled
                }
            };
        case dh.MOUSE_NORMAL:
            return {
                type: "mode",
                action: {
                    type: "mouseTracking",
                    mode: enabled ? "normal" : "off"
                }
            };
        case dh.MOUSE_BUTTON:
            return {
                type: "mode",
                action: {
                    type: "mouseTracking",
                    mode: enabled ? "button" : "off"
                }
            };
        case dh.MOUSE_ANY:
            return {
                type: "mode",
                action: {
                    type: "mouseTracking",
                    mode: enabled ? "any" : "off"
                }
            };
        case dh.FOCUS_EVENTS:
            return {
                type: "mode",
                action: {
                    type: "focusEvents",
                    enabled
                }
            };
        default:
            return null;
    }
}
function Yt(o) {
    let r = o.slice(2);
    if (r.length === 0) {
        return null;
    }
    let l = r.charCodeAt(r.length - 1);
    let u = r.slice(0, -1);
    let c = "";
    let params = u;
    let m = "";
    if (u.length > 0 && "?>=<".includes(u[0])) {
        c = u[0];
        params = u.slice(1);
    }
    let b = params.charCodeAt(params.length - 1);
    if (params.length > 0 && !(b >= 48 && b <= 59)) {
        let v = params.match(/([^0-9;:]+)$/);
        if (v) {
            m = v[1];
            params = params.slice(0, -m.length);
        }
    }
    if (l === YE.SGR && c === "") {
        return {
            type: "sgr",
            params
        };
    }
    let C = params === "" ? [] : params.split(/[;:]/).map((v)=>{
        if (v === "") {
            return 0;
        }
        return parseInt(v, 10);
    });
    let h = C[0] ?? 1;
    let col = C[1] ?? 1;
    if (l === YE.CUU) {
        return {
            type: "cursor",
            action: {
                type: "move",
                direction: "up",
                count: h
            }
        };
    }
    if (l === YE.CUD || l === YE.VPR) {
        return {
            type: "cursor",
            action: {
                type: "move",
                direction: "down",
                count: h
            }
        };
    }
    if (l === YE.CUF || l === YE.HPR) {
        return {
            type: "cursor",
            action: {
                type: "move",
                direction: "forward",
                count: h
            }
        };
    }
    if (l === YE.CUB) {
        return {
            type: "cursor",
            action: {
                type: "move",
                direction: "back",
                count: h
            }
        };
    }
    if (l === YE.CNL) {
        return {
            type: "cursor",
            action: {
                type: "nextLine",
                count: h
            }
        };
    }
    if (l === YE.CPL) {
        return {
            type: "cursor",
            action: {
                type: "prevLine",
                count: h
            }
        };
    }
    if (l === YE.CHA || l === YE.HPA) {
        return {
            type: "cursor",
            action: {
                type: "column",
                col: h
            }
        };
    }
    if (l === YE.CUP || l === YE.HVP) {
        return {
            type: "cursor",
            action: {
                type: "position",
                row: h,
                col
            }
        };
    }
    if (l === YE.VPA) {
        return {
            type: "cursor",
            action: {
                type: "row",
                row: h
            }
        };
    }
    if (l === YE.ED) {
        return {
            type: "erase",
            action: {
                type: "display",
                region: dIs[C[0] ?? 0] ?? "toEnd"
            }
        };
    }
    if (l === YE.EL) {
        return {
            type: "erase",
            action: {
                type: "line",
                region: uIs[C[0] ?? 0] ?? "toEnd"
            }
        };
    }
    if (l === YE.ECH) {
        return {
            type: "erase",
            action: {
                type: "chars",
                count: h
            }
        };
    }
    if (l === YE.IL) {
        return {
            type: "edit",
            action: {
                type: "insertLines",
                count: h
            }
        };
    }
    if (l === YE.DL) {
        return {
            type: "edit",
            action: {
                type: "deleteLines",
                count: h
            }
        };
    }
    if (l === YE.ICH) {
        return {
            type: "edit",
            action: {
                type: "insertChars",
                count: h
            }
        };
    }
    if (l === YE.DCH) {
        return {
            type: "edit",
            action: {
                type: "deleteChars",
                count: h
            }
        };
    }
    if (l === YE.SU) {
        return {
            type: "scroll",
            action: {
                type: "up",
                count: h
            }
        };
    }
    if (l === YE.SD) {
        return {
            type: "scroll",
            action: {
                type: "down",
                count: h
            }
        };
    }
    if (l === YE.DECSTBM) {
        return {
            type: "scroll",
            action: {
                type: "setRegion",
                top: h,
                bottom: C[1] ?? 0
            }
        };
    }
    if (l === YE.SCOSC) {
        return {
            type: "cursor",
            action: {
                type: "save"
            }
        };
    }
    if (l === YE.SCORC) {
        return {
            type: "cursor",
            action: {
                type: "restore"
            }
        };
    }
    if (l === YE.DECSCUSR && m === " ") {
        return {
            type: "cursor",
            action: {
                type: "style",
                ...fAo[h] ?? fAo[0]
            }
        };
    }
    if (c === "?" && (l === YE.SM || l === YE.RM)) {
        let v = l === YE.SM;
        let E = [];
        for (let A of C){
            let T = Gt(A, v);
            if (T) {
                E.push(T);
            }
        }
        if (E.length) {
            return E;
        }
        return {
            type: "unknown",
            sequence: o
        };
    }
    return {
        type: "unknown",
        sequence: o
    };
}
function Jt(o) {
    if (o.length < 2) {
        return "unknown";
    }
    if (o.charCodeAt(0) !== vse.ESC) {
        return "unknown";
    }
    let r = o.charCodeAt(1);
    if (r === 91) {
        return "csi";
    }
    if (r === 93) {
        return "osc";
    }
    if (r === 79) {
        return "ss3";
    }
    return "esc";
}
class Y {
    tokenizer;
    forOutput;
    tail = "";
    constructor(o){
        this.forOutput = o?.forOutput ?? false;
        this.tokenizer = YSe({
            stringsEndAtLineFeed: o?.stringsEndAtLineFeed
        });
    }
    style = nFt();
    inLink = false;
    linkUrl;
    flush() {
        if (!this.tail) {
            return [];
        }
        let o = this.processText(this.tail, false);
        this.tail = "";
        return o;
    }
    reset() {
        this.tail = "";
        this.tokenizer.reset();
        this.style = nFt();
        this.inLink = false;
        this.linkUrl = undefined;
    }
    feed(o) {
        let r = this.tokenizer.feed(o);
        let l = [];
        for(let u = 0; u < r.length; u++){
            let c = r[u];
            if (c.type === "text") {
                let p = this.tail + c.value;
                this.tail = "";
                let m = this.forOutput && u === r.length - 1;
                l.push(...this.processText(p, m));
            } else {
                if (this.tail) {
                    l.push(...this.processText(this.tail, false));
                    this.tail = "";
                }
                l.push(...this.processSequence(c.value));
            }
        }
        return l;
    }
    processText(o, r) {
        let style = this.style;
        if (o.indexOf("\x07") === -1) {
            let p = [
                ...Ne(o)
            ];
            this.holdTail(p, r);
            if (p.length > 0) {
                return [
                    {
                        type: "text",
                        graphemes: p,
                        style
                    }
                ];
            }
            return [];
        }
        let u = [];
        for (let p of o.split("\x07")){
            if (p) {
                let m = [
                    ...Ne(p)
                ];
                if (m.length > 0) {
                    u.push({
                        type: "text",
                        graphemes: m,
                        style
                    });
                }
            }
            u.push({
                type: "bell"
            });
        }
        u.pop();
        let c = u.at(-1);
        if (c?.type === "text") {
            this.holdTail(c.graphemes, r);
            if (c.graphemes.length === 0) {
                u.pop();
            }
        }
        return u;
    }
    holdTail(o, r) {
        if (!r || o.length === 0) {
            return;
        }
        let l = o.at(-1);
        let u = l.value.charCodeAt(l.value.length - 1);
        if (u < 32) {
            return;
        }
        this.tail = l.value;
        o.pop();
        if (u >= 55296 && u <= 56319 && o.length > 0) {
            this.tail = o.pop().value + this.tail;
        }
        while(o.length > 0 && this.tail.length <= 64){
            let c = o.at(-1).value;
            let p = c.charCodeAt(c.length - 1);
            let m = p >= 56320 && p <= 57343 ? c.codePointAt(c.length - 2) : p;
            if (m === 8205 || m !== undefined && m >= 127462 && m <= 127487) {
                this.tail = c + this.tail;
                o.pop();
            } else {
                break;
            }
        }
    }
    processSequence(o) {
        switch(Jt(o)){
            case "csi":
                {
                    let l = Yt(o);
                    if (!l) {
                        return [];
                    }
                    if (Array.isArray(l)) {
                        return l;
                    }
                    if (l.type === "sgr") {
                        this.style = PNo(l.params, this.style);
                        return [];
                    }
                    return [
                        l
                    ];
                }
            case "osc":
                {
                    let l = o.slice(2);
                    if (l.endsWith("\x07")) {
                        l = l.slice(0, -1);
                    } else if (l.endsWith("\x1B\\")) {
                        l = l.slice(0, -2);
                    }
                    let u = ens(l);
                    if (u) {
                        if (u.type === "link") {
                            if (u.action.type === "start") {
                                this.inLink = true;
                                this.linkUrl = u.action.url;
                            } else {
                                this.inLink = false;
                                this.linkUrl = undefined;
                            }
                        }
                        return [
                            u
                        ];
                    }
                    return [];
                }
            case "esc":
                {
                    let l = o.slice(1);
                    let u = Oe(l);
                    if (u?.type === "reset") {
                        this.style = nFt();
                        this.inLink = false;
                        this.linkUrl = undefined;
                    }
                    if (u) {
                        return [
                            u
                        ];
                    }
                    return [];
                }
            case "ss3":
                return [
                    {
                        type: "unknown",
                        sequence: o
                    }
                ];
            default:
                return [
                    {
                        type: "unknown",
                        sequence: o
                    }
                ];
        }
    }
}
const Do = km(function(r) {
    let x = w(21);
    let { children, dimColor, italic, monochrome, wrap } = r;
    if (typeof children !== "string") {
        const b = !!dimColor;
        const C = !!italic;
        const h = String(children);
        let v;
        if (x[0] !== b || x[1] !== C || x[2] !== h || x[3] !== wrap) {
            v = e(Ed, {
                dim: b,
                italic: C,
                wrap,
                children: h
            });
            x[0] = b;
            x[1] = C;
            x[2] = h;
            x[3] = wrap;
            x[4] = v;
        } else {
            v = x[4];
        }
        return v;
    }
    if (children === "") {
        return null;
    }
    let b;
    let C;
    if (x[5] !== children || x[6] !== dimColor || x[7] !== italic || x[8] !== monochrome || x[9] !== wrap) {
        C = Sn;
        A: {
            let E = Fe(children);
            if (E.length === 0) {
                C = null;
                break A;
            }
            if (E.length === 1 && !Q(E[0].props) && E[0].props.hyperlink === undefined) {
                C = e(Ed, {
                    dim: !!dimColor,
                    italic: !!italic,
                    wrap,
                    children: E[0].text
                });
                break A;
            }
            let h;
            if (x[12] !== dimColor || x[13] !== italic || x[14] !== monochrome) {
                h = (T, _)=>{
                    let hyperlink = T.props.hyperlink;
                    if (dimColor) {
                        T.props.dim = true;
                    }
                    if (italic) {
                        T.props.italic = true;
                    }
                    if (monochrome) {
                        T.props.color = undefined;
                    }
                    let O = Q(T.props) ? e(pe, {
                        color: T.props.color,
                        backgroundColor: T.props.backgroundColor,
                        dim: T.props.dim,
                        bold: T.props.bold,
                        italic: T.props.italic,
                        underline: T.props.underline,
                        strikethrough: T.props.strikethrough,
                        inverse: T.props.inverse,
                        children: T.text
                    }, _) : T.text;
                    if (hyperlink) {
                        return e(Wt, {
                            url: hyperlink,
                            children: O
                        }, _);
                    }
                    return O;
                };
                x[12] = dimColor;
                x[13] = italic;
                x[14] = monochrome;
                x[15] = h;
            } else {
                h = x[15];
            }
            b = E.map(h);
        }
        x[5] = children;
        x[6] = dimColor;
        x[7] = italic;
        x[8] = monochrome;
        x[9] = wrap;
        x[10] = b;
        x[11] = C;
    } else {
        b = x[10];
        C = x[11];
    }
    if (C !== Sn) {
        return C;
    }
    let F = b;
    const h = !!dimColor;
    const v = !!italic;
    let L;
    if (x[16] !== F || x[17] !== h || x[18] !== v || x[19] !== wrap) {
        L = e(Ed, {
            dim: h,
            italic: v,
            wrap,
            children: F
        });
        x[16] = F;
        x[17] = h;
        x[18] = v;
        x[19] = wrap;
        x[20] = L;
    } else {
        L = x[20];
    }
    return L;
});
function Fe(children) {
    let l = new Y({
        stringsEndAtLineFeed: true
    }).feed(children);
    let u = [];
    let c;
    for (let p of l){
        if (p.type === "link") {
            if (p.action.type === "start") {
                c = p.action.url;
            } else {
                c = undefined;
            }
            continue;
        }
        if (p.type === "text") {
            let text = p.graphemes.map((h)=>h.value).join("");
            if (!text) {
                continue;
            }
            let props = Xt(p.style);
            if (c) {
                props.hyperlink = c;
            }
            let C = u.at(-1);
            if (C && eo(C.props, props)) {
                C.text += text;
            } else {
                u.push({
                    text,
                    props
                });
            }
        }
    }
    return u;
}
function Xt(style) {
    return {
        color: Ie(style.fg),
        backgroundColor: Ie(style.bg),
        dim: style.dim ? true : undefined,
        bold: style.bold ? true : undefined,
        italic: style.italic ? true : undefined,
        underline: style.underline !== "none" ? true : undefined,
        strikethrough: style.strikethrough ? true : undefined,
        inverse: style.inverse ? true : undefined,
        hyperlink: undefined
    };
}
var Qt = {
    black: "ansi:black",
    red: "ansi:red",
    green: "ansi:green",
    yellow: "ansi:yellow",
    blue: "ansi:blue",
    magenta: "ansi:magenta",
    cyan: "ansi:cyan",
    white: "ansi:white",
    brightBlack: "ansi:blackBright",
    brightRed: "ansi:redBright",
    brightGreen: "ansi:greenBright",
    brightYellow: "ansi:yellowBright",
    brightBlue: "ansi:blueBright",
    brightMagenta: "ansi:magentaBright",
    brightCyan: "ansi:cyanBright",
    brightWhite: "ansi:whiteBright"
};
function Ie(o) {
    switch(o.type){
        case "named":
            return Qt[o.name];
        case "indexed":
            return `ansi256(${o.index})`;
        case "rgb":
            return `rgb(${o.r},${o.g},${o.b})`;
        case "default":
            return;
    }
}
function eo(props, r) {
    return props.color === r.color && props.backgroundColor === r.backgroundColor && props.bold === r.bold && props.dim === r.dim && props.italic === r.italic && props.underline === r.underline && props.strikethrough === r.strikethrough && props.inverse === r.inverse && props.hyperlink === r.hyperlink;
}
function Q(props) {
    return props.color !== undefined || props.backgroundColor !== undefined || props.dim === true || props.bold === true || props.italic === true || props.underline === true || props.strikethrough === true || props.inverse === true;
}
function pe(o) {
    let r = w(14);
    let l;
    let u;
    let c;
    let p;
    if (r[0] !== o) {
        ({ bold: l, dim: c, children: u, ...p } = o);
        r[0] = o;
        r[1] = l;
        r[2] = u;
        r[3] = c;
        r[4] = p;
    } else {
        l = r[1];
        u = r[2];
        c = r[3];
        p = r[4];
    }
    if (c) {
        let m;
        if (r[5] !== u || r[6] !== p) {
            m = e(Ed, {
                ...p,
                dim: true,
                children: u
            });
            r[5] = u;
            r[6] = p;
            r[7] = m;
        } else {
            m = r[7];
        }
        return m;
    }
    if (l) {
        let m;
        if (r[8] !== u || r[9] !== p) {
            m = e(Ed, {
                ...p,
                bold: true,
                children: u
            });
            r[8] = u;
            r[9] = p;
            r[10] = m;
        } else {
            m = r[10];
        }
        return m;
    }
    let m;
    if (r[11] !== u || r[12] !== p) {
        m = e(Ed, {
            ...p,
            children: u
        });
        r[11] = u;
        r[12] = p;
        r[13] = m;
    } else {
        m = r[13];
    }
    return m;
}
N();
N();
function on() {
    let o = Te(Zw);
    if (!o) {
        throw Error("useClock must be used within a ClockProvider");
    }
    return o;
}
function je(o) {
    let r = w(37);
    let l;
    let u;
    let c;
    let p;
    let m;
    let b;
    let C;
    if (r[0] !== o) {
        ({ onAction: c, tabIndex: b, autoFocus: l, mountSettleMs: C, children: u, ref: p, ...m } = o);
        r[0] = o;
        r[1] = l;
        r[2] = u;
        r[3] = c;
        r[4] = p;
        r[5] = m;
        r[6] = b;
        r[7] = C;
    } else {
        l = r[1];
        u = r[2];
        c = r[3];
        p = r[4];
        m = r[5];
        b = r[6];
        C = r[7];
    }
    let tabIndex = b === undefined ? 0 : b;
    let x = C === undefined ? hje : C;
    let [v, E] = y(false);
    let [A, T] = y(false);
    let [_, B] = y(false);
    let O = on();
    let F = R(null);
    let L;
    if (r[8] !== O) {
        L = ()=>O.now();
        r[8] = O;
        r[9] = L;
    } else {
        L = r[9];
    }
    let [D] = y(L);
    let W;
    let U;
    if (r[10] === S) {
        W = ()=>()=>{
                F.current?.();
            };
        U = [];
        r[10] = W;
        r[11] = U;
    } else {
        W = r[10];
        U = r[11];
    }
    P(W, U);
    let I;
    if (r[12] !== O || r[13] !== c) {
        I = (H)=>{
            if (H.key === "return" || H.key === " ") {
                H.preventDefault();
                B(true);
                c();
                F.current?.();
                F.current = O.setTimeout(()=>B(false), 100);
            }
        };
        r[12] = O;
        r[13] = c;
        r[14] = I;
    } else {
        I = r[14];
    }
    let z = I;
    let te;
    if (r[15] !== O || r[16] !== x || r[17] !== D || r[18] !== c) {
        te = (et)=>{
            if (et.isWindowActivation || O.now() - D < x) {
                et.dropAsStray();
                return;
            }
            c();
        };
        r[15] = O;
        r[16] = x;
        r[17] = D;
        r[18] = c;
        r[19] = te;
    } else {
        te = r[19];
    }
    let onClick = te;
    let tt;
    if (r[20] === S) {
        tt = (Ol)=>E(true);
        r[20] = tt;
    } else {
        tt = r[20];
    }
    let onFocus = tt;
    let ot;
    if (r[21] === S) {
        ot = (Nl)=>E(false);
        r[21] = ot;
    } else {
        ot = r[21];
    }
    let onBlur = ot;
    let rt;
    if (r[22] === S) {
        rt = ()=>T(true);
        r[22] = rt;
    } else {
        rt = r[22];
    }
    let onMouseEnter = rt;
    let it;
    if (r[23] === S) {
        it = ()=>T(false);
        r[23] = it;
    } else {
        it = r[23];
    }
    let onMouseLeave = it;
    let st;
    if (r[24] !== u || r[25] !== _ || r[26] !== v || r[27] !== A) {
        let Zo = {
            focused: v,
            hovered: A,
            active: _
        };
        st = typeof u === "function" ? u(Zo) : u;
        r[24] = u;
        r[25] = _;
        r[26] = v;
        r[27] = A;
        r[28] = st;
    } else {
        st = r[28];
    }
    let ve = st;
    let lt;
    if (r[29] !== l || r[30] !== ve || r[31] !== onClick || r[32] !== z || r[33] !== p || r[34] !== m || r[35] !== tabIndex) {
        lt = e(ad, {
            ref: p,
            tabIndex,
            autoFocus: l,
            onKeyDown: z,
            onClick,
            onFocus,
            onBlur,
            onMouseEnter,
            onMouseLeave,
            hoverFollowsPaint: true,
            ...m,
            children: ve
        });
        r[29] = l;
        r[30] = ve;
        r[31] = onClick;
        r[32] = z;
        r[33] = p;
        r[34] = m;
        r[35] = tabIndex;
        r[36] = lt;
    } else {
        lt = r[36];
    }
    return lt;
}
const zH = je;
N();
function nt() {
    return Te(t6n);
}
function VN({ children, fallback }) {
    if (nt()) {
        return fallback ?? null;
    }
    return children;
}
function Odn(o, r) {
    if (typeof o === "function") {
        o(r);
        return;
    }
    if (o) {
        o.current = r;
    }
}
N();
function Qw({ line, column, active, visible = false }) {
    let c = Te(r6n);
    let p = R(null);
    let m = le((b)=>{
        p.current = b;
    }, []);
    en(()=>{
        let p_current = p.current;
        if (active && p_current) {
            c({
                relativeX: column,
                relativeY: line,
                node: p_current,
                visible
            });
        } else {
            c(null, p_current);
        }
    });
    en(()=>()=>{
            c(null, p.current);
        }, [
        c
    ]);
    return m;
}
function Ye(o) {
    let r = w(30);
    let l;
    let u;
    let c;
    let onPaste;
    let m;
    let b;
    let C;
    let h;
    let x;
    if (r[0] !== o) {
        ({ ref: m, autoFocus: C, disabled: h, onKeyDown: c, onPaste, caret: l, allowPrintableKeybindings: x, children: u, ...b } = o);
        r[0] = o;
        r[1] = l;
        r[2] = u;
        r[3] = c;
        r[4] = onPaste;
        r[5] = m;
        r[6] = b;
        r[7] = C;
        r[8] = h;
        r[9] = x;
    } else {
        l = r[1];
        u = r[2];
        c = r[3];
        onPaste = r[4];
        m = r[5];
        b = r[6];
        C = r[7];
        h = r[8];
        x = r[9];
    }
    let v = C === undefined ? false : C;
    let E = h === undefined ? false : h;
    let A = x === undefined ? false : x;
    const line = l?.line ?? 0;
    const column = l?.column ?? 0;
    const active = l !== undefined;
    const visible = l?.visible;
    let F;
    if (r[10] !== line || r[11] !== column || r[12] !== active || r[13] !== visible) {
        F = {
            line,
            column,
            active,
            visible
        };
        r[10] = line;
        r[11] = column;
        r[12] = active;
        r[13] = visible;
        r[14] = F;
    } else {
        F = r[14];
    }
    let L = Qw(F);
    let D;
    if (r[15] !== L || r[16] !== m) {
        D = (W)=>{
            L(W);
            Odn(m, W);
        };
        r[15] = L;
        r[16] = m;
        r[17] = D;
    } else {
        D = r[17];
    }
    let U = D;
    if (E) {
        let I;
        if (r[18] !== u || r[19] !== U || r[20] !== b) {
            I = e(ad, {
                ref: U,
                ...b,
                children: u
            });
            r[18] = u;
            r[19] = U;
            r[20] = b;
            r[21] = I;
        } else {
            I = r[21];
        }
        return I;
    }
    const textEntry = !A;
    let H;
    if (r[22] !== v || r[23] !== u || r[24] !== c || r[25] !== onPaste || r[26] !== U || r[27] !== b || r[28] !== textEntry) {
        H = e(ad, {
            ref: U,
            tabIndex: 0,
            autoFocus: v,
            textEntry,
            onKeyDown: c,
            onPaste,
            ...b,
            children: u
        });
        r[22] = v;
        r[23] = u;
        r[24] = c;
        r[25] = onPaste;
        r[26] = U;
        r[27] = b;
        r[28] = textEntry;
        r[29] = H;
    } else {
        H = r[29];
    }
    return H;
}
const xee = Ye;
function JP(o) {
    let u = w(4);
    let { count } = o;
    let l = count === undefined ? 1 : count;
    let c;
    if (u[0] !== l) {
        c = `
`.repeat(l);
        u[0] = l;
        u[1] = c;
    } else {
        c = u[1];
    }
    let p;
    if (u[2] !== c) {
        p = e("ink-text", {
            children: c
        });
        u[2] = c;
        u[3] = p;
    } else {
        p = u[3];
    }
    return p;
}
function du(o) {
    let r = w(9);
    let l;
    let u;
    let c;
    if (r[0] !== o) {
        ({ children: u, fromLeftEdge: c, ...l } = o);
        r[0] = o;
        r[1] = l;
        r[2] = u;
        r[3] = c;
    } else {
        l = r[1];
        u = r[2];
        c = r[3];
    }
    const alignSelf = c ? "stretch" : undefined;
    const noSelect = c ? "from-left-edge" : true;
    let b;
    if (r[4] !== l || r[5] !== u || r[6] !== alignSelf || r[7] !== noSelect) {
        b = e(ad, {
            alignSelf,
            ...l,
            noSelect,
            children: u
        });
        r[4] = l;
        r[5] = u;
        r[6] = alignSelf;
        r[7] = noSelect;
        r[8] = b;
    } else {
        b = r[8];
    }
    return b;
}
function CIe(o) {
    let u = w(6);
    let { lines, width } = o;
    if (lines.length === 0) {
        return null;
    }
    let rawText;
    if (u[0] !== lines) {
        rawText = lines.join(`
`);
        u[0] = lines;
        u[1] = rawText;
    } else {
        rawText = u[1];
    }
    let p;
    if (u[2] !== lines.length || u[3] !== rawText || u[4] !== width) {
        p = e("ink-raw-ansi", {
            rawText,
            rawWidth: width,
            rawHeight: lines.length
        });
        u[2] = lines.length;
        u[3] = rawText;
        u[4] = width;
        u[5] = p;
    } else {
        p = u[5];
    }
    return p;
}
N();
N();
function $e(o, r) {
    if (!o?.yogaNode || !r) {
        return null;
    }
    let l = o.yogaNode.getComputedHeight();
    let r_rows = r.rows;
    let c = o.yogaNode.getComputedTop();
    let { parentNode, yogaNode } = o;
    while(parentNode){
        if (parentNode.yogaNode) {
            c += parentNode.yogaNode.getComputedTop();
            yogaNode = parentNode.yogaNode;
        }
        if ((parentNode.style.overflowY ?? parentNode.style.overflow) === "scroll" && parentNode.scrollTopRendered === undefined) {
            return null;
        }
        if (parentNode.scrollTop) {
            c -= hie(parentNode);
        }
        parentNode = parentNode.parentNode;
    }
    let b = yogaNode.getComputedHeight();
    let C = c + l;
    let h = b > r_rows ? 1 : 0;
    let x = Math.max(0, b - r_rows) + h;
    let v = x + r_rows;
    if (l === 0) {
        return c >= x && c < v;
    }
    return C > x && c < v;
}
function R6() {
    let o = Te(Zm);
    let r = R(null);
    let l = R({
        isVisible: true
    });
    let u = le((h)=>{
        r.current = h;
        if (h === null && !l.current.isVisible) {
            l.current = {
                isVisible: true
            };
        }
    }, []);
    function c() {
        let isVisible = $e(r.current, o);
        if (isVisible === null) {
            return l.current.isVisible;
        }
        if (isVisible !== l.current.isVisible) {
            l.current = {
                isVisible
            };
        }
        return isVisible;
    }
    let p = R(c);
    p.current = c;
    let m = le(()=>p.current(), []);
    let b = R(o);
    b.current = o;
    let C = le(()=>$e(r.current, b.current), []);
    en(()=>{
        c();
    });
    return [
        u,
        l.current,
        m,
        C
    ];
}
const Io = 480;
function RIe(o) {
    if (a.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT) {
        return Math.max(o, Io);
    }
    return o;
}
function ia(o = 16) {
    let r = Te(Zw);
    let [l, { isVisible }, c] = R6();
    let p = yie();
    let m = R(p);
    let b = isVisible;
    if (m.current !== p) {
        m.current = p;
        b = c();
    }
    let C = !!r && b && o !== null;
    let h = o === null ? null : Math.ceil(RIe(o) / eg) * eg;
    let x = R(0);
    let v = Rt(C ? r.subscribeKeepAlive : bje, ()=>{
        if (C) {
            return x.current = Math.max(x.current, Math.floor(r.now() / h) * h);
        }
        return x.current;
    });
    return [
        l,
        v
    ];
}
N();
const Bo = ()=>Te(Qy);
const yA = Bo;
N();
function EG(o, r) {
    let l = Te(Zw);
    let u = R(o);
    u.current = o;
    let c = R(null);
    let p = le((b)=>()=>c.current?.(), []);
    Rt(p, u6n);
    let m = l?.setTimeout ?? ZP;
    return Z(()=>{
        let b = (...C)=>{
            c.current?.();
            c.current = m(()=>{
                c.current = null;
                u.current(...C);
            }, r);
        };
        b.cancel = ()=>{
            c.current?.();
            c.current = null;
        };
        return b;
    }, [
        m,
        r
    ]);
}
N();
const Ze = ()=>()=>{};
function uve() {
    let { focusManager, rootNode } = Te(Qy);
    let activeElement = Rt(focusManager?.subscribe ?? Ze, ()=>focusManager?.activeElement ?? null);
    return Z(()=>({
            activeElement,
            focusNext: ()=>{
                if (focusManager && rootNode) {
                    focusManager.focusNext(rootNode);
                }
            },
            focusPrevious: ()=>{
                if (focusManager && rootNode) {
                    focusManager.focusPrevious(rootNode);
                }
            },
            focusDirection: (u)=>{
                if (focusManager && rootNode) {
                    return focusManager.focusDirection(u, rootNode);
                }
                return false;
            },
            focus: (u)=>focusManager?.focus(u),
            blur: ()=>focusManager?.blur(),
            subscribe: focusManager?.subscribe ?? Ze
        }), [
        activeElement,
        focusManager,
        rootNode
    ]);
}
N();
const Lo = ()=>()=>{};
function V9(o) {
    let { focusManager } = Te(Qy);
    return Rt(focusManager?.subscribe ?? Lo, ()=>{
        let o_current = o.current;
        let u = focusManager?.activeElement;
        if (!o_current || !u) {
            return false;
        }
        return EU(u, o_current);
    }, ()=>false);
}
N();
function Ya() {
    return Te(o6n) ?? Uo;
}
function Uo() {
    return Date.now();
}
N();
function JYn(o) {
    let r = Te(Zw);
    let l = o === null ? null : Math.ceil(RIe(o) / eg) * eg;
    let u = R(null);
    let c = Z(()=>{
        if (!r || l === null) {
            return bje;
        }
        return (p)=>r.subscribeFollower(()=>{
                u.current = r.now();
                p();
            });
    }, [
        r,
        l
    ]);
    return Rt(c, ()=>{
        if (!r || l === null) {
            u.current = null;
            return 0;
        }
        if (u.current === null) {
            u.current = r.now();
        }
        return Math.floor(u.current / l) * l;
    });
}
function Di(o, r, l) {
    let u = R(o);
    u.current = o;
    let c = Te(Zw);
    let p = l?.immediate ?? false;
    let m = R(null);
    let b = Z(()=>{
        if (!c || r === null) {
            return (C)=>{
                m.current = null;
                return ()=>{};
            };
        }
        return (C)=>{
            if (p && m.current === null) {
                u.current();
            }
            m.current = r;
            return pve(c, ()=>u.current(), r);
        };
    }, [
        c,
        r,
        p
    ]);
    Rt(b, u6n);
}
function pve(o, r, l) {
    let u = false;
    let c;
    let p = ()=>{
        if (u) {
            return;
        }
        try {
            r();
        } finally{
            if (!u) {
                c = o.setTimeout(p, l);
            }
        }
    };
    c = o.setTimeout(p, l);
    return ()=>{
        u = true;
        c();
    };
}
N();
function kc(o) {
    let { subscribeLayout } = Te(Qy);
    let l = Rt(subscribeLayout, o);
    let [, u] = gh((c)=>c + 1, 0);
    en(()=>{
        if (!Object.is(o(), l)) {
            u();
        }
    });
    return l;
}
N();
function QYn(o) {
    let { retainFinePointer } = Te(Qy);
    P(()=>{
        if (o) {
            return retainFinePointer();
        }
    }, [
        o,
        retainFinePointer
    ]);
}
N();
function qe(o) {
    if (!o?.yogaNode) {
        return;
    }
    if (o.yogaNode.getDisplay() === 1) {
        return null;
    }
    let r = 0;
    let l = o;
    while(true){
        let u = l.parentNode;
        if (!u?.yogaNode || !l.yogaNode) {
            return;
        }
        r += l.yogaNode.getComputedTop();
        let c = u.parentNode;
        if (c?.yogaNode !== undefined && (c.style.overflowY ?? c.style.overflow) === "scroll") {
            return Wo(o, c, {
                top: u.yogaNode.getComputedTop() + r,
                itemTop: u.yogaNode.getComputedTop() + l.yogaNode.getComputedTop(),
                itemHeight: l.yogaNode.getComputedHeight()
            });
        }
        l = u;
    }
}
function Wo(o, { scrollTopRendered, yogaNode }, l) {
    let of = o.yogaNode?.getComputedHeight();
    if (scrollTopRendered === undefined || !yogaNode || !of) {
        return;
    }
    let m = yogaNode.getComputedBorder(1);
    let b = yogaNode.getComputedHeight() - yogaNode.getComputedBorder(3);
    let C = m + yogaNode.getComputedPadding(1);
    let h = b - yogaNode.getComputedPadding(3);
    let x = l.top - scrollTopRendered;
    let v = l.itemTop - scrollTopRendered;
    let E = v + l.itemHeight <= C || v >= h;
    let A = Math.max(x, m);
    let T = Math.min(x + of, b);
    if (E || A >= T) {
        return null;
    }
    return {
        first: A - x,
        last: T - x - 1,
        of
    };
}
function ZYn(o, rows) {
    let { subscribeFrames } = Te(Qy);
    let u = R(null);
    let c = R({
        rows,
        lastRows: undefined,
        contentRows: undefined
    });
    let p = Rt(le((m)=>{
        if (o) {
            return subscribeFrames(m);
        }
        return ()=>{};
    }, [
        o,
        subscribeFrames
    ]), le(()=>{
        if (!o) {
            return;
        }
        let m = u.current?.yogaNode?.getComputedHeight();
        let b = u.current?.childNodes.reduce((A, T)=>A + (T.yogaNode?.getComputedHeight() ?? 0), 0);
        let C = qe(u.current);
        let c_current = c.current;
        let x = C === undefined || C === c_current.rows || !!C && !!c_current.rows && C.first === c_current.rows.first && C.last === c_current.rows.last && C.of === c_current.rows.of;
        let contentRows = m === undefined ? undefined : b;
        if (!(x && contentRows === c_current.contentRows)) {
            c.current = {
                rows: x ? c_current.rows : C,
                lastRows: m || c_current.lastRows,
                contentRows
            };
        } else if (m) {
            c_current.lastRows = m;
        }
        return c.current;
    }, [
        o
    ]));
    return [
        u,
        p?.rows,
        p?.lastRows,
        p?.contentRows
    ];
}
N();
function _A() {
    Te($fe);
    let o = ri().get(process.stdout);
    return Z(()=>{
        if (!o) {
            return {
                copySelection: ()=>"",
                copySelectionNoClear: ()=>"",
                getSelectedText: ()=>"",
                clearSelection: ()=>{},
                hasSelection: ()=>false,
                getState: ()=>null,
                subscribe: ()=>()=>{},
                moveFocus: ()=>{},
                setSelectionBgColor: ()=>{}
            };
        }
        return {
            copySelection: ()=>o.copySelection(),
            copySelectionNoClear: ()=>o.copySelectionNoClear(),
            getSelectedText: ()=>o.getSelectedText(),
            clearSelection: ()=>o.clearTextSelection(),
            hasSelection: ()=>o.hasTextSelection(),
            getState: ()=>o.selection,
            subscribe: (r)=>o.subscribeToSelectionChange(r),
            moveFocus: (r)=>o.moveSelectionFocus(r),
            setSelectionBgColor: (r)=>o.setSelectionBgColor(r)
        };
    }, [
        o
    ]);
}
const Ho = ()=>()=>{};
const jo = ()=>false;
function mNo() {
    Te($fe);
    let o = ri().get(process.stdout);
    return Rt(o ? o.subscribeToSelectionChange : Ho, o ? o.hasTextSelection : jo);
}
N();
const K = (r_1, g_1, b)=>({
        type: "rgb",
        r: r_1,
        g: g_1,
        b
    });
const Vo = {
    idle: {
        indicator: K(0, 215, 95),
        status: "Idle",
        statusColor: K(136, 136, 136)
    },
    busy: {
        indicator: K(255, 149, 0),
        status: "Working…",
        statusColor: K(255, 149, 0)
    },
    waiting: {
        indicator: K(95, 135, 255),
        status: "Waiting",
        statusColor: K(95, 135, 255)
    }
};
function Mdn(o, status) {
    let l = Te(kU);
    let u = R(null);
    P(()=>{
        if (o === null) {
            if (u.current !== null && l && DYt()) {
                l(xI(txn));
            }
            u.current = null;
            return;
        }
        u.current = o;
        if (!l || !DYt()) {
            return;
        }
        let c = Vo[o];
        let p = o === "idle" && status !== undefined ? {
            ...c,
            status
        } : c;
        l(xI(nns(p)));
    }, [
        o,
        status,
        l
    ]);
}
N();
function fve(o) {
    let r = Te(kU);
    P(()=>{
        if (o === null || !r) {
            return;
        }
        let l = un(o);
        r(mh(Yp.SET_TITLE_AND_ICON, l));
    }, [
        o,
        r
    ]);
}
N();
const Ko = ()=>false;
function zr(o, r, l) {
    let u = Te(Zw);
    let c = typeof o === "function";
    let p = c ? o : null;
    let m = c ? r : o;
    let b = c ? undefined : r;
    let C = R(p);
    C.current = p;
    let h = R(null);
    let x = u?.setTimeout ?? ZP;
    let v = Z(()=>{
        if (m === null) {
            return bje;
        }
        let A = (T)=>{
            h.current = null;
            T();
            return x(()=>{
                h.current = A;
                if (c) {
                    C.current?.();
                } else {
                    T();
                }
            }, m);
        };
        return A;
    }, [
        x,
        m,
        c,
        b,
        ...l ?? []
    ]);
    let E = Rt(v, c ? Ko : ()=>h.current === v);
    if (!c) {
        return E;
    }
}
const zo = (o)=>({
        width: o.yogaNode?.getComputedWidth() ?? 0,
        height: o.yogaNode?.getComputedHeight() ?? 0
    });
const Ks = zo;
function x6(o, r) {
    let l = 0;
    let u = o;
    while(u !== undefined && u !== r){
        l += u.yogaNode?.getComputedTop() ?? 0;
        u = u.parentNode;
    }
    if (u === r) {
        return l;
    }
    return -1;
}
function be(o, r) {
    let l = Cc(oe, null, Cc(Ddn, null, Cc(Vmt, null, Cc(ke, null, o))));
    if (r !== undefined) {
        return Cc(Gmt, {
            ...r,
            children: l
        });
    }
    return l;
}
function Xe() {
    return {
        nativeCursor: qN(),
        atlasRecorder: we()
    };
}
async function kG(o, r, l) {
    let u = l?.storageV5 !== undefined ? Aat(l.storageV5) : undefined;
    if (r !== undefined && "write" in r) {
        return ie(be(o, u), r);
    }
    return ie(be(o, u), {
        ...Xe(),
        ...r
    });
}
const Qe = new WeakMap;
async function xIe(o, r) {
    let l = await Ee({
        ...Xe(),
        ...o
    });
    let u = r?.storageV5 !== undefined ? Aat(r.storageV5) : undefined;
    let c = {
        ...l,
        render: (m)=>l.render(be(m, u))
    };
    let p = ri().get(o?.stdout ?? process.stdout);
    if (p) {
        Qe.set(p, c);
    }
    return c;
}
function P0r(o = process.stdout) {
    let r = ri().get(o);
    return r && Qe.get(r);
}
export { F$t, PC, XYn, Hi, on, nt, yj, U$t, fNo, s, qXe, n, Wt, Do, zH, VN, Odn, Qw, xee, JP, du, CIe, R6, RIe, ia, yA, EG, uve, V9, Ya, JYn, Di, pve, kc, QYn, ZYn, _A, mNo, Mdn, fve, zr, x6, Ks, kG, xIe, P0r };
