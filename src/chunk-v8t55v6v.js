import { Lg, Gpe, zsn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l, v, ti } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { kO } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Rs } from "/$bunfs/root/chunk-w1n7t02f.js";
import { yn, fe, bO, Tn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { IV, Qo, G_, oP, sP, rz, Pbe, oz, sz, yRe, lN, Xr, e1, t1, WUn, Yvs, cN, ug, dN, g7, jk, V_, OIt, tBn, Ql, We, u8, MV, SY, qo, hR, Dt, rH, jp, Cv, wt, Gt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { LJt, WNe, Oys, pYe, c$n } from "/$bunfs/root/chunk-gr4a0fky.js";
import { pc, uQt, Ai } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { QYt } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { uc } from "/$bunfs/root/chunk-tf8026s8.js";
import { nae } from "/$bunfs/root/chunk-w9qrhgzw.js";
import { aDe, SJ, PKt, IKt, pw, x9r, Qb, mb, lle, lne, Bsr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { LKo, GWt, AEe, AX, G6 } from "/$bunfs/root/chunk-nh7p29db.js";
import { DGr, VWt, LGr, Yme } from "/$bunfs/root/chunk-hd6djnda.js";
import { Ht, Dn } from "/$bunfs/root/chunk-77t63btp.js";
function y(e, o, r) {
    if (!wt()) {
        return false;
    }
    let s = e !== null ? Dt(e) : Ql();
    let n = s.toLowerCase();
    let d = n.includes("opus") || n.includes("fable");
    let i = n.includes("opus-4-6");
    let c = n.includes("sonnet-4-6");
    if (o && G_(e)) {
        return true;
    }
    let u = n.includes("fable") ? "Fable" : hR(s);
    if (u !== undefined) {
        let p = LJt(u);
        if (p !== "pay_per_request" && p !== "included_in_plan") {
            return true;
        }
    }
    if (!jp(n)) {
        return false;
    }
    if (d && r) {
        return false;
    }
    return i || c;
}
function kEe(e, o, r, s) {
    let n = Qo();
    let d = n && o && (!e || s?.announceKeptOn === true);
    let i = n && !!e && !o;
    return (d ? " · Fast mode ON" : "") + (y(r, o, MV()) ? " · Draws from usage credits" : "") + (i ? " · Fast mode OFF" : "");
}
function DKo(e, o, r) {
    if (!!e === o) {
        return null;
    }
    if (o) {
        return `Fast mode ON${y(r, true, MV()) ? " · Draws from usage credits" : ""}`;
    }
    return "Fast mode OFF";
}
function MS(e) {
    let o = u8(e ?? V_());
    if (e === null) {
        return `${o} (default)`;
    }
    return o;
}
const timeout = 5000;
async function O(e) {
    if (e === null) {
        return w("follows_account");
    }
    if (A(e)) {
        return w("not_representable");
    }
    if (AEe() !== "primary") {
        return w("not_primary");
    }
    if (Pbe() !== "served") {
        return w("not_served");
    }
    let o = AX();
    if (o === null || o.kind !== "account") {
        return w("no_account_scope");
    }
    return T(o, G6(), e);
}
async function T(e, o, r) {
    let s = {
        model: Dt(r)
    };
    try {
        let n = await Gt.patch(`/api/organizations/:orgUUID/model_selector_state/${o}`, s, {
            auth: "teleport-org",
            isBackground: true,
            timeout,
            validateStatus: ()=>true
        });
        if (!n.ok) {
            t(`[servedCatalog] selection write (${o}) skipped: ${n.reason}`);
            f("model_default_server_sync", `declined_${n.reason}`);
            return {
                status: "skipped",
                reason: "declined"
            };
        }
        let httpStatus = n.status;
        if (httpStatus < 200 || httpStatus >= 300) {
            t(`[servedCatalog] selection write (${o}): HTTP ${httpStatus}`);
            f("model_default_server_sync", `http_${httpStatus}`);
            return {
                status: "error",
                reason: "http_status",
                httpStatus
            };
        }
        t(`[servedCatalog] selection write (${o}) ok`);
        g("model_default_server_sync");
        await N(e, o, n.data, s.model);
        return {
            status: "ok",
            httpStatus
        };
    } catch (error) {
        let d = ti(error).kind;
        t(`[servedCatalog] selection write (${o}) failed: ${d}`);
        f("model_default_server_sync", `network_${d}`);
        return {
            status: "error",
            reason: "network"
        };
    }
}
async function N(e, id, data, model) {
    let n = LKo(e, id);
    if (n === undefined || n.catalog === null) {
        return;
    }
    let d = QYt().safeParse(data);
    let state = d.success && d.data.id === id ? d.data : {
        ...n.catalog.state ?? {
            id
        },
        model,
        selection_source: "user_setting"
    };
    await GWt(e, id, {
        ...n,
        staleAt: Math.min(n.staleAt, Date.now()),
        catalog: {
            ...n.catalog,
            state
        }
    });
}
function w(e) {
    t(`[servedCatalog] selection write skipped: ${e}`);
    return {
        status: "skipped",
        reason: e
    };
}
function A(e) {
    let o = e.trim().toLowerCase();
    return o === "opusplan" || o === "opusplan[1m]";
}
async function TEe(e, o, credentials, s) {
    let model = e === "default" ? null : e;
    if (model === null) {
        let message = lN(V_(), "switch");
        if (message !== null) {
            m("model_switch", "denied_by_managed_settings");
            return {
                ok: false,
                message,
                code: "restricted_by_org"
            };
        }
    }
    let substitutedFrom;
    if (model) {
        let i = B(model);
        if (i !== null) {
            let c = Ht(model.trim().toLowerCase());
            let u = IV("model");
            switch(i.kind){
                case "disabled":
                    m("model_switch", "alias_1m_disabled");
                    return {
                        ok: false,
                        message: u ? `1M context is turned off here (CLAUDE_CODE_DISABLE_1M_CONTEXT is set), so '${model}' isn't available. Run ${u} ${c} instead.` : `1M context is turned off (CLAUDE_CODE_DISABLE_1M_CONTEXT is set), so '${model}' isn\u2019t available. Switch to ${c} instead.`,
                        code: "alias_1m_disabled"
                    };
                case "unsupported":
                    m("model_switch", "alias_1m_unsupported");
                    return {
                        ok: false,
                        message: u ? `${qo(i.carrier)} doesn't have a 1M context window, so '${model}' isn't available. Run ${u} ${c} to use it with its standard context window.` : `${qo(i.carrier)} doesn\u2019t have a 1M context window, so '${model}' isn\u2019t available. Switch to ${c} to use its standard context window.`,
                        code: "alias_1m_unsupported"
                    };
                case "noModeDependentVariant":
                    m("model_switch", "alias_1m_no_mode_variant");
                    return {
                        ok: false,
                        message: u ? `'${model}' isn't available: the ${c} setting switches models in plan mode and has no 1M form. Run ${u} ${c}, or ${u} sonnet[1m] for a 1M context window.` : `'${model}' isn\u2019t available, because the ${c} setting switches models in plan mode and has no 1M form. You can switch to ${c}, or to sonnet[1m] for a 1M context window.`,
                        code: "alias_1m_unsupported"
                    };
            }
        }
    }
    if (model && oz(model, sz())) {
        let i = jk(model);
        if (i === null) {
            let c = await Yme(model, o, credentials);
            if (c !== "overturned") {
                m("model_switch", c === "probe_failed" ? "entitlement_probe_failed" : "denied_by_entitlement");
                let u = IV("model");
                return {
                    ok: false,
                    message: `Model '${model}' is restricted by your organization's settings. ${u ? `Run ${u} to choose a different model.` : "Switch to a different model."}`,
                    code: c === "probe_failed" ? "check_failed" : "restricted_by_org"
                };
            }
        } else {
            substitutedFrom = model;
            model = i;
        }
    } else if (model && !Xr(model)) {
        let i = jk(model);
        if (i === null) {
            m("model_switch", W(model));
            return {
                ok: false,
                message: `Model '${model}' is not available. Your organization restricts model selection.`,
                code: "restricted_by_org"
            };
        }
        substitutedFrom = model;
        model = i;
    }
    if (model && IGr(model)) {
        m("model_switch", "opus_1m_unavailable");
        return {
            ok: false,
            message: "Opus with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m",
            code: "unavailable_for_account"
        };
    }
    if (model && OGr(model)) {
        m("model_switch", "sonnet_1m_unavailable");
        return {
            ok: false,
            message: "Sonnet with 1M context is not available for your account. Learn more: https://code.claude.com/docs/en/model-config#extended-context-with-1m",
            code: "unavailable_for_account"
        };
    }
    if (model) {
        let i = cN(model);
        if (i) {
            switch(i.reason){
                case "disabled":
                    if (i.notOffered) {
                        m("model_switch", "not_offered");
                        return {
                            ok: false,
                            message: i.minimumVersion !== undefined ? Yvs(i.minimumVersion) : WUn(model),
                            code: "not_offered"
                        };
                    }
                    m("model_switch", "disabled_by_org");
                    return {
                        ok: false,
                        message: `Model '${model}' is not currently available for your account${i.description ? `. ${i.description}` : "."}`,
                        code: "unavailable_for_account"
                    };
                case "absent":
                    {
                        let c = await DGr(LGr(model), {
                            forceServerProbe: true,
                            credentials
                        }, s?.deadlineMs);
                        let u = x(c, s);
                        if (!c.valid && !u) {
                            m("model_switch", c.notFound ? "fable_unavailable" : "fable_probe_failed");
                            let p = IV("model");
                            return {
                                ok: false,
                                message: c.notFound ? `${i.displayName} isn't available for your account yet. ${p ? `Run ${p} to pick another model.` : "Switch to a different model."}` : c.error,
                                ...P(c.notFound || c.permissionDenied ? "unavailable_for_account" : D(c)),
                                ...c.serverRefusedModel === true && substitutedFrom === undefined && {
                                    serverRefusedModel: true
                                }
                            };
                        }
                        if (c.valid) {
                            nae(o, credentials);
                        }
                        return {
                            ok: true,
                            model: VWt(model) ? model.trim().toLowerCase() : model,
                            ...substitutedFrom !== undefined && {
                                substitutedFrom
                            },
                            ...u && {
                                unconfirmed: true
                            }
                        };
                    }
            }
        }
    }
    if (!model) {
        return {
            ok: true,
            model
        };
    }
    if (VWt(model)) {
        return {
            ok: true,
            model: model.trim().toLowerCase()
        };
    }
    try {
        let i = await DGr(model, {
            credentials,
            ...s?.confirmWithServer === false && {
                serverProbe: false
            }
        }, s?.deadlineMs);
        let c = !i.valid && i.creditsRequired === true && s?.acceptCreditsRequired === true && X_n(E(model));
        let u = x(i, s);
        if (!i.valid && !c && !u) {
            m("model_switch", "invalid_model");
            return {
                ok: false,
                message: i.error,
                ...P(D(i)),
                ...i.serverRefusedModel === true && substitutedFrom === undefined && {
                    serverRefusedModel: true
                }
            };
        }
        return {
            ok: true,
            model: E(model),
            ...substitutedFrom !== undefined && {
                substitutedFrom
            },
            ...!i.valid && c && {
                creditsRefusal: i.error
            },
            ...u && {
                unconfirmed: true
            }
        };
    } catch (error) {
        m("model_switch", "validate_exception");
        return {
            ok: false,
            message: `Failed to validate model: ${l(error)}`,
            code: "check_failed"
        };
    }
}
function E(model) {
    return model;
}
async function ak(e, o, requestedModel, source, n = {}) {
    let d = o();
    let i = pw(d);
    let c = I(d, requestedModel);
    if (c.length === 0) {
        return {
            decision: "proceed",
            skipConfirm: false,
            messages: []
        };
    }
    let messages = [];
    let p;
    let M = false;
    let skipConfirm = true;
    for (let h of c){
        let S = await x9r(e, {
            ...h,
            requestedModel,
            source
        }, {
            signal: n.signal
        });
        messages.push(...S.messages);
        if (S.decision === "block") {
            return {
                decision: "block",
                reason: S.reason,
                messages
            };
        }
        if (S.decision === "ask") {
            M = true;
            p ??= S.reason;
        } else {
            skipConfirm = skipConfirm && S.skipConfirm;
        }
    }
    if (pw(o()) !== i) {
        if (n.revalidating) {
            return {
                decision: "block",
                reason: "the session model changed while a PreModelSwitch hook was running; pick again",
                messages
            };
        }
        let h = await ak(e, o, requestedModel, source, {
            ...n,
            revalidating: true
        });
        return {
            ...h,
            messages: [
                ...messages,
                ...h.messages
            ]
        };
    }
    if (M) {
        return {
            decision: "ask",
            reason: p,
            messages
        };
    }
    return {
        decision: "proceed",
        skipConfirm,
        messages
    };
}
function I(e, requestedModel) {
    let r = IKt(e);
    let mode = e.toolPermissionContext.mode;
    let n = [
        mode,
        mode === "plan" ? "default" : "plan"
    ];
    let d = new Set;
    let i = [];
    for (let c of n){
        let fromModel = PKt(r, c);
        let toModel = PKt(requestedModel, c);
        let M = `${fromModel}\x00${toModel}`;
        if (fromModel !== toModel && !d.has(M)) {
            d.add(M);
            i.push({
                fromModel,
                toModel
            });
        }
    }
    return i;
}
function _ze(e) {
    return [
        `Model switch blocked by a PreModelSwitch hook${e.reason !== undefined ? `: ${Yd(e.reason)}` : e.decision === "ask" ? ": confirmation required, and this session cannot ask" : ""}`,
        ...e.messages.map(Yd)
    ].join(`
`);
}
function Yd(e) {
    return Ai(pc(uQt(e.trimEnd())));
}
function MU(e, o, r) {
    return [
        `Model switch to ${MS(e)} was blocked by a PreModelSwitch hook${o ? `: ${Yd(o)}` : ""}`,
        ...r.map(Yd)
    ].join(`
`);
}
async function bze(e, mainLoopModel, r, s, n, d, i, c, u) {
    let fastMode = r().fastMode;
    Gpe();
    Qb(e, r(), mainLoopModel, d);
    s((k)=>({
            ...k,
            mainLoopModel,
            mainLoopModelForSession: null
        }));
    if (i !== undefined) {
        f("model_switch", "family_alias_stepped_down");
    } else {
        g("model_switch");
    }
    let fastMode_1 = Qo() ? oP(mainLoopModel, fastMode) : !!fastMode;
    if (Qo()) {
        rz();
        if (fastMode_1 !== !!fastMode) {
            s((k)=>({
                    ...k,
                    fastMode: fastMode_1
                }));
            sP(fastMode, fastMode_1);
        }
    }
    let _ = n ? await y_t(mainLoopModel, c) : null;
    u?.(_);
    let h = _?.kind === "saved";
    let S = `${lle}${mb(MS(mainLoopModel))}${h ? lne : " for this session only"}`;
    S += kEe(fastMode, fastMode_1, mainLoopModel, {
        announceKeptOn: true
    });
    S += __t(_);
    S += (h ? xGr(mainLoopModel) : "") || PGr(mainLoopModel);
    return S;
}
const U = 3000;
async function y_t(e, o, r = U) {
    let s = Tn("userSettings", {
        model: e ?? undefined
    }, undefined, o);
    s.then((d)=>{
        if (d.error) {
            return undefined;
        }
        return O(e);
    }).catch(()=>{});
    let n = await Ge(s, r);
    if (n === undefined) {
        f("model_set_default", "unconfirmed");
        return {
            kind: "unconfirmed"
        };
    }
    if (n.error) {
        m("model_set_default", "write_failed");
        return {
            kind: "failed",
            error: n.error
        };
    }
    g("model_set_default");
    return {
        kind: "saved"
    };
}
function __t(e) {
    if (e === null || e.kind === "saved") {
        return "";
    }
    let o = Rs(yn("userSettings") ?? "settings.json");
    switch(e.kind){
        case "unconfirmed":
            return ` \xB7 couldn't confirm it was saved as your default (${o} is still being written)`;
        case "failed":
            {
                let r = e.error.cause;
                let s = r instanceof Error ? `can't be written (${v(r) ?? r.message})` : "isn't valid JSON";
                return ` \xB7 couldn't save it as your default: ${o} ${s}`;
            }
    }
}
function xGr(e) {
    let a_ANTHROPIC_MODEL = a.ANTHROPIC_MODEL;
    if (!a_ANTHROPIC_MODEL || !Xr(a_ANTHROPIC_MODEL)) {
        return "";
    }
    if (!C(e ?? V_(), a_ANTHROPIC_MODEL)) {
        return "";
    }
    return b("ANTHROPIC_MODEL is set to ", SY(a_ANTHROPIC_MODEL), " — new sessions use that while it is set");
}
function C(e, o) {
    let r = Dt(e);
    let s = Dt(o);
    return dN(e) || We(r, {
        identity: true
    }) !== We(s, {
        identity: true
    }) || /\[1m\]$/i.test(r) !== /\[1m\]$/i.test(s);
}
function PGr(e) {
    let o = bO("model");
    if (o !== "projectSettings" && o !== "localSettings" && o !== "policySettings") {
        let n = OIt();
        if (n !== null && e !== null && o !== "flagSettings" && !a.ANTHROPIC_MODEL && C(e, n.model)) {
            return F(n);
        }
        return "";
    }
    if (o !== "policySettings") {
        let n = OIt();
        if (n !== null && !a.ANTHROPIC_MODEL) {
            if (e === null) {
                return "";
            }
            if (C(e, n.model)) {
                return F(n);
            }
            return "";
        }
    }
    let r = fe(o)?.model;
    if (r === undefined || e === r) {
        return "";
    }
    let s = o === "policySettings" ? "Managed settings" : kO(o);
    return b(`${s} pins `, SY(r), " — that applies on restart");
}
function b(e, o, r) {
    return `${ge.dim(`
     ${e}`)}${mb(o)}${ge.dim(r)}`;
}
function F(e) {
    let o = SY(e.model);
    switch(e.kind){
        case "org":
            return b("Your organization's default (", o, ") applies on restart");
        case "standard":
            return b("Your organization's default model isn't available in this build, so the standard default (", o, ") applies on restart");
    }
}
function R(e) {
    if (Ht(e.toLowerCase().trim()) === "opusplan") {
        return [
            ug(),
            Dt(e)
        ];
    }
    return [
        Dt(e)
    ];
}
function B(model) {
    let o = model.toLowerCase().trim();
    let r = Ht(o);
    if (r === o || !VWt(o)) {
        return null;
    }
    if (rH()) {
        return {
            kind: "disabled"
        };
    }
    let s = R(o).find((n)=>tBn(n));
    if (s !== undefined) {
        return {
            kind: "unsupported",
            carrier: Ht(s)
        };
    }
    if (dN(r) && g7(o) === null) {
        return {
            kind: "noModeDependentVariant"
        };
    }
    return null;
}
function IGr(e) {
    let o = e.toLowerCase();
    if (!(o.includes("opus") && o.includes("[1m]"))) {
        return false;
    }
    if (R(e).every((r)=>Cv(r))) {
        return false;
    }
    return !e1() && !MV();
}
const H = new Set([
    "claude-sonnet-4-5",
    "claude-sonnet-4-0",
    "claude-3-7-sonnet",
    "claude-3-5-sonnet"
]);
function OGr(e) {
    let o = e.toLowerCase();
    if (!(o.includes("sonnet") && o.includes("[1m]") || o.trim() === "opusplan[1m]")) {
        return false;
    }
    if (H.has(We(o.trim(), {
        identity: true
    }))) {
        return false;
    }
    if (Cv(Dt(e))) {
        return false;
    }
    return !t1();
}
function tae(e) {
    return Dt(e ?? V_());
}
function AQn(e, mainLoopModel, mainLoopModelForSession, s, n) {
    if (n === undefined) {
        return false;
    }
    let d = Lg();
    if (d === 0 || d === s) {
        return false;
    }
    let i = Dn(tae(e));
    if (i === Dn(tae(SJ({
        mainLoopModel,
        mainLoopModelForSession
    })))) {
        return false;
    }
    let c = n.response?.message.model;
    return !(typeof c === "string" && (c === i || zsn(i)?.has(c) === true));
}
function WWt(e) {
    let o = mb(MS(e.mainLoopModel));
    let r = uc(e);
    let s = r !== undefined ? ` (effort: ${r})` : "";
    let n = aDe(e.mainLoopModelForSession, e.mainLoopModel);
    if (n !== null) {
        return `${Bsr}${mb(MS(n))} (this session only)${s}
Base model: ${o}`;
    }
    let d = pYe();
    let i = d !== undefined ? ` (${c$n(mb(MS(d.previousModel)))})` : "";
    return `${Bsr}${o}${i}${s}`;
}
function X_n(e) {
    let o = e ?? V_();
    let r = hR(Dt(o));
    return r !== undefined && Oys(r);
}
function ste(e) {
    if (e === null) {
        return false;
    }
    let o = hR(Dt(e));
    return o !== undefined && WNe(o);
}
function x(e, o) {
    return false;
}
function D(e) {
    if (e.notFound) {
        return "catalog_unknown";
    }
    if (e.permissionDenied) {
        return "unavailable_for_account";
    }
    if (e.notAllowed) {
        return "restricted_by_org";
    }
    if (e.authFailed) {
        return "auth_failed";
    }
    if (e.retryable) {
        return "check_failed";
    }
}
function P(code) {
    if (code === undefined) {
        return {};
    }
    return {
        code
    };
}
function W(model) {
    try {
        if (yRe(model)) {
            return "denied_by_managed_settings";
        }
        return "not_allowed";
    } catch  {
        return "not_allowed";
    }
}
export { kEe, DKo, MS, TEe, ak, _ze, Yd, MU, bze, y_t, __t, xGr, PGr, IGr, OGr, tae, AQn, WWt, X_n, ste };
