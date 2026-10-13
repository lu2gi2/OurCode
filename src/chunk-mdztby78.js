import { pg } from "/$bunfs/root/chunk-0ycjphb5.js";
import { i2, AA, BC, p2, iir } from "/$bunfs/root/chunk-kasbfbhj.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
async function EWt({ toolUseContext, forkContextMessages, mainThreadAgentDefinition }) {
    let { systemPrompt, userContext, systemContext } = iir() ?? await i(toolUseContext, mainThreadAgentDefinition);
    return {
        systemPrompt,
        userContext,
        systemContext,
        toolUseContext,
        forkContextMessages,
        advisorModel: toolUseContext.getAdvisorSetting()
    };
}
async function i(toolUseContext, mainThreadAgentDefinition) {
    let [systemPrompt, userContext, systemContext] = await Promise.all([
        toolUseContext.renderedSystemPrompt ?? n(toolUseContext, mainThreadAgentDefinition),
        AA(toolUseContext.session, toolUseContext.storageV5, toolUseContext.credentials),
        i2(toolUseContext.session, toolUseContext.options.cacheBreakerPhrase)
    ]);
    return {
        systemPrompt,
        userContext,
        systemContext
    };
}
async function n(toolUseContext, mainThreadAgentDefinition) {
    let t = de(toolUseContext);
    let defaultSystemPrompt = await BC(toolUseContext.options.tools, pg({
        permissionMode: t.mode,
        mainLoopModel: toolUseContext.options.mainLoopModel
    }));
    return p2({
        mainThreadAgentDefinition,
        toolUseContext,
        customSystemPrompt: toolUseContext.options.customSystemPrompt,
        defaultSystemPrompt,
        appendSystemPrompt: toolUseContext.options.appendSystemPrompt
    });
}
export { EWt };
