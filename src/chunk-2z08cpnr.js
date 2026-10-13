import { Yht, E1r, Hzo } from "/$bunfs/root/chunk-re1a1x17.js";
import { x, W, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { X } from "/$bunfs/root/chunk-bd805sh6.js";
import { re } from "/$bunfs/root/chunk-etbngzss.js";
import { Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Jn } from "/$bunfs/root/chunk-ph7a449e.js";
import { qr, rD } from "/$bunfs/root/chunk-g2whb6bt.js";
import { na } from "/$bunfs/root/chunk-55x53sfe.js";
import { tD } from "/$bunfs/root/chunk-c49tne6j.js";
import { b1t, eEe } from "/$bunfs/root/chunk-q676wb6j.js";
import { Fs } from "/$bunfs/root/chunk-cg7f88dh.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { randomBytes } from "crypto";
import { createServer } from "http";
import { parse } from "url";
const T = 300000;
const v = 30000;
const R = 60;
function n1t(n) {
    try {
        let t = new URL(n);
        t.pathname = t.pathname.replace(/\/+$/, "");
        t.host = t.host.toLowerCase();
        return t.toString();
    } catch  {
        return n.replace(/\/+$/, "");
    }
}
async function Egn(n) {
    let r = (await Jn().readAsync())?.mcpXaaIdp?.[n1t(n)];
    if (!r) {
        return;
    }
    if (r.expiresAt - Date.now() <= R * 1000) {
        return;
    }
    return r.idToken;
}
async function k(n, idToken, expiresAt) {
    await Jn().mutate((r)=>({
            ...r,
            mcpXaaIdp: {
                ...r.mcpXaaIdp,
                [n1t(n)]: {
                    idToken,
                    expiresAt
                }
            }
        }));
}
async function j1s(n, t) {
    let e = A(t);
    let r = e ? e * 1000 : Date.now() + 3600000;
    await k(n, t, r);
    return r;
}
async function m9n(n) {
    let t = n1t(n);
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
async function W1s(n, clientSecret) {
    try {
        return await Jn().mutate((e)=>({
                ...e,
                mcpXaaIdpConfig: {
                    ...e.mcpXaaIdpConfig,
                    [n1t(n)]: {
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
async function g9n(n) {
    return (await Jn().readAsync())?.mcpXaaIdpConfig?.[n1t(n)]?.clientSecret;
}
async function z1s(n) {
    let t = n1t(n);
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
function fetchFn(n, t) {
    return fetch(n, {
        ...t,
        ...na({
            url: String(n)
        }),
        signal: AbortSignal.timeout(v)
    }).catch((e)=>rD(e, n));
}
async function kgn(n) {
    let t = n.endsWith("/") ? n : `${n}/`;
    if (!URL.canParse(".well-known/openid-configuration", t)) {
        throw new x(`XAA IdP: OIDC discovery failed: issuer is not a valid URL: ${qr(n)}`, "XAA IdP: OIDC discovery failed: issuer is not a valid URL");
    }
    let e = new URL(".well-known/openid-configuration", t);
    let r = await fetchFn(e, {
        headers: {
            Accept: "application/json"
        }
    });
    if (!r.ok) {
        throw Error(`XAA IdP: OIDC discovery failed: HTTP ${r.status} at ${qr(e.href)}`);
    }
    let i;
    try {
        i = await r.json();
    } catch  {
        throw Error(`XAA IdP: OIDC discovery returned non-JSON at ${qr(e.href)} (captive portal or proxy?)`);
    }
    let a = Yht.safeParse(i);
    if (!a.success) {
        throw Error(`XAA IdP: invalid OIDC metadata: ${a.error.message}`);
    }
    if (!URL.canParse(a.data.token_endpoint) || new URL(a.data.token_endpoint).protocol !== "https:") {
        throw Error(`XAA IdP: refusing non-HTTPS token endpoint: ${qr(a.data.token_endpoint)}`);
    }
    return a.data;
}
function A(n) {
    let t = n.split(".");
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
function D(n, t, abortSignal, r) {
    let i = null;
    let a = null;
    let c = null;
    let f = ()=>{
        i?.removeAllListeners();
        i?.on("error", ()=>{});
        i?.close();
        i = null;
        if (a) {
            clearTimeout(a);
            a = null;
        }
        if (abortSignal && c) {
            abortSignal.removeEventListener("abort", c);
            c = null;
        }
    };
    return new Promise((resolve, reject)=>{
        let p = false;
        let I = (code, iss)=>{
            if (p) {
                return;
            }
            p = true;
            f();
            resolve({
                code,
                iss
            });
        };
        let d = (s)=>{
            if (p) {
                return;
            }
            p = true;
            f();
            reject(s);
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
        i = createServer((s, o)=>{
            let u = parse(s.url || "", true);
            if (u.pathname !== "/callback") {
                o.writeHead(404);
                o.end();
                return;
            }
            let code = u.query.code;
            let state = u.query.state;
            let error = u.query.error;
            let S = b1t(u.query.iss);
            if (error) {
                let w = u.query.error_description;
                o.writeHead(400, {
                    "Content-Type": "text/html"
                });
                o.end(tD({
                    ok: false,
                    heading: "Sign-in failed",
                    message: "Close this tab and try again from Claude Code.",
                    detail: `${error}: ${w ?? ""}`
                }));
                d(Error(`XAA IdP: ${error}${w ? ` \u2014 ${w}` : ""}`));
                return;
            }
            if (state !== t) {
                o.writeHead(400, {
                    "Content-Type": "text/html"
                });
                o.end(tD({
                    ok: false,
                    heading: "Sign-in failed",
                    message: "State mismatch. Close this tab and try again."
                }));
                d(Error("XAA IdP: state mismatch (possible CSRF)"));
                return;
            }
            if (!code) {
                o.writeHead(400, {
                    "Content-Type": "text/html"
                });
                o.end(tD({
                    ok: false,
                    heading: "Sign-in failed",
                    message: "No authorization code received. Close this tab and try again."
                }));
                d(Error("XAA IdP: callback missing code"));
                return;
            }
            o.writeHead(200, {
                "Content-Type": "text/html"
            });
            o.end(tD({
                ok: true,
                heading: "Sign-in complete",
                message: "You can close this tab and return to Claude Code."
            }));
            I(code, S);
        });
        i.on("error", (s)=>{
            if (s.code === "EADDRINUSE") {
                let o = O() === "windows" ? `netstat -ano | findstr :${n}` : `lsof -ti:${n} -sTCP:LISTEN`;
                d(Error(`XAA IdP: callback port ${n} is already in use. Run \`${o}\` to find the holder.`));
            } else {
                d(Error(`XAA IdP: callback server failed: ${s.message}`));
            }
        });
        i.listen(n, "127.0.0.1", ()=>{
            try {
                r();
            } catch (error) {
                d(W(error));
            }
        });
        i.unref();
        a = setTimeout((s)=>s(Error("XAA IdP: login timed out")), T, d);
        a.unref();
    });
}
async function S1r(n) {
    return Zr("mcp_xaa_idp_login", async ()=>{
        let { idpIssuer, idpClientId } = n;
        let r = await Egn(idpIssuer);
        if (r) {
            re("xaa", `Using cached id_token for ${qr(idpIssuer)}`);
            return r;
        }
        re("xaa", `No cached id_token for ${qr(idpIssuer)}; starting OIDC login`);
        let metadata = await kgn(idpIssuer);
        let a = n.callbackPort ?? await eEe();
        let c = `http://localhost:${a}/callback`;
        let state = randomBytes(32).toString("base64url");
        let clientInformation = {
            client_id: idpClientId,
            ...n.idpClientSecret && {
                client_secret: n.idpClientSecret
            }
        };
        let { authorizationUrl, codeVerifier } = await E1r(idpIssuer, {
            metadata,
            clientInformation,
            redirectUrl: c,
            scope: "openid",
            state
        });
        let I = await D(a, state, n.abortSignal, ()=>{
            n.onAuthorizationUrl(authorizationUrl.toString());
            if (!n.skipBrowserOpen) {
                re("xaa", "Opening browser to IdP authorization endpoint");
                Fs(authorizationUrl.toString());
            }
        });
        let d = await Hzo(idpIssuer, {
            metadata,
            clientInformation,
            authorizationCode: I.code,
            iss: I.iss,
            codeVerifier,
            redirectUri: c,
            fetchFn
        });
        if (!d.id_token) {
            throw Error("XAA IdP: token response missing id_token (check scope=openid)");
        }
        let s = A(d.id_token);
        let o = s ? s * 1000 : Date.now() + (d.expires_in ?? 3600) * 1000;
        try {
            await k(idpIssuer, d.id_token, o);
            re("xaa", `Cached id_token for ${qr(idpIssuer)} (expires ${new Date(o).toISOString()})`);
        } catch (error) {
            re("xaa", `id_token cache write failed: ${l(error)}`);
        }
        return d.id_token;
    });
}
export { n1t, Egn, j1s, m9n, W1s, g9n, z1s, kgn, S1r };
