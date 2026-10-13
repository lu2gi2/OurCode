import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { n } from "/$bunfs/root/chunk-8524cxt8.js";
import { Ry, Zc, em, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { Sn } from "/$bunfs/root/chunk-cj4xndke.js";
N();
N();
function y(s) {
    return s !== "";
}
function C(o, a) {
    return r(Zc, {
        children: [
            a > 0 && e(n, {
                dimColor: true,
                children: " · "
            }),
            o
        ]
    }, em(o) ? o.key ?? a : a);
}
function be(g) {
    let m = w(5);
    let { children } = g;
    let children_1;
    let c;
    if (m[0] !== children) {
        c = Sn;
        q: {
            let R = Ry.toArray(children).filter(y);
            if (R.length === 0) {
                c = null;
                break q;
            }
            children_1 = R.map(C);
        }
        m[0] = children;
        m[1] = children_1;
        m[2] = c;
    } else {
        children_1 = m[1];
        c = m[2];
    }
    if (c !== Sn) {
        return c;
    }
    let f;
    if (m[3] !== children_1) {
        f = e(Y, {
            children: children_1
        });
        m[3] = children_1;
        m[4] = f;
    } else {
        f = m[4];
    }
    return f;
}
export { be };
