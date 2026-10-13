import { Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { Xu } from "/$bunfs/root/chunk-0ycjphb5.js";
import { NSt, a3r, F2e, Ys, n4, qp } from "/$bunfs/root/chunk-kasbfbhj.js";
import { wr, qNe } from "/$bunfs/root/chunk-2atph4yw.js";
import { Zg } from "/$bunfs/root/chunk-nbx3tg29.js";
import { _Ye, jCe, _br } from "/$bunfs/root/chunk-k8dhpbv8.js";
import { PU, GQe, Cyt, aEe, SXn } from "/$bunfs/root/chunk-ggpgtemh.js";
async function RU(r) {
    let n = performance.now();
    let i = false;
    let e;
    let a = aEe();
    let o = false;
    if (SXn()) {
        t("[mcp-policy-cold-start] waiting on remote managed-settings confirmation (managedMcpServers is withheld from the unverified cache)");
        e = performance.now();
        await GQe();
        i = true;
        o = true;
    } else if (!a && !jCe()) ;
    else if (r.hasDynamicMcpConfig || !r.pluginStateReliable || Ee() || await d(r.storageV5)) {
        if (a) {
            t("[mcp-policy-cold-start] waiting on remote managed-settings load");
            e = performance.now();
            await PU();
            i = true;
        }
        o = true;
    } else {
        t("[mcp-policy-cold-start] skipped — no MCP server source visible");
    }
    if (e !== undefined && qNe("mcp_policy_settings_wait_ms") === undefined) {
        let s = performance.now() - e;
        let timed_out = Cyt();
        wr("mcp_policy_settings_wait_ms", s, e);
        J(timed_out ? "warn" : "info", "mcp_policy_settings_wait", {
            waited_ms: Math.round(s),
            timed_out
        });
    }
    _Ye("settings", ()=>{
        if (!i) {
            return "not_awaited";
        }
        if (Cyt()) {
            return "timed_out";
        }
        return "completed";
    }, {
        since: i ? n : undefined
    });
    if (o && jCe()) {
        t("[mcp-policy-cold-start] waiting on the policy-limits verdict (compliance taints feed config ${VAR} expansion)");
        if (await _br() === "timed_out") {
            t("[mcp-policy-cold-start] policy-limits verdict did not land within the cold-start budget; loading MCP configs without it");
        }
    }
}
async function d(storageV5) {
    for (let n of n4){
        if (Object.keys(qp(n, {
            expandVars: false
        }).servers).length > 0) {
            return true;
        }
    }
    if (F2e()) {
        return true;
    }
    try {
        for (let { record } of a3r(NSt())){
            for (let [a, o] of Object.entries(record ?? {})){
                if ((o === true || Array.isArray(o)) && !Zg(a)) {
                    return true;
                }
            }
        }
        let { enabled, errors } = await Ys(storageV5);
        if (errors.length > 0) {
            return true;
        }
        for (let e of enabled){
            if (!e.isBuiltin || e.mcpServers !== undefined && Object.keys(e.mcpServers).length > 0) {
                return true;
            }
        }
    } catch  {
        return true;
    }
    return Xu();
}
export { RU };
