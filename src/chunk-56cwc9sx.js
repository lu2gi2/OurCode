import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { l9o, c9o } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Zo } from "/$bunfs/root/chunk-v56yyhmh.js";
import { _u } from "/$bunfs/root/chunk-smx21d0k.js";
const Wee = Zo({
    kind: "mcp_url_elicitation",
    payload: p(()=>_u((e)=>typeof e === "object" && e !== null && "serverName" in e && "params" in e)),
    result: p(()=>_u((e)=>typeof e === "object" && e !== null)),
    default: {
        action: "cancel"
    }
});
function cme() {
    if (c9o()) {
        return;
    }
    let e = false;
    let t;
    l9o(()=>{
        if (!e) {
            e = true;
            t = k("tengu_mcp_discovery_cache_enable", null) ?? undefined;
        }
        return t;
    });
}
export { Wee, cme };
