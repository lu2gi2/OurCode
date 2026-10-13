import { q, B, X8e } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { I$e, ce, gct } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ji } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { Idt, MMt, Y7, v1, F8, wxe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Ewo, Etn } from "/$bunfs/root/chunk-bckbp4r1.js";
import { roe } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { dbs } from "/$bunfs/root/chunk-z363h27n.js";
import { tbr } from "/$bunfs/root/chunk-9snc0taf.js";
class s {
    settingsLoaded = false;
    helperResult = null;
    claimSettingsLoad() {
        if (this.settingsLoaded) {
            return false;
        }
        this.settingsLoaded = true;
        return true;
    }
    beginHelperRun() {
        this.helperResult = {
            error: null
        };
        return this.helperResult;
    }
}
const p = new q(()=>new s);
function l() {
    return p.of(B().host);
}
async function Jxt(t) {
    if (!l().claimSettingsLoad()) {
        return;
    }
    tbr();
    let e = j() ? t?.backend : undefined;
    if (j() && e !== undefined) {
        let [{ seedUserSettings }, { primeWindowsCredManBackendEnabled }, { primeRemoteManagedSettingsCache }, { primeWorkspaceRoots }] = await Promise.all([
            import("/$bunfs/root/chunk-8gdkt9ax.js"),
            import("/$bunfs/root/chunk-c8knngxy.js"),
            import("/$bunfs/root/chunk-4cz6t5v8.js"),
            import("/$bunfs/root/chunk-6nwdda2s.js")
        ]);
        await primeWorkspaceRoots(e);
        await Promise.all([
            gct(e),
            seedUserSettings(e, ji())
        ]);
        primeWindowsCredManBackendEnabled(ce().cachedGrowthBookFeatures?.tengu_windows_credman === true);
        await primeRemoteManagedSettingsCache(e);
    } else {
        await gct();
    }
    await Idt();
    await Etn(Ewo);
    if (j() && e !== undefined) {
        let [{ credentialsStoreFor }, { primeFileDescriptorCredentials }, { primeStoredLoginCopy }] = await Promise.all([
            import("/$bunfs/root/chunk-r13zb9hg.js"),
            import("/$bunfs/root/chunk-6879tn62.js"),
            import("/$bunfs/root/chunk-mt5pc6ed.js")
        ]);
        let r = credentialsStoreFor(e);
        if (r !== undefined) {
            await primeFileDescriptorCredentials(r, {
                bgAuthSnapshot: "leave"
            });
            await primeStoredLoginCopy(r);
        }
    }
    X8e(I$e);
    roe();
    let n = dbs();
    if (n) {
        process.stderr.write(`${n}
`);
        process.exit(1);
    }
}
async function E$n() {
    let t = l();
    if (t.helperResult) {
        return t.helperResult.error;
    }
    let e = t.beginHelperRun();
    e.error = await MMt(v1(), F8(), wxe());
    if (Y7()) {
        roe();
    }
    return e.error;
}
async function afo(t) {
    await Jxt(t);
    return E$n();
}
export { Jxt, E$n, afo };
