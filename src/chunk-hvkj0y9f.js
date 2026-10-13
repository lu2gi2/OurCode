import { Rn } from "/$bunfs/root/chunk-bd805sh6.js";
import { cc } from "/$bunfs/root/chunk-tn496ms6.js";
import { jC, _vt, ane, Ear, nTe, qp, D_ } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Z, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n, Wt } from "/$bunfs/root/chunk-8524cxt8.js";
import { dt } from "/$bunfs/root/chunk-xg9ned06.js";
import { au } from "/$bunfs/root/chunk-wmkmpdb5.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function L(l) {
    let a = w(10);
    let { title, status, detail } = l;
    let g;
    if (a[0] !== title) {
        g = e(n, {
            bold: true,
            children: title
        });
        a[0] = title;
        a[1] = g;
    } else {
        g = a[1];
    }
    let i;
    if (a[2] !== status) {
        i = e(dt, {
            status
        });
        a[2] = status;
        a[3] = i;
    } else {
        i = a[3];
    }
    let u;
    if (a[4] !== detail) {
        u = detail ? r(n, {
            dimColor: true,
            children: [
                " · ",
                detail
            ]
        }) : null;
        a[4] = detail;
        a[5] = u;
    } else {
        u = a[5];
    }
    let m;
    if (a[6] !== g || a[7] !== i || a[8] !== u) {
        m = r(n, {
            children: [
                g,
                " ",
                i,
                u
            ]
        });
        a[6] = g;
        a[7] = i;
        a[8] = u;
        a[9] = m;
    } else {
        m = a[9];
    }
    return m;
}
function Pr(jr) {
    return jr.file;
}
function Sr(F) {
    return !nTe(F.scope);
}
function yr(k) {
    return {
        scope: k.scope,
        servers: k.config.servers,
        displayServers: qp(k.scope, {
            expandVars: false
        }).servers
    };
}
function isProjectServerApproved(p) {
    return ane(p) === "approved";
}
function Wr({ config }) {
    return E(config.errors, "fatal").length > 0;
}
function xr({ config }) {
    return E(config.errors, "warning").length > 0;
}
function Fr({ scope, config }) {
    return e(O, {
        scope,
        parsingErrors: E(config.errors, "fatal"),
        warnings: E(config.errors, "warning")
    }, scope);
}
function $r(V, j) {
    return r(au.Group, {
        children: [
            e(au.Node, {
                color: "warning",
                children: Rn(V.message)
            }),
            V.suggestion && e(au.Node, {
                dimColor: true,
                children: Rn(V.suggestion)
            })
        ]
    }, `conflict-${j}`);
}
function O(l) {
    let i = w(40);
    let { scope, parsingErrors, warnings } = l;
    let a = parsingErrors.length > 0;
    let g = warnings.length > 0;
    if (!a && !g) {
        return null;
    }
    let u;
    if (i[0] !== scope) {
        u = jC(scope);
        i[0] = scope;
        i[1] = u;
    } else {
        u = i[1];
    }
    let m = u;
    let h;
    if (i[2] !== parsingErrors || i[3] !== warnings) {
        h = new Set([
            ...parsingErrors,
            ...warnings
        ].map(Pr).filter(Boolean));
        i[2] = parsingErrors;
        i[3] = warnings;
        i[4] = h;
    } else {
        h = i[4];
    }
    let F = h;
    let k;
    if (i[5] !== m || i[6] !== F) {
        k = F.size === 1 ? [
            ...F
        ][0] : m;
        i[5] = m;
        i[6] = F;
        i[7] = k;
    } else {
        k = i[7];
    }
    let p = k;
    let T;
    if (i[8] !== a || i[9] !== g) {
        T = (a || g) && r(n, {
            color: a ? "error" : "warning",
            children: [
                "[",
                a ? "Failed to parse" : "Contains warnings",
                "]",
                " "
            ]
        });
        i[8] = a;
        i[9] = g;
        i[10] = T;
    } else {
        T = i[10];
    }
    let A;
    if (i[11] !== scope) {
        A = _vt(scope);
        i[11] = scope;
        i[12] = A;
    } else {
        A = i[12];
    }
    let W;
    if (i[13] !== A) {
        W = e(n, {
            children: A
        });
        i[13] = A;
        i[14] = W;
    } else {
        W = i[14];
    }
    let x;
    if (i[15] !== T || i[16] !== W) {
        x = r(s, {
            children: [
                T,
                W
            ]
        });
        i[15] = T;
        i[16] = W;
        i[17] = x;
    } else {
        x = i[17];
    }
    let V;
    if (i[18] === S) {
        V = e(n, {
            dimColor: true,
            children: "Location: "
        });
        i[18] = V;
    } else {
        V = i[18];
    }
    let j;
    if (i[19] !== p) {
        j = r(s, {
            children: [
                V,
                e(n, {
                    dimColor: true,
                    children: p
                })
            ]
        });
        i[19] = p;
        i[20] = j;
    } else {
        j = i[20];
    }
    let G;
    if (i[21] !== p || i[22] !== parsingErrors || i[23] !== scope) {
        let y;
        if (i[25] !== p || i[26] !== scope) {
            y = (d, kr)=>{
                let sr = d.mcpErrorMetadata?.serverName;
                let Tr = d.file && d.file !== p;
                return r(au.Group, {
                    children: [
                        e(au.Node, {
                            children: r(n, {
                                children: [
                                    e(n, {
                                        color: "error",
                                        children: "[Error]"
                                    }),
                                    r(n, {
                                        dimColor: true,
                                        children: [
                                            " ",
                                            Tr && `(${d.file}) `,
                                            sr && `[${Rn(sr)}] `,
                                            d.path && d.path !== "" ? `${Rn(d.path)}: ` : "",
                                            Rn(d.message)
                                        ]
                                    })
                                ]
                            })
                        }),
                        scope === "enterprise" && d.suggestion && e(au.Node, {
                            dimColor: true,
                            children: Rn(d.suggestion)
                        })
                    ]
                }, `error-${kr}`);
            };
            i[25] = p;
            i[26] = scope;
            i[27] = y;
        } else {
            y = i[27];
        }
        G = parsingErrors.map(y);
        i[21] = p;
        i[22] = parsingErrors;
        i[23] = scope;
        i[24] = G;
    } else {
        G = i[24];
    }
    let y;
    if (i[28] !== p || i[29] !== warnings) {
        let R;
        if (i[31] !== p) {
            R = (P, Ar)=>{
                let nr = P.mcpErrorMetadata?.serverName;
                let Vr = P.file && P.file !== p;
                return e(au.Node, {
                    children: r(n, {
                        children: [
                            e(n, {
                                color: "warning",
                                children: "[Warning]"
                            }),
                            r(n, {
                                dimColor: true,
                                children: [
                                    " ",
                                    Vr && `(${P.file}) `,
                                    nr && `[${Rn(nr)}] `,
                                    P.path && P.path !== "" ? `${Rn(P.path)}: ` : "",
                                    Rn(P.message)
                                ]
                            })
                        ]
                    })
                }, `warning-${Ar}`);
            };
            i[31] = p;
            i[32] = R;
        } else {
            R = i[32];
        }
        y = warnings.map(R);
        i[28] = p;
        i[29] = warnings;
        i[30] = y;
    } else {
        y = i[30];
    }
    let R;
    if (i[33] !== G || i[34] !== y) {
        R = e(s, {
            marginLeft: 1,
            children: r(au, {
                variant: "tree",
                children: [
                    G,
                    y
                ]
            })
        });
        i[33] = G;
        i[34] = y;
        i[35] = R;
    } else {
        R = i[35];
    }
    let ir;
    if (i[36] !== R || i[37] !== x || i[38] !== j) {
        ir = r(s, {
            flexDirection: "column",
            marginTop: 1,
            children: [
                x,
                j,
                R
            ]
        });
        i[36] = R;
        i[37] = x;
        i[38] = j;
        i[39] = ir;
    } else {
        ir = i[39];
    }
    return ir;
}
function Mft() {
    let l = w(3);
    let o;
    if (l[0] === S) {
        let c = [
            {
                scope: "user",
                config: qp("user")
            },
            {
                scope: "project",
                config: qp("project")
            },
            {
                scope: "local",
                config: qp("local")
            },
            {
                scope: "managed",
                config: qp("managed")
            },
            {
                scope: "enterprise",
                config: qp("enterprise")
            }
        ];
        let conflicts_1 = Ear(c.filter(Sr).map(yr));
        o = {
            scopes: or(c, {
                enterpriseActive: D_(),
                mcpLocked: cc("mcp"),
                isProjectServerApproved
            }),
            conflicts: conflicts_1
        };
        l[0] = o;
    } else {
        o = l[0];
    }
    let { scopes, conflicts } = o;
    let i = scopes.some(Wr);
    let u = conflicts.length > 0 || scopes.some(xr);
    if (!i && !u) {
        return null;
    }
    let m;
    if (l[1] === S) {
        m = e(L, {
            title: "MCP config diagnostics",
            status: i ? "error" : "warning"
        });
        l[1] = m;
    } else {
        m = l[1];
    }
    let h;
    if (l[2] === S) {
        h = r(s, {
            flexDirection: "column",
            marginTop: 1,
            marginBottom: 1,
            children: [
                m,
                e(s, {
                    marginTop: 1,
                    children: r(n, {
                        dimColor: true,
                        children: [
                            "For help configuring MCP servers, see:",
                            " ",
                            e(Wt, {
                                url: "https://code.claude.com/docs/en/mcp",
                                children: "https://code.claude.com/docs/en/mcp"
                            })
                        ]
                    })
                }),
                scopes.map(Fr),
                conflicts.length > 0 && r(s, {
                    flexDirection: "column",
                    marginTop: 1,
                    children: [
                        e(n, {
                            color: "warning",
                            children: "[Conflicting scopes]"
                        }),
                        e(au, {
                            variant: "tree",
                            children: conflicts.map($r)
                        })
                    ]
                })
            ]
        });
        l[2] = h;
    } else {
        h = l[2];
    }
    return h;
}
function E(errors, o) {
    return errors.filter((c)=>c.mcpErrorMetadata?.severity === o);
}
function or(l, o) {
    let c = (t, serverName)=>{
        if (!(serverName in t.config.servers)) {
            return false;
        }
        if (t.scope === "project") {
            return o.isProjectServerApproved(serverName);
        }
        return true;
    };
    return l.map((t, a)=>{
        let g = !nTe(t.scope) && (o.enterpriseActive || o.mcpLocked);
        let i = l.slice(a + 1);
        let u = (serverName)=>i.some((h)=>c(h, serverName));
        return {
            ...t,
            config: {
                ...t.config,
                errors: t.config.errors.filter((m)=>{
                    if (m.mcpErrorMetadata?.severity !== "warning") {
                        return true;
                    }
                    if (g) {
                        return false;
                    }
                    let serverName = m.mcpErrorMetadata.serverName;
                    return !serverName || !u(serverName);
                })
            }
        };
    });
}
export { Mft };
