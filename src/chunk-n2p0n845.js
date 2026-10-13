import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { v, Vr, cA } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { ai } from "/$bunfs/root/chunk-zwxj12s4.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { Le } from "/$bunfs/root/chunk-cj4xndke.js";
import { closeSync, constants, fstatSync, openSync, writeSync } from "fs";
const F = 4194304;
const Q = 25;
const L = Buffer.from("\x1B[0m");
const s = new WeakMap;
const E = ze(new Set, (e)=>e.clear());
function D() {
    if (!process.stdout.isTTY) {
        return {
            reason: "not_a_tty"
        };
    }
    let e;
    switch(O()){
        case "linux":
        case "wsl":
            e = "/proc/self/fd/1";
            break;
        case "macos":
            {
                let r = I();
                if (r === undefined) {
                    return {
                        reason: "ttyname_unavailable"
                    };
                }
                e = r;
                break;
            }
        default:
            return {
                reason: "unsupported_platform"
            };
    }
    let fd;
    try {
        fd = openSync(e, constants.O_WRONLY | constants.O_NONBLOCK | constants.O_NOCTTY | ai);
    } catch (error) {
        return {
            reason: "open_failed",
            errno: v(error)
        };
    }
    let o = {
        reason: "not_same_tty"
    };
    try {
        let r = fstatSync(fd);
        let u = fstatSync(1);
        if (r.rdev === u.rdev && r.ino === u.ino) {
            return {
                fd
            };
        }
    } catch (error) {
        o = {
            reason: "fstat_failed",
            errno: v(error)
        };
    }
    try {
        closeSync(fd);
    } catch  {}
    return o;
}
function B(e, n, errno) {
    i("tengu_nonblocking_stdout", {
        result: d(e),
        reason: n === undefined ? undefined : d(n),
        errno
    });
    if (e === "installed") {
        g("terminal_nonblocking_stdout");
    } else if (n !== "not_a_tty" && n !== "unsupported_platform") {
        f("terminal_nonblocking_stdout", n ?? "write_failed", errno === undefined ? undefined : {
            errno
        });
    }
}
function I() {
    try {
        let e = Le("bun:ffi");
        let n = e.dlopen("/usr/lib/libSystem.B.dylib", {
            ttyname_r: {
                args: [
                    "i32",
                    "ptr",
                    "u64"
                ],
                returns: "i32"
            }
        });
        try {
            let o = new Uint8Array(256);
            if (n.symbols.ttyname_r(1, o, o.length) !== 0) {
                return;
            }
            return new TextDecoder().decode(o.subarray(0, o.indexOf(0)));
        } finally{
            n.close();
        }
    } catch  {
        return;
    }
}
function MGo(onEpisodeEnd, n = D) {
    let o = s.get(process.stdout);
    if (o?.installedWrite !== undefined) {
        o.onEpisodeEnd = onEpisodeEnd;
        return w(o);
    }
    let r = n();
    if (r.fd === undefined) {
        t(`nonBlockingStdout: not installed (${r.reason}${r.errno ? `, ${r.errno}` : ""})`);
        if (!E.has(r.reason)) {
            E.add(r.reason);
            B("skipped", r.reason, cA(r.errno));
        }
        return null;
    }
    let u = {
        fd: r.fd,
        originalWrite: process.stdout.write,
        installedWrite: undefined,
        queue: [],
        queuedBytes: 0,
        dropping: false,
        timer: undefined,
        retryMs: 0,
        episode: {
            startedMs: 0,
            peakQueuedBytes: 0,
            droppedBytes: 0
        },
        onEpisodeEnd,
        onExit: ()=>a(u)
    };
    let h = (l, p, M)=>{
        let b = typeof p === "string" ? p : undefined;
        let _ = typeof p === "function" ? p : M;
        if (u.installedWrite === undefined) {
            return u.originalWrite.call(process.stdout, l, b, _);
        }
        U(u, typeof l === "string" ? Buffer.from(l, b) : Buffer.from(l));
        _?.();
        return true;
    };
    u.installedWrite = h;
    process.stdout.write = h;
    s.set(process.stdout, u);
    process.on("exit", u.onExit);
    t("nonBlockingStdout: active");
    B("installed");
    return w(u);
}
function w(e) {
    return {
        flush: ()=>a(e),
        restore: ()=>k(e),
        isActive: ()=>e.installedWrite !== undefined,
        queuedBytes: ()=>e.queuedBytes
    };
}
function HGo({ envOverride, isAnt, remoteFlag }) {
    return envOverride ?? (isAnt || remoteFlag());
}
function whn() {
    return s.get(process.stdout)?.installedWrite !== undefined;
}
function vhn() {
    let e = s.get(process.stdout);
    if (e?.installedWrite !== undefined) {
        k(e);
    }
}
function Ehn() {
    let e = s.get(process.stdout);
    if (e?.installedWrite !== undefined) {
        a(e);
    }
}
function x(e, n) {
    try {
        return writeSync(e, n);
    } catch (error) {
        if (v(error) === "EAGAIN") {
            return 0;
        }
        throw error;
    }
}
function U(e, n) {
    if (n.length === 0) {
        return;
    }
    if (e.queue.length === 0) {
        let o;
        try {
            o = x(e.fd, n);
        } catch (error) {
            S(e, error);
            process.stdout.write(n);
            return;
        }
        if (o === n.length) {
            return;
        }
        e.episode = {
            startedMs: performance.now(),
            peakQueuedBytes: 0,
            droppedBytes: 0
        };
        m(e, n.subarray(o));
        W(e, o > 0);
        return;
    }
    if (e.dropping) {
        e.episode.droppedBytes += n.length;
        return;
    }
    if (e.queuedBytes + n.length > F) {
        e.episode.droppedBytes += e.queuedBytes + n.length;
        e.queue = [];
        e.queuedBytes = 0;
        e.dropping = true;
        t(`nonBlockingStdout: terminal stopped reading; dropped ${e.episode.droppedBytes} queued bytes, will repaint when it resumes`, {
            level: "warn"
        });
        m(e, L);
        return;
    }
    m(e, n);
}
function m(e, n) {
    e.queue.push(n);
    e.queuedBytes += n.length;
    if (e.queuedBytes > e.episode.peakQueuedBytes) {
        e.episode.peakQueuedBytes = e.queuedBytes;
    }
}
function W(e, n) {
    e.retryMs = n ? 0 : Math.min(Math.max(1, e.retryMs * 2), Q);
    e.timer = setTimeout(Y, e.retryMs, e);
    e.timer.unref();
}
function Y(e) {
    e.timer = undefined;
    let n = false;
    try {
        while(e.queue.length > 0){
            if (n && e.queue.length > 1) {
                e.queue = [
                    Buffer.concat(e.queue, e.queuedBytes)
                ];
            }
            let o = e.queue[0];
            let r = x(e.fd, o);
            if (r === 0) {
                W(e, n);
                return;
            }
            n = true;
            e.queuedBytes -= r;
            if (r < o.length) {
                e.queue[0] = o.subarray(r);
            } else {
                e.queue.shift();
            }
        }
    } catch (error) {
        S(e, error);
        return;
    }
    T(e, "drain");
}
function T(e, endedBy) {
    e.dropping = false;
    e.retryMs = 0;
    try {
        e.onEpisodeEnd({
            durationMs: Math.round(performance.now() - e.episode.startedMs),
            peakQueuedBytes: e.episode.peakQueuedBytes,
            droppedBytes: e.episode.droppedBytes,
            endedBy
        });
    } catch (error) {
        c(error);
    }
}
function a(e) {
    if (e.timer !== undefined) {
        clearTimeout(e.timer);
        e.timer = undefined;
    }
    if (e.queue.length === 0) {
        return;
    }
    let e_queue = e.queue;
    e.queue = [];
    e.queuedBytes = 0;
    try {
        for (let o of e_queue){
            e.originalWrite.call(process.stdout, o);
        }
    } catch (error) {
        S(e, error);
        return;
    }
    T(e, "flush");
}
function S(e, error) {
    t(`nonBlockingStdout: uninstalling (${error})`);
    e.queue = [];
    e.queuedBytes = 0;
    k(e);
    B("abandoned", undefined, Vr(error));
}
function k(e) {
    if (e.installedWrite === undefined) {
        return;
    }
    if (process.stdout.write === e.installedWrite) {
        process.stdout.write = e.originalWrite;
    }
    e.installedWrite = undefined;
    s.delete(process.stdout);
    process.off("exit", e.onExit);
    try {
        closeSync(e.fd);
    } catch  {}
    a(e);
}
export { MGo, HGo, whn, vhn, Ehn };
