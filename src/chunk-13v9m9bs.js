import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ea } from "/$bunfs/root/chunk-75wzvwyz.js";
import { n, Wt } from "/$bunfs/root/chunk-8524cxt8.js";
import { P, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { cOe, dw } from "/$bunfs/root/chunk-46as0mn8.js";
import { V } from "/$bunfs/root/chunk-zby5bms5.js";
import { Q3 } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
function PS(d) {
    let s = w(10);
    let { added, removed, bold } = d;
    if (added === 0 && removed === 0) {
        return null;
    }
    let c;
    if (s[0] !== added || s[1] !== bold) {
        c = added > 0 && r(n, {
            color: "diffAddedWord",
            bold,
            children: [
                "+",
                added
            ]
        });
        s[0] = added;
        s[1] = bold;
        s[2] = c;
    } else {
        c = s[2];
    }
    const b = added > 0 && removed > 0 && " ";
    let u;
    if (s[3] !== bold || s[4] !== removed) {
        u = removed > 0 && r(n, {
            color: "diffRemovedWord",
            bold,
            children: [
                "-",
                removed
            ]
        });
        s[3] = bold;
        s[4] = removed;
        s[5] = u;
    } else {
        u = s[5];
    }
    let x;
    if (s[6] !== c || s[7] !== b || s[8] !== u) {
        x = r(n, {
            children: [
                c,
                b,
                u
            ]
        });
        s[6] = c;
        s[7] = b;
        s[8] = u;
        s[9] = x;
    } else {
        x = s[9];
    }
    return x;
}
N();
N();
const b4n = "current-pr";
function WHr(d, o) {
    if (!d || !o) {
        return null;
    }
    let i = d.kind === "cr" && false;
    let l = d.kind === "mr";
    return {
        prefix: l ? "MR" : "PR",
        label: `${l ? "!" : "#"}${d.number}`,
        url: o,
        dedupUrl: d.url,
        color: de(d.reviewState)
    };
}
function de(reviewState) {
    switch(reviewState){
        case "approved":
            return "success";
        case "changes_requested":
            return "error";
        case "pending":
            return "warning";
        case "merged":
            return "merged";
        default:
            return;
    }
}
function h(d, o, i) {}
function zHr(d, o, i) {
    P(()=>{
        if (o === undefined) {
            return;
        }
        h(d, o, i === "cr" || i === "mr");
    }, [
        d,
        o,
        i
    ]);
}
function fe(ge) {
    return ge.settings?.prUrlTemplate;
}
function gee(d) {
    let p = w(41);
    let { number, url, reviewState, bold, color, dimColor, inverse, underline, hidePrefix, kind } = d;
    let be = underline === undefined ? true : underline;
    let R = kind === "cr" && false;
    let m = kind === "mr";
    let C = m ? "!" : "#";
    let G = V(fe);
    let ee;
    if (p[0] !== R || p[1] !== m || p[2] !== G || p[3] !== url) {
        ee = R || m ? url : Q3(url, G);
        p[0] = R;
        p[1] = m;
        p[2] = G;
        p[3] = url;
        p[4] = ee;
    } else {
        ee = p[4];
    }
    let v = ee;
    let re;
    let oe;
    if (p[5] !== R || p[6] !== m || p[7] !== url || p[8] !== v) {
        re = ()=>{
            h(v, url, R || m);
        };
        oe = [
            v,
            url,
            R,
            m
        ];
        p[5] = R;
        p[6] = m;
        p[7] = url;
        p[8] = v;
        p[9] = re;
        p[10] = oe;
    } else {
        re = p[9];
        oe = p[10];
    }
    P(re, oe);
    let te;
    if (p[11] !== color || p[12] !== reviewState) {
        te = color ?? X(reviewState);
        p[11] = color;
        p[12] = reviewState;
        p[13] = te;
    } else {
        te = p[13];
    }
    let color_1 = te;
    let dimColor_1 = !inverse && (dimColor || !color_1 && !bold);
    let ne;
    if (p[14] !== bold || p[15] !== dimColor_1 || p[16] !== C || p[17] !== inverse || p[18] !== number || p[19] !== color_1) {
        ne = r(n, {
            color: color_1,
            dimColor: dimColor_1,
            bold,
            inverse,
            children: [
                C,
                number
            ]
        });
        p[14] = bold;
        p[15] = dimColor_1;
        p[16] = C;
        p[17] = inverse;
        p[18] = number;
        p[19] = color_1;
        p[20] = ne;
    } else {
        ne = p[20];
    }
    let fallback = ne;
    let U;
    if (p[21] !== bold || p[22] !== dimColor || p[23] !== hidePrefix || p[24] !== m) {
        U = !hidePrefix && r(Y, {
            children: [
                e(n, {
                    dimColor: dimColor || !bold,
                    children: m ? "MR" : "PR"
                }),
                " "
            ]
        });
        p[21] = bold;
        p[22] = dimColor;
        p[23] = hidePrefix;
        p[24] = m;
        p[25] = U;
    } else {
        U = p[25];
    }
    const underline_1 = !inverse && be;
    let children;
    if (p[26] !== bold || p[27] !== dimColor_1 || p[28] !== C || p[29] !== inverse || p[30] !== number || p[31] !== color_1 || p[32] !== underline_1) {
        children = r(n, {
            color: color_1,
            dimColor: dimColor_1,
            underline: underline_1,
            bold,
            inverse,
            children: [
                C,
                number
            ]
        });
        p[26] = bold;
        p[27] = dimColor_1;
        p[28] = C;
        p[29] = inverse;
        p[30] = number;
        p[31] = color_1;
        p[32] = underline_1;
        p[33] = children;
    } else {
        children = p[33];
    }
    let O;
    if (p[34] !== fallback || p[35] !== children || p[36] !== v) {
        O = e(Wt, {
            url: v,
            fallback,
            assumeSupport: true,
            children
        });
        p[34] = fallback;
        p[35] = children;
        p[36] = v;
        p[37] = O;
    } else {
        O = p[37];
    }
    let ie;
    if (p[38] !== O || p[39] !== U) {
        ie = r(n, {
            children: [
                U,
                O
            ]
        });
        p[38] = O;
        p[39] = U;
        p[40] = ie;
    } else {
        ie = p[40];
    }
    return ie;
}
function X(reviewState) {
    switch(reviewState){
        case "approved":
            return "success";
        case "changes_requested":
            return "error";
        case "pending":
            return "warning";
        case "merged":
            return "merged";
        default:
            return;
    }
}
export { PS, b4n, WHr, zHr, gee };
