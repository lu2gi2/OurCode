import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import "/$bunfs/root/chunk-sawpz2mr.js";
import { an } from "/$bunfs/root/chunk-tsfvfcsw.js";
import "/$bunfs/root/chunk-yp41169e.js";
import "/$bunfs/root/chunk-79wfew46.js";
export async function runHeadlessCloudPrintArm(r, s) {
    let prompt = o(r.remote, r.inputPrompt);
    if (prompt === null) {
        return an("Error: claude -p --cloud needs a task: pass it as the prompt, as --cloud's value, or on stdin.");
    }
    let { runHeadlessCloudPrint } = await import("/$bunfs/root/chunk-n3gcnqsh.js");
    return runHeadlessCloudPrint(r, s, {
        prompt,
        outputFormat: r.outputFormat === "json" ? "json" : "text"
    });
}
function o(remote, inputPrompt) {
    let t = [
        remote ?? "",
        typeof inputPrompt === "string" ? inputPrompt : ""
    ].filter((e)=>e.trim() !== "");
    if (t.length === 0) {
        return null;
    }
    return t.join(`
`);
}
