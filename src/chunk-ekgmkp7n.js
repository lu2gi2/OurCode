import { n } from "/$bunfs/root/chunk-8524cxt8.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Yo } from "/$bunfs/root/chunk-yphmh99q.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
function dA(m) {
    let R = w(2);
    let { children, exitActive, onInterrupt } = m;
    let s = exitActive === undefined ? true : exitActive;
    let { pending, keyName } = Yo(undefined, onInterrupt, s);
    const children_1 = pending ? `Press ${keyName} again to exit` : children;
    let r;
    if (R[0] !== children_1) {
        r = e(n, {
            dimColor: true,
            children: children_1
        });
        R[0] = children_1;
        R[1] = r;
    } else {
        r = R[1];
    }
    return r;
}
export { dA };
