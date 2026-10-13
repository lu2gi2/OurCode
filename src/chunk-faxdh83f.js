import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { PZ, wC } from "/$bunfs/root/chunk-x0qpydt2.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I, ne, dy, HH } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { aRe, $ws, lIt, wlt, cIt, Sbe, dIt, wbe, Fws, vlt, cRe, c7, O$e, H$e, pIt, eC, S7t, eyo, hvr, yvr, IEs, f6e, Wbe, g6e, Evr, Boe, Glt, Mn, gF, g8, wyo, cTs, Es, Ae } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Qs } from "/$bunfs/root/chunk-2d9a83dh.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { yn, ft, Fdt } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { Jn, L8 } from "/$bunfs/root/chunk-ph7a449e.js";
import { j7, Tjn, MFe, M8, Ajn } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { Wa } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { Zu } from "/$bunfs/root/chunk-peahjaep.js";
import { Xne } from "/$bunfs/root/chunk-53bavyda.js";
import { sB, PI } from "/$bunfs/root/chunk-rk838m7w.js";
import { vVe, le, P, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { vyt, GGo, VGo, qGo, pXn, KGo, YGo } from "/$bunfs/root/chunk-yd9y535y.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { el } from "/$bunfs/root/chunk-2mjaqpws.js";
import { XO } from "/$bunfs/root/chunk-066dgc2r.js";
import { Pe } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { on, nt, s, n, Wt, yA, zr } from "/$bunfs/root/chunk-8524cxt8.js";
import { pie, E6, k6 } from "/$bunfs/root/chunk-mwrnx08k.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { Ze, wy } from "/$bunfs/root/chunk-z47a2vff.js";
import { Wo } from "/$bunfs/root/chunk-zby5bms5.js";
import { OXe } from "/$bunfs/root/chunk-wmf7fpt3.js";
import { Sr } from "/$bunfs/root/chunk-m52bdn6c.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { Amt } from "/$bunfs/root/chunk-7017s6dj.js";
import { Ve } from "/$bunfs/root/chunk-wff73y2a.js";
import { or } from "/$bunfs/root/chunk-xbqt0esp.js";
import { ui } from "/$bunfs/root/chunk-6gb840dt.js";
import { Cmt } from "/$bunfs/root/chunk-c72ehzzy.js";
import { sje, t0r, n0r } from "/$bunfs/root/chunk-prgyk9d9.js";
import { G0 } from "/$bunfs/root/chunk-082k5tyq.js";
import { bG } from "/$bunfs/root/chunk-d0t2hmxp.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { IU } from "/$bunfs/root/chunk-bkk5jdfk.js";
import { xj, Fs } from "/$bunfs/root/chunk-cg7f88dh.js";
import { f4o } from "/$bunfs/root/chunk-z1cn7pjm.js";
import { me, hn, bt } from "/$bunfs/root/chunk-55p8dvkx.js";
import { Ko } from "/$bunfs/root/chunk-7qc48pza.js";
import { S, Sn } from "/$bunfs/root/chunk-cj4xndke.js";
N();
class Le extends Error {
    fallbackCures;
    causeSummary;
    constructor(A, o){
        super(A, {
            cause: o.cause
        });
        this.fallbackCures = o.fallbackCures;
        this.causeSummary = o.fallbackCures ? o.causeSummary : null;
    }
}
async function _t(A, o, M = {}) {
    try {
        let B = await $t(A, o, M);
        g("oauth_console_profile_login");
        return B;
    } catch (error) {
        if (error instanceof Le && error.fallbackCures) {
            f("oauth_console_profile_login", "refused_fell_back");
        } else {
            m("oauth_console_profile_login", error instanceof Le ? "refused" : "error");
        }
        throw error;
    }
}
async function $t(A, o, { loginHint, loginMethod, orgUUID }) {
    try {
        await pXn();
    } catch (cause) {
        let X = VGo(cause);
        if (X === null) {
            throw cause;
        }
        let causeSummary = qGo(cause);
        throw new Le(l(cause), X && causeSummary !== null ? {
            fallbackCures: true,
            causeSummary,
            cause
        } : {
            fallbackCures: false,
            cause
        });
    }
    let C = await A.startOAuthFlow(o, {
        loginWithClaudeAi: false,
        oauthClient: {
            clientId: vyt,
            scopes: GGo
        },
        loginHint,
        loginMethod,
        orgUUID
    });
    let F = jt(C);
    if (F instanceof Error) {
        await yt(C);
        throw F;
    }
    await Vt(await Yt());
    let T = await t0r(C, {});
    let D;
    try {
        let W = C.tokenAccount;
        D = await KGo({
            accessToken: C.accessToken,
            refreshToken: F.refreshToken,
            expiresAtMs: F.expiresAtMs,
            scopes: C.scopes,
            organizationUuid: W?.organizationUuid ?? C.profile?.organization.uuid,
            organizationName: W?.organizationName ?? C.profile?.organization.name,
            accountEmail: W?.emailAddress ?? C.profile?.account.email,
            workspaceId: W?.workspaceId,
            workspaceName: W?.workspaceName
        });
    } catch (error) {
        if (!await YGo(F.refreshToken)) {
            await yt(C);
        }
        throw error;
    }
    await S7t(C.accessToken).catch((W)=>t(String(W), {
            level: "error"
        }));
    await n0r({
        ...T
    });
    return D;
}
async function Yt() {
    if (Ie() !== "firstParty") {
        return null;
    }
    let A = Jn();
    A.invalidateCache?.();
    let o = (await A.readAsync())?.claudeAiOauth;
    if (o?.refreshToken) {
        return {
            refreshToken: o.refreshToken,
            clientId: o.clientId
        };
    }
    return null;
}
async function Vt(A) {
    if (A === null) {
        return;
    }
    await eC(A.refreshToken, A.clientId);
    try {
        await Jn().mutate((o)=>({
                ...o,
                claudeAiOauth: undefined
            }));
    } catch (error) {
        t(`Console profile login: could not clear the replaced claude.ai login record: ${l(error)}`, {
            level: "error"
        });
    }
}
function jt(A) {
    if (!A.scopes.includes(wC)) {
        return Error("The organization didn't grant inference access to this sign-in, so Claude Code can't use it.");
    }
    if (!A.refreshToken) {
        return Error("The sign-in came back without a refresh token, so it would stop working within hours. Try again.");
    }
    if (A.expiresAt === null || !Number.isFinite(A.expiresAt)) {
        return Error("The sign-in came back without the token's expiry, so it can't be refreshed on time. Try again.");
    }
    return {
        refreshToken: A.refreshToken,
        expiresAtMs: A.expiresAt
    };
}
async function yt(A) {
    if (A.refreshToken) {
        await eC(A.refreshToken, vyt);
    }
}
N();
const grant_type = "urn:ietf:params:oauth:grant-type:device_code";
const surface = "claude_code";
const qt = new Set([
    "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "UNABLE_TO_GET_ISSUER_CERT",
    "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
    "DEPTH_ZERO_SELF_SIGNED_CERT",
    "SELF_SIGNED_CERT_IN_CHAIN",
    "CERT_UNTRUSTED"
]);
const ot = 254;
const Zt = "Sign-in timed out while waiting for you to continue. Try again.";
const At = "The gateway's TLS certificate changed during sign-in: it no longer matches the one you trusted. Aborting without storing credentials; start the sign-in again to review the new certificate.";
function rt(error) {
    let o = l(error);
    if (o.includes(wlt)) {
        return "Claude Code's credentials file (where a gateway's TLS pin is kept) is a symlink, which it does not follow. Replace the link with the file itself and try again.";
    }
    if (o.includes(cIt)) {
        return "Claude Code's credentials file (where a gateway's TLS pin is kept) could not be read. Try again; if it keeps failing, check the file.";
    }
    if (dIt(error) !== undefined) {
        return At;
    }
    return o;
}
function Jt(error) {
    let o = error?.response?.data;
    if (typeof o !== "object" || o === null) {
        return;
    }
    let o_error_description = o.error_description;
    if (typeof o_error_description !== "string") {
        return;
    }
    return ne(dy(o_error_description), 300).trim() || undefined;
}
function Qt(error) {
    let o = v(error) ?? v(error?.cause);
    let M = l(error);
    if (!(o !== undefined && qt.has(o) || /self[- ]?signed certificate|unable to (verify the first|get (local )?issuer) certificate|certificate not trusted/i.test(M))) {
        return null;
    }
    return "Could not verify the gateway's TLS certificate. If your gateway uses a private CA or self-signed certificate: Claude Code reads your OS trust " + "store by default on the native binary and Node ≥22.15, so if the CA is " + "already installed there, upgrade to a current runtime. Otherwise set " + "NODE_EXTRA_CA_CERTS to the CA certificate PEM file before starting — " + "e.g. `export NODE_EXTRA_CA_CERTS=/path/to/ca.pem` — or add it under " + "`env.NODE_EXTRA_CA_CERTS` in your user settings (~/.claude/settings.json).";
}
const eo = p(()=>bt({
        device_authorization_endpoint: me().optional(),
        token_endpoint: me().optional(),
        revocation_endpoint: me().nullish().catch(undefined)
    }));
function Ct(A, o, M) {
    let B = hvr(A, o);
    if (B) {
        return B;
    }
    if (o) {
        t(`[gateway-login] ignoring advertised endpoint ${o} (not same-origin with ${A}); using ${M}`);
    }
    return `${A}${M}`;
}
const to = p(()=>bt({
        device_code: me(),
        user_code: me(),
        verification_uri: me(),
        verification_uri_complete: me().optional(),
        expires_in: hn(),
        interval: hn().optional()
    }));
function it({ onDone, onCancel, initialUrl, namedBy = "administrator", internalNetworks, screenLocked }) {
    let { credentials } = Pe();
    let [T, D] = y({
        state: "url_input"
    });
    let X = initialUrl ?? undefined?.url;
    let children = undefined?.caption ?? (namedBy === "developer" ? `Gateway URL from your settings file (${yn("userSettings")}), not from your organization's managed settings.` : "Your organization's gateway URL (set by managed settings):");
    let U = R(0);
    let ue = R(false);
    P(()=>()=>{
            U.current += 1;
        }, []);
    let ve = screenLocked ? ()=>D({
            state: "url_input"
        }) : onCancel;
    function onCancel_1() {
        U.current += 1;
        ve();
    }
    async function ye(j) {
        let L = ++U.current;
        D({
            state: "connecting"
        });
        try {
            let x = aRe(j);
            let z = await $ws(x, internalNetworks);
            if (L !== U.current) {
                return;
            }
            let K = z ? await lIt(x, 10000, z) : undefined;
            if (L !== U.current) {
                return;
            }
            let u = await Wa.get(`${x}/.well-known/oauth-authorization-server`, {
                headers: {
                    "User-Agent": Ko()
                },
                timeout: 10000
            });
            if (L !== U.current) {
                return;
            }
            let ae = eo().safeParse(u.data);
            let a = ae.success ? ae.data : undefined;
            let revocationEndpoint = hvr(x, a?.revocation_endpoint);
            if (a?.revocation_endpoint && !revocationEndpoint) {
                t(`[gateway-login] ignoring advertised revocation endpoint ${a.revocation_endpoint} (not same-origin with ${x}); sign-out will not revoke`);
            }
            let endpoints = {
                deviceAuthorizationEndpoint: Ct(x, a?.device_authorization_endpoint, "/oauth/device_authorization"),
                tokenEndpoint: Ct(x, a?.token_endpoint, "/oauth/token"),
                ...revocationEndpoint && {
                    revocationEndpoint
                }
            };
            let { hostname, fingerprint, localAddress, remoteAddress } = K ?? await lIt(x);
            if (L !== U.current) {
                return;
            }
            let previouslyPinned = await Sbe(hostname, credentials);
            if (L !== U.current) {
                return;
            }
            if (previouslyPinned === fingerprint) {
                await be(x, endpoints, fingerprint);
            } else {
                D({
                    state: "trust_prompt",
                    url: x,
                    hostname,
                    fingerprint,
                    previouslyPinned,
                    endpoints,
                    ...z && {
                        route: `from ${localAddress} to ${remoteAddress}, both inside declared ${z}`
                    }
                });
            }
        } catch (error) {
            if (L !== U.current) {
                return;
            }
            let z = Qt(error);
            D(z ? {
                state: "error",
                message: z,
                detail: l(error)
            } : {
                state: "error",
                message: rt(error)
            });
        }
    }
    async function be(j, endpoints, fingerprint) {
        let z = ++U.current;
        D({
            state: "connecting"
        });
        try {
            let K = wbe(fingerprint, endpoints.deviceAuthorizationEndpoint);
            let { data } = await Wa.post(endpoints.deviceAuthorizationEndpoint, new URLSearchParams({
                surface
            }).toString(), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "User-Agent": Ko()
                },
                timeout: 10000,
                maxRedirects: 0,
                ...K && {
                    httpsAgent: K
                }
            });
            if (z !== U.current) {
                return;
            }
            let ae = to().safeParse(data);
            if (!ae.success) {
                throw Error("gateway device authorization endpoint returned malformed response");
            }
            let a = ae.data;
            Fs(a.verification_uri_complete ?? a.verification_uri);
            D({
                state: "polling",
                url: j,
                userCode: a.user_code,
                verificationUri: a.verification_uri
            });
            await O(j, endpoints, a.device_code, a.interval ?? 5, z, fingerprint);
        } catch (error) {
            if (z !== U.current) {
                return;
            }
            if (yvr(error) === "slow_down") {
                D({
                    state: "error",
                    message: "The gateway is limiting sign-in attempts right now. Wait a few minutes and try again.",
                    detail: Jt(error)
                });
                return;
            }
            D({
                state: "error",
                message: rt(error)
            });
        }
    }
    async function O(j, endpoints, device_code, z, K, fingerprint) {
        let { tokenEndpoint } = endpoints;
        let a = Math.max(1, z);
        while(K === U.current){
            await Q(a * 1000);
            if (K !== U.current) {
                return;
            }
            try {
                let k = wbe(fingerprint, tokenEndpoint);
                let { data } = await Wa.post(tokenEndpoint, new URLSearchParams({
                    grant_type,
                    device_code
                }).toString(), {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "User-Agent": Ko()
                    },
                    timeout: 10000,
                    maxRedirects: 0,
                    ...k && {
                        httpsAgent: k
                    }
                });
                if (K !== U.current) {
                    return;
                }
                let he = eyo().safeParse(data);
                if (!he.success) {
                    throw Error("gateway token endpoint returned malformed response");
                }
                await pe(j, endpoints, he.data, K);
                return;
            } catch (error) {
                if (K !== U.current) {
                    return;
                }
                let se = yvr(error);
                if (se === "authorization_pending") {
                    continue;
                }
                if (se === "slow_down") {
                    a += 5;
                    continue;
                }
                if (se === "expired_token") {
                    D({
                        state: "error",
                        message: "Sign-in timed out before the browser flow completed. Try again."
                    });
                    return;
                }
                if (se === "access_denied") {
                    D({
                        state: "error",
                        message: "Sign-in was denied in the browser."
                    });
                    return;
                }
                D({
                    state: "error",
                    message: rt(error)
                });
                return;
            }
        }
    }
    async function pe(j, L, data, z) {
        let K = data.email ?? "";
        let u = ne(K, 16 * ot);
        let ae = HH(u);
        let email = u.length < K.length || ae.length > ot ? `${ne(ae, ot)}\u2026` : ae;
        let auth = {
            url: j,
            jwt: data.access_token,
            expiresAt: Date.now() + data.expires_in * 1000,
            tokenEndpoint: L.tokenEndpoint,
            ...L.revocationEndpoint && {
                revocationEndpoint: L.revocationEndpoint
            },
            ...data.refresh_token && {
                idpRefreshToken: data.refresh_token
            },
            ...email && {
                email
            }
        };
        let { hostname, fingerprint } = await lIt(j);
        if (z !== U.current) {
            return;
        }
        let _e = await Sbe(hostname, credentials);
        if (z !== U.current) {
            return;
        }
        if (_e !== fingerprint) {
            D({
                state: "error",
                message: At
            });
            return;
        }
        if (email) {
            ue.current = false;
            D({
                state: "confirm_account",
                auth,
                email,
                saving: false
            });
            return;
        }
        await ce(auth, z);
    }
    async function ce(auth, L) {
        try {
            await IEs(auth, credentials);
        } catch (error) {
            if (L !== U.current) {
                return;
            }
            let z = l(error);
            t(`[gateway-login] secureStorage write failed: ${z}`, {
                level: "error"
            });
            D({
                state: "error",
                message: z
            });
            return;
        }
        if (L !== U.current) {
            return;
        }
        Xne({
            action: "login",
            success: true,
            authMethod: "oauth"
        });
        onDone();
    }
    let isActive = T.state === "url_input";
    Ze("confirm:yes", ()=>{
        if (X) {
            ye(X);
        }
    }, {
        context: "Confirmation",
        isActive
    });
    Ze("confirm:no", screenLocked ? ()=>false : onCancel, {
        context: "Confirmation",
        isActive
    });
    wy((j, L)=>L.escape, {
        isActive: T.state === "confirm_account" && T.saving
    });
    switch(T.state){
        case "url_input":
            if (!X) {
                return r(s, {
                    flexDirection: "column",
                    gap: 1,
                    children: [
                        e(n, {
                            bold: true,
                            children: "Cloud gateway"
                        }),
                        e(n, {
                            color: "warning",
                            children: "Gateway login is required by your organization's policy, but no gateway URL is configured. Contact your IT administrator."
                        })
                    ]
                });
            }
            return r(s, {
                flexDirection: "column",
                gap: 1,
                children: [
                    e(n, {
                        bold: true,
                        children: "Cloud gateway"
                    }),
                    e(n, {
                        children
                    }),
                    e(s, {
                        borderDimColor: true,
                        borderStyle: "round",
                        paddingLeft: 1,
                        children: e(n, {
                            children: X
                        })
                    }),
                    r(n, {
                        dimColor: true,
                        children: [
                            "Press Enter to connect",
                            screenLocked ? "" : " · Esc for other login methods"
                        ]
                    })
                ]
            });
        case "polling":
            return e(kt, {
                userCode: T.userCode,
                verificationUri: T.verificationUri,
                onCancel: onCancel_1
            });
        case "connecting":
            return e(St, {
                label: "Connecting to gateway…",
                onCancel: onCancel_1
            });
        case "trust_prompt":
            return r(s, {
                flexDirection: "column",
                gap: 1,
                children: [
                    r(n, {
                        bold: true,
                        children: [
                            "Trust gateway ",
                            e(n, {
                                color: "suggestion",
                                children: T.hostname
                            }),
                            "?"
                        ]
                    }),
                    T.previouslyPinned ? e(n, {
                        color: "warning",
                        children: "The TLS certificate for this gateway has changed since you last connected. Only continue if your administrator has confirmed a certificate rotation."
                    }) : e(n, {
                        children: "You haven't connected to this gateway before. Once trusted, it can push settings to this machine that execute commands and change your environment. Only continue if this is your organization's gateway."
                    }),
                    T.route && r(n, {
                        dimColor: true,
                        children: [
                            "Connecting ",
                            T.route
                        ]
                    }),
                    r(n, {
                        dimColor: true,
                        children: [
                            "Certificate fingerprint (SHA-256): ",
                            T.fingerprint.slice(0, 16),
                            "…"
                        ]
                    }),
                    e(or, {
                        hideIndexes: true,
                        confirmLabel: "Yes, trust this gateway",
                        cancelLabel: screenLocked ? "No, go back" : "No, cancel login",
                        focus: "cancel",
                        onConfirm: ()=>{
                            let U_current = U.current;
                            Fws(T.hostname, T.fingerprint, credentials).then(()=>{
                                if (U_current !== U.current) {
                                    return;
                                }
                                return be(T.url, T.endpoints, T.fingerprint);
                            }).catch((L)=>{
                                if (U_current !== U.current) {
                                    return;
                                }
                                D({
                                    state: "error",
                                    message: l(L)
                                });
                            });
                        },
                        onCancel: onCancel_1
                    })
                ]
            });
        case "confirm_account":
            return r(s, {
                flexDirection: "column",
                gap: 1,
                children: [
                    r(n, {
                        bold: true,
                        children: [
                            "Signed in to Cloud gateway as",
                            " ",
                            e(n, {
                                color: "suggestion",
                                children: T.email
                            })
                        ]
                    }),
                    T.saving ? r(s, {
                        gap: 1,
                        children: [
                            e(ui, {}),
                            e(n, {
                                dimColor: true,
                                children: "Finishing sign-in…"
                            })
                        ]
                    }) : r(Y, {
                        children: [
                            e(n, {
                                children: "Continue only if this is your account; that organization's settings will then apply to this machine. Otherwise go back: nothing is saved, and you can sign in again."
                            }),
                            e(or, {
                                hideIndexes: true,
                                focus: "cancel",
                                confirmLabel: "Yes, continue",
                                cancelLabel: screenLocked ? "No, go back" : "No, cancel login",
                                onConfirm: ()=>{
                                    if (ue.current) {
                                        return;
                                    }
                                    ue.current = true;
                                    if (T.auth.expiresAt <= Date.now() && !T.auth.idpRefreshToken) {
                                        D({
                                            state: "error",
                                            message: Zt
                                        });
                                        return;
                                    }
                                    let U_current = U.current;
                                    D((L)=>{
                                        if (L.state === "confirm_account") {
                                            return {
                                                ...L,
                                                saving: true
                                            };
                                        }
                                        return L;
                                    });
                                    ce(T.auth, U_current);
                                },
                                onCancel: ()=>{
                                    if (ue.current) {
                                        return;
                                    }
                                    ue.current = true;
                                    t("[gateway-login] signed-in account declined; nothing saved");
                                    ve();
                                }
                            })
                        ]
                    })
                ]
            });
        case "error":
            return e(xt, {
                message: T.message,
                detail: T.detail,
                onCancel: ve
            });
    }
}
function kt(A) {
    let H = w(13);
    let { userCode, verificationUri, onCancel } = A;
    let C;
    if (H[0] === S) {
        C = {
            context: "Confirmation"
        };
        H[0] = C;
    } else {
        C = H[0];
    }
    Ze("confirm:no", onCancel, C);
    let F;
    let T;
    if (H[1] === S) {
        F = e(n, {
            bold: true,
            children: "Cloud gateway · sign in"
        });
        T = e(n, {
            children: "A browser window should have opened. After signing in with your identity provider, confirm this code on the verification page:"
        });
        H[1] = F;
        H[2] = T;
    } else {
        F = H[1];
        T = H[2];
    }
    let D;
    if (H[3] !== userCode) {
        D = e(s, {
            borderDimColor: true,
            borderStyle: "round",
            paddingX: 2,
            children: e(n, {
                bold: true,
                color: "suggestion",
                children: userCode
            })
        });
        H[3] = userCode;
        H[4] = D;
    } else {
        D = H[4];
    }
    let W;
    if (H[5] === S) {
        W = e(n, {
            dimColor: true,
            children: "Browser didn't open? Visit:"
        });
        H[5] = W;
    } else {
        W = H[5];
    }
    let X;
    if (H[6] !== verificationUri) {
        X = r(s, {
            flexDirection: "column",
            children: [
                W,
                e(n, {
                    dimColor: true,
                    wrap: "wrap",
                    children: verificationUri
                })
            ]
        });
        H[6] = verificationUri;
        H[7] = X;
    } else {
        X = H[7];
    }
    let Z;
    let U;
    if (H[8] === S) {
        Z = r(s, {
            gap: 1,
            children: [
                e(ui, {}),
                e(n, {
                    dimColor: true,
                    children: "Waiting for sign-in to complete in your browser…"
                })
            ]
        });
        U = e(n, {
            dimColor: true,
            children: "Press Esc to cancel"
        });
        H[8] = Z;
        H[9] = U;
    } else {
        Z = H[8];
        U = H[9];
    }
    let ue;
    if (H[10] !== D || H[11] !== X) {
        ue = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                F,
                T,
                D,
                X,
                Z,
                U
            ]
        });
        H[10] = D;
        H[11] = X;
        H[12] = ue;
    } else {
        ue = H[12];
    }
    return ue;
}
function St(A) {
    let B = w(7);
    let { label, onCancel } = A;
    let H;
    if (B[0] === S) {
        H = {
            context: "Confirmation"
        };
        B[0] = H;
    } else {
        H = B[0];
    }
    Ze("confirm:no", onCancel, H);
    let C;
    if (B[1] === S) {
        C = e(ui, {});
        B[1] = C;
    } else {
        C = B[1];
    }
    let F;
    if (B[2] !== label) {
        F = r(s, {
            gap: 1,
            children: [
                C,
                e(n, {
                    children: label
                })
            ]
        });
        B[2] = label;
        B[3] = F;
    } else {
        F = B[3];
    }
    let T;
    if (B[4] === S) {
        T = e(n, {
            dimColor: true,
            children: "Press Esc to cancel"
        });
        B[4] = T;
    } else {
        T = B[4];
    }
    let D;
    if (B[5] !== F) {
        D = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                F,
                T
            ]
        });
        B[5] = F;
        B[6] = D;
    } else {
        D = B[6];
    }
    return D;
}
function xt(A) {
    let H = w(9);
    let { message, detail, onCancel } = A;
    let C;
    if (H[0] === S) {
        C = {
            context: "Confirmation"
        };
        H[0] = C;
    } else {
        C = H[0];
    }
    Ze("confirm:no", onCancel, C);
    let F;
    if (H[1] !== message) {
        F = r(n, {
            color: "error",
            children: [
                "Error: ",
                message
            ]
        });
        H[1] = message;
        H[2] = F;
    } else {
        F = H[2];
    }
    let T;
    if (H[3] !== detail) {
        T = detail && e(n, {
            dimColor: true,
            children: detail
        });
        H[3] = detail;
        H[4] = T;
    } else {
        T = H[4];
    }
    let D;
    if (H[5] === S) {
        D = e(n, {
            dimColor: true,
            children: "Press Esc to go back"
        });
        H[5] = D;
    } else {
        D = H[5];
    }
    let W;
    if (H[6] !== F || H[7] !== T) {
        W = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                F,
                T,
                D
            ]
        });
        H[6] = F;
        H[7] = T;
        H[8] = W;
    } else {
        W = H[8];
    }
    return W;
}
function Do(J) {
    return J.title;
}
function No(ge) {
    return {
        label: r(n, {
            children: [
                ge.title,
                " · ",
                e(n, {
                    dimColor: true,
                    children: ge.hint
                })
            ]
        }),
        value: ge.value
    };
}
function Mo(V) {
    return V.value === "foundry";
}
const pt = "Paste code here if prompted > ";
const Ye = "The recommended sign-in isn't available on this machine";
function uo(A) {
    let o = Math.round(A / 86400);
    if (o < 1) {
        return "less than a day";
    }
    if (o === 365) {
        return "1 year";
    }
    return `${o} ${I(o, "day")}`;
}
function sve({ onDone, onAuthSuccess, onFreshPickerChange, onAccountOnHold, startingMessage, mode = "login", expiresIn, forceLoginMethod, urlOutdent = 0, allowContinueWithoutLogin = false }) {
    let X = el();
    let { storageV5, credentials } = Pe();
    let proactivityLevel = Wo((oe)=>oe.proactivityLevel);
    let toolPermissionContext = Wo((oe)=>oe.toolPermissionContext);
    let paddingX = (X ? bG : 0) + urlOutdent;
    let ye = ft();
    let { forceLoginGatewayUrl, gatewayInternalNetworks } = Fdt();
    let [pe] = y(f6e);
    let forceLoginGatewayUrl_1 = forceLoginGatewayUrl ?? pe;
    let gatewayNamedBy = forceLoginGatewayUrl_1 === forceLoginGatewayUrl ? "administrator" : "developer";
    let j = g8();
    let gatewayScreenLocked = j === "gateway";
    let x = gatewayScreenLocked ? "gateway" : forceLoginMethod ?? j;
    let forcedMethodMessage = x === "claudeai" ? "Login method pre-selected: Subscription Plan (Claude Pro/Max)" : x === "console" ? "Login method pre-selected: API usage billing (Anthropic Console)" : null;
    let K = null;
    let u = XO();
    let ae = on();
    let [a, k] = y(()=>{
        if (mode === "setup-token") {
            return {
                state: "ready_to_start"
            };
        }
        if (x === "claudeai" || x === "console") {
            return {
                state: "ready_to_start"
            };
        }
        if (gatewayScreenLocked || pe) {
            return {
                state: "gateway_setup"
            };
        }
        return {
            state: "idle"
        };
    });
    let se = R(false);
    P(()=>{
        if (a.state !== "idle" && a.state !== "platform_setup" && a.state !== "console_method") {
            se.current = true;
        }
        onFreshPickerChange?.(a.state === "idle" && !se.current);
    }, [
        a.state,
        onFreshPickerChange
    ]);
    let [he, _e] = y("");
    let [cursorOffset, h] = y(0);
    let [_] = y(()=>new IU);
    let [E, setLoginWithClaudeAi] = y(()=>mode === "setup-token" || x === "claudeai");
    let [re, setConsoleProfileLogin] = y(false);
    let [keyMintFallbackReason, Ce] = y(null);
    let De = wyo();
    let consoleProfileLoginAllowed = Ie() === "firstParty" && !De && ye.forceLoginOrgUUID === undefined && x !== "claudeai";
    let allowedProviders = cRe();
    let firstPartyLoginAllowed = c7("firstParty") === undefined;
    let Ht = ye.forceLoginMethod !== undefined && E !== (ye.forceLoginMethod === "claudeai");
    let orgUUID = typeof ye.forceLoginOrgUUID === "string" && !Ht ? ye.forceLoginOrgUUID : undefined;
    let [Fe, Je] = y(false);
    let { copiedVia, copy, reset } = pie(a.state === "waiting_for_login" ? a.url : null);
    let textInputColumns = ke().columns - pt.length - 1;
    let [Se] = y(()=>PI() && sB() !== "off");
    P(()=>{
        if (x === "claudeai") {
            i("tengu_oauth_claudeai_forced", {});
        } else if (x === "console") {
            i("tengu_oauth_console_forced", {});
        } else if (gatewayScreenLocked && true && mode !== "setup-token") {
            i("tengu_oauth_gateway_forced", {});
        }
    }, [
        x,
        gatewayScreenLocked,
        mode
    ]);
    zr(()=>{
        if (a.state === "about_to_retry") {
            k(a.nextState);
        }
    }, a.state === "about_to_retry" ? 1000 : null, [
        a
    ]);
    Ze("confirm:yes", ()=>{
        if (a.state !== "storage_failed") {
            i(a.state === "gateway_done" ? "tengu_oauth_gateway_done" : "tengu_oauth_success", {
                loginWithClaudeAi: E
            });
        }
        onDone();
    }, {
        context: "Confirmation",
        isActive: a.state === "success" && mode !== "setup-token" || a.state === "storage_failed" && a.sessionAuth === "fresh" || a.state === "gateway_done"
    });
    let Ge = yA();
    let ze = R(false);
    Ze("confirm:yes", ()=>{
        if (ze.current) {
            return;
        }
        ze.current = true;
        Ae((oe)=>({
                ...oe,
                hasCompletedOnboarding: true,
                lastOnboardingVersion: ({
                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://code.claude.com/docs/en/overview",
                    VERSION: "2.1.296",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                    BUILD_TIME: "2026-10-09T01:31:52Z",
                    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
                    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                    DD_SOURCEMAP_GROUP: "default"
                }).VERSION
            }), storageV5).then(()=>{
            Ge.exit();
            let proactivity = proactivityLevel !== undefined && toolPermissionContext !== undefined ? f4o({
                proactivityLevel,
                toolPermissionContext
            }) : undefined;
            import("/$bunfs/root/chunk-c09y69ba.js").then((J)=>J.execRelaunch(proactivity ? {
                    proactivity
                } : {}));
        });
    }, {
        context: "Confirmation",
        isActive: a.state === "bedrock_done" || a.state === "vertex_done"
    });
    Ze("confirm:yes", ()=>k({
            state: "platform_setup"
        }), {
        context: "Confirmation",
        isActive: a.state === "aws_refresh_done"
    });
    Ze("confirm:yes", ()=>{
        if (a.state === "error" && a.toRetry) {
            _e("");
            k({
                state: "about_to_retry",
                nextState: a.toRetry
            });
        } else if (a.state === "storage_failed" && a.sessionAuth !== "fresh") {
            _e("");
            k({
                state: "about_to_retry",
                nextState: x === "claudeai" || x === "console" ? {
                    state: "ready_to_start"
                } : {
                    state: "idle"
                }
            });
        }
    }, {
        context: "Confirmation",
        isActive: a.state === "error" && !!a.toRetry || a.state === "storage_failed" && a.sessionAuth !== "fresh"
    });
    Ze("confirm:no", ()=>onDone(), {
        context: "Confirmation",
        isActive: allowContinueWithoutLogin && (a.state === "storage_failed" && a.sessionAuth !== "fresh" || a.state === "error")
    });
    Ze("confirm:yes", ()=>k({
            state: "idle"
        }), {
        context: "Confirmation",
        isActive: a.state === "account_on_hold" && mode !== "setup-token"
    });
    P(()=>{
        if (/^c+$/.test(he) && a.state === "waiting_for_login" && Fe) {
            _e("");
            copy(a.url);
        }
    }, [
        he,
        a,
        Fe,
        copy
    ]);
    async function handleSubmitCode(oe, J) {
        if (!oe.trim()) {
            _e("");
            h(0);
            return;
        }
        try {
            let [ge, V] = oe.split("#");
            if (!ge || !V) {
                k({
                    state: "error",
                    message: "Invalid code. Please make sure the full code was copied",
                    toRetry: {
                        state: "waiting_for_login",
                        url: J
                    }
                });
                return;
            }
            i("tengu_oauth_manual_entry", {});
            _.handleManualAuthCodeInput({
                authorizationCode: ge,
                state: V
            });
        } catch (error) {
            c(error);
            k({
                state: "error",
                message: l(error),
                toRetry: {
                    state: "waiting_for_login",
                    url: J
                }
            });
        }
    }
    let Te = le(async ()=>{
        let oe = (J)=>{
            reset();
            Je(false);
            k({
                state: "waiting_for_login",
                url: J
            });
            if (xj()) {
                Je(true);
            } else {
                ae.setTimeout(()=>Je(true), 3000);
            }
        };
        Ce(null);
        try {
            let J = O$e("firstParty");
            if (J !== undefined) {
                throw new vlt(J);
            }
            i("tengu_oauth_flow_start", {
                loginWithClaudeAi: E
            });
            if (re && mode !== "setup-token") {
                if (!consoleProfileLoginAllowed) {
                    throw Error("Settings on this machine pin the login method or organization, so signing in without an API key is not available here.");
                }
                try {
                    await _t(_, async (V)=>oe(V), {
                        orgUUID
                    });
                    k({
                        state: "success"
                    });
                    onAuthSuccess?.();
                    G0({
                        message: "Claude Code login successful",
                        notificationType: "auth_success"
                    }, u, {
                        storageV5,
                        credentials
                    });
                    return;
                } catch (error) {
                    if (!(error instanceof Le) || !error.fallbackCures) {
                        throw error;
                    }
                    let Ee = Qs(l(error));
                    Ce({
                        cause: error.causeSummary !== null ? Qs(error.causeSummary) : Ee,
                        message: Ee
                    });
                    t(`Keyless Console sign-in unavailable here, continuing with the API-key sign-in: ${Ee}`, {
                        level: "warn"
                    });
                }
            }
            let ge = await _.startOAuthFlow(async (V)=>oe(V), {
                loginWithClaudeAi: E,
                inferenceOnly: mode === "setup-token",
                expiresIn: mode === "setup-token" ? expiresIn ?? PZ : undefined,
                orgUUID
            }).catch((V)=>{
                if (V instanceof M8) {
                    throw V;
                }
                let Ee = V.message.includes("Token exchange failed");
                let we = L8(V);
                k({
                    state: "error",
                    message: we ?? (Ee ? "Failed to exchange authorization code for access token. Please try again." : V.message),
                    toRetry: mode === "setup-token" ? {
                        state: "ready_to_start"
                    } : {
                        state: "idle"
                    }
                });
                i("tengu_oauth_token_exchange_error", {
                    ...Zu(V),
                    ssl_error: we !== null
                });
                throw V;
            });
            if (mode === "setup-token") {
                k({
                    state: "success",
                    token: ge.accessToken,
                    expiresAt: ge.expiresAt ?? undefined
                });
                onAuthSuccess?.();
            } else {
                let V = await sje(ge, {
                    storageV5,
                    credentials
                });
                let Ee = await gF(credentials);
                if (!Ee.valid) {
                    throw Error(Ee.message);
                }
                let we = V?.storage;
                if (we && !we.success) {
                    k({
                        state: "storage_failed",
                        backendName: we.backendName,
                        sessionAuth: we.sessionAuth,
                        transient: we.transient
                    });
                    i("tengu_oauth_persist_failure_shown", {
                        storageBackend: cTs(we.backendName),
                        session_auth: d(we.sessionAuth),
                        transient: we.transient === true
                    });
                    if (we.sessionAuth === "fresh") {
                        onAuthSuccess?.();
                    }
                    G0({
                        message: we.transient ? "Claude Code login needs attention: credentials may not have been saved" : "Claude Code login needs attention: credentials could not be saved",
                        notificationType: "auth_storage_failure"
                    }, u, {
                        storageV5,
                        credentials
                    });
                } else {
                    k({
                        state: "success"
                    });
                    onAuthSuccess?.();
                    G0({
                        message: "Claude Code login successful",
                        notificationType: "auth_success"
                    }, u, {
                        storageV5,
                        credentials
                    });
                }
            }
        } catch (error) {
            if (Ajn(error)) {
                k({
                    state: "account_on_hold",
                    message: Tjn(MFe(error.errorUri))
                });
                i("tengu_oauth_error", {
                    account_on_hold: true
                });
                return;
            }
            let ge = error instanceof M8 ? error.displayMessage : l(error);
            let V = L8(error);
            k({
                state: "error",
                message: V ?? ge,
                ...pIt(error) && {
                    verbatim: true
                },
                toRetry: {
                    state: mode === "setup-token" || x === "claudeai" || x === "console" && !consoleProfileLoginAllowed ? "ready_to_start" : x === "console" ? "console_method" : "idle"
                }
            });
            i("tengu_oauth_error", {
                ...Zu(error),
                ssl_error: V !== null
            });
        }
    }, [
        _,
        E,
        re,
        consoleProfileLoginAllowed,
        mode,
        expiresIn,
        orgUUID,
        u,
        ae,
        onAuthSuccess,
        x,
        storageV5,
        credentials,
        reset
    ]);
    let $e = R(false);
    P(()=>{
        if (a.state === "ready_to_start" && !$e.current) {
            $e.current = true;
            process.nextTick((oe, J)=>{
                oe().finally(()=>{
                    J.current = false;
                });
            }, Te, $e);
        }
    }, [
        a.state,
        Te
    ]);
    zr(()=>{
        i("tengu_oauth_success", {
            loginWithClaudeAi: E
        });
        onDone();
    }, mode === "setup-token" && a.state === "success" ? 500 : null, [
        mode,
        a,
        E,
        onDone
    ]);
    zr(()=>onAccountOnHold?.(), mode === "setup-token" && a.state === "account_on_hold" ? 500 : null, [
        mode,
        a,
        onAccountOnHold
    ]);
    P(()=>()=>{
            _.cleanup();
        }, [
        _
    ]);
    return r(s, {
        flexDirection: "column",
        gap: 1,
        children: [
            a.state === "waiting_for_login" && Fe && r(s, {
                flexDirection: "column",
                gap: 1,
                paddingBottom: 1,
                marginX: paddingX ? -paddingX : undefined,
                children: [
                    r(s, {
                        flexDirection: "column",
                        paddingX,
                        children: [
                            r(s, {
                                children: [
                                    r(n, {
                                        dimColor: true,
                                        children: [
                                            "Browser didn't open? Use the url below to sign in",
                                            " "
                                        ]
                                    }),
                                    e(E6, {
                                        via: copiedVia
                                    })
                                ]
                            }),
                            e(k6, {
                                via: copiedVia
                            })
                        ]
                    }),
                    e(s, {
                        children: e(Wt, {
                            url: a.url,
                            assumeSupport: true,
                            children: e(n, {
                                dimColor: true,
                                children: a.url
                            })
                        })
                    }),
                    Se && e(s, {
                        paddingX,
                        children: r(n, {
                            dimColor: true,
                            children: [
                                "Hold ",
                                vVe(),
                                " while selecting to use your terminal's native copy"
                            ]
                        })
                    })
                ]
            }, "urlToCopy"),
            mode === "setup-token" && a.state === "success" && a.token && r(s, {
                flexDirection: "column",
                gap: 1,
                paddingTop: 1,
                children: [
                    e(n, {
                        color: "success",
                        children: "✓ Long-lived authentication token created successfully!"
                    }),
                    r(s, {
                        flexDirection: "column",
                        gap: 1,
                        children: [
                            r(n, {
                                children: [
                                    "Your OAuth token (valid for",
                                    " ",
                                    uo(a.expiresAt !== undefined && Number.isFinite(a.expiresAt) ? Math.round((a.expiresAt - Date.now()) / 1000) : expiresIn ?? PZ),
                                    "):"
                                ]
                            }),
                            e(n, {
                                color: "warning",
                                children: a.token
                            }),
                            e(n, {
                                dimColor: true,
                                children: "Store this token securely. You won't be able to see it again."
                            }),
                            e(n, {
                                dimColor: true,
                                children: "Use this token by setting: export CLAUDE_CODE_OAUTH_TOKEN=<token>"
                            })
                        ]
                    })
                ]
            }, "tokenOutput"),
            e(s, {
                flexDirection: "column",
                gap: 1,
                children: e(Bt, {
                    oauthStatus: a,
                    mode,
                    startingMessage,
                    forcedMethodMessage,
                    gatewayUnsupportedWarning: null,
                    forceLoginGatewayUrl: forceLoginGatewayUrl_1,
                    gatewayNamedBy,
                    gatewayInternalNetworks,
                    gatewayScreenLocked,
                    keyMintFallbackReason,
                    showPastePrompt: Fe,
                    pastedCode: he,
                    setPastedCode: _e,
                    cursorOffset,
                    setCursorOffset: h,
                    textInputColumns,
                    handleSubmitCode,
                    setOAuthStatus: k,
                    setLoginWithClaudeAi,
                    setConsoleProfileLogin,
                    consoleProfileLoginAllowed,
                    allowedProviders,
                    firstPartyLoginAllowed,
                    onAuthSuccess,
                    allowContinueWithoutLogin
                })
            })
        ]
    });
}
function ht(A) {
    let M = w(4);
    let { onComplete } = A;
    let B;
    if (M[0] !== onComplete) {
        B = ()=>{
            let H = Wbe();
            if (!H) {
                onComplete(false);
                return;
            }
            if (g6e() && !Es()) {
                onComplete(false);
                return;
            }
            let C = new AbortController;
            Evr(H, C.signal).then((F)=>{
                if (C.signal.aborted) {
                    return;
                }
                if (F) {
                    Boe();
                    Glt();
                }
                onComplete(F);
            });
            return ()=>C.abort();
        };
        M[0] = onComplete;
        M[1] = B;
    } else {
        B = M[1];
    }
    let T;
    if (M[2] === S) {
        T = [];
        M[2] = T;
    } else {
        T = M[2];
    }
    P(B, T);
    let D;
    if (M[3] === S) {
        D = r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
                r(s, {
                    children: [
                        e(ui, {}),
                        e(n, {
                            children: "Running awsAuthRefresh…"
                        })
                    ]
                }),
                e(OXe, {})
            ]
        });
        M[3] = D;
    } else {
        D = M[3];
    }
    return D;
}
const Pt = [
    {
        value: "bedrock",
        providers: [
            "bedrock"
        ],
        title: "Amazon Bedrock",
        hint: "interactive setup"
    },
    {
        value: "aws_refresh",
        providers: [
            "anthropicAws",
            "bedrock",
            "mantle"
        ],
        title: "Claude Platform on AWS",
        hint: "refresh credentials"
    },
    {
        value: "foundry",
        providers: [
            "foundry"
        ],
        title: "Microsoft Foundry",
        hint: "opens docs"
    },
    {
        value: "vertex",
        providers: [
            "vertex"
        ],
        title: "Google Vertex AI",
        hint: "interactive setup"
    }
];
function Bt(A) {
    let u = w(182);
    let { oauthStatus, mode, startingMessage, forcedMethodMessage, gatewayUnsupportedWarning, forceLoginGatewayUrl, gatewayNamedBy, gatewayInternalNetworks, gatewayScreenLocked, keyMintFallbackReason, showPastePrompt, pastedCode, setPastedCode, cursorOffset, setCursorOffset, textInputColumns, handleSubmitCode, setOAuthStatus, setLoginWithClaudeAi, setConsoleProfileLogin, consoleProfileLoginAllowed, allowedProviders, firstPartyLoginAllowed, onAuthSuccess, allowContinueWithoutLogin } = A;
    let showCursor = nt();
    let ae;
    if (u[0] === S) {
        ae = Wbe();
        u[0] = ae;
    } else {
        ae = u[0];
    }
    let a = ae;
    let k;
    if (u[1] !== allowContinueWithoutLogin || u[2] !== allowedProviders || u[3] !== consoleProfileLoginAllowed || u[4] !== cursorOffset || u[5] !== firstPartyLoginAllowed || u[6] !== forceLoginGatewayUrl || u[7] !== forcedMethodMessage || u[8] !== gatewayInternalNetworks || u[9] !== gatewayNamedBy || u[10] !== gatewayScreenLocked || u[11] !== gatewayUnsupportedWarning || u[12] !== handleSubmitCode || u[13] !== showCursor || u[14] !== keyMintFallbackReason || u[15] !== mode || u[16] !== oauthStatus.backendName || u[17] !== oauthStatus.message || u[18] !== oauthStatus.ok || u[19] !== oauthStatus.sessionAuth || u[20] !== oauthStatus.state || u[21] !== oauthStatus.toRetry || u[22] !== oauthStatus.token || u[23] !== oauthStatus.transient || u[24] !== oauthStatus.url || u[25] !== oauthStatus.verbatim || u[26] !== onAuthSuccess || u[27] !== pastedCode || u[28] !== setConsoleProfileLogin || u[29] !== setCursorOffset || u[30] !== setLoginWithClaudeAi || u[31] !== setOAuthStatus || u[32] !== setPastedCode || u[33] !== showPastePrompt || u[34] !== startingMessage || u[35] !== textInputColumns) {
        k = Sn;
        Ht: {
            let se;
            if (u[37] !== allowedProviders) {
                se = (he)=>(allowedProviders === undefined || he.providers.some((_e)=>allowedProviders.includes(_e))) && (he.value !== "aws_refresh" || !!a);
                u[37] = allowedProviders;
                u[38] = se;
            } else {
                se = u[38];
            }
            let Oe = Pt.filter(se);
            switch(oauthStatus.state){
                case "idle":
                    {
                        const h = startingMessage ? startingMessage : "Claude Code can be used with your Claude subscription or billed based on API usage through your Console account.";
                        let _;
                        if (u[39] !== h) {
                            _ = e(n, {
                                bold: true,
                                children: h
                            });
                            u[39] = h;
                            u[40] = _;
                        } else {
                            _ = u[40];
                        }
                        let E;
                        if (u[41] !== gatewayUnsupportedWarning) {
                            E = gatewayUnsupportedWarning && e(n, {
                                color: "warning",
                                children: gatewayUnsupportedWarning
                            });
                            u[41] = gatewayUnsupportedWarning;
                            u[42] = E;
                        } else {
                            E = u[42];
                        }
                        const q = !firstPartyLoginAllowed && Oe.length === 0 && e(n, {
                            color: "error",
                            children: c7("firstParty")?.message ?? "Your organization's managed settings (allowedProviders) admit no sign-in this screen can offer; ask your administrator."
                        });
                        let re;
                        if (u[43] === S) {
                            re = e(n, {
                                children: "Select login method:"
                            });
                            u[43] = re;
                        } else {
                            re = u[43];
                        }
                        let ie;
                        if (u[44] !== firstPartyLoginAllowed) {
                            ie = firstPartyLoginAllowed ? [
                                {
                                    label: r(n, {
                                        children: [
                                            "Claude account with subscription ·",
                                            " ",
                                            e(n, {
                                                dimColor: true,
                                                children: "Pro, Max, Team, or Enterprise"
                                            }),
                                            false
                                        ]
                                    }),
                                    value: "claudeai"
                                },
                                {
                                    label: r(n, {
                                        children: [
                                            "Anthropic Console account ·",
                                            " ",
                                            e(n, {
                                                dimColor: true,
                                                children: "API usage billing"
                                            })
                                        ]
                                    }),
                                    value: "console"
                                }
                            ] : [];
                            u[44] = firstPartyLoginAllowed;
                            u[45] = ie;
                        } else {
                            ie = u[45];
                        }
                        const de = Oe.length > 0 ? [
                            {
                                label: r(n, {
                                    children: [
                                        "3rd-party platform ·",
                                        " ",
                                        e(n, {
                                            dimColor: true,
                                            children: Oe.map(Do).join(", ")
                                        })
                                    ]
                                }),
                                value: "platform"
                            }
                        ] : [];
                        let Ce;
                        if (u[46] !== de || u[47] !== ie) {
                            Ce = [
                                ...ie,
                                ...de
                            ];
                            u[46] = de;
                            u[47] = ie;
                            u[48] = Ce;
                        } else {
                            Ce = u[48];
                        }
                        let De;
                        if (u[49] !== consoleProfileLoginAllowed || u[50] !== setConsoleProfileLogin || u[51] !== setLoginWithClaudeAi || u[52] !== setOAuthStatus) {
                            De = (Re)=>{
                                if (Re === "platform") {
                                    i("tengu_oauth_platform_selected", {});
                                    setOAuthStatus({
                                        state: "platform_setup"
                                    });
                                } else if (Re === "claudeai") {
                                    i("tengu_oauth_claudeai_selected", {});
                                    setLoginWithClaudeAi(true);
                                    setConsoleProfileLogin(false);
                                    setOAuthStatus({
                                        state: "ready_to_start"
                                    });
                                } else if (consoleProfileLoginAllowed) {
                                    i("tengu_oauth_console_selected", {});
                                    setOAuthStatus({
                                        state: "console_method"
                                    });
                                } else {
                                    i("tengu_oauth_console_selected", {});
                                    setLoginWithClaudeAi(false);
                                    setConsoleProfileLogin(false);
                                    setOAuthStatus({
                                        state: "ready_to_start"
                                    });
                                }
                            };
                            u[49] = consoleProfileLoginAllowed;
                            u[50] = setConsoleProfileLogin;
                            u[51] = setLoginWithClaudeAi;
                            u[52] = setOAuthStatus;
                            u[53] = De;
                        } else {
                            De = u[53];
                        }
                        let Ne;
                        if (u[54] !== Ce || u[55] !== De) {
                            Ne = e(s, {
                                children: e(Ve, {
                                    options: Ce,
                                    onChange: De
                                })
                            });
                            u[54] = Ce;
                            u[55] = De;
                            u[56] = Ne;
                        } else {
                            Ne = u[56];
                        }
                        let qe;
                        if (u[57] !== Ne || u[58] !== _ || u[59] !== E || u[60] !== q) {
                            qe = r(s, {
                                flexDirection: "column",
                                gap: 1,
                                children: [
                                    _,
                                    E,
                                    q,
                                    re,
                                    Ne
                                ]
                            });
                            u[57] = Ne;
                            u[58] = _;
                            u[59] = E;
                            u[60] = q;
                            u[61] = qe;
                        } else {
                            qe = u[61];
                        }
                        k = qe;
                        break Ht;
                    }
                case "gateway_setup":
                    {
                        let onDone;
                        if (u[62] !== onAuthSuccess || u[63] !== setOAuthStatus) {
                            onDone = ()=>{
                                onAuthSuccess?.();
                                setOAuthStatus({
                                    state: "gateway_done"
                                });
                            };
                            u[62] = onAuthSuccess;
                            u[63] = setOAuthStatus;
                            u[64] = onDone;
                        } else {
                            onDone = u[64];
                        }
                        let _;
                        if (u[65] !== setOAuthStatus) {
                            _ = ()=>setOAuthStatus({
                                    state: "idle"
                                });
                            u[65] = setOAuthStatus;
                            u[66] = _;
                        } else {
                            _ = u[66];
                        }
                        let E;
                        if (u[67] !== forceLoginGatewayUrl || u[68] !== gatewayInternalNetworks || u[69] !== gatewayNamedBy || u[70] !== gatewayScreenLocked || u[71] !== onDone || u[72] !== _) {
                            E = e(it, {
                                initialUrl: forceLoginGatewayUrl,
                                namedBy: gatewayNamedBy,
                                internalNetworks: gatewayInternalNetworks,
                                screenLocked: gatewayScreenLocked,
                                onDone,
                                onCancel: _
                            });
                            u[67] = forceLoginGatewayUrl;
                            u[68] = gatewayInternalNetworks;
                            u[69] = gatewayNamedBy;
                            u[70] = gatewayScreenLocked;
                            u[71] = onDone;
                            u[72] = _;
                            u[73] = E;
                        } else {
                            E = u[73];
                        }
                        k = E;
                        break Ht;
                    }
                case "gateway_done":
                    {
                        let h;
                        if (u[74] === S) {
                            h = e(n, {
                                color: "success",
                                children: "Connected to Cloud gateway."
                            });
                            u[74] = h;
                        } else {
                            h = u[74];
                        }
                        let _;
                        if (u[75] === S) {
                            _ = r(s, {
                                flexDirection: "column",
                                gap: 1,
                                marginTop: 1,
                                children: [
                                    h,
                                    r(n, {
                                        dimColor: true,
                                        children: [
                                            "Press ",
                                            e(n, {
                                                bold: true,
                                                children: "Enter"
                                            }),
                                            " to continue."
                                        ]
                                    })
                                ]
                            });
                            u[75] = _;
                        } else {
                            _ = u[75];
                        }
                        k = _;
                        break Ht;
                    }
                case "console_method":
                    {
                        let h;
                        let _;
                        if (u[76] === S) {
                            h = e(n, {
                                bold: true,
                                children: "Anthropic Console account"
                            });
                            _ = e(n, {
                                children: "How do you want to sign in?"
                            });
                            u[76] = h;
                            u[77] = _;
                        } else {
                            h = u[76];
                            _ = u[77];
                        }
                        let E;
                        if (u[78] === S) {
                            E = {
                                label: r(n, {
                                    children: [
                                        "Sign in with your Console account",
                                        " ",
                                        e(n, {
                                            dimColor: true,
                                            children: "(recommended)"
                                        })
                                    ]
                                }),
                                value: "wif"
                            };
                            u[78] = E;
                        } else {
                            E = u[78];
                        }
                        let q;
                        if (u[79] === S) {
                            q = e(n, {
                                dimColor: true,
                                children: "(legacy)"
                            });
                            u[79] = q;
                        } else {
                            q = u[79];
                        }
                        let re;
                        if (u[80] === S) {
                            re = [
                                E,
                                {
                                    label: r(n, {
                                        children: [
                                            "Create an API key ",
                                            q,
                                            " ·",
                                            " ",
                                            e(n, {
                                                dimColor: true,
                                                children: "adds a key to your Console workspace"
                                            })
                                        ]
                                    }),
                                    value: "api-key"
                                },
                                {
                                    label: "Go back",
                                    value: "back"
                                }
                            ];
                            u[80] = re;
                        } else {
                            re = u[80];
                        }
                        let ie;
                        if (u[81] !== setOAuthStatus) {
                            ie = ()=>setOAuthStatus({
                                    state: "idle"
                                });
                            u[81] = setOAuthStatus;
                            u[82] = ie;
                        } else {
                            ie = u[82];
                        }
                        let de;
                        if (u[83] !== setConsoleProfileLogin || u[84] !== setLoginWithClaudeAi || u[85] !== setOAuthStatus) {
                            de = (Me)=>{
                                if (Me === "back") {
                                    setOAuthStatus({
                                        state: "idle"
                                    });
                                    return;
                                }
                                setLoginWithClaudeAi(false);
                                if (Me === "wif") {
                                    i("tengu_oauth_console_token_selected", {});
                                    setConsoleProfileLogin(true);
                                } else {
                                    i("tengu_oauth_console_api_key_selected", {});
                                    setConsoleProfileLogin(false);
                                }
                                setOAuthStatus({
                                    state: "ready_to_start"
                                });
                            };
                            u[83] = setConsoleProfileLogin;
                            u[84] = setLoginWithClaudeAi;
                            u[85] = setOAuthStatus;
                            u[86] = de;
                        } else {
                            de = u[86];
                        }
                        let Ce;
                        if (u[87] !== de || u[88] !== ie) {
                            Ce = r(s, {
                                flexDirection: "column",
                                gap: 1,
                                children: [
                                    h,
                                    _,
                                    e(s, {
                                        children: e(Ve, {
                                            options: re,
                                            onCancel: ie,
                                            onChange: de
                                        })
                                    })
                                ]
                            });
                            u[87] = de;
                            u[88] = ie;
                            u[89] = Ce;
                        } else {
                            Ce = u[89];
                        }
                        k = Ce;
                        break Ht;
                    }
                case "platform_setup":
                    {
                        let h;
                        if (u[90] === S) {
                            h = e(n, {
                                bold: true,
                                children: "Using 3rd-party platforms"
                            });
                            u[90] = h;
                        } else {
                            h = u[90];
                        }
                        let _;
                        let E;
                        if (u[91] !== setOAuthStatus) {
                            _ = (Fe)=>{
                                Je: switch(Fe){
                                    case "bedrock":
                                        {
                                            i("tengu_oauth_bedrock_wizard_launched", {});
                                            setOAuthStatus({
                                                state: "bedrock_wizard"
                                            });
                                            break Je;
                                        }
                                    case "aws_refresh":
                                        {
                                            i("tengu_oauth_aws_refresh_launched", {});
                                            setOAuthStatus({
                                                state: "aws_refresh_running"
                                            });
                                            break Je;
                                        }
                                    case "foundry":
                                        {
                                            i("tengu_oauth_platform_docs_opened", {
                                                platform: b("foundry")
                                            });
                                            Fs("https://code.claude.com/docs/en/microsoft-foundry");
                                            setOAuthStatus({
                                                state: "idle"
                                            });
                                            break Je;
                                        }
                                    case "vertex":
                                        {
                                            i("tengu_oauth_vertex_wizard_launched", {});
                                            setOAuthStatus({
                                                state: "vertex_wizard"
                                            });
                                            break Je;
                                        }
                                    default:
                                        {
                                            setOAuthStatus({
                                                state: "idle"
                                            });
                                        }
                                }
                            };
                            E = ()=>setOAuthStatus({
                                    state: "idle"
                                });
                            u[91] = setOAuthStatus;
                            u[92] = _;
                            u[93] = E;
                        } else {
                            _ = u[92];
                            E = u[93];
                        }
                        k = r(s, {
                            flexDirection: "column",
                            gap: 1,
                            children: [
                                h,
                                e(Ve, {
                                    options: [
                                        ...Oe.map(No),
                                        {
                                            label: "Go back",
                                            value: "back"
                                        }
                                    ],
                                    onChange: _,
                                    onCancel: E
                                }),
                                Oe.some(Mo) && r(n, {
                                    dimColor: true,
                                    children: [
                                        "Foundry: ",
                                        e(Wt, {
                                            url: "https://code.claude.com/docs/en/microsoft-foundry",
                                            children: "https://code.claude.com/docs/en/microsoft-foundry"
                                        })
                                    ]
                                })
                            ]
                        });
                        break Ht;
                    }
                case "aws_refresh_running":
                    {
                        let h;
                        if (u[94] !== setOAuthStatus) {
                            h = e(ht, {
                                onComplete: (ok)=>setOAuthStatus({
                                        state: "aws_refresh_done",
                                        ok
                                    })
                            });
                            u[94] = setOAuthStatus;
                            u[95] = h;
                        } else {
                            h = u[95];
                        }
                        k = h;
                        break Ht;
                    }
                case "aws_refresh_done":
                    {
                        let h;
                        if (u[96] !== oauthStatus.ok) {
                            h = oauthStatus.ok ? e(n, {
                                color: "success",
                                children: "AWS credentials refreshed."
                            }) : e(n, {
                                color: "error",
                                children: "awsAuthRefresh failed. Check the command in your settings and try running it in a separate terminal."
                            });
                            u[96] = oauthStatus.ok;
                            u[97] = h;
                        } else {
                            h = u[97];
                        }
                        let _;
                        if (u[98] === S) {
                            _ = r(n, {
                                dimColor: true,
                                children: [
                                    "Press ",
                                    e(n, {
                                        bold: true,
                                        children: "Enter"
                                    }),
                                    " to continue."
                                ]
                            });
                            u[98] = _;
                        } else {
                            _ = u[98];
                        }
                        let E;
                        if (u[99] !== h) {
                            E = r(s, {
                                flexDirection: "column",
                                gap: 1,
                                children: [
                                    h,
                                    _
                                ]
                            });
                            u[99] = h;
                            u[100] = E;
                        } else {
                            E = u[100];
                        }
                        k = E;
                        break Ht;
                    }
                case "bedrock_wizard":
                    {
                        let h;
                        if (u[101] !== setOAuthStatus) {
                            h = e(Amt, {
                                onComplete: (et)=>setOAuthStatus({
                                        state: "bedrock_done",
                                        message: et
                                    }),
                                onCancel: ()=>setOAuthStatus({
                                        state: "platform_setup"
                                    }),
                                exitOnCtrlCD: true
                            });
                            u[101] = setOAuthStatus;
                            u[102] = h;
                        } else {
                            h = u[102];
                        }
                        k = h;
                        break Ht;
                    }
                case "bedrock_done":
                case "vertex_done":
                    {
                        let h;
                        if (u[103] !== oauthStatus.message) {
                            h = e(n, {
                                color: "success",
                                children: oauthStatus.message
                            });
                            u[103] = oauthStatus.message;
                            u[104] = h;
                        } else {
                            h = u[104];
                        }
                        let _;
                        if (u[105] === S) {
                            _ = r(n, {
                                dimColor: true,
                                children: [
                                    "Press ",
                                    e(n, {
                                        bold: true,
                                        children: "Enter"
                                    }),
                                    " to restart Claude Code."
                                ]
                            });
                            u[105] = _;
                        } else {
                            _ = u[105];
                        }
                        let E;
                        if (u[106] !== h) {
                            E = r(s, {
                                flexDirection: "column",
                                gap: 1,
                                children: [
                                    h,
                                    _
                                ]
                            });
                            u[106] = h;
                            u[107] = E;
                        } else {
                            E = u[107];
                        }
                        k = E;
                        break Ht;
                    }
                case "vertex_wizard":
                    {
                        let h;
                        if (u[108] !== setOAuthStatus) {
                            h = e(Cmt, {
                                onComplete: (tt)=>setOAuthStatus({
                                        state: "vertex_done",
                                        message: tt
                                    }),
                                onCancel: ()=>setOAuthStatus({
                                        state: "platform_setup"
                                    }),
                                exitOnCtrlCD: true
                            });
                            u[108] = setOAuthStatus;
                            u[109] = h;
                        } else {
                            h = u[109];
                        }
                        k = h;
                        break Ht;
                    }
                case "waiting_for_login":
                    {
                        let h;
                        if (u[110] !== forcedMethodMessage) {
                            h = forcedMethodMessage && e(s, {
                                children: e(n, {
                                    dimColor: true,
                                    children: forcedMethodMessage
                                })
                            });
                            u[110] = forcedMethodMessage;
                            u[111] = h;
                        } else {
                            h = u[111];
                        }
                        let _;
                        if (u[112] !== keyMintFallbackReason) {
                            _ = keyMintFallbackReason && e(s, {
                                children: e(n, {
                                    dimColor: true,
                                    children: `${Ye} (${keyMintFallbackReason.cause}), so this sign-in will create an API key.`
                                })
                            });
                            u[112] = keyMintFallbackReason;
                            u[113] = _;
                        } else {
                            _ = u[113];
                        }
                        let E;
                        if (u[114] !== showPastePrompt) {
                            E = !showPastePrompt && r(s, {
                                children: [
                                    e(ui, {}),
                                    e(n, {
                                        children: "Opening browser to sign in…"
                                    })
                                ]
                            });
                            u[114] = showPastePrompt;
                            u[115] = E;
                        } else {
                            E = u[115];
                        }
                        let q;
                        if (u[116] !== cursorOffset || u[117] !== handleSubmitCode || u[118] !== showCursor || u[119] !== oauthStatus.url || u[120] !== pastedCode || u[121] !== setCursorOffset || u[122] !== setPastedCode || u[123] !== showPastePrompt || u[124] !== textInputColumns) {
                            q = showPastePrompt && r(s, {
                                children: [
                                    e(n, {
                                        children: pt
                                    }),
                                    e(Sr, {
                                        value: pastedCode,
                                        onChange: setPastedCode,
                                        onSubmit: (wt)=>handleSubmitCode(wt, oauthStatus.url),
                                        cursorOffset,
                                        onChangeCursorOffset: setCursorOffset,
                                        columns: textInputColumns,
                                        mask: "*",
                                        focus: true,
                                        showCursor
                                    })
                                ]
                            });
                            u[116] = cursorOffset;
                            u[117] = handleSubmitCode;
                            u[118] = showCursor;
                            u[119] = oauthStatus.url;
                            u[120] = pastedCode;
                            u[121] = setCursorOffset;
                            u[122] = setPastedCode;
                            u[123] = showPastePrompt;
                            u[124] = textInputColumns;
                            u[125] = q;
                        } else {
                            q = u[125];
                        }
                        let re;
                        if (u[126] !== h || u[127] !== _ || u[128] !== E || u[129] !== q) {
                            re = r(s, {
                                flexDirection: "column",
                                gap: 1,
                                children: [
                                    h,
                                    _,
                                    E,
                                    q
                                ]
                            });
                            u[126] = h;
                            u[127] = _;
                            u[128] = E;
                            u[129] = q;
                            u[130] = re;
                        } else {
                            re = u[130];
                        }
                        k = re;
                        break Ht;
                    }
                case "creating_api_key":
                    {
                        let h;
                        if (u[131] === S) {
                            h = e(s, {
                                flexDirection: "column",
                                gap: 1,
                                children: r(s, {
                                    children: [
                                        e(ui, {}),
                                        e(n, {
                                            children: "Creating API key for Claude Code…"
                                        })
                                    ]
                                })
                            });
                            u[131] = h;
                        } else {
                            h = u[131];
                        }
                        k = h;
                        break Ht;
                    }
                case "about_to_retry":
                    {
                        let h;
                        if (u[132] === S) {
                            h = e(s, {
                                flexDirection: "column",
                                gap: 1,
                                children: e(n, {
                                    color: "permission",
                                    children: "Retrying…"
                                })
                            });
                            u[132] = h;
                        } else {
                            h = u[132];
                        }
                        k = h;
                        break Ht;
                    }
                case "success":
                    {
                        let h;
                        if (u[133] !== mode || u[134] !== oauthStatus.token) {
                            h = mode === "setup-token" && oauthStatus.token ? null : r(Y, {
                                children: [
                                    Mn()?.emailAddress ? r(n, {
                                        dimColor: true,
                                        children: [
                                            "Logged in as",
                                            " ",
                                            e(n, {
                                                children: Mn()?.emailAddress
                                            })
                                        ]
                                    }) : null,
                                    r(n, {
                                        color: "success",
                                        children: [
                                            "Login successful. Press ",
                                            e(n, {
                                                bold: true,
                                                children: "Enter"
                                            }),
                                            " to continue…"
                                        ]
                                    })
                                ]
                            });
                            u[133] = mode;
                            u[134] = oauthStatus.token;
                            u[135] = h;
                        } else {
                            h = u[135];
                        }
                        let _;
                        if (u[136] !== h) {
                            _ = e(s, {
                                flexDirection: "column",
                                children: h
                            });
                            u[136] = h;
                            u[137] = _;
                        } else {
                            _ = u[137];
                        }
                        k = _;
                        break Ht;
                    }
                case "storage_failed":
                    {
                        let h;
                        if (u[138] !== oauthStatus.backendName) {
                            h = zt(oauthStatus.backendName);
                            u[138] = oauthStatus.backendName;
                            u[139] = h;
                        } else {
                            h = u[139];
                        }
                        let Se = h;
                        let _;
                        if (u[140] !== Se || u[141] !== oauthStatus.sessionAuth || u[142] !== oauthStatus.transient) {
                            _ = e(s, {
                                flexDirection: "column",
                                children: oauthStatus.sessionAuth === "fresh" ? r(Y, {
                                    children: [
                                        e(n, {
                                            color: "warning",
                                            children: oauthStatus.transient ? `Logged in for now, but Claude Code couldn't confirm your new credentials were saved to ${Se}.` : `Logged in for now, but your new credentials could not be saved to ${Se}.`
                                        }),
                                        e(n, {
                                            color: "warning",
                                            children: oauthStatus.transient ? "This login may expire mid-session and may not persist after you exit Claude Code." : "This login may expire mid-session and will not persist after you exit Claude Code."
                                        })
                                    ]
                                }) : oauthStatus.sessionAuth === "previous" ? r(Y, {
                                    children: [
                                        r(n, {
                                            color: "error",
                                            children: [
                                                "Sign-in completed in the browser, but your new credentials could not be saved to ",
                                                Se,
                                                " — a previous login's credentials are still in place and will be used instead."
                                            ]
                                        }),
                                        e(n, {
                                            dimColor: true,
                                            children: "(Your new sign-in did not replace the existing credentials.)"
                                        })
                                    ]
                                }) : r(Y, {
                                    children: [
                                        r(n, {
                                            color: "error",
                                            children: [
                                                "Sign-in completed in the browser, but your credentials could not be saved to ",
                                                Se,
                                                " — you are not logged in."
                                            ]
                                        }),
                                        e(n, {
                                            dimColor: true,
                                            children: "(No previous login on this machine is usable right now either.)"
                                        })
                                    ]
                                })
                            });
                            u[140] = Se;
                            u[141] = oauthStatus.sessionAuth;
                            u[142] = oauthStatus.transient;
                            u[143] = _;
                        } else {
                            _ = u[143];
                        }
                        let E;
                        if (u[144] === S) {
                            E = e(n, {
                                dimColor: true,
                                children: "To avoid having to log in again each session:"
                            });
                            u[144] = E;
                        } else {
                            E = u[144];
                        }
                        let q;
                        if (u[145] !== Se) {
                            q = r(n, {
                                dimColor: true,
                                children: [
                                    "  ",
                                    "• fix access to ",
                                    Se,
                                    ", then run /login again"
                                ]
                            });
                            u[145] = Se;
                            u[146] = q;
                        } else {
                            q = u[146];
                        }
                        let re;
                        if (u[147] === S) {
                            re = r(n, {
                                dimColor: true,
                                children: [
                                    "  ",
                                    "• or run claude setup-token and set CLAUDE_CODE_OAUTH_TOKEN"
                                ]
                            });
                            u[147] = re;
                        } else {
                            re = u[147];
                        }
                        let ie;
                        if (u[148] !== q) {
                            ie = r(s, {
                                flexDirection: "column",
                                children: [
                                    E,
                                    q,
                                    re
                                ]
                            });
                            u[148] = q;
                            u[149] = ie;
                        } else {
                            ie = u[149];
                        }
                        let de;
                        if (u[150] !== allowContinueWithoutLogin || u[151] !== oauthStatus.sessionAuth) {
                            de = oauthStatus.sessionAuth === "fresh" ? r(n, {
                                color: "permission",
                                children: [
                                    "Press ",
                                    e(n, {
                                        bold: true,
                                        children: "Enter"
                                    }),
                                    " to continue…"
                                ]
                            }) : r(n, {
                                color: "permission",
                                children: [
                                    "Press ",
                                    e(n, {
                                        bold: true,
                                        children: "Enter"
                                    }),
                                    " to retry.",
                                    " ",
                                    allowContinueWithoutLogin ? e(n, {
                                        dimColor: true,
                                        children: e(G, {
                                            chord: "escape",
                                            action: "continue without logging in",
                                            parens: true
                                        })
                                    }) : null
                                ]
                            });
                            u[150] = allowContinueWithoutLogin;
                            u[151] = oauthStatus.sessionAuth;
                            u[152] = de;
                        } else {
                            de = u[152];
                        }
                        let Ce;
                        if (u[153] !== de || u[154] !== _ || u[155] !== ie) {
                            Ce = r(s, {
                                flexDirection: "column",
                                gap: 1,
                                children: [
                                    _,
                                    ie,
                                    de
                                ]
                            });
                            u[153] = de;
                            u[154] = _;
                            u[155] = ie;
                            u[156] = Ce;
                        } else {
                            Ce = u[156];
                        }
                        k = Ce;
                        break Ht;
                    }
                case "account_on_hold":
                    {
                        let h;
                        if (u[157] !== oauthStatus.message) {
                            h = e(n, {
                                color: "warning",
                                children: oauthStatus.message
                            });
                            u[157] = oauthStatus.message;
                            u[158] = h;
                        } else {
                            h = u[158];
                        }
                        let _;
                        if (u[159] !== mode) {
                            _ = mode !== "setup-token" && r(n, {
                                dimColor: true,
                                children: [
                                    "Press ",
                                    e(n, {
                                        bold: true,
                                        children: "Enter"
                                    }),
                                    " to go back to login options."
                                ]
                            });
                            u[159] = mode;
                            u[160] = _;
                        } else {
                            _ = u[160];
                        }
                        let E;
                        if (u[161] !== h || u[162] !== _) {
                            E = r(s, {
                                flexDirection: "column",
                                gap: 1,
                                children: [
                                    h,
                                    _
                                ]
                            });
                            u[161] = h;
                            u[162] = _;
                            u[163] = E;
                        } else {
                            E = u[163];
                        }
                        k = E;
                        break Ht;
                    }
                case "error":
                    {
                        let Ge;
                        let flexDirection;
                        let gap;
                        let E;
                        if (u[164] !== oauthStatus.message || u[165] !== oauthStatus.verbatim) {
                            let ze = oauthStatus.verbatim ? /\s(https:\/\/\S+)$/.exec(oauthStatus.message) : null;
                            let Be = ze?.[1];
                            let Te = Be && j7(Be);
                            let $e = Be && Te ? Be.slice(Te.length) : "";
                            let oe = Te ? H$e(Te) : undefined;
                            Ge = s;
                            flexDirection = "column";
                            gap = 1;
                            E = ze && Te ? r(s, {
                                flexDirection: "column",
                                children: [
                                    e(n, {
                                        color: "error",
                                        children: oauthStatus.message.slice(0, ze.index)
                                    }),
                                    r(n, {
                                        color: "error",
                                        children: [
                                            oe ? e(Wt, {
                                                url: oe,
                                                assumeSupport: true,
                                                children: e(n, {
                                                    color: "error",
                                                    children: oe
                                                })
                                            }) : Te,
                                            $e
                                        ]
                                    })
                                ]
                            }) : e(n, {
                                color: "error",
                                children: oauthStatus.verbatim ? oauthStatus.message : `OAuth error: ${oauthStatus.message}`
                            });
                            u[164] = oauthStatus.message;
                            u[165] = oauthStatus.verbatim;
                            u[166] = Ge;
                            u[167] = flexDirection;
                            u[168] = gap;
                            u[169] = E;
                        } else {
                            Ge = u[166];
                            flexDirection = u[167];
                            gap = u[168];
                            E = u[169];
                        }
                        let q;
                        if (u[170] !== keyMintFallbackReason) {
                            q = keyMintFallbackReason && e(n, {
                                dimColor: true,
                                children: `${Ye}: ${keyMintFallbackReason.message}`
                            });
                            u[170] = keyMintFallbackReason;
                            u[171] = q;
                        } else {
                            q = u[171];
                        }
                        let re;
                        if (u[172] !== allowContinueWithoutLogin || u[173] !== oauthStatus.toRetry) {
                            re = (oauthStatus.toRetry || allowContinueWithoutLogin) && e(s, {
                                marginTop: 1,
                                children: r(n, {
                                    color: "permission",
                                    children: [
                                        oauthStatus.toRetry && r(Y, {
                                            children: [
                                                "Press ",
                                                e(n, {
                                                    bold: true,
                                                    children: "Enter"
                                                }),
                                                " to retry.",
                                                " "
                                            ]
                                        }),
                                        allowContinueWithoutLogin ? e(n, {
                                            dimColor: true,
                                            children: e(G, {
                                                chord: "escape",
                                                action: "continue without logging in",
                                                parens: true
                                            })
                                        }) : null
                                    ]
                                })
                            });
                            u[172] = allowContinueWithoutLogin;
                            u[173] = oauthStatus.toRetry;
                            u[174] = re;
                        } else {
                            re = u[174];
                        }
                        let ie;
                        if (u[175] !== Ge || u[176] !== flexDirection || u[177] !== gap || u[178] !== E || u[179] !== q || u[180] !== re) {
                            ie = r(Ge, {
                                flexDirection,
                                gap,
                                children: [
                                    E,
                                    q,
                                    re
                                ]
                            });
                            u[175] = Ge;
                            u[176] = flexDirection;
                            u[177] = gap;
                            u[178] = E;
                            u[179] = q;
                            u[180] = re;
                            u[181] = ie;
                        } else {
                            ie = u[181];
                        }
                        k = ie;
                        break Ht;
                    }
                default:
                    {
                        k = null;
                        break Ht;
                    }
            }
        }
        u[1] = allowContinueWithoutLogin;
        u[2] = allowedProviders;
        u[3] = consoleProfileLoginAllowed;
        u[4] = cursorOffset;
        u[5] = firstPartyLoginAllowed;
        u[6] = forceLoginGatewayUrl;
        u[7] = forcedMethodMessage;
        u[8] = gatewayInternalNetworks;
        u[9] = gatewayNamedBy;
        u[10] = gatewayScreenLocked;
        u[11] = gatewayUnsupportedWarning;
        u[12] = handleSubmitCode;
        u[13] = showCursor;
        u[14] = keyMintFallbackReason;
        u[15] = mode;
        u[16] = oauthStatus.backendName;
        u[17] = oauthStatus.message;
        u[18] = oauthStatus.ok;
        u[19] = oauthStatus.sessionAuth;
        u[20] = oauthStatus.state;
        u[21] = oauthStatus.toRetry;
        u[22] = oauthStatus.token;
        u[23] = oauthStatus.transient;
        u[24] = oauthStatus.url;
        u[25] = oauthStatus.verbatim;
        u[26] = onAuthSuccess;
        u[27] = pastedCode;
        u[28] = setConsoleProfileLogin;
        u[29] = setCursorOffset;
        u[30] = setLoginWithClaudeAi;
        u[31] = setOAuthStatus;
        u[32] = setPastedCode;
        u[33] = showPastePrompt;
        u[34] = startingMessage;
        u[35] = textInputColumns;
        u[36] = k;
    } else {
        k = u[36];
    }
    if (k !== Sn) {
        return k;
    }
}
function zt(backendName) {
    switch(backendName){
        case "keychain":
            return "the macOS Keychain";
        case "keychain-with-plaintext-fallback":
            return "the macOS Keychain or the credentials file";
        case "windows-credman":
            return "Windows Credential Manager";
        case "windows-credman-with-plaintext-fallback":
            return "Windows Credential Manager or the credentials file";
        case "plaintext":
            return "the credentials file";
        default:
            return "secure storage";
    }
}
export { sve };
