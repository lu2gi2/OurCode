import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { nt, s, n } from "/$bunfs/root/chunk-8524cxt8.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
function rp(u) {
    let h = w(10);
    let { children, color, title } = u;
    let f = nt();
    const borderStyle = f ? undefined : "round";
    const paddingX = f ? 0 : 1;
    const gap = title ? 1 : 0;
    let c;
    if (h[0] !== color || h[1] !== title) {
        c = title && e(n, {
            bold: true,
            color,
            children: title
        });
        h[0] = color;
        h[1] = title;
        h[2] = c;
    } else {
        c = h[2];
    }
    let y;
    if (h[3] !== children || h[4] !== color || h[5] !== borderStyle || h[6] !== paddingX || h[7] !== gap || h[8] !== c) {
        y = r(s, {
            borderStyle,
            borderColor: color,
            flexDirection: "column",
            paddingX,
            gap,
            children: [
                c,
                children
            ]
        });
        h[3] = children;
        h[4] = color;
        h[5] = borderStyle;
        h[6] = paddingX;
        h[7] = gap;
        h[8] = c;
        h[9] = y;
    } else {
        y = h[9];
    }
    return y;
}
export { rp };
