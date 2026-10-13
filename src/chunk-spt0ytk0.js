import { we } from "/$bunfs/root/chunk-ctt36bn8.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { ZBe, e1e, t1e } from "/$bunfs/root/chunk-grthh2xc.js";
import { M, u, De, A } from "/$bunfs/root/chunk-smx21d0k.js";
const r = "anthropic/renderUnderSessionRules";
function uUs() {
    return {
        experimental: {
            [r]: {
                v: 1
            }
        }
    };
}
const x = p(()=>u({
        experimental: u({
            [r]: u({
                v: A(1)
            })
        })
    }));
const l = p(()=>De({
        v: A(1),
        permissionContext: ZBe(),
        offersHandOff: M(),
        classifiesEveryCall: M(),
        grantsApply: M()
    }));
function hIr(i, n) {
    let e = e1e(i) ? undefined : l().safeParse(i).data;
    if (e === undefined || n === undefined) {
        return;
    }
    let { mode, ...rest } = e.permissionContext;
    if (!(mode === "default" || mode === "dontAsk" || mode === "acceptEdits" || mode === "auto" && e.offersHandOff) || Object.values(rest.alwaysAllowRules).some((t)=>t.length > 0) || rest.strippedDangerousRules !== undefined || rest.additionalWorkingDirectories.$map.length > 0 || rest.trustedNetworkDirectories !== undefined) {
        return;
    }
    return {
        offersHandOff: e.offersHandOff,
        classifiesEveryCall: e.classifiesEveryCall,
        toolPermissionContext: {
            ...t1e(e.permissionContext, n, we()),
            ...!e.grantsApply && {
                pollEventDeliveryGuard: true
            }
        }
    };
}
export { uUs, hIr };
