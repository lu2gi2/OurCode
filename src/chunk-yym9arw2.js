import { y2n } from "/$bunfs/root/chunk-qch5xj2a.js";
import { K, vd, cr, lU, L2n, zPo, Km, m6 } from "/$bunfs/root/chunk-ctt36bn8.js";
import { ot, Lq, W, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { St, _, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { MP, XUe, e8e, Ph } from "/$bunfs/root/chunk-3fj60qgx.js";
import { IFe, Hw, Aue, nse } from "/$bunfs/root/chunk-t0b6khh6.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { FA, vAe, oMn, S5t, Boo, cfr, sMn, e_e, Dcs, c5, w5t, iMn, Lcs } from "/$bunfs/root/chunk-tzz3htys.js";
import { gC, hq } from "/$bunfs/root/chunk-2d9a83dh.js";
import { ea } from "/$bunfs/root/chunk-75wzvwyz.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { _a } from "/$bunfs/root/chunk-g05qxjrj.js";
import { ln } from "/$bunfs/root/chunk-pj42g5eb.js";
import { o, E, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { ye, yDt } from "/$bunfs/root/chunk-tybndaby.js";
import { join, dirname } from "path";
import { mkdir, readFile, unlink, writeFile, appendFile } from "fs/promises";
const Oe = [
    "**/.claude/scheduled_tasks.lock",
    "**/.claude/scheduled_tasks.json",
    "**/.claude/routines/.state/",
    "**/.claude/worktrees/",
    "**/.claude/checkpoints/",
    "**/.claude/mailbox/",
    "**/.claude/agent-registry.json",
    "**/.claude/agent-memory-local",
    "**/.claude/first-run",
    "**/.claude/assistant-daemon-state.json"
];
const we = "# claude-code-runtime";
async function Ce(s) {
    if (!ea().claim(`claude_runtime_exclude_ensured:${s}`)) {
        return;
    }
    try {
        let n = await gC(s);
        if (!n) {
            return;
        }
        let a = await hq(n) ?? n;
        let y = join(a, "info", "exclude");
        let S = "";
        try {
            S = await readFile(y, "utf-8");
            if (S.includes(we)) {
                return;
            }
        } catch (error) {
            if (v(error) !== "ENOENT") {
                throw error;
            }
            await mkdir(join(a, "info")).catch((M)=>{
                if (v(M) !== "EEXIST") {
                    throw M;
                }
            });
        }
        let l = S && !S.endsWith(`
`) ? `
` : "";
        let h = [
            we,
            ...Oe,
            ""
        ].join(`
`);
        await appendFile(y, l + h);
    } catch (error) {
        t(`ensureClaudeRuntimeFilesExcluded: ${error}`);
    }
}
const De = join(".claude", "scheduled_tasks.lock");
const Ne = p(()=>u({
        sessionId: o(),
        pid: E(),
        procStart: o().optional(),
        acquiredAt: E()
    }));
function G(s) {
    return join(s ?? cr(), De);
}
async function Fe(s) {
    let n;
    try {
        n = await readFile(G(s), "utf8");
    } catch  {
        return;
    }
    let a = Ne().safeParse(mt(n, false));
    if (a.success) {
        return a.data;
    }
}
async function Ie(s, n) {
    let a = G(n);
    let y = _(s);
    try {
        await writeFile(a, y, {
            flag: "wx"
        });
        return true;
    } catch (error) {
        let l = v(error);
        if (l === "EEXIST") {
            return false;
        }
        if (l === "ENOENT") {
            await mkdir(dirname(a), {
                recursive: true
            });
            try {
                await writeFile(a, y, {
                    flag: "wx"
                });
                return true;
            } catch (err) {
                if (v(err) === "EEXIST") {
                    return false;
                }
                throw err;
            }
        }
        throw error;
    }
}
function se(s, n) {
    s.unregisterCleanup?.();
    s.unregisterCleanup = St(async ()=>{
        await N(s, n);
    });
}
async function de(s, n) {
    let a = n?.dir;
    if (oMn(a)) {
        return false;
    }
    await Ce(a ?? cr());
    let sessionId = n?.lockIdentity ?? K();
    let S = {
        sessionId,
        pid: process.pid,
        procStart: nse(),
        acquiredAt: Date.now()
    };
    if (await Ie(S, a)) {
        s.lastBlockedBy = undefined;
        se(s, n);
        t(`[ScheduledTasks] acquired scheduler lock (PID ${process.pid})`);
        return true;
    }
    let l = await Fe(a);
    if (l?.sessionId === sessionId) {
        if (l.pid !== process.pid) {
            await writeFile(G(a), _(S));
            se(s, n);
        }
        return true;
    }
    if (l && _a(l.pid) && await Hw(l.pid, l.procStart)) {
        if (s.lastBlockedBy !== l.sessionId) {
            s.lastBlockedBy = l.sessionId;
            t(`[ScheduledTasks] scheduler lock held by session ${l.sessionId} (PID ${l.pid})`);
        }
        return false;
    }
    if (l) {
        t(`[ScheduledTasks] recovering stale scheduler lock from PID ${l.pid}`);
    }
    await unlink(G(a)).catch(()=>{});
    if (await Ie(S, a)) {
        s.lastBlockedBy = undefined;
        se(s, n);
        return true;
    }
    return false;
}
async function N(s, n) {
    s.reset();
    let a = n?.dir;
    try {
        a ??= cr();
    } catch  {
        return;
    }
    let y = n?.lockIdentity ?? K();
    let S = await Fe(a);
    if (!S || S.sessionId !== y) {
        return;
    }
    try {
        await unlink(G(a));
        t("[ScheduledTasks] released scheduler lock");
    } catch  {}
}
class ce {
    unregisterCleanup = undefined;
    lastBlockedBy = undefined;
    reset() {
        this.unregisterCleanup?.();
        this.unregisterCleanup = undefined;
        this.lastBlockedBy = undefined;
    }
}
const be = import.meta.require("/$bunfs/root/chunk-qmc4dvqj.js");
const ze = 1000;
const stabilityThreshold = 300;
const qe = 5000;
function He(s, n, recurringMaxAgeMs) {
    if (recurringMaxAgeMs === 0) {
        return false;
    }
    return Boolean(s.recurring && !s.permanent && n - s.createdAt >= recurringMaxAgeMs);
}
async function Je(s, n, a) {
    let y = Ph(a);
    let S = ie();
    let l = new Set;
    let h = new Set;
    for (let { createdBySessionId } of s){
        if (createdBySessionId !== undefined && createdBySessionId !== n) {
            h.add(createdBySessionId);
        }
    }
    await Promise.all(Array.from(h, async (I)=>{
        if (MP(I) === null) {
            return;
        }
        if (await S.lstat(join(y, `${I}.jsonl`)).then((z)=>z.isFile(), (z)=>{
            let B = v(z);
            if (B !== "ENOENT" && B !== "ENOTDIR") {
                t(`[ScheduledTasks] could not look for a transcript of task creator ${I} (${B}); treating it as not found`);
            }
            return false;
        })) {
            l.add(I);
        }
    }));
    if (l.size < h.size) {
        t(`[ScheduledTasks] found no transcript in ${y} for ${h.size - l.size} other session(s) named in scheduled_tasks.json (a file copied from another checkout looks like this); this session will not run their tasks`);
    }
    return l;
}
function lOr({ onFire, isLoading, assistantMode = false, onFireTask, onMissed, dir, lockIdentity, getJitterConfig, isKilled, filter, getExtraTasks, leaseFileTasks = ()=>true }) {
    let j = dir || lockIdentity ? {
        dir,
        lockIdentity
    } : undefined;
    let A = new ce;
    let X = dir !== undefined ? lockIdentity : K();
    let Y = new Set;
    let Z = null;
    let ee = [];
    let re = [];
    let F = new Map;
    let le = new Set;
    let q = new Set;
    let R = null;
    let H = null;
    let O = null;
    let D = null;
    let x = false;
    let L = false;
    let ue = new Set;
    let fe = "";
    let te = new Map;
    function Pe(createdByPid, createdByProcStart) {
        if (!_a(createdByPid)) {
            te.delete(createdByPid);
            return true;
        }
        if (createdByProcStart === undefined) {
            return false;
        }
        let at = Date.now();
        let T = te.get(createdByPid);
        if (!T || at - T.at >= 60000) {
            T = {
                at,
                token: IFe(createdByPid)
            };
            te.set(createdByPid, T);
        }
        return T.token !== undefined && T.token !== createdByProcStart;
    }
    function he(r) {
        return XUe(r, e8e());
    }
    function Le(r) {
        if (r.createdInProject !== undefined) {
            return he(r.createdInProject) === fe;
        }
        return r.createdBySessionId !== undefined && ue.has(r.createdBySessionId);
    }
    function ke(r) {
        if (r.createdBySessionId === undefined) {
            return L;
        }
        if (r.createdBySessionId === X) {
            return true;
        }
        if (Y.has(r.createdBySessionId) && r.createdByPid === process.pid && (r.createdByProcStart === undefined ? r.createdAt >= performance.timeOrigin : r.createdByProcStart === Aue.token)) {
            return true;
        }
        return L && Le(r) && (r.createdByPid === undefined || Pe(r.createdByPid, r.createdByProcStart));
    }
    async function me(r) {
        let k = Boo(dir) ? [] : await S5t(dir);
        let w = getExtraTasks ? await getExtraTasks().catch((d)=>{
            if (ea().claim("cron_extra_tasks_load_bad")) {
                m("routine_register_trigger", "extra_tasks_load_failed");
            }
            t(`[ScheduledTasks] getExtraTasks failed: ${d}`);
            return [];
        }) : [];
        let T = dir ?? cr();
        let b = await Je(k.filter((d)=>d.createdInProject === undefined), X, T);
        if (x) {
            return;
        }
        ee = k;
        re = w;
        ue = b;
        fe = he(T);
        if (!r) {
            return;
        }
        let e = false;
        for (let d of k){
            if (X !== undefined && d.createdBySessionId === X && d.createdByPid !== process.pid) {
                d.createdByPid = process.pid;
                d.createdByProcStart = nse();
                e = true;
            }
        }
        if (e) {
            await sMn(k, dir).catch((d)=>t(`[ScheduledTasks] failed to refresh task pids: ${d}`));
        }
        let J = Date.now();
        let C = Lcs(k, J).filter((d)=>!d.recurring && !le.has(d.id) && (!filter || filter(d)) && ke(d));
        if (C.length > 0) {
            for (let d of C){
                le.add(d.id);
                F.set(d.id, Infinity);
            }
            i("tengu_scheduled_task_missed", {
                count: C.length,
                taskIds: yDt(C.map((d)=>d.id))
            });
            try {
                if (onMissed) {
                    onMissed(C);
                } else {
                    onFire(Ke(C));
                }
            } catch (error) {
                t(`[ScheduledTasks] could not surface ${C.length} missed one-shot task(s); they stay in scheduled_tasks.json for a later session`, {
                    level: "error"
                });
                c(Ee(error, "handler for missed scheduled tasks threw (message not reported: it may contain user text)"));
                return;
            }
            e_e(C.map((d)=>d.id), dir).catch((d)=>t(`[ScheduledTasks] failed to remove missed tasks: ${d}`));
            t(`[ScheduledTasks] surfaced ${C.length} missed one-shot task(s)`);
        }
    }
    function ne() {
        if (isKilled?.()) {
            return;
        }
        if (L && !leaseFileTasks()) {
            L = false;
            N(A, j);
        }
        if (isLoading() && !assistantMode) {
            return;
        }
        let r = Date.now();
        let k = new Set;
        let w = [];
        let T = getJitterConfig?.() ?? c5;
        function b(e, J) {
            if (filter && !filter(e)) {
                return;
            }
            k.add(e.id);
            if (q.has(e.id)) {
                return;
            }
            let C = F.get(e.id);
            if (C === undefined) {
                let P = e.recurring ? w5t(e.cron, e.lastFiredAt ?? e.createdAt, e.id, T) : iMn(e.cron, e.createdAt, e.id, T);
                if (P === null) {
                    m("cron_task_fire", "next_fire_unresolvable", {
                        recurring: e.recurring ?? false
                    });
                }
                C = P ?? Infinity;
                F.set(e.id, C);
                t(`[ScheduledTasks] scheduled ${e.id} for ${C === Infinity ? "never" : new Date(C).toISOString()}`);
            }
            if (r < C) {
                return;
            }
            t(`[ScheduledTasks] firing ${e.id}${e.recurring ? " (recurring)" : ""}`);
            let taskId = e.id.startsWith("routine:") ? ln(e.id) : ye(e.id);
            i("tengu_scheduled_task_fire", {
                recurring: e.recurring ?? false,
                taskId,
                autonomousLoopDefault: be.isLoopDefaultSentinel(e.prompt)
            });
            let ge = {
                recurring: e.recurring ?? false,
                permanent: e.permanent ?? false
            };
            try {
                if (onFireTask) {
                    onFireTask(e);
                } else {
                    onFire(e.prompt);
                }
                g("cron_task_fire", ge);
            } catch (error) {
                let U = !J && !e.recurring;
                if (U) {
                    F.set(e.id, Infinity);
                }
                t(U ? `[ScheduledTasks] delivering task ${e.id} failed (its handler threw); the task stays in scheduled_tasks.json for a later session` : `[ScheduledTasks] delivering task ${e.id} failed (its handler threw); this run is dropped and will not be retried`, {
                    level: "error"
                });
                m("cron_task_fire", "handler_threw", ge);
                c(Ee(error, "scheduled task fire handler threw (message not reported: it may contain user text)"));
                if (U) {
                    return;
                }
            }
            let Se = He(e, r, T.recurringMaxAgeMs);
            if (Se) {
                let ageHours = Math.floor((r - e.createdAt) / 1000 / 60 / 60);
                t(`[ScheduledTasks] recurring task ${e.id} aged out (${ageHours}h since creation), deleting after final fire`);
                i("tengu_scheduled_task_expired", {
                    taskId,
                    ageHours
                });
            }
            if (e.recurring && !Se) {
                let P = w5t(e.cron, r, e.id, T);
                if (P === null) {
                    f("cron_task_fire", "reschedule_unresolvable");
                }
                let U = P ?? Infinity;
                F.set(e.id, U);
                if (!J) {
                    w.push(e.id);
                }
            } else if (J) {
                m6([
                    e.id
                ]);
                F.delete(e.id);
            } else {
                q.add(e.id);
                F.set(e.id, Infinity);
                e_e([
                    e.id
                ], dir).catch((P)=>t(`[ScheduledTasks] failed to remove task ${e.id}: ${P}`)).finally(()=>q.delete(e.id));
            }
        }
        for (let e of ee){
            if (ke(e)) {
                b(e, false);
            }
        }
        if (w.length > 0) {
            for (let e of w){
                q.add(e);
            }
            Dcs(w, r, dir).catch((e)=>t(`[ScheduledTasks] failed to persist lastFiredAt: ${e}`)).finally(()=>{
                for (let e of w){
                    q.delete(e);
                }
            });
        }
        if (dir === undefined) {
            for (let e of Km().slice()){
                b(e, true);
            }
        }
        for (let e of re){
            b(e, true);
        }
        if (k.size === 0) {
            F.clear();
            return;
        }
        for (let e of F.keys()){
            if (!k.has(e)) {
                F.delete(e);
            }
        }
    }
    async function oe() {
        if (x) {
            return;
        }
        R?.();
        R = null;
        let { default: _default } = await import("/$bunfs/root/chunk-3950aarh.js");
        if (x) {
            return;
        }
        L = leaseFileTasks() ? await de(A, j).catch(()=>false) : false;
        if (x) {
            if (L) {
                L = false;
                N(A, j);
            }
            return;
        }
        if (!L) {
            O = setInterval(()=>{
                if (!leaseFileTasks()) {
                    return;
                }
                de(A, j).then((w)=>{
                    if (x) {
                        if (w) {
                            N(A, j);
                        }
                        return;
                    }
                    if (w) {
                        L = true;
                        if (O) {
                            clearInterval(O);
                            O = null;
                        }
                    }
                }).catch((w)=>t(String(w), {
                        level: "error"
                    }));
            }, qe);
            O.unref?.();
        }
        me(true).then(ne);
        let k = vAe(dir);
        D = pe(()=>_default.watch(k, {
                persistent: false,
                ignoreInitial: true,
                awaitWriteFinish: {
                    stabilityThreshold
                },
                ignorePermissionErrors: true
            }));
        H = setInterval(ne, ze);
        H.unref?.();
    }
    function pe(r) {
        let k = r();
        k.on("error", (T)=>t(`[ScheduledTasks] watcher error: ${T}`, {
                level: "warn"
            }));
        let w = ()=>{
            if (x || D !== k) {
                return;
            }
            D = pe(r);
            D.once("ready", ()=>void me(false));
            k.close().catch((T)=>t(`[ScheduledTasks] watcher close failed: ${T}`, {
                    level: "warn"
                }));
        };
        k.on("add", w);
        k.on("change", w);
        k.on("unlink", ()=>{
            if (!x) {
                ee = [];
                let T = new Set(re.map((b)=>b.id));
                if (dir === undefined) {
                    for (let b of Km()){
                        T.add(b.id);
                    }
                }
                for (let b of F.keys()){
                    if (!T.has(b)) {
                        F.delete(b);
                    }
                }
            }
        });
        return k;
    }
    return {
        start () {
            x = false;
            R?.();
            R = null;
            if (dir !== undefined) {
                t(`[ScheduledTasks] scheduler start() \u2014 dir=${dir}, hasTasks=${cfr(dir)}`);
                oe();
                return;
            }
            t(`[ScheduledTasks] scheduler start() \u2014 enabled=${L2n()}, hasTasks=${cfr()}`);
            Y.add(K());
            Z ??= vd((r)=>{
                Y.add(r);
            });
            if (!L2n() && (assistantMode || getExtraTasks !== undefined || cfr())) {
                lU(true);
            }
            if (L2n()) {
                oe();
                return;
            }
            R = zPo(()=>void oe());
        },
        stop () {
            x = true;
            R?.();
            R = null;
            Z?.();
            Z = null;
            if (H) {
                clearInterval(H);
                H = null;
            }
            if (O) {
                clearInterval(O);
                O = null;
            }
            D?.close();
            D = null;
            if (L) {
                L = false;
                N(A, j);
            }
        },
        getNextFireTime () {
            let r = Infinity;
            for (let k of F.values()){
                if (k < r) {
                    r = k;
                }
            }
            if (r === Infinity) {
                return null;
            }
            return r;
        },
        checkNow () {
            ne();
        }
    };
}
function Ke(s) {
    let n = s.length > 1;
    let a = `The following one-shot scheduled task${n ? "s were" : " was"} missed while Claude was not running. ${n ? "They have" : "It has"} already been removed from .claude/scheduled_tasks.json.

Do NOT execute ${n ? "these prompts" : "this prompt"} yet. First use the AskUserQuestion tool to ask whether to run ${n ? "each one" : "it"} now. Only execute if the user confirms.`;
    let y = s.map((S)=>`${`[${FA(S.cron)}, created ${new Date(S.createdAt).toLocaleString()}]`}
${y2n(S.prompt)}`);
    return `${a}

${y.join(`

`)}`;
}
function Ee(cause, n) {
    let a = ()=>ot(Error("scheduled task handler threw (message not reported: it may contain user text)", {
            cause
        }), n);
    try {
        let y = ot(W(cause), n);
        if (Lq(y) === n) {
            return y;
        }
        return a();
    } catch  {
        return a();
    }
}
export { lOr };
