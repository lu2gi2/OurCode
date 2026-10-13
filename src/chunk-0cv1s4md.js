import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Y7, v1 } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { eH, _d, yl, WRe, Ea, yOt, mct, j6e } from "/$bunfs/root/chunk-0ycjphb5.js";
import { RJe } from "/$bunfs/root/chunk-g2m5j9gh.js";
import { DI, PL, Pqe, LI, Kur } from "/$bunfs/root/chunk-j6dkn7h7.js";
import { xqe, $Ls, Gur, FLs, d3t } from "/$bunfs/root/chunk-t3a00vfa.js";
import { _re } from "/$bunfs/root/chunk-eck15hm6.js";
import { o, oe, u, ue } from "/$bunfs/root/chunk-smx21d0k.js";
import { Mr } from "/$bunfs/root/chunk-cj4xndke.js";
const p$r = {};
Mr(p$r, {
    IS_WORKTREE_LAUNCH: ()=>Cpn,
    SAVE_FAILURE: ()=>Lpn,
    SIGN_IN_MARGIN_MS: ()=>Ppn,
    default: ()=>p$r,
    earlyFetchVetoed: ()=>xpn,
    fetchRefreshesSignIn: ()=>Opn,
    flagClientQuieted: ()=>Mpn,
    isSavedSwitchOf: ()=>Dpn,
    pluginTestFormOf: ()=>c$r,
    pluginTestGatesOf: ()=>d$r,
    pluginTestRefusal: ()=>u$r,
    savedFlags: ()=>Hpn,
    sessionHoldsEarlyFetch: ()=>Rpn,
    signInNearsExpiry: ()=>Ipn,
    switchFetched: ()=>$pn,
    switchSaveSettled: ()=>Npn
});
function c$r(e) {
    let r = e[0] === "--file";
    let s = e.some((n)=>n.startsWith("-"));
    if (r) {
        return "file";
    }
    if (s) {
        return "other";
    }
    return "run";
}
var Cpn = false;
async function Rpn() {
    let e = v1();
    return Y7() || e?.policyHelpers != null || e?.policyHelper != null || import("/$bunfs/root/chunk-nspt6egw.js").then((r)=>r.pendingSettingsEnvBlocksEarlyGb(Cpn));
}
var xpn = ()=>Promise.resolve().then(Rpn).catch(()=>true);
var Ppn = 60000;
async function Ipn() {
    let e = await yl();
    return e !== null && eH(e.expiresAt, Date.now() + Ppn);
}
var Opn = ()=>Promise.resolve().then(()=>_d() || Ipn()).catch(()=>true);
function Mpn() {
    if (WRe()) {
        Ea().then(yOt, yOt);
    }
}
var Hpn = p(()=>u({
        cachedGrowthBookFeatures: ue(o(), oe()).optional()
    }));
function Dpn(e) {
    let r = Hpn().safeParse(e);
    let s = r.success ? r.data.cachedGrowthBookFeatures?.[DI] : undefined;
    if (typeof s === "boolean") {
        return s;
    }
    return PL;
}
var Lpn = "the rollout switch was fetched, but its value could not be saved for the test files to read: the settings file is busy or cannot be written. Run the tests again";
async function Npn() {
    await Ge(mct(), _re);
    if (Gur() && LI() && !Dpn(await j6e(undefined))) {
        return Lpn;
    }
    return null;
}
var $pn = ()=>FLs().finally(Mpn).then(Npn).catch((e)=>{
        t(`claude plugin test: the hold for the rollout flag failed: ${l(e)}`, {
            level: "error"
        });
        return null;
    });
async function d$r({ helperError, form, envPin }) {
    if (form === "file") {
        $Ls();
    }
    let n = helperError === null && form === "run";
    let i = n ? (await RJe(envPin))?.reason ?? null : helperError;
    let f = n && i === null && !Gur() && !await xpn() && !await Opn() ? await $pn() : null;
    await Pqe();
    return {
        helperError: i ?? f,
        isRolloutOn: LI(),
        isSwitchSaved: xqe(),
        canLoadUserModules: Kur()
    };
}
function u$r({ helperError, isRolloutOn, isSwitchSaved, canLoadUserModules }) {
    if (helperError !== null) {
        return helperError;
    }
    if (!isRolloutOn) {
        if (isSwitchSaved) {
            return `hooks modules are turned off in this process: ${d3t.saved}. Start \`claude\` once with network access, then run the tests again; if this message returns, installed mods are turned off remotely`;
        }
        return `hooks modules are turned off in this process: ${d3t.served}, and a plugin's tests run only while it is on`;
    }
    if (canLoadUserModules) {
        return undefined;
    }
    return "hooks modules are turned off here (disableAllHooks, allowManagedHooksOnly or a policy)";
}
export { c$r, Cpn, Rpn, xpn, Ppn, Ipn, Opn, Mpn, Hpn, Dpn, Lpn, Npn, $pn, d$r, u$r, p$r };
