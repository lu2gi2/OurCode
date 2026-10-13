import { Ce, od } from "/$bunfs/root/chunk-ctt36bn8.js";
import { mr, Cr } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
const t = {
    claudeMd: true,
    skills: true,
    workflows: false,
    plugins: true,
    pluginMonitors: false,
    themes: false,
    hljsLanguages: true,
    hooks: true,
    statusLine: false,
    fileSuggestion: false,
    mcpAutoDiscovered: false,
    mcpClaudeAi: false,
    mcpAgentFrontmatter: true,
    agents: true,
    outputStyles: false,
    lspServers: true,
    keybindings: false
};
const l = {
    claudeMd: false,
    skills: false,
    workflows: false,
    plugins: false,
    pluginMonitors: false,
    themes: false,
    hljsLanguages: false,
    hooks: true,
    statusLine: true,
    fileSuggestion: true,
    mcpAutoDiscovered: false,
    mcpClaudeAi: false,
    mcpAgentFrontmatter: false,
    agents: false,
    outputStyles: false,
    lspServers: false,
    keybindings: false
};
const o = {
    claudeMd: false,
    skills: false,
    workflows: false,
    plugins: false,
    pluginMonitors: false,
    themes: false,
    hljsLanguages: false,
    hooks: false,
    statusLine: true,
    fileSuggestion: true,
    mcpAutoDiscovered: false,
    mcpClaudeAi: false,
    mcpAgentFrontmatter: false,
    agents: false,
    outputStyles: false,
    lspServers: false,
    keybindings: false
};
function br(e, s) {
    if (o[e] && Ce()) {
        return true;
    }
    if (Cr() && !l[e]) {
        return true;
    }
    if (mr() && !s?.explicitlyRequested) {
        return t[e];
    }
    return false;
}
function kT() {
    return Boolean(a.CLAUDE_CODE_DISABLE_CLAUDE_MDS || br("claudeMd", {
        explicitlyRequested: od().length > 0
    }));
}
export { br, kT };
