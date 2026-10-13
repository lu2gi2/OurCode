import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B, Ee } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { C7, ya, CY, Fn, k, g_ } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { oh, mp, _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Tt, c } from "/$bunfs/root/chunk-etbngzss.js";
import { Et } from "/$bunfs/root/chunk-r3z1chqx.js";
import { qn } from "/$bunfs/root/chunk-nj0630nv.js";
import { Jn } from "/$bunfs/root/chunk-ph7a449e.js";
import { _Ss, rSr, oSr } from "/$bunfs/root/chunk-xpqgtv5j.js";
import { RYe } from "/$bunfs/root/chunk-kpf6v0ta.js";
import { ld } from "/$bunfs/root/chunk-r17zw85x.js";
import { Ko } from "/$bunfs/root/chunk-7qc48pza.js";
import { wPe } from "/$bunfs/root/chunk-79wfew46.js";
import { hostname } from "os";
const i = "tengu_sessions_elevated_auth_enforcement";
const s = "require_trusted_devices";
const L = "tengu_sessions_elevated_auth_disable_proactive_enrollment";
const j = 300000;
class I {
    storedTokenRead = undefined;
    lastEnrollAttemptAtMs = 0;
    automaticEnrollmentNoticePending = false;
    automaticEnrollmentNoticeRaised = Oe();
    signInEnrollmentsInFlight = 0;
}
const E = new q(()=>new I);
const wQt = "This computer was enrolled as a trusted device for your account (you will also get an email). If you did not expect this, review your devices in claude.ai settings.";
function jbr() {
    let e = E.of(B().host);
    let e_automaticEnrollmentNoticePending = e.automaticEnrollmentNoticePending;
    e.automaticEnrollmentNoticePending = false;
    return e_automaticEnrollmentNoticePending;
}
function umo(e) {
    return E.of(B().host).automaticEnrollmentNoticeRaised.subscribe(e);
}
function jzs() {
    if (jbr()) {
        process.stderr.write(`${wQt}
`);
    }
}
const Bat = "Your organization requires Trusted Devices for Remote Control, but enrollment is temporarily disabled. Please try again later, or contact your administrator.";
function xde() {
    return k(L, false);
}
function R() {
    return import.meta.require("/$bunfs/root/chunk-z4ckrxvt.js");
}
function v() {
    return import.meta.require("/$bunfs/root/chunk-b84xs1kw.js");
}
function J5() {
    if (!k(i, false)) {
        return false;
    }
    return v().isPolicyAllowed(s);
}
function ube() {
    if (!k(i, false)) {
        return false;
    }
    return v().isPolicyEnforced(s);
}
function pmo() {
    if (!ld(i, {
        safe: true
    })) {
        return false;
    }
    let e = v();
    return e.isPolicyEnforcedOrHintedByRefusedCache(s) || e.isPolicyVerdictAbsent();
}
function Wzs() {
    return a.CLAUDE_CODE_REMOTE === true && !a.CLAUDE_TRUSTED_DEVICE_TOKEN && ube();
}
const Wbr = "not reachable from a cloud session — that session requires a trusted device, which a cloud session never has; message it from one of your own machines instead";
function zzs(e) {
    return `Nothing was sent: Remote Control session '${e}' is ${Wbr}.`;
}
function pbe() {
    if (!ld("tengu_bridge_attestation_enforce", {
        safe: true
    })) {
        return rSr;
    }
    if (!ld(i, {
        safe: true
    }) || !v().isPolicyEnforcedOrHintedByRefusedCache(s)) {
        return rSr;
    }
    return z();
}
const acceptLevel = "VERIFIED_KEYLESS_DEVICE";
const b = "tengu_bridge_attestation_enforce_config";
function z() {
    try {
        let { value, source } = Fn(b, {});
        switch(source){
            case "payload":
                if (CY()) {
                    return C(value, A());
                }
                return oSr(value);
            case "disk":
                return C(value, A());
            case "override":
                return C(value, P());
            default:
                return P();
        }
    } catch  {
        return A();
    }
}
function P() {
    if (ya() && !CY()) {
        return oSr(C7()[b] ?? {});
    }
    return A();
}
function A() {
    return {
        enforce: true,
        acceptLevel,
        acceptStatuses: new Set
    };
}
function C(e, r) {
    return {
        ...r,
        acceptLevel: _Ss(oSr(e).acceptLevel, r.acceptLevel)
    };
}
function vQt() {
    let e = E.of(B().host);
    if (e.storedTokenRead !== undefined) {
        return e.storedTokenRead;
    }
    let r = Y();
    e.storedTokenRead = r;
    return r;
}
async function Y() {
    let CLAUDE_TRUSTED_DEVICE_TOKEN = process.env.CLAUDE_TRUSTED_DEVICE_TOKEN;
    if (CLAUDE_TRUSTED_DEVICE_TOKEN) {
        return CLAUDE_TRUSTED_DEVICE_TOKEN;
    }
    return (await Jn().readAsync())?.trustedDeviceToken;
}
async function Rb() {
    if (!J5()) {
        return;
    }
    return vQt();
}
async function J$n() {
    if (!ube()) {
        return false;
    }
    if (await vQt()) {
        return false;
    }
    return true;
}
async function W() {
    if (!await J$n()) {
        return null;
    }
    if (xde()) {
        return Bat;
    }
    return "Your organization requires Trusted Devices for Remote Control, but this device is not enrolled. Please run `/login` in Claude Code to enroll this device.";
}
async function fmo(e) {
    await g_(i);
    await zbr(e);
    return W();
}
function uoe(e, r) {
    t(`${e} untrusted_device read as ${r.kind}${"subReason" in r ? ` (sub_reason ${Et(r.subReason, 64)})` : ""}; not re-enrolling`);
}
function rN() {
    E.of(B().host).storedTokenRead = undefined;
}
async function VCe(e, r) {
    if (!J5()) {
        return;
    }
    rN();
    let n = await Rb();
    if (!n || n === e) {
        let u = E.of(B().host);
        if (Date.now() - u.lastEnrollAttemptAtMs >= j) {
            u.lastEnrollAttemptAtMs = Date.now();
            await EQt({
                trigger: "server_denied",
                credentials: r
            });
            n = await Rb();
        }
    }
    if (!n || n === e) {
        return;
    }
    t("[trusted-device] Token changed after untrusted_device 403 (cache bust or lazy enrollment); caller will retry");
    return n;
}
async function gPt(e, r, n) {
    let u = await VCe(e, n);
    if (!u) {
        return;
    }
    return r(u);
}
function fbe(e) {
    if (e?.kind === "signature_wanted") {
        return RYe;
    }
    if (xde()) {
        return Bat;
    }
    return "this device is not enrolled as a trusted device; run /login to enroll";
}
async function zbr(e) {
    if (!ube()) {
        return;
    }
    rN();
    if (!await J$n()) {
        return;
    }
    if (xde()) {
        return;
    }
    t("[trusted-device] Not enrolled, attempting lazy enrollment with OAuth token");
    await EQt({
        lazy: true,
        credentials: e
    });
}
async function Gzs(e) {
    if (!J5()) {
        return mp("trusted_devices_off");
    }
    rN();
    if (await vQt()) {
        return oh(undefined);
    }
    if (xde()) {
        return mp("enrollment_paused");
    }
    t("[trusted-device] Not enrolled, enrolling for a device-bound session");
    await EQt({
        trigger: "device_bind",
        credentials: e
    });
    if (await Rb()) {
        return oh(undefined);
    }
    return mp("not_given");
}
function mmo() {
    let { isClaudeAISubscriber } = import.meta.require("/$bunfs/root/chunk-mt5pc6ed.js");
    if (!qn() || !isClaudeAISubscriber()) {
        return;
    }
    if (xde()) {
        return;
    }
    rN();
    Jn().mutate((r)=>{
        if (r.trustedDeviceToken) {
            return {
                ...r,
                trustedDeviceToken: undefined
            };
        }
        return r;
    }).catch(()=>{});
}
function PNs() {
    return N(k(i, false));
}
async function Vzs() {
    if (!O()) {
        return "no";
    }
    return await Ge((async ()=>{
        let r = await g_(i);
        if (r) {
            await R().waitForPolicyLimitsToLoad();
        }
        return N(r);
    })(), J).catch(()=>{}) ?? PNs();
}
var J = 5000;
function N(e) {
    if (!e || !O() || !v().isPolicyEnforced(s)) {
        return "no";
    }
    if (xde()) {
        return "paused";
    }
    return "enrolls";
}
function O() {
    let { isClaudeAISubscriber } = import.meta.require("/$bunfs/root/chunk-mt5pc6ed.js");
    return !(a.CLAUDE_CODE_REMOTE === true || a.DISABLE_LOGIN_COMMAND || !qn() || !isClaudeAISubscriber() || process.env.CLAUDE_TRUSTED_DEVICE_TOKEN || Tt());
}
async function EQt({ trigger = "proactive", lazy = false, credentials }) {
    let { isClaudeAISubscriber, isConsumerSubscriber, getClaudeAIOAuthTokens, checkAndRefreshOAuthTokenIfNeeded } = import.meta.require("/$bunfs/root/chunk-mt5pc6ed.js");
    if (!qn() || !isClaudeAISubscriber()) {
        return;
    }
    let T = E.of(B().host);
    let h = trigger === "proactive" && !lazy;
    if (h) {
        T.signInEnrollmentsInFlight++;
    }
    try {
        if (!await g_(i)) {
            t(`[trusted-device] Gate ${i} is off, skipping enrollment`);
            return;
        }
        if (xde()) {
            t(`[trusted-device] Proactive enrollment disabled via ${L}, skipping`);
            return;
        }
        if (process.env.CLAUDE_TRUSTED_DEVICE_TOKEN) {
            t("[trusted-device] CLAUDE_TRUSTED_DEVICE_TOKEN env var is set, skipping enrollment (env var takes precedence)");
            return;
        }
        await R().waitForPolicyLimitsToLoad();
        let y = v();
        let org_enforced = y.isPolicyEnforced(s);
        let H = trigger === "server_denied" || trigger === "device_bind" && isConsumerSubscriber();
        if (!(org_enforced || H && y.isPolicyAllowed(s))) {
            t(`[trusted-device] Org has not enabled ${s}, skipping enrollment`);
            return;
        }
        let p = {
            trigger: d(trigger),
            org_enforced
        };
        if (Tt()) {
            t("[trusted-device] Essential traffic only, skipping enrollment");
            return;
        }
        await checkAndRefreshOAuthTokenIfNeeded({
            credentials
        });
        let w = getClaudeAIOAuthTokens()?.accessToken;
        if (!w) {
            t("[trusted-device] No OAuth token, skipping enrollment");
            return;
        }
        let M = dn().BASE_API_URL;
        let f;
        try {
            f = await At.post(`${M}/api/auth/trusted_devices`, {
                display_name: `Claude Code on ${hostname()} \xB7 ${wPe("linux")}`
            }, {
                headers: {
                    "User-Agent": Ko(),
                    Authorization: `Bearer ${w}`,
                    "Content-Type": "application/json"
                },
                timeout: 10000,
                validateStatus: (o)=>o < 500
            });
        } catch (error) {
            t(`[trusted-device] Enrollment request failed: ${l(error)}`);
            m("bridge_trusted_device_enroll", "request_failed", p);
            return;
        }
        if (f.status !== 200 && f.status !== 201) {
            t(`[trusted-device] Enrollment failed ${f.status}: ${_(f.data).slice(0, 200)}`);
            m("bridge_trusted_device_enroll", "http_error", p);
            return;
        }
        let trustedDeviceToken = f.data?.device_token;
        if (!trustedDeviceToken || typeof trustedDeviceToken !== "string") {
            t("[trusted-device] Enrollment response missing device_token field");
            m("bridge_trusted_device_enroll", "missing_token", p);
            return;
        }
        try {
            let o = await Jn().mutate((G)=>({
                    ...G,
                    trustedDeviceToken
                }));
            if (!o.success) {
                t(`[trusted-device] Failed to persist token: ${o.warning ?? "unknown"}`);
                m("bridge_trusted_device_enroll", "storage_failed", p);
                return;
            }
            rN();
            t(`[trusted-device] Enrolled device_id=${f.data.device_id ?? "unknown"}`);
            g("bridge_trusted_device_enroll", p);
        } catch (error) {
            t(`[trusted-device] Storage write failed: ${l(error)}`);
            m("bridge_trusted_device_enroll", "storage_failed", p);
            return;
        }
        if (h || T.signInEnrollmentsInFlight > 0) {
            return;
        }
        try {
            if (Ee()) {
                t(`[trusted-device] ${wQt}`);
                if (process.stderr.isTTY) {
                    process.stderr.write(`${wQt}
`);
                }
            } else {
                T.automaticEnrollmentNoticePending = true;
                T.automaticEnrollmentNoticeRaised.emit();
            }
        } catch (error) {
            c(error);
        }
    } catch (error) {
        t(`[trusted-device] Enrollment error: ${l(error)}`);
        m("bridge_trusted_device_enroll", "unexpected_error", {
            trigger: d(trigger)
        });
    } finally{
        if (h) {
            T.signInEnrollmentsInFlight--;
        }
    }
}
export { wQt, jbr, umo, jzs, Bat, xde, J5, ube, pmo, Wzs, Wbr, zzs, pbe, vQt, Rb, J$n, fmo, uoe, rN, VCe, gPt, fbe, zbr, Gzs, mmo, PNs, Vzs, EQt };
