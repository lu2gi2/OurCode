import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { uL, dJ, JU, hD, P3 } from "/$bunfs/root/chunk-kasbfbhj.js";
import { gte } from "/$bunfs/root/chunk-1xpcvyz3.js";
async function Kze() {
    uL();
    hD();
    dJ();
    P3();
    JU.emit();
    try {
        await gte.rehome();
        g("skill_directory_reload");
    } catch (error) {
        t(`directory change: re-targeting the skill watcher failed (continuing with the previous watch): ${error}`, {
            level: "error"
        });
        f("skill_directory_reload", "rehome_failed");
    }
}
export { Kze };
