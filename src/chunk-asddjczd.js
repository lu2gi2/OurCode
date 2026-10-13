import { xr } from "/$bunfs/root/chunk-c5mcach4.js";
import { xV, C$e, QW } from "/$bunfs/root/chunk-xv9n7kza.js";
function SGo(script, e, r) {
    xr().bundledWorkflows.push({
        source: "built-in",
        ...e,
        script,
        disableModelInvocation: r?.disableModelInvocation
    });
}
function W1t() {
    if (xV()) {
        return [];
    }
    let bundledWorkflows = xr().bundledWorkflows;
    if (C$e()) {
        return bundledWorkflows.filter((e)=>!QW(e.name));
    }
    return bundledWorkflows;
}
export { SGo, W1t };
