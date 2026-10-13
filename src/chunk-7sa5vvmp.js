import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ar } from "/$bunfs/root/chunk-c56kpkt7.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { o, T, u, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { dirname, join } from "path";
const b = 50;
const D = p(()=>u({
        version: A(1),
        sessions: T(u({
            id: o(),
            reason: o(),
            at: o()
        }))
    }));
const c = "device-unbound-creates";
function d() {
    return join(ve(), "state", `${c}.json`);
}
async function f(r) {
    let i = await r.readText();
    if (i === undefined) {
        return [];
    }
    let n = y(i);
    if (!n.success) {
        return [];
    }
    let e = await r.retentionCutoff();
    if (e === null) {
        return n.data.sessions;
    }
    return n.data.sessions.filter((s)=>!v(s.at, e));
}
function y(r) {
    try {
        return D().safeParse(X(r));
    } catch  {
        return {
            success: false
        };
    }
}
function v(r, i) {
    let n = Date.parse(r);
    return Number.isNaN(n) || n < i.getTime();
}
async function Njs(r, reason, n) {
    try {
        let id = ar(r);
        let sessions = [
            ...(await f(n)).filter((m)=>ar(m.id) !== id),
            {
                id,
                reason,
                at: n.now().toISOString()
            }
        ].slice(-b);
        await n.writeText(_({
            version: 1,
            sessions
        }, null, 2) + `
`);
    } catch (error) {
        t(`[deviceBind] unbound create not recorded (${l(error)})`);
    }
}
async function iVr(r, i, n) {
    try {
        let e = ar(r);
        let s = (await f(n)).find((a)=>ar(a.id) === e);
        if (s !== undefined && i(s.reason)) {
            return s.reason;
        }
        return undefined;
    } catch (error) {
        t(`[deviceBind] unbound-create record unreadable (${l(error)})`);
        return;
    }
}
function aVr(r) {
    let i = j() && r !== undefined ? r : undefined;
    let n = $e.state(c);
    return {
        readText: async ()=>{
            if (i) {
                let e = await i.readText([
                    n
                ]);
                if (!e.ok) {
                    throw Error("device unbound-creates read failed");
                }
                let s = e.value.items[0];
                if (s.found) {
                    return s.value;
                }
                return undefined;
            }
            try {
                return await mn().read(d());
            } catch (error) {
                if (z(error)) {
                    return;
                }
                throw error;
            }
        },
        writeText: async (e)=>{
            if (i) {
                if (!(await i.write(n, e, {
                    mode: 384
                })).ok) {
                    throw Error("device unbound-creates write failed");
                }
                return;
            }
            let s = d();
            await mn().mkdir(dirname(s), 448);
            await mn().atomicWrite(s, e, 384);
        },
        now: ()=>new Date,
        retentionCutoff: async ()=>{
            let e = await import("/$bunfs/root/chunk-m2bdafy4.js");
            if (await e.isRetentionCleanupSafe(r)) {
                return e.getCutoffDate();
            }
            return null;
        }
    };
}
export { Njs, iVr, aVr };
