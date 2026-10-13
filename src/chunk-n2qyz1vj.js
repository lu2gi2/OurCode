import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { I, HH } from "/$bunfs/root/chunk-qch5xj2a.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { WY } from "/$bunfs/root/chunk-r3z1chqx.js";
import { Hw, nse } from "/$bunfs/root/chunk-t0b6khh6.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { o, Hf, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { join } from "path";
function hBt() {
    return join(ve(), "daemon.status.json");
}
function yBt() {
    return $e.state("daemon-status");
}
async function rBr(workers, n) {
    let r = {
        supervisorPid: process.pid,
        supervisorProcStart: nse(),
        writtenAt: Date.now(),
        workers
    };
    if (j() && n !== undefined) {
        try {
            let e = await n.write(yBt(), _(r, null, 2), {
                mode: 438 & ~process.umask()
            });
            if (!e.ok) {
                t(`writeDaemonStatus: ${e.error.code}`);
            }
            return e.ok;
        } catch (error) {
            t(`writeDaemonStatus: ${l(error)}`);
            return false;
        }
    }
    try {
        await mn().atomicWrite(hBt(), _(r, null, 2));
        return true;
    } catch (error) {
        t(`writeDaemonStatus: ${l(error)}`);
        return false;
    }
}
async function oBr(s) {
    if (j() && s !== undefined) {
        try {
            let n = await s.delete(yBt());
            if (!n.ok) {
                t(`removeDaemonStatus: ${n.error.code}`);
            }
        } catch (error) {
            t(`removeDaemonStatus: ${l(error)}`);
        }
        return;
    }
    try {
        await mn().delete(hBt());
    } catch  {}
}
async function y8n(s) {
    let n;
    if (j() && s !== undefined) {
        let i;
        try {
            i = await s.readText([
                yBt()
            ]);
        } catch  {
            return null;
        }
        if (!i.ok) {
            return null;
        }
        let c = i.value.items[0];
        if (!c.found) {
            return null;
        }
        n = c.value;
    } else {
        try {
            n = await mn().read(hBt());
        } catch  {
            return null;
        }
    }
    let r = mt(n, false);
    if (!r || typeof r !== "object") {
        return null;
    }
    let e = r;
    if (typeof e.supervisorPid !== "number" || typeof e.workers !== "object" || e.workers === null) {
        return null;
    }
    try {
        process.kill(e.supervisorPid, 0);
    } catch  {
        return null;
    }
    let a = typeof e.supervisorProcStart === "string" ? e.supervisorProcStart : undefined;
    if (!await Hw(e.supervisorPid, a)) {
        return null;
    }
    return r;
}
const m = 4096;
const p = 200;
const _8n = 64;
const f = 32;
function S(s) {
    let n = [];
    let r = u({
        servedFolder: u({
            dir: o().min(1).max(m),
            sessions: Hf().positive().max(_8n)
        })
    });
    for (let e of Object.values(s?.workers ?? {})){
        let a = r.safeParse(e);
        if (a.success) {
            n.push(a.data.servedFolder);
        }
    }
    return n;
}
async function sBr(s, n) {
    try {
        let r = await y8n(n);
        if (r?.supervisorPid === s) {
            return S(r);
        }
        return [];
    } catch (error) {
        t(`readServedFolders: ${l(error)}`);
    }
    return [];
}
function iBr(s) {
    let r = s.slice(0, f).map(({ dir, sessions })=>`serving tools: ${sessions} ${I(sessions, "cloud session")} in ${WY(HH(dir), p)}`);
    let e = s.length - r.length;
    if (e > 0) {
        return r.concat(`serving tools: and ${e} more ${I(e, "folder")}`);
    }
    return r;
}
export { hBt, yBt, rBr, oBr, y8n, _8n, sBr, iBr };
