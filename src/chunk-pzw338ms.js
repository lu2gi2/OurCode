import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { wt, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { I$ as install, YTe, Ix, O$ } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { ka } from "/$bunfs/root/chunk-5mfg4ngf.js";
const W4n = "https://clau.de/chrome/permissions";
const m = {
    install,
    reconnect: YTe,
    permissions: W4n
};
async function mBs({ mcpClients, atStartup }) {
    let installed = await O$().catch((e)=>{
        t(`[Claude in Chrome] Extension detection failed: ${e instanceof Error ? e.message : String(e)}`, {
            level: "error"
        });
        return false;
    });
    let o = ce();
    let connected = mcpClients.some((e)=>e.name === ka && e.type === "connected");
    let paired_browser = o.chromeExtension?.pairedDeviceName;
    return {
        allowed: Ix(),
        subscriber: wt(),
        wsl: a.isWslEnvironment(),
        installed,
        connected,
        ...connected && paired_browser && {
            paired_browser
        },
        enabled_by_default: o.claudeInChromeDefaultEnabled ?? false,
        at_startup: await atStartup(o.claudeInChromeDefaultEnabled === true),
        urls: {
            ...m
        }
    };
}
export { W4n, mBs };
