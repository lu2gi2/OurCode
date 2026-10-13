import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { gMt, j7 } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { n, Wt } from "/$bunfs/root/chunk-8524cxt8.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
function fj(H) {
    let y = w(10);
    let { children, color, bold, linkHref } = H;
    let children_1;
    if (y[0] !== children || y[1] !== linkHref) {
        children_1 = [];
        let l = 0;
        for (const i of children.matchAll(gMt)){
            let x = j7(i[0]);
            let k = linkHref === undefined ? x : linkHref(x);
            if (k === undefined) {
                continue;
            }
            if (i.index > l) {
                children_1.push(children.slice(l, i.index));
            }
            children_1.push(e(Wt, {
                url: k,
                children: k
            }, i.index));
            l = i.index + x.length;
        }
        let s;
        if (y[3] !== children || y[4] !== l) {
            s = children.slice(l);
            y[3] = children;
            y[4] = l;
            y[5] = s;
        } else {
            s = y[5];
        }
        children_1.push(s);
        y[0] = children;
        y[1] = linkHref;
        y[2] = children_1;
    } else {
        children_1 = y[2];
    }
    let s;
    if (y[6] !== bold || y[7] !== color || y[8] !== children_1) {
        s = e(n, {
            color,
            bold,
            children: children_1
        });
        y[6] = bold;
        y[7] = color;
        y[8] = children_1;
        y[9] = s;
    } else {
        s = y[9];
    }
    return s;
}
export { fj };
