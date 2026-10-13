import { fr, $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ef, Ud } from "/$bunfs/root/chunk-twpzaz8r.js";
import { un, ps } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { jot, kE, cre, kKe, Rce, kk, PM, m5, OL } from "/$bunfs/root/chunk-fff9dfxd.js";
import { Ba } from "/$bunfs/root/chunk-6g4165br.js";
import { xD, GJ, vqe } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { kSe, Tue, OFe } from "/$bunfs/root/chunk-t0b6khh6.js";
import { ty } from "/$bunfs/root/chunk-6dwnw6av.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { lstat, readdir, unlink } from "fs/promises";
import { connect } from "net";
import { basename, join } from "path";
async function i4n(n, e) {
    if (e.launch.mode !== "exec" || !n) {
        return null;
    }
    try {
        let r = await Ba(m5(n), 8192);
        if (r == null) {
            return null;
        }
        let t = JSON.parse(r);
        if (typeof t?.code !== "number") {
            return null;
        }
        let o = un(typeof t.tail === "string" ? t.tail : "").replace(/\r\n?/g, `
`).split(`
`).findLast((y)=>y.trim())?.trim() ?? "";
        let a = Ud(ps(o), Ef);
        if (t.code === 0) {
            return {
                state: "done",
                detail: a || "(no output)",
                code: 0
            };
        }
        let signal = typeof t.signal === "string" ? t.signal : undefined;
        if (signal === "SIGINT" || signal === "SIGQUIT") {
            return {
                state: "stopped",
                detail: "stopped",
                code: t.code
            };
        }
        let f = signal ? `${signal} (${t.code})` : `exit ${t.code}`;
        return {
            state: "crashed",
            detail: a ? `${f} \u2014 ${a}` : f,
            signal,
            code: t.code
        };
    } catch  {
        return null;
    }
}
async function RHr(n = {}, e) {
    return Zr("daemon_bg_reap_all", async ()=>{
        let r = await xD({
            silent: true
        }, e);
        let t = new Map;
        for (let [s, i] of Object.entries(r.workers)){
            t.set(s, {
                pid: i.pid,
                procStart: i.procStart,
                ptySock: i.ptySock,
                dispatch: i.dispatch,
                replPid: i.replPid,
                replProcStart: i.replProcStart
            });
        }
        let o = O() === "windows";
        let [a, l] = o ? [
            kKe(),
            ".pid"
        ] : [
            jot(),
            ".sock"
        ];
        let f = o && e ? await xHr(e) : await readdir(a).catch(()=>[]);
        let y = new Set(f.filter((s)=>s.endsWith(l)));
        for (let s of f){
            if (!s.endsWith(l)) {
                if (!o) {
                    let d = [
                        ".err",
                        ".late",
                        ".exec-exit",
                        ".err.read"
                    ].find((g)=>s.endsWith(`.sock${g}`));
                    if (d && !y.has(s.slice(0, -d.length))) {
                        let g = s.slice(0, -`.sock${d}`.length);
                        if (!(d === ".exec-exit" && t.has(g))) {
                            await unlink(join(a, s)).catch(()=>{});
                        }
                    }
                }
                continue;
            }
            let i = s.slice(0, -l.length);
            if (t.has(i)) {
                continue;
            }
            let pid = o ? Number((e ? await PHr(e, i) : await Ba(Rce(i), ONt)) ?? "0") : 0;
            t.set(i, {
                pid,
                ptySock: kE(i)
            });
        }
        if (!o) {
            let s = new Set;
            for (let u of t.values()){
                if (u.ptySock) {
                    s.add(u.ptySock);
                }
            }
            let i = await readdir(cre()).catch(()=>[]);
            for (let u of i){
                if (!u.endsWith(".pty.sock")) {
                    continue;
                }
                let ptySock = join(cre(), u);
                if (s.has(ptySock)) {
                    continue;
                }
                t.set(`spare:${u}`, {
                    pid: 0,
                    ptySock
                });
            }
        }
        let reaped = 0;
        let k = new Set;
        await Promise.all(Array.from(t.entries()).map(async ([s, i])=>{
            let u = i.dispatch ? await i4n(i.ptySock, i.dispatch) : null;
            if (i.ptySock && await j1e(i.ptySock, e)) {
                reaped++;
            } else if (i.pid) {
                let d = await IHr(i.pid, i.procStart);
                let g = d !== "unverified" && await Tue(i.replPid, i.replProcStart);
                switch(d){
                    case "killed":
                        reaped++;
                        break;
                    case "unverified":
                        k.add(s);
                        return;
                    case "gone":
                    case "foreign":
                        if (g) {
                            reaped++;
                        }
                        break;
                    default:
                }
            }
            if (!s.startsWith("spare:")) {
                let d = {
                    state: "stopped",
                    detail: "stopped"
                };
                let g = u?.state === "done" ? u : n.supervisorKilledAll ? d : u ?? d;
                await vqe(s, g.state, g.detail, undefined, e);
                if (o && e) {
                    await e.delete($e.daemon([
                        "pty-pids",
                        basename(m5(i.ptySock ?? kE(s)))
                    ])).catch(()=>{});
                } else {
                    await unlink(m5(i.ptySock ?? kE(s))).catch(()=>{});
                }
            }
            if (o) {
                if (e) {
                    await A(e, s);
                } else {
                    await unlink(Rce(s)).catch(()=>{});
                    let d = kk(kE(s));
                    await unlink(d).catch(()=>{});
                    await unlink(`${d}.read`).catch(()=>{});
                    await unlink(PM(kE(s))).catch(()=>{});
                }
            }
        }));
        if (t.size > 0) {
            await GJ((s)=>{
                for (let i of t.keys()){
                    if (!k.has(i)) {
                        delete s.workers[i];
                    }
                }
            }, e).catch(c);
        }
        return {
            reaped,
            kept: k.size
        };
    });
}
async function xHr(n) {
    let e = [];
    let cursor;
    do {
        let t = await n.listEntries({
            namespace: "daemon",
            relPath: [
                "pty-pids"
            ]
        }, {
            cursor,
            skipKeyStats: true,
            skipScopeStats: true
        }).catch(()=>{});
        if (t === undefined || !t.ok) {
            return [];
        }
        for (let o of t.value.items){
            if (o.kind === "key" && o.key.namespace === "daemon") {
                let a = o.key.relPath.at(-1);
                if (a !== undefined && o.key.relPath.length === 2 && fr(a)) {
                    e.push(a);
                }
            }
        }
        cursor = t.value.cursor;
    }while (cursor !== undefined)
    return e;
}
var ONt = 4096;
async function B(n) {
    try {
        let e = await lstat(Rce(n));
        return !e.isFile() || e.size > ONt;
    } catch (error) {
        return !z(error);
    }
}
async function PHr(n, e) {
    if (await B(e)) {
        return null;
    }
    let r = await n.readText([
        {
            key: $e.daemon([
                "pty-pids",
                `${e}.pid`
            ]),
            offset: 0,
            length: ONt + 1
        }
    ]).catch(()=>{});
    if (r === undefined || !r.ok) {
        return null;
    }
    let t = r.value.items[0];
    if (!t.found || t.totalBytes > ONt) {
        return null;
    }
    return t.value;
}
async function A(n, e) {
    await n.delete($e.daemon([
        "pty-pids",
        `${e}.pid`
    ])).catch(()=>{});
    await x(n, kE(e));
}
async function x(n, e) {
    let r = kk(e);
    for (let t of [
        basename(r),
        `${basename(r)}.read`,
        basename(PM(e))
    ]){
        await n.delete($e.daemon([
            "pty-pids",
            t
        ])).catch(()=>{});
    }
}
function j1e(n, e) {
    return new Promise((resolve)=>{
        let t = false;
        let o = (l)=>{
            if (t) {
                return;
            }
            t = true;
            resolve(l);
        };
        let a = connect(n);
        a.unref();
        a.setTimeout(2000, ()=>{
            a.destroy();
            o(false);
        });
        a.on("error", ()=>{
            unlink(n).catch(()=>{});
            let l = kk(n);
            if (e && O() === "windows") {
                x(e, n).catch(()=>{});
            } else {
                unlink(l).catch(()=>{});
                unlink(`${l}.read`).catch(()=>{});
                unlink(PM(n)).catch(()=>{});
            }
            o(false);
        });
        a.once("connect", ()=>{
            a.resume();
            a.write(OL({
                t: "kill",
                sig: "SIGTERM"
            }));
        });
        a.once("close", ()=>o(true));
    });
}
function gcn(n) {
    return new Promise((resolve)=>{
        let r = false;
        let t = (a)=>{
            if (r) {
                return;
            }
            r = true;
            resolve(a);
        };
        let o = connect(n);
        o.unref();
        o.setTimeout(250, ()=>{
            o.destroy();
            t(false);
        });
        o.on("error", ()=>t(false));
        o.once("connect", ()=>{
            o.end(OL({
                t: "pong"
            }));
            t(true);
        });
    });
}
async function IHr(n, e) {
    try {
        process.kill(n, 0);
    } catch (error) {
        if (v(error) !== "ESRCH") {
            return "foreign";
        }
        if (kSe([
            -n,
            n
        ], e)) {
            return "killed";
        }
        return "gone";
    }
    if (e === undefined) {
        return "foreign";
    }
    let r = await OFe(n);
    if (r === undefined) {
        return "unverified";
    }
    if (r !== e) {
        return "foreign";
    }
    if (kSe([
        -n,
        n
    ], e)) {
        return "killed";
    }
    return "gone";
}
const h = Se(ty(), 1);
const C = [
    "dev",
    "engine"
];
function sXe(n) {
    return C.find((e)=>n.includes(`-${e}.`)) ?? null;
}
function PNt(n) {
    return sXe(n) !== null;
}
function iXe(n, e) {
    if (!n) {
        return false;
    }
    let r = sXe(n);
    let t = sXe(e);
    return r !== null && t !== null && r !== t;
}
function aXe(n) {
    let e;
    for (let f of n.matchAll(/-(?:dev|engine)\.(\d{8})\.t(\d{6})(?:\.|$)/g)){
        e = f;
    }
    let r = e?.[1];
    let t = e?.[2];
    if (!r || !t) {
        return null;
    }
    let o = Date.UTC(Number(r.slice(0, 4)), Number(r.slice(4, 6)) - 1, Number(r.slice(6, 8)), Number(t.slice(0, 2)), Number(t.slice(2, 4)), Number(t.slice(4, 6)));
    if (new Date(o).toISOString().slice(0, 19).replace(/[-:]/g, "").replace("T", "t") === `${r}t${t}`) {
        return o;
    }
    return null;
}
function G0o(n, e) {
    let r = aXe(n);
    let t = aXe(e);
    return r !== null && t !== null && t < r;
}
function tmt(n, e) {
    let r = aXe(n);
    let t = aXe(e);
    if (r !== null && t !== null) {
        if (sXe(n) !== sXe(e)) {
            return false;
        }
        return r > t;
    }
    if (PNt(n) || PNt(e)) {
        return false;
    }
    return h.valid(n) !== null && h.valid(e) !== null && h.gt(n, e);
}
function s4n(n, e, r) {
    if (!n) {
        return false;
    }
    if (n === r) {
        return true;
    }
    let t = aXe(n);
    if (t !== null) {
        return t >= e.commitMs;
    }
    if (PNt(n)) {
        return false;
    }
    return h.valid(n) !== null && h.gte(n, e.release);
}
const E = new Set([
    1000,
    1002,
    1003,
    1004,
    1006,
    2004,
    2031
]);
const N = /\x1b\[\?([\d;]+)([hl])/g;
function INt() {
    let n = new Set;
    let e = "";
    return {
        feed (r, t) {
            let o = e ? e + r : r;
            let a = 0;
            let l = false;
            for (let m of o.matchAll(N)){
                let k = m[2] === "h";
                for (let s of m[1].split(";")){
                    let i = Number(s);
                    if (E.has(i) && n.has(i) !== k) {
                        if (k) {
                            n.add(i);
                            t?.(i);
                        } else {
                            n.delete(i);
                        }
                        l = true;
                    }
                }
                a = m.index + m[0].length;
            }
            let f = o.slice(Math.max(a, o.length - 16));
            let y = f.lastIndexOf("\x1B");
            e = y >= 0 && /^\x1b(\[(\?[\d;]*)?)?$/.test(f.slice(y)) ? f.slice(y) : "";
            return l;
        },
        seed (r) {
            for (let t of r){
                if (E.has(t)) {
                    n.add(t);
                }
            }
        },
        snapshot () {
            return [
                ...n
            ];
        }
    };
}
export { sXe, PNt, iXe, aXe, G0o, tmt, s4n, INt, i4n, RHr, xHr, ONt, PHr, j1e, gcn, IHr };
