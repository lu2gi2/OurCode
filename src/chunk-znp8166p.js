import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { MR } from "/$bunfs/root/chunk-2d9a83dh.js";
import { pvo, $dt } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { LY } from "/$bunfs/root/chunk-d2sd20y7.js";
import { Sv, ZDn, e0n } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { wNn, s_r, ENn } from "/$bunfs/root/chunk-s7aawpq2.js";
import { Qg } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { ju } from "/$bunfs/root/chunk-kasbfbhj.js";
import { $ie, rhn, ohn, F1t } from "/$bunfs/root/chunk-y10by25k.js";
import { thn } from "/$bunfs/root/chunk-mce42fz5.js";
import { Kb } from "/$bunfs/root/chunk-f1pkxrfr.js";
import { Q0 } from "/$bunfs/root/chunk-bs48afk0.js";
import { hE } from "/$bunfs/root/chunk-59xjawk6.js";
import { randomUUID } from "crypto";
const l = 100000;
const A = 4000;
function L(e) {
    let t = e.replace(/[\r\n\v\f\x1c\x1d\x1e\u0085\u2028\u2029]+/g, " ").replaceAll("remote-workflow:", "remote-workflow;");
    if (t.length > A) {
        t = `${ne(t, A)}\u2026[truncated]`;
    }
    return t;
}
function H1t(e, t) {
    return `remote-workflow: error[${e}]: ${L(t)}`;
}
function c(e) {
    let t = _(e);
    if (t === undefined) {
        return undefined;
    }
    return t.replaceAll("\x85", "\\u0085").replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029");
}
function R() {
    let e = Qg();
    if (e === undefined) {
        return s_r();
    }
    return Object.keys(e).some((t)=>t.toUpperCase() === "CLAUDE_CODE_DISABLE_WORKFLOWS" && Ne(e[t]));
}
function x() {
    return pvo().some((e)=>e.disableWorkflows === true || Object.entries(e.env ?? {}).some(([t, f])=>t.toUpperCase() === "CLAUDE_CODE_DISABLE_WORKFLOWS" && Ne(f)));
}
const I = "Code review did not run: workflows are turned off in this machine's managed settings (`disableWorkflows`, or `CLAUDE_CODE_DISABLE_WORKFLOWS` in its `env` block). Ask this machine's administrator to allow it.";
const M = "Code review did not run: this machine's managed settings could not be read, so whether its administrator turned workflows off is not known. Ask this machine's administrator to fix them.";
function C() {
    if (x()) {
        return I;
    }
    if ($dt()) {
        return M;
    }
    return null;
}
function MQe(e) {
    if (R()) {
        return "dynamic workflows are disabled for this session (the environment variable `CLAUDE_CODE_DISABLE_WORKFLOWS` was set when Claude Code started).";
    }
    let t = e?.serverAuthoredCarrier === true;
    if (t && e?.eventSessionOrigin === "review") {
        return C();
    }
    if (wNn()) {
        if (s_r()) {
            return "dynamic workflows are disabled for this session (the environment variable `CLAUDE_CODE_DISABLE_WORKFLOWS`, set after Claude Code started, for example by a settings `env` block).";
        }
        return "dynamic workflows are disabled for this session (the `disableWorkflows` setting).";
    }
    if (t && e?.eventSessionOrigin === undefined && LY()) {
        return C();
    }
    if (!ENn()) {
        return "dynamic workflows are disabled for this session (org policy `allow_workflows`).";
    }
    return null;
}
async function ehn({ script, args, telemetrySource, serverAuthoredCarrier = false, eventSessionOrigin, context }) {
    let s = (layer, r)=>({
            ok: false,
            layer,
            line: H1t(layer, r)
        });
    let S = MQe({
        serverAuthoredCarrier,
        eventSessionOrigin
    });
    if (S) {
        return s("policy-gate", S);
    }
    let maxBytes = serverAuthoredCarrier ? ZDn : Sv;
    if (script.length > maxBytes) {
        return s("script-too-large", `workflow script exceeds ${maxBytes} bytes.`);
    }
    if (!MR(script)) {
        return s("control-chars", "workflow script contains disallowed control characters.");
    }
    let n = Kb(script, {
        maxBytes
    });
    if ("error" in n) {
        return s("meta-parse", `invalid workflow script: ${n.error}`);
    }
    if (thn(n.scriptBody)) {
        return s("nondeterminism", "workflow scripts must be deterministic: Date.now()/Math.random()/new Date() are unavailable (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.");
    }
    let g = $ie(n.scriptBody);
    if (!g.ok) {
        return s("compile", `workflow script compile failed: ${g.error}`);
    }
    let m = `wf_${randomUUID().slice(0, 12)}`;
    let taskId = hE("local_workflow");
    let scriptPath = e0n(n.meta.name, m, script, context.storageV5);
    let name = rhn(n.meta.name, undefined, false);
    let description = ohn(n.meta.description, undefined, false);
    i("tengu_workflow_launched", {
        invocation_mode: d(telemetrySource),
        workflow_source: d(telemetrySource),
        phase_count: n.meta.phases?.length ?? 0,
        launched_from_subagent: false,
        has_args: args != null,
        is_resume: false,
        script_size_chars: script.length
    });
    let o = await new Promise((onSettled)=>{
        F1t({
            taskId,
            workflowRunId: m,
            script,
            scriptPath,
            args,
            meta: n.meta,
            vmScript: g.vmScript,
            toolUseContext: context,
            canUseTool: context.canUseTool ?? ju,
            toolUseId: undefined,
            transcriptDir: Q0(m),
            telemetry: {
                source: telemetrySource,
                name,
                description,
                scriptIsVerbatimBuiltIn: false
            },
            isResume: false,
            onSettled,
            suppressCompletionNotification: true,
            withholdScriptFromSdkEvents: serverAuthoredCarrier
        });
    });
    switch(o.status){
        case "completed":
            {
                let a = {
                    status: "completed",
                    workflowName: n.meta.name,
                    runId: m,
                    agentCount: o.agentCount,
                    durationMs: o.durationMs,
                    failures: o.failures,
                    result: o.result
                };
                let r = c(a);
                if (r === undefined || r.length > l) {
                    let E = r === undefined ? "not serializable" : `${r.length} chars exceeds ${l}`;
                    let failures = o.failures.slice(0, 20).map((h)=>{
                        if (h.length > 500) {
                            return `${ne(h, 500)}\u2026[truncated]`;
                        }
                        return h;
                    });
                    if (o.failures.length > failures.length) {
                        failures.push(`\u2026and ${o.failures.length - failures.length} more failures omitted`);
                    }
                    r = c({
                        ...a,
                        failures
                    });
                    if (r === undefined || r.length > l) {
                        r = c({
                            ...a,
                            failures: [
                                `<${o.failures.length} failures omitted: diagnostics never outrank the result payload>`
                            ]
                        });
                    }
                    if (r === undefined || r.length > l) {
                        r = c({
                            ...a,
                            failures,
                            result: `<result omitted: ${E}>`
                        });
                    }
                    if (r === undefined || r.length > l) {
                        r = c({
                            status: "completed",
                            workflowName: ne(String(n.meta.name), 200),
                            runId: m,
                            agentCount: o.agentCount,
                            durationMs: o.durationMs,
                            failures: [
                                `<${o.failures.length} failures omitted: fallback exceeded ${l}>`
                            ],
                            result: `<result omitted: ${E}>`
                        }) ?? '{"status":"completed"}';
                    }
                }
                return {
                    ok: true,
                    line: `remote-workflow: ${r}`,
                    workflowName: n.meta.name
                };
            }
        case "failed":
            return s("workflow-failed", `workflow failed after ${o.durationMs}ms (${o.agentCount} agents): ${o.error}`);
        case "killed":
            return s("killed", "workflow was aborted before completion.");
        case "adopted":
        case "unknown":
            return s("unexpected-state", `workflow ended in unexpected state '${o.status}'.`);
    }
}
export { H1t, MQe, ehn };
