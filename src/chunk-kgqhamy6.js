import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { wDt, rCo } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { e6e, $Un, tt, Lyo, SZt, mOt, AEr, l1, gOt, jT, Fn, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ePt } from "/$bunfs/root/chunk-j5p659br.js";
const m = "tengu_log_datadog_events";
const f = "tengu_quizzical_giraffe";
const h = new Set([
    "tengu_started",
    "tengu_oauth_success",
    "tengu_oauth_token_refresh_lock_acquiring",
    "tengu_oauth_token_refresh_starting",
    "tengu_oauth_token_refresh_success",
    "tengu_oauth_token_refresh_failure",
    "tengu_oauth_token_refresh_race_recovered",
    "tengu_oauth_refresh_token_cleared_on_disk",
    "tengu_api_error",
    "tengu_feature_bad",
    "tengu_feature_sad"
]);
function p() {
    if (mOt("datadog")) {
        return false;
    }
    try {
        return k(m, false);
    } catch  {
        return false;
    }
}
function _(e) {
    try {
        e6e(tt());
    } catch  {}
    return $Un(e);
}
function g(e, n) {
    if (!h.has(e)) {
        return n;
    }
    try {
        let { value, source } = Fn(f, false);
        let r = source === "fallback" || source === "disabled";
        return {
            ...n,
            [f]: d(r ? "unset" : value === true ? "on" : "off")
        };
    } catch  {
        return n;
    }
}
function E(e) {
    return e || l1();
}
function c(e, n, o, a) {
    let r = a();
    if (!E(r)) {
        return;
    }
    let i = g(e, _(n));
    let s = o !== null ? {
        ...i,
        sample_rate: o
    } : i;
    if (r) {
        ePt(e, wDt(s));
    }
    gOt(e, s);
}
let l = false;
function v(e, n, o) {
    if (l) {
        t(`logEvent reentered while collecting metadata \u2014 dropped ${e}. A getEventMetadata dependency (model/betas/auth) called logEvent synchronously; defer it (queueMicrotask) or move it out of the metadata path.`, {
            level: "error"
        });
        return;
    }
    l = true;
    try {
        let a = AEr(e);
        if (a === 0) {
            return;
        }
        if (Lyo()) {
            c(e, n, a, o);
            return;
        }
        let r = ()=>{
            l = true;
            try {
                c(e, n, a, o);
            } finally{
                l = false;
            }
        };
        SZt().then(r, r);
    } finally{
        l = false;
    }
}
async function y(e, n, o) {
    let a = AEr(e);
    if (a === 0) {
        return;
    }
    if (!Lyo()) {
        await SZt();
    }
    let r = o();
    if (!E(r)) {
        return;
    }
    let i = g(e, _(n));
    let s = a !== null ? {
        ...i,
        sample_rate: a
    } : i;
    let u = [];
    if (r) {
        u.push(ePt(e, wDt(s)));
    }
    u.push(jT(e, s));
    await Promise.all(u);
}
function oX() {
    rCo(S(p));
}
function S(e) {
    return {
        logEvent: (n, o)=>v(n, o, e),
        logEventAsync: (n, o)=>y(n, o, e)
    };
}
export { oX };
