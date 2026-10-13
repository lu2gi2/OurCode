import { Ne, vs } from "/$bunfs/root/chunk-j27d47mr.js";
import { Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { $O } from "/$bunfs/root/chunk-qch5xj2a.js";
import { ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Nt, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { D9n } from "/$bunfs/root/chunk-02ze0efh.js";
import { zh } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { TI, IA, xe } from "/$bunfs/root/chunk-kasbfbhj.js";
function OQe() {
    let CLAUDE_CODE_ENABLE_AWAY_SUMMARY = process.env.CLAUDE_CODE_ENABLE_AWAY_SUMMARY;
    if (vs(CLAUDE_CODE_ENABLE_AWAY_SUMMARY)) {
        return false;
    }
    if (Ne(CLAUDE_CODE_ENABLE_AWAY_SUMMARY)) {
        return true;
    }
    if (Ee()) {
        return false;
    }
    if (ft()?.awaySummaryEnabled === false) {
        return false;
    }
    return true;
}
function y() {
    let a_CLAUDE_CODE_ENABLE_REMOTE_RECAP = a.CLAUDE_CODE_ENABLE_REMOTE_RECAP;
    if (a_CLAUDE_CODE_ENABLE_REMOTE_RECAP !== undefined) {
        return a_CLAUDE_CODE_ENABLE_REMOTE_RECAP;
    }
    return k("tengu_harbor_moth", false);
}
function O1t(e, n) {
    if (!n.onMetadataChanged) {
        return;
    }
    if (Nt() || !D9n() || !y()) {
        return;
    }
    if (e.startedForTurnEnd) {
        return;
    }
    e.startedForTurnEnd = true;
    S(e, n);
}
function U1r(e) {
    e.reset();
}
async function S(e, n) {
    e.inFlight?.abort();
    let r = new AbortController;
    e.inFlight = r;
    let o = await M1t(r.signal);
    if (r.signal.aborted) {
        return;
    }
    if (o.kind !== "ok") {
        if (o.kind !== "no-turn") {
            m("ccr_recap_generate", o.kind);
        }
        return;
    }
    if (n.getState() === "running") {
        t("[awaySummary] ccr recap dropped: new turn already running");
        return;
    }
    n.notifyMetadataChanged({
        recap: o.text
    });
    if (o.capped) {
        f("ccr_recap_generate", "capped");
    } else {
        g("ccr_recap_generate");
    }
}
const content = "The user stepped away and is coming back. Recap in under 40 words, 1-2 plain sentences, no markdown. Lead with the overall goal and current task, then the one next action. Skip root-cause narrative, fix internals, secondary to-dos, and em-dash tangents.";
const p = 400;
async function M1t(e, n) {
    let cacheSafeParams = TI();
    if (!cacheSafeParams && n) {
        if (e.aborted) {
            return {
                kind: "aborted"
            };
        }
        try {
            cacheSafeParams = await n();
        } catch (error) {
            t(`[awaySummary] fallback params rebuild failed: ${error}`);
            return {
                kind: "failed"
            };
        }
        if (e.aborted) {
            return {
                kind: "aborted"
            };
        }
    }
    if (!cacheSafeParams) {
        t("[awaySummary] no CacheSafeParams saved, skipping");
        return {
            kind: "no-turn"
        };
    }
    let abortController = new AbortController;
    e.addEventListener("abort", ()=>abortController.abort(), {
        once: true
    });
    try {
        let { messages } = await IA({
            promptMessages: [
                xe({
                    content
                })
            ],
            cacheSafeParams,
            overrides: {
                abortController
            },
            canUseTool: async ()=>({
                    behavior: "deny",
                    message: "Away summary cannot use tools",
                    decisionReason: {
                        type: "other",
                        reason: "away_summary"
                    }
                }),
            querySource: "away_summary",
            forkLabel: "away_summary",
            maxTurns: 1,
            skipCacheWrite: true,
            skipTranscript: true
        });
        if (e.aborted) {
            return {
                kind: "aborted"
            };
        }
        let u = messages.find((c)=>c.type === "assistant" && c.isApiErrorMessage);
        if (u) {
            return {
                kind: "api-error",
                text: l([
                    u
                ], true)
            };
        }
        let text = l(messages, false);
        let capped = text.length > p;
        if (capped) {
            let c = $O(text, p);
            t(`[awaySummary] recap capped from ${text.length} to ${c.length} chars`);
            text = c;
        }
        if (text) {
            return {
                kind: "ok",
                text,
                capped
            };
        }
        return {
            kind: "failed"
        };
    } catch (error) {
        if (e.aborted) {
            return {
                kind: "aborted"
            };
        }
        t(`[awaySummary] generation failed: ${error}`);
        return {
            kind: "failed"
        };
    }
}
function l(e, n) {
    return zh(e.flatMap((r)=>{
        if (r.type === "assistant" && (n || !r.isApiErrorMessage)) {
            return r.message.content;
        }
        return [];
    }).filter((r)=>r.type === "text").map((r)=>{
        if ("text" in r) {
            return r.text;
        }
        return "";
    }).join("")).trim();
}
export { OQe, O1t, U1r, M1t };
