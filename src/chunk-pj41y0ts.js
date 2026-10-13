import { gn, ben, GV } from "/$bunfs/root/chunk-k3tkc302.js";
import { D3o } from "/$bunfs/root/chunk-440b8y7g.js";
import { gJt, Jx, p_r, Muo, Huo } from "/$bunfs/root/chunk-eb0vnwc4.js";
import { Sl } from "/$bunfs/root/chunk-qbxhbxwh.js";
D3o(()=>Jx() && !gJt());
export const nme = {
    name: gn,
    aliases: undefined,
    enablesCodeExecution: undefined,
    underlyingV1ToolName: undefined,
    aliasSkillToolNames: undefined,
    familyParentToolName: undefined,
    mcpInfo: undefined,
    isMcp: undefined,
    isLsp: undefined,
    searchHint: "render an HTML file to a claude.ai web page",
    briefStandalone: true,
    shouldDefer: false,
    whenToUse: `publishes pages on claude.ai; reads claude.ai artifact links. Load it with ${Sl} (select:${gn}) before writing any document, plan, analysis or visual, and whenever other people come up as readers, even after the work is written. Its description says whether to publish, offer a page or do neither.`,
    backgrounding: "never",
    maxResultSizeChars: GV,
    persistenceThresholdCeiling: GV,
    skipAggregateToolResultBudget: true,
    preserveToolUseResultInSubagents: true,
    stripToolUseResultAtCreation: true,
    ruleContentField: ben,
    isEnabled () {
        Muo();
        let e = p_r();
        Huo(e);
        return e === null;
    }
};
