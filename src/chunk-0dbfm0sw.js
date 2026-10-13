import { Ke, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { wd, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Ul, Lz } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { Vle, xy, Grs, jxn, Wxn } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { S8t } from "/$bunfs/root/chunk-46dhek9m.js";
import { Zfe } from "/$bunfs/root/chunk-2p4yvg7n.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { readlink, realpath } from "fs/promises";
import { posix } from "path";
const X = "<cloud-transcript-unavailable>";
function Zln(e) {
    let e_length = e.length;
    while(e_length > 0 && e[e_length - 1] === "/"){
        e_length -= 1;
    }
    if (e_length === 0 && e.startsWith("/")) {
        return "/";
    }
    return e.slice(0, e_length);
}
function Y(e) {
    return e !== "" && e !== "." && e !== ".." && !/[\p{Cc}\p{Cf}\u2028\u2029\\:]/u.test(e);
}
function q(e, o) {
    let n = Zln(o.containerProjectDir);
    let r = Zln(o.deviceLaunchDir);
    if (!n.startsWith("/") || !r.startsWith("/") || n === "/") {
        return null;
    }
    if (!S8t(e, n)) {
        return null;
    }
    if (e === n || e === `${n}/`) {
        return r;
    }
    let u = e.slice(n.length + 1).split("/");
    let a = u.at(-1) === "" ? u.slice(0, -1) : u;
    if (a.length > 0 && a.every(Y)) {
        return `${r === "/" ? "" : r}/${a.join("/")}`;
    }
    return null;
}
const D = {
    Read: {
        input: "file_path",
        responseNested: [
            [
                "file",
                "filePath"
            ],
            [
                "file",
                "outputDir"
            ]
        ]
    },
    Write: {
        input: "file_path",
        responseMembers: [
            "filePath"
        ]
    },
    Edit: {
        input: "file_path",
        responseMembers: [
            "filePath"
        ]
    },
    MultiEdit: {
        input: "file_path",
        responseMembers: [
            "filePath"
        ]
    },
    NotebookEdit: {
        input: "notebook_path",
        responseMembers: [
            "notebook_path"
        ]
    },
    Glob: {
        input: "path",
        responseArrays: [
            "filenames"
        ]
    },
    Grep: {
        input: "path",
        responseArrays: [
            "filenames"
        ]
    },
    LSP: {
        input: "filePath",
        responseMembers: [
            "filePath"
        ]
    },
    Bash: {
        responseMembers: [
            "rawOutputPath",
            "persistedOutputPath"
        ]
    },
    Agent: {
        input: "cwd",
        responseMembers: [
            "worktreePath",
            "outputFile"
        ]
    },
    Workflow: {
        input: "scriptPath",
        responseMembers: [
            "scriptPath",
            "transcriptDir"
        ]
    },
    EnterWorktree: {
        input: "path",
        responseMembers: [
            "worktreePath"
        ]
    },
    ExitWorktree: {
        responseMembers: [
            "worktreePath",
            "originalCwd"
        ]
    }
};
const de = new Set(Object.values(D).flatMap((e)=>e.responseMembers ?? []));
const pe = new Set(Object.values(D).flatMap((e)=>(e.responseNested ?? []).map(([o, n])=>`${o}/${n}`)));
function lNt(e) {
    return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function cNt(e) {
    return e.split("/").slice(1).map((o)=>o.replace(/~1/g, "/").replace(/~0/g, "~"));
}
function h0o(e) {
    let o = cNt(e);
    let n = o[0] === "tool_calls" ? o.slice(2) : o;
    if (n[0] === "tool_input") {
        return n.length >= 1;
    }
    if (n[0] === "tool_response") {
        return n.length === 2 && (n[1] === "filePath" || n[1] === "notebook_path" || n[1] === "file") || n.length === 3 && n[1] === "file" && n[2] === "filePath";
    }
    return false;
}
function y0o(e) {
    let o = cNt(e);
    let n = o[0] === "tool_calls" ? o.slice(2) : o;
    return n[0] === "tool_response" && (n.length === 2 && de.has(n[1] ?? "") || n.length === 3 && pe.has(`${n[1]}/${n[2]}`));
}
function I1e(e) {
    return fe.test(e) || U.test(e);
}
function ecn(e, o) {
    return Q(e, o)?.input;
}
var fe = /(?:^|_)(?:path|paths|file|files|filename|filenames|dir|directory|directories|cwd|filepath|filepaths|abspath|realpath|fullpath|relpath|dirname|basename|pathname|folder|folders|dirs|workdir|outdir|rootdir|basedir|tmpdir|subdir|srcdir|destdir|builddir|datadir|homedir)$|(?:Path|Paths|File|Files|Filename|Filenames|Dir|Dirs|Directory|Directories|Folder|Folders|Cwd)$/;
var U = /(?:^|_)(?:uri|uris|url|urls)$|(?:Uri|Uris|Url|Urls|URI|URIs|URL|URLs)$/;
const z = /^(?:https?|s3|gs|ftps?|mailto|data):[^\p{Cc}\p{Cf}\p{Z}\s]*$/iu;
const me = 4;
const members = 256;
function S(e, o, n, r, u, a = 0, m = false, s = false) {
    if (a > me || a > 0 && u.members <= 0) {
        if (typeof e === "object" && e !== null) {
            v(r, o);
        }
        return e;
    }
    if (Array.isArray(e)) {
        let i = false;
        let p = e.map((f, g)=>{
            let k = `${o}/${g}`;
            if (k in r.paths || r.listed.has(k)) {
                return f;
            }
            let _ = m && !(P(f) && Object.keys(f).some(I1e));
            let y = m && typeof f === "string" ? s && z.test(f) ? f : E(f, k, n, r) : S(f, k, n, r, u, a + 1, _, _ && s);
            i ||= y !== f;
            return y;
        });
        if (i) {
            return p;
        }
        return e;
    }
    if (!P(e)) {
        return e;
    }
    let h = e;
    let d = false;
    for (let [i, p] of Object.entries(e)){
        let f = `${o}/${lNt(i)}`;
        if (a > 0) {
            u.members -= 1;
            if (u.members < 0) {
                v(r, o);
                break;
            }
        }
        let g = p;
        let k = false;
        if ((m || I1e(i)) && !(f in r.paths) && !r.listed.has(f)) {
            let _ = s || U.test(i);
            if (typeof p === "string") {
                k = true;
                g = _ && z.test(p) ? p : E(p, f, n, r);
            } else if (Array.isArray(p)) {
                k = true;
                g = S(p, f, n, r, u, a + 1, true, _);
            }
        }
        if (!k && g === p && typeof p === "object" && p !== null) {
            let y = (m || I1e(i)) && !(P(p) && Object.keys(p).some(I1e));
            g = S(p, f, n, r, u, a + 1, y, y && (s || U.test(i)));
        }
        if (g !== p) {
            if (!d) {
                h = {
                    ...e
                };
                d = true;
            }
            h[i] = g;
        }
    }
    return h;
}
function V(e, o, n, r, u, a) {
    if (a && typeof e === "string") {
        return E(e, o, n, r);
    }
    return S(e, o, n, r, u, 0, a && Array.isArray(e));
}
function Z(e) {
    let o = e.trim();
    return o !== e || /^~[^/]*(?:$|\/)/.test(o) || /^[$%`!=]/.test(o);
}
function K(e) {
    return Object.hasOwn(D, e);
}
function Q(e, o) {
    let n = Ul(e);
    if (K(n)) {
        return D[n];
    }
    let r = Lz(n, o).map(Ul).find(K);
    if (r === undefined) {
        return undefined;
    }
    return D[r];
}
function v(e, o) {
    if (!e.listed.has(o)) {
        e.listed.add(o);
        e.untranslated.push(o);
    }
}
var P = L;
function E(e, o, n, r) {
    if (typeof e !== "string") {
        return e;
    }
    if (Z(e)) {
        v(r, o);
        return e;
    }
    if (!e.startsWith("/")) {
        let a = (e.endsWith("/") ? e.slice(0, -1) : e).split("/").filter((m)=>m !== ".");
        if (e !== "" && a.length > 0 && !a.every(Y)) {
            v(r, o);
        }
        return e;
    }
    let u = q(e, n);
    if (u === null) {
        v(r, o);
        return e;
    }
    r.paths[o] = e;
    return u;
}
function C(e, o, n, r, u) {
    if (!P(e) || !(o in e)) {
        return e;
    }
    let a = E(e[o], n, r, u);
    if (a === e[o]) {
        return e;
    }
    return {
        ...e,
        [o]: a
    };
}
function he(e, o, n, r, u) {
    if (!P(e) || !Array.isArray(e[o])) {
        return e;
    }
    let a = false;
    let m = e[o].map((s, h)=>{
        let d = E(s, `${n}/${h}`, r, u);
        a ||= d !== s;
        return d;
    });
    if (a) {
        return {
            ...e,
            [o]: m
        };
    }
    return e;
}
function x(e, o, n, r, u) {
    let a = Q(e.tool_name, u);
    if (a === undefined || !P(e.tool_input)) {
        let d = {
            members
        };
        let tool_input = V(e.tool_input, `${o}/tool_input`, n, r, d, true);
        if ("tool_response" in e) {
            return {
                ...e,
                tool_input,
                tool_response: V(e.tool_response, `${o}/tool_response`, n, r, d, false)
            };
        }
        return {
            ...e,
            tool_input
        };
    }
    let m = a.input === undefined ? e.tool_input : C(e.tool_input, a.input, `${o}/tool_input/${a.input}`, n, r);
    if (!("tool_response" in e)) {
        return {
            ...e,
            tool_input: S(m, `${o}/tool_input`, n, r, {
                members
            })
        };
    }
    let e_tool_response = e.tool_response;
    for (let d of a.responseMembers ?? []){
        e_tool_response = C(e_tool_response, d, `${o}/tool_response/${d}`, n, r);
    }
    for (let [d, i] of a.responseNested ?? []){
        if (P(e_tool_response) && P(e_tool_response[d])) {
            e_tool_response = {
                ...e_tool_response,
                [d]: C(e_tool_response[d], i, `${o}/tool_response/${d}/${i}`, n, r)
            };
        }
    }
    for (let d of a.responseArrays ?? []){
        e_tool_response = he(e_tool_response, d, `${o}/tool_response/${d}`, n, r);
    }
    let h = {
        members
    };
    return {
        ...e,
        tool_input: S(m, `${o}/tool_input`, n, r, h),
        tool_response: S(e_tool_response, `${o}/tool_response`, n, r, h)
    };
}
function _0o(e, o, n, r) {
    let u = {
        paths: {},
        untranslated: [],
        listed: new Set
    };
    let a = Z(e.cwd) ? null : q(e.cwd, o);
    if (a === null) {
        v(u, "/cwd");
    }
    let cwd = a ?? Zln(o.deviceLaunchDir);
    let s = {
        ...e,
        cwd,
        transcript_path: X
    };
    if ("agent_transcript_path" in s) {
        s = {
            ...s,
            agent_transcript_path: X
        };
    }
    switch(s.hook_event_name){
        case "PreToolUse":
        case "PostToolUse":
        case "PostToolUseFailure":
        case "PermissionDenied":
            s = x(s, "", o, u, r);
            break;
        case "PermissionRequest":
            s = x(s, "", o, u, r);
            if (s.permission_suggestions !== undefined) {
                v(u, "/permission_suggestions");
            }
            break;
        case "PostToolBatch":
            s = {
                ...s,
                tool_calls: s.tool_calls.map((d, i)=>x(d, `/tool_calls/${i}`, o, u, r))
            };
            break;
        default:
            break;
    }
    let cloud_session = {
        id: n.cloudSessionId,
        container_cwd: o.containerCwd,
        container_project_dir: o.containerProjectDir,
        device_launch_dir: o.deviceLaunchDir,
        original: {
            cwd: e.cwd,
            transcript_path: e.transcript_path,
            ..."agent_transcript_path" in e && {
                agent_transcript_path: e.agent_transcript_path
            },
            paths: u.paths
        }
    };
    return {
        input: {
            ...s,
            cloud_session
        },
        untranslated: u.untranslated
    };
}
const ee = 3;
const ge = 64;
const re = [
    "PreToolUse",
    "PostToolUse",
    "PostToolUseFailure",
    "UserPromptSubmit"
];
const te = [
    ...re,
    "PostToolBatch",
    "UserPromptExpansion",
    "Stop"
];
function ie() {
    let e = false;
    let o = null;
    let n = 0;
    let r = false;
    let u = 0;
    let a = new Set;
    return {
        skipped ({ event, agentId, machine, inTurn }, i) {
            if (!e) {
                e = true;
                r = false;
                u = 0;
            }
            let p = agentId ?? "main";
            let f = inTurn && o !== i && agentId === undefined && te.includes(event);
            let hookSpecificOutput = inTurn && (r || n < ee) && !a.has(p) && (agentId === undefined || u < ge) && oe(event, "Hooks that run on the user's own machine are paused because it did not answer in time. Tool calls proceed without them. If the user asks whether their hooks ran, say they were paused.");
            if (f) {
                o = i;
            }
            if (hookSpecificOutput) {
                a.add(p);
                u += agentId === undefined ? 0 : 1;
                n += r ? 0 : 1;
                r = true;
            }
            return {
                ...f && {
                    systemMessage: `Paused hooks from "${machine}" because it did not answer in time. Tool calls continue without them.`
                },
                ...hookSpecificOutput && {
                    hookSpecificOutput
                }
            };
        },
        answered ({ event, agentId, machine, inTurn }, i) {
            e = false;
            if (!inTurn || xy(i)) {
                return i;
            }
            let p = agentId ?? "main";
            let f = o !== null && agentId === undefined && te.includes(event);
            let g = a.has(p) && oe(event, `Hooks from a machine the user attached are running.${n >= ee ? " Later changes are not announced." : ""}`);
            if (!f && !g) {
                return i;
            }
            if (f) {
                o = null;
            }
            if (g) {
                a.delete(p);
            }
            let i_hookSpecificOutput = i.hookSpecificOutput;
            let _ = i_hookSpecificOutput !== undefined && "additionalContext" in i_hookSpecificOutput ? i_hookSpecificOutput.additionalContext : undefined;
            return {
                ...i,
                ...f && {
                    systemMessage: ne(i.systemMessage, `Resumed hooks from "${machine}".`)
                },
                ...g && {
                    hookSpecificOutput: {
                        ...g,
                        ...i_hookSpecificOutput,
                        additionalContext: ne(_, g.additionalContext)
                    }
                }
            };
        }
    };
}
function oe(event, additionalContext) {
    let hookEventName = re.find((r)=>r === event);
    return hookEventName && {
        hookEventName,
        additionalContext
    };
}
function ne(e, o) {
    if (e === undefined) {
        return o;
    }
    return `${e}
${o}`;
}
const _e = 1044480;
const PKn = {
    PreToolUse: 15,
    PostToolUse: 15,
    PostToolUseFailure: 15,
    PostToolBatch: 15,
    PermissionDenied: 15,
    SubagentStart: 15,
    UserPromptSubmit: 30,
    UserPromptExpansion: 30,
    Stop: 120,
    StopFailure: 120,
    SubagentStop: 120
};
const we = 5000;
const ye = 30;
function ae(e) {
    return (e.timeoutS ?? PKn[e.event]) * 1000 + we;
}
function Pe(e) {
    return Math.ceil(ae(e) / 1000) + ye;
}
function YUs(e) {
    let o = e.install ?? jxn;
    let n = e.remove ?? Wxn;
    let r = e.absence ?? ie();
    let u = new Set;
    let a = ()=>e.registry.current()?.displayName ?? "the attached machine";
    let m = (d, systemMessage, p)=>{
        if (u.has(d)) {
            return p;
        }
        u.add(d);
        return {
            ...p,
            systemMessage
        };
    };
    let s = (d, outcome, p = {})=>e.telemetry.forwarded({
            event: d.event,
            outcome,
            fieldsDropped: p.fieldsDropped ?? false,
            blocked: p.blocked ?? false,
            rttMs: p.rttMs ?? 0,
            errorRepliesIgnored: p.errorRepliesIgnored ?? 0,
            malformedRepliesIgnored: p.malformedRepliesIgnored ?? 0
        });
    let forwardToDevice = (d, i, p = e.registry.generation())=>async (f, toolUseID, signal, _, y)=>{
            let j = ()=>{
                let b = e.registry.current();
                return b !== null && b.instanceId === d && e.now() < b.leaseExpiresAt && b.entries.some((A)=>A.id === i.id);
            };
            if (!j()) {
                s(i, "owner_gone");
                return {};
            }
            if (e.registry.isAway(d)) {
                s(i, "away_skipped");
                return se({}, ()=>r.skipped({
                        event: i.event,
                        agentId: f.agent_id,
                        machine: a(),
                        inTurn: y !== undefined
                    }, d));
            }
            let input = null;
            let B = 0;
            let W = false;
            try {
                let b = wd(f);
                W = !await Re(b, e.toolAliases(), {
                    realpath: e.realpath ?? Se,
                    readlink: e.readlink ?? ve
                });
                B = Buffer.byteLength(Zfe(b), "utf8");
                input = b;
            } catch  {}
            let H = B > _e;
            if (input === null || H) {
                t(`Device hook ${i.id}: input ${H ? "exceeds what the device accepts" : "is not plain serialisable data"}; not forwarded`, {
                    level: "warn"
                });
                s(i, H ? "input_too_large" : "input_unclonable");
                if (i.event === "PreToolUse") {
                    return {
                        hookSpecificOutput: {
                            hookEventName: "PreToolUse",
                            permissionDecision: "deny",
                            permissionDecisionReason: `[hook on ${e.registry.current()?.displayName ?? "your machine"}]: not run \u2014 the tool call ${H ? "is too large to forward to the attached machine; retry with a smaller input" : "could not be forwarded to the attached machine; retry with plain input"}`
                        }
                    };
                }
                return {};
            }
            if (W) {
                s(i, "input_unresolvable");
                if (i.event === "PreToolUse") {
                    return {
                        hookSpecificOutput: {
                            hookEventName: "PreToolUse",
                            permissionDecision: "deny",
                            permissionDecisionReason: `[hook on ${e.registry.current()?.displayName ?? "your machine"}]: not run \u2014 the path this tool call names could not be resolved for the attached machine; retry with a plain path`
                        }
                    };
                }
                return {};
            }
            if (Grs(input, e.toolAliases())) {
                s(i, "after_edit_held");
                return {};
            }
            let J;
            try {
                let issuedAt = e.now();
                let machine = a();
                let deadlineMs = ae(i);
                let R = e.sender.sendDeviceHookCallback({
                    callbackId: i.id,
                    input,
                    toolUseID,
                    issuedAt,
                    deadlineMs,
                    ...signal !== undefined && {
                        signal
                    }
                });
                let le = new Promise((resolve)=>{
                    J = e.setTimer(()=>resolve("deadline"), deadlineMs);
                });
                let F = await Promise.race([
                    R.reply,
                    le
                ]);
                let O = {
                    rttMs: e.now() - issuedAt,
                    errorRepliesIgnored: R.errorRepliesIgnored(),
                    malformedRepliesIgnored: R.malformedRepliesIgnored()
                };
                if (F === "deadline") {
                    e.registry.recordMiss(d, p);
                    R.reply.catch(()=>{});
                    R.cancel();
                    s(i, "deadline", O);
                    if (p !== e.registry.generation()) {
                        return {};
                    }
                    return m(`deadline:${i.event}`, `A ${i.event} hook on ${machine} did not answer within ${Math.round(deadlineMs / 1000)}s; continuing without it. If it keeps missing, hooks from that machine pause until it registers again.`, {});
                }
                if ("malformed" in F) {
                    s(i, "malformed", O);
                    return {};
                }
                if (!j()) {
                    s(i, "owner_gone", O);
                    return {};
                }
                e.registry.recordHit(d);
                let { answer, report } = Vle(F.answer, i.event);
                s(i, "answered", {
                    ...O,
                    fieldsDropped: report.dropped.length > 0 || report.truncated.length > 0,
                    blocked: xy(answer)
                });
                if (e.registry.isAway(d)) {
                    return answer;
                }
                let ce = {
                    event: i.event,
                    agentId: input.agent_id,
                    machine,
                    inTurn: y !== undefined
                };
                return se(answer, ()=>r.answered(ce, answer));
            } catch (error) {
                if (Ke(error)) {
                    s(i, "aborted");
                    throw error;
                }
                t(`Device hook ${i.id}: forwarding failed internally: ${l(error)}`, {
                    level: "error"
                });
                s(i, "internal_error");
                return {};
            } finally{
                J?.clear();
            }
        };
    return {
        forwardToDevice,
        installForOwner (d) {
            u.clear();
            let i = e.registry.generation();
            let p = {};
            for (let f of d.entries){
                let g = p[f.event] ?? [];
                g.push({
                    ...f.matcher !== undefined && {
                        matcher: f.matcher
                    },
                    hooks: [
                        {
                            type: "callback",
                            timeout: Pe(f),
                            callback: forwardToDevice(d.instanceId, f, i)
                        }
                    ]
                });
                p[f.event] = g;
            }
            o(d.instanceId, p, "forwarded");
        },
        removeForOwner (d) {
            n(d, "forwarded");
        }
    };
}
function se(e, o) {
    try {
        return o();
    } catch (cause) {
        c(Error("Device hooks: the away notice failed internally", {
            cause
        }));
        return e;
    }
}
function XUs(e, o) {
    let n = setTimeout(e, o);
    n.unref();
    return {
        clear: ()=>clearTimeout(n)
    };
}
var Se = (e)=>realpath(e);
var ve = (e)=>readlink(e);
const Te = 40;
async function Re(e, o, n) {
    let r = "tool_calls" in e && Array.isArray(e.tool_calls) ? e.tool_calls : [
        e
    ];
    let u = true;
    for (let a of r){
        let m = De(a, o);
        if (m !== null && !await Ee(m, n)) {
            u = false;
        }
    }
    return u;
}
function De(e, o) {
    if (typeof e !== "object" || e === null || !("tool_name" in e) || typeof e.tool_name !== "string") {
        return null;
    }
    let n = "tool_input" in e ? e.tool_input : undefined;
    if (typeof n !== "object" || n === null) {
        return null;
    }
    let member = ecn(e.tool_name, o);
    if (member === undefined) {
        return null;
    }
    let fields = n;
    let a = fields[member];
    if (typeof a === "string" && posix.isAbsolute(a)) {
        return {
            fields,
            member,
            value: a
        };
    }
    return null;
}
async function Ee({ fields, member, value }, r) {
    let u = posix.normalize(value);
    let a = [];
    for(let m = 0; m <= Te; m++){
        try {
            let s = await r.realpath(u);
            let h = a.length === 0 ? s : posix.join(s, ...a);
            if (h !== value) {
                fields[member] = h;
            }
            return true;
        } catch  {
            let s = await r.readlink(u).catch(()=>null);
            if (s !== null) {
                let d = posix.dirname(u);
                let i = await r.realpath(d).catch(()=>d);
                u = posix.normalize(posix.join(posix.resolve(i, s), ...a));
                a = [];
                continue;
            }
            let h = posix.dirname(u);
            if (h === u) {
                return true;
            }
            a.unshift(posix.basename(u));
            u = h;
        }
    }
    return false;
}
export { Zln, lNt, cNt, h0o, y0o, I1e, ecn, _0o, PKn, YUs, XUs };
