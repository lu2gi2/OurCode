import { Rn } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ei } from "/$bunfs/root/chunk-qch5xj2a.js";
import { me, hn, Uo, nd, ir, bt, hg, Tp, Vc } from "/$bunfs/root/chunk-55p8dvkx.js";
import { vzn } from "/$bunfs/root/chunk-092xqjkn.js";
import { ae } from "/$bunfs/root/chunk-223dyewd.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
const R = [
    "manifest_invalid",
    "disabled_by_default",
    "identity_unverified",
    "archive_not_probed",
    "will_not_load"
];
function JOo(e) {
    let t = 0;
    let n = 0;
    for (let s of e){
        if (s.with_only) {
            continue;
        }
        n += s.weight;
        if (s.passed) {
            t += s.weight;
        }
    }
    if (n > 0) {
        return t / n;
    }
    return 0;
}
function cIr(e) {
    if (e.length === 0) {
        return {
            score: 0,
            passRate: 0
        };
    }
    let score = e.reduce((acc, item)=>acc + item.score, 0) / e.length;
    let passRate = F(e, (s)=>s.score >= 1) / e.length;
    return {
        score,
        passRate
    };
}
function QOo(e) {
    let t = [];
    let n = e.cases.map((r)=>({
            ...r,
            name: Rn(r.name)
        }));
    let s = Math.max(4, ...n.map((r)=>ae(r.name)));
    let a = e.cases.some((r)=>r.runs_without !== undefined);
    if (a) {
        t.push(`${o("CASE", s)}  ${o("WITH", 6)}${o("W/OUT", 6)}${o("Δ", 7)}${o("RUNS", 5)}${o("COST", 8)}NOTES`);
    } else {
        t.push(`${o("CASE", s)}  ${o("SCORE", 6)}${o("PASS%", 6)}${o("RUNS", 5)}${o("COST", 8)}NOTES`);
    }
    for (let r of n){
        let c = r.runs.length + (r.runs_without?.length ?? 0);
        let g = r.runs.reduce((acc, run)=>acc + run.cost_usd, 0) + (r.runs_without?.reduce((i, u)=>i + u.cost_usd, 0) ?? 0);
        let p = S(r);
        if (a) {
            let { score_without, delta } = r;
            t.push(`${o(r.name, s)}  ${o(r.score.toFixed(2), 6)}${o(score_without !== undefined ? score_without.toFixed(2) : "—", 6)}${o(delta !== undefined ? _(delta) : "—", 7)}${o(String(c), 5)}${o(`$${g.toFixed(2)}`, 8)}${p ?? ""}`);
        } else {
            t.push(`${o(r.name, s)}  ${o(r.score.toFixed(2), 6)}${o(`${Math.round(r.pass_rate * 100)}%`, 6)}${o(String(r.runs.length), 5)}${o(`$${g.toFixed(2)}`, 8)}${p ?? ""}`);
        }
    }
    t.push("");
    let l = e.partial ? ` \xB7 \u26A0 partial (${x[e.partial_reason ?? "interrupted"]})` : "";
    if (a) {
        let r = e.cases.filter((c)=>c.delta !== undefined);
        if (r.length > 0) {
            let c = r.reduce((acc, item)=>acc + (item.delta ?? 0), 0) / r.length;
            t.push(`${e.cases.length} case(s) \xB7 mean \u0394 ${_(c)} \xB7 ${e.duration_seconds}s \xB7 $${e.cost_usd.toFixed(2)}${l}`);
            return t.join(`
`);
        }
    }
    t.push(`${e.cases.length} case(s) \xB7 ${e.duration_seconds}s \xB7 $${e.cost_usd.toFixed(2)}${l}`);
    return t.join(`
`);
}
function _(e) {
    return `${e > 0 ? "+" : ""}${e.toFixed(2)}`;
}
function S(e) {
    let t = null;
    for (let n of e.runs){
        for (let s of n.graders){
            if (!s.passed && (!t || s.weight > t.weight)) {
                t = s;
            }
        }
        if (n.error) {
            return Rn(n.error);
        }
    }
    if (t !== null) {
        let n = t.name;
        let s = e.advisories?.find((l)=>l.grader === n);
        let a = e.runs.some((l)=>l.graders.some((r)=>r.name === n && r.passed));
        if (s !== undefined && !a) {
            return Rn(s.text);
        }
    }
    if (t) {
        return Rn(`${t.name}: ${t.explanation}`);
    }
    return null;
}
function o(e, t) {
    let n = ae(e);
    if (n > t) {
        return `${e} `;
    }
    return e + Ei(" ", t - n);
}
function L0t(e, t, partial_reason, claude_version, plugins, concurrency) {
    let cost_usd = e.reduce((acc, { report })=>acc + report.runs.reduce((acc_1, run)=>acc_1 + run.cost_usd, 0) + (report.runs_without?.reduce((p, i)=>p + i.cost_usd, 0) ?? 0), 0);
    return {
        schema_version: "1.0",
        claude_version,
        started_at: t.toISOString(),
        duration_seconds: Math.round((Date.now() - t.getTime()) / 1000),
        cost_usd,
        partial: partial_reason !== undefined,
        partial_reason,
        concurrency,
        plugins,
        cases: e.map((c)=>c.report)
    };
}
var x = {
    interrupted: "interrupted",
    cost_ceiling: "cost ceiling hit",
    auth_failed: "stopped: authentication failed"
};
const schemaVersion = 1;
function f() {
    return bt({
        score: hn(),
        passed: Uo(),
        turns: hn(),
        costUsd: hn(),
        judgeCostUsd: hn(),
        durationSeconds: hn().optional(),
        startedAt: me().optional(),
        error: me().nullable(),
        tracePath: me(),
        skippedPaidGraders: Uo(),
        aborted: bt({
            server: me(),
            tool: me(),
            reason: me()
        }).optional(),
        mocks: bt({
            servers: ir(bt({
                server: me(),
                kind: Vc([
                    "shadow",
                    "standalone"
                ]),
                withheld: Tp(true).optional(),
                replayPinned: hn().optional(),
                tools: ir(bt({
                    tool: me(),
                    responder: Vc([
                        "fixed",
                        "agent"
                    ])
                }))
            })),
            warnings: ir(me()),
            calls: bt({
                total: hn(),
                errors: hn(),
                unmocked: ir(bt({
                    tool: me(),
                    count: hn()
                })),
                costUsd: hn().optional(),
                replay: bt({
                    hits: hn(),
                    misses: hn()
                }).optional()
            })
        }).optional(),
        graders: ir(bt({
            name: me(),
            passed: Uo(),
            weight: hn(),
            explanation: me(),
            withOnly: Uo(),
            scored: Uo().optional(),
            judgeVotes: ir(Uo()).optional(),
            evidence: me().optional()
        }))
    });
}
function E() {
    return bt({
        name: me(),
        dir: me(),
        source: me(),
        promptMarkdown: me(),
        model: me().optional(),
        runsPerCase: hn(),
        timeoutSeconds: hn(),
        maxTurns: hn(),
        graders: ir(bt({
            name: me(),
            type: me(),
            weight: hn(),
            graderMarkdown: me().optional(),
            config: hg(me(), nd())
        })),
        arms: bt({
            with: ir(f()),
            without: ir(f()).optional()
        }),
        advisories: ir(me()).optional(),
        aggregates: bt({
            score: hn(),
            passRate: hn(),
            scoreWithout: hn().optional(),
            passRateWithout: hn().optional(),
            delta: hn().optional()
        })
    });
}
function ZOo() {
    return C(Vc(R).optional());
}
function C(problem) {
    return bt({
        schemaVersion: Tp(schemaVersion),
        claudeVersion: me(),
        startedAt: me(),
        durationSeconds: hn(),
        costUsd: hn(),
        partial: Uo(),
        partialReason: Vc([
            "cost_ceiling",
            "interrupted",
            "auth_failed"
        ]).optional(),
        suite: bt({
            root: me(),
            ablation: Vc([
                "none",
                "with-without"
            ]),
            modelOverride: me().optional(),
            judgeModel: me().optional(),
            caseFilter: me().optional(),
            tagFilters: ir(me()).optional(),
            threshold: hn(),
            concurrency: hn().int().positive().optional(),
            pluginId: me().optional(),
            plugins: ir(bt({
                name: me(),
                version: me().optional(),
                path: me(),
                problem
            }))
        }),
        cases: ir(E()),
        aggregates: bt({
            casesTotal: hn(),
            casesPassed: hn(),
            overallScore: hn(),
            overallPassRate: hn(),
            meanDelta: hn().optional()
        })
    });
}
const P = [
    "ablation",
    "aborted",
    "advisories",
    "aggregates",
    "arms",
    "calls",
    "caseFilter",
    "cases",
    "casesPassed",
    "casesTotal",
    "claudeVersion",
    "concurrency",
    "config",
    "costUsd",
    "count",
    "delta",
    "dir",
    "durationSeconds",
    "error",
    "errors",
    "evidence",
    "explanation",
    "graderMarkdown",
    "graders",
    "hits",
    "judgeCostUsd",
    "judgeModel",
    "judgeVotes",
    "kind",
    "maxTurns",
    "meanDelta",
    "misses",
    "mocks",
    "model",
    "modelOverride",
    "name",
    "overallPassRate",
    "overallScore",
    "partial",
    "partialReason",
    "passRate",
    "passRateWithout",
    "passed",
    "path",
    "pluginId",
    "plugins",
    "problem",
    "promptMarkdown",
    "reason",
    "replay",
    "replayPinned",
    "responder",
    "root",
    "runsPerCase",
    "schemaVersion",
    "score",
    "scoreWithout",
    "scored",
    "server",
    "servers",
    "skippedPaidGraders",
    "source",
    "startedAt",
    "suite",
    "tagFilters",
    "threshold",
    "timeoutSeconds",
    "tool",
    "tools",
    "total",
    "tracePath",
    "turns",
    "type",
    "unmocked",
    "version",
    "warnings",
    "weight",
    "with",
    "withOnly",
    "withheld",
    "without"
];
const j = [
    "config"
];
const W = vzn(P);
const K = new Set(j);
function v(e) {
    return {
        score: e.score,
        passed: e.score >= 1,
        turns: e.turns,
        costUsd: e.cost_usd,
        judgeCostUsd: e.judge_cost_usd,
        durationSeconds: e.duration_seconds,
        startedAt: e.started_at,
        error: e.error,
        tracePath: e.trace_path,
        skippedPaidGraders: e.skipped_paid_graders ?? false,
        ...e.aborted && {
            aborted: e.aborted
        },
        ...e.mocks && {
            mocks: e.mocks
        },
        graders: e.graders.map((t)=>({
                name: t.name,
                passed: t.passed,
                weight: t.weight,
                explanation: t.explanation,
                withOnly: t.with_only ?? false,
                scored: t.scored ?? !(t.with_only ?? false),
                judgeVotes: t.judge_votes,
                evidence: t.evidence
            }))
    };
}
function A(case_, report) {
    return {
        name: report.name,
        dir: report.dir,
        source: report.source,
        promptMarkdown: case_.execution.prompt ?? "",
        model: case_.execution.model,
        runsPerCase: case_.runs,
        timeoutSeconds: case_.execution.timeout_seconds,
        maxTurns: case_.execution.max_turns,
        graders: case_.graders.map((n)=>{
            let { name, type, weight, ...rest } = n;
            return {
                name,
                type,
                weight,
                graderMarkdown: n.type === "llm" || n.type === "baseline" ? n.criteria : undefined,
                config: rest
            };
        }),
        arms: {
            with: report.runs.map(v),
            without: report.runs_without?.map(v)
        },
        ...report.advisories && {
            advisories: report.advisories.map((n)=>n.text)
        },
        aggregates: {
            score: report.score,
            passRate: report.pass_rate,
            scoreWithout: report.score_without,
            passRateWithout: report.pass_rate_without,
            delta: report.delta
        }
    };
}
function eMo({ aggregate, resolvedCases, root, ablation, pluginId, modelOverride, judgeModel, caseFilter, tagFilters, threshold }) {
    let cases = resolvedCases.map(({ case_, report })=>A(case_, report));
    let h = cases.map((d)=>d.aggregates.delta).filter((d)=>d !== undefined);
    return {
        schemaVersion,
        claudeVersion: aggregate.claude_version,
        startedAt: aggregate.started_at,
        durationSeconds: aggregate.duration_seconds,
        costUsd: aggregate.cost_usd,
        partial: aggregate.partial,
        partialReason: aggregate.partial_reason,
        suite: {
            root,
            ablation,
            pluginId,
            modelOverride,
            judgeModel,
            caseFilter,
            tagFilters,
            threshold,
            concurrency: aggregate.concurrency,
            plugins: aggregate.plugins.map(({ name, version, path, problem })=>({
                    name,
                    ...version !== undefined && {
                        version
                    },
                    path,
                    ...problem !== undefined && {
                        problem
                    }
                }))
        },
        cases,
        aggregates: {
            casesTotal: cases.length,
            casesPassed: F(cases, (d)=>d.aggregates.score >= threshold),
            overallScore: Qpt(cases.map((d)=>d.aggregates.score)),
            overallPassRate: Qpt(cases.map((d)=>d.aggregates.passRate)),
            meanDelta: h.length > 0 ? Qpt(h) : undefined
        }
    };
}
function Qpt(e) {
    if (e.length === 0) {
        return 0;
    }
    return e.reduce((acc, item)=>acc + item, 0) / e.length;
}
export { JOo, cIr, QOo, L0t, ZOo, eMo, Qpt };
