import { Ke } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ms } from "/$bunfs/root/chunk-qch5xj2a.js";
import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { rr, hO, yN, h1, GT, Uct, Bct, Xoe, y_ } from "/$bunfs/root/chunk-k3tkc302.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { ebe } from "/$bunfs/root/chunk-8yfbbt6t.js";
import { aL } from "/$bunfs/root/chunk-sqysdndt.js";
import { s$, Rbt, ng, IMe, bge } from "/$bunfs/root/chunk-ngnr7vez.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { zs } from "/$bunfs/root/chunk-k1zxadxf.js";
const jbn = "__artifactCommentTarget";
const g = 120;
const timeoutMs = 4000;
const T = 32;
function _(slug, t) {
    return `${slug}/${t}`;
}
function czt(e) {
    return IMe(e).replace(/[\n\t]/g, " ").replace(h1, " ").replace(/\s+/g, " ").replace(/"/g, "'").replace(hO, "'").replace(yN, "'").trim();
}
function A(e, t) {
    let o = czt(e);
    if (Array.from(o).length > t) {
        return `${aL(Ms(o, t))}\u2026`;
    }
    return o;
}
function E(threads, thread_id, o) {
    let r = threads.find((s)=>s.id === thread_id);
    let n = r?.comments[0];
    if (r === undefined || n === undefined || r.commentsDegraded) {
        return;
    }
    let excerpt = GT(A(n.text.replace(y_, " "), g)).replace(Xoe, " ").replace(Uct, Bct).replace(/ {2,}/g, " ").trim();
    if (excerpt === "") {
        return;
    }
    let i = s$(n.account, o);
    let c = ng(n);
    let by = n.postedByArtifact || c === "unknown" ? "unknown" : n.role === "assistant" ? i ? "claude" : "unknown" : c === "agent" ? "unknown" : i ? "user" : "viewer";
    return {
        display: {
            thread_id,
            by,
            excerpt,
            replies: r.comments.length - 1,
            resolved: r.resolved && r.resolvedDegraded !== true
        },
        ...by === "viewer" && n.access !== undefined && {
            access: n.access
        }
    };
}
function $2r(e) {
    let t = de(e);
    return e.toolUseId !== undefined && t.mode !== "dontAsk" && t.shouldAvoidPermissionPrompts !== true;
}
async function F2r(e, t, o) {
    if (!rr.test(t)) {
        return;
    }
    let r = _(e.slug, t);
    let commentTargets = ee().commentTargets;
    let accountEpoch = ee().accountEpoch;
    let i = commentTargets.get(r);
    if (i !== undefined && o.toolUseId !== undefined && i.toolUseId === o.toolUseId) {
        return i.target;
    }
    let { signal, cleanup } = zs(o.abortController.signal, {
        timeoutMs,
        refTimer: true
    });
    try {
        let [s, p] = await Promise.all([
            bge(e, signal, o.credentials, "artifact_comment_consent_read", {
                skipBootProbe: true
            }),
            ebe(o.credentials)
        ]);
        if (s.err !== null) {
            commentTargets.delete(r);
            return;
        }
        let target = E(s.threads, t, {
            account: p?.accountUuid?.toLowerCase(),
            tokens: Rbt()
        });
        if (target === undefined) {
            f("artifact_comment_consent_read", "no_opening_comment");
            commentTargets.delete(r);
            return;
        }
        if (ee().accountEpoch !== accountEpoch) {
            return;
        }
        commentTargets.delete(r);
        commentTargets.set(r, {
            target,
            toolUseId: o.toolUseId
        });
        while(commentTargets.size > T){
            let u = commentTargets.keys().next().value;
            if (u === undefined) {
                break;
            }
            commentTargets.delete(u);
        }
        return target;
    } catch (error) {
        if (o.abortController.signal.aborted) {
            throw error;
        }
        f("artifact_comment_consent_read", Ke(error) ? "deadline" : "read_threw");
        return;
    } finally{
        cleanup();
    }
}
function l(access) {
    switch(access){
        case "owner":
            return "the owner's";
        case "editor":
            return "an editor's";
        case "commenter":
            return "a commenter's";
        case undefined:
            return "a viewer's";
    }
}
function U2r({ display, access }) {
    switch(display.by){
        case "user":
            return `your comment "${display.excerpt}"`;
        case "claude":
            return `Claude's comment "${display.excerpt}"`;
        case "viewer":
            return `${l(access)} comment "${display.excerpt}"`;
        case "unknown":
            return `the comment "${display.excerpt}"`;
    }
}
function R4o({ display, access }) {
    switch(display.by){
        case "user":
            return "your comment thread";
        case "claude":
            return "Claude's comment thread";
        case "viewer":
            return `${l(access)} comment thread`;
        case "unknown":
            return "a comment thread";
    }
}
function B2r(e, t) {
    if (t === undefined && !(jbn in e)) {
        return;
    }
    let { [jbn]: o, ...rest } = e;
    if (t === undefined) {
        return rest;
    }
    return {
        ...rest,
        [jbn]: t
    };
}
export { jbn, czt, $2r, F2r, U2r, R4o, B2r };
