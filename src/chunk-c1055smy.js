import { lt } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ar } from "/$bunfs/root/chunk-c56kpkt7.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { AFe, pMt, jen } from "/$bunfs/root/chunk-tw5t5h13.js";
import { EH } from "/$bunfs/root/chunk-r3z1chqx.js";
import { P$n } from "/$bunfs/root/chunk-sfgejbsr.js";
import { GHn } from "/$bunfs/root/chunk-nvz50x4x.js";
const Tpr = "Remote Control";
function vro(e) {
    if (AFe(e)) {
        return "cloud";
    }
    return Tpr;
}
const v = 300000;
class _ {
    listed = undefined;
    inFlight = undefined;
    record(listed, identityKey, n) {
        this.listed = {
            at: Date.now(),
            listed,
            identityKey,
            truncated: n
        };
    }
    forget() {
        this.listed = undefined;
    }
    begin(e) {
        this.inFlight = e;
    }
    settle(e) {
        if (this.inFlight === e) {
            this.inFlight = undefined;
        }
    }
}
const h = new lt(()=>new _);
async function sot(e = {
    refresh: true
}) {
    {
        let { primePeerIdentityOwner } = import.meta.require("/$bunfs/root/chunk-pgqpvw0z.js");
        await primePeerIdentityOwner(e);
    }
}
function p() {
    let { getPeerBridgeIdentity } = import.meta.require("/$bunfs/root/chunk-pgqpvw0z.js");
    let r = getPeerBridgeIdentity();
    if (r?.live) {
        return r.key;
    }
    return null;
}
async function nOn(e, r) {
    {
        let identityKey = p();
        if (!identityKey) {
            return {
                rows: [],
                failed: false,
                identityKey: null
            };
        }
        let i = h.of(e);
        let s = i.inFlight;
        if (s !== undefined && s.identityKey === identityKey) {
            return s.promise;
        }
        let { listBridgePeerSessions } = import.meta.require("/$bunfs/root/chunk-c5tem16a.js");
        let u = {
            record: undefined
        };
        let c = Date.now();
        let promise = (async ()=>{
            try {
                let g = {
                    failed: false,
                    truncated: false
                };
                let rows;
                try {
                    rows = await listBridgePeerSessions(g, r);
                } catch (error) {
                    t(`[bridge:population] fetch threw: ${l(error)} \u2014 treated as failed`, {
                        level: "warn"
                    });
                    return {
                        rows: [],
                        failed: true,
                        identityKey
                    };
                }
                t(`[bridge:population] fetched ${rows.length} rows in ${Date.now() - c}ms${g.failed ? " (FAILED — not recordable)" : ""}${g.truncated ? " (truncated at page budget)" : ""}`);
                return {
                    rows,
                    failed: g.failed,
                    ...g.truncated && {
                        truncated: true
                    },
                    identityKey
                };
            } finally{
                i.settle(u.record);
            }
        })();
        u.record = {
            identityKey,
            promise
        };
        i.begin(u.record);
        return promise;
    }
    return {
        rows: [],
        failed: false,
        identityKey: null
    };
}
function rOn(e) {
    {
        let r = p();
        return r !== null && e.identityKey === r;
    }
    return false;
}
function B3t(e, r, n) {
    {
        let i = p();
        if (!i) {
            return;
        }
        if (r.identityKey !== i) {
            t("[bridge:population] walk ran under a previous identity — ignoring its outcome for the current one");
            return;
        }
        let s = h.of(e);
        if (r.failed) {
            let o = s.listed;
            if (o !== undefined && o.identityKey === i) {
                s.forget();
                t("[bridge:population] failed walk — cleared the printed set (going cold, never sticky)");
            }
            return;
        }
        s.record(n, i, r.truncated === true);
        t(`[bridge:population] recorded ${n.length} bridge rows (cloud-deduped)`);
    }
}
function oOn(e, r) {
    {
        let n = p();
        if (!n || r.identityKey !== n) {
            return;
        }
        let i = h.of(e);
        let s = i.listed;
        if (s !== undefined && s.identityKey === n) {
            i.forget();
            t("[bridge:population] forgot the recorded set (an unrecordable listing superseded it)");
        }
    }
}
function sOn(e) {
    return Ero(e)?.rows;
}
function Ero(e) {
    {
        let r = p();
        let n = h.of(e).listed;
        if (!r || n === undefined || n.identityKey !== r) {
            return;
        }
        let i = Date.now() - n.at;
        if (i >= 0 && i < v) {
            t(`[bridge:population] warm recorded set: ${n.listed.length} rows (age ${i}ms)`);
            return {
                rows: n.listed,
                truncated: n.truncated
            };
        }
    }
}
function kro(e, r, n) {
    let i = pMt(r);
    let s = new Set(n.filter((o)=>!jen(r, o.id)).map((o)=>ar(o.id)));
    return e.filter((o)=>{
        let u = ar(o.id);
        return !i.has(u) && !s.has(u);
    });
}
function j3t(e, r) {
    return kro(e, [], r);
}
function oAt(e) {
    return e === "timeout" || e === "fetch_failed";
}
const I = 30000;
const P = 5000;
class B {
    memo = undefined;
    inFlight = undefined;
    record(sessions, r, credential) {
        if (credential !== S()) {
            return;
        }
        this.memo = {
            at: Date.now(),
            sessions,
            truncated: r,
            credential
        };
    }
    begin(promise, credential) {
        this.inFlight = {
            promise,
            credential
        };
    }
    settle(e) {
        if (this.inFlight?.promise === e) {
            this.inFlight = undefined;
        }
    }
    warm(e) {
        let memo = this.memo;
        if (memo === undefined || memo.credential !== e) {
            return;
        }
        let n = Date.now() - memo.at;
        if (n >= 0 && n < I) {
            return memo;
        }
    }
}
function S() {
    let { walkCredentialKey } = import.meta.require("/$bunfs/root/chunk-pgqpvw0z.js");
    return walkCredentialKey();
}
const C = new lt(()=>new B);
async function Gqe(e, r) {
    {
        let { hasCloudPeerAccess } = import.meta.require("/$bunfs/root/chunk-3r25v0h1.js");
        if (!hasCloudPeerAccess()) {
            return {
                sessions: [],
                unavailable: "gate_off"
            };
        }
        let { walkCcrSessionList } = import.meta.require("/$bunfs/root/chunk-yhqyxn8h.js");
        let s = C.of(e);
        let o = S();
        let u = s.warm(o);
        if (u !== undefined) {
            return {
                sessions: u.sessions,
                unavailable: undefined,
                ...u.truncated && {
                    truncated: true
                }
            };
        }
        let c = s.inFlight;
        let f = c !== undefined && c.credential === o ? c.promise : R(s, walkCcrSessionList, o, r);
        let g = await Ge(f, P);
        if (g === undefined) {
            t(`[agents:cloud] session list not ready within ${P}ms \u2014 not searched this call, disclosing`, {
                level: "warn"
            });
            return {
                sessions: [],
                unavailable: "timeout"
            };
        }
        if (o !== S()) {
            t("[agents:cloud] session list walk ran under a superseded credential — not served, disclosing", {
                level: "warn"
            });
            return {
                sessions: [],
                unavailable: "fetch_failed"
            };
        }
        return g;
    }
    return {
        sessions: [],
        unavailable: undefined
    };
}
function R(e, walkCcrSessionList, n, credentials) {
    let includeBridgeKind = a.CLAUDE_CODE_REMOTE === true;
    let o = includeBridgeKind ? ar(a.CLAUDE_CODE_REMOTE_SESSION_ID ?? "") : "";
    if (o === "") {
        let { getPeerBridgeIdentity } = import.meta.require("/$bunfs/root/chunk-pgqpvw0z.js");
        let f = getPeerBridgeIdentity()?.bridgeSessionId;
        o = typeof f === "string" ? ar(f) : "";
    }
    let u = (async ()=>{
        let c;
        let status = {
            truncated: false
        };
        try {
            c = await walkCcrSessionList({
                status,
                throwOnError: true,
                exhaustive: true,
                includeBridgeKind,
                credentials
            });
        } catch (error) {
            t(`[agents:cloud] session list threw: ${error instanceof TypeError ? "malformed session-list response — " : ""}${P$n(error)}`, {
                level: "error"
            });
            return {
                sessions: [],
                unavailable: "fetch_failed"
            };
        }
        let g = false;
        if (includeBridgeKind) {
            let { isRemoteControlPeerUnreachableFromHere } = import.meta.require("/$bunfs/root/chunk-9k4ckwrp.js");
            g = isRemoteControlPeerUnreachableFromHere();
        }
        let sessions = (o === "" ? c : c.filter((d)=>ar(d.id) !== o)).map((d)=>{
            let w = Date.parse(d.last_event_at ?? d.created_at ?? "");
            return {
                id: d.id,
                title: d.title ?? null,
                lastActive: Number.isNaN(w) ? undefined : w,
                workerStatus: d.worker_status === "running" || d.worker_status === "idle" || d.worker_status === "requires_action" ? d.worker_status : undefined,
                remoteControl: d.environment_kind === "bridge",
                unreachableFromHere: g && d.environment_kind === "bridge",
                ...GHn(d.external_metadata),
                ...d.environment_kind === "bridge" && d.connection_status === "disconnected" && {
                    offline: true
                }
            };
        });
        e.record(sessions, status.truncated, n);
        return {
            sessions,
            unavailable: undefined,
            ...status.truncated && {
                truncated: true
            }
        };
    })();
    e.begin(u, n);
    u.finally(()=>e.settle(u));
    return u;
}
function iOn(e) {
    {
        let { hasCloudPeerAccess } = import.meta.require("/$bunfs/root/chunk-3r25v0h1.js");
        if (!hasCloudPeerAccess()) {
            return;
        }
        return C.of(e).warm(S())?.sessions;
    }
}
const sAt = "target is an elevated-security session unreachable from a cloud session";
const iAt = "target session reports it cannot receive cross-session messages";
function Tro(e) {
    if (e.reason !== "denied") {
        return "handler_rewrite";
    }
    if (e.decisionReason?.type === "other") {
        if (e.decisionReason.reason === sAt) {
            return "bridge_auth";
        }
        if (e.decisionReason.reason === iAt) {
            return "recipient_gate_off";
        }
    }
    return "permission_denied";
}
function aAt(e, r, n) {
    try {
        if (!iOn(e)?.find((o)=>ar(o.id) === ar(r))?.unreachableFromHere) {
            return;
        }
        let { formatUnreachableElevatedRefusal } = import.meta.require("/$bunfs/root/chunk-9k4ckwrp.js");
        return formatUnreachableElevatedRefusal(n);
    } catch (error) {
        t(`[agents:cloud] warm unreachable lookup failed (${EH(l(error))}) \u2014 treating as not known unreachable`, {
            level: "warn"
        });
        return;
    }
}
const W3t = "can't receive cross-session messages (off in that session)";
function N0e(e, r, n) {
    try {
        let i = ar(r);
        if (!(iOn(e)?.some((o)=>ar(o.id) === i && o.acceptsPeerMessages === false) === true || sOn(e)?.some((o)=>ar(o.id) === i && o.acceptsPeerMessages === false) === true)) {
            return;
        }
        return `Not sent: '${n}' ${W3t} \u2014 its Claude would never see the message. That session is set not to accept cross-session messages (the feature is off on its platform, or a setting or policy there refuses them); reach that machine another way, or ask its user to enable it (listings refresh within a few minutes \u2014 re-run ListAgents after they do).`;
    } catch (error) {
        t(`[agents:cloud] warm cannot-receive lookup failed (${EH(l(error))}) \u2014 treating as unknown`, {
            level: "warn"
        });
        return;
    }
}
function aOn(e, r) {
    try {
        let n = ar(r);
        let i = iOn(e)?.find((o)=>ar(o.id) === n);
        let s = sOn(e)?.find((o)=>ar(o.id) === n);
        if (i !== undefined && !i.remoteControl || s !== undefined && AFe(s)) {
            return false;
        }
        if (s?.inboundReportUnavailable && i?.acceptsPeerMessages === undefined) {
            return false;
        }
        return !(i?.acceptsPeerMessages === true || s?.acceptsPeerMessages === true);
    } catch (error) {
        t(`[agents:cloud] warm inbound-report lookup failed (${EH(l(error))}) \u2014 treating as unreported`, {
            level: "warn"
        });
        return true;
    }
}
export { Tpr, vro, sot, nOn, rOn, B3t, oOn, sOn, Ero, kro, j3t, oAt, Gqe, iOn, sAt, iAt, Tro, aAt, W3t, N0e, aOn };
