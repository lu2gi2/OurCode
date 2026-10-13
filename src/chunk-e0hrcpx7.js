import { Ne, vs } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, lt, B, K, vd } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { po } from "/$bunfs/root/chunk-xgw72tt1.js";
import { tvs, kt, Hoe, _ho, tt, U7t, tue, We, Gf, k, Gr, Nl, zEr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { UGn } from "/$bunfs/root/chunk-x47nahfr.js";
import { w_, $vo, qd } from "/$bunfs/root/chunk-nj0630nv.js";
import { wo } from "/$bunfs/root/chunk-6s83kxfy.js";
import { CCe } from "/$bunfs/root/chunk-tsamgvyd.js";
import { Ht, _H, Dn, Rp, oq } from "/$bunfs/root/chunk-77t63btp.js";
import { o, T } from "/$bunfs/root/chunk-smx21d0k.js";
const Z = "tengu_fennel_godwit";
function OLn(e) {
    if (e === undefined) {
        return false;
    }
    if (w_(We(e), "opus_5_prompt_bundle", e) !== true) {
        return false;
    }
    return !k(Z, false);
}
function y(e) {
    return !UGn() && w_(e, "opus_5_5_prompt_bundle") === true;
}
const Q = new Set([
    "turn_updates",
    "bash_output_audience_note",
    "silent_turn_reminder",
    "thinking_display_updates"
]);
const X = new Set([
    "bison_cairn",
    "larch_cistern"
]);
const J = new Set([
    "silent_turn_reminder",
    "quizzical_shore"
]);
const ee = 64;
const te = "tengu_model_capability_from_client_data";
const M = "tengu_model_capability_off_from_client_data";
function K$(e, n, r, s) {
    if (s !== undefined) {
        return s;
    }
    let u = w_(n, e, r);
    if (u !== undefined) {
        return u;
    }
    let l = Q.has(e) && CCe(n) || X.has(e) && OLn(r) || J.has(e) && y(n);
    let m = zEr(r);
    if (l) {
        if (m?.data?.[e] !== false) {
            return true;
        }
        x(M, e, m);
        return false;
    }
    if (m?.data?.[e] !== true) {
        return false;
    }
    x(te, e, m);
    return true;
}
function Ags(e, n, r) {
    let s = $vo(n);
    return [
        ..._ho(r, n) ?? [],
        ...s.keys()
    ].findLast((u)=>u.startsWith(e) && s.get(u) !== false)?.slice(e.length);
}
function x(e, n, r) {
    let s = r.model ?? Dn(tt());
    let u = wo().clientDataCapabilityLogged ??= new Map;
    let l = K();
    let m = u.get(l);
    if (m === undefined) {
        m = new Set;
        u.set(l, m);
        if (u.size > ee) {
            let g = u.keys().next().value;
            if (g !== undefined) {
                u.delete(g);
            }
        }
    }
    let f = `${e === M ? "-" : ""}${n}:${s}`;
    if (!m.has(f)) {
        m.add(f);
        i(e, {
            capability: d(n),
            model: kt(s)
        });
    }
}
function ne(e, n) {
    if (oe() !== e) {
        return false;
    }
    return K$("per_turn_effort", e, n);
}
function oe() {
    try {
        return We(tt());
    } catch  {
        return null;
    }
}
tvs(ne);
function Cgs(e) {
    return false;
}
function Rgs(e) {
    return Ht(e) === "claude-opus-4-8";
}
function xgs(e) {
    return false;
}
const re = new Set([
    "claude-opus-4-6",
    "claude-haiku-4-5",
    "claude-opus-4-5",
    "claude-opus-4-1",
    "claude-opus-4-0",
    "claude-sonnet-4-5",
    "claude-sonnet-4-0",
    "claude-3-7-sonnet",
    "claude-3-5-sonnet",
    "claude-3-5-haiku"
]);
function P(e) {
    return re.has(Ht(e));
}
function MXt(e, n) {
    if (n === undefined) {
        return P(e);
    }
    return n.model !== undefined && P(n.model);
}
function gCe(e) {
    return /-eap($|\[)/i.test(e);
}
const O = "tengu_loggia_roster";
const L = [];
const se = p(()=>T(o().trim()));
let w;
function ie() {
    let raw = k(O, L);
    let n = w;
    if (n !== undefined && n.raw === raw) {
        return n.ids;
    }
    let r = se().safeParse(raw);
    if (!r.success) {
        t(`GrowthBook: ${O} is not a JSON array of model ids; treating it as empty`, {
            level: "warn"
        });
    }
    let ids = r.success ? r.data : L;
    w = {
        raw,
        ids
    };
    return ids;
}
function Syr(e) {
    return ie().some((n)=>_H(e, n));
}
function wyr(e) {
    let n = h();
    if (Hoe()) {
        return n.delegationCostsFirstCompiledOnly(e);
    }
    return n.delegationCostsFirst(e);
}
function F(e) {
    if (e === undefined) {
        return false;
    }
    let n = We(e);
    let r = w_(n, "lucky_cerf", e);
    if (r === false) {
        return false;
    }
    if (Hoe()) {
        return r === true;
    }
    if (K$("lucky_cerf", n, e)) {
        return true;
    }
    let s = Gr("tengu_lucky_cerf", null);
    return Array.isArray(s) && s.some((u)=>typeof u === "string" && _H(n, u));
}
function U(e, n) {
    let r = Nl()?.[e];
    return typeof r === "object" && r !== null && Object.entries(r).some(([s, u])=>u === true && n.includes(s));
}
function Pgs(e) {
    return a.CLAUDE_CODE_BASALT_COVE || U("basalt_cove", e);
}
const G = "tengu_thrifty_sonic";
function ae() {
    let e = h();
    if (Hoe()) {
        return e.bashFirstSessionAssignmentCompiledOnly();
    }
    return e.bashFirstSessionAssignment();
}
function v() {
    let e = NQ(tt());
    let n = We(e);
    let r = w_(n, "thrifty_sonic", e);
    if (r === false) {
        return "none";
    }
    if (CCe(n) || y(n) || Nl()?.[G] === true || r) {
        return "forced";
    }
    if (U7t(e)) {
        return "cohort";
    }
    return "none";
}
function HXt() {
    if (a.CLAUDE_CODE_THRIFTY_SONIC !== undefined) {
        return a.CLAUDE_CODE_THRIFTY_SONIC;
    }
    switch(ae()){
        case "forced":
            return true;
        case "none":
            return false;
        case "cohort":
            return k(G, false);
    }
}
const D = "tengu_cozy_teapot";
function N(e) {
    if (e === "strict" || e === "relaxed") {
        return e;
    }
}
function Igs() {
    return a.CLAUDE_CODE_COZY_TEAPOT ?? h().bashFirstSteerVariant();
}
function ce() {
    return N(Nl()?.[D]) ?? (y(We(NQ(tt()))) ? "relaxed" : undefined) ?? N(Gr(D, null)) ?? "strict";
}
const ue = "tengu_gorse_plover";
const S = "tengu_willow_tern";
function le(CLAUDE_CODE_GORSE_PLOVER, n) {
    return CLAUDE_CODE_GORSE_PLOVER || Nl()?.[n] === true || k(n, false);
}
function Ogs() {
    let e = wo();
    e.bashActFirstEnabled ??= le(a.CLAUDE_CODE_GORSE_PLOVER, ue);
    return e.bashActFirstEnabled;
}
function Mgs(e) {
    return K$("amber_astrolabe", We(e), e, a.CLAUDE_CODE_AMBER_ASTROLABE || undefined);
}
function Hgs(e) {
    return K$("bison_cairn", We(e), e, a.CLAUDE_CODE_BISON_CAIRN);
}
function Dgs(e) {
    return K$("larch_cistern", We(e), e, a.CLAUDE_CODE_LARCH_CISTERN || undefined);
}
function Rdo() {
    let e = Nl()?.[S];
    if (typeof e === "boolean") {
        return e;
    }
    if (e !== undefined) {
        let n = h();
        if (!n.unusableWritingOverrideTold) {
            n.unusableWritingOverrideTold = true;
            t(`willow_tern: ignoring non-boolean clientData ${S} value of type ${typeof e}`);
        }
    }
}
function Lgs(e) {
    if (a.CLAUDE_CODE_WILLOW_TERN) {
        return true;
    }
    let n = Rdo();
    if (n !== undefined) {
        return n;
    }
    if (e === undefined) {
        return false;
    }
    let r = We(e);
    if (CCe(r)) {
        return true;
    }
    if (w_(r, "opus_5_prompt_bundle", e) !== true) {
        return false;
    }
    return k(S, false);
}
function TNe() {
    return a.CLAUDE_CODE_SIMPLE;
}
function de(e) {
    let n = We(e);
    let r = w_(n, "lean_prompt", e);
    if (r !== undefined) {
        return !r;
    }
    if (gCe(e) || n === "claude-mythos-5") {
        return false;
    }
    if (n.includes("claude-3-") || n.includes("haiku") || n.includes("sonnet") || n === "claude-opus-4-0" || n === "claude-opus-4-1" || n === "claude-opus-4-5" || n === "claude-opus-4-6" || n === "claude-opus-4-7") {
        return true;
    }
    return !qd();
}
function V4(e) {
    let n = h();
    if (Hoe()) {
        return n.leanPromptCompiledOnly(e);
    }
    return n.leanPrompt(e);
}
function qx(e) {
    return e.leanPrompt ?? V4(e.model);
}
function I(e) {
    if (!e) {
        return false;
    }
    if (Ne(a.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) {
        return true;
    }
    if (vs(a.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) {
        return false;
    }
    if (!de(e)) {
        return true;
    }
    if (k("tengu_velvet_tide", false)) {
        return true;
    }
    return U("simple_system_prompt", We(e));
}
const pe = "breezy_horizon";
function NQ(e) {
    if (e === undefined) {
        return;
    }
    let n = h();
    if (Hoe()) {
        return n.modelForPromptCompiledOnly(e);
    }
    return n.modelForPrompt(e);
}
function Ngs(e) {
    let modelForPrompt = h().modelForPrompt;
    if (modelForPrompt.cache.has(e)) {
        return modelForPrompt(e);
    }
}
function H(e) {
    let a_CLAUDE_CODE_BREEZY_HORIZON = a.CLAUDE_CODE_BREEZY_HORIZON;
    if (vs(a_CLAUDE_CODE_BREEZY_HORIZON)) {
        return e;
    }
    let r = Gf(e);
    let s = Nl()?.[pe];
    let u = a_CLAUDE_CODE_BREEZY_HORIZON ?? (typeof s === "object" && s !== null ? Object.entries(s).find(([f])=>f === r)?.[1] : undefined);
    if (u === undefined) {
        return e;
    }
    let l = a_CLAUDE_CODE_BREEZY_HORIZON !== undefined ? "env" : "client_data";
    if (typeof u !== "string" || !me(u)) {
        t(`[breezy_horizon] ${l}: ignoring ${String(u)} for ${r}: not a model id`, {
            level: "warn"
        });
        return e;
    }
    let m = Gf(u);
    if (m === r) {
        if (!oq(Rp(u))) {
            t(`[breezy_horizon] ${l}: ${u} names ${r} itself, so it maps nothing`, {
                level: "warn"
            });
        }
        return e;
    }
    let promptModelSwapsLogged = h().promptModelSwapsLogged;
    if (!promptModelSwapsLogged.has(e)) {
        promptModelSwapsLogged.add(e);
        i("tengu_breezy_horizon", {
            from_model: kt(r),
            to_model: kt(m),
            source: d(l)
        });
    }
    return u;
}
function me(e) {
    return tue(e) || !/\s/.test(e) && gCe(e) || oq(Rp(e));
}
class z {
    bashFirstSessionAssignment = po(v);
    bashFirstSessionAssignmentCompiledOnly = po(v);
    bashFirstSteerVariant = po(ce);
    leanPrompt = po(I);
    leanPromptCompiledOnly = po(I);
    modelForPrompt = po(H);
    modelForPromptCompiledOnly = po(H);
    delegationCostsFirst = po(F);
    delegationCostsFirstCompiledOnly = po(F);
    promptModelSwapsLogged = new Set;
    unusableWritingOverrideTold = false;
}
var he = new q(()=>new z);
function h() {
    return he.of(B().host);
}
const MB = 300000;
const iR = 3600000;
function MLn(e) {
    if ((e?.cache_creation?.ephemeral_1h_input_tokens ?? 0) > 0) {
        return "1h";
    }
    if ((e?.cache_creation?.ephemeral_5m_input_tokens ?? 0) > 0) {
        return "5m";
    }
}
const HB = "main";
function xdo(e, n) {
    return !n && (e.startsWith("repl_main_thread") || e === "sdk" || e === "compact");
}
const fe = 2000;
const _e = 200;
const V = {
    "5m": MB,
    "1h": iR
};
const Ugs = {
    system_prompt_changed: "system prompt changed",
    tools_changed: "tool definitions changed",
    model_changed: "model changed",
    fast_mode_changed: "fast mode toggled",
    cache_scope_or_ttl_changed: "cache scope or TTL changed",
    betas_changed: "beta headers changed",
    effort_changed: "effort changed",
    thinking_mode_changed: "thinking toggled",
    thinking_display_changed: "thinking display changed",
    auto_mode_changed: "auto mode toggled",
    overage_changed: "usage-limit state changed",
    extra_body_changed: "extra request fields changed",
    defer_loading_changed: "deferred tool loading changed",
    messages_rewritten: "earlier messages changed",
    ttl_expired_5m: "idle past the 5m TTL",
    ttl_expired_1h: "idle past the 1h TTL",
    likely_server_side: "prompt unchanged — likely server-side",
    unknown: "unknown"
};
class E {
    entries = [];
    requests = 0;
    hits = 0;
    misses = 0;
    expectedRebuilds = 0;
    coldStarts = 0;
    cacheReadTokens = 0;
    cacheCreationTokens = 0;
    inputTokens = 0;
    missRecacheTokens = 0;
    lastMissAt = null;
    lastMissAttribution = null;
    missCauses = {};
    pendingAttribution = null;
    dropExpectedAt = null;
    touchedAt = null;
    touch(e) {
        if (this.entries.length > 0) {
            this.touchedAt = Math.max(this.touchedAt ?? 0, e);
        }
    }
    expectDrop(e) {
        this.dropExpectedAt = e;
    }
    attribute(e) {
        this.pendingAttribution = e;
    }
    record(e) {
        let n = this.entries.at(-1) ?? null;
        let dropExpectedAt = this.dropExpectedAt;
        this.dropExpectedAt = null;
        let pendingAttribution = this.pendingAttribution;
        this.pendingAttribution = null;
        let u = dropExpectedAt !== null && n !== null && e.at - Math.max(n.at, this.touchedAt ?? 0) < V[n.ttl];
        let outcome;
        let m = this.cacheReadTokens + this.cacheCreationTokens > 0 || e.cacheReadTokens + e.cacheCreationTokens > 0;
        if (n === null) {
            outcome = "cold";
        } else if (!m) {
            outcome = "uncached";
        } else if (n.cacheReadTokens + n.cacheCreationTokens === 0 && e.cacheReadTokens + e.cacheCreationTokens > 0) {
            outcome = "cold";
        } else {
            let g = n.inputTokens + n.cacheReadTokens + n.cacheCreationTokens;
            let j = e.inputTokens + e.cacheReadTokens + e.cacheCreationTokens;
            let R = Math.min(g, j);
            let Y = R - e.cacheReadTokens;
            outcome = e.cacheReadTokens < R * 0.95 && Y >= fe ? u ? "expected" : "miss" : "hit";
        }
        let ttl = e.cacheCreationTokens === 0 && n !== null ? n.ttl : e.ttl;
        let f = outcome === "miss" && pendingAttribution !== null ? {
            ...e,
            ttl,
            outcome,
            attribution: pendingAttribution
        } : {
            ...e,
            ttl,
            outcome
        };
        this.entries.push(f);
        if (this.entries.length > _e) {
            this.entries.shift();
        }
        this.requests++;
        this.cacheReadTokens += e.cacheReadTokens;
        this.cacheCreationTokens += e.cacheCreationTokens;
        this.inputTokens += e.inputTokens;
        switch(outcome){
            case "hit":
                this.hits++;
                break;
            case "miss":
                this.misses++;
                this.missRecacheTokens += e.cacheCreationTokens;
                this.lastMissAt = e.at;
                this.lastMissAttribution = pendingAttribution;
                for (let g of pendingAttribution?.causes ?? []){
                    this.missCauses[g] = (this.missCauses[g] ?? 0) + 1;
                }
                break;
            case "expected":
                this.expectedRebuilds++;
                break;
            case "cold":
                this.coldStarts++;
                break;
            case "uncached":
                break;
        }
        return f;
    }
    summary(e) {
        let n = this.cacheReadTokens + this.cacheCreationTokens + this.inputTokens;
        let lastRequest = this.entries.at(-1) ?? null;
        let s = V[lastRequest?.ttl ?? "5m"];
        let cachingObserved = this.cacheReadTokens + this.cacheCreationTokens > 0;
        let l = lastRequest !== null && lastRequest.cacheReadTokens + lastRequest.cacheCreationTokens > 0;
        let m = lastRequest !== null ? Math.max(lastRequest.at, this.touchedAt ?? 0) : 0;
        return {
            requests: this.requests,
            hits: this.hits,
            misses: this.misses,
            expectedRebuilds: this.expectedRebuilds,
            coldStarts: this.coldStarts,
            hitRatio: n > 0 ? this.cacheReadTokens / n : null,
            cacheWriteTokens: this.cacheCreationTokens,
            missRecacheTokens: this.missRecacheTokens,
            lastMissAt: this.lastMissAt,
            lastMissAttribution: this.lastMissAttribution,
            missCauses: {
                ...this.missCauses
            },
            lastRequest,
            cachingObserved,
            lastActivityAt: lastRequest !== null ? m : null,
            expiresAt: lastRequest !== null && l ? m + s : null,
            warm: lastRequest !== null && l && e - m < s
        };
    }
}
class W {
    #e = new Map;
    record(e, n) {
        let r = this.#e.get(e);
        if (r === undefined) {
            r = new E;
            this.#e.set(e, r);
        }
        return r.record(n);
    }
    expectDrop(e, n) {
        this.#e.get(e)?.expectDrop(n);
    }
    attribute(e, n) {
        this.#e.get(e)?.attribute(n);
    }
    touch(e, n) {
        this.#e.get(e)?.touch(n);
    }
    summary(e, n) {
        return (this.#e.get(e) ?? new E).summary(n);
    }
    estimateRecacheTokens(e) {
        let n = this.#e.get(e);
        let r = n?.entries.at(-1);
        if (!r) {
            return 0;
        }
        if (n?.dropExpectedAt != null) {
            return null;
        }
        return r.inputTokens + r.cacheReadTokens + r.cacheCreationTokens;
    }
    clear(e) {
        if (e === undefined) {
            this.#e.clear();
        } else {
            this.#e.delete(e);
        }
    }
}
const Pdo = new lt(()=>new W);
function C() {
    return Pdo.of(B());
}
function Bgs(e, n) {
    try {
        return C().record(e, n);
    } catch (error) {
        c(error);
        return null;
    }
}
function jgs(e, n) {
    try {
        C().attribute(e, n);
    } catch (error) {
        c(error);
    }
}
function vyr(e, n) {
    try {
        C().touch(e, n);
    } catch (error) {
        c(error);
    }
}
function $4e(e = HB, n = Date.now()) {
    try {
        C().expectDrop(e, n);
    } catch (error) {
        c(error);
    }
}
function H5(e = HB, n = Date.now()) {
    return C().summary(e, n);
}
function Eyr(e = HB) {
    return C().estimateRecacheTokens(e);
}
function Wgs() {
    return vd((e, n)=>{
        if (n === "cd" || n === "hydrate") {
            return;
        }
        C().clear();
    });
}
const DXt = `# Reporting outcomes

Report what actually happened, not what you intended. When you say something is done, sent, saved, fixed, or verified, that claim must rest on a result you observed in this session \u2014 tool output, the file as it now reads, the page as it now loads \u2014 not on what the step should have produced. If you did not check, say you did not check. If any step failed, was skipped, or came back different from what you expected, say so in the first sentence of your report, before anything else, even when the rest of the work succeeded. Never quietly work around a failure in a way that makes it look resolved; a problem the user can see is recoverable, one your summary hides is not. When you stop before the task is complete, your first line says so plainly and names what is left. Do not describe partial work as done, and do not let a summary read as more certain than the evidence behind it.`;
const L4e = "x-anthropic-billing-header:";
function $gs({ text }) {
    return typeof text === "string" && text.startsWith(L4e);
}
function OB({ text }) {
    return typeof text === "string" && (text.startsWith(L4e) || text === DXt);
}
function WM(e) {
    let n = Bun.hash(_(e));
    if (typeof n === "bigint") {
        return Number(n & 0xffffffffn);
    }
    return n;
}
const ge = new Set([
    "type",
    "text",
    "thinking",
    "id",
    "tool_use_id",
    "name",
    "input",
    "source",
    "content",
    "cache_control"
]);
function A(e, n) {
    if (typeof e === "string") {
        n.push("s", String(e.length), e.slice(0, 32), e.slice(-32));
        return;
    }
    switch(e.type){
        case "text":
        case "image":
        case "document":
        case "search_result":
        case "thinking":
        case "redacted_thinking":
        case "tool_use":
        case "tool_result":
        case "tool_reference":
        case "server_tool_use":
        case "web_search_tool_result":
        case "web_fetch_tool_result":
        case "advisor_tool_result":
        case "code_execution_tool_result":
        case "bash_code_execution_tool_result":
        case "text_editor_code_execution_tool_result":
        case "tool_search_tool_result":
        case "mcp_tool_use":
        case "mcp_tool_result":
        case "mcp_tool_listing":
        case "container_upload":
        case "compaction":
        case "fallback":
        case "browser_state":
            break;
        default:
            {
                let s = e;
                break;
            }
    }
    n.push(e.type);
    if ("text" in e && typeof e.text === "string") {
        n.push("t", String(e.text.length), e.text.slice(0, 32), e.text.slice(-32));
    }
    if ("thinking" in e && typeof e.thinking === "string") {
        n.push("k", String(e.thinking.length));
    }
    if ("id" in e && typeof e.id === "string") {
        n.push("i", e.id);
    }
    if ("tool_use_id" in e && typeof e.tool_use_id === "string") {
        n.push("u", e.tool_use_id);
    }
    if ("name" in e && typeof e.name === "string") {
        n.push("n", e.name);
    }
    if ("input" in e && e.input !== undefined) {
        n.push("p", _(e.input));
    }
    if ("source" in e && e.source && typeof e.source === "object") {
        let s = e.source;
        n.push("m", String(s.type ?? ""), String(s.media_type ?? ""));
        if (typeof s.data === "string") {
            n.push(String(s.data.length));
        }
    }
    let r = "content" in e ? e.content : undefined;
    if (Array.isArray(r)) {
        n.push("[", String(r.length));
        for (let s of r){
            A(s, n);
        }
        n.push("]");
    } else if (typeof r === "string") {
        n.push("c", String(r.length), r.slice(0, 32), r.slice(-32));
    }
    for (let [s, u] of Object.entries(e)){
        if (ge.has(s) || u === undefined) {
            continue;
        }
        let l = typeof u === "string" ? u : _(u);
        n.push(s, l.length > 256 ? `len:${l.length}` : l);
    }
}
const N4e = -1;
function Fgs(e) {
    return e.map((n)=>{
        if ((n.type === "api_system" || n.type === "user") && n.ephemeral) {
            return N4e;
        }
        let r = [
            n.message.role
        ];
        if (n.type === "api_system" && n.outputConfig !== undefined) {
            let l = n.outputConfig.timing;
            r.push(`oc:${n.outputConfig.effort ?? ""}${l ? `:${l.now}` : ""}`);
        }
        let content = n.message.content;
        if (Array.isArray(content)) {
            r.push(String(content.length));
            for (let l of content){
                A(l, r);
            }
        } else {
            A(content, r);
        }
        let u = Bun.hash(r.join("|"));
        if (typeof u === "bigint") {
            return Number(u & 0xffffffffn);
        }
        return u;
    });
}
export { OLn, K$, Ags, Cgs, Rgs, xgs, MXt, gCe, Syr, wyr, Pgs, HXt, Igs, Ogs, Mgs, Hgs, Dgs, Rdo, Lgs, TNe, V4, qx, NQ, Ngs, DXt, L4e, $gs, OB, WM, N4e, Fgs, MB, iR, MLn, HB, xdo, Ugs, Pdo, Bgs, jgs, vyr, $4e, H5, Eyr, Wgs };
