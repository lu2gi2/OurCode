import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { x, l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Hz } from "/$bunfs/root/chunk-52bcnmbr.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { Hw, nse } from "/$bunfs/root/chunk-t0b6khh6.js";
import { Io, mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { V2, c5, w5t } from "/$bunfs/root/chunk-tzz3htys.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { tf } from "/$bunfs/root/chunk-9xenmz7v.js";
import { uu } from "/$bunfs/root/chunk-5w1ksvdy.js";
import { zoe } from "/$bunfs/root/chunk-0ycjphb5.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { oI } from "/$bunfs/root/chunk-5an6yk4w.js";
import { o, E, M, T, u, U } from "/$bunfs/root/chunk-smx21d0k.js";
import { readFile, stat } from "fs/promises";
import { join, dirname } from "path";
const Sje = 1048576;
async function Zmt(s) {
    let r;
    try {
        r = await Z(s);
    } catch (error) {
        return {
            kind: "threw",
            error
        };
    }
    if (!r.ok) {
        let n = "telemetryCode" in r.error ? r.error.telemetryCode : undefined;
        if (n === "ENXIO" || n === "EISDIR" || n === "EFBIG") {
            return {
                kind: "refused"
            };
        }
        return {
            kind: "failed",
            error: r.error
        };
    }
    let e = r.value.items[0];
    if (!e.found) {
        return {
            kind: "absent"
        };
    }
    if (e.totalBytes > Sje) {
        return {
            kind: "refused"
        };
    }
    return {
        kind: "text",
        text: Buffer.from(e.value).toString("utf8")
    };
}
function Z(s) {
    return s.read([
        {
            key: $e.state("daemon-config"),
            offset: 0,
            length: Sje + 1
        }
    ]);
}
async function D(s, r) {
    let e = s ?? oI();
    let n;
    if (j() && r !== undefined && e === oI()) {
        n = await oe(r, e);
    } else {
        try {
            let c = await stat(e);
            if (!c.isFile() || c.size > Sje) {
                throw Error(`${e} is not a regular file (or exceeds 1MiB); refusing read-modify-write`);
            }
            n = await readFile(e, "utf8");
        } catch (error) {
            if (!z(error)) {
                throw error;
            }
        }
    }
    if (n === undefined || n.trim() === "") {
        return {};
    }
    let a;
    try {
        a = JSON.parse(Io(n));
    } catch  {
        throw Error(`daemon.json is malformed: ${e}`);
    }
    if (a && typeof a === "object" && !Array.isArray(a)) {
        return a;
    }
    return {};
}
async function oe(s, r) {
    let e = await Zmt(s);
    switch(e.kind){
        case "text":
            return e.text;
        case "absent":
            return;
        case "refused":
            {
                let n = `${r} is not a regular file (or exceeds 1MiB); refusing read-modify-write`;
                throw Error(n);
            }
        case "failed":
            throw Object.assign(new x(`daemon.json read failed: ${e.error.code}`, "daemon.json v5 read failed"), {
                cause: "cause" in e.error ? e.error.cause : e.error
            });
        case "threw":
            throw e.error;
    }
}
async function aFt(s, r, e) {
    let n = r ?? oI();
    let a = await D(n, e);
    if (await s(a) === false) {
        return;
    }
    if (j() && e !== undefined && n === oI()) {
        let m = await e.write($e.state("daemon-config"), _(a, null, 2) + `
`, {
            publishDiscipline: "atomic",
            mode: 438 & ~process.umask()
        });
        if (!m.ok) {
            throw Object.assign(new x(`daemon.json write failed: ${m.error.code}`, "daemon.json v5 write failed"), {
                cause: "cause" in m.error ? m.error.cause : m.error
            });
        }
        return;
    }
    await mn().mkdir(dirname(n));
    await En(n, _(a, null, 2) + `
`);
}
function nLr(s) {
    if (Array.isArray(s)) {
        return s.filter((r)=>!!r && typeof r.dir === "string");
    }
    if (s && typeof s.dir === "string") {
        return [
            s
        ];
    }
    return [];
}
const ie = 1000;
const B = 10080;
const oJe = [
    "dontAsk",
    "auto",
    "default",
    "acceptEdits",
    "plan",
    "bypassPermissions"
];
const I = p(()=>u({
        id: o().min(1),
        cron: o().refine((s)=>V2(s) !== null, {
            message: "invalid 5-field cron expression"
        }),
        prompt: o().min(1),
        directory: o().min(1),
        enabled: M().default(true),
        permissionMode: U([
            ...oJe,
            Hz
        ]).transform((s)=>{
            if (s === Hz) {
                return "default";
            }
            return s;
        }).default("dontAsk"),
        model: o().optional(),
        runTimeoutMinutes: E().positive().max(B).default(30),
        maxQueued: E().int().positive().default(1)
    }).strict());
const rLr = p(()=>u({
        tasks: T(I()).default([]).refine((s)=>new Set(s.map((r)=>r.id)).size === s.length, {
            message: "task ids must be unique"
        }),
        maxConcurrent: E().int().positive().default(1)
    }).strict());
function N() {
    return join(ve(), "daemon.scheduled.status.json");
}
function L() {
    return $e.state("scheduled-status");
}
async function ae(s, r) {
    let e = {
        workerPid: process.pid,
        workerProcStart: nse(),
        writtenAt: Date.now(),
        tasks: s
    };
    if (j() && r) {
        try {
            let n = await r.write(L(), _(e), {
                mode: 438 & ~process.umask()
            });
            if (!n.ok) {
                t(`writeScheduledStatus: ${n.error.code}`);
            }
        } catch (error) {
            t(`writeScheduledStatus: ${l(error)}`);
        }
        return;
    }
    try {
        await En(N(), _(e));
    } catch  {}
}
async function jNo(s) {
    let r;
    if (j() && s !== undefined) {
        let a;
        try {
            a = await s.readText([
                L()
            ]);
        } catch  {
            return null;
        }
        if (!a.ok) {
            return null;
        }
        let c = a.value.items[0];
        if (!c.found) {
            return null;
        }
        r = c.value;
    } else {
        try {
            r = await readFile(N(), "utf8");
        } catch  {
            return null;
        }
    }
    let e = mt(r, false);
    if (!e || typeof e !== "object") {
        return null;
    }
    let n = e;
    if (typeof n.workerPid !== "number" || typeof n.tasks !== "object" || n.tasks === null) {
        return null;
    }
    try {
        process.kill(n.workerPid, 0);
    } catch  {
        return null;
    }
    if (!await Hw(n.workerPid, n.workerProcStart)) {
        return null;
    }
    return e;
}
const WNo = async (s, r, e, n, a)=>{
    let { tasks, maxConcurrent } = rLr().parse(s);
    let { initializeErrorLogSink } = await import("/$bunfs/root/chunk-4k2wv838.js");
    let { initializeAnalyticsSink } = await import("/$bunfs/root/chunk-hsyw2dw7.js");
    initializeErrorLogSink();
    initializeAnalyticsSink();
    if (!n.getAccessToken()) {
        e("scheduled worker: not authed — run `claude auth login`");
        process.exit(1);
    }
    let { awaitPolicyLimitsColdStart, stopPolicyLimits } = await import("/$bunfs/root/chunk-z4ckrxvt.js");
    if (r.aborted) {
        return;
    }
    r.addEventListener("abort", ()=>stopPolicyLimits(), {
        once: true
    });
    await awaitPolicyLimitsColdStart();
    if (r.aborted) {
        return;
    }
    let { query } = await import("/$bunfs/root/chunk-dpn17f55.js");
    e(`scheduled worker started tasks=${tasks.length} maxConcurrent=${maxConcurrent}`);
    if (tasks.length === 0) {
        let d = setInterval(()=>{}, 60000);
        await new Promise((resolve)=>{
            if (r.aborted) {
                resolve();
                return;
            }
            r.addEventListener("abort", ()=>resolve(), {
                once: true
            });
        });
        clearInterval(d);
        return;
    }
    let b = [];
    let v = new Set;
    let S = null;
    function K(task) {
        let i = b.reduce((acc, item)=>{
            if (item.task.id === task.id) {
                return acc + 1;
            }
            return acc;
        }, 0);
        if (i >= task.maxQueued) {
            e(`task=${task.id} dropped (queue full: ${i}/${task.maxQueued})`);
            return;
        }
        b.push({
            task
        });
        S?.();
        S = null;
    }
    let C = new Map;
    let F = new Set;
    let G = Date.now();
    function R() {
        let d = {};
        for (let i of tasks){
            let lastFiredAt = C.get(i.id);
            d[i.id] = {
                running: F.has(i.id),
                ...lastFiredAt !== undefined && {
                    lastFiredAt
                }
            };
        }
        ae(d, a);
    }
    R();
    function V(d) {
        let i = C.get(d.id) ?? G;
        return w5t(d.cron, i, d.id, c5);
    }
    let X = setInterval((d, i, f, k)=>{
        let A = Date.now();
        for (let h of d){
            if (!h.enabled) {
                continue;
            }
            let w = i(h);
            if (w === null) {
                continue;
            }
            if (w <= A) {
                f.set(h.id, A);
                k(h);
            }
        }
    }, ie, tasks, V, C, K);
    r.addEventListener("abort", ()=>{
        clearInterval(X);
        for (let d of v){
            d.abort();
        }
        S?.();
        S = null;
    });
    let P = new Set;
    async function Y({ task }) {
        let f = tf();
        if (f) {
            e(`task=${task.id} refused: ${f}`);
            return;
        }
        let abortController = new AbortController;
        v.add(abortController);
        F.add(task.id);
        R();
        let A = setTimeout((w)=>w.abort(), Math.min(task.runTimeoutMinutes, B) * 60000, abortController);
        e(`task=${task.id} start cron='${task.cron}' dir='${task.directory}'`);
        let h = uu({
            pinToCurrentBinary: true
        });
        try {
            let w = query({
                prompt: task.prompt,
                options: {
                    cwd: task.directory,
                    permissionMode: task.permissionMode,
                    ...task.permissionMode === "bypassPermissions" && {
                        allowDangerouslySkipPermissions: true
                    },
                    ...task.model && {
                        model: task.model
                    },
                    systemPrompt: {
                        type: "preset",
                        preset: "claude_code"
                    },
                    settingSources: [
                        "user",
                        "project",
                        "local"
                    ],
                    pathToClaudeCodeExecutable: h.cmd,
                    executableArgs: h.prefixArgs,
                    abortController,
                    stderr: (g)=>e(`[${task.id}] ${g.trimEnd()}`),
                    workload: zoe
                }
            });
            for await (let g of w){
                if (g.type === "result") {
                    e(`task=${task.id} result subtype=${g.subtype} duration=${g.duration_ms}ms cost=$${g.total_cost_usd.toFixed(4)}`);
                }
            }
        } catch (error) {
            e(`task=${task.id} threw: ${error}`);
        } finally{
            clearTimeout(A);
            v.delete(abortController);
            F.delete(task.id);
            R();
        }
    }
    while(!r.aborted){
        while(P.size < maxConcurrent && b.length > 0 && !r.aborted){
            let d = b.shift();
            let i = Y(d).finally(()=>{
                P.delete(i);
                S?.();
                S = null;
            });
            P.add(i);
        }
        if (r.aborted) {
            break;
        }
        if (b.length === 0 || P.size >= maxConcurrent) {
            await new Promise((resolve)=>{
                S = resolve;
            });
        }
    }
    await Promise.allSettled(Array.from(P));
};
function O({ scheduled }) {
    let e = {};
    if (Array.isArray(scheduled) && scheduled.length > 0 && typeof scheduled[0] === "object") {
        e = scheduled[0] ?? {};
    } else if (scheduled && typeof scheduled === "object" && !Array.isArray(scheduled)) {
        e = scheduled;
    }
    let n = Array.isArray(e.tasks) ? e.tasks : [];
    return {
        ...e,
        tasks: n
    };
}
function W(s, r) {
    let s_scheduled = s.scheduled;
    if (Array.isArray(s_scheduled)) {
        let n = s_scheduled.slice();
        n[0] = r;
        s.scheduled = n;
    } else {
        s.scheduled = r;
    }
}
async function sJe(s, r, e) {
    return Zr("daemon_scheduled_add", async ()=>{
        I().parse(s);
        await aFt((n)=>{
            let a = O(n);
            let c = a.tasks.filter((m)=>!(m && typeof m === "object" && m.id === s.id));
            c.push(s);
            W(n, {
                ...a,
                tasks: c
            });
        }, r, e);
    });
}
async function iJe(s, r, e) {
    return Zr("daemon_scheduled_remove", async ()=>{
        let n = false;
        await aFt((a)=>{
            if (!("scheduled" in a)) {
                return false;
            }
            let c = O(a);
            let m = c.tasks.filter((y)=>!(y && typeof y === "object" && y.id === s));
            if (m.length === c.tasks.length) {
                return false;
            }
            if (m.length === 0) {
                let y = a.scheduled;
                if (Array.isArray(y) && y.length > 1) {
                    a.scheduled = y.slice(1);
                } else {
                    delete a.scheduled;
                }
            } else {
                W(a, {
                    ...c,
                    tasks: m
                });
            }
            n = true;
        }, r, e);
        return n;
    });
}
async function egt(s, r) {
    let e = await D(s, r);
    if (!("scheduled" in e)) {
        return [];
    }
    let n = O(e);
    let a = [];
    for (let c of n.tasks){
        let m = I().safeParse(c);
        if (m.success) {
            a.push(m.data);
        }
    }
    return a;
}
export { Sje, Zmt, aFt, nLr, oJe, rLr, jNo, WNo, sJe, iJe, egt };
