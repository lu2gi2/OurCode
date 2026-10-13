import { x, l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { pp } from "/$bunfs/root/chunk-x0qpydt2.js";
import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { _, X, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ms, ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Gt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ss, En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { Ih } from "/$bunfs/root/chunk-z0brrd3r.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { Zl, _wo, Jn } from "/$bunfs/root/chunk-ph7a449e.js";
import { ja, Um } from "/$bunfs/root/chunk-hz24p3zh.js";
import { Tz } from "/$bunfs/root/chunk-vpp1psvz.js";
import { vmr } from "/$bunfs/root/chunk-46dhek9m.js";
import { age } from "/$bunfs/root/chunk-7zrhxtr7.js";
import { o, oe, _t, ue } from "/$bunfs/root/chunk-smx21d0k.js";
import { O, wPe } from "/$bunfs/root/chunk-79wfew46.js";
import { hostname } from "os";
import { createPrivateKey, createPublicKey, generateKeyPairSync, sign, randomBytes } from "crypto";
import { chmod } from "fs/promises";
import { dirname, join } from "path";
const J = p(()=>_t({
        privateKeyPkcs8B64: o(),
        rowPk: o().optional()
    }));
const Z = p(()=>_t({
        keys: ue(o(), oe())
    }));
function u(e, r) {
    let n = e?.keys[r];
    if (n === undefined) {
        return;
    }
    let i = J().safeParse(n);
    if (i.success) {
        return i.data;
    }
}
const h = Symbol("deviceKeyStore.NO_KEYCHAIN");
function w(e) {
    return e === Zl || e === h;
}
const C = "Claude Code-device-keys";
const timeout = 2000;
const U = 4032;
const ee = 44;
const re = new Set([
    37,
    50
]);
function A(e) {
    try {
        let r = Z().safeParse(X(e));
        if (r.success) {
            return r.data;
        }
        return undefined;
    } catch  {
        return;
    }
}
let H = Promise.resolve();
async function N(vmr, r) {
    let n = H;
    let i = Promise.withResolvers();
    H = i.promise;
    try {
        await n;
        let a = dirname(vmr());
        await ie().mkdir(a);
        let s = await ja(join(a, ".device-keys"), {
            realpath: false,
            retries: {
                retries: 10,
                minTimeout: 100,
                maxTimeout: 1000
            },
            stale: 15000,
            onCompromised: (d)=>t(`[deviceKeyStore] write lock compromised: ${l(d)}`, {
                    level: "warn"
                })
        });
        try {
            return await r();
        } finally{
            await Um(s, "[deviceKeyStore] write lock");
        }
    } finally{
        i.resolve();
    }
}
function te(vmr) {
    return {
        name: "file",
        async read () {
            let r = vmr();
            let n;
            try {
                n = await ie().readFile(r, {
                    encoding: "utf8"
                });
            } catch (error) {
                let d = v(error);
                if (d === "ENOENT") {
                    return null;
                }
                t(`[deviceKeyStore] file read failed: ${d ?? "unknown"}`, {
                    level: "warn"
                });
                return Zl;
            }
            if (!n.trim()) {
                return null;
            }
            let i = A(n);
            if (i) {
                return i;
            }
            let a = `${r}.corrupt-${Date.now()}-${process.pid}-${randomBytes(3).toString("hex")}`;
            try {
                await ss(r, a);
            } catch (error) {
                t(`[deviceKeyStore] device-key file is not a device-key document and could not be set aside: ${v(error) ?? "unknown"}`, {
                    level: "warn"
                });
                return Zl;
            }
            t(`[deviceKeyStore] device-key file was not a device-key document; set aside as ${a} and starting fresh`, {
                level: "warn"
            });
            f("device_key_store", "corrupt_quarantined");
            return null;
        },
        async write (r) {
            let n = vmr();
            try {
                await ie().mkdir(dirname(n));
                await En(n, _(r), 384);
                await chmod(n, 384);
                return true;
            } catch (error) {
                t(`[deviceKeyStore] file write failed: ${v(error) ?? "unknown"}`, {
                    level: "warn"
                });
                return false;
            }
        },
        withWriteLock (r) {
            return N(vmr, r);
        }
    };
}
function ae(vmr) {
    return {
        name: "keychain",
        async read () {
            let { stdout, code } = await it("security", [
                "find-generic-password",
                "-a",
                Tz(),
                "-w",
                "-s",
                C
            ], {
                useCwd: false,
                preserveOutputOnError: false,
                timeout
            });
            if (code === ee) {
                return null;
            }
            if (re.has(code)) {
                t(`[deviceKeyStore] this account has no login keychain (security exited ${code}); it holds no device key`);
                return h;
            }
            if (code !== 0) {
                t(`[deviceKeyStore] keychain read failed: security exited ${code}`, {
                    level: "warn"
                });
                return Zl;
            }
            let i = stdout.trim();
            if (!i) {
                return null;
            }
            let a = A(i);
            if (!a) {
                t("[deviceKeyStore] keychain item is not a device-key document", {
                    level: "warn"
                });
                return Zl;
            }
            return a;
        },
        async write (r) {
            let n = Tz();
            let i = Buffer.from(_(r), "utf8").toString("hex");
            let input = `add-generic-password -U -a "${n}" -s "${C}" -X "${i}"
`;
            try {
                return (input.length <= U ? await Ih("security", [
                    "-i"
                ], {
                    input,
                    stdio: [
                        "pipe",
                        "pipe",
                        "pipe"
                    ],
                    reject: false,
                    timeout
                }) : await Ih("security", [
                    "add-generic-password",
                    "-U",
                    "-a",
                    n,
                    "-s",
                    C,
                    "-X",
                    i
                ], {
                    stdio: [
                        "ignore",
                        "pipe",
                        "pipe"
                    ],
                    reject: false,
                    timeout
                })).exitCode === 0;
            } catch  {
                return false;
            }
        },
        withWriteLock (r) {
            return N(vmr, r);
        }
    };
}
const se = te(vmr);
const Ve = ae(vmr);
let B;
function K() {
    if (B) {
        return B;
    }
    return se;
}
function R() {
    return fe;
}
const b = ze(new Set, (e)=>e.clear());
function z(e) {
    return e?.inMemory === true || O() === "windows" && _wo();
}
var fe = {
    async load (e, r) {
        let n = await L(e, r, "load");
        let i = n && k(n.stored);
        if (n && i) {
            return E(e, n, i, r);
        }
    },
    async loadOrCreate (e, r) {
        let n = await L(e, r, "create");
        if (n) {
            let y = k(n.stored);
            if (y) {
                return E(e, n, y, r);
            }
            t("[deviceKey] stored device key is unreadable; minting a new one");
            if (n.location === "legacy") {
                await Y(e, n, r).catch((D)=>{
                    t(`[deviceKey] could not retire the unreadable device key: ${l(D)}`);
                });
            }
        }
        let i = await ge(e, r);
        let a = i && k(i.stored);
        if (i && a) {
            t(`[deviceKey] adopting the device key already held in the ${i.location === "item" ? "device-key item" : "credentials store"}`);
            return E(e, i, a, r);
        }
        let s = {
            privateKeyPkcs8B64: generateKeyPairSync("ec", {
                namedCurve: "P-256"
            }).privateKey.export({
                type: "pkcs8",
                format: "der"
            }).toString("base64")
        };
        let d;
        try {
            d = z(r) ? await ve(e, s, r) : await me(e, s);
        } catch (error) {
            throw error instanceof x ? error : new x(`deviceRegistry: device key could not be persisted (${l(error)})`, "deviceRegistry: device key not persisted", "key_not_persisted");
        }
        let c = d && k(d.stored);
        if (!d || !c) {
            throw new x("deviceRegistry: device key could not be persisted", "deviceRegistry: device key not persisted", "key_not_persisted");
        }
        return E(e, d, c, r);
    }
};
function me(e, r) {
    let n = K();
    return n.withWriteLock(async ()=>{
        let i = await n.read();
        if (w(i)) {
            return T(i);
        }
        let a = u(i, e);
        if (a && k(a)) {
            return {
                location: "item",
                stored: a
            };
        }
        if (!await n.write({
            ...i,
            keys: {
                ...i?.keys,
                [e]: r
            }
        })) {
            f("device_key_store", "item_write_failed");
            return;
        }
        let d = await n.read();
        let c = w(d) ? undefined : u(d, e);
        if (!c) {
            f("device_key_store", "readback_mismatch");
        }
        return c && {
            location: "item",
            stored: c
        };
    });
}
async function ve(e, r, n) {
    await Jn().mutate((a)=>{
        if (a.coworkRemoteDevice?.[e]) {
            return a;
        }
        return {
            ...a,
            coworkRemoteDevice: {
                ...a.coworkRemoteDevice,
                [e]: r
            }
        };
    }, n);
    let i = (await Jn().readAsync(n))?.coworkRemoteDevice?.[e];
    return i && {
        location: "legacy",
        stored: i
    };
}
async function L(e, r, n) {
    let i = (await Jn().readAsync(r))?.coworkRemoteDevice?.[e];
    if (z(r)) {
        if (i || r?.inMemory === true) {
            return i && {
                location: "legacy",
                stored: i
            };
        }
        let d = await K().read();
        let c = w(d) ? undefined : u(d, e);
        return c && {
            location: "item",
            stored: c
        };
    }
    let a = await K().read();
    if (w(a)) {
        if (i && k(i)) {
            if (a === Zl) {
                f("device_key_store", "item_unreadable_using_legacy");
            }
            return {
                location: "legacy",
                stored: i
            };
        }
        if (a === h && n === "load") {
            return;
        }
        return T(a);
    }
    let s = u(a, e);
    if (s) {
        if (i?.privateKeyPkcs8B64 === s.privateKeyPkcs8B64 && (n === "create" || !b.has(e))) {
            await M(e, s.privateKeyPkcs8B64, r);
        }
        return {
            location: "item",
            stored: s
        };
    }
    if (!i) {
        return;
    }
    if (n === "load" && b.has(e)) {
        return {
            location: "legacy",
            stored: i
        };
    }
    return {
        location: await we(e, i, r),
        stored: i
    };
}
function T(e) {
    if (e === h) {
        f("device_key_store", "no_keychain");
        throw new x("deviceRegistry: this account has no login keychain to hold a device key", "deviceRegistry: no login keychain", "no_keychain");
    }
    f("device_key_store", "item_read_failed");
    throw new x("deviceRegistry: the device-key store could not be read", "deviceRegistry: device-key store unreadable", "key_store_unreadable");
}
async function ge(e, r) {
    if (r?.inMemory !== true) {
        let i = await K().read();
        if (w(i)) {
            return T(i);
        }
        let a = u(i, e);
        if (a && k(a)) {
            return {
                location: "item",
                stored: a
            };
        }
    }
    let n = Jn();
    for (let i of [
        {
            inaccessibleAs: "failure"
        },
        undefined
    ]){
        let a = await (n.readAsyncStrict?.(r, i) ?? n.readAsync(r));
        if (a === Zl) {
            f("device_key_store", "legacy_read_failed");
            throw new x("deviceRegistry: the credentials store could not be read for a device key", "deviceRegistry: credentials store unreadable", "key_store_unreadable");
        }
        let s = a?.coworkRemoteDevice?.[e];
        if (s && k(s)) {
            return {
                location: "legacy",
                stored: s
            };
        }
    }
}
async function we(e, r, n) {
    let i;
    let a = K();
    try {
        i = await a.withWriteLock(async ()=>{
            let s = await a.read();
            if (w(s)) {
                return S(e, s === h ? "no_keychain" : "item_read_failed");
            }
            if (u(s, e) === undefined) {
                if (!await a.write({
                    ...s,
                    keys: {
                        ...s?.keys,
                        [e]: r
                    }
                })) {
                    return S(e, "item_write_failed");
                }
            }
            let d = await a.read();
            let c = w(d) ? undefined : u(d, e);
            if (c === undefined) {
                return S(e, "readback_mismatch");
            }
            if (c.privateKeyPkcs8B64 !== r.privateKeyPkcs8B64 || c.rowPk !== r.rowPk) {
                return S(e, "readback_foreign_key");
            }
            return "item";
        });
    } catch (error) {
        t(`[deviceKey] could not take the device-key lock to move the device key: ${l(error)}`);
        return S(e, "lock_unavailable");
    }
    if (i === "item") {
        await M(e, r.privateKeyPkcs8B64, n);
    }
    return i;
}
function S(e, r) {
    b.add(e);
    t(`[deviceKey] device key stays in the credentials store for now (${r})`);
    f("device_key_store", r);
    return "legacy";
}
async function M(e, privateKeyPkcs8B64, n) {
    let i = false;
    try {
        if ((await Jn().mutate((s)=>{
            if (s.coworkRemoteDevice?.[e]?.privateKeyPkcs8B64 !== privateKeyPkcs8B64) {
                return s;
            }
            i = true;
            let { [e]: d, ...rest } = s.coworkRemoteDevice;
            return {
                ...s,
                coworkRemoteDevice: rest
            };
        }, n)).success) {
            if (i) {
                t("[deviceKey] moved the device key out of the credentials store into its own item");
                g("device_key_store");
            }
            return;
        }
    } catch (error) {
        t(`[deviceKey] could not clear the legacy device key: ${l(error)}`);
    }
    S(e, "legacy_delete_failed");
}
function k(e) {
    try {
        let r = createPrivateKey({
            key: Buffer.from(e.privateKeyPkcs8B64, "base64"),
            format: "der",
            type: "pkcs8"
        });
        if (r.asymmetricKeyType === "ec" && r.asymmetricKeyDetails?.namedCurve === "prime256v1") {
            return r;
        }
        return undefined;
    } catch  {
        return;
    }
}
function E(e, { location, stored }, i, a) {
    return {
        rowPk: stored.rowPk,
        publicKeySpkiB64: createPublicKey(i).export({
            type: "spki",
            format: "der"
        }).toString("base64"),
        sign: async (s)=>sign("sha256", s, {
                key: i,
                dsaEncoding: "ieee-p1363"
            }),
        setRowPk: (s)=>j(e, {
                location,
                stored
            }, (d)=>{
                if (d.rowPk === s) {
                    return d;
                }
                if (s === undefined) {
                    let { rowPk, ...rest } = d;
                    return rest;
                }
                return {
                    ...d,
                    rowPk: s
                };
            }, a),
        drop: ()=>Y(e, {
                location,
                stored
            }, a)
    };
}
async function j(e, { location, stored }, i, a) {
    if (location === "legacy") {
        await Jn().mutate((d)=>{
            let c = d.coworkRemoteDevice?.[e];
            if (c?.privateKeyPkcs8B64 !== stored.privateKeyPkcs8B64) {
                return d;
            }
            let y = i(c);
            if (y === c) {
                return d;
            }
            let { [e]: D, ...rest } = d.coworkRemoteDevice ?? {};
            return {
                ...d,
                coworkRemoteDevice: y === undefined ? rest : {
                    ...rest,
                    [e]: y
                }
            };
        }, a);
        return;
    }
    let s = K();
    await s.withWriteLock(async ()=>{
        let d = await s.read();
        if (w(d)) {
            throw new x(`deviceRegistry: the ${s.name} device-key store could not be read`, "deviceRegistry: device-key store unreadable");
        }
        let c = u(d, e);
        if (d === null || c?.privateKeyPkcs8B64 !== stored.privateKeyPkcs8B64) {
            return;
        }
        let y = i(c);
        if (y === c) {
            return;
        }
        let { [e]: D, ...rest } = d.keys;
        if (!await s.write({
            ...d,
            keys: y === undefined ? rest : {
                ...rest,
                [e]: y
            }
        })) {
            throw new x(`deviceRegistry: the ${s.name} device-key store refused the write`, "deviceRegistry: device-key store write refused");
        }
    });
}
function Y(e, r, n) {
    return j(e, r, ()=>{}, n);
}
const ke = "/api/organizations/:orgUUID/cowork/remote_devices";
const _e = "cowork_remote_device_limit_reached";
const De = "account_session_invalid";
const Ke = "cowork_remote_device_registration_revoked";
async function FYo(e, r) {
    return (await zzt(e, r))?.rowPk;
}
async function pqr(e, r) {
    let n = await R().load(e, r);
    let i = Jt(n?.rowPk)?.toLowerCase();
    if (n && i) {
        return {
            rowPk: i,
            key: n
        };
    }
}
async function zzt(accountUuid, r, n) {
    if (n?.accountUuid === accountUuid) {
        return n;
    }
    let i = await pqr(accountUuid, r);
    return i && {
        accountUuid,
        ...i
    };
}
function he() {
    return "linux";
}
function Se(e) {
    return Ms(e.trim(), 255) || Ms(Q7e().trim(), 255);
}
async function Gzt(e, r, n, { relearn = false } = {}) {
    try {
        if (!age()) {
            throw new Gze("client egress policy");
        }
        return await Pe(e, r, n, relearn);
    } catch (error) {
        m("device_registry_register", error instanceof x && error.errorClass || "unexpected_error");
        throw error;
    }
}
async function Pe(e, r, credentials, relearn) {
    let a = await R().loadOrCreate(e, credentials);
    if (a.rowPk && !relearn) {
        g("device_registry_register");
        return {
            deviceUUID: a.rowPk,
            key: a
        };
    }
    let s = await Gt.post(ke, {
        display_name: Se(r),
        platform: he(),
        public_key: a.publicKeySpkiB64
    }, {
        auth: "teleport-org",
        headers: {
            "anthropic-beta": pp
        },
        timeout: 10000,
        validateStatus: ()=>true,
        credentials
    }).catch((D)=>{
        throw new x(`deviceRegistry: register request failed (${l(D)})`, "deviceRegistry: register request failed", "request_failed");
    });
    if (!s.ok) {
        throw new x(`deviceRegistry: register not sent (${s.reason})`, "deviceRegistry: register not sent", "not_sent");
    }
    t(`[deviceRegistry] register status=${s.status} request_id=${String(s.response.headers?.["request-id"] ?? "")}`);
    if (s.status === 400 && s.data?.error?.details?.error_code === _e) {
        throw new J7e;
    }
    if (s.status === 403 && s.data?.error?.details?.error_code !== De || s.status === 404) {
        throw new Gze(`HTTP ${s.status}`);
    }
    let d = s.data?.error?.details?.error_code;
    if (d === Ke || s.status === 409 && d === undefined) {
        throw new TMe(a.publicKeySpkiB64);
    }
    let c = Jt(s.data?.id);
    if (s.status !== 201 || c === null) {
        throw new x(`deviceRegistry: register ${s.status}: ${ne(String(_(s.data) ?? ""), 200)}`, "deviceRegistry: register HTTP error", "http_error");
    }
    if (s.data?.revoked_at !== null && s.data?.revoked_at !== undefined) {
        throw new TMe(a.publicKeySpkiB64);
    }
    let deviceUUID = c.toLowerCase();
    await a.setRowPk(deviceUUID).catch((D)=>{
        t(`[deviceRegistry] registered device row=${deviceUUID} but could not cache it: ${l(D)}`);
    });
    t(`[deviceRegistry] registered device row=${deviceUUID}`);
    g("device_registry_register");
    return {
        deviceUUID,
        key: a
    };
}
class J7e extends x {
    constructor(){
        super("deviceRegistry: account device limit reached", "deviceRegistry: account device limit reached", "limit_reached");
    }
}
class Gze extends x {
    constructor(e){
        super(`deviceRegistry: device registration unavailable for this account or organization (${e})`, "deviceRegistry: device registration unavailable for this account or organization", "registration_unavailable");
    }
}
class TMe extends x {
    refusedPublicKey;
    constructor(e){
        super("deviceRegistry: this machine's device registration was removed from the account", "deviceRegistry: device registration revoked", "registration_revoked");
        this.refusedPublicKey = e;
    }
}
async function UYo(e, r, n, i) {
    await W(e, n, i, 2);
    return Gzt(e, r, i, {
        relearn: true
    });
}
async function W(e, r, n, i) {
    let a = await R().load(e, n);
    if (a?.publicKeySpkiB64 !== r) {
        return;
    }
    if (i === 0) {
        throw V("it is still stored after being dropped");
    }
    await a.drop().catch((s)=>{
        throw V(l(s));
    });
    return W(e, r, n, i - 1);
}
function V(e) {
    return new x(`deviceRegistry: the removed device's key could not be retired (${e})`, "deviceRegistry: device key not retired", "key_not_retired");
}
async function jSn(e, r) {
    await (await R().load(e, r))?.setRowPk(undefined);
}
function Q7e() {
    return `Claude Code on ${hostname()} \xB7 ${wPe("linux")}`;
}
export { FYo, pqr, zzt, Gzt, J7e, Gze, TMe, UYo, jSn, Q7e };
