import { I, Nr } from "/$bunfs/root/chunk-qch5xj2a.js";
import { uo, dxs, aq, VWn, lEo } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { ae, pt, rn, Epe, Lr } from "/$bunfs/root/chunk-223dyewd.js";
import { Rw, Vf } from "/$bunfs/root/chunk-0ycjphb5.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n, Di } from "/$bunfs/root/chunk-8524cxt8.js";
import { PI } from "/$bunfs/root/chunk-rk838m7w.js";
import { Zc, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { dt } from "/$bunfs/root/chunk-xg9ned06.js";
import { el, ns } from "/$bunfs/root/chunk-2mjaqpws.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { Kb } from "/$bunfs/root/chunk-f1pkxrfr.js";
import { gGo } from "/$bunfs/root/chunk-gfvynar4.js";
import { vu } from "/$bunfs/root/chunk-0v20st7x.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { Ws } from "/$bunfs/root/chunk-59xjawk6.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
function X9e(l, t) {
    let a = (i)=>Vf(i) ?? Rw(i);
    if (t != null) {
        return `${l == null ? "" : `${a(l)} `}${dxs} ${a(t)}`;
    }
    if (l != null) {
        return a(l);
    }
    return "";
}
N();
function _t(ge) {
    return ge.state === "done";
}
function jt(pe) {
    return pe.state === "error";
}
function zt(ee) {
    return ee.state === "start" || ee.state === "progress";
}
function Vt(v) {
    return v.state === "done";
}
function Bt(T) {
    return T.state === "error";
}
function Ut(v, T) {
    return e(n, {
        dimColor: true,
        children: v
    }, T);
}
function UKn(l) {
    let t = new Map;
    let logs = [];
    let phaseTitles = new Map;
    for (let o of l){
        if (o.type === "workflow_agent") {
            t.set(o.index, o);
        } else if (o.type === "workflow_log") {
            logs.push(o.message);
        } else if (o.type === "workflow_phase") {
            phaseTitles.set(o.index, {
                title: o.title,
                kind: o.kind
            });
        }
    }
    return {
        agents: [
            ...t.values()
        ].sort((o, d)=>o.index - d.index),
        logs,
        phaseTitles
    };
}
function ie(agents, phaseTitles) {
    if (!agents.some((i)=>i.phaseIndex != null)) {
        return null;
    }
    let a = new Map;
    for (let i of agents){
        let phaseIndex = i.phaseIndex ?? 0;
        let d = a.get(phaseIndex);
        if (!d) {
            let c = phaseTitles.get(phaseIndex);
            d = {
                phaseIndex,
                title: c?.title ?? `Phase ${phaseIndex}`,
                kind: c?.kind,
                agents: []
            };
            a.set(phaseIndex, d);
        }
        d.agents.push(i);
    }
    return [
        ...a.values()
    ].sort((i, o)=>i.phaseIndex - o.phaseIndex);
}
function K(l) {
    let g = w(31);
    let { row, isLast } = l;
    let i = isLast ? "└─" : "├─";
    let o = row.state === "start" || row.state === "progress";
    let d;
    c: switch(row.state){
        case "done":
            {
                d = "success";
                break c;
            }
        case "error":
            {
                d = "error";
                break c;
            }
        case "start":
        case "progress":
            {
                d = "running";
            }
    }
    let m;
    if (g[0] !== o || g[1] !== row.agentType || g[2] !== row.durationMs || g[3] !== row.fallbackModel || g[4] !== row.model || g[5] !== row.tokens || g[6] !== row.toolCalls) {
        m = [];
        if (row.agentType != null) {
            m.push(row.agentType);
        }
        if (row.model != null || row.fallbackModel != null) {
            let u;
            if (g[8] !== row.fallbackModel || g[9] !== row.model) {
                u = X9e(row.model, row.fallbackModel);
                g[8] = row.fallbackModel;
                g[9] = row.model;
                g[10] = u;
            } else {
                u = g[10];
            }
            m.push(u);
        }
        if (row.tokens != null) {
            let u;
            if (g[11] !== row.tokens) {
                u = Lr(row.tokens);
                g[11] = row.tokens;
                g[12] = u;
            } else {
                u = g[12];
            }
            m.push(`${u} tok`);
        }
        if (row.toolCalls != null && row.toolCalls > 0) {
            const u = row.toolCalls;
            let f;
            if (g[13] !== row.toolCalls) {
                f = I(row.toolCalls, "tool");
                g[13] = row.toolCalls;
                g[14] = f;
            } else {
                f = g[14];
            }
            m.push(`${u} ${f}`);
        }
        if (row.durationMs != null) {
            let u;
            if (g[15] !== row.durationMs) {
                u = rn(row.durationMs);
                g[15] = row.durationMs;
                g[16] = u;
            } else {
                u = g[16];
            }
            m.push(u);
        }
        if (o && m.length === 0) {
            m.push("…running");
        }
        g[0] = o;
        g[1] = row.agentType;
        g[2] = row.durationMs;
        g[3] = row.fallbackModel;
        g[4] = row.model;
        g[5] = row.tokens;
        g[6] = row.toolCalls;
        g[7] = m;
    } else {
        m = g[7];
    }
    let u;
    if (g[17] !== d) {
        u = e(dt, {
            status: d
        });
        g[17] = d;
        g[18] = u;
    } else {
        u = g[18];
    }
    const row_label = row.label;
    let p;
    if (g[19] !== m) {
        p = m.length > 0 && r(n, {
            dimColor: true,
            children: [
                "  ",
                m.join(" · ")
            ]
        });
        g[19] = m;
        g[20] = p;
    } else {
        p = g[20];
    }
    let h;
    if (g[21] !== row.error || g[22] !== row.state) {
        h = row.state === "error" && row.error && r(n, {
            color: "error",
            children: [
                " ",
                "—",
                " ",
                row.error
            ]
        });
        g[21] = row.error;
        g[22] = row.state;
        g[23] = h;
    } else {
        h = g[23];
    }
    let C;
    if (g[24] !== o || g[25] !== row.label || g[26] !== u || g[27] !== p || g[28] !== h || g[29] !== i) {
        C = e(s, {
            paddingLeft: 1,
            children: r(n, {
                dimColor: o,
                children: [
                    i,
                    " ",
                    u,
                    " ",
                    row_label,
                    p,
                    h
                ]
            })
        });
        g[24] = o;
        g[25] = row.label;
        g[26] = u;
        g[27] = p;
        g[28] = h;
        g[29] = i;
        g[30] = C;
    } else {
        C = g[30];
    }
    return C;
}
function Ce(l) {
    let o = w(41);
    let { group, verbose, width } = l;
    let d;
    if (o[0] !== group.agents) {
        d = group.agents.filter(_t);
        o[0] = group.agents;
        o[1] = d;
    } else {
        d = o[1];
    }
    let c = d;
    let g;
    let m;
    let u;
    let f;
    let p;
    if (o[2] !== c.length || o[3] !== group.agents || o[4] !== verbose) {
        let h = group.agents.filter(jt);
        let C = group.agents.filter(zt);
        p = group.agents.length;
        m = c.length;
        u = h.length;
        g = m + u === p && p > 0;
        f = verbose ? group.agents : [
            ...h,
            ...C
        ];
        o[2] = c.length;
        o[3] = group.agents;
        o[4] = verbose;
        o[5] = g;
        o[6] = m;
        o[7] = u;
        o[8] = f;
        o[9] = p;
    } else {
        g = o[5];
        m = o[6];
        u = o[7];
        f = o[8];
        p = o[9];
    }
    let b = f;
    let x = group.agents[0]?.model;
    let M;
    if (o[10] !== x || o[11] !== group.agents) {
        M = x && group.agents.every((A)=>A.model === x) ? X9e(x, undefined) : undefined;
        o[10] = x;
        o[11] = group.agents;
        o[12] = M;
    } else {
        M = o[12];
    }
    let P = M;
    let v = !g ? "running" : u > 0 ? "error" : "success";
    const borderColor = group.kind === "child" ? "permission" : "subtle";
    let _;
    if (o[13] !== group.title) {
        _ = e(n, {
            bold: true,
            children: group.title
        });
        o[13] = group.title;
        o[14] = _;
    } else {
        _ = o[14];
    }
    let W;
    if (o[15] !== v) {
        W = e(dt, {
            status: v
        });
        o[15] = v;
        o[16] = W;
    } else {
        W = o[16];
    }
    const D = P && ` \xB7 ${P}`;
    let G;
    if (o[17] !== u) {
        G = u > 0 && r(n, {
            color: "error",
            children: [
                " ",
                "·",
                " ",
                u,
                " failed"
            ]
        });
        o[17] = u;
        o[18] = G;
    } else {
        G = o[18];
    }
    let j;
    if (o[19] !== m || o[20] !== D || o[21] !== G || o[22] !== p) {
        j = r(n, {
            dimColor: true,
            children: [
                m,
                "/",
                p,
                D,
                G
            ]
        });
        o[19] = m;
        o[20] = D;
        o[21] = G;
        o[22] = p;
        o[23] = j;
    } else {
        j = o[23];
    }
    let z;
    if (o[24] !== _ || o[25] !== W || o[26] !== j) {
        z = e(s, {
            paddingX: 1,
            children: r(n, {
                children: [
                    _,
                    "  ",
                    W,
                    " ",
                    j
                ]
            })
        });
        o[24] = _;
        o[25] = W;
        o[26] = j;
        o[27] = z;
    } else {
        z = o[27];
    }
    let U;
    if (o[28] !== m || o[29] !== verbose) {
        U = !verbose && m > 0 && e(s, {
            paddingLeft: 1,
            children: r(n, {
                dimColor: true,
                children: [
                    e(dt, {
                        status: "success"
                    }),
                    " ",
                    m,
                    " done"
                ]
            })
        });
        o[28] = m;
        o[29] = verbose;
        o[30] = U;
    } else {
        U = o[30];
    }
    let X;
    if (o[31] !== b) {
        let O;
        if (o[33] !== b.length) {
            O = (Z, Y)=>e(K, {
                    row: Z,
                    isLast: Y === b.length - 1
                }, Z.index);
            o[33] = b.length;
            o[34] = O;
        } else {
            O = o[34];
        }
        X = b.map(O);
        o[31] = b;
        o[32] = X;
    } else {
        X = o[32];
    }
    let O;
    if (o[35] !== z || o[36] !== U || o[37] !== X || o[38] !== borderColor || o[39] !== width) {
        O = r(s, {
            flexDirection: "column",
            borderStyle: "single",
            borderColor,
            alignSelf: "flex-start",
            width,
            children: [
                z,
                U,
                X
            ]
        });
        o[35] = z;
        o[36] = U;
        o[37] = X;
        o[38] = borderColor;
        o[39] = width;
        o[40] = O;
    } else {
        O = o[40];
    }
    return O;
}
const _e = 8;
function Pe(l) {
    let i = w(26);
    let { agents, verbose } = l;
    let o;
    if (i[0] !== agents || i[1] !== verbose) {
        o = verbose ? agents : agents.slice(-_e);
        i[0] = agents;
        i[1] = verbose;
        i[2] = o;
    } else {
        o = i[2];
    }
    let d = o;
    let c = agents.length - d.length;
    let g;
    if (i[3] !== agents) {
        g = F(agents, Vt);
        i[3] = agents;
        i[4] = g;
    } else {
        g = i[4];
    }
    let m = g;
    let u = F(agents, Bt);
    const agents_length = agents.length;
    let p;
    if (i[5] !== agents.length) {
        p = I(agents.length, "agent");
        i[5] = agents.length;
        i[6] = p;
    } else {
        p = i[6];
    }
    let h;
    if (i[7] !== u) {
        h = u > 0 && r(n, {
            color: "error",
            children: [
                " ",
                "·",
                " ",
                u,
                " failed"
            ]
        });
        i[7] = u;
        i[8] = h;
    } else {
        h = i[8];
    }
    let C;
    if (i[9] !== agents.length || i[10] !== m || i[11] !== p || i[12] !== h) {
        C = r(n, {
            children: [
                agents_length,
                " ",
                p,
                " ",
                "·",
                " ",
                m,
                " done",
                h
            ]
        });
        i[9] = agents.length;
        i[10] = m;
        i[11] = p;
        i[12] = h;
        i[13] = C;
    } else {
        C = i[13];
    }
    let b;
    if (i[14] !== c || i[15] !== d) {
        let x;
        if (i[17] !== c || i[18] !== d.length) {
            x = (M, A)=>e(K, {
                    row: M,
                    isLast: A === d.length - 1 && c === 0
                }, M.index);
            i[17] = c;
            i[18] = d.length;
            i[19] = x;
        } else {
            x = i[19];
        }
        b = d.map(x);
        i[14] = c;
        i[15] = d;
        i[16] = b;
    } else {
        b = i[16];
    }
    let x;
    if (i[20] !== c) {
        x = c > 0 && e(s, {
            paddingLeft: 1,
            children: r(n, {
                dimColor: true,
                children: [
                    "└─ · · · +",
                    c,
                    " more"
                ]
            })
        });
        i[20] = c;
        i[21] = x;
    } else {
        x = i[21];
    }
    let P;
    if (i[22] !== C || i[23] !== b || i[24] !== x) {
        P = r(s, {
            flexDirection: "column",
            children: [
                C,
                b,
                x
            ]
        });
        i[22] = C;
        i[23] = b;
        i[24] = x;
        i[25] = P;
    } else {
        P = i[25];
    }
    return P;
}
function aHr(l) {
    let g = w(18);
    let { collected, verbose, width } = l;
    let { agents, logs, phaseTitles } = collected;
    if (agents.length === 0 && logs.length === 0) {
        return null;
    }
    let m;
    let flexDirection;
    let f;
    let p;
    let h;
    if (g[0] !== agents || g[1] !== logs || g[2] !== phaseTitles || g[3] !== verbose || g[4] !== width) {
        let C = ie(agents, phaseTitles);
        let b;
        if (g[10] !== logs) {
            b = logs.at(-1);
            g[10] = logs;
            g[11] = b;
        } else {
            b = g[11];
        }
        let x = b;
        let M = logs.slice(-3, -1);
        m = s;
        flexDirection = "column";
        f = x && e(s, {
            marginBottom: C || agents.length > 0 ? 1 : 0,
            children: r(n, {
                children: [
                    te.pointer,
                    " ",
                    x
                ]
            })
        });
        p = C ? e(s, {
            flexDirection: "column",
            children: C.map((group, P)=>r(Zc, {
                    children: [
                        e(Ce, {
                            group,
                            verbose,
                            width
                        }),
                        P < C.length - 1 && e(s, {
                            paddingLeft: 3,
                            children: e(n, {
                                dimColor: true,
                                children: "↓"
                            })
                        })
                    ]
                }, group.phaseIndex))
        }) : agents.length > 0 ? e(Pe, {
            agents,
            verbose
        }) : null;
        h = M.length > 0 && e(s, {
            flexDirection: "column",
            paddingLeft: 3,
            marginTop: 1,
            children: M.map(Ut)
        });
        g[0] = agents;
        g[1] = logs;
        g[2] = phaseTitles;
        g[3] = verbose;
        g[4] = width;
        g[5] = m;
        g[6] = flexDirection;
        g[7] = f;
        g[8] = p;
        g[9] = h;
    } else {
        m = g[5];
        flexDirection = g[6];
        f = g[7];
        p = g[8];
        h = g[9];
    }
    let b;
    if (g[12] !== m || g[13] !== flexDirection || g[14] !== f || g[15] !== p || g[16] !== h) {
        b = r(m, {
            flexDirection,
            children: [
                f,
                p,
                h
            ]
        });
        g[12] = m;
        g[13] = flexDirection;
        g[14] = f;
        g[15] = p;
        g[16] = h;
        g[17] = b;
    } else {
        b = g[17];
    }
    return b;
}
N();
function An() {
    return Date.now();
}
const R = 4;
const Ze = 80;
function Re(l) {
    let t = w(2);
    let a;
    if (t[0] === S) {
        a = lEo();
        t[0] = a;
    } else {
        a = t[0];
    }
    let i = a;
    let [o, d] = y(0);
    let c = vu();
    let g;
    if (t[1] === S) {
        g = ()=>d((m)=>(m + 1) % i.length);
        t[1] = g;
    } else {
        g = t[1];
    }
    Di(g, l && !c ? Ze : null);
    return i[o % i.length];
}
function ve(l) {
    let o = w(14);
    let { done, total, running } = l;
    let d;
    if (o[0] !== done || o[1] !== total) {
        d = total > 0 ? Math.round(done / total * R) : 0;
        o[0] = done;
        o[1] = total;
        o[2] = d;
    } else {
        d = o[2];
    }
    let c = d;
    let g = Math.min(running ? R - 1 : R, Math.max(0, c));
    let m = running ? Math.min(R - g, 1) : 0;
    let u = R - g - m;
    let f = Re(m > 0);
    let p;
    if (o[3] !== g) {
        p = g > 0 && e(n, {
            color: "success",
            children: VWn.repeat(g)
        });
        o[3] = g;
        o[4] = p;
    } else {
        p = o[4];
    }
    let h;
    if (o[5] !== f || o[6] !== m) {
        h = m > 0 && e(n, {
            color: "success",
            children: f
        });
        o[5] = f;
        o[6] = m;
        o[7] = h;
    } else {
        h = o[7];
    }
    let C;
    if (o[8] !== u) {
        C = u > 0 && e(n, {
            color: "subtle",
            dimColor: true,
            children: VWn.repeat(u)
        });
        o[8] = u;
        o[9] = C;
    } else {
        C = o[9];
    }
    let b;
    if (o[10] !== p || o[11] !== h || o[12] !== C) {
        b = r(n, {
            children: [
                p,
                h,
                C
            ]
        });
        o[10] = p;
        o[11] = h;
        o[12] = C;
        o[13] = b;
    } else {
        b = o[13];
    }
    return b;
}
const BKn = 9;
const Je = 12;
function jKn(l) {
    let o = w(9);
    let t = ke();
    let { rows } = ns(t);
    let i = el();
    let d;
    if (o[0] !== i || o[1] !== l || o[2] !== rows) {
        d = i ? rows : PI() ? Math.floor(rows / 2) : l ? Math.max(Je, rows - BKn) : rows;
        o[0] = i;
        o[1] = l;
        o[2] = rows;
        o[3] = d;
    } else {
        d = o[3];
    }
    let availableRows = d;
    let { columns } = t;
    let width = Math.max(24, columns - 6);
    let u;
    if (o[4] !== availableRows || o[5] !== columns || o[6] !== rows || o[7] !== width) {
        u = {
            availableRows,
            width,
            rows,
            columns
        };
        o[4] = availableRows;
        o[5] = columns;
        o[6] = rows;
        o[7] = width;
        o[8] = u;
    } else {
        u = o[8];
    }
    return u;
}
function J9e(l) {
    let o = w(1);
    let t = l.status === "running";
    let [a, i] = y(An);
    let d;
    if (o[0] === S) {
        d = ()=>i(Date.now());
        o[0] = d;
    } else {
        d = o[0];
    }
    Di(d, t ? 1000 : null);
    return Math.max(0, (l.endTime ?? a) - l.startTime - (l.totalPausedMs ?? 0));
}
const ue = 17;
function WKn(l) {
    let P = w(28);
    let { index, title, done, total, status, selected, trailing } = l;
    let m = selected === undefined ? false : selected;
    let u = trailing === undefined ? "" : trailing;
    let f = status === "done";
    let p = status === "failed";
    let h = f || p;
    let C = m ? "permission" : f ? "success" : p ? "error" : "subtle";
    let b = m ? te.pointer : " ";
    let x = f ? te.tick : p ? te.cross : String(index);
    let M = ae(b) + 1 + ae(x) + 1;
    let A = Math.max(1, ue - M);
    let v;
    if (P[0] !== title || P[1] !== A) {
        v = pt(title, A);
        P[0] = title;
        P[1] = A;
        P[2] = v;
    } else {
        v = P[2];
    }
    let T = v;
    let _ = `${b} ${x} ${T}`;
    let W = Math.max(0, ue - ae(_));
    let D = total > 0 ? `${done}/${total}` : "";
    const G = m ? "permission" : undefined;
    let j;
    if (P[3] !== b || P[4] !== G) {
        j = e(n, {
            color: G,
            children: b
        });
        P[3] = b;
        P[4] = G;
        P[5] = j;
    } else {
        j = P[5];
    }
    let z;
    if (P[6] !== C || P[7] !== x) {
        z = e(n, {
            color: C,
            children: x
        });
        P[6] = C;
        P[7] = x;
        P[8] = z;
    } else {
        z = P[8];
    }
    const U = m ? "permission" : f ? "success" : p ? "error" : undefined;
    const X = !m && !h;
    let O;
    if (P[9] !== T || P[10] !== U || P[11] !== X) {
        O = e(n, {
            color: U,
            dimColor: X,
            children: T
        });
        P[9] = T;
        P[10] = U;
        P[11] = X;
        P[12] = O;
    } else {
        O = P[12];
    }
    let Z;
    if (P[13] !== W) {
        Z = " ".repeat(W);
        P[13] = W;
        P[14] = Z;
    } else {
        Z = P[14];
    }
    let Y;
    if (P[15] !== Z || P[16] !== j || P[17] !== z || P[18] !== O) {
        Y = r(n, {
            wrap: "truncate-end",
            children: [
                j,
                " ",
                z,
                " ",
                O,
                Z
            ]
        });
        P[15] = Z;
        P[16] = j;
        P[17] = z;
        P[18] = O;
        P[19] = Y;
    } else {
        Y = P[19];
    }
    const ge = m ? "permission" : f ? "success" : p ? "error" : undefined;
    const pe = !m && !h;
    const ee = u ? `  ${u}` : "";
    let fe;
    if (P[20] !== D || P[21] !== ge || P[22] !== pe || P[23] !== ee) {
        fe = r(n, {
            wrap: "truncate-end",
            color: ge,
            dimColor: pe,
            children: [
                D,
                ee
            ]
        });
        P[20] = D;
        P[21] = ge;
        P[22] = pe;
        P[23] = ee;
        P[24] = fe;
    } else {
        fe = P[24];
    }
    let wt;
    if (P[25] !== Y || P[26] !== fe) {
        wt = r(s, {
            children: [
                Y,
                fe
            ]
        });
        P[25] = Y;
        P[26] = fe;
        P[27] = wt;
    } else {
        wt = P[27];
    }
    return wt;
}
function zKn(l) {
    let p = w(23);
    let { name, done, total, running, elapsedMs, complete, dotState, phaseText, selected } = l;
    let bold = selected === undefined ? false : selected;
    let h;
    if (p[0] !== elapsedMs) {
        h = elapsedMs !== undefined ? Epe(elapsedMs) : undefined;
        p[0] = elapsedMs;
        p[1] = h;
    } else {
        h = p[1];
    }
    let C = h;
    let b = complete ? ` \xB7 ${te.ellipsis} to view` : "";
    let x = dotState === "failed" ? "error" : "success";
    let M;
    if (p[2] !== x) {
        M = e(n, {
            color: x,
            children: uo
        });
        p[2] = x;
        p[3] = M;
    } else {
        M = p[3];
    }
    let A;
    if (p[4] !== name || p[5] !== bold) {
        A = name ? r(n, {
            color: bold ? "claude" : undefined,
            bold,
            children: [
                name,
                " "
            ]
        }) : null;
        p[4] = name;
        p[5] = bold;
        p[6] = A;
    } else {
        A = p[6];
    }
    let P;
    if (p[7] !== done || p[8] !== running || p[9] !== total) {
        P = e(ve, {
            done,
            total,
            running
        });
        p[7] = done;
        p[8] = running;
        p[9] = total;
        p[10] = P;
    } else {
        P = p[10];
    }
    const v = !bold;
    const T = phaseText ? ` \xB7 ${phaseText}` : "";
    const _ = ` \xB7 ${done}/${total} agents`;
    const W = C ? ` \xB7 ${C}` : "";
    let D;
    if (p[11] !== b || p[12] !== bold || p[13] !== v || p[14] !== T || p[15] !== _ || p[16] !== W) {
        D = r(n, {
            dimColor: v,
            bold,
            children: [
                T,
                _,
                W,
                b
            ]
        });
        p[11] = b;
        p[12] = bold;
        p[13] = v;
        p[14] = T;
        p[15] = _;
        p[16] = W;
        p[17] = D;
    } else {
        D = p[17];
    }
    let G;
    if (p[18] !== D || p[19] !== M || p[20] !== A || p[21] !== P) {
        G = r(n, {
            wrap: "truncate-end",
            children: [
                M,
                " ",
                A,
                P,
                D
            ]
        });
        p[18] = D;
        p[19] = M;
        p[20] = A;
        p[21] = P;
        p[22] = G;
    } else {
        G = p[22];
    }
    return G;
}
function Q9e(l) {
    let c = w(17);
    let { name, subtext, stats, width } = l;
    let d = el();
    let g;
    if (c[0] !== d || c[1] !== width) {
        g = !d && e(n, {
            color: "text",
            wrap: "truncate-end",
            children: aq.repeat(Math.max(1, width))
        });
        c[0] = d;
        c[1] = width;
        c[2] = g;
    } else {
        g = c[2];
    }
    let m;
    if (c[3] !== name) {
        m = r(n, {
            bold: true,
            color: "permission",
            wrap: "truncate-end",
            children: [
                " ",
                name
            ]
        });
        c[3] = name;
        c[4] = m;
    } else {
        m = c[4];
    }
    let u;
    if (c[5] !== subtext) {
        u = e(s, {
            flexGrow: 1,
            flexShrink: 1,
            overflow: "hidden",
            children: r(n, {
                dimColor: true,
                wrap: "truncate-end",
                children: [
                    " ",
                    subtext
                ]
            })
        });
        c[5] = subtext;
        c[6] = u;
    } else {
        u = c[6];
    }
    let f;
    if (c[7] !== stats) {
        f = stats ? e(s, {
            flexShrink: 0,
            children: r(n, {
                dimColor: true,
                children: [
                    stats,
                    " "
                ]
            })
        }) : null;
        c[7] = stats;
        c[8] = f;
    } else {
        f = c[8];
    }
    let p;
    if (c[9] !== u || c[10] !== f || c[11] !== width) {
        p = r(s, {
            width,
            overflow: "hidden",
            children: [
                u,
                f
            ]
        });
        c[9] = u;
        c[10] = f;
        c[11] = width;
        c[12] = p;
    } else {
        p = c[12];
    }
    let h;
    if (c[13] !== g || c[14] !== m || c[15] !== p) {
        h = r(s, {
            flexDirection: "column",
            children: [
                g,
                m,
                p
            ]
        });
        c[13] = g;
        c[14] = m;
        c[15] = p;
        c[16] = h;
    } else {
        h = c[16];
    }
    return h;
}
function $e(l) {
    let doneCount = F(l.agents, (u)=>u.state === "done");
    let a = F(l.agents, (u)=>u.state === "error");
    let length = l.agents.length;
    let o = doneCount + a === length && length > 0;
    let tokens = 0;
    let c = Infinity;
    let g = 0;
    for (let u of l.agents){
        if (u.tokens) {
            tokens += u.tokens;
        }
        if (u.startedAt != null) {
            if (u.startedAt < c) {
                c = u.startedAt;
            }
            let f = u.lastProgressAt ?? u.startedAt;
            if (f > g) {
                g = f;
            }
        }
    }
    let durationMs = c < Infinity ? g - c : 0;
    return {
        title: l.title,
        status: o ? a > 0 ? "failed" : "done" : "running",
        agents: l.agents,
        doneCount,
        totalCount: length,
        tokens,
        durationMs
    };
}
function Sn(title) {
    return {
        title,
        status: "not-started",
        agents: [],
        doneCount: 0,
        totalCount: 0,
        tokens: 0,
        durationMs: 0
    };
}
function ft(l) {
    return l.toLowerCase().trim();
}
function Rn(l, title) {
    let a = ft(l);
    let i = ft(title);
    if (!a || !i) {
        return a === i;
    }
    return a === i || a.startsWith(i) || i.startsWith(a);
}
function vn(phases, t) {
    let a = new Set;
    let i = [];
    function o(title) {
        for (let c of t){
            if (a.has(c)) {
                continue;
            }
            if (Rn(title, c.title)) {
                a.add(c);
                return c;
            }
        }
    }
    for (let d of phases ?? []){
        let c = o(d.title);
        i.push(c ? $e(c) : Sn(d.title));
    }
    for (let d of t){
        if (!a.has(d)) {
            i.push($e(d));
        }
    }
    return i;
}
function lHr(l) {
    let t = UKn(l.workflowProgress);
    let a = ie(t.agents, t.phaseTitles) ?? [];
    let i = vn(l.phases, a);
    if (i.length === 0 && t.agents.length > 0) {
        return [
            $e({
                phaseIndex: 0,
                title: "Agents",
                agents: t.agents
            })
        ];
    }
    return i;
}
const me = 16;
function cHr(l, t) {
    return null;
}
const ht = me + 8;
const We = "aeiou";
const Wn = new Map([
    [
        "commit",
        "committing"
    ],
    [
        "submit",
        "submitting"
    ],
    [
        "format",
        "formatting"
    ],
    [
        "edit",
        "editing"
    ],
    [
        "exit",
        "exiting"
    ],
    [
        "setup",
        null
    ],
    [
        "cleanup",
        null
    ],
    [
        "init",
        null
    ]
]);
const Dn = /^[A-Za-z]{3,12}$/;
function $n(l) {
    if (!Dn.test(l)) {
        return l;
    }
    let t = l.toLowerCase();
    let a = Wn.get(t);
    if (a !== undefined) {
        if (a === null) {
            return l;
        }
        return l[0] + a.slice(1);
    }
    if (t.endsWith("ing")) {
        return l;
    }
    if (t.endsWith("ie")) {
        return `${l.slice(0, -2)}ying`;
    }
    if (t.endsWith("e") && !t.endsWith("ee") && !t.endsWith("ye")) {
        return `${l.slice(0, -1)}ing`;
    }
    let i = t.at(-1);
    if (t.length <= 4 && !We.includes(t.at(-3)) && We.includes(t.at(-2)) && !We.includes(i) && !"wxy".includes(i)) {
        return `${l}${i}ing`;
    }
    return `${l}ing`;
}
const De = " & ";
function dHr({ titles, positionStart, totalPhases }) {
    let o = titles.map((c)=>$n(Nr(c)));
    if (o.length === 1) {
        return `${pt(o[0] ?? "", me)} (${positionStart}/${totalPhases})`;
    }
    if (o.length === 2) {
        let c = o.map((m)=>pt(m, me)).join(De);
        let g = Math.floor((ht - De.length) / 2);
        if (ae(c) <= ht) {
            return c;
        }
        return o.map((m)=>pt(m, g)).join(De);
    }
    let d = ` +${o.length - 1}`;
    return pt(o[0] ?? "", me - ae(d)) + d;
}
function uHr(l, t) {
    let doneAgents = 0;
    let i = 0;
    for (let o of l){
        doneAgents += o.doneCount;
        i += o.totalCount;
    }
    return {
        doneAgents,
        totalAgents: Math.max(t, i, doneAgents)
    };
}
function pHr(l) {
    if (l.script.length > 0) {
        let t = Kb(l.script);
        if (!("error" in t) && t.meta.description) {
            return t.meta.description;
        }
    }
    return l.description || l.summary || "";
}
function fHr(l, t, a, i) {
    let o = l.status === "completed" ? " · done" : l.status === "killed" ? " · stopped" : l.status === "paused" ? " · paused" : Ws(l.status) ? " · failed" : "";
    let subtext = l.status === "running" && l.rateLimitWait !== undefined ? gGo(l.rateLimitWait.resetsAt) : t;
    let stats = `${a.doneAgents}/${a.totalAgents} ${I(a.totalAgents, "agent")} \xB7 ${Epe(i)}${o}`;
    return {
        name: l.workflowName ?? l.summary ?? l.description,
        subtext,
        stats
    };
}
function $1e(l, t = 0) {
    let a = 0;
    let done = 0;
    let failedCount = 0;
    let started = 0;
    let running = false;
    for (let u of l){
        if (u.type !== "workflow_agent") {
            continue;
        }
        a++;
        if (u.state === "done") {
            done++;
            started++;
        } else if (u.state === "error") {
            failedCount++;
            started++;
        } else if (u.state === "start" || u.state === "progress") {
            running = true;
            if (u.startedAt !== undefined || u.queuedAt === undefined || (u.tokens ?? 0) > 0) {
                started++;
            }
        }
    }
    let total = Math.max(t, a);
    let complete = !running && a > 0 && done + failedCount >= total;
    return {
        done,
        failedCount,
        running,
        total,
        started,
        complete
    };
}
export { X9e, UKn, aHr, BKn, jKn, J9e, WKn, zKn, Q9e, lHr, cHr, dHr, uHr, pHr, fHr, $1e };
