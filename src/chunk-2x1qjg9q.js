import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Gb, el, ns, Mfe, zXe } from "/$bunfs/root/chunk-2mjaqpws.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { EU } from "/$bunfs/root/chunk-4nfvaqps.js";
import { ae } from "/$bunfs/root/chunk-223dyewd.js";
import { xC } from "/$bunfs/root/chunk-zanprt34.js";
import { s, n, Qw, uve, V9, Ks } from "/$bunfs/root/chunk-8524cxt8.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { qt, le, Te, en, Z, gh, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { nn } from "/$bunfs/root/chunk-z47a2vff.js";
import { ib } from "/$bunfs/root/chunk-7hj88wg6.js";
import { Yw } from "/$bunfs/root/chunk-fd5jy0v5.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function ko(dt) {
    return [
        dt.props.id ?? dt.props.title,
        dt.props.title
    ];
}
function xo(Qo) {
    return Qo + 1;
}
function To(Xo, [, xn]) {
    return Xo + (xn ? ae(xn) : 0) + 2 + 1;
}
function Fo(x) {
    return x + 1;
}
function Co(C) {
    return C - 1;
}
const m = qt({
    selectedTab: undefined,
    width: undefined,
    headerFocused: false,
    focusHeader: ()=>{},
    blurHeader: ()=>{},
    registerOptIn: ()=>()=>{},
    registerNavigationOwner: ()=>()=>{}
});
function sb(d) {
    let h = w(52);
    let { title, color, defaultTab, children, hidden, useFullWidth, selectedTab, onTabChange, banner, disableNavigation, initialHeaderFocused, contentHeight, stableHeight, navFromContent } = d;
    let L = initialHeaderFocused === undefined ? true : initialHeaderFocused;
    let p = stableHeight === undefined ? false : stableHeight;
    let jt = navFromContent === undefined ? false : navFromContent;
    let { columns } = ke();
    let g = children.map(ko);
    let ve = defaultTab ? g.findIndex((oe)=>defaultTab === oe[0]) : 0;
    let Ue = selectedTab !== undefined;
    let [Ho, Ro] = y(ve !== -1 ? ve : 0);
    let Gt = Ue ? g.findIndex((yo)=>yo[0] === selectedTab) : -1;
    let D = Ue ? Gt !== -1 ? Gt : 0 : Ho;
    let we = Te(Gb);
    let O = Mfe();
    let M = zXe();
    let Ye = R(null);
    let [xe, So] = y(0);
    let re = R(null);
    let [Fe, Io] = y(1);
    let Ut;
    if (h[0] !== xe || h[1] !== Fe) {
        Ut = ()=>{
            let Yt = Ye.current ? Ks(Ye.current).height : 0;
            if (Yt !== xe) {
                So(Yt);
            }
            let _t = re.current ? Math.max(1, Ks(re.current).height) : 1;
            if (_t !== Fe) {
                Io(_t);
            }
        };
        h[0] = xe;
        h[1] = Fe;
        h[2] = Ut;
    } else {
        Ut = h[2];
    }
    en(Ut);
    let ie = (hidden ? 0 : Fe + 1) + xe;
    let zt;
    let Jt;
    if (h[3] !== M || h[4] !== ie) {
        zt = ()=>{
            if (!M) {
                return;
            }
            M(ie);
            return ()=>M(null);
        };
        Jt = [
            M,
            ie
        ];
        h[3] = M;
        h[4] = ie;
        h[5] = zt;
        h[6] = Jt;
    } else {
        zt = h[5];
        Jt = h[6];
    }
    en(zt, Jt);
    let Qt;
    if (h[7] === S) {
        Qt = {
            rows: 0,
            columns: 0
        };
        h[7] = Qt;
    } else {
        Qt = h[7];
    }
    let { rows } = ns(Qt);
    let W = M !== null && O !== null;
    let _e = O?.attach;
    let Ce = W ? rows - ie : undefined;
    let Xt;
    if (h[8] !== we || h[9] !== W) {
        Xt = we && W ? {
            ...we,
            claimScrollBox: null
        } : null;
        h[8] = we;
        h[9] = W;
        h[10] = Xt;
    } else {
        Xt = h[10];
    }
    let qe = Xt;
    let wr = true;
    let de = R(null);
    let ze = R(null);
    let { focus, activeElement, focusDirection, blur } = uve();
    let [G, se] = y(L);
    let Zt;
    if (h[11] !== activeElement || h[12] !== focus) {
        Zt = ()=>{
            if (true && re.current) {
                focus(re.current);
            } else if (false && de.current) {
                if (activeElement && activeElement !== de.current && EU(activeElement, de.current)) {
                    ze.current = activeElement;
                }
                focus(de.current);
            }
            se(true);
        };
        h[11] = activeElement;
        h[12] = focus;
        h[13] = Zt;
    } else {
        Zt = h[13];
    }
    let focusHeader = Zt;
    let tn;
    if (h[14] !== blur || h[15] !== focus) {
        tn = (on)=>{
            if (true && on) {
                focus(on);
            } else {
                blur();
            }
            ze.current = null;
            se(false);
        };
        h[14] = blur;
        h[15] = focus;
        h[16] = tn;
    } else {
        tn = h[16];
    }
    let blurHeader = tn;
    let [E, registerOptIn] = te();
    let [Mo, registerNavigationOwner] = te();
    let A = disableNavigation || Mo;
    let rn = G || !E;
    let Xe = R(null);
    let Bo = V9(Xe);
    let Eo = true && !E ? !Bo : rn;
    let [an, Ao] = gh(xo, 0);
    let ln = R(null);
    let dn;
    if (h[17] === S) {
        dn = ()=>{
            ze.current = null;
        };
        h[17] = dn;
    } else {
        dn = h[17];
    }
    en(dn, [
        D
    ]);
    let un = (index, sn)=>{
        let Po = sn === undefined ? false : sn;
        ln.current = {
            epoch: an,
            index
        };
        Ao();
        let cn = g[index]?.[0];
        if (Ue && onTabChange && cn) {
            onTabChange(cn);
        } else {
            Ro(index);
        }
        if (Po) {
            return;
        }
        focusHeader();
    };
    let He = (Vo, hn)=>{
        let Ko = hn === undefined ? false : hn;
        let ln_current = ln.current;
        let Lo = ln_current?.epoch === an ? ln_current.index : D;
        un((Lo + g.length + Vo) % g.length, Ko);
    };
    const $e = !hidden && !A && rn;
    let bn;
    if (h[18] !== $e) {
        bn = {
            context: "Tabs",
            isActive: $e
        };
        h[18] = $e;
        h[19] = bn;
    } else {
        bn = h[19];
    }
    nn({
        "tabs:next": ()=>He(1),
        "tabs:previous": ()=>He(-1)
    }, bn);
    let pn;
    if (h[20] !== A || h[21] !== focusDirection || h[22] !== G || h[23] !== hidden || h[24] !== E) {
        pn = (f)=>{
            if (hidden || A) {
                return;
            }
            if (!G) {
                if (f.key === "left" || f.key === "right" || f.key === "tab" || E && (f.key === "up" || f.key === "down")) {
                    f.preventDefault();
                }
                return;
            }
            if (f.key === "left" || f.key === "right" || f.key === "tab") {
                f.preventDefault();
            } else if (f.key === "down" && E) {
                f.preventDefault();
                focusDirection("down");
                se(false);
            }
        };
        h[20] = A;
        h[21] = focusDirection;
        h[22] = G;
        h[23] = hidden;
        h[24] = E;
        h[25] = pn;
    } else {
        pn = h[25];
    }
    let mn = pn;
    const et = jt && !G && E && !hidden && !A;
    let gn;
    if (h[26] !== et) {
        gn = {
            context: "Tabs",
            isActive: et
        };
        h[26] = et;
        h[27] = gn;
    } else {
        gn = h[27];
    }
    nn({
        "tabs:next": ()=>He(1, true),
        "tabs:previous": ()=>He(-1, true)
    }, gn);
    let jo = title ? ae(title) + 1 : 0;
    let Go = g.reduce(To, 0);
    let Uo = jo + Go;
    let vn = useFullWidth ? Math.max(0, columns - Uo) : 0;
    let width = useFullWidth ? columns : undefined;
    const value = {
        selectedTab: g[D][0],
        width,
        headerFocused: G,
        focusHeader,
        blurHeader,
        registerOptIn,
        registerNavigationOwner
    };
    const tt = s;
    const nt = true ? undefined : de;
    const flexDirection = "column";
    const tabIndex = true ? undefined : 0;
    const autoFocus = true ? undefined : L;
    const onKeyDown = true ? undefined : mn;
    const at = O ? 0 : undefined;
    const lt = !hidden && r(s, {
        ref: re,
        tabIndex: true ? 0 : undefined,
        autoFocus: true ? L : undefined,
        onFocus: true ? ()=>se(true) : undefined,
        onBlur: true ? ()=>se(false) : undefined,
        onKeyDown: true ? mn : undefined,
        flexDirection: "row",
        flexWrap: "wrap",
        columnGap: 1,
        flexShrink: O ? 0 : undefined,
        alignSelf: true && !useFullWidth ? "flex-start" : undefined,
        children: [
            title !== null && e(s, {
                flexShrink: 0,
                children: e(n, {
                    bold: true,
                    color,
                    children: title
                })
            }),
            g.map(([zo, title_1], wn)=>e(je, {
                    title: title_1,
                    isCurrent: D === wn,
                    headerFocused: Eo && !A,
                    color: color ?? (true ? "suggestion" : undefined),
                    onClick: A ? undefined : ()=>un(wn)
                }, zo)),
            vn > 0 && e(n, {
                children: " ".repeat(vn)
            })
        ]
    });
    let Re;
    if (h[28] !== banner) {
        Re = banner != null && e(s, {
            ref: Ye,
            flexDirection: "column",
            flexShrink: 0,
            children: banner
        });
        h[28] = banner;
        h[29] = Re;
    } else {
        Re = h[29];
    }
    let ye;
    if (h[30] !== _e || h[31] !== qe || h[32] !== children || h[33] !== contentHeight || h[34] !== width || h[35] !== hidden || h[36] !== O || h[37] !== W || h[38] !== Ce || h[39] !== D || h[40] !== p) {
        ye = W ? e(s, {
            ref: Xe,
            width,
            marginTop: hidden ? 0 : 1,
            flexShrink: 0,
            children: e(xC, {
                ref: _e,
                flexDirection: "column",
                flexShrink: 0,
                height: p ? Ce : undefined,
                maxHeight: p ? undefined : Ce,
                stickyScroll: false,
                children: e(Gb, {
                    value: qe,
                    children
                })
            }, D)
        }) : e(s, {
            ref: Xe,
            width,
            marginTop: hidden ? 0 : 1,
            height: p ? undefined : contentHeight,
            minHeight: p ? contentHeight : undefined,
            overflowY: contentHeight !== undefined && !p ? "hidden" : undefined,
            flexShrink: O ? 0 : undefined,
            children
        });
        h[30] = _e;
        h[31] = qe;
        h[32] = children;
        h[33] = contentHeight;
        h[34] = width;
        h[35] = hidden;
        h[36] = O;
        h[37] = W;
        h[38] = Ce;
        h[39] = D;
        h[40] = p;
        h[41] = ye;
    } else {
        ye = h[41];
    }
    let kn;
    if (h[42] !== tt || h[43] !== nt || h[44] !== tabIndex || h[45] !== autoFocus || h[46] !== onKeyDown || h[47] !== at || h[48] !== lt || h[49] !== Re || h[50] !== ye) {
        kn = r(tt, {
            ref: nt,
            flexDirection,
            tabIndex,
            autoFocus,
            onKeyDown,
            flexShrink: at,
            children: [
                lt,
                Re,
                ye
            ]
        });
        h[42] = tt;
        h[43] = nt;
        h[44] = tabIndex;
        h[45] = autoFocus;
        h[46] = onKeyDown;
        h[47] = at;
        h[48] = lt;
        h[49] = Re;
        h[50] = ye;
        h[51] = kn;
    } else {
        kn = h[51];
    }
    return e(m.Provider, {
        value,
        children: kn
    });
}
function je(d) {
    let H = w(18);
    let { title, isCurrent, headerFocused, color, onClick } = d;
    let [b, x] = y(false);
    let C = ib();
    let v = onClick !== undefined;
    const active = isCurrent && headerFocused;
    let I;
    if (H[0] !== active) {
        I = {
            line: 0,
            column: 1,
            active
        };
        H[0] = active;
        H[1] = I;
    } else {
        I = H[1];
    }
    let ne = Qw(I);
    let Ge = ge.level === 0;
    let L = color && isCurrent && headerFocused && !Ge;
    let onClick_1;
    if (H[2] !== onClick || H[3] !== C) {
        onClick_1 = onClick === undefined ? undefined : (jt)=>{
            if (C(jt)) {
                return;
            }
            onClick();
        };
        H[2] = onClick;
        H[3] = C;
        H[4] = onClick_1;
    } else {
        onClick_1 = H[4];
    }
    let onMouseEnter;
    let onMouseLeave;
    if (H[5] === S) {
        onMouseEnter = ()=>x(true);
        onMouseLeave = ()=>x(false);
        H[5] = onMouseEnter;
        H[6] = onMouseLeave;
    } else {
        onMouseEnter = H[5];
        onMouseLeave = H[6];
    }
    let oe;
    if (H[7] !== v || H[8] !== color || H[9] !== L || H[10] !== b || H[11] !== isCurrent || H[12] !== title) {
        oe = L ? e(Yw, {
            color,
            bold: true,
            padded: true,
            children: title
        }) : r(n, {
            inverse: isCurrent,
            bold: isCurrent,
            underline: b && v,
            children: [
                " ",
                title,
                " "
            ]
        });
        H[7] = v;
        H[8] = color;
        H[9] = L;
        H[10] = b;
        H[11] = isCurrent;
        H[12] = title;
        H[13] = oe;
    } else {
        oe = H[13];
    }
    let ve;
    if (H[14] !== ne || H[15] !== onClick_1 || H[16] !== oe) {
        ve = e(s, {
            ref: ne,
            flexShrink: 0,
            onClick: onClick_1,
            onMouseEnter,
            onMouseLeave,
            children: oe
        });
        H[14] = ne;
        H[15] = onClick_1;
        H[16] = oe;
        H[17] = ve;
    } else {
        ve = H[17];
    }
    return ve;
}
function La(d) {
    let C = w(4);
    let { title, id, children } = d;
    let { selectedTab, width } = Te(m);
    let b = el();
    if (selectedTab !== (id ?? title)) {
        return null;
    }
    const x = b ? 0 : undefined;
    let v;
    if (C[0] !== children || C[1] !== x || C[2] !== width) {
        v = e(s, {
            width,
            flexShrink: x,
            children
        });
        C[0] = children;
        C[1] = x;
        C[2] = width;
        C[3] = v;
    } else {
        v = C[3];
    }
    return v;
}
function xmt() {
    let { width } = Te(m);
    return width;
}
function _y() {
    let u = w(6);
    let { headerFocused, focusHeader, blurHeader, registerOptIn } = Te(m);
    let t;
    if (u[0] !== registerOptIn) {
        t = [
            registerOptIn
        ];
        u[0] = registerOptIn;
        u[1] = t;
    } else {
        t = u[1];
    }
    en(registerOptIn, t);
    let b;
    if (u[2] !== blurHeader || u[3] !== focusHeader || u[4] !== headerFocused) {
        b = {
            headerFocused,
            focusHeader,
            blurHeader
        };
        u[2] = blurHeader;
        u[3] = focusHeader;
        u[4] = headerFocused;
        u[5] = b;
    } else {
        b = u[5];
    }
    return b;
}
function te() {
    let a = w(3);
    let [d, l] = y(0);
    let c;
    if (a[0] === S) {
        c = ()=>{
            l(Fo);
            return ()=>l(Co);
        };
        a[0] = c;
    } else {
        c = a[0];
    }
    let u = c;
    const t = d > 0;
    let b;
    if (a[1] !== t) {
        b = [
            t,
            u
        ];
        a[1] = t;
        a[2] = b;
    } else {
        b = a[2];
    }
    return b;
}
function MXe() {
    let l = w(2);
    let { registerNavigationOwner } = Te(m);
    let a;
    if (l[0] !== registerNavigationOwner) {
        a = [
            registerNavigationOwner
        ];
        l[0] = registerNavigationOwner;
        l[1] = a;
    } else {
        a = l[1];
    }
    en(registerNavigationOwner, a);
}
export { sb, La, xmt, _y, MXe };
