import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { yet } from "/$bunfs/root/chunk-kasbfbhj.js";
import { o, oe, u, ue, U } from "/$bunfs/root/chunk-smx21d0k.js";
const r = p(()=>u({
        behavior: U([
            "allow",
            "deny"
        ]),
        updatedInput: ue(o(), oe()).optional().transform((e)=>{
            if (e && Object.keys(e).length === 0) {
                return undefined;
            }
            return e;
        }),
        updatedPermissions: yet("refused", "bridge client"),
        message: o().optional().catch(undefined),
        toolName: o().optional().catch(undefined)
    }));
function Tqo(e) {
    let s = r().safeParse(e);
    if (!s.success) {
        t(`Malformed bridge permission response ignored: ${s.error.issues[0]?.message ?? "unknown"}`, {
            level: "warn"
        });
        m("permission_bridge_relay", "permission_response_malformed");
        return;
    }
    if (typeof e === "object" && e !== null && e.updatedPermissions !== undefined && s.data.updatedPermissions === undefined) {
        return {
            ...s.data,
            updatedPermissionsDropped: true
        };
    }
    return s.data;
}
function cze(e, s, n) {
    if (typeof e !== "string") {
        return false;
    }
    if (!g7e(e, s)) {
        g("bridge_permission_toolname_check");
        return false;
    }
    t(`Ignoring can_use_tool control_response for request_id=${n}: toolName '${e}' does not match pending '${s}'`, {
        level: "warn"
    });
    m("bridge_permission_toolname_check", "toolname_mismatch");
    return true;
}
function g7e(e, s) {
    return typeof e === "string" && e !== s;
}
function mK(e) {
    return (e.split("__").pop() || e).replace(/_/g, " ").replace(/\b\w/g, (n)=>n.toUpperCase());
}
export { Tqo, cze, g7e, mK };
