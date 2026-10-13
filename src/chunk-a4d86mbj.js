import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { q, B, vd } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d, pe, gl } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { W, Hp } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { dje } from "/$bunfs/root/chunk-5d7a6f0c.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Tt, c } from "/$bunfs/root/chunk-etbngzss.js";
import { Eh, g7, If, Mn, kr, Ib, Gt, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { XO } from "/$bunfs/root/chunk-066dgc2r.js";
import { Pe } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { RR } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { ae, pt, DR } from "/$bunfs/root/chunk-223dyewd.js";
import { dd } from "/$bunfs/root/chunk-9fa34ggx.js";
import { YD, XL, Rpo, xpo, j_r, Y_r, zxt, XD, toe, zJt, Vxt, qi, f_, noe, kat, BCe, qxt } from "/$bunfs/root/chunk-gr4a0fky.js";
import { n, Wt, Di } from "/$bunfs/root/chunk-8524cxt8.js";
import { le, Te, P, Z, y, Rt, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { ZP, bje, Zw } from "/$bunfs/root/chunk-p2nmcfaz.js";
import { SI, C3, EJ, ule, Ott, Q7o, g$, jg, Gke, zAn, Z7o, ple, Zsr, zt } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Eo } from "/$bunfs/root/chunk-4b1qzs5x.js";
import { Xme, vze, GG, k_t, UGr, kze, n$, WGr, VGr, R7e } from "/$bunfs/root/chunk-8y1m7sq5.js";
import { yp } from "/$bunfs/root/chunk-qcw8ncs1.js";
import { Y1e, rDr } from "/$bunfs/root/chunk-0bcj75nb.js";
import { G0 } from "/$bunfs/root/chunk-082k5tyq.js";
import { fj } from "/$bunfs/root/chunk-0nsjam2f.js";
import { e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { fyt, LWe, uhn, NWe, $Qe } from "/$bunfs/root/chunk-yrp86zcf.js";
import { cMe } from "/$bunfs/root/chunk-992zeagc.js";
import { TT } from "/$bunfs/root/chunk-2xjnwr5d.js";
import { o, E, M, oe, T, u, ue, U } from "/$bunfs/root/chunk-smx21d0k.js";
import { ye } from "/$bunfs/root/chunk-tybndaby.js";
import { S, Sn } from "/$bunfs/root/chunk-cj4xndke.js";
import { randomUUID } from "crypto";
function xn({ index }) {
    return index !== -1;
}
const lt = [
    xpo,
    j_r,
    Rpo
].map((url)=>({
        url,
        marker: `learn more: ${url}`
    }));
function vfe(a) {
    let _ = w(33);
    let { children, color, bold } = a;
    let b = dje();
    let h;
    let A;
    let color_1;
    let bold_1;
    let x;
    let L;
    if (_[0] !== bold || _[1] !== children || _[2] !== color || _[3] !== b) {
        L = Sn;
        H: {
            let R;
            if (_[10] !== children) {
                R = ({ url, marker })=>({
                        url,
                        marker,
                        index: children.indexOf(marker)
                    });
                _[10] = children;
                _[11] = R;
            } else {
                R = _[11];
            }
            A = lt.map(R).find(xn);
            if (!b || A === undefined) {
                let z;
                if (_[12] !== bold || _[13] !== children || _[14] !== color) {
                    z = e(fj, {
                        color,
                        bold,
                        children
                    });
                    _[12] = bold;
                    _[13] = children;
                    _[14] = color;
                    _[15] = z;
                } else {
                    z = _[15];
                }
                L = z;
                break H;
            }
            h = n;
            color_1 = color;
            bold_1 = bold;
            x = children.slice(0, A.index);
        }
        _[0] = bold;
        _[1] = children;
        _[2] = color;
        _[3] = b;
        _[4] = h;
        _[5] = A;
        _[6] = color_1;
        _[7] = bold_1;
        _[8] = x;
        _[9] = L;
    } else {
        h = _[4];
        A = _[5];
        color_1 = _[6];
        bold_1 = _[7];
        x = _[8];
        L = _[9];
    }
    if (L !== Sn) {
        return L;
    }
    let children_1;
    if (_[16] !== bold || _[17] !== color) {
        children_1 = e(n, {
            color,
            bold,
            underline: true,
            children: "learn more"
        });
        _[16] = bold;
        _[17] = color;
        _[18] = children_1;
    } else {
        children_1 = _[18];
    }
    let z;
    if (_[19] !== A.url || _[20] !== children_1) {
        z = e(Wt, {
            url: A.url,
            children: children_1
        });
        _[19] = A.url;
        _[20] = children_1;
        _[21] = z;
    } else {
        z = _[21];
    }
    let I;
    if (_[22] !== children || _[23] !== A.index || _[24] !== A.marker.length) {
        I = children.slice(A.index + A.marker.length);
        _[22] = children;
        _[23] = A.index;
        _[24] = A.marker.length;
        _[25] = I;
    } else {
        I = _[25];
    }
    let de;
    if (_[26] !== h || _[27] !== color_1 || _[28] !== bold_1 || _[29] !== x || _[30] !== z || _[31] !== I) {
        de = r(h, {
            color: color_1,
            bold: bold_1,
            children: [
                x,
                z,
                I
            ]
        });
        _[26] = h;
        _[27] = color_1;
        _[28] = bold_1;
        _[29] = x;
        _[30] = z;
        _[31] = I;
        _[32] = de;
    } else {
        de = _[32];
    }
    return de;
}
const NNt = "tengu_pewter_summit";
N();
function uA() {
    let [a, s] = y({
        ...qi()
    });
    P(()=>noe((l)=>{
            s({
                ...l
            });
        }), []);
    return a;
}
const dt = new q(()=>({
        messageKeys: new Set,
        footerOfferKeys: new Set
    }));
function wcn(a) {
    let a_rateLimitType = a.rateLimitType;
    return {
        limit_type: a_rateLimitType !== undefined && Object.hasOwn(toe, a_rateLimitType) ? d(a_rateLimitType) : undefined,
        tier: d(NWe()),
        resets_at: a.resetsAt
    };
}
function fLo(a, s, l) {
    if (s.resetsAt === undefined) {
        return;
    }
    let messageKeys = dt.of(a).messageKeys;
    let b = `${s.resetsAt}:${l.shown}`;
    if (messageKeys.has(b)) {
        return;
    }
    messageKeys.add(b);
    i("tengu_rate_limit_message_shown", {
        ...wcn(s),
        hint: d(l.kind),
        hint_shown: l.shown,
        wait_live: l.waitLive
    });
}
function GHr(a, s, l) {
    if (s.resetsAt === undefined) {
        return;
    }
    let footerOfferKeys = dt.of(a).footerOfferKeys;
    let b = `${s.resetsAt}:${l}`;
    if (footerOfferKeys.has(b)) {
        return;
    }
    footerOfferKeys.add(b);
    i("tengu_limit_footer_offer_shown", {
        ...wcn(s),
        offer: d(l)
    });
}
function $Nt(a) {
    return C3.isEnabled() && (a === undefined || a.includes("overage"));
}
function ct(upgradePaths) {
    let s = kr();
    let l = s === "team" || s === "enterprise";
    return $Nt(upgradePaths) && !l && !Tt() && g7(Eh()) === null;
}
N();
const Rn = 30000;
function VHr(a, s, l) {
    let m = false;
    let b = ()=>{};
    let _ = ()=>{
        if (m) {
            return;
        }
        let h = a - Date.now();
        if (h <= 0) {
            l();
            return;
        }
        b = s(_, Math.min(h, Rn));
    };
    _();
    return ()=>{
        m = true;
        b();
    };
}
function yG(a) {
    let l = Te(Zw)?.setTimeout ?? ZP;
    let m = Z(()=>{
        if (a === null) {
            return bje;
        }
        return (b)=>VHr(a, l, b);
    }, [
        a,
        l
    ]);
    return Rt(m, ()=>a !== null && Date.now() >= a);
}
N();
const mt = 30000;
const he = "quota-auto-resume-cap";
const S4n = "quota-auto-resume-cancelled";
const w4n = "Automatic continue cancelled · /rate-limit-options to re-arm";
function Efe() {
    return Rt(UGr, Xme, Xme);
}
const kn = "tengu_functional_llama";
const ft = {
    waiting: "Continuing automatically {when} · esc to cancel",
    started: "Usage limit reached · continuing automatically {when} · esc to cancel",
    rearmed: "Usage limit reached again · continuing automatically {when} · esc to cancel",
    credits: "/usage-credits to continue now"
};
const It = 120;
const In = p(()=>u({
        waiting: o().optional().catch(undefined),
        started: o().optional().catch(undefined),
        rearmed: o().optional().catch(undefined),
        credits: o().optional().catch(undefined)
    }));
function Ee(a, s) {
    let l = yp(s);
    if (l === undefined) {
        return ft[a];
    }
    if (a === "credits") {
        return pt(l, It);
    }
    if (l.includes("{when}")) {
        return l;
    }
    return ft[a];
}
function On(a) {
    let s = In().safeParse(a);
    let l = s.success ? s.data : {};
    return {
        waiting: Ee("waiting", l.waiting),
        started: Ee("started", l.started),
        rearmed: Ee("rearmed", l.rearmed),
        credits: Ee("credits", l.credits)
    };
}
function me() {
    return On(k(kn, null));
}
function He(a, s) {
    return pt(a.replace("{when}", s), It);
}
function Ot(a, s) {
    let l = a.phase === "armed" ? a.resetsAtSeconds : 0;
    let m = l * 1000 > s ? DR(l) : undefined;
    if (m) {
        return `at ${m}`;
    }
    return "shortly";
}
function bt(a, s) {
    return He(me().started, Ot(a, s));
}
function _t(a, s) {
    return He(me().rearmed, Ot(a, s));
}
const Ce = "Usage limit reached";
function qHr(a) {
    let s = DR(a);
    if (s) {
        return `${Ce} \xB7 limit resets ${s}`;
    }
    return Ce;
}
function gt(a, s) {
    if (a.phase === "stale") {
        return {
            status: "Your usage limit has reset",
            next: "Press enter to continue"
        };
    }
    if (a.phase !== "armed") {
        return null;
    }
    let l = DR(a.resetsAtSeconds);
    let status = qHr(a.resetsAtSeconds);
    if (s) {
        return {
            status,
            next: "Continuing shortly · esc to cancel"
        };
    }
    let next = He(me().waiting, l ? `at ${l}` : "when it resets");
    if (next.startsWith(`${Ce} \xB7 `)) {
        next = next.slice(Ce.length + 3).replace(/^./u, (_)=>_.toUpperCase());
    }
    return {
        status,
        next
    };
}
function yt(a, s, l) {
    return a.phase === "armed" && !s && l;
}
function ht() {
    return ct(qi().upgradePaths);
}
function je(a) {
    return yG(a.phase === "armed" ? Math.min(a.fireAtMs, a.resetsAtSeconds * 1000) : null);
}
function KHr(a) {
    let L = w(30);
    let { isLoading, transcript } = a;
    let { addNotification, removeNotification } = Eo();
    let { storageV5, credentials } = Pe();
    let A = XO();
    let C = Efe();
    let v = je(C);
    let x = Rt(noe, ht);
    let R;
    let z;
    if (L[0] !== storageV5) {
        R = ()=>{
            VGr(storageV5);
        };
        z = [
            storageV5
        ];
        L[0] = storageV5;
        L[1] = R;
        L[2] = z;
    } else {
        R = L[1];
        z = L[2];
    }
    P(R, z);
    let X;
    if (L[3] !== transcript) {
        X = (F, H)=>transcript.apply({
                type: "append",
                messages: [
                    zt(F, H)
                ]
            });
        L[3] = transcript;
        L[4] = X;
    } else {
        X = L[4];
    }
    let I = X;
    let de;
    if (L[5] !== credentials || L[6] !== storageV5 || L[7] !== A) {
        de = (message, notificationType)=>void G0({
                message,
                notificationType
            }, A, {
                storageV5,
                credentials
            });
        L[5] = credentials;
        L[6] = storageV5;
        L[7] = A;
        L[8] = de;
    } else {
        de = L[8];
    }
    let G = de;
    let yn;
    let hn;
    if (L[9] !== addNotification || L[10] !== I || L[11] !== G || L[12] !== removeNotification) {
        yn = ()=>k_t((Qr)=>{
                switch(Qr){
                    case "armed":
                    case "rearmed":
                        {
                            removeNotification(he);
                            removeNotification(S4n);
                            return;
                        }
                    case "taken-over":
                        {
                            I(_t(Xme(), Date.now()), "notice");
                            return;
                        }
                    case "cancelled":
                        {
                            I(w4n, "notice");
                            return;
                        }
                    case "auto-armed":
                        {
                            I(bt(Xme(), Date.now()), "notice");
                            return;
                        }
                    case "fired-now":
                        {
                            I("Usage limit available again · continuing now", "notice");
                            G("Usage limit available — Claude is continuing your task", "quota_auto_resume_fired");
                            return;
                        }
                    case "stale":
                        {
                            I("Usage limit has reset · press enter to continue", "notice");
                            G("Usage limit reset — press enter to continue", "quota_auto_resume_stale");
                            return;
                        }
                    case "disabled":
                        {
                            I(`Automatic continue was turned off \xB7 this task will not resume on its own${cMe() ? " (/rate-limit-options to wait anyway)" : ""}`, "warning");
                            G("Automatic continue was turned off — the task will not resume on its own", "quota_auto_resume_disabled");
                            return;
                        }
                    case "horizon-exceeded":
                        {
                            I("Automatic continue stopped · the usage limit now resets more than 24 hours out, so this task will not resume on its own (/rate-limit-options to wait anyway)", "warning");
                            G("Automatic continue stopped — the usage limit now resets more than 24 hours out; the task will not resume on its own", "quota_auto_resume_disabled");
                            return;
                        }
                    case "continuation-dropped":
                        {
                            I("Automatic continue did not run · the continuation was blocked before it reached the model, so this task did not resume on its own · send a prompt to continue", "warning");
                            G("Automatic continue did not run — the continuation was blocked before it reached the model; send a prompt to continue", "quota_auto_resume_disabled");
                            return;
                        }
                    case "cap-exhausted":
                        {
                            I("Automatic continue stopped after repeated usage-limit hits · this task will not resume on its own (/rate-limit-options to try again)", "warning");
                            G("Automatic continue stopped after repeated usage-limit hits — the task will not resume on its own", "quota_auto_resume_disabled");
                            addNotification({
                                key: he,
                                kind: "warning",
                                text: "Automatic continue stopped after repeated usage-limit hits · /rate-limit-options to try again",
                                color: "warning",
                                priority: "high",
                                timeoutMs: 20000
                            });
                            return;
                        }
                    default:
                }
            });
        hn = [
            addNotification,
            removeNotification,
            I,
            G
        ];
        L[9] = addNotification;
        L[10] = I;
        L[11] = G;
        L[12] = removeNotification;
        L[13] = yn;
        L[14] = hn;
    } else {
        yn = L[13];
        hn = L[14];
    }
    P(yn, hn);
    let En;
    if (L[15] !== I || L[16] !== isLoading || L[17] !== G) {
        En = ()=>{
            if (WGr(Date.now(), isLoading) === "fired") {
                I("Usage limit reset · continuing automatically", "notice");
                G("Usage limit reset — Claude is continuing your task", "quota_auto_resume_fired");
            }
        };
        L[15] = I;
        L[16] = isLoading;
        L[17] = G;
        L[18] = En;
    } else {
        En = L[18];
    }
    Di(En, C.phase === "armed" ? mt : null);
    let wn;
    if (L[19] !== C || L[20] !== v) {
        wn = gt(C, v);
        L[19] = C;
        L[20] = v;
        L[21] = wn;
    } else {
        wn = L[21];
    }
    let ze = wn;
    if (ze === null) {
        let ie;
        if (L[22] === S) {
            let An = qi().resetsAt;
            ie = An !== undefined && vze(An) ? {
                kind: "declined"
            } : null;
            L[22] = ie;
        } else {
            ie = L[22];
        }
        return ie;
    }
    let credits;
    if (L[23] !== C || L[24] !== x || L[25] !== v) {
        credits = yt(C, v, x) ? me().credits : null;
        L[23] = C;
        L[24] = x;
        L[25] = v;
        L[26] = credits;
    } else {
        credits = L[26];
    }
    let Cn;
    if (L[27] !== ze || L[28] !== credits) {
        Cn = {
            kind: "live",
            ...ze,
            credits
        };
        L[27] = ze;
        L[28] = credits;
        L[29] = Cn;
    } else {
        Cn = L[29];
    }
    return Cn;
}
function Dn() {
    return {
        state: {
            phase: "idle"
        },
        shownOfferKey: null,
        wallRecordKey: null,
        pendingAsk: null,
        claiming: false,
        continuableWallResetsAt: null,
        unsettledClaimGrantId: null,
        unsettledClaimEpoch: null,
        unsettledClaimRequestId: null,
        unsettledClaimAtMs: null,
        sessionSwitchSubscribed: false,
        changed: Oe(),
        events: Oe()
    };
}
const Jn = new q(Dn);
function O() {
    return Jn.of(B().host);
}
function gU() {
    return O().state;
}
function Q(a) {
    let s = O();
    s.state = a;
    s.changed.emit();
}
function V1e(a) {
    return O().changed.subscribe(a);
}
function YHr(a) {
    return O().events.subscribe(a);
}
const Gn = "cedar_ember";
const $n = 25000;
const Ke = /^[a-z0-9_-]{1,40}$/;
const jn = /^[A-Za-z0-9_-]{1,64}$/;
const Le = [
    "five_hour",
    "seven_day",
    "seven_day_overage_included",
    "seven_day_opus",
    "seven_day_sonnet",
    "seven_day_cowork",
    "seven_day_omelette",
    "seven_day_oauth_apps"
];
const Pt = [
    "config_off",
    "tier",
    "seat",
    "mobile",
    "surface",
    "cli_version",
    "no_grant",
    "tenure",
    "other_experiment",
    "unavailable",
    "unknown"
];
const Hn = [
    ...Pt,
    "paused",
    "expired",
    "unknown_grant",
    "not_next_grant",
    "grant_id_required",
    "not_limited",
    "already_used",
    "cooldown",
    "stamp_indeterminate",
    "reset_unconfirmed"
];
const Kn = p(()=>u({
        surface: U([
            "claude_ai",
            "claude_code_cli",
            "unknown"
        ]).catch("unknown"),
        tier: U([
            "claude_pro",
            "claude_max_5x",
            "claude_max_20x",
            "claude_team",
            "unknown"
        ]).catch("unknown"),
        tenure_bucket: U([
            "under_14",
            "14-29",
            "30-89",
            "90-364",
            "365+",
            "unknown"
        ]).catch("unknown"),
        billing_path: U([
            "stripe",
            "apple",
            "google_play",
            "other",
            "unknown"
        ]).catch("unknown"),
        billing_period: U([
            "monthly",
            "annual",
            "unknown"
        ]).catch("unknown"),
        extra_usage_state: U([
            "not_configured",
            "disabled",
            "enabled",
            "unknown"
        ]).catch("unknown")
    }));
const ve = p(()=>T(oe()).catch([]).transform((a)=>a.filter((s)=>Le.some((l)=>l === s))));
const Bn = p(()=>u({
        id: o().regex(Ke),
        label: o().catch(""),
        resets_total: E().int().min(0).catch(0),
        resets_left: E().int().min(0),
        starts_at: o().nullable().optional().catch(null),
        ends_at: o().nullable().optional().catch(null),
        clears: ve(),
        paused: M().catch(false),
        usable_now: M().catch(false),
        use_requires_limit: M().catch(true),
        percent_used: ue(o(), oe()).catch({}),
        blocking: ve()
    }));
function qn(percent_used) {
    let s = {};
    for (let l of Le){
        let m = percent_used[l];
        if (typeof m === "number" && Number.isInteger(m) && m >= 0 && m <= 100) {
            s[l] = m;
        }
    }
    return s;
}
const Xn = p(()=>u({
        eligible: M(),
        ineligible_reason: U(Pt).catch("unknown").nullable().optional(),
        at_limit: M().optional().catch(undefined),
        exhausted: ve().optional(),
        grants: T(oe()).optional().catch(undefined),
        next_grant_id: o().regex(Ke).nullable().optional().catch(null),
        weekly_resets_at: o().nullable().optional().catch(null),
        cooldown_until: o().nullable().optional().catch(null),
        event_props: Kn().nullable().optional().catch(null)
    }));
const Yn = p(()=>u({
        result: U([
            "reset",
            "already_used",
            "not_limited",
            "cooldown",
            "ineligible",
            "unavailable"
        ]).catch("unavailable"),
        reason: U(Hn).catch("unknown").nullable().optional(),
        resets_left: E().int().min(0).nullable().optional().catch(null),
        cleared: ve().optional(),
        weekly_resets_at: o().nullable().optional().catch(null),
        cooldown_until: o().nullable().optional().catch(null)
    }));
function Vn(a) {
    let s = Bn().safeParse(a);
    if (!s.success) {
        t(`[cedar-ember] ignoring a malformed grant: ${s.error.message}`);
        return null;
    }
    let s_data = s.data;
    return {
        id: s_data.id,
        label: s_data.label,
        resetsTotal: s_data.resets_total,
        resetsLeft: s_data.resets_left,
        startsAt: s_data.starts_at ?? null,
        endsAt: s_data.ends_at ?? null,
        clears: s_data.clears,
        paused: s_data.paused,
        usableNow: s_data.usable_now,
        useRequiresLimit: s_data.use_requires_limit,
        percentUsed: qn(s_data.percent_used),
        blocking: s_data.blocking
    };
}
function Qn(a) {
    if (a === undefined || a === null) {
        return null;
    }
    let s = Xn().safeParse(a);
    if (!s.success) {
        t(`[cedar-ember] ignoring a malformed status block: ${s.error.message}`);
        return null;
    }
    let s_data = s.data;
    let grants = (s_data.grants ?? []).map(Vn).filter((h)=>h !== null);
    let nextGrantId = s_data.next_grant_id !== undefined && s_data.next_grant_id !== null && grants.some((h)=>h.id === s_data.next_grant_id) ? s_data.next_grant_id : null;
    let l_event_props = s_data.event_props;
    return {
        eligible: s_data.eligible,
        ineligibleReason: s_data.ineligible_reason ?? null,
        atLimit: s_data.at_limit ?? false,
        exhausted: s_data.exhausted ?? [],
        grants,
        nextGrantId,
        weeklyResetsAt: s_data.weekly_resets_at ?? null,
        cooldownUntil: s_data.cooldown_until ?? null,
        eventProps: l_event_props ? {
            surface: l_event_props.surface,
            tier: l_event_props.tier,
            tenureBucket: l_event_props.tenure_bucket,
            billingPath: l_event_props.billing_path,
            billingPeriod: l_event_props.billing_period,
            extraUsageState: l_event_props.extra_usage_state
        } : null
    };
}
async function Be(a, { read = "at_wall" } = {}) {
    try {
        if (!If()) {
            return {
                kind: "no_profile_scope"
            };
        }
        let l = await XD(a, {
            read
        });
        if (!zxt(l)) {
            t("[cedar-ember] status fetch returned a fieldless or non-object body (in-band error)", {
                level: "warn"
            });
            return {
                kind: "failed"
            };
        }
        return {
            kind: "answered",
            status: Qn(l?.cedar_ember)
        };
    } catch (error) {
        t(`[cedar-ember] status fetch failed: ${W(error).message}`, {
            level: "warn"
        });
        if (Y_r(error)) {
            return {
                kind: "not_authorized"
            };
        }
        return {
            kind: "failed"
        };
    }
}
const ee = {
    reason: null,
    resetsLeft: null,
    cleared: [],
    weeklyResetsAt: null
};
async function qe(a, grant_id, request_id) {
    let m = Mn()?.organizationUuid;
    if (!m) {
        t("[cedar-ember] no OAuth organization; cannot claim");
        return {
            result: "auth_error",
            ...ee
        };
    }
    if (!Ke.test(grant_id) || !jn.test(request_id)) {
        c(Error("[cedar-ember] refusing to claim with a malformed grant or request id"));
        return {
            result: "error",
            ...ee
        };
    }
    try {
        let b = await Ib(()=>Gt.post(`/api/organizations/${m}/reset_rate_limits`, {
                program: Gn,
                grant_id,
                request_id
            }, {
                auth: "async",
                headers: {
                    "Content-Type": "application/json"
                },
                timeout: $n,
                refreshOAuth: true,
                credentials: a
            }), {
            credentials: a
        });
        if (!b.ok) {
            t(`[cedar-ember] claim not sent: ${b.reason === "no-auth" ? b.detail : b.reason}`, {
                level: "warn"
            });
            return {
                result: b.reason === "no-auth" ? "auth_error" : "error",
                ...ee
            };
        }
        let _ = Yn().safeParse(b.data);
        if (!_.success) {
            t(`[cedar-ember] unreadable claim response: ${_.error.message}`, {
                level: "error"
            });
            c(Error("[cedar-ember] unreadable claim response"));
            return {
                result: "error",
                ...ee
            };
        }
        return {
            result: _.data.result,
            reason: _.data.reason ?? null,
            resetsLeft: _.data.resets_left ?? null,
            cleared: _.data.cleared ?? [],
            weeklyResetsAt: _.data.weekly_resets_at ?? null
        };
    } catch (error) {
        if (Hp(error)) {
            t(`[cedar-ember] claim failed: ${W(error).message}`, {
                level: "warn"
            });
        } else {
            c(W(error));
        }
        if (dd(error)) {
            switch(error.response?.status){
                case 429:
                    return {
                        result: "rate_limited",
                        ...ee
                    };
                case 401:
                case 403:
                    return {
                        result: "auth_error",
                        ...ee
                    };
                default:
                    break;
            }
        }
        return {
            result: "error",
            ...ee
        };
    }
}
const er = 3;
const Dt = 12000;
const Jt = 35000;
const tr = 600000;
const nr = 20000;
function et(a) {
    if (!uhn(a) || a.rateLimitType === undefined || a.resetsAt === undefined) {
        return null;
    }
    return {
        rateLimitType: a.rateLimitType,
        wallResetsAt: a.resetsAt,
        accountEpoch: f_()
    };
}
function Ie(wall, s) {
    return s.rateLimitType === wall.rateLimitType && s.resetsAt === wall.wallResetsAt && wall.accountEpoch === f_();
}
function ne(a) {
    let s = gU();
    if (s.phase === "answered" && Ie(s.wall, a)) {
        return s.status;
    }
}
function tt(a) {
    let s = gU();
    return s.phase === "failed" && Ie(s.wall, a);
}
function K() {
    return Date.now();
}
function $t(a, s, l, m) {
    if (a.final) {
        return false;
    }
    let b = m - a.answeredAtMs;
    let _ = (C)=>b < 0 || b >= C;
    if (Xwe(s, m) !== undefined) {
        return false;
    }
    let h = se(a.status?.cooldownUntil ?? null);
    let A = b < 0 || b >= nr && (h === undefined || m >= Math.min(h, a.answeredAtMs + 150000));
    switch(l){
        case "wall":
            return _(tr);
        case "command":
            return A;
        case "dialog":
            return A && (a.status === null || ir(s));
    }
}
function be(a, s) {
    return a.clears.some((l)=>l === s);
}
function Xwe(a, s = Date.now()) {
    let l = ne(a);
    if (!uhn(a) || l === undefined || l === null || l.nextGrantId === null || a.rateLimitType === undefined || a.resetsAt === undefined || a.resetsAt * 1000 <= s || YD() || !ule()) {
        return;
    }
    let m = Vt(l, s);
    if (m === undefined || !be(m.grant, a.rateLimitType) || nt(m.grant, l)) {
        return;
    }
    let { grant, endsAtMs } = m;
    return {
        origin: "wall",
        grant,
        resetsLeft: Math.max(1, Ue(l)),
        weeklyResetsAt: l.weeklyResetsAt,
        endsAtMs,
        rateLimitType: a.rateLimitType
    };
}
function Ue(a) {
    return a.grants.reduce((acc, grant)=>acc + grant.resetsLeft, 0);
}
function nt(a, s) {
    return !a.useRequiresLimit && !a.clears.some((l)=>s.exhausted.includes(l));
}
function rr(grant, s) {
    if (!nt(grant, s)) {
        return null;
    }
    let l = null;
    for (let claimType of Le){
        let percentUsed = grant.percentUsed[claimType];
        if (grant.clears.includes(claimType) && percentUsed !== undefined && (l === null || percentUsed > l.percentUsed)) {
            l = {
                claimType,
                percentUsed
            };
        }
    }
    if (l === null) {
        return {
            kind: "unnumbered",
            percentUsedMax: null
        };
    }
    let limitName = rt(l.claimType);
    if (limitName === null || l.percentUsed >= 100) {
        return {
            kind: "unnumbered",
            percentUsedMax: l.percentUsed
        };
    }
    return {
        kind: "numbered",
        percentLeft: 100 - l.percentUsed,
        claimType: l.claimType,
        limitName,
        percentUsedMax: l.percentUsed
    };
}
function rt(a) {
    switch(a){
        case "five_hour":
        case "seven_day":
        case "seven_day_opus":
            return Vxt(a);
        case "seven_day_sonnet":
            return zJt();
        case "seven_day_overage_included":
        case "seven_day_cowork":
        case "seven_day_omelette":
        case "seven_day_oauth_apps":
            return null;
    }
}
function XHr(a) {
    if (a.origin === "wall" || a.earlyUse === null) {
        return;
    }
    let s = g$();
    switch(a.earlyUse.kind){
        case "numbered":
            return jg(s.earlyLine, B9(a));
        case "unnumbered":
            return jg(s.earlyNoNumberLine, B9(a));
    }
}
function kfe() {
    let a = O();
    return a.claiming || a.unsettledClaimGrantId !== null && a.unsettledClaimEpoch === f_() && Bt(a);
}
function FNt(a, s = Date.now()) {
    return Xwe(a, s) !== undefined;
}
function dIe(a, s = Date.now()) {
    let l = ne(a);
    if (!uhn(a) || l === undefined || l === null || !l.eligible || l.nextGrantId !== null || l.grants.length === 0 || l.grants.some((m)=>m.resetsLeft > 0) || a.resetsAt === undefined || a.resetsAt * 1000 <= s || !ule()) {
        return;
    }
    return jg(g$().spentLine, {
        left: 0
    });
}
function mLo(a, s = Date.now()) {
    let l = ne(a);
    return l !== undefined && l !== null && l.eligible && l.grants.some((m)=>m.resetsLeft > 0 && !m.paused && (se(m.endsAt) ?? Infinity) > s);
}
function ir(a) {
    let s = ne(a);
    return s !== undefined && s !== null && s.eligible && s.nextGrantId === null && s.grants.some((l)=>l.resetsLeft > 0);
}
function B9(a) {
    return {
        left: a.resetsLeft,
        date: jt(a.grant.endsAt),
        deadline: xe(a.grant.endsAt),
        week: xe(a.weeklyResetsAt),
        limits: ar(a.grant.clears),
        ...a.origin === "anytime" && a.earlyUse?.kind === "numbered" && {
            percent: a.earlyUse.percentLeft,
            limit: a.earlyUse.limitName
        }
    };
}
function ar(clears) {
    let s = new Set;
    for (let b of clears){
        switch(b){
            case "five_hour":
                s.add("session");
                break;
            case "seven_day":
            case "seven_day_overage_included":
                s.add("weekly");
                break;
            case "seven_day_opus":
                s.add(Vxt(b).replace(/ limit$/, ""));
                break;
            case "seven_day_sonnet":
                s.add(zJt().replace(/ limit$/, ""));
                break;
            case "seven_day_cowork":
            case "seven_day_omelette":
            case "seven_day_oauth_apps":
                break;
        }
    }
    let l = [
        ...s
    ];
    let m = l.pop();
    if (m === undefined) {
        return "limits";
    }
    if (l.length === 0) {
        return `${m} limit`;
    }
    return `${l.join(", ")} and ${m} limits`;
}
function jt(a) {
    let s = se(a);
    if (s === undefined) {
        return undefined;
    }
    return TT(Math.floor(s / 1000), false, false, true);
}
function xe(a) {
    let s = se(a);
    if (s === undefined) {
        return undefined;
    }
    return TT(Math.floor(s / 1000), false, true, true);
}
function se(a) {
    if (a === null) {
        return;
    }
    let s = Date.parse(a);
    if (Number.isFinite(s)) {
        return s;
    }
}
function Ht() {
    return ule() || rDr(k(Y1e, null));
}
function gLo(a, s) {
    if (!Ht() || !uhn(a)) {
        return;
    }
    let l = O();
    xr(l);
    l.continuableWallResetsAt = a.resetsAt ?? null;
    if (l.unsettledClaimEpoch !== f_()) {
        J(l);
    }
    te(a, s, "wall");
}
function te(a, s, l) {
    if (l === "wall" ? !Ht() : !ule()) {
        return Promise.resolve();
    }
    let wall = et(a);
    if (wall === null) {
        return Promise.resolve();
    }
    let b = O();
    let b_state = b.state;
    let h = 0;
    let previous = null;
    if (b_state.phase !== "idle" && Ie(b_state.wall, a)) {
        switch(b_state.phase){
            case "answered":
                if (!$t(b_state, a, l, K())) {
                    return Promise.resolve();
                }
                previous = b_state;
                break;
            case "asking":
                return b.pendingAsk ?? Promise.resolve();
            case "failed":
                if (l === "wall" && b_state.failures >= er) {
                    return Promise.resolve();
                }
                h = b_state.failures;
        }
    }
    Q({
        phase: "asking",
        wall
    });
    let C = GG();
    let v = Ge(Be(s), Dt).then((x)=>{
        Ut({
            wall,
            failures: h,
            previous,
            result: x ?? {
                kind: "failed"
            },
            autoArmed: C
        });
        if (x !== undefined && x.kind === "answered" && x.status?.ineligibleReason !== "unavailable") {
            Kt(b, x.status, s);
        }
    }).catch((x)=>{
        c(W(x));
        try {
            Ut({
                wall,
                failures: h,
                previous,
                result: {
                    kind: "failed"
                },
                autoArmed: C
            });
        } catch (error) {
            c(W(error));
        }
    }).finally(()=>{
        if (b.pendingAsk === v) {
            b.pendingAsk = null;
        }
    });
    b.pendingAsk = v;
    return v;
}
function Ut({ wall, failures, previous, result, autoArmed }) {
    let _ = gU();
    if (_.phase !== "asking" || _.wall.rateLimitType !== wall.rateLimitType || _.wall.wallResetsAt !== wall.wallResetsAt || _.wall.accountEpoch !== wall.accountEpoch) {
        return;
    }
    let h = result.kind === "answered" ? result.status : null;
    let A = result.kind === "failed" || h?.ineligibleReason === "unavailable";
    if (A && previous !== null) {
        Q({
            ...previous,
            answeredAtMs: K()
        });
    } else if (A) {
        Q({
            phase: "failed",
            wall,
            failures: failures + 1
        });
    } else {
        let final = result.kind === "no_profile_scope" || result.kind === "not_authorized";
        Q(final ? {
            phase: "answered",
            wall,
            status: h,
            answeredAtMs: K(),
            final
        } : {
            phase: "answered",
            wall,
            status: h,
            answeredAtMs: K()
        });
    }
    if (!ule()) {
        return;
    }
    let C = Ott();
    i("tengu_cedar_ember_asked", {
        outcome: d(qt(result)),
        at_wall: true,
        attempt: failures + 1,
        eligible: h?.eligible ?? false,
        ineligible_reason: pe(h?.ineligibleReason),
        limit_type: d(wall.rateLimitType),
        config_version: C
    });
    if (A || h === null || !h.eligible) {
        return;
    }
    let v = O();
    let x = `${wall.accountEpoch}:${wall.rateLimitType}:${wall.wallResetsAt}:${h.eligible}:${h.nextGrantId}`;
    if (v.wallRecordKey === x) {
        return;
    }
    v.wallRecordKey = x;
    let L = h.grants.find((R)=>R.id === h.nextGrantId);
    i("tengu_cedar_ember_wall", {
        eligible: h.eligible,
        at_limit: h.atLimit,
        usable: L !== undefined && be(L, wall.rateLimitType) && !nt(L, h),
        grant_id: ye(h.nextGrantId),
        resets_left: L?.resetsLeft ?? 0,
        resets_left_total: Ue(h),
        grants: h.grants.length,
        limit_type: d(wall.rateLimitType),
        limit_types: gl(h.exhausted),
        tier: d(NWe()),
        auto_armed: autoArmed,
        low_priority_active: YD(),
        config_version: C,
        surface: pe(h.eventProps?.surface),
        server_tier: pe(h.eventProps?.tier),
        tenure_bucket: pe(h.eventProps?.tenureBucket),
        billing_path: pe(h.eventProps?.billingPath),
        billing_period: pe(h.eventProps?.billingPeriod),
        extra_usage_state: pe(h.eventProps?.extraUsageState)
    });
}
function Kt(a, s, l) {
    if (a.unsettledClaimGrantId === null) {
        return;
    }
    if (a.unsettledClaimEpoch !== f_()) {
        J(a);
        return;
    }
    if (s?.nextGrantId === a.unsettledClaimGrantId) {
        return;
    }
    D(l);
    if (s !== null && !Me(s)) {
        J(a);
    }
}
const sr = 600000;
function Bt(a) {
    return a.unsettledClaimAtMs !== null && K() - a.unsettledClaimAtMs < sr;
}
function qt(a) {
    if (a.kind === "answered") {
        if (a.status === null) {
            return "absent";
        }
        return "block";
    }
    return a.kind;
}
function it(a, s) {
    return a.unsettledClaimGrantId === s && a.unsettledClaimEpoch === f_() && Bt(a);
}
function J(a) {
    a.unsettledClaimGrantId = null;
    a.unsettledClaimRequestId = null;
    a.unsettledClaimEpoch = null;
    a.unsettledClaimAtMs = null;
}
function Xt(a, s, l, m) {
    if (a.unsettledClaimRequestId !== l) {
        a.unsettledClaimAtMs = K();
    }
    a.unsettledClaimGrantId = s;
    a.unsettledClaimRequestId = l;
    a.unsettledClaimEpoch = m;
}
function Yt(a, s) {
    if (it(a, s) && a.unsettledClaimRequestId !== null) {
        return a.unsettledClaimRequestId;
    }
    return randomUUID();
}
function Vt(a, s) {
    if (a.nextGrantId === null) {
        return;
    }
    let grant = a.grants.find((b)=>b.id === a.nextGrantId);
    if (grant === undefined || !grant.usableNow || grant.paused) {
        return;
    }
    let endsAtMs = se(grant.endsAt) ?? null;
    if (endsAtMs !== null && endsAtMs <= s) {
        return;
    }
    return {
        grant,
        endsAtMs
    };
}
function UNt(a, s) {
    let l = Xwe(a);
    if (l === undefined || a.resetsAt === undefined) {
        return;
    }
    let m = `${l.rateLimitType}:${a.resetsAt}:${l.grant.id}`;
    let b = O();
    if (b.shownOfferKey === m) {
        return;
    }
    b.shownOfferKey = m;
    i("tengu_cedar_ember_shown", {
        surface: d(s),
        grant_id: ye(l.grant.id),
        resets_left: l.grant.resetsLeft,
        resets_left_total: l.resetsLeft,
        limit_type: d(l.rateLimitType),
        config_version: Ott()
    });
}
function vcn(a, s) {
    let l = gU();
    if (tt(a) || l.phase === "answered" && Ie(l.wall, a) && $t(l, a, "dialog", K())) {
        te(a, s, "dialog");
    }
}
async function cmt(a, s) {
    try {
        return await or(a, s);
    } catch (error) {
        c(W(error));
        return {
            kind: "answer",
            result: {
                outcome: "unavailable",
                text: uIe
            }
        };
    }
}
async function Qt(a, s) {
    let m = O().pendingAsk !== null;
    await te(qi(), s, a);
    if (m && tt(qi())) {
        await te(qi(), s, a);
    }
}
async function or(a, s) {
    if (O().claiming) {
        return {
            kind: "answer",
            result: {
                outcome: "unavailable",
                text: dn
            }
        };
    }
    if (qi().status !== "rejected" && fyt() && ule()) {
        if (YD()) {
            return {
                kind: "answer",
                result: {
                    outcome: "not_offered",
                    text: gr
                }
            };
        }
        return lr(a, s);
    }
    await Qt(a, s);
    let m = qi();
    let b = Xwe(m);
    if (b === undefined) {
        let _ = ne(m);
        if (_ !== undefined && _ !== null && (Me(_) || tn(_, m))) {
            D(s);
        }
        return {
            kind: "answer",
            result: en(m)
        };
    }
    Zt(a, b);
    return {
        kind: "confirm",
        offer: b
    };
}
function Zt(a, s) {
    i("tengu_cedar_ember_selected", {
        entry: d(a),
        grant_id: ye(s.grant.id),
        resets_left: s.grant.resetsLeft,
        resets_left_total: s.resetsLeft,
        limit_type: pe(s.origin === "wall" ? s.rateLimitType : undefined),
        at_limit: s.origin === "wall" || s.atLimit,
        early_use: Re(s),
        auto_armed: GG(),
        config_version: Ott()
    });
}
async function lr(a, s) {
    let l = O();
    let m = await Ge(Be(s, {
        read: "cedar_ember"
    }), Dt);
    let b = m?.kind === "answered" ? m.status : null;
    let _ = m === undefined || m.kind === "failed" || b?.ineligibleReason === "unavailable";
    i("tengu_cedar_ember_asked", {
        outcome: d(qt(m ?? {
            kind: "failed"
        })),
        at_wall: false,
        asker: d(a),
        eligible: b?.eligible ?? false,
        ineligible_reason: pe(b?.ineligibleReason),
        at_limit: b?.atLimit ?? false,
        grants: b?.grants.length ?? 0,
        grant_id: ye(b?.nextGrantId ?? null),
        config_version: Ott()
    });
    if (_) {
        return {
            kind: "answer",
            result: {
                outcome: "unavailable",
                text: kfe() ? jg(g$().unconfirmedAnytimeLine, {}) : uIe
            }
        };
    }
    Kt(l, b, s);
    let h = b === null ? undefined : ur(b, K());
    if (h === undefined) {
        return {
            kind: "answer",
            result: dr(b)
        };
    }
    Zt(a, h);
    return {
        kind: "confirm",
        offer: h
    };
}
function ur(a, s) {
    let l = Vt(a, s);
    if (l === undefined) {
        return;
    }
    let { grant, endsAtMs } = l;
    return {
        origin: "anytime",
        grant,
        resetsLeft: Math.max(1, Ue(a)),
        weeklyResetsAt: a.weeklyResetsAt,
        endsAtMs,
        earlyUse: rr(grant, a),
        atLimit: a.atLimit
    };
}
function dr(a) {
    if (a === null || !a.eligible || a.grants.length === 0) {
        return {
            outcome: "not_offered",
            text: `${Qe} \xB7 ${rn}`
        };
    }
    let s = a.grants.filter((_)=>_.resetsLeft > 0);
    let l = {
        left: Ue(a),
        date: jt(s[0]?.endsAt ?? null)
    };
    if (s.length === 0) {
        return {
            outcome: "spent",
            text: jg(g$().spentLine, l)
        };
    }
    let m = s.flatMap((_)=>_.blocking).map(rt).find((_)=>_ !== null) ?? null;
    let b = m !== null ? an(m) : s.every((_)=>_.paused) ? `${Ye} \xB7 it is paused` : Me(a) ? `${Ye} \xB7 try again in a minute` : s.every((_)=>_.useRequiresLimit) ? _r : `${Ye} \xB7 try again later`;
    return {
        outcome: "not_offered",
        text: jg(`${b} \xB7 {resets} left \xB7 use by {date}`, l)
    };
}
function en(a) {
    let s = dIe(a);
    if (s !== undefined) {
        return {
            outcome: "spent",
            text: s
        };
    }
    if (tt(a)) {
        return {
            outcome: "unavailable",
            text: kfe() ? jg(g$().unconfirmedLine, {}) : uIe
        };
    }
    let l = ne(a);
    if (l !== undefined && l !== null && tn(l, a)) {
        return {
            outcome: "not_offered",
            text: br
        };
    }
    return {
        outcome: "not_offered",
        text: nn(cr(a), a)
    };
}
function tn(a, { rateLimitType }) {
    return rateLimitType !== undefined && a.nextGrantId !== null && !a.exhausted.some((m)=>m === rateLimitType) && a.grants.some((m)=>m.id === a.nextGrantId && be(m, rateLimitType));
}
function Me(a) {
    let s = se(a.cooldownUntil);
    return s !== undefined && s > K();
}
function cr(a) {
    let s = ne(a);
    if (s === undefined || s === null || a.rateLimitType === undefined) {
        return Qe;
    }
    let a_rateLimitType = a.rateLimitType;
    let m = s.grants.filter((_)=>_.resetsLeft > 0);
    if (m.length === 0) {
        return Qe;
    }
    if (!m.some((_)=>be(_, a_rateLimitType))) {
        return fr;
    }
    let b = m.filter((_)=>be(_, a_rateLimitType)).flatMap((_)=>_.blocking).map(rt).find((_)=>_ !== null) ?? null;
    if (b !== null) {
        return an(b);
    }
    if (m.every((_)=>_.paused)) {
        return `${Xe} \xB7 it is paused`;
    }
    if (Me(s)) {
        return `${Xe} \xB7 try again in a minute`;
    }
    return Xe;
}
function nn(a, s) {
    let l = SI(s) ? TT(s.resetsAt) : undefined;
    if (l !== undefined) {
        return `${a} \xB7 this limit resets ${l}`;
    }
    return `${a} \xB7 ${rn}`;
}
function JHr(a, s) {
    i("tengu_cedar_ember_confirmed", {
        confirmed: false,
        entry: d(a),
        grant_id: ye(s.grant.id),
        limit_type: pe(s.origin === "wall" ? s.rateLimitType : undefined),
        at_limit: s.origin === "wall" || s.atLimit,
        early_use: Re(s),
        percent_used_max: Ve(s),
        config_version: Ott()
    });
    let l = g$();
    return {
        outcome: "kept",
        text: jg(s.grant.useRequiresLimit ? l.keptLine : l.keptAnytimeLine, B9(s))
    };
}
async function QHr(a, s, l) {
    let m = O();
    if (m.claiming) {
        return {
            outcome: "unavailable",
            text: dn
        };
    }
    m.claiming = true;
    try {
        if (l.origin === "wall" || et(qi()) !== null) {
            return await mr(a, s, l.grant.id);
        }
        return await pr(a, s, l);
    } catch (error) {
        c(W(error));
        let _ = g$();
        return {
            outcome: "unavailable",
            text: jg(l.origin === "wall" ? _.unconfirmedLine : _.unconfirmedAnytimeLine, {})
        };
    } finally{
        m.claiming = false;
    }
}
async function mr(a, s, l) {
    let m = O();
    let b = g$();
    let _ = Ott();
    await Qt(a, s);
    let h = qi();
    let A = et(h);
    let C = Xwe(h);
    i("tengu_cedar_ember_confirmed", {
        confirmed: true,
        entry: d(a),
        grant_id: ye(l),
        limit_type: pe(h.rateLimitType),
        still_offered: C !== undefined && C.grant.id === l,
        at_limit: true,
        early_use: false,
        config_version: _
    });
    if (C === undefined || A === null) {
        return en(h);
    }
    if (C.grant.id !== l) {
        return {
            outcome: "not_offered",
            text: hr
        };
    }
    let v = Date.now();
    let x = it(m, l);
    let L = Yt(m, l);
    let R = await Ge(qe(s, l, L), Jt) ?? {
        result: "error",
        reason: null,
        resetsLeft: null,
        cleared: [],
        weeklyResetsAt: null
    };
    i("tengu_cedar_ember_result", {
        result: d(R.result),
        reason: pe(R.reason),
        entry: d(a),
        grant_id: ye(l),
        resets_left: R.resetsLeft ?? undefined,
        cleared: gl(R.cleared),
        limit_type: d(A.rateLimitType),
        at_limit: true,
        early_use: false,
        latency_ms: Date.now() - v,
        config_version: _
    });
    switch(R.result){
        case "reset":
        case "not_limited":
        case "cooldown":
        case "already_used":
        case "ineligible":
            g("cedar_ember");
            break;
        case "unavailable":
        case "rate_limited":
        case "auth_error":
        case "error":
            f("cedar_ember", R.result);
            break;
    }
    let z = C.resetsLeft - C.grant.resetsLeft;
    let X = R.resetsLeft ?? (R.result === "already_used" ? 0 : Math.max(0, C.grant.resetsLeft - 1));
    let F = {
        ...B9(C),
        left: z + X,
        week: xe(R.weeklyResetsAt ?? C.weeklyResetsAt)
    };
    switch(R.result){
        case "reset":
            {
                J(m);
                let H = Nt(m, A);
                Ft(m, A, [
                    A.rateLimitType,
                    ...Se(R.cleared).filter((de)=>de !== A.rateLimitType)
                ], a, H);
                let I = jg(b.successLine, F);
                return {
                    outcome: "reset",
                    text: H ? I : Mt(I)
                };
            }
        case "not_limited":
            {
                J(m);
                let H = Nt(m, A);
                Ft(m, A, [
                    A.rateLimitType
                ], a, H);
                let I = x ? wr : Er;
                return {
                    outcome: "reset",
                    text: H ? I : Mt(I)
                };
            }
        case "cooldown":
            {
                if (!x) {
                    J(m);
                }
                D(s);
                return {
                    outcome: "unavailable",
                    text: x ? ln : Ar
                };
            }
        case "already_used":
            {
                if (x) {
                    J(m);
                    fe(A);
                    D(s);
                    return {
                        outcome: "spent",
                        text: un
                    };
                }
                if (z > 0) {
                    fe(A);
                    te(qi(), s, a);
                    D(s);
                    return {
                        outcome: "spent",
                        text: jg(`${ke} \xB7 ${sn}`, F)
                    };
                }
                Lr(A, l);
                D(s);
                return {
                    outcome: "spent",
                    text: jg(ke, F)
                };
            }
        case "ineligible":
            {
                fe(A);
                te(qi(), s, a);
                if (x) {
                    J(m);
                    D(s);
                    return {
                        outcome: "not_offered",
                        text: Ze
                    };
                }
                return {
                    outcome: "not_offered",
                    text: nn(on, h)
                };
            }
        case "auth_error":
            return {
                outcome: "unavailable",
                text: cn
            };
        case "rate_limited":
            return {
                outcome: "unavailable",
                text: jg(x ? b.unconfirmedLine : b.unavailableLine, F)
            };
        case "unavailable":
        case "error":
            {
                Xt(m, l, L, A.accountEpoch);
                let H = Se(R.cleared);
                if (H.length > 0) {
                    kat(H);
                    if (H.includes(A.rateLimitType)) {
                        D(s);
                    }
                }
                fe(A);
                te(qi(), s, a);
                return {
                    outcome: "unavailable",
                    text: jg(x ? b.stillUnconfirmedLine : b.unconfirmedLine, F)
                };
            }
    }
}
function Ve(a) {
    if (a.origin === "anytime") {
        return a.earlyUse?.percentUsedMax ?? undefined;
    }
}
function Re(a) {
    return a.origin === "anytime" && a.earlyUse !== null;
}
async function pr(a, s, l) {
    let m = O();
    let b = g$();
    let _ = Ott();
    let h = l.grant.id;
    let A = f_();
    i("tengu_cedar_ember_confirmed", {
        confirmed: true,
        entry: d(a),
        grant_id: ye(h),
        at_limit: l.atLimit,
        early_use: Re(l),
        percent_used_max: Ve(l),
        config_version: _
    });
    let C = Date.now();
    let v = it(m, h);
    let x = Yt(m, h);
    let L = await Ge(qe(s, h, x), Jt) ?? {
        result: "error",
        reason: null,
        resetsLeft: null,
        cleared: [],
        weeklyResetsAt: null
    };
    i("tengu_cedar_ember_result", {
        result: d(L.result),
        reason: pe(L.reason),
        entry: d(a),
        grant_id: ye(h),
        resets_left: L.resetsLeft ?? undefined,
        cleared: gl(L.cleared),
        at_limit: l.atLimit,
        early_use: Re(l),
        percent_used_max: Ve(l),
        latency_ms: Date.now() - C,
        config_version: _
    });
    switch(L.result){
        case "reset":
        case "not_limited":
        case "cooldown":
        case "already_used":
        case "ineligible":
            g("cedar_ember");
            break;
        case "unavailable":
        case "rate_limited":
        case "auth_error":
        case "error":
            f("cedar_ember", L.result);
            break;
    }
    let R = l.resetsLeft - l.grant.resetsLeft;
    let z = L.resetsLeft ?? (L.result === "already_used" ? 0 : Math.max(0, l.grant.resetsLeft - 1));
    let X = {
        ...B9(l),
        left: R + z,
        week: xe(L.weeklyResetsAt ?? l.weeklyResetsAt)
    };
    switch(L.result){
        case "reset":
            {
                J(m);
                let F = Se(L.cleared);
                if (F.length > 0) {
                    kat(F);
                }
                D(s);
                return {
                    outcome: "reset",
                    text: jg(b.successLine, X)
                };
            }
        case "not_limited":
            J(m);
            if (v) {
                D(s);
                return {
                    outcome: "not_offered",
                    text: Ze
                };
            }
            return {
                outcome: "not_offered",
                text: yr
            };
        case "cooldown":
            if (!v) {
                J(m);
            }
            D(s);
            return {
                outcome: "unavailable",
                text: v ? ln : Cr
            };
        case "already_used":
            if (v) {
                J(m);
                D(s);
                return {
                    outcome: "spent",
                    text: un
                };
            }
            return {
                outcome: "spent",
                text: jg(R > 0 ? `${ke} \xB7 ${sn}` : ke, X)
            };
        case "ineligible":
            if (v) {
                J(m);
                D(s);
                return {
                    outcome: "not_offered",
                    text: Ze
                };
            }
            return {
                outcome: "not_offered",
                text: on
            };
        case "auth_error":
            return {
                outcome: "unavailable",
                text: cn
            };
        case "rate_limited":
            return {
                outcome: "unavailable",
                text: jg(v ? b.unconfirmedAnytimeLine : b.unavailableLine, X)
            };
        case "unavailable":
        case "error":
            {
                Xt(m, h, x, A);
                let F = Se(L.cleared);
                if (F.length > 0) {
                    kat(F);
                }
                if (F.length > 0 || v) {
                    D(s);
                }
                return {
                    outcome: "unavailable",
                    text: jg(v ? b.stillUnconfirmedLine : b.unconfirmedAnytimeLine, X)
                };
            }
    }
}
var Qe = "No reset to use";
var rn = "you're not at a usage limit right now";
var Xe = "Your reset can't be used for this limit right now";
var fr = "Your reset doesn't cover this limit";
var br = `This limit may have lifted already \xB7 checking your limits now \xB7 run /${EJ} again in a moment to use your reset anyway`;
var _r = `You have a reset saved for when you reach a usage limit \xB7 run /${EJ} when you do`;
var Ye = "Your reset can't be used right now";
var gr = `Resets can't be used while you continue at lower priority \xB7 run /${EJ} after that ends`;
var yr = "Your reset only works at a usage limit, and you're not at one now · nothing was used";
function an(a) {
    return `Your reset doesn't refill your ${a}, so it can't be used until that resets`;
}
var uIe = "Couldn't check for a reset right now · try again in a moment";
const q1e = "Checking for a reset…";
var ke = "That reset was already used · nothing changed just now · {resets} left";
var sn = `run /${EJ} again to use one`;
var on = "This reset isn't available any more · nothing was used";
var hr = `A different reset is on offer now \xB7 nothing was used \xB7 run /${EJ} again to see it`;
var Er = "Your limit had already reset on its own · nothing was used";
var wr = "Your limits are clear";
var Ar = "Another reset was just started on your account · checking your limits now · if you're still at the limit in a minute, try again";
var ln = "Your earlier reset may still be going through · checking your limits now · try again in a minute if they aren't refilled";
var Cr = "Another reset was just started on your account · this one wasn't used · try again in a minute";
var un = "Your earlier reset went through after all · checking your limits now";
var Ze = "This reset isn't available any more · your earlier try may have gone through · checking your limits now";
const Tr = "send a message to continue";
var dn = "Your limits are already being reset · one moment";
var cn = "Couldn't reset your limits with this login · run /login, then try again";
function Mt(a) {
    return `${a} \xB7 ${Tr}`;
}
function Nt(a, s) {
    let l = Q7o() && a.continuableWallResetsAt === s.wallResetsAt;
    a.continuableWallResetsAt = null;
    return l;
}
function Se(cleared) {
    let s = [];
    for (let l of cleared){
        switch(l){
            case "five_hour":
            case "seven_day":
            case "seven_day_overage_included":
            case "seven_day_opus":
            case "seven_day_sonnet":
                s.push(l);
                break;
            case "seven_day_cowork":
            case "seven_day_omelette":
            case "seven_day_oauth_apps":
                break;
        }
    }
    return s;
}
function Ft(a, s, l, m, b) {
    let _ = [
        ()=>n$("cedar_ember"),
        ()=>{
            XL("reset");
        },
        ()=>vr(l),
        ()=>{
            fe(s);
            a.wallRecordKey = null;
            a.shownOfferKey = null;
        },
        ()=>{
            if (b) {
                $Qe();
            }
        },
        ()=>a.events.emit({
                type: "reset",
                entry: m
            })
    ];
    for (let h of _){
        try {
            h();
        } catch (error) {
            c(W(error));
        }
    }
}
function vr(a) {
    if (a.length > 0) {
        kat(a);
    }
    let s = qi();
    if (s.status !== "rejected" || s.rateLimitType === undefined || !a.includes(s.rateLimitType)) {
        return;
    }
    BCe({
        ...s,
        status: "allowed",
        rateLimitType: undefined,
        resetsAt: undefined
    });
}
function D(a) {
    if (GG()) {
        kze();
        return;
    }
    qxt(a, undefined).catch((s)=>{
        c(W(s));
    });
}
function fe(a) {
    let s = gU();
    if (s.phase !== "idle" && s.wall.wallResetsAt === a.wallResetsAt && s.wall.rateLimitType === a.rateLimitType) {
        Q({
            phase: "idle"
        });
    }
}
function Lr(a, s) {
    let l = gU();
    if (l.phase !== "answered" || l.wall.wallResetsAt !== a.wallResetsAt || l.wall.rateLimitType !== a.rateLimitType || l.status === null) {
        return;
    }
    Q({
        ...l,
        answeredAtMs: K(),
        status: {
            ...l.status,
            nextGrantId: l.status.nextGrantId === s ? null : l.status.nextGrantId,
            grants: l.status.grants.map((m)=>{
                if (m.id === s) {
                    return {
                        ...m,
                        resetsLeft: 0,
                        usableNow: false
                    };
                }
                return m;
            })
        }
    });
}
function xr(a) {
    if (a.sessionSwitchSubscribed) {
        return;
    }
    a.sessionSwitchSubscribed = true;
    vd((s, l)=>{
        if (R7e(l)) {
            a.continuableWallResetsAt = null;
        }
    });
}
function Rr() {
    return {
        state: {
            phase: "idle"
        },
        shownWallResetsAt: null,
        pendingAsk: null,
        claiming: false,
        continuableWallResetsAt: null,
        unsettledClaimWallResetsAt: null,
        sessionSwitchSubscribed: false,
        changed: Oe(),
        events: Oe()
    };
}
const Sr = new q(Rr);
function Y() {
    return Sr.of(B().host);
}
function hU() {
    return Y().state;
}
function re(a) {
    let s = Y();
    s.state = a;
    s.changed.emit();
}
function K1e(a) {
    return Y().changed.subscribe(a);
}
function ZHr(a) {
    return Y().events.subscribe(a);
}
const Ir = "juniper_tide";
const Or = 25000;
const Pr = p(()=>u({
        surface: U([
            "claude_ai",
            "claude_code_cli",
            "unknown"
        ]).catch("unknown"),
        tier: U([
            "claude_pro",
            "claude_max_5x",
            "claude_max_20x",
            "unknown"
        ]).catch("unknown"),
        tenure_bucket: U([
            "under_14",
            "14-29",
            "30-89",
            "90-364",
            "365+",
            "unknown"
        ]).catch("unknown"),
        billing_path: U([
            "stripe",
            "apple",
            "google_play",
            "other",
            "unknown"
        ]).catch("unknown"),
        billing_period: U([
            "monthly",
            "annual",
            "unknown"
        ]).catch("unknown"),
        extra_usage_state: U([
            "not_configured",
            "disabled",
            "enabled",
            "unknown"
        ]).catch("unknown")
    }));
const Ur = p(()=>u({
        eligible: M(),
        ineligible_reason: U([
            "tier",
            "tenure",
            "surface",
            "mobile",
            "cli_version",
            "not_at_wall",
            "weekly_limit",
            "no_weekly_limit",
            "other_experiment",
            "extra_usage",
            "unavailable",
            "unknown"
        ]).catch("unknown").nullable().optional(),
        in_experiment: M().optional(),
        arm: U([
            "control",
            "reset"
        ]).nullable().optional().catch(null),
        available: M().optional(),
        next_available_at: o().nullable().optional().catch(null),
        weekly_resets_at: o().nullable().optional().catch(null),
        resets_per_week: E().optional().catch(undefined),
        event_props: Pr().nullable().optional().catch(null)
    }));
const Mr = p(()=>u({
        result: U([
            "reset",
            "already_used",
            "not_limited",
            "ineligible",
            "unavailable"
        ]).catch("unavailable"),
        next_available_at: o().nullable().optional().catch(null),
        weekly_resets_at: o().nullable().optional().catch(null)
    }));
function Nr(a) {
    if (a === undefined || a === null) {
        return null;
    }
    let s = Ur().safeParse(a);
    if (!s.success) {
        t(`[juniper-tide] ignoring a malformed status block: ${s.error.message}`);
        return null;
    }
    let s_data = s.data;
    let l_event_props = s_data.event_props;
    return {
        eligible: s_data.eligible,
        ineligibleReason: s_data.ineligible_reason ?? null,
        inExperiment: s_data.in_experiment ?? false,
        arm: s_data.arm ?? null,
        available: s_data.available ?? false,
        nextAvailableAt: s_data.next_available_at ?? null,
        weeklyResetsAt: s_data.weekly_resets_at ?? null,
        resetsPerWeek: s_data.resets_per_week ?? 1,
        eventProps: l_event_props ? {
            surface: l_event_props.surface,
            tier: l_event_props.tier,
            tenureBucket: l_event_props.tenure_bucket,
            billingPath: l_event_props.billing_path,
            billingPeriod: l_event_props.billing_period,
            extraUsageState: l_event_props.extra_usage_state
        } : null
    };
}
async function mn(a) {
    try {
        if (!If()) {
            return {
                kind: "no_profile_scope"
            };
        }
        let s = await XD(a, {
            read: "at_wall"
        });
        if (!zxt(s)) {
            t("[juniper-tide] status fetch returned a fieldless or non-object body (in-band error)", {
                level: "warn"
            });
            return {
                kind: "failed"
            };
        }
        return {
            kind: "answered",
            status: Nr(s?.juniper_tide)
        };
    } catch (error) {
        t(`[juniper-tide] status fetch failed: ${W(error).message}`, {
            level: "warn"
        });
        if (Y_r(error)) {
            return {
                kind: "answered",
                status: null
            };
        }
        return {
            kind: "failed"
        };
    }
}
async function pn(a) {
    let s = Mn()?.organizationUuid;
    if (!s) {
        t("[juniper-tide] no OAuth organization; cannot claim");
        return {
            result: "auth_error",
            nextAvailableAt: null
        };
    }
    try {
        let l = await Ib(()=>Gt.post(`/api/organizations/${s}/reset_rate_limits`, {
                program: Ir
            }, {
                auth: "async",
                headers: {
                    "Content-Type": "application/json"
                },
                timeout: Or,
                refreshOAuth: true,
                credentials: a
            }), {
            credentials: a
        });
        if (!l.ok) {
            t(`[juniper-tide] claim not sent: ${l.reason === "no-auth" ? l.detail : l.reason}`, {
                level: "warn"
            });
            return {
                result: l.reason === "no-auth" ? "auth_error" : "error",
                nextAvailableAt: null
            };
        }
        let m = Mr().safeParse(l.data);
        if (!m.success) {
            t(`[juniper-tide] unreadable claim response: ${m.error.message}`, {
                level: "error"
            });
            c(Error("[juniper-tide] unreadable claim response"));
            return {
                result: "error",
                nextAvailableAt: null
            };
        }
        return {
            result: m.data.result,
            nextAvailableAt: m.data.next_available_at ?? null
        };
    } catch (error) {
        if (Hp(error)) {
            t(`[juniper-tide] claim failed: ${W(error).message}`, {
                level: "warn"
            });
        } else {
            c(W(error));
        }
        if (dd(error)) {
            switch(error.response?.status){
                case 429:
                    return {
                        result: "rate_limited",
                        nextAvailableAt: null
                    };
                case 401:
                case 403:
                    return {
                        result: "auth_error",
                        nextAvailableAt: null
                    };
                default:
                    break;
            }
        }
        return {
            result: "error",
            nextAvailableAt: null
        };
    }
}
const Wr = 3;
const zr = 12000;
const Fr = 35000;
function ot(a, s) {
    return s.resetsAt === a.wallResetsAt && a.accountEpoch === f_();
}
function We(a) {
    let s = hU();
    if (s.phase === "answered" && ot(s, a)) {
        return s.status;
    }
}
function at(a) {
    let s = hU();
    return s.phase === "failed" && ot(s, a);
}
function hee(a, s = Date.now()) {
    let l = We(a);
    return LWe(a) && l !== undefined && l !== null && l.arm === "reset" && l.available && a.resetsAt !== undefined && a.resetsAt * 1000 > s && !YD() && Gke();
}
function pIe(a, s = Date.now()) {
    let l = We(a);
    if (!LWe(a) || l === undefined || l === null || l.arm !== "reset" || l.available || l.nextAvailableAt === null || a.resetsAt === undefined || a.resetsAt * 1000 <= s || !Gke()) {
        return;
    }
    return Zsr(ple().spentLine, st(l.nextAvailableAt));
}
function st(nextAvailableAt) {
    if (nextAvailableAt === null) {
        return;
    }
    let s = Date.parse(nextAvailableAt);
    if (Number.isFinite(s)) {
        return TT(Math.floor(s / 1000), false, true, true);
    }
}
function hLo(a, s) {
    if (!Gke() || !LWe(a)) {
        return;
    }
    let l = Y();
    qr(l);
    l.continuableWallResetsAt = a.resetsAt ?? null;
    Ne(a, s, "wall");
}
function Ne(a, s, l) {
    if (!Gke() || !LWe(a)) {
        return Promise.resolve();
    }
    let a_resetsAt = a.resetsAt;
    if (a_resetsAt === undefined) {
        return Promise.resolve();
    }
    let b = Y();
    let accountEpoch = f_();
    let b_state = b.state;
    let A = 0;
    if (b_state.phase !== "idle" && ot(b_state, a)) {
        switch(b_state.phase){
            case "answered":
                return Promise.resolve();
            case "asking":
                return b.pendingAsk ?? Promise.resolve();
            case "failed":
                if (l === "wall" && b_state.failures >= Wr) {
                    return Promise.resolve();
                }
                A = b_state.failures;
        }
    }
    re({
        phase: "asking",
        wallResetsAt: a_resetsAt,
        accountEpoch
    });
    let C = GG();
    let v = Ge(mn(s), zr).then((x)=>{
        fn({
            wallResetsAt: a_resetsAt,
            accountEpoch,
            failures: A,
            result: x ?? {
                kind: "failed"
            },
            autoArmed: C
        });
    }).catch((x)=>{
        c(W(x));
        try {
            fn({
                wallResetsAt: a_resetsAt,
                accountEpoch,
                failures: A,
                result: {
                    kind: "failed"
                },
                autoArmed: C
            });
        } catch (error) {
            c(W(error));
        }
    }).finally(()=>{
        if (b.pendingAsk === v) {
            b.pendingAsk = null;
        }
    });
    b.pendingAsk = v;
    return v;
}
function fn({ wallResetsAt, accountEpoch, failures, result, autoArmed }) {
    let _ = hU();
    if (_.phase !== "asking" || _.wallResetsAt !== wallResetsAt || _.accountEpoch !== accountEpoch) {
        return;
    }
    let h = result.kind === "answered" ? result.status : null;
    if (result.kind === "failed") {
        re({
            phase: "failed",
            wallResetsAt,
            accountEpoch,
            failures: failures + 1
        });
    } else {
        re({
            phase: "answered",
            wallResetsAt,
            accountEpoch,
            status: h
        });
    }
    i("tengu_juniper_tide_asked", {
        outcome: d(result.kind === "answered" ? h === null ? "absent" : "block" : result.kind),
        attempt: failures + 1,
        eligible: h?.eligible ?? false,
        ineligible_reason: pe(h?.ineligibleReason) ?? undefined,
        config_version: zAn()
    });
    if (h === null || !h.eligible) {
        return;
    }
    i("tengu_juniper_tide_wall", {
        in_experiment: h.inExperiment,
        arm: pe(h.arm) ?? undefined,
        available: h.available,
        tier: d(NWe()),
        auto_armed: autoArmed,
        low_priority_active: YD(),
        config_version: zAn(),
        surface: pe(h.eventProps?.surface) ?? undefined,
        server_tier: pe(h.eventProps?.tier) ?? undefined,
        tenure_bucket: pe(h.eventProps?.tenureBucket) ?? undefined,
        billing_path: pe(h.eventProps?.billingPath) ?? undefined,
        billing_period: pe(h.eventProps?.billingPeriod) ?? undefined,
        extra_usage_state: pe(h.eventProps?.extraUsageState) ?? undefined
    });
}
function BNt(a, s) {
    let l = a.resetsAt ?? null;
    let m = Y();
    if (l === null || m.shownWallResetsAt === l) {
        return;
    }
    m.shownWallResetsAt = l;
    let b = We(a);
    i("tengu_juniper_tide_shown", {
        arm: pe(b?.arm) ?? undefined,
        surface: d(s),
        config_version: zAn()
    });
}
function eDr(a, s) {
    if (at(a)) {
        Ne(a, s, "dialog");
    }
}
async function fXe(a, s) {
    try {
        return await Dr(a, s);
    } catch (error) {
        c(W(error));
        return {
            outcome: "unavailable",
            text: ple().unavailableLine
        };
    }
}
async function Dr(a, s) {
    let l = Y();
    let m = ple();
    if (We(qi()) === undefined) {
        let v = l.pendingAsk !== null;
        await Ne(qi(), s, a);
        if (v && at(qi())) {
            await Ne(qi(), s, a);
        }
    }
    let b = qi();
    if (!hee(b) || b.resetsAt === undefined) {
        let v = pIe(b);
        if (v !== undefined) {
            return {
                outcome: "spent",
                text: v
            };
        }
        if (at(b)) {
            return {
                outcome: "unavailable",
                text: m.unavailableLine
            };
        }
        return {
            outcome: "not_offered",
            text: bn
        };
    }
    if (l.claiming) {
        return {
            outcome: "unavailable",
            text: Jr
        };
    }
    let b_resetsAt = b.resetsAt;
    let h = zAn();
    i("tengu_juniper_tide_selected", {
        entry: d(a),
        auto_armed: GG(),
        config_version: h
    });
    let A = Date.now();
    let C;
    l.claiming = true;
    try {
        C = await Ge(pn(s), Fr) ?? {
            result: "error",
            nextAvailableAt: null
        };
    } finally{
        l.claiming = false;
    }
    i("tengu_juniper_tide_result", {
        result: d(C.result),
        entry: d(a),
        latency_ms: Date.now() - A,
        config_version: h
    });
    switch(C.result){
        case "reset":
        case "not_limited":
        case "already_used":
        case "ineligible":
            g("juniper_tide");
            break;
        case "unavailable":
        case "rate_limited":
        case "auth_error":
        case "error":
            f("juniper_tide", C.result);
            break;
    }
    switch(C.result){
        case "reset":
        case "not_limited":
            {
                l.unsettledClaimWallResetsAt = null;
                let v = Z7o() && l.continuableWallResetsAt === b_resetsAt;
                l.continuableWallResetsAt = null;
                $r(l, b_resetsAt, a, v);
                let x = Zsr(m.successLine, C.result === "reset" ? st(C.nextAvailableAt) : undefined);
                return {
                    outcome: "reset",
                    text: v ? x : `${x} \xB7 send a message to continue`
                };
            }
        case "already_used":
            {
                Kr(b_resetsAt, C.nextAvailableAt);
                if (l.unsettledClaimWallResetsAt === b_resetsAt) {
                    l.unsettledClaimWallResetsAt = null;
                    Hr(s);
                }
                return {
                    outcome: "spent",
                    text: Zsr(m.spentLine, st(C.nextAvailableAt))
                };
            }
        case "ineligible":
            Br(b_resetsAt);
            return {
                outcome: "not_offered",
                text: bn
            };
        case "auth_error":
            return {
                outcome: "unavailable",
                text: Gr
            };
        case "unavailable":
        case "rate_limited":
        case "error":
            if (C.result === "error") {
                l.unsettledClaimWallResetsAt = b_resetsAt;
            }
            return {
                outcome: "unavailable",
                text: m.unavailableLine
            };
    }
}
var bn = "A session-limit reset isn't available right now.";
var Jr = "Your session limit is already being reset · one moment";
var Gr = "Couldn't reset your session limit with this login · run /login, then try again";
function $r(a, s, l, m) {
    let b = [
        ()=>n$("juniper_tide"),
        ()=>{
            XL("reset");
        },
        ()=>jr(s),
        ()=>{
            let _ = hU();
            if (_.phase !== "idle" && _.wallResetsAt === s) {
                re({
                    phase: "idle"
                });
            }
        },
        ()=>{
            if (m) {
                $Qe();
            }
        },
        ()=>a.events.emit({
                type: "reset",
                entry: l
            })
    ];
    for (let _ of b){
        try {
            _();
        } catch (error) {
            c(W(error));
        }
    }
}
function jr(a) {
    let s = qi();
    if (s.status !== "rejected" || s.rateLimitType !== "five_hour" || s.resetsAt !== a) {
        return;
    }
    BCe({
        ...s,
        status: "allowed",
        rateLimitType: undefined,
        resetsAt: undefined
    });
}
function Hr(a) {
    if (GG()) {
        kze();
        return;
    }
    qxt(a, undefined).catch((s)=>{
        c(W(s));
    });
}
function Kr(a, nextAvailableAt) {
    let l = hU();
    if (l.phase !== "answered" || l.wallResetsAt !== a || l.status === null) {
        return;
    }
    re({
        ...l,
        status: {
            ...l.status,
            available: false,
            nextAvailableAt: nextAvailableAt ?? l.status.nextAvailableAt
        }
    });
}
function Br(a) {
    let s = hU();
    if (s.phase !== "answered" || s.wallResetsAt !== a || s.status === null) {
        return;
    }
    re({
        ...s,
        status: {
            ...s.status,
            eligible: false,
            available: false
        }
    });
}
function qr(a) {
    if (a.sessionSwitchSubscribed) {
        return;
    }
    a.sessionSwitchSubscribed = true;
    vd((s, l)=>{
        if (R7e(l)) {
            a.continuableWallResetsAt = null;
        }
    });
}
const Ecn = "session running";
const jNt = "session waiting for a prompt";
const state = "session waiting";
const _e = " · ";
const Yr = /^[0-9a-f]{8}$/;
const _n = 20;
function tDr(a) {
    let s = a.split(RR).map((b)=>b.trim()).filter(Boolean);
    if (s.length === 0) {
        return;
    }
    let [l, ...m] = s;
    if (m.length === 0) {
        return l;
    }
    return `${l} ${RR} ${m.join(_e)}`;
}
function kcn(a) {
    if (!a.startsWith(Ecn) && !a.startsWith(jNt)) {
        return null;
    }
    if (a.includes(`
`)) {
        return null;
    }
    let s = a.split(_e);
    let state_1 = s[0];
    if (state_1 !== Ecn && state_1 !== jNt) {
        return null;
    }
    let m = s.findLastIndex((v)=>Yr.test(v));
    let id = m === -1 ? undefined : s[m];
    let _ = m === -1 ? s.length : m;
    let h = s.slice(1, _);
    let name = h.length > 0 ? h.join(_e) : undefined;
    let chips = m === -1 ? [] : s.slice(m + 1);
    return {
        state: state_1,
        name,
        id,
        chips
    };
}
function nDr(a, s, l = true) {
    let m = (_)=>ae(v4n(_));
    let b = {
        ...a,
        chips: [
            ...a.chips
        ]
    };
    if (m(b) <= s) {
        return b;
    }
    if (b.state === jNt) {
        b = {
            ...b,
            state
        };
        if (m(b) <= s) {
            return b;
        }
    }
    if (b.id !== undefined && b.name !== undefined && l) {
        b = {
            ...b,
            id: undefined
        };
        if (m(b) <= s) {
            return b;
        }
    }
    if (b.name !== undefined) {
        let _ = m({
            ...b,
            name: undefined
        });
        let h = s - _ - ae(_e);
        let A = ae(b.name);
        let C = A > _n ? Math.max(h, _n) : h;
        if (C >= 1 && C < A) {
            b = {
                ...b,
                name: pt(b.name, C)
            };
        }
    }
    return b;
}
function v4n(a) {
    return [
        a.state,
        ...a.name ? [
            a.name
        ] : [],
        ...a.id ? [
            a.id
        ] : [],
        ...a.chips
    ].join(_e);
}
export { vfe, NNt, uA, wcn, fLo, GHr, $Nt, VHr, yG, S4n, w4n, Efe, qHr, KHr, gU, V1e, YHr, Xwe, XHr, kfe, FNt, dIe, mLo, B9, gLo, UNt, vcn, cmt, JHr, QHr, uIe, q1e, hU, K1e, ZHr, hee, pIe, hLo, BNt, eDr, fXe, Ecn, jNt, tDr, kcn, nDr, v4n };
