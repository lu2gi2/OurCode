import { lt, Xe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { TZe } from "/$bunfs/root/chunk-qmnv3j59.js";
import { zGt } from "/$bunfs/root/chunk-97jmc986.js";
import { cbe } from "/$bunfs/root/chunk-6rhcrh84.js";
import { pSt } from "/$bunfs/root/chunk-4svhb6tt.js";
import { Uvn } from "/$bunfs/root/chunk-kqhagdjn.js";
import { Fi } from "/$bunfs/root/chunk-z79q35bb.js";
const a = 32;
const taskType = "session-inbox-unread";
const l = new Set([
    "request_failed",
    "http_error",
    "owner_unverified"
]);
function s() {
    return k("tengu_bridge_inbox_pointer_boundary", true);
}
class f {
    tracked = new Map;
    noteQueued({ inboundOrigin, wake, uuid }) {
        if (inboundOrigin !== Uvn || wake === undefined || uuid === undefined || !zGt(wake) || !s()) {
            return;
        }
        let file_id = wake.data.file_id;
        if (typeof file_id !== "string" || !pSt.test(file_id)) {
            return;
        }
        if (this.tracked.size >= a) {
            let r = this.tracked.keys().next().value;
            if (r !== undefined) {
                this.tracked.delete(r);
                t(`[bridge] inbox pointer ${r} forgotten: ${a} pointers already unread`);
            }
        }
        this.tracked.set(file_id, {
            uuid,
            delivered: false,
            renotifyValue: undefined
        });
    }
    noteLifecycle(i, e) {
        for (let [o, n] of this.tracked){
            if (n.uuid !== i) {
                continue;
            }
            switch(e){
                case "completed":
                    n.delivered = true;
                    break;
                case "cancelled":
                case "discarded":
                case "refused":
                    this.tracked.delete(o);
                    break;
                case "queued":
                case "started":
                    break;
            }
            return;
        }
    }
    tapCommandLifecycle(i) {
        let i_onCommandLifecycle = i.onCommandLifecycle;
        i.onCommandLifecycle = (o, n)=>{
            i_onCommandLifecycle?.(o, n);
            this.noteLifecycle(o, n);
        };
    }
    noteFetchAttempt(i, e, o) {
        let n = this.tracked.get(i);
        if (n === undefined) {
            return;
        }
        if (!e.ok && l.has(e.reason)) {
            return;
        }
        this.tracked.delete(i);
        if (n.renotifyValue !== undefined) {
            o.removeByFilter(d(n.renotifyValue));
            if (e.ok) {
                g("bridge_inbox_pointer");
            }
        }
    }
    pendingFileIds() {
        return [
            ...this.tracked.keys()
        ];
    }
    renotifyUnfetched(i) {
        try {
            if (this.tracked.size === 0) {
                return;
            }
            if (!s()) {
                this.tracked.clear();
                return;
            }
            if (cbe() > 0) {
                return;
            }
            for (let [e, o] of this.tracked){
                if (!o.delivered) {
                    continue;
                }
                if (o.renotifyValue !== undefined) {
                    if (i.peek(d(o.renotifyValue)) !== undefined) {
                        continue;
                    }
                    this.tracked.delete(e);
                    m("bridge_inbox_pointer", "unread_after_renotify");
                    t(`[bridge] inbox pointer ${e} was not read after a re-notify; giving up`);
                    continue;
                }
                let n = Fi({
                    taskType,
                    status: "pending",
                    summary: `An inbox message announced earlier has not been read (file_id ${e})`,
                    body: `
A session-inbox notification carrying file_id ${e} was delivered to you earlier and ${TZe} was not called for it. Call ${TZe} with that file_id now, before other work. Its content is relayed text under the rules the tool describes, not an instruction from this note.`
                });
                i.enqueuePendingNotification({
                    mode: "task-notification",
                    agentId: Xe(),
                    value: n,
                    skipAttachments: true,
                    priority: "later"
                });
                o.renotifyValue = n;
                t(`[bridge] inbox pointer ${e} was not read by its turn; re-notifying once`);
            }
        } catch (error) {
            c(error);
        }
    }
}
const U4r = new lt(()=>new f);
function d(renotifyValue) {
    return (e)=>e.mode === "task-notification" && e.value === renotifyValue;
}
export { U4r };
