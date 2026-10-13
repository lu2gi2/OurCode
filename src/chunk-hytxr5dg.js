import { Be } from "/$bunfs/root/chunk-6dwnw6av.js";
function KLt(e) {
    if (e.toolName === Be) {
        if (!e.ruleContent) {
            return {
                prefix: "Any Bash command"
            };
        }
        if (e.ruleContent.endsWith(":*") || e.ruleContent.endsWith(" *")) {
            return {
                prefix: "Any Bash command starting with ",
                emphasis: e.ruleContent.slice(0, -2)
            };
        }
        return {
            prefix: "The Bash command ",
            emphasis: e.ruleContent
        };
    }
    if (!e.ruleContent) {
        return {
            prefix: "Any use of the ",
            emphasis: e.toolName,
            suffix: " tool"
        };
    }
    return null;
}
export { KLt };
