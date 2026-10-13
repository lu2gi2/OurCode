import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { NG } from "/$bunfs/root/chunk-g2whb6bt.js";
import { oot } from "/$bunfs/root/chunk-yg1mje90.js";
import { Nye, B2 } from "/$bunfs/root/chunk-4xz4ewb9.js";
import { o, E, M, oe, _t, Wr, ue, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
const R9n = "Mcp-Name";
const y = 250;
const V = 30000;
const F = 2000;
const S = 5;
const q = 16;
const m = p(()=>_t({
        taskId: o().min(1).max(Nye).regex(B2),
        status: U([
            "working",
            "input_required",
            "completed",
            "failed",
            "cancelled"
        ]),
        statusMessage: o().nullish().transform((e)=>e ?? undefined).optional(),
        createdAt: o().nullish().transform((e)=>e ?? undefined).optional(),
        lastUpdatedAt: o().nullish().transform((e)=>e ?? undefined).optional(),
        ttlMs: E().nullish().transform((e)=>e ?? undefined).optional(),
        pollIntervalMs: E().nullish().transform((e)=>e ?? undefined).optional()
    }));
const G1s = p(()=>m().extend({
        resultType: A("task")
    }));
const zzo = "com.anthropic/agent-task";
const X = 20000;
const H = 64;
const J = p(()=>_t({
        sessionId: o().max(Nye).regex(B2).nullish().transform((e)=>e ?? undefined).optional(),
        modelImmediateResponse: o().max(X).nullish().transform((e)=>e ?? undefined).optional(),
        taskId: o().max(Nye).regex(B2).nullish().transform((e)=>e ?? undefined).optional(),
        merged: M().nullish().transform((e)=>e ?? undefined).optional(),
        kind: o().max(H).regex(B2).nullish().transform((e)=>e ?? undefined).optional()
    }));
function V1s(e) {
    let n = iDs(e);
    if (n === undefined) {
        return;
    }
    let r = {
        ...n.sessionId !== undefined && {
            sessionId: n.sessionId
        },
        ...n.taskId !== undefined && {
            taskId: n.taskId
        },
        ...n.kind !== undefined && {
            kind: n.kind
        },
        ...n.merged !== undefined && {
            merged: n.merged
        }
    };
    if (Object.keys(r).length > 0) {
        return {
            [zzo]: r
        };
    }
}
function iDs(e) {
    if (typeof e !== "object" || e === null) {
        return;
    }
    let n = e[zzo];
    if (n === undefined) {
        return;
    }
    let r = J().safeParse(n);
    if (r.success) {
        return r.data;
    }
}
const W = p(()=>_t({
        method: o().min(1).max(Nye).regex(B2),
        params: ue(o(), oe()).nullish().transform((e)=>e ?? undefined).optional()
    }));
const B = p(()=>Wr("status", [
        m().extend({
            status: A("working")
        }),
        m().extend({
            status: A("input_required"),
            inputRequests: ue(o().min(1).max(512), W()).nullish().transform((e)=>e ?? {})
        }),
        m().extend({
            status: A("completed"),
            result: ue(o(), oe()).nullish().transform((e)=>e ?? {})
        }),
        m().extend({
            status: A("failed"),
            error: _t({
                code: E().nullish().transform((e)=>e ?? undefined).optional(),
                message: o().nullish().transform((e)=>e ?? undefined).optional(),
                data: oe().optional()
            }).nullish().transform((e)=>e ?? {})
        }),
        m().extend({
            status: A("cancelled")
        })
    ]));
class Gzo extends Error {
    constructor(e){
        super(e);
        this.name = "TaskInputUnservableError";
    }
}
function syt(e) {
    return Math.min(V, Math.max(y, e ?? F));
}
function x(error) {
    if (typeof error !== "object" || error === null) {
        return false;
    }
    if (Object.prototype.toString.call(error) === "[object DOMException]") {
        return false;
    }
    if (error instanceof Error && (error.name === "AbortError" || error.name === "TimeoutError" || error.message.startsWith("SSE error: ") || error.message.startsWith("Streamable HTTP error: "))) {
        return false;
    }
    return "code" in error && typeof error.code === "number" && "message" in error && typeof error.message === "string";
}
function C(code) {
    if (code === -32003) {
        return false;
    }
    return code === -32603 || code === -32700 || code >= -32099 && code <= -32000;
}
function x9n(e) {
    return e === -32601 || e === -32003;
}
const T1t = Symbol("TASK_DRIVE_QUIET_STOP");
async function x1r({ task, request, signal, onStatus, resolveInputRequest, onInputUnservable = "cancel", log, errorText = NG, answeredKeys, outstandingInputKeys }) {
    let { taskId } = task;
    let headers = {
        [R9n]: taskId
    };
    let v = answeredKeys ?? new Set;
    let O = new Set;
    let b = new Map;
    let g = outstandingInputKeys ?? {
        served: new Set,
        capLogged: false
    };
    let I = syt(task.pollIntervalMs);
    let h;
    let T = 0;
    let l = 0;
    let u = ()=>{
        if (signal.reason === T1t) {
            return;
        }
        request("tasks/cancel", {
            taskId
        }, {
            headers,
            signal: AbortSignal.timeout(oot)
        }).then(()=>log?.(`task ${taskId}: cancel sent`), (i)=>log?.(`task ${taskId}: cancel failed: ${errorText(i)}`));
    };
    let L = true;
    while(true){
        if (L) {
            L = false;
        } else {
            let a = h ?? I;
            h = undefined;
            await Q(a, signal);
        }
        if (signal.aborted) {
            u();
            return {
                status: "error",
                error: {
                    kind: "cancelled",
                    message: "Task cancelled"
                }
            };
        }
        let i;
        try {
            let a = await request("tasks/get", {
                taskId
            }, {
                headers,
                signal
            });
            let c = B().safeParse(a);
            if (!c.success) {
                u();
                return {
                    status: "error",
                    error: {
                        kind: "malformed",
                        message: `Malformed tasks/get response for task ${taskId}: ${c.error.message}`
                    }
                };
            }
            i = c.data;
            T = 0;
        } catch (error) {
            if (signal.aborted) {
                u();
                return {
                    status: "error",
                    error: {
                        kind: "cancelled",
                        message: "Task cancelled"
                    }
                };
            }
            if (x(error) && !C(error.code)) {
                return {
                    status: "error",
                    error: {
                        kind: "poll_failed",
                        message: `tasks/get failed for task ${taskId}: ${error.message}`,
                        code: error.code,
                        data: error.data
                    }
                };
            }
            T += 1;
            log?.(`task ${taskId}: poll failure ${T}/${S}: ${errorText(error)}`);
            if (T >= S) {
                return {
                    status: "error",
                    error: {
                        kind: "poll_failed",
                        message: `Lost contact with task ${taskId} after ${T} failed polls: ${errorText(error)}`
                    }
                };
            }
            continue;
        }
        onStatus?.(i);
        I = syt(i.pollIntervalMs ?? I);
        if (i.status !== "input_required") {
            l = 0;
        }
        switch(i.status){
            case "working":
                continue;
            case "completed":
                return {
                    status: "completed",
                    result: i.result
                };
            case "failed":
                return {
                    status: "error",
                    error: {
                        kind: "failed",
                        message: i.error.message ?? i.statusMessage ?? "Task failed",
                        code: i.error.code,
                        data: i.error.data
                    }
                };
            case "cancelled":
                return {
                    status: "error",
                    error: {
                        kind: "cancelled",
                        message: i.statusMessage ?? "Task was cancelled by the server"
                    }
                };
            case "input_required":
                {
                    let a = Object.entries(i.inputRequests).filter(([t])=>!v.has(t));
                    if (a.length === 0) {
                        continue;
                    }
                    let c = a.filter(([t])=>!O.has(t));
                    if (c.length === 0) {
                        u();
                        return {
                            status: "error",
                            error: {
                                kind: "unsupported_input",
                                message: `Task ${taskId}: the server rejected the submitted answer to ${a.map(([t])=>t).join(", ")} and still requires input`
                            }
                        };
                    }
                    let P = c.filter(([t])=>{
                        if (g.served.has(t)) {
                            return true;
                        }
                        if (g.served.size >= q) {
                            if (!g.capLogged) {
                                log?.(`task ${taskId}: reached ${q} distinct input-request keys; ignoring new keys`);
                                g.capLogged = true;
                            }
                            return false;
                        }
                        g.served.add(t);
                        return true;
                    });
                    if (P.length === 0) {
                        continue;
                    }
                    let inputResponses = {};
                    for (let [t, f] of P){
                        if (signal.aborted) {
                            break;
                        }
                        let R;
                        if (b.has(t)) {
                            R = b.get(t);
                        } else {
                            try {
                                R = await resolveInputRequest(t, f);
                            } catch (error) {
                                if (error instanceof Gzo) {
                                    if (onInputUnservable === "cancel") {
                                        u();
                                    }
                                    return {
                                        status: "error",
                                        error: {
                                            kind: "input_unservable",
                                            message: onInputUnservable === "leave" ? `Task ${taskId} asked for ${f.method}, which this session cannot surface; left running on the server for a session that can` : `Task ${taskId} asked for ${f.method}, which this session has no way to show`
                                        }
                                    };
                                }
                                throw error;
                            }
                            if (R === undefined) {
                                u();
                                return {
                                    status: "error",
                                    error: {
                                        kind: "unsupported_input",
                                        message: `Task ${taskId} asked for ${f.method}, which this client cannot serve`
                                    }
                                };
                            }
                            b.set(t, R);
                        }
                        inputResponses[t] = R;
                    }
                    if (signal.aborted) {
                        u();
                        return {
                            status: "error",
                            error: {
                                kind: "cancelled",
                                message: "Task cancelled"
                            }
                        };
                    }
                    try {
                        await request("tasks/update", {
                            taskId,
                            inputResponses
                        }, {
                            headers,
                            signal
                        });
                        l = 0;
                        for (let t of Object.keys(inputResponses)){
                            v.add(t);
                        }
                        log?.(`task ${taskId}: answered ${Object.keys(inputResponses).join(", ")}`);
                    } catch (error) {
                        if (signal.aborted) {
                            u();
                            return {
                                status: "error",
                                error: {
                                    kind: "cancelled",
                                    message: "Task cancelled"
                                }
                            };
                        }
                        if (x(error) && x9n(error.code)) {
                            return {
                                status: "error",
                                error: {
                                    kind: "poll_failed",
                                    message: `tasks/update failed for task ${taskId}: ${error.message}`,
                                    code: error.code,
                                    data: error.data
                                }
                            };
                        }
                        if (x(error) && !C(error.code)) {
                            for (let f of Object.keys(inputResponses)){
                                O.add(f);
                            }
                            log?.(`task ${taskId}: tasks/update JSON-RPC error ${error.code} (${error instanceof Error ? error.message : String(error)}); re-polling for real state`);
                            h = y;
                            continue;
                        }
                        l += 1;
                        log?.(`task ${taskId}: tasks/update failure ${l}/${S}: ${errorText(error)}`);
                        if (l >= S) {
                            return {
                                status: "error",
                                error: {
                                    kind: "poll_failed",
                                    message: `Lost contact with task ${taskId} after ${l} failed tasks/update attempts: ${errorText(error)}`,
                                    phase: "update"
                                }
                            };
                        }
                        h = y;
                        continue;
                    }
                    h = y;
                    continue;
                }
        }
    }
}
export { R9n, G1s, zzo, V1s, iDs, Gzo, syt, x9n, T1t, x1r };
