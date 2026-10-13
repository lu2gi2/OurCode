import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { gFn } from "/$bunfs/root/chunk-hq5kk7fc.js";
import { qat, Kat, koe, MSs, YB } from "/$bunfs/root/chunk-d4n0kkf1.js";
import { LSs } from "/$bunfs/root/chunk-dv47h7z3.js";
import { NGn } from "/$bunfs/root/chunk-7qc48pza.js";
function st() {
    try {
        process.cwd();
        return;
    } catch (error) {
        let w = error instanceof Error && "code" in error && typeof error.code === "string" ? error.code : undefined;
        if (w === "ENOENT") {
            return "The current directory no longer exists (it was deleted or moved). Start Claude Code from an existing directory.";
        }
        return `Can't read the current directory${w ? ` (${w})` : ""}. Start Claude Code from a different directory.`;
    }
}
process.env.NoDefaultCurrentDirectoryInExePath = "1";
process.env.COREPACK_ENABLE_AUTO_PIN = "0";
NGn();
if (process.env.CLAUDE_CODE_REMOTE === "true") {
    let s = process.env.NODE_OPTIONS || "";
    process.env.NODE_OPTIONS = s ? `${s} --max-old-space-size=8192` : "--max-old-space-size=8192";
}
function nt(s) {
    for(let w = 0; w < s.length; w++){
        let t = s[w];
        if (t === "--debug" || t === "-d" || t === "--debug-to-stderr" || t === "-d2e" || t.startsWith("--debug=") || t.startsWith("--debug-file=")) {
            continue;
        }
        if (t === "--debug-file" && w + 1 < s.length) {
            w++;
            continue;
        }
        return false;
    }
    return true;
}
function at(s) {
    let w = s.indexOf("--");
    return (w === -1 ? s : s.slice(0, w)).includes("--desktop");
}
function xt(s) {
    let w;
    let t;
    let model;
    let effort;
    let agent;
    let allowBypass;
    let rest = [];
    for(let c = 0; c < s.length; c++){
        let a = s[c];
        let I = a.indexOf("=");
        let [k, T] = I > 0 ? [
            a.slice(0, I),
            a.slice(I + 1)
        ] : [
            a,
            undefined
        ];
        let U = T !== undefined || c + 1 < s.length;
        if (k === "--dangerously-skip-permissions") {
            w = "bypassPermissions";
        } else if (k === "--allow-dangerously-skip-permissions") {
            allowBypass = true;
        } else if (k === "--permission-mode" && U) {
            w = T ?? s[++c];
        } else if (k === "--inherit-permission-mode" && U) {
            t = T ?? s[++c];
        } else if (k === "--model" && U) {
            model = T ?? s[++c];
        } else if (k === "--effort" && U) {
            effort = T ?? s[++c];
        } else if (k === "--agent" && U) {
            agent = T ?? s[++c];
        } else {
            rest.push(a);
        }
    }
    let permissionMode = w ?? t;
    return {
        dispatchDefaults: permissionMode || model || effort || agent || allowBypass ? {
            permissionMode,
            ...!w && t && {
                permissionModeInherited: true
            },
            model,
            effort,
            agent,
            allowBypass
        } : undefined,
        rest
    };
}
async function Bt() {
    if (process.env.CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR !== undefined || process.argv.includes("--session-tunnel")) {
        let { guardRelayTokenDescriptor } = import.meta.require("/$bunfs/root/chunk-5gp2tqjq.js");
        guardRelayTokenDescriptor();
    }
    let s = LSs();
    if (s === "refused") {
        return;
    }
    let w = gFn(process.argv);
    if (w) {
        console.error(w);
        process.exit(1);
    }
    let t = process.argv.slice(2);
    if ((t.length === 1 || t.length === 2 && t[1] === "--verbose") && (t[0] === "--version" || t[0] === "-v" || t[0] === "-V")) {
        console.log(`${{
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION} (Claude Code)${YB()}`);
        if (t.length === 2 && ({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }).GIT_SHA) {
            console.log(`Commit: ${{
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.GIT_SHA}`);
        }
        return;
    }
    let message = st();
    if (message) {
        console.error(message);
        let { writeStartupFailureResult } = await import("/$bunfs/root/chunk-nz7z52k0.js");
        let { randomUUID } = await import("crypto");
        await writeStartupFailureResult({
            sessionId: randomUUID(),
            message,
            reason: "cwd_unavailable"
        });
        process.exit(1);
    }
    let { profileCheckpoint } = await import("/$bunfs/root/chunk-w2km06yy.js");
    profileCheckpoint("cli_entry");
    let G = t[0] === "--preload" || t[0] === "--bg-spare";
    let envPin = !G && process.env.CLAUDE_CODE_HOVER_REST ? (await import("/$bunfs/root/chunk-ndj8e3ev.js")).pinStorageV5FromEnv() : undefined;
    if (!G) {
        setTimeout(()=>{
            if (typeof Bun !== "undefined") {
                Bun.unsafe.setJITPolicy?.(1);
            }
        }, 10000).unref();
    }
    if (s !== undefined) {
        let { loadFastPathPolicy } = await import("/$bunfs/root/chunk-gzp7b95n.js");
        let o = await loadFastPathPolicy(envPin);
        if (o) {
            let { exitWithError } = await import("/$bunfs/root/chunk-k2t7ss1n.js");
            exitWithError(o);
        }
        let { ghStandinMain } = await import("/$bunfs/root/chunk-p1mn57eh.js");
        await ghStandinMain(s);
        return;
    }
    if (t[0] === "plugin" && t[1] === "test") {
        let [{ loadFastPathPolicy }, { pluginTestFormOf, pluginTestGatesOf, pluginTestRefusal }, { endPluginTest }] = await Promise.all([
            import("/$bunfs/root/chunk-gzp7b95n.js"),
            import("/$bunfs/root/chunk-wx0430qe.js"),
            import("/$bunfs/root/chunk-f2jdg3se.js")
        ]);
        let error = pluginTestRefusal(await pluginTestGatesOf({
            helperError: await loadFastPathPolicy(envPin),
            form: pluginTestFormOf(t.slice(2)),
            envPin
        }));
        if (t[2] === "--file" && error !== undefined) {
            let { REPORT_MARK } = await import("/$bunfs/root/chunk-h9m77bvq.js");
            process.stdout.write(`${REPORT_MARK}${JSON.stringify({
                file: t[3],
                results: [],
                error
            })}
`);
            return;
        }
        if (error !== undefined) {
            process.stderr.write(`claude plugin test: ${error}
`);
            process.exitCode = 1;
            return endPluginTest(process.exitCode);
        }
        let { pluginTestMain } = await import("/$bunfs/root/chunk-gzwzzn7e.js");
        process.exitCode = await pluginTestMain(t.slice(2));
        return endPluginTest(process.exitCode);
    }
    if (process.argv[2] === "--eval-mock-server") {
        profileCheckpoint("cli_eval_mock_server_path");
        let { runEvalMockServer } = await import("/$bunfs/root/chunk-6p3cs0xv.js");
        try {
            await runEvalMockServer(process.argv[3], process.argv[4]);
        } catch (error) {
            console.error(`--eval-mock-server: ${error instanceof Error ? error.message : String(error)}`);
            process.exitCode = 1;
        }
        return;
    }
    if (process.argv[2] === "--claude-in-chrome-mcp") {
        profileCheckpoint("cli_claude_in_chrome_mcp_path");
        let { runClaudeInChromeMcpServer } = await import("/$bunfs/root/chunk-37ayvsv6.js");
        await runClaudeInChromeMcpServer(envPin);
        return;
    } else if (process.argv[2] === "--chrome-native-host") {
        profileCheckpoint("cli_chrome_native_host_path");
        let { runChromeNativeHost } = await import("/$bunfs/root/chunk-4bddgfw5.js");
        await runChromeNativeHost();
        return;
    }
    if (t[0] === "--daemon-worker") {
        let { loadFastPathPolicy } = await import("/$bunfs/root/chunk-gzp7b95n.js");
        let o = await loadFastPathPolicy(envPin);
        if (o) {
            process.stderr.write(`${o}
`);
        }
        let { sessionFactsRestored } = await import("/$bunfs/root/chunk-n3s6ks9c.js");
        let _ = await sessionFactsRestored(envPin);
        if (_ !== null) {
            let { endsInARowOf, workerEndingOf } = await import("/$bunfs/root/chunk-218633ve.js");
            let P = workerEndingOf(_, endsInARowOf(t[2]));
            process.stderr.write(P.said);
            process.exit(P.code);
        }
        let { runDaemonWorker } = await import("/$bunfs/root/chunk-dzxmxw03.js");
        await runDaemonWorker(t[1], envPin);
        return;
    }
    if (t[0] === "--bg-pty-host") {
        let { ensureFastPathSettingsLoaded } = await import("/$bunfs/root/chunk-gzp7b95n.js");
        try {
            await ensureFastPathSettingsLoaded(envPin);
        } catch (error) {
            process.stderr.write(`ptyHost: settings bootstrap threw (continuing; supervisor already gated): ${error?.stack ?? String(error)}
`);
        }
        let { runPtyHost } = await import("/$bunfs/root/chunk-1weqfw64.js");
        await runPtyHost(t.slice(1));
        return;
    }
    if (t[0] === "--bg-spare") {
        let { ensureFastPathSettingsLoaded } = await import("/$bunfs/root/chunk-gzp7b95n.js");
        await ensureFastPathSettingsLoaded(undefined);
        let { runBgSpare } = await import("/$bunfs/root/chunk-7b0h3me7.js");
        await runBgSpare(t.slice(1));
        return;
    }
    if (t[0] === "--preload") {
        let { ensureFastPathSettingsLoaded } = await import("/$bunfs/root/chunk-gzp7b95n.js");
        await ensureFastPathSettingsLoaded(undefined);
        let { runPreload } = await import("/$bunfs/root/chunk-q8957zdr.js");
        await runPreload(t.slice(1));
        return;
    }
    if (t[0] === "remote-control" || t[0] === "rc" || t[0] === "remote" || t[0] === "sync" || t[0] === "bridge") {
        profileCheckpoint("cli_bridge_path");
        let { loadFastPathPolicy } = await import("/$bunfs/root/chunk-gzp7b95n.js");
        {
            let l = await loadFastPathPolicy(envPin);
            if (l) {
                let { exitWithError } = await import("/$bunfs/root/chunk-k2t7ss1n.js");
                exitWithError(l);
            }
        }
        let { sessionFactsRestored } = await import("/$bunfs/root/chunk-n3s6ks9c.js");
        let i = await sessionFactsRestored(envPin);
        if (i !== null) {
            let { exitWithError } = await import("/$bunfs/root/chunk-k2t7ss1n.js");
            exitWithError(i.reason);
        }
        let { refuseRemoteControlLocally, refuseRemoteControlIneligible, startRemoteControl } = await import("/$bunfs/root/chunk-xy37q1hf.js");
        let p = await refuseRemoteControlLocally();
        let [{ pinStorageV5 }, { seedInstallIDs }] = await Promise.all([
            import("/$bunfs/root/chunk-mnsmmx9k.js"),
            import("/$bunfs/root/chunk-edz5qxx7.js")
        ]);
        let h = pinStorageV5(envPin);
        if (j() && h !== undefined) {
            let [{ credentialsStoreFor: credentialsStoreFor_1 }, { setGrowthBookCredentials, setGrowthBookStorageBackend }, { composePolicyLimitsClient, primePolicyLimitsCache }, { primeFastPathCredentials }] = await Promise.all([
                import("/$bunfs/root/chunk-r13zb9hg.js"),
                import("/$bunfs/root/chunk-jv24m4k2.js"),
                import("/$bunfs/root/chunk-z4ckrxvt.js"),
                import("/$bunfs/root/chunk-dmt3qh13.js")
            ]);
            let F = credentialsStoreFor_1(h);
            setGrowthBookCredentials(F);
            setGrowthBookStorageBackend(h);
            composePolicyLimitsClient({
                storageV5: h,
                credentials: F
            });
            await primeFastPathCredentials(F);
            await primePolicyLimitsCache(h);
            await seedInstallIDs(h);
        }
        let [{ initSinks }, { initialize1PEventLogging }, { credentialsStoreFor }, { initDefaultDebugLog }, { watchGlobalConfigThroughStorage }] = await Promise.all([
            import("/$bunfs/root/chunk-0bww6bk6.js"),
            import("/$bunfs/root/chunk-rc2cqp81.js"),
            import("/$bunfs/root/chunk-r13zb9hg.js"),
            import("/$bunfs/root/chunk-9wh2g9x8.js"),
            import("/$bunfs/root/chunk-edz5qxx7.js")
        ]);
        initSinks();
        let D = credentialsStoreFor(h);
        initialize1PEventLogging(h);
        let u = await refuseRemoteControlIneligible(p);
        if (j() && h !== undefined) {
            initDefaultDebugLog({
                storageV5: h
            });
            watchGlobalConfigThroughStorage(h);
        }
        await startRemoteControl(u, t.slice(1), h, D);
        return;
    }
    {
        let e = MSs(t);
        if (e !== null) {
            profileCheckpoint("cli_daemon_path");
            let { ensureFastPathSettingsLoaded } = await import("/$bunfs/root/chunk-gzp7b95n.js");
            await ensureFastPathSettingsLoaded(envPin);
            let { initializeErrorLogSink } = await import("/$bunfs/root/chunk-4k2wv838.js");
            initializeErrorLogSink();
            let { daemonMain } = await import("/$bunfs/root/chunk-ps8q7w5j.js");
            await daemonMain(e, envPin);
            return;
        }
    }
    let K = process.env.CLAUDE_CODE_SESSION_KIND === "bg";
    let x = t.some((e)=>e === "logs" || e === "attach" || e === "stop" || e === "kill" || e === "respawn" || e === "rm") ? import.meta.require("/$bunfs/root/chunk-dsgf759n.js").backgroundSessionVerbIndex(t, {
        behindRootOptions: !K
    }) : -1;
    let c = x === -1 ? [] : t.slice(x);
    if (c.length > 0 || t.includes("--bg") || t.includes("--background")) {
        profileCheckpoint("cli_bg_path");
        if (at(t)) {
            console.error(c.length > 0 ? `--desktop can't be combined with \`claude ${c[0]}\`.` : "--desktop opens the Claude Desktop app and can't run in the background (`--bg`, `--background`, `--routine`).");
            process.exit(1);
        }
        if (x > 0) {
            let [{ eagerParseCliFlag }, { loadSettingsFromFlag, loadManagedSettingsFromFlag }] = await Promise.all([
                import("/$bunfs/root/chunk-dsgf759n.js"),
                import("/$bunfs/root/chunk-mgq5scg1.js")
            ]);
            let D = t.slice(0, x);
            let u = eagerParseCliFlag("--settings", D);
            if (u) {
                loadSettingsFromFlag(u);
            }
            let l = eagerParseCliFlag("--managed-settings", D);
            if (l) {
                loadManagedSettingsFromFlag(l);
            }
        }
        let { loadFastPathPolicy } = await import("/$bunfs/root/chunk-gzp7b95n.js");
        let { sessionFactsRestored } = await import("/$bunfs/root/chunk-n3s6ks9c.js");
        let i = null;
        let _ = [
            "logs",
            "stop",
            "kill",
            "rm"
        ].includes(c[0] ?? "");
        {
            let f = await loadFastPathPolicy(envPin);
            if (f) {
                if (_) {
                    process.stderr.write(`${f}
`);
                } else {
                    let { exitWithError } = await import("/$bunfs/root/chunk-k2t7ss1n.js");
                    exitWithError(f);
                }
            }
            i = await sessionFactsRestored(envPin);
            if (i !== null && !_) {
                let { exitWithError } = await import("/$bunfs/root/chunk-k2t7ss1n.js");
                exitWithError(i.reason);
            }
        }
        let S = i === null;
        if (i !== null) {
            process.stderr.write(`${i.reason}
`);
        }
        let d = await import("/$bunfs/root/chunk-j5158fer.js");
        await d.ensureFleetGateHydrated({
            kickGrowthBook: S && !_
        });
        if (!d.isAgentsFleetEnabled()) {
            let f = c[0] ?? t.find((m)=>m === "--bg" || m === "--background" || m === "--routine" || m.startsWith("--routine=")) ?? "--bg";
            return d.fleetGateRejected(f);
        }
        let [p, { pinStorageV5 }, { initDefaultDebugLog }, { seedInstallIDs, watchGlobalConfigThroughStorage }] = await Promise.all([
            import("/$bunfs/root/chunk-mesqf323.js"),
            import("/$bunfs/root/chunk-mnsmmx9k.js"),
            import("/$bunfs/root/chunk-9wh2g9x8.js"),
            import("/$bunfs/root/chunk-edz5qxx7.js")
        ]);
        let n = pinStorageV5(envPin);
        if (j() && n !== undefined) {
            initDefaultDebugLog({
                storageV5: n
            });
            watchGlobalConfigThroughStorage(n);
            let [{ credentialsStoreFor }, { setGrowthBookCredentials, setGrowthBookStorageBackend }, { composePolicyLimitsClient, primePolicyLimitsCache }, { primeFastPathCredentials }] = await Promise.all([
                import("/$bunfs/root/chunk-r13zb9hg.js"),
                import("/$bunfs/root/chunk-jv24m4k2.js"),
                import("/$bunfs/root/chunk-z4ckrxvt.js"),
                import("/$bunfs/root/chunk-dmt3qh13.js")
            ]);
            let E = credentialsStoreFor(n);
            setGrowthBookCredentials(E);
            setGrowthBookStorageBackend(n);
            composePolicyLimitsClient({
                storageV5: n,
                credentials: E
            });
            await primeFastPathCredentials(E);
            await primePolicyLimitsCache(n);
            await seedInstallIDs(n);
        }
        switch(c[0]){
            case "logs":
            case "attach":
            case "stop":
            case "kill":
            case "respawn":
            case "rm":
                {
                    let [{ initializeAnalyticsSink }, { initialize1PEventLogging, shutdown1PEventLogging }, { shutdownDatadog }, { sleep }] = await Promise.all([
                        import("/$bunfs/root/chunk-hsyw2dw7.js"),
                        import("/$bunfs/root/chunk-rc2cqp81.js"),
                        import("/$bunfs/root/chunk-m3z2ahgd.js"),
                        import("/$bunfs/root/chunk-vgr5k6hf.js")
                    ]);
                    if (S) {
                        initializeAnalyticsSink();
                        initialize1PEventLogging(n);
                    }
                    if (c[0] === "logs") {
                        await p.logsHandler(c[1], n);
                    } else if (c[0] === "attach") {
                        await p.attachHandler(c[1], n);
                    } else if (c[0] === "respawn") {
                        await p.respawnHandler(c[1], n);
                    } else if (c[0] === "rm") {
                        await p.rmHandler(c[1], n);
                    } else {
                        await p.stopHandler(c[1], n);
                    }
                    await Promise.race([
                        Promise.all([
                            shutdown1PEventLogging(),
                            shutdownDatadog()
                        ]),
                        sleep(500, undefined, {
                            unref: true
                        })
                    ]).catch(()=>{});
                    return process.exit(process.exitCode ?? 0);
                }
            default:
                {
                    let [{ initializeAnalyticsSink }, { initialize1PEventLogging, shutdown1PEventLogging }, { shutdownDatadog }, { logEvent }, { sleep }] = await Promise.all([
                        import("/$bunfs/root/chunk-hsyw2dw7.js"),
                        import("/$bunfs/root/chunk-rc2cqp81.js"),
                        import("/$bunfs/root/chunk-m3z2ahgd.js"),
                        import("/$bunfs/root/chunk-mj49rkzw.js"),
                        import("/$bunfs/root/chunk-vgr5k6hf.js")
                    ]);
                    initializeAnalyticsSink();
                    initialize1PEventLogging(n);
                    logEvent("tengu_background", {
                        via_flag: true,
                        via: b("flag")
                    });
                    await p.handleBgFlag(t, n);
                    await Promise.race([
                        Promise.all([
                            shutdown1PEventLogging(),
                            shutdownDatadog()
                        ]),
                        sleep(500, undefined, {
                            unref: true
                        })
                    ]).catch(()=>{});
                    process.exit(process.exitCode ?? 0);
                }
        }
        return;
    }
    let a = qat(t);
    a.config.restricted ||= [
        "1",
        "true",
        "yes",
        "on"
    ].includes((process.env.CLAUDE_CODE_RESTRICTED ?? "").toLowerCase().trim());
    let { dispatchDefaults, rest } = xt(a.rest);
    let T = a.hasAgentsPositional && nt(rest);
    if ((T || nt(t) && process.stdin.isTTY) && process.stdout.isTTY) {
        let { startCapturingEarlyInput, consumeEarlyInput } = await import("/$bunfs/root/chunk-84hvzwwa.js");
        startCapturingEarlyInput();
        let [{ startMdmRawRead: startMdmRawRead_1 }, { startKeychainPrefetch: startKeychainPrefetch_1 }] = await Promise.all([
            import("/$bunfs/root/chunk-evx0tsja.js"),
            import("/$bunfs/root/chunk-1q5107yh.js")
        ]);
        startMdmRawRead_1();
        startKeychainPrefetch_1();
        let { enableConfigs, getGlobalConfig, seedInstallIDs } = await import("/$bunfs/root/chunk-edz5qxx7.js");
        let P = false;
        let defaultToAgentsView = false;
        try {
            await enableConfigs(j() ? envPin?.backend : undefined);
            defaultToAgentsView = getGlobalConfig().defaultToAgentsView === true;
            P = T || defaultToAgentsView;
        } catch  {}
        if (P) {
            if (a.config.settings || a.config.managedSettings) {
                let { loadSettingsFromFlag, loadManagedSettingsFromFlag } = await import("/$bunfs/root/chunk-mgq5scg1.js");
                if (a.config.settings) {
                    loadSettingsFromFlag(a.config.settings);
                }
                if (a.config.managedSettings) {
                    loadManagedSettingsFromFlag(a.config.managedSettings);
                }
            }
            if (a.config.pluginDir.length > 0 || a.config.pluginDirNoMcp.length > 0) {
                let [{ setInlinePlugins, setInlinePluginsNoMcp }, { clearPluginCache }] = await Promise.all([
                    import("/$bunfs/root/chunk-q61sszgr.js"),
                    import("/$bunfs/root/chunk-1jq5zq77.js")
                ]);
                setInlinePlugins(a.config.pluginDir);
                setInlinePluginsNoMcp(a.config.pluginDirNoMcp);
                clearPluginCache("claude agents --plugin-dir");
            }
            let { loadFastPathPolicy } = await import("/$bunfs/root/chunk-gzp7b95n.js");
            let O = await loadFastPathPolicy(envPin);
            if (O) {
                let { exitWithError } = await import("/$bunfs/root/chunk-k2t7ss1n.js");
                exitWithError(O);
            }
            let n;
            if (process.env.CLAUDE_CODE_PLUGIN_DIRS?.trim()) {
                let [{ mergePluginDirs, PLUGIN_DIRS_ENV_RECOVERY_HINT, PLUGIN_DIRS_ENV_VAR, settlePluginDirsEnv, withoutPluginDirs }, { setInlinePlugins }, { clearPluginCache }] = await Promise.all([
                    import("/$bunfs/root/chunk-gk3yq1wh.js"),
                    import("/$bunfs/root/chunk-q61sszgr.js"),
                    import("/$bunfs/root/chunk-1jq5zq77.js")
                ]);
                let F = withoutPluginDirs(settlePluginDirsEnv(), a.config.pluginDirNoMcp);
                if (F.length > 0) {
                    n = {
                        name: PLUGIN_DIRS_ENV_VAR,
                        hint: PLUGIN_DIRS_ENV_RECOVERY_HINT
                    };
                    setInlinePlugins(mergePluginDirs(a.config.pluginDir, F));
                    clearPluginCache("claude agents CLAUDE_CODE_PLUGIN_DIRS");
                }
            }
            {
                let { areSideloadFlagsDisabledByPolicy, sideloadFlagsBlockedMessage } = await import("/$bunfs/root/chunk-m0grneb3.js");
                if (areSideloadFlagsDisabledByPolicy()) {
                    let E = [];
                    if (a.config.pluginDir.length > 0) {
                        E.push("--plugin-dir");
                    }
                    if (a.config.pluginDirNoMcp.length > 0) {
                        E.push("--plugin-dir-no-mcp");
                    }
                    if (n) {
                        E.push(n.name);
                    }
                    if (E.length > 0) {
                        let { exitWithError } = await import("/$bunfs/root/chunk-k2t7ss1n.js");
                        exitWithError(n ? `${sideloadFlagsBlockedMessage(E)} ${n.hint}` : sideloadFlagsBlockedMessage(E));
                    }
                }
            }
            let { isAgentsFleetEnabled, ensureFleetGateHydrated, fleetGateRejected, consumeAgentViewRelaunchMarker } = await import("/$bunfs/root/chunk-j5158fer.js");
            await ensureFleetGateHydrated({
                kickGrowthBook: false
            });
            if (isAgentsFleetEnabled()) {
                let { sessionFactsRestored } = await import("/$bunfs/root/chunk-n3s6ks9c.js");
                let l = await sessionFactsRestored(envPin);
                if (l !== null) {
                    let { exitWithError } = await import("/$bunfs/root/chunk-k2t7ss1n.js");
                    exitWithError(l.reason);
                }
                let [{ applyFleetViewHostWindowsEnv }, { createRoot }, { getBaseRenderOptions }, { resolve }, { getRootSession, setCliSessionConfigCarried, setIsInteractive, setRestrictedSession, setSessionStartType }, { cliCarriesSessionConfig }, { pinStorageV5 }, { appliedSettingSourcesFlagValue }] = await Promise.all([
                    import("/$bunfs/root/chunk-ktbhsam3.js"),
                    import("/$bunfs/root/chunk-q5h9n85v.js"),
                    import("/$bunfs/root/chunk-cb809g2b.js"),
                    import("path"),
                    import("/$bunfs/root/chunk-q61sszgr.js"),
                    import("/$bunfs/root/chunk-gwka04xv.js"),
                    import("/$bunfs/root/chunk-mnsmmx9k.js"),
                    import("/$bunfs/root/chunk-rn1y6v4d.js")
                ]);
                let Z = {
                    ...a.config,
                    settingSources: appliedSettingSourcesFlagValue()
                };
                let C = pinStorageV5(envPin);
                let Y;
                if (j() && C !== undefined) {
                    let [{ credentialsStoreFor }, { setGrowthBookCredentials, setGrowthBookStorageBackend }, { primeFastPathCredentials }] = await Promise.all([
                        import("/$bunfs/root/chunk-r13zb9hg.js"),
                        import("/$bunfs/root/chunk-jv24m4k2.js"),
                        import("/$bunfs/root/chunk-dmt3qh13.js")
                    ]);
                    Y = credentialsStoreFor(C);
                    setGrowthBookCredentials(Y);
                    setGrowthBookStorageBackend(C);
                    await primeFastPathCredentials(Y);
                    await seedInstallIDs(C);
                }
                import("/$bunfs/root/chunk-hbjcf5fy.js").then(({ resolveSetting })=>{
                    let { value } = resolveSetting("theme", "dark");
                    if (value.startsWith("custom:")) {
                        import("/$bunfs/root/chunk-hrw0eghm.js").then((M)=>M.loadCustomThemes(C));
                    }
                });
                let relaunch = consumeAgentViewRelaunchMarker();
                setIsInteractive(true);
                setCliSessionConfigCarried(cliCarriesSessionConfig({
                    ...Z,
                    ...dispatchDefaults
                }));
                setRestrictedSession(a.config.restricted);
                setSessionStartType("agents_view");
                let Q = ()=>{};
                process.on("unhandledRejection", Q);
                let tt = Promise.resolve();
                let et = ()=>{};
                let Dt = new Promise((resolvePromise)=>{
                    et = resolvePromise;
                });
                setImmediate(async ()=>{
                    if (j() && C !== undefined) {
                        try {
                            let [{ credentialsStoreFor }, { composePolicyLimitsClient, primePolicyLimitsCache }] = await Promise.all([
                                import("/$bunfs/root/chunk-r13zb9hg.js"),
                                import("/$bunfs/root/chunk-z4ckrxvt.js")
                            ]);
                            composePolicyLimitsClient({
                                storageV5: C,
                                credentials: credentialsStoreFor(C)
                            });
                            await primePolicyLimitsCache(C);
                        } catch (error) {
                            import("/$bunfs/root/chunk-9wh2g9x8.js").then(({ logForDebugging })=>logForDebugging(`Policy limits: start-up composition on the agents path failed: ${error instanceof Error ? error.message : String(error)}`, {
                                    level: "warn"
                                }));
                        }
                    }
                    tt = Promise.all([
                        import("/$bunfs/root/chunk-026kpbpf.js"),
                        import("/$bunfs/root/chunk-4k2wv838.js"),
                        import("/$bunfs/root/chunk-hsyw2dw7.js"),
                        import("/$bunfs/root/chunk-rc2cqp81.js"),
                        import("/$bunfs/root/chunk-mj49rkzw.js"),
                        import("/$bunfs/root/chunk-e97e5220.js"),
                        import("/$bunfs/root/chunk-jv24m4k2.js"),
                        import("/$bunfs/root/chunk-7cmvhc4s.js"),
                        import("/$bunfs/root/chunk-edz5qxx7.js"),
                        import("/$bunfs/root/chunk-6m00yfqj.js"),
                        import("/$bunfs/root/chunk-1abjsa9q.js"),
                        import("/$bunfs/root/chunk-9wh2g9x8.js")
                    ]).then(([{ setupGracefulShutdown }, { initializeErrorLogSink }, { initializeAnalyticsSink }, { initialize1PEventLogging }, { logEvent }, { captureTeammateModeSnapshotIfEnabled }, { initializeGrowthBook }, { initializeTelemetryAfterTrust }, { checkHasTrustDialogAccepted, watchGlobalConfigThroughStorage }, { applyConfigEnvironmentVariables }, { setRepoDetectionGuards }, { initDefaultDebugLog }])=>{
                        setupGracefulShutdown({
                            storageV5: C,
                            credentials: Y
                        });
                        setRepoDetectionGuards({
                            trustProbe: checkHasTrustDialogAccepted
                        });
                        initializeGrowthBook().catch(()=>{});
                        initializeErrorLogSink();
                        initializeAnalyticsSink();
                        initialize1PEventLogging(C);
                        if (j() && C !== undefined) {
                            initDefaultDebugLog({
                                storageV5: C
                            });
                            watchGlobalConfigThroughStorage(C);
                        }
                        Dt.then(()=>{
                            if (checkHasTrustDialogAccepted()) {
                                applyConfigEnvironmentVariables();
                                initializeTelemetryAfterTrust(C);
                            }
                        });
                        logEvent("tengu_fleetview", {
                            defaultToAgentsView,
                            relaunch
                        });
                        return captureTeammateModeSnapshotIfEnabled();
                    }).finally(()=>process.off("unhandledRejection", Q));
                    import("/$bunfs/root/chunk-ryen4b64.js").then((g)=>g.startBackgroundHousekeeping(getRootSession().host, C));
                });
                consumeEarlyInput();
                applyFleetViewHostWindowsEnv();
                let z = dispatchDefaults?.permissionMode === "bypassPermissions" || dispatchDefaults?.allowBypass ? await import("/$bunfs/root/chunk-982ecq3n.js") : undefined;
                z?.refuseBypassUnderRoot(dispatchDefaults);
                let dispatchDefaults_1 = z?.applyBypassPolicyGate(dispatchDefaults) ?? dispatchDefaults;
                let q = await createRoot(getBaseRenderOptions(false));
                let { ensureAgentsWorkspaceTrust, agentsTrustDecision } = await import("/$bunfs/root/chunk-f4x1v39v.js");
                await ensureAgentsWorkspaceTrust(q, agentsTrustDecision(), C);
                et();
                if (z) {
                    await z.ensureAgentsBypassConsent(q, dispatchDefaults_1, C);
                }
                let ot = await import("/$bunfs/root/chunk-j5158fer.js");
                let Rt = {
                    cwdFilter: a.cwdFilter,
                    dispatchExtraArgs: koe(Kat(Z, resolve)),
                    dispatchDefaults: dispatchDefaults_1,
                    entryChannel: ot.isListReturnRelaunch() ? "list_return" : T ? "cli_agents" : "default_home",
                    storageV5: C,
                    credentials: Y
                };
                {
                    let { mountFleetViewWithComposerBack } = await import("/$bunfs/root/chunk-vjv2s8rc.js");
                    await mountFleetViewWithComposerBack(q, Rt);
                }
                await tt.catch(()=>{});
                let { gracefulShutdown } = await import("/$bunfs/root/chunk-026kpbpf.js");
                await gracefulShutdown(0, "other", {
                    suppressResumeHint: true
                });
                return;
            }
            if (T) {
                return fleetGateRejected("claude agents");
            }
        }
    }
    if (t[0] === "self-hosted-runner") {
        profileCheckpoint("cli_self_hosted_runner_path");
        let e = t[1];
        if (e === "orchestrator") {
            let { selfHostedRunnerOrchestratorMain } = await import("/$bunfs/root/chunk-c33fvtzb.js");
            await selfHostedRunnerOrchestratorMain(t.slice(2));
            return;
        }
        if (e === "setup") {
            let { selfHostedRunnerSetupMain } = await import("/$bunfs/root/chunk-88fmab5n.js");
            await selfHostedRunnerSetupMain(t.slice(2), envPin);
            return;
        }
        if (e === "doctor") {
            let { selfHostedRunnerDoctorMain } = await import("/$bunfs/root/chunk-e7cecmj4.js");
            await selfHostedRunnerDoctorMain(t.slice(2), envPin);
            return;
        }
        if (e === "code-sign") {
            let { selfHostedRunnerCodeSignMain } = await import("/$bunfs/root/chunk-yd9ryzch.js");
            await selfHostedRunnerCodeSignMain(t.slice(2));
            return;
        }
        if (e === "decode-token") {
            let { selfHostedRunnerDecodeTokenMain } = await import("/$bunfs/root/chunk-3nhr49ck.js");
            await selfHostedRunnerDecodeTokenMain(t.slice(2));
            return;
        }
        let { selfHostedRunnerMain } = await import("/$bunfs/root/chunk-b0cqq226.js");
        await selfHostedRunnerMain(t.slice(1));
        return;
    }
    if ((t.includes("--tmux") || t.includes("--tmux=classic")) && (t.includes("-w") || t.includes("--worktree") || t.some((e)=>e.startsWith("--worktree=")))) {
        profileCheckpoint("cli_tmux_worktree_fast_path");
        if (at(t)) {
            console.error("--desktop only opens the Claude Desktop app; it can't be combined with `--worktree` or `--tmux`.");
            process.exit(1);
        }
        let { eagerLoadSettings } = await import("/$bunfs/root/chunk-mgq5scg1.js");
        eagerLoadSettings();
        let { loadFastPathPolicy } = await import("/$bunfs/root/chunk-gzp7b95n.js");
        {
            let S = await loadFastPathPolicy(envPin);
            if (S) {
                let { exitWithError } = await import("/$bunfs/root/chunk-k2t7ss1n.js");
                exitWithError(S);
            }
        }
        let { configureFastPathGlobalAgents } = await import("/$bunfs/root/chunk-whjrkqdy.js");
        configureFastPathGlobalAgents();
        let { isWorktreeModeEnabled } = await import("/$bunfs/root/chunk-5kjnxj39.js");
        if (isWorktreeModeEnabled()) {
            let [{ execIntoTmuxWorktree }, { pinStorageV5 }, { initDefaultDebugLog }] = await Promise.all([
                import("/$bunfs/root/chunk-4x1yedq3.js"),
                import("/$bunfs/root/chunk-mnsmmx9k.js"),
                import("/$bunfs/root/chunk-9wh2g9x8.js")
            ]);
            let P = pinStorageV5(envPin);
            let R;
            if (j() && P !== undefined) {
                initDefaultDebugLog({
                    storageV5: P
                });
                let [{ credentialsStoreFor }, { setGrowthBookCredentials, setGrowthBookStorageBackend }, { primeFastPathCredentials }] = await Promise.all([
                    import("/$bunfs/root/chunk-r13zb9hg.js"),
                    import("/$bunfs/root/chunk-jv24m4k2.js"),
                    import("/$bunfs/root/chunk-dmt3qh13.js")
                ]);
                R = credentialsStoreFor(P);
                setGrowthBookCredentials(R);
                setGrowthBookStorageBackend(P);
                await primeFastPathCredentials(R);
                let { seedInstallIDs } = await import("/$bunfs/root/chunk-edz5qxx7.js");
                await seedInstallIDs(P);
            }
            let h = await execIntoTmuxWorktree(t, P, R);
            if (h.handled) {
                return;
            }
            let { exitWithError } = await import("/$bunfs/root/chunk-k2t7ss1n.js");
            exitWithError(h.error);
        }
    }
    if (t.length === 1 && (t[0] === "--update" || t[0] === "--upgrade")) {
        process.argv = [
            process.argv[0],
            process.argv[1],
            "update"
        ];
    }
    let X = t.indexOf("--");
    if ((X === -1 ? t : t.slice(0, X)).includes("--bare")) {
        process.env.CLAUDE_CODE_SIMPLE = "1";
    }
    let { NON_REPL_SUBCOMMANDS, isMcpServeInvocation, isPluginEvalInvocation, isRemoteControlInvocation, isAgentsJsonInvocation, isProjectVerbInvocation } = await import("/$bunfs/root/chunk-141pedz0.js");
    if (!NON_REPL_SUBCOMMANDS.has(process.argv[2] ?? "") && !isMcpServeInvocation(process.argv.slice(2)) && !isPluginEvalInvocation(process.argv.slice(2)) && !isRemoteControlInvocation(process.argv.slice(2)) && !isAgentsJsonInvocation(process.argv.slice(2)) && !isProjectVerbInvocation(process.argv.slice(2))) {
        let { startCapturingEarlyInput } = await import("/$bunfs/root/chunk-84hvzwwa.js");
        startCapturingEarlyInput();
    }
    let [{ startMdmRawRead }, { startKeychainPrefetch }] = await Promise.all([
        import("/$bunfs/root/chunk-evx0tsja.js"),
        import("/$bunfs/root/chunk-1q5107yh.js")
    ]);
    startMdmRawRead();
    startKeychainPrefetch();
    profileCheckpoint("cli_before_main_import");
    (await import("/$bunfs/root/chunk-csaks7f9.js")).configureZodForStartup();
    let { main } = await import("/$bunfs/root/chunk-ha9v64hy.js");
    profileCheckpoint("cli_after_main_import");
    await main(envPin);
    profileCheckpoint("cli_after_main_complete");
}
Bt();
