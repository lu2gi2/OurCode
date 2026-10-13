import { k1e } from "/$bunfs/root/chunk-dx2w0vga.js";
import { P0, E9, z8e, eo, UPe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { W, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { jpt } from "/$bunfs/root/chunk-6kc68p18.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { nSn } from "/$bunfs/root/chunk-gm0rqgsx.js";
import { W9 } from "/$bunfs/root/chunk-e271d6pm.js";
import { Clt, xEs, f6e, DV, Pb, Mn, dz, Nt, xY } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Lb } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { wn } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Iys } from "/$bunfs/root/chunk-gr4a0fky.js";
import { x8 } from "/$bunfs/root/chunk-peahjaep.js";
import { a$e } from "/$bunfs/root/chunk-kpf6v0ta.js";
import { vQt, mmo, EQt } from "/$bunfs/root/chunk-5s4qvyjz.js";
import { vys } from "/$bunfs/root/chunk-499b1h1a.js";
import { XA } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { tYr } from "/$bunfs/root/chunk-q3gfgn6s.js";
import { Iuo } from "/$bunfs/root/chunk-eb0vnwc4.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Na, Zn, Cy, zt } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Tre, AQ, xlo, Dlo, Llo } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { de, W_e } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { hio } from "/$bunfs/root/chunk-46dhek9m.js";
import { R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { RM } from "/$bunfs/root/chunk-rhjwzamj.js";
import { oPt, lQt } from "/$bunfs/root/chunk-k8dhpbv8.js";
import { oce, qJ, sce, Mrt } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { $jr, QGo, ajt, POe, Nhn } from "/$bunfs/root/chunk-ggpgtemh.js";
import { el } from "/$bunfs/root/chunk-2mjaqpws.js";
import { n, yA } from "/$bunfs/root/chunk-8524cxt8.js";
import { Ze } from "/$bunfs/root/chunk-z47a2vff.js";
import { Hn } from "/$bunfs/root/chunk-zby5bms5.js";
import { Yo } from "/$bunfs/root/chunk-yphmh99q.js";
import { GXe } from "/$bunfs/root/chunk-4b1qzs5x.js";
import { _e } from "/$bunfs/root/chunk-1wksey0w.js";
import { sve } from "/$bunfs/root/chunk-faxdh83f.js";
import { Yft } from "/$bunfs/root/chunk-mg5w6bc7.js";
import { lu } from "/$bunfs/root/chunk-yx09pmbw.js";
import { XNt } from "/$bunfs/root/chunk-a05r95n5.js";
import { RUo } from "/$bunfs/root/chunk-bbn1mgqy.js";
import { Kft, icn } from "/$bunfs/root/chunk-0k6yd966.js";
import { Tj, pX } from "/$bunfs/root/chunk-yd9715tx.js";
import { scn } from "/$bunfs/root/chunk-8q7hcpaw.js";
import { Xw, YP } from "/$bunfs/root/chunk-d0t2hmxp.js";
import { ut } from "/$bunfs/root/chunk-wy1471a2.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { CU } from "/$bunfs/root/chunk-vzk31yq7.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
N();
function Se() {
    return f6e() !== undefined;
}
function lHs() {
    xlo(Tre());
}
async function qwe(o, i, s) {
    o.onChangeAPIKey();
    if (!i) {
        return {
            bridgeDisconnected: false,
            accountSwitched: false,
            relaunching: false
        };
    }
    let u = eo();
    let d = u !== null && u !== s.previousGatewayAuth;
    if (Ie() === "gateway") {
        let f = s.onConsentNeeded;
        let T = {
            release: null
        };
        let E = f ? QGo(()=>{
            T.release ??= $jr();
            return f();
        }) : null;
        try {
            let v;
            try {
                v = await Nhn(Yft, o.storageV5, o.credentials);
            } finally{
                E?.();
            }
            let F = eo();
            let _ = oe(F);
            if (d && !v.fetchSucceeded && v.failure?.errorKind === "gateway_cert_mismatch") {
                return await ne(o, F, cHs(_, v.failure.gatewayPinMismatch));
            }
            if (!v.fetchSucceeded || XNt()) {
                let D = v.fetchSucceeded ? undefined : v.failure;
                await ae(o, dHs(_, D, d), (P)=>uHs(_, D, P, d));
                return I;
            }
            if (wn()) {
                return I;
            }
            scn("gateway");
            XA();
            hio();
        } finally{
            if (!wn()) {
                T.release?.();
            }
        }
    } else {
        POe(Yft, o.storageV5, o.credentials);
    }
    z8e();
    let g = lQt().catch(()=>{});
    g.then(()=>{
        if (Iuo()) {
            tYr({
                credentials: o.credentials,
                storageV5: o.storageV5,
                timeoutMs: 5000
            });
        }
    }).catch(()=>{});
    dz();
    xY();
    Ut(g, oPt, "post-login policy limits refresh").catch(()=>{}).then(()=>RUo()).then(()=>{}).catch((f)=>c(f));
    let { setAppState } = s;
    let h = k1e.of(o.session);
    let C = ()=>h.credentialsPersisted();
    let s_previousAccount = s.previousAccount;
    let A = Mn();
    let b = Pb(s_previousAccount, A);
    let { replBridgeEnabled, replBridgeOutboundOnly } = o.getAppState();
    let accountSwitched = s_previousAccount?.accountUuid !== undefined && !b;
    let bridgeDisconnected = accountSwitched && replBridgeEnabled && !replBridgeOutboundOnly;
    if (accountSwitched) {
        setAppState((f)=>{
            if (!(f.replBridgeEnabled || f.replBridgeError !== undefined)) {
                return f;
            }
            t("[bridge:repl] Account changed via /login — disconnecting Remote Control session");
            return {
                ...f,
                replBridgeEnabled: false,
                replBridgeExplicit: false,
                replBridgeOutboundOnly: false,
                replBridgeError: undefined,
                replBridgeErrorKind: undefined,
                notifications: GXe(f.notifications, CU)
            };
        });
    }
    AQ();
    Dlo();
    vys(A);
    s.setAppState(nSn);
    if (accountSwitched) {
        Llo();
        s.setAppState((f)=>({
                ...f,
                replBridgeSessionGroupingId: undefined,
                replBridgeInitialName: undefined,
                ultrareviewOverageConfirmed: false
            }));
        Iys();
        if (o.dialogStore) {
            o.dialogStore.dismissKind(W9.kind);
        } else {
            c(Error("runPostLoginHooks: no dialog store to dismiss a pending Remote Control callout on account switch"));
        }
    }
    if (b && await vQt()) {
        t("[trusted-device] Same account+org re-login with existing token, skipping re-enrollment");
        C();
    } else {
        mmo();
        let f = EQt({
            credentials: o.credentials
        }).then(C, C);
        if (s.awaitEnrollment) {
            await f;
        }
    }
    let { host } = o.session;
    let B = o.getAppState();
    icn(host);
    Clt();
    Kft(host, de(o), setAppState, B.fastMode);
    lHs();
    h.loginCompleted();
    return {
        bridgeDisconnected,
        accountSwitched,
        relaunching: false
    };
}
const te = 16;
function Y(o) {
    return `${o.slice(0, te)}\u2026`;
}
function oe(o) {
    try {
        if (o) {
            return new URL(o.url).hostname;
        }
        return "gateway";
    } catch  {
        return o?.url ?? "gateway";
    }
}
var I = {
    bridgeDisconnected: false,
    accountSwitched: false,
    relaunching: true
};
async function ne(o, i, gatewayLoginError) {
    for(let g = UPe(); g; g = UPe()){
        await g.catch(()=>{});
    }
    let u = eo();
    await xEs(u && i && u.url === i.url ? u : i, o.credentials);
    await ajt(o.storageV5);
    if (wn()) {
        return {
            ...I,
            gatewayLoginError
        };
    }
    let d = !Na();
    if (d) {
        await Tj(o.messages, o.storageV5);
    }
    await Zn(0, "other", {
        finalMessage: `${gatewayLoginError}
This session is ending so that nothing from that gateway stays half-applied. Start claude again${d ? " to continue (your conversation can be resumed)" : ""} and sign in once that is fixed.`
    });
    return {
        ...I,
        gatewayLoginError
    };
}
function cHs(o, i) {
    let s = i?.presentedFingerprint && i.pinnedFingerprint ? `TLS certificate ${Y(i.presentedFingerprint)} instead of the one you trusted (${Y(i.pinnedFingerprint)})` : "a different TLS certificate from the one you trusted";
    return `Cloud gateway sign-in was not completed: on the first request after sign-in, ${o} presented ${s}. No gateway credentials were kept. Usually this means the gateway runs several nodes behind one address that serve different certificates (they must all serve the same one), or something on the network path is intercepting TLS.`;
}
function re(o, i) {
    switch(o.errorKind){
        case "timeout":
            return "the request timed out";
        case "network_error":
            return "couldn't connect to the gateway";
        case "http_401":
            if (i) {
                return "the gateway did not accept the new credential";
            }
            return "the gateway did not accept this session's credential";
        case "http_403":
            return "the gateway refused them for this account: Claude Code may not be enabled for your organization; contact your administrator";
        case "no_auth_available":
            return "no credential was on hand for the request";
        case "profile_credential_error":
            return "the profile credential could not authenticate the request (details with --debug)";
        case "http_4xx":
        case "http_5xx":
            if (o.httpStatus === undefined) {
                return "the gateway answered with an unexpected status";
            }
            return `the gateway answered HTTP ${o.httpStatus}`;
        case "parse_error":
            return "the gateway's response was not valid managed settings";
        case "ruled_empty":
            return "no setting in the gateway's response could be applied as written";
        case "gateway_cert_mismatch":
            return "the gateway's TLS certificate did not match the one you trusted";
        case "gateway_public_address":
            return "the gateway's name resolved to a public address, so the request was not sent";
        case "gateway_pin_refused":
            return "the credentials file that keeps the gateway's TLS pin is a symlink, which is not followed";
        case "gateway_pin_unreadable":
            return "the credentials file that keeps the gateway's TLS pin could not be read (try again)";
        case "unknown_error":
            return "something unexpected went wrong (details with --debug)";
    }
}
function J(o, i, s) {
    if (i) {
        let u = re(i, s);
        if (s) {
            return `Signed in to Cloud gateway ${o}, but couldn't load your organization's managed settings (${u})`;
        }
        return `Couldn't reload your organization's managed settings from Cloud gateway ${o} (${u})`;
    }
    if (s) {
        return `Signed in to Cloud gateway ${o}`;
    }
    return `Your organization's managed settings on Cloud gateway ${o} changed`;
}
function dHs(o, i, s, u = !Na()) {
    let d = u ? "…" : " (this conversation is not saved, so it starts fresh)…";
    let g = J(o, i, s);
    if (i) {
        return `${g}. Restarting Claude Code to retry${d}`;
    }
    return `${g}. Restarting Claude Code to apply ${s ? "your organization's managed settings" : "them"}${d}`;
}
function uHs(o, i, s, u, d = !Na()) {
    return `${J(o, i, u)}. ${i ? "Claude Code has to restart to retry" : `Claude Code has to restart to apply ${u ? "your organization's managed settings" : "them"}`}, and ${s}, so this session is ending instead. Your sign-in is saved: start claude again the same way${d ? " (add --continue to return to this conversation)" : ""}.`;
}
async function ae(o, i, s) {
    if (wn()) {
        return;
    }
    let u = (h)=>Zn(0, "other", {
            finalMessage: s(h)
        });
    await Tj(RM(o), o.storageV5);
    if (wn()) {
        return;
    }
    if (Nt()) {
        return u("a background session cannot restart itself (sign in from a session started directly with `claude`)");
    }
    let toolPermissionContext = de(o);
    let g = qJ(toolPermissionContext, P0());
    if (g.length > 0) {
        return u(`this session has restrictions a restart can't carry over (${g.join("; ")})`);
    }
    let proactivity = {
        proactivityLevel: o.getProactivityLevel(),
        toolPermissionContext
    };
    try {
        await pX({
            freshIfNoTranscript: true,
            extraArgs: [
                ...oce(toolPermissionContext, W_e(o)),
                ...sce(toolPermissionContext, E9())
            ],
            proactivity,
            env: {
                ...x8(),
                ...Mrt(toolPermissionContext.additionalWorkingDirectories)
            },
            preSpawn: ()=>process.stdout.write(`
${i}
`)
        }, o.storageV5);
    } catch (error) {
        c(W(error));
        return u(`it could not restart itself (${l(error)})`);
    }
}
function Vft(o, i, s, { envTokenWasSet = false, envWarningOnce } = {}) {
    if (s.gatewayLoginError !== undefined || s.relaunching) {
        return [
            s.gatewayLoginError
        ];
    }
    let g = i ? pHs(o, s) : undefined;
    let p = gHs({
        envTokenWasSet,
        gatewayActive: Ie() === "gateway",
        willAutoQuery: g?.shouldQuery === true
    });
    if (p === "out-of-band" && envWarningOnce && !envWarningOnce.delivered) {
        envWarningOnce.delivered = true;
        o.applyMessageOp({
            type: "append",
            messages: [
                zt(O0o, "notice")
            ]
        });
    }
    return [
        hHs(i, {
            bridgeDisconnected: s.bridgeDisconnected,
            includeEnvTokenWarning: p === "inline"
        }),
        g
    ];
}
function pHs(o, i) {
    if (i.accountSwitched || i.relaunching) {
        return;
    }
    let s = Cy(o.messages);
    if (s?.isApiErrorMessage && s.error === "authentication_failed") {
        return {
            display: "system",
            shouldQuery: true
        };
    }
}
const Z = "but if that variable is set in your shell profile or a Claude Code settings file, new `claude` sessions will keep using the old token until you remove it there.";
function fHs() {
    return "Signed in. Review your organization's managed settings to continue.";
}
function mHs() {
    if (a.CLAUDE_CODE_OAUTH_TOKEN) {
        return `Warning: CLAUDE_CODE_OAUTH_TOKEN is set in your environment. This session will switch to your new credentials after logging in, ${Z}`;
    }
}
var O0o = `Note: CLAUDE_CODE_OAUTH_TOKEN was set in your environment when /login started. This session will use your new credentials, ${Z}`;
function gHs(o) {
    if (!o.envTokenWasSet || o.gatewayActive) {
        return "none";
    }
    if (o.willAutoQuery) {
        return "out-of-band";
    }
    return "inline";
}
function hHs(o, i) {
    if (!o) {
        return "Login interrupted";
    }
    let s = i.bridgeDisconnected ? `Login successful. ${a$e}` : "Login successful";
    if (i.includeEnvTokenWarning) {
        return `${s}

${O0o}`;
    }
    return s;
}
async function JUs(o, i) {
    if (Ie() === "firstParty" && DV()) {
        o(`Bare mode doesn't use the sign-in from /login. It reads ANTHROPIC_API_KEY or an apiKeyHelper from --settings: set or change one and restart, or ${jpt()} to sign in.`, {
            display: "system"
        });
        return null;
    }
    let startingMessage = mHs();
    let envTokenWasSet = startingMessage !== undefined;
    let d = Mn();
    let previousAccount = d && {
        accountUuid: d.accountUuid,
        organizationUuid: d.organizationUuid
    };
    let previousGatewayAuth = eo();
    let envWarningOnce = {
        delivered: false
    };
    return e(_fe, {
        startingMessage,
        onDone: async (C, M, setAppState)=>{
            let b = false;
            let O = await qwe(i, C, {
                setAppState,
                previousAccount,
                previousGatewayAuth,
                onConsentNeeded: ()=>{
                    b = true;
                    o(fHs(), {
                        display: "system"
                    });
                    return Lb();
                }
            });
            let k = Vft(i, C, O, {
                envTokenWasSet,
                envWarningOnce
            });
            if (b) {
                let [m] = k;
                if (m) {
                    i.applyMessageOp({
                        type: "append",
                        messages: [
                            zt(m, "notice")
                        ]
                    });
                }
                return;
            }
            o(...k);
        }
    });
}
function _fe(o) {
    let p = w(29);
    let i = lu();
    let s = Hn();
    let u = el();
    let [d, g] = y(false);
    let h;
    if (p[0] === S) {
        h = ()=>g(true);
        p[0] = h;
    } else {
        h = p[0];
    }
    let onAuthSuccess = h;
    let M = R(false);
    let [A, b] = y(false);
    let O;
    if (p[1] !== i || p[2] !== o || p[3] !== s) {
        O = (k)=>{
            if (M.current) {
                return;
            }
            M.current = true;
            b(true);
            o.onDone(k, i, s);
        };
        p[1] = i;
        p[2] = o;
        p[3] = s;
        p[4] = O;
    } else {
        O = p[4];
    }
    let m = O;
    let G;
    if (p[5] !== d || p[6] !== m) {
        G = ()=>m(d);
        p[5] = d;
        p[6] = m;
        p[7] = G;
    } else {
        G = p[7];
    }
    let onCancel = G;
    let B;
    if (p[8] === S) {
        B = {
            context: "Settings"
        };
        p[8] = B;
    } else {
        B = p[8];
    }
    Ze("confirm:no", onCancel, B);
    let [f] = y(Se);
    let { exit } = yA();
    let [E, onFreshPickerChange] = y(false);
    let F;
    if (p[9] !== exit || p[10] !== m || p[11] !== E) {
        F = ()=>{
            if (E && !M.current) {
                m(false);
                return;
            }
            exit();
        };
        p[9] = exit;
        p[10] = m;
        p[11] = E;
        p[12] = F;
    } else {
        F = p[12];
    }
    let _ = Yo(F);
    const hideInputGuide = (d || f) && !_.pending;
    let inputGuide;
    if (p[13] !== A || p[14] !== _.keyName || p[15] !== _.pending || p[16] !== E) {
        inputGuide = _.pending ? r(n, {
            children: [
                "Press ",
                _.keyName,
                " again to",
                " ",
                E && !A ? "cancel" : "exit"
            ]
        }) : e(ut, {
            action: "confirm:no",
            context: "Settings",
            fallback: "Esc",
            description: "cancel"
        });
        p[13] = A;
        p[14] = _.keyName;
        p[15] = _.pending;
        p[16] = E;
        p[17] = inputGuide;
    } else {
        inputGuide = p[17];
    }
    let onDone;
    if (p[18] !== m) {
        onDone = ()=>m(true);
        p[18] = m;
        p[19] = onDone;
    } else {
        onDone = p[19];
    }
    const urlOutdent = u ? YP : Xw;
    let children;
    if (p[20] !== o.startingMessage || p[21] !== onDone || p[22] !== urlOutdent) {
        children = e(sve, {
            onDone,
            onAuthSuccess,
            onFreshPickerChange,
            startingMessage: o.startingMessage,
            urlOutdent
        });
        p[20] = o.startingMessage;
        p[21] = onDone;
        p[22] = urlOutdent;
        p[23] = children;
    } else {
        children = p[23];
    }
    let ee;
    if (p[24] !== onCancel || p[25] !== hideInputGuide || p[26] !== inputGuide || p[27] !== children) {
        ee = e(_e, {
            title: "Login",
            onCancel,
            color: "permission",
            isCancelActive: false,
            hideInputGuide,
            inputGuide,
            children
        });
        p[24] = onCancel;
        p[25] = hideInputGuide;
        p[26] = inputGuide;
        p[27] = children;
        p[28] = ee;
    } else {
        ee = p[28];
    }
    return ee;
}
export { lHs, qwe, cHs, dHs, uHs, Vft, pHs, fHs, mHs, O0o, gHs, hHs, JUs, _fe };
