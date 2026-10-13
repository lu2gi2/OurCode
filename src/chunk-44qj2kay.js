import { q, K, we } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { W, l, uU } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { K1 } from "/$bunfs/root/chunk-x47nahfr.js";
import { vr } from "/$bunfs/root/chunk-7mawjt4q.js";
import { ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { la, k, Ou, mi, yz } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ht, Xt } from "/$bunfs/root/chunk-6dwnw6av.js";
import { WDn, C5, PW } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { Iu, iN, T$e } from "/$bunfs/root/chunk-vsa1vts5.js";
import { u_ } from "/$bunfs/root/chunk-4r6b8efh.js";
import { d_ } from "/$bunfs/root/chunk-y9c4grt0.js";
import { x3, IA, qvt, xe, zt, dRn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Gun, Vun, V6n, q6n, K6n, bgt, Y6n } from "/$bunfs/root/chunk-qyt69pyr.js";
import { AJe, nBo, $gt, rBo } from "/$bunfs/root/chunk-bqrey7sz.js";
import { hE, t_ } from "/$bunfs/root/chunk-59xjawk6.js";
import { wb, Pm, hd } from "/$bunfs/root/chunk-f0q358n3.js";
function J() {
    return k("tengu_onyx_plover", null);
}
function dFt() {
    let e = J();
    return e?.enabled === true || e?.available === true;
}
function uJe() {
    if (!dFt()) {
        return false;
    }
    let autoDreamEnabled = ft().autoDreamEnabled;
    if (autoDreamEnabled !== undefined) {
        return autoDreamEnabled;
    }
    return J()?.enabled === true;
}
class Z {
    runner = null;
}
const V = new q(()=>new Z);
const le = "## Team memory (`team/` subdirectory)\n\nThe `team/` subdirectory holds memories shared across everyone working in this repo. Other teammates' Claude sessions write here too — treat it differently from your personal files:\n\n- **Phase 1:** `ls team/` and skim it alongside your personal files. A teammate may have already captured something you'd otherwise duplicate.\n- **Phase 3:** Merge near-duplicates *within* `team/` the same way you would personal memories. If a personal memory restates a team memory, delete the personal one.\n- **Phase 4 — be conservative pruning `team/`:**\n  - DO delete or fix a team memory that is clearly contradicted by the current code, or that a newer team memory marks as superseded.\n  - DO NOT delete a team memory just because you don't recognize it or it isn't relevant to *your* recent sessions — a teammate may rely on it.\n  - When unsure, leave it. A stale team memory costs little; deleting a teammate's load-bearing note costs a lot.\n\nDo not promote personal memories into `team/` during a dream — that's a deliberate choice the user makes via `/remember`, not something to do reflexively.";
const de = `### Reconcile memories against CLAUDE.md

Project CLAUDE.md instructions are loaded in your system prompt. For each memory that captures feedback or project conventions (the \`feedback\`/\`project\` types, where tagged), check whether it contradicts a CLAUDE.md instruction on the same topic:

- **Memory is stale** \u2014 CLAUDE.md and the memory describe different procedures for the same task: CLAUDE.md is the maintained, checked-in source. Delete the memory, or rewrite it to agree if it carries context worth keeping (the *why* is still useful but the *how* is wrong).
- **CLAUDE.md may be stale** \u2014 the memory is clearly dated after CLAUDE.md and explicitly corrects it: do NOT edit CLAUDE.md during a dream. Annotate the memory with "contradicts CLAUDE.md \u2014 verify which is current" and list it in your summary so the user can update CLAUDE.md.
- **Not a conflict** \u2014 the memory adds detail CLAUDE.md doesn't cover, or narrows a CLAUDE.md rule with a stated reason. Leave it.

A \`feedback\` memory's "Why: the user corrected me" framing is not evidence it's newer than CLAUDE.md \u2014 CLAUDE.md may have been updated since.`;
function Q(memoryDir, r, o, y = false, p = false, s = false) {
    return `# Dream: Memory Consolidation

You are performing a dream \u2014 a reflective pass over your memory files. Synthesize what you've learned recently into durable, well-organized memories so that future sessions can orient quickly.

Memory directory: \`${memoryDir}\`
${T$e}

Session transcripts: \`${r}\` (large JSONL files \u2014 grep narrowly, don't read whole files)
${y ? `
${le}
` : ""}
---

## Phase 1 \u2014 Orient

- \`ls\` the memory directory to see what already exists
- Read \`${Iu}\` to understand the current index
- Skim existing topic files so you improve them rather than creating duplicates
- If a \`sessions/\` subdirectory exists, review recent entries there

## Phase 2 \u2014 Gather recent signal

Look for new information worth persisting. Sources in rough priority order:

1. **Existing memories that drifted** \u2014 facts that contradict something you see in the codebase now
2. **Transcript search** \u2014 if you need specific context (e.g., "what was the error message from yesterday's build failure?"), grep the JSONL transcripts for narrow terms:
   \`grep -rn "<narrow term>" ${r}/ --include="*.jsonl" | tail -50\`

Don't exhaustively read transcripts. Look only for things you already suspect matter.

## Phase 3 \u2014 Consolidate

For each thing worth remembering, write or update a memory file at the top level of the memory directory. Use the memory file format and type conventions from your system prompt's auto-memory section \u2014 it's the source of truth for what to save, how to structure it, and what NOT to save.${p ? ` The ${wb} / ${Pm} / ${hd} tools are unavailable in a dream: consolidate only this memory directory, and leave anything that section marks as shared with the project where it is \u2014 never copy it into these files.` : ""}${""}

Focus on:
- Merging new signal into existing topic files rather than creating near-duplicates
- Converting relative dates ("yesterday", "last week") to absolute dates so they remain interpretable after time passes
- Deleting contradicted facts \u2014 if today's investigation disproves an old memory, fix it at the source

## Phase 4 \u2014 Prune and index

Update \`${Iu}\` so it stays under ${iN} lines AND under ~25KB. It's an **index**, not a dump \u2014 each entry should be one line under ~150 characters: \`- [Title](file.md) \u2014 one-line hook\`. Never write memory content directly into it.

- Remove pointers to memories that are now stale, wrong, or superseded
- Demote verbose entries: if an index line is over ~200 chars, it's carrying content that belongs in the topic file \u2014 shorten the line, move the detail
- Add pointers to newly important memories
- Resolve contradictions \u2014 if two files disagree, fix the wrong one

${de}

---

Return a brief summary of what you consolidated, updated, or pruned. If nothing changed (memories are already tight), say so.${o ? `

## Additional context

${o}` : ""}`;
}
const ue = 30;
function B(e) {
    return typeof e === "object" && e !== null && "type" in e && e.type === "dream";
}
function ee(taskRegistry, r) {
    let o = hE("dream");
    let y = {
        ...t_(o, "dream", "dreaming"),
        type: "dream",
        status: "running",
        skipTranscript: true,
        phase: "starting",
        sessionsReviewing: r.sessionsReviewing,
        filesTouched: [],
        turns: [],
        abortController: r.abortController,
        priorMtime: r.priorMtime,
        ...r.storageV5 !== undefined && {
            storageV5: r.storageV5
        }
    };
    taskRegistry.register(y);
    return o;
}
function te(e, r, o, taskRegistry) {
    taskRegistry.update(e, (p)=>{
        let s = new Set(p.filesTouched);
        let n = o.filter((a)=>!s.has(a) && s.add(a));
        if (r.text === "" && r.toolUseCount === 0 && n.length === 0) {
            return p;
        }
        return {
            ...p,
            phase: n.length > 0 ? "updating" : p.phase,
            filesTouched: n.length > 0 ? [
                ...p.filesTouched,
                ...n
            ] : p.filesTouched,
            turns: p.turns.slice(-(ue - 1)).concat(r)
        };
    });
}
function re(e, taskRegistry) {
    taskRegistry.update(e, (o)=>({
            ...o,
            status: "completed",
            endTime: Date.now(),
            notified: true,
            abortController: undefined
        }));
    g("task_dream");
    la(e, "completed", {
        skipTranscript: true,
        ambient: true
    });
}
function oe(e, taskRegistry) {
    taskRegistry.update(e, (o)=>({
            ...o,
            status: "failed",
            endTime: Date.now(),
            notified: true,
            abortController: undefined
        }));
    m("task_dream", "task_dream_failed");
    la(e, "failed", {
        skipTranscript: true,
        ambient: true
    });
}
const w = null;
const ce = 600000;
const pe = new RegExp(`^\\s*(?:${q6n})\\b`, "i");
const se = {
    minHours: 24,
    minSessions: 5
};
function fe() {
    let e = k("tengu_onyx_plover", null);
    return {
        minHours: typeof e?.minHours === "number" && Number.isFinite(e.minHours) && e.minHours > 0 ? e.minHours : se.minHours,
        minSessions: typeof e?.minSessions === "number" && Number.isFinite(e.minSessions) && e.minSessions > 0 ? e.minSessions : se.minSessions
    };
}
function he() {
    if (vr() !== null) {
        return false;
    }
    if (K1()) {
        return false;
    }
    if (!Ou()) {
        return false;
    }
    if (C5()) {
        return false;
    }
    return uJe();
}
function ge() {
    return false;
}
function JNo(e) {
    let r = 0;
    let o = false;
    let y = new Set;
    V.of(e).runner = async (s, n)=>{
        let a = fe();
        let c = ge();
        if (!c && !he()) {
            return;
        }
        let A;
        try {
            A = await AJe(undefined, s.toolUseContext.storageV5);
        } catch (error) {
            t(`[autoDream] readLastConsolidatedAt failed: ${l(error)}`);
            return;
        }
        let O = (Date.now() - A) / 3600000;
        if (!c && O < a.minHours) {
            return;
        }
        let Y = Date.now() - r;
        if (!c && Y < ce) {
            t(`[autoDream] scan throttle \u2014 time-gate passed but last scan was ${Math.round(Y / 1000)}s ago`);
            return;
        }
        r = Date.now();
        let f;
        try {
            f = await rBo(A, s.toolUseContext.storageV5);
        } catch (error) {
            t(`[autoDream] listSessionsTouchedSince failed: ${l(error)}`);
            return;
        }
        let ae = K();
        f = f.filter((u)=>u !== ae);
        if (!c && f.length < a.minSessions) {
            t(`[autoDream] skip \u2014 ${f.length} sessions since last consolidation, need ${a.minSessions}`);
            i("tengu_auto_dream_skipped", {
                reason: b("sessions"),
                session_count: f.length,
                min_required: a.minSessions
            });
            return;
        }
        let N = K6n(s.toolUseContext.getAppState().toolPermissionContext, yz());
        if (N !== undefined) {
            t(`[autoDream] skip \u2014 ${Vun(N)} would refuse memory writes`);
            i("tengu_auto_dream_skipped", {
                reason: b("permission_rule")
            });
            if (n !== undefined) {
                let u = V6n(e, N, mi());
                if (u !== undefined) {
                    n(zt(u, "warning"));
                }
            }
            return;
        }
        let priorMtime;
        if (c) {
            priorMtime = A;
        } else {
            try {
                priorMtime = await nBo(s.toolUseContext.storageV5);
            } catch (error) {
                t(`[autoDream] lock acquire failed: ${l(error)}`);
                return;
            }
            if (priorMtime === null) {
                i("tengu_auto_dream_skipped", {
                    reason: b("lock")
                });
                return;
            }
        }
        let memoryDir = mi();
        let M;
        let before = M === "unplaced" || M === "capped" ? undefined : M;
        if (before === "newer" || before !== undefined && "unreadable" in before) {
            if (!c) {
                await $gt(priorMtime, s.toolUseContext.storageV5);
            }
            if (before !== "newer") {
                t(`[autoDream] skipped: the memory items could not be read (cause: ${before.unreadable}); the warning above says why and what resumes consolidation`);
                i("tengu_auto_dream_skipped", {
                    reason: b("items_unreadable")
                });
                if (w !== null && n !== undefined && !y.has(before.unreadable)) {
                    y.add(before.unreadable);
                    n?.(zt(await w.unreadableItemsNotice(before.unreadable, memoryDir), "warning"));
                }
                return;
            }
            t("[autoDream] skip — newer item record");
            i("tengu_auto_dream_skipped", {
                reason: b("record_newer")
            });
            if (w !== null && n !== undefined && !o) {
                o = true;
                n?.(zt(w.NEWER_RECORD_NOTICE, "warning"));
            }
            return;
        }
        let team_memory_enabled = PW();
        t(`[autoDream] firing \u2014 ${O.toFixed(1)}h since last, ${f.length} sessions to review`);
        i("tengu_auto_dream_fired", {
            hours_since: Math.round(O),
            sessions_since: f.length,
            team_memory_enabled
        });
        let { taskRegistry } = s.toolUseContext;
        let abortController = new AbortController;
        let R = ee(taskRegistry, {
            sessionsReviewing: f.length,
            priorMtime,
            abortController,
            storageV5: s.toolUseContext.storageV5
        });
        let L = "fork";
        try {
            let u = d_(we());
            let z = `

**Tool constraints for this run:** Shell access is restricted to read-only commands (\`ls\`, \`find\`, \`grep\`, \`cat\`, \`stat\`, \`wc\`, \`head\`, \`tail\`, and similar) plus deleting \`.md\` files inside the memory directory (outside protected subdirectories like \`.git\` or \`agents\`; \`rm\` takes no flags except \`-f\`). Anything else that writes, redirects to a file, or modifies state will be denied. Plan your exploration with this in mind.

Sessions since last consolidation (${f.length}):
${f.map((_)=>`- ${_}`).join(`
`)}`;
            let ke = false;
            let content = Q(memoryDir, u, z, team_memory_enabled, WDn(), false);
            let ie = _e(R, taskRegistry, memoryDir);
            let F = new Map;
            let H = new Set;
            let G = false;
            let X = false;
            let j = false;
            let C;
            try {
                C = await IA({
                    promptMessages: [
                        xe({
                            content
                        })
                    ],
                    cacheSafeParams: x3(s),
                    canUseTool: Y6n(memoryDir, before !== undefined ? w?.keptItemsOf(before) : undefined, {
                        fork: "dream",
                        onWriteAllowed: (_, U)=>F.set(U, _)
                    }),
                    querySource: "auto_dream",
                    forkLabel: "auto_dream",
                    skipTranscript: true,
                    overrides: {
                        abortController
                    },
                    onMessage: (_)=>{
                        ie(_);
                        ye(_, H);
                        if (_.type === "assistant") {
                            G = _.isApiErrorMessage === true;
                        }
                    },
                    skipCacheWrite: qvt()
                });
                X = true;
                j = !abortController.signal.aborted && !G;
            } finally{
                let dreamWrote = new Set([
                    ...F
                ].filter(([T])=>!j || !H.has(T)).map(([, T])=>T));
                let mayHaveWritten = new Set([
                    ...F
                ].filter(([T])=>j && H.has(T)).map(([, T])=>T));
                if (w !== null && M === "capped") {
                    await w.deferCappedRunWrites({
                        memoryDir,
                        dreamWrote,
                        mayHaveWritten
                    });
                }
                if (w !== null && before !== undefined) {
                    let T = await w.settleDreamItems({
                        memoryDir,
                        before,
                        dreamWrote,
                        mayHaveWritten
                    });
                    if ((T.skipped || T.failed) && X && !abortController.signal.aborted && !c && await w.claimLockGiveBack(memoryDir)) {
                        await $gt(priorMtime, s.toolUseContext.storageV5);
                    }
                }
            }
            L = "completion";
            re(R, taskRegistry);
            let D = s.toolUseContext.taskRegistry.get(R);
            let files_touched_count = B(D) ? D.filesTouched.length : 0;
            if (B(D) && D.filesTouched.length > 0) {
                n?.({
                    ...dRn(D.filesTouched),
                    verb: "Improved"
                });
                await Gun(s.toolUseContext, {
                    source: "dream",
                    summary: `consolidated ${D.filesTouched.length} ${I(D.filesTouched.length, "memory file")}`,
                    paths: D.filesTouched
                });
            }
            t(`[autoDream] completed \u2014 cache: read=${C.totalUsage.cache_read_input_tokens} created=${C.totalUsage.cache_creation_input_tokens}`);
            i("tengu_auto_dream_completed", {
                cache_read: C.totalUsage.cache_read_input_tokens,
                cache_created: C.totalUsage.cache_creation_input_tokens,
                output: C.totalUsage.output_tokens,
                sessions_reviewed: f.length,
                files_touched_count,
                team_memory_enabled,
                account_memory_line_rendered: false
            });
        } catch (error) {
            if (abortController.signal.aborted) {
                t("[autoDream] aborted by user");
                return;
            }
            t(`[autoDream] ${L} failed: ${l(error)}`);
            i("tengu_auto_dream_failed", {
                phase: d(L),
                error_class: uU(W(error))
            });
            if (L === "fork") {
                oe(R, taskRegistry);
                await $gt(priorMtime, s.toolUseContext.storageV5);
            }
        }
    };
}
function ye(e, r) {
    if (e.type !== "user" || e.toolDenialKind !== undefined || typeof e.message.content === "string") {
        return;
    }
    for (let o of e.message.content){
        if (o.type === "tool_result" && o.is_error === true) {
            r.add(o.tool_use_id);
        }
    }
}
function _e(e, taskRegistry, memoryDir) {
    return (y)=>{
        if (y.type !== "assistant") {
            return;
        }
        let p = "";
        let toolUseCount = 0;
        let n = [];
        for (let a of y.message.content){
            if (a.type === "text") {
                p += a.text;
            } else if (a.type === "tool_use") {
                toolUseCount++;
                if (a.name === ht || a.name === Xt) {
                    let c = a.input;
                    if (typeof c.file_path === "string") {
                        n.push(c.file_path);
                    }
                } else if (u_.includes(a.name)) {
                    let c = a.input;
                    if (typeof c.command === "string" && pe.test(c.command)) {
                        for (let A of c.command.matchAll(/"[^"]*\.md"|'[^']*\.md'|(?:\/|[A-Za-z]:[\\/])\S*\.md\b/g)){
                            n.push(A[0].replace(/^["']|["']$/g, ""));
                        }
                    }
                }
            }
        }
        te(e, {
            text: p.trim(),
            toolUseCount
        }, n.filter((a)=>bgt(a, memoryDir)), taskRegistry);
    };
}
async function QNo(e, r) {
    await V.of(e.toolUseContext.session.host).runner?.(e, r);
}
export { dFt, uJe, JNo, QNo };
