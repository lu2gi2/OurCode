import { Zh, QS, Ci, k, ce, gue } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ne, Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, lt, bIo, SIo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { v, Vr } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Lt, d6 } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Yxe } from "/$bunfs/root/chunk-2d9a83dh.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { ae, Nu } from "/$bunfs/root/chunk-223dyewd.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { uo, cxs } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { ft, TP } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { ty } from "/$bunfs/root/chunk-6dwnw6av.js";
import { ea } from "/$bunfs/root/chunk-75wzvwyz.js";
import { hs } from "/$bunfs/root/chunk-nb5ge4vq.js";
import { zkt, V6t, kur, Tur } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { X9r, Uvt, J7o } from "/$bunfs/root/chunk-kasbfbhj.js";
import { IB } from "/$bunfs/root/chunk-4r6b8efh.js";
import { vVe, iye, QRn, ZRn, le, P, Co, en, Z, R, y, Rt, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { s5 } from "/$bunfs/root/chunk-5w1ksvdy.js";
import { Sc } from "/$bunfs/root/chunk-18a8x2hz.js";
import { Gpr, ET, DOn, D$, G0e } from "/$bunfs/root/chunk-cmf2ckg9.js";
import { U2 } from "/$bunfs/root/chunk-xj62f004.js";
import { vee } from "/$bunfs/root/chunk-pdgnwnr8.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Lc } from "/$bunfs/root/chunk-wvwcne5b.js";
import { nn } from "/$bunfs/root/chunk-z47a2vff.js";
import { Ug } from "/$bunfs/root/chunk-ezr23nse.js";
import { Pe, Vb } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { KXe, $dn, gje } from "/$bunfs/root/chunk-vqyxznfw.js";
import { on, nt, s, n, Odn, Qw, xee, ia, V9, Di, zr } from "/$bunfs/root/chunk-8524cxt8.js";
import { nx, qN } from "/$bunfs/root/chunk-4nfvaqps.js";
import { EIe, v0r, fje, BXe, jXe, bi, H$t, jmt } from "/$bunfs/root/chunk-f3cd9jkn.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { Re } from "/$bunfs/root/chunk-3my1j42p.js";
import { V, Hn } from "/$bunfs/root/chunk-zby5bms5.js";
import { Eo } from "/$bunfs/root/chunk-4b1qzs5x.js";
import { is, fA } from "/$bunfs/root/chunk-972pd37y.js";
import { C6 } from "/$bunfs/root/chunk-xj0zmt6h.js";
import { vy, xdn, kIe } from "/$bunfs/root/chunk-gq8z4r72.js";
import { hA, Fh, bm } from "/$bunfs/root/chunk-9qns2dz5.js";
import { jZe, ZMe, H2t, C6r, zZe, Kvn, eHe, HGe, h5o, DGe, GZe, ptr, D2t, LGe, VZe } from "/$bunfs/root/chunk-7kwdaan6.js";
import { OGe, UZe, JMe, T6r, QMe } from "/$bunfs/root/chunk-t98dpkx7.js";
import { aM, O2t, M2t, IGe, hSt } from "/$bunfs/root/chunk-e6p3g23d.js";
import { dt } from "/$bunfs/root/chunk-xg9ned06.js";
import { aT } from "/$bunfs/root/chunk-kxnwft6q.js";
import { ql } from "/$bunfs/root/chunk-snyys9as.js";
import { Qq } from "/$bunfs/root/chunk-yzwz05d1.js";
import { Sg } from "/$bunfs/root/chunk-0v20st7x.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { e1o } from "/$bunfs/root/chunk-nbbfega5.js";
import { o, E, u, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { ra, KSe, D1, _Z, iIs } from "/$bunfs/root/chunk-98pm569t.js";
import { Se, S } from "/$bunfs/root/chunk-cj4xndke.js";
import Li, { basename, dirname, join } from "path";
import { homedir } from "os";
function DMr({ presentation, rows, embedded }) {
    return false;
}
function ULt(l) {
    if (l.wheelUp || l.wheelDown || l.escape) {
        return false;
    }
    if (l.pageUp || l.pageDown) {
        return false;
    }
    if ((l.home || l.end) && l.ctrl) {
        return false;
    }
    if ((l.leftArrow || l.rightArrow || l.upArrow || l.downArrow || l.home || l.end) && (l.shift || l.meta || l.super)) {
        return false;
    }
    return true;
}
function Xs(l) {
    if (l.name === "escape" || l.name === "pageup" || l.name === "pagedown") {
        return false;
    }
    if ((l.name === "home" || l.name === "end") && l.ctrl) {
        return false;
    }
    if ((l.name === "left" || l.name === "right" || l.name === "up" || l.name === "down" || l.name === "home" || l.name === "end") && (l.shift || l.meta || l.superKey)) {
        return false;
    }
    return true;
}
function XDo(l, h) {
    return (C)=>{
        if (!l.hasSelection()) {
            return;
        }
        if (C.key === "c" && !C.meta && (C.ctrl || C.superKey)) {
            if (h) {
                l.clearSelection();
            } else {
                l.copySelection();
            }
            if (C.ctrl && !C.shift) {
                vee();
            }
            C.consume();
            return;
        }
        if (Xs(C)) {
            l.clearSelection();
        }
    };
}
function w1e(l, isActive = true) {
    nn({
        "selection:clear": ()=>{
            if (!l.hasSelection()) {
                return false;
            }
            l.clearSelection();
            vee();
        }
    }, {
        context: "Scroll",
        isActive
    });
}
N();
function Pln(l) {
    let h = iye();
    let C = _Z(l);
    let x = C === 1 ? "char" : "chars";
    let T;
    switch(h){
        case "native":
            T = `copied ${C} ${x} to clipboard`;
            break;
        case "tmux-buffer":
            T = `copied ${C} ${x} to tmux buffer \xB7 paste with prefix + ]`;
            break;
        case "osc52":
            T = `sent ${C} ${x} via OSC 52 \xB7 if paste fails, hold ${vVe()} while selecting for native copy`;
            break;
    }
    let O = ZRn(l);
    if (O) {
        T = `\u26A0 ${O} \xB7 ${T}`;
    }
    return {
        key: "selection-copied",
        kind: "feedback",
        text: T,
        color: "suggestion",
        priority: "immediate",
        timeoutMs: O ? 6000 : h === "native" ? 2000 : 4000
    };
}
function v1e(l, h, C) {
    let x = R(false);
    let T = R(null);
    let [O] = y(()=>({
            peek: ()=>T.current,
            invalidate: ()=>{
                T.current = null;
            }
        }));
    let I = Co((M)=>C?.(M));
    P(()=>{
        if (!h) {
            return;
        }
        QRn();
        return l.subscribe(()=>{
            let U = l.getState();
            let F = l.hasSelection();
            if (U?.isDragging) {
                x.current = false;
                T.current = null;
                return;
            }
            if (!F) {
                x.current = false;
                T.current = null;
                return;
            }
            if (x.current) {
                T.current = null;
                return;
            }
            if (!(ce().copyOnSelect ?? true)) {
                return;
            }
            let j = l.copySelectionNoClear();
            if (!j || !j.trim()) {
                x.current = true;
                return;
            }
            x.current = true;
            T.current = j;
            g("clipboard_write");
            I(j);
        });
    }, [
        h,
        l
    ]);
    return O;
}
function E1e(l) {
    let h = Vb();
    P(()=>{
        l.setSelectionBgColor(h.selectionBg);
    }, [
        l,
        h.selectionBg
    ]);
}
class so {
    #e = {
        credentialsPersisted: 0,
        loginCompleted: 0
    };
    #t = Oe();
    subscribe = (l)=>this.#t.subscribe(l);
    getSnapshot = ()=>this.#e;
    credentialsPersisted() {
        this.#e = {
            ...this.#e,
            credentialsPersisted: this.#e.credentialsPersisted + 1
        };
        this.#t.emit();
    }
    loginCompleted() {
        this.#e = {
            ...this.#e,
            loginCompleted: this.#e.loginCompleted + 1
        };
        this.#t.emit();
    }
}
const k1e = new lt(()=>new so);
N();
function lee() {
    return hs("editorMode", "normal").value === "vim";
}
function OMr() {
    if (EIe()) {
        return "shift + ⏎ for newline";
    }
    if (v0r()) {
        return "\\⏎ for newline";
    }
    return "backslash (\\) + return (⏎) for newline";
}
const qs = new Set([
    "escape",
    "return",
    "enter",
    "tab",
    "backspace",
    "delete",
    "up",
    "down",
    "left",
    "right",
    "pageup",
    "pagedown",
    "home",
    "end",
    "insert",
    "clear",
    "center",
    "undefined",
    "mouse",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "f10",
    "f11",
    "f12"
]);
function MMr(l, h) {
    if (h.ctrl || h.meta) {
        return false;
    }
    if (qs.has(l)) {
        return false;
    }
    return l.length > 0 && !/^\s/.test(l);
}
function HMr(l) {
    return l.length > 0 && ".,?!:;)]".includes(l.charAt(0));
}
N();
function Wt(cursor, wantedColumn) {
    if (wantedColumn?.offset === cursor.offset && wantedColumn.text === cursor.text) {
        return wantedColumn.column;
    }
    let offset = cursor.startOfLogicalLine().offset;
    let x = Js(cursor.text, offset, cursor.offset);
    if (cursor.text[cursor.offset] === "\t") {
        return x + Qn("\t", x) - 1;
    }
    return x;
}
function Js(text, offset, C) {
    let x = 0;
    for (let { segment } of ra().segment(text.slice(offset, C))){
        x += Qn(segment, x);
    }
    return x;
}
function jt(l, h, C, x) {
    let T = 0;
    for (let { segment, index } of ra().segment(l.slice(h, C))){
        T += Qn(segment, T);
        if (T > x) {
            return h + index;
        }
    }
    return C;
}
function Qn(l, h) {
    if (l === "\t") {
        return Yxe - h % Yxe;
    }
    return ae(l);
}
const cn = {
    d: "delete",
    c: "change",
    y: "yank"
};
function Zn(l) {
    return l in cn;
}
const rt = "\b";
const fn = new Set([
    "h",
    "l",
    " ",
    rt,
    "j",
    "k",
    "w",
    "b",
    "e",
    "W",
    "B",
    "E",
    "0",
    "^",
    "$"
]);
const Bt = new Set([
    "h",
    "l",
    " ",
    rt
]);
const dn = new Set([
    "f",
    "F",
    "t",
    "T"
]);
const pn = {
    i: "inner",
    a: "around"
};
function er(l) {
    return l in pn;
}
const tr = new Set([
    "w",
    "W",
    '"',
    "'",
    "`",
    "(",
    ")",
    "b",
    "[",
    "]",
    "{",
    "}",
    "B",
    "<",
    ">"
]);
const io = 10000;
function ao() {
    return {
        mode: "INSERT",
        insertedText: ""
    };
}
function lo() {
    return {
        lastFind: null,
        register: "",
        registerIsLinewise: false
    };
}
function gt(l, h, C) {
    let x = h;
    for(let T = 0; T < C; T++){
        let O = Qs(l, x);
        if (O.equals(x)) {
            break;
        }
        x = O;
    }
    return x;
}
function Qs(l, h) {
    switch(l){
        case "h":
            if (h.offset === h.startOfLogicalLine().offset) {
                return h;
            }
            return h.left();
        case "l":
            if (h.offset === h.endOfLogicalLine().offset) {
                return h;
            }
            return h.right();
        case " ":
            return h.right();
        case rt:
            return h.left();
        case "j":
            return h.downLogicalLine();
        case "k":
            return h.upLogicalLine();
        case "gj":
            return h.down();
        case "gk":
            return h.up();
        case "w":
            return h.nextVimWord();
        case "b":
            return h.prevVimWord();
        case "e":
            return h.endOfVimWord();
        case "W":
            return h.nextWORD();
        case "B":
            return h.prevWORD();
        case "E":
            return h.endOfWORD();
        case "0":
            return h.startOfLogicalLine();
        case "^":
            return h.firstNonBlankInLogicalLine();
        case "$":
            return h.lastCharInLogicalLine();
        case "G":
            return h.startOfLastLine();
        default:
            return h;
    }
}
function nr(motion) {
    return "eE$".includes(motion);
}
function co(motion) {
    return "jkG".includes(motion) || motion === "gg";
}
const Zs = {
    "(": [
        "(",
        ")"
    ],
    ")": [
        "(",
        ")"
    ],
    b: [
        "(",
        ")"
    ],
    "[": [
        "[",
        "]"
    ],
    "]": [
        "[",
        "]"
    ],
    "{": [
        "{",
        "}"
    ],
    "}": [
        "{",
        "}"
    ],
    B: [
        "{",
        "}"
    ],
    "<": [
        "<",
        ">"
    ],
    ">": [
        "<",
        ">"
    ],
    '"': [
        '"',
        '"'
    ],
    "'": [
        "'",
        "'"
    ],
    "`": [
        "`",
        "`"
    ]
};
function mn(text, offset, C, x) {
    if (C === "w") {
        return fo(text, offset, x, fje);
    }
    if (C === "W") {
        return fo(text, offset, x, (O)=>!BXe(O));
    }
    let T = Zs[C];
    if (T) {
        let [O, I] = T;
        if (O === I) {
            return ei(text, offset, O, x);
        }
        return ti(text, offset, O, I, x);
    }
    return null;
}
function fo(text, offset, C, x) {
    let T = [];
    for (let { segment, index } of ra().segment(text)){
        T.push({
            segment,
            index
        });
    }
    if (T.length === 0) {
        return null;
    }
    let O = T.length - 1;
    for(let B = 0; B < T.length; B++){
        let z = T[B];
        let ye = B + 1 < T.length ? T[B + 1].index : text.length;
        if (offset >= z.index && offset < ye) {
            O = B;
            break;
        }
    }
    let I = (B)=>T[B]?.segment ?? "";
    let M = (B)=>{
        if (B < T.length) {
            return T[B].index;
        }
        return text.length;
    };
    let U = (B)=>BXe(I(B));
    let F = (B)=>x(I(B));
    let K = (B)=>jXe(I(B));
    let j = O;
    let G = O;
    if (F(O)) {
        while(j > 0 && F(j - 1)){
            j--;
        }
        while(G < T.length && F(G)){
            G++;
        }
    } else if (U(O)) {
        while(j > 0 && U(j - 1)){
            j--;
        }
        while(G < T.length && U(G)){
            G++;
        }
        return {
            start: M(j),
            end: M(G)
        };
    } else if (K(O)) {
        while(j > 0 && K(j - 1)){
            j--;
        }
        while(G < T.length && K(G)){
            G++;
        }
    }
    if (!C) {
        if (G < T.length && U(G)) {
            while(G < T.length && U(G)){
                G++;
            }
        } else if (j > 0 && U(j - 1)) {
            while(j > 0 && U(j - 1)){
                j--;
            }
        }
    }
    return {
        start: M(j),
        end: M(G)
    };
}
function ei(text, offset, C, x) {
    let T = text.lastIndexOf(`
`, offset - 1) + 1;
    let O = text.indexOf(`
`, offset);
    let I = O === -1 ? text.length : O;
    let M = text.slice(T, I);
    let U = offset - T;
    let F = [];
    for(let K = 0; K < M.length; K++){
        if (M[K] === C) {
            F.push(K);
        }
    }
    for(let K = 0; K < F.length - 1; K += 2){
        let j = F[K];
        let G = F[K + 1];
        if (j <= U && U <= G) {
            if (x) {
                return {
                    start: T + j + 1,
                    end: T + G
                };
            }
            return {
                start: T + j,
                end: T + G + 1
            };
        }
    }
    return null;
}
function ti(text, offset, C, x, T) {
    let O = 0;
    let I = -1;
    for(let U = offset; U >= 0; U--){
        if (text[U] === x && U !== offset) {
            O++;
        } else if (text[U] === C) {
            if (O === 0) {
                I = U;
                break;
            }
            O--;
        }
    }
    if (I === -1) {
        return null;
    }
    O = 0;
    let end = -1;
    for(let U = I + 1; U < text.length; U++){
        if (text[U] === C) {
            O++;
        } else if (text[U] === x) {
            if (O === 0) {
                end = U;
                break;
            }
            O--;
        }
    }
    if (end === -1) {
        return null;
    }
    if (T) {
        return {
            start: I + 1,
            end
        };
    }
    return {
        start: I,
        end: end + 1
    };
}
function St(l, motion, C, x) {
    let T = gt(motion, x.cursor, C);
    if (co(motion)) {
        let M = qe(x.text, x.cursor.offset);
        let U = qe(x.text, T.offset);
        if (U !== M) {
            let F = kt(x.text, T.offset);
            let K = x.text.indexOf(`
`, F);
            let j = K === -1 ? x.text.length : K;
            let G = jt(x.text, F, j, Wt(x.cursor, x.wantedColumn));
            let B = G === j && j > F && L9(x.cursor, j) === j ? x.cursor.measuredText.prevOffset(j) : G;
            let z = motion === "k" ? Tn(x.cursor, B, F) : Math.min(x.cursor.offset, T.offset);
            In(l, M, U, x, z);
            st(x, {
                type: "operator",
                op: l,
                motion,
                count: C
            });
        }
        return;
    }
    if (T.equals(x.cursor) && !nr(motion)) {
        let M = (motion === "w" || motion === "W") && C > 0;
        if (motion === "0" || motion === "^" || M || Bt.has(motion)) {
            if (l === "yank") {
                x.setRegister("", false);
            } else if (l === "change") {
                x.enterInsert(x.cursor.offset);
            }
            st(x, {
                type: "operator",
                op: l,
                motion,
                count: C
            });
        }
        return;
    }
    let O = ni(x.cursor, T, motion, l, C);
    if (O.from === O.to && !(O.linewise && motion === " ")) {
        if (l === "change" || l === "yank") {
            x.setRegister("", false);
        }
        if (l === "change") {
            x.enterInsert(O.from);
            st(x, {
                type: "operator",
                op: l,
                motion,
                count: C
            });
        }
        return;
    }
    let offset = x.cursor.offset;
    On(l, O.from, O.to, x, O.linewise);
    if (l === "yank" && O.linewise) {
        x.setOffset(offset);
    }
    st(x, {
        type: "operator",
        op: l,
        motion,
        count: C
    });
}
function gn(l, find, C, count, T) {
    let O = T.cursor.findCharacter(C, find, count);
    if (O === null) {
        return;
    }
    let I = new bi(T.cursor.measuredText, O);
    let M = ri(T.cursor, I, find);
    On(l, M.from, M.to, T);
    T.setLastFind(find, C);
    st(T, {
        type: "operatorFind",
        op: l,
        find,
        char: C,
        count
    });
}
function hn(l, scope, objType, count, T) {
    let O = mn(T.text, T.cursor.offset, objType, scope === "inner");
    if (!O) {
        return;
    }
    On(l, O.start, O.end, T);
    let { start } = O;
    let M = scope === "inner" && count === 1 && start > 0 && "([{<".includes(T.text[start - 1] ?? " ") && T.text[start] === `
`;
    if (l === "yank" && M) {
        T.setOffset(start + 1);
    }
    st(T, {
        type: "operatorTextObj",
        op: l,
        objType,
        scope,
        count
    });
}
function wt(l, h, C) {
    if (h < 1) {
        return;
    }
    let x = qe(C.text, C.cursor.offset);
    if (h > 1 && !C.cursor.text.includes(`
`, C.cursor.offset)) {
        return;
    }
    let { offset } = C.cursor;
    let O = C.text[offset] === `
` ? C.cursor.placeholderEndingAt(offset) : null;
    let I = O !== null && zkt(C.text.slice(O.start, O.end));
    In(l, x, x + h - 1, C, I ? C.cursor.startOfLogicalLine().offset : offset);
    st(C, {
        type: "operator",
        op: l,
        motion: l[0],
        count: h
    });
}
function bn(l, h) {
    let offset = h.cursor.offset;
    if (offset >= h.text.length) {
        return;
    }
    let x = mo(h, l);
    if (x === offset) {
        return;
    }
    let T = h.text.slice(offset, x);
    let O = h.text.slice(0, offset) + h.text.slice(x);
    h.setRegister(T, false);
    h.setText(O);
    h.setOffset(cee(O, offset));
    h.recordChange({
        type: "x",
        count: l
    });
}
function yn(l, h) {
    let offset = h.cursor.offset;
    let x = mo(h, l);
    if (x > offset) {
        h.setRegister(h.text.slice(offset, x), false);
        h.setText(h.text.slice(0, offset) + h.text.slice(x));
    }
    h.enterInsert(offset);
    h.recordChange({
        type: "substitute",
        count: l
    });
}
function vn(l, count, C) {
    let offset = C.cursor.offset;
    let C_text = C.text;
    let O = offset;
    for(let I = 0; I < count; I++){
        if (O >= C_text.length || C_text[O] === `
`) {
            return;
        }
        O += KSe(C_text.slice(O)).length || 1;
    }
    C.setText(C_text.slice(0, offset) + l.repeat(count) + C_text.slice(O));
    C.setOffset(offset + l.length * (count - 1));
    C.recordChange({
        type: "replace",
        char: l,
        count
    });
}
function xn(l, h) {
    let columns = h.cursor.measuredText.columns;
    let h_text = h.text;
    let offset = h.cursor.offset;
    let O = 0;
    while(offset < h_text.length && h_text[offset] !== `
` && O < l){
        let M = KSe(h_text.slice(offset));
        let U = M.length;
        let F = (M === M.toUpperCase() ? M.toLowerCase() : M.toUpperCase()).normalize("NFC");
        h_text = h_text.slice(0, offset) + F + h_text.slice(offset + U);
        offset += F.length;
        O++;
    }
    if (O === 0) {
        return;
    }
    let I = bi.fromText(h_text, columns);
    h.setText(h_text);
    h.setOffset(L9(I, offset));
    h.recordChange({
        type: "toggleCase",
        count: l
    });
}
function or(l, h) {
    let C = h.text.split(`
`);
    let x = qe(h.cursor.text, h.cursor.offset);
    if (x >= C.length - 1) {
        if (l >= 3) {
            h.setOffset(kt(h.cursor.text, h.cursor.offset));
            h.recordChange({
                type: "join",
                count: 2
            });
        }
        return;
    }
    let T = Math.min(Math.max(l, 2) - 1, C.length - x - 1);
    po(C, x, T, h);
}
function po(l, h, C, x) {
    let T = l[h];
    let T_length = T.length;
    let I = T;
    for(let F = 1; F <= C; F++){
        T_length = T.length;
        let K = l[h + F].replace(/^[ \t\r]+/, "");
        if (K.length > 0 && T.length > 0 && !K.startsWith(")") && !/[ \t]$/.test(I)) {
            T += " ";
        }
        T += K;
        I = K;
    }
    let M = [
        ...l.slice(0, h),
        T,
        ...l.slice(h + C + 1)
    ];
    let U = M.join(`
`);
    x.setText(U);
    x.setOffset(cee(U, ht(M, h) + T_length));
    x.recordChange({
        type: "join",
        count: C + 1
    });
}
function Ht(after, h, C) {
    let x = C.getRegister();
    if (!x) {
        return;
    }
    C.recordChange({
        type: "paste",
        after,
        count: h
    });
    let T = C.getRegisterIsLinewise();
    let O = T && x.endsWith(`
`) ? x.slice(0, -1) : x;
    if (T) {
        let I = C.text;
        let M = I.split(`
`);
        let U = qe(C.cursor.text, C.cursor.offset);
        let F = after ? U + 1 : U;
        let K = O.split(`
`);
        let j = [];
        for(let me = 0; me < h; me++){
            j.push(...K);
        }
        let G = [
            ...M.slice(0, F),
            ...j,
            ...M.slice(F)
        ];
        let B = G.join(`
`);
        let z = ht(G, F);
        let ye = bi.fromText(K[0] ?? "", C.cursor.measuredText.columns);
        let Te = Vn(ye);
        C.setText(B, {
            previous: {
                value: I,
                cursorOffset: z
            }
        });
        C.setOffset(z + (ye.placeholderStartingAt(Te) ? 0 : Te));
    } else {
        let I = O.repeat(h);
        let M = C.cursor.offset;
        let U = C.text[M] === `
` && (M === 0 || C.text[M - 1] === `
`);
        let F = after && M < C.text.length && !U ? C.cursor.measuredText.nextOffset(M) : M;
        let K = C.text.slice(0, F) + I + C.text.slice(F);
        let j = I.includes(`
`) ? cee(K, F) : F + I.length - (D1(I).length || 1);
        C.setText(K, {
            previous: {
                value: C.text,
                cursorOffset: F
            }
        });
        C.setOffset(j);
    }
}
function Cn(dir, count, C) {
    let T = C.text.split(`
`);
    let O = qe(C.cursor.text, C.cursor.offset);
    if (count > 1 && O === T.length - 1) {
        return;
    }
    let I = Math.min(count, T.length - O);
    sr(T, O, O + I - 1, dir);
    let M = T.join(`
`);
    let U = zt(T[O] ?? "");
    C.setText(M);
    C.setOffset(ht(T, O) + U);
    C.recordChange({
        type: "indent",
        dir,
        count
    });
}
function $t(direction, h) {
    let h_text = h.text;
    let x = h_text.split(`
`);
    let T = qe(h.cursor.text, h.cursor.offset);
    let O = direction === "below" ? T + 1 : T;
    let I = [
        ...x.slice(0, O),
        "",
        ...x.slice(O)
    ];
    let M = I.join(`
`);
    let U = ht(I, O);
    h.setText(M, {
        previous: {
            value: h_text,
            cursorOffset: U
        }
    });
    h.enterInsert(U);
    h.recordChange({
        type: "openLine",
        direction
    });
}
function st(l, h) {
    if (h.op !== "yank") {
        l.recordChange(h);
    }
}
function mo(l, h) {
    let l_cursor = l.cursor;
    for(let x = 0; x < h && !l_cursor.isAtEnd(); x++){
        if (l.text[l_cursor.offset] === `
`) {
            break;
        }
        l_cursor = l_cursor.right();
    }
    return l_cursor.offset;
}
function ht(l, h) {
    return l.slice(0, h).join(`
`).length + (h > 0 ? 1 : 0);
}
function ni(cursor, h, motion, x, T) {
    let O = Math.min(cursor.offset, h.offset);
    let I = Math.max(cursor.offset, h.offset);
    let M = false;
    let U = x === "change" && (motion === "w" || motion === "W");
    let F = cursor.text[cursor.offset];
    let K = (F === " " || F === "\t" || F === `
`) && cursor.snapOutOfPlaceholder(cursor.offset, "start") === cursor.offset;
    if (U && K) {
        let j = cursor;
        for(let G = 0; G < T - 1; G++){
            let B = motion === "w" ? j.nextVimWord() : j.nextWORD();
            if (B.offset === j.offset) {
                break;
            }
            j = B;
        }
        I = Math.min(I, j.endOfLogicalLine().offset);
        if (I > O && cursor.text[I - 1] === `
`) {
            I -= 1;
            let G = cursor.startOfLogicalLine().offset;
            if (/^[ \t]*$/.test(cursor.text.slice(G, O))) {
                O = G;
                M = true;
            }
        }
    } else if (U) {
        let j = cursor;
        for(let Te = 0; Te < T - 1; Te++){
            j = motion === "w" ? j.nextVimWord() : j.nextWORD();
        }
        let G = motion === "w" ? j.endOfVimWord() : j.endOfWORD();
        let B = cursor.measuredText.nextOffset(j.offset);
        let z = motion === "w" ? j.nextVimWord() : j.nextWORD();
        if ((B >= cursor.text.length || BXe(cursor.text[B] ?? "") || z.offset === B) && !BXe(cursor.text[cursor.offset] ?? "") && !BXe(cursor.text[j.offset] ?? "")) {
            G = j;
        }
        I = cursor.measuredText.nextOffset(G.offset);
    } else if (nr(motion) && cursor.offset <= h.offset && cursor.text[I] !== `
`) {
        I = cursor.measuredText.nextOffset(I);
    }
    if (motion === " " && I > O && cursor.text[I - 1] === `
`) {
        let j = kt(cursor.text, O);
        M = /^[ \t]*$/.test(cursor.text.slice(j, O));
        O = M ? j : O;
        I = M && x !== "change" ? I : I - 1;
    }
    O = cursor.snapOutOfPlaceholder(O, "start");
    I = cursor.snapOutOfPlaceholder(I, "end");
    return {
        from: O,
        to: I,
        linewise: M
    };
}
function ri(cursor, h, C) {
    let x = Math.max(cursor.offset, h.offset);
    let T = cursor.snapOutOfPlaceholder(Math.min(cursor.offset, h.offset), "start");
    let O = cursor.snapOutOfPlaceholder(cursor.measuredText.nextOffset(x), "end");
    return {
        from: T,
        to: O
    };
}
function On(l, h, C, x, T = false) {
    let O = x.text.slice(h, C);
    if (T && !O.endsWith(`
`)) {
        O = O + `
`;
    }
    x.setRegister(O, T);
    if (l === "yank") {
        x.setOffset(L9(x.cursor, h));
    } else if (l === "delete") {
        let I = x.text.slice(0, h) + x.text.slice(C);
        x.setText(I);
        x.setOffset(cee(I, h));
    } else if (l === "change") {
        let I = x.text.slice(0, h) + x.text.slice(C);
        x.setText(I);
        x.enterInsert(h);
    }
}
function cee(l, h) {
    if (l[h] === `
` && h > 0 && l[h - 1] !== `
`) {
        return h - (D1(l.slice(0, h)).length || 1);
    }
    if (h >= l.length && !l.endsWith(`
`)) {
        return Math.max(0, l.length - (D1(l).length || 1));
    }
    return h;
}
function Tn(cursor, h, C) {
    let x = rr(cursor, h);
    let T = h;
    while(x && x.start > C){
        T = cursor.measuredText.prevOffset(x.start);
        x = rr(cursor, T);
    }
    if (!x) {
        return T;
    }
    let x_end = x.end;
    while(x = rr(cursor, x_end)){
        x_end = x.end;
    }
    return x_end;
}
function rr(cursor, h) {
    let C = cursor.snapOutOfPlaceholder(h, "start");
    return cursor.placeholderStartingAt(C);
}
function L9(l, h, C = l.text) {
    let x = cee(C, h);
    if (l.snapOutOfPlaceholder(x, "start") === x) {
        return x;
    }
    return h;
}
function kt(l, h) {
    if (h === 0) {
        return 0;
    }
    let C = l.lastIndexOf(`
`, h - 1);
    if (C === -1) {
        return 0;
    }
    return C + 1;
}
function Rn(l, h) {
    if (h) {
        let C = Lt(l, `
`);
        if (l.endsWith(`
`)) {
            return C;
        }
        return C + 1;
    }
    return _Z(l);
}
function Gt(l, span, linewise) {
    let l_text = l.text;
    if (linewise) {
        let I = kt(l_text, l.cursor.offset);
        let M = I;
        for(let U = 0; U < span; U++){
            let F = l_text.indexOf(`
`, M);
            if (F === -1) {
                M = l_text.length;
                break;
            }
            M = F + 1;
        }
        return {
            from: I,
            to: M
        };
    }
    let offset = l.cursor.offset;
    let O = offset;
    for(let I = 0; I < span && O < l_text.length; I++){
        O = l.cursor.measuredText.nextOffset(O);
    }
    return {
        from: offset,
        to: O
    };
}
function Sn(anchor, h, C) {
    let x = Math.min(anchor, h.cursor.offset);
    let T = Math.max(anchor, h.cursor.offset);
    if (!C) {
        return {
            from: x,
            to: h.cursor.measuredText.nextOffset(T)
        };
    }
    let h_text = h.text;
    let I = kt(h_text, x);
    let M = h_text.indexOf(`
`, T);
    let U = M === -1 ? h_text.length : M + 1;
    return {
        from: I,
        to: U
    };
}
function sr(l, h, C, dir) {
    for(let O = h; O <= C; O++){
        let I = l[O] ?? "";
        if (I === "") {
            continue;
        }
        if (dir === ">") {
            l[O] = `  ${I}`;
        } else if (I.startsWith("  ")) {
            l[O] = I.slice(2);
        } else if (I.startsWith("\t")) {
            l[O] = I.slice(1);
        } else {
            let M = 0;
            while(M < I.length && M < 2 && /\s/.test(I[M])){
                M++;
            }
            l[O] = I.slice(M);
        }
    }
}
function go(anchor, h, C) {
    let x = Math.min(anchor, h.cursor.offset);
    let T = Math.max(anchor, h.cursor.offset);
    let h_text = h.text;
    let I = Lt(h_text.slice(0, x), `
`);
    let M = Lt(h_text.slice(x, T), `
`) + 1;
    let U = h_text.split(`
`);
    if (I >= U.length - 1) {
        h.setOffset(C ? kt(h.cursor.text, x) : cee(h.cursor.text, x));
        h.recordChange({
            type: "join",
            count: 2
        });
        return;
    }
    let F = Math.max(1, Math.min(M - 1, U.length - I - 1));
    po(U, I, F, h);
}
function ho(count, h) {
    let C = h.text.split(`
`);
    if (qe(h.cursor.text, h.cursor.offset) < C.length - 1) {
        or(count, h);
    }
}
function bo(dir, count, anchor, x) {
    let T = Math.min(anchor, x.cursor.offset);
    let O = Math.max(anchor, x.cursor.offset);
    let x_text = x.text;
    let M = Lt(x_text.slice(0, T), `
`);
    let U = M + Lt(x_text.slice(T, O), `
`);
    let F = x_text.split(`
`);
    for(let G = 0; G < count; G++){
        sr(F, M, U, dir);
    }
    let K = F.join(`
`);
    let j = zt(F[M] ?? "");
    x.setText(K);
    x.setOffset(ht(F, M) + j);
    x.recordChange({
        type: "visualIndent",
        dir,
        count,
        lines: U - M + 1
    });
}
function yo(dir, count, lines, x) {
    let x_text = x.text;
    let O = x_text.split(`
`);
    let I = Lt(x_text.slice(0, x.cursor.offset), `
`);
    let M = Math.min(I + lines - 1, O.length - 1);
    for(let K = 0; K < count; K++){
        sr(O, I, M, dir);
    }
    let U = O.join(`
`);
    let F = zt(O[I] ?? "");
    x.setText(U);
    x.setOffset(ht(O, I) + F);
}
function vo(l, from, C, x, T, O = false) {
    if (T && l === "change") {
        let I = x.text.slice(from, C);
        let M = I;
        if (!M.endsWith(`
`)) {
            M += `
`;
        }
        x.setRegister(M, true);
        let U = x.text.slice(0, from);
        let F = x.text.slice(C);
        let K = F !== "" || I.endsWith(`
`) && !O;
        x.setText(U + (K ? `
` : "") + F);
        x.enterInsert(from);
        return;
    }
    if (T && l === "delete") {
        let I = x.text.slice(from, C);
        if (!I.endsWith(`
`)) {
            I += `
`;
        }
        x.setRegister(I, true);
        let M = from;
        if (C === x.text.length && from > 0 && x.text[from - 1] === `
`) {
            M -= 1;
        }
        let U = C < x.text.length;
        let F = x.text.slice(0, M) + x.text.slice(C);
        x.setText(F);
        let K = U ? from : kt(F, F.length);
        let j = F.indexOf(`
`, K);
        let G = j === -1 ? F.length : j;
        let B = bi.fromText(F.slice(K, G), x.cursor.measuredText.columns + 1);
        let z = Lo(B, U);
        let ye = !U && B.placeholderStartingAt(z) !== null;
        x.setOffset(ye ? cee(F, F.length) : K + z);
        return;
    }
    On(l, from, C, x, T);
}
function xo(l, anchor, C, x) {
    let { from, to } = Sn(anchor, C, x);
    let I = Rn(C.text.slice(from, to), x);
    let M = x && C.text.endsWith(`
`) && Math.max(anchor, C.cursor.offset) >= C.text.length;
    vo(l, from, to, C, x, M);
    st(C, {
        type: "visualOp",
        op: l,
        span: I,
        linewise: x
    });
}
function Oo(l, span, linewise, x) {
    let { from, to } = Gt(x, span, linewise);
    if (from === to && !(linewise && x.text.length > 0)) {
        return;
    }
    vo(l, from, to, x, linewise);
}
function To(span, linewise, C) {
    let { from, to } = Gt(C, span, linewise);
    if (from === to && !linewise) {
        return;
    }
    let O = C.text.slice(from, to);
    let I = O;
    if (linewise && !I.endsWith(`
`)) {
        I += `
`;
    }
    C.setRegister(I, linewise);
    let M = C.text.slice(to);
    let U = linewise && (M !== "" || O.endsWith(`
`)) ? `
` + M : M;
    C.setText(C.text.slice(0, from) + U);
    C.enterInsert(from);
}
function Ro(char, from, C, x) {
    let T = x.text.slice(from, C);
    let O = "";
    for (let { segment } of ra().segment(T)){
        O += segment === `
` ? `
` : char;
    }
    let I = x.text.slice(0, from) + O + x.text.slice(C);
    let x_cursor = x.cursor;
    x.setText(I);
    x.setOffset(L9(x_cursor, from, I));
}
function So(char, anchor, C, x) {
    let { from, to } = Sn(anchor, C, x);
    let I = Rn(C.text.slice(from, to), x);
    Ro(char, from, to, C);
    C.recordChange({
        type: "visualReplace",
        char,
        span: I,
        linewise: x
    });
}
function wo(char, span, linewise, x) {
    let { from, to } = Gt(x, span, linewise);
    if (from === to) {
        return;
    }
    Ro(char, from, to, x);
}
function ko(caseOp, from, C, x) {
    let T = x.text.slice(from, C);
    let O = "";
    for (let { segment } of ra().segment(T)){
        if (caseOp === "upper") {
            O += segment.toUpperCase();
        } else if (caseOp === "lower") {
            O += segment.toLowerCase();
        } else {
            O += segment === segment.toUpperCase() ? segment.toLowerCase() : segment.toUpperCase();
        }
    }
    let I = x.text.slice(0, from) + O + x.text.slice(C);
    let x_cursor = x.cursor;
    x.setText(I);
    x.setOffset(L9(x_cursor, from, I));
}
function Io(caseOp, anchor, C, x) {
    let { from, to } = Sn(anchor, C, x);
    let I = Rn(C.text.slice(from, to), x);
    ko(caseOp, from, to, C);
    C.recordChange({
        type: "visualCase",
        caseOp,
        span: I,
        linewise: x
    });
}
function Vo(caseOp, span, linewise, x) {
    let { from, to } = Gt(x, span, linewise);
    if (from === to) {
        return;
    }
    ko(caseOp, from, to, x);
}
function _o(anchor, h, C) {
    let x = h.getRegister();
    if (!x) {
        return;
    }
    let { from, to } = Sn(anchor, h, C);
    let I = Rn(h.text.slice(from, to), C);
    let content = Ao(x, from, to, h, C);
    h.recordChange({
        type: "visualPaste",
        content,
        span: I,
        linewise: C
    });
}
function Mo(content, span, linewise, x) {
    let { from, to } = Gt(x, span, linewise);
    if (from === to && !linewise) {
        return;
    }
    Ao(content, from, to, x, linewise);
}
function Ao(l, from, C, x, T) {
    let O = x.text.slice(from, C).endsWith(`
`);
    let I = l.endsWith(`
`) ? l.slice(0, -1) : l;
    if (O && !I.endsWith(`
`)) {
        I += `
`;
    }
    let M = x.text.slice(from, C);
    if (T && !M.endsWith(`
`)) {
        M += `
`;
    }
    x.setRegister(M, T);
    let U = x.text.slice(0, from) + I + x.text.slice(C);
    x.setText(U);
    if (T) {
        let F = bi.fromText(U, x.cursor.measuredText.columns, from);
        let K = Vn(F);
        x.setOffset(F.placeholderStartingAt(K) ? from : K);
    } else if (I.endsWith(`
`)) {
        x.setOffset(from);
    } else {
        let F = D1(I);
        x.setOffset(Math.max(from, from + I.length - (F.length || 1)));
    }
    return I;
}
function wn(l, h, C) {
    let x = h === 0 ? C.cursor.startOfLastLine() : C.cursor.goToLine(h);
    In(l, qe(C.text, C.cursor.offset), qe(C.text, x.offset), C, Math.min(C.cursor.offset, Vn(x)));
    st(C, {
        type: "operator",
        op: l,
        motion: "G",
        count: h
    });
}
function kn(l, count, C) {
    let x = count === 1 ? C.cursor.startOfFirstLine() : C.cursor.goToLine(count);
    In(l, qe(C.text, C.cursor.offset), qe(C.text, x.offset), C, Math.min(C.cursor.offset, Vn(x)));
    st(C, {
        type: "operator",
        op: l,
        motion: "gg",
        count
    });
}
function In(l, h, C, x, T) {
    let O = x.text.split(`
`);
    let I = Math.min(h, C);
    let M = Math.min(Math.max(h, C) + 1, O.length);
    let U = O.slice(0, I);
    let F = O.slice(M);
    let K = ht(O, I);
    let j = O.slice(I, M).map((G)=>G + `
`).join("");
    x.setRegister(j, true);
    if (l === "yank") {
        let G = cee(x.text, T);
        x.setOffset(T === x.text.length ? No(x.cursor, G) : x.cursor.snapOutOfPlaceholder(G, "start"));
    } else if (l === "delete") {
        let G = [
            ...U,
            ...F
        ];
        x.setText(G.join(`
`));
        let B = Math.max(0, Math.min(I, G.length - 1));
        let z = bi.fromText(G[B] ?? "", x.cursor.measuredText.columns + 1);
        x.setOffset(ht(G, B) + Lo(z, F.length > 0));
    } else if (l === "change") {
        x.setText([
            ...U,
            "",
            ...F
        ].join(`
`));
        x.enterInsert(K);
    }
}
function qe(text, offset) {
    return Lt(text.slice(0, offset), `
`);
}
function zt(l) {
    let h = 0;
    for (let { segment, index } of ra().segment(l)){
        h = index;
        if (segment !== " " && segment !== "\t") {
            break;
        }
    }
    return h;
}
function Lo(l, h) {
    let C = zt(l.text);
    if (l.placeholderStartingAt(C) === null) {
        return C;
    }
    if (C > 0 || h) {
        return 0;
    }
    let x = cee(l.text, l.text.length);
    return No(l, x);
}
function No(l, h) {
    let C = l.snapOutOfPlaceholder(h, "start");
    if (C === h) {
        return h;
    }
    let x = l.snapOutOfPlaceholder(h, "end");
    if (zkt(l.text.slice(C, x))) {
        return x;
    }
    return C;
}
function Vn(l) {
    let offset = l.startOfLogicalLine().offset;
    let offset_1 = l.endOfLogicalLine().offset;
    return offset + zt(l.text.slice(offset, offset_1));
}
const Po = 1000;
function oi(l) {
    let h = new Map;
    for (let [C, x] of Object.entries(l)){
        if (typeof x !== "string" || x.toLowerCase() !== "<esc>") {
            continue;
        }
        let T = C.normalize("NFC");
        if (!/^[^\p{C}\p{Z}]{2}$/u.test(T) || _Z(T) !== 2) {
            continue;
        }
        h.set(T, "<Esc>");
    }
    return h;
}
function FLt() {
    return oi(TP("vimInsertModeRemaps")[0] ?? {});
}
function ir(command, h, C) {
    switch(command.type){
        case "idle":
            return ii(h, C);
        case "count":
            return ai(command, h, C);
        case "operator":
            return ui(command, h, C);
        case "operatorCount":
            return li(command, h, C);
        case "operatorFind":
            return ci(command, h, C);
        case "operatorTextObj":
            return fi(command, h, C);
        case "find":
            return di(command, h, C);
        case "g":
            return pi(command, h, C);
        case "operatorG":
            return mi(command, h, C);
        case "replace":
            return gi(command, h, C);
        case "indent":
            return hi(command, h, C);
    }
}
const si = Object.assign(Object.create(null), {
    g: (l)=>({
            next: {
                type: "g",
                count: l
            }
        }),
    r: (l)=>({
            next: {
                type: "replace",
                count: l
            }
        }),
    ">": (l)=>({
            next: {
                type: "indent",
                dir: ">",
                count: l
            }
        }),
    "<": (l)=>({
            next: {
                type: "indent",
                dir: "<",
                count: l
            }
        }),
    "~": (l, h)=>({
            execute: ()=>xn(l, h)
        }),
    x: (l, h)=>({
            execute: ()=>bn(l, h),
            wanted: null
        }),
    s: (l, h)=>({
            execute: ()=>yn(l, h)
        }),
    S: (l, h)=>({
            execute: ()=>wt("change", l, h)
        }),
    J: (l, h)=>({
            execute: ()=>or(l, h)
        }),
    p: (l, h)=>({
            execute: ()=>Ht(true, l, h),
            wanted: h.getRegister() === "" ? undefined : null
        }),
    P: (l, h)=>({
            execute: ()=>Ht(false, l, h),
            wanted: h.getRegister() === "" ? undefined : null
        }),
    D: (l, h)=>({
            execute: ()=>St("delete", "$", 1, h),
            wanted: null
        }),
    C: (l, h)=>({
            execute: ()=>St("change", "$", 1, h)
        }),
    Y: (l, h)=>({
            execute: ()=>wt("yank", l, h)
        }),
    ";": (l, h)=>({
            execute: ()=>Mn(false, l, h)
        }),
    ",": (l, h)=>({
            execute: ()=>Mn(true, l, h)
        }),
    u: (l, h)=>({
            execute: ()=>h.onUndo?.(),
            wanted: null
        }),
    i: (l, h)=>({
            execute: ()=>_n("i", h)
        }),
    I: (l, h)=>({
            execute: ()=>_n("I", h)
        }),
    a: (l, h)=>({
            execute: ()=>_n("a", h)
        }),
    A: (l, h)=>({
            execute: ()=>_n("A", h)
        }),
    o: (l, h)=>({
            execute: ()=>$t("below", h)
        }),
    O: (l, h)=>({
            execute: ()=>$t("above", h)
        })
});
function Uo(l, h, countTyped, x) {
    if (Zn(l)) {
        return {
            next: {
                type: "operator",
                op: cn[l],
                count: h,
                countTyped
            }
        };
    }
    if (l === "G") {
        return {
            execute: ()=>{
                x.setOffset(countTyped ? x.cursor.goToLine(h).offset : x.text.lastIndexOf(`
`) + 1);
            }
        };
    }
    if (l === "j" || l === "k") {
        let { offset, column } = Wo(l === "j", h, x);
        let { text } = x.cursor;
        if (offset === null) {
            return {
                next: {
                    type: "idle"
                },
                wanted: {
                    column,
                    offset: x.cursor.offset,
                    text
                }
            };
        }
        let M = L9(x.cursor, offset);
        return {
            execute: ()=>x.setOffset(M),
            wanted: {
                column,
                offset: M,
                text
            }
        };
    }
    if (l === "$") {
        let T = x.cursor.lastCharInLogicalLine().offset;
        return {
            execute: ()=>x.setOffset(T),
            wanted: {
                column: Infinity,
                offset: T,
                text: x.cursor.text
            }
        };
    }
    if (fn.has(l)) {
        let T = l === " " || l === rt ? Si(l, x.cursor, h) : gt(l, x.cursor, h);
        let O = L9(T, T.offset);
        if (O === x.cursor.offset && Bt.has(l)) {
            return {
                next: {
                    type: "idle"
                }
            };
        }
        return {
            execute: ()=>x.setOffset(O),
            wanted: null
        };
    }
    if (dn.has(l)) {
        return {
            next: {
                type: "find",
                find: l,
                count: h
            }
        };
    }
    if (l === ".") {
        return {
            execute: ()=>x.onDotRepeat?.(countTyped ? h : undefined)
        };
    }
    return si[l]?.(h, x) ?? null;
}
function Do(l, h, C, x, T) {
    if (er(x)) {
        return {
            next: {
                type: "operatorTextObj",
                op: l,
                count: h,
                scope: pn[x]
            }
        };
    }
    if (dn.has(x)) {
        return {
            next: {
                type: "operatorFind",
                op: l,
                count: h,
                find: x
            }
        };
    }
    if (fn.has(x)) {
        return {
            execute: ()=>St(l, x, h, T),
            wanted: x === "j" || x === "k" ? undefined : null
        };
    }
    if (x === "G") {
        let O = C ? h : 0;
        return {
            execute: ()=>wn(l, O, T)
        };
    }
    if (x === "g") {
        return {
            next: {
                type: "operatorG",
                op: l,
                count: h
            }
        };
    }
    return null;
}
function ii(l, h) {
    if (/[1-9]/.test(l)) {
        return {
            next: {
                type: "count",
                count: parseInt(l, 10)
            }
        };
    }
    if (l === "0") {
        return {
            execute: ()=>h.setOffset(h.cursor.startOfLogicalLine().offset)
        };
    }
    let C = Uo(l, 1, false, h);
    if (C) {
        return C;
    }
    return {};
}
function ai(command, h, C) {
    if (/[0-9]/.test(h)) {
        return {
            next: {
                type: "count",
                count: ar(command.count, h)
            }
        };
    }
    let x = Uo(h, command.count, true, C);
    if (x) {
        return x;
    }
    return {
        next: {
            type: "idle"
        }
    };
}
function ui(command, h, C) {
    if (h === command.op[0]) {
        return {
            execute: ()=>wt(command.op, command.count, C)
        };
    }
    if (/[1-9]/.test(h)) {
        return {
            next: {
                type: "operatorCount",
                op: command.op,
                count: command.count,
                motionCount: parseInt(h, 10)
            }
        };
    }
    let x = command.countTyped ?? false;
    let T = Do(command.op, command.count, x, h, C);
    if (T) {
        return T;
    }
    return {
        next: {
            type: "idle"
        }
    };
}
function li(command, h, C) {
    if (/[0-9]/.test(h)) {
        return {
            next: {
                ...command,
                motionCount: ar(command.motionCount, h)
            }
        };
    }
    let x = command.count * command.motionCount;
    if (h === command.op[0]) {
        return {
            execute: ()=>wt(command.op, x, C)
        };
    }
    let T = Do(command.op, x, true, h, C);
    if (T) {
        return T;
    }
    return {
        next: {
            type: "idle"
        }
    };
}
function ci(command, h, C) {
    return {
        execute: ()=>{
            if (h !== "") {
                C.setLastFind(command.find, h);
            }
            gn(command.op, command.find, h, command.count, C);
        }
    };
}
function fi(command, h, C) {
    if (tr.has(h)) {
        return {
            execute: ()=>hn(command.op, command.scope, h, command.count, C)
        };
    }
    return {
        next: {
            type: "idle"
        }
    };
}
function di(command, h, C) {
    return {
        execute: ()=>{
            if (h !== "") {
                C.setLastFind(command.find, h);
            }
            let x = C.cursor.findCharacter(h, command.find, command.count);
            if (x !== null) {
                C.setOffset(x);
            }
        }
    };
}
function pi(command, h, C) {
    if (h === "j" || h === "k") {
        let { offset, column } = jo(`g${h}`, command.count, C);
        let O = L9(C.cursor, offset);
        return {
            execute: ()=>C.setOffset(O),
            wanted: column === null ? null : {
                column,
                offset: O,
                text: C.cursor.text
            }
        };
    }
    if (h === "g") {
        if (command.count > 1) {
            return {
                execute: ()=>{
                    let x = C.text.split(`
`);
                    let T = Math.min(command.count - 1, x.length - 1);
                    let O = 0;
                    for(let I = 0; I < T; I++){
                        O += (x[I]?.length ?? 0) + 1;
                    }
                    C.setOffset(O);
                }
            };
        }
        return {
            execute: ()=>C.setOffset(C.cursor.startOfFirstLine().offset)
        };
    }
    return {
        next: {
            type: "idle"
        }
    };
}
function mi(command, h, C) {
    if (h === "j" || h === "k") {
        return {
            execute: ()=>St(command.op, `g${h}`, command.count, C)
        };
    }
    if (h === "g") {
        return {
            execute: ()=>kn(command.op, command.count, C)
        };
    }
    return {
        next: {
            type: "idle"
        }
    };
}
function gi(command, h, C) {
    if (h === "") {
        return {
            next: {
                type: "idle"
            }
        };
    }
    return {
        execute: ()=>vn(h, command.count, C)
    };
}
function hi(command, h, C) {
    if (h === command.dir) {
        return {
            execute: ()=>Cn(command.dir, command.count, C)
        };
    }
    return {
        next: {
            type: "idle"
        }
    };
}
function Mn(l, h, C) {
    let x = C.getLastFind();
    if (!x) {
        return;
    }
    let x_type = x.type;
    if (l) {
        x_type = ({
            f: "F",
            F: "f",
            t: "T",
            T: "t"
        })[x_type];
    }
    let O = C.cursor.findCharacter(x.char, x_type, h);
    if (O !== null) {
        C.setOffset(O);
    }
}
function Ko(command, h, C) {
    switch(command.type){
        case "idle":
            return vi(h, C);
        case "count":
            return xi(command, h, C);
        case "find":
            return Oi(command, h, C);
        case "g":
            return Ti(command, h, C);
        case "replace":
            if (h === "") {
                return {
                    next: {
                        type: "idle"
                    }
                };
            }
            return {
                exit: "replace",
                char: h
            };
        case "textObject":
            return Ri(command, h, C);
    }
}
const yi = Object.assign(Object.create(null), {
    x: ()=>({
            exit: "operator",
            op: "delete"
        }),
    s: ()=>({
            exit: "operator",
            op: "change"
        }),
    X: ()=>({
            exit: "operator",
            op: "delete",
            forceLinewise: true
        }),
    D: ()=>({
            exit: "operator",
            op: "delete",
            forceLinewise: true
        }),
    C: ()=>({
            exit: "operator",
            op: "change",
            forceLinewise: true
        }),
    S: ()=>({
            exit: "operator",
            op: "change",
            forceLinewise: true
        }),
    R: ()=>({
            exit: "operator",
            op: "change",
            forceLinewise: true
        }),
    Y: ()=>({
            exit: "operator",
            op: "yank",
            forceLinewise: true
        }),
    r: ()=>({
            next: {
                type: "replace"
            }
        }),
    "~": ()=>({
            exit: "case",
            op: "toggle"
        }),
    u: ()=>({
            exit: "case",
            op: "lower"
        }),
    U: ()=>({
            exit: "case",
            op: "upper"
        }),
    p: ()=>({
            exit: "paste"
        }),
    P: ()=>({
            exit: "paste"
        }),
    ">": (l)=>({
            exit: "indent",
            dir: ">",
            count: l
        }),
    "<": (l)=>({
            exit: "indent",
            dir: "<",
            count: l
        }),
    v: ()=>({
            exit: "toggleKind",
            key: "v"
        }),
    V: ()=>({
            exit: "toggleKind",
            key: "V"
        }),
    o: ()=>({
            exit: "swap"
        }),
    J: ()=>({
            exit: "join"
        }),
    $: (l, h)=>{
        let offset = h.cursor.endOfLogicalLine().offset;
        return {
            next: {
                type: "idle"
            },
            move: ()=>h.setOffset(offset),
            wanted: {
                column: Infinity,
                offset,
                text: h.cursor.text
            }
        };
    },
    g: (l)=>({
            next: {
                type: "g",
                count: l
            }
        }),
    ";": (l, h)=>({
            next: {
                type: "idle"
            },
            move: ()=>Mn(false, l, h)
        }),
    ",": (l, h)=>({
            next: {
                type: "idle"
            },
            move: ()=>Mn(true, l, h)
        })
});
function Fo(l, h, C, x) {
    if (Zn(l)) {
        return {
            exit: "operator",
            op: cn[l]
        };
    }
    if (l === "G") {
        return {
            next: {
                type: "idle"
            },
            move: ()=>{
                x.setOffset(C ? x.cursor.goToLine(h).offset : x.text.lastIndexOf(`
`) + 1);
            }
        };
    }
    let T = yi[l];
    if (T) {
        return T(h, x);
    }
    if (er(l)) {
        return {
            next: {
                type: "textObject",
                scope: pn[l],
                count: h
            }
        };
    }
    if (l === "j" || l === "k") {
        let O = Wo(l === "j", h, x);
        let I = O.offset ?? x.cursor.offset;
        return {
            next: {
                type: "idle"
            },
            move: ()=>x.setOffset(I),
            wanted: {
                column: O.column,
                offset: I,
                text: x.cursor.text
            }
        };
    }
    if (fn.has(l)) {
        let { offset } = gt(l, x.cursor, h);
        if (offset === x.cursor.offset && Bt.has(l)) {
            return {
                next: {
                    type: "idle"
                }
            };
        }
        return {
            next: {
                type: "idle"
            },
            move: ()=>x.setOffset(offset)
        };
    }
    if (dn.has(l)) {
        return {
            next: {
                type: "find",
                find: l,
                count: h
            }
        };
    }
    return null;
}
function vi(l, h) {
    if (/[1-9]/.test(l)) {
        return {
            next: {
                type: "count",
                count: parseInt(l, 10)
            }
        };
    }
    if (l === "0") {
        return {
            next: {
                type: "idle"
            },
            move: ()=>h.setOffset(h.cursor.startOfLogicalLine().offset)
        };
    }
    return Fo(l, 1, false, h) ?? {
        next: {
            type: "idle"
        }
    };
}
function xi(command, h, C) {
    if (/[0-9]/.test(h)) {
        return {
            next: {
                type: "count",
                count: ar(command.count, h)
            }
        };
    }
    return Fo(h, command.count, true, C) ?? {
        next: {
            type: "idle"
        }
    };
}
function Oi(command, h, C) {
    return {
        next: {
            type: "idle"
        },
        move: ()=>{
            if (h !== "") {
                C.setLastFind(command.find, h);
            }
            let x = C.cursor.findCharacter(h, command.find, command.count);
            if (x !== null) {
                C.setOffset(x);
            }
        }
    };
}
function Ti(command, h, C) {
    if (h === "j" || h === "k") {
        let { offset, column } = jo(`g${h}`, command.count, C);
        return {
            next: {
                type: "idle"
            },
            move: ()=>C.setOffset(offset),
            wanted: column === null ? null : {
                column,
                offset,
                text: C.cursor.text
            }
        };
    }
    if (h === "g") {
        return {
            next: {
                type: "idle"
            },
            move: ()=>{
                let x = command.count > 1 ? C.cursor.goToLine(command.count) : C.cursor.startOfFirstLine();
                C.setOffset(x.offset);
            }
        };
    }
    return {
        next: {
            type: "idle"
        }
    };
}
function Ri(command, h, C) {
    if (tr.has(h)) {
        let x = mn(C.text, C.cursor.offset, h, command.scope === "inner");
        if (x) {
            return {
                exit: "selectRange",
                start: x.start,
                end: x.end
            };
        }
    }
    return {
        next: {
            type: "idle"
        }
    };
}
function ar(l, h) {
    return Math.min(l * 10 + parseInt(h, 10), io);
}
function ur(l, h) {
    switch(l){
        case "i":
            return h.offset;
        case "I":
            return h.firstNonBlankInLogicalLine().offset;
        case "a":
            if (h.isAtEnd() || h.text[h.offset] === `
`) {
                return h.offset;
            }
            return h.right().offset;
        case "A":
            return h.endOfLogicalLine().offset;
    }
}
function _n(l, h) {
    h.enterInsert(ur(l, h.cursor));
    h.recordChange({
        type: "insertCommand",
        key: l
    });
}
function Si(l, cursor, C) {
    let x = cursor;
    for(let T = 0; T < C; T++){
        let O = gt(l, x, 1);
        let { text, offset } = O;
        if (text[offset] === `
` && offset > 0 && text[offset - 1] !== `
`) {
            O = l === rt ? new bi(O.measuredText, L9(O, offset)) : gt(l, O, 1);
        }
        if (O.equals(x)) {
            break;
        }
        x = O;
    }
    return x;
}
function Wo(l, h, C) {
    let { cursor } = C;
    let cursor_text = cursor.text;
    let offset = cursor.startOfLogicalLine().offset;
    let I = Wt(cursor, C.wantedColumn);
    let M = offset;
    for(let j = 0; j < h; j++){
        if (l) {
            let G = cursor_text.indexOf(`
`, M);
            if (G === -1) {
                break;
            }
            M = G + 1;
        } else if (M === 0) {
            break;
        } else {
            M = M === 1 ? 0 : cursor_text.lastIndexOf(`
`, M - 2) + 1;
        }
    }
    if (M === offset) {
        return {
            offset: null,
            column: I
        };
    }
    let U = cursor_text.indexOf(`
`, M);
    let F = U === -1 ? cursor_text.length : U;
    let K = jt(cursor_text, M, F, I);
    return {
        offset: Tn(cursor, K, M),
        column: I
    };
}
function jo(l, count, C) {
    let { cursor } = C;
    let T = gt(l, cursor, count);
    let O = cursor.measuredText.getWrappedLines();
    let I = O[cursor.getPosition().line];
    let M = O[T.getPosition().line];
    let U = I?.startOffset === 0 || I?.isPrecededByNewline;
    let F = M?.startOffset === 0 || M?.isPrecededByNewline;
    if (T.equals(cursor) || !U || !F || !M) {
        return {
            offset: T.offset,
            column: null
        };
    }
    let K = Wt(cursor, C.wantedColumn);
    let j = M.startOffset + M.text.length;
    let G = jt(cursor.text, M.startOffset, j, K);
    let B = Tn(cursor, G, M.startOffset);
    let z = !M.endsWithNewline && j < cursor.text.length;
    return {
        offset: B === j && z ? cursor.measuredText.prevOffset(j) : B,
        column: K
    };
}
const pr = new Set([
    "backspace",
    "delete",
    "tab",
    "home",
    "end",
    "pageup",
    "pagedown",
    "insert",
    "clear",
    "enter",
    "center",
    "undefined",
    "mouse",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "f10",
    "f11",
    "f12"
]);
function lr(l, h) {
    return (h || l.name === "") && !pr.has(l.name);
}
function cr(l) {
    if (!l) {
        return false;
    }
    switch(l.type){
        case "insertCommand":
        case "openLine":
        case "substitute":
            return true;
        case "operator":
        case "operatorFind":
        case "operatorTextObj":
        case "visualOp":
            return l.op === "change";
        default:
            return false;
    }
}
function wi(l) {
    switch(l.type){
        case "x":
        case "substitute":
        case "paste":
        case "operatorTextObj":
            return true;
        case "operator":
            return ![
                "h",
                "l",
                " ",
                rt,
                "gj",
                "gk"
            ].includes(l.motion);
        default:
            return false;
    }
}
function fr(l, h) {
    return {
        ...l,
        setText: (C, x)=>{
            h();
            l.setText(C, x);
        },
        setOffset: (C)=>{
            h();
            l.setOffset(C);
        },
        enterInsert: (C)=>{
            h();
            l.enterInsert(C);
        },
        setRegister: (C, x)=>{
            h();
            l.setRegister(C, x);
        }
    };
}
function Bo(l, h) {
    let C = L9(l, l.offset);
    if (C !== l.offset) {
        h.setOffset(C);
    }
    return C;
}
function dr(l, h, wanted) {
    if (l.wanted !== undefined) {
        return l.wanted ?? undefined;
    }
    if (h) {
        return undefined;
    }
    return wanted;
}
function mr({ value, onChange, columns, disableEscapeDoublePress, onModeChange, onUndo, onOpenHistorySearch, onToggleHelp, onHistoryUp, onHistoryDown, inputFilter, getInputMode }) {
    let B = R(ao());
    let [mode, ye] = y("INSERT");
    let [visualAnchor, me] = y(null);
    let Q = R(null);
    let te = R(ki());
    let be = R(null);
    let ie = R(null);
    let ue = R(null);
    function recordInsertedText(_, W) {
        let B_current = B.current;
        if (B_current.mode === "INSERT" && !W.ctrl && !W.meta && lr(W, [
            ...W.key
        ].length === 1)) {
            B.current = {
                mode: "INSERT",
                insertedText: B_current.insertedText + _.normalize("NFC")
            };
        }
    }
    let recordInsert = le((_, W = "")=>{
        let B_current = B.current;
        if (B_current.mode !== "INSERT") {
            return;
        }
        let D = W !== "" && B_current.insertedText.endsWith(W) ? B_current.insertedText.slice(0, -W.length) : B_current.insertedText;
        B.current = {
            mode: "INSERT",
            insertedText: D + _
        };
    }, []);
    function ee(_, W, offsetAfter, recorded) {
        for (let X of _.keys()){
            if (X.startsWith(W)) {
                Q.current = {
                    char: W,
                    at: Date.now(),
                    offsetAfter,
                    recorded
                };
                return;
            }
        }
    }
    let cancelPendingRemap = le(()=>{
        Q.current = null;
    }, []);
    let forgetColumn = le(()=>{
        let B_current = B.current;
        if (B_current.mode !== "INSERT") {
            B.current = {
                ...B_current,
                wanted: undefined
            };
        }
    }, []);
    let oe = le((_, W)=>{
        if (W !== undefined) {
            _.setOffset(W);
        }
        Q.current = null;
        ie.current = null;
        ue.current = null;
        B.current = {
            mode: "INSERT",
            insertedText: ""
        };
        ye("INSERT");
        me(null);
        onModeChange?.("INSERT");
    }, [
        onModeChange
    ]);
    let J = le((_, W)=>{
        let B_current = B.current;
        if (B_current.mode === "INSERT") {
            let D = be.current;
            let X = D === ie.current;
            if (D?.type === "visualOp" && D.op === "change" && X) {
                be.current = {
                    type: "visualChange",
                    span: D.span,
                    linewise: D.linewise,
                    text: B_current.insertedText ?? ""
                };
            } else if (cr(D) && D.type !== "visualOp" && X && (B_current.insertedText || (W?.buffer ? W.buffer.text : value.normalize("NFC")) === ue.current)) {
                be.current = {
                    ...D,
                    insertedText: B_current.insertedText
                };
            } else if (B_current.insertedText || W?.claimEmptyInsert && !cr(D)) {
                be.current = {
                    type: "insert",
                    text: B_current.insertedText
                };
            }
            let fe = W?.buffer ? W.buffer.offset : _.offset;
            let Ee = W?.buffer ? W.buffer.text : value.normalize("NFC");
            if (fe > 0 && Ee[fe - 1] !== `
`) {
                let _e = fe > Ee.length ? 1 : D1(Ee.slice(0, fe)).length;
                _.setOffset(fe - _e);
            } else if (W?.buffer) {
                _.setOffset(fe);
            }
        }
        B.current = {
            mode: "NORMAL",
            command: {
                type: "idle"
            }
        };
        ye("NORMAL");
        me(null);
        onModeChange?.("NORMAL");
    }, [
        onModeChange,
        value
    ]);
    let ne = le((_, kind, wanted)=>{
        B.current = {
            mode: "VISUAL",
            kind,
            anchor: _,
            command: {
                type: "idle"
            },
            wanted
        };
        let D = kind === "line" ? "VISUAL LINE" : "VISUAL";
        ye(D);
        me(_);
        onModeChange?.(D);
    }, [
        onModeChange
    ]);
    function Le(cursor, W, L = false) {
        let D;
        return {
            cursor,
            text: cursor.text,
            setText: (X, fe)=>{
                D = X;
                onChange(X, fe);
            },
            setOffset: (X)=>W.setOffset(X),
            enterInsert: (X)=>{
                oe(W, X);
                ue.current = D ?? cursor.text;
            },
            getRegister: ()=>te.current.register,
            getRegisterIsLinewise: ()=>te.current.registerIsLinewise,
            setRegister: (X, fe)=>{
                te.current.register = X;
                te.current.registerIsLinewise = fe;
            },
            getLastFind: ()=>te.current.lastFind,
            setLastFind: (type, char)=>{
                te.current.lastFind = {
                    type,
                    char
                };
            },
            recordChange: L ? ()=>{} : (X)=>{
                be.current = X;
                if (cr(X) && B.current.mode === "INSERT") {
                    ie.current = X;
                }
            }
        };
    }
    function Fe(_, W, L) {
        let __text = _.text;
        return {
            ..._,
            setText: (X, fe)=>{
                let previous = {
                    value: __text,
                    cursorOffset: _.cursor.offset
                };
                __text = X;
                _.setText(X, fe ?? {
                    previous
                });
            },
            enterInsert: (X)=>{
                let fe = __text.slice(0, X) + W + __text.slice(X);
                let previous = {
                    value: __text,
                    cursorOffset: X
                };
                let _e = ge(fe, L, previous) ? W.slice(1) : W;
                _.setText(fe, {
                    previous
                });
                let he = __text.slice(0, X);
                let de = (he + _e).normalize("NFC");
                let ve = de.startsWith(he) ? D1(de.slice(he.length)) : "";
                let Ie = ve && !/^[\p{Mn}\p{Me}]/u.test(ve) ? ve : D1(de);
                let Ae = de.endsWith(`
`) ? de.length : de.length - Ie.length;
                let Be = X > 0 && he[X - 1] !== `
` ? X - D1(he).length : X;
                _.setOffset(_e ? Ae : Be);
            }
        };
    }
    function ge(nextValue, W, L) {
        return getInputMode !== undefined && e1o({
            nextValue,
            value: L?.value ?? value,
            cursorOffset: L?.cursorOffset ?? W.offset,
            mode: getInputMode()
        });
    }
    function We(_, W, L, D) {
        if (_.type === "insertCommand") {
            if (_.insertedText === undefined) {
                return;
            }
            let X = ur(_.key, W);
            W = new bi(W.measuredText, X);
            _ = {
                type: "insert",
                text: _.insertedText
            };
        }
        if ("insertedText" in _ && _.insertedText !== undefined) {
            L = Fe(L, _.insertedText, D);
        }
        switch(_.type){
            case "insert":
                if (_.text) {
                    let X = W.insert(_.text);
                    let fe = ge(X.text, D);
                    L.setText(X.text);
                    let Ee = fe ? X.text.slice(1) : X.text;
                    let _e = X.offset - (fe ? 1 : 0);
                    L.setOffset(Ee[_e - 1] === `
` ? _e : _e - D1(Ee.slice(0, _e)).length);
                }
                break;
            case "x":
                bn(_.count, L);
                break;
            case "substitute":
                yn(_.count, L);
                break;
            case "replace":
                vn(_.char, _.count, L);
                break;
            case "toggleCase":
                xn(_.count, L);
                break;
            case "indent":
                Cn(_.dir, _.count, L);
                break;
            case "join":
                ho(_.count, L);
                break;
            case "openLine":
                $t(_.direction, L);
                break;
            case "operator":
                if (_.motion === _.op[0]) {
                    wt(_.op, _.count, L);
                } else if (_.motion === "gg") {
                    kn(_.op, _.count, L);
                } else if (_.motion === "G") {
                    wn(_.op, _.count, L);
                } else {
                    St(_.op, _.motion, _.count, L);
                }
                break;
            case "operatorFind":
                gn(_.op, _.find, _.char, _.count, L);
                break;
            case "operatorTextObj":
                hn(_.op, _.scope, _.objType, _.count, L);
                break;
            case "visualOp":
                Oo(_.op, _.span, _.linewise, L);
                break;
            case "visualReplace":
                wo(_.char, _.span, _.linewise, L);
                break;
            case "visualCase":
                Vo(_.caseOp, _.span, _.linewise, L);
                break;
            case "visualPaste":
                Mo(_.content, _.span, _.linewise, L);
                break;
            case "visualIndent":
                yo(_.dir, _.count, _.lines, L);
                break;
            case "visualChange":
                To(_.span, _.linewise, Fe(L, _.text, D));
                break;
            case "paste":
                Ht(_.after, _.count, L);
                break;
        }
    }
    function we(_) {
        let be_current = be.current;
        if (be_current && _ !== undefined && "count" in be_current && wi(be_current)) {
            return {
                ...be_current,
                count: _
            };
        }
        return be_current;
    }
    function je(_, W) {
        let L = we(W);
        if (!L) {
            return;
        }
        let D = bi.fromText(value, columns, _.offset);
        We(L, D, Le(D, _, true), _);
    }
    function pt(key, W) {
        let L = value.normalize("NFC");
        let W_offset = W.offset;
        let setText = (_e, he)=>{
            let de = he?.previous;
            if (!ge(_e, W, de)) {
                L = _e;
            } else if (_e.length !== (de?.value ?? value).length + 1) {
                L = _e.slice(1);
            }
            onChange(_e, he);
        };
        let fe = (_e)=>{
            let he = we(_e);
            if (!he) {
                return;
            }
            let de = bi.fromText(L, columns, W_offset);
            We(he, de, {
                ...Le(de, W, true),
                text: L,
                setText,
                setOffset: (ve)=>{
                    W_offset = ve;
                    W.setOffset(ve);
                },
                enterInsert: (ve)=>{
                    W_offset = ve;
                    oe(W, ve);
                }
            }, W);
        };
        let Ee = [
            ...key
        ];
        for(let _e = 0; _e < Ee.length; _e++){
            if (B.current.mode === "INSERT") {
                let pe = Ee.slice(_e).join("");
                let Ge = FLt();
                if (Ge.size > 0 && Ge.has(pe.normalize("NFC"))) {
                    g("vim_insert_remap");
                    J(W, {
                        buffer: {
                            text: L,
                            offset: W_offset
                        },
                        claimEmptyInsert: true
                    });
                    return;
                }
                let He = bi.fromText(L, columns, W_offset).insert(pe);
                let mt = ge(He.text, W);
                let ze = He.offset - (mt ? 1 : 0);
                onChange(He.text);
                W.setOffset(ze);
                B.current = {
                    mode: "INSERT",
                    insertedText: B.current.insertedText + pe
                };
                let Jr = mt ? pe.slice(1) : pe;
                let _t = D1(He.text.slice(0, He.offset));
                if (_t && Jr.endsWith(_t)) {
                    ee(Ge, _t, ze, true);
                }
                return;
            }
            let he = B.current;
            if (he.mode !== "NORMAL") {
                return;
            }
            let de = Ee[_e];
            if ((de === "v" || de === "V") && (he.command.type === "idle" || he.command.type === "count")) {
                ne(W_offset, de === "V" ? "line" : "char", he.wanted);
                return;
            }
            let ve = bi.fromText(L, columns, W_offset);
            let Ie = false;
            let Ae = {
                ...Le(ve, W, false),
                text: L,
                setText,
                setOffset: (pe)=>{
                    W_offset = pe;
                    W.setOffset(pe);
                },
                enterInsert: (pe)=>{
                    W_offset = pe;
                    oe(W, pe);
                },
                onDotRepeat: (pe)=>{
                    Ie ||= be.current !== null;
                    fe(pe);
                },
                wantedColumn: he.wanted
            };
            let Be = fr(Ae, ()=>{
                Ie = true;
            });
            let xe = ir(he.command, de, Be);
            if (xe.execute) {
                xe.execute();
            }
            if (B.current.mode === "NORMAL" && (xe.next || xe.execute || xe.wanted !== undefined)) {
                B.current = {
                    mode: "NORMAL",
                    command: xe.next ?? {
                        type: "idle"
                    },
                    wanted: dr(xe, Ie, he.wanted)
                };
            }
        }
    }
    function handleKeyDown(_, W) {
        let B_current = B.current;
        let D = bi.fromText(value, columns, W.offset);
        let X = ()=>inputFilter?.(_.key, _);
        if (!(_.name === "left" && !_.ctrl && !_.meta && !_.fn && !_.superKey && !_.shift)) {
            W.disarmLeftArrowConfirm?.();
        }
        let Q_current = Q.current;
        Q.current = null;
        if (_.ctrl || _.meta) {
            if (B_current.mode === "VISUAL") {
                X();
                J(W);
                _.preventDefault();
                return;
            }
            W.handleKeyDown(_);
            return;
        }
        if (_.name === "escape") {
            X();
            if (B_current.mode === "NORMAL") {
                B.current = {
                    mode: "NORMAL",
                    command: {
                        type: "idle"
                    },
                    wanted: B_current.wanted
                };
            } else if (B_current.mode === "VISUAL" && B_current.command.type !== "idle") {
                B.current = {
                    ...B_current,
                    command: {
                        type: "idle"
                    }
                };
            } else {
                if (B_current.mode === "VISUAL") {
                    Bo(D, W);
                }
                J(W);
            }
            if (!disableEscapeDoublePress) {
                _.preventDefault();
            }
            return;
        }
        if (_.name === "return" && B_current.mode !== "VISUAL") {
            W.handleKeyDown(_);
            return;
        }
        if (B_current.mode === "INSERT") {
            if (_.name === "backspace" || _.name === "delete") {
                if (B_current.insertedText.length > 0) {
                    B.current = {
                        mode: "INSERT",
                        insertedText: B_current.insertedText.slice(0, -(D1(B_current.insertedText).length || 1))
                    };
                }
            }
            let Ie = FLt();
            if (Ie.size > 0) {
                let Ae = _.key.normalize("NFC");
                let Be = [
                    ...Ae
                ].length;
                let xe = Be === 1;
                let pe = lr(_, xe);
                if (pe && Be <= 2 && Q_current && Ie.has(Q_current.char + KSe(Ae)) && Date.now() - Q_current.at <= Po && W.offset === Q_current.offsetAfter && D.text.startsWith(Q_current.char, D.offset - Q_current.char.length)) {
                    X();
                    if (Q_current.recorded && B_current.insertedText.endsWith(Q_current.char)) {
                        B.current = {
                            mode: "INSERT",
                            insertedText: B_current.insertedText.slice(0, -Q_current.char.length)
                        };
                    }
                    let mt = D.offset - Q_current.char.length;
                    let ze = D.text.slice(0, mt) + D.text.slice(D.offset);
                    onChange(ze);
                    g("vim_insert_remap");
                    J(W, {
                        buffer: {
                            text: ze,
                            offset: mt
                        },
                        claimEmptyInsert: true
                    });
                    _.preventDefault();
                    return;
                }
                if (pe && !xe && Ie.has(Ae)) {
                    X();
                    g("vim_insert_remap");
                    J(W, {
                        claimEmptyInsert: true
                    });
                    _.preventDefault();
                    return;
                }
                let He = pe ? D1(Ae) : "";
                if (He) {
                    ee(Ie, He, W.offset + Ae.length, lr(_, [
                        ..._.key
                    ].length === 1));
                }
            }
            W.handleKeyDown(_);
            return;
        }
        if (B_current.mode === "VISUAL") {
            let Ie = false;
            let Ae = fr({
                ...Le(D, W, false),
                onUndo,
                onDotRepeat: ()=>je(W),
                wantedColumn: B_current.wanted
            }, ()=>{
                Ie = true;
            });
            let Be = B_current.command.type === "idle" || B_current.command.type === "count";
            let xe = _.key;
            if (_.name === "left") {
                xe = Be ? "h" : "";
            } else if (_.name === "right") {
                xe = Be ? "l" : "";
            } else if (_.name === "up") {
                xe = Be ? "k" : "";
            } else if (_.name === "down") {
                xe = Be ? "j" : "";
            } else if (_.name === "return") {
                xe = Be ? "j" : `
`;
            } else if (_.name === "backspace") {
                xe = Be ? rt : "";
            } else if (_.name === "delete") {
                xe = Be && B_current.command.type !== "count" ? "x" : "";
            } else if (_.key === "" || pr.has(_.name)) {
                _.preventDefault();
                return;
            } else if ([
                ..._.key
            ].length > 1) {
                _.preventDefault();
                return;
            }
            X();
            let pe = Ko(B_current.command, xe, Ae);
            let Ge = B_current.kind === "line";
            if ("next" in pe) {
                pe.move?.();
                B.current = {
                    mode: "VISUAL",
                    kind: B_current.kind,
                    anchor: B_current.anchor,
                    command: pe.next,
                    wanted: dr(pe, Ie, B_current.wanted)
                };
            } else {
                switch(pe.exit){
                    case "operator":
                        xo(pe.op, B_current.anchor, Ae, Ge || pe.forceLinewise === true);
                        if (B.current.mode === "VISUAL") {
                            J(W);
                        }
                        break;
                    case "replace":
                        So(pe.char, B_current.anchor, Ae, Ge);
                        J(W);
                        break;
                    case "case":
                        Io(pe.op, B_current.anchor, Ae, Ge);
                        J(W);
                        break;
                    case "paste":
                        if (Ae.getRegister()) {
                            _o(B_current.anchor, Ae, Ge);
                            J(W);
                        } else {
                            B.current = {
                                ...B_current,
                                command: {
                                    type: "idle"
                                }
                            };
                        }
                        break;
                    case "join":
                        go(B_current.anchor, Ae, Ge);
                        J(W);
                        break;
                    case "indent":
                        bo(pe.dir, pe.count, B_current.anchor, Ae);
                        J(W);
                        break;
                    case "swap":
                        {
                            let He = D.offset;
                            W.setOffset(B_current.anchor);
                            B.current = {
                                mode: "VISUAL",
                                kind: B_current.kind,
                                anchor: He,
                                command: {
                                    type: "idle"
                                }
                            };
                            me(He);
                            break;
                        }
                    case "selectRange":
                        {
                            let He = pe.end > pe.start ? D.measuredText.prevOffset(pe.end) : pe.start;
                            W.setOffset(He);
                            B.current = {
                                mode: "VISUAL",
                                kind: B_current.kind,
                                anchor: pe.start,
                                command: {
                                    type: "idle"
                                }
                            };
                            me(pe.start);
                            break;
                        }
                    default:
                        {
                            let He = pe.key === "V" ? "line" : "char";
                            if (He === B_current.kind) {
                                let offset = Bo(D, W);
                                J(W);
                                let { wanted } = B_current;
                                if (wanted?.offset === D.offset && wanted.text === D.text) {
                                    B.current = {
                                        mode: "NORMAL",
                                        command: {
                                            type: "idle"
                                        },
                                        wanted: {
                                            ...wanted,
                                            offset
                                        }
                                    };
                                }
                            } else {
                                ne(B_current.anchor, He, B_current.wanted);
                            }
                            break;
                        }
                }
            }
            _.preventDefault();
            return;
        }
        if (B_current.mode !== "NORMAL") {
            return;
        }
        if (B_current.command.type === "idle" && !_.shift && (_.name === "up" || _.name === "down" || _.name === "left" && D.text === "")) {
            W.handleKeyDown(_);
            return;
        }
        if (B_current.command.type === "idle" && _.key === "?" && onToggleHelp) {
            onToggleHelp();
            _.preventDefault();
            return;
        }
        X();
        if (B_current.command.type === "idle" && _.key === "/" && onOpenHistorySearch) {
            onOpenHistorySearch();
            _.preventDefault();
            return;
        }
        if (B_current.command.type === "idle") {
            if (_.key === "k") {
                let Ie = D.text.indexOf(`
`);
                if (Ie === -1 || D.offset <= Ie) {
                    onHistoryUp?.();
                    _.preventDefault();
                    return;
                }
            }
            if (_.key === "j") {
                let Ie = D.text.lastIndexOf(`
`);
                if (Ie === -1 || D.offset > Ie) {
                    onHistoryDown?.();
                    _.preventDefault();
                    return;
                }
            }
        }
        let Ee = false;
        let _e = fr({
            ...Le(D, W, false),
            onUndo,
            onDotRepeat: (Ie)=>{
                Ee ||= be.current !== null;
                je(W, Ie);
            },
            wantedColumn: B_current.wanted
        }, ()=>{
            Ee = true;
        });
        let he = B_current.command.type === "idle" || B_current.command.type === "count" || B_current.command.type === "operator" || B_current.command.type === "operatorCount";
        let __key = _.key;
        if (_.name === "left") {
            __key = "h";
        } else if (_.name === "right") {
            __key = "l";
        } else if (_.name === "up") {
            __key = "k";
        } else if (_.name === "down") {
            __key = "j";
        } else if (he && _.name === "backspace") {
            __key = rt;
        } else if (he && B_current.command.type !== "count" && _.name === "delete") {
            __key = "x";
        } else if (_.key === "" || pr.has(_.name)) {
            return;
        } else if ([
            ..._.key
        ].length > 1) {
            pt(_.key, W);
            _.preventDefault();
            return;
        }
        if ((__key === "v" || __key === "V") && (B_current.command.type === "idle" || B_current.command.type === "count")) {
            ne(D.offset, __key === "V" ? "line" : "char", B_current.wanted);
            return;
        }
        let ve = ir(B_current.command, __key, _e);
        if (ve.execute) {
            ve.execute();
        }
        if (B.current.mode === "NORMAL" && (ve.next || ve.execute || ve.wanted !== undefined)) {
            B.current = {
                mode: "NORMAL",
                command: ve.next ?? {
                    type: "idle"
                },
                wanted: dr(ve, Ee, B_current.wanted)
            };
        }
        _.preventDefault();
    }
    let setMode = le((_, W)=>{
        Q.current = null;
        ie.current = null;
        if (_ === "INSERT") {
            B.current = {
                mode: "INSERT",
                insertedText: ""
            };
            me(null);
        } else if (_ === "NORMAL") {
            B.current = {
                mode: "NORMAL",
                command: {
                    type: "idle"
                }
            };
            me(null);
        } else {
            let kind = _ === "VISUAL LINE" ? "line" : "char";
            let D = W.offset;
            B.current = {
                mode: "VISUAL",
                kind,
                anchor: D,
                command: {
                    type: "idle"
                }
            };
            me(D);
        }
        ye(_);
        onModeChange?.(_);
    }, [
        onModeChange
    ]);
    return {
        handleKeyDown,
        mode,
        setMode,
        visualAnchor,
        recordInsertedText,
        recordInsert,
        cancelPendingRemap,
        forgetColumn
    };
}
function YDo(l) {
    let { inputFilter } = l;
    let C = R(null);
    let x = mr({
        value: l.value,
        onChange: (O, I)=>{
            if (O === "" && l.value !== "") {
                C.current?.();
            }
            l.onChange(O, I);
        },
        columns: l.columns,
        disableEscapeDoublePress: l.disableEscapeDoublePress,
        onModeChange: l.onModeChange,
        onUndo: l.onUndo && (()=>{
            C.current?.();
            l.onUndo?.();
        }),
        onOpenHistorySearch: l.onOpenHistorySearch,
        onToggleHelp: l.onToggleHelp,
        onHistoryUp: l.onHistoryUp && (()=>{
            C.current?.();
            l.onHistoryUp?.();
        }),
        onHistoryDown: l.onHistoryDown && (()=>{
            C.current?.();
            l.onHistoryDown?.();
        }),
        inputFilter,
        getInputMode: l.getInputMode
    });
    let T = H$t({
        ...l,
        selectionAnchor: x.visualAnchor,
        selectionLinewise: x.mode === "VISUAL LINE",
        inputFilter: (O, I)=>{
            let M = inputFilter ? inputFilter(O, I) : O;
            if (O === `
` && (I.name === "return" || I.name === "enter" || I.ctrl && I.name === "j")) {
                let U = I.name === "return" && l.multiline === true && l.disableBackslashReturn !== true;
                x.recordInsert(M, U ? "\\" : "");
            } else {
                x.recordInsertedText(M, I);
            }
            return M;
        }
    });
    C.current = T.noteKeystrokeEmptied ?? null;
    return {
        ...T,
        handleKeyDown: (O)=>x.handleKeyDown(O, T),
        recordInsert: x.recordInsert,
        mode: x.mode,
        setMode: (O)=>x.setMode(O, T),
        cancelPendingRemap: x.cancelPendingRemap,
        forgetColumn: x.forgetColumn
    };
}
function ki() {
    let l = bIo();
    if (l) {
        return l;
    }
    let h = lo();
    SIo(h);
    return h;
}
function Ii(l) {
    if (l.ctrl && (l.key === "k" || l.key === "u" || l.key === "w")) {
        return true;
    }
    if ((l.meta || l.ctrl) && l.key === "backspace") {
        return true;
    }
    if (l.meta && !l.ctrl && l.key.toLowerCase() === "d") {
        return true;
    }
    return false;
}
function Vi(l) {
    return (l.ctrl || l.meta) && l.key === "y";
}
const _i = new Set([
    "pageup",
    "pagedown",
    "insert",
    "wheelup",
    "wheeldown",
    "mouse",
    "clear",
    "enter",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "f10",
    "f11",
    "f12"
]);
function yy({ isActive, onExit, onCancel, onExitUp, onExitDown, columns, passthroughCtrlKeys = [], initialQuery = "", buffer, backspaceExitsOnEmpty = true, multiline = false, onSpaceOnEmpty, onTabOnEmpty, honorEditorMode = false }) {
    let z = gje();
    let { columns: columns_1 } = ke();
    let Te = columns ?? columns_1;
    let [me, Q] = y(initialQuery);
    let [te, be] = y(initialQuery.length);
    let ie = Re(buffer, (H)=>H.query);
    let ue = Re(buffer, (H)=>H.cursorOffset);
    let Ve = ie ?? me;
    let re = ue ?? te;
    let ee = R(me);
    let Me = R(te);
    let queryRef = Z(()=>{
        if (buffer) {
            return {
                get current () {
                    return buffer.getSnapshot().query;
                },
                set current (H){
                    buffer.setQueryAndCursor(H, buffer.getSnapshot().cursorOffset);
                }
            };
        }
        return ee;
    }, [
        buffer
    ]);
    let cursorOffsetRef = Z(()=>{
        if (buffer) {
            return {
                get current () {
                    return buffer.getSnapshot().cursorOffset;
                },
                set current (H){
                    buffer.setQueryAndCursor(buffer.getSnapshot().query, H);
                }
            };
        }
        return Me;
    }, [
        buffer
    ]);
    let onChange = le((H)=>{
        if (buffer) {
            buffer.setQueryAndCursor(H, buffer.getSnapshot().cursorOffset);
            return;
        }
        ee.current = H;
        Q(H);
    }, [
        buffer
    ]);
    let ne = le((H)=>{
        if (buffer) {
            buffer.setQueryAndCursor(buffer.getSnapshot().query, H);
            return;
        }
        Me.current = H;
        be(H);
    }, [
        buffer
    ]);
    let setQuery = le((H)=>{
        onChange(H);
        ne(H.length);
    }, [
        onChange,
        ne
    ]);
    let willInsertNewline = le((H)=>{
        if (!isActive || !multiline || H.name !== "return") {
            return false;
        }
        let oe_current = cursorOffsetRef.current;
        return oe_current > 0 && queryRef.current[oe_current - 1] === "\\" || H.shift || H.meta;
    }, [
        isActive,
        multiline
    ]);
    let ge = (H)=>{
        if (!isActive) {
            return;
        }
        let Ce_current = queryRef.current;
        let oe_current = cursorOffsetRef.current;
        let L = bi.fromText(Ce_current, Te, oe_current);
        if (!Ii(H) && !Vi(H)) {
            z.dispatch({
                type: "interrupt"
            });
        }
        if (H.ctrl && passthroughCtrlKeys.includes(H.key.toLowerCase())) {
            return;
        }
        if (H.name === "return") {
            H.preventDefault();
            if (willInsertNewline(H)) {
                if (Ce_current[oe_current - 1] === "\\") {
                    onChange(Ce_current.slice(0, oe_current - 1) + `
` + Ce_current.slice(oe_current));
                    return;
                }
                onChange(Ce_current.slice(0, oe_current) + `
` + Ce_current.slice(oe_current));
                ne(oe_current + 1);
                return;
            }
            onExit();
            return;
        }
        if (multiline && (H.name === "enter" || H.ctrl && !H.shift && !H.meta && H.name === "j")) {
            H.preventDefault();
            let D = L.insert(`
`);
            onChange(D.text);
            ne(D.offset);
            return;
        }
        if (H.name === "down") {
            H.preventDefault();
            if (multiline) {
                let D = L.down();
                if (!D.equals(L)) {
                    ne(D.offset);
                    return;
                }
            }
            if (onExitDown) {
                onExitDown();
            } else if (!multiline) {
                onExit();
            }
            return;
        }
        if (H.name === "up") {
            H.preventDefault();
            if (multiline) {
                let D = L.up();
                if (!D.equals(L)) {
                    ne(D.offset);
                    return;
                }
            }
            if (onExitUp) {
                onExitUp();
            }
            return;
        }
        if (H.name === "escape") {
            H.preventDefault();
            if (onCancel) {
                onCancel();
            } else if (Ce_current.length > 0) {
                onChange("");
                ne(0);
            } else {
                onExit();
            }
            return;
        }
        if (H.name === "backspace") {
            H.preventDefault();
            if (H.meta || H.ctrl) {
                let { cursor, killed } = L.backwardKillWord();
                z.dispatch({
                    type: "kill",
                    text: killed,
                    direction: "prepend"
                });
                onChange(cursor.text);
                ne(cursor.offset);
                return;
            }
            if (Ce_current.length === 0) {
                if (backspaceExitsOnEmpty) {
                    (onCancel ?? onExit)();
                }
                return;
            }
            let D = L.backspace();
            onChange(D.text);
            ne(D.offset);
            return;
        }
        if (H.name === "delete") {
            H.preventDefault();
            let D = L.del();
            onChange(D.text);
            ne(D.offset);
            return;
        }
        if (H.name === "left" && (H.ctrl || H.meta || H.fn)) {
            H.preventDefault();
            ne(L.backwardWord().offset);
            return;
        }
        if (H.name === "right" && (H.ctrl || H.meta || H.fn)) {
            H.preventDefault();
            ne(L.forwardWord().offset);
            return;
        }
        if (H.name === "left") {
            H.preventDefault();
            let D = L.left();
            ne(D.offset);
            return;
        }
        if (H.name === "right") {
            H.preventDefault();
            let D = L.right();
            ne(D.offset);
            return;
        }
        if (H.name === "home") {
            H.preventDefault();
            ne(L.startOfLine().offset);
            return;
        }
        if (H.name === "end") {
            H.preventDefault();
            ne(L.endOfLine().offset);
            return;
        }
        if (H.ctrl) {
            H.preventDefault();
            switch(H.key.toLowerCase()){
                case "a":
                    ne(L.startOfLogicalLine().offset);
                    return;
                case "e":
                    ne(L.endOfLogicalLine().offset);
                    return;
                case "b":
                    ne(L.left().offset);
                    return;
                case "f":
                    ne(L.right().offset);
                    return;
                case "d":
                    {
                        if (Ce_current.length === 0) {
                            (onCancel ?? onExit)();
                            return;
                        }
                        let D = L.del();
                        onChange(D.text);
                        ne(D.offset);
                        return;
                    }
                case "h":
                    {
                        if (Ce_current.length === 0) {
                            if (backspaceExitsOnEmpty) {
                                (onCancel ?? onExit)();
                            }
                            return;
                        }
                        let D = L.backspace();
                        onChange(D.text);
                        ne(D.offset);
                        return;
                    }
                case "k":
                    {
                        let { cursor, killed } = L.deleteToLineEnd();
                        z.dispatch({
                            type: "kill",
                            text: killed,
                            direction: "append"
                        });
                        onChange(cursor.text);
                        ne(cursor.offset);
                        return;
                    }
                case "u":
                    {
                        let { cursor, killed } = L.deleteToLineStart();
                        z.dispatch({
                            type: "kill",
                            text: killed,
                            direction: "prepend"
                        });
                        onChange(cursor.text);
                        ne(cursor.offset);
                        return;
                    }
                case "w":
                    {
                        let { cursor, killed } = L.deleteWORDBefore();
                        z.dispatch({
                            type: "kill",
                            text: killed,
                            direction: "prepend"
                        });
                        onChange(cursor.text);
                        ne(cursor.offset);
                        return;
                    }
                case "y":
                    {
                        let D = KXe(z.state);
                        if (D.length > 0) {
                            let start = L.offset;
                            let fe = L.insert(D);
                            z.dispatch({
                                type: "yank",
                                start,
                                length: D.length
                            });
                            onChange(fe.text);
                            ne(fe.offset);
                        }
                        return;
                    }
                case "g":
                case "c":
                    if (onCancel) {
                        onCancel();
                        return;
                    }
            }
            return;
        }
        if (H.meta) {
            H.preventDefault();
            switch(H.key.toLowerCase()){
                case "b":
                    ne(L.backwardWord().offset);
                    return;
                case "f":
                    ne(L.forwardWord().offset);
                    return;
                case "d":
                    {
                        let { cursor, killed } = L.killWord();
                        z.dispatch({
                            type: "kill",
                            text: killed,
                            direction: "append"
                        });
                        onChange(cursor.text);
                        ne(cursor.offset);
                        return;
                    }
                case "y":
                    {
                        let D = $dn(z.state);
                        if (D) {
                            let { text, start, length } = D;
                            z.dispatch({
                                type: "yankPop"
                            });
                            let _e = Ce_current.slice(0, start);
                            let he = Ce_current.slice(start + length);
                            let de = _e + text + he;
                            let ve = start + text.length;
                            z.dispatch({
                                type: "updateYankLength",
                                length: text.length
                            });
                            onChange(de);
                            ne(ve);
                        }
                        return;
                    }
            }
            return;
        }
        if (H.name === "tab") {
            H.preventDefault();
            if (onTabOnEmpty && Ce_current === "") {
                onTabOnEmpty();
            }
            return;
        }
        if (onSpaceOnEmpty && H.key === " " && Ce_current === "") {
            H.preventDefault();
            onSpaceOnEmpty();
            return;
        }
        if (H.key.length >= 1 && !_i.has(H.name)) {
            H.preventDefault();
            let D = L.insert(H.key);
            onChange(D.text);
            ne(D.offset);
        }
    };
    let We = honorEditorMode && lee();
    let we = mr({
        value: Ve,
        onChange,
        columns: Te,
        onHistoryUp: onExitUp,
        onHistoryDown: onExitDown
    });
    let je = {
        handleKeyDown: ge,
        offset: re,
        setOffset: ne
    };
    return {
        query: Ve,
        queryRef,
        setQuery,
        cursorOffset: re,
        cursorOffsetRef,
        willInsertNewline,
        setCursorOffset: ne,
        handleKeyDown: (H)=>{
            if (!We) {
                ge(H);
                return;
            }
            if (!isActive) {
                return;
            }
            if (H.name === "escape" && we.mode === "NORMAL") {
                we.handleKeyDown(H, je);
                ge(H);
                return;
            }
            we.handleKeyDown(H, je);
        },
        handlePaste: (H)=>{
            if (!isActive || H.text.length === 0) {
                return;
            }
            H.preventDefault();
            we.cancelPendingRemap();
            let _ = multiline ? H.text.replace(/\r\n|\r/g, `
`) : H.text.split(/\r\n|\r|\n/, 2)[0] ?? "";
            if (_.length === 0) {
                return;
            }
            let L = bi.fromText(queryRef.current, Te, cursorOffsetRef.current).insert(_);
            onChange(L.text);
            ne(L.offset);
        },
        vimMode: We ? we.mode : undefined,
        enterInsertMode: ()=>{
            if (We) {
                we.setMode("INSERT", je);
            }
        }
    };
}
N();
function xln(l, h) {
    let C = Math.max(1, Math.floor(h) || 1);
    let x = h > 0 ? Nu(l, C, {
        hard: true,
        trim: false
    }) : l;
    let T = [];
    let O = 0;
    let I = -1;
    let M = x.split(`
`);
    for(let U = 0; U < M.length; U++){
        let F = M[U] ?? "";
        if (F.length === 0) {
            I = l.indexOf(`
`, I + 1);
            if (I !== -1) {
                let B = I;
                T.push(An({
                    text: F,
                    startOffset: B,
                    isPrecededByNewline: En(l, B, U === 0),
                    endsWithNewline: true
                }));
            } else {
                let B = l.length;
                T.push(An({
                    text: F,
                    startOffset: B,
                    isPrecededByNewline: En(l, B, U === 0),
                    endsWithNewline: false
                }));
            }
            continue;
        }
        let K = l.indexOf(F, O);
        if (K === -1) {
            let B = O;
            T.push(An({
                text: F,
                startOffset: B,
                isPrecededByNewline: En(l, B, U === 0),
                endsWithNewline: false
            }));
            O = B + F.length;
            continue;
        }
        O = K + F.length;
        let j = K + F.length;
        let endsWithNewline = j < l.length && l[j] === `
`;
        if (endsWithNewline) {
            I = j;
        }
        T.push(An({
            text: F,
            startOffset: K,
            isPrecededByNewline: En(l, K, U === 0),
            endsWithNewline
        }));
    }
    return Object.freeze({
        text: l,
        columns: C,
        lines: Object.freeze(T)
    });
}
function Mi(l, h) {
    let C = zo(h, 0, Math.max(0, l.lines.length - 1));
    return l.lines[C] ?? {
        text: "",
        startOffset: 0,
        isPrecededByNewline: true,
        endsWithNewline: false
    };
}
function $o(l, h) {
    if (l.lines.length === 0) {
        return {
            line: 0,
            column: 0
        };
    }
    let C = zo(h, 0, l.text.length);
    for(let O = 0; O < l.lines.length; O++){
        let line = l.lines[O];
        let M = l.lines[O + 1];
        if (C >= line.startOffset && (!M || C < M.startOffset)) {
            let U = C - line.startOffset;
            let F;
            if (line.isPrecededByNewline) {
                F = Ho(line.text, U);
            } else {
                let K = line.text.length - line.text.trimStart().length;
                if (U < K) {
                    F = 0;
                } else {
                    F = Ho(line.text.slice(K), U - K);
                }
            }
            return {
                line: O,
                column: F
            };
        }
    }
    let x = l.lines.length - 1;
    let T = l.lines[x];
    return {
        line: x,
        column: ae(T.text)
    };
}
function Go(l, h, C) {
    if (l.lines.length === 0) {
        return 0;
    }
    let x = Mi(l, h);
    if (x.text.length === 0 && x.endsWithNewline) {
        return x.startOffset;
    }
    let T = x.isPrecededByNewline ? 0 : x.text.length - x.text.trimStart().length;
    let O = Ei(x.text.slice(T), Math.max(0, C)) + T;
    return x.startOffset + O;
}
function Ho(l, h) {
    if (h <= 0) {
        return 0;
    }
    if (h >= l.length) {
        return ae(l);
    }
    return ae(l.slice(0, h));
}
function Ei(l, h) {
    if (h <= 0 || l.length === 0) {
        return 0;
    }
    let C = 0;
    let x = 0;
    for (let T of l){
        let O = ae(T);
        if (C + O > h) {
            break;
        }
        C += O;
        x += T.length;
    }
    return x;
}
function En(l, h, C) {
    if (C) {
        return true;
    }
    return h > 0 && l[h - 1] === `
`;
}
function An(l) {
    return Object.freeze(l);
}
function zo(l, h, C) {
    if (l < h) {
        return h;
    }
    if (l > C) {
        return C;
    }
    return l;
}
function nb({ query, placeholder = "Search…", isFocused, onKeyDown, onPaste, ref, autoFocus, isTerminalFocused, prefix = cxs, width, cursorOffset, borderless = false, highlights = [], dimRange, cursorChar, prefixDim = false, prefixColor, onCursorOffsetChange, onFocus, wrapColumns }) {
    let be = cursorOffset ?? query.length;
    let ie = onKeyDown !== undefined;
    let ue = R(null);
    let Ve = (W)=>{
        ue.current = W;
        Odn(ref, W);
    };
    let re = V9(ue);
    let ee = isFocused ?? (ie && re);
    let Me = nt();
    let Ce = !borderless && !Me;
    let oe = Ce ? 2 : 0;
    let J = Ce ? 1 : 0;
    let ne = `${prefix} ${query}`;
    let Le = prefix.length + 1;
    let Fe = Z(()=>xln(ne, wrapColumns ?? 0), [
        ne,
        wrapColumns
    ]);
    let ge = Z(qN, []);
    let We = a.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT && a.CLAUDE_CODE_SESSION_KIND !== "bg";
    let we = $o(Fe, Le + be);
    let visible = cursorChar === undefined && !We;
    let pt = Qw({
        line: J + we.line,
        column: oe + we.column,
        active: ee && !ie,
        visible
    });
    let ot = isTerminalFocused && !(ge && !We && cursorChar === undefined);
    let onClick = onCursorOffsetChange || onFocus || ie ? (W)=>{
        if (!ee && W.isWindowActivation) {
            W.dropAsStray();
            return;
        }
        let ue_current = ue.current;
        if (ue_current && !onFocus) {
            nx(ue_current).focus(ue_current);
        }
        if (!ee) {
            onFocus?.();
            return;
        }
        if (!query || !onCursorOffsetChange) {
            return;
        }
        let D = W.localRow - J;
        if (D < 0) {
            return;
        }
        let X = Math.max(0, W.localCol - oe);
        let fe = Go(Fe, D, X);
        onCursorOffsetChange(Math.max(0, Math.min(query.length, fe - Le)));
    } : undefined;
    let children = r(n, {
        dimColor: !ee,
        children: [
            e(n, {
                dimColor: prefixDim,
                color: prefixColor,
                children: prefix
            }),
            " ",
            ee ? query ? Ai(query, highlights, dimRange, ot ? be : -1, cursorChar) : ot ? r(Y, {
                children: [
                    cursorChar ?? e(n, {
                        inverse: true,
                        children: placeholder.charAt(0)
                    }),
                    e(n, {
                        dimColor: true,
                        children: cursorChar ? placeholder : placeholder.slice(1)
                    })
                ]
            }) : e(n, {
                dimColor: true,
                children: placeholder
            }) : query ? e(n, {
                children: query
            }) : e(n, {
                children: placeholder
            })
        ]
    });
    if (ie) {
        return e(s, {
            flexShrink: 0,
            borderStyle: Ce ? "round" : undefined,
            borderColor: ee ? "suggestion" : undefined,
            borderDimColor: !ee,
            paddingX: Ce ? 1 : 0,
            width,
            onClick,
            children: e(xee, {
                ref: Ve,
                autoFocus,
                onKeyDown,
                onPaste,
                caret: ee ? {
                    line: we.line,
                    column: we.column,
                    visible
                } : undefined,
                flexGrow: 1,
                children
            })
        });
    }
    return e(s, {
        ref: pt,
        flexShrink: 0,
        borderStyle: Ce ? "round" : undefined,
        borderColor: ee ? "suggestion" : undefined,
        borderDimColor: !ee,
        paddingX: Ce ? 1 : 0,
        width,
        onClick,
        children
    });
}
function Ai(query, highlights, dimRange, x, cursorChar) {
    let O = (K)=>highlights.some(([j, G])=>K >= j && K < G);
    let I = (K)=>!!dimRange && K >= dimRange[0] && K < dimRange[1];
    let M = new Set([
        0,
        query.length
    ]);
    for (let [K, j] of highlights){
        M.add(K);
        M.add(j);
    }
    if (dimRange) {
        M.add(dimRange[0]);
        M.add(dimRange[1]);
    }
    if (x >= 0) {
        M.add(x);
        M.add(x + 1);
    }
    let U = [
        ...M
    ].sort((K, j)=>K - j);
    let F = [];
    for(let K = 0; K < U.length - 1; K++){
        let j = U[K];
        let G = U[K + 1];
        let B = j < query.length ? query.slice(j, G) : " ";
        if (!B) {
            continue;
        }
        let inverse = j === x;
        let ye = inverse && B === `
`;
        F.push(inverse && cursorChar ? r(n, {
            children: [
                cursorChar,
                ye ? `
` : null
            ]
        }, j) : e(n, {
            color: O(j) ? "suggestion" : undefined,
            dimColor: I(j),
            inverse,
            children: ye ? ` 
` : B
        }, j));
    }
    return F;
}
class Yo {
    packageManagerUpdateLastFailedAt = 0;
    packageManagerLatestVersion = null;
    fastIconHintShown = false;
    memorySelectorLastPath = undefined;
    recordPackageManagerUpdateFailure(l) {
        this.packageManagerUpdateLastFailedAt = l;
    }
    recordPackageManagerLatestVersion(l) {
        this.packageManagerLatestVersion = l;
    }
    markFastIconHintShown() {
        this.fastIconHintShown = true;
    }
    rememberMemorySelectorPath(l) {
        this.memorySelectorLastPath = l;
    }
}
const H9e = new q(()=>new Yo);
N();
const Ni = "at_mentioned";
const Pi = p(()=>u({
        method: A(Ni),
        params: u({
            filePath: o(),
            lineStart: E().optional(),
            lineEnd: E().optional()
        })
    }));
function BLt(l, h) {
    let C = Z(()=>IB(l), [
        l
    ]);
    let x = R(undefined);
    P(()=>{
        x.current = C;
        if (!C) {
            return;
        }
        U2(C, Pi(), (T)=>{
            if (x.current !== C) {
                return;
            }
            try {
                let O = T.params;
                let lineStart = O.lineStart !== undefined ? O.lineStart + 1 : undefined;
                let lineEnd = O.lineEnd !== undefined ? O.lineEnd + 1 : undefined;
                h({
                    filePath: O.filePath,
                    lineStart,
                    lineEnd
                });
                g("ide_at_mention");
            } catch (error) {
                c(error);
                m("ide_at_mention", "ide_at_mention_failed");
            }
        });
    }, [
        C,
        h
    ]);
}
function jLt(l, h) {
    let C = Li.relative(se(), l.filePath);
    let x;
    if (l.lineStart && l.lineEnd) {
        x = l.lineStart === l.lineEnd ? `@${C}#L${l.lineStart} ` : `@${C}#L${l.lineStart}-${l.lineEnd} `;
    } else {
        x = `@${C} `;
    }
    if (h !== undefined && !/\s/.test(h)) {
        x = ` ${x}`;
    }
    return x;
}
N();
function T1e() {
    let l = fA();
    return Re(l && k1e.of(l), (h)=>h.loginCompleted) ?? 0;
}
function pU() {
    let user_intent_store = V((x)=>V6t(x.settings));
    let auth_version = T1e();
    let C = Z(()=>user_intent_store && kur(), [
        auth_version,
        user_intent_store
    ]);
    P(()=>{
        if (!ea().claim("voice_init_gate")) {
            return;
        }
        i("tengu_voice_init_gate", {
            user_intent_store,
            user_intent_disk: V6t(ft()),
            has_voice_auth: kur(),
            voice_mode_allowed: Tur(),
            auth_version
        });
    }, []);
    return C && Tur();
}
N();
function ta(pu) {
    return pu.voiceState;
}
function na(mu) {
    return mu.settings.voice?.mode ?? "hold";
}
function oa(Qr) {
    if (!Qr.voiceWarmingUp) {
        return Qr;
    }
    return {
        ...Qr,
        voiceWarmingUp: false
    };
}
function sa(Zr) {
    if (!Zr.awaitingVoiceSubmitDoubleTap) {
        return Zr;
    }
    return {
        ...Zr,
        awaitingVoiceSubmitDoubleTap: false
    };
}
function aa(eo) {
    if (!eo.voiceWarmingUp) {
        return eo;
    }
    return {
        ...eo,
        voiceWarmingUp: false
    };
}
function ua(to) {
    if (!to.awaitingVoiceSubmitDoubleTap) {
        return to;
    }
    return {
        ...to,
        awaitingVoiceSubmitDoubleTap: false
    };
}
function la(no) {
    if (!no.awaitingVoiceSubmitDoubleTap) {
        return no;
    }
    return {
        ...no,
        awaitingVoiceSubmitDoubleTap: false
    };
}
function ca(ro) {
    if (!ro.voiceWarmingUp) {
        return ro;
    }
    return {
        ...ro,
        voiceWarmingUp: false
    };
}
function fa(oo) {
    if (oo.voiceWarmingUp) {
        return oo;
    }
    return {
        ...oo,
        voiceWarmingUp: true
    };
}
const ls = import.meta.require("/$bunfs/root/chunk-acbq0xy0.js");
const Mt = 120;
const Xo = 2000;
const qo = 5;
const Ln = 2;
const Jo = 300;
function Qo(l, h) {
    if ((l.key === "return" ? "enter" : l.key.toLowerCase()) !== h.key) {
        return false;
    }
    if (l.ctrl !== h.ctrl) {
        return false;
    }
    if (l.shift !== h.shift) {
        return false;
    }
    if (l.meta !== (h.alt || h.meta)) {
        return false;
    }
    if (l.superKey !== h.super) {
        return false;
    }
    return true;
}
function Zo(l) {
    return ET.changed.subscribe(l);
}
function es() {
    return DOn(ET);
}
function D9e({ composer, isActive = true }) {
    let { addNotification } = Eo();
    let x = xdn();
    let T = kIe();
    let O = R(null);
    let I = R("");
    let M = R(null);
    let stripTrailing = le((Q, { char = " ", anchor = false, floor = 0 } = {})=>{
        let { value, cursorOffset } = composer;
        let re = value.slice(0, cursorOffset);
        let ee = value.slice(cursorOffset);
        let Me = char === " " ? d6(re) : re;
        let Ce = 0;
        while(Ce < Me.length && Me[Me.length - 1 - Ce] === char){
            Ce++;
        }
        let oe = Math.max(0, Math.min(Ce - floor, Q));
        let J = Ce - oe;
        let ne = re.slice(0, re.length - oe);
        let Le = "";
        if (anchor) {
            O.current = ne;
            I.current = ee;
            if (ee.length > 0 && !/^\s/.test(ee)) {
                Le = " ";
            }
        }
        let Fe = ne + Le + ee;
        if (anchor) {
            M.current = Fe;
        }
        if (Fe === value && oe === 0) {
            return J;
        }
        composer.setValueWithCursor(Fe, ne.length);
        return J;
    }, [
        composer
    ]);
    let resetAnchor = le(()=>{
        let O_current = O.current;
        if (O_current === null) {
            return;
        }
        let I_current = I.current;
        O.current = null;
        I.current = "";
        if (composer.value !== M.current) {
            return;
        }
        composer.setValueWithCursor(O_current + I_current, O_current.length);
    }, [
        composer
    ]);
    let enabled = pU();
    let j = V((Q)=>Q.settings.voice?.autoSubmit === true);
    let mode = V((Q)=>Q.settings.voice?.mode ?? "hold");
    let B = vy((Q)=>Q.voiceState);
    let z = vy((Q)=>Q.voiceInterimTranscript);
    P(()=>{
        if (isActive && T().voiceState === "recording" && O.current === null) {
            let { value, cursorOffset } = composer;
            O.current = value.slice(0, cursorOffset);
            I.current = value.slice(cursorOffset);
            M.current = value;
        }
        if (B === "idle") {
            O.current = null;
            I.current = "";
            M.current = null;
        }
    }, [
        B,
        T,
        composer,
        isActive
    ]);
    P(()=>{
        if (O.current === null) {
            return;
        }
        let O_current = O.current;
        let I_current = I.current;
        if (composer.value !== M.current) {
            return;
        }
        let be = O_current.length > 0 && !/\s$/.test(O_current) && z.length > 0;
        let ie = I_current.length > 0 && !/^\s/.test(I_current);
        let ue = be ? " " : "";
        let Ve = ie ? " " : "";
        let re = O_current + ue + z + Ve + I_current;
        let ee = O_current.length + ue.length + z.length;
        composer.setValueWithCursor(re, ee);
        M.current = re;
    }, [
        z,
        composer
    ]);
    let onTranscript = le((Q)=>{
        let O_current = O.current;
        if (O_current === null) {
            m("voice_transcript_insert", "no_anchor");
            return;
        }
        let I_current = I.current;
        if (composer.value !== M.current) {
            f("voice_transcript_insert", "input_diverged");
            return;
        }
        let ie = O_current.length > 0 && !/\s$/.test(O_current) && Q.length > 0;
        let ue = I_current.length > 0 && !/^\s/.test(I_current) && Q.length > 0;
        let Ve = ie ? " " : "";
        let re = ue ? " " : "";
        let ee = O_current + Ve + Q + re + I_current;
        let Me = O_current.length + Ve.length + Q.length;
        composer.setValueWithCursor(ee, Me);
        M.current = ee;
        g("voice_transcript_insert");
        O.current = O_current + Ve + Q;
        let Ce = mode === "tap" || j;
        let oe = composer.submit !== undefined && Ce && iIs(Q) >= 3 && composer.submit(ee, true);
        x((J)=>{
            let awaitingVoiceSubmitDoubleTap = composer.submit !== undefined && mode !== "tap" && !oe;
            if (J.awaitingVoiceSubmitDoubleTap === awaitingVoiceSubmitDoubleTap) {
                return J;
            }
            return {
                ...J,
                awaitingVoiceSubmitDoubleTap
            };
        });
    }, [
        composer,
        x,
        j,
        mode
    ]);
    let Te = ls.useVoice({
        onTranscript,
        onError: (text)=>{
            addNotification({
                key: "voice-error",
                kind: "warning",
                text,
                color: "error",
                priority: "immediate",
                timeoutMs: 10000
            });
        },
        enabled,
        focusMode: false,
        mode
    });
    let interimRange = Z(()=>{
        if (O.current === null) {
            return null;
        }
        if (z.length === 0) {
            return null;
        }
        let O_current = O.current;
        let te = O_current.length > 0 && !/\s$/.test(O_current) && z.length > 0;
        let be = O_current.length + (te ? 1 : 0);
        let end = be + z.length;
        return {
            start: be,
            end
        };
    }, [
        z
    ]);
    en(()=>{
        composer.setInterimRange?.(interimRange);
    }, [
        composer,
        interimRange
    ]);
    return {
        stripTrailing,
        resetAnchor,
        handleKeyEvent: Te.handleKeyEvent,
        cancelRecording: Te.cancelRecording,
        interimRange
    };
}
function A1e(l) {
    let ue = w(33);
    let { voiceHandleKeyEvent, voiceCancelRecording, stripTrailing, resetAnchor, isActive, composerTakesTypedKeys, composer } = l;
    let U = composerTakesTypedKeys === undefined ? true : composerTakesTypedKeys;
    let F = kIe();
    let K = xdn();
    let j = Lc();
    let G = C6();
    let B = pU();
    let z = vy(ta);
    let ye = V(na);
    let Te = on();
    let me = Rt(Zo, es);
    let Q = j ? j.bindings : me;
    let te;
    be: {
        if (!B) {
            te = null;
            break be;
        }
        let ie = null;
        if (ue[0] !== Q || ue[1] !== ie) {
            for (const Ve of Q){
                if (Ve.context !== "Chat") {
                    continue;
                }
                if (Ve.chord.length !== 1) {
                    continue;
                }
                let re = Ve.chord[0];
                if (!re) {
                    continue;
                }
                if (Ve.action === "voice:pushToTalk") {
                    ie = re;
                } else if (ie !== null && G0e(re, ie)) {
                    ie = null;
                }
            }
            ue[0] = Q;
            ue[1] = ie;
            ue[2] = ie;
        } else {
            ie = ue[2];
        }
        te = ie;
    }
    let ee = te;
    let Me;
    if (ue[3] !== ee) {
        Me = ee ? Gpr(ee, D$()) : null;
        ue[3] = ee;
        ue[4] = Me;
    } else {
        Me = ue[4];
    }
    let voiceKeyDisplay = Me;
    let oe = ee !== null && ee.key.length === 1 && !ee.ctrl && !ee.alt && !ee.shift && !ee.meta && !ee.super ? ee.key : null;
    let J = R(0);
    let ne = R(0);
    let Le = R(0);
    let Fe = R(false);
    let ge = R(null);
    let We = R(0);
    let we = R(null);
    let je;
    let pt;
    if (ue[5] !== K || ue[6] !== z) {
        je = ()=>{
            if (z !== "recording") {
                Fe.current = false;
                Le.current = 0;
                K(oa);
            } else {
                We.current = 0;
                if (we.current) {
                    we.current();
                    we.current = null;
                }
                K(sa);
            }
        };
        pt = [
            z,
            K
        ];
        ue[5] = K;
        ue[6] = z;
        ue[7] = je;
        ue[8] = pt;
    } else {
        je = ue[7];
        pt = ue[8];
    }
    P(je, pt);
    let ot;
    let H;
    if (ue[9] === S) {
        ot = ()=>()=>{
                if (we.current) {
                    we.current();
                    we.current = null;
                }
            };
        H = [];
        ue[9] = ot;
        ue[10] = H;
    } else {
        ot = ue[9];
        H = ue[10];
    }
    P(ot, H);
    let _;
    if (ue[11] !== K) {
        _ = function W() {
            if (J.current === 0) {
                return;
            }
            if (ge.current) {
                ge.current();
                ge.current = null;
            }
            J.current = 0;
            ne.current = 0;
            K(aa);
        };
        ue[11] = K;
        ue[12] = _;
    } else {
        _ = ue[12];
    }
    let W = _;
    let L;
    if (ue[13] !== oe || ue[14] !== Te || ue[15] !== composer || ue[16] !== U || ue[17] !== F || ue[18] !== isActive || ue[19] !== G || ue[20] !== resetAnchor || ue[21] !== W || ue[22] !== K || ue[23] !== stripTrailing || ue[24] !== voiceCancelRecording || ue[25] !== B || ue[26] !== voiceHandleKeyEvent || ue[27] !== ee || ue[28] !== ye) {
        L = (D)=>{
            if (!B) {
                return;
            }
            if (!isActive || G) {
                return;
            }
            if ((D.key === "escape" || D.key === "c" && D.ctrl && !D.shift && !D.meta) && F().voiceState !== "idle") {
                D.stopImmediatePropagation();
                voiceCancelRecording();
                resetAnchor();
                return;
            }
            if (oe !== null && !U) {
                return;
            }
            if (ye !== "tap" && composer.submit !== undefined && F().awaitingVoiceSubmitDoubleTap) {
                let X = composer.submit;
                let fe = ()=>{
                    We.current = 0;
                    if (we.current) {
                        we.current();
                        we.current = null;
                    }
                };
                let Ee = ()=>{
                    fe();
                    K(ua);
                };
                let _e = oe !== null && !D.ctrl && !D.meta && !D.shift && (oe === " " ? d6(D.key) : D.key)[0] === oe;
                let he = composer.cursorOffset === composer.value.length;
                if (!_e || !he) {
                    Ee();
                } else if (we.current !== null) {
                    Ee();
                } else if (F().voiceState === "idle") {
                    let de = Date.now();
                    let ve = We.current;
                    if (ve !== 0 && de - ve <= Jo) {
                        D.stopImmediatePropagation();
                        We.current = 0;
                        we.current = Te.setTimeout(()=>{
                            we.current = null;
                            let Ie = F();
                            if (Ie.voiceState !== "idle" || !Ie.awaitingVoiceSubmitDoubleTap) {
                                return;
                            }
                            let composer_value = composer.value;
                            let Be = composer_value.endsWith(oe) || oe === " " && composer_value.endsWith("\u3000") ? composer_value.slice(0, -1) : composer_value;
                            if (!X(Be, true)) {
                                return;
                            }
                            K(la);
                        }, Mt);
                        return;
                    }
                    if (ve !== 0) {
                        Ee();
                    } else {
                        We.current = de;
                    }
                }
            }
            if (ee === null) {
                return;
            }
            let xe;
            if (oe !== null) {
                let pe = oe === " " ? d6(D.key) : D.key;
                xe = !D.ctrl && !D.meta && !D.shift && pe[0] === oe && (pe.length === 1 || pe === oe.repeat(pe.length)) ? pe.length : null;
            } else {
                xe = Qo(D, ee) ? 1 : null;
            }
            if (xe === null) {
                W();
                return;
            }
            if (ye === "tap") {
                let Ge = F().voiceState;
                if (Ge === "processing") {
                    if (oe === null) {
                        D.stopImmediatePropagation();
                    }
                    return;
                }
                let He = Ge === "idle";
                if (He && composer.value.length > 0) {
                    return;
                }
                D.stopImmediatePropagation();
                let mt = J.current === 0;
                J.current = J.current + xe;
                if (ge.current) {
                    ge.current();
                }
                ge.current = Te.setTimeout(()=>{
                    ge.current = null;
                    W();
                }, Mt);
                if (!mt) {
                    if (oe !== null) {
                        stripTrailing(xe, {
                            char: oe,
                            floor: 0
                        });
                    }
                    return;
                }
                if (He) {
                    if (oe !== null) {
                        stripTrailing(xe, {
                            char: oe,
                            anchor: true
                        });
                    } else {
                        stripTrailing(0, {
                            anchor: true
                        });
                    }
                } else if (oe !== null) {
                    stripTrailing(xe, {
                        char: oe,
                        floor: 0
                    });
                }
                voiceHandleKeyEvent();
                if (He && F().voiceState === "idle") {
                    resetAnchor();
                }
                return;
            }
            let voiceState = F().voiceState;
            if (Fe.current && voiceState !== "idle") {
                D.stopImmediatePropagation();
                if (oe !== null) {
                    stripTrailing(xe, {
                        char: oe,
                        floor: Le.current
                    });
                }
                voiceHandleKeyEvent();
                return;
            }
            if (voiceState === "recording") {
                if (oe === null) {
                    D.stopImmediatePropagation();
                }
                return;
            }
            if (voiceState === "processing" && oe === null) {
                D.stopImmediatePropagation();
                return;
            }
            let J_current = J.current;
            J.current = J.current + xe;
            if (oe === null || voiceState === "idle" && J.current >= qo) {
                D.stopImmediatePropagation();
                if (ge.current) {
                    ge.current();
                    ge.current = null;
                }
                J.current = 0;
                Fe.current = true;
                K(ca);
                if (oe !== null) {
                    Le.current = stripTrailing(ne.current + xe, {
                        char: oe,
                        anchor: true
                    });
                    ne.current = 0;
                    voiceHandleKeyEvent();
                } else {
                    stripTrailing(0, {
                        anchor: true
                    });
                    voiceHandleKeyEvent(Xo);
                }
                if (F().voiceState === "idle") {
                    Fe.current = false;
                    resetAnchor();
                }
                return;
            }
            if (J_current >= Ln) {
                D.stopImmediatePropagation();
                stripTrailing(xe, {
                    char: oe,
                    floor: ne.current
                });
            } else {
                ne.current = ne.current + xe;
            }
            if (voiceState === "idle" && J.current >= Ln) {
                K(fa);
            }
            if (ge.current) {
                ge.current();
            }
            ge.current = Te.setTimeout(()=>{
                ge.current = null;
                W();
            }, Mt);
        };
        ue[13] = oe;
        ue[14] = Te;
        ue[15] = composer;
        ue[16] = U;
        ue[17] = F;
        ue[18] = isActive;
        ue[19] = G;
        ue[20] = resetAnchor;
        ue[21] = W;
        ue[22] = K;
        ue[23] = stripTrailing;
        ue[24] = voiceCancelRecording;
        ue[25] = B;
        ue[26] = voiceHandleKeyEvent;
        ue[27] = ee;
        ue[28] = ye;
        ue[29] = L;
    } else {
        L = ue[29];
    }
    let _t = L;
    let Ys;
    if (ue[30] !== _t || ue[31] !== voiceKeyDisplay) {
        Ys = {
            handleKeyDown: _t,
            voiceKeyDisplay
        };
        ue[30] = _t;
        ue[31] = voiceKeyDisplay;
        ue[32] = Ys;
    } else {
        Ys = ue[32];
    }
    return Ys;
}
function Ca(O) {
    return O.settings.voice?.mode ?? "hold";
}
const cs = {
    r: 153,
    g: 153,
    b: 153
};
const fs = {
    r: 185,
    g: 185,
    b: 185
};
const ds = 2;
function tIe(l) {
    let x = w(3);
    let { voiceState } = l;
    let C = V(Ca);
    switch(voiceState){
        case "recording":
            {
                if (C === "tap") {
                    let T;
                    if (x[0] === S) {
                        T = r(n, {
                            children: [
                                r(n, {
                                    color: "error",
                                    children: [
                                        uo,
                                        " REC"
                                    ]
                                }),
                                e(n, {
                                    dimColor: true,
                                    children: " · tap to send"
                                })
                            ]
                        });
                        x[0] = T;
                    } else {
                        T = x[0];
                    }
                    return T;
                }
                let T;
                if (x[1] === S) {
                    T = e(n, {
                        dimColor: true,
                        children: "listening…"
                    });
                    x[1] = T;
                } else {
                    T = x[1];
                }
                return T;
            }
        case "processing":
            {
                let T;
                if (x[2] === S) {
                    T = e(Ar, {});
                    x[2] = T;
                } else {
                    T = x[2];
                }
                return T;
            }
        case "idle":
            {
                return null;
            }
    }
}
function WLt() {
    let h = w(2);
    let [, l] = jmt();
    let C;
    if (h[0] !== l) {
        C = l ? e(n, {
            color: l.hex,
            children: l.char
        }) : null;
        h[0] = l;
        h[1] = C;
    } else {
        C = h[1];
    }
    return C;
}
function nIe() {
    let l = w(1);
    let h;
    if (l[0] === S) {
        h = e(n, {
            dimColor: true,
            children: "keep holding…"
        });
        l[0] = h;
    } else {
        h = l[0];
    }
    return h;
}
function Ar() {
    let T = w(8);
    let l = ql();
    let h = Sg(l.prefersReducedMotion);
    let [C, x] = ia(h ? null : 50);
    if (h) {
        let O;
        if (T[0] === S) {
            O = e(n, {
                color: "warning",
                children: "Voice: processing…"
            });
            T[0] = O;
        } else {
            O = T[0];
        }
        return O;
    }
    let I = x / 1000;
    let M = (Math.sin(I * Math.PI * 2 / ds) + 1) / 2;
    let O;
    if (T[1] !== M) {
        let U = Ug() ? hA(M) : M;
        O = bm(Fh(cs, fs, U));
        T[1] = M;
        T[2] = O;
    } else {
        O = T[2];
    }
    let color = O;
    let K;
    if (T[3] !== color) {
        K = e(n, {
            color,
            children: "Voice: processing…"
        });
        T[3] = color;
        T[4] = K;
    } else {
        K = T[4];
    }
    let j;
    if (T[5] !== C || T[6] !== K) {
        j = e(s, {
            ref: C,
            children: K
        });
        T[5] = C;
        T[6] = K;
        T[7] = j;
    } else {
        j = T[7];
    }
    return j;
}
N();
N();
N();
const At = Se(ty(), 1);
function gs(l) {
    return `${At.major(l, {
        loose: true
    })}.${At.minor(l, {
        loose: true
    })}.${At.patch(l, {
        loose: true
    })}`;
}
function Zt(l, h = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.296",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-09T01:31:52Z",
    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
}.VERSION) {
    return Z(()=>{
        if (!l) {
            return null;
        }
        let C = gs(l);
        if (C === gs(h)) {
            return null;
        }
        return C;
    }, [
        l,
        h
    ]);
}
const Os = 2;
function Fr({ isUpdating, onChangeIsUpdating, showSuccessMessage, verbose }) {
    let { storageV5 } = Pe();
    let O = V((te)=>te.autoUpdaterResult);
    let I = Hn();
    let [M, U] = y({});
    let [F, K] = y(false);
    let j = Zt(O?.version);
    P(()=>{
        ZMe().then(K);
    }, []);
    let G = R(isUpdating);
    let B = R(O?.status);
    let z = R(O?.consecutiveExeLockFailures ?? 0);
    P(()=>{
        G.current = isUpdating;
        B.current = O?.status;
        z.current = O?.consecutiveExeLockFailures ?? 0;
    });
    let ye = le(async ()=>{
        if (G.current) {
            return;
        }
        if (B.current === "no_permissions") {
            t("AutoUpdater: Skipping update check (no_permissions persists this session)");
            return;
        }
        if (z.current >= Os) {
            t("AutoUpdater: Skipping update check (claude.exe locked by another process; damped for this session)");
            return;
        }
        if (gue()) {
            return;
        }
        if (zZe()) {
            return;
        }
        let VERSION = {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION;
        let be = Qq();
        let ie = await GZe(be);
        let { maxVersion, forceDowngradeEnabled } = await eHe();
        let re = null;
        let ee = false;
        if (forceDowngradeEnabled && maxVersion) {
            ee = HGe(VERSION, maxVersion, "auto_updater");
            if (ee) {
                re = maxVersion;
            }
        }
        if (!re && ie) {
            if (maxVersion && Zh(ie, maxVersion)) {
                t(`AutoUpdater: maxVersion ${maxVersion} is set, capping update from ${ie} to ${maxVersion}`);
                if (Zh(maxVersion, VERSION)) {
                    re = maxVersion;
                } else {
                    t(`AutoUpdater: current version ${VERSION} is already at or above maxVersion ${maxVersion}, skipping update`);
                }
            } else if (Zh(ie, VERSION)) {
                re = ie;
            }
        }
        U({
            global: VERSION,
            latest: re ?? ie
        });
        if (!re || DGe(re)) {
            return;
        }
        if (ee) {
            i("tengu_auto_updater_forced_downgrade", {
                from_version: Ci(VERSION),
                to_version: Ci(re)
            });
        }
        let Me = Date.now();
        onChangeIsUpdating(true);
        let Ce = ce();
        if (Ce.installMethod !== "native" && !Ne(process.env.DISABLE_INSTALLATION_CHECKS)) {
            await hSt();
        }
        let oe = await QMe();
        t(`AutoUpdater: Detected installation type: ${oe}`);
        if (oe === "development") {
            t("AutoUpdater: Cannot auto-update development build");
            onChangeIsUpdating(false);
            return;
        }
        let status;
        let ne;
        let Le;
        if (oe === "npm-local") {
            t("AutoUpdater: Using local update method");
            ne = "local";
            status = await jZe(be, re, storageV5);
        } else if (oe === "npm-global") {
            t("AutoUpdater: Using global update method");
            ne = "global";
            Le = await VZe(re, storageV5);
            status = Le.status;
        } else if (oe === "native") {
            t("AutoUpdater: Unexpected native installation in non-native updater");
            onChangeIsUpdating(false);
            return;
        } else {
            t("AutoUpdater: Unknown installation type, falling back to config");
            let ge = Ce.installMethod === "local";
            ne = ge ? "local" : "global";
            if (ge) {
                status = await jZe(be, re, storageV5);
            } else {
                Le = await VZe(re, storageV5);
                status = Le.status;
            }
        }
        onChangeIsUpdating(false);
        let failureHint = Le?.failureHint;
        if (status !== "in_progress") {
            OGe({
                timestamp: new Date().toISOString(),
                path: ne === "local" ? "npm-local" : "npm-global",
                outcome: status === "success" ? "success" : "failed",
                status,
                version_from: VERSION,
                version_to: re,
                error_code: status === "install_failed" && LGe() ? "update_apply_restore_failed" : H2t(failureHint)
            }, storageV5);
        }
        if (status === "success") {
            let probeDurationMs = Le?.probeDurationMs ?? 0;
            i("tengu_auto_updater_success", {
                fromVersion: Ci(VERSION),
                toVersion: Ci(re),
                durationMs: Date.now() - Me - probeDurationMs,
                probeDurationMs,
                wasMigrated: ne === "local",
                installationType: d(oe)
            });
        } else if (status !== "in_progress") {
            let ge = status;
            i("tengu_auto_updater_fail", {
                fromVersion: Ci(VERSION),
                attemptedVersion: Ci(re),
                status: d(ge),
                durationMs: Date.now() - Me,
                wasMigrated: ne === "local",
                installationType: d(oe)
            });
        }
        I((ge)=>{
            let ge_autoUpdaterResult = ge.autoUpdaterResult;
            let we = ge_autoUpdaterResult?.consecutiveExeLockFailures ?? 0;
            let consecutiveExeLockFailures = status === "in_progress" ? we : failureHint === "windows_running_exe_lock" ? we + 1 : 0;
            if (ge_autoUpdaterResult?.version === re && ge_autoUpdaterResult?.status === status && ge_autoUpdaterResult?.failureHint === failureHint && (ge_autoUpdaterResult?.consecutiveExeLockFailures ?? 0) === consecutiveExeLockFailures) {
                return ge;
            }
            return {
                ...ge,
                autoUpdaterResult: {
                    version: re,
                    status,
                    failureHint,
                    consecutiveExeLockFailures
                }
            };
        });
    }, [
        I,
        storageV5
    ]);
    let Te = Co((te)=>{
        onChangeIsUpdating(false);
        c(te);
    });
    P(()=>{
        ye().catch(Te);
    }, [
        ye
    ]);
    Di(()=>void ye().catch(Te), 1800000);
    if (!O?.version && (!M.global || !M.latest)) {
        return null;
    }
    if (!O?.version && !isUpdating) {
        return null;
    }
    let me = O?.status === "install_failed" ? LGe() : null;
    let Q = null;
    switch(O?.failureHint){
        case "windows_running_exe_lock":
            Q = "claude.exe in use (close other Claude Code sessions, including VS Code)";
            break;
        case "native_binary_missing":
            Q = "native binary for this platform was not downloaded (will retry)";
            break;
        case undefined:
            break;
    }
    return r(s, {
        flexDirection: "row",
        gap: 1,
        children: [
            verbose && r(n, {
                dimColor: true,
                wrap: "truncate",
                children: [
                    "globalVersion: ",
                    M.global,
                    " · latestVersion:",
                    " ",
                    M.latest
                ]
            }),
            isUpdating ? e(Y, {
                children: e(s, {
                    children: e(n, {
                        color: "text",
                        dimColor: true,
                        wrap: "truncate",
                        children: "Auto-updating…"
                    })
                })
            }) : O?.status === "success" && showSuccessMessage && j && r(n, {
                color: "success",
                wrap: "truncate",
                children: [
                    e(dt, {
                        status: "success",
                        withSpace: true
                    }),
                    "Update installed · Restart to apply"
                ]
            }),
            O?.status === "no_permissions" && r(n, {
                color: "error",
                wrap: "truncate",
                children: [
                    e(dt, {
                        status: "error",
                        withSpace: true
                    }),
                    "Auto-update failed: no write permission to npm prefix · Run",
                    " ",
                    e(n, {
                        bold: true,
                        children: "claude doctor"
                    })
                ]
            }),
            O?.status === "install_failed" && (me ? me.preservedPath ? r(s, {
                flexDirection: "column",
                children: [
                    r(n, {
                        color: "error",
                        wrap: "truncate",
                        children: [
                            e(dt, {
                                status: "error",
                                withSpace: true
                            }),
                            "Update failed and ",
                            basename(me.originalPath),
                            " could not be restored — it was preserved at:"
                        ]
                    }),
                    dirname(me.preservedPath) === dirname(me.originalPath) ? r(n, {
                        color: "error",
                        wrap: "truncate",
                        children: [
                            me.preservedPath,
                            " · rename it back to",
                            " ",
                            basename(me.originalPath),
                            " or run",
                            " ",
                            r(n, {
                                bold: true,
                                children: [
                                    "npm i -g ",
                                    {
                                        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                                        PACKAGE_URL: "@anthropic-ai/claude-code",
                                        README_URL: "https://code.claude.com/docs/en/overview",
                                        VERSION: "2.1.296",
                                        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                                        BUILD_TIME: "2026-10-09T01:31:52Z",
                                        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                                        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                                        DD_SOURCEMAP_GROUP: "default"
                                    }.PACKAGE_URL
                                ]
                            })
                        ]
                    }) : r(n, {
                        color: "error",
                        wrap: "truncate",
                        children: [
                            me.preservedPath,
                            " · reinstall with",
                            " ",
                            r(n, {
                                bold: true,
                                children: [
                                    "npm i -g ",
                                    {
                                        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                                        PACKAGE_URL: "@anthropic-ai/claude-code",
                                        README_URL: "https://code.claude.com/docs/en/overview",
                                        VERSION: "2.1.296",
                                        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                                        BUILD_TIME: "2026-10-09T01:31:52Z",
                                        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                                        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                                        DD_SOURCEMAP_GROUP: "default"
                                    }.PACKAGE_URL
                                ]
                            })
                        ]
                    })
                ]
            }) : r(n, {
                color: "error",
                wrap: "truncate",
                children: [
                    e(dt, {
                        status: "error",
                        withSpace: true
                    }),
                    "Update failed and ",
                    basename(me.originalPath),
                    " could not be restored (no preserved copy found) · reinstall with",
                    " ",
                    r(n, {
                        bold: true,
                        children: [
                            "npm i -g ",
                            {
                                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                                PACKAGE_URL: "@anthropic-ai/claude-code",
                                README_URL: "https://code.claude.com/docs/en/overview",
                                VERSION: "2.1.296",
                                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                                BUILD_TIME: "2026-10-09T01:31:52Z",
                                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                                DD_SOURCEMAP_GROUP: "default"
                            }.PACKAGE_URL
                        ]
                    })
                ]
            }) : Q ? r(n, {
                color: "error",
                wrap: "truncate",
                children: [
                    e(dt, {
                        status: "error",
                        withSpace: true
                    }),
                    "Auto-update failed: ",
                    Q,
                    " · Run",
                    " ",
                    e(n, {
                        bold: true,
                        children: "claude doctor"
                    })
                ]
            }) : r(n, {
                color: "error",
                wrap: "truncate",
                children: [
                    e(dt, {
                        status: "error",
                        withSpace: true
                    }),
                    "Auto-update failed · Try ",
                    e(n, {
                        bold: true,
                        children: "claude doctor"
                    }),
                    " or",
                    " ",
                    e(n, {
                        bold: true,
                        children: F ? `cd ~/.claude/local && npm update ${({
                            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                            PACKAGE_URL: "@anthropic-ai/claude-code",
                            README_URL: "https://code.claude.com/docs/en/overview",
                            VERSION: "2.1.296",
                            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                            BUILD_TIME: "2026-10-09T01:31:52Z",
                            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                            DD_SOURCEMAP_GROUP: "default"
                        }).PACKAGE_URL}` : `npm i -g ${({
                            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                            PACKAGE_URL: "@anthropic-ai/claude-code",
                            README_URL: "https://code.claude.com/docs/en/overview",
                            VERSION: "2.1.296",
                            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                            BUILD_TIME: "2026-10-09T01:31:52Z",
                            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                            DD_SOURCEMAP_GROUP: "default"
                        }).PACKAGE_URL}`
                    })
                ]
            }))
        ]
    });
}
N();
function Wa(error) {
    if (error instanceof aM) {
        return "signature_verification";
    }
    if (error instanceof M2t) {
        return "checksum_mismatch";
    }
    let h = error instanceof Error ? error.message : String(error);
    let C = v(error);
    if (error instanceof O2t || C === "ETIMEDOUT" || C === "ECONNABORTED" || h.includes("Download timed out") || h.includes("timeout")) {
        return "timeout";
    }
    if (h.includes("Checksum mismatch")) {
        return "checksum_mismatch";
    }
    if (h.includes("ENOENT") || h.includes("not found")) {
        return "not_found";
    }
    if (h.includes("EACCES") || h.includes("permission")) {
        return "permission_denied";
    }
    if (h.includes("ENOSPC")) {
        return "disk_full";
    }
    if (h.includes("npm")) {
        return "npm_error";
    }
    if (h.includes("network") || h.includes("ECONNREFUSED") || h.includes("ENOTFOUND")) {
        return "network_error";
    }
    let x = h.toLowerCase();
    if (h.includes("ENOEXEC") || x.includes("exec format error") || x.includes("bad cpu type") || x.includes("cannot execute binary") || x.includes("code signature") || x.includes("gatekeeper") || x.includes("killed: 9")) {
        return "exec_format";
    }
    if (x.includes("virus") || x.includes("quarantine") || x.includes("defender") || x.includes("operation did not complete successfully because the file contains")) {
        return "av_quarantine";
    }
    if (h.includes("EXDEV") || h.includes("EEXIST") || h.includes("EBUSY") || x.includes("rename") || x.includes("move failed") || x.includes("cross-device")) {
        return "swap_failure";
    }
    return "unknown";
}
function ja(l) {
    if (l.wasUpdated) {
        return "tengu_native_auto_updater_success";
    }
    if (l.skippedUnverifiedRelease) {
        return "tengu_native_auto_updater_skipped_unverified_release";
    }
    return "tengu_native_auto_updater_up_to_date";
}
function Ba() {
    return s5() && !Sc()?.bridgeSessionId && "version" in Uvt() && J7o();
}
function Ha() {
    let offer = k("tengu_fancy_wand_copy", {}).offer;
    if (typeof offer === "string" && offer !== "") {
        return offer;
    }
    return "/restart to apply";
}
function Ts() {
    if (Ba()) {
        return Ha();
    }
    return "Restart to update";
}
function Rs() {
    return aT(Ts);
}
function Wr({ isUpdating, onChangeIsUpdating, showSuccessMessage, verbose, atPrompt }) {
    let { storageV5 } = Pe();
    let I = V((te)=>te.autoUpdaterResult);
    let M = Hn();
    let [U, F] = y({
        current: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION
    });
    let [K, j] = y(null);
    let G = Zt(I?.version);
    let B = Qq();
    async function z() {
        if (isUpdating) {
            return;
        }
        if (I?.status === "success") {
            return;
        }
        if (gue()) {
            return;
        }
        let te = await Kvn();
        if (te && Zh({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION, te)) {
            let ie = await h5o();
            j(ie ?? "affects your version");
        }
        if (zZe()) {
            return;
        }
        onChangeIsUpdating(true);
        let be = Date.now();
        i("tengu_native_auto_updater_start", {});
        try {
            let ie = await IGe(B, false, storageV5);
            let ue = {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION;
            let Ve = Date.now() - be;
            if (ie.lockFailed) {
                i("tengu_native_auto_updater_lock_contention", {
                    latency_ms: Ve
                });
                return;
            }
            F({
                current: ue,
                latest: ie.latestVersion
            });
            i(ja(ie), {
                latency_ms: Ve
            });
            if (ie.wasUpdated) {
                X9r();
                OGe({
                    timestamp: new Date().toISOString(),
                    path: "native",
                    outcome: "success",
                    status: "success",
                    version_from: ue,
                    version_to: ie.latestVersion ?? null,
                    error_code: null
                }, storageV5);
                M((re)=>{
                    let re_autoUpdaterResult = re.autoUpdaterResult;
                    if (re_autoUpdaterResult?.version === ie.latestVersion && re_autoUpdaterResult?.status === "success") {
                        return re;
                    }
                    return {
                        ...re,
                        autoUpdaterResult: {
                            version: ie.latestVersion,
                            status: "success"
                        }
                    };
                });
            }
        } catch (error) {
            let ue = Date.now() - be;
            let Ve = error instanceof Error ? error.message : String(error);
            t(`Native auto-updater failed: ${Ve}`, {
                level: "error"
            });
            OGe({
                timestamp: new Date().toISOString(),
                path: "native",
                outcome: "failed",
                status: "install_failed",
                version_from: {
                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://code.claude.com/docs/en/overview",
                    VERSION: "2.1.296",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                    BUILD_TIME: "2026-10-09T01:31:52Z",
                    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                    DD_SOURCEMAP_GROUP: "default"
                }.VERSION,
                version_to: null,
                error_code: null
            }, storageV5);
            let re = Wa(error);
            let error_code = Vr(error) ?? b("none");
            i("tengu_native_auto_updater_fail", {
                latency_ms: ue,
                error_code,
                error_timeout: re === "timeout",
                error_checksum: re === "checksum_mismatch",
                error_signature: re === "signature_verification",
                error_not_found: re === "not_found",
                error_permission: re === "permission_denied",
                error_disk_full: re === "disk_full",
                error_npm: re === "npm_error",
                error_network: re === "network_error",
                error_swap_failure: re === "swap_failure",
                error_exec_format: re === "exec_format",
                error_av_quarantine: re === "av_quarantine"
            });
            M((Me)=>{
                let Me_autoUpdaterResult = Me.autoUpdaterResult;
                if (Me_autoUpdaterResult?.version === null && Me_autoUpdaterResult?.status === "install_failed") {
                    return Me;
                }
                return {
                    ...Me,
                    autoUpdaterResult: {
                        version: null,
                        status: "install_failed"
                    }
                };
            });
        } finally{
            onChangeIsUpdating(false);
        }
    }
    let ye = Co(z);
    P(()=>{
        ye();
    }, [
        B
    ]);
    Di(()=>void z(), 1800000);
    let Te = !!I?.status;
    let me = !!U.current && !!U.latest;
    if (!(!!K || Te || isUpdating && me)) {
        return null;
    }
    return r(s, {
        flexDirection: "row",
        gap: 1,
        children: [
            verbose && r(n, {
                dimColor: true,
                wrap: "truncate",
                children: [
                    "current: ",
                    U.current,
                    " · ",
                    B,
                    ": ",
                    U.latest
                ]
            }),
            isUpdating ? e(s, {
                children: e(n, {
                    dimColor: true,
                    wrap: "truncate",
                    children: "Checking for updates"
                })
            }) : I?.status === "success" && showSuccessMessage && G && r(n, {
                color: "success",
                wrap: "truncate",
                children: [
                    e(dt, {
                        status: "success",
                        withSpace: true
                    }),
                    "Update installed ·",
                    " ",
                    atPrompt ? e(Rs, {}) : "Restart to update"
                ]
            }),
            I?.status === "install_failed" && r(n, {
                color: "error",
                wrap: "truncate",
                children: [
                    e(dt, {
                        status: "error",
                        withSpace: true
                    }),
                    "Auto-update failed · Run ",
                    e(n, {
                        bold: true,
                        children: "claude doctor"
                    })
                ]
            }),
            K && false
        ]
    });
}
N();
function ou(pe) {
    return pe.autoUpdaterResult;
}
function su(Ge) {
    if (Ge.autoUpdaterResult?.status === "install_failed") {
        return {
            ...Ge,
            autoUpdaterResult: null
        };
    }
    return Ge;
}
function ws(l, h) {
    switch(l){
        case "homebrew":
            return [
                "brew",
                "upgrade",
                "--cask",
                h ?? "claude-code"
            ];
        case "winget":
            {
                let C = process.env.LOCALAPPDATA;
                return [
                    C ? join(C, "Microsoft", "WindowsApps", "winget.exe") : "winget",
                    "upgrade",
                    "--id",
                    "Anthropic.ClaudeCode",
                    "--exact",
                    "--silent",
                    "--disable-interactivity"
                ];
            }
        default:
            return null;
    }
}
function ks(l, h) {
    switch(l){
        case "homebrew":
            return `brew upgrade ${h ?? "claude-code"}`;
        case "winget":
            return "winget upgrade Anthropic.ClaudeCode";
        case "mise":
            return "mise upgrade claude";
        case "apk":
            return "apk upgrade claude-code";
        default:
            return "your package manager update command";
    }
}
const Yn = 1800000;
function qn(l) {
    let z = w(45);
    let { isUpdating, onChangeIsUpdating, showSuccessMessage, verbose } = l;
    let O = V(ou);
    let I = Hn();
    let M = H9e.of(is());
    let [U, F] = y(M.packageManagerLatestVersion);
    let [K, j] = y("unknown");
    let [G, B] = y(null);
    let ye;
    if (z[0] !== isUpdating) {
        ye = ()=>isUpdating;
        z[0] = isUpdating;
        z[1] = ye;
    } else {
        ye = z[1];
    }
    let Te = Co(ye);
    let me;
    let Q;
    if (z[2] === S) {
        me = ()=>{
            JMe().then((te)=>{
                j(te);
                if (te === "homebrew") {
                    B(UZe());
                }
            });
        };
        Q = [];
        z[2] = me;
        z[3] = Q;
    } else {
        me = z[2];
        Q = z[3];
    }
    P(me, Q);
    let be;
    if (z[4] !== O?.status || z[5] !== isUpdating || z[6] !== onChangeIsUpdating || z[7] !== Te || z[8] !== I || z[9] !== M) {
        be = async ()=>{
            if (isUpdating) {
                return;
            }
            if (O?.status === "success") {
                return;
            }
            if (gue()) {
                return;
            }
            if (zZe()) {
                return;
            }
            if (O?.status === "install_failed") {
                if (Date.now() - M.packageManagerUpdateLastFailedAt < Yn) {
                    return;
                }
                I(su);
            }
            let [ie, ue] = await Promise.all([
                Qq(),
                JMe()
            ]);
            let Ve = ie;
            let re = null;
            if (ue === "homebrew") {
                re = UZe();
                Ve = re === "claude-code@latest" ? "latest" : "stable";
            }
            let version = ue === "homebrew" ? await D2t(re ?? "claude-code", Ve) : await ptr(Ve);
            let Me = await Kvn();
            let Ce = false;
            if (Me && version && Zh(version, Me)) {
                t(`PackageManagerAutoUpdater: maxVersion ${Me} is set, capping update from ${version} to ${Me}`);
                if (QS({
                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://code.claude.com/docs/en/overview",
                    VERSION: "2.1.296",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                    BUILD_TIME: "2026-10-09T01:31:52Z",
                    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                    DD_SOURCEMAP_GROUP: "default"
                }.VERSION, Me)) {
                    t(`PackageManagerAutoUpdater: current version ${{
                        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                        PACKAGE_URL: "@anthropic-ai/claude-code",
                        README_URL: "https://code.claude.com/docs/en/overview",
                        VERSION: "2.1.296",
                        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                        BUILD_TIME: "2026-10-09T01:31:52Z",
                        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                        DD_SOURCEMAP_GROUP: "default"
                    }.VERSION} is already at or above maxVersion ${Me}, skipping update`);
                    M.recordPackageManagerLatestVersion(null);
                    F(null);
                    return;
                }
                version = Me;
                Ce = true;
            }
            let oe = version && !QS({
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION, version) && !DGe(version);
            let J = oe ? version : null;
            M.recordPackageManagerLatestVersion(J);
            F(J);
            if (!oe) {
                return;
            }
            t(`PackageManagerAutoUpdater: Update available ${{
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION} -> ${version}`);
            let ne = Ne(process.env.CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE);
            let Le = ws(ue, re);
            if (!ne || !Le || Ce) {
                return;
            }
            if (Te()) {
                return;
            }
            onChangeIsUpdating(true);
            let Fe = Date.now();
            let ge = {
                pm_homebrew: ue === "homebrew",
                pm_winget: ue === "winget"
            };
            i("tengu_pkg_manager_auto_updater_start", ge);
            let [We, ...we] = Le;
            let je = await ct(We, we, {
                cwd: homedir(),
                timeout: 300000,
                env: ue === "homebrew" ? {
                    ...process.env,
                    HOMEBREW_NO_AUTO_UPDATE: ""
                } : undefined
            });
            let pt = Date.now() - Fe;
            onChangeIsUpdating(false);
            if (je.code === 0) {
                i("tengu_pkg_manager_auto_updater_success", {
                    ...ge,
                    latency_ms: pt
                });
                I((ot)=>{
                    let ot_autoUpdaterResult = ot.autoUpdaterResult;
                    if (ot_autoUpdaterResult?.version === version && ot_autoUpdaterResult?.status === "success") {
                        return ot;
                    }
                    return {
                        ...ot,
                        autoUpdaterResult: {
                            version,
                            status: "success"
                        }
                    };
                });
            } else {
                t(`PackageManagerAutoUpdater: ${We} exited ${je.code}: ${je.stderr || je.error || je.stdout}`);
                i("tengu_pkg_manager_auto_updater_fail", {
                    ...ge,
                    latency_ms: pt,
                    exit_code: je.code
                });
                M.recordPackageManagerUpdateFailure(Date.now());
                I((_)=>{
                    if (_.autoUpdaterResult?.status === "install_failed") {
                        return _;
                    }
                    return {
                        ..._,
                        autoUpdaterResult: {
                            version,
                            status: "install_failed"
                        }
                    };
                });
            }
        };
        z[4] = O?.status;
        z[5] = isUpdating;
        z[6] = onChangeIsUpdating;
        z[7] = Te;
        z[8] = I;
        z[9] = M;
        z[10] = be;
    } else {
        be = z[10];
    }
    let W = Co(be);
    let L;
    if (z[11] !== onChangeIsUpdating) {
        L = (D)=>{
            onChangeIsUpdating(false);
            c(D);
        };
        z[11] = onChangeIsUpdating;
        z[12] = L;
    } else {
        L = z[12];
    }
    let X = Co(L);
    let fe;
    if (z[13] !== W || z[14] !== X) {
        fe = ()=>{
            W().catch(X);
        };
        z[13] = W;
        z[14] = X;
        z[15] = fe;
    } else {
        fe = z[15];
    }
    let Ee;
    if (z[16] === S) {
        Ee = [];
        z[16] = Ee;
    } else {
        Ee = z[16];
    }
    P(fe, Ee);
    let _e;
    if (z[17] !== W || z[18] !== X) {
        _e = ()=>void W().catch(X);
        z[17] = W;
        z[18] = X;
        z[19] = _e;
    } else {
        _e = z[19];
    }
    Di(_e, Yn);
    if (O?.status === "success") {
        if (!showSuccessMessage) {
            return null;
        }
        let he;
        if (z[20] !== O || z[21] !== verbose) {
            he = verbose && r(n, {
                dimColor: true,
                wrap: "truncate",
                children: [
                    "current: ",
                    {
                        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                        PACKAGE_URL: "@anthropic-ai/claude-code",
                        README_URL: "https://code.claude.com/docs/en/overview",
                        VERSION: "2.1.296",
                        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                        BUILD_TIME: "2026-10-09T01:31:52Z",
                        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                        DD_SOURCEMAP_GROUP: "default"
                    }.VERSION,
                    " · latest:",
                    " ",
                    O.version
                ]
            });
            z[20] = O;
            z[21] = verbose;
            z[22] = he;
        } else {
            he = z[22];
        }
        const de = K !== "unknown" && ` via ${K}`;
        let ve;
        if (z[23] !== de) {
            ve = r(n, {
                color: "success",
                wrap: "truncate",
                children: [
                    "✓ Update installed",
                    de,
                    " · Restart to apply"
                ]
            });
            z[23] = de;
            z[24] = ve;
        } else {
            ve = z[24];
        }
        let Ie;
        if (z[25] !== ve || z[26] !== he) {
            Ie = r(s, {
                flexDirection: "row",
                gap: 1,
                children: [
                    he,
                    ve
                ]
            });
            z[25] = ve;
            z[26] = he;
            z[27] = Ie;
        } else {
            Ie = z[27];
        }
        return Ie;
    }
    if (isUpdating) {
        const he = K === "unknown" ? "Updating…" : `Updating via ${K}\u2026`;
        let de;
        if (z[28] !== he) {
            de = e(n, {
                dimColor: true,
                wrap: "truncate",
                children: he
            });
            z[28] = he;
            z[29] = de;
        } else {
            de = z[29];
        }
        return de;
    }
    let Ae = O?.status === "install_failed";
    if (!U && !Ae || K === "unknown") {
        return null;
    }
    let he;
    if (z[30] !== verbose) {
        he = verbose && r(n, {
            dimColor: true,
            wrap: "truncate",
            children: [
                "currentVersion: ",
                {
                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://code.claude.com/docs/en/overview",
                    VERSION: "2.1.296",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                    BUILD_TIME: "2026-10-09T01:31:52Z",
                    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                    DD_SOURCEMAP_GROUP: "default"
                }.VERSION
            ]
        });
        z[30] = verbose;
        z[31] = he;
    } else {
        he = z[31];
    }
    let de;
    if (z[32] !== G || z[33] !== K) {
        de = ks(K, G);
        z[32] = G;
        z[33] = K;
        z[34] = de;
    } else {
        de = z[34];
    }
    let ve;
    if (z[35] !== de) {
        ve = e(n, {
            bold: true,
            children: de
        });
        z[35] = de;
        z[36] = ve;
    } else {
        ve = z[36];
    }
    let Ie;
    if (z[37] !== Ae) {
        Ie = Ae && e(n, {
            dimColor: true,
            children: " (auto-update failed)"
        });
        z[37] = Ae;
        z[38] = Ie;
    } else {
        Ie = z[38];
    }
    let Be;
    if (z[39] !== ve || z[40] !== Ie) {
        Be = r(n, {
            color: "warning",
            wrap: "truncate",
            children: [
                "Update available! Run:",
                " ",
                ve,
                Ie
            ]
        });
        z[39] = ve;
        z[40] = Ie;
        z[41] = Be;
    } else {
        Be = z[41];
    }
    let xe;
    if (z[42] !== Be || z[43] !== he) {
        xe = r(Y, {
            children: [
                he,
                Be
            ]
        });
        z[42] = Be;
        z[43] = he;
        z[44] = xe;
    } else {
        xe = z[44];
    }
    return xe;
}
function L9e(l) {
    let K = w(16);
    let { isUpdating, onChangeIsUpdating, showSuccessMessage, verbose, atPrompt } = l;
    let [I, M] = y(null);
    let [U, F] = y(null);
    let j;
    if (K[0] === S) {
        j = async function ye() {
            let first_in_process = !T6r();
            let B = Date.now();
            let z = await QMe();
            g("update_detection", {
                duration_ms: Date.now() - B,
                first_in_process,
                installation_type: d(z)
            });
            t(`AutoUpdaterWrapper: Installation type: ${z}`);
            M(z === "native");
            F(z === "package-manager");
        };
        K[0] = j;
    } else {
        j = K[0];
    }
    let ye = j;
    let [Te] = y(C6r);
    let me;
    if (K[1] === S) {
        me = ()=>void ye();
        K[1] = me;
    } else {
        me = K[1];
    }
    zr(me, Te);
    if (I === null || U === null) {
        return null;
    }
    if (U) {
        let Q;
        if (K[2] !== isUpdating || K[3] !== onChangeIsUpdating || K[4] !== showSuccessMessage || K[5] !== verbose) {
            Q = e(qn, {
                verbose,
                isUpdating,
                onChangeIsUpdating,
                showSuccessMessage
            });
            K[2] = isUpdating;
            K[3] = onChangeIsUpdating;
            K[4] = showSuccessMessage;
            K[5] = verbose;
            K[6] = Q;
        } else {
            Q = K[6];
        }
        return Q;
    }
    let Q;
    if (K[7] !== isUpdating || K[8] !== onChangeIsUpdating || K[9] !== showSuccessMessage || K[10] !== verbose) {
        Q = {
            verbose,
            isUpdating,
            onChangeIsUpdating,
            showSuccessMessage
        };
        K[7] = isUpdating;
        K[8] = onChangeIsUpdating;
        K[9] = showSuccessMessage;
        K[10] = verbose;
        K[11] = Q;
    } else {
        Q = K[11];
    }
    let te = Q;
    let be;
    if (K[12] !== atPrompt || K[13] !== te || K[14] !== I) {
        be = I ? e(Wr, {
            ...te,
            atPrompt
        }) : e(Fr, {
            ...te
        });
        K[12] = atPrompt;
        K[13] = te;
        K[14] = I;
        K[15] = be;
    } else {
        be = K[15];
    }
    return be;
}
export { lee, OMr, MMr, HMr, cee, L9, FLt, YDo, yy, xln, nb, DMr, ULt, XDo, w1e, Pln, v1e, E1e, k1e, T1e, H9e, BLt, jLt, pU, D9e, A1e, tIe, WLt, nIe, L9e };
