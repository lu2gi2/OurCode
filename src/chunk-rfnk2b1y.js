import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B, K, vd, Bxr, lsn, Ee, lPo, eo, X8e } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { $g, VR, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { St, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { qZ } from "/$bunfs/root/chunk-6kc68p18.js";
import { gOs, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { Tt, c } from "/$bunfs/root/chunk-etbngzss.js";
import { A0 } from "/$bunfs/root/chunk-x47nahfr.js";
import { io } from "/$bunfs/root/chunk-03gkt7r5.js";
import { I$e, nho, Y7t, TBn, qlt, dyo, g8, Y$e, DZt, LZt, k, Es as trustProbe, UV, ce, gct, cO, hct, M_o } from "/$bunfs/root/chunk-0ycjphb5.js";
import { m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Rnn } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { wGn } from "/$bunfs/root/chunk-w1n7t02f.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { ji } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { KRs, Dr, Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { mpe, X8, hTo, jz, Wz, MHt, ES, gpe } from "/$bunfs/root/chunk-55x53sfe.js";
import { bwo } from "/$bunfs/root/chunk-ph7a449e.js";
import { gCs, vz, zSo } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { Zre } from "/$bunfs/root/chunk-gr4a0fky.js";
import { GFe } from "/$bunfs/root/chunk-d2sd20y7.js";
import { C5e, grn } from "/$bunfs/root/chunk-2321ytcf.js";
import { wAt, Lls, Kye } from "/$bunfs/root/chunk-53bavyda.js";
import { oXo, ga, vZo, bQr, Ps } from "/$bunfs/root/chunk-kasbfbhj.js";
import { KC } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { zS, xl, sdo } from "/$bunfs/root/chunk-4r6b8efh.js";
import { sfo, ifo } from "/$bunfs/root/chunk-ssn8w7cj.js";
import { Uhs } from "/$bunfs/root/chunk-4jkyvhbj.js";
import { Wgs } from "/$bunfs/root/chunk-e0hrcpx7.js";
import { Jh } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { AE, Wce } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { cS } from "/$bunfs/root/chunk-38fr02qr.js";
import { wr } from "/$bunfs/root/chunk-2atph4yw.js";
import { sY, roe, XA } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { Gis } from "/$bunfs/root/chunk-a5rabwn2.js";
import { JC } from "/$bunfs/root/chunk-az5m8ek6.js";
import { Tfo, Cfo, xfo, aQt, Hfo } from "/$bunfs/root/chunk-k8dhpbv8.js";
import { bxn } from "/$bunfs/root/chunk-n76d0zhq.js";
import { NMo } from "/$bunfs/root/chunk-8ycfww2t.js";
import { YY } from "/$bunfs/root/chunk-mj96b6xe.js";
import { Fmo } from "/$bunfs/root/chunk-9hx1f496.js";
import { OG } from "/$bunfs/root/chunk-wa3pv8cd.js";
import { Z_r } from "/$bunfs/root/chunk-fdhexp07.js";
import { ijt, Ayt, Wjr, bXn, GQe } from "/$bunfs/root/chunk-ggpgtemh.js";
import { Xxt } from "/$bunfs/root/chunk-z77wjsb6.js";
import { ME } from "/$bunfs/root/chunk-va6abnm5.js";
import { zje } from "/$bunfs/root/chunk-ktzs4tqj.js";
import { pQe } from "/$bunfs/root/chunk-wgskegkk.js";
import { cls, dls } from "/$bunfs/root/chunk-3yn0xtkv.js";
import { fPe } from "/$bunfs/root/chunk-t6f6b9d8.js";
import { ru } from "/$bunfs/root/chunk-m6z3m7rx.js";
import { hOs, O } from "/$bunfs/root/chunk-79wfew46.js";
function F(e, r) {
    return ga("telemetry.log", {
        origin: r?.hookOrigin,
        signal: r?.signal
    })(e);
}
const U = {
    send: (e, signal)=>F(e, {
            signal
        })
};
Kye.setRoad(U);
function P() {
    {
        if (!ru()) {
            return;
        }
        let e = vz.CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR;
        vz.unset("CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR");
        if (e === undefined) {
            return;
        }
        let r = (d)=>t(`[agent-proxy] ${d}`, {
                level: "warn"
            });
        fPe(r);
        if (!/^[1-9][0-9]{0,5}$/.test(e) || Number(e) < 3) {
            r("CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR is not a descriptor number of 3 or more; no relay token was read");
            m("agent_proxy_init", "agent_proxy_init_token_fd_malformed");
            return;
        }
        if (typeof process.send === "function") {
            r("this process has an IPC channel, which no launcher of a tool daemon opens; no relay token was read");
            m("agent_proxy_init", "agent_proxy_init_token_fd_ipc");
            return;
        }
        let s = GFe(Number(e), "agent proxy relay's token");
        if (s === null) {
            r("the relay's token was announced but not read (the line above says why); if its descriptor was empty, something else may have read it first");
            m("agent_proxy_init", "agent_proxy_init_token_fd_unread");
            return;
        }
        return s;
    }
}
function b() {
    let providerCache = Dr().providerCache;
    if (providerCache.preconnectFired) {
        return;
    }
    providerCache.preconnectFired = true;
    if (Ie() !== "firstParty" || g8() === "gateway" || Y$e()) {
        return;
    }
    if (Tt()) {
        return;
    }
    if (a.HTTPS_PROXY || a.https_proxy || a.HTTP_PROXY || a.http_proxy || a.ANTHROPIC_UNIX_SOCKET || a.CLAUDE_CODE_CLIENT_CERT || a.CLAUDE_CODE_CLIENT_KEY) {
        return;
    }
    let r = a.ANTHROPIC_BASE_URL || dn().BASE_API_URL;
    Zre(`${r.replace(/\/+$/, "")}/api/hello`, {
        method: "HEAD",
        signal: AbortSignal.timeout(10000)
    }).catch(()=>{});
}
function H(metricsExporterKinds) {
    return metricsExporterKinds.length > 0 && metricsExporterKinds.every((r)=>r === "prometheus");
}
async function A(e, r) {
    let { initializeTelemetry } = await import("/$bunfs/root/chunk-kmavnvvj.js");
    let { meter, metricsExporterKinds } = await initializeTelemetry(e, r);
    if (meter) {
        cls(meter, (g, E)=>{
            let n = meter?.createCounter(g, E);
            return {
                add (u, y = {}) {
                    let _ = {
                        ...wAt(),
                        ...y
                    };
                    n?.add(u, _);
                }
            };
        }, {
            omitUnits: H(metricsExporterKinds)
        });
        await Lls();
        dls()?.add(1, {
            start_type: lPo()
        });
    }
}
class R {
    promise = undefined;
    telemetryInitialized = false;
    telemetryInit = undefined;
}
const N = new q(()=>new R);
function C() {
    return N.of(B().host);
}
async function z(e = {}) {
    let r = P();
    let toolContainerToken = NMo() ?? r;
    let d = Date.now();
    J("info", "init_started");
    io("init_function_start");
    let e_storageV5EnvPin = e.storageV5EnvPin;
    if (e_storageV5EnvPin?.backend !== undefined && !qZ(e_storageV5EnvPin.configHome)) {
        t(`CLAUDE_CONFIG_DIR no longer names ${e_storageV5EnvPin.configHome}, where the v5 storage backend was built at start-up; init() loads its config without it`, {
            level: "warn"
        });
        e_storageV5EnvPin = {
            ...e_storageV5EnvPin,
            backend: undefined
        };
    }
    e_storageV5EnvPin ??= Fmo();
    try {
        let p = Date.now();
        if (j() && e_storageV5EnvPin?.backend !== undefined) {
            await Z_r(e_storageV5EnvPin.backend);
            await Promise.all([
                gct(e_storageV5EnvPin.backend),
                sfo(e_storageV5EnvPin.backend, ji())
            ]);
        } else {
            await gct();
        }
        J("info", "init_configs_enabled", {
            duration_ms: Date.now() - p
        });
        io("init_configs_enabled");
        if (j() && e_storageV5EnvPin?.backend !== undefined) {
            bwo(ce().cachedGrowthBookFeatures?.tengu_windows_credman === true);
        }
        if (j() && e_storageV5EnvPin?.backend !== undefined) {
            await Rnn(e_storageV5EnvPin.backend);
            io("init_remote_settings_primed");
        }
        let g = ME(e_storageV5EnvPin?.backend);
        if (j() && g !== undefined) {
            await Xxt(g);
            io("init_fd_credentials_primed");
            await dyo(g);
            io("init_stored_login_primed");
        }
        X8e(I$e);
        let E = Date.now();
        roe();
        await zSo();
        pQe();
        await Promise.all([
            mpe(),
            X8(),
            hOs(),
            gOs()
        ]);
        await bxn();
        if (A0()) {
            zje();
        }
        await Y7t(e_storageV5EnvPin?.backend !== undefined && qZ(e_storageV5EnvPin.configHome) ? g : undefined);
        if (eo()) {
            sY();
        }
        J("info", "init_safe_env_vars_applied", {
            duration_ms: Date.now() - E
        });
        io("init_safe_env_vars_applied");
        let storageV5 = OG(e_storageV5EnvPin);
        let credentials = ME(storageV5);
        if (j() && storageV5 !== undefined) {
            await Z_r(storageV5);
        }
        await ifo(storageV5, ji());
        if (j() && storageV5 !== undefined) {
            await gCs(storageV5);
        }
        xfo({
            storageV5,
            credentials
        });
        DZt(credentials);
        LZt(storageV5);
        if (j() && credentials !== undefined) {
            await Xxt(credentials);
            if (qlt()) {
                await TBn(credentials);
            }
        }
        await Cfo(storageV5);
        UV(storageV5);
        Gis(storageV5);
        bQr({
            storageV5,
            credentials
        });
        io("init_after_graceful_shutdown");
        Promise.all([
            import("/$bunfs/root/chunk-rc2cqp81.js"),
            import("/$bunfs/root/chunk-jv24m4k2.js")
        ]).then(([o, f])=>{
            o.initialize1PEventLogging(storageV5);
            f.onGrowthBookRefresh(()=>{
                o.reinitialize1PEventLoggingIfConfigChanged();
            });
        });
        io("init_after_1p_event_logging");
        KRs((o)=>k(o, false));
        let y = e.preparesSession !== false || k("tengu_quizzical_giraffe", false) !== true;
        nho(credentials, storageV5, y).catch(c);
        io("init_after_oauth_populate");
        cS(storageV5);
        import("/$bunfs/root/chunk-k9ybpevv.js").then((o)=>o.primeUnattendedServingConsent()).catch(()=>{});
        grn({
            trustProbe
        });
        C5e();
        if (bXn()) {
            Ayt();
        }
        if (Jh()) {
            aQt();
        }
        io("init_after_remote_settings_check");
        M_o(storageV5);
        hct(storageV5);
        if (j() && storageV5 !== undefined) {
            cO(storageV5);
        }
        let T = Date.now();
        t("[init] configureGlobalMTLS starting");
        hTo();
        J("info", "init_mtls_configured", {
            duration_ms: Date.now() - T
        });
        t("[init] configureGlobalMTLS complete");
        let _ = jz();
        if (_ && !Wz(_.value)) {
            let o = MHt(_.source, _.value);
            await YY({
                sessionId: K(),
                message: o,
                reason: "proxy_invalid"
            });
            throw new $g(o);
        }
        let D = Date.now();
        t("[init] configureGlobalAgents starting");
        ES();
        J("info", "init_proxy_configured", {
            duration_ms: Date.now() - D
        });
        t("[init] configureGlobalAgents complete");
        io("init_network_configured");
        Tfo(ijt);
        if (e.prefetchManagedConfig === true && y && ijt()) {
            try {
                Wjr(credentials);
                Hfo();
            } catch  {
                c(Error("a managed-config prefetch threw in init(); start-up went on without it"));
            }
        }
        b();
        e.startupGrowthBookKick?.();
        e.startClientDataUrlFetch?.();
        if (Ne(process.env.CLAUDE_CODE_REMOTE)) {
            let o = performance.now();
            try {
                let { initAgentProxy, getAgentProxyEnv, getGhStandinDir } = await import("/$bunfs/root/chunk-qzvtcthg.js");
                let { registerAgentProxyEnvFn, registerGhStandinDirFn } = await import("/$bunfs/root/chunk-87zyeq6x.js");
                registerAgentProxyEnvFn(getAgentProxyEnv);
                registerGhStandinDirFn(getGhStandinDir);
                await initAgentProxy({
                    toolContainerToken
                });
            } catch (error) {
                t(`[init] agent proxy init failed: ${error instanceof Error ? error.message : String(error)}; continuing without proxy`, {
                    level: "warn"
                });
            }
            wr("agent_proxy_init_ms", performance.now() - o, o);
        }
        wGn();
        if (O() === "windows" && !xl()) {
            if (!zS()) {
                let f = `Claude Code on Windows requires a shell tool. Git Bash was not found and the PowerShell tool is disabled (CLAUDE_CODE_USE_POWERSHELL_TOOL=0).
  - Install Git for Windows: https://git-scm.com/downloads/win, or
  - Remove CLAUDE_CODE_USE_POWERSHELL_TOOL from your environment or settings.`;
                console.error(f);
                await YY({
                    sessionId: K(),
                    message: f,
                    reason: "shell_tool_missing"
                });
                process.exit(1);
            }
            if (await KC() === null) {
                console.error(sdo);
                await YY({
                    sessionId: K(),
                    message: sdo,
                    reason: "shell_tool_missing"
                });
                process.exit(1);
            }
        }
        St(oXo);
        St(async ()=>{
            let { cleanupSessionTeams } = await import("/$bunfs/root/chunk-e60n89k4.js");
            await cleanupSessionTeams(storageV5);
        });
        if (AE()) {
            let o = Date.now();
            try {
                let f = await Wce();
                J("info", f === null ? "init_scratchpad_unavailable" : "init_scratchpad_created", {
                    duration_ms: Date.now() - o
                });
            } catch (error) {
                t(`init: ensureScratchpadDir failed: ${error}`, {
                    level: "error"
                });
            }
        }
        vd(()=>{
            if (AE()) {
                Wce().catch((o)=>t(`onSessionSwitch: ensureScratchpadDir failed: ${o}`, {
                        level: "error"
                    }));
            }
        });
        Uhs();
        Wgs();
        vZo();
        J("info", "init_completed", {
            duration_ms: Date.now() - d
        });
        io("init_function_end");
        return storageV5;
    } catch (error) {
        if (error instanceof $g) {
            process.stderr.write(`${error.message}
`);
            Ps(1);
            return;
        }
        if (error instanceof VR) {
            if (!Ee() && e.showInvalidConfigDialog) {
                await e.showInvalidConfigDialog({
                    error
                });
                return;
            }
            process.stderr.write(`Configuration error in ${error.filePath}: ${error.message}
`);
            Ps(1);
            return;
        } else {
            throw error;
        }
    }
}
function eOr(e) {
    return C().promise ??= z(e);
}
function YPe(e) {
    let r = C();
    if (bXn()) {
        if (Ee() && JC()) {
            h(r, e).catch((s)=>{
                try {
                    t(`[3P telemetry] Eager telemetry init failed (beta tracing): ${l(s)}`, {
                        level: "error"
                    });
                } catch  {}
            });
        }
        t("[3P telemetry] Waiting for remote managed settings fetch before telemetry init");
        GQe().then(async ()=>{
            t("[3P telemetry] Remote managed settings fetch settled, initializing telemetry");
            XA();
            let { captureAdmin3PSteeringSnapshot } = await import("/$bunfs/root/chunk-0g7b76qq.js");
            captureAdmin3PSteeringSnapshot();
            let [d, i] = await Promise.all([
                mpe(),
                X8()
            ]);
            if (d || i.changed) {
                gpe();
                ES();
            }
            await h(r, e);
        }).catch((s)=>{
            if (lsn() && !r.telemetryInitialized) {
                Bxr(q0t() || Win() ? "init_failed" : "not_configured");
            }
            try {
                t(`[3P telemetry] Telemetry init failed (remote settings path): ${l(s)}`, {
                    level: "error"
                });
            } catch  {}
        });
    } else {
        h(r, e).catch((s)=>{
            try {
                t(`[3P telemetry] Telemetry init failed: ${l(s)}`, {
                    level: "error"
                });
            } catch  {}
        });
    }
}
async function h(e, r, s) {
    if (e.telemetryInitialized) {
        return e.telemetryInit;
    }
    e.telemetryInitialized = true;
    e.telemetryInit = (async ()=>{
        let d = "not_configured";
        try {
            await A(r, s);
        } catch (error) {
            e.telemetryInitialized = false;
            e.telemetryInit = undefined;
            if (q0t()) {
                d = "init_failed";
            }
            throw error;
        } finally{
            Bxr(d);
        }
    })();
    return e.telemetryInit;
}
function tOr() {
    return h(C(), undefined);
}
function w(OTEL_LOGS_EXPORTER) {
    return (OTEL_LOGS_EXPORTER || "").trim().split(",").filter(Boolean).map((r)=>r.trim()).some((r)=>r !== "none");
}
function q0t() {
    return Ne(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) && w(a.OTEL_LOGS_EXPORTER);
}
function Win() {
    try {
        let e = fe("policySettings")?.env;
        if (!e) {
            return false;
        }
        return (Ne(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) || Ne(e.CLAUDE_CODE_ENABLE_TELEMETRY)) && (w(a.OTEL_LOGS_EXPORTER) || w(e.OTEL_LOGS_EXPORTER));
    } catch  {
        return false;
    }
}
export { eOr, YPe, tOr, q0t, Win };
