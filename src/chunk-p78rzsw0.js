import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { s } from "/$bunfs/root/chunk-8524cxt8.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
function fo(m) {
    let v = w(7);
    let { onKeyDown, flexDirection, gap, tabIndex, autoFocus, children } = m;
    let flexDirection_1 = flexDirection === undefined ? "column" : flexDirection;
    let tabIndex_1 = tabIndex === undefined ? 0 : tabIndex;
    let autoFocus_1 = autoFocus === undefined ? true : autoFocus;
    let p;
    if (v[0] !== autoFocus_1 || v[1] !== children || v[2] !== flexDirection_1 || v[3] !== gap || v[4] !== onKeyDown || v[5] !== tabIndex_1) {
        p = e(s, {
            flexDirection: flexDirection_1,
            gap,
            tabIndex: tabIndex_1,
            autoFocus: autoFocus_1,
            onKeyDown,
            children
        });
        v[0] = autoFocus_1;
        v[1] = children;
        v[2] = flexDirection_1;
        v[3] = gap;
        v[4] = onKeyDown;
        v[5] = tabIndex_1;
        v[6] = p;
    } else {
        p = v[6];
    }
    return p;
}
export { fo };
