import { $l } from "/$bunfs/root/chunk-wrn3nvp5.js";
function rYo(t) {
    if ($l()) {
        return;
    }
    return t.standaloneAgentContext?.name;
}
function Uze(t, n) {
    let t_standaloneAgentContext = t.standaloneAgentContext;
    if (!Object.keys(n).some((o)=>t_standaloneAgentContext?.[o] !== n[o])) {
        return t;
    }
    return {
        ...t,
        standaloneAgentContext: {
            ...t_standaloneAgentContext,
            name: t_standaloneAgentContext?.name ?? "",
            ...n
        }
    };
}
export { rYo, Uze };
