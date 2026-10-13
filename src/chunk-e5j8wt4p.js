import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Pmt } from "/$bunfs/root/chunk-x3w6yqn3.js";
import { Imt } from "/$bunfs/root/chunk-k31bs98s.js";
import { WWn, zWn } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { fj } from "/$bunfs/root/chunk-0nsjam2f.js";
import { K0 } from "/$bunfs/root/chunk-4b1qzs5x.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
function nk(d) {
    let t = Pmt();
    let m = Imt()?.isQueued === true;
    return !d && !t && !m && K0();
}
function HXe(d) {
    let l = w(25);
    let { tone, text, detail, subLines, linkify } = d;
    let o = linkify ? fj : n;
    let h = d.state === "live" && !d.reducedMotion ? zWn[d.frame % zWn.length] : WWn;
    let color = tone === "gold" ? "warning" : tone === "red" ? "error" : undefined;
    let dimColor = tone === "dim";
    const R = tone === "red" ? "error:" : tone === "gold" ? "warning:" : undefined;
    let u;
    if (l[0] !== color || l[1] !== dimColor || l[2] !== h || l[3] !== R) {
        u = r(n, {
            "aria-hidden": dimColor,
            "aria-label": R,
            italic: true,
            color,
            dimColor,
            children: [
                h,
                " "
            ]
        });
        l[0] = color;
        l[1] = dimColor;
        l[2] = h;
        l[3] = R;
        l[4] = u;
    } else {
        u = l[4];
    }
    let g;
    if (l[5] !== o || l[6] !== text) {
        g = e(o, {
            children: text
        });
        l[5] = o;
        l[6] = text;
        l[7] = g;
    } else {
        g = l[7];
    }
    let y;
    if (l[8] !== o || l[9] !== detail) {
        y = detail !== undefined && r(n, {
            dimColor: true,
            children: [
                " · ",
                e(o, {
                    children: detail
                })
            ]
        });
        l[8] = o;
        l[9] = detail;
        l[10] = y;
    } else {
        y = l[10];
    }
    let C;
    if (l[11] !== color || l[12] !== dimColor || l[13] !== g || l[14] !== y) {
        C = r(n, {
            italic: true,
            color,
            dimColor,
            children: [
                g,
                y
            ]
        });
        l[11] = color;
        l[12] = dimColor;
        l[13] = g;
        l[14] = y;
        l[15] = C;
    } else {
        C = l[15];
    }
    let b;
    if (l[16] !== o || l[17] !== subLines) {
        b = subLines?.map((children, V)=>e(n, {
                dimColor: true,
                children: e(o, {
                    children
                })
            }, V));
        l[16] = o;
        l[17] = subLines;
        l[18] = b;
    } else {
        b = l[18];
    }
    let x;
    if (l[19] !== C || l[20] !== b) {
        x = r(s, {
            flexDirection: "column",
            flexGrow: 1,
            children: [
                C,
                b
            ]
        });
        l[19] = C;
        l[20] = b;
        l[21] = x;
    } else {
        x = l[21];
    }
    let Q;
    if (l[22] !== u || l[23] !== x) {
        Q = r(s, {
            flexDirection: "row",
            children: [
                u,
                x
            ]
        });
        l[22] = u;
        l[23] = x;
        l[24] = Q;
    } else {
        Q = l[24];
    }
    return Q;
}
export { HXe, nk };
