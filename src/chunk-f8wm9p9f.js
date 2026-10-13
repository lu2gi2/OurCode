import { l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { ON, $o, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { HH } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Bw, mn } from "/$bunfs/root/chunk-223dyewd.js";
import { WY } from "/$bunfs/root/chunk-r3z1chqx.js";
import { Nm, PFe, X_, Ny, Fl } from "/$bunfs/root/chunk-t0b6khh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Eue, KT } from "/$bunfs/root/chunk-74djrymf.js";
import { iB } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { _a } from "/$bunfs/root/chunk-g05qxjrj.js";
import { o, E, Hf, u, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { join } from "path";
const wLr = /^[A-Za-z0-9]{1,64}$/;
const R = /^background-[A-Za-z0-9]{1,64}\.jsonl$/;
const S = 80;
const _ = 64;
const B = 8192;
const L = 256;
const w = 32;
const z = 250;
const C = p(()=>u({
        v: A(1),
        id: o().regex(wLr),
        owner: Hf().positive().max(2147483647),
        owner_start: o().min(1).max(64).optional(),
        pid: Hf().positive().max(2147483647).optional(),
        pid_start: o().min(1).max(64).optional(),
        pids_in: o().min(1).max(1024).optional(),
        started_at: E().nonnegative(),
        command: o().max(4 * S),
        caller: o().max(4 * _),
        folder: o().min(1).max(4096)
    }));
async function vLr(e) {
    if (!wLr.test(e.id)) {
        return;
    }
    try {
        let n = {
            v: 1,
            id: e.id,
            owner: process.pid,
            owner_start: await Ny(),
            pid: e.pid,
            pid_start: e.pid === undefined ? undefined : await Fl(e.pid, {
                skipCache: true
            }),
            pids_in: await P(),
            started_at: Date.now(),
            command: d(e.command, S),
            caller: d(e.caller, _),
            folder: e.folder
        };
        await mn().mkdir(iB(), 448);
        await mn().writeExclusive(m(e.id), ON(n), 384);
        await M$o();
    } catch (error) {
        t(`[remote-tools] background command record not written: ${l(error)}`, {
            level: "warn"
        });
    }
}
async function x6n(e) {
    await f(c(e));
    await f(m(e));
}
function P6n(e) {
    return f(c(e));
}
async function M$o() {
    let e = [];
    try {
        let n = await mn().list(iB());
        for (let i of n.filter((r)=>R.test(r)).slice(0, L)){
            let r = await THs(i.slice(11, -6));
            if (r !== undefined && r !== "ended") {
                e.push(r);
            }
        }
    } catch (error) {
        t(`served background records: ${l(error)}`);
    }
    return e.sort((n, i)=>n.folder.localeCompare(i.folder) || n.caller.localeCompare(i.caller) || n.started_at - i.started_at || n.id.localeCompare(i.id));
}
async function THs(e) {
    if (!wLr.test(e)) {
        return;
    }
    try {
        let n = await mn().readTail(m(e), B, {
            noFollow: true
        });
        let i = C().safeParse($o(n.toString("utf8").trim()));
        if (!i.success || i.data.id !== e) {
            return;
        }
        let r = i.data;
        let a = r.owner === process.pid && r.owner_start !== undefined && r.owner_start === await Ny() || await k(r.owner, r.owner_start);
        if (a || await k(r.pid, r.pid_start)) {
            return {
                ...r,
                ownerGone: !a
            };
        }
        if (await D(r)) {
            await x6n(e);
            return "ended";
        }
    } catch  {}
}
async function ABs(e) {
    return F(await M$o(), (n)=>!n.ownerGone && e.includes(n.folder));
}
async function CBs(e, n = 10000) {
    let i = mn();
    try {
        await i.writeExclusive(c(e), `{}
`, 384);
    } catch (error) {
        if (v(error) !== "EEXIST") {
            return "not_asked";
        }
    }
    let r = Date.now() + n;
    while(Date.now() < r){
        await Q(z);
        if (await i.lstat(m(e)).catch(()=>null) === undefined) {
            await P6n(e);
            return "stopped";
        }
    }
    if (await f(c(e))) {
        return "unanswered";
    }
    return "pending";
}
function RBs(e, { now, stopHint }) {
    if (e.length === 0) {
        return [];
    }
    let r = [
        "background commands started by cloud sessions:"
    ];
    let a;
    for (let s of e.slice(0, w)){
        let g = `  in ${d(s.folder, 200)}, cloud session ${d(s.caller, _ + 1)}:`;
        if (g !== a) {
            a = g;
            r.push(g);
        }
        let b = s.pid === undefined ? "pid unknown" : `pid ${s.pid}`;
        let x = Bw(Math.max(0, now - s.started_at));
        r.push(`    ${s.id}  ${b}  running ${x}  ${d(s.command, S + 1)}${s.ownerGone ? "  (its serving process is gone: nothing here will stop it)" : ""}`);
    }
    if (e.length > w) {
        r.push(`  and ${e.length - w} more`);
    }
    if (stopHint) {
        r.push("  stop one: claude daemon remote-control stop-shell <id>");
    }
    return r;
}
function m(e) {
    return join(iB(), `background-${e}.jsonl`);
}
function c(e) {
    return join(iB(), `background-${e}.stop.jsonl`);
}
async function k(e, n) {
    return e !== undefined && _a(e) && (n === undefined || await X_(e, n) !== false);
}
async function D(e) {
    if (e.pids_in === undefined || e.pids_in !== await P() || !await PFe() || !await h(e.owner, e.owner_start)) {
        return false;
    }
    let { pid } = e;
    if (pid === undefined || !await h(pid, e.pid_start)) {
        return false;
    }
    if (!Nm(pid) || O() === "windows") {
        return true;
    }
    try {
        process.kill(-pid, 0);
        return false;
    } catch (error) {
        return v(error) === "ESRCH";
    }
}
async function h(e, n) {
    return Nm(e) || n !== undefined && await X_(e, n) === false;
}
async function P() {
    try {
        return `${await KT()} ${Eue()}`;
    } catch  {
        return;
    }
}
async function f(e) {
    try {
        await mn().delete(e);
        return true;
    } catch  {
        return false;
    }
}
function d(e, n) {
    return WY(HH(e), n);
}
export { wLr, vLr, x6n, P6n, M$o, THs, ABs, CBs, RBs };
