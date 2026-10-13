import { Ne, vs } from "/$bunfs/root/chunk-j27d47mr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { q, lt, B, K, Ee, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Abe, sf, AZt, xd, Ln, fOt, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { cp, Mc } from "/$bunfs/root/chunk-xb9cceab.js";
import { ua } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Da, Of } from "/$bunfs/root/chunk-6dwnw6av.js";
import { T4, hot, bAt, qye, _Ae, SAt, $On, wAt, Yye, goo, hoo, Qpr, Us } from "/$bunfs/root/chunk-53bavyda.js";
import { g5t } from "/$bunfs/root/chunk-52fke4xs.js";
import { Dn } from "/$bunfs/root/chunk-77t63btp.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { createHash } from "crypto";
const Rt = 61440;
function Ct() {
    return Math.min(a.CLAUDE_CODE_OTEL_CONTENT_MAX_LENGTH ?? Rt, a.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? Infinity, a.OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? Infinity, a.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? Infinity);
}
function Dx(content) {
    let e = Ct();
    if (content.length <= e) {
        return {
            content,
            truncated: false
        };
    }
    let s = `

[TRUNCATED - Content exceeds ${e >= 1024 ? `${Math.floor(e / 1024)}KB` : `${e} character`} limit]`;
    if (s.length >= e) {
        return {
            content: content.slice(0, e),
            truncated: true
        };
    }
    return {
        content: content.slice(0, e - s.length) + s,
        truncated: true
    };
}
function M() {
    return a.OTEL_LOG_USER_PROMPTS;
}
class J {
    seenHashes = new Set;
    lastReportedMessage = new Map;
    emittedUserPromptForSessionId = undefined;
}
const Q = new lt(()=>new J);
function Xas() {
    let n = Q.of(B());
    n.seenHashes.clear();
    n.lastReportedMessage.clear();
}
function JC() {
    if (!(a.ENABLE_BETA_TRACING_DETAILED && Boolean(process.env.BETA_TRACING_ENDPOINT) && !Ce())) {
        return false;
    }
    return Ee() || k("tengu_trace_lantern", false);
}
function V(n) {
    return createHash("sha256").update(n).digest("hex").slice(0, 12);
}
function Pt(systemPrompt) {
    return `sp_${V(systemPrompt)}`;
}
function Z(n) {
    let e = _(n.message.content);
    return `msg_${V(e)}`;
}
function j(n) {
    return /^<system-reminder>\n?([\s\S]*?)\n?<\/system-reminder>$/.exec(n.trim())?.[1]?.trim() || null;
}
function z(n, e) {
    let contextParts = [];
    let systemReminders = [];
    for (let o of n){
        if (o.type === "api_system") {
            systemReminders.push(o.message.content);
            continue;
        }
        let i = o.message.content;
        if (typeof i === "string") {
            let u = j(i);
            if (u) {
                systemReminders.push(u);
            } else if (e) {
                contextParts.push(`[USER]
${i}`);
            }
        } else if (Array.isArray(i)) {
            for (let u of i){
                if (u.type === "text") {
                    let c = j(u.text);
                    if (c) {
                        systemReminders.push(c);
                    } else if (e) {
                        contextParts.push(`[USER]
${u.text}`);
                    }
                } else if (u.type === "tool_result") {
                    if (typeof u.content === "string") {
                        let c = j(u.content);
                        if (c) {
                            systemReminders.push(c);
                        } else if (e) {
                            contextParts.push(`[TOOL RESULT: ${u.tool_use_id}]
${u.content}`);
                        }
                    } else if (e) {
                        contextParts.push(`[TOOL RESULT: ${u.tool_use_id}]
${_(u.content)}`);
                    }
                }
            }
        }
    }
    return {
        contextParts,
        systemReminders
    };
}
function kt(n, e) {
    let { systemReminders } = z(n, false);
    return {
        contextParts: [
            e
        ],
        systemReminders: systemReminders.map(()=>e)
    };
}
function wt(n, e, r) {
    let s = $On(n.map((o)=>o.message), r, e.map((o)=>o.message));
    return n.map((o, i)=>{
        if (s[i] === o.message) {
            return o;
        }
        return {
            ...o,
            message: s[i]
        };
    });
}
const Lt = ()=>_Ae(B().host);
function tt(n, e) {
    if (!JC() || !M()) {
        return;
    }
    let { content, truncated } = Dx(`[USER PROMPT]
${qye(()=>_Ae(B().host), undefined, e)}`);
    n.setAttributes({
        new_context: content,
        ...truncated && {
            new_context_truncated: true,
            new_context_original_length: e.length
        }
    });
}
function et(n, e, r, s) {
    if (!JC()) {
        return;
    }
    let o = Q.of(B());
    let i = (c)=>{
        if (r !== undefined && s === undefined) {
            return {
                withheld: "account_memory_text_not_identified"
            };
        }
        return bAt(s ?? Lt, e?.querySource, c);
    };
    let u = (userSystemPrompt)=>{
        let d = i((g)=>SAt(userSystemPrompt, g));
        if ("withheld" in d) {
            return hot(d.withheld);
        }
        return d.value;
    };
    if (e?.systemPrompt) {
        let { systemPrompt } = e;
        let system_prompt_hash = Pt(systemPrompt);
        let g;
        let f = ()=>g ??= i((h)=>SAt(systemPrompt, h));
        n.setAttribute("system_prompt_hash", system_prompt_hash);
        if (M()) {
            let h = f();
            n.setAttribute("system_prompt_preview", "withheld" in h ? hot(h.withheld) : h.value.slice(0, 500));
        }
        n.setAttribute("system_prompt_length", e.systemPrompt.length);
        let m = M() ? f() : undefined;
        if (m !== undefined && "value" in m && !o.seenHashes.has(system_prompt_hash)) {
            o.seenHashes.add(system_prompt_hash);
            let { content, truncated } = Dx(m.value);
            Us("system_prompt", {
                system_prompt_hash,
                system_prompt: content,
                system_prompt_length: String(e.systemPrompt.length),
                ...truncated && {
                    system_prompt_truncated: "true"
                }
            });
        }
    }
    if (e?.userSystemPrompt && M()) {
        let c = K();
        if (o.emittedUserPromptForSessionId !== c) {
            o.emittedUserPromptForSessionId = c;
            let { content, truncated } = Dx(u(e.userSystemPrompt));
            n.setAttributes({
                user_system_prompt: content,
                ...truncated && {
                    user_system_prompt_truncated: true,
                    user_system_prompt_original_length: e.userSystemPrompt.length
                }
            });
        }
    }
    if (e?.tools) {
        try {
            let d = X(e.tools).map((g)=>{
                let json_1 = _(g);
                let hash_1 = V(json_1);
                return {
                    name: typeof g.name === "string" ? g.name : "unknown",
                    hash: hash_1,
                    json: json_1
                };
            });
            n.setAttribute("tools", _(d.map(({ name, hash })=>({
                    name,
                    hash
                }))));
            n.setAttribute("tools_count", d.length);
            for (let { name, hash, json } of d){
                if (!o.seenHashes.has(`tool_${hash}`)) {
                    o.seenHashes.add(`tool_${hash}`);
                    let { content, truncated } = Dx(json);
                    Us("tool", {
                        tool_name: Ln(name),
                        tool_hash: hash,
                        tool: content,
                        ...truncated && {
                            tool_truncated: "true"
                        }
                    });
                }
            }
        } catch  {
            n.setAttribute("tools_parse_error", true);
        }
    }
    if (r && r.length > 0 && e?.querySource) {
        let c = e.querySource;
        let d = o.lastReportedMessage.get(c);
        let g = 0;
        if (d) {
            let l = r[d.index];
            if (l && Z(l) === d.hash) {
                g = d.index + 1;
            }
        }
        let f = r.slice(g).filter((l)=>l.type === "user" || l.type === "api_system");
        if (f.length > 0) {
            let l = M();
            let y = l ? i((R)=>z(wt(f, r, R), true)) : {
                value: z(f, false)
            };
            let { contextParts, systemReminders } = "withheld" in y ? kt(f, hot(y.withheld)) : y.value;
            n.setAttribute("new_context_message_count", f.length);
            if (systemReminders.length > 0) {
                n.setAttribute("system_reminders_count", systemReminders.length);
            }
            if (contextParts.length > 0 && l) {
                let R = contextParts.join(`

---

`);
                let { content, truncated } = Dx(R);
                n.setAttributes({
                    new_context: content,
                    ...truncated && {
                        new_context_truncated: true,
                        new_context_original_length: R.length
                    }
                });
            }
            if (systemReminders.length > 0 && l) {
                let R = systemReminders.join(`

---

`);
                let { content, truncated } = Dx(R);
                n.setAttributes({
                    system_reminders: content,
                    ...truncated && {
                        system_reminders_truncated: true,
                        system_reminders_original_length: R.length
                    }
                });
            }
        }
        let index = r.length - 1;
        let h = r[index];
        if (h) {
            o.lastReportedMessage.set(c, {
                index,
                hash: Z(h)
            });
        }
    }
}
function nt(n, e) {
    if (!JC() || !M() || !e) {
        return;
    }
    let r = (modelOutput)=>qye(e.accountMemoryKeys, e.querySource, modelOutput);
    if (e.modelOutput !== undefined) {
        let { content, truncated } = Dx(r(e.modelOutput));
        n["response.model_output"] = content;
        if (truncated) {
            n["response.model_output_truncated"] = true;
            n["response.model_output_original_length"] = e.modelOutput.length;
        }
    }
}
function rt(n, tool_name, r, s = false) {
    if (!JC() || !xd()) {
        return;
    }
    let { content, truncated } = Dx(`[TOOL INPUT: ${tool_name}]
${s ? T4(r) : r}`);
    n.setAttributes({
        tool_input: content,
        ...truncated && {
            tool_input_truncated: true,
            tool_input_original_length: r.length
        }
    });
}
function st(n, e, r, s = false) {
    if (!JC() || !fOt()) {
        return;
    }
    let { content, truncated } = Dx(`[TOOL RESULT: ${e}]
${s ? T4(r) : r}`);
    n.new_context = content;
    if (truncated) {
        n.new_context_truncated = true;
        n.new_context_original_length = r.length;
    }
}
class ot {
    recorder = null;
}
const Ot = new q(()=>new ot);
function b() {
    return Ot.of(B().host).recorder;
}
function Jas() {
    let a_CLAUDE_CODE_PERFETTO_TRACE = a.CLAUDE_CODE_PERFETTO_TRACE;
    t(`[Perfetto] initializePerfettoTracing called, env value: ${a_CLAUDE_CODE_PERFETTO_TRACE}`);
}
function B0e() {
    return b() !== null;
}
function bOn(n, e, r) {
    let s = b();
    if (!s) {
        return;
    }
    s.registerAgent(n, e, r);
}
function j0e(n) {
    let e = b();
    if (!e) {
        return;
    }
    e.unregisterAgent(n);
}
function it(n) {
    let e = b();
    if (!e) {
        return "";
    }
    return e.startLLMRequestSpan(n);
}
function at(perfettoSpanId, e) {
    let r = b();
    if (!r || !perfettoSpanId) {
        return;
    }
    r.endLLMRequestSpan(perfettoSpanId, e);
}
function ut(tool_name, e) {
    let r = b();
    if (!r) {
        return "";
    }
    return r.startToolSpan(tool_name, e);
}
function ct(perfettoSpanId, e) {
    let r = b();
    if (!r || !perfettoSpanId) {
        return;
    }
    r.endToolSpan(perfettoSpanId, e);
}
function pt(n) {
    let e = b();
    if (!e) {
        return "";
    }
    return e.startUserInputSpan(n);
}
function dt(perfettoSpanId, e) {
    let r = b();
    if (!r || !perfettoSpanId) {
        return;
    }
    r.endUserInputSpan(perfettoSpanId, e);
}
function ft(n, e, r) {
    let s = b();
    if (!s) {
        return;
    }
    s.emitInstant(n, e, r);
}
function gt(n) {
    let e = b();
    if (!e) {
        return "";
    }
    return e.startInteractionSpan(n);
}
function mt(perfettoSpanId) {
    let e = b();
    if (!e || !perfettoSpanId) {
        return;
    }
    e.endInteractionSpan(perfettoSpanId);
}
const p = Se(Da(), 1);
const St = Se(Of(), 1);
const A = new WeakMap;
const I = p.createContextKey("cc.interaction_state");
const P = p.createContextKey("cc.tool_state");
const w = p.createContextKey("cc.blocked_state");
const Y = p.createContextKey("cc.execution_state");
const _t = p.createContextKey("cc.subagent_state");
const Tt = p.createContextKey("cc.turn_trace_contexts");
class bt {
    lastSequence = 0;
}
const qt = new q(()=>new bt);
function Kro() {
    let n = process.env.CLAUDE_CODE_ENHANCED_TELEMETRY_BETA ?? process.env.ENABLE_ENHANCED_TELEMETRY_BETA;
    if (Ne(n)) {
        return true;
    }
    if (vs(n)) {
        return false;
    }
    return false;
}
function uB() {
    return Kro() || JC();
}
function Vne() {
    return false;
}
function SOn(n, e) {}
function mAt(n, e) {
    n.setStatus(F(e));
}
function yt(n, e) {
    if (!e) {
        return;
    }
    n.setAttribute("tool_use_id", e);
    n.setAttribute("gen_ai.tool.call.id", e);
}
function QC() {
    return g5t();
}
function Ut() {
    let n = {};
    let e = K();
    if (L.test(e)) {
        n["session.id"] = e;
    }
    let a_CLAUDE_CODE_REMOTE_SESSION_ID = a.CLAUDE_CODE_REMOTE_SESSION_ID;
    if (a_CLAUDE_CODE_REMOTE_SESSION_ID !== undefined && L.test(a_CLAUDE_CODE_REMOTE_SESSION_ID)) {
        n["ccr.session.id"] = a_CLAUDE_CODE_REMOTE_SESSION_ID;
    }
    return n;
}
function Et() {
    if (QC()) {
        return Ut();
    }
    return wAt();
}
const Bt = new Set([
    "rpc.service",
    "mcp_tool"
]);
function N(n) {
    if (!QC()) {
        return n;
    }
    let e = /^a(?:[\w-]{1,63}-)?([0-9a-f]{16})$/.exec(n);
    if (e) {
        return `a${e[1]}`;
    }
    if (/^(?:hook-agent-)?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(n)) {
        return n;
    }
}
var L = /^[A-Za-z0-9_.-]{1,64}$/;
const ht = {
    [Mc]: /^[a-z][a-z0-9_]{0,39}$/,
    [cp]: /^[A-Za-z][A-Za-z0-9_]{0,39}$/,
    playwright: /^browser_[a-z_]{1,40}$/
};
function $t(tool_name) {
    if (tool_name.startsWith("mcp__")) {
        let [, e, ...r] = tool_name.split("__");
        let s = e !== undefined && Object.hasOwn(ht, e) ? ht[e] : undefined;
        if (s !== undefined && s.test(r.join("__")) && L.test(tool_name)) {
            return tool_name;
        }
        return "mcp_other";
    }
    if (!tool_name.includes("__") && L.test(tool_name)) {
        return tool_name;
    }
    return "other";
}
function Nt(n) {
    let e = Abe(n)?.replaceAll(":", ".");
    if (e !== undefined && L.test(e)) {
        return e;
    }
}
const Ft = /^[A-Za-z][A-Za-z0-9_]{0,47}$/;
function G(error, errorClass) {
    let error_class = errorClass?.replace(/[^A-Za-z0-9_]/g, "_");
    return {
        ...error !== undefined && !QC() && {
            error
        },
        ...error_class !== undefined && Ft.test(error_class) && {
            error_class
        }
    };
}
function Yro(n) {
    return `${n.name} (${n.message.length} chars; text not recorded)`;
}
function F(n) {
    return {
        code: p.SpanStatusCode.ERROR,
        ...n && !QC() && {
            message: n
        }
    };
}
function T() {
    return p.trace.getTracer("com.anthropic.claude_code.tracing", "1.0.0");
}
function S() {
    return Qpr();
}
function O(n) {
    let e = S().getValue(n);
    if (e && !e.ended) {
        return e;
    }
}
function v(n, e) {
    A.set(e.span, e);
    let r = p.trace.setSpan(e.priorContext, e.span).setValue(n, e);
    Yye.enterWith(r);
    if (n === I) {
        goo(r);
    }
}
function x(n, e) {
    e.ended = true;
    if (n === I && hoo()?.getValue(n) === e) {
        goo(undefined);
    }
    if (S().getValue(n) === e) {
        Yye.enterWith(e.priorContext);
    }
}
function C(n, e = {}) {
    return {
        ...Et(),
        "span.type": n,
        ...e
    };
}
function Dt(n) {
    if (!n) {
        return [];
    }
    return n.linked.flatMap(({ traceparent })=>{
        let r = vt(traceparent);
        if (r) {
            return [
                {
                    context: r,
                    attributes: {
                        "link.type": "queued_send"
                    }
                }
            ];
        }
        return [];
    });
}
function At() {
    return S().getValue(Tt);
}
function wOn() {
    return At()?.contexts;
}
function Fpr() {
    let n = At();
    if (n) {
        n.contexts = undefined;
    }
}
function It(n, e) {
    if (sf(e)) {
        return;
    }
    let r = e.agentId !== undefined ? N(e.agentId) : undefined;
    if (r !== undefined) {
        n.setAttribute("agent_id", r);
    }
    let s = e.parentAgentId !== undefined ? N(e.parentAgentId) : undefined;
    if (s !== undefined) {
        n.setAttribute("parent_agent_id", s);
    }
}
function Ht(n, e) {
    let r = B0e() ? gt(n) : undefined;
    let s = S();
    if (!uB()) {
        if (r) {
            let E = p.trace.getActiveSpan() || T().startSpan("dummy");
            v(I, {
                span: E,
                startTime: performance.now(),
                attributes: {
                    "span.type": "interaction"
                },
                perfettoSpanId: r,
                priorContext: s
            });
            return E;
        }
        return p.trace.getActiveSpan() || T().startSpan("dummy");
    }
    let o = T();
    let user_prompt = a.OTEL_LOG_USER_PROMPTS && !QC() ? qye(()=>_Ae(B().host), undefined, n) : "<REDACTED>";
    let c = ++qt.of(B().host).lastSequence;
    let d = C("interaction", {
        user_prompt,
        user_prompt_length: n.length,
        "interaction.sequence": c
    });
    let g = QC() ? e : undefined;
    let f = g?.parent ? D.extract(s, {
        traceparent: g.parent.traceparent
    }, p.defaultTextMapGetter) : s;
    let m = f === s && Ee() && a.TRACEPARENT ? p.propagation.extract(s, {
        traceparent: a.TRACEPARENT,
        tracestate: a.TRACESTATE
    }) : s;
    let h = f !== s ? f : m;
    d["parent.source"] = f !== s ? "event" : m !== s ? "env" : "none";
    let links = Dt(g);
    d.queued_sends = links.length;
    let y = o.startSpan("claude_code.interaction", {
        attributes: d,
        links
    }, h);
    if (!QC()) {
        tt(y, n);
    }
    v(I, {
        span: y,
        startTime: performance.now(),
        attributes: d,
        perfettoSpanId: r,
        priorContext: s
    });
    return y;
}
function vOn(n, e, r) {
    let [s, o] = typeof e === "function" ? [
        undefined,
        e
    ] : [
        e,
        r
    ];
    let i = {
        contexts: s
    };
    return Yye.with(S().setValue(Tt, i), ()=>{
        let u = S();
        Ht(n, s);
        let c = S();
        try {
            return Yye.with(c, o);
        } finally{
            if (S() === c) {
                Yye.enterWith(u);
            }
        }
    });
}
function zye() {
    let n = O(I);
    if (!n) {
        return;
    }
    if (n.perfettoSpanId) {
        mt(n.perfettoSpanId);
    }
    if (!uB()) {
        x(I, n);
        return;
    }
    let e = Math.max(0, Math.round(performance.now() - n.startTime));
    n.span.setAttributes({
        "interaction.duration_ms": e
    });
    n.span.end();
    x(I, n);
}
function Upr(n, e, r, s, o, i, u) {
    let c = B0e() ? it({
        model: n,
        querySource: i ?? r?.querySource,
        messageId: undefined
    }) : undefined;
    let d = S();
    if (!uB()) {
        if (c) {
            let E = p.trace.getActiveSpan() || T().startSpan("dummy");
            A.set(E, {
                span: E,
                startTime: performance.now(),
                attributes: {
                    model: n
                },
                perfettoSpanId: c,
                priorContext: d
            });
            return E;
        }
        return p.trace.getActiveSpan() || T().startSpan("dummy");
    }
    let g = T();
    let f = S().getValue(P);
    let m = QC() ? Dn(n) : n;
    let h = C("llm_request", {
        model: m,
        "gen_ai.system": "anthropic",
        "gen_ai.request.model": m,
        "llm_request.context": f ? "tool" : O(I) ? "interaction" : "standalone",
        speed: o ? "fast" : "normal"
    });
    let l = g.startSpan("claude_code.llm_request", {
        attributes: h
    }, d);
    if (r?.querySource && !QC()) {
        l.setAttribute("query_source", r.querySource);
    }
    let y = Nt(i ?? r?.querySource);
    if (y !== undefined) {
        l.setAttribute("query_source_safe", y);
    }
    if (e && !sf(e)) {
        It(l, e);
        if (!QC()) {
            l.setAttributes(AZt(e));
        }
    }
    if (!QC()) {
        et(l, r, s, u);
    }
    A.set(l, {
        span: l,
        startTime: performance.now(),
        attributes: h,
        perfettoSpanId: c,
        priorContext: d
    });
    return l;
}
function Bpr(n, { attempt, clientRequestId }) {
    let s = {
        attempt
    };
    if (clientRequestId !== undefined) {
        s.client_request_id = clientRequestId;
    }
    if (n && uB()) {
        n.addEvent("gen_ai.request.attempt", s);
    }
    ft("LLM Attempt", "api,attempt", s);
}
var D = new St.W3CTraceContextPropagator;
function vt(traceparent) {
    let e = D.extract(p.ROOT_CONTEXT, {
        traceparent
    }, p.defaultTextMapGetter);
    return p.trace.getSpanContext(e);
}
function r5t(n, e) {
    if (!n) {
        return;
    }
    let r = A.get(n);
    if (!r || r.ended) {
        return;
    }
    r.ended = true;
    let s = Math.max(0, Math.round(performance.now() - r.startTime));
    if (e?.error !== undefined) {
        e = {
            ...e,
            error: qye(e.accountMemoryKeys ?? (()=>_Ae(B().host)), e.querySource, e.error)
        };
    }
    if (r.perfettoSpanId) {
        at(r.perfettoSpanId, {
            ttftMs: e?.ttftMs,
            ttltMs: s,
            promptTokens: e?.inputTokens,
            outputTokens: e?.outputTokens,
            cacheReadTokens: e?.cacheReadTokens,
            cacheCreationTokens: e?.cacheCreationTokens,
            success: e?.success,
            error: e?.error,
            requestSetupMs: e?.requestSetupMs,
            attemptStartTimes: e?.attemptStartTimes,
            requestId: e?.requestId,
            clientRequestId: e?.clientRequestId
        });
    }
    if (!uB()) {
        return;
    }
    let o = {
        duration_ms: s
    };
    if (e) {
        if (e.inputTokens !== undefined) {
            o.input_tokens = e.inputTokens;
        }
        if (e.outputTokens !== undefined) {
            o.output_tokens = e.outputTokens;
        }
        if (e.cacheReadTokens !== undefined) {
            o.cache_read_tokens = e.cacheReadTokens;
        }
        if (e.cacheCreationTokens !== undefined) {
            o.cache_creation_tokens = e.cacheCreationTokens;
        }
        if (e.success !== undefined) {
            o.success = e.success;
        }
        if (e.statusCode !== undefined) {
            o.status_code = e.statusCode;
        }
        Object.assign(o, G(e.error, e.errorClass));
        if (e.attempt !== undefined) {
            o.attempt = e.attempt;
        }
        if (e.hasToolCall !== undefined) {
            o["response.has_tool_call"] = e.hasToolCall;
        }
        if (e.requestId !== undefined) {
            o.request_id = e.requestId;
            o["gen_ai.response.id"] = e.requestId;
        }
        if (e.clientRequestId !== undefined) {
            o.client_request_id = e.clientRequestId;
        }
        if (e.ttftMs !== undefined) {
            o.ttft_ms = e.ttftMs;
        }
        if (e.firstContentMs !== undefined) {
            o.first_content_ms = e.firstContentMs;
        }
        if (e.effort !== undefined) {
            o.effort = e.effort;
        }
        if (!QC()) {
            nt(o, e);
        }
    }
    r.span.setAttributes(o);
    if (e?.stopReason !== undefined) {
        r.span.setAttribute("stop_reason", e.stopReason);
        r.span.setAttribute("gen_ai.response.finish_reasons", [
            e.stopReason
        ]);
    }
    if (e?.success === false) {
        r.span.setStatus(F(e.error));
    }
    if (e?.traceresponse) {
        let i = vt(e.traceresponse);
        if (i) {
            r.span.addLink({
                context: i,
                attributes: {
                    "link.type": "parent_of"
                }
            });
        }
    }
    r.span.end();
}
function Qas(tool_name, e, r, s, o, i = false) {
    let u = B0e() ? ut(tool_name, r) : undefined;
    let c = S();
    if (!uB()) {
        if (u) {
            let h = p.trace.getActiveSpan() || T().startSpan("dummy");
            v(P, {
                span: h,
                startTime: performance.now(),
                attributes: {
                    "span.type": "tool",
                    tool_name
                },
                perfettoSpanId: u,
                priorContext: c
            });
            return h;
        }
        return p.trace.getActiveSpan() || T().startSpan("dummy");
    }
    let d = T();
    let tool_name_safe = $t(tool_name);
    let f = C("tool", {
        tool_name: QC() ? tool_name_safe : tool_name,
        tool_name_safe,
        ...r
    });
    let m = d.startSpan("claude_code.tool", {
        attributes: f
    }, c);
    if (e && !sf(e)) {
        It(m, e);
        if (!QC()) {
            m.setAttributes(AZt(e));
        }
    }
    yt(m, o);
    if (s && !QC()) {
        rt(m, tool_name, s, i);
    }
    v(P, {
        span: m,
        startTime: performance.now(),
        attributes: f,
        perfettoSpanId: u,
        priorContext: c
    });
    return m;
}
function Zas() {
    let n = B0e() ? pt("tool_permission") : undefined;
    let e = S();
    if (!uB()) {
        if (n) {
            let i = p.trace.getActiveSpan() || T().startSpan("dummy");
            v(w, {
                span: i,
                startTime: performance.now(),
                attributes: {
                    "span.type": "tool.blocked_on_user"
                },
                perfettoSpanId: n,
                priorContext: e
            });
            return i;
        }
        return p.trace.getActiveSpan() || T().startSpan("dummy");
    }
    let r = T();
    let s = C("tool.blocked_on_user");
    let o = r.startSpan("claude_code.tool.blocked_on_user", {
        attributes: s
    }, e);
    v(w, {
        span: o,
        startTime: performance.now(),
        attributes: s,
        perfettoSpanId: n,
        priorContext: e
    });
    return o;
}
function els(decision, source) {
    let r = O(w);
    if (!r) {
        return;
    }
    if (r.perfettoSpanId) {
        dt(r.perfettoSpanId, {
            decision,
            source
        });
    }
    if (!uB()) {
        x(w, r);
        return;
    }
    let o = {
        duration_ms: Math.max(0, Math.round(performance.now() - r.startTime))
    };
    if (decision) {
        o.decision = decision;
    }
    if (source) {
        o.source = source;
    }
    r.span.setAttributes(o);
    r.span.end();
    x(w, r);
}
function tls(n) {
    let e = S();
    if (!uB()) {
        return p.trace.getActiveSpan() || T().startSpan("dummy");
    }
    let r = T();
    let s = C("tool.execution");
    let o = r.startSpan("claude_code.tool.execution", {
        attributes: s
    }, e);
    yt(o, n);
    v(Y, {
        span: o,
        startTime: performance.now(),
        attributes: s,
        priorContext: e
    });
    return o;
}
function Xro(n) {
    if (!uB()) {
        return;
    }
    let e = O(Y);
    if (!e) {
        return;
    }
    let s = {
        duration_ms: Math.max(0, Math.round(performance.now() - e.startTime))
    };
    if (n) {
        if (n.success !== undefined) {
            s.success = n.success;
        }
        Object.assign(s, G(n.error, n.errorClass));
    }
    e.span.setAttributes(s);
    if (n?.success === false) {
        e.span.setStatus(F(n.error));
    }
    e.span.end();
    x(Y, e);
}
function uot(n, e, resultTokens, s = false) {
    let o = n ? A.get(n) : O(P);
    if (!o || o.ended) {
        return;
    }
    if (o.perfettoSpanId) {
        ct(o.perfettoSpanId, {
            success: true,
            resultTokens
        });
    }
    if (!uB()) {
        x(P, o);
        return;
    }
    let u = {
        duration_ms: Math.max(0, Math.round(performance.now() - o.startTime))
    };
    if (e && true && !QC()) {
        let c = o.attributes.tool_name || "unknown";
        st(u, c, e, s);
    }
    if (resultTokens !== undefined) {
        u.result_tokens = resultTokens;
    }
    o.span.setAttributes(u);
    o.span.end();
    x(P, o);
}
function Jro(n) {
    return uB() && fOt() && !QC() && n.isRecording();
}
function nls(n) {
    if (typeof n === "string") {
        return n;
    }
    if (!Array.isArray(n)) {
        return "";
    }
    return n.map((e)=>{
        if (e?.type === "text") {
            return String(e.text);
        }
        return `[${String(e?.type ?? "unknown")}]`;
    }).join(`
`);
}
function Qro(n, e, r) {
    if (!Jro(n)) {
        return;
    }
    let s = A.get(n);
    if (!s || s.ended) {
        return;
    }
    let o = {};
    for (let [i, u] of Object.entries(r)){
        if (typeof u === "string") {
            let { content, truncated } = Dx(u);
            o[i] = content;
            if (truncated) {
                o[`${i}_truncated`] = true;
                o[`${i}_original_length`] = u.length;
            }
        } else {
            o[i] = u;
        }
    }
    s.span.addEvent(e, o);
}
function Zro(n) {
    if (!uB()) {
        return;
    }
    let e = n.spanContext();
    if (!e.traceId || e.traceId === "00000000000000000000000000000000") {
        return;
    }
    let r = p.trace.setSpan(p.context.active(), n);
    let s = {};
    D.inject(r, s, p.defaultTextMapSetter);
    return s.traceparent;
}
function gAe() {
    if (!uB()) {
        return;
    }
    let n = p.trace.getSpan(S());
    if (!n) {
        return;
    }
    return Zro(n);
}
function rls(traceparent) {
    if (!traceparent || !uB()) {
        return;
    }
    let e = S();
    let r = D.extract(e, {
        traceparent
    }, p.defaultTextMapGetter);
    if (r === e) {
        return undefined;
    }
    return r;
}
function ols(n, e) {
    if (n === undefined) {
        return e();
    }
    return Yye.with(n, e);
}
function EOn(n, e) {
    if (!Vne()) {
        return;
    }
    return T().startSpan(n, {
        attributes: {
            ...Et(),
            "span.type": e.spanType,
            ...QC() ? ua(e.attrs ?? {}, (r, s)=>Bt.has(s)) : e.attrs,
            ...!QC() && e.contentAttrs
        }
    }, S());
}
async function kOn(n, e, r) {
    let s = EOn(n, e);
    if (!s) {
        return r(undefined);
    }
    let o = p.trace.setSpan(S(), s);
    return Yye.with(o, async ()=>{
        try {
            return await r(s);
        } catch (error) {
            if (!e.isExpectedError?.(error)) {
                let u = error instanceof Error && e.withholdErrorText?.(error) ? Yro(error) : undefined;
                if (error instanceof Error && !QC()) {
                    s.recordException(u === undefined ? error : {
                        name: error.name,
                        message: u
                    });
                }
                mAt(s, u ?? (error instanceof Error ? error.message : String(error)));
            }
            throw error;
        } finally{
            s.end();
        }
    });
}
function sls(n) {
    if (!Vne()) {
        return;
    }
    let e = S();
    let agent_id = N(n.agentId);
    let parent_agent_id = n.parentAgentId !== undefined ? N(n.parentAgentId) : undefined;
    let o = C("subagent.spawn", {
        ...agent_id !== undefined && {
            agent_id
        },
        agent_type: QC() && !n.isBuiltIn ? "custom" : n.agentType,
        ...parent_agent_id !== undefined && {
            parent_agent_id
        }
    });
    let i = T().startSpan("claude_code.subagent.spawn", {
        attributes: o
    }, e);
    v(_t, {
        span: i,
        startTime: performance.now(),
        attributes: o,
        priorContext: e
    });
    return i;
}
function ils(n, e) {
    if (!n) {
        return;
    }
    let r = A.get(n);
    if (!r || r.ended) {
        return;
    }
    if (e?.success !== undefined) {
        n.setAttribute("success", e.success);
    }
    if (e?.error) {
        n.setAttributes(G(e.error, e.errorClass));
        mAt(n, e.error);
    }
    n.end();
    x(_t, r);
}
function xt() {
    return JC() || Vne();
}
function als(hook_event, e, num_hooks, s) {
    if (!xt()) {
        return p.trace.getActiveSpan() || T().startSpan("dummy");
    }
    let o = T();
    let i = S();
    let { content } = Dx(s);
    let c = C("hook", {
        hook_event,
        hook_name: QC() ? hook_event : e,
        num_hooks,
        ...xd() && !QC() && {
            hook_definitions: content
        }
    });
    let d = o.startSpan("claude_code.hook", {
        attributes: c
    }, i);
    A.set(d, {
        span: d,
        startTime: performance.now(),
        attributes: c,
        priorContext: i
    });
    return d;
}
function lls(n, e) {
    if (!xt()) {
        return;
    }
    let r = A.get(n);
    if (!r || r.ended) {
        return;
    }
    r.ended = true;
    let o = {
        duration_ms: Math.max(0, Math.round(performance.now() - r.startTime))
    };
    if (e) {
        if (e.numSuccess !== undefined) {
            o.num_success = e.numSuccess;
        }
        if (e.numBlocking !== undefined) {
            o.num_blocking = e.numBlocking;
        }
        if (e.numNonBlockingError !== undefined) {
            o.num_non_blocking_error = e.numNonBlockingError;
        }
        if (e.numCancelled !== undefined) {
            o.num_cancelled = e.numCancelled;
        }
    }
    r.span.setAttributes(o);
    if (e && (e.numNonBlockingError ?? 0) > 0) {
        r.span.setStatus(F(`${e.numNonBlockingError} hook(s) failed`));
    }
    r.span.end();
}
export { Dx, Xas, JC, Jas, B0e, bOn, j0e, Kro, uB, Vne, SOn, mAt, QC, Yro, wOn, Fpr, vOn, zye, Upr, Bpr, r5t, Qas, Zas, els, tls, Xro, uot, Jro, nls, Qro, Zro, gAe, rls, ols, EOn, kOn, sls, ils, als, lls };
