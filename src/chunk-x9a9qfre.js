import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
function yU(p) {
    let l = w(7);
    let { children, subtitle } = p;
    let o;
    if (l[0] !== children) {
        o = e(n, {
            bold: true,
            children
        });
        l[0] = children;
        l[1] = o;
    } else {
        o = l[1];
    }
    let c;
    if (l[2] !== subtitle) {
        c = subtitle && e(n, {
            dimColor: true,
            children: subtitle
        });
        l[2] = subtitle;
        l[3] = c;
    } else {
        c = l[3];
    }
    let a;
    if (l[4] !== o || l[5] !== c) {
        a = r(s, {
            flexDirection: "column",
            children: [
                o,
                c
            ]
        });
        l[4] = o;
        l[5] = c;
        l[6] = a;
    } else {
        a = l[6];
    }
    return a;
}
export { yU };
