import { sf, jE } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Dg } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { cp, kp, jjn } from "/$bunfs/root/chunk-xb9cceab.js";
import { Au } from "/$bunfs/root/chunk-2r3ctt5w.js";
const g = "claudecode/agentId";
const p = "claudecode/agentType";
const c = "claudecode/isObserver";
const d = 128;
const f = 64;
function g1r({ name, config }) {
    if (name !== cp) {
        return false;
    }
    return kp(config) || config.scope === "dynamic" && "url" in config && typeof config.url === "string" && jjn(config.url);
}
function mgn(r, n) {
    let { agentId, agentContext } = n;
    if (agentId === undefined || !g1r(r)) {
        return {};
    }
    if (jE(agentContext) && agentContext.isMainSession === true && agentContext.agentId === agentId) {
        return {};
    }
    let o = ne(Dg(n.agentType ?? ""), d);
    return {
        [g]: agentId,
        ...o !== "" && {
            [p]: o
        },
        ...u(agentId, n) && {
            [c]: true
        }
    };
}
function u(agentId, { agentContext, taskRegistry }) {
    let t = [
        agentId
    ];
    let o = new Set;
    for(let i = t.pop(); i !== undefined; i = t.pop()){
        if (o.has(i)) {
            continue;
        }
        if (o.size >= f) {
            return true;
        }
        o.add(i);
        let s = taskRegistry.get(i);
        if (s !== undefined && Au(s)) {
            return true;
        }
        if (s !== undefined && "parentAgentId" in s && typeof s.parentAgentId === "string") {
            t.push(s.parentAgentId);
        }
        if (!sf(agentContext)) {
            let a = i === agentContext.agentId ? agentContext.parentAgentId : i === agentId ? agentContext.agentId : undefined;
            if (a !== undefined) {
                t.push(a);
            }
        }
    }
    return false;
}
export { g1r, mgn };
