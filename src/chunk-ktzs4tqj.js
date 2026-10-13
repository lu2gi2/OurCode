import { Es as trustAccepted } from "/$bunfs/root/chunk-0ycjphb5.js";
import { fe, Qn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { urn } from "/$bunfs/root/chunk-55x53sfe.js";
function zje() {
    let proxyAuthHelper = (Qn() || {}).proxyAuthHelper;
    urn({
        helper: proxyAuthHelper,
        fromProjectOrLocal: fe("projectSettings")?.proxyAuthHelper === proxyAuthHelper || fe("localSettings")?.proxyAuthHelper === proxyAuthHelper,
        trustAccepted
    });
}
export { zje };
