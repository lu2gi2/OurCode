import { Ya } from "/$bunfs/root/chunk-8524cxt8.js";
import { y, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
const wG = 150;
const Oo = 250;
function rc(e, n, t = wG) {
    let o = e() - n;
    if (o >= 0) {
        return o < t;
    }
    return n <= Date.now();
}
function uNo(e) {
    let n = Ya();
    let [t, o] = y(()=>({
            key: e,
            at: Date.now()
        }));
    if (t.key !== e) {
        o({
            key: e,
            at: Date.now()
        });
    }
    return function() {
        return rc(n, t.at);
    };
}
export { wG, Oo, rc, uNo };
