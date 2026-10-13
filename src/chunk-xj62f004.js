import { x } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { qWn, tZ } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { hi } from "/$bunfs/root/chunk-vvkk7cgc.js";
import { _t } from "/$bunfs/root/chunk-smx21d0k.js";
const c = new Set([
    "server/discover",
    "initialize",
    "notifications/initialized",
    "ping",
    "tools/list",
    "tools/call",
    "notifications/cancelled",
    "notifications/roots/list_changed"
]);
function NA(e) {
    if (tZ({
        serverName: e.name
    })) {
        return new x(qWn, "hosted desktop reached past its tools");
    }
}
function cAe(e, o) {
    let t = NA(e);
    if (t === undefined) {
        return;
    }
    let i = o.send.bind(o);
    o.send = async (n, ...s)=>{
        if (!("method" in n ? typeof n.method === "string" && c.has(n.method) : !Array.isArray(n) && "id" in n && ("result" in n || "error" in n))) {
            throw t;
        }
        return i(n, ...s);
    };
}
function r(e, o) {
    let t = NA(e) ?? undefined;
    return t && Promise.reject(t);
}
function cB(e, o, t, i = false) {
    return r(e, i ? o.name : undefined) ?? import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule().invokeToolRaw(e.client, o, t);
}
function dAe(e, o, t) {
    return r(e) ?? import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule().readResourceRaw(e.client, o, t);
}
function not(e, o) {
    return r(e) ?? import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule().listToolsRaw(e.client, o);
}
const l = p(()=>_t({}));
function _ro(e, o, t) {
    return r(e) ?? hi(e.client).request(o, l(), {
        ...t,
        cacheMode: "bypass"
    });
}
function U2(e, o, t) {
    import.meta.require("/$bunfs/root/chunk-7chmfa68.js").mcpClientModule().onMcpNotification(e, o, t);
}
function mce(e, o) {
    hi(e.client).onclose = o;
}
function eas(e, o) {
    let t = hi(e.client);
    let t_onclose = t.onclose;
    t.onclose = ()=>{
        t_onclose?.();
        o();
    };
}
function tas(e, o) {
    return r(e) ?? hi(e.client).notification(o);
}
function nas(e, o) {
    hi(e.client)?.transport?.onmessage?.(o);
}
export { NA, cAe, cB, dAe, not, _ro, U2, mce, eas, tas, nas };
