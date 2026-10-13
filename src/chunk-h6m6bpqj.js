import { K } from "/$bunfs/root/chunk-ctt36bn8.js";
import { W, xs } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { _, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Zk } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { DIs } from "/$bunfs/root/chunk-3yz9zdww.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { writeFileSync } from "fs";
import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { getHeapSpaceStatistics, getHeapStatistics } from "v8";
async function M(trigger, dumpNumber = 0) {
    let s = process.memoryUsage();
    let e = getHeapStatistics();
    let n = process.resourceUsage();
    let uptimeSeconds = process.uptime();
    let d;
    try {
        d = getHeapSpaceStatistics();
    } catch  {}
    let length = process._getActiveHandles().length;
    let length_1 = process._getActiveRequests().length;
    let openFileDescriptors;
    try {
        openFileDescriptors = (await readdir("/proc/self/fd")).length;
    } catch  {}
    let smapsRollup;
    try {
        smapsRollup = await readFile("/proc/self/smaps_rollup", "utf8");
    } catch  {}
    let objectTypeCounts;
    let protectedObjectTypeCounts;
    let mimalloc;
    try {
        let { heapStats } = await import("bun:jsc");
        let b = heapStats(true);
        objectTypeCounts = b.objectTypeCounts;
        protectedObjectTypeCounts = b.protectedObjectTypeCounts;
        mimalloc = b.mimalloc || undefined;
    } catch  {}
    let x = s.rss - s.heapUsed;
    let bytesPerSecond = uptimeSeconds > 0 ? s.rss / uptimeSeconds : 0;
    let mbPerHour = bytesPerSecond * 3600 / 1048576;
    let potentialLeaks = [];
    if (e.number_of_detached_contexts > 0) {
        potentialLeaks.push(`${e.number_of_detached_contexts} detached context(s) - possible iframe/context leak`);
    }
    if (length > 100) {
        potentialLeaks.push(`${length} active handles - possible timer/socket leak`);
    }
    if (x > s.heapUsed) {
        potentialLeaks.push("Native memory > heap - leak may be in native addons (node-pty, etc.)");
    }
    if (mbPerHour > 100) {
        potentialLeaks.push(`High memory growth rate: ${mbPerHour.toFixed(1)} MB/hour`);
    }
    if (openFileDescriptors && openFileDescriptors > 500) {
        potentialLeaks.push(`${openFileDescriptors} open file descriptors - possible file/socket leak`);
    }
    return {
        timestamp: new Date().toISOString(),
        sessionId: K(),
        trigger,
        dumpNumber,
        uptimeSeconds,
        runtime: Zk() ? "bun" : "node",
        memoryUsage: {
            heapUsed: s.heapUsed,
            heapTotal: s.heapTotal,
            external: s.external,
            arrayBuffers: s.arrayBuffers,
            rss: s.rss
        },
        memoryGrowthRate: {
            bytesPerSecond,
            mbPerHour
        },
        v8HeapStats: {
            heapSizeLimit: e.heap_size_limit,
            mallocedMemory: e.malloced_memory,
            peakMallocedMemory: e.peak_malloced_memory,
            detachedContexts: e.number_of_detached_contexts,
            nativeContexts: e.number_of_native_contexts
        },
        v8HeapSpaces: d?.map((u)=>({
                name: u.space_name,
                size: u.space_size,
                used: u.space_used_size,
                available: u.space_available_size
            })),
        resourceUsage: {
            maxRSS: n.maxRSS * (O() === "macos" ? 1 : 1024),
            userCPUTime: n.userCPUTime,
            systemCPUTime: n.systemCPUTime
        },
        activeHandles: length,
        activeRequests: length_1,
        openFileDescriptors,
        analysis: {
            potentialLeaks,
            recommendation: potentialLeaks.length > 0 ? `WARNING: ${potentialLeaks.length} potential leak indicator(s) found. See potentialLeaks array.` : "No obvious leak indicators. Check heap snapshot for retained objects."
        },
        smapsRollup,
        objectTypeCounts,
        protectedObjectTypeCounts,
        mimalloc,
        platform: "linux",
        nodeVersion: process.version,
        ccVersion: ({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }).VERSION
    };
}
async function fjr(l = "manual", dumpNumber = 0) {
    try {
        let s = K();
        let diagnostics = await M(l, dumpNumber);
        let n = (f)=>(f / 1024 / 1024 / 1024).toFixed(3);
        t(`[HeapDump] Memory state:
  heapUsed: ${n(diagnostics.memoryUsage.heapUsed)} GB (in snapshot)
  external: ${n(diagnostics.memoryUsage.external)} GB (${diagnostics.runtime === "bun" ? "part of heapUsed, in snapshot" : "NOT in snapshot"})
  rss: ${n(diagnostics.memoryUsage.rss)} GB (total process)
  ${diagnostics.analysis.recommendation}`);
        let m = await DIs();
        await ie().mkdir(m);
        let d = dumpNumber > 0 ? `-dump${dumpNumber}` : "";
        let g = `${s}${d}.heapsnapshot`;
        let h = `${s}${d}-diagnostics.json`;
        let heapPath = join(m, g);
        let diagPath = join(m, h);
        await writeFile(diagPath, _(diagnostics, null, 2), {
            mode: 384
        });
        t(`[HeapDump] Diagnostics written to ${diagPath}`);
        await T(heapPath);
        t(`[HeapDump] Heap dump written to ${heapPath}`);
        i("tengu_heap_dump", {
            triggerManual: true,
            triggerAuto15GB: false,
            dumpNumber,
            success: true
        });
        return {
            success: true,
            heapPath,
            diagPath,
            diagnostics
        };
    } catch (error) {
        let e = W(error);
        if (xs(e)) {
            t(`[HeapDump] Failed to write dump: ${e.message}`, {
                level: "error"
            });
        } else {
            c(e);
        }
        i("tengu_heap_dump", {
            triggerManual: true,
            triggerAuto15GB: false,
            dumpNumber,
            success: false
        });
        return {
            success: false,
            error: e.message
        };
    }
}
async function T(heapPath) {
    writeFileSync(heapPath, Bun.generateHeapSnapshot("v8", "arraybuffer"), {
        mode: 384
    });
    Bun.gc(true);
}
export { fjr };
