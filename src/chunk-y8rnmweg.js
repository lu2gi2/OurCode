import { $h } from "/$bunfs/root/chunk-f3cd9jkn.js";
import { v9, d6 } from "/$bunfs/root/chunk-qch5xj2a.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { nt, s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { le, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { mA, ive, ave, RYn, Ree, lve, pd, PYn, I$t, O$t } from "/$bunfs/root/chunk-wff73y2a.js";
import { sa } from "/$bunfs/root/chunk-xj0zmt6h.js";
import { ib, Umt } from "/$bunfs/root/chunk-7hj88wg6.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { isDeepStrictEqual } from "util";
N();
N();
function de({ isDisabled = false, visibleOptionCount = 5, options, defaultValue = [], onChange, onCancel, onFocus, submitButtonText, onSubmit, onDownFromLastItem, hideIndexes = false, refuseSubmitFocus }) {
    let [selectedValues, W, k] = pd(defaultValue);
    let [isSubmitFocused, V, j] = pd(false);
    let [i, be] = y(options);
    if (options !== i && !isDeepStrictEqual(options, i)) {
        W(defaultValue);
        be(options);
    }
    let [inputValues, J] = y(()=>{
        let t = new Map;
        options.forEach((l)=>{
            if (l.type === "input" && l.initialValue) {
                t.set(l.value, l.initialValue);
            }
        });
        return t;
    });
    let P = le((t)=>{
        let l = typeof t === "function" ? t(k()) : t;
        if (onChange?.(l) === false) {
            return;
        }
        W(l);
    }, [
        k,
        W,
        onChange
    ]);
    let toggleValue = le((t)=>{
        if (options.find((l)=>l.value === t)?.disabled === true) {
            return;
        }
        P((l)=>{
            if (l.includes(t)) {
                return l.filter((c)=>c !== t);
            }
            return [
                ...l,
                t
            ];
        });
    }, [
        options,
        P
    ]);
    let f = PYn({
        visibleOptionCount,
        options,
        onFocus
    });
    sa("multi-select");
    let updateInputValue = le((t, l)=>{
        let c = options.find((g)=>g.value === t);
        if (c?.type === "input" && c.onChange(l) === false) {
            return;
        }
        J((g)=>{
            let D = new Map(g);
            D.set(t, l);
            return D;
        });
        P((g)=>{
            if (l) {
                if (!g.includes(t)) {
                    return [
                        ...g,
                        t
                    ];
                }
                return g;
            } else {
                return g.filter((D)=>D !== t);
            }
        });
    }, [
        options,
        P
    ]);
    return {
        ...f,
        focusOption: (t)=>{
            V(false);
            f.focusOption(t);
        },
        scrollViewport: (t)=>{
            let l = f.getFocusedValue();
            let c = f.scrollViewport(t);
            if (f.getFocusedValue() !== l) {
                V(false);
            }
            return c;
        },
        selectedValues,
        getSelectedValues: k,
        inputValues,
        isSubmitFocused,
        updateInputValue,
        toggleValue,
        onCancel,
        handleKeyDown: (t)=>{
            if (isDisabled) {
                return;
            }
            let l = v9(t.key);
            let c = f.getFocusedValue();
            let D = options.find((F)=>F.value === c)?.type === "input";
            let v = j();
            if (D) {
                if (!(t.key === "up" || t.key === "down" || t.key === "escape" || t.key === "tab" || t.key === "return" || t.ctrl && (t.key === "n" || t.key === "p" || t.key === "return"))) {
                    return;
                }
            }
            let x = options.at(-1)?.value;
            if (t.key === "tab" && !t.shift) {
                t.preventDefault();
                if (submitButtonText && onSubmit && c === x && !v) {
                    if (refuseSubmitFocus?.()) {
                        return;
                    }
                    V(true);
                } else if (!v) {
                    f.focusNextOption();
                }
                return;
            }
            if (t.key === "tab" && t.shift) {
                t.preventDefault();
                if (submitButtonText && onSubmit && v) {
                    V(false);
                    f.focusOption(x);
                } else {
                    f.focusPreviousOption();
                }
                return;
            }
            if (t.key === "down" || t.ctrl && t.key === "n" || !t.ctrl && !t.shift && t.key === "j") {
                t.preventDefault();
                if (v && onDownFromLastItem) {
                    onDownFromLastItem();
                } else if (submitButtonText && onSubmit && c === x && !v) {
                    if (refuseSubmitFocus?.()) {
                        return;
                    }
                    V(true);
                } else if (!submitButtonText && onDownFromLastItem && c === x) {
                    onDownFromLastItem();
                } else if (!v) {
                    f.focusNextOption();
                }
                return;
            }
            if (t.key === "up" || t.ctrl && t.key === "p" || !t.ctrl && !t.shift && t.key === "k") {
                t.preventDefault();
                if (submitButtonText && onSubmit && v) {
                    V(false);
                    f.focusOption(x);
                } else {
                    f.focusPreviousOption();
                }
                return;
            }
            if (t.key === "pagedown") {
                t.preventDefault();
                f.focusNextPage();
                return;
            }
            if (t.key === "pageup") {
                t.preventDefault();
                f.focusPreviousPage();
                return;
            }
            if (t.key === "return" || d6(t.key) === " ") {
                t.preventDefault();
                if (t.ctrl && t.key === "return" && D && onSubmit) {
                    onSubmit(k());
                    return;
                }
                if (t.key === "return" && v && onSubmit) {
                    onSubmit(k());
                    return;
                }
                if (t.key === "return" && !submitButtonText && onSubmit) {
                    onSubmit(k());
                    return;
                }
                if (!v && c !== undefined) {
                    toggleValue(c);
                }
                return;
            }
            if (!hideIndexes && /^[0-9]$/.test(l)) {
                t.preventDefault();
                let F = parseInt(l) - 1;
                if (F >= 0 && F < options.length) {
                    toggleValue(options[F].value);
                }
                return;
            }
            if (t.key === "escape") {
                onCancel();
                t.stopImmediatePropagation();
            }
        }
    };
}
function ct(yt) {
    return yt.description;
}
function onSubmit_1() {}
function uj(o) {
    let u = w(12);
    if (nt()) {
        let d;
        if (u[0] !== o.defaultValue || u[1] !== o.isDisabled || u[2] !== o.onCancel || u[3] !== o.onChange || u[4] !== o.onFocus || u[5] !== o.onSubmit || u[6] !== o.options || u[7] !== o.refuseInput || u[8] !== o.submitButtonText) {
            d = e(RYn, {
                options: o.options,
                defaultValue: o.defaultValue,
                onChange: o.onChange,
                onSubmit: o.onSubmit,
                onFocus: o.onFocus,
                onCancel: o.onCancel,
                isDisabled: o.isDisabled,
                submitButtonText: o.submitButtonText,
                refuseInput: o.refuseInput
            });
            u[0] = o.defaultValue;
            u[1] = o.isDisabled;
            u[2] = o.onCancel;
            u[3] = o.onChange;
            u[4] = o.onFocus;
            u[5] = o.onSubmit;
            u[6] = o.options;
            u[7] = o.refuseInput;
            u[8] = o.submitButtonText;
            u[9] = d;
        } else {
            d = u[9];
        }
        return d;
    }
    let d;
    if (u[10] !== o) {
        d = e(me, {
            ...o
        });
        u[10] = o;
        u[11] = d;
    } else {
        d = u[11];
    }
    return d;
}
function me(o) {
    let I = w(68);
    let { isDisabled, visibleOptionCount, options, defaultValue, onCancel, onChange, onFocus, submitButtonText, onSubmit, onDownFromLastItem, onOpenEditor, hideIndexes, canPasteImage, onImagePaste, pastedContents, onRemoveImage, refuseSubmitFocus } = o;
    let isDisabled_1 = isDisabled === undefined ? false : isDisabled;
    let be = visibleOptionCount === undefined ? 5 : visibleOptionCount;
    let J;
    if (I[0] !== defaultValue) {
        J = defaultValue === undefined ? [] : defaultValue;
        I[0] = defaultValue;
        I[1] = J;
    } else {
        J = I[1];
    }
    let defaultValue_1 = J;
    let hideIndexes_1 = hideIndexes === undefined ? false : hideIndexes;
    let f = options.some(ct);
    const visibleOptionCount_1 = O$t(be, f ? "compact-vertical" : "compact");
    let ve;
    if (I[2] !== defaultValue_1 || I[3] !== hideIndexes_1 || I[4] !== isDisabled_1 || I[5] !== onCancel || I[6] !== onChange || I[7] !== onDownFromLastItem || I[8] !== onFocus || I[9] !== onSubmit || I[10] !== options || I[11] !== refuseSubmitFocus || I[12] !== submitButtonText || I[13] !== visibleOptionCount_1) {
        ve = {
            isDisabled: isDisabled_1,
            visibleOptionCount: visibleOptionCount_1,
            options,
            defaultValue: defaultValue_1,
            onChange,
            onCancel,
            onFocus,
            submitButtonText,
            onSubmit,
            onDownFromLastItem,
            hideIndexes: hideIndexes_1,
            refuseSubmitFocus
        };
        I[2] = defaultValue_1;
        I[3] = hideIndexes_1;
        I[4] = isDisabled_1;
        I[5] = onCancel;
        I[6] = onChange;
        I[7] = onDownFromLastItem;
        I[8] = onFocus;
        I[9] = onSubmit;
        I[10] = options;
        I[11] = refuseSubmitFocus;
        I[12] = submitButtonText;
        I[13] = visibleOptionCount_1;
        I[14] = ve;
    } else {
        ve = I[14];
    }
    let t = de(ve);
    let l = R(null);
    $h(l, !isDisabled_1);
    let [c, g] = y(false);
    let D = ive();
    let inverse = !isDisabled_1 && c && D === "inverse";
    let x = ib();
    let shouldDropWheel = Umt();
    let Re;
    if (I[15] !== isDisabled_1 || I[16] !== options.length || I[17] !== shouldDropWheel || I[18] !== t.scrollViewport || I[19] !== t.visibleFromIndex || I[20] !== t.visibleToIndex) {
        Re = {
            isDisabled: isDisabled_1,
            visibleFromIndex: t.visibleFromIndex,
            visibleToIndex: t.visibleToIndex,
            optionCount: options.length,
            scrollViewport: t.scrollViewport,
            shouldDropWheel
        };
        I[15] = isDisabled_1;
        I[16] = options.length;
        I[17] = shouldDropWheel;
        I[18] = t.scrollViewport;
        I[19] = t.visibleFromIndex;
        I[20] = t.visibleToIndex;
        I[21] = Re;
    } else {
        Re = I[21];
    }
    let he = I$t(Re);
    let We;
    if (I[22] !== isDisabled_1 || I[23] !== x || I[24] !== t) {
        We = (Q)=>{
            if (isDisabled_1 || Q.disabled === true) {
                return undefined;
            }
            return (mt)=>{
                if (x(mt)) {
                    return;
                }
                if (Q.type === "input") {
                    t.focusOption(Q.value);
                } else {
                    t.toggleValue(Q.value);
                }
            };
        };
        I[22] = isDisabled_1;
        I[23] = x;
        I[24] = t;
        I[25] = We;
    } else {
        We = I[25];
    }
    let Y = We;
    let Z;
    let ee;
    let oe;
    let children;
    let flexDirection;
    let ref;
    let U;
    if (I[26] !== canPasteImage || I[27] !== Y || I[28] !== hideIndexes_1 || I[29] !== isDisabled_1 || I[30] !== onCancel || I[31] !== onImagePaste || I[32] !== onOpenEditor || I[33] !== onRemoveImage || I[34] !== options.length || I[35] !== pastedContents || I[36] !== he || I[37] !== t) {
        let maxIndexWidth = options.length.toString().length;
        ee = s;
        flexDirection = "column";
        ref = l;
        if (I[45] !== isDisabled_1 || I[46] !== t.handleKeyDown) {
            U = isDisabled_1 ? {} : {
                tabIndex: 0,
                onKeyDown: t.handleKeyDown
            };
            I[45] = isDisabled_1;
            I[46] = t.handleKeyDown;
            I[47] = U;
        } else {
            U = I[47];
        }
        Z = ave;
        oe = he;
        children = t.visibleOptions.map((option, bt)=>{
            let isFocused = !isDisabled_1 && t.focusedValue === option.value && !t.isSubmitFocused;
            let re = t.selectedValues.includes(option.value);
            let Ae = option.index === t.visibleFromIndex;
            let Ke = option.index === t.visibleToIndex - 1;
            let Be = t.visibleToIndex < options.length;
            let Le = t.visibleFromIndex > 0;
            let index = t.visibleFromIndex + bt + 1;
            if (option.type === "input") {
                let inputValue = t.inputValues.get(option.value) || "";
                return e(s, {
                    flexDirection: "column",
                    children: e(lve, {
                        option,
                        onClick: Y(option),
                        isFocused,
                        isSelected: false,
                        shouldShowDownArrow: Be && Ke,
                        shouldShowUpArrow: Le && Ae,
                        maxIndexWidth,
                        index,
                        inputValue,
                        onInputChange: (ht)=>{
                            t.updateInputValue(option.value, ht);
                        },
                        onSubmit: onSubmit_1,
                        onExit: ()=>{
                            onCancel();
                        },
                        layout: "compact",
                        onOpenEditor,
                        canPasteImage,
                        onImagePaste,
                        pastedContents,
                        onRemoveImage,
                        extraChromeWidth: 4,
                        children: r(n, {
                            color: re ? "success" : undefined,
                            children: [
                                "[",
                                re ? te.tick : " ",
                                "]",
                                " "
                            ]
                        })
                    })
                }, String(option.value));
            }
            return e(s, {
                flexDirection: "column",
                children: r(Ree, {
                    isFocused,
                    isSelected: false,
                    shouldShowDownArrow: Be && Ke,
                    shouldShowUpArrow: Le && Ae,
                    onClick: Y(option),
                    children: [
                        !hideIndexes_1 && e(s, {
                            flexShrink: 0,
                            children: e(n, {
                                dimColor: true,
                                children: `${index}.`.padEnd(maxIndexWidth)
                            })
                        }),
                        e(s, {
                            flexShrink: 0,
                            children: r(n, {
                                color: re ? "success" : undefined,
                                children: [
                                    "[",
                                    re ? te.tick : " ",
                                    "]"
                                ]
                            })
                        }),
                        r(s, {
                            flexDirection: "column",
                            children: [
                                e(n, {
                                    color: isFocused ? "suggestion" : undefined,
                                    children: option.label
                                }),
                                option.description && e(n, {
                                    color: "inactive",
                                    children: option.description
                                })
                            ]
                        })
                    ]
                })
            }, String(option.value));
        });
        I[26] = canPasteImage;
        I[27] = Y;
        I[28] = hideIndexes_1;
        I[29] = isDisabled_1;
        I[30] = onCancel;
        I[31] = onImagePaste;
        I[32] = onOpenEditor;
        I[33] = onRemoveImage;
        I[34] = options.length;
        I[35] = pastedContents;
        I[36] = he;
        I[37] = t;
        I[38] = Z;
        I[39] = ee;
        I[40] = oe;
        I[41] = children;
        I[42] = flexDirection;
        I[43] = ref;
        I[44] = U;
    } else {
        Z = I[38];
        ee = I[39];
        oe = I[40];
        children = I[41];
        flexDirection = I[42];
        ref = I[43];
        U = I[44];
    }
    let ae;
    if (I[48] !== Z || I[49] !== oe || I[50] !== children) {
        ae = e(Z, {
            ...oe,
            children
        });
        I[48] = Z;
        I[49] = oe;
        I[50] = children;
        I[51] = ae;
    } else {
        ae = I[51];
    }
    let ue;
    if (I[52] !== isDisabled_1 || I[53] !== onSubmit || I[54] !== x || I[55] !== t || I[56] !== submitButtonText || I[57] !== D || I[58] !== c || I[59] !== inverse) {
        ue = submitButtonText && onSubmit && r(s, {
            marginTop: 0,
            gap: 1,
            onClick: isDisabled_1 ? undefined : (gt)=>{
                if (x(gt)) {
                    return;
                }
                onSubmit(t.getSelectedValues());
            },
            backgroundColor: !isDisabled_1 && c && D === "tint" ? mA : undefined,
            onMouseEnter: ()=>g(true),
            onMouseLeave: ()=>g(false),
            children: [
                !isDisabled_1 && t.isSubmitFocused ? e(n, {
                    color: "suggestion",
                    inverse,
                    children: te.pointer
                }) : e(n, {
                    inverse,
                    children: " "
                }),
                e(s, {
                    marginLeft: 3,
                    children: e(n, {
                        color: !isDisabled_1 && t.isSubmitFocused ? "suggestion" : undefined,
                        bold: true,
                        children: submitButtonText
                    })
                })
            ]
        });
        I[52] = isDisabled_1;
        I[53] = onSubmit;
        I[54] = x;
        I[55] = t;
        I[56] = submitButtonText;
        I[57] = D;
        I[58] = c;
        I[59] = inverse;
        I[60] = ue;
    } else {
        ue = I[60];
    }
    let je;
    if (I[61] !== ee || I[62] !== flexDirection || I[63] !== ref || I[64] !== U || I[65] !== ae || I[66] !== ue) {
        je = r(ee, {
            flexDirection,
            ref,
            ...U,
            children: [
                ae,
                ue
            ]
        });
        I[61] = ee;
        I[62] = flexDirection;
        I[63] = ref;
        I[64] = U;
        I[65] = ae;
        I[66] = ue;
        I[67] = je;
    } else {
        je = I[67];
    }
    return je;
}
export { uj };
