import { v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { po } from "/$bunfs/root/chunk-xgw72tt1.js";
import { _, X, ie } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { xFe } from "/$bunfs/root/chunk-74djrymf.js";
import { En, xH } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { readFile, chmod, lstat, mkdir, readdir, rm, utimes } from "fs/promises";
import { createHash, randomBytes } from "crypto";
import { lstatSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { connect } from "net";
import { basename, dirname, join, resolve } from "path";
const m = 65534;
const M = new Set([
    "/",
    "/dev",
    "/dev/shm",
    "/run",
    "/run/user",
    "/tmp",
    "/var",
    "/var/tmp",
    "/var/run",
    "/home",
    "/var/home",
    "/root",
    "/var/roothome",
    "/mnt",
    "/mnt/wslg"
]);
function Pds() {
    return M;
}
async function N() {
    try {
        return P(await readFile("/proc/self/uid_map", "utf8"));
    } catch  {
        return;
    }
}
function P(e) {
    let t = [];
    for (let n of e.split(`
`)){
        if (n.trim() === "") {
            continue;
        }
        let r = n.trim().split(/\s+/);
        let innerStart = Number(r[0]);
        let hostStart = Number(r[1]);
        let count = Number(r[2]);
        if (r.length !== 3 || !Number.isSafeInteger(innerStart) || innerStart < 0 || !Number.isSafeInteger(hostStart) || hostStart < 0 || !Number.isSafeInteger(count) || count <= 0) {
            return;
        }
        t.push({
            innerStart,
            hostStart,
            count
        });
    }
    return t;
}
function h(e) {
    return e.length === 1 && e[0].innerStart === 0 && e[0].count >= 4294967295;
}
async function S() {
    try {
        return D(await readFile("/proc/sys/kernel/overflowuid", "utf8"));
    } catch  {
        return;
    }
}
function D(e) {
    let t = e.trim();
    if (!/^\d+$/.test(t)) {
        return;
    }
    let n = Number(t);
    if (Number.isSafeInteger(n)) {
        return n;
    }
}
function A(e, t) {
    if (e.length === 0 || t === undefined) {
        return;
    }
    if (e.some((r)=>t >= r.innerStart && t < r.innerStart + r.count)) {
        return undefined;
    }
    return t;
}
async function Ids() {
    let e = process.getuid?.();
    let t = await N();
    if (t === undefined) {
        let n = await S() ?? m;
        if (e === n) {
            return {
                unmappedOwnerUid: undefined,
                uidCollapses: true,
                rootUidAmbiguous: n === 0
            };
        }
        return undefined;
    }
    if (h(t)) {
        return;
    }
    return B(t, e);
}
async function B(e, t) {
    let n = await S();
    let r = n ?? m;
    return {
        unmappedOwnerUid: A(e, n),
        uidCollapses: e.length === 0 || t !== undefined && t === r,
        rootUidAmbiguous: n === 0
    };
}
async function X5t() {
    let e = process.getuid?.();
    if (e === undefined) {
        return;
    }
    let t = await N();
    if (t === undefined) {
        return;
    }
    if (h(t)) {
        return e;
    }
    let n = await S() ?? m;
    if (t.length === 0 || e === n) {
        return;
    }
    if (((s)=>t.some((u)=>s >= u.innerStart && s < u.innerStart + u.count))(n)) {
        return e;
    }
    let o = t.find((s)=>e >= s.innerStart && e < s.innerStart + s.count);
    if (o === undefined) {
        return undefined;
    }
    return o.hostStart + (e - o.innerStart);
}
function Bfr() {
    xFe.uidsCollapse ??= L(ie());
    return xFe.uidsCollapse;
}
function L(e) {
    let t = process.getuid?.();
    let n;
    try {
        let s = e.readFileSync("/proc/self/uid_map", {
            encoding: "utf8"
        });
        n = P(s);
    } catch  {
        n = undefined;
    }
    let r;
    try {
        let u = e.readFileSync("/proc/sys/kernel/overflowuid", {
            encoding: "utf8"
        });
        r = D(u);
    } catch  {
        r = undefined;
    }
    let o = r ?? m;
    if (n === undefined) {
        return t === o;
    }
    if (h(n)) {
        return false;
    }
    return n.length === 0 || t !== undefined && t === o;
}
function c() {
    return join(ve(), "daemon");
}
function Z() {
    return createHash("sha256").update(resolve(ve())).digest("hex").slice(0, 8);
}
function NAe() {
    let e = process.getuid?.() ?? 0;
    let t = a.TERMUX_VERSION && a.PREFIX ? join(a.PREFIX, "tmp") : "/tmp";
    return join(t, `cc-daemon-${e}`, Z());
}
const ee = /^[a-f0-9]{16}$/;
function Fso() {
    return join(c(), "pipe.key");
}
const te = po(()=>{
    let e = Fso();
    for(let t = 0; t < 8; t++){
        let n;
        try {
            let o = lstatSync(e);
            if (!o.isFile() || o.size > 4096) {
                try {
                    rmSync(e, {
                        recursive: true,
                        force: true
                    });
                } catch  {}
                n = "invalid";
            } else {
                n = readFileSync(e, "utf8").trim();
            }
        } catch (error) {
            if (!z(error)) {
                throw error;
            }
        }
        if (n !== undefined) {
            if (ee.test(n)) {
                return n;
            }
            if (n === "" && t < 3) {
                continue;
            }
            let o = randomBytes(8).toString("hex");
            xH(e, o, 384);
            return o;
        }
        let r = randomBytes(8).toString("hex");
        mkdirSync(c(), {
            recursive: true,
            mode: 448
        });
        try {
            writeFileSync(e, r, {
                flag: "wx",
                mode: 384
            });
            return r;
        } catch (error) {
            if (v(error) !== "EEXIST") {
                throw error;
            }
        }
    }
    throw Error("daemon pipe.key is not a valid nonce");
}, ()=>ve());
function b(e) {
    return `\\\\.\\pipe\\cc-daemon-${te()}-${e}`;
}
function EE(e) {
    return e.replace(/cc-daemon-[0-9a-f]{16}/g, "cc-daemon-*");
}
function FAt(e) {
    if (e instanceof Error) {
        e.message = EE(e.message);
        if (typeof e.stack === "string") {
            e.stack = EE(e.stack);
        }
    }
    return e;
}
function KMn() {
    return join(c(), "control.key");
}
async function Ods() {
    let e = KMn();
    try {
        let n = await lstat(e);
        if (n.isFile() && n.size <= 4096) {
            let r = (await readFile(e, "utf8")).trim();
            if (r) {
                return r;
            }
        } else {
            await rm(e, {
                recursive: true,
                force: true
            }).catch(()=>{});
        }
    } catch (error) {
        if (!z(error)) {
            throw error;
        }
    }
    let t = randomBytes(16).toString("hex");
    await mkdir(c(), {
        recursive: true,
        mode: 448
    });
    await En(e, t, 384);
    return t;
}
async function $Ae() {
    try {
        let e = await lstat(KMn());
        if (!e.isFile() || e.size > 4096) {
            return;
        }
        return (await readFile(KMn(), "utf8")).trim() || undefined;
    } catch  {
        return;
    }
}
async function Mds() {
    let e = c();
    if (O() === "windows") {
        await mkdir(e, {
            recursive: true
        });
        await chmod(e, 448).catch(()=>{});
        return;
    }
    await mkdir(e, {
        recursive: true,
        mode: 448
    });
    U();
    let t = process.getuid?.();
    let n = await lstat(e);
    if (t !== undefined && n.uid !== t) {
        throw Error(`refusing to use daemon dir: ${e} is owned by uid ${n.uid}`);
    }
    if ((n.mode & 511) !== 448) {
        await chmod(e, 448);
    }
}
async function J5t() {
    if (O() === "windows") {
        return;
    }
    let e = NAe();
    await mkdir(e, {
        recursive: true,
        mode: 448
    });
    let t = new Date;
    await utimes(e, t, t).catch(()=>{});
    await T([
        dirname(e),
        e
    ]);
}
const jfr = "ENOTOWNED";
async function T(e) {
    let t = process.getuid?.();
    U();
    for (let n of e){
        let r = await lstat(n);
        if (t !== undefined && r.uid !== t) {
            throw Object.assign(Error(`refusing to bind: ${n} is owned by uid ${r.uid}`), {
                code: jfr
            });
        }
        if ((r.mode & 511) !== 448) {
            await chmod(n, 448);
        }
    }
}
const Uso = "refusing to use the daemon socket: this process runs in a user namespace without a uid mapping, so directory and peer ownership cannot be verified (start it with a mapping, e.g. unshare -Ur)";
function U() {
    if (Bfr()) {
        throw Object.assign(Error(Uso), {
            code: jfr
        });
    }
}
async function Hds(e) {
    if (O() === "windows") {
        await mkdir(e, {
            recursive: true
        }).catch(()=>{});
        return;
    }
    await J5t();
    let t = [
        jot(),
        Wfr()
    ];
    for (let n of t){
        await mkdir(n, {
            recursive: true,
            mode: 448
        });
    }
    if (!t.includes(e)) {
        if (await mkdir(e, {
            recursive: true,
            mode: 448
        }).then(()=>true, ()=>false)) {
            t.push(e);
        }
    }
    await T(t);
}
function Dds() {
    if (O() === "windows") {
        return;
    }
    let e = NAe();
    let t = dirname(e);
    let n = basename(e);
    readdir(t, {
        withFileTypes: true
    }).then(async (r)=>{
        for (let o of r){
            if (!o.isDirectory() || o.name === n) {
                continue;
            }
            let s = join(t, o.name);
            if (!await ne(join(s, "control.sock"))) {
                continue;
            }
            let u = await lstat(s).catch(()=>null);
            if (!u || Date.now() - u.mtimeMs < 10000) {
                continue;
            }
            let p = await readdir(join(s, "rv")).catch(()=>[]);
            let g = await readdir(join(s, "pty")).catch(()=>[]);
            let w = await readdir(join(s, "spare")).catch(()=>[]);
            if (p.length || g.length || w.length) {
                continue;
            }
            await rm(s, {
                recursive: true,
                force: true
            }).catch(()=>{});
        }
    }).catch(()=>{});
}
function Bso(e) {
    return e === "ENOENT" || e === "ECONNREFUSED" || e === "ENOTSOCK";
}
function ne(e) {
    let t;
    let n = new Promise((resolvePromise)=>{
        t = resolvePromise;
    });
    let r = connect(e);
    r.setTimeout(1000, ()=>{
        r.destroy();
        t(false);
    });
    r.on("error", (o)=>{
        t(Bso(v(o)));
    });
    r.once("connect", ()=>{
        r.end(`{"op":"ping"}
`);
        t(false);
    });
    return n;
}
function Ace() {
    return join(c(), "dispatch");
}
function jso() {
    return join(c(), "dispatch", "rejected");
}
function X2() {
    return join(c(), "roster.json");
}
const YMn = "attach-journal";
function Cce() {
    return join(c(), YMn);
}
function Wfr() {
    return join(NAe(), "rv");
}
function Fot() {
    return join(c(), "auth");
}
function Uot(e) {
    return join(Fot(), `${e}.json`);
}
function Q5t() {
    return join(c(), "host-managed");
}
function s_e(e) {
    return join(Q5t(), e);
}
function Bot(e) {
    return join(Fot(), `${e}.tokens.json`);
}
function Z5t(e) {
    if (O() === "windows") {
        return b(`rv-${e}`);
    }
    return join(Wfr(), `${e}.sock`);
}
function jot() {
    return join(NAe(), "pty");
}
function kE(e) {
    if (O() === "windows") {
        return b(`pty-${e}`);
    }
    return join(jot(), `${e}.sock`);
}
function cre() {
    return join(NAe(), "spare");
}
function Lds(e) {
    return join(cre(), `${e}.pty.sock`);
}
function Nds(e) {
    return join(cre(), `${e}.claim.sock`);
}
function kKe() {
    return join(c(), "pty-pids");
}
function Rce(e) {
    return join(kKe(), `${e}.pid`);
}
function kk(e) {
    return C(e, "err");
}
function PM(e) {
    return C(e, "late");
}
function C(e, t) {
    if (O() === "windows") {
        return join(kKe(), `${e.split("\\").pop()}.${t}`);
    }
    return `${e}.${t}`;
}
function m5(e) {
    if (O() === "windows") {
        return join(kKe(), `${e.split("\\").pop()}.exec-exit`);
    }
    return `${e}.exec-exit`;
}
function J2() {
    if (O() === "windows") {
        return b("control");
    }
    U();
    return join(NAe(), "control.sock");
}
const Wot = 0;
const XMn = 1;
const e8t = 262144;
const f = 5;
const t8t = 1048576;
const FAe = 10000;
function n8t(e) {
    let t = typeof e === "string" ? Buffer.from(e, "utf8") : e;
    let n = Buffer.allocUnsafe(f + t.length);
    n.writeUInt32BE(t.length, 0);
    n.writeUInt8(Wot, 4);
    t.copy(n, f);
    return n;
}
function OL(e) {
    let t = Buffer.from(_(e), "utf8");
    let n = Buffer.allocUnsafe(f + t.length);
    n.writeUInt32BE(t.length, 0);
    n.writeUInt8(XMn, 4);
    t.copy(n, f);
    return n;
}
function JMn(e, t) {
    let n = Buffer.alloc(0);
    let r = false;
    return (o)=>{
        if (r) {
            return;
        }
        n = n.length === 0 ? o : Buffer.concat([
            n,
            o
        ]);
        while(n.length >= f){
            let s = n.readUInt32BE(0);
            if (s > t8t) {
                r = true;
                t(`frame too large (${s} > ${t8t})`);
                return;
            }
            let u = f + s;
            if (n.length < u) {
                return;
            }
            let p = n.readUInt8(4);
            let g = n.subarray(f, u);
            n = n.subarray(u);
            if (p === Wot) {
                e({
                    kind: Wot,
                    payload: Buffer.from(g)
                });
            } else if (p === XMn) {
                let ctrl;
                try {
                    ctrl = X(g.toString("utf8"));
                } catch  {
                    r = true;
                    t("bad ctrl json");
                    return;
                }
                e({
                    kind: XMn,
                    ctrl
                });
            } else {
                r = true;
                t(`unknown frame kind ${p}`);
                return;
            }
        }
    };
}
export { Pds, Ids, X5t, Bfr, NAe, Fso, EE, FAt, KMn, Ods, $Ae, Mds, J5t, jfr, Uso, Hds, Dds, Bso, Ace, jso, X2, YMn, Cce, Wfr, Fot, Uot, Q5t, s_e, Bot, Z5t, jot, kE, cre, Lds, Nds, kKe, Rce, kk, PM, m5, J2, Wot, XMn, e8t, t8t, FAe, n8t, OL, JMn };
