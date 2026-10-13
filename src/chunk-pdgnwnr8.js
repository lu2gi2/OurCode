import { we, mRo, jn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Ei } from "/$bunfs/root/chunk-qch5xj2a.js";
import { wt, Dvr, Gr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Nb } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { Rs } from "/$bunfs/root/chunk-w1n7t02f.js";
import { os } from "/$bunfs/root/chunk-3yz9zdww.js";
import { ae, hc, pt, xO, $1, jo } from "/$bunfs/root/chunk-223dyewd.js";
import { ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Lw, Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { nt, s, n, Wt, Qw } from "/$bunfs/root/chunk-8524cxt8.js";
import { qt, km, Z, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { ib } from "/$bunfs/root/chunk-7hj88wg6.js";
import { V } from "/$bunfs/root/chunk-zby5bms5.js";
import { hj, cve } from "/$bunfs/root/chunk-4b1qzs5x.js";
import { mo } from "/$bunfs/root/chunk-4wvwjbc4.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { eZr } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { YB } from "/$bunfs/root/chunk-d4n0kkf1.js";
import { Ss } from "/$bunfs/root/chunk-17w0r6ry.js";
import { ra } from "/$bunfs/root/chunk-98pm569t.js";
import { S, Sn } from "/$bunfs/root/chunk-cj4xndke.js";
N();
const EDr = 2;
const n$t = 15;
const r$t = qt(null);
function W0(o) {
    let i = w(10);
    let active;
    let c;
    let l;
    if (i[0] !== o) {
        ({ active, children: l, ...c } = o);
        i[0] = o;
        i[1] = active;
        i[2] = c;
        i[3] = l;
    } else {
        active = i[1];
        c = i[2];
        l = i[3];
    }
    let u;
    if (i[4] !== active) {
        u = {
            line: 0,
            column: 0,
            active
        };
        i[4] = active;
        i[5] = u;
    } else {
        u = i[5];
    }
    let ref = Qw(u);
    let p;
    if (i[6] !== c || i[7] !== l || i[8] !== ref) {
        p = e(s, {
            ...c,
            ref,
            children: l
        });
        i[6] = c;
        i[7] = l;
        i[8] = ref;
        i[9] = p;
    } else {
        p = i[9];
    }
    return p;
}
N();
const xt = /\s+/g;
function EXe(o) {
    let o_arrowedSuggestionId = o.arrowedSuggestionId;
    if (o_arrowedSuggestionId != null && o.suggestions[o.selectedSuggestion]?.id === o_arrowedSuggestionId) {
        return o_arrowedSuggestionId;
    }
    return null;
}
function go(o, i, t, c) {
    let l = (p)=>o[p] ?? 1;
    let u = (p)=>{
        let end = p + 1;
        let usedRows = l(p);
        while(end < o.length && usedRows + l(end) <= i){
            usedRows += l(end);
            end++;
        }
        return {
            start: p,
            end,
            usedRows
        };
    };
    let d = u(Math.max(0, Math.min(c, o.length - 1)));
    if (t >= d.end) {
        d = u(t);
    } else if (t < d.start) {
        d = {
            start: t,
            end: t + 1,
            usedRows: l(t)
        };
    }
    while(d.start > 0 && d.usedRows + l(d.start - 1) <= i){
        d.start--;
        d.usedRows += l(d.start);
    }
    return u(d.start);
}
const ho = 5;
function ue(o) {
    if (o.startsWith("file-")) {
        return "+";
    }
    if (o.startsWith("mcp-resource-")) {
        return Nb;
    }
    if (o.startsWith("mcp-template")) {
        return Nb;
    }
    if (o.startsWith("agent-")) {
        return "*";
    }
    return "+";
}
function me(text, query, t = false) {
    let c = text.toLowerCase();
    if (c.length !== text.length) {
        return [];
    }
    let l = c.indexOf(query);
    if (l !== -1) {
        return He(text, [
            [
                l,
                l + query.length
            ]
        ]);
    }
    if (t) {
        return [];
    }
    let u = [];
    let d = 0;
    for (let p of query){
        let f = c.indexOf(p, d);
        if (f === -1) {
            return [];
        }
        let x = f + p.length;
        let m = u.at(-1);
        if (m && m[1] === f) {
            m[1] = x;
        } else {
            u.push([
                f,
                x
            ]);
        }
        d = x;
    }
    return He(text, u);
}
function rt(o) {
    let p = w(13);
    let { text, query, color, isSelected, bold, contiguousOnly } = o;
    let f;
    let x;
    if (p[0] !== bold || p[1] !== color || p[2] !== contiguousOnly || p[3] !== isSelected || p[4] !== query || p[5] !== text) {
        x = Sn;
        g: {
            let m = query ? me(text, query, contiguousOnly) : [];
            if (m.length === 0) {
                const R = !isSelected;
                let C;
                if (p[8] !== bold || p[9] !== color || p[10] !== R || p[11] !== text) {
                    C = e(n, {
                        color,
                        dimColor: R,
                        bold,
                        children: text
                    });
                    p[8] = bold;
                    p[9] = color;
                    p[10] = R;
                    p[11] = text;
                    p[12] = C;
                } else {
                    C = p[12];
                }
                x = C;
                break g;
            }
            let W = [];
            let M = (B, X, K)=>{
                if (B >= X) {
                    return;
                }
                W.push(e(n, {
                    color,
                    dimColor: !K && !isSelected,
                    bold: bold || K,
                    children: text.slice(B, X)
                }, B));
            };
            let A = 0;
            for (const [v, L] of m){
                M(A, v, false);
                M(v, L, true);
                A = L;
            }
            M(A, text.length, false);
            f = e(Y, {
                children: W
            });
        }
        p[0] = bold;
        p[1] = color;
        p[2] = contiguousOnly;
        p[3] = isSelected;
        p[4] = query;
        p[5] = text;
        p[6] = f;
        p[7] = x;
    } else {
        f = p[6];
        x = p[7];
    }
    if (x !== Sn) {
        return x;
    }
    return f;
}
function Zt(o) {
    return o.startsWith("file-") || o.startsWith("mcp-resource-") || o.startsWith("mcp-template") || o.startsWith("agent-");
}
const Ge = km(function(i) {
    let m = w(101);
    let { item, maxColumnWidth, isSelected, allowWrap } = i;
    let d = allowWrap === undefined ? true : allowWrap;
    let columns = ke().columns;
    let f = nt();
    let x = Zt(item.id);
    let R;
    if (m[0] !== item.id) {
        R = item.id.startsWith("emoji:");
        m[0] = item.id;
        m[1] = R;
    } else {
        R = m[1];
    }
    let C = R;
    let g = f && !C ? "" : isSelected ? `${te.pointer} ` : "  ";
    let W = ae(g);
    if (x) {
        let B;
        if (m[2] !== item.id) {
            B = ue(item.id);
            m[2] = item.id;
            m[3] = B;
        } else {
            B = m[3];
        }
        let X = B;
        let K = isSelected ? "suggestion" : undefined;
        let M = !isSelected;
        let A = item.id.startsWith("file-");
        let v = item.id.startsWith("mcp-resource-");
        let L;
        if (m[4] !== item.id) {
            L = item.id.startsWith("mcp-template-value::");
            m[4] = item.id;
            m[5] = L;
        } else {
            L = m[5];
        }
        let U = L;
        let I = item.id.startsWith("mcp-template::");
        let H = item.description ? 3 : 0;
        let k;
        if (A || I || U) {
            let T;
            if (m[6] !== item.description) {
                T = item.description ? Math.min(20, ae(item.description)) : 0;
                m[6] = item.description;
                m[7] = T;
            } else {
                T = m[7];
            }
            let O = T;
            let F = columns - W - 2 - 4 - H - O;
            let Q;
            if (m[8] !== U || m[9] !== item.displayText || m[10] !== F) {
                Q = U ? xO(item.displayText, F) : hc(item.displayText, F);
                m[8] = U;
                m[9] = item.displayText;
                m[10] = F;
                m[11] = Q;
            } else {
                Q = m[11];
            }
            k = Q;
        } else if (v) {
            let T;
            if (m[12] !== item.displayText) {
                T = pt(item.displayText, 30);
                m[12] = item.displayText;
                m[13] = T;
            } else {
                T = m[13];
            }
            k = T;
        } else {
            k = item.displayText;
        }
        let ce = columns - W - 2 - ae(k) - H - 4;
        let it;
        if (item.description) {
            let kt = Math.max(0, ce);
            let T;
            if (m[14] !== item.description || m[15] !== kt) {
                T = pt(item.description.replace(xt, " "), kt);
                m[14] = item.description;
                m[15] = kt;
                m[16] = T;
            } else {
                T = m[16];
            }
            let de = T;
            it = `${g}${X} ${k} \u2013 ${de}`;
        } else {
            it = `${g}${X} ${k}`;
        }
        let T;
        if (m[17] !== M || m[18] !== it || m[19] !== K) {
            T = e(n, {
                color: K,
                dimColor: M,
                wrap: "truncate",
                children: it
            });
            m[17] = M;
            m[18] = it;
            m[19] = K;
            m[20] = T;
        } else {
            T = m[20];
        }
        return T;
    }
    let b = item.description || item.tag || item.kind !== undefined || item.sourceTag;
    let G = maxColumnWidth ?? ae(item.displayText) + 5;
    let B;
    if (m[21] !== G || m[22] !== columns || m[23] !== b || m[24] !== f || m[25] !== item) {
        B = b ? ee(item, columns, G, f) : Math.min(G, columns - 4);
        m[21] = G;
        m[22] = columns;
        m[23] = b;
        m[24] = f;
        m[25] = item;
        m[26] = B;
    } else {
        B = m[26];
    }
    let j = B;
    let D = item.color || (isSelected ? "suggestion" : undefined);
    let J = !isSelected;
    let bold = C && isSelected;
    let Tt = j - 2 - (b && !C ? W : 0);
    let item_displayText = item.displayText;
    if (ae(item_displayText) > Tt) {
        let L;
        if (m[27] !== item_displayText || m[28] !== Tt) {
            L = item_displayText.includes("/") || item_displayText.includes("\\") ? xO(item_displayText, Tt) : pt(item_displayText, Tt);
            m[27] = item_displayText;
            m[28] = Tt;
            m[29] = L;
        } else {
            L = m[29];
        }
        item_displayText = L;
    }
    let L;
    if (m[30] !== j || m[31] !== item_displayText || m[32] !== W) {
        L = " ".repeat(Math.max(0, j - ae(item_displayText) - W));
        m[30] = j;
        m[31] = item_displayText;
        m[32] = W;
        m[33] = L;
    } else {
        L = m[33];
    }
    let St = L;
    let lt = item.tag ? `[${item.tag}] ` : "";
    let Ot = ae(lt);
    let at;
    let et;
    let ot;
    let T;
    let Q;
    if (m[34] !== item) {
        let { kindLaneText, kindLabel, sourceText } = _t(item);
        et = kindLaneText;
        ot = sourceText;
        at = kindLabel === "skill" ? "skill" : kindLabel === "agent" ? "background" : undefined;
        T = ae(et);
        Q = ae(ot);
        m[34] = item;
        m[35] = at;
        m[36] = et;
        m[37] = ot;
        m[38] = T;
        m[39] = Q;
    } else {
        at = m[35];
        et = m[36];
        ot = m[37];
        T = m[38];
        Q = m[39];
    }
    let Ft = T + Q;
    let jt = Math.max(0, columns - j - Ot - Ft - 4);
    let Mt;
    let Lt;
    let Pt;
    let Bt;
    let Rt;
    if (m[40] !== d || m[41] !== bold || m[42] !== columns || m[43] !== jt || m[44] !== j || m[45] !== item_displayText || m[46] !== isSelected || m[47] !== item.description || m[48] !== item.query || m[49] !== at || m[50] !== et || m[51] !== Ft || m[52] !== St || m[53] !== g || m[54] !== J || m[55] !== ot || m[56] !== lt || m[57] !== Ot || m[58] !== D) {
        Rt = Sn;
        fn: {
            let so = item.description ? item.description.replace(xt, " ").trim() : "";
            let [text, io] = d ? Ue(so, jt) : [
                pt(so, jt),
                ""
            ];
            Mt = isSelected ? "suggestion" : undefined;
            let ct;
            if (m[64] !== bold || m[65] !== g || m[66] !== J || m[67] !== D) {
                ct = g ? e(n, {
                    color: D,
                    dimColor: J,
                    bold,
                    children: g
                }) : null;
                m[64] = bold;
                m[65] = g;
                m[66] = J;
                m[67] = D;
                m[68] = ct;
            } else {
                ct = m[68];
            }
            let dt;
            if (m[69] !== bold || m[70] !== item_displayText || m[71] !== isSelected || m[72] !== item.query || m[73] !== D) {
                dt = e(rt, {
                    text: item_displayText,
                    query: item.query,
                    color: D,
                    isSelected,
                    bold
                });
                m[69] = bold;
                m[70] = item_displayText;
                m[71] = isSelected;
                m[72] = item.query;
                m[73] = D;
                m[74] = dt;
            } else {
                dt = m[74];
            }
            let ut;
            if (m[75] !== bold || m[76] !== St || m[77] !== J || m[78] !== D) {
                ut = e(n, {
                    color: D,
                    dimColor: J,
                    bold,
                    children: St
                });
                m[75] = bold;
                m[76] = St;
                m[77] = J;
                m[78] = D;
                m[79] = ut;
            } else {
                ut = m[79];
            }
            let Dt;
            if (m[80] !== at || m[81] !== et) {
                Dt = et ? e(n, {
                    color: at,
                    dimColor: at === undefined,
                    children: et
                }) : null;
                m[80] = at;
                m[81] = et;
                m[82] = Dt;
            } else {
                Dt = m[82];
            }
            let lo;
            if (m[83] !== lt) {
                lo = lt ? e(n, {
                    dimColor: true,
                    children: lt
                }) : null;
                m[83] = lt;
                m[84] = lo;
            } else {
                lo = m[84];
            }
            let ao;
            if (m[85] !== ot) {
                ao = ot ? e(n, {
                    dimColor: true,
                    children: ot
                }) : null;
                m[85] = ot;
                m[86] = ao;
            } else {
                ao = m[86];
            }
            Lt = r(n, {
                wrap: "truncate",
                children: [
                    ct,
                    dt,
                    ut,
                    Dt,
                    lo,
                    ao,
                    e(rt, {
                        text,
                        query: item.query,
                        color: Mt,
                        isSelected,
                        bold,
                        contiguousOnly: true
                    })
                ]
            });
            if (!io) {
                Rt = Lt;
                break fn;
            }
            Pt = j + Ot + Ft;
            Bt = pt(io, Math.max(0, columns - Pt - 4));
        }
        m[40] = d;
        m[41] = bold;
        m[42] = columns;
        m[43] = jt;
        m[44] = j;
        m[45] = item_displayText;
        m[46] = isSelected;
        m[47] = item.description;
        m[48] = item.query;
        m[49] = at;
        m[50] = et;
        m[51] = Ft;
        m[52] = St;
        m[53] = g;
        m[54] = J;
        m[55] = ot;
        m[56] = lt;
        m[57] = Ot;
        m[58] = D;
        m[59] = Mt;
        m[60] = Lt;
        m[61] = Pt;
        m[62] = Bt;
        m[63] = Rt;
    } else {
        Mt = m[59];
        Lt = m[60];
        Pt = m[61];
        Bt = m[62];
        Rt = m[63];
    }
    if (Rt !== Sn) {
        return Rt;
    }
    let text = Bt;
    let ct;
    if (m[87] !== Pt) {
        ct = " ".repeat(Pt);
        m[87] = Pt;
        m[88] = ct;
    } else {
        ct = m[88];
    }
    let dt;
    if (m[89] !== bold || m[90] !== Mt || m[91] !== text || m[92] !== isSelected || m[93] !== item.query) {
        dt = e(rt, {
            text,
            query: item.query,
            color: Mt,
            isSelected,
            bold,
            contiguousOnly: true
        });
        m[89] = bold;
        m[90] = Mt;
        m[91] = text;
        m[92] = isSelected;
        m[93] = item.query;
        m[94] = dt;
    } else {
        dt = m[94];
    }
    let ut;
    if (m[95] !== dt || m[96] !== ct) {
        ut = r(n, {
            wrap: "truncate",
            children: [
                ct,
                dt
            ]
        });
        m[95] = dt;
        m[96] = ct;
        m[97] = ut;
    } else {
        ut = m[97];
    }
    let Dt;
    if (m[98] !== Lt || m[99] !== ut) {
        Dt = r(s, {
            flexDirection: "column",
            children: [
                Lt,
                ut
            ]
        });
        m[98] = Lt;
        m[99] = ut;
        m[100] = Dt;
    } else {
        Dt = m[100];
    }
    return Dt;
});
function eve({ suggestions, selectedSuggestion, maxColumnWidth, emptyMessage, overlay, noPad, onSelect, hoveredId, onHoverChange, cursorRowId, keepWindow = false }) {
    let { rows, columns } = ke();
    let g = nt();
    let W = ib();
    let maxColumnWidth_1 = Z(()=>maxColumnWidth ?? suggestions.reduce((acc, suggestion)=>Math.max(acc, ae(suggestion.displayText)), 0) + 5, [
        suggestions,
        maxColumnWidth
    ]);
    let [X, K] = y(null);
    let M = overlay ? ho : Math.max(1, Math.min(Math.max(6, Math.floor(rows / 2)), rows - 3));
    if (suggestions.length === 0) {
        if (!emptyMessage) {
            return null;
        }
        let b = noPad ? 0 : Math.max(0, M - 1);
        return r(s, {
            flexDirection: "column",
            justifyContent: overlay ? undefined : "flex-end",
            children: [
                e(mo, {
                    children: emptyMessage
                }),
                Array.from({
                    length: b
                }, (G, j)=>e(n, {
                        children: " "
                    }, `pad-${j}`))
            ]
        });
    }
    let A = Math.max(0, Math.min(selectedSuggestion, suggestions.length - 1));
    let v = Math.max(0, A - M);
    let L = suggestions.slice(v, A + M + 1);
    let allowWrap = M >= 2;
    let I = L.map((b)=>{
        if (allowWrap) {
            return _o(b, columns, maxColumnWidth_1, g);
        }
        return 1;
    });
    let H = A - v;
    let k = H;
    let T = H + 1;
    let O = I[H] ?? 1;
    let F = 0;
    let Q = Math.floor(M / 2);
    while(k > 0 && O < M && F + (I[k - 1] ?? 1) <= Q){
        k--;
        F += I[k] ?? 1;
    }
    O += F;
    while(T < L.length && O + (I[T] ?? 1) <= M){
        O += I[T] ?? 1;
        T++;
    }
    while(k > 0 && O + (I[k - 1] ?? 1) <= M){
        k--;
        O += I[k] ?? 1;
    }
    if (keepWindow) {
        let b = go(I, M, H, (X ?? v + k) - v);
        k = b.start;
        T = b.end;
        O = b.usedRows;
        if (v + k !== X) {
            K(v + k);
        }
    }
    let ce = L.slice(k, T);
    let it = noPad ? 0 : Math.max(0, M - O);
    let kt = suggestions[selectedSuggestion]?.id;
    let de = hoveredId != null && suggestions.some((b)=>b.id === hoveredId) ? hoveredId : undefined;
    return r(s, {
        flexDirection: "column",
        justifyContent: overlay ? undefined : "flex-end",
        onMouseLeave: onSelect ? ()=>onHoverChange?.(null) : undefined,
        children: [
            ce.map((item, G)=>{
                let j = v + k + G;
                let D = e(Ge, {
                    item,
                    maxColumnWidth: maxColumnWidth_1,
                    isSelected: item.id === (de ?? kt),
                    allowWrap
                }, item.id);
                if (cursorRowId != null && item.id === cursorRowId) {
                    return e(W0, {
                        active: true,
                        children: D
                    }, item.id);
                }
                if (!onSelect) {
                    return D;
                }
                return e(s, {
                    onMouseEnter: ()=>onHoverChange?.(item.id),
                    onClick: (J)=>{
                        if (W(J)) {
                            return;
                        }
                        onSelect(j, item.id);
                    },
                    children: D
                }, item.id);
            }),
            Array.from({
                length: it
            }, (b, G)=>e(n, {
                    children: " "
                }, `pad-${G}`))
        ]
    });
}
const vDr = km(eve);
function _t(o) {
    let kindLabel = o.kind === undefined || o.kind === "action" ? "" : o.kind === "info" ? "config" : o.kind;
    let kindLaneText = o.kind === undefined ? "" : kindLabel + Ei(" ", 7 - ae(kindLabel));
    let sourceText = o.sourceTag ? `[${o.sourceTag}] ` : "";
    return {
        kindLaneText,
        kindLabel,
        sourceText
    };
}
function ee(o, columns, t, c) {
    let l = Math.floor(columns * 0.4);
    if (t > l) {
        return l + No(o, columns, c);
    }
    return t;
}
function No(o, i, t) {
    if (t || o.id.startsWith("emoji:")) {
        return 0;
    }
    let c = o.tag ? ae(`[${o.tag}] `) : 0;
    let { kindLaneText, sourceText } = _t(o);
    let d = i - Math.floor(i * 0.4) - c - ae(kindLaneText) - ae(sourceText) - 4 - (o.description ? 1 : 0);
    let p = ae(`${te.pointer} `);
    if (d < 0) {
        return p;
    }
    return Math.min(p, d);
}
function _o(o, columns, maxColumnWidth, c) {
    if (Zt(o.id) || !o.description) {
        return 1;
    }
    let l = ee(o, columns, maxColumnWidth, c);
    let u = o.tag ? ae(`[${o.tag}] `) : 0;
    let { kindLaneText, sourceText } = _t(o);
    let f = Math.max(0, columns - l - u - ae(kindLaneText) - ae(sourceText) - 4);
    if (f <= 0) {
        return 1;
    }
    let x = o.description.replace(xt, " ").trim();
    if (ae(x) > f) {
        return 2;
    }
    return 1;
}
function Ue(o, i) {
    if (i <= 0 || ae(o) <= i) {
        return [
            o,
            ""
        ];
    }
    let t = $1(o, i);
    let c = o.slice(t.length);
    if (c.startsWith(" ")) {
        return [
            t,
            c.trimStart()
        ];
    }
    let l = t.lastIndexOf(" ");
    if (l > 0) {
        return [
            t.slice(0, l),
            o.slice(l + 1)
        ];
    }
    return [
        t,
        c
    ];
}
var Ao = /[^\u0020-\u02ff]/;
function He(text, i) {
    if (i.length === 0 || !Ao.test(text)) {
        return i;
    }
    let t = new Set;
    for (let { index } of ra().segment(text)){
        t.add(index);
    }
    let c = [];
    for (let [l, u] of i){
        let d = l;
        while(d > 0 && !t.has(d)){
            d--;
        }
        let p = u;
        while(p < text.length && !t.has(p)){
            p++;
        }
        let f = c.at(-1);
        if (f && d <= f[1]) {
            f[1] = Math.max(f[1], p);
        } else {
            c.push([
                d,
                p
            ]);
        }
    }
    return c;
}
const kXe = ze(Ss(), (o)=>o.set(undefined));
const wee = ()=>kXe.get() ?? {
        kept: undefined,
        takenAfter: 0,
        runs: 0
    };
const vee = ()=>kXe.set({
        ...wee(),
        kept: undefined
    });
function rve({ segments }) {
    return segments.map((i, t)=>{
        let c = e(n, {
            color: i.color,
            dimColor: i.dim,
            bold: i.bold,
            children: i.text
        }, t);
        if (i.url === undefined) {
            return c;
        }
        return e(Wt, {
            url: i.url,
            children: c
        }, t);
    });
}
function Vo(u) {
    return u.notifications.current;
}
function Cfe() {
    let t = w(12);
    let o = V(Vo);
    let i = V(hj);
    if (!o || !cve(o, i)) {
        return null;
    }
    if ("jsx" in o) {
        let c;
        if (t[0] !== o.jsx || t[1] !== o.key) {
            c = e(n, {
                wrap: "truncate",
                children: o.jsx
            }, o.key);
            t[0] = o.jsx;
            t[1] = o.key;
            t[2] = c;
        } else {
            c = t[2];
        }
        return c;
    }
    if ("segments" in o) {
        let c;
        if (t[3] !== o.segments) {
            c = e(rve, {
                segments: o.segments
            });
            t[3] = o.segments;
            t[4] = c;
        } else {
            c = t[4];
        }
        let l;
        if (t[5] !== o.key || t[6] !== c) {
            l = e(n, {
                wrap: "truncate",
                children: c
            }, o.key);
            t[5] = o.key;
            t[6] = c;
            t[7] = l;
        } else {
            l = t[7];
        }
        return l;
    }
    const c = !o.color;
    let l;
    if (t[8] !== o.color || t[9] !== o.text || t[10] !== c) {
        l = e(n, {
            color: o.color,
            dimColor: c,
            wrap: "truncate",
            children: o.text
        });
        t[8] = o.color;
        t[9] = o.text;
        t[10] = c;
        t[11] = l;
    } else {
        l = t[11];
    }
    return l;
}
function kDr(o) {
    if (o >= 70) {
        return "horizontal";
    }
    return "compact";
}
function _Ie(o, i) {
    if (ae(o) <= i) {
        return o;
    }
    let t = "/";
    let c = "…";
    let l = 1;
    let u = 1;
    let d = o.split(t);
    let p = d[0] || "";
    let f = d.at(-1) || "";
    let x = ae(p);
    let m = ae(f);
    if (d.length === 1) {
        return pt(o, i);
    }
    if (p === "" && l + u + m >= i) {
        return `${t}${pt(f, Math.max(1, i - u))}`;
    }
    if (p !== "" && l * 2 + u + m >= i) {
        return `${c}${t}${pt(f, Math.max(1, i - l - u))}`;
    }
    if (d.length === 2) {
        let g = i - l - u - m;
        return `${$1(p, g)}${c}${t}${f}`;
    }
    let R = i - x - m - l - 2 * u;
    if (R <= 0) {
        let g = Math.max(0, i - m - l - 2 * u);
        return `${$1(p, g)}${t}${c}${t}${f}`;
    }
    let C = [];
    for(let g = d.length - 2; g > 0; g--){
        let W = d[g];
        if (W && ae(W) + u <= R) {
            C.unshift(W);
            R -= ae(W) + u;
        } else {
            break;
        }
    }
    if (C.length === 0) {
        return `${p}${t}${c}${t}${f}`;
    }
    return `${p}${t}${c}${t}${C.join(t)}${t}${f}`;
}
function hmt() {
    let version = a.DEMO_VERSION ?? `${({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).VERSION}${YB()}`;
    let i = mRo();
    let t = a.DEMO_VERSION ? "/code/claude" : jn() && (Gr("tengu_violin_wood", false) || Gr(eZr, false)) ? Rs(we()) : os(se());
    let cwd = a.CLAUDE_CODE_HIDE_CWD ? "" : i ? `${t} in ${i.replace(/^https?:\/\//, "")}` : t;
    let l = Ie();
    let billingType = l !== "firstParty" ? Lw[l] : wt() ? Dvr() : "API Usage Billing";
    let agent = ft().agent;
    return {
        version,
        cwd,
        billingType,
        agentName: agent
    };
}
function TDr(o, truncatedBilling, t) {
    if (ae(o) + 3 + ae(truncatedBilling) > t) {
        return {
            shouldSplit: true,
            truncatedModel: jo(o, t),
            truncatedBilling: jo(truncatedBilling, t)
        };
    }
    return {
        shouldSplit: false,
        truncatedModel: jo(o, Math.max(t - ae(truncatedBilling) - 3, 10)),
        truncatedBilling
    };
}
const qo = {
    default: {
        eyes: "open",
        arms: "down",
        feet: "both"
    },
    "arms-up": {
        eyes: "open",
        arms: "up",
        feet: "both"
    },
    "look-left": {
        eyes: "left",
        arms: "down",
        feet: "both"
    },
    "look-right": {
        eyes: "right",
        arms: "down",
        feet: "both"
    }
};
const Ye = {
    down: {
        r1L: " ▐",
        r1R: "",
        r2L: "▝▜",
        r2R: "█▀"
    },
    up: {
        r1L: "▗▟",
        r1R: "▄",
        r2L: " ▜",
        r2R: "█▘"
    },
    "one-up": {
        r1L: " ▐",
        r1R: "▄",
        r2L: "▝▜",
        r2R: "█▘"
    }
};
const Xe = {
    open: [
        {
            glyphs: "▛███▛█"
        }
    ],
    left: [
        {
            glyphs: "▟███▟█"
        }
    ],
    right: [
        {
            glyphs: "█▟███▟"
        }
    ],
    closed: [
        {
            glyphs: "▂",
            lid: true
        },
        {
            glyphs: "███"
        },
        {
            glyphs: "▂",
            lid: true
        },
        {
            glyphs: "█"
        }
    ],
    wink: [
        {
            glyphs: "▛███"
        },
        {
            glyphs: "▂",
            lid: true
        },
        {
            glyphs: "█"
        }
    ]
};
const Je = {
    both: " ▝▝   ▝▝ ",
    left: " ▝▝      ",
    right: "      ▝▝ "
};
const Qe = {
    open: " ▗   ▖ ",
    left: " ▘   ▘ ",
    right: " ▝   ▝ ",
    closed: " ▂   ▂ ",
    wink: " ▗   ▂ "
};
const Ze = {
    "right-12": [
        {
            glyphs: " ▐█▜██▛█ ",
            from: 2,
            to: 8
        },
        {
            glyphs: "▝▜██████▀",
            from: 2,
            to: 7
        },
        {
            glyphs: " ▝▝   ▝▝ ",
            from: 0,
            to: 0
        }
    ],
    "right-30": [
        {
            glyphs: "  █▛██▛▌ ",
            from: 2,
            to: 7
        },
        {
            glyphs: " ▝█████▛ ",
            from: 2,
            to: 7
        },
        {
            glyphs: "  ▘▘  ▘▘ ",
            from: 0,
            to: 0
        }
    ],
    "right-55": [
        {
            glyphs: "  ▐█▛█▜  ",
            from: 3,
            to: 7
        },
        {
            glyphs: "  ▐████  ",
            from: 3,
            to: 7
        },
        {
            glyphs: "  ▝▝ ▝▝  ",
            from: 0,
            to: 0
        }
    ],
    "right-75": [
        {
            glyphs: "   ██▛▌  ",
            from: 3,
            to: 6
        },
        {
            glyphs: "   ███▌  ",
            from: 3,
            to: 6
        },
        {
            glyphs: "   ▘  ▘  ",
            from: 0,
            to: 0
        }
    ],
    edge: [
        {
            glyphs: "   ▐██   ",
            from: 4,
            to: 6
        },
        {
            glyphs: "   ▐██   ",
            from: 4,
            to: 6
        },
        {
            glyphs: "   ▝ ▝   ",
            from: 0,
            to: 0
        }
    ],
    "back-105": [
        {
            glyphs: "   ███▌  ",
            from: 3,
            to: 6
        },
        {
            glyphs: "   ███▌  ",
            from: 3,
            to: 6
        },
        {
            glyphs: "   ▘  ▘  ",
            from: 0,
            to: 0
        }
    ],
    "back-125": [
        {
            glyphs: "  ▐████  ",
            from: 3,
            to: 7
        },
        {
            glyphs: "  ▐████  ",
            from: 3,
            to: 7
        },
        {
            glyphs: "  ▝▝ ▝▝  ",
            from: 0,
            to: 0
        }
    ],
    "back-150": [
        {
            glyphs: "  █████▌ ",
            from: 2,
            to: 7
        },
        {
            glyphs: " ▝█████▛ ",
            from: 2,
            to: 7
        },
        {
            glyphs: "  ▘▘  ▘▘ ",
            from: 0,
            to: 0
        }
    ],
    back: [
        {
            glyphs: " ▐██████ ",
            from: 2,
            to: 8
        },
        {
            glyphs: "▝▜██████▀",
            from: 2,
            to: 7
        },
        {
            glyphs: " ▝▝   ▝▝ ",
            from: 0,
            to: 0
        }
    ],
    "left-75": [
        {
            glyphs: "   ▛██▌  ",
            from: 3,
            to: 6
        },
        {
            glyphs: "   ███▌  ",
            from: 3,
            to: 6
        },
        {
            glyphs: "   ▘  ▘  ",
            from: 0,
            to: 0
        }
    ],
    "left-55": [
        {
            glyphs: "  ▐▜▛██  ",
            from: 3,
            to: 7
        },
        {
            glyphs: "  ▐████  ",
            from: 3,
            to: 7
        },
        {
            glyphs: "  ▝▝ ▝▝  ",
            from: 0,
            to: 0
        }
    ],
    "left-30": [
        {
            glyphs: "  ▛██▛█▌ ",
            from: 2,
            to: 7
        },
        {
            glyphs: " ▝█████▛ ",
            from: 2,
            to: 7
        },
        {
            glyphs: "  ▘▘  ▘▘ ",
            from: 0,
            to: 0
        }
    ],
    "left-12": [
        {
            glyphs: " ▐▛███▜█ ",
            from: 2,
            to: 8
        },
        {
            glyphs: "▝▜██████▀",
            from: 2,
            to: 7
        },
        {
            glyphs: " ▝▝   ▝▝ ",
            from: 0,
            to: 0
        }
    ]
};
function V4n(o) {
    if (typeof o === "string") {
        return qo[o];
    }
    return o;
}
function Bcn(o) {
    return typeof o !== "string" && "facing" in o;
}
function tve() {
    return a.terminal !== "Apple_Terminal";
}
function nve(o) {
    let i = w(47);
    let t;
    if (i[0] !== o) {
        t = o === undefined ? {} : o;
        i[0] = o;
        i[1] = t;
    } else {
        t = i[1];
    }
    let { pose, color, paint } = t;
    let d = pose === undefined ? "default" : pose;
    let p = color === undefined ? "clawd_body" : color;
    if (nt()) {
        return null;
    }
    if (Bcn(d)) {
        let x;
        if (i[2] !== p || i[3] !== d) {
            x = tve() ? e(le, {
                facing: d.facing,
                color: p
            }) : e(Ct, {
                eyes: "open",
                color: p
            });
            i[2] = p;
            i[3] = d;
            i[4] = x;
        } else {
            x = i[4];
        }
        return x;
    }
    let x;
    if (i[5] !== d) {
        x = V4n(d);
        i[5] = d;
        i[6] = x;
    } else {
        x = i[6];
    }
    let m = x;
    if (!tve()) {
        let R;
        if (i[7] !== p || i[8] !== m.eyes) {
            R = e(Ct, {
                eyes: m.eyes,
                color: p
            });
            i[7] = p;
            i[8] = m.eyes;
            i[9] = R;
        } else {
            R = i[9];
        }
        return R;
    }
    let C = Ye[m.arms];
    let R;
    if (i[10] !== p || i[11] !== paint) {
        R = paint ?? (()=>p);
        i[10] = p;
        i[11] = paint;
        i[12] = R;
    } else {
        R = i[12];
    }
    let paint_1 = R;
    let W;
    if (i[13] !== m.eyes) {
        W = [];
        for (const span of Xe[m.eyes]){
            let X = W.at(-1);
            W.push({
                span,
                column: X ? X.column + X.span.glyphs.length : 2
            });
        }
        i[13] = m.eyes;
        i[14] = W;
    } else {
        W = i[14];
    }
    let K;
    if (i[15] !== C.r1L || i[16] !== paint_1) {
        K = e(_, {
            glyphs: C.r1L,
            column: 0,
            row: 0,
            paint: paint_1
        });
        i[15] = C.r1L;
        i[16] = paint_1;
        i[17] = K;
    } else {
        K = i[17];
    }
    let M;
    if (i[18] !== paint_1 || i[19] !== W) {
        M = W.map(({ span, column })=>e(_, {
                glyphs: span.glyphs,
                column,
                row: 0,
                paint: paint_1,
                on: span.lid ? "lid" : "eyes"
            }, column));
        i[18] = paint_1;
        i[19] = W;
        i[20] = M;
    } else {
        M = i[20];
    }
    let A;
    if (i[21] !== C.r1R || i[22] !== paint_1) {
        A = e(_, {
            glyphs: C.r1R,
            column: 8,
            row: 0,
            paint: paint_1
        });
        i[21] = C.r1R;
        i[22] = paint_1;
        i[23] = A;
    } else {
        A = i[23];
    }
    let U;
    if (i[24] !== K || i[25] !== M || i[26] !== A) {
        U = r(n, {
            children: [
                K,
                M,
                A
            ]
        });
        i[24] = K;
        i[25] = M;
        i[26] = A;
        i[27] = U;
    } else {
        U = i[27];
    }
    let I;
    if (i[28] !== C.r2L || i[29] !== paint_1) {
        I = e(_, {
            glyphs: C.r2L,
            column: 0,
            row: 1,
            paint: paint_1
        });
        i[28] = C.r2L;
        i[29] = paint_1;
        i[30] = I;
    } else {
        I = i[30];
    }
    let H;
    if (i[31] !== paint_1) {
        H = e(_, {
            glyphs: "█████",
            column: 2,
            row: 1,
            paint: paint_1,
            on: "eyes"
        });
        i[31] = paint_1;
        i[32] = H;
    } else {
        H = i[32];
    }
    let k;
    if (i[33] !== C.r2R || i[34] !== paint_1) {
        k = e(_, {
            glyphs: C.r2R,
            column: 7,
            row: 1,
            paint: paint_1
        });
        i[33] = C.r2R;
        i[34] = paint_1;
        i[35] = k;
    } else {
        k = i[35];
    }
    let T;
    if (i[36] !== I || i[37] !== H || i[38] !== k) {
        T = r(n, {
            children: [
                I,
                H,
                k
            ]
        });
        i[36] = I;
        i[37] = H;
        i[38] = k;
        i[39] = T;
    } else {
        T = i[39];
    }
    const glyphs = Je[m.feet];
    let F;
    if (i[40] !== paint_1 || i[41] !== glyphs) {
        F = e(n, {
            children: e(_, {
                glyphs,
                column: 0,
                row: 2,
                paint: paint_1
            })
        });
        i[40] = paint_1;
        i[41] = glyphs;
        i[42] = F;
    } else {
        F = i[42];
    }
    let Q;
    if (i[43] !== T || i[44] !== F || i[45] !== U) {
        Q = r(s, {
            flexDirection: "column",
            flexShrink: 0,
            children: [
                U,
                T,
                F
            ]
        });
        i[43] = T;
        i[44] = F;
        i[45] = U;
        i[46] = Q;
    } else {
        Q = i[46];
    }
    return Q;
}
function _({ glyphs, column, row, paint, on }) {
    let u = [];
    for (let [d, p] of Array.from(glyphs).entries()){
        let f = u.at(-1);
        let x = p === " " && f ? f.color : paint(column + d, row);
        if (f?.color === x) {
            f.glyphs += p;
        } else {
            u.push({
                glyphs: p,
                color: x
            });
        }
    }
    return u.map((d, p)=>e(n, {
            color: on === "lid" ? "clawd_background" : d.color,
            backgroundColor: on === "lid" ? d.color : on && "clawd_background",
            children: d.glyphs
        }, p));
}
function le(o) {
    let l = w(7);
    let { facing, color } = o;
    const c = Ze[facing];
    let u;
    if (l[0] !== color || l[1] !== c) {
        let d;
        if (l[3] !== color) {
            d = ({ glyphs, from, to }, f)=>r(n, {
                    color,
                    children: [
                        glyphs.slice(0, from),
                        e(n, {
                            backgroundColor: "clawd_background",
                            children: glyphs.slice(from, to)
                        }),
                        glyphs.slice(to)
                    ]
                }, f);
            l[3] = color;
            l[4] = d;
        } else {
            d = l[4];
        }
        u = c.map(d);
        l[0] = color;
        l[1] = c;
        l[2] = u;
    } else {
        u = l[2];
    }
    let d;
    if (l[5] !== u) {
        d = e(s, {
            flexDirection: "column",
            flexShrink: 0,
            children: u
        });
        l[5] = u;
        l[6] = d;
    } else {
        d = l[6];
    }
    return d;
}
function Ct(o) {
    let c = w(19);
    let { eyes, color } = o;
    let l;
    if (c[0] !== color) {
        l = e(n, {
            color,
            children: "▗"
        });
        c[0] = color;
        c[1] = l;
    } else {
        l = c[1];
    }
    const u = Qe[eyes];
    let d;
    if (c[2] !== color || c[3] !== u) {
        d = e(n, {
            color: "clawd_background",
            backgroundColor: color,
            children: u
        });
        c[2] = color;
        c[3] = u;
        c[4] = d;
    } else {
        d = c[4];
    }
    let p;
    if (c[5] !== color) {
        p = e(n, {
            color,
            children: "▖"
        });
        c[5] = color;
        c[6] = p;
    } else {
        p = c[6];
    }
    let f;
    if (c[7] !== l || c[8] !== d || c[9] !== p) {
        f = r(n, {
            children: [
                l,
                d,
                p
            ]
        });
        c[7] = l;
        c[8] = d;
        c[9] = p;
        c[10] = f;
    } else {
        f = c[10];
    }
    let x;
    if (c[11] === S) {
        x = " ".repeat(7);
        c[11] = x;
    } else {
        x = c[11];
    }
    let m;
    let R;
    if (c[12] !== color) {
        m = e(n, {
            backgroundColor: color,
            children: x
        });
        R = e(n, {
            color,
            children: "▘▘   ▝▝"
        });
        c[12] = color;
        c[13] = m;
        c[14] = R;
    } else {
        m = c[13];
        R = c[14];
    }
    let C;
    if (c[15] !== f || c[16] !== m || c[17] !== R) {
        C = r(s, {
            flexDirection: "column",
            alignItems: "center",
            children: [
                f,
                m,
                R
            ]
        });
        c[15] = f;
        c[16] = m;
        c[17] = R;
        c[18] = C;
    } else {
        C = c[18];
    }
    return C;
}
export { W0, EXe, eve, vDr, EDr, n$t, r$t, kXe, wee, vee, kDr, _Ie, hmt, TDr, V4n, Bcn, tve, nve, rve, Cfe };
