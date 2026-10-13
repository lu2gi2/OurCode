import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { oc } from "/$bunfs/root/chunk-cerrsv89.js";
import { mQ } from "/$bunfs/root/chunk-ez1x5yhw.js";
const a = 256;
class o {
    callId;
    toolName;
    hostName;
    dispatchEpoch;
    issuedAt;
    #e;
    #i;
    #u;
    #a;
    #l = false;
    #d;
    #h;
    #p;
    #n;
    #s;
    #r = "none";
    #m;
    #w;
    #g = 0;
    #k = 0;
    #y = 0;
    #f;
    #A = false;
    #b = new Map;
    #o;
    #t;
    constructor(e){
        this.callId = e.callId;
        this.toolName = e.toolName;
        this.hostName = e.hostName;
        this.dispatchEpoch = e.dispatchEpoch;
        this.#w = e.onAskEnded;
        this.#t = e.now;
        this.issuedAt = e.now();
    }
    get phase() {
        if (this.#o !== undefined) {
            return "settled";
        }
        if (this.#n !== undefined) {
            return "asking";
        }
        if (this.#d === undefined) {
            return "pending";
        }
        return "sent";
    }
    get instanceId() {
        return this.#e;
    }
    get sentUnderEpoch() {
        return this.#i ?? this.dispatchEpoch;
    }
    get carryingRequestId() {
        return this.#u;
    }
    get inheritedRequestId() {
        return this.#a?.requestId;
    }
    get inheritedWithdrawn() {
        return this.#l;
    }
    inherit(requestId, withdraw) {
        this.#a = {
            requestId,
            withdraw
        };
    }
    withdrawInherited() {
        if (this.#a === undefined || this.#l) {
            return false;
        }
        this.#l = true;
        oc(this.callId, "inherited standing request withdrawn", {
            host_inst: this.#e
        });
        this.#a.withdraw();
        return true;
    }
    get ask() {
        return this.#n;
    }
    get askEnded() {
        return this.#s;
    }
    get askOutstanding() {
        return this.#r === "raised" || this.#r === "asking";
    }
    get elapsedMs() {
        return (this.#o?.at ?? this.#t()) - this.issuedAt;
    }
    get queuedMs() {
        return this.#k;
    }
    get askSeatWaitMs() {
        return this.#y;
    }
    get reconnectHoldMs() {
        return this.#f;
    }
    get sentWithoutAskSeat() {
        return this.#A;
    }
    noteSentWithoutAskSeat() {
        this.#A = true;
    }
    get askingMs() {
        if (this.#n === undefined) {
            return this.#g;
        }
        return this.#g + (this.#t() - this.#n.since);
    }
    get settled() {
        return this.#o;
    }
    get wireName() {
        return this.#d?.wireName;
    }
    get fingerprint() {
        if (this.#h === undefined && this.#d !== undefined) {
            this.#h = mQ(this.#d.wireName, this.#d.input);
        }
        return this.#h;
    }
    sent(e) {
        this.#d = e;
        this.#h = undefined;
    }
    questionRaised() {
        this.#r = "raised";
    }
    answeredWithoutPrompt() {
        this.#r = this.#s === undefined ? "answered" : "none";
    }
    get approvedBy() {
        return this.#m;
    }
    recordApprovedBy(e) {
        this.#m = e;
    }
    recordAddressee(e, t, n) {
        if (this.#e !== undefined && this.#e !== e) {
            this.#s = undefined;
        }
        this.#e = e;
        this.#i ??= t;
        this.#u = n ?? this.#u;
    }
    beginQueuedWait() {
        let e = this.#t();
        let t = false;
        return ()=>{
            if (t) {
                return;
            }
            t = true;
            this.#k += this.#t() - e;
        };
    }
    beginAskSeatWait() {
        let e = this.#t();
        let t = false;
        return ()=>{
            if (t) {
                return;
            }
            t = true;
            this.#y += this.#t() - e;
        };
    }
    beginReconnectHold() {
        let e = this.#t();
        this.#f = 0;
        return ()=>{
            this.#f = this.#t() - e;
        };
    }
    legTransit(e) {
        return this.#b.get(e);
    }
    recordLegTransit(e, t) {
        this.#b.set(e, t);
    }
    get held() {
        return this.#p;
    }
    hold(e) {
        this.#p = e;
    }
    async whileAsking(e, t, n) {
        this.#c();
        this.#r = "asking";
        this.#n = {
            ...e,
            since: this.#t()
        };
        if (this.#s !== undefined) {
            e.end?.(this.#s);
        }
        let s = new AbortController;
        let i;
        let resume = ()=>{
            if (n === undefined || s.signal.aborted) {
                return;
            }
            i?.abort();
            let r = new AbortController;
            i = r;
            Q(n.afterMs, r.signal).then(()=>{
                if (!r.signal.aborted && !s.signal.aborted) {
                    oc(this.callId, "ask lapsed unanswered", {
                        ask_id: e.askId,
                        after_ms: n.afterMs
                    });
                    this.endAsk(n.reason);
                }
            });
        };
        resume();
        try {
            return await t({
                hold: ()=>i?.abort(),
                resume
            });
        } finally{
            s.abort();
            i?.abort();
            this.#r = this.#s === undefined ? "answered" : "none";
            this.#c();
        }
    }
    endAsk(reason) {
        if (this.#s !== undefined) {
            return;
        }
        this.#s = reason;
        oc(this.callId, "ask ended without an answer", {
            reason,
            ask_id: this.#n?.askId,
            host_inst: this.#e,
            showing: this.#n?.end !== undefined
        });
        this.#n?.end?.(reason);
        this.#w?.(reason);
    }
    #c() {
        if (this.#n === undefined) {
            return;
        }
        this.#g += this.#t() - this.#n.since;
        this.#n = undefined;
    }
    markSettled(e) {
        if (this.#o !== undefined) {
            return;
        }
        this.#c();
        this.#o = {
            outcome: e.kind === "completed" ? {
                kind: "completed",
                disposition: e.disposition
            } : {
                kind: "error",
                code: e.code
            },
            at: this.#t()
        };
        return this.#o;
    }
}
class $Lt {
    now = Date.now;
    #e = new Map;
    #i = [];
    begin(e) {
        let t = new o({
            ...e,
            now: this.now
        });
        this.#e.set(e.callId, t);
        return t;
    }
    settle(e, t) {
        let n = e.markSettled(t);
        if (n === undefined) {
            return;
        }
        if (this.#e.get(e.callId) === e) {
            this.#e.delete(e.callId);
        }
        this.remember({
            callId: e.callId,
            toolName: e.toolName,
            hostName: e.hostName,
            fingerprint: e.fingerprint,
            ...n
        });
    }
    get(e) {
        return this.#e.get(e);
    }
    addressedTo(e) {
        let t = [];
        for (let n of this.#e.values()){
            if (n.instanceId === e) {
                t.push(n);
            }
        }
        return t;
    }
    recentByFingerprint(e, t) {
        let n = [];
        let s = this.now();
        for(let i = this.#i.length - 1; i >= 0; i -= 1){
            let d = this.#i[i];
            if (s - d.at > t) {
                break;
            }
            if (d.fingerprint === e) {
                n.push(d);
            }
        }
        return n;
    }
    remember(e) {
        let t = {
            ...e,
            at: Math.min(e.at, this.now())
        };
        let n = this.#i.findLastIndex((s)=>s.at <= t.at);
        this.#i.splice(n + 1, 0, t);
        if (this.#i.length > a) {
            this.#i.shift();
        }
    }
}
export { $Lt };
