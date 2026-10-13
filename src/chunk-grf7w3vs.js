import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { JOt } from "/$bunfs/root/chunk-chd251pa.js";
import { E1 as code, vxe } from "/$bunfs/root/chunk-381737m9.js";
import { Mr } from "/$bunfs/root/chunk-cj4xndke.js";
const k$r = {};
Mr(k$r, {
    default: ()=>k$r,
    endsInARowOf: ()=>NHs,
    unsettledBy: ()=>W3n,
    workerEndingOf: ()=>$Hs
});
function NHs(e) {
    let n = Number(e);
    if (Number.isSafeInteger(n) && n > 0) {
        return n;
    }
    return 0;
}
var W3n = (e)=>({
        reason: `Error: ${l(e)}`,
        kind: e instanceof JOt ? "passing" : "lasting"
    });
var o = 5;
const d = `It did not pass in ${o} tries`;
const m = "it is held for good, or refused to this process";
var t = "Start the daemon again once this is mended.";
var p = `${d}: ${m}. ${t}`;
function $Hs(e, n) {
    let r = e.kind === "passing";
    let s = r && n + 1 < o;
    let i = r ? p : t;
    if (s) {
        return {
            code: vxe,
            said: `${e.reason}
`
        };
    }
    return {
        code,
        said: `${e.reason}
${i}
`
    };
}
export { NHs, W3n, $Hs, k$r };
