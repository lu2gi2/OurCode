import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { B, we, Jon, IRo, M0, HBe, jn, fy, LBe, wIo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { Zpe } from "/$bunfs/root/chunk-xgw72tt1.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { P_, $Vt, K9o, vHe, ble, Ys, H_, w2, tlr, Zn, Ps } from "/$bunfs/root/chunk-kasbfbhj.js";
import { mr, Jsn } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Q7t, dz, Nt, Ea, k, g_, hOt, Es, Dm, oC, s0, Ae, ce, x_o } from "/$bunfs/root/chunk-0ycjphb5.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { eq } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { XA } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { JDe } from "/$bunfs/root/chunk-e5fn12qk.js";
import { cS } from "/$bunfs/root/chunk-38fr02qr.js";
import { le, P, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Y4n } from "/$bunfs/root/chunk-jsagwt7j.js";
import { YPe } from "/$bunfs/root/chunk-rfnk2b1y.js";
import { dx } from "/$bunfs/root/chunk-271a0dc5.js";
import { Iee } from "/$bunfs/root/chunk-066dgc2r.js";
import { s, n, yA } from "/$bunfs/root/chunk-8524cxt8.js";
import { Kun, LHs, kNr } from "/$bunfs/root/chunk-t0a52sy5.js";
import { yXe, j0 } from "/$bunfs/root/chunk-jhqt7z6d.js";
import { zQe } from "/$bunfs/root/chunk-6w83p5r5.js";
import { Fcn, NLo } from "/$bunfs/root/chunk-cc0srgeg.js";
import { px, Lyt, gWr } from "/$bunfs/root/chunk-e2vrg5f2.js";
import { Icn } from "/$bunfs/root/chunk-a05r95n5.js";
import { omn } from "/$bunfs/root/chunk-gtspnz15.js";
import { Nje } from "/$bunfs/root/chunk-mqymzd87.js";
import { V7e } from "/$bunfs/root/chunk-62d2d3kv.js";
import { IMo } from "/$bunfs/root/chunk-ck8ym6qg.js";
import { Gft } from "/$bunfs/root/chunk-pyksk38e.js";
import { Eee } from "/$bunfs/root/chunk-acqmmcxe.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { OGo } from "/$bunfs/root/chunk-gavfct3e.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
import { openSync, writeSync } from "fs";
import { homedir } from "os";
N();
const Pe = {
    iterm: "iTerm",
    "iterm.app": "iTerm",
    ghostty: "Ghostty",
    kitty: "kitty",
    alacritty: "Alacritty",
    wezterm: "WezTerm",
    apple_terminal: "Terminal"
};
function ie(o) {}
class X {
    frameDurations = [];
    totalFrames = 0;
    firstRenderTime;
    lastRenderTime;
    record(o) {
        let l = performance.now();
        if (this.firstRenderTime === undefined) {
            this.firstRenderTime = l;
        }
        this.lastRenderTime = l;
        this.totalFrames++;
        this.frameDurations.push(o);
        if (this.frameDurations.length > 3600) {
            this.frameDurations.splice(0, this.frameDurations.length >> 1);
        }
    }
    getMetrics() {
        if (this.totalFrames === 0 || this.firstRenderTime === undefined || this.lastRenderTime === undefined) {
            return;
        }
        let o = this.lastRenderTime - this.firstRenderTime;
        if (o <= 0) {
            return;
        }
        let l = this.totalFrames / (o / 1000);
        let h = this.frameDurations.slice().sort((C, T)=>T - C);
        let x = Math.max(0, Math.ceil(h.length * 0.01) - 1);
        let A = h[x];
        let b = A > 0 ? 1000 / A : 0;
        return {
            averageFps: Math.round(l * 100) / 100,
            low1PctFps: Math.round(b * 100) / 100
        };
    }
}
function Je(et) {
    return et(false);
}
function Ze(tt) {
    return tt.execRelaunch();
}
function Qe(rt) {
    rt();
    import("/$bunfs/root/chunk-c09y69ba.js").then(Ze);
}
function Xe(ot) {
    return {
        ...ot,
        phase: "save-failed"
    };
}
function DMs(o) {
    if (a.CLAUBBIT || !Es()) {
        return;
    }
    M0(true);
    cS(o);
}
function LMs(o) {
    Ae((l)=>({
            ...l,
            hasCompletedOnboarding: true,
            lastOnboardingVersion: ({
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }).VERSION
        }), o);
}
function PMo(o, l) {
    return async (h)=>{
        let x = await Fcn(o);
        let A = V7e();
        if (x.pendingServers.length === 0) {
            return null;
        }
        if (A.length > 0) {
            let b = D(A.map((C)=>C.file).filter(Boolean)).join(", ");
            f("mcp_project_approval_dialog", "mcp_project_approval_skipped_settings_errors");
            l({
                key: "mcp-approval-skipped",
                text: `skipping .mcp.json server approval (settings errors${b ? ` in ${b}` : ""}) \xB7 run \`claude doctor\` to list them, fix them, then restart`
            });
            return null;
        }
        try {
            return await NLo(x, (b)=>{
                try {
                    let C = Ee(b);
                    if (C) {
                        l(C);
                    }
                } catch (error) {
                    c(W(error));
                } finally{
                    h();
                }
            }, o);
        } catch (error) {
            m("mcp_project_approval_dialog", "mcp_project_approval_dialog_threw");
            throw error;
        }
    };
}
function Ee(o) {
    if (o.persistFailed) {
        m("mcp_project_approval_dialog", "mcp_approval_persist_failed");
        return {
            key: "mcp-approval-persist-failed",
            text: "one or more of your MCP server choices could not be saved (check permissions on .claude/settings.local.json) · you will be asked again next startup"
        };
    }
    let l = oC();
    if (Jon().some((h)=>h.workspaceKey === l) && !Dm() && s0({
        onIndeterminate: "tracked"
    })) {
        f("mcp_project_approval_dialog", "mcp_approval_persist_gated");
        return {
            key: "mcp-approval-persist-gated",
            text: "your MCP server choices apply to this session only (workspace not explicitly trusted; .claude/settings.local.json is gated) · to persist, add them to enabledMcpjsonServers in ~/.claude/settings.json"
        };
    }
    g("mcp_project_approval_dialog");
    return null;
}
async function bUs(o, l, beforeExit) {
    return IVn(o, l, {
        color: "error",
        beforeExit
    });
}
async function IVn(o, l, h) {
    let color = h?.color;
    let A = h?.exitCode ?? 1;
    j0(o, color ? e(n, {
        color,
        children: l
    }) : e(n, {
        children: l
    }));
    o.unmount();
    await h?.beforeExit?.();
    if (A !== 0) {
        let { setBgExitCause, setBgExitDetail } = await import("/$bunfs/root/chunk-tjtq8ex0.js");
        setBgExitCause("exit_with_message");
        setBgExitDetail("exit_with_message", l);
    }
    let { flushAnalyticsSinks } = await import("/$bunfs/root/chunk-026kpbpf.js");
    await flushAnalyticsSinks();
    let { drainRegisteredWriteQueues } = await import("/$bunfs/root/chunk-qbvfvcmg.js");
    let { withTimeout } = await import("/$bunfs/root/chunk-vgr5k6hf.js");
    await withTimeout(drainRegisteredWriteQueues(), 2000, "write queue drain timeout (exitWithMessage)").catch(()=>{});
    process.exit(A);
}
function Iwe(o, l, h) {
    return new Promise((resolve, reject)=>{
        yXe(o, [
            (b)=>l((C)=>{
                    resolve(C);
                    b();
                })
        ], {
            session: B(),
            onChangeAppState: h?.onChangeAppState,
            marksJobBlocked: true
        }).catch(reject);
    });
}
async function PIr(o, l, h, x, A) {
    let b = j0(o, l);
    x_o();
    kNr(h, x, A);
    try {
        if (await Promise.race([
            o.waitUntilExit().then(()=>"exited"),
            b.replaced.then(()=>"replaced")
        ]) === "replaced") {
            return;
        }
    } catch (error) {
        let T = W(error);
        let O = await omn().catch(()=>false) ? " It happened while the fullscreen renderer was starting, so the next launch will use the classic renderer (CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1 forces that any time)." : "";
        w2(`Claude Code exited after an unrecoverable interface error (${T.message}).${O}`);
        if (Nt() || Jsn()) {
            throw error;
        }
        try {
            JDe(T, "unhandled_rejection");
        } catch  {}
        await Zn(1, "other");
        return;
    }
    await tlr.of(h.host).runBeforeInteractiveShutdown();
    await Zn(0);
}
const Be = 2000;
const se = "GB post-onboarding init";
async function SUs(session, l, permissionMode, allowDangerouslySkipPermissions, commands, claudeInChrome, devChannels, offerClaudeInChrome, storageV5, credentials, askCloudDefaultReason) {
    let _ = {
        onboardingShown: false,
        onboardingSkippedSignIn: false,
        mcpApprovalSkipWarning: null,
        claudeInChromeAccepted: false
    };
    let F = (I)=>{
        _.mcpApprovalSkipWarning = I;
    };
    if (Nt() || a.CLAUDE_BRIDGE_REATTACH_SESSION) {
        let I = Es();
        let p = I || a.CLAUDE_BG_WORKSPACE_TRUSTED === true && Zpe(we(), homedir());
        if (!p) {
            t("Workspace trust is not recorded for this directory; continuing as an untrusted session (hooks and project settings env stay off)", {
                level: "warn"
            });
        }
        let u = [
            ()=>{
                if (p) {
                    M0(true);
                }
                hOt({
                    preservePendingExposures: true
                });
                Ea().catch((v)=>c(W(v)));
                if (p) {
                    vHe(session);
                    import("/$bunfs/root/chunk-retj3kqv.js").then((v)=>v.loadHooksModulesHeldForTrust(storageV5, credentials)).catch((v)=>c(W(v)));
                }
                return null;
            },
            PMo(storageV5, F),
            ()=>{
                if (p) {
                    XA();
                    import("/$bunfs/root/chunk-4ssybdn9.js").then((v)=>v.maybePrewarmRecallIndex(session));
                    cS(storageV5);
                }
                Kun(session.host);
                Icn();
                if (p) {
                    if (!I && !jn() && !mr()) {
                        De(storageV5, credentials);
                    }
                    setImmediate(YPe, storageV5);
                }
                return null;
            }
        ];
        await yXe(l, u, {
            session,
            storageV5
        });
        return _;
    }
    if (Ne(false) || a.IS_DEMO) {
        DMs(storageV5);
        Kun(session.host);
        Icn();
        return _;
    }
    await yXe(l, NMs({
        session,
        permissionMode,
        allowDangerouslySkipPermissions,
        commands,
        claudeInChrome,
        devChannels,
        offerClaudeInChrome,
        storageV5,
        credentials,
        askCloudDefaultReason
    }, _), {
        session,
        onChangeAppState: Eee,
        marksJobBlocked: true,
        storageV5
    });
    return _;
}
function NMs({ session, permissionMode, allowDangerouslySkipPermissions, commands, claudeInChrome, devChannels, offerClaudeInChrome, storageV5, credentials, askCloudDefaultReason }, M) {
    let _ = ce();
    let F = false;
    let I = true;
    return [
        (p)=>{
            if (_.hasCompletedOnboarding && a.CLAUDE_CODE_POWERUP_ONBOARDING !== "banner" && a.CLAUDE_CODE_POWERUP_ONBOARDING !== "step") {
                return null;
            }
            M.onboardingShown = true;
            return import("/$bunfs/root/chunk-epy7prpk.js").then(({ Onboarding })=>e(Onboarding, {
                    host: session.host,
                    onDone: ({ skippedSignIn })=>{
                        M.onboardingSkippedSignIn = skippedSignIn;
                        LMs(storageV5);
                        p();
                    }
                }));
        },
        (p)=>{
            if (a.CLAUBBIT) {
                return null;
            }
            I = Es();
            if (I && !Nje()) {
                return null;
            }
            F = true;
            return (I ? Promise.resolve(false) : OGo()).then((u)=>{
                if (u) {
                    HBe(true);
                    return null;
                }
                return import("/$bunfs/root/chunk-b28k39ns.js").then(({ TrustDialog })=>e(TrustDialog, {
                        commands,
                        onDone: p
                    }));
            });
        },
        ()=>{
            if (a.CLAUBBIT) {
                return null;
            }
            M0(true);
            if (F) {
                H_("post-trust: re-discover project @skills-dir plugins");
                if (ble(credentials)) {
                    Ys(storageV5, credentials).catch(()=>{});
                }
            }
            import("/$bunfs/root/chunk-retj3kqv.js").then((p)=>p.loadHooksModulesHeldForTrust(storageV5, credentials)).catch((p)=>c(W(p)));
            hOt({
                preservePendingExposures: true
            });
            if (_.hasCompletedOnboarding) {
                Ea().catch((p)=>c(W(p)));
                return null;
            }
            dz();
            return de();
        },
        ()=>{
            if (a.CLAUBBIT) {
                return null;
            }
            return null;
        },
        (p)=>{
            if (a.CLAUBBIT) {
                return null;
            }
            return PMo(storageV5, (u)=>{
                M.mcpApprovalSkipWarning = u;
            })(p);
        },
        async (p)=>{
            if (a.CLAUBBIT || !await K9o(session, storageV5)) {
                return null;
            }
            let externalIncludes = $Vt(await P_(session, true, storageV5, credentials));
            let { ClaudeMdExternalIncludesDialog } = await import("/$bunfs/root/chunk-ppay61w1.js");
            return e(ClaudeMdExternalIncludesDialog, {
                onDone: ()=>p(),
                isStandaloneDialog: true,
                externalIncludes
            });
        },
        ()=>{
            IMo(storageV5);
            ie(storageV5);
            XA();
            Kun(session.host);
            import("/$bunfs/root/chunk-4ssybdn9.js").then((p)=>p.maybePrewarmRecallIndex(session));
            cS(storageV5);
            Icn();
            if (F && !I && !jn() && !mr()) {
                De(storageV5, credentials);
            }
            setImmediate(YPe, storageV5);
            if (LHs(session.host, _)) {
                return de();
            }
            return null;
        },
        async (p)=>{
            if (!await zQe(storageV5, credentials)) {
                return null;
            }
            let { GroveDialog } = await import("/$bunfs/root/chunk-5aaj2mah.js");
            return e(GroveDialog, {
                showIfAlreadyViewed: false,
                location: M.onboardingShown ? "onboarding" : "policy_update_modal",
                onDone: (v)=>{
                    if (v !== "escape") {
                        p();
                        return;
                    }
                    i("tengu_grove_policy_exited", {});
                    Ps(0);
                    M.onboardingShown = false;
                    M.claudeInChromeAccepted = false;
                    p("stop");
                }
            });
        },
        async (p)=>{
            if (Gft().status !== "not_started") {
                return null;
            }
            let { ProTrialStartScreen } = await import("/$bunfs/root/chunk-wfj1rbv1.js");
            i("tengu_pro_trial_start_screen_shown", {});
            return e(ProTrialStartScreen, {
                onDone: ()=>p(),
                storageV5,
                credentials
            });
        },
        async (p)=>{
            if (!M.onboardingShown) {
                return null;
            }
            let { resolvePowerupDiscoveryArm } = await import("/$bunfs/root/chunk-ve1p9fhc.js");
            if (resolvePowerupDiscoveryArm() !== "step") {
                return null;
            }
            let { PowerupDiscoveryStep } = await import("/$bunfs/root/chunk-hsja63ch.js");
            return e(PowerupDiscoveryStep, {
                onDone: ()=>p()
            });
        },
        (p)=>{
            let customApiKeyTruncated = Q7t();
            if (!customApiKeyTruncated) {
                return null;
            }
            return import("/$bunfs/root/chunk-xpn98rp4.js").then(({ ApproveApiKey })=>e(ApproveApiKey, {
                    customApiKeyTruncated,
                    onDone: ()=>p()
                }));
        },
        me("bedrock", storageV5),
        me("vertex", storageV5),
        async (p)=>{
            let u;
            try {
                u = await gWr();
            } catch (error) {
                c(error);
                return null;
            }
            let { lines, hasHardFailure } = u;
            if (lines.length === 0) {
                return null;
            }
            return e(ye, {
                afterMs: hasHardFailure ? 4000 : 1500,
                onDone: p,
                children: e(s, {
                    flexDirection: "column",
                    children: lines.map((U)=>e(n, {
                            color: "warning",
                            children: U
                        }, U))
                })
            });
        },
        (p)=>{
            if (permissionMode !== "bypassPermissions" && !allowDangerouslySkipPermissions || eq()) {
                return null;
            }
            return import("/$bunfs/root/chunk-gezf7zvz.js").then(({ BypassPermissionsModeDialog })=>e(BypassPermissionsModeDialog, {
                    onAccept: ()=>p(),
                    storageV5
                }));
        },
        ...[],
        async (p)=>{
            if (fy().length === 0 && (devChannels?.length ?? 0) === 0) {
                return null;
            }
            await g_("tengu_harbor");
            if (!devChannels || devChannels.length === 0) {
                return null;
            }
            let [{ isChannelsOffForSession }, { isChannelsPolicyBlocked }, { getSettingsForSource }] = await Promise.all([
                import("/$bunfs/root/chunk-mnhstgbn.js"),
                import("/$bunfs/root/chunk-7qjrsk36.js"),
                import("/$bunfs/root/chunk-5mcxa4c8.js")
            ]);
            let U = ()=>{
                let G = devChannels.map((q)=>({
                        ...q,
                        dev: true
                    }));
                LBe(fy().concat(G));
                wIo(true);
            };
            if (isChannelsOffForSession() || Ie() !== "firstParty" || isChannelsPolicyBlocked(getSettingsForSource("policySettings"))) {
                U();
                return null;
            }
            let { DevChannelsDialog } = await import("/$bunfs/root/chunk-21yddsav.js");
            return e(DevChannelsDialog, {
                channels: devChannels,
                onAccept: ()=>{
                    U();
                    p();
                }
            });
        },
        (p)=>{
            if (!claudeInChrome || ce().hasCompletedClaudeInChromeOnboarding) {
                return null;
            }
            return import("/$bunfs/root/chunk-wfmhddpg.js").then(({ ClaudeInChromeOnboarding })=>e(ClaudeInChromeOnboarding, {
                    onDone: ()=>p()
                }));
        },
        async (p)=>{
            if (!offerClaudeInChrome) {
                return null;
            }
            let { isChromeExtensionInstalled } = await import("/$bunfs/root/chunk-vx4rk3kp.js");
            let v = await Ut(isChromeExtensionInstalled(), 1500, "chrome extension scan timed out before offer").catch(()=>true);
            let L = Boolean(ce().chromeExtension?.pairedDeviceId);
            if (!v && !L) {
                t("[Claude in Chrome] Skipping offer: extension not present locally (stale cache)");
                return null;
            }
            await Ut(Ea().catch(()=>{}), 1500, "GrowthBook init timed out before chrome offer").catch(()=>{});
            let U = k("tengu_chrome_auto_enable", false);
            let z = ce().claudeInChromeDefaultEnabled !== undefined;
            let { isChromeServerPolicyDenied } = await import("/$bunfs/root/chunk-4trpzez7.js");
            let { isClaudeInChromeAllowed } = await import("/$bunfs/root/chunk-vx4rk3kp.js");
            if (isChromeServerPolicyDenied() || !isClaudeInChromeAllowed()) {
                t("[Claude in Chrome] Skipping offer: blocked by enterprise MCP config, managed deniedMcpServers policy, or organization policy (allow_claude_browser_extension)");
                return null;
            }
            if (z) {
                t("[Claude in Chrome] Skipping offer: decision already recorded (another instance answered)");
                M.claudeInChromeAccepted = ce().claudeInChromeDefaultEnabled === true;
                return null;
            }
            if (!U) {
                t("[Claude in Chrome] Skipping offer: tengu_chrome_auto_enable no longer set (stale GB cache)");
                return null;
            }
            let { ChromeAutoEnableDialog } = await import("/$bunfs/root/chunk-1p0922zn.js");
            return e(ChromeAutoEnableDialog, {
                onDone: (ae)=>{
                    M.claudeInChromeAccepted = ae;
                    p();
                },
                isDontAskMode: permissionMode === "dontAsk",
                isAutoMode: permissionMode === "auto"
            });
        }
    ];
}
async function de() {
    let o = Date.now();
    try {
        await Ut(Ea(), Be, se);
        t(`[STARTUP] post-onboarding GB await ${Date.now() - o}ms`);
    } catch (error) {
        t(`[STARTUP] post-onboarding GB await ${Date.now() - o}ms: ${error}`, {
            level: "warn"
        });
        if (!(error instanceof Error && error.message === se)) {
            c(W(error));
        }
    }
    return null;
}
function ye(o) {
    let A = w(4);
    let { afterMs, onDone, children } = o;
    let b;
    let C;
    if (A[0] !== afterMs || A[1] !== onDone) {
        b = ()=>{
            let T = setTimeout(onDone, afterMs);
            return ()=>clearTimeout(T);
        };
        C = [
            afterMs,
            onDone
        ];
        A[0] = afterMs;
        A[1] = onDone;
        A[2] = b;
        A[3] = C;
    } else {
        b = A[2];
        C = A[3];
    }
    P(b, C);
    return children;
}
const re = {
    bedrock: {
        accepted: "tengu_bedrock_upgrade_accepted",
        declined: "tengu_bedrock_upgrade_declined",
        saveFailed: "tengu_bedrock_upgrade_save_failed",
        relaunch: "tengu_bedrock_upgrade_relaunch"
    },
    vertex: {
        accepted: "tengu_vertex_upgrade_accepted",
        declined: "tengu_vertex_upgrade_declined",
        saveFailed: "tengu_vertex_upgrade_save_failed",
        relaunch: "tengu_vertex_upgrade_relaunch"
    }
};
function me(provider, storageV5) {
    let h = re[provider];
    return async (x)=>{
        if (Ie() !== provider) {
            return null;
        }
        try {
            let [A, { upgradeKey }] = await Promise.all([
                provider === "bedrock" ? import("/$bunfs/root/chunk-bf5xxzxy.js").then((_)=>Lyt("bedrock-upgrade", _.findBedrockUpgradeCandidates()).then((F)=>F.map((I)=>({
                                ...I,
                                toId: I.toBedrockId
                            })))) : import("/$bunfs/root/chunk-s2m29jt0.js").then((_)=>Lyt("vertex-upgrade", _.findVertexUpgradeCandidates()).then((F)=>F.map((I)=>({
                                ...I,
                                toId: I.toVertexId
                            })))),
                import("/$bunfs/root/chunk-rtqj23x5.js")
            ]);
            let C = (provider === "bedrock" ? ce().bedrockDeclinedUpgrades : ce().vertexDeclinedUpgrades) ?? {};
            let pending = A.filter((_)=>C[_.tier] !== upgradeKey(_));
            if (pending.length === 0) {
                return null;
            }
            let [{ updateSettingsForSource }, { ThirdPartyModelUpgradeDialog }] = await Promise.all([
                import("/$bunfs/root/chunk-5mcxa4c8.js"),
                import("/$bunfs/root/chunk-vm2wcn5r.js")
            ]);
            async function answer(_, F) {
                let tier = d(_.tier);
                if (!F) {
                    await Ae((v)=>{
                        let L = provider === "bedrock" ? "bedrockDeclinedUpgrades" : "vertexDeclinedUpgrades";
                        return {
                            ...v,
                            [L]: {
                                ...v[L],
                                [_.tier]: upgradeKey(_)
                            }
                        };
                    }, storageV5);
                    i(h.declined, {
                        tier,
                        from_key: d(_.fromKey),
                        to_key: d(_.toKey)
                    });
                    return false;
                }
                let env = _.tier === "haiku" ? {
                    ANTHROPIC_DEFAULT_HAIKU_MODEL: _.toId,
                    ..._.envVar === "ANTHROPIC_SMALL_FAST_MODEL" && {
                        ANTHROPIC_SMALL_FAST_MODEL: _.toId
                    }
                } : {
                    [_.envVar]: _.toId
                };
                let { error } = await updateSettingsForSource("userSettings", {
                    env
                }, undefined, storageV5);
                if (error) {
                    i(h.saveFailed, {
                        tier
                    });
                    return false;
                }
                for (let v of Object.keys(env)){
                    process.env[v] = _.toId;
                }
                i(h.accepted, {
                    tier,
                    from_key: d(_.fromKey),
                    to_key: d(_.toKey)
                });
                return true;
            }
            return e(ke, {
                provider,
                pending,
                answer,
                onDone: ()=>x(),
                Dialog: ThirdPartyModelUpgradeDialog
            });
        } catch (error) {
            c(error);
            return null;
        }
    };
}
function ke(o) {
    let C = w(27);
    let { provider, pending, answer, onDone, Dialog } = o;
    let T;
    if (C[0] === S) {
        T = {
            at: 0,
            acceptedAny: false,
            phase: "asking"
        };
        C[0] = T;
    } else {
        T = C[0];
    }
    let [E, O] = y(T);
    let { at, acceptedAny, phase } = E;
    let { exit } = yA();
    let p = R(null);
    let u = pending[at];
    let v;
    if (C[1] !== pending.length) {
        v = (L)=>O((U)=>{
                let acceptedAny_1 = U.acceptedAny || L;
                if (U.at + 1 < pending.length) {
                    return {
                        at: U.at + 1,
                        acceptedAny: acceptedAny_1,
                        phase: "asking"
                    };
                }
                return {
                    ...U,
                    acceptedAny: acceptedAny_1,
                    phase: acceptedAny_1 ? "relaunching" : "done"
                };
            });
        C[1] = pending.length;
        C[2] = v;
    } else {
        v = C[2];
    }
    let G = v;
    let q;
    let oe;
    if (C[3] !== G || C[4] !== exit || C[5] !== onDone || C[6] !== phase || C[7] !== provider) {
        q = ()=>{
            if (phase === "done") {
                onDone();
                return;
            }
            if (phase === "save-failed") {
                let ne = setTimeout(Je, 2000, G);
                return ()=>clearTimeout(ne);
            }
            if (phase === "relaunching") {
                i(re[provider].relaunch, {});
                let ae = setTimeout(Qe, 250, exit);
                return ()=>clearTimeout(ae);
            }
        };
        oe = [
            phase,
            provider,
            G,
            onDone,
            exit
        ];
        C[3] = G;
        C[4] = exit;
        C[5] = onDone;
        C[6] = phase;
        C[7] = provider;
        C[8] = q;
        C[9] = oe;
    } else {
        q = C[8];
        oe = C[9];
    }
    P(q, oe);
    if (phase === "relaunching" && acceptedAny) {
        let j;
        if (C[10] === S) {
            j = e(n, {
                dimColor: true,
                children: "Restarting Claude Code to apply the new model…"
            });
            C[10] = j;
        } else {
            j = C[10];
        }
        return j;
    }
    if (u === undefined || phase === "done") {
        return null;
    }
    if (phase === "save-failed") {
        const j = px[u.tier];
        let Y;
        if (C[11] !== j) {
            Y = r(n, {
                color: "error",
                children: [
                    "Failed to save ",
                    j,
                    " upgrade to settings."
                ]
            });
            C[11] = j;
            C[12] = Y;
        } else {
            Y = C[12];
        }
        return Y;
    }
    const tierLabel = px[u.tier];
    let Y;
    if (C[13] !== G || C[14] !== answer || C[15] !== at || C[16] !== u || C[17] !== onDone) {
        Y = (Ce)=>{
            if (p.current === at) {
                return;
            }
            p.current = at;
            answer(u, Ce).then((be)=>{
                if (Ce && !be) {
                    O(Xe);
                    return;
                }
                G(be);
            }, (Ve)=>{
                c(Ve);
                onDone();
            });
        };
        C[13] = G;
        C[14] = answer;
        C[15] = at;
        C[16] = u;
        C[17] = onDone;
        C[18] = Y;
    } else {
        Y = C[18];
    }
    let Te;
    if (C[19] !== Dialog || C[20] !== at || C[21] !== u.fromMarketingName || C[22] !== u.toId || C[23] !== u.toMarketingName || C[24] !== tierLabel || C[25] !== Y) {
        Te = e(Dialog, {
            tierLabel,
            fromName: u.fromMarketingName,
            toName: u.toMarketingName,
            toProviderId: u.toId,
            onDone: Y
        }, at);
        C[19] = Dialog;
        C[20] = at;
        C[21] = u.fromMarketingName;
        C[22] = u.toId;
        C[23] = u.toMarketingName;
        C[24] = tierLabel;
        C[25] = Y;
        C[26] = Te;
    } else {
        Te = C[26];
    }
    return Te;
}
function wUs(o) {
    let l = 0;
    let h = dx(o);
    if (h.stdin) {
        i("tengu_stdin_interactive", {});
    }
    let x = new X;
    let stats = Y4n();
    IRo(stats);
    let a_CLAUDE_CODE_FRAME_TIMING_LOG = a.CLAUDE_CODE_FRAME_TIMING_LOG;
    let C = -1;
    let T = 0;
    let E = Math.max(1, a.CLAUDE_CODE_FRAME_TIMING_SAMPLE_EVERY || 1);
    if (a_CLAUDE_CODE_FRAME_TIMING_LOG) {
        try {
            C = openSync(a_CLAUDE_CODE_FRAME_TIMING_LOG, "a");
        } catch  {}
    }
    return {
        getFpsMetrics: ()=>x.getMetrics(),
        stats,
        renderOptions: {
            ...h,
            onFrame: (O)=>{
                x.record(O.durationMs);
                stats.observe("frame_duration_ms", O.durationMs);
                if (C >= 0 && O.phases) {
                    let M = T++ % E === 0;
                    let _ = JSON.stringify({
                        total: O.durationMs,
                        at: Date.now(),
                        ...O.phases,
                        ...M && {
                            rss: process.memoryUsage.rss(),
                            cpu: process.cpuUsage()
                        }
                    }) + `
`;
                    writeSync(C, _);
                }
                if (Iee()) {
                    return;
                }
                for (let M of O.flickers){
                    if (M.reason === "resize") {
                        continue;
                    }
                    let _ = Date.now();
                    if (_ - l < 1000) {
                        i("tengu_flicker", {
                            desiredHeight: M.desiredHeight,
                            actualHeight: M.availableHeight,
                            reason: M.reason
                        });
                    }
                    l = _;
                }
            }
        }
    };
}
function De(storageV5, credentials) {
    import("/$bunfs/root/chunk-62ahzred.js").then((h)=>h.startMemoryWatcher(storageV5, credentials));
}
export { DMs, LMs, PMo, bUs, IVn, Iwe, PIr, SUs, NMs, wUs };
