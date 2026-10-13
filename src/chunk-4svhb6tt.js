import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { gf, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { S1 } from "/$bunfs/root/chunk-1ej05ybf.js";
import { cR, tN } from "/$bunfs/root/chunk-sfgejbsr.js";
import { rh, Gl } from "/$bunfs/root/chunk-c56kpkt7.js";
import { soe } from "/$bunfs/root/chunk-78511nt1.js";
import { Pst, Hgr } from "/$bunfs/root/chunk-0w84e1m6.js";
import { xte } from "/$bunfs/root/chunk-qfg5yea5.js";
const pSt = /^file_[A-Za-z0-9_]{8,80}$/;
const I = 8000;
const S = 16000;
const y = 64;
const A = 512;
const E = 40;
const D = /^https:\/\/([a-z0-9-]+\.)*slack\.com\/archives\/[\x21-\x7e]+$/;
function h(e, r) {
    let n = gf(e);
    if (r) {
        return n.replace(/(?![\n\t])[\p{Cc}\p{Zl}\p{Zp}]/gu, " ");
    }
    return n.replace(/[\p{Cc}\p{Zl}\p{Zp}]/gu, " ").trim();
}
function tke(e) {
    return e.replace(/(?!\()\p{Ps}|</gu, "(").replace(/(?!\))\p{Pe}|>/gu, ")").replace(/[\p{Pi}\p{Pf}]/gu, "'").replace(/(?![\p{Sc}\p{Extended_Pictographic}\p{ASCII}])\p{S}/gu, "");
}
function WMe(e) {
    if (e === "rc_owner") {
        return "your user · Remote Control";
    }
    return "third-party";
}
async function i6r({ sessionId, fileId, baseUrl, getAccessToken, getTrustedDeviceToken }) {
    if (!pSt.test(fileId)) {
        m("bridge_inbox_fetch", "malformed_id");
        return {
            ok: false,
            reason: "malformed",
            detail: "file_id must be a Files API id (file_…)"
        };
    }
    try {
        rh(sessionId, "session id");
    } catch  {
        m("bridge_inbox_fetch", "malformed_session_id");
        return {
            ok: false,
            reason: "malformed",
            detail: "session id contains unsafe characters"
        };
    }
    let accessToken = getAccessToken();
    if (!accessToken) {
        t("[bridge] No access token for inbox fetch");
        m("bridge_inbox_fetch", "no_token");
        return {
            ok: false,
            reason: "no_token"
        };
    }
    let c = `${baseUrl}/v1/code/sessions/${Gl(sessionId)}/inbox/${fileId}`;
    let o;
    try {
        o = await At.get(c, {
            headers: Hgr(accessToken, {
                trustedDeviceToken: await getTrustedDeviceToken?.()
            }),
            timeout: 10000,
            maxContentLength: 262144,
            validateStatus: (d)=>d < 500
        });
    } catch (error) {
        t(`[bridge] inbox fetch request failed: ${l(error)}`);
        m("bridge_inbox_fetch", "request_failed");
        return {
            ok: false,
            reason: "request_failed"
        };
    }
    if (o.status !== 200) {
        let d = Pst(o.data);
        let f = cR(o.data);
        t(`[bridge] inbox fetch failed ${o.status}${d ? ` [${d}]` : ""}${f ? `: ${f}` : ""}`);
        let _ = o.status === 403 ? soe(o.data) : undefined;
        let reason = o.status === 404 ? "not_found" : _ === "untrusted_device" ? "untrusted_device" : _ === "session_stale_relogin" ? "relogin" : d === "feature_disabled" ? "feature_disabled" : o.status === 403 ? "forbidden" : "http_error";
        m("bridge_inbox_fetch", reason);
        return {
            ok: false,
            reason,
            detail: tN(o.data)
        };
    }
    let u = N(o.data, sessionId, fileId);
    if (u === "wrong_session") {
        t("[bridge] inbox fetch: the message names another session — refusing to relay it");
        m("bridge_inbox_fetch", "wrong_session");
        return {
            ok: false,
            reason: "wrong_session",
            detail: "that inbox message is not addressed to this session"
        };
    }
    if (!u) {
        t("[bridge] inbox fetch: 200 with an unusable body (missing message/body, a non-UUID message_id, or a file_id other than the one requested)");
        m("bridge_inbox_fetch", "malformed_response");
        return {
            ok: false,
            reason: "malformed",
            detail: "unexpected response shape"
        };
    }
    g("bridge_inbox_fetch");
    return {
        ok: true,
        message: u.message,
        envelopedText: Xer(u.message),
        download: {
            baseUrl,
            accessToken
        }
    };
}
function Xer(e, r) {
    let n = {
        message_id: e.messageId,
        source: e.source,
        sender_kind: e.senderKind,
        body: e.body
    };
    if (e.senderDisplay) {
        n.sender_display = e.senderDisplay;
    }
    if (e.slackPermalink) {
        n.slack_permalink = e.slackPermalink;
    }
    if (e.createdAt) {
        n.received_at = e.createdAt;
    }
    if (r) {
        n.attachments = r;
    }
    let p = S;
    let a = `<event source="session-inbox" kind="message.content" from="${e.senderKind}" trust="relay" untrusted-keys="body,sender_display,slack_permalink,attachments">
`;
    let s = `
</event>`;
    let i = S1("event", JSON.stringify(n));
    if (a.length + i.length + s.length > p) {
        let c = I;
        do {
            c = Math.floor(c / 2);
            n.body = w(e.bodyHead, c, e.bodyDroppedAtIngest);
            i = S1("event", JSON.stringify(n));
        }while (c > 64 && a.length + i.length + s.length > p)
    }
    return `${a}${i}${s}`;
}
function w(bodyHead, r, n = 0) {
    if (bodyHead.length > r) {
        return `${ne(bodyHead, r)} [\u2026truncated ${bodyHead.length - r + n} chars]`;
    }
    if (n > 0) {
        return `${bodyHead} [\u2026truncated ${n} chars]`;
    }
    return bodyHead;
}
function N(data, sessionId, fileId) {
    if (!data || typeof data !== "object") {
        return null;
    }
    let e_message = data.message;
    if (!e_message || typeof e_message !== "object") {
        return null;
    }
    let s = e_message;
    if (s.file_id !== fileId || typeof s.message_id !== "string" || Jt(s.message_id) === null || typeof s.body !== "string") {
        return null;
    }
    if (typeof s.session_id !== "string" || s.session_id === "") {
        return null;
    }
    let i;
    try {
        rh(s.session_id, "session id");
        i = Gl(s.session_id);
    } catch  {
        return null;
    }
    if (i !== Gl(sessionId)) {
        return "wrong_session";
    }
    let messageId = s.message_id.toLowerCase();
    let senderKind = C(s.sender_kind);
    let attachments = senderKind === "rc_owner" ? xte({
        file_attachments: s.attachments
    }) : [];
    let d = s.slack && typeof s.slack === "object" ? s.slack : undefined;
    let f = d && typeof d.permalink === "string" ? h(d.permalink, false) : undefined;
    let _ = typeof s.created_at === "string" ? s.created_at : undefined;
    let b = typeof s.sender_display === "string" ? tke(h(s.sender_display, false)) : "";
    let x = b.length > y ? `${ne(b, y)}\u2026` : b;
    return {
        message: {
            messageId,
            senderKind,
            senderDisplay: x || undefined,
            ...attachments.length > 0 && {
                attachments
            },
            source: k(s.source, "SESSION_INBOX_SOURCE_"),
            ...P(h(s.body, true)),
            slackPermalink: f && f.length <= A && D.test(f) ? f : undefined,
            createdAt: _ && _.length <= E && /^\d{4}-\d{2}-\d{2}T[0-9:.]+(Z|[+-]\d{2}:\d{2})$/.test(_) ? _ : undefined
        }
    };
}
const R = [
    "slack_user",
    "account",
    "rc_owner"
];
function C(sender_kind) {
    let r = k(sender_kind, "SESSION_INBOX_SENDER_KIND_");
    return R.find((n)=>n === r) ?? "unknown";
}
function k(e, r) {
    if (typeof e !== "string") {
        return "";
    }
    let n = e.startsWith(r) ? e.slice(r.length) : e;
    if (/^[A-Za-z_]{1,32}$/.test(n) && !n.endsWith("UNSPECIFIED")) {
        return n.toLowerCase();
    }
    return "";
}
function P(e) {
    if (e.length <= I) {
        return {
            body: e,
            bodyHead: e,
            bodyDroppedAtIngest: 0
        };
    }
    let bodyHead = ne(e, I);
    let bodyDroppedAtIngest = e.length - bodyHead.length;
    return {
        body: `${bodyHead} [\u2026truncated ${bodyDroppedAtIngest} chars]`,
        bodyHead,
        bodyDroppedAtIngest
    };
}
export { pSt, tke, WMe, i6r, Xer };
