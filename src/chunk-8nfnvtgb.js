import { l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { yc, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { NR } from "/$bunfs/root/chunk-z0brrd3r.js";
import { spawn } from "child_process";
import { isAbsolute } from "path";
import { createInterface } from "readline";
const binary = "/root/.local/bin/vitals-emitter-guest";
const w = "vitals-emitter-guest";
const o = 5000;
const p = 1000;
const d = 30000;
async function $in(e) {
    let { log } = e;
    try {
        if (a.CLAUDE_CODE_DISABLE_VITALS_EMITTER || Tt()) {
            log("[vitals] kill switch or essential-traffic-only set; guest vitals disabled");
            return null;
        }
        let t = await y(e);
        if (!t) {
            return null;
        }
        let i = new c(t.binary, t.viaFallback, e);
        await i.launch();
        if (i.disabled) {
            return null;
        }
        return i;
    } catch (error) {
        log(`[vitals] not started: ${l(error)}`);
        return null;
    }
}
async function y({ binaryResolution, log }) {
    let a_VITALS_EMITTER_BIN = a.VITALS_EMITTER_BIN;
    if (a_VITALS_EMITTER_BIN && !isAbsolute(a_VITALS_EMITTER_BIN)) {
        log(`[vitals] VITALS_EMITTER_BIN must be an absolute path (got ${a_VITALS_EMITTER_BIN}); guest vitals disabled`);
        return null;
    }
    switch(binaryResolution){
        case "pinned":
            if (!a_VITALS_EMITTER_BIN) {
                log("[vitals] VITALS_EMITTER_BIN not set; guest vitals disabled (this launcher does not search PATH)");
                return null;
            }
            return {
                binary: a_VITALS_EMITTER_BIN,
                viaFallback: false
            };
        case "search":
            {
                let binary_1 = a_VITALS_EMITTER_BIN || await yc(w);
                if (binary_1) {
                    return {
                        binary: binary_1,
                        viaFallback: false
                    };
                }
                return {
                    binary,
                    viaFallback: true
                };
            }
    }
}
class c {
    binary;
    binaryViaFallback;
    options;
    child = null;
    spawnedAt = 0;
    respawnTimer = null;
    nextBackoffMs = p;
    stopping = false;
    disabled = false;
    reportedOk = false;
    reportedUnexpectedExit = false;
    constructor(e, r, t){
        this.binary = e;
        this.binaryViaFallback = r;
        this.options = t;
    }
    async stop() {
        this.stopping = true;
        if (this.respawnTimer) {
            clearTimeout(this.respawnTimer);
            this.respawnTimer = null;
        }
        let child = this.child;
        if (!child) {
            return;
        }
        let r = new Promise((resolve)=>{
            child.once("exit", ()=>resolve());
            child.once("error", ()=>resolve());
        });
        child.kill("SIGTERM");
        let t = setTimeout((i)=>i.kill("SIGKILL"), o, child);
        t.unref();
        await Ge(r, 2 * o);
        clearTimeout(t);
    }
    async launch() {
        let { sessionId, apiBaseUrl, tokenFilePath, log } = this.options;
        let s;
        try {
            s = spawn(this.binary, [
                "--session-id",
                sessionId,
                "--api-url",
                apiBaseUrl,
                "--token-file",
                tokenFilePath
            ], {
                cwd: undefined,
                env: b(),
                stdio: [
                    "pipe",
                    "ignore",
                    "pipe"
                ],
                windowsHide: true
            });
        } catch (error) {
            log(`[vitals] spawn threw: ${l(error)}; guest vitals disabled for this session`);
            this.disabled = true;
            return;
        }
        NR(s.pid);
        this.child = s;
        this.spawnedAt = Date.now();
        s.stdin?.on("error", ()=>{});
        s.on("error", (n)=>this.onChildGone(s, n));
        s.on("exit", (n, u)=>this.onChildGone(s, null, `exited (code=${n} signal=${u})`));
        s.on("spawn", ()=>{
            log(`[vitals] spawned ${this.binary} pid=${s.pid}`);
            if (!this.reportedOk) {
                this.reportedOk = true;
                g("ccr_vitals_emitter");
            }
        });
        if (s.stderr) {
            createInterface({
                input: s.stderr
            }).on("line", (n)=>log(`[vitals] ${n}`));
        }
        await new Promise((resolve)=>{
            s.once("spawn", ()=>resolve());
            s.once("error", ()=>resolve());
        });
    }
    onChildGone(e, r, t = `spawn error: ${r?.message}`) {
        if (this.child !== e) {
            return;
        }
        this.child = null;
        e.stdin?.destroy();
        let { log } = this.options;
        if (this.stopping) {
            log(`[vitals] emitter stopped (${t})`);
            return;
        }
        if (r) {
            let s = v(r);
            if (s === "EAGAIN" || s === "ENOMEM") {
                log(`[vitals] transient spawn failure (${s}); respawning`);
                this.scheduleRespawn();
                return;
            }
            this.disabled = true;
            if (s === "ENOENT" || s === "EACCES" && this.binaryViaFallback) {
                log(`[vitals] ${this.binary} not found; guest vitals disabled for this session`);
            } else {
                log(`[vitals] ${t}; guest vitals disabled for this session`);
                m("ccr_vitals_emitter", "spawn_failed");
            }
            return;
        }
        log(`[vitals] emitter ${t}`);
        if (!this.reportedUnexpectedExit) {
            this.reportedUnexpectedExit = true;
            f("ccr_vitals_emitter", "exited_unexpectedly");
        }
        if (Date.now() - this.spawnedAt > d) {
            this.nextBackoffMs = p;
        }
        this.scheduleRespawn();
    }
    scheduleRespawn() {
        let nextBackoffMs = this.nextBackoffMs;
        this.nextBackoffMs = Math.min(nextBackoffMs * 2, d);
        this.options.log(`[vitals] respawning in ${nextBackoffMs}ms`);
        this.respawnTimer = setTimeout(()=>{
            this.respawnTimer = null;
            this.launch();
        }, nextBackoffMs);
        this.respawnTimer.unref();
    }
}
function b() {
    let e = {
        USER_TYPE: "external",
        NODE_ENV: "production",
        VITALS_CLI_VERSION: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION
    };
    let r = {
        PATH: a.PATH,
        HOME: a.HOME,
        TMPDIR: a.TMPDIR,
        HTTPS_PROXY: a.HTTPS_PROXY,
        https_proxy: a.https_proxy,
        HTTP_PROXY: a.HTTP_PROXY,
        http_proxy: a.http_proxy,
        NO_PROXY: a.NO_PROXY,
        no_proxy: a.no_proxy,
        SSL_CERT_FILE: a.SSL_CERT_FILE
    };
    for (let [t, i] of Object.entries(r)){
        if (i !== undefined) {
            e[t] = i;
        }
    }
    return e;
}
export { $in };
