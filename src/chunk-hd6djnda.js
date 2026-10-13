import { xt, Su, jBe, WBe, l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { aBe } from "/$bunfs/root/chunk-x0qpydt2.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { $Mt, Dr, Ie, vi } from "/$bunfs/root/chunk-nj0630nv.js";
import { IV, Rw, U$e, UUn, Xr, L7t, Lbe, Dt, jbe, Ae } from "/$bunfs/root/chunk-0ycjphb5.js";
import { kdt, hxe, PMt, Due } from "/$bunfs/root/chunk-ph7a449e.js";
import { P_r, fat, wpo } from "/$bunfs/root/chunk-gr4a0fky.js";
import { Skn, p$ } from "/$bunfs/root/chunk-kasbfbhj.js";
import { nae } from "/$bunfs/root/chunk-w9qrhgzw.js";
import { nq, Vue } from "/$bunfs/root/chunk-77t63btp.js";
const _ = new Set([
    "fetch_error",
    "unknown",
    "org_level_disabled_until"
]);
function g() {
    return Dr().providerCache.validatedModels;
}
async function IQn(e, o) {
    let model = e.trim();
    if (!model) {
        return {
            valid: false,
            error: "Model name cannot be empty"
        };
    }
    if (!Xr(model, o.skipEntitlementDenyOverlay ? {
        skipEntitlementDenyOverlay: true
    } : undefined)) {
        return {
            valid: false,
            error: `Model '${model}' is not in the list of available models`,
            notAllowed: true
        };
    }
    if (!o.forceServerProbe) {
        let m = model.toLowerCase();
        if (nq.includes(m)) {
            return {
                valid: true
            };
        }
        if (model === a.ANTHROPIC_CUSTOM_MODEL_OPTION) {
            return {
                valid: true
            };
        }
        if (wpo(model) && Lbe()?.picker.options.some((s)=>s.model.trim() === model)) {
            return {
                valid: true
            };
        }
        if (g().has(model)) {
            return {
                valid: true
            };
        }
    }
    let n = Ie();
    let a_ANTHROPIC_BASE_URL = a.ANTHROPIC_BASE_URL;
    let i = a_ANTHROPIC_BASE_URL && URL.canParse(a_ANTHROPIC_BASE_URL) ? new URL(a_ANTHROPIC_BASE_URL).hostname : undefined;
    let f = vi() || i !== undefined && (i === "anthropic.com" || i.endsWith(".anthropic.com") || aBe.some((m)=>new URL(m).hostname === i));
    if (!(n === "gateway" || n === "firstParty" && !f) && /[\s\p{Cc}\p{Cf}]/u.test(model)) {
        return {
            valid: false,
            error: `Model '${model}' not found`,
            notFound: true
        };
    }
    if (o.serverProbe === false) {
        return {
            valid: true
        };
    }
    try {
        await p$({
            model,
            max_tokens: 1,
            maxRetries: 0,
            querySource: "model_validation",
            resendWithoutRefusedContext1m: true,
            credentials: o.credentials,
            timeout: o.timeout,
            signal: o.signal,
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: "Hi",
                            cache_control: {
                                type: "ephemeral"
                            }
                        }
                    ]
                }
            ]
        });
        g().add(model);
        return {
            valid: true
        };
    } catch (error) {
        return A(error, model);
    }
}
const deadlineMs = 15000;
async function y(e, o) {
    let r = Dr();
    let generation = r.sessionModelDenyReprobe.generation;
    let d = new AbortController;
    let probe = await Ge(IQn(e, {
        forceServerProbe: o.forceServerProbe,
        skipEntitlementDenyOverlay: o.skipEntitlementDenyOverlay,
        credentials: o.credentials,
        timeout: o.deadlineMs,
        signal: d.signal
    }), o.deadlineMs);
    if (probe === undefined) {
        d.abort();
        return {
            probe: undefined,
            accountChanged: false
        };
    }
    let accountChanged = r.sessionModelDenyReprobe.generation !== generation;
    if (accountChanged) {
        r.providerCache.validatedModels.delete(e.trim());
    }
    return {
        probe,
        accountChanged
    };
}
async function DGr(e, o, deadlineMs_1) {
    if (deadlineMs_1 === undefined || o.serverProbe === false) {
        return IQn(e, o);
    }
    let { probe, accountChanged } = await y(e, {
        ...o,
        deadlineMs: deadlineMs_1
    });
    if (probe === undefined || accountChanged) {
        let i = IV("model");
        return {
            valid: false,
            error: `Couldn't confirm model "${Rw(e)}" with the API. ${i ? `Try again, or run ${i} to see available models.` : "Try again."}`,
            retryable: true
        };
    }
    return probe;
}
function VWt(e) {
    let o = e.toLowerCase().trim();
    return Vue(o);
}
function LGr(e) {
    if (VWt(e) || L7t(e)) {
        return Dt(e);
    }
    return e;
}
async function Yme(e, o, credentials) {
    try {
        if (!Xr(e, {
            skipEntitlementDenyOverlay: true
        })) {
            return "denied_by_policy";
        }
        let n = LGr(e);
        if (VWt(n)) {
            return "denied_by_policy";
        }
        let d = Dr();
        let { confirmedEntitlementDenies, overturnedEntitlementDenies } = d.providerCache;
        let p = U$e(n);
        let m = confirmedEntitlementDenies.get(p);
        if (m !== undefined && Date.now() - m < $Mt) {
            return "denied_by_server";
        }
        let { probe, accountChanged } = await y(n, {
            credentials,
            deadlineMs,
            forceServerProbe: true,
            skipEntitlementDenyOverlay: true
        });
        if (probe === undefined) {
            t("[model-access] stale-deny re-probe timed out", {
                level: "warn"
            });
            return "probe_failed";
        }
        if (!probe.valid && !probe.notFound && !probe.permissionDenied) {
            return "probe_failed";
        }
        if (accountChanged) {
            t("[model-access] stale-deny re-probe answered after the account changed; recording nothing");
            if (probe.valid) {
                return "overturned";
            }
            return "denied_by_server";
        }
        if (!probe.valid) {
            let u = Date.now();
            confirmedEntitlementDenies.set(p, u);
            for (let b of jbe()){
                if (UUn(b, e)) {
                    confirmedEntitlementDenies.set(U$e(b.apiName), u);
                }
            }
            return "denied_by_server";
        }
        confirmedEntitlementDenies.delete(p);
        let S = Date.now();
        for (let u of jbe()){
            if (UUn(u, e)) {
                overturnedEntitlementDenies.set(U$e(u.apiName), S);
            }
        }
        try {
            await h(e, o);
        } catch (error) {
            if (v(error) !== undefined) {
                t(`[model-access] stale-deny eviction failed: ${l(error)}`, {
                    level: "warn"
                });
            } else {
                c(error);
            }
        }
        nae(o, credentials);
        return "overturned";
    } catch (error) {
        c(error);
        return "probe_failed";
    }
}
async function h(e, o) {
    await Ae((r)=>{
        let r_modelAccessCache = r.modelAccessCache;
        if (!r_modelAccessCache?.length) {
            return r;
        }
        let modelAccessCache = r_modelAccessCache.filter((i)=>{
            if (i == null || typeof i !== "object" || typeof i.apiName !== "string" || typeof i.entitled !== "boolean") {
                return true;
            }
            return !UUn(i, e);
        });
        if (modelAccessCache.length === r_modelAccessCache.length) {
            return r;
        }
        return {
            ...r,
            modelAccessCache
        };
    }, o);
}
function A(error, model) {
    if (error instanceof WBe) {
        let n = Skn(model);
        let d = n ? `. Try '${n}' instead` : "";
        return {
            valid: false,
            error: `Model '${model}' not found${d}`,
            notFound: true,
            ...hxe(error) && {
                serverRefusedModel: true
            }
        };
    }
    if (error instanceof xt) {
        if (error instanceof jBe) {
            return {
                valid: false,
                error: "Authentication failed. Please check your API credentials.",
                authFailed: true
            };
        }
        if (error instanceof Su) {
            return {
                valid: false,
                error: "Network error. Please check your internet connection.",
                retryable: true
            };
        }
        let n = error.error;
        if (n && typeof n === "object" && "type" in n && n.type === "not_found_error" && "message" in n && typeof n.message === "string" && n.message.includes("model:")) {
            return {
                valid: false,
                error: `Model '${model}' not found`,
                notFound: true,
                serverRefusedModel: true
            };
        }
        if (kdt(error)) {
            return {
                valid: false,
                error: `Model '${model}' isn't available for your account`,
                permissionDenied: true,
                serverRefusedModel: true
            };
        }
        let d = n?.error?.details;
        let i = error.status === 429 && d?.error_code === "credits_required";
        let f = i && !error.headers?.get?.(P_r) && !_.has(error.headers?.get?.(fat) ?? d?.disabled_reason ?? "");
        return {
            valid: false,
            error: `API error: ${Due(error).replace(/[.!?\u2026]+$/, "")} \xB7 model not changed`,
            ...R(error.status) && {
                retryable: true
            },
            ...i && {
                creditsRequired: true
            },
            ...error.status === 400 && PMt(error) && {
                sessionModeRefused: true
            },
            ...f && {
                serverRefusedModel: true
            }
        };
    }
    return {
        valid: false,
        error: `Unable to validate model: ${error instanceof Error ? error.message : String(error)}`,
        retryable: true
    };
}
function R(status) {
    return status === undefined || status === 408 || status === 429 || status >= 500;
}
export { IQn, DGr, VWt, LGr, Yme };
