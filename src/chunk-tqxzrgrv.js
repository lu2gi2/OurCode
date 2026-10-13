import { bNe } from "/$bunfs/root/chunk-4r6b8efh.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Be, Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
import { o, E, M, u, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
const d = 2147483647;
const hLr = 2;
const c = 64;
const y = /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/;
const l = p(()=>E().int().min(0).max(d));
const S = p(()=>u({
        side: U([
            "device",
            "cloud"
        ]),
        generation: l(),
        tree: o().regex(y).nullable(),
        appliedGeneration: l(),
        mayHaveUnuploadedChanges: M(),
        shipping: l().nullable(),
        appliesOtherSide: M(),
        instanceId: o().regex(bNe),
        sequence: E().int().min(0).max(d)
    }));
const m = [
    "shipped",
    "shipping",
    "unchanged",
    "deferred",
    "kept_here",
    "failed",
    "not_running"
];
const f = (e)=>o().max(e).regex(/^[a-z0-9_]+$/);
const s = p(()=>f(c));
const h = p(()=>u({
        v: A(hLr),
        frame: S(),
        outcome: u({
            kind: U(m),
            reason: s().optional()
        }),
        ask_id: o().regex(bNe).optional()
    }));
function d$o(e) {
    let n = h().safeParse(e);
    if (!n.success) {
        return null;
    }
    let { v, frame, outcome, ask_id } = n.data;
    if (frame.side !== "device") {
        return null;
    }
    return {
        v,
        frame,
        outcome: {
            kind: outcome.kind,
            ...outcome.reason !== undefined && {
                reason: outcome.reason
            }
        },
        ...ask_id !== undefined && {
            askId: ask_id
        }
    };
}
function u$o(e) {
    let n = s().safeParse(e.outcome.reason);
    return {
        v: e.v,
        frame: e.frame,
        outcome: {
            kind: e.outcome.kind,
            ...n.success && {
                reason: n.data
            }
        },
        ...e.askId !== undefined && {
            ask_id: e.askId
        }
    };
}
const g = {
    frame: null,
    heardAt: null,
    stale: true
};
function pFt() {
    let e = new Map;
    let n = (r)=>`${r.source}:${r.name}`;
    let of = (r)=>{
        let a = e.get(n(r));
        if (a !== undefined && a.servingEpoch === r.description?.epoch) {
            return a.value;
        }
    };
    return {
        of,
        file (r, a) {
            let servingEpoch = r.description?.epoch;
            if (servingEpoch !== undefined) {
                e.set(n(r), {
                    servingEpoch,
                    value: a(of(r))
                });
            }
        }
    };
}
function p$o() {
    let e = pFt();
    let era = 0;
    return {
        peer (t) {
            let r = e.of(t);
            if (r === undefined) {
                return g;
            }
            return {
                frame: r.frame,
                heardAt: r.heardAt,
                stale: r.era < era
            };
        },
        heard (t, frame, heardAt) {
            e.file(t, (i)=>{
                if (i === undefined || i.frame.instanceId !== frame.instanceId || frame.sequence > i.frame.sequence) {
                    return {
                        frame,
                        heardAt,
                        era
                    };
                }
                return i;
            });
        },
        invalidateAll () {
            era += 1;
        }
    };
}
const _ = /^(bash|powershell|bash\+powershell)(?::(core|desktop))?$/;
function l$o(e) {
    let n = [
        ...e.bash ? [
            "bash"
        ] : [],
        ...e.powershell ? [
            "powershell"
        ] : []
    ];
    if (n.length === 0) {
        return;
    }
    let t = e.powershell?.edition;
    return `${n.join("+")}${t === undefined ? "" : `:${t}`}`;
}
function dun(e) {
    let n = e === undefined ? null : _.exec(e);
    if (n === null) {
        return;
    }
    let edition = n[2];
    if (n[1] === "bash") {
        if (edition === undefined) {
            return {
                bash: true,
                powershell: undefined
            };
        }
        return undefined;
    }
    return {
        bash: n[1] === "bash+powershell",
        powershell: {
            edition
        }
    };
}
function c$o(e, n) {
    return {
        bash: e.includes(Be),
        powershell: e.includes(Ct) ? {
            edition: n ?? undefined
        } : undefined
    };
}
const K9 = 86400000;
export { l$o, dun, c$o, K9, hLr, d$o, u$o, pFt, p$o };
