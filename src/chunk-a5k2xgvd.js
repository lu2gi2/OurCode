import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { g6 } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Q, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { Tt, c } from "/$bunfs/root/chunk-etbngzss.js";
import { $P, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne, dy } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { rr } from "/$bunfs/root/chunk-k3tkc302.js";
import { cB } from "/$bunfs/root/chunk-xj62f004.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { yIt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { rs } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Bd } from "/$bunfs/root/chunk-0sswwkdg.js";
import { PVo, IVo, yEe, OVo, j6, Kyn } from "/$bunfs/root/chunk-meqp16n8.js";
import { rVo, oVo, XWr, JWr } from "/$bunfs/root/chunk-d33gtej9.js";
import { Xb } from "/$bunfs/root/chunk-eej2qpd0.js";
import { Tte } from "/$bunfs/root/chunk-gs3dthpm.js";
import { Svn, aSt, qX, fI, BYr, $C, md } from "/$bunfs/root/chunk-qv4dnw41.js";
import { swn } from "/$bunfs/root/chunk-zpx112sz.js";
function R() {
    return ee().durable.rows;
}
async function N(e, n) {
    let slugOps = ee().durable.slugOps;
    let s = (slugOps.get(e) ?? Promise.resolve()).then(n, n);
    let u = s.then(()=>{}, ()=>{});
    slugOps.set(e, u);
    try {
        return await s;
    } finally{
        if (slugOps.get(e) === u) {
            slugOps.delete(e);
        }
    }
}
function dfn() {
    return [
        ...R().values()
    ];
}
function Nve(e) {
    return R().get(e);
}
const ve = [
    30000,
    120000,
    600000
];
function l1o(e, n) {
    if (!a.CLAUDE_CODE_REMOTE || e === null) {
        return;
    }
    if (e.readFailed) {
        f("artifact_durable_subscribe", "registry_unread");
        if (n.reread !== undefined) {
            Se(n.reread, n);
        }
        return;
    }
    oe(e, n);
}
async function Se(reread, n, r = ve) {
    for (let o of r){
        await Q(o, undefined, {
            unref: true
        });
        if (ee().durable.registrySink !== null) {
            return true;
        }
        let s;
        try {
            s = await reread();
        } catch (error) {
            t(`[artifact] worker-state re-read threw: ${String(error)}`);
            continue;
        }
        if (s === null || s.readFailed) {
            continue;
        }
        try {
            oe(s, n);
        } catch (error) {
            c(error);
            return false;
        }
        g("artifact_durable_subscribe", {
            registry_reread: true
        });
        return true;
    }
    f("artifact_durable_subscribe", "registry_reread_failed");
    return false;
}
function oe(e, n) {
    let r = OVo(e.internal?.artifact_durable_watches);
    let { durable } = ee();
    for (let s of r?.orphans ?? []){
        durable.orphanTriggers.add(s);
    }
    for (let s of r?.rows ?? []){
        if (durable.unwatchedSlugs.has(s.slug) && !durable.rows.has(s.slug)) {
            G(s);
            continue;
        }
        if (durable.slugOps.has(s.slug)) {
            durable.pendingRestoredRows.set(s.slug, s);
            H(N(s.slug, async ()=>{
                durable.pendingRestoredRows.delete(s.slug);
                G(s);
                yEe();
            }));
            continue;
        }
        G(s);
    }
    Kyn(r?.stopped ?? new Map, n);
    for (let s of new Set([
        ...durable.rows.keys(),
        ...durable.pendingRestoredRows.keys(),
        ...durable.slugOps.keys()
    ])){
        if (durable.stopLatches.isStopped(s)) {
            Ce(s);
        }
    }
    PVo(n.sink);
    if (r !== null) {
        IVo();
    }
    yEe();
    if (r !== null && r.rows.length + r.stopped.size > 0) {
        g("artifact_durable_subscribe", {
            restored_rows: r.rows.length,
            restored_stops: r.stopped.size
        });
        t(`[artifact] restored ${r.rows.length} durable watch row(s) and ${r.stopped.size} stop(s) from prior worker epoch`);
    }
}
function Ce(e) {
    let { durable } = ee();
    let r = ()=>{
        let o = durable.rows.get(e);
        if (o === undefined || !durable.stopLatches.isStopped(e)) {
            return;
        }
        durable.rows.delete(e);
        durable.unwatchedSlugs.add(e);
        for (let s of [
            o.triggerId,
            ...o.unreleased ?? []
        ]){
            durable.orphanTriggers.add(s);
        }
        f("artifact_durable_subscribe", "restored_stop_retired_row");
    };
    if (durable.slugOps.has(e)) {
        H(N(e, async ()=>{
            r();
            yEe();
        }));
        return;
    }
    r();
}
function G(e) {
    let { durable } = ee();
    let r = durable.rows.get(e.slug);
    if (r !== undefined || durable.unwatchedSlugs.has(e.slug) || durable.stopLatches.isStopped(e.slug)) {
        for (let o of [
            e.triggerId,
            ...e.unreleased ?? []
        ]){
            if (o !== r?.triggerId) {
                durable.orphanTriggers.add(o);
            }
        }
        return;
    }
    durable.rows.set(e.slug, {
        ...e,
        restored: true
    });
}
function se(e) {
    let found = swn(e);
    if (!found) {
        return null;
    }
    let dial = g6();
    if (!dial) {
        return null;
    }
    return {
        found,
        dial
    };
}
function c1o(e) {
    return se(e) !== null;
}
async function ie(clients, signal, r) {
    let o = se(clients);
    if (!o) {
        return null;
    }
    try {
        return await o.dial(o.found, r?.detachedFromUser ? {
            timeoutMs: 15000
        } : {
            signal
        });
    } catch  {
        return null;
    }
}
function x(text, n) {
    let r = new RegExp(`^${n}:\\s*(\\S+)`, "m").exec(text);
    if (r && r[1]) {
        return r[1];
    }
    return null;
}
function De(text) {
    let url = x(text, "url");
    let triggerId = x(text, "trigger_id");
    let sealedSecret = x(text, "sealed_secret");
    if (!url || !triggerId || !sealedSecret) {
        return null;
    }
    return {
        url,
        triggerId,
        sealedSecret
    };
}
function Me(text) {
    return x(text, "trigger_id");
}
const Ee = "/integrations/v1/code/webhook-triggers/";
const We = "/fire";
const ke = [
    "published",
    "comment"
];
const Z = [
    "published"
];
function d1o() {
    if (a.CLAUDE_CODE_REMOTE) {
        return null;
    }
    return "not_remote";
}
function aFr() {
    let durable = ee().durable;
    let e_subscribeForbidden = durable.subscribeForbidden;
    if (e_subscribeForbidden) {
        if (!e_subscribeForbidden.relayActive && fI(Svn)) {
            j();
        } else {
            return {
                reason: "subscribe_forbidden",
                serverMessage: e_subscribeForbidden.serverMessage
            };
        }
    }
    let e_subscribeUnrelayed = durable.subscribeUnrelayed;
    if (e_subscribeUnrelayed) {
        return {
            reason: "relay_unavailable",
            ...e_subscribeUnrelayed
        };
    }
    return null;
}
function j() {
    let durable = ee().durable;
    if (durable.subscribeForbidden === null) {
        return;
    }
    durable.subscribeForbidden = null;
    XWr("subscribe_forbidden");
}
function le() {
    let durable = ee().durable;
    if (durable.subscribeUnrelayed === null) {
        return;
    }
    durable.subscribeUnrelayed = null;
    XWr("relay_unavailable");
}
const ue = "watch_url";
function Ae(tools, name) {
    let r = false;
    for (let o of tools){
        if (o.mcpInfo?.serverName !== name) {
            continue;
        }
        if (o.mcpInfo.toolName === ue) {
            return true;
        }
        r = true;
    }
    if (r) {
        return false;
    }
    return null;
}
function lFr() {
    return rs() && qX() && !fI(Svn) && !yIt();
}
function cFr(e) {
    if (!a.CLAUDE_CODE_REMOTE) {
        return null;
    }
    let { watchUrlWithheld, watchUrlGranted } = ee().durable;
    if (watchUrlWithheld) {
        return watchUrlWithheld;
    }
    if (watchUrlGranted) {
        return null;
    }
    let o = swn(e.clients);
    if (o?.type === "connected" && Ae(e.tools, o.name) === false) {
        return "tool_not_offered";
    }
    return null;
}
function Pe(url, triggerId) {
    if (Jt(triggerId) === null) {
        return false;
    }
    let r;
    try {
        r = new URL(url);
    } catch  {
        return false;
    }
    return r.protocol === "https:" && r.username === "" && r.password === "" && r.search === "" && r.hash === "" && r.pathname === Ee + triggerId + We;
}
function Te(text) {
    return text.includes("trigger limit reached") || text.includes("maximum number of webhook triggers");
}
function Fe(text) {
    return text.includes("a session with an originator account");
}
function Oe(text) {
    if (text.includes("tool is not available to this session")) {
        return "tool_not_offered";
    }
    if (text.includes("bound to a desktop device")) {
        return "session_device_bound";
    }
    if (text.includes("tool is not enabled for this organization") || text.includes("Session webhooks are not enabled for this organization")) {
        return "org_not_enabled";
    }
    return null;
}
const xe = [
    [
        "cannot be found or is no longer active",
        "session_not_found"
    ],
    [
        "not available in this deployment",
        "unavailable_in_deployment"
    ]
];
function Le(text) {
    for (let [n, r] of xe){
        if (text.includes(n)) {
            return r;
        }
    }
    return null;
}
const q = 160;
const Ue = /^[('\[]?[A-Za-z_]+(?:[-'][A-Za-z_]+)?[\])'.,;:!?]*$/;
const Ne = 40;
const $e = /^[(']?\d{1,5}[)'.,;:!?%]*$/;
const de = /^[-\u2013\u2014.,;:!?()]{1,3}$/;
const He = /(?!\u0020)\p{Zs}|[\p{M}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u{13441}\u{13442}\uFFFC]/gu;
const ce = /\r\n|[\n\v\f\r\u0085\u2028\u2029]/;
const k = "[redacted]";
const L = "[url]";
const Be = 2048;
function fe(e) {
    return e.length <= Ne && Ue.test(e);
}
function J(e) {
    return e === undefined || e !== L && e !== k && fe(e);
}
function ze(e, n, r) {
    return fe(e) || de.test(e) || $e.test(e) && J(n) && J(r);
}
const re = /(?:^|[^A-Za-z_])(url|trigger_id)[ \t]*:|sealed_secret/i;
function te(e) {
    if (re.test(e)) {
        return;
    }
    let n = ne(e, Be);
    let r = n.split(ce).map((i)=>dy(i.replaceAll("\t", " ")).replace(He, ""));
    if (r.some((i)=>re.test(i))) {
        return;
    }
    let o = r.findIndex((i)=>i.trim() !== "");
    if (o === -1) {
        return;
    }
    let s = r[o] ?? "";
    let u = o === r.length - 1 && n.length < e.length;
    let b = s.replace(/["`]/g, "'").replace(/[a-z][a-z0-9+.-]*:\/\/\S+/gi, ` ${L} `).split(/\s+/).filter((i)=>i !== "");
    if (u && b.length > 0) {
        b[b.length - 1] = k;
    }
    let h = b.map((i, d)=>{
        if (i === L || ze(i, b[d - 1], b[d + 1])) {
            return i;
        }
        return k;
    }).filter((i, d, y)=>i !== k || y[d - 1] !== k);
    if (!h.some((i)=>i !== k && i !== L && !de.test(i))) {
        return;
    }
    let p = h.join(" ");
    if (p.length > q) {
        return `${ne(p, q - 3)}...`;
    }
    return p;
}
function je(e) {
    let n = "content" in e ? e.content : undefined;
    if (!Array.isArray(n)) {
        return "";
    }
    let r = [];
    for (let o of n){
        if (typeof o === "object" && o !== null && "type" in o && o.type === "text" && "text" in o && typeof o.text === "string") {
            r.push(o.text);
        }
    }
    return r.join(`
`);
}
async function be(e, name, r) {
    try {
        let o = await cB(e, {
            name,
            arguments: r
        }, {
            timeout: 15000
        });
        return {
            isError: "isError" in o && o.isError === true,
            text: je(o)
        };
    } catch  {
        return null;
    }
}
async function D(e, trigger_id) {
    let r = await be(e, "unwatch_url", {
        trigger_id
    });
    return r !== null && !r.isError;
}
async function ge(e) {
    let { durable } = ee();
    let r = [
        ...durable.orphanTriggers
    ];
    if (r.length === 0) {
        return;
    }
    let o = await Promise.all(r.map((u)=>D(e, u)));
    let s = 0;
    r.forEach((u, b)=>{
        if (o[b]) {
            durable.orphanTriggers.delete(u);
        } else {
            s++;
        }
    });
    if (s > 0) {
        f("artifact_durable_subscribe", "orphan_trigger_release_failed");
    }
    yEe();
}
async function pe(e, n, signal, credentials) {
    try {
        let res = await md.postRelayBound(e, n, {
            headers: Bd(),
            timeout: 15000,
            refreshOAuth: true,
            credentials,
            ...signal && {
                signal
            }
        });
        return {
            res,
            relayed: res.route === "relay"
        };
    } catch (error) {
        return {
            res: undefined,
            relayed: $C(error)
        };
    }
}
function me(e) {
    if (e.relayed) {
        return {
            relayed: true
        };
    }
    return {};
}
function U(e) {
    if (e.relayed) {
        return [
            {
                relay: true
            }
        ];
    }
    return [];
}
async function v5n(e) {
    let { slug, context, detachedFromUser } = e;
    rVo(slug);
    let s;
    try {
        let u = Ke(slug, context, detachedFromUser);
        H(u);
        s = await u;
        Ye(s);
        return s;
    } finally{
        let u = oVo(slug, s);
        try {
            e.onSettled?.(u);
        } catch (error) {
            c(error);
        }
    }
}
function H(e) {
    let { pendingOps } = ee().durable;
    pendingOps.add(e);
    let r = ()=>void pendingOps.delete(e);
    e.then(r, r);
    $P(Ve);
}
async function Ve() {
    await Ge(Promise.allSettled([
        ...ee().durable.pendingOps
    ]), 10000);
}
async function Ke(slug, context, detachedFromUser) {
    return N(slug, async ()=>{
        let o = R().get(slug);
        if (o?.restored && !detachedFromUser) {
            let s = await ae(slug, context, false, o);
            if (s.outcome === "subscribed") {
                return s;
            }
            let u = s.outcome === "already_watching" ? s.outcome : s.outcome === "failed" && s.kept ? "outcome_unknown" : s.reason;
            f("artifact_durable_subscribe", `refresh_${u}`);
            t(`[artifact] restored durable watch not refreshed: reason=${u}`);
            return _e(R().get(slug) ?? o);
        }
        return ae(slug, context, detachedFromUser);
    });
}
function Ye(e) {
    switch(e.outcome){
        case "subscribed":
            if (e.downgraded) {
                f("artifact_durable_subscribe", "comment_events_unsupported", ...U(e));
                break;
            }
            g("artifact_durable_subscribe", ...U(e));
            break;
        case "already_watching":
            g("artifact_durable_subscribe", {
                already_watching: true,
                ...e.restored && {
                    restored: true
                }
            });
            break;
        case "skipped":
            f("artifact_durable_subscribe", e.reason);
            break;
        case "failed":
            {
                let n = Xe(e);
                let [r] = U(e);
                let o = {
                    ...e.status !== undefined && {
                        status: e.status
                    },
                    ...e.gatewayDeclined !== undefined && {
                        gateway_declined: e.gatewayDeclined
                    },
                    ...r
                };
                let s = Object.keys(o).length > 0 ? [
                    o
                ] : [];
                if (n !== undefined) {
                    f("artifact_durable_subscribe", n, ...s);
                } else {
                    m("artifact_durable_subscribe", e.reason, s[0]);
                }
                let u = e.status !== undefined ? ` status=${e.status}` : "";
                let b = e.serverMessage !== undefined ? ` server="${e.serverMessage}"` : "";
                t(`[artifact] durable watch failed: reason=${e.reason}${u}${b}`, {
                    level: n !== undefined ? "debug" : "warn"
                });
                break;
            }
    }
}
function Xe(e) {
    switch(e.reason){
        case "aborted":
            return "aborted";
        case "no_originator":
            if (e.latched) {
                return "no_originator_latched";
            }
            return undefined;
        case "subscribe_forbidden":
            if (e.latched) {
                return "subscribe_forbidden_latched";
            }
            return "subscribe_forbidden";
        case "relay_unavailable":
            if (e.latched) {
                return "relay_unavailable_latched";
            }
            return "relay_unavailable";
        default:
            return;
    }
}
function _e(e) {
    return {
        outcome: "already_watching",
        triggerId: e.triggerId,
        since: e.since,
        events: e.events,
        ...e.restored && {
            restored: true
        }
    };
}
async function ae(slug, context, detachedFromUser, o) {
    if (!rr.test(slug)) {
        return {
            outcome: "failed",
            reason: "invalid_slug"
        };
    }
    let s = R().get(slug);
    if (s && s !== o) {
        return _e(s);
    }
    j6({
        storageV5: context.storageV5
    });
    if (ee().durable.stopLatches.isStopped(slug)) {
        return {
            outcome: "skipped",
            reason: "stop_latched"
        };
    }
    if (Tt() || Ie() !== "firstParty") {
        return {
            outcome: "failed",
            reason: "client_policy"
        };
    }
    if (lFr()) {
        return {
            outcome: "skipped",
            reason: "relay_not_served"
        };
    }
    if (detachedFromUser && ee().durable.originatorRefused) {
        return {
            outcome: "failed",
            reason: "no_originator",
            latched: true
        };
    }
    let u = aFr();
    if (detachedFromUser && u) {
        if (u.reason === "subscribe_forbidden") {
            return {
                outcome: "failed",
                reason: "subscribe_forbidden",
                latched: true,
                serverMessage: u.serverMessage
            };
        }
        return {
            outcome: "failed",
            reason: "relay_unavailable",
            latched: true,
            status: u.status,
            relayed: true,
            fromGateway: true
        };
    }
    let b = detachedFromUser ? cFr(context.getMcp()) : null;
    if (b) {
        return {
            outcome: "skipped",
            reason: b
        };
    }
    let h = await ie(context.getMcp().clients, context.abortController.signal, detachedFromUser ? {
        detachedFromUser
    } : undefined);
    if (!h) {
        if (!detachedFromUser && context.abortController.signal.aborted) {
            return {
                outcome: "failed",
                reason: "aborted"
            };
        }
        return {
            outcome: "skipped",
            reason: "no_wake_minter"
        };
    }
    await ge(h);
    let p = await be(h, ue, {});
    if (!p || p.isError) {
        let _ = p ? te(p.text) : undefined;
        let v = _ !== undefined ? {
            serverMessage: _
        } : {};
        if (p && Te(p.text)) {
            return {
                outcome: "failed",
                reason: "trigger_limit",
                ...v
            };
        }
        if (p && Fe(p.text)) {
            let F = ee().durable;
            let W = F.originatorRefused;
            F.originatorRefused = true;
            if (W) {
                return {
                    outcome: "failed",
                    reason: "no_originator",
                    latched: true,
                    ...v
                };
            }
            return {
                outcome: "failed",
                reason: "no_originator",
                ...v
            };
        }
        let E = p ? Oe(p.text) : null;
        if (E) {
            ee().durable.watchUrlWithheld = E;
            return {
                outcome: "skipped",
                reason: E
            };
        }
        return {
            outcome: "failed",
            reason: (p ? Le(p.text) : null) ?? "mint_failed",
            ...v
        };
    }
    let durable = ee().durable;
    durable.originatorRefused = false;
    durable.watchUrlWithheld = null;
    durable.watchUrlGranted = true;
    let d = De(p.text);
    if (!d) {
        let _ = Me(p.text);
        if (_) {
            await D(h, _);
        }
        return {
            outcome: "failed",
            reason: "mint_failed"
        };
    }
    if (!Pe(d.url, d.triggerId)) {
        await D(h, d.triggerId);
        return {
            outcome: "failed",
            reason: "mint_failed"
        };
    }
    if (!detachedFromUser && context.abortController.signal.aborted) {
        return {
            outcome: "failed",
            reason: await D(h, d.triggerId) ? "aborted" : "watch_trigger_release_failed"
        };
    }
    let y;
    let w = false;
    let S = {};
    let A = false;
    let P = false;
    let C;
    let T = false;
    let events = Xb() ? ke : Z;
    let V = false;
    let K = `/api/frame/subscribe/${slug}`;
    let B = qX() ? aSt("POST", K) : null;
    let relayActive = fI(B);
    let ye = B !== null && BYr(B);
    let Y = ()=>pe(K, {
            url: d.url,
            sealed_secret: d.sealedSecret,
            events
        }, detachedFromUser ? undefined : context.abortController.signal, context.credentials);
    let M = await Y();
    if (M.res?.ok && M.res.fromFrame && M.res.status === 400 && events.includes("comment")) {
        events = Z;
        V = true;
        M = await Y();
    }
    let O = me(M);
    let { res } = M;
    if (!res) {
        T = !detachedFromUser && context.abortController.signal.aborted;
    } else if (res.ok) {
        y = res.status;
        w = res.status >= 200 && res.status < 300;
        if (!w) {
            let _ = typeof res.data === "string" ? res.data.trim() : undefined;
            let v = res.response?.headers?.["content-type"];
            let E = _ !== undefined && _ !== "" && !ce.test(_) && !/[<>]/.test(_) && typeof v === "string" && v.toLowerCase().startsWith("text/plain");
            let z = Tte(res.data);
            let F = res.fromFrame && (z !== null || E);
            let W = F ? te(z?.error ?? _ ?? "") : undefined;
            S = {
                ...!res.fromFrame && {
                    fromGateway: true
                },
                ...res.gatewayDeclined !== undefined && {
                    gatewayDeclined: res.gatewayDeclined
                },
                ...W !== undefined && {
                    serverMessage: W
                }
            };
            let Re = res.route === "relay" || !(ye || res.gatewayDeclined === 0);
            if (res.status === 403 && E && W !== undefined && Re && o === undefined) {
                A = true;
                P = durable.subscribeForbidden !== null;
                durable.subscribeForbidden = {
                    serverMessage: W,
                    relayActive
                };
            } else if (F && res.status >= 400 && res.status < 500 && res.status !== 401 && res.status !== 403) {
                j();
            }
        } else if (res.fromFrame) {
            j();
        }
        if (res.fromFrame) {
            le();
        }
    } else if (res.reason === "relay-unavailable" || res.reason === "relay-not-served") {
        if (res.status !== 0) {
            C = "relay_unavailable";
            y = res.status;
            S = {
                fromGateway: true
            };
            if (o === undefined) {
                P = durable.subscribeUnrelayed !== null;
                durable.subscribeUnrelayed = {
                    status: y
                };
            }
        }
    } else {
        C = res.reason === "no-auth" ? "no_auth" : "client_policy";
    }
    if (!w) {
        let _ = !res || res.ok && (!res.fromFrame || res.status >= 500);
        if (o !== undefined && _) {
            R().set(slug, {
                ...o,
                unreleased: [
                    ...o.unreleased ?? [],
                    d.triggerId
                ]
            });
            yEe();
            t(`[artifact] refresh subscribe outcome unknown; keeping trigger ${d.triggerId} beside ${o.triggerId}`);
            return {
                outcome: "failed",
                reason: T ? "aborted" : "subscribe_failed",
                status: y,
                kept: true,
                ...O,
                ...S
            };
        }
        let v = await D(h, d.triggerId);
        if (T) {
            return {
                outcome: "failed",
                reason: v ? "aborted" : "watch_trigger_release_failed",
                ...O
            };
        }
        return {
            outcome: "failed",
            reason: C ?? (A ? "subscribe_forbidden" : "subscribe_failed"),
            status: y,
            ...O,
            ...S,
            ...P && {
                latched: true
            }
        };
    }
    let since = new Date().toISOString();
    R().set(slug, {
        slug,
        triggerId: d.triggerId,
        since,
        events
    });
    yEe();
    let we = o ? [
        o.triggerId,
        ...o.unreleased ?? []
    ].filter((_)=>_ !== d.triggerId) : [];
    if ((await Promise.all(we.map((_)=>D(h, _)))).includes(false)) {
        f("artifact_durable_subscribe", "superseded_trigger_release_failed");
    }
    return {
        outcome: "subscribed",
        triggerId: d.triggerId,
        since,
        events,
        ...V && {
            downgraded: true
        },
        ...O
    };
}
async function ufn({ slug, context }) {
    JWr(slug);
    if (!R().has(slug) && !a.CLAUDE_CODE_REMOTE) {
        return {
            wasWatching: false,
            teardown: "unsent"
        };
    }
    if (!rr.test(slug)) {
        return {
            wasWatching: false,
            teardown: "unsent"
        };
    }
    let o = N(slug, ()=>Ze(slug, context));
    H(o);
    return o;
}
async function Ze(slug, context) {
    let r = R().get(slug);
    ee().durable.unwatchedSlugs.add(slug);
    let o = false;
    let teardown = "dispatched";
    let u = false;
    let b;
    let h = false;
    let p = await pe(`/api/frame/unsubscribe/${slug}`, {}, context.abortController.signal, context.credentials);
    let i = U(me(p));
    let { res } = p;
    if (!res) {
        u = context.abortController.signal.aborted;
    } else if (res.ok) {
        o = res.status >= 200 && res.status < 300;
        if (res.fromFrame) {
            le();
        }
    } else {
        teardown = "refused";
        if (res.reason === "relay-unavailable" || res.reason === "relay-not-served") {
            if (res.status !== 0) {
                b = res.status;
            } else {
                h = true;
            }
        }
    }
    let y = true;
    if (r || ee().durable.orphanTriggers.size > 0) {
        let w = await ie(context.getMcp().clients, context.abortController.signal, {
            detachedFromUser: true
        });
        if (r) {
            let S = [
                r.triggerId,
                ...r.unreleased ?? []
            ];
            let A = w === null ? S.map(()=>false) : await Promise.all(S.map((C)=>D(w, C)));
            y = !A.includes(false);
            let { durable } = ee();
            S.forEach((C, T)=>{
                if (!A[T]) {
                    durable.orphanTriggers.add(C);
                }
            });
            R().delete(slug);
            yEe();
        }
        if (w !== null) {
            await ge(w);
        }
    }
    if (o && y) {
        g("artifact_durable_subscribe", {
            unwatch: true,
            ...i[0]
        });
    } else if (u && y) {
        f("artifact_durable_subscribe", "unwatch_aborted", ...i);
    } else if (b !== undefined && y) {
        f("artifact_durable_subscribe", "unwatch_relay_unavailable", {
            status: b,
            ...i[0]
        });
    } else {
        let w = res?.ok && !o ? {
            status: res.status,
            ...i[0]
        } : b !== undefined ? {
            status: b,
            ...i[0],
            trigger_release_failed: true
        } : i[0];
        m("artifact_durable_subscribe", o ? "unwatch_trigger_release_failed" : b !== undefined ? "unwatch_relay_unavailable" : teardown === "refused" && !h ? "unwatch_client_policy" : "unwatch_failed", ...w ? [
            w
        ] : []);
    }
    return {
        wasWatching: r !== undefined,
        teardown
    };
}
export { dfn, Nve, l1o, c1o, d1o, aFr, lFr, cFr, v5n, ufn };
