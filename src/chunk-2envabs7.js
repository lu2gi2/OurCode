import { S2n, wpt, vpt, w2n, v2n, kpt, gIo, WP, li } from "/$bunfs/root/chunk-ctt36bn8.js";
import { p8 } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Prn, qHt } from "/$bunfs/root/chunk-2d9a83dh.js";
import { _8o, Kge, DVt, tkn, tXo, ZTn, hD, QKt, Ihe, P3, kRn, cts } from "/$bunfs/root/chunk-kasbfbhj.js";
import { wo } from "/$bunfs/root/chunk-6s83kxfy.js";
import { mrn } from "/$bunfs/root/chunk-2321ytcf.js";
import { Pdo } from "/$bunfs/root/chunk-e0hrcpx7.js";
import { Gms } from "/$bunfs/root/chunk-4r6b8efh.js";
import { hXt } from "/$bunfs/root/chunk-ma873c97.js";
import { Q3t } from "/$bunfs/root/chunk-8yak0fbv.js";
import { nge, K2r } from "/$bunfs/root/chunk-ecnvtxxd.js";
import { J4o } from "/$bunfs/root/chunk-74k7c24z.js";
import { Nze } from "/$bunfs/root/chunk-e19xbc03.js";
import { OEe } from "/$bunfs/root/chunk-159a9ypr.js";
import { X_t } from "/$bunfs/root/chunk-nsq853yz.js";
import { $4o } from "/$bunfs/root/chunk-3d07py2z.js";
import { vMe } from "/$bunfs/root/chunk-j1wj48wh.js";
function q2r(t, r = new Set, i, o, n, m = false) {
    let a = r.size > 0;
    tkn(t);
    qHt(t);
    hXt.of(t).clear();
    K2r(nge);
    hD();
    Gms(r);
    if (!a) {
        Q3t.peek(t)?.clear();
    }
    let s = QKt();
    if (s?.getTeleportCacheState().status === "active") {
        s.revertTeleportCache("transcript_cleared", "main");
    }
    Ihe(t, undefined, i, undefined, undefined, n);
    WP("clear");
    P3();
    S2n(li());
    vpt(li());
    w2n(li());
    wpt(li());
    v2n(li());
    kpt(li());
    if (!m) {
        b7n();
        ZTn(t.host);
    }
    DVt(t, "session_start");
    Kge.of(t).reset();
    Pdo.of(t).clear();
    Nze.of(t).reset();
    i?.((e)=>{
        if (e.storedImagePaths.size === 0 && e.imageDescriptions.size === 0 && Object.keys(e.displayedMessageContent).length === 0) {
            return e;
        }
        return {
            ...e,
            storedImagePaths: new Map,
            imageDescriptions: new Map,
            displayedMessageContent: {}
        };
    });
    _8o();
    if (!a) {
        $4o();
    }
    mrn();
    if (!a) {
        J4o();
    }
    gIo(r);
    Prn();
    cts();
    kRn().catch(()=>{});
    tXo(t);
    if (o) {
        o.get(X_t).clear();
        o.get(vMe).clear();
        o.get(OEe).clear();
        import("/$bunfs/root/chunk-2fahy131.js").then(({ WebFetchCache })=>o.get(WebFetchCache).clear());
        import("/$bunfs/root/chunk-ns60dh4q.js").then(({ WebFetchHistory })=>o.get(WebFetchHistory).clear());
        import("/$bunfs/root/chunk-reaq6nmh.js").then(({ ToolSearchDescriptionCache })=>o.get(ToolSearchDescriptionCache).clear());
    }
    import("/$bunfs/root/chunk-ssd52rqg.js").then(({ clearAgentDefinitionsCache })=>clearAgentDefinitionsCache());
}
function b7n() {
    let t = wo();
    t.bashPromptSkillCommands = undefined;
    t.workflowAuthoringSkillAvailable = undefined;
    p8();
}
export { q2r, b7n };
