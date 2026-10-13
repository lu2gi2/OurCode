import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
const oIe = {
    heading: "Learn the moves",
    body: "Quick lessons on the things power users do — plan mode, undo, " + "subagents, memory. About 5 minutes. Come back any time with /powerup.",
    banner: "New here? Type /powerup for a 5-minute tour — modes, undo, " + "@-mentions, and how to teach Claude your rules."
};
function iHr() {
    let a_CLAUDE_CODE_POWERUP_ONBOARDING = a.CLAUDE_CODE_POWERUP_ONBOARDING;
    if (a_CLAUDE_CODE_POWERUP_ONBOARDING === "banner" || a_CLAUDE_CODE_POWERUP_ONBOARDING === "step") {
        return a_CLAUDE_CODE_POWERUP_ONBOARDING;
    }
    return k("tengu_birch_lantern", "off");
}
export { oIe, iHr };
