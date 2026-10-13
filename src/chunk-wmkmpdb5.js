import { vS } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n, du } from "/$bunfs/root/chunk-8524cxt8.js";
import { Ry, qt, em, Te, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function _(p, d) {
    return e(s, {
        width: 2,
        children: e(n, {
            dimColor: true,
            children: D[p]
        })
    }, d);
}
var D = {
    branch: vS.branch,
    last: vS.last,
    pipe: vS.pipe,
    space: ""
};
function _Xe(u) {
    let a = w(7);
    let { connectors, children } = u;
    let o;
    if (a[0] !== connectors) {
        o = connectors.length > 0 && e(du, {
            "aria-hidden": true,
            fromLeftEdge: true,
            flexShrink: 0,
            flexDirection: "row",
            children: connectors.map(_)
        });
        a[0] = connectors;
        a[1] = o;
    } else {
        o = a[1];
    }
    let l;
    if (a[2] !== children) {
        l = e(s, {
            flexGrow: 1,
            flexShrink: 1,
            children
        });
        a[2] = children;
        a[3] = l;
    } else {
        l = a[3];
    }
    let i;
    if (a[4] !== o || a[5] !== l) {
        i = r(s, {
            flexDirection: "row",
            children: [
                o,
                l
            ]
        });
        a[4] = o;
        a[5] = l;
        a[6] = i;
    } else {
        i = a[6];
    }
    return i;
}
const R = qt({
    variant: "outline",
    ancestors: []
});
const f = qt(true);
function h(u, t = true) {
    let c = Ry.toArray(u);
    return c.map((children, o)=>e(f.Provider, {
            value: t && o === c.length - 1,
            children
        }, o));
}
function O(u) {
    let o = w(10);
    let { children, variant } = u;
    let variant_1 = variant === undefined ? "outline" : variant;
    let ancestors;
    if (o[0] === S) {
        ancestors = [];
        o[0] = ancestors;
    } else {
        ancestors = o[0];
    }
    let i;
    if (o[1] !== variant_1) {
        i = {
            variant: variant_1,
            ancestors
        };
        o[1] = variant_1;
        o[2] = i;
    } else {
        i = o[2];
    }
    let p;
    if (o[3] !== children) {
        p = h(children);
        o[3] = children;
        o[4] = p;
    } else {
        p = o[4];
    }
    let d;
    if (o[5] !== p) {
        d = e(s, {
            flexDirection: "column",
            children: p
        });
        o[5] = p;
        o[6] = d;
    } else {
        d = o[6];
    }
    let v;
    if (o[7] !== i || o[8] !== d) {
        v = e(R.Provider, {
            value: i,
            children: d
        });
        o[7] = i;
        o[8] = d;
        o[9] = v;
    } else {
        v = o[9];
    }
    return v;
}
function Node(u) {
    let m = w(19);
    let { label, children, dimColor, color } = u;
    let { variant, ancestors } = Te(R);
    let p = Te(f);
    let d = variant === "outline" ? "last" : p ? "last" : "branch";
    let v = variant === "outline" ? "space" : p ? "space" : "pipe";
    let x = label != null && label !== false;
    let C = x ? label : children;
    let connectors;
    if (m[0] !== ancestors || m[1] !== d) {
        connectors = [
            ...ancestors,
            d
        ];
        m[0] = ancestors;
        m[1] = d;
        m[2] = connectors;
    } else {
        connectors = m[2];
    }
    let P;
    if (m[3] !== color || m[4] !== dimColor || m[5] !== C) {
        P = em(C) ? C : e(n, {
            dimColor,
            color,
            children: C
        });
        m[3] = color;
        m[4] = dimColor;
        m[5] = C;
        m[6] = P;
    } else {
        P = m[6];
    }
    let T;
    if (m[7] !== connectors || m[8] !== P) {
        T = e(_Xe, {
            connectors,
            children: P
        });
        m[7] = connectors;
        m[8] = P;
        m[9] = T;
    } else {
        T = m[9];
    }
    let y;
    if (m[10] !== ancestors || m[11] !== children || m[12] !== v || m[13] !== x || m[14] !== variant) {
        y = x && e(R.Provider, {
            value: {
                variant,
                ancestors: [
                    ...ancestors,
                    v
                ]
            },
            children: h(children)
        });
        m[10] = ancestors;
        m[11] = children;
        m[12] = v;
        m[13] = x;
        m[14] = variant;
        m[15] = y;
    } else {
        y = m[15];
    }
    let z;
    if (m[16] !== T || m[17] !== y) {
        z = r(s, {
            flexDirection: "column",
            children: [
                T,
                y
            ]
        });
        m[16] = T;
        m[17] = y;
        m[18] = z;
    } else {
        z = m[18];
    }
    return z;
}
function Group(u) {
    let a = w(3);
    let { children } = u;
    let c = Te(f);
    let o;
    if (a[0] !== children || a[1] !== c) {
        o = h(children, c);
        a[0] = children;
        a[1] = c;
        a[2] = o;
    } else {
        o = a[2];
    }
    return o;
}
const au = Object.assign(O, {
    Node,
    Group
});
export { _Xe, au };
