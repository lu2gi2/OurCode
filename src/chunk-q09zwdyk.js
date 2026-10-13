import { np } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Nrn } from "/$bunfs/root/chunk-2d9a83dh.js";
import { Wkn, Cqt, i8r, Ps } from "/$bunfs/root/chunk-kasbfbhj.js";
import { ac } from "/$bunfs/root/chunk-pedbhwf4.js";
import { le, P, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { el } from "/$bunfs/root/chunk-2mjaqpws.js";
import { Pe } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { Ze } from "/$bunfs/root/chunk-z47a2vff.js";
import { yXe } from "/$bunfs/root/chunk-jhqt7z6d.js";
import { Lmt } from "/$bunfs/root/chunk-yphmh99q.js";
import { _e } from "/$bunfs/root/chunk-1wksey0w.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { nE } from "/$bunfs/root/chunk-86meyjxt.js";
import { or } from "/$bunfs/root/chunk-xbqt0esp.js";
import { ui } from "/$bunfs/root/chunk-6gb840dt.js";
import { sve } from "/$bunfs/root/chunk-faxdh83f.js";
import { mo } from "/$bunfs/root/chunk-4wvwjbc4.js";
import { Xw, YP } from "/$bunfs/root/chunk-d0t2hmxp.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
N();
function q({ onStashAndContinue, onCancel, cancelQuits }) {
    let [f, R] = y(null);
    let m = f !== null ? [
        ...f.tracked,
        ...f.untracked
    ] : [];
    let [K, E] = y(true);
    let [x, c] = y(false);
    let [L, I] = y(null);
    P(()=>{
        (async ()=>{
            try {
                let { cwd } = Cqt();
                let h = await Nrn(cwd, ac(cwd));
                R(h);
            } catch (error) {
                let h = error instanceof Error ? error.message : String(error);
                t(`Error getting changed files: ${h}`, {
                    level: "error"
                });
                I(error instanceof np ? error.message : "Failed to get changed files");
            } finally{
                E(false);
            }
        })();
    }, []);
    let v = async ()=>{
        c(true);
        try {
            t("Stashing changes before teleport...");
            if (!await i8r("Teleport auto-stash", Cqt())) {
                I("Failed to stash changes");
                c(false);
                return;
            }
            t("Successfully stashed changes");
        } catch (error) {
            let o = error instanceof Error ? error.message : String(error);
            t(`Error stashing changes: ${o}`, {
                level: "error"
            });
            I(error instanceof np ? error.message : "Failed to stash changes");
            c(false);
            return;
        }
        try {
            await onStashAndContinue();
        } finally{
            c(false);
        }
    };
    if (K) {
        return e(s, {
            flexDirection: "column",
            padding: 1,
            children: r(s, {
                marginBottom: 1,
                children: [
                    e(ui, {}),
                    r(n, {
                        children: [
                            " Checking git status",
                            te.ellipsis
                        ]
                    })
                ]
            })
        });
    }
    if (L) {
        return r(s, {
            flexDirection: "column",
            padding: 1,
            children: [
                r(n, {
                    bold: true,
                    color: "error",
                    children: [
                        "Error: ",
                        L
                    ]
                }),
                e(s, {
                    marginTop: 1,
                    children: e(n, {
                        dimColor: true,
                        children: e(G, {
                            chord: "escape",
                            action: "cancel",
                            bold: true
                        })
                    })
                })
            ]
        });
    }
    let a = m.length > 8;
    let u = x && !cancelQuits;
    return r(_e, {
        title: "Working directory has changes",
        onCancel: u ? he : onCancel,
        exitOnCtrlCD: cancelQuits || u,
        inputGuide: u ? "Teleport continues when the stash finishes…" : undefined,
        children: [
            e(n, {
                children: "Teleport will switch git branches. The following changes were found:"
            }),
            e(s, {
                flexDirection: "column",
                paddingLeft: 2,
                children: m.length > 0 ? a ? r(n, {
                    children: [
                        m.length,
                        " files changed"
                    ]
                }) : m.map((children, o)=>e(n, {
                        children
                    }, o)) : e(mo, {
                    children: "No changes detected"
                })
            }),
            e(n, {
                children: "Would you like to stash these changes and continue with teleport?"
            }),
            x ? r(s, {
                children: [
                    e(ui, {}),
                    e(n, {
                        children: " Stashing changes..."
                    })
                ]
            }) : e(or, {
                confirmLabel: "Stash changes and continue",
                cancelLabel: cancelQuits ? "Exit" : "Cancel",
                onConfirm: ()=>void v(),
                onCancel
            })
        ]
    }, u ? "stashing" : "asking");
}
function he() {}
function xe() {
    return Ps(0);
}
const Z = new Set;
function Mln(T) {
    let a = w(32);
    let { onComplete, onCancel, errorsToIgnore, isStandalone } = T;
    let m = errorsToIgnore === undefined ? Z : errorsToIgnore;
    let K = isStandalone === undefined ? false : isStandalone;
    let [E, x] = y(null);
    let [c, L] = y(false);
    let I = el();
    let { credentials } = Pe();
    let u;
    if (a[0] !== credentials || a[1] !== m || a[2] !== onComplete) {
        u = async ()=>{
            let i = await Wkn(credentials, m);
            if (i.size === 0) {
                onComplete();
                return;
            }
            if (i.has("needsLogin")) {
                x("needsLogin");
            } else if (i.has("needsGitStash")) {
                x("needsGitStash");
            }
        };
        a[0] = credentials;
        a[1] = m;
        a[2] = onComplete;
        a[3] = u;
    } else {
        u = a[3];
    }
    let o = u;
    let h;
    let ae;
    if (a[4] !== o) {
        h = ()=>{
            o();
        };
        ae = [
            o
        ];
        a[4] = o;
        a[5] = h;
        a[6] = ae;
    } else {
        h = a[5];
        ae = a[6];
    }
    P(h, ae);
    let g = onCancel === undefined;
    let p = onCancel ?? xe;
    let ce;
    if (a[7] !== o) {
        ce = ()=>{
            L(false);
            o();
        };
        a[7] = o;
        a[8] = ce;
    } else {
        ce = a[8];
    }
    let onDone = ce;
    let ge;
    if (a[9] === S) {
        ge = ()=>{
            L(true);
        };
        a[9] = ge;
    } else {
        ge = a[9];
    }
    let onConfirm = ge;
    let de;
    if (a[10] !== o) {
        de = ()=>o();
        a[10] = o;
        a[11] = de;
    } else {
        de = a[11];
    }
    let onStashAndContinue = de;
    let { entries, exitState } = Lmt(onCancel, undefined, onCancel !== undefined && c);
    const isActive = K && E === "needsGitStash";
    let pe;
    if (a[12] !== isActive) {
        pe = {
            context: "Confirmation",
            isActive
        };
        a[12] = isActive;
        a[13] = pe;
    } else {
        pe = a[13];
    }
    Ze("confirm:no", p, pe);
    if (!E) {
        return null;
    }
    switch(E){
        case "needsGitStash":
            {
                let C;
                if (a[14] !== g || a[15] !== onStashAndContinue || a[16] !== p) {
                    C = e(q, {
                        onStashAndContinue,
                        onCancel: p,
                        cancelQuits: g
                    });
                    a[14] = g;
                    a[15] = onStashAndContinue;
                    a[16] = p;
                    a[17] = C;
                } else {
                    C = a[17];
                }
                return C;
            }
        case "needsLogin":
            {
                const urlOutdent = I ? YP : Xw;
                let ue;
                if (a[18] !== onDone || a[19] !== urlOutdent) {
                    ue = e(sve, {
                        onDone,
                        mode: "login",
                        forceLoginMethod: "claudeai",
                        urlOutdent
                    });
                    a[18] = onDone;
                    a[19] = urlOutdent;
                    a[20] = ue;
                } else {
                    ue = a[20];
                }
                let M = ue;
                const V = c ? onDone : p;
                const inputGuide = exitState.pending ? `Press ${exitState.keyName} again to cancel` : undefined;
                let Q;
                if (a[21] !== g || a[22] !== c || a[23] !== entries || a[24] !== p || a[25] !== M) {
                    Q = c ? g ? M : e(nE, {
                        claimFocus: true,
                        flexDirection: "column",
                        bindings: entries,
                        children: M
                    }) : r(Y, {
                        children: [
                            r(s, {
                                flexDirection: "column",
                                children: [
                                    e(n, {
                                        dimColor: true,
                                        children: "Teleport requires a Claude.ai account."
                                    }),
                                    e(n, {
                                        dimColor: true,
                                        children: "Your Claude Pro/Max subscription will be used by Claude Code."
                                    })
                                ]
                            }),
                            e(or, {
                                confirmLabel: "Login with Claude account",
                                cancelLabel: g ? "Exit" : "Cancel",
                                onConfirm,
                                onCancel: p
                            })
                        ]
                    });
                    a[21] = g;
                    a[22] = c;
                    a[23] = entries;
                    a[24] = p;
                    a[25] = M;
                    a[26] = Q;
                } else {
                    Q = a[26];
                }
                let fe;
                if (a[27] !== g || a[28] !== V || a[29] !== inputGuide || a[30] !== Q) {
                    fe = e(_e, {
                        title: "Log in to Claude",
                        onCancel: V,
                        exitOnCtrlCD: g,
                        inputGuide,
                        children: Q
                    });
                    a[27] = g;
                    a[28] = V;
                    a[29] = inputGuide;
                    a[30] = Q;
                    a[31] = fe;
                } else {
                    fe = a[31];
                }
                return fe;
            }
    }
}
function GUs(T, errorsToIgnore) {
    return yXe(T, [
        (l)=>e(Mln, {
                errorsToIgnore,
                onComplete: ()=>l(),
                isStandalone: true
            })
    ], {
        session: B()
    });
}
export { Mln, GUs };
