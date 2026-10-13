import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Swr, ez, wUn, wwr, eho, vwr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { hMt, idt, MFe, M8 } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { Xne } from "/$bunfs/root/chunk-53bavyda.js";
import { Fs } from "/$bunfs/root/chunk-cg7f88dh.js";
import { createServer } from "http";
import { createHash, randomBytes } from "crypto";
const L = 200;
class u {
    localServer;
    port = 0;
    promiseResolver = null;
    promiseRejecter = null;
    expectedState = null;
    pendingResponse = null;
    callbackPath;
    codeReceived = false;
    constructor(e = "/callback"){
        this.localServer = createServer();
        this.callbackPath = e;
    }
    async start(e) {
        return new Promise((resolve, reject)=>{
            this.localServer.once("error", (o)=>{
                m("oauth_callback_listener", "oauth_callback_server_start_failed");
                reject(Error(`Failed to start OAuth callback server: ${o.message}`));
            });
            this.localServer.listen(e ?? 0, "127.0.0.1", ()=>{
                let o = this.localServer.address();
                this.port = o.port;
                resolve(this.port);
            });
        });
    }
    getPort() {
        return this.port;
    }
    hasPendingResponse() {
        return this.pendingResponse !== null;
    }
    async waitForAuthorization(e, t) {
        return new Promise((resolve, reject)=>{
            this.promiseResolver = resolve;
            this.promiseRejecter = reject;
            this.expectedState = e;
            this.startLocalListener(t);
        });
    }
    handleSuccessRedirect(e, t) {
        if (!this.pendingResponse) {
            return;
        }
        if (t) {
            t(this.pendingResponse, e);
            this.pendingResponse = null;
            i("tengu_oauth_automatic_redirect", {
                custom_handler: true
            });
            return;
        }
        let Location = ez(e) ? dn().CLAUDEAI_SUCCESS_URL : dn().CONSOLE_SUCCESS_URL;
        this.pendingResponse.writeHead(302, {
            Location
        });
        this.pendingResponse.end();
        this.pendingResponse = null;
        i("tengu_oauth_automatic_redirect", {});
    }
    handleErrorRedirect() {
        if (!this.pendingResponse) {
            return;
        }
        let CLAUDEAI_SUCCESS_URL = dn().CLAUDEAI_SUCCESS_URL;
        this.pendingResponse.writeHead(302, {
            Location: CLAUDEAI_SUCCESS_URL
        });
        this.pendingResponse.end();
        this.pendingResponse = null;
        i("tengu_oauth_automatic_redirect_error", {});
    }
    startLocalListener(e) {
        this.localServer.on("request", this.handleRedirect.bind(this));
        this.localServer.on("error", this.handleError.bind(this));
        e();
    }
    handleRedirect(e, res) {
        let r = new URL(e.url || "", `http://${e.headers.host || "localhost"}`);
        if (r.pathname !== this.callbackPath) {
            res.writeHead(404);
            res.end();
            return;
        }
        let o = r.searchParams.get("code") ?? undefined;
        let n = r.searchParams.get("state") ?? undefined;
        let error = r.searchParams.get("error") ?? undefined;
        if (!o && error && hMt()) {
            this.respondToErrorCallback({
                error,
                errorDescription: r.searchParams.get("error_description") ?? undefined,
                errorUri: r.searchParams.get("error_uri") ?? undefined,
                state: n,
                res
            });
            return;
        }
        this.validateAndRespond(o, n, res);
    }
    validateAndRespond(e, t, r) {
        if (t === this.expectedState && this.answerIfCodeReceived(r)) {
            return;
        }
        if (!e) {
            m("oauth_callback_listener", "oauth_callback_no_code");
            r.writeHead(400);
            r.end("Authorization code not found");
            this.reject(Error("No authorization code received"));
            return;
        }
        if (this.rejectOnStateMismatch(t, r)) {
            return;
        }
        this.codeReceived = true;
        this.pendingResponse = r;
        g("oauth_callback_listener");
        this.resolve(e);
    }
    respondToErrorCallback({ error, errorDescription, errorUri, state, res }) {
        if (this.rejectOnStateMismatch(state, res)) {
            return;
        }
        if (this.answerIfCodeReceived(res)) {
            return;
        }
        let s = errorDescription === idt;
        m("oauth_callback_listener", s ? "oauth_callback_account_on_hold" : "oauth_callback_authorize_error");
        res.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        res.end(s ? "Your account is on hold. You can close this window." : "Sign-in was canceled or failed. You can close this window.");
        this.reject(new M8(C(error), errorDescription === undefined ? undefined : C(errorDescription), s ? MFe(errorUri) : undefined));
    }
    answerIfCodeReceived(e) {
        if (!this.codeReceived) {
            return false;
        }
        e.writeHead(200, {
            "Content-Type": "text/plain; charset=utf-8"
        });
        e.end("Sign-in is already finishing. You can close this window.");
        return true;
    }
    rejectOnStateMismatch(e, t) {
        if (e === this.expectedState) {
            return false;
        }
        m("oauth_callback_listener", "oauth_callback_state_mismatch");
        t.writeHead(400);
        t.end("Invalid state parameter");
        this.reject(Error("Invalid state parameter"));
        return true;
    }
    handleError(e) {
        m("oauth_callback_listener", "oauth_callback_server_error");
        c(e);
        this.close();
        this.reject(e);
    }
    resolve(e) {
        if (this.promiseResolver) {
            this.promiseResolver(e);
            this.promiseResolver = null;
            this.promiseRejecter = null;
        }
    }
    reject(e) {
        if (this.promiseRejecter) {
            this.promiseRejecter(e);
            this.promiseResolver = null;
            this.promiseRejecter = null;
        }
    }
    close() {
        if (this.pendingResponse) {
            this.handleErrorRedirect();
        }
        if (this.localServer) {
            this.localServer.removeAllListeners();
            this.localServer.close();
        }
    }
    [Symbol.dispose]() {
        this.close();
    }
}
function C(e) {
    return ne(e.replace(/[\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]/gu, ""), L);
}
function h(e) {
    return e.toString("base64").replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}
function A() {
    return h(randomBytes(32));
}
function S(codeVerifier) {
    let t = createHash("sha256");
    t.update(codeVerifier);
    return h(t.digest());
}
function w() {
    return h(randomBytes(32));
}
class IU {
    codeVerifier;
    authCodeListener = null;
    port = null;
    manualAuthCodeResolver = null;
    authorizationCodeReceived = false;
    constructor(){
        this.codeVerifier = A();
    }
    async startOAuthFlow(e, t) {
        this.authorizationCodeReceived = false;
        this.authCodeListener = new u;
        this.port = await this.authCodeListener.start();
        let codeChallenge = S(this.codeVerifier);
        let o = w();
        let n = {
            codeChallenge,
            state: o,
            port: this.port,
            loginWithClaudeAi: t?.loginWithClaudeAi,
            inferenceOnly: t?.inferenceOnly,
            orgUUID: t?.orgUUID,
            loginHint: t?.loginHint,
            loginMethod: t?.loginMethod,
            oauthClient: t?.oauthClient
        };
        let s = wwr({
            ...n,
            isManual: true
        });
        let p = wwr({
            ...n,
            isManual: false
        });
        let b = await this.waitForAuthorizationCode(o, async ()=>{
            if (t?.skipBrowserOpen) {
                await e(s, p);
            } else {
                await e(s);
                await Fs(p);
            }
        });
        let automatic = this.authCodeListener?.hasPendingResponse() ?? false;
        i("tengu_oauth_auth_code_received", {
            automatic
        });
        try {
            let a = await eho(b, {
                state: o,
                codeVerifier: this.codeVerifier,
                port: this.port,
                useManualRedirect: !automatic,
                expiresIn: t?.expiresIn,
                clientId: t?.oauthClient?.clientId
            });
            let d = t?.skipProfileFetch ? null : await vwr(a.access_token);
            if (automatic) {
                let f = wUn(a.scope);
                let Location = t?.successRedirectUrl;
                if (Location) {
                    this.authCodeListener?.handleSuccessRedirect(f, (R)=>{
                        R.writeHead(302, {
                            Location
                        });
                        R.end();
                    });
                } else {
                    this.authCodeListener?.handleSuccessRedirect(f);
                }
            }
            g("oauth_login");
            return this.formatTokens(a, {
                subscriptionType: d?.subscriptionType ?? null,
                rateLimitTier: d?.rateLimitTier ?? null,
                profile: d?.rawProfile,
                clientId: t?.oauthClient?.clientId
            });
        } catch (error) {
            m("oauth_login", "oauth_login_failed");
            if (automatic) {
                this.authCodeListener?.handleErrorRedirect();
            }
            if (!t?.inferenceOnly && !t?.oauthClient) {
                Xne({
                    action: "login",
                    success: false,
                    authMethod: "oauth",
                    error
                });
            }
            throw error;
        } finally{
            this.authCodeListener?.close();
        }
    }
    async waitForAuthorizationCode(e, t) {
        return new Promise((resolve, reject)=>{
            this.manualAuthCodeResolver = resolve;
            this.authCodeListener?.waitForAuthorization(e, t).then((n)=>{
                this.manualAuthCodeResolver = null;
                this.authorizationCodeReceived = true;
                resolve(n);
            }).catch((n)=>{
                this.manualAuthCodeResolver = null;
                reject(n);
            });
        });
    }
    handleManualAuthCodeInput(e) {
        if (this.manualAuthCodeResolver) {
            this.authorizationCodeReceived = true;
            this.manualAuthCodeResolver(e.authorizationCode);
            this.manualAuthCodeResolver = null;
            this.authCodeListener?.close();
        }
    }
    formatTokens(e, { subscriptionType, rateLimitTier, profile, clientId }) {
        return {
            accessToken: e.access_token,
            refreshToken: e.refresh_token,
            expiresAt: Date.now() + e.expires_in * 1000,
            refreshTokenExpiresAt: Swr(e.refresh_token_expires_in, true),
            scopes: wUn(e.scope),
            subscriptionType,
            rateLimitTier,
            profile,
            clientId,
            tokenAccount: e.account ? {
                uuid: e.account.uuid,
                emailAddress: e.account.email_address,
                organizationUuid: e.organization?.uuid,
                organizationName: e.organization?.name,
                workspaceId: e.workspace?.id,
                workspaceName: e.workspace?.name
            } : undefined
        };
    }
    hasReceivedAuthorizationCode() {
        return this.authorizationCodeReceived;
    }
    cleanup() {
        this.authCodeListener?.close();
        this.manualAuthCodeResolver = null;
    }
}
export { IU };
