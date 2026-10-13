import { r9n, qBr, rzo } from "/$bunfs/root/chunk-6qsavawp.js";
import { x, W, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { X } from "/$bunfs/root/chunk-bd805sh6.js";
import { re } from "/$bunfs/root/chunk-etbngzss.js";
import { Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Jn } from "/$bunfs/root/chunk-ph7a449e.js";
import { qr, rD } from "/$bunfs/root/chunk-g2whb6bt.js";
import { na } from "/$bunfs/root/chunk-55x53sfe.js";
import { tD } from "/$bunfs/root/chunk-c49tne6j.js";
import { eEe } from "/$bunfs/root/chunk-q676wb6j.js";
import { Fs } from "/$bunfs/root/chunk-cg7f88dh.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { randomBytes } from "crypto";
import { createServer } from "http";
import { parse } from "url";
const E = 300000;
const T = 30000;
const v = 60;
function HBt(r) {
    try {
        let t = new URL(r);
        t.pathname = t.pathname.replace(/\/+$/, "");
        t.host = t.host.toLowerCase();
        return t.toString();
    } catch  {
        return r.replace(/\/+$/, "");
    }
}
async function wmn(r) {
    let n = (await Jn().readAsync())?.mcpXaaIdp?.[HBt(r)];
    if (!n) {
        return;
    }
    if (n.expiresAt - Date.now() <= v * 1000) {
        return;
    }
    return n.idToken;
}
async function P(r, idToken, expiresAt) {
    await Jn().mutate((n)=>({
            ...n,
            mcpXaaIdp: {
                ...n.mcpXaaIdp,
                [HBt(r)]: {
                    idToken,
                    expiresAt
                }
            }
        }));
}
async function v1s(r, t) {
    let e = A(t);
    let n = e ? e * 1000 : Date.now() + 3600000;
    await P(r, t, n);
    return n;
}
async function t9n(r) {
    let t = HBt(r);
    try {
        await Jn().mutate((e)=>{
            if (!e.mcpXaaIdp?.[t]) {
                return e;
            }
            let mcpXaaIdp = {
                ...e.mcpXaaIdp
            };
            delete mcpXaaIdp[t];
            return {
                ...e,
                mcpXaaIdp
            };
        });
    } catch (error) {
        re("xaa", `clearIdpIdToken(${qr(t)}) failed: ${l(error)}`);
    }
}
async function E1s(r, clientSecret) {
    try {
        return await Jn().mutate((e)=>({
                ...e,
                mcpXaaIdpConfig: {
                    ...e.mcpXaaIdpConfig,
                    [HBt(r)]: {
                        clientSecret
                    }
                }
            }));
    } catch (error) {
        return {
            success: false,
            warning: l(error)
        };
    }
}
async function n9n(r) {
    return (await Jn().readAsync())?.mcpXaaIdpConfig?.[HBt(r)]?.clientSecret;
}
async function k1s(r) {
    let t = HBt(r);
    try {
        await Jn().mutate((e)=>{
            if (!e.mcpXaaIdpConfig?.[t]) {
                return e;
            }
            let mcpXaaIdpConfig = {
                ...e.mcpXaaIdpConfig
            };
            delete mcpXaaIdpConfig[t];
            return {
                ...e,
                mcpXaaIdpConfig
            };
        });
    } catch (error) {
        re("xaa", `clearIdpClientSecret(${qr(t)}) failed: ${l(error)}`);
    }
}
function fetchFn(r, t) {
    return fetch(r, {
        ...t,
        ...na({
            url: String(r)
        }),
        signal: AbortSignal.timeout(T)
    }).catch((e)=>rD(e, r));
}
async function vmn(r) {
    let t = r.endsWith("/") ? r : `${r}/`;
    if (!URL.canParse(".well-known/openid-configuration", t)) {
        throw new x(`XAA IdP: OIDC discovery failed: issuer is not a valid URL: ${qr(r)}`, "XAA IdP: OIDC discovery failed: issuer is not a valid URL");
    }
    let e = new URL(".well-known/openid-configuration", t);
    let n = await fetchFn(e, {
        headers: {
            Accept: "application/json"
        }
    });
    if (!n.ok) {
        throw Error(`XAA IdP: OIDC discovery failed: HTTP ${n.status} at ${qr(e.href)}`);
    }
    let o;
    try {
        o = await n.json();
    } catch  {
        throw Error(`XAA IdP: OIDC discovery returned non-JSON at ${qr(e.href)} (captive portal or proxy?)`);
    }
    let i = r9n.safeParse(o);
    if (!i.success) {
        throw Error(`XAA IdP: invalid OIDC metadata: ${i.error.message}`);
    }
    if (!URL.canParse(i.data.token_endpoint) || new URL(i.data.token_endpoint).protocol !== "https:") {
        throw Error(`XAA IdP: refusing non-HTTPS token endpoint: ${qr(i.data.token_endpoint)}`);
    }
    return i.data;
}
function A(r) {
    let t = r.split(".");
    if (t.length !== 3) {
        return;
    }
    try {
        let e = X(Buffer.from(t[1], "base64url").toString("utf-8"));
        if (typeof e.exp === "number") {
            return e.exp;
        }
        return undefined;
    } catch  {
        return;
    }
}
function D(r, t, abortSignal, n) {
    let o = null;
    let i = null;
    let c = null;
    let m = ()=>{
        o?.removeAllListeners();
        o?.on("error", ()=>{});
        o?.close();
        o = null;
        if (i) {
            clearTimeout(i);
            i = null;
        }
        if (abortSignal && c) {
            abortSignal.removeEventListener("abort", c);
            c = null;
        }
    };
    return new Promise((resolve, reject)=>{
        let p = false;
        let h = (code)=>{
            if (p) {
                return;
            }
            p = true;
            m();
            resolve(code);
        };
        let d = (a)=>{
            if (p) {
                return;
            }
            p = true;
            m();
            reject(a);
        };
        if (abortSignal) {
            c = ()=>d(Error("XAA IdP: login cancelled"));
            if (abortSignal.aborted) {
                c();
                return;
            }
            abortSignal.addEventListener("abort", c, {
                once: true
            });
        }
        o = createServer((a, s)=>{
            let u = parse(a.url || "", true);
            if (u.pathname !== "/callback") {
                s.writeHead(404);
                s.end();
                return;
            }
            let code = u.query.code;
            let state = u.query.state;
            let error = u.query.error;
            if (error) {
                let w = u.query.error_description;
                s.writeHead(400, {
                    "Content-Type": "text/html"
                });
                s.end(tD({
                    ok: false,
                    heading: "Sign-in failed",
                    message: "Close this tab and try again from Claude Code.",
                    detail: `${error}: ${w ?? ""}`
                }));
                d(Error(`XAA IdP: ${error}${w ? ` \u2014 ${w}` : ""}`));
                return;
            }
            if (state !== t) {
                s.writeHead(400, {
                    "Content-Type": "text/html"
                });
                s.end(tD({
                    ok: false,
                    heading: "Sign-in failed",
                    message: "State mismatch. Close this tab and try again."
                }));
                d(Error("XAA IdP: state mismatch (possible CSRF)"));
                return;
            }
            if (!code) {
                s.writeHead(400, {
                    "Content-Type": "text/html"
                });
                s.end(tD({
                    ok: false,
                    heading: "Sign-in failed",
                    message: "No authorization code received. Close this tab and try again."
                }));
                d(Error("XAA IdP: callback missing code"));
                return;
            }
            s.writeHead(200, {
                "Content-Type": "text/html"
            });
            s.end(tD({
                ok: true,
                heading: "Sign-in complete",
                message: "You can close this tab and return to Claude Code."
            }));
            h(code);
        });
        o.on("error", (a)=>{
            if (a.code === "EADDRINUSE") {
                let s = O() === "windows" ? `netstat -ano | findstr :${r}` : `lsof -ti:${r} -sTCP:LISTEN`;
                d(Error(`XAA IdP: callback port ${r} is already in use. Run \`${s}\` to find the holder.`));
            } else {
                d(Error(`XAA IdP: callback server failed: ${a.message}`));
            }
        });
        o.listen(r, "127.0.0.1", ()=>{
            try {
                n();
            } catch (error) {
                d(W(error));
            }
        });
        o.unref();
        i = setTimeout((a)=>a(Error("XAA IdP: login timed out")), E, d);
        i.unref();
    });
}
async function GBr(r) {
    return Zr("mcp_xaa_idp_login", async ()=>{
        let { idpIssuer, idpClientId } = r;
        let n = await wmn(idpIssuer);
        if (n) {
            re("xaa", `Using cached id_token for ${qr(idpIssuer)}`);
            return n;
        }
        re("xaa", `No cached id_token for ${qr(idpIssuer)}; starting OIDC login`);
        let metadata = await vmn(idpIssuer);
        let i = r.callbackPort ?? await eEe();
        let c = `http://localhost:${i}/callback`;
        let state = randomBytes(32).toString("base64url");
        let clientInformation = {
            client_id: idpClientId,
            ...r.idpClientSecret && {
                client_secret: r.idpClientSecret
            }
        };
        let { authorizationUrl, codeVerifier } = await qBr(idpIssuer, {
            metadata,
            clientInformation,
            redirectUrl: c,
            scope: "openid",
            state
        });
        let authorizationCode = await D(i, state, r.abortSignal, ()=>{
            r.onAuthorizationUrl(authorizationUrl.toString());
            if (!r.skipBrowserOpen) {
                re("xaa", "Opening browser to IdP authorization endpoint");
                Fs(authorizationUrl.toString());
            }
        });
        let d = await rzo(idpIssuer, {
            metadata,
            clientInformation,
            authorizationCode,
            codeVerifier,
            redirectUri: c,
            fetchFn
        });
        if (!d.id_token) {
            throw Error("XAA IdP: token response missing id_token (check scope=openid)");
        }
        let a = A(d.id_token);
        let s = a ? a * 1000 : Date.now() + (d.expires_in ?? 3600) * 1000;
        try {
            await P(idpIssuer, d.id_token, s);
            re("xaa", `Cached id_token for ${qr(idpIssuer)} (expires ${new Date(s).toISOString()})`);
        } catch (error) {
            re("xaa", `id_token cache write failed: ${l(error)}`);
        }
        return d.id_token;
    });
}
export { HBt, wmn, v1s, t9n, E1s, n9n, k1s, vmn, GBr };
