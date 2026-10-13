import { bu, psn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Xn, xt, iu, Su, iT, nin, S0t, jBe, w0t, WBe, v0t, E0t, k0t, T0t, VPe, Lq, W, Vr, mOo, FH, yOo, xs } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { dp, K1 } from "/$bunfs/root/chunk-x47nahfr.js";
import { hu } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { bIs, dGn, SIs, wIs, jrn, vIs } from "/$bunfs/root/chunk-h7cbghgp.js";
import { Ivs, Ovs, tt, We, eEr, ZIt, a1, C7, c_o, cO, hct } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Qbs } from "/$bunfs/root/chunk-0hc5jd2w.js";
import { ZJt, gfo, hfo } from "/$bunfs/root/chunk-ksp77fhe.js";
import { Gue, Ht } from "/$bunfs/root/chunk-77t63btp.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { createHash } from "crypto";
import { release } from "os";
const service = "claude-code-error-tracking";
function F(sourcemapGroup) {
    if (sourcemapGroup) {
        return {
            version: `${({
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }).VERSION}_${sourcemapGroup}`,
            sourcemapGroup
        };
    }
    return {
        version: ({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }).VERSION,
        sourcemapGroup: "none"
    };
}
const k = 30;
function D() {
    let e = ZJt();
    if (e.cachedUserBucket !== undefined) {
        return e.cachedUserBucket;
    }
    let r = cO();
    let o = createHash("sha256").update(r).digest("hex");
    e.cachedUserBucket = parseInt(o.slice(0, 8), 16) % k;
    return e.cachedUserBucket;
}
function v(e, error_frames) {
    let o = error_frames.slice(0, 3).map((n)=>{
        if (wIs(n)) {
            return `${n.function ?? "?"}@${n.file}:${n.line ?? "?"}:${n.column ?? "?"}`;
        }
        return `${n.function ?? "?"}@${bIs(n.file)}`;
    }).join("|");
    return createHash("sha256").update(`${e}
${o}`).digest("hex").slice(0, 16);
}
const b = new Set(Gue);
function M() {
    try {
        let e = tt();
        if (!e) {
            return;
        }
        let r = We(Ht(e), {
            identity: true
        });
        if (b.has(r)) {
            return r;
        }
        return "other";
    } catch  {
        return;
    }
}
const P = 50;
function U() {
    try {
        let e = C7();
        let r = c_o();
        let o = {};
        let n = 0;
        for (let [t, s] of Object.entries(e)){
            if (typeof s === "boolean" && r.has(t)) {
                o[t] = s;
                if (++n >= P) {
                    break;
                }
            }
        }
        return o;
    } catch  {
        return {};
    }
}
function x({ issues }) {
    if (!Array.isArray(issues) || issues.length === 0) {
        return;
    }
    let o = issues.map((n)=>n?.code).filter((n)=>typeof n === "string" && /^[a-z_]{1,40}$/.test(n));
    return `${issues.length} issue(s): ${o.join(",")}`;
}
function L() {}
const B = !L.name.startsWith("errorTrackingIdentifierProbe");
const w = [
    [
        "APIUserAbortError",
        iu
    ],
    [
        "APIConnectionTimeoutError",
        iT
    ],
    [
        "APIConnectionError",
        Su
    ],
    [
        "BadRequestError",
        S0t
    ],
    [
        "AuthenticationError",
        jBe
    ],
    [
        "PermissionDeniedError",
        w0t
    ],
    [
        "NotFoundError",
        WBe
    ],
    [
        "ConflictError",
        v0t
    ],
    [
        "UnprocessableEntityError",
        E0t
    ],
    [
        "RateLimitError",
        k0t
    ],
    [
        "InternalServerError",
        T0t
    ],
    [
        "APIError",
        xt
    ],
    [
        "RetryableError",
        nin
    ],
    [
        "WorkloadIdentityError",
        hu
    ],
    [
        "AnthropicError",
        Xn
    ],
    [
        "ClaudeError",
        VPe
    ]
];
const S = /_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS$/;
function X7r(e, r = B) {
    let o = typeof e.constructor?.name === "string" ? e.constructor.name.replace(S, "") : undefined;
    let n = r && e instanceof VPe && e.name === o;
    let c = ((typeof e.name === "string" && e.name !== "Error" && !n ? e.name : undefined) || (!r && FH(o) !== undefined ? o : w.find(([, i])=>e instanceof i)?.[0]) || "Error").replace(S, "");
    return FH(c) ?? "Error";
}
const j = 20;
function G(e, origin, o) {
    let n = jrn(e);
    let t = SIs(n);
    let error_frames = n.slice(0, j);
    let c = Lq(e);
    let message = t && c === undefined ? `thrown outside the Claude Code bundle (${o})` : Ovs(Ivs(e, c ?? x(e) ?? e.message ?? String(e)));
    let A = vIs({
        name: o,
        message
    }, error_frames);
    let { version, sourcemapGroup } = F({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }.DD_SOURCEMAP_GROUP);
    let fingerprint = v(o, error_frames);
    let user_bucket = D();
    let model = M();
    let T = typeof Bun !== "undefined" && true;
    let m = Vr(e);
    let p = mOo(e);
    let entrypoint = a.CLAUDE_CODE_ENTRYPOINT === undefined ? "cli" : dp() ?? "other";
    let d = a1();
    let g = psn();
    let _ = eEr();
    let host_os_release = X(release());
    return {
        ddtags: [
            `service:${service}`,
            "team:claude-code",
            `version:${version}`,
            "env:external",
            `origin:${origin}`,
            `platform:${O()}`,
            `os_release:${host_os_release}`,
            `user_bucket:${user_bucket}`,
            `entrypoint:${entrypoint}`,
            `node_version:${process.versions.node}`,
            "bun_version:1.4.3",
            `is_native_runtime:${T}`,
            ...model ? [
                `model:${model}`
            ] : [],
            ...m ? [
                `error_code:${m}`
            ] : [],
            ...p !== undefined ? [
                `child_exit_status:${p}`
            ] : [],
            ...d ? [
                `session_kind:${d}`
            ] : [],
            ...d ? [
                `has_attacher:${bu() ? "1" : "0"}`
            ] : [],
            ...g ? [
                `renderer_mode:${g}`
            ] : [],
            ..._ ? [
                `remote_control_lane:${_}`
            ] : [],
            ...ZIt() ? [
                "projects_session:1"
            ] : []
        ].join(","),
        service,
        hostname: "claude-code",
        status: "error",
        message: `${o}: ${message}`.slice(0, 4000),
        timestamp: new Date().toISOString(),
        error: {
            kind: o,
            message: message.slice(0, 4000),
            stack: A.slice(0, 16000),
            fingerprint,
            handling: origin === "logError" ? "handled" : "unhandled"
        },
        version,
        sourcemap_group: sourcemapGroup,
        env: "external",
        user_bucket,
        origin,
        host_platform: O(),
        host_os_release,
        host_name_redacted: hct().slice(0, 12),
        entrypoint,
        node_version: process.versions.node,
        bun_version: "1.4.3",
        ...model && {
            model
        },
        error_frames,
        feature_flags: U()
    };
}
const K = new Set([
    "APIUserAbortError",
    "AuthenticationError",
    "McpSessionExpiredError"
]);
const V = [
    {
        messagePrefix: "File does not exist",
        topFrameIncludes: "FileReadTool.ts"
    }
];
const z = [
    {
        topFile: "node:net",
        topFunction: "internalConnectMultipleTimeout"
    },
    {
        topFile: "node:_http_server",
        topFunction: "#onClose"
    }
];
function H(e) {
    let r = jrn(e, 20);
    let o = r[0];
    if (!o || r.some(dGn)) {
        return false;
    }
    return z.some((n)=>o.file === n.topFile && o.function === n.topFunction);
}
function Y() {
    return a.CLAUDE_CODE_REMOTE === true || Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID) || Boolean(a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE);
}
function q(e, r) {
    if (K.has(r)) {
        return true;
    }
    if (K1() && !Y() && xs(e) && e.code !== undefined && yOo.has(e.code) && (e.syscall === "mkdir" || e.syscall === "open") && O() !== "windows") {
        return true;
    }
    let o = e.message ?? "";
    return V.some((n)=>o.startsWith(n.messagePrefix) && (e.stack?.split(`
`).find((t)=>t.trim().startsWith("at ")) ?? "").includes(n.topFrameIncludes));
}
function X(e) {
    let r = /^(\d+)\.(\d+)/.exec(e);
    if (r) {
        return `${r[1]}.${r[2]}`;
    }
    return "unknown";
}
function JDe(e, r = "logError") {
    if (!Qbs()) {
        return;
    }
    try {
        let o = W(e);
        let n = X7r(o);
        if (r === "logError" && q(o, n)) {
            return;
        }
        if ((r === "unhandled_rejection" || r === "uncaught_exception") && H(o)) {
            return;
        }
        if (gfo()) {
            return;
        }
        let t = G(o, r, n);
        hfo(t);
    } catch  {}
}
export { X7r, JDe };
