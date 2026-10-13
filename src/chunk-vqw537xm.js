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
import "/$bunfs/root/chunk-s7bhz6qz.js";
import "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import "/$bunfs/root/chunk-x47nahfr.js";
import { lo } from "/$bunfs/root/chunk-5vhepr4t.js";
import "/$bunfs/root/chunk-kgp7t7yx.js";
import "/$bunfs/root/chunk-04d4ftnx.js";
import "/$bunfs/root/chunk-7mawjt4q.js";
import "/$bunfs/root/chunk-n1z3wrvm.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import "/$bunfs/root/chunk-w1n7t02f.js";
import "/$bunfs/root/chunk-3fj60qgx.js";
import "/$bunfs/root/chunk-3yz9zdww.js";
import { fjr } from "/$bunfs/root/chunk-h6m6bpqj.js";
import "/$bunfs/root/chunk-yngqe5v3.js";
import "/$bunfs/root/chunk-nnawdxg4.js";
import "/$bunfs/root/chunk-svqqgdca.js";
import "/$bunfs/root/chunk-79wfew46.js";
import { basename } from "path";
export async function call(r, e) {
    let o = await fjr();
    let a = lo(e.session);
    if (!o.success) {
        if (a) {
            t(`heapdump failed: ${o.error}`, {
                level: "error"
            });
            return {
                type: "text",
                value: "Failed to create heap dump (detail withheld on this connection)"
            };
        }
        return {
            type: "text",
            value: `Failed to create heap dump: ${o.error}`
        };
    }
    let i = a ? basename(o.heapPath) : o.heapPath;
    let p = a ? basename(o.diagPath) : o.diagPath;
    if (a) {
        t(`heapdump written: ${o.heapPath} ${o.diagPath}`);
    }
    let h = [
        i,
        p,
        "",
        d(o.diagnostics)
    ];
    h.push("", "Open the .heapsnapshot in Chrome DevTools → Memory → Load to inspect retainers.");
    return {
        type: "text",
        value: h.join(`
`)
    };
}
function d(diagnostics) {
    let { memoryUsage, resourceUsage, analysis } = diagnostics;
    let i = analysis.potentialLeaks.length ? analysis.potentialLeaks.map((n)=>`  \u26A0 ${n}`).join(`
`) : "  (no obvious leak indicators)";
    let p = (n, u)=>`RSS ${s(memoryUsage.rss)} (peak ${s(resourceUsage.maxRSS)}) ${n > u ? "— most memory is JS heap (inspect the .heapsnapshot)" : "— most memory is native (NOT in the .heapsnapshot)"}`;
    if (diagnostics.runtime === "bun") {
        let n = Math.max(0, memoryUsage.rss - memoryUsage.heapUsed);
        return [
            p(memoryUsage.heapUsed, n),
            `  JS heap          ${s(memoryUsage.heapUsed).padStart(8)}  in snapshot`,
            `  strings, buffers ${s(memoryUsage.external).padStart(8)}  part of the JS heap, in snapshot`,
            `  outside the heap ${s(n).padStart(8)}  not in snapshot (code/JIT/stacks/allocator)`,
            i
        ].join(`
`);
    }
    let h = memoryUsage.external - memoryUsage.arrayBuffers;
    let c = Math.max(0, memoryUsage.rss - memoryUsage.heapTotal - memoryUsage.external);
    return [
        p(memoryUsage.heapTotal, memoryUsage.external + c),
        `  JS heap        ${s(memoryUsage.heapTotal).padStart(8)}  in snapshot`,
        `  array buffers  ${s(memoryUsage.arrayBuffers).padStart(8)}  not in snapshot`,
        `  other external ${s(h).padStart(8)}  not in snapshot`,
        `  unaccounted    ${s(c).padStart(8)}  not in snapshot (code/JIT/stacks/allocator)`,
        i
    ].join(`
`);
}
function s(r) {
    return `${(r / 1073741824).toFixed(2)} GB`;
}
