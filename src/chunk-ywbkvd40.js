import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import { no } from "/$bunfs/root/chunk-c56kpkt7.js";
import { Yi } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Qg } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { CT, UD } from "/$bunfs/root/chunk-0xbdwcqr.js";
import { ZKe, blo } from "/$bunfs/root/chunk-0w84e1m6.js";
import { sV, T_e } from "/$bunfs/root/chunk-2ya7enrh.js";
import { i6r } from "/$bunfs/root/chunk-4svhb6tt.js";
import { Rb } from "/$bunfs/root/chunk-5s4qvyjz.js";
import { G4r } from "/$bunfs/root/chunk-1x7naexb.js";
const w = [
    "CLAUDE_BRIDGE_BASE_URL",
    "USE_LOCAL_OAUTH",
    "USE_STAGING_OAUTH",
    "CLAUDE_LOCAL_OAUTH_API_BASE",
    "CLAUDE_CODE_CUSTOM_OAUTH_URL"
];
function v() {
    let e = Qg();
    if (e !== undefined && w.some((r)=>process.env[r] !== e[r])) {
        return;
    }
    try {
        return UD();
    } catch  {
        return;
    }
}
function p(reason, r = "bridge_inbox_fetch") {
    m(r, reason);
    return {
        ok: false,
        reason
    };
}
async function g(e) {
    let supervisedBridgeSession = no().supervisedBridgeSession;
    if (supervisedBridgeSession === null) {
        return {
            stop: "no_bridge"
        };
    }
    if (Tt()) {
        return {
            stop: "traffic_disabled"
        };
    }
    if (!sV()) {
        return {
            stop: "no_token"
        };
    }
    let baseUrl = v();
    if (baseUrl === undefined) {
        return {
            stop: "base_url_override"
        };
    }
    let { credentials, storageV5 } = e;
    let i = await CT(credentials);
    if (i === undefined) {
        return {
            stop: "no_token"
        };
    }
    let s = await f(supervisedBridgeSession, e, i);
    if (s) {
        return {
            stop: s
        };
    }
    try {
        await Yi({
            credentials,
            storageV5
        });
    } catch (error) {
        t(`[bridge] supervised send: token refresh failed: ${l(error)}`, {
            level: "error"
        });
    }
    let accessToken = await CT(credentials);
    if (accessToken === undefined) {
        return {
            stop: "no_token"
        };
    }
    let deviceToken = await Rb();
    let c = await f(supervisedBridgeSession, e, accessToken, {
        fresh: true
    });
    if (c) {
        return {
            stop: c
        };
    }
    return {
        send: {
            sessionId: supervisedBridgeSession.bridgeSessionId,
            baseUrl,
            accessToken,
            deviceToken
        }
    };
}
function iWs() {
    return no().supervisedBridgeSession !== null;
}
async function aWs(e, repo, prNumber, o) {
    let n = await g(o);
    if ("stop" in n) {
        return p(n.stop, blo(e));
    }
    let { sessionId, baseUrl, accessToken, deviceToken } = n.send;
    return ZKe(e, {
        sessionId,
        repo,
        prNumber,
        baseUrl,
        getAccessToken: ()=>accessToken,
        getTrustedDeviceToken: ()=>Promise.resolve(deviceToken)
    });
}
function S(supervisedBridgeSession, { credentials, storageV5 }, o) {
    if (supervisedBridgeSession.inboxOwner !== undefined) {
        return supervisedBridgeSession.inboxOwner;
    }
    let n = {
        mint: G4r({
            getAccessToken: ()=>o,
            storageV5,
            credentials,
            presetOwner: supervisedBridgeSession.owner
        }),
        changed: false
    };
    supervisedBridgeSession.inboxOwner = n;
    let i = (s)=>{
        if (!s && supervisedBridgeSession.inboxOwner === n) {
            supervisedBridgeSession.inboxOwner = undefined;
        }
    };
    n.mint.then((s)=>i(s.pin !== undefined || s.reason === "not_owner"), ()=>i(false));
    return n;
}
async function f(supervisedBridgeSession, r, d, o) {
    if (!T_e()) {
        return;
    }
    if (supervisedBridgeSession.owner === undefined) {
        return "owner_unverified";
    }
    let n = S(supervisedBridgeSession, r, d);
    if (n.changed) {
        return "owner_changed";
    }
    let i;
    try {
        i = await n.mint;
    } catch (error) {
        t(`[bridge] inbox fetch: owner pin could not be minted: ${l(error)}`, {
            level: "error"
        });
        return "owner_unverified";
    }
    if (i.pin === undefined) {
        switch(i.reason){
            case "no_token":
                return "no_token";
            case "no_identity":
            case "unresolved":
                return "owner_unverified";
            case "not_owner":
                n.changed = true;
                return "owner_changed";
            case "not_store_login":
                return "owner_unverified";
            case "disabled":
                return;
        }
    }
    if (o?.fresh || i.pin.identityLooksChanged()) {
        let s = await i.pin.confirmChanged(o);
        if (s === "changed" || n.changed) {
            n.changed = true;
            return "owner_changed";
        }
        if (s === "inconclusive") {
            return "owner_unverified";
        }
    }
    if (o?.fresh && !i.pin.ownerVerified()) {
        return "owner_unverified";
    }
    if (n.changed) {
        return "owner_changed";
    }
}
async function j4r(fileId, r) {
    let d = await g(r);
    if ("stop" in d) {
        return p(d.stop);
    }
    let { sessionId, baseUrl, accessToken, deviceToken } = d.send;
    return i6r({
        sessionId,
        fileId,
        baseUrl,
        getAccessToken: ()=>accessToken,
        getTrustedDeviceToken: ()=>Promise.resolve(deviceToken)
    });
}
export { iWs, aWs, j4r };
