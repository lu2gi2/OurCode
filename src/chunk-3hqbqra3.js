import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ye } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { Rg } from "/$bunfs/root/chunk-sfgejbsr.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Oa } from "/$bunfs/root/chunk-9fa34ggx.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { EFe, Ua } from "/$bunfs/root/chunk-k3tkc302.js";
import { rs } from "/$bunfs/root/chunk-6dwnw6av.js";
import { OJt, ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { Uj, r3, fI, PK, $C, md } from "/$bunfs/root/chunk-qv4dnw41.js";
import { Jg } from "/$bunfs/root/chunk-8yfbbt6t.js";
import { Bd } from "/$bunfs/root/chunk-0sswwkdg.js";
import { Yre } from "/$bunfs/root/chunk-0vgmtssp.js";
import { hZe } from "/$bunfs/root/chunk-vn24m8wp.js";
import { X4 } from "/$bunfs/root/chunk-eb0vnwc4.js";
import { tzr } from "/$bunfs/root/chunk-d33gtej9.js";
import { sKo } from "/$bunfs/root/chunk-8qgm3a5n.js";
import { Nve, ufn } from "/$bunfs/root/chunk-a5k2xgvd.js";
function w5n() {
    if (X4()) {
        return `Deleting Artifacts isn't available in this cloud session right now, so nothing was deleted; do not retry here. If the Artifact is the user's own, ${hZe(true)}`;
    }
    return "Deleting Artifacts isn't available in this cloud session right now, so nothing was deleted; do not retry here. If the Artifact is the user's own, they can delete it themselves on claude.ai from the Artifact's own menu, or with `/artifacts` in Claude Code on their own machine (press d on the selected one).";
}
function sFr() {
    return rs() && !fI();
}
const A = {
    ok: false,
    reason: "relay-unavailable",
    status: 0,
    route: "relay",
    fromFrame: false
};
function h(t) {
    return `Couldn't confirm the delete (the cloud relay failed: ${t}) \u2014 it may have gone through; check with action "list" before telling the user or trying again.`;
}
const maxContentLength = 65536;
const w = 1000;
const S = 10000;
function C(data) {
    if (typeof data === "string") {
        return data.trim();
    }
    return "";
}
function p(t, n, s) {
    return {
        source: t.source === "tool" ? b("tool") : b("dialog"),
        route: s === "relay" ? b("relay") : b("direct"),
        ...t.sessionMinted !== undefined && {
            session_minted: t.sessionMinted
        },
        ...t.ageSeconds !== undefined && {
            age_s: t.ageSeconds
        },
        ...t.sinceUpdateSeconds !== undefined && {
            since_update_s: t.sinceUpdateSeconds
        },
        ...n && {
            retried: true
        }
    };
}
async function cfn(t, credentials, s) {
    let l = ()=>{
        if (sFr()) {
            return Promise.resolve(A);
        }
        return md.deleteRelayOnly(`/api/frame/${encodeURIComponent(t)}`, {
            refreshOAuth: true,
            headers: Bd(),
            timeout: 15000,
            maxContentLength,
            signal: s.signal,
            credentials
        });
    };
    let e;
    let d = false;
    try {
        e = await l();
        if (e.ok && e.fromFrame && (e.status === 409 || e.status === 429 || e.status === 503)) {
            let r = e.response.headers?.["retry-after"];
            let i = Math.min(Rg(typeof r === "string" ? r : undefined) ?? w, S);
            await Q(i, s.signal, {
                abortError: ()=>new Ye
            });
            d = true;
            e = await l();
        }
    } catch (error) {
        if (Oa(error) || error instanceof Ye || s.signal?.aborted) {
            throw error;
        }
        let i = $C(error);
        m("artifact_delete", "request_error", p(s, d, i ? "relay" : "direct"));
        return {
            err: i ? h("no answer") : "Couldn't delete the Artifact (network error)",
            reason: "request_error"
        };
    }
    let o = p(s, d, e.route);
    if (!e.ok) {
        if (e.reason === "relay-unavailable" || e.reason === "relay-not-served") {
            m("artifact_delete", e.reason.replace(/-/g, "_"), {
                ...o,
                status: e.status
            });
            return {
                err: w5n(),
                reason: "unavailable"
            };
        }
        m("artifact_delete", e.reason, o);
        return {
            err: e.reason === "no-auth" ? Jg(e.detail) : `Artifact delete unavailable: ${e.reason}`,
            reason: "unavailable"
        };
    }
    if (!e.fromFrame && (e.status < 200 || e.status >= 300)) {
        m("artifact_delete", "relay_error", {
            ...o,
            status: e.status
        });
        return {
            err: h(`HTTP ${e.status}`),
            reason: "http_failed",
            status: e.status
        };
    }
    if (e.status === 404) {
        if (!r3(e.data)) {
            m("artifact_delete", "not_found_foreign", {
                ...o,
                status: 404
            });
            return {
                err: `Couldn't confirm the delete: the "not found" answer did not come from the Artifact service (a proxy or network edge may have answered), so the Artifact may still be online \u2014 check the Artifacts list again before treating it as deleted.`,
                reason: "http_failed",
                status: 404
            };
        }
        f("artifact_delete", "not_found", o);
        return {
            err: null,
            alreadyGone: true
        };
    }
    if (e.status === 403) {
        let r = C(e.data);
        if (/^not owner\b/.test(r)) {
            f("artifact_delete", "not_owner", o);
            return {
                err: "Only the Artifact's owner can delete it.",
                reason: "not_owner",
                status: 403
            };
        }
        if (r.startsWith(Uj)) {
            m("artifact_delete", "ccr_credential_refused", o);
            return {
                err: w5n(),
                reason: "unavailable",
                status: 403
            };
        }
    }
    if (e.status < 200 || e.status >= 300) {
        m("artifact_delete", "http_failed", {
            ...o,
            status: e.status
        });
        return {
            err: e.status >= 500 ? `Couldn't confirm the delete (HTTP ${e.status}) \u2014 the Artifact may already be unreachable; retry once.` : `Couldn't delete the Artifact (HTTP ${e.status})`,
            reason: "http_failed",
            status: e.status
        };
    }
    if (e.status !== 204 || e.route === "relay" && !PK(e)) {
        m("artifact_delete", "ok_foreign", {
            ...o,
            status: e.status
        });
        return {
            err: `Couldn't confirm the delete: the answer (HTTP ${e.status}) was not the Artifact service's own, so the Artifact may still be online \u2014 check the Artifacts list again before treating it as deleted.`,
            reason: "http_failed",
            status: e.status
        };
    }
    g("artifact_delete", o);
    return {
        err: null,
        alreadyGone: false
    };
}
function F(t, slug) {
    let s = Object.keys(t.frameUrls);
    let l = s.filter((u)=>Ua(t.frameUrls[u].url) !== slug);
    let artifactRefs = t.artifactRefs?.filter((u)=>u.slug !== slug);
    let d = (artifactRefs?.length ?? 0) !== (t.artifactRefs?.length ?? 0);
    let o = t.artifactReadVersions !== undefined && slug in t.artifactReadVersions;
    let r = t.artifactReadObservers !== undefined && slug in t.artifactReadObservers;
    if (l.length === s.length && !d && !o && !r) {
        return t;
    }
    let { [slug]: i, ...rest } = t.artifactReadVersions ?? {};
    let { [slug]: D, ...rest_1 } = t.artifactReadObservers ?? {};
    return {
        ...t,
        frameUrls: Object.fromEntries(l.map((u)=>[
                u,
                t.frameUrls[u]
            ])),
        ...d && {
            artifactRefs
        },
        ...o && {
            artifactReadVersions: rest
        },
        ...r && {
            artifactReadObservers: rest_1
        }
    };
}
function Jgt(slug, n) {
    n.updateAppState((r)=>F(r, slug));
    let { shareStatus, createdFromType, deferredSurface, remoteControlSkippedSlugs, coordinatorEditors } = ee();
    for (let [r, i] of shareStatus.filePathToSlug){
        if (i === slug) {
            Yre(r);
        }
    }
    for (let [r, i] of createdFromType){
        if (i.slug === slug) {
            createdFromType.delete(r);
        }
    }
    deferredSurface.delete(slug);
    remoteControlSkippedSlugs.delete(slug);
    OJt(slug, "page_gone");
    coordinatorEditors.delete(slug);
    tzr(slug, n.context);
    ee().liveDocWatch.stop?.(slug);
    sKo(slug);
    if (a.CLAUDE_CODE_REMOTE || Nve(slug) !== undefined) {
        ufn({
            slug,
            context: n.context
        }).catch(c);
    }
}
function iFr(t) {
    return `<${EFe} url="${t}"/> The user deleted this Artifact from /artifacts: its link no longer works for anyone, it cannot be restored, and it cannot be published to again \u2014 publishing the same file creates a new Artifact at a new URL. Do not pass this url to the Artifact tool.`;
}
export { w5n, sFr, cfn, Jgt, iFr };
