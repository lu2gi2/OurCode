import { mLr } from "/$bunfs/root/chunk-daj64yn4.js";
import { iu } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { kl } from "/$bunfs/root/chunk-ph7a449e.js";
import { lr, gg } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { IA, Kl, xe, Ao } from "/$bunfs/root/chunk-kasbfbhj.js";
import { f7e } from "/$bunfs/root/chunk-8wvdsmns.js";
import { W_ } from "/$bunfs/root/chunk-b7w13qrv.js";
import { uf as usage } from "/$bunfs/root/chunk-srmqtve7.js";
const A = /^\/btw\b/gi;
const M = "_/btw can't run tools: any tool calls or tool output shown above were not executed and may not reflect your actual files or data. Ask in the main conversation to check._";
const _ = "(That answer wrote tool calls as text. Nothing was executed, so it is omitted here.)";
const b = "_(This answer was cut off before it finished. Ask again to retry.)_";
const E = "(That answer was cut off before it finished, so it is omitted here.)";
const content = "[No result yet — this call is still in progress in the main conversation (running, awaiting approval, or queued)]";
function cYn(o) {
    let n = [];
    let i = o.matchAll(A);
    for (let s of i){
        if (s.index !== undefined) {
            n.push({
                word: s[0],
                start: s.index,
                end: s.index + s[0].length
            });
        }
    }
    return n;
}
async function kmt({ question, cacheSafeParams, parentController, onRetry, threadHistory = true, history, turnInProgress = true }) {
    let abortController = parentController ? gg(parentController) : lr();
    let p = threadHistory ? cacheSafeParams.toolUseContext.session.btwHistory : null;
    let w = (history ?? p?.exchanges ?? []).flatMap((r)=>{
        let u = mLr(r.response) ? _ : r.response.endsWith(b) ? E : r.response;
        return [
            xe({
                content: r.question
            }),
            Kl({
                content: r.fallbackNotice ? `\u26A0 ${r.fallbackNotice}

${u}` : u
            })
        ];
    });
    let h = turnInProgress ? x(cacheSafeParams.forkContextMessages) : undefined;
    try {
        let r = await IA({
            promptMessages: [
                ...h ? [
                    h
                ] : [],
                ...w,
                xe({
                    content: [
                        {
                            type: "text",
                            text: `<system-reminder>This is a side question from the user. You must answer this question directly in a single response.

IMPORTANT CONTEXT:
- You are a separate, lightweight agent spawned to answer this one question
- The main agent is NOT interrupted - it continues working independently in the background
- You share the conversation context but are a completely separate instance
- Do NOT reference being interrupted or what you were "previously doing" - that framing is incorrect

CRITICAL CONSTRAINTS:
- You have NO tools available - you cannot read files, run commands, search, or take any actions
- Do NOT write tool calls or tool output as text (for example invoke or function_calls XML blocks) - nothing you write here is executed; if answering would need reading files, running commands, or searching, say that can't be checked from a side question and suggest asking in the main conversation
- This is a one-off response - there will be no follow-up turns
- You can ONLY provide information based on what you already know from the conversation context
- NEVER say things like "Let me try...", "I'll now...", "Let me check...", or promise to take any action
- If you don't know the answer, say so - do not offer to look it up or investigate

Simply answer the question with the information you have.</system-reminder>

`
                        },
                        {
                            type: "text",
                            text: question
                        }
                    ]
                })
            ],
            cacheSafeParams,
            canUseTool: async ()=>({
                    behavior: "deny",
                    message: "Side questions cannot use tools",
                    decisionReason: {
                        type: "other",
                        reason: "side_question"
                    }
                }),
            querySource: "side_question",
            forkLabel: "side_question",
            maxTurns: 1,
            skipCacheWrite: true,
            skipTranscript: true,
            overrides: {
                abortController
            },
            onMessage: onRetry ? (c)=>{
                if (T(c)) {
                    onRetry({
                        retryAttempt: c.retryAttempt,
                        maxRetries: c.maxRetries,
                        retryInMs: c.retryInMs,
                        status: c.error.status
                    });
                }
            } : undefined
        });
        let { live, notice } = f7e(r.messages);
        let { response, synthetic } = N(live);
        let refusalFallback = notice && {
            originalModel: notice.originalModel,
            fallbackModel: notice.fallbackModel,
            content: notice.content
        };
        if (p && response && !synthetic) {
            p.append(question, response, refusalFallback?.content);
        }
        return {
            response,
            synthetic,
            usage: r.totalUsage,
            ...refusalFallback && !synthetic && {
                refusalFallback
            }
        };
    } catch (error) {
        if (error instanceof iu || abortController.signal.aborted) {
            return {
                response: null,
                synthetic: false,
                usage,
                aborted: true
            };
        }
        throw error;
    }
}
function x(forkContextMessages) {
    let n = forkContextMessages.filter((e)=>!W_(e));
    let i = n.findLast((e)=>e.type === "assistant");
    if (!i) {
        return;
    }
    let s = new Set;
    let l = [];
    for (let e of n){
        if (e.type === "user" && Array.isArray(e.message.content)) {
            for (let t of e.message.content){
                if (t.type === "tool_result") {
                    s.add(t.tool_use_id);
                }
            }
        } else if (e.type === "assistant" && e.message.id === i.message.id) {
            for (let t of e.message.content){
                if (t.type === "tool_use") {
                    l.push(t.id);
                }
            }
        }
    }
    let a = l.filter((e)=>!s.has(e));
    if (a.length === 0) {
        return;
    }
    return xe({
        content: a.map((tool_use_id)=>({
                type: "tool_result",
                tool_use_id,
                content
            })),
        isMeta: true
    });
}
function N(live) {
    let n = live.flatMap((t)=>{
        if (t.type === "assistant" && !t.isApiErrorMessage) {
            return t.message.content;
        }
        return [];
    });
    let i = live.find((t)=>t.type === "assistant" && t.isApiErrorMessage === true);
    let s = Ao(n, `

`).trim();
    if (s) {
        let t = [
            ...mLr(s) ? [
                M
            ] : [],
            ...i ? [
                b
            ] : []
        ];
        return {
            response: [
                s,
                ...t
            ].join(`

`),
            synthetic: false
        };
    }
    let l = n.find((t)=>t.type === "tool_use");
    if (l) {
        return {
            response: `(The model tried to call ${"name" in l ? l.name : "a tool"} instead of answering directly. Try rephrasing or ask in the main conversation.)`,
            synthetic: true
        };
    }
    let a = i ? Ao(i.message.content, `

`).trim() : "";
    if (a) {
        return {
            response: `(API error: ${a.startsWith(`${kl}: `) ? a.slice(kl.length + 2) : a})`,
            synthetic: true
        };
    }
    let e = live.find(T);
    if (e) {
        return {
            response: `(API error: ${e.error.formatted})`,
            synthetic: true
        };
    }
    return {
        response: null,
        synthetic: false
    };
}
function T(o) {
    return o.type === "system" && "subtype" in o && o.subtype === "api_error";
}
export { cYn, kmt };
