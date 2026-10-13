import { d0e, bT, Xle, Am } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Ei, Lt, eG } from "/$bunfs/root/chunk-qch5xj2a.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { q } from "/$bunfs/root/chunk-ctt36bn8.js";
import { un } from "/$bunfs/root/chunk-bd805sh6.js";
import { Mx } from "/$bunfs/root/chunk-yq147k4z.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { tu, rEo, oEo } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { dw } from "/$bunfs/root/chunk-46as0mn8.js";
import { vkr, aC } from "/$bunfs/root/chunk-k3tkc302.js";
import { bCr } from "/$bunfs/root/chunk-2321ytcf.js";
import { nr, i8e } from "/$bunfs/root/chunk-wew3321y.js";
import { ae } from "/$bunfs/root/chunk-223dyewd.js";
import { UOn, boo, nfr, woo } from "/$bunfs/root/chunk-mb842220.js";
import { o4 } from "/$bunfs/root/chunk-kasbfbhj.js";
import { YRn } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { cw, vBr } from "/$bunfs/root/chunk-4p1f2ppy.js";
import { Wn } from "/$bunfs/root/chunk-4j5kjctm.js";
import { IP } from "/$bunfs/root/chunk-tfc1vf2h.js";
import { Kc } from "/$bunfs/root/chunk-svqqgdca.js";
const A = 1000;
const de = 16000;
const me = 100;
const Ve = 4000;
const Y = 100;
const Te = A * me;
const gfm = bT.rules.block.gfm;
const be = /\r\n?/g;
const Ye = `x
`;
const Je = /^\n*/;
const et = /\n*$/;
const J = new RegExp(`^(?:[^\\n]+\\n){1,${Y}}? {0,3}(?:=+|-+) *(?:\\n|$)`);
const ke = /^(?:[^\n]+\n)+? {0,3}(?:=+|-+) *(?:\n|$)/;
function tt() {
    let e = 0;
    return {
        isHeld: ()=>e > 0,
        during: (t)=>{
            e += 1;
            try {
                return t();
            } finally{
                e -= 1;
            }
        }
    };
}
const ee = tt();
function rNo(e, t) {
    let n = new bT(e.defaults);
    if (t.includes("<")) {
        n.lex(t);
    }
    return n.state.inLink || n.state.inRawBlock;
}
function SYn(e) {
    let t = e.replace(be, `
`);
    return re(N([], t, A)).length === t.length && !U(t.slice(gfm.fences.exec(t)?.[0].length));
}
function NXe(e, t) {
    let isWindowed = !SYn(t);
    return {
        tokens: isWindowed ? ee.during(()=>rt(e, t)) : e.lexer(t),
        isWindowed
    };
}
function nt(e) {
    let t = "tokens" in e;
    if (oe(e)) {
        return e.items;
    }
    if (X(e)) {
        return [
            ...e.header,
            ...e.rows.flat()
        ].flatMap((n)=>n.tokens);
    }
    if (t) {
        return e.tokens ?? [];
    }
    return [];
}
function rt(e, t) {
    let n = [];
    let r = N([], t.replace(be, `
`), A);
    while(r.rest !== ""){
        r = {
            declining: r.declining,
            ...st(e, r)
        };
        for (let s of r.taken){
            let o = n.at(-1);
            if (o?.type === "space" && s.type === "space") {
                o.raw += s.raw;
            } else {
                n.push(s);
            }
        }
    }
    return n;
}
function st(e, t) {
    let n = re(t);
    let { header = "", fromRow = t.rest } = t.declining ?? {};
    let o = n.length + fromRow.length <= t.rest.length && n.startsWith(header);
    if (ot(e, n)) {
        return K(t.rest);
    }
    if (o) {
        return te(e, t.rest);
    }
    return lt(e, t, n);
}
function ot(e, t) {
    let r = U(t) ? new bT(e.defaults).blockTokens(t) : [];
    let s = false;
    while(!s && r.length > 0){
        s = r.some((o)=>it(o).some(U));
        r = r.flatMap(nt);
    }
    return s;
}
function it(e) {
    let t = (se(e) || e.type === "heading" || e.type === "text") && "text" in e && typeof e.text === "string";
    if (X(e)) {
        return [
            e.raw
        ];
    }
    if (t) {
        return [
            e.text
        ];
    }
    return [];
}
function lt(e, t, n) {
    let r = e.lexer(n);
    let o = n.length === t.rest.length ? r.length : mt(r, n);
    let i = xe(r, o, n);
    if (i > 0) {
        return N(r.slice(0, o), t.rest.slice(i), A);
    }
    return at(e, t, r);
}
function at(e, t, n) {
    let [r] = n;
    let s = n.length === 1;
    let o = s && se(r) && !Le(t.rest);
    let i = s && X(r);
    let l = we(r?.raw ?? "");
    let c = t.declining?.fromRow ?? t.rest;
    let p = i && l.length + c.length <= t.rest.length && !ne(e, l + c.slice(0, M(c, 0, 1)));
    if (o) {
        return ye(e, t.rest);
    }
    if (p) {
        return te(e, t.rest);
    }
    if (i) {
        return ft(e, r, t.rest);
    }
    return ct(t, n);
}
function ct(e, t) {
    let [n] = t;
    let r = t.findLastIndex(Re) <= 0;
    let s = r && t.some(Ie);
    let o = e.lines < de && !(s && se(n));
    let i = r && oe(n);
    let l = r && (n?.type === "code" || s && n?.type !== "html");
    if (o) {
        return N([], e.rest, de);
    }
    if (i) {
        return ut(e, n);
    }
    if (l) {
        return N(t, bt(e), e.lines);
    }
    return K(e.rest);
}
function ut(e, t) {
    let n = t.items.slice(0, -1);
    let r = W(n);
    if (r !== "" && e.rest.startsWith(r)) {
        return N([
            xt(t, r, n)
        ], e.rest.slice(r.length), e.lines);
    }
    return K(e.rest);
}
function ye(e, t) {
    let n = pt(t);
    let r = M(n.text, 0, Ve) === n.text.length && !U(n.text);
    return N([
        {
            ...n,
            tokens: r ? new bT(e.defaults).inlineTokens(n.text) : [
                Se(n.text)
            ]
        }
    ], t.slice(n.raw.length), A);
}
var te = (e, t)=>{
    if (Le(t)) {
        return K(t);
    }
    return ye(e, t);
};
function Le(e) {
    return J.test(e) && gfm.lheading.test(e);
}
function pt(e) {
    let t = kt();
    let n = he(e, "");
    while(n.nextLines !== ""){
        t.text += t.raw === "" ? n.nextLines : `
${n.nextLines}`;
        t.raw += n.nextLines + n.lineBreak;
        n = he(n.isOpen ? e.slice(t.raw.length) : "", Ye);
    }
    return t;
}
function he(e, t) {
    let n = M(e, 0, A);
    let r = e[n - 1] === `
` ? n - 1 : n;
    let s = (gfm.paragraph.exec(t + e.slice(0, M(e, n, 1)))?.[0] ?? t).slice(t.length);
    let nextLines = s.slice(0, r);
    let isOpen = s.length > r;
    let l = isOpen || gfm.newline.exec(e.slice(nextLines.length))?.[0] === `
`;
    return {
        nextLines,
        lineBreak: l ? `
` : "",
        isOpen
    };
}
function ft(e, t, rest) {
    let r = we(t.raw);
    let s = gt(r, rest);
    let o = Ee(rest.slice(r.length, s), A);
    let i = [];
    let l = false;
    while(!l && i.length < o.length){
        let p = ne(e, r + (o[i.length] ?? ""));
        l = p === undefined;
        if (p) {
            i.push(p);
        }
    }
    let c = rest.slice(0, s) + (Je.exec(rest.slice(s))?.[0] ?? "");
    if (l) {
        return dt(e, r, o.slice(0, i.length + 1), rest);
    }
    return N([
        Et(t, c, i.flatMap((p)=>p.rows))
    ], rest.slice(c.length), A);
}
function dt(e, header, n, rest) {
    let s = te(e, rest);
    let o = header.length + n.join("").length;
    let i = rest.length - s.rest.length < o;
    let l = i ? Ee(n.at(-1) ?? "", 1) : [];
    let c = Math.floor(Te / header.length);
    let p = l.slice(0, c).findIndex((R)=>!ne(e, header + R));
    let d = p >= 0 ? p : c < l.length ? c : 0;
    let fromRow = rest.slice(o - l.slice(d).join("").length);
    return {
        ...s,
        declining: i ? {
            header,
            fromRow
        } : undefined
    };
}
function gt(e, rest) {
    let e_length = e.length;
    let r = e_length < rest.length;
    while(r){
        let s = rest.slice(e_length, M(rest, e_length, A));
        let o = ht(e, s);
        e_length += o;
        r = o === s.length && e_length < rest.length;
    }
    return e_length;
}
function ht(e, t) {
    let n = (gfm.table.exec(e + t)?.[0] ?? e).slice(e.length);
    let r = n.replace(et, "");
    if (r !== "" && n.length > r.length) {
        return r.length + 1;
    }
    return r.length;
}
function ne(e, t) {
    let [n] = U(t) ? [] : e.lexer(t);
    if (X(n) && n.raw.length === t.length) {
        return n;
    }
}
function Ee(e, t) {
    let n = [];
    for(let r = 0; r < e.length; r = M(e, r, t)){
        n.push(e.slice(r, M(e, r, t)));
    }
    return n;
}
function mt(e, t) {
    let n = Tt(e);
    let r = e.findLastIndex((i, l)=>l < n && Ie(i)) + 1;
    let s = n;
    let o = 0;
    for(let i = e.length - 1; i >= r && o <= Y; i--){
        o += Lt(e[i]?.raw ?? "", `
`);
        s = o <= Y ? Math.min(s, i) : s;
    }
    return [
        r,
        s
    ].find((i)=>xe(e, i, t) > 0) ?? 0;
}
function Tt(e) {
    let t = e.findLastIndex((r)=>r.raw.trim() !== "");
    if (oe(e[t])) {
        return t;
    }
    return Math.max(e.findLastIndex(Re), 0);
}
const oNo = (e, t)=>W(e) === t;
function sNo(e, t, n) {
    let r = W(e.slice(0, t));
    let s = W(e.slice(t));
    let o = n.endsWith(s);
    if (n.startsWith(r)) {
        return r.length;
    }
    if (o) {
        return n.length - s.length;
    }
    return 0;
}
function xe(e, t, n) {
    let r = W(e.slice(0, t));
    let s = W(e.slice(t));
    let o = r.length + s.length === n.length || n.startsWith(r);
    let i = n.endsWith(s);
    if (o) {
        return r.length;
    }
    if (i) {
        return n.length - s.length;
    }
    return 0;
}
function M(e, t, n) {
    let r = t;
    for(let s = 0; s < n && r < e.length && r - t < n * me; s++){
        let o = e.indexOf(`
`, r);
        r = o === -1 ? e.length : o + 1;
    }
    return r;
}
function U(e) {
    let t = 0;
    let n = false;
    while(!n && t < e.length){
        let r = e.indexOf(`
`, t);
        let s = r === -1 ? e.length : r;
        n = s - t > Te;
        t = s + 1;
    }
    return n;
}
function re({ rest, lines }) {
    return rest.slice(0, M(rest, gfm.fences.exec(rest)?.[0].length ?? 0, lines));
}
function bt(e) {
    return e.rest.slice(re(e).length);
}
function we(e) {
    return e.slice(0, e.indexOf(`
`, e.indexOf(`
`) + 1) + 1);
}
function N(taken, rest, lines) {
    return {
        taken,
        rest,
        lines
    };
}
function K(e) {
    return N([
        yt(e)
    ], "", A);
}
function kt() {
    return {
        type: "paragraph",
        raw: "",
        text: "",
        tokens: []
    };
}
function yt(e) {
    return {
        type: "paragraph",
        raw: e,
        text: e,
        tokens: [
            Se(e)
        ]
    };
}
function Se(e) {
    return {
        type: "text",
        raw: e,
        text: e,
        escaped: false
    };
}
function Et(e, t, n) {
    return {
        ...e,
        raw: t,
        rows: n
    };
}
function xt(e, t, items) {
    return {
        ...e,
        raw: t,
        items
    };
}
function Re(e) {
    return e.type !== "space";
}
function Ie(e) {
    return e.type === "space" || e.raw.endsWith(`

`);
}
function se(e) {
    return e?.type === "paragraph";
}
function oe(e) {
    return e?.type === "list";
}
function X(e) {
    return e?.type === "table";
}
function W(e) {
    return e.map((t)=>t.raw).join("");
}
const wt = new Set([
    "iTerm.app",
    "vscode",
    "WezTerm",
    "WarpTerminal",
    "Hyper",
    "Tabby",
    "rio",
    "contour",
    "alacritty"
]);
function hdn() {
    if (a.CLAUDE_CODE_FORCE_STRIKETHROUGH) {
        return true;
    }
    let a_TERM = a.TERM;
    if (a.TERM_PROGRAM === "Apple_Terminal" || a_TERM === "linux") {
        return false;
    }
    return wt.has(a.TERM_PROGRAM ?? "") || Mx.isGhostty() || Mx.isMintty() || Mx.isJetBrainsIdeTerminal() || a.LC_TERMINAL === "iTerm2" || !!a_TERM?.includes("kitty") || !!a_TERM?.includes("alacritty") || !!a_TERM?.startsWith("foot") || !!a.KITTY_WINDOW_ID || !!a.ALACRITTY_LOG || !!a.KONSOLE_VERSION || !!a.WT_SESSION || !!a.ZED_TERM || parseInt(a.VTE_VERSION ?? "", 10) >= 4400;
}
const ydn = (e)=>`\\x1b\\[[0-9${e}]*m`;
const ie = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/;
const St = new RegExp(`(?!${ydn(";:")})${ie.source}`, "g");
const wYn = (e)=>e.replace(/\r\n?/g, `
`).replace(St, "");
function vYn(e) {
    let n = e.some((o)=>ie.test(o.raw)) ? [
        e
    ] : [];
    for (let o of n){
        for (let [i, l] of Object.entries(o)){
            let c = typeof l === "string" && i !== "href";
            if (typeof l === "object" && l !== null) {
                n.push(l);
            } else if (c) {
                Reflect.set(o, i, wYn(l));
            }
        }
    }
    let r = n.some((o)=>Object.entries(o).some(([i, l])=>i !== "href" && typeof l === "string" && l.includes("\x1B")));
    let s = n.filter((o)=>"type" in o && (o.type === "link" || o.type === "image"));
    for (let o of r ? s : []){
        Object.assign(o, {
            afterStyle: true
        });
    }
    return e;
}
const Rt = /^[ \t>]+/gm;
const It = /[ \t]+/g;
const _t = /\n{3,}/g;
function At() {
    let e = new WeakMap;
    let isAtMaxNesting = (n)=>(e.get(n) ?? 0) >= 100;
    return {
        isAtMaxNesting,
        lexLevel: (n, r)=>{
            if (isAtMaxNesting(n)) {
                return;
            }
            let o = e.get(n) ?? 0;
            e.set(n, o + 1);
            try {
                return r();
            } finally{
                e.set(n, o);
            }
        }
    };
}
const j = At();
const _e = (e)=>e.replace(Rt, (t)=>t.replace(It, " ").trimStart()).replace(_t, `

`).trimEnd();
const Nt = 6;
const Ot = 16;
const H = `
`;
const le = (e)=>({
        rows: e,
        isDone: false
    });
const Oe = (e)=>{
    if (e === "" || e.endsWith(H)) {
        return e;
    }
    return e + H;
};
const Ae = (e)=>{
    if (e === "") {
        return [];
    }
    return [
        le(e)
    ];
};
const Ce = (e)=>un(e).trim() !== "";
function Ct(e) {
    let t = ge.dim(oEo);
    return le(e.split(H).map((n)=>{
        if (Ce(n)) {
            return `${t} ${ge.italic(n)}`;
        }
        return n;
    }).join(H));
}
function Ne(e) {
    let t = `${oEo} `.repeat(Math.max(0, e)).trimEnd();
    if (t === "") {
        return "";
    }
    return `${ge.dim(t)} `;
}
function Mt(e, t, n) {
    let r = Math.min(t + 1, Ot) - n.around;
    let s = n.around === 0;
    let o = Ne(s ? 1 : r);
    let i = Ne(s ? r - 1 : 0);
    let l = s ? ge.italic : (c)=>c;
    return {
        rows: Oe(e).split(H).map((c)=>{
            if (Ce(c)) {
                return o + l(i + c);
            }
            return c;
        }).join(H),
        isDone: true
    };
}
function Pt(e) {
    let t = [];
    let n = "";
    for (let r of e){
        if (r.isDone) {
            t.push(...Ae(Oe(n)), r);
            n = "";
        } else {
            n += r.rows;
        }
    }
    return [
        ...t,
        ...Ae(n)
    ];
}
function Me(e, t, n) {
    let s = t < Nt ? Ct : (o)=>Mt(o, t, n);
    return Pt(e.flatMap((o)=>{
        if (o.type === "blockquote") {
            return Me(o.tokens ?? [], t + 1, n);
        }
        return [
            le(n.draw(o, t + 1))
        ];
    })).map((o)=>{
        if (o.isDone) {
            return o;
        }
        return s(o.rows);
    });
}
const Pe = (e, around, draw)=>Me(e, around, {
        around,
        draw
    }).map((r)=>r.rows).join("");
const m = `
`;
const Ue = new RegExp(`^[${UOn}]+`, "u");
const Dt = new RegExp(`(?:^|[^${UOn}])([${UOn}]*)$`, "u");
function ce(e) {
    let t = Dt.exec(e)?.[1]?.length ?? 0;
    if (t === 0) {
        return e;
    }
    return e.slice(0, e.length - t);
}
const je = /\x1b\]8;[^;\x07\x1b]*;([^\x07\x1b]*)(?:\x07|\x1b\\)/g;
const Wt = /\x9d|\x1b(?!\[)/;
const $t = /\x9d/g;
const Ht = /\x1b(?!\[)/g;
const B = (e)=>Array.from(e).filter((t)=>{
        let n = t.codePointAt(0) ?? 0;
        return n !== 10697 && !aC(n);
    }).join("");
const Fe = "\x1B[28m\x1B[39m\x1B[49m";
const z = (e)=>{
    if ("afterStyle" in e && e.afterStyle === true) {
        return Fe;
    }
    return "";
};
const De = (e, t)=>`${t}${B(e)}`;
const pe = (e, t, n = "")=>`${t} (${B(e)}${n})`;
const fe = (e)=>pe(e, Fe);
function k$t(e) {
    if (!e.includes("\x1B]8;")) {
        return e;
    }
    let t = [];
    let n = null;
    for (let l of e.matchAll(je)){
        let c = l.index + l[0].length;
        if (n !== null) {
            t.push({
                href: n.href,
                openEnd: n.openEnd,
                closeStart: l.index,
                closeEnd: c
            });
            n = null;
        }
        let href = l[1] ?? "";
        if (href !== "") {
            n = {
                href,
                openEnd: c
            };
        }
    }
    if (n !== null) {
        t.push({
            href: n.href,
            openEnd: n.openEnd,
            closeStart: e.length,
            closeEnd: e.length
        });
    }
    let r = "";
    let s = 0;
    let o = 0;
    let i = false;
    for (let l of t){
        let c = e.lastIndexOf("\x1B]8;", l.openEnd - 1);
        let p = ce(un(e.slice(0, c)));
        let d = o;
        o = l.closeStart;
        let b = vkr(l.href);
        let R = i;
        i = b;
        if (!b) {
            let f = un(e.slice(d, c));
            let h = f.includes(tu);
            let T = R && ce(f) === "";
            if (!h && !p.endsWith(tu) && !T) {
                continue;
            }
        } else if (!p.endsWith(tu)) {
            continue;
        }
        if (b) {
            let f = e.slice(l.openEnd, l.closeStart);
            let h = un(f).startsWith(`${tu} `) ? f.indexOf(`${tu} `) : -1;
            if (h !== -1) {
                r += e.slice(s, l.openEnd);
                r += f.slice(0, h);
                r += f.slice(h + tu.length + 1);
                s = l.closeStart;
            } else {
                let T = e.slice(s, c);
                let k = `${tu} `;
                if (T.endsWith(k)) {
                    let g = T.slice(0, -k.length);
                    if (ce(un(r + g)).endsWith(tu)) {
                        r += g;
                        s = c;
                    }
                }
            }
            continue;
        }
        let y = fe(l.href);
        let u = l.closeEnd;
        if (e.startsWith(y, u)) {
            continue;
        }
        r += e.slice(s, u) + y;
        s = u;
    }
    return r + e.slice(s);
}
class Ge {
    #e = false;
    get configured() {
        return this.#e;
    }
    set() {
        this.#e = true;
    }
    reset() {
        this.#e = false;
        Am.setOptions(Am.getDefaults());
    }
}
const We = ze(new Ge, (e)=>e.reset());
class Qe {
    #e = new Kc({
        max: 200,
        ttl: 30000
    });
    get(e) {
        return this.#e.get(e);
    }
    record(e, t) {
        this.#e.set(e, t);
    }
}
const ur = new q(()=>new Qe);
const table = d0e.prototype.table;
const blockquote = d0e.prototype.blockquote;
const list = d0e.prototype.list;
const emStrong = d0e.prototype.emStrong;
const Ke = {
    tokenizer: {
        del (e) {
            let t = /^~~(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))~~(?=[^~]|$)/.exec(e);
            let n = t?.[1];
            if (!t || n === undefined) {
                return;
            }
            return {
                type: "del",
                raw: t[0],
                text: n,
                tokens: this.lexer.inlineTokens(n)
            };
        },
        blockquote (e) {
            if (this.rules.other.blockquoteStart.test(e)) {
                return j.lexLevel(this.lexer, ()=>blockquote.call(this, e));
            }
        },
        list (e) {
            if (this.rules.block.list.test(e)) {
                return j.lexLevel(this.lexer, ()=>list.call(this, e));
            }
        },
        emStrong (e, t, n) {
            if (this.rules.inline.emStrongLDelim.test(e)) {
                return j.lexLevel(this.lexer, ()=>emStrong.call(this, e, t, n));
            }
        },
        paragraph (e) {
            let t = He(this, e);
            if (t) {
                return {
                    type: "paragraph",
                    ...t
                };
            }
            return false;
        },
        text (e) {
            let t = He(this, e);
            if (t) {
                return {
                    type: "text",
                    ...t
                };
            }
            return false;
        },
        def () {},
        lheading (e) {
            if (ee.isHeld() ? J.test(e) : ke.test(e)) {
                return false;
            }
        },
        table (e) {
            let t = this.rules.block.table.exec(e);
            if (!t) {
                return;
            }
            let n = t[0];
            let r = n.split(`
`).map(zt);
            let s = r.join(`
`);
            let o = s === n ? table.call(this, e) : table.call(this, s + e.slice(n.length));
            if (o) {
                if (Zt(r, o.header.length)) {
                    return;
                }
                if (s !== n) {
                    o.raw = n;
                }
            }
            return o;
        }
    }
};
function He(e, t) {
    if (!j.isAtMaxNesting(e.lexer) || !(e.rules.block.list.test(t) || e.rules.other.blockquoteStart.test(t))) {
        return;
    }
    let n = _e(t);
    return {
        raw: t,
        text: n,
        tokens: e.lexer.inline(n)
    };
}
function Hmt() {
    if (We.configured) {
        return;
    }
    We.set();
    Am.use(Ke);
}
const iNo = new Xle(Ke, {
    tokenizer: {
        emStrong (e) {
            if (e.startsWith("_")) {
                return undefined;
            }
            return false;
        },
        table () {},
        blockquote () {},
        hr () {},
        lheading () {},
        link () {},
        autolink () {},
        url () {},
        escape () {},
        br () {}
    }
});
function T$t(e, t, highlight = null) {
    Hmt();
    let { tokens, isWindowed } = NXe(Am, o4(e));
    let linkCap = !isWindowed && dw();
    return vYn(tokens).map((i)=>WH(i, t, {
            listDepth: 0,
            orderedListNumber: null,
            parent: null,
            highlight,
            linkCap,
            windowed: isWindowed
        })).join("").trim();
}
const jt = /\s/;
const Ft = /&(?:nbsp|#0{0,4}160|#[xX]0{0,4}[aA]0);/g;
const c0r = 32;
function _dn(e) {
    if (!e.endsWith(`
`)) {
        return false;
    }
    for(let t = e.length - 2; t >= 0; t--){
        let n = e[t];
        if (n === `
`) {
            return true;
        }
        if (!jt.test(n)) {
            return false;
        }
    }
    return false;
}
function WH(e, t, n) {
    let r = Gt(e, t, n);
    if (n.windowed && Wt.test(r)) {
        return r.replace(je, "").replace($t, "").replace(Ht, "");
    }
    return r;
}
function Gt(e, themeName, n) {
    let { listDepth = 0, orderedListNumber = null, parent = null, highlight = null, glueProse = false, screenReader = false, listIndent = "", promptMode = false, windowed, quotesAround = 0 } = n;
    let linkCap = !windowed && (n.linkCap ?? dw());
    switch(e.type){
        case "blockquote":
            return Pe(e.tokens ?? [], quotesAround, (u, quotesAround_1)=>WH(u, themeName, {
                    listDepth: 0,
                    orderedListNumber: null,
                    parent: null,
                    highlight,
                    glueProse: false,
                    linkCap,
                    windowed,
                    screenReader,
                    promptMode,
                    quotesAround: quotesAround_1
                }));
        case "code":
            {
                let u = e.lang ?? "";
                if (!u && e.codeBlockStyle !== "indented") {
                    return e.text.replace(/\S(?:.*\S)?/g, Wn("permission", themeName)) + m;
                }
                let f = u.match(/^[\w.+#-]+/)?.[0] ?? "";
                let language = highlight && u && highlight.supportsLanguage(u) ? u : highlight && f && highlight.supportsLanguage(f) ? f : "plaintext";
                let T = u && !highlight?.supportsLanguage(u) ? ge.dim(u) + m : "";
                if (!highlight) {
                    return T + e.text + m;
                }
                return T + highlight.highlight(e.text, {
                    language
                }) + m;
            }
        case "codespan":
            return Wn("permission", themeName)(e.text);
        case "em":
            return ge.italic((e.tokens ?? []).map((u)=>WH(u, themeName, {
                    listDepth: 0,
                    orderedListNumber: null,
                    parent,
                    highlight,
                    glueProse,
                    linkCap,
                    windowed,
                    promptMode
                })).join(""));
        case "strong":
            return ge.bold((e.tokens ?? []).map((u)=>WH(u, themeName, {
                    listDepth: 0,
                    orderedListNumber: null,
                    parent,
                    highlight,
                    glueProse,
                    linkCap,
                    windowed,
                    promptMode
                })).join(""));
        case "del":
            {
                let u = (e.tokens ?? []).map((f)=>WH(f, themeName, {
                        listDepth: 0,
                        orderedListNumber: null,
                        parent,
                        highlight,
                        glueProse,
                        linkCap,
                        windowed,
                        promptMode
                    })).join("");
                if (hdn() && ge.level > 0) {
                    return ge.strikethrough(u);
                }
                return `~~${u}~~`;
            }
        case "heading":
            {
                let u = (e.tokens ?? []).map((h)=>WH(h, themeName, {
                        listDepth: 0,
                        orderedListNumber: null,
                        parent: null,
                        highlight,
                        glueProse: false,
                        linkCap,
                        windowed,
                        promptMode
                    })).join("");
                return (e.depth === 1 ? ge.bold.italic.underline : ge.bold)(k$t(u)) + m + m;
            }
        case "hr":
            return `---${m}`;
        case "image":
            {
                if (!e.text && !e.title) {
                    return De(e.href, z(e));
                }
                let u = e.title ? ` "${e.title}"` : "";
                let f = pe(e.href, z(e), u);
                if (e.text) {
                    return `${e.text}${f}`;
                }
                return f.replace(" (", "(");
            }
        case "link":
            {
                let u = e.title ? ` ("${e.title}")` : "";
                if (/^mailto:/i.test(e.href)) {
                    let _ = e.href.replace(/^mailto:/i, "");
                    let G = z(e);
                    return (e.text && e.text !== B(_) ? `${e.text}${pe(_, G)}` : De(_, G)) + u;
                }
                let f = linkCap ? Xt(e.href) : null;
                let h = "defanged" in e && e.defanged === true;
                let T = f !== null && !h;
                let shownUrlStart = z(e);
                let g = T ? f : B(f ?? e.href);
                let L = (e.tokens ?? []).map((_)=>WH(_, themeName, {
                        listDepth: 0,
                        orderedListNumber: null,
                        parent: e,
                        highlight,
                        glueProse: false,
                        linkCap,
                        windowed,
                        promptMode
                    })).join("");
                let E = un(L);
                let w = vkr(e.href);
                let S = Boolean(E && E !== e.href);
                let I = (_)=>_.replace(Ue, "").startsWith(tu);
                let P = I(E) || I(e.text ?? "");
                let x = E.includes(tu) || (e.text ?? "").includes(tu);
                if (w && S) {
                    let _ = Array.from(E).filter((Ze)=>{
                        let Q = Ze.codePointAt(0) ?? 0;
                        if (Q === 8205 || Q >= 65024 && Q <= 65039) {
                            return true;
                        }
                        return !aC(Q);
                    }).join("");
                    let G = P ? _ : rEo(_);
                    return cw(g, G, {
                        themeName,
                        supportsHyperlinks: T,
                        shownUrlStart
                    }) + (T && e.title ? fe(g) : "") + u;
                }
                let F = !S || vBr(g, E);
                let O = T && F ? shownUrlStart : "";
                let Z = O === "" ? L : B(E);
                let v = S ? Z : T ? B(e.href) : g;
                let C = cw(g, v, {
                    themeName,
                    supportsHyperlinks: T,
                    shownUrlStart
                });
                let V = !w && x || Boolean(e.title);
                if (T && S && V) {
                    return O + C + fe(g) + u;
                }
                return O + (w ? rEo(C) : C) + u;
            }
        case "list":
            return e.items.map((u, f)=>WH(u, themeName, {
                    listDepth,
                    orderedListNumber: e.ordered ? e.start + f : null,
                    parent: e,
                    highlight,
                    glueProse: false,
                    linkCap,
                    windowed,
                    screenReader,
                    listIndent,
                    promptMode,
                    quotesAround
                })).join("");
        case "list_item":
            {
                let f = (promptMode && orderedListNumber !== null ? /^ *(\d+[.)])/.exec(e.raw)?.[1] : undefined) ?? u0r(listDepth, orderedListNumber !== null && parent?.type === "list" ? {
                    number: orderedListNumber,
                    ...d0r(parent)
                } : null);
                let h = listIndent + Ei(" ", ae(f) + 1);
                let listIndent_1 = Ei(" ", Math.min(h.length, c0r));
                let k = e.tokens ? EYn(e) : e;
                let g = k.tokens ?? [];
                let L = g.findIndex((x)=>x.type !== "space");
                let E = L === -1 ? [] : g.slice(L);
                let w = E[0];
                let S = w !== undefined && (w.type === "code" || w.type === "blockquote" || w.type === "hr" || w.type === "table" || w.type === "list");
                let I = !S;
                let P = E.map((x)=>{
                    let F = x.type === "blockquote" ? Xe(x) : undefined;
                    let O = WH(F ?? x, themeName, {
                        listDepth: listDepth + 1,
                        orderedListNumber,
                        parent: k,
                        highlight,
                        glueProse: false,
                        linkCap,
                        windowed,
                        screenReader,
                        listIndent: listIndent_1,
                        promptMode,
                        quotesAround
                    });
                    if (x.type === "code" && O === m) {
                        return "";
                    }
                    if (x.type === "code" || x.type === "blockquote" || x.type === "hr" || x.type === "table" || x.type === "list" || x.type === "space") {
                        if (x.type === "blockquote" && F === undefined || x.type === "hr" || x.type === "table") {
                            return O.replace(/^\n+/, "");
                        }
                        return O;
                    }
                    let Z = I ? `${listIndent}${f} ` : h;
                    I = false;
                    let v = O.split(m).map((C, V)=>{
                        if (V === 0) {
                            return Z + C;
                        }
                        if (C === "") {
                            return C;
                        }
                        return h + C;
                    }).join(m);
                    if (x.type === "html" && !v.endsWith(m)) {
                        return v + m;
                    }
                    return v;
                }).join("");
                if (I || S) {
                    return `${listIndent}${f}${m}${P}`;
                }
                return P;
            }
        case "paragraph":
            return k$t((e.tokens ?? []).map((u)=>WH(u, themeName, {
                    listDepth: 0,
                    orderedListNumber: null,
                    parent: null,
                    highlight,
                    glueProse: false,
                    linkCap,
                    windowed,
                    promptMode
                })).join("")) + m;
        case "space":
            return m;
        case "br":
            return m;
        case "text":
            {
                if (parent?.type === "link") {
                    return e.text;
                }
                let u = !promptMode && e.escaped === false ? e.text.replace(Ft, " ") : e.text;
                if (parent?.type === "list_item") {
                    let h = e.tokens ? k$t(e.tokens.map((g)=>WH(g, themeName, {
                            listDepth,
                            orderedListNumber,
                            parent: e,
                            highlight,
                            glueProse: true,
                            linkCap,
                            windowed,
                            promptMode
                        })).join("")) : ve(Be(u, themeName, linkCap, parent, promptMode));
                    let T = parent.tokens?.[0] === e;
                    return `${parent.task && T ? `[${parent.checked ? "x" : " "}] ` : ""}${h}${m}`;
                }
                let f = Be(u, themeName, linkCap, parent, promptMode);
                if (glueProse) {
                    return ve(f);
                }
                return f;
            }
        case "table":
            {
                let f = (g)=>k$t(g?.map((L)=>WH(L, themeName, {
                            listDepth: 0,
                            orderedListNumber: null,
                            parent: null,
                            highlight,
                            glueProse: false,
                            linkCap,
                            windowed,
                            promptMode
                        })).join("") ?? "");
                let h = (g)=>un(f(g));
                let u = e;
                if (screenReader) {
                    return p0r(u.header.map((g)=>h(g.tokens)), u.rows.map((g)=>g.map((L)=>h(L.tokens)))) + m + m;
                }
                let T = u.header.map((g, L)=>{
                    let E = ae(h(g.tokens));
                    for (let w of u.rows){
                        let S = ae(h(w[L]?.tokens));
                        E = Math.max(E, S);
                    }
                    return Math.max(E, 3);
                });
                let k = "| ";
                u.header.forEach((g, L)=>{
                    let E = f(g.tokens);
                    let w = h(g.tokens);
                    let S = T[L];
                    let I = u.align?.[L];
                    k += `${kYn(E, ae(w), S, I)} | `;
                });
                k = k.trimEnd() + m;
                k += "|";
                T.forEach((g)=>{
                    let L = "-".repeat(g + 2);
                    k += `${L}|`;
                });
                k += m;
                u.rows.forEach((g)=>{
                    k += "| ";
                    g.forEach((L, E)=>{
                        let w = f(L.tokens);
                        let S = h(L.tokens);
                        let I = T[E];
                        let P = u.align?.[E];
                        k += `${kYn(w, ae(S), I, P)} | `;
                    });
                    k = k.trimEnd() + m;
                });
                return k + m;
            }
        case "escape":
            return e.text;
        case "html":
            return e.text;
        case "def":
            return "";
    }
    return e.raw;
}
const Qt = /(^|[^\w./-])([A-Za-z0-9][\w-]*\/[A-Za-z0-9][\w.-]*)#(\d+)\b/g;
const Kt = new Set([
    "gitlab.com",
    "bitbucket.org",
    "codeberg.org",
    "gitea.com",
    "git.sr.ht",
    "dev.azure.com"
]);
const qe = /^[a-z][a-z0-9+.-]*:/i;
function qt(href, t) {
    let n = qe.exec(href)?.[0];
    if (n !== undefined) {
        return !t.has(n.slice(0, -1).toLowerCase());
    }
    let r = href.split(/[/?#]/, 1)[0] ?? "";
    return !/^[A-Za-z0-9._~-]*$/.test(r);
}
function bdn(e, t) {
    for (let n of e){
        if (n.type === "link" && qt(n.href, t)) {
            n.defanged = true;
        }
        if (n.type === "table") {
            let r = n;
            for (let s of [
                ...r.header,
                ...r.rows.flat()
            ]){
                bdn(s.tokens, t);
            }
        } else if (n.type === "list") {
            for (let r of n.items){
                bdn(r.tokens, t);
            }
        } else if ("tokens" in n && Array.isArray(n.tokens)) {
            bdn(n.tokens, t);
        }
    }
}
function Xt(href) {
    let t = YRn(href);
    if (t === null || eG.test(t) || Ue.test(t) || t !== t.trimEnd()) {
        return null;
    }
    if (qe.test(t)) {
        return t;
    }
    let n = woo(t);
    let r = n.some((s)=>/^file:/i.test(boo(s)));
    if (nfr(t, n) || r) {
        return null;
    }
    return t;
}
function zt(e) {
    if (!e.includes("`") || !e.includes("|")) {
        return e;
    }
    let t = [];
    let n = [];
    for(let c = 0; c < e.length;){
        if (e[c] !== "`") {
            c++;
            continue;
        }
        let p = 0;
        while(e[c + p] === "`"){
            p++;
        }
        t.push(c);
        n.push(p);
        c += p;
    }
    let r = Array(t.length).fill(-1);
    let s = new Map;
    for(let c = t.length - 1; c >= 0; c--){
        let p = s.get(n[c]);
        if (p !== undefined) {
            r[c] = p;
        }
        s.set(n[c], c);
    }
    let o = "";
    let i = 0;
    let l = 0;
    while(i < e.length){
        if (e[i] !== "`") {
            o += e[i++];
            continue;
        }
        let c = n[l];
        let p = e.slice(i, i + c);
        let d = r[l];
        if (d === -1) {
            o += p;
            i += c;
            l++;
            continue;
        }
        let b = t[d];
        o += p;
        let R = 0;
        for(let y = i + c; y < b; y++){
            let u = e[y];
            if (u === "\\") {
                R++;
                o += u;
                continue;
            }
            if (u === "|") {
                o += R % 2 === 0 ? "\\|" : "|";
            } else {
                o += u;
            }
            R = 0;
        }
        o += p;
        i = b + c;
        l = d + 1;
    }
    return o;
}
function Zt(e, t) {
    for(let n = 2; n < e.length; n++){
        let r = Vt(e[n]);
        for(let s = t; s < r.length; s++){
            if (r[s].trim()) {
                return true;
            }
        }
    }
    return false;
}
function Vt(e) {
    let n = e.replace(/\|/g, (r, s, o)=>{
        let i = false;
        let l = s;
        while(--l >= 0 && o[l] === "\\"){
            i = !i;
        }
        if (i) {
            return "|";
        }
        return " |";
    }).split(/ \|/);
    if (!n[0]?.trim()) {
        n.shift();
    }
    if (n.length > 0 && !n.at(-1)?.trim()) {
        n.pop();
    }
    return n;
}
function Be(e, themeName, linkCap, parent, promptMode) {
    if (promptMode) {
        return e;
    }
    return Yt(Jt(e, themeName, linkCap), themeName, linkCap, parent);
}
function Yt(e, t, n = dw(), r) {
    return e;
}
function Jt(e, themeName, n = dw()) {
    if (!n) {
        return e;
    }
    if (!e.includes("#")) {
        return e;
    }
    let r = bCr();
    let s = r !== null && IP(r) === "gitlab";
    if (!s && r !== null && Kt.has(i8e(r))) {
        return e;
    }
    let o = r ?? nr;
    let i = s ? "/-/issues/" : "/issues/";
    return e.replace(Qt, (l, c, p, d)=>c + cw(`https://${o}/${p}${i}${d}`, `${p}#${d}`, {
            themeName,
            supportsHyperlinks: n
        }));
}
function en(e) {
    let t = "";
    while(e > 0){
        e--;
        t = String.fromCharCode(97 + e % 26) + t;
        e = Math.floor(e / 26);
    }
    return t;
}
const tn = [
    [
        1000,
        "m"
    ],
    [
        900,
        "cm"
    ],
    [
        500,
        "d"
    ],
    [
        400,
        "cd"
    ],
    [
        100,
        "c"
    ],
    [
        90,
        "xc"
    ],
    [
        50,
        "l"
    ],
    [
        40,
        "xl"
    ],
    [
        10,
        "x"
    ],
    [
        9,
        "ix"
    ],
    [
        5,
        "v"
    ],
    [
        4,
        "iv"
    ],
    [
        1,
        "i"
    ]
];
function nn(e) {
    let t = "";
    for (let [n, r] of tn){
        while(e >= n){
            t += r;
            e -= n;
        }
    }
    return t;
}
function ve(e) {
    return e.replace(/ (\d{1,9}[.)])(?!\w)/g, "\xA0$1");
}
function d0r(e) {
    let first = e.start === "" ? 1 : e.start;
    return {
        first,
        last: first + e.items.length - 1
    };
}
function EYn(e) {
    let tokens = e.tokens.map((n)=>{
        if (n.type !== "list" || !n.ordered) {
            return n;
        }
        let r = [];
        for (let o of n.items){
            let i = /^ *(\d{1,9}[.)])/.exec(o.raw)?.[1];
            if (o.tokens.length > 0 || i === undefined) {
                return n;
            }
            r.push(i);
        }
        let s = r.join(`
`);
        return {
            type: "text",
            raw: s,
            text: s
        };
    });
    if (tokens.every((n, r)=>n === e.tokens[r])) {
        return e;
    }
    return {
        ...e,
        tokens
    };
}
function Xe(e) {
    let t = e.tokens.findIndex((s)=>s.type !== "space" && !(s.type === "code" && s.text === "" && !s.lang));
    let n = e.tokens[t];
    let r = n?.type === "blockquote" ? Xe(n) : n?.type === "code" && n.text !== "" ? n : undefined;
    return r && {
        ...e,
        tokens: [
            r,
            ...e.tokens.slice(t + 1)
        ]
    };
}
function u0r(e, t) {
    if (t === null) {
        return "-";
    }
    return `${rn(e + 1, t)}.`;
}
function rn(e, { number, first, last }) {
    switch(e){
        case 2:
            if (first >= 1) {
                return en(number);
            }
            return number.toString();
        case 3:
            if (first >= 1 && last <= 3999) {
                return nn(number);
            }
            return number.toString();
        default:
            return number.toString();
    }
}
function kYn(e, t, n, r) {
    let s = Math.max(0, n - t);
    if (r === "center") {
        let o = Math.floor(s / 2);
        return " ".repeat(o) + e + Ei(" ", s - o);
    }
    if (r === "right") {
        return " ".repeat(s) + e;
    }
    return e + " ".repeat(s);
}
function p0r(e, t) {
    function n(i) {
        return i.replace(/\s+/g, " ").trim();
    }
    function r(i) {
        if (/[.!?\u2026]["')\]]*$/.test(i)) {
            return i;
        }
        return `${i}.`;
    }
    function s(i) {
        return i.map((l, c)=>{
            let p = n(e[c] ?? "");
            let d = n(l);
            if (!p && !d) {
                return null;
            }
            return r(p ? `${p}: ${d}` : d);
        }).filter((l)=>l !== null).join(" ");
    }
    return (t.length > 0 ? t.map(s) : [
        e.map(n).filter(Boolean).map(r).join(" ")
    ]).filter((i)=>i.length > 0).join(m);
}
export { hdn, rNo, SYn, NXe, oNo, sNo, ydn, wYn, vYn, k$t, Hmt, iNo, T$t, c0r, _dn, WH, bdn, d0r, EYn, u0r, kYn, p0r };
