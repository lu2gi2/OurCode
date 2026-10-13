import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
function mo(R) {
    let c = w(9);
    let { children, hint } = R;
    if (!hint) {
        let o;
        if (c[0] !== children) {
            o = e(n, {
                dimColor: true,
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
    if (c[2] !== children) {
        o = e(n, {
            dimColor: true,
            children
        });
        c[2] = children;
        c[3] = o;
    } else {
        o = c[3];
    }
    let d;
    if (c[4] !== hint) {
        d = e(n, {
            dimColor: true,
            children: hint
        });
        c[4] = hint;
        c[5] = d;
    } else {
        d = c[5];
    }
    let a;
    if (c[6] !== o || c[7] !== d) {
        a = r(s, {
            flexDirection: "column",
            children: [
                o,
                d
            ]
        });
        c[6] = o;
        c[7] = d;
        c[8] = a;
    } else {
        a = c[8];
    }
    return a;
}
export { mo };
