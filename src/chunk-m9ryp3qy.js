import { Vn, q, Ee, Ce, jn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { No, re } from "/$bunfs/root/chunk-etbngzss.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { $t } from "/$bunfs/root/chunk-xb9cceab.js";
import { Y3t, X3t, ao, gas, nl, _b } from "/$bunfs/root/chunk-8yak0fbv.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { EMn, C4 } from "/$bunfs/root/chunk-7aeb6f08.js";
import { dke, l$, rW, Np, To } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Fo } from "/$bunfs/root/chunk-g2whb6bt.js";
import { MG } from "/$bunfs/root/chunk-htqx5feq.js";
import { A1r, Rr } from "/$bunfs/root/chunk-vvnqpdfm.js";
import { tL, fd } from "/$bunfs/root/chunk-kaa66qxk.js";
import { PXn, IXn } from "/$bunfs/root/chunk-3fzyr59r.js";
import { ii } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { o, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { join } from "path";
function lgn(e) {
    return Ce() && !(j() && e !== undefined);
}
function wWe() {
    if (Ce()) {
        throw Error("Cannot use the MCP needs-auth cache file in a diskless session: only a storage backend can hold the cache");
    }
    return join(ve(), "mcp-needs-auth-cache.json");
}
function Fht() {
    return $e.state("mcp-needs-auth-cache");
}
function vWe(e) {
    if (lgn(e)) {
        return Promise.resolve({});
    }
    let r = $t();
    if (!r.authCacheRead) {
        r.authCacheRead = j() && e !== undefined ? z(e) : mn().read(wWe()).then((n)=>X(n)).catch(()=>({}));
    }
    return r.authCacheRead;
}
async function z(e) {
    try {
        let r = await e.read([
            Fht()
        ]);
        if (!r.ok) {
            return {};
        }
        let n = r.value.items[0];
        if (!n.found) {
            return {};
        }
        return X(Buffer.from(n.value).toString("utf8"));
    } catch  {
        return {};
    }
}
function Uht() {
    $t().authCacheRead = null;
}
function Yve(e) {
    $t().authCacheRead = null;
    if (j() && e !== undefined) {
        e.delete(Fht()).then((r)=>{
            if (!r.ok) {
                t(`mcp needs-auth cache delete failed: ${gt(r.error)}`, {
                    level: "error"
                });
            }
        }).catch(()=>{});
        return;
    }
    if (Ce()) {
        return;
    }
    mn().delete(wWe()).catch(()=>{});
}
function I() {
    return import.meta.require("/$bunfs/root/chunk-7chmfa68.js");
}
function C() {
    return I().mcpAuthModule();
}
function w() {
    return I().mcpClientModule();
}
const B = p(()=>u({}));
const x = p(()=>u({
        callback_url: o().describe("The full callback URL from the browser address bar after authorizing, e.g. http://localhost:<port>/callback?code=...&state=...")
    }));
function F() {
    return a.isSSH() || a.CLAUDE_CODE_REMOTE || jn();
}
const H = new q(()=>new Map);
const W = 180000;
function K(authUrl) {
    try {
        let r = new URL(authUrl).searchParams.get("redirect_uri");
        if (r) {
            return r;
        }
    } catch  {}
    return "http://localhost:<port>/callback";
}
function KN(e, r) {
    if (Ee()) {
        return [];
    }
    let n = tL(e, r, {
        detail: "origin"
    });
    return [
        G(e, r, n),
        V(e, r)
    ];
}
function L(e) {
    let r = e !== undefined ? C4(e) : EMn();
    return "available automatically";
}
function _(e) {
    return "The server's tools should now be available.";
}
function G(e, config, n) {
    let serverType = config.type ?? "stdio";
    let g = n && n !== serverType ? `${serverType} at ${gas(n, 256)}` : serverType;
    let y = `${`The "${ao(e)}" MCP server (${g}) is installed but requires authentication. `}Call this tool to start the OAuth flow — you'll receive an authorization URL to share with the user. ${`Once the user completes authorization in their browser, the server's real tools will become ${L()}.`}`;
    return {
        name: ii(e, Y3t),
        isMcp: true,
        mcpInfo: {
            serverName: e,
            toolName: Y3t,
            serverType,
            source: l$(e, config),
            ...config.pluginSource !== undefined && {
                pluginSource: config.pluginSource
            },
            isAuthStub: true,
            serverId: dke(config)
        },
        isEnabled: ()=>true,
        isConcurrencySafe: ()=>false,
        isReadOnly: ()=>false,
        toAutoClassifierInput: ()=>e,
        userFacingName: ()=>`${e} - authenticate (MCP)`,
        maxResultSizeChars: 10000,
        renderToolUseMessage: ()=>`Authenticate ${e} MCP server`,
        async description () {
            return y;
        },
        async prompt () {
            return y;
        },
        get inputSchema () {
            return B();
        },
        async checkPermissions (b) {
            return {
                behavior: "allow",
                updatedInput: b
            };
        },
        async call (b, s) {
            let d = Np(e, config);
            if (d === "managed-policy") {
                return {
                    data: {
                        status: "error",
                        message: `${PXn(e)}. Only an organization admin can change this; do not retry or ask the user to enable it.`
                    }
                };
            }
            if (To(e)) {
                return {
                    data: {
                        status: "error",
                        message: `MCP server ${ao(e)} is disabled. Ask the user to enable it in /mcp before authenticating.`
                    }
                };
            }
            if (d === "project-approval") {
                return {
                    data: {
                        status: "error",
                        message: `${IXn(e)}. Ask the user to approve it; do not retry until they have.`
                    }
                };
            }
            let c = MG(e, config);
            if (c.kind === "claudeai-proxy") {
                return {
                    data: {
                        status: "unsupported",
                        message: `This is a claude.ai MCP connector. Ask the user to run /mcp and select "${ao(e)}" to authenticate.`
                    }
                };
            }
            if (c.kind === "unsupported-transport") {
                return {
                    data: {
                        status: "unsupported",
                        message: `Server "${ao(e)}" uses ${serverType} transport which does not support OAuth from this tool. Ask the user to run /mcp and authenticate manually.`
                    }
                };
            }
            if (c.kind === "anthropic-hosted") {
                return {
                    data: {
                        status: "unsupported",
                        message: nl(c.message, 1024, "none")
                    }
                };
            }
            let i = H.of(s.session.host);
            let f = i.get(e);
            if (f !== undefined && f.flow === C().getActiveOAuthPromise(e) && f.receivesPastedCallbacks() && Vn(f.config, c.config) && f.accountToken !== undefined && f.accountToken === A1r() && f.identityEpoch === Rr() && Date.now() - f.startedAt < W) {
                return U({
                    serverName: e,
                    config,
                    authUrlPromise: f.authUrl,
                    oauthPromise: f.flow,
                    reused: true,
                    tools: s.options.tools
                });
            }
            let R;
            let T = new Promise((resolve)=>{
                R = resolve;
            });
            let M;
            let A = C().performMCPOAuthFlow(e, c.config, (m)=>R?.(m), undefined, {
                skipBrowserOpen: true,
                onWaitingForCallback: (m)=>{
                    M = m;
                }
            });
            C().setActiveOAuthPromise(e, A);
            let k = {
                flow: A,
                authUrl: T,
                receivesPastedCallbacks: ()=>M !== undefined && C().getOAuthCallbackSubmitter(e) === M,
                config: c.config,
                accountToken: A1r(),
                identityEpoch: Rr(),
                startedAt: Date.now()
            };
            i.set(e, k);
            A.catch(()=>{}).finally(()=>{
                if (i.get(e) === k) {
                    i.delete(e);
                }
            });
            let k_identityEpoch = k.identityEpoch;
            A.then(async ()=>{
                if (Rr() !== k_identityEpoch) {
                    re(e, "OAuth completed after an identity change; discarding without reconnecting");
                    return;
                }
                Yve(s.storageV5);
                if (To(e) || rW(e, config)) {
                    re(e, "OAuth completed but the server is now disabled or policy-blocked; not reconnecting");
                    return;
                }
                let m = await w().reconnectMcpServerImpl(e, config, s.storageV5, s.credentials);
                if (Rr() !== k_identityEpoch) {
                    re(e, "OAuth completed after an identity change; discarding the stale reconnect");
                    return;
                }
                let D = s.getMcp().clients.some((S)=>S.name === e);
                let P = s.session.mcpSessionWiring.connections();
                if (!D || P === undefined || To(e) || rW(e, config)) {
                    re(e, "OAuth completed after the server was removed, disabled, or policy-blocked; discarding the fresh connection");
                    w().clearServerCache(e, config).catch((S)=>re(e, `Orphan-connection cleanup failed: ${Fo(S, config)}`));
                    P?.markReconnectDiscarded(e, config);
                    return;
                }
                let E = P.adoptServer(e, m);
                if (E !== "adopted") {
                    re(e, `Sign-in finished, but its connection was not adopted (${E}); discarding it`);
                    w().clearServerCache(e, config).catch((S)=>re(e, `Orphan-connection cleanup failed: ${Fo(S, config)}`));
                    return;
                }
                re(e, `OAuth complete, reconnected with ${m.tools.length} tool(s)`);
            }).catch((m)=>{
                No(e, `OAuth flow failed after tool-triggered start: ${_b(fd(e, config, l(m)))}`);
            });
            return U({
                serverName: e,
                config,
                authUrlPromise: T,
                oauthPromise: A,
                reused: false,
                tools: s.options.tools
            });
        },
        mapToolResultToToolResultBlockParam (b, s) {
            return {
                tool_use_id: s,
                type: "tool_result",
                content: b.message
            };
        }
    };
}
async function U({ serverName, config, authUrlPromise, oauthPromise, reused, tools }) {
    let b = reused ? `A sign-in for ${ao(serverName)} that started earlier is still in progress, so the link below is that sign-in's link, not a new one. If the user says the sign-in page showed an error before they could approve access, ask them to run /mcp and sign in there instead.

` : "";
    try {
        let authUrl = await Promise.race([
            authUrlPromise,
            oauthPromise.then(()=>null)
        ]);
        if (authUrl) {
            let d = ii(serverName, X3t);
            let c = K(authUrl);
            let i = F() ? `

This session is remote, so after authorizing the browser will try to load \`${c}?code=...\` and show a connection error \u2014 that's expected. Ask the user to copy the full URL from the browser's address bar and paste it into chat, then call \`${d}\` with that URL as \`callback_url\`.` : `

If the browser shows a connection error on the redirect page, ask the user to paste the full URL from the address bar and call \`${d}\` with it.`;
            return {
                data: {
                    status: "auth_url",
                    authUrl,
                    message: `${b}Ask the user to open this URL in their browser to authorize the ${ao(serverName)} MCP server:

${authUrl}

Once they complete the flow, the server's tools will become ${L(tools)}.${i}`
                }
            };
        }
        return {
            data: {
                status: "auth_url",
                message: `Authentication completed silently for ${ao(serverName)}. ${_(tools)}`
            }
        };
    } catch (error) {
        let d = nl(fd(serverName, config, l(error)));
        return {
            data: {
                status: "error",
                message: `Failed to start OAuth flow for ${ao(serverName)}: ${d}. Ask the user to run /mcp and authenticate manually.`
            }
        };
    }
}
function V(e, r) {
    let n = ii(e, Y3t);
    let h = `${`Complete an in-progress OAuth flow for the "${ao(e)}" MCP server by submitting the callback URL. Call \`${n}\` first to start the flow and get the authorization URL. `}After the user authorizes in their browser, the browser is redirected to a \`http://localhost:<port>/callback?code=...&state=...\` URL — on remote sessions that page fails to load, but the URL in the address bar is still valid. Pass that full URL here as \`callback_url\`.`;
    return {
        name: ii(e, X3t),
        isMcp: true,
        mcpInfo: {
            serverName: e,
            toolName: X3t,
            serverType: r.type ?? "stdio",
            source: l$(e, r),
            ...r.pluginSource !== undefined && {
                pluginSource: r.pluginSource
            },
            isAuthStub: true,
            serverId: dke(r)
        },
        isEnabled: ()=>true,
        isConcurrencySafe: ()=>false,
        isReadOnly: ()=>false,
        toAutoClassifierInput: ()=>e,
        userFacingName: ()=>`${e} - complete authentication (MCP)`,
        maxResultSizeChars: 10000,
        renderToolUseMessage: ()=>`Complete authentication for ${e} MCP server`,
        async description () {
            return h;
        },
        async prompt () {
            return h;
        },
        get inputSchema () {
            return x();
        },
        async checkPermissions (g) {
            return {
                behavior: "allow",
                updatedInput: g
            };
        },
        async call ({ callback_url }, y) {
            let s = C().getOAuthCallbackSubmitter(e);
            if (!s) {
                return {
                    data: {
                        status: "error",
                        message: `No OAuth flow is in progress for ${ao(e)}. Call \`${n}\` first, then retry with the callback URL.`
                    }
                };
            }
            let d = false;
            try {
                let i = new URL(callback_url);
                d = i.searchParams.has("code") || i.searchParams.has("error");
            } catch  {}
            if (!d) {
                return {
                    data: {
                        status: "error",
                        message: "Invalid callback URL: missing authorization code. Ask the user to paste the full redirect URL from their browser's address bar, including the `?code=...&state=...` query string."
                    }
                };
            }
            let c = C().getActiveOAuthPromise(e);
            if (!s(callback_url)) {
                return {
                    data: {
                        status: "error",
                        message: `That callback URL belongs to a different sign-in attempt for ${ao(e)} (its state does not match the flow in progress), or carries no authorization code. The current flow is still waiting: ask the user for the URL from the page this sign-in opened, then retry.`
                    }
                };
            }
            try {
                await c;
                return {
                    data: {
                        status: "success",
                        message: `Authentication complete for ${ao(e)}. ${_(y.options.tools)}`
                    }
                };
            } catch (error) {
                if (error instanceof C().AuthenticationCancelledError) {
                    return {
                        data: {
                            status: "error",
                            message: `The OAuth flow for ${ao(e)} was cancelled (a newer attempt may have superseded it). Call \`${n}\` again to restart.`
                        }
                    };
                }
                return {
                    data: {
                        status: "error",
                        message: `Authentication failed for ${ao(e)}: ${nl(fd(e, r, l(error)))}`
                    }
                };
            }
        },
        mapToolResultToToolResultBlockParam (g, y) {
            return {
                tool_use_id: y,
                type: "tool_result",
                content: g.message
            };
        }
    };
}
export { lgn, wWe, Fht, vWe, Uht, Yve, KN };
