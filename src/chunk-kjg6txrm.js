import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { Oh } from "/$bunfs/root/chunk-1qq5kpcj.js";
import { createHash } from "crypto";
const h = 2048;
class i {
    #e = new Map;
    #n = new Set;
    record(e, n) {
        if (n.msg_id === undefined) {
            return;
        }
        let s = this.#e.get(e);
        if (s === undefined) {
            s = new Map;
            this.#e.set(e, s);
        }
        s.set(n.msg_id, t(n));
        if (!this.#n.has(e)) {
            f(s);
        }
    }
    wrote(e, n) {
        return n.msg_id !== undefined && this.#e.get(e)?.get(n.msg_id) === t(n);
    }
    retire(e, n) {
        let s = new Set(n);
        this.#s(e, (r)=>!s.has(r));
    }
    retain(e, n) {
        this.#n.add(e);
        this.#s(e, (s)=>n.has(s));
    }
    forget(e) {
        this.#e.delete(e);
    }
    #s(e, n) {
        let s = this.#e.get(e);
        if (s === undefined) {
            return;
        }
        for (let r of s.keys()){
            if (!n(r)) {
                s.delete(r);
            }
        }
        if (s.size === 0) {
            this.#e.delete(e);
        }
    }
}
function f(e) {
    if (e.size <= h) {
        return;
    }
    let [n] = e.keys();
    if (n !== undefined) {
        e.delete(n);
    }
}
function t(e) {
    return createHash("sha256").update(_([
        e.from,
        e.timestamp,
        e.text,
        e.summary ?? null,
        e.color ?? null,
        e.from_plugin ?? null
    ])).digest("hex");
}
class o {
    getCurrentMode = null;
    modeAtUnwire = undefined;
    onPeerHeld = null;
    onPeerHoldReleased = null;
    onPeerHoldDropped = null;
    sendPeerReceipt = null;
    recordCorrespondent = null;
    publishAvailability = null;
    unsubscribeAvailabilityRefresh = null;
    shutdownSettleHandle = null;
    shuttingDown = false;
    held = [];
    announced = new WeakMap;
    reset() {
        this.held.length = 0;
        this.getCurrentMode = null;
        this.modeAtUnwire = undefined;
        this.onPeerHeld = null;
        this.onPeerHoldReleased = null;
        this.onPeerHoldDropped = null;
        this.shutdownSettleHandle?.();
        this.shutdownSettleHandle = null;
        this.shuttingDown = false;
        this.sendPeerReceipt = null;
        this.recordCorrespondent = null;
        this.publishAvailability = null;
        this.unsubscribeAvailabilityRefresh?.();
        this.unsubscribeAvailabilityRefresh = null;
    }
}
class d {
    outstandingSends = [];
    awaitingTerminal = [];
    reset() {
        this.outstandingSends.length = 0;
        this.awaitingTerminal.length = 0;
    }
}
class l {
    pacer = null;
    reset() {
        this.pacer = null;
    }
}
class a {
    ownUdsHopToken = undefined;
    ownBridgePeerAddressResolver = undefined;
    messageDropped = Oe();
    reset() {
        this.ownUdsHopToken = undefined;
        this.ownBridgePeerAddressResolver = undefined;
        this.messageDropped.clear();
    }
}
class u {
    pending = new Map;
    pendingSandbox = new Map;
    pendingPlanApproval = null;
    clear() {
        this.pending.clear();
        this.pendingSandbox.clear();
        this.pendingPlanApproval = null;
    }
}
class p {
    reportedDroppedEntries = new Set;
    pendingPrunes = new Map;
    ledger = new i;
}
class m {
    updated = Oe();
    locks = Oh();
    leaderTeamName = undefined;
    reset() {
        if (this.leaderTeamName === undefined) {
            return;
        }
        this.leaderTeamName = undefined;
        try {
            this.updated.emit();
        } catch  {}
    }
}
class g {
    inbound = new o;
    receipts = new d;
    outbound = new l;
    ingress = new a;
    swarmPermissions = new u;
    mailbox = new p;
    taskList = new m;
}
const y = new q(()=>new g);
function Vi() {
    return y.of(B().host);
}
export { Vi };
