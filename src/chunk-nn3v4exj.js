import { yp } from "/$bunfs/root/chunk-qcw8ncs1.js";
import { hE, t_ } from "/$bunfs/root/chunk-59xjawk6.js";
function qee(t, r) {
    return `${yp(t) ?? ""}/${yp(r) ?? ""}`;
}
function Wzo(t) {
    return yp(t) ?? "";
}
function Kgn({ serverName, toolName, mcpTaskId, toolUseId, pollIntervalMs, abortController, protocol, driveAbortController, ttlExpiresAt }) {
    let e = hE("mcp_task");
    return {
        ...t_(e, "mcp_task", qee(serverName, toolName), toolUseId),
        type: "mcp_task",
        status: "running",
        serverName,
        toolName,
        mcpTaskId: mcpTaskId ?? e,
        mcpStatus: "working",
        pollIntervalMs,
        abortController,
        protocol,
        driveAbortController,
        ttlExpiresAt
    };
}
export { qee, Wzo, Kgn };
