import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { vy } from "/$bunfs/root/chunk-gq8z4r72.js";
import { Qc } from "/$bunfs/root/chunk-p2nmcfaz.js";
import { V7, ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { on, nt, s, n, Do, xee, ia } from "/$bunfs/root/chunk-8524cxt8.js";
import { qN } from "/$bunfs/root/chunk-4nfvaqps.js";
import { Eo } from "/$bunfs/root/chunk-4b1qzs5x.js";
import { hr } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { P, Z, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { $h, H$t, jmt, WXe } from "/$bunfs/root/chunk-f3cd9jkn.js";
import { z3r, G3r } from "/$bunfs/root/chunk-kasbfbhj.js";
import { dve, vu } from "/$bunfs/root/chunk-0v20st7x.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { Wn } from "/$bunfs/root/chunk-4j5kjctm.js";
import { g3o } from "/$bunfs/root/chunk-t1d2nw6r.js";
import { gb } from "/$bunfs/root/chunk-dmmzcg0b.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function Tdn(t, h) {
    let [i] = y(()=>t.map((d)=>{
            let g = d.setup();
            return {
                effect: typeof g === "function" ? g : g.effect,
                dispose: typeof g === "function" ? undefined : g.dispose,
                deps: null,
                cleanup: undefined
            };
        }));
    let p = R(h);
    P(()=>{
        p.current = h;
        let d = ()=>p.current;
        let g = [];
        t.forEach((c, o)=>{
            let slot_1 = i[o];
            if (!slot_1) {
                return;
            }
            let deps_1 = c.deps ? c.deps(h) : [];
            if (slot_1.deps !== null && ze(slot_1.deps, deps_1)) {
                return;
            }
            g.push({
                slot: slot_1,
                deps: deps_1
            });
        });
        for (let { slot } of g){
            slot.cleanup?.();
            slot.cleanup = undefined;
        }
        for (let { slot, deps } of g){
            slot.deps = deps;
            slot.cleanup = slot.effect(h, d);
        }
    });
    P(()=>()=>{
            for (let d of i){
                d.cleanup?.();
                d.cleanup = undefined;
                d.deps = null;
                d.dispose?.();
            }
        }, [
        i
    ]);
}
function ze(deps, h) {
    if (deps.length !== h.length) {
        return false;
    }
    for(let i = 0; i < deps.length; i++){
        if (!Object.is(deps[i], h[i])) {
            return false;
        }
    }
    return true;
}
N();
const key = "clipboard-image-hint";
const Qe = 1000;
const Ze = 30000;
const He = {
    id: "clipboard-image-hint",
    deps: (t)=>[
            t.isTerminalFocused,
            t.canPasteImages,
            t.addNotification,
            t.clock
        ],
    setup () {
        let t = null;
        let h = 0;
        let i = null;
        return ({ isTerminalFocused, canPasteImages, addNotification, clock })=>{
            let o = t ?? isTerminalFocused;
            t = isTerminalFocused;
            if (!canPasteImages || !isTerminalFocused || o) {
                return;
            }
            i?.();
            i = clock.setTimeout(async ()=>{
                i = null;
                let u = Date.now();
                if (u - h < Ze) {
                    return;
                }
                if (await g3o()) {
                    h = u;
                    addNotification({
                        key,
                        kind: "contextual",
                        text: `Image in clipboard \xB7 ${gb("chat:imagePaste", "Chat", "ctrl+v")} to paste`,
                        priority: "immediate",
                        timeoutMs: 8000
                    });
                }
            }, Qe);
            return ()=>{
                i?.();
                i = null;
            };
        };
    }
};
const et = [
    He
];
function Adn({ isTerminalFocused, canPasteImages }) {
    let { addNotification } = Eo();
    let clock = on();
    Tdn(et, {
        isTerminalFocused,
        canPasteImages,
        addNotification,
        clock
    });
}
N();
N();
function Bmt(t) {
    let C = w(3);
    let { char, index, glimmerIndex, messageColor, shimmerColor } = t;
    let c = index === glimmerIndex;
    let o = Math.abs(index - glimmerIndex) === 1;
    const color = c || o ? shimmerColor : messageColor;
    let k;
    if (C[0] !== char || C[1] !== color) {
        k = e(n, {
            color,
            children: char
        });
        C[0] = char;
        C[1] = color;
        C[2] = k;
    } else {
        k = C[2];
    }
    return k;
}
function Pt(Te) {
    return Te.shimmerColor;
}
function Q(t) {
    let p = w(23);
    let { text, highlights } = t;
    let lines_1;
    if (p[0] !== highlights || p[1] !== text) {
        let g = G3r(text, highlights);
        lines_1 = [
            []
        ];
        let start = 0;
        for (const o of g){
            let u = o.text.split(`
`);
            for(let f = 0; f < u.length; f++){
                if (f > 0) {
                    lines_1.push([]);
                    start = start + 1;
                }
                let text_1 = u[f];
                if (text_1.length > 0) {
                    lines_1.at(-1).push({
                        text: text_1,
                        highlight: o.highlight,
                        start
                    });
                }
                start = start + text_1.length;
            }
        }
        p[0] = highlights;
        p[1] = text;
        p[2] = lines_1;
    } else {
        lines_1 = p[2];
    }
    let k;
    if (p[3] !== highlights) {
        k = highlights.some(Pt);
        p[3] = highlights;
        p[4] = k;
    } else {
        k = p[4];
    }
    let hasShimmer_1 = k;
    let sweepStart_1 = 0;
    let cycleLength_1 = 1;
    if (hasShimmer_1) {
        let v = Infinity;
        let T = -Infinity;
        if (p[5] !== T || p[6] !== highlights || p[7] !== v) {
            for (const F of highlights){
                if (F.shimmerColor) {
                    v = Math.min(v, F.start);
                    T = Math.max(T, F.end);
                }
            }
            p[5] = T;
            p[6] = highlights;
            p[7] = v;
            p[8] = v;
            p[9] = T;
        } else {
            v = p[8];
            T = p[9];
        }
        sweepStart_1 = v - 10;
        cycleLength_1 = T - v + 20;
    }
    let j;
    if (p[10] !== cycleLength_1 || p[11] !== hasShimmer_1 || p[12] !== lines_1 || p[13] !== sweepStart_1) {
        j = {
            lines: lines_1,
            hasShimmer: hasShimmer_1,
            sweepStart: sweepStart_1,
            cycleLength: cycleLength_1
        };
        p[10] = cycleLength_1;
        p[11] = hasShimmer_1;
        p[12] = lines_1;
        p[13] = sweepStart_1;
        p[14] = j;
    } else {
        j = p[14];
    }
    let { lines, hasShimmer, sweepStart, cycleLength } = j;
    let ve = vu();
    let L = hasShimmer && !ve;
    let [B, re] = ia(L ? 50 : null);
    let glimmerIndex = L ? sweepStart + Math.floor(re / 50) % cycleLength : dve;
    let U;
    if (p[15] !== glimmerIndex || p[16] !== lines) {
        let O;
        if (p[18] !== glimmerIndex) {
            O = (_, ie)=>e(s, {
                    children: _.length === 0 ? e(n, {
                        children: " "
                    }) : _.map((m, M)=>{
                        if (m.highlight?.shimmerColor && m.highlight.color) {
                            return e(n, {
                                children: m.text.split("").map((char, H)=>e(Bmt, {
                                        char,
                                        index: m.start + H,
                                        glimmerIndex,
                                        messageColor: m.highlight.color,
                                        shimmerColor: m.highlight.shimmerColor
                                    }, H))
                            }, M);
                        }
                        return e(n, {
                            color: m.highlight?.color,
                            backgroundColor: m.highlight?.backgroundColor,
                            dimColor: m.highlight?.dimColor,
                            bold: m.highlight?.bold,
                            italic: m.highlight?.italic,
                            underline: m.highlight?.underline,
                            strikethrough: m.highlight?.strikethrough,
                            children: e(Do, {
                                children: m.text
                            })
                        }, M);
                    })
                }, ie);
            p[18] = glimmerIndex;
            p[19] = O;
        } else {
            O = p[19];
        }
        U = lines.map(O);
        p[15] = glimmerIndex;
        p[16] = lines;
        p[17] = U;
    } else {
        U = p[17];
    }
    let O;
    if (p[20] !== B || p[21] !== U) {
        O = e(s, {
            ref: B,
            flexDirection: "column",
            children: U
        });
        p[20] = B;
        p[21] = U;
        p[22] = O;
    } else {
        O = p[22];
    }
    return O;
}
function M$t(t) {
    let j = w(7);
    let { inputState, children, terminalFocus, invert, hidePlaceholderText, cursorCellPainted, ...rest } = t;
    let { handleKeyDown, renderedValue, cursorLine, cursorColumn } = inputState;
    let caret = rest.focus && rest.showCursor && rest.parkCursor !== false ? {
        line: cursorLine,
        column: cursorColumn,
        visible: !cursorCellPainted
    } : undefined;
    let { handleKeyDown: handleKeyDown_1, handlePaste, isPasting } = WXe({
        onPaste: rest.onPaste,
        handleKeyDown: (b)=>{
            rest.onKeyDownBefore?.(b);
            if (b.defaultPrevented || b.didStopImmediatePropagation()) {
                return;
            }
            handleKeyDown(b);
        },
        onImagePaste: rest.onImagePaste
    });
    let { onIsPastingChange } = rest;
    P(()=>{
        if (onIsPastingChange) {
            onIsPastingChange(isPasting);
        }
    }, [
        isPasting,
        onIsPastingChange
    ]);
    let K;
    if (j[0] === S) {
        K = qN();
        j[0] = K;
    } else {
        K = j[0];
    }
    let Ie = K;
    let be = nt();
    let { showPlaceholder, renderedPlaceholder } = Xe({
        placeholder: rest.placeholder,
        value: rest.value,
        showCursor: rest.showCursor && !Ie,
        focus: rest.focus,
        terminalFocus,
        invert,
        hidePlaceholderText: hidePlaceholderText || be
    });
    let L = showPlaceholder ? renderedPlaceholder : undefined;
    let autoFocus = rest.focus !== false;
    let ref = R(null);
    $h(ref, autoFocus);
    let E = {
        ref,
        autoFocus,
        disabled: !autoFocus,
        caret,
        onKeyDown: handleKeyDown_1,
        onPaste: handlePaste,
        allowPrintableKeybindings: rest.allowPrintableKeybindings
    };
    let U = rest.value && rest.value.trim().indexOf(" ") === -1 || rest.value && rest.value.endsWith(" ");
    let O = Boolean(rest.argumentHint && rest.value && U && rest.value.startsWith("/"));
    let ie = rest.showCursor && rest.highlights ? rest.highlights.filter((_)=>_.dimColor || rest.cursorOffset < _.start || rest.cursorOffset >= _.end) : rest.highlights;
    let m = rest.leadingPill?.text ?? "";
    let V = m ? [
        {
            start: 0,
            end: m.length - 1,
            color: "ide",
            priority: 30
        },
        ...(ie ?? []).map((M)=>({
                ...M,
                start: M.start + m.length,
                end: M.end + m.length
            }))
    ] : ie;
    let highlights = V && V.length > 0 ? z3r(V, renderedValue, inputState.renderedRowStartOffsets) : V;
    if (highlights && highlights.length > 0 && !L) {
        return r(xee, {
            ...E,
            children: [
                e(s, {
                    flexShrink: 0,
                    "aria-preserve-whitespace": true,
                    children: e(Q, {
                        text: renderedValue,
                        highlights
                    })
                }),
                O && r(n, {
                    dimColor: true,
                    wrap: "truncate-end",
                    children: [
                        rest.value?.endsWith(" ") ? "" : " ",
                        rest.argumentHint
                    ]
                }),
                children
            ]
        });
    }
    const W = n;
    const wrap = "truncate-end";
    const rest_dimColor = rest.dimColor;
    const q = L ? r(Y, {
        children: [
            m ? e(n, {
                color: "ide",
                children: m
            }) : null,
            e(Do, {
                children: L
            })
        ]
    }) : e(n, {
        "aria-preserve-whitespace": true,
        children: e(Do, {
            children: renderedValue
        })
    });
    const se = O && r(n, {
        dimColor: true,
        children: [
            rest.value?.endsWith(" ") ? "" : " ",
            rest.argumentHint
        ]
    });
    let we;
    if (j[1] !== W || j[2] !== children || j[3] !== rest || j[4] !== q || j[5] !== se) {
        we = r(W, {
            wrap,
            dimColor: rest_dimColor,
            children: [
                q,
                se,
                children
            ]
        });
        j[1] = W;
        j[2] = children;
        j[3] = rest;
        j[4] = q;
        j[5] = se;
        j[6] = we;
    } else {
        we = j[6];
    }
    return e(xee, {
        ...E,
        children: we
    });
}
function Xe({ placeholder, value, showCursor, focus, terminalFocus = true, invert = V7, hidePlaceholderText = false }) {
    let renderedPlaceholder;
    if (placeholder) {
        if (hidePlaceholderText) {
            renderedPlaceholder = showCursor && focus && terminalFocus ? invert(" ") : "";
        } else {
            renderedPlaceholder = ge.dim(placeholder);
            if (showCursor && focus && terminalFocus) {
                renderedPlaceholder = placeholder.length > 0 ? invert(placeholder[0]) + ge.dim(placeholder.slice(1)) : invert(" ");
            }
        }
    }
    let showPlaceholder = value.length === 0 && Boolean(placeholder);
    return {
        renderedPlaceholder,
        showPlaceholder
    };
}
function qt(se) {
    return se.voiceState;
}
function Xt(we) {
    return we;
}
function Yt($t) {
    return $t;
}
function Sr(t) {
    let p = w(56);
    let [h] = hr();
    let i = Qc();
    let d;
    if (p[0] === S) {
        d = qN();
        p[0] = d;
    } else {
        d = p[0];
    }
    let g = d;
    let preserveTrailingWhitespace = nt();
    let hidePlaceholderText = vy(qt) === "recording";
    let [f, C] = jmt();
    const canPasteImages = !!t.onImagePaste;
    let D;
    if (p[1] !== i || p[2] !== canPasteImages) {
        D = {
            isTerminalFocused: i,
            canPasteImages
        };
        p[1] = i;
        p[2] = canPasteImages;
        p[3] = D;
    } else {
        D = p[3];
    }
    Adn(D);
    let b;
    if (p[4] !== C || p[5] !== i) {
        b = !i ? Xt : C ? ()=>ge.hex(C.hex)(C.char) : g ? Yt : V7;
        p[4] = C;
        p[5] = i;
        p[6] = b;
    } else {
        b = p[6];
    }
    let invert = b;
    const { value, onChange, onSubmit, onExit, onExitMessage, onEscapeMessage, historyOnClear, onLeftArrowOnEmpty, leftArrowConfirmHint, onHistoryReset, onHistoryUp, onHistoryDown, focus, mask, multiline, disableBackslashReturn, clearOnSubmit, disableCtrlCClear } = t;
    const cursorChar = t.showCursor && !preserveTrailingWhitespace ? " " : "";
    const t_highlightPastedText = t.highlightPastedText;
    let themeText;
    if (p[7] !== h) {
        themeText = Wn("text", h);
        p[7] = h;
        p[8] = themeText;
    } else {
        themeText = p[8];
    }
    let Te;
    if (p[9] !== invert || p[10] !== preserveTrailingWhitespace || p[11] !== t.clearOnSubmit || p[12] !== t.columns || p[13] !== t.cursorOffset || p[14] !== t.disableBackslashReturn || p[15] !== t.disableCtrlCClear || p[16] !== t.disableCursorMovementForUpDownKeys || p[17] !== t.disableEscapeDoublePress || p[18] !== t.editRelay || p[19] !== t.focus || p[20] !== t.getInputMode || p[21] !== t.getPastedContents || p[22] !== t.highlightPastedText || p[23] !== t.historyOnClear || p[24] !== t.inlineGhostText || p[25] !== t.inputFilter || p[26] !== t.leadingPill || p[27] !== t.leftArrowConfirmHint || p[28] !== t.mask || p[29] !== t.maxVisibleLines || p[30] !== t.multiline || p[31] !== t.onChange || p[32] !== t.onChangeCursorOffset || p[33] !== t.onEscapeMessage || p[34] !== t.onExit || p[35] !== t.onExitMessage || p[36] !== t.onHistoryDown || p[37] !== t.onHistoryReset || p[38] !== t.onHistoryUp || p[39] !== t.onImagePaste || p[40] !== t.onLeftArrowOnEmpty || p[41] !== t.onSubmit || p[42] !== t.value || p[43] !== cursorChar || p[44] !== themeText) {
        Te = {
            value,
            onChange,
            onSubmit,
            onExit,
            onExitMessage,
            onEscapeMessage,
            historyOnClear,
            onLeftArrowOnEmpty,
            leftArrowConfirmHint,
            onHistoryReset,
            onHistoryUp,
            onHistoryDown,
            focus,
            mask,
            multiline,
            disableBackslashReturn,
            clearOnSubmit,
            disableCtrlCClear,
            cursorChar,
            preserveTrailingWhitespace,
            highlightPastedText: t_highlightPastedText,
            invert,
            themeText,
            columns: t.columns,
            leadingPill: t.leadingPill,
            maxVisibleLines: t.maxVisibleLines,
            onImagePaste: t.onImagePaste,
            disableCursorMovementForUpDownKeys: t.disableCursorMovementForUpDownKeys,
            disableEscapeDoublePress: t.disableEscapeDoublePress,
            externalOffset: t.cursorOffset,
            onOffsetChange: t.onChangeCursorOffset,
            inputFilter: t.inputFilter,
            editRelay: t.editRelay,
            getPastedContents: t.getPastedContents,
            getInputMode: t.getInputMode,
            inlineGhostText: t.inlineGhostText,
            dim: ge.dim
        };
        p[9] = invert;
        p[10] = preserveTrailingWhitespace;
        p[11] = t.clearOnSubmit;
        p[12] = t.columns;
        p[13] = t.cursorOffset;
        p[14] = t.disableBackslashReturn;
        p[15] = t.disableCtrlCClear;
        p[16] = t.disableCursorMovementForUpDownKeys;
        p[17] = t.disableEscapeDoublePress;
        p[18] = t.editRelay;
        p[19] = t.focus;
        p[20] = t.getInputMode;
        p[21] = t.getPastedContents;
        p[22] = t.highlightPastedText;
        p[23] = t.historyOnClear;
        p[24] = t.inlineGhostText;
        p[25] = t.inputFilter;
        p[26] = t.leadingPill;
        p[27] = t.leftArrowConfirmHint;
        p[28] = t.mask;
        p[29] = t.maxVisibleLines;
        p[30] = t.multiline;
        p[31] = t.onChange;
        p[32] = t.onChangeCursorOffset;
        p[33] = t.onEscapeMessage;
        p[34] = t.onExit;
        p[35] = t.onExitMessage;
        p[36] = t.onHistoryDown;
        p[37] = t.onHistoryReset;
        p[38] = t.onHistoryUp;
        p[39] = t.onImagePaste;
        p[40] = t.onLeftArrowOnEmpty;
        p[41] = t.onSubmit;
        p[42] = t.value;
        p[43] = cursorChar;
        p[44] = themeText;
        p[45] = Te;
    } else {
        Te = p[45];
    }
    let inputState = H$t(Te);
    const cursorCellPainted = C != null;
    let G;
    if (p[46] !== invert || p[47] !== i || p[48] !== hidePlaceholderText || p[49] !== t || p[50] !== cursorCellPainted || p[51] !== inputState) {
        G = e(M$t, {
            inputState,
            terminalFocus: i,
            highlights: t.highlights,
            invert,
            hidePlaceholderText,
            cursorCellPainted,
            ...t
        });
        p[46] = invert;
        p[47] = i;
        p[48] = hidePlaceholderText;
        p[49] = t;
        p[50] = cursorCellPainted;
        p[51] = inputState;
        p[52] = G;
    } else {
        G = p[52];
    }
    let q;
    if (p[53] !== f || p[54] !== G) {
        q = e(s, {
            ref: f,
            children: G
        });
        p[53] = f;
        p[54] = G;
        p[55] = q;
    } else {
        q = p[55];
    }
    return q;
}
export { Tdn, Adn, Bmt, M$t, Sr };
