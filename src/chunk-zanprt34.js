import { Oxr } from "/$bunfs/root/chunk-ctt36bn8.js";
import { QP, z$t, H0r, hie } from "/$bunfs/root/chunk-4nfvaqps.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { ad } from "/$bunfs/root/chunk-066dgc2r.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { aye, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function Se(Te) {
    return Te + 1;
}
export function xC(A) {
    let o = w(28);
    let M;
    let followGrowth;
    let L;
    let stickyScroll;
    let f;
    if (o[0] !== A) {
        ({ children: M, ref: L, stickyScroll, followGrowth, ...f } = A);
        o[0] = A;
        o[1] = M;
        o[2] = followGrowth;
        o[3] = L;
        o[4] = stickyScroll;
        o[5] = f;
    } else {
        M = o[1];
        followGrowth = o[2];
        L = o[3];
        stickyScroll = o[4];
        f = o[5];
    }
    let ref = R(null);
    let [, be] = y(0);
    let U;
    if (o[6] === S) {
        U = new Set;
        o[6] = U;
    } else {
        U = o[6];
    }
    let P = R(U);
    let j = R(false);
    let Z;
    if (o[7] === S) {
        Z = ()=>{
            for (const xe of P.current){
                xe();
            }
        };
        o[7] = Z;
    } else {
        Z = o[7];
    }
    let _ = Z;
    let ee;
    if (o[8] === S) {
        ee = function x(Q) {
            Oxr();
            QP(Q);
            H0r(Q);
            _();
            if (j.current) {
                return;
            }
            j.current = true;
            queueMicrotask(()=>{
                j.current = false;
                z$t(Q);
            });
        };
        o[8] = ee;
    } else {
        ee = o[8];
    }
    let x = ee;
    let le;
    let re;
    if (o[9] !== stickyScroll) {
        le = ()=>({
                scrollTo (we, Re) {
                    let r_current = ref.current;
                    if (!r_current) {
                        return;
                    }
                    r_current.stickyScroll = false;
                    if (!Re?.preserveHwm) {
                        r_current.scrollHeightHwm = undefined;
                    }
                    r_current.pendingScrollDelta = undefined;
                    r_current.scrollAnchor = undefined;
                    r_current.scrollTop = Math.max(0, Math.floor(we));
                    x(r_current);
                },
                scrollToElement (el, p, He) {
                    let offset = p === undefined ? 0 : p;
                    let r_current = ref.current;
                    if (!r_current) {
                        return;
                    }
                    r_current.stickyScroll = false;
                    r_current.scrollHeightHwm = undefined;
                    r_current.pendingScrollDelta = undefined;
                    r_current.scrollAnchor = {
                        el,
                        offset,
                        block: He?.block ?? "start"
                    };
                    x(r_current);
                },
                scrollBy (Me) {
                    let r_current = ref.current;
                    if (!r_current) {
                        return;
                    }
                    r_current.stickyScroll = false;
                    r_current.scrollHeightHwm = undefined;
                    r_current.scrollTop = hie(r_current);
                    r_current.scrollAnchor = undefined;
                    r_current.pendingScrollDelta = (r_current.pendingScrollDelta ?? 0) + Math.floor(Me);
                    x(r_current);
                },
                scrollToBottom () {
                    let r_current = ref.current;
                    if (!r_current) {
                        return;
                    }
                    r_current.pendingScrollDelta = undefined;
                    if (stickyScroll === false) {
                        r_current.scrollAnchor = undefined;
                        r_current.scrollTop = Math.max(0, (r_current.scrollHeight ?? 0) - (r_current.scrollViewportHeight ?? 0));
                        x(r_current);
                        return;
                    }
                    r_current.stickyScroll = true;
                    QP(r_current);
                    _();
                    be(Se);
                },
                getScrollTop () {
                    return ref.current?.scrollTop ?? 0;
                },
                getPendingDelta () {
                    return ref.current?.pendingScrollDelta ?? 0;
                },
                getScrollHeight () {
                    return ref.current?.scrollHeight ?? 0;
                },
                getFreshScrollHeight () {
                    return ref.current?.childNodes[0]?.yogaNode?.getComputedHeight() ?? ref.current?.scrollHeight ?? 0;
                },
                getViewportHeight () {
                    return ref.current?.scrollViewportHeight ?? 0;
                },
                getViewportTop () {
                    return ref.current?.scrollViewportTop ?? 0;
                },
                isSticky () {
                    let r_current = ref.current;
                    if (!r_current) {
                        return false;
                    }
                    return r_current.stickyScroll ?? Boolean(r_current.attributes.stickyScroll);
                },
                subscribe (oe) {
                    P.current.add(oe);
                    return ()=>P.current.delete(oe);
                },
                setClampBounds (te, ne) {
                    let r_current = ref.current;
                    if (!r_current) {
                        return;
                    }
                    if (r_current.scrollClampMin === te && r_current.scrollClampMax === ne) {
                        return;
                    }
                    r_current.scrollClampMin = te;
                    r_current.scrollClampMax = ne;
                    QP(r_current);
                },
                getDomElement () {
                    return ref.current;
                }
            });
        re = [
            stickyScroll
        ];
        o[9] = stickyScroll;
        o[10] = le;
        o[11] = re;
    } else {
        le = o[10];
        re = o[11];
    }
    aye(L, le, re);
    const flexDirection = f.flexDirection ?? "row";
    const flexGrow = f.flexGrow ?? 0;
    const flexShrink = f.flexShrink ?? 1;
    let style;
    if (o[12] !== f || o[13] !== flexDirection || o[14] !== flexGrow || o[15] !== flexShrink) {
        style = {
            flexWrap: "nowrap",
            flexDirection,
            flexGrow,
            flexShrink,
            selectionScope: true,
            ...f,
            overflowX: "scroll",
            overflowY: "scroll"
        };
        o[12] = f;
        o[13] = flexDirection;
        o[14] = flexGrow;
        o[15] = flexShrink;
        o[16] = style;
    } else {
        style = o[16];
    }
    let D;
    if (o[17] !== stickyScroll) {
        D = stickyScroll !== undefined && {
            stickyScroll
        };
        o[17] = stickyScroll;
        o[18] = D;
    } else {
        D = o[18];
    }
    let B;
    if (o[19] !== followGrowth) {
        B = followGrowth !== undefined && {
            followGrowth
        };
        o[19] = followGrowth;
        o[20] = B;
    } else {
        B = o[20];
    }
    let E;
    if (o[21] !== M) {
        E = e(ad, {
            flexDirection: "column",
            flexGrow: 1,
            flexShrink: 0,
            width: "100%",
            children: M
        });
        o[21] = M;
        o[22] = E;
    } else {
        E = o[22];
    }
    let ce;
    if (o[23] !== D || o[24] !== B || o[25] !== E || o[26] !== style) {
        ce = e("ink-box", {
            ref,
            style,
            ...D,
            ...B,
            children: E
        });
        o[23] = D;
        o[24] = B;
        o[25] = E;
        o[26] = style;
        o[27] = ce;
    } else {
        ce = o[27];
    }
    return ce;
}
