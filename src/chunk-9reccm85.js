import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { an, QL, Yu, xo } from "/$bunfs/root/chunk-tsfvfcsw.js";
import { V_, Dt, mZt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ec } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { G5, r$n, Qre } from "/$bunfs/root/chunk-gr4a0fky.js";
import { sqt, tDe, R3 } from "/$bunfs/root/chunk-kasbfbhj.js";
import { le, P, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { sUt } from "/$bunfs/root/chunk-wdayd23w.js";
import { C9e } from "/$bunfs/root/chunk-5eqja8yr.js";
import { Er } from "/$bunfs/root/chunk-zby5bms5.js";
import { Iln, ZDo } from "/$bunfs/root/chunk-tv244fzh.js";
import { rje } from "/$bunfs/root/chunk-z5hn2t79.js";
import { KH as run } from "/$bunfs/root/chunk-daj64yn4.js";
import { aWo, omn } from "/$bunfs/root/chunk-gtspnz15.js";
import { Pin } from "/$bunfs/root/chunk-bn39rs8m.js";
import { p9e } from "/$bunfs/root/chunk-f9e98xh0.js";
import { Eee } from "/$bunfs/root/chunk-acqmmcxe.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { efn } from "/$bunfs/root/chunk-pkc6jzc4.js";
async function g$t(d = x) {
    let { env } = await import("/$bunfs/root/chunk-thze5wqx.js");
    if (env.CLAUDE_CODE_CHILD_SESSION) {
        return d;
    }
}
var x = "This setting cannot be changed from an editor started inside a Claude Code session. Start the editor outside the session and try again.";
const E = "Claude Design cannot be signed in from inside a Claude Code session. Start the editor outside the session and try again.";
async function l(d) {
    let a = [];
    let r = 0;
    let s = Bun.stdin.stream().getReader();
    while(true){
        let { done, value } = await s.read();
        if (done) {
            break;
        }
        r += value.byteLength;
        if (r > d) {
            await s.cancel();
            return null;
        }
        a.push(value);
    }
    return new TextDecoder().decode(Buffer.concat(a));
}
function ZDr(d, a) {
    d.command("edit-permission-rules", {
        hidden: true
    }).allowExcessArguments(false).description("Apply one permission-rule edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(a(async (r)=>{
        if (process.stdin.isTTY) {
            return an("claude edit-permission-rules reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
        }
        let s = await g$t();
        if (s !== undefined) {
            return an(s);
        }
        let { runPermissionRuleEdit } = await import("/$bunfs/root/chunk-13v0jj6c.js");
        let n = await l(2097152);
        let o = n === null ? null : mt(n, false);
        if (o === null) {
            return an("claude edit-permission-rules: stdin is not a JSON edit");
        }
        let t = await runPermissionRuleEdit(o, r);
        if (!t.ok) {
            return an(t.error);
        }
        await Yu(_({
            ok: true,
            warnings: t.warnings,
            stored: t.stored
        }) + `
`);
        return QL();
    }));
    d.command("edit-memory-settings", {
        hidden: true
    }).allowExcessArguments(false).description("Apply one memory-settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(a(async (r)=>{
        if (process.stdin.isTTY) {
            return an("claude edit-memory-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
        }
        let s = await g$t();
        if (s !== undefined) {
            return an(s);
        }
        let { runMemorySettingsEdit } = await import("/$bunfs/root/chunk-75mj5f9m.js");
        let n = await l(4096);
        let o = n === null ? null : mt(n, false);
        if (o === null) {
            return an("claude edit-memory-settings: stdin is not a JSON edit");
        }
        let t = await runMemorySettingsEdit(o, r);
        if (!t.ok) {
            return an(t.error);
        }
        await Yu(_({
            ok: true,
            written: t.written
        }) + `
`);
        return xo(0);
    }));
    d.command("edit-skill-overrides", {
        hidden: true
    }).allowExcessArguments(false).description("Apply one skill state edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(a(async (r)=>{
        if (process.stdin.isTTY) {
            return an("claude edit-skill-overrides reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
        }
        let s = await g$t();
        if (s !== undefined) {
            return an(s);
        }
        let { runSkillOverrideEdit } = await import("/$bunfs/root/chunk-690sg50a.js");
        let n = await l(4096);
        let o = n === null ? null : mt(n, false);
        if (o === null) {
            return an("claude edit-skill-overrides: stdin is not a JSON edit");
        }
        let t = await runSkillOverrideEdit(o, se(), r);
        if (!t.ok) {
            return an(t.error);
        }
        await Yu(_({
            ok: true,
            written: t.written,
            changed: t.changed
        }) + `
`);
        return QL();
    }));
    d.command("edit-sandbox-settings", {
        hidden: true
    }).allowExcessArguments(false).description("Apply one sandbox settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(async ()=>{
        if (process.stdin.isTTY) {
            return an("claude edit-sandbox-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
        }
        let r = await g$t();
        if (r !== undefined) {
            return an(r);
        }
        let { runSandboxSettingsEdit } = await import("/$bunfs/root/chunk-601r2jg4.js");
        let i = await l(4096);
        let n = i === null ? null : mt(i, false);
        if (n === null) {
            return an("claude edit-sandbox-settings: stdin is not a JSON edit");
        }
        let o = await runSandboxSettingsEdit(n);
        if (!o.ok) {
            return an(o.error);
        }
        await Yu(_({
            ok: true,
            written: o.written
        }) + `
`);
        return xo(0);
    });
    d.command("design-login", {
        hidden: true
    }).allowExcessArguments(false).description("Run the Claude Design sign-in, or report its state, as JSON lines (used by the VS Code extension)").requiredOption("--json", "Write JSON lines to stdout").option("--status", "Report whether design-system access is authorized, and exit").action(a(async (r, s)=>{
        if (process.stdin.isTTY) {
            return an("claude design-login --json is run by the VS Code extension, not by hand; use /design-login in a session");
        }
        let { isSpawnedByClaudeCodeSession } = await import("/$bunfs/root/chunk-en5bn6nc.js");
        if (isSpawnedByClaudeCodeSession()) {
            return an(E);
        }
        let { designLoginStatus, runDesignLoginSignIn } = await import("/$bunfs/root/chunk-wj7xfdmv.js");
        if (s.status) {
            await Yu(_(await designLoginStatus()) + `
`);
            return xo(0);
        }
        let t = new AbortController;
        let { markPrintModeSignalHandlersRegistered } = await import("/$bunfs/root/chunk-026kpbpf.js");
        process.once("SIGTERM", ()=>t.abort());
        process.once("SIGINT", ()=>t.abort());
        markPrintModeSignalHandlersRegistered();
        let p = await runDesignLoginSignIn({
            stdin: process.stdin,
            write: (S)=>Yu(S + `
`),
            signal: t.signal
        });
        return xo(p.ok ? 0 : 1);
    }));
    d.command("edit-chrome-settings", {
        hidden: true
    }).allowExcessArguments(false).description("Apply one Claude in Chrome settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(a(async (r)=>{
        if (process.stdin.isTTY) {
            return an("claude edit-chrome-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
        }
        let s = await g$t();
        if (s !== undefined) {
            return an(s);
        }
        let { runChromeSettingsEdit } = await import("/$bunfs/root/chunk-kq5j3nbf.js");
        let n = await l(4096);
        let o = n === null ? null : mt(n, false);
        if (o === null) {
            return an("claude edit-chrome-settings: stdin is not a JSON edit");
        }
        let t = await runChromeSettingsEdit(o, r);
        if (!t.ok) {
            return an(t.error);
        }
        await Yu(_({
            ok: true,
            written: t.written
        }) + `
`);
        return QL();
    }));
    d.command("drop-worktree-registrations", {
        hidden: true
    }).allowExcessArguments(false).description("Drop deleted worktrees' git registrations named as JSON on stdin (used by the VS Code extension)").requiredOption("--json", "Read the request as JSON from stdin").action(async ()=>{
        if (process.stdin.isTTY) {
            return an("claude drop-worktree-registrations reads one JSON request from stdin; it is run by the VS Code extension, not by hand");
        }
        let r = await g$t("claude drop-worktree-registrations cannot run from inside a Claude Code session; it is run by the VS Code extension");
        if (r !== undefined) {
            return an(r);
        }
        let { registrationDropsLine, runWorktreeRegistrationDrops } = await import("/$bunfs/root/chunk-t0w0tne5.js");
        let n = await l(262144);
        let o = n === null ? null : mt(n, false);
        if (o === null) {
            return an("claude drop-worktree-registrations: stdin is not a JSON request");
        }
        let t = await runWorktreeRegistrationDrops(o);
        if (!t.ok) {
            return an(t.error);
        }
        await Yu(registrationDropsLine(t.outcomes) + `
`);
        return QL();
    });
}
N();
function h$t(...d) {
    return vHs(...d);
}
async function vHs(d, a, r, s) {
    let { AppRoot } = await import("/$bunfs/root/chunk-py8mxp26.js");
    let { REPL } = await import("/$bunfs/root/chunk-p05zj3e0.js");
    function o(c) {
        let f = Er();
        Iln();
        let h = R(c.commands);
        let onCommandsChange = le((m)=>{
            h.current = m;
        }, []);
        let w = R(()=>{
            throw Error("engine: queryParams called before REPL registered builder");
        });
        let onQueryParamsChange = le((m)=>{
            w.current = m;
        }, []);
        let [g] = y(()=>C9e({
                run,
                queryParams: async (m)=>w.current(),
                commands: ()=>R3(h.current),
                models: ()=>Qre(G5()),
                unavailableModels: ()=>Qre(r$n()),
                agents: ()=>sqt(f.getState().agentDefinitions.activeAgents),
                account: mZt(),
                outputStyle: tDe(),
                mcpServers: ()=>efn(f.getState().mcp.clients),
                ambient: sUt,
                initialModel: ()=>{
                    let m = f.getState();
                    return Dt(m.mainLoopModelForSession ?? m.mainLoopModel ?? V_());
                },
                initialPermissionMode: ()=>Ec(f.getState().toolPermissionContext.mode),
                hostOwnsPermissionMode: true,
                hostOwnsModel: true
            }));
        P(()=>()=>g.close(), [
            g
        ]);
        return e(REPL, {
            ...c,
            engine: g,
            onCommandsChange,
            onQueryParamsChange
        });
    }
    let { session, storageV5, credentials, fleetNudgeStore = new rje({
        storageV5
    }) } = a;
    let messageQueue = p9e(storageV5);
    await aWo({
        onHealthy: ()=>ZDo(storageV5),
        storageV5
    });
    let store = Pin(session, a.initialState, (c)=>Eee(c, session, storageV5, credentials));
    try {
        await s(d, e(AppRoot, {
            session,
            storageV5,
            messageQueue,
            store,
            fleetNudgeStore,
            sessionHooks: a.sessionHooks,
            writesExitHandoff: true,
            getFpsMetrics: a.getFpsMetrics,
            stats: a.stats,
            keybindings: false,
            children: e(o, {
                ...r
            })
        }), session, storageV5, credentials);
    } catch (error) {
        await omn().catch(()=>false);
        throw error;
    }
}
export { g$t, ZDr, h$t, vHs };
