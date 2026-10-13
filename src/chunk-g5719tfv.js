import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { q } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Q, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { LY } from "/$bunfs/root/chunk-d2sd20y7.js";
import { ZDn } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { H1t, MQe } from "/$bunfs/root/chunk-znp8166p.js";
import { o, E, M, _t } from "/$bunfs/root/chunk-smx21d0k.js";
import { createHash, randomUUID, timingSafeEqual } from "crypto";
const subtype = "workflow_launch_result";
const W = 4194304;
const D = "/.workflow/";
const Q1s = "CLAUDE_CODE_WORKFLOW_LAUNCH_SHA256";
const ee = /^(?!\.+$)[A-Za-z0-9._-]{1,128}$/;
function T(e) {
    let t = (l)=>({
            ok: false,
            error: l
        });
    let e_filestore_path = e.filestore_path;
    if (typeof e_filestore_path !== "string" || e_filestore_path.length === 0) {
        return t("filestore_path is missing or not a non-empty string");
    }
    if (!e_filestore_path.startsWith(D) || !ee.test(e_filestore_path.slice(D.length))) {
        return t(`filestore_path must name one object directly under ${D}`);
    }
    let e_artifact_sha256 = e.artifact_sha256;
    if (typeof e_artifact_sha256 !== "string" || !/^[0-9a-f]{64}$/.test(e_artifact_sha256)) {
        return t("artifact_sha256 is missing or not 64 lowercase hex chars");
    }
    let e_bundle_size_bytes = e.bundle_size_bytes;
    if (typeof e_bundle_size_bytes !== "number" || !Number.isSafeInteger(e_bundle_size_bytes) || e_bundle_size_bytes <= 0) {
        return t("bundle_size_bytes is missing or not a positive integer");
    }
    if (e_bundle_size_bytes > W) {
        return t(`bundle_size_bytes exceeds ${W}`);
    }
    let workflowName = typeof e.workflow_name === "string" ? e.workflow_name.replace(/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g, "").slice(0, 200) : "";
    let sessionOrigin = e.session_origin === undefined ? undefined : e.session_origin === "review" ? "review" : "other";
    return {
        ok: true,
        pointer: {
            workflowName,
            filestorePath: e_filestore_path,
            artifactSha256: e_artifact_sha256,
            bundleSizeBytes: e_bundle_size_bytes,
            sessionOrigin
        }
    };
}
function te(e, artifactSha256) {
    let r = createHash("sha256").update(e).digest();
    let n = Buffer.from(artifactSha256, "hex");
    return n.length === r.length && timingSafeEqual(r, n);
}
const F = 1;
function re(e) {
    let t = (c)=>({
            ok: false,
            error: c
        });
    if (e.length < 1) {
        return t("bundle is empty");
    }
    if (e[0] !== F) {
        return t(`unsupported bundle format version ${e[0]} (expected ${F})`);
    }
    let r = 1;
    let n = (c, l)=>{
        if (r + 8 > e.length) {
            return {
                ok: false,
                error: `bundle truncated in ${l} length frame`
            };
        }
        let L = e.readBigUInt64BE(r);
        r += 8;
        if (L > BigInt(c)) {
            return {
                ok: false,
                error: `${l} frame exceeds ${c} bytes`
            };
        }
        let h = Number(L);
        if (r + h > e.length) {
            return {
                ok: false,
                error: `bundle truncated in ${l} frame`
            };
        }
        let buf = e.subarray(r, r + h);
        r += h;
        return {
            ok: true,
            buf
        };
    };
    let s = n(ZDn, "script");
    if (!s.ok) {
        return t(s.error);
    }
    if (s.buf.length === 0) {
        return t("script frame is empty");
    }
    let u = n(W, "args_json");
    if (!u.ok) {
        return t(u.error);
    }
    if (r !== e.length) {
        return t(`bundle has ${e.length - r} trailing bytes`);
    }
    return {
        ok: true,
        script: s.buf.toString("utf8"),
        argsJson: u.buf.toString("utf8")
    };
}
function Z1s(restoredRecord = null) {
    return {
        ledger: new Map,
        firstLaunch: null,
        restoredRecord
    };
}
const z = 2;
const ne = p(()=>_t({
        event_uuid: o().refine((e)=>Jt(e) !== null),
        dispatched_epoch: E().int().min(0).max(Number.MAX_SAFE_INTEGER),
        attempts: E().int().min(1).max(Number.MAX_SAFE_INTEGER),
        settled: M()
    }));
function ejs(e) {
    let t = ne().safeParse(e);
    if (!t.success) {
        return null;
    }
    let r = T(t.data);
    if (!r.ok) {
        return null;
    }
    return {
        event_uuid: t.data.event_uuid,
        filestore_path: r.pointer.filestorePath,
        artifact_sha256: r.pointer.artifactSha256,
        bundle_size_bytes: r.pointer.bundleSizeBytes,
        workflow_name: r.pointer.workflowName,
        dispatched_epoch: t.data.dispatched_epoch,
        attempts: t.data.attempts,
        settled: t.data.settled
    };
}
class H {
    slots = new Map;
    stash(e, t) {
        this.slots.set(e, t);
    }
    take(e) {
        let t = this.slots.get(e);
        this.slots.delete(e);
        return t;
    }
}
const L9n = new q(()=>new H);
const oe = 5000;
async function B(e) {
    return await Ge(Promise.resolve().then(()=>e.flushRecord()).catch(()=>false), e.recordFlushBoundMs ?? oe) === true;
}
const se = [
    1000,
    3000
];
const ie = 10000;
function I(e, artifact_line, r) {
    let n = {
        type: "system",
        subtype,
        artifact_line,
        uuid: randomUUID(),
        session_id: e.getSessionId()
    };
    if (r.launchUuid !== undefined) {
        n.launch_uuid = r.launchUuid;
    }
    if (r.artifactSha256 !== undefined) {
        n.artifact_sha256 = r.artifactSha256;
    }
    e.postEvent(n);
}
function K(e, layer, r, n) {
    I(e, H1t(layer, r), n);
    J("warn", "workflow_launch_failed", {
        layer
    });
    i("tengu_workflow_launch_event", {
        ok: false,
        layer: d(layer)
    });
}
function O(e, t, r, n) {
    K(e, t, r, n);
    m("workflow_event_launch", t);
}
function b(e, eventUuid, r, n, s) {
    O(e, r, n, s);
    e.state.ledger.set(eventUuid, {
        eventUuid,
        outcome: "failed-final"
    });
    e.ackProcessed(eventUuid);
}
async function x(e, t, r, n, s) {
    let t_event_uuid = t.event_uuid;
    e.state.ledger.set(t_event_uuid, {
        eventUuid: t_event_uuid,
        outcome: "failed-final"
    });
    e.persistRecord({
        ...t,
        settled: true
    });
    await B(e);
    O(e, r, n, s);
    e.ackProcessed(t_event_uuid);
}
async function Y(e, t, r, n, s) {
    let { ledger } = e.state;
    let t_eventUuid = t.eventUuid;
    let l = (s?.attempts ?? 0) + 1;
    let L = (settled)=>({
            event_uuid: t_eventUuid,
            filestore_path: r.filestorePath,
            artifact_sha256: r.artifactSha256,
            bundle_size_bytes: r.bundleSizeBytes,
            workflow_name: r.workflowName,
            dispatched_epoch: e.getWorkerEpoch() ?? 0,
            attempts: l,
            settled
        });
    let h = ()=>{
        if (e.state.firstLaunch === t) {
            e.state.firstLaunch = null;
        }
    };
    let w = async (_, N)=>{
        h();
        if (s) {
            await x(e, s, _, N, n);
            return;
        }
        b(e, t_eventUuid, _, N, n);
    };
    let S = Date.now();
    let R = e.fetchRetryWindowMs ?? ie;
    let k = await e.fetchBundle(r.filestorePath);
    let attempt = 1;
    for (let _ of e.fetchRetryDelaysMs ?? se){
        if (k.ok || k.gated || Date.now() - S + _ >= R) {
            break;
        }
        attempt++;
        J("warn", "workflow_launch_bundle_fetch_retry", {
            attempt
        });
        await Q(_);
        k = await e.fetchBundle(r.filestorePath);
    }
    if (!k.ok) {
        if (k.gated) {
            await w("bundle-fetch", `bundle fetch gated: ${k.error}`);
            return;
        }
        ledger.delete(t_eventUuid);
        h();
        if (s) {
            J("warn", "workflow_launch_rescue_fetch_failed", {});
            f("workflow_event_launch", "rescue_fetch_transient");
            return;
        }
        K(e, "bundle-fetch", `bundle fetch failed: ${k.error}`, n);
        f("workflow_event_launch", "bundle_fetch_transient");
        return;
    }
    let k_buf = k.buf;
    if (k_buf.byteLength > W || k_buf.byteLength !== r.bundleSizeBytes) {
        await w("payload-digest-mismatch", `staged bundle is ${k_buf.byteLength} bytes, event pinned ${r.bundleSizeBytes}`);
        return;
    }
    if (!te(k_buf, r.artifactSha256)) {
        await w("payload-digest-mismatch", "staged bundle sha256 does not match the artifact_sha256 the event pinned");
        return;
    }
    let v = re(k_buf);
    if (!v.ok) {
        await w("launch-payload", v.error);
        return;
    }
    let args;
    if (v.argsJson !== "") {
        try {
            args = JSON.parse(v.argsJson);
        } catch (error) {
            await w("args-parse", `args_json is not valid JSON: ${error instanceof Error ? error.message : String(error)}`);
            return;
        }
    }
    e.state.firstLaunch = t;
    e.persistRecord(L(false));
    let j = await B(e);
    if (s && !j) {
        ledger.delete(t_eventUuid);
        h();
        J("warn", "workflow_launch_rescue_uncounted", {});
        f("workflow_event_launch", "rescue_record_unconfirmed");
        return;
    }
    let A = randomUUID();
    L9n.of(e.host).stash(A, {
        script: v.script,
        args,
        eventSessionOrigin: r.sessionOrigin,
        postResultLine: (_)=>I(e, _, n),
        onRunSettled: async (_)=>{
            t.outcome = _ ? "executed" : "run-failed";
            e.persistRecord(L(true));
            if (!await B(e)) {
                e.persistRecord(L(true));
            }
        }
    });
    e.prependUserMessage(`/workflow-launch-exec ${A}`);
    e.ackProcessed(t_eventUuid);
    i("tengu_workflow_launch_event", {
        ok: true,
        attempt: l
    });
    g("workflow_event_launch");
    J("info", "workflow_launch_dispatched", {
        attempt: l
    });
}
function X(e, t) {
    let r = {
        eventUuid: t.event_uuid,
        outcome: "failed-final"
    };
    e.state.ledger.set(t.event_uuid, r);
    e.state.firstLaunch ??= r;
    e.persistRecord({
        ...t,
        settled: true
    });
    e.ackProcessed(t.event_uuid);
    J("warn", "workflow_launch_attempts_spent", {
        attempts: t.attempts
    });
    f("workflow_event_launch", "attempts_spent");
}
async function tjs(e, t) {
    let r = typeof e.uuid === "string" ? e.uuid : undefined;
    if (!r) {
        O(t, "launch-payload", "event has no uuid", {});
        return;
    }
    let { ledger } = t.state;
    let s = ledger.get(r);
    if (s) {
        if (s.outcome !== "pending") {
            t.ackProcessed(r);
        }
        return;
    }
    if (!t.isRemoteTransport() || !a.CLAUDE_CODE_REMOTE || !a.CLAUDE_CODE_REMOTE_SESSION_ID) {
        O(t, "not-remote-session", "workflow_launch received outside a remote (CCR) session", {
            launchUuid: r
        });
        return;
    }
    let u = T(e);
    if (!u.ok) {
        b(t, r, "launch-payload", u.error, {
            launchUuid: r
        });
        return;
    }
    let u_pointer = u.pointer;
    let l = {
        launchUuid: r,
        artifactSha256: u_pointer.artifactSha256
    };
    let restoredRecord = t.state.restoredRecord;
    let h = restoredRecord && restoredRecord.event_uuid === r ? restoredRecord : null;
    if (h) {
        if (h.settled) {
            let k = {
                eventUuid: r,
                outcome: "executed"
            };
            ledger.set(r, k);
            t.state.firstLaunch ??= k;
            t.ackProcessed(r);
            J("info", "workflow_launch_redelivery_settled", {});
            return;
        }
        if (h.attempts >= z) {
            X(t, h);
            return;
        }
    }
    let w = MQe({
        serverAuthoredCarrier: true,
        eventSessionOrigin: u_pointer.sessionOrigin
    });
    if (w) {
        if (h) {
            await x(t, h, "policy-gate", w, l);
            return;
        }
        b(t, r, "policy-gate", w, l);
        return;
    }
    let { firstLaunch } = t.state;
    if (firstLaunch && firstLaunch.eventUuid !== r) {
        b(t, r, "launch-protocol", "a second distinct workflow_launch event arrived in this session; at most one launch per session is permitted", l);
        return;
    }
    let R = {
        eventUuid: r,
        outcome: "pending"
    };
    ledger.set(r, R);
    t.state.firstLaunch = R;
    await Y(t, R, u_pointer, l, h);
}
async function njs(e) {
    let restoredRecord = e.state.restoredRecord;
    if (!restoredRecord) {
        return;
    }
    if (!e.isRemoteTransport() || !a.CLAUDE_CODE_REMOTE || !a.CLAUDE_CODE_REMOTE_SESSION_ID) {
        return;
    }
    if (restoredRecord.settled) {
        J("info", "workflow_launch_resume_skipped", {
            reason: "settled"
        });
        return;
    }
    let r = e.getWorkerEpoch();
    if (r === undefined || restoredRecord.dispatched_epoch >= r) {
        J("info", "workflow_launch_resume_skipped", {
            reason: "not_a_later_epoch"
        });
        return;
    }
    let n = e.getDispatchedDigest();
    if (n === undefined || !/^[0-9a-f]{64}$/.test(n) || n !== restoredRecord.artifact_sha256) {
        J("info", "workflow_launch_resume_skipped", {
            reason: n === undefined ? "no_server_digest" : "digest_differs"
        });
        return;
    }
    let { ledger } = e.state;
    if (ledger.has(restoredRecord.event_uuid) || e.state.firstLaunch) {
        return;
    }
    if (restoredRecord.attempts >= z) {
        X(e, restoredRecord);
        return;
    }
    let u = {
        launchUuid: restoredRecord.event_uuid,
        artifactSha256: restoredRecord.artifact_sha256
    };
    let c = MQe({
        serverAuthoredCarrier: true
    });
    if (c) {
        if (!e.isAccountLaunchedReview() && LY() && MQe({
            serverAuthoredCarrier: true,
            eventSessionOrigin: "review"
        }) === null) {
            J("info", "workflow_launch_resume_skipped", {
                reason: "needs_event_origin"
            });
            return;
        }
        await x(e, restoredRecord, "policy-gate", c, u);
        return;
    }
    let l = {
        eventUuid: restoredRecord.event_uuid,
        outcome: "pending"
    };
    ledger.set(restoredRecord.event_uuid, l);
    e.state.firstLaunch = l;
    J("info", "workflow_launch_resuming", {
        attempt: restoredRecord.attempts + 1
    });
    await Y(e, l, {
        workflowName: restoredRecord.workflow_name,
        filestorePath: restoredRecord.filestore_path,
        artifactSha256: restoredRecord.artifact_sha256,
        bundleSizeBytes: restoredRecord.bundle_size_bytes
    }, u, restoredRecord);
}
export { Q1s, Z1s, ejs, L9n, tjs, njs };
