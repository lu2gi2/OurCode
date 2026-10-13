import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { el } from "/$bunfs/root/chunk-2mjaqpws.js";
import { s } from "/$bunfs/root/chunk-8524cxt8.js";
import { Il } from "/$bunfs/root/chunk-qy8kbd4m.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
const Xw = 2;
const YP = 1;
const bG = 2;
function ts(d) {
    let c = w(9);
    let { children, color } = d;
    if (el()) {
        let o;
        if (c[0] !== children) {
            o = e(s, {
                flexDirection: "column",
                paddingX: YP,
                flexShrink: 0,
                children
            });
            c[0] = children;
            c[1] = o;
        } else {
            o = c[1];
        }
        return o;
    }
    let o;
    if (c[2] !== color) {
        o = e(Il, {
            color
        });
        c[2] = color;
        c[3] = o;
    } else {
        o = c[3];
    }
    let n;
    if (c[4] !== children) {
        n = e(s, {
            flexDirection: "column",
            paddingX: Xw,
            children
        });
        c[4] = children;
        c[5] = n;
    } else {
        n = c[5];
    }
    let l;
    if (c[6] !== o || c[7] !== n) {
        l = r(s, {
            flexDirection: "column",
            paddingTop: 1,
            children: [
                o,
                n
            ]
        });
        c[6] = o;
        c[7] = n;
        c[8] = l;
    } else {
        l = c[8];
    }
    return l;
}
export { Xw, YP, bG, ts };
