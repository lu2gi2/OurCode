import { wQ } from "/$bunfs/root/chunk-f07wx4fp.js";
const w = {};
const R = {};
export async function refuseRemoteControlLocally() {
    let { exitWithError } = await import("/$bunfs/root/chunk-k2t7ss1n.js");
    let { getSettingsWithErrors } = await import("/$bunfs/root/chunk-5mcxa4c8.js");
    if (getSettingsWithErrors().settings.disableRemoteControl === true) {
        exitWithError(`Error: ${wQ}`);
    }
    let [{ hasStoredOAuthToken }, { BRIDGE_LOGIN_ERROR }, { getBridgeAuthDebugInfo }] = await Promise.all([
        import("/$bunfs/root/chunk-mt5pc6ed.js"),
        import("/$bunfs/root/chunk-1xdk869d.js"),
        import("/$bunfs/root/chunk-fqb2csg5.js")
    ]);
    if (!hasStoredOAuthToken()) {
        exitWithError(BRIDGE_LOGIN_ERROR + getBridgeAuthDebugInfo());
    }
    return w;
}
export async function refuseRemoteControlIneligible(e) {
    let { getBridgeDisabledDiagnosis, getBridgeAuthDebugInfo, ensurePolicyLimitsLoadedForDiagnostic } = await import("/$bunfs/root/chunk-fqb2csg5.js");
    let { checkBridgeMinVersion } = await import("/$bunfs/root/chunk-q1thxs8m.js");
    let { exitWithError } = await import("/$bunfs/root/chunk-k2t7ss1n.js");
    let { logOrgPolicyDeniedAsync } = await import("/$bunfs/root/chunk-yv2efdhz.js");
    let a = await getBridgeDisabledDiagnosis();
    if (a) {
        if (a.orgPolicyDenied) {
            await logOrgPolicyDeniedAsync("allow_remote_control", "cli_flag");
        }
        await m(a.code);
        exitWithError(`Error: ${a.reason}` + getBridgeAuthDebugInfo());
    }
    let s = checkBridgeMinVersion();
    if (s) {
        await m("version_floor");
        exitWithError(s);
    }
    let { policyDeniedReason } = await import("/$bunfs/root/chunk-b84xs1kw.js");
    await ensurePolicyLimitsLoadedForDiagnostic();
    let c = policyDeniedReason("allow_remote_control", "Remote Control", "is", "Remote Control is disabled by your organization's policy.");
    if (c !== null) {
        await logOrgPolicyDeniedAsync("allow_remote_control", "cli_flag");
        await m("policy_denied");
        exitWithError(`Error: ${c}`);
    }
    return R;
}
async function m(e) {
    let [{ logFeatureBadAsync }, { flushAnalyticsBeforeExit }] = await Promise.all([
        import("/$bunfs/root/chunk-kxz3kak4.js"),
        import("/$bunfs/root/chunk-30xg4t12.js")
    ]);
    await logFeatureBadAsync("remote_control_entry", e);
    await flushAnalyticsBeforeExit();
}
export async function startRemoteControl(e, o, t, r) {
    let [{ preflightTrustedDeviceBlocking, sayHeldAutomaticEnrollmentNoticeOnStderr }, { shutdown1PEventLogging }, { shutdownDatadog }, { sleep }, { exitWithError }, { bridgeMain }, { initializeGrowthBook }, { logForDebugging }, { logFeatureBadAsync }] = await Promise.all([
        import("/$bunfs/root/chunk-9k4ckwrp.js"),
        import("/$bunfs/root/chunk-rc2cqp81.js"),
        import("/$bunfs/root/chunk-m3z2ahgd.js"),
        import("/$bunfs/root/chunk-vgr5k6hf.js"),
        import("/$bunfs/root/chunk-k2t7ss1n.js"),
        import("/$bunfs/root/chunk-kq8k0j5d.js"),
        import("/$bunfs/root/chunk-jv24m4k2.js"),
        import("/$bunfs/root/chunk-9wh2g9x8.js"),
        import("/$bunfs/root/chunk-kxz3kak4.js")
    ]);
    initializeGrowthBook().catch((d)=>{
        logForDebugging(`[remote-control] GrowthBook init failed (${d instanceof Error ? d.name : typeof d}); feature gates keep serving the disk cache`, {
            level: "error"
        });
    });
    let p = await preflightTrustedDeviceBlocking(r);
    sayHeldAutomaticEnrollmentNoticeOnStderr();
    if (p) {
        await logFeatureBadAsync("remote_control_entry", "trusted_device_unenrolled");
        await Promise.race([
            Promise.all([
                shutdown1PEventLogging(),
                shutdownDatadog()
            ]),
            sleep(500, undefined, {
                unref: true
            })
        ]).catch(()=>{});
        exitWithError(`Error: ${p}`);
    }
    await bridgeMain(o, t, r);
}
export async function enterRemoteControl(e, o, t) {
    let r = await refuseRemoteControlLocally();
    let i = await refuseRemoteControlIneligible(r);
    await startRemoteControl(i, e, o, t);
}
const E = new Map([
    [
        "verbose",
        ()=>true
    ],
    [
        "debug",
        ()=>true
    ],
    [
        "debugToStderr",
        ()=>true
    ],
    [
        "debugFile",
        ()=>true
    ],
    [
        "axScreenReader",
        ()=>true
    ],
    [
        "workload",
        ()=>true
    ],
    [
        "sessionId",
        ()=>true
    ],
    [
        "name",
        ()=>true
    ],
    [
        "remoteControlSessionNamePrefix",
        ()=>true
    ],
    [
        "pluginDir",
        ()=>true
    ],
    [
        "pluginDirNoMcp",
        ()=>true
    ],
    [
        "pluginUrl",
        ()=>true
    ],
    [
        "addDir",
        ()=>true
    ],
    [
        "ide",
        ()=>true
    ],
    [
        "chrome",
        (e)=>e === true
    ],
    [
        "model",
        ()=>true
    ],
    [
        "effort",
        ()=>true
    ],
    [
        "fallbackModel",
        ()=>true
    ],
    [
        "betas",
        ()=>true
    ],
    [
        "thinking",
        ()=>true
    ],
    [
        "thinkingDisplay",
        ()=>true
    ],
    [
        "maxThinkingTokens",
        ()=>true
    ],
    [
        "autocompact",
        ()=>true
    ],
    [
        "allowedTools",
        ()=>true
    ],
    [
        "dangerouslySkipPermissions",
        ()=>true
    ],
    [
        "allowDangerouslySkipPermissions",
        ()=>true
    ],
    [
        "enableAutoMode",
        ()=>true
    ],
    [
        "bare",
        ()=>true
    ]
]);
export function rootOptionsRemoteControlRefuses(e) {
    return e.filter(({ key, value })=>!E.get(key)?.(value)).map(({ flag })=>flag);
}
export function rootOptionsRefusedMessage(e) {
    let o = e.map((n)=>`\`${n}\``).join(", ");
    let [t, r] = e.length === 1 ? [
        "it",
        "is"
    ] : [
        "them",
        "are"
    ];
    let i = e.includes("--permission-mode") ? " Set the permission mode with `claude remote-control --permission-mode <mode>`." : "";
    return `Error: ${o} before \`remote-control\` ${r} not carried over to the sessions Remote Control starts, so Remote Control refuses to start rather than drop ${t} \u2014 remove ${t}, and give Remote Control's own options after the verb (see \`claude remote-control --help\`).` + i;
}
