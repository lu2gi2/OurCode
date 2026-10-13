import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { qt, Te, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
N();
const t = qt(undefined);
function Imt() {
    return Te(t);
}
function gYn(g) {
    let u = w(6);
    let { isFirst, selectionHighlight, children } = g;
    let r;
    if (u[0] !== isFirst || u[1] !== selectionHighlight) {
        r = {
            isQueued: true,
            isFirst,
            selectionHighlight
        };
        u[0] = isFirst;
        u[1] = selectionHighlight;
        u[2] = r;
    } else {
        r = u[2];
    }
    let s = r;
    let l;
    if (u[3] !== children || u[4] !== s) {
        l = e(t.Provider, {
            value: s,
            children
        });
        u[3] = children;
        u[4] = s;
        u[5] = l;
    } else {
        l = u[5];
    }
    return l;
}
export { Imt, gYn };
