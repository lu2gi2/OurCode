import { So } from "/$bunfs/root/chunk-dn762950.js";
import { lC } from "/$bunfs/root/chunk-wrn3nvp5.js";
function kX(e) {
    if (e.agentId) {
        return e.agentId;
    }
    let n = lC();
    if (n) {
        return So(n.agentId);
    }
}
function dze(e, n) {
    if (e === undefined) {
        return true;
    }
    return e === n;
}
function yWt(e) {
    return e ?? "main session";
}
export { kX, dze, yWt };
