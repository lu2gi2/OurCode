import { sd } from "/$bunfs/root/chunk-ctt36bn8.js";
import { no, nu, ar, Sq } from "/$bunfs/root/chunk-c56kpkt7.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Ec } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Ly, lxe } from "/$bunfs/root/chunk-6g4165br.js";
import { uOt, m1n } from "/$bunfs/root/chunk-0ycjphb5.js";
import { tFn, nFn } from "/$bunfs/root/chunk-xpqgtv5j.js";
function l(e, r) {
    let dropSenderWriterByHandle = no().dropSenderWriterByHandle;
    if (e !== null && e !== r) {
        let o = dropSenderWriterByHandle.get(e);
        if (o) {
            nFn(o);
        }
    }
    if (r !== null && r !== e && !r.outboundOnly) {
        let o = dropSenderWriterByHandle.get(r);
        if (!o) {
            o = (s)=>{
                r.writeSdkMessages([
                    s
                ]);
            };
            dropSenderWriterByHandle.set(r, o);
        }
        tFn(o);
    }
}
function a9t(e, r) {
    let n = no();
    let o = f(e);
    let n_sdkHostedHandle = n.sdkHostedHandle;
    n.sdkHostedHandle = o;
    m1n(o ? nu(o.bridgeSessionId) : null, r).catch(()=>{});
    n.lastReportedPermissionMode = undefined;
    n.lastKnownPermissionMode = undefined;
    n.lastReportedEffort = undefined;
    n.lastKnownEffort = undefined;
    n.lastReportedModel = undefined;
    n.lastKnownModel = undefined;
    n.contextUsageMirror = undefined;
    n.lastReportedArtifacts = undefined;
    n.lastKnownArtifacts = undefined;
    n.artifactsEgressSuppressed = undefined;
    n.lastReportedCrossSessionInbound = undefined;
    n.lastKnownCrossSessionInbound = undefined;
    n.lastKnownPostTurnSummary = undefined;
    l(n_sdkHostedHandle, o);
}
function bw() {
    return no().sdkHostedHandle;
}
function bDn(e, r) {
    let n = no();
    let o = f(e);
    let n_replHandle = n.replHandle;
    n.replHandle = o;
    n.lastReportedPermissionMode = undefined;
    n.lastKnownPermissionMode = undefined;
    n.lastReportedEffort = undefined;
    n.lastKnownEffort = undefined;
    n.lastReportedModel = undefined;
    n.lastKnownModel = undefined;
    n.contextUsageMirror = undefined;
    n.lastReportedArtifacts = undefined;
    n.lastKnownArtifacts = undefined;
    n.artifactsEgressSuppressed = undefined;
    n.lastReportedCrossSessionInbound = undefined;
    n.lastKnownCrossSessionInbound = undefined;
    n.lastKnownPostTurnSummary = undefined;
    l(n_replHandle, o);
    let i = o ? nu(o.bridgeSessionId) : undefined;
    if (i !== undefined) {
        process.env.CLAUDE_CODE_BRIDGE_SESSION_ID = i;
    } else {
        delete process.env.CLAUDE_CODE_BRIDGE_SESSION_ID;
    }
    m1n(i ?? null, r).catch(()=>{});
}
function Sc() {
    return no().replHandle;
}
function xgr(e, r) {
    let n = no();
    n.retiredHandles.add(e);
    if (n.replHandle === e) {
        bDn(null, r);
    }
    if (n.sdkHostedHandle === e) {
        a9t(null, r);
    }
}
function ILe(e, is_ultraplan_mode) {
    let n = no();
    let o = n.replHandle ?? n.sdkHostedHandle;
    if (!o || o.outboundOnly) {
        return;
    }
    n.lastKnownPermissionMode = e;
    if (e === "bypassPermissions") {
        return;
    }
    let permission_mode = Ec(e);
    if (n.lastReportedPermissionMode === permission_mode) {
        return;
    }
    n.lastReportedPermissionMode = permission_mode;
    o.reportMetadata({
        permission_mode,
        ...is_ultraplan_mode !== undefined && {
            is_ultraplan_mode
        }
    });
}
function Zao() {
    let e = no();
    e.lastReportedPermissionMode = undefined;
    if (e.lastKnownPermissionMode !== undefined) {
        ILe(e.lastKnownPermissionMode);
    }
}
function elo() {
    return no().lastKnownPermissionMode;
}
function tlo(bridgeSessionId, storageV5, owner) {
    let o = Sq(bridgeSessionId);
    if (!o) {
        t("[bridge] supervised session id refused (not a safe bridge id) — this child has no Remote Control identity for the peer surface", {
            level: "warn"
        });
    }
    no().supervisedBridgeSession = o ? {
        bridgeSessionId,
        owner,
        storageV5,
        selfTitle: undefined
    } : null;
    m1n(o ? nu(bridgeSessionId) : null, storageV5).catch(()=>{});
}
function l9t() {
    return no().supervisedBridgeSession?.bridgeSessionId;
}
function nlo(e) {
    let supervisedBridgeSession = no().supervisedBridgeSession;
    if (supervisedBridgeSession === null || Sc() !== null || bw() !== null) {
        return;
    }
    supervisedBridgeSession.selfTitle = u(e);
    if (supervisedBridgeSession.selfTitle !== undefined) {
        uOt(supervisedBridgeSession.selfTitle, supervisedBridgeSession.storageV5).catch(c);
    }
}
function u(e) {
    if (typeof e === "string" && Ly(e) !== "") {
        return e;
    }
}
function d(host) {
    let credential = mNs();
    let n = no();
    let n_peerIdentityKey = n.peerIdentityKey;
    if (n_peerIdentityKey !== null && n_peerIdentityKey.host === host && n_peerIdentityKey.credential === credential) {
        return n_peerIdentityKey;
    }
    let s = {
        host,
        credential
    };
    n.peerIdentityKey = s;
    return s;
}
function mNs() {
    let { sameOwnerAccount } = import.meta.require("/$bunfs/root/chunk-mt5pc6ed.js");
    let owner = m();
    let n = no();
    let n_walkCredentialKey = n.walkCredentialKey;
    if (n_walkCredentialKey !== null && sameOwnerAccount(n_walkCredentialKey.owner, owner)) {
        return n_walkCredentialKey;
    }
    let s = {
        owner
    };
    n.walkCredentialKey = s;
    return s;
}
function m() {
    let { sessionsApiBearerFingerprint } = import.meta.require("/$bunfs/root/chunk-bre4wk3b.js");
    let { getStoredOauthAccountInfo } = import.meta.require("/$bunfs/root/chunk-mt5pc6ed.js");
    let { env } = import.meta.require("/$bunfs/root/chunk-thze5wqx.js");
    let o = sessionsApiBearerFingerprint();
    return {
        accountUuid: o ? `bearer:${o}` : undefined,
        organizationUuid: env.CLAUDE_CODE_ORGANIZATION_UUID || getStoredOauthAccountInfo()?.organizationUuid
    };
}
async function rlo({ refresh, credentials }) {
    let { isCrossSessionMessagingEnabled } = import.meta.require("/$bunfs/root/chunk-zwrgz0na.js");
    if (!isCrossSessionMessagingEnabled()) {
        return;
    }
    if (!(Sc() !== null || bw() !== null || no().supervisedBridgeSession !== null)) {
        let { hasCloudPeerAccess } = import.meta.require("/$bunfs/root/chunk-3r25v0h1.js");
        if (!hasCloudPeerAccess()) {
            return;
        }
    }
    let { primeSessionsApiBearer } = import.meta.require("/$bunfs/root/chunk-bre4wk3b.js");
    let i = primeSessionsApiBearer({
        refresh,
        credentials
    }).catch(()=>{});
    if (refresh) {
        await i;
        return;
    }
    let { withDeadline } = import.meta.require("/$bunfs/root/chunk-vgr5k6hf.js");
    await withDeadline(i, S);
}
var S = 750;
function Cst() {
    let e = Sc() ?? bw();
    if (e) {
        return {
            key: d(e),
            bridgeSessionId: e.bridgeSessionId,
            selfTitle: e.selfTitle,
            live: sd()
        };
    }
    let supervisedBridgeSession = no().supervisedBridgeSession;
    if (supervisedBridgeSession) {
        return {
            key: d(supervisedBridgeSession),
            bridgeSessionId: supervisedBridgeSession.bridgeSessionId,
            selfTitle: supervisedBridgeSession.selfTitle,
            live: true
        };
    }
    return null;
}
function TCt(e) {
    let r = no();
    let n = r.replHandle ?? r.sdkHostedHandle;
    if (!n || n.outboundOnly) {
        return;
    }
    r.lastKnownCrossSessionInbound = e;
    let cross_session_inbound = e ? "available" : "unavailable";
    if (r.lastReportedCrossSessionInbound === cross_session_inbound) {
        return;
    }
    r.lastReportedCrossSessionInbound = cross_session_inbound;
    n.reportMetadata({
        cross_session_inbound
    });
}
function olo() {
    let e = no();
    e.lastReportedCrossSessionInbound = undefined;
    if (e.lastKnownCrossSessionInbound !== undefined) {
        TCt(e.lastKnownCrossSessionInbound);
    }
}
function a(e) {
    let r = no();
    let n = r.replHandle ?? r.sdkHostedHandle;
    let r_remoteEgressSuppressed = r.remoteEgressSuppressed;
    if (!n || n.outboundOnly || n.noHistoryBackfill || r_remoteEgressSuppressed === null || r_remoteEgressSuppressed()) {
        return;
    }
    r.lastKnownPostTurnSummary = e;
    n.reportMetadata({
        post_turn_summary: e
    });
}
function OLe(e, r, n) {
    let o = {
        post_turn_summary: r
    };
    if (n) {
        e?.notifyMetadataChanged(o, n);
    } else {
        e?.notifyMetadataChanged(o);
    }
    if (e?.onMetadataChanged) {
        return;
    }
    try {
        a(r);
    } catch (error) {
        c(error);
    }
}
function slo() {
    no().lastKnownPostTurnSummary = null;
}
function ilo() {
    let lastKnownPostTurnSummary = no().lastKnownPostTurnSummary;
    if (lastKnownPostTurnSummary) {
        a(lastKnownPostTurnSummary);
    }
}
function Nce(model) {
    let r = no();
    let n = r.replHandle ?? r.sdkHostedHandle;
    if (!n || n.outboundOnly) {
        return;
    }
    r.lastKnownModel = model;
    if (r.lastReportedModel === model) {
        return;
    }
    r.lastReportedModel = model;
    n.reportMetadata({
        model
    });
}
function alo() {
    let e = no();
    e.lastReportedModel = undefined;
    if (e.lastKnownModel !== undefined) {
        Nce(e.lastKnownModel);
    }
}
function llo() {
    no().contextUsageMirror?.resend();
}
function Pgr(e, r) {
    let n = no();
    let o = n.replHandle ?? n.sdkHostedHandle;
    let s = _(e);
    if (!o || o.outboundOnly || o.noHistoryBackfill || r() || n.lastReportedArtifacts === s || e.length === 0 && n.lastKnownArtifacts === undefined) {
        return;
    }
    n.lastKnownArtifacts = e;
    n.lastReportedArtifacts = s;
    n.artifactsEgressSuppressed = r;
    o.reportMetadata({
        artifacts: e.length === 0 ? null : e
    });
}
function clo() {
    let e = no();
    e.lastReportedArtifacts = undefined;
    if (e.lastKnownArtifacts && e.artifactsEgressSuppressed) {
        Pgr(e.lastKnownArtifacts, e.artifactsEgressSuppressed);
    }
}
function SDn() {
    let e = Cst();
    if (e) {
        return nu(e.bridgeSessionId);
    }
}
function c9t() {
    let e = SDn();
    if (e) {
        return lxe(e);
    }
}
function d9t() {
    let e = Sc();
    if (e && !e.outboundOnly) {
        return nu(e.bridgeSessionId);
    }
}
function dlo() {
    return Cst()?.selfTitle;
}
function MLe(e, r) {
    let n = Sc() ?? bw();
    if (n && ar(n.bridgeSessionId) === ar(e)) {
        n.selfTitle = u(r);
    }
}
function f(e) {
    if (e !== null && no().retiredHandles.has(e)) {
        return null;
    }
    return e;
}
export { a9t, bw, bDn, Sc, xgr, ILe, Zao, elo, tlo, l9t, nlo, mNs, rlo, Cst, TCt, olo, OLe, slo, ilo, Nce, alo, llo, Pgr, clo, SDn, c9t, d9t, dlo, MLe };
