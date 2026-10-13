import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { ns } from "/$bunfs/root/chunk-2mjaqpws.js";
import { Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { V7 } from "/$bunfs/root/chunk-sawpz2mr.js";
import { ae } from "/$bunfs/root/chunk-223dyewd.js";
import { nt, s, n, Do, xee, kc, Ks } from "/$bunfs/root/chunk-8524cxt8.js";
import { Ry, qt, em, Te, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Eu, Qy, qN } from "/$bunfs/root/chunk-4nfvaqps.js";
import { Qc } from "/$bunfs/root/chunk-p2nmcfaz.js";
import { bi } from "/$bunfs/root/chunk-f3cd9jkn.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { yy } from "/$bunfs/root/chunk-dx2w0vga.js";
import { ib } from "/$bunfs/root/chunk-7hj88wg6.js";
import { mA, pje, gA, pd } from "/$bunfs/root/chunk-wff73y2a.js";
import { nE } from "/$bunfs/root/chunk-86meyjxt.js";
import { A$t, Yq, ZR, Cl, Cee } from "/$bunfs/root/chunk-h8kxxbjq.js";
import { pmt } from "/$bunfs/root/chunk-jpbk4xxw.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
N();
const Ge = 32;
const ne = 2;
const J = 2;
const ge = 2;
const ve = "wrap-trim";
const xe = true;
const ye = qt(undefined);
const Re = qt(false);
function Qe({ children, ...rest }) {
    let d = ns(ke());
    let a = R(null);
    let [l] = y(()=>new Set);
    let b = kc(()=>{
        let [i] = l;
        return i && Ks(i).width || a.current && Ks(a.current).width || d.columns;
    });
    let h = ib();
    let [P] = y(()=>new WeakMap);
    let p = Ry.toArray(children);
    let c = p.filter(Ue);
    let labelColumn = Math.min(Math.max(0, ...c.map((i)=>ae(Cee(i.props.label)))), Math.max(Ge, b - J - ne - Math.max(pmt, ...c.map((i)=>je(i.props.children)))));
    let stacked = b - J - labelColumn - ne < pmt;
    let M = c.filter((i)=>!C(i.props.children, Value));
    let m = Yq(rest.isDisabled);
    let I = stacked ? b - J - ge : b - J - labelColumn - ne;
    let [g, L, S] = pd(undefined);
    let [A, H] = y(undefined);
    let input = R(null);
    let { focusManager } = Te(Qy);
    let editor = yy({
        isActive: true,
        columns: I,
        backspaceExitsOnEmpty: false,
        onExit: ()=>end(true, true),
        onCancel: ()=>end(false),
        onExitUp: ()=>end(true, true),
        onExitDown: ()=>end(true, true)
    });
    function end(i, O = false) {
        let u = S();
        if (u === undefined) {
            return true;
        }
        let x = c.find((D)=>D.key === u.key)?.props.children;
        let current = editor.queryRef.current;
        let reason = i && current !== u.from && C(x, Text) ? x.props.validate?.(current) ?? null : null;
        if (reason !== null && O) {
            H({
                draft: current,
                reason
            });
            return false;
        }
        L(undefined);
        H(undefined);
        if (input.current && focusManager?.activeElement === input.current) {
            focusManager.blur();
        }
        if (!i || reason !== null || !C(x, Text) || x.props.disabled) {
            return true;
        }
        if (current !== u.from) {
            Pe(P, x.props, current);
            x.props.onChange(current);
        }
        return true;
    }
    function B(i) {
        let O = i?.props.children;
        if (!C(O, Text) || O.props.disabled || typeof i?.key !== "string") {
            return wn(O, P);
        }
        let u = {
            key: i.key,
            from: En(O.props, P)
        };
        return {
            accept: ()=>{
                end(true);
                editor.setQuery(u.from);
                L(u);
            }
        };
    }
    let _ = p.map((i, O)=>{
        if (!Ue(i)) {
            if (em(i) && i.type === Cl.Heading) {
                return i;
            }
            return e(Cl.Heading, {
                children: i
            }, em(i) ? i.key : O);
        }
        let { children } = i.props;
        let label = Cee(i.props.label);
        let k = g?.key === i.key && A?.draft === editor.query ? A.reason : undefined;
        let description = k ?? Cee(i.props.description);
        let D = description ? Lt(Eu(description, Math.max(1, b - J), ve), `
`) + 1 : 0;
        let U = !(!m || rest.onDisabledRowClick !== undefined) || g?.key === i.key ? undefined : B(i).accept;
        let we = C(children, Toggle) || C(children, Select) || C(children, Button) ? je(children) : 0;
        let Q = e(Xe, {
            label,
            description,
            refused: k !== undefined,
            onClick: U && (($e)=>{
                if (h($e) || Yq(rest.isDisabled) && rest.onDisabledRowClick === undefined) {
                    return;
                }
                U();
            }),
            labelColumn,
            stacked,
            targetWidth: Math.max(0, Math.min(we, I)),
            rowLines: C(children, Value) ? undefined : l,
            children: e(ye, {
                value: g?.key === i.key && !m && C(children, Text) && !children.props.disabled ? {
                    editor,
                    room: I,
                    input,
                    end
                } : undefined,
                children
            })
        });
        if (C(children, Value)) {
            return e(Cl.Heading, {
                children: Q
            }, i.key);
        }
        return e(Cl.Item, {
            declareCursor: g?.key !== i.key,
            lines: (stacked ? 2 : 1) + D,
            children: Q
        }, i.key);
    });
    if (M.length === 0) {
        return r(s, {
            ref: a,
            flexDirection: "column",
            children: [
                _.length === 0 && rest.emptyMessage && e(n, {
                    dimColor: true,
                    children: rest.emptyMessage
                }),
                _.map((i, O)=>e(gA, {
                        isFocused: false,
                        styled: false,
                        children: i
                    }, em(i) ? i.key : O))
            ]
        });
    }
    let j = e(Cl, {
        ...rest,
        rowClick: "move",
        onFocus: (i)=>{
            if (M[i]?.key !== S()?.key) {
                end(true);
            }
            rest.onFocus?.(i);
        },
        onSelect: (i)=>{
            if (S() !== undefined) {
                end(true, true);
                return;
            }
            B(M[i]).accept?.();
        },
        onRowKeyDown: (i, O)=>{
            if (S() !== undefined) {
                editor.handleKeyDown(i);
                return;
            }
            if (i.ctrl || i.meta) {
                return;
            }
            let u = B(M[O]);
            let x = i.key === " " ? u.accept : i.key === "left" ? u.previous : i.key === "right" ? u.next : undefined;
            if (x === undefined) {
                return;
            }
            i.preventDefault();
            x();
        },
        children: _
    });
    return e(s, {
        ref: a,
        flexDirection: "column",
        children: e(Re, {
            value: m,
            children: j
        })
    });
}
function Xe(o) {
    let g = w(50);
    let { label, description, refused, onClick, labelColumn, stacked, targetWidth, rowLines, children } = o;
    let E = ZR();
    let f = nt();
    let [M, m] = pje(onClick !== undefined);
    let I = Te(A$t);
    if (f) {
        let L;
        if (g[0] !== label) {
            L = r(n, {
                children: [
                    label,
                    ","
                ]
            });
            g[0] = label;
            g[1] = L;
        } else {
            L = g[1];
        }
        let S;
        if (g[2] !== children || g[3] !== L) {
            S = r(s, {
                children: [
                    L,
                    children
                ]
            });
            g[2] = children;
            g[3] = L;
            g[4] = S;
        } else {
            S = g[4];
        }
        let A;
        if (g[5] !== description) {
            A = description && e(n, {
                children: description
            });
            g[5] = description;
            g[6] = A;
        } else {
            A = g[6];
        }
        let H;
        if (g[7] !== S || g[8] !== A) {
            H = r(s, {
                flexDirection: "column",
                children: [
                    S,
                    A
                ]
            });
            g[7] = S;
            g[8] = A;
            g[9] = H;
        } else {
            H = g[9];
        }
        return H;
    }
    let L;
    if (g[10] !== rowLines) {
        L = (V)=>{
            let q = V?.parentNode;
            if (!rowLines || !q) {
                return;
            }
            rowLines.add(q);
            return ()=>{
                rowLines.delete(q);
            };
        };
        g[10] = rowLines;
        g[11] = L;
    } else {
        L = g[11];
    }
    const flexDirection = stacked ? "column" : "row";
    const width = stacked ? undefined : labelColumn;
    const marginRight = stacked ? 0 : ne;
    const W = E ? "suggestion" : undefined;
    let T;
    if (g[12] !== label || g[13] !== W) {
        T = e(n, {
            color: W,
            wrap: "truncate-end",
            children: label
        });
        g[12] = label;
        g[13] = W;
        g[14] = T;
    } else {
        T = g[14];
    }
    let B;
    if (g[15] !== width || g[16] !== marginRight || g[17] !== T) {
        B = e(s, {
            width,
            marginRight,
            flexShrink: 0,
            children: T
        });
        g[15] = width;
        g[16] = marginRight;
        g[17] = T;
        g[18] = B;
    } else {
        B = g[18];
    }
    const paddingLeft = stacked ? ge : 0;
    const backgroundColor = M ? mA : undefined;
    let onClick_1;
    if (g[19] !== I || g[20] !== onClick) {
        onClick_1 = onClick && ((O)=>{
            if (!I(O)) {
                onClick(O);
            }
        });
        g[19] = I;
        g[20] = onClick;
        g[21] = onClick_1;
    } else {
        onClick_1 = g[21];
    }
    let onMouseEnter;
    if (g[22] !== onClick || g[23] !== m) {
        onMouseEnter = onClick && (()=>m(true));
        g[22] = onClick;
        g[23] = m;
        g[24] = onMouseEnter;
    } else {
        onMouseEnter = g[24];
    }
    let onMouseLeave;
    if (g[25] !== onClick || g[26] !== m) {
        onMouseLeave = onClick && (()=>m(false));
        g[25] = onClick;
        g[26] = m;
        g[27] = onMouseLeave;
    } else {
        onMouseLeave = g[27];
    }
    let k;
    if (g[28] !== children || g[29] !== onClick_1 || g[30] !== onMouseEnter || g[31] !== onMouseLeave || g[32] !== backgroundColor || g[33] !== targetWidth) {
        k = e(s, {
            minWidth: targetWidth,
            backgroundColor,
            onClick: onClick_1,
            onMouseEnter,
            onMouseLeave,
            children
        });
        g[28] = children;
        g[29] = onClick_1;
        g[30] = onMouseEnter;
        g[31] = onMouseLeave;
        g[32] = backgroundColor;
        g[33] = targetWidth;
        g[34] = k;
    } else {
        k = g[34];
    }
    let v;
    if (g[35] !== k || g[36] !== paddingLeft) {
        v = e(s, {
            paddingLeft,
            children: k
        });
        g[35] = k;
        g[36] = paddingLeft;
        g[37] = v;
    } else {
        v = g[37];
    }
    let D;
    if (g[38] !== v || g[39] !== flexDirection || g[40] !== B) {
        D = r(s, {
            flexDirection,
            children: [
                B,
                v
            ]
        });
        g[38] = v;
        g[39] = flexDirection;
        g[40] = B;
        g[41] = D;
    } else {
        D = g[41];
    }
    let K;
    if (g[42] !== description || g[43] !== refused || g[44] !== rowLines) {
        K = description && e(n, {
            dimColor: !refused,
            color: refused ? "error" : undefined,
            wrap: rowLines === undefined ? "truncate-end" : ve,
            children: description
        });
        g[42] = description;
        g[43] = refused;
        g[44] = rowLines;
        g[45] = K;
    } else {
        K = g[45];
    }
    let U;
    if (g[46] !== L || g[47] !== D || g[48] !== K) {
        U = r(s, {
            ref: L,
            flexDirection: "column",
            children: [
                D,
                K
            ]
        });
        g[46] = L;
        g[47] = D;
        g[48] = K;
        g[49] = U;
    } else {
        U = g[49];
    }
    return U;
}
function F(o) {
    let E = w(15);
    let { spoken, disabled, before, after, children } = o;
    let dimColor = disabled === undefined ? false : disabled;
    let P = ZR();
    if (nt()) {
        const c = dimColor && ", unavailable";
        let f;
        if (E[0] !== spoken || E[1] !== c) {
            f = r(n, {
                children: [
                    spoken,
                    c
                ]
            });
            E[0] = spoken;
            E[1] = c;
            E[2] = f;
        } else {
            f = E[2];
        }
        return f;
    }
    let c;
    if (E[3] !== before) {
        c = before && e(n, {
            dimColor: true,
            children: before
        });
        E[3] = before;
        E[4] = c;
    } else {
        c = E[4];
    }
    const f = P && !dimColor ? "suggestion" : undefined;
    let M;
    if (E[5] !== children || E[6] !== f) {
        M = e(n, {
            color: f,
            children
        });
        E[5] = children;
        E[6] = f;
        E[7] = M;
    } else {
        M = E[7];
    }
    let m;
    if (E[8] !== after) {
        m = after && e(n, {
            dimColor: true,
            children: after
        });
        E[8] = after;
        E[9] = m;
    } else {
        m = E[9];
    }
    let I;
    if (E[10] !== dimColor || E[11] !== c || E[12] !== M || E[13] !== m) {
        I = r(n, {
            dimColor,
            wrap: "truncate-end",
            children: [
                c,
                M,
                m
            ]
        });
        E[10] = dimColor;
        E[11] = c;
        E[12] = M;
        E[13] = m;
        E[14] = I;
    } else {
        I = E[14];
    }
    return I;
}
function Field(o) {
    let d = w(2);
    let { children } = o;
    let a;
    if (d[0] !== children) {
        a = e(Y, {
            children
        });
        d[0] = children;
        d[1] = a;
    } else {
        a = d[1];
    }
    return a;
}
function Toggle(o) {
    let b = w(4);
    let { value, disabled } = o;
    const a = String(value);
    const l = String(value);
    let h;
    if (b[0] !== disabled || b[1] !== a || b[2] !== l) {
        h = e(F, {
            spoken: a,
            disabled,
            children: l
        });
        b[0] = disabled;
        b[1] = a;
        b[2] = l;
        b[3] = h;
    } else {
        h = b[3];
    }
    return h;
}
function Select(o) {
    let h = w(8);
    let { value, options, disabled } = o;
    let l = Te(Re);
    let b = ZR();
    let P;
    if (h[0] !== options || h[1] !== value) {
        P = options.find((p)=>p.value === value)?.label ?? value;
        h[0] = options;
        h[1] = value;
        h[2] = P;
    } else {
        P = h[2];
    }
    let c = P;
    let E = !disabled && !l && (b || !xe);
    const before = E ? "‹ " : undefined;
    const M = E ? " ›" : undefined;
    let m;
    if (h[3] !== disabled || h[4] !== c || h[5] !== before || h[6] !== M) {
        m = e(F, {
            spoken: c,
            disabled,
            before,
            after: M,
            children: c
        });
        h[3] = disabled;
        h[4] = c;
        h[5] = before;
        h[6] = M;
        h[7] = m;
    } else {
        m = h[7];
    }
    return m;
}
function Link(o) {
    let b = w(5);
    let { children, disabled } = o;
    const a = children ? `${children}, opens` : "opens";
    const l = children ? " ›" : "›";
    let h;
    if (b[0] !== children || b[1] !== disabled || b[2] !== a || b[3] !== l) {
        h = e(F, {
            spoken: a,
            disabled,
            after: l,
            children
        });
        b[0] = children;
        b[1] = disabled;
        b[2] = a;
        b[3] = l;
        b[4] = h;
    } else {
        h = b[4];
    }
    return h;
}
function Button(o) {
    let l = w(4);
    let { children, disabled } = o;
    const a = children ? `${children}, button` : "button";
    let b;
    if (l[0] !== children || l[1] !== disabled || l[2] !== a) {
        b = e(F, {
            spoken: a,
            disabled,
            children
        });
        l[0] = children;
        l[1] = disabled;
        l[2] = a;
        l[3] = b;
    } else {
        b = l[3];
    }
    return b;
}
function Value(o) {
    let l = w(6);
    let { children, disabled } = o;
    const a = children || "empty";
    let b;
    if (l[0] !== children) {
        b = children || e(n, {
            dimColor: true,
            children: "—"
        });
        l[0] = children;
        l[1] = b;
    } else {
        b = l[1];
    }
    let h;
    if (l[2] !== disabled || l[3] !== a || l[4] !== b) {
        h = e(F, {
            spoken: a,
            disabled,
            children: b
        });
        l[2] = disabled;
        l[3] = a;
        l[4] = b;
        l[5] = h;
    } else {
        h = l[5];
    }
    return h;
}
function Text(o) {
    let p = w(75);
    let { value, placeholder, disabled } = o;
    let l = Te(ye);
    let b = nt();
    let h = Qc();
    if (l === undefined) {
        const P = `${value || "empty"}, edit text`;
        let c;
        if (p[0] !== placeholder || p[1] !== value) {
            c = value || e(n, {
                dimColor: true,
                children: placeholder
            });
            p[0] = placeholder;
            p[1] = value;
            p[2] = c;
        } else {
            c = p[2];
        }
        let E;
        if (p[3] !== disabled || p[4] !== P || p[5] !== c) {
            E = e(F, {
                spoken: P,
                disabled,
                children: c
            });
            p[3] = disabled;
            p[4] = P;
            p[5] = c;
            p[6] = E;
        } else {
            E = p[6];
        }
        return E;
    }
    let { editor, input, end } = l;
    let I;
    let g;
    let L;
    let S;
    let A;
    let P;
    let scope;
    let bindings;
    let wrap;
    let E;
    let q;
    let autoFocus;
    let caret;
    let onKeyDown;
    let onPaste;
    let onBlur;
    if (p[7] !== l.room || p[8] !== editor || p[9] !== end || p[10] !== input || p[11] !== b || p[12] !== h) {
        let i = bi.fromText(editor.query, l.room, editor.cursorOffset);
        let O = h && !b && !qN() ? " " : "";
        let u;
        if (p[29] !== end) {
            u = ()=>{
                if (end(true, true)) {
                    return false;
                }
            };
            p[29] = end;
            p[30] = u;
        } else {
            u = p[30];
        }
        let run = u;
        A = nE;
        scope = "Select";
        let k;
        if (p[31] !== end) {
            k = {
                action: "select:cancel",
                run: ()=>{
                    end(false);
                }
            };
            p[31] = end;
            p[32] = k;
        } else {
            k = p[32];
        }
        let v;
        if (p[33] !== editor) {
            v = {
                action: "select:first",
                run: ()=>editor.setCursorOffset(0)
            };
            p[33] = editor;
            p[34] = v;
        } else {
            v = p[34];
        }
        let D;
        if (p[35] !== editor) {
            D = {
                action: "select:last",
                run: ()=>editor.setCursorOffset(editor.queryRef.current.length)
            };
            p[35] = editor;
            p[36] = D;
        } else {
            D = p[36];
        }
        let K;
        let U;
        if (p[37] !== run) {
            K = {
                action: "select:previous",
                run
            };
            U = {
                action: "select:next",
                run
            };
            p[37] = run;
            p[38] = K;
            p[39] = U;
        } else {
            K = p[38];
            U = p[39];
        }
        if (p[40] !== k || p[41] !== v || p[42] !== D || p[43] !== K || p[44] !== U) {
            bindings = [
                k,
                v,
                D,
                K,
                U
            ];
            p[40] = k;
            p[41] = v;
            p[42] = D;
            p[43] = K;
            p[44] = U;
            p[45] = bindings;
        } else {
            bindings = p[45];
        }
        S = s;
        if (p[46] !== end) {
            onBlur = (we)=>end(we.relatedTarget !== null);
            p[46] = end;
            p[47] = onBlur;
        } else {
            onBlur = p[47];
        }
        L = xee;
        q = input;
        autoFocus = true;
        caret = {
            line: 0,
            column: i.getPosition().column,
            visible: true
        };
        if (p[48] !== editor) {
            onKeyDown = (Q)=>{
                editor.handleKeyDown(Q);
                if (Q.defaultPrevented) {
                    Q.stopImmediatePropagation();
                }
            };
            p[48] = editor;
            p[49] = onKeyDown;
        } else {
            onKeyDown = p[49];
        }
        onPaste = editor.handlePaste;
        g = n;
        wrap = "truncate-end";
        E = true;
        I = Do;
        P = i.render(O, "", V7, undefined, 1, undefined, undefined, b);
        p[7] = l.room;
        p[8] = editor;
        p[9] = end;
        p[10] = input;
        p[11] = b;
        p[12] = h;
        p[13] = I;
        p[14] = g;
        p[15] = L;
        p[16] = S;
        p[17] = A;
        p[18] = P;
        p[19] = scope;
        p[20] = bindings;
        p[21] = wrap;
        p[22] = E;
        p[23] = q;
        p[24] = autoFocus;
        p[25] = caret;
        p[26] = onKeyDown;
        p[27] = onPaste;
        p[28] = onBlur;
    } else {
        I = p[13];
        g = p[14];
        L = p[15];
        S = p[16];
        A = p[17];
        P = p[18];
        scope = p[19];
        bindings = p[20];
        wrap = p[21];
        E = p[22];
        q = p[23];
        autoFocus = p[24];
        caret = p[25];
        onKeyDown = p[26];
        onPaste = p[27];
        onBlur = p[28];
    }
    let u;
    if (p[50] !== I || p[51] !== P) {
        u = e(I, {
            children: P
        });
        p[50] = I;
        p[51] = P;
        p[52] = u;
    } else {
        u = p[52];
    }
    let k;
    if (p[53] !== g || p[54] !== u || p[55] !== wrap || p[56] !== E) {
        k = e(g, {
            wrap,
            "aria-preserve-whitespace": E,
            children: u
        });
        p[53] = g;
        p[54] = u;
        p[55] = wrap;
        p[56] = E;
        p[57] = k;
    } else {
        k = p[57];
    }
    let v;
    if (p[58] !== L || p[59] !== k || p[60] !== q || p[61] !== autoFocus || p[62] !== caret || p[63] !== onKeyDown || p[64] !== onPaste) {
        v = e(L, {
            ref: q,
            autoFocus,
            caret,
            onKeyDown,
            onPaste,
            children: k
        });
        p[58] = L;
        p[59] = k;
        p[60] = q;
        p[61] = autoFocus;
        p[62] = caret;
        p[63] = onKeyDown;
        p[64] = onPaste;
        p[65] = v;
    } else {
        v = p[65];
    }
    let D;
    if (p[66] !== S || p[67] !== v || p[68] !== onBlur) {
        D = e(S, {
            onBlur,
            children: v
        });
        p[66] = S;
        p[67] = v;
        p[68] = onBlur;
        p[69] = D;
    } else {
        D = p[69];
    }
    let K;
    if (p[70] !== A || p[71] !== scope || p[72] !== bindings || p[73] !== D) {
        K = e(A, {
            scope,
            bindings,
            children: D
        });
        p[70] = A;
        p[71] = scope;
        p[72] = bindings;
        p[73] = D;
        p[74] = K;
    } else {
        K = p[74];
    }
    return K;
}
function je(o) {
    if (C(o, Toggle)) {
        return ae("false");
    }
    if (C(o, Select)) {
        return Math.max(0, ...o.props.options.map((t)=>ee(t.label))) + (o.props.disabled ? 0 : ae("‹  ›"));
    }
    if (C(o, Link)) {
        let { children } = o.props;
        if (children) {
            return ee(children) + ae(" ›");
        }
        return ae("›");
    }
    if (C(o, Button)) {
        return ee(o.props.children ?? "");
    }
    if (C(o, Value)) {
        return ee(o.props.children || "—");
    }
    if (C(o, Text)) {
        return ee(o.props.value || (o.props.placeholder ?? "")) + 1;
    }
    return 0;
}
function LLo(o) {
    let t = Cee(o);
    return 2 + (t ? Lt(t, " ") + 1 : 0);
}
function ee(o) {
    return Math.max(0, ...o.split(`
`).map((t)=>ae(t)));
}
function wn(o, t) {
    if (C(o, Toggle) && !o.props.disabled) {
        let d = xn.bind(undefined, o.props, t);
        return {
            accept: d,
            previous: d,
            next: d
        };
    }
    if (C(o, Select) && !o.props.disabled) {
        let { props } = o;
        let a = (l)=>()=>{
                let length = props.options.length;
                let h = props.options.findIndex((c)=>c.value === (t.get(props) ?? props.value));
                let P = Math.max(h, l === 1 ? -1 : 0);
                let p = props.options[(P + l + length) % length];
                if (p === undefined) {
                    return;
                }
                Pe(t, props, p.value);
                props.onChange(p.value);
            };
        return {
            accept: a(1),
            next: a(1),
            previous: a(-1)
        };
    }
    if (C(o, Link) && !o.props.disabled) {
        return {
            accept: o.props.onOpen,
            next: o.props.onOpen
        };
    }
    if (C(o, Button) && !o.props.disabled) {
        return {
            accept: o.props.onPress
        };
    }
    return {};
}
function xn(o, t) {
    let d = !(t.get(o) ?? o.value);
    Pe(t, o, d);
    o.onChange(d);
}
function Pe(o, t, d) {
    o.set(t, d);
    queueMicrotask(()=>o.delete(t));
}
function En(props, t) {
    let d = t.get(props);
    if (typeof d === "string") {
        return d;
    }
    return props.value;
}
function Ue(o) {
    return em(o) && o.type === Field;
}
function C(o, t) {
    return em(o) && o.type === t;
}
const ch = Object.assign(Qe, {
    Field,
    Toggle,
    Select,
    Text,
    Link,
    Button,
    Value
});
export { LLo, ch };
