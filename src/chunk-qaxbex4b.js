import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { os } from "/$bunfs/root/chunk-3yz9zdww.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { Z, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { Fe } from "/$bunfs/root/chunk-rbj4n58t.js";
import { QR } from "/$bunfs/root/chunk-abvy54rm.js";
import { Hqt, t7r } from "/$bunfs/root/chunk-kasbfbhj.js";
import { wu } from "/$bunfs/root/chunk-39aqgftn.js";
import { Vq } from "/$bunfs/root/chunk-b3rwa6cx.js";
import { uie } from "/$bunfs/root/chunk-xr68kcbr.js";
import { hXe } from "/$bunfs/root/chunk-n9zrtj9n.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { S, Sn } from "/$bunfs/root/chunk-cj4xndke.js";
N();
const te = 40;
const U = "(another command ran in this repository at the same time; a change made by either may show under either result)";
const ne = "(a git step in this command can move the working tree, so these may be its changes, not edits)";
let X = null;
function B({ diff, verbose, style, treeMoved }) {
    let { columns } = ke();
    if (diff.skipped || (diff.unavailable || diff.shared) && diff.files.length === 0) {
        return e(Fe, {
            children: e(n, {
                dimColor: true,
                children: diff.skipped ? "(file diff skipped for this git command)" : diff.unavailable ? diff.moreFiles > 0 ? `(file diff unavailable for this command; ${j(diff.moreFiles)} changed)` : "(file diff unavailable for this command)" : U
            })
        });
    }
    X ??= diff;
    let i = verbose || X === diff ? "(files that changed while this command ran, by the command or by another process; a convenience view, not a review or audit of the command)" : null;
    let u = diff.shared ? U : null;
    let k = (style === "condensed" || treeMoved) && !verbose;
    return r(s, {
        flexDirection: "column",
        children: [
            diff.files.map((d)=>{
                let b = d.hunks.flatMap((a)=>a.lines);
                let v = d.created ? "Created" : d.deleted ? "Deleted" : "Updated";
                let { hunks, hiddenLines } = verbose ? {
                    hunks: d.hunks,
                    hiddenLines: 0
                } : oe(d.hunks, te);
                return e(Fe, {
                    children: r(s, {
                        flexDirection: "column",
                        children: [
                            r(n, {
                                children: [
                                    v,
                                    " ",
                                    e(n, {
                                        bold: true,
                                        children: verbose ? d.filePath : os(d.filePath)
                                    }),
                                    " ",
                                    r(n, {
                                        dimColor: true,
                                        children: [
                                            "(+",
                                            F(b, (a)=>a.startsWith("+")),
                                            " -",
                                            F(b, (a)=>a.startsWith("-")),
                                            ")"
                                        ]
                                    })
                                ]
                            }),
                            k ? null : e(Vq, {
                                hunks,
                                dim: false,
                                width: columns - 12,
                                filePath: d.filePath,
                                firstLine: null
                            }),
                            hiddenLines > 0 && !k ? r(n, {
                                dimColor: true,
                                children: [
                                    "… ",
                                    hiddenLines,
                                    " more lines ",
                                    e(wu, {})
                                ]
                            }) : null
                        ]
                    })
                }, d.filePath);
            }),
            diff.moreFiles > 0 ? e(Fe, {
                children: r(n, {
                    dimColor: true,
                    children: [
                        diff.files.length > 0 ? `\u2026 ${diff.moreFiles} more ${diff.moreFiles === 1 ? "file" : "files"} changed` : `${j(diff.moreFiles)} changed (binary, mode only or too large to show)`,
                        diff.unavailable ? " (part of the diff is unavailable)" : ""
                    ]
                })
            }) : null,
            treeMoved ? e(Fe, {
                children: r(n, {
                    dimColor: true,
                    children: [
                        ne,
                        verbose ? null : r(Y, {
                            children: [
                                " ",
                                e(wu, {})
                            ]
                        })
                    ]
                })
            }) : null,
            u ? e(Fe, {
                children: e(n, {
                    dimColor: true,
                    children: u
                })
            }) : null,
            i ? e(Fe, {
                children: e(n, {
                    dimColor: true,
                    children: i
                })
            }) : null
        ]
    });
}
function j(moreFiles) {
    return `${moreFiles} ${moreFiles === 1 ? "file" : "files"}`;
}
function oe(t, l) {
    let hunks = [];
    let c = 0;
    let hiddenLines = 0;
    for (let i of t){
        let u = l - c;
        if (u <= 0) {
            hiddenLines += i.lines.length;
        } else if (i.lines.length <= u) {
            hunks.push(i);
            c += i.lines.length;
        } else {
            hunks.push({
                ...i,
                lines: i.lines.slice(0, u)
            });
            hiddenLines += i.lines.length - u;
            c = l;
        }
    }
    return {
        hunks,
        hiddenLines
    };
}
function q(cleanedStderr) {
    if (!cleanedStderr.match(/<sandbox_violations>([\s\S]*?)<\/sandbox_violations>/)) {
        return {
            cleanedStderr
        };
    }
    return {
        cleanedStderr: hXe(cleanedStderr).trim()
    };
}
function J(cleanedStderr) {
    let l = cleanedStderr.match(Hqt);
    if (!l) {
        return {
            cleanedStderr,
            cwdResetWarning: null
        };
    }
    let cwdResetWarning = l[1] ?? null;
    return {
        cleanedStderr: cleanedStderr.replace(Hqt, "").trim(),
        cwdResetWarning
    };
}
function gXe(t) {
    let p = w(44);
    let { content, verbose, timeoutMs, style, command } = t;
    let { stdout, stderr, isImage, returnCodeInterpretation, noOutputExpected, backgroundTaskId, bashEditDiff } = content;
    let a = stdout === undefined ? "" : stdout;
    let V = stderr === undefined ? "" : stderr;
    let Q;
    if (p[0] !== bashEditDiff || p[1] !== command) {
        Q = bashEditDiff !== undefined && command !== undefined && t7r(command);
        p[0] = bashEditDiff;
        p[1] = command;
        p[2] = Q;
    } else {
        Q = p[2];
    }
    let treeMoved = Q;
    let y;
    let f;
    let E;
    let flexDirection;
    let T;
    let D;
    let z;
    if (p[3] !== isImage || p[4] !== V || p[5] !== a || p[6] !== verbose) {
        z = Sn;
        Ne: {
            let { cleanedStderr } = q(V);
            ({ cleanedStderr: E, cwdResetWarning: f } = J(cleanedStderr));
            if (isImage) {
                let g;
                if (p[14] === S) {
                    g = e(Fe, {
                        height: 1,
                        children: e(n, {
                            dimColor: true,
                            children: "[Image data detected and sent to Claude]"
                        })
                    });
                    p[14] = g;
                } else {
                    g = p[14];
                }
                z = g;
                break Ne;
            }
            y = s;
            flexDirection = "column";
            if (p[15] !== a || p[16] !== verbose) {
                T = a !== "" ? e(QR, {
                    content: a,
                    verbose
                }) : null;
                p[15] = a;
                p[16] = verbose;
                p[17] = T;
            } else {
                T = p[17];
            }
            D = E.trim() !== "" ? e(QR, {
                content: E,
                verbose,
                isError: true
            }) : null;
        }
        p[3] = isImage;
        p[4] = V;
        p[5] = a;
        p[6] = verbose;
        p[7] = y;
        p[8] = f;
        p[9] = E;
        p[10] = flexDirection;
        p[11] = T;
        p[12] = D;
        p[13] = z;
    } else {
        y = p[7];
        f = p[8];
        E = p[9];
        flexDirection = p[10];
        T = p[11];
        D = p[12];
        z = p[13];
    }
    if (z !== Sn) {
        return z;
    }
    let g;
    if (p[18] !== f) {
        g = f ? e(Fe, {
            children: e(n, {
                dimColor: true,
                children: f
            })
        }) : null;
        p[18] = f;
        p[19] = g;
    } else {
        g = p[19];
    }
    let C;
    if (p[20] !== bashEditDiff || p[21] !== style || p[22] !== treeMoved || p[23] !== verbose) {
        C = bashEditDiff ? e(B, {
            diff: bashEditDiff,
            verbose,
            style,
            treeMoved
        }) : null;
        p[20] = bashEditDiff;
        p[21] = style;
        p[22] = treeMoved;
        p[23] = verbose;
        p[24] = C;
    } else {
        C = p[24];
    }
    let P;
    if (p[25] !== backgroundTaskId || p[26] !== bashEditDiff || p[27] !== f || p[28] !== noOutputExpected || p[29] !== returnCodeInterpretation || p[30] !== E || p[31] !== a) {
        P = a === "" && E.trim() === "" && !f && !bashEditDiff ? e(Fe, {
            height: 1,
            children: e(n, {
                dimColor: true,
                children: backgroundTaskId ? r(Y, {
                    children: [
                        "Running in the background",
                        " ",
                        e(G, {
                            chord: "down",
                            action: "manage",
                            parens: true
                        })
                    ]
                }) : returnCodeInterpretation || (noOutputExpected ? "Done" : "(No output)")
            })
        }) : null;
        p[25] = backgroundTaskId;
        p[26] = bashEditDiff;
        p[27] = f;
        p[28] = noOutputExpected;
        p[29] = returnCodeInterpretation;
        p[30] = E;
        p[31] = a;
        p[32] = P;
    } else {
        P = p[32];
    }
    let W;
    if (p[33] !== timeoutMs) {
        W = timeoutMs && e(Fe, {
            children: e(uie, {
                timeoutMs
            })
        });
        p[33] = timeoutMs;
        p[34] = W;
    } else {
        W = p[34];
    }
    let ee;
    if (p[35] !== y || p[36] !== C || p[37] !== P || p[38] !== W || p[39] !== flexDirection || p[40] !== T || p[41] !== D || p[42] !== g) {
        ee = r(y, {
            flexDirection,
            children: [
                T,
                D,
                g,
                C,
                P,
                W
            ]
        });
        p[35] = y;
        p[36] = C;
        p[37] = P;
        p[38] = W;
        p[39] = flexDirection;
        p[40] = T;
        p[41] = D;
        p[42] = g;
        p[43] = ee;
    } else {
        ee = p[43];
    }
    return ee;
}
export { gXe };
