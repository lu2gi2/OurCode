import { q } from "/$bunfs/root/chunk-ctt36bn8.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ri } from "/$bunfs/root/chunk-j9ep7722.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { whn } from "/$bunfs/root/chunk-n2p0n845.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { D$n, L$n } from "/$bunfs/root/chunk-6rhcrh84.js";
const M = 200;
const b = 1000;
const T = 10000;
const afterQuietMs = 30000;
const _ = 500;
const k = 5000;
const d = 50;
const f = 300000;
function gUt() {
    try {
        let e = process.resourceUsage();
        return {
            cpuTimeMs: (e.userCPUTime + e.systemCPUTime) / 1000,
            majorPageFaults: e.majorPageFault
        };
    } catch (error) {
        t(`[event-loop-stall] process.resourceUsage() failed: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
        });
        return null;
    }
}
function E() {
    try {
        let e = process.memoryUsage();
        return {
            rss_mb: Math.round(e.rss / 1024 / 1024),
            heap_used_mb: Math.round(e.heapUsed / 1024 / 1024),
            ext_mb: Math.round(e.external / 1024 / 1024)
        };
    } catch (error) {
        t(`[event-loop-stall] process.memoryUsage() failed: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
        });
        return null;
    }
}
function w({ prevWallMs, prevMonotonicMs, nowWallMs, nowMonotonicMs, intervalMs }) {
    let wallElapsedMs = nowWallMs - prevWallMs;
    let p = nowMonotonicMs - prevMonotonicMs;
    let wallDriftMs = wallElapsedMs - intervalMs;
    let monotonicStallMs = Math.round(p - intervalMs);
    let clockJumpMs = wallDriftMs - monotonicStallMs;
    let isMonotonicStall = monotonicStallMs > _;
    return {
        wallElapsedMs,
        wallDriftMs,
        monotonicStallMs,
        clockJumpMs,
        isStall: wallDriftMs > _ || isMonotonicStall,
        isMonotonicStall,
        likelySleep: wallDriftMs > k
    };
}
function y({ write, isMonotonicStall, prevMonotonicMs, nowMonotonicMs, intervalMs }) {
    if (!isMonotonicStall || write === undefined || write.endedMs < prevMonotonicMs) {
        return {
            blocked_write: false
        };
    }
    let r = prevMonotonicMs + intervalMs;
    return {
        blocked_write: write.startedMs <= r + d && write.endedMs >= nowMonotonicMs - d,
        last_write_ms: Math.round(write.endedMs - write.startedMs),
        last_write_bytes: write.bytes
    };
}
function QBs(e, s) {
    let l = R.of(e);
    let n = a.CLAUDE_CODE_REMOTE ? b : M;
    let o = a.CLAUDE_CODE_REMOTE ? {
        intervalMs: T,
        afterQuietMs
    } : undefined;
    if (s === undefined) {
        l.start(n, o);
    } else {
        l.start(n, o, s);
    }
}
class v {
    timer = null;
    intervalMs = M;
    activeIntervalMs = M;
    rest = undefined;
    quietMs = 0;
    stopListeningForWork = ()=>{};
    rssSampleTicks = f / M;
    lastTickMs = 0;
    lastTickMonotonicMs = 0;
    totalStalls = 0;
    totalStallDurationMs = 0;
    totalMonotonicStallMs = 0;
    tickCount = 0;
    lastResourceSample = null;
    sigcontSeen = false;
    listensForSigcont = false;
    onSigcont = ()=>{
        this.sigcontSeen = true;
    };
    afterTick = (e, s, l, n, expected_interval_ms)=>{
        let sigcont = this.listensForSigcont ? this.sigcontSeen : undefined;
        this.sigcontSeen = false;
        if (!e.isStall || s === null) {
            return;
        }
        t(`[event-loop-stall] blocked for ${e.monotonicStallMs}ms monotonic (wall drift ${e.wallDriftMs}ms, clock jump ${e.clockJumpMs}ms, expected ${expected_interval_ms}ms). Total stalls: ${this.totalStalls}, cumulative: ${this.totalMonotonicStallMs}ms monotonic / ${this.totalStallDurationMs}ms wall${e.likelySleep ? " [likely sleep/wake]" : ""} blocked_write=${s.blocked_write}` + (s.last_write_ms !== undefined ? ` last_write=${s.last_write_ms}ms/${s.last_write_bytes}B` : "") + ` sigcont=${sigcont ?? "n/a"}` + (l ? ` cpu=${l.cpu_delta_ms}ms majflt=${l.major_fault_delta}` : "") + (n ? ` rss=${n.rss_mb}MB heap=${n.heap_used_mb}MB ext=${n.ext_mb}MB` : ""), {
            level: "warn"
        });
        i("tengu_event_loop_stall", {
            stall_duration_ms: e.wallDriftMs,
            expected_interval_ms,
            actual_interval_ms: e.wallElapsedMs,
            monotonic_stall_ms: e.monotonicStallMs,
            clock_jump_ms: e.clockJumpMs,
            total_stalls: this.totalStalls,
            cumulative_stall_ms: this.totalStallDurationMs,
            cumulative_monotonic_stall_ms: this.totalMonotonicStallMs,
            likely_sleep: e.likelySleep,
            ...l,
            ...n,
            ...s,
            sigcont,
            nonblocking_stdout: whn()
        });
    };
    start(e, s, l = {
        attributeSigcont: true
    }) {
        if (this.timer !== null) {
            return;
        }
        this.activeIntervalMs = e;
        this.rest = s;
        this.openWindow();
        if (l.attributeSigcont) {
            this.listensForSigcont = true;
            process.on("SIGCONT", this.onSigcont);
        }
        t(`[event-loop-stall] detector started (interval=${e}ms${s ? `, at rest ${s.intervalMs}ms` : ""}, threshold=${_}ms)`);
        if (s !== undefined) {
            this.stopListeningForWork = L$n(()=>{
                if (this.intervalMs === this.activeIntervalMs) {
                    this.quietMs = 0;
                } else {
                    try {
                        this.tick();
                    } catch (error) {
                        c(error);
                        this.openWindow();
                        this.arm(this.activeIntervalMs);
                    }
                }
            });
        }
        this.arm(e);
    }
    stop() {
        this.stopListeningForWork();
        if (this.listensForSigcont) {
            process.off("SIGCONT", this.onSigcont);
            this.listensForSigcont = false;
            this.sigcontSeen = false;
        }
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    [Symbol.dispose]() {
        this.stop();
    }
    openWindow() {
        this.lastTickMs = Date.now();
        this.lastTickMonotonicMs = performance.now();
        this.lastResourceSample = gUt();
    }
    arm(e) {
        this.quietMs = 0;
        if (this.timer !== null) {
            if (this.intervalMs === e) {
                return;
            }
            clearInterval(this.timer);
        }
        this.intervalMs = e;
        this.rssSampleTicks = Math.round(f / e);
        this.timer = setInterval(this.tick, e);
        this.timer.unref();
    }
    tick = ()=>{
        let intervalMs = this.intervalMs;
        let nowWallMs = Date.now();
        let nowMonotonicMs = performance.now();
        let n = Math.min(intervalMs, Math.round(nowMonotonicMs - this.lastTickMonotonicMs));
        let o = w({
            prevWallMs: this.lastTickMs,
            prevMonotonicMs: this.lastTickMonotonicMs,
            nowWallMs,
            nowMonotonicMs,
            intervalMs: n
        });
        this.tickCount++;
        let r = gUt();
        let write = ri().get(process.stdout)?.takeSlowestFrameWrite();
        if (o.isStall) {
            this.totalStalls++;
            this.totalStallDurationMs += Math.max(o.wallDriftMs, 0);
            if (o.isMonotonicStall) {
                this.totalMonotonicStallMs += o.monotonicStallMs;
            }
            let m = E();
            let u = r && this.lastResourceSample ? {
                cpu_delta_ms: Math.round(r.cpuTimeMs - this.lastResourceSample.cpuTimeMs),
                major_fault_delta: r.majorPageFaults - this.lastResourceSample.majorPageFaults
            } : null;
            let S = y({
                write,
                isMonotonicStall: o.isMonotonicStall,
                prevMonotonicMs: this.lastTickMonotonicMs,
                nowMonotonicMs,
                intervalMs: n
            });
            setImmediate(this.afterTick, o, S, u, m, intervalMs);
            if (o.likelySleep) {
                ri().get(process.stdout)?.reassertTerminalModes();
            }
        }
        if (!o.isStall) {
            setImmediate(this.afterTick, o, null, null, null, intervalMs);
        }
        this.lastTickMs = nowWallMs;
        this.lastTickMonotonicMs = nowMonotonicMs;
        this.lastResourceSample = r;
        this.choosePeriod();
    };
    choosePeriod() {
        if (this.rest === undefined) {
            return;
        }
        if (D$n()) {
            this.arm(this.activeIntervalMs);
            return;
        }
        this.quietMs += this.intervalMs;
        if (this.quietMs >= this.rest.afterQuietMs) {
            this.arm(this.rest.intervalMs);
        }
    }
}
var R = new q(()=>new v);
export { gUt, QBs };
