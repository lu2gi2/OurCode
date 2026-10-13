import { ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { zS, xl } from "/$bunfs/root/chunk-4r6b8efh.js";
function edn() {
    let defaultShell = ft().defaultShell;
    if (defaultShell === "bash" && !xl()) {
        return "powershell";
    }
    if (defaultShell === "powershell" && !zS()) {
        return "bash";
    }
    return defaultShell ?? (xl() ? "bash" : "powershell");
}
export { edn };
