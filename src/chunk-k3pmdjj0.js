import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
function $a() {
    let a_MCP_TIMEOUT = a.MCP_TIMEOUT;
    if (a_MCP_TIMEOUT && a_MCP_TIMEOUT > 0) {
        return Math.min(a_MCP_TIMEOUT, 2147483647);
    }
    return 30000;
}
function K0e() {
    let a_MCP_CONNECT_TIMEOUT_MS = a.MCP_CONNECT_TIMEOUT_MS;
    if (a_MCP_CONNECT_TIMEOUT_MS && a_MCP_CONNECT_TIMEOUT_MS > 0) {
        return Math.min(a_MCP_CONNECT_TIMEOUT_MS, 2147483647);
    }
    return 5000;
}
const vce = 2000;
const tcs = 8000;
const ncs = 500;
export { $a, K0e, vce, tcs, ncs };
