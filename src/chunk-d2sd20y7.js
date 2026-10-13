import { l, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { RBe, xBe, Oq as getCached, LN as setCached, o0t, s0t, Kxr, Yxr, bPo, Mpt, Xxr, I2n } from "/$bunfs/root/chunk-ctt36bn8.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { X5e, OIs, rRr } from "/$bunfs/root/chunk-3yz9zdww.js";
import { ktn } from "/$bunfs/root/chunk-dw3y3qpx.js";
import { ru } from "/$bunfs/root/chunk-m6z3m7rx.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { mkdirSync, writeFileSync } from "fs";
import { unlink } from "fs/promises";
function LY() {
    return a.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review";
}
const C = "/home/claude/.claude/remote";
const wellKnownPath = `${C}/.oauth_token`;
const aWn = `${C}/.api_key`;
const ise = `${C}/.session_ingress_token`;
const Two = [
    wellKnownPath,
    aWn,
    ise
];
const bxe = ktn;
function k(wellKnownPath, n, fileLabel, { skipInReviewOrigin = false } = {}) {
    if (!a.CLAUDE_CODE_REMOTE) {
        return;
    }
    if (ru()) {
        t(`Skipping ${fileLabel} disk persistence in a tool server's daemon`);
        return;
    }
    if (skipInReviewOrigin && LY()) {
        t(`Skipping ${fileLabel} disk persistence in review-origin session`);
        return;
    }
    try {
        mkdirSync(C, {
            recursive: true,
            mode: 448
        });
        writeFileSync(wellKnownPath, n, {
            encoding: "utf8",
            mode: 384
        });
        t(`Persisted ${fileLabel} to ${wellKnownPath} for subprocess access`);
    } catch (error) {
        t(`Failed to persist ${fileLabel} to disk (non-fatal): ${l(error)}`, {
            level: "error"
        });
    }
}
async function fRs() {
    if (!a.CLAUDE_CODE_REMOTE) {
        return;
    }
    for (let e of Two){
        try {
            await unlink(e);
            t(`Removed the credential file at ${e}`);
        } catch (error) {
            if (!z(error)) {
                t(`Failed to remove the credential file at ${e} (non-fatal): ${v(error) ?? "unknown error"}`, {
                    level: "error"
                });
            }
        }
    }
}
function h(readPath, fileLabel) {
    return IMt(readPath, fileLabel).token;
}
function IMt(e, n) {
    if (ru()) {
        return {
            token: null,
            miss: "enoent"
        };
    }
    try {
        let token = X5e(e, {
            maxBytes: bxe,
            regularFileOnly: true
        }).trim();
        if (!token) {
            return {
                token: null,
                miss: "empty"
            };
        }
        t(`Read ${n} from well-known file ${e}`);
        return {
            token
        };
    } catch (error) {
        if (z(error)) {
            return {
                token: null,
                miss: "enoent"
            };
        }
        t(`Failed to read ${n} from ${e}: ${l(error)}`, {
            level: "debug"
        });
        return {
            token: null,
            miss: v(error) === "EACCES" ? "eacces" : "other"
        };
    }
}
async function F(wellKnownPath, n, fileLabel, credentials, { skipInReviewOrigin = false } = {}) {
    if (!a.CLAUDE_CODE_REMOTE) {
        return;
    }
    if (ru()) {
        t(`Skipping ${fileLabel} disk persistence in a tool server's daemon`);
        return;
    }
    if (skipInReviewOrigin && LY()) {
        t(`Skipping ${fileLabel} disk persistence in review-origin session`);
        return;
    }
    let p = await credentials.writeHandoffCredential(wellKnownPath, n);
    if (p.state === "written") {
        t(`Persisted ${fileLabel} to ${wellKnownPath} for subprocess access`);
        return;
    }
    t(`Failed to persist ${fileLabel} to disk (non-fatal): ${p.code ?? "unknown error"}`, {
        level: "error"
    });
}
async function w(readPath, fileLabel, credentials) {
    if (ru()) {
        return null;
    }
    let o = await credentials.readHandoffCredential(readPath, {
        symlinkAtPath: "follow"
    });
    switch(o.state){
        case "present":
            {
                let s = o.contents.trim();
                if (!s) {
                    return null;
                }
                t(`Read ${fileLabel} from well-known file ${readPath}`);
                return s;
            }
        case "absent":
            return null;
        case "read-failed":
            t(`Failed to read ${fileLabel} from ${readPath}: ${o.code ?? "unknown error"}`, {
                level: "debug"
            });
            return null;
    }
}
function y({ envVar, wellKnownPath, readPath = wellKnownPath, label, fileLabel = label, getCached, setCached, skipInReviewOrigin = false }) {
    let m = getCached();
    if (m !== undefined) {
        return m;
    }
    let g = process.env[envVar];
    if (!g) {
        let i = h(readPath, fileLabel);
        setCached(i);
        return i;
    }
    let f = parseInt(g, 10);
    if (Number.isNaN(f)) {
        t(`${envVar} must be a valid file descriptor number, got: ${g}`, {
            level: "error"
        });
        setCached(null);
        return null;
    }
    if (rRr(f)) {
        let i = !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function";
        let u = i ? GFe(f, label) : h(readPath, fileLabel);
        if (i) {
            delete process.env[envVar];
            Mpt(envVar);
        }
        setCached(u);
        if (u && i) {
            k(wellKnownPath, u, fileLabel, {
                skipInReviewOrigin
            });
        }
        return u;
    }
    try {
        let i = `/proc/self/fd/${f}`;
        let u = X5e(i, {
            maxBytes: bxe
        }).trim();
        if (!u) {
            t(`File descriptor contained empty ${label}`, {
                level: "error"
            });
            setCached(null);
            return null;
        }
        t(`Successfully read ${label} from file descriptor ${f}`);
        setCached(u);
        k(wellKnownPath, u, fileLabel, {
            skipInReviewOrigin
        });
        return u;
    } catch (error) {
        t(`Failed to read ${label} from file descriptor ${f}: ${l(error)}`, {
            level: "error"
        });
        let u = h(readPath, fileLabel);
        if (u) {
            setCached(u);
            return u;
        }
        let A = v(error);
        if ((A === "EACCES" || A === "EPERM") && !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function") {
            let d = GFe(f, label);
            delete process.env[envVar];
            Mpt(envVar);
            if (d) {
                setCached(d);
                k(wellKnownPath, d, fileLabel, {
                    skipInReviewOrigin
                });
                return d;
            }
        }
        setCached(null);
        return null;
    }
}
function GFe(e, n) {
    try {
        t(`Reading ${n} from inherited descriptor ${e} (until newline or end-of-stream)`);
        let r = OIs(e, {
            maxBytes: bxe
        }).trim();
        if (!r) {
            t(`File descriptor ${e} contained empty ${n}`, {
                level: "error"
            });
            return null;
        }
        t(`Successfully read ${n} directly from inherited descriptor ${e}`);
        return r;
    } catch (error) {
        t(`Failed to read ${n} directly from descriptor ${e}: ${l(error)}`, {
            level: "error"
        });
        return null;
    }
}
async function D({ envVar, wellKnownPath, readPath = wellKnownPath, label, fileLabel = label, getCached, setCached, credentials, skipInReviewOrigin = false }) {
    let g = getCached();
    if (g !== undefined) {
        return g;
    }
    let f = process.env[envVar];
    if (!f) {
        let d = await w(readPath, fileLabel, credentials);
        return T(getCached, setCached, d);
    }
    let i = parseInt(f, 10);
    if (Number.isNaN(i)) {
        t(`${envVar} must be a valid file descriptor number, got: ${f}`, {
            level: "error"
        });
        setCached(null);
        return null;
    }
    let u = !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function";
    let A = ()=>{
        delete process.env[envVar];
        Mpt(envVar);
    };
    if (rRr(i)) {
        if (!u) {
            let _ = await w(readPath, fileLabel, credentials);
            return T(getCached, setCached, _);
        }
        let d = GFe(i, label);
        A();
        setCached(d);
        if (d) {
            await F(wellKnownPath, d, fileLabel, credentials, {
                skipInReviewOrigin
            });
        }
        return d;
    }
    try {
        let d = `/proc/self/fd/${i}`;
        let _ = X5e(d, {
            maxBytes: bxe
        }).trim();
        if (!_) {
            t(`File descriptor contained empty ${label}`, {
                level: "error"
            });
            setCached(null);
            return null;
        }
        t(`Successfully read ${label} from file descriptor ${i}`);
        setCached(_);
        await F(wellKnownPath, _, fileLabel, credentials, {
            skipInReviewOrigin
        });
        return _;
    } catch (error) {
        t(`Failed to read ${label} from file descriptor ${i}: ${l(error)}`, {
            level: "error"
        });
        let _ = await w(readPath, fileLabel, credentials);
        if (_) {
            return T(getCached, setCached, _);
        }
        let P = v(error);
        if ((P === "EACCES" || P === "EPERM") && u) {
            let S = GFe(i, label);
            A();
            if (S) {
                setCached(S);
                await F(wellKnownPath, S, fileLabel, credentials, {
                    skipInReviewOrigin
                });
                return S;
            }
        }
        return T(getCached, setCached, null);
    }
}
function T(getCached, setCached, r) {
    let o = getCached();
    if (o !== undefined) {
        return o;
    }
    setCached(r);
    return r;
}
function Rdt() {
    return Boolean(process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH);
}
async function mRs({ attempts = 10, delayMs = 100 } = {}) {
    for(let r = 0; r < attempts && Rdt(); r++){
        await Q(delayMs);
        lWn();
    }
    return !Rdt();
}
function lWn() {
    let CLAUDE_BG_AUTH_SNAPSHOT_PATH = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
    if (!CLAUDE_BG_AUTH_SNAPSHOT_PATH) {
        return;
    }
    let n;
    try {
        n = L(CLAUDE_BG_AUTH_SNAPSHOT_PATH);
    } catch (error) {
        if (I(error)) {
            t(`bg auth snapshot busy, will retry on the next read: ${l(error)}`, {
                level: "warn"
            });
            return v(error);
        }
        if (!z(error)) {
            t(`Failed to consume bg auth snapshot: ${l(error)}`, {
                level: "warn"
            });
        }
    }
    delete process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
    if (n === undefined) {
        return;
    }
    try {
        unlink(CLAUDE_BG_AUTH_SNAPSHOT_PATH).catch(()=>{});
        let r = JSON.parse(n);
        if (typeof r?.gatewayToken === "string" && r.gatewayToken) {
            I2n(r.gatewayToken);
            t("Consumed gateway token from bg auth snapshot");
            return;
        }
        if (typeof r?.accessToken !== "string" || !r.accessToken) {
            t("bg auth snapshot missing accessToken", {
                level: "warn"
            });
            return;
        }
        setCached(r.accessToken);
        o0t(true);
        if (Array.isArray(r.scopes) && r.scopes.length > 0) {
            s0t(r.scopes);
        }
        if (r.subscriptionType) {
            process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE = r.subscriptionType;
        }
        if (r.rateLimitTier) {
            process.env.CLAUDE_CODE_RATE_LIMIT_TIER = r.rateLimitTier;
        }
        t("Consumed bg auth snapshot from sockDir");
    } catch (error) {
        if (!z(error)) {
            t(`Failed to consume bg auth snapshot: ${l(error)}`, {
                level: "warn"
            });
        }
    }
}
async function Awo(e) {
    let CLAUDE_BG_AUTH_SNAPSHOT_PATH = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
    if (!CLAUDE_BG_AUTH_SNAPSHOT_PATH) {
        return;
    }
    let r = await e.readHandoffCredential(CLAUDE_BG_AUTH_SNAPSHOT_PATH, {
        symlinkAtPath: a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse"
    });
    if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH !== CLAUDE_BG_AUTH_SNAPSHOT_PATH) {
        return;
    }
    switch(r.state){
        case "absent":
            a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH");
            return;
        case "read-failed":
            if (r.code !== "EBUSY" && r.code !== "EPERM" && !(r.code === "EACCES" && O() === "windows")) {
                a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH");
            }
            t(`Failed to consume bg auth snapshot: ${r.code ?? "unknown error"}`, {
                level: "warn"
            });
            return;
        case "present":
            break;
    }
    a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH");
    e.discardSpentCredentialFile(CLAUDE_BG_AUTH_SNAPSHOT_PATH).catch(()=>{});
    try {
        let o = JSON.parse(r.contents);
        if (typeof o?.gatewayToken === "string" && o.gatewayToken) {
            I2n(o.gatewayToken);
            t("Consumed gateway token from bg auth snapshot");
            return;
        }
        if (typeof o?.accessToken !== "string" || !o.accessToken) {
            t("bg auth snapshot missing accessToken", {
                level: "warn"
            });
            return;
        }
        setCached(o.accessToken);
        o0t(true);
        if (Array.isArray(o.scopes) && o.scopes.length > 0) {
            s0t(o.scopes);
        }
        if (o.subscriptionType) {
            a.set("CLAUDE_CODE_SUBSCRIPTION_TYPE", String(o.subscriptionType));
        }
        if (o.rateLimitTier) {
            a.set("CLAUDE_CODE_RATE_LIMIT_TIER", String(o.rateLimitTier));
        }
        t("Consumed bg auth snapshot from sockDir");
    } catch (error) {
        t(`Failed to consume bg auth snapshot: ${l(error)}`, {
            level: "warn"
        });
    }
}
function N8(e) {
    return (process.env[e]?.trim() ?? "") !== "" || bPo(e);
}
function vP() {
    lWn();
    return y({
        envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
        wellKnownPath,
        label: "OAuth token",
        getCached,
        setCached,
        skipInReviewOrigin: true
    });
}
async function vTr(e) {
    await Awo(e);
    return Cwo(e);
}
async function Cwo(e) {
    return D({
        envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
        wellKnownPath,
        label: "OAuth token",
        getCached,
        setCached,
        credentials: e,
        skipInReviewOrigin: true
    });
}
function xdt() {
    let e = Xxr();
    if (e !== undefined) {
        return e;
    }
    lWn();
    let n = Xxr();
    if (n !== undefined) {
        return n;
    }
    if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH) {
        return null;
    }
    let a_CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR = a.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR;
    let o = a_CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR ? parseInt(a_CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR, 10) : Number.NaN;
    let s = Number.isNaN(o) || a.CLAUDE_CODE_REMOTE || typeof process.send === "function" || !rRr(o) ? null : GFe(o, "gateway token");
    I2n(s);
    delete process.env.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR;
    return s;
}
function ase() {
    return y({
        envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
        wellKnownPath: aWn,
        label: "API key",
        getCached: Kxr,
        setCached: Yxr
    });
}
async function gRs(e) {
    return D({
        envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
        wellKnownPath: aWn,
        label: "API key",
        getCached: Kxr,
        setCached: Yxr,
        credentials: e
    });
}
function I(error) {
    let n = v(error);
    return n === "EBUSY" || n === "EPERM" || n === "EACCES" && O() === "windows";
}
function L(CLAUDE_BG_AUTH_SNAPSHOT_PATH) {
    let n = ()=>X5e(CLAUDE_BG_AUTH_SNAPSHOT_PATH, {
            maxBytes: bxe,
            symlinkAtPath: a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse",
            regularFileOnly: true
        });
    try {
        return n();
    } catch (error) {
        if (I(error)) {
            return n();
        }
        throw error;
    }
}
function b() {
    return y({
        envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
        wellKnownPath: ise,
        readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? ise,
        label: "token",
        fileLabel: "session ingress token",
        getCached: RBe,
        setCached: xBe,
        skipInReviewOrigin: true
    });
}
async function hRs(e) {
    if (process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN) {
        return;
    }
    await D({
        envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
        wellKnownPath: ise,
        readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? ise,
        label: "token",
        fileLabel: "session ingress token",
        getCached: RBe,
        setCached: xBe,
        credentials: e,
        skipInReviewOrigin: true
    });
}
function qc() {
    let CLAUDE_CODE_SESSION_ACCESS_TOKEN = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
    if (CLAUDE_CODE_SESSION_ACCESS_TOKEN) {
        return CLAUDE_CODE_SESSION_ACCESS_TOKEN;
    }
    return b();
}
function cWn() {
    return qc() !== null;
}
function DF() {
    let e = qc();
    if (!e) {
        return {};
    }
    if (e.startsWith("sk-ant-sid")) {
        let n = {
            Cookie: `sessionKey=${e}`
        };
        let r = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
        if (r) {
            n["X-Organization-Uuid"] = r;
        }
        return n;
    }
    return ISe(e);
}
function ISe(e) {
    if (e) {
        return {
            Authorization: `Bearer ${e}`
        };
    }
    return {};
}
function dWn(e) {
    process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = e;
}
export { LY, wellKnownPath as _xe, aWn, ise, Two, bxe, fRs, IMt, GFe, Rdt, mRs, lWn, Awo, N8, vP, vTr, Cwo, xdt, ase, gRs, hRs, qc, cWn, DF, ISe, dWn };
