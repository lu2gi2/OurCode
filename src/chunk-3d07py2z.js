import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Vi } from "/$bunfs/root/chunk-kjg6txrm.js";
import { I2 } from "/$bunfs/root/chunk-qwvy7ma3.js";
function u(permissionUpdates) {
    if (!Array.isArray(permissionUpdates)) {
        return [];
    }
    let n = I2();
    let s = [];
    for (let o of permissionUpdates){
        let i = n.safeParse(o);
        if (i.success) {
            s.push(i.data);
        } else {
            t(`[SwarmPermissionPoller] Dropping malformed permissionUpdate entry: ${i.error.message}`, {
                level: "warn"
            });
        }
    }
    return s;
}
function Ybn(e) {
    Vi().swarmPermissions.pending.set(e.requestId, e);
    t(`[SwarmPermissionPoller] Registered callback for request ${e.requestId}`);
}
function fzt(e) {
    Vi().swarmPermissions.pending.delete(e);
    t(`[SwarmPermissionPoller] Unregistered callback for request ${e}`);
}
function N4o(e) {
    return Vi().swarmPermissions.pending.has(e);
}
function $4o() {
    Vi().swarmPermissions.clear();
}
const d = true;
function a(e, n) {
    let s = n.toolUseId === undefined ? d : n.toolUseId === e.toolUseId;
    let n_approvedRequest = n.approvedRequest;
    let i = n_approvedRequest === undefined ? d : n_approvedRequest.tool_use_id === e.toolUseId && n_approvedRequest.tool_name === e.toolName;
    let r = n_approvedRequest === undefined ? d : n_approvedRequest.input_digest === e.inputDigest;
    if (!s || !i) {
        return "mismatch";
    }
    if (!r) {
        return "input_digest_mismatch";
    }
    if (n.toolUseId === undefined || n_approvedRequest === undefined) {
        return "unbound";
    }
    return "bound";
}
function mzt(e) {
    let pending = Vi().swarmPermissions.pending;
    let s = pending.get(e.requestId);
    if (!s) {
        t(`[SwarmPermissionPoller] No callback registered for mailbox response ${_(e.requestId)}`);
        return false;
    }
    pending.delete(e.requestId);
    let o = a(s, e);
    if (o === "mismatch" || o === "input_digest_mismatch") {
        let i = e.approvedRequest;
        let r = e.decision === "approved" ? "approval" : "denial";
        let l = o === "input_digest_mismatch" ? `this ${_(s.toolName)} call (${_(s.toolUseId)}), but its input digest differs` : `${i ? `${_(i.tool_name)} (${_(i.tool_use_id)})` : _(e.toolUseId)}, not this ${_(s.toolName)} call (${_(s.toolUseId)})`;
        t(`[SwarmPermissionPoller] Refusing ${r} for request ${_(e.requestId)}: the leader answered ${l}`, {
            level: "warn"
        });
        s.onRefuse(`The ${r} did not describe this tool call, so it was refused.`, r);
        return true;
    }
    t(`[SwarmPermissionPoller] Processing mailbox response for request ${_(e.requestId)}: ${e.decision} (${o})`);
    if (o === "unbound") {
        s.onUnboundVerdict();
    }
    if (e.decision === "approved") {
        let i = u(e.permissionUpdates);
        let r = e.updatedInput;
        s.onAllow(r, i);
    } else {
        s.onReject(e.feedback);
    }
    return true;
}
function F4o(e) {
    Vi().swarmPermissions.pendingSandbox.set(e.requestId, e);
    t(`[SwarmPermissionPoller] Registered sandbox callback for request ${e.requestId}`);
}
function U4o(e) {
    return Vi().swarmPermissions.pendingSandbox.has(e);
}
function B4o(e) {
    let pendingSandbox = Vi().swarmPermissions.pendingSandbox;
    let s = pendingSandbox.get(e.requestId);
    if (!s) {
        t(`[SwarmPermissionPoller] No sandbox callback registered for request ${_(e.requestId)}`);
        return false;
    }
    pendingSandbox.delete(e.requestId);
    if (s.host !== e.host) {
        t(`[SwarmPermissionPoller] Refusing sandbox ${e.allow === true ? "allow" : "deny"} for request ${_(e.requestId)}: the leader answered for ${_(e.host)}, not ${_(s.host)}`, {
            level: "warn"
        });
        s.resolve(false);
        return true;
    }
    t(`[SwarmPermissionPoller] Processing sandbox response for request ${_(e.requestId)}: allow=${_(e.allow)}`);
    s.resolve(e.allow);
    return true;
}
export { Ybn, fzt, N4o, $4o, mzt, F4o, U4o, B4o };
