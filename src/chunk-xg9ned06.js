import { Ei } from "/$bunfs/root/chunk-qch5xj2a.js";
import { uo as icon, Qdt } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { ae } from "/$bunfs/root/chunk-223dyewd.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { nt, n, RIe, ia } from "/$bunfs/root/chunk-8524cxt8.js";
import { Vb } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { AIe, Fh, bm, ab } from "/$bunfs/root/chunk-9qns2dz5.js";
import { vu } from "/$bunfs/root/chunk-0v20st7x.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { eg } from "/$bunfs/root/chunk-gwx5yf2x.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
const Hfe = {
    success: {
        icon: te.tick,
        color: "success",
        ariaLabel: "done:"
    },
    error: {
        icon: te.cross,
        color: "error",
        ariaLabel: "failed:"
    },
    warning: {
        icon: te.warning,
        color: "warning",
        ariaLabel: "warning:"
    },
    info: {
        icon: te.info,
        color: "suggestion",
        ariaLabel: "note:"
    },
    pending: {
        icon: te.circle,
        color: undefined,
        ariaLabel: "pending:"
    },
    loading: {
        icon: "…",
        color: undefined,
        ariaLabel: "loading:"
    },
    running: {
        icon,
        color: undefined,
        ariaLabel: "running:"
    },
    on: {
        icon: te.tick,
        color: "success",
        ariaLabel: "on:"
    },
    off: {
        icon: te.circle,
        color: undefined,
        ariaLabel: "off:"
    },
    working: {
        icon: Qdt,
        color: undefined,
        ariaLabel: "working:"
    },
    needsYou: {
        icon: Qdt,
        color: "warning",
        ariaLabel: "needs you:"
    },
    idle: {
        icon: Qdt,
        color: undefined,
        ariaLabel: "idle:"
    },
    failed: {
        icon: Qdt,
        color: "error",
        ariaLabel: "error:"
    }
};
const I = {
    working: Qdt,
    needsYou: "!",
    idle: "◦",
    failed: "×"
};
const L = 8;
const v = 200;
function VXe() {
    return Math.max(...Object.values(Hfe).map((l)=>ae(l.icon)));
}
function Pdn() {
    return VXe() + 1;
}
function dt(l) {
    let a = w(20);
    let { status, "aria-label": aria_label, withSpace, slot } = l;
    let withSpace_1 = withSpace === undefined ? false : withSpace;
    if (status === undefined) {
        let m;
        if (a[0] !== slot) {
            m = slot && e(n, {
                children: " ".repeat(Pdn())
            });
            a[0] = slot;
            a[1] = m;
        } else {
            m = a[1];
        }
        return m;
    }
    let t = Hfe[status];
    let m;
    if (a[2] !== aria_label || a[3] !== t || a[4] !== slot) {
        m = aria_label ?? (slot === "trailing" ? t.ariaLabel.replace(/:$/, "") : t.ariaLabel);
        a[2] = aria_label;
        a[3] = t;
        a[4] = slot;
        a[5] = m;
    } else {
        m = a[5];
    }
    let spoken = m;
    if (P(status)) {
        let f;
        if (a[6] !== slot || a[7] !== spoken || a[8] !== status || a[9] !== withSpace_1) {
            f = e(M, {
                status,
                spoken,
                slot,
                withSpace: withSpace_1
            });
            a[6] = slot;
            a[7] = spoken;
            a[8] = status;
            a[9] = withSpace_1;
            a[10] = f;
        } else {
            f = a[10];
        }
        return f;
    }
    const t_color = t.color;
    const p = !t.color;
    let g;
    if (a[11] !== t.icon || a[12] !== slot || a[13] !== spoken || a[14] !== withSpace_1) {
        g = x(t.icon, spoken, slot, withSpace_1);
        a[11] = t.icon;
        a[12] = slot;
        a[13] = spoken;
        a[14] = withSpace_1;
        a[15] = g;
    } else {
        g = a[15];
    }
    let k;
    if (a[16] !== t.color || a[17] !== p || a[18] !== g) {
        k = e(n, {
            color: t_color,
            dimColor: p,
            children: g
        });
        a[16] = t.color;
        a[17] = p;
        a[18] = g;
        a[19] = k;
    } else {
        k = a[19];
    }
    return k;
}
function x(l, spoken, slot, withSpace) {
    let o = slot === undefined ? withSpace && " " : Ei(" ", Pdn() - ae(l));
    return r(Y, {
        children: [
            slot === "trailing" && o,
            e(n, {
                "aria-label": spoken,
                children: l
            }),
            slot !== "trailing" && o
        ]
    });
}
function P(status) {
    return status in I;
}
function M(l) {
    let a = w(17);
    let { status, spoken, slot, withSpace } = l;
    let c = Vb();
    let m;
    if (a[0] !== c.subtle) {
        m = ab(c.subtle);
        a[0] = c.subtle;
        a[1] = m;
    } else {
        m = a[1];
    }
    let dimmer = m;
    let d;
    if (a[2] !== c.inactive) {
        d = ab(c.inactive);
        a[2] = c.inactive;
        a[3] = d;
    } else {
        d = a[3];
    }
    let dim = d;
    let { color } = Hfe[status];
    let g = ge.level >= 2 && dimmer !== null && dim !== null;
    const k = g ? Qdt : I[status];
    let Q;
    if (a[4] !== slot || a[5] !== spoken || a[6] !== k || a[7] !== withSpace) {
        Q = x(k, spoken, slot, withSpace);
        a[4] = slot;
        a[5] = spoken;
        a[6] = k;
        a[7] = withSpace;
        a[8] = Q;
    } else {
        Q = a[8];
    }
    let b = Q;
    if (g && status === "working") {
        let S;
        if (a[9] !== dim || a[10] !== dimmer || a[11] !== b) {
            S = e(N, {
                dimmer,
                dim,
                children: b
            });
            a[9] = dim;
            a[10] = dimmer;
            a[11] = b;
            a[12] = S;
        } else {
            S = a[12];
        }
        return S;
    }
    const S = !color;
    let X;
    if (a[13] !== color || a[14] !== b || a[15] !== S) {
        X = e(n, {
            color,
            dimColor: S,
            children: b
        });
        a[13] = color;
        a[14] = b;
        a[15] = S;
        a[16] = X;
    } else {
        X = a[16];
    }
    return X;
}
function N(l) {
    let d = w(8);
    let { dimmer, dim, children } = l;
    let o = vu();
    let c = nt();
    let a = o || c;
    let m = Math.ceil(RIe(v) / eg) * eg;
    let [, t] = ia(a ? null : m);
    let f;
    if (d[0] !== dim || d[1] !== dimmer || d[2] !== a || d[3] !== t) {
        f = a ? "subtle" : bm(Fh(dimmer, dim, AIe(Math.floor(t / m) % L, L)));
        d[0] = dim;
        d[1] = dimmer;
        d[2] = a;
        d[3] = t;
        d[4] = f;
    } else {
        f = d[4];
    }
    let color = f;
    let g;
    if (d[5] !== children || d[6] !== color) {
        g = e(n, {
            color,
            children
        });
        d[5] = children;
        d[6] = color;
        d[7] = g;
    } else {
        g = d[7];
    }
    return g;
}
export { Hfe, VXe, Pdn, dt };
