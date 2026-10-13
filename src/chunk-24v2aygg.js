import { O6, J9 } from "/$bunfs/root/chunk-7n5kjzjd.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, X, ps, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I, Nr } from "/$bunfs/root/chunk-qch5xj2a.js";
import { tc } from "/$bunfs/root/chunk-zwxj12s4.js";
import { ZLr, Vfe } from "/$bunfs/root/chunk-mmxthvzq.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Lu } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { Pr } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { cp, fdt, Bjn, _dt } from "/$bunfs/root/chunk-xb9cceab.js";
import { vfo } from "/$bunfs/root/chunk-sfgejbsr.js";
import { wPt } from "/$bunfs/root/chunk-xpqgtv5j.js";
import { xu, bit, Sit, wit } from "/$bunfs/root/chunk-tvg3w9xe.js";
import { Smr } from "/$bunfs/root/chunk-46dhek9m.js";
import { xun } from "/$bunfs/root/chunk-c2sww6w0.js";
import { jun } from "/$bunfs/root/chunk-xhavn3ey.js";
import { zun } from "/$bunfs/root/chunk-bzch6wfr.js";
import { ii } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { vo } from "/$bunfs/root/chunk-6cee9jwv.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { spawn } from "child_process";
import { createWriteStream } from "fs";
import { rm, lstat, mkdtemp, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { createInterface } from "readline";
import { createHash } from "crypto";
function re(n) {
    let e = {
        ...n.autoOverSettings && {
            permissions: {
                defaultMode: "auto"
            }
        },
        ...n.autoCompact && {
            autoCompactEnabled: true
        },
        ...n.autoModeEnvironment.length > 0 && {
            autoMode: {
                environment: n.autoModeEnvironment
            }
        }
    };
    if (Object.keys(e).length > 0) {
        return _(e);
    }
}
const Se = 10;
const ve = 10;
const Ce = 3600000;
function AFt(n) {
    return n.replace(/[^a-zA-Z0-9_-]/g, "_");
}
const he = {
    Read: "Reading",
    Write: "Writing",
    Edit: "Editing",
    MultiEdit: "Editing",
    Bash: "Running",
    Glob: "Searching",
    Grep: "Searching",
    WebFetch: "Fetching",
    WebSearch: "Searching",
    Task: "Running task",
    FileReadTool: "Reading",
    FileWriteTool: "Writing",
    FileEditTool: "Editing",
    GlobTool: "Searching",
    GrepTool: "Searching",
    BashTool: "Running",
    NotebookEditTool: "Editing notebook",
    LSP: "LSP"
};
function Ae(n, e, s, r, o) {
    let c = he[n] ?? n;
    let a = e.file_path ?? e.filePath ?? e.pattern ?? e.command?.slice(0, 60) ?? e.url ?? e.query ?? "";
    if (a) {
        return `${c} ${a}`;
    }
    return c;
}
function ye(n, sessionId, onDebug, activities, o) {
    let c;
    try {
        c = X(n);
    } catch  {
        return [];
    }
    if (!c || typeof c !== "object") {
        return [];
    }
    let a = c;
    let p = [];
    let timestamp = Date.now();
    switch(a.type){
        case "assistant":
            {
                let y = a.message;
                if (!y) {
                    break;
                }
                let h = y.content;
                if (!Array.isArray(h)) {
                    break;
                }
                for (let R of h){
                    if (!R || typeof R !== "object") {
                        continue;
                    }
                    let A = R;
                    if (A.type === "tool_use") {
                        let T = A.name ?? "Tool";
                        let D = A.input ?? {};
                        let U = Ae(T, D, activities, p, o);
                        if (U !== undefined) {
                            p.push({
                                type: "tool_start",
                                summary: U,
                                timestamp
                            });
                        }
                        onDebug(`[bridge:activity] sessionId=${sessionId} tool_use name=${T} ${we(D)}`);
                    } else if (A.type === "text") {
                        let T = A.text ?? "";
                        if (T.length > 0) {
                            p.push({
                                type: "text",
                                summary: T.slice(0, 80),
                                timestamp
                            });
                            onDebug(`[bridge:activity] sessionId=${sessionId} text "${T.slice(0, 100)}"`);
                        }
                    }
                }
                break;
            }
        case "result":
            {
                let y = a.subtype;
                if (y === "success") {
                    p.push({
                        type: "result",
                        summary: "Session completed",
                        timestamp
                    });
                    onDebug(`[bridge:activity] sessionId=${sessionId} result subtype=success`);
                } else if (y) {
                    let R = a.errors?.[0] ?? `Error: ${y}`;
                    p.push({
                        type: "error",
                        summary: R,
                        timestamp
                    });
                    onDebug(`[bridge:activity] sessionId=${sessionId} result subtype=${y} error="${R}"`);
                } else {
                    onDebug(`[bridge:activity] sessionId=${sessionId} result subtype=undefined`);
                }
                break;
            }
        default:
            break;
    }
    return p;
}
function be(n) {
    if (n.parent_tool_use_id != null || n.isSynthetic || n.isReplay) {
        return;
    }
    let s = n.message?.content;
    let r;
    if (typeof s === "string") {
        r = s;
    } else if (Array.isArray(s)) {
        for (let o of s){
            if (o && typeof o === "object" && o.type === "text") {
                r = o.text;
                break;
            }
        }
    }
    r = r?.trim();
    if (r) {
        return r;
    }
}
function we(n) {
    let e = [];
    for (let [s, r] of Object.entries(n)){
        if (typeof r === "string") {
            e.push(`${s}="${r.slice(0, 100)}"`);
        }
        if (e.length >= 3) {
            break;
        }
    }
    return e.join(" ");
}
function NLr(n) {
    return {
        spawn (e, cwd) {
            let r = AFt(e.sessionId);
            let o;
            if (n.debugFile) {
                let u = n.debugFile.lastIndexOf(".");
                if (u > 0) {
                    o = `${n.debugFile.slice(0, u)}-${r}${n.debugFile.slice(u)}`;
                } else {
                    o = `${n.debugFile}-${r}`;
                }
            } else if (n.verbose) {
                o = join(tc(), `bridge-session-${r}.log`);
            }
            let c = jun({
                roles: e.roles,
                modePinned: n.permissionMode !== undefined,
                settings: ()=>{
                    Pr();
                    return ft();
                }
            });
            let { autoDefault, autoOverSettings, artifact, machineSettings } = c;
            let h = null;
            let R;
            if (n.debugFile) {
                R = join(dirname(n.debugFile), `bridge-transcript-${r}.jsonl`);
                h = createWriteStream(R, {
                    flags: "a"
                });
                h.on("error", (u)=>{
                    n.onDebug(`[bridge:session] Transcript write error: ${u.message}`);
                    h = null;
                });
                n.onDebug(`[bridge:session] Transcript log: ${R}`);
            }
            let A = [
                ...n.scriptArgs,
                "--print",
                "--sdk-url",
                e.sdkUrl,
                "--session-id",
                e.sessionId,
                "--input-format",
                "stream-json",
                "--output-format",
                "stream-json",
                "--replay-user-messages",
                `--resume=${e.sdkUrl}`,
                ...n.verbose ? [
                    "--verbose"
                ] : [],
                ...o ? [
                    "--debug-file",
                    o
                ] : [],
                ...n.permissionMode ? [
                    "--permission-mode",
                    n.permissionMode
                ] : [],
                ...n.chrome === undefined ? [] : [
                    n.chrome ? "--chrome" : "--no-chrome"
                ]
            ];
            let A_length = A.length;
            let e_serverConfig = e.serverConfig;
            let U = e_serverConfig?.autoModeEnvironment ?? [];
            let x = re({
                autoOverSettings,
                autoCompact: c.autoCompact,
                autoModeEnvironment: U
            });
            if (x !== undefined) {
                A.push(`--settings=${x}`);
            }
            let A_length_1 = A.length;
            let L = e_serverConfig?.mcpConfig;
            if (L) {
                A.push(`--mcp-config=${L.path}`);
            }
            if (e_serverConfig?.appendSystemPrompt) {
                A.push(`--append-system-prompt-file=${e_serverConfig.appendSystemPrompt.path}`);
            }
            if (e_serverConfig) {
                A.push(...e_serverConfig.extraArgs);
            }
            let H = A.length - A_length_1;
            A.push(...e.modelArgs);
            let K = e_serverConfig?.dir;
            let B = ()=>{
                let u = K;
                K = undefined;
                if (u) {
                    return rm(u, {
                        recursive: true,
                        force: true
                    }).catch(()=>{});
                }
                return Promise.resolve();
            };
            let n_ownerIdentity = n.ownerIdentity;
            let Y = {
                CLAUDE_CODE_OAUTH_TOKEN: undefined,
                CLAUDE_CODE_ENVIRONMENT_KIND: "bridge",
                CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT: undefined,
                CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT: undefined,
                CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS: undefined,
                ...n.sandbox && {
                    CLAUDE_CODE_FORCE_SANDBOX: "1"
                },
                CLAUDE_CODE_SESSION_ACCESS_TOKEN: e.accessToken,
                CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID: n_ownerIdentity?.accountUuid,
                CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID: n_ownerIdentity?.organizationUuid,
                CLAUDE_CODE_BRIDGE_SOURCE_DIR: e.sourceDir,
                CLAUDE_CODE_BRIDGE_MCP_CARRIER: e_serverConfig ? "1" : undefined,
                CLAUDE_CODE_BRIDGE_PROMPT_SHA256: e_serverConfig?.appendSystemPrompt?.sha256,
                CLAUDE_CODE_WORKER_EPOCH: String(e.workerEpoch),
                CLAUDE_CODE_RESUME_INTERRUPTED_TURN: e.workerEpoch > 1 ? "1" : undefined,
                CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS: e.workerEpoch > 1 && e.boundResumedTurn ? String(Ce) : undefined,
                CLAUDE_CODE_RESUME_FROM_SESSION: undefined,
                CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR: undefined,
                CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR: undefined,
                CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR: undefined,
                CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR: undefined,
                CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR: undefined,
                CLAUDE_BG_AUTH_SNAPSHOT_PATH: undefined,
                CLAUDE_CODE_ACCOUNT_UUID: undefined,
                CLAUDE_CODE_ORGANIZATION_UUID: undefined,
                CLAUDE_CODE_USER_EMAIL: undefined,
                CCR_SESSION_ACCOUNT_EMAIL: undefined,
                SESSION_INGRESS_URL: L ? L.ingressUrl : undefined,
                CLAUDE_CODE_EXIT_AFTER_STOP_DELAY: e.idleExitAfterMs > 0 ? String(e.idleExitAfterMs) : undefined
            };
            let env = {
                ...n.env,
                ...Object.fromEntries(Vfe.map((u)=>[
                        u,
                        undefined
                    ])),
                ...Object.fromEntries(ZLr.map((u)=>[
                        u,
                        n.env[u]
                    ])),
                ...Y
            };
            let J = new Set([
                ...Vfe,
                ...Object.keys(Y)
            ]);
            for (let u of Object.keys(env)){
                if (!J.has(u) && J.has(u.toUpperCase())) {
                    delete env[u];
                }
            }
            J9(env);
            O6(env);
            if (autoDefault) {
                env.CLAUDE_CODE_BRIDGE_CHILD_AUTO_DEFAULT = "1";
            }
            if (artifact) {
                env.CLAUDE_CODE_BRIDGE_CHILD_ARTIFACT = "1";
            }
            if (machineSettings) {
                env.CLAUDE_CODE_BRIDGE_CHILD_MACHINE_SETTINGS = "1";
            }
            n.onDebug(`[bridge:session] Spawning sessionId=${e.sessionId} sdkUrl=${e.sdkUrl} accessToken=${e.accessToken ? "present" : "MISSING"}`);
            n.onDebug(`[bridge:session] Child args: ${A.slice(0, A_length).join(" ")}${x !== undefined ? ` (+settings: auto=${autoOverSettings}, facts=${U.length})` : ""}${H > 0 ? ` (+${H} server-config args, mcpConfig=${L ? "present" : "unset"}, appendPrompt=${e_serverConfig?.appendSystemPrompt ? "present" : "unset"})` : ""}${e.modelArgs.length > 0 ? ` (+${e.modelArgs.length} model args)` : ""}`);
            if (o) {
                n.onDebug(`[bridge:session] Debug log: ${o}`);
            }
            let S;
            try {
                S = spawn(n.execPath, A, {
                    cwd,
                    stdio: [
                        "pipe",
                        "pipe",
                        "pipe"
                    ],
                    env,
                    windowsHide: true
                });
            } catch (error) {
                B();
                throw error;
            }
            n.onDebug(`[bridge:session] sessionId=${e.sessionId} pid=${S.pid}`);
            let activities = [];
            let ue;
            let currentActivity = null;
            let lastStderr = [];
            let z = false;
            let Z = false;
            let Q = false;
            if (S.stderr) {
                createInterface({
                    input: S.stderr
                }).on("line", (C)=>{
                    if (C.startsWith(wPt)) {
                        let P = Nr(C.slice(wPt.length));
                        if (n.onChildWarning) {
                            n.onChildWarning(e.sessionId, P);
                        } else {
                            process.stderr.write(wPt + P + `
`);
                        }
                        return;
                    }
                    if (n.verbose) {
                        process.stderr.write(C + `
`);
                    }
                    if (lastStderr.length >= ve) {
                        lastStderr.shift();
                    }
                    lastStderr.push(C);
                });
            }
            if (S.stdout) {
                createInterface({
                    input: S.stdout
                }).on("line", (C)=>{
                    if (h) {
                        h.write(C + `
`);
                    }
                    n.onDebug(`[bridge:ws] sessionId=${e.sessionId} <<< ${vfo(C)}`);
                    if (n.verbose) {
                        process.stderr.write(C + `
`);
                    }
                    let P = ye(C, e.sessionId, n.onDebug, activities, ue);
                    for (let w of P){
                        if (activities.length >= Se) {
                            activities.shift();
                        }
                        activities.push(w);
                        currentActivity = w;
                        n.onActivity?.(e.sessionId, w);
                        e.onActivity?.(w);
                    }
                    if (!Q && e.onFirstUserMessage) {
                        let w;
                        try {
                            w = X(C);
                        } catch  {}
                        if (w && typeof w === "object") {
                            let ee = w;
                            if (ee.type === "user") {
                                let ne = be(ee);
                                if (ne) {
                                    Q = true;
                                    e.onFirstUserMessage(ne);
                                }
                            }
                        }
                    }
                });
            }
            let done = new Promise((resolve)=>{
                S.on("close", (C, P)=>{
                    if (h) {
                        h.end();
                        h = null;
                    }
                    let w;
                    if (P === "SIGTERM" || P === "SIGINT" || Z && C !== 0) {
                        n.onDebug(`[bridge:session] sessionId=${e.sessionId} interrupted signal=${P} exit_code=${C} pid=${S.pid}`);
                        w = "interrupted";
                    } else if (C === 0) {
                        w = e.idleExitAfterMs > 0 ? "idle" : "completed";
                        n.onDebug(`[bridge:session] sessionId=${e.sessionId} ${w} exit_code=0 pid=${S.pid}`);
                    } else {
                        n.onDebug(`[bridge:session] sessionId=${e.sessionId} failed exit_code=${C} pid=${S.pid}`);
                        w = "failed";
                    }
                    B().then(()=>resolve(w));
                });
                S.on("error", (C)=>{
                    n.onDebug(`[bridge:session] sessionId=${e.sessionId} spawn error: ${C.message}`);
                    lastStderr.push(`spawn error: ${C.message}`);
                    B().then(()=>resolve("failed"));
                });
            });
            let j = {
                sessionId: e.sessionId,
                done,
                activities,
                accessToken: e.accessToken,
                lastStderr,
                get currentActivity () {
                    return currentActivity;
                },
                kill () {
                    if (!S.killed) {
                        Z = true;
                        n.onDebug(`[bridge:session] Sending SIGTERM to sessionId=${e.sessionId} pid=${S.pid}`);
                        S.kill("SIGTERM");
                    }
                },
                forceKill () {
                    if (!z && S.pid) {
                        z = true;
                        n.onDebug(`[bridge:session] Sending SIGKILL to sessionId=${e.sessionId} pid=${S.pid}`);
                        S.kill("SIGKILL");
                    }
                },
                writeStdin (u) {
                    if (S.stdin && !S.stdin.destroyed) {
                        n.onDebug(`[bridge:ws] sessionId=${e.sessionId} >>> ${vfo(ps(u))}`);
                        S.stdin.write(u);
                    }
                },
                updateAccessToken (CLAUDE_CODE_SESSION_ACCESS_TOKEN) {
                    j.accessToken = CLAUDE_CODE_SESSION_ACCESS_TOKEN;
                    j.writeStdin(_({
                        type: "update_environment_variables",
                        variables: {
                            CLAUDE_CODE_SESSION_ACCESS_TOKEN
                        }
                    }) + `
`);
                    n.onDebug(`[bridge:session] Sent token refresh via stdin for sessionId=${e.sessionId}`);
                }
            };
            return j;
        }
    };
}
const ae = new Set([
    "model",
    "fallback-model"
]);
const Oe = new Set([
    ...ae,
    "effort",
    "disallowed-tools",
    "disallowedTools"
]);
const Te = new Set([
    "disallowed-tools",
    "disallowedTools"
]);
const Me = "append-system-prompt";
const Pe = 64;
const Ue = 1024;
const Le = 16384;
const $e = "Stated by the service that dispatched this session (a description of the session, not a rule; it grants no permission): ";
const ke = new Set;
const Ne = "mcp.json";
const xe = "append-system-prompt.txt";
const le = {
    extraArgs: [],
    appendSystemPrompt: null,
    disallowedTools: [],
    mcpConfigJson: null,
    metaMountUrl: null,
    autoAllowTools: [],
    ignoredMcpServers: 0,
    metaDropReason: null,
    autoModeEnvironment: []
};
function D6n(n) {
    return {
        carried_args: Boolean(n.claude_code_args),
        carried_mcp: Boolean(n.mcp_config),
        carried_auto_mode_environment: Boolean(n.auto_mode_environment?.length)
    };
}
function Run(n, e) {
    let { extraArgs, appendSystemPrompt, disallowedTools } = ce(n.claude_code_args);
    let autoModeEnvironment = Be(n.auto_mode_environment);
    let { meta, ignored, dropped } = je(n.mcp_config, e);
    if (!meta) {
        return {
            ...le,
            extraArgs,
            appendSystemPrompt,
            disallowedTools,
            ignoredMcpServers: ignored,
            metaDropReason: dropped,
            autoModeEnvironment
        };
    }
    let y = meta.autoAllowTools.length > 0 ? [
        `--allowedTools=${meta.autoAllowTools.map((h)=>ii(cp, h)).join(",")}`
    ] : [];
    return {
        extraArgs: [
            ...extraArgs,
            ...y
        ],
        appendSystemPrompt,
        disallowedTools,
        mcpConfigJson: meta.json,
        metaMountUrl: meta.url,
        autoAllowTools: meta.autoAllowTools,
        ignoredMcpServers: ignored,
        metaDropReason: null,
        autoModeEnvironment
    };
}
function Be(n = []) {
    let e = [];
    let s = 0;
    for (let o of n){
        if (o.trim().length === 0 || [
            ...o
        ].length > Ue || o === xu || bit(o) || Sit(o) || wit(o) !== null || e.length >= Pe) {
            continue;
        }
        let c = $e + o;
        let a = s + _(c).length + 1;
        if (a > Le) {
            continue;
        }
        s = a;
        e.push(c);
    }
    let r = n.length - e.length;
    if (r > 0) {
        t(`[bridge:server-config] dropped ${r} auto_mode_environment ${I(r, "entry", "entries")} (empty, over the caps, control, invisible or template characters, or the defaults marker)`, {
            level: "warn"
        });
    }
    return e;
}
function ce(n) {
    if (!n) {
        return {
            extraArgs: [],
            appendSystemPrompt: null,
            disallowedTools: []
        };
    }
    let e = {};
    let s = null;
    let disallowedTools = [];
    let o = 0;
    for (let [p, E] of Object.entries(n)){
        if (Oe.has(p)) {
            e[p] = E;
            if (Te.has(p) && typeof E === "string") {
                disallowedTools.push(...Lu([
                    E
                ]));
            }
        } else if (p === Me) {
            s = typeof E === "string" && E ? E : null;
        } else {
            o++;
        }
    }
    let extraArgs = [];
    let a = zun(extraArgs, e, ke, (p)=>t(`[bridge:server-config] skipped ${p} claude_code_arg`));
    t(`[bridge:server-config] claude_code_args applied=${a} append_prompt=${s ? "present" : "unset"} disallowed_tools=${disallowedTools.length} not_allowlisted=${o}`);
    return {
        extraArgs,
        appendSystemPrompt: s,
        disallowedTools
    };
}
function vFo(n) {
    let e = n?.model;
    if (typeof e === "string" && e !== "") {
        return e;
    }
}
function EFo(n) {
    let e = n?.effort;
    if (typeof e === "string" && e !== "") {
        return e;
    }
}
function kFo(n) {
    if (!n) {
        return [];
    }
    let e = vo(n, (s, r)=>ae.has(r));
    return ce(e).extraArgs;
}
function je(mcp_config, e) {
    if (!mcp_config) {
        return {
            meta: null,
            ignored: 0,
            dropped: null
        };
    }
    let s = Fe(mcp_config.content);
    if (!s) {
        return {
            meta: null,
            ignored: 0,
            dropped: "undecodable"
        };
    }
    let ignored = F(Object.keys(s), (y)=>y !== cp);
    if (ignored > 0) {
        t(`[bridge:server-config] ignoring ${ignored} other server(s) in mcp_config (only ${cp} is honored)`);
    }
    let o = s[cp];
    if (o === undefined) {
        t("[bridge:server-config] mcp_config carries no meta entry");
        return {
            meta: null,
            ignored,
            dropped: "no_meta_entry"
        };
    }
    if (o === null || typeof o !== "object" || !("type" in o) || o.type !== "http" || !("url" in o) || typeof o.url !== "string") {
        t("[bridge:server-config] meta entry is not http", {
            level: "warn"
        });
        return {
            meta: null,
            ignored,
            dropped: "not_http"
        };
    }
    let c = _dt(e.apiBaseUrl);
    if (!c) {
        t("[bridge:server-config] apiBaseUrl is not a trusted ingress origin; dropping meta entry", {
            level: "warn"
        });
        return {
            meta: null,
            ignored,
            dropped: "untrusted_origin"
        };
    }
    let url = Bjn(o.url, c, e.sessionId);
    if (!url) {
        t("[bridge:server-config] meta url is not this session's meta proxy route on the bridge origin", {
            level: "warn"
        });
        return {
            meta: null,
            ignored,
            dropped: "route_mismatch"
        };
    }
    let autoAllowTools = xun(o);
    if (!autoAllowTools) {
        return {
            meta: null,
            ignored,
            dropped: "bad_tools"
        };
    }
    return {
        meta: {
            json: _({
                mcpServers: {
                    [cp]: fdt(url, e.sessionId)
                }
            }),
            url,
            autoAllowTools
        },
        ignored,
        dropped: null
    };
}
function Fe(content) {
    let e;
    try {
        e = X(Buffer.from(content, "base64").toString("utf8"));
    } catch  {
        t("[bridge:server-config] mcp_config did not decode", {
            level: "warn"
        });
        return null;
    }
    if (e === null || typeof e !== "object" || !("mcpServers" in e) || e.mcpServers === null || typeof e.mcpServers !== "object" || Array.isArray(e.mcpServers)) {
        t("[bridge:server-config] mcp_config has no mcpServers", {
            level: "warn"
        });
        return null;
    }
    return e.mcpServers;
}
async function Ge() {
    let { autoModeConfigSchema, getSettingsFilePathForSource, getSettingsForSource } = await import("/$bunfs/root/chunk-5mcxa4c8.js");
    let { parseSettingsFileUncached } = await import("/$bunfs/root/chunk-s8fxg222.js");
    let o = autoModeConfigSchema();
    let c = getSettingsFilePathForSource("userSettings");
    return c !== undefined && de(o, parseSettingsFileUncached(c).settings) || de(o, getSettingsForSource("policySettings"));
}
function de(n, e) {
    let s = n.safeParse(e?.autoMode);
    return s.success && (s.data?.environment?.length ?? 0) > 0;
}
async function We(n, e) {
    let s = n.autoModeEnvironment.length === 0 ? undefined : e.userAutoModeEnvironmentConfigured ? n.autoModeEnvironment : [
        xu,
        ...n.autoModeEnvironment
    ];
    if (!n.mcpConfigJson && !n.appendSystemPrompt) {
        if (n.extraArgs.length > 0 || s !== undefined) {
            return {
                extraArgs: n.extraArgs,
                autoModeEnvironment: s
            };
        }
        return undefined;
    }
    let dir = await He(e.sessionId);
    try {
        let mcpConfig;
        if (n.mcpConfigJson) {
            let a = join(dir, Ne);
            await writeFile(a, n.mcpConfigJson, {
                flag: "wx",
                mode: 384
            });
            mcpConfig = {
                path: a,
                ingressUrl: e.apiBaseUrl
            };
        }
        let c;
        if (n.appendSystemPrompt) {
            let a = join(dir, xe);
            let p = Buffer.from(n.appendSystemPrompt, "utf8");
            await writeFile(a, p, {
                flag: "wx",
                mode: 384
            });
            c = {
                path: a,
                sha256: createHash("sha256").update(p).digest("hex")
            };
        }
        return {
            extraArgs: n.extraArgs,
            dir,
            mcpConfig,
            appendSystemPrompt: c,
            autoModeEnvironment: s
        };
    } catch (error) {
        await W(dir);
        throw error;
    }
}
async function He(sessionId) {
    for(let e = 0;; e++){
        try {
            let s = await Smr();
            let r = await lstat(s);
            if (!r.isDirectory()) {
                throw Error("bridge spawn root is not a directory");
            }
            if (O() !== "windows") {
                if (typeof process.getuid === "function" && r.uid !== process.getuid() || (r.mode & 63) !== 0) {
                    throw Error("bridge spawn root has unexpected owner or mode");
                }
            }
            let o = await mkdtemp(join(s, `${AFt(sessionId)}-`));
            let c = await lstat(s).catch(()=>null);
            if (c?.dev !== r.dev || c.ino !== r.ino) {
                await W(o);
                throw Error("bridge spawn root changed identity during mkdtemp");
            }
            return o;
        } catch (error) {
            if (e > 0 || v(error) !== "ENOENT") {
                throw error;
            }
        }
    }
}
async function W(n) {
    await rm(n, {
        recursive: true,
        force: true
    }).catch(()=>{});
}
async function TFo(n) {
    if (n?.dir) {
        await W(n.dir);
    }
}
function $Lr(n, e) {
    t(`[bridge:server-config] not applied sessionId=${n}: gate_off (tengu_bridge_apply_server_session_config=false)`, {
        level: "warn"
    });
    i("tengu_bridge_server_config_rejected", {
        ...e,
        reason: b("gate_off")
    });
    f("bridge_server_session_config", "gate_off", e);
}
async function AFo(n, e) {
    let s = D6n(n);
    if (!Object.values(s).some(Boolean)) {
        return;
    }
    if (!e.enabled) {
        $Lr(e.sessionId, s);
        return;
    }
    let r = le;
    let o;
    let c;
    try {
        r = Run(e.dropAutoModeEnvironment === undefined ? n : {
            ...n,
            auto_mode_environment: undefined
        }, e);
        let E = r.autoModeEnvironment.length > 0 && e.userAutoModeEnvironmentConfigured === undefined ? {
            ...e,
            userAutoModeEnvironmentConfigured: await Ge()
        } : e;
        o = await We(r, E);
    } catch (error) {
        c = l(error);
    }
    let a = {
        ...s,
        extra_args: r.extraArgs.length,
        append_prompt: r.appendSystemPrompt !== null,
        meta_mcp: r.mcpConfigJson !== null,
        auto_allow: r.autoAllowTools.length,
        auto_mode_environment: r.autoModeEnvironment.length,
        ...e.dropAutoModeEnvironment !== undefined && {
            auto_mode_environment_drop: d(e.dropAutoModeEnvironment)
        },
        ignored_mcp: r.ignoredMcpServers,
        ...r.metaDropReason !== null && {
            meta_drop: d(r.metaDropReason)
        }
    };
    if (c !== undefined) {
        t(`[bridge:server-config] not applied sessionId=${e.sessionId}: ${c}`, {
            level: "warn"
        });
        i("tengu_bridge_server_config_rejected", {
            ...a,
            reason: b("prepare_failed")
        });
        m("bridge_server_session_config", "prepare_failed", a);
        return;
    }
    if (!o) {
        t(`[bridge:server-config] nothing applied sessionId=${e.sessionId}: every carried value was rejected`, {
            level: "warn"
        });
        i("tengu_bridge_server_config_rejected", {
            ...a,
            reason: b("nothing_applied")
        });
        f("bridge_server_session_config", "nothing_applied", a);
        return;
    }
    let p = r.mcpConfigJson ? "present" : r.metaDropReason ? `dropped:${r.metaDropReason}` : "unset";
    t(`[bridge:server-config] applied sessionId=${e.sessionId} args=${r.extraArgs.length} appendPrompt=${r.appendSystemPrompt ? "present" : "unset"} metaMcp=${p} autoAllow=${r.autoAllowTools.length} autoModeEnvironment=${r.autoModeEnvironment.length}`, {
        level: r.metaDropReason ? "warn" : "debug"
    });
    i("tengu_bridge_server_config_applied", a);
    if (r.metaDropReason !== null) {
        f("bridge_server_session_config", "meta_mcp_not_verified", a);
    } else if (s.carried_auto_mode_environment && r.autoModeEnvironment.length === 0) {
        f("bridge_server_session_config", e.dropAutoModeEnvironment === undefined ? "auto_mode_environment_dropped" : `auto_mode_environment_${e.dropAutoModeEnvironment}`, a);
    } else {
        g("bridge_server_session_config", a);
    }
    return o;
}
export { AFt, NLr, D6n, Run, vFo, EFo, kFo, TFo, $Lr, AFo };
