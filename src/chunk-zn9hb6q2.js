import { Me } from "/$bunfs/root/chunk-b97fvbrv.js";
import { SXo, Gnr, zVt, GVt, o0s, s0s, i0s, PXo } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Xl } from "/$bunfs/root/chunk-mhg15z8n.js";
function g(e, t) {
    let agent = e.subagentType === t.agent.agentType ? t.agent : t.agents.find((o)=>o.agentType === e.subagentType);
    if (agent !== undefined) {
        return {
            agent
        };
    }
    let p = t.agents.map((o)=>o.agentType);
    let s = p.length > 0 ? `available: ${p.join(", ")}` : "none is available";
    return {
        deny: `a hook's subagentType '${e.subagentType}' names no agent this call can dispatch (${s})`
    };
}
const m = (e)=>({
        tool_use_id: e.tool_use_id,
        prompt: e.prompt,
        description: e.description,
        subagentType: e.agent.agentType,
        provider: SXo(e.agent),
        model: e.model,
        parentModel: e.parentModel,
        ...e.parentAgentId !== undefined && {
            parentAgentId: e.parentAgentId
        },
        permissionMode: e.permissionMode,
        background: e.background,
        fork: e.fork,
        ...e.isTeammate === true && {
            isTeammate: true
        },
        ...e.workflow !== undefined && {
            workflow: e.workflow
        },
        name: e.name,
        cwd: e.cwd
    });
const d = (e)=>({
        started: ({ agentId, model, teammateId })=>e.done({
                model,
                agentId,
                ...teammateId !== undefined && {
                    teammateId
                }
            }),
        [Symbol.dispose]: e[Symbol.dispose]
    });
const starting = Object.freeze({
    started: ()=>{},
    [Symbol.dispose]: ()=>{}
});
async function W9n(e) {
    let { agent, agents, signal, origin } = e;
    let s = m(e);
    if (!Xl("agent.spawn")) {
        return {
            spawn: s,
            agent,
            starting
        };
    }
    let o = GVt(i0s);
    let i = await zVt(o, PXo({
        signal,
        origin,
        core: {
            "agent.spawn": Gnr(o)
        }
    }).agent.spawn(s));
    if (!i.arrived) {
        return o0s({
            result: i.answered,
            input: s,
            signal
        });
    }
    let i_arrived = i.arrived;
    s0s({
        input: s,
        spawn: i_arrived
    });
    let a = g(i_arrived, {
        agent,
        agents
    });
    if (a.deny !== undefined) {
        o.failed(new Me(a.deny));
        return a;
    }
    return {
        spawn: i_arrived,
        agent: a.agent,
        starting: d(o)
    };
}
export { W9n };
