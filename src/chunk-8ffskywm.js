import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { Hfe, dt } from "/$bunfs/root/chunk-xg9ned06.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
function hp(x) {
    let i = w(9);
    let { status, children } = x;
    let { color } = Hfe[status];
    let c;
    if (i[0] !== status) {
        c = e(s, {
            width: 2,
            flexShrink: 0,
            children: e(dt, {
                status
            })
        });
        i[0] = status;
        i[1] = c;
    } else {
        c = i[1];
    }
    const dimColor = !color;
    let a;
    if (i[2] !== children || i[3] !== color || i[4] !== dimColor) {
        a = e(s, {
            flexGrow: 1,
            flexShrink: 1,
            children: e(n, {
                color,
                dimColor,
                children
            })
        });
        i[2] = children;
        i[3] = color;
        i[4] = dimColor;
        i[5] = a;
    } else {
        a = i[5];
    }
    let d;
    if (i[6] !== c || i[7] !== a) {
        d = r(s, {
            flexDirection: "row",
            children: [
                c,
                a
            ]
        });
        i[6] = c;
        i[7] = a;
        i[8] = d;
    } else {
        d = i[8];
    }
    return d;
}
export { hp };
