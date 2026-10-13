import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { Vn, eo, bwe, qpe, Ce, DBe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Hp } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { pp, dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { vC, DZ, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Tt, c } from "/$bunfs/root/chunk-etbngzss.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { dp, _Dt } from "/$bunfs/root/chunk-x47nahfr.js";
import { SO, Fvo, Dr, Ie, qtn } from "/$bunfs/root/chunk-nj0630nv.js";
import { kvs, j$e, tt, avr, Pw, Vf, uN, HV, p8, _d, Rv, bn, wt, If, Ib, u_o, DEr, LEr, STs, EOt, wTs, Ae, ce, H_o, COt, L_o, N_o, $_o, U_o } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Bxt } from "/$bunfs/root/chunk-gr4a0fky.js";
import { Ngs } from "/$bunfs/root/chunk-e0hrcpx7.js";
import { d$e, mbe } from "/$bunfs/root/chunk-n10cystb.js";
import { WKo } from "/$bunfs/root/chunk-6yj2dj9t.js";
import { me, hn, Uo, nd, ir, bt, hg } from "/$bunfs/root/chunk-55p8dvkx.js";
import { Dn } from "/$bunfs/root/chunk-77t63btp.js";
import { Ko } from "/$bunfs/root/chunk-7qc48pza.js";
const Q = p(()=>bt({
        client_data: hg(nd()).nullish(),
        additional_model_options: ir(bt({
            model: me(),
            name: me(),
            description: me(),
            disabled_reason: me().nullish()
        }).transform(({ model, name, description, disabled_reason })=>{
            let u = SO(Dn(model));
            let r = u ? Vf(model) : null;
            let C = description;
            if (u && r && disabled_reason == null) {
                let _ = description ? description.startsWith(r) ? description : `${r} \xB7 ${description}` : r;
                let o = kvs(model);
                C = o && !wt() && !_.includes("per Mtok") ? `${_} \xB7 ${o}` : _;
            }
            return {
                value: model,
                label: disabled_reason != null ? `${name} (disabled)` : name,
                description: disabled_reason ? C ? `${C} \xB7 ${disabled_reason}` : disabled_reason : C,
                ...disabled_reason != null && {
                    disabled: true
                }
            };
        })).nullish(),
        additional_model_costs: hg(bt({
            input_tokens: hn(),
            output_tokens: hn(),
            prompt_cache_write_tokens: hn(),
            prompt_cache_write_1h_tokens: hn().nullish(),
            prompt_cache_read_tokens: hn(),
            web_search_requests: hn().nullish()
        }).transform((e)=>({
                inputTokens: e.input_tokens,
                outputTokens: e.output_tokens,
                promptCacheWriteTokens: e.prompt_cache_write_tokens,
                ...e.prompt_cache_write_1h_tokens != null && {
                    promptCacheWrite1hTokens: e.prompt_cache_write_1h_tokens
                },
                promptCacheReadTokens: e.prompt_cache_read_tokens,
                webSearchRequests: e.web_search_requests ?? 0.01
            }))).nullish(),
        model_access: ir(bt({
            api_name: me(),
            entitled: Uo(),
            max_effort_level: me().nullish()
        }).transform(({ api_name, entitled, max_effort_level })=>({
                apiName: api_name,
                entitled,
                ...max_effort_level != null && {
                    maxEffortLevel: max_effort_level
                }
            }))).nullish(),
        org_model_default: bt({
            name: me(),
            updated_at: me(),
            data_source: me(),
            override_user_selection: Uo(),
            default_effort_level: me().nullish(),
            override_user_effort: Uo().nullish()
        }).nullish(),
        oauth_account: bt({
            account_uuid: me().nullish(),
            account_email: me().nullish(),
            organization_uuid: me().nullish(),
            organization_name: me().nullish(),
            organization_type: me().nullish(),
            organization_rate_limit_tier: me().nullish(),
            user_rate_limit_tier: me().nullish(),
            seat_tier: me().nullish()
        }).passthrough().nullish(),
        auto_compact_windows: hg(me(), nd()).nullish(),
        narrowed: Uo().nullish()
    }));
function R(e = tt()) {
    return {
        entrypoint: (Dr().fetchesClientData && _Dt() ? DBe() : undefined) ?? dp(),
        model: Dn(e),
        ccVersion: ({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }).VERSION,
        organizationUuid: ce().oauthAccount?.organizationUuid ?? null
    };
}
function Z(e) {
    let n = Dn(e);
    let mainLoopModel = tt();
    if (n === Dn(mainLoopModel)) {
        return true;
    }
    let model = avr({
        permissionMode: "plan",
        mainLoopModel
    }).model;
    if (n === Dn(model)) {
        return true;
    }
    return [
        mainLoopModel,
        model
    ].some((u)=>{
        let r = Ngs(u);
        return r !== undefined && n === Dn(r);
    });
}
function et() {
    H_o((e)=>{
        try {
            return LEr(R(e !== undefined && Z(e) ? undefined : e));
        } catch (error) {
            c(error);
            return DEr;
        }
    });
}
et();
function v() {
    return qtn();
}
function OQn() {
    try {
        L_o(()=>{
            try {
                return v();
            } catch (error) {
                c(error);
                return true;
            }
        });
        N_o(()=>{
            try {
                return v();
            } catch (error) {
                c(error);
                return false;
            }
        });
        $_o((e, n)=>{
            try {
                return WKo(e, n);
            } catch (error) {
                c(error);
                return e;
            }
        });
        U_o(()=>{
            try {
                if (!v()) {
                    return null;
                }
                let e = R();
                return {
                    entrypoint: e.entrypoint ?? null,
                    model: e.model,
                    org: e.organizationUuid
                };
            } catch (error) {
                c(error);
                return null;
            }
        });
    } catch (error) {
        c(error);
    }
}
function ot(e) {
    return {
        params: {
            entrypoint: e.entrypoint,
            model: e.model
        },
        userAgent: `claude-code/${e.ccVersion}`
    };
}
function q(oauthAccount, oauth_account) {
    if (!oauthAccount || !oauth_account) {
        return oauthAccount;
    }
    if (oauth_account.account_uuid != null && oauth_account.account_uuid !== oauthAccount.accountUuid) {
        return oauthAccount;
    }
    let s = {
        organizationType: oauth_account.organization_type ?? null,
        organizationRateLimitTier: oauth_account.organization_rate_limit_tier ?? null,
        userRateLimitTier: oauth_account.user_rate_limit_tier ?? null,
        seatTier: oauth_account.seat_tier ?? null
    };
    if (oauth_account.account_email != null) {
        s.emailAddress = oauth_account.account_email;
    }
    if (oauth_account.organization_uuid != null) {
        s.organizationUuid = oauth_account.organization_uuid;
    }
    if (oauth_account.organization_name != null) {
        s.organizationName = oauth_account.organization_name;
    }
    return {
        ...oauthAccount,
        ...s
    };
}
function nt(oauth_account) {
    if (!oauth_account?.account_uuid) {
        return;
    }
    bwe({
        accountUuid: oauth_account.account_uuid,
        emailAddress: Ce() ? undefined : oauth_account.account_email ?? undefined,
        organizationUuid: oauth_account.organization_uuid ?? undefined
    });
}
async function rt(e, credentials) {
    if (Ie() === "gateway") {
        if (!a.CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY) {
            t("[Bootstrap] Skipped gateway /v1/models (CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY not set)");
            return {
                response: {
                    additional_model_options: []
                },
                viaScopelessOAuth: false
            };
        }
        let o = await it(credentials);
        return o && {
            response: o,
            viaScopelessOAuth: false
        };
    }
    if (Tt()) {
        t("[Bootstrap] Skipped: Nonessential traffic disabled");
        return null;
    }
    if (Ie() !== "firstParty") {
        t("[Bootstrap] Skipped: 3P provider");
        return null;
    }
    let { params, userAgent } = ot(e);
    let u = async (o, A)=>{
        t("[Bootstrap] Fetching");
        let l = await At.get(`${o}/api/claude_cli/bootstrap`, {
            headers: {
                "Content-Type": "application/json",
                "User-Agent": userAgent,
                ...Bxt(),
                ...A
            },
            params,
            timeout: 5000
        });
        let h = Q().safeParse(l.data);
        if (!h.success) {
            t(`[Bootstrap] Response failed validation: ${h.error.message}`);
            f("api_bootstrap_fetch", "parse_failed");
            return null;
        }
        t("[Bootstrap] Fetch ok");
        return h.data;
    };
    let r = Rv();
    if (!r && _d()) {
        try {
            let [o, A] = await Promise.all([
                mbe(),
                d$e()
            ]);
            if (o !== null) {
                let l = await u(a.ANTHROPIC_BASE_URL || A?.baseURL || dn().BASE_API_URL, {
                    ...A?.extraHeaders,
                    Authorization: `Bearer ${await o.getToken()}`,
                    "anthropic-beta": pp
                });
                return l && {
                    response: l,
                    viaScopelessOAuth: false
                };
            }
        } catch (error) {
            t(`[Bootstrap] WIF fetch failed: ${At.isAxiosError(error) ? error.response?.status ?? error.code : error instanceof Error ? error.constructor.name : "unknown"}`);
            f("api_bootstrap_fetch", "wif_unavailable");
            return null;
        }
    }
    if (!bn()?.accessToken && !r) {
        t("[Bootstrap] Skipped: no usable OAuth, WIF, or API key");
        return null;
    }
    if (a.ANTHROPIC_UNIX_SOCKET) {
        t("[Bootstrap] Skipped: unix-socket-proxied session");
        f("api_bootstrap_fetch", "unix_socket_skip");
        return null;
    }
    let viaScopelessOAuth = false;
    try {
        let o = await Ib(async ()=>{
            let A = bn()?.accessToken;
            let l = If();
            let h;
            if (A && (l || !r)) {
                viaScopelessOAuth = !l && !r;
                h = {
                    Authorization: `Bearer ${A}`,
                    "anthropic-beta": pp
                };
            } else if (r) {
                viaScopelessOAuth = false;
                h = {
                    "x-api-key": r
                };
            } else {
                t("[Bootstrap] No auth available on retry, aborting");
                return null;
            }
            return u(dn().BASE_API_URL, h);
        }, {
            gateToSessionOAuthCredential: Ce(),
            credentials
        });
        return o && {
            response: o,
            viaScopelessOAuth
        };
    } catch (error) {
        let A = At.isAxiosError(error) ? error.response?.status : undefined;
        if (viaScopelessOAuth && A === 403) {
            t("[Bootstrap] Skipped: 403 for OAuth token without profile scope");
            f("api_bootstrap_fetch", "no_profile_scope_403");
            return null;
        }
        t(`[Bootstrap] Fetch failed: ${At.isAxiosError(error) ? error.response?.status ?? error.code : "unknown"}`);
        m("api_bootstrap_fetch", "request_failed");
        throw error;
    }
}
function NGr() {
    if (a.ANTHROPIC_UNIX_SOCKET) {
        return false;
    }
    return Boolean(Rv()) || Boolean(bn()?.accessToken) && If();
}
async function nae(e, n) {
    await CDs(e, n);
}
async function CDs(e, n, { keepRenderCaches = false, renderedClientData } = {}) {
    OQn();
    try {
        let u = Ie() === "firstParty";
        if (!u) {
            uN();
            p8();
        }
        let r = R();
        let C = qpe();
        let _ = await rt(r, n);
        if (!_) {
            return false;
        }
        let { response, viaScopelessOAuth } = _;
        if (C !== qpe()) {
            t("[Bootstrap] Discarding response fetched under a superseded credential");
            f("api_bootstrap_fetch", "superseded_credential");
            return false;
        }
        g("api_bootstrap_fetch");
        let l = ce();
        let h = response.narrowed ?? viaScopelessOAuth;
        let B = h && response.additional_model_options == null;
        let T = h && response.additional_model_costs == null;
        let S = h && response.model_access == null;
        let z = h && response.org_model_default == null;
        let U = h && response.auto_compact_windows == null;
        let b = response.client_data ?? null;
        let additionalModelOptionsCache = B ? l.additionalModelOptionsCache ?? [] : response.additional_model_options ?? [];
        let additionalModelCostsCache = T ? l.additionalModelCostsCache ?? {} : response.additional_model_costs ?? {};
        let modelAccessCache = S ? l.modelAccessCache ?? [] : response.model_access ?? [];
        let F = U ? l.autoCompactWindowsCache ?? null : response.auto_compact_windows ?? null;
        nt(response.oauth_account);
        let V = qpe();
        let k = q(l.oauthAccount, response.oauth_account);
        let orgModelDefaultCache = response.org_model_default ? {
            ...response.org_model_default,
            ...k?.organizationUuid && {
                orgUuid: k.organizationUuid
            }
        } : z ? l.orgModelDefaultCache ?? null : null;
        let E = LEr({
            ...r,
            organizationUuid: k?.organizationUuid ?? r.organizationUuid
        });
        let x = l.clientDataCacheSlots?.[E];
        let w = EOt(x) ? x : undefined;
        let slot_hit = w !== undefined;
        let Y = Vn(k, l.oauthAccount);
        let slot_stale = u && w !== undefined && Date.now() - w.at > STs;
        let W = u && (w === undefined || !Vn(w.data ?? null, b));
        let slot_changed = u && (renderedClientData !== undefined ? !Vn(renderedClientData, b) : W);
        i("tengu_client_data_cache_key", {
            slot_hit,
            slot_changed,
            legacy_fallback: !slot_hit && l.clientDataCache != null,
            slot_stale
        });
        let H = u;
        let j = typeof l.additionalModelOptionsAnsweredAt === "number";
        let X = B || (H ? Array.isArray(l.additionalModelOptionsCache) && j && Vn(l.additionalModelOptionsCache, additionalModelOptionsCache) : !j && Vn(l.additionalModelOptionsCache ?? [], additionalModelOptionsCache));
        if (!W && !slot_changed && !slot_stale && X && Vn(l.additionalModelCostsCache ?? {}, additionalModelCostsCache) && Vn(l.modelAccessCache ?? [], modelAccessCache) && Vn(l.orgModelDefaultCache ?? null, orgModelDefaultCache) && (!u || Vn(l.autoCompactWindowsCache ?? null, F)) && Y) {
            t("[Bootstrap] Cache unchanged, skipping write");
            COt(E);
            if (!S) {
                Fvo();
            }
            return true;
        }
        t("[Bootstrap] Cache updated, persisting to disk");
        let K = false;
        await Ae((y)=>{
            if (V !== qpe()) {
                K = true;
                return y;
            }
            let oauthAccount = q(y.oauthAccount, response.oauth_account);
            let J = LEr({
                ...r,
                organizationUuid: oauthAccount?.organizationUuid ?? null
            });
            return {
                ...y,
                clientDataCacheSlots: u ? wTs(y.clientDataCacheSlots, J, {
                    data: b,
                    at: Date.now(),
                    entrypoint: r.entrypoint ?? null,
                    model: r.model,
                    org: oauthAccount?.organizationUuid ?? null
                }) : y.clientDataCacheSlots,
                ...B ? {} : {
                    additionalModelOptionsCache,
                    additionalModelOptionsAnsweredAt: H ? Date.now() : undefined
                },
                ...T ? {} : {
                    additionalModelCostsCache
                },
                ...S ? {} : {
                    modelAccessCache
                },
                ...z ? {} : {
                    orgModelDefaultCache
                },
                autoCompactWindowsCache: u && !U ? F : y.autoCompactWindowsCache ?? null,
                oauthAccount
            };
        }, e);
        COt(E);
        if (K) {
            return false;
        }
        if (!S) {
            Fvo();
        }
        if (slot_changed && !keepRenderCaches) {
            uN();
            p8();
        }
        return true;
    } catch (error) {
        if (Hp(error)) {
            t(`[Bootstrap] fetchBootstrapData failed: ${error}`, {
                level: "error"
            });
        } else {
            c(error);
        }
        return false;
    } finally{
        u_o();
    }
}
const at = p(()=>bt({
        data: ir(bt({
            id: me(),
            display_name: me().nullish(),
            description: me().nullish()
        }))
    }));
async function it(credentials) {
    await HV(credentials);
    let n = eo();
    if (!n) {
        return null;
    }
    try {
        let s = await At.get(`${n.url}/v1/models`, {
            headers: {
                Authorization: `Bearer ${n.jwt}`,
                "anthropic-version": "2023-06-01",
                "User-Agent": Ko()
            },
            params: {
                limit: 1000
            },
            timeout: 5000
        });
        let d = at().safeParse(s.data);
        if (!d.success) {
            t(`[Bootstrap] Gateway /v1/models failed validation: ${d.error.message}`);
            return null;
        }
        let additional_model_options = d.data.data.filter((r)=>/(claude|anthropic)/i.test(r.id)).filter((r)=>{
            let C = SO(r.id);
            return C === null || j$e(Pw(C.firstParty));
        }).map((r)=>({
                value: r.id,
                label: vC(r.display_name ?? "") || vC(r.id),
                description: DZ(r.description ?? "")
            }));
        t(`[Bootstrap] Gateway /v1/models \u2192 ${additional_model_options.length} custom options`);
        return {
            additional_model_options
        };
    } catch (error) {
        t(`[Bootstrap] Gateway /v1/models fetch failed: ${At.isAxiosError(error) ? error.response?.status ?? error.code : "unknown"}`);
        return null;
    }
}
export { OQn, NGr, nae, CDs };
