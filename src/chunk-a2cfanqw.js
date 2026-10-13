import { we, Lg, fy } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { mr } from "/$bunfs/root/chunk-6kc68p18.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { yd, hS } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { cRs } from "/$bunfs/root/chunk-vpp1psvz.js";
import { Wie, tXn } from "/$bunfs/root/chunk-hk8pgjyj.js";
import { br } from "/$bunfs/root/chunk-ytkshq2j.js";
import { uCe } from "/$bunfs/root/chunk-9fvky64k.js";
import { ret, ZGe, nkn, Dnr, B3r, kHe, rkn, OXo, Jae, HHe, CA, JU, m8r, bJ, sc, nes, eS, Nhe, y4t, yJr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { qe } from "/$bunfs/root/chunk-46dhek9m.js";
import { Y0e } from "/$bunfs/root/chunk-tajfxccb.js";
import { Fre, Ure, Vh } from "/$bunfs/root/chunk-xs3re09e.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
function v(n, e) {
    if (e.pluginSource !== undefined && hS(e.pluginSource) === yd) {
        return true;
    }
    let u = Wie(n, fy());
    if (u === undefined) {
        return false;
    }
    return u.kind === "server" || tXn(e.pluginSource, u);
}
function jie() {
    if (mr()) {
        return v;
    }
}
const E = (dynamicMcpConfig)=>Object.entries(dynamicMcpConfig ?? {}).filter(([, e])=>e.pluginSource !== undefined).map(([e])=>e);
async function Z9n(n, e) {
    return 0;
}
async function eL(n, e, u, y = {}) {
    let m = y.applyStagedInstalls ?? true;
    t("refreshActivePlugins: clearing all plugin caches");
    if (m) {
        cRs();
        nes();
    }
    sc(e, u);
    if (m) {
        OXo();
    }
    let p = await eS(e, u);
    await m8r(e);
    qe.refreshConfig();
    let [g, h, d] = await Promise.all([
        Jae(e),
        HHe(e),
        CA(we(), e)
    ]);
    let { enabled, disabled, errors, warnings } = p;
    let k = [];
    let warnings_2 = [];
    let [R, C] = await Promise.all([
        Promise.all(enabled.map(async (o)=>{
            let a = await ret(o, k, e, {
                warnings: warnings_2
            });
            if (a) {
                return Object.keys(a).length;
            }
            return 0;
        })),
        Promise.all(enabled.map(async (o)=>{
            if (o.lspServers) {
                return Object.keys(o.lspServers).length;
            }
            let a = await ZGe(o, k, e);
            if (a) {
                o.lspServers = a;
            }
            if (a) {
                return Object.keys(a).length;
            }
            return 0;
        }))
    ]);
    let mcp_count = R.reduce((acc, item)=>acc + item, 0);
    let lsp_count = C.reduce((acc, item)=>acc + item, 0);
    await Z9n(enabled, k);
    let warnings_1 = [
        ...warnings,
        ...warnings_2,
        ...nkn(enabled)
    ];
    let errors_1 = [
        ...errors,
        ...k
    ];
    n.applyRefresh({
        enabled,
        disabled,
        commands: g,
        errors: errors_1,
        warnings: warnings_1,
        agentDefinitions: d
    });
    rkn(e, u);
    let S = false;
    try {
        await bJ(e, u);
    } catch (error) {
        S = true;
        c(error);
        t(`refreshActivePlugins: loadPluginHooks failed: ${l(error)}`);
    }
    if (!S) {
        await y4t(enabled, e).catch(c);
    }
    let hook_count = enabled.reduce((acc, item)=>{
        if (!item.hooksConfig) {
            return acc;
        }
        return acc + Object.values(item.hooksConfig).reduce((acc_1, item_1)=>acc_1 + (item_1?.reduce((D, M)=>D + M.hooks.length, 0) ?? 0), 0);
    }, 0);
    JU.emit();
    t(`refreshActivePlugins: ${enabled.length} enabled, ${g.length} commands, ${h.length} skills, ${d.allAgents.length} agents, ${hook_count} hooks, ${mcp_count} MCP, ${lsp_count} LSP`);
    return {
        enabled_count: F(enabled, (o)=>o.isBuiltin !== true),
        disabled_count: F(disabled, (o)=>o.isBuiltin !== true),
        command_count: g.length,
        skill_count: h.length,
        agent_count: d.allAgents.length,
        hook_count,
        mcp_count,
        lsp_count,
        error_count: errors_1.length + (S ? 1 : 0),
        errors: errors_1,
        warnings: warnings_1,
        agentDefinitions: d,
        pluginCommands: g
    };
}
async function $6(n) {
    let e = new Set(n.mcpClients.filter((s)=>s.config.pluginSource !== undefined).map((s)=>s.name));
    let u;
    let y = ()=>u ??= Nhe(n.storageV5);
    let m = await yJr(n.dynamicMcpConfig ?? {}, n.storageV5, y, jie());
    for (let s of E(n.dynamicMcpConfig)){
        m.add(s);
    }
    let mcpServersAdded = [
        ...m
    ].filter((s)=>!e.has(s)).sort();
    let mcpServersRemoved = [
        ...e
    ].filter((s)=>!m.has(s)).sort();
    let h = mcpServersAdded.length > 0 || mcpServersRemoved.length > 0;
    let toolSearchEnabled = Vh() && Ure(n.model) && !Fre(n.model);
    let r = Lg() > 0;
    let lspToolChange = null;
    if (Y0e() && !toolSearchEnabled && r && !br("lspServers")) {
        let s = B3r() ? {
            hasServers: false,
            loaderFailed: false,
            loaderFailedApplyHealable: false,
            derivationFailed: false
        } : await B(y, n.storageV5, n.credentials);
        if (!kHe()) {
            if (s.hasServers) {
                lspToolChange = "adds";
            } else if (s.loaderFailedApplyHealable) {
                lspToolChange = "may-add";
            }
        } else if (!s.hasServers && !s.derivationFailed) {
            if (s.loaderFailedApplyHealable) {
                lspToolChange = "may-remove";
            } else if (!s.loaderFailed) {
                lspToolChange = "removes";
            }
        }
    }
    return {
        mcpServersAdded,
        mcpServersRemoved,
        toolSearchEnabled,
        lspToolChange,
        wouldInvalidateCache: (h || lspToolChange !== null) && !toolSearchEnabled && r
    };
}
async function B(n, storageV5, credentials) {
    let { enabled, errors } = await n();
    let hasServers = false;
    let loaderFailed = errors.some(uCe);
    let loaderFailedApplyHealable = errors.some((r)=>uCe(r) && !(r.type === "plugin-not-installed" && r.registryReadFailed !== true) && !(r.type === "marketplace-not-found" && r.registryReadFailed !== true) && r.type !== "dependency-version-unsatisfied" && !(r.type === "dependency-unsatisfied" && r.reason !== "not-found"));
    let derivationFailed = false;
    for (let r of enabled){
        let f = [];
        try {
            let w = await Dnr(r, f, storageV5, credentials);
            if (w !== undefined && Object.keys(w).length > 0) {
                hasServers = true;
            }
        } catch  {
            derivationFailed = true;
        }
        if (f.length > 0) {
            derivationFailed = true;
        }
    }
    return {
        hasServers,
        loaderFailed,
        loaderFailedApplyHealable,
        derivationFailed
    };
}
function Q1t(n, e) {
    i("tengu_reload_plugins_cache_impact", {
        mcp_changed: n.mcpServersAdded.length > 0 || n.mcpServersRemoved.length > 0,
        lsp_changed: n.lspToolChange !== null,
        tool_search_on: n.toolSearchEnabled,
        warned: e.warned,
        forced: e.forced
    });
}
export { jie, Z9n, eL, $6, Q1t };
