import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { o, u, Ue, A } from "/$bunfs/root/chunk-smx21d0k.js";
const r = p(()=>Ue([
        u({
            v: A(1),
            state: o()
        }),
        u({
            v: A(2),
            engine: A("bridge")
        })
    ]));
function LMo(e, n) {
    if (e === undefined || e === null) {
        if (typeof n === "object" && n !== null) {
            return "none";
        }
        return "unstated";
    }
    let t = r().safeParse(e);
    if (!t.success) {
        return "unreadable";
    }
    if (t.data.v === 2) {
        return "bridge";
    }
    switch(t.data.state){
        case "connected":
        case "requested":
        case "detached":
            return t.data.state;
        default:
            return "other_state";
    }
}
function sfe(e) {
    return e === "none" || e === "bridge" || e === "this_helper";
}
export { LMo, sfe };
