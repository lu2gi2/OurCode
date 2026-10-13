import { K, Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { g } from "/$bunfs/root/chunk-04d4ftnx.js";
import { We, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { H_s, D_s, L_s, N_s, Zpo, $_s, b$n, F_s, U_s, B_s, nfo, Q_s, Z_s, rfo, Tat, ebs } from "/$bunfs/root/chunk-gr4a0fky.js";
import { alr, xe, zt } from "/$bunfs/root/chunk-kasbfbhj.js";
const C = "tengu_lantern_wick_release";
const x = "tengu_lantern_wick_braid";
const I = "tengu_lantern_wick_braid_text";
const w = "tengu_lantern_wick_braid_release";
const y = "tengu_lantern_wick_text_by_model";
const L = "tengu_lantern_wick_release_by_model";
function P(t, n, model) {
    return qGr(t, model) ?? k(n, "");
}
function qGr(t, n) {
    let e = k(t, {});
    if (typeof e !== "object" || e === null) {
        return;
    }
    let u = e;
    return [
        n,
        We(n),
        "default"
    ].map((a)=>u[a]).find((a)=>typeof a === "string");
}
function S(t) {
    let n = typeof t === "string" ? t.trim() : "";
    if (n) {
        return `[${n}]`;
    }
    return "";
}
function _(t) {
    for(let n = t.length - 1; n >= 0; n--){
        let e = t[n];
        if (e?.type === "user" && e.usageLimitNote !== undefined) {
            return e.usageLimitNote;
        }
    }
}
function* e4o(t, { resumeActive, isMainLoop, querySource, depth, model, toolUseContext, now, uuid }) {
    let { agentContext } = toolUseContext;
    let W = !isMainLoop && querySource.startsWith("agent:") && agentContext.agentType !== "teammate" && !(agentContext.agentType === "subagent" && agentContext.workflowRunId);
    if (resumeActive || !(isMainLoop || W)) {
        return t;
    }
    let o = [];
    try {
        let s = isMainLoop && depth === 0 && alr(t);
        let d = s && rfo();
        if (isMainLoop && depth === 0 && !d) {
            nfo();
        }
        let R = false;
        let E = false;
        if (isMainLoop && (depth > 0 || d)) {
            E = Q_s();
            if (d && !E) {
                let r = _(t);
                if (r !== "wrap_up" && r !== "near_limit") {
                    nfo();
                }
            }
        }
        if (isMainLoop ? E : rfo() && k(x, false) === true && _(t) !== "wrap_up") {
            let r = (isMainLoop ? null : Zpo(k(I, ""))) ?? Zpo(P(y, N_s, model));
            let i = r !== null ? "custom" : L_s(k(D_s, "off"));
            if (i !== "off") {
                o.push(xe({
                    content: r ?? (i === "next-steps" ? $_s : H_s),
                    isMeta: true,
                    turnCompanion: true,
                    usageLimitNote: "wrap_up",
                    now,
                    uuidFn: uuid
                }));
                g(isMainLoop ? "usage_limit_grace_wrapup" : "usage_limit_grace_wrapup_subagent", {
                    next_steps: i === "next-steps",
                    custom: i === "custom"
                });
                R = true;
                if (isMainLoop) {
                    Z_s();
                }
            }
        }
        let G = !isMainLoop || s ? Tat() : null;
        let T = G !== null && G.extraUsageStatus === undefined;
        let U;
        if (isMainLoop) {
            let r = depth === 0 ? _(t) : undefined;
            U = !T && (r === "wrap_up" || r === "near_limit");
        } else {
            U = !T && _(t) === "wrap_up" && k(x, false) === true;
        }
        if (U) {
            let content = (isMainLoop ? "" : S(k(w, ""))) || S(P(L, C, model));
            if (content) {
                o.push(xe({
                    content,
                    isMeta: true,
                    turnCompanion: true,
                    usageLimitNote: "release",
                    now,
                    uuidFn: uuid
                }));
                g(isMainLoop ? "usage_limit_grace_release" : "usage_limit_grace_release_subagent");
            }
        }
        if (isMainLoop && depth > 0 && ebs() && k(b$n, false)) {
            o.push(zt(U_s, B_s));
            if (!R) {
                o.push(xe({
                    content: F_s,
                    isMeta: true,
                    turnCompanion: true,
                    usageLimitNote: "near_limit",
                    now,
                    uuidFn: uuid
                }));
            }
            g("usage_limit_near_wrapup");
            if (!Ee()) {
                import("/$bunfs/root/chunk-2ny1jtpy.js").then(({ performRateLimitCheckpoint })=>performRateLimitCheckpoint({
                        todos: toolUseContext.getAppState().todos[toolUseContext.agentId ?? K()] ?? [],
                        trigger: "near_limit"
                    })).catch(()=>{});
            }
        }
    } catch (error) {
        c(error);
    }
    let A = [];
    for (let s of o){
        yield s;
        if (s.type === "user") {
            A.push(s);
        }
    }
    if (A.length === 0) {
        return t;
    }
    return [
        ...t,
        ...A
    ];
}
export { qGr, e4o };
