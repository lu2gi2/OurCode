import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { l, ti } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { cR, tN } from "/$bunfs/root/chunk-sfgejbsr.js";
import { nu } from "/$bunfs/root/chunk-c56kpkt7.js";
import { o, T, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { Ko, zy } from "/$bunfs/root/chunk-7qc48pza.js";
const R = "2023-06-01";
const $Le = "https://github.com/apps/claude/installations/new";
function Pst(e) {
    if (!e || typeof e !== "object") {
        return;
    }
    let r = "error" in e ? e.error : e;
    if (r && typeof r === "object" && "reason" in r && typeof r.reason === "string") {
        return r.reason;
    }
}
const P = "ccr-byoc-2025-07-29";
async function ZKe(e, { sessionId, repo, prNumber, baseUrl, getAccessToken, getTrustedDeviceToken }) {
    let _ = blo(e);
    let s = getAccessToken();
    if (!s) {
        t(`[bridge] No access token for ${e}-pr`);
        m(_, "no_token");
        return {
            ok: false,
            reason: "no_token"
        };
    }
    let y = `${baseUrl}/v1/code/github/${e}-pull-request`;
    let w = {
        session_id: nu(sessionId),
        repo,
        pr_number: prNumber
    };
    let d;
    try {
        d = await At.post(y, w, {
            headers: Hgr(s, {
                trustedDeviceToken: await getTrustedDeviceToken?.()
            }),
            timeout: 10000,
            validateStatus: (a)=>a < 500
        });
    } catch (error) {
        t(`[bridge] ${e}-pr request failed: ${l(error)}`);
        m(_, "request_failed");
        return {
            ok: false,
            reason: "request_failed"
        };
    }
    if (!(d.status >= 200 && d.status < 300 || d.status === 409)) {
        let reason = Pst(d.data);
        let h = cR(d.data);
        t(`[bridge] ${e}-pr failed ${d.status}${reason ? ` [${reason}]` : ""}${h ? `: ${h}` : ""}`);
        m(_, reason === "github_app_not_installed" ? reason : "http_error");
        return {
            ok: false,
            reason,
            detail: tN(d.data)
        };
    }
    t(`[bridge] ${e}-pr ${repo}#${prNumber} ok`);
    g(_);
    return {
        ok: true
    };
}
function blo(e) {
    if (e === "subscribe") {
        return "bridge_pr_subscribe";
    }
    return "bridge_pr_unsubscribe";
}
function Hgr(e, { orgUUID, trustedDeviceToken } = {}) {
    let n = {
        Authorization: `Bearer ${e}`,
        "Content-Type": "application/json",
        "anthropic-version": R,
        "anthropic-beta": P,
        "anthropic-client-platform": zy(),
        "User-Agent": Ko()
    };
    if (orgUUID !== undefined) {
        n["x-organization-uuid"] = orgUUID;
    }
    if (trustedDeviceToken !== undefined) {
        n["X-Trusted-Device-Token"] = trustedDeviceToken;
    }
    return n;
}
const Slo = "/worker/record-created-pr";
async function Yps(e) {
    let r = `${e.sessionUrl.replace(/\/+$/, "")}${Slo}`;
    try {
        return {
            ok: true,
            status: (await At.post(r, {
                owner: e.owner,
                repo: e.repo,
                pr_number: e.prNumber,
                head_ref: e.headRef
            }, {
                headers: {
                    Authorization: `Bearer ${e.workerToken}`,
                    "Content-Type": "application/json",
                    "anthropic-version": R,
                    "anthropic-client-platform": zy(),
                    "User-Agent": Ko()
                },
                timeout: e.timeoutMs
            })).status
        };
    } catch (error) {
        let { kind, status } = ti(error);
        return {
            ok: false,
            kind,
            status
        };
    }
}
const j = p(()=>u({
        results: T(u({
            path: o(),
            error_reason: o().optional()
        }))
    }));
const x = /^chan_[A-Za-z0-9_-]{1,120}$/;
async function Xps({ door, items, signal }) {
    if (!x.test(door.channelId)) {
        m("bridge_project_files_write", "invalid_channel");
        return {
            ok: false,
            reason: "invalid_channel"
        };
    }
    let f = door.getBearerToken();
    if (!f) {
        m("bridge_project_files_write", "no_token");
        return {
            ok: false,
            reason: "no_token"
        };
    }
    let b = `${door.apiBaseUrl}/v1/code/sessions/${encodeURIComponent(door.sessionId)}/worker/channels/${encodeURIComponent(door.channelId)}/files:write`;
    let k = {
        session_id: door.sessionId,
        channel_id: door.channelId,
        worker_epoch: door.getWorkerEpoch(),
        files: items.map((s)=>({
                path: s.path,
                content: s.content.toString("base64")
            }))
    };
    let c;
    try {
        c = await At.post(b, k, {
            headers: Hgr(f),
            timeout: 90000,
            maxBodyLength: Infinity,
            signal,
            validateStatus: (s)=>s < 500
        });
    } catch (error) {
        if (At.isCancel(error)) {
            m("bridge_project_files_write", "aborted");
            return {
                ok: false,
                reason: "aborted"
            };
        }
        t(`[bridge] project files write request failed: ${l(error)}`);
        m("bridge_project_files_write", "request_failed");
        return {
            ok: false,
            reason: "request_failed"
        };
    }
    if (c.status !== 200) {
        let code = Pst(c.data);
        t(`[bridge] project files write refused: status=${c.status}${code ? ` [${code}]` : ""}`);
        m("bridge_project_files_write", "http_error");
        return {
            ok: false,
            reason: "http_error",
            status: c.status,
            code
        };
    }
    let _ = j().safeParse(c.data);
    if (!_.success) {
        m("bridge_project_files_write", "bad_response");
        return {
            ok: false,
            reason: "bad_response"
        };
    }
    g("bridge_project_files_write");
    return {
        ok: true,
        results: _.data.results
    };
}
export { $Le, Pst, ZKe, blo, Hgr, Slo, Yps, Xps };
