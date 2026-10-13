import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { g } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { j0e } from "/$bunfs/root/chunk-az5m8ek6.js";
import { la } from "/$bunfs/root/chunk-0ycjphb5.js";
import { V5t } from "/$bunfs/root/chunk-2eh7h0gt.js";
import { Zp } from "/$bunfs/root/chunk-k5fhce8z.js";
import { vp, ikt } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { Ws } from "/$bunfs/root/chunk-59xjawk6.js";
function jve(a, s) {
    let i;
    for (let r of Object.values(s)){
        if (vp(r) && r.identity.agentId === a) {
            if (r.status === "running") {
                return r;
            }
            if (!i) {
                i = r;
            }
        }
    }
    return i;
}
function qfn(a, s) {
    let i = jve(a, s);
    if (i) {
        return {
            status: "found",
            task: i
        };
    }
    let r = Object.values(s).filter(vp).filter((n)=>n.identity.resumableAgentId === a);
    let m = r.find((n)=>n.status === "running") ?? r[0];
    if (m) {
        return {
            status: "found",
            task: m
        };
    }
    let u = new Map;
    for (let n of Object.values(s)){
        if (!vp(n) || n.identity.agentName !== a) {
            continue;
        }
        let c = u.get(n.identity.agentId);
        if (!c || c.status !== "running" && n.status === "running") {
            u.set(n.identity.agentId, n);
        }
    }
    let o = [
        ...u.values()
    ];
    let f = o.filter((n)=>n.status === "running");
    let d = f.length > 0 ? f : o;
    if (d.length === 1) {
        return {
            status: "found",
            task: d[0]
        };
    }
    if (d.length > 1) {
        return {
            status: "ambiguous",
            candidates: d.map((n)=>n.identity.agentId),
            anyLive: d.some((n)=>!Ws(n.status))
        };
    }
    return {
        status: "not_found"
    };
}
function kjo(a) {
    return tQe(a).filter((s)=>s.status === "running").map((s)=>s.identity.agentId);
}
function tQe(a) {
    return Object.values(a).filter(vp);
}
const aBt = {
    name: "InProcessTeammateTask",
    type: "in_process_teammate",
    async kill (a, s, i, r, m) {
        let { memberRemoval, osTeardown } = Kfn(a, s, i, m);
        await Promise.all([
            memberRemoval,
            osTeardown
        ]);
    }
};
var k = 10000;
function Kfn(a, s, i, r) {
    let killed = false;
    let u = null;
    let o = null;
    let toolUseId;
    let summary;
    let n;
    s.update(a, (e)=>{
        if (e.status !== "running") {
            return e;
        }
        u = e.identity.teamName;
        o = e.identity.agentId;
        toolUseId = e.toolUseId;
        summary = e.description;
        n = e.paneTeardown;
        e.abortController?.abort();
        killed = true;
        e.onIdleCallbacks?.forEach((p)=>p());
        return {
            ...e,
            status: "killed",
            notified: true,
            endTime: Date.now(),
            onIdleCallbacks: [],
            pendingUserMessages: [],
            abortController: undefined,
            currentWorkAbortController: undefined,
            paneTeardown: undefined,
            evictAfter: undefined
        };
    });
    let osTeardown = n ? Ut(n(), k, `pane teardown did not settle within ${k}ms`).then((e)=>{
        if (!e) {
            t(`[killInProcessTeammate] pane teardown for ${a} reported failure \u2014 the backend could not find/kill the pane; its separate \`claude --agent-id\` process may still be running`, {
                level: "warn"
            });
        }
        return e;
    }, (e)=>{
        t(`[killInProcessTeammate] pane teardown for ${a} did not complete cleanly: ${l(e)}. Not blocking the stop result on it; the backend kill continues in the background and the separate \`claude --agent-id\` process may still be running`, {
            level: "warn"
        });
        return false;
    }) : Promise.resolve(undefined);
    if (killed && o) {
        i((e)=>{
            if (!e.teamContext?.teammates?.[o]) {
                return e;
            }
            let { [o]: p, ...rest } = e.teamContext.teammates;
            return {
                ...e,
                teamContext: {
                    ...e.teamContext,
                    teammates: rest
                }
            };
        });
    }
    let memberRemoval = Promise.resolve();
    if (u && o) {
        memberRemoval = V5t(u, o, {
            onlyIfJoinedBefore: Date.now()
        }, r);
    }
    if (killed) {
        Zp(a);
        la(a, "stopped", {
            toolUseId,
            summary
        });
        setTimeout((e, p)=>e.evictTerminal(p), ikt, s, a);
    }
    if (o) {
        j0e(o);
    }
    g("swarm_in_process_kill");
    return {
        killed,
        memberRemoval,
        osTeardown
    };
}
export { jve, qfn, kjo, tQe, aBt, Kfn };
