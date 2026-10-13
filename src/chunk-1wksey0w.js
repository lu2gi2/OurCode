import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Gb } from "/$bunfs/root/chunk-2mjaqpws.js";
import { Qy } from "/$bunfs/root/chunk-4nfvaqps.js";
import { s, n, Ks } from "/$bunfs/root/chunk-8524cxt8.js";
import { Lc } from "/$bunfs/root/chunk-wvwcne5b.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ae } from "/$bunfs/root/chunk-223dyewd.js";
import { pB, fB, Sce, LOn } from "/$bunfs/root/chunk-cmf2ckg9.js";
import { Te, P, en, Z, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Lmt } from "/$bunfs/root/chunk-yphmh99q.js";
import { G, q0 } from "/$bunfs/root/chunk-8eystn8t.js";
import { ndn, nE } from "/$bunfs/root/chunk-86meyjxt.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { ts } from "/$bunfs/root/chunk-d0t2hmxp.js";
import { ut } from "/$bunfs/root/chunk-wy1471a2.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
N();
N();
const Pe = {
    "confirm:yes": {
        description: "confirm"
    },
    "confirm:no": {
        description: "cancel"
    },
    "confirm:previous": {
        description: "navigate"
    },
    "confirm:next": {
        description: "navigate"
    },
    "confirm:nextField": {
        description: "next field"
    },
    "confirm:previousField": {
        description: "previous field"
    },
    "confirm:toggle": {
        description: "toggle"
    },
    "confirm:cycleMode": {
        description: "cycle mode"
    },
    ...{},
    "select:next": {
        description: "navigate"
    },
    "select:previous": {
        description: "navigate"
    },
    "select:pageUp": {
        description: "page up"
    },
    "select:pageDown": {
        description: "page down"
    },
    "select:first": {
        description: "first"
    },
    "select:last": {
        description: "last"
    },
    "select:accept": {
        description: "select"
    },
    "select:cancel": {
        description: "cancel"
    },
    "abovePrompt:toggle": {
        description: "hide/show plugin panel"
    },
    "abovePrompt:focus": {
        description: "focus plugin buttons, inputs and selects"
    },
    "abovePrompt:next": {
        description: "navigate"
    },
    "abovePrompt:previous": {
        description: "navigate"
    },
    "abovePrompt:press": {
        description: "press / submit / pick"
    },
    "abovePrompt:leave": {
        description: "back to prompt"
    },
    "abovePrompt:highlightNext": {
        description: "next option"
    },
    "abovePrompt:highlightPrevious": {
        description: "previous option"
    },
    "pane:scrollUp": {
        description: "scroll"
    },
    "pane:scrollDown": {
        description: "scroll"
    },
    "pane:pageUp": {
        description: "page up"
    },
    "pane:pageDown": {
        description: "page down"
    },
    "pane:top": {
        description: "top"
    },
    "pane:bottom": {
        description: "bottom"
    },
    "pane:grow": {
        description: "widen / heighten plugin pane"
    },
    "pane:shrink": {
        description: "narrow / shorten plugin pane"
    },
    "pane:close": {
        description: "close plugin pane"
    },
    "pane:next": {
        description: "show next plugin pane"
    },
    "pane:previous": {
        description: "show previous plugin pane"
    },
    "tabs:next": {
        description: "switch tab"
    },
    "tabs:previous": {
        description: "switch tab"
    },
    "app:toggleReplTab": {
        description: "switch tab"
    },
    "app:toggleDiffNoiseFilter": {
        description: "show/hide tests in diff panel"
    },
    "app:diffFileListUp": {
        description: "scroll diff panel file list"
    },
    "app:diffFileListDown": {
        description: "scroll diff panel file list"
    },
    "app:toggleDiffPreSession": {
        description: "show/hide pre-session changes in diff panel"
    },
    "app:cycleDiffBase": {
        description: "switch diff panel base"
    },
    ...{}
};
function fe(action) {
    if (action.startsWith("command:")) {
        return {
            description: action.slice(8)
        };
    }
    return Pe[action];
}
const Ke = 4;
const Ie = [
    [
        "select:previous",
        "select:next"
    ],
    [
        "confirm:previous",
        "confirm:next"
    ],
    [
        "tabs:next",
        "tabs:previous"
    ]
];
function ie({ boundary, fallback = null, order, omit, max = Ke, maxWidth }) {
    let ctx = Lc();
    let { focusManager, rootNode } = Te(Qy);
    let d = Te(ndn);
    let [T, F] = y(0);
    P(()=>{
        if (!ctx || !focusManager) {
            return;
        }
        let c = ()=>F((B)=>B + 1);
        let k = focusManager.subscribe(c);
        let O = ctx.keyHandlerRegistry.scopesChanged.subscribe(c);
        c();
        return ()=>{
            k();
            O();
        };
    }, [
        ctx,
        focusManager
    ]);
    let m = Z(()=>Oe({
            ctx,
            activeElement: focusManager?.activeElement ?? null,
            boundaryNode: boundary ? boundary.current : rootNode ?? null,
            rendered: boundary ? d : null,
            order,
            omit,
            max,
            maxWidth
        }), [
        ctx,
        focusManager,
        boundary,
        rootNode,
        d,
        order,
        omit,
        max,
        maxWidth,
        T
    ]);
    let x = R(null);
    P(()=>{
        let c = m.fellBack ? "fell_back" : m.hadEntryWithoutDescription ? "no_description" : "ok";
        if (c === x.current) {
            return;
        }
        let k = x.current === null;
        x.current = c;
        if (k && c === "fell_back") {
            return;
        }
        if (c === "ok") {
            g("keybinding_auto_hints");
        } else {
            f("keybinding_auto_hints", c);
        }
    }, [
        m.fellBack,
        m.hadEntryWithoutDescription
    ]);
    if (m.fellBack) {
        return fallback;
    }
    return e(n, {
        dimColor: true,
        italic: true,
        children: m.text
    });
}
function Oe({ ctx, activeElement, boundaryNode, rendered, order, omit, max, maxWidth }) {
    let M = {
        fellBack: true,
        text: "",
        hadEntryWithoutDescription: false
    };
    if (!ctx) {
        return M;
    }
    let d = [];
    let T = false;
    let F = 0;
    let m = boundaryNode === null ? undefined : activeElement ?? undefined;
    while(m){
        let t = m === boundaryNode;
        let i = ctx.keyHandlerRegistry.decls.get(m);
        if (i) {
            me(d, i, F, t);
        }
        if (t) {
            T = true;
            break;
        }
        m = m.parentNode;
        F++;
    }
    if (!T) {
        if (!rendered) {
            return M;
        }
        let t = rendered.chain.length - 1;
        let i = rendered.chain;
        for (let o of rendered.below[t]?.values() ?? []){
            if (o.claimFocus && o.chain.length > i.length) {
                i = o.chain;
            }
        }
        d = [];
        for(let o = i.length - 1; o >= t; o--){
            let D = i[o];
            if (D) {
                me(d, D, i.length - 1 - o, o === t);
            }
        }
    }
    if (!d.some((t)=>!t.isBoundary)) {
        return M;
    }
    let x = new Set(omit ?? []);
    let c = Sce(pB);
    let hadEntryWithoutDescription = false;
    let O = [];
    for (let t of d){
        if (x.has(t.action) || !t.scope) {
            continue;
        }
        let i = LOn(t.action, t.scope, ctx.bindings, c);
        if (!i) {
            continue;
        }
        let description = t.hint ?? fe(t.action)?.description;
        if (!description) {
            hadEntryWithoutDescription = true;
            continue;
        }
        O.push({
            action: t.action,
            description,
            chord: fB(i),
            depth: t.depth
        });
    }
    let B = new Map;
    (order ?? []).forEach((t, i)=>B.set(t, i));
    let I = new Set;
    let l = [];
    for (let t of O){
        if (I.has(t.description)) {
            continue;
        }
        I.add(t.description);
        let o = Ie.find((C)=>C.some((H)=>H === t.action))?.flatMap((C)=>O.find((H)=>H.action === C && H.description === t.description) ?? []);
        let D = o?.length === 2 ? o : [
            t
        ];
        l.push({
            order: Math.min(...D.map((C)=>B.get(C.action) ?? Infinity)),
            text: q0({
                chord: D.map((C)=>C.chord),
                action: t.description
            }),
            depth: t.depth
        });
    }
    l.sort((t, i)=>{
        if (t.order !== i.order) {
            return t.order - i.order;
        }
        return t.depth - i.depth;
    });
    let K = " · ";
    let z = ae(K);
    let _ = 0;
    let p = [];
    while(true){
        p = [];
        let t = 0;
        for (let D of l){
            if (p.length >= max) {
                break;
            }
            let C = (p.length === 0 ? 0 : z) + ae(D.text);
            if (maxWidth !== undefined && t + C + _ > maxWidth && p.length > 0) {
                break;
            }
            p.push(D.text);
            t += C;
        }
        let i = l.length - p.length;
        if (maxWidth === undefined || i === 0) {
            break;
        }
        let o = ae(`${K}+${i} more`);
        if (o <= _) {
            break;
        }
        _ = o;
    }
    if (p.length === 0) {
        return M;
    }
    let U = l.length - p.length;
    return {
        fellBack: false,
        text: U > 0 ? `${p.join(K)}${K}+${U} more` : p.join(K),
        hadEntryWithoutDescription
    };
}
function me(a, { scope, entriesRef }, depth, isBoundary) {
    for (let b of entriesRef.current){
        if (!b.action) {
            continue;
        }
        a.push({
            action: b.action,
            hint: b.hint,
            scope,
            depth,
            isBoundary
        });
    }
}
const children_1 = r(be, {
    children: [
        e(G, {
            chord: "enter",
            action: "confirm"
        }),
        e(ut, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "cancel"
        })
    ]
});
function _e(a) {
    let l = w(44);
    let { title, titleEnd, subtitle, children, onCancel, color, hideInputGuide, hideBorder, inputGuide, isCancelActive, onInterrupt, exitOnCtrlCD } = a;
    let color_1 = color === undefined ? "permission" : color;
    let c = isCancelActive === undefined ? true : isCancelActive;
    let k = exitOnCtrlCD === undefined ? false : exitOnCtrlCD;
    let O = R(null);
    let { entries, exitState } = Lmt(k ? undefined : onCancel, onInterrupt, c);
    let K;
    if (l[0] !== c || l[1] !== onCancel) {
        K = c ? [
            {
                action: "confirm:no",
                run: onCancel,
                hint: "cancel"
            }
        ] : [];
        l[0] = c;
        l[1] = onCancel;
        l[2] = K;
    } else {
        K = l[2];
    }
    let z;
    if (l[3] !== entries || l[4] !== K) {
        z = [
            ...K,
            ...entries
        ];
        l[3] = entries;
        l[4] = K;
        l[5] = z;
    } else {
        z = l[5];
    }
    let bindings = z;
    let p = Te(Gb);
    let ref = R(null);
    let [W, t] = y(subtitle ? 2 : 1);
    let i;
    if (l[6] !== p || l[7] !== W) {
        i = ()=>{
            if (!p || !ref.current) {
                return;
            }
            let height = Ks(ref.current).height;
            if (height !== W) {
                t(height);
            }
        };
        l[6] = p;
        l[7] = W;
        l[8] = i;
    } else {
        i = l[8];
    }
    en(i);
    let D = W + 1 + (hideInputGuide ? 0 : 2);
    let C;
    if (l[9] !== p || l[10] !== D) {
        C = p ? {
            ...p,
            rows: Math.max(0, p.rows - D)
        } : null;
        l[9] = p;
        l[10] = D;
        l[11] = C;
    } else {
        C = l[11];
    }
    let H = C;
    let ke;
    if (l[12] !== k || l[13] !== exitState || l[14] !== inputGuide) {
        ke = typeof inputGuide === "function" ? inputGuide(exitState) : exitState.pending ? r(n, {
            children: [
                "Press ",
                exitState.keyName,
                " again to ",
                k ? "exit" : "cancel"
            ]
        }) : inputGuide ?? undefined;
        l[12] = k;
        l[13] = exitState;
        l[14] = inputGuide;
        l[15] = ke;
    } else {
        ke = l[15];
    }
    let le = ke;
    let pe = typeof inputGuide === "function" || exitState.pending || inputGuide != null;
    let Ne;
    if (l[16] !== le || l[17] !== hideInputGuide || l[18] !== c || l[19] !== pe) {
        Ne = !hideInputGuide && e(s, {
            marginTop: 1,
            flexShrink: 0,
            children: pe ? e(n, {
                dimColor: true,
                italic: true,
                children: le
            }) : !c ? e(n, {
                dimColor: true,
                italic: true,
                children: children_1
            }) : e(ie, {
                boundary: O,
                fallback: e(n, {
                    dimColor: true,
                    italic: true,
                    children: children_1
                })
            })
        });
        l[16] = le;
        l[17] = hideInputGuide;
        l[18] = c;
        l[19] = pe;
        l[20] = Ne;
    } else {
        Ne = l[20];
    }
    let de = Ne;
    const flexGrow = hideBorder ? 0 : 1;
    let J;
    if (l[21] !== color_1 || l[22] !== title || l[23] !== titleEnd) {
        J = titleEnd ? r(s, {
            justifyContent: "space-between",
            gap: 2,
            children: [
                e(n, {
                    bold: true,
                    color: color_1,
                    children: title
                }),
                e(n, {
                    dimColor: true,
                    wrap: "truncate-start",
                    children: titleEnd
                })
            ]
        }) : e(n, {
            bold: true,
            color: color_1,
            children: title
        });
        l[21] = color_1;
        l[22] = title;
        l[23] = titleEnd;
        l[24] = J;
    } else {
        J = l[24];
    }
    let Q;
    if (l[25] !== subtitle) {
        Q = subtitle && e(n, {
            dimColor: true,
            children: subtitle
        });
        l[25] = subtitle;
        l[26] = Q;
    } else {
        Q = l[26];
    }
    let V;
    if (l[27] !== J || l[28] !== Q) {
        V = r(s, {
            ref,
            flexDirection: "column",
            children: [
                J,
                Q
            ]
        });
        l[27] = J;
        l[28] = Q;
        l[29] = V;
    } else {
        V = l[29];
    }
    let ee;
    if (l[30] !== H || l[31] !== children) {
        ee = e(Gb, {
            value: H,
            children
        });
        l[30] = H;
        l[31] = children;
        l[32] = ee;
    } else {
        ee = l[32];
    }
    let te;
    if (l[33] !== V || l[34] !== ee) {
        te = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                V,
                ee
            ]
        });
        l[33] = V;
        l[34] = ee;
        l[35] = te;
    } else {
        te = l[35];
    }
    let Se;
    if (l[36] !== bindings || l[37] !== de || l[38] !== flexGrow || l[39] !== te) {
        Se = r(nE, {
            ref: O,
            scope: "Confirmation",
            claimFocus: true,
            flexGrow,
            flexDirection: "column",
            bindings,
            children: [
                te,
                de
            ]
        });
        l[36] = bindings;
        l[37] = de;
        l[38] = flexGrow;
        l[39] = te;
        l[40] = Se;
    } else {
        Se = l[40];
    }
    let ne = Se;
    if (hideBorder) {
        return ne;
    }
    let Ae;
    if (l[41] !== color_1 || l[42] !== ne) {
        Ae = e(ts, {
            color: color_1,
            children: ne
        });
        l[41] = color_1;
        l[42] = ne;
        l[43] = Ae;
    } else {
        Ae = l[43];
    }
    return Ae;
}
export { _e };
