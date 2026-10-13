import { Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { x, W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { ua } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { MR } from "/$bunfs/root/chunk-2d9a83dh.js";
import { jo, rn } from "/$bunfs/root/chunk-223dyewd.js";
import { Uw, jv } from "/$bunfs/root/chunk-55x53sfe.js";
import { zzn } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { uH, zT } from "/$bunfs/root/chunk-k3tkc302.js";
import { nf } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { xl, Kt } from "/$bunfs/root/chunk-4r6b8efh.js";
import { bM, RI } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { a$, zge, zSt, Nae, GSt, VSt, qSt, Xge, NJo, $rr, Frr, Ty, nle, u2, Svt, $De } from "/$bunfs/root/chunk-kasbfbhj.js";
import { bio } from "/$bunfs/root/chunk-46dhek9m.js";
import { kM } from "/$bunfs/root/chunk-1k3a7x55.js";
import { C_n, jG, eKo, tQn, x_ } from "/$bunfs/root/chunk-8qgm3a5n.js";
import { iVo, Qjt } from "/$bunfs/root/chunk-ppjxdh84.js";
import { kX } from "/$bunfs/root/chunk-5h13e42b.js";
import { hE, t_ } from "/$bunfs/root/chunk-59xjawk6.js";
import { TAt, v5t, gKe, rre, Ucs, dfr, joo, A4, Woo, zoo } from "/$bunfs/root/chunk-z8b8q76g.js";
import { Pl } from "/$bunfs/root/chunk-9t51q67t.js";
import { o, E, M, T, u, De } from "/$bunfs/root/chunk-smx21d0k.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { isIP } from "net";
import { lookup } from "dns/promises";
import K from "ws";
class o7e extends Error {
    constructor(e){
        super(e);
        this.name = "MonitorWsPreconditionError";
    }
}
function yJn(e) {
    switch(e.protocol){
        case "wss:":
        case "https:":
            e.protocol = "wss:";
            break;
        case "ws:":
        case "http:":
            e.protocol = "ws:";
            break;
        default:
            throw new o7e(`unsupported socket base scheme ${e.protocol}`);
    }
    return e.toString();
}
function H(hostname) {
    return hostname.replace(/^\[|\]$/g, "");
}
async function ue(url, n) {
    let s = new URL(url);
    let r = H(s.hostname);
    if (isIP(r)) {
        if (Svt(r)) {
            throw new o7e(`${r} is in a private, link-local, or cloud-metadata range`);
        }
        return {
            url,
            tls: n.tls
        };
    }
    let d;
    try {
        d = await lookup(r, {
            all: true
        });
    } catch (error) {
        throw new o7e(`could not resolve ${r}: ${W(error).message}`);
    }
    if (d.length === 0) {
        throw new o7e(`could not resolve ${r}`);
    }
    for (let { address } of d){
        if (Svt(address)) {
            throw new o7e(`${r} resolves to ${address}, which is in a private, link-local, or cloud-metadata range`);
        }
    }
    if (n.proxy) {
        return {
            url,
            tls: n.tls
        };
    }
    if (s.protocol === "wss:") {
        return {
            url,
            tls: n.tls
        };
    }
    let f = d.find((C)=>C.family === 4) ?? d[0];
    let s_host = s.host;
    s.hostname = f.family === 6 ? `[${f.address}]` : f.address;
    return {
        url: s.toString(),
        headers: {
            Host: s_host
        },
        tls: n.tls
    };
}
const me = 30000;
const Dyn = "handshake_timeout";
function de(e, n) {
    let s = Number.isInteger(e) && e >= 100 && e <= 599 ? e : 0;
    return `${n ? "cf_mitigated" : "upgrade_rejected"}_${s}`;
}
function hEe(e) {
    let n = /^(cf_mitigated|upgrade_rejected)_(\d{1,3})$/.exec(e ?? "");
    if (n === null) {
        return null;
    }
    return {
        status: Number(n[2]),
        cfMitigated: n[1] === "cf_mitigated"
    };
}
const maxPayload = 1048576;
function pe(e) {
    if (Array.isArray(e)) {
        return e.reduce((acc, item)=>acc + item.length, 0);
    }
    if (e instanceof ArrayBuffer) {
        return e.byteLength;
    }
    return e.length;
}
function Gyt(e) {
    return {
        taskRegistry: e.taskRegistry,
        toolUseId: e.toolUseId,
        agentId: e.agentId,
        storageV5: e.storageV5,
        credentials: e.credentials
    };
}
function fe(e) {
    return (n)=>{
        if (e.readyState === K.OPEN) {
            try {
                e.send(n);
            } catch  {}
        }
    };
}
async function Xjt(e, n) {
    let s = Gyt(n);
    let { description, timeout_ms, persistent } = e;
    let { url, protocols } = e.ws;
    zzn(url);
    let { toolUseId, taskRegistry } = s;
    let k = kX(s);
    let i = e.reuseTaskId ?? hE("monitor_ws");
    let D = C_n({
        description,
        agentId: k,
        taskRef: {
            id: i
        },
        arm: e.quietLifecycle ? undefined : "ws",
        killTask: ()=>{
            if (!tQn(i, l)) {
                return false;
            }
            x_(i, taskRegistry, {
                quiet: true
            });
            return true;
        }
    });
    let proxy = jv(url);
    let _ = await ue(url, {
        proxy,
        tls: Uw()
    });
    let z = ua(e.headers ?? {}, (m, a)=>a.toLowerCase() === "host");
    let l = new K(_.url, protocols, {
        proxy,
        headers: {
            ...z,
            ..._.headers
        },
        tls: _.tls,
        maxPayload
    });
    let v = Date.now();
    let O;
    let R = ()=>tQn(i, l);
    let lastAt = Date.now();
    l.on("open", ()=>{
        let m = taskRegistry.all()[i];
        if (m && m.status === "running" && R()) {
            try {
                e.onLifecycle?.("open", undefined, Date.now() - v);
            } catch  {}
        }
        let e_keepalive = e.keepalive;
        if (e_keepalive && m && m.status === "running" && R()) {
            for (let h of e_keepalive.openFrames){
                try {
                    l.send(h);
                } catch  {}
            }
            lastAt = Date.now();
            let g = {
                lastAt
            };
            O = setInterval((h, w, b, ie, j, q)=>{
                let B = Date.now();
                if (b !== undefined && B - lastAt > b) {
                    try {
                        h.terminate();
                    } catch  {}
                    return;
                }
                let J = j;
                try {
                    J = ie?.() ?? j;
                } catch  {}
                if (!(b !== undefined && B - lastAt > b - j * 2) && B - q.lastAt < J - j / 2) {
                    return;
                }
                q.lastAt = B;
                for (let ae of typeof w === "function" ? w() : w){
                    try {
                        h.send(ae);
                    } catch  {}
                }
            }, e_keepalive.intervalMs, l, typeof e_keepalive.frame === "string" ? [
                e_keepalive.frame
            ] : e_keepalive.frame, e_keepalive.deadlineMs, e_keepalive.sendEveryMs, e_keepalive.intervalMs, g);
            O.unref?.();
        }
        if (e.onSender && m && m.status === "running" && R()) {
            try {
                e.onSender(fe(l));
            } catch  {}
        }
    });
    l.on("ping", ()=>{
        lastAt = Date.now();
    });
    l.on("message", (m, a)=>{
        lastAt = Date.now();
        let g = taskRegistry.all()[i];
        if (!g || g.status !== "running" || !R()) {
            return;
        }
        let h = pe(m);
        if (h > maxPayload) {
            jG(description, `[Dropped ${h}-byte frame (exceeds ${maxPayload}); closing]`, i, {
                isHousekeeping: true,
                agentId: k,
                turnAttribution: "none"
            });
            x_(i, taskRegistry, {
                quiet: true
            });
            return;
        }
        if (a) {
            if (typeof e.transform === "function") {
                return;
            }
            D.onData(`[binary frame, ${h} bytes]
`);
            return;
        }
        let w = m.toString("utf8");
        if (typeof e.transform === "function") {
            let b;
            try {
                b = e.transform(w);
            } catch  {
                b = null;
            }
            if (b === null) {
                return;
            }
            w = b;
        }
        D.onData(w + `
`);
    });
    let L;
    l.on("unexpected-response", (m, a)=>{
        let g = a?.statusCode ?? 0;
        if (g === 101) {
            return;
        }
        let h = a?.headers ?? {};
        let w = h["cf-mitigated"] !== undefined;
        L = de(g, w);
        t(`[callWs] upgrade rejected: status=${g} cf-mitigated=${String(h["cf-mitigated"])} cf-ray=${String(h["cf-ray"])}`);
        a?.resume?.();
        let b = taskRegistry.all()[i];
        if (!e.quietLifecycle && b?.status === "running" && R()) {
            jG(description, `[WebSocket upgrade rejected: HTTP ${g}]`, i, {
                isHousekeeping: true,
                agentId: k,
                turnAttribution: "none"
            });
        }
        try {
            l.terminate();
        } catch  {}
    });
    l.on("error", (m)=>{
        clearInterval(O);
        try {
            e.onSenderClosed?.();
        } catch  {}
        let a = taskRegistry.all()[i];
        if (!a || a.status !== "running" || !R()) {
            return;
        }
        t(`[callWs] socket error: ${m.message}`);
        if (!e.quietLifecycle && L === undefined) {
            jG(description, `[WebSocket error: ${m.message}]`, i, {
                isHousekeeping: true,
                agentId: k,
                turnAttribution: "none"
            });
        }
    });
    l.on("close", (m, a)=>{
        clearInterval(O);
        D.flushAndClose();
        try {
            e.onSenderClosed?.();
        } catch  {}
        let g = taskRegistry.all()[i];
        if (!g || g.status !== "running" || !R()) {
            return;
        }
        try {
            e.onLifecycle?.("close", L ?? String(m), Date.now() - v);
        } catch  {}
        if (!e.quietLifecycle) {
            let h = a.length ? ` ${a.toString("utf8")}` : "";
            jG(description, `[WebSocket closed: ${m}${h}]`, i, {
                isHousekeeping: true,
                agentId: k,
                turnAttribution: "none"
            });
        }
        x_(i, taskRegistry, {
            quiet: true,
            connectionLost: true
        });
    });
    let timeoutId = persistent ? undefined : setTimeout((m, a, g, h, w, b)=>{
        if (m.isClosed()) {
            return;
        }
        if (!b.quiet) {
            m.flush();
            if (m.isClosed()) {
                return;
            }
            jG(a, dfr(b.timeoutMs, m.eventCount(), b.bounded), g, {
                isHousekeeping: true,
                agentId: h
            });
        }
        x_(g, w, {
            quiet: true
        });
    }, timeout_ms, D, description, i, k, taskRegistry, {
        timeoutMs: timeout_ms,
        bounded: e.bounded === true,
        quiet: e.quietLifecycle
    });
    let se = {
        ...t_(i, "monitor_ws", description, toolUseId),
        type: "monitor_ws",
        status: "running",
        url,
        timeoutId,
        agentId: k,
        ...e.ambient && {
            ambient: true
        },
        ...e.autoReactArmed && {
            autoReactArmed: true
        },
        ...e.autoReactSlug && {
            autoReactSlug: e.autoReactSlug
        },
        ...e.frameLive && {
            frameLive: {
                ...e.frameLive,
                armedAt: Date.now()
            }
        }
    };
    taskRegistry.register(se);
    eKo(i, l);
    bM(k, `monitor:${i}`, taskRegistry);
    if (e.ambient) {
        let m = setTimeout((a, g, h, w, b)=>{
            if (a.readyState === 0 && tQn(g, a)) {
                try {
                    w.onLifecycle?.("close", Dyn, Date.now() - b);
                } catch  {}
                x_(g, h, {
                    quiet: true,
                    connectionLost: true
                });
            }
        }, e.handshakeDeadlineMs ?? me, l, i, taskRegistry, e, v);
        m.unref?.();
        l.once("open", ()=>clearTimeout(m));
        l.once("close", ()=>clearTimeout(m));
    }
    return {
        data: {
            taskId: i,
            timeoutMs: persistent ? 0 : timeout_ms,
            persistent
        }
    };
}
const Y = "Shell command or script. Each stdout line is an event; exit ends the watch.";
const he = "command contains control characters that would be hidden in the approval dialog";
const X = ()=>o().refine(MR, he);
const be = ()=>u({
        url: o().refine(MR, "url contains control characters that would be hidden in the approval dialog").refine((e)=>{
            try {
                let n = new URL(e);
                return (n.protocol === "ws:" || n.protocol === "wss:") && !n.username && !n.password && !/[\t\n\r]/.test(e) && /^[\x00-\x7F]*$/.test(e);
            } catch  {
                return false;
            }
        }, "url must be a valid ASCII ws:// or wss:// URL with no userinfo or whitespace"),
        protocols: T(o().regex(/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/, "protocol must be an RFC 6455 token")).refine((e)=>new Set(e).size === e.length, "protocols must be unique").optional()
    }).describe("WebSocket to open. Each text frame is an event; binary frames are reported as a placeholder line. Socket close ends the watch. Cannot be combined with command.");
const G = "Short human-readable description of what you are monitoring (shown in notifications).";
function ye() {
    return {
        description: o().describe(G),
        timeout_ms: E().min(1000).optional().default(TAt).describe(`Kill the monitor after this deadline. Default ${TAt}ms, max ${v5t}ms. Ignored when persistent is true.`),
        persistent: M().optional().default(false).describe("Run for the lifetime of the session (no timeout). Use for session-length watches like PR monitoring or log tails. Stop with TaskStop.")
    };
}
function Z() {
    let e = gKe();
    return {
        description: o().describe(G),
        timeout_ms: E().min(1000).max(v5t, `timeout_ms must be \u2264 ${v5t}`).optional().default(TAt).describe(`Kill the monitor after this deadline. Default ${TAt}ms. Deadlines above ${e}ms are capped to ${e}ms. You are notified at expiry and can re-arm.`)
    };
}
const Se = {
    message: `timeout_ms must be \u2264 ${v5t}`,
    path: [
        "timeout_ms"
    ]
};
function ke(e) {
    return e.persistent || e.timeout_ms <= v5t;
}
function Q(...e) {
    return F(e, Boolean) === 1;
}
function we() {
    if (zge()) {
        return zSt();
    }
    return {};
}
const ee = "allowed_domains applies only to a command monitor";
function te(e) {
    return e.command !== undefined || Nae(e) === undefined;
}
function Me(e) {
    let n = GSt(e);
    if (n === undefined) {
        return e.command ?? "";
    }
    return {
        command: e.command ?? "",
        ...n
    };
}
const oe = "exactly one of command or ws";
function ne() {
    return {
        command: X().optional().describe(Y),
        ...we(),
        ws: be().optional()
    };
}
const Te = p(()=>De({
        ...ye(),
        ...ne()
    }).refine((e)=>Q(e.command, e.ws), oe).refine(te, ee).refine(ke, Se));
const Ie = p(()=>u({
        ...Z(),
        ...ne()
    }).refine((e)=>Q(e.command, e.ws), oe).refine(te, ee));
function _e() {
    if (rre()) {
        return Ie();
    }
    return Te();
}
const Re = p(()=>u({
        ...Z(),
        command: X().describe(Y)
    }));
function Ee() {
    if (!Ce()) {
        return;
    }
    let e = kM(Re());
    if (ve(e)) {
        return e;
    }
}
function ve(e) {
    return e.type === "object";
}
const xe = p(()=>u({
        taskId: o().describe("ID of the background monitor task."),
        timeoutMs: E().describe("Timeout deadline in milliseconds (0 when persistent)."),
        persistent: M().optional().describe("No timeout — runs until TaskStop or session end.")
    }));
function Ae(e) {
    let n = kX(e);
    if (n !== undefined && a$(n)) {
        throw Error("This agent has been stopped and its stop is still completing; it cannot start monitors.");
    }
}
function Oe(e, shellPermission) {
    return Frr({
        ...e,
        command: e.command
    }, {
        ...shellPermission,
        permissionLayers: [
            ...shellPermission.permissionLayers ?? [],
            {
                kind: "sandbox_auto_allow_suspended"
            }
        ]
    });
}
async function Le(command, { description, timeout_ms, persistent }, bounded, r, parentMessage) {
    let { abortController, toolUseId, taskRegistry } = r;
    let i = kX(r);
    let taskRef = {};
    let D = C_n({
        description,
        agentId: i,
        taskRef,
        arm: "bash",
        killTask: ()=>{
            if (!taskRef.id) {
                return false;
            }
            u2(taskRef.id, taskRegistry);
            return true;
        }
    });
    let shellCommand = await nle(command, abortController.signal, "bash", {
        session: r.session,
        owningAgentId: i,
        preventCwdChanges: true,
        shouldUseSandbox: Ty({
            command
        }),
        sandboxAttributionId: toolUseId,
        sandboxNetworkLists: qSt(toolUseId, command),
        attributionMessageId: parentMessage?.message.id,
        onStdout: D.onData,
        agentWorktree: r.agentWorktree,
        isolationRoot: Xge(r),
        sessionEnvVars: r.sessionEnvVars,
        storageV5: r.storageV5
    });
    if (shellCommand.status === "completed") {
        let l = await shellCommand.result;
        if (l.preSpawnError) {
            let v = new x(l.preSpawnError, "Monitor: pre-spawn error (cwd/argv redacted)");
            throw l.preSpawnErrorCode === "e2big" ? uH(v, {
                kind: "spawn_arg_limit"
            }) : v;
        }
    }
    if (shellCommand.status === "killed") {
        await shellCommand.result;
        shellCommand.cleanup();
        if (i !== undefined && a$(i)) {
            throw Error("This agent has been stopped and its stop is still completing; it cannot start monitors.");
        }
        throw Error("This call was interrupted before the monitor started; nothing is running.");
    }
    let _ = await $De({
        command,
        description,
        shellCommand,
        toolUseId,
        agentId: i,
        kind: "monitor"
    }, {
        abortController,
        taskRegistry
    });
    taskRef.id = _.taskId;
    bM(i, `monitor:${_.taskId}`, taskRegistry);
    let z = persistent ? undefined : setTimeout((l, v, O, R, A, L)=>{
        if (l.isClosed()) {
            return;
        }
        l.flush();
        if (l.isClosed()) {
            return;
        }
        jG(v, dfr(L.timeoutMs, l.eventCount(), L.bounded), O, {
            isHousekeeping: true,
            agentId: R
        });
        u2(O, A);
    }, timeout_ms, D, description, _.taskId, i, taskRegistry, {
        timeoutMs: timeout_ms,
        bounded
    });
    shellCommand.result.then(async ()=>{
        if (z) {
            clearTimeout(z);
        }
        try {
            await D.reportExit(_);
        } catch (error) {
            c(error);
        } finally{
            RI(i, `monitor:${_.taskId}`, taskRegistry);
        }
    });
    return {
        data: {
            taskId: _.taskId,
            timeoutMs: persistent ? 0 : timeout_ms,
            persistent
        }
    };
}
function Jjt(e) {
    let detail = nf("allow_web_fetch", "Arbitrary-URL egress", "is");
    if (detail !== null) {
        return {
            kind: "compliance",
            host: "",
            detail
        };
    }
    let s = new URL(e);
    let host = H(s.hostname);
    if (isIP(host) && Svt(host)) {
        return {
            kind: "ssrf",
            host,
            detail: "the address is in a private, link-local, or cloud-metadata range"
        };
    }
    let d = s.port !== "" ? Number(s.port) : s.protocol === "wss:" ? 443 : 80;
    let f = bio(host, d);
    if (!f.allowed) {
        return {
            kind: "sandbox-policy",
            host,
            detail: f.reason
        };
    }
    return null;
}
function Pe(e) {
    let n = Jjt(e.url);
    if (n !== null) {
        return {
            behavior: "deny",
            message: n.kind === "compliance" ? `Monitor cannot open a WebSocket. ${n.detail}` : `Monitor cannot open a WebSocket to ${n.host}: ${n.detail}.`,
            decisionReason: {
                type: "other",
                reason: n.kind === "compliance" ? "organization policy disables model-chosen URL egress" : n.kind === "ssrf" ? "SSRF-blocked address range" : n.detail
            }
        };
    }
    let s = e.protocols !== undefined && e.protocols.length > 0 ? ` (subprotocols: ${Qjt(e.protocols)})` : "";
    return {
        behavior: "ask",
        message: `Monitor will open a WebSocket to ${e.url}${s}`,
        suggestions: []
    };
}
function V(e, n) {
    return {
        get session () {
            return e.session;
        },
        get storageV5 () {
            return e.storageV5;
        },
        get credentials () {
            return e.credentials;
        },
        get agentId () {
            return e.agentId;
        },
        get agentWorktree () {
            return e.agentWorktree;
        },
        get taskRegistry () {
            return e.taskRegistry;
        },
        get sessionEnvVars () {
            return e.sessionEnvVars;
        },
        get shellPermission () {
            return {
                ...e.shellPermission,
                abortController: {
                    signal: n.signal
                },
                toolUseId: n.toolUseId
            };
        },
        get mcpState () {
            return e.mcpState;
        },
        get getMcp () {
            return e.mcpState;
        },
        get toolUseId () {
            return n.toolUseId;
        },
        get abortController () {
            return {
                signal: n.signal
            };
        }
    };
}
const $e = {
    name: Pl,
    enablesCodeExecution: true,
    maxResultSizeChars: 10000,
    shouldDefer: true,
    userFacingName () {
        return "Monitor";
    },
    getToolUseSummary (e) {
        if (!e?.description) {
            return null;
        }
        return jo(e.description, zT);
    },
    getActivityDescription (e) {
        if (e?.description) {
            return `Monitoring: ${e.description}`;
        }
        return "Monitoring";
    },
    isEnabled () {
        return A4() && xl();
    },
    isConcurrencySafe () {
        return true;
    },
    renderToolUseMessage (e) {
        if (!e.description) {
            return null;
        }
        return e.description;
    },
    get outputSchema () {
        return xe();
    },
    mapToolResultToToolResultBlockParam (e, tool_use_id) {
        let s = e.persistent ? "persistent — runs until TaskStop or session end" : rre() ? `expires in ${rn(e.timeoutMs, {
            hideTrailingZeros: true
        })} unless the source ends first; you get one notice at expiry \u2014 re-arm if you still need the watch` : `timeout ${e.timeoutMs}ms`;
        return {
            tool_use_id,
            type: "tool_result",
            content: `Monitor started (task ${e.taskId}, ${s}). You will be notified on each event. Keep working \u2014 do not poll or sleep. Events may arrive while you are waiting for the user \u2014 an event is not their reply.`
        };
    }
};
const Ne = Kt({
    ...$e,
    backgrounding: "never",
    searchHint: "watch, monitor, or keep an eye on a process/log/command or WebSocket — stream each stdout line as a live notification",
    async description () {
        return Woo() + (Ce() ? "" : zoo) + joo();
    },
    async prompt () {
        return Woo() + (Ce() ? "" : zoo) + joo();
    },
    get inputSchema () {
        return _e();
    },
    get inputJSONSchema () {
        return Ee();
    },
    toAutoClassifierInput (e) {
        if (e.ws) {
            return `websocket ${e.ws.url}${iVo(e.ws)}`;
        }
        return Me(e);
    },
    sandboxNetworkLists (e) {
        return Nae(e);
    },
    create (e) {
        return {
            permissionCheckFailureDecision (n, s) {
                let r = V(e, s);
                return $rr(Pl, r.shellPermission);
            },
            async validateInput (n) {
                if (n.command !== undefined) {
                    let s = VSt(n, Ty({
                        command: n.command
                    }));
                    if (s !== undefined) {
                        return s;
                    }
                }
                return {
                    result: true
                };
            },
            async checkPermissions (n, s) {
                let r = V(e, s);
                if (n.ws) {
                    let d = NJo("Monitor websocket", r.shellPermission);
                    if (d !== undefined) {
                        return d;
                    }
                    return Pe(n.ws);
                }
                return Oe(n, r.shellPermission);
            },
            async call (n, s) {
                let r = V(e, s);
                let { parentMessage } = s;
                Ae(r);
                let bounded = rre();
                let S = Ucs(n, bounded);
                if (n.ws) {
                    return Xjt({
                        ...n,
                        ...S,
                        bounded,
                        ws: n.ws
                    }, Gyt(r));
                }
                return Le(n.command, {
                    ...n,
                    ...S
                }, bounded, r, parentMessage);
            }
        };
    }
});
const kjs = Ne;
export { o7e, yJn, Dyn, hEe, Gyt, Xjt, Jjt, kjs };
