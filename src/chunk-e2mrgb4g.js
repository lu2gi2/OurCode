import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { PZ as seconds, cCo } from "/$bunfs/root/chunk-x0qpydt2.js";
import { Rn } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ar } from "/$bunfs/root/chunk-24agvrd9.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { O$e, D$e, Noe, ol, X$e } from "/$bunfs/root/chunk-0ycjphb5.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { Ur, Ft, za } from "/$bunfs/root/chunk-04d4ftnx.js";
import { $tn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Nao } from "/$bunfs/root/chunk-2ya7enrh.js";
import { s, n, xIe } from "/$bunfs/root/chunk-8524cxt8.js";
import { xo } from "/$bunfs/root/chunk-tsfvfcsw.js";
import { ob } from "/$bunfs/root/chunk-jsagwt7j.js";
import { qGe, G8o, IEn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { INn, ONn } from "/$bunfs/root/chunk-eb0vnwc4.js";
import { voo, rfr } from "/$bunfs/root/chunk-40xcrb3y.js";
import { BZe } from "/$bunfs/root/chunk-t98dpkx7.js";
import { dx } from "/$bunfs/root/chunk-271a0dc5.js";
import { ige } from "/$bunfs/root/chunk-62d2d3kv.js";
import { Eee } from "/$bunfs/root/chunk-acqmmcxe.js";
import { kee } from "/$bunfs/root/chunk-yvcq1q28.js";
import { Qq } from "/$bunfs/root/chunk-yzwz05d1.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { EJe } from "/$bunfs/root/chunk-8ncns7p7.js";
import { cwd } from "process";
import { stripVTControlCharacters } from "util";
import { createInterface } from "readline";
function ymt(c, input = process.stdin) {
    let t = ()=>{};
    let f = new Promise((resolve)=>{
        t = resolve;
    });
    let l = createInterface({
        input,
        output: process.stdout
    });
    l.question(`${c} [y/N] `, (p)=>{
        let _ = p.trim().toLowerCase();
        t(_ === "y" || _ === "yes");
        l.close();
    });
    l.once("close", ()=>t(false));
    return f;
}
function gBs() {
    return xIe({
        ...dx(false),
        patchConsole: false
    });
}
function R(c) {
    return {
        ok: true,
        days: cCo,
        seconds
    };
}
async function hBs(c, d) {
    i("tengu_setup_token_command", {});
    let t = R(d?.expiresInDays);
    if (!t.ok) {
        c.unmount();
        process.stderr.write(`${t.message}
`);
        await Ft("cli_setup_token", t.errorCode);
        await xo(1);
        return;
    }
    let f = X$e(true);
    if (!f.valid) {
        c.unmount();
        process.stderr.write(`${f.message}
setup-token creates a long-lived Claude.ai subscription token, which this policy does not permit.
`);
        await Ft("cli_setup_token", "force_login_method_refused");
        await xo(1);
    }
    let l = O$e("firstParty");
    if (l !== undefined) {
        c.unmount();
        process.stderr.write(`${l}
setup-token creates a long-lived Claude.ai subscription token, which this machine's allowedProviders policy does not permit.
`);
        await Ft("cli_setup_token", "provider_not_allowed");
        await xo(1);
    }
    let p = !ol();
    let { ConsoleOAuthFlow } = await import("/$bunfs/root/chunk-69harp70.js");
    let session = B();
    let h = false;
    await new Promise((resolve)=>{
        c.render(e(ob, {
            session,
            onChangeAppState: (k)=>Eee(k, session),
            children: r(s, {
                flexDirection: "column",
                gap: 1,
                children: [
                    e(kee, {}),
                    p && r(s, {
                        flexDirection: "column",
                        children: [
                            e(n, {
                                color: "warning",
                                children: "Warning: You already have authentication configured via environment variable or API key helper."
                            }),
                            e(n, {
                                color: "warning",
                                children: "The setup-token command will create a new OAuth token which you can use instead."
                            })
                        ]
                    }),
                    r(s, {
                        paddingLeft: 1,
                        flexDirection: "column",
                        gap: 1,
                        children: [
                            r(n, {
                                bold: true,
                                children: [
                                    "This will guide you through long-lived (",
                                    t.days === 365 ? "1-year" : `${t.days}-day`,
                                    ") auth token setup for your Claude account. Claude subscription required."
                                ]
                            }),
                            e(ConsoleOAuthFlow, {
                                onDone: ()=>{
                                    resolve();
                                },
                                onAccountOnHold: ()=>{
                                    h = true;
                                    resolve();
                                },
                                mode: "setup-token",
                                expiresIn: t.seconds,
                                urlOutdent: 1
                            })
                        ]
                    })
                ]
            })
        }));
    });
    c.unmount();
    if (h) {
        await Ft("cli_setup_token", "account_on_hold");
        await xo(1);
        return;
    }
    await Ur("cli_setup_token");
    await xo(0);
}
async function yBs(storageV5) {
    i("tengu_doctor_command", {});
    let d;
    try {
        let t = await BZe({
            probeKeychain: true,
            storageV5
        });
        let f = Qq();
        let l = [
            "Claude Code doctor",
            "",
            `Running: ${t.installationType} (${t.version})`,
            ...{
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }.GIT_SHA ? [
                `Commit: ${({
                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://code.claude.com/docs/en/overview",
                    VERSION: "2.1.296",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                    BUILD_TIME: "2026-10-09T01:31:52Z",
                    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                    DD_SOURCEMAP_GROUP: "default"
                }).GIT_SHA.slice(0, 12)}`
            ] : [],
            "Platform: linux-x64",
            ...t.packageManager ? [
                `Package manager: ${u(t.packageManager)}`
            ] : [],
            `Path: ${u(t.installationPath)}`,
            ...t.invokedBinary !== t.installationPath ? [
                `Invoked: ${u(t.invokedBinary)}`
            ] : [],
            `Config install method: ${u(t.configInstallMethod)}`,
            `Search: ${t.ripgrepStatus.working ? "OK" : "Not working"} (${t.ripgrepStatus.mode === "embedded" ? "bundled" : u(t.ripgrepStatus.systemPath || "system")})`,
            `Auto-updates: ${t.packageManager ? "Managed by package manager" : u(t.autoUpdates)}`,
            `Auto-update channel: ${f === "rc" ? "slow" : f}`,
            `Last update attempt: ${b(t.lastUpdateResult)}`
        ];
        let p = qGe();
        if (p) {
            l.push(`Managed settings (remote): ${u(IEn(p))}`);
        } else if (G8o()) {
            l.push("Managed settings (remote): checking… (fetch in progress; re-run in a moment)");
        }
        {
            let { waitForPolicyLimitsToLoad, POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS } = await import("/$bunfs/root/chunk-z4ckrxvt.js");
            let { getLastFetchOutcome } = await import("/$bunfs/root/chunk-b84xs1kw.js");
            let v = false;
            let S = waitForPolicyLimitsToLoad().then(()=>{
                v = true;
            });
            let T = Date.now() + POLICY_LIMITS_FIRST_ATTEMPT_WAIT_MS;
            while(!v && getLastFetchOutcome() === null && Date.now() < T){
                await Promise.race([
                    S,
                    Q(200)
                ]);
            }
        }
        let _ = l.push("Organization policy: …") - 1;
        let { statusNotices, invalidEntries } = EJe(ige().errors);
        if (invalidEntries.length > 0) {
            l.push("", ge.yellow("Invalid settings"));
            for (let o of invalidEntries){
                let m = [
                    o.file,
                    o.path
                ].flatMap((w)=>{
                    if (w) {
                        return [
                            u(w)
                        ];
                    }
                    return [];
                }).join(" › ");
                l.push(`- ${m ? `${m}: ` : ""}${u(o.message)}${o.suggestion ? `
  Suggested fix: ${u(o.suggestion)}` : ""}`);
            }
        }
        if (statusNotices.length > 0) {
            l.push("");
            for (let o of statusNotices){
                l.push(`- ${u(o.message)}`);
            }
        }
        let y = $tn();
        if (y.length > 0) {
            l.push("");
            for (let [o, m] of y){
                l.push(`- ${o}
  ${m}`);
            }
        }
        let k = [
            {
                name: "BASH_MAX_OUTPUT_LENGTH",
                default: rfr,
                upperLimit: voo
            },
            {
                name: "CLAUDE_CODE_MAX_OUTPUT_TOKENS",
                ...Noe("claude-opus-4-6")
            }
        ].map((o)=>({
                name: o.name,
                ...D$e(o.name, process.env[o.name], o.default, o.upperLimit)
            })).filter((o)=>o.status !== "valid");
        if (k.length > 0) {
            l.push("", ge.yellow("Environment variables"));
            for (let o of k){
                l.push(`- ${o.name}: ${u(o.message ?? o.status)}`);
            }
        }
        if (t.multipleInstallations.length > 1) {
            l.push("", ge.yellow("Multiple installations found"));
            for (let o of t.multipleInstallations){
                l.push(`- ${u(`${o.type} at ${o.path}`)}`);
            }
        }
        try {
            let o = await Nao();
            l.push("", "Remote Control");
            if (o.inRemoteSession) {
                l.push("Inside a cloud session — Remote Control is unavailable here. Use it from the local session instead.");
            } else {
                l.push(u(o.disabledReason ?? "Control this session from claude.ai/code or the Claude mobile app"));
                for (let m of o.checks.filter((w)=>!w.ok)){
                    l.push(u(`- ${m.label}${m.detail ? ` (${m.detail})` : ""}`));
                }
            }
        } catch  {
            await za("cli_doctor", "bridge_info_unavailable");
        }
        l[_] = `Organization policy: ${u(ONn(INn()))}`;
        if (t.warnings.length > 0) {
            l.push("", ge.yellow(`${t.warnings.length} ${I(t.warnings.length, "warning")} found`));
            for (let o of t.warnings){
                l.push(`- ${u(o.issue)}`, `  Fix: ${u(o.fix)}`);
            }
        } else {
            l.push("", "No installation issues found.");
        }
        l.push("", "For a full setup checkup that can also fix issues, run /doctor in a Claude Code session.");
        Ar(l.join(`
`) + `
`);
        d = {
            warnings: t.warnings.length,
            settings_errors: invalidEntries.length,
            env_var_issues: k.length,
            multiple_installs: t.multipleInstallations.length > 1,
            ripgrep_working: t.ripgrepStatus.working
        };
    } catch (error) {
        await Ft("cli_doctor", "diagnostic_failed");
        throw error;
    }
    await Ur("cli_doctor", d);
    await xo(0);
}
function u(c) {
    return Rn(stripVTControlCharacters(c)).replaceAll("`", "");
}
function b(lastUpdateResult) {
    if (!lastUpdateResult) {
        return "none recorded";
    }
    let d = u(lastUpdateResult.timestamp.slice(0, 10));
    switch(lastUpdateResult.outcome){
        case "success":
            if (lastUpdateResult.version_to) {
                return `success \u2192 ${u(lastUpdateResult.version_to)} (${d})`;
            }
            return `success (${d})`;
        case "failed":
            return `failed (${u(lastUpdateResult.status)}) \u2014 ${d}`;
    }
}
async function _Bs(c, d, storageV5) {
    if (a.DISABLE_UPDATES) {
        process.stdout.write(`Updates are disabled by your administrator. Contact your IT team to get the latest version.
`);
        process.exit(0);
    }
    let { awaitPolicyLimitsColdStart } = await import("/$bunfs/root/chunk-z4ckrxvt.js");
    await awaitPolicyLimitsColdStart();
    let { setup } = await import("/$bunfs/root/chunk-4ssybdn9.js");
    await setup(cwd(), "default", false, false, undefined, false, undefined, undefined, undefined, storageV5);
    let { install } = await import("/$bunfs/root/chunk-wvazdf07.js");
    await new Promise((resolve)=>{
        let g = [];
        if (c) {
            g.push(c);
        }
        if (d.force) {
            g.push("--force");
        }
        install.call(async (h)=>{
            if (h.includes("failed")) {
                await Ft("cli_install", "cli_install_failed");
            } else {
                await Ur("cli_install");
            }
            await xo(h.includes("failed") ? 1 : 0);
            resolve();
        }, {
            storageV5
        }, g);
    });
}
export { ymt, gBs, hBs, yBs, _Bs };
