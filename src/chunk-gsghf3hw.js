import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { kNe, XRt, PLn, ILn } from "/$bunfs/root/chunk-dck8836g.js";
import { Kse } from "/$bunfs/root/chunk-dn762950.js";
import { lt } from "/$bunfs/root/chunk-ctt36bn8.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ia } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { CIr, ZBe, e1e } from "/$bunfs/root/chunk-grthh2xc.js";
import { d9e, Cin } from "/$bunfs/root/chunk-ve4w0rhj.js";
import { zQo } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Mk, lS } from "/$bunfs/root/chunk-pfdtn0nk.js";
import { sr } from "/$bunfs/root/chunk-092xqjkn.js";
import { o, T, De, Wr, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { Jk } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { randomUUID } from "crypto";
const d = 128;
const c = 16;
const f = 256;
const _ = [
    "background_operator",
    "unresolved_shell_write"
];
function fMo(n) {
    return n.step === "run" && n.approval !== undefined;
}
const m = p(()=>o().max(d).regex(/^[\w.:@-]+$/).regex(/[^.]/));
const yIr = p(()=>o().refine(Kse));
const g = p(()=>T(o().max(d)).max(c).transform((n)=>_.filter((e)=>n.includes(e))));
const S = p(()=>o().max(f).regex(/^\P{Cc}+$/u));
const _Ir = p(()=>o().regex(Jk));
const R = p(()=>{
    let n = {
        tool_host_interface: XRt(),
        tool_use_id: m(),
        agent_id: yIr().optional(),
        main_loop_model: S(),
        classifier_may_approve: g().optional(),
        agent_has_read_tool: A(true).optional(),
        agent_effort_level: U(Ia).optional(),
        permission_context: ZBe()
    };
    return Wr("step", [
        De({
            ...n,
            step: A("check")
        }),
        De({
            ...n,
            step: A("run"),
            approval: De({
                ask_digest: _Ir(),
                approver: U(zQo),
                permission_context: ZBe()
            }).optional()
        })
    ]);
});
function mMo(n) {
    let e = sr(n) ? n[d9e] : undefined;
    if (e === undefined) {
        return {
            kind: "absent"
        };
    }
    if (!Cin(e)) {
        return {
            kind: "other_request"
        };
    }
    let session = PLn(e.tool_host_interface);
    if (session === undefined) {
        return {
            kind: "malformed"
        };
    }
    switch(ILn(kNe, session).kind){
        case "peer_too_old":
            return {
                kind: "session_too_old",
                session
            };
        case "self_too_old":
            return {
                kind: "daemon_too_old",
                session
            };
        case "agreed":
            break;
    }
    let r = sr(e.approval) ? e.approval : undefined;
    if (e1e(e.permission_context) || e1e(r?.permission_context)) {
        return {
            kind: "too_large"
        };
    }
    let i = R().safeParse(e);
    if (i.success) {
        return {
            kind: "requested",
            request: i.data
        };
    }
    return {
        kind: CIr(e.permission_context) || CIr(r?.permission_context) ? "unlisted_restriction_on" : "malformed"
    };
}
const h = 1024;
const l = 32;
function u() {
    return lS(Mk, undefined, true);
}
const eft = new lt(()=>({
        id: randomUUID(),
        runningRuns: new Set,
        finishedRuns: new Set,
        readFileState: u(),
        subagentReadFileStates: new Map,
        changedFilesPasses: new WeakMap
    }));
function gMo(n) {
    return eft.of(n).id;
}
function hMo(n, e) {
    let { runningRuns, finishedRuns } = eft.of(n);
    if (runningRuns.has(e) || finishedRuns.has(e)) {
        return false;
    }
    runningRuns.add(e);
    return true;
}
function yMo(n, e) {
    let { runningRuns, finishedRuns } = eft.of(n);
    if (!runningRuns.delete(e)) {
        return;
    }
    finishedRuns.add(e);
    let [i] = finishedRuns;
    if (finishedRuns.size > h && i !== undefined) {
        finishedRuns.delete(i);
    }
}
function _Mo(n, e) {
    let { readFileState, subagentReadFileStates } = eft.of(n);
    if (e === undefined) {
        return readFileState;
    }
    return subagentReadFileStates.get(e);
}
function bMo(n, e) {
    let { readFileState, subagentReadFileStates } = eft.of(n);
    if (e === undefined) {
        return readFileState;
    }
    let i = subagentReadFileStates.get(e) ?? u();
    subagentReadFileStates.delete(e);
    subagentReadFileStates.set(e, i);
    let [a] = subagentReadFileStates.keys();
    if (subagentReadFileStates.size > l && a !== undefined) {
        subagentReadFileStates.delete(a);
        t(`[mcp serve] more than ${l} subagents: dropped the read record of ${a}`);
    }
    return i;
}
export { fMo, yIr, _Ir, mMo, eft, gMo, hMo, yMo, _Mo, bMo };
