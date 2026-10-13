import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Zo } from "/$bunfs/root/chunk-v56yyhmh.js";
import { U, _u } from "/$bunfs/root/chunk-smx21d0k.js";
const zee = Zo({
    kind: "mcp_elicitation",
    payload: p(()=>_u((t)=>typeof t === "object" && t !== null && "serverName" in t && "params" in t)),
    result: p(()=>_u((t)=>typeof t === "object" && t !== null)),
    default: {
        action: "cancel"
    },
    holdsTop: true
});
const Hie = Zo({
    kind: "mcp_elicitation_waiting",
    payload: p(()=>_u((t)=>typeof t === "object" && t !== null && "serverName" in t && "params" in t)),
    result: p(()=>U([
            "dismiss",
            "retry",
            "cancel",
            "cancelled"
        ])),
    default: "cancelled"
});
function _1r(t) {
    return t === zee.kind || t === Hie.kind;
}
export { zee, Hie, _1r };
