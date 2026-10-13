import { xWn, PWn, Wtn, GRs, Hvo, VRs, NMt } from "/$bunfs/root/chunk-1692wahf.js";
import { execFile } from "child_process";
class i {
    promise = null;
    start() {
        if (this.promise) {
            return;
        }
        this.promise = AWn();
    }
    reset() {
        this.promise = null;
    }
}
const a = new i;
function c(e) {
    if (!e) {
        return {
            status: "ok",
            exitCode: 0,
            errno: null,
            signal: null
        };
    }
    let t = e;
    let signal = typeof t.signal === "string" && t.signal ? t.signal : null;
    if (typeof t.code === "string") {
        return {
            status: "spawn_error",
            exitCode: null,
            errno: t.code,
            signal: null
        };
    }
    if (t.killed === true) {
        return {
            status: "timeout",
            exitCode: null,
            errno: null,
            signal
        };
    }
    if (signal) {
        return {
            status: "killed",
            exitCode: null,
            errno: null,
            signal
        };
    }
    return {
        status: "exited",
        exitCode: typeof t.code === "number" ? t.code : null,
        errno: null,
        signal: null
    };
}
function R(e, t, maxBuffer) {
    let s = Date.now();
    return new Promise((resolve)=>{
        try {
            execFile(e, t, {
                encoding: "utf-8",
                timeout: GRs,
                windowsHide: true,
                ...maxBuffer !== undefined && {
                    maxBuffer
                }
            }, (u, r)=>{
                resolve({
                    stdout: r ?? "",
                    ...c(u),
                    durationMs: Date.now() - s
                });
            });
        } catch (error) {
            let r = error.code;
            resolve({
                stdout: "",
                status: "spawn_error",
                exitCode: null,
                errno: typeof r === "string" ? r : null,
                signal: null,
                durationMs: Date.now() - s
            });
        }
    });
}
function l(e) {
    return {
        status: e.status,
        exitCode: e.exitCode,
        errno: e.errno,
        signal: e.signal,
        durationMs: e.durationMs
    };
}
function m(e) {
    return e.status === "spawn_error" && e.errno === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER";
}
function AWn() {
    return (async ()=>{
        if (NMt()) {
            return f(VRs);
        }
        return {
            plistStdouts: null,
            hklmStdout: null,
            hkcuStdout: null,
            outcomes: {
                hklm: null,
                hkcu: null
            }
        };
    })();
}
async function f(e) {
    let t = (o)=>R(e, [
            "query",
            o,
            "/v",
            Wtn
        ], Hvo);
    let [n, s] = await Promise.all([
        t(xWn),
        t(PWn)
    ]);
    return {
        plistStdouts: null,
        hklmStdout: n.status === "ok" ? n.stdout : null,
        ...m(n) && {
            hklmUnreadReason: `the value exceeds ${Hvo / 1048576} MiB`
        },
        hkcuStdout: s.status === "ok" ? s.stdout : null,
        outcomes: {
            hklm: l(n),
            hkcu: l(s)
        }
    };
}
function Rvo() {
    a.start();
}
function xvo() {
    return a.promise;
}
export { AWn, Rvo, xvo };
