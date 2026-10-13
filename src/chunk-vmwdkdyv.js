import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { ot, W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { q } from "/$bunfs/root/chunk-ctt36bn8.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Qi } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Kbn } from "/$bunfs/root/chunk-p77dbme5.js";
const n = [
    {
        kind: "ios_app",
        found: (t)=>t.has_ios_app_project
    },
    {
        kind: "android_app",
        found: (t)=>t.has_android_app_project
    }
];
class i {
    #t = 0;
    #o = 0;
    #e = new Map;
    get started() {
        return this.#t > 0;
    }
    start() {
        this.#t++;
        this.#r(false);
    }
    conversationReset() {
        if (this.started) {
            this.#t++;
            this.#r(false);
        }
    }
    directoryChanged() {
        if (!this.started) {
            this.start();
            return;
        }
        this.#r(false);
    }
    turnStarting() {
        let t = this.#t;
        if (!this.started || this.#o === t) {
            return;
        }
        this.#o = t;
        if (n.some(({ kind })=>this.#e.get(kind) !== t)) {
            this.#r(true);
        }
    }
    #r(fresh) {
        let e = this.#t;
        Kbn({
            fresh
        }).then((r)=>{
            if (e !== this.#t || r === null) {
                return;
            }
            if (r.has_ios_app_project === null && this.#e.get("ios_app") !== e) {
                f("dev_intent_detect", "project_unreadable", {
                    kind: b("ios_app"),
                    trigger: b("project_scan")
                });
            }
            for (let { kind, found } of n){
                if (found(r) === true && this.#e.get(kind) !== e) {
                    this.#e.set(kind, e);
                    this.#n(kind);
                }
            }
        });
    }
    #n(kind) {
        try {
            Qi({
                type: "system",
                subtype: "dev_intent",
                kind,
                trigger: "project_scan"
            });
            g("dev_intent_detect", {
                kind: d(kind),
                trigger: b("project_scan")
            });
        } catch (error) {
            c(ot(W(error), "project dev intent send failed"));
            m("dev_intent_detect", "project_send_threw", {
                kind: d(kind),
                trigger: b("project_scan")
            });
        }
    }
}
export const $7e = new q(()=>new i);
