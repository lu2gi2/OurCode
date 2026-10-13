import { Wu } from "/$bunfs/root/chunk-jc71z2z2.js";
import { FI } from "/$bunfs/root/chunk-a5rabwn2.js";
import { l$ } from "/$bunfs/root/chunk-kasbfbhj.js";
function rte(o, config) {
    if (o.config.scope === config.scope && o.config.pluginSource === config.pluginSource) {
        return o;
    }
    return {
        ...o,
        config
    };
}
const c = (o, mcpInfo)=>({
        ...mcpInfo,
        scope: o.config.scope,
        pluginSource: o.config.pluginSource,
        source: l$(o.name, o.config),
        pluginTelemetry: undefined,
        ...o.config.pluginSource !== undefined && {
            pluginTelemetry: FI(o.config.pluginSource, Wu())
        }
    });
function W6(o, e) {
    let n = e.map((r)=>{
        if (r.mcpInfo === undefined) {
            return r;
        }
        if (r.mcpInfo.scope === o.config.scope && r.mcpInfo.pluginSource === o.config.pluginSource) {
            return r;
        }
        return {
            ...r,
            mcpInfo: c(o, r.mcpInfo)
        };
    });
    if (n.every((r, p)=>r === e[p])) {
        return e;
    }
    return n;
}
export { rte, W6 };
