import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { ra, pAo, aIs, L1, cIs } from "/$bunfs/root/chunk-98pm569t.js";
import { Qt } from "/$bunfs/root/chunk-cz7wtscb.js";
import { constants } from "fs";
import { AsyncLocalStorage } from "async_hooks";
import { appendFile, copyFile, lstat, mkdir, open, readdir, readFile, stat, unlink, writeFile } from "fs/promises";
const z = {
    ambiguousIsNarrow: true
};
function ae(e) {
    return Bun.stringWidth(e, z);
}
const vse = {
    NUL: 0,
    SOH: 1,
    STX: 2,
    ETX: 3,
    EOT: 4,
    ENQ: 5,
    ACK: 6,
    BEL: 7,
    BS: 8,
    HT: 9,
    LF: 10,
    VT: 11,
    FF: 12,
    CR: 13,
    SO: 14,
    SI: 15,
    DLE: 16,
    DC1: 17,
    DC2: 18,
    DC3: 19,
    DC4: 20,
    NAK: 21,
    SYN: 22,
    ETB: 23,
    CAN: 24,
    EM: 25,
    SUB: 26,
    ESC: 27,
    FS: 28,
    GS: 29,
    RS: 30,
    US: 31,
    DEL: 127
};
const AH = "\x1B";
const Gz = "\x07";
const j5e = ";";
const WCr = "\x1B(B\x0F";
const bZ = {
    CSI: 91,
    OSC: 93,
    DCS: 80,
    APC: 95,
    PM: 94,
    SOS: 88,
    ST: 92
};
function T(e) {
    return e >= 48 && e <= 126;
}
const C = AH + String.fromCharCode(bZ.CSI);
const S = {
    PARAM_START: 48,
    PARAM_END: 63,
    INTERMEDIATE_START: 32,
    INTERMEDIATE_END: 47,
    FINAL_START: 64,
    FINAL_END: 126
};
function D(e) {
    return e >= S.PARAM_START && e <= S.PARAM_END;
}
function b(e) {
    return e >= S.INTERMEDIATE_START && e <= S.INTERMEDIATE_END;
}
function k(e) {
    return e >= S.FINAL_START && e <= S.FINAL_END;
}
function pl(...e) {
    if (e.length === 0) {
        return C;
    }
    if (e.length === 1) {
        return `${C}${e[0]}`;
    }
    let t = e.slice(0, -1);
    let r = e.at(-1);
    return `${C}${t.join(j5e)}${r}`;
}
const YE = {
    CUU: 65,
    CUD: 66,
    CUF: 67,
    CUB: 68,
    CNL: 69,
    CPL: 70,
    CHA: 71,
    CUP: 72,
    CHT: 73,
    HPA: 96,
    HPR: 97,
    VPA: 100,
    VPR: 101,
    HVP: 102,
    ED: 74,
    EL: 75,
    ECH: 88,
    IL: 76,
    DL: 77,
    ICH: 64,
    DCH: 80,
    SU: 83,
    SD: 84,
    SM: 104,
    RM: 108,
    SGR: 109,
    DSR: 110,
    DECSCUSR: 113,
    DECSTBM: 114,
    SCOSC: 115,
    SCORC: 117,
    CBT: 90
};
const dIs = [
    "toEnd",
    "toStart",
    "all",
    "scrollback"
];
const uIs = [
    "toEnd",
    "toStart",
    "all"
];
const fAo = [
    {
        style: "block",
        blinking: true
    },
    {
        style: "block",
        blinking: true
    },
    {
        style: "block",
        blinking: false
    },
    {
        style: "underline",
        blinking: true
    },
    {
        style: "underline",
        blinking: false
    },
    {
        style: "bar",
        blinking: true
    },
    {
        style: "bar",
        blinking: false
    }
];
function P(e = 1) {
    if (e === 0) {
        return "";
    }
    return pl(e, "A");
}
function mAo(e = 1) {
    if (e === 0) {
        return "";
    }
    return pl(e, "B");
}
function X(e = 1) {
    if (e === 0) {
        return "";
    }
    return pl(e, "C");
}
function q(e = 1) {
    if (e === 0) {
        return "";
    }
    return pl(e, "D");
}
function UUe(e) {
    return pl(e, "G");
}
const gAo = pl("G");
function N1(e, t) {
    return pl(e, t, "H");
}
const Ub = pl("H");
function SZ(e, t) {
    let r = "";
    if (e < 0) {
        r += q(-e);
    } else if (e > 0) {
        r += X(e);
    }
    if (t < 0) {
        r += P(-t);
    } else if (t > 0) {
        r += mAo(t);
    }
    return r;
}
function zCr() {
    return pl("K");
}
const Ese = pl(2, "K");
const XE = pl(2, "J");
const XHt = pl(3, "J");
function JHt(e) {
    if (e <= 0) {
        return "";
    }
    let t = "";
    for(let r = 0; r < e; r++){
        t += Ese;
        if (r < e - 1) {
            t += P(1);
        }
    }
    t += gAo;
    return t;
}
function pIs(e = 1) {
    if (e === 0) {
        return "";
    }
    return pl(e, "S");
}
function fIs(e = 1) {
    if (e === 0) {
        return "";
    }
    return pl(e, "T");
}
function vpe(e, t) {
    return pl(e, t, "r");
}
const wZ = pl("r");
const mIs = pl("200~");
const gIs = pl("201~");
const QHt = pl("I");
const ZHt = pl("O");
const hIs = pl(">5u");
const yIs = pl(">1u");
const hAo = pl("<u");
const _Is = pl(">4;2m");
const W5e = pl(">4m");
const j = /^\[M[\x60-\x7f][\x20-\uffff]?$/;
const A = "Gi=";
const V = /^\x1b\]8(?:;|\r?$)/;
const J = "\x1B]8;;\x1B\\";
const Q = /^(?:\[(?:\d{1,2}(?:;\d{1,2})?[~^$@]|(?:1;\d{1,2})?[A-DFHa-d])|O[A-DFHa-d])/;
function YSe(e) {
    let t = "ground";
    let r = "";
    let n = e?.x10Mouse ?? false;
    let s = e?.escPrefixedKeyIsAlt;
    let o = e?.stringsEndAtLineFeed ?? false;
    return {
        feed (c) {
            let m = F(c, t, r, false, n, s?.() ?? false, o);
            t = m.state.state;
            r = m.state.buffer;
            return m.tokens;
        },
        flush () {
            let c = F("", t, r, true, n, s?.() ?? false, o);
            t = c.state.state;
            r = c.state.buffer;
            return c.tokens;
        },
        reset () {
            t = "ground";
            r = "";
        },
        buffer () {
            return r;
        }
    };
}
function lGn(e) {
    let t = YSe();
    let r = t.feed(e);
    r.push(...t.flush());
    return r;
}
function F(e, state, r, n, s, o, c) {
    let tokens = [];
    let state_1 = {
        state,
        buffer: ""
    };
    let u = r + e;
    let i = 0;
    let d = 0;
    let l = 0;
    let p = ()=>{
        if (i > d) {
            let a = u.slice(d, i);
            if (a) {
                tokens.push({
                    type: "text",
                    value: a
                });
            }
        }
        d = i;
    };
    let g = (a)=>{
        if (a) {
            tokens.push({
                type: "sequence",
                value: a
            });
        }
        state_1.state = "ground";
        d = i;
    };
    while(i < u.length){
        let a = u.charCodeAt(i);
        switch(state_1.state){
            case "ground":
                if (a === vse.ESC) {
                    p();
                    l = i;
                    state_1.state = "escape";
                    i++;
                } else if (a === vse.DEL) {
                    if (j.test(u.slice(d, i))) {
                        i++;
                    } else {
                        p();
                        i++;
                        tokens.push({
                            type: "text",
                            value: "\x7F"
                        });
                        d = i;
                    }
                } else if (s && a < 32 && (u.length < 64 || a === vse.BS)) {
                    p();
                    i++;
                    if (a === 13 && u.charCodeAt(i) === 10) {
                        i++;
                    }
                    tokens.push({
                        type: "text",
                        value: String.fromCharCode(a)
                    });
                    d = i;
                } else {
                    i++;
                }
                break;
            case "escape":
                if (a === bZ.CSI) {
                    state_1.state = "csi";
                    i++;
                } else if (a === bZ.OSC) {
                    state_1.state = "osc";
                    i++;
                } else if (a === bZ.DCS) {
                    state_1.state = "dcs";
                    i++;
                } else if (a === bZ.APC && (!s || i + 1 >= u.length || u[i + 1] === A[0])) {
                    state_1.state = "apc";
                    i++;
                } else if (!s && a === bZ.PM) {
                    state_1.state = "pm";
                    i++;
                } else if (!s && (a === bZ.SOS || a === 107)) {
                    state_1.state = "sos";
                    i++;
                } else if (a === 79) {
                    state_1.state = "ss3";
                    i++;
                } else if (s && (a === 32 || a === 13 || a === 10 || a === 9)) {
                    i++;
                    tokens.push({
                        type: "text",
                        value: u.slice(l, i)
                    });
                    state_1.state = "ground";
                    d = i;
                } else if (s && b(a)) {
                    tokens.push({
                        type: "text",
                        value: u.slice(l, i)
                    });
                    state_1.state = "ground";
                    d = i;
                } else if (b(a)) {
                    state_1.state = "escapeIntermediate";
                    i++;
                } else if (a === vse.DEL) {
                    i++;
                    tokens.push({
                        type: "text",
                        value: u.slice(l, i)
                    });
                    state_1.state = "ground";
                    d = i;
                } else if (T(a)) {
                    i++;
                    g(u.slice(l, i));
                } else if (a === vse.ESC && o && i === l + 1 && Q.test(u.slice(i + 1, i + 1 + 8))) {
                    i++;
                } else if (a === vse.ESC) {
                    g(u.slice(l, i));
                    l = i;
                    state_1.state = "escape";
                    i++;
                } else if (a < 32) {
                    i++;
                    tokens.push({
                        type: "text",
                        value: u.slice(l, i)
                    });
                    state_1.state = "ground";
                    d = i;
                } else {
                    state_1.state = "ground";
                    d = l;
                }
                break;
            case "escapeIntermediate":
                if (b(a)) {
                    i++;
                } else if (T(a)) {
                    i++;
                    g(u.slice(l, i));
                } else {
                    state_1.state = "ground";
                    d = l;
                }
                break;
            case "csi":
                if (s && a === 77 && i - l === 2 && (i + 1 >= u.length || u.charCodeAt(i + 1) >= 32) && (i + 2 >= u.length || u.charCodeAt(i + 2) >= 32) && (i + 3 >= u.length || u.charCodeAt(i + 3) >= 32)) {
                    if (i + 4 <= u.length) {
                        i += 4;
                        g(u.slice(l, i));
                    } else {
                        i = u.length;
                    }
                    break;
                }
                if (k(a)) {
                    i++;
                    g(u.slice(l, i));
                } else if (D(a) || b(a)) {
                    i++;
                } else {
                    state_1.state = "ground";
                    d = l;
                }
                break;
            case "ss3":
                if (a >= 64 && a <= 126) {
                    i++;
                    g(u.slice(l, i));
                } else {
                    state_1.state = "ground";
                    d = l;
                }
                break;
            case "osc":
            case "dcs":
            case "apc":
            case "pm":
            case "sos":
                if (s && state_1.state === "apc" && i >= l + 2 && i - l - 2 < A.length && u[i] !== A[i - l - 2]) {
                    g(u.slice(l, l + 2));
                    d = l + 2;
                } else if (a === vse.BEL && state_1.state !== "pm" && state_1.state !== "sos") {
                    i++;
                    g(u.slice(l, i));
                } else if (a === vse.ESC && i + 1 < u.length) {
                    if (u.charCodeAt(i + 1) === bZ.ST) {
                        i += 2;
                        g(u.slice(l, i));
                    } else {
                        g(u.slice(l, i));
                        l = i;
                        state_1.state = "escape";
                        i++;
                    }
                } else if (a === vse.CAN || a === vse.SUB) {
                    i++;
                    g(u.slice(l, i));
                } else if (c && a === vse.LF) {
                    g(V.test(u.slice(l, Math.min(i, l + 5))) ? J : "");
                } else {
                    i++;
                }
                break;
        }
    }
    if (state_1.state === "ground") {
        p();
    } else if (n) {
        let a = u.slice(l);
        if (a) {
            tokens.push({
                type: "sequence",
                value: a
            });
        }
        state_1.state = "ground";
    } else {
        state_1.buffer = u.slice(l);
    }
    return {
        tokens,
        state: state_1
    };
}
const Z = /\x1b\[[34]8;[25];/;
function Nu(e, t, r) {
    if (!(t > 0)) {
        return e;
    }
    let n = re(e, t, r);
    if (Z.test(e) && n.includes(`
`)) {
        return se(n);
    }
    return n;
}
const ee = "\uDB80\uDC00";
const te = "𪘀";
const _ = /[\u{F0000}\u{2FA1D}]/gu;
const h = /[^\x00-\u02FF\u0370-\u0482\u048A-\u052F\u2000-\u200B\u2010-\u205F\u2070-\u20CF\u2100-\u2BFF\u2E80-\u3029\u3030-\u3098\u309B-\uA4CF\uAC00-\uD7A3\uF900-\uFAFF\uFF01-\uFF9D\uFFE0-\uFFEE\u{1f000}-\u{1f1e5}\u{1f200}-\u{1f3fa}\u{1f400}-\u{1faff}]/gu;
function re(e, t, r) {
    if (e.search(h) === -1) {
        return Bun.wrapAnsi(e, t, r);
    }
    let n = [];
    let s = [];
    let o = false;
    let c = e.search(_) !== -1;
    let m = ra();
    for (let i of lGn(e)){
        let d = i.value;
        if (i.type === "sequence") {
            s.push(d);
            continue;
        }
        let l = 0;
        let p;
        h.lastIndex = 0;
        while((p = h.exec(d)) !== null){
            let g = d.lastIndexOf(`
`, p.index) + 1;
            let a = d.indexOf(`
`, p.index);
            let N = a === -1 ? d.length : a;
            for (let { segment, index } of m.segment(d.slice(g, N))){
                if (segment.length === 1) {
                    continue;
                }
                let Y = segment.codePointAt(0) > 65535 ? 2 : 1;
                if (segment.length === Y) {
                    continue;
                }
                let E = ae(segment);
                if (E !== 1 && E !== 2) {
                    continue;
                }
                L(s, n, d.slice(l, g + index), c);
                n.push(segment);
                s.push(E === 1 ? ee : te);
                o = true;
                l = g + index + segment.length;
            }
            h.lastIndex = N;
        }
        L(s, n, d.slice(l), c);
    }
    if (!o) {
        return Bun.wrapAnsi(e, t, r);
    }
    let f = 0;
    let u = "";
    for (let i of lGn(Bun.wrapAnsi(s.join(""), t, r))){
        u += i.type === "sequence" ? i.value : i.value.replace(_, (d)=>n[f++] ?? d);
    }
    return u;
}
function L(e, t, r, n) {
    if (r === "") {
        return;
    }
    if (n) {
        for (let s of r.match(_) ?? []){
            t.push(s);
        }
    }
    e.push(r);
}
const y = /\x1b\[([\d;]*)m/g;
const ne = /^(3[0-79]|9[0-7])$/;
const ie = /^(4[0-79]|10[0-7])$/;
function se(e) {
    let t = "";
    let r = "";
    let n = "";
    let s = 0;
    y.lastIndex = 0;
    let o;
    while((o = y.exec(e)) !== null){
        t += M(e.slice(s, o.index), r, n);
        t += o[0];
        s = y.lastIndex;
        let c = o[1];
        if (c === "" || c === "0") {
            r = "";
            n = "";
        } else if (c.startsWith("38;")) {
            r = o[0];
        } else if (ne.test(c)) {
            r = "";
        } else if (c.startsWith("48;")) {
            n = o[0];
        } else if (ie.test(c)) {
            n = "";
        }
    }
    t += M(e.slice(s), r, n);
    return t;
}
function M(e, t, r) {
    if (e === "" || t === "" && r === "") {
        return e;
    }
    let n = "";
    let s = 0;
    for(let o = 0; o < e.length; o++){
        if (e.charCodeAt(o) === 10) {
            n += e.slice(s, o);
            if (t) {
                n += "\x1B[39m";
            }
            if (r) {
                n += "\x1B[49m";
            }
            n += `
` + t + r;
            s = o + 1;
        }
    }
    n += e.slice(s);
    return n;
}
function hc(e, t) {
    if (ae(e) <= t) {
        return e;
    }
    if (t <= 0) {
        return "…";
    }
    if (t < 5) {
        return pt(e, t);
    }
    let r = e.lastIndexOf("/");
    let n = r >= 0 ? r : e.lastIndexOf("\\");
    let s = n >= 0 ? e.slice(n) : e;
    let o = n >= 0 ? e.slice(0, n) : "";
    let c = ae(s);
    if (c >= t - 1) {
        return xO(e, t);
    }
    let m = t - 1 - c;
    return `${$1(o, m)}…${s}`;
}
function pt(e, t) {
    if (ae(e) <= t) {
        return e;
    }
    if (t <= 1) {
        return "…";
    }
    let r = 0;
    let n = "";
    for (let { segment } of ra().segment(e)){
        let o = ae(segment);
        if (r + o > t - 1) {
            break;
        }
        n += segment;
        r += o;
    }
    return `${n}…`;
}
function xO(e, t) {
    if (ae(e) <= t) {
        return e;
    }
    if (t <= 1) {
        return "…";
    }
    let r = t - 1;
    let n = [
        ...ra().segment(e)
    ];
    let s = 0;
    let n_length = n.length;
    for(let c = n.length - 1; c >= 0; c--){
        let m = ae(n[c].segment);
        if (s + m > r) {
            break;
        }
        s += m;
        n_length = c;
    }
    return `\u2026${n.slice(n_length).map((c)=>c.segment).join("")}`;
}
function $1(e, t) {
    if (ae(e) <= t) {
        return e;
    }
    if (t <= 0) {
        return "";
    }
    let r = 0;
    let n = "";
    for (let { segment } of ra().segment(e)){
        let o = ae(segment);
        if (r + o > t) {
            break;
        }
        n += segment;
        r += o;
    }
    return n;
}
const oe = 8;
const ue = 40;
function Uut(e, t) {
    return pt(e, Math.max(ue, t - oe));
}
function jo(e, t, r = false) {
    let n = e;
    if (r) {
        let s = e.indexOf(`
`);
        if (s !== -1) {
            n = e.substring(0, s);
            if (ae(n) + 1 > t) {
                return pt(`${n}\u2026`, t);
            }
            return `${n}\u2026`;
        }
    }
    if (ae(n) <= t) {
        return n;
    }
    return pt(n, t);
}
function z5e(e, t) {
    let r = [];
    let n = "";
    let s = 0;
    for (let { segment } of ra().segment(e)){
        let c = ae(segment);
        if (s + c <= t) {
            n += segment;
            s += c;
        } else {
            if (n) {
                r.push(n);
            }
            n = segment;
            s = c;
        }
    }
    if (n) {
        r.push(n);
    }
    return r;
}
function cGn(e, t, r) {
    if (r <= 0 || t <= 0) {
        return "";
    }
    let n = Nu(e, t, {
        trim: true,
        hard: true
    }).split(`
`);
    if (n.length <= r) {
        return n.join(`
`);
    }
    let s = n.slice(0, r);
    s[r - 1] = pt(`${s[r - 1] ?? ""}…`, t);
    return s.join(`
`);
}
function XSe(e) {
    return `${(e / 1000).toFixed(1)}s`;
}
function rn(e, t) {
    if (e < 60000) {
        if (e === 0) {
            return "0s";
        }
        if (e < 1) {
            return `${(e / 1000).toFixed(1)}s`;
        }
        return `${Math.floor(e / 1000).toString()}s`;
    }
    let r = Math.floor(e / 86400000);
    let n = Math.floor(e % 86400000 / 3600000);
    let s = Math.floor(e % 3600000 / 60000);
    let o = Math.round(e % 60000 / 1000);
    if (o === 60) {
        o = 0;
        s++;
    }
    if (s === 60) {
        s = 0;
        n++;
    }
    if (n === 24) {
        n = 0;
        r++;
    }
    let c = t?.hideTrailingZeros;
    if (t?.mostSignificantOnly) {
        if (r > 0) {
            return `${r}d`;
        }
        if (n > 0) {
            return `${n}h`;
        }
        if (s > 0) {
            return `${s}m`;
        }
        return `${o}s`;
    }
    if (r > 0) {
        if (c && n === 0 && s === 0) {
            return `${r}d`;
        }
        if (c && s === 0) {
            return `${r}d ${n}h`;
        }
        return `${r}d ${n}h ${s}m`;
    }
    if (n > 0) {
        if (c && s === 0 && o === 0) {
            return `${n}h`;
        }
        if (c && o === 0) {
            return `${n}h ${s}m`;
        }
        return `${n}h ${s}m ${o}s`;
    }
    if (s > 0) {
        if (c && o === 0) {
            return `${s}m`;
        }
        return `${s}m ${o}s`;
    }
    return `${o}s`;
}
function Bw(e) {
    let t = e >= 60000 ? Math.round(e / 60000) * 60000 : e;
    return rn(t, {
        hideTrailingZeros: true
    });
}
function Epe(e) {
    let t = Math.max(0, Math.floor(e / 1000));
    if (t < 60) {
        return `${t}s`;
    }
    let r = Math.floor(t / 60);
    if (r < 60) {
        return `${r}m${String(t % 60).padStart(2, "0")}s`;
    }
    let n = Math.floor(r / 60);
    if (n < 24) {
        return `${n}h${String(r % 60).padStart(2, "0")}m`;
    }
    return `${Math.floor(n / 24)}d${String(n % 24).padStart(2, "0")}h`;
}
const ce = {
    notation: "compact",
    maximumFractionDigits: 1,
    minimumFractionDigits: 1
};
const le = {
    notation: "compact",
    maximumFractionDigits: 1,
    minimumFractionDigits: 0
};
function Bs(e) {
    let t = e >= 1000;
    return cIs("en-US", t ? ce : le).format(e).toLowerCase();
}
function Lr(e) {
    return Bs(e).replace(".0", "");
}
function GCr(e, t = 4) {
    return `$${e > 0.5 ? fe(e, 100).toFixed(2) : e.toFixed(t)}`;
}
function fe(e, t) {
    return Math.round(e * t) / t;
}
const yAo = "costs may be inaccurate due to usage of unknown models";
const _Ao = "at your organization's configured rates";
function bAo(e) {
    return `${Bs(e.inputTokens)} input, ${Bs(e.outputTokens)} output, ${Bs(e.cacheReadInputTokens)} cache read, ${Bs(e.cacheCreationInputTokens)} cache write` + (e.webSearchRequests > 0 ? `, ${Bs(e.webSearchRequests)} web search` : "");
}
function F1(e) {
    if (e < 20) {
        return "< 20";
    }
    return `~${Lr(Math.round(e / 10) * 10)}`;
}
function U1(e, { style = "narrow", numeric = "always", maxUnit, now = new Date } = {}) {
    let c = e.getTime() - now.getTime();
    let m = Math.trunc(c / 1000);
    let f = [
        {
            unit: "year",
            seconds: 31536000,
            shortUnit: "y"
        },
        {
            unit: "month",
            seconds: 2592000,
            shortUnit: "mo"
        },
        {
            unit: "week",
            seconds: 604800,
            shortUnit: "w"
        },
        {
            unit: "day",
            seconds: 86400,
            shortUnit: "d"
        },
        {
            unit: "hour",
            seconds: 3600,
            shortUnit: "h"
        },
        {
            unit: "minute",
            seconds: 60,
            shortUnit: "m"
        },
        {
            unit: "second",
            seconds: 1,
            shortUnit: "s"
        }
    ];
    let u = maxUnit ? f.filter((i)=>i.seconds <= 86400) : f;
    for (let { unit, seconds, shortUnit } of u){
        if (Math.abs(m) >= seconds) {
            let p = Math.trunc(m / seconds);
            if (style === "narrow") {
                if (m < 0) {
                    return `${Math.abs(p)}${shortUnit} ago`;
                }
                return `in ${p}${shortUnit}`;
            }
            return pAo("long", numeric).format(p, unit);
        }
    }
    if (style === "narrow") {
        if (m <= 0) {
            return "0s ago";
        }
        return "in 0s";
    }
    return pAo(style, "auto").format(0, "second");
}
function nw(e, { now = new Date, ...rest } = {}) {
    if (e > now) {
        return U1(e, {
            ...rest,
            now
        });
    }
    return U1(e, {
        ...rest,
        numeric: "always",
        now
    });
}
function Urn(e) {
    let t = e.fileSize !== undefined ? Qt(e.fileSize) : `${e.messageCount} messages`;
    let r = [
        nw(e.modified, {
            style: "short"
        }),
        ...e.sessionKind === "bg" ? [
            "bg"
        ] : [],
        ...e.gitBranch ? [
            e.gitBranch
        ] : [],
        t
    ];
    if (e.tag) {
        r.push(`#${e.tag}`);
    }
    if (e.agentSetting) {
        r.push(`@${e.agentSetting}`);
    }
    if (e.prNumber) {
        r.push(e.prRepository ? `${e.prRepository}#${e.prNumber}` : `#${e.prNumber}`);
    }
    return r.join(" · ");
}
function B(e, t) {
    if (t === undefined) {
        return {
            minutes: e.getMinutes(),
            year: e.getFullYear()
        };
    }
    let r = new Map(L1("en-US", {
        timeZone: t,
        year: "numeric",
        minute: "numeric"
    }).formatToParts(e).map((n)=>[
            n.type,
            n.value
        ]));
    return {
        minutes: Number(r.get("minute")),
        year: Number(r.get("year"))
    };
}
function DR(e, t = false, r = true, n = false, s) {
    if (!e) {
        return;
    }
    let o = new Date(e * 1000);
    let c = new Date;
    let { minutes, year } = B(o, s);
    let u = t || s !== undefined ? ` (${s ?? aIs()})` : "";
    let i = (o.getTime() - c.getTime()) / 3600000;
    if (n || i > 24) {
        let l = {
            month: "short",
            day: "numeric",
            hour: r ? "numeric" : undefined,
            minute: !r || minutes === 0 ? undefined : "2-digit",
            hour12: r ? true : undefined,
            timeZone: s
        };
        if (year !== B(c, s).year) {
            l.year = "numeric";
        }
        return o.toLocaleString("en-US", l).replace(/[ \u202f]([AP]M)/i, (g, a)=>a.toLowerCase()) + u;
    }
    return o.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: minutes === 0 ? undefined : "2-digit",
        hour12: true,
        timeZone: s
    }).replace(/[ \u202f]([AP]M)/i, (l, p)=>p.toLowerCase()) + u;
}
function eDt(e, t = false, r = true, n = false) {
    let s = new Date(e);
    return `${DR(Math.floor(s.getTime() / 1000), t, r, n)}`;
}
function tDt(e) {
    return Math.round(e * 1000) / 10;
}
function vZ(e, t = "line") {
    if (e <= 0) {
        return "";
    }
    return `\u2026 +${e} ${I(e, t)}`;
}
function BUe(e) {
    return Math.max(1, Math.round(e / 1000));
}
const FUe = constants.O_NONBLOCK;
const oa = constants.O_NOFOLLOW | FUe;
class VCr {
    read(e) {
        return readFile(e, "utf8");
    }
    readBytes(e) {
        return readFile(e);
    }
    write(e, t, r) {
        return writeFile(e, t, {
            encoding: "utf8",
            mode: r
        });
    }
    async mkdir(e, t) {
        try {
            await mkdir(e, {
                recursive: true,
                mode: t
            });
        } catch (error) {
            if (v(error) !== "EEXIST") {
                throw error;
            }
        }
    }
    atomicWrite(e, t, r) {
        return En(e, t, r);
    }
    delete(e) {
        return unlink(e);
    }
    list(e) {
        return readdir(e);
    }
    append(e, t, r) {
        return appendFile(e, t, {
            encoding: "utf8",
            mode: r
        });
    }
    writeExclusive(e, t, r) {
        return writeFile(e, t, {
            encoding: "utf8",
            flag: "wx",
            mode: r
        });
    }
    writeBytesExclusive(e, t, r) {
        return writeFile(e, t, {
            flag: "wx",
            mode: r
        });
    }
    copy(e, t) {
        return copyFile(e, t);
    }
    async stat(e) {
        return {
            mtimeMs: (await stat(e)).mtimeMs
        };
    }
    async lstat(e) {
        try {
            let t = await lstat(e);
            return {
                isSymbolicLink: t.isSymbolicLink(),
                isFile: t.isFile(),
                isDirectory: t.isDirectory(),
                mtimeMs: t.mtimeMs,
                nlink: t.nlink
            };
        } catch (error) {
            if (v(error) === "ENOENT") {
                return;
            }
            throw error;
        }
    }
    async listEntries(e) {
        return (await readdir(e, {
            withFileTypes: true
        })).map((r)=>({
                name: r.name,
                isDirectory: r.isDirectory(),
                isFile: r.isFile()
            }));
    }
    async readRange(e, t, r) {
        O("readRange", "offset", t);
        O("readRange", "length", r);
        let n = await open(e, "r");
        try {
            return await G(n, t, r);
        } finally{
            await n.close();
        }
    }
    async readTail(path, t, r) {
        O("readTail", "maxBytes", t);
        let n = r?.noFollow ? constants.O_RDONLY | oa : "r";
        let s = await open(path, n);
        try {
            let o = await s.stat();
            if (r?.noFollow && !o.isFile()) {
                throw Object.assign(Error("ENXIO: not a regular file"), {
                    code: "ENXIO",
                    path
                });
            }
            let { size } = o;
            let m = Math.min(t, size);
            return await G(s, size - m, m);
        } finally{
            await s.close();
        }
    }
}
function O(e, t, r) {
    if (!Number.isInteger(r) || r < 0) {
        throw RangeError(`${e}: ${t} must be a non-negative integer, got ${r}`);
    }
}
async function G(e, t, r) {
    if (r === 0) {
        return Buffer.alloc(0);
    }
    let n = Buffer.alloc(r);
    let s = 0;
    while(s < r){
        let { bytesRead } = await e.read(n, s, r - s, t + s);
        if (bytesRead === 0) {
            break;
        }
        s += bytesRead;
    }
    if (s === r) {
        return n;
    }
    return Buffer.from(n.subarray(0, s));
}
const Ee = new AsyncLocalStorage;
function mn() {
    return Ee.getStore() ?? new VCr;
}
export { FUe, oa, ae, vse, AH, Gz, j5e, WCr, bZ, pl, YE, dIs, uIs, fAo, mAo, UUe, gAo, N1, Ub, SZ, zCr, Ese, XE, XHt, JHt, pIs, fIs, vpe, wZ, mIs, gIs, QHt, ZHt, hIs, yIs, hAo, _Is, W5e, YSe, lGn, Nu, hc, pt, xO, $1, Uut, jo, z5e, cGn, XSe, rn, Bw, Epe, Bs, Lr, GCr, yAo, _Ao, bAo, F1, U1, nw, Urn, DR, eDt, tDt, vZ, BUe, VCr, mn };
