import { $t } from "/$bunfs/root/chunk-xb9cceab.js";
import { Ha } from "/$bunfs/root/chunk-kasbfbhj.js";
import { W6 } from "/$bunfs/root/chunk-k09mhqd6.js";
import { Kn } from "/$bunfs/root/chunk-rhjwzamj.js";
function s() {
    return import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule();
}
async function Lee(e, c, d) {
    let i = Kn(e.name, e.config);
    let { captureDiscoveryGrantLeg, ensureDiscoveryCacheAccount, getMcpIdentityEpoch, persistRefreshedToolsIfPresent } = s();
    ensureDiscoveryCacheAccount();
    let a = Ha() ? captureDiscoveryGrantLeg(e.name, e.config) : undefined;
    let toolRefreshSequences = $t().toolRefreshSequences;
    let r = toolRefreshSequences.get(e) ?? {
        started: 0,
        applied: 0
    };
    toolRefreshSequences.set(e, r);
    r.started += 1;
    let r_started = r.started;
    let { fetchToolsForClient } = s();
    let previousToolsPromise = fetchToolsForClient.cache.get(i);
    let identityEpoch = getMcpIdentityEpoch();
    fetchToolsForClient.cache.delete(i);
    let newTools = await fetchToolsForClient(e, d);
    let error = s().getToolsListErrorForResult(newTools);
    if (error) {
        return {
            status: "kept-previous",
            error
        };
    }
    if (e.discoveryAuthFailure && newTools.length === 0) {
        return {
            status: "kept-previous",
            error: "the server rejected tool discovery as unauthorized — the user needs to authorize this connector (e.g. via /mcp) before its tools are available"
        };
    }
    if (r.applied > r_started) {
        return {
            status: "kept-previous",
            error: "superseded by a newer concurrent refresh of this server — the newer refresh result is the one applied"
        };
    }
    r.applied = r_started;
    c(e.name, W6(e, newTools));
    if (a) {
        a.then((grantLeg)=>persistRefreshedToolsIfPresent(e, newTools, {
                identityEpoch,
                grantLeg
            }));
    }
    return {
        status: "refreshed",
        newTools,
        previousToolsPromise
    };
}
export { Lee };
