import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { Sle, Car, SJr, vDe } from "/$bunfs/root/chunk-kasbfbhj.js";
import { ka, PSe } from "/$bunfs/root/chunk-5mfg4ngf.js";
function zve() {
    return vDe() || Sle(ka, PSe());
}
function aBr() {
    if (!zve()) {
        return null;
    }
    if (SJr() && !Sle(ka, PSe())) {
        return Car;
    }
    return "--chrome is blocked by your organization's MCP policy (an enterprise MCP config or a deniedMcpServers entry).";
}
function Zfn(r) {
    let { mode, isBypassPermissionsModeAvailable } = de(r);
    return mode === "bypassPermissions" || mode === "plan" && isBypassPermissionsModeAvailable;
}
export { zve, aBr, Zfn };
