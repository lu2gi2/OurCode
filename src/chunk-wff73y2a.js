import { Zq } from "/$bunfs/root/chunk-4nfvaqps.js";
import { nt, s, n, Wt, Do, Qw, uve, Ya, zr } from "/$bunfs/root/chunk-8524cxt8.js";
import { Ms, v9, d6 } from "/$bunfs/root/chunk-qch5xj2a.js";
import { tt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { ae, pt } from "/$bunfs/root/chunk-223dyewd.js";
import { Act } from "/$bunfs/root/chunk-peahjaep.js";
import { Ry, Zc, qt, em, le, Te, P, Co, Z, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { dw } from "/$bunfs/root/chunk-46as0mn8.js";
import { wG, rc } from "/$bunfs/root/chunk-tvwsdq27.js";
import { Wo } from "/$bunfs/root/chunk-zby5bms5.js";
import { sa } from "/$bunfs/root/chunk-xj0zmt6h.js";
import { $h } from "/$bunfs/root/chunk-f3cd9jkn.js";
import { XP } from "/$bunfs/root/chunk-9kks1qva.js";
import { ns } from "/$bunfs/root/chunk-2mjaqpws.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { Sy } from "/$bunfs/root/chunk-39aqgftn.js";
import { dt } from "/$bunfs/root/chunk-xg9ned06.js";
import { Ze, nn } from "/$bunfs/root/chunk-z47a2vff.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { Sr } from "/$bunfs/root/chunk-m52bdn6c.js";
import { Tc } from "/$bunfs/root/chunk-kasbfbhj.js";
import { A$ } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { ib, Umt } from "/$bunfs/root/chunk-7hj88wg6.js";
import { ut } from "/$bunfs/root/chunk-wy1471a2.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { _ae } from "/$bunfs/root/chunk-t1d2nw6r.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
import { isDeepStrictEqual } from "util";
N();
function Ra(I) {
    if (em(I)) {
        return I.key;
    }
    return "";
}
const mA = "userMessageBackground";
function ive(o = "tint") {
    if (ge.level === 0) {
        return "inverse";
    }
    return o;
}
const Xn = qt("");
function ave(o) {
    let t = w(14);
    let i;
    let a;
    if (t[0] !== o) {
        ({ windowStart: a, ...i } = o);
        t[0] = o;
        t[1] = i;
        t[2] = a;
    } else {
        i = t[1];
        a = t[2];
    }
    let l = a === undefined ? 0 : a;
    let f;
    let c;
    let u;
    if (t[3] !== i.children || t[4] !== l) {
        let b = Ry.toArray(i.children).map(Ra);
        f = Xn.Provider;
        c = l;
        u = b.join();
        t[3] = i.children;
        t[4] = l;
        t[5] = f;
        t[6] = c;
        t[7] = u;
    } else {
        f = t[5];
        c = t[6];
        u = t[7];
    }
    const d = `${c} ${u}`;
    let m;
    if (t[8] !== i) {
        m = e(s, {
            flexDirection: "column",
            ...i
        });
        t[8] = i;
        t[9] = m;
    } else {
        m = t[9];
    }
    let D;
    if (t[10] !== f || t[11] !== d || t[12] !== m) {
        D = e(f, {
            value: d,
            children: m
        });
        t[10] = f;
        t[11] = d;
        t[12] = m;
        t[13] = D;
    } else {
        D = t[13];
    }
    return D;
}
function pje(o) {
    let f = w(5);
    let t = Te(Xn);
    let [i, a] = y(null);
    let l = o && i === t;
    if (i !== null && !l) {
        a(null);
    }
    let c;
    if (f[0] !== t) {
        c = (u)=>a(u ? t : null);
        f[0] = t;
        f[1] = c;
    } else {
        c = f[1];
    }
    let b;
    if (f[2] !== l || f[3] !== c) {
        b = [
            l,
            c
        ];
        f[2] = l;
        f[3] = c;
        f[4] = b;
    } else {
        b = f[4];
    }
    return b;
}
function gA(o) {
    let K = w(47);
    let { isFocused, isSelected, children, description, showScrollDown, showScrollUp, styled, disabled, idle, declareCursor, onClick, hoverStyle, onHoverChange } = o;
    let L = isSelected === undefined ? false : isSelected;
    let j = styled === undefined ? true : styled;
    let h = disabled === undefined ? false : disabled;
    let idle_1 = idle === undefined ? false : idle;
    let x = hoverStyle === undefined ? "tint" : hoverStyle;
    let A = !h && onClick !== undefined;
    let W = !h && (onClick !== undefined || onHoverChange !== undefined);
    let [M, C] = pje(W);
    let E = M && A;
    let B = ive(x);
    let g;
    if (K[0] !== onHoverChange || K[1] !== C) {
        g = (ue)=>{
            C(ue);
            onHoverChange?.(ue);
        };
        K[0] = onHoverChange;
        K[1] = C;
        K[2] = g;
    } else {
        g = K[2];
    }
    let he = g;
    let _;
    if (K[3] !== h || K[4] !== idle_1 || K[5] !== isFocused || K[6] !== L || K[7] !== j) {
        _ = function q() {
            if (h) {
                return "inactive";
            }
            if (!j) {
                return;
            }
            if (L) {
                return "success";
            }
            if (isFocused && !idle_1) {
                return "suggestion";
            }
        };
        K[3] = h;
        K[4] = idle_1;
        K[5] = isFocused;
        K[6] = L;
        K[7] = j;
        K[8] = _;
    } else {
        _ = K[8];
    }
    let q = _;
    let ye = q();
    const pe = isFocused && !h && declareCursor !== false;
    let Q;
    if (K[9] !== pe) {
        Q = {
            line: 0,
            column: 0,
            active: pe
        };
        K[9] = pe;
        K[10] = Q;
    } else {
        Q = K[10];
    }
    let T = Qw(Q);
    const ve = E && B === "tint" ? mA : undefined;
    const onClick_1 = A ? onClick : undefined;
    let fe;
    if (K[11] !== W || K[12] !== he) {
        fe = W ? ()=>he(true) : undefined;
        K[11] = W;
        K[12] = he;
        K[13] = fe;
    } else {
        fe = K[13];
    }
    let J;
    if (K[14] !== W || K[15] !== he) {
        J = W ? ()=>he(false) : undefined;
        K[14] = W;
        K[15] = he;
        K[16] = J;
    } else {
        J = K[16];
    }
    const hovered = E && B === "pointer";
    const Ce = E && B === "inverse";
    let De;
    if (K[17] !== h || K[18] !== idle_1 || K[19] !== isFocused || K[20] !== showScrollDown || K[21] !== showScrollUp || K[22] !== hovered || K[23] !== Ce) {
        De = e(s, {
            flexShrink: 0,
            children: e(ei, {
                disabled: h,
                isFocused,
                idle: idle_1,
                showScrollUp,
                showScrollDown,
                hovered,
                inverse: Ce
            })
        });
        K[17] = h;
        K[18] = idle_1;
        K[19] = isFocused;
        K[20] = showScrollDown;
        K[21] = showScrollUp;
        K[22] = hovered;
        K[23] = Ce;
        K[24] = De;
    } else {
        De = K[24];
    }
    let ne;
    if (K[25] !== children || K[26] !== h || K[27] !== j || K[28] !== ye) {
        ne = j ? e(n, {
            color: ye,
            dimColor: h,
            wrap: "truncate-end",
            children
        }) : children;
        K[25] = children;
        K[26] = h;
        K[27] = j;
        K[28] = ye;
        K[29] = ne;
    } else {
        ne = K[29];
    }
    let k;
    if (K[30] !== h || K[31] !== L) {
        k = L && !h && e(s, {
            flexShrink: 0,
            children: e(n, {
                "aria-label": "(selected)",
                color: "success",
                children: te.tick
            })
        });
        K[30] = h;
        K[31] = L;
        K[32] = k;
    } else {
        k = K[32];
    }
    let Se;
    if (K[33] !== De || K[34] !== ne || K[35] !== k) {
        Se = r(s, {
            flexDirection: "row",
            gap: 1,
            children: [
                De,
                ne,
                k
            ]
        });
        K[33] = De;
        K[34] = ne;
        K[35] = k;
        K[36] = Se;
    } else {
        Se = K[36];
    }
    let ee;
    if (K[37] !== description) {
        ee = description && e(s, {
            paddingLeft: 2,
            children: e(n, {
                color: "inactive",
                wrap: "truncate-end",
                children: description
            })
        });
        K[37] = description;
        K[38] = ee;
    } else {
        ee = K[38];
    }
    let $e;
    if (K[39] !== T || K[40] !== ve || K[41] !== onClick_1 || K[42] !== fe || K[43] !== J || K[44] !== Se || K[45] !== ee) {
        $e = r(s, {
            ref: T,
            flexDirection: "column",
            backgroundColor: ve,
            onClick: onClick_1,
            onMouseEnter: fe,
            onMouseLeave: J,
            children: [
                Se,
                ee
            ]
        });
        K[39] = T;
        K[40] = ve;
        K[41] = onClick_1;
        K[42] = fe;
        K[43] = J;
        K[44] = Se;
        K[45] = ee;
        K[46] = $e;
    } else {
        $e = K[46];
    }
    return $e;
}
function ei(o) {
    let b = w(12);
    let { disabled, isFocused, idle, showScrollUp, showScrollDown, hovered, inverse } = o;
    if (disabled) {
        let d;
        if (b[0] === S) {
            d = e(n, {
                "aria-hidden": true,
                children: " "
            });
            b[0] = d;
        } else {
            d = b[0];
        }
        return d;
    }
    if (isFocused) {
        const d = idle ? undefined : "suggestion";
        let m;
        if (b[1] !== idle || b[2] !== inverse || b[3] !== d) {
            m = e(n, {
                "aria-hidden": true,
                color: d,
                dimColor: idle,
                inverse,
                children: te.pointer
            });
            b[1] = idle;
            b[2] = inverse;
            b[3] = d;
            b[4] = m;
        } else {
            m = b[4];
        }
        return m;
    }
    if (showScrollDown) {
        let d;
        if (b[5] !== inverse) {
            d = e(n, {
                "aria-label": "(more below)",
                dimColor: true,
                inverse,
                children: te.arrowDown
            });
            b[5] = inverse;
            b[6] = d;
        } else {
            d = b[6];
        }
        return d;
    }
    if (showScrollUp) {
        let d;
        if (b[7] !== inverse) {
            d = e(n, {
                "aria-label": "(more above)",
                dimColor: true,
                inverse,
                children: te.arrowUp
            });
            b[7] = inverse;
            b[8] = d;
        } else {
            d = b[8];
        }
        return d;
    }
    if (hovered) {
        let d;
        if (b[9] === S) {
            d = e(n, {
                "aria-hidden": true,
                dimColor: true,
                children: te.pointer
            });
            b[9] = d;
        } else {
            d = b[9];
        }
        return d;
    }
    let d;
    if (b[10] !== inverse) {
        d = e(n, {
            "aria-hidden": true,
            inverse,
            children: " "
        });
        b[10] = inverse;
        b[11] = d;
    } else {
        d = b[11];
    }
    return d;
}
N();
function Ma(o = wG) {
    let t = Ya();
    let i = R(Date.now());
    return le(()=>rc(t, i.current, o), [
        t,
        o
    ]);
}
function by() {
    return R(Date.now()).current;
}
function Dc(o, t = wG) {
    let settled = zr(t, o);
    return {
        remountKey: settled ? "settled" : "held",
        settled
    };
}
function P$t() {
    let [epoch, t] = y(0);
    let noteAttempt = le(()=>t((a)=>a + 1), []);
    return {
        epoch,
        noteAttempt
    };
}
function ms() {
    let o = Ya();
    let t = R(null);
    let { epoch, noteAttempt } = P$t();
    let refusedWithin = le((c = wG)=>t.current !== null && rc(o, t.current, c), [
        o
    ]);
    let noteRefused = le(()=>{
        t.current = Date.now();
        noteAttempt();
    }, [
        noteAttempt
    ]);
    return {
        refusedWithin,
        noteRefused,
        epoch
    };
}
N();
function Nu(Ft) {
    return String(Ft.value);
}
function Lu() {
    return null;
}
function Uu() {
    return "";
}
function $u() {
    return null;
}
function Ku() {
    return "";
}
function ju() {
    return "";
}
function Hu() {
    return null;
}
function zu() {
    return "";
}
function _u() {
    return "";
}
function Gu() {
    return null;
}
function qu() {
    return "";
}
function Yu() {
    return null;
}
function Ju() {
    return null;
}
function Xu() {
    return "";
}
function Qu(Je) {
    return Je.type !== "input";
}
function Zu() {
    return "";
}
function ed() {
    return null;
}
function td(jl) {
    return String(jl.value);
}
function nd() {
    return null;
}
function od() {
    return null;
}
function id() {
    return "";
}
function sd() {
    return null;
}
function rd() {
    return "";
}
function ld() {
    return "";
}
function ad() {
    return null;
}
function ud() {
    return null;
}
function dd() {
    return null;
}
function cd() {
    return "";
}
function fd() {
    return "";
}
function md() {
    return "";
}
function hd() {
    return "";
}
function bd() {
    return null;
}
function vd() {
    return null;
}
function gd() {
    return null;
}
function xd(Qi) {
    return Qi.type !== "input";
}
function Id() {
    return "";
}
function yd(Hl, zl) {
    return Hl - zl;
}
function Sd(Zi) {
    return String(Zi + 1);
}
function wd() {
    return null;
}
function Od() {
    return "";
}
function Cd() {
    return null;
}
function Td() {
    return null;
}
function Dd() {
    return "";
}
function Fd() {
    return "";
}
function Vd(De) {
    return De.slice(0, -1);
}
function He(o) {
    let l = w(3);
    let [t, i] = y(o);
    let a = R(o);
    let f;
    if (l[0] === S) {
        f = (c)=>{
            a.current = c(a.current);
            i(a.current);
        };
        l[0] = f;
    } else {
        f = l[0];
    }
    let u = f;
    let b;
    if (l[1] !== t) {
        b = [
            t,
            a,
            u
        ];
        l[1] = t;
        l[2] = b;
    } else {
        b = l[2];
    }
    return b;
}
function Jt() {
    return He("");
}
function xo(o) {
    if (o.length <= 1) {
        return o[0] ?? "";
    }
    if (o.length === 2) {
        return `${o[0]} or ${o[1]}`;
    }
    return `${o.slice(0, -1).join(", ")}, or ${o.at(-1)}`;
}
const ti = 300;
function Ba(o) {
    return ` \u2026 +${o} more characters`;
}
function Vs(o) {
    if (o.length <= ti) {
        return o;
    }
    let t = Ms(o, ti);
    if (t === o) {
        return o;
    }
    let i = [
        ...o
    ].length - ti;
    return t + Ba(i);
}
function xi(openedAt, windowMs) {
    let f = w(18);
    let i = windowMs === undefined ? wG : windowMs;
    let a = Ya();
    let l = Ma(i);
    let c;
    if (f[0] !== openedAt || f[1] !== a || f[2] !== l || f[3] !== i) {
        c = openedAt === undefined ? l : ()=>rc(a, openedAt, i);
        f[0] = openedAt;
        f[1] = a;
        f[2] = l;
        f[3] = i;
        f[4] = c;
    } else {
        c = f[4];
    }
    let u = c;
    let { refusedWithin, noteRefused } = ms();
    let m;
    if (f[5] !== u || f[6] !== noteRefused || f[7] !== refusedWithin || f[8] !== i) {
        m = ()=>{
            if (u() || refusedWithin(i)) {
                noteRefused();
                return true;
            }
            return false;
        };
        f[5] = u;
        f[6] = noteRefused;
        f[7] = refusedWithin;
        f[8] = i;
        f[9] = m;
    } else {
        m = f[9];
    }
    let refuse = m;
    let I;
    if (f[10] !== u || f[11] !== noteRefused || f[12] !== refusedWithin || f[13] !== i) {
        I = ()=>{
            if (!u() && !refusedWithin(i)) {
                return false;
            }
            noteRefused();
            return true;
        };
        f[10] = u;
        f[11] = noteRefused;
        f[12] = refusedWithin;
        f[13] = i;
        f[14] = I;
    } else {
        I = f[14];
    }
    let refuseCharacter = I;
    let L;
    if (f[15] !== refuse || f[16] !== refuseCharacter) {
        L = {
            refuse,
            refuseCharacter
        };
        f[15] = refuse;
        f[16] = refuseCharacter;
        f[17] = L;
    } else {
        L = f[17];
    }
    return L;
}
function G9(o) {
    let M = w(73);
    let { options, onChange, onFocus, onCancel, isDisabled, disableSelection, defaultValue, refuseInput, headings, drawLabels, hidePromptWhileDisabled } = o;
    let I = isDisabled === undefined ? false : isDisabled;
    let O = disableSelection === undefined ? false : disableSelection;
    let drawLabel = drawLabels === undefined ? false : drawLabels;
    let j = hidePromptWhileDisabled === undefined ? false : hidePromptWhileDisabled;
    let [h, v, x] = Jt();
    let [A, W] = y(null);
    let C;
    if (M[0] === S) {
        C = Act();
        M[0] = C;
    } else {
        C = M[0];
    }
    let E = C;
    let [B, K, g] = He(null);
    let ue;
    if (M[1] !== options) {
        ue = options.map(Nu).join("\x00");
        M[1] = options;
        M[2] = ue;
    } else {
        ue = M[2];
    }
    let he = ue;
    let [_, q] = y(he);
    if (_ !== he) {
        q(he);
        g(Lu);
        x(Uu);
    }
    let [ye, pe, Q] = He(null);
    if (_ !== he && ye !== null) {
        Q($u);
        x(Ku);
    }
    let T = ye !== null && options[ye - 1]?.type === "input" ? options[ye - 1] : null;
    let ve = R(null);
    $h(ve, !I);
    sa("select", !!onCancel && !I);
    let U;
    if (M[3] !== O || M[4] !== T || M[5] !== onChange || M[6] !== onFocus || M[7] !== options || M[8] !== x || M[9] !== g || M[10] !== Q) {
        U = (fe)=>{
            if (O) {
                return;
            }
            if (T) {
                if (fe === "" && !T.screenReaderEmptySubmit) {
                    W("Enter some text, or Escape for the list.");
                    return;
                }
                if (onChange?.(T.value) === false) {
                    return;
                }
                x(ju);
                Q(Hu);
                return;
            }
            let J = Number.parseInt(fe, 10);
            if (!Number.isFinite(J) || J < 1 || J > options.length) {
                W(options.length === 0 ? `Invalid selection "${fe}". Nothing to select.` : `Invalid selection "${fe}". Enter a number between 1 and ${options.length}.`);
                x(zu);
                return;
            }
            let oe = options[J - 1];
            if (oe.disabled) {
                W(`Option ${J} is disabled.`);
                x(_u);
                return;
            }
            if (oe.type === "input") {
                Q(()=>J);
                g(Gu);
                let Ce = oe.initialValue ?? "";
                x(()=>Ce);
                oe.onChange(Ce);
                onFocus?.(oe.value);
                return;
            }
            if (onChange?.(oe.value) === false) {
                return;
            }
            x(qu);
            g(Yu);
        };
        M[3] = O;
        M[4] = T;
        M[5] = onChange;
        M[6] = onFocus;
        M[7] = options;
        M[8] = x;
        M[9] = g;
        M[10] = Q;
        M[11] = U;
    } else {
        U = M[11];
    }
    let De = U;
    let ne;
    if (M[12] !== v || M[13] !== O || M[14] !== K || M[15] !== T || M[16] !== pe || M[17] !== I || M[18] !== onCancel || M[19] !== onFocus || M[20] !== options || M[21] !== refuseInput || M[22] !== x || M[23] !== g || M[24] !== Q || M[25] !== De) {
        ne = (k)=>{
            if (I) {
                return;
            }
            if (k.key === "escape" && k.name === "escape") {
                k.preventDefault();
                if (T) {
                    Q(Ju);
                    x(Xu);
                    let Se = options.find(Qu) ?? options[0];
                    if (Se) {
                        onFocus?.(Se.value);
                    }
                    return;
                }
                onCancel?.();
                return;
            }
            if (O) {
                return;
            }
            if (k.key === "return" && k.name === "return") {
                k.preventDefault();
                if (refuseInput?.()) {
                    return;
                }
                if (T || v.current.length > 0) {
                    De(v.current);
                    return;
                }
                if (E && K.current !== null) {
                    De(String(K.current + 1));
                }
                return;
            }
            if (k.key === "backspace" || k.key === "delete") {
                k.preventDefault();
                let ee = v.current.slice(0, -1);
                if (T && T.onChange(ee) === false) {
                    return;
                }
                x(()=>ee);
                return;
            }
            if (E && !T && pe.current === null && (k.name === "up" || k.name === "down")) {
                k.preventDefault();
                if (refuseInput?.()) {
                    return;
                }
                W(null);
                x(Zu);
                let $e = options.length;
                if ($e === 0) {
                    return;
                }
                let we = K.current;
                let ft = we === null ? k.name === "down" ? 0 : $e - 1 : (we + (k.name === "down" ? 1 : -1) + $e) % $e;
                g(()=>ft);
                let Ae = options[ft];
                if (Ae) {
                    onFocus?.(Ae.value);
                }
                return;
            }
            if (T) {
                if (k.key.length === 1 && !k.ctrl && !k.meta) {
                    k.preventDefault();
                    let Bt = v.current + k.key;
                    if (T.onChange(Bt) === false) {
                        return;
                    }
                    x(()=>Bt);
                }
                return;
            }
            let Dt = v9(k.key);
            if (/^[0-9]$/.test(Dt)) {
                k.preventDefault();
                if (refuseInput?.()) {
                    return;
                }
                W(null);
                x((Nt)=>Nt + Dt);
                g(ed);
            }
        };
        M[12] = v;
        M[13] = O;
        M[14] = K;
        M[15] = T;
        M[16] = pe;
        M[17] = I;
        M[18] = onCancel;
        M[19] = onFocus;
        M[20] = options;
        M[21] = refuseInput;
        M[22] = x;
        M[23] = g;
        M[24] = Q;
        M[25] = De;
        M[26] = ne;
    } else {
        ne = M[26];
    }
    let Fe = ne;
    let yt;
    if (M[27] !== h || M[28] !== T || M[29] !== ye || M[30] !== onCancel || M[31] !== options.length) {
        yt = T ? `Enter text for option ${ye} (${XP(T.label)}), or Escape for the list: ${h}` : options.length === 0 ? `Nothing to select${onCancel ? ". Escape to cancel" : ""}: ${h}` : `Select with numbers [1-${options.length}]${E ? " or up / down arrow keys" : ""}. Then ${xo([
            "Enter to submit",
            ...onCancel ? [
                "Escape to cancel"
            ] : []
        ])}: ${h}`;
        M[27] = h;
        M[28] = T;
        M[29] = ye;
        M[30] = onCancel;
        M[31] = options.length;
        M[32] = yt;
    } else {
        yt = M[32];
    }
    let Ke = yt;
    let Me;
    if (M[33] !== Ke) {
        Me = ae(Ke);
        M[33] = Ke;
        M[34] = Me;
    } else {
        Me = M[34];
    }
    const rt = !I && !O && B === null;
    let Ge;
    if (M[35] !== Me || M[36] !== rt) {
        Ge = {
            line: 0,
            column: Me,
            active: rt,
            visible: true
        };
        M[35] = Me;
        M[36] = rt;
        M[37] = Ge;
    } else {
        Ge = M[37];
    }
    let lt = Qw(Ge);
    let mt;
    if (M[38] !== Fe || M[39] !== I) {
        mt = I ? {} : {
            tabIndex: 0,
            onKeyDown: Fe
        };
        M[38] = Fe;
        M[39] = I;
        M[40] = mt;
    } else {
        mt = M[40];
    }
    let qe;
    if (M[41] !== defaultValue || M[42] !== O || M[43] !== drawLabel || M[44] !== B || M[45] !== headings || M[46] !== I || M[47] !== options) {
        let Ye;
        if (M[49] !== defaultValue || M[50] !== O || M[51] !== drawLabel || M[52] !== B || M[53] !== headings || M[54] !== I) {
            Ye = (p, St)=>r(Zc, {
                    children: [
                        headings?.get(St),
                        e(En, {
                            index: St + 1,
                            option: p,
                            selected: defaultValue !== undefined && p.value === defaultValue,
                            focused: B === St && !I && !O,
                            drawLabel
                        })
                    ]
                }, String(p.value));
            M[49] = defaultValue;
            M[50] = O;
            M[51] = drawLabel;
            M[52] = B;
            M[53] = headings;
            M[54] = I;
            M[55] = Ye;
        } else {
            Ye = M[55];
        }
        qe = options.map(Ye);
        M[41] = defaultValue;
        M[42] = O;
        M[43] = drawLabel;
        M[44] = B;
        M[45] = headings;
        M[46] = I;
        M[47] = options;
        M[48] = qe;
    } else {
        qe = M[48];
    }
    let Ye;
    if (M[56] !== headings || M[57] !== options.length) {
        Ye = headings?.get(options.length);
        M[56] = headings;
        M[57] = options.length;
        M[58] = Ye;
    } else {
        Ye = M[58];
    }
    let ht;
    if (M[59] !== A) {
        ht = A && e(n, {
            children: A
        });
        M[59] = A;
        M[60] = ht;
    } else {
        ht = M[60];
    }
    let bt;
    if (M[61] !== lt || M[62] !== O || M[63] !== j || M[64] !== I || M[65] !== Ke) {
        bt = !O && !(I && j) && e(s, {
            ref: lt,
            children: e(n, {
                children: Ke
            })
        });
        M[61] = lt;
        M[62] = O;
        M[63] = j;
        M[64] = I;
        M[65] = Ke;
        M[66] = bt;
    } else {
        bt = M[66];
    }
    let vt;
    if (M[67] !== mt || M[68] !== qe || M[69] !== Ye || M[70] !== ht || M[71] !== bt) {
        vt = r(s, {
            ref: ve,
            flexDirection: "column",
            ...mt,
            children: [
                qe,
                Ye,
                ht,
                bt
            ]
        });
        M[67] = mt;
        M[68] = qe;
        M[69] = Ye;
        M[70] = ht;
        M[71] = bt;
        M[72] = vt;
    } else {
        vt = M[72];
    }
    return vt;
}
function RYn(o) {
    let m = w(91);
    let { options, defaultValue, onChange, onSubmit, onFocus, onCancel, isDisabled, submitButtonText, refuseInput } = o;
    let D;
    if (m[0] !== defaultValue) {
        D = defaultValue === undefined ? [] : defaultValue;
        m[0] = defaultValue;
        m[1] = D;
    } else {
        D = m[1];
    }
    let I = D;
    let O = isDisabled === undefined ? false : isDisabled;
    let [L, j, h] = Jt();
    let [v, x] = y(null);
    let A;
    if (m[2] === S) {
        A = Act();
        m[2] = A;
    } else {
        A = m[2];
    }
    let W = A;
    let [M, C, E] = He(null);
    let [B, K, g] = He(null);
    let ue;
    if (m[3] !== options) {
        ue = options.map(td).join("\x00");
        m[3] = options;
        m[4] = ue;
    } else {
        ue = m[4];
    }
    let he = ue;
    let [_, q] = y(he);
    if (_ !== he) {
        q(he);
        E(nd);
        g(od);
        h(id);
    }
    let ye;
    if (m[5] !== I || m[6] !== options) {
        ye = ()=>new Set(options.flatMap((pe, Q)=>{
                if (!pe.disabled && I.includes(pe.value)) {
                    return [
                        Q
                    ];
                }
                return [];
            }));
        m[5] = I;
        m[6] = options;
        m[7] = ye;
    } else {
        ye = m[7];
    }
    let T = ye;
    let [ve, U] = y(null);
    let fe = R(false);
    let J = R(false);
    let oe;
    if (m[8] !== onSubmit || m[9] !== ve) {
        oe = ()=>{
            if (ve !== null) {
                let Ce = [
                    ...ve
                ];
                U(null);
                fe.current = false;
                onSubmit?.(Ce);
            }
        };
        m[8] = onSubmit;
        m[9] = ve;
        m[10] = oe;
    } else {
        oe = m[10];
    }
    let De;
    if (m[11] !== ve) {
        De = [
            ve
        ];
        m[11] = ve;
        m[12] = De;
    } else {
        De = m[12];
    }
    P(oe, De);
    let [ne, k, Se] = He(null);
    if (_ !== he && ne !== null) {
        Se(sd);
        h(rd);
    }
    let ee = ne && options[ne.index - 1]?.type === "input" ? options[ne.index - 1] : null;
    let $e = R(null);
    $h($e, !O);
    sa("multi-select", !!onCancel && !O);
    let we;
    if (m[13] !== onChange || m[14] !== h || m[15] !== E || m[16] !== Se || m[17] !== g) {
        we = (ft)=>{
            fe.current = true;
            if (onChange?.([
                ...ft
            ]) === false) {
                fe.current = false;
                return;
            }
            U(ft);
            h(ld);
            Se(ad);
            E(ud);
            g(dd);
        };
        m[13] = onChange;
        m[14] = h;
        m[15] = E;
        m[16] = Se;
        m[17] = g;
        m[18] = we;
    } else {
        we = m[18];
    }
    let Ae = we;
    let Bt;
    if (m[19] !== I || m[20] !== Ae || m[21] !== ee || m[22] !== ne || m[23] !== onFocus || m[24] !== options || m[25] !== h || m[26] !== E || m[27] !== Se || m[28] !== g) {
        Bt = (Dt)=>{
            if (ee && ne) {
                if (Dt === "") {
                    x("Enter some text, or Escape for the list.");
                    return;
                }
                Ae([
                    ...ne.stashed,
                    ee.value
                ]);
                return;
            }
            let raw = Dt.trim();
            if (raw === "") {
                Ae(I);
                return;
            }
            let Fe = raw.split(/[\s,]+/).filter(Boolean);
            if (Fe.length === 0) {
                Ae(I);
                return;
            }
            let yt = new Set;
            let stashed = [];
            let Me = null;
            for (const rt of Fe){
                if (!/^\d+$/.test(rt)) {
                    x(`Invalid selection "${rt}". Enter numbers between 1 and ${options.length}, comma- or space-separated.`);
                    h(cd);
                    return;
                }
                let Ge = Number.parseInt(rt, 10);
                if (yt.has(Ge)) {
                    continue;
                }
                yt.add(Ge);
                if (Ge < 1 || Ge > options.length) {
                    x(`Invalid selection "${rt}". Enter numbers between 1 and ${options.length}, comma- or space-separated.`);
                    h(fd);
                    return;
                }
                let opt = options[Ge - 1];
                if (opt.disabled) {
                    x(`Option ${Ge} is disabled.`);
                    h(md);
                    return;
                }
                if (opt.type === "input") {
                    if (Me) {
                        x("Only one free-text option can be included per selection.");
                        h(hd);
                        return;
                    }
                    Me = {
                        index: Ge,
                        opt
                    };
                    continue;
                }
                stashed.push(opt.value);
            }
            if (Me?.opt) {
                Se(()=>({
                        index: Me.index,
                        stashed,
                        raw
                    }));
                E(bd);
                g(vd);
                let mt = Me.opt.initialValue ?? "";
                h(()=>mt);
                Me.opt.onChange(mt);
                onFocus?.(Me.opt.value);
                return;
            }
            Ae(stashed);
        };
        m[19] = I;
        m[20] = Ae;
        m[21] = ee;
        m[22] = ne;
        m[23] = onFocus;
        m[24] = options;
        m[25] = h;
        m[26] = E;
        m[27] = Se;
        m[28] = g;
        m[29] = Bt;
    } else {
        Bt = m[29];
    }
    let qe = Bt;
    let Ye;
    if (m[30] !== j || m[31] !== T || m[32] !== Ae || m[33] !== C || m[34] !== ee || m[35] !== ne || m[36] !== k || m[37] !== O || m[38] !== onCancel || m[39] !== onFocus || m[40] !== options || m[41] !== refuseInput || m[42] !== h || m[43] !== E || m[44] !== Se || m[45] !== g || m[46] !== qe || m[47] !== K) {
        Ye = (p)=>{
            if (O) {
                return;
            }
            if (p.key === "escape" && p.name === "escape") {
                p.preventDefault();
                if (ne) {
                    let { raw } = ne;
                    Se(gd);
                    h(()=>raw);
                    let ht = options.find(xd) ?? options[0];
                    if (ht) {
                        onFocus?.(ht.value);
                    }
                    return;
                }
                onCancel?.();
                return;
            }
            if (p.key === "return" && p.name === "return") {
                p.preventDefault();
                if (J.current) {
                    refuseInput?.();
                    J.current = false;
                    h(Id);
                    x("Part of that entry arrived before the list was ready — enter your selection again.");
                    return;
                }
                if (refuseInput?.()) {
                    return;
                }
                if (fe.current) {
                    return;
                }
                if (W && !ee && j.current.length === 0 && K.current !== null) {
                    let bt = [
                        ...K.current
                    ].sort(yd);
                    if (bt.length === 0) {
                        Ae([]);
                    } else {
                        qe(bt.map(Sd).join(" "));
                    }
                    return;
                }
                qe(j.current);
                return;
            }
            if (p.key === "backspace" || p.key === "delete") {
                p.preventDefault();
                let vt = j.current;
                let Ft = vt.slice(0, -1);
                if (ee && ee.onChange(Ft) === false) {
                    return;
                }
                h(()=>Ft);
                if (!ee && vt !== Ft) {
                    g(wd);
                }
                return;
            }
            if (W && !ee && k.current === null && (p.name === "up" || p.name === "down")) {
                p.preventDefault();
                if (refuseInput?.()) {
                    return;
                }
                x(null);
                h(Od);
                J.current = false;
                let Je = options.length;
                if (Je === 0) {
                    return;
                }
                let tn = C.current;
                let Xe = tn === null ? p.name === "down" ? 0 : Je - 1 : (tn + (p.name === "down" ? 1 : -1) + Je) % Je;
                E(()=>Xe);
                let on = options[Xe];
                if (on) {
                    onFocus?.(on.value);
                }
                return;
            }
            if (W && !ee && k.current === null && C.current !== null && d6(p.key) === " ") {
                p.preventDefault();
                if (refuseInput?.()) {
                    return;
                }
                let gt = C.current;
                let Ho = options[gt];
                if (!Ho) {
                    return;
                }
                if (Ho.disabled) {
                    x(`Option ${gt + 1} is disabled.`);
                    return;
                }
                x(null);
                g((jn)=>{
                    let Lt = new Set(jn ?? T());
                    if (Lt.has(gt)) {
                        Lt.delete(gt);
                    } else {
                        Lt.add(gt);
                    }
                    return Lt;
                });
                return;
            }
            if (ee) {
                if (p.key.length === 1 && !p.ctrl && !p.meta) {
                    p.preventDefault();
                    let Hn = j.current + p.key;
                    if (ee.onChange(Hn) === false) {
                        return;
                    }
                    h(()=>Hn);
                }
                return;
            }
            let In = d6(v9(p.key)).replace("，", ",").replace("、", ",");
            if (/^[0-9, ]$/.test(In)) {
                p.preventDefault();
                if (J.current) {
                    refuseInput?.();
                    return;
                }
                if (refuseInput?.()) {
                    J.current = true;
                    return;
                }
                x(null);
                h((wt)=>wt + In);
                E(Cd);
                g(Td);
            }
        };
        m[30] = j;
        m[31] = T;
        m[32] = Ae;
        m[33] = C;
        m[34] = ee;
        m[35] = ne;
        m[36] = k;
        m[37] = O;
        m[38] = onCancel;
        m[39] = onFocus;
        m[40] = options;
        m[41] = refuseInput;
        m[42] = h;
        m[43] = E;
        m[44] = Se;
        m[45] = g;
        m[46] = qe;
        m[47] = K;
        m[48] = Ye;
    } else {
        Ye = m[48];
    }
    let sn = Ye;
    let at;
    if (m[49] !== L || m[50] !== I || m[51] !== ee || m[52] !== ne?.index || m[53] !== onCancel || m[54] !== options.length || m[55] !== submitButtonText || m[56] !== B) {
        at = ee ? `Enter text for option ${ne?.index} (${XP(ee.label)}), or Escape for the list: ${L}` : `Select with numbers [1-${options.length}] (comma- or space-separated for several)${W ? " or up / down arrow keys" : ""}. Then ${xo([
            ...W ? [
                "Space to toggle"
            ] : [],
            `Enter to ${submitButtonText ?? "submit"}`,
            ...I.length > 0 && B === null ? [
                "bare Enter for defaults"
            ] : [],
            ...onCancel ? [
                "Escape to cancel"
            ] : []
        ])}: ${L}`;
        m[49] = L;
        m[50] = I;
        m[51] = ee;
        m[52] = ne?.index;
        m[53] = onCancel;
        m[54] = options.length;
        m[55] = submitButtonText;
        m[56] = B;
        m[57] = at;
    } else {
        at = m[57];
    }
    let ct = at;
    let je;
    if (m[58] !== ct) {
        je = ae(ct);
        m[58] = ct;
        m[59] = je;
    } else {
        je = m[59];
    }
    const We = !O && M === null;
    let zn;
    if (m[60] !== je || m[61] !== We) {
        zn = {
            line: 0,
            column: je,
            active: We,
            visible: true
        };
        m[60] = je;
        m[61] = We;
        m[62] = zn;
    } else {
        zn = m[62];
    }
    let X = Qw(zn);
    let rn;
    if (m[63] !== I) {
        rn = new Set(I);
        m[63] = I;
        m[64] = rn;
    } else {
        rn = m[64];
    }
    let Vt = rn;
    let ln;
    if (m[65] !== sn || m[66] !== O) {
        ln = O ? {} : {
            tabIndex: 0,
            onKeyDown: sn
        };
        m[65] = sn;
        m[66] = O;
        m[67] = ln;
    } else {
        ln = m[67];
    }
    let yn;
    if (m[68] !== Vt || m[69] !== M || m[70] !== O || m[71] !== options || m[72] !== B) {
        let kt;
        if (m[74] !== Vt || m[75] !== M || m[76] !== O || m[77] !== B) {
            kt = (zo, Sn)=>e(En, {
                    index: Sn + 1,
                    option: zo,
                    selected: B ? B.has(Sn) : Vt.has(zo.value),
                    focused: M === Sn && !O
                }, String(zo.value));
            m[74] = Vt;
            m[75] = M;
            m[76] = O;
            m[77] = B;
            m[78] = kt;
        } else {
            kt = m[78];
        }
        yn = options.map(kt);
        m[68] = Vt;
        m[69] = M;
        m[70] = O;
        m[71] = options;
        m[72] = B;
        m[73] = yn;
    } else {
        yn = m[73];
    }
    let kt;
    if (m[79] !== v) {
        kt = v && e(n, {
            children: v
        });
        m[79] = v;
        m[80] = kt;
    } else {
        kt = m[80];
    }
    let an;
    if (m[81] !== ct) {
        an = e(n, {
            children: ct
        });
        m[81] = ct;
        m[82] = an;
    } else {
        an = m[82];
    }
    let _n;
    if (m[83] !== X || m[84] !== an) {
        _n = e(s, {
            ref: X,
            children: an
        });
        m[83] = X;
        m[84] = an;
        m[85] = _n;
    } else {
        _n = m[85];
    }
    let Xi;
    if (m[86] !== ln || m[87] !== yn || m[88] !== kt || m[89] !== _n) {
        Xi = r(s, {
            ref: $e,
            flexDirection: "column",
            ...ln,
            children: [
                yn,
                kt,
                _n
            ]
        });
        m[86] = ln;
        m[87] = yn;
        m[88] = kt;
        m[89] = _n;
        m[90] = Xi;
    } else {
        Xi = m[90];
    }
    return Xi;
}
function En(o) {
    let u = w(26);
    let { index, option, selected, focused, drawLabel } = o;
    let c = drawLabel === undefined ? false : drawLabel;
    let b;
    if (u[0] !== focused) {
        b = {
            line: 0,
            column: 0,
            active: focused,
            visible: true
        };
        u[0] = focused;
        u[1] = b;
    } else {
        b = u[1];
    }
    let d = Qw(b);
    let m;
    if (u[2] !== option.label) {
        m = XP(option.label);
        u[2] = option.label;
        u[3] = m;
    } else {
        m = u[3];
    }
    let D = m;
    let I = option.description ? ` \u2014 ${option.description}` : "";
    const O = `${D}${I}`;
    let L;
    if (u[4] !== O) {
        L = Vs(O);
        u[4] = O;
        u[5] = L;
    } else {
        L = u[5];
    }
    let j = L;
    const h = option.disabled ? "(disabled)" : null;
    const v = selected ? "(selected)" : null;
    let x;
    if (u[6] !== h || u[7] !== v) {
        x = [
            h,
            v
        ].filter(Boolean);
        u[6] = h;
        u[7] = v;
        u[8] = x;
    } else {
        x = u[8];
    }
    let A = x.join(" ");
    if (c) {
        const W = A ? ` ${A}` : "";
        let M;
        if (u[9] !== index || u[10] !== W) {
            M = r(n, {
                children: [
                    index,
                    ".",
                    W
                ]
            });
            u[9] = index;
            u[10] = W;
            u[11] = M;
        } else {
            M = u[11];
        }
        let C;
        if (u[12] !== option.description) {
            C = option.description && r(n, {
                children: [
                    "— ",
                    option.description
                ]
            });
            u[12] = option.description;
            u[13] = C;
        } else {
            C = u[13];
        }
        let E;
        if (u[14] !== d || u[15] !== option.label || u[16] !== M || u[17] !== C) {
            E = r(s, {
                ref: d,
                children: [
                    M,
                    option.label,
                    C
                ]
            });
            u[14] = d;
            u[15] = option.label;
            u[16] = M;
            u[17] = C;
            u[18] = E;
        } else {
            E = u[18];
        }
        return E;
    }
    const W = A ? `${A} ` : "";
    let M;
    if (u[19] !== j || u[20] !== index || u[21] !== W) {
        M = r(n, {
            children: [
                index,
                ". ",
                W,
                j
            ]
        });
        u[19] = j;
        u[20] = index;
        u[21] = W;
        u[22] = M;
    } else {
        M = u[22];
    }
    let C;
    if (u[23] !== d || u[24] !== M) {
        C = e(s, {
            ref: d,
            children: M
        });
        u[23] = d;
        u[24] = M;
        u[25] = C;
    } else {
        C = u[25];
    }
    return C;
}
function xYn(o) {
    let h = w(43);
    let { confirmLabel, cancelLabel, onConfirm, onCancel, refuseInput, openedAt, windowMs } = o;
    let [b, d, m] = Jt();
    let [D, I] = y(null);
    let O = R(null);
    $h(O, true);
    sa("select", true);
    let { refuse, refuseCharacter } = xi(openedAt, windowMs);
    let v;
    if (h[0] !== refuseInput || h[1] !== refuse) {
        v = function x() {
            return (refuseInput?.() ?? false) || refuse();
        };
        h[0] = refuseInput;
        h[1] = refuse;
        h[2] = v;
    } else {
        v = h[2];
    }
    let x = v;
    let A;
    if (h[3] !== refuseInput || h[4] !== refuseCharacter) {
        A = function W() {
            return (refuseInput?.() ?? false) || refuseCharacter();
        };
        h[3] = refuseInput;
        h[4] = refuseCharacter;
        h[5] = A;
    } else {
        A = h[5];
    }
    let W = A;
    let M;
    if (h[6] !== onCancel || h[7] !== onConfirm || h[8] !== x || h[9] !== m) {
        M = (C)=>{
            let E = C.trim().toLowerCase();
            if ((E === "y" || E === "yes" || E === "n" || E === "no") && x()) {
                m(Dd);
                return;
            }
            if (E === "y" || E === "yes") {
                return onConfirm();
            }
            if (E === "n" || E === "no") {
                return onCancel();
            }
            I("Please answer y or n.");
            m(Fd);
        };
        h[6] = onCancel;
        h[7] = onConfirm;
        h[8] = x;
        h[9] = m;
        h[10] = M;
    } else {
        M = h[10];
    }
    let B = M;
    let K;
    if (h[11] !== d || h[12] !== onCancel || h[13] !== x || h[14] !== W || h[15] !== m || h[16] !== B) {
        K = (g)=>{
            if (g.key === "escape" && g.name === "escape") {
                g.preventDefault();
                if (x()) {
                    return;
                }
                return onCancel();
            }
            if (g.key === "return" && g.name === "return") {
                g.preventDefault();
                return B(d.current);
            }
            if (g.key === "backspace" || g.key === "delete") {
                g.preventDefault();
                m(Vd);
                return;
            }
            if (g.key.length === 1 && !g.ctrl && !g.meta) {
                g.preventDefault();
                if (W()) {
                    return;
                }
                I(null);
                m((ue)=>ue + g.key);
            }
        };
        h[11] = d;
        h[12] = onCancel;
        h[13] = x;
        h[14] = W;
        h[15] = m;
        h[16] = B;
        h[17] = K;
    } else {
        K = h[17];
    }
    let he = K;
    let _ = `Enter y/n: ${b}`;
    let q;
    if (h[18] !== _) {
        q = ae(_);
        h[18] = _;
        h[19] = q;
    } else {
        q = h[19];
    }
    let ye;
    if (h[20] !== q) {
        ye = {
            line: 0,
            column: q,
            active: true,
            visible: true
        };
        h[20] = q;
        h[21] = ye;
    } else {
        ye = h[21];
    }
    let pe = Qw(ye);
    let Q;
    if (h[22] !== confirmLabel) {
        Q = XP(confirmLabel);
        h[22] = confirmLabel;
        h[23] = Q;
    } else {
        Q = h[23];
    }
    let T;
    if (h[24] !== Q) {
        T = r(n, {
            children: [
                "y. ",
                Q
            ]
        });
        h[24] = Q;
        h[25] = T;
    } else {
        T = h[25];
    }
    let ve;
    if (h[26] !== cancelLabel) {
        ve = XP(cancelLabel);
        h[26] = cancelLabel;
        h[27] = ve;
    } else {
        ve = h[27];
    }
    let U;
    if (h[28] !== ve) {
        U = r(n, {
            children: [
                "n. ",
                ve
            ]
        });
        h[28] = ve;
        h[29] = U;
    } else {
        U = h[29];
    }
    let fe;
    if (h[30] !== D) {
        fe = D && e(n, {
            children: D
        });
        h[30] = D;
        h[31] = fe;
    } else {
        fe = h[31];
    }
    let J;
    if (h[32] !== _) {
        J = e(n, {
            children: _
        });
        h[32] = _;
        h[33] = J;
    } else {
        J = h[33];
    }
    let oe;
    if (h[34] !== pe || h[35] !== J) {
        oe = e(s, {
            ref: pe,
            children: J
        });
        h[34] = pe;
        h[35] = J;
        h[36] = oe;
    } else {
        oe = h[36];
    }
    let Ce;
    if (h[37] !== he || h[38] !== U || h[39] !== fe || h[40] !== oe || h[41] !== T) {
        Ce = r(s, {
            ref: O,
            flexDirection: "column",
            tabIndex: 0,
            onKeyDown: he,
            children: [
                T,
                U,
                fe,
                oe
            ]
        });
        h[37] = he;
        h[38] = U;
        h[39] = fe;
        h[40] = oe;
        h[41] = T;
        h[42] = Ce;
    } else {
        Ce = h[42];
    }
    return Ce;
}
N();
function pd(o) {
    let [t] = y(()=>({
            value: kd(o) ? o() : o
        }));
    let [i, a] = y(t.value);
    let l = le((c)=>{
        let u = Md(c) ? c(t.value) : c;
        if (Object.is(u, t.value)) {
            return;
        }
        t.value = u;
        a(()=>u);
    }, [
        t
    ]);
    let f = le(()=>t.value, [
        t
    ]);
    return [
        i,
        l,
        f
    ];
}
function kd(o) {
    return typeof o === "function";
}
function Md(o) {
    return typeof o === "function";
}
N();
N();
function yo(o) {
    let b = w(15);
    let { imageId, backgroundColor, isSelected } = o;
    let l = isSelected === undefined ? false : isSelected;
    let c = Wo((f)=>f.storedImagePaths.get(imageId) ?? null) ?? null;
    let u = `[Image #${imageId}]`;
    let d;
    if (b[0] !== c) {
        d = c && dw() ? A$(c) : null;
        b[0] = c;
        b[1] = d;
    } else {
        d = b[1];
    }
    let url = d;
    if (url) {
        let fallback;
        let I;
        if (b[2] !== backgroundColor || b[3] !== u || b[4] !== l) {
            fallback = e(n, {
                backgroundColor,
                inverse: l,
                children: u
            });
            I = e(n, {
                backgroundColor,
                inverse: l,
                bold: l,
                children: u
            });
            b[2] = backgroundColor;
            b[3] = u;
            b[4] = l;
            b[5] = fallback;
            b[6] = I;
        } else {
            fallback = b[5];
            I = b[6];
        }
        let O;
        if (b[7] !== url || b[8] !== fallback || b[9] !== I) {
            O = e(Wt, {
                url,
                fallback,
                children: I
            });
            b[7] = url;
            b[8] = fallback;
            b[9] = I;
            b[10] = O;
        } else {
            O = b[10];
        }
        return O;
    }
    let D;
    if (b[11] !== backgroundColor || b[12] !== u || b[13] !== l) {
        D = e(n, {
            backgroundColor,
            inverse: l,
            children: u
        });
        b[11] = backgroundColor;
        b[12] = u;
        b[13] = l;
        b[14] = D;
    } else {
        D = b[14];
    }
    return D;
}
function Ree(o) {
    let m = w(10);
    let { isFocused, isSelected, children, description, shouldShowDownArrow, shouldShowUpArrow, declareCursor, onClick, hoverStyle } = o;
    let D;
    if (m[0] !== children || m[1] !== declareCursor || m[2] !== description || m[3] !== hoverStyle || m[4] !== isFocused || m[5] !== isSelected || m[6] !== onClick || m[7] !== shouldShowDownArrow || m[8] !== shouldShowUpArrow) {
        D = e(gA, {
            isFocused,
            isSelected,
            description,
            showScrollDown: shouldShowDownArrow,
            showScrollUp: shouldShowUpArrow,
            styled: false,
            declareCursor,
            onClick,
            hoverStyle,
            children
        });
        m[0] = children;
        m[1] = declareCursor;
        m[2] = description;
        m[3] = hoverStyle;
        m[4] = isFocused;
        m[5] = isSelected;
        m[6] = onClick;
        m[7] = shouldShowDownArrow;
        m[8] = shouldShowUpArrow;
        m[9] = D;
    } else {
        D = m[9];
    }
    return D;
}
function ic(ln) {
    return ln.type === "image";
}
function Pr(columns, maxIndexWidth, i, a) {
    let l = 2 + maxIndexWidth + 2;
    return Math.max(1, columns - l - i - a);
}
function lve(o) {
    let T = w(104);
    let { option, isFocused, isSelected, shouldShowDownArrow, shouldShowUpArrow, maxIndexWidth, index, hideIndex, inputValue, onInputChange, onSubmit, onExit, layout, children, showLabel, onOpenEditor, resetCursorOnUpdate, canPasteImage, onImagePaste, pastedContents, onRemoveImage, imagesSelected, selectedImageIndex, onImagesSelectedChange, onSelectedImageIndexChange, extraChromeWidth, onClick, hoverStyle } = o;
    let _ = hideIndex === undefined ? false : hideIndex;
    let q = showLabel === undefined ? false : showLabel;
    let ye = resetCursorOnUpdate === undefined ? false : resetCursorOnUpdate;
    let pe = selectedImageIndex === undefined ? 0 : selectedImageIndex;
    let Q = extraChromeWidth === undefined ? 0 : extraChromeWidth;
    let ve;
    if (T[0] !== pastedContents) {
        ve = pastedContents ? Object.values(pastedContents).filter(ic) : [];
        T[0] = pastedContents;
        T[1] = ve;
    } else {
        ve = T[1];
    }
    let U = ve;
    let fe = q || option.showLabelWithValue === true;
    let [J, oe] = y(inputValue.length);
    let Ce = R(false);
    let De;
    if (T[2] !== inputValue.length || T[3] !== isFocused || T[4] !== ye) {
        De = ()=>{
            if (ye && isFocused) {
                if (Ce.current) {
                    Ce.current = false;
                } else {
                    oe(inputValue.length);
                }
            }
        };
        T[2] = inputValue.length;
        T[3] = isFocused;
        T[4] = ye;
        T[5] = De;
    } else {
        De = T[5];
    }
    let ne;
    if (T[6] !== inputValue || T[7] !== isFocused || T[8] !== ye) {
        ne = [
            ye,
            isFocused,
            inputValue
        ];
        T[6] = inputValue;
        T[7] = isFocused;
        T[8] = ye;
        T[9] = ne;
    } else {
        ne = T[9];
    }
    P(De, ne);
    let k;
    if (T[10] !== inputValue || T[11] !== onInputChange || T[12] !== onOpenEditor) {
        k = ()=>{
            onOpenEditor?.(inputValue, onInputChange);
        };
        T[10] = inputValue;
        T[11] = onInputChange;
        T[12] = onOpenEditor;
        T[13] = k;
    } else {
        k = T[13];
    }
    const Se = isFocused && !!onOpenEditor;
    let ee;
    if (T[14] !== Se) {
        ee = {
            context: "Chat",
            isActive: Se
        };
        T[14] = Se;
        T[15] = ee;
    } else {
        ee = T[15];
    }
    Ze("chat:externalEditor", k, ee);
    let $e;
    if (T[16] !== canPasteImage || T[17] !== onImagePaste) {
        $e = ()=>{
            if (!onImagePaste) {
                return;
            }
            if (canPasteImage?.() === false) {
                return;
            }
            _ae(Tc(tt())).then((we)=>{
                if (we) {
                    onImagePaste(we.base64, {
                        mediaType: we.mediaType,
                        dimensions: we.dimensions
                    });
                }
            });
        };
        T[16] = canPasteImage;
        T[17] = onImagePaste;
        T[18] = $e;
    } else {
        $e = T[18];
    }
    const ft = isFocused && !!onImagePaste;
    let Ae;
    if (T[19] !== ft) {
        Ae = {
            context: "Chat",
            isActive: ft
        };
        T[19] = ft;
        T[20] = Ae;
    } else {
        Ae = T[20];
    }
    Ze("chat:imagePaste", $e, Ae);
    let Bt;
    if (T[21] !== U || T[22] !== onRemoveImage) {
        Bt = ()=>{
            if (U.length > 0 && onRemoveImage) {
                onRemoveImage(U.at(-1).id);
            }
        };
        T[21] = U;
        T[22] = onRemoveImage;
        T[23] = Bt;
    } else {
        Bt = T[23];
    }
    const Dt = isFocused && !imagesSelected && inputValue === "" && U.length > 0 && !!onRemoveImage;
    let Nt;
    if (T[24] !== Dt) {
        Nt = {
            context: "Attachments",
            isActive: Dt
        };
        T[24] = Dt;
        T[25] = Nt;
    } else {
        Nt = T[25];
    }
    Ze("attachments:remove", Bt, Nt);
    let Fe;
    let yt;
    if (T[26] !== U.length || T[27] !== onSelectedImageIndexChange || T[28] !== pe) {
        Fe = ()=>{
            if (U.length > 1) {
                onSelectedImageIndexChange?.((pe + 1) % U.length);
            }
        };
        yt = ()=>{
            if (U.length > 1) {
                onSelectedImageIndexChange?.((pe - 1 + U.length) % U.length);
            }
        };
        T[26] = U.length;
        T[27] = onSelectedImageIndexChange;
        T[28] = pe;
        T[29] = Fe;
        T[30] = yt;
    } else {
        Fe = T[29];
        yt = T[30];
    }
    let Ke;
    if (T[31] !== U || T[32] !== onImagesSelectedChange || T[33] !== onRemoveImage || T[34] !== onSelectedImageIndexChange || T[35] !== pe) {
        Ke = ()=>{
            let Me = U[pe];
            if (Me && onRemoveImage) {
                if (onRemoveImage(Me.id) === false) {
                    return;
                }
                if (U.length <= 1) {
                    onImagesSelectedChange?.(false);
                } else {
                    onSelectedImageIndexChange?.(Math.min(pe, U.length - 2));
                }
            }
        };
        T[31] = U;
        T[32] = onImagesSelectedChange;
        T[33] = onRemoveImage;
        T[34] = onSelectedImageIndexChange;
        T[35] = pe;
        T[36] = Ke;
    } else {
        Ke = T[36];
    }
    let rt;
    if (T[37] !== onImagesSelectedChange) {
        rt = ()=>{
            onImagesSelectedChange?.(false);
        };
        T[37] = onImagesSelectedChange;
        T[38] = rt;
    } else {
        rt = T[38];
    }
    let Ge;
    if (T[39] !== Fe || T[40] !== yt || T[41] !== Ke || T[42] !== rt) {
        Ge = {
            "attachments:next": Fe,
            "attachments:previous": yt,
            "attachments:remove": Ke,
            "attachments:exit": rt
        };
        T[39] = Fe;
        T[40] = yt;
        T[41] = Ke;
        T[42] = rt;
        T[43] = Ge;
    } else {
        Ge = T[43];
    }
    const lt = isFocused && !!imagesSelected;
    let mt;
    if (T[44] !== lt) {
        mt = {
            context: "Attachments",
            isActive: lt
        };
        T[44] = lt;
        T[45] = mt;
    } else {
        mt = T[45];
    }
    nn(Ge, mt);
    let qe;
    let Ye;
    if (T[46] !== imagesSelected || T[47] !== isFocused || T[48] !== onImagesSelectedChange) {
        qe = ()=>{
            if (!isFocused && imagesSelected) {
                onImagesSelectedChange?.(false);
            }
        };
        Ye = [
            isFocused,
            imagesSelected,
            onImagesSelectedChange
        ];
        T[46] = imagesSelected;
        T[47] = isFocused;
        T[48] = onImagesSelectedChange;
        T[49] = qe;
        T[50] = Ye;
    } else {
        qe = T[49];
        Ye = T[50];
    }
    P(qe, Ye);
    let paddingLeft = layout === "expanded" ? maxIndexWidth + 3 : maxIndexWidth + 4;
    let { columns } = ns(ke());
    let ht = fe && typeof option.label === "string" ? ae(option.label) + ae(option.labelValueSeparator ?? ", ") : 0;
    let bt;
    if (T[51] !== columns || T[52] !== Q || T[53] !== ht || T[54] !== maxIndexWidth) {
        bt = Pr(columns, maxIndexWidth, ht, Q);
        T[51] = columns;
        T[52] = Q;
        T[53] = ht;
        T[54] = maxIndexWidth;
        T[55] = bt;
    } else {
        bt = T[55];
    }
    let columns_1 = bt;
    const flexShrink = layout === "compact" ? 0 : undefined;
    let Je;
    if (T[56] !== _ || T[57] !== index || T[58] !== maxIndexWidth) {
        Je = !_ && e(s, {
            flexShrink: 0,
            children: e(n, {
                dimColor: true,
                children: `${index}.`.padEnd(maxIndexWidth + 2)
            })
        });
        T[56] = _;
        T[57] = index;
        T[58] = maxIndexWidth;
        T[59] = Je;
    } else {
        Je = T[59];
    }
    let tn;
    if (T[60] !== J || T[61] !== imagesSelected || T[62] !== inputValue || T[63] !== isFocused || T[64] !== onExit || T[65] !== onImagePaste || T[66] !== onInputChange || T[67] !== onSubmit || T[68] !== option || T[69] !== fe || T[70] !== columns_1) {
        tn = fe ? isFocused ? r(Y, {
            children: [
                r(n, {
                    color: "suggestion",
                    children: [
                        option.label,
                        option.labelValueSeparator ?? ", "
                    ]
                }),
                e(Sr, {
                    value: inputValue,
                    onChange: (Xe)=>{
                        if (option.onChange(Xe) === false) {
                            return;
                        }
                        Ce.current = true;
                        onInputChange(Xe);
                    },
                    onSubmit,
                    onExit,
                    placeholder: option.placeholder,
                    focus: !imagesSelected,
                    showCursor: true,
                    multiline: true,
                    cursorOffset: J,
                    onChangeCursorOffset: oe,
                    columns: columns_1,
                    onImagePaste,
                    onPaste: (on)=>{
                        let gt = inputValue.slice(0, J);
                        let Ho = inputValue.slice(J);
                        let jn = gt + on + Ho;
                        if (option.onChange(jn) === false) {
                            return;
                        }
                        Ce.current = true;
                        onInputChange(jn);
                        oe(gt.length + on.length);
                    }
                })
            ]
        }) : r(n, {
            children: [
                option.label,
                inputValue ? option.labelValueSeparator ?? ", " : null,
                inputValue || null
            ]
        }) : isFocused ? e(Sr, {
            value: inputValue,
            onChange: (Lt)=>{
                if (option.onChange(Lt) === false) {
                    return;
                }
                Ce.current = true;
                onInputChange(Lt);
            },
            onSubmit,
            onExit,
            placeholder: option.placeholder || (typeof option.label === "string" ? option.label : undefined),
            focus: !imagesSelected,
            showCursor: true,
            multiline: true,
            cursorOffset: J,
            onChangeCursorOffset: oe,
            columns: columns_1,
            onImagePaste,
            onPaste: (Hn)=>{
                let In = inputValue.slice(0, J);
                let wt = inputValue.slice(J);
                let sn = In + Hn + wt;
                if (option.onChange(sn) === false) {
                    return;
                }
                Ce.current = true;
                onInputChange(sn);
                oe(In.length + Hn.length);
            }
        }) : e(n, {
            color: inputValue ? undefined : "inactive",
            children: inputValue || option.placeholder || option.label
        });
        T[60] = J;
        T[61] = imagesSelected;
        T[62] = inputValue;
        T[63] = isFocused;
        T[64] = onExit;
        T[65] = onImagePaste;
        T[66] = onInputChange;
        T[67] = onSubmit;
        T[68] = option;
        T[69] = fe;
        T[70] = columns_1;
        T[71] = tn;
    } else {
        tn = T[71];
    }
    let at;
    if (T[72] !== children || T[73] !== flexShrink || T[74] !== Je || T[75] !== tn) {
        at = r(s, {
            flexDirection: "row",
            flexShrink,
            children: [
                Je,
                children,
                tn
            ]
        });
        T[72] = children;
        T[73] = flexShrink;
        T[74] = Je;
        T[75] = tn;
        T[76] = at;
    } else {
        at = T[76];
    }
    let ct;
    if (T[77] !== hoverStyle || T[78] !== isFocused || T[79] !== isSelected || T[80] !== onClick || T[81] !== shouldShowDownArrow || T[82] !== shouldShowUpArrow || T[83] !== at) {
        ct = e(Ree, {
            isFocused,
            isSelected,
            shouldShowDownArrow,
            shouldShowUpArrow,
            declareCursor: false,
            onClick,
            hoverStyle,
            children: at
        });
        T[77] = hoverStyle;
        T[78] = isFocused;
        T[79] = isSelected;
        T[80] = onClick;
        T[81] = shouldShowDownArrow;
        T[82] = shouldShowUpArrow;
        T[83] = at;
        T[84] = ct;
    } else {
        ct = T[84];
    }
    let je;
    if (T[85] !== paddingLeft || T[86] !== isFocused || T[87] !== isSelected || T[88] !== option.description || T[89] !== option.dimDescription) {
        je = option.description && e(s, {
            paddingLeft,
            children: e(n, {
                dimColor: option.dimDescription !== false,
                color: isSelected ? "success" : isFocused ? "suggestion" : undefined,
                children: option.description
            })
        });
        T[85] = paddingLeft;
        T[86] = isFocused;
        T[87] = isSelected;
        T[88] = option.description;
        T[89] = option.dimDescription;
        T[90] = je;
    } else {
        je = T[90];
    }
    let We;
    if (T[91] !== paddingLeft || T[92] !== U || T[93] !== imagesSelected || T[94] !== isFocused || T[95] !== pe) {
        We = U.length > 0 && r(s, {
            flexDirection: "row",
            gap: 1,
            paddingLeft,
            children: [
                U.map((zn, X)=>e(yo, {
                        imageId: zn.id,
                        isSelected: !!imagesSelected && X === pe
                    }, zn.id)),
                e(s, {
                    flexGrow: 1,
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    children: e(n, {
                        dimColor: true,
                        children: imagesSelected ? r(be, {
                            children: [
                                U.length > 1 && r(Y, {
                                    children: [
                                        e(ut, {
                                            action: "attachments:next",
                                            context: "Attachments",
                                            fallback: "→",
                                            description: "next"
                                        }),
                                        e(ut, {
                                            action: "attachments:previous",
                                            context: "Attachments",
                                            fallback: "←",
                                            description: "prev"
                                        })
                                    ]
                                }),
                                e(ut, {
                                    action: "attachments:remove",
                                    context: "Attachments",
                                    fallback: "backspace",
                                    description: "remove"
                                }),
                                e(ut, {
                                    action: "attachments:exit",
                                    context: "Attachments",
                                    fallback: "esc",
                                    description: "cancel"
                                })
                            ]
                        }) : isFocused ? e(G, {
                            chord: "down",
                            action: "select",
                            parens: true
                        }) : null
                    })
                })
            ]
        });
        T[91] = paddingLeft;
        T[92] = U;
        T[93] = imagesSelected;
        T[94] = isFocused;
        T[95] = pe;
        T[96] = We;
    } else {
        We = T[96];
    }
    let rn;
    if (T[97] !== layout) {
        rn = layout === "expanded" && e(n, {
            children: " "
        });
        T[97] = layout;
        T[98] = rn;
    } else {
        rn = T[98];
    }
    let Vt;
    if (T[99] !== ct || T[100] !== je || T[101] !== We || T[102] !== rn) {
        Vt = r(s, {
            flexDirection: "column",
            flexShrink: 0,
            children: [
                ct,
                je,
                We,
                rn
            ]
        });
        T[99] = ct;
        T[100] = je;
        T[101] = We;
        T[102] = rn;
        T[103] = Vt;
    } else {
        Vt = T[103];
    }
    return Vt;
}
N();
const Oi = ({ isDisabled = false, disableSelection = false, state, options, isMultiSelect = false, onUpFromFirstItem, onDownFromLastItem, onInputModeToggle, inputValues, imagesSelected = false, onEnterImageSelection, onExitImageSelection, hasInkFocus = true })=>{
    let { focusDirection } = uve();
    sa("select", !!state.onCancel);
    let L = Z(()=>options.find((x)=>x.value === state.focusedValue)?.type === "input", [
        options,
        state.focusedValue
    ]);
    let j = Z(()=>{
        let v = {};
        if (!L) {
            v["select:next"] = ()=>{
                let x = options.at(-1);
                if (x && state.getFocusedValue() === x.value) {
                    if (onDownFromLastItem) {
                        onDownFromLastItem();
                        return;
                    }
                    if (focusDirection("down")) {
                        return;
                    }
                }
                state.focusNextOption();
            };
            v["select:previous"] = ()=>{
                let x = options[0];
                if (x && state.getFocusedValue() === x.value) {
                    if (onUpFromFirstItem) {
                        onUpFromFirstItem();
                        return;
                    }
                    if (focusDirection("up")) {
                        return;
                    }
                }
                state.focusPreviousOption();
            };
            v["select:first"] = ()=>{
                state.focusOption(options[0]?.value);
            };
            v["select:last"] = ()=>{
                state.focusOption(options.at(-1)?.value);
            };
            v["select:accept"] = ()=>{
                if (disableSelection === true) {
                    return;
                }
                let x = state.getFocusedValue();
                if (x === undefined) {
                    return;
                }
                let A = options.find((W)=>W.value === x);
                if (A?.disabled === true) {
                    return;
                }
                if (A?.type === "input") {
                    return;
                }
                state.selectFocusedOption?.();
                state.onChange?.(x);
            };
        }
        if (state.onCancel) {
            v["select:cancel"] = ()=>{
                state.onCancel();
            };
        }
        return v;
    }, [
        options,
        state,
        onDownFromLastItem,
        onUpFromFirstItem,
        L,
        disableSelection,
        focusDirection
    ]);
    nn(j, {
        context: "Select",
        isActive: !isDisabled && hasInkFocus
    });
    return {
        handleKeyDown: (v)=>{
            if (isDisabled) {
                return;
            }
            let x = v9(v.key);
            let A = state.getFocusedValue();
            let W = options.find((C)=>C.value === A);
            let M = W?.type === "input";
            if (v.key === "tab") {
                v.preventDefault();
                if (onInputModeToggle && A !== undefined) {
                    onInputModeToggle(A);
                }
                return;
            }
            if (M) {
                if (imagesSelected) {
                    if (v.key === "up") {
                        v.preventDefault();
                        onExitImageSelection?.();
                    }
                    return;
                }
                if (v.key === "down" && onEnterImageSelection?.()) {
                    v.stopImmediatePropagation();
                    return;
                }
                if (v.key === "down" || v.ctrl && v.key === "n") {
                    if (onDownFromLastItem) {
                        let C = options.at(-1);
                        if (C && A === C.value) {
                            onDownFromLastItem();
                            v.stopImmediatePropagation();
                            return;
                        }
                    }
                    state.focusNextOption();
                    v.stopImmediatePropagation();
                    return;
                }
                if (v.key === "up" || v.ctrl && v.key === "p") {
                    if (onUpFromFirstItem) {
                        let C = options[0];
                        if (C && A === C.value) {
                            onUpFromFirstItem();
                            v.stopImmediatePropagation();
                            return;
                        }
                    }
                    state.focusPreviousOption();
                    v.stopImmediatePropagation();
                    return;
                }
                return;
            }
            if (L) {
                if (v.key === "down" || v.ctrl && v.key === "n") {
                    if (onDownFromLastItem) {
                        let C = options.at(-1);
                        if (C && A === C.value) {
                            onDownFromLastItem();
                            v.stopImmediatePropagation();
                            return;
                        }
                    }
                    state.focusNextOption();
                    v.stopImmediatePropagation();
                    return;
                }
                if (v.key === "up" || v.ctrl && v.key === "p") {
                    if (onUpFromFirstItem) {
                        let C = options[0];
                        if (C && A === C.value) {
                            onUpFromFirstItem();
                            v.stopImmediatePropagation();
                            return;
                        }
                    }
                    state.focusPreviousOption();
                    v.stopImmediatePropagation();
                    return;
                }
            }
            if (v.key === "pagedown") {
                v.preventDefault();
                state.focusNextPage();
                return;
            }
            if (v.key === "pageup") {
                v.preventDefault();
                state.focusPreviousPage();
                return;
            }
            if (disableSelection !== true) {
                if (isMultiSelect && d6(v.key) === " " && A !== undefined) {
                    if (W?.disabled !== true) {
                        v.preventDefault();
                        state.selectFocusedOption?.();
                        state.onChange?.(A);
                    }
                    return;
                }
                if (disableSelection !== "numeric" && /^[0-9]$/.test(x)) {
                    v.preventDefault();
                    let C = parseInt(x) - 1;
                    if (C >= 0 && C < state.options.length) {
                        let E = state.options[C];
                        if (E.disabled === true) {
                            return;
                        }
                        if (E.type === "input") {
                            if ((inputValues?.get(E.value) ?? "").trim()) {
                                state.onChange?.(E.value);
                                return;
                            }
                            if (E.allowEmptySubmitToCancel) {
                                state.onChange?.(E.value);
                                return;
                            }
                            state.focusOption(E.value);
                            return;
                        }
                        state.onChange?.(E.value);
                        return;
                    }
                }
            }
        }
    };
};
N();
N();
class To extends Map {
    first;
    last;
    constructor(o){
        let t = [];
        let i;
        let a;
        let previous;
        let f = 0;
        for (let c of o){
            let u = {
                value: c.value,
                previous,
                next: undefined,
                index: f
            };
            if (previous) {
                previous.next = u;
            }
            i ||= u;
            a = u;
            t.push([
                c.value,
                u
            ]);
            f++;
            previous = u;
        }
        super(t);
        this.first = i;
        this.last = a;
    }
}
const lc = (o, t)=>{
    switch(t.type){
        case "focus-next-option":
            {
                if (o.focusedValue === undefined) {
                    return o;
                }
                let i = o.optionMap.get(o.focusedValue);
                if (!i) {
                    return o;
                }
                let a = i.next || o.optionMap.first;
                if (!a) {
                    return o;
                }
                if (!i.next && a === o.optionMap.first) {
                    return {
                        ...o,
                        focusedValue: a.value,
                        visibleFromIndex: 0,
                        visibleToIndex: o.visibleOptionCount
                    };
                }
                if (!(a.index >= o.visibleToIndex)) {
                    return {
                        ...o,
                        focusedValue: a.value
                    };
                }
                let f = Math.min(o.optionMap.size, o.visibleToIndex + 1);
                let c = f - o.visibleOptionCount;
                return {
                    ...o,
                    focusedValue: a.value,
                    visibleFromIndex: c,
                    visibleToIndex: f
                };
            }
        case "focus-previous-option":
            {
                if (o.focusedValue === undefined) {
                    return o;
                }
                let i = o.optionMap.get(o.focusedValue);
                if (!i) {
                    return o;
                }
                let a = i.previous || o.optionMap.last;
                if (!a) {
                    return o;
                }
                if (!i.previous && a === o.optionMap.last) {
                    let u = o.optionMap.size;
                    let b = Math.max(0, u - o.visibleOptionCount);
                    return {
                        ...o,
                        focusedValue: a.value,
                        visibleFromIndex: b,
                        visibleToIndex: u
                    };
                }
                if (!(a.index <= o.visibleFromIndex)) {
                    return {
                        ...o,
                        focusedValue: a.value
                    };
                }
                let f = Math.max(0, o.visibleFromIndex - 1);
                let c = f + o.visibleOptionCount;
                return {
                    ...o,
                    focusedValue: a.value,
                    visibleFromIndex: f,
                    visibleToIndex: c
                };
            }
        case "focus-next-page":
            {
                if (o.focusedValue === undefined) {
                    return o;
                }
                let i = o.optionMap.get(o.focusedValue);
                if (!i) {
                    return o;
                }
                let a = Math.min(o.optionMap.size - 1, i.index + o.visibleOptionCount);
                let l = o.optionMap.first;
                while(l && l.index < a){
                    if (l.next) {
                        l = l.next;
                    } else {
                        break;
                    }
                }
                if (!l) {
                    return o;
                }
                let f = Math.min(o.optionMap.size, l.index + 1);
                let c = Math.max(0, f - o.visibleOptionCount);
                return {
                    ...o,
                    focusedValue: l.value,
                    visibleFromIndex: c,
                    visibleToIndex: f
                };
            }
        case "focus-previous-page":
            {
                if (o.focusedValue === undefined) {
                    return o;
                }
                let i = o.optionMap.get(o.focusedValue);
                if (!i) {
                    return o;
                }
                let a = Math.max(0, i.index - o.visibleOptionCount);
                let l = o.optionMap.first;
                while(l && l.index < a){
                    if (l.next) {
                        l = l.next;
                    } else {
                        break;
                    }
                }
                if (!l) {
                    return o;
                }
                let f = Math.max(0, l.index);
                let c = Math.min(o.optionMap.size, f + o.visibleOptionCount);
                return {
                    ...o,
                    focusedValue: l.value,
                    visibleFromIndex: f,
                    visibleToIndex: c
                };
            }
        case "reset":
            return t.state;
        case "scroll-viewport":
            {
                let i = Math.min(Math.max(0, o.optionMap.size - o.visibleOptionCount), Math.max(0, o.visibleFromIndex + t.delta));
                if (i === o.visibleFromIndex) {
                    return o;
                }
                let a = Math.min(o.optionMap.size, i + o.visibleOptionCount);
                let l = o.focusedValue === undefined ? undefined : o.optionMap.get(o.focusedValue);
                while(l?.next && l.index < i){
                    l = l.next;
                }
                while(l?.previous && l.index >= a){
                    l = l.previous;
                }
                return {
                    ...o,
                    focusedValue: l?.value,
                    visibleFromIndex: i,
                    visibleToIndex: a
                };
            }
        case "set-focus":
            {
                if (o.focusedValue === t.value) {
                    return o;
                }
                let i = o.optionMap.get(t.value);
                if (!i) {
                    return o;
                }
                if (i.index >= o.visibleFromIndex && i.index < o.visibleToIndex) {
                    return {
                        ...o,
                        focusedValue: t.value
                    };
                }
                let a;
                let l;
                if (i.index < o.visibleFromIndex) {
                    a = i.index;
                    l = Math.min(o.optionMap.size, a + o.visibleOptionCount);
                } else {
                    l = Math.min(o.optionMap.size, i.index + 1);
                    a = Math.max(0, l - o.visibleOptionCount);
                }
                return {
                    ...o,
                    focusedValue: t.value,
                    visibleFromIndex: a,
                    visibleToIndex: l
                };
            }
    }
};
const tl = ({ visibleOptionCount, options, initialFocusValue, currentViewport })=>{
    let l = typeof visibleOptionCount === "number" ? Math.min(visibleOptionCount, options.length) : options.length;
    let optionMap = new To(options);
    let c = initialFocusValue !== undefined && optionMap.get(initialFocusValue);
    let focusedValue = c ? initialFocusValue : optionMap.first?.value;
    let b = 0;
    let d = l;
    if (c) {
        let m = c.index;
        if (currentViewport) {
            if (m >= currentViewport.visibleFromIndex && m < currentViewport.visibleToIndex) {
                b = currentViewport.visibleFromIndex;
                d = Math.min(optionMap.size, b + l);
                if (m >= d) {
                    d = Math.min(optionMap.size, m + 1);
                    b = Math.max(0, d - l);
                }
                if (d - b < l) {
                    b = Math.max(0, d - l);
                }
            } else if (m < currentViewport.visibleFromIndex) {
                b = m;
                d = Math.min(optionMap.size, b + l);
                if (d - b < l) {
                    b = Math.max(0, d - l);
                }
            } else {
                d = Math.min(optionMap.size, m + 1);
                b = Math.max(0, d - l);
            }
        } else if (m >= l) {
            d = Math.min(optionMap.size, m + 1);
            b = Math.max(0, d - l);
        }
        b = Math.max(0, Math.min(b, optionMap.size - 1));
        d = Math.min(optionMap.size, Math.max(l, d));
    }
    return {
        optionMap,
        visibleOptionCount: l,
        focusedValue,
        visibleFromIndex: b,
        visibleToIndex: d
    };
};
function PYn({ visibleOptionCount = 5, options, onFocus, focusValue }) {
    let [l, f, c] = pd(()=>tl({
            visibleOptionCount,
            options,
            initialFocusValue: focusValue
        }));
    let u = le((g)=>{
        f((ue)=>lc(ue, g));
    }, [
        f
    ]);
    let b = Co((g)=>onFocus?.(g));
    let d = R(undefined);
    let [m, D] = y(options);
    let [I, O] = y(visibleOptionCount);
    let L = options !== m && !isDeepStrictEqual(options, m);
    let j = visibleOptionCount !== I;
    if (L || j) {
        let g = c();
        u({
            type: "reset",
            state: tl({
                visibleOptionCount,
                options,
                initialFocusValue: L ? focusValue ?? g.focusedValue : g.focusedValue ?? focusValue,
                currentViewport: {
                    visibleFromIndex: g.visibleFromIndex,
                    visibleToIndex: g.visibleToIndex
                }
            })
        });
        if (L) {
            D(options);
        }
        if (j) {
            O(visibleOptionCount);
        }
    }
    let h = le((g)=>{
        u(g);
        let ue = Ci(c().focusedValue, options);
        if (ue !== undefined && ue !== d.current) {
            d.current = ue;
            onFocus?.(ue);
        }
    }, [
        u,
        c,
        options,
        onFocus
    ]);
    let focusNextOption = le(()=>{
        h({
            type: "focus-next-option"
        });
    }, [
        h
    ]);
    let focusPreviousOption = le(()=>{
        h({
            type: "focus-previous-option"
        });
    }, [
        h
    ]);
    let focusNextPage = le(()=>{
        h({
            type: "focus-next-page"
        });
    }, [
        h
    ]);
    let focusPreviousPage = le(()=>{
        h({
            type: "focus-previous-page"
        });
    }, [
        h
    ]);
    let scrollViewport = le((delta)=>{
        let visibleFromIndex = c().visibleFromIndex;
        h({
            type: "scroll-viewport",
            delta
        });
        return c().visibleFromIndex !== visibleFromIndex;
    }, [
        h,
        c
    ]);
    let focusOption = le((g)=>{
        if (g !== undefined) {
            h({
                type: "set-focus",
                value: g
            });
        }
    }, [
        h
    ]);
    let visibleOptions = Z(()=>options.map((g, ue)=>({
                ...g,
                index: ue
            })).slice(l.visibleFromIndex, l.visibleToIndex), [
        options,
        l.visibleFromIndex,
        l.visibleToIndex
    ]);
    let focusedValue = Z(()=>Ci(l.focusedValue, options), [
        l.focusedValue,
        options
    ]);
    let getFocusedValue = le(()=>Ci(c().focusedValue, options), [
        c,
        options
    ]);
    P(()=>{
        if (focusedValue === undefined) {
            d.current = undefined;
            return;
        }
        if (focusedValue !== d.current) {
            d.current = focusedValue;
            b(focusedValue);
        }
    }, [
        focusedValue
    ]);
    P(()=>{
        if (focusValue !== undefined) {
            u({
                type: "set-focus",
                value: focusValue
            });
        }
    }, [
        focusValue,
        u
    ]);
    return {
        focusedValue,
        getFocusedValue,
        visibleFromIndex: l.visibleFromIndex,
        visibleToIndex: l.visibleToIndex,
        visibleOptions,
        focusNextOption,
        focusPreviousOption,
        focusNextPage,
        focusPreviousPage,
        focusOption,
        scrollViewport,
        options
    };
}
function Ci(focusedValue, options) {
    if (focusedValue === undefined) {
        return;
    }
    if (options.some((i)=>i.value === focusedValue)) {
        return focusedValue;
    }
    return options[0]?.value;
}
function Ti({ visibleOptionCount = 5, options, defaultValue, selectedValue, onChange, onCancel, onFocus, focusValue }) {
    let [b, d] = y(defaultValue);
    let m = PYn({
        visibleOptionCount,
        options,
        onFocus,
        focusValue
    });
    let { getFocusedValue } = m;
    let selectFocusedOption = le(()=>{
        d(getFocusedValue());
    }, [
        getFocusedValue
    ]);
    return {
        ...m,
        value: selectedValue !== undefined ? selectedValue : b,
        selectFocusedOption,
        onChange,
        onCancel
    };
}
N();
function I$t({ isDisabled, visibleFromIndex, visibleToIndex, optionCount, scrollViewport, shouldDropWheel }) {
    let c = R(null);
    if (isDisabled || visibleToIndex - visibleFromIndex >= optionCount) {
        return {
            ref: c,
            onWheel: undefined
        };
    }
    return {
        ref: c,
        onWheel: (b)=>{
            if (b.deltaY === 0 || shouldDropWheel()) {
                return;
            }
            let c_current = c.current;
            if (c_current !== null && b.col !== undefined && b.row !== undefined && Zq(c_current, b.col, b.row) === null) {
                return;
            }
            if (scrollViewport(b.deltaY > 0 ? 1 : -1)) {
                b.stopImmediatePropagation();
            }
        }
    };
}
function Np(Tf) {
    return Tf.type === "input";
}
function Lp(Df) {
    return Df.description;
}
function Up(Ff) {
    return Ff.type === "image";
}
function $p(Vf) {
    return Vf.type === "image";
}
function highlightedText() {
    return {
        bold: true
    };
}
function jp(kf) {
    return kf.type === "image";
}
function Hp(Mf) {
    return Mf.type === "image";
}
function zp(Rf) {
    return Rf.type === "image";
}
const Mi = Symbol("NO_COMMITTED_ROW");
function Ve(o) {
    let a = w(12);
    if (nt()) {
        const defaultValue = o.selectedValue === Mi ? o.defaultValue : o.selectedValue ?? o.defaultValue;
        let l;
        if (a[0] !== o.disableSelection || a[1] !== o.hidePromptWhileDisabled || a[2] !== o.isDisabled || a[3] !== o.onCancel || a[4] !== o.onChange || a[5] !== o.onFocus || a[6] !== o.options || a[7] !== o.refuseInput || a[8] !== defaultValue) {
            l = e(G9, {
                options: o.options,
                onChange: o.onChange,
                onFocus: o.onFocus,
                onCancel: o.onCancel,
                isDisabled: o.isDisabled,
                disableSelection: o.disableSelection,
                refuseInput: o.refuseInput,
                hidePromptWhileDisabled: o.hidePromptWhileDisabled,
                defaultValue
            });
            a[0] = o.disableSelection;
            a[1] = o.hidePromptWhileDisabled;
            a[2] = o.isDisabled;
            a[3] = o.onCancel;
            a[4] = o.onChange;
            a[5] = o.onFocus;
            a[6] = o.options;
            a[7] = o.refuseInput;
            a[8] = defaultValue;
            a[9] = l;
        } else {
            l = a[9];
        }
        return l;
    }
    let i;
    if (a[10] !== o) {
        i = e(Yi, {
            ...o
        });
        a[10] = o;
        a[11] = i;
    } else {
        i = a[11];
    }
    return i;
}
function Yi(o) {
    let k = w(84);
    let { isDisabled, hideIndexes, disablePrintableKeybindings, visibleOptionCount, hiddenBelowUnit, highlightText, options, columnSizingOptions, defaultValue, selectedValue, onCancel, onChange, onFocus, defaultFocusValue, layout, disableSelection, inlineDescriptions, hoverStyle, inputChromeWidth, onUpFromFirstItem, onDownFromLastItem, onInputModeToggle, onOpenEditor, canPasteImage, onImagePaste, pastedContents, onRemoveImage, pointerWhileDisabled } = o;
    let isDisabled_1 = isDisabled === undefined ? false : isDisabled;
    let hideIndex = hideIndexes === undefined ? false : hideIndexes;
    let ye = disablePrintableKeybindings === undefined ? false : disablePrintableKeybindings;
    let pe = visibleOptionCount === undefined ? 5 : visibleOptionCount;
    let Q = columnSizingOptions === undefined ? options : columnSizingOptions;
    let T = layout === undefined ? "compact" : layout;
    let ve = disableSelection === undefined ? false : disableSelection;
    let showLabel = inlineDescriptions === undefined ? false : inlineDescriptions;
    let extraChromeWidth = inputChromeWidth === undefined ? 0 : inputChromeWidth;
    let J = pointerWhileDisabled === undefined ? false : pointerWhileDisabled;
    let [oe, Ce] = y(false);
    let [selectedImageIndex, ne] = y(0);
    let Se;
    if (k[0] !== options) {
        Se = ()=>{
            let ee = new Map;
            options.forEach(($e)=>{
                if ($e.type === "input" && $e.initialValue) {
                    ee.set($e.value, $e.initialValue);
                }
            });
            return ee;
        };
        k[0] = options;
        k[1] = Se;
    } else {
        Se = k[1];
    }
    let [we, ft] = y(Se);
    let Ae;
    if (k[2] === S) {
        Ae = new Map;
        k[2] = Ae;
    } else {
        Ae = k[2];
    }
    let Bt = R(Ae);
    let Dt;
    let Nt;
    if (k[3] !== we || k[4] !== options) {
        Dt = ()=>{
            for (const Fe of options){
                if (Fe.type === "input" && Fe.initialValue !== undefined) {
                    let yt = Bt.current.get(Fe.value) ?? "";
                    let Ke = we.get(Fe.value) ?? "";
                    let Me = Fe.initialValue;
                    if (Me !== yt && Ke === yt) {
                        ft((rt)=>{
                            let Ge = new Map(rt);
                            Ge.set(Fe.value, Me);
                            return Ge;
                        });
                    }
                    Bt.current.set(Fe.value, Me);
                }
            }
        };
        Nt = [
            options,
            we
        ];
        k[3] = we;
        k[4] = options;
        k[5] = Dt;
        k[6] = Nt;
    } else {
        Dt = k[5];
        Nt = k[6];
    }
    P(Dt, Nt);
    let lt = T === "compact" && !showLabel && !Q.some(Np) && Q.some(Lp);
    let { columns } = ns(ke());
    const qe = O$t(pe, lt ? "compact-vertical" : T);
    let Ye;
    if (k[7] !== defaultFocusValue || k[8] !== defaultValue || k[9] !== onCancel || k[10] !== onChange || k[11] !== onFocus || k[12] !== options || k[13] !== selectedValue || k[14] !== qe) {
        Ye = {
            visibleOptionCount: qe,
            options,
            defaultValue,
            selectedValue,
            onChange,
            onCancel,
            onFocus,
            focusValue: defaultFocusValue
        };
        k[7] = defaultFocusValue;
        k[8] = defaultValue;
        k[9] = onCancel;
        k[10] = onChange;
        k[11] = onFocus;
        k[12] = options;
        k[13] = selectedValue;
        k[14] = qe;
        k[15] = Ye;
    } else {
        Ye = k[15];
    }
    let state = Ti(Ye);
    let [St, ht] = y(true);
    let bt = ib();
    let shouldDropWheel = Umt();
    let Ft;
    if (k[16] !== ve || k[17] !== isDisabled_1 || k[18] !== J || k[19] !== bt || k[20] !== state) {
        Ft = (Je)=>{
            if (isDisabled_1 && !J || ve === true || Je.disabled === true) {
                return undefined;
            }
            return (tn)=>{
                if (bt(tn)) {
                    return;
                }
                if (Je.type === "input") {
                    state.focusOption(Je.value);
                } else {
                    state.onChange?.(Je.value);
                }
            };
        };
        k[16] = ve;
        k[17] = isDisabled_1;
        k[18] = J;
        k[19] = bt;
        k[20] = state;
        k[21] = Ft;
    } else {
        Ft = k[21];
    }
    let Xe = Ft;
    const disableSelection_1 = ve || (hideIndex ? "numeric" : false);
    let onEnterImageSelection;
    if (k[22] !== pastedContents) {
        onEnterImageSelection = ()=>{
            if (pastedContents && Object.values(pastedContents).some(Up)) {
                let Ho = F(Object.values(pastedContents), $p);
                Ce(true);
                ne(Ho - 1);
                return true;
            }
            return false;
        };
        k[22] = pastedContents;
        k[23] = onEnterImageSelection;
    } else {
        onEnterImageSelection = k[23];
    }
    let onExitImageSelection;
    if (k[24] === S) {
        onExitImageSelection = ()=>{
            Ce(false);
        };
        k[24] = onExitImageSelection;
    } else {
        onExitImageSelection = k[24];
    }
    let Lt;
    if (k[25] !== St || k[26] !== oe || k[27] !== we || k[28] !== isDisabled_1 || k[29] !== onDownFromLastItem || k[30] !== onInputModeToggle || k[31] !== onUpFromFirstItem || k[32] !== options || k[33] !== state || k[34] !== disableSelection_1 || k[35] !== onEnterImageSelection) {
        Lt = {
            isDisabled: isDisabled_1,
            hasInkFocus: St,
            disableSelection: disableSelection_1,
            state,
            options,
            isMultiSelect: false,
            onUpFromFirstItem,
            onDownFromLastItem,
            onInputModeToggle,
            inputValues: we,
            imagesSelected: oe,
            onEnterImageSelection,
            onExitImageSelection
        };
        k[25] = St;
        k[26] = oe;
        k[27] = we;
        k[28] = isDisabled_1;
        k[29] = onDownFromLastItem;
        k[30] = onInputModeToggle;
        k[31] = onUpFromFirstItem;
        k[32] = options;
        k[33] = state;
        k[34] = disableSelection_1;
        k[35] = onEnterImageSelection;
        k[36] = Lt;
    } else {
        Lt = k[36];
    }
    let { handleKeyDown } = Oi(Lt);
    let In = R(null);
    $h(In, !isDisabled_1);
    let wt = {
        container: ()=>({
                flexDirection: "column",
                ref: In,
                ...isDisabled_1 ? {} : {
                    tabIndex: 0,
                    textEntry: ye ? true : undefined,
                    onKeyDown: handleKeyDown,
                    onFocus: ()=>ht(true),
                    onBlur: ()=>ht(false)
                }
            }),
        highlightedText
    };
    let sn;
    if (k[37] !== hiddenBelowUnit || k[38] !== options.length || k[39] !== state.visibleFromIndex || k[40] !== state.visibleToIndex) {
        sn = hiddenBelowUnit !== undefined && state.visibleToIndex - state.visibleFromIndex < options.length ? e(s, {
            paddingLeft: 3,
            height: 1,
            children: e(Sy, {
                count: options.length - state.visibleToIndex,
                unit: hiddenBelowUnit
            })
        }) : null;
        k[37] = hiddenBelowUnit;
        k[38] = options.length;
        k[39] = state.visibleFromIndex;
        k[40] = state.visibleToIndex;
        k[41] = sn;
    } else {
        sn = k[41];
    }
    let hiddenBelow = sn;
    let ct;
    if (k[42] !== isDisabled_1 || k[43] !== options.length || k[44] !== shouldDropWheel || k[45] !== state.scrollViewport || k[46] !== state.visibleFromIndex || k[47] !== state.visibleToIndex) {
        ct = {
            isDisabled: isDisabled_1,
            visibleFromIndex: state.visibleFromIndex,
            visibleToIndex: state.visibleToIndex,
            optionCount: options.length,
            scrollViewport: state.scrollViewport,
            shouldDropWheel
        };
        k[42] = isDisabled_1;
        k[43] = options.length;
        k[44] = shouldDropWheel;
        k[45] = state.scrollViewport;
        k[46] = state.visibleFromIndex;
        k[47] = state.visibleToIndex;
        k[48] = ct;
    } else {
        ct = k[48];
    }
    let rows = I$t(ct);
    if (T === "expanded") {
        let We;
        if (k[49] !== hideIndex || k[50] !== state.options) {
            We = hideIndex ? 0 : state.options.length.toString().length;
            k[49] = hideIndex;
            k[50] = state.options;
            k[51] = We;
        } else {
            We = k[51];
        }
        let maxIndexWidth = We;
        return e(Tt, {
            container: wt.container(),
            rows,
            hiddenBelow,
            children: state.visibleOptions.map((X, rn)=>{
                let Vt = X.index === state.visibleFromIndex;
                let ln = X.index === state.visibleToIndex - 1;
                let yn = state.visibleToIndex < options.length;
                let kt = state.visibleFromIndex > 0;
                let zo = state.visibleFromIndex + rn + 1;
                let Sn = !isDisabled_1 && state.focusedValue === X.value;
                let an = state.value === X.value;
                if (X.type === "input") {
                    let _n = we.has(X.value) ? we.get(X.value) : X.initialValue || "";
                    return e(lve, {
                        option: X,
                        onClick: Xe(X),
                        hoverStyle,
                        isFocused: Sn,
                        isSelected: an,
                        shouldShowDownArrow: yn && ln,
                        shouldShowUpArrow: kt && Vt,
                        maxIndexWidth,
                        index: zo,
                        hideIndex,
                        extraChromeWidth,
                        inputValue: _n,
                        onInputChange: (Xi)=>{
                            ft((jl)=>{
                                let Qi = new Map(jl);
                                Qi.set(X.value, Xi);
                                return Qi;
                            });
                        },
                        onSubmit: (Hl)=>{
                            let zl = pastedContents && Object.values(pastedContents).some(jp);
                            if (Hl.trim() || zl || X.allowEmptySubmitToCancel) {
                                onChange?.(X.value);
                            } else {
                                onCancel?.();
                            }
                        },
                        onExit: onCancel,
                        layout: "expanded",
                        showLabel,
                        onOpenEditor,
                        resetCursorOnUpdate: X.resetCursorOnUpdate,
                        canPasteImage,
                        onImagePaste,
                        pastedContents,
                        onRemoveImage,
                        imagesSelected: oe,
                        selectedImageIndex,
                        onImagesSelectedChange: Ce,
                        onSelectedImageIndexChange: ne
                    }, String(X.value));
                }
                let X_label = X.label;
                if (typeof X.label === "string" && highlightText && X.label.includes(highlightText)) {
                    let es = X.label;
                    let _l = es.indexOf(highlightText);
                    X_label = r(Y, {
                        children: [
                            es.slice(0, _l),
                            e(n, {
                                ...wt.highlightedText(),
                                children: highlightText
                            }),
                            es.slice(_l + highlightText.length)
                        ]
                    });
                }
                let ts = X.disabled === true;
                let color = ts ? undefined : an ? "success" : Sn ? "suggestion" : undefined;
                return r(s, {
                    flexDirection: "column",
                    flexShrink: 0,
                    children: [
                        e(Ree, {
                            isFocused: Sn,
                            isSelected: an,
                            shouldShowDownArrow: yn && ln,
                            shouldShowUpArrow: kt && Vt,
                            onClick: Xe(X),
                            hoverStyle,
                            children: e(n, {
                                dimColor: ts,
                                color,
                                children: X_label
                            })
                        }),
                        X.description && e(s, {
                            paddingLeft: 2,
                            children: e(n, {
                                dimColor: ts || X.dimDescription !== false,
                                color,
                                children: e(Do, {
                                    children: X.description
                                })
                            })
                        }),
                        e(n, {
                            children: " "
                        })
                    ]
                }, String(X.value));
            })
        });
    }
    if (T === "compact-vertical") {
        let We;
        if (k[52] !== hideIndex || k[53] !== state.options) {
            We = hideIndex ? 0 : state.options.length.toString().length;
            k[52] = hideIndex;
            k[53] = state.options;
            k[54] = We;
        } else {
            We = k[54];
        }
        let os = We;
        return e(Tt, {
            container: wt.container(),
            rows,
            hiddenBelow,
            children: state.visibleOptions.map((re, _p)=>{
                let ql = re.index === state.visibleFromIndex;
                let Yl = re.index === state.visibleToIndex - 1;
                let Jl = state.visibleToIndex < options.length;
                let Xl = state.visibleFromIndex > 0;
                let Ql = state.visibleFromIndex + _p + 1;
                let _o = !isDisabled_1 && state.focusedValue === re.value;
                let Go = state.value === re.value;
                if (re.type === "input") {
                    let Gp = we.has(re.value) ? we.get(re.value) : re.initialValue || "";
                    return e(lve, {
                        option: re,
                        onClick: Xe(re),
                        hoverStyle,
                        isFocused: _o,
                        isSelected: Go,
                        shouldShowDownArrow: Jl && Yl,
                        shouldShowUpArrow: Xl && ql,
                        maxIndexWidth: os,
                        index: Ql,
                        hideIndex,
                        extraChromeWidth,
                        inputValue: Gp,
                        onInputChange: (qp)=>{
                            ft((Yp)=>{
                                let Zl = new Map(Yp);
                                Zl.set(re.value, qp);
                                return Zl;
                            });
                        },
                        onSubmit: (Jp)=>{
                            let Xp = pastedContents && Object.values(pastedContents).some(Hp);
                            if (Jp.trim() || Xp || re.allowEmptySubmitToCancel) {
                                onChange?.(re.value);
                            } else {
                                onCancel?.();
                            }
                        },
                        onExit: onCancel,
                        layout: "compact",
                        showLabel,
                        onOpenEditor,
                        resetCursorOnUpdate: re.resetCursorOnUpdate,
                        canPasteImage,
                        onImagePaste,
                        pastedContents,
                        onRemoveImage,
                        imagesSelected: oe,
                        selectedImageIndex,
                        onImagesSelectedChange: Ce,
                        onSelectedImageIndexChange: ne
                    }, String(re.value));
                }
                let re_label = re.label;
                if (typeof re.label === "string" && highlightText && re.label.includes(highlightText)) {
                    let is = re.label;
                    let ta = is.indexOf(highlightText);
                    re_label = r(Y, {
                        children: [
                            is.slice(0, ta),
                            e(n, {
                                ...wt.highlightedText(),
                                children: highlightText
                            }),
                            is.slice(ta + highlightText.length)
                        ]
                    });
                }
                let qo = re.disabled === true;
                return r(s, {
                    flexDirection: "column",
                    flexShrink: 0,
                    children: [
                        e(Ree, {
                            isFocused: _o,
                            isSelected: Go,
                            shouldShowDownArrow: Jl && Yl,
                            shouldShowUpArrow: Xl && ql,
                            onClick: Xe(re),
                            hoverStyle,
                            children: r(Y, {
                                children: [
                                    !hideIndex && e(n, {
                                        dimColor: true,
                                        children: `${Ql}.`.padEnd(os + 1)
                                    }),
                                    e(n, {
                                        dimColor: qo,
                                        color: qo ? undefined : Go ? "success" : _o ? "suggestion" : undefined,
                                        children: re_label
                                    })
                                ]
                            })
                        }),
                        re.description && e(s, {
                            paddingLeft: hideIndex ? 4 : os + 4,
                            children: e(n, {
                                dimColor: qo || re.dimDescription !== false,
                                color: qo ? undefined : Go ? "success" : _o ? "suggestion" : undefined,
                                children: e(Do, {
                                    children: re.description
                                })
                            })
                        })
                    ]
                }, String(re.value));
            })
        });
    }
    let We;
    if (k[55] !== Q || k[56] !== hideIndex) {
        We = hideIndex ? 0 : Q.length.toString().length;
        k[55] = Q;
        k[56] = hideIndex;
        k[57] = We;
    } else {
        We = k[57];
    }
    let Ut = We;
    if (lt) {
        let $t;
        let Gn;
        if (k[58] !== columns || k[59] !== Q || k[60] !== hideIndex || k[61] !== Ut || k[62] !== state.value) {
            $t = hideIndex ? 0 : Ut + 2;
            let Kt;
            if (k[65] !== Q || k[66] !== $t || k[67] !== state.value) {
                let Mt;
                if (k[69] !== $t || k[70] !== state.value) {
                    Mt = (ss)=>{
                        if (ss.type === "input") {
                            return 0;
                        }
                        let Qp = state.value === ss.value ? 2 : 0;
                        return 2 + $t + ae(XP(ss.label)) + Qp;
                    };
                    k[69] = $t;
                    k[70] = state.value;
                    k[71] = Mt;
                } else {
                    Mt = k[71];
                }
                Kt = Math.max(...Q.map(Mt));
                k[65] = Q;
                k[66] = $t;
                k[67] = state.value;
                k[68] = Kt;
            } else {
                Kt = k[68];
            }
            Gn = Math.min(Kt, Math.floor(columns * Nl));
            k[58] = columns;
            k[59] = Q;
            k[60] = hideIndex;
            k[61] = Ut;
            k[62] = state.value;
            k[63] = $t;
            k[64] = Gn;
        } else {
            $t = k[63];
            Gn = k[64];
        }
        let af = state.visibleOptions.map((jt, Zp)=>{
            let ef = jt.index === state.visibleFromIndex;
            let tf = jt.index === state.visibleToIndex - 1;
            let nf = state.visibleToIndex < options.length;
            let of = state.visibleFromIndex > 0;
            let sf = state.visibleFromIndex + Zp + 1;
            let rf = !isDisabled_1 && state.focusedValue === jt.value;
            let na = state.value === jt.value;
            let isOptionDisabled = jt.disabled === true;
            let oa = na ? 2 : 0;
            let qn = XP(jt.label);
            let jt_label = jt.label;
            let ia = Gn - 2 - $t - oa;
            if (ae(qn) > ia) {
                qn = pt(qn, ia);
                jt_label = qn;
            }
            if (typeof jt_label === "string" && highlightText && jt_label.includes(highlightText)) {
                let rs = jt_label;
                let ra = rs.indexOf(highlightText);
                jt_label = r(Y, {
                    children: [
                        rs.slice(0, ra),
                        e(n, {
                            ...wt.highlightedText(),
                            children: highlightText
                        }),
                        rs.slice(ra + highlightText.length)
                    ]
                });
            }
            return {
                option: jt,
                index: sf,
                label: jt_label,
                labelWidth: 2 + $t + ae(qn) + oa,
                isFocused: rf,
                isSelected: na,
                isOptionDisabled,
                shouldShowDownArrow: nf && tf,
                shouldShowUpArrow: of && ef
            };
        });
        const container = wt.container();
        let Mt;
        if (k[72] !== Xe || k[73] !== hideIndex || k[74] !== hoverStyle || k[75] !== Ut || k[76] !== Gn) {
            Mt = (me)=>{
                if (me.option.type === "input") {
                    return null;
                }
                let la = Gn - me.labelWidth;
                return r(Ji, {
                    isFocused: me.isFocused,
                    shouldShowDownArrow: me.shouldShowDownArrow,
                    shouldShowUpArrow: me.shouldShowUpArrow,
                    onClick: Xe(me.option),
                    hoverStyle,
                    children: [
                        r(s, {
                            flexDirection: "row",
                            flexShrink: 0,
                            children: [
                                e(n, {
                                    children: " "
                                }),
                                r(n, {
                                    dimColor: me.isOptionDisabled,
                                    color: me.isOptionDisabled ? undefined : me.isSelected ? "success" : me.isFocused ? "suggestion" : undefined,
                                    children: [
                                        !hideIndex && e(n, {
                                            dimColor: true,
                                            children: `${me.index}.`.padEnd(Ut + 2)
                                        }),
                                        me.label
                                    ]
                                }),
                                me.isSelected && r(n, {
                                    children: [
                                        " ",
                                        e(dt, {
                                            status: "success"
                                        })
                                    ]
                                }),
                                la > 0 && e(n, {
                                    children: " ".repeat(la)
                                })
                            ]
                        }),
                        e(s, {
                            flexGrow: 1,
                            marginLeft: 2,
                            children: e(n, {
                                wrap: "wrap",
                                dimColor: me.option.descriptionColor === undefined && (me.isOptionDisabled || me.option.dimDescription !== false),
                                color: me.isOptionDisabled ? me.option.descriptionColor : me.isSelected ? "success" : me.isFocused ? "suggestion" : me.option.descriptionColor,
                                children: e(Do, {
                                    children: me.option.description || " "
                                })
                            })
                        })
                    ]
                }, String(me.option.value));
            };
            k[72] = Xe;
            k[73] = hideIndex;
            k[74] = hoverStyle;
            k[75] = Ut;
            k[76] = Gn;
            k[77] = Mt;
        } else {
            Mt = k[77];
        }
        return e(Tt, {
            container,
            rows,
            hiddenBelow,
            children: af.map(Mt)
        });
    }
    const ls = Tt;
    const container = wt.container();
    const Mt = state.visibleOptions.map((z, aa)=>{
        if (z.type === "input") {
            let uf = we.has(z.value) ? we.get(z.value) : z.initialValue || "";
            let df = z.index === state.visibleFromIndex;
            let cf = z.index === state.visibleToIndex - 1;
            let pf = state.visibleToIndex < options.length;
            let ff = state.visibleFromIndex > 0;
            let mf = state.visibleFromIndex + aa + 1;
            let hf = !isDisabled_1 && state.focusedValue === z.value;
            let isSelected = state.value === z.value;
            return e(lve, {
                option: z,
                onClick: Xe(z),
                hoverStyle,
                isFocused: hf,
                isSelected,
                shouldShowDownArrow: pf && cf,
                shouldShowUpArrow: ff && df,
                maxIndexWidth: Ut,
                index: mf,
                hideIndex,
                extraChromeWidth,
                inputValue: uf,
                onInputChange: (vf)=>{
                    ft((gf)=>{
                        let ua = new Map(gf);
                        ua.set(z.value, vf);
                        return ua;
                    });
                },
                onSubmit: (xf)=>{
                    let If = pastedContents && Object.values(pastedContents).some(zp);
                    if (xf.trim() || If || z.allowEmptySubmitToCancel) {
                        onChange?.(z.value);
                    } else {
                        onCancel?.();
                    }
                },
                onExit: onCancel,
                layout: "compact",
                showLabel,
                onOpenEditor,
                resetCursorOnUpdate: z.resetCursorOnUpdate,
                canPasteImage,
                onImagePaste,
                pastedContents,
                onRemoveImage,
                imagesSelected: oe,
                selectedImageIndex,
                onImagesSelectedChange: Ce,
                onSelectedImageIndexChange: ne
            }, String(z.value));
        }
        let z_label = z.label;
        if (typeof z.label === "string" && highlightText && z.label.includes(highlightText)) {
            let as = z.label;
            let ca = as.indexOf(highlightText);
            z_label = r(Y, {
                children: [
                    as.slice(0, ca),
                    e(n, {
                        ...wt.highlightedText(),
                        children: highlightText
                    }),
                    as.slice(ca + highlightText.length)
                ]
            });
        }
        let yf = z.index === state.visibleFromIndex;
        let Sf = z.index === state.visibleToIndex - 1;
        let wf = state.visibleToIndex < options.length;
        let Of = state.visibleFromIndex > 0;
        let Cf = state.visibleFromIndex + aa + 1;
        let us = !isDisabled_1 && state.focusedValue === z.value;
        let ds = state.value === z.value;
        let Yn = z.disabled === true;
        return r(Ree, {
            isFocused: us,
            isSelected: ds,
            shouldShowDownArrow: wf && Sf,
            shouldShowUpArrow: Of && yf,
            onClick: Xe(z),
            hoverStyle,
            children: [
                r(s, {
                    flexDirection: "row",
                    flexShrink: 0,
                    children: [
                        !hideIndex && e(n, {
                            dimColor: true,
                            children: `${Cf}.`.padEnd(Ut + 2)
                        }),
                        r(n, {
                            dimColor: Yn,
                            color: Yn ? undefined : ds ? "success" : us ? "suggestion" : undefined,
                            children: [
                                z_label,
                                showLabel && z.description && r(n, {
                                    dimColor: Yn || z.dimDescription !== false,
                                    children: [
                                        " ",
                                        z.description
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                !showLabel && z.description && e(s, {
                    flexShrink: 99,
                    marginLeft: 2,
                    children: e(n, {
                        wrap: "wrap-trim",
                        dimColor: Yn || z.dimDescription !== false,
                        color: Yn ? undefined : ds ? "success" : us ? "suggestion" : undefined,
                        children: e(Do, {
                            children: z.description
                        })
                    })
                })
            ]
        }, String(z.value));
    });
    let pa;
    if (k[78] !== ls || k[79] !== hiddenBelow || k[80] !== rows || k[81] !== container || k[82] !== Mt) {
        pa = e(ls, {
            container,
            rows,
            hiddenBelow,
            children: Mt
        });
        k[78] = ls;
        k[79] = hiddenBelow;
        k[80] = rows;
        k[81] = container;
        k[82] = Mt;
        k[83] = pa;
    } else {
        pa = k[83];
    }
    return pa;
}
const Bl = 8;
var Nl = 0.6;
function O$t(o, t) {
    let i = t === undefined ? "compact" : t;
    let { rows } = ns(ke());
    let l = i === "expanded" ? 3 : i === "compact" ? 1 : 2;
    let f = Math.max(1, Math.floor((rows - Bl) / l));
    return Math.min(o, f);
}
function Tt(o) {
    let f = w(7);
    let { container, rows, hiddenBelow, children } = o;
    let c;
    if (f[0] !== children || f[1] !== rows) {
        c = e(ave, {
            ...rows,
            children
        });
        f[0] = children;
        f[1] = rows;
        f[2] = c;
    } else {
        c = f[2];
    }
    let u;
    if (f[3] !== container || f[4] !== hiddenBelow || f[5] !== c) {
        u = r(s, {
            ...container,
            children: [
                c,
                hiddenBelow
            ]
        });
        f[3] = container;
        f[4] = hiddenBelow;
        f[5] = c;
        f[6] = u;
    } else {
        u = f[6];
    }
    return u;
}
function Ji(o) {
    let I = w(24);
    let { isFocused, shouldShowDownArrow, shouldShowUpArrow, onClick, hoverStyle, children } = o;
    let u = onClick !== undefined;
    let [b, d] = pje(u);
    let m = ive(hoverStyle);
    let D = u && b && m === "inverse";
    let O;
    if (I[0] !== isFocused) {
        O = {
            line: 0,
            column: 0,
            active: isFocused
        };
        I[0] = isFocused;
        I[1] = O;
    } else {
        O = I[1];
    }
    let L = Qw(O);
    const j = u && b && m === "tint" ? mA : undefined;
    let h;
    if (I[2] !== u || I[3] !== d) {
        h = u ? ()=>d(true) : undefined;
        I[2] = u;
        I[3] = d;
        I[4] = h;
    } else {
        h = I[4];
    }
    let v;
    if (I[5] !== u || I[6] !== d) {
        v = u ? ()=>d(false) : undefined;
        I[5] = u;
        I[6] = d;
        I[7] = v;
    } else {
        v = I[7];
    }
    let x;
    if (I[8] !== u || I[9] !== m || I[10] !== b || I[11] !== D || I[12] !== isFocused || I[13] !== shouldShowDownArrow || I[14] !== shouldShowUpArrow) {
        x = e(s, {
            flexShrink: 0,
            children: isFocused ? e(n, {
                color: "suggestion",
                inverse: D,
                children: te.pointer
            }) : shouldShowDownArrow ? e(n, {
                dimColor: true,
                inverse: D,
                children: te.arrowDown
            }) : shouldShowUpArrow ? e(n, {
                dimColor: true,
                inverse: D,
                children: te.arrowUp
            }) : u && b && m === "pointer" ? e(n, {
                dimColor: true,
                children: te.pointer
            }) : e(n, {
                inverse: D,
                children: " "
            })
        });
        I[8] = u;
        I[9] = m;
        I[10] = b;
        I[11] = D;
        I[12] = isFocused;
        I[13] = shouldShowDownArrow;
        I[14] = shouldShowUpArrow;
        I[15] = x;
    } else {
        x = I[15];
    }
    let A;
    if (I[16] !== children || I[17] !== L || I[18] !== onClick || I[19] !== j || I[20] !== h || I[21] !== v || I[22] !== x) {
        A = r(s, {
            ref: L,
            flexDirection: "row",
            flexShrink: 0,
            backgroundColor: j,
            onClick,
            onMouseEnter: h,
            onMouseLeave: v,
            children: [
                x,
                children
            ]
        });
        I[16] = children;
        I[17] = L;
        I[18] = onClick;
        I[19] = j;
        I[20] = h;
        I[21] = v;
        I[22] = x;
        I[23] = A;
    } else {
        A = I[23];
    }
    return A;
}
export { mA, ive, ave, pje, gA, Ma, by, Dc, P$t, ms, G9, RYn, xYn, Ree, lve, pd, PYn, I$t, Mi, Ve, O$t };
