import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { U$, SQ, VKe, S_e, B$, aDn } from "/$bunfs/root/chunk-ypkrahyx.js";
async function qLt(f, r) {
    let [o, s] = await Promise.allSettled([
        B$(undefined, f, r),
        aDn(undefined, r)
    ]);
    let environmentsError = o.status === "rejected" ? l(o.reason) : null;
    let d = o.status === "fulfilled" ? o.value : [];
    let a = s.status === "fulfilled" ? s.value : [];
    let availableTargets = [
        ...d,
        ...a
    ];
    let e = S_e();
    let ignoredUntrustedPool = e.ignoredUntrustedPool ?? null;
    if (e.id !== undefined && SQ(e.id) && !availableTargets.some((n)=>U$(n) === e.id)) {
        availableTargets.push({
            kind: "self_hosted_pool",
            pool_id: e.id,
            name: e.id,
            created_at: "",
            alive_runner_count: 0
        });
    }
    if (availableTargets.length === 0) {
        return {
            availableTargets: [],
            selectedTarget: null,
            selectedTargetSource: null,
            environmentsError,
            ignoredUntrustedPool
        };
    }
    let selectedTarget = VKe(d, (n)=>n.kind !== "bridge") ?? a[0] ?? availableTargets[0];
    let selectedTargetSource = null;
    if (e.id !== undefined) {
        let n = availableTargets.find((m)=>U$(m) === e.id);
        if (n) {
            selectedTarget = n;
            selectedTargetSource = e.source ?? null;
        }
    }
    return {
        availableTargets,
        selectedTarget,
        selectedTargetSource,
        environmentsError,
        ignoredUntrustedPool
    };
}
export { qLt };
