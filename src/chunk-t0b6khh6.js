import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { xpe } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { hGn, ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { JF, Cpe, d9 } from "/$bunfs/root/chunk-ev7h5vhm.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { Le } from "/$bunfs/root/chunk-cj4xndke.js";
function _l(e, n) {
    if (n in e) {
        return e[n];
    }
    if (O() !== "windows") {
        return;
    }
    let r = Object.keys(e).find((i)=>i.toUpperCase() === n.toUpperCase());
    if (r === undefined) {
        return undefined;
    }
    return e[r];
}
const d = 4096;
let c;
function Ukr() {
    if (c !== undefined) {
        return c;
    }
    if (O() !== "windows") {
        c = null;
        return c;
    }
    try {
        let e = Le("bun:ffi");
        c = e.dlopen("kernel32.dll", {
            OpenProcess: {
                args: [
                    "u32",
                    "i32",
                    "u32"
                ],
                returns: "ptr"
            },
            GetProcessTimes: {
                args: [
                    "ptr",
                    "ptr",
                    "ptr",
                    "ptr",
                    "ptr"
                ],
                returns: "i32"
            },
            CreateToolhelp32Snapshot: {
                args: [
                    "u32",
                    "u32"
                ],
                returns: "ptr"
            },
            Process32FirstW: {
                args: [
                    "ptr",
                    "ptr"
                ],
                returns: "i32"
            },
            Process32NextW: {
                args: [
                    "ptr",
                    "ptr"
                ],
                returns: "i32"
            },
            CloseHandle: {
                args: [
                    "ptr"
                ],
                returns: "i32"
            }
        }).symbols;
        t("[win32-kernel32] bun:ffi loaded");
    } catch (error) {
        t(`[win32-kernel32] bun:ffi unavailable, falling back to spawn: ${error instanceof Error ? error.message : String(error)}`);
        c = null;
    }
    return c;
}
class m {
    #e = false;
    get forcedUnavailable() {
        return this.#e;
    }
    forceUnavailable(e) {
        this.#e = e;
    }
}
const k = new m;
function f() {
    return false;
}
function HSo(e) {
    if (!Number.isInteger(e) || e <= 0) {
        return;
    }
    let n = Ukr();
    if (n == null) {
        return;
    }
    let r = n.OpenProcess(d, 0, e);
    if (!r) {
        return;
    }
    try {
        let i = new Uint8Array(8);
        let s = new Uint8Array(8);
        let o = new Uint8Array(8);
        let u = new Uint8Array(8);
        if (n.GetProcessTimes(r, i, s, o, u) === 0) {
            return;
        }
        return new DataView(i.buffer).getBigUint64(0, true);
    } catch  {
        return;
    } finally{
        n.CloseHandle(r);
    }
}
async function Bkr(e) {
    if (O() !== "linux" && O() !== "wsl") {
        return;
    }
    if (!kue(e)) {
        return;
    }
    try {
        let n = await ie().readFile(`/proc/${e}/stat`, {
            encoding: "utf8"
        });
        return Cpe(n);
    } catch  {
        return;
    }
}
async function S3e(e) {
    return d9(await Bkr(e));
}
const w = 2147483647;
function kue(e) {
    return Number.isInteger(e) && e > 1 && e <= w;
}
function Nm(e) {
    if (!kue(e)) {
        return false;
    }
    try {
        process.kill(e, 0);
        return false;
    } catch (error) {
        return v(error) === "ESRCH";
    }
}
const y = 16;
async function PFe() {
    let e = O();
    if (e !== "linux" && e !== "wsl") {
        return true;
    }
    let n = ie();
    let r = await n.readlink("/proc/self").catch(()=>null);
    if (r === null || r !== String(process.pid)) {
        return false;
    }
    let i = await n.readdir("/proc").catch(()=>null);
    if (!i) {
        return false;
    }
    return i.filter((o)=>/^\d+$/.test(o.name)).length >= y;
}
function kSe(e, n) {
    let r = e.filter((i)=>Math.abs(i) > 1);
    for (let i of r){
        try {
            process.kill(i, "SIGTERM");
        } catch  {
            continue;
        }
        setTimeout((s, o, u)=>{
            if (!kjn(o, u)) {
                return;
            }
            try {
                process.kill(s, "SIGKILL");
            } catch  {}
        }, 5000, i, Math.abs(r[0]), n).unref();
        return true;
    }
    return false;
}
async function Tue(e, n, r = "SIGTERM") {
    if (!e || e <= 1 || n === undefined) {
        return false;
    }
    if (await p(e, n) === "other") {
        return false;
    }
    try {
        process.kill(-e, r);
    } catch  {
        return false;
    }
    if (r !== "SIGKILL") {
        setTimeout((i, s)=>{
            p(i, s).then((o)=>{
                if (o === "other") {
                    return;
                }
                try {
                    process.kill(-i, "SIGKILL");
                } catch  {}
            });
        }, 5000, e, n).unref();
    }
    return true;
}
async function p(e, n) {
    let r = await OFe(e);
    if (r !== undefined) {
        if (ASe(n, r)) {
            return "same";
        }
        return "other";
    }
    try {
        process.kill(e, 0);
        return "other";
    } catch (error) {
        if (v(error) === "ESRCH") {
            return "gone";
        }
        return "other";
    }
}
function TSe(e) {
    try {
        let n = ie().readFileSync(`/proc/${e}/stat`, {
            encoding: "utf8"
        });
        let r = JF(n);
        if (r && r.length > 0) {
            return r;
        }
        return undefined;
    } catch  {
        return;
    }
}
function DSo(e, n = 12) {
    let r = [];
    let i = e;
    for(let s = 0; s < n; s++){
        let o = 0;
        try {
            let u = ie().readFileSync(`/proc/${i}/stat`, {
                encoding: "utf8"
            });
            let a = u.lastIndexOf(")");
            let l = u.slice(a + 2).split(" ");
            o = Number(l[1]);
        } catch  {
            break;
        }
        if (!Number.isInteger(o) || o < 1) {
            break;
        }
        r.push(o);
        if (o === 1) {
            break;
        }
        i = o;
    }
    return r;
}
async function LSo(e, n = 10) {
    return (await Ejn(e, n)).ancestors;
}
async function Ejn(e, n = 10) {
    let r = `pid=${String(e)}; for i in $(seq 1 ${n}); do ppid=$(ps -o ppid= -p $pid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ]; then echo FAIL; exit 0; fi; if [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then echo END; exit 0; fi; echo $ppid; pid=$ppid; done`;
    let i = await ct("sh", [
        "-c",
        r
    ], {
        timeout: 3000
    });
    let s = (i.stdout ?? "").trim().split(`
`).filter(Boolean);
    return {
        ancestors: s.filter((o)=>o !== "END" && o !== "FAIL").map((o)=>parseInt(o, 10)).filter((o)=>!isNaN(o)),
        readFailed: i.code !== 0 || s.at(-1) === "FAIL",
        truncated: i.code === 0 && s.at(-1) !== "END" && s.at(-1) !== "FAIL"
    };
}
function NSo(e) {
    try {
        let r = `ps -o command= -p ${String(e)}`;
        let i = hGn(r, {
            timeout: 1000
        });
        if (i) {
            return i.trim();
        }
        return null;
    } catch  {
        return null;
    }
}
function IFe(e) {
    try {
        {
            let r = ie().readFileSync(`/proc/${e}/stat`, {
                encoding: "utf8"
            });
            return JF(r);
        }
        let n = hGn(`LC_ALL=C TZ=UTC ps -o lstart= -p ${e}`, {
            timeout: 1000
        });
        if (n) {
            return n.trim();
        }
        return undefined;
    } catch  {
        return;
    }
}
function kjn(e, n) {
    if (n === undefined) {
        return true;
    }
    return g(n, IFe(e));
}
function ASe(e, n) {
    if (n === e) {
        return true;
    }
    return false;
}
function g(e, n) {
    return n === undefined || n === e || T(e, n);
}
function T(e, n) {
    if (!f()) {
        return false;
    }
    let r = Number(e);
    let i = Number(n);
    return Number.isFinite(r) && Number.isFinite(i) && r > 300000000000000000 !== i > 300000000000000000;
}
async function Hw(e, n) {
    if (n === undefined) {
        return true;
    }
    return g(n, await Fl(e));
}
async function X_(e, n) {
    let r = await Fl(e, {
        skipCache: true
    });
    if (r === undefined) {
        return undefined;
    }
    return ASe(n, r);
}
class h {
    #e = undefined;
    get token() {
        return this.#e;
    }
    set(e) {
        this.#e = e;
        return e;
    }
    reset() {
        this.#e = undefined;
    }
}
const Aue = new h;
class S {
    #e = new Map;
    get(e) {
        return this.#e.get(e);
    }
    set(e, n) {
        this.#e.set(e, n);
    }
}
const x = new q(()=>new S);
function nse() {
    return Aue.token ?? Aue.set(IFe(process.pid));
}
async function Ny() {
    return Aue.token ?? Aue.set(await Fl(process.pid));
}
function p0(e) {
    if (f()) {
        if (e.procStart !== undefined) {
            return undefined;
        }
        return e.procStartFt;
    }
    return e.procStart;
}
function B7(e) {
    if (f()) {
        return {
            procStart: undefined,
            procStartFt: e
        };
    }
    return {
        procStart: e,
        procStartFt: undefined
    };
}
const C = 60000;
const _ = 5000;
async function Fl(e, n) {
    let at = Date.now();
    let i = x.of(B().host);
    if (n?.env !== undefined) {
        return P(e, n.env);
    }
    if (!n?.skipCache) {
        let a = i.get(e);
        let l = a?.miss ? _ : C;
        if (a && at - a.at < l) {
            return a.p;
        }
    }
    let p_1 = P(e);
    let o = {
        at,
        p: p_1
    };
    i.set(e, o);
    let u = await p_1;
    if (u === undefined && i.get(e) === o) {
        o.miss = true;
    }
    return u;
}
const b = 250;
async function OFe(e) {
    let n = await Fl(e, {
        skipCache: true
    });
    if (n !== undefined) {
        return n;
    }
    await Q(b + Math.floor(Math.random() * b));
    return Fl(e, {
        skipCache: true
    });
}
async function P(e, env) {
    let r = env === undefined ? {} : {
        env,
        extendEnv: false
    };
    try {
        {
            let o = await ie().readFile(`/proc/${e}/stat`, {
                encoding: "utf8"
            });
            return JF(o);
        }
        let i = env === undefined ? "ps" : xpe("ps", _l(env, "PATH") ?? "");
        if (i === null) {
            return;
        }
        let s = await ct(i, [
            "-o",
            "lstart=",
            "-p",
            String(e)
        ], {
            timeout: 1000,
            ...r,
            env: {
                ...env ?? process.env,
                LC_ALL: "C",
                TZ: "UTC"
            }
        });
        if (s.code === 0 && s.stdout) {
            return s.stdout.trim();
        }
        return undefined;
    } catch  {
        return;
    }
}
async function w3e(e) {
    try {
        {
            let i = await ie().readFile(`/proc/${e}/stat`, {
                encoding: "utf8"
            });
            let s = Number(JF(i));
            let o = await ie().readFile("/proc/stat", {
                encoding: "utf8"
            });
            let u = Number(/^btime (\d+)/m.exec(o)?.[1]);
            if (!Number.isFinite(s) || !Number.isFinite(u)) {
                return null;
            }
            return u * 1000 + s / 100 * 1000;
        }
        let n = await ct("ps", [
            "-o",
            "lstart=",
            "-p",
            String(e)
        ], {
            timeout: 1000,
            env: {
                ...process.env,
                LC_ALL: "C",
                TZ: "UTC"
            }
        });
        if (n.code !== 0 || !n.stdout?.trim()) {
            return null;
        }
        let r = Date.parse(`${n.stdout.trim()} UTC`);
        if (Number.isFinite(r)) {
            return r;
        }
        return null;
    } catch  {
        return null;
    }
}
export { _l, Ukr, HSo, Bkr, S3e, kue, Nm, PFe, kSe, Tue, TSe, DSo, LSo, Ejn, NSo, IFe, kjn, ASe, Hw, X_, Aue, nse, Ny, p0, B7, Fl, OFe, w3e };
