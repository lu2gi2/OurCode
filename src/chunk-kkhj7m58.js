import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { ns } from "/$bunfs/root/chunk-2mjaqpws.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { ae } from "/$bunfs/root/chunk-223dyewd.js";
import { Xq } from "/$bunfs/root/chunk-xpwdmrx0.js";
import { Zm } from "/$bunfs/root/chunk-066dgc2r.js";
import { qt, Te, P, Co, y, Rt, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { Ade } from "/$bunfs/root/chunk-0c6rtmqc.js";
N();
N();
const bXe = qt(null);
function $Lo() {
    let u = Te(bXe);
    let i = Te(Xq);
    return ()=>{
        if (u === null || !i) {
            return;
        }
        try {
            i.getState().open.find((t)=>t.id === u)?.onClaimed?.();
        } catch (error) {
            c(error);
        }
    };
}
function j() {
    let u = Te(bXe);
    let i = Te(Xq);
    let t = u === null || !i ? undefined : i.getState().open.find((o)=>o.id === u)?.countedAsk;
    let a = t === undefined ? undefined : i?.askTally;
    return Rt(a?.subscribe ?? V, ()=>{
        if (t === undefined || !a) {
            return null;
        }
        return a.positionLabel(t);
    });
}
function See(u, i, { perReveal = false } = {}) {
    let a = Te(bXe);
    let o = Te(Xq);
    let q = Co(i);
    let [f] = y(()=>{
        if (perReveal && a !== null && o) {
            return o.getState().open.find((p)=>p.id === a)?.revealSeq ?? 0;
        }
        return 0;
    });
    P(()=>{
        if (a !== null && o) {
            if (!o.firstReveal(a, perReveal ? `${u}@${f}` : u)) {
                return;
            }
        }
        q();
    }, [
        a,
        o,
        u,
        perReveal,
        f
    ]);
}
function V() {
    return ()=>{};
}
function R(u) {
    let i = Ade(u);
    if (i === null) {
        return undefined;
    }
    return String(i);
}
function j9(u) {
    let m = w(25);
    let { title, subtitle, color, requestSource, srPrefix, aside } = u;
    let color_1 = color === undefined ? "permission" : color;
    let d;
    B: switch(requestSource?.type){
        case "workflow-agent":
            {
                let l;
                if (m[0] !== requestSource.workflowName) {
                    l = R(requestSource.workflowName);
                    m[0] = requestSource.workflowName;
                    m[1] = l;
                } else {
                    l = m[1];
                }
                let h = l;
                d = h !== undefined ? `from the "${h}" workflow` : "from a workflow";
                break B;
            }
        case "subagent":
            {
                let l;
                if (m[2] !== requestSource.agentName) {
                    l = R(requestSource.agentName);
                    m[2] = requestSource.agentName;
                    m[3] = l;
                } else {
                    l = m[3];
                }
                let x = l;
                d = x !== undefined ? `from the ${x} agent` : "from a subagent";
                break B;
            }
        case "remote-agent":
            {
                d = "from a remote cloud agent";
                break B;
            }
        case "plugin":
            {
                let l;
                if (m[4] !== requestSource.pluginName) {
                    l = R(requestSource.pluginName);
                    m[4] = requestSource.pluginName;
                    m[5] = l;
                } else {
                    l = m[5];
                }
                let k = l;
                d = k === undefined ? "from a plugin" : `from the ${k} plugin`;
            }
    }
    const l = srPrefix !== undefined ? `${srPrefix} ${title}` : undefined;
    let b;
    if (m[6] !== color_1 || m[7] !== l || m[8] !== title) {
        b = e(n, {
            "aria-label": l,
            bold: true,
            color: color_1,
            children: title
        });
        m[6] = color_1;
        m[7] = l;
        m[8] = title;
        m[9] = b;
    } else {
        b = m[9];
    }
    let S;
    if (m[10] !== d) {
        S = d !== undefined && r(n, {
            children: [
                e(n, {
                    dimColor: true,
                    children: "· "
                }),
                d
            ]
        });
        m[10] = d;
        m[11] = S;
    } else {
        S = m[11];
    }
    let C;
    if (m[12] !== b || m[13] !== S) {
        C = r(s, {
            flexDirection: "row",
            gap: 1,
            children: [
                b,
                S
            ]
        });
        m[12] = b;
        m[13] = S;
        m[14] = C;
    } else {
        C = m[14];
    }
    let L = C;
    let A = aside !== undefined && ae(title) + (d === undefined ? 0 : 1 + ae(`\xB7 ${d}`)) + 1 + ae(aside.text) <= aside.rowColumns;
    const flexGrow = A ? 1 : undefined;
    let E;
    if (m[15] !== aside || m[16] !== A || m[17] !== L) {
        E = A ? r(s, {
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 1,
            children: [
                L,
                e(n, {
                    dimColor: true,
                    children: aside.text
                })
            ]
        }) : L;
        m[15] = aside;
        m[16] = A;
        m[17] = L;
        m[18] = E;
    } else {
        E = m[18];
    }
    let X;
    if (m[19] !== subtitle) {
        X = subtitle != null && (typeof subtitle === "string" ? e(n, {
            dimColor: true,
            wrap: "truncate-start",
            children: subtitle
        }) : subtitle);
        m[19] = subtitle;
        m[20] = X;
    } else {
        X = m[20];
    }
    let U;
    if (m[21] !== flexGrow || m[22] !== E || m[23] !== X) {
        U = r(s, {
            flexDirection: "column",
            flexGrow,
            children: [
                E,
                X
            ]
        });
        m[21] = flexGrow;
        m[22] = E;
        m[23] = X;
        m[24] = U;
    } else {
        U = m[24];
    }
    return U;
}
function ba(u) {
    let x = w(20);
    let { title, subtitle, color, titleColor, innerPaddingX, requestSource, titleRight, children } = u;
    let borderColor = color === undefined ? "permission" : color;
    let paddingX = innerPaddingX === undefined ? 1 : innerPaddingX;
    let text = j();
    let { columns } = ns(Te(Zm) ?? {
        rows: 0,
        columns: 0
    });
    let aside;
    if (x[0] !== text || x[1] !== columns || x[2] !== titleRight) {
        aside = titleRight === undefined && text !== null ? {
            text,
            rowColumns: columns - 2
        } : undefined;
        x[0] = text;
        x[1] = columns;
        x[2] = titleRight;
        x[3] = aside;
    } else {
        aside = x[3];
    }
    let b;
    if (x[4] !== requestSource || x[5] !== subtitle || x[6] !== aside || x[7] !== title || x[8] !== titleColor) {
        b = e(j9, {
            title,
            subtitle,
            color: titleColor,
            requestSource,
            srPrefix: "Permission Required:",
            aside
        });
        x[4] = requestSource;
        x[5] = subtitle;
        x[6] = aside;
        x[7] = title;
        x[8] = titleColor;
        x[9] = b;
    } else {
        b = x[9];
    }
    let S;
    if (x[10] !== b || x[11] !== titleRight) {
        S = e(s, {
            paddingX: 1,
            flexDirection: "column",
            children: r(s, {
                justifyContent: "space-between",
                children: [
                    b,
                    titleRight
                ]
            })
        });
        x[10] = b;
        x[11] = titleRight;
        x[12] = S;
    } else {
        S = x[12];
    }
    let C;
    if (x[13] !== children || x[14] !== paddingX) {
        C = e(s, {
            flexDirection: "column",
            paddingX,
            children
        });
        x[13] = children;
        x[14] = paddingX;
        x[15] = C;
    } else {
        C = x[15];
    }
    let L;
    if (x[16] !== borderColor || x[17] !== S || x[18] !== C) {
        L = r(s, {
            flexDirection: "column",
            borderStyle: "round",
            borderColor,
            borderLeft: false,
            borderRight: false,
            borderBottom: false,
            marginTop: 1,
            children: [
                S,
                C
            ]
        });
        x[16] = borderColor;
        x[17] = S;
        x[18] = C;
        x[19] = L;
    } else {
        L = x[19];
    }
    return L;
}
export { bXe, $Lo, See, j9, ba };
