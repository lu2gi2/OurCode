import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { St } from "/$bunfs/root/chunk-bd805sh6.js";
import { mr } from "/$bunfs/root/chunk-6kc68p18.js";
import { K1 } from "/$bunfs/root/chunk-x47nahfr.js";
import { readFile } from "fs/promises";
function OSo(t, e) {
    a().registerAttributor(t, e);
}
const c = [
    "bash_shell",
    "mcp_stdio",
    "lsp",
    "other"
];
class m {
    attributors = new Map;
    childProcesses = new Map;
    childRegisteredCount = 0;
    pageSizeBytes = undefined;
    installed = false;
    emitted = false;
    unregisterCleanup = undefined;
    registerAttributor(t, e) {
        this.attributors.set(t, e);
    }
    registerChild(kind, e) {
        let s = this.childProcesses.get(e);
        if (s && !s.dead) {
            return;
        }
        this.childRegisteredCount++;
        let r = {
            kind,
            peakRssBytes: 0,
            dead: false
        };
        this.childProcesses.set(e, r);
        this.readChildRssBytes(e).then((n)=>{
            if (n !== undefined && n > r.peakRssBytes) {
                r.peakRssBytes = n;
            }
        });
    }
    async sampleChildPeaks() {
        if (this.childProcesses.size === 0) {
            return;
        }
        let t = [
            ...this.childProcesses.entries()
        ].filter(([, e])=>!e.dead);
        await Promise.all(t.map(async ([e, s])=>{
            let r = await this.readChildRssBytes(e);
            if (r === undefined) {
                s.dead = true;
            } else if (r > s.peakRssBytes) {
                s.peakRssBytes = r;
            }
        }));
    }
    async readChildRssBytes(t) {
        try {
            let e = await readFile(`/proc/${t}/statm`, "utf8");
            let s = Number(e.split(" ")[1]);
            if (Number.isFinite(s)) {
                return s * await this.getPageSizeBytes();
            }
            return undefined;
        } catch  {
            return;
        }
    }
    async getPageSizeBytes() {
        if (this.pageSizeBytes !== undefined) {
            return this.pageSizeBytes;
        }
        let t = 4096;
        try {
            let e = process.memoryUsage().rss;
            let s = await readFile("/proc/self/statm", "utf8");
            let r = Number(s.split(" ")[1]);
            let n = 2 ** Math.round(Math.log2(e / r));
            if (Number.isFinite(n) && n > 0) {
                t = n;
            }
        } catch  {}
        this.pageSizeBytes ??= t;
        return this.pageSizeBytes;
    }
    async buildSummary(t) {
        let e = process.memoryUsage();
        let s = {
            uptime_s: Math.round(process.uptime()),
            final_rss_bytes: e.rss,
            final_heap_used_bytes: e.heapUsed,
            final_external_bytes: e.external,
            final_array_buffers_bytes: e.arrayBuffers,
            peak_rss_bytes: Math.max(t.rss, e.rss),
            peak_heap_used_bytes: Math.max(t.heapUsed, e.heapUsed),
            peak_external_bytes: Math.max(t.external, e.external),
            constrained_memory_bytes: process.constrainedMemory?.() || undefined
        };
        for (let [o, l] of this.attributors){
            try {
                let d = l();
                s[`attr_${o}_entries`] = d.entries;
                if (d.bytes !== undefined) {
                    s[`attr_${o}_bytes`] = d.bytes;
                }
            } catch  {}
        }
        await this.sampleChildPeaks();
        let r = 0;
        let n = {};
        for (let o of this.childProcesses.values()){
            r += o.peakRssBytes;
            n[o.kind] = (n[o.kind] ?? 0) + o.peakRssBytes;
        }
        s.child_count = this.childRegisteredCount;
        s.child_rss_bytes_total = r;
        for (let o of c){
            if (n[o] !== undefined) {
                s[`child_${o}_rss_bytes`] = n[o];
            }
        }
        return s;
    }
    async emitSummaryOnce(t) {
        if (this.emitted) {
            return;
        }
        this.emitted = true;
        try {
            i("tengu_sdk_memory_summary", await this.buildSummary(t()));
        } catch  {}
    }
    installExitSummary(t) {
        if (this.installed) {
            return;
        }
        this.installed = true;
        this.unregisterCleanup = St(()=>this.emitSummaryOnce(t));
    }
    reset() {
        this.installed = false;
        this.emitted = false;
        this.unregisterCleanup?.();
        this.unregisterCleanup = undefined;
        this.attributors.clear();
        this.childProcesses.clear();
        this.childRegisteredCount = 0;
    }
}
const h = new q(()=>new m);
function a() {
    return h.of(B().host);
}
function odt(t, e) {
    if (!K1() || mr()) {
        return;
    }
    if (!Number.isFinite(e) || e <= 0) {
        return;
    }
    a().registerChild(t, e);
}
function tCs(t) {
    let e = a().childProcesses.get(t);
    if (e) {
        e.dead = true;
    }
}
function nCs() {
    return a().sampleChildPeaks();
}
function rCs(t) {
    a().installExitSummary(t);
}
export { OSo, odt, tCs, nCs, rCs };
