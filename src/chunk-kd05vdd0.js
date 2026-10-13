import { ei } from "/$bunfs/root/chunk-bd805sh6.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
function g(e) {
    if (typeof e === "string") {
        return ei(e, {
            maxCodeUnits: 512
        });
    }
}
function f(e) {
    return ei(e, {
        maxCodeUnits: 64
    });
}
const S = 32;
const R = 300000;
function TLt(e, t) {
    let o = e.data?.timestamp;
    if (typeof o !== "string") {
        return false;
    }
    let n = Date.parse(o);
    return !Number.isNaN(n) && t - n > R;
}
const b = [
    "provision",
    "clone",
    "setup_script",
    "start_cc"
];
function zHo(e) {
    return b.includes(e);
}
const x = 60000;
const _ = 5000;
function y(e, now, o) {
    let n = e.data?.timestamp;
    if (typeof n !== "string") {
        return false;
    }
    let p = Date.parse(n);
    return Number.isFinite(p) && Math.abs(now - p) <= x && p >= o - _;
}
function Nwe(startedAt) {
    return {
        steps: b.map((id)=>({
                id,
                status: "pending"
            })),
        sessionMode: null,
        startedAt,
        hasStructuredSteps: false,
        terminal: false,
        dismissed: false,
        sawLiveFrame: false,
        hadLiveCycle: false,
        queuedCount: 0
    };
}
function kft(e) {
    let t = e.data?.extra;
    return {
        stepId: typeof t?.step_id === "string" ? f(t.step_id) : null,
        stepStatus: typeof t?.step_status === "string" ? t.step_status : null
    };
}
function aln(e, t, o, now, p) {
    let extra = t.data?.extra;
    let { stepId, stepStatus } = kft(t);
    let r = e.terminal && stepId !== null && stepStatus !== null ? {
        ...Nwe(now),
        dismissed: e.hadLiveCycle,
        hadLiveCycle: e.hadLiveCycle
    } : e;
    if (stepId !== null && stepStatus !== null && !r.sawLiveFrame && y(t, now, p)) {
        r = {
            ...r,
            sawLiveFrame: true
        };
    }
    if (typeof extra?.session_mode === "string") {
        let sessionMode = extra.session_mode;
        if ((sessionMode === "new" || sessionMode === "resume" || sessionMode === "resume-cached" || sessionMode === "setup-only") && r.sessionMode !== sessionMode) {
            r = {
                ...r,
                sessionMode
            };
        }
    }
    if (typeof extra?.expected_steps === "string") {
        let s = D(extra.expected_steps.split(",").map((i)=>f(i)).filter((i)=>i !== "")).slice(0, S);
        if (s.length > 0) {
            let i = new Map(r.steps.map((u)=>[
                    u.id,
                    u
                ]));
            let l = s.map((u)=>i.get(u) ?? {
                    id: u,
                    status: "pending"
                });
            let m = r.steps.filter((u)=>!s.includes(u.id) && u.status !== "pending");
            r = {
                ...r,
                steps: [
                    ...m,
                    ...l
                ]
            };
        }
    }
    if (stepId !== null && stepStatus !== null) {
        r = A(r, {
            stepId,
            stepStatus,
            extra,
            line: o,
            now
        });
    } else if (o !== "") {
        let s = r.steps.findIndex((i)=>i.status === "running");
        if (s !== -1 && r.steps[s].detail !== o) {
            let steps = r.steps.slice();
            steps[s] = {
                ...steps[s],
                detail: o
            };
            r = {
                ...r,
                steps
            };
        }
    }
    return r;
}
function A(e, { stepId, stepStatus, extra, line, now }) {
    let c = f(stepId);
    let e_steps = e.steps;
    let r = e_steps.findIndex((u)=>u.id === c);
    if (r === -1) {
        if (e_steps.length >= S) {
            return e;
        }
        let label = g(extra?.step_label) || line;
        e_steps = [
            ...e_steps,
            {
                id: c,
                label,
                status: "pending"
            }
        ];
        r = e_steps.length - 1;
    }
    let s = e_steps[r];
    let detail = g(extra?.step_detail);
    let l = null;
    switch(stepStatus){
        case "started":
            if (s.status === "pending") {
                l = {
                    ...s,
                    status: "running",
                    startedAt: now,
                    detail
                };
            } else if (detail !== undefined && s.detail !== detail) {
                l = {
                    ...s,
                    detail
                };
            }
            break;
        case "completed":
            if (s.status !== "completed") {
                l = {
                    ...s,
                    status: "completed",
                    completedAt: now,
                    detail: undefined
                };
            }
            break;
        case "failed":
            if (s.status !== "failed" || s.error !== line) {
                l = {
                    ...s,
                    status: "failed",
                    completedAt: now,
                    error: line || undefined
                };
            }
            break;
        case "skipped":
            if (s.status === "pending" || s.status === "running") {
                l = {
                    ...s,
                    status: "skipped",
                    detail: undefined
                };
            }
            break;
        default:
            break;
    }
    if (l !== null) {
        e_steps = e_steps === e.steps ? e.steps.slice() : e_steps;
        e_steps[r] = l;
    }
    if (e_steps === e.steps) {
        return e;
    }
    let m = {
        ...e,
        steps: e_steps,
        hasStructuredSteps: true
    };
    if (c === "start_cc" && stepStatus === "completed") {
        m = QOr(m, now);
    }
    return m;
}
function QOr(e, completedAt) {
    if (e.terminal) {
        return e;
    }
    let steps = e.steps.map((n)=>{
        if (n.status === "pending") {
            return {
                ...n,
                status: "skipped"
            };
        }
        if (n.status === "running") {
            return {
                ...n,
                status: "completed",
                completedAt
            };
        }
        return n;
    });
    return {
        ...e,
        steps,
        terminal: true,
        completedAt,
        hadLiveCycle: e.hadLiveCycle || e.sawLiveFrame
    };
}
function QPe(e, t) {
    let o = t === "resume" || t === "resume-cached";
    let n = e.status === "completed";
    switch(e.id){
        case "provision":
            if (o) {
                if (n) {
                    return "Resumed your cloud container";
                }
                return "Resuming your cloud container";
            }
            if (n) {
                return "Set up a cloud container";
            }
            return "Setting up a cloud container";
        case "clone":
            if (o) {
                if (n) {
                    return "Refreshed repository";
                }
                return "Refreshing repository";
            }
            if (n) {
                return "Cloned repository";
            }
            return "Cloning repository";
        case "setup_script":
            if (n) {
                return "Ran setup script";
            }
            return "Running setup script";
        case "start_cc":
            if (n) {
                return "Started Claude Code";
            }
            return "Starting Claude Code";
        default:
            return e.label || e.id;
    }
}
function ALt(e) {
    if (e === "resume" || e === "resume-cached") {
        return "Resuming remote session";
    }
    return "Setting up remote session";
}
function lln(e) {
    let o = e.sessionMode === "resume" || e.sessionMode === "resume-cached" ? "resumed" : "ready";
    let n = (e.completedAt ?? e.startedAt) - e.startedAt;
    return `Remote session ${o} in ${M(n)}`;
}
function P9e(e, t) {
    if (e.startedAt === undefined) {
        return "";
    }
    if (e.status === "completed") {
        if (e.completedAt === undefined) {
            return "";
        }
        return ` (${M(e.completedAt - e.startedAt)})`;
    }
    let o = Math.max(0, t - e.startedAt);
    if (e.status === "running" && o >= 5000) {
        return ` (${Math.round(o / 1000)}s)`;
    }
    return "";
}
function M(e) {
    if (e < 10000) {
        return `${(Math.max(e, 100) / 1000).toFixed(1)}s`;
    }
    let t = Math.round(e / 1000);
    if (t < 60) {
        return `${t}s`;
    }
    return `${Math.floor(t / 60)}m ${t % 60}s`;
}
export { TLt, zHo, Nwe, kft, aln, QOr, QPe, ALt, lln, P9e };
