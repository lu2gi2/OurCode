import { kn } from "/$bunfs/root/chunk-wkmq9ht0.js";
const n = new Set([
    "starting",
    "running",
    "resuming",
    "adopted",
    "crashed",
    "working",
    "blocked",
    "done",
    "stopped",
    "failed",
    "busy",
    "shell",
    "idle",
    "waiting"
]);
function CG(e) {
    if (e === undefined) {
        return;
    }
    return kn(n.has(e) ? e : "other");
}
const t = new Set([
    "cold",
    "spare",
    "adopted"
]);
function Wgt(e) {
    if (typeof e === "string" && t.has(e)) {
        return e;
    }
}
export { CG, Wgt };
