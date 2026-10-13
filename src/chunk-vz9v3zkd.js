import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import "/$bunfs/root/chunk-5k7wva7c.js";
import "/$bunfs/root/chunk-nj0630nv.js";
import "/$bunfs/root/chunk-c5mcach4.js";
import "/$bunfs/root/chunk-kgp7t7yx.js";
import "/$bunfs/root/chunk-04d4ftnx.js";
import "/$bunfs/root/chunk-pp3y3t61.js";
import "/$bunfs/root/chunk-qk3m4n8a.js";
import "/$bunfs/root/chunk-se8vehhp.js";
import "/$bunfs/root/chunk-x47nahfr.js";
import "/$bunfs/root/chunk-52bcnmbr.js";
import "/$bunfs/root/chunk-k7dkeqsc.js";
import "/$bunfs/root/chunk-6gk7mpsm.js";
import "/$bunfs/root/chunk-r3z1chqx.js";
import "/$bunfs/root/chunk-6bjtvbt8.js";
import "/$bunfs/root/chunk-wew3321y.js";
import "/$bunfs/root/chunk-63xa24b4.js";
import "/$bunfs/root/chunk-7mawjt4q.js";
import "/$bunfs/root/chunk-n1z3wrvm.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import "/$bunfs/root/chunk-w1n7t02f.js";
import "/$bunfs/root/chunk-3fj60qgx.js";
import "/$bunfs/root/chunk-3yz9zdww.js";
import "/$bunfs/root/chunk-2d9a83dh.js";
import "/$bunfs/root/chunk-c56kpkt7.js";
import "/$bunfs/root/chunk-tchztk88.js";
import "/$bunfs/root/chunk-z0brrd3r.js";
import "/$bunfs/root/chunk-h7cbghgp.js";
import "/$bunfs/root/chunk-223dyewd.js";
import "/$bunfs/root/chunk-zwxj12s4.js";
import "/$bunfs/root/chunk-9dn6gg6j.js";
import "/$bunfs/root/chunk-1692wahf.js";
import "/$bunfs/root/chunk-gc7ea4xt.js";
import "/$bunfs/root/chunk-craerjpn.js";
import "/$bunfs/root/chunk-03gkt7r5.js";
import "/$bunfs/root/chunk-n1fq1c8e.js";
import { Fy } from "/$bunfs/root/chunk-fnj5y75n.js";
import "/$bunfs/root/chunk-bmzhpr9h.js";
import { VW, BFn, gS } from "/$bunfs/root/chunk-nbx3tg29.js";
import "/$bunfs/root/chunk-b97fvbrv.js";
import "/$bunfs/root/chunk-17w0r6ry.js";
import "/$bunfs/root/chunk-pjqd7qee.js";
import "/$bunfs/root/chunk-xv9n7kza.js";
import "/$bunfs/root/chunk-77t63btp.js";
import "/$bunfs/root/chunk-yp41169e.js";
import "/$bunfs/root/chunk-2dp0fzyb.js";
import "/$bunfs/root/chunk-tfc1vf2h.js";
import "/$bunfs/root/chunk-6cee9jwv.js";
import "/$bunfs/root/chunk-yngqe5v3.js";
import "/$bunfs/root/chunk-nnawdxg4.js";
import "/$bunfs/root/chunk-svqqgdca.js";
import "/$bunfs/root/chunk-m6z3m7rx.js";
import "/$bunfs/root/chunk-tybndaby.js";
import "/$bunfs/root/chunk-79wfew46.js";
import { C, Mr } from "/$bunfs/root/chunk-cj4xndke.js";
const ft = C(function(Hm, at) {
    at.exports = {
        scan: {
            hooks: [
                "telemetry.*",
                "telemetry.log",
                "telemetry.mark",
                "session.start",
                "session.end",
                "engine.create"
            ],
            calls: [
                "clock.after",
                "clock.sleep",
                "env.get",
                "fs.exists",
                "fs.list",
                "fs.read",
                "http.fetch",
                "process.run",
                "session.authorize",
                "session.cwd",
                "session.id",
                "session.model",
                "session.repo",
                "session.surfaces",
                "session.version",
                "settings.read",
                "ui.log"
            ],
            telemetry: [
                "anthropic",
                "collector"
            ],
            env: {
                reads: [
                    "ALACRITTY_LOG",
                    "APP_URL",
                    "AWS_EXECUTION_ENV",
                    "AWS_LAMBDA_FUNCTION_NAME",
                    "AZURE_FUNCTIONS_ENVIRONMENT",
                    "BUILDKITE",
                    "C9_PID",
                    "C9_USER",
                    "CF_PAGES",
                    "CI",
                    "CIRCLECI",
                    "CLAUBBIT",
                    "CLAUDE_AGENT_SDK_VERSION",
                    "CLAUDE_CODE_ACTION",
                    "CLAUDE_CODE_CONTAINER_ID",
                    "CLAUDE_CODE_CUSTOM_OAUTH_URL",
                    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC",
                    "CLAUDE_CODE_ENTRYPOINT",
                    "CLAUDE_CODE_HOST_PLATFORM",
                    "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST",
                    "CLAUDE_CODE_REMOTE",
                    "CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE",
                    "CLAUDE_CODE_REMOTE_SESSION_ID",
                    "CLAUDE_CODE_SESSION_ACCESS_TOKEN",
                    "CLAUDE_CODE_TAGS",
                    "CLAUDE_CODE_USE_ANTHROPIC_AWS",
                    "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD",
                    "CLAUDE_CODE_USE_BEDROCK",
                    "CLAUDE_CODE_USE_FOUNDRY",
                    "CLAUDE_CODE_USE_GATEWAY",
                    "CLAUDE_CODE_USE_MANTLE",
                    "CLAUDE_CODE_USE_VERTEX",
                    "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
                    "CLAUDE_CONFIG_DIR",
                    "CLAUDE_SESSION_INGRESS_TOKEN_FILE",
                    "CODER",
                    "CODER_WORKSPACE_NAME",
                    "CODESPACES",
                    "COMSPEC",
                    "CURSOR_TRACE_ID",
                    "ConEmuANSI",
                    "ConEmuPID",
                    "ConEmuTask",
                    "DAYTONA_WS_ID",
                    "DENO_DEPLOYMENT_ID",
                    "DEVPOD",
                    "DEVPOD_WORKSPACE_UID",
                    "DISABLE_TELEMETRY",
                    "DO_NOT_TRACK",
                    "DYNO",
                    "FLY_APP_NAME",
                    "FLY_MACHINE_ID",
                    "GITHUB_ACTIONS",
                    "GITHUB_ACTION_PATH",
                    "GITHUB_ACTOR_ID",
                    "GITHUB_EVENT_NAME",
                    "GITHUB_REPOSITORY_ID",
                    "GITHUB_REPOSITORY_OWNER_ID",
                    "GITLAB_CI",
                    "GITPOD_WORKSPACE_ID",
                    "GNOME_TERMINAL_SERVICE",
                    "GOOGLE_CLOUD_PROJECT",
                    "GOOGLE_CLOUD_WORKSTATIONS",
                    "HOME",
                    "KITTY_WINDOW_ID",
                    "KONSOLE_VERSION",
                    "KUBERNETES_SERVICE_HOST",
                    "K_SERVICE",
                    "MSYSTEM",
                    "NETLIFY",
                    "NODE_ENV",
                    "OS",
                    "P4PORT",
                    "PROCESSOR_ARCHITECTURE",
                    "PROJECT_DOMAIN",
                    "RAILWAY_ENVIRONMENT_NAME",
                    "RAILWAY_SERVICE_NAME",
                    "RENDER",
                    "REPL_ID",
                    "REPL_SLUG",
                    "RUNNER_ENVIRONMENT",
                    "RUNNER_OS",
                    "SESSIONNAME",
                    "SHELL",
                    "SPACE_CREATOR_USER_ID",
                    "SSH_CLIENT",
                    "SSH_CONNECTION",
                    "SSH_TTY",
                    "STY",
                    "SWE_BENCH_INSTANCE_ID",
                    "SWE_BENCH_RUN_ID",
                    "SWE_BENCH_TASK_ID",
                    "TERM",
                    "TERMINAL_EMULATOR",
                    "TERMINATOR_UUID",
                    "TERM_PROGRAM",
                    "TILIX_ID",
                    "TMUX",
                    "USERPROFILE",
                    "USER_TYPE",
                    "VERCEL",
                    "VSCODE_GIT_ASKPASS_MAIN",
                    "VTE_VERSION",
                    "VisualStudioVersion",
                    "WEBSITE_SITE_NAME",
                    "WEBSITE_SKU",
                    "WSL_DISTRO_NAME",
                    "WT_SESSION",
                    "XTERM_VERSION",
                    "__CFBundleIdentifier"
                ],
                writes: []
            }
        },
        files: {}
    };
});
const be = {};
Mr(be, {
    MOD_FOLDER: ()=>MOD_FOLDER,
    PLUGIN_LISTING: ()=>PLUGIN_LISTING,
    default: ()=>be,
    isAvailable: ()=>isAvailable,
    registerPlugin: ()=>registerPlugin
});
export var isAvailable = ()=>!Fy();
export var MOD_FOLDER = "telemetry";
export var PLUGIN_LISTING = {
    name: "cc-plugin-telemetry",
    description: "Telemetry: a plugin logs an analytics event through $.telemetry.log or marks a feature's use through $.telemetry.mark, sent as first-party rows in batches",
    isAvailable
};
var I = {};
Mr(I, {
    BATCH_ROWS: ()=>Ye,
    BATCH_WINDOW_MS: ()=>$e,
    CHOICES_LIMIT: ()=>v,
    CHOICE_TOKEN: ()=>K,
    CLIENT_TYPE_BY_ENTRYPOINT: ()=>re,
    CORE_EVENT_PREFIX: ()=>j,
    DEPLOYMENTS: ()=>ae,
    EVENT_PREFIX: ()=>z,
    FEATURE_PREFIX: ()=>Z,
    HEX_RADIX: ()=>Te,
    INGEST_URL: ()=>We,
    JETBRAINS_IDES: ()=>pe,
    KNOWN_SHELLS: ()=>fe,
    MARK_KINDS: ()=>J,
    PROBE_SCRIPT: ()=>ye,
    PROBE_TIMEOUT_MS: ()=>timeoutMs,
    PROP_LIMIT: ()=>A,
    REFUSED: ()=>h,
    REMOTE_HASH_LENGTH: ()=>Re,
    RETRY_DELAY_MS: ()=>ze,
    SERVED_TIERS: ()=>ke,
    STATUS_REQUEST_TIMEOUT: ()=>q,
    STATUS_SERVER_ERROR: ()=>ee,
    STATUS_TOO_MANY_REQUESTS: ()=>te,
    TOKEN: ()=>g,
    UUID_LENGTH_FLOOR: ()=>Oe,
    UUID_LENGTH_LIMIT: ()=>Se,
    VCS_MARKERS: ()=>Ae,
    actionRefOf: ()=>se,
    answerOf: ()=>N,
    archOf: ()=>M,
    authOf: ()=>H,
    batchOf: ()=>Ve,
    caught: ()=>nt,
    checkedFields: ()=>He,
    checkedMark: ()=>Ge,
    checkedProps: ()=>S,
    checkedValue: ()=>Y,
    clientTypeOf: ()=>ie,
    contextOf: ()=>rt,
    default: ()=>I,
    deploymentOf: ()=>Xe,
    distinct: ()=>ve,
    entrypointOf: ()=>Ne,
    environmentFieldsOf: ()=>le,
    eventDataOf: ()=>W,
    fieldsOf: ()=>X,
    githubActionsFieldsOf: ()=>ce,
    globalConfigPath: ()=>ge,
    hexOf: ()=>he,
    identityOf: ()=>Qe,
    isAnalyticsOff: ()=>ne,
    isEnvSet: ()=>s,
    isEnvTruthy: ()=>m,
    isMarkKind: ()=>Q,
    isRecord: ()=>x,
    isRefusedEntry: ()=>Ke,
    isRetriable: ()=>je,
    linuxDistroOf: ()=>Ee,
    linuxFilesOf: ()=>_e,
    machineOf: ()=>qe,
    markFieldsOf: ()=>w,
    messageOf: ()=>U,
    metadataOf: ()=>G,
    normalizedRemoteOf: ()=>Ie,
    osReleaseValue: ()=>P,
    platformOf: ()=>et,
    plausibleUuid: ()=>k,
    probeOf: ()=>De,
    refusal: ()=>d,
    register: ()=>Zo,
    remoteHashOf: ()=>Ce,
    served: ()=>it,
    sessionFieldsOf: ()=>Le,
    shellOf: ()=>me,
    tagsOf: ()=>ue,
    telemetryOf: ()=>Me,
    terminalOf: ()=>de,
    vcsOf: ()=>we,
    versionOf: ()=>Ue,
    wireOf: ()=>T,
    wslVersionOf: ()=>xe
});
function H(e) {
    if (e.accountUuid !== undefined || e.organizationUuid !== undefined) {
        return {
            accountUuid: e.accountUuid,
            organizationUuid: e.organizationUuid
        };
    }
}
var G = (e, rh)=>btoa(JSON.stringify({
        rh,
        ...e.fields.props
    }));
var W = (e, t)=>({
        eventId: e.eventId,
        eventName: e.fields.name,
        clientTimestamp: e.loggedAt,
        deviceId: t.context.identity.deviceId,
        email: t.context.identity.email,
        auth: H(t.context.identity),
        sessionId: t.sessionId,
        model: t.model,
        userType: t.userType,
        isInteractive: t.isInteractive,
        ...t.context.session,
        env: {
            ...t.context.environment,
            isClaudeAiAuth: t.isClaudeAiAuth
        },
        additionalMetadata: G(e, t.context.remoteHash)
    });
var x = (e)=>typeof e === "object" && e !== null && !Array.isArray(e);
function T(e) {
    let t = Array.isArray(e);
    let r = x(e);
    if (t) {
        return e.map(T);
    }
    if (r) {
        return Object.fromEntries(Object.entries(e).map(([i, n])=>[
                i.replace(/[A-Z]/g, (a)=>`_${a.toLowerCase()}`),
                T(n)
            ]));
    }
    return e;
}
var Ve = (e, t)=>JSON.stringify({
        events: e.map((r)=>({
                event_type: "ClaudeCodeInternalEvent",
                event_data: T(W(r, t))
            }))
    });
var K = /^[a-z0-9][a-z0-9_-]{0,63}$/;
var v = 32;
var d = (what, t = "log")=>Object.assign(Error(`$.telemetry.${t}: ${what}`), {
        what
    });
function Y(e, t, r = "log") {
    if (typeof t === "boolean") {
        return t;
    }
    if (typeof t === "number") {
        if (Number.isFinite(t)) {
            return t;
        }
        throw d(`props.${e}: a number is finite`, r);
    }
    if (typeof t === "string") {
        throw d(`props.${e}: free text is refused; a string is a Choice, { value, of: [...] }`, r);
    }
    if (!x(t) || !Array.isArray(t.of)) {
        throw d(`props.${e}: a value is a finite number, a boolean, or a Choice, { value, of: [...] }`, r);
    }
    let { of, value } = t;
    if (!(of.length > 0 && of.length <= v && of.every((o)=>typeof o === "string" && K.test(o)))) {
        throw d(`props.${e}.of: a list of 1 to ${v} lowercase tokens`, r);
    }
    if (typeof value !== "string" || !of.includes(value)) {
        throw d(`props.${e}.value: one of the members of \`of\``, r);
    }
    return value;
}
var A = 16;
var g = /^[a-z][a-z0-9_]{0,63}$/;
function S(e, t) {
    if (!x(e)) {
        throw d("props: an object of properties by key", t);
    }
    let r = Object.entries(e);
    if (r.length > A) {
        throw d(`props: at most ${A} properties`, t);
    }
    let i = {};
    for (let [n, a] of r){
        if (!g.test(n)) {
            throw d("props: every key is a snake_case token", t);
        }
        i[n] = Y(n, a, t);
    }
    return i;
}
var j = "tengu_";
var z = "tengu_plugin_";
var X = (e, props)=>({
        name: e.startsWith(j) ? e : z + e,
        props
    });
function He(e) {
    if (!x(e)) {
        throw d("takes one entry, { event, props? }");
    }
    let { event, props = {} } = e;
    if (typeof event !== "string" || !g.test(event)) {
        throw d("takes an event name, a snake_case token");
    }
    return X(event, S(props, "log"));
}
var J = [
    "ok",
    "sad",
    "bad"
];
var Q = (e)=>J.some((t)=>t === e);
var Z = "tengu_feature_";
var w = ({ kind, feature, reason, props })=>({
        name: Z + kind,
        props: reason === undefined ? {
            feature_name: feature,
            ...props
        } : {
            ...props,
            feature_name: feature,
            error_code: reason
        }
    });
function Ge(e) {
    if (!x(e)) {
        throw d("takes one entry, { feature, kind, reason?, props? }", "mark");
    }
    let { feature, kind, reason, props = {} } = e;
    if (typeof feature !== "string" || !g.test(feature)) {
        throw d("takes a feature name, a snake_case token", "mark");
    }
    if (!Q(kind)) {
        throw d("kind: 'ok', 'sad' or 'bad'", "mark");
    }
    if (kind === "ok") {
        if (reason !== undefined) {
            throw d("reason: an ok mark carries none", "mark");
        }
        return w({
            kind,
            feature,
            props: S(props, "mark")
        });
    }
    if (typeof reason !== "string" || !g.test(reason)) {
        throw d(`reason: a ${kind} mark names why, a snake_case token`, "mark");
    }
    return w({
        kind,
        feature,
        reason,
        props: S(props, "mark")
    });
}
var We = "https://api.anthropic.com/api/event_logging/v2/batch";
var Ke = (e)=>e instanceof Error && "what" in e && typeof e.what === "string";
var N = (e)=>e.then(()=>({
            value: undefined
        }), (t)=>{
        if (Ke(t)) {
            return {
                deny: t.what
            };
        }
        throw t;
    });
var Ye = 100;
var $e = 5000;
var q = 408;
var ee = 500;
var te = 429;
var je = (e)=>e >= ee || e === q || e === te;
var U = (e)=>{
    if (e instanceof Error) {
        return e.message;
    }
    return String(e);
};
var ze = 500;
var re = {
    "sdk-ts": "sdk-typescript",
    "sdk-py": "sdk-python",
    "sdk-cli": "sdk-cli",
    "claude-vscode": "claude-vscode",
    "local-agent": "local-agent",
    "claude-desktop": "claude-desktop"
};
var s = (e)=>e !== undefined && e !== "";
var m = (e)=>[
        "1",
        "true",
        "yes",
        "on"
    ].includes((e ?? "").trim().toLowerCase());
function ne(e, t) {
    let r = e.nodeEnv === "test" || s(e.disableTelemetry) || s(e.disableNonessentialTraffic) || m(e.doNotTrack);
    let i = !m(e.providerManagedByHost) && [
        e.useBedrock,
        e.useVertex,
        e.useFoundry,
        e.useAnthropicAws,
        e.useAnthropicGoogleCloud,
        e.useMantle
    ].some(m);
    let n = m(e.useGateway) || t.forceLoginMethod === "gateway" || t.forceLoginGatewayUrl !== undefined;
    let a = s(e.customOauthUrl?.trim());
    return r || i || n || a;
}
function ie(e) {
    let t = e.entrypoint === "remote" || e.hasSessionAccessToken || e.hasSessionIngressTokenFile || e.hasWebsocketAuthFileDescriptor || m(e.claudeCodeRemote);
    if (m(e.githubActions)) {
        return "github-action";
    }
    return re[e.entrypoint ?? ""] ?? (t ? "remote" : "cli");
}
var se = (e)=>{
    if (e?.includes("claude-code-action/")) {
        return e.split("claude-code-action/")[1];
    }
};
var ae = [
    "codespaces",
    "gitpod",
    "coder",
    "devpod",
    "daytona",
    "gcp-cloud-workstations",
    "aws-cloud9",
    "replit",
    "glitch",
    "vercel",
    "railway",
    "render",
    "netlify",
    "heroku",
    "fly.io",
    "cloudflare-pages",
    "deno-deploy",
    "aws-lambda",
    "aws-fargate",
    "aws-ecs",
    "aws-ec2",
    "gcp-cloud-run",
    "gcp",
    "azure-app-service",
    "azure-functions",
    "digitalocean-app-platform",
    "huggingface-spaces",
    "github-actions",
    "gitlab-ci",
    "circleci",
    "buildkite",
    "ci",
    "kubernetes",
    "docker"
];
var Xe = (e, t)=>ae.find((r)=>e.some(([i, n])=>n && i === r)) ?? `unknown-${t}`;
var fe = [
    "zsh",
    "bash",
    "fish",
    "sh",
    "dash",
    "ash",
    "ksh",
    "tcsh",
    "csh",
    "nu",
    "nushell",
    "pwsh",
    "powershell",
    "cmd",
    "elvish",
    "xonsh",
    "ion"
];
function me(e) {
    let t = (e ?? "").split(/[/\\]/).at(-1)?.toLowerCase().replace(/\.exe$/, "");
    if (!e) {
        return "none";
    }
    if (t !== undefined && fe.includes(t)) {
        return t;
    }
    return "other";
}
var pe = [
    "pycharm",
    "intellij",
    "webstorm",
    "phpstorm",
    "rubymine",
    "clion",
    "goland",
    "rider",
    "datagrip",
    "appcode",
    "dataspell",
    "aqua",
    "gateway",
    "fleet",
    "jetbrains",
    "androidstudio"
];
function de(e, t, r) {
    let i = (e.vscodeGitAskpassMain ?? "").toLowerCase();
    let n = (e.bundleIdentifier ?? "").toLowerCase();
    let a = e.term ?? "";
    let o = e.termProgram ?? "";
    let c = e.terminalEmulator === "JetBrains-JediTerm";
    let E = pe.find((u)=>n.includes(u));
    return [
        [
            c && t !== "darwin",
            "pycharm"
        ],
        [
            e.hasCursorTraceId || i.includes("cursor"),
            "cursor"
        ],
        [
            i.includes("windsurf"),
            "windsurf"
        ],
        [
            i.includes("antigravity"),
            "antigravity"
        ],
        [
            n.includes("vscodium"),
            "codium"
        ],
        [
            n.includes("windsurf") || n.includes("devin"),
            "windsurf"
        ],
        [
            n.includes("com.google.android.studio"),
            "androidstudio"
        ],
        [
            E !== undefined,
            E ?? ""
        ],
        [
            e.hasVisualStudioVersion,
            "visualstudio"
        ],
        [
            c,
            "pycharm"
        ],
        [
            a === "xterm-ghostty",
            "ghostty"
        ],
        [
            a.includes("kitty"),
            "kitty"
        ],
        [
            /^devin([ -]desktop)?$/i.test(o),
            "windsurf"
        ],
        [
            o !== "",
            o
        ],
        [
            e.hasTmux,
            "tmux"
        ],
        [
            e.hasSty,
            "screen"
        ],
        [
            e.hasKonsoleVersion,
            "konsole"
        ],
        [
            e.hasGnomeTerminalService,
            "gnome-terminal"
        ],
        [
            e.hasXtermVersion,
            "xterm"
        ],
        [
            e.hasVteVersion,
            "vte-based"
        ],
        [
            e.hasTerminatorUuid,
            "terminator"
        ],
        [
            e.hasKittyWindowId,
            "kitty"
        ],
        [
            e.hasAlacrittyLog,
            "alacritty"
        ],
        [
            e.hasTilixId,
            "tilix"
        ],
        [
            e.hasWtSession,
            "windows-terminal"
        ],
        [
            e.hasSessionName && a === "cygwin",
            "cygwin"
        ],
        [
            e.msystem !== undefined,
            (e.msystem ?? "").toLowerCase()
        ],
        [
            e.hasConEmuAnsi || e.hasConEmuPid || e.hasConEmuTask,
            "conemu"
        ],
        [
            e.wslDistroName !== undefined,
            `wsl-${e.wslDistroName}`
        ],
        [
            e.hasSshConnection || e.hasSshClient || e.hasSshTty,
            "ssh-session"
        ],
        [
            a.includes("alacritty"),
            "alacritty"
        ],
        [
            a.includes("rxvt"),
            "rxvt"
        ],
        [
            a.includes("termite"),
            "termite"
        ],
        [
            a !== "",
            a
        ],
        [
            !r,
            "non-interactive"
        ]
    ].find(([u])=>u)?.[1] ?? "unknown";
}
function ce(e) {
    if (e.githubActorId !== undefined || e.githubRepositoryId !== undefined || e.githubRepositoryOwnerId !== undefined) {
        return {
            actorId: e.githubActorId,
            repositoryId: e.githubRepositoryId,
            repositoryOwnerId: e.githubRepositoryOwnerId
        };
    }
}
function ue(e) {
    let t = (e ?? "").split(",").map((r)=>r.trim()).filter(Boolean);
    if (t.length > 0) {
        return t;
    }
}
function le(e) {
    let { facts, machine, platform } = e;
    let isGithubAction = m(facts.githubActions);
    let a = machine.platformRaw === "linux";
    return {
        platform,
        platformRaw: machine.platformRaw,
        arch: machine.arch,
        terminal: de(facts, platform, e.isInteractive),
        shell: me(facts.shellPath),
        packageManagers: machine.packageManagers,
        runtimes: machine.runtimes,
        isCi: m(facts.ci),
        isClaubbit: m(facts.claubbit),
        isGithubAction,
        isClaudeCodeAction: m(facts.claudeCodeAction),
        isClaudeCodeRemote: m(facts.claudeCodeRemote),
        isLocalAgentMode: facts.entrypoint === "local-agent",
        isConductor: facts.bundleIdentifier === "com.conductor.app",
        deploymentEnvironment: Xe(e.signals, platform),
        remoteEnvironmentType: facts.remoteEnvironmentType,
        claudeCodeContainerId: facts.containerId,
        claudeCodeRemoteSessionId: facts.remoteSessionId,
        tags: ue(facts.tags),
        githubEventName: isGithubAction ? facts.githubEventName : undefined,
        githubActionsRunnerEnvironment: isGithubAction ? facts.runnerEnvironment : undefined,
        githubActionsRunnerOs: isGithubAction ? facts.runnerOs : undefined,
        githubActionRef: isGithubAction ? se(facts.githubActionPath) : undefined,
        githubActionsMetadata: isGithubAction ? ce(facts) : undefined,
        wslVersion: e.wslVersion,
        linuxDistroId: e.distro.id,
        linuxDistroVersion: e.distro.version,
        linuxKernel: a ? machine.kernel : undefined,
        vcs: e.vcs,
        version: e.engine?.version,
        versionBase: e.engine?.base,
        buildTime: e.engine?.builtAt
    };
}
var P = (e, t)=>e.split(`
`).map((r)=>/^(ID|VERSION_ID)=(.*)$/.exec(r)).find((r)=>r?.[1] === t)?.[2]?.replace(/^"|"$/g, "");
async function Ee(e) {
    let t;
    try {
        t = await e();
    } catch  {
        t = "";
    }
    return {
        id: P(t, "ID"),
        version: P(t, "VERSION_ID")
    };
}
async function xe(e) {
    let t;
    try {
        t = (await e()).toLowerCase();
    } catch  {
        return;
    }
    let r = t.includes("microsoft");
    return /wsl(\d+)/.exec(t)?.[1] ?? (r ? "1" : undefined);
}
async function _e(e, t) {
    let [distro, wslVersion, n, a] = await Promise.all([
        t ? Ee(()=>e.read("/etc/os-release")) : {
            id: undefined,
            version: undefined
        },
        t ? xe(()=>e.read("/proc/version")) : undefined,
        t ? e.read("/sys/hypervisor/uuid").then((o)=>o.startsWith("ec2"), ()=>false) : false,
        t ? e.exists("/.dockerenv").catch(()=>false) : false
    ]);
    return {
        distro,
        wslVersion,
        fileSignals: [
            [
                "aws-ec2",
                n
            ],
            [
                "docker",
                a
            ]
        ]
    };
}
function ge(e) {
    let t = e.configDir || e.home || e.userProfile;
    let r = t?.includes("\\") && !t.includes("/") ? "\\" : "/";
    if (t) {
        return `${t.replace(/[\\/]+$/, "")}${r}.claude.json`;
    }
}
var Oe = 8;
var Se = 128;
function k(e) {
    if (typeof e === "string" && e.length >= Oe && e.length <= Se) {
        return e;
    }
}
async function Qe(e, t, r) {
    let i = ge(t);
    let n;
    try {
        n = i === undefined ? undefined : JSON.parse(await e(i));
    } catch  {
        n = undefined;
    }
    let a = x(n) ? n : {};
    let o = x(a.oauthAccount) ? a.oauthAccount : {};
    let a_userID = a.userID;
    let o_emailAddress = o.emailAddress;
    let p = typeof a_userID === "string" && /^[A-Za-z0-9_-]{8,128}$/.test(a_userID);
    let u = r && typeof o_emailAddress === "string" && o_emailAddress !== "";
    return {
        deviceId: p ? a_userID : undefined,
        accountUuid: k(o.accountUuid),
        organizationUuid: k(o.organizationUuid),
        email: u ? o_emailAddress : undefined
    };
}
function M(e) {
    let t = e.trim().toLowerCase();
    return [
        [
            t === "x86_64" || t === "amd64",
            "x64"
        ],
        [
            t === "aarch64" || t === "arm64",
            "arm64"
        ],
        [
            t === "x86" || /^i[3-6]86$/.test(t),
            "ia32"
        ]
    ].find(([i])=>i)?.[1] ?? (t || "unknown");
}
var ye = [
    "uname -s",
    "uname -r",
    "uname -m",
    'for c in npm yarn pnpm; do command -v "$c" >/dev/null 2>&1 && printf "%s," "$c"; done; echo',
    'for c in bun deno node; do command -v "$c" >/dev/null 2>&1 && printf "%s," "$c"; done; echo'
].join(`
`);
async function qe(e, t) {
    if (t.os === "Windows_NT") {
        return {
            platformRaw: "win32",
            arch: M(t.processorArchitecture ?? ""),
            kernel: undefined,
            packageManagers: "",
            runtimes: ""
        };
    }
    let r;
    try {
        r = await e([
            "sh",
            "-c",
            ye
        ]);
    } catch  {
        r = undefined;
    }
    let [i = "", n = "", a = "", o = "", c = ""] = (r?.exitCode === 0 ? r.stdout.split(`
`) : []).map((E)=>E.trim());
    return {
        platformRaw: i.toLowerCase() || "unknown",
        arch: M(a),
        kernel: n || undefined,
        packageManagers: o.replace(/,$/, ""),
        runtimes: c.replace(/,$/, "")
    };
}
function et(e, t) {
    return [
        "win32",
        "darwin",
        "linux"
    ].find((n)=>n === e) ?? (t === "win32" || t === "darwin" ? t : "linux");
}
var timeoutMs = 5000;
var Te = 16;
var he = (e)=>[
        ...new Uint8Array(e)
    ].map((t)=>t.toString(Te).padStart(2, "0")).join("");
function Ie(e) {
    let t = e.trim();
    let [, r, i] = /^git@([^:/@]+):(.+?)(?:\.git)?$/.exec(t) ?? /^(?:https?|ssh):\/\/(?:[^@/?#]*@)?([^/?#@]+)\/(.+?)(?:\.git)?$/.exec(t) ?? [];
    if (r !== undefined && i !== undefined) {
        return `${r}/${i}`.toLowerCase();
    }
}
var Re = 16;
async function Ce(e) {
    let t = e ? Ie(e) : undefined;
    if (t === undefined) {
        return;
    }
    return he(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t))).slice(0, Re);
}
function ve(e) {
    let t = new Set;
    return e.filter((r)=>{
        let i = t.has(r);
        t.add(r);
        return !i;
    });
}
var Ae = [
    [
        ".git",
        "git"
    ],
    [
        ".hg",
        "mercurial"
    ],
    [
        ".svn",
        "svn"
    ],
    [
        ".p4config",
        "perforce"
    ],
    [
        "$tf",
        "tfs"
    ],
    [
        ".tfvc",
        "tfs"
    ],
    [
        ".jj",
        "jujutsu"
    ],
    [
        ".sl",
        "sapling"
    ]
];
async function we(e, t, r) {
    let i;
    try {
        i = await e(t);
    } catch  {
        i = [];
    }
    let n = new Set(i.map((o)=>o.name));
    let a = ve([
        ...r ? [
            "perforce"
        ] : [],
        ...Ae.flatMap(([o, c])=>{
            if (n.has(o)) {
                return [
                    c
                ];
            }
            return [];
        })
    ]);
    if (a.length > 0) {
        return a.join(",");
    }
}
async function De(e, isInteractive) {
    let [r, i, n, a, o, c, engine] = await Promise.all([
        e.facts(),
        e.deployment(),
        e.configLocation(),
        e.environment(),
        e.cwd().catch(()=>{}),
        e.repo().catch(()=>null),
        e.version().catch((Fe)=>{
            e.debug(`telemetry: the engine's version is not readable here, so the version columns stay empty (${U(Fe)})`);
        })
    ]);
    let [identity, u, vcs, remoteHash] = await Promise.all([
        Qe(e.read, n, a.userType === "ant"),
        qe(e.run, r),
        o === undefined ? undefined : we(e.list, o, r.hasP4Port),
        Ce(c?.remote)
    ]);
    let O = await _e(e, u.platformRaw === "linux");
    return {
        facts: r,
        signals: [
            ...i,
            ...O.fileSignals
        ],
        identity,
        machine: u,
        platform: et(r.hostPlatform, u.platformRaw),
        isInteractive,
        distro: O.distro,
        wslVersion: O.wslVersion,
        vcs,
        remoteHash,
        engine
    };
}
function Ne(e) {
    if (e === undefined || /^[a-z][a-z0-9_-]{0,39}$/.test(e)) {
        return e;
    }
    return "other";
}
function Ue(e) {
    let t = e === undefined || e === "unknown";
    let r = /^\d{1,8}\.\d{1,8}\.\d{1,8}(?!\d)/.exec(e ?? "")?.[0];
    if (t) {
        return e;
    }
    return r ?? "other";
}
var Le = (e)=>({
        clientType: ie(e),
        entrypoint: Ne(e.entrypoint),
        agentSdkVersion: Ue(e.agentSdkVersion),
        sweBenchRunId: e.sweBenchRunId || undefined,
        sweBenchInstanceId: e.sweBenchInstanceId || undefined,
        sweBenchTaskId: e.sweBenchTaskId || undefined
    });
async function rt(e, t) {
    let r = await De(e, t);
    return {
        identity: r.identity,
        session: Le(r.facts),
        environment: le(r),
        remoteHash: r.remoteHash
    };
}
var h = {
    deny: "$.telemetry serves the plugins built into Claude Code alone"
};
var nt = (e, t)=>{
    if (t.called) {
        return t(e);
    }
    return h;
};
var ke = [
    "builtin",
    "core"
];
function it(e, t) {
    if (t.origin?.tier === undefined) {
        throw Error("$.telemetry: the call names no origin");
    }
    if (ke.includes(t.origin.tier)) {
        return t(e);
    }
    return h;
}
function Me(e) {
    let t = [];
    let r;
    let i;
    let n;
    let a = Promise.resolve();
    function o() {
        let f = i ?? e.isInteractive().then((l)=>rt(e, l)).catch((l)=>{
            i = undefined;
            throw l;
        });
        i = f;
        return f;
    }
    async function c() {
        try {
            let [f, l] = await Promise.all([
                e.environment(),
                e.policy()
            ]);
            if (ne(f, l)) {
                return undefined;
            }
            return f;
        } catch (error) {
            e.debug(`telemetry: the analytics switches could not be read, so nothing is sent (${U(error)})`);
            return;
        }
    }
    async function E() {
        if (await c()) {
            await o();
        }
    }
    let p = (body, auth)=>e.fetch(We, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-service-name": "claude-code"
            },
            auth,
            body
        });
    async function u(f, handle) {
        let _;
        try {
            _ = await p(f, handle);
        } catch  {
            _ = undefined;
        }
        let R = _ !== undefined && (_.ok || !je(_.status));
        if (_ !== undefined && R) {
            return _;
        }
        await e.sleep(ze);
        return p(f, handle);
    }
    async function b(f) {
        let l = await c();
        if (!l) {
            return;
        }
        let _ = await e.authorize();
        if (!_) {
            throw Error("this session has no first-party credential to authorize");
        }
        let context = await o();
        let Be = await u(Ve(f, {
            sessionId: await e.id(),
            model: await e.model(),
            userType: l.userType === "ant" ? "ant" : "external",
            isInteractive: await e.isInteractive(),
            isClaudeAiAuth: _.kind === "bearer" && context.identity.accountUuid !== undefined,
            context
        }), _.handle);
        if (!Be.ok) {
            throw Error(`the ingest answered ${Be.status}`);
        }
        e.debug(`telemetry: sent ${f.length} row(s)`);
    }
    function flush() {
        r?.cancel();
        r = undefined;
        let f = t;
        t = [];
        if (f.length === 0) {
            return a;
        }
        a = a.then(()=>b(f).catch((l)=>{
                e.debug(`telemetry: ${f.length} row(s) not sent: ` + U(l));
            }));
        return a;
    }
    function O(fields) {
        n ??= E().catch(()=>{});
        t.push({
            fields,
            eventId: crypto.randomUUID(),
            loggedAt: new Date().toISOString()
        });
        if (t.length >= Ye) {
            flush();
            return;
        }
        r ??= e.after($e, ()=>void flush());
    }
    return {
        telemetry: {
            log: async (f)=>O(He(f)),
            mark: async (f)=>O(Ge(f))
        },
        flush
    };
}
function Zo(e) {
    let t;
    let r;
    e("telemetry.*", (i, n, a)=>it(n, a)).catch((i, n, a)=>nt(n, a));
    e("telemetry.log", (i, n, a)=>{
        if (t === undefined || n.to === "collector") {
            return a(n);
        }
        return N(t.telemetry.log(n));
    });
    e("telemetry.mark", (i, n, a)=>{
        if (t === undefined) {
            return a(n);
        }
        return N(t.telemetry.mark(n));
    });
    e("session.start", (i, n, a)=>{
        r = n.isInteractive;
        return a(n);
    });
    e("session.end", async (i, n, a)=>{
        await t?.flush();
        return a(n);
    });
    e("engine.create", async (i, n, a)=>{
        let o = await a(n);
        t = Me({
            authorize: ()=>o.session.authorize(),
            id: ()=>o.session.id(),
            model: ()=>o.session.model(),
            isInteractive: async ()=>r ?? (await o.session.surfaces()).includes("terminal"),
            environment: async ()=>({
                    userType: await o.env.get("USER_TYPE"),
                    nodeEnv: await o.env.get("NODE_ENV"),
                    disableTelemetry: await o.env.get("DISABLE_TELEMETRY"),
                    disableNonessentialTraffic: await o.env.get("CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC"),
                    doNotTrack: await o.env.get("DO_NOT_TRACK"),
                    customOauthUrl: await o.env.get("CLAUDE_CODE_CUSTOM_OAUTH_URL"),
                    useGateway: await o.env.get("CLAUDE_CODE_USE_GATEWAY"),
                    providerManagedByHost: await o.env.get("CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST"),
                    useBedrock: await o.env.get("CLAUDE_CODE_USE_BEDROCK"),
                    useVertex: await o.env.get("CLAUDE_CODE_USE_VERTEX"),
                    useFoundry: await o.env.get("CLAUDE_CODE_USE_FOUNDRY"),
                    useAnthropicAws: await o.env.get("CLAUDE_CODE_USE_ANTHROPIC_AWS"),
                    useAnthropicGoogleCloud: await o.env.get("CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD"),
                    useMantle: await o.env.get("CLAUDE_CODE_USE_MANTLE")
                }),
            policy: ()=>o.settings.read({
                    source: "policy"
                }),
            facts: async ()=>({
                    entrypoint: await o.env.get("CLAUDE_CODE_ENTRYPOINT"),
                    agentSdkVersion: await o.env.get("CLAUDE_AGENT_SDK_VERSION"),
                    hostPlatform: await o.env.get("CLAUDE_CODE_HOST_PLATFORM"),
                    os: await o.env.get("OS"),
                    processorArchitecture: await o.env.get("PROCESSOR_ARCHITECTURE"),
                    shellPath: await o.env.get("SHELL") ?? await o.env.get("COMSPEC"),
                    ci: await o.env.get("CI"),
                    claubbit: await o.env.get("CLAUBBIT"),
                    githubActions: await o.env.get("GITHUB_ACTIONS"),
                    claudeCodeAction: await o.env.get("CLAUDE_CODE_ACTION"),
                    claudeCodeRemote: await o.env.get("CLAUDE_CODE_REMOTE"),
                    remoteEnvironmentType: await o.env.get("CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE"),
                    containerId: await o.env.get("CLAUDE_CODE_CONTAINER_ID"),
                    remoteSessionId: await o.env.get("CLAUDE_CODE_REMOTE_SESSION_ID"),
                    tags: await o.env.get("CLAUDE_CODE_TAGS"),
                    hasSessionAccessToken: s(await o.env.get("CLAUDE_CODE_SESSION_ACCESS_TOKEN")),
                    hasSessionIngressTokenFile: s(await o.env.get("CLAUDE_SESSION_INGRESS_TOKEN_FILE")),
                    hasWebsocketAuthFileDescriptor: s(await o.env.get("CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR")),
                    githubEventName: await o.env.get("GITHUB_EVENT_NAME"),
                    runnerEnvironment: await o.env.get("RUNNER_ENVIRONMENT"),
                    runnerOs: await o.env.get("RUNNER_OS"),
                    githubActionPath: await o.env.get("GITHUB_ACTION_PATH"),
                    githubActorId: await o.env.get("GITHUB_ACTOR_ID"),
                    githubRepositoryId: await o.env.get("GITHUB_REPOSITORY_ID"),
                    githubRepositoryOwnerId: await o.env.get("GITHUB_REPOSITORY_OWNER_ID"),
                    sweBenchRunId: await o.env.get("SWE_BENCH_RUN_ID"),
                    sweBenchInstanceId: await o.env.get("SWE_BENCH_INSTANCE_ID"),
                    sweBenchTaskId: await o.env.get("SWE_BENCH_TASK_ID"),
                    hasP4Port: s(await o.env.get("P4PORT")),
                    wslDistroName: await o.env.get("WSL_DISTRO_NAME"),
                    hasCursorTraceId: s(await o.env.get("CURSOR_TRACE_ID")),
                    vscodeGitAskpassMain: await o.env.get("VSCODE_GIT_ASKPASS_MAIN"),
                    bundleIdentifier: await o.env.get("__CFBundleIdentifier"),
                    hasVisualStudioVersion: s(await o.env.get("VisualStudioVersion")),
                    terminalEmulator: await o.env.get("TERMINAL_EMULATOR"),
                    term: await o.env.get("TERM"),
                    termProgram: await o.env.get("TERM_PROGRAM"),
                    hasTmux: s(await o.env.get("TMUX")),
                    hasSty: s(await o.env.get("STY")),
                    hasKonsoleVersion: s(await o.env.get("KONSOLE_VERSION")),
                    hasGnomeTerminalService: s(await o.env.get("GNOME_TERMINAL_SERVICE")),
                    hasXtermVersion: s(await o.env.get("XTERM_VERSION")),
                    hasVteVersion: s(await o.env.get("VTE_VERSION")),
                    hasTerminatorUuid: s(await o.env.get("TERMINATOR_UUID")),
                    hasKittyWindowId: s(await o.env.get("KITTY_WINDOW_ID")),
                    hasAlacrittyLog: s(await o.env.get("ALACRITTY_LOG")),
                    hasTilixId: s(await o.env.get("TILIX_ID")),
                    hasWtSession: s(await o.env.get("WT_SESSION")),
                    hasSessionName: s(await o.env.get("SESSIONNAME")),
                    msystem: await o.env.get("MSYSTEM"),
                    hasConEmuAnsi: s(await o.env.get("ConEmuANSI")),
                    hasConEmuPid: s(await o.env.get("ConEmuPID")),
                    hasConEmuTask: s(await o.env.get("ConEmuTask")),
                    hasSshConnection: s(await o.env.get("SSH_CONNECTION")),
                    hasSshClient: s(await o.env.get("SSH_CLIENT")),
                    hasSshTty: s(await o.env.get("SSH_TTY"))
                }),
            deployment: async ()=>[
                    [
                        "codespaces",
                        m(await o.env.get("CODESPACES"))
                    ],
                    [
                        "gitpod",
                        s(await o.env.get("GITPOD_WORKSPACE_ID"))
                    ],
                    [
                        "coder",
                        m(await o.env.get("CODER"))
                    ],
                    [
                        "coder",
                        s(await o.env.get("CODER_WORKSPACE_NAME"))
                    ],
                    [
                        "devpod",
                        m(await o.env.get("DEVPOD"))
                    ],
                    [
                        "devpod",
                        s(await o.env.get("DEVPOD_WORKSPACE_UID"))
                    ],
                    [
                        "daytona",
                        s(await o.env.get("DAYTONA_WS_ID"))
                    ],
                    [
                        "gcp-cloud-workstations",
                        m(await o.env.get("GOOGLE_CLOUD_WORKSTATIONS"))
                    ],
                    [
                        "aws-cloud9",
                        s(await o.env.get("C9_PID"))
                    ],
                    [
                        "aws-cloud9",
                        s(await o.env.get("C9_USER"))
                    ],
                    [
                        "replit",
                        s(await o.env.get("REPL_ID"))
                    ],
                    [
                        "replit",
                        s(await o.env.get("REPL_SLUG"))
                    ],
                    [
                        "glitch",
                        s(await o.env.get("PROJECT_DOMAIN"))
                    ],
                    [
                        "vercel",
                        m(await o.env.get("VERCEL"))
                    ],
                    [
                        "railway",
                        s(await o.env.get("RAILWAY_ENVIRONMENT_NAME"))
                    ],
                    [
                        "railway",
                        s(await o.env.get("RAILWAY_SERVICE_NAME"))
                    ],
                    [
                        "render",
                        m(await o.env.get("RENDER"))
                    ],
                    [
                        "netlify",
                        m(await o.env.get("NETLIFY"))
                    ],
                    [
                        "heroku",
                        s(await o.env.get("DYNO"))
                    ],
                    [
                        "fly.io",
                        s(await o.env.get("FLY_APP_NAME"))
                    ],
                    [
                        "fly.io",
                        s(await o.env.get("FLY_MACHINE_ID"))
                    ],
                    [
                        "cloudflare-pages",
                        m(await o.env.get("CF_PAGES"))
                    ],
                    [
                        "deno-deploy",
                        s(await o.env.get("DENO_DEPLOYMENT_ID"))
                    ],
                    [
                        "aws-lambda",
                        s(await o.env.get("AWS_LAMBDA_FUNCTION_NAME"))
                    ],
                    [
                        "aws-fargate",
                        await o.env.get("AWS_EXECUTION_ENV") === "AWS_ECS_FARGATE"
                    ],
                    [
                        "aws-ecs",
                        await o.env.get("AWS_EXECUTION_ENV") === "AWS_ECS_EC2"
                    ],
                    [
                        "gcp-cloud-run",
                        s(await o.env.get("K_SERVICE"))
                    ],
                    [
                        "gcp",
                        s(await o.env.get("GOOGLE_CLOUD_PROJECT"))
                    ],
                    [
                        "azure-app-service",
                        s(await o.env.get("WEBSITE_SITE_NAME"))
                    ],
                    [
                        "azure-app-service",
                        s(await o.env.get("WEBSITE_SKU"))
                    ],
                    [
                        "azure-functions",
                        s(await o.env.get("AZURE_FUNCTIONS_ENVIRONMENT"))
                    ],
                    [
                        "digitalocean-app-platform",
                        s(await o.env.get("APP_URL")) && String(await o.env.get("APP_URL")).includes("ondigitalocean.app")
                    ],
                    [
                        "huggingface-spaces",
                        s(await o.env.get("SPACE_CREATOR_USER_ID"))
                    ],
                    [
                        "github-actions",
                        m(await o.env.get("GITHUB_ACTIONS"))
                    ],
                    [
                        "gitlab-ci",
                        m(await o.env.get("GITLAB_CI"))
                    ],
                    [
                        "circleci",
                        s(await o.env.get("CIRCLECI"))
                    ],
                    [
                        "buildkite",
                        s(await o.env.get("BUILDKITE"))
                    ],
                    [
                        "ci",
                        m(await o.env.get("CI"))
                    ],
                    [
                        "kubernetes",
                        s(await o.env.get("KUBERNETES_SERVICE_HOST"))
                    ]
                ],
            configLocation: async ()=>({
                    configDir: await o.env.get("CLAUDE_CONFIG_DIR"),
                    home: await o.env.get("HOME"),
                    userProfile: await o.env.get("USERPROFILE")
                }),
            cwd: ()=>o.session.cwd(),
            repo: ()=>o.session.repo(),
            version: async ()=>o.session.version(),
            read: (p)=>o.fs.read(p),
            list: (p)=>o.fs.list(p),
            exists: (p)=>o.fs.exists(p),
            run: (p)=>o.process.run(p, {
                    timeoutMs
                }),
            fetch: (p, u)=>o.http.fetch(p, u),
            after: (p, u)=>o.clock.after(p, u),
            sleep: (p)=>o.clock.sleep(p),
            debug: (p)=>o.ui.log(p, {
                    to: "debug"
                })
        });
        return {
            ...{
                telemetry: t.telemetry
            },
            ...o
        };
    });
}
export function registerPlugin() {
    let hooksModule = VW(BFn(MOD_FOLDER), I, ()=>ft());
    gS({
        ...PLUGIN_LISTING,
        hooksModule
    });
}
export { be as default };
