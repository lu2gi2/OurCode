import { q, cs } from "/$bunfs/root/chunk-ctt36bn8.js";
function wDt(t) {
    let e;
    for(let n in t){
        if (n.startsWith("_PROTO_")) {
            if (e === undefined) {
                e = {
                    ...t
                };
            }
            delete e[n];
        }
    }
    return e ?? t;
}
const u = 1000;
function l() {
    return {
        eventQueue: [],
        sink: null,
        droppedEventCount: 0
    };
}
function s(state, e) {
    if (state.eventQueue.length >= u) {
        state.eventQueue.shift();
        state.droppedEventCount++;
    }
    state.eventQueue.push(e);
}
class r {
    state = l();
}
const c = new q(()=>new r);
function a() {
    return cs(c);
}
function rCo(t) {
    let state = a().state;
    if (state.sink !== null) {
        return false;
    }
    state.sink = t;
    if (state.eventQueue.length > 0) {
        let n = state.eventQueue;
        state.eventQueue = [];
        queueMicrotask(()=>{
            for (let o of n){
                if (o.async) {
                    t.logEventAsync(o.eventName, o.metadata);
                } else {
                    t.logEvent(o.eventName, o.metadata);
                }
            }
        });
    }
    return true;
}
function i(t, e) {
    let state = a().state;
    if (state.sink === null) {
        s(state, {
            eventName: t,
            metadata: e,
            async: false
        });
        return;
    }
    state.sink.logEvent(t, e);
}
async function js(t, e) {
    let state = a().state;
    if (state.sink === null) {
        s(state, {
            eventName: t,
            metadata: e,
            async: true
        });
        return;
    }
    await state.sink.logEventAsync(t, e);
}
export { wDt, rCo, i, js };
