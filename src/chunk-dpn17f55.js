import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { fwe, q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, mG, Lq, W, l, v, Vr, z, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q, Ut, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { On } from "/$bunfs/root/chunk-xgw72tt1.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Dd, K2n, PPr, ve, lOo } from "/$bunfs/root/chunk-6kc68p18.js";
import { jl, Yc } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Zk } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { f9 } from "/$bunfs/root/chunk-x0qpydt2.js";
import { MP, qUe, OO, zv } from "/$bunfs/root/chunk-3fj60qgx.js";
import { cye, hkt, _E } from "/$bunfs/root/chunk-6xvcnbea.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { O7, Da, jTs } from "/$bunfs/root/chunk-6dwnw6av.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f, Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Io } from "/$bunfs/root/chunk-63xa24b4.js";
import { W3e, yu } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { lr } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { ggn, hQe, yQe, h1r } from "/$bunfs/root/chunk-d8r8k9zm.js";
import { iWn, Lue, Tz } from "/$bunfs/root/chunk-vpp1psvz.js";
import { Wun, xFt } from "/$bunfs/root/chunk-rjnz0hjh.js";
import { ok, G6n, PFt } from "/$bunfs/root/chunk-bzch6wfr.js";
import { Pge } from "/$bunfs/root/chunk-7zpta555.js";
import { sr } from "/$bunfs/root/chunk-092xqjkn.js";
import { o, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { randomUUID } from "crypto";
import { join, dirname, isAbsolute, posix, resolve, sep, win32, relative } from "path";
import { execFile, spawn } from "child_process";
import { mkdir, mkdtemp, readFile, rm, writeFile, copyFile } from "fs/promises";
import { createRequire } from "module";
import { homedir, tmpdir } from "os";
import { fileURLToPath } from "url";
import { existsSync, realpathSync } from "fs";
import { createInterface } from "readline";
import { StringDecoder } from "string_decoder";
const Me = 500;
const be = 1048576;
const _s = [
    200,
    800
];
class Ye {
    send;
    pending = [];
    pendingEntries = 0;
    pendingBytes = 0;
    flushPromise = null;
    sendTimeoutMs;
    onError;
    maxPendingEntries;
    maxPendingBytes;
    backoffMs;
    constructor(e, s){
        this.send = e;
        let { sendTimeoutMs = 60000, onError, maxPendingEntries = Me, maxPendingBytes = be, backoffMs = _s } = s ?? {};
        this.sendTimeoutMs = sendTimeoutMs;
        this.onError = onError;
        this.maxPendingEntries = maxPendingEntries;
        this.maxPendingBytes = maxPendingBytes;
        this.backoffMs = backoffMs;
    }
    enqueue(filePath, entries) {
        let length = _(entries).length;
        this.pending.push({
            filePath,
            entries,
            bytes: length
        });
        this.pendingEntries += entries.length;
        this.pendingBytes += length;
        if (this.pendingEntries > this.maxPendingEntries || this.pendingBytes > this.maxPendingBytes) {
            this.flushPromise = this.drain();
            this.flushPromise.catch(()=>{});
        }
    }
    async flush() {
        let e = this.drain();
        this.flushPromise = e;
        await e;
        if (this.flushPromise === e) {
            this.flushPromise = null;
        }
    }
    async drain() {
        let flushPromise = this.flushPromise;
        let s = this.pending.splice(0);
        this.pendingEntries = 0;
        this.pendingBytes = 0;
        if (flushPromise) {
            await flushPromise;
        }
        if (s.length === 0) {
            return;
        }
        await this.doFlush(s);
    }
    async doFlush(e) {
        let s = new Map;
        for (let n of e){
            let r = s.get(n.filePath);
            if (r) {
                r.push(...n.entries);
            } else {
                s.set(n.filePath, n.entries.slice());
            }
        }
        for (let [n, r] of s){
            await this.sendWithRetry(n, r);
        }
    }
    async sendWithRetry(e, s) {
        let n = this.backoffMs.length + 1;
        let r = `SessionStore.append() timed out after ${this.sendTimeoutMs}ms for ${e}`;
        let a;
        let c = 1;
        for(; c <= n; c++){
            try {
                await Ut(this.send(e, s), this.sendTimeoutMs, r);
                a = undefined;
                break;
            } catch (error) {
                a = W(error);
                if (a.message === r) {
                    break;
                }
                let h = this.backoffMs[c - 1];
                if (h === undefined) {
                    break;
                }
                await Q(h);
            }
        }
        if (a) {
            t(`[TranscriptMirrorBatcher] flush failed for ${e} after ${c} attempt(s): ${a}`, {
                level: "error"
            });
            try {
                this.onError?.(e, a);
            } catch (error) {
                t(`[TranscriptMirrorBatcher] onError callback threw: ${error}`, {
                    level: "error"
                });
            }
        }
    }
}
const Pt = {
    Completable: "McpCompletable"
};
class It {
    debugFilePath = undefined;
    initPromise = null;
    logStem = null;
}
const As = new q(()=>new It);
function Dt() {
    return As.of(B().host);
}
function xt(e) {
    if (e.initPromise) {
        return e.initPromise;
    }
    if (!PPr("DEBUG_CLAUDE_AGENT_SDK")) {
        e.debugFilePath = null;
        e.initPromise = Promise.resolve();
        return e.initPromise;
    }
    let s = join(ve(), "debug");
    e.logStem = `sdk-${randomUUID()}`;
    e.debugFilePath = join(s, `${e.logStem}.txt`);
    process.stderr.write(`SDK debug logs: ${e.debugFilePath}
`);
    e.initPromise = mn().mkdir(s).catch(()=>{});
    return e.initPromise;
}
function Us(e) {
    if (e.logStem === null) {
        return null;
    }
    return {
        namespace: "log",
        sessionId: e.logStem,
        channel: "debug"
    };
}
function Ot() {
    let e = Dt();
    xt(e);
    return e.debugFilePath ?? null;
}
function U(e, s) {
    let n = Dt();
    if (n.debugFilePath === null) {
        return;
    }
    let a = `${new Date().toISOString()} ${e}
`;
    xt(n).then(()=>{
        if (s !== undefined) {
            let c = Us(n);
            if (c !== null) {
                s.append(c, [
                    {
                        data: a
                    }
                ]).catch(()=>{});
            }
            return;
        }
        if (n.debugFilePath) {
            mn().append(n.debugFilePath, a).catch(()=>{});
        }
    });
}
const Mo = p(()=>u({
        session_id: o(),
        ws_url: o(),
        work_dir: o().optional(),
        session_key: o().optional()
    }));
function js(e) {
    let s = e.trim();
    return s.startsWith("{") && s.endsWith("}");
}
const Ls = new Set([
    "filesystem.denyRead",
    "filesystem.denyWrite",
    "network.deniedDomains",
    "credentials.files",
    "credentials.envVars"
]);
const Fs = new Set([
    "ripgrep",
    "network.tlsTerminate"
]);
const Ns = new Set([
    "__proto__",
    "constructor",
    "prototype"
]);
const $s = [
    "httpProxyPort",
    "socksProxyPort"
];
function At(e, s, n = "") {
    let r = sr(e) ? {
        ...e
    } : {};
    for (let [a, c] of Object.entries(s)){
        if (Ns.has(a) || c === undefined) {
            continue;
        }
        let m = n ? `${n}.${a}` : a;
        let h = Object.hasOwn(r, a) ? r[a] : undefined;
        if (Ls.has(m) && Array.isArray(h) && Array.isArray(c)) {
            r[a] = D([
                ...h,
                ...c
            ]);
        } else if (sr(h) && sr(c) && !Fs.has(m)) {
            r[a] = At(h, c, m);
        } else {
            r[a] = c;
        }
    }
    return r;
}
function Lt(e, s) {
    let n = {
        ...e
    };
    if (!s) {
        return n;
    }
    let n_settings = n.settings;
    if (n_settings && !js(n_settings)) {
        throw Error("Cannot use both a settings file path and the sandbox option. Include the sandbox configuration in your settings file instead.");
    }
    let a = {};
    if (n_settings) {
        try {
            a = X(n_settings);
        } catch  {}
    }
    let sandbox = At(a.sandbox, s);
    let m = s.credentials?.files;
    let h = s.filesystem !== undefined || Array.isArray(m) && m.some((E)=>sr(E) && E.mode === "deny");
    let c_filesystem = sandbox.filesystem;
    if (h && s.filesystem?.disabled === undefined && sr(c_filesystem) && c_filesystem.disabled === true) {
        delete c_filesystem.disabled;
    }
    let s_network = s.network;
    let y = s_network?.allowedDomains !== undefined || (s_network?.deniedDomains?.length ?? 0) > 0 || s_network?.strictAllowlist === true;
    let c_network = sandbox.network;
    if (y && sr(c_network)) {
        for (let E of $s){
            if (s_network?.[E] === undefined && c_network[E] !== undefined) {
                delete c_network[E];
            }
        }
    }
    if (s.enabled === true && sandbox.failIfUnavailable === undefined) {
        sandbox.failIfUnavailable = true;
    }
    n.settings = _({
        ...a,
        sandbox
    });
    return n;
}
const zs = 2000;
const et = 2048;
const $t = "sdk-exit-after-stderr-drained";
const Gs = 200;
function tt(e) {
    if (e === "exit") {
        return $t;
    }
    return e;
}
class Kt {
    #e = new Set;
    #t = false;
    #s = ()=>this.killAll();
    track(e) {
        this.#e.add(e);
        if (!this.#t) {
            this.#t = true;
            process.on("exit", this.#s);
        }
    }
    untrack(e) {
        this.#e.delete(e);
    }
    isTracking(e) {
        return this.#e.has(e);
    }
    get size() {
        return this.#e.size;
    }
    killAll() {
        for (let e of this.#e){
            if (!e.killed) {
                e.kill("SIGTERM");
            }
        }
    }
    reset() {
        process.off("exit", this.#s);
        this.#t = false;
        this.#e.clear();
    }
}
const xe = new Kt;
const Ws = /[(),\u0000-\u001f\u007f-\u009f]/;
function Qs(e) {
    if (typeof e !== "string" || e.trim() === "") {
        throw Error("Skill names must be non-empty strings.");
    }
    if (!Yc(e)) {
        throw new x(`Invalid skill name ${_(e)}: the name contains an unpaired surrogate, which cannot survive the UTF-8 encoding of the CLI invocation; no skill discovered from the filesystem can have such a name.`, "skill name with unpaired surrogate rejected");
    }
    if (e !== e.trim()) {
        throw new x(`Invalid skill name ${_(e)}: leading or trailing whitespace is not allowed \u2014 the Skill tool trims the invoked name, so a padded rule can never match. Remove the padding.`, "skill name with surrounding whitespace rejected");
    }
    if (Ws.test(e)) {
        throw new x(`Invalid skill name ${_(e)}: parentheses, commas, and control characters are not allowed in skill names. Skill names match the skill's directory name (or 'plugin:skill' for plugin-qualified skills); rename the skill if its directory name contains these characters.`, "invalid skill name rejected");
    }
    if (e === "*") {
        throw Error("Invalid skill name '*': use skills: 'all' to enable every skill.");
    }
    if (e.endsWith(":*") || e.endsWith(" *")) {
        throw new x(`Invalid skill name ${_(e)}: wildcard-suffix names are not allowed; list each skill by its exact name.`, "wildcard-suffix skill name rejected");
    }
    if (e.startsWith("/")) {
        throw new x(`Invalid skill name ${_(e)}: skill names may not start with '/'. Skills are invoked as slash commands, but the skills option takes the skill's canonical name \u2014 the directory name, or 'plugin:skill'.`, "skill name with leading slash rejected");
    }
    if (e.includes("\\\\")) {
        throw new x(`Invalid skill name ${_(e)}: consecutive backslashes are not allowed \u2014 the permission-rule parser collapses escaped backslashes, so the rule would name a different skill. Rename the skill.`, "skill name with consecutive backslashes rejected");
    }
    if (e.endsWith("\\")) {
        throw new x(`Invalid skill name ${_(e)}: names may not end with an unpaired backslash.`, "skill name with unpaired trailing backslash rejected");
    }
    return e;
}
class nt {
    options;
    process;
    processStdin;
    processStdout;
    ready = false;
    abortController;
    exitError;
    exitEventDelivered = false;
    stderrTail = "";
    exitListeners = [];
    abortHandler;
    forwardedAbort = lr();
    pendingWrites = [];
    pendingEndInput = false;
    spawnResolve;
    spawnReject;
    spawnPromise;
    constructor(e){
        this.options = e;
        this.abortController = e.abortController || lr();
        if (e.deferSpawn) {
            this.spawnPromise = new Promise((resolvePromise, rejectPromise)=>{
                this.spawnResolve = resolvePromise;
                this.spawnReject = rejectPromise;
            });
            this.spawnPromise.catch(()=>{});
        } else {
            this.initialize();
        }
    }
    spawn() {
        try {
            this.initialize();
        } catch (error) {
            this.spawnAbort(W(error));
            throw error;
        }
        let pendingWrites = this.pendingWrites;
        this.pendingWrites = [];
        if (this.spawnResolve) {
            this.spawnResolve();
            this.spawnResolve = undefined;
            this.spawnReject = undefined;
        }
        for (let s of pendingWrites){
            this.write(s);
        }
        if (this.pendingEndInput) {
            this.pendingEndInput = false;
            this.processStdin?.end();
        }
    }
    spawnAbort(e) {
        if (this.spawnReject) {
            this.spawnReject(e);
            this.spawnReject = undefined;
            this.spawnResolve = undefined;
            this.pendingWrites = [];
        }
    }
    updateEnv(e) {
        if (this.options.env) {
            Object.assign(this.options.env, e);
        } else {
            this.options.env = {
                ...e
            };
        }
    }
    updateResume(e) {
        this.options.resume = e;
    }
    getDefaultExecutable() {
        if (Zk()) {
            return "bun";
        }
        return "node";
    }
    spawnLocalProcess({ command, args, cwd, env, signal }) {
        let m = spawn(command, args, {
            cwd,
            stdio: [
                "pipe",
                "pipe",
                "pipe"
            ],
            signal,
            env,
            windowsHide: true
        });
        if (m.pid !== undefined && this.options.onProcessSpawned) {
            try {
                this.options.onProcessSpawned(m.pid);
            } catch (error) {
                U(`onProcessSpawned threw: ${l(error)}`);
            }
        }
        let h = new StringDecoder("utf8");
        let S = false;
        let w = false;
        let y = false;
        let k;
        let E = Ne(env.DEBUG_CLAUDE_AGENT_SDK) || this.options.stderr !== undefined;
        m.stderr.on("data", (P)=>{
            if (y) {
                return;
            }
            let I = h.write(P);
            this.stderrTail += I;
            if (this.stderrTail.length > 2 * et) {
                this.stderrTail = jl(O7(this.stderrTail), et);
            }
            if (E) {
                U(I);
                this.options.stderr?.(I);
            }
        });
        m.stderr.on("error", (P)=>{
            U(`[ProcessTransport] stderr read failed: ${P.code ?? P.message}`);
        });
        let T = ()=>{
            if (y) {
                return;
            }
            y = true;
            if (k) {
                clearTimeout(k);
            }
            m.emit($t, m.exitCode, m.signalCode);
            let m_stderr = m.stderr;
            if (Ys(m_stderr)) {
                m_stderr.unref();
            } else {
                m_stderr.destroy();
            }
        };
        m.stderr.once("close", ()=>{
            this.stderrTail += h.end();
            S = true;
            if (w) {
                T();
            }
        });
        m.once("exit", ()=>{
            w = true;
            this.ready = false;
            if (S) {
                T();
            } else {
                k = setTimeout(T, Gs);
            }
        });
        return {
            stdin: m.stdin,
            stdout: m.stdout,
            get killed () {
                return m.killed;
            },
            get exitCode () {
                return m.exitCode;
            },
            get signalCode () {
                return m.signalCode;
            },
            kill: m.kill.bind(m),
            on: (P, I)=>m.on(tt(P), I),
            once: (P, I)=>m.once(tt(P), I),
            off: (P, I)=>m.off(tt(P), I)
        };
    }
    initialize() {
        try {
            let { additionalDirectories = [], projectConfigRoot, agent, betas, cwd, executable = this.getDefaultExecutable(), executableArgs = [], extraArgs = {}, pathToClaudeCodeExecutable, env = {
                ...process.env
            }, thinkingConfig, maxTurns, maxBudgetUsd, taskBudget, model, fallbackModel, jsonSchema, permissionMode, allowDangerouslySkipPermissions, permissionPromptToolName, permissionPrompts, continueConversation, resume, settingSources, skills, disallowedTools = [], tools, mcpServers, strictMcpConfig, canUseTool, includePartialMessages, plugins, pluginsViaInitialize, sandbox } = this.options;
            let { allowedTools = [] } = this.options;
            if (skills !== undefined) {
                let R = skills === "all" ? [
                    "Skill"
                ] : skills.map((j)=>`Skill(${Qs(j)})`);
                let F = new Set(allowedTools);
                allowedTools = [
                    ...allowedTools,
                    ...R.filter((j)=>!F.has(j))
                ];
            }
            let b = [
                "--output-format",
                "stream-json",
                "--verbose",
                "--input-format",
                "stream-json"
            ];
            if (thinkingConfig) {
                switch(thinkingConfig.type){
                    case "enabled":
                        if (thinkingConfig.budgetTokens === undefined) {
                            b.push("--thinking=adaptive");
                        } else {
                            b.push(ok("--max-thinking-tokens", thinkingConfig.budgetTokens));
                        }
                        break;
                    case "disabled":
                        b.push("--thinking=disabled");
                        break;
                    case "adaptive":
                        b.push("--thinking=adaptive");
                        break;
                }
                if (thinkingConfig.type !== "disabled" && thinkingConfig.display) {
                    b.push(ok("--thinking-display", thinkingConfig.display));
                }
            }
            if (this.options.effort) {
                b.push(ok("--effort", this.options.effort));
            }
            if (maxTurns) {
                b.push(ok("--max-turns", maxTurns));
            }
            if (maxBudgetUsd !== undefined) {
                b.push(ok("--max-budget-usd", maxBudgetUsd));
            }
            if (taskBudget) {
                b.push(ok("--task-budget", taskBudget.total));
            }
            if (model) {
                b.push(ok("--model", model));
            }
            if (agent) {
                b.push(ok("--agent", agent));
            }
            if (betas && betas.length > 0) {
                b.push(ok("--betas", betas.join(",")));
            }
            if (jsonSchema) {
                b.push(ok("--json-schema", _(jsonSchema)));
            }
            if (this.options.debugFile) {
                b.push(ok("--debug-file", this.options.debugFile));
            } else if (this.options.debug) {
                b.push("--debug");
            }
            if (!this.options.debugFile && !this.options.spawnClaudeCodeProcess) {
                let R = Ot();
                if (R) {
                    b.push(ok("--debug-file", R));
                }
            }
            if (canUseTool) {
                if (permissionPromptToolName) {
                    throw Error("canUseTool callback cannot be used with permissionPromptToolName. Please use one or the other.");
                }
                b.push("--permission-prompt-tool=stdio");
            } else if (permissionPromptToolName) {
                b.push(ok("--permission-prompt-tool", permissionPromptToolName));
            }
            if (permissionPrompts) {
                b.push(ok("--permission-prompts", permissionPrompts));
            }
            if (continueConversation) {
                b.push("--continue");
            }
            if (resume) {
                b.push(ok("--resume", resume));
            }
            if (allowedTools.length > 0) {
                b.push(ok("--allowedTools", allowedTools.join(",")));
            }
            if (disallowedTools.length > 0) {
                b.push(ok("--disallowedTools", disallowedTools.join(",")));
            }
            if (tools !== undefined) {
                if (Array.isArray(tools)) {
                    b.push(ok("--tools", tools.join(",")));
                } else {
                    b.push("--tools=default");
                }
            }
            if (mcpServers && Object.keys(mcpServers).length > 0) {
                b.push(...G6n("--mcp-config", _({
                    mcpServers
                })));
            }
            if (settingSources !== undefined) {
                b.push(ok("--setting-sources", settingSources.join(",")));
            }
            if (strictMcpConfig) {
                b.push("--strict-mcp-config");
            }
            if (permissionMode) {
                b.push(ok("--permission-mode", permissionMode));
            }
            if (allowDangerouslySkipPermissions) {
                b.push("--allow-dangerously-skip-permissions");
            }
            if (fallbackModel) {
                if (model && fallbackModel === model) {
                    throw Error("Fallback model cannot be the same as the main model. Please specify a different model for fallbackModel option.");
                }
                b.push(ok("--fallback-model", fallbackModel));
            }
            if (this.options.includeHookEvents) {
                b.push("--include-hook-events");
            }
            if (includePartialMessages) {
                b.push("--include-partial-messages");
            }
            if (this.options.sessionMirror) {
                b.push("--session-mirror");
            }
            if (projectConfigRoot !== undefined) {
                b.push(ok("--project-config-root", projectConfigRoot));
            }
            for (let R of additionalDirectories){
                b.push(ok("--add-dir", R));
            }
            if (pluginsViaInitialize) {
                b.push("--await-initialize");
            } else if (plugins && plugins.length > 0) {
                for (let R of plugins){
                    if (R.type === "local") {
                        b.push(R.skipMcpDiscovery ? ok("--plugin-dir-no-mcp", R.path) : ok("--plugin-dir", R.path));
                    } else {
                        throw Error(`Unsupported plugin type: ${R.type}`);
                    }
                }
            }
            if (this.options.forkSession) {
                b.push("--fork-session");
            }
            if (this.options.resumeSessionAt) {
                b.push(ok("--resume-session-at", this.options.resumeSessionAt));
            }
            if (this.options.resumeDropsTurn !== undefined) {
                b.push(ok("--resume-drops-turn", this.options.resumeDropsTurn));
            }
            if (this.options.sessionId) {
                b.push(ok("--session-id", this.options.sessionId));
            }
            if (this.options.persistSession === false) {
                b.push("--no-session-persistence");
            }
            if (this.options.managedSettings) {
                b.push(...G6n("--managed-settings", this.options.managedSettings));
            }
            let Ee = {
                ...extraArgs ?? {}
            };
            if (this.options.settings) {
                Ee.settings = this.options.settings;
            }
            let Te = Lt(Ee, sandbox);
            for (let [R, F] of Object.entries(Te)){
                if (F === null) {
                    b.push(`--${R}`);
                } else {
                    PFt(b, R, F);
                }
            }
            if (!env.CLAUDE_CODE_ENTRYPOINT) {
                env.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
            }
            delete env.NODE_OPTIONS;
            if (Ne(env.DEBUG_CLAUDE_AGENT_SDK)) {
                env.DEBUG = "1";
            } else {
                delete env.DEBUG;
            }
            let pe = Vs(pathToClaudeCodeExecutable);
            let command = pe ? pathToClaudeCodeExecutable : executable;
            let args = pe ? [
                ...executableArgs,
                ...b
            ] : [
                ...executableArgs,
                pathToClaudeCodeExecutable,
                ...b
            ];
            let ge = {
                command,
                args,
                cwd,
                env,
                signal: this.forwardedAbort.signal
            };
            if (this.options.spawnClaudeCodeProcess) {
                U(`Spawning Claude Code (custom): ${command} ${args.join(" ")}`);
                this.process = this.options.spawnClaudeCodeProcess(ge);
            } else {
                U(`Spawning Claude Code: ${command} ${args.join(" ")}`);
                this.process = this.spawnLocalProcess(ge);
            }
            this.processStdin = this.process.stdin;
            this.processStdout = this.process.stdout;
            this.processStdin.on("error", (R)=>{
                U(`[ProcessTransport] stdin write failed (child likely exited): ${R.code ?? R.message}`);
                this.ready = false;
            });
            xe.track(this.process);
            this.abortHandler = ()=>this.close();
            this.abortController.signal.addEventListener("abort", this.abortHandler);
            if (this.abortController.signal.aborted) {
                this.close();
            }
            let te = this.process;
            te.on("error", (R)=>{
                this.ready = false;
                let F = R;
                let j = F.syscall !== undefined ? F.syscall.startsWith("spawn") : jt(R);
                if (j && !te.killed) {
                    xe.untrack(te);
                }
                if (this.abortController.signal.aborted) {
                    this.exitError = Oe();
                    mG(R, {
                        telemetryMessage: "Claude Code process aborted by user",
                        errorClass: "aborted"
                    });
                } else if (j && jt(R)) {
                    let { message, telemetryMessage, errorClass } = Xs(pathToClaudeCodeExecutable, pe);
                    let N = {
                        telemetryMessage: `${telemetryMessage}${st(R)}`,
                        errorClass,
                        code: Vr(R)
                    };
                    this.exitError = mG(ReferenceError(message), N);
                    mG(R, N);
                    U(this.exitError.message);
                } else {
                    let se = {
                        telemetryMessage: j ? `Failed to spawn Claude Code process${st(R)}` : `Claude Code process error${st(R)}`,
                        errorClass: j ? "spawn_failed" : "process_error",
                        code: Vr(R)
                    };
                    this.exitError = mG(Error(`Failed to spawn Claude Code process: ${O7(R.message)}`), se);
                    mG(R, se);
                    U(this.exitError.message);
                }
            });
            te.on("exit", (R, F)=>{
                this.exitEventDelivered = true;
                this.ready = false;
                if (this.abortController.signal.aborted) {
                    this.exitError = Oe();
                } else {
                    let j = this.getProcessExitError(R, F);
                    if (j) {
                        this.exitError = j;
                        U(j.message);
                    }
                }
            });
            this.ready = !this.abortController.signal.aborted;
        } catch (error) {
            this.ready = false;
            throw error;
        }
    }
    getProcessExitError(e, s) {
        if (e !== 0 && e !== null) {
            let exitCode = Number.isInteger(e) ? e : undefined;
            return mG(Error(`Claude Code process exited with code ${e}${this.formatStderrTail()}`), {
                telemetryMessage: `Claude Code process exited with code ${exitCode ?? "unknown"}`,
                errorClass: "process_exited_nonzero",
                exitCode
            });
        } else if (s) {
            let n = /^SIG[A-Z0-9]{1,8}$/.test(s) ? s : "unknown";
            return mG(Error(`Claude Code process terminated by signal ${s}${this.formatStderrTail()}`), {
                telemetryMessage: `Claude Code process terminated by signal ${n}`,
                errorClass: "process_killed_by_signal",
                signal: n
            });
        }
    }
    formatStderrTail() {
        let e = jl(O7(this.stderrTail), et).trim();
        if (e) {
            return `. stderr: ${e}`;
        }
        return "";
    }
    write(e) {
        if (this.abortController.signal.aborted) {
            throw Ft();
        }
        if (this.spawnResolve) {
            this.pendingWrites.push(e);
            return;
        }
        if (!this.ready || !this.processStdin) {
            throw Error("ProcessTransport is not ready for writing");
        }
        if (this.processStdin.writableEnded) {
            U("[ProcessTransport] Dropping write to ended stdin stream");
            return;
        }
        if (this.process?.killed || this.process?.exitCode !== null) {
            throw Error("Cannot write to terminated process");
        }
        if (this.exitError) {
            throw mG(Error(`Cannot write to process that exited with error: ${this.exitError.message}`), {
                telemetryMessage: `Cannot write to process that exited with error: ${Lq(this.exitError) ?? "untagged exit error"}`,
                errorClass: Nt(this.exitError, "errorClass"),
                code: Vr(this.exitError),
                exitCode: Js(this.exitError),
                signal: Nt(this.exitError, "signal")
            });
        }
        U(`[ProcessTransport] Writing to stdin: ${e.substring(0, 100)}`);
        try {
            if (!this.processStdin.write(e)) {
                U("[ProcessTransport] Write buffer full, data queued");
            }
        } catch (error) {
            this.ready = false;
            throw Error(`Failed to write to process stdin: ${l(error)}`);
        }
    }
    [Symbol.dispose]() {
        this.close();
    }
    close() {
        this.spawnAbort(this.abortController.signal.aborted ? Oe() : Error("Query closed before spawn"));
        if (this.processStdin) {
            this.processStdin.end();
            this.processStdin = undefined;
        }
        if (this.abortHandler) {
            this.abortController.signal.removeEventListener("abort", this.abortHandler);
            this.abortHandler = undefined;
        }
        let e = this.process?.exitCode ?? null;
        let s = this.process?.signalCode ?? null;
        let n = !this.exitEventDelivered && (e !== null && e >= 0 || s !== null);
        let r;
        if (n) {
            this.exitEventDelivered = true;
            r = this.abortController.signal.aborted ? Oe() : this.getProcessExitError(e, s);
            if (r && !this.exitError) {
                this.exitError = r;
            }
        }
        let exitListeners = this.exitListeners;
        this.exitListeners = [];
        for (let { callback, handler } of exitListeners){
            this.process?.off("exit", handler);
            if (n) {
                try {
                    callback(r);
                } catch (error) {
                    U(`[ProcessTransport] onExit callback threw during close(): ${l(error)}`);
                }
            }
        }
        let c = ()=>{
            if (this.abortController.signal.aborted) {
                this.forwardedAbort.abort(this.abortController.signal.reason);
            }
        };
        let process = this.process;
        if (process && !process.killed && process.exitCode === null && process.signalCode == null) {
            setTimeout((h, S)=>{
                if (h.exitCode !== null || h.signalCode != null) {
                    S();
                    return;
                }
                h.kill("SIGTERM");
                setTimeout((w)=>{
                    if (w.exitCode === null) {
                        w.kill("SIGKILL");
                    }
                }, 5000, h).unref();
                S();
            }, zs, process, c).unref();
            process.once("exit", ()=>xe.untrack(process));
        } else if (process) {
            xe.untrack(process);
            c();
        }
        this.ready = false;
    }
    isReady() {
        return this.ready;
    }
    async *readMessages() {
        if (this.spawnPromise) {
            await this.spawnPromise;
            this.spawnPromise = undefined;
        }
        if (!this.processStdout) {
            throw Error("ProcessTransport output stream not available");
        }
        if (this.exitError) {
            throw this.exitError;
        }
        let e = createInterface({
            input: this.processStdout
        });
        let s = this.process ? (()=>{
            let process = this.process;
            let r = ()=>e.close();
            process.on("error", r);
            return ()=>process.off("error", r);
        })() : undefined;
        if (this.exitError) {
            e.close();
        }
        try {
            for await (let n of e){
                if (n.trim()) {
                    let r;
                    try {
                        r = X(n);
                    } catch (a) {
                        U(`Non-JSON stdout: ${n}`);
                        continue;
                    }
                    yield r;
                }
            }
            if (this.exitError) {
                throw this.exitError;
            }
            await this.waitForExit();
        } finally{
            s?.();
            e.close();
        }
    }
    endInput() {
        if (this.spawnResolve) {
            this.pendingEndInput = true;
            return;
        }
        if (this.processStdin) {
            this.processStdin.end();
        }
    }
    onExit(callback) {
        if (!this.process) {
            return ()=>{};
        }
        let handler = (n, r)=>{
            let a = this.getProcessExitError(n, r);
            callback(a);
        };
        this.process.on("exit", handler);
        this.exitListeners.push({
            callback,
            handler
        });
        return ()=>{
            if (this.process) {
                this.process.off("exit", handler);
            }
            let n = this.exitListeners.findIndex((r)=>r.handler === handler);
            if (n !== -1) {
                this.exitListeners.splice(n, 1);
            }
        };
    }
    async waitForExit() {
        if (this.exitError) {
            throw this.exitError;
        }
        if (!this.process || this.process.exitCode === 0 || this.process.killed && this.exitEventDelivered) {
            return;
        }
        return new Promise((resolvePromise, rejectPromise)=>{
            let n = (a, c)=>{
                if (this.abortController.signal.aborted) {
                    rejectPromise(Ft());
                    return;
                }
                let m = this.getProcessExitError(a, c);
                if (m) {
                    rejectPromise(m);
                } else {
                    resolvePromise();
                }
            };
            this.process.once("exit", n);
            let r = (a)=>{
                this.process.off("exit", n);
                rejectPromise(a);
            };
            this.process.once("error", r);
            this.process.once("exit", ()=>{
                this.process.off("error", r);
            });
        });
    }
}
function Vs(pathToClaudeCodeExecutable) {
    return ![
        ".js",
        ".mjs",
        ".tsx",
        ".ts",
        ".jsx"
    ].some((n)=>pathToClaudeCodeExecutable.endsWith(n));
}
function Xs(pathToClaudeCodeExecutable, s) {
    let n = s ? "native binary" : "executable";
    let r = O7(pathToClaudeCodeExecutable);
    if (existsSync(pathToClaudeCodeExecutable)) {
        return {
            message: s ? `Claude Code native binary at ${r} exists but failed to launch. This usually means the binary does not match this system's libc \u2014 e.g. spawning a musl-linked binary on a glibc Linux host fails because the musl dynamic loader (/lib/ld-musl-*) is missing. Specify a matching binary with options.pathToClaudeCodeExecutable.` : `Claude Code executable at ${r} exists but failed to launch.`,
            telemetryMessage: `Claude Code ${n} exists at the configured path but failed to launch`,
            errorClass: "executable_launch_failed"
        };
    }
    return {
        message: s ? `Claude Code native binary not found at ${r}. Please ensure Claude Code is installed via native installer or specify a valid path with options.pathToClaudeCodeExecutable.` : `Claude Code executable not found at ${r}. Is options.pathToClaudeCodeExecutable set?`,
        telemetryMessage: `Claude Code ${n} not found at the configured path`,
        errorClass: "executable_not_found"
    };
}
function st(e) {
    let s = Vr(e);
    if (s === undefined) {
        return "";
    }
    return ` (${s})`;
}
function Oe() {
    return mG(new W3e("Claude Code process aborted by user"), {
        telemetryMessage: "Claude Code process aborted by user",
        errorClass: "aborted"
    });
}
function Ft() {
    return mG(new W3e("Operation aborted"), {
        telemetryMessage: "Operation aborted",
        errorClass: "aborted"
    });
}
function Nt(exitError, s) {
    let n = Object.hasOwn(exitError, s) ? Reflect.get(exitError, s) : undefined;
    if (typeof n === "string") {
        return n;
    }
}
function Js(exitError) {
    let s = Object.hasOwn(exitError, "exitCode") ? Reflect.get(exitError, "exitCode") : undefined;
    if (typeof s === "number") {
        return s;
    }
}
function Ys(e) {
    return typeof Reflect.get(e, "unref") === "function";
}
const re = "@anthropic-ai/claude-agent-sdk";
function en() {
    let e = typeof process.report?.getReport === "function" ? process.report.getReport() : null;
    return e != null && e.header?.glibcVersionRuntime === undefined;
}
function Bt(e, s = {}) {
    let n = s.platform ?? "linux";
    let r = s.arch ?? "x64";
    let a = s.exists ?? existsSync;
    let c = s.preferMusl ?? en();
    let m = process.env.SDK_NATIVE_BIN ?? "claude";
    let h = n === "win32" ? ".exe" : "";
    let w = (n === "android" ? [
        `${re}-linux-${r}-android`
    ] : n === "linux" ? c ? [
        `${re}-linux-${r}-musl`,
        `${re}-linux-${r}`
    ] : [
        `${re}-linux-${r}`,
        `${re}-linux-${r}-musl`
    ] : [
        `${re}-${n}-${r}`
    ]).map((y)=>`${y}/${m}${h}`);
    for (let y of w){
        try {
            let k = e(y);
            if (a(k)) {
                return k;
            }
        } catch  {}
    }
    return null;
}
const qt = 250;
const Ae = "sdk-manifest-capture:";
const ie = Symbol("suppressControlResponse");
class Ue {
    transport;
    isSingleUserTurn;
    canUseTool;
    hooks;
    abortController;
    jsonSchema;
    initConfig;
    onElicitation;
    getOAuthToken;
    getHostAuthToken;
    onUserDialog;
    verbatimPrompts;
    runEndCeilingMs;
    pendingControlResponses = new Map;
    unmatchedControlResponses = new Map;
    static UNMATCHED_CONTROL_RESPONSES_MAX = 1024;
    cleanupPerformed = false;
    cleanupCause;
    sdkMessages;
    inputStream = new _E;
    initialization;
    cancelControllers = new Map;
    hookCallbacks = new Map;
    nextCallbackId = 0;
    initHooksPayload;
    sdkMcpServers = new Map;
    initializeWritten;
    initializeHasBeenWritten = false;
    markInitializeWritten;
    writingFirstInitialize = false;
    stopSdkMcpManifestCapture;
    sdkMcpToolsChangedDuringCapture = new Set;
    pendingMcpResponses = new Map;
    runEndedResolve;
    runEnded = false;
    resultReceived = false;
    runEndCeilingTimer;
    sessionState;
    lastErrorResultText;
    errorTextBeforeModelLessTurns;
    modelLessTurnEnded = false;
    latestCommands;
    transcriptMirrorBatcher;
    cleanupCallbacks = [];
    cleanupPromise;
    setIsSingleUserTurn(e) {
        this.isSingleUserTurn = e;
    }
    setTranscriptMirrorBatcher(e) {
        this.transcriptMirrorBatcher = e;
    }
    reportMirrorError(e, error) {
        let n = {
            type: "system",
            subtype: "mirror_error",
            error,
            key: e,
            uuid: fwe(),
            session_id: e.sessionId
        };
        this.inputStream.enqueue(n);
    }
    addCleanupCallback(e) {
        if (this.cleanupPerformed) {
            e();
        } else {
            this.cleanupCallbacks.push(e);
        }
    }
    isClosed() {
        return this.cleanupPerformed;
    }
    hasBidirectionalNeeds() {
        return this.sdkMcpServers.size > 0 || this.hooks !== undefined && Object.keys(this.hooks).length > 0 || this.canUseTool !== undefined || this.onElicitation !== undefined || this.onUserDialog !== undefined || this.getOAuthToken !== undefined || this.getHostAuthToken !== undefined || this.workSecretAnswerer !== undefined;
    }
    remoteControlCallGeneration = 0;
    uiHost;
    workSecretAnswerer;
    constructor(e, s, n, r, a, c = new Map, m, h, S, w, y, k, E = false, T = hkt){
        this.transport = e;
        this.isSingleUserTurn = s;
        this.canUseTool = n;
        this.hooks = r;
        this.abortController = a;
        this.jsonSchema = m;
        this.initConfig = h;
        this.onElicitation = S;
        this.getOAuthToken = w;
        this.getHostAuthToken = y;
        this.onUserDialog = k;
        this.verbatimPrompts = E;
        this.runEndCeilingMs = T;
        for (let [C, P] of c){
            this.connectSdkMcpServer(C, P);
        }
        this.sdkMessages = this.readSdkMessages();
        this.readMessages();
        this.initializeWritten = new Promise((resolvePromise)=>{
            this.markInitializeWritten = ()=>{
                this.initializeHasBeenWritten = true;
                resolvePromise();
            };
        });
        this.initialization = this.initialize({
            first: true
        });
        this.initialization.catch(()=>{});
    }
    setError(e) {
        this.inputStream.error(e);
    }
    async stopTask(e) {
        await this.request({
            subtype: "stop_task",
            task_id: e
        });
    }
    async backgroundTasks(tool_use_id) {
        return (await this.request({
            subtype: "background_tasks",
            tool_use_id
        })).response.backgrounded ?? true;
    }
    close() {
        this.cleanup();
    }
    cleanup(e) {
        this.clearRunEndCeiling();
        if (this.cleanupPromise) {
            return this.cleanupPromise;
        }
        this.cleanupPerformed = true;
        this.cleanupCause = e;
        this.stopSdkMcpManifestCapture?.();
        this.cleanupPromise = this.performCleanup(e);
        return this.cleanupPromise;
    }
    async performCleanup(e) {
        for (let s of this.cleanupCallbacks){
            try {
                s();
            } catch  {}
        }
        this.cleanupCallbacks = [];
        if (this.transcriptMirrorBatcher) {
            try {
                await this.transcriptMirrorBatcher.flush();
            } catch  {}
        }
        try {
            for (let s of this.cancelControllers.values()){
                s.abort();
            }
            this.cancelControllers.clear();
            this.transport.close();
        } catch (error) {
            t(`[Query.cleanup] transport.close() failed: ${l(error)}`, {
                level: "error"
            });
        }
        try {
            let s = e ?? rt();
            for (let { reject } of this.pendingControlResponses.values()){
                reject(s);
            }
            this.pendingControlResponses.clear();
            this.unmatchedControlResponses.clear();
            for (let { reject } of this.pendingMcpResponses.values()){
                reject(s);
            }
            this.pendingMcpResponses.clear();
            this.hookCallbacks.clear();
            for (let { transport } of this.sdkMcpServers.values()){
                transport.close().catch(()=>{});
            }
            this.sdkMcpServers.clear();
            if (e) {
                this.inputStream.error(e);
            } else {
                this.inputStream.done();
            }
        } catch (s) {}
        if (this.transport.waitForExit) {
            let s = new AbortController;
            try {
                await Promise.race([
                    this.transport.waitForExit(),
                    Q(2000, s.signal)
                ]);
            } catch  {} finally{
                s.abort();
            }
        }
    }
    next(...[e]) {
        return this.sdkMessages.next(e);
    }
    async return(e) {
        await this.cleanup();
        return this.sdkMessages.return(e);
    }
    async throw(e) {
        await this.cleanup();
        return this.sdkMessages.throw(e);
    }
    [Symbol.asyncIterator]() {
        return this.sdkMessages;
    }
    async [Symbol.asyncDispose]() {
        await this.cleanup();
    }
    async readMessages() {
        try {
            for await (let e of this.transport.readMessages()){
                if (e.type === "control_response") {
                    let s = this.pendingControlResponses.get(e.response.request_id);
                    if (s) {
                        s.handler(e.response);
                    } else {
                        if (this.unmatchedControlResponses.size >= Ue.UNMATCHED_CONTROL_RESPONSES_MAX) {
                            let n = this.unmatchedControlResponses.keys().next().value;
                            if (n !== undefined) {
                                this.unmatchedControlResponses.delete(n);
                            }
                        }
                        this.unmatchedControlResponses.set(e.response.request_id, e.response);
                    }
                    continue;
                } else if (e.type === "control_request") {
                    this.handleControlRequest(e);
                    continue;
                } else if (e.type === "control_cancel_request") {
                    this.handleControlCancelRequest(e);
                    continue;
                } else if (e.type === "keep_alive") {
                    continue;
                } else if (e.type === "transcript_mirror") {
                    this.transcriptMirrorBatcher?.enqueue(e.filePath, e.entries);
                    continue;
                }
                if (e.type === "system" && e.subtype === "commands_changed" && Array.isArray(e.commands)) {
                    this.latestCommands = e.commands;
                }
                if (e.type === "system" && (e.subtype === "post_turn_summary" || e.subtype === "task_summary" || e.subtype === "session_metadata")) {
                    this.inputStream.enqueue(e);
                    continue;
                }
                if (e.type === "active_goal") {
                    this.inputStream.enqueue(e);
                    continue;
                }
                if (e.type === "autocompact_state") {
                    this.inputStream.enqueue(e);
                    continue;
                }
                if (e.type === "result") {
                    if (this.transcriptMirrorBatcher) {
                        await this.transcriptMirrorBatcher.flush();
                    }
                    let s = e.is_error ? e.subtype === "success" ? e.result : e.errors.map((n)=>n.trim()).filter(Boolean).join("; ") : undefined;
                    this.lastErrorResultText = s || undefined;
                    this.modelLessTurnEnded = e.subtype === "success" && !e.is_error && e.num_turns === 0 && e.result === "";
                    if (!this.modelLessTurnEnded) {
                        this.errorTextBeforeModelLessTurns = this.lastErrorResultText;
                    }
                    this.resultReceived = true;
                    if (this.sessionState === undefined || this.sessionState === "idle" || !this.hasBidirectionalNeeds()) {
                        this.endRun();
                    } else {
                        this.armRunEndCeiling();
                    }
                } else if (e.type === "system" && e.subtype === "session_state_changed") {
                    this.sessionState = e.state;
                    if (e.state === "idle") {
                        if (this.resultReceived) {
                            this.endRun();
                        }
                    } else if (!(this.isSingleUserTurn && this.runEnded)) {
                        this.runEnded = false;
                        if (e.state === "requires_action") {
                            this.clearRunEndCeiling();
                        } else if (this.resultReceived) {
                            this.armRunEndCeiling();
                        }
                    }
                    if ("sdk_host_only" in e && e.sdk_host_only === true) {
                        continue;
                    }
                } else {
                    this.lastErrorResultText = undefined;
                    if (e.type === "system" && e.subtype === "init") {
                        this.modelLessTurnEnded = false;
                    } else if (e.type !== "system" || e.subtype === "compact_boundary") {
                        this.errorTextBeforeModelLessTurns = undefined;
                        this.modelLessTurnEnded = false;
                    }
                    if ((e.type === "assistant" || e.type === "stream_event") && e.parent_tool_use_id === null && !(this.isSingleUserTurn && this.runEnded)) {
                        this.runEnded = false;
                        this.clearRunEndCeiling();
                    }
                }
                this.inputStream.enqueue(e);
            }
            if (this.transcriptMirrorBatcher) {
                await this.transcriptMirrorBatcher.flush();
            }
            this.inputStream.done();
            this.cleanup();
        } catch (error) {
            if (this.transcriptMirrorBatcher) {
                await this.transcriptMirrorBatcher.flush();
            }
            let s = this.lastErrorResultText ?? (this.modelLessTurnEnded ? this.errorTextBeforeModelLessTurns : undefined);
            if (s !== undefined && !(error instanceof W3e) && error?.name !== "SSEHttpError") {
                let n = mG(Error(`Claude Code returned an error result: ${s}`), {
                    telemetryMessage: "Claude Code returned an error result",
                    errorClass: "error_result"
                });
                t(`[Query.readMessages] Replacing exit error with result text. Original: ${l(error)}`);
                this.inputStream.error(n);
                this.cleanup(n);
                return;
            }
            this.inputStream.error(error);
            this.cleanup(error);
        }
    }
    async handleControlRequest(e) {
        if (this.cleanupPerformed) {
            t(`[Query.handleControlRequest] Request ${e.request_id} (${e.request.subtype}) arrived after close \u2014 skipping`);
            return;
        }
        if (this.cancelControllers.has(e.request_id)) {
            t(`[Query.handleControlRequest] Duplicate delivery of in-flight request ${e.request_id} (${e.request.subtype}) \u2014 skipping`);
            return;
        }
        let s = new AbortController;
        this.cancelControllers.set(e.request_id, s);
        try {
            let n;
            try {
                let response = await this.processControlRequest(e, s.signal);
                if (this.cleanupPerformed) {
                    return;
                }
                if (response === ie) {
                    return;
                }
                let a = {
                    type: "control_response",
                    response: {
                        subtype: "success",
                        request_id: e.request_id,
                        response
                    }
                };
                n = _(a) + `
`;
            } catch (error) {
                if (this.cleanupPerformed) {
                    return;
                }
                let a = {
                    type: "control_response",
                    response: {
                        subtype: "error",
                        request_id: e.request_id,
                        error: l(error)
                    }
                };
                n = _(a) + `
`;
            }
            try {
                await Promise.resolve(this.transport.write(n));
            } catch (error) {
                t(`[Query.handleControlRequest] Response write failed: ${l(error)}`, {
                    level: "error"
                });
            }
        } finally{
            if (this.cancelControllers.get(e.request_id) === s) {
                this.cancelControllers.delete(e.request_id);
            }
        }
    }
    handleControlCancelRequest(e) {
        let s = this.cancelControllers.get(e.request_id);
        if (s) {
            s.abort();
            this.cancelControllers.delete(e.request_id);
        }
    }
    async processControlRequest(e, s) {
        if (Pge.some((n)=>n === e.request.subtype)) {
            t(`[Query.processControlRequest] ${e.request.subtype} ${e.request_id} is for the machine serving this session's tools \u2014 leaving it unanswered`);
            return ie;
        }
        if (e.request.subtype === "can_use_tool") {
            if (!this.canUseTool) {
                throw Error("canUseTool callback is not provided.");
            }
            let n = e.request.computer_folder;
            let r = await this.canUseTool(e.request.tool_name, e.request.input, {
                signal: s,
                suggestions: e.request.permission_suggestions,
                blockedPath: e.request.blocked_path,
                ...e.request.mcp_server && {
                    mcpServer: {
                        name: e.request.mcp_server.name,
                        source: e.request.mcp_server.source
                    }
                },
                decisionReason: e.request.decision_reason,
                ...typeof e.request.decision_reason_type === "string" && {
                    decisionReasonType: e.request.decision_reason_type
                },
                ...typeof e.request.decision_reason_code === "string" && {
                    decisionReasonCode: e.request.decision_reason_code
                },
                title: e.request.title,
                displayName: e.request.display_name,
                description: e.request.description,
                defaultToNo: e.request.default_to_no,
                suppressAlwaysAllowRule: e.request.suppress_always_allow_rule,
                toolUseID: e.request.tool_use_id,
                agentID: e.request.agent_id,
                requestId: e.request_id,
                ...typeof e.request.requires_user_interaction === "boolean" && {
                    requiresUserInteraction: e.request.requires_user_interaction
                },
                ...typeof e.request.server_prompt === "string" && {
                    serverPrompt: e.request.server_prompt
                },
                ...typeof n === "object" && n !== null && "path" in n && typeof n.path === "string" && "computer_name" in n && typeof n.computer_name === "string" && {
                    computerFolder: {
                        path: n.path,
                        computer_name: n.computer_name
                    }
                },
                ...e.request.matched_ask_rule && {
                    matchedAskRule: {
                        source: e.request.matched_ask_rule.source,
                        toolName: e.request.matched_ask_rule.tool_name,
                        ...e.request.matched_ask_rule.rule_content !== undefined && {
                            ruleContent: e.request.matched_ask_rule.rule_content
                        }
                    }
                }
            });
            if (r === null) {
                return ie;
            }
            return {
                ...r,
                toolUseID: e.request.tool_use_id
            };
        } else if (e.request.subtype === "hook_callback") {
            return await this.handleHookCallbacks(e.request.callback_id, e.request.input, e.request.tool_use_id, s);
        } else if (e.request.subtype === "mcp_message") {
            let n = e.request;
            let r = this.sdkMcpServers.get(n.server_name)?.transport;
            if (!r) {
                throw Error(`SDK MCP server not found: ${n.server_name}`);
            }
            if (ggn(n.message)) {
                return {
                    mcp_response: await this.handleMcpControlRequest(n.server_name, n, r)
                };
            } else {
                if (r.onmessage) {
                    r.onmessage(n.message);
                }
                return {
                    mcp_response: {
                        jsonrpc: "2.0",
                        result: {},
                        id: 0
                    }
                };
            }
        } else if (e.request.subtype === "elicitation") {
            let n = e.request;
            if (this.onElicitation) {
                let r = await this.onElicitation({
                    serverName: n.mcp_server_name,
                    message: n.message,
                    mode: n.mode,
                    url: n.url,
                    elicitationId: n.elicitation_id,
                    requestedSchema: n.requested_schema,
                    title: n.title,
                    displayName: n.display_name,
                    description: n.description
                }, {
                    signal: s,
                    requestId: e.request_id
                });
                if (r === null) {
                    return ie;
                }
                return r;
            }
            return {
                action: "decline"
            };
        } else if (e.request.subtype === "request_user_dialog") {
            if (this.onUserDialog) {
                let n = await this.onUserDialog({
                    dialogKind: e.request.dialog_kind,
                    payload: e.request.payload,
                    toolUseID: e.request.tool_use_id
                }, {
                    signal: s,
                    requestId: e.request_id
                });
                if (n === null) {
                    return ie;
                }
                return n;
            }
            t(`[Query] No onUserDialog handler for request_user_dialog (kind=${e.request.dialog_kind}) \u2014 staying silent so a capable client (or the worker's park deadline) settles it`);
            i("tengu_request_user_dialog_response_ignored", {
                shape: d("auto_cancel")
            });
            return ie;
        } else if (e.request.subtype === "oauth_token_refresh") {
            if (!this.getOAuthToken) {
                throw Error("getOAuthToken callback is not provided.");
            }
            let reason;
            let accessToken = await this.getOAuthToken({
                signal: s,
                onDecline: (a)=>{
                    if (jTs(a)) {
                        reason = a;
                    }
                }
            }) ?? null;
            if (accessToken === null && reason !== undefined) {
                return {
                    accessToken,
                    reason
                };
            }
            return {
                accessToken
            };
        } else if (e.request.subtype === "host_auth_token_refresh") {
            if (!this.getHostAuthToken) {
                throw Error("getHostAuthToken callback is not provided.");
            }
            let authToken = await this.getHostAuthToken({
                signal: s
            }) ?? null;
            if (typeof authToken === "string" || authToken === null) {
                return {
                    authToken
                };
            }
            return authToken;
        } else if (e.request.subtype === "remote_control_work_secret") {
            let n = this.workSecretAnswerer;
            if (!n) {
                throw Error("refreshWorkSecret callback is not provided.");
            }
            if (!Ht(n.sessionId, e.request.session_id)) {
                throw Error("remote_control_work_secret names a session this host did not attach.");
            }
            return {
                work_secret: await n.refresh(n.sessionId, {
                    signal: s
                }) || null
            };
        }
        if (e.request.subtype === "ui_copy" && this.uiHost?.copy) {
            let { subtype, ...rest } = e.request;
            return this.uiHost.copy(rest, {
                signal: s
            });
        }
        if (e.request.subtype === "ui_prompt_read" && this.uiHost?.promptRead) {
            let { subtype, ...rest } = e.request;
            return this.uiHost.promptRead(rest, {
                signal: s
            });
        }
        if (e.request.subtype === "ui_prompt_fill" && this.uiHost?.promptFill) {
            let { subtype, ...rest } = e.request;
            return this.uiHost.promptFill(rest, {
                signal: s
            });
        }
        if (e.request.subtype === "ui_prompt_suggest" && this.uiHost?.promptSuggest) {
            let { subtype, ...rest } = e.request;
            return this.uiHost.promptSuggest(rest, {
                signal: s
            });
        }
        if (e.request.subtype === "ui_read_selection" && this.uiHost?.readSelection) {
            let { subtype, ...rest } = e.request;
            return this.uiHost.readSelection(rest, {
                signal: s
            });
        }
        throw Error(`Unsupported control request subtype: ${e.request.subtype}`);
    }
    async *readSdkMessages() {
        try {
            for await (let e of this.inputStream){
                this.transport.markDelivered?.(e);
                yield e;
            }
        } finally{
            await this.cleanup();
        }
    }
    async initialize({ first } = {
        first: false
    }) {
        if (!first && !this.initializeHasBeenWritten) {
            await this.initializeWritten;
        }
        let s;
        let n;
        try {
            if (first && this.initConfig?.captureSdkMcpManifests === true && this.sdkMcpServers.size > 0) {
                s = await this.captureSdkMcpServerManifests();
                for (let m of this.sdkMcpToolsChangedDuringCapture){
                    let h = s !== undefined && Object.hasOwn(s, m) ? s[m] : undefined;
                    if (h?.toolsListResult !== undefined) {
                        s[m] = {
                            initializeResult: h.initializeResult
                        };
                    }
                }
            }
            this.sdkMcpToolsChangedDuringCapture.clear();
            let c = this.buildInitializeRequest(s);
            if (this.cleanupPerformed) {
                throw this.cleanupCause ?? Error("Query closed before initialize was sent");
            }
            this.writingFirstInitialize = first;
            try {
                n = this.request(c);
            } finally{
                this.writingFirstInitialize = false;
            }
        } finally{
            if (first) {
                this.markInitializeWritten();
            }
        }
        let response = (await n).response;
        if (this.initConfig?.plugins !== undefined && this.initConfig.plugins.length > 0 && response.plugins_applied !== true) {
            t(`[Query.initialize] Claude Code reported plugins_applied=${String(response.plugins_applied)} for ${this.initConfig.plugins.length} plugins sent with pluginDelivery 'initialize'; the process is running with the plugins it was launched with.`, {
                level: "warn"
            });
        }
        return response;
    }
    buildInitializeRequest(sdkMcpServerManifests) {
        if (this.hooks && !this.initHooksPayload) {
            this.initHooksPayload = {};
            for (let [c, m] of Object.entries(this.hooks)){
                if (m.length > 0) {
                    this.initHooksPayload[c] = m.map((h)=>{
                        let hookCallbackIds = [];
                        for (let w of h.hooks){
                            let y = `hook_${this.nextCallbackId++}`;
                            this.hookCallbacks.set(y, w);
                            hookCallbackIds.push(y);
                        }
                        return {
                            matcher: h.matcher,
                            hookCallbackIds,
                            timeout: h.timeout
                        };
                    });
                }
            }
        }
        let sdkMcpServers = this.sdkMcpServers.size > 0 ? Array.from(this.sdkMcpServers.keys()) : undefined;
        let n = Array.from(this.sdkMcpServers).flatMap(([c, { settings }])=>{
            if (Object.keys(settings).length > 0) {
                return [
                    [
                        c,
                        settings
                    ]
                ];
            }
            return [];
        });
        let sdkMcpServerConfigs = n.length > 0 ? Object.fromEntries(n) : undefined;
        return {
            subtype: "initialize",
            hooks: this.initHooksPayload,
            sdkMcpServers,
            sdkMcpServerConfigs,
            sdkMcpServerManifests,
            jsonSchema: this.jsonSchema,
            systemPrompt: typeof this.initConfig?.systemPrompt === "string" ? [
                this.initConfig.systemPrompt
            ] : this.initConfig?.systemPrompt,
            appendSystemPrompt: this.initConfig?.appendSystemPrompt,
            planModeInstructions: this.initConfig?.planModeInstructions,
            systemPromptSnapshot: this.initConfig?.systemPromptSnapshot,
            appendSubagentSystemPrompt: this.initConfig?.appendSubagentSystemPrompt,
            toolAliases: this.initConfig?.toolAliases,
            excludeDynamicSections: this.initConfig?.excludeDynamicSections,
            agents: this.initConfig?.agents,
            title: this.initConfig?.title,
            skills: Array.isArray(this.initConfig?.skills) ? this.initConfig.skills : undefined,
            webSearchIsolationExemptMcpServers: this.initConfig?.webSearchIsolationExemptMcpServers,
            promptSuggestions: this.initConfig?.promptSuggestions,
            agentProgressSummaries: this.initConfig?.agentProgressSummaries,
            forwardSubagentText: this.initConfig?.forwardSubagentText,
            supportedDialogKinds: this.initConfig?.supportedDialogKinds,
            perTaskStopAffordance: this.initConfig?.perTaskStopAffordance,
            rapidFollowupPreempt: this.initConfig?.rapidFollowupPreempt,
            forwardNestedSubagentToolCalls: this.initConfig?.forwardNestedSubagentToolCalls,
            workspaceTrust: this.initConfig?.workspaceTrust,
            plugins: this.initConfig?.plugins
        };
    }
    async captureSdkMcpServerManifests() {
        let e = performance.now();
        let s = new Map;
        let n = false;
        let r = async (k, transport)=>{
            try {
                await this.sdkMcpServers.get(k)?.connection;
                if (n) {
                    return;
                }
                let T = await this.handleMcpControlRequest(k, {
                    server_name: k,
                    message: {
                        jsonrpc: "2.0",
                        id: `${Ae}initialize`,
                        method: "initialize",
                        params: {
                            protocolVersion: cye,
                            capabilities: hQe,
                            clientInfo: {
                                ...yQe,
                                version: {
                                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                                    PACKAGE_URL: "@anthropic-ai/claude-code",
                                    README_URL: "https://code.claude.com/docs/en/overview",
                                    VERSION: "2.1.296",
                                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                                    BUILD_TIME: "2026-10-09T01:31:52Z",
                                    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                                    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                                    DD_SOURCEMAP_GROUP: "default"
                                }.VERSION ?? "unknown"
                            }
                        }
                    }
                }, transport);
                if (n) {
                    return;
                }
                if (!("result" in T)) {
                    t(`[Query.captureSdkMcpServerManifests] '${k}' answered initialize with an error; leaving it to the CLI: ${_(T)}`, {
                        level: "warn"
                    });
                    return;
                }
                let initializeResult = T.result;
                transport.onmessage?.({
                    jsonrpc: "2.0",
                    method: "notifications/initialized"
                });
                let P = initializeResult.capabilities;
                let I = typeof P === "object" && P !== null && "tools" in P && P.tools !== undefined && P.tools !== null;
                let toolsListResult;
                if (I) {
                    let G = await this.handleMcpControlRequest(k, {
                        server_name: k,
                        message: {
                            jsonrpc: "2.0",
                            id: `${Ae}tools-list`,
                            method: "tools/list"
                        }
                    }, transport);
                    if (n) {
                        return;
                    }
                    if (!("result" in G)) {
                        t(`[Query.captureSdkMcpServerManifests] '${k}' answered tools/list with an error; leaving it to the CLI: ${_(G)}`, {
                            level: "warn"
                        });
                        return;
                    }
                    if (G.result.nextCursor === undefined) {
                        toolsListResult = G.result;
                    }
                }
                let manifest = X(_(toolsListResult === undefined ? {
                    initializeResult
                } : {
                    initializeResult,
                    toolsListResult
                }));
                s.set(k, {
                    transport,
                    manifest
                });
            } catch (error) {
                if (!n) {
                    t(`[Query.captureSdkMcpServerManifests] '${k}': ${error}; the CLI will handshake it over the control channel`, {
                        level: "warn"
                    });
                }
            }
        };
        let a = Array.from(this.sdkMcpServers, ([k, { transport }])=>r(k, transport));
        let c = Promise.all(a).then(()=>"settled");
        let m = new Promise((resolvePromise)=>{
            this.stopSdkMcpManifestCapture = ()=>resolvePromise("closed");
        });
        let h = await Ge(Promise.race([
            c,
            m
        ]), qt);
        n = true;
        this.stopSdkMcpManifestCapture = undefined;
        let elapsed_ms = Math.round(performance.now() - e);
        let w = {
            servers: a.length,
            captured: s.size,
            elapsed_ms
        };
        if (h === "closed") {
            f("sdk_mcp_manifest_capture", "closed", w);
            return;
        }
        if (h === undefined) {
            t(`[Query.captureSdkMcpServerManifests] ${s.size}/${a.length} in-process MCP servers captured within ${qt} ms; the rest will handshake over the control channel`, {
                level: "warn"
            });
            f("sdk_mcp_manifest_capture", "deadline", w);
        } else if (s.size < a.length) {
            f("sdk_mcp_manifest_capture", "partial", w);
        } else {
            g("sdk_mcp_manifest_capture", w);
        }
        if (s.size === 0) {
            return;
        }
        let y = Object.fromEntries(Array.from(this.sdkMcpServers).flatMap(([k, E])=>{
            let T = s.get(k);
            if (T !== undefined && T.transport === E.transport) {
                return [
                    [
                        k,
                        T.manifest
                    ]
                ];
            }
            return [];
        }));
        if (Object.keys(y).length === 0) {
            return;
        }
        t(`[Query.captureSdkMcpServerManifests] manifests for [${Object.keys(y).join(", ")}] captured in ${elapsed_ms} ms`);
        return y;
    }
    async interrupt(e) {
        return Zr("sdk_interrupt", async ()=>{
            let s = await this.request({
                subtype: "interrupt",
                ...e?.cancelQueued === true && {
                    cancel_queued: true
                }
            });
            let n = s.response?.still_queued;
            if (!Array.isArray(n)) {
                return;
            }
            let r = s.response?.cancelled;
            return {
                still_queued: n.filter((a)=>typeof a === "string"),
                ...Array.isArray(r) && {
                    cancelled: r.filter((a)=>typeof a === "string")
                }
            };
        });
    }
    async setPermissionMode(e) {
        await this.request({
            subtype: "set_permission_mode",
            mode: e
        });
    }
    setUiHost(e) {
        this.uiHost = e;
    }
    async setMcpPermissionModeOverride(e, s) {
        return (await this.request({
            subtype: "set_mcp_permission_mode_override",
            serverName: e,
            mode: s
        })).response ?? {};
    }
    async setChromeBrowserHints(e) {
        await this.request({
            subtype: "set_chrome_browser_hints",
            ...e
        });
    }
    async setPromptSuggestionsPaused(paused) {
        await this.request({
            subtype: "set_prompt_suggestions_paused",
            paused
        });
    }
    awaitControlResponse(e) {
        this.transport.expectControlResponse?.(e);
        return new Promise((resolvePromise, rejectPromise)=>{
            let r = (c)=>{
                if (c.subtype === "success") {
                    let { pending_permission_requests, pending_user_dialog_requests, ...rest } = c;
                    resolvePromise(rest);
                } else {
                    rejectPromise(new x(c.error, "awaitControlResponse: CLI error verdict"));
                }
                if (c.pending_permission_requests || c.pending_user_dialog_requests) {
                    t("[Query] Ignoring prompt-redelivery fields on awaitControlResponse response");
                }
            };
            if (this.cleanupPerformed) {
                rejectPromise(rt());
                return;
            }
            let a = this.unmatchedControlResponses.get(e);
            if (a) {
                this.unmatchedControlResponses.delete(e);
                r(a);
                return;
            }
            this.pendingControlResponses.set(e, {
                handler: (c)=>{
                    this.pendingControlResponses.delete(e);
                    r(c);
                },
                reject: rejectPromise
            });
        });
    }
    async setModel(model) {
        await this.request({
            subtype: "set_model",
            model
        });
    }
    async setMaxThinkingTokens(max_thinking_tokens, thinking_display) {
        await this.request({
            subtype: "set_max_thinking_tokens",
            max_thinking_tokens,
            thinking_display
        });
    }
    async applyFlagSettings(e) {
        return Zr("sdk_apply_flag_settings", async ()=>{
            await this.request({
                subtype: "apply_flag_settings",
                settings: e
            });
        });
    }
    async getSettings() {
        return (await this.request({
            subtype: "get_settings"
        })).response;
    }
    async getHooksListing() {
        return (await this.request({
            subtype: "get_hooks_listing"
        })).response;
    }
    async getTaskOutput(e) {
        return (await this.request({
            subtype: "get_task_output",
            task_id: e
        })).response;
    }
    async listPermissionRules() {
        return (await this.request({
            subtype: "list_permission_rules"
        })).response;
    }
    async updateSettings(source, s) {
        return Zr("sdk_update_settings", async ()=>{
            await this.request({
                subtype: "update_settings",
                source,
                settings: s
            });
        });
    }
    async rewindFiles(user_message_id, s) {
        return Zr("sdk_rewind_files", async ()=>(await this.request({
                subtype: "rewind_files",
                user_message_id,
                dry_run: s?.dryRun
            })).response);
    }
    async cancelAsyncMessage(message_uuid) {
        return (await this.request({
            subtype: "cancel_async_message",
            message_uuid
        })).response.cancelled;
    }
    async seedReadState(e, mtime) {
        await this.request({
            subtype: "seed_read_state",
            path: e,
            mtime
        });
    }
    async setCwd(e, s) {
        return Zr("sdk_set_cwd", async ()=>(await this.request({
                subtype: "set_cwd",
                path: e,
                ...s?.trustAccepted !== undefined && {
                    trust_accepted: s.trustAccepted
                },
                ...s?.trustedDirectory !== undefined && {
                    trusted_directory: s.trustedDirectory
                }
            })).response);
    }
    async claimSession(e) {
        let s = Zr("sdk_claim_session", async ()=>(await this.request({
                subtype: "claim_session",
                ...e,
                include_initialize: e.include_initialize ?? true
            })).response);
        let initialization = this.initialization;
        this.initialization = s.then(async (r)=>{
            if (r?.initialize === undefined) {
                return initialization;
            }
            let r_initialize = r.initialize;
            let c = await initialization.then((S)=>({
                    hooks_applied: S.hooks_applied,
                    plugins_applied: S.plugins_applied
                }), ()=>({
                    hooks_applied: undefined,
                    plugins_applied: undefined
                }));
            let hooks_applied = r_initialize.hooks_applied ?? c.hooks_applied;
            let plugins_applied = r_initialize.plugins_applied ?? c.plugins_applied;
            return {
                ...r_initialize,
                ...hooks_applied !== undefined && {
                    hooks_applied
                },
                ...plugins_applied !== undefined && {
                    plugins_applied
                }
            };
        }, ()=>initialization);
        this.initialization.catch(()=>{});
        return s;
    }
    async enableRemoteControl(enabled, s, n) {
        let r = ++this.remoteControlCallGeneration;
        let workSecretAnswerer = this.workSecretAnswerer;
        let c = n?.reattachSessionId || (n?.workSecret === undefined ? undefined : sn(n.workSecret));
        let m = enabled && n?.workSecret !== undefined && n.refreshWorkSecret && c !== undefined ? {
            sessionId: c,
            refresh: n.refreshWorkSecret
        } : undefined;
        this.workSecretAnswerer = m;
        let h;
        try {
            h = (await this.request({
                subtype: "remote_control",
                enabled,
                ...s !== undefined && {
                    name: s
                },
                reattach_session_id: n?.reattachSessionId,
                keep_session_on_exit: n?.keepSessionOnExit,
                work_secret: n?.workSecret
            })).response;
        } catch (error) {
            if (r === this.remoteControlCallGeneration) {
                this.workSecretAnswerer = undefined;
            }
            throw error;
        }
        if (enabled && r === this.remoteControlCallGeneration) {
            let S = h.bridge_session_id;
            let w = [
                m,
                workSecretAnswerer
            ];
            this.workSecretAnswerer = typeof S === "string" ? w.find((y)=>y !== undefined && Ht(y.sessionId, S)) : undefined;
        }
        return h;
    }
    async submitFeedback(e, s) {
        return (await this.request({
            subtype: "submit_feedback",
            description: e,
            surface: s?.surface,
            draft_id: s?.draft_id,
            type: s?.type,
            title: s?.title,
            area: s?.area,
            attach_transcript: s?.attach_transcript,
            save_locally: s?.save_locally
        })).response;
    }
    async renameSession(title, session_id) {
        await this.request({
            subtype: "rename_session",
            title,
            source: "host",
            session_id
        });
    }
    async generateSessionTitle(e, s) {
        return Zr("sdk_session_title_generate", async ()=>(await this.request({
                subtype: "generate_session_title",
                description: e,
                persist: s?.persist
            })).response.title);
    }
    async askSideQuestion(question, s) {
        return Zr("sdk_side_question", async ()=>{
            let response = (await this.request({
                subtype: "side_question",
                question,
                ...s?.history?.length && {
                    history: [
                        ...s.history
                    ]
                }
            }, s)).response;
            if (response.response === null) {
                return null;
            }
            return {
                response: response.response,
                synthetic: response.synthetic ?? false,
                ...response.refusal_fallback && {
                    refusalFallback: {
                        originalModel: response.refusal_fallback.original_model,
                        fallbackModel: response.refusal_fallback.fallback_model,
                        content: response.refusal_fallback.content
                    }
                }
            };
        }, ()=>{
            if (s?.signal?.aborted) {
                return "cancelled";
            }
            return "error";
        });
    }
    async launchUltrareview(args, s) {
        return (await this.request({
            subtype: "ultrareview_launch",
            args,
            confirm: s?.confirm ?? false
        })).response;
    }
    async messageRated(e) {
        await this.request({
            subtype: "message_rated",
            messageUuid: e.messageUuid,
            sentiment: e.sentiment,
            surface: e.surface,
            cleared: e.cleared ?? false
        });
    }
    processPendingPermissionRequests(e) {
        for (let s of e){
            if (s.request.subtype === "can_use_tool") {
                this.handleControlRequest(s).catch(()=>{});
            }
        }
    }
    processPendingUserDialogRequests(e) {
        for (let s of e){
            if (s.request.subtype === "request_user_dialog") {
                this.handleControlRequest(s).catch(()=>{});
            }
        }
    }
    request(request, s) {
        let n = s?.signal;
        if (n?.aborted) {
            return Promise.reject(W(n.reason ?? "Control request aborted"));
        }
        if (this.cleanupPerformed) {
            return Promise.reject(rt());
        }
        let request_id = Math.random().toString(36).substring(2, 15);
        this.transport.expectControlResponse?.(request_id);
        let a = {
            request_id,
            type: "control_request",
            request
        };
        let c = request.subtype === "initialize";
        return new Promise((resolvePromise, rejectPromise)=>{
            let S;
            let w = false;
            let y = (C)=>{
                this.pendingControlResponses.delete(request_id);
                S?.();
                resolvePromise(C);
            };
            let reject = (C)=>{
                this.pendingControlResponses.delete(request_id);
                S?.();
                rejectPromise(C);
            };
            if (n) {
                let C = ()=>{
                    reject(W(n.reason ?? "Control request aborted"));
                    if (!w) {
                        return;
                    }
                    try {
                        Promise.resolve(this.transport.write(_({
                            type: "control_cancel_request",
                            request_id
                        }) + `
`)).catch(()=>{});
                    } catch  {}
                };
                n.addEventListener("abort", C, {
                    once: true
                });
                S = ()=>{
                    n.removeEventListener("abort", C);
                };
            }
            this.pendingControlResponses.set(request_id, {
                handler: (C)=>{
                    if (C.subtype === "success") {
                        y(C);
                    } else {
                        reject(mG(Error(C.error), {
                            telemetryMessage: `Claude Code control request failed (${request.subtype})`,
                            errorClass: "control_request_failed",
                            errorCode: typeof C.error_code === "string" && tn.test(C.error_code) ? C.error_code : undefined
                        }));
                    }
                    if (!c && (C.pending_permission_requests || C.pending_user_dialog_requests)) {
                        t(`[Query] Ignoring prompt-redelivery fields on non-initialize response (subtype=${request.subtype})`);
                    } else {
                        if (C.pending_permission_requests) {
                            this.processPendingPermissionRequests(C.pending_permission_requests);
                        }
                        if (C.pending_user_dialog_requests) {
                            this.processPendingUserDialogRequests(C.pending_user_dialog_requests);
                        }
                    }
                },
                reject
            });
            let E = _(a) + `
`;
            let T = ()=>{
                if (n?.aborted) {
                    return;
                }
                w = true;
                return this.transport.write(E);
            };
            try {
                (this.initializeHasBeenWritten || this.writingFirstInitialize ? Promise.resolve(T()) : this.initializeWritten.then(T)).catch(reject);
            } catch (error) {
                reject(error);
            }
        });
    }
    initializationResult() {
        return this.initialization;
    }
    writeAfterInitialize(e) {
        if (this.initializeHasBeenWritten) {
            return Promise.resolve(this.transport.write(e));
        }
        return this.initializeWritten.then(()=>this.transport.write(e));
    }
    reinitialize() {
        return Zr("sdk_reinitialize", ()=>this.initialize({
                first: false
            }));
    }
    async supportedCommands() {
        let { commands } = await this.initialization;
        return this.latestCommands ?? commands;
    }
    async supportedModels() {
        return (await this.initialization).models;
    }
    async supportedAgents() {
        return (await this.initialization).agents;
    }
    async reconnectMcpServer(e) {
        await this.request({
            subtype: "mcp_reconnect",
            serverName: e
        });
    }
    async toggleMcpServer(e, enabled) {
        return Zr("sdk_mcp_toggle_server", async ()=>{
            await this.request({
                subtype: "mcp_toggle",
                serverName: e,
                enabled
            });
        });
    }
    async readMcpResource(e, uri) {
        return (await this.request({
            subtype: "mcp_read_resource",
            serverName: e,
            uri
        })).response;
    }
    async enableChannel(e) {
        return Zr("sdk_mcp_enable_channel", async ()=>{
            await this.request({
                subtype: "channel_enable",
                serverName: e
            });
        });
    }
    async mcpAuthenticate(e, redirectUri) {
        return (await this.request({
            subtype: "mcp_authenticate",
            serverName: e,
            redirectUri
        })).response;
    }
    async mcpClearAuth(e) {
        return (await this.request({
            subtype: "mcp_clear_auth",
            serverName: e
        })).response;
    }
    async mcpSubmitOAuthCallbackUrl(e, callbackUrl) {
        return (await this.request({
            subtype: "mcp_oauth_callback_url",
            serverName: e,
            callbackUrl
        })).response;
    }
    async claudeAuthenticate(loginWithClaudeAi) {
        return (await this.request({
            subtype: "claude_authenticate",
            loginWithClaudeAi
        })).response;
    }
    async claudeOAuthCallback(authorizationCode, state) {
        return (await this.request({
            subtype: "claude_oauth_callback",
            authorizationCode,
            state
        })).response;
    }
    async claudeOAuthWaitForCompletion() {
        return (await this.request({
            subtype: "claude_oauth_wait_for_completion"
        })).response;
    }
    async mcpServerStatus() {
        return (await this.request({
            subtype: "mcp_status"
        })).response.mcpServers;
    }
    async getContextUsage(e) {
        return (await this.request({
            subtype: "get_context_usage",
            ...e
        })).response;
    }
    async usage_EXPERIMENTAL_MAY_CHANGE_DO_NOT_RELY_ON_THIS_API_YET(e) {
        return (await this.request({
            subtype: "get_usage",
            ...e?.skipBehaviors && {
                skip_behaviors: true
            }
        })).response;
    }
    async getMemoryDialog() {
        return (await this.request({
            subtype: "get_memory_dialog"
        })).response;
    }
    async getSkillsDialog() {
        return (await this.request({
            subtype: "get_skills_dialog"
        })).response;
    }
    async getStatus() {
        return (await this.request({
            subtype: "get_status"
        })).response;
    }
    async exportConversation() {
        return (await this.request({
            subtype: "export_conversation"
        })).response;
    }
    async getChromeDialog() {
        return (await this.request({
            subtype: "get_chrome_dialog"
        })).response;
    }
    async getChromeBrowsers() {
        return (await this.request({
            subtype: "get_chrome_browsers"
        })).response;
    }
    async selectChromeBrowser(device_id) {
        return (await this.request({
            subtype: "select_chrome_browser",
            device_id
        })).response;
    }
    async getSandboxDialog() {
        return (await this.request({
            subtype: "get_sandbox_dialog"
        })).response;
    }
    async readFile(e, s) {
        try {
            return (await this.request({
                subtype: "read_file",
                path: e,
                max_bytes: s?.maxBytes,
                encoding: s?.encoding
            })).response;
        } catch  {
            return null;
        }
    }
    async getPlan() {
        return (await this.request({
            subtype: "get_plan"
        })).response;
    }
    async reloadPlugins(e) {
        return Zr("sdk_reload_plugins", async ()=>(await this.request({
                subtype: "reload_plugins",
                ...e?.holdOnCacheImpact && {
                    hold_on_cache_impact: true
                }
            })).response);
    }
    async reloadSkills() {
        return Zr("sdk_reload_skills", async ()=>(await this.request({
                subtype: "reload_skills"
            })).response);
    }
    async reloadOutputStyles() {
        return Zr("sdk_reload_output_styles", async ()=>(await this.request({
                subtype: "reload_output_styles"
            })).response);
    }
    async setMcpServers(e) {
        return Zr("sdk_mcp_set_servers", async ()=>{
            let s = {};
            let n = {};
            for (let [h, S] of Object.entries(e)){
                if (S.type === "sdk" && "instance" in S) {
                    s[h] = S;
                } else {
                    n[h] = S;
                }
            }
            let r = new Set(this.sdkMcpServers.keys());
            let a = new Set(Object.keys(s));
            for (let h of r){
                if (!a.has(h)) {
                    await this.disconnectSdkMcpServer(h);
                }
            }
            for (let [h, S] of Object.entries(s)){
                let w = this.sdkMcpServers.get(h);
                if (!w) {
                    this.connectSdkMcpServer(h, S);
                    continue;
                }
                let { settings } = xFt(S);
                if (settings.timeout !== w.settings.timeout || settings.disableAutoBackground !== w.settings.disableAutoBackground) {
                    t(`[Query.setMcpServers] MCP server '${h}' is already registered, so the different timeout or disableAutoBackground passed to setMcpServers is ignored; remove and re-add the server to change it`);
                }
            }
            let c = {};
            for (let h of Object.keys(s)){
                c[h] = {
                    type: "sdk",
                    name: h,
                    ...this.sdkMcpServers.get(h)?.settings
                };
            }
            return (await this.request({
                subtype: "mcp_set_servers",
                servers: {
                    ...n,
                    ...c
                }
            })).response;
        });
    }
    async accountInfo() {
        return (await this.initialization).account;
    }
    async streamInput(e) {
        t("[Query.streamInput] Starting to process input stream");
        try {
            if (!this.initializeHasBeenWritten) {
                await this.initializeWritten;
            }
            let s = 0;
            for await (let n of e){
                s++;
                t(`[Query.streamInput] Processing message ${s}: ${n.type}`);
                if (this.abortController?.signal.aborted) {
                    break;
                }
                this.runEnded = false;
                this.resultReceived = false;
                this.clearRunEndCeiling();
                await Promise.resolve(this.transport.write(_(this.verbatimPrompts ? {
                    ...n,
                    client_composed: true
                } : n) + `
`));
            }
            t(`[Query.streamInput] Finished processing ${s} messages from input stream`);
            if (s > 0 && this.hasBidirectionalNeeds()) {
                t("[Query.streamInput] Has bidirectional needs, waiting for the run to end");
                await this.waitForRunEnd();
            }
            t("[Query] Calling transport.endInput() to close stdin to CLI process");
            this.transport.endInput();
        } catch (error) {
            if (!(error instanceof W3e)) {
                throw error;
            }
        }
    }
    endRun() {
        if (this.runEnded) {
            return;
        }
        this.runEnded = true;
        this.clearRunEndCeiling();
        this.runEndedResolve?.();
        if (this.isSingleUserTurn) {
            t("[Query.readMessages] Run ended for single-turn query, closing stdin");
            this.transport.endInput();
        }
    }
    armRunEndCeiling() {
        this.clearRunEndCeiling();
        if (this.runEnded || this.cleanupPerformed || this.runEndCeilingMs <= 0) {
            return;
        }
        this.runEndCeilingTimer = setTimeout(()=>{
            t(`[Query.readMessages] No 'idle' ${this.runEndCeilingMs}ms after the last result, ending the run`);
            this.endRun();
        }, Math.min(this.runEndCeilingMs, yu));
        this.runEndCeilingTimer.unref?.();
    }
    clearRunEndCeiling() {
        clearTimeout(this.runEndCeilingTimer);
        this.runEndCeilingTimer = undefined;
    }
    waitForRunEnd() {
        if (this.runEnded) {
            t("[Query.waitForRunEnd] Run already ended, returning immediately");
            return Promise.resolve();
        }
        return new Promise((resolvePromise)=>{
            let s = this.abortController?.signal;
            if (this.cleanupPerformed || s?.aborted) {
                resolvePromise();
                return;
            }
            let n = ()=>resolvePromise();
            s?.addEventListener("abort", n, {
                once: true
            });
            this.addCleanupCallback(()=>{
                s?.removeEventListener("abort", n);
                resolvePromise();
            });
            this.runEndedResolve = ()=>{
                s?.removeEventListener("abort", n);
                resolvePromise();
            };
        });
    }
    handleHookCallbacks(e, s, n, signal) {
        let a = this.hookCallbacks.get(e);
        if (!a) {
            throw Error(`No hook callback found for ID: ${e}`);
        }
        return a(s, n, {
            signal
        });
    }
    connectSdkMcpServer(e, s) {
        let n = new h1r((a)=>this.sendMcpServerMessageToCli(e, a));
        let connection = s.instance.connect(n).catch((a)=>{
            if (this.sdkMcpServers.get(e)?.transport === n) {
                this.sdkMcpServers.delete(e);
            }
            t(`[Query.connectSdkMcpServer] Failed to connect MCP server '${e}': ${a}`, {
                level: "error"
            });
        });
        this.sdkMcpServers.set(e, {
            transport: n,
            settings: xFt(s).settings,
            connection
        });
    }
    async disconnectSdkMcpServer(e) {
        let s = this.sdkMcpServers.get(e);
        if (s) {
            let n = `${e}:${Ae}`;
            for (let [r, a] of this.pendingMcpResponses){
                if (r.startsWith(n)) {
                    this.pendingMcpResponses.delete(r);
                    a.reject(Error("MCP server was removed during the manifest capture"));
                }
            }
            await s.transport.close();
            if (this.sdkMcpServers.get(e) === s) {
                this.sdkMcpServers.delete(e);
            }
        }
    }
    sendMcpServerMessageToCli(e, message) {
        if ("id" in message && message.id !== null && message.id !== undefined) {
            let r = `${e}:${message.id}`;
            let a = this.pendingMcpResponses.get(r);
            if (a) {
                a.resolve(message);
                this.pendingMcpResponses.delete(r);
                return;
            }
            if (typeof message.id === "string" && message.id.startsWith(Ae)) {
                t(`[Query.sendMcpServerMessageToCli] Dropping late manifest-capture reply from '${e}' (${message.id})`);
                return;
            }
        }
        let n = {
            type: "control_request",
            request_id: fwe(),
            request: {
                subtype: "mcp_message",
                server_name: e,
                message
            }
        };
        if (!this.initializeHasBeenWritten && Wun(message)) {
            this.sdkMcpToolsChangedDuringCapture.add(e);
        }
        this.writeAfterInitialize(_(n) + `
`).catch((r)=>{
            t(`[Query.sendMcpServerMessageToCli] Transport write failed: ${r}`, {
                level: "error"
            });
        });
    }
    handleMcpControlRequest(e, s, n) {
        let r = "id" in s.message ? s.message.id : null;
        let a = `${e}:${r}`;
        return new Promise((resolvePromise, rejectPromise)=>{
            let h = ()=>{
                this.pendingMcpResponses.delete(a);
            };
            let resolve_1 = (y)=>{
                h();
                resolvePromise(y);
            };
            let reject = (y)=>{
                h();
                rejectPromise(y);
            };
            this.pendingMcpResponses.set(a, {
                resolve: resolve_1,
                reject
            });
            if (n.onmessage) {
                n.onmessage(s.message);
            } else {
                h();
                rejectPromise(Error("No message handler registered"));
                return;
            }
        });
    }
}
function rt() {
    return Error("Query closed before response received");
}
var tn = /^[a-z][a-z0-9_]{0,63}$/;
function Ht(sessionId, s) {
    if (sessionId === s) {
        return true;
    }
    let n = sessionId.slice(sessionId.lastIndexOf("_") + 1);
    let r = s.slice(s.lastIndexOf("_") + 1);
    return n.length >= 4 && n === r;
}
function sn(workSecret) {
    try {
        let s = X(Buffer.from(workSecret, "base64url").toString("utf8"));
        if (typeof s !== "object" || s === null || !("session_ingress_token" in s) || typeof s.session_ingress_token !== "string") {
            return;
        }
        let n = s.session_ingress_token;
        let a = (n.startsWith("sk-ant-si-") ? n.slice(10) : n).split(".");
        if (a.length !== 3 || !a[1]) {
            return;
        }
        let c = X(Buffer.from(a[1], "base64url").toString("utf8"));
        if (typeof c === "object" && c !== null && "session_id" in c && typeof c.session_id === "string" && c.session_id) {
            return c.session_id;
        }
        return undefined;
    } catch  {
        return;
    }
}
const je = Se(Da(), 1);
function Qt(e) {
    return {
        globalConfig: join(e || homedir(), ".claude.json"),
        userSettings: join(e || join(homedir(), ".claude"), "settings.json")
    };
}
function ot(backend, s, n, key) {
    if (backend !== undefined && s === n) {
        return {
            backend,
            key
        };
    }
}
async function oe(e, s, n, r) {
    if (r) {
        return on(r, e, s, n);
    }
    try {
        if (n) {
            await writeFile(s, n(await readFile(e)), {
                mode: 384
            });
        } else {
            await copyFile(e, s);
        }
    } catch (error) {
        if (v(error) === undefined) {
            throw error;
        }
        if (!z(error)) {
            await rm(s, {
                force: true
            }).catch(()=>{});
            t(`sessionStore resume: skipping ${e} (${v(error)})`);
        }
    }
}
async function on({ backend, key }, n, r, a) {
    let c = await backend.read([
        key
    ]);
    if (!c.ok) {
        if (c.error.code === "InvalidArgument") {
            throw new x(`sessionStore resume: invalid v5 key for ${n}: ${c.error.argument}${c.error.reason ? ` (${c.error.reason})` : ""}`, "sessionStore resume: invalid v5 key (InvalidArgument from backend read)");
        }
        t(`sessionStore resume: skipping ${n} (${c.error.code})`);
        return;
    }
    let m = c.value.items[0];
    if (!m?.found) {
        return;
    }
    let h = Buffer.from(m.value);
    try {
        await writeFile(r, a ? a(h) : h, {
            mode: 384
        });
    } catch (error) {
        if (v(error) === undefined) {
            throw error;
        }
        if (!z(error)) {
            await rm(r, {
                force: true
            }).catch(()=>{});
            t(`sessionStore resume: skipping ${n} (${v(error)})`);
        }
    }
}
function an(e, allowedTools) {
    if (e === "bypassPermissions") {
        return "canUseTool will not be invoked: permissionMode 'bypassPermissions' auto-approves every tool call (except explicit deny rules) before the callback is consulted. To gate every tool call, use a PreToolUse hook instead.";
    }
    let n = allowedTools.filter((r)=>r.length > 0 && !r.includes("("));
    if (n.length === 0) {
        return;
    }
    return `canUseTool will not be invoked for: ${n.join(", ")}. Bare allowedTools entries auto-approve the whole tool before the callback is consulted. To gate every tool call, use a PreToolUse hook; or remove the bare names from allowedTools so they fall through to canUseTool. Allow rules from settings files can also shadow the callback but are not visible here.`;
}
function Vt(e, s, allowedTools) {
    if (!e) {
        return;
    }
    let r = an(s, allowedTools);
    if (r === undefined) {
        return;
    }
    process.emitWarning(r, {
        code: "CLAUDE_SDK_CAN_USE_TOOL_SHADOWED"
    });
}
function Xt(e) {
    let s = resolve(e ?? ".");
    let n;
    try {
        n = realpathSync(s);
    } catch  {
        n = s;
    }
    return On(n);
}
function ke(e, env) {
    let n = Xt(e);
    if (env === undefined) {
        return zv(n);
    }
    return (env.CLAUDE_CONFIG_DIR ? lOo(env.CLAUDE_CODE_PROJECT_DIR_NAME) : undefined) ?? OO(n);
}
function at(e) {
    return typeof e === "object" && e !== null && "type" in e && e.type === "agent_metadata";
}
function lt(e, s) {
    let n = relative(s, e);
    let r = n.split(sep);
    if (r[0] === ".." || isAbsolute(n)) {
        return null;
    }
    if (r.length < 2) {
        return null;
    }
    let projectKey = r[0];
    let c = r[1];
    if (r.length === 2 && c.endsWith(".jsonl")) {
        return {
            projectKey,
            sessionId: c.replace(/\.jsonl$/, "")
        };
    }
    if (r.length >= 4) {
        let m = r.slice(2);
        let h = m.length - 1;
        m[h] = m.at(-1).replace(/\.jsonl$/, "");
        return {
            projectKey,
            sessionId: c,
            subpath: m.join("/")
        };
    }
    return null;
}
process.env.NoDefaultCurrentDirectoryInExePath = "1";
const En = [
    "enabledPlugins",
    "extraKnownMarketplaces",
    "additionalMarketplaces"
];
function Yt(e) {
    let s;
    try {
        s = X(Io(e.toString("utf8")));
    } catch  {
        return e;
    }
    if (!Zt(s)) {
        return e;
    }
    let n = false;
    for (let a of En){
        if (Object.hasOwn(s, a)) {
            delete s[a];
            n = true;
        }
    }
    let s_env = s.env;
    if (Zt(s_env) && Object.hasOwn(s_env, "CLAUDE_CONFIG_DIR")) {
        delete s_env.CLAUDE_CONFIG_DIR;
        n = true;
    }
    if (n) {
        return _(s);
    }
    return e;
}
function Zt(e) {
    return e !== null && typeof e === "object" && !Array.isArray(e);
}
async function Tn(e, s) {
    if (!e) {
        return;
    }
    let n = e;
    try {
        let r = X(e);
        if (r?.claudeAiOauth?.refreshToken) {
            delete r.claudeAiOauth.refreshToken;
            n = _(r);
        }
    } catch  {}
    await writeFile(s, n, {
        mode: 384
    });
}
function Rn() {
    return Promise.resolve(undefined);
}
async function Pn(e, s, n, env, a = 60000, c) {
    if (!MP(s)) {
        return;
    }
    let projectKey = ke(n, env);
    let h = await Ut(e.load({
        projectKey,
        sessionId: s
    }), a, `SessionStore.load() timed out after ${a}ms for session ${s}`);
    if (!h || h.length === 0) {
        return;
    }
    let S = join(tmpdir(), `claude-resume-${randomUUID()}`);
    try {
        let w = join(S, "projects", projectKey);
        await mkdir(w, {
            recursive: true,
            mode: 448
        });
        let y = join(w, `${s}.jsonl`);
        await qUe(y, h);
        let k = env?.CLAUDE_CONFIG_DIR ?? process.env.CLAUDE_CONFIG_DIR;
        let E = k ?? join(homedir(), ".claude");
        let T;
        try {
            T = await readFile(join(E, ".credentials.json"), "utf-8");
        } catch (error) {
            if (!z(error)) {
                throw error;
            }
        }
        if (!k && !(env ?? process.env).ANTHROPIC_API_KEY && !(env ?? process.env).CLAUDE_CODE_OAUTH_TOKEN) {
            T = await Rn() ?? T;
        }
        await Tn(T, join(S, ".credentials.json"));
        let C = Qt(K2n("CLAUDE_CONFIG_DIR"));
        let P = k || homedir();
        let I = join(P, ".claude.json");
        await oe(I, join(S, ".claude.json"), undefined, ot(c, I, C.globalConfig, $e.globalConfig()));
        await oe(join(E, ".config.json"), join(S, ".config.json"));
        for (let H of f9){
            if (H) {
                await oe(join(P, `.claude${H}.json`), join(S, `.claude${H}.json`));
            }
        }
        let K = join(E, "settings.json");
        await oe(K, join(S, "settings.json"), Yt, ot(c, K, C.userSettings, $e.userSettings()));
        await oe(join(E, "cowork_settings.json"), join(S, "cowork_settings.json"), Yt);
        if (e.listSubkeys) {
            await Mn(e, {
                projectKey,
                sessionId: s
            }, join(w, s), a);
        }
        return S;
    } catch (error) {
        await ns(S);
        throw error;
    }
}
async function Mn(e, s, n, r) {
    let a = await Ut(e.listSubkeys({
        projectKey: s.projectKey,
        sessionId: s.sessionId
    }), r, `SessionStore.listSubkeys() timed out after ${r}ms for session ${s.sessionId}`);
    for (let subpath of a){
        let m = resolve(n, `${subpath}.jsonl`);
        if (!subpath || isAbsolute(subpath) || subpath.split(/[\\/]/).includes("..") || !m.startsWith(n + sep)) {
            t(`[SessionStore] skipping unsafe subpath from listSubkeys: ${subpath}`, {
                level: "warn"
            });
            continue;
        }
        let h = await Ut(e.load({
            projectKey: s.projectKey,
            sessionId: s.sessionId,
            subpath
        }), r, `SessionStore.load() timed out after ${r}ms for session ${s.sessionId} subpath ${subpath}`);
        if (!h || h.length === 0) {
            continue;
        }
        let S = [];
        let w = [];
        for (let y of h){
            if (at(y)) {
                S.push(y);
            } else {
                w.push(y);
            }
        }
        if (w.length > 0) {
            await mkdir(dirname(m), {
                recursive: true
            });
            await qUe(m, w);
        }
        if (S.length > 0) {
            let y = S.at(-1);
            let k = resolve(n, `${subpath}.meta.json`);
            await mkdir(dirname(k), {
                recursive: true
            });
            let { type, ...rest } = y;
            await writeFile(k, _(rest), {
                mode: 384
            });
        }
    }
}
function In(workspaceTrust) {
    let s = workspaceTrust?.accepted === true && (typeof workspaceTrust.directory !== "string" || !(posix.isAbsolute(workspaceTrust.directory) || win32.isAbsolute(workspaceTrust.directory))) ? undefined : workspaceTrust;
    if (workspaceTrust !== undefined && s === undefined) {
        t("workspaceTrust ignored: accepted requires an absolute directory, as it exists where Claude Code runs", {
            level: "warn"
        });
    }
    return s;
}
function ts(e, { isSingleUserTurn, resumeConfigDir, deferSpawn }) {
    let { systemPrompt, settings, managedSettings, settingSources, sandbox, ...rest } = e ?? {};
    let systemPrompt_1;
    let appendSystemPrompt;
    let excludeDynamicSections;
    let systemPromptSnapshot;
    if (systemPrompt === undefined) {
        systemPrompt_1 = "";
    } else if (typeof systemPrompt === "string") {
        systemPrompt_1 = systemPrompt;
    } else if (Array.isArray(systemPrompt)) {
        systemPrompt_1 = systemPrompt;
    } else if (systemPrompt.type === "custom") {
        systemPrompt_1 = systemPrompt.prompt;
        systemPromptSnapshot = systemPrompt.snapshot;
    } else if (systemPrompt.type === "preset") {
        appendSystemPrompt = systemPrompt.append;
        excludeDynamicSections = systemPrompt.excludeDynamicSections;
        systemPromptSnapshot = systemPrompt.snapshot;
    }
    process.env.CLAUDE_AGENT_SDK_VERSION = process.env.CLAUDE_AGENT_SDK_VERSION ?? "unknown";
    let { abortController = lr(), additionalDirectories = [], projectConfigRoot, agent, agents, allowedTools = [], betas, canUseTool, continue: _continue, cwd, debug, debugFile, disallowedTools = [], tools, env, executable = Zk() ? "bun" : "node", executableArgs = [], extraArgs = {}, fallbackModel, enableFileCheckpointing, toolConfig, forkSession, hooks, includeHookEvents, includePartialMessages, forwardSubagentText, verbatimPrompts = false, onElicitation, onUserDialog, supportedDialogKinds, perTaskStopAffordance, rapidFollowupPreempt, workspaceTrust, persistSession, sessionStore, sessionStoreFlush, thinking, effort, maxThinkingTokens, maxTurns, maxBudgetUsd, taskBudget, mcpServers, model, outputFormat, permissionMode, allowDangerouslySkipPermissions = false, permissionPromptToolName, permissionPrompts, plugins, pluginDelivery = "argv", getOAuthToken, getHostAuthToken, workload, resume, resumeSessionAt, resumeDropsTurn, sessionId, skills, stderr, strictMcpConfig } = rest;
    let permissionMode_1 = permissionMode;
    if (sessionStore && persistSession === false) {
        throw Error("sessionStore cannot be used with persistSession: false -- the storage adapter requires local writes to mirror from. Use CLAUDE_CONFIG_DIR=/tmp for ephemeral local writes with external mirroring.");
    }
    if (supportedDialogKinds !== undefined && supportedDialogKinds.length > 0 && !onUserDialog) {
        throw Error("supportedDialogKinds requires an onUserDialog callback -- declaring dialog kinds without a handler would park dialogs nothing can answer. Provide onUserDialog, or omit supportedDialogKinds.");
    }
    let workspaceTrust_1 = In(workspaceTrust);
    if (sessionStore && _continue && !resume && !sessionStore.listSessions) {
        throw Error("Options.continue with sessionStore requires store.listSessions to be implemented");
    }
    if (sessionStore && enableFileCheckpointing) {
        throw Error("enableFileCheckpointing is not yet supported with sessionStore (backup blobs are not mirrored, so rewindFiles() fails after a store-backed resume).");
    }
    if (sessionStore && rest.spawnClaudeCodeProcess) {
        t("sessionStore with custom spawnClaudeCodeProcess: ensure the subprocess CLAUDE_CONFIG_DIR matches the parent (same path, same separators) or transcript_mirror frames will be dropped.", {
            level: "warn"
        });
    }
    Vt(!!canUseTool, permissionMode_1 ?? "default", allowedTools);
    if (pluginDelivery !== "argv" && pluginDelivery !== "initialize") {
        throw Error("Invalid pluginDelivery. Expected 'argv' or 'initialize'.");
    }
    let pluginsViaInitialize = pluginDelivery === "initialize" && plugins !== undefined && plugins.length > 0;
    let rest_pathToClaudeCodeExecutable = rest.pathToClaudeCodeExecutable;
    if (!rest_pathToClaudeCodeExecutable) {
        let A = fileURLToPath(import.meta.url);
        let L = createRequire(A);
        let V = Bt((ne)=>L.resolve(ne));
        if (!V) {
            throw Error("Native CLI binary for linux-x64 not found. Reinstall @anthropic-ai/claude-agent-sdk without --omit=optional, or set options.pathToClaudeCodeExecutable.");
        }
        rest_pathToClaudeCodeExecutable = V;
    }
    let jsonSchema = outputFormat?.type === "json_schema" ? outputFormat.schema : undefined;
    let M = env ? {
        ...env
    } : {
        ...process.env
    };
    if (!M.CLAUDE_CODE_ENTRYPOINT) {
        M.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
    }
    if (!M.CLAUDE_AGENT_SDK_VERSION) {
        M.CLAUDE_AGENT_SDK_VERSION = process.env.CLAUDE_AGENT_SDK_VERSION;
    }
    if (enableFileCheckpointing) {
        M.CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING = "true";
    }
    if (!Object.keys(M).some((A)=>A.toUpperCase() === "CLAUDE_CODE_SDK_READS_SESSION_STATE")) {
        M.CLAUDE_CODE_SDK_READS_SESSION_STATE = "1";
    }
    let Qe = Dd(M.CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS);
    let bs = Number.isFinite(Qe) && Qe >= 0 ? Qe : hkt;
    if (getOAuthToken) {
        M.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH = "1";
    }
    if (getHostAuthToken) {
        M.CLAUDE_CODE_SDK_HAS_HOST_AUTH_REFRESH = "1";
    }
    if (toolConfig?.askUserQuestion?.previewFormat) {
        M.CLAUDE_CODE_QUESTION_PREVIEW_FORMAT = toolConfig.askUserQuestion.previewFormat;
    }
    for (let [A, L] of [
        [
            toolConfig?.askUserQuestion?.extendedQuestions,
            "CLAUDE_CODE_QUESTION_EXTENDED"
        ],
        [
            toolConfig?.askUserQuestion?.optionalDescriptions,
            "CLAUDE_CODE_QUESTION_OPTIONAL_DESCRIPTIONS"
        ],
        [
            false,
            "CLAUDE_CODE_AGENT_PROGRESS_SUMMARIES"
        ]
    ]){
        if (A) {
            M[L] = "1";
        } else if (!env) {
            for (let V of Object.keys(M)){
                if (V.toUpperCase() === L) {
                    delete M[V];
                }
            }
        }
    }
    let Ve = {};
    je.propagation.inject(je.context.active(), Ve);
    if ("traceparent" in Ve) {
        for (let A of [
            "TRACEPARENT",
            "TRACESTATE"
        ]){
            if (!(A in (env ?? {}))) {
                delete M[A];
            }
        }
    }
    for (let [A, L] of Object.entries(Ve)){
        let V = A.toUpperCase();
        if (!(V in (env ?? {}))) {
            M[V] = L;
        }
    }
    let mcpServers_1 = {};
    let vt = new Map;
    if (mcpServers) {
        for (let [A, L] of Object.entries(mcpServers)){
            if (L.type === "sdk" && L.instance) {
                vt.set(A, L);
            } else {
                mcpServers_1[A] = L;
            }
        }
    }
    let thinkingConfig;
    if (thinking) {
        switch(thinking.type){
            case "adaptive":
                thinkingConfig = {
                    type: "adaptive",
                    display: thinking.display
                };
                break;
            case "enabled":
                thinkingConfig = {
                    type: "enabled",
                    budgetTokens: thinking.budgetTokens,
                    display: thinking.display
                };
                break;
            case "disabled":
                thinkingConfig = {
                    type: "disabled"
                };
                break;
        }
    } else if (maxThinkingTokens !== undefined) {
        thinkingConfig = maxThinkingTokens === 0 ? {
            type: "disabled"
        } : {
            type: "enabled",
            budgetTokens: maxThinkingTokens
        };
    }
    if (resumeConfigDir) {
        M.CLAUDE_CONFIG_DIR = resumeConfigDir;
    }
    let Ct = new nt({
        abortController,
        additionalDirectories,
        projectConfigRoot,
        agent,
        betas,
        cwd,
        debug,
        debugFile,
        executable,
        executableArgs,
        extraArgs: workload ? {
            ...extraArgs,
            workload
        } : extraArgs,
        pathToClaudeCodeExecutable: rest_pathToClaudeCodeExecutable,
        env: M,
        forkSession,
        stderr,
        thinkingConfig,
        effort,
        maxTurns,
        maxBudgetUsd,
        taskBudget,
        model,
        fallbackModel,
        jsonSchema,
        permissionMode: permissionMode_1,
        allowDangerouslySkipPermissions,
        permissionPromptToolName,
        permissionPrompts,
        continueConversation: sessionStore ? undefined : _continue,
        resume,
        resumeSessionAt,
        resumeDropsTurn,
        sessionId,
        settings: typeof settings === "object" ? _(settings) : settings,
        managedSettings: managedSettings ? _(managedSettings) : undefined,
        settingSources,
        skills,
        allowedTools,
        disallowedTools,
        tools,
        mcpServers: mcpServers_1,
        strictMcpConfig,
        canUseTool: !!canUseTool,
        hooks: !!hooks,
        includeHookEvents,
        includePartialMessages,
        persistSession,
        sessionMirror: !!sessionStore,
        plugins,
        pluginsViaInitialize,
        sandbox,
        spawnClaudeCodeProcess: rest.spawnClaudeCodeProcess,
        onProcessSpawned: e?.onProcessSpawned,
        deferSpawn
    });
    let ks = {
        systemPrompt: systemPrompt_1,
        appendSystemPrompt,
        planModeInstructions: rest.planModeInstructions,
        systemPromptSnapshot,
        appendSubagentSystemPrompt: rest.appendSubagentSystemPrompt,
        toolAliases: rest.toolAliases,
        excludeDynamicSections,
        agents,
        title: rest.title,
        skills,
        webSearchIsolationExemptMcpServers: rest.webSearchIsolationExemptMcpServers,
        promptSuggestions: rest.promptSuggestions,
        agentProgressSummaries: rest.agentProgressSummaries,
        forwardSubagentText,
        supportedDialogKinds,
        perTaskStopAffordance,
        rapidFollowupPreempt,
        forwardNestedSubagentToolCalls: e?.forwardNestedSubagentToolCalls,
        workspaceTrust: workspaceTrust_1,
        plugins: pluginsViaInitialize ? plugins : undefined,
        captureSdkMcpManifests: !PPr("CLAUDE_AGENT_SDK_DISABLE_MCP_MANIFESTS")
    };
    let queryInstance = new Ue(Ct, isSingleUserTurn, canUseTool, hooks, abortController, vt, jsonSchema, ks, onElicitation, getOAuthToken, getHostAuthToken, onUserDialog, verbatimPrompts, bs);
    if (sessionStore) {
        let A = ()=>join(M.CLAUDE_CONFIG_DIR ?? join(homedir(), ".claude"), "projects");
        let L = sessionStoreFlush === "eager";
        let V = new Ye(async (ne, Je)=>{
            let we = lt(ne, A());
            if (we) {
                await sessionStore.append(we, Je);
            } else {
                t(`[SessionStore] dropping mirror frame: filePath ${ne} is not under ${A()} -- subprocess CLAUDE_CONFIG_DIR likely differs from parent (custom spawnClaudeCodeProcess / container?)`, {
                    level: "warn"
                });
            }
        }, {
            onError: (ne, Je)=>{
                let we = lt(ne, A());
                if (we) {
                    queryInstance.reportMirrorError(we, Je.message);
                }
            },
            maxPendingEntries: L ? 0 : Me,
            maxPendingBytes: L ? 0 : be
        });
        queryInstance.setTranscriptMirrorBatcher(V);
    }
    return {
        queryInstance,
        transport: Ct,
        abortController,
        processEnv: M,
        verbatimPrompts
    };
}
function ss(queryInstance, text, abortController, verbatimPrompts) {
    if (typeof text === "string") {
        queryInstance.writeAfterInitialize(_({
            type: "user",
            session_id: "",
            message: {
                role: "user",
                content: [
                    {
                        type: "text",
                        text
                    }
                ]
            },
            parent_tool_use_id: null,
            ...verbatimPrompts && {
                client_composed: true
            }
        }) + `
`).catch((a)=>abortController.abort(a));
    } else {
        queryInstance.streamInput(text).catch((a)=>abortController.abort(a));
    }
}
const Dn = new Set([
    "EBUSY",
    "EMFILE",
    "ENFILE",
    "ENOTEMPTY",
    "EPERM"
]);
async function ns(e) {
    for(let s = 0;; s++){
        try {
            return await rm(e, {
                recursive: true,
                force: true
            });
        } catch (error) {
            if (s >= 4 || !Dn.has(v(error) ?? "")) {
                return;
            }
            await Q((s + 1) * 100);
        }
    }
}
function xn(transport, CLAUDE_CONFIG_DIR) {
    transport.waitForExit().catch(()=>{}).finally(()=>ns(CLAUDE_CONFIG_DIR));
}
export function query({ prompt, options }) {
    if ((options?.resume || options?.continue) && options?.sessionStore) {
        return Un(prompt, options);
    }
    let { queryInstance, abortController, verbatimPrompts } = ts(options, {
        isSingleUserTurn: typeof prompt === "string"
    });
    ss(queryInstance, prompt, abortController, verbatimPrompts);
    return queryInstance;
}
function Un(prompt, options) {
    let { queryInstance, transport, abortController, processEnv, verbatimPrompts } = ts({
        ...options
    }, {
        isSingleUserTurn: typeof prompt === "string",
        deferSpawn: true
    });
    let h = resolve(options.cwd ?? ".");
    let s_sessionStore = options.sessionStore;
    let w = options.loadTimeoutMs ?? 60000;
    let s_resume = options.resume;
    (async ()=>{
        if (!s_resume) {
            s_resume = (await Ut(s_sessionStore.listSessions(ke(h, options.env)), w, `SessionStore.listSessions() timed out after ${w}ms`)).slice().sort((T, C)=>C.mtime - T.mtime)[0]?.sessionId;
        }
        if (!s_resume) {
            return;
        }
        return Pn(s_sessionStore, s_resume, h, options.env, options.loadTimeoutMs);
    })().then((CLAUDE_CONFIG_DIR)=>{
        if (CLAUDE_CONFIG_DIR) {
            transport.updateResume(s_resume);
            let T = {
                CLAUDE_CONFIG_DIR
            };
            transport.updateEnv(T);
            processEnv.CLAUDE_CONFIG_DIR = CLAUDE_CONFIG_DIR;
            queryInstance.addCleanupCallback(()=>xn(transport, CLAUDE_CONFIG_DIR));
        }
        if (!queryInstance.isClosed()) {
            transport.spawn();
        }
    }).catch((E)=>{
        let T = W(E);
        transport.spawnAbort(T);
        queryInstance.setError(T);
    });
    ss(queryInstance, prompt, abortController, verbatimPrompts);
    return queryInstance;
}
