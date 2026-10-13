import { BY } from "/$bunfs/root/chunk-52bcnmbr.js";
import { ime } from "/$bunfs/root/chunk-25xh2649.js";
import { Hl } from "/$bunfs/root/chunk-kasbfbhj.js";
function Vfn(e, r, o) {
    if (Hl(e.decisionReason, BY) !== undefined || ime(o)) {
        return true;
    }
    if (r.requiresUserInteraction?.()) {
        return true;
    }
    return e.forcedByCaller === true;
}
export { Vfn };
