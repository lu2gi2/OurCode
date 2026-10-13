import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-n1z3wrvm.js";
import "/$bunfs/root/chunk-223dyewd.js";
import "/$bunfs/root/chunk-se8vehhp.js";
import "/$bunfs/root/chunk-5k7wva7c.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import "/$bunfs/root/chunk-3fj60qgx.js";
import "/$bunfs/root/chunk-y9c4grt0.js";
import { Bie } from "/$bunfs/root/chunk-9evx3wkx.js";
import "/$bunfs/root/chunk-4xz4ewb9.js";
import "/$bunfs/root/chunk-nnawdxg4.js";
import "/$bunfs/root/chunk-79wfew46.js";
export const MCP_TASK = {
    name: "MCP Task",
    type: "mcp_task",
    async kill (a, o, k, l, s) {
        let e = o.get(a);
        let n = e?.type === "mcp_task" ? e.sidecarSessionId : undefined;
        let p = e?.type === "mcp_task" ? e.sidecarProjectDir : undefined;
        let d = e?.type === "mcp_task" ? e.sidecarWrite : undefined;
        if (e?.type === "mcp_task") {
            e.abortController?.abort();
            e.driveAbortController?.abort();
            e.sep2663Cancel?.();
        }
        let i = false;
        o.update(a, (r)=>{
            if (r.notified || r.status !== "running") {
                return r;
            }
            i = true;
            return {
                ...r,
                status: "killed",
                endTime: Date.now(),
                parked: undefined,
                notified: true
            };
        });
        if (i && e?.type === "mcp_task") {
            try {
                e.onWorkerWakeOutcome?.({
                    kind: "stopped"
                });
            } catch (error) {
                t("McpTask.kill: onWorkerWakeOutcome threw, the stop continues");
                c(error);
            }
        }
        (async ()=>{
            await d;
            await Bie(a, s, n, p);
        })().catch((r)=>t(`McpTask.kill deleteMcpTaskMetadata: ${String(r)}`));
    }
};
