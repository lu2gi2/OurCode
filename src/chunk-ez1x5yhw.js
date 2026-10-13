import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { ER, Y_, $l, kR } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { jS, Xso, Jso, Qso, Zso } from "/$bunfs/root/chunk-tsssve1m.js";
import { ca as from } from "/$bunfs/root/chunk-6g4165br.js";
import { F_ } from "/$bunfs/root/chunk-2eh7h0gt.js";
import { createHash } from "crypto";
const S = 32;
function mQ(e, r) {
    return createHash("sha256").update(e).update("\x00").update(_(f(r))).digest("hex");
}
function f(e, r = 0) {
    if (r > S) {
        return e;
    }
    if (Array.isArray(e)) {
        return e.map((n)=>f(n, r + 1));
    }
    if (typeof e === "object" && e !== null) {
        return Object.fromEntries(Object.entries(e).sort(([n], [o])=>{
            if (n < o) {
                return -1;
            }
            if (n > o) {
                return 1;
            }
            return 0;
        }).map(([n, o])=>[
                n,
                f(o, r + 1)
            ]));
    }
    return e;
}
function $At(e, r) {
    let n = X(_(r));
    return mQ(e, n);
}
function k() {
    return `perm-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
function zMn(e) {
    let teamName = e.teamName || $l();
    let n = e.workerId || ER();
    let workerName = e.workerName || Y_();
    let workerColor = e.workerColor || kR();
    if (!teamName) {
        throw Error("Team name is required for permission requests");
    }
    if (!n) {
        throw Error("Worker ID is required for permission requests");
    }
    if (!workerName) {
        throw Error("Worker name is required for permission requests");
    }
    return {
        id: k(),
        workerId: n,
        workerName,
        workerColor,
        teamName,
        toolName: e.toolName,
        toolUseId: e.toolUseId,
        description: e.description,
        input: e.input,
        permissionSuggestions: e.permissionSuggestions || [],
        createdAt: Date.now()
    };
}
function y(e) {
    if (!(e || $l())) {
        return false;
    }
    let n = ER();
    return !n || n === "team-lead";
}
function lLe() {
    let e = $l();
    let r = ER();
    return !!e && !!r && !y();
}
async function x(e, r) {
    let n = e || $l();
    if (!n) {
        return null;
    }
    if (!await F_(n, r)) {
        t(`[PermissionSync] Team file not found for team: ${n}`);
        return null;
    }
    return from;
}
async function u(e, r, n, o, i) {
    if (await jS(e, r, n, i) === undefined) {
        t(`[PermissionSync] FAILED to deliver ${o}`, {
            level: "error"
        });
        return false;
    }
    t(`[PermissionSync] Sent ${o}`);
    return true;
}
async function GMn(e, r) {
    let n = await x(e.teamName, r);
    if (!n) {
        t("[PermissionSync] Cannot send permission request: leader name not found");
        return false;
    }
    try {
        let o = Xso({
            request_id: e.id,
            agent_id: e.workerName,
            tool_name: e.toolName,
            tool_use_id: e.toolUseId,
            description: e.description,
            input: e.input,
            permission_suggestions: e.permissionSuggestions
        });
        return await u(n, {
            from: e.workerName,
            text: _(o),
            timestamp: new Date().toISOString(),
            color: e.workerColor
        }, e.teamName, `permission request ${_(e.id)} to leader ${_(n)} via mailbox`, r);
    } catch (error) {
        t(`[PermissionSync] Failed to send permission request via mailbox: ${error}`);
        c(error);
        return false;
    }
}
async function Mso(e, r, request_id, o, i, tool_use_id) {
    let d = o || $l();
    if (!d) {
        t("[PermissionSync] Cannot send permission response: team name not found");
        return false;
    }
    try {
        let s = Jso({
            request_id,
            subtype: r.decision === "approved" ? "success" : "error",
            error: r.feedback,
            updated_input: r.updatedInput,
            permission_updates: r.permissionUpdates,
            tool_use_id,
            approved_request: r.approvedRequest
        });
        return await u(e, {
            from,
            text: _(s),
            timestamp: new Date().toISOString()
        }, d, `permission response for ${_(request_id)} to worker ${_(e)} via mailbox`, i);
    } catch (error) {
        t(`[PermissionSync] Failed to send permission response via mailbox: ${error}`);
        c(error);
        return false;
    }
}
function Ads() {
    return `sandbox-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
async function Cds(e, r, n, o) {
    let i = n || $l();
    if (!i) {
        t("[PermissionSync] Cannot send sandbox permission request: team name not found");
        m("swarm_sandbox_permission_request", "no_team_name");
        return false;
    }
    let a = await x(i, o);
    if (!a) {
        t("[PermissionSync] Cannot send sandbox permission request: leader name not found");
        m("swarm_sandbox_permission_request", "no_leader");
        return false;
    }
    let d = ER();
    let s = Y_();
    let l = kR();
    if (!d || !s) {
        t("[PermissionSync] Cannot send sandbox permission request: worker ID or name not found");
        m("swarm_sandbox_permission_request", "no_worker_identity");
        return false;
    }
    try {
        let p = Qso({
            requestId: r,
            workerId: d,
            workerName: s,
            workerColor: l,
            host: e
        });
        let w = await u(a, {
            from: s,
            text: _(p),
            timestamp: new Date().toISOString(),
            color: l
        }, i, `sandbox permission request ${_(r)} for host ${_(e)} to leader ${_(a)} via mailbox`, o);
        if (w) {
            g("swarm_sandbox_permission_request");
        } else {
            m("swarm_sandbox_permission_request", "mailbox_write_failed");
        }
        return w;
    } catch (error) {
        t(`[PermissionSync] Failed to send sandbox permission request via mailbox: ${error}`);
        c(error);
        m("swarm_sandbox_permission_request", "mailbox_write_failed");
        return false;
    }
}
async function Nfr(e, r, n, allow, i, a) {
    let d = i || $l();
    if (!d) {
        t("[PermissionSync] Cannot send sandbox permission response: team name not found");
        return false;
    }
    try {
        let s = Zso({
            requestId: r,
            host: n,
            allow
        });
        return await u(e, {
            from,
            text: _(s),
            timestamp: new Date().toISOString()
        }, d, `sandbox permission response for ${_(r)} (host: ${_(n)}, allow: ${_(allow)}) to worker ${_(e)} via mailbox`, a);
    } catch (error) {
        t(`[PermissionSync] Failed to send sandbox permission response via mailbox: ${error}`);
        c(error);
        return false;
    }
}
export { mQ, $At, zMn, lLe, GMn, Mso, Ads, Cds, Nfr };
