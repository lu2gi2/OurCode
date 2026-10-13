import { lt, K, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Yi, AY, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Tt, c } from "/$bunfs/root/chunk-etbngzss.js";
import { $y } from "/$bunfs/root/chunk-xb9cceab.js";
import { Mue } from "/$bunfs/root/chunk-pp3y3t61.js";
import { vkt, qnt, ZDe, cqe, $to, sIn } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Mie, xmn, Oht, Pmn, Mht } from "/$bunfs/root/chunk-3259venz.js";
import { ZI, eO } from "/$bunfs/root/chunk-6rhcrh84.js";
import { Czo, Rzo, fme } from "/$bunfs/root/chunk-8c03r8j7.js";
import { VBt, qBt, o1r, pzo, Imn, l9n, s1r, Omn, Mmn } from "/$bunfs/root/chunk-pdm4m6kx.js";
import { sr } from "/$bunfs/root/chunk-092xqjkn.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { posix } from "path";
const path = "/v1/claudeai-agents/mcp";
const serverId = "f688f3fc-1d05-5bd1-9c48-9854ec083044";
const W = new lt(()=>({}));
const Y = /^file_[A-Za-z0-9_-]{1,128}$/;
const maxFiles = 20;
const I = 268435456;
const expiresInSeconds = 3600;
const ie = 2700000;
const O = 600000;
const nothingDone = "No task was started.";
const w = "Start the task without files.";
const b = {
    tool: "start_task",
    arg: "files",
    feature: "managed_agents_task_file_upload",
    local: "path",
    ref: "file_id",
    refWord: "id",
    maxFiles,
    nothingDone
};
function Q(e) {
    return xmn(e, {
        path,
        serverId
    });
}
function C(e, r) {
    let n = Ce();
    let host = n ? W.peek(r)?.host : undefined;
    let o = host?.servers.get(e.name);
    if (!(n ? host !== undefined && o !== undefined && e.config.type === "http" && e.config.url === o && host.heldSinceBoot(e.name) : Q(e)) || !k("tengu_twinkling_cosmos", false)) {
        return;
    }
    return {
        host
    };
}
async function i1s(e, r, n, d, o) {
    let r_files = r.files;
    if (!Array.isArray(r_files) || r_files.length === 0) {
        return {};
    }
    let i;
    try {
        let p = C(e, o);
        if (p === undefined) {
            return {};
        }
        let { host } = p;
        i = host === undefined ? await J(r_files, n, d) : await ee(r_files, host, n, d);
    } catch (error) {
        c(error);
        i = {
            error: `The files could not be attached. ${nothingDone} ${w}`,
            code: "unexpected"
        };
    }
    if ("error" in i) {
        if (i.code !== "canceled" && i.code !== "upload_canceled") {
            m("managed_agents_task_file_upload", i.code);
        }
        return {
            error: i.error
        };
    }
    g("managed_agents_task_file_upload");
    return {
        input: {
            ...r,
            files: i.files
        }
    };
}
const le = 600000;
const H = "start-task-upload-before-ask";
const de = I;
const ue = 300000;
const G = new WeakMap;
function a1s(e, r, n, d, o, toolUseId) {
    let r_files = r.files;
    if (toolUseId === "" || !Array.isArray(r_files) || r_files.length === 0 || !r_files.every((S)=>sr(S) && typeof S.path === "string" && S.file_id === undefined) || e.config.type !== "http" || !$y(e.config.url)) {
        return;
    }
    let p = C(e, o);
    if (p === undefined) {
        return;
    }
    let { host } = p;
    let y = r_files;
    let pathFormKey = _(r);
    return {
        prepare: ()=>{
            let S = Rzo(o, toolUseId, pathFormKey);
            let E = S && G.get(S);
            if (E !== undefined) {
                return E;
            }
            let A = {
                toolUseId,
                pathFormKey,
                files: [],
                uploadStartedAt: Date.now(),
                state: "uploading",
                remove: (P)=>Z(P, host)
            };
            Czo(o, A);
            let F = ce(A, y, host, n, d, o).then((P)=>{
                if ("error" in P) {
                    return P;
                }
                let A_files = A.files;
                return {
                    input: {
                        ...r,
                        files: A_files
                    },
                    description: `Attaches ${y.map((oe, N)=>`${Oht(String(oe.path))} as ${Oht(A_files[N]?.name ?? "")} (${fe(A_files[N]?.file_id)})`).join("; ")}`,
                    release: ()=>fme(o, A)
                };
            });
            G.set(A, F);
            return F;
        }
    };
}
async function ce(e, r, host, d, o, s) {
    let i = {
        mustStartWithinMs: le,
        maxTotalBytes: host === undefined ? de : undefined,
        onUploaded: (y)=>{
            if (e.state === "deleted") {
                e.remove([
                    y.file_id
                ]);
            } else {
                e.files.push(y);
            }
        }
    };
    let p;
    let h = !!a.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES;
    if (h) {
        ZI("tool_exec", H);
    }
    try {
        p = host === undefined ? await J(r, d, o, i) : await ee(r, host, d, o, i);
    } catch (error) {
        c(error);
        p = {
            error: `The files could not be attached. ${nothingDone} ${w}`,
            code: "unexpected"
        };
    } finally{
        if (h) {
            eO("tool_exec", H);
        }
    }
    if (!("error" in p) && e.state === "deleted") {
        p = R("canceled");
    }
    if ("error" in p) {
        await fme(s, e);
        if (p.code !== "canceled" && p.code !== "upload_canceled") {
            m("managed_agents_task_file_upload", p.code);
        }
        return {
            error: p.error
        };
    }
    g("managed_agents_task_file_upload");
    e.state = "pending";
    return {
        ok: true
    };
}
async function Z(e, host) {
    if (host === undefined) {
        await Q8n(e);
        return;
    }
    await Promise.all(e.map((n)=>host.delete?.(n)));
}
function fe(e) {
    if (e !== undefined && Y.test(e)) {
        return e;
    }
    return "?";
}
async function l1s(e, r, n) {
    let d = C(e, r);
    if (d === undefined || !Array.isArray(n)) {
        return;
    }
    let o = n.flatMap((s)=>{
        if (sr(s) && typeof s.file_id === "string") {
            return [
                s.file_id
            ];
        }
        return [];
    });
    await Z(o, d.host);
}
function c1s(e) {
    if (Date.now() > e + expiresInSeconds * 1000 - ue) {
        return `The files for this task were uploaded about an hour before this approval and have expired or are about to. Call start_task again to upload them afresh. ${nothingDone}`;
    }
    let r = Mue();
    let n = Mie();
    if (n !== undefined) {
        return (n === "egress_blocked" ? D() : M()).error;
    }
    if (r) {
        return L().error;
    }
}
function d1s(e, r) {
    let n = l9n(r);
    if (n === undefined || Ce() || !Q(e) || !k("tengu_twinkling_cosmos", false)) {
        return;
    }
    return `In this session, files the user attached to the chat are usually in ${n}. To give one to the task, put its full path in files as an object, such as files: [{"path": "${n}/report.csv"}]. Do that rather than copying the file's text into task_description.`;
}
function u1s(e, r, n, d) {
    let r_files = r.files;
    if (r_files === undefined || r_files === null || Array.isArray(r_files) && r_files.length === 0 || C(e, d) === undefined) {
        return;
    }
    let s = Mht(r_files, b);
    let i = Array.isArray(s) ? undefined : s;
    let { files, ...rest } = r;
    let y = Array.isArray(s) ? {
        ...rest,
        files: s.map((A, F)=>({
                file_id: `file_${F}`,
                name: `file_${F}`
            }))
    } : rest;
    let T = Pmn(y, n, {
        ...b,
        ignoreInside: b.arg
    });
    if (i === undefined && T === undefined) {
        return;
    }
    if (i === undefined) {
        f("managed_agents_task_file_upload", "input_schema");
    } else {
        m("managed_agents_task_file_upload", i.code);
    }
    if (T === undefined) {
        return i.error;
    }
    let S = ` ${nothingDone}`;
    let E = i === undefined ? "" : ` ${i.error.endsWith(S) ? i.error.slice(0, -S.length) : i.error}`;
    return `Cannot call start_task with these arguments: ${T.listed}.${E}${T.takes} ${nothingDone}`;
}
const q = {
    mustStartWithinMs: ie
};
async function J(e, r, n, d = q) {
    let o = Mht(e, b);
    if (!Array.isArray(o)) {
        return o;
    }
    let s = Mue();
    let i = Mie();
    if (i !== undefined) {
        if (i === "egress_blocked") {
            return D();
        }
        return M();
    }
    if (s) {
        return L();
    }
    if (!AY()) {
        return ne();
    }
    for (let T of o){
        try {
            await qnt(T, r);
        } catch (error) {
            t(`[start_task files] rejected path: ${T} (${l(error)})`);
            return v(T, o1r(error), "here", r);
        }
    }
    let p = [];
    let h = Date.now() + d.mustStartWithinMs;
    let y = d.maxTotalBytes === undefined ? undefined : {
        remainingBytes: d.maxTotalBytes
    };
    for (let T of o){
        if (n.aborted) {
            return R("canceled");
        }
        if (Date.now() > h) {
            return U();
        }
        let S;
        let E;
        try {
            ({ realPath: S, requiredDigest: E } = await qnt(T, r));
        } catch (error) {
            t(`[start_task files] rejected path: ${T} (${l(error)})`);
            return v(T, o1r(error), "here", r);
        }
        let A = await J8n(S, E, n, y);
        if (!A.ok) {
            t(`[start_task files] not uploaded: ${T} (${A.code})`);
            return v(T, A.code, "here", r);
        }
        let F = {
            file_id: A.file_id,
            name: A.name
        };
        p.push(F);
        d.onUploaded?.(F);
    }
    if (n.aborted) {
        return R("canceled");
    }
    if (Date.now() > h + O) {
        return U();
    }
    return {
        files: p
    };
}
async function ee(e, host, n, d, o = q) {
    let s = Mht(e, b);
    if (!Array.isArray(s)) {
        return s;
    }
    let i = Mue();
    let p = Mie();
    if (p !== undefined) {
        if (p === "egress_blocked") {
            return D();
        }
        return M();
    }
    if (i) {
        return L();
    }
    let h = "elsewhere";
    let y = [];
    let T = Date.now() + o.mustStartWithinMs;
    for (let S of s){
        if (d.aborted) {
            return R("canceled");
        }
        if (Date.now() > T) {
            return U();
        }
        if (host.ruleItCannotApply(n) !== undefined) {
            return {
                error: `Cannot attach files: this session's limits on reading files cannot be applied in its cloud environment, where the upload would happen. ${nothingDone} ${w}`,
                code: "rule_not_applicable"
            };
        }
        if (!qBt(posix.basename(S))) {
            return {
                error: `Cannot attach "${S}": a file handed to a task from this session's cloud environment needs a plain name, without a backslash, a control character or a character that changes text direction. Copy or rename it and attach that. ${nothingDone}`,
                code: "name_not_plain"
            };
        }
        let E = await host.upload(S, d);
        if (!E.ok) {
            return v(S, E.code, h, n);
        }
        if (!Y.test(E.file_id) || !qBt(E.name)) {
            return v(S, "bad_answer", h, n);
        }
        let A = {
            file_id: E.file_id,
            name: E.name
        };
        y.push(A);
        o.onUploaded?.(A);
    }
    if (d.aborted) {
        return R("canceled");
    }
    if (Date.now() > T + O) {
        return U();
    }
    return {
        files: y
    };
}
async function J8n(e, r, signal, d) {
    let o = await vkt(e);
    if (VBt.test(o)) {
        return {
            ok: false,
            code: "name_direction"
        };
    }
    let s = await ZDe(e, I);
    if (!("buf" in s)) {
        return {
            ok: false,
            code: s.refusal
        };
    }
    if (d !== undefined) {
        if (s.buf.length > d.remainingBytes) {
            return {
                ok: false,
                code: "too_large_total"
            };
        }
        d.remainingBytes -= s.buf.length;
    }
    if (r !== undefined && at(s.buf) !== r) {
        return {
            ok: false,
            code: "path_rejected"
        };
    }
    await Yi();
    let i = AY();
    if (!i) {
        return {
            ok: false,
            code: "no_token"
        };
    }
    let p;
    try {
        let h = await $to(s.buf, o, {
            oauthToken: i,
            sessionId: K(),
            baseUrl: dn().BASE_API_URL
        }, {
            signal,
            expiresInSeconds,
            timeoutMs: O,
            retryAfterTimeout: false
        });
        if (h.success) {
            return {
                ok: true,
                file_id: h.fileId,
                name: o
            };
        }
        p = h.reason;
    } catch (error) {
        t(`[start_task files] upload threw: ${l(error)}`, {
            level: "error"
        });
        p = "network";
    }
    return {
        ok: false,
        code: `upload_${p}`
    };
}
const te = {
    file_read: true,
    too_large: true,
    auth: true,
    forbidden: true,
    canceled: true,
    server: true,
    network: true
};
const pe = {
    auth: true,
    forbidden: true,
    not_found: true,
    server: true,
    network: true
};
const WBr = [
    "egress_blocked",
    "essential_traffic",
    "no_token",
    "timeout",
    "unexpected",
    ...Object.keys(pe).map((e)=>`delete_${e}`)
];
const re = 5000;
const V = "start_task upload cleanup timed out";
async function Q8n(e) {
    if (e.length === 0) {
        return;
    }
    let r;
    try {
        r = await Ut(he(e), re, V);
    } catch (error) {
        if (error instanceof Error && error.message === V) {
            r = "timeout";
        } else {
            c(error);
            r = "unexpected";
        }
    }
    if (r === undefined) {
        g("managed_agents_task_file_cleanup");
    } else {
        f("managed_agents_task_file_cleanup", r);
    }
    return r;
}
async function he(e) {
    let BASE_API_URL = dn().BASE_API_URL;
    try {
        cqe(BASE_API_URL);
    } catch  {
        return "egress_blocked";
    }
    if (Tt()) {
        return "essential_traffic";
    }
    await Yi();
    let n = AY();
    if (!n) {
        return "no_token";
    }
    let d = {
        oauthToken: n,
        sessionId: K(),
        baseUrl: BASE_API_URL
    };
    let s = (await Promise.all(e.map((i)=>sIn(i, d, {
            timeoutMs: re
        })))).find((i)=>!i.success);
    if (s !== undefined && !s.success) {
        return `delete_${s.reason}`;
    }
}
const zBr = [
    ...Object.keys(s1r),
    ...Object.keys(te).map((e)=>`upload_${e}`),
    "path_rejected",
    "no_token",
    "name_direction",
    "too_large_total"
];
function v(e, r, n, d) {
    if (Omn(r)) {
        return Mmn(e, r, I, nothingDone);
    }
    if (n === "elsewhere" && r === "upload_auth") {
        return {
            error: `The sign-in of this session's cloud environment was not accepted while uploading "${e}". ${nothingDone} ${w}`,
            code: r
        };
    }
    let o = r.startsWith("upload_") ? r.slice(7) : undefined;
    if (o !== undefined && _e(o)) {
        return X(e, o);
    }
    switch(r){
        case "path_rejected":
            return {
                error: n === "here" ? Imn(e, d, nothingDone) : `Cannot attach "${e}": only files in this session's working folder (unless that is the home folder) or in its uploads or outputs folder can be attached, by the absolute path of a regular file there. ${nothingDone}`,
                code: r
            };
        case "credential_name":
            return {
                error: pzo(e, n === "here" ? d : {
                    isRemoteMode: true
                }, nothingDone),
                code: r
            };
        case "too_large_total":
            return {
                error: `Cannot attach "${e}": with the files before it, the files named to start_task add up to more than ${I / 1048576} MiB, the most one call may attach. Attach fewer or smaller files. ${nothingDone}`,
                code: r
            };
        case "name_direction":
            return {
                error: `Cannot attach "${e}": its name contains a character that changes text direction, so the task could show it under a different name. Rename it, or copy it under a name without that character, and attach that. ${nothingDone}`,
                code: r
            };
        case "no_token":
            if (n === "here") {
                return ne();
            }
            return {
                error: `This session's cloud environment has no sign-in to upload files with. ${nothingDone} ${w}`,
                code: r
            };
        case "canceled":
            return R("canceled");
        case "egress_blocked":
            return D();
        case "essential_traffic":
            return M();
        case "policy_pending":
            return {
                error: `This session's cloud environment has not yet loaded its organization's policy, so it cannot tell whether files may be uploaded. ${nothingDone} Try again in a moment, or start the task without files.`,
                code: r
            };
        case "container_too_old":
            return {
                error: `This session's cloud environment runs an older version of Claude Code, which cannot attach files to a task. ${nothingDone} ${w}`,
                code: r
            };
        case "no_answer":
            return {
                ...X(e, "network"),
                code: r
            };
        case "no_container":
        case "container_unreachable":
            return {
                error: `This session's cloud environment could not be reached, so the files were not attached. ${nothingDone} Try again, or start the task without files.`,
                code: r
            };
        default:
            return {
                error: `The files could not be attached. ${nothingDone} ${w}`,
                code: "unexpected"
            };
    }
}
function _e(e) {
    return Object.hasOwn(te, e);
}
function U() {
    return {
        error: `Attaching these files is taking too long: the first ones would expire before the task could copy them. ${nothingDone} Attach fewer or smaller files, or start the task without files.`,
        code: "uploads_too_slow"
    };
}
function M() {
    return {
        error: `Uploading files to Anthropic is turned off by CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC. ${nothingDone} ${w}`,
        code: "essential_traffic"
    };
}
function L() {
    return {
        error: `This organization's policy has not loaded yet, so files cannot be attached right now. ${nothingDone} Try again in a minute; if it is refused again, tell the user and offer to start the task without the files.`,
        code: "policy_pending"
    };
}
function D() {
    return {
        error: `Uploading files to Anthropic is not available in this configuration. ${nothingDone} ${w}`,
        code: "egress_blocked"
    };
}
function ne() {
    return {
        error: `Attaching files needs a claude.ai sign-in (run /login). ${nothingDone}`,
        code: "no_token"
    };
}
function R(code) {
    return {
        error: `Attaching files was interrupted. ${nothingDone}`,
        code
    };
}
function X(e, r) {
    let n = `upload_${r}`;
    switch(r){
        case "auth":
            return {
                error: `The session's sign-in was not accepted while uploading "${e}". The person may need to sign in again, or restart the session. ${nothingDone}`,
                code: n
            };
        case "forbidden":
            return {
                error: `This session's sign-in may not upload files, so "${e}" was not attached. ${nothingDone} ${w}`,
                code: n
            };
        case "too_large":
            return {
                error: `The Files API refused "${e}" as too large. ${nothingDone}`,
                code: n
            };
        case "canceled":
            return R(n);
        case "server":
            return {
                error: `The Files API did not accept "${e}". ${nothingDone} Start the task without this file, or tell the user.`,
                code: n
            };
        case "file_read":
        case "network":
            return {
                error: `The upload of "${e}" did not complete. ${nothingDone} Try again, or start the task without this file.`,
                code: n
            };
    }
}
export { i1s, a1s, l1s, c1s, d1s, u1s, J8n, WBr, Q8n, zBr };
