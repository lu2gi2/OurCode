import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Gt, k, Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { sn } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { n7e, _X, Pj } from "/$bunfs/root/chunk-9cfh3hvt.js";
import { RD } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { wV } from "/$bunfs/root/chunk-0xz61zj0.js";
import { hn, Uo, bt } from "/$bunfs/root/chunk-55p8dvkx.js";
const s = p(()=>bt({
        reviews_used: hn(),
        reviews_limit: hn(),
        reviews_remaining: hn(),
        is_overage: Uo()
    }));
async function _(credentials) {
    let a_CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE = a.CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE;
    if (a_CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE) {
        try {
            let n = s().safeParse(X(a_CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE));
            if (n.success) {
                return n.data;
            }
            return null;
        } catch (error) {
            t(`fetchUltrareviewQuota fixture parse failed: ${error}`);
            return null;
        }
    }
    try {
        let n = await Gt.get("/v1/ultrareview/quota", {
            auth: "teleport-org",
            timeout: 3000,
            credentials
        });
        if (!n.ok) {
            f("api_ultrareview_quota", "request_failed");
            return null;
        }
        let o = s().safeParse(n.data);
        if (!o.success) {
            t(`fetchUltrareviewQuota schema mismatch: ${o.error.message}`);
            f("api_ultrareview_quota", "schema_mismatch");
            return null;
        }
        g("api_ultrareview_quota");
        return o.data;
    } catch (error) {
        t(`fetchUltrareviewQuota failed: ${error}`);
        f("api_ultrareview_quota", "request_failed");
        return null;
    }
}
class l {
    quota = undefined;
    fetch = undefined;
}
const h = new q(()=>new l);
function c() {
    return h.of(B().host);
}
async function Ojr(e) {
    let r = c();
    r.fetch ??= _(e);
    r.quota = await r.fetch;
}
function Ihn(e) {
    let r = c();
    if (r.quota === undefined) {
        Ojr(e);
        return null;
    }
    return r.quota;
}
const S = "tengu_ultrareview_awareness";
function R() {
    return k(S, null) ?? {};
}
function cXn(e) {
    if (!RD()) {
        return false;
    }
    if (!sn("allow_remote_sessions")) {
        return false;
    }
    return R()[e] === true;
}
function Mjr() {
    return ce().hasRunUltrareview === true;
}
function UGo(e) {
    Ae((r)=>{
        if (r.hasRunUltrareview) {
            return r;
        }
        return {
            ...r,
            hasRunUltrareview: true
        };
    }, e);
}
function U(e) {
    i("tengu_ultrareview_awareness_shown", {
        surface: d(e)
    });
}
function Hjr(e) {
    return `${e} free ${e === 1 ? "review" : "reviews"} left`;
}
function BGo(e) {
    if (e !== "ultrareview" && e !== wV) {
        return "";
    }
    if (!cXn("slash_menu")) {
        return "";
    }
    let r = Ihn();
    if (r === null || r.reviews_remaining <= 0) {
        return "";
    }
    let r_reviews_remaining = r.reviews_remaining;
    if (e === "ultrareview") {
        return `${r_reviews_remaining} free left \xB7 `;
    }
    return `${r_reviews_remaining} free /ultrareview \xB7 `;
}
const C = "ultrareview-prose-pointer";
const A = "ultrareview-post-commit";
const E = 5;
function m(e, r, n, o, w) {
    if (!cXn(e)) {
        return null;
    }
    if (Mjr()) {
        return null;
    }
    if (_X(r) >= E) {
        return null;
    }
    if (Pj(r) === 0) {
        return null;
    }
    n7e(r, o);
    U(e);
    let u = Ihn(w);
    let v = u !== null && u.reviews_remaining > 0 ? ` \u2014 ${Hjr(u.reviews_remaining)}` : "";
    return n(v);
}
function jGo(e, r) {
    return m("prose_pointer", C, (n)=>`Tip: For a deeper cloud-based review, try /ultrareview next time${n}.`, e, r);
}
function WGo(e) {
    return m("post_commit", A, (r)=>`Tip: Run /ultrareview before you push to catch bugs with a cloud-based multi-agent review${r}.`, e, undefined);
}
export { Ojr, Ihn, cXn, Mjr, UGo, Hjr, BGo, jGo, WGo };
