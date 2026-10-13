import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { x, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { u4 } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { k0, Kz } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { X_, p0, Fl } from "/$bunfs/root/chunk-t0b6khh6.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { lstat, readFile, rename, rm, unlink } from "fs/promises";
import { uptime } from "os";
import { join } from "path";
async function _Bt(e, r = {}) {
    try {
        process.kill(e, "SIGTERM");
    } catch (error) {
        if (v(error) === "EPERM") {
            return "eperm";
        }
        return "exited";
    }
    let o = Date.now() + (r.gracefulMs ?? 2000);
    while(Date.now() < o){
        try {
            process.kill(e, 0);
        } catch  {
            return "exited";
        }
        await Q(50);
    }
    return "timed-out";
}
const b = "daemon.lock";
function ZO() {
    return join(ve(), b);
}
function cWe() {
    return $e.state("daemon-lock");
}
function L(e) {
    return e === "EISDIR" || e === "ENXIO";
}
class k {
    logged = false;
    markLogged() {
        if (this.logged) {
            return false;
        }
        this.logged = true;
        return true;
    }
}
const h = new q(()=>new k);
function D() {
    return h.of(B().host);
}
async function E() {
    let e = await lstat(ZO()).catch(()=>{});
    return e !== undefined && e.isSymbolicLink();
}
async function y(e) {
    let r = ZO();
    let o = await lstat(r).catch(()=>{});
    if (o === undefined || o.isFile()) {
        return;
    }
    let n = o.isDirectory() ? "directory" : o.isFIFO() ? "fifo" : o.isSocket() ? "socket" : o.isSymbolicLink() ? "symlink" : "other non-regular node";
    if (D().markLogged()) {
        t(`[DaemonLock] ${n} at the lock path (${e}) \u2014 removing it as the legacy path does`, {
            level: "warn"
        });
    }
    await rm(r, {
        recursive: true,
        force: true
    }).catch(()=>{});
}
const S = 65536;
async function Djo(e, r) {
    if (j() && r !== undefined) {
        let o = ()=>r.write(cWe(), _(e, null, 2), {
                precondition: {
                    type: "ifAbsent"
                },
                mode: 438 & ~process.umask()
            });
        let n = await o();
        for (let i of [
            0,
            1
        ]){
            if (n.ok) {
                return true;
            }
            if (n.error.code === "AlreadyExists") {
                return false;
            }
            let a = "telemetryCode" in n.error ? n.error.telemetryCode : undefined;
            if (n.error.code !== "Failed" || !u4(a)) {
                break;
            }
            if (a === "ELOOP") {
                if (await E()) {
                    return false;
                }
                break;
            }
            if (i === 1) {
                break;
            }
            await y(a);
            n = await o();
        }
        if (n.ok) {
            return true;
        }
        throw new x(`[DaemonLock] Failed to acquire daemon lock: ${n.error.code}${"telemetryCode" in n.error && n.error.telemetryCode ? ` (${n.error.telemetryCode})` : ""}`, "[DaemonLock] v5 acquire write failed");
    }
    try {
        await Kz(ZO(), _(e, null, 2));
        return true;
    } catch (error) {
        if (v(error) === "EEXIST") {
            return false;
        }
        throw error;
    }
}
async function Ljo(e, r) {
    let o = await aK(r);
    if (!o || o.pid !== e.pid || o.startedAt !== e.startedAt) {
        return;
    }
    await b8n({
        ...o,
        bgDisabled: true
    }, r);
}
async function aK(e) {
    let r;
    if (e) {
        let n = await e.read([
            cWe()
        ]);
        if (!n.ok) {
            if (!(n.error.code === "Failed" && (n.error.telemetryCode === "ENXIO" || n.error.telemetryCode === "EFBIG" || n.error.telemetryCode === "ELOOP" || n.error.telemetryCode === "ENAMETOOLONG"))) {
                throw new x(`[DaemonLock] Failed to read daemon lock: ${n.error.code}${"telemetryCode" in n.error && n.error.telemetryCode ? ` (${n.error.telemetryCode})` : ""}`, "[DaemonLock] v5 lock read failed");
            }
            let c = await e.delete(cWe());
            if (!c.ok && c.error.code === "Failed") {
                let u = "telemetryCode" in c.error ? c.error.telemetryCode : undefined;
                if (L(u)) {
                    await y(u);
                }
            }
            return null;
        }
        let i = n.value.items[0];
        if (!i.found) {
            return null;
        }
        if (i.totalBytes > S) {
            await e.delete(cWe());
            return null;
        }
        r = Buffer.from(i.value).toString("utf8");
        let a = mt(r, false);
        if (a && typeof a === "object") {
            let s = a;
            if (typeof s.pid === "number" && typeof s.version === "string") {
                return a;
            }
        }
        return null;
    }
    try {
        let n = await lstat(ZO());
        if (!n.isFile() || n.size > 65536) {
            await rm(ZO(), {
                recursive: true,
                force: true
            }).catch(()=>{});
            return null;
        }
        r = await readFile(ZO(), "utf8");
    } catch (error) {
        if (z(error)) {
            return null;
        }
        throw error;
    }
    let o = mt(r, false);
    if (o && typeof o === "object") {
        let n = o;
        if (typeof n.pid === "number" && typeof n.version === "string") {
            return o;
        }
    }
    return null;
}
async function b8n(e, r) {
    if (r) {
        let i = await r.write(cWe(), _(e, null, 2), {
            mode: 438 & ~process.umask()
        });
        if (!i.ok) {
            let s = "telemetryCode" in i.error ? i.error.telemetryCode : undefined;
            if (s === "LockContended" || s === "LockSuspect") {
                let c = await aK(r);
                if (c?.pid !== e.pid || c?.startedAt !== e.startedAt) {
                    return false;
                }
                i = await r.write(cWe(), _(e, null, 2), {
                    mode: 438 & ~process.umask()
                });
            }
            if (!i.ok) {
                throw new x(`[DaemonLock] Failed to replace daemon lock: ${i.error.code}${"telemetryCode" in i.error && i.error.telemetryCode ? ` (${i.error.telemetryCode})` : ""}`, "[DaemonLock] v5 replace write failed");
            }
        }
        let a = await aK(r);
        return a?.pid === e.pid && a?.startedAt === e.startedAt;
    }
    let o = await k0(ZO(), _(e, null, 2));
    try {
        await rename(o, ZO());
    } catch (error) {
        let a = v(error);
        if (a === "EEXIST" || a === "EPERM") {
            await unlink(ZO()).catch(()=>{});
            try {
                await rename(o, ZO());
            } catch (err) {
                await unlink(o).catch(()=>{});
                let c = v(err);
                if (c === "EEXIST" || c === "EPERM") {
                    return false;
                }
                throw err;
            }
        } else {
            await unlink(o).catch(()=>{});
            throw error;
        }
    }
    let n = await aK(r);
    return n?.pid === e.pid && n?.startedAt === e.startedAt;
}
async function Njo(e) {
    if (e) {
        let r = await e.delete(cWe());
        if (!r.ok) {
            throw new x(`[DaemonLock] Failed to remove daemon lock: ${r.error.code}${"telemetryCode" in r.error && r.error.telemetryCode ? ` (${r.error.telemetryCode})` : ""}`, "[DaemonLock] v5 lock delete failed");
        }
        return;
    }
    try {
        await unlink(ZO());
    } catch (error) {
        if (!z(error)) {
            throw error;
        }
    }
}
async function Xfn(e) {
    let r;
    try {
        r = await readFile(`/proc/${e}/cmdline`, "utf8");
    } catch  {
        return true;
    }
    let o = r.split("\x00");
    return o[0] === "claude daemon" || o.slice(1, 4).includes("daemon");
}
const nQe = 2;
const S8n = 250;
async function bBt(e, r, o) {
    if (r === undefined) {
        return true;
    }
    for(let n = 0; n < o; n++){
        if (n > 0) {
            await Q(S8n);
        }
        let i = await Fl(e, {
            skipCache: n > 0
        });
        if (i !== undefined) {
            return i === r;
        }
    }
    return false;
}
const I = 120000;
function C(e, r = Date.now(), o = uptime()) {
    return e.startedAt < r - o * 1000 - I;
}
async function Jfn(e) {
    let r = p0(e);
    if (r !== undefined) {
        let o = await X_(e.pid, r);
        if (o === true) {
            return null;
        }
        if (o === false) {
            return "pid_recycled";
        }
    }
    if (C(e)) {
        return "predates_boot";
    }
    return null;
}
function Sht(e) {
    return p0(e) !== undefined;
}
function $jo() {
    return `Stop it with \`claude daemon stop --any\` (a graceful, socket-based stop); if nothing is running at that pid, delete ${ZO()}`;
}
async function lw(e = 1, r) {
    let o = await aK(r);
    if (!o) {
        return null;
    }
    try {
        process.kill(o.pid, 0);
    } catch  {
        return null;
    }
    if (!await Xfn(o.pid)) {
        return null;
    }
    if (!await bBt(o.pid, p0(o), e)) {
        return null;
    }
    return o;
}
async function SBt(e) {
    let lock = await lw(1, e).catch(()=>null);
    if (!lock) {
        return {
            kind: "none"
        };
    }
    switch(lock.origin){
        case "service":
            return {
                kind: "service",
                lock
            };
        case "foreground":
            return {
                kind: "foreground",
                lock
            };
        case "transient":
        case undefined:
            {
                if (!Sht(lock)) {
                    return {
                        kind: "not-stopped",
                        pid: lock.pid,
                        outcome: "unverified"
                    };
                }
                let outcome = await _Bt(lock.pid);
                if (outcome === "exited") {
                    return {
                        kind: "stopped",
                        pid: lock.pid
                    };
                }
                return {
                    kind: "not-stopped",
                    pid: lock.pid,
                    outcome
                };
            }
        default:
            lock.origin;
            return {
                kind: "unknown-origin",
                lock
            };
    }
}
function aOe(e) {
    switch(e.outcome){
        case "eperm":
            return `the daemon holding the lock (pid ${e.pid}) is owned by another user and cannot be signalled from this session`;
        case "unverified":
            return `pid ${e.pid} is holding the daemon lock but could not be verified as the daemon, so it was not signalled`;
        case "timed-out":
            return `the daemon holding the lock (pid ${e.pid}) was asked to stop but has not exited yet`;
    }
}
function Qfn(e) {
    return `a background daemon with an unrecognized origin (pid ${e}) holds the daemon lock \u2014 it may have been started by a newer Claude Code, so it was left untouched`;
}
async function Fjo(e, r) {
    let o = await lw(1, r).catch(()=>null);
    return !!o && o.version !== e;
}
export { _Bt, ZO, cWe, Djo, Ljo, aK, b8n, Njo, Xfn, nQe, S8n, bBt, Jfn, Sht, $jo, lw, SBt, aOe, Qfn, Fjo };
