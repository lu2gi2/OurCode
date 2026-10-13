import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { e6, u8e } from "/$bunfs/root/chunk-x47nahfr.js";
import { xst } from "/$bunfs/root/chunk-cwfjj64b.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Qct, bjn, CFe } from "/$bunfs/root/chunk-6g4165br.js";
import { xte } from "/$bunfs/root/chunk-qfg5yea5.js";
import { sue, ORe, v6e } from "/$bunfs/root/chunk-0ycjphb5.js";
import { o, T, u, Ue, A } from "/$bunfs/root/chunk-smx21d0k.js";
const H = p(()=>T(Ue([
        o(),
        T(Ue([
            u({
                type: A("text"),
                text: o()
            }),
            u({
                type: o()
            })
        ]))
    ])));
const N = 1000;
function rtr(e) {
    if (e == null) {
        return {
            texts: []
        };
    }
    if (Array.isArray(e)) {
        let a = e.length;
        for(let c = 0; c < e.length && a <= N; c++){
            let l = e[c];
            if (Array.isArray(l)) {
                a += l.length;
            }
        }
        if (a > N) {
            return {
                texts: [],
                problem: "too_many_items"
            };
        }
    }
    let n = H().safeParse(e);
    if (!n.success) {
        return {
            texts: [],
            problem: "malformed"
        };
    }
    let r = false;
    let texts = n.data.map((a)=>{
        if (typeof a === "string") {
            return a;
        }
        let c = [];
        for (let l of a){
            if (l.type === "text" && "text" in l && typeof l.text === "string") {
                c.push(l.text);
            } else {
                r = true;
            }
        }
        return c.join(`
`);
    }).filter((a)=>a.trim() !== "");
    if (r) {
        return {
            texts,
            problem: "non_text_ignored"
        };
    }
    return {
        texts
    };
}
const v = 100;
function a5o(e) {
    if (e == null) {
        return {
            texts: []
        };
    }
    if (!Array.isArray(e)) {
        return {
            texts: [],
            problem: "malformed_inline_pastes"
        };
    }
    let texts = [];
    for (const s of e){
        if (typeof s !== "string") {
            return {
                texts: [],
                problem: "malformed_inline_pastes"
            };
        }
        if (s.trim() === "") {
            continue;
        }
        if (texts.length === v) {
            return {
                texts,
                problem: "inline_pastes_cut"
            };
        }
        texts.push(s);
    }
    return {
        texts
    };
}
const B = new Set([
    "ios",
    "android",
    "web_claude_ai",
    "desktop_app"
]);
function C(e) {
    return B.has(e) || false;
}
function Cae(e) {
    return e !== undefined && B.has(e);
}
function Fvn(e) {
    return e === "claude_code_cli" || e === "claude_code_vscode";
}
function g6r(e, n) {
    if (n) {
        return;
    }
    if (Fvn(e)) {
        return {
            kind: "human"
        };
    }
}
const b = new Set([
    "scheduled_trigger",
    "force_run_trigger",
    "github_webhook_trigger",
    "fire_routine",
    "pr_steward"
]);
const K = new Set([
    "trigger_fire"
]);
const Uvn = "session_inbox";
const w = new Set([
    "github_webhook",
    "pr_steward",
    "signal_subscription"
]);
function l5o(e) {
    return e !== undefined && (w.has(e) || e === Uvn);
}
const subkind = "projects-relay";
function h6r({ relayMessageIds, isSynthetic }) {
    return relayMessageIds !== undefined || isSynthetic !== true;
}
const z = "triggerFireReason";
function c5o(e, n) {
    if (e?.kind !== "task-notification" || e.subkind !== "scheduled-trigger") {
        return e;
    }
    let fireReason = y6r(n);
    if (fireReason === undefined) {
        return e;
    }
    return {
        ...e,
        fireReason
    };
}
function y(e) {
    if (e && K.has(e)) {
        return {
            kind: "task-notification",
            subkind: "scheduled-trigger"
        };
    }
    if (e === Uvn) {
        return {
            kind: "task-notification",
            subkind: "session-inbox"
        };
    }
    return {
        kind: "task-notification"
    };
}
const Y = new Set([
    "scheduled_trigger",
    "force_run_trigger",
    "fire_routine"
]);
function y6r(e) {
    return k(e, z);
}
function R2t(e, n, r, s) {
    if (e === "now") {
        return e;
    }
    let a = r !== undefined && X.has(r) && (r !== "trigger_fire" || s !== undefined);
    if (n && Y.has(n) || a) {
        return "later";
    }
    return e;
}
const L = new Set([
    "claude-in-slack",
    "claude_in_slack"
]);
const M = "slack_human";
const D = new Set([
    ORe
]);
const U = "claude-in-teams";
const G = "teams_human";
const Q = "owner_relay";
const I = "hearth_human";
function otr(e) {
    return e === I;
}
function Bvn(e) {
    return e === I || e === v6e;
}
function V(e) {
    if (e === I || e === v6e) {
        return true;
    }
    return e !== undefined && e.startsWith("hearth");
}
var X = new Set([
    "trigger_fire",
    "plugin_fire"
]);
const q = "receiver_grouping_id";
function _6r(e) {
    return k(e, q);
}
function k(e, n) {
    let r = e[n];
    if (typeof r === "string") {
        return r;
    }
}
const J = "activity_observation";
function b6r(e) {
    return k(e, J);
}
function F() {
    return e6();
}
function Z() {
    return u8e();
}
function ee(e, n) {
    return e !== undefined && L.has(e) && n === M && F();
}
function ne(e, n) {
    return e === U && n === G && Z();
}
function YMe(e, n) {
    return ee(e, n) || ne(e, n);
}
function x(e, n) {
    return n === undefined && e !== undefined && C(e) || YMe(e, n);
}
function jvn(e, n, r) {
    if (e) {
        return e.kind === "human";
    }
    return x(n, r);
}
function d5o(e, n, r, s) {
    if (e) {
        return e.kind === "human";
    }
    if (!n) {
        return true;
    }
    return x(r, s) || g6r(r, s) !== undefined;
}
function Wvn(e, n, r = false) {
    let s;
    try {
        s = I2t(e);
    } catch  {
        return false;
    }
    if (!s || gSt(s.content)) {
        return false;
    }
    let { clientPlatform, inboundOrigin } = s;
    if (inboundOrigin !== undefined) {
        if (n === "bridge") {
            return YMe(clientPlatform, inboundOrigin);
        }
        return x2t(inboundOrigin, r);
    }
    return x(clientPlatform, undefined) || n === "remote-worker" && Fvn(clientPlatform);
}
function x2t(e, n = false) {
    return e === M || e === G || e === Q || n && e === I;
}
function str({ isRelayHuman, isSynthetic, ccrTurnId, isProjectsUser = false }) {
    if (!isRelayHuman) {
        return {};
    }
    return {
        ...!isSynthetic && {
            verifiedSlackHumanTurn: true
        },
        ...!isSynthetic && isProjectsUser && {
            projectsUserTurn: true
        },
        ...ccrTurnId !== undefined && {
            ccrTurnId
        }
    };
}
function P2t(e, n, r, s, a, activityObservation, l) {
    let m = gSt(e);
    if (m) {
        return {
            kind: "peer",
            from: m,
            inbound_origin: r,
            ...l !== undefined && {
                plugin: l
            },
            ...CFe(e)
        };
    }
    if (r === Uvn) {
        return y(r);
    }
    if (r && w.has(r)) {
        return y(r);
    }
    let _ = V(r);
    if (!_ && r === undefined && n && C(n)) {
        return {
            kind: "human"
        };
    }
    if (!_ && YMe(n, r)) {
        return {
            kind: "human"
        };
    }
    if (!_ && n && b.has(n)) {
        return y(r);
    }
    if (r === sue && s) {
        return {
            kind: "task-notification",
            subkind: "peer-send-message"
        };
    }
    t(`[bridge] demoting unwrapped inbound message to peer origin: client_platform=${n || "(absent)"}`, {
        level: "warn"
    });
    let S = !n ? "absent" : n.startsWith("claude_code") ? "claude_code" : L.has(n) ? r === ORe && F() ? "slack_bot_observation" : "slack_relay" : n === U ? "teams_relay" : "other";
    i("tengu_bridge_ingress_demoted", {
        platform_class: d(S)
    });
    return {
        kind: "peer",
        from: "unknown",
        inbound_origin: r,
        ...CFe(e),
        ...activityObservation !== undefined && r !== undefined && D.has(r) && {
            activityObservation
        }
    };
}
function FZe(e, n, r) {
    if (e && e.kind !== "peer" && e.kind !== "slack-ping") {
        return e;
    }
    if (n && b.has(n)) {
        return y(r);
    }
    if (n && C(n)) {
        return {
            kind: "human"
        };
    }
}
function S6r(e, n, r, s, a, c = false, l = false, m) {
    let _ = gSt(e);
    if (_) {
        return {
            kind: "peer",
            from: _,
            inbound_origin: r,
            ...CFe(e),
            ...m !== undefined && {
                plugin: m
            }
        };
    }
    if (r && !D.has(r)) {
        if (r === I) {
            if (c) {
                g("bridge_projects_human_origin");
            } else {
                f("bridge_projects_human_origin", "disabled_by_flag");
            }
        }
        if (x2t(r, c)) {
            return {
                kind: "human"
            };
        }
        if (r === v6e && l) {
            return {
                kind: "task-notification",
                subkind
            };
        }
        if (r === sue && s) {
            return {
                kind: "task-notification",
                subkind: "peer-send-message"
            };
        }
        return y(r);
    }
    if (Fvn(n)) {
        return {
            kind: "human"
        };
    }
    if (n?.startsWith("claude_code")) {
        return;
    }
    return P2t(e, n, r, s, undefined, a, m);
}
function xGe(e) {
    return e.verifiedSlackHumanTurn === true && e.priority !== "now";
}
function u5o(e, n) {
    if (e === "now") {
        return e;
    }
    if (n) {
        return "later";
    }
    return e;
}
function Ige(e) {
    let s = e.trimStart();
    let a = false;
    while(s.startsWith("<system-reminder>")){
        let l = s.indexOf("</system-reminder>");
        if (l < 0) {
            break;
        }
        s = s.slice(l + 18).trimStart();
        a = true;
    }
    let c = (a ? s : e).trimEnd();
    while(c.endsWith("</system-reminder>")){
        let l = c.lastIndexOf(`
`);
        if (!(l < 0 ? c : c.slice(l + 1)).startsWith("<system-reminder>")) {
            break;
        }
        c = (l < 0 ? "" : c.slice(0, l)).trimEnd();
        a = true;
    }
    if (!a) {
        return e;
    }
    if (c === "") {
        return e;
    }
    return c;
}
function w6r(e) {
    let n;
    for(let r = 0; r < e.length; r++){
        let s = e[r];
        if (s.type !== "text") {
            continue;
        }
        let text = Ige(s.text);
        if (text === s.text) {
            continue;
        }
        n ??= [
            ...e
        ];
        n[r] = {
            ...s,
            text
        };
    }
    return n ?? e;
}
function I2t(e) {
    if (e.type !== "user") {
        return;
    }
    let pastedContent = "pasted_content" in e ? e.pasted_content : undefined;
    let inlinePastes = "inline_pastes" in e ? e.inline_pastes : undefined;
    let s = xte(e).length > 0 || rtr(pastedContent).texts.length > 0;
    let a = e.message?.content;
    if (!a && !s) {
        return;
    }
    if (Array.isArray(a) && a.length === 0 && !s) {
        return;
    }
    let uuid = "uuid" in e && typeof e.uuid === "string" ? e.uuid : undefined;
    let clientPlatform = k(e, "client_platform");
    let inboundOrigin = k(e, "inbound_origin");
    let receiverGroupingId = _6r(e);
    let activityObservation = b6r(e);
    let fromPlugin = Qct("from_plugin" in e ? e.from_plugin : undefined);
    let slackOrigin;
    let content = Array.isArray(a) ? v6r(w6r(re(a))) : Ige(a ?? "");
    if (Array.isArray(content) && content.length === 0 && !s) {
        return;
    }
    return {
        content,
        uuid,
        clientPlatform,
        inboundOrigin,
        receiverGroupingId,
        slackOrigin,
        activityObservation,
        pastedContent,
        inlinePastes,
        fromPlugin
    };
}
function gSt(e) {
    if (typeof e !== "string") {
        return;
    }
    return e.match(bjn)?.[1];
}
function XMe(e) {
    if (typeof e === "string") {
        return gSt(e) !== undefined;
    }
    if (!Array.isArray(e)) {
        return false;
    }
    return e.some((n)=>typeof n === "object" && n !== null && "type" in n && n.type === "text" && "text" in n && typeof n.text === "string" && gSt(n.text) !== undefined);
}
function v6r(e) {
    if (!e.some(O)) {
        return e;
    }
    return e.filter((n)=>!O(n));
}
function O(e) {
    if (e.type !== "text") {
        return false;
    }
    return typeof e.text !== "string" || e.text.trim() === "";
}
function re(e) {
    if (!e.some(P)) {
        return e;
    }
    return e.map((n)=>{
        if (!P(n)) {
            return n;
        }
        let n_source = n.source;
        let media_type = typeof n_source.mediaType === "string" && n_source.mediaType ? n_source.mediaType : xst(n.source.data);
        return {
            ...n,
            source: {
                type: "base64",
                media_type,
                data: n.source.data
            }
        };
    });
}
function P(e) {
    if (e.type !== "image" || e.source?.type !== "base64") {
        return false;
    }
    return !e.source.media_type;
}
export { rtr, a5o, Cae, Fvn, g6r, Uvn, l5o, h6r, c5o, y6r, R2t, otr, Bvn, _6r, b6r, YMe, jvn, d5o, Wvn, x2t, str, P2t, FZe, S6r, xGe, u5o, Ige, w6r, I2t, gSt, XMe, v6r };
