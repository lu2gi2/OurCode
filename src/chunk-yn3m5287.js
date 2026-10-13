import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { n } from "/$bunfs/root/chunk-8524cxt8.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
function es(m) {
    let p = w(4);
    let { error } = m;
    if (!error) {
        return null;
    }
    let children;
    if (p[0] !== error) {
        children = l(error);
        p[0] = error;
        p[1] = children;
    } else {
        children = p[1];
    }
    let f;
    if (p[2] !== children) {
        f = e(n, {
            color: "error",
            children
        });
        p[2] = children;
        p[3] = f;
    } else {
        f = p[3];
    }
    return f;
}
export { es };
