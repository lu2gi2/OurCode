import { K } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Oc } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { UL, $ce } from "/$bunfs/root/chunk-0xbdwcqr.js";
import { Sc } from "/$bunfs/root/chunk-18a8x2hz.js";
import { nm, t3t } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { U_, uLe } from "/$bunfs/root/chunk-gc4z3rgw.js";
import { Vu } from "/$bunfs/root/chunk-y9c4grt0.js";
import { L4t } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Uze } from "/$bunfs/root/chunk-n1mbcqx4.js";
const c = [
    "default",
    "reset",
    "none",
    "gray",
    "grey"
];
async function Djs(n, e, o) {
    n(await S7n(o, e), {
        display: "system"
    });
    return null;
}
async function S7n(n, e) {
    if (Oc()) {
        return "Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";
    }
    let o = n?.trim() ?? "";
    let t = o === "" ? U_[Math.floor(Math.random() * U_.length)] : o.toLowerCase();
    let r = c.includes(t);
    if (!r && !U_.includes(t)) {
        let s = U_.join(", ");
        return `Invalid color "${t}". Available colors: ${s}, default`;
    }
    let d = K();
    let m = Vu();
    let i = r ? "default" : t;
    let l = r ? undefined : t;
    await L4t(d, i, m, e.storageV5);
    e.setAppState((s)=>Uze(s, {
            color: l
        }));
    let a = e.getAppState();
    let g = a.agent ? a.agentDefinitions.activeAgents.find((s)=>s.agentType === a.agent) : undefined;
    t3t(nm(), uLe({
        userOverride: l,
        agentDefinitionColor: g?.color
    }), e.storageV5);
    p(i, e.credentials);
    if (r) {
        return "Session color reset to default";
    }
    return `Session color set to: ${t}`;
}
function p(n, credentials) {
    let o = Sc()?.bridgeSessionId;
    if (!o) {
        return;
    }
    let t = UL();
    import("/$bunfs/root/chunk-sg5zsxsf.js").then(({ updateBridgeSessionColorTag })=>updateBridgeSessionColorTag(o, n, U_, {
            baseUrl: $ce(),
            getAccessToken: t ? ()=>t : undefined,
            credentials
        }).catch(()=>{}));
}
export { Djs, S7n };
