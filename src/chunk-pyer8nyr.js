import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f, Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { oh, mp, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { dR } from "/$bunfs/root/chunk-md7g8y4m.js";
import { t0e, Ynt } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Gzt, J7e, Gze, TMe, UYo, jSn, Q7e } from "/$bunfs/root/chunk-0x17099a.js";
import { fqr, mqr } from "/$bunfs/root/chunk-nc91yayz.js";
import { age } from "/$bunfs/root/chunk-7zrhxtr7.js";
import { lge } from "/$bunfs/root/chunk-c157kdrd.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
const kMe = "creg_";
const I = Buffer.from("anthropic.ccr.create_session_bind.v1", "utf8");
function Q6(e) {
    if (!Jt(e)) {
        throw new x(`deviceBind: malformed UUID '${e}'`, "deviceBind: malformed UUID");
    }
    return Buffer.from(e.replace(/-/g, ""), "hex");
}
function A(orgUuid, accountUuid, deviceUUID, o) {
    let c = Buffer.alloc(I.length + 48 + 8);
    let s = 0;
    s += I.copy(c, s);
    s += Q6(orgUuid).copy(c, s);
    s += Q6(accountUuid).copy(c, s);
    s += Q6(deviceUUID).copy(c, s);
    c.writeBigUInt64BE(BigInt(o), s);
    return c;
}
async function S(orgUuid, accountUuid, deviceUUID, key) {
    let c = Date.now();
    let s = await key.sign(A(orgUuid, accountUuid, deviceUUID, c));
    return {
        deviceUUID,
        kid: kMe + deviceUUID,
        signature: s.toString("base64"),
        issuedAt: new Date(c).toISOString()
    };
}
const P = Buffer.from("anthropic.ccr.session_bind.v1", "utf8");
const E = "00000000-0000-0000-0000-000000000000";
function T({ orgUuid, accountUuid, sessionUuid, expectedCurrentDeviceUuid, newDeviceUuid, issuedAtMs }) {
    let u = Buffer.alloc(P.length + 80 + 8);
    let a = 0;
    a += P.copy(u, a);
    a += Q6(orgUuid).copy(u, a);
    a += Q6(accountUuid).copy(u, a);
    a += Q6(sessionUuid).copy(u, a);
    a += Q6(expectedCurrentDeviceUuid ?? E).copy(u, a);
    a += Q6(newDeviceUuid).copy(u, a);
    u.writeBigUInt64BE(BigInt(issuedAtMs), a);
    return u;
}
async function cqr({ orgUuid, accountUuid, sessionUuid, deviceUUID, key, now = Date.now }) {
    let u = now();
    let a = await key.sign(T({
        orgUuid,
        accountUuid,
        sessionUuid,
        expectedCurrentDeviceUuid: undefined,
        newDeviceUuid: deviceUUID,
        issuedAtMs: u
    }));
    return {
        deviceUUID,
        kid: kMe + deviceUUID,
        signature: a.toString("base64"),
        issuedAt: new Date(u).toISOString()
    };
}
const H = Buffer.from("anthropic.ccr.tool_host_link.v1", "utf8");
const L = Buffer.from("anthropic.ccr.tool_host_link.v2", "utf8");
const O = /^[a-z0-9_.]{1,48}$/;
const F = 8;
function N(e) {
    return Buffer.concat([
        H,
        ...k(e),
        U(e.issuedAtMs)
    ]);
}
function z7n(e) {
    let n = D(e).sort();
    if (e.length >= 1 && e.length <= F && e.every((r)=>O.test(r)) && n.length === e.length && n.every((r, o)=>r === e[o])) {
        return n;
    }
}
function M(e, capabilities) {
    if (z7n(capabilities) === undefined) {
        throw new x("deviceBind: tool-host link capabilities must be 1 to 8 sorted, distinct names of a-z, 0-9, _ and .", "deviceBind: malformed link capabilities");
    }
    return Buffer.concat([
        L,
        ...k(e),
        _(capabilities.length),
        ...capabilities.flatMap((r)=>{
            let o = Buffer.from(r, "ascii");
            return [
                _(o.length),
                o
            ];
        }),
        U(e.issuedAtMs)
    ]);
}
async function dqr({ orgUuid, accountUuid, sessionUuid, deviceUUID, request, capabilities, key, now = Date.now }) {
    let h = now();
    let p = {
        orgUuid,
        accountUuid,
        sessionUuid,
        deviceUuid: deviceUUID,
        request,
        issuedAtMs: h
    };
    let m = await key.sign(capabilities === undefined ? N(p) : M(p, capabilities));
    return {
        deviceUUID,
        kid: kMe + deviceUUID,
        signature: m.toString("base64"),
        issuedAt: new Date(h).toISOString()
    };
}
const C = Buffer.from("anthropic.ccr.tool_host_resume.v1", "utf8");
function K(e, nonce) {
    let r = Buffer.from(nonce, "utf8");
    if (r.length === 0 || r.length > 65535) {
        throw new x("deviceBind: tool-host resume nonce must be 1 to 65535 bytes", "deviceBind: malformed resume nonce");
    }
    return Buffer.concat([
        C,
        ...k(e),
        _(r.length),
        r,
        U(e.issuedAtMs)
    ]);
}
async function uqr({ deviceUUID, nonce, key, now = Date.now, ...rest }) {
    let s = now();
    let u = await key.sign(K({
        ...rest,
        deviceUuid: deviceUUID,
        issuedAtMs: s
    }, nonce));
    return {
        deviceUUID,
        kid: kMe + deviceUUID,
        signature: u.toString("base64"),
        issuedAt: new Date(s).toISOString()
    };
}
async function q() {
    return (await R()).ok;
}
async function R() {
    let { trustedDeviceTokenForBind } = await import("/$bunfs/root/chunk-9k4ckwrp.js");
    return trustedDeviceTokenForBind(undefined);
}
async function Wzt(e) {
    if (e.launchedFromHome === undefined) {
        await t0e();
    }
    if ((e.launchedFromHome ?? Ynt)()) {
        return mp("launched_from_home");
    }
    let n;
    try {
        n = (e.isEgressAllowed ?? age)();
    } catch  {
        n = false;
    }
    if (!n) {
        return mp("egress");
    }
    let r = fqr({
        storedAccountUuid: e.accountUuid,
        hostAccountUuid: await (e.getHostAccountUuid ? e.getHostAccountUuid() : mqr(e.credentials))
    });
    if (r.status === "missing") {
        return mp("account");
    }
    if (r.status === "mismatch") {
        return mp("account_mismatch");
    }
    if (await (e.hasDeviceProof ?? q)().catch(()=>false)) {
        return oh({
            accountUuid: r.accountUuid,
            source: r.source
        });
    }
    return mp("no_device_proof");
}
async function Jjs(e) {
    let n = e.isEnabled ?? dR;
    try {
        if (!await n()) {
            return mp("gate");
        }
    } catch (error) {
        return mp(y("gate", error));
    }
    let r = "no_device_proof";
    let o = await Wzt({
        ...e,
        hasDeviceProof: e.hasDeviceProof ?? (async ()=>{
            let m = await R();
            if (!m.ok && m.error !== "not_given") {
                r = m.error;
            }
            return m.ok;
        })
    });
    if (!o.ok) {
        let m = V(o.error);
        if (o.error === "no_device_proof") {
            return mp(r);
        }
        return m;
    }
    i("tengu_device_bind_account", {
        source: d(o.value.source)
    });
    let { accountUuid } = o.value;
    let s = e.displayName ?? Q7e();
    let u = false;
    let a = async (relearn)=>{
        try {
            return oh(await Gzt(accountUuid, s, e.credentials, {
                relearn
            }));
        } catch (error) {
            if (!(error instanceof TMe) || e.confirmReenroll === undefined || u) {
                return mp(y("register", error));
            }
            u = true;
            if (await j(e.confirmReenroll)) {
                return h(error.refusedPublicKey);
            }
            return mp(y("register", error));
        }
    };
    let h = async (refusedPublicKey)=>{
        try {
            return oh(await Zr("device_reenroll", ()=>UYo(accountUuid, s, refusedPublicKey, e.credentials), W));
        } catch (error) {
            return mp(y("register", error));
        }
    };
    let p = async (m)=>{
        let v = await a(m);
        if (!v.ok) {
            return v;
        }
        let { deviceUUID, key } = v.value;
        return oh({
            deviceUUID,
            held: {
                accountUuid,
                rowPk: deviceUUID,
                key
            },
            sign: async ()=>{
                try {
                    let B = await S(e.orgUuid, accountUuid, deviceUUID, key);
                    g("device_bind");
                    return B;
                } catch (error) {
                    y("sign", error);
                    return;
                }
            },
            reregister: async ()=>{
                await jSn(accountUuid, e.credentials).catch((B)=>{
                    t(`[deviceBind] could not forget the cached device id: ${B instanceof Error ? B.message : String(B)}`);
                });
                return p(true);
            }
        });
    };
    return p(false);
}
function k({ orgUuid, accountUuid, sessionUuid, deviceUuid, request }) {
    let s = Buffer.from(request.workId, "utf8");
    let u = Buffer.from(request.environmentId, "utf8");
    if (s.length === 0 || u.length === 0 || s.length > 65535 || u.length > 65535) {
        throw new x("deviceBind: tool-host link request ids must be 1 to 65535 bytes", "deviceBind: malformed link request");
    }
    return [
        Q6(orgUuid),
        Q6(accountUuid),
        Q6(sessionUuid),
        Q6(deviceUuid),
        _(s.length),
        s,
        _(u.length),
        u
    ];
}
function _(e) {
    let n = Buffer.alloc(2);
    n.writeUInt16BE(e);
    return n;
}
function U(issuedAtMs) {
    let n = Buffer.alloc(8);
    n.writeBigUInt64BE(BigInt(issuedAtMs));
    return n;
}
function V(error) {
    i("tengu_device_bind_skipped", {
        reason: d(error),
        ...lge(error)
    });
    return mp(error);
}
async function j(confirmReenroll) {
    try {
        let confirmed = await confirmReenroll();
        i("tengu_device_reenroll", {
            confirmed,
            prompt_failed: false
        });
        return confirmed;
    } catch (error) {
        t(`[deviceBind] could not ask whether to register this machine again: ${l(error)}`);
        i("tengu_device_reenroll", {
            confirmed: false,
            prompt_failed: true
        });
        return false;
    }
}
function W(e) {
    return e instanceof x && e.errorClass || "unexpected_error";
}
function y(e, error) {
    i("tengu_device_bind_failed", {
        phase: d(e),
        limit_reached: error instanceof J7e,
        registration_unavailable: error instanceof Gze,
        revoked: error instanceof TMe
    });
    f("device_bind", error instanceof x && error.errorClass || e);
    t(`[deviceBind] continuing unbound: ${error instanceof Error ? error.message : String(error)}`);
    if (error instanceof J7e) {
        return "limit_reached";
    }
    if (error instanceof Gze) {
        return "registration_unavailable";
    }
    if (error instanceof TMe) {
        return "device_revoked";
    }
    if (error instanceof x && error.errorClass === "no_keychain") {
        return "no_keychain";
    }
    return e;
}
export { kMe, Q6, cqr, z7n, dqr, uqr, Wzt, Jjs };
