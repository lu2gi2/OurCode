import { K, Lg, Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Es } from "/$bunfs/root/chunk-0ycjphb5.js";
import { hCe } from "/$bunfs/root/chunk-tn496ms6.js";
import { randomUUID } from "crypto";
function HLn(met, e) {
    return {
        type: "goal_status",
        met,
        sentinel: true,
        condition: e
    };
}
function LXt(t) {
    if (!t) {
        return null;
    }
    for(let e = t.length - 1; e >= 0; e--){
        let n = t[e];
        if (n?.type !== "attachment" || n.attachment.type !== "goal_status") {
            continue;
        }
        if (n.attachment.met || n.attachment.failed) {
            return null;
        }
        let o = n.attachment.condition;
        if (typeof o === "string" && o.length > 0) {
            return o;
        }
        return null;
    }
    return null;
}
function $Q(t, e) {
    i("tengu_goal_cleared", {
        reason: d(e),
        iterations: t.iterations,
        durationMs: Date.now() - t.setAt,
        origin: pe(t.origin)
    });
}
const JRt = 4000;
const c = new Set([
    "clear",
    "stop",
    "off",
    "reset",
    "none",
    "cancel"
]);
function vit(t) {
    return c.has(t.toLowerCase());
}
function Ido(t) {
    for(let e = t.length - 1; e >= 0; e--){
        let n = t[e];
        if (n?.type !== "attachment" || n.attachment.type !== "goal_status") {
            continue;
        }
        let o = n.attachment;
        if (!o.met || o.sentinel) {
            continue;
        }
        return {
            condition: o.condition,
            iterations: o.iterations,
            durationMs: o.durationMs,
            tokens: o.tokens
        };
    }
    return null;
}
const DLn = (t)=>`A session-scoped Stop hook is now active with condition: "${t}". Briefly acknowledge the goal, then immediately start (or continue) working toward it \u2014 treat the condition itself as your directive and do not pause to ask the user what to do. The hook will block stopping until the condition holds. It auto-clears once the condition is met \u2014 do not tell the user to run \`/goal clear\` after success; that's only for clearing a goal early.`;
function ANe(t, e) {
    let n = [];
    for (let o of t.get(e, "Stop").get("Stop") ?? []){
        if (o.matcher !== "" || o.skillRoot !== undefined) {
            continue;
        }
        for (let s of o.hooks){
            if (s.type === "prompt") {
                n.push(s);
            }
        }
    }
    return n;
}
const m = "/goal is only available in trusted workspaces. Restart, accept the trust dialog, and try again.";
const S = "/goal can't run while hooks are restricted (disableAllHooks or allowManagedHooksOnly is set in settings or by policy).";
function NXt() {
    if (hCe()) {
        return {
            message: S,
            code: "hooks_gate"
        };
    }
    if (!Ee() && !Es()) {
        return {
            message: m,
            code: "trust_gate"
        };
    }
    return null;
}
function zgs(t, e, origin) {
    t((o)=>({
            ...o,
            queuedGoalOrigin: {
                condition: e,
                origin
            }
        }));
}
function h(t, e) {
    let queuedGoalOrigin = e.getAppState().queuedGoalOrigin;
    if (queuedGoalOrigin === undefined || queuedGoalOrigin.condition !== t) {
        return "user";
    }
    e.setAppState((o)=>({
            ...o,
            queuedGoalOrigin: undefined
        }));
    return queuedGoalOrigin.origin;
}
function Eit(t, e, n) {
    let origin = n ?? h(t, e);
    let s = NXt();
    if (s !== null) {
        f("goal_set", s.code, {
            origin: d(origin)
        });
        return s.message;
    }
    let r = K();
    let activeGoal = e.getAppState().activeGoal;
    if (activeGoal !== undefined) {
        $Q(activeGoal, "superseded");
    }
    for (let a of ANe(e.sessionHooksRegistry, r)){
        e.sessionHooksRegistry.remove(r, "Stop", a);
    }
    e.sessionHooksRegistry.add(r, "Stop", "", {
        type: "prompt",
        prompt: t
    });
    let activeGoal_1 = {
        condition: t,
        iterations: 0,
        setAt: Date.now(),
        origin,
        tokensAtStart: Lg()
    };
    e.setAppState((a)=>({
            ...a,
            activeGoal: activeGoal_1
        }));
    e.applyMessageOp({
        type: "append",
        messages: [
            kyr(false, t)
        ]
    });
    i("tengu_stop_hook_added", {
        promptLength: t.length,
        via: b("goal"),
        origin: d(origin)
    });
    g("goal_set");
    return null;
}
function kit(t) {
    let e = K();
    let n = ANe(t.sessionHooksRegistry, e);
    if (n.length === 0) {
        return null;
    }
    let prompt = n[0].prompt;
    for (let r of n){
        t.sessionHooksRegistry.remove(e, "Stop", r);
    }
    let activeGoal = t.getAppState().activeGoal;
    if (activeGoal !== undefined) {
        $Q(activeGoal, "user_clear");
    }
    t.setAppState((r)=>{
        if (r.activeGoal === undefined) {
            return r;
        }
        return {
            ...r,
            activeGoal: undefined
        };
    });
    t.applyMessageOp({
        type: "append",
        messages: [
            kyr(true, prompt)
        ]
    });
    i("tengu_stop_hook_removed", {
        via: b("goal")
    });
    return prompt;
}
function kyr(t, e) {
    return {
        type: "attachment",
        uuid: randomUUID(),
        timestamp: new Date().toISOString(),
        attachment: HLn(t, e)
    };
}
export { HLn, LXt, $Q, JRt, vit, Ido, DLn, ANe, NXt, zgs, Eit, kit, kyr };
