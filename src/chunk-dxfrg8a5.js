import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { pt } from "/$bunfs/root/chunk-223dyewd.js";
import { s, n, Di } from "/$bunfs/root/chunk-8524cxt8.js";
import { y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { V } from "/$bunfs/root/chunk-zby5bms5.js";
import { ui } from "/$bunfs/root/chunk-6gb840dt.js";
import { QPe, ALt, P9e } from "/$bunfs/root/chunk-kd05vdd0.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function W(u) {
    return u.remoteBootstrap;
}
function X() {
    return Date.now();
}
function mqn() {
    let i = w(22);
    let c = V(W);
    let { columns } = ke();
    let [d, x] = y(X);
    let g;
    if (i[0] === S) {
        g = ()=>x(Date.now());
        i[0] = g;
    } else {
        g = i[0];
    }
    Di(g, 1000);
    if (c === null) {
        return null;
    }
    let c_queuedCount = c.queuedCount;
    let o;
    if (i[1] !== c.sessionMode) {
        o = ALt(c.sessionMode);
        i[1] = c.sessionMode;
        i[2] = o;
    } else {
        o = i[2];
    }
    let a;
    if (i[3] !== o) {
        a = r(n, {
            bold: true,
            children: [
                o,
                "…"
            ]
        });
        i[3] = o;
        i[4] = a;
    } else {
        a = i[4];
    }
    let f;
    if (i[5] !== columns || i[6] !== d || i[7] !== c.sessionMode || i[8] !== c.steps) {
        let l;
        if (i[10] !== columns || i[11] !== d || i[12] !== c.sessionMode) {
            l = (step)=>{
                if (step.status === "skipped") {
                    return null;
                }
                return e(Y, {
                    step,
                    sessionMode: c.sessionMode,
                    now: d,
                    columns
                }, step.id);
            };
            i[10] = columns;
            i[11] = d;
            i[12] = c.sessionMode;
            i[13] = l;
        } else {
            l = i[13];
        }
        f = c.steps.map(l);
        i[5] = columns;
        i[6] = d;
        i[7] = c.sessionMode;
        i[8] = c.steps;
        i[9] = f;
    } else {
        f = i[9];
    }
    let l;
    if (i[14] !== c_queuedCount) {
        l = c_queuedCount > 0 ? `${c_queuedCount} ${I(c_queuedCount, "message")} queued \xB7 sends once the session is ready` : "You can start typing — messages send once the session is ready";
        i[14] = c_queuedCount;
        i[15] = l;
    } else {
        l = i[15];
    }
    let m;
    if (i[16] !== l) {
        m = e(s, {
            marginTop: 1,
            children: e(n, {
                dimColor: true,
                children: l
            })
        });
        i[16] = l;
        i[17] = m;
    } else {
        m = i[17];
    }
    let p;
    if (i[18] !== a || i[19] !== f || i[20] !== m) {
        p = r(s, {
            flexDirection: "column",
            marginTop: 1,
            children: [
                a,
                f,
                m
            ]
        });
        i[18] = a;
        i[19] = f;
        i[20] = m;
        i[21] = p;
    } else {
        p = i[21];
    }
    return p;
}
function Y(c) {
    let g = w(23);
    let { step, sessionMode, now, columns } = c;
    let T;
    if (g[0] !== sessionMode || g[1] !== step) {
        T = QPe(step, sessionMode);
        g[0] = sessionMode;
        g[1] = step;
        g[2] = T;
    } else {
        T = g[2];
    }
    let label = T;
    switch(step.status){
        case "completed":
            {
                let a;
                if (g[3] !== now || g[4] !== step) {
                    a = P9e(step, now);
                    g[3] = now;
                    g[4] = step;
                    g[5] = a;
                } else {
                    a = g[5];
                }
                let f;
                if (g[6] !== label || g[7] !== a) {
                    f = e(iee, {
                        status: "completed",
                        label,
                        annotation: a
                    });
                    g[6] = label;
                    g[7] = a;
                    g[8] = f;
                } else {
                    f = g[8];
                }
                return f;
            }
        case "running":
            {
                let a;
                if (g[9] !== now || g[10] !== step) {
                    a = P9e(step, now);
                    g[9] = now;
                    g[10] = step;
                    g[11] = a;
                } else {
                    a = g[11];
                }
                let f;
                if (g[12] !== columns || g[13] !== label || g[14] !== step.detail || g[15] !== a) {
                    f = e(iee, {
                        status: "running",
                        label,
                        annotation: a,
                        detail: step.detail,
                        columns
                    });
                    g[12] = columns;
                    g[13] = label;
                    g[14] = step.detail;
                    g[15] = a;
                    g[16] = f;
                } else {
                    f = g[16];
                }
                return f;
            }
        case "failed":
            {
                let a;
                if (g[17] !== columns || g[18] !== label || g[19] !== step.error) {
                    a = e(iee, {
                        status: "failed",
                        label,
                        detail: step.error,
                        columns
                    });
                    g[17] = columns;
                    g[18] = label;
                    g[19] = step.error;
                    g[20] = a;
                } else {
                    a = g[20];
                }
                return a;
            }
        case "pending":
            {
                let a;
                if (g[21] !== label) {
                    a = e(iee, {
                        status: "pending",
                        label
                    });
                    g[21] = label;
                    g[22] = a;
                } else {
                    a = g[22];
                }
                return a;
            }
        case "skipped":
            {
                return null;
            }
    }
}
function iee(c) {
    let l = w(31);
    let { status, label, annotation, detail, columns, detailOverflow } = c;
    let o = annotation === undefined ? "" : annotation;
    let a = columns === undefined ? 80 : columns;
    let f = detailOverflow === undefined ? "truncate" : detailOverflow;
    let D;
    if (l[0] !== a || l[1] !== detail || l[2] !== f) {
        D = detail === undefined || f === "wrap" ? detail : pt(detail, Math.max(20, a - 8));
        l[0] = a;
        l[1] = detail;
        l[2] = f;
        l[3] = D;
    } else {
        D = l[3];
    }
    let m = D;
    switch(status){
        case "completed":
            {
                let p;
                if (l[4] === S) {
                    p = e(n, {
                        color: "success",
                        children: `  ${te.tick} `
                    });
                    l[4] = p;
                } else {
                    p = l[4];
                }
                let u;
                if (l[5] !== o) {
                    u = e(n, {
                        dimColor: true,
                        children: o
                    });
                    l[5] = o;
                    l[6] = u;
                } else {
                    u = l[6];
                }
                let b;
                if (l[7] !== label || l[8] !== u) {
                    b = r(s, {
                        children: [
                            p,
                            r(n, {
                                children: [
                                    label,
                                    u
                                ]
                            })
                        ]
                    });
                    l[7] = label;
                    l[8] = u;
                    l[9] = b;
                } else {
                    b = l[9];
                }
                return b;
            }
        case "running":
            {
                let p;
                if (l[10] === S) {
                    p = e(s, {
                        width: 4,
                        paddingLeft: 2,
                        children: e(ui, {})
                    });
                    l[10] = p;
                } else {
                    p = l[10];
                }
                let u;
                if (l[11] !== o) {
                    u = e(n, {
                        dimColor: true,
                        children: o
                    });
                    l[11] = o;
                    l[12] = u;
                } else {
                    u = l[12];
                }
                let b;
                if (l[13] !== label || l[14] !== u) {
                    b = r(s, {
                        children: [
                            p,
                            r(n, {
                                children: [
                                    label,
                                    "…",
                                    u
                                ]
                            })
                        ]
                    });
                    l[13] = label;
                    l[14] = u;
                    l[15] = b;
                } else {
                    b = l[15];
                }
                let M;
                if (l[16] !== m) {
                    M = m !== undefined && m !== "" && e(s, {
                        paddingLeft: 6,
                        children: e(n, {
                            dimColor: true,
                            children: m
                        })
                    });
                    l[16] = m;
                    l[17] = M;
                } else {
                    M = l[17];
                }
                let E;
                if (l[18] !== b || l[19] !== M) {
                    E = r(s, {
                        flexDirection: "column",
                        children: [
                            b,
                            M
                        ]
                    });
                    l[18] = b;
                    l[19] = M;
                    l[20] = E;
                } else {
                    E = l[20];
                }
                return E;
            }
        case "failed":
            {
                let p;
                if (l[21] === S) {
                    p = e(n, {
                        color: "error",
                        children: `  ${te.cross} `
                    });
                    l[21] = p;
                } else {
                    p = l[21];
                }
                let u;
                if (l[22] !== label) {
                    u = r(s, {
                        children: [
                            p,
                            e(n, {
                                children: label
                            })
                        ]
                    });
                    l[22] = label;
                    l[23] = u;
                } else {
                    u = l[23];
                }
                let b;
                if (l[24] !== m) {
                    b = m !== undefined && m !== "" && e(s, {
                        paddingLeft: 6,
                        children: e(n, {
                            color: "error",
                            children: m
                        })
                    });
                    l[24] = m;
                    l[25] = b;
                } else {
                    b = l[25];
                }
                let M;
                if (l[26] !== u || l[27] !== b) {
                    M = r(s, {
                        flexDirection: "column",
                        children: [
                            u,
                            b
                        ]
                    });
                    l[26] = u;
                    l[27] = b;
                    l[28] = M;
                } else {
                    M = l[28];
                }
                return M;
            }
        case "pending":
            {
                const p = `  ${te.circle} ${label}`;
                let u;
                if (l[29] !== p) {
                    u = e(s, {
                        children: e(n, {
                            dimColor: true,
                            children: p
                        })
                    });
                    l[29] = p;
                    l[30] = u;
                } else {
                    u = l[30];
                }
                return u;
            }
    }
}
export { mqn, iee };
