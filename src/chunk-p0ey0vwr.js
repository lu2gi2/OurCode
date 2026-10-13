import { ot, Lq, l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { un, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ei, I, Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { Am, ST as renderEvent, vdr, gPn, hPn, yPn, bPn, eTt, nTt, v6t, oqe, frt, E6t, Adr, T6t, $eo, Nos, Mdr, ILs, $os, OLs, hrt, RL, MPn, x$, Uos, O6t, UPn, BPn, WPn, sqe, sur, yrt, pTt, rce } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Hi, on, nt, yj, s, n, Wt, Do, zH, yA, kc, QYn, ZYn, _A, Ks } from "/$bunfs/root/chunk-8524cxt8.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Zw } from "/$bunfs/root/chunk-p2nmcfaz.js";
import { Re } from "/$bunfs/root/chunk-3my1j42p.js";
import { dje } from "/$bunfs/root/chunk-5d7a6f0c.js";
import { MC, M8n, PWo, TBt } from "/$bunfs/root/chunk-ezr23nse.js";
import { YO, hr } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { xN } from "/$bunfs/root/chunk-3yz9zdww.js";
import { ae, Nu, pt } from "/$bunfs/root/chunk-223dyewd.js";
import { tPe } from "/$bunfs/root/chunk-zwxj12s4.js";
import { jYt, WYt } from "/$bunfs/root/chunk-rk838m7w.js";
import { I7r, qt, Cc, km, le, Te, P, en, Z, R, y, Rt, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { nx, hje, Udn, QP, z$t, Qy } from "/$bunfs/root/chunk-4nfvaqps.js";
import { INo, ONo, HNo } from "/$bunfs/root/chunk-wmhgfdy3.js";
import { SU } from "/$bunfs/root/chunk-esj4mtp8.js";
import { rNo, SYn, NXe, oNo, sNo, wYn, vYn, k$t, Hmt, iNo, c0r, _dn, WH, bdn, d0r, EYn, u0r, kYn, p0r } from "/$bunfs/root/chunk-yhdmzwqh.js";
import { Wnr, akn, rhe, $0s, F0s, Ahe, o4 } from "/$bunfs/root/chunk-kasbfbhj.js";
import { st } from "/$bunfs/root/chunk-45f0zf8d.js";
import { Me } from "/$bunfs/root/chunk-b97fvbrv.js";
import { er, Toe, DYe, uF } from "/$bunfs/root/chunk-30jbnw20.js";
import { Z3, Ri, e5 } from "/$bunfs/root/chunk-z56h13z4.js";
import { knt } from "/$bunfs/root/chunk-em70188r.js";
import { fSr } from "/$bunfs/root/chunk-rvt09mwm.js";
import { ns } from "/$bunfs/root/chunk-2mjaqpws.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { DXe, IS } from "/$bunfs/root/chunk-s95be3d6.js";
import { Vq } from "/$bunfs/root/chunk-b3rwa6cx.js";
import { wy } from "/$bunfs/root/chunk-z47a2vff.js";
import { Sr } from "/$bunfs/root/chunk-m52bdn6c.js";
import { mj } from "/$bunfs/root/chunk-xpwdmrx0.js";
import { Lc } from "/$bunfs/root/chunk-wvwcne5b.js";
import { Bje, vpn, cBo, dBo } from "/$bunfs/root/chunk-dhqdddxp.js";
import { Omt } from "/$bunfs/root/chunk-1kst8web.js";
import { ql } from "/$bunfs/root/chunk-snyys9as.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { eg } from "/$bunfs/root/chunk-gwx5yf2x.js";
import { Grt } from "/$bunfs/root/chunk-1evd9xcd.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { tU } from "/$bunfs/root/chunk-m007m726.js";
import { Mr, S, Sn } from "/$bunfs/root/chunk-cj4xndke.js";
import { unlink, writeFile } from "fs/promises";
N();
const Vo = "a boundary caught a throw (message not reported)";
class V0 extends I7r {
    constructor(o){
        super(o);
        this.state = {
            hasError: false,
            resetKey: o.resetKey
        };
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    static getDerivedStateFromProps(o, i) {
        if (Object.is(o.resetKey, i.resetKey)) {
            return null;
        }
        return {
            hasError: false,
            resetKey: o.resetKey
        };
    }
    componentDidCatch(o, i) {
        let p = this.reported(o);
        if (p !== null) {
            c(p);
        }
        try {
            this.props.onError?.(o, i);
        } catch (error) {
            t(`SentryErrorBoundary: onError threw: ${error instanceof Error ? error.message : "a value that is no error"}`, {
                level: "error"
            });
        }
    }
    reported(o) {
        if (this.props.telemetryMessage === undefined) {
            return o;
        }
        let i = this.messageAsked(this.props.telemetryMessage);
        if (i === null) {
            return null;
        }
        let p = ot(o, i);
        if (Lq(p) === undefined) {
            return ot(Error("a value that takes no telemetry message was thrown"), i);
        }
        return p;
    }
    messageAsked(o) {
        try {
            return o();
        } catch  {
            return Vo;
        }
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? null;
        }
        return this.props.children;
    }
}
N();
N();
function cn(Y) {
    return Y.trim();
}
const He = 4;
const Ee = 3;
const zo = 4;
const gr = 200;
function Ve(truncatedCount) {
    return `\u2026 ${truncatedCount.toLocaleString()} more ${I(truncatedCount, "row")} not shown`;
}
const kr = "\x1B[1m";
const wr = "\x1B[22m";
function ce(o, i, p) {
    if (i <= 0) {
        return [
            o
        ];
    }
    let a = o.trimEnd();
    let f = Nu(a, i, {
        hard: p?.hard ?? false,
        trim: false,
        wordWrap: true
    }).split(`
`).filter((u)=>u.length > 0);
    if (f.length > 0) {
        return f;
    }
    return [
        ""
    ];
}
const Tt = km(function(i) {
    let T = w(15);
    let { token, highlight, forceWidth, linkCap, isWindowed } = i;
    let [d] = hr();
    let { columns } = ns(ke());
    let g = nt();
    let terminalWidth = forceWidth ?? columns;
    let C;
    if (T[0] !== highlight || T[1] !== g || T[2] !== isWindowed || T[3] !== linkCap || T[4] !== terminalWidth || T[5] !== d || T[6] !== token) {
        C = Lr(token, terminalWidth, d, highlight, linkCap, g, isWindowed);
        T[0] = highlight;
        T[1] = g;
        T[2] = isWindowed;
        T[3] = linkCap;
        T[4] = terminalWidth;
        T[5] = d;
        T[6] = token;
        T[7] = C;
    } else {
        C = T[7];
    }
    let k = C;
    if (k.kind === "ansi") {
        let b;
        if (T[8] !== k.text) {
            b = e(Do, {
                children: k.text
            });
            T[8] = k.text;
            T[9] = b;
        } else {
            b = T[9];
        }
        return b;
    }
    let b;
    if (T[10] !== k.headers || T[11] !== k.rows || T[12] !== k.truncatedCount || T[13] !== terminalWidth) {
        b = e(wt, {
            headers: k.headers,
            rows: k.rows,
            terminalWidth,
            truncatedCount: k.truncatedCount
        });
        T[10] = k.headers;
        T[11] = k.rows;
        T[12] = k.truncatedCount;
        T[13] = terminalWidth;
        T[14] = b;
    } else {
        b = T[14];
    }
    return b;
});
function Lr(token, terminalWidth, p, highlight, linkCap, f, windowed) {
    let truncatedCount = Math.max(0, token.rows.length - gr);
    let x = truncatedCount > 0 ? token.rows.slice(0, gr) : token.rows;
    let g = new Map;
    function h(M) {
        let O = g.get(M);
        if (O !== undefined) {
            return O;
        }
        let B = k$t(M?.map((j)=>WH(j, p, {
                listDepth: 0,
                orderedListNumber: null,
                parent: null,
                highlight,
                glueProse: false,
                linkCap,
                windowed
            })).join("") ?? "");
        g.set(M, B);
        return B;
    }
    function T(M) {
        return un(h(M));
    }
    if (f) {
        let M = p0r(token.header.map((O)=>T(O.tokens)), x.map((O)=>O.map((B)=>T(B.tokens))));
        if (truncatedCount > 0) {
            M += `
${Ve(truncatedCount)}`;
        }
        return {
            kind: "ansi",
            text: M
        };
    }
    function C(M) {
        let B = T(M).split(/\s+/).filter((j)=>j.length > 0);
        if (B.length === 0) {
            return Ee;
        }
        return Math.max(...B.map((j)=>ae(j)), Ee);
    }
    function k(M) {
        return Math.max(ae(T(M)), Ee);
    }
    let b = token.header.map((M, O)=>{
        let B = C(M.tokens);
        for (let j of x){
            B = Math.max(B, C(j[O]?.tokens));
        }
        return B;
    });
    let H = token.header.map((M, O)=>{
        let B = k(M.tokens);
        for (let j of x){
            B = Math.max(B, k(j[O]?.tokens));
        }
        return B;
    });
    let length = token.header.length;
    let E = 1 + length * 3;
    let L = Math.max(terminalWidth - E - He, length * Ee);
    let A = b.reduce((acc, item)=>acc + item, 0);
    let K = H.reduce((acc, item)=>acc + item, 0);
    let hard = false;
    let F;
    if (K <= L) {
        F = H;
    } else if (A <= L) {
        let M = L - A;
        let O = H.map((j, Q)=>j - b[Q]);
        let B = O.reduce((acc, item)=>acc + item, 0);
        F = b.map((j, Q)=>{
            if (B === 0) {
                return j;
            }
            let re = Math.floor(O[Q] / B * M);
            return j + re;
        });
    } else {
        hard = true;
        let M = L / A;
        F = b.map((O)=>Math.max(Math.floor(O * M), Ee));
    }
    function _() {
        let M = 1;
        for(let O = 0; O < token.header.length; O++){
            let B = h(token.header[O].tokens);
            let j = ce(B, F[O], {
                hard
            });
            M = Math.max(M, j.length);
        }
        for (let O of x){
            for(let B = 0; B < O.length; B++){
                let j = h(O[B]?.tokens);
                let Q = ce(j, F[B], {
                    hard
                });
                M = Math.max(M, Q.length);
            }
        }
        return M;
    }
    let V = _() > zo;
    function Y() {
        return {
            kind: "vertical",
            headers: token.header.map((M)=>T(M.tokens).trim()),
            rows: x.map((M)=>M.map((O)=>h(O.tokens))),
            truncatedCount
        };
    }
    function oe(M, O) {
        let B = M.map((J, ie)=>{
            let ne = h(J.tokens);
            let U = F[ie];
            return ce(ne, U, {
                hard
            });
        });
        let j = Math.max(...B.map((J)=>J.length), 1);
        let Q = B.map((J)=>Math.floor((j - J.length) / 2));
        let re = [];
        for(let J = 0; J < j; J++){
            let ie = "│";
            for(let ne = 0; ne < M.length; ne++){
                let U = B[ne];
                let X = Q[ne];
                let se = J - X;
                let me = se >= 0 && se < U.length ? U[se] : "";
                let fe = F[ne];
                let ye = O ? "center" : token.align?.[ne] ?? "left";
                ie += ` ${kYn(me, ae(me), fe, ye)} │`;
            }
            re.push(ie);
        }
        return re;
    }
    function te(M) {
        let [O, B, j, Q] = {
            top: [
                "┌",
                "─",
                "┬",
                "┐"
            ],
            middle: [
                "├",
                "─",
                "┼",
                "┤"
            ],
            bottom: [
                "└",
                "─",
                "┴",
                "┘"
            ]
        }[M];
        let re = O;
        F.forEach((J, ie)=>{
            re += B.repeat(J + 2);
            re += ie < F.length - 1 ? j : Q;
        });
        return re;
    }
    if (V) {
        return Y();
    }
    let z = [];
    z.push(te("top"));
    z.push(...oe(token.header, true));
    z.push(te("middle"));
    x.forEach((M, O)=>{
        z.push(...oe(M, false));
        if (O < x.length - 1) {
            z.push(te("middle"));
        }
    });
    z.push(te("bottom"));
    let pe = 0;
    for (let M of z){
        let O = ae(un(M));
        if (O > pe) {
            pe = O;
        }
    }
    if (pe > terminalWidth - He) {
        return Y();
    }
    if (truncatedCount > 0) {
        z.push(Ve(truncatedCount));
    }
    return {
        kind: "ansi",
        text: z.join(`
`)
    };
}
function wt(o) {
    let f = w(9);
    let { headers, rows, terminalWidth, truncatedCount } = o;
    let u;
    if (f[0] !== headers || f[1] !== rows || f[2] !== terminalWidth || f[3] !== truncatedCount) {
        u = [];
        let d = Math.min(terminalWidth - 1, 40);
        let x = Ei("─", d);
        rows.forEach((g)=>{
            let h = [];
            g.forEach((T, C)=>{
                let k = headers[C] || "";
                let b = T.trimEnd().replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
                if (!k && !b) {
                    return;
                }
                let H = k ? terminalWidth - ae(k) - 3 : terminalWidth - 1;
                let G = terminalWidth - 2 - 1;
                let E = ce(b, Math.max(H, 10));
                let L = E[0] || "";
                let A;
                if (E.length <= 1) {
                    A = E;
                } else {
                    let K = E.slice(1).map(cn).join(" ");
                    let W = ce(K, G);
                    A = [
                        L,
                        ...W
                    ];
                }
                h.push(k ? `${kr}${k}:${wr} ${A[0] || ""}` : A[0] || "");
                for(let F = 1; F < A.length; F++){
                    let _ = A[F];
                    if (!_.trim()) {
                        continue;
                    }
                    h.push(`${_}`);
                }
            });
            if (h.length === 0) {
                return;
            }
            if (u.length > 0) {
                u.push(x);
            }
            u.push(...h);
        });
        if (truncatedCount > 0) {
            if (u.length > 0) {
                u.push(x);
            }
            let q;
            if (f[5] !== truncatedCount) {
                q = Ve(truncatedCount);
                f[5] = truncatedCount;
                f[6] = q;
            } else {
                q = f[6];
            }
            u.push(q);
        }
        f[0] = headers;
        f[1] = rows;
        f[2] = terminalWidth;
        f[3] = truncatedCount;
        f[4] = u;
    } else {
        u = f[4];
    }
    const q = u.join(`
`);
    let V;
    if (f[7] !== q) {
        V = e(Do, {
            children: q
        });
        f[7] = q;
        f[8] = V;
    } else {
        V = f[8];
    }
    return V;
}
const Ar = 10;
const Nr = 2;
function dn(indent, i, room) {
    let rowIndent = Math.max(0, Math.min(indent, room - Nr));
    let markerCell = Math.max(Nr, Math.min(i, room - rowIndent));
    return {
        rowIndent,
        markerCell
    };
}
const bt = 300;
const xn = 64;
function Dr(o) {
    return o.type === "code" || o.type === "blockquote" || o.type === "hr" || o.type === "table";
}
function Wr(o) {
    let i = 0;
    let p = [];
    for (let a of o){
        if (a.type === "list") {
            p.push({
                list: a,
                depth: 1
            });
        }
    }
    for(let a = p.pop(); a; a = p.pop()){
        if (a.depth > xn) {
            return false;
        }
        for (let m of a.list.items){
            if (++i > bt) {
                return false;
            }
            let f = true;
            for (let u of EYn(m).tokens){
                if (u.type === "list") {
                    p.push({
                        list: u,
                        depth: a.depth + 1
                    });
                    f = false;
                } else if (Dr(u)) {
                    if (++i > bt) {
                        return false;
                    }
                    f = false;
                } else if (u.type !== "space" && !f) {
                    if (++i > bt) {
                        return false;
                    }
                    f = true;
                }
            }
        }
    }
    return true;
}
function St(o) {
    let a = w(3);
    let { columns } = ns(ke());
    let room = Math.min(columns - He, o.maxProseWidth ?? Infinity) - Ar;
    let m;
    if (a[0] !== o || a[1] !== room) {
        m = e(Ct, {
            indent: 0,
            listDepth: 0,
            room,
            ...o
        });
        a[0] = o;
        a[1] = room;
        a[2] = m;
    } else {
        m = a[2];
    }
    return m;
}
function Ct({ token, blankLineBefore, ...rest }) {
    let a = d0r(token);
    return token.items.map((item, f)=>e(gn, {
            item,
            marker: u0r(rest.listDepth, token.ordered ? {
                number: a.first + f,
                ...a
            } : null),
            blankLineBefore: f === 0 ? blankLineBefore : _r(token.items[f - 1]),
            ...rest,
            tailWrap: f === token.items.length - 1 ? rest.tailWrap : undefined
        }, f));
}
function _r(o) {
    let i = o.tokens.at(-1);
    if (i?.type === "space" || i?.type === "heading" || i?.type === "table") {
        return true;
    }
    if (i?.type === "list") {
        let p = i.items.at(-1);
        if (p) {
            return _r(p);
        }
        return false;
    }
    return i?.type === "html" && _dn(i.raw);
}
function gn({ item, marker, indent, listDepth, blankLineBefore, theme, highlight, dimColor, italic, linkCap, isWindowed, tailWrap, room, maxProseWidth }) {
    let parent = EYn(item);
    let H = [];
    for (let _ of parent.tokens){
        if (_.type === "list") {
            H.push({
                kind: "list",
                token: _
            });
            continue;
        }
        let q = WH(_, theme, {
            listDepth: listDepth + 1,
            orderedListNumber: null,
            parent,
            highlight,
            glueProse: false,
            linkCap,
            windowed: isWindowed
        });
        if (Dr(_)) {
            H.push({
                kind: "block",
                text: q,
                code: _.type === "code"
            });
            continue;
        }
        let V = H.at(-1);
        if (V?.kind === "inline") {
            V.text += q;
        } else {
            H.push({
                kind: "inline",
                text: q
            });
        }
    }
    if (H[0]?.kind !== "inline") {
        H.unshift({
            kind: "inline",
            text: ""
        });
    }
    let G = ae(marker) + 1;
    let indent_1 = Math.min(indent + G, c0r);
    let { rowIndent, markerCell } = dn(indent, G, room);
    let K = [];
    let blankLineBefore_1 = blankLineBefore;
    let F = H.length - 1;
    H.forEach((_, q)=>{
        let V = q === F ? tailWrap : undefined;
        if (_.kind === "inline") {
            let Y = _.text.startsWith(`
`);
            let oe = _dn(_.text);
            let te = _.text.replace(/^\n+/, "").trimEnd();
            if (!te && q > 0) {
                blankLineBefore_1 ||= _.text.includes(`
`);
                return;
            }
            let z = q === 0;
            K.push(r(s, {
                flexDirection: "row",
                marginTop: blankLineBefore_1 || !z && Y ? 1 : 0,
                paddingLeft: z ? rowIndent : rowIndent + markerCell,
                maxWidth: maxProseWidth,
                children: [
                    z && e(s, {
                        width: markerCell,
                        flexShrink: 0,
                        children: e(n, {
                            dimColor,
                            italic,
                            children: marker
                        })
                    }),
                    e(Do, {
                        dimColor,
                        italic,
                        wrap: V,
                        children: te
                    })
                ]
            }, q));
            blankLineBefore_1 = oe;
        } else if (_.kind === "block") {
            K.push(e(s, {
                marginTop: blankLineBefore_1 ? 1 : 0,
                children: e(Do, {
                    dimColor,
                    italic,
                    wrap: V,
                    children: _.code ? _.text.replace(/\n$/, "") : _.text.replace(/^\n+/, "").trimEnd()
                })
            }, q));
            blankLineBefore_1 = false;
        } else {
            K.push(e(Ct, {
                token: _.token,
                blankLineBefore: blankLineBefore_1,
                indent: indent_1,
                listDepth: listDepth + 1,
                room,
                theme,
                highlight,
                dimColor,
                italic,
                linkCap,
                isWindowed,
                tailWrap: V,
                maxProseWidth
            }, q));
            blankLineBefore_1 = false;
        }
    });
    return K;
}
function Dn(V) {
    return V.fullWidth;
}
function Wn(Y) {
    return Y.text;
}
const At = qt(false);
const kn = 500;
const wn = /[#*`|[>\-_~]|\n[\r\n]|\r\r|\r\n[\r\n]|(?:^|[\r\n]) {0,3}(?:\d+[.)]|\+) |(?:^|[\r\n]) {0,3}=+ *(?:[\r\n]|$)|https?:\/\/|www\./;
const Tn = "&nbsp;";
function eo(o) {
    return {
        tokens: [
            {
                type: "paragraph",
                raw: o,
                text: o,
                tokens: [
                    {
                        type: "text",
                        raw: o,
                        text: o
                    }
                ]
            }
        ],
        isWindowed: !SYn(o)
    };
}
function to(o, i) {
    try {
        return NXe(o, i);
    } catch (error) {
        ro(error, i);
        return eo(i);
    }
}
function Br(o) {
    return {
        ...o,
        tokens: vYn(o.tokens)
    };
}
function ro(error, i) {
    if (error instanceof RangeError) {
        t(`marked.lexer overflow on ${i.length} chars`, {
            level: "error"
        });
    } else {
        c(error);
    }
}
function Rn(o) {
    try {
        return rNo(Am, o);
    } catch (error) {
        ro(error, o);
        return true;
    }
}
function bn(o, i, promptMode) {
    let a = o === null ? "" : `${promptMode ? "_" : ""}${i.length}:${tU(i)}`;
    let m = o?.get(a);
    if (o !== null && m) {
        o.delete(a);
        o.set(a, m);
        return m;
    }
    if (!wn.test(i) && (promptMode || !i.includes(Tn))) {
        return Br(eo(i));
    }
    let f = Br(to(promptMode ? iNo : Am, i));
    if (o === null) {
        return f;
    }
    if (o.size >= kn) {
        let u = o.keys().next().value;
        if (u !== undefined) {
            o.delete(u);
        }
    }
    o.set(a, f);
    return f;
}
function Ka(o) {
    let a = w(9);
    let i = ql();
    let { highlightedCode } = yj();
    let m;
    if (a[0] !== i.syntaxHighlightingDisabled) {
        m = i.syntaxHighlightingDisabled ? null : SU();
        a[0] = i.syntaxHighlightingDisabled;
        a[1] = m;
    } else {
        m = a[1];
    }
    let f = m;
    let u = o.skipHighlightCache ?? false;
    let d;
    x: {
        if (f === null || u) {
            d = f;
            break x;
        }
        let g;
        if (a[2] !== f || a[3] !== highlightedCode) {
            g = {
                supportsLanguage: f.supportsLanguage,
                highlight (h, T) {
                    let C = T?.language;
                    if (C) {
                        return DXe(highlightedCode, f, h, C);
                    }
                    return h;
                }
            };
            a[2] = f;
            a[3] = highlightedCode;
            a[4] = g;
        } else {
            g = a[4];
        }
        d = g;
    }
    let highlight = d;
    const maxProseWidth = o.capProseWidth ? i.maxProseWidth : undefined;
    let b;
    if (a[5] !== highlight || a[6] !== o || a[7] !== maxProseWidth) {
        b = e(qr, {
            ...o,
            highlight,
            maxProseWidth
        });
        a[5] = highlight;
        a[6] = o;
        a[7] = maxProseWidth;
        a[8] = b;
    } else {
        b = a[8];
    }
    return b;
}
function qr({ children, color, dimColor, italic, monochrome, hint, promptMode = false, linkSchemes, stripPromptTags = true, tailWrap, skipTokenCache = false, highlight, maxProseWidth }) {
    let [k] = hr();
    Hmt();
    let b = dje();
    let H = Z(()=>{
        if (stripPromptTags && !promptMode) {
            return o4(children);
        }
        return children;
    }, [
        children,
        stripPromptTags,
        promptMode
    ]);
    let G = Te(At);
    let E = nt();
    let L = Rt(WYt, jYt);
    let { markdownTokens } = yj();
    let K = Z(()=>{
        let W = bn(skipTokenCache ? null : markdownTokens, H, promptMode);
        let F = G || W.isWindowed;
        let linkCap = b && !F;
        let q = linkSchemes === undefined ? W.tokens : structuredClone(W.tokens);
        if (linkSchemes !== undefined) {
            bdn(q, linkSchemes);
        }
        let V = [];
        let Y = "";
        let oe = "none";
        let te = false;
        let z = false;
        let pe = hint ? `\xB7\xA0${hint}` : undefined;
        function M(U, X) {
            V.push(U);
            oe = X;
            te = false;
        }
        function O(U, marginTop, se) {
            return e(s, {
                marginTop,
                maxWidth: se === "prose" ? maxProseWidth : undefined,
                children: U
            }, V.length);
        }
        function B() {
            if (!pe || z) {
                return null;
            }
            z = true;
            return r(n, {
                color: "subtle",
                children: [
                    " ",
                    pe
                ]
            });
        }
        function j(U, X = false) {
            if (!Y) {
                return;
            }
            let se = Y.startsWith(`
`);
            let me = _dn(Y);
            let fe = Y.replace(/^\n+/, "").trimEnd();
            Y = "";
            if (!fe) {
                te = true;
                return;
            }
            let ye = oe === "none" ? 0 : (oe === "list" || oe === "code") && !se ? 0 : 1;
            let Ie = e(Do, {
                dimColor,
                italic,
                monochrome,
                wrap: U,
                children: fe
            });
            let yr = X ? B() : null;
            M(O(color || yr ? r(n, {
                color,
                wrap: U,
                children: [
                    Ie,
                    yr
                ]
            }) : Ie, ye, "prose"), "prose");
            te = me;
        }
        function Q(U) {
            if (oe === "none") {
                return 0;
            }
            if (U === "block" || oe === "block" || te) {
                return 1;
            }
            return 0;
        }
        function re(U, X) {
            j();
            M(O(U, Q(X), X), X);
        }
        function J(token, tailWrap_1) {
            j();
            M(e(St, {
                token,
                blankLineBefore: Q("list") > 0,
                theme: k,
                highlight,
                dimColor,
                italic,
                linkCap,
                isWindowed: F,
                tailWrap: tailWrap_1,
                maxProseWidth
            }, V.length), "list");
        }
        let ie = q.findLastIndex((U)=>U.type !== "space");
        let ne = !E && !promptMode && Wr(q);
        q.forEach((U, X)=>{
            if (U.type === "table") {
                re(e(Tt, {
                    token: U,
                    highlight,
                    linkCap,
                    isWindowed: F
                }), "block");
            } else if (U.type === "list" && ne) {
                J(U, X === ie ? tailWrap : undefined);
            } else if (U.type === "blockquote") {
                re(e(oo, {
                    token: U,
                    theme: k,
                    highlight,
                    dimColor,
                    linkCap,
                    isWindowed: F,
                    isScreenReader: E,
                    maxWidth: maxProseWidth
                }), "block");
            } else {
                let se = WH(U, k, {
                    listDepth: 0,
                    orderedListNumber: null,
                    parent: null,
                    highlight,
                    glueProse: false,
                    linkCap,
                    screenReader: E,
                    promptMode,
                    windowed: F
                });
                if (maxProseWidth !== undefined && U.type === "code") {
                    let me = X === ie;
                    let fe = me ? tailWrap : undefined;
                    let ye = me ? B() : null;
                    let Ie = e(Do, {
                        dimColor,
                        italic,
                        monochrome,
                        wrap: fe,
                        children: se.replace(/\n$/, "")
                    });
                    re(color || ye ? r(n, {
                        color,
                        wrap: fe,
                        children: [
                            Ie,
                            ye
                        ]
                    }) : Ie, "code");
                } else {
                    Y += se;
                }
            }
        });
        j(tailWrap, true);
        if (promptMode && V.length === 0 && H.trim()) {
            Y = wYn(H);
            j(tailWrap, true);
        }
        if (pe && !z) {
            M(O(e(n, {
                color: "subtle",
                children: pe
            }), 0, "prose"), "prose");
        }
        return V;
    }, [
        H,
        color,
        dimColor,
        italic,
        monochrome,
        hint,
        linkSchemes,
        highlight,
        k,
        b,
        G,
        E,
        tailWrap,
        skipTokenCache,
        markdownTokens,
        promptMode,
        L,
        maxProseWidth
    ]);
    return e(s, {
        flexDirection: "column",
        children: K
    });
}
const Vr = 2;
function oo(o) {
    let g = w(17);
    let { token, theme, highlight, dimColor, linkCap, isWindowed, isScreenReader, maxWidth } = o;
    let h;
    let T;
    if (g[0] !== dimColor || g[1] !== highlight || g[2] !== isScreenReader || g[3] !== isWindowed || g[4] !== linkCap || g[5] !== maxWidth || g[6] !== theme || g[7] !== token.tokens) {
        T = Sn;
        G: {
            let C;
            if (g[10] !== highlight || g[11] !== isScreenReader || g[12] !== isWindowed || g[13] !== linkCap || g[14] !== maxWidth || g[15] !== theme) {
                C = (k)=>({
                        code: k.type === "code",
                        fullWidth: maxWidth !== undefined && Yr(k),
                        text: WH(k, theme, {
                            listDepth: 0,
                            orderedListNumber: null,
                            parent: null,
                            highlight,
                            glueProse: false,
                            linkCap,
                            screenReader: isScreenReader,
                            windowed: isWindowed,
                            quotesAround: 1
                        })
                    });
                g[10] = highlight;
                g[11] = isScreenReader;
                g[12] = isWindowed;
                g[13] = linkCap;
                g[14] = maxWidth;
                g[15] = theme;
                g[16] = C;
            } else {
                C = g[16];
            }
            let b = token.tokens.map(C);
            if (maxWidth === undefined || isScreenReader || !b.some(Dn)) {
                let H = ge.italic(b.map(Wn).join("").replace(/^\n+/, "").trimEnd());
                T = e(s, {
                    borderStyle: "quote",
                    borderTop: false,
                    borderBottom: false,
                    borderRight: false,
                    borderDimColor: true,
                    paddingLeft: 1,
                    maxWidth,
                    children: e(Do, {
                        dimColor,
                        children: H
                    })
                });
                break G;
            }
            let E = [];
            for (const L of b){
                let A = E.at(-1);
                if (A && !A.fullWidth && !L.fullWidth) {
                    A.text = A.text + L.text;
                } else {
                    E.push({
                        ...L
                    });
                }
            }
            let K = [];
            let W = 0;
            for (const F of E){
                let _ = F.code ? F.text : F.text.replace(/^\n+/, "");
                let q = F.code ? _.replace(/\n$/, "") : _.trimEnd();
                if (!q) {
                    W = W + Lt(F.text, `
`);
                    continue;
                }
                W = W + (F.text.length - _.length);
                K.push(e(s, {
                    marginTop: K.length > 0 ? Math.max(0, W - 1) : 0,
                    maxWidth: F.fullWidth ? undefined : maxWidth - Vr,
                    children: e(Do, {
                        dimColor,
                        children: ge.italic(q)
                    })
                }, K.length));
                W = Lt(_.slice(q.length), `
`);
            }
            h = e(s, {
                flexDirection: "column",
                borderStyle: "quote",
                borderTop: false,
                borderBottom: false,
                borderRight: false,
                borderDimColor: true,
                paddingLeft: 1,
                children: K
            });
        }
        g[0] = dimColor;
        g[1] = highlight;
        g[2] = isScreenReader;
        g[3] = isWindowed;
        g[4] = linkCap;
        g[5] = maxWidth;
        g[6] = theme;
        g[7] = token.tokens;
        g[8] = h;
        g[9] = T;
    } else {
        h = g[8];
        T = g[9];
    }
    if (T !== Sn) {
        return T;
    }
    return h;
}
function Yr(o) {
    let i = [
        o
    ];
    for(let p = i.pop(); p !== undefined; p = i.pop()){
        if (p.type === "code" || p.type === "table") {
            return true;
        }
        let a = p.type === "list" ? p.items : p.type === "blockquote" || p.type === "list_item" ? p.tokens ?? [] : [];
        for (let m of a){
            i.push(m);
        }
    }
    return false;
}
const Oe = 4096;
function Qr() {
    return {
        chunks: [],
        frozenSource: "",
        gapAfterChunks: false,
        stablePrefix: "",
        openFence: null,
        isLinkless: false
    };
}
const no = /^ {0,3}(`{3,}|~{3,})([^\n]*)$/gm;
function so(o, i, p) {
    let a = o.match(/^`+|^~+/)?.[0] ?? "";
    return i[0] === a[0] && i.length >= a.length && p.trim() === "";
}
function Nn(openFence, i) {
    let p = openFence;
    for (let a of i.matchAll(no)){
        if (p === null) {
            p = a[1] + a[2].trim();
        } else if (so(p, a[1], a[2])) {
            p = null;
        }
    }
    return p;
}
function Fn(o, openFence) {
    for (let p of o.matchAll(no)){
        let a = p.index + p[0].length;
        if (o[a] !== `
`) {
            continue;
        }
        if (so(openFence, p[1], p[2])) {
            return a + 1;
        }
    }
    return -1;
}
function Ze(o, i, p, a) {
    let m = i.substring(0, p);
    let f = (o.openFence !== null ? o.openFence + `
` : "") + m;
    let skipHighlightCache = o.openFence !== null || !a;
    o.chunks = [
        ...o.chunks,
        e(s, {
            marginTop: o.chunks.length > 0 && o.gapAfterChunks ? 1 : 0,
            children: e(Ka, {
                skipTokenCache: true,
                skipHighlightCache,
                capProseWidth: true,
                children: f
            })
        }, o.chunks.length)
    ];
    o.openFence = Nn(o.openFence, m);
    o.frozenSource += m;
    o.gapAfterChunks = a;
    o.isLinkless ||= !a || o.openFence !== null;
    o.stablePrefix = "";
    return i.substring(p);
}
const Jr = 1536;
function Zr(o) {
    let i = o.lastIndexOf(`
`);
    if (i < Oe / 2) {
        i = o.lastIndexOf(" ", o.length - Jr);
    }
    if (i < Oe / 2) {
        i = o.length - Jr;
        let p = o.charCodeAt(i + 1);
        if (p >= 56320 && p <= 57343) {
            i--;
        }
    }
    return i + 1;
}
function s0r({ children, hideTrailingLine = false }) {
    Hmt();
    let p = o4(children);
    let current = R(Qr()).current;
    if (!p.startsWith(current.frozenSource)) {
        Object.assign(current, Qr());
    }
    current.isLinkless ||= !SYn(p);
    let f = p.substring(current.frozenSource.length);
    if (!f.startsWith(current.stablePrefix)) {
        current.stablePrefix = "";
    }
    if (current.openFence !== null) {
        let k = Fn(f, current.openFence);
        if (k >= 0) {
            f = Ze(current, f, k, true);
        } else if (f.length > Oe) {
            f = Ze(current, f, Zr(f), false);
        }
    }
    if (current.openFence === null) {
        let k = current.stablePrefix.length;
        let b = f.substring(k);
        let { tokens, isWindowed } = to(Am, b);
        current.isLinkless ||= isWindowed;
        let E = tokens.length - 1;
        while(E >= 0 && tokens[E].type === "space"){
            E--;
        }
        current.isLinkless ||= !oNo(tokens, b);
        let L = E > 0 ? sNo(tokens, E, b) : 0;
        if (L > 0) {
            current.stablePrefix = f.substring(0, k + L);
            current.isLinkless ||= Rn(f.substring(k, k + L));
        }
        if (current.stablePrefix.length > Oe) {
            f = Ze(current, f, current.stablePrefix.length, true);
        }
        if (f.length - current.stablePrefix.length > Oe) {
            let K = current.stablePrefix.length;
            let W = Zr(f.substring(K));
            f = Ze(current, f, K + W, false);
        }
    }
    let m_stablePrefix = current.stablePrefix;
    let d = f.substring(m_stablePrefix.length);
    let x = m_stablePrefix.trim() !== "";
    let g = d && current.openFence !== null ? current.openFence + `
` + d : d;
    let h = !d.endsWith(`
`);
    let T = d ? e(Ka, {
        tailWrap: hideTrailingLine && h ? "wrap-stream" : undefined,
        skipTokenCache: true,
        skipHighlightCache: true,
        capProseWidth: true,
        children: g
    }) : null;
    if (current.chunks.length === 0) {
        return e(At.Provider, {
            value: current.isLinkless,
            children: r(s, {
                flexDirection: "column",
                gap: 1,
                children: [
                    x && e(Ka, {
                        skipTokenCache: true,
                        capProseWidth: true,
                        children: m_stablePrefix
                    }),
                    T
                ]
            })
        });
    }
    let marginTop = current.gapAfterChunks ? 1 : 0;
    return e(At.Provider, {
        value: current.isLinkless,
        children: r(s, {
            flexDirection: "column",
            children: [
                current.chunks,
                x && e(s, {
                    marginTop,
                    children: e(Ka, {
                        skipTokenCache: true,
                        capProseWidth: true,
                        children: m_stablePrefix
                    })
                }),
                T && e(s, {
                    marginTop: x ? 1 : marginTop,
                    children: T
                })
            ]
        })
    });
}
N();
const Ae = (o, i)=>pt(E6t(o), i);
const be = (o)=>o.map((i)=>({
            ...i,
            lines: i.lines.map((p)=>p.slice(0, 1) + xN(p.slice(1)))
        }));
const et = (o, i)=>be(o).map((p)=>{
        let a = Math.max(1, i - knt(p));
        return {
            ...p,
            lines: p.lines.map((m)=>m.slice(0, 1) + Ae(m.slice(1), a))
        };
    });
function tt(o, i, p) {
    let a = o.replace(/\n$/, "").split(`
`);
    let f = Math.max(1, i - (p !== undefined ? String(p + a.length - 1).length + 2 : 0));
    return a.map((u)=>Ae(u, f)).join(`
`);
}
N();
N();
const odn = qt(null);
const rt = 80;
const it = ({ language, path })=>{
    if (language === undefined) {
        return path ?? "";
    }
    return `source.${language}`;
};
function mt(o) {
    let u = w(21);
    let { source, startLine, format, wrap } = o;
    let f = R(null);
    let d;
    if (u[0] === S) {
        d = ()=>{
            if (f.current) {
                return Math.floor(Ks(f.current).width);
            }
            return 0;
        };
        u[0] = d;
    } else {
        d = u[0];
    }
    let x = kc(d);
    let g = Te(odn) ?? 0;
    let h = g > 0 ? g : rt;
    let width = x > 0 ? x : h;
    let C;
    if (u[1] !== o) {
        C = it(o);
        u[1] = o;
        u[2] = C;
    } else {
        C = u[2];
    }
    let filePath = C;
    let b = wrap === "truncate-end";
    let H;
    if (u[3] !== format || u[4] !== source) {
        H = oqe(source, format);
        u[3] = format;
        u[4] = source;
        u[5] = H;
    } else {
        H = u[5];
    }
    let G = H;
    let E = G?.kind === "hunks" ? G.hunks : undefined;
    let L;
    if (u[6] !== width || u[7] !== b || u[8] !== E) {
        L = E && (b ? et(E, width) : be(E));
        u[6] = width;
        u[7] = b;
        u[8] = E;
        u[9] = L;
    } else {
        L = u[9];
    }
    let hunks = L;
    let K;
    if (u[10] !== width || u[11] !== b || u[12] !== source || u[13] !== startLine) {
        K = b ? tt(source, width, startLine) : source;
        u[10] = width;
        u[11] = b;
        u[12] = source;
        u[13] = startLine;
        u[14] = K;
    } else {
        K = u[14];
    }
    let code = K;
    let F;
    if (u[15] !== code || u[16] !== width || u[17] !== filePath || u[18] !== hunks || u[19] !== startLine) {
        F = e(s, {
            ref: f,
            flexDirection: "column",
            flexGrow: 1,
            flexShrink: 1,
            children: hunks ? e(Vq, {
                hunks,
                dim: false,
                width,
                filePath,
                firstLine: null
            }) : e(IS, {
                code,
                filePath,
                width,
                startLine,
                lineNumbers: startLine !== undefined
            })
        });
        u[15] = code;
        u[16] = width;
        u[17] = filePath;
        u[18] = hunks;
        u[19] = startLine;
        u[20] = F;
    } else {
        F = u[20];
    }
    return F;
}
function uo(o, i, p) {
    let a = nTt(o, i);
    if (a !== undefined && a.component === p.component) {
        return a;
    }
    return p;
}
N();
const Fe = ()=>st().hoverGroups;
const ft = (o, i)=>Fe().setState((p)=>{
        let a = (p.get(o) ?? 0) + i;
        let m = new Map(p);
        if (a > 0) {
            m.set(o, a);
        } else {
            m.delete(o);
        }
        return m;
    });
function _t() {
    let o;
    function enter(a) {
        if (a !== undefined && o === undefined) {
            o = a;
            ft(a, 1);
        }
    }
    function leave() {
        let a = o;
        if (a !== undefined) {
            o = undefined;
            ft(a, -1);
        }
    }
    return {
        enter,
        leave,
        regroup: (a)=>{
            if (o !== undefined && o !== a) {
                leave();
                enter(a);
            }
        }
    };
}
function Bt(plugin, i) {
    let scope = i?.scope;
    if (plugin !== undefined && scope !== undefined) {
        return {
            plugin,
            scope
        };
    }
}
function ut({ scope, ...rest }) {
    return rest;
}
N();
function ct(o, i) {
    let p = o && fSr(o);
    let isHot = Re(p === undefined ? null : Fe(), (u)=>p !== undefined && (u.get(p) ?? 0) > 0) ?? false;
    let m = R(null);
    m.current ??= _t();
    let m_current = m.current;
    P(()=>{
        m_current.regroup(p);
    }, [
        m_current,
        p
    ]);
    P(()=>m_current.leave, [
        m_current,
        i
    ]);
    return {
        isHot,
        onMouseEnter: ()=>m_current.enter(p),
        onMouseLeave: m_current.leave
    };
}
N();
const Kt = [
    "color",
    "backgroundColor",
    "borderColor"
];
function De(o) {
    if (!o) {
        return null;
    }
    let i = {
        ...o
    };
    for (let p of Kt){
        let a = i[p];
        let m = typeof a === "string" ? akn(a) : undefined;
        if (m !== undefined) {
            i[p] = m;
        }
    }
    return i;
}
N();
const _e = qt(false);
function jt(o, i, p) {
    let a = Te(_e);
    let m = ct(o, p);
    let overrides = (o ? m.isHot : a) && i ? De(ut(i)) ?? {} : {};
    if (o) {
        return {
            overrides,
            handlers: {
                onMouseEnter: m.onMouseEnter,
                onMouseLeave: m.onMouseLeave,
                hoverFollowsPaint: true
            }
        };
    }
    return {
        overrides,
        handlers: {}
    };
}
function $t({ isLive, elementKey, layout, hover, group, children }) {
    let [u, d] = y(false);
    let x = ct(group, "Box");
    let g = isLive && u;
    let T = hover !== undefined && (group ? x.isHot : g) ? {
        ...layout,
        ...ut(hover)
    } : layout;
    return Cc(_e.Provider, {
        value: g
    }, Cc(s, {
        ...De(T),
        elementKey,
        hoverFollowsPaint: true,
        onMouseEnter: ()=>{
            d(true);
            x.onMouseEnter();
        },
        onMouseLeave: ()=>{
            d(false);
            x.onMouseLeave();
        }
    }, ...children));
}
N();
function Ut({ isInline, props, hover, group, children }) {
    let f = isInline ? "Text" : "Box";
    let { overrides, handlers } = jt(group, hover, f);
    return Cc(isInline ? n : s, {
        ...De(props),
        ...overrides,
        ...handlers
    }, ...children);
}
const Gt = 12;
N();
N();
const idn = qt(null);
N();
const adn = qt(null);
N();
N();
const sdn = qt(null);
const ldn = (o)=>(i)=>{
        let p = i.isWindowActivation || i.droppedAsStray;
        if (i.hyperlinkUrl !== undefined) {
            i.allowDefault();
        }
        if (!p) {
            o();
        }
    };
N();
const cdn = qt(null);
N();
const ddn = qt(null);
function xe({ plugin, handle }) {
    let a = Te(ddn);
    let m = Te(cdn);
    let f = Te(sdn);
    let hasKeyboardFocus = a !== null && a.plugin === plugin && a.handle === handle;
    return {
        hasKeyboardFocus,
        ref: hasKeyboardFocus ? m ?? undefined : undefined,
        onClick: f ? ldn(()=>f({
                plugin,
                handle
            })) : undefined
    };
}
function Vt(o) {
    let { plugin, handle, element, placeholder } = o;
    let f = xe({
        plugin,
        handle
    });
    let u = Te(idn);
    let d = ke();
    let x = Te(adn) ?? d.columns;
    let g = u?.textOf(plugin, element) ?? o.value ?? "";
    let [h, T] = y(g.length);
    let C = o.label === undefined ? "" : `${o.label}: `;
    let k = ` \u23CE ${o.submitLabel ?? "submit"}`;
    let bold = u !== null && f.hasKeyboardFocus;
    P(()=>{
        if (bold) {
            T(Number.MAX_SAFE_INTEGER);
        }
    }, [
        bold
    ]);
    return r(s, {
        ref: f.ref,
        flexDirection: "row",
        flexShrink: 0,
        elementKey: element,
        elementPlugin: plugin,
        onClick: f.onClick,
        children: [
            C !== "" && e(n, {
                bold,
                children: C
            }),
            bold ? e(Sr, {
                value: g,
                onChange: (H)=>u.edit({
                        plugin,
                        handle,
                        element
                    }, H),
                placeholder,
                columns: Math.max(Gt, x - ae(C) - ae(k)),
                cursorOffset: Math.min(h, g.length),
                onChangeCursorOffset: T,
                focus: true,
                showCursor: true,
                multiline: false,
                disableEscapeDoublePress: true
            }) : e(n, {
                dimColor: g === "",
                wrap: "truncate-end",
                children: g === "" ? placeholder ?? "" : g
            }),
            bold && e(n, {
                dimColor: true,
                children: k
            })
        ]
    });
}
N();
const SIe = (o, link)=>void Ahe(`ui.press ${o.plugin}`, hPn({
        plugin: o.plugin,
        handle: o.handle,
        surface: "terminal",
        link
    }));
const udn = new Set([
    "https",
    "http",
    "file"
]);
function Xt({ text, dimColor, press, elementKey, pressableLinks }) {
    let f = on();
    let u = _A();
    let [d] = y(()=>f.now());
    let x = R(null);
    let g = R({
        press,
        pressableLinks
    });
    let h = Cc(Ka, {
        dimColor,
        linkSchemes: udn,
        stripPromptTags: false,
        children: text
    });
    g.current = {
        press,
        pressableLinks
    };
    P(()=>()=>x.current?.(), []);
    if (press === undefined) {
        if (elementKey === undefined) {
            return h;
        }
        return Cc(s, {
            flexDirection: "column",
            elementKey
        }, h);
    }
    return Cc(s, {
        flexDirection: "column",
        elementKey,
        elementPlugin: press.plugin,
        onClick: (T)=>{
            let T_hyperlinkUrl = T.hyperlinkUrl;
            if (!(T_hyperlinkUrl !== undefined && !(T.mods.ctrl || T.mods.alt) && vdr(T_hyperlinkUrl, pressableLinks))) {
                T.allowDefault();
                return;
            }
            if (T.isWindowActivation || f.now() - d < hje) {
                T.dropAsStray();
                return;
            }
            T.stopImmediatePropagation();
            x.current?.();
            let H = u.subscribe(()=>{
                if (u.hasSelection()) {
                    x.current?.();
                }
            });
            let G = f.setTimeout(()=>{
                x.current = null;
                H();
                let g_current = g.current;
                if (g_current.press !== undefined && vdr(T_hyperlinkUrl, g_current.pressableLinks) && g_current.press) {
                    SIe(g_current.press, {
                        href: T_hyperlinkUrl
                    });
                }
            }, Udn);
            x.current = ()=>{
                x.current = null;
                H();
                G();
            };
        }
    }, h);
}
N();
N();
const co = (item, acc)=>item.rank > acc.rank || item.rank === acc.rank && item.seq > acc.seq;
function xo() {
    let o = [];
    let i = 0;
    function remove(a) {
        let m = o.indexOf(a);
        if (m >= 0) {
            o.splice(m, 1);
        }
    }
    return {
        add: (a)=>{
            remove(a);
            a.seq = ++i;
            o.push(a);
        },
        remove,
        winnerOf: (a)=>o.filter((m)=>m.action === a).reduce((acc, item)=>{
                if (acc === undefined || co(item, acc)) {
                    return item;
                }
                return acc;
            }, undefined),
        held: ()=>[
                ...o
            ],
        clear: ()=>{
            o.length = 0;
        }
    };
}
const Yt = ze(xo(), (o)=>o.clear());
const Ds = (action, i)=>D(i.filter((p)=>p.action === action).map((p)=>p.context));
const _s = (o)=>{
    switch(o){
        case "Pane":
            return 2;
        case "AbovePrompt":
            return 1;
        default:
            return 0;
    }
};
N();
const ee = qt(null);
function Qt({ plugin, handle, action }) {
    let m = Te(ee);
    let f = Lc();
    let u = mj();
    let rank = _s(m?.component);
    let [x] = y(()=>({
            action,
            rank,
            seq: 0,
            plugin,
            handle
        }));
    let g = f?.bindings;
    let h = Z(()=>Ds(action, g ?? []), [
        action,
        g
    ]);
    en(()=>{
        x.plugin = plugin;
        x.handle = handle;
        x.rank = rank;
    });
    P(()=>{
        x.action = action;
        Yt.add(x);
        return ()=>Yt.remove(x);
    }, [
        action,
        x
    ]);
    P(()=>{
        if (!f || u) {
            return;
        }
        let T = h.map((context)=>f.registerHandler({
                action,
                context,
                handler: ()=>{
                    let k = Yt.winnerOf(action);
                    if (k === undefined) {
                        return false;
                    }
                    SIe({
                        plugin: k.plugin,
                        handle: k.handle
                    });
                },
                singleKey: true,
                fallback: true
            }));
        return ()=>{
            for (let C of T){
                C();
            }
        };
    }, [
        f,
        action,
        h,
        u
    ]);
}
function Jt(o) {
    Qt(o);
    return null;
}
N();
const hYn = qt(null);
function yYn(o) {
    if (!o) {
        return;
    }
    let i = nx(o);
    let p = i.activeElement ?? undefined;
    while(p && p !== o){
        p = p.parentNode;
    }
    if (p === o) {
        i.blur();
    }
}
function Zt({ plugin, handle, element, label, hotkey, action, plain, dimColor, variant, hover, held }) {
    let { hasKeyboardFocus, ref } = xe({
        plugin,
        handle
    });
    let k = R(null);
    let b = Te(hYn);
    en(()=>{
        let k_current = k.current;
        if (hotkey !== undefined && b !== null && k_current !== null) {
            return b(hotkey, k_current);
        }
    }, [
        b,
        hotkey
    ]);
    let { overrides, handlers } = jt(Bt(plugin, hover), hover, "Box");
    return Cc(s, {
        ref: k,
        flexShrink: 0,
        alignSelf: "flex-start",
        elementKey: element,
        elementPlugin: plugin,
        onClick: (E)=>{
            yYn(k.current);
            E.stopImmediatePropagation();
        },
        ...handlers
    }, action !== undefined && Cc(Jt, {
        plugin,
        handle,
        action
    }), Cc(zH, {
        ref,
        tabIndex: -1,
        flexShrink: 0,
        alignSelf: "flex-start",
        onAction: ()=>SIe({
                plugin,
                handle
            }),
        children: (E)=>{
            let inverse = E.focused || E.hovered || hasKeyboardFocus;
            let dimColor_1 = dimColor === true && !inverse;
            let K = plain === true;
            let W = hotkey === undefined;
            let F = held.length > 0;
            let _ = F ? held : [
                label
            ];
            if (K) {
                return Cc(n, {
                    inverse,
                    dimColor: dimColor_1,
                    ...overrides
                }, W ? "" : Cc(n, {
                    color: "suggestion"
                }, hotkey), W ? "" : ": ", ..._);
            }
            return Cc(n, {
                inverse,
                bold: true,
                dimColor: dimColor_1,
                color: variant === "primary" ? "suggestion" : undefined,
                ...overrides
            }, ...F ? [
                "[ ",
                ...held,
                " ]"
            ] : [
                `[ ${label} ]`
            ]);
        }
    }));
}
N();
N();
N();
function yo(button) {
    switch(button){
        case 0:
            return "left";
        case 1:
            return "middle";
        case 2:
            return "right";
        case undefined:
            return;
    }
}
N();
N();
function v$t(o) {
    let i = R(null);
    let { subscribeClicks } = Te(Qy);
    P(()=>subscribeClicks((a, m)=>{
            let f = a ?? undefined;
            while(f && f !== i.current){
                f = f.parentNode;
            }
            if (!f && m?.isWindowActivation !== true) {
                o();
            }
        }), [
        o,
        subscribeClicks
    ]);
    return i;
}
const go = [
    [
        "upArrow",
        "up"
    ],
    [
        "downArrow",
        "down"
    ],
    [
        "leftArrow",
        "left"
    ],
    [
        "rightArrow",
        "right"
    ],
    [
        "pageUp",
        "pageup"
    ],
    [
        "pageDown",
        "pagedown"
    ],
    [
        "home",
        "home"
    ],
    [
        "end",
        "end"
    ],
    [
        "return",
        "return"
    ],
    [
        "tab",
        "tab"
    ],
    [
        "backspace",
        "backspace"
    ],
    [
        "delete",
        "delete"
    ]
];
function ko(o, i) {
    if (i.wheelUp || i.wheelDown) {
        return;
    }
    let p = go.find(([m])=>i[m])?.[1] ?? (o === " " ? "space" : o);
    if (p === "") {
        return undefined;
    }
    return {
        key: p,
        ...i.ctrl && {
            ctrl: true
        },
        ...i.shift && {
            shift: true
        },
        ...i.meta && {
            meta: true
        }
    };
}
function wo(instance) {
    let i = le(()=>cBo(instance.id), [
        instance
    ]);
    let p = v$t(i);
    let a = Re(Bje, (f)=>f.focusedId) === instance.id;
    let m = Re(Ri(), (f)=>f.focusedId);
    P(()=>{
        if (m !== null && a) {
            vpn(null);
        }
    }, [
        m,
        a
    ]);
    P(()=>i, [
        i
    ]);
    wy((f, u, d)=>{
        let x = Bje.getState().focusedId === instance.id;
        let g = u.escape || u.ctrl && (f === "c" || f === "d");
        if (!x) {
            return false;
        }
        if (!instance.acceptsKeys()) {
            i();
            return false;
        }
        if (g) {
            vpn(null);
            return u.escape;
        }
        let h = ko(f === "" ? d : f, u);
        if (h === undefined) {
            return false;
        }
        instance.key(h);
        return true;
    });
    return p;
}
function To({ host, instance, snapshot }) {
    let { rebuild, props, width, height, flexGrow, plugin, elementKey } = host;
    let h = wo(instance);
    P(()=>{
        instance.setProps(props);
    }, [
        instance,
        props
    ]);
    P(()=>{
        instance.drawnAgain();
    }, [
        instance,
        host.drawn
    ]);
    let T = kc(()=>{
        if (h.current === null) {
            return 0;
        }
        return Ks(h.current).width;
    });
    let C = kc(()=>{
        if (h.current === null) {
            return 0;
        }
        return Ks(h.current).height;
    });
    en(()=>{
        instance.laidOut();
    });
    P(()=>{
        instance.resize(T, C);
    }, [
        instance,
        T,
        C
    ]);
    let k = R({
        x: 0,
        y: 0
    });
    let b = snapshot.status === "drawn";
    let H = b && instance.acceptsPointer();
    let G = H || b && instance.acceptsKeys();
    QYn(H);
    function onPointer(L) {
        if (L.type === "down" && instance.acceptsKeys()) {
            e5(null);
            vpn(instance.id);
        }
        k.current = {
            x: L.localCol,
            y: L.localRow
        };
        instance.pointer({
            type: L.type,
            x: L.localCol,
            y: L.localRow,
            ...L.fine && {
                fine: {
                    x: L.fine.col,
                    y: L.fine.row
                }
            },
            ...L.button !== undefined && {
                button: yo(L.button)
            },
            ...L.shift && {
                shift: true
            },
            ...L.alt && {
                alt: true
            },
            ...L.ctrl && {
                ctrl: true
            }
        });
    }
    return Cc(s, {
        ref: h,
        flexDirection: "column",
        flexShrink: 0,
        width,
        height,
        flexGrow,
        overflow: "hidden",
        elementKey,
        elementPlugin: plugin,
        ...G && {
            onPointer,
            onMouseEnter: ()=>{
                instance.pointer({
                    type: "enter",
                    ...k.current
                });
            },
            onMouseLeave: ()=>{
                instance.pointer({
                    type: "leave",
                    ...k.current
                });
            }
        }
    }, b && rebuild(snapshot.tree), snapshot.status === "failed" && Cc(n, {
        dimColor: true,
        wrap: "truncate-end"
    }, snapshot.text));
}
N();
function Ro(o) {
    if (o === null) {
        return {
            every: (i, p)=>{
                let a = setInterval(p, Math.max(i, eg));
                return ()=>clearInterval(a);
            }
        };
    }
    return {
        every: (i, p)=>{
            let a = o.now();
            return o.subscribeKeepAlive(()=>{
                let m = o.now();
                if (m - a >= i) {
                    a = m;
                    p();
                }
            });
        }
    };
}
const bo = Object.freeze({
    status: "loading"
});
const Co = Object.freeze({
    id: "",
    plugin: "",
    module: "",
    subscribe: ()=>()=>{},
    getSnapshot: ()=>bo,
    setProps: ()=>{},
    laidOut: ()=>{},
    resize: ()=>{},
    pointer: ()=>{},
    key: ()=>{},
    acceptsPointer: ()=>false,
    acceptsKeys: ()=>false,
    threw: ()=>{},
    drawnAgain: ()=>{},
    release: ()=>{}
});
const Se = "detached";
function So(host) {
    let { plugin, elementKey, props } = host;
    let m = Te(ee);
    let f = Te(Zw);
    let [u, d] = y(Co);
    let [x] = y(()=>props);
    en(()=>{
        let g = dBo.acquire({
            plugin,
            component: m?.component ?? "AbovePrompt",
            requestId: m?.requestId ?? Se,
            surface: "terminal",
            key: elementKey,
            module: host.module,
            props: x,
            clock: Ro(f)
        });
        d(g);
        return ()=>g.release();
    }, [
        plugin,
        host.module,
        elementKey,
        m,
        f,
        x
    ]);
    return u;
}
function Io(host) {
    let instance = So(host);
    let p = Rt(instance.subscribe, instance.getSnapshot);
    let a = Te(ee)?.component ?? "AbovePrompt";
    let { width, height, flexGrow } = host;
    return Cc(V0, {
        resetKey: p,
        telemetryMessage: ()=>O6t(a, eTt([
                Grt(host.plugin)
            ].filter((d)=>d !== undefined)), "Client"),
        onError: instance.threw,
        fallback: Cc(s, {
            flexShrink: 0,
            width,
            height,
            flexGrow,
            overflow: "hidden"
        }, Cc(n, null, " ")),
        children: Cc(To, {
            host,
            instance,
            snapshot: p
        })
    });
}
N();
N();
function Eo({ hasRoot, placeholders, hasId, isReference, files }) {
    let u = placeholders.state === "settled" && placeholders.value;
    let d = !isReference || files.state === "settled" && files.value;
    let x = !d && files.state !== "settled";
    let g = files.state === "settled" ? files.source : "";
    if (!hasRoot) {
        return "the Image is not drawn under a terminal root";
    }
    if (!u) {
        return `the Image draws its alt here: the terminal draws no placeholder images (${placeholders.source})`;
    }
    if (!hasId) {
        return "the Image draws its alt here: every 8-bit image id is in use";
    }
    if (x) {
        return "the terminal has not yet said whether it reads files on this machine; asked now, blit again";
    }
    if (d) {
        return undefined;
    }
    return `the Image draws its alt here: this terminal cannot read files on this machine (${g}); a { file } or { shm } source shows nothing, bytes still draw`;
}
const xi = 24;
const hi = 4;
const mode = 384;
const gi = new Set([
    "EAGAIN",
    "EBUSY",
    "EINTR",
    "EMFILE",
    "ENFILE",
    "ENOSPC"
]);
async function Lo(internal_querier, terminalImages) {
    let p = terminalImages.allocate(xi);
    if (p === undefined) {
        return rr("probe: no image id to ask under");
    }
    let a;
    try {
        a = tPe("tty-graphics-protocol", ".rgba");
        await writeFile(a, Buffer.alloc(hi), {
            mode
        });
        let [m, f] = await Promise.all([
            internal_querier.send({
                request: HNo(p, a),
                match: (u)=>u.type === "kittyGraphics" && u.id === p
            }),
            internal_querier.flush()
        ]);
        if (m !== undefined) {
            return tr({
                value: m.message === "OK",
                source: `probe: file query answered ${m.message}`
            });
        }
        if (f) {
            return tr({
                value: false,
                source: "probe: no reply to the file query"
            });
        }
        return rr("probe: the query was dropped");
    } catch (error) {
        let f = v(error) ?? "error";
        let u = `probe: could not write its file (${f})`;
        if (gi.has(f)) {
            return rr(u);
        }
        return tr({
            value: false,
            source: u
        });
    } finally{
        terminalImages.free(p);
        if (a !== undefined) {
            await unlink(a).catch(()=>{});
        }
    }
}
function tr(answer) {
    return {
        kind: "answered",
        answer
    };
}
function rr(source) {
    return {
        kind: "inconclusive",
        source
    };
}
function dt(internal_querier, terminalImages) {
    let p = TBt();
    if (!(internal_querier !== null && terminalImages !== null && M8n() && p.begin())) {
        return;
    }
    Lo(internal_querier, terminalImages).then((m)=>{
        let f = (m.kind === "inconclusive" ? m.source : m.answer.source).replace(uF, "?");
        if (m.kind === "inconclusive") {
            t(`Terminal image files: not known yet (${f}); asked again when next needed`);
            p.unask();
            return;
        }
        let u = m.answer.value ? "yes" : "no";
        t(`Terminal image files: ${u} (${f})`);
        p.answer({
            value: m.answer.value,
            source: f
        });
    }).catch((m)=>t(`Terminal image files: a listener threw (${m})`, {
            level: "warn"
        }));
}
const or = (o)=>(id)=>ONo({
            id,
            source: Nos(o.source),
            columns: o.columns,
            rows: o.rows
        });
const Po = 5000;
function Ho({ plugin, requestId, key }) {
    let m = key === undefined ? "Image" : `Image "${key}"`;
    let f = "";
    let u = -Infinity;
    return (d)=>{
        let x = Date.now();
        if (d === f && x - u < Po) {
            return;
        }
        f = d;
        u = x;
        t(`${m} (${plugin}) in ${requestId}: the terminal refused its source: ` + d.replace(uF, "?"), {
            level: "warn"
        });
    };
}
const xt = {
    reactKey: undefined,
    source: undefined,
    box: undefined
};
N();
const Ke = {
    indexed: 2,
    truecolor: 3,
    smallIdWidth: 8,
    wideIdWidth: 24
};
function vo() {
    let [o, i] = y(M8n);
    P(()=>PWo(i), []);
    let p = !o || ge.level < Ke.indexed;
    let a = ge.level >= Ke.truecolor;
    if (p) {
        return undefined;
    }
    if (a) {
        return Ke.wideIdWidth;
    }
    return Ke.smallIdWidth;
}
N();
function Mo({ plugin, requestId, key }, { columns, rows }, p) {
    en(()=>{
        if (key === undefined) {
            return;
        }
        return $0s(F0s({
            plugin,
            requestId,
            key
        }, {
            columns,
            rows
        }, p));
    }, [
        plugin,
        requestId,
        key,
        columns,
        rows,
        p
    ]);
}
N();
function Oo(o) {
    let { terminalImages } = yA();
    let { internal_querier } = YO();
    let a = TBt();
    let [m, f] = y(()=>a.get());
    P(()=>{
        f(a.get());
        return a.onSettle(()=>f(a.get()));
    }, [
        a
    ]);
    P(()=>{
        if (o) {
            dt(internal_querier, terminalImages);
            f(a.get());
        }
    }, [
        o,
        internal_querier,
        terminalImages,
        a
    ]);
    return m;
}
function Ao({ plugin, elementKey, source, columns, rows }) {
    let { terminalImages } = yA();
    let { internal_querier } = YO();
    let requestId = Te(ee)?.requestId ?? Se;
    let h = vo();
    let T = T6t(source);
    let C = Oo(T && h !== undefined);
    let k = !T || C.state === "settled" && C.value;
    let [b, H] = y();
    let [G, E] = y();
    let L = R(xt);
    en(()=>{
        let id = terminalImages === null || h === undefined ? undefined : terminalImages.allocate(h, Ho({
            plugin,
            requestId,
            key: elementKey
        }));
        if (terminalImages === null || id === undefined) {
            return;
        }
        H({
            id,
            images: terminalImages
        });
        return ()=>{
            terminalImages.free(id);
            L.current = xt;
            H(undefined);
            E(undefined);
        };
    }, [
        terminalImages,
        h,
        plugin,
        requestId,
        elementKey
    ]);
    en(()=>{
        if (b === undefined) {
            return;
        }
        if (!k) {
            L.current = xt;
            E(undefined);
            return;
        }
        let reactKey = er(source);
        let box = `${columns}x${rows}`;
        let W = reactKey !== L.current.reactKey;
        let F = W ? source : L.current.source ?? source;
        let _ = !W && box === L.current.box;
        let q = !W && $eo(F);
        if (_ || q) {
            return;
        }
        let V = b.images.transmit(b.id, or({
            source: F,
            columns,
            rows
        }), {
            resend: !$eo(F)
        });
        L.current = {
            reactKey,
            source: F,
            box
        };
        E(V ? b.id : undefined);
    }, [
        b,
        source,
        k,
        columns,
        rows
    ]);
    Mo({
        plugin,
        requestId,
        key: elementKey
    }, {
        columns,
        rows
    }, le((A)=>{
        let isReference = T6t(A);
        if (isReference) {
            dt(internal_querier, terminalImages);
        }
        let W = Eo({
            hasRoot: terminalImages !== null,
            placeholders: MC().get("kittyGraphics"),
            hasId: b !== undefined,
            isReference,
            files: TBt().get()
        });
        if (W !== undefined || b === undefined) {
            return W;
        }
        let F = $eo(A);
        if (F && b.images.isBackedUp(b.id)) {
            return "the surface has not written its last frames (paused or busy); the object was not sent, unlink it and blit again later";
        }
        if (!b.images.transmit(b.id, or({
            source: A,
            columns,
            rows
        }), {
            resend: !F
        })) {
            return "the terminal sink refused the source";
        }
        L.current = {
            ...L.current,
            source: A,
            box: `${columns}x${rows}`
        };
        E(b.id);
    }, [
        internal_querier,
        terminalImages,
        b,
        columns,
        rows
    ]));
    return G;
}
function No(o) {
    let { plugin, elementKey, columns, rows, alt } = o;
    let u = Ao(o);
    let d = Z(()=>{
        if (u === undefined) {
            return "";
        }
        return INo(u, columns, rows);
    }, [
        u,
        columns,
        rows
    ]);
    if (u === undefined) {
        return Cc(n, {
            dimColor: true
        }, alt);
    }
    return Cc(s, {
        flexShrink: 0,
        width: columns,
        height: rows,
        overflow: "hidden",
        ...elementKey !== undefined && {
            elementKey,
            elementPlugin: plugin
        }
    }, Cc("ink-raw-ansi", {
        rawText: d,
        rawWidth: columns,
        rawHeight: rows
    }));
}
N();
N();
function Fo(o) {
    let i = -Infinity;
    let p = null;
    let a = null;
    let m = Infinity;
    function f() {
        a = null;
        m = Infinity;
        if (p !== null) {
            let x = p;
            p = null;
            i = Date.now();
            o(x);
        }
    }
    function u(x) {
        let g = Date.now() + x;
        if (a !== null && m <= g) {
            return;
        }
        if (a !== null) {
            clearTimeout(a);
        }
        m = g;
        a = setTimeout(f, x);
    }
    function schedule(x, g) {
        let h = Math.max(g, i + eg - Date.now());
        p = x;
        if (h <= 0) {
            if (a !== null) {
                clearTimeout(a);
            }
            f();
        } else {
            u(h);
        }
    }
    return {
        paint: (x)=>{
            schedule(x, 0);
        },
        schedule,
        cancel: ()=>{
            if (a !== null) {
                clearTimeout(a);
            }
            a = null;
            m = Infinity;
            p = null;
        }
    };
}
const Wo = (o, i, paint)=>({
        ...o,
        ...i,
        paint
    });
function _o(o, i) {
    if (o === null || o.attributes.rawText === i) {
        return;
    }
    o.attributes.rawText = i;
    QP(o);
    z$t(o);
}
const Bo = 250;
function nr(o, i, p) {
    let a = i.standing();
    if (a !== "complete") {
        o?.schedule(p, a === "progressing" ? eg : Bo);
    }
}
function Ko({ plugin, elementKey, columns, rows }, i, p) {
    let d = Te(ee);
    let x = R(null);
    let g = R(null);
    en(()=>{
        let h = {
            columns,
            rows
        };
        let T = Fo((k)=>{
            _o(x.current, $os(k, h, i));
            nr(g.current, i, k);
        });
        let C = OLs(Wo({
            plugin,
            requestId: d?.requestId ?? Se,
            key: elementKey
        }, h, T.paint));
        g.current = T;
        return ()=>{
            C();
            T.cancel();
            g.current = null;
        };
    }, [
        plugin,
        elementKey,
        columns,
        rows,
        d,
        i
    ]);
    en(()=>{
        g.current?.cancel();
        nr(g.current, i, p);
    }, [
        p,
        i
    ]);
    return x;
}
function jo(o) {
    let { plugin, elementKey, columns, rows, cells } = o;
    let [u] = y(()=>ILs());
    let d = Z(()=>Mdr(cells, columns, rows).words ?? new Uint32Array, [
        cells,
        columns,
        rows
    ]);
    let ref = Ko(o, u, d);
    let g = Z(()=>$os(d, {
            columns,
            rows
        }, u), [
        d,
        columns,
        rows,
        u
    ]);
    return Cc(s, {
        flexShrink: 0,
        width: columns,
        height: rows,
        overflow: "hidden",
        elementKey,
        elementPlugin: plugin
    }, Cc("ink-raw-ansi", {
        ref,
        rawText: g,
        rawWidth: columns,
        rawHeight: rows
    }));
}
const ht = 8;
function _Yn(o, i) {
    let first = Math.max(0, i - ht + 1);
    let size = Math.max(0, Math.min(ht, o - first));
    let hidden = o - first - size;
    return {
        first,
        size,
        hidden,
        rows: size + (hidden > 0 ? 1 : 0)
    };
}
N();
N();
const pdn = qt(null);
function sr(o) {
    let { plugin, handle, element, options } = o;
    let f = xe({
        plugin,
        handle
    });
    let u = Te(pdn);
    let d = u?.pickedOf(plugin, element) ?? o.value;
    let x = options.find((E)=>E.value === d);
    let g = o.label === undefined ? "" : `${o.label}: `;
    let { hasKeyboardFocus } = f;
    let T = u?.open;
    let C = T !== null && T !== undefined && T.plugin === plugin && T.handle === handle;
    let k = C ? T.highlight : 0;
    let { first, size, hidden } = _Yn(C ? options.length : 0, k);
    return r(s, {
        ref: f.ref,
        flexDirection: "column",
        flexShrink: 0,
        elementKey: element,
        elementPlugin: plugin,
        onClick: f.onClick,
        children: [
            r(n, {
                wrap: "truncate-end",
                children: [
                    e(n, {
                        bold: hasKeyboardFocus,
                        children: g
                    }),
                    x === undefined ? e(n, {
                        dimColor: true,
                        children: "none"
                    }) : e(n, {
                        inverse: hasKeyboardFocus && !C,
                        children: x.label ?? x.value
                    }),
                    e(n, {
                        dimColor: true,
                        children: C ? " ▴" : " ▾"
                    })
                ]
            }),
            options.slice(first, first + size).map((E, L)=>e(n, {
                    inverse: first + L === k,
                    wrap: "truncate-end",
                    children: `  ${E.label ?? E.value}`
                }, E.value)),
            hidden > 0 && e(n, {
                dimColor: true,
                children: `  \u2026 ${hidden} more`
            })
        ]
    });
}
function je(o, i, p = new Set) {
    if (typeof o === "string") {
        return Cc(n, null, o);
    }
    if (o.type === "engine") {
        return i(o.ref);
    }
    if (o.type === "Button") {
        return Cc(Zt, {
            plugin: o.press.plugin,
            handle: o.press.handle,
            element: o.props.key,
            label: o.props.label,
            hotkey: o.props.hotkey,
            action: o.props.action,
            plain: o.props.plain,
            dimColor: o.props.dimColor,
            variant: o.props.variant,
            role: o.props.role,
            hover: o.hover,
            held: (o.children ?? []).map((h)=>{
                if (typeof h === "string") {
                    return h;
                }
                return je(h, i);
            })
        });
    }
    if (o.type === "Input") {
        return Cc(Vt, {
            plugin: o.press.plugin,
            handle: o.press.handle,
            element: o.props.key,
            label: o.props.label,
            placeholder: o.props.placeholder,
            value: o.props.value,
            submitLabel: o.props.submitLabel
        });
    }
    if (o.type === "Select") {
        return Cc(sr, {
            plugin: o.press.plugin,
            handle: o.press.handle,
            element: o.props.key,
            label: o.props.label,
            options: o.props.options,
            value: o.props.value
        });
    }
    if (o.type === "Code") {
        return Cc(mt, o.props);
    }
    if (o.type === "Markdown") {
        return Cc(Xt, {
            text: o.props.text,
            dimColor: o.props.dimColor,
            press: "press" in o ? o.press : undefined,
            elementKey: o.props.key,
            pressableLinks: o.props.pressableLinks
        });
    }
    if (o.type === "Client") {
        return Cc(Io, {
            key: `client:${o.client.plugin}:${o.props.key}`,
            rebuild: (h)=>je(h, ()=>null),
            plugin: o.client.plugin,
            module: o.props.module,
            elementKey: o.props.key,
            props: o.props.props,
            drawn: o.props,
            width: o.props.width,
            height: o.props.height,
            flexGrow: o.props.flexGrow
        });
    }
    if (o.type === "Svg") {
        return Cc(n, {
            dimColor: true
        }, o.props.alt);
    }
    if (o.type === "Image") {
        return Cc(No, {
            ...o.props.key !== undefined && {
                key: `image:${o.image.plugin}:${o.props.key}`
            },
            plugin: o.image.plugin,
            elementKey: o.props.key,
            source: o.props.source,
            columns: o.props.columns,
            rows: o.props.rows,
            alt: o.props.alt
        });
    }
    if (o.type === "Raster") {
        return Cc(jo, {
            key: `raster:${o.raster.plugin}:${o.props.key}`,
            plugin: o.raster.plugin,
            elementKey: o.props.key,
            columns: o.props.columns,
            rows: o.props.rows,
            cells: o.props.cells
        });
    }
    let a = o.type === "Text" || o.type === "Link";
    let m = new Set;
    let f = (o.children ?? []).map((h)=>{
        if (a && typeof h === "string") {
            return h;
        }
        return je(h, i, m);
    });
    if (o.type === "Link") {
        let { href, label } = o.props;
        let C = frt(href);
        let k = f.length > 0 ? f : [
            label ?? C
        ];
        let fallback = f.length === 0 && label === undefined ? undefined : Cc(n, null, ...k, " ", Cc(n, {
            dimColor: true
        }, C));
        return Cc(Wt, {
            url: hrt(href),
            fallback
        }, ...k);
    }
    let group = Bt(o.group?.plugin, o.hover);
    if (o.type === "Box" && o.props?.key !== undefined) {
        let { key, ...rest } = o.props;
        let isLive = v6t(key, p) === undefined;
        return Cc($t, {
            key: isLive ? String(key) : undefined,
            isLive,
            elementKey: String(key),
            layout: rest,
            hover: o.hover,
            group,
            children: f
        });
    }
    let d = o.type === "Box" ? s : n;
    let { hover } = o;
    if (hover === undefined) {
        return Cc(d, De(o.props), ...f);
    }
    return Cc(Ut, {
        isInline: o.type === "Text",
        props: o.props,
        hover,
        group,
        children: f
    });
}
function yt({ tree, input, draw }) {
    let { component, requestId } = input;
    return Cc(ee, {
        value: Z(()=>({
                component,
                requestId
            }), [
            component,
            requestId
        ])
    }, je(tree, (f)=>draw(uo(tree, f, input))));
}
const ir = new Set([
    "Pane"
]);
function pr({ tree, input, draw, submittedBy, onThrown }) {
    let { component } = input;
    let u = e(yt, {
        tree,
        input,
        draw
    });
    let d;
    let x = ()=>d ??= BPn(bPn(input, submittedBy === undefined ? undefined : [
            submittedBy
        ]), tree);
    if (ir.has(component)) {
        return u;
    }
    return e(V0, {
        resetKey: tree,
        fallback: e(yt, {
            tree: Toe,
            input,
            draw
        }),
        telemetryMessage: ()=>O6t(component, x(), "answer"),
        onError: (error)=>{
            onThrown(tree);
            rce.noteThrown(input, tree);
            UPn({
                component,
                teller: x(),
                error
            });
        },
        children: u
    });
}
N();
N();
function ar(o) {
    let i = R(false);
    if (!o) {
        i.current = true;
    }
    return i.current;
}
function lr(o, { input, drawn, contentRows, isFallback }) {
    if (o.rows !== undefined && (isFallback || o.drawn !== drawn || contentRows !== undefined && contentRows >= o.rows)) {
        return {
            rows: undefined,
            wasOff: false,
            input,
            drawn
        };
    }
    if (o.wasOff) {
        return {
            ...o,
            wasOff: false
        };
    }
    return o;
}
function mr(o, { input, drawn, lastRows, contentRows }) {
    let u = contentRows === 0;
    let d = !o.wasOff;
    let x = o.input !== input;
    let g = u && o.rows === undefined;
    if (d) {
        return {
            rows: lastRows,
            wasOff: true,
            input,
            drawn
        };
    }
    if (x) {
        return {
            rows: u ? lastRows : undefined,
            wasOff: true,
            input,
            drawn
        };
    }
    if (g) {
        return {
            ...o,
            rows: lastRows,
            drawn
        };
    }
    return {
        ...o,
        drawn
    };
}
N();
function fr(o) {
    let { isOff, input, drawn, lastRows } = o;
    let [f, u] = y(()=>({
            rows: isOff ? lastRows : undefined,
            wasOff: isOff,
            input,
            drawn
        }));
    let d = isOff ? mr(f, o) : lr(f, o);
    if (d.rows !== f.rows || d.wasOff !== f.wasOff || d.input !== f.input || d.drawn !== f.drawn) {
        u(d);
    }
    return d.rows;
}
N();
function ur(o, i, p) {
    let a = Hi() && i;
    let m = p === undefined ? undefined : [
        p
    ];
    let [f] = y(()=>{
        if (a) {
            return rce.heldRowsOf(o, m);
        }
    });
    let [u, d, x, g] = ZYn(a, y(()=>{
        if (a) {
            return rce.askedOnScreen(o, m);
        }
    })[0]);
    return Z(()=>({
            site: u,
            input: d === undefined ? o : {
                ...o,
                props: {
                    ...o.props,
                    onScreen: d
                }
            },
            lastRows: x ?? f,
            contentRows: g
        }), [
        o,
        d,
        u,
        x,
        g,
        f
    ]);
}
N();
const cr = (o, i)=>{
    if (o) {
        return `${i.component}\x00${i.requestId}\x00` + WPn(i);
    }
    return "";
};
const dr = (o, i)=>t(`ui.render (${o.component} ${o.requestId}): site failed: ${l(i)}`, {
        level: "error"
    });
function xr(o, i, { version, staticFrame, submittedBy }) {
    let origin = submittedBy === undefined ? undefined : [
        submittedBy
    ];
    let [drawn, d] = y(()=>{
        if (o) {
            return rce.settled(i, origin);
        }
    });
    let x = cr(o, i);
    let h = o && i.requestId !== "" ? x$(i) : undefined;
    P(()=>{
        if (h !== undefined) {
            return Uos(h);
        }
    }, [
        h
    ]);
    P(()=>{
        if (!o) {
            d(undefined);
            return;
        }
        if (staticFrame) {
            return;
        }
        let C = new AbortController;
        rhe({
            signal: C.signal,
            origin
        }).ui.render(i).then((k)=>{
            if (!C.signal.aborted) {
                d(k);
            }
        }, (k)=>{
            dr(i, k);
            if (!C.signal.aborted) {
                d(Toe);
            }
        });
        return ()=>{
            C.abort(new Me("ui.render: superseded"));
        };
    }, [
        x,
        version,
        o,
        submittedBy,
        staticFrame
    ]);
    let onThrown = le((C)=>d((k)=>{
            if (k === C) {
                return Toe;
            }
            return k;
        }), []);
    return {
        drawn,
        onThrown
    };
}
const $e = (o)=>Re(RL(), (i)=>sqe(i, o));
function fdn(o, draw, submittedBy) {
    let version = $e(o);
    let staticFrame = Te(Omt);
    let { input, site, lastRows, contentRows } = ur(o, !staticFrame && DYe.has(o.component) && yrt(o.component), submittedBy);
    let g = Z(()=>pTt(input), [
        input,
        version
    ]);
    let { drawn, onThrown } = xr(g, input, {
        version,
        staticFrame,
        submittedBy
    });
    let C = R(undefined);
    let hasThrown = le((A)=>A !== undefined && C.current === A, []);
    let b = ar(g) || staticFrame;
    let minHeight = fr({
        isOff: g && sur(input) === null,
        input: g ? WPn(o) : undefined,
        drawn,
        isFallback: drawn === Toe,
        lastRows,
        contentRows
    });
    P(()=>{
        if (minHeight !== undefined) {
            rce.noteHeldRows(input, minHeight);
        }
    }, [
        minHeight,
        drawn,
        input
    ]);
    let G = Hi();
    let E = Z(()=>(staticFrame || !G) && drawn !== undefined && Adr(drawn), [
        staticFrame,
        G,
        drawn
    ]);
    return {
        node: Cc(s, {
            ref: site,
            flexDirection: "column",
            renderEvent,
            renderComponent: o.component,
            drawPending: g && !drawn && !b || undefined,
            minHeight,
            overflow: E ? "hidden" : undefined
        }, g ? drawn ? pr({
            tree: drawn,
            input,
            draw,
            submittedBy,
            onThrown: (A)=>{
                C.current = A;
                onThrown(A);
            }
        }) : b ? draw(input) : null : draw(input)),
        drawn,
        hasThrown
    };
}
const bU = (o, i, p)=>fdn(o, i, p).node;
N();
function jH(component, i, p) {
    let a = Z(i, p);
    let m = $e({
        surface: "terminal",
        component,
        requestId: a.requestId
    });
    let f = Re(RL(), (d)=>d.get(MPn) ?? 0);
    let isFullscreen = Hi();
    return Z(()=>{
        let d = Z3.get();
        return {
            surface: "terminal",
            component,
            ...d !== undefined && {
                viewport: {
                    columns: d.conversationColumns,
                    rows: d.rows,
                    isFullscreen
                }
            },
            ...a
        };
    }, [
        component,
        a,
        m,
        f,
        isFullscreen
    ]);
}
const bc = {};
Mr(bc, {
    ActionKeysSeat: ()=>Jt,
    BodyColumns: ()=>odn,
    ClickedPress: ()=>sdn,
    CodeBlock: ()=>mt,
    DEFAULT_COLUMNS: ()=>rt,
    DrawnTree: ()=>yt,
    FIELD_MIN_COLUMNS: ()=>Gt,
    FocusedNode: ()=>cdn,
    FocusedPress: ()=>ddn,
    HEX_COLOR_PROPS: ()=>Kt,
    HOST_BOUNDED_COMPONENTS: ()=>ir,
    HotkeySeat: ()=>hYn,
    HoverScope: ()=>$t,
    HoverStyled: ()=>Ut,
    InputField: ()=>Vt,
    InputFields: ()=>idn,
    MARKDOWN_LINK_SCHEMES: ()=>udn,
    MarkdownBlock: ()=>Xt,
    NAMED_TO_HEX: ()=>Wnr,
    PressButton: ()=>Zt,
    RenderInstance: ()=>ee,
    ScopeHovered: ()=>_e,
    SelectField: ()=>sr,
    SelectFields: ()=>pdn,
    SiteColumns: ()=>adn,
    VISIBLE_OPTIONS: ()=>ht,
    adjustHoverGroup: ()=>ft,
    boundedDrawing: ()=>pr,
    clippedHunks: ()=>et,
    clippedLines: ()=>tt,
    default: ()=>bc,
    fieldKey: ()=>aje,
    focusClick: ()=>ldn,
    groupMember: ()=>_t,
    groupOf: ()=>Bt,
    heldBack: ()=>lr,
    heldFor: ()=>uo,
    heldOff: ()=>mr,
    hexOfNamed: ()=>akn,
    highlightPath: ()=>it,
    hoverGroupsStore: ()=>Fe,
    hoverOverridesOf: ()=>ut,
    inputFromTerminal: ()=>i0r,
    listWindow: ()=>_Yn,
    pressFromTerminal: ()=>SIe,
    rebuild: ()=>je,
    releaseInkFocus: ()=>yYn,
    renderInputKey: ()=>cr,
    rulerCut: ()=>Ae,
    selectFromTerminal: ()=>eNo,
    settleQuietly: ()=>Ahe,
    siteFailed: ()=>dr,
    spacedHunks: ()=>be,
    useActionKeys: ()=>Qt,
    useEngineDrew: ()=>ar,
    useHasRenderHooks: ()=>bYn,
    useHeldRows: ()=>fr,
    useHoverGroup: ()=>ct,
    useHoverLit: ()=>jt,
    useOnScreenInput: ()=>ur,
    useRenderAnswer: ()=>xr,
    useRenderDrawing: ()=>fdn,
    useRenderHook: ()=>bU,
    useRenderInput: ()=>jH,
    useRenderVersion: ()=>$e,
    useSettledDraw: ()=>tNo,
    useSiteFocus: ()=>xe,
    withHexColors: ()=>De
});
var aje = (o, i)=>`${o}\x00${i}`;
var i0r = (o)=>Ahe(`ui.input ${o.plugin}`, gPn({
        ...o,
        surface: "terminal"
    }));
var eNo = (o)=>Ahe(`ui.select ${o.plugin}`, yPn({
        ...o,
        surface: "terminal"
    }));
var bYn = (o)=>Re(RL(), ()=>yrt(o));
var tNo = (o)=>rce.settled(o);
export { SIe, odn, sdn, V0, idn, adn, ldn, cdn, ddn, Ka, s0r, udn, hYn, yYn, v$t, _Yn, pdn, fdn, aje, i0r, eNo, bYn, bU, jH, tNo, bc };
