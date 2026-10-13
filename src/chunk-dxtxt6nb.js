import { zee, Hie } from "/$bunfs/root/chunk-xb7wvzmf.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { No, re } from "/$bunfs/root/chunk-etbngzss.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { NA } from "/$bunfs/root/chunk-xj62f004.js";
class E {
    urlFlows = new Map;
    deps;
    client;
    constructor(e, t){
        this.deps = e;
        this.client = t;
    }
    hasCompletionChannel() {
        return this.client?.getProtocolEra?.() !== "modern";
    }
    rebind(e) {
        this.deps = e;
    }
    handle = async (e, t)=>{
        let { signal } = t;
        let { serverName } = this.deps;
        if (NA({
            name: serverName
        }) !== undefined) {
            return {
                action: "cancel"
            };
        }
        let s = "transportErrorState" in t ? t.transportErrorState : this.deps.transportErrorState;
        if (s) {
            s.pendingElicitations++;
        }
        re(serverName, `Received elicitation request: ${_(e)}`);
        let { params } = e;
        let l = w(params);
        i("tengu_mcp_elicitation_shown", {
            mode: d(l)
        });
        try {
            let r = await this.deps.runElicitationHooks(serverName, params, signal);
            if (r) {
                re(serverName, `Elicitation resolved by hook: ${_(r)}`);
                i("tengu_mcp_elicitation_response", {
                    mode: d(l),
                    action: d(r.action),
                    byHook: true
                });
                g("mcp_elicitation_handle");
                return r;
            }
            let c = params.mode === "url" && this.hasCompletionChannel() ? params.elicitationId : undefined;
            let { result, flow } = await this.ask(params, signal, l, c, s);
            re(serverName, `Elicitation response: ${_(result)}`);
            let p = await this.deps.runElicitationResultHooks(serverName, result, signal, l, c);
            if (p.action !== result.action) {
                i("tengu_mcp_elicitation_result_hook", {
                    mode: d(l),
                    action: d(p.action)
                });
            }
            if (params.mode === "url" && result.action === "accept" && p.action !== "accept") {
                this.abandonWaiting(c, flow);
            }
            g("mcp_elicitation_handle");
            return p;
        } catch (error) {
            No(serverName, `Elicitation error: ${error}`);
            m("mcp_elicitation_handle", "handler_error");
            return {
                action: "cancel"
            };
        } finally{
            if (s) {
                s.pendingElicitations--;
                s.lastElicitationClosedAt = Date.now();
            }
        }
    };
    complete = (e)=>{
        let t = this.urlFlows.get(e);
        if (!t || t.size === 0) {
            return false;
        }
        for (let n of t){
            n.completed = true;
            n.closeWaiting?.();
        }
        return true;
    };
    abandonWaiting(e, t) {
        t?.closeWaiting?.();
        this.forget(e, t);
    }
    async ask(params, signal, n, o, s) {
        if (signal.aborted) {
            return {
                result: {
                    action: "cancel"
                },
                flow: undefined
            };
        }
        let { serverName, requestDialog } = this.deps;
        let flow;
        if (o !== undefined) {
            flow = {
                completed: false,
                closeWaiting: undefined
            };
            let u = this.urlFlows.get(o);
            if (u) {
                u.add(flow);
            } else {
                this.urlFlows.set(o, new Set([
                    flow
                ]));
            }
        }
        let result = await requestDialog(zee, {
            serverName,
            params,
            ...params.mode === "url" && o === undefined && {
                userConfirmsCompletion: true
            }
        }, {
            place: "under",
            signal
        });
        if (!signal.aborted) {
            i("tengu_mcp_elicitation_response", {
                mode: d(n),
                action: d(result.action)
            });
        }
        if (params.mode === "url" && result.action === "accept" && flow) {
            if (flow.completed) {
                this.forget(o, flow);
            } else {
                this.showWaiting(params, o, flow, signal, s);
            }
        } else {
            this.forget(o, flow);
        }
        return {
            result,
            flow
        };
    }
    async showWaiting(params, t, n, o, s) {
        let a = new AbortController;
        n.closeWaiting = ()=>a.abort();
        if (s) {
            s.pendingElicitations++;
        }
        try {
            await this.deps.requestDialog(Hie, {
                serverName: this.deps.serverName,
                params,
                waitingState: {
                    actionLabel: "Skip confirmation"
                }
            }, {
                signal: AbortSignal.any([
                    a.signal,
                    o
                ]),
                succeeds: true
            });
        } finally{
            if (s) {
                s.pendingElicitations--;
                s.lastElicitationClosedAt = Date.now();
            }
        }
        this.forget(t, n);
    }
    forget(e, t) {
        if (e === undefined || t === undefined) {
            return;
        }
        let n = this.urlFlows.get(e);
        if (!n) {
            return;
        }
        n.delete(t);
        if (n.size === 0) {
            this.urlFlows.delete(e);
        }
    }
}
function w(params) {
    if (params.mode === "url") {
        return "url";
    }
    return "form";
}
const f = new WeakMap;
function jht(e, t) {
    let n = f.get(e);
    if (n) {
        n.rebind(t);
        return n;
    }
    let o = new E(t, e);
    f.set(e, o);
    return o;
}
export { jht };
