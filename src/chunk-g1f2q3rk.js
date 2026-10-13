import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-craerjpn.js";
import { dxe } from "/$bunfs/root/chunk-xb9cceab.js";
import { St, t as log } from "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import "/$bunfs/root/chunk-kgp7t7yx.js";
import "/$bunfs/root/chunk-04d4ftnx.js";
import "/$bunfs/root/chunk-7mawjt4q.js";
import "/$bunfs/root/chunk-n1z3wrvm.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import "/$bunfs/root/chunk-w1n7t02f.js";
import "/$bunfs/root/chunk-3fj60qgx.js";
import "/$bunfs/root/chunk-3yz9zdww.js";
import { ise, bxe } from "/$bunfs/root/chunk-d2sd20y7.js";
import { $in } from "/$bunfs/root/chunk-8nfnvtgb.js";
import { Ba } from "/$bunfs/root/chunk-6g4165br.js";
import "/$bunfs/root/chunk-yngqe5v3.js";
import "/$bunfs/root/chunk-nnawdxg4.js";
import "/$bunfs/root/chunk-svqqgdca.js";
import "/$bunfs/root/chunk-m6z3m7rx.js";
import "/$bunfs/root/chunk-79wfew46.js";
export async function startHostedWorkerVitalsEmitter({ sessionId, sdkUrl }) {
    try {
        let tokenFilePath = a.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? ise;
        if (!(await Ba(tokenFilePath, bxe))?.trim()) {
            log("[vitals] no session token file on this worker; guest vitals disabled");
            return;
        }
        let o = await $in({
            sessionId,
            apiBaseUrl: dxe(new URL(sdkUrl)).origin,
            tokenFilePath,
            binaryResolution: "search",
            log
        });
        if (o) {
            St(()=>o.stop());
        }
    } catch (error) {
        log(`[vitals] not started: ${l(error)}`);
    }
}
