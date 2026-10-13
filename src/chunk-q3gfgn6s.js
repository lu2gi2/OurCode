import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q, Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { eH, qbe } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { KGt, nYr, k3o, per, Tge, rYr, Ete } from "/$bunfs/root/chunk-gs3dthpm.js";
const KDs = 1500;
const YDs = 86400000;
const XDs = 14400000;
function lWs() {
    return KGt() !== undefined;
}
function tvn() {
    let r = per();
    if (r !== undefined) {
        return {
            capabilities: r.roster.capabilities,
            source: r.source
        };
    }
    return {
        capabilities: undefined,
        source: KGt() === undefined ? "cold_no_identity" : "cold"
    };
}
function eYr() {
    return tvn().capabilities === undefined;
}
function cWs(r = KDs) {
    let e = ee();
    if (e.frozenAssets !== undefined || e.rosterHeard === undefined || e.rosterWaitOver || !eYr()) {
        return;
    }
    if (e.rosterWait !== undefined) {
        return e.rosterWait;
    }
    let o = Date.now();
    let e_accountEpoch = e.accountEpoch;
    e.rosterWait = Ut(e.rosterHeard, r, "artifact-roster").then((heard)=>{
        g("artifact_roster_wait", {
            wait_ms: Date.now() - o,
            heard,
            cold: eYr()
        });
    }, ()=>{
        f("artifact_roster_wait", "timeout", {
            wait_ms: Date.now() - o,
            cold: eYr()
        });
    }).catch((a)=>{
        t(`Artifact roster wait: recording its outcome failed: ${l(a)}`);
    }).finally(()=>{
        if (e.accountEpoch === e_accountEpoch) {
            e.rosterWaitOver = true;
        }
    });
    return e.rosterWait;
}
async function dWs(r) {
    let e = Date.now() + r;
    while(true){
        let o = ee();
        let n = o.rosterHeard;
        if (o.frozenAssets !== undefined || n === undefined || o.rosterWaitOver) {
            return true;
        }
        let a = new AbortController;
        let i = await Promise.race([
            n.then(()=>true, ()=>true),
            Q(Math.max(0, e - Date.now()), a.signal, {
                unref: true
            }).then(()=>false)
        ]);
        a.abort();
        if (!i) {
            return false;
        }
        if (ee().rosterHeard === n) {
            return true;
        }
    }
}
function uWs(r = Date.now()) {
    let e = nYr();
    if (e === undefined) {
        return false;
    }
    let o = r - e.fetchedAt;
    return o >= 0 && o < YDs;
}
function pWs(r = Date.now()) {
    let e = k3o();
    if (e === undefined) {
        return false;
    }
    let o = r - e.deniedAt;
    return o >= 0 && o < XDs && qbe() === e.tokenExpiresAt && !eH(e.tokenExpiresAt, r);
}
function tYr(r) {
    let e = ee();
    let o;
    e.rosterHeard = new Promise((resolve)=>{
        o = resolve;
    });
    return R(e, r, o);
}
async function R(session, e, o) {
    try {
        let epoch = session.accountEpoch;
        let a = qbe();
        let i = Date.now();
        let roster = await Ete({
            ...e,
            recoverOAuth401: true
        });
        let duration_ms = Date.now() - i;
        if ("err" in roster) {
            f("artifact_roster_refresh", roster.cause, {
                duration_ms,
                ...roster.status !== undefined && {
                    status: roster.status
                }
            });
            t(`Artifact roster refresh failed (${roster.cause}): ${roster.err}`);
            let tokenExpiresAt = qbe();
            let { cause, status } = roster;
            o(false);
            if (cause === "http_4xx" && (status === 403 || status === 401 && tokenExpiresAt !== a) && tokenExpiresAt !== null && ee() === session) {
                await rYr(session, epoch, e.storageV5, (h)=>({
                        artifactRosterDenied: {
                            ...h,
                            status,
                            deniedAt: Date.now(),
                            tokenExpiresAt
                        }
                    }));
            }
            return false;
        }
        g("artifact_roster_refresh", {
            duration_ms,
            schema_frozen: session.frozenAssets !== undefined
        });
        let { adopted, persisted } = Tge({
            session,
            epoch,
            roster,
            storageV5: e.storageV5
        });
        if (adopted) {
            o(true);
            await persisted;
        }
        return true;
    } catch (error) {
        t(`Artifact roster refresh: ${l(error)}`);
        return false;
    } finally{
        o(false);
    }
}
export { KDs, YDs, XDs, lWs, tvn, eYr, cWs, dWs, uWs, pWs, tYr };
