import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { qa } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { $Le } from "/$bunfs/root/chunk-0w84e1m6.js";
import { Yi } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import { qn } from "/$bunfs/root/chunk-nj0630nv.js";
import { aot } from "/$bunfs/root/chunk-92psz72c.js";
import { Vet } from "/$bunfs/root/chunk-kasbfbhj.js";
function Ijr(e) {
    return `To fix: ${e.webSetupHint ? `${e.webSetupHint}, or connect` : "connect"} an account at ${aot()} \u2014 ${e.rerun} (allow a minute after connecting).`;
}
function Rhn(e) {
    return `${e.subject} with the GitHub account connected to your Claude account, and none is connected (or the connection expired). ${Ijr(e)}`;
}
function xhn(e) {
    let r = e.apostrophe ?? "'";
    let o = `install the app at ${$Le}`;
    let e_webSetupHint = e.webSetupHint;
    let i = e_webSetupHint && e.leadWithWebSetup ? `${e_webSetupHint}, or ${o}` : `${o}${e_webSetupHint ? `, or ${e_webSetupHint}` : ""}`;
    return `Your connected GitHub account can${r}t see ${e.owner}/${e.name} \u2014 usually the Claude GitHub app isn${r}t installed on ${e.owner} or wasn${r}t granted this repo (web-connected accounts need it for private repos), or a different GitHub account is connected. To fix: ${i} \u2014 ${e.rerun}.`;
}
const p = 5000;
const b = 2147483647;
async function Phn(e, r, o = p) {
    let n = {
        verdict: "inconclusive",
        httpStatus: null
    };
    if (Tt() || !qn()) {
        return n;
    }
    let i = Number.isSafeInteger(o) && o > 0 ? Math.min(o, b) : 0;
    if (i === 0) {
        return n;
    }
    let c = AbortSignal.timeout(i);
    let a = (async ()=>{
        await Yi();
        if (c.aborted) {
            return n;
        }
        let { linkedAccountAccess, httpStatus } = await Vet(e, r, c, {
            resyncUndetermined: false
        });
        return {
            verdict: linkedAccountAccess,
            httpStatus
        };
    })();
    let u = await qa(a, c, ()=>Error("budget expired")).catch((s)=>{
        t(`linked GitHub account access probe gave up, treating as inconclusive: ${l(s)}`);
        return n;
    });
    t(`linked GitHub account access to ${e}/${r}: ${u.verdict} (HTTP ${u.httpStatus ?? "none"})`);
    return u;
}
export { Ijr, Rhn, xhn, Phn };
