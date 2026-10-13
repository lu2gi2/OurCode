import { UV, x7 } from "/$bunfs/root/chunk-0ycjphb5.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { x, W, l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { _, X, Tq, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { vH, th } from "/$bunfs/root/chunk-52bcnmbr.js";
import { V3 } from "/$bunfs/root/chunk-n4gsaesa.js";
import { OG } from "/$bunfs/root/chunk-wa3pv8cd.js";
import { ME } from "/$bunfs/root/chunk-va6abnm5.js";
import { hPt, yPt } from "/$bunfs/root/chunk-kpf6v0ta.js";
import { UL } from "/$bunfs/root/chunk-0xbdwcqr.js";
import { aFt, nLr, rLr, WNo } from "/$bunfs/root/chunk-8q10swh6.js";
import { OFo } from "/$bunfs/root/chunk-h1az9c71.js";
import { E1, vxe } from "/$bunfs/root/chunk-381737m9.js";
import { o, E, M, u, U, pa } from "/$bunfs/root/chunk-smx21d0k.js";
import { vo } from "/$bunfs/root/chunk-6cee9jwv.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { randomUUID } from "crypto";
import { join } from "path";
function ke(r) {
    return typeof r === "object" && r !== null && "type" in r && (r.type === "token_update" || r.type === "auth_401_result");
}
function ye(r) {
    return typeof r === "object" && r !== null && "type" in r && r.type === "auth_401";
}
const we = 300000;
const re = 240000;
const ge = 300000;
const Te = 30000;
const Ae = 86400000;
function ce() {
    return $e.state("daemon-auth-cooldown");
}
function Se() {
    return $e.state("daemon-auth-status");
}
function BNo(r, n, d, i, f, w = ()=>false) {
    let h = ()=>({
            usesLoginOffFirstParty: d()
        });
    let m;
    let v = false;
    let k = null;
    let y = new Set;
    let A = null;
    let P = null;
    function C() {
        return P ??= import("/$bunfs/root/chunk-mt5pc6ed.js");
    }
    function N(accessToken) {
        let a = {
            type: "token_update",
            accessToken
        };
        for (let g of y){
            try {
                g.send(a);
            } catch  {}
        }
    }
    async function H() {
        let a = await (await C()).getClaudeAIOAuthTokensAsync(f);
        if (a?.accessToken && a.accessToken !== m?.accessToken) {
            m = {
                accessToken: a.accessToken,
                scopes: a.scopes,
                subscriptionType: a.subscriptionType ?? null,
                rateLimitTier: a.rateLimitTier ?? null
            };
            N(m.accessToken);
        }
        B(a?.expiresAt ?? null);
    }
    let q;
    let Y = false;
    function R(s) {
        q = s;
        if (A || r.aborted) {
            return;
        }
        if (k) {
            clearTimeout(k);
            k = null;
        }
        n("auth: no token found, will re-check keychain every 30s");
        A = setInterval(()=>{
            C().then(async (g)=>{
                let T = g.isUsing3PServices() && !d() && !w();
                if (T !== Y) {
                    Y = T;
                    n(T ? "auth: re-check skips the keychain (3P provider, no worker uses the token)" : "auth: re-check reads the keychain again");
                }
                if (T) {
                    return;
                }
                g.clearOAuthTokenCache();
                let e = await g.getClaudeAIOAuthTokensAsync(f);
                let S;
                if (e?.accessToken && e.accessToken !== q && e.expiresAt && e.expiresAt > Date.now()) {
                    S = "auth: token found via keychain re-check";
                } else if (e?.refreshToken && await g.checkAndRefreshOAuthTokenIfNeeded({
                    credentials: f,
                    storageV5: i,
                    ...h()
                })) {
                    S = "auth: token refreshed via keychain re-check retry";
                }
                if (S) {
                    await H();
                    if (m && A) {
                        clearInterval(A);
                        A = null;
                        n(S);
                    }
                }
            }).catch((g)=>n(`auth: keychain re-check error: ${g}`));
        }, Te);
        A.unref();
    }
    function B(s) {
        if (k) {
            clearTimeout(k);
            k = null;
        }
        if (!s || r.aborted) {
            return;
        }
        let a = Math.min(Math.max(s - Date.now() - re, 5000), Ae);
        n(`auth: scheduling proactive refresh in ${Math.round(a / 1000)}s`);
        k = setTimeout(V, a);
        k.unref();
    }
    async function V() {
        if (r.aborted) {
            return;
        }
        try {
            n("auth: proactive refresh starting");
            let s = await C();
            let a = m?.accessToken;
            let g = await s.checkAndRefreshOAuthTokenIfNeeded({
                credentials: f,
                storageV5: i,
                ...h()
            });
            s.clearOAuthTokenCache();
            let T = await s.getClaudeAIOAuthTokensAsync(f);
            let e = T?.expiresAt ?? null;
            let S = e === null || e > Date.now() + we;
            if (T?.accessToken && (g || T.accessToken !== a || S) && (e === null || e > Date.now() + re)) {
                await H();
                n(g ? "auth: proactive refresh succeeded" : "auth: token still valid (cross-process refresh or not yet due)");
                return;
            }
            if (T?.accessToken && e !== null && e > Date.now()) {
                n("auth: proactive refresh failed, retrying in ~60s (token still valid)");
                B(Date.now() + 60000 + re);
                return;
            }
            n("auth: proactive refresh failed, signalling re-auth required");
            let b = T?.accessToken ?? a;
            m = undefined;
            await Z();
            R(b);
        } catch (error) {
            n(`auth: proactive refresh error: ${error}`);
            B(Date.now() + 60000 + re);
        }
    }
    async function J(failedToken) {
        if (v) {
            n("auth: 401 ignored (3P provider active, no OAuth)");
            return false;
        }
        n("auth: handling 401");
        let a = await C();
        if (await a.handleOAuth401Error(failedToken, f, i, h())) {
            a.clearOAuthTokenCache();
            await H();
            n("auth: 401 recovery succeeded");
            return true;
        }
        n("auth: 401 recovery failed, signalling re-auth required");
        m = undefined;
        await Z();
        a.clearOAuthTokenCache();
        let T = await a.getClaudeAIOAuthTokensAsync(f);
        if (T?.accessToken !== undefined && T.accessToken !== failedToken) {
            await H();
            return true;
        }
        R(failedToken);
        return false;
    }
    let D = null;
    function Z() {
        if (D) {
            return D;
        }
        D = oe().finally(()=>{
            D = null;
        });
        return D;
    }
    async function oe() {
        let s = await C();
        if (s.getAnthropicApiKey()) {
            n("auth: browser login skipped (API key auth available)");
            return;
        }
        if (s.isUsing3PServices() && !d()) {
            n("auth: browser login skipped (3P provider, no OAuth-consuming worker)");
            return;
        }
        let a = ve();
        let g = join(a, "daemon-auth-cooldown");
        let T = join(a, "daemon-auth-status.json");
        try {
            let e;
            if (j() && i !== undefined) {
                let b = await i.read([
                    ce()
                ]);
                if (!b.ok) {
                    throw new x(`v5 cooldown read failed: ${b.error.code}${"telemetryCode" in b.error && b.error.telemetryCode ? ` (${b.error.telemetryCode})` : ""}`, "daemon-auth v5 cooldown read failed");
                }
                let I = b.value.items[0];
                e = I.found ? Buffer.from(I.value).toString("utf8") : null;
            } else {
                e = await mn().read(g);
            }
            let S = e === null ? NaN : parseInt(e, 10);
            if (!Number.isNaN(S) && Date.now() - S < ge) {
                n("auth: browser login skipped (cooldown)");
                return;
            }
        } catch (error) {
            if (!z(error)) {
                n(`auth: cooldown read error: ${error}`);
            }
        }
        try {
            await mn().mkdir(a);
            if (j() && i !== undefined) {
                let e = await i.write(ce(), String(Date.now()), {
                    publishDiscipline: "inPlace"
                });
                if (!e.ok) {
                    throw new x(`v5 cooldown write failed: ${e.error.code}${"telemetryCode" in e.error && e.error.telemetryCode ? ` (${e.error.telemetryCode})` : ""}`, "daemon-auth v5 cooldown write failed");
                }
            } else {
                await mn().write(g, String(Date.now()));
            }
        } catch (error) {
            n(`auth: cooldown write error: ${error}`);
        }
        try {
            let { execFileNoThrow } = await import("/$bunfs/root/chunk-evbmytfp.js");
            execFileNoThrow("notify-send", [
                "Claude",
                "Your Claude assistant needs re-authentication"
            ]);
        } catch  {}
        try {
            if (j() && i !== undefined) {
                let e = await i.write(Se(), _({
                    status: "auth_required",
                    since: Date.now()
                }), {
                    publishDiscipline: "inPlace"
                });
                if (!e.ok) {
                    throw new x(`v5 status write failed: ${e.error.code}${"telemetryCode" in e.error && e.error.telemetryCode ? ` (${e.error.telemetryCode})` : ""}`, "daemon-auth v5 status write failed");
                }
            } else {
                await mn().write(T, _({
                    status: "auth_required",
                    since: Date.now()
                }));
            }
        } catch (error) {
            n(`auth: status write error: ${error}`);
        }
        n("auth: headless daemon cannot complete OAuth — run `claude auth login` to refresh");
    }
    function F(s) {
        if (!ye(s)) {
            return;
        }
        J(s.failedToken).then((refreshed)=>{
            for (let g of y){
                try {
                    let T = {
                        type: "auth_401_result",
                        refreshed,
                        requestId: s.requestId
                    };
                    g.send(T);
                } catch  {}
            }
        }).catch((a)=>{
            n(`auth: 401 handler error: ${a}`);
            for (let g of y){
                try {
                    let T = {
                        type: "auth_401_result",
                        refreshed: false,
                        requestId: s.requestId
                    };
                    g.send(T);
                } catch  {}
            }
        });
    }
    function attachWorker(s) {
        y.add(s);
        s.on("message", F);
        if (m) {
            try {
                let a = {
                    type: "token_update",
                    accessToken: m.accessToken
                };
                s.send(a);
            } catch  {}
        }
    }
    function detachWorker(s) {
        s.removeListener("message", F);
        y.delete(s);
    }
    let ready = (async ()=>{
        if (r.aborted) {
            return;
        }
        try {
            let s = await C();
            let a = await s.getClaudeAIOAuthTokensAsync(f);
            if (!a?.accessToken && s.isUsing3PServices()) {
                v = true;
                n("auth: 3P provider active, skipping OAuth refresh loop");
                return;
            }
            if (a?.accessToken) {
                m = {
                    accessToken: a.accessToken,
                    scopes: a.scopes,
                    subscriptionType: a.subscriptionType ?? null,
                    rateLimitTier: a.rateLimitTier ?? null
                };
                B(a.expiresAt ?? null);
            }
            await s.checkAndRefreshOAuthTokenIfNeeded({
                credentials: f,
                storageV5: i,
                ...h()
            });
            await H();
        } catch (error) {
            n(`auth: init error: ${error}`);
        }
    })();
    ready.then(()=>{
        if (r.aborted || m || v) {
            return;
        }
        R();
    });
    r.addEventListener("abort", ()=>{
        if (k) {
            clearTimeout(k);
            k = null;
        }
        if (A) {
            clearInterval(A);
            A = null;
        }
    }, {
        once: true
    });
    return {
        ready,
        getAccessToken () {
            return m?.accessToken;
        },
        getAuthSnapshot () {
            return m;
        },
        attachWorker,
        detachWorker,
        dispose,
        [Symbol.dispose]: dispose
    };
    function dispose() {
        if (k) {
            clearTimeout(k);
            k = null;
        }
        if (A) {
            clearInterval(A);
            A = null;
        }
        for (let s of y){
            s.removeListener("message", F);
        }
        y.clear();
    }
}
function de(initialAccessToken, n, d) {
    if (typeof process.send === "function") {
        let m = function(v) {
            let k = h.get(v);
            if (k) {
                h.delete(v);
                k.resolve(false);
            }
        };
        let w = initialAccessToken;
        process.on("message", (v)=>{
            if (!ke(v)) {
                return;
            }
            if (v.type === "token_update") {
                w = v.accessToken;
            }
        });
        let h = new Map;
        process.on("message", (v)=>{
            if (typeof v === "object" && v !== null && "type" in v && v.type === "auth_401_result") {
                let k = v;
                let y = h.get(k.requestId);
                if (y) {
                    clearTimeout(y.timer);
                    h.delete(k.requestId);
                    y.resolve(k.refreshed);
                }
            }
        });
        process.channel?.unref();
        return {
            getAccessToken () {
                return w;
            },
            reportAuth401 (failedToken) {
                let requestId = randomUUID();
                let y = {
                    type: "auth_401",
                    failedToken,
                    requestId
                };
                return new Promise((resolve)=>{
                    let timer = setTimeout(m, 30000, requestId);
                    timer.unref();
                    h.set(requestId, {
                        resolve,
                        timer
                    });
                    try {
                        process.send(y);
                    } catch  {
                        clearTimeout(timer);
                        h.delete(requestId);
                        resolve(false);
                    }
                });
            }
        };
    }
    let i = null;
    async function f() {
        return i ??= await import("/$bunfs/root/chunk-mt5pc6ed.js");
    }
    f();
    return {
        getAccessToken () {
            return i?.getClaudeAIOAuthTokens()?.accessToken;
        },
        async reportAuth401 (w) {
            return (await f()).handleOAuth401Error(w, n, d, {
                usesLoginOffFirstParty: true
            });
        }
    };
}
function K(r) {
    return typeof r === "object" && r !== null && "type" in r && r.type === "shutdown";
}
function le(r) {
    if (!K(r) || typeof r !== "object" || r === null || !("cause" in r)) {
        return;
    }
    if (r.cause === "upgrade" || r.cause === "reload" || r.cause === "yield") {
        return r.cause;
    }
}
const ie = p(()=>u({
        dir: o(),
        name: o().optional(),
        spawnMode: U([
            "same-dir",
            "worktree"
        ]).default("same-dir"),
        capacity: E().int().positive().default(32),
        permissionMode: pa(th, U(vH)).optional(),
        sandbox: M().default(false),
        sessionTimeoutSeconds: E().int().positive().optional(),
        createSessionOnStart: M().default(false)
    }).strict());
const _e = 60000;
const Ce = 500;
const fe = async (r, n, log, i, f, w)=>{
    let h = ie().parse(r);
    let { initializeErrorLogSink } = await import("/$bunfs/root/chunk-4k2wv838.js");
    let { initializeAnalyticsSink } = await import("/$bunfs/root/chunk-hsyw2dw7.js");
    initializeErrorLogSink();
    initializeAnalyticsSink();
    let getAccessToken = ()=>UL() ?? i.getAccessToken();
    if (!getAccessToken()) {
        log(hPt);
        process.exit(1);
    }
    let [{ initialize1PEventLogging }, { initializeGrowthBook, getFeatureValue_CACHED_MAY_BE_STALE, getUserAttributes }, { flushAnalyticsSinks }, { populateOAuthAccountInfoIfNeeded }] = await Promise.all([
        import("/$bunfs/root/chunk-rc2cqp81.js"),
        import("/$bunfs/root/chunk-jv24m4k2.js"),
        import("/$bunfs/root/chunk-88x2y7v3.js"),
        import("/$bunfs/root/chunk-jg0xgd7e.js")
    ]);
    initialize1PEventLogging(f);
    await populateOAuthAccountInfoIfNeeded(w, f).catch((e)=>{
        t(`[daemon:remoteControl] oauthAccount backfill failed (${e instanceof Error ? e.name : typeof e})`);
    });
    if (!getUserAttributes().organizationUUID) {
        t("[daemon:remoteControl] no org identity; GrowthBook not initialized, gates serve cached/default values");
    } else {
        initializeGrowthBook().catch((e)=>{
            t(`[daemon:remoteControl] GrowthBook init failed (${e instanceof Error ? e.name : typeof e}); feature gates keep serving the disk cache`, {
                level: "error"
            });
        });
    }
    if (!V3()) {
        let e = await tLr();
        if (e !== undefined) {
            log(e.reason);
            await flushAnalyticsSinks();
            process.exit(e.retry ? 1 : E1);
        }
    }
    let { runBridgeHeadless, BridgeHeadlessPermanentError } = await import("/$bunfs/root/chunk-kq8k0j5d.js");
    let R = null;
    let B = false;
    let V = (e)=>{
        if (typeof process.send !== "function") {
            return;
        }
        try {
            process.send(e);
        } catch  {}
    };
    let J = (busy)=>V({
            type: "rc_busy",
            busy
        });
    let D = ()=>{
        if (R !== null) {
            clearInterval(R);
            R = null;
        }
    };
    let onBusyChange = (e)=>{
        let S = e > 0;
        if (S !== B) {
            B = S;
            J(S);
        }
        if (S) {
            if (R === null) {
                R = setInterval((b)=>b(true), _e, J);
                R.unref?.();
            }
        } else {
            D();
        }
    };
    let persistActiveSessionsOnShutdown = getFeatureValue_CACHED_MAY_BE_STALE("tengu_daemon_upgrade_defer_busy", true);
    let F = null;
    let ee = ()=>{};
    let ne = new Promise((resolve)=>{
        ee = resolve;
    });
    let G = (e)=>{
        if (K(e)) {
            F = le(e) ?? null;
            ee();
        }
    };
    process.on("message", G);
    let awaitShutdownCause = async ()=>{
        await Promise.race([
            ne,
            Q(Ce)
        ]);
        return F;
    };
    let s;
    let createToolHostHandler;
    let g;
    try {
        let e = await import("/$bunfs/root/chunk-4ta3069z.js");
        let checks = e.liveToolHostChecks(h.dir, w);
        let switches = e.liveToolHostSwitches({
            dir: h.dir,
            checks,
            isOfferingFolder: ()=>s?.getToolHostAdvert().kind === "advertise",
            hasAccessToken: ()=>Boolean(getAccessToken())
        });
        let I;
        let De = false;
        s = await e.watchToolHostAdvert({
            dir: h.dir,
            log,
            checks,
            refuse: e.helperRefusal,
            onVerdict: (se)=>{
                if (I !== undefined && e.isSwitchedOffRemotely(se)) {
                    I.sweep("gate_off").catch((L)=>c(W(L)));
                }
            }
        });
        createToolHostHandler = (se)=>{
            try {
                I = e.buildToolHostWorkHandler({
                    folder: h.dir,
                    switches,
                    ...se,
                    onLiveCountChange: (count)=>V({
                            type: "rc_serving_tools",
                            count
                        })
                }, {
                    unattendedGrant: undefined,
                    withoutShellSecrets: false
                });
            } catch (error) {
                c(W(error));
            }
            return I;
        };
        let ae;
        g = async ()=>{
            if (I !== undefined) {
                ae ??= e.sweepToolHostForShutdown(I);
            }
            await ae;
        };
        n.addEventListener("abort", ()=>void g?.(), {
            once: true
        });
    } catch (error) {
        c(W(error));
    }
    let T = false;
    try {
        await runBridgeHeadless({
            dir: h.dir,
            name: h.name,
            spawnMode: h.spawnMode,
            capacity: h.capacity,
            permissionMode: h.permissionMode,
            sandbox: h.sandbox,
            createSessionOnStart: h.createSessionOnStart,
            getAccessToken,
            onAuth401: i.reportAuth401,
            log,
            storageV5: f,
            credentials: w,
            onBusyChange,
            persistActiveSessionsOnShutdown,
            awaitShutdownCause,
            getToolHostAdvert: s?.getToolHostAdvert,
            createToolHostHandler
        }, n);
    } catch (error) {
        if (!(error instanceof BridgeHeadlessPermanentError)) {
            throw error;
        }
        log(error.message);
        T = true;
    } finally{
        await g?.();
        D();
        s?.stop();
        process.off("message", G);
        await flushAnalyticsSinks();
    }
    if (T) {
        process.exit(E1);
    }
};
async function tLr() {
    let [{ getBridgeBlockedCode }, { checkBridgeMinVersion }, { getUserAttributes }] = await Promise.all([
        import("/$bunfs/root/chunk-fqb2csg5.js"),
        import("/$bunfs/root/chunk-q1thxs8m.js"),
        import("/$bunfs/root/chunk-jv24m4k2.js")
    ]);
    if (!getUserAttributes().organizationUUID) {
        return {
            reason: pe("token_scope_limited"),
            retry: false
        };
    }
    let i = await getBridgeBlockedCode();
    if (i !== null) {
        return {
            reason: pe(i),
            retry: i === "flags_unreachable" || i === "not_signed_in"
        };
    }
    let reason = checkBridgeMinVersion();
    if (reason === null) {
        return undefined;
    }
    return {
        reason,
        retry: false
    };
}
function pe(r) {
    return `Remote Control cannot start (${r}). Run \`claude remote-control\` in a terminal to see why.`;
}
async function sFt(r, n, d) {
    return Zr("daemon_rc_add", async ()=>{
        let i = "added";
        await aFt((f)=>{
            let w = nLr(f.remoteControl);
            let h = w.findIndex((m)=>m.dir === r.dir);
            if (h >= 0) {
                let m = vo(r, (v)=>v !== undefined);
                w[h] = {
                    ...w[h],
                    ...m
                };
                i = "updated";
            } else {
                w.push(r);
                i = "added";
            }
            f.remoteControl = w;
        }, n, d);
        return i;
    });
}
async function iFt(r, n, d) {
    return Zr("daemon_rc_remove", async ()=>{
        await aFt((i)=>{
            let f = nLr(i.remoteControl);
            let w = f.filter((h)=>h.dir !== r);
            if (w.length === f.length) {
                return false;
            }
            if (w.length === 0) {
                delete i.remoteControl;
            } else {
                i.remoteControl = w;
            }
        }, n, d);
    });
}
const he = p(()=>u({
        intervalSeconds: E().positive().default(30)
    }).strict());
const _ie = {
    heartbeat: {
        schema: he,
        run: Re,
        needsOAuth: false
    },
    scheduled: {
        schema: rLr,
        run: WNo,
        needsOAuth: true
    },
    remoteControl: {
        schema: ie,
        run: fe,
        needsOAuth: true
    }
};
function rJe(r) {
    return r === "heartbeat" || V3() || r === "remoteControl" && OFo();
}
async function Re(r, n, d, i) {
    let { intervalSeconds } = he().parse(r);
    d(`heartbeat worker started (interval=${intervalSeconds}s)`);
    while(!n.aborted){
        await Q(intervalSeconds * 1000, n);
        if (!n.aborted) {
            d("heartbeat");
        }
    }
}
function Ee(process, n) {
    let d = ()=>n.abort();
    process.on("SIGTERM", d);
    process.on("SIGINT", d);
    process.on("message", (i)=>{
        if (K(i)) {
            n.abort();
        }
    });
}
async function EBs(r, n) {
    if (!r || !(r in _ie)) {
        process.stderr.write(`unknown worker kind: ${r}
`);
        process.exit(2);
    }
    if (!rJe(r)) {
        process.stderr.write(`worker kind '${r}' is not available.
`);
        process.exit(E1);
    }
    let d = _ie[r];
    let i = [];
    for await (let y of process.stdin){
        i.push(y);
    }
    let f;
    try {
        f = X(Buffer.concat(i).toString("utf8"));
    } catch (error) {
        process.stderr.write(`invalid config JSON on stdin: ${l(error)}
`);
        process.exit(2);
    }
    let w = d.schema().safeParse(f.config);
    if (!w.success) {
        process.stderr.write(`config validation failed: ${w.error.message}
`);
        process.exit(2);
    }
    let h = new AbortController;
    Ee(process, h);
    xe(h);
    let m = OG(n);
    let v = ME(m);
    let k = de(f.initialAccessToken, v, m);
    if (j() && m !== undefined) {
        Tq({
            storageV5: m
        });
        UV(m);
        let [{ composePolicyLimitsClient, primePolicyLimitsCache }, { primeFastPathCredentials }, { setGrowthBookCredentials, setGrowthBookStorageBackend }] = await Promise.all([
            import("/$bunfs/root/chunk-z4ckrxvt.js"),
            import("/$bunfs/root/chunk-dmt3qh13.js"),
            import("/$bunfs/root/chunk-jv24m4k2.js")
        ]);
        composePolicyLimitsClient({
            storageV5: m,
            credentials: v
        });
        setGrowthBookCredentials(v);
        setGrowthBookStorageBackend(m);
        await primeFastPathCredentials(v);
        await primePolicyLimitsCache(m);
        await x7(m);
    }
    try {
        await d.run(w.data, h.signal, (y)=>process.stdout.write(y + `
`), k, m, v);
    } catch (error) {
        if (Ie(error) === 429) {
            process.stdout.write(`rate limited (429): ${l(error)}
`);
            process.exit(vxe);
        }
        if (Pe(error)) {
            process.stdout.write(`folder already served: ${l(error)}
`);
            process.exit(vxe);
        }
        throw error;
    }
}
function Pe(error) {
    let n = error;
    for(let d = 0; n != null && d < 8; d++){
        if (n.errorType === yPt) {
            return true;
        }
        n = n.cause;
    }
    return false;
}
function Ie(error) {
    let n = error;
    for(let d = 0; n != null && d < 8; d++){
        let i = n.status;
        if (typeof i === "number") {
            return i;
        }
        let f = n.response?.status;
        if (typeof f === "number") {
            return f;
        }
        n = n.cause;
    }
}
const intervalMs = 30000;
function isAlive(r) {
    try {
        process.kill(r, 0);
        return true;
    } catch  {
        return false;
    }
}
function xe(r, n) {
    let d = {
        ppid: ()=>process.ppid,
        isAlive,
        log: (h)=>process.stdout.write(h + `
`),
        onGone: ()=>process.exit(0),
        intervalMs,
        exitGraceMs: 2000,
        ...n
    };
    let i = d.ppid();
    if (i <= 1) {
        return;
    }
    let f = false;
    let w = setInterval(()=>{
        if (f) {
            return;
        }
        if (!(!d.isAlive(i) || O() !== "windows" && d.ppid() !== i)) {
            return;
        }
        f = true;
        clearInterval(w);
        d.log("parent supervisor gone — exiting");
        r.abort();
        setTimeout(d.onGone, d.exitGraceMs).unref();
    }, d.intervalMs);
    w.unref();
    return w;
}
export { BNo, tLr, sFt, iFt, _ie, rJe, EBs };
