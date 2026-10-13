import { da } from "/$bunfs/root/chunk-xb9cceab.js";
import { x } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { wNe } from "/$bunfs/root/chunk-4r6b8efh.js";
import { co, Jr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ht, Xt, Be, Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Gne } from "/$bunfs/root/chunk-716kq0mx.js";
import { Cj } from "/$bunfs/root/chunk-b2398mm3.js";
import { dze } from "/$bunfs/root/chunk-5h13e42b.js";
import { P$ } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Uc } from "/$bunfs/root/chunk-zc6kefep.js";
import { rt } from "/$bunfs/root/chunk-xx1j2680.js";
import { o, E, u } from "/$bunfs/root/chunk-smx21d0k.js";
const F6 = da;
const mX = new Set([
    Be,
    Ct,
    rt,
    Xt,
    ht,
    co,
    Jr
]);
const h2o = "device_bash";
const cEe = new Set([
    "sync_files"
]);
function y2o(t) {
    return t.filter((n)=>{
        if (n.mcpInfo?.serverName !== F6) {
            return true;
        }
        let toolName = n.mcpInfo.toolName;
        let r = Gne(toolName);
        return !mX.has(toolName) && toolName !== Uc && (r === undefined || !mX.has(r));
    });
}
function _2o(t) {
    return t.filter((n)=>n.mcpInfo?.serverName !== F6 || !cEe.has(n.mcpInfo.toolName));
}
const h = 64;
const deadlineMs = 15000;
const g = 31622400000;
const L = 16384;
const b2o = /^[\w-]{1,64}$/;
function Bhn(t) {
    return t.description?.capabilities?.includes("background_shells") === true && Cj();
}
function eWr(t) {
    return mX.has(t) || t === Uc && Cj();
}
class zWe {
    #t = new Map;
    started(t, n) {
        this.#t.set(t, this.#t.get(t) ?? n);
        let e = [
            ...this.#t
        ].filter(([, r])=>r.hostName === n.hostName);
        if (e.length > h) {
            this.#t.delete(e[0]?.[0] ?? t);
        }
    }
    find(t, n) {
        let e = this.#t.get(t);
        if (e && dze(n, e.agentId)) {
            return e;
        }
    }
}
async function S2o(taskId, n, e, signal) {
    let m = e.get(zWe).find(taskId, n);
    if (m === undefined) {
        return;
    }
    let { hostName, callId } = m;
    let _ = e.get(P$).resolve(hostName);
    let p = _.kind === "remote" ? await _.host.transport.call(Be, {}, wNe(callId), {
        signal,
        deadlineMs,
        toolUseId: callId
    }).catch(()=>{}) : undefined;
    let i = p?.kind === "result" ? p.envelope : undefined;
    let s = i?.outcome === "completed" ? u({
        background: u({
            state: o(),
            exit_code: E().optional(),
            ran_ms: E().nonnegative().max(g),
            ended_ms_ago: E().nonnegative().max(g).optional()
        })
    }).safeParse(i.output).data?.background : undefined;
    if (i?.outcome !== "completed" || s === undefined) {
        throw new x(`${hostName} did not say what became of background command ${taskId}: it is not attached or did not answer in time, or it no longer reports on the command (it keeps the last 16 that ended, and its record goes with a restart of Claude Code there or with background commands being switched off there).`, "no status for a background command on an attached machine");
    }
    let { content } = i;
    let O = typeof content === "string" ? content : content.map((S)=>{
        if (S.type === "text") {
            return S.text;
        }
        return "";
    }).join("");
    let f = `[from ${hostName}, about background command ${taskId}]
${ne(O, L)}`;
    let l = Date.now() - (s.ended_ms_ago ?? 0);
    let T = {
        taskId,
        createdAt: new Date(l - s.ran_ms).toISOString(),
        lastUpdatedAt: new Date(l).toISOString()
    };
    if (s.state === "exited") {
        return {
            ...T,
            status: "completed",
            statusMessage: `Exited on ${hostName}.`,
            result: {
                content: [
                    {
                        type: "text",
                        text: f
                    }
                ],
                isError: s.exit_code !== 0
            }
        };
    }
    return {
        ...T,
        status: s.state === "running" ? "working" : "cancelled",
        statusMessage: f
    };
}
export { F6, mX, h2o, cEe, y2o, _2o, b2o, Bhn, eWr, zWe, S2o };
