import { bo, kC, fy } from "/$bunfs/root/chunk-ctt36bn8.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { a, eT } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { vr, Mt } from "/$bunfs/root/chunk-7mawjt4q.js";
import { OF } from "/$bunfs/root/chunk-pp3y3t61.js";
import { fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { Woe, Nt, ap } from "/$bunfs/root/chunk-0ycjphb5.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { el } from "/$bunfs/root/chunk-2mjaqpws.js";
import { hr } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { jr, Ir, P, Z, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { QN } from "/$bunfs/root/chunk-fczwhgk3.js";
import { xi } from "/$bunfs/root/chunk-6y1cnk59.js";
import { jQe } from "/$bunfs/root/chunk-hk8pgjyj.js";
import { Fr } from "/$bunfs/root/chunk-972pd37y.js";
import { V } from "/$bunfs/root/chunk-zby5bms5.js";
import { Rfe } from "/$bunfs/root/chunk-yx09pmbw.js";
import { SD } from "/$bunfs/root/chunk-kasbfbhj.js";
import { G6t } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { pAe } from "/$bunfs/root/chunk-92psz72c.js";
import { G3n } from "/$bunfs/root/chunk-3k97mcap.js";
import { J1e, kLo, TLo, ALo, CLo, RLo, xLo, PLo, ILo, OLo, MLo, HLo, Q1e, Hcn, Dcn, DLo } from "/$bunfs/root/chunk-409xcjz9.js";
import { Aj } from "/$bunfs/root/chunk-nwc9gp5j.js";
import { dt } from "/$bunfs/root/chunk-xg9ned06.js";
import { Uu } from "/$bunfs/root/chunk-jpbk4xxw.js";
import { Zwe, zLo } from "/$bunfs/root/chunk-4n7np37s.js";
import { ut } from "/$bunfs/root/chunk-wy1471a2.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { YB } from "/$bunfs/root/chunk-d4n0kkf1.js";
import { xAs, Wct, Den, Len } from "/$bunfs/root/chunk-wtrd0hw3.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
const mDr = {
    memory: undefined,
    load: undefined,
    disk: undefined
};
const wt = ze({
    value: false
}, (i)=>{
    i.value = false;
});
function ZNt(i) {}
N();
function gDr(i, t, o) {
    if (Ie() !== "firstParty" || !Woe() || !pAe()) {
        return;
    }
    let u = Aj.of(i);
    return {
        current: ()=>u.peek(t, o),
        settled: u.read(t, o)
    };
}
function z(webSetupStatus) {
    switch(webSetupStatus){
        case "connected":
            return [
                {
                    label: "Cloud sessions",
                    value: "GitHub connected"
                }
            ];
        case "not_connected":
            return [
                {
                    label: "Cloud sessions",
                    value: "Not set up · /web-setup to connect GitHub"
                }
            ];
        case "unknown":
        case undefined:
            return [];
    }
}
function Ue(D) {
    return D.mainLoopModel;
}
function Ge(T) {
    return T.mcp;
}
function He(H) {
    return H.toolPermissionContext.mode;
}
function Be(B) {
    return B.id;
}
function We(Ve) {
    return bo(Ve).cwd;
}
function Ke(Xe) {
    return Xe.length > 0;
}
function Ye(qe, W) {
    return [
        W > 0 && r(Uu.Row, {
            children: [
                e(Y, {
                    children: " "
                }),
                e(Y, {
                    children: ""
                })
            ]
        }, `gap-${W}`),
        ...qe.map(({ label, value }, Qe)=>r(Uu.Row, {
                children: [
                    e(Y, {
                        children: label !== undefined ? `${label}:` : ""
                    }),
                    e(j, {
                        value
                    })
                ]
            }, `${W}-${Qe}`))
    ];
}
function Fe(C, f) {
    return r(s, {
        flexDirection: "row",
        gap: 1,
        paddingX: 1,
        children: [
            e(dt, {
                status: "warning"
            }),
            typeof C === "string" ? e(n, {
                wrap: "wrap",
                children: C
            }) : C
        ]
    }, f);
}
const hDr = " (details in the --debug log)";
function O4n({ sessionId, cwd, accountStatus, machineStatus, webSetupStatus }) {
    let a_CLAUDE_CODE_TMUX_SESSION = a.CLAUDE_CODE_TMUX_SESSION;
    let l = Zwe();
    let C = zLo();
    let f = vr()?.sessionId;
    let value = SD(sessionId) ?? e(n, {
        dimColor: true,
        children: "/rename to add a name"
    });
    let h = fy();
    let c = "";
    if (h.length > 0) {
        let v = h.map((M)=>{
            if (M.kind === "plugin") {
                return `plugin:${M.name}@${M.marketplace}`;
            }
            return `server:${M.name}`;
        }).join(", ");
        let p = Ie() !== "firstParty" ? "not available on third-party providers" : !QN() ? "not currently available" : jQe(fe("policySettings")) ? "blocked by org policy" : undefined;
        c = p ? `Configured but not active (${p}): ${v}` : `Listening for messages from ${v}`;
    }
    return [
        {
            label: "Version",
            value: `${{
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.VERSION}${YB()}`
        },
        ...[],
        {
            label: "Session name",
            value
        },
        {
            label: f === sessionId ? "Cloud session ID" : "Session ID",
            value: sessionId
        },
        ...f !== undefined && f !== sessionId ? [
            {
                label: "Cloud session ID",
                value: f
            }
        ] : [],
        {
            label: "Session kind",
            value: !Nt() ? "interactive" : ap() ? "background job · unattended" : "background job · attached"
        },
        ...a_CLAUDE_CODE_TMUX_SESSION ? [
            {
                label: "tmux session",
                value: a_CLAUDE_CODE_TMUX_SESSION
            }
        ] : [],
        ...c ? [
            {
                label: "Channels",
                value: c
            }
        ] : [],
        ...xi() && eT.CLAUDE_CODE_MESSAGING_SOCKET ? [
            {
                label: "Peer address",
                value: `uds:${eT.CLAUDE_CODE_MESSAGING_SOCKET}`
            }
        ] : [],
        ...xi() && !eT.CLAUDE_CODE_MESSAGING_SOCKET && G3n() !== undefined ? [
            {
                label: "Peer address",
                value: `unavailable \u2014 ${G3n()}${hDr}`
            }
        ] : [],
        ...kC() ? [
            {
                label: "Memory",
                value: G6t() ? "Paused for this session · /pause-memory to resume" : "Paused for this session · see /account-memory"
            }
        ] : [],
        ...[],
        {
            label: "cwd",
            value: cwd
        },
        ...Hcn(accountStatus),
        ...z(webSetupStatus),
        ...pe(),
        ...Dcn()
    ];
}
function pe() {
    let i = OF();
    if (i.length === 0) {
        return [];
    }
    return [
        {
            label: "Organization configuration",
            value: Len(i).map((t)=>{
                if (Den(t)) {
                    return xAs(t);
                }
                return t;
            })
        },
        ...i.includes("hipaa") ? [
            {
                value: e(n, {
                    dimColor: true,
                    children: Wct
                })
            }
        ] : []
    ];
}
function M4n({ mainLoopModel, mcp, theme, ideInstallationStatus, permissionMode }) {
    return [
        {
            label: "Model",
            value: DLo(mainLoopModel)
        },
        ...ALo(),
        ...Mt() ? [] : [
            ...CLo(mcp.clients, ideInstallationStatus, theme),
            ...RLo(mcp.clients, theme),
            ...TLo(),
            ...kLo()
        ],
        ...PLo(),
        ...ILo(permissionMode)
    ];
}
async function yDr(i, t, o) {
    return (await Promise.all([
        OLo(),
        HLo(t),
        MLo(t),
        Mt() ? [] : xLo(i, t, o)
    ])).flat();
}
function j(i) {
    let o = w(8);
    let { value } = i;
    if (Array.isArray(value)) {
        let u;
        if (o[0] !== value) {
            let d;
            if (o[2] !== value.length) {
                d = (m, l)=>r(n, {
                        children: [
                            m,
                            l < value.length - 1 ? "," : ""
                        ]
                    }, l);
                o[2] = value.length;
                o[3] = d;
            } else {
                d = o[3];
            }
            u = value.map(d);
            o[0] = value;
            o[1] = u;
        } else {
            u = o[1];
        }
        let d;
        if (o[4] !== u) {
            d = e(s, {
                flexWrap: "wrap",
                columnGap: 1,
                flexShrink: 99,
                children: u
            });
            o[4] = u;
            o[5] = d;
        } else {
            d = o[5];
        }
        return d;
    }
    if (typeof value === "string") {
        let u;
        if (o[6] !== value) {
            u = e(n, {
                children: value
            });
            o[6] = value;
            o[7] = u;
        } else {
            u = o[7];
        }
        return u;
    }
    return value;
}
function H4n(i) {
    let l = w(26);
    let { credentials, ideInstallationStatus, diagnosticsPromise, getWebSetupRead, getMachineStatusRead } = i;
    let C;
    if (l[0] !== credentials) {
        C = ()=>Q1e(credentials);
        l[0] = credentials;
        l[1] = C;
    } else {
        C = l[1];
    }
    let [f] = y(C);
    let E;
    if (l[2] !== getMachineStatusRead) {
        E = ()=>getMachineStatusRead();
        l[2] = getMachineStatusRead;
        l[3] = E;
    } else {
        E = l[3];
    }
    let [g] = y(E);
    let h;
    if (l[4] !== getWebSetupRead) {
        h = ()=>getWebSetupRead();
        l[4] = getWebSetupRead;
        l[5] = h;
    } else {
        h = l[5];
    }
    let [c] = y(h);
    let v;
    if (l[6] !== c) {
        v = ()=>c?.current();
        l[6] = c;
        l[7] = v;
    } else {
        v = l[7];
    }
    let [p, M] = y(v);
    let x;
    let A;
    if (l[8] !== c) {
        x = ()=>{
            let L = true;
            c?.settled.then(()=>{
                if (L) {
                    M(c.current());
                }
            });
            return ()=>{
                L = false;
            };
        };
        A = [
            c
        ];
        l[8] = c;
        l[9] = x;
        l[10] = A;
    } else {
        x = l[9];
        A = l[10];
    }
    P(x, A);
    let flexGrow = el() ? 1 : undefined;
    let R;
    if (l[11] !== f || l[12] !== ideInstallationStatus || l[13] !== g || l[14] !== p) {
        R = e(jr, {
            fallback: null,
            children: e(U, {
                ideInstallationStatus,
                accountStatusRead: f,
                machineStatusRead: g,
                webSetupStatus: p
            })
        });
        l[11] = f;
        l[12] = ideInstallationStatus;
        l[13] = g;
        l[14] = p;
        l[15] = R;
    } else {
        R = l[15];
    }
    let D;
    if (l[16] !== diagnosticsPromise) {
        D = e(jr, {
            fallback: null,
            children: e(G, {
                promise: diagnosticsPromise
            })
        });
        l[16] = diagnosticsPromise;
        l[17] = D;
    } else {
        D = l[17];
    }
    let T;
    if (l[18] !== flexGrow || l[19] !== R || l[20] !== D) {
        T = r(s, {
            flexDirection: "column",
            gap: 1,
            flexGrow,
            children: [
                R,
                D
            ]
        });
        l[18] = flexGrow;
        l[19] = R;
        l[20] = D;
        l[21] = T;
    } else {
        T = l[21];
    }
    let H;
    if (l[22] === S) {
        H = e(n, {
            dimColor: true,
            children: e(ut, {
                action: "confirm:no",
                context: "Settings",
                fallback: "Esc",
                description: "cancel"
            })
        });
        l[22] = H;
    } else {
        H = l[22];
    }
    let B;
    if (l[23] !== flexGrow || l[24] !== T) {
        B = r(s, {
            flexDirection: "column",
            gap: 1,
            flexGrow,
            children: [
                T,
                H
            ]
        });
        l[23] = flexGrow;
        l[24] = T;
        l[25] = B;
    } else {
        B = l[25];
    }
    return B;
}
function U(i) {
    let p = w(17);
    let { ideInstallationStatus, accountStatusRead, machineStatusRead, webSetupStatus } = i;
    let accountStatus = accountStatusRead === undefined ? undefined : Ir(accountStatusRead);
    let machineStatus = machineStatusRead === undefined ? undefined : Ir(machineStatusRead);
    let C = V(Ue);
    let mainLoopModel = Rfe() ?? C;
    let mcp = V(Ge);
    let permissionMode = V(He);
    let [h] = hr();
    let sessionId = Fr(Be);
    let cwd = Fr(We);
    let M;
    if (p[0] !== accountStatus || p[1] !== cwd || p[2] !== ideInstallationStatus || p[3] !== machineStatus || p[4] !== mainLoopModel || p[5] !== mcp || p[6] !== permissionMode || p[7] !== sessionId || p[8] !== h || p[9] !== webSetupStatus) {
        M = J1e([
            O4n({
                sessionId,
                cwd,
                accountStatus,
                machineStatus,
                webSetupStatus
            }),
            M4n({
                mainLoopModel,
                mcp,
                theme: h,
                ideInstallationStatus,
                permissionMode
            })
        ]);
        p[0] = accountStatus;
        p[1] = cwd;
        p[2] = ideInstallationStatus;
        p[3] = machineStatus;
        p[4] = mainLoopModel;
        p[5] = mcp;
        p[6] = permissionMode;
        p[7] = sessionId;
        p[8] = h;
        p[9] = webSetupStatus;
        p[10] = M;
    } else {
        M = p[10];
    }
    let x = M;
    let A;
    if (p[11] === S) {
        A = Mt() && r(n, {
            dimColor: true,
            children: [
                "Model and cwd are the",
                " ",
                vr()?.sessionId ? "cloud" : "remote",
                " session's; the other rows describe this terminal. /mcp asks the session too."
            ]
        });
        p[11] = A;
    } else {
        A = p[11];
    }
    let columns;
    if (p[12] === S) {
        columns = [
            {
                bold: true
            },
            {
                width: "fill"
            }
        ];
        p[12] = columns;
    } else {
        columns = p[12];
    }
    let b;
    if (p[13] !== x) {
        b = x.filter(Ke).flatMap(Ye);
        p[13] = x;
        p[14] = b;
    } else {
        b = p[14];
    }
    let R;
    if (p[15] !== b) {
        R = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                A,
                e(Uu, {
                    columns,
                    children: b
                })
            ]
        });
        p[15] = b;
        p[16] = R;
    } else {
        R = p[16];
    }
    return R;
}
function G(i) {
    let u = w(5);
    let { promise } = i;
    let o = Ir(promise);
    if (o.length === 0) {
        return null;
    }
    let d;
    if (u[0] === S) {
        d = e(n, {
            bold: true,
            children: "System diagnostics"
        });
        u[0] = d;
    } else {
        d = u[0];
    }
    let m;
    if (u[1] !== o) {
        m = o.map(Fe);
        u[1] = o;
        u[2] = m;
    } else {
        m = u[2];
    }
    let l;
    if (u[3] !== m) {
        l = r(s, {
            flexDirection: "column",
            paddingBottom: 1,
            children: [
                d,
                m
            ]
        });
        u[3] = m;
        u[4] = l;
    } else {
        l = u[4];
    }
    return l;
}
export { mDr, ZNt, gDr, hDr, O4n, M4n, yDr, H4n };
