import { So } from "/$bunfs/root/chunk-dn762950.js";
import { B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { lg } from "/$bunfs/root/chunk-y9c4grt0.js";
import { fc } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Lb } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { la, Ob, bd, iO } from "/$bunfs/root/chunk-0ycjphb5.js";
import { wn } from "/$bunfs/root/chunk-6dwnw6av.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { Vx, EXt, wLn } from "/$bunfs/root/chunk-4r6b8efh.js";
import { l8o, bp, wp } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Zp } from "/$bunfs/root/chunk-k5fhce8z.js";
import { Au, G3 } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { Z9 } from "/$bunfs/root/chunk-br4dwjb6.js";
import { Bh } from "/$bunfs/root/chunk-8qgm3a5n.js";
import { Q4n, Z4n, eYn, Gq, Gcn, tYn, RXe, nYn, qcn, UDr, BDr, v6, oYn, sYn, Xcn } from "/$bunfs/root/chunk-mj7766zh.js";
import { Q0 } from "/$bunfs/root/chunk-bs48afk0.js";
import { aWt, a7e, Qyn } from "/$bunfs/root/chunk-40bs4ws1.js";
function x(r) {
    let { bySlug } = Qyn();
    if (bySlug.size === 0) {
        return r;
    }
    return r.map((e)=>{
        let unattendedReplies = Math.min((bySlug.get(e.slug) ?? 0) + (e.unattendedReplies ?? 0), a7e);
        if (unattendedReplies > 0) {
            return {
                ...e,
                unattendedReplies
            };
        }
        return e;
    });
}
const F = 2000;
const R = "exit-handoff agent flush timeout";
function y() {
    let last = Z9.of(B().host).last;
    return [
        ...Ob()?.adoptShellOutputReadRoot ? [
            Ob().adoptShellOutputReadRoot
        ] : [],
        ...last ? [
            EXt(wLn(last.worktreePath))
        ] : []
    ];
}
function L(r) {
    let jobDir = bd() ? iO() : undefined;
    if (!jobDir || a.CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF) {
        if (jobDir) {
            let o = ee().live;
            qcn(jobDir);
            if (o.bootingWiredArms.size > 0) {
                f("artifact_live_subscribe", "booting_consent_uncarried");
            }
            aWt(o.inFlightSubscribes);
        }
        return {
            shells: [],
            workflows: [],
            agents: [],
            unresumedAgents: [],
            unresumedWorkflows: [],
            frameLive: [],
            frameLiveTaskIds: [],
            jobDir: undefined,
            agentTranscriptPaths: {},
            workflowTranscriptDirs: {},
            projectTempDir: Ob()?.adoptShellOutputRoot ?? Vx(),
            mergeShellOutputReadRoots: y()
        };
    }
    let e = v6(r);
    let l = Object.values(r);
    let k = l.filter((o)=>Xcn(o, e));
    let d = l.filter((o)=>sYn(o, e));
    let u = nYn(jobDir);
    let T = (o)=>!ee().autoReact.userDisarmed && !Bh(o.slug);
    let A = qcn(jobDir);
    let frameLive = x(tYn([
        {
            entries: Gcn(r),
            fallbackBasis: Date.now()
        },
        {
            entries: A.filter(T),
            fallbackBasis: Date.now()
        },
        {
            entries: BDr(jobDir).filter(T),
            fallbackBasis: Date.now()
        }
    ]));
    let w = new Set(frameLive.map((o)=>o.slug));
    let live = ee().live;
    if ([
        ...live.bootingWiredArms.keys()
    ].some((o)=>!w.has(o))) {
        f("artifact_live_subscribe", "booting_consent_uncarried");
    }
    aWt(new Set([
        ...w,
        ...live.inFlightSubscribes
    ]));
    return {
        shells: l.filter((o)=>oYn(o, e) && o.agentId === undefined),
        workflows: k,
        agents: d,
        unresumedAgents: u.agents,
        unresumedWorkflows: u.workflows,
        frameLive,
        frameLiveTaskIds: Object.values(r).filter((o)=>Gq(o) && o.frameLive !== undefined && w.has(o.frameLive.slug)).map((o)=>o.id),
        jobDir,
        agentTranscriptPaths: Object.fromEntries(d.map((o)=>[
                o.agentId,
                lg(So(o.agentId))
            ])),
        workflowTranscriptDirs: Object.fromEntries(k.map((o)=>[
                o.workflowRunId,
                Q0(o.workflowRunId)
            ])),
        projectTempDir: Ob()?.adoptShellOutputRoot ?? Vx(),
        mergeShellOutputReadRoots: y()
    };
}
function E({ shells, workflows, agents, unresumedAgents, unresumedWorkflows, frameLive, jobDir, agentTranscriptPaths, workflowTranscriptDirs, projectTempDir, mergeShellOutputReadRoots }, b) {
    for (let p of workflows){
        p.abortController?.abort(fc("background"));
    }
    for (let p of agents){
        p.abortController?.abort(fc("background"));
    }
    let o = (async ()=>{
        let p = [];
        if (agents.length > 0) {
            try {
                await Ut((async ()=>{
                    await Lb();
                    await wp();
                })(), F, R);
            } catch (error) {
                let v = error instanceof Error && error.message === R;
                f("task_local_agent_exit_handoff", v ? "flush_timeout" : "flush_failed");
                t(`exit handoff: agent transcript flush failed: ${error}`, {
                    level: "warn"
                });
            }
            p = await Promise.all(agents.map((s)=>Z4n(s, {
                    derivedTranscriptPath: agentTranscriptPaths[s.agentId]
                })));
        }
        p.push(...unresumedAgents);
        let shells_1 = (await Promise.all(shells.map((s)=>Q4n(s, {
                rerootOutputsTo: projectTempDir
            })))).filter((s)=>s !== null);
        let S = [
            ...await Promise.all(workflows.map((s)=>eYn(s, {
                    derivedTranscriptDir: workflowTranscriptDirs[s.workflowRunId]
                }))),
            ...unresumedWorkflows
        ];
        if (shells_1.length === 0 && S.length === 0 && p.length === 0 && frameLive.length === 0 || !jobDir) {
            return;
        }
        try {
            await RXe(jobDir, {
                writtenAtMs: Date.now(),
                origin: "exit",
                shells: shells_1,
                cron: [],
                workflows: S,
                agents: p,
                ...frameLive.length > 0 && {
                    frameLive
                }
            }, {
                mergeShellOutputRoot: [
                    projectTempDir,
                    ...mergeShellOutputReadRoots ?? []
                ]
            }, b);
            i("tengu_adopt_exit_handoff", {
                adopted_shells: shells_1.length,
                adopted_workflows: S.length,
                adopted_agents: p.length,
                adopted_frame_live: frameLive.length
            });
            if (shells_1.length > 0) {
                g("task_local_shell_exit_handoff");
            }
            if (S.length > 0) {
                g("task_local_workflow_exit_handoff");
            }
            if (p.length > 0) {
                g("task_local_agent_exit_handoff");
            }
            t(`exit handoff: ${shells_1.length} background shell(s), ${S.length} workflow(s), ${p.length} agent(s), and ${frameLive.length} comment-monitoring consent record(s) handed to the next wake of this session`);
        } catch (error) {
            for (let v of shells){
                try {
                    v.shellCommand?.kill();
                } catch  {}
            }
            if (shells.length > 0) {
                m("task_local_shell_exit_handoff", "write_failed");
            }
            if (workflows.length > 0) {
                m("task_local_workflow_exit_handoff", "write_failed");
            }
            if (p.length > 0) {
                m("task_local_agent_exit_handoff", "write_failed");
            }
            if (frameLive.length > 0 && jobDir !== undefined) {
                UDr(jobDir, frameLive);
                m("artifact_live_subscribe", "consent_exit_write_failed");
            }
            t(`exit handoff: adopt.json write failed: ${error}`, {
                level: "warn"
            });
        }
    })();
    l8o(o);
    return o;
}
function a$t(r, n) {
    let e = L(r);
    let l = e.shells.length > 0 || e.workflows.length > 0 || e.agents.length > 0 || e.unresumedAgents.length > 0 || e.unresumedWorkflows.length > 0 || e.frameLive.length > 0 ? E(e, n) : undefined;
    let k = new Set([
        ...e.shells,
        ...e.workflows,
        ...e.agents
    ].map((d)=>d.id));
    J4n(r, k);
    return l;
}
function J4n(r, n = new Set) {
    for (let e of Object.values(r)){
        if (e.status !== "running" || n.has(e.id)) {
            continue;
        }
        try {
            if (bp(e)) {
                e.shellCommand?.kill();
                e.shellCommand?.cleanup();
            } else if (wn()) {
                Zp(e.id);
                continue;
            } else if ("abortController" in e) {
                e.abortController?.abort();
            }
            if (!Au(e)) {
                la(e.id, "stopped", {
                    toolUseId: e.toolUseId,
                    summary: e.description,
                    ambient: G3(e)
                });
            }
            Zp(e.id);
        } catch (error) {
            c(error);
        }
    }
}
export { a$t, J4n };
