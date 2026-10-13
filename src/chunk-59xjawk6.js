import { Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Ru } from "/$bunfs/root/chunk-k5fhce8z.js";
import { randomBytes } from "crypto";
function Ws(e) {
    return e === "completed" || e === "failed" || e === "killed";
}
const l = new Set([
    "local_agent",
    "remote_agent",
    "in_process_teammate",
    "local_workflow"
]);
function k$(e) {
    return Object.values(e).some(Ant);
}
function DRn(e) {
    return Object.values(e).some((t)=>Ant(t) && t.status !== "paused" && !(t.type === "in_process_teammate" && t.identity?.resumableAgentId === undefined) && !(t.type === "remote_agent" && (t.ultraplanPhase === "needs_input" || t.ultraplanPhase === "plan_ready" || t.isUltraplan && t.restoredOnResume)));
}
function Ant(e) {
    return l.has(e.type) && !Ws(e.status) && !(e.type === "in_process_teammate" && e.isIdle) && !(e.type === "remote_agent" && e.isLongRunning);
}
function S7r(e) {
    return Object.values(e).some(Glr);
}
function Glr(e) {
    return e.type === "local_bash" && !Ws(e.status);
}
const r = {
    local_bash: "b",
    local_agent: "a",
    remote_agent: "r",
    in_process_teammate: "t",
    local_workflow: "w",
    monitor_mcp: "m",
    monitor_ws: "s",
    mcp_task: "k",
    dream: "d",
    auto_mode_scan: "e",
    local_memory_import: "n"
};
const n = "0123456789abcdefghijklmnopqrstuvwxyz";
function LRn(e, t) {
    let s = r[e];
    return s !== undefined && t.length === 9 && t.startsWith(s) && t.slice(s.length).split("").every((a)=>n.includes(a));
}
function hE(e) {
    let t = r[e] ?? "x";
    let s = randomBytes(8);
    let a = t;
    for(let o = 0; o < 8; o++){
        a += n[s[o] % n.length];
    }
    return a;
}
function t_(id, type, description, toolUseId) {
    return {
        id,
        type,
        status: "pending",
        description,
        toolUseId,
        startTime: Date.now(),
        ...!Ce() && {
            outputFile: Ru(id)
        },
        outputOffset: 0,
        notified: false
    };
}
export { Ws, k$, DRn, Ant, S7r, Glr, LRn, hE, t_ };
