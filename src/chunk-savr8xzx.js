import { d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { fp } from "/$bunfs/root/chunk-etbngzss.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ey, Gr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ec } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Fm } from "/$bunfs/root/chunk-52bcnmbr.js";
import { Go } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { rM } from "/$bunfs/root/chunk-88awaqqw.js";
import { w$, Wg } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Ak } from "/$bunfs/root/chunk-62g69mqc.js";
import { gK } from "/$bunfs/root/chunk-tn5qaff8.js";
import { fu } from "/$bunfs/root/chunk-r8t1dcyg.js";
const R = "tengu_tranquil_fern";
function f() {
    return Gr(R, true);
}
function Z$r() {
    return {
        source: "none",
        trustedMode: undefined,
        recordedMode: "absent"
    };
}
function t1o(e) {
    if (e.source !== "none") {
        return "restored";
    }
    if ((e.recordedMode === "plan" || e.transcriptOpen === true) && e.trustedMode !== "plan") {
        return "declined";
    }
    return "none";
}
function g(e) {
    if (e === undefined || e === null) {
        return "absent";
    }
    return typeof e === "string" && Fm(e) || "invalid";
}
function P(e) {
    return {
        ...rM(e.mode, "plan", e),
        mode: "plan"
    };
}
function S(e) {
    return {
        ...e,
        toolPermissionContext: P(e.toolPermissionContext)
    };
}
function _(e) {
    return f() && e.mode !== "plan" && gK.isEnabled() && !Go(e, gK);
}
function jHs(e, n, { forkSession, transcript } = {}) {
    n.recordedMode = g(e?.worker_permission_mode);
    if (n.recordedMode === "invalid") {
        t("[planModeResume] ignoring unrecognized internal_metadata.worker_permission_mode", {
            level: "warn"
        });
    }
    if (n.recordedMode === "plan" && transcript && f()) {
        n.recordTranscriptState = y5n(transcript);
    }
    return (r)=>{
        n.trustedMode ??= r.toolPermissionContext.mode;
        if (n.recordedMode !== "plan" || forkSession || !_(r.toolPermissionContext)) {
            return r;
        }
        n.source = "internal";
        t(`[planModeResume] re-entering plan mode from the prior worker's record (was ${r.toolPermissionContext.mode})`);
        return S(r);
    };
}
function eFr(e, n, { planModeOnResume, restored, restartedWorker }) {
    let a = Boolean(restored?.external || restored?.internal);
    if (restartedWorker && !a) {
        return;
    }
    e.enableWorkerPermissionModeRecord();
    if (planModeOnResume !== undefined && a) {
        e.notifyInternalMetadataChanged({
            worker_permission_mode: Ec(n)
        });
    }
}
function n1o(e, n, o, s) {
    let r = s && n.source === "none" && (n.recordedMode === "absent" || n.recordedMode === "invalid") && f() && y5n(e) === "open";
    if (r) {
        n.transcriptOpen = true;
    }
    o((a)=>{
        n.trustedMode ??= a.toolPermissionContext.mode;
        if (!r || a.toolPermissionContext.mode === "plan" || Go(a.toolPermissionContext, gK)) {
            return a;
        }
        n.source = "transcript";
        t(`[planModeResume] re-entering plan mode from the transcript's open plan segment (was ${a.toolPermissionContext.mode})`);
        return S(a);
    });
}
function y5n(e) {
    let n = `<${fp}>/plan</${fp}>`;
    let o = new Set;
    let s = new Set;
    let r = x(e);
    let a = false;
    let l = ()=>{
        if (a) {
            return "none";
        }
        return "open";
    };
    for(let M = e.length - 1; M >= 0; M--){
        let u = e[M];
        if (u.type === "attachment") {
            let p = u.attachment.type;
            if (p === "plan_mode" || p === "plan_mode_reentry") {
                return l();
            }
            if (p === "plan_mode_exit") {
                return "exited";
            }
        } else if (u.type === "assistant" && Array.isArray(u.message.content)) {
            let p = u.message.content;
            for(let c = p.length - 1; c >= 0; c--){
                let m = p[c];
                if (m.type !== "tool_use") {
                    continue;
                }
                if (m.name === fu && s.has(m.id) && !o.has(m.id) && !r.has(m.id)) {
                    return "exited";
                }
                if (m.name === Ak && s.has(m.id) && (!o.has(m.id) || r.has(m.id))) {
                    return l();
                }
            }
        } else if (u.type === "user" && w$(u)) {
            let p = u.message.content;
            if (Array.isArray(p)) {
                for (let c of p){
                    if (c.type === "tool_result") {
                        (c.is_error || y(u, c.content) ? o : s).add(c.tool_use_id);
                    }
                }
            }
        } else if (u.type === "user") {
            if (Wg(u)?.trimStart().startsWith(n)) {
                return l();
            }
            if (u.permissionMode === "plan") {
                return l();
            }
            if (u.permissionMode !== undefined && !u.isMeta && ey(u.origin)) {
                a = true;
            }
        }
    }
    return "none";
}
function x(e) {
    let n = new Set;
    let o = new Set;
    for (let s of e){
        if (s.type !== "assistant" || !Array.isArray(s.message.content)) {
            continue;
        }
        for (let r of s.message.content){
            if (r.type !== "tool_use") {
                continue;
            }
            if (n.has(r.id)) {
                o.add(r.id);
            } else {
                n.add(r.id);
            }
        }
    }
    return o;
}
function y({ toolUseResult }, content) {
    if (toolUseResult !== null && typeof toolUseResult === "object" && toolUseResult.awaitingLeaderApproval === true) {
        return true;
    }
    return typeof content === "string" && content.startsWith("Your plan has been submitted to the team lead");
}
function _5n({ sdkUrl, permissionModeSuppliedOnInvocation, forkSession }) {
    if (!gK.isEnabled() || forkSession) {
        return false;
    }
    return !!sdkUrl || permissionModeSuppliedOnInvocation === false;
}
function tFr(e, n, o) {
    let s = Z$r();
    n1o(e, s, o, _5n(n));
    nFr(s, {
        lane: n.sdkUrl ? "sdk_url" : "print",
        hadExternal: false,
        hadInternal: false
    });
    return t1o(s);
}
function b5n(e, n, { lane, forkSession, transcript }) {
    let a = Z$r();
    n(jHs(e?.internal, a, {
        forkSession,
        transcript: transcript?.messages
    }));
    if (transcript) {
        n1o(transcript.sourceRows, a, n, transcript.sourceAllowed);
    }
    nFr(a, {
        lane,
        hadExternal: !!e?.external,
        hadInternal: !!e?.internal
    });
    return t1o(a);
}
function JBs(e, { storedPermissionMode, messages, forkSession, startupModePinned, lane }) {
    let l = Z$r();
    l.trustedMode = e.mode;
    l.recordedMode = g(storedPermissionMode);
    if (!startupModePinned && !forkSession && _(e)) {
        if (l.recordedMode === "plan") {
            l.recordTranscriptState = y5n(messages);
            if (l.recordTranscriptState !== "exited") {
                l.source = "stored";
            }
        } else if ((l.recordedMode === "absent" || l.recordedMode === "invalid") && y5n(messages) === "open") {
            l.transcriptOpen = true;
            l.source = "transcript";
        }
    }
    nFr(l, {
        lane,
        hadExternal: false,
        hadInternal: false
    });
    if (l.source === "none") {
        return;
    }
    t(`[planModeResume] re-entering plan mode on resume (source: ${l.source}, was ${e.mode})`);
    return P(e);
}
function nFr(e, { lane, hadExternal, hadInternal }) {
    let r = e.source === "none" ? e.trustedMode : "plan";
    i("tengu_worker_permission_mode_restore", {
        source: d(e.source),
        lane: d(lane),
        trusted_mode: pe(e.trustedMode),
        recorded_mode: d(e.recordedMode),
        target_mode: pe(r),
        had_external: hadExternal,
        had_internal: hadInternal,
        guard_enabled: f(),
        ...e.recordTranscriptState && {
            record_transcript_state: d(e.recordTranscriptState)
        },
        ...e.transcriptOpen && {
            transcript_open: true
        }
    });
}
export { Z$r, t1o, jHs, eFr, n1o, y5n, _5n, tFr, b5n, JBs, nFr };
