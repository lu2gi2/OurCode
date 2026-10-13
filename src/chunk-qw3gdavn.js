import { K, l0t } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Dne, ic, cl, ro, Ra } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Nt, uue } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Zn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { ye } from "/$bunfs/root/chunk-tybndaby.js";
function p() {
    return a.CLAUDE_JOB_DIR;
}
async function Xgn(n, e, s) {
    i("tengu_bg_agent_action", {
        action: b("stop"),
        source: d(n),
        jobSessionId: ye(K())
    });
    l0t(undefined);
    let t = p();
    if (Nt() && t) {
        let updatedAt = new Date().toISOString();
        let o = await ro(t, e);
        if (o && !Ra(o)) {
            await ic(t, {
                ...o,
                state: "stopped",
                detail: "stopped from session",
                tempo: "idle",
                needs: undefined,
                block: undefined,
                inFlight: undefined,
                updatedAt,
                firstTerminalAt: o.firstTerminalAt ?? updatedAt
            }, e).catch(cl);
        }
        if (uue()) {
            process.stdout.write(Dne(s ?? "Session stopped."));
        }
    }
    g("job_stop_self");
    return Zn(0, "prompt_input_exit", {
        suppressResumeHint: true
    });
}
export { Xgn };
