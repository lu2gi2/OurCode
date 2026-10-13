import { pt } from "/$bunfs/root/chunk-223dyewd.js";
import { ne, Nr } from "/$bunfs/root/chunk-qch5xj2a.js";
import { un } from "/$bunfs/root/chunk-bd805sh6.js";
const i = 200;
const o = i * 4;
const r = /[\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu;
function yp(n) {
    let e = n === undefined ? "" : Nr(un(n).replace(r, " "));
    if (e === "") {
        return undefined;
    }
    return pt(ne(e, o), i);
}
export { yp };
