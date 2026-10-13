import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { wu, Sy } from "/$bunfs/root/chunk-39aqgftn.js";
import { IS } from "/$bunfs/root/chunk-s95be3d6.js";
import { Fe } from "/$bunfs/root/chunk-rbj4n58t.js";
import { Vq } from "/$bunfs/root/chunk-b3rwa6cx.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
import { relative } from "path";
const _ = 10;
function bee(I) {
    let t = w(38);
    let { file_path, operation, patch, firstLine, fileContent, content, style, verbose } = I;
    let { columns } = ke();
    let d;
    if (t[0] !== operation) {
        d = r(n, {
            color: "subtle",
            children: [
                "User rejected ",
                operation,
                " to "
            ]
        });
        t[0] = operation;
        t[1] = d;
    } else {
        d = t[1];
    }
    let c;
    if (t[2] !== file_path || t[3] !== verbose) {
        c = verbose ? file_path : relative(se(), file_path);
        t[2] = file_path;
        t[3] = verbose;
        t[4] = c;
    } else {
        c = t[4];
    }
    let P;
    if (t[5] !== c) {
        P = e(n, {
            bold: true,
            color: "subtle",
            children: c
        });
        t[5] = c;
        t[6] = P;
    } else {
        P = t[6];
    }
    let k;
    if (t[7] !== d || t[8] !== P) {
        k = r(s, {
            flexDirection: "row",
            children: [
                d,
                P
            ]
        });
        t[7] = d;
        t[8] = P;
        t[9] = k;
    } else {
        k = t[9];
    }
    let o = k;
    if (style === "condensed" && !verbose) {
        let i;
        if (t[10] !== o) {
            i = e(Fe, {
                children: o
            });
            t[10] = o;
            t[11] = i;
        } else {
            i = t[11];
        }
        return i;
    }
    if (operation === "write" && content !== undefined) {
        let count;
        let i;
        if (t[12] !== content || t[13] !== verbose) {
            let u = content.split(`
`);
            count = u.length - _;
            i = verbose ? content : u.slice(0, _).join(`
`);
            t[12] = content;
            t[13] = verbose;
            t[14] = count;
            t[15] = i;
        } else {
            count = t[14];
            i = t[15];
        }
        let x = i;
        const code = x || "(No content)";
        const b = columns - 12;
        let H;
        if (t[16] !== file_path || t[17] !== code || t[18] !== b) {
            H = e(IS, {
                code,
                filePath: file_path,
                width: b,
                dim: true
            });
            t[16] = file_path;
            t[17] = code;
            t[18] = b;
            t[19] = H;
        } else {
            H = t[19];
        }
        let A;
        if (t[20] !== count || t[21] !== verbose) {
            A = !verbose && e(Sy, {
                count
            });
            t[20] = count;
            t[21] = verbose;
            t[22] = A;
        } else {
            A = t[22];
        }
        let z;
        if (t[23] !== H || t[24] !== A || t[25] !== o) {
            z = e(Fe, {
                children: r(s, {
                    flexDirection: "column",
                    children: [
                        o,
                        H,
                        A
                    ]
                })
            });
            t[23] = H;
            t[24] = A;
            t[25] = o;
            t[26] = z;
        } else {
            z = t[26];
        }
        return z;
    }
    if (!patch || patch.length === 0) {
        let i;
        if (t[27] !== o) {
            i = e(Fe, {
                children: o
            });
            t[27] = o;
            t[28] = i;
        } else {
            i = t[28];
        }
        return i;
    }
    const i = columns - 12;
    let f;
    if (t[29] !== fileContent || t[30] !== file_path || t[31] !== firstLine || t[32] !== patch || t[33] !== i) {
        f = e(Vq, {
            hunks: patch,
            dim: true,
            width: i,
            filePath: file_path,
            firstLine,
            fileContent
        });
        t[29] = fileContent;
        t[30] = file_path;
        t[31] = firstLine;
        t[32] = patch;
        t[33] = i;
        t[34] = f;
    } else {
        f = t[34];
    }
    let b;
    if (t[35] !== f || t[36] !== o) {
        b = e(Fe, {
            children: r(s, {
                flexDirection: "column",
                children: [
                    o,
                    f
                ]
            })
        });
        t[35] = f;
        t[36] = o;
        t[37] = b;
    } else {
        b = t[37];
    }
    return b;
}
function ht(H) {
    return H.startsWith("+");
}
function at(A, z) {
    return A + F(z.lines, ht);
}
function vt(Pt) {
    return Pt.startsWith("-");
}
function pt(bt, xt) {
    return bt + F(xt.lines, vt);
}
function qNt(I) {
    let c = w(25);
    let { filePath, structuredPatch, firstLine, fileContent, style, verbose, previewHint, collapsed } = I;
    let { columns } = ke();
    let t = structuredPatch.reduce(at, 0);
    let d = structuredPatch.reduce(pt, 0);
    let P;
    if (c[0] !== t) {
        P = t > 0 ? r(Y, {
            children: [
                "Added ",
                e(n, {
                    bold: true,
                    children: t
                }),
                " ",
                t > 1 ? "lines" : "line"
            ]
        }) : null;
        c[0] = t;
        c[1] = P;
    } else {
        P = c[1];
    }
    const k = t > 0 && d > 0 ? ", " : null;
    let o;
    if (c[2] !== t || c[3] !== d) {
        o = d > 0 ? r(Y, {
            children: [
                t === 0 ? "R" : "r",
                "emoved ",
                e(n, {
                    bold: true,
                    children: d
                }),
                " ",
                d > 1 ? "lines" : "line"
            ]
        }) : null;
        c[2] = t;
        c[3] = d;
        c[4] = o;
    } else {
        o = c[4];
    }
    let i;
    if (c[5] !== P || c[6] !== k || c[7] !== o) {
        i = r(n, {
            children: [
                P,
                k,
                o
            ]
        });
        c[5] = P;
        c[6] = k;
        c[7] = o;
        c[8] = i;
    } else {
        i = c[8];
    }
    let a = i;
    if (previewHint) {
        if (style !== "condensed" && !verbose) {
            let u;
            if (c[9] !== previewHint) {
                u = e(Fe, {
                    children: e(n, {
                        dimColor: true,
                        children: previewHint
                    })
                });
                c[9] = previewHint;
                c[10] = u;
            } else {
                u = c[10];
            }
            return u;
        }
    } else if (style === "condensed" && !verbose) {
        return a;
    } else if (collapsed && !verbose && t + d > 0) {
        let u;
        if (c[11] === S) {
            u = e(wu, {});
            c[11] = u;
        } else {
            u = c[11];
        }
        let x;
        if (c[12] !== a) {
            x = e(Fe, {
                children: r(n, {
                    children: [
                        a,
                        " ",
                        u
                    ]
                })
            });
            c[12] = a;
            c[13] = x;
        } else {
            x = c[13];
        }
        return x;
    }
    let u;
    if (c[14] !== a) {
        u = e(n, {
            children: a
        });
        c[14] = a;
        c[15] = u;
    } else {
        u = c[15];
    }
    const x = columns - 12;
    let f;
    if (c[16] !== fileContent || c[17] !== filePath || c[18] !== firstLine || c[19] !== structuredPatch || c[20] !== x) {
        f = e(Vq, {
            hunks: structuredPatch,
            dim: false,
            width: x,
            filePath,
            firstLine,
            fileContent
        });
        c[16] = fileContent;
        c[17] = filePath;
        c[18] = firstLine;
        c[19] = structuredPatch;
        c[20] = x;
        c[21] = f;
    } else {
        f = c[21];
    }
    let b;
    if (c[22] !== u || c[23] !== f) {
        b = e(Fe, {
            children: r(s, {
                flexDirection: "column",
                children: [
                    u,
                    f
                ]
            })
        });
        c[22] = u;
        c[23] = f;
        c[24] = b;
    } else {
        b = c[24];
    }
    return b;
}
export { bee, qNt };
