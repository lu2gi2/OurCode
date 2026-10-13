import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { x } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { cB } from "/$bunfs/root/chunk-xj62f004.js";
import { m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { e1r, azo } from "/$bunfs/root/chunk-en7jcrd3.js";
import { o, T, u } from "/$bunfs/root/chunk-smx21d0k.js";
const l = p(()=>u({
        deviceId: o(),
        name: o().default("Browser"),
        osPlatform: o().optional()
    }));
const F4n = "No browsers are connected. Open Chrome with the Claude extension and make sure you're signed in to the same claude.ai account.";
const SHs = "Chrome can't be reached right now. Make sure Chrome is open with the Claude extension and signed in to the same claude.ai account, then try again.";
const FLo = "That browser isn't connected right now. Make sure Chrome is open with the Claude extension on that computer, then try again.";
class U4n extends x {
    listEmpty;
    namedABrowser;
    constructor(e, r){
        if (r) {
            super(FLo, "claude-in-chrome browser not listed");
        } else {
            super(FLo, "claude-in-chrome switch request named no browser");
        }
        this.listEmpty = e;
        this.namedABrowser = r;
    }
}
class SDr extends x {
    constructor(e){
        super(e, "claude-in-chrome tool call failed");
    }
}
function ULo(e) {
    return e instanceof U4n;
}
function B4n(e) {
    if (e$t(e)) {
        f("chrome_browser_picker", "bridge_unreachable");
    } else if (ULo(e) && e.namedABrowser) {
        f("chrome_browser_picker", "browser_not_listed", {
            list_empty: e.listEmpty
        });
    } else if (ULo(e)) {
        m("chrome_browser_picker", "invalid_request");
    } else {
        m("chrome_browser_picker", "select_failed");
    }
}
class wDr extends x {
    constructor(){
        super(SHs, "claude-in-chrome bridge not reachable");
    }
}
function e$t(e) {
    return e instanceof wDr;
}
function fBs(e) {
    if (e$t(e)) {
        return [];
    }
    throw e;
}
async function Ucn(e) {
    let r = await jLo(e, "list_connected_browsers", {});
    if (!r) {
        return [];
    }
    let s = T(l()).safeParse(X(r));
    if (!s.success) {
        throw new BLo;
    }
    return s.data;
}
class BLo extends x {
    constructor(){
        super("Claude Code couldn't read the browser list it got back. This is a bug on our side, not a problem with your setup.", "claude-in-chrome browser list in an unknown shape");
    }
}
async function j4n(e, deviceId, s = (n)=>n) {
    if (typeof deviceId !== "string" || deviceId === "") {
        throw new U4n(false, false);
    }
    try {
        await s(jLo(e, "select_browser", {
            deviceId
        }));
    } catch (error) {
        if (!(error instanceof SDr)) {
            throw error;
        }
        t(`claude-in-chrome select_browser refused: ${error.message}`);
        let c = await s(Ucn(e));
        if (c.some((i)=>i.deviceId === deviceId)) {
            throw error;
        }
        throw new U4n(c.length === 0, true);
    }
}
async function jLo(e, r, s) {
    let n = e1r();
    let c = await cB(e, {
        name: r,
        arguments: s
    }, undefined, true);
    let i = Array.isArray(c.content) ? c.content[0] : undefined;
    let a = i && typeof i === "object" && "text" in i && typeof i.text === "string" ? i.text : undefined;
    if (e1r() !== n && a !== undefined && azo(a)) {
        t(`claude-in-chrome bridge not reachable: ${a}`, {
            level: "error"
        });
        throw new wDr;
    }
    if (c.isError) {
        throw new SDr(a || `${r} failed`);
    }
    return a;
}
export { F4n, SHs, FLo, U4n, SDr, ULo, B4n, wDr, e$t, fBs, Ucn, BLo, j4n, jLo };
