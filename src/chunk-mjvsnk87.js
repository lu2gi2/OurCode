import { l, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Nr, FP } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { pt } from "/$bunfs/root/chunk-223dyewd.js";
import { wM } from "/$bunfs/root/chunk-ghmnmzfd.js";
function V0o(e, n, o) {
    if (e !== undefined && e.prompt !== null && o.stdin && o.stdout && (n.outputFormat === undefined || n.outputFormat === "text") && n.sdkUrl === undefined && n.jsonSchema === undefined && !n.includePartialMessages && !n.replayUserMessages && n.maxTurns === undefined && n.maxBudgetUsd === undefined && n.resumeSessionAt === undefined && n.resumeDropsTurn === undefined && n.rewindFiles === undefined) {
        return {
            open: e.open,
            prompt: e.prompt
        };
    }
}
const MNt = "Can't open — this session is running in another terminal";
const u = 60;
const p = /["\u02BA\u02EE\u05F4\u201C-\u201F\u2033\u2036\u301D-\u301F\uFF02]/g;
function nmt(e) {
    let n = FP(Nr(e)).replace(p, "'");
    return `"${pt(n, u)}"`;
}
function Sfe({ title, holder, canFork, handoff }) {
    let { jobId } = holder;
    let r = title ? nmt(title) : "That session";
    let d = jobId ? `Run \`claude attach ${jobId}\` to open it, or \`claude stop ${jobId}\` first to resume it here.` : "Run `claude agents` to find it and open it, or stop it there first to resume it here.";
    let a = canFork ? " Add --fork-session to branch off a copy instead." : "";
    return `${r} is running in the background${jobId ? ` (${jobId})` : ""}.${a4n(handoff)} ${d}${a}`;
}
async function F9(e, n) {
    let o = (await W1e(e)).find((i)=>i.kind !== "interactive");
    if (!o) {
        return null;
    }
    let jobId = o.jobId !== undefined && wM.test(o.jobId) && await m(o.jobId, e, n) ? o.jobId : undefined;
    return {
        kind: o.kind,
        jobId
    };
}
async function m(jobId, n, o) {
    try {
        let { getJobDir, readJobState } = await import("/$bunfs/root/chunk-xzxajpnm.js");
        let r = await readJobState(getJobDir(jobId), o);
        let d = n.toLowerCase();
        return r !== null && (r.sessionId.toLowerCase() === d || r.resumeSessionId?.toLowerCase() === d);
    } catch (error) {
        if (jt(error)) {
            t(`[resume] job state unreadable: ${l(error)}`, {
                level: "warn"
            });
        } else {
            c(error);
        }
        return false;
    }
}
async function W1e(e, n) {
    let o = n?.rejectUnreadable ? await (await import("/$bunfs/root/chunk-p30zpwzv.js")).listAllLiveSessions(undefined, {
        rejectUnreadable: true
    }) : await import("/$bunfs/root/chunk-p30zpwzv.js").then((r)=>r.listAllLiveSessions()).catch(()=>[]);
    let s = e.toLowerCase();
    let i = [];
    for (let r of o){
        if (r.sessionId?.toLowerCase() !== s || r.pid === process.pid || !r.kind) {
            continue;
        }
        if (r.kind === "interactive" && r.parkedJobId !== undefined) {
            continue;
        }
        i.push({
            kind: r.kind,
            jobId: r.jobId,
            pid: r.pid
        });
    }
    return i;
}
function a4n(e) {
    switch(e?.reason){
        case undefined:
        case "not_openable":
            return "";
        case "prompt_undelivered":
            return ({
                queued: " Your prompt was saved and will be sent to it when you next restart it.",
                unconfirmed: ` Your prompt may not have reached it: ${e.detail}.`,
                failed: ` Your prompt was not sent to it: ${e.detail}.`
            })[e.delivery];
        case "open_failed":
            if (e.promptSent) {
                return ` Your prompt was sent to it, but it could not be opened here: ${e.detail}.`;
            }
            return ` It could not be opened here: ${e.detail}.`;
    }
}
export { V0o, MNt, nmt, Sfe, F9, W1e, a4n };
