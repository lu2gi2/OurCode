import { K, we, BR, cr, vwe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { x, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { Yy } from "/$bunfs/root/chunk-24agvrd9.js";
import { IZ, upt, i2n, Gm, pwe, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { vhn } from "/$bunfs/root/chunk-n2p0n845.js";
import { MT, $p, tf, JD } from "/$bunfs/root/chunk-9xenmz7v.js";
import { rPe } from "/$bunfs/root/chunk-tchztk88.js";
import { pL, gd, TJr, _k, SEt, wp, tS, dTe, w2, elr, PDe, Zn, z4t, zt } from "/$bunfs/root/chunk-kasbfbhj.js";
import { f0 } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { d_ } from "/$bunfs/root/chunk-y9c4grt0.js";
import { uu, E4 } from "/$bunfs/root/chunk-5w1ksvdy.js";
import { fno } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { rbn, obn, lMe } from "/$bunfs/root/chunk-8y1m7sq5.js";
import { bjr, IGo } from "/$bunfs/root/chunk-gavfct3e.js";
import { bhn } from "/$bunfs/root/chunk-wkqzrg3y.js";
import { Shn } from "/$bunfs/root/chunk-s6h2c1pa.js";
import { Ryt, Uhn } from "/$bunfs/root/chunk-mqqkgppx.js";
import { ZWt, ezt, O_t, tzt, vbn, Ebn } from "/$bunfs/root/chunk-z1cn7pjm.js";
import { Xp } from "/$bunfs/root/chunk-4m0tjfqq.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { spawnSync } from "child_process";
import { stat } from "fs/promises";
import { constants } from "os";
import { dirname, isAbsolute } from "path";
function g(cmd, r, env, cwd) {
    if (O() === "windows" || !isAbsolute(cmd)) {
        return;
    }
    let i;
    try {
        if (cwd) {
            i = process.cwd();
            Gm(cwd);
        }
        process.execve(cmd, r, Shn(env));
        t(`execve(${cmd}) returned \u2014 falling back to spawn`, {
            level: "warn"
        });
    } catch (error) {
        t(`execReplaceProcess: ${l(error)} \u2014 falling back to spawn`, {
            level: "warn"
        });
    } finally{
        if (i !== undefined) {
            try {
                Gm(i);
            } catch  {}
        }
    }
}
async function R(e) {
    let r = gd();
    if (!r) {
        return false;
    }
    return w(r, e);
}
async function w(e, r) {
    if (await stat(e).then((i)=>i.size > 0, ()=>false)) {
        return true;
    }
    let o = Xp(e, r);
    if (o === undefined) {
        return false;
    }
    try {
        let i = await o.backend.statMeta(o.key);
        if (!i.ok && i.error.code !== "NotFound") {
            t(`transcriptHasBytes: backend statMeta failed: ${i.error.code}`);
        }
        return i.ok && i.value.size > 0;
    } catch (error) {
        c(error);
        return false;
    }
}
async function N6(e, r, { responseStreaming = false } = {}, o) {
    let i = obn(r);
    if (!i || responseStreaming) {
        return i;
    }
    try {
        await _k([
            ...e,
            zt(rbn[r], "warning")
        ], undefined, undefined, undefined, o);
        if (r === "relaunch") {
            await Tj(e, o);
        }
    } catch (error) {
        lMe();
        throw error;
    }
    return true;
}
async function Q9n(e, { responseStreaming = false } = {}, a) {
    try {
        await N6(e, "process_exit", {
            responseStreaming
        }, a);
    } catch (error) {
        c(error);
    }
}
async function Sme(e, r = {}, a, removeWorktree) {
    await Q9n(e, r, a);
    if (removeWorktree) {
        await Zn(0, "prompt_input_exit", {
            removeWorktree
        });
    } else {
        await Zn(0, "prompt_input_exit");
    }
}
const f = "the automatic continue at the usage-limit reset was cancelled (/rate-limit-options to wait again)";
const _ = `${f.charAt(0).toUpperCase()}${f.slice(1)}.`;
const A = "Automatic continue at the usage-limit reset was cancelled.";
function wme(e, r) {
    if (r.includes(f) || r.includes(_) || r.includes(A)) {
        return `${e} ${_}`;
    }
    return e;
}
function uX(e, r, { as = "sentence", exitsAfterward = false } = {}) {
    lMe();
    if (!r) {
        return e;
    }
    if (as === "clause") {
        return `${e} \u2014 ${f}`;
    }
    return `${e}
${exitsAfterward ? A : _}`;
}
function UQe(e, r, a) {
    return pX(r, a).catch((o)=>{
        if (o instanceof Error) {
            o.message = uX(o.message, e, {
                as: "clause"
            });
        } else {
            lMe();
        }
        throw o;
    });
}
async function Tj(e, r) {
    let a = FWe(e)?.uuid;
    try {
        if (a) {
            await SEt(a, undefined, r);
        } else if (TJr() && await R(r)) {
            await SEt(null, undefined, r);
        }
    } catch (error) {
        c(error);
    }
}
function FWe(e) {
    return e.findLast((r)=>(r.type === "user" || r.type === "assistant") && tS(r) && !pL(r.uuid));
}
const v = "Claude Code couldn't restart. Your conversation is saved. Start Claude Code again and run /resume to pick it up.";
const D = "Claude Code couldn't restart. Start Claude Code again.";
async function vme() {
    if (await JD()) {
        return;
    }
    m("agent_launcher", "relaunch_launcher_not_runnable");
    throw new x(tf() ?? `${MT}: launcher \`${$p()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then retry; this session was left running`, "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable");
}
async function pX(e = {}, r) {
    let { cmd, prefixArgs } = E4(e.launcher ?? uu());
    await vme();
    let i = e.extraArgs ?? [];
    let s;
    if (e.args) {
        s = e.args;
    } else if (e.freshIfNoTranscript && !await R(r)) {
        s = i;
    } else {
        s = [
            "--resume",
            K(),
            ...i
        ];
    }
    let h = s[0] === "--resume" && !e.args;
    z4t();
    dTe();
    elr();
    await Promise.all([
        Ut(wp(), 30000, "flush timeout (relaunch)").catch(()=>{}),
        Ut(upt(), IZ, "cleanup timeout").catch(()=>{}).then(()=>Ut(PDe(), 1000, "analytics flush timeout").catch(()=>{}))
    ]);
    e.preSpawn?.();
    let env = {
        ...process.env
    };
    delete env.CLAUDE_CODE_TUI_JUST_SWITCHED;
    delete env.CLAUDE_CODE_TUI_TRIAL;
    delete env.CLAUDE_BRIDGE_REATTACH_SESSION;
    delete env.CLAUDE_BRIDGE_REATTACH_SEQ;
    delete env.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY;
    delete env.CLAUDE_BRIDGE_REATTACH_GROUPING;
    delete env.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT;
    delete env.CLAUDE_BRIDGE_REATTACH_OWNER_ORG;
    delete env.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL;
    delete env[fno];
    delete env.CLAUDE_BG_WORKSPACE_TRUSTED;
    delete env.CLAUDE_BG_CARRIED_PROMPTS_SHA256;
    delete env[bjr];
    if (BR() && vwe()) {
        env.CLAUDE_BG_WORKSPACE_TRUSTED = "1";
        Object.assign(env, await IGo());
    }
    delete env[Ryt];
    delete env[ZWt];
    delete env[O_t];
    delete env[tzt];
    delete env[ezt];
    if (e.proactivity && !e.args) {
        Object.assign(env, vbn(e.proactivity), Ebn(e.proactivity));
    }
    Object.assign(env, e.env);
    for (let d of e.dropEnv ?? []){
        delete env[d];
    }
    Object.assign(env, Uhn());
    let cwd = _hn();
    await p();
    vhn();
    g(cmd, [
        cmd,
        ...prefixArgs,
        ...s
    ], env, cwd);
    for (let d of [
        "SIGINT",
        "SIGTERM",
        "SIGHUP"
    ]){
        process.removeAllListeners(d);
        process.on(d, ()=>{});
    }
    await p();
    bhn();
    let u = spawnSync(cmd, [
        ...prefixArgs,
        ...s
    ], {
        stdio: "inherit",
        env,
        cwd
    });
    process.removeAllListeners("beforeExit");
    process.removeAllListeners("exit");
    if (u.error) {
        t(`Failed to relaunch: ${u.error.message}`, {
            level: "error"
        });
        await p();
        w2(h ? v : D);
        Yy("relaunch_spawn_error");
        process.exit(1);
    }
    if (u.signal) {
        process.removeAllListeners(u.signal);
        process.kill(process.pid, u.signal);
        process.exit(128 + (constants.signals[u.signal] ?? 0));
    }
    process.exit(u.status ?? (u.signal ? 1 : 0));
}
function _hn() {
    let e = gd();
    let r = we();
    if (e && dirname(e) === d_(r)) {
        return r;
    }
    return cr();
}
async function p() {
    await Promise.all([
        Ut(pwe(), 2000, "debug flush timeout (relaunch)").catch(()=>{}),
        Ut(rPe(), 2000, "diag flush timeout (relaunch)").catch(()=>{}),
        Ut(i2n(), 2000, "pre-exit flush timeout (relaunch)").catch(()=>{}),
        Ut(f0(), 2000, "write queue drain timeout (relaunch)").catch(()=>{})
    ]);
}
export { N6, Q9n, Sme, wme, uX, UQe, Tj, FWe, vme, pX, _hn };
