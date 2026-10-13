import { b, d, kn } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { rr } from "/$bunfs/root/chunk-k3tkc302.js";
import { g } from "/$bunfs/root/chunk-04d4ftnx.js";
import { yV } from "/$bunfs/root/chunk-ghreee2m.js";
const k = /^\d{1,12}-[0-9a-f]{1,32}$/;
function Q_t(e) {
    if (rr.test(e)) {
        return kn(e);
    }
    return b("nonconforming");
}
function p(e) {
    if (k.test(e)) {
        return kn(e);
    }
    return b("nonconforming");
}
const h = {
    startedSeen: [],
    completedSeen: [],
    startedPublishes: {},
    invokeT0: null
};
const Z4o = yV("workshopTelemetry", h);
function eYo(e) {
    e.set((t)=>({
            ...t,
            invokeT0: performance.now()
        }));
}
function tYo(e) {
    if (e === undefined || e.invokeT0 === null) {
        return e;
    }
    return {
        ...e,
        invokeT0: null
    };
}
function S(e, t) {
    if (e.startedSeen.includes(t)) {
        return e;
    }
    return {
        ...e,
        startedSeen: [
            ...e.startedSeen,
            t
        ]
    };
}
function f(next, t) {
    if (next.completedSeen.includes(t)) {
        return next;
    }
    return {
        ...next,
        completedSeen: [
            ...next.completedSeen,
            t
        ]
    };
}
function nYo(e, t, l, i, decisions_total, decisions_resolved) {
    g("workshop_turn", {
        artifact_slug: Q_t(t),
        artifact_version: p(l),
        decisions_total,
        decisions_resolved,
        state: d(i)
    });
    if (i !== "started") {
        return;
    }
    let s = true;
    e.set((n)=>{
        s = n.startedSeen.includes(t);
        return S(n, t);
    });
    if (!s) {
        g("workshop_build_started", {
            artifact_slug: Q_t(t)
        });
    }
}
function nVr(e, t, l, i, o, c) {
    let s;
    e.set((prev_1)=>{
        let next_1 = prev_1;
        if (next_1.invokeT0 !== null) {
            next_1 = {
                ...next_1,
                invokeT0: null
            };
        }
        if (i === "started") {
            next_1 = S(next_1, t);
        }
        if (o.n > 0) {
            next_1 = f(next_1, t);
        } else if (i === "started" && !next_1.completedSeen.includes(t)) {
            let m = (next_1.startedPublishes[t] ?? 0) + 1;
            next_1 = {
                ...next_1,
                startedPublishes: {
                    ...next_1.startedPublishes,
                    [t]: m
                }
            };
            if (m >= 2) {
                next_1 = f(next_1, t);
            }
        }
        s = {
            prev: prev_1,
            next: next_1
        };
        return next_1;
    });
    let { prev, next } = s;
    if (prev.invokeT0 !== null && c) {
        g("workshop_first_page", {
            invoke_to_publish_ms: Math.round(performance.now() - prev.invokeT0),
            first_publish_state: d(i)
        });
    }
    if (!prev.startedSeen.includes(t) && next.startedSeen.includes(t)) {
        g("workshop_build_started", {
            artifact_slug: Q_t(t)
        });
    }
    if (!prev.completedSeen.includes(t) && next.completedSeen.includes(t)) {
        let a = o.n > 0 ? "structural" : "post_kickoff_republish";
        g("workshop_build_completed", {
            artifact_slug: Q_t(t),
            artifact_version: p(l),
            source: d(a),
            deliverables_n: o.n,
            deliverables_pr: o.pr,
            deliverables_artifact: o.artifact,
            deliverables_other: o.other
        });
    }
}
export { Q_t, Z4o, eYo, tYo, nYo, nVr };
