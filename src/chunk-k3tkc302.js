import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { rpt, bOs, lBe, iwe, cBe, vDt, C0, r6 } from "/$bunfs/root/chunk-etbngzss.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ml, Ms, ne, yf } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a, Yn } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Oue } from "/$bunfs/root/chunk-pp3y3t61.js";
import { yPe } from "/$bunfs/root/chunk-x47nahfr.js";
import { Xen } from "/$bunfs/root/chunk-mvz09dzd.js";
import { AMt, CMt, Ez, _O, Yjn, Xjn, wdt, cTr, Pue, _tn, WCs } from "/$bunfs/root/chunk-1ej05ybf.js";
import { _Se } from "/$bunfs/root/chunk-wtrd0hw3.js";
import { Xk } from "/$bunfs/root/chunk-sfqgx6er.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
const pH = 50000;
const akr = 10000;
const ejn = 4000;
const t3e = 128000;
const _ue = 500000;
const wFe = 4;
const SAs = 400000;
const tjn = 200000;
const zT = 50;
const wAs = 1073741824;
const vAs = 10000;
const fen = 10000;
const eMt = 100000;
function Po() {
    if (dn().CLAUDE_AI_ORIGIN.includes("staging")) {
        return "staging";
    }
    return "prod";
}
function EAs() {
    return ie() ?? dn().CLAUDE_AI_ORIGIN;
}
function ie() {}
function w(e) {
    let n;
    try {
        n = new URL(e);
    } catch  {
        return;
    }
    let r = Xk(n.hostname);
    let o;
    switch(n.protocol){
        case "https:":
        case "wss:":
            o = "https:";
            break;
        case "http:":
        case "ws:":
            if (!r) {
                return;
            }
            o = "http:";
            break;
        default:
            return;
    }
    if (n.username !== "" || n.password !== "" || n.pathname !== "/" || n.search !== "" || n.hash !== "") {
        return;
    }
    return `${o}//${n.host}`;
}
function kAs() {
    return false;
}
function TAs() {
    return se() ?? dn().BASE_API_URL;
}
function se() {}
function AAs() {
    return false;
}
function ZRe() {}
const cSe = "/api/claude_code/policy_limits";
const p = "disabled by your organization's policy";
const P = "disabled for the rest of this session because an organization with a restricted policy was signed in earlier";
function ZOt(e, n, r, o) {
    if (_Se(r).length > 0) {
        return `${e} ${n} ${p}.`;
    }
    if (o !== undefined) {
        return o;
    }
    return `${e} ${n} ${p}. Contact your organization admin to enable ${n === "are" ? "them" : "it"}.`;
}
function QRe(e, n) {
    return `${e} ${n} ${P}. Restart Claude Code to re-evaluate.`;
}
function yue(e) {
    return `Couldn't verify your organization's policy for ${e.toLowerCase()}. Check your network connection and try again.`;
}
function Cct(e) {
    return `Couldn't load your organization's policy, which governs ${e.toLowerCase()}. The request for ${cSe} got a 404, which usually means a proxy or gateway between you and the API isn't forwarding that path. Ask your network admin to allow it; \`claude doctor\` (or /status in a session) shows which host was asked.`;
}
function ikr(e, n, r) {
    let o = `${e} ${n === "are" ? "aren't" : "isn't"} available`;
    let { host, httpStatus } = r;
    switch(r.errorCode){
        case "parse_failed":
            return `${o}: Claude Code couldn't read the reply when it asked ${host} for your organization's policy, which usually means a network proxy or web filter answered instead.`;
        case "network_error":
        case "timeout":
            return `${o}: couldn't reach ${host} to load your organization's policy. Check your network or proxy.`;
        case "auth_failed":
            if (httpStatus === 403) {
                return `${o}: ${host}, or a proxy in front of it, refused the request for your organization's policy (HTTP 403).`;
            }
            if (httpStatus === 401) {
                return `${o}: ${host} didn't accept this session's credentials when Claude Code asked for your organization's policy.`;
            }
            return `${o}: no credentials could be attached to the request for your organization's policy.`;
        case "spurious_304":
            return `${o}: the saved copy of your organization's policy belongs to a previous sign-in, and a fresh one hasn't loaded yet.`;
        case "stale_tunnel_credential":
            return `${o}: the machine running claude ssh changed credentials while your organization's policy was loading, and a fresh copy hasn't loaded yet.`;
        case "request_failed":
            if (httpStatus === 404) {
                return `${o}: the request for your organization's policy got a 404 from ${host}, which usually means a proxy or gateway isn't forwarding ${cSe}.`;
            }
            if (httpStatus === 304) {
                return `${o}: a caching proxy answered in place of ${host} when Claude Code asked for your organization's policy.`;
            }
            if (httpStatus === 407) {
                return `${o}: your proxy asked for authentication before it would forward the request for your organization's policy to ${host}.`;
            }
            if (httpStatus !== null && (httpStatus >= 500 || httpStatus === 429)) {
                return `${o}: your organization's policy couldn't be loaded from ${host} (HTTP ${httpStatus}). Try again later.`;
            }
            if (httpStatus !== null) {
                return `${o}: your organization's policy couldn't be loaded from ${host} (HTTP ${httpStatus}). Check your proxy settings.`;
            }
            return `${o}: the request to ${host} for your organization's policy didn't complete. If you use a proxy, check that it lets ${host} through.`;
    }
}
function hAs(e) {
    return `Couldn't verify your organization's policy for ${e.toLowerCase()}. Check your network connection, then restart Claude Code and try again.`;
}
function yAs(e) {
    return `/${e} is available for your organization but wasn't when this session started. Restart Claude Code to use it.`;
}
function Z1n(e, n) {
    if (_Se(e).length > 0) {
        return p;
    }
    return n ?? p;
}
function _As() {
    return `${P} \u2014 restart Claude Code to re-evaluate`;
}
function bAs() {
    return "couldn't verify your organization's policy — check your network connection and try again";
}
function Abo() {
    return `your organization's policy couldn't be loaded: the request for ${cSe} got a 404, which usually means a proxy or gateway isn't forwarding that path. Ask your network admin to allow it`;
}
const bue = "˹-˼⌌-⌏⌜-⌟⎛-⏌⏜-⏡⸀-⸍⸜⸝─-╿";
const Iw = "[Request interrupted by user]";
const Hu = "[Request interrupted by user for tool use]";
const SR = "[Tool call did not complete: the turn was ended to deliver the message that follows. Nothing refused it; re-run it if still needed.]";
const bP = "[Tool call interrupted: the session ended before this call's result was recorded, so its outcome is unknown. Check whether it took effect before relying on it or running it again.]";
const gN = "[Tool call result not in this copy: this session was copied from another session before that session recorded this call's result. The call may have finished there, may still be running there, or may never have run. Check whether it took effect before relying on it or running it again.]";
const WE = "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed.";
const exe = "[Tool call skipped: the turn ended to deliver the message that follows before this call ran. Nothing refused it; re-run it if still needed.]";
const txe = "[Tool call skipped: the turn was stopped before this call ran, by the check whose denial is on another call in this batch. Nothing refused this call and it had no effects; re-run it if still needed.]";
const Rct = "[Tool call not completed: an approval request expired with no answer, so the action awaiting approval did not run. Nobody refused it, so this is not the user's decision; ask again if it is still needed.]";
const xct = "[Tool call not completed: an approval request was still unanswered when the message that follows arrived and was closed, so the action awaiting approval did not run. Nobody refused it, so this is not the user's decision; ask again if it is still needed.]";
const dSe = [
    "[Request interrupted by user]",
    "[Request interrupted by user for tool use]",
    "[Tool call did not complete: the turn was ended to deliver the message that follows. Nothing refused it; re-run it if still needed.]",
    "[Tool call interrupted: the session ended before this call's result was recorded, so its outcome is unknown. Check whether it took effect before relying on it or running it again.]",
    "[Tool call result not in this copy: this session was copied from another session before that session recorded this call's result. The call may have finished there, may still be running there, or may never have run. Check whether it took effect before relying on it or running it again.]",
    "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed.",
    "[Tool call skipped: the turn was stopped before this call ran, by the check whose denial is on another call in this batch. Nothing refused this call and it had no effects; re-run it if still needed.]",
    "[Tool call skipped: the turn ended to deliver the message that follows before this call ran. Nothing refused it; re-run it if still needed.]"
];
function Db(e) {
    if (e.type !== "user") {
        return false;
    }
    let n = e.message?.content;
    if (typeof n === "string") {
        return dSe.some((r)=>n.startsWith(r));
    }
    if (!Array.isArray(n)) {
        return false;
    }
    return n.length > 0 && n.every((r)=>{
        let o = r?.type === "text" ? r.text : r?.type === "tool_result" && r.is_error === true ? r.content : undefined;
        return typeof o === "string" && dSe.some((i)=>o.startsWith(i));
    });
}
const Pct = "User rejected tool use";
const SP = "API Error: Request was aborted.";
const n3e = `The user sent a new message while you were working:
`;
const nxe = "Operation stopped by hook";
function men(e) {
    return e.startsWith(WE) || e.startsWith(exe) || e.startsWith(txe);
}
const Ict = `

Note: The user's next message may contain a correction or preference. Pay close attention \u2014 if they explain what went wrong or how they'd prefer you to work, consider saving that to memory for future sessions.`;
function uSe(e) {
    if (e.type !== "user" || e.interruptedByShutdown !== true) {
        return false;
    }
    let n = e.message?.content;
    return Array.isArray(n) && n.some((r)=>r.type === "tool_result");
}
const lkr = ` hook feedback:
`;
const Cbo = [
    "Stop",
    "TeammateIdle",
    "TaskCreated",
    "TaskCompleted"
];
function njn(e, n) {
    return `${e}${lkr}${n}`;
}
const tMt = "[structured-output-enforce]";
const Rbo = "";
const Oct = "[projects-reply-gate]";
const gen = "The previous response failed to produce a valid tool call. Please retry the tool call now.";
const xbo = "Your tool call was malformed and could not be parsed. Please retry.";
const hen = "[Your previous response had no visible output. Please continue and produce a user-visible response.]";
const yen = "The PermissionDenied hook indicated you may retry this tool call.";
const ckr = "Your response above was stopped by a safety classifier — this is not a tool or API error. " + "The rest of it was withheld, and tool calls in it that had not finished did not run. Do not produce that content again, even reworded.";
const Pbo = `${ckr} Exception: a tool call whose result reads "Interrupted" was already running when the response was stopped; it may have partially or fully completed.`;
const Mct = "Output token limit hit. Resume directly — no apology, no recap of what you were doing. " + "Pick up mid-thought if that is where the cut happened. Break remaining work into smaller pieces.";
const Hct = "Output token limit hit while you were still reasoning, before this response produced any text or tool call. That reasoning was not kept and is not part of this conversation, so there is nothing to resume. Continue from the conversation above: reason much more briefly and produce your answer or next tool call well within the output limit.";
const Ibo = "Your response was cut off because it exceeded the output token limit. Continue from where you left off. What you write next is shown as a separate block below the text so far, so begin at the start of the line, table row, list item or sentence that was cut, writing it again in full, and if you were inside a code block or a table, open it again first (the same code fence and language, the table's header row). Repeat nothing before that point and do not comment on the interruption. Keep going until the response is complete.";
const Obo = "[Your previous response reached the output limit with no visible output. Please continue and produce a brief user-visible response or tool call right away.]";
const nMt = "Your response above was cut off mid-stream. Resume directly from where it stops — no apology, no recap. " + "If none of it survived, answer the request from the start.";
const rMt = "Your response above was cut off mid-stream and only your next message is delivered. " + "Write the complete response again from the start — no apology, no mention of the cut-off.";
const _en = "Goal check-in: «";
const ue = [
    tMt,
    Rbo,
    Oct,
    Xen,
    _en
].filter((e)=>e.length > 0);
const ce = [
    gen,
    xbo,
    hen,
    yen,
    ckr,
    Pbo,
    Mct,
    Hct,
    Obo,
    Ibo,
    nMt,
    rMt
];
function r3e(e) {
    if (e.type !== "user" || e.isMeta !== true) {
        return false;
    }
    let n = U(e.message?.content);
    if (n === undefined) {
        return false;
    }
    if (ue.some((r)=>n.startsWith(r))) {
        return true;
    }
    if (ce.includes(n)) {
        return true;
    }
    return Cbo.some((r)=>n.startsWith(`${r}${lkr}`));
}
function CAs(e) {
    if (!r3e(e)) {
        return false;
    }
    let n = U(e.message?.content);
    return n === nMt || n === rMt;
}
function U(e) {
    if (typeof e === "string") {
        return e;
    }
    let n = Array.isArray(e) ? e[0] : undefined;
    if (typeof n === "object" && n !== null && "type" in n && n.type === "text" && "text" in n && typeof n.text === "string") {
        return n.text;
    }
}
const dAs = [
    "mcp_needs_auth",
    "mcp_disabled",
    "mcp_required_missing",
    "auth_expired",
    "auth_overridden",
    "auth_missing_scope",
    "design_needs_authorization",
    "sandbox_violation",
    "outside_reads_blocked",
    "memory_paused",
    "feature_disabled",
    "policy_denied",
    "spawn_arg_limit",
    "staged_for_review"
];
const uAs = [
    "claude_ai",
    "claude_design"
];
const pAs = [
    "workflows",
    "artifacts"
];
const fAs = [
    "managed_settings",
    "org_policy",
    "unavailable",
    "user_setting"
];
const mAs = [
    "org_denied",
    "latched"
];
function lSe() {
    return {
        kind: "auth_expired",
        provider: "claude_ai"
    };
}
function e3e(managed) {
    return {
        kind: "auth_overridden",
        provider: "claude_ai",
        managed
    };
}
function pen(e) {
    switch(e){
        case "env":
            return e3e(false);
        case "fd":
            return e3e(true);
        case "store":
        case "none":
            return lSe();
    }
}
const v = new WeakMap;
function uH(e, n) {
    v.set(e, n);
    return e;
}
function gAs(e) {
    if (e === null || typeof e !== "object") {
        return;
    }
    return v.get(e);
}
const R = 58n;
const le = (1n << 128n) - 1n;
const rjn = 22;
const dkr = "[1-9A-HJ-NP-Za-km-z]{22}";
const _e = new RegExp("^[1-9A-HJ-NP-Za-km-z]{22}$");
const de = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function E(e) {
    if (!de.test(e)) {
        return null;
    }
    let n = BigInt(`0x${e.replaceAll("-", "")}`);
    let r = "";
    for(let o = 0; o < 22; o++){
        r = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[Number(n % R)] + r;
        n /= R;
    }
    return r;
}
function g1(e) {
    if (!_e.test(e)) {
        return null;
    }
    let n = 0n;
    for (let o of e){
        n = n * R + BigInt("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".indexOf(o));
    }
    if (n > le) {
        return null;
    }
    let r = n.toString(16).padStart(32, "0");
    return `${r.slice(0, 8)}-${r.slice(8, 12)}-${r.slice(12, 16)}-${r.slice(16, 20)}-${r.slice(20)}`;
}
let S = null;
function cAs(e) {
    let n = S;
    S = e;
    return n;
}
function Q1n() {
    return S?.("tengu_cobalt_plinth_lovage", false) === true;
}
const gn = "Artifact";
const Dct = [
    "document",
    "slides",
    "design",
    "other"
];
const Dy = "ArtifactComments";
const Ig = "ArtifactData";
const mO = "ArtifactCheck";
const H7 = [
    gn,
    Dy,
    Ig,
    mO
];
const gm = /^[0-9a-f]{32}$/;
const ben = "file_path";
const Mbo = [
    "action",
    "url",
    "prompt"
];
const Hbo = [
    "page",
    "version"
];
const Sen = "Describe what this page contains and reproduce its substantive text content, structure, and any data it presents.";
const Dbo = " — live version; raw HTML follows]";
const wen = "You hadn't viewed the live version of this artifact, so the publish was refused.";
const Lbo = "This session hadn't viewed the live version of this artifact, so the publish was refused.";
const Nbo = (e)=>`[Artifact ${e}${Dbo}`;
const $bo = " — live version; a line diff against the content you sent follows]";
const Fbo = (e)=>`[Artifact ${e}${$bo}`;
const Ubo = new RegExp(`\\n\\[Artifact [\\w-]{1,64}(?:${ml(Dbo)}|${ml($bo)})\\n`);
const ukr = "Its full source (";
const pkr = "Merge your edits onto it";
const Bbo = new RegExp(`\\n(?=\\[Artifact [\\w-]{1,64}(?:${ml(Dbo)}|${ml($bo)})\\n|${ml(ukr)}|${ml(pkr)})`);
const pSe = "Publish refused — nothing was merged or published:";
const W = "file_path required to publish. Write the page to an .html file, then call again with its path as `file_path`";
const fkr = `${W}, or pass \`type_url\` to start a new Artifact from a type. There is no inline content parameter.`;
const mkr = `${W}. There is no inline content parameter, and creating an Artifact from a type is not available in this session, so build the page yourself.`;
const jbo = [
    fkr,
    mkr
];
const fSe = {
    republishForceRefused: "pr_review_republish_force_refused",
    decisionsProvenance: "pr_review_decisions_provenance",
    republishAnchor: "pr_review_republish_anchor",
    republishStamp: "pr_review_republish_stamp",
    overwriteRefused: "pr_review_overwrite_refused"
};
function rxe() {
    if (Q1n()) {
        return "…/artifact/<id>";
    }
    return "…/code/artifact/<uuid>";
}
const Lct = "Artifacts need a claude.ai login";
const ven = 13;
const Een = "not_logged_in";
const gkr = 15;
const ken = 22;
const T2s = [
    "policy_blocked",
    "policy_fetch_failed",
    "policy_route_missing"
];
const Ten = {
    rate_limited: "publish_rate_limited",
    contract_rollout: "publish_contract_rollout"
};
const Wbo = `${Lct}. Run /login and select "Claude account with subscription", then retry \u2014 the "Anthropic Console account" option does not provide claude.ai credentials.`;
const oMt = "Every Artifact call is refused like this until a claude.ai login is available, so do not retry; tell the user what is needed.";
const Aen = "Changing the input will not help: every Artifact call is refused like this until a claude.ai login is available, so do not retry; tell the user what is needed. The input was also invalid, but the schema error below matters only once that login is available.";
const zbo = `${Lct}, and this remote session authenticates through the machine that launched it, which is not signed in to claude.ai. Sign in to claude.ai on that machine (/login, "Claude account with subscription"), then reconnect this session.`;
const Gbo = `${Lct}, but this session authenticates with a credential injected by its host environment, which takes precedence and cannot be changed here. Start a session that is signed in to claude.ai to publish or read artifacts.`;
function Vbo(e) {
    return `${Lct}. This session's API access is set up by ${e ? "your organization's managed settings" : "the ANTHROPIC_FEDERATION_RULE_ID / ANTHROPIC_ORGANIZATION_ID environment variables"}, which stays active for everything else \u2014 artifacts also use a claude.ai account. Run /login and select "Claude account with subscription", then retry.`;
}
function hkr(e) {
    switch(e){
        case "org_policy_unverifiable":
            return "Artifacts can't check the signed-in Claude account's organization settings from this session: the account belongs to a Claude organization (Team or Enterprise), and this session's API access uses a different credential that can't read those settings. Run /login with a personal Claude account (Pro or Max), then retry.";
        case "plan_unreadable":
            return "The signed-in Claude account's plan couldn't be read from this session. Run /login again to refresh the signed-in account, then retry.";
        case "org_denied":
            return ZOt("Artifacts", "are", Oue(), "Artifacts are disabled by your organization's policy. Contact your organization admin to enable them, then retry.");
        case "latched":
            return QRe("Artifacts", "are");
        case "cache_miss":
            return yue("Artifacts");
        case "policy_route_missing":
            return Cct("Artifacts");
        case "policy_unavailable":
            return "Artifacts can't check the organization settings that apply to this session: the session's configuration (such as a custom ANTHROPIC_BASE_URL) prevents the policy lookup. Remove that configuration, then retry.";
    }
}
function ykr(policy_kind) {
    switch(policy_kind){
        case "plan_unreadable":
            return lSe();
        case "org_denied":
        case "latched":
            return {
                kind: "policy_denied",
                feature: "artifacts",
                policy_kind
            };
        case "org_policy_unverifiable":
        case "cache_miss":
        case "policy_route_missing":
        case "policy_unavailable":
            return;
    }
}
function _kr(e) {
    if (V(e)) {
        return "Artifacts aren't available: Anthropic couldn't confirm your organization's settings for this cloud session (HTTP 403). This isn't a problem with your network.";
    }
    return ikr("Artifacts", "are", e.outcome);
}
function V({ cause, outcome }) {
    return cause === "policy_fetch_failed" && yPe() && outcome.httpStatus === 403 && outcome.serverErrorCode === "oauth_not_allowed_for_organization";
}
const fe = "Claude Code reads that policy from ";
const pe = /^[A-Za-z0-9.-]+(:[0-9]+)?$/;
function Ee(host) {
    if (pe.test(host)) {
        return `${host}${cSe}`;
    }
    return `the API's ${cSe} route`;
}
const ge = " and keeps retrying it in the background; whether artifacts are allowed is decided once it loads. Do not retry this call now. Tell the user why artifacts are unavailable and, if a proxy, VPN or web filter is involved, that their IT admin needs to let that address through.";
const Ae = ", and a proxy or gateway that does not forward that path will keep answering 404, so nothing in this session can load it. Do not retry this call. Tell the user that their IT admin needs to let that address through to the API.";
function X$s(e) {
    let n = Ee(e.outcome.host);
    if (V(e)) {
        return `Claude Code reads the organization's policy from ${n}. In this cloud session, Anthropic's API refused the request for the user's organization (HTTP 403). Do not retry this call now. Tell the user that artifacts are unavailable because Anthropic couldn't confirm their organization's settings for this cloud session, and that it isn't a problem with their network.`;
    }
    let r = e.cause === "policy_route_missing" ? Ae : ge;
    return `${fe}${n}${r}`;
}
function Cen(e) {
    return `${_kr(e)}

${X$s(e)}`;
}
function Ren(e, n) {
    return `${Lct}, and this session is authenticating with ${e}, which takes precedence over a claude.ai account. ${n} Then run /login and select "Claude account with subscription".`;
}
class He extends Error {
    reasonCode;
    maxErrorChars;
    constructor(e, n, r){
        super(e);
        this.name = "ArtifactInputError";
        this.reasonCode = n;
        this.maxErrorChars = r?.maxErrorChars;
    }
}
const T = "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}";
const m = "https://(?:[a-z0-9-]+\\.)?claude\\.ai";
const o3e = "/(?:artifact|code/(?:artifact|frame))/";
const O = `${T}|${dkr}`;
const I = `${o3e}(?:([A-Za-z0-9_-]*)-)?(${O})(?:[/?#]|$)`;
const y = `${o3e}(?:[A-Za-z0-9_-]*-)?(?:${O})/([^?#]+)`;
function h(e, n = false) {
    if (e === undefined) {
        return null;
    }
    if (e.length !== rjn) {
        return e;
    }
    if (n) {
        return null;
    }
    return g1(e);
}
function C(e) {
    if (e?.length === rjn) {
        return {
            shortId: true
        };
    }
    return {};
}
const rr = new RegExp(`^${T}$`);
const AF = /^[\w-]{1,64}$/;
const sMt = 1024;
const CF = 16000;
const qbo = pH;
const iMt = 20000;
const GV = 300000;
const vFe = "eval-stub://artifact/";
function Id() {
    let Yn_CLAUDE_CODE_EVAL_ARTIFACT_STUB_DIR = Yn.CLAUDE_CODE_EVAL_ARTIFACT_STUB_DIR;
    if (typeof Yn_CLAUDE_CODE_EVAL_ARTIFACT_STUB_DIR === "string" && Yn_CLAUDE_CODE_EVAL_ARTIFACT_STUB_DIR.length > 0) {
        return Yn_CLAUDE_CODE_EVAL_ARTIFACT_STUB_DIR;
    }
    return null;
}
function x() {
    return null;
}
function Kbo(e) {
    if (new RegExp(`^${m}(?:[/?#]|$)`).test(e)) {
        return "prod";
    }
    let n = x();
    if (n !== null && new RegExp(`^${n}(?:[/?#]|$)`).test(e)) {
        return "staging";
    }
    return null;
}
function Vt(e) {
    return j(e, false);
}
function j(e, n) {
    let r = e.match(new RegExp(`^${m}${I}`));
    let o = h(r?.[2], n);
    if (o !== null) {
        return g(e, {
            slug: o,
            env: "prod",
            ...C(r?.[2])
        }, r?.[1]);
    }
    let i = x();
    if (i !== null) {
        let c = e.match(new RegExp(`^${i}${I}`));
        let l = h(c?.[2], n);
        if (l !== null) {
            return g(e, {
                slug: l,
                env: "staging",
                ...C(c?.[2])
            }, c?.[1]);
        }
    }
    let s = e.match(new RegExp(`^https://(${T})\\.frame\\.(staging\\.)?claudeusercontent\\.com(?:[/?#]|$)`));
    if (s?.[1]) {
        return g(e, {
            slug: s[1],
            env: s[2] ? "staging" : "prod"
        });
    }
    let u = ZRe();
    if (u) {
        let c = e.match(new RegExp(`^https?://([^/?#]+)${I}`));
        let l = h(c?.[3], n);
        if (c !== null && l !== null && c[1] === new URL(u).host) {
            return g(e, {
                slug: l,
                env: Po(),
                ...C(c[3])
            }, c[2]);
        }
    }
    return null;
}
const he = /^[A-Za-z0-9_-]{1,64}$/;
const Te = /^[a-z0-9][a-z0-9-]{0,59}$/;
function g(e, n, vanity) {
    let o = vanity !== undefined && Te.test(vanity) ? {
        ...n,
        vanity
    } : n;
    let i = e.indexOf("#");
    let s = i === -1 ? e : e.slice(0, i);
    let u = s.indexOf("?");
    if (u === -1) {
        return o;
    }
    let sk = s.slice(u + 1).split("&").find((_)=>_.startsWith("sk="))?.slice(3);
    if (sk !== undefined && he.test(sk)) {
        return {
            ...o,
            sk
        };
    }
    return o;
}
function mSe(e) {
    let n = ZRe();
    let r = x();
    let o = e.match(new RegExp(`^${m}${y}`))?.[1] ?? (r !== null ? e.match(new RegExp(`^${r}${y}`))?.[1] : undefined) ?? (n ? e.match(new RegExp(`^https?://${ml(new URL(n).host)}${y}`))?.[1] : undefined);
    if (o === undefined || o === "") {
        return undefined;
    }
    return o;
}
function hN(e) {
    try {
        let n = new URL(e);
        if (n.protocol === "http:") {
            n.protocol = "https:";
        }
        if (n.hostname.endsWith(".")) {
            n.hostname = n.hostname.slice(0, -1);
        }
        return n.href;
    } catch  {
        return e;
    }
}
function gO(e) {
    if (typeof e === "string") {
        return Vt(hN(e));
    }
    return null;
}
function I8(e) {
    let n = hN(e);
    return Vt(n) ?? j(n.toLowerCase(), true);
}
const Re = new RegExp(`^${ml(vFe)}(${T})(?:[/?#]|$)`);
function s3e(e) {
    let n = e.match(Re);
    if (n?.[1]) {
        return {
            slug: n[1]
        };
    }
    return null;
}
const EFe = "artifact-deleted";
const Ybo = new RegExp(`^<${EFe} url="([^"]+)"/>`);
const bkr = "artifact-attached";
const Xbo = new RegExp(`^<${bkr} url="([^"]+)"(?: title="([^"]*)")?( own)?/>`);
function Ua(e) {
    let n = Vt(e)?.slug;
    if (n !== undefined) {
        return n;
    }
    if (Id() !== null) {
        return s3e(e)?.slug ?? null;
    }
    return null;
}
function Skr(e) {
    if (Q1n()) {
        let n = E(e);
        if (n !== null) {
            return `/artifact/${n}`;
        }
    }
    return `/code/artifact/${e}`;
}
function L(env) {
    let n = ZRe();
    if (n && env === Po()) {
        return n;
    }
    return "https://claude.ai";
}
function xn(e) {
    return `${L(e.env)}${Skr(e.slug)}`;
}
function kFe(e) {
    return {
        written: {
            url: xn(e)
        }
    };
}
function xen(e) {
    let n = L(e.env);
    let r = E(e.slug);
    return [
        `${n}/code/artifact/${e.slug}`,
        ...r !== null ? [
            `${n}/artifact/${r}`
        ] : []
    ];
}
function Ow(e, n) {
    let { target, other } = wkr(e, n);
    if (other === undefined) {
        return target;
    }
    return `${target} [same artifact: ${other}]`;
}
function wkr(e, target) {
    let r = typeof e === "string" ? Vt(e) : null;
    if (r === null) {
        return {
            target
        };
    }
    let o = L(r.env);
    let i = E(r.slug);
    let s = `${o}/code/artifact/${r.slug}`;
    if (i === null) {
        return {
            target: s
        };
    }
    let u = `${o}/artifact/${i}`;
    if (r.shortId) {
        return {
            target: u,
            other: s
        };
    }
    return {
        target: s,
        other: u
    };
}
function Jbo(e) {
    if (e.other === undefined) {
        return "";
    }
    return ` [same artifact: ${e.target} is ${e.other}]`;
}
function i3e(e) {
    return `https://${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`;
}
function wi(e, n) {
    let r = typeof e === "string" ? Vt(e) : null;
    if (r) {
        return xn(r);
    }
    return n;
}
function vkr(e) {
    let r = e.match(new RegExp(`^https://claude\\.ai${o3e}(${O})/?$`));
    return h(r?.[1]) !== null;
}
const a3e = 8192;
const Qbo = a3e * 4;
const ojn = 280;
const Sz = 60;
const Se = /&(#x[0-9a-f]+|#\d+|[a-z]+);/gi;
const A = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: "\xA0",
    ndash: "–",
    mdash: "—",
    minus: "−",
    hellip: "…",
    lsquo: "‘",
    rsquo: "’",
    sbquo: "‚",
    ldquo: "“",
    rdquo: "”",
    bdquo: "„",
    lsaquo: "‹",
    rsaquo: "›",
    laquo: "«",
    raquo: "»",
    middot: "·",
    bull: "•",
    dagger: "†",
    Dagger: "‡",
    prime: "′",
    Prime: "″",
    trade: "™",
    copy: "©",
    reg: "®",
    deg: "°",
    times: "×"
};
function J(e) {
    return e.replace(/<!--[\s\S]*?(?:-->|$)/g, "");
}
function b(e) {
    let n = J(e.slice(0, a3e));
    let r = n.search(/<svg/i);
    if (r === -1) {
        return n;
    }
    return n.slice(0, r);
}
function Nct(e) {
    return e.replace(Se, (n, r)=>{
        if (r.startsWith("#")) {
            let i = r[1] === "x" || r[1] === "X" ? parseInt(r.slice(2), 16) : parseInt(r.slice(1), 10);
            if (i <= 1114111 && (i < 55296 || i > 57343)) {
                return String.fromCodePoint(i);
            }
            return n;
        }
        if (Object.hasOwn(A, r)) {
            return A[r] ?? n;
        }
        let o = r.toLowerCase();
        if (Object.hasOwn(A, o)) {
            return A[o] ?? n;
        }
        return n;
    });
}
const Ie = /<link\b[^>]*>/gi;
const ye = 2048;
const Z = /<link\b[^>]{0,2048}\bartifact-thumbnail\b/gi;
const Ce = new RegExp(Z.source, "i");
const me = /([^\s"'<>\/=]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g;
const Q = "artifact-thumbnail";
const Oe = /^\(\s*prefers-color-scheme\s*:\s*dark\s*\)$/i;
const xe = /^(?:all|\(\s*prefers-color-scheme\s*:\s*light\s*\))$/i;
const k = /<(script|style)\b[^>]{0,2048}>[\s\S]*?(?:<\/\1\s*>|$)/gi;
function Le(e) {
    let n = [];
    for (let r of e.match(Ie) ?? []){
        if (r.length > ye) {
            if (Ce.test(r)) {
                n.push({
                    dark: false,
                    oversize: true
                });
            }
            continue;
        }
        let o;
        let i;
        let s;
        for (let _ of r.matchAll(me)){
            let d = _[1].toLowerCase();
            let f = _[2] ?? _[3] ?? _[4] ?? "";
            if (d === "rel") {
                o ??= f;
            } else if (d === "href") {
                i ??= f;
            } else if (d === "media") {
                s ??= f;
            }
        }
        if (!(o ?? "").toLowerCase().split(/\s+/).includes(Q)) {
            continue;
        }
        let badMedia = Nct(s ?? "").trim();
        let dark = Oe.test(badMedia);
        let l = badMedia === "" || xe.test(badMedia);
        n.push({
            ...i !== undefined && {
                href: Nct(i).trim()
            },
            dark,
            ...!dark && !l && {
                badMedia
            }
        });
    }
    return n;
}
function Pen(e) {
    let n = {
        pastWindow: false
    };
    let r = b(e).replace(k, "");
    for (let { href, dark, badMedia, oversize } of Le(r)){
        if (oversize) {
            n.oversizeTag = true;
        } else if (href === undefined) {
            n.missingHref = true;
        } else if (badMedia !== undefined) {
            n.badMedia ??= badMedia;
        } else if (dark) {
            n.dark ??= href;
        } else {
            n.light ??= href;
        }
    }
    let o = (i)=>i.match(Z)?.length ?? 0;
    n.pastWindow = e.includes(Q) && o(J(e).replace(k, "")) > o(r);
    return n;
}
const Zbo = /[<>&"']/;
const be = [
    [
        "'",
        "'"
    ],
    [
        '"',
        '"'
    ],
    [
        "‘",
        "’"
    ],
    [
        "“",
        "”"
    ],
    [
        "`",
        "`"
    ]
];
function sjn(e) {
    let n = e;
    for(let r = 0; r < 4; r++){
        let o = n.trim();
        for (let [i, s] of be){
            if (o.length > i.length + s.length - 1 && o.startsWith(i) && o.endsWith(s)) {
                o = o.slice(i.length, o.length - s.length);
                break;
            }
        }
        o = Nct(o);
        if (o === n) {
            break;
        }
        n = o;
    }
    return n;
}
const M = String.raw`\p{Extended_Pictographic}[\ufe0e\ufe0f]?\p{Emoji_Modifier}?`;
const Ne = String.raw`\u{1f3f4}\u{e0067}\u{e0062}(?:\u{e0065}\u{e006e}\u{e0067}|\u{e0073}\u{e0063}\u{e0074}|\u{e0077}\u{e006c}\u{e0073})\u{e007f}`;
const we = String.raw`(?:[#*0-9]\ufe0f?\u20e3|\p{Regional_Indicator}{2}|${Ne}|${M}(?:\u200d${M}){0,3})`;
const Fe = new RegExp(`^${we}{1,4}$`, "u");
const Pe = /\p{Regional_Indicator}{2}.*\p{Regional_Indicator}/u;
function $ct(e) {
    if (typeof e !== "string" || e.length > 32) {
        return;
    }
    let n = sjn(e);
    if (Fe.test(n) && !Pe.test(n)) {
        return n;
    }
}
function Ien(e) {
    let r = b(e).match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
    if (r === undefined) {
        return null;
    }
    return Iv(Nct(r));
}
function Iv(e) {
    let r = Array.from(e, (i)=>{
        let s = i.codePointAt(0) ?? 0;
        if (s <= 31 || s >= 127 && s <= 159) {
            return " ";
        }
        return i;
    }).join("").replace(/\s+/g, " ").trim();
    if (r === "") {
        return null;
    }
    let o = Array.from(r);
    if (o.length > ojn) {
        return o.slice(0, ojn).join("");
    }
    return r;
}
const hO = /[\u201C\u201D\u201E\u201F\u2E42\uFF02\u02F5\u02F6\u2033\u2034\u2036\u2037\u02BA\u02DD\u02EE\u05F4\u3003\u301D-\u301F\u275D\u275E\u2760\u{1F676}-\u{1F678}]/gu;
const yN = /['\u0060\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02BF\u02C8\u02CA\u02CB\u0374\u0384\u055A\u05F3\u07F4\u07F5\u1FBD\u1FBF\u1FEF\u1FFD\u1FFE\u2018\u2019\u201A\u201B\u2032\u2035\u275B\u275C\u275F\uA78B\uA78C\uFF07\uFF40]{2,}/g;
const h1 = /[\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u{13441}\u{13442}\uFFFC]/gu;
function aC(e) {
    return e <= 31 || e >= 127 && e <= 159 || e === 173 || e === 1564 || e >= 8203 && e <= 8207 || e === 8232 || e === 8233 || e >= 8234 && e <= 8238 || e >= 8288 && e <= 8297 || e >= 65024 && e <= 65039 || e === 65279 || e >= 65529 && e <= 65531 || e === 94180 || e >= 917504 && e <= 917999;
}
const TFe = /^[\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u{13441}\u{13442}\uFFFC]$/u;
function Ue(e) {
    return e === 8204 || e === 8205;
}
function ee(e) {
    return e >= 65024 && e <= 65039 || e >= 917760 && e <= 917999;
}
function l3e(e) {
    return Ue(e) || ee(e);
}
function RAs(e) {
    return !l3e(e) && (aC(e) || e > 127 && TFe.test(String.fromCodePoint(e)));
}
const De = /^[\p{Extended_Pictographic}\p{Emoji_Modifier}]$/u;
const ve = 8;
const G = /^[#*0-9]$/;
const ke = /^\p{Script=Han}$/u;
const $e = /^[\p{Script=Arabic}\p{Script=Syriac}\p{Script=Mongolian}\p{Script=Devanagari}\p{Script=Bengali}\p{Script=Gurmukhi}\p{Script=Gujarati}\p{Script=Oriya}\p{Script=Tamil}\p{Script=Telugu}\p{Script=Kannada}\p{Script=Malayalam}\p{Script=Sinhala}\p{Script=Myanmar}\p{Script=Tibetan}\p{Script=Khmer}]$/u;
const Me = /^[\n\r\t\v\f\u0085\u2028\u2029]$/;
function ijn(e) {
    if ((e.codePointAt(0) ?? 0) < 128) {
        if (G.test(e)) {
            return "keycap";
        }
        return "plain";
    }
    if (De.test(e)) {
        return "pictograph";
    }
    if (G.test(e)) {
        return "keycap";
    }
    if (ke.test(e)) {
        return "han";
    }
    if ($e.test(e)) {
        return "joining";
    }
    return "plain";
}
function ajn(e, n) {
    if (ee(e)) {
        let rides = e <= 65039 ? n === "pictograph" || n === "han" || n === "keycap" && e === 65039 : n === "han";
        return {
            rides,
            after: rides && n === "pictograph" ? "selector" : "none"
        };
    }
    return {
        rides: e === 8205 ? n === "pictograph" || n === "selector" || n === "joining" : n === "joining",
        after: "none"
    };
}
function Fct(e, n, { joiners } = {
    joiners: true
}) {
    let o = yf(e);
    let i = [];
    let s = 0;
    let cut = false;
    let c = 0;
    let l = "none";
    for (let _ of o){
        if (++s > 16 * n || i.length >= n + 1) {
            cut = true;
            break;
        }
        let d = _.codePointAt(0) ?? 0;
        if (!joiners && l3e(d)) {
            l = "none";
        } else if (l3e(d)) {
            let f = ajn(d, l);
            if (f.rides && c < ve) {
                i.push(_);
                c++;
                l = f.after;
            } else {
                l = "none";
            }
        } else if (Me.test(_)) {
            if (i.length > 0 && i.at(-1) !== " ") {
                i.push(" ");
            }
            l = "none";
        } else if (!RAs(d)) {
            i.push(_);
            l = ijn(_);
        } else {
            l = "none";
        }
    }
    if (i.length > n) {
        cut = true;
    }
    return {
        kept: dl(i.slice(0, cut ? n - 1 : n).join("")),
        cut
    };
}
function Ekr(e) {
    let n = "";
    let r = "none";
    for (let o of yf(e)){
        let i = Ge(o, r);
        n += i.shown;
        r = i.after;
    }
    return n;
}
function Ge(shown, n) {
    let r = shown.codePointAt(0) ?? 0;
    if (l3e(r)) {
        let o = ajn(r, n);
        return {
            shown: o.rides ? shown : "\uFFFD",
            after: o.after
        };
    }
    if (r === 10 || r === 13 || r === 9) {
        return {
            shown,
            after: "none"
        };
    }
    if (RAs(r)) {
        return {
            shown: "\uFFFD",
            after: "none"
        };
    }
    return {
        shown,
        after: ijn(shown)
    };
}
function zk(e, n) {
    let { kept, cut } = Fct(e, n);
    if (cut) {
        return `${kept}\u2026`;
    }
    return kept;
}
const Be = 1024;
const Ye = 2048;
function Sue(e) {
    if (typeof e === "string") {
        return zk(e, Be);
    }
    return "(unknown)";
}
function D7(e) {
    if (typeof e === "string") {
        return zk(e, Ye);
    }
    return "(unknown)";
}
const Ke = 512;
function kkr(e) {
    return e.replace(Ve, (n)=>`${n}\\`);
}
function gSe(e) {
    return kkr(zk(e, Ke));
}
function Gk(e, n) {
    let { kept, cut } = Fct(e, n, {
        joiners: false
    });
    if (cut) {
        return `${kept}\u2026`;
    }
    return kept;
}
const A2s = 500;
const eSo = 600;
function C2s(e) {
    let n = e?.action;
    return n === undefined || n === "publish" || n === "live-edit" || n === "sync" || n === "version";
}
const wue = 25;
const hSe = 200;
const c3e = 50;
function ySe({ scope }) {
    if (scope === "shared" || scope === "all") {
        return scope;
    }
    return "mine";
}
const Tkr = [
    rpt,
    lBe,
    bOs,
    cBe,
    vDt,
    iwe
];
const H = Tkr;
const Xe = [
    "tool_use_error",
    "sandbox_violations"
];
const Y = [
    "result",
    "name",
    "output",
    "error",
    "system"
];
function ze() {
    let { open, close, slash } = Ez;
    let o = `[${open}][^${AMt}${open}${close}]*[${slash}]`;
    let i = `(?<=[${AMt}$])[${open}][A-Za-z]`;
    let s = _O(Y);
    let u = _O(Y, ({ close })=>`[\\r\\n${wdt}]*[${close}]`);
    return [
        new RegExp(`(?=${o})${s.source}`, s.flags),
        new RegExp(`(?!${i})${u.source}`, u.flags)
    ];
}
function Akr() {
    return [
        [
            "artifact",
            cTr
        ],
        [
            "artifact",
            Pue,
            "owned",
            "by",
            "you"
        ],
        [
            "artifact",
            Pue,
            "raw",
            "html",
            "follows"
        ],
        [
            "artifact",
            Pue,
            "summary",
            "below"
        ],
        [
            "artifact",
            Pue,
            "shared",
            "with",
            "you"
        ],
        [
            "artifact",
            Pue,
            "published",
            "from",
            "your"
        ],
        [
            "artifact",
            Pue,
            "live",
            "version"
        ],
        [
            "artifact",
            Pue,
            "published",
            "by",
            "a",
            "writer"
        ],
        [
            "this",
            "version",
            "has",
            Pue,
            "published",
            "files"
        ],
        [
            "stored",
            "for",
            "the",
            "live",
            "version"
        ],
        [
            "origin",
            "of",
            "this",
            "version"
        ],
        [
            "created",
            "from",
            "the",
            "artifact",
            "type"
        ],
        [
            "end",
            "of",
            "live",
            "content",
            _tn
        ],
        [
            "end",
            "of",
            "live",
            "changes",
            _tn
        ],
        [
            "an",
            "unchanged",
            "line",
            _tn
        ],
        [
            "this",
            "artifact",
            Pue,
            "ships",
            "an",
            "instructions",
            "file"
        ],
        [
            "could",
            "not",
            "check",
            "whether",
            "this",
            "artifact"
        ],
        [
            "design",
            "system",
            "not",
            "attached"
        ],
        [
            "design",
            "systems",
            "not",
            "listed"
        ],
        [
            "design",
            "systems",
            "left",
            "out"
        ],
        [
            "published",
            "types",
            "titled"
        ],
        [
            "artifact",
            "types",
            "not",
            "listed"
        ],
        [
            "type",
            "reference",
            "pages",
            "not",
            "attached"
        ],
        [
            "a",
            "quickstart",
            "in",
            "this",
            "conversation"
        ],
        [
            "the",
            "design",
            "guidance",
            "that",
            "came",
            "with"
        ],
        [
            "how",
            "to",
            "build",
            "and",
            "iterate",
            "on"
        ]
    ];
}
class te {
    #e;
    #t;
    #n;
    get lead() {
        this.#e ??= WCs(Akr());
        return this.#e;
    }
    get page() {
        this.#t ??= [
            _O(H),
            this.lead
        ];
        return this.#t;
    }
    get envelopes() {
        this.#n ??= [
            _O(D([
                ...H,
                "transcript",
                ...r6.filter((e)=>e !== C0),
                ...Xe
            ])),
            ...ze(),
            Yjn(),
            Xjn(),
            this.lead
        ];
        return this.#n;
    }
}
const J$s = new q(()=>new te);
function re() {
    return J$s.of(B().host);
}
function tSo() {
    return re().lead;
}
const N = [
    Hu,
    SR,
    bP,
    gN
];
function Oen(e) {
    return N.some((n)=>e.includes(n));
}
const We = new RegExp(N.map((e)=>`${ml(e.slice(0, 1))}(?=${ml(e.slice(1))})`).join("|"), "g");
var Ve = new RegExp([
    "<(?=\\/?(?:tool_use_error|sandbox_violations|error)\\b)",
    "InputValidationError(?!\\\\)",
    ...N.map((e)=>`${ml(e.slice(0, 1))}(?=${ml(e.slice(1, -1))})`)
].join("|"), "gi");
function Q$s(e) {
    return e.replace(We, (n)=>`${n}\\`);
}
function dl(e, n = "all") {
    let r = re();
    let o = e;
    for (let i of n === "page" ? r.page : r.envelopes){
        o = o.replace(i, (s)=>`${s}\\`);
    }
    if (n === "page") {
        return o;
    }
    return Q$s(o);
}
function nSo(e, n, r = "all") {
    let o = dl(ne(e, n), r);
    if (o.length > n) {
        return dl(ne(e, n - 1), r);
    }
    return o;
}
function RF(e, n) {
    return dl(Ms(Array.from(ne(e, n * 4), (r)=>{
        if (aC(r.codePointAt(0) ?? 0)) {
            return " ";
        }
        return r;
    }).join("").replace(h1, " ").replace(/\s+/g, " ").trim(), n));
}
const Z$s = 80;
function d3e(e) {
    return GT((Du(Iv(e ?? "") ?? "") ?? "").replace(y_, " ").replace(/:\u2215\u2215/g, "://")).replace(Xoe, " ").replace(Uct, Bct).replace(/\s+/g, " ").trim();
}
function y1(e) {
    let n = d3e(e);
    let r = ne(n, Z$s);
    if (r === n) {
        return n;
    }
    return `${r.endsWith(":∕") ? r.slice(0, -1) : r}\u2026`;
}
function Du(e) {
    return Array.from(e, (n)=>{
        if (aC(n.codePointAt(0) ?? 0)) {
            return " ";
        }
        return n;
    }).join("").replace(h1, " ").replace(/"/g, "'").replace(hO, "'").replace(yN, "'").replace(/\s+/g, " ").trim() || null;
}
const eFs = String.raw`\u002b\u003d\u005e\u007c\u007e\u00a2-\u00a5\u00a8\u00ac\u00af\u00b1\u00b4\u00b8\u00d7\u00f7\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u0384\u0385\u03f6\u058f\u0606-\u0608\u060b\u07fe\u07ff\u0888\u09f2\u09f3\u09fb\u0af1\u0bf9\u0e3f\u17db\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd\u1ffe\u2044\u2052\u207a-\u207c\u208a-\u208c\u20a0-\u20c1\u2118\u2140-\u2144\u214b\u2190-\u2194\u219a\u219b\u21a0\u21a3\u21a6\u21ae\u21ce\u21cf\u21d2\u21d4\u21f4-\u22ff\u2320\u2321\u237c\u239b-\u23b3\u23dc-\u23e1\u25b7\u25c1\u25f8-\u25ff\u266f\u27c0-\u27c4\u27c7-\u27e5\u27f0-\u27ff\u2900-\u2982\u2999-\u29d7\u29dc-\u29fb\u29fe-\u2aff\u2b30-\u2b44\u2b47-\u2b4c\u309b\u309c\ua700-\ua716\ua720\ua721\ua789\ua78a\ua838\uab5b\uab6a\uab6b\ufb29\ufbb2-\ufbc2\ufdfc\ufe62\ufe64-\ufe66\ufe69\uff04\uff0b\uff1c-\uff1e\uff3e\uff40\uff5c\uff5e\uffe0-\uffe3\uffe5\uffe6\uffe9-\uffec\u{10d8e}\u{10d8f}\u{11fdd}-\u{11fe0}\u{1cef0}\u{1d6c1}\u{1d6db}\u{1d6fb}\u{1d715}\u{1d735}\u{1d74f}\u{1d76f}\u{1d789}\u{1d7a9}\u{1d7c3}\u{1e2ff}\u{1ecb0}\u{1eef0}\u{1eef1}\u{1f3fb}-\u{1f3ff}\u{1f8d0}-\u{1f8d8}`;
const K = `[\\p{So}${eFs}\\p{Pd}\\p{Pc}\\p{Mn}\\p{Me}${CMt}\\u02c9\\u02cd\\u2017\\u2053\\u203e\\ufe49-\\ufe4c\\u0640\\u07fa\\u1173\\u1428\\u180a\\u2e0f\\u2f00\\u3127\\u3161\\u3192\\u31d0\\u4e00\\ua4ff\\ua7f7\\ua8fb\\uffda]`;
const qe = new RegExp(`(?<!${K})${K}+>`, "gu");
function GT(e) {
    return e.replace(/[\u00bb\u02c2-\u02c5\u02ef-\u02ff\u1405\u1406\u1409\u1433\u1434\u1450\u1451\u15d2\u2023\u203a\u204d\u20d0-\u20ef\u2044\u2190-\u21ff\u2215\u226b\u227b\u227d\u227f\u2283\u22b1\u22b3\u22d7\u22d9\u2571\u2572\u2303-\u2304\u232a\u2344\u2348\u23e9-\u23ef\u23f5\u25b6-\u25bb\u261b\u261e\u276d\u276f\u2771\u2794-\u27bf\u27e9\u27eb\u27f0-\u27ff\u2900-\u297f\u29a8-\u29af\u2992\u2994\u29c1\u29d0\u29f5\u29f8\u29fd\u2a20\u2a7a\u2aa2\u2aa7\u2aa9\u2aab\u2aad\u2ab0\u2ab2\u2ab4\u2ab6\u2ab8\u2aba\u2abc\u2af8\u2b00-\u2bff\u3009\u300b\ue000-\uf8ff\ufe65\ufe68\uff0f\uff1e\uff3c\uffe9-\uffec\u{1f449}\u{1f599}\u{1f59b}\u{1f59d}\u{1f782}\u{1f800}-\u{1f8ff}\u{1faf1}\u{1fbc1}-\u{1fbc3}\u{1fbb0}-\u{1fbb8}\u{f0000}-\u{ffffd}\u{100000}-\u{10fffd}]/gu, "?").replace(qe, "?");
}
var Uct = /[:\uFE13\uFE55\uFF1A][/\uFF0F][/\uFF0F]/gu;
var Bct = ":∕∕";
var Xoe = /[<>\uFE64\uFE65\uFF1C\uFF1E]+/gu;
const X = `(?![(){}])[\\p{Ps}\\p{Pe}${bue}]`;
var y_ = new RegExp(`(?<!\\s)\\s*${X}(?:\\s|${X})*`, "gu");
const oe = /[:\u02D0\u02D1\u05C3\u2D42\u2D53\u2D57\uA4FD\uA789\u{10781}\u{10782}]|(?![\p{L}\p{N}\p{Zs}])[^\x00-\x7F]/gu;
const rSo = new RegExp(`^(?:${oe.source})$`, "u");
function jct(e) {
    return VV(e.replace(y_, " ").replace(oe, " ").replace(/ {2,}/g, " "));
}
function VV(e) {
    return e.replace(/sources[^\p{L}\p{N}]+under/giu, "sources-under").replace(/stored[^\p{L}\p{N}]+connector[^\p{L}\p{N}]+grant/giu, "stored-connector-grant").replace(/published[^\p{L}\p{N}]+by[^\p{L}\p{N}]+this[^\p{L}\p{N}]+session/giu, "published-by-this-session").replace(/created[^\p{L}\p{N}]+by[^\p{L}\p{N}]+this[^\p{L}\p{N}]+session/giu, "created-by-this-session");
}
const ljn = " [artifact published by this session]";
const oSo = " [artifact created by this session]";
const Men = " [ownership: yours, made from an Artifact type — the files the type put in it were written by the type's publisher]";
const sSo = " [capabilities: declared by the Anthropic-published type this Artifact was made from; this publish cannot change them]";
const iSo = " [destination is a file name Claude Code screens: git, hook, tool and agent settings]";
const aSo = "Automatic edit of an Artifact this session watches, requested by a writer's comment on it; the server re-checks the writer, the thread's edit grant, single-file, size and rate limits";
function VT(e) {
    return GT(Du(e) ?? "").replace(y_, " ").replace(Xoe, " ").replace(/ {2,}/g, " ").trim();
}
const je = /<meta[^>]+name=["']description["'][^>]+content=(["'])((?:(?!\1).)*)\1/is;
const Je = /<title[^>]*>([\s\S]*?)<\/title>/i;
const Ze = /<h1[^>]*>([\s\S]*?)<\/h1>/i;
const z = new Set([
    "",
    "index",
    "untitled",
    "document"
]);
function lSo(e, n) {
    let r = b(e);
    let o = (d)=>Iv(Nct(d ?? "")) ?? "";
    let i = o(r.match(je)?.[2]);
    if (i.length >= 10) {
        return i;
    }
    let s = (d)=>o(r.match(d)?.[1]?.replace(/<[^>]+>/g, ""));
    let u = s(Je);
    let c = s(Ze);
    let l = u.toLowerCase();
    if (z.has(l) || l === n) {
        u = "";
    }
    let _ = c.toLowerCase();
    if (_ === u.toLowerCase() || z.has(_) || _ === n) {
        return u;
    }
    return c;
}
function Hen(e) {
    let stopped = F(e, (r)=>"rail" in r && r.rail === "live_stopped");
    return {
        watching: e.length - stopped,
        stopped
    };
}
export { cAs, Q1n, dAs, uAs, pAs, fAs, mAs, lSe, e3e, pen, uH, gAs, cSe, ZOt, QRe, yue, Cct, ikr, hAs, yAs, Z1n, _As, bAs, Abo, pH, akr, ejn, t3e, _ue, wFe, SAs, tjn, zT, wAs, vAs, fen, eMt, Po, EAs, kAs, TAs, AAs, ZRe, bue, Iw, Hu, SR, bP, gN, WE, exe, txe, Rct, xct, dSe, Db, Pct, SP, n3e, nxe, men, Ict, uSe, lkr, Cbo, njn, tMt, Rbo, Oct, gen, xbo, hen, yen, ckr, Pbo, Mct, Hct, Ibo, Obo, nMt, rMt, _en, r3e, CAs, rjn, dkr, g1, gn, Dct, Dy, Ig, mO, H7, gm, ben, Mbo, Hbo, Sen, Dbo, wen, Lbo, Nbo, $bo, Fbo, Ubo, ukr, pkr, Bbo, pSe, fkr, mkr, jbo, fSe, rxe, Lct, ven, Een, gkr, ken, T2s, Ten, Wbo, oMt, Aen, zbo, Gbo, Vbo, hkr, ykr, _kr, X$s, Cen, Ren, He, o3e, rr, AF, sMt, CF, qbo, iMt, GV, vFe, Id, Kbo, Vt, mSe, hN, gO, I8, s3e, EFe, Ybo, bkr, Xbo, Ua, Skr, xn, kFe, xen, Ow, wkr, Jbo, i3e, wi, vkr, a3e, Qbo, ojn, Sz, Nct, Pen, Zbo, sjn, $ct, Ien, Iv, hO, yN, h1, aC, TFe, l3e, RAs, ijn, ajn, Fct, Ekr, zk, Sue, D7, kkr, gSe, Gk, A2s, eSo, C2s, wue, hSe, c3e, ySe, Tkr, Akr, J$s, tSo, Oen, Q$s, dl, nSo, RF, Z$s, d3e, y1, Du, eFs, GT, Uct, Bct, Xoe, y_, rSo, jct, VV, ljn, oSo, Men, sSo, iSo, aSo, VT, lSo, Hen };
