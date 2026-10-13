import { qv } from "/$bunfs/root/chunk-ctt36bn8.js";
import { mr } from "/$bunfs/root/chunk-6kc68p18.js";
import { mT, yk, To } from "/$bunfs/root/chunk-kasbfbhj.js";
import { KMo } from "/$bunfs/root/chunk-d15pd9cc.js";
import { fx } from "/$bunfs/root/chunk-cq4hjme9.js";
import { vo } from "/$bunfs/root/chunk-6cee9jwv.js";
function rOr(e, r) {
    return KMo(r.scope) && !To(e);
}
function n1e(e, r) {
    return rOr(e, r) && !o(r);
}
function o(e) {
    return import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule().isFirstPartyDesignServerConfig(e);
}
function oOr(e) {
    switch(e.type){
        case undefined:
        case "stdio":
        case "http":
        case "sse":
        case "ws":
            return true;
        case "sdk":
        case "sse-ide":
        case "ws-ide":
        case "claudeai-proxy":
            return false;
    }
}
function t(servers) {
    return Object.assign(mT(), vo(servers, oOr));
}
async function y9e({ storageV5 } = {}) {
    if (qv() || mr()) {
        return mT();
    }
    await fx();
    let { servers } = await yk({}, {
        purpose: "deviceBridge",
        storageV5
    });
    return t(servers);
}
export { rOr, n1e, oOr, y9e };
