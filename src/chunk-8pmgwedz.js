import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { te } from "/$bunfs/root/chunk-z5hwtxs9.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
function Qm(d) {
    let i = w(4);
    let { children, color } = d;
    let l;
    if (i[0] === S) {
        l = e(s, {
            "aria-hidden": true,
            width: 2,
            flexShrink: 0,
            children: e(n, {
                children: te.bullet
            })
        });
        i[0] = l;
    } else {
        l = i[0];
    }
    let c;
    if (i[1] !== children || i[2] !== color) {
        c = r(s, {
            flexDirection: "row",
            children: [
                l,
                e(s, {
                    flexGrow: 1,
                    flexShrink: 1,
                    children: e(n, {
                        color,
                        children
                    })
                })
            ]
        });
        i[1] = children;
        i[2] = color;
        i[3] = c;
    } else {
        c = i[3];
    }
    return c;
}
export { Qm };
