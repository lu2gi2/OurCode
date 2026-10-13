import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { W, l, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _, Dg, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne, Tr } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { iq, FF, UF, q3e } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { G1 } from "/$bunfs/root/chunk-c56kpkt7.js";
import { PH } from "/$bunfs/root/chunk-z0brrd3r.js";
import { Pr } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { Rwo, _Rs, $ue, Hwo, lse, OSe, Hv, Ap, yg, Dv, TP } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Rh } from "/$bunfs/root/chunk-nj0630nv.js";
import { qlt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Jn } from "/$bunfs/root/chunk-ph7a449e.js";
import { G7 } from "/$bunfs/root/chunk-pp3y3t61.js";
import { UL } from "/$bunfs/root/chunk-0xbdwcqr.js";
import { O6, vve, J9 } from "/$bunfs/root/chunk-7n5kjzjd.js";
import { Vfe } from "/$bunfs/root/chunk-mmxthvzq.js";
import { tf } from "/$bunfs/root/chunk-9xenmz7v.js";
import { uu } from "/$bunfs/root/chunk-5w1ksvdy.js";
import { vde } from "/$bunfs/root/chunk-sfgejbsr.js";
import { AYe, X5 } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { jle, $J, p4 } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { xf, IQt } from "/$bunfs/root/chunk-md7g8y4m.js";
import { IFo } from "/$bunfs/root/chunk-h1az9c71.js";
import { JLr, QLr } from "/$bunfs/root/chunk-yvkbapa4.js";
import { uO } from "/$bunfs/root/chunk-f0v3xmb1.js";
import { E1 } from "/$bunfs/root/chunk-381737m9.js";
import { O as platform } from "/$bunfs/root/chunk-79wfew46.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { lstat } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
const se = "CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED";
const ke = 2500;
const ee = 3000;
const Re = 1024;
const Ie = 200;
const q = /^cse_[A-Za-z0-9_]{1,124}$/;
const Ae = /^env_[A-Za-z0-9_-]{1,124}$/;
const ye = new Set([
    ...Vfe,
    ...vve,
    ...Le([
        ...Hwo,
        ...UF,
        "CLAUDE_BRIDGE_OAUTH_TOKEN"
    ]),
    ...FF.filter((e)=>e !== "ANTHROPIC_BASE_URL"),
    "CLAUDE_BRIDGE_BASE_URL",
    "CLAUDE_BRIDGE_SESSION_INGRESS_URL",
    "CLAUDE_REMOTE_TOOLS_BRIDGE_URL",
    "CLAUDE_BG_AUTH_SNAPSHOT_PATH",
    "CLAUDE_CODE_ACCOUNT_UUID",
    "CLAUDE_CODE_ORGANIZATION_UUID",
    "CLAUDE_CODE_USER_EMAIL",
    "CLAUDE_CODE_ENVIRONMENT_KIND",
    "CLAUDE_CODE_SESSION_KIND",
    "CLAUDE_BG_SESSION_PERMISSION_RULES",
    "CLAUDE_JOB_DIR"
].map((e)=>lse(e)));
const le = new Set([
    ...q3e,
    "CLAUDE_CODE_HOST_CREDS_FILE"
]);
const Oe = new Set([
    ...le,
    "ANTHROPIC_FEDERATION_RULE_ID",
    "ANTHROPIC_ORGANIZATION_ID",
    "ANTHROPIC_PROFILE",
    "ANTHROPIC_CONFIG_DIR"
]);
const Ce = new Set([
    ...iq.filter((e)=>e.startsWith("CLAUDE_CODE_USE_")),
    "CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST"
]);
function be(env, { unattendedGrant, withoutShellSecrets }) {
    let p = Rwo() ? _Rs() : undefined;
    if (p === undefined) {
        throw fe();
    }
    let E = lse(p);
    let v = lse(se);
    let T = {
        ...env
    };
    for (let [S, k] of Object.entries(T)){
        let f = lse(S);
        if (le.has(f) && ae(f, k, env)) {
            throw ue();
        }
        if (ye.has(f) || f === E || f === v || f.endsWith("_FILE_DESCRIPTOR")) {
            delete T[S];
        }
    }
    J9(T);
    O6(T);
    T[p] = "1";
    if (withoutShellSecrets) {
        for (let S of OSe(T)){
            if (!(/^(?:CLAUDE|ANTHROPIC)_/.test(S) && Object.hasOwn(a, S))) {
                delete T[S];
            }
        }
        delete T.SSH_AGENT_PID;
        Object.assign(T, $ue(T).respelled);
    }
    if (unattendedGrant !== undefined) {
        T[se] = unattendedGrant;
    }
    return T;
}
function De({ workId, environmentId }, request_id) {
    let p = q.test(workId) && Ae.test(environmentId);
    if (!p) {
        t("[tool-host] the request ids are not in a usable form; starting the helper without them");
    }
    return _({
        type: "control_request",
        request_id,
        request: {
            subtype: "initialize",
            ...p && {
                attachServeRequest: {
                    workId,
                    environmentId
                }
            }
        }
    }) + `
`;
}
function oe(e) {
    if (!Rwo()) {
        return fe();
    }
    if (platform() === "windows") {
        return Error("tool host helper: not available on Windows");
    }
    for (let [s, p] of Object.entries(e)){
        let E = lse(s);
        if (ae(E, p, e)) {
            t(`[tool-host] no helper: ${E} says this process signs in or sends its traffic elsewhere`, {
                level: "error"
            });
            return ue();
        }
    }
    let o = tf();
    if (o) {
        t(`[tool-host] ${o}`, {
            level: "error"
        });
        return Error("tool host helper: the process wrapper is not usable");
    }
}
function de(e, { env, unattendedGrant, withoutShellSecrets, selfInvocation = ()=>uu({
        pinToCurrentBinary: true
    }), spawn = PH, after = Ue }) {
    let S = oe(env);
    if (S !== undefined) {
        throw S;
    }
    if (!q.test(e.sessionId)) {
        throw Error("tool host helper: the session id is not usable");
    }
    let k = selfInvocation();
    let f = spawn(k.cmd, [
        ...k.prefixArgs,
        "--attach-serve",
        e.sessionId,
        "--input-format",
        "stream-json",
        "--output-format",
        "stream-json"
    ], {
        cwd: e.folder,
        env: be(env, {
            unattendedGrant,
            withoutShellSecrets
        }),
        extendEnv: false,
        stdio: [
            "pipe",
            "pipe",
            "pipe"
        ],
        windowsHide: true,
        toolCgroupClass: "agent"
    });
    let { promise, resolve } = Promise.withResolvers();
    let R = false;
    let C = Buffer.alloc(0);
    function H(code, signal) {
        if (R) {
            return;
        }
        R = true;
        let A = G(Dg(Tr(C.toString("utf8"))));
        resolve({
            code,
            signal,
            stderrFirstLine: A === "" ? undefined : ne(A, Ie)
        });
    }
    try {
        f.on("exit", H);
        f.on("error", (h)=>{
            t(`[tool-host] helper process error: ${G(l(h))}`);
            if (!R) {
                H(null, null);
                z(f, "SIGKILL");
            }
        });
        for (let h of [
            f.stdin,
            f.stdout,
            f.stderr
        ]){
            h?.on("error", ()=>{});
        }
        f.stdout?.on("data", ()=>{});
        f.stderr?.on("data", (h)=>{
            let b = Re - C.length;
            if (b > 0) {
                let A = typeof h === "string" ? Buffer.from(h) : h;
                C = Buffer.concat([
                    C,
                    A.subarray(0, b)
                ]);
            }
        });
        if (f.pid === undefined || f.stdin === null) {
            H(null, null);
        } else {
            f.stdin.write(De(e, randomUUID()));
        }
    } catch (error) {
        z(f, "SIGKILL");
        throw error;
    }
    let D;
    return {
        pid: f.pid,
        exited: promise,
        stop (h) {
            if (R) {
                return Promise.resolve();
            }
            D ??= new Promise((resolvePromise)=>{
                t(`[tool-host] stopping helper (${h})`);
                try {
                    f.stdin?.end();
                } catch  {}
                z(f, "SIGTERM");
                let A = after(ke, ()=>z(f, "SIGKILL"));
                let u = after(ee, resolvePromise);
                promise.then(()=>{
                    A();
                    u();
                    resolvePromise();
                });
            });
            return D;
        }
    };
}
function G(e) {
    return e.replace(/(?:cse|session|env)_[A-Za-z0-9_-]{16,}|[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}/g, "<id>");
}
function ae(e, o, s) {
    if (!o) {
        return false;
    }
    if (Ce.has(e)) {
        return Ne(o);
    }
    return Oe.has(e) || e === "ANTHROPIC_BASE_URL" && !Pe(o, s) || e.startsWith("CLAUDE_LOCAL_OAUTH_") && !ce(o);
}
function fe() {
    return Error("tool host helper: this build cannot hold a helper to the stored login");
}
function ue() {
    return Error("tool host helper: this process signs in or sends its traffic elsewhere");
}
function Le(e) {
    return e.flatMap((o)=>[
            o,
            `INPUT_${o}`
        ]);
}
function Pe(e, o) {
    if (Rh(e)) {
        return true;
    }
    return Ne(o.USE_LOCAL_OAUTH) && ce(e);
}
function ce(e) {
    try {
        return [
            "localhost",
            "127.0.0.1",
            "[::1]"
        ].includes(new URL(e).hostname);
    } catch  {
        return false;
    }
}
function Ue(e, o) {
    let s = setTimeout(o, e);
    s.unref();
    return ()=>clearTimeout(s);
}
function z(e, o) {
    try {
        e.kill(o);
    } catch (error) {
        t(`[tool-host] ${o} not delivered: ${G(l(error))}`);
    }
}
const Ve = 4;
const pe = 30000;
const te = 600000;
const _e = 3;
const ge = 10;
const Me = 3;
const We = 2500;
const xe = 5000;
const Fe = 30000;
const Be = 64;
const $e = 128;
function Te(e) {
    let o = e.now ?? Date.now;
    let s = new Map;
    let p = new Set;
    let E = new Map;
    let v = 0;
    let T = new Set;
    let S = new Map;
    let k = new Map;
    let f = [];
    let { NEGATIVE_INFINITY, NEGATIVE_INFINITY: NEGATIVE_INFINITY_1 } = Number;
    async function R(n, r) {
        if (r.signal.aborted) {
            return "unsettled";
        }
        let workId = me(n, r);
        if (workId === undefined) {
            t("[tool-host] item or environment id unusable; item left");
            return "unsettled";
        }
        if (s.has(workId) || [
            ...T
        ].some((B)=>B.workId === workId)) {
            H(r, workId);
            return "handled";
        }
        if (p.has(workId)) {
            return "unsettled";
        }
        let sessionId = typeof n.data === "object" && n.data !== null && "id" in n.data ? n.data.id : undefined;
        let y = typeof sessionId === "string" && q.test(sessionId) ? uO(sessionId) : undefined;
        if (typeof sessionId !== "string" || y === undefined || y === uO(workId)) {
            t("[tool-host] session id unusable; item stopped");
            K(s, workId, true);
            H(r, workId);
            return "handled";
        }
        let J = C(sessionId);
        if (J !== undefined) {
            return D(r, workId, sessionId, J);
        }
        if (o() < v) {
            return "unsettled";
        }
        p.add(workId);
        try {
            await e.api.acknowledgeWork(r.environmentId, workId, r.environmentSecret, vde(workId));
        } catch (error) {
            if (h(error, workId) !== "give_up") {
                return "unsettled";
            }
            let Z = ie(error);
            return D(r, workId, sessionId, "start_failed", Z === 404 || Z === 409 || Z === 410);
        } finally{
            p.delete(workId);
        }
        E.delete(workId);
        let I = r.signal.aborted ? "start_failed" : C(sessionId);
        if (I !== undefined) {
            return D(r, workId, sessionId, I);
        }
        K(s, workId, true);
        let startedAt = o();
        let handle;
        try {
            handle = e.spawnHelper({
                sessionId,
                workId,
                environmentId: r.environmentId,
                folder: e.folder
            });
        } catch (error) {
            t(`[tool-host] helper not started: ${G(l(error))}`, {
                level: "error"
            });
            P(sessionId);
            return D(r, workId, sessionId, "start_failed");
        }
        let M = S.get(sessionId);
        if (M !== undefined) {
            M.stoppedHere = true;
            U("supersede", async ()=>{
                await M.handle.stop("superseded");
                A(M);
            });
        }
        let x = {
            sessionId,
            workId,
            startedAt,
            handle,
            stoppedHere: false,
            startedTimer: undefined
        };
        x.startedTimer = setTimeout(V, pe, x);
        x.startedTimer.unref?.();
        T.add(x);
        S.set(sessionId, x);
        w();
        U("exit", async ()=>b(x, await handle.exited));
        H(r, workId);
        U("status line", ()=>e.logger.logStatus(`Serving tools to a cloud session in ${e.folder}`));
        u({
            kind: "started"
        });
        return "handled";
    }
    function C(sessionId) {
        if (!re(e.switches.gateOn)) {
            return "gate_off";
        }
        if (!re(e.switches.servingOn) || o() - NEGATIVE_INFINITY_1 < te) {
            return "serving_off";
        }
        if (!re(e.switches.folderServed)) {
            return "not_served";
        }
        let r = o() - te;
        let i = k.get(sessionId) ?? [];
        if (F(i, (y)=>y > r) >= _e || F(f, (y)=>y > r) >= ge) {
            return "at_capacity";
        }
        let d = S.has(sessionId) ? 1 : 0;
        if (T.size - d >= Ve) {
            return "at_capacity";
        }
    }
    function H(n, r) {
        U("stop", ()=>e.api.stopWork(n.environmentId, r, n.environmentSecret, true, vde(r)));
    }
    function D(n, workId, sessionId, d, y = false) {
        K(s, workId, true);
        if (!y) {
            X(sessionId, workId, d);
            u({
                kind: "refused",
                code: d
            });
        }
        H(n, workId);
        m("bridge_tool_host_work", y ? "withdrawn" : d);
        return "handled";
    }
    function h(error, workId) {
        let i = ie(error);
        t(`[tool-host] acknowledge failed (${i ?? "no response"})`);
        if (i === 429) {
            v = o() + Math.min(JLr(error) ?? xe, Fe);
        }
        let d = (E.get(workId) ?? 0) + 1;
        if (QLr(error) || d >= Me) {
            E.delete(workId);
            return "give_up";
        }
        K(E, workId, d);
        return "retry";
    }
    function b(n, r) {
        let i = o() - n.startedAt;
        let d = !n.stoppedHere && r.code !== 0;
        let y = d && r.code === E1;
        let J = y && o() - NEGATIVE_INFINITY < te;
        if (y) {
            NEGATIVE_INFINITY = o();
        }
        let I = !d ? undefined : J ? "serving_off" : i < pe ? "start_failed" : "helper_exited";
        if (I === "start_failed") {
            P(n.sessionId);
        }
        if (I === "serving_off") {
            NEGATIVE_INFINITY_1 = o();
        }
        if (I === "start_failed" || I === "serving_off") {
            V(n, I);
        }
        A(n);
        if (I !== undefined) {
            X(n.sessionId, n.workId, I);
        }
        u({
            kind: "ended",
            code: I,
            stoppedHere: n.stoppedHere
        });
        let Y = r.signal ?? `exit code ${r.code ?? "none"}`;
        let j = I === undefined ? "" : `, reported as ${I}`;
        let M = d && r.stderrFirstLine !== undefined ? `: ${r.stderrFirstLine}` : "";
        e.logger.logVerbose(`Tool helper for a cloud session ended (pid ${n.handle.pid ?? "none"}, ${Y}, after ${Math.round(i / 1000)}s${j}${M})`);
    }
    function A(n) {
        V(n);
        let r = T.delete(n);
        if (S.get(n.sessionId) === n) {
            S.delete(n.sessionId);
        }
        if (r) {
            w();
        }
    }
    function u(n) {
        U("event", ()=>e.onEvent?.(n));
    }
    function w() {
        U("live count report", ()=>e.onLiveCountChange(T.size));
    }
    function V(n, r) {
        if (n.startedTimer === undefined) {
            return;
        }
        clearTimeout(n.startedTimer);
        n.startedTimer = undefined;
        if (r === undefined) {
            g("bridge_tool_host_work");
        } else {
            m("bridge_tool_host_work", r);
        }
    }
    function P(sessionId) {
        let r = o();
        f = f.concat(r).slice(-ge);
        let i = k.get(sessionId) ?? [];
        k.delete(sessionId);
        K(k, sessionId, i.concat(r).slice(-_e));
    }
    function X(sessionId, workId, i) {
        U("report", ()=>e.api.refuseToolHost?.(sessionId, workId, i, AbortSignal.timeout(We)));
    }
    return {
        async handle (n, r) {
            try {
                return await R(n, r);
            } catch (error) {
                m("bridge_tool_host_work", "handler_threw");
                t(`[tool-host] handling a request failed unexpectedly (${Se(error)})`, {
                    level: "error"
                });
                try {
                    let d = me(n, r);
                    if (d !== undefined) {
                        K(s, d, true);
                        H(r, d);
                        return "handled";
                    }
                } catch  {}
                return "unsettled";
            }
        },
        async sweep (n) {
            let r = n === "shutdown" ? "helper_exited" : "gate_off";
            await Promise.allSettled([
                ...T
            ].map(async (i)=>{
                if (!i.stoppedHere) {
                    X(i.sessionId, i.workId, r);
                }
                i.stoppedHere = true;
                await i.handle.stop(n);
                A(i);
            }));
        },
        liveCount: ()=>T.size
    };
}
function me({ id }, o) {
    if (typeof id === "string" && id.length <= $e && G1(id) && G1(o.environmentId)) {
        return id;
    }
}
function U(e, o) {
    (async ()=>{
        try {
            await o();
        } catch (error) {
            t(`[tool-host] ${e} failed (${Se(error)})`);
        }
    })();
}
function Se(error) {
    let o = ie(error);
    if (o !== undefined) {
        return `status ${o}`;
    }
    if (error instanceof Error) {
        return error.name;
    }
    return "unknown";
}
function re(e) {
    try {
        return e();
    } catch (error) {
        t(`[tool-host] a switch could not be read, taken as off: ${G(l(error))}`, {
            level: "error"
        });
        return false;
    }
}
function K(e, o, s) {
    e.set(o, s);
    for (let p of e.keys()){
        if (e.size <= Be) {
            break;
        }
        e.delete(p);
    }
}
function ie(e) {
    if (typeof e === "object" && e !== null && "status" in e && typeof e.status === "number") {
        return e.status;
    }
}
function Ee() {
    Pr();
    if (yg().settings.disableRemoteControl === true || TP("disableRemoteControl").some((e)=>e === true) || Ap().some((e)=>e.disableRemoteControl === true)) {
        return true;
    }
    return [
        ...Dv(),
        ...Hv("flagSettings"),
        ...Hv("userSettings")
    ].some((e)=>{
        if (e.path === "") {
            return true;
        }
        if (e.statusOnly) {
            return false;
        }
        return e.severity !== "warning" || e.path === "disableRemoteControl";
    });
}
async function Je(checks) {
    let o = checks.gate();
    if (o === false) {
        return {
            kind: "withdraw",
            blocker: "gate_off"
        };
    }
    let s = checks.localDeviceFlag();
    if (s === false) {
        return {
            kind: "withdraw",
            blocker: "flag_off"
        };
    }
    let p = checks.platform();
    if (p !== "macos" && p !== "linux") {
        return {
            kind: "withdraw",
            blocker: "platform"
        };
    }
    let E = await checks.offReason();
    if (E !== undefined && E !== "unknown") {
        return {
            kind: "withdraw",
            blocker: E
        };
    }
    if (!await checks.signsInFromStoredLogin()) {
        return {
            kind: "withdraw",
            blocker: "not_stored_login"
        };
    }
    if (!await checks.isGitCheckoutRoot()) {
        return {
            kind: "withdraw",
            blocker: "not_git_checkout"
        };
    }
    if (o === "unknown" || s === "unknown") {
        return {
            kind: "unknown",
            waitingOn: "feature_flags"
        };
    }
    if (E === "unknown") {
        return {
            kind: "unknown",
            waitingOn: "policy"
        };
    }
    return {
        kind: "advertise",
        advert: {
            cliVersion: ({
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
            platform: p === "macos" ? "darwin" : "linux"
        }
    };
}
function N6n(e, o, gate = IFo) {
    return {
        gate,
        localDeviceFlag: ()=>{
            if (IQt()) {
                return false;
            }
            return xf() || "unknown";
        },
        platform,
        offReason: async ()=>{
            let p = p4(e);
            if (p !== undefined) {
                return p;
            }
            let { servedToolsUnavailableReason } = await import("/$bunfs/root/chunk-tty4dsvh.js");
            let v = servedToolsUnavailableReason();
            if (v === "policy_org" && !X5()) {
                return "unknown";
            }
            return v;
        },
        signsInFromStoredLogin: ()=>ze(o),
        isGitCheckoutRoot: ()=>qe(e)
    };
}
async function ze(e) {
    if (UL() !== undefined || !qlt()) {
        return false;
    }
    let o = await Jn().readAsync(e);
    return Boolean(o?.claudeAiOauth?.refreshToken);
}
async function qe(e) {
    try {
        let o = await lstat(join(e, ".git"));
        return o.isDirectory() || o.isFile();
    } catch (error) {
        if (!jt(error)) {
            c(W(error));
        }
        return false;
    }
}
const Xe = 3000;
const Ye = 120000;
const Ze = {
    feature_flags: "flags_unloaded",
    policy: "policy_unloaded",
    failed_read: "error"
};
const he = 10000;
const He = 60000;
async function GLr({ dir, credentials, log, checks = N6n(dir, credentials), signals = [
    $J,
    G7,
    AYe
], refuse, onVerdict }) {
    let S = {
        kind: "unknown",
        waitingOn: "feature_flags"
    };
    let k = "gate_off";
    let f = false;
    let N;
    let Number_NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    let R;
    let C = performance.now();
    let H;
    function D(u) {
        if (u.kind !== "unknown") {
            C = undefined;
            clearTimeout(H);
            H = undefined;
            return u;
        }
        C ??= performance.now();
        let w = Ye - (performance.now() - C);
        if (w <= 0) {
            return {
                kind: "withdraw",
                blocker: Ze[u.waitingOn]
            };
        }
        if (H === undefined) {
            H = setTimeout(()=>{
                H = undefined;
                h();
            }, w);
            H.unref?.();
        }
        return u;
    }
    async function h() {
        try {
            let u;
            try {
                u = await Je(checks);
                let P = u.kind === "advertise" ? refuse?.() : undefined;
                if (P !== undefined) {
                    u = {
                        kind: "withdraw",
                        blocker: P
                    };
                }
            } catch (error) {
                c(W(error));
                u = {
                    kind: "unknown",
                    waitingOn: "failed_read"
                };
            }
            if (f) {
                return;
            }
            let w = D(u);
            S = w;
            onVerdict?.(w);
            if (w.kind === "unknown") {
                return;
            }
            let V = w.kind === "advertise" ? "advertised" : w.blocker;
            if (V !== k) {
                k = V;
                log(`cloud sessions may use this folder: ${w.kind === "advertise" ? "yes" : `no (${w.blocker})`}`);
            }
        } catch (error) {
            c(W(error));
        }
    }
    function b() {
        if (N !== undefined) {
            N();
            return;
        }
        if (f || R !== undefined) {
            return;
        }
        if (S.kind === "unknown") {
            h();
            return;
        }
        let u = Date.now() - Number_NEGATIVE_INFINITY;
        let w = u >= 0 && u < He ? Math.max(he, He - u) : he;
        R = setTimeout(()=>{
            R = undefined;
            Number_NEGATIVE_INFINITY = Date.now();
            h();
        }, w);
        R.unref?.();
    }
    await h();
    let A = signals.map((u)=>u(b));
    if (S.kind === "unknown" && S.waitingOn === "feature_flags") {
        let u = new AbortController;
        N = ()=>{
            h().then(()=>{
                if (S.kind !== "unknown") {
                    u.abort();
                }
            });
        };
        await Q(Xe, u.signal);
        N = undefined;
    }
    return {
        getToolHostAdvert: ()=>{
            if (S.kind === "advertise") {
                return S;
            }
            return {
                kind: S.kind
            };
        },
        stop: ()=>{
            f = true;
            for (let u of A){
                u();
            }
            clearTimeout(R);
            R = undefined;
            clearTimeout(H);
            H = undefined;
        }
    };
}
function $6n(e) {
    return e.kind === "withdraw" && (e.blocker === "gate_off" || e.blocker === "flag_off" || e.blocker === "muted");
}
function VLr({ dir, checks, isOfferingFolder, hasAccessToken }) {
    function E() {
        return p4(dir, {
            ignoringMute: true
        });
    }
    return {
        gateOn: ()=>checks.gate() === true && checks.localDeviceFlag() === true && !jle(),
        servingOn: ()=>{
            if (!hasAccessToken() || !isOfferingFolder() || F6n() !== undefined) {
                return false;
            }
            let v = E();
            if (v !== undefined && v !== "launched_from_home") {
                return false;
            }
            return !Ee();
        },
        folderServed: ()=>E() !== "launched_from_home"
    };
}
function F6n(e = we()) {
    let o = oe(e);
    if (o === undefined) {
        return;
    }
    if (o.message.includes("signs in or sends its traffic elsewhere")) {
        return "other_sign_in";
    }
    return "no_helper";
}
function qLr(e, o) {
    return Te({
        ...e,
        spawnHelper: (s)=>de(s, {
                env: we(),
                ...o
            })
    });
}
async function KLr(e) {
    try {
        await Ge(e.sweep("shutdown"), ee);
    } catch (error) {
        c(W(error));
    }
}
function we() {
    return process.env;
}
export { N6n, GLr, $6n, VLr, F6n, qLr, KLr };
