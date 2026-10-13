import { ute } from "/$bunfs/root/chunk-f57bzzed.js";
import { N7e, q_t, wA, Dze, MX, zbn } from "/$bunfs/root/chunk-g8ddscbr.js";
import { K } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ye } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { tb, Q, Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { X } from "/$bunfs/root/chunk-bd805sh6.js";
import { Qe } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { It } from "/$bunfs/root/chunk-4r6b8efh.js";
import { xv } from "/$bunfs/root/chunk-0ycjphb5.js";
import { si, ci } from "/$bunfs/root/chunk-6dwnw6av.js";
import { qk, lq } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { iS } from "/$bunfs/root/chunk-6fb685xp.js";
import { tl, OD, F2 as toolName } from "/$bunfs/root/chunk-fv3gxsmx.js";
import { XZe, Tc, fJ, hTn, SD } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Ej, kQe, A9n, ryt, oyt, jgn, Lzo } from "/$bunfs/root/chunk-w5jk71fx.js";
import { ozo } from "/$bunfs/root/chunk-wnxm30t0.js";
import { $Bt } from "/$bunfs/root/chunk-9a3dzzcs.js";
import { r1r, WBt } from "/$bunfs/root/chunk-z3zxvqgs.js";
import { zgn } from "/$bunfs/root/chunk-amg6bs98.js";
import { YN } from "/$bunfs/root/chunk-4mfq2fqt.js";
import { ka } from "/$bunfs/root/chunk-5mfg4ngf.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
function O(e) {
    let o;
    try {
        o = new URL(e);
    } catch  {
        return;
    }
    if (o.host === "") {
        return;
    }
    return `${o.protocol}//${Ej(o.host)}`;
}
function J(from, o) {
    let t = O(from);
    let s = O(o);
    return t === undefined || s === undefined || t !== s;
}
function x(e, to) {
    let from = tl().lastExecutedTabUrlByScope.get(e);
    if (from === undefined) {
        return;
    }
    if (J(from, to)) {
        return {
            from,
            to
        };
    }
}
function F(e, o) {
    tl().lastExecutedTabUrlByScope.set(e, o);
}
const q = 200;
function B(e, o) {
    let resolvedHostByToolUseId = tl().resolvedHostByToolUseId;
    if (resolvedHostByToolUseId.size >= q) {
        resolvedHostByToolUseId.clear();
    }
    resolvedHostByToolUseId.set(e, o);
}
function Z(e, o) {
    let resolvedUrlByToolUseId = tl().resolvedUrlByToolUseId;
    if (resolvedUrlByToolUseId.size >= q) {
        resolvedUrlByToolUseId.clear();
    }
    resolvedUrlByToolUseId.set(e, o);
}
function V() {
    let { key, fromHost } = r1r();
    if (fromHost) {
        return {
            sessionId: key
        };
    }
    let sessionId = K();
    return {
        sessionId
    };
}
function R1s(context, socketClient) {
    tl().bridgeBinding = {
        context,
        socketClient
    };
}
function ee(e, o) {
    let t = OD.slice(0, -2);
    let s = `${OD}*`;
    for (let r of Object.values(e.alwaysAllowRules)){
        for (let n of r ?? []){
            let l = n.replace(/\(\*?\)$/, "");
            if (l === o || l === t || l === s) {
                return true;
            }
        }
    }
    return false;
}
const oe = new Set([
    "tabs_context_mcp",
    "tabs_create_mcp",
    "tabs_close_mcp",
    "resize_window",
    "shortcuts_list",
    "list_connected_browsers"
]);
const te = new Set([
    "switch_browser",
    "select_browser"
]);
const re = {
    tab_missing: "Couldn't determine which page this action targets. Pass the tabId from tabs_context_mcp and try again.",
    batch_multiple_tabs: "Claude in Chrome: a browser_batch must act on one tab. Pass the same tabId on every action.",
    batch_after_navigate: "Claude in Chrome: a browser_batch cannot act on a page after navigating to it. Issue the navigate on its own, then batch the actions on the loaded page.",
    batch_browser_switch: "Claude in Chrome: switch browsers in its own call, not inside a browser_batch.",
    batch_malformed_item: "Claude in Chrome: a browser_batch action must be {name, input} and cannot nest another browser_batch."
};
function ne(toolName, input) {
    let t = [];
    if (toolName === "browser_batch") {
        if (!Array.isArray(input.actions)) {
            return {
                kind: "deny",
                code: "batch_malformed_item"
            };
        }
        for (let n of input.actions){
            if (!L(n) || typeof n.name !== "string" || n.name === "browser_batch") {
                return {
                    kind: "deny",
                    code: "batch_malformed_item"
                };
            }
            t.push({
                name: n.name,
                input: L(n.input) ? n.input : {}
            });
        }
    } else {
        t.push({
            name: toolName,
            input
        });
    }
    let s = new Set;
    let r = false;
    for (let n of t){
        if (n.name === "navigate") {
            r = true;
            continue;
        }
        if (te.has(n.name)) {
            if (t.length > 1) {
                return {
                    kind: "deny",
                    code: "batch_browser_switch"
                };
            }
            continue;
        }
        if (oe.has(n.name)) {
            continue;
        }
        if (r) {
            return {
                kind: "deny",
                code: "batch_after_navigate"
            };
        }
        if (typeof n.input.tabId !== "number") {
            return {
                kind: "deny",
                code: "tab_missing"
            };
        }
        s.add(n.input.tabId);
    }
    if (s.size === 0) {
        return {
            kind: "none"
        };
    }
    if (s.size > 1) {
        return {
            kind: "deny",
            code: "batch_multiple_tabs"
        };
    }
    return {
        kind: "tab",
        tabId: [
            ...s
        ][0]
    };
}
const Y = 5000;
const se = 2500;
const ie = new Set([
    "connect_timeout",
    "no_browser_selected_timeout",
    "browser_selected_late_timeout",
    "answer_timeout"
]);
async function N(tabId) {
    let o = tb.monotonicNow();
    let t = Promise.withResolvers();
    let s = new AbortController;
    let r = U({
        onSentToSelectedBrowser: t.resolve
    }).then((a)=>{
        s.abort();
        return D(a, tabId);
    });
    let n = {
        sent: false
    };
    let l = t.promise.then(async ()=>{
        await Q(se, s.signal);
        let capMs = Y - (tb.monotonicNow() - o);
        let u = tl().bridgeBinding?.socketClient;
        if (s.signal.aborted || capMs <= 0 || u?.isConnected() !== true || u.hasActiveSelection?.() !== true) {
            return;
        }
        n.sent = true;
        let i = D(await U({
            capMs
        }), tabId);
        if (P(i)) {
            return i;
        }
        if (i.ok || !ie.has(i.failure)) {
            n.callMs = i.callMs;
        }
    }).catch((a)=>{
        c(a);
    });
    let _ = await Promise.race([
        r.then(()=>{}),
        l
    ]);
    if (_ === undefined) {
        let a = await r;
        if (n.sent && !a.ok && a.failure === "answer_timeout") {
            return {
                ...a,
                failure: "answer_timeout_after_retry",
                retryCallMs: n.callMs
            };
        }
        return a;
    }
    r.then((a)=>{
        let u = {
            connect_ms: a.connectMs,
            call_ms: a.callMs,
            retry_call_ms: _.callMs
        };
        let i = P(a);
        if (i) {
            if (Ej(i.host) !== Ej(P(_)?.host ?? "")) {
                f("chrome_permission_prompt", "tab_lookup_hosts_differed", u);
            }
            return;
        }
        let p = a.ok ? "non_web_tab_url" : a.failure;
        if (p === "answer_timeout") {
            f("chrome_permission_prompt", "tab_lookup_rescued_after_answer_timeout", u);
            return;
        }
        f("chrome_permission_prompt", "tab_lookup_rescued_after_failure", {
            ...u,
            first_lookup_failure: d(p)
        });
    }).catch(c);
    return _;
}
function H(e) {
    return {
        connect_ms: e.connectMs,
        call_ms: e.callMs,
        ...!e.ok && e.retryCallMs !== undefined && {
            retry_call_ms: e.retryCallMs
        }
    };
}
function P(e) {
    if (e.ok) {
        return oyt(e.url);
    }
}
function D(e, tabId) {
    if (!e.ok) {
        return e;
    }
    let { tabs, connectMs, callMs } = e;
    let n = tabs.findIndex((_)=>_ == null || _.tabId === tabId);
    let l = tabs[n];
    if (n === -1) {
        return {
            ok: false,
            failure: tabs.length === 0 ? "empty_tab_list" : "tab_not_listed",
            connectMs,
            callMs
        };
    }
    if (l == null || typeof l.url !== "string") {
        return {
            ok: false,
            failure: "malformed_tab_list",
            connectMs,
            callMs
        };
    }
    if (l.url === "") {
        return {
            ok: false,
            failure: "tab_url_empty",
            connectMs,
            callMs
        };
    }
    return {
        ok: true,
        url: l.url,
        connectMs,
        callMs
    };
}
async function U(e) {
    let o = tb.monotonicNow();
    let t = {};
    let s;
    try {
        let _ = tl().bridgeBinding;
        if (!_) {
            return {
                ok: false,
                failure: "binding_missing",
                connectMs: 0,
                callMs: 0
            };
        }
        let { socketClient } = _;
        s = await Ut((async ()=>{
            if (!await socketClient.ensureConnected()) {
                return "not_connected";
            }
            t.browserSelected = socketClient.hasActiveSelection?.();
            t.startedAt = tb.monotonicNow();
            if (t.browserSelected === true) {
                e?.onSentToSelectedBrowser?.();
            }
            let u = await socketClient.callTool("tabs_context_mcp", {
                createIfEmpty: false,
                includePermissionState: false
            }, {
                permissionMode: "ask",
                sessionScope: V()
            });
            if (!u) {
                return "empty_result";
            }
            if (u.error) {
                return `tool_error_${N7e("tabs_context_mcp", q_t(u.error))}`;
            }
            let i = u.result?.content;
            let p = Array.isArray(i) && i[0] && typeof i[0] === "object" && "text" in i[0] && typeof i[0].text === "string" ? i[0].text : undefined;
            if (!p) {
                return "no_text";
            }
            let h;
            try {
                h = X(p);
            } catch  {
                if (p.includes("createIfEmpty")) {
                    return "no_tab_group";
                }
                return "not_json";
            }
            let y = h?.availableTabs;
            if (Array.isArray(y)) {
                return y;
            }
            return "no_tab_list";
        })().catch((u)=>{
            if (t.startedAt === undefined) {
                return "connect_threw";
            }
            if (u instanceof wA) {
                return "connection_lost";
            }
            if (u instanceof Dze) {
                return "no_extension";
            }
            if (u instanceof MX) {
                return "extension_disconnected";
            }
            return "call_threw";
        }), e?.capMs ?? Y, "queryTabUrl bridge call").catch(()=>{
            if (t.startedAt === undefined) {
                return "connect_timeout";
            }
            if (socketClient.hasActiveSelection?.() === false) {
                return "no_browser_selected_timeout";
            }
            if (t.browserSelected === false) {
                return "browser_selected_late_timeout";
            }
            return "answer_timeout";
        });
    } catch  {
        s = "other_threw";
    }
    let r = tb.monotonicNow();
    let connectMs = Math.round((t.startedAt ?? r) - o);
    let callMs = t.startedAt === undefined ? 0 : Math.round(r - t.startedAt);
    if (typeof s === "string") {
        return {
            ok: false,
            failure: s,
            connectMs,
            callMs
        };
    }
    return {
        ok: true,
        tabs: s,
        connectMs,
        callMs
    };
}
ozo(async ()=>{
    let e = await U();
    if (e.ok) {
        return e.tabs;
    }
});
const ae = new Set([
    "image/png",
    "image/jpeg",
    "image/gif",
    "image/webp"
]);
function G(e) {
    return {
        type: "text",
        text: `[Image from Claude in Chrome \u2014 ${e}; not inlined]`
    };
}
function le(mimeType) {
    if (!mimeType) {
        return false;
    }
    let o = Qe(mimeType, ";").trim().toLowerCase();
    return ae.has(o === "image/jpg" ? "image/jpeg" : o);
}
async function ce(e, mainLoopModel) {
    let limits = Tc(mainLoopModel);
    let s = [];
    for (let r of e.content ?? []){
        if (r.type === "text") {
            s.push({
                type: "text",
                text: r.text
            });
        } else if (r.type === "image") {
            if (le(r.mimeType)) {
                try {
                    let { block } = await iS({
                        data: String(r.data),
                        mediaType: r.mimeType,
                        limits
                    });
                    s.push(block);
                } catch  {
                    s.push(G("could not be decoded"));
                }
            } else {
                s.push(G(`unsupported type ${r.mimeType ?? "unknown"}`));
            }
        }
    }
    return s;
}
function ue(e) {
    if (!Array.isArray(e.actions)) {
        return false;
    }
    return e.actions.some((o)=>{
        if (!L(o) || typeof o.name !== "string") {
            return true;
        }
        return o.name === "browser_batch" || ute.has(o.name) && !fJ(o.name, L(o.input) ? o.input : {});
    });
}
function W(e) {
    if (!Array.isArray(e.actions)) {
        return [];
    }
    let o = [];
    for (let t of e.actions){
        if (!L(t)) {
            continue;
        }
        let s = L(t.input) ? t.input : {};
        if (t.name === "browser_batch") {
            let l = W(s);
            if (l === "unvettable") {
                return l;
            }
            o.push(...l);
            continue;
        }
        if (t.name !== "navigate" || typeof s.url !== "string") {
            continue;
        }
        let r = s.url.trim().toLowerCase();
        if (r === "back" || r === "forward") {
            continue;
        }
        let n = oyt(s.url);
        if (!n) {
            return "unvettable";
        }
        o.push(n.host, jgn(n));
    }
    return o;
}
function j(ruleContent, source) {
    return {
        source,
        ruleBehavior: "allow",
        ruleValue: {
            toolName,
            ruleContent
        }
    };
}
function z(toolName, o, t) {
    let s = $Bt(toolName, o);
    if (t) {
        return `Allow Claude in Chrome to ${s} on ${t}?`;
    }
    return `Allow Claude in Chrome to ${s}?`;
}
function me(e, denied) {
    return async (t)=>{
        let s;
        try {
            s = new URL(t.url);
        } catch  {}
        let r = !!s?.host && e.has(Ej(s.host)) && !A9n(denied, Ej(jgn({
            url: s.href
        })));
        if (!r) {
            m("chrome_permission_prompt", "stale_host_mismatch");
        }
        return r;
    };
}
async function fe(toolName, o, signal, mainLoopModel, r) {
    let bridgeBinding = tl().bridgeBinding;
    if (!bridgeBinding) {
        m("chrome_permission_prompt", "binding_missing");
        throw Error("Claude in Chrome bridge is not initialized in this session.");
    }
    if (signal.aborted) {
        throw new Ye("Claude in Chrome tool call aborted");
    }
    let l;
    let _ = new Promise((resolve, reject)=>{
        l = ()=>reject(new Ye("Claude in Chrome tool call aborted"));
        signal.addEventListener("abort", l, {
            once: true
        });
    });
    let a;
    try {
        a = await Promise.race([
            zbn(bridgeBinding.context, bridgeBinding.socketClient, toolName, hTn(o ?? {}), r),
            _
        ]);
    } finally{
        if (l) {
            signal.removeEventListener("abort", l);
        }
    }
    if (a.isError) {
        let p = (a.content ?? []).flatMap((C)=>{
            if (C.type === "text") {
                return [
                    C.text
                ];
            }
            return [];
        }).join(`
`) || `${toolName} failed`;
        let h = a._meta;
        let y = h?.isBridgeTimeout === true ? "bridge_timeout" : h?.isFrontLoadBoundExceeded === true ? "front_load_bound_exceeded" : undefined;
        let v = L(h) ? YN(h) : undefined;
        throw Object.assign(new xv(p, "Claude in Chrome tool returned error", v ? {
            _meta: v
        } : undefined, `chrome_${y ?? N7e(toolName, p)}`), {
            mcpErrorSource: "other"
        });
    }
    let data = await ce(a, mainLoopModel);
    let i = YN(a._meta);
    return {
        data,
        ...i && {
            mcpMeta: {
                _meta: i
            }
        }
    };
}
function YBr(toolName_1) {
    let o = `${OD}${toolName_1}`;
    return {
        checkPermissions: async (r, n)=>{
            zgn(n.options?.messageClientPlatform);
            let n_toolUseId = n.toolUseId;
            let _ = ute.has(toolName_1);
            if (_ && fJ(toolName_1, r)) {
                let b = de(n);
                if (b?.chromeHostToolAsksEnabled !== false && b?.mcpAskForTools?.[ka]?.includes(toolName_1) === true && b.shouldAvoidPermissionPrompts !== true && b.mode !== "dontAsk") {
                    return {
                        behavior: "ask",
                        message: "Claude in Chrome requires permission.",
                        suppressAlwaysAllowRule: true,
                        decisionReason: {
                            type: "other",
                            reason: "Claude in Chrome action"
                        },
                        metadata: {
                            command: {
                                name: o,
                                description: z(toolName_1, r, undefined)
                            }
                        }
                    };
                }
                return {
                    behavior: "allow",
                    updatedInput: r
                };
            }
            let a = _ && !fJ(toolName_1, r) || toolName_1 === "browser_batch" && ue(r);
            if (toolName_1 === "navigate" && typeof r.url === "string" && (r.url.trim().toLowerCase() === "back" || r.url.trim().toLowerCase() === "forward")) {
                return {
                    behavior: "allow",
                    updatedInput: r
                };
            }
            let u = toolName_1 === "browser_batch" ? Lzo(r) : {
                input: r,
                toolName: toolName_1
            };
            let i;
            if (u && u.toolName === "navigate" && typeof u.input.url === "string") {
                i = oyt(u.input.url);
                if (!i) {
                    m("chrome_permission_prompt", "non_web_url");
                    return {
                        behavior: "deny",
                        message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
                        decisionReason: {
                            type: "safetyCheck",
                            reason: "Claude in Chrome: non-web or unparseable URL",
                            classifierApprovable: false
                        }
                    };
                }
            } else if (u && typeof u.input.tabId === "number") {
                let b = await N(u.input.tabId);
                if (!b.ok) {
                    m("chrome_permission_prompt", `tab_url_unresolved_${b.failure}`, H(b));
                    return {
                        behavior: "deny",
                        message: "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.",
                        decisionReason: {
                            type: "safetyCheck",
                            reason: "Claude in Chrome: tab URL unresolved",
                            classifierApprovable: false
                        }
                    };
                }
                i = oyt(b.url);
                if (!i) {
                    m("chrome_permission_prompt", "non_web_tab_url");
                    return {
                        behavior: "deny",
                        message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
                        decisionReason: {
                            type: "safetyCheck",
                            reason: "Claude in Chrome: non-web or unparseable tab URL",
                            classifierApprovable: false
                        }
                    };
                }
            }
            let p = de(n);
            let h = qk(n.options?.tools?.find((b)=>It(b, o)), p);
            let y = h === "bypassPermissions" || lq(h, p.isBypassPermissionsModeAvailable);
            let v = p.chromeNavigationClassifierEnabled === true && !y && (p.chromeClassifierFloorEnabled === true || si(h));
            let navigation;
            let S;
            let w = ()=>{
                if (!n_toolUseId) {
                    return;
                }
                if (S === undefined) {
                    tl().resolvedUrlByToolUseId.delete(n_toolUseId);
                } else {
                    Z(n_toolUseId, S);
                }
                if (navigation === undefined) {
                    XZe(n_toolUseId);
                }
            };
            if (v) {
                let b = ne(toolName_1, r);
                if (b.kind === "deny") {
                    m("chrome_permission_prompt", b.code);
                    w();
                    return {
                        behavior: "deny",
                        message: re[b.code],
                        decisionReason: {
                            type: "safetyCheck",
                            reason: `Claude in Chrome: ${b.code}`,
                            classifierApprovable: false
                        }
                    };
                }
                if (b.kind === "tab") {
                    let T = i && u?.toolName !== "navigate" && u?.input.tabId === b.tabId ? {
                        ok: true,
                        url: i.url,
                        connectMs: 0,
                        callMs: 0
                    } : await N(b.tabId);
                    let I = T.ok ? oyt(T.url) : undefined;
                    if (I === undefined) {
                        m("chrome_permission_prompt", `tab_url_unresolved_${T.ok ? "non_web_tab_url" : T.failure}`, H(T));
                        w();
                        return {
                            behavior: "deny",
                            message: "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.",
                            decisionReason: {
                                type: "safetyCheck",
                                reason: "Claude in Chrome: tab URL unresolved",
                                classifierApprovable: false
                            }
                        };
                    }
                    navigation = x(WBt(), I.url);
                    if (!(a && p.mode === "plan")) {
                        S = I.url;
                    }
                }
            }
            w();
            let A = toolName_1 === "browser_batch" ? W(r) : [];
            if (A === "unvettable") {
                m("chrome_permission_prompt", "non_web_url");
                return {
                    behavior: "deny",
                    message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
                    decisionReason: {
                        type: "safetyCheck",
                        reason: "Claude in Chrome: non-web or unparseable URL",
                        classifierApprovable: false
                    }
                };
            }
            let R = kQe(p);
            let M = [
                ...i ? [
                    i.host,
                    jgn(i)
                ] : [],
                ...A
            ].map((b)=>ryt(R, b)).find((b)=>b !== undefined);
            if (M) {
                f("chrome_permission_prompt", "domain_rule_denied");
                return M;
            }
            let domainAllowed = false;
            let grantRule;
            if (i) {
                let b = Ej(i.host);
                let T = R.sourceOf.get(b) ?? "session";
                domainAllowed = R.allowed.has(b);
                grantRule = domainAllowed ? j(i.host, T) : undefined;
                if (domainAllowed && navigation === undefined && p.chromeClassifierFloorEnabled !== true && !a) {
                    if (n_toolUseId) {
                        B(n_toolUseId, i);
                    }
                    return {
                        behavior: "allow",
                        updatedInput: r,
                        decisionReason: {
                            type: "rule",
                            rule: j(i.host, T)
                        }
                    };
                }
                if (n_toolUseId && (domainAllowed || p.chromeClassifierFloorEnabled === true || !ee(p, o))) {
                    B(n_toolUseId, i);
                }
            }
            if (a && p.mode === "plan") {
                return {
                    behavior: "passthrough",
                    message: "Claude in Chrome requires permission.",
                    suggestions: [
                        {
                            type: "addRules",
                            rules: [
                                {
                                    toolName: o,
                                    ruleContent: undefined
                                }
                            ],
                            behavior: "allow",
                            destination: "session"
                        }
                    ]
                };
            }
            return {
                behavior: "ask",
                message: "Claude in Chrome requires permission.",
                suggestions: i ? domainAllowed ? undefined : [
                    {
                        type: "addRules",
                        rules: [
                            {
                                toolName,
                                ruleContent: i.host
                            }
                        ],
                        behavior: "allow",
                        destination: "session"
                    }
                ] : [
                    {
                        type: "addRules",
                        rules: [
                            {
                                toolName: o,
                                ruleContent: undefined
                            }
                        ],
                        behavior: "allow",
                        destination: "session"
                    }
                ],
                decisionReason: navigation ? {
                    type: "safetyCheck",
                    reason: "Claude in Chrome: cross-site navigation pending",
                    classifierApprovable: true
                } : {
                    type: "other",
                    reason: i ? `Claude in Chrome action on ${i.host}` : "Claude in Chrome action"
                },
                metadata: {
                    command: {
                        name: o,
                        description: z(toolName_1, r, i?.host),
                        chrome: i ? {
                            ...i,
                            domainAllowed,
                            navigation,
                            ...grantRule && {
                                grantRule,
                                classifierUnavailable: p.chromeClassifierFloorEnabled === true && p.canAutoClassifierRun === false
                            }
                        } : undefined
                    }
                }
            };
        },
        call: async (r, n)=>{
            let n_toolUseId = n.toolUseId;
            let _ = n_toolUseId ? tl().resolvedHostByToolUseId.get(n_toolUseId) : undefined;
            let a = _?.host;
            let u = n_toolUseId ? tl().resolvedUrlByToolUseId.get(n_toolUseId) : undefined;
            if (n_toolUseId) {
                tl().resolvedHostByToolUseId.delete(n_toolUseId);
                tl().resolvedUrlByToolUseId.delete(n_toolUseId);
            }
            let i = de(n);
            let p = kQe(i);
            let p_allowed = p.allowed;
            let allowedDomains = [
                ...p.allowedRaw
            ];
            if (a && !p_allowed.has(Ej(a))) {
                p_allowed.add(Ej(a));
                allowedDomains.push(a);
            }
            let v = n.options?.tools?.find((M)=>It(M, o));
            let C = qk(v, i);
            let S = C === "bypassPermissions" || C === "auto" && n.autoModeClassified === true && a !== undefined && p.denied.size === 0 && _?.keepHostPin !== true;
            let sessionScope = V();
            let A = S ? {
                permissionMode: "skip_all_permission_checks",
                sessionScope
            } : a ? {
                permissionMode: "follow_a_plan",
                allowedDomains,
                onPermissionRequest: me(p_allowed, p.denied),
                sessionScope
            } : allowedDomains.length > 0 ? {
                permissionMode: "follow_a_plan",
                allowedDomains,
                sessionScope
            } : {
                permissionMode: "ask",
                sessionScope
            };
            let R = await fe(toolName_1, r, n.abortController.signal, n.options.mainLoopModel, A);
            if (u !== undefined) {
                F(WBt(), u);
            }
            if (a) {
                g("chrome_permission_prompt");
            }
            return R;
        },
        ignoresWholeToolAllowRule: (r)=>ute.has(toolName_1) && fJ(toolName_1, r)
    };
}
export { R1s, YBr };
