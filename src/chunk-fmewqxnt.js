import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { Lr, F1 } from "/$bunfs/root/chunk-223dyewd.js";
import { jtn } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { hAn, ni } from "/$bunfs/root/chunk-kasbfbhj.js";
import { xpr, lo } from "/$bunfs/root/chunk-5vhepr4t.js";
function wyn(o) {
    let s = C(o);
    if (s === null) {
        return null;
    }
    let n = Lr(o.totalTokens - o.rawMaxTokens);
    let i = Lr(o.rawMaxTokens);
    if (s === "hard_limit") {
        let p = Ne(process.env.DISABLE_COMPACT) ? "/clear" : "/compact or /clear";
        return `Context exceeds the ${i}-token limit by ${n} tokens \u2014 run ${p} to continue.`;
    }
    let m = Ne(process.env.DISABLE_COMPACT) ? "/clear" : "/compact";
    return `Context is ${n} tokens past the ${i}-token compaction window \u2014 run ${m} to reduce usage.`;
}
function C(o) {
    if (o.totalTokens <= o.rawMaxTokens) {
        return null;
    }
    if (o.autocompactSource === "auto") {
        return "hard_limit";
    }
    return "compaction_window";
}
function vyn(o) {
    let { categories, totalTokens, rawMaxTokens, percentage, model, memoryFiles, mcpTools, agents, skills, messageBreakdown, systemTools, systemPromptSections } = o;
    let e = `## Context Usage

`;
    e += `**Model:** ${model}  
`;
    e += `**Tokens:** ${Lr(totalTokens)} / ${Lr(rawMaxTokens)} (${percentage}%)
`;
    let c = wyn(o);
    if (c) {
        e += `**Over limit:** ${c}
`;
    }
    e += `
`;
    let u = categories.filter((t)=>t.tokens > 0 && t.name !== "Free space" && t.name !== "Autocompact buffer");
    if (u.length > 0) {
        e += `### Estimated usage by category

`;
        e += `| Category | Tokens | Percentage |
`;
        e += `|----------|--------|------------|
`;
        for (let r of u){
            let x = (r.tokens / rawMaxTokens * 100).toFixed(1);
            e += `| ${r.name} | ${Lr(r.tokens)} | ${x}% |
`;
        }
        let t = categories.find((r)=>r.name === "Free space");
        if (t && t.tokens > 0) {
            let r = (t.tokens / rawMaxTokens * 100).toFixed(1);
            e += `| Free space | ${Lr(t.tokens)} | ${r}% |
`;
        }
        let a = categories.find((r)=>r.name === "Autocompact buffer");
        if (a && a.tokens > 0) {
            let r = (a.tokens / rawMaxTokens * 100).toFixed(1);
            e += `| Autocompact buffer | ${Lr(a.tokens)} | ${r}% |
`;
        }
        e += `
`;
    }
    if (mcpTools.length > 0) {
        e += `### MCP Tools

`;
        e += `| Tool | Server | Tokens |
`;
        e += `|------|--------|--------|
`;
        for (let t of mcpTools){
            e += `| ${t.name} | ${t.serverName} | ${Lr(t.tokens)} |
`;
        }
        e += `
`;
    }
    systemTools && systemTools.length > 0;
    systemPromptSections && systemPromptSections.length > 0;
    if (agents.length > 0) {
        e += `### Custom Agents

`;
        e += `| Agent Type | Source | Tokens |
`;
        e += `|------------|--------|--------|
`;
        for (let t of agents){
            let a;
            switch(t.source){
                case "projectSettings":
                    a = "Project";
                    break;
                case "userSettings":
                    a = "User";
                    break;
                case "localSettings":
                    a = "Local";
                    break;
                case "flagSettings":
                    a = "Flag";
                    break;
                case "policySettings":
                    a = "Policy";
                    break;
                case "plugin":
                    a = "Plugin";
                    break;
                case "built-in":
                    a = "Built-in";
                    break;
                default:
                    a = String(t.source);
            }
            e += `| ${t.agentType} | ${a} | ${Lr(t.tokens)} |
`;
        }
        e += `
`;
    }
    if (memoryFiles.length > 0) {
        e += `### Memory Files

`;
        e += `| Type | Path | Tokens |
`;
        e += `|------|------|--------|
`;
        for (let t of memoryFiles){
            e += `| ${t.type} | ${t.path} | ${Lr(t.tokens)} |
`;
        }
        e += `
`;
    }
    if (skills && skills.tokens > 0 && skills.skillFrontmatter.length > 0) {
        e += `### Skills

`;
        e += `| Skill | Source | Tokens |
`;
        e += `|-------|--------|--------|
`;
        for (let t of skills.skillFrontmatter){
            let a = jtn(t.source) + (t.pluginName ? ` (${t.pluginName})` : "");
            e += `| ${t.name} | ${a} | ${F1(t.tokens)} |
`;
        }
        e += `
`;
    }
    return e;
}
async function Yie(o) {
    let { session, messages, getAppState, options: { mainLoopModel, tools, agentDefinitions, customSystemPrompt, appendSystemPrompt, systemPromptSnapshot, excludeDynamicSections, mcpClients }, detail, terminalWidth } = o;
    let originalMessages = ni(messages);
    let u = getAppState();
    let t = await hAn(originalMessages, mainLoopModel, async ()=>u.toolPermissionContext, tools, agentDefinitions, {
        session,
        toolUseContext: {
            options: {
                customSystemPrompt,
                appendSystemPrompt,
                systemPromptSnapshot,
                mcpClients
            },
            getMcp: o.getMcp,
            storageV5: o.storageV5,
            credentials: o.credentials
        },
        originalMessages,
        configuredWindow: u.autoCompactWindow,
        excludeDynamicSections,
        detail,
        terminalWidth
    });
    if (xpr(session)) {
        return {
            ...t,
            deferredBuiltinTools: undefined,
            systemTools: undefined,
            systemPromptSections: undefined
        };
    }
    return t;
}
async function djs(o, s) {
    let n = await Yie(s);
    let m = lo(s.session) ? {
        ...n,
        memoryFiles: []
    } : n;
    return {
        type: "text",
        value: vyn(xpr(s.session) ? {
            ...m,
            messageBreakdown: undefined
        } : m),
        contextUsage: SDs(m)
    };
}
function SDs(o) {
    let kind = C(o);
    return {
        model: o.model,
        total_tokens: o.totalTokens,
        raw_max_tokens: o.rawMaxTokens,
        percentage: o.percentage,
        ...kind !== null && {
            over_limit: {
                tokens_over: o.totalTokens - o.rawMaxTokens,
                kind
            }
        },
        categories: o.categories.map((n)=>({
                name: n.name,
                tokens: n.tokens,
                kind: n.kind
            })),
        mcp_tools: o.mcpTools.map((n)=>({
                name: n.name,
                server_name: n.serverName,
                tokens: n.tokens
            })),
        memory_files: o.memoryFiles.map((n)=>({
                path: n.path,
                type: n.type,
                tokens: n.tokens
            })),
        agents: o.agents.map((n)=>({
                agent_type: n.agentType,
                source: n.source,
                tokens: n.tokens
            })),
        ...o.skills && o.skills.skillFrontmatter.length > 0 && {
            skills: o.skills.skillFrontmatter.map((n)=>({
                    name: n.name,
                    source: n.source,
                    ...n.pluginName !== undefined && {
                        plugin_name: n.pluginName
                    },
                    tokens: n.tokens
                }))
        }
    };
}
export { wyn, vyn, Yie, djs, SDs };
