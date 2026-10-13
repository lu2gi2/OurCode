import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { un, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { hr } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { ge, vdt } from "/$bunfs/root/chunk-sawpz2mr.js";
import { xN } from "/$bunfs/root/chunk-3yz9zdww.js";
import { Hi, yj, s, n, Do, du, Ks } from "/$bunfs/root/chunk-8524cxt8.js";
import { km, P, Z, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { yTe } from "/$bunfs/root/chunk-5nm75yfw.js";
import { SU } from "/$bunfs/root/chunk-esj4mtp8.js";
import { mdn, LXe, lje, a0r } from "/$bunfs/root/chunk-48q0pbgp.js";
import { ql } from "/$bunfs/root/chunk-snyys9as.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { o2n } from "/$bunfs/root/chunk-m007m726.js";
import { S, Sn } from "/$bunfs/root/chunk-cj4xndke.js";
import { extname } from "path";
N();
N();
const jt = 500;
function DXe(l, a, code, u) {
    let variant = `${u}\x00${yTe.pluginGrammarGeneration}\x00${vdt()}`;
    let o = o2n(variant, code);
    let m = l.get(o);
    if (m !== undefined) {
        l.delete(o);
        if (m.code === code && m.variant === variant) {
            l.set(o, m);
            return m.highlighted;
        }
    }
    let highlighted = a.highlight(code, {
        language: u
    });
    if (l.size >= jt) {
        let g = l.keys().next().value;
        if (g !== undefined) {
            l.delete(g);
        }
    }
    l.set(o, {
        variant,
        code,
        highlighted
    });
    return highlighted;
}
function j(text) {
    let markers = new Map;
    if (text.length <= mdn) {
        return {
            text,
            markers
        };
    }
    return {
        text: text.split(`
`).map((d, o)=>{
            let { code, truncatedChars } = LXe(d);
            if (truncatedChars > 0) {
                markers.set(o, lje(truncatedChars));
                return code;
            }
            return d;
        }).join(`
`),
        markers
    };
}
function H(l, markers) {
    if (markers.size === 0) {
        return l;
    }
    return l.split(`
`).map((i, u)=>{
        let d = markers.get(u);
        if (d) {
            return i + ge.dim(d);
        }
        return i;
    }).join(`
`);
}
function B(l) {
    let c = w(16);
    let { code, filePath, dim, skipColoring } = l;
    let dimColor = dim === undefined ? false : dim;
    let m = skipColoring === undefined ? false : skipColoring;
    let codeWithSpaces;
    let h;
    if (c[0] !== code || c[1] !== dimColor || c[2] !== m) {
        h = Sn;
        ce: {
            codeWithSpaces = xN(code);
            if (m) {
                let { text, markers } = j(codeWithSpaces);
                const x = e(Do, {
                    children: H(text, markers)
                });
                let C;
                if (c[5] !== dimColor || c[6] !== x) {
                    C = e(n, {
                        dimColor,
                        children: x
                    });
                    c[5] = dimColor;
                    c[6] = x;
                    c[7] = C;
                } else {
                    C = c[7];
                }
                h = C;
                break ce;
            }
        }
        c[0] = code;
        c[1] = dimColor;
        c[2] = m;
        c[3] = codeWithSpaces;
        c[4] = h;
    } else {
        codeWithSpaces = c[3];
        h = c[4];
    }
    if (h !== Sn) {
        return h;
    }
    let x;
    if (c[8] !== filePath) {
        x = extname(filePath).slice(1);
        c[8] = filePath;
        c[9] = x;
    } else {
        x = c[9];
    }
    let p = x;
    let C;
    if (c[10] !== codeWithSpaces || c[11] !== p) {
        C = e(nt, {
            codeWithSpaces,
            language: p
        });
        c[10] = codeWithSpaces;
        c[11] = p;
        c[12] = C;
    } else {
        C = c[12];
    }
    let _t;
    if (c[13] !== dimColor || c[14] !== C) {
        _t = e(n, {
            dimColor,
            children: C
        });
        c[13] = dimColor;
        c[14] = C;
        c[15] = _t;
    } else {
        _t = c[15];
    }
    return _t;
}
function nt(l) {
    let u = w(7);
    let { codeWithSpaces, language } = l;
    let d;
    if (u[0] === S) {
        d = SU();
        u[0] = d;
    } else {
        d = u[0];
    }
    let o = d;
    let { highlightedCode } = yj();
    let yTe_pluginGrammarGeneration = yTe.pluginGrammarGeneration;
    let g;
    if (u[1] !== codeWithSpaces || u[2] !== highlightedCode || u[3] !== language) {
        ce: {
            let { text, markers } = j(codeWithSpaces);
            let _ = "markdown";
            if (language) {
                if (o.supportsLanguage(language)) {
                    _ = language;
                } else {
                    t(`Language not supported while highlighting code, falling back to markdown: ${language}`);
                }
            }
            ;
            try {
                g = H(DXe(highlightedCode, o, text, _), markers);
            } catch (error) {
                let C = error;
                if (C instanceof Error && C.message.includes("Unknown language")) {
                    g = (t(`Language not supported while highlighting code, falling back to markdown: ${C}`), H(DXe(highlightedCode, o, text, "markdown"), markers));
                    break ce;
                }
                g = H(text, markers);
            }
        }
        u[1] = codeWithSpaces;
        u[2] = highlightedCode;
        u[3] = language;
        u[4] = g;
    } else {
        g = u[4];
    }
    let p = g;
    let x;
    if (u[5] !== p) {
        x = e(Do, {
            children: p
        });
        u[5] = p;
        u[6] = x;
    } else {
        x = u[6];
    }
    return x;
}
function he(children, xe) {
    return e(n, {
        children: e(Do, {
            children
        })
    }, xe);
}
const Wt = 80;
const IS = km(function(a) {
    let G = w(40);
    let { code, filePath, width, dim, startLine, lineNumbers } = a;
    let dim_1 = dim === undefined ? false : dim;
    let h = startLine === undefined ? 1 : startLine;
    let k = lineNumbers === undefined ? true : lineNumbers;
    let ref = R(null);
    let [x, C] = y(Wt);
    let ce = width || x;
    let [p] = hr();
    let skipColoring = ql().syntaxHighlightingDisabled ?? false;
    let O;
    if (G[0] !== code || G[1] !== filePath || G[2] !== skipColoring) {
        Ye: {
            if (skipColoring) {
                O = null;
                break Ye;
            }
            let $t = a0r();
            if (!$t) {
                O = null;
                break Ye;
            }
            O = new $t(xN(code), filePath);
        }
        G[0] = code;
        G[1] = filePath;
        G[2] = skipColoring;
        G[3] = O;
    } else {
        O = G[3];
    }
    let A = O;
    let vt;
    let It;
    if (G[4] !== width) {
        vt = ()=>{
            if (!width && ref.current) {
                let { width } = Ks(ref.current);
                if (width > 0) {
                    C(width - 2);
                }
            }
        };
        It = [
            width
        ];
        G[4] = width;
        G[5] = vt;
        G[6] = It;
    } else {
        vt = G[5];
        It = G[6];
    }
    P(vt, It);
    let zt;
    if (G[7] !== code) {
        zt = K(code);
        G[7] = code;
        G[8] = zt;
    } else {
        zt = G[8];
    }
    let fe = String(zt).length + 2;
    let ut;
    Ze: {
        if (!k || h === 1) {
            ut = null;
            break Ze;
        }
        let Ot = K(code);
        let digits = String(h + Ot - 1).length;
        const extraCols = Math.max(0, digits - String(Ot).length);
        let f;
        if (G[9] !== digits || G[10] !== extraCols) {
            f = {
                digits,
                extraCols
            };
            G[9] = digits;
            G[10] = extraCols;
            G[11] = f;
        } else {
            f = G[11];
        }
        ut = f;
    }
    let mt = ut;
    let pe = Hi() || h !== 1;
    let M;
    ei: {
        if (A === null) {
            M = null;
            break ei;
        }
        let I = ce - (mt?.extraCols ?? 0) + (k ? 0 : fe);
        if (k && !pe) {
            let lines;
            if (G[12] !== A || G[13] !== I || G[14] !== dim_1 || G[15] !== p) {
                lines = A.render(p, I, dim_1) ?? [];
                G[12] = A;
                G[13] = I;
                G[14] = dim_1;
                G[15] = p;
                G[16] = lines;
            } else {
                lines = G[16];
            }
            let W;
            if (G[17] !== lines) {
                W = {
                    split: false,
                    lines
                };
                G[17] = lines;
                G[18] = W;
            } else {
                W = G[18];
            }
            M = W;
            break ei;
        }
        let f;
        if (G[19] !== A || G[20] !== I || G[21] !== dim_1 || G[22] !== p) {
            f = A.renderSplit(p, I, dim_1);
            G[19] = A;
            G[20] = I;
            G[21] = dim_1;
            G[22] = p;
            G[23] = f;
        } else {
            f = G[23];
        }
        let { gutters, contents } = f;
        let W;
        if (G[24] !== contents || G[25] !== gutters) {
            W = {
                split: true,
                gutters,
                contents
            };
            G[24] = contents;
            G[25] = gutters;
            G[26] = W;
        } else {
            W = G[26];
        }
        M = W;
    }
    let b = M;
    let f;
    ii: {
        if (mt === null || b === null || !b.split) {
            f = null;
            break ii;
        }
        let { digits } = mt;
        let W;
        if (G[27] !== digits || G[28] !== b.gutters || G[29] !== h) {
            let ft = h;
            W = b.gutters.map((be)=>{
                if (un(be).trim() === "") {
                    return " ".repeat(digits + 2);
                }
                let ye = ft;
                ft = ft + 1;
                return ` ${String(ye).padStart(digits)} `;
            });
            G[27] = digits;
            G[28] = b.gutters;
            G[29] = h;
            G[30] = W;
        } else {
            W = G[30];
        }
        f = W;
    }
    let pt = f;
    let W;
    if (G[31] !== code || G[32] !== dim_1 || G[33] !== pt || G[34] !== filePath || G[35] !== k || G[36] !== b || G[37] !== h || G[38] !== skipColoring) {
        W = e(s, {
            ref,
            children: b ? e(s, {
                flexDirection: "column",
                children: b.split ? b.contents.map((Xt, Y)=>{
                    if (!k) {
                        return e(n, {
                            children: e(Do, {
                                children: Xt
                            })
                        }, Y);
                    }
                    return e(gt, {
                        gutter: b.gutters[Y],
                        content: Xt,
                        displayGutter: pt?.[Y]
                    }, Y);
                }) : b.lines.map(he)
            }) : r(s, {
                flexDirection: "column",
                children: [
                    k && h !== 1 && r(n, {
                        dimColor: true,
                        children: [
                            "… from line ",
                            h
                        ]
                    }),
                    e(B, {
                        code,
                        filePath,
                        dim: dim_1,
                        skipColoring
                    })
                ]
            })
        });
        G[31] = code;
        G[32] = dim_1;
        G[33] = pt;
        G[34] = filePath;
        G[35] = k;
        G[36] = b;
        G[37] = h;
        G[38] = skipColoring;
        G[39] = W;
    } else {
        W = G[39];
    }
    return W;
});
function K(code) {
    let a = Lt(code, `
`) + 1;
    if (code.endsWith(`
`)) {
        return a - 1;
    }
    return a;
}
function gt(l) {
    let d = w(8);
    let { gutter, content, displayGutter } = l;
    let o;
    if (d[0] !== displayGutter || d[1] !== gutter) {
        o = e(du, {
            fromLeftEdge: true,
            children: displayGutter === undefined ? e(n, {
                children: e(Do, {
                    children: gutter
                })
            }) : e(n, {
                dimColor: true,
                children: displayGutter
            })
        });
        d[0] = displayGutter;
        d[1] = gutter;
        d[2] = o;
    } else {
        o = d[2];
    }
    let m;
    if (d[3] !== content) {
        m = e(n, {
            children: e(Do, {
                children: content
            })
        });
        d[3] = content;
        d[4] = m;
    } else {
        m = d[4];
    }
    let c;
    if (d[5] !== o || d[6] !== m) {
        c = r(s, {
            flexDirection: "row",
            children: [
                o,
                m
            ]
        });
        d[5] = o;
        d[6] = m;
        d[7] = c;
    } else {
        c = d[7];
    }
    return c;
}
export { DXe, IS };
