import { Nb, XT } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Zie } from "/$bunfs/root/chunk-8qgm3a5n.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
function hjr(t) {
    let r = t[0];
    if (!r) {
        return null;
    }
    let t_length = t.length;
    if (t.every((n)=>n.type === r.type)) {
        switch(r.type){
            case "local_bash":
                {
                    let n = F(t, (s)=>s.type === "local_bash" && s.kind === "monitor");
                    let o = t_length - n;
                    let a = [];
                    if (o > 0) {
                        a.push(o === 1 ? "1 shell" : `${o} shells`);
                    }
                    if (n > 0) {
                        a.push(n === 1 ? "1 monitor" : `${n} monitors`);
                    }
                    return a.join(", ");
                }
            case "in_process_teammate":
                {
                    let n = new Set(t.map((o)=>{
                        if (o.type === "in_process_teammate") {
                            return o.identity.teamName;
                        }
                        return "";
                    })).size;
                    if (n === 1) {
                        return "1 team";
                    }
                    return `${n} teams`;
                }
            case "local_agent":
                if (t_length === 1) {
                    return "1 local agent";
                }
                return `${t_length} local agents`;
            case "remote_agent":
                {
                    if (t_length === 1 && r.isUltraplan) {
                        switch(r.ultraplanPhase){
                            case "plan_ready":
                                return `${XT} ultraplan ready`;
                            case "needs_input":
                                return `${Nb} ultraplan needs your input`;
                            default:
                                return `${Nb} ultraplan`;
                        }
                    }
                    if (t.every((n)=>n.type === "remote_agent" && n.remoteTaskType === "remote-workflow")) {
                        if (t_length === 1) {
                            return `${Nb} 1 remote dynamic workflow`;
                        }
                        return `${Nb} ${t_length} remote dynamic workflows`;
                    }
                    if (t_length === 1) {
                        return `${Nb} 1 cloud session`;
                    }
                    return `${Nb} ${t_length} cloud sessions`;
                }
            case "local_workflow":
                if (t_length === 1) {
                    return "1 background dynamic workflow";
                }
                return `${t_length} background dynamic workflows`;
            case "monitor_mcp":
            case "monitor_ws":
                {
                    if (t.every(Zie)) {
                        if (t_length === 1) {
                            return "1 Artifact comment monitor";
                        }
                        return `${t_length} Artifact comment monitors`;
                    }
                    if (t_length === 1) {
                        return "1 monitor";
                    }
                    return `${t_length} monitors`;
                }
            case "mcp_task":
                if (t_length === 1) {
                    return "1 MCP task";
                }
                return `${t_length} MCP tasks`;
            case "dream":
                return "dreaming";
            case "auto_mode_scan":
                return "auto-mode scan";
            case "local_memory_import":
                if (r.windowsPlanned > 0) {
                    return `memory import ${r.windowsDone}/${r.windowsPlanned}`;
                }
                return "memory import";
            default:
        }
    }
    return i(t_length);
}
function hyt(t, r) {
    if (r === 0) {
        return hjr(t);
    }
    return i(t.length + r);
}
function i(t) {
    return `${t} background ${t === 1 ? "task" : "tasks"}`;
}
function yjr(t) {
    if (t.length !== 1) {
        return false;
    }
    let r = t[0];
    return r.type === "remote_agent" && r.isUltraplan === true && r.ultraplanPhase !== undefined;
}
export { hjr, hyt, yjr };
