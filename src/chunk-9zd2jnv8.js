import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { x, l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, X } from "/$bunfs/root/chunk-bd805sh6.js";
import { I, ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { $d } from "/$bunfs/root/chunk-4dqcjnmb.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Al, DP } from "/$bunfs/root/chunk-z0brrd3r.js";
import { xu, bit, Sit, wit } from "/$bunfs/root/chunk-tvg3w9xe.js";
import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { tN } from "/$bunfs/root/chunk-sfgejbsr.js";
import { CN, fC, Wz, cf, ES } from "/$bunfs/root/chunk-55x53sfe.js";
import { Ml } from "/$bunfs/root/chunk-mr6t12zw.js";
import { Ede } from "/$bunfs/root/chunk-5k3c7ad7.js";
import { uO } from "/$bunfs/root/chunk-f0v3xmb1.js";
import { KCr } from "/$bunfs/root/chunk-h7cbghgp.js";
import { Ko } from "/$bunfs/root/chunk-7qc48pza.js";
import { spawn } from "child_process";
import { constants } from "fs";
import { access, stat, open } from "fs/promises";
import { join, resolve } from "path";
import { createServer } from "http";
import { randomBytes, timingSafeEqual } from "crypto";
import { createServer as createServer_1, connect } from "net";
import { connect as connect_1 } from "tls";
const xwe = "unknown";
const KPr = /^[A-Za-z0-9_.-]{1,64}$/;
function a9e(e) {
    if (!e || e === "unknown" || !KPr.test(e) || e.startsWith("-") || /^\.{1,2}$/.test(e)) {
        return;
    }
    return e;
}
function P0t(e) {
    return Array.from(e.slice(0, 128)).map((n)=>{
        if (/[A-Za-z0-9_.-]/.test(n)) {
            return n;
        }
        return `\\u{${n.codePointAt(0).toString(16)}}`;
    }).join("");
}
const ae = 5000;
function Q() {
    return {
        ...process.env,
        SELF_HOSTED_RUNNER_POOL_SECRET: undefined,
        SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: undefined,
        SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_COMMAND: undefined,
        SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_FILE: undefined
    };
}
function I0t(e, n = "linux") {
    if (n !== "win32") {
        return;
    }
    switch(e){
        case "--hooks-dir":
            throw Error("--hooks-dir is not supported on Windows: lifecycle hooks currently require a Linux or macOS host, because they are POSIX executables that the runner spawns directly (no shell, no .cmd/.ps1/.exe resolution). Run the runner on a Linux or macOS host to use hooks, or drop --hooks-dir / SELF_HOSTED_RUNNER_HOOKS_DIR to use the built-in checkout and command behavior. See docs/self-hosted-runners-guide.md § Lifecycle hooks.");
        case "orchestrator mode":
            throw Error("orchestrator mode is not supported on Windows: it is driven by the spawn-runner lifecycle hook, and lifecycle hooks currently require a Linux or macOS host because they are POSIX executables spawned directly (no shell, no .cmd/.ps1/.exe resolution). Run the orchestrator on a Linux or macOS host; the runners it provisions are unaffected. See docs/self-hosted-runners-guide.md § Lifecycle hooks.");
    }
}
async function Xpt(e, n) {
    if (!e) {
        return null;
    }
    let o = join(e, n);
    try {
        if (!(await Ml(stat(o), ae, `stat ${o}`)).isFile()) {
            return null;
        }
        await Ml(access(o, constants.X_OK), ae, `access ${o}`);
        return o;
    } catch  {
        return null;
    }
}
const gVn = [
    [
        "core.fsmonitor",
        ""
    ],
    [
        "core.askPass",
        ""
    ],
    [
        "log.showSignature",
        "false"
    ],
    [
        "tag.forceSignAnnotated",
        "false"
    ],
    [
        "init.templateDir",
        ""
    ],
    [
        "gpg.ssh.defaultKeyCommand",
        ""
    ],
    [
        "push.gpgSign",
        "false"
    ],
    [
        "protocol.ext.allow",
        "never"
    ],
    [
        "protocol.fd.allow",
        "never"
    ],
    [
        "protocol.git.allow",
        "never"
    ],
    [
        "protocol.file.allow",
        "user"
    ],
    [
        "merge.verifySignatures",
        "false"
    ],
    [
        "core.alternateRefsCommand",
        KCr
    ],
    [
        "core.attributesFile",
        "/dev/null"
    ]
];
const IMs = {
    GIT_PROXY_COMMAND: "",
    GIT_ALLOW_PROTOCOL: "https:http:ssh",
    GIT_EDITOR: ":",
    GIT_SEQUENCE_EDITOR: ":",
    GIT_SSH_COMMAND: "ssh"
};
function DOo(e = Q()) {
    let n;
    for (let [o, u] of Object.entries(IMs)){
        if (e[o] !== undefined) {
            continue;
        }
        n ??= {
            ...e
        };
        n[o] = o === "GIT_SSH_COMMAND" && e.GIT_SSH !== undefined ? `'${e.GIT_SSH.replace(/'/g, "'\\''")}'` : u;
    }
    if (OMs(e) === "handedOn") {
        n ??= {
            ...e
        };
        n.GIT_ASKPASS = e.SSH_ASKPASS;
    }
    return n ?? e;
}
function OMs(e = Q()) {
    if (e.GIT_ASKPASS !== undefined || HMs("core.askPass", e)) {
        return "own";
    }
    if (e.SSH_ASKPASS) {
        return "handedOn";
    }
    return "none";
}
const qe = 256;
function MMs(e = Q()) {
    let n = /^\s*\+?(\d+)$/.exec(e.GIT_CONFIG_COUNT ?? "");
    let o = n ? parseInt(n[1], 10) : 0;
    if (!Number.isSafeInteger(o) || o === 0) {
        return {
            count: 0,
            announced: 0
        };
    }
    if (o > qe) {
        return {
            count: 0,
            discarded: "too-many",
            announced: o
        };
    }
    if (e[`GIT_CONFIG_KEY_${o - 1}`] === undefined) {
        return {
            count: 0,
            discarded: "sparse",
            announced: o
        };
    }
    return {
        count: o,
        announced: o
    };
}
function Ae(e) {
    return MMs(e).count;
}
function HMs(e, n = Q()) {
    let o = Ae(n);
    let u = e.toLowerCase();
    for(let r = 0; r < o; r++){
        if ((n[`GIT_CONFIG_KEY_${r}`] ?? "").toLowerCase() === u) {
            return true;
        }
    }
    return false;
}
function hVn(e, n) {
    let o = [
        [
            "gpg.program",
            e.gpg
        ],
        [
            "gpg.openpgp.program",
            e.gpg
        ],
        [
            "gpg.x509.program",
            e.gpgsm
        ]
    ];
    if (n) {
        o.push([
            "gpg.ssh.program",
            e.sshKeygen
        ]);
    }
    return o;
}
function Oe(e, n, o) {
    if (!n?.length) {
        return e;
    }
    let u = Ae(e);
    let r = {
        ...e
    };
    let n_length = n.length;
    for(let s = 0; s < u; s++){
        delete r[`GIT_CONFIG_KEY_${s}`];
        delete r[`GIT_CONFIG_VALUE_${s}`];
    }
    for(let s = 0; s < u; s++){
        let i = e[`GIT_CONFIG_KEY_${s}`];
        let a = e[`GIT_CONFIG_VALUE_${s}`];
        if (i !== undefined) {
            r[`GIT_CONFIG_KEY_${n_length + s}`] = i;
        }
        if (a !== undefined) {
            r[`GIT_CONFIG_VALUE_${n_length + s}`] = a;
        }
    }
    n.forEach(([s, i], a)=>{
        r[`GIT_CONFIG_KEY_${a}`] = s;
        r[`GIT_CONFIG_VALUE_${a}`] = i;
    });
    r.GIT_CONFIG_COUNT = String(n_length + u);
    if (o?.legacyParams) {
        let s = (d)=>`'${d.replace(/'/g, "'\\''")}'`;
        let i = n.map(([d, p])=>s(`${d}=${p}`));
        let a = [];
        for(let d = 0; d < u; d++){
            let p = e[`GIT_CONFIG_KEY_${d}`];
            if (p !== undefined) {
                a.push(s(`${p}=${e[`GIT_CONFIG_VALUE_${d}`] ?? ""}`));
            }
        }
        r.GIT_CONFIG_PARAMETERS = [
            ...i,
            ...a,
            ...e.GIT_CONFIG_PARAMETERS ? [
                e.GIT_CONFIG_PARAMETERS
            ] : []
        ].join(" ");
    }
    return r;
}
function Le(gitConfigPins, gitEnvironment, gitConfigLegacyParams) {
    let u = gitEnvironment?.commandScopeEntries ?? [];
    let r = gitConfigLegacyParams && u.some(([t])=>t.includes("=")) ? [] : u;
    return [
        ...gitConfigPins ?? [],
        ...r
    ];
}
class l9e extends x {
    exitCode;
    constructor(e, n, o){
        super(e, o);
        this.name = "CheckoutHookFailedError";
        this.exitCode = n;
    }
}
async function YPr(e) {
    let o = {
        ...Q(),
        ...e.gitEnvironment?.envOverrides,
        ...false,
        CLAUDE_RUNNER_SESSION_ID: e.sessionId.replace(/^cse_/, "session_"),
        CLAUDE_RUNNER_SESSION_UUID: uO(e.sessionId),
        CLAUDE_RUNNER_REPO_URL: e.repoUrl,
        CLAUDE_RUNNER_REPO_REF: e.repoRef ?? "",
        CLAUDE_RUNNER_CHECKOUT_PATH: e.checkoutPath,
        CLAUDE_RUNNER_API_BASE_URL: e.apiBaseUrl,
        CLAUDE_RUNNER_GIT_MOUNT_URL: e.gitMountUrl,
        CLAUDE_RUNNER_CLIENT_PLATFORM: a9e(e.clientPlatform),
        CLAUDE_CODE_SESSION_ACCESS_TOKEN: e.sessionAccessToken
    };
    e.onStatus(`[runner:hook] checkout ${$d(e.repoUrl)} -> ${e.checkoutPath} (via ${e.hookPath})`);
    let u = [];
    let r = (i)=>{
        try {
            e.onStderrLine?.(i);
        } catch  {}
    };
    let t = false;
    await new Promise((resolvePromise, rejectPromise)=>{
        let d = spawn(e.hookPath, [], {
            cwd: e.cwd,
            env: Oe(e.gitConfigPins?.length ? DOo(o) : o, Le(e.gitConfigPins, e.gitEnvironment, e.gitConfigLegacyParams), {
                legacyParams: e.gitConfigLegacyParams
            }),
            stdio: [
                "ignore",
                "pipe",
                "pipe"
            ],
            windowsHide: true,
            ...Al("hooks")
        });
        let p;
        let h = ()=>{
            t = true;
            e.onDebug(`[runner:hook:checkout] abort received, sending SIGTERM to pid=${d.pid}`);
            d.kill("SIGTERM");
            p = setTimeout((w, y)=>{
                y(`[runner:hook:checkout] still running after SIGTERM, sending SIGKILL to pid=${w.pid}`);
                w.kill("SIGKILL");
            }, 5000, d, e.onDebug);
        };
        if (e.signal?.aborted) {
            h();
        } else {
            e.signal?.addEventListener("abort", h, {
                once: true
            });
        }
        let R = "";
        let E = "";
        let S = (w, y)=>{
            let b = w.split(`
`);
            let L = b.pop() ?? "";
            for (let M of b){
                let F = $d(M);
                e.onDebug(`[runner:hook:checkout] ${F}`);
                if (y) {
                    u.push(F + `
`);
                    r(F);
                }
            }
            if (y) {
                let M = u.reduce((acc, item)=>acc + item.length, 0);
                while(M > 4096 && u.length > 1){
                    M -= u.shift().length;
                }
            }
            return L;
        };
        d.stdout.on("data", (w)=>{
            R += w.toString();
            R = S(R, false);
        });
        d.stderr.on("data", (w)=>{
            E += w.toString();
            E = S(E, true);
        });
        d.on("error", (w)=>{
            if (p) {
                clearTimeout(p);
            }
            e.signal?.removeEventListener("abort", h);
            rejectPromise(w);
        });
        d.on("close", (w)=>{
            if (p) {
                clearTimeout(p);
            }
            e.signal?.removeEventListener("abort", h);
            if (R) {
                e.onDebug(`[runner:hook:checkout] ${$d(R)}`);
            }
            if (E) {
                let y = $d(E);
                e.onDebug(`[runner:hook:checkout] ${y}`);
                u.push(y);
                r(y);
            }
            if (t) {
                rejectPromise(Error("checkout hook aborted"));
            } else if (w === 0) {
                resolvePromise();
            } else {
                let b = `checkout hook failed (exit ${w}): ${u.join("").slice(-4096)}`;
                rejectPromise(w === null ? new x(b, "checkout hook killed by signal") : new l9e(b, w, `exited with status ${w}`));
            }
        });
    });
    let s;
    try {
        s = await Ml(stat(e.checkoutPath), ae, `stat ${e.checkoutPath}`);
    } catch (error) {
        if (z(error)) {
            throw new l9e(`checkout hook exited 0 but ${e.checkoutPath} does not exist`, 0, "exited 0 but did not create the checkout directory");
        }
        throw error;
    }
    if (!s.isDirectory()) {
        throw new l9e(`checkout hook exited 0 but ${e.checkoutPath} is not a directory`, 0, "exited 0 but the checkout path is not a directory");
    }
    if (process.env.CLAUDE_RUNNER_SKIP_GIT_VERIFY !== "1") {
        try {
            await Ml(stat(join(e.checkoutPath, ".git")), ae, `stat ${e.checkoutPath}/.git`);
        } catch (error) {
            if (z(error)) {
                throw new l9e(`checkout hook succeeded but ${e.checkoutPath}/.git is missing (for non-git SCMs, set CLAUDE_RUNNER_SKIP_GIT_VERIFY=1 in the runner's environment)`, 0, "exited 0 but left no .git in the checkout directory");
            }
            throw error;
        }
    }
}
const Re = 2000;
class Ce {
    inFlight = 0;
    increment() {
        this.inFlight++;
    }
    decrement() {
        this.inFlight--;
    }
}
const Je = new q(()=>new Ce);
function $e() {
    return Je.of(B().host);
}
function yVn() {
    return $e().inFlight;
}
async function XPr(e) {
    let n = {
        ...Q(),
        ...e.gitEnvironment?.envOverrides,
        CLAUDE_RUNNER_SESSION_ID: e.sessionId.replace(/^cse_/, "session_"),
        CLAUDE_RUNNER_SESSION_UUID: uO(e.sessionId),
        CLAUDE_RUNNER_EXIT_REASON: e.exitReason,
        CLAUDE_RUNNER_DEBUG_LOG_PATH: e.debugLogPath,
        CLAUDE_RUNNER_WORKSPACE_PATHS: e.workspacePaths.join(":"),
        CLAUDE_RUNNER_API_BASE_URL: e.apiBaseUrl,
        CLAUDE_RUNNER_CLIENT_PLATFORM: a9e(e.clientPlatform),
        CLAUDE_CODE_SESSION_ACCESS_TOKEN: e.sessionAccessToken
    };
    e.onStatus(`[runner:hook] post-session hook starting (session exit: ${e.exitReason}, budget ${e.timeoutMs}ms, via ${e.hookPath})`);
    let o = Date.now();
    let u = ()=>{};
    let r = new Promise((resolvePromise)=>{
        u = resolvePromise;
    });
    let t = spawn(e.hookPath, [], {
        cwd: e.cwd,
        env: Oe(e.gitConfigPins?.length ? DOo(n) : n, Le(e.gitConfigPins, e.gitEnvironment, e.gitConfigLegacyParams), {
            legacyParams: e.gitConfigLegacyParams
        }),
        stdio: [
            "ignore",
            "pipe",
            "pipe"
        ],
        windowsHide: true,
        ...Al("hooks"),
        detached: true
    });
    let s = $e();
    s.increment();
    let i = false;
    let a = false;
    let d = [];
    let p = ()=>{
        if (i) {
            return;
        }
        i = true;
        s.decrement();
        for (let y of d){
            clearTimeout(y);
        }
        u();
    };
    let h = (y)=>{
        let t_pid = t.pid;
        if (t_pid === undefined) {
            t.kill(y);
            return;
        }
        if (t_pid <= 1) {
            return;
        }
        try {
            process.kill(-t_pid, y);
        } catch  {
            t.kill(y);
        }
    };
    let R = e.timeoutMs > 0 ? e.timeoutMs : 1;
    d.push(setTimeout((y, b, L, M)=>{
        if (b.exitCode !== null || b.signalCode !== null) {
            return;
        }
        a = true;
        y(`[runner:hook:post-session] timed out after ${L}ms, sending SIGTERM to the hook's process group (pgid=${b.pid})`);
        M("SIGTERM");
    }, R, e.onDebug, t, R, h), setTimeout((y, b, L)=>{
        if (!a) {
            return;
        }
        y(`[runner:hook:post-session] still running after SIGTERM, sending SIGKILL to the hook's process group (pgid=${b.pid})`);
        L("SIGKILL");
    }, Math.min(R + Re, 2147483647), e.onDebug, t, h), setTimeout((y, b, L)=>{
        y(`[runner:hook:post-session] resolved without 'close' (${Date.now() - L}ms, grandchild likely holding stdio pipes; ignored)`);
        b();
    }, Math.min(R + Re + 1000, 2147483647), e.onStatus, p, o));
    let E = "";
    let S = "";
    let w = (y)=>{
        let b = y.split(`
`);
        let L = b.pop() ?? "";
        for (let M of b){
            e.onDebug(`[runner:hook:post-session] ${$d(M)}`);
        }
        return L;
    };
    t.stdout.on("data", (y)=>{
        E += y.toString();
        E = w(E);
    });
    t.stderr.on("data", (y)=>{
        S += y.toString();
        S = w(S);
    });
    t.on("error", (y)=>{
        e.onStatus(`[runner:hook:post-session] spawn error (ignored): ${$d(y instanceof Error ? y.message : String(y))}`);
        p();
    });
    t.on("close", (y)=>{
        if (E) {
            e.onDebug(`[runner:hook:post-session] ${$d(E)}`);
        }
        if (S) {
            e.onDebug(`[runner:hook:post-session] ${$d(S)}`);
        }
        let b = Date.now() - o;
        if (a) {
            e.onStatus(`[runner:hook:post-session] killed after timeout (${b}ms, ignored)`);
        } else if (y !== 0) {
            e.onStatus(`[runner:hook:post-session] exited ${y ?? "via signal"} (${b}ms, ignored)`);
        } else {
            e.onStatus(`[runner:hook:post-session] done (exit 0, ${b}ms)`);
        }
        p();
    });
    return r;
}
const none = [
    "allow",
    "environment",
    "soft_deny"
];
const ue = {
    allow: "CCR_AUTO_MODE_ALLOW",
    environment: "CCR_AUTO_MODE_ENVIRONMENT",
    soft_deny: "CCR_AUTO_MODE_SOFT_DENY"
};
function Ze(e) {
    return e.trim().length > 0 && !bit(e) && !Sit(e) && wit(e) === null;
}
function Qe(e) {
    if (!Array.isArray(e) || !e.every((u)=>u === null || typeof u === "string")) {
        return null;
    }
    let n = new Set(e);
    n.delete(xu);
    let entries = [
        ...n
    ].filter((u)=>u !== null && Ze(u));
    return {
        entries,
        refused: n.size - entries.length
    };
}
function xe(e) {
    let rules = {};
    let refused = {};
    for (let r of none){
        let t = e?.[r];
        if (t === undefined) {
            continue;
        }
        let s = Qe(t);
        if (s === null) {
            refused[r] = "unreadable";
            continue;
        }
        if (s.refused > 0) {
            refused[r] = s.refused;
        }
        if (s.entries.length > 0) {
            rules[r] = s.entries;
        }
    }
    let grantsWithheld = (refused.soft_deny !== undefined || refused.environment !== undefined) && (rules.allow !== undefined || rules.environment !== undefined);
    if (grantsWithheld) {
        delete rules.allow;
        delete rules.environment;
    }
    return {
        rules,
        refused,
        grantsWithheld
    };
}
function Ne(rules) {
    let n = {};
    for (let o of none){
        let u = rules[o];
        if (u !== undefined) {
            n[o] = [
                xu,
                ...u
            ];
        }
    }
    if (Object.keys(n).length > 0) {
        return n;
    }
}
const en = {
    all: [],
    "no-allow": [
        "allow"
    ],
    none
};
const Ie = 2097152;
const cin = "CCR_AUTO_MODE_APPLY";
function VPr(e) {
    let n = e.environment_variables ?? {};
    return Object.hasOwn(n, cin) && n[cin] === "1";
}
function EOo(e) {
    if (!VPr(e)) {
        return {
            allow: {
                state: "absent"
            },
            environment: {
                state: "absent"
            },
            soft_deny: {
                state: "absent"
            }
        };
    }
    let n = e.environment_variables ?? {};
    return {
        allow: me(n, ue.allow),
        environment: me(n, ue.environment),
        soft_deny: me(n, ue.soft_deny)
    };
}
const i9e = "no-allow";
function kOo(e, n) {
    let carried = {
        ...e
    };
    let withheld = [];
    for (let r of en[n]){
        let t = e[r];
        let s = t.state === "decoded" && Array.isArray(t.value) && t.value.length === 0;
        if (t.state !== "absent" && !s) {
            withheld.push(r);
        }
        carried[r] = {
            state: "absent"
        };
    }
    return {
        carried,
        withheld
    };
}
const nn = "nothing on this runner needs changing; if an admin of your organization wrote the entry, a line break, some emoji or a blank rule can cause this";
function TOo(e) {
    let n = {};
    for (let i of none){
        let a = e[i];
        if (a.state !== "absent") {
            n[i] = a.state === "decoded" ? a.value : null;
        }
    }
    let { rules, refused, grantsWithheld } = xe(n);
    let statusLines = [];
    let refusedCounts = {
        refused_entries: 0,
        unreadable_lists: 0
    };
    for (let i of none){
        let a = e[i];
        let d = refused[i];
        if (a.state === "absent" || d === undefined) {
            continue;
        }
        if (d === "unreadable") {
            refusedCounts.unreadable_lists++;
        } else {
            refusedCounts.refused_entries += d;
        }
        statusLines.push(d === "unreadable" ? `ignoring the server's autoMode.${i} list for this session: its ${a.carrier} value ${a.state === "decoded" ? "is not an array of strings" : `is not valid JSON text, or is longer than ${Ie} characters`} (a server-side fault: nothing on this runner needs changing)` : `ignoring ${d} of the entries in the server's autoMode.${i} list (${a.carrier}) for this session: null, blank, or containing a control character, an invisible character or markup reserved for the auto mode classifier's prompt; ${grantsWithheld && i !== "soft_deny" ? "any other entries in the list are not applied either (see below)" : "any other entries in the list still apply"} (${nn})`);
    }
    if (grantsWithheld) {
        let i = [
            "allow",
            "environment"
        ].filter((a)=>e[a].state !== "absent").map((a)=>`autoMode.${a}`).join(" or ");
        statusLines.push(`not applying any ${i} entries from the server for this session: part or all of its autoMode.environment or autoMode.soft_deny list was ignored (see above), and without it the ${i} entries could allow more than the server meant. Auto mode still works but may block more actions than usual (nothing on this runner needs changing)`);
    }
    return {
        autoMode: Ne(rules),
        statusLines,
        grantsWithheld,
        refusedCounts
    };
}
function me(e, carrier) {
    let o = Object.hasOwn(e, carrier) ? e[carrier] : undefined;
    if (o === undefined || o === "") {
        return {
            state: "absent"
        };
    }
    if (typeof o !== "string" || o.length > Ie) {
        return {
            state: "undecodable",
            carrier
        };
    }
    try {
        return {
            state: "decoded",
            carrier,
            value: X(o)
        };
    } catch  {
        return {
            state: "undecodable",
            carrier
        };
    }
}
const GBe = ({
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.296",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-09T01:31:52Z",
    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
}).VERSION.replace(/^v/, "").split(/[-+]/)[0];
const tn = {
    all: "SERVER_AUTO_MODE_LISTS_ALL",
    "no-allow": "SERVER_AUTO_MODE_LISTS_NO_ALLOW",
    none: "SERVER_AUTO_MODE_LISTS_NONE"
};
const rn = /^[a-zA-Z0-9_-]+$/;
const qPr = 10000;
const He = 256;
function Ue(e) {
    return typeof e === "string" && e.length <= He && rn.test(e);
}
function y6(e, n) {
    if (!Ue(e)) {
        throw Error(`Invalid ${n}: contains unsafe characters or exceeds ${He} characters`);
    }
    return e;
}
function _e(poolSecret) {
    return {
        "User-Agent": Ko(),
        Authorization: `Bearer ${poolSecret}`,
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01",
        "x-self-hosted-runner-version": GBe
    };
}
function te(e) {
    return {
        "User-Agent": Ko(),
        Authorization: `Bearer ${e}`,
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01",
        "x-self-hosted-runner-version": GBe
    };
}
function re(e) {
    return {
        Authorization: `Bearer ${e}`,
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01"
    };
}
function Me(data) {
    return de(data, "type");
}
function de(e, n) {
    if (e !== null && typeof e === "object" && "error" in e && e.error !== null && typeof e.error === "object") {
        let o = Reflect.get(e.error, n);
        if (typeof o === "string") {
            return o;
        }
        return undefined;
    }
}
function on(data) {
    let n = de(data, "reason");
    if (Ede(n)) {
        return n;
    }
}
function sn(data) {
    return de(data, "resource");
}
const an = "self_hosted_runners_disabled_by_org";
function U(httpStatus, data, o) {
    if (httpStatus >= 200 && httpStatus < 300) {
        return;
    }
    let serverMessage = tN(data);
    let r = Me(data);
    let t = {
        errorType: Ede(r) ? r : undefined,
        errorReason: on(data),
        serverMessage
    };
    switch(httpStatus){
        case 401:
            throw Object.assign(Error(`${o}: Authentication failed (401)${serverMessage ? `: ${serverMessage}` : ""}. Check your credentials.`), {
                isAuthFailure: true,
                httpStatus,
                ...t
            });
        case 403:
            {
                let s = sn(data) === an;
                throw Object.assign(Error(`${o}: Access denied (403)${serverMessage ? `: ${serverMessage}` : ""}. ${s ? "The organization is not enabled for self-hosted environments." : "Token may be revoked."}`), {
                    isAuthFailure: true,
                    ...s && {
                        isSelfHostedDisabledByOrg: true
                    },
                    httpStatus
                });
            }
        case 404:
            throw Object.assign(Error(serverMessage ?? `${o}: Not found (404). The resource may not exist.`), {
                isNotFound: true,
                httpStatus,
                errorType: Me(data),
                resourceType: de(data, "resource_type")
            });
        case 409:
            if (t.errorType === "session_not_active") {
                throw Object.assign(Error("Session not active (409): the session was archived or deleted."), {
                    isEpochMismatch: true,
                    isSessionNotActive: true,
                    httpStatus,
                    ...t
                });
            }
            throw Object.assign(Error(`${o}: Epoch conflict (409)${serverMessage ? `: ${serverMessage}` : ""}. Another runner has taken over this session.`), {
                isEpochMismatch: true,
                httpStatus,
                ...t
            });
        case 429:
            throw Object.assign(Error(`${o}: Rate limited (429). Polling too frequently.`), {
                httpStatus
            });
        default:
            throw Object.assign(Error(`${o}: Failed with status ${httpStatus}${serverMessage ? `: ${serverMessage}` : ""}`), {
                httpStatus,
                ...t
            });
    }
}
function nfe(e) {
    if (e !== null && typeof e === "object") {
        let n = e;
        if (typeof n.httpStatus === "number") {
            return n.httpStatus;
        }
        if (typeof n.response?.status === "number") {
            return n.response.status;
        }
    }
}
function AOo(e) {
    let n = e !== null && typeof e === "object" ? e : {};
    return {
        errorType: "errorType" in n && typeof n.errorType === "string" ? n.errorType : undefined,
        errorReason: "errorReason" in n && typeof n.errorReason === "string" ? n.errorReason : undefined,
        serverMessage: "serverMessage" in n && typeof n.serverMessage === "string" ? n.serverMessage : undefined
    };
}
function qPe(e) {
    if (e !== null && typeof e === "object") {
        let o = e;
        if (o.name === "AbortError" || o.code === "ERR_CANCELED") {
            return false;
        }
    }
    let n = nfe(e);
    return n === undefined || n === 429 || n >= 500;
}
const mVn = [
    "transport",
    "timeout",
    "5xx",
    "429",
    "4xx"
];
function x0t(e) {
    if (e !== null && typeof e === "object") {
        let o = e.code;
        if (o === "ECONNABORTED" || o === "ETIMEDOUT") {
            return "timeout";
        }
    }
    let n = nfe(e);
    if (n === undefined) {
        return "transport";
    }
    if (n >= 500) {
        return "5xx";
    }
    if (n === 429) {
        return "429";
    }
    return "4xx";
}
function din() {
    return {
        transport: 0,
        timeout: 0,
        "5xx": 0,
        429: 0,
        "4xx": 0
    };
}
function uin(e) {
    function n(r) {
        e.onDebug?.(r);
    }
    let o = 0;
    let u = 30;
    return {
        async registerRunner ({ clientLabel, lockToAccountId, useAnthropicGitProxy, serverAutoModeLists } = {}) {
            n("[runner:api] POST /v1/code/runners/self-hosted/runners/register");
            let d = {
                runner_version: GBe,
                use_anthropic_git_proxy: useAnthropicGitProxy ?? false,
                server_auto_mode_lists: tn[serverAutoModeLists ?? i9e]
            };
            if (clientLabel) {
                d.client_label = clientLabel;
            }
            if (lockToAccountId) {
                d.lock_to_account_id = lockToAccountId;
            }
            let p = await At.post(`${e.baseUrl}/v1/code/runners/self-hosted/runners/register`, d, {
                headers: _e(e.poolSecret),
                timeout: 15000,
                validateStatus: (h)=>h < 500
            });
            U(p.status, p.data, "RegisterRunner");
            y6(p.data.runner_id, "runner_id");
            n(`[runner:api] RegisterRunner -> ${p.status} runner_id=${p.data.runner_id}`);
            return p.data;
        },
        async pollSpawnHints (r, t) {
            let s = await At.post(`${e.baseUrl}/v1/code/runners/self-hosted/spawn-hints/poll`, r, {
                headers: _e(e.poolSecret),
                timeout: 30000,
                signal: t,
                validateStatus: (h)=>h < 500
            });
            U(s.status, s.data, "PollSpawnHints");
            let server_date = typeof s.headers?.date === "string" ? s.headers.date : null;
            let a = (h)=>({
                    ...h,
                    session_uuid: h.session_uuid ?? "",
                    attempt: h.attempt ?? 0,
                    work_order_jwt: h.work_order_jwt ?? "",
                    sources: h.sources ?? []
                });
            let slots = s.data.slots;
            let p = {
                hints: (s.data.hints ?? []).map(a),
                warm_hints: (s.data.warm_hints ?? []).map(a),
                pending_count: s.data.pending_count ?? 0,
                backing_off_count: s.data.backing_off_count ?? 0,
                circuit_broken_count: s.data.circuit_broken_count ?? 0,
                pool_pending_session_count: s.data.pool_pending_session_count ?? 0,
                pool_active_session_count: s.data.pool_active_session_count ?? 0,
                ...typeof slots === "number" && Number.isInteger(slots) && slots >= 1 && {
                    slots
                },
                server_date
            };
            n(`[runner:api] PollSpawnHints -> ${s.status} hints=${p.hints.length} warm=${p.warm_hints.length} pending=${p.pending_count} backing_off=${p.backing_off_count} circuit_broken=${p.circuit_broken_count} slots=${p.slots ?? "-"}`);
            return p;
        },
        async nackSpawnHint (r, t) {
            n(`[runner:api] POST /v1/code/runners/self-hosted/spawn-hints/nack session=${r.session_uuid} attempt=${r.attempt} retryable=${r.retryable}${r.failure_kind ? ` cause=${r.failure_kind}` : ""}`);
            let error = r.error.length > 512 ? r.error.slice(0, 512) : r.error;
            let i = await At.post(`${e.baseUrl}/v1/code/runners/self-hosted/spawn-hints/nack`, {
                ...r,
                error
            }, {
                headers: _e(e.poolSecret),
                timeout: 15000,
                signal: t,
                validateStatus: (a)=>a < 500
            });
            U(i.status, i.data, "NackSpawnHint");
            n(`[runner:api] NackSpawnHint -> ${i.status}`);
        },
        async pollWork (r, t, available_capacity, i, wake_source, warmup_complete) {
            y6(t, "runnerId");
            let p = o;
            o = 0;
            let h = await At.post(`${e.baseUrl}/v1/code/runners/self-hosted/runners/${t}/poll`, {
                available_capacity,
                ...wake_source !== undefined && {
                    wake_source
                },
                ...warmup_complete !== undefined && {
                    warmup_complete
                }
            }, {
                headers: te(r),
                timeout: qPr,
                signal: i,
                validateStatus: (b)=>b < 500
            });
            U(h.status, h.data, "PollWork");
            let h_data = h.data;
            if (typeof h_data !== "object" || h_data === null || Array.isArray(h_data)) {
                throw Error("PollWork: response body is not a JSON object (an intercepting proxy may have answered) — rejecting the malformed poll response");
            }
            let assignment_ids = h.data.assignment_ids;
            if (assignment_ids !== undefined && assignment_ids !== null && !Array.isArray(assignment_ids)) {
                throw Error("PollWork: response assignment_ids is not an array — rejecting the malformed poll response");
            }
            if (Array.isArray(assignment_ids) && !assignment_ids.every(Ue)) {
                throw Error("PollWork: response assignment_ids contains a malformed session id — rejecting the malformed poll response");
            }
            let assignment_ids_1 = h.data.assignment_ids ?? [];
            if (assignment_ids_1.length === 0) {
                o = p + 1;
                if (o === 1 || o % u === 0) {
                    n(`[runner:api] PollWork -> ${h.status} (no work, ${o} consecutive empty polls)`);
                }
            } else {
                n(`[runner:api] PollWork -> ${h.status} assignments=${assignment_ids_1.length}`);
            }
            let lease_expires_at = h.data.lease_expires_at;
            let suggested_poll_interval = h.data.suggested_poll_interval;
            return {
                assignment_ids: assignment_ids_1,
                lease_expires_at: typeof lease_expires_at === "string" ? lease_expires_at : undefined,
                session_assignments: Array.isArray(h.data.session_assignments) ? h.data.session_assignments : [],
                suggested_poll_interval: typeof suggested_poll_interval === "string" ? suggested_poll_interval : undefined
            };
        },
        async issueSessionToken (r, t, s) {
            y6(t, "sessionId");
            let i = `/v1/code/runners/self-hosted/sessions/${encodeURIComponent(t)}/token`;
            n(`[runner:api] POST ${i}`);
            let a = await At.post(`${e.baseUrl}${i}`, {}, {
                headers: te(r),
                timeout: 15000,
                signal: s,
                validateStatus: (d)=>d < 500
            });
            U(a.status, a.data, "IssueSessionToken");
            if (!a.data.session_token) {
                throw Error("IssueSessionToken: response missing session_token");
            }
            n(`[runner:api] IssueSessionToken -> ${a.status}`);
            return a.data;
        },
        async reportSessionFailure (r, t, reason, setup_failure_kind, failure_kind) {
            y6(t, "sessionId");
            n(`[runner:api] POST /v1/code/runners/self-hosted/sessions/${t}/report-failure reason=${reason}${setup_failure_kind ? ` kind=${setup_failure_kind}` : ""}${failure_kind ? ` cause=${failure_kind}` : ""}`);
            let d = await At.post(`${e.baseUrl}/v1/code/runners/self-hosted/sessions/${t}/report-failure`, {
                reason,
                ...setup_failure_kind && {
                    setup_failure_kind
                },
                ...failure_kind && {
                    failure_kind
                }
            }, {
                headers: te(r),
                timeout: 15000,
                validateStatus: (p)=>p < 500
            });
            U(d.status, d.data, "ReportSessionFailure");
            n(`[runner:api] ReportSessionFailure -> ${d.status} excluded_count=${d.data.excluded_count} stuck=${d.data.stuck}`);
            return d.data;
        },
        async releaseSession (r, t) {
            y6(t, "sessionId");
            n(`[runner:api] POST /v1/code/runners/self-hosted/sessions/${t}/release`);
            let s = await At.post(`${e.baseUrl}/v1/code/runners/self-hosted/sessions/${t}/release`, {}, {
                headers: te(r),
                timeout: 15000,
                validateStatus: (a)=>a < 500
            });
            U(s.status, s.data, "ReleaseSession");
            let released = s.data.released ?? true;
            n(`[runner:api] ReleaseSession -> ${s.status} released=${released}`);
            return {
                released
            };
        },
        async deregisterRunner (r, t = {}) {
            n(`[runner:api] POST /v1/code/runners/self-hosted/deregister reason=${t.reason ?? ""}` + (t.drain_hold ? ` drain_hold=${t.drain_hold.outcome} held_ms=${t.drain_hold.held_ms} busy_at_release=${t.drain_hold.busy_session_ids_at_release.length}` : ""));
            let s = await At.post(`${e.baseUrl}/v1/code/runners/self-hosted/deregister`, {
                ...t.reason && {
                    reason: t.reason
                },
                ...t.drain_hold && {
                    drain_hold: t.drain_hold
                }
            }, {
                headers: te(r),
                timeout: 10000,
                validateStatus: (i)=>i < 500
            });
            U(s.status, s.data, "DeregisterRunner");
            n(`[runner:api] DeregisterRunner -> ${s.status}`);
        },
        async refreshToken (r) {
            n("[runner:api] POST /v1/code/auth/refresh");
            let t = await At.post(`${e.baseUrl}/v1/code/auth/refresh`, {}, {
                headers: te(r),
                timeout: 15000,
                validateStatus: (s)=>s < 500
            });
            U(t.status, t.data, "RefreshToken");
            if (!t.data.token) {
                throw Error("RefreshToken: response missing token");
            }
            n(`[runner:api] RefreshToken -> ${t.status}`);
            return t.data;
        },
        async getSessionRemoteConfig (r, t, s, i) {
            y6(r, "sessionId");
            n(`[runner:api] GET /v1/code/sessions/${r}/remote`);
            let a = await At.get(`${e.baseUrl}/v1/code/sessions/${r}/remote`, {
                headers: {
                    ...i?.headers,
                    ...re(t),
                    "User-Agent": Ko()
                },
                timeout: i?.timeoutMs ?? 15000,
                signal: s,
                validateStatus: (p)=>p < 500
            });
            U(a.status, a.data, "GetSessionRemoteConfig");
            let a_data = a.data;
            return {
                ...a_data,
                sources: a_data.sources ?? [],
                push_targets: a_data.push_targets ?? [],
                claude_code_args: a_data.claude_code_args ?? {},
                environment_variables: a_data.environment_variables ?? {}
            };
        },
        async registerWorker (r, session_id, s, i) {
            y6(session_id, "sessionId");
            n(`[runner:api] POST ${r}/v1/code/sessions/${session_id}/worker/register`);
            let a = await At.post(`${r}/v1/code/sessions/${session_id}/worker/register`, {
                session_id
            }, {
                headers: re(s),
                timeout: 30000,
                signal: i,
                validateStatus: (p)=>p < 500
            });
            U(a.status, a.data, "RegisterWorker");
            let d = parseInt(String(a.data.worker_epoch), 10);
            if (isNaN(d)) {
                throw Error(`RegisterWorker: invalid worker_epoch in response: ${a.data.worker_epoch}`);
            }
            n(`[runner:api] RegisterWorker -> ${a.status} worker_epoch=${d}`);
            return d;
        },
        async postWorkerEvents (r, t, s, i, a, d) {
            y6(t, "sessionId");
            n(`[runner:api] POST ${r}/v1/code/sessions/${t}/worker/events (${a.length} ${I(a.length, "event")})`);
            let p = await At.post(`${r}/v1/code/sessions/${t}/worker/events`, {
                worker_epoch: i,
                events: a.map((payload)=>({
                        payload
                    }))
            }, {
                headers: re(s),
                timeout: 15000,
                signal: d,
                validateStatus: (h)=>h < 500
            });
            U(p.status, p.data, "PostWorkerEvents");
            n(`[runner:api] PostWorkerEvents -> ${p.status}`);
        },
        async updateSessionWorkerState (r, t, s, i, worker_status, d) {
            y6(t, "sessionId");
            n(`[runner:api] PUT ${r}/v1/code/sessions/${t}/worker`);
            let p = await At.put(`${r}/v1/code/sessions/${t}/worker`, {
                worker_epoch: i,
                ...typeof worker_status === "string" && {
                    worker_status
                },
                ...typeof worker_status === "object" && {
                    connection_status: worker_status.connectionStatus
                }
            }, {
                headers: re(s),
                timeout: 15000,
                signal: d,
                validateStatus: (h)=>h < 500
            });
            U(p.status, p.data, "UpdateSessionWorkerState");
            n(`[runner:api] UpdateSessionWorkerState -> ${p.status}`);
        },
        async heartbeat (r, t, s, i, a) {
            y6(t, "sessionId");
            let d = await At.post(`${r}/v1/code/sessions/${t}/worker/heartbeat`, {
                worker_epoch: i
            }, {
                headers: re(s),
                timeout: 10000,
                signal: a,
                validateStatus: (p)=>p < 500
            });
            U(d.status, d.data, "Heartbeat");
        },
        async forwardDiagnostics (r, t, s, i, lines) {
            y6(t, "sessionId");
            if (lines.length === 0) {
                return;
            }
            n(`[runner:api] POST ${r}/v1/code/sessions/${t}/worker/diagnostics (${lines.length} lines)`);
            let d = await At.post(`${r}/v1/code/sessions/${t}/worker/diagnostics`, {
                worker_epoch: i,
                lines
            }, {
                headers: re(s),
                timeout: 30000,
                validateStatus: (p)=>p < 500
            });
            U(d.status, d.data, "ForwardDiagnostics");
            n(`[runner:api] ForwardDiagnostics -> ${d.status}`);
        }
    };
}
const oe = [
    1,
    2.5,
    5,
    10,
    20,
    40,
    80,
    160,
    320,
    640,
    1280
];
function COo() {
    return {
        buckets: oe.map(()=>0),
        count: 0,
        sum: 0
    };
}
function ROo(e, n) {
    e.sum += n;
    e.count += 1;
    for(let o = 0; o < oe.length; o++){
        if (n <= oe[o]) {
            e.buckets[o]++;
        }
    }
}
function eee(e) {
    return e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, "\\n");
}
function De(e) {
    return e.replace(/[^a-zA-Z0-9_]/g, "_").replace(/^[0-9]/, "_$&");
}
const Fe = "claude_code_self_hosted_runner";
function dn(e, n = Date.now()) {
    let o = e.lastPollAt > 0 ? (n - e.lastPollAt) / 1000 : 0;
    let u = `runner_id="${eee(e.runnerId)}",version="${eee(e.version)}",client_label="${eee(e.clientLabel)}"`;
    let r = Fe;
    let t = "";
    t += `# HELP ${r}_info Self-hosted runner identity (info-style gauge; value is always 1).
`;
    t += `# TYPE ${r}_info gauge
`;
    t += `${r}_info{${u}} 1
`;
    t += `# HELP ${r}_capacity Max concurrent sessions this runner accepts (--capacity).
`;
    t += `# TYPE ${r}_capacity gauge
`;
    t += `${r}_capacity ${e.capacity}
`;
    t += `# HELP ${r}_active_sessions Sessions currently being handled by this runner.
`;
    t += `# TYPE ${r}_active_sessions gauge
`;
    t += `${r}_active_sessions ${e.activeSessions}
`;
    for (let [i, a] of [
        [
            "sessions_started_total",
            e.sessionsStarted
        ],
        [
            "sessions_completed_total",
            e.sessionsCompleted
        ],
        [
            "sessions_failed_total",
            e.sessionsFailed
        ],
        [
            "sessions_interrupted_total",
            e.sessionsInterrupted
        ]
    ]){
        t += `# HELP ${r}_${i} ${i === "sessions_started_total" ? "Session child processes spawned over the runner's lifetime. One increment per child spawn; a session that is re-spawned (runner restart, re-assignment) counts again. NOT comparable to the orchestrator's spawn_hooks_total (which counts orchestrator spawn-runner hook runs, including warm hints)." : i === "sessions_completed_total" ? "Session child processes that ended cleanly over the runner's lifetime: child exited 0, the server closed the session (archive/delete), or the runner released the slot as a clean handoff (idle release, startup timeout, retire / max-session-age release, server deassign). Drain/SIGTERM and the max-lifetime hard-cap kill are NOT counted (those increment sessions_interrupted_total instead)." : i === "sessions_failed_total" ? "Session child processes that exited with a non-zero code over the runner's lifetime (crash, OOM, spawn error). Does NOT include idle-release or a server deassign the poll loop observed first (those count as completed); a deassign the child notices first via its epoch-409 exit still lands here." : "Session child processes that were terminated for a non-session-outcome reason over its lifetime (drain/SIGTERM, max-lifetime hard-cap kill, released=false backstop, or an external signal). Watchdog and external-signal kills are additionally reported to the server as session failures. Closes the accounting: started - (completed + failed + interrupted) equals the number of session children currently running."}
`;
        t += `# TYPE ${r}_${i} counter
`;
        for (let [p, h] of a){
            t += `${r}_${i}{client_platform="${eee(p)}"} ${h}
`;
        }
    }
    t += `# HELP ${r}_locked_account Present (value 1) once the runner is locked to an account; absent while fungible.
`;
    t += `# TYPE ${r}_locked_account gauge
`;
    if (e.lockedAccountEmail !== null) {
        t += `${r}_locked_account{email="${eee(e.lockedAccountEmail)}"} 1
`;
    }
    t += `# HELP ${r}_last_poll_age_seconds Seconds since the last successful pollWork return.
`;
    t += `# TYPE ${r}_last_poll_age_seconds gauge
`;
    t += `${r}_last_poll_age_seconds ${o}
`;
    t += `# HELP ${r}_poll_errors_total PollWork request failures by error kind (transport=no HTTP response; timeout=client deadline; 5xx/429/4xx by status). All five series present from process start so rate() works and absent() means process-down.
`;
    t += `# TYPE ${r}_poll_errors_total counter
`;
    for (let i of mVn){
        t += `${r}_poll_errors_total{error_kind="${i}"} ${e.pollErrors[i]}
`;
    }
    t += `# HELP ${r}_initializing_sessions Sessions currently in the init phase (handleSession entry to child system/init).
`;
    t += `# TYPE ${r}_initializing_sessions gauge
`;
    t += `${r}_initializing_sessions ${e.initializingSessions}
`;
    t += `# HELP ${r}_session_init_errors_total Sessions that exited as failed before the child reached init (checkout hook / git prep / token issue / pre-init child crash).
`;
    t += `# TYPE ${r}_session_init_errors_total counter
`;
    t += `${r}_session_init_errors_total ${e.sessionInitErrors}
`;
    t += `# HELP ${r}_session_init_duration_seconds Wall-clock seconds from session assignment to child init (successful inits only).
`;
    t += `# TYPE ${r}_session_init_duration_seconds histogram
`;
    let e_sessionInitDurations = e.sessionInitDurations;
    for(let i = 0; i < oe.length; i++){
        t += `${r}_session_init_duration_seconds_bucket{le="${oe[i]}"} ${e_sessionInitDurations.buckets[i]}
`;
    }
    t += `${r}_session_init_duration_seconds_bucket{le="+Inf"} ${e_sessionInitDurations.count}
`;
    t += `${r}_session_init_duration_seconds_sum ${e_sessionInitDurations.sum}
`;
    t += `${r}_session_init_duration_seconds_count ${e_sessionInitDurations.count}
`;
    t += `# HELP ${r}_session_start_hook_errors_total SessionStart hooks that reported an error outcome (nonzero exit, validation/spawn failure, or HTTP/MCP error; one per failing hook execution).
`;
    t += `# TYPE ${r}_session_start_hook_errors_total counter
`;
    t += `${r}_session_start_hook_errors_total ${e.sessionStartHookErrors}
`;
    t += `# HELP ${r}_session_idle_seconds Seconds since the session went idle (turn-end or awaiting-action); 0 while a turn is running, background work is pending, or the session is initializing. One series per active session; disappears at session end.
`;
    t += `# TYPE ${r}_session_idle_seconds gauge
`;
    for (let [i, a] of e.sessionIdle){
        let d = a === null ? 0 : ((n - a) / 1000).toFixed(3);
        let p = e.sessionClientPlatform.get(i) ?? xwe;
        t += `${r}_session_idle_seconds{session_id="${eee(i)}",client_platform="${eee(p)}"} ${d}
`;
    }
    for (let [i, a] of e.childMetrics ?? []){
        let d = a.help.replace(/\\/g, "\\\\").replace(/\n/g, "\\n");
        t += `# HELP ${i} ${d}
`;
        t += `# TYPE ${i} ${a.type}
`;
        for (let [p, h] of a.points){
            t += `${i}${p} ${h}
`;
        }
    }
    return t;
}
function cn(e, n) {
    let o = e.childMetrics ??= new Map;
    let u = n;
    for (let r of u.resourceMetrics ?? []){
        let t = Ge(r.resource?.attributes, "session.id");
        let s = Ge(r.resource?.attributes, "client.platform");
        for (let i of r.scopeMetrics ?? []){
            for (let a of i.metrics ?? []){
                if (typeof a.name !== "string" || a.name === "") {
                    continue;
                }
                let d = De(a.name);
                let p;
                let h;
                let R;
                if (a.sum) {
                    p = a.sum.isMonotonic ? "counter" : "gauge";
                    h = a.sum.isMonotonic && !d.endsWith("_total") ? `${d}_total` : d;
                    R = a.sum.dataPoints;
                } else if (a.gauge) {
                    p = "gauge";
                    h = d;
                    R = a.gauge.dataPoints;
                } else {
                    continue;
                }
                if (h.startsWith(Fe)) {
                    continue;
                }
                let E = o.get(h) ?? {
                    help: a.description ?? "",
                    type: p,
                    points: new Map
                };
                for (let S of R ?? []){
                    let w = [];
                    let y = new Set;
                    if (t !== undefined) {
                        w.push([
                            "session_id",
                            t
                        ]);
                        y.add("session_id");
                    }
                    if (s !== undefined) {
                        w.push([
                            "client_platform",
                            s
                        ]);
                        y.add("client_platform");
                    }
                    for (let M of S.attributes ?? []){
                        if (typeof M.key !== "string") {
                            continue;
                        }
                        let F = Be(M.value);
                        if (F === undefined) {
                            continue;
                        }
                        let j = De(M.key);
                        if (j === "" || y.has(j)) {
                            continue;
                        }
                        y.add(j);
                        w.push([
                            j,
                            F
                        ]);
                    }
                    let b = w.length > 0 ? `{${w.map(([M, F])=>`${M}="${eee(F)}"`).join(",")}}` : "";
                    let L = typeof S.asDouble === "number" ? S.asDouble : S.asInt !== undefined ? Number(S.asInt) : undefined;
                    if (L === undefined || !Number.isFinite(L)) {
                        continue;
                    }
                    E.points.set(b, L);
                }
                o.set(h, E);
            }
        }
    }
}
function xOo({ childMetrics }, n) {
    if (childMetrics === undefined) {
        return;
    }
    let u = `session_id="${eee(n)}"`;
    for (let [r, t] of childMetrics){
        for (let s of t.points.keys()){
            if (s.includes(u)) {
                t.points.delete(s);
            }
        }
        if (t.points.size === 0) {
            childMetrics.delete(r);
        }
    }
}
function Ge(e, n) {
    for (let o of e ?? []){
        if (o.key === n) {
            return Be(o.value);
        }
    }
}
function Be(e) {
    if (e === undefined) {
        return;
    }
    if (typeof e.stringValue === "string") {
        return e.stringValue;
    }
    if (e.intValue !== undefined) {
        return String(e.intValue);
    }
    if (typeof e.doubleValue === "number") {
        return String(e.doubleValue);
    }
    if (typeof e.boolValue === "boolean") {
        return String(e.boolValue);
    }
}
function POo(e, n, o, u) {
    let r = createServer((s, i)=>{
        if (s.method === "POST" && s.url === "/v1/metrics") {
            if (!ln(s)) {
                i.writeHead(403).end();
                return;
            }
            let h = [];
            let R = 0;
            let E = false;
            s.on("data", (S)=>{
                R += S.length;
                if (R > 1048576) {
                    E = true;
                    i.writeHead(413).end();
                    s.destroy();
                    return;
                }
                h.push(S);
            });
            s.on("end", ()=>{
                if (E) {
                    return;
                }
                try {
                    cn(n, X(Buffer.concat(h).toString("utf8")));
                    i.writeHead(200).end();
                } catch (error) {
                    o(`[runner:warn] /v1/metrics rejected malformed body: ${l(error)}`);
                    i.writeHead(400).end();
                }
            });
            return;
        }
        if (s.method === "GET" && s.url === "/metrics") {
            let h = dn(n);
            i.writeHead(200, {
                "Content-Type": "text/plain; version=0.0.4; charset=utf-8",
                "Content-Length": Buffer.byteLength(h)
            });
            i.end(h);
            return;
        }
        if (s.method !== "GET" || s.url !== "/healthz") {
            i.writeHead(404, {
                "Content-Type": "text/plain"
            });
            i.end(`not found
`);
            return;
        }
        let a = Date.now();
        let last_poll_age_ms = n.lastPollAt > 0 ? a - n.lastPollAt : null;
        let p = _({
            status: "ok",
            runner_id: n.runnerId,
            active_sessions: n.activeSessions,
            last_poll_at: n.lastPollAt > 0 ? new Date(n.lastPollAt).toISOString() : null,
            last_poll_age_ms
        });
        i.writeHead(200, {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(p)
        });
        i.end(p);
        if (n.claimVisibility !== undefined) {
            for (let h of n.claimVisibility.values()){
                if (h.visibleMs === undefined) {
                    h.visibleMs = Math.max(0, a - h.pickedUpAt);
                }
            }
        }
    });
    r.unref();
    let t = false;
    r.on("error", (s)=>{
        if (!r.listening) {
            n.listeningOn = undefined;
        }
        if (!t) {
            t = true;
            f("self_hosted_healthz_listen", "listen_failed");
        }
        o(`[runner:warn] /healthz listener failed on port ${e}: ${s.message} \u2014 continuing without health endpoint`);
    });
    r.listen(e, ()=>{
        n.listeningOn = r.address()?.port ?? e;
        if (!t) {
            t = true;
            g("self_hosted_healthz_listen");
        }
        o(`[runner:health] /healthz and /metrics listening on :${e}`);
    });
    return r;
}
function ln(e) {
    let remoteAddress = e.socket.remoteAddress;
    return remoteAddress === "127.0.0.1" || remoteAddress === "::1" || remoteAddress === "::ffff:127.0.0.1";
}
const ve = [
    "https_proxy",
    "HTTPS_PROXY",
    "http_proxy",
    "HTTP_PROXY"
];
const pin = "SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_COMMAND";
const fin = "SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_FILE";
const En = "claude-self-hosted-runner";
class K extends Error {
    constructor(e){
        super(e);
        this.name = "ProxyAuthorizationMintError";
    }
}
const Sn = 30000;
const we = 16384;
const wn = 30000;
const vn = 30000;
const ye = 60000;
const Pn = 2000;
const ze = 8;
const Tn = 8192;
const Ee = 16384;
const Rn = 256;
const bn = 65536;
const pe = /[\x00-\x08\x0a-\x1f\x7f-\x9f]/;
const kn = 4096;
const An = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+:/;
function V(e, n = 200) {
    return ne(e.replace(/[\p{Cc}\p{Cs}]/gu, ""), n);
}
function On(e) {
    if (e === undefined || e === "") {
        return;
    }
    if (Buffer.byteLength(e, "latin1") > kn) {
        return;
    }
    if (pe.test(e)) {
        return undefined;
    }
    return e;
}
function Ye(e) {
    let n = e.trim();
    if (!n) {
        throw new K("proxy authorization source returned an empty value");
    }
    if (Buffer.byteLength(n) > we) {
        throw new K(`proxy authorization value exceeds ${we} bytes`);
    }
    if (pe.test(n)) {
        throw new K("proxy authorization value must be a single header line (control characters such as CR/LF are not allowed)");
    }
    return n;
}
function Ln(e) {
    let { source } = e;
    let timeout = e.commandTimeoutMs ?? Sn;
    let CLAUDE_CODE_PROXY_HOST;
    try {
        CLAUDE_CODE_PROXY_HOST = new URL(e.upstreamProxyUrl).hostname;
    } catch  {
        CLAUDE_CODE_PROXY_HOST = undefined;
    }
    let r;
    let t = async (CLAUDE_CODE_PROXY_AUTHENTICATE)=>{
        if (source.kind === "file") {
            if (r) {
                throw new K("proxy authorization file could not be read: an earlier read has not returned yet (stalled mount?); not issuing another");
            }
            let p;
            let h = false;
            let R = (async ()=>{
                let S = await open(source.path, "r");
                try {
                    let w = Buffer.alloc(we + 1);
                    let { bytesRead } = await S.read(w, 0, w.length, 0);
                    return w.subarray(0, bytesRead).toString("utf8");
                } finally{
                    await S.close();
                }
            })();
            let E = ()=>{
                h = true;
                if (r === R) {
                    r = undefined;
                }
            };
            R.then(E, E);
            try {
                p = await Ml(R, timeout, "read");
            } catch (error) {
                if (!h) {
                    r = R;
                }
                throw new K(`proxy authorization file could not be read: ${$d(l(error))}`);
            }
            return Ye(p);
        }
        let env = {
            ...typeof e.commandEnv === "function" ? e.commandEnv() : e.commandEnv ?? process.env,
            CLAUDE_CODE_PROXY_URL: e.upstreamProxyUrl,
            ...CLAUDE_CODE_PROXY_HOST && {
                CLAUDE_CODE_PROXY_HOST
            },
            ...CLAUDE_CODE_PROXY_AUTHENTICATE && {
                CLAUDE_CODE_PROXY_AUTHENTICATE
            }
        };
        let d = await DP(source.command, {
            timeout,
            reject: false,
            stdin: "ignore",
            useToolMemoryCgroup: false,
            extendEnv: false,
            env
        });
        if (d.failed) {
            let p = d.timedOut ? `timed out after ${timeout}ms` : `exited ${d.exitCode ?? d.signal ?? "abnormally"}`;
            let h = d.stderr?.trim();
            throw new K(`proxy authorization command ${p}${h ? `: ${ne($d(h), 500)}` : ""}`);
        }
        return Ye(d.stdout ?? "");
    };
    let s = new Map;
    return {
        source: source.kind,
        mint (i) {
            let a = i === undefined ? "plain" : `remint:${i.challenge ?? ""}`;
            let d = s.get(a);
            if (!d) {
                d = t(i?.challenge).finally(()=>{
                    s.delete(a);
                });
                s.set(a, d);
            }
            return d;
        }
    };
}
function ce(headerLines, n) {
    let o = n.toLowerCase();
    for (let u of headerLines){
        let r = u.indexOf(":");
        if (r > 0 && u.slice(0, r).trim().toLowerCase() === o) {
            return u.slice(r + 1).trim();
        }
    }
}
function je(headerLines, n) {
    let o = new Set(n.map((u)=>u.toLowerCase()));
    return headerLines.filter((u)=>{
        let r = u.indexOf(":");
        return r > 0 && o.has(u.slice(0, r).trim().toLowerCase());
    });
}
function se(headerLines, n) {
    let o = new Set(n.map((u)=>u.toLowerCase()));
    return headerLines.filter((u)=>{
        let r = u.indexOf(":");
        return !(r > 0 && o.has(u.slice(0, r).trim().toLowerCase()));
    });
}
const Cn = 16;
function Se(e, n) {
    let o = Buffer.from(n, "utf8").toString("latin1");
    let u = [
        o
    ];
    let r = o.search(/[ \t]/);
    if (r > 0) {
        let t = o.slice(r).trim();
        if (t.length >= Cn) {
            u.push(t);
        }
    }
    return [
        e.startLine,
        ...e.headerLines
    ].some((t)=>u.some((s)=>t.includes(s)));
}
const le = [
    "proxy-authenticate",
    "proxy-authentication-info"
];
function $n(e, n, o, u, r) {
    let t = o;
    let s = false;
    let i = (a)=>{
        if (n.destroyed || !n.writable) {
            return;
        }
        if (a.length > t && !s) {
            s = true;
            r();
        }
        if (t === 0 || a.length === 0) {
            return;
        }
        let d = a.length <= t ? a : a.subarray(0, t);
        t -= d.length;
        if (!n.write(d) && t > 0) {
            e.pause();
            n.once("drain", ()=>e.resume());
        }
    };
    i(u);
    e.on("data", i);
    e.resume();
    return ()=>{
        e.removeListener("data", i);
    };
}
function fe(e, n, o, u = Buffer.alloc(0)) {
    return new Promise((resolvePromise, rejectPromise)=>{
        let s = u;
        let i = false;
        let a = (E, S)=>{};
        let d = setTimeout((E)=>E(Error("timed out waiting for the request/response head")), o, (E)=>a(E));
        let p = (E)=>{
            s = Buffer.concat([
                s,
                E
            ]);
            let S = s.indexOf(`\r
\r
`);
            if (S === -1) {
                if (s.length > n) {
                    a(Error("request/response head exceeded the size limit"));
                }
                return;
            }
            if (S > n) {
                a(Error("request/response head exceeded the size limit"));
                return;
            }
            let w = s.subarray(0, S).toString("latin1");
            let [startLine = "", ...headerLines] = w.split(`\r
`);
            a(null, {
                startLine,
                headerLines,
                rest: s.subarray(S + 4)
            });
        };
        let h = ()=>a(Error("connection closed before the head was complete"));
        let R = (E)=>a(E);
        a = (E, S)=>{
            i = true;
            clearTimeout(d);
            e.removeListener("data", p);
            e.removeListener("close", h);
            e.removeListener("error", R);
            e.pause();
            if (E) {
                rejectPromise(E);
            } else {
                resolvePromise(S);
            }
        };
        e.on("data", p);
        e.once("close", h);
        e.once("error", R);
        if (s.length > 0) {
            p(Buffer.alloc(0));
        }
        if (!i) {
            e.resume();
        }
    });
}
function O(e, n) {
    if (e.destroyed) {
        return;
    }
    e.resume();
    if (e.writable) {
        e.end(n);
    }
    setTimeout((o)=>o.destroy(), Pn, e).unref();
}
function W(e) {
    return Buffer.from(e, "latin1");
}
function xn() {
    return `HTTP/1.1 407 Proxy Authentication Required\r
Proxy-Authenticate: Basic realm="${En}"\r
Content-Length: 0\r
Connection: close\r
\r
`;
}
function G(e, n, o) {
    return `HTTP/1.1 ${e} ${n}\r
Content-Type: text/plain\r
Content-Length: ${Buffer.byteLength(o)}\r
Connection: close\r
\r
` + o;
}
class ie extends Error {
    constructor(){
        super("client closed before the upstream connection was ready");
        this.name = "ClientGoneError";
    }
}
function Nn(e, rest) {
    let o = false;
    let u = rest.length > 0 ? [
        rest
    ] : [];
    let n_length = rest.length;
    let t = (i)=>{
        u.push(i);
        n_length += i.length;
        if (n_length > bn) {
            e.pause();
        }
    };
    let s = ()=>{
        o = true;
    };
    e.on("data", t);
    e.once("end", s);
    e.once("close", s);
    e.resume();
    return {
        gone: ()=>o || e.destroyed,
        release: ()=>{
            e.removeListener("data", t);
            let i = u.length === 1 ? u[0] : Buffer.concat(u);
            u = [];
            n_length = 0;
            return i;
        }
    };
}
async function In(e) {
    let n = new URL(e.upstreamProxyUrl);
    let o = n.protocol === "https:";
    if (n.protocol !== "http:" && !o) {
        throw Error("the upstream proxy URL must be http:// or https://");
    }
    let host = n.hostname.replace(/^\[(.*)\]$/, "$1");
    let port_1 = n.port ? Number(n.port) : o ? 443 : 80;
    if (n.username || n.password) {
        e.onStatus("[runner:egress-proxy] note: the upstream proxy URL carries user:password credentials; they are replaced by the minted Proxy-Authorization value on every request to the upstream proxy");
    }
    let t = randomBytes(24).toString("base64url");
    let s = Buffer.from(`Basic ${Buffer.from(`runner:${t}`).toString("base64")}`);
    let i = (headerLines)=>{
        let m = ce(headerLines, "proxy-authorization");
        if (m === undefined) {
            return false;
        }
        let v = Buffer.from(m);
        return v.length === s.length && timingSafeEqual(v, s);
    };
    let a = (c)=>e.onDebug?.(`[runner:egress-proxy] ${c}`);
    let d = (c)=>e.onStatus(`[runner:egress-proxy] ${c}`);
    let p = new Set;
    let h = (c)=>{
        p.add(c);
        c.on("error", (m)=>a(`socket: ${l(m)}`));
        c.once("close", ()=>p.delete(c));
    };
    let R = ()=>new Promise((resolvePromise, rejectPromise)=>{
            let v = o ? connect_1({
                host,
                port: port_1,
                servername: Mn(host) ? undefined : host,
                ...e.upstreamTls
            }) : connect({
                host,
                port: port_1
            });
            h(v);
            let A = o ? "secureConnect" : "connect";
            let C = (T)=>{};
            let P = setTimeout((T)=>T(Error("timed out connecting to the upstream proxy")), vn, (T)=>C(T));
            let k = ()=>C(null);
            let N = (T)=>C(T);
            let H = ()=>C(Error("upstream proxy closed the connection during connect"));
            C = (T)=>{
                clearTimeout(P);
                v.removeListener(A, k);
                v.removeListener("error", N);
                v.removeListener("close", H);
                if (T) {
                    v.destroy();
                    rejectPromise(T);
                } else {
                    resolvePromise(v);
                }
            };
            v.once(A, k);
            v.once("error", N);
            v.once("close", H);
        });
    let E = (c, m)=>{
        c.pipe(m);
        m.pipe(c);
        let v = ()=>{
            c.destroy();
            m.destroy();
        };
        c.on("error", v);
        m.on("error", v);
        c.on("close", ()=>O(m, ""));
        m.on("close", ()=>O(c, ""));
        c.resume();
        m.resume();
    };
    let S = async (c, m, v, A)=>{
        let C = await e.minter.mint(v);
        if (A()) {
            throw new ie;
        }
        let up = await R();
        if (A()) {
            up.destroy();
            throw new ie;
        }
        try {
            up.write(Buffer.concat([
                W(`CONNECT ${c} HTTP/1.1\r
Host: ${c}\r
`),
                Buffer.from(`Proxy-Authorization: ${C}\r
`),
                W(m.map((N)=>N + `\r
`).join("") + `\r
`)
            ]));
            let head = await fe(up, Ee, ye);
            if (A()) {
                throw new ie;
            }
            return {
                up,
                head,
                value: C
            };
        } catch (error) {
            up.destroy();
            throw error;
        }
    };
    let w = (c)=>{
        let m = c.startLine.match(/^HTTP\/1\.[01]\s+(\d{3})(?=\s|$)/);
        if (m) {
            return Number(m[1]);
        }
        return 0;
    };
    let y = (c, error, v)=>{
        if (error instanceof ie || c.destroyed) {
            c.destroy();
            return;
        }
        let A = error instanceof K ? error.message : `upstream proxy connection failed: ${$d(l(error))}`;
        d(`${A} (${V(v)} answered 502)`);
        O(c, G(502, "Bad Gateway", error instanceof K ? `proxy authorization could not be obtained (see the runner log)
` : `upstream proxy connection failed (see the runner log)
`));
    };
    let b = (c, m, v, startLine)=>{
        m.destroy();
        d(`upstream proxy rejected the minted Proxy-Authorization for ${V(v)} (${V(startLine)}); answering the client 502`);
        O(c, G(502, "Bad Gateway", `upstream proxy rejected the runner-minted Proxy-Authorization (407); see the runner log
`));
    };
    let L = (c, m, v, A)=>{
        m.destroy();
        d(`upstream response to ${V(v)} (status ${A}) reflected the minted Proxy-Authorization in its head; withheld, answering the client 502`);
        O(c, G(502, "Bad Gateway", `upstream proxy response withheld: its head reflected the runner-minted Proxy-Authorization (see the runner log)
`));
    };
    let M = async (c, m, v, A)=>{
        let C = je(v.headerLines, [
            "user-agent"
        ]);
        let P = ()=>A.gone();
        try {
            let k = await S(m, C, undefined, P);
            let N = w(k.head);
            if (N === 407) {
                let challenge = On(ce(k.head.headerLines, "proxy-authenticate"));
                k.up.destroy();
                a(`upstream answered 407 for CONNECT ${m}; re-minting once`);
                k = await S(m, C, {
                    challenge
                }, P);
                N = w(k.head);
            }
            let { up, head, value } = k;
            if (N !== 200 && Se(head, value)) {
                L(c, up, `CONNECT ${m}`, N);
                return;
            }
            if (N === 407) {
                b(c, up, `CONNECT ${m}`, head.startLine);
                return;
            }
            if (N < 100) {
                up.destroy();
                d(`upstream proxy sent an unparseable reply to CONNECT ${V(m)}; answering the client 502`);
                O(c, G(502, "Bad Gateway", `unparseable reply from upstream proxy
`));
                return;
            }
            if (N === 200) {
                a(`tunnel established: CONNECT ${m}`);
                c.write(`HTTP/1.1 200 Connection Established\r
\r
`);
                if (head.rest.length > 0) {
                    c.write(head.rest);
                }
                let D = A.release();
                if (D.length > 0) {
                    up.write(D);
                }
                E(c, up);
                return;
            }
            up.destroy();
            d(`upstream proxy refused CONNECT ${V(m)}: ${V(head.startLine)}`);
            let ge = se(head.headerLines, [
                "connection",
                "proxy-connection",
                "keep-alive",
                "transfer-encoding",
                "content-length",
                ...le
            ]);
            O(c, W(head.startLine + `\r
` + ge.map((D)=>D + `\r
`).join("") + `Content-Length: 0\r
Connection: close\r
\r
`));
        } catch (error) {
            y(c, error, `CONNECT ${m}`);
        }
    };
    let F = async (c, m, v)=>{
        let A = se(m.headerLines, [
            "proxy-authorization",
            "proxy-connection",
            "connection",
            "keep-alive",
            "upgrade",
            "te",
            "trailer",
            "max-forwards"
        ]);
        let C = Number(ce(m.headerLines, "content-length") ?? "0");
        let P;
        let k = ()=>{};
        let N = ()=>{
            k();
            P?.destroy();
            c.destroy();
        };
        try {
            {
                let H = await e.minter.mint();
                if (v.gone()) {
                    N();
                    return;
                }
                P = await R();
                if (v.gone()) {
                    N();
                    return;
                }
                P.write(Buffer.concat([
                    W(m.startLine + `\r
` + A.map((J)=>J + `\r
`).join("")),
                    Buffer.from(`Proxy-Authorization: ${H}\r
`),
                    W(`Connection: close\r
\r
`)
                ]));
                if (C > 0) {
                    k = $n(c, P, C, v.release(), ()=>a("client sent bytes past its declared Content-Length on a plain HTTP request; not forwarded"));
                }
                let T = await fe(P, Ee, ye);
                let Y = w(T);
                let ge = 0;
                while(Y >= 100 && Y < 200 && Y !== 101){
                    if (v.gone()) {
                        N();
                        return;
                    }
                    if (Se(T, H)) {
                        k();
                        L(c, P, "a plain HTTP request", Y);
                        return;
                    }
                    if (++ge > ze) {
                        P.destroy();
                        k();
                        d(`upstream sent more than ${ze} interim responses to a plain HTTP request; answering the client 502`);
                        O(c, G(502, "Bad Gateway", `too many interim responses from upstream
`));
                        return;
                    }
                    c.write(W(T.startLine + `\r
` + se(T.headerLines, le).map((J)=>J + `\r
`).join("") + `\r
`));
                    T = await fe(P, Ee, ye, T.rest);
                    Y = w(T);
                }
                if (v.gone()) {
                    N();
                    return;
                }
                if (Se(T, H)) {
                    k();
                    L(c, P, "a plain HTTP request", Y);
                    return;
                }
                if (Y === 407) {
                    k();
                    P.destroy();
                    d(`upstream answered 407 to a plain HTTP request (${V(T.startLine)}); it may have come from the destination site rather than the proxy, and re-mint is only attempted for CONNECT tunnels; answering the client 502`);
                    O(c, G(502, "Bad Gateway", `upstream answered 407 (Proxy Authentication Required) to a plain HTTP request; it may have come from the destination site rather than the proxy; see the runner log
`));
                    return;
                }
                if (Y < 100) {
                    P.destroy();
                    k();
                    d("upstream proxy sent an unparseable reply to a plain HTTP request; answering the client 502");
                    O(c, G(502, "Bad Gateway", `unparseable reply from upstream proxy
`));
                    return;
                }
                if (Y >= 400) {
                    P.destroy();
                    k();
                    d(`upstream answered ${V(T.startLine)} to a plain HTTP request; error body withheld from the client`);
                    O(c, W(T.startLine + `\r
` + se(T.headerLines, [
                        "connection",
                        "proxy-connection",
                        "keep-alive",
                        "transfer-encoding",
                        "content-length",
                        ...le
                    ]).map((J)=>J + `\r
`).join("") + `Content-Length: 0\r
Connection: close\r
\r
`));
                    return;
                }
                c.write(W(T.startLine + `\r
` + se(T.headerLines, [
                    "connection",
                    "proxy-connection",
                    "keep-alive",
                    ...le
                ]).map((J)=>J + `\r
`).join("") + `Connection: close\r
\r
`));
                if (T.rest.length > 0) {
                    c.write(T.rest);
                }
                let D = P;
                D.pipe(c);
                D.on("error", ()=>c.destroy());
                c.on("error", ()=>D.destroy());
                D.on("close", ()=>O(c, ""));
                c.on("close", ()=>D.destroy());
                D.resume();
                c.resume();
            }
        } catch (error) {
            k();
            P?.destroy();
            y(c, error, "plain HTTP request");
        }
    };
    let j = 0;
    let Ke = e.maxPendingClients ?? Rn;
    let Z = createServer_1({
        pauseOnConnect: true
    }, (c)=>{
        h(c);
        c.on("error", ()=>c.destroy());
        if (j >= Ke) {
            a("too many connections still sending a request head; refusing one");
            c.destroy();
            return;
        }
        j++;
        (async ()=>{
            let m;
            try {
                m = await fe(c, Tn, wn);
            } catch (error) {
                a(`client: ${l(error)}`);
                if (!c.destroyed && c.writable && c.bytesRead > 0) {
                    O(c, G(400, "Bad Request", `malformed proxy request
`));
                } else {
                    c.destroy();
                }
                return;
            } finally{
                j--;
            }
            if (pe.test(m.startLine) || m.headerLines.some((P)=>pe.test(P) || !An.test(P))) {
                O(c, G(400, "Bad Request", `malformed header line
`));
                return;
            }
            let v = m.startLine.match(/^CONNECT\s+(\S+)\s+HTTP\/1\.[01]$/i);
            let A = !v && /^[A-Z]+\s+http:\/\/\S+\s+HTTP\/1\.[01]$/i.test(m.startLine);
            if (!v && !A) {
                O(c, G(400, "Bad Request", `this is a forward proxy: expected CONNECT host:port or an absolute-form http:// request
`));
                return;
            }
            if (!i(m.headerLines)) {
                a(`client ${v ? "CONNECT" : "request"} without valid loopback credentials \u2192 407 challenge`);
                O(c, xn());
                return;
            }
            if (A && /^TRACE\s/i.test(m.startLine)) {
                O(c, G(405, "Method Not Allowed", `TRACE is not forwarded by this proxy
`));
                return;
            }
            if (A) {
                let P = je(m.headerLines, [
                    "content-length"
                ]);
                if (ce(m.headerLines, "transfer-encoding") !== undefined) {
                    O(c, G(501, "Not Implemented", `request bodies with Transfer-Encoding are not forwarded by this proxy; send a Content-Length
`));
                    return;
                }
                if (P.length > 1 || P.length === 1 && !/^content-length:[ \t]*\d{1,15}[ \t]*$/i.test(P[0])) {
                    O(c, G(400, "Bad Request", `a forwarded request may carry at most one numeric Content-Length
`));
                    return;
                }
            }
            let C = Nn(c, m.rest);
            if (v) {
                await M(c, v[1], m, C);
            } else {
                await F(c, m, C);
            }
        })().catch((m)=>{
            d(`internal error handling a proxied connection: ${$d(l(m))}`);
            c.destroy();
        });
    });
    await new Promise((resolvePromise, rejectPromise)=>{
        Z.once("error", rejectPromise);
        Z.listen({
            host: "127.0.0.1",
            port: 0
        }, ()=>{
            Z.removeListener("error", rejectPromise);
            resolvePromise();
        });
    });
    Z.on("error", (c)=>d(`listener error: ${l(c)}`));
    let port = Z.address().port;
    return {
        url: `http://runner:${t}@127.0.0.1:${port}`,
        port,
        openConnections: ()=>p.size,
        close: ()=>new Promise((resolvePromise)=>{
                for (let m of p){
                    m.destroy();
                }
                Z.close(()=>resolvePromise());
            })
    };
}
function Mn(host) {
    return /^[\d.]+$/.test(host) || host.includes(":");
}
class Ve {
    active;
    handle;
}
const Hn = new q(()=>new Ve);
function Pe() {
    return Hn.of(B().host);
}
function Un(url, env) {
    let o = ve.map((t)=>[
            t,
            env[t]
        ]);
    let original = {};
    let rewritten = [];
    for (let [t, s] of o){
        if (s !== undefined) {
            original[t] = s;
        }
        if (s) {
            env[t] = url;
            rewritten.push(t);
        }
    }
    return {
        url,
        rewritten,
        original
    };
}
function Dn(e = process.env) {
    let active = Pe().active;
    if (!active) {
        return {
            ...e
        };
    }
    let o = {
        ...e
    };
    for (let u of ve){
        if (u in active.original) {
            o[u] = active.original[u];
        }
    }
    return o;
}
function IOo(e = process.env) {
    let active = Pe().active;
    if (!active) {
        return {};
    }
    let o = {
        [pin]: undefined,
        [fin]: undefined,
        NO_PROXY: e.NO_PROXY,
        no_proxy: e.no_proxy,
        CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER: undefined,
        ALL_PROXY: undefined,
        all_proxy: undefined
    };
    for (let u of ve){
        o[u] = active.rewritten.includes(u) ? active.url : undefined;
    }
    return o;
}
function Gn(e, n = process.env) {
    if (e.command !== undefined && e.command.trim() === "" || e.file !== undefined && e.file.trim() === "") {
        throw Error("--proxy-authorization-command / --proxy-authorization-file must not be empty");
    }
    let command = (e.command ?? n[pin])?.trim();
    let u = (e.file ?? n[fin])?.trim();
    let path = u ? resolve(u) : u;
    let t = command !== undefined && command !== "";
    let s = path !== undefined && path !== "";
    if (t && s) {
        throw Error("set only one of --proxy-authorization-command (SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_COMMAND) and --proxy-authorization-file (SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_FILE)");
    }
    if (t) {
        return {
            kind: "command",
            command
        };
    }
    if (s) {
        return {
            kind: "file",
            path
        };
    }
}
function OOo(e, n = process.env) {
    let source = Gn(e, n);
    if (!source) {
        return;
    }
    let upstreamProxyUrl = cf(n);
    let r = upstreamProxyUrl ? Wz(upstreamProxyUrl) : undefined;
    if (!upstreamProxyUrl || !r) {
        throw Error("--proxy-authorization-command / --proxy-authorization-file require HTTPS_PROXY (or HTTP_PROXY) to be set to the upstream proxy URL that the Proxy-Authorization value is for (ALL_PROXY alone is not consulted)");
    }
    if (r.protocol !== "http:" && r.protocol !== "https:") {
        throw Error("--proxy-authorization-command / --proxy-authorization-file support http:// and https:// upstream proxies only (check the scheme of HTTPS_PROXY / HTTP_PROXY)");
    }
    return {
        source,
        upstreamProxyUrl
    };
}
async function MOo(e, n) {
    let o = Pe();
    let u = fC();
    let ca = CN();
    let minter = Ln({
        source: e.source,
        upstreamProxyUrl: e.upstreamProxyUrl,
        commandEnv: ()=>({
                ...Dn(),
                SELF_HOSTED_RUNNER_POOL_SECRET: undefined,
                SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: undefined
            })
    });
    let s = await In({
        upstreamProxyUrl: e.upstreamProxyUrl,
        minter,
        upstreamTls: {
            ...u && {
                cert: u.cert,
                key: u.key,
                passphrase: u.passphrase
            },
            ...ca && {
                ca
            }
        },
        onStatus: n.onStatus,
        onDebug: n.onDebug
    });
    let i = Un(s.url, process.env);
    o.active = i;
    if (new Set(i.rewritten.map((d)=>i.original[d])).size > 1) {
        n.onStatus(`[runner:egress-proxy] note: ${i.rewritten.join("/")} named different proxies; all of them now go through the listener to ${$d(e.upstreamProxyUrl)} (the one this runner resolves for its own traffic)`);
    }
    ES();
    if (process.env.CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER) {
        n.onStatus("[runner:egress-proxy] note: CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER is set on the runner; it is cleared for sessions while --proxy-authorization-* is active (the runner now mints Proxy-Authorization for all proxied traffic, and a session-side proxyAuthHelper header would be refused by the loopback listener)");
    }
    n.onStatus(`[runner:egress-proxy] enabled: minting Proxy-Authorization from the configured ${e.source.kind} for every CONNECT to the upstream proxy ${$d(e.upstreamProxyUrl)}; this runner and its sessions now use the loopback listener 127.0.0.1:${s.port} (rewrote ${i.rewritten.join(", ")})`);
    o.handle = {
        ...s,
        close: async ()=>{
            await s.close();
            o.active = undefined;
            o.handle = undefined;
        }
    };
    return o.handle;
}
function HOo(e, n = process.env) {
    let o = e.find((u)=>u === "--proxy-authorization-command" || u === "--proxy-authorization-file") ?? [
        pin,
        fin
    ].find((u)=>n[u]?.trim());
    if (o !== undefined) {
        throw new x(`${o} is not yet supported with the orchestrator subcommand (only worker runners mint Proxy-Authorization for their egress proxy today). Unset it for the orchestrator process; the runners it spawns can still use it.`, "proxy-authorization knob given to the orchestrator subcommand");
    }
}
export { cin, VPr, EOo, i9e, kOo, TOo, GBe, qPr, y6, nfe, AOo, qPe, mVn, x0t, din, uin, xwe, KPr, a9e, P0t, COo, ROo, eee, xOo, POo, pin, fin, IOo, OOo, MOo, HOo, I0t, Xpt, gVn, IMs, DOo, OMs, MMs, HMs, hVn, l9e, YPr, yVn, XPr };
