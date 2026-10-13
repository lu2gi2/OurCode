import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { nt, s } from "/$bunfs/root/chunk-8524cxt8.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
function hl(f) {
    let b = w(6);
    let { children, paddingX, marginTop, marginBottom } = f;
    let paddingX_1 = paddingX === undefined ? 1 : paddingX;
    const borderStyle = nt() ? undefined : "dashed";
    let i;
    if (b[0] !== children || b[1] !== marginBottom || b[2] !== marginTop || b[3] !== paddingX_1 || b[4] !== borderStyle) {
        i = e(s, {
            borderStyle,
            borderColor: "subtle",
            borderLeft: false,
            borderRight: false,
            flexDirection: "column",
            overflow: "hidden",
            paddingX: paddingX_1,
            marginTop,
            marginBottom,
            children
        });
        b[0] = children;
        b[1] = marginBottom;
        b[2] = marginTop;
        b[3] = paddingX_1;
        b[4] = borderStyle;
        b[5] = i;
    } else {
        i = b[5];
    }
    return i;
}
export { hl };
