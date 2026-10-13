import { K, Xf, Dsn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { tt, We, bBn, Ou, mi, Nl } from "/$bunfs/root/chunk-0ycjphb5.js";
import { un, gf } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Ec, ope } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { yi } from "/$bunfs/root/chunk-52bcnmbr.js";
import { df } from "/$bunfs/root/chunk-7mawjt4q.js";
import { pt } from "/$bunfs/root/chunk-223dyewd.js";
import { Qn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Fy } from "/$bunfs/root/chunk-fnj5y75n.js";
import { Ags } from "/$bunfs/root/chunk-e0hrcpx7.js";
import { pM } from "/$bunfs/root/chunk-kasbfbhj.js";
import { PW, j_, AE, Pk } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { sn } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { yt, zf } from "/$bunfs/root/chunk-f41czxrs.js";
import { lZr } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { wr, Pbs } from "/$bunfs/root/chunk-2atph4yw.js";
import { xf } from "/$bunfs/root/chunk-md7g8y4m.js";
import { HJe } from "/$bunfs/root/chunk-pkc6jzc4.js";
import { o, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { randomUUID } from "crypto";
const c = 6;
const l = 32;
const f = p(()=>u({
        text: o().optional()
    }));
function g(e) {
    let r = f().safeParse(e);
    if (!r.success || r.data.text === undefined) {
        return null;
    }
    let i = m(r.data.text);
    if (i.length > 0) {
        return i;
    }
    return null;
}
function N$r(e, r, i) {
    let s = Ags("footer_indicator_", We(r), r);
    for (let n of [
        e,
        s
    ]){
        if (n !== undefined) {
            let t = m(n);
            if (t.length > 0) {
                return t;
            }
        }
    }
    return g(i);
}
function d5n() {
    let text = N$r(a.CLAUDE_CODE_FOOTER_INDICATOR, tt(), Nl()?.footer_indicator);
    if (text === null) {
        return undefined;
    }
    return {
        text
    };
}
function m(e) {
    let r = gf(un(e)).replace(/[\x00-\x1f\x7f-\x9f]/g, "").trim();
    return pt(ne(r, l), c);
}
function oUt(e) {
    if (e === yt) {
        return zf;
    }
    return e;
}
const $$r = "interrupt_receipt_v1";
const F$r = "msg_lifecycle_v1";
const y = "request_marker_lists_v1";
const S = "interrupt_cancel_queued_v1";
const I = "interrupt_send_now_v1";
const zBo = "task_list_restore_v1";
const GBo = "task_list_restored_v1";
const VBo = "mcp_read_resource_v1";
const qBo = "mcp_tool_ui_meta_v1";
const KBo = "ui_surface_v1";
const YBo = [
    $$r,
    S,
    I,
    F$r,
    y
];
function u5n(e) {
    let version = ope(e.manifest.version);
    return {
        name: e.name,
        path: e.path,
        source: e.source,
        ...version && {
            version
        }
    };
}
function sUt() {
    let e = Qn();
    let memoryPaths;
    if (Ou()) {
        memoryPaths = {
            auto: mi()
        };
        if (PW()) {
            memoryPaths.team = j_();
        }
    }
    let messagingSocketPath;
    messagingSocketPath = import.meta.require("/$bunfs/root/chunk-h3v564a3.js").getUdsMessagingSocketPath();
    let sessionId = K();
    return {
        cwd: df() ?? "",
        sessionId,
        apiKeySource: bBn(),
        betas: Xf(),
        outputStyle: e?.outputStyle ?? pM,
        analyticsDisabled: Fy(),
        productFeedbackDisabled: !sn("allow_product_feedback"),
        memoryPaths,
        scratchpadPath: AE() ? Pk(sessionId) ?? undefined : undefined,
        messagingSocketPath,
        workerEpoch: xf() ? a.CLAUDE_CODE_WORKER_EPOCH : undefined,
        powerShellPath: O() === "windows" ? lZr() : undefined,
        footerIndicator: d5n()
    };
}
function Qpn() {
    let e = sUt();
    return {
        cwd: Dsn()?.directory?.path ?? "",
        sessionId: e.sessionId,
        apiKeySource: e.apiKeySource,
        betas: undefined,
        outputStyle: e.outputStyle,
        analyticsDisabled: e.analyticsDisabled,
        productFeedbackDisabled: e.productFeedbackDisabled,
        memoryPaths: undefined,
        scratchpadPath: undefined,
        messagingSocketPath: undefined,
        workerEpoch: e.workerEpoch,
        powerShellPath: undefined,
        footerIndicator: undefined
    };
}
function MJe(e) {
    let r = new Set(e.mcpClients.map((t)=>t.name));
    let i = e.mcpServerErrors.filter((t)=>!r.has(t.name));
    let terminal_slash_commands = e.commands.filter((t)=>t.userInvocable !== false && t.terminalOriented === true).map((t)=>t.name);
    let n = {
        type: "system",
        subtype: "init",
        cwd: e.cwd,
        session_id: e.sessionId,
        tools: e.tools.map((t)=>oUt(t.name)),
        mcp_servers: e.mcpClients.map((t)=>({
                name: t.name,
                status: HJe(t.type),
                ...t.source !== undefined && {
                    source: t.source
                }
            })),
        model: e.model,
        permissionMode: Ec(e.permissionMode),
        slash_commands: e.commands.filter((t)=>t.userInvocable !== false).map((t)=>t.name),
        ...terminal_slash_commands.length > 0 && {
            terminal_slash_commands
        },
        apiKeySource: e.apiKeySource,
        betas: e.betas,
        claude_code_version: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION,
        output_style: e.outputStyle,
        agents: e.agents.map((t)=>t.agentType),
        skills: yi(e.skills, "name").filter((t)=>t.userInvocable !== false).map((t)=>t.name),
        plugins: e.plugins.map(u5n),
        ...e.pluginErrors.length > 0 && {
            plugin_errors: e.pluginErrors.map((t)=>({
                    ...t
                }))
        },
        ...e.pluginWarnings.length > 0 && {
            plugin_warnings: e.pluginWarnings.map((t)=>({
                    ...t
                }))
        },
        ...e.capabilities && {
            capabilities: [
                ...e.capabilities
            ]
        },
        ...i.length > 0 && {
            mcp_server_errors: i.map((t)=>({
                    ...t
                }))
        },
        analytics_disabled: e.analyticsDisabled,
        product_feedback_disabled: e.productFeedbackDisabled,
        uuid: randomUUID()
    };
    if (e.memoryPaths) {
        n.memory_paths = {
            ...e.memoryPaths
        };
    }
    if (e.scratchpadPath !== undefined) {
        n.scratchpad_path = e.scratchpadPath;
    }
    if (e.workerEpoch !== undefined && e.workerEpoch >= 1) {
        n.worker_epoch = e.workerEpoch;
    }
    if (e.messagingSocketPath !== undefined) {
        n.messaging_socket_path = e.messagingSocketPath;
    }
    n.fast_mode_state = e.fastModeState;
    n.fast_mode_disabled_reason = e.fastModeDisabledReason;
    if (e.footerIndicator) {
        n.footer_indicator = {
            ...e.footerIndicator
        };
    }
    if (e.effort !== undefined) {
        n.effort = e.effort;
    }
    if (e.perTurnEffortActive !== undefined) {
        n.per_turn_effort_active = e.perTurnEffortActive;
    }
    if (e.viewMode !== undefined) {
        n.view_mode = e.viewMode;
    }
    if (e.powerShellPath !== undefined) {
        n.powershell_path = e.powerShellPath;
    }
    return n;
}
function Zpn(e, r) {
    wr("init_emit_ms", performance.now() - r, r);
    let i = Pbs();
    if (i) {
        e.startup_timing = i;
    }
}
export { N$r, d5n, oUt, $$r, F$r, zBo, GBo, VBo, qBo, KBo, YBo, u5n, sUt, Qpn, MJe, Zpn };
