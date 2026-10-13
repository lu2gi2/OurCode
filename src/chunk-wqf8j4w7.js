import { Vn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { d0 } from "/$bunfs/root/chunk-tw5t5h13.js";
import { ZU, kx } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Ws } from "/$bunfs/root/chunk-59xjawk6.js";
import { vp } from "/$bunfs/root/chunk-2r3ctt5w.js";
function f(r, i) {
    if (Object.hasOwn(r, i)) {
        return r[i];
    }
    return Object.values(r).find((n)=>vp(n) && n.identity.resumableAgentId === i);
}
function Xbn(r, i) {
    return new Map([
        ...r
    ].filter(([, n])=>{
        let e = f(i, n);
        if (e === undefined) {
            return false;
        }
        if (!Ws(e.status)) {
            return true;
        }
        return kx(e) && "keepaliveReasons" in e && e.keepaliveReasons !== undefined && [
            ...e.keepaliveReasons
        ].some((s)=>s !== ZU);
    }));
}
const U7e = {
    markTypeInvoked () {},
    registerName () {},
    allocateName (r) {
        return r;
    },
    nameOf () {},
    clearTodos () {},
    setTeammate () {},
    setSendMessagePin () {}
};
function j4o(r, i) {
    return {
        markTypeInvoked (n) {
            i((e)=>{
                if (e.agentTypesInvokedThisSession.has(n)) {
                    return e;
                }
                return {
                    ...e,
                    agentTypesInvokedThisSession: new Set(e.agentTypesInvokedThisSession).add(n)
                };
            });
        },
        registerName (n, e) {
            if (d0(n)) {
                t(`[registerName] refused reserved or agent-id-shaped name "${n}" for ${e}`);
                return;
            }
            i((s)=>{
                if (s.agentNameRegistry.get(n) === e) {
                    return s;
                }
                let agentNameRegistry = new Map(s.agentNameRegistry);
                agentNameRegistry.set(n, e);
                return {
                    ...s,
                    agentNameRegistry
                };
            });
        },
        allocateName (n) {
            let e = u(n);
            let s = r();
            let s_agentNameRegistry = s.agentNameRegistry;
            let g = new Set(Object.values(s.teamContext?.teammates ?? {}).map((o)=>o.name));
            for(let o = 1;; o++){
                let m = o === 1 ? e : `${e}-${o}`;
                if (d0(m) || g.has(m)) {
                    continue;
                }
                let d = s_agentNameRegistry.get(m);
                if (d === undefined || f(s.tasks, d) === undefined) {
                    return m;
                }
            }
        },
        nameOf (n) {
            for (let [e, s] of r().agentNameRegistry){
                if (s === n) {
                    return e;
                }
            }
        },
        clearTodos (n) {
            i((e)=>{
                if (!(n in e.todos)) {
                    return e;
                }
                let { [n]: s, ...rest } = e.todos;
                return {
                    ...e,
                    todos: rest
                };
            });
        },
        setSendMessagePin (n, e) {
            i((s)=>{
                let a = Object.hasOwn(s.sendMessagePins, n) ? s.sendMessagePins[n] : undefined;
                if (Vn(a, e)) {
                    return s;
                }
                return {
                    ...s,
                    sendMessagePins: {
                        ...s.sendMessagePins,
                        [n]: e
                    }
                };
            });
        },
        setTeammate (n, e) {
            if (e !== undefined && d0(e.name)) {
                t(`[setTeammate] refused reserved or agent-id-shaped teammate name "${e.name}" for ${n}`);
                return;
            }
            i((s)=>{
                let s_teamContext = s.teamContext;
                if (!s_teamContext) {
                    return s;
                }
                let g = s_teamContext.teammates?.[n];
                if (e === undefined) {
                    if (!g) {
                        return s;
                    }
                    let { [n]: o, ...rest } = s_teamContext.teammates;
                    return {
                        ...s,
                        teamContext: {
                            ...s_teamContext,
                            teammates: rest
                        }
                    };
                }
                if (g === e) {
                    return s;
                }
                return {
                    ...s,
                    teamContext: {
                        ...s_teamContext,
                        teammates: {
                            ...s_teamContext.teammates,
                            [n]: e
                        }
                    }
                };
            });
        }
    };
}
function u(r) {
    let i = r.replace(/[^A-Za-z0-9_-]+/g, "-").replace(/^-+/, "").slice(0, 64);
    if (i.length > 0) {
        return i;
    }
    return "agent";
}
export { Xbn, U7e, j4o };
