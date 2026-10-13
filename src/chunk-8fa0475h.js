import { Qn } from "/$bunfs/root/chunk-gc7ea4xt.js";
function Bdo() {
    if ((Qn() || {}).permissions?.disableBypassPermissionsMode === "disable") {
        return "Bypass permissions mode was disabled by settings";
    }
}
function xE() {
    return Bdo() !== undefined;
}
export { Bdo, xE };
