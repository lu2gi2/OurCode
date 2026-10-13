import { ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Up, vn } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { Wu } from "/$bunfs/root/chunk-jc71z2z2.js";
import { FM, UM } from "/$bunfs/root/chunk-4521ay78.js";
import { C0n } from "/$bunfs/root/chunk-45f0zf8d.js";
import { oro, XIn, JIn, lro } from "/$bunfs/root/chunk-a5rabwn2.js";
const d = 14;
const f = 10;
async function UWe() {
    try {
        let e = C0n();
        if (e === undefined) {
            return [];
        }
        if (UM() !== null) {
            return [];
        }
        let { enabled } = await e;
        if (enabled.length === 0) {
            return [];
        }
        let u = Wu();
        let l = FM();
        let c = ce().numStartups;
        let g = Date.now();
        let r = [];
        for (let n of enabled){
            let { marketplace } = vn(n.repository);
            if (!marketplace || Up(marketplace)) {
                continue;
            }
            if (lro(n, u, l) !== "user-install") {
                continue;
            }
            if (p(n)) {
                continue;
            }
            let i = XIn(n.repository);
            if (!i) {
                continue;
            }
            if (oro(n.repository)) {
                continue;
            }
            let { sessionsSinceLastUse, daysSinceLastUse } = JIn(i, c, g);
            if (daysSinceLastUse >= d && sessionsSinceLastUse >= f) {
                r.push({
                    pluginId: n.repository,
                    name: n.name,
                    daysSinceLastUse
                });
            }
        }
        r.sort((n, o)=>o.daysSinceLastUse - n.daysSinceLastUse);
        return r;
    } catch (error) {
        t(`plugin-disuse tip: failed to compute disused plugins: ${error}`, {
            level: "error"
        });
        return [];
    }
}
function DGo(e) {
    if (UM() !== null) {
        return null;
    }
    let s = XIn(e);
    if (!s) {
        return null;
    }
    if (oro(e)) {
        return 0;
    }
    return JIn(s, ce().numStartups, Date.now()).daysSinceLastUse;
}
function p(e) {
    return Boolean(e.themesPath || e.themesPaths?.length || e.outputStylesPath || e.outputStylesPaths?.length || e.monitors?.length || e.workflowsPath || e.workflowsPaths?.length);
}
export { UWe, DGo };
