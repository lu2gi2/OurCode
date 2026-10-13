import { jn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { vPe, dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { vbe, eC, eH, Ebe, Ivr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Jn } from "/$bunfs/root/chunk-ph7a449e.js";
import { ja } from "/$bunfs/root/chunk-hz24p3zh.js";
import { Dw } from "/$bunfs/root/chunk-vpp1psvz.js";
import { IU } from "/$bunfs/root/chunk-bkk5jdfk.js";
import { join } from "path";
async function dEe(r) {
    try {
        return (await Jn().readAsync(r))?.designOauth ?? null;
    } catch (error) {
        t(`Failed to read design OAuth tokens: ${l(error)}`, {
            level: "error"
        });
        return null;
    }
}
async function Khn(designOauth, o) {
    try {
        let n = false;
        let s = await Jn().mutate((e)=>{
            if (o?.onlyIf && !o.onlyIf(e.designOauth)) {
                n = true;
                return e;
            }
            return {
                ...e,
                designOauth
            };
        });
        if (n) {
            return {
                ...s,
                raced: true
            };
        }
        return s;
    } catch (error) {
        t(`Failed to save design OAuth tokens: ${l(error)}`, {
            level: "error"
        });
        return {
            success: false,
            warning: "Failed to save design OAuth tokens"
        };
    }
}
async function T(r) {
    try {
        await Jn().mutate((o)=>{
            if (!o.designOauth) {
                return o;
            }
            if (!r(o.designOauth)) {
                return o;
            }
            let n = {
                ...o
            };
            delete n.designOauth;
            return n;
        });
    } catch (error) {
        t(`Failed to clear design OAuth tokens: ${l(error)}`, {
            level: "error"
        });
    }
}
const y = ".design_oauth_refresh.lock";
const A = 5;
class O extends Error {
    constructor(){
        super("Design OAuth lock contention: another process is holding the refresh lock");
        this.name = "DesignOauthLockContendedError";
    }
}
async function C(r) {
    let o = Dw();
    await ie().mkdir(o);
    let lockfilePath = join(o, y);
    let s = false;
    let e;
    let u = 0;
    while(!e){
        u++;
        try {
            e = await ja(lockfilePath, {
                lockfilePath,
                realpath: false,
                stale: 60000,
                update: 5000,
                onCompromised: (d)=>{
                    s = true;
                    t(`Design OAuth refresh lock compromised: ${d.message}`, {
                        level: "error"
                    });
                }
            });
        } catch (error) {
            if (error.code === "ELOCKED") {
                if (u < A) {
                    await Q(1000 + Math.random() * 1000);
                    continue;
                }
                throw new O;
            }
            throw error;
        }
    }
    let h = {
        isCompromised: ()=>s
    };
    let i = Ivr();
    try {
        return await r(h);
    } finally{
        try {
            try {
                await e();
            } catch (error) {
                t(`Design OAuth refresh lock release failed: ${l(error)}`, {
                    level: "error"
                });
            }
        } finally{
            i();
        }
    }
}
async function _() {
    let r = Jn();
    r.invalidateCache?.();
    return (await r.readAsync())?.designOauth ?? null;
}
async function uWr(r) {
    let o = await dEe(r);
    if (!o?.accessToken) {
        return {
            ok: false,
            reason: "needs_design_login"
        };
    }
    if (!eH(o.expiresAt)) {
        return {
            ok: true,
            accessToken: o.accessToken
        };
    }
    try {
        return await C(async (n)=>{
            let s = await _();
            if (!s?.accessToken) {
                return {
                    ok: false,
                    reason: "needs_design_login"
                };
            }
            if (!eH(s.expiresAt)) {
                return {
                    ok: true,
                    accessToken: s.accessToken
                };
            }
            if (!s.refreshToken) {
                let e = s.refreshToken;
                await T((u)=>u.refreshToken === e);
                return {
                    ok: false,
                    reason: "needs_design_login"
                };
            }
            if (!Array.isArray(s.scopes) || s.scopes.length === 0) {
                let e = s.refreshToken;
                await T((u)=>u.refreshToken === e);
                return {
                    ok: false,
                    reason: "needs_design_login"
                };
            }
            if (n.isCompromised()) {
                f("oauth_token_refresh", "design_oauth_refresh_lock_compromised");
                return {
                    ok: false,
                    reason: "design_refresh_failed",
                    detail: "another process is refreshing the design token"
                };
            }
            try {
                let e = await vbe(s.refreshToken, {
                    clientId: s.clientId,
                    scopes: s.scopes,
                    skipProfileFetch: true
                });
                if (!e.refreshToken || !e.expiresAt) {
                    if (e.refreshToken && e.refreshToken !== s.refreshToken) {
                        await eC(e.refreshToken, s.clientId);
                    }
                    return {
                        ok: false,
                        reason: "design_refresh_failed",
                        detail: "refresh response missing refresh_token or expiry"
                    };
                }
                if (!vPe.every((i)=>e.scopes.includes(i))) {
                    if (e.refreshToken) {
                        await eC(e.refreshToken, s.clientId);
                    }
                    let i = s.refreshToken;
                    await T((d)=>d.refreshToken === i);
                    return {
                        ok: false,
                        reason: "needs_design_login",
                        detail: "refresh response missing design scopes"
                    };
                }
                let u = s.refreshToken;
                let h = await Khn({
                    accessToken: e.accessToken,
                    refreshToken: e.refreshToken,
                    expiresAt: e.expiresAt,
                    scopes: e.scopes.filter((i)=>vPe.some((d)=>d === i)),
                    clientId: s.clientId
                }, {
                    onlyIf: (i)=>i?.refreshToken === u
                });
                if (h.raced) {
                    await eC(e.refreshToken, s.clientId);
                    let i = await _();
                    if (i?.accessToken && !eH(i.expiresAt)) {
                        return {
                            ok: true,
                            accessToken: i.accessToken
                        };
                    }
                    return {
                        ok: false,
                        reason: "needs_design_login"
                    };
                }
                if (!h.success) {
                    t("Design OAuth refresh succeeded but persist failed; continuing with in-memory token.", {
                        level: "error"
                    });
                }
                return {
                    ok: true,
                    accessToken: e.accessToken
                };
            } catch (error) {
                if (n.isCompromised()) {
                    let u = await _();
                    if (u?.accessToken && !eH(u.expiresAt)) {
                        return {
                            ok: true,
                            accessToken: u.accessToken
                        };
                    }
                    if (!Ebe(error)) {
                        f("oauth_token_refresh", "design_oauth_refresh_lock_compromised");
                    }
                    return {
                        ok: false,
                        reason: "design_refresh_failed",
                        detail: "another process is refreshing the design token"
                    };
                }
                if (Ebe(error)) {
                    let u = s.refreshToken;
                    await T((h)=>h.refreshToken === u);
                    return {
                        ok: false,
                        reason: "needs_design_login",
                        detail: "design authorization expired"
                    };
                }
                return {
                    ok: false,
                    reason: "design_refresh_failed",
                    detail: l(error)
                };
            }
        });
    } catch (error) {
        if (error instanceof O) {
            f("oauth_token_refresh", "design_oauth_refresh_lock_contention");
        } else {
            c(error);
            m("oauth_token_refresh", "design_oauth_refresh_lock_error");
        }
        return {
            ok: false,
            reason: "design_refresh_failed",
            detail: l(error)
        };
    }
}
function Yhn() {
    return a.CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID ?? dn().DESIGN_CLIENT_ID;
}
function $Oe() {
    return !Yhn().startsWith("00000000-");
}
async function DXn(r, o) {
    let n = vPe.filter((s)=>!r.scopes.includes(s));
    if (n.length > 0) {
        if (r.refreshToken) {
            await eC(r.refreshToken, o);
        }
        return {
            ok: false,
            message: `The authorization server did not grant the design scopes (missing: ${n.join(", ")}) \u2014 the Claude Design app registration may be incomplete or out of date.`
        };
    }
    if (!r.refreshToken || !r.expiresAt) {
        if (r.refreshToken) {
            await eC(r.refreshToken, o);
        }
        return {
            ok: false,
            message: "The token response was missing a refresh token or expiry — cannot store a usable design credential."
        };
    }
    return {
        ok: true,
        slot: {
            accessToken: r.accessToken,
            refreshToken: r.refreshToken,
            expiresAt: r.expiresAt,
            scopes: r.scopes.filter((s)=>vPe.some((e)=>e === s)),
            clientId: o
        }
    };
}
function Ejt() {
    return a.isSSH() || a.CLAUDE_CODE_REMOTE === true || jn();
}
const I = 300000;
async function Xhn(r, o) {
    if (r?.aborted) {
        return {
            ok: false,
            reason: "interrupted",
            message: "Design login was interrupted."
        };
    }
    if (!$Oe()) {
        return {
            ok: false,
            reason: "unconfigured",
            message: "The Claude Design OAuth client is not configured in this build. Set CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID to the registered client id, or update to a build with the registered client."
        };
    }
    if (Ejt() && !o?.onManualCode) {
        return {
            ok: false,
            reason: "remote",
            message: "This session is remote, so the browser can't reach the local sign-in listener. Run /design-login instead — it supports pasting the authorization code manually."
        };
    }
    let n = Yhn();
    let s = new IU;
    let e = false;
    let u = false;
    let h;
    try {
        let i = o?.onAuthUrl;
        o?.onManualCode?.((authorizationCode, state)=>s.handleManualAuthCodeInput({
                authorizationCode,
                state
            }));
        let d = s.startOAuthFlow(i ? async (k, p)=>{
            i(p ?? k, k);
        } : async ()=>{}, {
            loginWithClaudeAi: true,
            oauthClient: {
                clientId: n,
                scopes: vPe
            },
            skipProfileFetch: true,
            successRedirectUrl: dn().CLAUDEAI_SUCCESS_URL,
            ...i && {
                skipBrowserOpen: true
            }
        });
        d.then((k)=>{
            if (u && k.refreshToken) {
                eC(k.refreshToken, n);
            }
        }).catch(()=>{});
        let w = await Promise.race([
            d,
            new Promise((resolve, reject)=>{
                h = setTimeout(()=>{
                    e = true;
                    u = true;
                    reject(Error("design login timed out"));
                }, I);
                r?.addEventListener("abort", ()=>{
                    u = true;
                    reject(Error("design login interrupted"));
                }, {
                    once: true
                });
            })
        ]);
        let g = await DXn(w, n);
        if (!g.ok) {
            return {
                ok: false,
                reason: "invalid",
                message: g.message
            };
        }
        if (r?.aborted) {
            await eC(g.slot.refreshToken, g.slot.clientId);
            return {
                ok: false,
                reason: "interrupted",
                message: "Design login was interrupted."
            };
        }
        if (!(await Khn(g.slot)).success) {
            await eC(g.slot.refreshToken, g.slot.clientId);
            return {
                ok: false,
                reason: "save_failed",
                message: "Could not save the design credential to secure storage. Retry, or run /design-login."
            };
        }
        return {
            ok: true,
            accessToken: g.slot.accessToken
        };
    } catch (error) {
        u = true;
        if (r?.aborted) {
            return {
                ok: false,
                reason: "interrupted",
                message: "Design login was interrupted."
            };
        }
        if (e) {
            return {
                ok: false,
                reason: "timed_out",
                message: "The browser authorization timed out after 5 minutes. Retry, or run /design-login for the manual flow."
            };
        }
        return {
            ok: false,
            reason: "failed",
            cause: l(error),
            message: `The browser authorization failed (${l(error)}). Run /design-login to retry with the manual flow.`
        };
    } finally{
        if (h !== undefined) {
            clearTimeout(h);
        }
        s.cleanup();
    }
}
export { dEe, Khn, uWr, Yhn, $Oe, DXn, Ejt, Xhn };
