import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { yc, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { K, P0, E9 } from "/$bunfs/root/chunk-ctt36bn8.js";
import { fp, Bb, X1, fl, c } from "/$bunfs/root/chunk-etbngzss.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { lo } from "/$bunfs/root/chunk-5vhepr4t.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { Nt, uue, Ci } from "/$bunfs/root/chunk-0ycjphb5.js";
import { tSr } from "/$bunfs/root/chunk-xpqgtv5j.js";
import { Oc } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { k3e } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { NR } from "/$bunfs/root/chunk-z0brrd3r.js";
import { Rs } from "/$bunfs/root/chunk-w1n7t02f.js";
import { Z5e, lPe, YUe } from "/$bunfs/root/chunk-3fj60qgx.js";
import { x8 } from "/$bunfs/root/chunk-peahjaep.js";
import { Sc } from "/$bunfs/root/chunk-18a8x2hz.js";
import { oce, qJ, sce, Mrt, nm, Z6t, Lne } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { d_ } from "/$bunfs/root/chunk-y9c4grt0.js";
import { LM } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { de, W_e } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { jAn, Uvt, WAn, gd, Na, hne, _k, wp, r4 } from "/$bunfs/root/chunk-kasbfbhj.js";
import { H$ } from "/$bunfs/root/chunk-rhjwzamj.js";
import { $p } from "/$bunfs/root/chunk-9xenmz7v.js";
import { s5, uu, E4 } from "/$bunfs/root/chunk-5w1ksvdy.js";
import { N6, wme, UQe, Tj, FWe, vme, _hn } from "/$bunfs/root/chunk-yd9715tx.js";
import { gjr, xGo, COe } from "/$bunfs/root/chunk-w5h19esn.js";
import { dX } from "/$bunfs/root/chunk-07se88jv.js";
import { spawn } from "child_process";
import { randomUUID } from "crypto";
import { existsSync, statSync } from "fs";
import { realpath } from "fs/promises";
import { homedir } from "os";
import { basename, dirname, join } from "path";
async function X9n() {
    let r = await yc("claude");
    let e = $p()[0];
    let [n, u] = await Promise.all([
        r ? realpath(r).catch(()=>r) : null,
        e ? realpath(e).catch(()=>e) : null
    ]);
    if (r && (u === null || n !== u)) {
        return E4({
            cmd: r,
            prefixArgs: [],
            target: r
        });
    }
    return uu();
}
function Y(r) {
    switch(r.kind){
        case "newer":
            return `Successfully updated from ${({
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }).VERSION} to version ${r.version}`;
        case "older":
            return `Successfully downgraded from ${({
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.296",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-09T01:31:52Z",
                GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "default"
            }).VERSION} to version ${r.version}`;
        case "same":
        case "unknown":
            return "Session resumed";
    }
}
const J = Symbol("staff, over Remote Control");
function q(r) {
    if (H$(r)) {
        return "not_owner";
    }
    let r_submittedFromComposer = r.submittedFromComposer;
    if (dX(r_submittedFromComposer)) {
        return r_submittedFromComposer;
    }
    return "not_typed";
}
function z(r, ...e) {
    if (r !== J && !dX(r)) {
        throw Error("Can't restart automatically. Type /restart at the prompt.");
    }
    return UQe(...e);
}
const B = (content)=>({
        type: "system",
        subtype: "local_command",
        content,
        level: "info",
        timestamp: new Date().toISOString(),
        uuid: randomUUID(),
        isMeta: false
    });
const M = ze(new Map, (r)=>r.clear());
function Q(messages, storageV5) {
    let n = (w, p)=>{
        i("tengu_update_refused", {
            foreground: d(w)
        });
        return p;
    };
    let u = "To use the installed version, exit and start Claude Code again";
    if (FWe(messages) !== undefined) {
        let p = Na();
        let g = gd();
        if (p || g === null) {
            return n(p ? "saving_off" : "not_written", "Can't restart this session. It isn't saved to disk, so a restart would lose it. Nothing was changed. To use the installed version, exit and start Claude Code again. You may not be able to resume this session.");
        }
        if (hne() !== 0) {
            return n("write_failed", "Couldn't save this session to disk, so nothing was restarted. If you exit now, you may not be able to resume all of it.");
        }
        if (storageV5 === undefined) {
            let o = M.get(g);
            if (o === undefined) {
                try {
                    o = statSync(g).size > 0 ? undefined : "empty";
                } catch  {
                    o = "missing";
                }
            }
            if (o !== undefined) {
                M.set(g, o);
                return n("gone", o === "empty" ? "Can't restart this session. It isn't saved to disk, so a restart would lose it. Nothing was changed. To use the installed version, exit and start Claude Code again. You may not be able to resume this session." : "Can't restart this session. Its saved file can't be found. It may have been moved or deleted. You can keep working here, or run /export to save a copy of the conversation before you exit.");
            }
        }
    }
    let _ = _hn();
    if (!existsSync(_)) {
        return n("no_folder", `Can't restart this session here. Its folder, ${LM(Rs(_))}, can't be found. Nothing was changed. To use the installed version, exit and start Claude Code in the folder you want to work in, then run /resume and press Ctrl+A to show all projects.`);
    }
    if (Sc()?.bridgeSessionId) {
        return n("remote_control", "Can't restart while Remote Control is connected. To use the installed version, exit and start Claude Code again, then run /resume.");
    }
    if (!existsSync(uu().target)) {
        return n("no_launcher", "Can't restart. The installed version wasn't found. To check your installs, run /doctor.");
    }
    let y = WAn(jAn);
    if (y !== undefined) {
        return n("above_max_version", `Can't restart on the installed version. Version ${y} is on hold, so this session is staying on ${{
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION}. Nothing was changed.`);
    }
}
const ojs = async (r, e)=>{
    let n = q(e);
    if (n === "not_owner") {
        i("tengu_update_refused", {
            not_owner: true
        });
        i("tengu_update_refused_not_owner", {});
        return {
            type: "text",
            value: "/restart isn't available over Remote Control."
        };
    }
    let u = Nt() ? a.CLAUDE_JOB_DIR : undefined;
    if (Nt() && (!uue() || !u)) {
        i("tengu_update_refused", {
            bg_session: true
        });
        let t = uue() ? null : nm();
        return {
            type: "text",
            value: t ? `This is a background session \u2014 press \u2190 to detach, then run \`claude respawn ${t}\` to restart it on the latest build.` : "This is a background session — press ← to detach, then run `claude respawn <id>` to restart it on the latest build (the id is in the agents view)."
        };
    }
    if (!u) {
        let t = gd();
        let S = join(d_(_hn()), `${K()}.jsonl`);
        if (t && t !== S) {
            i("tengu_update_refused", {
                transcript_path_drift: true
            });
            let h = LM(Rs(_hn()));
            let C = dirname(t);
            let f = await YUe(t);
            let s = f && (Z5e(f.tail, "relocated", "relocatedCwd") ?? lPe(f.head, "cwd"));
            return {
                type: "text",
                value: `Cannot /update \u2014 ${s && d_(s) === C ? `this session belongs to ${LM(Rs(s))} but is running in ${h}` : `this session is running in ${h} but its transcript is in ${LM(Rs(C))}`}. Restart manually with --resume to continue on the latest version.`
            };
        }
    }
    let _ = (deferred)=>{
        if (!COe(e.taskRegistry.all())) {
            return;
        }
        i("tengu_update_refused", {
            active_tasks: true,
            ...deferred && {
                deferred
            }
        });
        return "Can't restart while work is running in the background — wait for it to finish (or stop it via /tasks), then try again.";
    };
    let y = (t)=>{
        let S = qJ(de(e), P0());
        if (S.length === 0) {
            return _(t);
        }
        i("tengu_update_refused", {
            uncarriable: true
        });
        let h = Na() ? "" : " (add --continue to return to this conversation)";
        return `Can't switch to the new version from inside this session \u2014 it has restrictions a restart can't carry over (${S.join("; ")}). Nothing was changed; exit and start claude again for the new version${h}.`;
    };
    let w = u ? _() : y();
    if (w !== undefined) {
        return {
            type: "text",
            value: w
        };
    }
    if (u) {
        let t = basename(u);
        await Tj(e.messages, e.storageV5);
        if (!await Ut(wp(), 30000, "session flush").then(()=>true, ()=>false)) {
            i("tengu_update_refused", {
                bg_flush_failed: true
            });
            return {
                type: "text",
                value: "Couldn't save the session to disk, so nothing was restarted — try /restart again in a moment."
            };
        }
        let h = await X9n();
        let C = _(true);
        if (C !== undefined) {
            return {
                type: "text",
                value: C
            };
        }
        let env = {
            ...process.env
        };
        for (let s of k3e){
            delete env[s];
        }
        delete env.CLAUDE_JOB_DIR;
        for (let s of Object.keys(env)){
            if (s.startsWith("CLAUDE_BG_")) {
                delete env[s];
            }
        }
        i("tengu_update_bg_respawn", {
            carried_comment_monitor: gjr() && xGo(e.taskRegistry.all())
        });
        try {
            let s = spawn(h.cmd, [
                ...h.prefixArgs,
                "respawn",
                t
            ], {
                detached: true,
                stdio: "ignore",
                windowsHide: true,
                env,
                cwd: homedir()
            });
            NR(s.pid);
            s.on("error", (O)=>{
                c(O);
            });
            s.unref();
        } catch (error) {
            c(error);
            i("tengu_update_refused", {
                bg_spawn_failed: true
            });
            return {
                type: "text",
                value: `Couldn't restart automatically \u2014 press \u2190 to detach, then run \`claude respawn ${t}\` to restart it on the latest build.`
            };
        }
        return {
            type: "text",
            value: `Restarting this session on the latest version\u2026 If it doesn't come back within a minute, run \`claude respawn ${t}\` from a terminal.`
        };
    }
    if (n === "not_typed") {
        i("tengu_update_refused", {
            foreground: d(n)
        });
        i("tengu_update_refused_not_typed", {});
        return {
            type: "text",
            value: "Can't restart automatically. Type /restart at the prompt."
        };
    }
    let p = Q(e.messages, e.storageV5);
    if (p !== undefined) {
        return {
            type: "text",
            value: p
        };
    }
    await Tj(e.messages, e.storageV5);
    let g = y(true);
    if (g !== undefined) {
        return {
            type: "text",
            value: g
        };
    }
    let toolPermissionContext = de(e);
    let extraArgs = [
        ...oce(toolPermissionContext, W_e(e)),
        ...sce(toolPermissionContext, E9())
    ];
    let E = Oc() ? undefined : e.getAppState().teamContext?.teamName;
    await vme();
    let T = y(true);
    if (T !== undefined) {
        return {
            type: "text",
            value: T
        };
    }
    let m = Sc();
    let k = m?.bridgeSessionId;
    let P = m?.getLastSequenceNum();
    let D = m?.outboundOnly;
    let F = m?.sessionGroupingId;
    if (k) {
        e.setAppState((t)=>{
            if (t.replBridgeSkipNextArchive) {
                return t;
            }
            return {
                ...t,
                replBridgeSkipNextArchive: true
            };
        });
        m.writeSdkMessages([
            tSr("Switching to latest Claude Code… reconnecting", K())
        ]);
        await Ut(m.flush(), 2000, "bridge flush").catch(()=>{});
        await m.teardown({
            skipArchive: true
        });
    }
    let v = {};
    if (E) {
        v.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME = E;
    }
    Object.assign(v, x8());
    Object.assign(v, Mrt(toolPermissionContext.additionalWorkingDirectories));
    Object.assign(v, Lne(k, P, D, F, Z6t(m, r4())) ?? {});
    let launcher = uu();
    let R = await N6(e.messages, "relaunch", {}, e.storageV5);
    let b = FWe(e.messages) !== undefined;
    if (b && !R) {
        try {
            await _k([
                ...e.messages,
                B(`<${fp}>/restart</${fp}>
<${Bb}>restart</${Bb}>
<${X1}></${X1}>`),
                B(`<${fl}>${Y(Uvt(launcher.target))}</${fl}>`)
            ], undefined, undefined, undefined, e.storageV5);
        } catch (error) {
            c(error);
        }
        await Tj(e.messages, e.storageV5);
    }
    i(b ? "tengu_update_relaunch" : "tengu_update_relaunch_fresh", {
        from_version: Ci({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }.VERSION),
        target_version: Ci(jAn(launcher.target)),
        native_install: s5()
    });
    try {
        return await z(n, R, {
            launcher,
            freshIfNoTranscript: !b,
            extraArgs,
            proactivity: {
                proactivityLevel: e.getProactivityLevel(),
                toolPermissionContext
            },
            env: Object.keys(v).length > 0 ? v : undefined,
            preSpawn: ()=>{
                process.stdout.write(b && hne() !== 0 ? ge.dim(`
Claude's last response couldn't be saved, so it may be missing.

`) : `
`);
            }
        }, e.storageV5);
    } catch (error) {
        if (!R) {
            throw error;
        }
        c(error);
        return {
            type: "text",
            value: lo(e.session) ? wme("Couldn't restart Claude Code (detail withheld on this connection).", l(error)) : `Couldn't restart Claude Code \u2014 ${l(error)}.`
        };
    }
};
export { X9n, ojs };
