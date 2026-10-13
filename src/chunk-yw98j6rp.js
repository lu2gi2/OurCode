import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { ti } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { ft, Tn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { wt, Gt, nSe, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { gs } from "/$bunfs/root/chunk-ghreee2m.js";
import { o, E, M, T, u } from "/$bunfs/root/chunk-smx21d0k.js";
const b = p(()=>{
    let e = u({
        enable_email: M().nullish(),
        enable_push: M().nullish()
    });
    let t = u({
        bogosort: e.nullish(),
        code_requires_action: e.nullish()
    });
    let r = u({
        has_active_channel: M(),
        platforms: T(o()).nullish().transform((n)=>n ?? []),
        most_recent_token_refresh: o().nullish()
    });
    return u({
        account_id: E().nullish(),
        organization_id: E().nullish(),
        preferences: u({
            feature_preference: t.nullish()
        }).nullish(),
        push_reachability: r.nullish()
    });
});
const timeout = 10000;
const S = new q(()=>({
        reachability: gs(undefined),
        hydrated: Oe()
    }));
function a() {
    return S.of(B().host);
}
function U_n() {
    return a().reachability.getState();
}
function B_n(e) {
    return a().reachability.subscribe(e);
}
function AKo(e) {
    return a().hydrated.subscribe(e);
}
function y() {
    let e = ft();
    let t = ce();
    return {
        agentPushNotifEnabled: e.agentPushNotifEnabled ?? nSe("agentPushNotifEnabled", t.agentPushNotifEnabled),
        inputNeededNotifEnabled: e.inputNeededNotifEnabled ?? nSe("inputNeededNotifEnabled", t.inputNeededNotifEnabled)
    };
}
const N = "/api/claude_code/notification/preferences";
function h() {
    return wt();
}
async function k() {
    if (!h()) {
        return {
            ok: false,
            reason: "no_auth"
        };
    }
    try {
        let e = await Gt.get(N, {
            timeout
        });
        if (!e.ok) {
            return {
                ok: false,
                reason: "fetch_failed"
            };
        }
        let t = b().safeParse(e.data);
        if (!t.success) {
            J("warn", "notif_prefs_fetch_parse_failed", {
                issues: t.error.issues.map((r)=>r.path.join(".")).join(",")
            });
            return {
                ok: false,
                reason: "parse_failed"
            };
        }
        return {
            ok: true,
            prefs: t.data
        };
    } catch (error) {
        let { kind } = ti(error);
        J("warn", "notif_prefs_fetch_failed", {
            kind
        });
        return {
            ok: false,
            reason: "fetch_failed"
        };
    }
}
async function R(e) {
    if (!h()) {
        return;
    }
    try {
        if (!(await Gt.patch(N, e, {
            timeout
        })).ok) {
            f("notif_prefs_patch", "no_auth");
            return;
        }
        J("info", "notif_prefs_patch_ok", {});
        g("notif_prefs_patch");
    } catch (error) {
        let { kind } = ti(error);
        J("warn", "notif_prefs_patch_failed", {
            kind
        });
        m("notif_prefs_patch", "http_error");
    }
}
function _Gr() {
    let e = y();
    let feature_preference = {};
    if (typeof e.agentPushNotifEnabled === "boolean") {
        feature_preference.bogosort = {
            enable_push: e.agentPushNotifEnabled
        };
    }
    if (typeof e.inputNeededNotifEnabled === "boolean") {
        feature_preference.code_requires_action = {
            enable_push: e.inputNeededNotifEnabled
        };
    }
    if (Object.keys(feature_preference).length === 0) {
        return;
    }
    R({
        preferences: {
            feature_preference
        }
    });
}
async function CKo(e) {
    if (!h()) {
        f("notif_prefs_hydrate", "no_auth");
        a().reachability.setState(()=>null);
        J("info", "notif_prefs_hydrate_skipped", {
            reason: "no_auth"
        });
        return;
    }
    let t = await k();
    if (!t.ok) {
        m("notif_prefs_hydrate", t.reason);
        a().reachability.setState(()=>null);
        J("info", "notif_prefs_hydrate_skipped", {
            reason: t.reason
        });
        return;
    }
    let t_prefs = t.prefs;
    let n = t_prefs.push_reachability ?? null;
    a().reachability.setState(()=>n);
    if (n) {
        i("tengu_push_reachability", {
            has_active_channel: n.has_active_channel,
            platform_count: n.platforms.length
        });
    }
    let d = t_prefs.preferences?.feature_preference;
    let server_bogosort = d?.bogosort?.enable_push;
    let server_code_requires_action = d?.code_requires_action?.enable_push;
    let _ = y();
    let s = {};
    if (_.agentPushNotifEnabled === undefined && typeof server_bogosort === "boolean") {
        s.agentPushNotifEnabled = server_bogosort;
    }
    if (_.inputNeededNotifEnabled === undefined && typeof server_code_requires_action === "boolean") {
        s.inputNeededNotifEnabled = server_code_requires_action;
    }
    J("info", "notif_prefs_hydrate_result", {
        has_active_channel: n?.has_active_channel,
        server_bogosort,
        server_code_requires_action,
        seeded: Object.keys(s).length > 0
    });
    if (Object.keys(s).length === 0) {
        g("notif_prefs_hydrate");
        return;
    }
    await Tn("userSettings", s, undefined, e);
    a().hydrated.emit();
    g("notif_prefs_hydrate");
}
export { U_n, B_n, AKo, _Gr, CKo };
