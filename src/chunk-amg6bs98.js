import { Ce, $pt, dIo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { YK } from "/$bunfs/root/chunk-kasbfbhj.js";
import { hDt } from "/$bunfs/root/chunk-03gkt7r5.js";
function t() {
    let e = dIo();
    let o = e === undefined ? hDt() : undefined;
    let [msSinceSessionStart, s] = e !== undefined ? [
        Math.max(0, Date.now() - e),
        "session_switch"
    ] : o !== undefined ? [
        Math.max(0, Date.now() - o),
        "spawn_stamp"
    ] : [
        Ce() ? undefined : Math.round(process.uptime() * 1000),
        "process_start"
    ];
    return {
        msSinceSessionStart,
        startAnchor: d(s),
        isRemoteSession: Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)
    };
}
function n(e) {
    let o = $pt();
    if (o.has(e)) {
        return false;
    }
    o.add(e);
    return true;
}
function Wgn(toolCount, o) {
    if (toolCount === 0 || !n("tools_added")) {
        return;
    }
    i("tengu_chrome_tools_added", {
        ...t(),
        toolCount,
        discoverySource: d(o)
    });
}
function zgn(e) {
    if (!n("tool_attempted")) {
        return;
    }
    i("tengu_chrome_tool_attempted", {
        ...t(),
        ...e && {
            messageClientPlatform: YK(e)
        }
    });
}
function Nzo(e) {
    if (!n("bridge_connected")) {
        return;
    }
    i("tengu_chrome_bridge_connected", {
        ...t(),
        bridgeStatus: pe(e)
    });
}
function $zo() {
    if (!n("extension_connected")) {
        return;
    }
    i("tengu_chrome_extension_connected", t());
}
function Fzo(tokenAccountMismatch) {
    i("tengu_chrome_tool_call_disconnected", {
        ...t(),
        tokenAccountMismatch
    });
}
export { Wgn, zgn, Nzo, $zo, Fzo };
