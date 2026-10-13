import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { V } from "/$bunfs/root/chunk-zby5bms5.js";
import { ae, pt } from "/$bunfs/root/chunk-223dyewd.js";
import { Nx } from "/$bunfs/root/chunk-tsssve1m.js";
import { mie } from "/$bunfs/root/chunk-gja823pp.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { on, s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { P, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { ND } from "/$bunfs/root/chunk-gc4z3rgw.js";
import { Xo } from "/$bunfs/root/chunk-gsdht23v.js";
import { UTn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { vp } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
N();
function Se(v) {
    return v.expandedView;
}
function Be(T, U) {
    return parseInt(T, 10) - parseInt(U, 10);
}
function Ie(ee) {
    return `#${ee}`;
}
function pYn(i) {
    let x = w(2);
    let { hidden } = i;
    let f = V(Se) === "tasks";
    let tasks = mie();
    if (hidden || !f || !tasks || tasks.length === 0) {
        return null;
    }
    let z;
    if (x[0] !== tasks) {
        z = e(s, {
            width: "100%",
            flexDirection: "column",
            children: e(fYn, {
                tasks,
                isStandalone: true
            })
        });
        x[0] = tasks;
        x[1] = z;
    } else {
        z = x[1];
    }
    return z;
}
const oe = 30000;
function W(i, c) {
    let f = parseInt(i.id, 10);
    let d = parseInt(c.id, 10);
    if (!isNaN(f) && !isNaN(d)) {
        return f - d;
    }
    return i.id.localeCompare(c.id);
}
function fYn({ tasks, isStandalone = false }) {
    let f = V((t)=>t.teamContext);
    let d = V((t)=>t.tasks);
    let [x, z] = y(0);
    let { rows, columns } = ke();
    let A = on();
    let C = R(null);
    C.current ??= new Map(tasks.filter((t)=>t.status === "completed").map((t)=>[
            t.id,
            null
        ]));
    let C_current = C.current;
    let S = rows <= 10 ? 0 : Math.min(5, Math.max(3, rows - 14));
    let E = new Set(tasks.filter((t)=>t.status === "completed").map((t)=>t.id));
    let _ = Date.now();
    for (let t of E){
        if (!C_current.has(t)) {
            C_current.set(t, _);
        }
    }
    for (let t of C_current.keys()){
        if (!E.has(t)) {
            C_current.delete(t);
        }
    }
    P(()=>{
        let t = Date.now();
        let o = Infinity;
        for (let l of C_current.values()){
            if (l === null) {
                continue;
            }
            let m = l + oe;
            if (m > t && m < o) {
                o = m;
            }
        }
        if (o === Infinity) {
            return;
        }
        return A.setTimeout(()=>z((l)=>l + 1), o - t);
    }, [
        tasks,
        A,
        C_current,
        x
    ]);
    if (!Nx()) {
        return null;
    }
    if (tasks.length === 0) {
        return null;
    }
    let O = {};
    if (Xo() && f?.teammates) {
        for (let t of Object.values(f.teammates)){
            if (t.color) {
                let o = ND[t.color];
                if (o) {
                    O[t.name] = o;
                }
            }
        }
    }
    let g = {};
    let j = new Set;
    if (Xo()) {
        for (let t of Object.values(d)){
            if (vp(t) && t.status === "running") {
                j.add(t.identity.agentName);
                j.add(t.identity.agentId);
                let o = t.progress?.recentActivities;
                let l = (o && UTn(o)) ?? t.progress?.lastActivity?.activityDescription;
                if (l) {
                    g[t.identity.agentName] = l;
                    g[t.identity.agentId] = l;
                }
            }
        }
    }
    let H = F(tasks, (t)=>t.status === "completed");
    let D = F(tasks, (t)=>t.status === "pending");
    let q = tasks.length - H - D;
    let B = new Set(tasks.filter((t)=>t.status !== "completed").map((t)=>t.id));
    let G = tasks.length > S;
    let M;
    let h;
    if (G) {
        let t = [];
        let o = [];
        for (let u of tasks.filter((T)=>T.status === "completed")){
            let T = C_current.get(u.id);
            if (typeof T === "number" && _ - T < oe) {
                t.push(u);
            } else {
                o.push(u);
            }
        }
        t.sort(W);
        o.sort(W);
        let l = tasks.filter((u)=>u.status === "in_progress").sort(W);
        let m = tasks.filter((u)=>u.status === "pending").sort((u, T)=>{
            let U = u.blockedBy.some((J)=>B.has(J));
            let ee = T.blockedBy.some((J)=>B.has(J));
            if (U !== ee) {
                if (U) {
                    return 1;
                }
                return -1;
            }
            return W(u, T);
        });
        let p = [
            ...t,
            ...l,
            ...m,
            ...o
        ];
        M = p.slice(0, S);
        h = p.slice(S);
    } else {
        M = [
            ...tasks
        ].sort(W);
        h = [];
    }
    let b = "";
    if (h.length > 0) {
        let t = [];
        let o = F(h, (p)=>p.status === "pending");
        let l = F(h, (p)=>p.status === "in_progress");
        let m = F(h, (p)=>p.status === "completed");
        if (l > 0) {
            t.push(`${l} in progress`);
        }
        if (o > 0) {
            t.push(`${o} pending`);
        }
        if (m > 0) {
            t.push(`${m} completed`);
        }
        b = ` \u2026 +${t.join(", ")}`;
    }
    let L = r(Y, {
        children: [
            M.map((task)=>e(de, {
                    task,
                    ownerColor: task.owner ? O[task.owner] : undefined,
                    openBlockers: task.blockedBy.filter((o)=>B.has(o)),
                    activity: task.owner ? g[task.owner] : undefined,
                    ownerActive: task.owner ? j.has(task.owner) : false,
                    columns
                }, task.id)),
            S > 0 && b && e(n, {
                dimColor: true,
                children: b
            })
        ]
    });
    if (isStandalone) {
        return r(s, {
            flexDirection: "column",
            marginTop: 1,
            marginLeft: 2,
            children: [
                e(s, {
                    children: r(n, {
                        dimColor: true,
                        children: [
                            e(n, {
                                bold: true,
                                children: tasks.length
                            }),
                            " tasks (",
                            e(n, {
                                bold: true,
                                children: H
                            }),
                            " done, ",
                            q > 0 && r(Y, {
                                children: [
                                    e(n, {
                                        bold: true,
                                        children: q
                                    }),
                                    " in progress, "
                                ]
                            }),
                            e(n, {
                                bold: true,
                                children: D
                            }),
                            " open)"
                        ]
                    })
                }),
                L
            ]
        });
    }
    return e(s, {
        flexDirection: "column",
        children: L
    });
}
function mYn(i) {
    switch(i){
        case "completed":
            return {
                icon: te.tick,
                color: "success"
            };
        case "in_progress":
            return {
                icon: te.squareSmallFilled,
                color: "claude"
            };
        case "pending":
            return {
                icon: te.squareSmall,
                color: undefined
            };
    }
}
function de(i) {
    let a = w(37);
    let { task, ownerColor, openBlockers, activity, ownerActive, columns } = i;
    let strikethrough = task.status === "completed";
    let bold = task.status === "in_progress";
    let C = openBlockers.length > 0;
    let S;
    if (a[0] !== task.status) {
        S = mYn(task.status);
        a[0] = task.status;
        a[1] = S;
    } else {
        S = a[1];
    }
    let { icon, color } = S;
    let O = bold && !C && activity;
    let g = columns >= 60 && task.owner && ownerActive;
    let j;
    if (a[2] !== g || a[3] !== task.owner) {
        j = g ? ae(` (@${task.owner})`) : 0;
        a[2] = g;
        a[3] = task.owner;
        a[4] = j;
    } else {
        j = a[4];
    }
    let H = j;
    let D = Math.max(15, columns - 15 - H);
    let q;
    if (a[5] !== D || a[6] !== task.subject) {
        q = pt(task.subject, D);
        a[5] = D;
        a[6] = task.subject;
        a[7] = q;
    } else {
        q = a[7];
    }
    let B = q;
    let G = Math.max(15, columns - 15);
    let M;
    if (a[8] !== activity || a[9] !== G) {
        M = activity ? pt(activity, G) : undefined;
        a[8] = activity;
        a[9] = G;
        a[10] = M;
    } else {
        M = a[10];
    }
    let h = M;
    let b;
    if (a[11] !== color || a[12] !== icon) {
        b = r(n, {
            color,
            children: [
                icon,
                " "
            ]
        });
        a[11] = color;
        a[12] = icon;
        a[13] = b;
    } else {
        b = a[13];
    }
    const dimColor = strikethrough || C;
    let t;
    if (a[14] !== B || a[15] !== strikethrough || a[16] !== bold || a[17] !== dimColor) {
        t = e(n, {
            bold,
            strikethrough,
            dimColor,
            children: B
        });
        a[14] = B;
        a[15] = strikethrough;
        a[16] = bold;
        a[17] = dimColor;
        a[18] = t;
    } else {
        t = a[18];
    }
    let o;
    if (a[19] !== ownerColor || a[20] !== g || a[21] !== task.owner) {
        o = g && r(n, {
            dimColor: true,
            children: [
                " (",
                ownerColor ? r(n, {
                    color: ownerColor,
                    children: [
                        "@",
                        task.owner
                    ]
                }) : `@${task.owner}`,
                ")"
            ]
        });
        a[19] = ownerColor;
        a[20] = g;
        a[21] = task.owner;
        a[22] = o;
    } else {
        o = a[22];
    }
    let l;
    if (a[23] !== C || a[24] !== openBlockers) {
        l = C && r(n, {
            dimColor: true,
            children: [
                " ",
                te.pointerSmall,
                " blocked by",
                " ",
                [
                    ...openBlockers
                ].sort(Be).map(Ie).join(", ")
            ]
        });
        a[23] = C;
        a[24] = openBlockers;
        a[25] = l;
    } else {
        l = a[25];
    }
    let m;
    if (a[26] !== b || a[27] !== t || a[28] !== o || a[29] !== l) {
        m = r(s, {
            children: [
                b,
                t,
                o,
                l
            ]
        });
        a[26] = b;
        a[27] = t;
        a[28] = o;
        a[29] = l;
        a[30] = m;
    } else {
        m = a[30];
    }
    let p;
    if (a[31] !== h || a[32] !== O) {
        p = O && h && e(s, {
            children: r(n, {
                dimColor: true,
                children: [
                    "  ",
                    h,
                    te.ellipsis
                ]
            })
        });
        a[31] = h;
        a[32] = O;
        a[33] = p;
    } else {
        p = a[33];
    }
    let u;
    if (a[34] !== m || a[35] !== p) {
        u = r(s, {
            flexDirection: "column",
            children: [
                m,
                p
            ]
        });
        a[34] = m;
        a[35] = p;
        a[36] = u;
    } else {
        u = a[36];
    }
    return u;
}
export { pYn, fYn, mYn };
