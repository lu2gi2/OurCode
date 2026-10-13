import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B, Ysn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { St } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
const u = 30000;
function y() {
    return {
        activityCallback: null,
        refcount: 0,
        mainLoopRefcount: 0,
        parkedOnUser: 0,
        parkGeneration: 0,
        activeReasons: new Map,
        oldestActivityStartedAt: null,
        heartbeatTimer: null,
        idleTimer: null,
        cleanupHandle: null
    };
}
const l = "cli";
const f = 1000;
class d {
    activityKey = ()=>l;
    mainLoopActivityListener = null;
    nestedChainDropListener = null;
    workStarted = Oe();
    statesByKey = new Map;
    evictedKeys = new Set;
    setActivityKey(e) {
        this.activityKey = e;
    }
    currentKey() {
        return this.activityKey();
    }
    stateCount() {
        return this.statesByKey.size;
    }
    currentStateOrCreate() {
        let e = this.activityKey();
        if (this.evictedKeys.has(e)) {
            return null;
        }
        let t = this.statesByKey.get(e);
        if (!t) {
            t = y();
            this.statesByKey.set(e, t);
        }
        return t;
    }
    currentStateOrNull() {
        return this.statesByKey.get(this.activityKey()) ?? null;
    }
    reset() {
        for (let e of [
            ...this.statesByKey.keys()
        ]){
            this.evictKey(e);
        }
        this.evictedKeys.clear();
        this.activityKey = ()=>l;
        this.mainLoopActivityListener = null;
        this.nestedChainDropListener = null;
        this.workStarted.clear();
    }
    evictKey(e) {
        this.evictedKeys.add(e);
        if (this.evictedKeys.size > f) {
            let r = this.evictedKeys.values().next().value;
            if (r !== undefined) {
                this.evictedKeys.delete(r);
            }
        }
        let t = this.statesByKey.get(e);
        if (!t) {
            return;
        }
        if (t.heartbeatTimer !== null) {
            clearInterval(t.heartbeatTimer);
        }
        if (t.idleTimer !== null) {
            clearTimeout(t.idleTimer);
        }
        t.cleanupHandle?.();
        this.statesByKey.delete(e);
    }
}
const p = new q(()=>new d);
function n() {
    return p.of(B().host);
}
function v(e) {
    s(e);
    e.heartbeatTimer = setInterval((t)=>{
        if (c(t)) {
            J("debug", "session_keepalive_parked_on_user", {
                refcount: t.refcount,
                parked_on_user: t.parkedOnUser
            });
            return;
        }
        J("debug", "session_keepalive_heartbeat", {
            refcount: t.refcount
        });
        if (a.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES) {
            t.activityCallback?.();
        }
    }, u, e);
}
function S(e) {
    s(e);
    if (e.activityCallback === null) {
        return;
    }
    e.idleTimer = setTimeout((t)=>{
        J("info", "session_idle_30s");
        t.idleTimer = null;
    }, u, e);
}
function s(e) {
    if (e.idleTimer !== null) {
        clearTimeout(e.idleTimer);
        e.idleTimer = null;
    }
}
function Vbs(e) {
    let t = n().currentStateOrCreate();
    if (!t) {
        return;
    }
    t.activityCallback = e;
    if (t.refcount > 0 && t.heartbeatTimer === null) {
        v(t);
    }
}
function qbs() {
    let e = n().currentStateOrNull();
    if (!e) {
        return;
    }
    e.activityCallback = null;
    if (e.heartbeatTimer !== null) {
        clearInterval(e.heartbeatTimer);
        e.heartbeatTimer = null;
    }
    s(e);
}
function Kbs() {
    let e = n().currentStateOrNull();
    if (e && a.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES) {
        e.activityCallback?.();
    }
}
function Nfo(e) {
    n().mainLoopActivityListener = e;
}
function $fo(e) {
    n().nestedChainDropListener = e;
}
function Ybs(e) {
    n().nestedChainDropListener?.(e);
}
function Xbs(e) {
    return (n().currentStateOrNull()?.activeReasons.get(e) ?? 0) > 0;
}
function D$n() {
    for (let e of n().statesByKey.values()){
        if (e.refcount > 0 && !c(e)) {
            return true;
        }
    }
    return false;
}
function L$n(e) {
    return n().workStarted.subscribe(e);
}
function cbe() {
    return n().currentStateOrNull()?.mainLoopRefcount ?? 0;
}
function kde() {
    return Ysn() || cbe() > 0;
}
function ZI(e, t) {
    let r = n();
    let i = r.currentStateOrCreate();
    if (!i) {
        return;
    }
    i.refcount++;
    if (t === undefined) {
        i.mainLoopRefcount++;
        r.mainLoopActivityListener?.(i.mainLoopRefcount);
    }
    i.activeReasons.set(e, (i.activeReasons.get(e) ?? 0) + 1);
    if (i.refcount === 1) {
        i.oldestActivityStartedAt = Date.now();
        if (i.activityCallback !== null && i.heartbeatTimer === null) {
            v(i);
        }
    }
    if (i.refcount - i.parkedOnUser === 1) {
        r.workStarted.emit();
    }
    if (i.cleanupHandle === null) {
        let owner_key = r.activityKey();
        i.cleanupHandle = St(async ()=>{
            J("info", "session_activity_at_shutdown", {
                owner_key,
                refcount: i.refcount,
                active: Object.fromEntries(i.activeReasons),
                oldest_activity_ms: i.refcount > 0 && i.oldestActivityStartedAt !== null ? Date.now() - i.oldestActivityStartedAt : null
            });
        });
    }
}
function eO(reason, t) {
    let r = n();
    let i = r.currentStateOrNull();
    if (!i) {
        return;
    }
    if (i.refcount > 0) {
        i.refcount--;
    }
    if (t === undefined) {
        if (i.mainLoopRefcount > 0) {
            i.mainLoopRefcount--;
            r.mainLoopActivityListener?.(i.mainLoopRefcount);
        } else {
            J("warn", "session_activity_main_loop_underflow", {
                reason
            });
        }
    }
    let o = (i.activeReasons.get(reason) ?? 0) - 1;
    if (o > 0) {
        i.activeReasons.set(reason, o);
    } else {
        i.activeReasons.delete(reason);
    }
    if (i.refcount === 0) {
        if (i.parkedOnUser > 0) {
            J("warn", "session_activity_parked_leaked", {
                parked_on_user: i.parkedOnUser
            });
            i.parkedOnUser = 0;
            i.parkGeneration++;
        }
        if (i.heartbeatTimer !== null) {
            clearInterval(i.heartbeatTimer);
            i.heartbeatTimer = null;
            S(i);
        }
    }
}
function ioe() {
    if (a.CLAUDE_CODE_DISABLE_AWAITING_USER_IDLE) {
        return ()=>{};
    }
    let e = n();
    let t = e.currentStateOrNull();
    if (!t) {
        return ()=>{};
    }
    if (t.parkedOnUser >= t.refcount) {
        J("warn", "session_activity_parked_exceeds_refcount", {
            refcount: t.refcount,
            parked_on_user: t.parkedOnUser
        });
        return ()=>{};
    }
    t.parkedOnUser++;
    let t_parkGeneration = t.parkGeneration;
    let i = false;
    return ()=>{
        if (i) {
            return;
        }
        i = true;
        if (t.parkGeneration === t_parkGeneration && t.parkedOnUser > 0) {
            t.parkedOnUser--;
            if (t.refcount - t.parkedOnUser === 1) {
                e.workStarted.emit();
            }
        }
    };
}
function Jbs() {
    let e = n().currentStateOrNull();
    return e !== null && c(e);
}
function c(e) {
    return !a.CLAUDE_CODE_DISABLE_AWAITING_USER_IDLE && e.parkedOnUser > 0 && e.refcount - e.parkedOnUser <= 0;
}
export { Vbs, qbs, Kbs, Nfo, $fo, Ybs, Xbs, D$n, L$n, cbe, kde, ZI, eO, ioe, Jbs };
