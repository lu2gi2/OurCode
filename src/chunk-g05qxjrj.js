import { readFile, readlink } from "fs/promises";
import { hostname } from "os";
const sdt = 262144;
function oCs(n) {
    let e = n.replace(/\.json$/, "");
    let pid = parseInt(e, 10);
    if (isNaN(pid)) {
        return null;
    }
    return {
        pid,
        canonical: String(pid) === e
    };
}
const u = [
    "interactive",
    "bg",
    "daemon",
    "daemon-worker"
];
function d(kind) {
    if (u.includes(kind)) {
        return kind;
    }
}
const a = [
    "busy",
    "shell",
    "idle",
    "waiting"
];
function p(status) {
    if (a.includes(status)) {
        return status;
    }
}
const c = 4000000000000000;
function mMt(n) {
    return typeof n === "number" && Number.isFinite(n) && n >= 0 && n <= c;
}
function Qen(n) {
    if (mMt(n)) {
        return n;
    }
}
function sCs(n) {
    let e = typeof n === "object" && n !== null ? n : {};
    return {
        cwd: typeof e.cwd === "string" ? e.cwd : "?",
        startedAt: Qen(e.startedAt) ?? 0,
        procStart: typeof e.procStart === "string" ? e.procStart : undefined,
        ...typeof e.procStartFt === "string" && {
            procStartFt: e.procStartFt
        },
        kind: d(e.kind),
        sessionId: typeof e.sessionId === "string" ? e.sessionId : undefined,
        status: p(e.status),
        entrypoint: typeof e.entrypoint === "string" ? e.entrypoint : undefined,
        ...typeof e.pidDomain === "string" && {
            pidDomain: e.pidDomain
        }
    };
}
function _a(n) {
    if (n <= 1) {
        return false;
    }
    try {
        process.kill(n, 0);
        return true;
    } catch  {
        return false;
    }
}
async function iCs(n) {
    if (n === "windows") {
        return `linux:${hostname().toLowerCase()}`;
    }
    if (n !== "linux" && n !== "wsl") {
        return "linux";
    }
    let [e, t] = await Promise.all([
        readFile("/etc/machine-id", "utf8").then((o)=>o.trim(), ()=>""),
        readlink("/proc/self/ns/pid").catch(()=>"")
    ]);
    return `linux:${e}:${t}`;
}
export { sdt, oCs, mMt, Qen, sCs, _a, iCs };
