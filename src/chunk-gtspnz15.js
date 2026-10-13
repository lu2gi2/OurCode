import { q, B, Op } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { St, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ae, ce, BZt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { rRo } from "/$bunfs/root/chunk-24agvrd9.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { io } from "/$bunfs/root/chunk-03gkt7r5.js";
import { Nm as isGone } from "/$bunfs/root/chunk-t0b6khh6.js";
import { C2, BYt, Rc, kL, yxn } from "/$bunfs/root/chunk-rk838m7w.js";
import { Ds } from "/$bunfs/root/chunk-kasbfbhj.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { hostname } from "os";
const D = 2;
const R = 10000;
const P = 600000;
const x = 2592000000;
function C() {
    try {
        return hostname();
    } catch  {
        return "unknown";
    }
}
function T(now) {
    return {
        now,
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
        host: C(),
        platform: O(),
        ownPid: process.pid,
        isGone
    };
}
function _(e, n) {
    let o = n.stickyStrikes ?? D;
    let s = {
        ...e.fullscreenBootPending
    };
    let e_fullscreenAutoDisabled = e.fullscreenAutoDisabled;
    let u = e.fullscreenBootStrikes?.version === n.version ? e.fullscreenBootStrikes.count : 0;
    if (e_fullscreenAutoDisabled && e_fullscreenAutoDisabled.version !== n.version) {
        e_fullscreenAutoDisabled = undefined;
    }
    let newStrikes = 0;
    let f = false;
    let Number_POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    for (let [m, p] of Object.entries(s)){
        let k = Number(m);
        if (!Number.isInteger(k) || k < 1 || typeof p !== "object" || !p) {
            delete s[m];
            continue;
        }
        let g = Math.max(0, n.now - p.startedAt);
        if (p.host !== n.host || p.platform !== n.platform) {
            if (g > x) {
                delete s[m];
            }
            continue;
        }
        if (p.died !== undefined || k === n.ownPid || n.isGone(k)) {
            delete s[m];
            if (p.version === n.version) {
                newStrikes += 1;
                Number_POSITIVE_INFINITY = Math.min(Number_POSITIVE_INFINITY, g);
            }
        } else if (g > P) {
            delete s[m];
        } else {
            f = true;
        }
    }
    let decision = {
        kind: "none"
    };
    if (e_fullscreenAutoDisabled) {
        decision = {
            kind: "disabled"
        };
    } else if (newStrikes > 0) {
        u += newStrikes;
        let pendingAgeMs = Number.isFinite(Number_POSITIVE_INFINITY) ? Number_POSITIVE_INFINITY : 0;
        if (u >= o) {
            e_fullscreenAutoDisabled = {
                version: n.version,
                at: n.now,
                strikes: u
            };
            decision = {
                kind: "tripped",
                strikes: u,
                newStrikes,
                pendingAgeMs
            };
            u = 0;
        } else {
            decision = {
                kind: "strike",
                strikes: u,
                newStrikes,
                pendingAgeMs
            };
        }
    } else if (f) {
        decision = {
            kind: "pending_alive"
        };
    }
    return {
        next: {
            fullscreenBootPending: Object.keys(s).length > 0 ? s : undefined,
            fullscreenBootStrikes: u > 0 ? {
                count: u,
                version: n.version
            } : undefined,
            fullscreenAutoDisabled: e_fullscreenAutoDisabled
        },
        decision
    };
}
function F(e, next) {
    let o = (s)=>Object.keys(s.fullscreenBootPending ?? {}).sort().join(",");
    return o(e) !== o(next) || (e.fullscreenBootStrikes?.count ?? 0) !== (next.fullscreenBootStrikes?.count ?? 0) || e.fullscreenBootStrikes?.version !== next.fullscreenBootStrikes?.version || e.fullscreenAutoDisabled?.version !== next.fullscreenAutoDisabled?.version || e.fullscreenAutoDisabled?.at !== next.fullscreenAutoDisabled?.at;
}
function rmn() {
    let e = ce();
    return e.fullscreenAutoDisabled?.version === ({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).VERSION || e.fullscreenBootStrikes?.version === ({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }).VERSION && e.fullscreenBootStrikes.count > 0;
}
const M = `Claude Code's fullscreen renderer didn't finish starting last time on this machine, so this launch is using the classic renderer. It will try fullscreen again next launch; /tui default keeps the classic renderer.
`;
const I = `Claude Code's fullscreen renderer has repeatedly failed to start on this machine, so it has been turned off here. Run /tui fullscreen to try it again (this also resets after an update).
`;
function iWo(e) {
    let n = e?.state ?? C2;
    let o = kL(n);
    if (o === "env_on" || o === "bg_forced_on" || a.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER) {
        return {
            kind: "none"
        };
    }
    let s = T(e?.now ?? Date.now());
    let l = ce();
    let { next, decision } = _(l, s);
    if (F(l, next)) {
        Ae((f)=>{
            let next = _(f, s).next;
            if (F(f, next)) {
                return {
                    ...f,
                    ...next
                };
            }
            return f;
        }, e?.storageV5);
    }
    if (decision.kind === "strike" || decision.kind === "tripped" || decision.kind === "disabled") {
        n.crashAutoOff = true;
        let overrides_fullscreen = yxn(o) === "fullscreen";
        if (decision.kind !== "disabled") {
            i("tengu_fullscreen_crash_auto_off", {
                sticky: decision.kind === "tripped",
                strikes: decision.strikes,
                new_strikes: decision.newStrikes,
                pending_age_ms: decision.pendingAgeMs,
                would_be_entry_path: d(o),
                overrides_fullscreen
            });
            if (overrides_fullscreen) {
                process.stderr.write(decision.kind === "tripped" ? I : M);
            }
        }
        t(`fullscreen disabled: a previous fullscreen launch on this machine died before it was healthy (${decision.kind}) \xB7 /tui fullscreen or CLAUDE_CODE_NO_FLICKER=1 to override`);
    } else if (decision.kind !== "none") {
        t(`fullscreen boot canary: ${decision.kind}`);
    }
    return decision;
}
function P8n(e) {
    return Ae((n)=>{
        if (n.fullscreenAutoDisabled === undefined && n.fullscreenBootStrikes === undefined) {
            return n;
        }
        return {
            ...n,
            fullscreenAutoDisabled: undefined,
            fullscreenBootStrikes: undefined
        };
    }, e);
}
const S = new Set([
    "settings_on",
    "upsell_trial_on",
    "ant_default",
    "fresh_install_on",
    "downsell_on",
    "gb_on"
]);
class E {
    canary = {
        status: "idle"
    };
    recordMaybeOnDisk = undefined;
    exitHook = undefined;
    retire() {
        if (this.canary.status === "armed") {
            this.canary.cleanup();
            if (this.canary.timer !== undefined) {
                clearTimeout(this.canary.timer);
            }
        }
        this.canary = {
            status: "idle"
        };
        this.recordMaybeOnDisk = undefined;
        if (this.exitHook !== undefined) {
            process.off("exit", this.exitHook);
            this.exitHook = undefined;
        }
    }
}
const N = new q(()=>new E);
function b() {
    return N.of(B().host);
}
function A(e, n, o) {
    let s = e.fullscreenBootPending?.[String(n)] !== undefined;
    if (!s && !(o && e.fullscreenBootStrikes)) {
        return e;
    }
    let e_fullscreenBootPending = e.fullscreenBootPending;
    if (s && e_fullscreenBootPending) {
        let { [String(n)]: u, ...rest } = e_fullscreenBootPending;
        e_fullscreenBootPending = Object.keys(rest).length > 0 ? rest : undefined;
    }
    return {
        ...e,
        fullscreenBootPending: e_fullscreenBootPending,
        fullscreenBootStrikes: o ? undefined : e.fullscreenBootStrikes
    };
}
function H(e) {
    if (e.exitHook !== undefined) {
        return;
    }
    e.exitHook = ()=>{
        if (e.recordMaybeOnDisk !== undefined && Ds()) {
            let n = e.recordMaybeOnDisk;
            BZt((o)=>A(o, n, false));
        }
    };
    process.on("exit", e.exitHook);
}
async function aWo(e) {
    let n = e?.state ?? C2;
    let o = b();
    if (o.canary.status !== "idle") {
        return o.canary.status === "armed";
    }
    if (!Op() || a.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER) {
        return false;
    }
    if (!n.crashAutoOff && BYt() && S.has(kL(n))) {
        n.crashAutoOff = true;
        t("fullscreen disabled: turned off on this machine after repeated failed starts (recorded sticky auto-disable, honoured at REPL mount) · /tui fullscreen or CLAUDE_CODE_NO_FLICKER=1 to override");
    }
    if (!Rc(n)) {
        return false;
    }
    if (!S.has(kL(n))) {
        return false;
    }
    let process_pid = process.pid;
    let l = {
        startedAt: Date.now(),
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
        }.VERSION,
        host: C(),
        platform: O()
    };
    let cleanup = St(()=>v(o, o.canary.status === "armed" && o.canary.firstFrameAt !== undefined && (process.exitCode === undefined || process.exitCode === 0) && !rRo() ? "healthy" : "withdrawn"));
    H(o);
    o.canary = {
        status: "armed",
        pid: process_pid,
        cleanup,
        onHealthy: e?.onHealthy,
        healthyAfterMs: e?.healthyAfterMs ?? R,
        firstFrameAt: undefined,
        timer: undefined,
        storageV5: e?.storageV5
    };
    o.recordMaybeOnDisk = process_pid;
    io("fullscreen_canary_arm_start");
    try {
        await Ae((r)=>({
                ...r,
                fullscreenBootPending: {
                    ...r.fullscreenBootPending,
                    [String(process_pid)]: l
                }
            }), e?.storageV5);
    } catch (error) {
        c(error);
    } finally{
        io("fullscreen_canary_armed");
    }
    return o.canary.status === "armed";
}
function lWo(e = Date.now()) {
    let n = b();
    if (n.canary.status !== "armed" || n.canary.firstFrameAt !== undefined) {
        return;
    }
    n.canary.firstFrameAt = e;
    n.canary.timer = setTimeout((o)=>{
        v(o, "healthy").catch(c);
    }, n.canary.healthyAfterMs, n);
    n.canary.timer.unref?.();
}
async function v(e, n) {
    if (e.canary.status !== "armed") {
        return;
    }
    let { pid, cleanup, timer, onHealthy, storageV5 } = e.canary;
    e.canary = {
        status: "settled"
    };
    cleanup();
    if (timer !== undefined) {
        clearTimeout(timer);
    }
    await Ae((f)=>A(f, pid, n === "healthy"), storageV5);
    if (e.recordMaybeOnDisk === pid) {
        e.recordMaybeOnDisk = undefined;
    }
    t(`fullscreen boot canary: ${n}`);
    if (n === "healthy" && onHealthy) {
        try {
            await onHealthy();
        } catch (error) {
            c(error);
        }
    }
}
async function omn() {
    let e = b();
    if (e.canary.status !== "armed") {
        return false;
    }
    let { pid, cleanup, timer, storageV5 } = e.canary;
    e.canary = {
        status: "settled"
    };
    cleanup();
    if (timer !== undefined) {
        clearTimeout(timer);
    }
    if (e.recordMaybeOnDisk === pid) {
        e.recordMaybeOnDisk = undefined;
    }
    let u = false;
    await Ae((r)=>{
        let f = r.fullscreenBootPending?.[String(pid)];
        if (f === undefined || f.died !== undefined) {
            return r;
        }
        u = true;
        return {
            ...r,
            fullscreenBootPending: {
                ...r.fullscreenBootPending,
                [String(pid)]: {
                    ...f,
                    died: "render_error"
                }
            }
        };
    }, storageV5);
    t("fullscreen boot canary: failure recorded");
    return u;
}
export { rmn, iWo, P8n, aWo, lWo, omn };
