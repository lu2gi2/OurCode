import { Rxe } from "/$bunfs/root/chunk-qk3m4n8a.js";
function ote(e, n) {
    let p = n.map((o)=>{
        if (o.mcpInfo === undefined || o.mcpInfo.scope === e.config.scope && o.mcpInfo.pluginSource === e.config.pluginSource) {
            return o;
        }
        return {
            ...o,
            mcpInfo: Rxe(e)
        };
    });
    if (p.every((o, s)=>o === n[s])) {
        return n;
    }
    return p;
}
export { ote };
