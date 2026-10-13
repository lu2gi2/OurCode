import { XR } from "/$bunfs/root/chunk-j27d47mr.js";
import { l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { _, X } from "/$bunfs/root/chunk-bd805sh6.js";
import { Dd } from "/$bunfs/root/chunk-6kc68p18.js";
import { $d } from "/$bunfs/root/chunk-4dqcjnmb.js";
import { Uw, jv, ES } from "/$bunfs/root/chunk-55x53sfe.js";
import { NR } from "/$bunfs/root/chunk-z0brrd3r.js";
import { GBe, y6, nfe, mVn, x0t, din, uin, xwe, a9e, P0t, eee, HOo, I0t } from "/$bunfs/root/chunk-9zd2jnv8.js";
import { Fzt } from "/$bunfs/root/chunk-ycdgegbn.js";
import { Ml } from "/$bunfs/root/chunk-mr6t12zw.js";
import { l0, E1n } from "/$bunfs/root/chunk-f0v3xmb1.js";
import { Mw } from "/$bunfs/root/chunk-9nfq6p43.js";
import { randomUUID, randomBytes } from "crypto";
import { constants } from "fs";
import { access, mkdir, readFile, stat, open, readdir, unlink, writeFile } from "fs/promises";
import { createServer } from "http";
import { hostname, tmpdir } from "os";
import { join, resolve } from "path";
import { spawn } from "child_process";
const W = 5000;
const $e = 512;
const ye = 300000;
async function ve(e, jwt) {
    let s = join(tmpdir(), `${e}-${randomBytes(6).toString("hex")}`);
    let o = await open(s, "wx", 384);
    try {
        await o.writeFile(jwt);
    } catch (error) {
        await unlink(s).catch(()=>{});
        throw error;
    } finally{
        await o.close();
    }
    return s;
}
async function Ne(debugDir, claims, jwt, stderrTail, onDebug) {
    let n = join(debugDir, claims.jti);
    try {
        await writeFile(`${n}.jwt`, jwt, {
            mode: 384
        });
        await writeFile(`${n}.json`, _(claims, null, 2), {
            mode: 384
        });
        await writeFile(`${n}.stderr`, stderrTail, {
            mode: 384
        });
    } catch (error) {
        onDebug(`[runner:orchestrator] debug-dir write failed: ${l(error)}`);
    }
    try {
        let i = Date.now() - ye;
        let h = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.(jwt|json|stderr)$/;
        for (let c of (await readdir(debugDir))){
            if (!h.test(c)) {
                continue;
            }
            let p = join(debugDir, c);
            let a = await stat(p).catch(()=>null);
            if (a?.isFile() && a.mtimeMs < i) {
                await unlink(p).catch(()=>{});
            }
        }
    } catch (error) {
        onDebug(`[runner:orchestrator] debug-dir prune failed: ${l(error)}`);
    }
}
function V(e) {
    for(let t = 0; t < e.length; t++){
        let s = e.charCodeAt(t);
        if (s < 32 || s >= 127 && s <= 159 || s === 8232 || s === 8233) {
            return true;
        }
    }
    return false;
}
async function ne(e) {
    y6(e.claims.jti, "spawn-hint jti");
    if (e.claims.session_id) {
        y6(e.claims.session_id, "spawn-hint session_id");
    }
    if (e.claims.pool_id) {
        y6(e.claims.pool_id, "spawn-hint environment_id");
    }
    if (e.claims.account_id) {
        y6(e.claims.account_id, "spawn-hint account_id");
    }
    if (V(e.claims.account_email)) {
        throw Error("spawn-hint account_email: control character");
    }
    for (let p of e.claims.repo_sources){
        if (p.url && (!Fzt(p.url) || V(p.url))) {
            throw Error("spawn-hint repo_sources: unsafe git URL");
        }
        if (p.revision && !XR(p.revision)) {
            throw Error("spawn-hint repo_sources: unsafe revision");
        }
    }
    if (V(e.claims.correlation_id) || e.claims.correlation_id.startsWith("-") || /\s/.test(e.claims.correlation_id)) {
        throw Error("spawn-hint correlation_id: unsafe value");
    }
    if (V(e.claims.server_time)) {
        throw Error("spawn-hint server_time: unsafe value");
    }
    if (typeof e.claims.attempt !== "number" || !Number.isInteger(e.claims.attempt) || e.claims.attempt < 0) {
        throw Error("spawn-hint attempt: unsafe value");
    }
    let CLAUDE_RUNNER_CLIENT_PLATFORM = a9e(e.claims.client_platform);
    if (e.claims.client_platform && e.claims.client_platform !== xwe && CLAUDE_RUNNER_CLIENT_PLATFORM === undefined) {
        let client_platform = P0t(e.claims.client_platform);
        e.onDebug(`[runner:orchestrator] spawn-hint client_platform rejected by the env-export gate (CLAUDE_RUNNER_CLIENT_PLATFORM left unset): "${client_platform}" (len=${e.claims.client_platform.length})`);
        e.claims = {
            ...e.claims,
            client_platform
        };
    }
    if (!/^[A-Za-z0-9_.-]+$/.test(e.jwt)) {
        throw Error("spawn-hint work_order_jwt: unsafe character (not base64url + dot)");
    }
    let s = Date.now();
    let CLAUDE_RUNNER_WORK_ORDER_FILE = await ve(`work-order-${e.claims.jti}`, e.jwt);
    e.onDebug(`[runner:orchestrator] spawn-runner jti=${e.claims.jti} workOrderFile=${CLAUDE_RUNNER_WORK_ORDER_FILE}`);
    let env = {
        ...process.env,
        SELF_HOSTED_RUNNER_POOL_SECRET: undefined,
        SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: undefined,
        CLAUDE_RUNNER_WORK_ORDER_FILE,
        CLAUDE_RUNNER_ORDER_ID: e.claims.jti,
        CLAUDE_RUNNER_SESSION_ID: E1n("session", e.claims.session_id) ?? e.claims.session_id,
        CLAUDE_RUNNER_SESSION_UUID: e.claims.session_id,
        CLAUDE_RUNNER_ATTEMPT: String(e.claims.attempt),
        CLAUDE_RUNNER_POOL_ID: e.claims.pool_id,
        CLAUDE_RUNNER_ACCOUNT_EMAIL: e.claims.account_email,
        CLAUDE_RUNNER_ACCOUNT_ID: e.claims.account_id,
        CLAUDE_RUNNER_ORDER_SERVER_TIME: e.claims.server_time,
        CLAUDE_RUNNER_PRIMARY_REPO_URL: e.claims.primary_repo_url,
        CLAUDE_RUNNER_PRIMARY_REPO_REVISION: e.claims.primary_repo_revision,
        CLAUDE_RUNNER_REPO_SOURCES: e.claims.repo_sources.length > 0 ? _(e.claims.repo_sources) : "",
        CLAUDE_RUNNER_CORRELATION_ID: e.claims.correlation_id,
        CLAUDE_RUNNER_CLIENT_PLATFORM
    };
    let stderrTail = "";
    let timedOut = false;
    let exitCode = null;
    let execError = false;
    try {
        await new Promise((resolvePromise)=>{
            let a;
            try {
                a = spawn(e.hookPath, [], {
                    cwd: undefined,
                    env,
                    stdio: [
                        "ignore",
                        "pipe",
                        "pipe"
                    ],
                    detached: true,
                    windowsHide: true
                });
                NR(a.pid);
            } catch (error) {
                execError = true;
                stderrTail = `spawn-runner hook exec failed: ${l(error)}`;
                resolvePromise();
                return;
            }
            let u = ()=>{};
            let I;
            let C;
            let P;
            let T = setTimeout((g, x, U, k, H, f)=>{
                timedOut = true;
                k(`[runner:orchestrator] spawn-runner jti=${x} timed out after ${U}ms, sending SIGTERM to process tree`);
                if (g !== undefined) {
                    Mw(g, "SIGTERM");
                }
                I = setTimeout((w, M, d, r, S)=>{
                    if (w !== undefined) {
                        Mw(w, "SIGKILL");
                    }
                    P = setTimeout((D, R, N, O)=>{
                        R(`[runner:orchestrator] spawn-runner jti=${D} did not exit after SIGKILL within ${W}ms (likely D-state); abandoning child and resolving as timed out`);
                        N?.removeEventListener("abort", u);
                        O();
                    }, W, M, d, r, S);
                }, W, g, x, k, H, f);
            }, e.timeoutMs, a.pid, e.claims.jti, e.timeoutMs, e.onStatus, e.signal, resolvePromise);
            let y = 65536;
            a.stdout?.setEncoding("utf8");
            a.stderr?.setEncoding("utf8");
            let v = "";
            let E = "";
            let b = (g, x)=>{
                let U = g.split(`
`);
                let k = U.pop() ?? "";
                for (let H of U){
                    let f = $d(H).replace(/[\x00-\x08\x0b-\x1f\x7f]/g, "");
                    e.onStatus(`[runner:hook:spawn-runner] ${f}`);
                    if (x) {
                        stderrTail = (stderrTail + f + `
`).slice(-$e);
                    }
                }
                return k;
            };
            a.stdout?.on("data", (g)=>{
                v = b(v + g, false);
                if (v.length > y) {
                    v = v.slice(-y);
                }
            });
            a.stderr?.on("data", (g)=>{
                E = b(E + g, true);
                if (E.length > y) {
                    E = E.slice(-y);
                }
            });
            a.once("close", ()=>{
                if (v) {
                    b(v + `
`, false);
                }
                if (E) {
                    b(E + `
`, true);
                }
            });
            u = ()=>{
                e.onStatus(`[runner:orchestrator] spawn-runner jti=${e.claims.jti} aborted by shutdown, sending SIGTERM to process tree`);
                if (a.pid !== undefined) {
                    Mw(a.pid, "SIGTERM");
                    C = setTimeout((g)=>void Mw(g, "SIGKILL"), W, a.pid);
                    C.unref();
                }
            };
            e.signal?.addEventListener("abort", u, {
                once: true
            });
            if (e.signal?.aborted) {
                u();
            }
            a.on("error", (g)=>{
                clearTimeout(T);
                if (I) {
                    clearTimeout(I);
                }
                if (C) {
                    clearTimeout(C);
                }
                if (P) {
                    clearTimeout(P);
                }
                e.signal?.removeEventListener("abort", u);
                execError = true;
                stderrTail = z(g) ? "spawn-runner hook missing (ENOENT)" : `spawn-runner hook exec failed: ${l(g)}`;
                resolvePromise();
            });
            a.on("close", (g)=>{
                clearTimeout(T);
                if (I) {
                    clearTimeout(I);
                }
                if (C) {
                    clearTimeout(C);
                }
                if (P) {
                    clearTimeout(P);
                }
                e.signal?.removeEventListener("abort", u);
                exitCode = g;
                resolvePromise();
            });
        });
    } finally{
        await unlink(CLAUDE_RUNNER_WORK_ORDER_FILE).catch((p)=>e.onDebug(`[runner:orchestrator] failed to delete ${CLAUDE_RUNNER_WORK_ORDER_FILE}: ${l(p)}`));
    }
    if (timedOut && !stderrTail) {
        stderrTail = `spawn-runner hook timed out after ${e.timeoutMs}ms`;
    }
    if (e.debugDir) {
        await Ne(e.debugDir, e.claims, e.jwt, stderrTail, e.onDebug);
    }
    return {
        ok: exitCode === 0 && !timedOut && !execError,
        exitCode,
        timedOut,
        execError,
        stderrTail,
        durationMs: Date.now() - s
    };
}
const He = "/v1/code/scm-connectors/{provider}/{id}/tunnel";
const oe = 4003;
const Ce = 30000;
const re = 1000;
const se = 30000;
const Pe = 10000;
const Le = 30000;
const ie = 32768;
const Ie = 4194304;
const De = 1048576;
const xe = 50;
const Ae = 30000;
const Ue = 10000;
const Me = new Set([
    "GET",
    "HEAD",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS"
]);
const qe = new Set([
    "host",
    "connection",
    "content-length",
    "transfer-encoding"
]);
function te(e) {
    if (e.includes("://") || e.includes("/") || e.includes("@")) {
        throw Error("--scm-connector-host expects a bare hostname (e.g. ghe.example.com[:443]), not a URL");
    }
    let t = e.lastIndexOf(":");
    let s = e.startsWith("[");
    let host;
    let port = 443;
    if (t > 0 && (!s || s && e[t - 1] === "]")) {
        host = e.slice(0, t);
        let n = e.slice(t + 1);
        let i = parseInt(n, 10);
        if (Number.isNaN(i) || i < 1 || i > 65535 || String(i) !== n) {
            throw Error("--scm-connector-host port must be an integer in [1, 65535]");
        }
        port = i;
    } else {
        host = e;
    }
    if (host.length === 0) {
        throw Error("--scm-connector-host: hostname is empty");
    }
    if (host.includes(":") && !(host.startsWith("[") && host.endsWith("]"))) {
        throw Error("--scm-connector-host: hostname must be a bare hostname or [v6] literal");
    }
    return {
        host,
        port
    };
}
function ae(e) {
    let t = e.indexOf("=");
    if (t <= 0 || t === e.length - 1) {
        throw Error("--scm-connector-host-rewrite requires <from>=<to_host:to_port>");
    }
    let from = e.slice(0, t).toLowerCase();
    let o = e.slice(t + 1);
    for (let i of [
        from,
        o
    ]){
        if (i.includes("://") || i.includes("/") || i.includes("@")) {
            throw Error("--scm-connector-host-rewrite expects bare hostnames, not URLs");
        }
    }
    let { host, port } = te(o);
    return {
        from,
        toHost: host,
        toPort: port
    };
}
function Fe(path) {
    if (typeof path !== "string" || path.length === 0) {
        return "path must be a non-empty string";
    }
    if (path[0] !== "/") {
        return "path must start with /";
    }
    if (path[1] === "/") {
        return "path must not start with // (scheme-relative)";
    }
    if (path[1] === "@") {
        return "path must not start with /@";
    }
    if (path.includes("\\")) {
        return "path must not contain backslash";
    }
    return null;
}
function je(e, t, s) {
    let o = new URL("https://placeholder.invalid/");
    o.host = `${e}:${t}`;
    if (o.hostname === "placeholder.invalid") {
        throw Error("scm-connector dial host is not a valid URL host");
    }
    let o_origin = o.origin;
    let n = s.indexOf("?");
    o.pathname = n >= 0 ? s.slice(0, n) : s;
    o.search = n >= 0 ? s.slice(n) : "";
    if (o.origin !== o_origin || o.username !== "" || o.password !== "") {
        throw Error("path escaped the configured origin");
    }
    return o;
}
function We(apiUrl, scmConnector) {
    let s = He.replace("{provider}", encodeURIComponent(scmConnector.provider)).replace("{id}", String(scmConnector.connectorId));
    return apiUrl.replace(/^http/, "ws").replace(/\/+$/, "") + s;
}
function ce() {
    return {
        connected: false,
        last_connected_at: 0,
        last_error: null,
        reconnects: 0,
        requests_forwarded: 0
    };
}
function le(scmConnector, scm_connector, s, signal) {
    let m = We(s.apiUrl, scmConnector);
    let n = scmConnector.hostRewrite && scmConnector.hostRewrite.from === scmConnector.host.toLowerCase() ? scmConnector.hostRewrite.toHost : scmConnector.host;
    let i = scmConnector.hostRewrite && scmConnector.hostRewrite.from === scmConnector.host.toLowerCase() ? scmConnector.hostRewrite.toPort : scmConnector.port;
    let h = false;
    let c = null;
    let p = null;
    let a = null;
    let u = null;
    let I = re;
    let C = 0;
    let ca;
    let T = scmConnector.caFile === undefined;
    let y = new Map;
    let v = (d)=>{
        scm_connector.last_error = $d(d);
    };
    let E = (d)=>s.onStatus(`[runner:scm-connector] ${d}`);
    let b = (d)=>s.onDebug(`[runner:scm-connector] ${d}`);
    function g(d) {
        let r = c;
        if (!r || r.readyState !== WebSocket.OPEN) {
            return;
        }
        try {
            r.send(_(d));
        } catch (error) {
            v(l(error));
            E(`send failed: ${l(error)}`);
        }
    }
    function x(requestId, errorMessage) {
        g({
            httpError: {
                requestId,
                errorMessage
            }
        });
    }
    function U(signal) {
        let r = c;
        if (!r || r.readyState !== WebSocket.OPEN || r.bufferedAmount <= Ie) {
            return Promise.resolve();
        }
        return new Promise((resolvePromise)=>{
            let D = setInterval(()=>{
                if (h || signal.aborted || c !== r || r.readyState !== WebSocket.OPEN || r.bufferedAmount <= De) {
                    clearInterval(D);
                    resolvePromise();
                }
            }, xe);
        });
    }
    async function k(httpRequest) {
        let d_requestId = httpRequest.requestId;
        if (!d_requestId) {
            return;
        }
        if (httpRequest.port !== undefined && httpRequest.port !== 0 && httpRequest.port !== scmConnector.port) {
            x(d_requestId, `port ${httpRequest.port} does not match this connector's configured port ${scmConnector.port}`);
            return;
        }
        let S = Fe(httpRequest.path);
        if (S) {
            x(d_requestId, S);
            return;
        }
        let d_path = httpRequest.path;
        let method = (httpRequest.method ?? "GET").toUpperCase();
        if (!Me.has(method)) {
            x(d_requestId, "method not allowed");
            return;
        }
        let N;
        try {
            N = je(n, i, d_path);
        } catch (error) {
            x(d_requestId, l(error));
            return;
        }
        let O = new AbortController;
        y.set(d_requestId, O);
        let j = setTimeout((L)=>L.abort(), Ae, O);
        let A;
        try {
            let L = new Headers;
            for (let F of httpRequest.headers ?? []){
                if (!F.name || qe.has(F.name.toLowerCase())) {
                    continue;
                }
                L.append(F.name, F.value ?? "");
            }
            L.set("Host", scmConnector.port === 443 ? scmConnector.host : `${scmConnector.host}:${scmConnector.port}`);
            let body = httpRequest.body !== undefined && httpRequest.body !== "" ? Buffer.from(httpRequest.body, "base64") : undefined;
            A = await fetch(N, {
                method,
                headers: L,
                body,
                redirect: "manual",
                signal: O.signal,
                tls: ca !== undefined || n !== scmConnector.host ? {
                    ca,
                    serverName: scmConnector.host
                } : undefined
            });
        } catch (error) {
            clearTimeout(j);
            y.delete(d_requestId);
            v(`forward to ${scmConnector.host}: ${l(error)}`);
            x(d_requestId, l(error));
            return;
        }
        clearTimeout(j);
        let Y = [];
        A.headers.forEach((value, name)=>{
            Y.push({
                name,
                value
            });
        });
        let sequenceNumber = 0;
        g({
            httpHeaders: {
                requestId: d_requestId,
                statusCode: A.status,
                statusText: A.statusText || String(A.status),
                headers: Y,
                sequenceNumber
            }
        });
        sequenceNumber++;
        try {
            if (A.body) {
                let L = A.body.getReader();
                while(true){
                    await U(O.signal);
                    if (O.signal.aborted) {
                        await L.cancel();
                        break;
                    }
                    let q = await L.read();
                    if (q.value && q.value.length > 0) {
                        for(let F = 0; F < q.value.length; F += ie){
                            let ge = q.value.subarray(F, F + ie);
                            g({
                                httpChunk: {
                                    requestId: d_requestId,
                                    data: Buffer.from(ge).toString("base64"),
                                    isFinal: false,
                                    sequenceNumber
                                }
                            });
                            sequenceNumber++;
                        }
                    }
                    if (q.done) {
                        break;
                    }
                    if (O.signal.aborted) {
                        await L.cancel();
                        break;
                    }
                }
            }
            g({
                httpChunk: {
                    requestId: d_requestId,
                    data: "",
                    isFinal: true,
                    sequenceNumber
                }
            });
            scm_connector.requests_forwarded++;
        } catch (error) {
            x(d_requestId, `error reading GHES response body: ${l(error)}`);
        } finally{
            y.delete(d_requestId);
        }
    }
    function H(d) {
        let r;
        try {
            r = X(d);
        } catch (error) {
            E(`failed to parse tunnel request: ${l(error)}`);
            return;
        }
        if (r.httpRequest) {
            k(r.httpRequest).catch((S)=>{
                v(l(S));
                E(`handleHttpRequest failed: ${l(S)}`);
            });
        } else if (r.httpCancel) {
            let S = r.httpCancel.requestId;
            if (S) {
                y.get(S)?.abort();
                y.delete(S);
            }
        } else if (r.wsOpen) {
            g({
                wsError: {
                    tunnelId: r.wsOpen.tunnelId ?? "",
                    errorMessage: "WebSocket tunnel is not supported by the SCM connector"
                }
            });
        } else if (r.ptyOpen) {
            g({
                ptyError: {
                    tunnelId: r.ptyOpen.tunnelId ?? "",
                    errorMessage: "PTY tunnel is not supported by the SCM connector"
                }
            });
        }
    }
    function f(d) {
        if (h) {
            return;
        }
        scm_connector.reconnects++;
        let r;
        if (d === oe) {
            r = Ce;
            E(`standby (close code ${d}): another orchestrator holds connector ${scmConnector.connectorId}; retrying in ${r / 1000}s`);
        } else {
            if (C > 0 && Date.now() - C > se) {
                I = re;
            }
            r = I + Math.floor(Math.random() * (I / 2));
            I = Math.min(I * 2, se);
            b(`reconnecting in ${r}ms`);
        }
        C = 0;
        a = setTimeout(w, r);
    }
    function w() {
        if (h) {
            return;
        }
        a = null;
        if (!T) {
            Ml(readFile(scmConnector.caFile, "utf8"), Ue, `--scm-connector-ca-file read from ${scmConnector.caFile}`).then((r)=>{
                ca = r;
                T = true;
            }).catch((r)=>{
                v(`reading --scm-connector-ca-file: ${l(r)}`);
                E(`reading --scm-connector-ca-file: ${l(r)}`);
            });
        }
        let d;
        try {
            d = new globalThis.WebSocket(m, {
                headers: {
                    Authorization: `Bearer ${s.poolSecret}`
                },
                proxy: jv(m),
                tls: Uw() || undefined
            });
        } catch (error) {
            v(l(error));
            E(`WebSocket construct failed: ${l(error)}`);
            f();
            return;
        }
        c = d;
        u = setTimeout((r)=>{
            v("WebSocket open timeout");
            r.onopen = r.onmessage = r.onerror = r.onclose = null;
            try {
                r.close();
            } catch  {}
            if (c === r) {
                c = null;
            }
            f();
        }, Pe, d);
        d.onopen = ()=>{
            if (u) {
                clearTimeout(u);
                u = null;
            }
            scm_connector.connected = true;
            scm_connector.last_connected_at = Date.now();
            scm_connector.last_error = null;
            C = Date.now();
            E(`connected provider=${scmConnector.provider} connector_id=${scmConnector.connectorId} forward=${scmConnector.host}:${scmConnector.port}${n !== scmConnector.host ? ` (dial=${n}:${i})` : ""}`);
            p = setInterval(()=>{
                if (d.readyState === WebSocket.OPEN) {
                    d.ping?.();
                }
            }, Le);
        };
        d.onmessage = (r)=>{
            let S = typeof r.data === "string" ? r.data : Buffer.from(r.data).toString("utf8");
            H(S);
        };
        d.onerror = (r)=>{
            v("message" in r && typeof r.message === "string" ? r.message : "WebSocket error");
        };
        d.onclose = (r)=>{
            scm_connector.connected = false;
            if (u) {
                clearTimeout(u);
                u = null;
            }
            if (p) {
                clearInterval(p);
                p = null;
            }
            for (let S of y.values()){
                S.abort();
            }
            y.clear();
            if (c === d) {
                c = null;
            }
            if (r.code !== oe) {
                E(`closed code=${r.code} reason=${r.reason || "(none)"}`);
            }
            f(r.code);
        };
    }
    function stop() {
        if (h) {
            return;
        }
        h = true;
        if (a) {
            clearTimeout(a);
            a = null;
        }
        if (u) {
            clearTimeout(u);
            u = null;
        }
        if (p) {
            clearInterval(p);
            p = null;
        }
        for (let d of y.values()){
            d.abort();
        }
        y.clear();
        scm_connector.connected = false;
        try {
            c?.close();
        } catch  {}
        c = null;
        E("stopped");
    }
    signal?.addEventListener("abort", stop, {
        once: true
    });
    E(`starting provider=${scmConnector.provider} connector_id=${scmConnector.connectorId} url=${m}`);
    w();
    return {
        stop
    };
}
const apiUrl = "https://api.anthropic.com";
const de = 1500;
const pe = 8080;
const hookConcurrency = 4;
const hookTimeoutMs = 60000;
const expectedSpawnSeconds = 120;
const et = 10000;
const tt = 60000;
const nt = 5000;
const ot = 500;
const rt = 2000;
const st = 0.2;
const _e = 1000;
const it = 30000;
const at = new Set([
    400,
    401,
    403,
    404,
    426
]);
const K = [
    0.1,
    0.25,
    0.5,
    1,
    2.5,
    5,
    10,
    20,
    30,
    60
];
function ct() {
    return {
        buckets: K.map(()=>0),
        count: 0,
        sum: 0
    };
}
function lt(spawnHookDurations, t) {
    spawnHookDurations.sum += t;
    spawnHookDurations.count += 1;
    for(let s = 0; s < K.length; s++){
        if (t <= K[s]) {
            spawnHookDurations.buckets[s]++;
        }
    }
}
const B = [
    0.5,
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
    1280,
    2560,
    5120
];
function ut() {
    return {
        buckets: B.map(()=>0),
        count: 0,
        sum: 0
    };
}
function dt(sessionQueueWaits, t) {
    let s = Math.max(0, t);
    sessionQueueWaits.sum += s;
    sessionQueueWaits.count += 1;
    for(let o = 0; o < B.length; o++){
        if (s <= B[o]) {
            sessionQueueWaits.buckets[o]++;
        }
    }
}
function _t(e) {
    let t = {
        apiUrl,
        hooksDir: process.env.SELF_HOSTED_RUNNER_HOOKS_DIR ? resolve(process.env.SELF_HOSTED_RUNNER_HOOKS_DIR) : undefined,
        healthPort: mt(process.env.SELF_HOSTED_RUNNER_HEALTH_PORT, pe, "SELF_HOSTED_RUNNER_HEALTH_PORT"),
        hookConcurrency,
        hookTimeoutMs,
        expectedSpawnSeconds,
        minIdle: 0,
        debugDir: process.env.SELF_HOSTED_RUNNER_DEBUG_DIR,
        logLevel: "info"
    };
    let s;
    let connectorId;
    let provider = "ghe";
    let n = false;
    let caFile;
    let hostRewrite;
    for(let c = 0; c < e.length; c++){
        let p = e[c];
        let a = e[c + 1];
        switch(p){
            case "--api-url":
                if (a) {
                    t.apiUrl = a;
                    c++;
                }
                break;
            case "--pool-secret-file":
            case "--environment-secret-file":
                if (p === "--pool-secret-file") {
                    console.error("[runner:warn] --pool-secret-file is deprecated; use --environment-secret-file");
                }
                if (a) {
                    t.poolSecretFile = a;
                    c++;
                }
                break;
            case "--hooks-dir":
                if (a) {
                    t.hooksDir = resolve(a);
                    c++;
                }
                break;
            case "--health-port":
                if (a) {
                    let u = Dd(a);
                    if (Number.isNaN(u) || u < 0 || u > 65535) {
                        throw Error(`--health-port must be an integer in [0, 65535] (0 disables), got: ${a}`);
                    }
                    t.healthPort = u;
                    c++;
                }
                break;
            case "--hook-concurrency":
                if (a) {
                    let u = Dd(a);
                    if (Number.isNaN(u) || u < 1 || u > 100) {
                        throw Error(`--hook-concurrency must be an integer in [1, 100], got: ${a}`);
                    }
                    t.hookConcurrency = u;
                    c++;
                }
                break;
            case "--hook-timeout":
                if (a) {
                    let u = Number(a);
                    if (!Number.isFinite(u) || u <= 0) {
                        throw Error(`--hook-timeout must be a positive number of seconds, got: ${a}`);
                    }
                    t.hookTimeoutMs = u * 1000;
                    c++;
                }
                break;
            case "--expected-spawn-seconds":
                if (a) {
                    let u = parseInt(a, 10);
                    if (Number.isNaN(u) || u < 10 || u > 3600 || String(u) !== a.trim()) {
                        throw Error(`--expected-spawn-seconds must be an integer in [10, 3600], got: ${a}`);
                    }
                    t.expectedSpawnSeconds = u;
                    c++;
                }
                break;
            case "--min-idle":
                if (a) {
                    let u = parseInt(a, 10);
                    if (Number.isNaN(u) || u < 0 || u > 200 || String(u) !== a.trim()) {
                        throw Error("--min-idle must be an integer in [0, 200]");
                    }
                    t.minIdle = u;
                    c++;
                }
                break;
            case "--scm-connector-host":
                if (!a) {
                    throw Error("--scm-connector-host requires HOST[:PORT]");
                }
                s = te(a);
                c++;
                break;
            case "--scm-connector-id":
                {
                    if (!a) {
                        throw Error("--scm-connector-id requires an integer");
                    }
                    let u = parseInt(a, 10);
                    if (Number.isNaN(u) || u < 1 || String(u) !== a.trim()) {
                        throw Error("--scm-connector-id must be a positive integer");
                    }
                    connectorId = u;
                    c++;
                    break;
                }
            case "--scm-connector-provider":
                if (!a) {
                    throw Error("--scm-connector-provider requires a value");
                }
                if (!/^[a-z0-9-]{1,32}$/.test(a)) {
                    throw Error("--scm-connector-provider must match ^[a-z0-9-]{1,32}$");
                }
                provider = a;
                n = true;
                c++;
                break;
            case "--scm-connector-ca-file":
                if (!a) {
                    throw Error("--scm-connector-ca-file requires a path");
                }
                caFile = a;
                c++;
                break;
            case "--scm-connector-host-rewrite":
                if (!a) {
                    throw Error("--scm-connector-host-rewrite requires <from>=<to_host:to_port>");
                }
                hostRewrite = ae(a);
                c++;
                break;
            case "--debug-dir":
                if (a) {
                    t.debugDir = a;
                    c++;
                }
                break;
            case "--log-level":
                if (a) {
                    t.logLevel = a;
                    c++;
                }
                break;
            default:
                if (p?.startsWith("--")) {
                    throw Error(`unknown flag ${p}`);
                }
                break;
        }
    }
    if (s !== undefined) {
        if (connectorId === undefined) {
            throw Error("--scm-connector-id is required when --scm-connector-host is set");
        }
        t.scmConnector = {
            host: s.host,
            port: s.port,
            provider,
            connectorId,
            caFile,
            hostRewrite
        };
    } else if (connectorId !== undefined || n || caFile !== undefined || hostRewrite !== undefined) {
        throw Error("--scm-connector-id / --scm-connector-provider / --scm-connector-ca-file / --scm-connector-host-rewrite require --scm-connector-host");
    }
    if (t.hookTimeoutMs + W >= t.expectedSpawnSeconds * 1000) {
        throw Error(`${`--hook-timeout (${t.hookTimeoutMs / 1000}s) + ${W / 1000}s SIGKILL grace must be less than --expected-spawn-seconds (${t.expectedSpawnSeconds}s) \u2014 otherwise an HA replica `}re-claims the lease while this hook is still running and both spawn a runner`);
    }
    return t;
}
function mt(SELF_HOSTED_RUNNER_HEALTH_PORT, t, s) {
    if (SELF_HOSTED_RUNNER_HEALTH_PORT === undefined || SELF_HOSTED_RUNNER_HEALTH_PORT === "") {
        return t;
    }
    let o = Dd(SELF_HOSTED_RUNNER_HEALTH_PORT);
    if (Number.isNaN(o) || o < 0 || o > 65535) {
        throw Error(`${s} must be an integer in [0, 65535], got: "${SELF_HOSTED_RUNNER_HEALTH_PORT}"`);
    }
    return o;
}
async function pt(hooksDir) {
    if (!hooksDir) {
        throw Error("orchestrator requires --hooks-dir (or SELF_HOSTED_RUNNER_HOOKS_DIR) — no spawn-runner hook directory configured");
    }
    let t = join(hooksDir, "spawn-runner");
    let s;
    try {
        s = await Ml(stat(t), 5000, `stat ${t}`);
    } catch (error) {
        throw Error(`spawn-runner hook not found at ${t} \u2014 the orchestrator cannot start without it (${l(error)})`);
    }
    if (!s.isFile()) {
        throw Error(`spawn-runner hook at ${t} is not a regular file`);
    }
    try {
        await Ml(access(t, constants.X_OK), 5000, `access ${t}`);
    } catch  {
        throw Error(`spawn-runner hook at ${t} is not executable (chmod +x ${t})`);
    }
    return t;
}
function ht(poolSecret) {
    let t = poolSecret.replace(/^sk-ant-[a-z]+-/, "");
    let s = l0(t);
    let o = s !== null && typeof s === "object" ? s["ccr:pool_id"] : undefined;
    if (typeof o !== "string" || o === "") {
        throw Error("environment secret is missing the ccr:pool_id claim — cannot derive the environment ID for spawn-hint polling");
    }
    return o;
}
function ft(attempt) {
    if (attempt === undefined || attempt === null) {
        return 0;
    }
    if (typeof attempt === "number") {
        return attempt;
    }
    if (typeof attempt === "string") {
        if (/^(0|[1-9]\d{0,14})$/.test(attempt)) {
            return Number(attempt);
        }
        return attempt;
    }
    return String(attempt);
}
function wt(e, server_date) {
    let s = l0(e.work_order_jwt);
    let o = s !== null && typeof s === "object" ? s : {};
    let m = (p)=>{
        if (typeof o[p] === "string") {
            return o[p];
        }
        return "";
    };
    let o_aud = o.aud;
    let i = Array.isArray(o_aud) ? o_aud.find((p)=>typeof p === "string") ?? "" : typeof o_aud === "string" ? o_aud : "";
    let pool_id = m("ccr:pool_id") || (i.startsWith("ccpool_") ? i : "");
    let repo_sources = (e.sources ?? []).map((p)=>({
            url: p.url ?? "",
            revision: p.revision ?? ""
        }));
    return {
        jti: e.jti || m("jti"),
        session_id: e.session_uuid ?? "",
        attempt: ft(e.attempt),
        pool_id,
        account_id: m("ccr:spawn_account_id") || m("account_id"),
        account_email: m("ccr:spawn_account_email") || m("account_email"),
        server_time: server_date ?? "",
        repo_sources,
        primary_repo_url: repo_sources[0]?.url ?? "",
        primary_repo_revision: repo_sources[0]?.revision ?? "",
        correlation_id: typeof e.correlation_id === "string" ? e.correlation_id : "",
        client_platform: typeof e.client_platform === "string" ? e.client_platform : ""
    };
}
function gt(server_date, t = Date.now()) {
    if (!server_date) {
        return null;
    }
    let s = Date.parse(server_date);
    if (Number.isNaN(s)) {
        return null;
    }
    return t - s;
}
function St(healthState, t = Date.now()) {
    let s = healthState.last_poll_at > 0 ? (t - healthState.last_poll_at) / 1000 : 0;
    let o = `version="${eee(healthState.version)}",pool_id="${eee(healthState.pool_id)}",orchestrator_uuid="${eee(healthState.orchestratorUuid)}",hostname="${eee(healthState.hostname)}"`;
    let m = "claude_code_self_hosted_orchestrator";
    let n = "";
    n += `# HELP claude_code_self_hosted_orchestrator_info Self-hosted orchestrator identity (info-style gauge; value is always 1).
`;
    n += `# TYPE claude_code_self_hosted_orchestrator_info gauge
`;
    n += `claude_code_self_hosted_orchestrator_info{${o}} 1
`;
    n += `# HELP claude_code_self_hosted_orchestrator_connected 1 when the last PollSpawnHints returned successfully; 0 on transport/5xx error.
`;
    n += `# TYPE claude_code_self_hosted_orchestrator_connected gauge
`;
    n += `claude_code_self_hosted_orchestrator_connected ${healthState.connected ? 1 : 0}
`;
    n += `# HELP claude_code_self_hosted_orchestrator_last_poll_age_seconds Seconds since the last PollSpawnHints attempt (success or failure).
`;
    n += `# TYPE claude_code_self_hosted_orchestrator_last_poll_age_seconds gauge
`;
    n += `claude_code_self_hosted_orchestrator_last_poll_age_seconds ${s}
`;
    n += `# HELP claude_code_self_hosted_orchestrator_queue_pending_sessions Spawn-hint queue rows claimable right now (eta < now, unclaimed, not circuit-broken). Server-side aggregate for this environment.
`;
    n += `# TYPE claude_code_self_hosted_orchestrator_queue_pending_sessions gauge
`;
    if (healthState.queue_counts !== null) {
        n += `claude_code_self_hosted_orchestrator_queue_pending_sessions ${healthState.queue_counts.pending}
`;
    }
    n += `# HELP claude_code_self_hosted_orchestrator_queue_backing_off_sessions Spawn-hint queue rows in retry backoff (nacked retryable; eta in the future). Server-side aggregate for this environment.
`;
    n += `# TYPE claude_code_self_hosted_orchestrator_queue_backing_off_sessions gauge
`;
    if (healthState.queue_counts !== null) {
        n += `claude_code_self_hosted_orchestrator_queue_backing_off_sessions ${healthState.queue_counts.backing_off}
`;
    }
    n += `# HELP claude_code_self_hosted_orchestrator_queue_circuit_broken_sessions Spawn-hint queue rows circuit-broken (nacked non-retryable; operator must RetrySpawnHint to re-admit). Server-side aggregate for this environment.
`;
    n += `# TYPE claude_code_self_hosted_orchestrator_queue_circuit_broken_sessions gauge
`;
    if (healthState.queue_counts !== null) {
        n += `claude_code_self_hosted_orchestrator_queue_circuit_broken_sessions ${healthState.queue_counts.circuit_broken}
`;
    }
    n += `# HELP claude_code_self_hosted_orchestrator_pool_pending_sessions Total sessions currently waiting on a runner for this environment (the UI "N ahead of you" number). Autoscale on this, not on queue_pending_sessions.
`;
    n += `# TYPE claude_code_self_hosted_orchestrator_pool_pending_sessions gauge
`;
    if (healthState.pool_pending_session_count !== null) {
        n += `claude_code_self_hosted_orchestrator_pool_pending_sessions ${healthState.pool_pending_session_count}
`;
    }
    n += `# HELP ${"claude_code_self_hosted_orchestrator"}_pool_active_sessions Sessions currently assigned to an alive runner in this environment (the server's environment-wide sum of the per-runner _active_sessions gauges). Environment-wide aggregate \u2014 identical on every orchestrator for one environment; use MAX not SUM across orchestrator instances.
`;
    n += `# TYPE claude_code_self_hosted_orchestrator_pool_active_sessions gauge
`;
    if (healthState.pool_active_session_count !== null) {
        n += `claude_code_self_hosted_orchestrator_pool_active_sessions ${healthState.pool_active_session_count}
`;
    }
    n += `# HELP claude_code_self_hosted_orchestrator_warm_hints_dispatched_total Standby (warm) hints dispatched since process start.
`;
    n += `# TYPE claude_code_self_hosted_orchestrator_warm_hints_dispatched_total counter
`;
    n += `claude_code_self_hosted_orchestrator_warm_hints_dispatched_total ${healthState.warm_hints_dispatched}
`;
    n += `# HELP ${"claude_code_self_hosted_orchestrator"}_spawn_hooks_total spawn-runner hook outcomes since process start (exit-code contract: ok=0, retryable=1/timeout/signal, non_retryable=>=2/ENOENT/EACCES). Counts orchestrator hook invocations (seat + warm), NOT runner child spawns \u2014 NOT comparable to the runner's sessions_started_total (capacity>1, warm environments, and per-runner re-spawns all diverge them).
`;
    n += `# TYPE claude_code_self_hosted_orchestrator_spawn_hooks_total counter
`;
    n += `claude_code_self_hosted_orchestrator_spawn_hooks_total{result="ok"} ${healthState.spawnHooks.ok}
`;
    n += `claude_code_self_hosted_orchestrator_spawn_hooks_total{result="retryable"} ${healthState.spawnHooks.retryable}
`;
    n += `claude_code_self_hosted_orchestrator_spawn_hooks_total{result="non_retryable"} ${healthState.spawnHooks.nonRetryable}
`;
    n += `# HELP claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds Wall-clock seconds per spawn-runner hook run (all outcomes; seat + warm).
`;
    n += `# TYPE claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds histogram
`;
    let e_spawnHookDurations = healthState.spawnHookDurations;
    for(let c = 0; c < K.length; c++){
        n += `claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds_bucket{le="${K[c]}"} ${e_spawnHookDurations.buckets[c]}
`;
    }
    n += `claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds_bucket{le="+Inf"} ${e_spawnHookDurations.count}
`;
    n += `claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds_sum ${e_spawnHookDurations.sum}
`;
    n += `claude_code_self_hosted_orchestrator_spawn_hook_duration_seconds_count ${e_spawnHookDurations.count}
`;
    n += `# HELP claude_code_self_hosted_orchestrator_session_queue_wait_seconds Seconds each session waited in the queue before the orchestrator claimed it for spawn (HTTP Date header - SpawnHint.queue_wait_started_at; seat hints only). For p50/p99 queue-time SLOs and "queue wait > N" alerting.
`;
    n += `# TYPE claude_code_self_hosted_orchestrator_session_queue_wait_seconds histogram
`;
    let e_sessionQueueWaits = healthState.sessionQueueWaits;
    for(let c = 0; c < B.length; c++){
        n += `claude_code_self_hosted_orchestrator_session_queue_wait_seconds_bucket{le="${B[c]}"} ${e_sessionQueueWaits.buckets[c]}
`;
    }
    n += `claude_code_self_hosted_orchestrator_session_queue_wait_seconds_bucket{le="+Inf"} ${e_sessionQueueWaits.count}
`;
    n += `claude_code_self_hosted_orchestrator_session_queue_wait_seconds_sum ${e_sessionQueueWaits.sum}
`;
    n += `claude_code_self_hosted_orchestrator_session_queue_wait_seconds_count ${e_sessionQueueWaits.count}
`;
    n += `# HELP claude_code_self_hosted_orchestrator_poll_errors_total PollSpawnHints request failures by error kind (transport=no HTTP response; timeout=client deadline; 5xx/429/4xx by status). All five series present from process start so rate() works and absent() means process-down.
`;
    n += `# TYPE claude_code_self_hosted_orchestrator_poll_errors_total counter
`;
    for (let c of mVn){
        n += `claude_code_self_hosted_orchestrator_poll_errors_total{error_kind="${c}"} ${healthState.pollErrors[c]}
`;
    }
    n += `# HELP claude_code_self_hosted_orchestrator_clock_skew_seconds Local-minus-server clock skew from the most recent PollSpawnHints Date header. Sample omitted until measured.
`;
    n += `# TYPE claude_code_self_hosted_orchestrator_clock_skew_seconds gauge
`;
    if (healthState.clock_skew_ms !== null) {
        n += `claude_code_self_hosted_orchestrator_clock_skew_seconds ${healthState.clock_skew_ms / 1000}
`;
    }
    n += `# HELP claude_code_self_hosted_orchestrator_scm_connector_connected 1 when the standing SCM connector WebSocket is OPEN; 0 when dialing/backing off. Series absent when --scm-connector-host is not set.
`;
    n += `# TYPE claude_code_self_hosted_orchestrator_scm_connector_connected gauge
`;
    if (healthState.scm_connector !== null) {
        n += `claude_code_self_hosted_orchestrator_scm_connector_connected ${healthState.scm_connector.connected ? 1 : 0}
`;
    }
    n += `# HELP claude_code_self_hosted_orchestrator_scm_connector_requests_forwarded_total Cumulative HTTP requests proxied to the configured SCM host since process start.
`;
    n += `# TYPE claude_code_self_hosted_orchestrator_scm_connector_requests_forwarded_total counter
`;
    if (healthState.scm_connector !== null) {
        n += `claude_code_self_hosted_orchestrator_scm_connector_requests_forwarded_total ${healthState.scm_connector.requests_forwarded}
`;
    }
    return n;
}
function Et(healthPort, healthState, onStatus) {
    let o = createServer((n, i)=>{
        if (n.method === "GET" && n.url === "/metrics") {
            let c = St(healthState);
            i.writeHead(200, {
                "Content-Type": "text/plain; version=0.0.4; charset=utf-8",
                "Content-Length": Buffer.byteLength(c)
            });
            i.end(c);
            return;
        }
        if (n.method !== "GET" || n.url !== "/healthz") {
            i.writeHead(404, {
                "Content-Type": "text/plain"
            });
            i.end(`not found
`);
            return;
        }
        let h = _({
            status: "ok",
            orchestrator_uuid: healthState.orchestratorUuid,
            hostname: healthState.hostname,
            version: healthState.version,
            pool_id: healthState.pool_id,
            connected: healthState.connected,
            last_poll_at: healthState.last_poll_at > 0 ? new Date(healthState.last_poll_at).toISOString() : null,
            last_hint_at: healthState.last_hint_at > 0 ? new Date(healthState.last_hint_at).toISOString() : null,
            last_hook_ok_at: healthState.last_hook_ok_at > 0 ? new Date(healthState.last_hook_ok_at).toISOString() : null,
            last_warm_hook_ok_at: healthState.last_warm_hook_ok_at > 0 ? new Date(healthState.last_warm_hook_ok_at).toISOString() : null,
            last_error: healthState.last_error,
            clock_skew_ms: healthState.clock_skew_ms,
            queue_counts: healthState.queue_counts,
            pool_pending_session_count: healthState.pool_pending_session_count,
            pool_active_session_count: healthState.pool_active_session_count,
            warm_hints_dispatched: healthState.warm_hints_dispatched,
            scm_connector_connected: healthState.scm_connector?.connected ?? null,
            scm_connector: healthState.scm_connector ? {
                connected: healthState.scm_connector.connected,
                last_connected_at: healthState.scm_connector.last_connected_at > 0 ? new Date(healthState.scm_connector.last_connected_at).toISOString() : null,
                last_error: healthState.scm_connector.last_error,
                reconnects: healthState.scm_connector.reconnects,
                requests_forwarded: healthState.scm_connector.requests_forwarded
            } : null
        });
        i.writeHead(200, {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(h)
        });
        i.end(h);
    });
    o.unref();
    let m = 0;
    o.on("error", (n)=>{
        if (n.code === "EADDRINUSE" && m === 0) {
            m++;
            onStatus(`[runner:warn] /healthz port ${healthPort} busy, retrying in ${de}ms`);
            setTimeout((i, h)=>i.listen(h), de, o, healthPort).unref();
            return;
        }
        onStatus(`[runner:warn] /healthz listener failed on port ${healthPort}: ${n.message} \u2014 continuing without health endpoint`);
    });
    o.on("listening", ()=>{
        let n = o.address();
        let i = typeof n === "object" && n ? n.port : healthPort;
        onStatus(`[runner:health] orchestrator /healthz and /metrics listening on :${i}`);
    });
    o.listen(healthPort);
    return o;
}
function bt(pollIntervalMs, random) {
    return Math.round(pollIntervalMs * (1 + st * (2 * random() - 1)));
}
async function kt({ apiClient, healthState, onStatus, onDebug, args, hookPath, runHook = ne, fatalExit = Rt, pollIntervalMs = nt, minPollGapMs = ot, fullAnswerSettleMs = rt, random = Math.random }, signal) {
    let P = _e;
    let T = new Set;
    let args_hookConcurrency = args.hookConcurrency;
    let v = -Infinity;
    let E = -Infinity;
    let b = false;
    let g = 0;
    while(!signal.aborted){
        if (T.size >= args_hookConcurrency) {
            await Promise.race(T);
            continue;
        }
        let k = performance.now();
        if (b && k - v < pollIntervalMs && k - E < pollIntervalMs) {
            await Q(pollIntervalMs - (k - E), signal);
            continue;
        }
        let max = args_hookConcurrency - T.size;
        healthState.last_poll_at = Date.now();
        E = k;
        let f;
        try {
            f = await apiClient.pollSpawnHints({
                orchestrator_uuid: healthState.orchestratorUuid,
                hostname: healthState.hostname,
                client_version: GBe,
                max,
                expected_spawn_seconds: args.expectedSpawnSeconds,
                ...args.minIdle > 0 && {
                    min_idle: args.minIdle
                }
            }, signal);
        } catch (error) {
            if (signal.aborted) {
                break;
            }
            healthState.pollErrors[x0t(error)]++;
            let N = nfe(error);
            let O = $d(l(error));
            if (N !== undefined && at.has(N)) {
                healthState.connected = false;
                healthState.last_error = O;
                if (T.size > 0) {
                    onStatus(`[runner:orchestrator] poll rejected (HTTP ${N}): waiting for ${T.size} running hook(s) to end, then exiting`);
                    await Promise.allSettled(T);
                }
                fatalExit(N === 426 ? `orchestrator version too old (HTTP 426): ${O} \u2014 upgrade and restart` : `PollSpawnHints rejected (HTTP ${N}): ${O}`);
            }
            healthState.connected = false;
            healthState.last_error = O;
            onStatus(`[runner:orchestrator] poll failed${N ? ` (HTTP ${N})` : ""}: ${O} \u2014 retrying in ${Math.round(P / 1000)}s`);
            await Q(P, signal);
            P = Math.min(P * 2, it);
            continue;
        }
        healthState.connected = true;
        healthState.last_error = null;
        P = _e;
        x(f.server_date);
        healthState.queue_counts = {
            pending: f.pending_count,
            backing_off: f.backing_off_count,
            circuit_broken: f.circuit_broken_count
        };
        healthState.pool_pending_session_count = f.pool_pending_session_count ?? null;
        healthState.pool_active_session_count = f.pool_active_session_count ?? null;
        {
            let R = f.server_date !== null ? Date.parse(f.server_date) : Date.now();
            let N = Number.isFinite(R) ? R : Date.now();
            for (let O of f.hints){
                if (typeof O.queue_wait_started_at !== "string") {
                    continue;
                }
                let j = Date.parse(O.queue_wait_started_at);
                if (!Number.isFinite(j)) {
                    continue;
                }
                dt(healthState.sessionQueueWaits, (N - j) / 1000);
            }
        }
        let w = f.hints.slice(0, max);
        let M = f.hints.slice(max);
        for (let R of M){
            onStatus(`[runner:orchestrator] server over-returned hint session=${R.session_uuid} (got ${f.hints.length}, max=${max}) \u2014 nacking retryably`);
            await apiClient.nackSpawnHint({
                session_uuid: R.session_uuid,
                attempt: R.attempt,
                error: "orchestrator: server over-returned hints (>max)",
                retryable: true
            }, signal).catch((N)=>onStatus(`[runner:orchestrator] nack of over-returned hint failed: ${l(N)} \u2014 lease expiry will re-admit`));
        }
        let d = Math.max(0, max - w.length);
        let r = args.minIdle > 0 ? f.warm_hints.slice(0, d) : [];
        if (f.warm_hints.length > r.length) {
            onDebug(`[runner:orchestrator] dropping ${f.warm_hints.length - r.length} warm hint(s) (budget=${d}, minIdle=${args.minIdle})`);
        }
        if (w.length > 0) {
            onStatus(`[runner:orchestrator] dispatching ${w.length} hint(s) (concurrency=${args.hookConcurrency})`);
        }
        if (r.length > 0) {
            onStatus(`[runner:orchestrator] dispatching ${r.length} warm hint(s) (min_idle=${args.minIdle})`);
        }
        let S = [
            ...w.map((R)=>({
                    hint: R,
                    hook: U(R, f.server_date, false)
                })),
            ...r.map((R)=>({
                    hint: R,
                    hook: U(R, f.server_date, true)
                }))
        ];
        let D;
        args_hookConcurrency = Math.min(args.hookConcurrency, D ?? args.hookConcurrency);
        b = D !== undefined;
        if (D === undefined) {
            await Promise.all([
                ...S.map((R)=>R.hook),
                ...T
            ]);
        } else {
            let R = [
                ...T
            ];
            let N = [];
            for (let { hint, hook } of S){
                let A = hook.catch((Y)=>{
                    healthState.last_error = $d(l(Y));
                    onStatus(`[runner:orchestrator] hint dispatch threw session=${hint.session_uuid} jti=${hint.jti}: ${healthState.last_error} \u2014 not retried here; the server's state is whatever its hook or nack already set`);
                }).finally(()=>T.delete(A));
                T.add(A);
                N.push(A);
            }
            if (w.length > 0) {
                if (N.length >= Math.min(max, args_hookConcurrency) && g < fullAnswerSettleMs) {
                    await Ge(Promise.race([
                        Promise.all(N),
                        ...R
                    ]), fullAnswerSettleMs);
                }
                await Q(Math.min(minPollGapMs, Math.max(0, minPollGapMs - (Date.now() - healthState.last_poll_at))), signal);
                continue;
            }
        }
        await Q(bt(pollIntervalMs, random), signal);
    }
    await Promise.all(T);
    function x(server_date) {
        let H = gt(server_date);
        if (H === null) {
            return;
        }
        healthState.clock_skew_ms = H;
        if (Math.abs(H) > tt) {
            onStatus(`[runner:warn] clock skew ${Math.round(H / 1000)}s vs server \u2014 check NTP (work-order exp checks may fail)`);
        }
    }
    async function U(k, server_date, f) {
        healthState.last_hint_at = Date.now();
        if (f) {
            healthState.warm_hints_dispatched++;
        }
        let w;
        let M = false;
        try {
            let claims = wt(k, server_date);
            w = await runHook({
                hookPath,
                jwt: k.work_order_jwt,
                claims,
                timeoutMs: args.hookTimeoutMs,
                debugDir: args.debugDir,
                signal,
                onStatus,
                onDebug
            });
            M = true;
        } catch (err) {
            w = {
                ok: false,
                exitCode: 1,
                timedOut: false,
                execError: false,
                stderrTail: `spawn-runner hook setup failed: ${l(err)}`,
                durationMs: 0
            };
        }
        g = w.durationMs;
        lt(healthState.spawnHookDurations, w.durationMs / 1000);
        if (w.ok) {
            healthState.spawnHooks.ok++;
            healthState.last_hook_ok_at = Date.now();
            if (f) {
                healthState.last_warm_hook_ok_at = healthState.last_hook_ok_at;
            }
            onDebug(`[runner:orchestrator] ok session=${k.session_uuid} attempt=${k.attempt} jti=${k.jti} (${w.durationMs}ms)`);
            return;
        }
        let error = $d(w.stderrTail || (w.exitCode === null ? "hook killed by external signal (no stderr)" : `exit ${w.exitCode}`));
        let retryable = w.exitCode === 1 || w.timedOut || w.exitCode === null && !w.execError;
        let failure_kind = !M ? undefined : w.timedOut ? "SESSION_FAILURE_KIND_SPAWN_TIMEOUT" : "SESSION_FAILURE_KIND_SPAWN_HOOK_ERROR";
        if (retryable) {
            healthState.spawnHooks.retryable++;
        } else {
            healthState.spawnHooks.nonRetryable++;
        }
        healthState.last_error = `spawn-runner hook failed: ${error}`;
        if (f) {
            onStatus(`[runner:orchestrator] warm hook failed jti=${k.jti} exit=${w.exitCode} timedOut=${w.timedOut}: ${error} \u2014 lease expiry will re-mint`);
            return;
        }
        v = performance.now();
        onStatus(`[runner:orchestrator] nack session=${k.session_uuid} attempt=${k.attempt} exit=${w.exitCode} timedOut=${w.timedOut} retryable=${retryable}: ${error}`);
        try {
            await apiClient.nackSpawnHint({
                session_uuid: k.session_uuid,
                attempt: k.attempt,
                error,
                retryable,
                ...failure_kind && {
                    failure_kind
                }
            }, signal);
        } catch (err) {
            onStatus(`[runner:orchestrator] nack failed session=${k.session_uuid}: ${l(err)} \u2014 lease expiry will re-admit`);
        }
    }
}
function Rt(e) {
    console.error(`${new Date().toISOString()} [self-hosted-runner] [runner:fatal] ${$d(e)}`);
    process.exit(1);
}
export async function selfHostedRunnerOrchestratorMain(e) {
    if (e.includes("--help") || e.includes("-h")) {
        console.log(`Usage: claude self-hosted-runner orchestrator [options]

Polls the spawn-hints queue (server returns immediately) and runs \${hooks-dir}/spawn-runner once per
hint. The hook must submit work asynchronously (kubectl create job, EC2
RunInstances, ...) and exit within --hook-timeout. Exit-code contract (session
spawns): 0 = success (no-op); 1 = retryable failure (backoff); >=2 = non-retryable
(circuit-break); stderr tail is forwarded as the nack error. Standby (--min-idle)
spawns: any non-zero exit is logged locally and re-requested after the lease.

Connection:
  --api-url <url>             API base URL (default: ${apiUrl})
  --environment-secret-file <path>
                              Path to environment secret file (or set SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET)
                              (--pool-secret-file / SELF_HOSTED_RUNNER_POOL_SECRET are deprecated aliases.)

Hook:
  --hooks-dir <path>          Directory containing the spawn-runner hook (REQUIRED).
                              [env: SELF_HOSTED_RUNNER_HOOKS_DIR]
  --hook-concurrency <n>      Max spawn-runner hooks running in parallel (default: ${hookConcurrency}).
                              Also caps how many hints are claimed per poll.
  --hook-timeout <sec>        SIGTERM the hook after <sec> seconds (default: ${hookTimeoutMs / 1000}).
  --expected-spawn-seconds <n>  p99 boot time for runners this orchestrator spawns
                              (default: ${expectedSpawnSeconds}). Sent on every Poll as the
                              server-side lease; if the runner doesn't register before then, the
                              session is re-hinted with a fresh jti. HA replicas MUST use the same value.
  --min-idle <n>              Keep at least <n> idle slots free (free capacity across runners, not
                              runner count; default: 0, disabled). The server mints standby
                              work_orders (no session binding) for the gap on every Poll.

SCM connector (optional \u2014 standing tunnel so Anthropic-hosted pre-session flows can
reach a GHES host that is only routable from inside your network):
  --scm-connector-host <h[:p]>   GHES hostname to forward to (port defaults to 443).
                                 Setting this enables the connector.
  --scm-connector-id <n>         ghe_configurations.id for this org (REQUIRED with --scm-connector-host).
  --scm-connector-provider <s>   Provider slug (default: ghe).
  --scm-connector-ca-file <path> Extra CA bundle (PEM) for TLS to the GHES host.
  --scm-connector-host-rewrite <from>=<to_host:to_port>
                                 e2e only \u2014 redirect the TCP connect while keeping
                                 Host/SNI as --scm-connector-host.

Runtime:
  --health-port <port>        Port for /healthz HTTP listener (default: ${pe}). 0 disables.
                              ALWAYS returns 200 (liveness). Body carries connected/last_*/queue_counts/warm_hints_dispatched
                              for readiness/alerting. [env: SELF_HOSTED_RUNNER_HEALTH_PORT]
  --log-level <level>         Log level: info or debug (default: info)

Debug:
  --debug-dir <path>          DEV ONLY \u2014 writes each work-order JWT + decoded JSON + hook stderr to
                              <dir>/<jti>.{jwt,json,stderr}. Auto-pruned after 5m.
                              [env: SELF_HOSTED_RUNNER_DEBUG_DIR]

  --help, -h                  Show this help message`);
        return;
    }
    ES();
    let args;
    try {
        I0t("orchestrator mode");
        HOo(e);
        args = _t(e);
    } catch (error) {
        console.error(`error: ${$d(l(error))}
Run 'claude self-hosted-runner orchestrator --help' for usage.`);
        process.exit(2);
    }
    let s = args.logLevel === "debug";
    let o = ()=>new Date().toISOString();
    let m = (b)=>$d(b).replace(/[\x00-\x08\x0b-\x1f\x7f]/g, "");
    let onDebug = (b)=>{
        if (s) {
            console.error(`${o()} [DEBUG] ${m(b)}`);
        }
    };
    let onStatus = (b)=>{
        console.log(`${o()} [self-hosted-runner] ${m(b)}`);
    };
    let hookPath;
    try {
        hookPath = await pt(args.hooksDir);
    } catch (error) {
        onStatus(`[runner:fatal] ${l(error)}`);
        process.exit(1);
    }
    onStatus(`[runner:hook] spawn-runner hook found at ${hookPath}`);
    let poolSecret;
    try {
        poolSecret = await Tt(args);
    } catch (error) {
        onStatus(`[runner:fatal] ${l(error)}`);
        process.exit(1);
    }
    if (args.debugDir) {
        await mkdir(args.debugDir, {
            recursive: true,
            mode: 448
        }).catch((b)=>onStatus(`[runner:warn] failed to create --debug-dir ${args.debugDir}: ${l(b)} \u2014 continuing without debug artifacts`));
    }
    let orchestratorUuid = randomUUID();
    let hostname_1 = hostname();
    onStatus(`[runner:orchestrator] starting orchestrator_uuid=${orchestratorUuid} hostname=${hostname_1} hook-concurrency=${args.hookConcurrency} hook-timeout=${args.hookTimeoutMs}ms`);
    let pool_id;
    try {
        pool_id = ht(poolSecret);
    } catch (error) {
        onStatus(`[runner:fatal] ${l(error)}`);
        process.exit(1);
    }
    onStatus(`[runner:orchestrator] environment_id=${pool_id}`);
    let apiClient = uin({
        baseUrl: args.apiUrl,
        poolSecret,
        onDebug
    });
    let healthState = {
        orchestratorUuid,
        hostname: hostname_1,
        version: GBe,
        pool_id,
        connected: false,
        last_poll_at: 0,
        last_hint_at: 0,
        last_hook_ok_at: 0,
        last_warm_hook_ok_at: 0,
        last_error: null,
        clock_skew_ms: null,
        queue_counts: null,
        pool_pending_session_count: null,
        pool_active_session_count: null,
        warm_hints_dispatched: 0,
        spawnHooks: {
            ok: 0,
            retryable: 0,
            nonRetryable: 0
        },
        spawnHookDurations: ct(),
        pollErrors: din(),
        scm_connector: args.scmConnector ? ce() : null,
        sessionQueueWaits: ut()
    };
    let P = args.healthPort > 0 ? Et(args.healthPort, healthState, onStatus) : undefined;
    let T = new AbortController;
    let y = args.scmConnector && healthState.scm_connector ? le(args.scmConnector, healthState.scm_connector, {
        apiUrl: args.apiUrl,
        poolSecret,
        onStatus,
        onDebug
    }, T.signal) : undefined;
    let v = false;
    let E = ()=>{
        if (v) {
            onStatus("Forced shutdown");
            process.exit(1);
        }
        v = true;
        onStatus("Received shutdown signal, stopping poll loop...");
        T.abort();
    };
    process.on("SIGTERM", E);
    process.on("SIGINT", E);
    try {
        await kt({
            apiClient,
            hookPath,
            args,
            healthState,
            onStatus,
            onDebug
        }, T.signal);
    } finally{
        y?.stop();
        P?.closeAllConnections?.();
        P?.close();
        process.removeListener("SIGTERM", E);
        process.removeListener("SIGINT", E);
    }
}
async function Tt(args) {
    if (args.poolSecretFile) {
        return (await Ml(readFile(args.poolSecretFile, {
            encoding: "utf-8"
        }), et, `environment-secret read from ${args.poolSecretFile}`)).trim();
    }
    let SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET = process.env.SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET;
    if (SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET) {
        return SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET.trim();
    }
    let SELF_HOSTED_RUNNER_POOL_SECRET = process.env.SELF_HOSTED_RUNNER_POOL_SECRET;
    if (SELF_HOSTED_RUNNER_POOL_SECRET) {
        console.error("[runner:warn] SELF_HOSTED_RUNNER_POOL_SECRET is deprecated; use SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET");
        return SELF_HOSTED_RUNNER_POOL_SECRET.trim();
    }
    throw Error("No environment secret provided. Use --environment-secret-file or set SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET.");
}
