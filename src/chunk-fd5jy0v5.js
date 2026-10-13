import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { n } from "/$bunfs/root/chunk-8524cxt8.js";
import { r } from "/$bunfs/root/chunk-vybw69ke.js";
function Yw(b) {
    let R = w(7);
    let { children, color, textColor, padded, bold, wrap } = b;
    let e = padded ? " " : "";
    const color_1 = textColor ?? (color ? "inverseText" : undefined);
    let s;
    if (R[0] !== bold || R[1] !== children || R[2] !== color || R[3] !== e || R[4] !== color_1 || R[5] !== wrap) {
        s = r(n, {
            backgroundColor: color,
            color: color_1,
            bold,
            wrap,
            children: [
                e,
                children,
                e
            ]
        });
        R[0] = bold;
        R[1] = children;
        R[2] = color;
        R[3] = e;
        R[4] = color_1;
        R[5] = wrap;
        R[6] = s;
    } else {
        s = R[6];
    }
    return s;
}
export { Yw };
