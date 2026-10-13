import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { mr } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Awo, Cwo, gRs, hRs } from "/$bunfs/root/chunk-d2sd20y7.js";
async function Xxt(e, r = {}) {
    try {
        if (!mr()) {
            if (!a.CLAUDE_CODE_OAUTH_TOKEN && r.bgAuthSnapshot !== "leave") {
                await Awo(e);
            }
            await Cwo(e);
            await gRs(e);
        }
        await hRs(e);
    } catch (error) {
        t(`Descriptor credential prime failed (non-fatal): ${l(error)}`, {
            level: "error"
        });
    }
}
export { Xxt };
