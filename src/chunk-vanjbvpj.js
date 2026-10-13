import { K, Lg } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { LXt, $Q, NXt } from "/$bunfs/root/chunk-0g49c63m.js";
function uUr(s, n, a) {
    let e = LXt(s);
    let r = e !== null ? NXt() : null;
    if (r !== null) {
        f("goal_set", r.code, {
            origin: d("restored")
        });
    }
    let t;
    if (e === null || r !== null) {
        n((o)=>{
            t = o.activeGoal;
            if (o.activeGoal === undefined) {
                return o;
            }
            return {
                ...o,
                activeGoal: undefined
            };
        });
        if (t !== undefined) {
            $Q(t, "resume_swap");
        }
        return;
    }
    a.add(K(), "Stop", "", {
        type: "prompt",
        prompt: e
    });
    n((o)=>{
        t = o.activeGoal;
        return {
            ...o,
            activeGoal: {
                condition: e,
                iterations: 0,
                setAt: Date.now(),
                origin: "restored",
                tokensAtStart: Lg()
            }
        };
    });
    if (t !== undefined) {
        $Q(t, "resume_swap");
    }
    i("tengu_goal_restored_on_resume", {
        promptLength: e.length
    });
    i("tengu_stop_hook_added", {
        promptLength: e.length,
        via: b("goal"),
        origin: d("restored")
    });
}
export { uUr };
