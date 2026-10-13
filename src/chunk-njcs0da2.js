import { K } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { sh, Oi, $o, oA, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Dte, QZe, cHe, hT } from "/$bunfs/root/chunk-kasbfbhj.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { yde } from "/$bunfs/root/chunk-gr4a0fky.js";
import { x3n, P3n, jFt, I3n, Ove, O3n, M3n, TJe, WUo, zUo, GUo, H3n, Tie, jNr, D3n, _pn, Lgt, bpn } from "/$bunfs/root/chunk-sfjcyk7w.js";
import { Sft, Dwe, bqn, wqn, _Lt } from "/$bunfs/root/chunk-5eqja8yr.js";
import { w6, yIe } from "/$bunfs/root/chunk-7atx1jm0.js";
import { ye } from "/$bunfs/root/chunk-tybndaby.js";
const H = 65536;
function J(e) {
    return Buffer.byteLength(Oi(Oi(e)).slice(1, -1));
}
function O(e) {
    let r = Oi(e).slice(1, -1);
    return Buffer.byteLength(Oi(r).slice(1, -1));
}
function j(e) {
    let r = bqn(e);
    if (r <= Dwe) {
        return {
            payload: e,
            trim: null
        };
    }
    using k = sh`fitFeedbackPayloadToBudget(${r})`;
    let o = r - (Dwe - H);
    let s = e.transcript.map((n)=>J(n) + 1);
    let p = s.reduce((acc, item)=>acc + item, 0);
    let w = e.rawTranscriptJsonl === undefined ? 0 : O(e.rawTranscriptJsonl);
    let D = o <= p ? p - o : Math.max(0, p - Math.max(0, o - w));
    let { start, keptBytes, oversized } = wqn(s, D);
    let l = e.transcript.slice(start);
    let M = oversized.size === 0 ? l : l.filter((n, y)=>!oversized.has(start + y));
    let R = o - (p - keptBytes);
    let e_rawTranscriptJsonl = e.rawTranscriptJsonl;
    let rawTail = e_rawTranscriptJsonl === undefined ? "absent" : "untouched";
    if (R > 0 && e_rawTranscriptJsonl !== undefined) {
        let n = w - R;
        if (n <= 0) {
            e_rawTranscriptJsonl = undefined;
            rawTail = "omitted";
        } else {
            let y = e_rawTranscriptJsonl.split(`
`);
            let x = y.map((E)=>O(E + `
`));
            let { start: start_1, oversized: oversized_1 } = wqn(x, n);
            let P = y.slice(start_1);
            let L = (oversized_1.size === 0 ? P : P.filter((E, q)=>!oversized_1.has(start_1 + q))).join(`
`);
            if (L === "") {
                e_rawTranscriptJsonl = undefined;
                rawTail = "omitted";
            } else {
                e_rawTranscriptJsonl = L;
                rawTail = "reduced";
            }
        }
    }
    let trim = {
        keptMessageCount: M.length,
        totalMessageCount: e.transcript.length,
        oversizedMessageCount: oversized.size,
        rawTail,
        rawTailKeptBytes: e_rawTranscriptJsonl === undefined ? 0 : Buffer.byteLength(e_rawTranscriptJsonl)
    };
    let v = W(trim);
    if (v === null) {
        return {
            payload: e,
            trim: null
        };
    }
    let { rawTranscriptJsonl, ...rest } = e;
    let F = {
        ...rest,
        message_count: M.length,
        description: `${e.description}
${v}`,
        transcript: M,
        ...e_rawTranscriptJsonl !== undefined && {
            rawTranscriptJsonl: e_rawTranscriptJsonl
        }
    };
    let C = bqn(F);
    if (C > Dwe) {
        t(`fitFeedbackPayloadToBudget: still ${C} bytes after trim (budget ${Dwe})`, {
            level: "error"
        });
    }
    return {
        payload: F,
        trim
    };
}
function W(trim) {
    let r = [];
    if (trim.keptMessageCount < trim.totalMessageCount) {
        r.push(`kept ${trim.keptMessageCount} of ${trim.totalMessageCount} transcript messages (newest kept first)`);
    }
    if (trim.rawTail === "reduced") {
        r.push(`kept ${Math.max(1, Math.round(trim.rawTailKeptBytes / 1024))} KiB of the raw session log (newest kept first)`);
    } else if (trim.rawTail === "omitted") {
        r.push("omitted the raw session log");
    }
    if (r.length === 0) {
        return null;
    }
    return `transcript_truncated: ${r.join("; ")} (trimmed client-side to fit the upload size limit)`;
}
function V(draft, r = "panel") {
    let k = TJe(draft.request_ids);
    let o = M3n(draft.area);
    let s = WUo(draft.failure_mode);
    let p = zUo(draft.task_category);
    let w = H3n(draft.effort);
    let D = GUo(draft.thinking_type);
    let h = Tie(draft.thinking_budget);
    let _ = Tie(draft.message_count);
    let f = Tie(draft.assistant_turn_count);
    let l = Tie(draft.subagent_count);
    return [
        `[${draft.type}] ${jFt(draft.title)}`,
        "",
        I3n(draft.details),
        "",
        "---",
        r === "card_send_as_is" ? "Drafted by Claude via the SendFeedback tool; approved by the user from the above-prompt card without full review." : "Drafted by Claude via the SendFeedback tool; reviewed and approved by the user before sending.",
        `trigger: ${draft.trigger}`,
        ...o !== undefined ? [
            `area: ${o}`
        ] : [],
        ...s !== undefined ? [
            `failure_mode: ${s}`
        ] : [],
        ...p !== undefined ? [
            `task_category: ${p}`
        ] : [],
        `draft_id: ${draft.draft_id}`,
        `drafted_at: ${draft.created_at}`,
        `source_session_id: ${draft.source_session_id}`,
        `model: ${O3n(draft.model)}`,
        `cli_version: ${Ove(draft.cli_version, x3n)}`,
        `os: ${Ove(draft.os, P3n)}`,
        ...w !== undefined ? [
            `effort: ${w}`
        ] : [],
        ...D !== undefined ? [
            `thinking: ${D}${h !== undefined ? ` (budget ${h})` : ""}`
        ] : [],
        ...f !== undefined ? [
            `turns: ${f} assistant${_ !== undefined ? ` / ${_} messages` : ""}${l !== undefined && l > 0 ? `, ${l} ${I(l, "subagent")}` : ""}`
        ] : [],
        ...k.length > 0 ? [
            `request_ids: ${k.join(", ")}`
        ] : []
    ].join(`
`);
}
function Y(e) {
    let r = [];
    using k = sh`parseDraftTranscriptMessages(${e.length})`;
    for (let o of e.split(`
`)){
        if (!o) {
            continue;
        }
        let s;
        try {
            s = $o(o);
        } catch  {
            continue;
        }
        if (typeof s !== "object" || s === null) {
            continue;
        }
        if (s.type !== "user" && s.type !== "assistant") {
            continue;
        }
        if (typeof s.uuid !== "string" || typeof s.timestamp !== "string" || s.isSidechain === true || !s.message) {
            continue;
        }
        r.push(s.type === "user" ? {
            type: "user",
            uuid: s.uuid,
            timestamp: s.timestamp,
            message: s.message,
            ...s.isMeta === true && {
                isMeta: true
            },
            ...s.toolUseResult !== undefined && {
                toolUseResult: s.toolUseResult
            },
            ...s.isCompactSummary === true && {
                isCompactSummary: true
            },
            ...s.repeatsCompactSummary === true && {
                repeatsCompactSummary: true
            }
        } : {
            type: "assistant",
            uuid: s.uuid,
            timestamp: s.timestamp,
            message: s.message,
            requestId: s.requestId
        });
    }
    return r;
}
const error = "Feedback payload too large. Try again without the transcript, or shorten the details.";
async function wXe({ draft, includeTranscript, currentSessionMessages, surface = "cli", via = "panel", signal, storageV5, credentials, host }) {
    let _ = draft.source_session_id === K();
    let f = [];
    let rawTranscriptJsonl;
    if (includeTranscript && draft.transcript_ref) {
        let T = await jNr(draft);
        if (_) {
            f = hT(w6(currentSessionMessages, {
                host
            }));
            if (T !== null) {
                try {
                    let { content, bytesRead, bytesTotal } = await oA(T, Sft);
                    let n = content;
                    if (bytesRead < bytesTotal) {
                        n = n.slice(n.indexOf(`
`) + 1);
                    }
                    if (Dte(n)) {
                        t("rawTranscriptJsonl withheld from feedback draft submit: contains_3p_transcript_markers");
                    } else {
                        rawTranscriptJsonl = yIe(cHe(n), {
                            host
                        }).jsonl;
                    }
                } catch  {}
            }
        } else if (T !== null) {
            try {
                let { content, bytesRead, bytesTotal } = await oA(T, Sft);
                let n = content;
                if (bytesRead < bytesTotal) {
                    n = n.slice(n.indexOf(`
`) + 1);
                }
                if (!D3n(n, draft)) {
                    t("draft transcript withheld from feedback submit: identity_not_corroborated");
                } else {
                    let y = Y(n);
                    if (QZe(y)) {
                        t("draft transcript withheld from feedback submit: contains_3p_transcript_markers");
                    } else {
                        f = w6(y, {
                            host: undefined
                        });
                    }
                    if (Dte(n)) {
                        t("rawTranscriptJsonl withheld from feedback draft submit: contains_3p_transcript_markers");
                    } else {
                        rawTranscriptJsonl = yIe(cHe(n), {
                            host: undefined
                        }).jsonl;
                    }
                }
            } catch  {}
        }
    }
    let latestAssistantMessageId = TJe(draft.request_ids).at(-1) ?? null;
    let R = {
        latestAssistantMessageId,
        latestAssistantAPIMessageId: null,
        lastInterruptedAssistantAPIMessageId: null,
        message_count: f.length,
        datetime: new Date().toISOString(),
        description: V(draft, via),
        surface,
        platform: a.platform,
        gitRepo: false,
        commitSha: null,
        version: draft.cli_version,
        transcript: f,
        ...rawTranscriptJsonl && {
            rawTranscriptJsonl
        }
    };
    let { payload, trim } = j(R);
    let c = await _Lt(payload, signal, undefined, credentials);
    if (c.success) {
        try {
            await _pn(draft.draft_id, storageV5);
        } catch (err) {
            t(`feedbackDrafts: post-submit draft delete failed: ${err instanceof Error ? err.name : "unknown"}`, {
                level: "error"
            });
            i("tengu_feedback_draft_delete_failed", {
                phase: b("post_submit")
            });
        }
        if (_) {
            bpn();
        }
        if (via !== "card_send_as_is") {
            Lgt(draft.draft_id);
        }
        i("tengu_feedback_draft_submitted", {
            type: d(draft.type),
            trigger: d(draft.trigger),
            failure_mode: pe(draft.failure_mode),
            task_category: pe(draft.task_category),
            transcript_included: payload.transcript.length > 0 || payload.rawTranscriptJsonl ? b("true") : b("false"),
            transcript_trimmed: trim !== null ? b("true") : b("false"),
            transcript_requested: includeTranscript ? b("true") : b("false"),
            transcript_available: draft.transcriptAvailable ? b("true") : b("false"),
            from_this_session: _ ? b("true") : b("false"),
            feedback_id: ye(c.feedbackId),
            last_request_id: ye(latestAssistantMessageId)
        });
        g("feedback_draft_submit");
        return {
            success: true,
            feedbackId: c.feedbackId
        };
    }
    m("feedback_draft_submit", c.failureReason ?? "network_error", {
        from_this_session: _ ? b("true") : b("false")
    });
    if (c.isZdrOrg) {
        return {
            success: false,
            error: "Feedback collection is not available for organizations with custom data retention policies."
        };
    }
    if (c.failureReason === "auth_error") {
        return {
            success: false,
            error: "Couldn't send feedback: not signed in. Run /login, then retry."
        };
    }
    if (c.payloadTooLarge) {
        return {
            success: false,
            error,
            payloadTooLarge: true
        };
    }
    if (c.failureReason === "policy_blocked") {
        return {
            success: false,
            error: yde() ?? "Feedback is disabled by your organization's policy."
        };
    }
    return {
        success: false,
        error: `Couldn't send feedback${c.statusCode ? ` (server returned ${c.statusCode})` : c.failureReason === "timeout" ? " (request timed out)" : " (couldn't reach the service)"}. The draft is still queued. Try again later.`
    };
}
async function t$t(e, r, k) {
    let o = await _pn(e.draft_id, k);
    Lgt(e.draft_id);
    if (!o) {
        return;
    }
    if (e.source_session_id === K()) {
        bpn();
    }
    i("tengu_feedback_draft_discarded", {
        type: d(e.type),
        trigger: d(e.trigger),
        discarded_via: d(r)
    });
}
export { wXe, t$t };
