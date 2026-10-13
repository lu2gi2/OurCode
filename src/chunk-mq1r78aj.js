import { pM, S3 } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Qn } from "/$bunfs/root/chunk-gc7ea4xt.js";
function tte(t, e) {
    if (e) {
        if (t) {
            return `agent:builtin:${t}`;
        }
        return "agent:default";
    }
    if (t) {
        return `agent:custom:${t}`;
    }
    return "agent:custom";
}
function ize() {
    let e = Qn()?.outputStyle ?? pM;
    if (e === pM) {
        return "repl_main_thread";
    }
    if (Object.hasOwn(S3, e)) {
        return `repl_main_thread:outputStyle:${e}`;
    }
    return "repl_main_thread:outputStyle:custom";
}
export { tte, ize };
