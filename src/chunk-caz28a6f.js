import { K3r, kXo, x3, IA, Cy, xe } from "/$bunfs/root/chunk-kasbfbhj.js";
import { sf, Nt, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { ps } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { qi } from "/$bunfs/root/chunk-gr4a0fky.js";
import { Oc } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { Xo } from "/$bunfs/root/chunk-gsdht23v.js";
import { Yr, nm, ic, cl, Bf, ro } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { u_t, IKo, yQn } from "/$bunfs/root/chunk-gmbay7g7.js";
import { X9 } from "/$bunfs/root/chunk-bnmvn3bs.js";
import { ye } from "/$bunfs/root/chunk-tybndaby.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
const R = /\p{Script=Han}/u;
const A = /[\p{Script=Hiragana}\p{Script=Katakana}\u30fc\uff70\p{Script=Thai}\p{Script=Lao}\p{Script=Khmer}\p{Script=Myanmar}]/u;
const T = /\p{Script=Hangul}/u;
const L = /[\p{L}\p{N}]/u;
function E(suggestion) {
    let { han, phonetic, hangul } = w(suggestion);
    return han + phonetic + hangul;
}
function y(suggestion) {
    let n = suggestion.trim();
    if (n === "") {
        return 0;
    }
    let t = 0;
    for (let o of n.split(/\s+/)){
        let { han, phonetic, hangul, other } = w(o);
        t += han === 0 && phonetic === 0 ? 1 : (other + hangul > 0 ? 1 : 0) + han / 2 + phonetic / 4;
    }
    return Math.ceil(t);
}
function w(e) {
    let han = 0;
    let phonetic = 0;
    let hangul = 0;
    let other = 0;
    for (let r of e){
        if (R.test(r)) {
            han++;
        } else if (A.test(r)) {
            phonetic++;
        } else if (T.test(r)) {
            hangul++;
        } else if (L.test(r)) {
            other++;
        }
    }
    return {
        han,
        phonetic,
        hangul,
        other
    };
}
function FIe(e) {
    return e.status === "shown" || e.status === "accepted";
}
function Tun(e) {
    if (e.status === "empty") {
        return null;
    }
    return e.text;
}
function Aun() {
    let a_CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION = a.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION;
    if (a_CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === false) {
        i("tengu_prompt_suggestion_init", {
            enabled: false,
            source: b("env")
        });
        return false;
    }
    if (a_CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === true) {
        i("tengu_prompt_suggestion_init", {
            enabled: true,
            source: b("env")
        });
        return true;
    }
    if (!k("tengu_chomp_inflection", false)) {
        i("tengu_prompt_suggestion_init", {
            enabled: false,
            source: b("growthbook")
        });
        return false;
    }
    if (Ee()) {
        i("tengu_prompt_suggestion_init", {
            enabled: false,
            source: b("non_interactive")
        });
        return false;
    }
    if (Xo() && Oc()) {
        i("tengu_prompt_suggestion_init", {
            enabled: false,
            source: b("swarm_teammate")
        });
        return false;
    }
    let enabled = ft()?.promptSuggestionEnabled !== false;
    i("tengu_prompt_suggestion_init", {
        enabled,
        source: b("setting")
    });
    return enabled;
}
function Cun() {
    let a_CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION = a.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION;
    if (a_CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION !== undefined) {
        return a_CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION;
    }
    return ft()?.promptSuggestionEnabled !== false;
}
function x(e) {
    if (!e.promptSuggestionEnabled) {
        return "disabled";
    }
    if (e.pendingWorkerRequest || e.pendingSandboxRequest) {
        return "pending_permission";
    }
    if (e.mcp.clients.some((n)=>n.type === "connected" && (n.transportErrorState?.pendingElicitations ?? 0) > 0)) {
        return "elicitation_active";
    }
    if (e.toolPermissionContext.mode === "plan") {
        return "plan_mode";
    }
    {
        let { status } = qi();
        let t = status === "allowed_warning" && a.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === true;
        if (status !== "allowed" && !t) {
            return "rate_limit";
        }
    }
    return null;
}
async function HLr(e, n, t, o, s, r) {
    if (e.signal.aborted) {
        YH("aborted", s);
        return null;
    }
    if (F(n, (S)=>S.type === "assistant") < 2) {
        YH("early_conversation", s);
        return null;
    }
    let p = Cy(n);
    if (p?.isApiErrorMessage) {
        YH("last_response_error", s);
        return null;
    }
    let l = t();
    let f = x(l);
    if (f) {
        YH(f, s);
        return null;
    }
    let cacheColdBy = O(p);
    if (cacheColdBy) {
        YH("cache_cold", s, {
            cacheColdBy
        });
        return null;
    }
    if (r && yQn()) {
        let S = r.eligibleTurns % IKo === 0;
        r.eligibleTurns++;
        if (!S) {
            YH("unused_streak", s);
            return null;
        }
    }
    let { suggestion, generationRequestId } = await q(e, o);
    if (e.signal.aborted) {
        YH("aborted", s);
        return null;
    }
    if (!suggestion) {
        YH("empty", s);
        return null;
    }
    if (B(suggestion, s)) {
        return null;
    }
    return {
        suggestion,
        generationRequestId
    };
}
async function _Fo(e, n) {
    if (!e.querySource?.startsWith("repl_main_thread")) {
        return;
    }
    let t = X9();
    let o = Nt();
    let s = o && n?.tempo === "blocked" && !n.block;
    if (o ? t !== "focused" && !s : t === "blurred") {
        YH(o ? "bg_unattached" : "unfocused", "cli");
        return;
    }
    let promptSuggestion = e.toolUseContext.session.promptSuggestion;
    let u = new AbortController;
    promptSuggestion.abortController = u;
    let p = x3(e);
    try {
        let l = await HLr(u, e.messages, e.toolUseContext.getAppState, p, "cli", s ? undefined : promptSuggestion);
        if (!l) {
            return;
        }
        if (u_t() && sf(e.toolUseContext.agentContext)) {
            YH("plugin_owns", "cli");
            return;
        }
        let f = false;
        let { isShown } = await kXo({
            text: l.suggestion,
            origin: {
                kind: "suggestion"
            },
            signal: u.signal,
            place: (h)=>{
                if (u.signal.aborted) {
                    return {
                        isShown: false
                    };
                }
                f = true;
                if (s) {
                    v(h, n?.needs, e.toolUseContext.storageV5).catch(cl);
                }
                return K3r(h, l.generationRequestId);
            }
        });
        if (u.signal.aborted) {
            YH("aborted", "cli");
            return;
        }
        if (!isShown && f) {
            YH("timing", "cli");
        }
    } catch (error) {
        if (error instanceof Error && (error.name === "AbortError" || error.name === "APIUserAbortError")) {
            YH("aborted", "cli");
            return;
        }
        m("prompt_suggestion_generate", "api_error");
        c(W(error));
    } finally{
        if (promptSuggestion.abortController === u) {
            promptSuggestion.abortController = null;
        }
    }
}
async function v(suggestedReply, n, storageV5) {
    if (ps(suggestedReply) !== suggestedReply) {
        return;
    }
    let o = Yr(nm());
    Bf(o);
    let s = await ro(o, storageV5);
    if (s?.tempo !== "blocked" || s.needs !== n || s.suggestedReply === suggestedReply) {
        return;
    }
    await ic(o, {
        ...s,
        suggestedReply
    }, storageV5);
}
const C = 10000;
function O(e) {
    if (!e) {
        return null;
    }
    let usage = e.message.usage;
    let t = (usage.input_tokens ?? 0) + (usage.output_tokens ?? 0);
    if (t > C) {
        return "uncached";
    }
    let o = usage.cache_creation_input_tokens ?? 0;
    if (t + o <= C) {
        return null;
    }
    if (k("tengu_chomp_thaw", false)) {
        return null;
    }
    return "cache_write";
}
const M = `[SUGGESTION MODE: Suggest what the user might naturally type next into Claude Code.]

FIRST: Look at the user's recent messages and original request.

Your job is to predict what THEY would type - not what you think they should do.

THE TEST: Would they think "I was just about to type that"?

EXAMPLES:
User asked "fix the bug and run tests", bug is fixed \u2192 "run the tests"
After code written \u2192 "try it out"
Claude offers options \u2192 suggest the one the user would likely pick, based on conversation
Claude asks to continue \u2192 "yes" or "go ahead"
Task complete, obvious follow-up \u2192 "commit this" or "push it"
After error or misunderstanding \u2192 silence (let them assess/correct)

Be specific: "run the tests" beats "continue".

NEVER SUGGEST:
- Evaluative ("looks good", "thanks")
- Questions ("what about...?")
- Claude-voice ("Let me...", "I'll...", "Here's...")
- New ideas they didn't ask about
- Multiple sentences

Stay silent if the next step isn't obvious from what the user said.

Stay silent if a suggestion could be unsafe or inappropriate \u2014 including any sensitive topic (security incidents, credentials, harm, private data). Even when the user is doing legitimate security or cybersecurity work, do not predict potentially unsafe actions.

Format: 2-12 words, match the user's style. Or nothing.

Reply with ONLY the suggestion, no quotes or explanation.`;
async function I(content, abortController, cacheSafeParams) {
    let canUseTool = async ()=>({
            behavior: "deny",
            message: "No tools needed for suggestion",
            decisionReason: {
                type: "other",
                reason: "suggestion only"
            }
        });
    let s = await IA({
        promptMessages: [
            xe({
                content
            })
        ],
        cacheSafeParams,
        canUseTool,
        querySource: "prompt_suggestion",
        forkLabel: "prompt_suggestion",
        overrides: {
            abortController
        },
        skipTranscript: true,
        skipCacheWrite: true
    });
    let r = s.messages.find((l)=>l.type === "assistant");
    let generationRequestId = r?.type === "assistant" ? r.requestId ?? null : null;
    let candidates = [];
    for (let l of s.messages){
        if (l.type !== "assistant" || l.isApiErrorMessage) {
            continue;
        }
        let f = l.message.content.find((_)=>_.type === "text");
        if (f?.type === "text") {
            candidates.push(f.text);
        }
    }
    return {
        candidates,
        generationRequestId
    };
}
function N(e) {
    return e.trim().replace(/^<(suggestion|response|output|answer|result)>([\s\S]*)<\/\1>$/i, (n, t, o)=>{
        if (o.includes(`</${t.toLowerCase()}>`) || o.includes(`</${t.toUpperCase()}>`)) {
            return n;
        }
        return o;
    }).replace(/^\s*(suggested\s+(response|reply|input|prompt)|suggestion|response|reply|answer|output|result|\u63D0\u6848|\u56DE\u7B54|\u8FD4\u4FE1|\u5FDC\u7B54|\u51FA\u529B|\u7D50\u679C|\u5EFA\u8BAE|\u56DE\u590D|\u7B54\u6848|\u8F93\u51FA|\u7ED3\u679C|\uC81C\uC548|\uB2F5\uBCC0|\uC751\uB2F5|\uCD9C\uB825|\uACB0\uACFC)\s*[:\uFF1A]\s*/i, "").trim();
}
async function q(e, n) {
    let { candidates, generationRequestId } = await I(M, e, n);
    for (let s of candidates){
        let suggestion = N(s);
        if (suggestion) {
            g("prompt_suggestion_generate");
            return {
                suggestion,
                generationRequestId
            };
        }
    }
    g("prompt_suggestion_generate");
    return {
        suggestion: null,
        generationRequestId
    };
}
function B(suggestion, n) {
    if (!suggestion) {
        YH("empty", n);
        return true;
    }
    let t = suggestion.toLowerCase();
    let o = y(suggestion);
    let s = [
        [
            "done",
            ()=>t === "done" || /^\P{L}*(\u5B8C\u4E86(\u3057\u307E\u3057\u305F)?|\u5B8C\u6210\u4E86?|\uC644\uB8CC\uB428?)\P{L}*$/u.test(suggestion)
        ],
        [
            "meta_text",
            ()=>t === "nothing found" || t === "nothing found." || t.startsWith("nothing to suggest") || t.startsWith("no suggestion") || /\bsilence is\b|\bstay(s|ing)? silent\b/.test(t) || /^\W*silence\W*$/.test(t) || /^\P{L}*(\u6C88\u9ED9|\u6C89\u9ED8|\u9759\u9ED8|\uCE68\uBB35|\u63D0\u6848(\u306A\u3057|\u306F\u3042\u308A\u307E\u305B\u3093)|\u7279\u306B(\u306A\u3057|\u3042\u308A\u307E\u305B\u3093)|[\u65E0\u6CA1\u6C92]\u6709?\u5EFA[\u8BAE\u8B70]|(\uC81C\uC548|\uD574\uB2F9)\s*\uC5C6\uC74C)\P{L}*$/u.test(suggestion)
        ],
        [
            "meta_wrapped",
            ()=>/^(\(.*\)|\[.*\]|\uFF08.*\uFF09|\uFF3B.*\uFF3D|\u3010.*\u3011|\u3014.*\u3015)$/.test(suggestion)
        ],
        [
            "error_message",
            ()=>t.startsWith("api error:") || t.startsWith("prompt is too long") || t.startsWith("request timed out") || t.startsWith("invalid api key") || t.startsWith("image was too large")
        ],
        [
            "prefixed_label",
            ()=>/^\w+:\s/.test(suggestion)
        ],
        [
            "too_few_words",
            ()=>{
                if (o >= 2) {
                    return false;
                }
                if (suggestion.startsWith("/")) {
                    return false;
                }
                let r = E(suggestion);
                if (r > 0) {
                    return r < 2;
                }
                return !new Set([
                    "yes",
                    "yeah",
                    "yep",
                    "yea",
                    "yup",
                    "sure",
                    "ok",
                    "okay",
                    "push",
                    "commit",
                    "deploy",
                    "stop",
                    "continue",
                    "check",
                    "exit",
                    "quit",
                    "no"
                ]).has(t);
            }
        ],
        [
            "too_many_words",
            ()=>o > 12
        ],
        [
            "too_long",
            ()=>suggestion.length >= 100
        ],
        [
            "multiple_sentences",
            ()=>/[.!?]\s+[A-Z]|[\u3002\uFF01\uFF1F]\s*[\p{L}\p{N}]/u.test(suggestion)
        ],
        [
            "has_formatting",
            ()=>/[\n*]|\*\*/.test(suggestion)
        ],
        [
            "evaluative",
            ()=>/thanks|thank you|looks good|sounds good|that works|that worked|that's all|nice|great|perfect|makes sense|awesome|excellent/.test(t) || /^\P{L}*(\u3042\u308A\u304C\u3068\u3046(\u3054\u3056\u3044\u307E\u3059|\u3054\u3056\u3044\u307E\u3057\u305F)?|\u52A9\u304B\u308A\u307E\u3057\u305F|[\u8C22\u8B1D][\u8C22\u8B1D][\u4F60\u60A8]?|\u611F\u8C22[\u4F60\u60A8]?|\u611F\u8B1D\u3057\u307E\u3059|\uAC10\uC0AC\uD569\uB2C8\uB2E4|\uACE0\uB9C8\uC6CC\uC694?)(\P{L}|\u7684|$)/u.test(suggestion) || /(\u826F\u3055\u305D\u3046|\u3088\u3055\u305D\u3046|\u3044\u3044\u3067\u3059\u306D|\u770B\u8D77\u6765\u4E0D\u9519|\u592A\u597D\u4E86|\u5B8C\u74A7|\u5B8C\u7F8E|\uC88B\uB124\uC694)(\u3067\u3059|\u3067\u3059\u306D|\u3060\u306D)?\P{L}*$/u.test(suggestion)
        ],
        [
            "claude_voice",
            ()=>/^(let me|i'll|i've|i'm|i can|i would|i think|i notice|here's|here is|here are|that's|this is|this will|you can|you should|you could|sure,|of course|certainly|\u8BA9\u6211(?!\u4EEC)|\u6211\u6765|\u6211\u4F1A|\u6211\u5C06)/i.test(suggestion)
        ]
    ];
    for (let [r, u] of s){
        if (u()) {
            YH(r, n);
            return true;
        }
    }
    return false;
}
function bFo(e, n, t, o) {
    let similarity = Math.round(n.length / (e.length || 1) * 100) / 100;
    let r = n.toLowerCase() === e.toLowerCase();
    let u = Math.max(0, Date.now() - t);
    i("tengu_prompt_suggestion", {
        source: b("sdk"),
        outcome: b(r ? "accepted" : "ignored"),
        prompt_id: b("user_intent"),
        ...o && {
            generationRequestId: ye(o)
        },
        ...r && {
            timeToAcceptMs: u
        },
        ...!r && {
            timeToIgnoreMs: u
        },
        similarity
    });
}
function YH(e, n, t) {
    i("tengu_prompt_suggestion", {
        ...n && {
            source: d(n)
        },
        outcome: b("suppressed"),
        reason: d(e),
        ...t?.cacheColdBy && {
            cacheColdBy: d(t.cacheColdBy)
        },
        prompt_id: b("user_intent")
    });
}
export { FIe, Tun, Aun, Cun, HLr, _Fo, bFo, YH };
