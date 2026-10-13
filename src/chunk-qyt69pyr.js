import { Nh } from "/$bunfs/root/chunk-dn762950.js";
import { q, K, sw, kC, Dq, V2n } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { W, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, _o, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Cr } from "/$bunfs/root/chunk-6kc68p18.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { vr } from "/$bunfs/root/chunk-7mawjt4q.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { et } from "/$bunfs/root/chunk-w1n7t02f.js";
import { Irs, Ors, NZr, Mrs, GVe, a6t } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Iu } from "/$bunfs/root/chunk-vsa1vts5.js";
import { KCt, WDn, JCt, C5, PW, EB, Ui, QLe, CE } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { cP, co, Jr, Ln, k, g_o, h_o, dct, N6e, Goe, y_o, bTs, Ou, IY, F6e, S1n, mi, yz, o0, k8 } from "/$bunfs/root/chunk-0ycjphb5.js";
import { TO, wut } from "/$bunfs/root/chunk-52bcnmbr.js";
import { _n } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { uC } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { ht, Xt, Be, Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
import { lr } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { xl, It } from "/$bunfs/root/chunk-4r6b8efh.js";
import { X$ } from "/$bunfs/root/chunk-6sdmsz4f.js";
import { td } from "/$bunfs/root/chunk-pkje2p8h.js";
import { Bc, xm, Wx, Go, lc } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { Ff, mKt, x3, IA, qvt, xe, zt, dRn, zo, ni } from "/$bunfs/root/chunk-kasbfbhj.js";
import { kde } from "/$bunfs/root/chunk-6rhcrh84.js";
import { lBo } from "/$bunfs/root/chunk-ygg2kk5q.js";
import { wb, Pm, hd } from "/$bunfs/root/chunk-f0q358n3.js";
import { Sl } from "/$bunfs/root/chunk-qbxhbxwh.js";
import { rt } from "/$bunfs/root/chunk-xx1j2680.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { basename, sep } from "path";
async function Gun(e, n) {
    if (n.paths.length === 0) {
        return;
    }
    let r = [];
    for (let o of n.paths){
        try {
            let s = et(o);
            r.push(s);
            let u = await mKt(e.readFileState, s, {
                requireReadBeforeWrite: true
            });
            if (u !== null) {
                t(`[memdir] re-synced readFileState for ${o} after the background ${n.source} pass wrote it (${u === "changed" ? "content changed" : "mtime only, content identical"})`);
            }
        } catch (error) {
            t(`[memdir] left ${_(o)} out of the background ${n.source} pass's change notice, could not resolve it: ${l(error)}`);
        }
    }
    if (r.length === 0) {
        return;
    }
    e.enqueuePendingMemoryUpdate({
        ...n,
        paths: D(r)
    });
}
const Te = new WeakSet;
function Vun(e) {
    return `the ${e.ruleBehavior} rule "${_n(e.ruleValue)}"`;
}
function V6n(e, n, r) {
    if (Te.has(e)) {
        return;
    }
    Te.add(e);
    let o = `${Vun(n)} (from ${uC(n.source)})`;
    let s = n.ruleBehavior === "deny" ? `${o} blocks those writes` : `${o} needs your approval for each write, and background saving can't ask`;
    return `Claude isn't saving memories to ${r} in the background: ${s}. Saving resumes once that rule is removed or no longer covers that folder, and may then include what was skipped.`;
}
class Oe {
    extractor = null;
    drainer = async ()=>{};
    disarm = ()=>{};
    owedWithin = ()=>false;
    onPassEnded = null;
}
const me = new q(()=>new Oe);
function be(message_count, n, r, o, s) {
    let u = xl();
    let y = u ? Be : Ct;
    let h = u ? "ls/find/cat/stat/wc/head/tail and similar" : "Get-ChildItem/Get-Content/Select-Object -First/-Last and similar";
    let M = u ? "rm" : "Remove-Item";
    let j = n.length > 0 ? `

## Existing memory files

${n}

Check this list before writing \u2014 update an existing file rather than creating a duplicate.` : "";
    let B = r ? "scope guidance, " : "";
    let Y = `Available tools: ${rt}, ${Jr}, ${co}, read-only ${y} (${h}), and ${ht}/${Xt} for paths inside the memory directory only, and ${y} ${M} of .md files inside the memory directory only (outside protected subdirectories like .git or agents${u ? "; rm takes no flags except -f" : ""}). All other tools \u2014 MCP, Agent, write-capable ${y}, etc \u2014 will be denied.`;
    let E = `You have a limited turn budget. ${ht} requires a prior ${rt} of the same file, so the efficient strategy is: turn 1 \u2014 issue all ${rt} calls in parallel for every file you might update; turn 2 \u2014 issue all ${Xt}/${ht} calls in parallel. Do not interleave reads and writes across multiple turns.`;
    return [
        `You are now acting as the memory extraction subagent. Analyze the most recent ~${message_count} messages above and use them to update your persistent memory systems.`,
        "",
        Y,
        "",
        E,
        "",
        `You MUST only use content from the last ~${message_count} messages to update your persistent memories. Do not waste any turns attempting to investigate or verify that content further \u2014 no grepping source files, no reading code to confirm a pattern exists, no git commands.` + j,
        "",
        "If nothing is worth saving, output only 'Nothing to save.' Do not explain why.",
        "",
        "If the user explicitly asks you to remember something, save it immediately as whichever type fits best. If they ask you to forget something, find and remove the relevant entry.",
        "",
        `Apply the memory types, ${B}what-not-to-save criteria, and frontmatter format from the Memory section of your system prompt \u2014 it is already in your context above.`,
        ...KCt() ? [
            "",
            "Skip the project-skill upkeep step here: your writes are restricted to the memory directory, so record the correction as a feedback memory only."
        ] : [],
        ...o ? [
            "",
            `The ${wb} / ${Pm} / ${hd} tools are unavailable here, so skip anything the scope guidance marks as shared with the project \u2014 the main conversation saves those; never file them in the personal directory instead. Save only what belongs in your personal memory directory.`
        ] : [],
        ...[]
    ].join(`
`);
}
function _e(e) {
    return e.type === "user" || e.type === "assistant";
}
function Fe(messages, n) {
    if (n === null || n === undefined) {
        return F(messages, _e);
    }
    let r = false;
    let o = 0;
    for (let s of messages){
        if (!r) {
            if (s.uuid === n) {
                r = true;
            }
            continue;
        }
        if (_e(s)) {
            o++;
        }
    }
    if (!r) {
        return F(messages, _e);
    }
    return o;
}
const $e = 3;
function Ne(messages, n) {
    let r = new Set(n.map((o)=>o.uuid));
    return messages.filter((o)=>!r.has(o.uuid));
}
function We(e) {
    return e.some((n)=>n.type === "attachment" && n.attachment.type === "max_turns_reached");
}
function De(e) {
    return e.findLast((n)=>n.type === "assistant")?.isApiErrorMessage === true;
}
function ye(e, n, r) {
    let o = n === undefined;
    let s = new Set;
    for (let u of e){
        if (!o) {
            if (u.uuid === n) {
                o = true;
            }
            continue;
        }
        if (u.type === "user") {
            let h = u.message.content;
            if (Array.isArray(h) && h.some((M)=>M.type === "tool_result" && M.is_error !== true && s.has(M.tool_use_id))) {
                return true;
            }
            continue;
        }
        if (u.type !== "assistant") {
            continue;
        }
        let y = u.message.content;
        if (!Array.isArray(y)) {
            continue;
        }
        for (let h of y){
            if (r && h.type === "tool_use" && dct.has(h.name)) {
                return true;
            }
            if (h.type === "tool_use" && h.name === hd) {
                s.add(h.id);
                continue;
            }
            let M = Me(h);
            if (M !== undefined && o0(M)) {
                return true;
            }
        }
    }
    return r && !o && ye(e, undefined, true);
}
const Ce = 3;
function Le(e) {
    return F(e.split(/\s+/), Boolean);
}
function Ie(e) {
    if (e.type !== "user" || e.isMeta) {
        return false;
    }
    let content = e.message.content;
    if (typeof content === "string") {
        return Le(content) >= Ce;
    }
    if (!Array.isArray(content)) {
        return false;
    }
    return content.some((r)=>r.type === "text" && Le(r.text) >= Ce);
}
function Ue(messages, personPrompt) {
    for(let r = messages.length - 1; r >= 0; r--){
        let o = messages[r];
        if (o === undefined || !cP(o)) {
            continue;
        }
        if (o.type === "user") {
            if (!o.isMeta) {
                return o.uuid;
            }
        } else if (o.type === "attachment" && o.attachment.type === "queued_command" && !o.attachment.isMeta && o.attachment.source_uuid !== undefined) {
            return o.attachment.source_uuid;
        }
    }
    return personPrompt?.uuid;
}
function He(messages, n) {
    let r = n === undefined;
    for (let o of messages){
        if (!r) {
            if (o.uuid === n) {
                r = true;
            }
            continue;
        }
        if (Ie(o)) {
            return true;
        }
    }
    if (!r) {
        return messages.some(Ie);
    }
    return false;
}
function Me(e) {
    if (e.type !== "tool_use" || e.name !== ht && e.name !== Xt) {
        return;
    }
    let e_input = e.input;
    if (typeof e_input === "object" && e_input !== null && "file_path" in e_input) {
        let r = e_input.file_path;
        if (typeof r === "string") {
            return r;
        }
        return undefined;
    }
}
const ue = null;
const Ye = null;
const X = null;
const q6n = "rm|remove-item|ri|del|erase";
const at = new RegExp(`^(?:${q6n})$`, "i");
function A(e, n, r) {
    t(`[autoMem] denied ${e.name} (${r}): ${n}`);
    i("tengu_auto_mem_tool_denied", {
        tool_name: Ln(e.name),
        reason: d(r)
    });
    return {
        behavior: "deny",
        message: n,
        decisionReason: {
            type: "other",
            reason: n
        }
    };
}
function mt(e, n) {
    let r = e.trim().match(/"[^"]*"|'[^']*'|\S+/g) ?? [];
    if (r.length < 2) {
        return;
    }
    if (!at.test(r[0])) {
        return;
    }
    let o = [];
    for(let s = 1; s < r.length; s++){
        let u = r[s];
        if (/^-(?:Literal)?Path$/i.test(u)) {
            continue;
        }
        if (u.startsWith("-")) {
            return;
        }
        let y = u.startsWith('"') && u.endsWith('"') || u.startsWith("'") && u.endsWith("'") ? u.slice(1, -1) : u;
        if (/[*?[\]$`(){}|;&<>"',]/.test(y)) {
            return;
        }
        if (!bgt(y, n)) {
            return;
        }
        o.push(y);
    }
    if (o.length > 0) {
        return o;
    }
}
const ut = new Set([
    rt,
    Jr,
    co,
    ht,
    Xt
]);
async function ct(command, n) {
    let r = await X$(command);
    if (r.kind !== "simple" || r.commands.length !== 1) {
        return false;
    }
    let o = r.commands[0];
    if (o === undefined || o.argvSourceLiteral !== true || o.argv[0] !== "ls" || o.redirects.length > 0 || o.envVars.length > 0) {
        return false;
    }
    let s = (h)=>h.replace(/[/\\]+$/, "");
    let u = new Set(_o(n).map(s));
    let y = o.argv.slice(1).filter((h)=>!/^-[laA1hF]+$/.test(h));
    return y.length > 0 && y.every((h)=>{
        if (h.startsWith("-") || h.startsWith("~") || h !== h.trim() || h.split(/[/\\]/).includes("..") || /[*?[]/.test(h) || h.includes("\\")) {
            return false;
        }
        try {
            return _o(et(h)).every((M)=>u.has(s(M)));
        } catch  {
            return false;
        }
    });
}
function dt(command) {
    return command.replace(/['"`\\\u2018-\u201F]/g, "").includes("..");
}
function Ee(decisionReason, n) {
    if (decisionReason?.type === "subcommandResults") {
        return [
            ...decisionReason.reasons.values()
        ].some((r)=>Ee(r.decisionReason, n));
    }
    if (n === "rule") {
        return decisionReason?.type === "rule" && decisionReason.rule.ruleBehavior !== "allow";
    }
    return decisionReason?.type === "safetyCheck" && decisionReason.circuitBreaker === "outsideReadsBlocked" || decisionReason?.type === "other" && decisionReason.reason === TO;
}
function K6n(e, n) {
    try {
        for (let name of [
            Xt,
            ht
        ]){
            let o = Go(e, {
                name
            }) ?? lc(e, {
                name
            });
            if (o !== null) {
                return o;
            }
        }
        for (let r of _o(n)){
            for (let o of [
                "deny",
                "ask"
            ]){
                let s = Ui(r, e, "edit", o);
                if (s !== null) {
                    return s;
                }
            }
        }
    } catch (error) {
        c(W(error));
    }
}
async function lt(e, n) {
    let r = await X$(e);
    if (r.kind !== "simple") {
        return;
    }
    if (r.commands.length !== 1) {
        return;
    }
    let o = r.commands[0];
    if (!o) {
        return;
    }
    if (o.argv[0] !== "rm") {
        return;
    }
    if (o.redirects.length > 0) {
        return;
    }
    if (o.envVars.length > 0) {
        return;
    }
    let s = [];
    let u = false;
    for(let y = 1; y < o.argv.length; y++){
        let h = o.argv[y];
        if (h === undefined) {
            continue;
        }
        if (!u) {
            if (h === "--") {
                u = true;
                continue;
            }
            if (h.startsWith("-")) {
                if (h === "-f" || h === "--force") {
                    continue;
                }
                return;
            }
        }
        if (/[*?[]/.test(h)) {
            return;
        }
        if (!h.startsWith("/") || !bgt(h, n)) {
            return;
        }
        s.push(h);
    }
    if (s.length > 0) {
        return s;
    }
}
function bgt(e, n) {
    return e.endsWith(".md") && k8(e, n);
}
function Y6n(e, n, { fork = "dream", onWriteAllowed } = {}) {
    return async (s, u, y, h, toolUseId, j)=>{
        if (IY()) {
            return A(s, wut, "memory_paused");
        }
        if (s.mcpInfo) {
            return A(s, "MCP tools are not available to the memory agent", "mcp_tool");
        }
        if (j !== undefined || y.hookAskFloor) {
            return A(s, "a PreToolUse hook requires confirmation for this call, and the memory agent runs headless with no user to answer — the call is denied", "hook_ask");
        }
        let B;
        if (s.name === Be || s.name === Ct) {
            let E = lBo("the memory agent", u);
            if (E.deniedFlag !== undefined) {
                return A(s, E.message, "shell_flag");
            }
            B = E.sanitizedInput;
            if (O() === "windows" && y.getAppState().toolPermissionContext.blockReadsOutsideWorkingDirectories === true && typeof u.command === "string" && dt(u.command)) {
                return A(s, "On Windows with permissions.blockReadsOutsideWorkingDirectories on, the memory agent's shell commands may not contain '..' anywhere, even split by quotes or a backslash, because where it leads cannot be checked. Use absolute paths, and avoid '..' in patterns too.", "windows_dot_dot");
            }
        }
        try {
            let E = import.meta.require("/$bunfs/root/chunk-c0wwx2sg.js");
            let { checkRuleBasedPermissions } = E;
            let { carriesAskRuleIntent } = E;
            let N = y.getAppState();
            let path = e.replace(/[/\\]+$/, "");
            let J = N.toolPermissionContext.blockReadsOutsideWorkingDirectories === true && N.toolPermissionContext.restricted !== true && !JCt() && ![
                path,
                ..._o(path)
            ].some((p)=>S1n(p.replace(/[/\\]+$/, "")));
            let L = {
                ...y,
                toolUseId
            };
            let te = {
                ...L,
                getAppState: ()=>({
                        ...N,
                        toolPermissionContext: {
                            ...N.toolPermissionContext,
                            additionalWorkingDirectories: new Map([
                                ...N.toolPermissionContext.additionalWorkingDirectories,
                                [
                                    path,
                                    {
                                        path,
                                        source: "session"
                                    }
                                ]
                            ])
                        }
                    })
            };
            let U = await checkRuleBasedPermissions(s, u, J && ut.has(s.name) ? te : L, {
                crashIsObjection: true
            });
            let Q = U?.behavior === "ask" && O() !== "windows" && J && s.name === Be && U.decisionReason?.type === "safetyCheck" && U.decisionReason.circuitBreaker === "outsideReadsBlocked" && !carriesAskRuleIntent(U) && typeof u.command === "string" && await ct(u.command, e) && await checkRuleBasedPermissions(s, u, te, {
                crashIsObjection: true
            }) === null;
            if (U !== null && !Q) {
                return A(s, U.message ?? "a configured permission rule blocks this call for the memory agent", Ee(U.decisionReason, "rule") || U.behavior === "ask" && carriesAskRuleIntent(U) ? "permission_rule" : Ee(U.decisionReason, "read_block") ? "read_block" : "permission_check");
            }
        } catch (error) {
            c(W(error));
            return A(s, "the memory agent could not evaluate configured permission rules; failing closed", "rule_check_failed");
        }
        if (s.name === td) {
            return {
                behavior: "allow",
                updatedInput: u
            };
        }
        if (s.name === rt || s.name === Jr || s.name === co) {
            let E = y.getAppState().toolPermissionContext;
            let v = QLe(s, u, E);
            if (v) {
                return A(s, v.message, "network_path");
            }
            if (E.blockReadsOutsideWorkingDirectories === true) {
                let R = CE(s, u, E);
                if (R.behavior === "deny") {
                    let N = s.getPath?.(u);
                    let T = _o(e).map((L)=>{
                        if (L.endsWith(sep)) {
                            return L;
                        }
                        return L + sep;
                    });
                    if (!(N !== undefined && !JCt() && _o(N).every((L)=>T.some((te)=>k8(L, te)))) || R.decisionReason.type !== "other" || R.decisionReason.reason !== TO) {
                        return A(s, R.message, "read_block");
                    }
                }
            }
            return {
                behavior: "allow",
                updatedInput: u
            };
        }
        if (s.name === Be || s.name === Ct) {
            let E = B ?? u;
            let v = s.inputSchema.safeParse(u);
            if (v.success) {
                if (s.isReadOnly(v.data, y)) {
                    return {
                        behavior: "allow",
                        updatedInput: E
                    };
                }
                let T = v.data.command;
                if (typeof T === "string") {
                    if ((s.name === Be ? await lt(T, e) : mt(T, e)) !== undefined) {
                        return {
                            behavior: "allow",
                            updatedInput: E
                        };
                    }
                }
            }
            let R = s.name === Be;
            return A(s, `Only read-only shell commands and ${R ? "rm (no flags except -f)" : "Remove-Item"} of .md files under ${e} (not protected subdirectories like .git or agents) are permitted in this context (${R ? "ls, find, grep, cat, stat, wc, head, tail, and similar" : "Get-ChildItem, Get-Content, Select-Object -First/-Last, and similar"})`, "shell_not_allowed");
        }
        if ((s.name === ht || s.name === Xt) && "file_path" in u) {
            let E = u.file_path;
            if (typeof E === "string" && bgt(E, e)) {
                onWriteAllowed?.(E, toolUseId);
                return {
                    behavior: "allow",
                    updatedInput: u
                };
            }
        }
        let Y = xl() ? Be : Ct;
        return A(s, `only ${rt}, ${Jr}, ${co}, read-only ${Y}, and ${ht}/${Xt} within ${e} are allowed`, "tool_not_allowed");
    };
}
function pt(promptIndex, n) {
    return async (r, o, s)=>{
        if (kC()) {
            return A(r, wut, "memory_paused");
        }
        if (r.name === Sl || r.name === td) {
            return {
                behavior: "allow",
                updatedInput: o
            };
        }
        if (!Goe(y_o(s.options.mcpClients))) {
            return A(r, "the session has no CCR memory server; this background memory pass cannot run", "no_memory_server");
        }
        let toolPermissionContext = s.getAppState().toolPermissionContext;
        if ([
            ...Bc(toolPermissionContext),
            ...xm(toolPermissionContext)
        ].some((y)=>Wx(toolPermissionContext, r, y))) {
            return A(r, `${r.name} is blocked by a permission rule for this session`, "permission_rule");
        }
        if (!h_o.has(r.name)) {
            return A(r, `this background memory pass may only call ${[
                ...h_o
            ].join(", ")}`, "tool_not_allowed");
        }
        if (dct.has(r.name) && Dq() !== promptIndex) {
            n();
            return A(r, "a newer user turn has started; this background memory pass may no longer write", "newer_turn");
        }
        return {
            behavior: "allow",
            updatedInput: o
        };
    };
}
function Ke(e) {
    let n = new Set;
    for (let r of e){
        if (r.type !== "user") {
            continue;
        }
        let o = r.message.content;
        if (!Array.isArray(o)) {
            continue;
        }
        for (let s of o){
            if (s.type === "tool_result" && s.is_error === true) {
                n.add(s.tool_use_id);
            }
        }
    }
    return n;
}
function Xe(e, n) {
    let r = Me(e);
    if (r === undefined) {
        return;
    }
    let o;
    try {
        o = et(r);
    } catch  {
        return;
    }
    if (bgt(o, n)) {
        return o;
    }
}
function ft(messages, n) {
    let r = Ke(messages);
    let o = [];
    for (let s of messages){
        if (s.type !== "assistant") {
            continue;
        }
        let u = s.message.content;
        if (!Array.isArray(u)) {
            continue;
        }
        for (let y of u){
            if (y.type === "tool_use" && r.has(y.id)) {
                continue;
            }
            let h = Xe(y, n);
            if (h !== undefined) {
                o.push(h);
            }
        }
    }
    return D(o);
}
function qe(paths) {
    let n = F(paths, (r)=>basename(r) !== Iu);
    return {
        source: "extract",
        summary: n > 0 ? `saved ${n} ${I(n, "memory", "memories")}` : "updated the memory index",
        paths
    };
}
function gt(readFileState, n) {
    let r = new Map;
    let o = [];
    return {
        onMessage: (u)=>{
            if (u.type === "assistant") {
                let h = u.message.content;
                if (!Array.isArray(h)) {
                    return;
                }
                for (let M of h){
                    let j = Xe(M, n);
                    if (M.type === "tool_use" && j !== undefined) {
                        r.set(M.id, j);
                    }
                }
                return;
            }
            if (u.type !== "user") {
                return;
            }
            let content = u.message.content;
            if (!Array.isArray(content)) {
                return;
            }
            for (let h of content){
                if (h.type !== "tool_result") {
                    continue;
                }
                let M = r.get(h.tool_use_id);
                if (M === undefined) {
                    continue;
                }
                r.delete(h.tool_use_id);
                if (h.is_error === true) {
                    continue;
                }
                o.push(M);
                mKt(readFileState, M, {
                    requireReadBeforeWrite: true
                });
            }
        },
        completedWritePaths: ()=>D(o)
    };
}
function iNr(e) {
    if (a.CLAUDE_CODE_POST_TURN_MEMORY && N6e() === null) {
        t("[extractMemories] CLAUDE_CODE_POST_TURN_MEMORY is set but CLAUDE_CODE_POST_TURN_MEMORY_CONFIG is missing or invalid; the pass is off");
        f("ccr_memory_extract", "config_invalid");
    }
    let n = new Set;
    let r;
    let o;
    let s = 0;
    function u(p) {
        if (p) {
            r = p;
            o = undefined;
            s = 0;
        }
    }
    function y(p, P) {
        if (!p) {
            s++;
            if (s >= $e) {
                t(`[extractMemories] (mcp) stopped early ${s} passes in a row; the cursor moves on and these turns are not reviewed again`);
                u(P);
                return;
            }
        }
        o = K();
        t(`[extractMemories] (mcp) ${p ? "writes refused after a newer prompt" : "the pass stopped early (an API error, the turn cap with nothing saved, or a throw)"}; the cursor stays and the next pass reviews these turns again`);
    }
    let h = false;
    let M = false;
    let j = 0;
    let B;
    let Y;
    function E(p) {
        n.add(p);
        return p.finally(()=>n.delete(p));
    }
    let v = ue?.createLaptopExtractRunner(e, E);
    function R() {
        let p = Y;
        Y = undefined;
        if (p) {
            clearTimeout(p.timer);
        }
        return p;
    }
    function N(p, context, promptIndex = Dq(), personPrompt = V2n()) {
        R();
        if (p.idleFlushSeconds === 0) {
            return;
        }
        Y = {
            timer: setTimeout(T, p.idleFlushSeconds * 1000).unref(),
            dueAt: performance.now() + p.idleFlushSeconds * 1000,
            promptIndex,
            personPrompt,
            context
        };
    }
    function T() {
        let p = R();
        if (!p || M || kde() || Dq() !== p.promptIndex) {
            return;
        }
        E(L({
            context: p.context,
            trigger: "idle_flush",
            promptIndex: p.promptIndex,
            personPrompt: p.personPrompt
        }));
    }
    function J(p) {
        try {
            me.of(e).onPassEnded?.(p);
        } catch (error) {
            c(W(error));
        }
    }
    async function L({ context, appendSystemMessage, trigger, promptIndex = Dq(), personPrompt = V2n() }) {
        let { messages } = context;
        let b = N6e();
        let message_count = Fe(messages, r);
        if (o !== undefined && o !== K()) {
            o = undefined;
            s = 0;
        }
        if (o === undefined && ye(messages, r, !!b)) {
            t("[extractMemories] skipping — conversation already wrote to memory in this range");
            u(messages.at(-1)?.uuid);
            i("tengu_extract_memories_skipped_direct_write", {
                message_count
            });
            return;
        }
        if (!He(messages, r)) {
            t("[extractMemories] skipping — no user prose since last extraction");
            u(messages.at(-1)?.uuid);
            i("tengu_extract_memories_skipped_no_prose", {
                message_count
            });
            return;
        }
        let every_n_turns = b?.everyNTurns ?? k("tengu_bramble_lintel", null) ?? 1;
        let cacheSafeParams = x3(context);
        if (trigger === undefined) {
            j++;
            if (j < every_n_turns) {
                if (b) {
                    N(b, context, promptIndex, personPrompt);
                }
                return;
            }
        }
        j = 0;
        let pe = b ? undefined : K6n(context.toolUseContext.getAppState().toolPermissionContext, yz());
        if (pe !== undefined) {
            t(`[extractMemories] skipping \u2014 ${Vun(pe)} would refuse memory writes`);
            i("tengu_extract_memories_skipped_permission_rule", {
                message_count
            });
            if (appendSystemMessage !== undefined) {
                let x = V6n(e, pe, mi());
                if (x !== undefined) {
                    appendSystemMessage(zt(x, "warning"));
                }
            }
            return;
        }
        M = true;
        let ne = Date.now();
        let fe;
        try {
            if (b) {
                if (Dq() !== promptIndex) {
                    t("[extractMemories] skipping (mcp) — a newer turn started");
                    return;
                }
                t(`[extractMemories] starting (mcp, ${trigger ?? "cadence"}) \u2014 ${message_count} new messages`);
                let H = b.staleNote ? Irs(e) : undefined;
                let Se = H ? NZr(H, ni(messages), Mrs) : "";
                let superseded_writes = 0;
                let ie = await IA({
                    promptMessages: [
                        xe({
                            content: b.instruction + Se
                        })
                    ],
                    cacheSafeParams,
                    canUseTool: pt(promptIndex, ()=>{
                        superseded_writes++;
                    }),
                    querySource: "extract_memories",
                    forkLabel: "extract_memories",
                    overrides: {
                        mcpRequestMeta: bTs({
                            citesEvent: Ue(messages, personPrompt)
                        })
                    },
                    skipTranscript: true,
                    maxTurns: b.maxTurns,
                    skipCacheWrite: true
                });
                let ee = Ne(ie.messages, messages);
                if (H) {
                    Ors(e, H, ee);
                }
                let st = Ke(ee);
                let written = F(ee.flatMap((G)=>{
                    if (G.type === "assistant" && Array.isArray(G.message.content)) {
                        return G.message.content;
                    }
                    return [];
                }), (G)=>G.type === "tool_use" && dct.has(G.name) && !st.has(G.id));
                let reached_cap = We(ee);
                let review_unfinished = De(ee) || written === 0 && reached_cap;
                let unfinished_in_a_row = review_unfinished && written === 0 ? s + 1 : 0;
                if (written > 0 || superseded_writes === 0 && !review_unfinished) {
                    u(messages.at(-1)?.uuid);
                } else {
                    y(!review_unfinished, messages.at(-1)?.uuid);
                }
                i("tengu_extract_memories_extraction", {
                    mode: d("mcp"),
                    trigger: d(trigger ?? "cadence"),
                    account_memory_line_rendered: false,
                    every_n_turns,
                    input_tokens: ie.totalUsage.input_tokens,
                    output_tokens: ie.totalUsage.output_tokens,
                    cache_read_input_tokens: ie.totalUsage.cache_read_input_tokens,
                    cache_creation_input_tokens: ie.totalUsage.cache_creation_input_tokens,
                    message_count,
                    parent_context_tokens: Ff(messages),
                    compacted_in_fork: ee.some(zo),
                    turn_count: F(ee, (G)=>G.type === "assistant"),
                    written,
                    superseded_writes,
                    stale_note_rendered: Se !== "",
                    review_unfinished,
                    unfinished_in_a_row,
                    reached_cap,
                    duration_ms: Date.now() - ne
                });
                g("ccr_memory_extract");
                J({
                    outcome: written > 0 ? "saved" : review_unfinished ? "unfinished" : superseded_writes > 0 ? "writes_refused" : "nothing_to_save",
                    trigger: trigger ?? "cadence",
                    written,
                    durationMs: Date.now() - ne
                });
                return;
            }
            let x = mi();
            t(`[extractMemories] starting \u2014 ${message_count} new messages, memoryDir=${x}`);
            let oe = WDn();
            let ge = PW() || oe;
            let canUseTool = Y6n(x, undefined, {
                fork: "extraction"
            });
            let Qe = a6t(await GVe(x, lr().signal, context.toolUseContext.storageV5));
            let account_memory_line_rendered = false;
            let he = X?.isPromoterExtractorOn() === true ? X.typedTurnsInWindow(e, context.toolUseContext.session.id, messages, r) : [];
            let content = be(message_count, Qe, ge, oe, account_memory_line_rendered) + (X?.typedTurnsPromptBlock(he) ?? "");
            let agentId = X !== null && he.length > 0 ? Nh("extract_memories") : undefined;
            let tt = agentId === undefined ? undefined : X?.registerExtractorFork(e, agentId, he);
            fe = gt(context.toolUseContext.readFileState, x);
            let C = await IA({
                promptMessages: [
                    xe({
                        content
                    })
                ],
                cacheSafeParams,
                canUseTool,
                querySource: "extract_memories",
                forkLabel: "extract_memories",
                ...agentId !== undefined && {
                    overrides: {
                        agentId
                    }
                },
                skipTranscript: true,
                maxTurns: 5,
                skipCacheWrite: qvt(),
                onMessage: fe.onMessage
            }).finally(()=>tt?.());
            u(messages.at(-1)?.uuid);
            let z = ft(C.messages, x);
            let turn_count = F(C.messages, (H)=>H.type === "assistant");
            let Ae = C.totalUsage.input_tokens + C.totalUsage.cache_creation_input_tokens + C.totalUsage.cache_read_input_tokens;
            let ot = Ae > 0 ? (C.totalUsage.cache_read_input_tokens / Ae * 100).toFixed(1) : "0.0";
            t(`[extractMemories] finished \u2014 ${z.length} files written, cache: read=${C.totalUsage.cache_read_input_tokens} create=${C.totalUsage.cache_creation_input_tokens} input=${C.totalUsage.input_tokens} (${ot}% hit)`);
            if (z.length > 0) {
                t(`[extractMemories] memories saved: ${z.join(", ")}`);
            } else {
                t("[extractMemories] no memories saved this run");
            }
            let se = z.filter((H)=>basename(H) !== Iu);
            let team_memories_saved = F(se, EB);
            i("tengu_extract_memories_extraction", {
                mode: d("file"),
                input_tokens: C.totalUsage.input_tokens,
                output_tokens: C.totalUsage.output_tokens,
                cache_read_input_tokens: C.totalUsage.cache_read_input_tokens,
                cache_creation_input_tokens: C.totalUsage.cache_creation_input_tokens,
                message_count,
                parent_context_tokens: Ff(messages),
                compacted_in_fork: C.messages.some(zo),
                turn_count,
                files_written: z.length,
                memories_saved: se.length,
                team_memories_saved,
                account_memory_line_rendered,
                duration_ms: Date.now() - ne
            });
            t(`[extractMemories] writtenPaths=${z.length} memoryPaths=${se.length} appendSystemMessage defined=${appendSystemMessage != null}`);
            if (se.length > 0) {
                let H = dRn(se);
                H.teamCount = team_memories_saved;
                appendSystemMessage?.(H);
            }
            if (z.length > 0) {
                await Gun(context.toolUseContext, qe(z));
            }
            g("memory_extract");
        } catch (error) {
            t(`[extractMemories] error: ${error}`);
            i("tengu_extract_memories_error", {
                duration_ms: Date.now() - ne,
                mode: d(b ? "mcp" : "file")
            });
            m(b ? "ccr_memory_extract" : "memory_extract", "agent_error");
            if (b) {
                J({
                    outcome: "failed",
                    trigger: trigger ?? "cadence",
                    written: 0,
                    durationMs: Date.now() - ne
                });
                y(false, messages.at(-1)?.uuid);
            }
            let oe = fe?.completedWritePaths() ?? [];
            if (oe.length > 0) {
                try {
                    await Gun(context.toolUseContext, qe(oe));
                } catch (err) {
                    t(`[extractMemories] could not queue the notice for writes that landed before the error: ${l(err)}`);
                }
            }
        } finally{
            M = false;
            let x = B;
            B = undefined;
            if (x && every_n_turns <= 1) {
                t("[extractMemories] running trailing extraction for stashed context");
                await L({
                    context: x.context,
                    appendSystemMessage: x.appendSystemMessage,
                    trigger: "trailing",
                    promptIndex: x.promptIndex,
                    personPrompt: x.personPrompt
                });
            } else if (x && b) {
                N(b, x.context, x.promptIndex, x.personPrompt);
            }
        }
    }
    async function te(p, P) {
        if (p.toolUseContext.agentId) {
            return;
        }
        let w = v?.onTurnEnd(p, P);
        try {
            if (F6e() || Ge()) {
                await U(p, P);
            }
        } finally{
            await w;
        }
    }
    async function U(context, appendSystemMessage) {
        R();
        let w = N6e() !== null;
        if (w && (kC() || Cr() || sw())) {
            return;
        }
        if (w && !(Goe(y_o(context.toolUseContext.options.mcpClients)) && context.toolUseContext.options.tools.some((Z)=>It(Z, g_o)))) {
            t("[extractMemories] skipping (mcp) — CCR memory server not mounted");
            return;
        }
        if (!w && !k("tengu_passport_quail", false) && !Ge()) {
            return;
        }
        if (!w && !Ou()) {
            if (IY()) {
                r = context.messages.at(-1)?.uuid ?? r;
            }
            return;
        }
        if (!w && C5()) {
            return;
        }
        if (vr() !== null) {
            return;
        }
        if (M) {
            t("[extractMemories] extraction in progress — stashing for trailing run");
            i("tengu_extract_memories_coalesced", {});
            B = {
                context,
                appendSystemMessage,
                promptIndex: Dq(),
                personPrompt: V2n()
            };
            return;
        }
        await L({
            context,
            appendSystemMessage
        });
    }
    let Q = me.of(e);
    Q.extractor = (p, P)=>E(te(p, P));
    Q.drainer = async (p = 60000)=>{
        let P = Date.now() + p;
        T();
        v?.disarmIdleFlush();
        while(n.size > 0 && Date.now() < P){
            await Promise.race([
                Promise.all(n).catch(()=>{}),
                new Promise((resolve)=>setTimeout(resolve, P - Date.now()).unref())
            ]);
            T();
        }
    };
    Q.disarm = ()=>{
        Q.extractor = null;
        B = undefined;
        R();
        v?.disarmIdleFlush();
    };
    Q.owedWithin = (p)=>n.size > 0 || Y !== undefined && Y.promptIndex === Dq() && Y.dueAt - performance.now() <= p;
}
function Ge() {
    return X !== null && X.EXTRACTOR_RUNS_FOR_PROMOTER && X.isPromoterExtractorOn();
}
function PBs(e) {
    return ue !== null && ue.isLaptopExtractDispatched(e);
}
function IBs(e) {
    return ue !== null && ue.isLaptopExtractSync(e);
}
async function OBs(e, n) {
    await me.of(e.toolUseContext.session.host).extractor?.(e, n);
}
async function MBs(e, n) {
    await me.of(e).drainer(n);
}
export { Gun, Vun, V6n, q6n, K6n, bgt, Y6n, iNr, PBs, IBs, OBs, MBs };
