import { Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { tt, We, k, Nl } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
function o() {
    let e = Nl()?.pewter_owl_model;
    if (typeof e === "string" && e !== "") {
        return e;
    }
    return k("tengu_pewter_owl_model", "");
}
function r(e) {
    if (a.CLAUDE_CODE_PEWTER_OWL !== undefined) {
        return a.CLAUDE_CODE_PEWTER_OWL;
    }
    if (Ee()) {
        return false;
    }
    let t = o();
    if (t !== "" && !We(tt()).includes(t)) {
        return false;
    }
    return k(`tengu_${e}`, false) || Nl()?.[e] === true;
}
function bAe() {
    if (a.CLAUDE_CODE_PEWTER_OWL_TOOL !== undefined) {
        return a.CLAUDE_CODE_PEWTER_OWL_TOOL;
    }
    return r("pewter_owl_tool");
}
function Roo() {
    return r("pewter_owl_brief");
}
export { bAe, Roo };
