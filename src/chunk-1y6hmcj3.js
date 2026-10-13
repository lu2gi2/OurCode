import { v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Bn, _m } from "/$bunfs/root/chunk-xgw72tt1.js";
import { I9 } from "/$bunfs/root/chunk-dn762950.js";
import { we } from "/$bunfs/root/chunk-ctt36bn8.js";
import { s6 } from "/$bunfs/root/chunk-etbngzss.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Pe, Vb } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { Kue, tu } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { ns } from "/$bunfs/root/chunk-2mjaqpws.js";
import { on, s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { Ze } from "/$bunfs/root/chunk-z47a2vff.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { Od } from "/$bunfs/root/chunk-2d9a83dh.js";
import { ae, pt, nw, Urn } from "/$bunfs/root/chunk-223dyewd.js";
import { iDt } from "/$bunfs/root/chunk-3fj60qgx.js";
import { uAe } from "/$bunfs/root/chunk-yq147k4z.js";
import { le, DJ, P, Z, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Qc } from "/$bunfs/root/chunk-p2nmcfaz.js";
import { Yo } from "/$bunfs/root/chunk-yphmh99q.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { uIn, uqe } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { yy, nb } from "/$bunfs/root/chunk-dx2w0vga.js";
import { tE } from "/$bunfs/root/chunk-972pd37y.js";
import { Pke, uJ, eTn, zCn, S2, wf, Sne, aTe } from "/$bunfs/root/chunk-kasbfbhj.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { tv } from "/$bunfs/root/chunk-sfjcyk7w.js";
import { Sr } from "/$bunfs/root/chunk-m52bdn6c.js";
import { aie, lie } from "/$bunfs/root/chunk-3gafw66q.js";
import { die } from "/$bunfs/root/chunk-p5ctz61b.js";
import { Ve } from "/$bunfs/root/chunk-wff73y2a.js";
import { mo } from "/$bunfs/root/chunk-4wvwjbc4.js";
import { Hr } from "/$bunfs/root/chunk-wmf7fpt3.js";
import { Xw, ts } from "/$bunfs/root/chunk-d0t2hmxp.js";
import { ut } from "/$bunfs/root/chunk-wy1471a2.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { so } from "/$bunfs/root/chunk-dyspjvns.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
import { basename, sep, posix, win32 } from "path";
import { lstat } from "fs/promises";
N();
N();
function Ct(o) {
    let f = w(36);
    let { log, onExit, onSelect } = o;
    let [p, h] = y(null);
    let { storageV5 } = Pe();
    let F;
    let k;
    if (f[0] !== log || f[1] !== storageV5) {
        F = ()=>{
            h(null);
            if (Sne(log)) {
                aTe(log, {
                    storageV5
                }).then(h);
            }
        };
        k = [
            log,
            storageV5
        ];
        f[0] = log;
        f[1] = storageV5;
        f[2] = F;
        f[3] = k;
    } else {
        F = f[2];
        k = f[3];
    }
    P(F, k);
    let T = Sne(log) && p === null;
    let g = p ?? log;
    let z;
    if (f[4] !== g.messages) {
        z = Pke(uJ(eTn(g.messages)), {
            site: "preview"
        });
        f[4] = g.messages;
        f[5] = z;
    } else {
        z = f[5];
    }
    let messages = z;
    let Qe;
    if (f[6] !== g) {
        Qe = wf(g) || "";
        f[6] = g;
        f[7] = Qe;
    } else {
        Qe = f[7];
    }
    let conversationId = Qe;
    let oe;
    if (f[8] === S) {
        oe = tv();
        f[8] = oe;
    } else {
        oe = f[8];
    }
    let tools = oe;
    let B;
    if (f[9] === S) {
        B = {
            context: "Confirmation"
        };
        f[9] = B;
    } else {
        B = f[9];
    }
    Ze("confirm:no", onExit, B);
    let De;
    if (f[10] !== p || f[11] !== log || f[12] !== onSelect) {
        De = ()=>{
            onSelect(p ?? log);
        };
        f[10] = p;
        f[11] = log;
        f[12] = onSelect;
        f[13] = De;
    } else {
        De = f[13];
    }
    let D = De;
    let re;
    if (f[14] === S) {
        re = {
            context: "Confirmation"
        };
        f[14] = re;
    } else {
        re = f[14];
    }
    Ze("confirm:yes", D, re);
    if (T) {
        let M;
        if (f[15] === S) {
            M = e(Hr, {
                message: "Loading session…"
            });
            f[15] = M;
        } else {
            M = f[15];
        }
        let K;
        if (f[16] === S) {
            K = r(s, {
                flexDirection: "column",
                padding: 1,
                children: [
                    M,
                    e(n, {
                        dimColor: true,
                        children: e(be, {
                            children: e(ut, {
                                action: "confirm:no",
                                context: "Confirmation",
                                fallback: "Esc",
                                description: "cancel"
                            })
                        })
                    })
                ]
            });
            f[16] = K;
        } else {
            K = f[16];
        }
        return K;
    }
    let M;
    if (f[17] === S) {
        M = e(aie, {
            latchAnnouncementSlot: false
        });
        f[17] = M;
    } else {
        M = f[17];
    }
    let source;
    if (f[18] !== conversationId || f[19] !== messages) {
        source = {
            kind: "static",
            messages,
            conversationId
        };
        f[18] = conversationId;
        f[19] = messages;
        f[20] = source;
    } else {
        source = f[20];
    }
    let commands;
    if (f[21] === S) {
        commands = [];
        f[21] = commands;
    } else {
        commands = f[21];
    }
    let se;
    if (f[22] !== source) {
        se = e(lie, {
            source,
            tools,
            commands,
            screen: "transcript",
            history: "all"
        });
        f[22] = source;
        f[23] = se;
    } else {
        se = f[23];
    }
    let A;
    if (f[24] !== g.modified) {
        A = nw(g.modified);
        f[24] = g.modified;
        f[25] = A;
    } else {
        A = f[25];
    }
    const ye = g.gitBranch ? ` \xB7 ${g.gitBranch}` : "";
    let W;
    if (f[26] !== g.messageCount || f[27] !== A || f[28] !== ye) {
        W = r(n, {
            children: [
                A,
                " ·",
                " ",
                g.messageCount,
                " messages",
                ye
            ]
        });
        f[26] = g.messageCount;
        f[27] = A;
        f[28] = ye;
        f[29] = W;
    } else {
        W = f[29];
    }
    let Se;
    if (f[30] === S) {
        Se = e(n, {
            dimColor: true,
            children: r(be, {
                children: [
                    e(G, {
                        chord: "enter",
                        action: "resume"
                    }),
                    e(ut, {
                        action: "confirm:no",
                        context: "Confirmation",
                        fallback: "Esc",
                        description: "cancel"
                    })
                ]
            })
        });
        f[30] = Se;
    } else {
        Se = f[30];
    }
    let j;
    if (f[31] !== W) {
        j = r(s, {
            flexShrink: 0,
            flexDirection: "column",
            borderTopDimColor: true,
            borderBottom: false,
            borderLeft: false,
            borderRight: false,
            borderStyle: "single",
            paddingLeft: 2,
            children: [
                W,
                Se
            ]
        });
        f[31] = W;
        f[32] = j;
    } else {
        j = f[32];
    }
    let _e;
    if (f[33] !== se || f[34] !== j) {
        _e = r(s, {
            flexDirection: "column",
            children: [
                M,
                se,
                j
            ]
        });
        f[33] = se;
        f[34] = j;
        f[35] = _e;
    } else {
        _e = f[35];
    }
    return _e;
}
N();
function uo(kt) {
    if (kt) {
        return "▼ ";
    }
    return "▶ ";
}
function po(Cn) {
    return "  ▸ ";
}
function Nt(o) {
    let D = w(49);
    let { nodes, onSelect, onCancel, onFocus, focusNodeId, visibleOptionCount, layout, isDisabled, hidePromptWhileDisabled, hideIndexes, isNodeExpanded, onExpand, onCollapse, getParentPrefix, getChildPrefix, onUpFromFirstItem } = o;
    let layout_1 = layout === undefined ? "expanded" : layout;
    let isDisabled_1 = isDisabled === undefined ? false : isDisabled;
    let hideIndexes_1 = hideIndexes === undefined ? false : hideIndexes;
    let re;
    if (D[0] === S) {
        re = new Set;
        D[0] = re;
    } else {
        re = D[0];
    }
    let [M, K] = y(re);
    let U = R(false);
    let se = R(null);
    let A;
    if (D[1] !== M || D[2] !== isNodeExpanded) {
        A = (ye)=>{
            if (isNodeExpanded) {
                return isNodeExpanded(ye);
            }
            return M.has(ye);
        };
        D[1] = M;
        D[2] = isNodeExpanded;
        D[3] = A;
    } else {
        A = D[3];
    }
    let W = A;
    let Se;
    if (D[4] !== W || D[5] !== nodes) {
        Se = [];
        function Fe(node, depth, parentId) {
            let hasChildren = !!node.children && node.children.length > 0;
            let isExpanded = W(node.id);
            Se.push({
                node,
                depth,
                isExpanded,
                hasChildren,
                parentId
            });
            if (hasChildren && isExpanded && node.children) {
                for (const _t of node.children){
                    Fe(_t, depth + 1, node.id);
                }
            }
        }
        for (const ct of nodes){
            Fe(ct, 0);
        }
        D[4] = W;
        D[5] = nodes;
        D[6] = Se;
    } else {
        Se = D[6];
    }
    let V = Se;
    let X = uo;
    let ze = po;
    let te = getParentPrefix ?? X;
    let Xe = getChildPrefix ?? ze;
    let ft;
    if (D[7] !== Xe || D[8] !== te) {
        ft = (ie)=>{
            let Re = "";
            if (ie.hasChildren) {
                Re = te(ie.isExpanded);
            } else if (ie.depth > 0) {
                Re = Xe(ie.depth);
            }
            return Re + ie.node.label;
        };
        D[7] = Xe;
        D[8] = te;
        D[9] = ft;
    } else {
        ft = D[9];
    }
    let Me = ft;
    let mt;
    if (D[10] !== Me || D[11] !== V) {
        mt = V.map((Y)=>({
                label: Me(Y),
                description: Y.node.description,
                dimDescription: Y.node.dimDescription ?? true,
                value: Y.node.id
            }));
        D[10] = Me;
        D[11] = V;
        D[12] = mt;
    } else {
        mt = D[12];
    }
    let options = mt;
    let C;
    if (D[13] !== V) {
        let _ = new Map;
        C = (V.forEach((Je)=>_.set(Je.node.id, Je.node)), _);
        D[13] = V;
        D[14] = C;
    } else {
        C = D[14];
    }
    let Q = C;
    let de;
    if (D[15] !== V) {
        de = (et)=>V.find((Ft)=>Ft.node.id === et);
        D[15] = V;
        D[16] = de;
    } else {
        de = D[16];
    }
    let ce = de;
    let ht;
    if (D[17] !== ce || D[18] !== onCollapse || D[19] !== onExpand) {
        ht = (J, Ce)=>{
            let q = ce(J);
            if (!q || !q.hasChildren) {
                return;
            }
            if (Ce) {
                if (onExpand) {
                    onExpand(J);
                } else {
                    K((gt)=>new Set(gt).add(J));
                }
            } else if (onCollapse) {
                onCollapse(J);
            } else {
                K((Te)=>{
                    let Oe = new Set(Te);
                    Oe.delete(J);
                    return Oe;
                });
            }
        };
        D[17] = ce;
        D[18] = onCollapse;
        D[19] = onExpand;
        D[20] = ht;
    } else {
        ht = D[20];
    }
    let ue = ht;
    let tt;
    if (D[21] !== ce || D[22] !== focusNodeId || D[23] !== isDisabled_1 || D[24] !== Q || D[25] !== onFocus || D[26] !== ue) {
        tt = (pe)=>{
            if (!focusNodeId || isDisabled_1) {
                return;
            }
            let H = ce(focusNodeId);
            if (!H) {
                return;
            }
            if (pe.key === "right" && H.hasChildren) {
                pe.preventDefault();
                ue(focusNodeId, true);
            } else if (pe.key === "left") {
                if (H.hasChildren && H.isExpanded) {
                    pe.preventDefault();
                    ue(focusNodeId, false);
                } else if (H.parentId !== undefined) {
                    pe.preventDefault();
                    U.current = true;
                    ue(H.parentId, false);
                    if (onFocus) {
                        let nt = Q.get(H.parentId);
                        if (nt) {
                            onFocus(nt);
                        }
                    }
                }
            }
        };
        D[21] = ce;
        D[22] = focusNodeId;
        D[23] = isDisabled_1;
        D[24] = Q;
        D[25] = onFocus;
        D[26] = ue;
        D[27] = tt;
    } else {
        tt = D[27];
    }
    let onKeyDown = tt;
    let Be;
    if (D[28] !== Q || D[29] !== onSelect) {
        Be = (xt)=>{
            let Ee = Q.get(xt);
            if (!Ee) {
                return;
            }
            onSelect(Ee);
        };
        D[28] = Q;
        D[29] = onSelect;
        D[30] = Be;
    } else {
        Be = D[30];
    }
    let onChange = Be;
    let E;
    if (D[31] !== Q || D[32] !== onFocus) {
        E = (rt)=>{
            if (U.current) {
                U.current = false;
                return;
            }
            if (se.current === rt) {
                return;
            }
            se.current = rt;
            if (onFocus) {
                let bt = Q.get(rt);
                if (bt) {
                    onFocus(bt);
                }
            }
        };
        D[31] = Q;
        D[32] = onFocus;
        D[33] = E;
    } else {
        E = D[33];
    }
    let onFocus_1 = E;
    let We;
    if (D[34] !== focusNodeId || D[35] !== onChange || D[36] !== onFocus_1 || D[37] !== hideIndexes_1 || D[38] !== hidePromptWhileDisabled || D[39] !== isDisabled_1 || D[40] !== layout_1 || D[41] !== onCancel || D[42] !== onUpFromFirstItem || D[43] !== options || D[44] !== visibleOptionCount) {
        We = e(Ve, {
            options,
            onChange,
            onFocus: onFocus_1,
            onCancel,
            defaultFocusValue: focusNodeId,
            visibleOptionCount,
            layout: layout_1,
            isDisabled: isDisabled_1,
            hidePromptWhileDisabled,
            hideIndexes: hideIndexes_1,
            onUpFromFirstItem
        });
        D[34] = focusNodeId;
        D[35] = onChange;
        D[36] = onFocus_1;
        D[37] = hideIndexes_1;
        D[38] = hidePromptWhileDisabled;
        D[39] = isDisabled_1;
        D[40] = layout_1;
        D[41] = onCancel;
        D[42] = onUpFromFirstItem;
        D[43] = options;
        D[44] = visibleOptionCount;
        D[45] = We;
    } else {
        We = D[45];
    }
    let yt;
    if (D[46] !== onKeyDown || D[47] !== We) {
        yt = e(s, {
            tabIndex: 0,
            autoFocus: true,
            onKeyDown,
            children: We
        });
        D[46] = onKeyDown;
        D[47] = We;
        D[48] = yt;
    } else {
        yt = D[48];
    }
    return yt;
}
function fo(o, d) {
    let c = o.replace(/\s+/g, " ").trim();
    return pt(c, d);
}
const ho = 2;
const go = 4;
const xo = 2000;
const bn = 1000;
const yn = 50000;
const bo = 0.3;
const yo = 60000;
const So = 50;
const Co = 5;
function Sn({ before, match, after }, l) {
    return ge.dim(before) + l(match) + ge.dim(after);
}
function To(query) {
    return query.replace(new RegExp(`${uIn.source}[^,\\s"]*`, "g"), (d)=>{
        let c = uqe(d);
        if (c) {
            return `PR #${c.prNumber} ${c.prRepository}`;
        }
        return d;
    });
}
function Eo(searchableText, d, c) {
    let l = searchableText.toLowerCase().indexOf(d.toLowerCase());
    if (l === -1) {
        return null;
    }
    let p = l + d.length;
    let h = Math.max(0, l - c);
    let x = Math.min(searchableText.length, p + c);
    let f = searchableText.slice(h, l);
    let F = searchableText.slice(l, p);
    let k = searchableText.slice(p, x);
    return {
        before: (h > 0 ? "…" : "") + f.replace(/\s+/g, " ").trimStart(),
        match: F.trim(),
        after: k.replace(/\s+/g, " ").trimEnd() + (x < searchableText.length ? "…" : "")
    };
}
function Lt(o, d, c) {
    let { isGroupHeader = false, isChild = false, forkCount = 0 } = c || {};
    let x = isGroupHeader && forkCount > 0 ? ho : isChild ? go : 0;
    let f = isGroupHeader && forkCount > 0 ? ` (+${forkCount} other ${forkCount === 1 ? "session" : "sessions"})` : "";
    let F = o.isSidechain ? " (sidechain)" : "";
    let k = o.artifactCount !== undefined && o.artifactCount > 0 ? `  ${tu} ${o.artifactCount}` : "";
    let T = d - x - F.length - f.length - ae(k);
    return `${fo(s6(o), T)}${F}${f}${k}`;
}
function Dt(o, d) {
    let { isChild = false, showProjectPath = false } = d || {};
    let p = isChild ? "    " : "";
    let h = Urn(o);
    let x = showProjectPath && o.projectPath ? ` \xB7 ${o.projectPath}` : "";
    return p + h + x;
}
function Dln({ logs, maxHeight = Infinity, forceWidth, onCancel, onSelect, onLogsChanged, onLoadMore, initialSearchQuery, isLoading = false, reloadGeneration = 0, showAllProjects = false, onToggleAllProjects, currentSessionId }) {
    let { storageV5 } = Pe();
    let Qe = ns(ke());
    let Ne = forceWidth === undefined ? Qe.columns : forceWidth;
    let oe = Yo(onCancel);
    let isTerminalFocused = Qc();
    let B = on();
    let De = false;
    let D = Vb();
    let re = Z(()=>(t)=>uAe(t, D.warning), [
        D.warning
    ]);
    let [M, K] = y(null);
    let [U, se] = y(true);
    let [A, ye] = y(false);
    let [W, Se] = y(false);
    let [j, _e] = y(null);
    let [Ke, lt] = y(null);
    let [qe, _t] = y([]);
    let [Fe, ct] = y(false);
    let V = tE();
    let [X] = y(()=>V.originalCwd);
    let [ze, te] = y("");
    let [cursorOffset_1, onChangeCursorOffset] = y(0);
    let [ie, Re] = y(new Set);
    let [Me, mt] = y(null);
    let [Y, Ye] = y(1);
    let [C, _] = y(initialSearchQuery ? "search" : "list");
    let [Je, Q] = y(null);
    let { query, setQuery, cursorOffset, handleKeyDown, handlePaste } = yy({
        isActive: C === "search",
        onExit: ()=>{
            _("list");
            i("tengu_session_search_toggled", {
                enabled: false
            });
        },
        onExitUp: ()=>{
            _("list");
            i("tengu_session_search_toggled", {
                enabled: false
            });
        },
        passthroughCtrlKeys: logs.length === 0 ? [
            "n",
            "a"
        ] : [
            "n"
        ],
        initialQuery: initialSearchQuery || ""
    });
    let J = To(query);
    let Ce = DJ(J);
    let [q, gt] = y("");
    P(()=>{
        if (!Ce) {
            gt("");
            return;
        }
        return B.setTimeout(()=>gt(Ce), 300);
    }, [
        Ce,
        B
    ]);
    let [Te, Oe] = y(null);
    let ue = false;
    P(()=>{
        Od().then((a)=>K(a));
        let t = Date.now();
        iDt(X).then(async (a)=>{
            a.length;
            return a;
        }).then((a)=>{
            i("tengu_worktree_detection", {
                duration_ms: Date.now() - t,
                worktree_count: a.length,
                success: true
            });
            Se(a.length > 1);
            _t(a);
            _e(a[0] ?? null);
            let m = a.filter((u)=>X === u || X.startsWith(u + sep));
            m.sort((u, L)=>L.length - u.length);
            lt(m[0] ?? null);
            ct(true);
        }).catch(()=>{
            i("tengu_worktree_detection", {
                duration_ms: Date.now() - t,
                worktree_count: 0,
                success: false
            });
            ct(true);
        });
    }, [
        X
    ]);
    let tt = Z(()=>new Map(logs.map((t)=>[
                t,
                vo(t)
            ])), [
        logs
    ]);
    let pe = Z(()=>null, [
        logs,
        tt,
        false
    ]);
    let H = Z(()=>{
        let t = logs.filter((a)=>{
            let m = wf(a);
            if (currentSessionId && m === currentSessionId) {
                return true;
            }
            if (a.customTitle ?? a.aiTitle) {
                return true;
            }
            if (zCn(a.messages)) {
                return true;
            }
            if (a.firstPrompt || a.customTitle || a.aiTitle) {
                return true;
            }
            return false;
        });
        if (!U && M) {
            t = t.filter((a)=>a.gitBranch === M);
        }
        if (W && !A && !showAllProjects) {
            let a = Ke ?? X;
            t = t.filter((m)=>{
                if (m.isAlias) {
                    return true;
                }
                let m_projectPath = m.projectPath;
                if (m_projectPath === undefined) {
                    return false;
                }
                let L = null;
                for (let b of qe){
                    if (m_projectPath === b || m_projectPath.startsWith(b + sep)) {
                        if (L === null || b.length > L.length) {
                            L = b;
                        }
                    }
                }
                if (L === null) {
                    return m_projectPath === a;
                }
                return L === a;
            });
        }
        return t;
    }, [
        logs,
        currentSessionId,
        U,
        M,
        W,
        A,
        showAllProjects,
        X,
        Ke,
        qe
    ]);
    let nt = Z(()=>{
        if (!J) {
            return H;
        }
        let t = J.toLowerCase();
        return H.filter((a)=>{
            let m = s6(a).toLowerCase();
            let u = (a.gitBranch || "").toLowerCase();
            let L = (a.tag || "").toLowerCase();
            let b = a.prNumber ? `pr #${a.prNumber} ${a.prRepository || ""}`.toLowerCase() : "";
            return m.includes(t) || u.includes(t) || L.includes(t) || b.includes(t);
        });
    }, [
        H,
        J
    ]);
    P(()=>{
        Oe(null);
    }, [
        q,
        Ce,
        pe,
        false,
        B
    ]);
    let { filteredLogs, snippets } = Z(()=>{
        let snippets_1 = new Map;
        let filteredLogs_1 = nt;
        if (Te && q && Te.query === q) {
            for (let b of Te.results){
                if (b.searchableText) {
                    let fe = Eo(b.searchableText, q, So);
                    if (fe) {
                        snippets_1.set(b.log, fe);
                    }
                }
            }
            let m = new Set(filteredLogs_1.map((b)=>b.messages[0]?.uuid));
            let u = new Set(H);
            let L = Te.results.map((b)=>b.log).filter((b)=>!m.has(b.messages[0]?.uuid) && u.has(b));
            filteredLogs_1 = [
                ...filteredLogs_1,
                ...L
            ];
        }
        return {
            filteredLogs: filteredLogs_1,
            snippets: snippets_1
        };
    }, [
        nt,
        Te,
        q,
        H
    ]);
    let xt = Ne - 2 * Xw;
    let Ee = Math.max(30, xt - 4);
    let nodes = Z(()=>{
        let t = wo(filteredLogs);
        return Array.from(t.entries()).map(([a, m])=>{
            let u = m[0];
            let L = filteredLogs.indexOf(u);
            let b = snippets.get(u);
            let fe = b ? Sn(b, re) : null;
            if (m.length === 1) {
                let ne = Dt(u, {
                    showProjectPath: showAllProjects
                });
                return {
                    id: `log:${a}:0`,
                    value: {
                        log: u,
                        indexInFiltered: L
                    },
                    label: Lt(u, Ee),
                    description: fe ? `${ne}
  ${fe}` : ne,
                    dimDescription: true
                };
            }
            let forkCount = m.length - 1;
            let children = m.slice(1).map((ne, Nn)=>{
                let Ln = filteredLogs.indexOf(ne);
                let Wt = snippets.get(ne);
                let $t = Wt ? Sn(Wt, re) : null;
                let jt = Dt(ne, {
                    isChild: true,
                    showProjectPath: showAllProjects
                });
                return {
                    id: `log:${a}:${Nn + 1}`,
                    value: {
                        log: ne,
                        indexInFiltered: Ln
                    },
                    label: Lt(ne, Ee, {
                        isChild: true
                    }),
                    description: $t ? `${jt}
      ${$t}` : jt,
                    dimDescription: true
                };
            });
            let Bt = Dt(u, {
                showProjectPath: showAllProjects
            });
            return {
                id: `group:${a}`,
                value: {
                    log: u,
                    indexInFiltered: L
                },
                label: Lt(u, Ee, {
                    isGroupHeader: true,
                    forkCount
                }),
                description: fe ? `${Bt}
  ${fe}` : Bt,
                dimDescription: true,
                children
            };
        });
    }, [
        filteredLogs,
        Ee,
        showAllProjects,
        snippets,
        re
    ]);
    let E = Me?.value.log ?? null;
    let rt = ()=>{
        if (!E) {
            return "";
        }
        let t = wf(E);
        if (!t) {
            return "";
        }
        let a = filteredLogs.filter((b)=>wf(b) === t);
        if (!(a.length > 1)) {
            return "";
        }
        let u = ie.has(t);
        if (a.indexOf(E) > 0 || u) {
            return e(G, {
                chord: "left",
                action: "collapse"
            });
        }
        return e(G, {
            chord: "right",
            action: "expand"
        });
    };
    let onSubmit = async ()=>{
        let t = E ? wf(E) : undefined;
        if (!E || !t) {
            _("list");
            te("");
            return;
        }
        if (ze.trim()) {
            await S2(t, ze.trim(), E.fullPath, "user", storageV5);
            if (onLogsChanged) {
                onLogsChanged();
            }
        }
        _("list");
        te("");
    };
    let st = ()=>{
        _("list");
        setQuery("");
        i("tengu_session_search_toggled", {
            enabled: false
        });
    };
    let onUpFromFirstItem = ()=>{
        _("search");
        i("tengu_session_search_toggled", {
            enabled: true
        });
    };
    P(()=>{
        if (reloadGeneration === 0) {
            return;
        }
        Oe(null);
    }, [
        reloadGeneration
    ]);
    let onFocus = (t)=>{
        mt(t);
        let a = filteredLogs.findIndex((m)=>wf(m) === wf(t.value.log));
        if (a >= 0) {
            Ye(a + 1);
        }
    };
    Ze("confirm:no", ()=>{
        _("list");
        te("");
    }, {
        context: "Settings",
        isActive: C === "rename"
    });
    function onKeyDown(t) {
        if (C === "preview") {
            return;
        }
        if (C === "rename") ;
        else if (C === "search") {
            handleKeyDown(t);
            if (t.ctrl && t.key === "n") {
                t.preventDefault();
                st();
            } else if (t.ctrl && t.key === "a" && onToggleAllProjects && logs.length === 0) {
                t.preventDefault();
                onToggleAllProjects();
                i("tengu_session_all_projects_toggled", {
                    enabled: showAllProjects
                });
            }
        } else {
            if (filteredLogs.length === 0 && (t.key === "up" || t.key === "down" || t.key === "return")) {
                t.preventDefault();
                _("search");
                return;
            }
            let a = !t.ctrl && !t.meta;
            let m = t.key.toLowerCase();
            if (t.ctrl && t.key === "a" && onToggleAllProjects) {
                t.preventDefault();
                onToggleAllProjects();
                i("tengu_session_all_projects_toggled", {
                    enabled: showAllProjects
                });
            } else if (t.ctrl && t.key === "b") {
                t.preventDefault();
                let u = !U;
                se(u);
                i("tengu_session_branch_filter_toggled", {
                    enabled: !u
                });
            } else if (t.ctrl && t.key === "w" && W) {
                t.preventDefault();
                let u = !A;
                ye(u);
                i("tengu_session_worktree_filter_toggled", {
                    enabled: !u
                });
            } else if (m === "/" && a) {
                t.preventDefault();
                _("search");
                i("tengu_session_search_toggled", {
                    enabled: true
                });
            } else if (t.ctrl && t.key === "r" && E) {
                t.preventDefault();
                _("rename");
                te("");
                i("tengu_session_rename_started", {});
            } else if ((t.key === " " && a || t.ctrl && t.key === "v") && E) {
                t.preventDefault();
                Q(E);
                _("preview");
                i("tengu_session_preview_opened", {
                    messageCount: E.messageCount
                });
            } else if (!t.defaultPrevented && a && t.key.length === 1 && t.key !== " ") {
                t.preventDefault();
                _("search");
                setQuery(t.key);
                i("tengu_session_search_toggled", {
                    enabled: true
                });
            }
        }
    }
    function onPaste(t) {
        if (C === "search") {
            handlePaste(t);
            return;
        }
        let a = (t.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
        if (C === "preview" || C === "rename" || !E || !a) {
            return;
        }
        t.preventDefault();
        _("search");
        setQuery(a);
        i("tengu_session_search_toggled", {
            enabled: true
        });
    }
    let Ie = [];
    let Rt = !!onToggleAllProjects && !showAllProjects && Fe;
    let Mt = j ?? X;
    if (Rt) {
        Ie.push(basename(Mt));
    }
    if (!U && M) {
        Ie.push(M);
    }
    if (W && !A && !showAllProjects) {
        let t = Ke ?? X;
        if (!(Rt && Mt === t)) {
            Ie.push(basename(t));
        }
    }
    let Tn = !!onToggleAllProjects && !showAllProjects && !Fe;
    let Ot = (Ie.length > 0 || Tn) && C !== "search";
    let En = 8 + (Ot ? 1 : 0);
    let In = 2;
    let visibleOptionCount = Math.max(1, Math.floor((maxHeight - En - In) / 3));
    let logs_length = logs.length;
    let it = R({
        focusedIndex: -1,
        visible: -1,
        empty: 0
    });
    P(()=>{
        if (!onLoadMore) {
            return;
        }
        let it_current = it.current;
        if (it_current.focusedIndex !== Y || it_current.visible !== filteredLogs.length) {
            it.current = {
                focusedIndex: Y,
                visible: filteredLogs.length,
                empty: 0
            };
        }
        let a = visibleOptionCount * 2;
        if (Y + a >= filteredLogs.length && it.current.empty < Co) {
            it.current.empty++;
            onLoadMore(visibleOptionCount * 3);
        }
    }, [
        Y,
        visibleOptionCount,
        filteredLogs.length,
        logs_length,
        onLoadMore
    ]);
    if (logs.length === 0 && !onToggleAllProjects) {
        return null;
    }
    if (C === "preview" && Je) {
        return e(Ct, {
            log: Je,
            onExit: ()=>{
                _("list");
                Q(null);
            },
            onSelect
        });
    }
    return e(s, {
        flexDirection: "column",
        maxHeight: maxHeight - 1,
        onKeyDown,
        onPaste,
        children: r(ts, {
            color: "suggestion",
            children: [
                e(s, {
                    flexShrink: 0,
                    children: r(n, {
                        bold: true,
                        color: "suggestion",
                        children: [
                            "Resume session",
                            C === "list" && filteredLogs.length > visibleOptionCount && r(n, {
                                dimColor: true,
                                children: [
                                    " ",
                                    "(",
                                    Y,
                                    " of ",
                                    filteredLogs.length,
                                    ")"
                                ]
                            }),
                            isLoading && e(n, {
                                dimColor: true,
                                children: " · Refreshing…"
                            })
                        ]
                    })
                }),
                e(nb, {
                    query,
                    isFocused: C === "search",
                    isTerminalFocused,
                    cursorOffset
                }),
                Ot && (Ie.length > 0 ? e(s, {
                    flexShrink: 0,
                    paddingLeft: 2,
                    children: e(n, {
                        dimColor: true,
                        children: e(be, {
                            children: Ie
                        })
                    })
                }) : e(s, {
                    flexShrink: 0,
                    height: 1
                })),
                e(s, {
                    flexShrink: 0,
                    children: e(n, {
                        children: " "
                    })
                }),
                (C === "search" || C === "list") && Boolean(query.trim()) && filteredLogs.length === 0 && !ue && !isLoading && e(s, {
                    paddingLeft: 1,
                    marginBottom: 1,
                    flexShrink: 0,
                    children: r(mo, {
                        children: [
                            'No sessions match "',
                            query,
                            '".'
                        ]
                    })
                }),
                logs.length === 0 && C === "list" && !isLoading && !query.trim() && e(s, {
                    paddingLeft: 1,
                    marginBottom: 1,
                    flexShrink: 0,
                    children: e(mo, {
                        hint: showAllProjects ? undefined : e(G, {
                            chord: "ctrl+a",
                            action: "show all projects",
                            format: {
                                modCase: "title",
                                charCase: "upper"
                            }
                        }),
                        children: showAllProjects ? "No conversations found." : "No conversations found in this project."
                    })
                }),
                C === "rename" && E ? r(s, {
                    paddingLeft: 2,
                    flexDirection: "column",
                    children: [
                        e(n, {
                            bold: true,
                            children: "Rename session:"
                        }),
                        e(s, {
                            paddingTop: 1,
                            children: e(Sr, {
                                value: ze,
                                onChange: te,
                                onSubmit,
                                placeholder: s6(E, "Enter new session name"),
                                columns: xt - 2,
                                cursorOffset: cursorOffset_1,
                                onChangeCursorOffset,
                                showCursor: true,
                                focus: true
                            })
                        })
                    ]
                }) : e(Nt, {
                    nodes,
                    onSelect: (t)=>{
                        onSelect(t.value.log);
                    },
                    onFocus,
                    onCancel,
                    focusNodeId: Me?.id,
                    visibleOptionCount,
                    layout: "expanded",
                    isDisabled: C === "search",
                    hidePromptWhileDisabled: true,
                    hideIndexes: false,
                    isNodeExpanded: (t)=>{
                        if (C === "search" || !U) {
                            return true;
                        }
                        let a = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
                        if (a) {
                            return ie.has(a);
                        }
                        return false;
                    },
                    onExpand: (t)=>{
                        let a = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
                        if (a) {
                            Re((m)=>new Set(m).add(a));
                            i("tengu_session_group_expanded", {});
                        }
                    },
                    onCollapse: (t)=>{
                        let a = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
                        if (a) {
                            Re((m)=>{
                                let u = new Set(m);
                                u.delete(a);
                                return u;
                            });
                        }
                    },
                    onUpFromFirstItem
                }),
                e(s, {
                    paddingLeft: 2,
                    children: oe.pending ? r(n, {
                        dimColor: true,
                        children: [
                            "Press ",
                            oe.keyName,
                            " again to exit"
                        ]
                    }) : C === "rename" ? e(n, {
                        dimColor: true,
                        children: r(be, {
                            children: [
                                e(G, {
                                    chord: "enter",
                                    action: "save"
                                }),
                                e(ut, {
                                    action: "confirm:no",
                                    context: "Confirmation",
                                    fallback: "Esc",
                                    description: "cancel"
                                })
                            ]
                        })
                    }) : C === "search" ? e(n, {
                        dimColor: true,
                        children: r(be, {
                            children: [
                                e(n, {
                                    children: "Type to Search"
                                }),
                                logs.length === 0 && onToggleAllProjects && e(G, {
                                    chord: "ctrl+a",
                                    action: showAllProjects ? "only show current repo" : "show all projects",
                                    format: {
                                        modCase: "title",
                                        charCase: "upper"
                                    }
                                }),
                                e(G, {
                                    chord: "enter",
                                    action: "select"
                                }),
                                e(ut, {
                                    action: "confirm:no",
                                    context: "Confirmation",
                                    fallback: "Esc",
                                    description: "clear"
                                })
                            ]
                        })
                    }) : e(n, {
                        dimColor: true,
                        children: r(be, {
                            children: [
                                onToggleAllProjects && e(G, {
                                    chord: "ctrl+a",
                                    action: showAllProjects ? "only show current repo" : "show all projects",
                                    format: {
                                        modCase: "title",
                                        charCase: "upper"
                                    }
                                }),
                                M && e(G, {
                                    chord: "ctrl+b",
                                    action: U ? "only show current branch" : "show all branches",
                                    format: {
                                        modCase: "title",
                                        charCase: "upper"
                                    }
                                }),
                                W && e(G, {
                                    chord: "ctrl+w",
                                    action: A ? "only show current worktree" : "show all worktrees",
                                    format: {
                                        modCase: "title",
                                        charCase: "upper"
                                    }
                                }),
                                E && e(G, {
                                    chord: "space",
                                    action: "preview"
                                }),
                                E && e(G, {
                                    chord: "ctrl+r",
                                    action: "rename",
                                    format: {
                                        modCase: "title",
                                        charCase: "upper"
                                    }
                                }),
                                e(n, {
                                    children: "Type to search"
                                }),
                                e(ut, {
                                    action: "confirm:no",
                                    context: "Confirmation",
                                    fallback: "Esc",
                                    description: "cancel"
                                }),
                                rt()
                            ]
                        })
                    })
                })
            ]
        })
    });
}
function Io(o) {
    if (o.type !== "user" && o.type !== "assistant") {
        return "";
    }
    let d = "message" in o ? o.message?.content : undefined;
    if (!d) {
        return "";
    }
    let c = o.type === "user" && o.isCompactSummary ? o.modelOnlyText : undefined;
    if (typeof d === "string") {
        return die(d, c);
    }
    if (Array.isArray(d)) {
        return d.map((l)=>{
            if (typeof l === "string") {
                return l;
            }
            if ("text" in l && typeof l.text === "string") {
                return die(l.text, c);
            }
            return "";
        }).filter(Boolean).join(" ");
    }
    return "";
}
function vo(o) {
    let c = (o.messages.length <= xo ? o.messages : [
        ...o.messages.slice(0, bn),
        ...o.messages.slice(-bn)
    ]).map(Io).filter(Boolean).join(" ");
    let p = `${[
        o.customTitle,
        o.aiTitle,
        o.summary,
        o.firstPrompt,
        o.gitBranch,
        o.tag,
        o.prNumber ? `PR #${o.prNumber}` : undefined,
        o.prRepository
    ].filter(Boolean).join(" ")} ${c}`.trim();
    if (p.length > yn) {
        return p.slice(0, yn);
    }
    return p;
}
function wo(filteredLogs) {
    let d = new Map;
    for (let c of filteredLogs){
        let l = wf(c);
        if (l) {
            let p = d.get(l);
            if (p) {
                p.push(c);
            } else {
                d.set(l, [
                    c
                ]);
            }
        }
    }
    d.forEach((c)=>c.sort((l, p)=>new Date(p.modified).getTime() - new Date(l.modified).getTime()));
    return d;
}
function gKn() {
    if (O() === "windows") {
        return ";";
    }
    return "&&";
}
async function Lln(o, d, c) {
    let l = we();
    if (!d || !o.projectPath || o.projectPath === l) {
        return null;
    }
    if (c.some((f)=>o.projectPath === f || o.projectPath.startsWith(f + sep))) {
        return null;
    }
    if (!Bn(o.projectPath) && !_m(o.projectPath) && !await _o(o.projectPath)) {
        return null;
    }
    let h = wf(o);
    let x = I9(h) ? ` ${h}` : "";
    return `cd ${so([
        o.projectPath
    ])} ${gKn()} claude --resume${x}`;
}
async function _o(projectPath) {
    let d = O() === "windows";
    let { parse, sep } = d ? win32 : posix;
    let p = d ? parse(projectPath).root.replaceAll("/", sep) : parse(projectPath).root;
    let h = projectPath.slice(parse(projectPath).root.length).split(d ? /[\\/]+/ : sep).filter(Boolean);
    let x = p;
    for (let f of h){
        x = x === "" || x.endsWith(sep) ? x + f : x + sep + f;
        try {
            if ((await lstat(x)).isSymbolicLink()) {
                return true;
            }
        } catch (error) {
            let k = v(error);
            return k !== "ENOENT" && k !== "ENOTDIR";
        }
    }
    return true;
}
export { Dln, gKn, Lln };
