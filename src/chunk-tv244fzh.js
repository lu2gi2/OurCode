import { u6, Yon } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { ot, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Bn, gy, Qa, _m } from "/$bunfs/root/chunk-xgw72tt1.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { dwe, Vy, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a1, k, Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { hq, VY } from "/$bunfs/root/chunk-2d9a83dh.js";
import { Bs, nw } from "/$bunfs/root/chunk-223dyewd.js";
import { ft, ta } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { _1 } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { hxn, _kt, bkt, Rc } from "/$bunfs/root/chunk-rk838m7w.js";
import { P, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { mw } from "/$bunfs/root/chunk-n4gsaesa.js";
import { cLe, F_ } from "/$bunfs/root/chunk-2eh7h0gt.js";
import { cu } from "/$bunfs/root/chunk-hr39p2r8.js";
import { Er } from "/$bunfs/root/chunk-zby5bms5.js";
import { vme, pX } from "/$bunfs/root/chunk-yd9715tx.js";
import { isAbsolute, resolve, win32, join, sep } from "path";
import { stat } from "fs/promises";
import { homedir } from "os";
N();
function Iln() {
    let e = Er();
    let n = cu();
    P(()=>{}, [
        e,
        n
    ]);
}
const QDo = {
    CLAUDE_CODE_TUI_TRIAL: "fullscreen"
};
function v(fullscreenUpsellSeenCount, n) {
    Ae((r)=>{
        if ((r.fullscreenUpsellSeenCount ?? 0) >= fullscreenUpsellSeenCount) {
            return r;
        }
        return {
            ...r,
            fullscreenUpsellSeenCount
        };
    }, n);
}
function pKn(e) {
    v(bkt, e);
}
function NMr(e) {
    let n = hxn();
    if (n.upsellImpression !== undefined) {
        return n.upsellImpression;
    }
    let r = Math.min((ce().fullscreenUpsellSeenCount ?? 0) + 1, bkt);
    n.upsellImpression = r;
    v(r, e);
    return r;
}
async function ZDo(e) {
    let n = hxn();
    if (n.persisted || _kt() !== "fullscreen") {
        return false;
    }
    if (ft().tui !== undefined) {
        t("fullscreen trial: settings.tui was set explicitly during the trial — not persisting");
        return false;
    }
    if (!Rc()) {
        t("fullscreen trial: renderer is not fullscreen this session (auto-off) — not persisting");
        return false;
    }
    let r = false;
    let { error } = await ta("userSettings", (s)=>{
        r = s?.tui !== undefined;
        if (r) {
            return null;
        }
        return {
            tui: "fullscreen"
        };
    }, undefined, e);
    if (error) {
        c(error);
        f("tui_fullscreen_upsell_trial", "settings_write_failed");
        return false;
    }
    if (r) {
        t("fullscreen trial: settings.tui was set explicitly during the trial (seen inside the queued write) — not persisting");
        return false;
    }
    pKn(e);
    n.persisted = true;
    g("tui_fullscreen_upsell_trial");
    i("tengu_fullscreen_upsell_trial_persisted", {
        session_age_ms: Math.round(process.uptime() * 1000)
    });
    t("fullscreen trial: healthy — persisted settings.tui=fullscreen");
    return true;
}
function zLt(e, { replacesProcess }) {
    if (a1() === undefined && mw() && !(replacesProcess && Yon()) && k("tengu_resume_open_live_bg", true)) {
        return e.jobId;
    }
}
async function fKn(e) {
    let n = await w(e);
    f("resume_live_background_open", n.reason, {
        entrypoint: d(e.entrypoint)
    });
    return n;
}
async function w({ holder, entrypoint, prompt, storageV5 }) {
    if (!process.stdin.isTTY || !process.stdout.isTTY) {
        return {
            reason: "not_openable"
        };
    }
    let s = zLt(holder, {
        replacesProcess: true
    });
    if (s === undefined) {
        return {
            reason: "not_openable"
        };
    }
    try {
        await vme();
    } catch (error) {
        return {
            reason: "open_failed",
            detail: l(error),
            promptSent: false
        };
    }
    let promptSent = typeof prompt === "string" && prompt.trim() !== "";
    if (promptSent) {
        let a = prompt.trimStart();
        if (a.startsWith("!") || a.startsWith("/")) {
            return {
                reason: "prompt_undelivered",
                detail: `a prompt starting with ${a.startsWith("!") ? "!" : "/"} would run as a command there`,
                delivery: "failed"
            };
        }
        let [{ replyToJob }, { getJobDir, readJobState }] = await Promise.all([
            import("/$bunfs/root/chunk-4mjh6vdd.js"),
            import("/$bunfs/root/chunk-xzxajpnm.js")
        ]);
        if ((await readJobState(getJobDir(s), storageV5))?.block !== undefined) {
            return {
                reason: "prompt_undelivered",
                detail: "it is waiting on your answer to a question",
                delivery: "failed"
            };
        }
        process.stdout.write(ge.dim(`Sending your prompt to the background session (${s})\u2026
`));
        let p = await replyToJob(s, prompt, undefined, undefined, undefined, storageV5, {
            nextTurn: true
        });
        if (p) {
            let S = p.code === "ENOCONN" || p.code === "ETIMEOUT";
            return {
                reason: "prompt_undelivered",
                detail: S ? "its supervisor did not answer" : p.code === "ENOJOB" ? "it is no longer running" : p.err,
                delivery: p.queued === true ? "queued" : S ? "unconfirmed" : "failed"
            };
        }
    }
    try {
        return await $Mr(s, entrypoint, storageV5, {
            promptSent
        });
    } catch (error) {
        return {
            reason: "open_failed",
            detail: l(error),
            promptSent
        };
    }
}
async function $Mr(e, n, r, { promptSent = false } = {}) {
    g("resume_live_background_open", {
        entrypoint: d(n),
        prompt_sent: promptSent
    });
    return pX({
        args: [
            "attach",
            e
        ],
        preSpawn: ()=>process.stdout.write(ge.dim(promptSent ? `Sent your prompt to the background session (${e}); opening it\u2026
` : `Opening the background session (${e})\u2026
`))
    }, r);
}
async function e0o(e) {
    let n = _1();
    if (!n?.teamName || !n?.agentName) {
        t("[Reconnection] computeInitialTeamContext: No teammate context set (not a teammate)");
        return;
    }
    let { teamName, agentId, agentName } = n;
    let u = await F_(teamName, e);
    if (!u) {
        c(ot(Error(`[computeInitialTeamContext] Could not read team file for ${teamName}`), "[computeInitialTeamContext] Could not read team file"));
        return;
    }
    let a = cLe(teamName);
    let isLeader = !agentId;
    t(`[Reconnection] Computed initial team context for ${isLeader ? "leader" : `teammate ${agentName}`} in team ${teamName}`);
    return {
        teamName,
        teamFilePath: a,
        leadAgentId: u.leadAgentId,
        selfAgentId: agentId,
        selfAgentName: agentName,
        isLeader,
        teammates: {}
    };
}
async function t0o(e, teamName, selfAgentName, o) {
    let s = await F_(teamName, o);
    if (!s) {
        t(`[initializeTeammateContextFromSession] Could not read team file for ${teamName} (agent: ${selfAgentName}) \u2014 team may have been disbanded`, {
            level: "error"
        });
        return;
    }
    let u = s.members.find((b)=>b.name === selfAgentName);
    if (!u) {
        t(`[Reconnection] Member ${selfAgentName} not found in team ${teamName} - may have been removed`);
    }
    let selfAgentId = u?.agentId;
    let m = cLe(teamName);
    e((b)=>({
            ...b,
            teamContext: {
                teamName,
                teamFilePath: m,
                leadAgentId: s.leadAgentId,
                selfAgentId,
                selfAgentName,
                isLeader: false,
                teammates: {}
            }
        }));
    t(`[Reconnection] Initialized agent context from session for ${selfAgentName} in team ${teamName}`);
}
async function Oln(e, n, r = Vy) {
    if (!(isAbsolute(e) || win32.isAbsolute(e)) || Bn(e) || gy(e) || gy(win32.normalize(e)) || _m(e) || _m(resolve(e)) || Qa(e)) {
        t(`[${n}] session reported a network-path cwd \u2014 not adopting`, {
            level: "warn"
        });
        return false;
    }
    if (await dwe(e, u6(), r)) {
        t(`[${n}] session-reported cwd's local ancestry could not be verified as network-free \u2014 not adopting`, {
            level: "warn"
        });
        return false;
    }
    return true;
}
const D = 604800000;
const FMr = 1000;
function n0o(e) {
    let n = [
        `This session was opened by an external deep link in ${B(e.cwd)}`
    ];
    if (e.repo) {
        let r = e.lastFetch ? nw(e.lastFetch) : "never";
        let o = !e.lastFetch || Date.now() - e.lastFetch.getTime() > D;
        n.push(`Resolved ${e.repo} from local clones \xB7 last fetched ${r}${o ? " — CLAUDE.md may be stale" : ""}`);
    }
    if (e.prefillLength) {
        n.push(e.prefillLength > FMr ? `The prompt below (${Bs(e.prefillLength)} chars) was supplied by the link \u2014 scroll to review the entire prompt before pressing Enter.` : "The prompt below was supplied by the link — review carefully before pressing Enter.");
    }
    return n.join(`
`);
}
async function r0o(e) {
    let n = await VY(e);
    if (!n) {
        return;
    }
    let r = await hq(n);
    let [o, s] = await Promise.all([
        _(join(n, "FETCH_HEAD")),
        r ? _(join(r, "FETCH_HEAD")) : Promise.resolve(undefined)
    ]);
    if (o && s) {
        if (o > s) {
            return o;
        }
        return s;
    }
    return o ?? s;
}
async function _(e) {
    try {
        let { mtime } = await stat(e);
        return mtime;
    } catch  {
        return;
    }
}
function B(cwd) {
    let n = homedir();
    if (cwd === n) {
        return "~";
    }
    if (cwd.startsWith(n + sep)) {
        return `~${cwd.slice(n.length)}`;
    }
    return cwd;
}
export { Iln, QDo, pKn, NMr, ZDo, zLt, fKn, $Mr, e0o, t0o, Oln, FMr, n0o, r0o };
