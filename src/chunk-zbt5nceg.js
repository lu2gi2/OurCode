import { wo } from "/$bunfs/root/chunk-6s83kxfy.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
const n = 3;
const _ = "tengu_hazel_trellis";
function hv() {
    let a_CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH = a.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;
    if (a_CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH !== undefined) {
        return a_CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;
    }
    let t = wo();
    if (t.maxSubagentSpawnDepthFromGrowthBook === undefined) {
        let { getFeatureValue_CACHED_MAY_BE_STALE } = import.meta.require("/$bunfs/root/chunk-jv24m4k2.js");
        let { getCachedClientData } = import.meta.require("/$bunfs/root/chunk-edz5qxx7.js");
        let o = getCachedClientData()?.[_];
        let r = u(o) ? o : getFeatureValue_CACHED_MAY_BE_STALE(_, n);
        t.maxSubagentSpawnDepthFromGrowthBook = u(r) ? r : n;
    }
    return t.maxSubagentSpawnDepthFromGrowthBook;
}
function u(e) {
    return typeof e === "number" && Number.isInteger(e) && e >= 1;
}
export { hv };
