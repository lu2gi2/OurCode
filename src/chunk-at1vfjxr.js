import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ye, ot, W, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Zv, Q, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Bb, Qz, n6, Fu, Q1, y8e, _8e, c } from "/$bunfs/root/chunk-etbngzss.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { I2 } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { $Ie } from "/$bunfs/root/chunk-mm2yesqa.js";
import { SCe, ede, tde } from "/$bunfs/root/chunk-7y9jhgf9.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Qhr } from "/$bunfs/root/chunk-4r6b8efh.js";
import { vZt, nOt, rOt, UT, uP, tct, l1n, eSe, Vyo } from "/$bunfs/root/chunk-0ycjphb5.js";
import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { na } from "/$bunfs/root/chunk-55x53sfe.js";
import { Ite, HEt } from "/$bunfs/root/chunk-kasbfbhj.js";
import { g7e } from "/$bunfs/root/chunk-566pera2.js";
import { APt, Pf } from "/$bunfs/root/chunk-md7g8y4m.js";
import { Sst } from "/$bunfs/root/chunk-yw4at4y3.js";
import { _M, rye, Fts, Uts } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { l$e } from "/$bunfs/root/chunk-xpqgtv5j.js";
import { J5, Rb, uoe, rN, VCe } from "/$bunfs/root/chunk-5s4qvyjz.js";
import { soe, wde, eQt } from "/$bunfs/root/chunk-78511nt1.js";
import { b6 as error } from "/$bunfs/root/chunk-xjb1x9hj.js";
import { S1e, Rln } from "/$bunfs/root/chunk-03r1cgwn.js";
import { yfe } from "/$bunfs/root/chunk-7480f43b.js";
import { rgt, VNo } from "/$bunfs/root/chunk-3ffpp32x.js";
import { sYo } from "/$bunfs/root/chunk-0rhn2wtx.js";
import { A2t } from "/$bunfs/root/chunk-mvn8c8xj.js";
import { Pge } from "/$bunfs/root/chunk-7zpta555.js";
import { Wj } from "/$bunfs/root/chunk-g6gppm1v.js";
import { o, E, M, oe, T, u, _t, ue, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { Ko, zy } from "/$bunfs/root/chunk-7qc48pza.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { randomUUID } from "crypto";
import { isDeepStrictEqual } from "util";
import { appendFile } from "fs/promises";
const ae = p(()=>{
    let input = ue(o(), oe());
    let text = _t({
        type: A("text"),
        text: o()
    });
    let assistantByType = new Map;
    let a = {
        text,
        tool_use: _t({
            type: A("tool_use"),
            id: o(),
            name: o(),
            input
        }),
        thinking: _t({
            type: A("thinking"),
            thinking: o(),
            signature: o().optional()
        }),
        redacted_thinking: _t({
            type: A("redacted_thinking"),
            data: o()
        }),
        server_tool_use: _t({
            type: A("server_tool_use"),
            id: o(),
            name: o(),
            input
        }),
        mcp_tool_use: _t({
            type: A("mcp_tool_use"),
            id: o(),
            name: o(),
            server_name: o(),
            input
        })
    };
    for (let [S, h] of Object.entries(a)){
        assistantByType.set(S, h);
    }
    let r = E().finite();
    return {
        text,
        assistantByType,
        usage: _t({
            input_tokens: r,
            output_tokens: r,
            cache_creation_input_tokens: r.nullish(),
            cache_read_input_tokens: r.nullish(),
            iterations: T(_t({})).nullish()
        }),
        generic: _t({
            type: o()
        }),
        toolResultLike: _t({
            type: o(),
            tool_use_id: o()
        }),
        toolResult: _t({
            type: A("tool_result"),
            tool_use_id: o(),
            is_error: M().optional()
        })
    };
});
function q(e) {
    return typeof e === "object" && e !== null && !Array.isArray(e);
}
const pe = 256;
const ht = "[truncated: too deep]";
function Ae(e) {
    let n = [];
    if (typeof e === "object" && e !== null) {
        n.push({
            value: e,
            depth: 1
        });
    }
    while(n.length > 0){
        let { value, depth } = n.pop();
        if (depth > pe) {
            return true;
        }
        for (let r of Object.values(value)){
            if (typeof r === "object" && r !== null) {
                n.push({
                    value: r,
                    depth: depth + 1
                });
            }
        }
    }
    return false;
}
function ft(value) {
    let n = 0;
    let s = [
        {
            value,
            depth: 1
        }
    ];
    while(s.length > 0){
        let { value, depth } = s.pop();
        let S = Array.isArray(value) ? value : q(value) ? value : null;
        if (S === null) {
            continue;
        }
        for (let h of Object.keys(S)){
            let v = Reflect.get(S, h);
            if (typeof v !== "object" || v === null) {
                continue;
            }
            if (depth + 1 > pe) {
                Reflect.set(S, h, ht);
                n++;
            } else {
                s.push({
                    value: v,
                    depth: depth + 1
                });
            }
        }
    }
    return n;
}
function he(e) {
    if (q(e) && typeof e.type === "string") {
        return e.type;
    }
    return null;
}
function mt(e) {
    let n = he(e);
    if (n !== null) {
        return n;
    }
    if (e === null) {
        return "null";
    }
    if (Array.isArray(e)) {
        return "array";
    }
    return typeof e;
}
function gt(e) {
    let n = he(e);
    if (n === null) {
        return false;
    }
    let s = ae();
    return (s.assistantByType.get(n) ?? (n.endsWith("_tool_result") ? s.toolResultLike : s.generic)).safeParse(e).success;
}
function St(e) {
    let e_content = e.content;
    if (e_content === undefined || typeof e_content === "string") {
        return true;
    }
    if (Array.isArray(e_content)) {
        let s = e_content.filter((a)=>{
            let r = he(a);
            if (r === null) {
                return false;
            }
            if (r === "text") {
                return ae().text.safeParse(a).success;
            }
            return ae().generic.safeParse(a).success;
        });
        if (s.length !== e_content.length) {
            e.content = s;
        }
        return true;
    }
    if (!q(e_content)) {
        e.content = String(e_content);
        return true;
    }
    try {
        e.content = _(e_content);
        return true;
    } catch  {
        return false;
    }
}
function vt(e) {
    let n = he(e);
    if (n === null || !q(e)) {
        return false;
    }
    let s = ae();
    if (n === "text") {
        return s.text.safeParse(e).success;
    }
    if (n === "tool_result") {
        if (!s.toolResult.safeParse(e).success) {
            return false;
        }
        return St(e);
    }
    return s.generic.safeParse(e).success;
}
function D(e, n, s) {
    t(`[wireFrameShape] ${e} frame ${typeof n === "string" ? n : "(no uuid)"}: ${s}`, {
        level: "error"
    });
}
function De(e, n, s, uuid) {
    let r = [];
    let S = e.filter((h)=>{
        try {
            if (n(h)) {
                return true;
            }
        } catch (err) {
            r.push(`unreadable block (${l(err)})`);
            return false;
        }
        r.push(mt(h));
        return false;
    });
    if (r.length === 0) {
        return e;
    }
    D(s, uuid, `dropped ${r.length} malformed content block(s): ${r.join(", ")}`);
    return S;
}
function yt(e) {
    let n;
    if (typeof e.uuid === "string" && e.uuid !== "") {
        n = e.uuid;
    } else {
        D("assistant", e.uuid, "minted a uuid — original was not a non-empty string");
        n = randomUUID();
        e.uuid = n;
    }
    let e_message = e.message;
    if (!q(e_message)) {
        D("assistant", e.uuid, "dropped — message is not an object");
        return false;
    }
    if (e_message.id !== undefined && typeof e_message.id !== "string") {
        e_message.id = typeof e_message.id === "number" && Number.isFinite(e_message.id) ? String(e_message.id) : e.uuid;
        D("assistant", e.uuid, "coerced a non-string message.id");
    }
    if (typeof e_message.content === "string") {
        e_message.content = [
            {
                type: "text",
                text: e_message.content
            }
        ];
    }
    let s_content = e_message.content;
    if (!Array.isArray(s_content)) {
        D("assistant", e.uuid, "dropped — message.content is not an array");
        return false;
    }
    let r = De(s_content, gt, "assistant", e.uuid);
    if (r.length === 0 && s_content.length > 0) {
        D("assistant", e.uuid, "dropped — no valid content blocks remain");
        return false;
    }
    if (r !== s_content) {
        e_message.content = r;
    }
    Rt(e_message, n);
    return true;
}
function Rt(e, n) {
    let s = [];
    if (e.model !== undefined && typeof e.model !== "string") {
        delete e.model;
        s.push("model");
    }
    if (e.stop_reason !== undefined && e.stop_reason !== null && typeof e.stop_reason !== "string") {
        e.stop_reason = null;
        s.push("stop_reason");
    }
    if (e.usage !== undefined && !ae().usage.safeParse(e.usage).success) {
        delete e.usage;
        s.push("usage");
    }
    if (s.length > 0) {
        D("assistant", n, `removed malformed envelope field(s): ${s.join(", ")}`);
    }
}
function wt(e) {
    if (e.uuid !== undefined && (typeof e.uuid !== "string" || e.uuid === "")) {
        D("user", e.uuid, "minted a uuid — original was not a non-empty string");
        e.uuid = randomUUID();
    }
    let e_message = e.message;
    if (!q(e_message)) {
        D("user", e.uuid, "dropped — message is not an object");
        return false;
    }
    let n_content = e_message.content;
    if (typeof n_content === "string") {
        return true;
    }
    if (!Array.isArray(n_content)) {
        D("user", e.uuid, "dropped — message.content is neither string nor array");
        return false;
    }
    let a = De(n_content, vt, "user", e.uuid);
    if (a.length === 0 && n_content.length > 0) {
        D("user", e.uuid, "dropped — no valid content blocks remain");
        return false;
    }
    if (a !== n_content) {
        e_message.content = a;
    }
    return true;
}
function ye(event) {
    if (!q(event)) {
        return false;
    }
    switch(event.type){
        case "message_start":
            return q(event.message) && typeof event.message.id === "string";
        case "content_block_start":
            {
                let n = event.content_block;
                if (!q(n) || typeof n.type !== "string") {
                    return false;
                }
                switch(n.type){
                    case "tool_use":
                    case "server_tool_use":
                        return typeof n.id === "string" && typeof n.name === "string";
                    case "text":
                        return typeof n.text === "string";
                    case "thinking":
                        return typeof n.thinking === "string";
                    default:
                        return true;
                }
            }
        case "content_block_delta":
            {
                let n = event.delta;
                if (!q(n)) {
                    return false;
                }
                switch(n.type){
                    case "text_delta":
                        return typeof n.text === "string";
                    case "input_json_delta":
                        return typeof n.partial_json === "string";
                    case "signature_delta":
                        return typeof n.signature === "string";
                    case "thinking_delta":
                        return typeof n.thinking === "string";
                    default:
                        return true;
                }
            }
        default:
            return true;
    }
}
function JPe(e) {
    if (!q(e)) {
        return true;
    }
    try {
        let n = true;
        try {
            let a = ft(e);
            if (a > 0) {
                D(typeof e.type === "string" ? e.type : "unknown", e.uuid, `replaced ${a} subtree(s) nested deeper than ${pe} levels with a marker`);
            }
        } catch  {
            n = false;
        }
        let s;
        switch(e.type){
            case "assistant":
                s = yt(e);
                break;
            case "user":
                s = wt(e);
                break;
            case "stream_event":
                s = ye(e.event);
                if (!s) {
                    D("stream_event", e.uuid, "dropped — inner event is malformed");
                }
                break;
            default:
                s = true;
                break;
        }
        if (s && !n && Ae(e)) {
            D(typeof e.type === "string" ? e.type : "unknown", e.uuid, `dropped \u2014 nested deeper than ${pe} levels`);
            return false;
        }
        return s;
    } catch (err) {
        D(typeof e.type === "string" ? e.type : "unknown", e.uuid, `dropped \u2014 conformance threw: ${l(err)}`);
        return false;
    }
}
const kt = [
    "blocked_path",
    "decision_reason",
    "decision_reason_type",
    "decision_reason_code",
    "title",
    "display_name",
    "description",
    "agent_id",
    "tool_kind",
    "server_prompt",
    "provenance_prompt_line"
];
const bt = [
    "classifier_approvable",
    "suppress_always_allow_rule",
    "default_to_no",
    "requires_user_interaction"
];
function ufe(e) {
    return typeof e.agent_id === "string" && e.agent_id !== "" && !$Ie(String(e.tool_name));
}
function FHo(e) {
    if (!q(e)) {
        return false;
    }
    try {
        if (typeof e.tool_name !== "string" || typeof e.tool_use_id !== "string" || !q(e.input) || Ae(e)) {
            t("[wireFrameShape] can_use_tool request dropped — tool_name/tool_use_id not strings, input not an object, or nested too deep", {
                level: "error"
            });
            return false;
        }
        let n = [];
        for (let s of kt){
            if (e[s] !== undefined && typeof e[s] !== "string") {
                delete e[s];
                n.push(s);
            }
        }
        for (let s of bt){
            if (e[s] !== undefined && typeof e[s] !== "boolean") {
                delete e[s];
                n.push(s);
            }
        }
        if (e.permission_suggestions !== undefined) {
            let s = e.permission_suggestions;
            let a = Array.isArray(s) ? s.filter((r)=>I2().safeParse(r).success) : [];
            if (!Array.isArray(s) || a.length !== s.length) {
                n.push(`permission_suggestions (${Array.isArray(s) ? `${s.length - a.length} of ${s.length} entries` : "not an array"})`);
                if (a.length > 0) {
                    e.permission_suggestions = a;
                } else {
                    delete e.permission_suggestions;
                }
            }
        }
        if (e.matched_ask_rule !== undefined) {
            let s = e.matched_ask_rule;
            if (!q(s) || typeof s.source !== "string" || typeof s.tool_name !== "string" || s.rule_content !== undefined && typeof s.rule_content !== "string") {
                delete e.matched_ask_rule;
                n.push("matched_ask_rule");
            }
        }
        if (e.mcp_server !== undefined) {
            let s = e.mcp_server;
            if (!q(s) || typeof s.name !== "string" || typeof s.source !== "string") {
                delete e.mcp_server;
                n.push("mcp_server");
            }
        }
        if (e.computer_folder !== undefined) {
            let s = e.computer_folder;
            if (!q(s) || typeof s.path !== "string" || typeof s.computer_name !== "string") {
                delete e.computer_folder;
                n.push("computer_folder");
            }
        }
        if (n.length > 0) {
            t(`[wireFrameShape] can_use_tool request ${e.tool_use_id}: removed malformed field(s): ${n.join(", ")}`, {
                level: "error"
            });
        }
        return true;
    } catch (err) {
        t(`[wireFrameShape] can_use_tool request dropped \u2014 conformance threw: ${l(err)}`, {
            level: "error"
        });
        return false;
    }
}
function oln({ worker_epoch }) {
    if (typeof worker_epoch === "number" && Number.isSafeInteger(worker_epoch) && worker_epoch > 0) {
        return worker_epoch;
    }
}
const Ct = new RegExp(`<${n6}[\\s>]`, "i");
const Et = new RegExp(`</${n6}>`, "i");
function Tt(e) {
    return Ct.test(e) && Et.test(e);
}
const $qn = new Set([
    "user",
    "env_manager_log"
]);
const Mt = new Map([
    [
        "thinking_tokens",
        [
            "estimated_tokens",
            "estimated_tokens_delta",
            "user_message_uuid"
        ]
    ],
    [
        "post_turn_summary",
        [
            "summarizes_uuid",
            "status_category",
            "status_detail",
            "needs_action"
        ]
    ],
    [
        "task_summary",
        [
            "detail"
        ]
    ],
    [
        "commands_changed",
        [
            "commands"
        ]
    ]
]);
function Ie(e) {
    let e_subtype = e.subtype;
    if (e.type !== "system" || typeof e_subtype !== "string") {
        return null;
    }
    let s = Mt.get(e_subtype);
    if (!s) {
        return null;
    }
    let a = {
        type: "system",
        subtype: e_subtype,
        uuid: e.uuid,
        session_id: e.session_id
    };
    for (let r of s){
        if (r in e) {
            a[r] = e[r];
        }
    }
    return a;
}
const Ue = 500;
function Oe(e) {
    if (e.startsWith("<bash-stdout") || e.startsWith("<bash-stderr") || e.startsWith("<local-command-stdout") || e.startsWith("<local-command-stderr") || e.startsWith(y8e) || e.startsWith(`<${Q1} `) || e.startsWith(`<${Q1}>`)) {
        return true;
    }
    if (tde(e)) {
        return true;
    }
    if ((e.startsWith(Ite) || e.startsWith(SCe)) && e.startsWith("<", e.indexOf(`
`) + 1)) {
        return true;
    }
    let n = ede.find((s)=>e.startsWith(s));
    if (n !== undefined && e.startsWith("<", n.length)) {
        return true;
    }
    if (Tt(e)) {
        return true;
    }
    return e.includes("<bash-input>") || e.includes(`<${Bb}>`) || e.includes("<user-memory-input>") || e.includes(`<${Fu}`) || e.includes("<mcp-resource-update") || e.includes("<mcp-polling-update") || e.includes(`<${_8e}>`) || e.includes(`<${Qz}>`);
}
function f1e(e) {
    if (e.tool_use_result !== undefined) {
        return true;
    }
    let n = e.message?.content;
    if (typeof n === "string") {
        return Oe(n);
    }
    return Array.isArray(n) && n.some((s)=>typeof s === "object" && s !== null && "type" in s && (s.type === "tool_result" || s.type === "text" && "text" in s && typeof s.text === "string" && Oe(s.text)));
}
function Eft(e) {
    let n = e.message?.content;
    return Array.isArray(n) && !n.every((s)=>typeof s === "object" && s !== null && (s.type !== "text" || typeof s.text === "string"));
}
function KOr(e) {
    return f1e(e) || Eft(e);
}
function YOr(e) {
    if (KOr(e)) {
        return true;
    }
    let n = e.message?.content;
    return (typeof n === "string" ? [
        n
    ] : Array.isArray(n) ? n.flatMap((a)=>{
        if (typeof a === "object" && a !== null && a.type === "text" && typeof a.text === "string") {
            return [
                a.text
            ];
        }
        return [];
    }) : []).some(Pt);
}
function Pt(e) {
    let n = e.indexOf(`
`);
    return (n === -1 || n === e.length - 1) && (e.startsWith(Ite) || e.startsWith(SCe) || ede.some((s)=>e.startsWith(s.trimEnd())));
}
const qt = 2000;
const Dt = 10000;
const Ne = 2000;
const UHo = Ne;
const Ot = "Sending this machine's settings — Esc cancels the message…";
const It = (e)=>`Still sending this machine's settings (${Math.round(e / 1000)} s)\u2026`;
const Ut = "That message was not sent; this machine's settings are still on their way to the cloud session, and your next message waits for them too.";
const Ft = "you stopped waiting for this machine's settings to reach the cloud session; they are still uploading, and a message sent now waits for them again";
const Nt = "withdrawn before it was sent";
const $t = `this machine's settings were not sent (see above); send it again to run it ${sYo}`;
const xt = "this machine's settings may not have reached the cloud session (see above); send it again to run it anyway";
function $e(e, { retire, noticeAfterMs = qt, progressEveryMs = Dt, typedAheadGraceMs = Ne, now = Date.now }) {
    let h = (C)=>e.failureAnsweredAtMs !== undefined && C - e.failureAnsweredAtMs >= typedAheadGraceMs;
    let v = e.outcome();
    if (v !== undefined && (fe(v) === undefined || h(now()))) {
        if (fe(v) !== undefined) {
            me(we(v) === "hold_unsure" ? "ungated_after_timeout" : "ungated_after_failure");
        }
        return null;
    }
    let y = false;
    let R = 0;
    let w;
    let k = false;
    e.completion.then((C)=>{
        if (fe(C) !== undefined) {
            e.failureAnsweredAtMs ??= now();
        }
    }, ()=>{});
    let b = (C, L, I, Y, re)=>{
        let B = C === undefined ? undefined : fe(C);
        if (B !== undefined && (L || !h(I))) {
            e.failureAnsweredAtMs ??= now();
            y = true;
            me(Y ? "came_back_at_exit" : L ? "came_back_waited" : now() - (e.settledAtMs() ?? now()) < typedAheadGraceMs ? "came_back_early" : "came_back_late");
            return B;
        }
        me(Fe(C, y ? "resent" : "unasked"));
        retire();
    };
    let O = async (signal)=>{
        let L = now();
        await Q(noticeAfterMs, signal);
        for(let I = false; !signal.aborted; I = true){
            e.status.publish(I ? It(now() - L) : Ot, "progress");
            await Q(progressEveryMs, signal);
        }
    };
    let H = ()=>{
        R += 1;
        if (w === undefined) {
            let C = new AbortController;
            w = C;
            e.completion.then(()=>C.abort(), ()=>C.abort());
            O(C.signal);
        }
        return ()=>{
            R -= 1;
            if (R === 0 && e.outcome() === undefined) {
                w?.abort();
                w = undefined;
            }
        };
    };
    let ve = (passed)=>{
        let L = passed.then((I)=>{
            if (I) {
                return H();
            }
        });
        return ()=>void L.then((I)=>I?.());
    };
    return async ({ released, withdrawn, exiting, final, decided })=>{
        let J = now();
        let ee = e.outcome();
        if (ee !== undefined) {
            let j = b(ee, false, J, false, false);
            if (j !== undefined) {
                ne(0, "upload_failed", false);
            }
            return j;
        }
        let Z;
        let G = Z !== undefined;
        let z = ()=>now() - J;
        let ie = e.completion.then((settled)=>({
                settled
            }), ()=>({
                settled: undefined
            }));
        let te = Z === undefined ? H() : ve(Z.passed);
        let U = await Promise.race([
            ie,
            released.then(()=>"released"),
            withdrawn.then(()=>"withdrawn"),
            decided.then(()=>"decided")
        ]);
        te();
        let P = U === "released" && exiting();
        if (P) {
            U = await Promise.race([
                ie,
                withdrawn.then(()=>"withdrawn"),
                decided.then(()=>"decided")
            ]);
            if (typeof U === "object" && !final()) {
                ne(z(), "upload_settled", G);
                me(Fe(U.settled, "handover"));
                retire();
                return;
            }
        }
        if (U === "decided") {
            ne(z(), "decided", G);
            return;
        }
        if (U === "released") {
            if (!k && !G) {
                k = true;
                setTimeout(()=>{
                    k = false;
                }, 0);
                e.status.publish(Ut, "info");
            }
            ne(z(), "released", G);
            return {
                go: false,
                reason: Ft
            };
        }
        if (U === "withdrawn") {
            ne(z(), "withdrawn", G);
            return {
                go: false,
                reason: Nt
            };
        }
        let N = b(U.settled, true, J, P, G);
        ne(z(), N === undefined ? "upload_settled" : "upload_failed", G);
        return N;
    };
}
function we(e) {
    if (e.kind !== "uploaded") {
        return "go";
    }
    switch(e.outcome){
        case "failed":
        case "lane_full":
        case "unavailable":
        case "unauthorized":
            return "hold_failed";
        case "deadline":
            return "hold_unsure";
        case "sent":
        case "unchanged":
        case "conflict_resolved":
        case "raced":
        case "not_forwarded_at_create":
        case "aborted":
            return "go";
    }
}
function fe(e) {
    switch(we(e)){
        case "go":
            return;
        case "hold_failed":
            return {
                go: false,
                reason: $t
            };
        case "hold_unsure":
            return {
                go: false,
                reason: xt
            };
    }
}
function Fe(e, n) {
    if (e === undefined) {
        return "upload_rejected";
    }
    switch(we(e)){
        case "go":
            return "went";
        case "hold_failed":
            return `ran_without_settings_${n}`;
        case "hold_unsure":
            return `ran_unsure_${n}`;
    }
}
function me(e) {
    if (e === "went") {
        g("ccr_home_seed_first_message");
    } else if (e === "upload_rejected") {
        m("ccr_home_seed_first_message", e);
    } else {
        f("ccr_home_seed_first_message", e);
    }
}
function ne(held_ms, n, s) {
    i("tengu_home_seed_first_send_wait", {
        held_ms,
        release: d(n),
        ...{}
    });
}
const Nqn = 300000;
function xe(subtype, n) {
    if (n !== undefined) {
        return n;
    }
    if (subtype === "side_question") {
        return 600000;
    }
    return 75000;
}
function x(e, n, s) {}
const He = [
    "can_use_tool",
    "request_user_dialog",
    "hook_callback",
    ...Pge
];
const Le = [
    "elicitation",
    "mcp_message",
    "oauth_token_refresh",
    "host_auth_token_refresh",
    "remote_control_work_secret"
];
const Ke = null;
const capMs = 30000;
const de = 5;
const _e = 5000;
const Kt = 30000;
const je = 30000;
const Wt = 30000;
const jt = new Set([
    401,
    403,
    404
]);
const ke = 4096;
const Vt = {
    verified: "verified",
    verified_by_gate: "verified",
    verified_keyless_device: "verified",
    service_vouched: "verified",
    absent: "unverified",
    invalid: "unverified"
};
function se(e) {
    return String(e).slice(0, 64).replace(/[^\x20-\x7e]/g, "?");
}
function Gt(device_attestation_status) {
    if (typeof device_attestation_status !== "string") {
        return "unknown";
    }
    let n = device_attestation_status.startsWith("DEVICE_ATTESTATION_STATUS_") ? device_attestation_status.slice(26).toLowerCase() : device_attestation_status;
    return Vt[n] ?? "unknown";
}
const zt = 2000;
function Ve(e, connectedSince, serviceClock) {
    let sentAt = typeof e.created_at === "string" ? Date.parse(e.created_at) : NaN;
    if (Number.isNaN(sentAt)) {
        return {
            replayed: true
        };
    }
    return {
        sentAt,
        replayed: sentAt < connectedSince + zt,
        ...serviceClock !== undefined && {
            ageMs: Yt(serviceClock, sentAt) - sentAt
        }
    };
}
function Bt(e) {
    let n = e.payload.type === "control_request" ? e.payload.request : undefined;
    let s = typeof n === "object" && n !== null && "subtype" in n ? n.subtype : undefined;
    let e_device_attestation_status = e.device_attestation_status;
    if (!(s === "hook_callback" || Pge.some((v)=>v === s))) {
        return {};
    }
    let remote_tool_gate = e.payload.remote_tool_gate;
    let modeStamp = remote_tool_gate === undefined || remote_tool_gate === null ? undefined : remote_tool_gate === "caller_reauthored" ? "present" : "other";
    return {
        ...e_device_attestation_status !== undefined && e_device_attestation_status !== null && {
            attestationStatus: l$e(typeof e_device_attestation_status === "string" ? e_device_attestation_status.toUpperCase() : e_device_attestation_status)
        },
        ...modeStamp !== undefined && {
            modeStamp
        }
    };
}
function Yt(serviceClock, sentAt) {
    let s = Date.now();
    let a = performance.now();
    let r = serviceClock.serviceMs + Math.max(s - serviceClock.wallMs, a - serviceClock.monotonicMs);
    if (sentAt > r) {
        serviceClock.serviceMs = sentAt;
        serviceClock.wallMs = s;
        serviceClock.monotonicMs = a;
        return sentAt;
    }
    return r;
}
const Xt = Sst("ccr_worker", undefined);
const Qt = "remote_tool_result_too_large";
const Jt = p(()=>u({
        error: u({
            type: A("session_not_active")
        })
    }));
const Zt = "tool_host_ended";
function be(e) {
    return typeof e === "object" && e !== null && "type" in e && typeof e.type === "string";
}
class Ee {
    sessionId;
    orgUuid;
    getAccessToken;
    callbacks;
    onAuth401;
    state = "idle";
    abortController = null;
    reconnectAttempts = 0;
    reconnectTimer = null;
    livenessTimer = null;
    driftTimer = null;
    closedCause = null;
    lastDriftCheck = 0;
    lastHealthyAt;
    downSince;
    driftRedial = false;
    dialsSinceUp = 0;
    lastSequenceNum = 0;
    issuedRequestIds = new Set;
    ownRequestUuids = new Map;
    trustedDeviceToken;
    trackedSends;
    servesSession;
    rediallingPastBudget = false;
    connectedSince = 0;
    resumed = false;
    serviceClock = undefined;
    eventSigner;
    controlOnly;
    admitProjectPersonMessages;
    constructor(e, n, s, a, r, S, { trackSends = false, keepRedialling, eventSigner, controlOnly = false, admitProjectPersonMessages = false } = {}){
        this.sessionId = e;
        this.orgUuid = n;
        this.getAccessToken = s;
        this.callbacks = a;
        this.onAuth401 = r;
        if (S !== undefined && S > 0) {
            this.lastSequenceNum = S;
        }
        this.trackedSends = trackSends ? new Set : null;
        this.servesSession = keepRedialling ?? (()=>false);
        this.eventSigner = eventSigner;
        this.controlOnly = controlOnly;
        this.admitProjectPersonMessages = admitProjectPersonMessages;
    }
    get keepRedialling() {
        try {
            return this.servesSession();
        } catch  {
            return false;
        }
    }
    sendsInFlight() {
        let e = [
            ...this.trackedSends ?? []
        ];
        return {
            count: e.length,
            settled: Promise.allSettled(e).then(()=>{})
        };
    }
    async flushSends(e) {
        let { count, settled } = this.sendsInFlight();
        if (count > 0) {
            await Ge(settled, e);
        }
    }
    async connect() {
        if (this.state === "connecting" || this.state === "connected") {
            t("[SessionsV2Client] Already connecting/connected");
            return;
        }
        if (this.closedCause === "deliberate") {
            t("[SessionsV2Client] Ignoring connect() — deliberately closed");
            return;
        }
        this.state = "connecting";
        this.closedCause = null;
        this.dialsSinceUp++;
        this.connectedSince = Date.now();
        this.resumed = this.lastSequenceNum > 0;
        let e = new URL(`${dn().BASE_API_URL}/v1/code/sessions/${this.sessionId}/events/stream`);
        if (this.lastSequenceNum > 0) {
            e.searchParams.set("from_sequence_num", String(this.lastSequenceNum));
        }
        if (this.controlOnly) {
            e.searchParams.set("control_only", "1");
        }
        let n = new AbortController;
        this.abortController = n;
        let s;
        try {
            s = await this.authHeaders();
        } catch (err) {
            if (this.abortController !== n) {
                return;
            }
            t(`[SessionsV2Client] Could not build the stream's credentials: ${l(err)}`, {
                level: "error"
            });
            this.abortController = null;
            this.handleStreamEnd();
            return;
        }
        let a = {
            ...s,
            Accept: "text/event-stream"
        };
        if (n.signal.aborted || this.abortController !== n) {
            return;
        }
        if (this.lastSequenceNum > 0) {
            a["Last-Event-ID"] = String(this.lastSequenceNum);
        }
        t(`[SessionsV2Client] Connecting to ${e.href} (from_sequence_num=${this.lastSequenceNum})`);
        this.readStream(e, a, n);
    }
    loadTrustedDeviceToken() {
        let e;
        let n = ()=>{
            if (this.trustedDeviceToken === e) {
                this.trustedDeviceToken = undefined;
            }
        };
        let s = (async ()=>{
            try {
                let a = await Rb() ?? "";
                if (!a) {
                    n();
                }
                return a;
            } catch (err) {
                n();
                t(`[SessionsV2Client] trusted-device token unavailable, sending no td-v1 header: ${l(err)}`);
                return "";
            }
        })();
        e = s;
        return s;
    }
    rereadTrustedDeviceToken() {
        this.trustedDeviceToken = undefined;
        if (Pf()) {
            rN();
        }
    }
    async recoverTrustedDeviceToken(e, n) {
        try {
            if (!await APt()) {
                return false;
            }
            if (!eQt(e)) {
                uoe("[SessionsV2Client]", e);
                this.rereadTrustedDeviceToken();
                return false;
            }
            let s = await VCe(n || undefined);
            if (!s) {
                return false;
            }
            this.trustedDeviceToken = Promise.resolve(s);
            return true;
        } catch (err) {
            t(`[SessionsV2Client] trusted-device re-enrollment failed: ${l(err)}`);
            return false;
        }
    }
    async postEvents(url, n, s, a = Wt) {
        let r = await Xt(url, {
            method: "POST",
            headers: s,
            body: _(n),
            signal: AbortSignal.timeout(a),
            ...na({
                url
            })
        }, (y)=>fetch(url, y));
        if (r.ok) {
            let R = (await r.json()).results?.[0];
            let w = R ? parseInt(String(R.sequence_num), 10) : NaN;
            return {
                ok: true,
                sequence_num: isNaN(w) ? 0 : w
            };
        }
        let refusal;
        let inactive = false;
        let tooLarge = r.status === 413;
        if (r.status === 403 && Pf()) {
            let y = await Xe(r);
            refusal = y.reason === "untrusted_device" ? y.about : undefined;
        } else if (r.status === 409) {
            inactive = await tn(r);
        } else if (r.status === 400) {
            tooLarge = en(await Te(r));
        } else {
            await Wj(r);
        }
        return {
            ok: false,
            status: r.status,
            refusal,
            inactive,
            tooLarge,
            sentDeviceToken: s["X-Trusted-Device-Token"]
        };
    }
    async readStream(e, n, s) {
        let a;
        let r = false;
        let S = setTimeout(()=>{
            r = true;
            s.abort();
        }, je);
        try {
            a = await fetch(e.href, {
                method: "GET",
                headers: n,
                signal: s.signal,
                ...na({
                    url: e.href
                })
            });
        } catch (err) {
            clearTimeout(S);
            if (this.abortController !== s) {
                return;
            }
            if (r) {
                t(`[SessionsV2Client] Connect timed out after ${je}ms, reconnecting`, {
                    level: "error"
                });
                f("remote_connect", "remote_connect_timeout");
                this.handleStreamEnd();
                return;
            }
            if (s.signal.aborted) {
                return;
            }
            t(`[SessionsV2Client] Connect error: ${l(err)}`, {
                level: "error"
            });
            f("remote_connect", "remote_connect_request_failed");
            this.callbacks.onError?.(W(err));
            if (this.abortController !== s) {
                return;
            }
            this.handleStreamEnd();
            return;
        }
        if (!a.ok || !a.body) {
            t(`[SessionsV2Client] HTTP ${a.status} on SSE connect`, {
                level: "error"
            });
            let w = a.status === 403 ? await Xe(a) : undefined;
            if (w === undefined) {
                await Wj(a);
            }
            let k = w?.reason;
            clearTimeout(S);
            if (this.abortController !== s) {
                return;
            }
            if (a.status === 401 && this.onAuth401) {
                t("[SessionsV2Client] 401 on SSE connect — refreshing");
                m("remote_connect", "remote_connect_auth_401");
                let b = await this.onAuth401(Be(n) ?? this.getAccessToken()).catch(()=>false);
                if (this.abortController !== s) {
                    return;
                }
                if (!b && this.reconnectAttempts >= de && this.keepRedialling) {
                    m("remote_connect", "remote_connect_reconnect_exhausted");
                    this.state = "closed";
                    this.closedCause = "exhausted";
                    this.callbacks.onClose?.();
                    return;
                }
                this.handleStreamEnd();
                return;
            }
            if (w?.reason === "untrusted_device") {
                let b = await this.recoverTrustedDeviceToken(w.about, n["X-Trusted-Device-Token"]);
                if (this.abortController !== s) {
                    return;
                }
                if (b) {
                    t("[SessionsV2Client] untrusted_device on SSE connect — re-enrolled, reconnecting");
                    f("remote_connect", "remote_connect_untrusted_device");
                    this.handleStreamEnd();
                    return;
                }
            }
            if (jt.has(a.status)) {
                m("remote_connect", w?.reason === "untrusted_device" && w.about.kind === "unrecognized" ? "remote_connect_unknown_sub_reason" : "remote_connect_permanent_failure", ze(n));
                this.state = "closed";
                this.closedCause = "permanentHttp";
                this.callbacks.onClose?.(k);
                return;
            }
            f("remote_connect", "remote_connect_http_error");
            this.handleStreamEnd();
            return;
        }
        clearTimeout(S);
        if (this.abortController !== s) {
            a.body.cancel().catch(()=>{});
            return;
        }
        let serviceMs = Date.parse(a.headers.get("date") ?? "");
        if (Number.isNaN(serviceMs)) {
            this.serviceClock = undefined;
            t("[SessionsV2Client] The stream answered without a Date header: frames on it cannot be dated against the service clock", {
                level: "warn"
            });
        } else {
            this.connectedSince = serviceMs;
            this.serviceClock = {
                serviceMs,
                wallMs: Date.now(),
                monotonicMs: performance.now()
            };
        }
        this.state = "connected";
        this.reconnectAttempts = 0;
        this.rediallingPastBudget = false;
        let v = {
            gapMs: this.downSince === undefined ? 0 : Date.now() - this.downSince,
            driftRedial: this.driftRedial
        };
        if (this.downSince !== undefined) {
            i("tengu_remote_stream_regained", {
                gap_ms: v.gapMs,
                attempts: this.dialsSinceUp,
                drift_redial: v.driftRedial,
                keeps_redialling: this.keepRedialling
            });
        }
        this.downSince = undefined;
        this.driftRedial = false;
        this.dialsSinceUp = 0;
        this.resetLivenessTimer();
        this.startDriftWatch();
        t("[SessionsV2Client] Connected");
        g("remote_connect", ze(n));
        this.callbacks.onConnected?.(v);
        let y = a.body.getReader();
        let R = new A2t;
        try {
            while(true){
                let { done, value } = await y.read();
                if (this.abortController !== s) {
                    return;
                }
                if (done) {
                    break;
                }
                for (let b of R.push(value)){
                    if (this.abortController !== s) {
                        return;
                    }
                    this.resetLivenessTimer();
                    if (b.event && b.data) {
                        this.handleFrame(b.event, b.id, b.data);
                    }
                }
            }
        } catch (err) {
            if (s.signal.aborted) {
                return;
            }
            t(`[SessionsV2Client] Stream read error: ${l(err)}`, {
                level: "error"
            });
            f("remote_connect", "remote_connect_stream_error");
        } finally{
            y.releaseLock();
        }
        if (!s.signal.aborted) {
            t("[SessionsV2Client] Stream ended");
            this.handleStreamEnd();
        }
    }
    handleFrame(e, n, s) {
        let a;
        try {
            a = X(s);
        } catch (err) {
            c(ot(Error(`[SessionsV2Client] Failed to parse ${e} frame: ${l(err)}`), "SessionsV2Client: failed to parse event frame"));
            f("remote_connect", "remote_connect_frame_parse_failed");
            return;
        }
        switch(e){
            case "client_event":
                {
                    let r = a;
                    let sequenceNum = parseInt(n ?? String(r.sequence_num), 10);
                    if (!isNaN(sequenceNum) && sequenceNum > this.lastSequenceNum) {
                        this.lastSequenceNum = sequenceNum;
                    }
                    if (!be(r.payload)) {
                        t(`[SessionsV2Client] Dropping client_event with no payload.type (event_type=${r.event_type})`);
                        return;
                    }
                    if (r.payload.type === "control_response") {
                        let { response } = r.payload;
                        if (!response || typeof response !== "object" || typeof response.request_id !== "string") {
                            t(`[SessionsV2Client] Dropping malformed control_response from source=${r.source}`, {
                                level: "warn"
                            });
                            return;
                        }
                    }
                    if (r.payload.type === "user") {
                        if (r.source !== "worker" && f1e(r.payload) && !(this.admitProjectPersonMessages && Ke !== null && Ke.isProjectPersonEvent(r.payload, r.source))) {
                            t(`[SessionsV2Client] Dropping worker-output-shaped user frame from source=${r.source} \u2014 only the worker produces tool results and execution output`, {
                                level: "warn"
                            });
                            return;
                        }
                        if (Eft(r.payload)) {
                            t(`[SessionsV2Client] Dropping user frame with malformed content from source=${r.source}`, {
                                level: "warn"
                            });
                            return;
                        }
                    }
                    if (r.source !== "worker") {
                        if (r.payload.type === "control_response") {
                            if (this.issuedRequestIds.has(r.payload.response.request_id)) {
                                t(`[SessionsV2Client] Dropping control_response for this client's request_id from source=${r.source} \u2014 only the worker may answer our RPCs`, {
                                    level: "warn"
                                });
                                return;
                            }
                            if (r.payload.response.pending_user_dialog_requests || r.payload.response.pending_permission_requests) {
                                t(`[SessionsV2Client] Stripping prompt-redelivery fields from control_response with source=${r.source}`);
                                let { pending_user_dialog_requests, pending_permission_requests, ...rest } = r.payload.response;
                                this.deliver({
                                    ...r.payload,
                                    response: rest
                                }, {
                                    source: r.source,
                                    ...!isNaN(sequenceNum) && {
                                        sequenceNum
                                    },
                                    ...Ve(r, this.connectedSince, this.serviceClock),
                                    ...this.resumed && {
                                        resumed: true
                                    }
                                });
                                return;
                            }
                        } else if (!$qn.has(r.payload.type)) {
                            if (r.payload.type === "control_request" && typeof r.payload.request_id === "string" && this.issuedRequestIds.has(r.payload.request_id)) {
                                let h = "uuid" in r.payload ? r.payload.uuid : undefined;
                                if (typeof h !== "string" || h !== this.ownRequestUuids.get(r.payload.request_id)) {
                                    t(`[SessionsV2Client] A copy of own request ${se(r.payload.request_id)} from source=${se(r.source)} under another event uuid \u2014 ignored`);
                                    return;
                                }
                                let v = Gt(r.device_attestation_status);
                                t(`[SessionsV2Client] Own request ${se(r.payload.request_id)} echoed from source=${se(r.source)}: device proof ${se(r.device_attestation_status)} (${v})`);
                                if (v === "unverified") {
                                    this.rereadTrustedDeviceToken();
                                }
                                this.callbacks.onOwnRequestEchoed?.(r.payload.request_id, v);
                                return;
                            }
                            t(`[SessionsV2Client] Dropping ${r.payload.type} from source=${r.source}`);
                            return;
                        }
                    } else if (r.payload.type === "control_response") {
                        this.issuedRequestIds.delete(r.payload.response.request_id);
                        this.ownRequestUuids.delete(r.payload.response.request_id);
                    }
                    this.deliver(r.payload, {
                        source: r.source,
                        ...!isNaN(sequenceNum) && {
                            sequenceNum
                        },
                        ...Ve(r, this.connectedSince, this.serviceClock),
                        ...this.resumed && {
                            resumed: true
                        },
                        ...r.source === "worker" && Bt(r)
                    });
                    return;
                }
            case "ephemeral_event":
                {
                    let r = a;
                    if (r?.event_type === Zt) {
                        let h = typeof r.payload === "object" && r.payload !== null ? r.payload : {};
                        let { work_id, reason } = h;
                        try {
                            this.callbacks.onToolHostEnded?.({
                                workId: typeof work_id === "string" ? work_id : undefined,
                                reason: typeof reason === "string" ? reason : undefined
                            });
                        } catch (err) {
                            t(`[SessionsV2Client] tool_host_ended handler threw: ${l(err)}`, {
                                level: "error"
                            });
                        }
                        return;
                    }
                    let S = r.payload;
                    if (be(r.payload)) {
                        let h = Ie(S);
                        if (h && be(h)) {
                            this.deliver(h, {});
                            return;
                        }
                        if (r.payload.type !== "stream_event") {
                            t(`[SessionsV2Client] Dropping ${r.payload.type} on ephemeral channel`);
                            return;
                        }
                        if (!ye(r.payload.event)) {
                            t("[SessionsV2Client] Dropping malformed stream_event on ephemeral channel", {
                                level: "warn"
                            });
                            return;
                        }
                        this.deliver(r.payload, {});
                    }
                    return;
                }
            case "catch_up_truncated":
                t("[SessionsV2Client] catch_up_truncated — transcript gap");
                f("remote_connect", "remote_catch_up_truncated");
                this.callbacks.onCatchUpTruncated?.();
                return;
            case "session_update":
                {
                    let r = a?.connection_status;
                    if (typeof r === "string") {
                        try {
                            this.callbacks.onWorkerConnectionStatus?.(r);
                        } catch (err) {
                            t(`[SessionsV2Client] worker connection status handler threw: ${l(err)}`, {
                                level: "error"
                            });
                        }
                    } else {
                        t("[SessionsV2Client] Ignoring session_update frame");
                    }
                    return;
                }
            case "security_update":
                {
                    let r = a?.security_tier;
                    t(`[SessionsV2Client] security_update: tier ${typeof r === "string" ? se(r) : typeof r}`);
                    if (r === "elevated") {
                        try {
                            this.callbacks.onSecurityTierRaised?.();
                        } catch (err) {
                            t(`[SessionsV2Client] security tier handler threw: ${l(err)}`, {
                                level: "error"
                            });
                        }
                    }
                    return;
                }
            case "delivery_update":
                t(`[SessionsV2Client] Ignoring ${e} frame`);
                return;
            default:
                t(`[SessionsV2Client] Unknown SSE event type '${e}'`, {
                    level: "warn"
                });
                return;
        }
    }
    deliver(e, n) {
        if (!nOt((s)=>this.callbacks.onMessage(s, n), e, "SessionsV2Client")) {
            f("remote_connect", "remote_connect_frame_handler_threw");
        }
    }
    handleStreamEnd() {
        this.markDown();
        this.clearLivenessTimer();
        this.clearDriftWatch();
        if (this.state === "closed") {
            return;
        }
        this.abortController = null;
        let e = this.reconnectAttempts >= de;
        if (e && !this.keepRedialling) {
            t(`[SessionsV2Client] Reconnect budget exhausted (${de}), closing`);
            m("remote_connect", "remote_connect_reconnect_exhausted");
            this.state = "closed";
            this.closedCause = "exhausted";
            this.callbacks.onClose?.();
            return;
        }
        if (!e) {
            this.reconnectAttempts++;
        } else if (!this.rediallingPastBudget) {
            this.rediallingPastBudget = true;
            f("remote_connect", "remote_connect_redialling_past_budget");
        }
        this.state = "idle";
        let n = e ? capMs : Zv({
            attempt: this.reconnectAttempts,
            baseMs: Rln,
            capMs
        });
        t(`[SessionsV2Client] Reconnecting in ${n}ms (attempt ${this.reconnectAttempts}/${this.keepRedialling ? "∞" : de}, from_sequence_num=${this.lastSequenceNum})`);
        this.reconnectTimer = setTimeout(()=>{
            this.reconnectTimer = null;
            if (this.state === "closed") {
                return;
            }
            this.connect();
        }, n);
        if (!e) {
            this.callbacks.onReconnecting?.();
        }
    }
    onLivenessTimeout = ()=>{
        this.livenessTimer = null;
        t("[SessionsV2Client] Liveness timeout, reconnecting", {
            level: "warn"
        });
        try {
            let e = Date.now();
            this.callbacks.onStreamSilent?.({
                suspended: e - this.lastDriftCheck > _e * 2 || e - (this.lastHealthyAt ?? e) > S1e + _e * 2
            });
        } catch (err) {
            let n = err instanceof Error ? err : Error("not an Error");
            c(n);
        }
        this.abortController?.abort();
        this.abortController = null;
        this.handleStreamEnd();
    };
    markDown() {
        let e = Date.now();
        this.downSince ??= this.lastHealthyAt !== undefined && e - this.lastHealthyAt >= Kt ? this.lastHealthyAt : e;
    }
    resetLivenessTimer() {
        this.lastHealthyAt = Date.now();
        this.clearLivenessTimer();
        this.livenessTimer = setTimeout(this.onLivenessTimeout, S1e);
    }
    clearLivenessTimer() {
        if (this.livenessTimer) {
            clearTimeout(this.livenessTimer);
            this.livenessTimer = null;
        }
    }
    startDriftWatch() {
        this.clearDriftWatch();
        this.lastDriftCheck = Date.now();
        this.driftTimer = setInterval(()=>{
            let e = Date.now();
            let n = e - this.lastDriftCheck;
            this.lastDriftCheck = e;
            if (n > _e * 2 && this.state === "connected") {
                t(`[SessionsV2Client] Wall-clock drift ${n}ms \u2014 reconnecting after suspend`);
                this.reconnectAfterSuspend();
            }
        }, _e);
        this.driftTimer.unref?.();
    }
    clearDriftWatch() {
        if (this.driftTimer) {
            clearInterval(this.driftTimer);
            this.driftTimer = null;
        }
    }
    sendEvent(e) {
        return this.trackSend(this.postEvent(e).then((n)=>{
            if (n.outcome === "accepted") {
                return {
                    sequence_num: n.sequence_num
                };
            }
            return null;
        }));
    }
    trackSend(e) {
        if (this.trackedSends !== null) {
            let n = this.trackedSends;
            n.add(e);
            let s = ()=>{
                n.delete(e);
            };
            e.then(s, s);
        }
        return e;
    }
    async postEvent(e, n = {}) {
        if (this.state === "closed") {
            t("[SessionsV2Client] Cannot send: closed", {
                level: "warn"
            });
            m("remote_send_event", "remote_send_event_closed");
            return {
                outcome: "failed",
                cause: "closed"
            };
        }
        let s = `${dn().BASE_API_URL}/v1/code/sessions/${this.sessionId}/events`;
        try {
            let a = performance.now();
            let r = await vZt(this.eventSigner, this.sessionId, e);
            let S = performance.now();
            let h = {
                session_id: this.sessionId,
                events: [
                    r
                ]
            };
            let v = await this.authHeaders();
            let y = await this.postEvents(s, h, v, n.timeoutMs);
            if (!y.ok && y.status === 401 && this.onAuth401) {
                t("[SessionsV2Client] 401 on POST — refreshing + retry");
                if (await this.onAuth401(Be(v) ?? this.getAccessToken())) {
                    y = await this.postEvents(s, h, await this.authHeaders(), n.timeoutMs);
                }
            }
            let R = false;
            if (!y.ok && y.refusal !== undefined && await this.recoverTrustedDeviceToken(y.refusal, y.sentDeviceToken)) {
                t("[SessionsV2Client] untrusted_device on POST — re-enrolled, retrying");
                let w = await this.authHeaders();
                y = await this.postEvents(s, h, w, n.timeoutMs);
                R = true;
            }
            if (!y.ok) {
                t(`[SessionsV2Client] POST /events returned ${y.status}${y.inactive ? " (session not active)" : ""}${y.tooLarge ? " (too large)" : ""}`, {
                    level: "warn"
                });
                if (y.inactive) {
                    f("remote_send_event", "remote_send_event_session_inactive");
                    return {
                        outcome: "session_inactive"
                    };
                }
                m("remote_send_event", y.tooLarge ? "remote_send_event_too_large" : y.refusal?.kind === "signature_wanted" ? "remote_send_event_signature_wanted" : y.refusal?.kind === "unrecognized" ? "remote_send_event_unknown_sub_reason" : "remote_send_event_http_error");
                return {
                    outcome: "failed",
                    cause: "http",
                    status: y.status,
                    ...y.tooLarge && {
                        tooLarge: true
                    }
                };
            }
            if (R) {
                f("remote_send_event", "remote_send_event_untrusted_device");
            } else {
                g("remote_send_event");
            }
            return {
                outcome: "accepted",
                sequence_num: y.sequence_num,
                signMs: Math.round(S - a),
                postMs: Math.round(performance.now() - S)
            };
        } catch (err) {
            t(`[SessionsV2Client] POST /events failed: ${l(err)}`, {
                level: "warn"
            });
            m("remote_send_event", "remote_send_event_request_failed");
            return {
                outcome: "failed",
                cause: nn(err) ? "timeout" : "network"
            };
        }
    }
    sendControlResponse(e, uuid = randomUUID(), s = {}) {
        t("[SessionsV2Client] Sending control_response");
        return this.trackSend(this.postEvent({
            ...e,
            uuid
        }, s));
    }
    sendControlRequest(e, n) {
        return this.postControlRequest(e, n)?.requestId ?? null;
    }
    postControlRequest(request, n) {
        if (this.state === "closed") {
            t("[SessionsV2Client] Cannot send control_request: closed", {
                level: "warn"
            });
            return null;
        }
        let s = randomUUID();
        this.issuedRequestIds.add(s);
        if (this.issuedRequestIds.size > Ue) {
            t("[SessionsV2Client] issuedRequestIds overflow — evicting oldest unanswered request_id", {
                level: "warn"
            });
            let S = this.issuedRequestIds.values().next().value;
            if (S !== undefined) {
                this.issuedRequestIds.delete(S);
                this.ownRequestUuids.delete(S);
            }
        }
        let a = {
            type: "control_request",
            request_id: s,
            request,
            uuid: randomUUID()
        };
        this.ownRequestUuids.set(s, a.uuid);
        t(`[SessionsV2Client] Sending control_request: ${request.subtype}`);
        let posted = this.trackSend(this.postEvent(a).then((S)=>{
            if (S.outcome === "session_inactive" || S.outcome === "failed" && S.cause === "http") {
                n?.(s);
            }
            return S;
        }));
        return {
            requestId: s,
            posted
        };
    }
    sendControlCancelRequest(e) {
        if (this.state === "closed") {
            return;
        }
        t(`[SessionsV2Client] Sending control_cancel_request: ${e}`);
        this.sendEvent({
            type: "control_cancel_request",
            request_id: e,
            uuid: randomUUID()
        });
    }
    isConnected() {
        return this.state === "connected";
    }
    close() {
        t("[SessionsV2Client] Closing");
        this.state = "closed";
        this.closedCause = "deliberate";
        this.clearLivenessTimer();
        this.clearDriftWatch();
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimer = null;
        }
        this.abortController?.abort();
        this.abortController = null;
    }
    reconnect() {
        if (this.closedCause === "deliberate") {
            t("[SessionsV2Client] Ignoring reconnect() — deliberately closed");
            return;
        }
        t("[SessionsV2Client] Force reconnect");
        this.markDown();
        this.reconnectAttempts = 0;
        this.clearLivenessTimer();
        this.clearDriftWatch();
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimer = null;
        }
        this.abortController?.abort();
        this.abortController = null;
        this.state = "idle";
        this.connect();
    }
    reconnectAfterSuspend() {
        if (this.state === "closed" || this.driftRedial && this.state === "connecting") {
            return;
        }
        this.driftRedial = true;
        this.reconnect();
    }
    isRevivable() {
        return this.closedCause === "exhausted";
    }
    reviveAfterExhaustion() {
        if (!(this.keepRedialling && this.state === "idle" && this.reconnectAttempts >= de && this.reconnectTimer !== null) && this.closedCause !== "exhausted") {
            return false;
        }
        f("remote_connect", "remote_connect_revived_by_user_send");
        this.reconnect();
        return true;
    }
    async authHeaders() {
        let e = await (this.trustedDeviceToken ??= this.loadTrustedDeviceToken());
        return {
            Authorization: `${Ce}${this.getAccessToken()}`,
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
            "anthropic-client-platform": zy(),
            "x-organization-uuid": this.orgUuid,
            "User-Agent": Ko(),
            ...e && {
                "X-Trusted-Device-Token": e
            }
        };
    }
}
const Ce = "Bearer ";
function ze(e) {
    return {
        trusted_device_token_sent: e["X-Trusted-Device-Token"] !== undefined,
        device_identity_flag_on: Pf()
    };
}
function Be({ Authorization }) {
    if (Authorization?.startsWith(Ce)) {
        return Authorization.slice(Ce.length);
    }
}
async function Xe(e) {
    let n = await Te(e);
    let about = wde(n);
    if (about !== undefined) {
        return {
            reason: "untrusted_device",
            about
        };
    }
    return {
        reason: soe(n) === "session_stale_relogin" ? "session_stale_relogin" : undefined
    };
}
function en(e) {
    return e !== undefined && _(e).includes(Qt);
}
async function tn(e) {
    return Jt().safeParse(await Te(e)).success;
}
async function Te(e) {
    let n = e.body?.getReader();
    if (!n) {
        return;
    }
    try {
        let s = new Uint8Array(ke);
        let a = 0;
        while(true){
            let { done, value } = await n.read();
            if (done || !value) {
                break;
            }
            let h = Math.min(value.length, ke - a);
            s.set(value.subarray(0, h), a);
            a += h;
            if (a >= ke) {
                break;
            }
        }
        return X(new TextDecoder().decode(s.subarray(0, a)));
    } catch  {
        return;
    } finally{
        n.cancel().catch(()=>{});
    }
}
function nn(err) {
    return err instanceof Error && err.name === "TimeoutError";
}
const it = 1000;
const on = 8;
const Fqn = 200;
const rn = {
    can_use_tool: p(()=>u({
            request_id: o(),
            request: _t({
                subtype: A("can_use_tool"),
                tool_name: o(),
                input: ue(o(), oe()),
                tool_use_id: o()
            })
        })),
    request_user_dialog: p(()=>u({
            request_id: o(),
            request: _t({
                subtype: A("request_user_dialog"),
                dialog_kind: o(),
                payload: ue(o(), oe())
            })
        }))
};
function XOr(e, n) {
    let s = rn[n]().safeParse(e);
    if (!s.success) {
        return null;
    }
    return {
        type: "control_request",
        request_id: s.data.request_id,
        request: s.data.request
    };
}
const an = p(()=>u({
        subtype: A("success"),
        response: u({
            toolName: o()
        })
    }));
function at(e) {
    return an().safeParse(e).data?.response.toolName;
}
function JOr(e, n) {
    return typeof n === "string" && g7e(at(e), n);
}
function Je(e, request) {
    try {
        return isDeepStrictEqual(e, request);
    } catch  {
        return false;
    }
}
function V(e, n) {
    e.add(n);
    if (e.size > it) {
        let s = e.values().next().value;
        if (s !== undefined) {
            e.delete(s);
        }
    }
}
function Me(e, n, s, a = Fqn) {
    e.set(n, s);
    if (e.size > a) {
        let r = e.keys().next().value;
        if (r !== undefined) {
            e.delete(r);
        }
    }
}
const BHo = [
    "can_use_tool",
    "request_user_dialog"
];
const ln = 30000;
const un = 16;
function Gw(e) {
    if (e.length > 80) {
        return `${e.slice(0, 80).replace(/[^\x20-\x7e]/g, "?")}\u2026(+${e.length - 80})`;
    }
    return e.replace(/[^\x20-\x7e]/g, "?");
}
const le = 256;
const cn = 3;
const pn = 750;
const hn = 35000;
function ce(e) {
    if (e.withheld) {
        return "withheld";
    }
    if (e.status === 429) {
        return "http_429";
    }
    if (e.status !== undefined) {
        return "http_4xx";
    }
    return e.cause ?? "unknown";
}
function fn(e) {
    return e === "http_429" || e === "server" || e === "timeout" || e === "network";
}
const dt = {
    timeout: "the service took too long to answer",
    network: "the connection failed"
};
function jHo(e) {
    let n = ce(e);
    if (n === "timeout" || n === "network") {
        return dt[n];
    }
}
const m1e = "cancelled";
const ELt = "withdrawn";
const Ze = {
    outcome: "failed",
    cause: "closed"
};
const mn = 1500;
const lt = [
    1000,
    5000,
    15000,
    45000
];
const lt_length = lt.length;
const timeoutMs = 120000;
function sln(e, n) {
    switch(e){
        case "permission":
            return "A permission answer you gave could not be delivered to the cloud session, which may still be waiting for it. If the session looks stuck, interrupt it and retry.";
        case "dialog":
            return "A dialog answer you gave could not be delivered to the cloud session, which may still be waiting for it. If the session looks stuck, interrupt it and retry.";
        case "hook":
            if (n === "overtaken") {
                return "A hook's decision from this machine did not reach the cloud session before it stopped waiting for it: if the hook's deadline passed the tool call it was judging may have run without it; if the turn was interrupted, nothing ran.";
            }
            return "A hook's decision from this machine could not be delivered to the cloud session, which waits for it until the hook's deadline and then proceeds without it. Interrupt the session if that tool call must not run.";
        case "tool":
            if (n === "overtaken") {
                return "The result of work this machine did for the cloud session (such as a command it ran) did not reach the session before it stopped waiting for it.";
            }
            return "The result of work this machine did for the cloud session (such as a command it ran) could not be delivered; the session waits for it until its deadline and then carries on without it.";
    }
}
class g1e {
    config;
    callbacks;
    client = null;
    pendingPermissionRequests = new Map;
    undeliveredResponses = new Map;
    undeliveredHookIds = new Set;
    hookGiveUpsTold = new Set;
    pendingDialogRequests = new Set;
    pendingForwardedHooks = new Set;
    settledForwardedHookIds = new Set;
    workerSeenThisConnection = false;
    replayedRefusalsAnswered = 0;
    seedRequestsArmed = false;
    securityTierRaiseSeen = false;
    pendingServedRequests = new Map;
    settledServedRequestIds = new Set;
    errorShapedControlResponseIds = new Set;
    seenControlResponseIds = new Set;
    seenSuccessToolNames = new Map;
    retiredPermissionRequestIds = new Set;
    reinstatablePermissionRequests = new Map;
    reinstatableDialogIds = new Set;
    pendingControlRequests = new Map;
    workerStarting = false;
    pendingModelSwitchIds = new Set;
    sendGates = new Set;
    heldSends = new Set;
    withholdableHeldTold = false;
    chainedSends = 0;
    lifetime = new AbortController;
    serving = false;
    firstSendReleased = false;
    exitFlushRequested = false;
    withheldPromptInFlight = null;
    sentAMessage = false;
    connections = 0;
    newestOwnMessageSequence = null;
    lastHeld = {
        issued: Promise.resolve(),
        posted: Promise.resolve()
    };
    pendingInterrupt = null;
    constructor(e, n){
        this.config = e;
        this.callbacks = n;
        if (e.homeSeed !== undefined && e.homeSeedHoldsFirstSend !== false) {
            this.gateSendsOnSettings(e.homeSeed);
        }
        if (e.withheldInitialPrompt !== undefined) {
            let s = e.withheldInitialPrompt;
            queueMicrotask(()=>void this.sendWithheldInitialPrompt(s));
        }
    }
    connect() {
        t(`[RemoteSessionManager] Connecting to session ${this.config.sessionId}`);
        let e = {
            onMessage: (n, s)=>this.handleMessage(n, s),
            onConnected: (n)=>{
                t("[RemoteSessionManager] Connected");
                this.replayedRefusalsAnswered = 0;
                for (let s of this.undeliveredResponses.values()){
                    s.failures = 0;
                    if (s.giveUpOnSettle === "undelivered") {
                        s.giveUpOnSettle = null;
                    }
                }
                this.resendUndeliveredResponses();
                this.workerSeenThisConnection = false;
                if (this.securityTierRaiseSeen) {
                    try {
                        this.config.rebindEventSigner?.();
                    } catch (err) {
                        t(`[RemoteSessionManager] rebindEventSigner threw: ${l(err)}`, {
                            level: "error"
                        });
                    }
                }
                this.callbacks.onConnected?.(n);
                if (!this.seedRequestsArmed && !this.lifetime.signal.aborted) {
                    this.seedRequestsArmed = true;
                    let s = this.pendingPermissionRequests.size;
                    let a = (this.config.seedSubagentRequests ?? []).map((S)=>nOt((h)=>this.handleControlRequest(h, {}), S, "RemoteSessionManager, attach seed"));
                    if (a.length > 0 && !a.includes(true)) {
                        m("remote_permission_seed_adoption", "handler_threw");
                    } else if (a.includes(false)) {
                        f("remote_permission_seed_adoption", "handler_threw");
                    } else if (a.length > 0) {
                        g("remote_permission_seed_adoption");
                    }
                    let count = this.pendingPermissionRequests.size - s;
                    if (count > 0) {
                        i("tengu_remote_subagent_requests_adopted", {
                            count,
                            subagents_asking_at_a_turn_end: this.config.seedAskersPastATurn?.length ?? 0
                        });
                    }
                }
            },
            onClose: (n)=>{
                t("[RemoteSessionManager] Disconnected");
                if (this.client?.isRevivable()) {
                    this.giveUpUndeliveredResponses();
                } else {
                    this.dropUndeliveredResponses();
                }
                this.endWorkerStart();
                this.callbacks.onDisconnected?.(n);
            },
            onReconnecting: ()=>{
                this.workerSeenThisConnection = false;
                t("[RemoteSessionManager] Reconnecting");
                this.callbacks.onReconnecting?.();
            },
            onStreamSilent: (n)=>this.callbacks.onStreamSilent?.(n),
            onOwnRequestEchoed: (n, s)=>{
                let a = this.pendingControlRequests.get(n);
                if (a?.onEchoed) {
                    this.pendingControlRequests.set(n, {
                        ...a,
                        onEchoed: undefined
                    });
                    a.onEchoed(s);
                }
            },
            onWorkerConnectionStatus: (n)=>{
                t(`[RemoteSessionManager] The service reports the worker ${n === "connected" || n === "disconnected" ? n : "in an unknown state"}`);
                if (n === "connected") {
                    this.noteWorkerLive();
                    this.callbacks.onWorkerConnectionStatus?.(n);
                } else if (n === "disconnected") {
                    if (this.workerSeenThisConnection) {
                        this.endWorkerStart();
                    }
                    this.workerSeenThisConnection = false;
                    this.callbacks.onWorkerGone?.();
                    this.callbacks.onWorkerConnectionStatus?.(n);
                }
            },
            onSecurityTierRaised: ()=>{
                this.securityTierRaiseSeen = true;
            },
            onToolHostEnded: (n)=>{
                t("[RemoteSessionManager] The service ended this session's connection to a computer serving its tools");
                this.callbacks.onToolHostEnded?.(n);
            },
            ...{},
            onCatchUpTruncated: ()=>{
                t("[RemoteSessionManager] Catch-up truncated");
                this.callbacks.onCatchUpTruncated?.();
            },
            onError: (n)=>{
                t(`[RemoteSessionManager] Stream error: ${n.message}`, {
                    level: "error"
                });
                this.callbacks.onError?.(n);
            }
        };
        this.client = new Ee(this.config.sessionId, this.config.orgUuid, this.config.getAccessToken, e, this.config.onAuth401, this.config.initialSequenceNum, {
            trackSends: this.config.trackSendsInFlight === true,
            controlOnly: this.config.controlOnly === true,
            admitProjectPersonMessages: this.config.admitProjectPersonMessages === true,
            keepRedialling: ()=>this.config.keepStreamRedialling === true || this.serving,
            ...this.signedOpts({})
        });
        this.client.connect();
    }
    handleMessage(e, n = {}) {
        x("in", e, n);
        if (n.source === "worker" && n.replayed !== true) {
            this.noteWorkerLive();
        }
        if (e.type === "control_request") {
            this.handleControlRequest(e, n);
            return;
        }
        if (e.type === "control_cancel_request") {
            let { request_id } = e;
            this.reinstatablePermissionRequests.delete(request_id);
            this.reinstatableDialogIds.delete(request_id);
            let a = this.undeliveredResponses.get(request_id);
            if (a?.kind === "hook" || a?.kind === "tool") {
                this.giveUp(a, "overtaken");
            } else if (a) {
                this.dropKept(a);
            } else if (this.config.keepUndeliveredResponses === true && this.settledForwardedHookIds.has(request_id) && !this.hookGiveUpsTold.has(request_id)) {
                V(this.hookGiveUpsTold, request_id);
                m("remote_control_response", "overtaken");
                this.callbacks.onResponseUndelivered?.(request_id, "hook", "overtaken");
            }
            if (this.pendingForwardedHooks.delete(request_id)) {
                t(`[RemoteSessionManager] Forwarded hook request cancelled by the worker: ${Gw(request_id)}`);
                this.callbacks.onForwardedHookCancelled?.(request_id, "worker");
                return;
            }
            if (this.retireServedRequest(request_id, "worker")) {
                return;
            }
            if (this.pendingDialogRequests.delete(request_id)) {
                t(`[RemoteSessionManager] User dialog request cancelled: ${request_id}`);
                this.callbacks.onUserDialogCancelled?.(request_id);
                return;
            }
            let r = this.pendingPermissionRequests.get(request_id);
            if (!r) {
                t(`[RemoteSessionManager] control_cancel_request for unknown request ${request_id} \u2014 nothing pending, ignoring`);
                return;
            }
            t(`[RemoteSessionManager] Permission request cancelled: ${request_id}`);
            this.retirePermissionRequest(request_id);
            this.callbacks.onPermissionCancelled?.(request_id, r.tool_use_id);
            return;
        }
        if (e.type === "system" && e.subtype === "control_request_progress") {
            if (this.pendingControlRequests.has(e.request_id)) {
                this.endWorkerStart();
            }
            let s = this.pendingControlRequests.get(e.request_id);
            if (!s) {
                t(`[RemoteSessionManager] control_request_progress for unknown request ${e.request_id} \u2014 ignoring`);
                return;
            }
            clearTimeout(s.timer);
            let a = setTimeout(this.onControlRequestTimeout, s.timeoutMs, e.request_id, s.subtype, s.timeoutMs);
            this.pendingControlRequests.set(e.request_id, {
                ...s,
                timer: a
            });
            s.onProgress?.(e);
            return;
        }
        if (e.type === "control_response") {
            let { request_id } = e.response;
            let a = this.config.ignoreErrorShapedDialogReplies === true && e.response.subtype === "error";
            let r = at(e.response);
            let S = this.seenSuccessToolNames.get(request_id) ?? [];
            let h = this.pendingPermissionRequests.get(request_id);
            let v = h !== undefined && g7e(r, h.tool_name);
            if (a) {
                V(this.errorShapedControlResponseIds, request_id);
            } else if (r !== undefined && S.length < on && !v) {
                Me(this.seenSuccessToolNames, request_id, [
                    ...S,
                    r
                ], it);
            } else if (!v) {
                this.recordSeenControlResponseId(request_id);
            }
            let y = this.undeliveredResponses.get(request_id);
            if (y !== undefined && "uuid" in e && e.uuid === y.uuid && y.giveUpOnSettle !== "overtaken") {
                this.dropKept(y);
                if (y.failures > 0) {
                    f("remote_control_response", "recovered");
                } else {
                    g("remote_control_response");
                }
            }
            this.pendingModelSwitchIds.delete(request_id);
            let R = this.pendingControlRequests.get(request_id);
            if (R) {
                this.pendingControlRequests.delete(request_id);
                clearTimeout(R.timer);
                R.removeAbortListener?.();
                this.endWorkerStart();
                if (e.response.subtype === "success") {
                    R.resolve(e.response.response);
                } else {
                    R.reject(Uts(e.response));
                }
            } else {
                let w = this.pendingPermissionRequests.get(request_id);
                if (w) {
                    if (v) {
                        t(`[RemoteSessionManager] Permission response ${request_id} has mismatched toolName \u2014 worker will drop it, keeping prompt`);
                        return;
                    }
                    this.retirePermissionRequest(request_id);
                    t(`[RemoteSessionManager] Permission request ${request_id} answered elsewhere \u2014 dismissing`);
                    this.callbacks.onPermissionCancelled?.(request_id, w.tool_use_id);
                } else if (this.pendingDialogRequests.has(request_id)) {
                    if (a) {
                        t(`[RemoteSessionManager] User dialog request ${request_id} got an error-shaped reply elsewhere \u2014 worker still waiting, keeping it`);
                    } else {
                        this.pendingDialogRequests.delete(request_id);
                        t(`[RemoteSessionManager] User dialog request ${request_id} answered elsewhere \u2014 dismissing`);
                        this.callbacks.onUserDialogCancelled?.(request_id);
                    }
                } else if (this.pendingForwardedHooks.has(request_id)) {
                    t(`[RemoteSessionManager] Ignoring a peer control_response (${e.response.subtype}) for forwarded hook request ${Gw(request_id)} \u2014 still answering it here`);
                } else if (!this.settledServedRequestIds.has(request_id)) {
                    t(`[RemoteSessionManager] Unmatched control_response ${request_id} (${e.response.subtype})${e.response.subtype === "error" ? `: ${e.response.error}` : ""}`);
                }
            }
            if (this.config.rearmRedeliveredPermissionRequests === true) {
                this.rearmRedelivered(e.response.pending_permission_requests, "can_use_tool", this.pendingPermissionRequests);
            }
            this.rearmRedelivered(e.response.pending_user_dialog_requests, "request_user_dialog", this.pendingDialogRequests);
            return;
        }
        if (this.config.keepOwnModelSwitchBreadcrumb !== true && this.pendingModelSwitchIds.size > 0 && e.type === "user" && "isReplay" in e && e.isReplay === true && typeof e.message?.content === "string" && e.message.content.startsWith(HEt)) {
            let [s] = this.pendingModelSwitchIds;
            this.pendingModelSwitchIds.delete(s);
            t("[RemoteSessionManager] Dropped own set_model breadcrumb echo");
            return;
        }
        if (e.type === "result") {
            if (this.sentAMessage || this.config.homeSeedHoldsFirstSend !== false || this.config.initialPromptUuid !== undefined) {
                this.config.homeSeed?.afterFirstReply(this.lifetime.signal);
            }
            let s = [
                ...this.pendingPermissionRequests
            ];
            let r = this.config.subagentRequestsOutliveTheTurn === true ? s.filter(([, S])=>!ufe(S)) : s;
            for (let [S, h] of r){
                t(`[RemoteSessionManager] Turn ended with permission request ${S} unresolved \u2014 dismissing`);
                this.callbacks.onPermissionCancelled?.(S, h.tool_use_id);
                this.retirePermissionRequest(S);
                Me(this.reinstatablePermissionRequests, S, h);
            }
            if (s.length > 0 && n.replayed !== true) {
                let from_subagents = F(s, ([, h])=>ufe(h));
                i("tengu_remote_turn_ended_with_open_permission_requests", {
                    from_main_thread: s.length - from_subagents,
                    from_subagents,
                    kept_open: s.length - r.length
                });
            }
            for (let S of this.pendingDialogRequests){
                t(`[RemoteSessionManager] Turn ended with user dialog request ${S} unresolved \u2014 dismissing`);
                this.callbacks.onUserDialogCancelled?.(S);
                V(this.reinstatableDialogIds, S);
            }
            this.pendingDialogRequests.clear();
        }
        this.callbacks.onMessage(e, n);
    }
    retirePermissionRequest(e) {
        this.pendingPermissionRequests.delete(e);
        this.retiredPermissionRequestIds.add(e);
    }
    rearmRedelivered(e, n, s) {
        if (!Array.isArray(e)) {
            return;
        }
        e.slice(0, Fqn).forEach((a)=>{
            let r = XOr(a, n);
            if (r === null) {
                return;
            }
            let S = this.seenSuccessToolNames.get(r.request_id);
            let { request } = r;
            if (this.seenControlResponseIds.has(r.request_id) || n === "can_use_tool" && this.errorShapedControlResponseIds.has(r.request_id) || S !== undefined && !(request.subtype === "can_use_tool" && S.every((R)=>g7e(R, request.tool_name)))) {
                t(`[RemoteSessionManager] Redelivered ${n} ${Gw(r.request_id)} already answered \u2014 skipping`);
                return;
            }
            let reinstated = false;
            if (n === "can_use_tool" && this.retiredPermissionRequestIds.has(r.request_id)) {
                let R = this.reinstatablePermissionRequests.get(r.request_id);
                if (R === undefined) {
                    t(`[RemoteSessionManager] Redelivered can_use_tool ${Gw(r.request_id)} already retired here \u2014 skipping`);
                    return;
                }
                this.reinstatablePermissionRequests.delete(r.request_id);
                if (!Je(R, r.request)) {
                    m("remote_permission_request", "redelivered_mismatch");
                    t(`[RemoteSessionManager] Redelivered can_use_tool ${Gw(r.request_id)} differs from the request first shown under that id \u2014 not arming it`, {
                        level: "warn"
                    });
                    return;
                }
                this.retiredPermissionRequestIds.delete(r.request_id);
                reinstated = true;
            } else if (n === "request_user_dialog") {
                reinstated = this.reinstatableDialogIds.has(r.request_id);
            }
            let y = s.has(r.request_id);
            this.handleControlRequest(r, {}, {
                reinstated
            });
            if (!y && s.has(r.request_id)) {
                this.reinstatableDialogIds.delete(r.request_id);
                g(n === "can_use_tool" ? "remote_permission_redelivery" : "remote_dialog_redelivery");
            }
        });
    }
    recordSeenControlResponseId(e) {
        V(this.seenControlResponseIds, e);
    }
    recordSettledForwardedHookId(e) {
        V(this.settledForwardedHookIds, e);
    }
    handleControlRequest({ request_id, request }, { ageMs, attestationStatus, modeStamp, replayed }, S) {
        let y = {
            replayed,
            ageMs
        };
        let R = typeof request === "object" && request !== null && Object.hasOwn(request, "subtype") ? request.subtype : undefined;
        let w = Qhr(R, He);
        if (w !== undefined) {
            let k = Le.find((b)=>b === R);
            this.refuseControlRequest(request_id, k !== undefined ? `${k}, which another client answers,` : `a control request of a kind no client of this build handles (${w.length} characters, sha12 ${w.hash}${w.variantOfListed ? ", a variant of a listed kind" : ""})`, y);
            if (k === undefined) {
                this.callbacks.onControlRequestRefused?.(w);
            }
            return;
        }
        if (typeof request_id !== "string") {
            this.refuseControlRequest(request_id, `${request.subtype} with an id that is not a string`, y);
            return;
        }
        if (request.subtype === "can_use_tool") {
            t(`[RemoteSessionManager] Permission request for tool: ${request.tool_name}`);
            let k = this.pendingPermissionRequests.get(request_id);
            if (k !== undefined) {
                if (Je(k, request)) {
                    t(`[RemoteSessionManager] Duplicate permission request ${Gw(String(request_id))} \u2014 already pending, skipping`);
                } else {
                    m("remote_permission_request", "redelivered_mismatch");
                    t(`[RemoteSessionManager] Permission request ${Gw(String(request_id))} redelivered with a different body (${Gw(String(request.tool_name))}) \u2014 keeping the one first shown (${Gw(k.tool_name)})`, {
                        level: "warn"
                    });
                }
                return;
            }
            if (this.retiredPermissionRequestIds.has(request_id)) {
                if (this.config.seedSubagentRequests?.some((H)=>H.request_id === request_id) !== true) {
                    m("remote_permission_request", "retired_id_rearmed");
                }
                t(`[RemoteSessionManager] Permission request ${Gw(String(request_id))} arrived again after it was retired here \u2014 not arming it`, {
                    level: "warn"
                });
                return;
            }
            let b = request;
            try {
                b = structuredClone(request);
            } catch  {
                b = request;
            }
            this.pendingPermissionRequests.set(request_id, b);
            this.callbacks.onPermissionRequest(request, request_id, S);
            return;
        }
        if (request.subtype === "request_user_dialog") {
            if (this.pendingDialogRequests.has(request_id)) {
                t(`[RemoteSessionManager] Duplicate user dialog request ${request_id} \u2014 already pending, skipping`);
                return;
            }
            t(`[RemoteSessionManager] User dialog request: ${request.dialog_kind}`);
            this.pendingDialogRequests.add(request_id);
            this.callbacks.onUserDialogRequest(request, request_id, S);
            return;
        }
        if (request.subtype === "hook_callback" && _n(request)) {
            let k = this.callbacks.onForwardedHookCallback;
            if (!k) {
                t(`[RemoteSessionManager] Forwarded hook_callback ${Gw(request_id)} \u2014 not serving device hooks here, leaving it unanswered`);
                return;
            }
            if (request_id.length > le || request.callback_id.length > le) {
                t(`[RemoteSessionManager] Forwarded hook_callback ${Gw(request_id)} \u2014 an id longer than ${le} characters, leaving it unanswered`);
                return;
            }
            let b = {
                requestId: request_id,
                callbackId: request.callback_id,
                input: request.input,
                ...typeof request.issued_at === "number" && {
                    issuedAt: request.issued_at
                },
                ...typeof request.deadline_ms === "number" && {
                    deadlineMs: request.deadline_ms
                },
                ageMs,
                ...attestationStatus !== undefined && {
                    attestationStatus
                }
            };
            let O = this.callbacks.onUndeliveredHookReplayed;
            if (O && this.undeliveredHookIds.delete(request_id)) {
                this.hookGiveUpsTold.delete(request_id);
                this.pendingForwardedHooks.add(request_id);
                O(b);
                return;
            }
            if (this.settledForwardedHookIds.has(request_id) || this.pendingForwardedHooks.has(request_id)) {
                t(`[RemoteSessionManager] Forwarded hook_callback ${Gw(request_id)} already answered or in hand \u2014 skipping`);
                return;
            }
            this.pendingForwardedHooks.add(request_id);
            k(b);
            return;
        }
        if (Sn(request)) {
            let k = this.callbacks.onServedChannelRequest;
            if (!k) {
                t(`[RemoteSessionManager] ${request.subtype} ${Gw(request_id)} \u2014 not serving tools here, leaving it unanswered`);
                return;
            }
            if (request_id.length > le) {
                t(`[RemoteSessionManager] ${request.subtype} ${Gw(request_id)} \u2014 an id longer than ${le} characters, leaving it unanswered`);
                return;
            }
            if (this.settledServedRequestIds.has(request_id) || this.pendingServedRequests.has(request_id)) {
                t(`[RemoteSessionManager] ${request.subtype} ${Gw(request_id)} already answered or in hand \u2014 skipping`);
                return;
            }
            let abort = new AbortController;
            this.pendingServedRequests.set(request_id, {
                abort,
                subtype: request.subtype
            });
            k({
                requestId: request_id,
                subtype: request.subtype,
                request,
                signal: abort.signal,
                ageMs,
                ...attestationStatus !== undefined && {
                    attestationStatus
                },
                ...modeStamp !== undefined && {
                    modeStamp
                }
            });
            return;
        }
        this.refuseControlRequest(request_id, `${request.subtype} in a shape this client has no handler for`, y);
    }
    refuseControlRequest(e, n, { replayed, ageMs }) {
        let r = replayed === true && (ageMs === undefined || ageMs > ln || this.replayedRefusalsAnswered >= un);
        if (this.config.controlOnly === true || typeof e !== "string" || r) {
            t(`[RemoteSessionManager] ${n}${typeof e === "string" ? ` ${Gw(e)}` : ""} \u2014 leaving it unanswered`);
            return;
        }
        if (replayed === true) {
            this.replayedRefusalsAnswered++;
        }
        t(`[RemoteSessionManager] ${n} ${Gw(e)} \u2014 answering that it is not supported`);
        this.sendResponse({
            type: "control_response",
            response: {
                subtype: "error",
                request_id: e,
                error
            }
        }, null);
    }
    signedOpts(e) {
        return {
            ...e ?? {},
            ...this.config.eventSigner && {
                eventSigner: this.config.eventSigner
            }
        };
    }
    async sendMessage(e, n, s) {
        return this.send(e, n, (a, r)=>eSe(this.config.sessionId, a, this.signedOpts(r)), false, s);
    }
    async sendMessageVia(e, n, s) {
        return this.send(e, n, s, true);
    }
    async send(content, opts, s, a, r) {
        t(`[RemoteSessionManager] Sending message to session ${this.config.sessionId}`);
        this.reviveStreamForUserSend();
        x("out", {
            kind: "sendMessage",
            content,
            opts
        });
        let S = this.currentSendGates();
        let h = !a && S.length === 0 && this.chainedSends === 0;
        let v = null;
        let y = s;
        let R;
        try {
            R = await (h ? y(content, opts) : this.sendBehindGates(S, content, opts, y, r));
        } catch (err) {
            t(`[RemoteSessionManager] Send to session ${this.config.sessionId} threw: ${l(err)}`, {
                level: "error"
            });
            m("remote_send_message", "remote_send_message_threw");
            throw err;
        }
        if (!R.ok && R.withheld) {
            t(`[RemoteSessionManager] Message withheld by a send gate: ${R.reason}`);
            f("remote_send_message", R.reason === m1e ? "remote_send_message_cancelled" : R.reason === ELt ? "remote_send_message_withdrawn" : "remote_send_message_withheld");
        } else if (!R.ok) {
            t(`[RemoteSessionManager] Failed to send message to session ${this.config.sessionId}: ${R.reason}`, {
                level: "error"
            });
            m("remote_send_message", "remote_send_message_failed");
        } else {
            g("remote_send_message");
            this.sentAMessage = true;
        }
        return R;
    }
    addSendGate(gate, n = {}) {
        let s = {
            gate,
            onRelease: n.onRelease ?? "send",
            onExit: n.onExit ?? "as_release"
        };
        this.sendGates.add(s);
        return ()=>{
            this.sendGates.delete(s);
        };
    }
    gateSendsOnSettings(e) {
        let n = ()=>{};
        let s = $e(e, {
            retire: ()=>n(),
            noticeAfterMs: this.config.homeSeedWaitNoticeMs,
            typedAheadGraceMs: this.config.homeSeedTypedAheadGraceMs
        });
        if (s === null) {
            return;
        }
        n = this.addSendGate((a)=>{
            a.released.then(()=>{
                if (!a.exiting()) {
                    this.firstSendReleased = true;
                }
            });
            return s(a);
        }, {
            onRelease: "withhold",
            onExit: "await"
        });
    }
    async sendWithheldInitialPrompt(e) {
        if (e.sent) {
            return;
        }
        e.sent = true;
        let n = Date.now();
        let s = this.config.withheldPromptBackoffMs ?? pn;
        let attempts = 0;
        let r;
        let S = async (b, O)=>{
            attempts += 1;
            r ??= Date.now();
            let H = await eSe(this.config.sessionId, b, this.signedOpts(O));
            if (H.ok || attempts >= cn || !fn(ce(H)) || this.firstSendReleased || Date.now() - r > (this.config.withheldPromptRetryWindowMs ?? hn)) {
                return H;
            }
            await Q(s * attempts, this.lifetime.signal);
            if (this.exitFlushRequested && !this.firstSendReleased) {
                attempts += 1;
                return eSe(this.config.sessionId, b, this.signedOpts(O));
            }
            if (this.lifetime.signal.aborted || this.firstSendReleased) {
                return H;
            }
            return S(b, O);
        };
        let h = this.send(e.content, {
            uuid: e.uuid
        }, S, true, 0).catch((b)=>({
                ok: false,
                reason: l(b)
            }));
        this.withheldPromptInFlight = h.then(()=>{}, ()=>{});
        let v = await h;
        this.withheldPromptInFlight = null;
        let y = this.lifetime.signal.aborted && !v.ok;
        i("tengu_home_seed_prompt_resequenced", {
            success: v.ok,
            withheld_for: d(e.followsPermissionMode ? "signed_send" : e.heldOnlyForToolsCheck ? "tools_check" : this.config.homeSeed !== undefined ? "home_seed" : "other"),
            attempts,
            reason: d(v.ok ? "ok" : y ? "aborted" : ce(v)),
            duration_ms: Date.now() - n
        });
        if (v.ok) {
            e.sent = true;
            this.callbacks.onWithheldPromptSent?.();
        }
        if (y || v.ok) {
            return;
        }
        let R = ce(v);
        let w = R === "timeout" || R === "network" || R === "unknown";
        let k;
        switch(R){
            case "withheld":
            case "not_first_party":
                k = v.reason;
                break;
            case "http_429":
                k = "the service is busy";
                break;
            case "http_4xx":
                k = v.advice ?? `the service refused it, HTTP ${String(v.status)}`;
                break;
            case "server":
                k = "the service had an error";
                break;
            case "timeout":
            case "network":
                k = dt[R];
                break;
            case "unknown":
                k = v.advice ?? "";
                break;
        }
        if (this.callbacks.onWithheldPromptFailed) {
            this.callbacks.onWithheldPromptFailed(k, w);
        } else {
            let b = k === "" ? "" : `: ${k.replace(/\.+$/, "")}`;
            this.config.homeSeed?.status.publish(w ? `Your first message may not have reached the cloud session${b}. If Claude doesn't respond to it soon, send it again` : `Couldn't send your first message${b}`, "warning");
        }
    }
    currentSendGates() {
        return [
            ...[],
            ...this.sendGates
        ];
    }
    async sendBehindGates(e, n, s, a, submittedAtMs) {
        this.chainedSends++;
        let S = false;
        let h = false;
        let v = false;
        let y = ()=>{};
        let released = new Promise((resolve)=>{
            y = resolve;
        });
        let release = (P, N)=>{
            S = P;
            h = N;
            v = true;
            y();
            this.tellWithholdableHeld();
        };
        let k = ()=>{};
        let withdrawn = new Promise((resolve)=>{
            k = resolve;
        });
        let O = ()=>{};
        let decided = new Promise((resolve)=>{
            O = resolve;
        });
        let ve = {
            messageUuid: s?.uuid,
            ...submittedAtMs !== undefined && {
                submittedAtMs
            },
            released,
            withdrawn,
            exiting: ()=>S,
            final: ()=>h,
            decided
        };
        let C = ()=>{};
        let issued = new Promise((resolve)=>{
            C = resolve;
        });
        let lastHeld = this.lastHeld;
        let Y = ()=>{};
        let re = false;
        let B = false;
        let J = e.map(()=>{});
        let ee = new Set(e);
        let Z = e.map((P, N)=>yn(P.gate, ve).then((j)=>{
                J[N] = j;
                ee.delete(P);
                this.tellWithholdableHeld();
                return j;
            }));
        let G = new Promise((resolve)=>{
            for (let N of Z){
                N.then((j)=>{
                    if (j !== undefined) {
                        resolve(j);
                    }
                });
            }
        });
        let z = Promise.race([
            Promise.all(Z).then(Se),
            G,
            released.then(()=>Se(J) ?? rt(ee, S) ?? Promise.all(Z.filter((P, N)=>S && e[N]?.onExit === "await")).then(Se)),
            withdrawn.then(()=>st(true))
        ]);
        let ie = ()=>{
            v = true;
            O();
            this.tellWithholdableHeld();
        };
        z.then(ie, ie);
        let posted = z.then((P)=>Promise.race([
                lastHeld.posted,
                released.then(()=>lastHeld.issued)
            ]).then(()=>P)).then((P)=>{
            let N = P ?? st(re);
            Y();
            B = true;
            C();
            if (N !== undefined) {
                return nt(N);
            }
            this.reviveStreamForUserSend();
            return a(n, s);
        });
        let U = {
            messageUuid: s?.uuid,
            release,
            issuedYet: ()=>B,
            settledYet: ()=>v,
            withheldOnRelease: ()=>Se(J) !== undefined || rt(ee, false) !== undefined,
            withdraw: ()=>{
                re = true;
                Y();
                k();
            },
            issued,
            posted
        };
        this.lastHeld = {
            issued,
            posted: posted.then(()=>{}, ()=>{})
        };
        this.heldSends.add(U);
        Y = ()=>{
            this.heldSends.delete(U);
            this.tellWithholdableHeld();
        };
        Q(0, this.lifetime.signal).then(()=>this.tellWithholdableHeld());
        posted.then(()=>this.leaveChain(U, C), ()=>this.leaveChain(U, C));
        return z.then((P)=>{
            if (P === undefined) {
                return posted;
            }
            return nt(P);
        });
    }
    withdrawHeldSend(e) {
        let n = [
            ...this.heldSends
        ].filter((s)=>s.messageUuid === e && !s.issuedYet());
        n.forEach((s)=>s.withdraw());
        return n.length > 0;
    }
    heldSendUuids() {
        return [
            ...this.heldSends
        ].flatMap((e)=>{
            if (e.messageUuid !== undefined && !e.issuedYet()) {
                return [
                    e.messageUuid
                ];
            }
            return [];
        });
    }
    leaveChain(e, n) {
        this.chainedSends--;
        this.heldSends.delete(e);
        this.tellWithholdableHeld();
        n();
    }
    hasWithholdableHeldSend() {
        return this.withholdableHeldSends().length > 0;
    }
    cancelHeldSends() {
        let e = this.withholdableHeldSends();
        e.forEach((n)=>n.release(false, false));
        return e.length;
    }
    withholdableHeldSends() {
        return [
            ...this.heldSends
        ].filter((e)=>!e.issuedYet() && !e.settledYet() && e.withheldOnRelease());
    }
    tellWithholdableHeld() {
        let e = this.hasWithholdableHeldSend();
        if (e === this.withholdableHeldTold) {
            return;
        }
        this.withholdableHeldTold = e;
        try {
            this.callbacks.onWithholdableHeldChanged?.(e);
        } catch (err) {
            c(Error(`[RemoteSessionManager] onWithholdableHeldChanged listener failed: ${l(err)}`));
        }
    }
    async releaseHeldSends(e = mn, { exiting = false, final = false, keepWithheld = false } = {}) {
        if (exiting) {
            this.exitFlushRequested = true;
        }
        let r = [
            ...this.heldSends
        ].filter((h)=>!(keepWithheld && h.withheldOnRelease()));
        r.forEach((h)=>h.release(exiting, final));
        let S = r.map(()=>({
                kind: "waiting"
            }));
        await Ge(Promise.allSettled([
            ...r.map((h, v)=>h.posted.then((y)=>{
                    S[v] = wn(y);
                }, ()=>{
                    S[v] = {
                        kind: "unconfirmed"
                    };
                })),
            ...this.withheldPromptInFlight ? [
                this.withheldPromptInFlight
            ] : []
        ]), e);
        r.forEach((h, v)=>{
            if (S[v]?.kind !== "waiting") {
                return;
            }
            if (h.issuedYet()) {
                S[v] = {
                    kind: "unconfirmed"
                };
            } else if (final) {
                h.withdraw();
                S[v] = {
                    kind: "unsent"
                };
            }
        });
        return {
            unsent: F(S, (h)=>h.kind === "unsent"),
            refused: S.flatMap((h)=>{
                if (h.kind === "refused") {
                    return [
                        h.reason
                    ];
                }
                return [];
            }),
            unconfirmed: F(S, (h)=>h.kind === "unconfirmed"),
            stillHeld: F(S, (h)=>h.kind === "waiting")
        };
    }
    async sendBashCommand(e, n) {
        t(`[RemoteSessionManager] Sending bash_command to session ${this.config.sessionId}`);
        this.reviveStreamForUserSend();
        let s = await Vyo(this.config.sessionId, e, this.signedOpts(n));
        if (!s.ok) {
            t(`[RemoteSessionManager] Failed to send bash_command to session ${this.config.sessionId}: ${s.reason}`, {
                level: "error"
            });
            m("remote_send_bash", "remote_send_bash_failed");
        } else {
            g("remote_send_bash");
        }
        return s;
    }
    reviveStreamForUserSend() {
        if (this.client?.reviveAfterExhaustion()) {
            this.callbacks.onReconnecting?.();
        }
    }
    sendResponse(e, kind, s, a) {
        let client = this.client;
        if (!client) {
            return;
        }
        let S = performance.now();
        let h = a === undefined ? undefined : (w)=>{
            try {
                a(w, Math.round(performance.now() - S));
            } catch (err) {
                t(`[RemoteSessionManager] An answer's post listener threw; the answer's fate is unchanged: ${l(err)}`, {
                    level: "warn"
                });
            }
            return w;
        };
        if (kind === null || this.config.keepUndeliveredResponses !== true) {
            let w = client.sendControlResponse(e, undefined, tt(kind));
            if (h !== undefined) {
                w.then(h);
            }
            return;
        }
        let request_id = e.response.request_id;
        let R = this.undeliveredResponses.get(request_id) ?? {
            response: e,
            kind,
            uuid: randomUUID(),
            failures: 0,
            inFlight: false,
            giveUpOnSettle: null,
            timer: null,
            told: false
        };
        R.response = e;
        if (s !== undefined) {
            R.request = s;
        }
        this.undeliveredResponses.set(request_id, R);
        this.postKeptResponse(client, R, h);
    }
    postKeptResponse(e, n, s) {
        n.inFlight = true;
        let a = e.sendControlResponse(n.response, n.uuid, tt(n.kind));
        (s === undefined ? a : a.then(s)).then((r)=>this.settleResponsePost(n, r), (r)=>{
            t(`[RemoteSessionManager] Posting an answer threw: ${l(r)}`, {
                level: "warn"
            });
            this.settleResponsePost(n, {
                outcome: "failed",
                cause: "network"
            });
        });
    }
    settleResponsePost(e, n) {
        e.inFlight = false;
        let request_id = e.response.response.request_id;
        if (this.undeliveredResponses.get(request_id) !== e) {
            return;
        }
        if (n.outcome === "accepted") {
            if (e.giveUpOnSettle === "overtaken") {
                this.giveUp(e, "overtaken");
                return;
            }
            this.dropKept(e);
            if (e.standIn) {
                return;
            }
            if (e.failures > 0 || e.giveUpOnSettle !== null) {
                f("remote_control_response", "recovered");
            } else {
                g("remote_control_response");
            }
            return;
        }
        if (e.giveUpOnSettle !== null) {
            this.giveUp(e, e.giveUpOnSettle);
            return;
        }
        if (n.outcome === "session_inactive" || n.outcome === "failed" && n.cause === "http" && n.status === 404) {
            this.dropKept(e);
            t(`[RemoteSessionManager] Answer for ${Gw(request_id)} has no session to go to (${n.outcome === "failed" && n.cause === "http" ? `http ${n.status}` : "session not active"}); dropped`);
            f("remote_control_response", "session_gone");
            return;
        }
        if (n.outcome === "failed" && n.cause === "closed") {
            if (!this.client?.isRevivable()) {
                this.giveUp(e);
            }
            return;
        }
        if (n.outcome === "failed" && n.cause === "http" && n.status < 500 && n.status !== 408 && n.status !== 429) {
            if (this.postRefusalStandIn(e, n)) {
                return;
            }
            t(`[RemoteSessionManager] Answer for ${Gw(request_id)} was refused by the service (http ${n.status}); not re-sending`, {
                level: "warn"
            });
            this.giveUp(e, "undelivered", "refused");
            return;
        }
        if (!this.client?.isConnected()) {
            t(`[RemoteSessionManager] Answer for ${Gw(request_id)} did not reach the session while the stream is down; it goes again at reconnect`);
            return;
        }
        e.failures += 1;
        if (e.failures > lt_length) {
            t(`[RemoteSessionManager] Answer for ${Gw(request_id)} could not be delivered after ${e.failures} attempts; giving up`, {
                level: "warn"
            });
            this.giveUp(e);
            return;
        }
        if (e.failures === 1) {
            f("remote_control_response", "resend");
        }
        this.scheduleResponseResend(e);
    }
    postRefusalStandIn(e, n) {
        let client = this.client;
        let response = e.response.response;
        if (e.kind !== "tool" || e.standIn || client === null || response.subtype !== "success" || n.status === 401 || n.status === 403) {
            return false;
        }
        let bytes = Buffer.byteLength(_(response.response), "utf8");
        t(`[RemoteSessionManager] Answer for ${Gw(response.request_id)} was refused by the service (http ${n.status}${n.tooLarge ? `, too large: this machine's configured limit is ${rgt()} bytes, so the service's is lower` : ""}, ${bytes} bytes); sending an error in its place`, {
            level: "warn"
        });
        f("remote_control_response", n.tooLarge ? "refused_too_large" : "refused_stand_in");
        e.response = {
            type: "control_response",
            response: {
                subtype: "success",
                request_id: response.request_id,
                response: {
                    result: VNo({
                        answer: response.response,
                        bytes,
                        status: n.status,
                        tooLarge: n.tooLarge === true
                    })
                }
            }
        };
        e.uuid = randomUUID();
        e.standIn = true;
        e.failures = 0;
        x("out", e.response);
        this.postKeptResponse(client, e);
        return true;
    }
    dropKept(e) {
        this.clearResendTimer(e);
        this.undeliveredResponses.delete(e.response.response.request_id);
    }
    giveUp(e, n = "undelivered", s = n) {
        let request_id = e.response.response.request_id;
        if (e.inFlight) {
            if (e.giveUpOnSettle !== "overtaken") {
                e.giveUpOnSettle = n;
            }
            return;
        }
        this.dropKept(e);
        if (e.kind === "hook") {
            V(this.hookGiveUpsTold, request_id);
        }
        if (n === "undelivered" && (e.kind === "dialog" || e.kind === "permission")) {
            this.seenControlResponseIds.delete(request_id);
            if (e.kind === "permission") {
                if (e.request !== undefined) {
                    Me(this.reinstatablePermissionRequests, request_id, e.request);
                }
            } else {
                V(this.reinstatableDialogIds, request_id);
            }
        }
        if (n === "undelivered" && e.kind === "hook" && s !== "refused") {
            V(this.undeliveredHookIds, request_id);
        }
        m("remote_control_response", s);
        if (e.told) {
            return;
        }
        e.told = true;
        this.callbacks.onResponseUndelivered?.(request_id, e.kind, n);
    }
    scheduleResponseResend(e) {
        this.clearResendTimer(e);
        let n = lt[Math.min(e.failures, lt_length) - 1] ?? 45000;
        e.timer = setTimeout(this.resendOnTimer, n, e.response.response.request_id);
    }
    resendOnTimer = (e)=>{
        let n = this.undeliveredResponses.get(e);
        let client = this.client;
        if (!n || !client) {
            return;
        }
        n.timer = null;
        if (!n.inFlight) {
            x("out", n.response);
            this.postKeptResponse(client, n);
        }
    };
    clearResendTimer(e) {
        if (e.timer !== null) {
            clearTimeout(e.timer);
            e.timer = null;
        }
    }
    resendUndeliveredResponses() {
        let client = this.client;
        if (!client) {
            return;
        }
        for (let n of this.undeliveredResponses.values()){
            this.clearResendTimer(n);
            if (!n.inFlight) {
                x("out", n.response);
                this.postKeptResponse(client, n);
            }
        }
    }
    giveUpUndeliveredResponses() {
        for (let e of [
            ...this.undeliveredResponses.values()
        ]){
            this.giveUp(e);
        }
    }
    giveUpKeptServedResults() {
        for (let e of [
            ...this.undeliveredResponses.values()
        ]){
            if (e.kind === "tool") {
                e.inFlight = false;
                this.giveUp(e, e.giveUpOnSettle ?? "undelivered");
            }
        }
    }
    dropUndeliveredResponses() {
        for (let e of [
            ...this.undeliveredResponses.values()
        ]){
            if (e.giveUpOnSettle === "overtaken") {
                e.inFlight = false;
                this.giveUp(e, "overtaken");
                continue;
            }
            this.dropKept(e);
            f("remote_control_response", "session_gone");
        }
    }
    respondToPermissionRequest(e, n) {
        let s = this.pendingPermissionRequests.get(e);
        if (!s) {
            c(Error(`[RemoteSessionManager] No pending permission request with ID: ${e}`));
            m("remote_permission_respond", "remote_permission_respond_no_pending");
            return;
        }
        this.retirePermissionRequest(e);
        this.recordSeenControlResponseId(e);
        this.reviveStreamForUserSend();
        let a = this.config.nameRepositoryTrustAnswers === true && $Ie(s.tool_name);
        let r = a && n.behavior === "allow" ? {
            behavior: "allow",
            updatedInput: s.input,
            ...n.toolUseID !== undefined && {
                toolUseID: n.toolUseID
            }
        } : n;
        let S = rOt(e, r, this.config.nameToolOnPermissionAllow === true || a ? s.tool_name : undefined, a && n.behavior === "deny" && n.decisionClassification === "user_reject");
        t(`[RemoteSessionManager] Sending permission response: ${n.behavior}`);
        x("out", S);
        this.sendResponse(S, "permission", s);
        g("remote_permission_respond");
    }
    respondToUserDialogRequest(e, n) {
        if (!this.pendingDialogRequests.delete(e)) {
            c(Error(`[RemoteSessionManager] No pending user dialog request with ID: ${e}`));
            m("remote_dialog_respond", "remote_dialog_respond_no_pending");
            return;
        }
        this.recordSeenControlResponseId(e);
        this.reviveStreamForUserSend();
        let s = {
            type: "control_response",
            response: {
                subtype: "success",
                request_id: e,
                response: n
            }
        };
        t(`[RemoteSessionManager] Sending user dialog response: ${n.behavior}`);
        x("out", s);
        this.sendResponse(s, "dialog");
        g("remote_dialog_respond");
    }
    releaseForwardedHook(e) {
        this.pendingForwardedHooks.delete(e);
        if (this.settledForwardedHookIds.has(e)) {
            V(this.hookGiveUpsTold, e);
        }
    }
    respondToForwardedHook(e, n) {
        if (!this.pendingForwardedHooks.delete(e)) {
            t(`[RemoteSessionManager] Forwarded hook request ${Gw(e)} is no longer pending \u2014 answer not sent`);
            return false;
        }
        if (!this.client) {
            return false;
        }
        this.recordSeenControlResponseId(e);
        this.recordSettledForwardedHookId(e);
        this.reviveStreamForUserSend();
        let a = {
            type: "control_response",
            response: {
                subtype: "success",
                request_id: e,
                response: n
            }
        };
        x("out", a);
        this.sendResponse(a, "hook");
        return true;
    }
    respondToServedChannelRequest(e, n, s) {
        let a = this.pendingServedRequests.get(e);
        if (!a) {
            t(`[RemoteSessionManager] served request ${Gw(e)} is no longer pending \u2014 result not sent`);
            return false;
        }
        this.pendingServedRequests.delete(e);
        if (!this.client) {
            return false;
        }
        this.recordSeenControlResponseId(e);
        V(this.settledServedRequestIds, e);
        this.reviveStreamForUserSend();
        let S = {
            type: "control_response",
            response: {
                subtype: "success",
                request_id: e,
                response: vn(n)
            }
        };
        x("out", S);
        this.sendResponse(S, a.subtype === "remote_tools_probe" ? null : "tool", undefined, s);
        return true;
    }
    releaseServedChannelRequest(e) {
        this.pendingServedRequests.delete(e);
    }
    retireServedRequest(e, n) {
        let s = this.pendingServedRequests.get(e);
        if (!s) {
            return false;
        }
        this.pendingServedRequests.delete(e);
        t(`[RemoteSessionManager] served request ${Gw(e)} ${n === "worker" ? "cancelled by the worker" : "dropped with the stream"}`);
        s.abort.abort();
        this.callbacks.onServedChannelRequestCancelled?.(e, n);
        return true;
    }
    isConnected() {
        return this.client?.isConnected() ?? false;
    }
    noteWorkerLive() {
        if (this.workerSeenThisConnection) {
            return;
        }
        this.workerSeenThisConnection = true;
        this.callbacks.onWorkerLive?.();
    }
    markServing(e) {
        this.serving = e;
    }
    workerLive() {
        return this.isConnected() && this.workerSeenThisConnection;
    }
    sendsInFlight() {
        return this.client?.sendsInFlight() ?? {
            count: 0,
            settled: Promise.resolve()
        };
    }
    flushSends(e) {
        return this.client?.flushSends(e) ?? Promise.resolve();
    }
    cancelSession() {
        t("[RemoteSessionManager] Sending interrupt signal");
        this.firstSendReleased = true;
        this.reviveStreamForUserSend();
        let e = ()=>{
            x("out", {
                kind: "control_request",
                subtype: "interrupt"
            });
            this.client?.sendControlRequest({
                subtype: "interrupt"
            });
        };
        if (this.heldSends.size === 0) {
            e();
            return;
        }
        let n = ()=>{
            if (this.pendingInterrupt === n) {
                this.pendingInterrupt = null;
                e();
            }
        };
        this.pendingInterrupt = n;
        this.releaseHeldSends().then(n, n);
    }
    sendControlRequest(e, n) {
        return this.postControlRequest(e, n).response;
    }
    postControlRequest(e, n) {
        let { promise, resolve } = Promise.withResolvers();
        let r = async ()=>{
            let h = null;
            try {
                if (n?.signal?.aborted) {
                    throw new Ye;
                }
                if (!n?.background) {
                    this.reviveStreamForUserSend();
                }
                x("out", {
                    kind: "control_request",
                    ...e
                });
                h = this.client?.postControlRequest(e, this.onControlRequestPostFailed) ?? null;
                if (h === null) {
                    throw Error("[RemoteSessionManager] Cannot send: not connected");
                }
            } finally{
                if (h === null) {
                    resolve(Ze);
                }
            }
            h.posted.then(resolve, ()=>resolve(Ze));
            return this.awaitControlResponse(h.requestId, e, n);
        };
        let S = n?.answerExpected === false ? r() : Fts("remote_control_rpc", r);
        return {
            posted: promise,
            response: S
        };
    }
    awaitControlResponse(e, n, s) {
        if (n.subtype === "set_model") {
            this.pendingModelSwitchIds.add(e);
        }
        let timeoutMs_1 = xe(n.subtype, s?.timeoutMs);
        let awaitingWorker = this.workerStarting ? s?.awaitWorkerStart : undefined;
        let S = awaitingWorker ? Math.max(Nqn, timeoutMs_1) : timeoutMs_1;
        return new Promise((resolve, reject)=>{
            let y = setTimeout(this.onControlRequestTimeout, S, e, n.subtype, S);
            let R = s?.signal;
            let w = R ? ()=>this.cancelControlRequest(e) : undefined;
            if (R && w) {
                R.addEventListener("abort", w, {
                    once: true
                });
            }
            this.pendingControlRequests.set(e, {
                resolve: (k)=>resolve(k),
                reject,
                timer: y,
                timeoutMs: timeoutMs_1,
                subtype: n.subtype,
                onProgress: s?.onProgress,
                removeAbortListener: R && w ? ()=>R.removeEventListener("abort", w) : undefined,
                ...s?.background && {
                    background: true
                },
                ...s?.onEchoed && {
                    onEchoed: s.onEchoed
                },
                ...awaitingWorker && {
                    awaitingWorker
                }
            });
            if (awaitingWorker) {
                t(`[RemoteSessionManager] control_request ${e} (${n.subtype}) waits for the worker; its ${timeoutMs_1 / 1000}s limit starts when that wait ends`);
                this.tellAwaitingWorker(awaitingWorker, true);
            }
        });
    }
    beginWorkerStart() {
        this.workerStarting = true;
    }
    endWorkerStart() {
        if (!this.workerStarting) {
            return;
        }
        this.workerStarting = false;
        let e = [];
        for (let [n, s] of this.pendingControlRequests){
            if (s.awaitingWorker === undefined) {
                continue;
            }
            clearTimeout(s.timer);
            let a = setTimeout(this.onControlRequestTimeout, s.timeoutMs, n, s.subtype, s.timeoutMs);
            this.pendingControlRequests.set(n, {
                ...s,
                timer: a,
                awaitingWorker: undefined
            });
            e.push(s.awaitingWorker);
        }
        t(`[RemoteSessionManager] The wait for the worker ended; ${e.length} waiting control request(s) start their own limit`);
        for (let n of e){
            this.tellAwaitingWorker(n, false);
        }
    }
    tellAwaitingWorker(e, n) {
        try {
            e.onChange(n);
        } catch (err) {
            c(err);
        }
    }
    onControlRequestPostFailed = (e)=>{
        this.pendingModelSwitchIds.delete(e);
        let n = this.pendingControlRequests.get(e);
        if (!n) {
            return;
        }
        this.pendingControlRequests.delete(e);
        clearTimeout(n.timer);
        n.removeAbortListener?.();
        t(`[RemoteSessionManager] control_request ${e} (${n.subtype}) was not delivered \u2014 failing it`, {
            level: "warn"
        });
        n.reject(new rye(n.subtype));
    };
    onControlRequestTimeout = (e, n, s)=>{
        this.pendingModelSwitchIds.delete(e);
        let a = this.pendingControlRequests.get(e);
        if (!a) {
            return;
        }
        this.pendingControlRequests.delete(e);
        a.removeAbortListener?.();
        if (a.awaitingWorker !== undefined) {
            this.endWorkerStart();
        }
        a.reject(new _M(n, s));
    };
    cancelControlRequest(requestId) {
        let n = this.pendingControlRequests.get(requestId);
        if (!n) {
            return;
        }
        if (!n.background) {
            this.reviveStreamForUserSend();
        }
        this.pendingControlRequests.delete(requestId);
        this.pendingModelSwitchIds.delete(requestId);
        clearTimeout(n.timer);
        t(`[RemoteSessionManager] Cancelling control request ${requestId} (${n.subtype})`);
        x("out", {
            kind: "control_cancel_request",
            requestId
        });
        this.client?.sendControlCancelRequest(requestId);
        n.reject(new Ye);
    }
    getSessionId() {
        return this.config.sessionId;
    }
    disconnect() {
        t("[RemoteSessionManager] Disconnecting");
        let withheldInitialPrompt = this.config.withheldInitialPrompt;
        if (withheldInitialPrompt !== undefined && this.withheldPromptInFlight !== null && !this.firstSendReleased) {
            withheldInitialPrompt.sent = false;
        }
        this.lifetime.abort();
        this.pendingInterrupt?.();
        this.client?.close();
        this.client = null;
        for (let n of [
            ...this.undeliveredResponses.values()
        ]){
            this.clearResendTimer(n);
            if (n.giveUpOnSettle !== null) {
                n.inFlight = false;
                this.giveUp(n, n.giveUpOnSettle);
            }
        }
        this.undeliveredResponses.clear();
        this.undeliveredHookIds.clear();
        this.hookGiveUpsTold.clear();
        this.pendingPermissionRequests.clear();
        this.pendingDialogRequests.clear();
        for (let n of this.pendingForwardedHooks){
            this.callbacks.onForwardedHookCancelled?.(n, "disconnected");
        }
        this.pendingForwardedHooks.clear();
        for (let n of [
            ...this.pendingServedRequests.keys()
        ]){
            this.retireServedRequest(n, "disconnected");
        }
        this.workerSeenThisConnection = false;
        this.workerStarting = false;
        for (let n of this.pendingControlRequests.values()){
            clearTimeout(n.timer);
            n.removeAbortListener?.();
            n.reject(Error("[RemoteSessionManager] Disconnected"));
        }
        this.pendingControlRequests.clear();
        this.pendingModelSwitchIds.clear();
    }
    reconnect() {
        t("[RemoteSessionManager] Reconnecting SSE stream");
        this.client?.reconnect();
    }
    reconnectAfterSuspend() {
        this.client?.reconnectAfterSuspend();
    }
}
function _n(request) {
    return typeof request.callback_id === "string" && (typeof request.issued_at === "number" || typeof request.deadline_ms === "number" || yfe(request.callback_id) !== null);
}
function Sn(request) {
    return Pge.includes(request.subtype);
}
function tt(kind) {
    if (kind === "tool") {
        return {
            timeoutMs
        };
    }
    return {};
}
function vn(e) {
    let n = Buffer.byteLength(_(e), "utf8");
    let s = rgt();
    if (n <= s) {
        return e;
    }
    return {
        result: {
            content: [
                {
                    type: "text",
                    text: `(the result was too large to return: ${n} bytes, over the ${s}-byte limit)`
                }
            ],
            isError: true
        }
    };
}
function yn(gate, n) {
    let s = (a)=>{
        t(`[RemoteSessionManager] send gate failed, message goes anyway: ${l(a)}`, {
            level: "warn"
        });
    };
    try {
        return gate(n).then((a)=>{
            if (Rn(a)) {
                return a;
            }
        }, s);
    } catch (err) {
        return Promise.resolve(s(err));
    }
}
function Rn(e) {
    return typeof e === "object" && e !== null && e.go === false && typeof e.reason === "string";
}
function Se(e) {
    return e.find((n)=>n !== undefined);
}
function nt(e) {
    return {
        ok: false,
        reason: e.reason,
        withheld: true
    };
}
function wn(e) {
    if (e.ok) {
        return {
            kind: "sent"
        };
    }
    switch(ce(e)){
        case "withheld":
            if (e.reason === m1e || e.reason === ELt) {
                return {
                    kind: "unsent"
                };
            }
            return {
                kind: "refused",
                reason: e.reason
            };
        case "http_4xx":
        case "http_429":
        case "not_first_party":
            return {
                kind: "refused",
                reason: e.reason
            };
        case "server":
        case "timeout":
        case "network":
        case "unknown":
            return {
                kind: "unconfirmed"
            };
    }
}
function st(e) {
    if (e) {
        return {
            go: false,
            reason: ELt
        };
    }
}
function rt(e, n) {
    if ([
        ...e
    ].some(({ onRelease, onExit })=>onRelease === "withhold" && !(n && onExit === "await"))) {
        return {
            go: false,
            reason: m1e
        };
    }
}
const kLt = 100;
const WHo = 500;
function Uqn(e) {
    let n = e?.sequence_num === undefined ? undefined : parseInt(String(e.sequence_num), 10);
    if (n !== undefined && !isNaN(n)) {
        return n;
    }
}
class iln extends Error {
}
const ct = "X-Trusted-Device-Token";
async function sie(e, n, { recoverDeviceProof = false } = {}) {
    let { accessToken } = await UT(n);
    let r = {
        sessionUrl: `${dn().BASE_API_URL}/v1/code/sessions/${e}`,
        headers: await tct(accessToken)
    };
    if (!recoverDeviceProof) {
        return r;
    }
    return {
        ...r,
        headersForRenewedDeviceToken: async (S)=>({
                ...uP((await UT(n)).accessToken),
                [ct]: S
            })
    };
}
function ut(sessionUrl, headers, params, a) {
    return At.get(`${sessionUrl}/events`, {
        headers,
        params,
        timeout: 15000,
        validateStatus: ()=>true,
        maxContentLength: a ?? -1
    }).catch(()=>null);
}
async function pt(e, n, s, a) {
    let r = await ut(e.sessionUrl, e.headers, n, a);
    let e_headersForRenewedDeviceToken = e.headersForRenewedDeviceToken;
    if (r?.status === 403 && e_headersForRenewedDeviceToken !== undefined) {
        let R = false;
        let w = await l1n(r, e.headers[ct], async (k)=>{
            let b = await e_headersForRenewedDeviceToken(k).then((O)=>ut(e.sessionUrl, O, n, a), ()=>null);
            if (b === null) {
                R = true;
                throw Error("no answer");
            }
            return b;
        }, "cloud_session");
        if (R) {
            t(`[${s}] no answer after renewing the device token`);
            return null;
        }
        if (w.status === 403 && J5() && soe(w.data) === "untrusted_device") {
            t(`[${s}] HTTP 403 untrusted_device`);
            throw new iln("the service does not accept a trusted-device token from this computer");
        }
        r = w;
    }
    if (!r || r.status !== 200) {
        t(`[${s}] HTTP ${r?.status ?? "error"}`);
        return null;
    }
    if (r.data === null || typeof r.data !== "object") {
        t(`[${s}] non-object 200 body`);
        return null;
    }
    let h = Array.isArray(r.data.data) ? r.data.data : [];
    let events = [];
    for(let R = h.length - 1; R >= 0; R--){
        let w = h[R];
        if (w?.payload) {
            events.push({
                payload: w.payload,
                createdAt: w.created_at,
                source: w.source,
                sequenceNum: Uqn(w)
            });
        }
    }
    let firstId = r.data.next_cursor ?? null;
    return {
        events,
        firstId,
        hasMore: firstId !== null,
        droppedRows: h.length - events.length,
        newestSequenceNum: Uqn(h[0])
    };
}
async function h1e(e, n = kLt, s) {
    let a = await pt(e, {
        limit: n,
        sort_order: "desc"
    }, "fetchLatestEvents");
    if (s?.reportFeatureHealth !== false) {
        if (a === null) {
            m("assistant_history_load", "http_error");
        } else {
            g("assistant_history_load");
        }
    }
    return a;
}
async function x9e(e, cursor, s = kLt, a) {
    return pt(e, {
        limit: s,
        sort_order: "desc",
        cursor
    }, "fetchOlderEvents", a);
}
export { JPe, ufe, FHo, oln, UHo, Nqn, $qn, f1e, Eft, KOr, YOr, Fqn, XOr, JOr, BHo, Gw, jHo, m1e, ELt, sln, g1e, kLt, WHo, Uqn, iln, sie, h1e, x9e };
