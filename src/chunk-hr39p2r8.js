import { e_ } from "/$bunfs/root/chunk-kasbfbhj.js";
import { qt, Te, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
N();
const u = qt(undefined);
function PXe(d) {
    let c = w(3);
    let { queue, children } = d;
    let o;
    if (c[0] !== children || c[1] !== queue) {
        o = e(u.Provider, {
            value: queue,
            children
        });
        c[0] = children;
        c[1] = queue;
        c[2] = o;
    } else {
        o = c[2];
    }
    return o;
}
function cu() {
    return Te(u) ?? e_();
}
export { PXe, cu };
