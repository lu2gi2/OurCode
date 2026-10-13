import { __ } from "/$bunfs/root/chunk-jynzk4xv.js";
import { Af, Ic, It, vb, YI } from "/$bunfs/root/chunk-4r6b8efh.js";
import { Zi, co, Jr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ht, Xt, Be, Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
import { yt } from "/$bunfs/root/chunk-f41czxrs.js";
import { jfs } from "/$bunfs/root/chunk-pkje2p8h.js";
import { ktr, Mte, _I, bI, Nkn, ele, qir, zXr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { aSr, Qh, CSs } from "/$bunfs/root/chunk-347xejxn.js";
import { kM } from "/$bunfs/root/chunk-1k3a7x55.js";
import { J0 } from "/$bunfs/root/chunk-sfjcyk7w.js";
import { Or } from "/$bunfs/root/chunk-b7w13qrv.js";
import { rt } from "/$bunfs/root/chunk-xx1j2680.js";
const c = new Set([
    Be,
    rt,
    ht,
    Xt,
    Jr,
    co,
    Zi,
    Ct
]);
const kMo = new Set([
    __
]);
const KPe = ktr;
function u9e(e) {
    return `[serve-mode] Stripped client-supplied privilege field(s): ${e.join(", ")}`;
}
function E(e, s) {
    if (e.properties === undefined || s.length === 0) {
        return e;
    }
    let properties = {
        ...e.properties
    };
    for (let n of s){
        delete properties[n];
    }
    let required = Array.isArray(e.required) ? e.required.filter((n)=>!s.includes(n)) : e.required;
    return {
        ...e,
        properties,
        required
    };
}
function N0t(skipSimpleModeFilter, { skipSearchToolRestore = false } = {}) {
    let i = J0(Ic(), {
        skipReplFilter: true,
        skipSimpleModeFilter
    }).filter((o)=>!YI(o));
    if (!skipSimpleModeFilter) {
        return i;
    }
    let t = i.filter((o)=>c.has(o.name));
    if (skipSearchToolRestore) {
        return t;
    }
    let n = Mte();
    let p = [
        _I,
        bI
    ].filter((o)=>n.has(o.name) && c.has(o.name) && !t.includes(o) && o.isEnabled());
    return [
        ...t,
        ...p
    ];
}
async function TMo(e, s = {}, i) {
    let t = e === "http";
    let n = Ic();
    let tools = N0t(t, s);
    let o = s.agentDefinitions ?? {
        activeAgents: [],
        allAgents: []
    };
    let a = t ? [] : await ele(Nkn(o.activeAgents, []), o.allowedAgentTypes, n);
    let T = a.length > 0 ? `Available agent types:
${a.map((r)=>qir(r, false)).join(`
`)}` : "";
    let l = ()=>Promise.all(tools.map(async (r)=>{
            let f = kM(r.inputSchema);
            let { remoteExecution, outputSchemaAcrossProcesses, ...rest } = r;
            let m = await r.prompt({
                getToolPermissionContext: async ()=>n,
                tools,
                agents: o.activeAgents,
                ...i !== undefined && {
                    model: i.model,
                    leanPrompt: i.leanPrompt,
                    bashFirstTrimmed: false
                }
            });
            return {
                ...rest,
                description: It(r, Af) ? jfs(m) : It(r, yt) ? m.replace(zXr, ()=>T) : m,
                inputSchema: E(f, [
                    ...t ? KPe : [],
                    ...vb(r).supported ? [
                        Or
                    ] : []
                ]),
                outputSchema: undefined
            };
        }));
    if (!t) {
        return l();
    }
    let d = Qh();
    if (d.backgroundTasksDisabled && d.unsandboxedCommandsDisabled) {
        return l();
    }
    for (let r of tools){
        r.inputSchema;
    }
    return CSs(kIr(), l);
}
function kIr(e = new aSr) {
    e.disableBackgroundTasks();
    e.disableUnsandboxedCommands();
    return e;
}
export { kMo, KPe, u9e, N0t, TMo, kIr };
