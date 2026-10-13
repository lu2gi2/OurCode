import { lt } from "/$bunfs/root/chunk-ctt36bn8.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
function n() {
    return {
        spawned: 0,
        requested: {
            background: 0,
            foreground: 0,
            unset: 0
        },
        started_in_background: 0,
        max_depth: 0,
        spawned_by_subagents: 0,
        completed: 0,
        failed: 0,
        killed: {
            parent: 0,
            user: 0,
            system: 0
        },
        refused: {
            depth_limit: 0,
            concurrency_limit: 0,
            budget: 0
        }
    };
}
class s {
    #e;
    #t;
    constructor(e){
        this.#e = e;
    }
    completed() {
        if (this.#n("completed")) {
            this.#e.completed += 1;
        }
    }
    failed() {
        if (this.#n("failed")) {
            this.#e.failed += 1;
        }
    }
    killed(e) {
        if (this.#n("killed")) {
            this.#e.killed[e ?? "user"] += 1;
        }
    }
    cancelledAfterCompletion() {
        if (this.#t === "completed") {
            this.#e.completed -= 1;
            this.#t = undefined;
        }
        this.killed("user");
    }
    #n(e) {
        if (this.#t !== undefined) {
            return false;
        }
        this.#t = e;
        return true;
    }
}
class r {
    #e = n();
    #t = new Map;
    recordSpawn(e) {
        let t = this.#e;
        t.spawned += 1;
        t.requested[e.runInBackground === undefined ? "unset" : e.runInBackground ? "background" : "foreground"] += 1;
        if (e.runsInBackground) {
            t.started_in_background += 1;
        }
        this.#t.set(e.agentType, (this.#t.get(e.agentType) ?? 0) + 1);
        t.max_depth = Math.max(t.max_depth, e.depth);
        if (e.depth > 1) {
            t.spawned_by_subagents += 1;
        }
        return new s(t);
    }
    recordRefused(e) {
        this.#e.refused[e] += 1;
    }
    snapshot() {
        let e = this.#e;
        return {
            ...e,
            requested: {
                ...e.requested
            },
            killed: {
                ...e.killed
            },
            refused: {
                ...e.refused
            },
            by_type: Object.fromEntries(this.#t)
        };
    }
    reset() {
        Object.assign(this.#e, n());
        this.#t.clear();
    }
}
const Nze = new lt(()=>new r);
function HX(e) {
    if (!e) {
        return;
    }
    try {
        return Nze.of(e).snapshot();
    } catch (error) {
        c(error);
        return;
    }
}
export { Nze, HX };
