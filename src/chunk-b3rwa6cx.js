import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { Hi, nt, yj, s, n, du, CIe } from "/$bunfs/root/chunk-8524cxt8.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { hr, Ndn } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { hpe } from "/$bunfs/root/chunk-2d9a83dh.js";
import { ae } from "/$bunfs/root/chunk-223dyewd.js";
import { km, Z, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Eu } from "/$bunfs/root/chunk-4nfvaqps.js";
import { koo } from "/$bunfs/root/chunk-vmr48rzv.js";
import { LXe, lje, nNo } from "/$bunfs/root/chunk-48q0pbgp.js";
import { ql } from "/$bunfs/root/chunk-snyys9as.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { knt } from "/$bunfs/root/chunk-em70188r.js";
import { swe } from "/$bunfs/root/chunk-tb7m3r21.js";
N();
N();
function pe(children, x) {
    return e(s, {
        children
    }, x);
}
const ie = 0.4;
function _(d) {
    let c = w(10);
    let { patch, dim, width } = d;
    let [a] = hr();
    let l;
    if (c[0] !== dim || c[1] !== patch.lines || c[2] !== patch.oldStart || c[3] !== a || c[4] !== width) {
        l = U(patch.lines, patch.oldStart, width, dim, a);
        c[0] = dim;
        c[1] = patch.lines;
        c[2] = patch.oldStart;
        c[3] = a;
        c[4] = width;
        c[5] = l;
    } else {
        l = c[5];
    }
    let f = l;
    let u;
    if (c[6] !== f) {
        u = f.map(pe);
        c[6] = f;
        c[7] = u;
    } else {
        u = c[7];
    }
    let R;
    if (c[8] !== u) {
        R = e(s, {
            flexDirection: "column",
            flexGrow: 1,
            children: u
        });
        c[8] = u;
        c[9] = R;
    } else {
        R = c[9];
    }
    return R;
}
function fe(lines) {
    return lines.map((i)=>{
        let type = i.startsWith("+") ? "add" : i.startsWith("-") ? "remove" : "nochange";
        let { code, truncatedChars } = LXe(i, 1);
        return {
            code,
            i: 0,
            type,
            originalCode: code,
            truncatedChars
        };
    });
}
function le(d) {
    let i = [];
    let t = 0;
    while(t < d.length){
        let o = d[t];
        if (!o) {
            t++;
            continue;
        }
        if (o.type === "remove") {
            let a = [
                o
            ];
            let c = t + 1;
            while(c < d.length && d[c]?.type === "remove"){
                let f = d[c];
                if (f) {
                    a.push(f);
                }
                c++;
            }
            let l = [];
            while(c < d.length && d[c]?.type === "add"){
                let f = d[c];
                if (f) {
                    l.push(f);
                }
                c++;
            }
            if (a.length > 0 && l.length > 0) {
                let f = Math.min(a.length, l.length);
                for(let u = 0; u < f; u++){
                    let R = a[u];
                    let m = l[u];
                    if (R && m) {
                        R.wordDiff = true;
                        m.wordDiff = true;
                        R.matchedLine = m;
                        m.matchedLine = R;
                    }
                }
                i.push(...a.filter(Boolean));
                i.push(...l.filter(Boolean));
                t = c;
            } else {
                i.push(o);
                t++;
            }
        } else {
            i.push(o);
            t++;
        }
    }
    return i;
}
function ue(d, i) {
    return koo(d, i, {
        ignoreCase: false
    });
}
function he(d, i, t, dimColor, a) {
    let { type, i: i_1, wordDiff, matchedLine, originalCode } = d;
    if (!wordDiff || !matchedLine) {
        return null;
    }
    let m = type === "remove" ? originalCode : matchedLine.originalCode;
    let x = type === "remove" ? matchedLine.originalCode : originalCode;
    let b = ue(m, x);
    let M = m.length + x.length;
    if (b.filter((h)=>h.added || h.removed).reduce((acc, item)=>acc + item.value.length, 0) / M > ie || dimColor) {
        return null;
    }
    let T = type === "add" ? "+" : "-";
    let T_length = T.length;
    let g = Math.max(1, i - t - 1 - T_length);
    let C = [];
    let content = [];
    let contentWidth = 0;
    b.forEach((h, H)=>{
        let S = false;
        let P;
        if (type === "add") {
            if (h.added) {
                S = true;
                P = "diffAddedWord";
            } else if (!h.removed) {
                S = true;
            }
        } else if (type === "remove") {
            if (h.removed) {
                S = true;
                P = "diffRemovedWord";
            } else if (!h.added) {
                S = true;
            }
        }
        if (!S) {
            return;
        }
        Eu(h.value, g, "wrap").split(`
`).forEach((E, B)=>{
            if (!E) {
                return;
            }
            if (B > 0 || contentWidth + ae(E) > g) {
                if (content.length > 0) {
                    C.push({
                        content: [
                            ...content
                        ],
                        contentWidth
                    });
                    content = [];
                    contentWidth = 0;
                }
            }
            content.push(e(n, {
                backgroundColor: P,
                children: E
            }, `part-${H}-${B}`));
            contentWidth += ae(E);
        });
    });
    if (content.length > 0) {
        C.push({
            content,
            contentWidth
        });
    }
    let k = d.truncatedChars > 0 ? lje(d.truncatedChars) : "";
    let y = -1;
    if (k && C.length > 0) {
        if (C.at(-1).contentWidth + ae(k) > g) {
            C.push({
                content: [],
                contentWidth: 0
            });
        }
        y = C.length - 1;
    }
    return C.map(({ content, contentWidth }, S)=>{
        let P = `${type}-${i_1}-${S}`;
        let O = type === "add" ? dimColor ? "diffAddedDimmed" : "diffAdded" : dimColor ? "diffRemovedDimmed" : "diffRemoved";
        let A = S === 0 ? i_1 : undefined;
        let E = `${A !== undefined ? A.toString().padStart(t) : " ".repeat(t)} `;
        let B = S === y ? k : "";
        let j = E.length + T_length + contentWidth + ae(B);
        let re = Math.max(0, i - j);
        return r(s, {
            flexDirection: "row",
            children: [
                e(du, {
                    fromLeftEdge: true,
                    children: r(n, {
                        color: a ? "text" : undefined,
                        backgroundColor: O,
                        dimColor,
                        children: [
                            E,
                            T
                        ]
                    })
                }),
                e(n, {
                    color: a ? "text" : undefined,
                    backgroundColor: O,
                    dimColor,
                    children: content
                }),
                B ? e(n, {
                    dimColor: true,
                    children: B
                }) : null,
                e(n, {
                    "aria-hidden": true,
                    color: a ? "text" : undefined,
                    backgroundColor: O,
                    dimColor,
                    children: " ".repeat(re)
                })
            ]
        }, P);
    });
}
function U(lines, oldStart, width, dim, a) {
    let c = Math.max(1, Math.floor(width));
    let l = fe(lines);
    let f = le(l);
    let u = me(f, oldStart);
    let R = Math.max(...u.map(({ i })=>i), 0);
    let m = Math.max(R.toString().length + 1, 0);
    return u.flatMap((x)=>{
        let { type, code, i, wordDiff, matchedLine } = x;
        if (wordDiff && matchedLine) {
            let y = he(x, c, m, dim, a);
            if (y !== null) {
                return y;
            }
        }
        let v = 2;
        let g = Math.max(1, c - m - 1 - v);
        let L = Eu(code, g, "wrap").split(`
`);
        let D = x.truncatedChars > 0 ? lje(x.truncatedChars) : "";
        let k = -1;
        if (D && L.length > 0) {
            let y = L.at(-1);
            if (ae(y) + ae(D) > g) {
                L.push("");
            }
            k = L.length - 1;
        }
        return L.map((y, h)=>{
            let H = `${type}-${i}-${h}`;
            let S = h === 0 ? i : undefined;
            let P = `${S !== undefined ? S.toString().padStart(m) : " ".repeat(m)} `;
            let O = type === "add" ? "+" : type === "remove" ? "-" : " ";
            let A = h === k ? D : "";
            let E = P.length + 1 + ae(y) + ae(A);
            let B = Math.max(0, c - E);
            let j = type === "add" ? dim ? "diffAddedDimmed" : "diffAdded" : type === "remove" ? dim ? "diffRemovedDimmed" : "diffRemoved" : undefined;
            return r(s, {
                flexDirection: "row",
                children: [
                    e(du, {
                        fromLeftEdge: true,
                        children: r(n, {
                            color: a ? "text" : undefined,
                            backgroundColor: j,
                            dimColor: dim || type === "nochange",
                            children: [
                                P,
                                O
                            ]
                        })
                    }),
                    e(n, {
                        color: a ? "text" : undefined,
                        backgroundColor: j,
                        dimColor: dim,
                        children: y
                    }),
                    A ? e(n, {
                        dimColor: true,
                        children: A
                    }) : null,
                    e(n, {
                        "aria-hidden": true,
                        color: a ? "text" : undefined,
                        backgroundColor: j,
                        dimColor: dim,
                        children: " ".repeat(B)
                    })
                ]
            }, H);
        });
    });
}
function me(d, oldStart) {
    let i_1 = oldStart;
    let o = [];
    let a = [
        ...d
    ];
    while(a.length > 0){
        let c = a.shift();
        let { code, type, originalCode, truncatedChars, wordDiff, matchedLine } = c;
        let b = {
            code,
            type,
            i: i_1,
            originalCode,
            truncatedChars,
            wordDiff,
            matchedLine
        };
        switch(type){
            case "nochange":
                i_1++;
                o.push(b);
                break;
            case "add":
                i_1++;
                o.push(b);
                break;
            case "remove":
                {
                    o.push(b);
                    let M = 0;
                    while(a[0]?.type === "remove"){
                        i_1++;
                        let W = a.shift();
                        let { code: code_1, type: type_1, originalCode: originalCode_1, truncatedChars: truncatedChars_1, wordDiff: wordDiff_1, matchedLine: matchedLine_1 } = W;
                        let D = {
                            code: code_1,
                            type: type_1,
                            i: i_1,
                            originalCode: originalCode_1,
                            truncatedChars: truncatedChars_1,
                            wordDiff: wordDiff_1,
                            matchedLine: matchedLine_1
                        };
                        o.push(D);
                        M++;
                    }
                    i_1 -= M;
                    break;
                }
        }
    }
    return o;
}
const oe = [
    "diffAdded",
    "diffRemoved",
    "diffAddedDimmed",
    "diffRemovedDimmed",
    "diffAddedWord",
    "diffRemovedWord"
];
function X(d) {
    if (!d) {
        return;
    }
    let i;
    for (let t of oe){
        let o = d[t];
        if (o !== undefined) {
            i ??= {};
            i[t] = o;
        }
    }
    return i;
}
function I(structuredDiff, patch, firstLine, filePath, a, c, l, f, dim, R) {
    let m = nNo();
    if (!m) {
        return null;
    }
    let x = R ? knt(patch) : 0;
    let gutterWidth = x > 0 && x < f ? x : 0;
    let M = l ? oe.map((C)=>l[C] ?? "").join(",") : "";
    let W = `${c}|${M}|${f}|${dim ? 1 : 0}|${gutterWidth}|${ge.level}|${firstLine ?? ""}|${filePath}`;
    let p = structuredDiff.get(patch);
    let T = p?.get(W);
    if (T) {
        return T;
    }
    let v = new m(patch, firstLine, filePath, a);
    let g;
    if (gutterWidth > 0) {
        let { gutters, contents } = v.renderSplit(c, f, dim, l);
        g = {
            split: true,
            gutterWidth,
            gutters,
            contents
        };
    } else {
        let lines = v.render(c, f, dim, l);
        if (lines === null) {
            return null;
        }
        g = {
            split: false,
            lines
        };
    }
    if (!p) {
        p = new Map;
        structuredDiff.set(patch, p);
    }
    if (p.size >= 4) {
        p.clear();
    }
    p.set(W, g);
    return g;
}
function ee(patch) {
    if (!patch.lines.some((t)=>t.includes("\t"))) {
        return patch;
    }
    let lines = patch.lines.map((t)=>t.slice(0, 1) + hpe(t.slice(1)));
    return {
        ...patch,
        lines
    };
}
const T6 = km(function(i) {
    let p = w(19);
    let { patch, dim, filePath, firstLine, fileContent, width, skipHighlighting } = i;
    let R = skipHighlighting === undefined ? false : skipHighlighting;
    let [m] = hr();
    let x = X(Ndn());
    let M = ql().syntaxHighlightingDisabled ?? false;
    let W = nt();
    let T;
    if (p[0] !== W || p[1] !== patch) {
        T = W ? ee(patch) : patch;
        p[0] = W;
        p[1] = patch;
        p[2] = T;
    } else {
        T = p[2];
    }
    let patch_1 = T;
    let g = Math.max(1, Math.floor(width));
    let C = Hi();
    let { structuredDiff } = yj();
    let D = R || M || W ? null : I(structuredDiff, patch, firstLine, filePath, fileContent ?? null, m, x, g, dim, C);
    if (!D) {
        const k = W ? width - 1 : width;
        let y;
        if (p[3] !== dim || p[4] !== patch_1 || p[5] !== k) {
            y = e(s, {
                children: e(_, {
                    patch: patch_1,
                    dim,
                    width: k
                })
            });
            p[3] = dim;
            p[4] = patch_1;
            p[5] = k;
            p[6] = y;
        } else {
            y = p[6];
        }
        return y;
    }
    if (D.split) {
        let { gutterWidth, gutters, contents } = D;
        let k;
        if (p[7] !== gutterWidth || p[8] !== gutters) {
            k = e(du, {
                fromLeftEdge: true,
                flexShrink: 0,
                children: e(CIe, {
                    lines: gutters,
                    width: gutterWidth
                })
            });
            p[7] = gutterWidth;
            p[8] = gutters;
            p[9] = k;
        } else {
            k = p[9];
        }
        const y = g - gutterWidth;
        let P;
        if (p[10] !== contents || p[11] !== y) {
            P = e(CIe, {
                lines: contents,
                width: y
            });
            p[10] = contents;
            p[11] = y;
            p[12] = P;
        } else {
            P = p[12];
        }
        let O;
        if (p[13] !== k || p[14] !== P) {
            O = r(s, {
                flexDirection: "row",
                children: [
                    k,
                    P
                ]
            });
            p[13] = k;
            p[14] = P;
            p[15] = O;
        } else {
            O = p[15];
        }
        return O;
    }
    let k;
    if (p[16] !== D.lines || p[17] !== g) {
        k = e(s, {
            children: e(CIe, {
                lines: D.lines,
                width: g
            })
        });
        p[16] = D.lines;
        p[17] = g;
        p[18] = k;
    } else {
        k = p[18];
    }
    return k;
});
function Vq({ hunks, dim, width, filePath, firstLine, fileContent }) {
    return swe(hunks.map((patch, f)=>e(s, {
            flexDirection: "column",
            children: e(T6, {
                patch,
                dim,
                width,
                filePath,
                firstLine,
                fileContent
            })
        }, `hunk-${f}`)), (l)=>e(du, {
            fromLeftEdge: true,
            children: e(n, {
                dimColor: true,
                children: "..."
            })
        }, `ellipsis-${l}`));
}
export { T6, Vq };
