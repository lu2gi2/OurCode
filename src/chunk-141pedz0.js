export const NON_REPL_SUBCOMMANDS = new Set([
    "update",
    "upgrade",
    "doctor",
    "forward-home-settings"
]);
export function isProjectVerbInvocation(o) {
    return false;
}
export function isMcpServeInvocation(o) {
    let n = o.indexOf("mcp");
    return n !== -1 && o[n + 1] === "serve";
}
export function isAgentsJsonInvocation(o) {
    let n = o.indexOf("agents");
    return n !== -1 && o.includes("--json", n + 1);
}
export function isPluginEvalInvocation(o) {
    return o.some((n, e)=>(n === "plugin" || n === "plugins") && o[e + 1] === "eval");
}
export function isRemoteControlInvocation(o) {
    return o.some((n)=>n === "remote-control" || n === "rc");
}
