import { setMaxListeners } from "events";
function aMt(onExpire, r, clock, { unref } = {
    unref: true
}) {
    let n = {
        onExpire,
        clock,
        expiresAt: clock.monotonicNow() + r,
        unref,
        cancel: undefined
    };
    u(n, r);
    return {
        clear: E.bind(undefined, n)
    };
}
function u(e, r) {
    e.cancel = e.clock.setTimeout(k.bind(undefined, e), Math.min(Math.max(0, r || 0), 2147483647), {
        unref: e.unref
    });
}
function k(e) {
    e.cancel = undefined;
    let r = e.expiresAt - e.clock.monotonicNow();
    if (!(r > 1000)) {
        e.onExpire();
        return;
    }
    u(e, r);
}
function E(e) {
    e.cancel?.();
    e.cancel = undefined;
}
const d = 50;
function lr(e = d) {
    let r = new AbortController;
    setMaxListeners(e, r.signal);
    return r;
}
function f(e) {
    let r = this.deref();
    e.deref()?.abort(r?.signal.reason);
}
function m(e) {
    let r = this.deref();
    let o = e.deref();
    if (r && o) {
        r.signal.removeEventListener("abort", o);
    }
}
const R = new FinalizationRegistry(({ parentSignalRef, handler })=>{
    parentSignalRef.deref()?.removeEventListener("abort", handler);
});
function i(e, r, o) {
    let t = new WeakRef(r);
    let n = new WeakRef(e);
    if (e.signal.aborted) {
        o.call(n, t);
        return;
    }
    let handler = o.bind(n, t);
    e.signal.addEventListener("abort", handler, {
        once: true
    });
    R.register(r, {
        parentSignalRef: new WeakRef(e.signal),
        handler
    });
    r.signal.addEventListener("abort", m.bind(n, new WeakRef(handler)), {
        once: true
    });
}
function gg(e, r) {
    let o = lr(r);
    i(e, o, f);
    return o;
}
class N7 extends AbortController {
    turnController;
    constructor(e){
        super();
        this.turnController = e;
        setMaxListeners(d, this.signal);
        i(e, this, f);
    }
}
const p = "ask-withdrawn-by-asker";
const l = new DOMException(p, "AbortError");
function Nen(e) {
    return e.aborted && gi(e.reason) === p;
}
function cSo(e, r) {
    let o = new N7(e);
    o.signal.addEventListener("abort", ()=>{
        if (!r.aborted && !e.signal.aborted) {
            e.abort(o.signal.reason);
        }
    }, {
        once: true
    });
    if (r.aborted) {
        o.abort(l);
    } else {
        r.addEventListener("abort", ()=>o.abort(l), {
            once: true
        });
    }
    return o;
}
function wR(e) {
    let r = e;
    while(r instanceof N7){
        r = r.turnController;
    }
    return r;
}
function oxe(e, r) {
    if (e.signal.aborted) {
        r.abort(e.signal.reason);
        return ()=>{};
    }
    let o = ()=>r.abort(e.signal.reason);
    e.signal.addEventListener("abort", o, {
        once: true
    });
    return ()=>e.signal.removeEventListener("abort", o);
}
const w = {
    "user-cancel": new DOMException("user-cancel", "AbortError"),
    "remote-cancel": new DOMException("remote-cancel", "AbortError"),
    shutdown: new DOMException("shutdown", "AbortError"),
    interrupt: new DOMException("interrupt", "AbortError"),
    "turn-abort": new DOMException("turn-abort", "AbortError"),
    background: new DOMException("background", "AbortError"),
    "refusal-fallback-edit": new DOMException("refusal-fallback-edit", "AbortError"),
    "recovery-timeout": new DOMException("recovery-timeout", "AbortError"),
    "permission-stop": new DOMException("permission-stop", "AbortError")
};
function fc(e) {
    return w[e];
}
function gi(e) {
    if (e instanceof DOMException && e.name === "AbortError") {
        return e.message;
    }
    return e;
}
const _ = new Set([
    "user-cancel",
    "remote-cancel",
    "shutdown",
    "interrupt",
    "turn-abort"
]);
function lMt(e) {
    return _.has(gi(e));
}
const x = new Set([
    "interrupt",
    "turn-abort",
    "refusal-fallback-edit",
    "permission-stop"
]);
function $7(e) {
    return x.has(gi(e));
}
function vR(e) {
    if (gi(e.reason) === "shutdown") {
        return true;
    }
}
const s = "server-fallback-tombstone";
function F7(e) {
    return e.aborted && gi(e.reason) === s;
}
const v = new DOMException(s, "AbortError");
function cMt() {
    return v;
}
const c = "subagent-park";
const S = new DOMException(c, "AbortError");
function dSo() {
    return S;
}
function uSo(e) {
    return e.aborted && gi(e.reason) === c;
}
function zct(e) {
    switch(gi(e)){
        case "user-cancel":
            return "user_cancel";
        case "remote-cancel":
            return "remote_cancel";
        case "shutdown":
            return "shutdown";
        case "interrupt":
            return "interrupt";
        case "turn-abort":
            return "interrupt";
        case "background":
            return "background";
        case "recovery-timeout":
            return "recovery_timeout";
        case "permission-stop":
            return "turn_teardown";
        case s:
            return "server_fallback_tombstone";
        case c:
            return "subagent_park";
        default:
            return "turn_teardown";
    }
}
function pSo(e) {
    switch(e){
        case "user_cancel":
        case "remote_cancel":
        case "shutdown":
        case "interrupt":
        case "background":
        case "subagent_park":
            return true;
        case "turn_teardown":
        case "recovery_timeout":
        case "server_fallback_tombstone":
            return false;
    }
}
function C(e) {
    let r = this.deref();
    if (!r || !lMt(r.signal.reason)) {
        return;
    }
    e.deref()?.abort(r.signal.reason);
}
const b = 600000;
function fSo(e) {
    if (Number.isNaN(e)) {
        return b;
    }
    return Math.min(3600000, Math.max(b, Math.round(e * 1.5)));
}
function g(e) {
    e.deref()?.abort(fc("recovery-timeout"));
}
function Rkr(e, r, o) {
    return aMt(g.bind(undefined, new WeakRef(e)), r, o);
}
function mSo(e, r, o) {
    let t = lr();
    i(e, t, C);
    if (t.signal.aborted) {
        return t;
    }
    t.signal.addEventListener("abort", Rkr(t, r, o).clear, {
        once: true
    });
    return t;
}
export { aMt, lr, gg, N7, Nen, cSo, wR, oxe, fc, gi, lMt, $7, vR, F7, cMt, dSo, uSo, zct, pSo, fSo, Rkr, mSo };
