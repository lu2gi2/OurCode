import { UGn } from "/$bunfs/root/chunk-x47nahfr.js";
import { w_ } from "/$bunfs/root/chunk-nj0630nv.js";
function J$(o, n) {
    let e = w_(o, "fable_5_mitigations", n);
    if (e !== undefined) {
        return e;
    }
    if (o === "claude-mythos-5") {
        return true;
    }
    return false;
}
function CCe(o) {
    return !UGn() && w_(o, "fable_5_1_prompt_bundle") === true;
}
function DNe(o) {
    return o.startsWith("claude-fable-");
}
function Ahs(o) {
    return o.startsWith("claude-mythos-");
}
function SNn(o) {
    return false;
}
export { J$, CCe, DNe, Ahs, SNn };
