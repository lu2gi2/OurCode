import { x, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Zv } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { rw, MP, YUe } from "/$bunfs/root/chunk-3fj60qgx.js";
import { eA } from "/$bunfs/root/chunk-2d9a83dh.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Xp, pv } from "/$bunfs/root/chunk-4m0tjfqq.js";
import { $2 } from "/$bunfs/root/chunk-1c8pjf91.js";
import { ci } from "/$bunfs/root/chunk-6dwnw6av.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { o, M, u, _t, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { r8e } from "/$bunfs/root/chunk-nnawdxg4.js";
import { constants } from "fs";
import { open, readdir, rm, stat, readFile } from "fs/promises";
import { dirname, join } from "path";
const cye = "2025-11-25";
const kTe = "2026-07-28";
const Cne = "reopen_refetch";
const AVe = "before_handler";
const sxn = 4096;
const sns = 16384;
const gkt = "The tool call was interrupted before a result was received. It may or may not have completed on the server — verify before assuming it succeeded, and retry if needed.";
const ins = 1000;
const kcr = "The outcome is unknown: the call may have finished, may still be running, or may never have started. Check what it did before you repeat it.";
function ixn(e, n) {
    return `MCP server "${e}" never answered tool "${n}". ${kcr}`;
}
const ans = "mcp_answer_stream_ended";
const lns = "mcp_call_not_sent_again";
const axn = "mcp_call_unanswered";
const c4 = 16777216;
const LJ = 5;
const baseMs = 1000;
const capMs = 30000;
const cns = 10000;
function Unt(attempt) {
    return Zv({
        attempt,
        baseMs,
        capMs
    });
}
const lxn = 8;
const $7r = 30000;
const dns = 300000;
const $Yt = "inode/directory";
function dye(e) {
    return e.replace(/[^\x20-\x7e]/g, "").slice(0, 32);
}
function q3(e) {
    if (e?.kind !== "task-notification") {
        return e;
    }
    let n = $2(e.runId);
    return {
        kind: "task-notification",
        ...e.subkind !== undefined && {
            subkind: e.subkind
        },
        ...e.fireReason !== undefined && {
            fireReason: e.fireReason
        },
        ...e.producer !== undefined && {
            producer: e.producer
        },
        ...n !== undefined && {
            runId: n
        }
    };
}
function dW(e, n, r) {
    let t = q3(e) ?? (n === "task-notification" ? {
        kind: "task-notification"
    } : undefined);
    let i = $2(r);
    if (i !== undefined && t?.kind === "task-notification" && t.runId === undefined) {
        return {
            ...t,
            runId: i
        };
    }
    return t;
}
function Lle(e) {
    return e?.kind === "task-notification" && e.producer === "session-task";
}
function uye(e) {
    return e?.kind === "task-notification" && Object.keys(e).every((n)=>n === "kind" || n === "producer" || n === "runId");
}
async function uns(e, n, r) {
    if (j() && r !== undefined) {
        return T(r, n);
    }
    let t;
    try {
        t = await open(e, constants.O_WRONLY | constants.O_APPEND);
    } catch (error) {
        let s = v(error);
        if (s === "ENOENT" || s === "ENOTDIR") {
            return false;
        }
        throw error;
    }
    try {
        let { size } = await t.stat();
        if (size === 0) {
            return false;
        }
        let s;
        let d = Buffer.from(n, "utf8");
        let a = 0;
        while(a < d.length){
            let { bytesWritten } = await t.write(d, a, d.length - a, s);
            if (bytesWritten <= 0) {
                throw new x(`tryAppend: short write to ${e} stalled with ${d.length - a} bytes remaining`, "tryAppend: zero-progress short write");
            }
            a += bytesWritten;
            if (s !== undefined) {
                s += bytesWritten;
            }
        }
        return true;
    } finally{
        await t.close();
    }
}
async function T({ backend, key }, data) {
    let t = await backend.append(key, [
        {
            data
        }
    ], {
        precondition: {
            type: "ifExists",
            nonEmpty: true
        }
    });
    if (!t.ok) {
        if (t.error.code === "NotFound") {
            return false;
        }
        throw Error("Session append: transcript not writable via storage", {
            cause: t.error
        });
    }
    return true;
}
const g = '"type":"continued-in"';
const N = p(()=>_t({
        type: A("continued-in"),
        continuedInSessionId: o()
    }));
const C = p(()=>_t({
        type: A("assistant"),
        isApiErrorMessage: M().optional(),
        message: _t({
            stop_reason: o().nullish()
        }).optional()
    }));
function Bnt(e, { canFork } = {
    canFork: true
}) {
    if (e.provable) {
        return `Your most recent conversation is running in the background (session ${e.sessionId}). Use \`claude agents\` to find and attach to it, or \`claude --resume\` to pick another session.`;
    }
    let r = canFork ? ", or add --fork-session to branch off a copy" : "";
    return `Your most recent conversation moved to a background session (${e.sessionId}) registered from another machine or container, so this one can't tell whether it is still running. Use \`claude --resume\` to pick a session${r}.`;
}
function pns(sessionId, continuedInSessionId) {
    return {
        type: "continued-in",
        timestamp: new Date().toISOString(),
        sessionId,
        continuedInSessionId
    };
}
function cxn(e) {
    if (!e.includes(g)) {
        return;
    }
    let e_length = e.length;
    while(e_length > 0){
        let r = e.lastIndexOf(`
`, e_length - 1);
        let t = e.slice(r + 1, e_length);
        e_length = r;
        let i = t.includes(g);
        let s = t.includes('"type":"user"') || t.includes('"type":"assistant"');
        if (i || s) {
            try {
                let d = JSON.parse(t);
                if (i) {
                    let a = N().safeParse(d);
                    if (a.success) {
                        return MP(a.data.continuedInSessionId) ?? undefined;
                    }
                }
                if (s && I(d)) {
                    return;
                }
            } catch  {}
        }
        if (r < 0) {
            break;
        }
    }
}
function I(e) {
    let n = C().safeParse(e);
    if (n.success) {
        return n.data.isApiErrorMessage !== true && typeof n.data.message?.stop_reason === "string";
    }
    return L(e) && r8e(e, {
        commandFallback: ""
    }) !== undefined;
}
async function fns(e, n, r) {
    let t = join(dirname(e), `${n}.jsonl`);
    let i = await YUe(t, pv(Xp(t, r)));
    return i !== null && await FYt(t, i.head, i.tail, i.size, r);
}
const f = '"parentUuid":';
const D = 16777216;
const E = 1048576;
async function FYt(e, n, r, t, i) {
    if (n.includes(f) || r.includes(f)) {
        return true;
    }
    if (t <= rw) {
        return false;
    }
    if (Xp(e, i) !== undefined) {
        return true;
    }
    try {
        let d = await open(e, constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
        try {
            if (!(await d.stat()).isFile()) {
                return false;
            }
            let a = Buffer.allocUnsafe(E + f.length);
            let c = 0;
            let m = 0;
            while(m < D){
                let { bytesRead } = await d.read(a, c, E, m);
                if (bytesRead === 0) {
                    return false;
                }
                let l = c + bytesRead;
                if (a.subarray(0, l).includes(f)) {
                    return true;
                }
                c = Math.min(f.length, l);
                a.copyWithin(0, l - c, l);
                m += bytesRead;
            }
            return true;
        } finally{
            await d.close();
        }
    } catch  {
        return false;
    }
}
const z = p(()=>u({
        customTitle: o()
    }));
function dxn(e, n) {
    return join(dirname(e), n, "custom-title.json");
}
async function mns(e, n, r) {
    let t = await W(dxn(e, n), r);
    if (t === undefined) {
        return;
    }
    let i;
    try {
        i = JSON.parse(t);
    } catch  {
        return;
    }
    let s = z().safeParse(i);
    if (!s.success) {
        return;
    }
    return ci(s.data.customTitle) || undefined;
}
async function W(e, n) {
    if (j() && n !== undefined) {
        try {
            let r = eA(e);
            if (r !== undefined) {
                let t = await n.readText([
                    r
                ]);
                if (!t.ok) {
                    return;
                }
                let i = t.value.items[0];
                if (i.found) {
                    return i.value;
                }
                return undefined;
            }
        } catch  {
            return;
        }
    }
    if (Ce()) {
        return;
    }
    try {
        return await readFile(e, "utf8");
    } catch  {
        return;
    }
}
class _E {
    returned;
    queue = [];
    readResolve;
    readReject;
    isDone = false;
    hasError;
    started = false;
    constructor(e){
        this.returned = e;
    }
    get ended() {
        return this.isDone;
    }
    [Symbol.asyncIterator]() {
        if (this.started) {
            throw Error("Stream can only be iterated once");
        }
        this.started = true;
        return this;
    }
    next() {
        if (this.queue.length > 0) {
            return Promise.resolve({
                done: false,
                value: this.queue.shift()
            });
        }
        if (this.isDone) {
            return Promise.resolve({
                done: true,
                value: undefined
            });
        }
        if (this.hasError) {
            return Promise.reject(this.hasError);
        }
        return new Promise((resolve, reject)=>{
            this.readResolve = resolve;
            this.readReject = reject;
        });
    }
    enqueue(e) {
        if (this.readResolve) {
            let n = this.readResolve;
            this.readResolve = undefined;
            this.readReject = undefined;
            n({
                done: false,
                value: e
            });
        } else {
            this.queue.push(e);
        }
    }
    done() {
        this.isDone = true;
        if (this.readResolve) {
            let e = this.readResolve;
            this.readResolve = undefined;
            this.readReject = undefined;
            e({
                done: true,
                value: undefined
            });
        }
    }
    error(e) {
        this.hasError = e;
        if (this.readReject) {
            let n = this.readReject;
            this.readResolve = undefined;
            this.readReject = undefined;
            n(e);
        }
    }
    return() {
        this.isDone = true;
        if (this.returned) {
            this.returned();
        }
        return Promise.resolve({
            done: true,
            value: undefined
        });
    }
}
function EL(e, n) {
    return G(e, {
        udsInboxEnabled: typeof n === "boolean" ? n : true
    });
}
function G(e, { udsInboxEnabled }) {
    if (e?.kind === "channel") {
        return true;
    }
    if (e?.kind === "observer") {
        return true;
    }
    if (e?.kind === "observer-activity") {
        return true;
    }
    if (e?.kind === "slack-ping") {
        return true;
    }
    if (e?.kind === "peer") {
        if (e.senderTaskId !== undefined) {
            return true;
        }
        if (udsInboxEnabled) {
            return true;
        }
    }
    return false;
}
function K(e, n) {
    let r = e.type === "attachment" ? e.attachment : undefined;
    if (typeof r !== "object" || r === null || !("type" in r) || r.type !== "queued_command") {
        return;
    }
    let t = Reflect.get(r, n);
    if (typeof t === "string" && t) {
        return t;
    }
}
function Acr(e) {
    return K(e, "source_uuid");
}
function XDe(e) {
    let n = Acr(e);
    if (n) {
        return [
            e.uuid,
            n
        ];
    }
    return [
        e.uuid
    ];
}
function U7r(e, n) {
    let r = e.findIndex((t)=>t.uuid === n);
    if (r !== -1) {
        return r;
    }
    return e.findIndex((t)=>Acr(t) === n);
}
const hkt = 600000;
const CVe = "Tool permission request failed";
const F7r = "Tool permission stream closed before response received";
const Tcr = "Stream closed";
const Ge = [
    `${CVe}: AbortError: ${F7r}`,
    `${CVe}: AbortError: ${Tcr}`,
    CVe
];
export { cye, kTe, Cne, AVe, sxn, sns, gkt, ins, kcr, ixn, ans, lns, axn, c4, LJ, cns, Unt, lxn, $7r, dns, $Yt, dye, q3, dW, Lle, uye, hkt, uns, Bnt, pns, cxn, fns, FYt, dxn, mns, CVe, F7r, Tcr, _E, EL, Acr, XDe, U7r };
