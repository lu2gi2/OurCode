import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { hs } from "/$bunfs/root/chunk-nb5ge4vq.js";
import { pls } from "/$bunfs/root/chunk-3yn0xtkv.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { join } from "path";
const y = "active-time.json";
const w = 31536000000;
const m = 10;
function d() {
    return {
        version: 1,
        windows: []
    };
}
function f() {
    return join(ve(), y);
}
function g() {
    return $e.state("active-time-ledger");
}
async function M(e) {
    let i;
    if (j() && e !== undefined) {
        let r = await e.readText([
            g()
        ]);
        if (!r.ok) {
            t(`Failed to read active-time ledger: ${gt(r.error)}`);
            throw Error("active-time ledger read failed");
        }
        let n = r.value.items[0];
        if (!n.found) {
            return d();
        }
        i = n.value;
    } else {
        try {
            i = await mn().read(f());
        } catch (error) {
            if (z(error)) {
                return d();
            }
            t(`Failed to read active-time ledger: ${l(error)}`);
            throw error;
        }
    }
    try {
        let r = X(i);
        if (r.version !== 1 || !Array.isArray(r.windows)) {
            return d();
        }
        return {
            version: 1,
            windows: r.windows.filter((s)=>typeof s?.start === "number" && typeof s?.end === "number" && typeof s?.userSeconds === "number" && s.end >= s.start)
        };
    } catch  {
        return d();
    }
}
class p {
    pendingSeconds = 0;
    activeStretch = null;
    cachedBreakThresholdMs = m * 60000;
    flushTimer = null;
    cleanupHandle = null;
    flushInFlight = null;
    #t = undefined;
    noteUserActivity(e, lastActivityMs) {
        if (e <= 0) {
            return;
        }
        if (this.activeStretch === null || lastActivityMs - this.activeStretch.lastActivityMs >= this.cachedBreakThresholdMs) {
            this.activeStretch = {
                windowStartMs: lastActivityMs - e * 1000,
                lastActivityMs
            };
        } else {
            this.activeStretch.lastActivityMs = lastActivityMs;
        }
        this.pendingSeconds += e;
        this.ensureFlushTimer();
    }
    getCurrentContinuousUse(e) {
        if (this.activeStretch === null) {
            return null;
        }
        if (e - this.activeStretch.lastActivityMs >= this.cachedBreakThresholdMs) {
            return null;
        }
        return {
            startMs: this.activeStretch.windowStartMs,
            durationMs: Math.max(0, e - this.activeStretch.windowStartMs)
        };
    }
    armStorage(e) {
        this.#t ??= e;
    }
    flush(e, i) {
        if (this.flushInFlight) {
            return this.flushInFlight;
        }
        this.flushInFlight = this.doFlush(e, i).finally(()=>{
            this.flushInFlight = null;
        });
        return this.flushInFlight;
    }
    async doFlush(e, i) {
        let value = hs("breakReminder", {
            enabled: false
        }).value;
        this.cachedBreakThresholdMs = (value.breakThresholdMinutes ?? m) * 60000;
        if (this.pendingSeconds <= 0) {
            return;
        }
        let pendingSeconds = this.pendingSeconds;
        try {
            let s = await M(i);
            let o = s.windows.at(-1);
            if (o && e - o.end < this.cachedBreakThresholdMs) {
                o.end = Math.max(o.end, e);
                o.userSeconds = Math.min(o.userSeconds + pendingSeconds, (o.end - o.start) / 1000);
                if (this.activeStretch) {
                    this.activeStretch.windowStartMs = o.start;
                }
            } else {
                let a = this.activeStretch?.windowStartMs ?? e - pendingSeconds * 1000;
                let start = o ? Math.max(a, o.end) : a;
                let end = Math.max(start, e);
                s.windows.push({
                    start,
                    end,
                    userSeconds: Math.min(pendingSeconds, (end - start) / 1000)
                });
                if (this.activeStretch) {
                    this.activeStretch.windowStartMs = start;
                }
            }
            let S = e - w;
            s.windows = s.windows.filter((a)=>a.end >= S);
            if (j() && i !== undefined) {
                let a = await i.write(g(), _(s), {
                    mode: 384
                });
                if (!a.ok) {
                    t(`Failed to flush active-time ledger: ${gt(a.error)}`);
                    return;
                }
            } else {
                let a = ve();
                await mn().mkdir(a);
                await mn().atomicWrite(f(), _(s), 384);
            }
            this.pendingSeconds -= pendingSeconds;
        } catch (error) {
            t(`Failed to flush active-time ledger: ${l(error)}`);
        }
    }
    ensureFlushTimer() {
        if (this.flushTimer) {
            return;
        }
    }
    reset() {
        this.pendingSeconds = 0;
        this.activeStretch = null;
        this.cachedBreakThresholdMs = m * 60000;
        if (this.flushTimer) {
            clearInterval(this.flushTimer);
            this.flushTimer = null;
        }
        this.cleanupHandle?.();
        this.cleanupHandle = null;
        this.flushInFlight = null;
        this.#t = undefined;
    }
}
const V = new q(()=>new p);
class c {
    activeOperations = new Set;
    lastUserActivityTime = 0;
    lastCLIRecordedTime;
    isCLIActive = false;
    USER_ACTIVITY_TIMEOUT_MS = 5000;
    getNow;
    getActiveTimeCounter;
    constructor(e){
        this.getNow = e?.getNow ?? (()=>Date.now());
        this.getActiveTimeCounter = e?.getActiveTimeCounter ?? pls;
        this.lastCLIRecordedTime = this.getNow();
    }
    static getInstance() {
        let e = h();
        e.current ??= new c;
        return e.current;
    }
    static resetInstance() {
        h().current = null;
    }
    static createInstance(e) {
        let i = new c(e);
        h().current = i;
        return i;
    }
    recordUserActivity() {
        if (!this.isCLIActive && this.lastUserActivityTime !== 0) {
            let i = (this.getNow() - this.lastUserActivityTime) / 1000;
            if (i > 0) {
                let r = this.USER_ACTIVITY_TIMEOUT_MS / 1000;
                if (i < r) {
                    let n = this.getActiveTimeCounter();
                    if (n) {
                        n.add(i, {
                            type: "user"
                        });
                    }
                }
            }
        }
        this.lastUserActivityTime = this.getNow();
    }
    startCLIActivity(e) {
        if (this.activeOperations.has(e)) {
            this.endCLIActivity(e);
        }
        let i = this.activeOperations.size === 0;
        this.activeOperations.add(e);
        if (i) {
            this.isCLIActive = true;
            this.lastCLIRecordedTime = this.getNow();
        }
    }
    endCLIActivity(e) {
        this.activeOperations.delete(e);
        if (this.activeOperations.size === 0) {
            let i = this.getNow();
            let r = (i - this.lastCLIRecordedTime) / 1000;
            if (r > 0) {
                let n = this.getActiveTimeCounter();
                if (n) {
                    n.add(r, {
                        type: "cli"
                    });
                }
            }
            this.lastCLIRecordedTime = i;
            this.isCLIActive = false;
        }
    }
    async trackOperation(e, i) {
        this.startCLIActivity(e);
        try {
            return await i();
        } finally{
            this.endCLIActivity(e);
        }
    }
    getLastUserActivityTime() {
        return this.lastUserActivityTime;
    }
    getActivityStates() {
        return {
            isUserActive: (this.getNow() - this.lastUserActivityTime) / 1000 < this.USER_ACTIVITY_TIMEOUT_MS / 1000,
            isCLIActive: this.isCLIActive,
            activeOperationCount: this.activeOperations.size
        };
    }
}
class T {
    current = null;
}
const I = new q(()=>new T);
function h() {
    return I.of(B().host);
}
export const _G = {
    recordUserActivity: ()=>c.getInstance().recordUserActivity(),
    startCLIActivity: (e)=>c.getInstance().startCLIActivity(e),
    endCLIActivity: (e)=>c.getInstance().endCLIActivity(e)
};
