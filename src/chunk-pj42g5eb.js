import { kn } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
function ln(r) {
    return kn(at(r).slice(0, 12));
}
const t = /^[0-9a-f]{12}$/;
function wHt(r) {
    if (t.test(r)) {
        return kn(r);
    }
}
export { ln, wHt };
