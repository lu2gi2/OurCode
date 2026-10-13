import { Cr, YZ } from "/$bunfs/root/chunk-6kc68p18.js";
function Ano(n, e) {
    if (e && !n.restricted) {
        return {
            ...n,
            restricted: true
        };
    }
    return n;
}
function XTe(n) {
    return Cr() || YZ() || [
        n.permissionMode,
        n.inheritPermissionMode,
        n.model,
        n.fallbackModel,
        n.clientDataUrl,
        n.effort,
        n.agent,
        n.agents,
        n.settings,
        n.projectConfigRoot,
        n.appendSystemPrompt,
        n.appendSystemPromptFile,
        n.systemPrompt,
        n.systemPromptFile,
        n.systemPromptSnapshot,
        n.replyOnResume,
        n.permissionPromptTool,
        n.settingSources,
        n.managedSettings
    ].some((e)=>e !== undefined) || Boolean(n.disableSlashCommands) || n.sessionPersistence === false || Boolean(n.dangerouslySkipPermissions) || Boolean(n.allowDangerouslySkipPermissions) || Boolean(n.allowBypass) || Boolean(n.restricted) || Boolean(n.ide) || Boolean(n.strictMcpConfig) || (n.allowedTools ?? []).length > 0 || (n.disallowedTools ?? []).length > 0 || (n.tools ?? []).length > 0 || (n.mcpConfig ?? []).length > 0 || (n.addDir ?? []).length > 0 || (n.pluginDir ?? []).length > 0 || (n.pluginDirNoMcp ?? []).length > 0;
}
function Cno(n) {
    return [
        n.systemPrompt,
        n.systemPromptFile,
        n.appendSystemPromptFile,
        n.permissionPromptTool,
        n.settingSources,
        n.managedSettings,
        n.projectConfigRoot
    ].some((e)=>e !== undefined) || (n.tools ?? []).some((e)=>e !== "default");
}
const o3t = "a custom system prompt, a tool allowlist, or restricted settings";
export { Ano, XTe, Cno, o3t };
