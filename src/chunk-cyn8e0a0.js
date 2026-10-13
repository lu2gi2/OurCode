import { Jt } from "/$bunfs/root/chunk-dn762950.js";
const a = /^00-([0-9a-f]{32})-([0-9a-f]{16})-[0-9a-f]{2}$/;
const c = "0".repeat(32);
const i = "0".repeat(16);
const u = 8;
function d(n) {
    if (typeof n !== "string") {
        return false;
    }
    let t = a.exec(n);
    return t !== null && t[1] !== c && t[2] !== i;
}
function vzo(n, { isCrossSession }) {
    if (isCrossSession || typeof n !== "object" || n === null) {
        return;
    }
    if (!("trace_context" in n) || !("uuid" in n)) {
        return;
    }
    let n_trace_context = n.trace_context;
    let eventUuid = Jt(n.uuid);
    if (!d(n_trace_context) || !eventUuid) {
        return;
    }
    return {
        traceparent: n_trace_context,
        eventUuid
    };
}
function Ezo(n) {
    let parent = n.findLast((e)=>e.traceContext)?.traceContext;
    if (!parent) {
        return {
            parent: undefined,
            linked: []
        };
    }
    let r = new Set([
        parent.traceparent
    ]);
    let o = [];
    for (let { traceContext } of n){
        if (traceContext && !r.has(traceContext.traceparent)) {
            r.add(traceContext.traceparent);
            o.push(traceContext);
        }
    }
    return {
        parent,
        linked: o.slice(-u)
    };
}
const s = "anthropic/ccr-turn-event-uuid";
const T = "anthropic/ccr-turn-linked-event-uuids";
function agn(n) {
    let t = Jt(n?.parent?.eventUuid);
    if (!n || !t) {
        return {};
    }
    let r = n.linked.flatMap((o)=>{
        let e = Jt(o.eventUuid);
        if (e) {
            return [
                e
            ];
        }
        return [];
    });
    return {
        [s]: t,
        ...r.length > 0 && {
            [T]: r
        }
    };
}
export { vzo, Ezo, agn };
