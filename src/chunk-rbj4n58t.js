import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n, du, R6, Ks } from "/$bunfs/root/chunk-8524cxt8.js";
import { qt, Te, en, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { vU } from "/$bunfs/root/chunk-ddvfb1p1.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
N();
N();
N();
function A6({ children, lock = "always", restartKey }) {
    let [ref, { isVisible }, d] = R6();
    let { rows, columns } = ke();
    let ref_1 = R(null);
    let [l, m] = y({
        minHeight: 0,
        rows,
        columns,
        restartKey
    });
    let p = lock === "always" && (l.rows !== rows || l.columns !== columns || l.restartKey !== restartKey);
    let P = (lock === "always" || !isVisible) && !p;
    let x = R(0);
    let L = Math.max(l.minHeight, x.current);
    let k = Te(vU) !== null;
    en(()=>{
        if (!ref_1.current) {
            return;
        }
        let { height } = Ks(ref_1.current);
        let minHeight = Math.min(height, rows);
        if (p) {
            m({
                minHeight,
                rows,
                columns,
                restartKey
            });
            return;
        }
        if (height > L) {
            if (k && lock === "offscreen" && !P && minHeight >= l.minHeight && d()) {
                x.current = minHeight;
                return;
            }
            x.current = 0;
            m((b)=>{
                if (b.minHeight === minHeight) {
                    return b;
                }
                return {
                    ...b,
                    minHeight
                };
            });
        }
    });
    return e(s, {
        minHeight: P ? L : undefined,
        ref,
        children: e(s, {
            ref: ref_1,
            flexDirection: "column",
            children
        })
    });
}
function Fe(g) {
    let i = w(11);
    let { children, height, screenReaderLabel } = g;
    if (Te(u)) {
        return children;
    }
    const d = screenReaderLabel === undefined;
    let a;
    if (i[0] !== screenReaderLabel || i[1] !== d) {
        a = e(du, {
            fromLeftEdge: true,
            flexShrink: 0,
            children: r(n, {
                "aria-hidden": d,
                "aria-label": screenReaderLabel,
                dimColor: true,
                children: [
                    "  ",
                    "⎿ \xA0"
                ]
            })
        });
        i[0] = screenReaderLabel;
        i[1] = d;
        i[2] = a;
    } else {
        a = i[2];
    }
    let f;
    if (i[3] !== children) {
        f = e(s, {
            flexShrink: 1,
            flexGrow: 1,
            children
        });
        i[3] = children;
        i[4] = f;
    } else {
        f = i[4];
    }
    let l;
    if (i[5] !== height || i[6] !== a || i[7] !== f) {
        l = e(H, {
            children: r(s, {
                flexDirection: "row",
                height,
                overflowY: "hidden",
                children: [
                    a,
                    f
                ]
            })
        });
        i[5] = height;
        i[6] = a;
        i[7] = f;
        i[8] = l;
    } else {
        l = i[8];
    }
    let children_1 = l;
    if (height !== undefined) {
        return children_1;
    }
    let p;
    if (i[9] !== children_1) {
        p = e(A6, {
            lock: "offscreen",
            children: children_1
        });
        i[9] = children_1;
        i[10] = p;
    } else {
        p = i[10];
    }
    return p;
}
var u = qt(false);
function FXe() {
    return Te(u);
}
function H(g) {
    let o = w(2);
    let { children } = g;
    let c;
    if (o[0] !== children) {
        c = e(u.Provider, {
            value: true,
            children
        });
        o[0] = children;
        o[1] = c;
    } else {
        c = o[1];
    }
    return c;
}
export { A6, Fe, FXe };
