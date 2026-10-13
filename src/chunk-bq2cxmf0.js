import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { wt, Mn, kr, Woe, Gt, rC, Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Tw } from "/$bunfs/root/chunk-gr4a0fky.js";
import { me, Uo, ir, bt, Vc } from "/$bunfs/root/chunk-55p8dvkx.js";
const A = "tengu_lilac_loom";
const y = "feature_of_the_week";
const _ = 86400000;
const b = ()=>me().refine((e)=>!Number.isNaN(Date.parse(e)) && /(z|[+-]\d{2}:?\d{2})$/i.test(e), "must be ISO 8601 with timezone, e.g. 2026-06-04T16:00:00Z");
const c = ()=>me().optional().transform((e)=>{
        if (e === "") {
            return undefined;
        }
        return e;
    });
const v = p(()=>bt({
        feature: me().min(1),
        command: me().optional().transform((e)=>{
            if (e === "") {
                return undefined;
            }
            return e;
        }),
        startsAt: b(),
        endsAt: b(),
        hideCommandChip: Uo().optional(),
        creditless: Uo().optional(),
        titleLabel: c(),
        commandBlurb: c(),
        tipBlurb: c(),
        isTopPriorityAnnouncement: Uo().optional(),
        announcementLines: ir(bt({
            text: me(),
            style: Vc([
                "bold",
                "dim"
            ]).optional()
        })).optional().transform((e)=>{
            let n = e?.filter((i)=>i.text !== "");
            if (n?.length) {
                return n;
            }
        }).catch(undefined),
        tips: ir(me()).optional().transform((e)=>{
            let n = e?.filter(Boolean);
            if (n?.length) {
                return n;
            }
        }).catch(undefined),
        redeemBy: c()
    }));
class w {
    parsedCampaign = null;
    inFlightEligibilityRefresh = null;
}
const x = new q(()=>new w);
function C() {
    return x.of(B().host);
}
function ete() {
    let raw = rC(A, null);
    if (raw === null || raw === undefined) {
        return null;
    }
    let n = C();
    if (n.parsedCampaign === null || n.parsedCampaign.raw !== raw) {
        let r = v().safeParse(raw);
        if (!r.success) {
            t(`Promo campaign payload failed validation: ${r.error.message}`, {
                level: "warn"
            });
        }
        n.parsedCampaign = r.success ? {
            raw,
            campaign: r.data,
            startsAtMs: Date.parse(r.data.startsAt),
            endsAtMs: Date.parse(r.data.endsAt)
        } : {
            raw,
            campaign: null,
            startsAtMs: 0,
            endsAtMs: 0
        };
    }
    if (n.parsedCampaign.campaign === null) {
        return null;
    }
    let i = Date.now();
    if (i < n.parsedCampaign.startsAtMs) {
        return null;
    }
    if (i > n.parsedCampaign.endsAtMs) {
        return null;
    }
    return n.parsedCampaign.campaign;
}
function ZXn() {
    return ete()?.command ?? null;
}
function S(e) {
    if (!wt()) {
        return "excluded";
    }
    let n = kr();
    if (!n) {
        return "excluded";
    }
    if (e.creditless) {
        return "viewer";
    }
    if (Woe()) {
        return "claimant";
    }
    if (n === "team") {
        if (!Mn()?.organizationRole) {
            return "excluded";
        }
        if (Tw()) {
            return "claimant";
        }
        return "viewer";
    }
    return "excluded";
}
function u() {
    let e = ete();
    if (!e) {
        return null;
    }
    let orgId = Mn()?.organizationUuid;
    if (!orgId) {
        return null;
    }
    let audience = S(e);
    if (audience === "excluded") {
        return null;
    }
    if (audience === "claimant" && I(orgId, e.feature)) {
        return null;
    }
    return {
        campaign: e,
        orgId,
        audience
    };
}
function eJn(e) {
    let n = ZXn();
    return n !== null && e === n;
}
function tJn(e) {
    return eJn(e) && eze();
}
function eze() {
    let e = u();
    if (!e || e.audience !== "claimant") {
        return false;
    }
    if (!e.campaign.command) {
        return false;
    }
    let n = d(e.orgId, e.campaign.feature);
    return n !== null && n.eligible && n.available;
}
function Byt() {
    let e = u();
    if (!e || e.audience !== "viewer") {
        return false;
    }
    if (!e.campaign.command) {
        return false;
    }
    return !P(e.orgId, e.campaign.feature);
}
function Ome() {
    let e = ete();
    let n = Mn()?.organizationUuid;
    if (!e || !n) {
        return null;
    }
    let i = d(n, e.feature);
    if (!i || i.amount_minor_units === null || !i.currency) {
        return null;
    }
    return {
        amountMinorUnits: i.amount_minor_units,
        currency: i.currency
    };
}
function Ryn(e) {
    let n = C();
    n.inFlightEligibilityRefresh ??= E(e).catch((i)=>{
        t(`FotW eligibility refresh failed: ${i}`, {
            level: "warn"
        });
        return null;
    }).finally(()=>{
        n.inFlightEligibilityRefresh = null;
    });
    return n.inFlightEligibilityRefresh;
}
async function E(e) {
    let n = u();
    if (!n || n.audience !== "claimant") {
        return null;
    }
    let { campaign, orgId } = n;
    if (d(orgId, campaign.feature) !== null) {
        return null;
    }
    let a;
    try {
        a = await Gt.get(`/api/oauth/organizations/:orgUUID/overage_credit_grant?campaign=${y}`, {
            auth: "teleport-org",
            timeout: 10000,
            validateStatus: (o)=>o < 500,
            credentials: e
        });
    } catch (error) {
        f("api_fotw_eligibility_fetch", "request_failed");
        t(`FotW eligibility fetch failed: ${error}`, {
            level: "warn"
        });
        return null;
    }
    if (!a.ok || a.status >= 400) {
        f("api_fotw_eligibility_fetch", "unavailable");
        return null;
    }
    g("api_fotw_eligibility_fetch");
    if (a.data.granted) {
        h(orgId, campaign.feature);
    }
    if (a.data.eligible && a.data.needs_payment_setup === true) {
        if (a.data.amount_minor_units == null || !a.data.currency) {
            return null;
        }
        return {
            amountMinorUnits: a.data.amount_minor_units,
            currency: a.data.currency
        };
    }
    if (d(orgId, campaign.feature) !== null) {
        return null;
    }
    F(orgId, campaign.feature, {
        available: a.data.available,
        eligible: a.data.eligible,
        granted: a.data.granted,
        amount_minor_units: a.data.amount_minor_units ?? null,
        currency: a.data.currency ?? null
    }, {
        onlyIfAbsent: true
    });
    return null;
}
function d(e, feature) {
    let r = ce().fotwEligibilityCache?.[e]?.[feature];
    if (!r) {
        return null;
    }
    if (Date.now() - r.timestamp > _) {
        return null;
    }
    return r.info;
}
async function V2o(e, n) {
    if (!tJn(e)) {
        return {
            outcome: "skipped"
        };
    }
    let i = u();
    if (!i) {
        return {
            outcome: "skipped"
        };
    }
    let { campaign, orgId } = i;
    let o = Ome();
    let l;
    try {
        l = await Gt.post("/api/oauth/organizations/:orgUUID/overage_credit_grant", {
            campaign: y,
            feature: campaign.feature,
            enable_overages: true
        }, {
            auth: "teleport-org",
            timeout: 60000,
            validateStatus: (s)=>s < 500,
            credentials: n
        });
    } catch (error) {
        m("api_fotw_claim", "request_failed");
        t(`FotW claim failed: ${error}`, {
            level: "warn"
        });
        return {
            outcome: "failed"
        };
    }
    if (!l.ok) {
        return {
            outcome: "failed"
        };
    }
    if (l.status >= 400) {
        if (U(l.data) === "Failed to grant credit") {
            m("api_fotw_claim", "grant_failed");
            return {
                outcome: "failed"
            };
        }
        f("api_fotw_claim", "not_available");
        F(orgId, campaign.feature, {
            available: false,
            eligible: false,
            granted: false,
            amount_minor_units: null,
            currency: null
        });
        return {
            outcome: "not_available"
        };
    }
    if (!l.data.success) {
        m("api_fotw_claim", "grant_failed");
        return {
            outcome: "failed"
        };
    }
    g("api_fotw_claim");
    h(orgId, campaign.feature);
    return {
        outcome: "granted",
        amountMinorUnits: l.data.amount_minor_units ?? o?.amountMinorUnits ?? 0,
        currency: l.data.currency ?? o?.currency ?? "USD",
        expiresAt: l.data.expires_at ?? null
    };
}
const M = p(()=>bt({
        error: bt({
            message: me()
        })
    }));
function U(data) {
    let n = M().safeParse(data);
    if (n.success) {
        return n.data.error.message;
    }
}
function I(orgId, feature) {
    let fotwClaimedFeatures = ce().fotwClaimedFeatures;
    return Boolean(fotwClaimedFeatures?.[orgId]?.includes(feature));
}
function h(orgId, feature) {
    Ae((i)=>{
        let r = i.fotwClaimedFeatures?.[orgId] ?? [];
        if (r.includes(feature)) {
            return i;
        }
        return {
            ...i,
            fotwClaimedFeatures: {
                ...i.fotwClaimedFeatures,
                [orgId]: [
                    ...r,
                    feature
                ]
            }
        };
    });
}
function P(orgId, feature) {
    let fotwUpsellFulfilled = ce().fotwUpsellFulfilled;
    return Boolean(fotwUpsellFulfilled?.[orgId]?.includes(feature));
}
function q2o(e) {
    let n = u();
    if (!n || n.audience !== "viewer" || !eJn(e)) {
        return;
    }
    let { orgId, campaign } = n;
    Ae((a)=>{
        let o = a.fotwUpsellFulfilled?.[orgId] ?? [];
        if (o.includes(campaign.feature)) {
            return a;
        }
        return {
            ...a,
            fotwUpsellFulfilled: {
                ...a.fotwUpsellFulfilled,
                [orgId]: [
                    ...o,
                    campaign.feature
                ]
            }
        };
    });
}
function F(orgId, feature, info, { onlyIfAbsent = false } = {}) {
    Ae((a)=>{
        let o = a.fotwEligibilityCache?.[orgId]?.[feature];
        let l = o && Date.now() - o.timestamp <= _;
        if (onlyIfAbsent && l) {
            return a;
        }
        if (o && o.info.available === info.available && o.info.eligible === info.eligible && o.info.granted === info.granted && o.info.amount_minor_units === info.amount_minor_units && o.info.currency === info.currency && l) {
            return a;
        }
        return {
            ...a,
            fotwEligibilityCache: {
                ...a.fotwEligibilityCache,
                [orgId]: {
                    ...a.fotwEligibilityCache?.[orgId],
                    [feature]: {
                        info,
                        timestamp: Date.now()
                    }
                }
            }
        };
    });
}
export { ete, ZXn, eJn, tJn, eze, Byt, Ome, Ryn, V2o, q2o };
