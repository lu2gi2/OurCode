import { pg } from "/$bunfs/root/chunk-0ycjphb5.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { ae, Lr, F1 } from "/$bunfs/root/chunk-223dyewd.js";
import { U8 } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { xh } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { ojt, zGo } from "/$bunfs/root/chunk-wp163phe.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { hHe, dD, Dae, BSt, VQo, rsr, osr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { UWe } from "/$bunfs/root/chunk-yqh0an3h.js";
import { In } from "/$bunfs/root/chunk-xwkmkvm4.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
function fX(n, s) {
    return n + " ".repeat(Math.max(0, s - ae(n)));
}
function XN(n, s) {
    return " ".repeat(Math.max(0, s - ae(n))) + n;
}
function X1t(n) {
    let cells = n.map((o)=>({
            context: o.listingTokens === null ? "-" : F1(o.listingTokens),
            week: o.weekTokens === null ? "-" : Lr(o.weekTokens),
            lastUsed: o.daysSinceUse === null ? "never" : o.daysSinceUse === 0 ? "today" : `${o.daysSinceUse} ${I(o.daysSinceUse, "day")}`
        }));
    return {
        cells,
        widths: {
            name: Math.max(5, ...n.map((o)=>ae(o.name))),
            source: Math.max(6, ...n.map((o)=>ae(o.source))),
            context: Math.max(7, ...cells.map((o)=>ae(o.context))),
            week: Math.max(9, ...cells.map((o)=>ae(o.week))),
            uses: Math.max(4, ...n.map((o)=>ae(String(o.usageCount))))
        }
    };
}
class ROe extends Error {
    featureErrorCode;
    constructor(n, cause){
        super("skill-doctor stage failed", {
            cause
        });
        this.featureErrorCode = n;
    }
}
function BQe(n) {
    return {
        commands: n.options.commands,
        mcpCommands: n.getMcp().commands,
        mcpClients: n.getMcp().clients,
        agentId: n.agentId,
        mainLoopModel: n.options.mainLoopModel,
        permissionMode: de(n).mode,
        storageV5: n.storageV5
    };
}
async function khn(n) {
    let s = UWe();
    s.catch(()=>{});
    let o = ojt();
    let c = o.allowed ? zGo(n.storageV5).catch((e)=>{
        throw new ROe("scan_failed", e);
    }) : Promise.resolve(new Map);
    c.catch(()=>{});
    let { included } = await osr(n.mcpCommands, n.agentId, n.storageV5).catch((e)=>{
        throw new ROe("skill_set_failed", e);
    });
    let S = pg({
        permissionMode: n.permissionMode,
        mainLoopModel: n.mainLoopModel
    });
    let y = rsr(included, S, n.mainLoopModel);
    let p = await c;
    let rows = [];
    let l = Dae([
        ...n.commands
    ]);
    let w = new Set(l.map((e)=>e.name));
    let M = new Set(n.commands.filter((e)=>BSt(e) && !w.has(e.name)).map((e)=>e.name));
    let m = new Map;
    for (let e of l){
        let t = e.type === "prompt" && e.loadedFrom !== "syncedSkills" ? e.name.lastIndexOf(":") : -1;
        if (t > 0) {
            let i = e.name.slice(t + 1);
            m.set(i, (m.get(i) ?? 0) + 1);
        }
    }
    for (let e of l){
        if (e.type !== "prompt") {
            continue;
        }
        if (e.source === "bundled" || e.source === "builtin" || e.source === "policySettings") {
            continue;
        }
        if (e.source === "mcp" && e.loadedFrom !== "mcp") {
            continue;
        }
        let t = e.name.lastIndexOf(":");
        let i = t > 0 ? e.name.slice(t + 1) : undefined;
        let u = i !== undefined && e.loadedFrom !== "syncedSkills" && M.has(i) && m.get(i) === 1 ? i : undefined;
        let f = VQo(e.name, u ?? hHe(e));
        rows.push({
            name: e.pluginInfo ? xh(e.name) : e.name,
            source: e.pluginInfo ? xh(e.pluginInfo.pluginManifest.name) : e.loadedFrom === "syncedSkills" ? U8 : e.source,
            owner: e.source === "plugin" ? "plugin" : e.source === "mcp" ? "mcp" : e.loadedFrom === "syncedSkills" ? "synced" : "settings",
            pluginKey: e.pluginInfo?.pluginManifest.name,
            usageCount: f?.usageCount ?? 0,
            daysSinceUse: f?.daysSinceUse ?? null,
            listingTokens: y.get(e.name) ?? null,
            weekTokens: p.get(dD(e)) ?? (u ? p.get(u) : undefined) ?? null
        });
    }
    rows.sort((e, t)=>(t.daysSinceUse ?? Infinity) - (e.daysSinceUse ?? Infinity));
    let a = rows.filter((e)=>e.usageCount === 0 && e.listingTokens !== null);
    let unusedOwned = a.filter((e)=>e.owner === "settings");
    let unusedSynced = a.filter((e)=>e.owner === "synced");
    let x = new Set(rows.filter((e)=>e.usageCount > 0 && e.pluginKey !== undefined).map((e)=>e.pluginKey));
    let unusedFromPlugins = a.filter((e)=>e.owner === "plugin" && (e.pluginKey === undefined || !x.has(e.pluginKey)));
    let d = (e)=>{
        let t = e.name.indexOf(":");
        if (t > 0) {
            return e.name.slice(0, t);
        }
    };
    let L = new Set(rows.filter((e)=>e.owner === "mcp" && e.usageCount > 0).map(d).filter((e)=>e !== undefined));
    let unusedFromMcp = a.filter((e)=>{
        if (e.owner !== "mcp") {
            return false;
        }
        let t = d(e);
        return t === undefined || !L.has(t);
    });
    let unusedMcpServers = D(unusedFromMcp.map(d).filter((e)=>e !== undefined)).map((e)=>xh(n.mcpClients.find((t)=>In(t.name) === e)?.name ?? e));
    return {
        rows,
        unusedOwned,
        unusedFromPlugins,
        unusedFromMcp,
        unusedSynced,
        unusedMcpServers,
        disusedPlugins: await s,
        weekTokensNote: o.allowed ? null : o.reason
    };
}
export { fX, XN, X1t, ROe, BQe, khn };
