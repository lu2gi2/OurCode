import { Q, Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { lstatSync, readFileSync, rmSync, unlinkSync, writeFileSync } from "fs";
import { join } from "path";
const y = "exit-cause";
const Don = "session_in_use";
const h = "exit-detail";
const P = 200;
function Yy(e, t) {
    let n = t ?? process.env.CLAUDE_JOB_DIR;
    if (!n) {
        return;
    }
    try {
        writeFileSync(join(n, y), e);
    } catch  {}
}
function tVs(e, t, n) {
    let r = n ?? process.env.CLAUDE_JOB_DIR;
    let i = t.trim();
    if (!r || !i) {
        return;
    }
    try {
        writeFileSync(join(r, h), `${e}
${i.slice(0, P)}`);
    } catch  {}
}
function eRo(e) {
    return E(join(e, y));
}
function tRo(e, t) {
    let n = E(join(e, h));
    if (!n) {
        return;
    }
    let r = n.indexOf(`
`);
    if (r !== -1 && n.slice(0, r) === t) {
        return n.slice(r + 1);
    }
}
function E(e) {
    try {
        let t = lstatSync(e);
        if (!t.isFile() || t.size > 65536) {
            try {
                rmSync(e, {
                    recursive: true,
                    force: true
                });
            } catch  {}
            return;
        }
        let n = readFileSync(e, "utf8");
        unlinkSync(e);
        return n;
    } catch  {
        return;
    }
}
const m = new Set([
    "EPIPE",
    "EIO",
    "ENXIO",
    "EBADF"
]);
const b = new Set([
    "EISDIR",
    "ENOTCONN",
    "ECONNRESET"
]);
function DDt(e) {
    let t = e !== null && typeof e === "object" && "code" in e && typeof e.code === "string" ? e.code : undefined;
    return t !== undefined && (b.has(t) || m.has(t));
}
function Npe(e, t) {
    e.on("error", (n)=>{
        if (n.code !== undefined && m.has(n.code)) {
            try {
                e.destroy?.();
            } catch  {}
            t?.(n.code);
        }
    });
}
function nRo(e) {
    Npe(process.stdin, (t)=>e("stdin", t));
    Npe(process.stdout, (t)=>e("stdout", t));
    process.stdout.on("error", ()=>{
        o.markErrored();
    });
    Npe(process.stderr);
}
function v(e, t, n) {
    if (e.destroyed || e.writableEnded) {
        return false;
    }
    e.write(t, n);
    return true;
}
class a {
    everWritten = false;
    drainPromise = undefined;
    bytesQueued = 0;
    bytesFlushed = 0;
    notifyFlushProgress = undefined;
    notifyExternallyClocked = undefined;
    externallyClockedPromise = undefined;
    externallyClocked = false;
    errored = false;
    flushConfirmedPromise = undefined;
    flushCloseListener = undefined;
    markEverWritten() {
        this.everWritten = true;
    }
    recordQueued(e) {
        this.bytesQueued += e;
    }
    recordFlushed(e) {
        this.bytesFlushed += e;
        this.notifyFlushProgress?.();
    }
    markErrored() {
        this.errored = true;
        this.notifyFlushProgress?.();
    }
    outstandingBytes() {
        if (process.stdout.destroyed || this.errored) {
            return 0;
        }
        return this.bytesQueued - this.bytesFlushed;
    }
    endStdoutOnce() {
        if (this.drainPromise === undefined) {
            let e = process.stdout;
            if (e.isTTY || e.destroyed || e.writableEnded || !this.everWritten) {
                return;
            }
            this.drainPromise = new Promise((resolve)=>e.end(resolve));
        }
        return this.drainPromise;
    }
    fullyFlushed() {
        if (this.flushConfirmedPromise === undefined) {
            this.flushConfirmedPromise = new Promise((resolve)=>{
                let t = ()=>{
                    if (this.outstandingBytes() <= 0) {
                        this.notifyFlushProgress = undefined;
                        resolve();
                    }
                };
                this.notifyFlushProgress = t;
                this.flushCloseListener = t;
                process.stdout.once("close", t);
                t();
            });
        }
        return this.flushConfirmedPromise;
    }
    isExternallyClocked() {
        return this.externallyClocked;
    }
    ensureExternallyClockedPromise() {
        return this.externallyClockedPromise ??= new Promise((resolve)=>{
            this.notifyExternallyClocked = resolve;
        });
    }
    markExternallyClocked() {
        this.externallyClocked = true;
        this.ensureExternallyClockedPromise();
        this.notifyExternallyClocked?.();
        this.notifyExternallyClocked = undefined;
    }
    reset() {
        if (this.flushCloseListener !== undefined) {
            process.stdout.removeListener("close", this.flushCloseListener);
        }
        Object.assign(this, new a);
    }
}
var o = new a;
function Ar(e) {
    o.markEverWritten();
    let t = Buffer.byteLength(e);
    if (v(process.stdout, e, ()=>{
        o.recordFlushed(t);
    })) {
        o.recordQueued(t);
    }
}
async function LDt(e = 2000, { scaleBudgetToQueue = true } = {}) {
    let n = o.endStdoutOnce();
    if (n === undefined) {
        return;
    }
    let r = Promise.all([
        n,
        o.fullyFlushed()
    ]);
    await Ut(scaleBudgetToQueue ? Promise.race([
        r,
        k(e)
    ]) : r, scaleBudgetToQueue ? rxr(e) : e, "stdout drain timeout (exit)").catch(()=>{});
}
function NZ() {
    o.markExternallyClocked();
}
function rRo() {
    return o.isExternallyClocked();
}
function k(e) {
    return o.ensureExternallyClockedPromise().then(()=>Q(e));
}
const _ = 262144;
const w = 30000;
function nxr() {
    return o.outstandingBytes();
}
function rxr(e = 2000) {
    return Math.min(w, Math.max(e, Math.ceil(nxr() * 1000 / _)));
}
function tj(e) {
    v(process.stderr, e);
}
function P8e(e) {
    console.error(e);
    Yy("exit_with_error");
    process.exit(1);
}
function Lon(e, t) {
    let n = e;
    if (n.readableEnded || n.destroyed) {
        return Promise.resolve(false);
    }
    return new Promise((resolve)=>{
        let i = (u)=>{
            clearTimeout(l);
            e.off("end", s);
            e.off("close", s);
            e.off("data", d);
            resolve(u);
        };
        let s = ()=>i(false);
        let d = ()=>{
            clearTimeout(l);
            if (n.readableEnded || n.destroyed) {
                i(false);
            }
        };
        let l = setTimeout(i, t, true);
        e.once("end", s);
        e.once("close", s);
        e.once("data", d);
    });
}
async function* Non(e) {
    if (e.readableEnded || e.destroyed) {
        return;
    }
    let t = Symbol("stream-closed");
    let n = false;
    let r = null;
    let i = ()=>{
        n = true;
        r?.();
    };
    e.once("close", i);
    let s = e[Symbol.asyncIterator]();
    try {
        while(!n){
            let d = s.next();
            d.catch(()=>{});
            let l = new Promise((resolve)=>{
                r = ()=>resolve(t);
            });
            let u = await Promise.race([
                d,
                l
            ]);
            r = null;
            if (u === t || u.done) {
                return;
            }
            yield String(u.value);
        }
    } finally{
        e.off("close", i);
        s.return?.().catch(()=>{});
    }
}
export { Don, Yy, tVs, eRo, tRo, DDt, Npe, nRo, Ar, LDt, NZ, rRo, nxr, rxr, tj, P8e, Lon, Non };
