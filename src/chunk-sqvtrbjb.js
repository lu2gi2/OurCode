import { d, Br } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { O9 } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { pO, yP, MOt, K_, mN, _P, KRe } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Ho, Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { fUn, Slt, x$e, h7t, kt, H7t, c8, n1, GUn, gR, N7t, Vf, Vd, Foe, EY, f8 } from "/$bunfs/root/chunk-0ycjphb5.js";
import { eoe } from "/$bunfs/root/chunk-gr4a0fky.js";
import { uge, Z7e, eZe, AMe, CMe, VSn, qSn } from "/$bunfs/root/chunk-zsdche9n.js";
import { brt, N6t, $6t, F6t, U6t, B6t, VTe, h0e, aqe } from "/$bunfs/root/chunk-qwvy7ma3.js";
const E = $6t(N7t);
async function Qjs() {
    if (Ie() !== "bedrock") {
        return [];
    }
    if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) {
        return [];
    }
    let r = F6t(E, (n)=>n.includes("application-inference-profile"));
    if (r.length === 0) {
        return [];
    }
    i("tengu_bedrock_upgrade_check", {
        stale_tiers: Br(r.length)
    });
    let l;
    try {
        l = await fUn();
    } catch  {
        return [];
    }
    let s = h7t(await pO());
    let o = [];
    for (let n of r){
        let m = Ho[n.defaultKey].firstParty;
        let toBedrockId = Slt(l, m, s);
        if (!toBedrockId) {
            continue;
        }
        if (VTe(toBedrockId)) {
            t(`[bedrock-upgrade] ${h0e(n.tier, "upgrade", [
                toBedrockId
            ])}`);
            continue;
        }
        let fromMarketingName = Vf(Ho[n.pinnedKey].firstParty);
        let toMarketingName = Vf(Ho[n.defaultKey].firstParty);
        if (!fromMarketingName || !toMarketingName) {
            continue;
        }
        o.push({
            tier: n.tier,
            envVar: n.envVar,
            fromKey: n.pinnedKey,
            fromMarketingName,
            toKey: n.defaultKey,
            toMarketingName,
            toBedrockId
        });
    }
    let k = (await Promise.all(o.map(async (n)=>{
        let m = await zSn(n.toBedrockId, n.tier, {
            isDefault: true,
            versionTooOld: "unavailable"
        });
        i("tengu_bedrock_probe_result", {
            tier: d(n.tier),
            model_id: kt(n.toBedrockId),
            accessible: m
        });
        if (m) {
            return n;
        }
        return null;
    }))).filter((n)=>n !== null);
    t(`[bedrock-upgrade] tiersWithPin=${r.length} candidates=${k.length}`);
    return k;
}
function Zjs(r) {
    return U6t(r, E);
}
async function eWs() {
    if (Ie() !== "bedrock") {
        return [];
    }
    if (a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST) {
        return [];
    }
    let r = N6t(Date.now());
    let modelOverrides = ft().modelOverrides;
    let s = B6t(E, modelOverrides);
    if (s.length === 0) {
        return [];
    }
    i("tengu_bedrock_default_check", {
        unpinned_tiers: Br(s.length)
    });
    let o;
    try {
        o = await fUn();
    } catch  {
        o = [];
    }
    let p = h7t(await pO());
    let k = s.some((e)=>e.tier === "sonnet");
    let n = await Promise.all(s.map(async (e)=>{
        let f = Ho[e.defaultKey];
        let c = h(e.defaultKey, o, p);
        if (!c) {
            return null;
        }
        if (VTe(c)) {
            t(`[bedrock-fallback] ${h0e(e.tier, "check", [
                c
            ])}`);
            return null;
        }
        await I(e, c, o, p, modelOverrides, k);
        let g = {};
        let y = await zSn(c, e.tier, {
            isDefault: true,
            onVerdict: (b, w)=>{
                g.verdict = b;
                g.at = w;
            }
        });
        i("tengu_bedrock_probe_result", {
            tier: d(e.tier),
            model_id: kt(c),
            accessible: y
        });
        if (y || g.verdict === "temporary") {
            return null;
        }
        if (g.verdict === "refused") {
            n1(c, c8(c), (g.at ?? Date.now()) + uge);
        }
        let u = await K(e.defaultKey, e.tier, o, p, modelOverrides, r);
        if (!u) {
            return null;
        }
        if (g.verdict !== "refused") {
            if (!(u.answeredLive === true || await zSn(u.regionalId, u.crossTier ? "sonnet" : e.tier, {
                live: true
            }))) {
                return null;
            }
            if (g.verdict === "denied") {
                n1(c, c8(c), Date.now() + uge);
                WDs(c, e.tier, "refused");
            }
        }
        let defaultName = Vf(f.firstParty);
        let fallbackName = Vf(Ho[u.key].firstParty);
        if (!defaultName || !fallbackName) {
            return null;
        }
        return {
            tier: e.tier,
            envVar: e.envVar,
            defaultKey: e.defaultKey,
            defaultName,
            fallbackKey: u.key,
            fallbackName,
            fallbackBedrockId: u.regionalId,
            ...u.crossTier && {
                crossTier: true
            }
        };
    }));
    let m = [];
    for (let e of n){
        if (e !== null) {
            m.push(e);
        }
    }
    t(`[bedrock-fallback] unpinnedTiers=${s.length} fallbacks=${m.length}`);
    return m;
}
async function I(r, l, s, o, modelOverrides, k) {
    let n = (f, id)=>({
            id,
            name: Vf(Ho[f].firstParty) ?? Ho[f].firstParty
        });
    let m = (f, c)=>aqe(f, c).flatMap((g)=>{
            let y = h(g, s, o);
            if (y && !modelOverrides?.[Ho[g].firstParty] && !VTe(y)) {
                return [
                    n(g, y)
                ];
            }
            return [];
        });
    let e = [
        n(r.defaultKey, l),
        ...m(r.defaultKey, r.tier)
    ];
    if (r.tier === "opus") {
        let f = h(gR, s, o);
        let c = !f ? [] : !VTe(f) ? [
            n(gR, f)
        ] : k ? m(gR, "sonnet") : [];
        e.push(...c.map((g)=>({
                ...g,
                crossTier: true
            })));
    }
    H7t("bedrock", r.tier, r.envVar, e);
    await Promise.all(e.slice(1).map(async (f)=>{
        let c = f.crossTier ? "sonnet" : r.tier;
        let g = await P(f.id, c);
        if (g?.state === "refused") {
            n1(f.id, c8(f.id), g.at + uge);
        }
    })).catch(()=>{});
}
function h(r, l, s) {
    let o = Ho[r];
    let p = Slt(l, o.firstParty, s);
    if (p) {
        return p;
    }
    if (!o.bedrock) {
        return null;
    }
    return x$e(o.bedrock, s);
}
async function K(defaultKey, tier, s, o, modelOverrides, k) {
    let n = [];
    function m(u, probeTier) {
        return u.flatMap((_)=>{
            let regionalId = h(_, s, o);
            if (!regionalId) {
                return [];
            }
            if (VTe(regionalId)) {
                n.push(probeTier === tier ? regionalId : `${regionalId} (the cross-tier Sonnet default)`);
                return [];
            }
            return [
                {
                    key: _,
                    regionalId,
                    probeTier
                }
            ];
        });
    }
    let e = aqe(defaultKey, tier).filter((u)=>!modelOverrides?.[Ho[u].firstParty]);
    let f = [
        m(e, tier)
    ];
    if (tier === "opus") {
        f.push(m([
            gR
        ], "sonnet"));
    }
    if (n.length > 0) {
        t(`[bedrock-fallback] ${h0e(tier, "fallback", n)}`);
    }
    let c = new Set;
    let g = (u)=>({
            onVerdict: (A, _)=>{
                if (A === "refused") {
                    n1(u.regionalId, c8(u.regionalId), (_ ?? Date.now()) + uge);
                } else if (A === "accessible") {
                    GUn(u.regionalId);
                    if (_ === undefined) {
                        c.add(u.regionalId);
                    }
                }
            }
        });
    let y = await qSn(f, (u, live)=>{
        if (live) {
            return zSn(u.regionalId, u.probeTier, {
                live,
                ...g(u)
            });
        }
        return zSn(u.regionalId, u.probeTier, g(u));
    }, async (u)=>(await P(u.regionalId, u.probeTier))?.state === "refused", k);
    if (!y) {
        return null;
    }
    return {
        key: y.key,
        regionalId: y.regionalId,
        ...y.probeTier !== tier && {
            crossTier: true
        },
        ...c.has(y.regionalId) && {
            answeredLive: true
        }
    };
}
async function zSn(r, l, s) {
    let o = await T(l);
    if (o === undefined) {
        s?.onVerdict?.("temporary");
        return false;
    }
    return await VSn("bedrock", await R(o), r, ()=>v(r, o), s) === "accessible";
}
async function WDs(r, l, s) {
    try {
        let o = await T(l);
        let p = o && await R(o);
        if (p) {
            await CMe(p, r, s);
        }
    } catch (error) {
        t(`[3p-model-memory] bedrock record failed: ${error}`);
    }
}
async function T(r) {
    try {
        return r === "haiku" && O9(a.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION) || await pO();
    } catch  {
        return;
    }
}
function R(r) {
    return eZe("bedrock", ()=>[
            r,
            a.ANTHROPIC_BEDROCK_BASE_URL,
            a.CLAUDE_CODE_SKIP_BEDROCK_AUTH ? "skip-auth" : undefined,
            ...G7n(),
            Z7e()
        ]);
}
async function P(r, l) {
    let s = await T(l);
    let o = s && await R(s);
    if (o) {
        return AMe(o, r);
    }
}
function G7n() {
    let r = ft();
    return [
        a.AWS_PROFILE,
        a.AWS_CONFIG_FILE,
        a.AWS_SHARED_CREDENTIALS_FILE,
        a.AWS_ACCESS_KEY_ID,
        a.AWS_ROLE_ARN,
        a.AWS_WEB_IDENTITY_TOKEN_FILE,
        a.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI,
        a.AWS_CONTAINER_CREDENTIALS_FULL_URI,
        r.awsCredentialExport,
        r.awsAuthRefresh
    ];
}
async function v(r, awsRegion) {
    try {
        let [{ AnthropicBedrock }, { getProxyFetchOptions }] = await Promise.all([
            import("/$bunfs/root/chunk-qmzdd042.js"),
            import("/$bunfs/root/chunk-g1ar6avr.js")
        ]);
        let p = {
            awsRegion,
            maxRetries: 0,
            timeout: 8000,
            fetchOptions: getProxyFetchOptions({
                url: a.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${awsRegion}.amazonaws.com`
            })
        };
        let k;
        let n = eoe();
        let apiKey = a.AWS_BEARER_TOKEN_BEDROCK;
        if (apiKey) {
            k = new AnthropicBedrock({
                ...p,
                apiKey,
                defaultHeaders: {
                    ...n,
                    ...K_(),
                    ...mN(),
                    Authorization: `Bearer ${apiKey}`,
                    ...!yP() && {
                        "X-Api-Key": null
                    }
                }
            });
        } else {
            let e = a.CLAUDE_CODE_SKIP_BEDROCK_AUTH;
            let f = Vd();
            let c = {
                authToken: null,
                defaultHeaders: {
                    ...n,
                    ...K_(),
                    ...mN(),
                    Authorization: null,
                    ...!yP() && {
                        "X-Api-Key": null
                    }
                },
                ..._P
            };
            let Authorization = e ? KRe() : undefined;
            let y = e || f ? null : await EY();
            k = y ? new AnthropicBedrock({
                ...p,
                ...c,
                awsAccessKey: y.accessKeyId,
                awsSecretKey: y.secretAccessKey,
                awsSessionToken: y.sessionToken
            }) : new AnthropicBedrock({
                ...p,
                ...e && !Authorization && {
                    skipAuth: true,
                    authToken: null,
                    defaultHeaders: {
                        ...n,
                        ...mN()
                    },
                    ..._P
                },
                ...e && Authorization && {
                    apiKey: Authorization.match(/^Bearer (.+)$/i)?.[1] ?? Authorization,
                    defaultHeaders: {
                        ...n,
                        ...mN(),
                        Authorization,
                        ...MOt()
                    }
                },
                ...!e && c,
                ...!e && f && {
                    providerChainResolver: Foe("Bedrock").providerChainResolver
                },
                ...!e && !f && {
                    providerChainResolver: f8(awsRegion)
                }
            });
        }
        await k.messages.create(brt(r));
        return {
            accessible: true
        };
    } catch (error) {
        if (error?.status === 429) {
            return {
                accessible: true
            };
        }
        return {
            accessible: false,
            error
        };
    }
}
export { Qjs, Zjs, eWs, zSn, WDs, G7n };
