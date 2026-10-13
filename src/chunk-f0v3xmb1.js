import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
function B(r) {
    if (r < 60000) {
        return `${Math.round(r / 1000)}s`;
    }
    let n = Math.floor(r / 60000);
    let s = Math.round(r % 60000 / 1000);
    if (s > 0) {
        return `${n}m ${s}s`;
    }
    return `${n}m`;
}
function l0(r) {
    let s = (r.startsWith("sk-ant-si-") ? r.slice(10) : r).split(".");
    if (s.length !== 3 || !s[1]) {
        return null;
    }
    try {
        return X(Buffer.from(s[1], "base64url").toString("utf8"));
    } catch  {
        return null;
    }
}
function v1n(r) {
    let n = l0(r);
    if (n !== null && typeof n === "object" && "session_id" in n && typeof n.session_id === "string") {
        return n.session_id;
    }
}
function dO(r) {
    let n = l0(r);
    if (n !== null && typeof n === "object" && "exp" in n && typeof n.exp === "number") {
        return n.exp;
    }
    return null;
}
const L = 300000;
const R = 1800000;
const j = 3;
const I = 60000;
function yct({ getAccessToken, onRefresh, onExhausted, label, refreshBufferMs = L, maxFailures = j, adaptiveBuffer = false, rescheduleFromNewToken = false, decodeExpiry = dO, formatDelay = B }) {
    let d = new Map;
    let h = new Map;
    let m = new Map;
    function E(e) {
        let o = (m.get(e) ?? 0) + 1;
        m.set(e, o);
        return o;
    }
    function schedule(e, o) {
        let f = decodeExpiry(o);
        if (!f) {
            t(`[${label}:token] Could not decode JWT expiry for sessionId=${e}, token prefix=${o.slice(0, 15)}\u2026, keeping existing timer`);
            return;
        }
        let a = d.get(e);
        if (a) {
            clearTimeout(a);
        }
        let g = E(e);
        let _ = new Date(f * 1000).toISOString();
        let y = f * 1000 - Date.now();
        let M = adaptiveBuffer ? Math.min(refreshBufferMs, Math.max(1000, Math.floor(y * 0.2))) : refreshBufferMs;
        let S = y - M;
        if (S <= 0) {
            t(`[${label}:token] Token for sessionId=${e} expires=${_} (past or within buffer), refreshing immediately`);
        } else {
            let F = adaptiveBuffer ? Math.round(M / 1000) : refreshBufferMs / 1000;
            t(`[${label}:token] Scheduled token refresh for sessionId=${e} in ${formatDelay(S)} (expires=${_}, buffer=${F}s)`);
        }
        w(e, Date.now() + S, g);
    }
    let N = 60000;
    function w(e, o, f) {
        h.delete(e);
        function a() {
            if (m.get(e) !== f) {
                return;
            }
            let g = o - Date.now();
            if (g <= 0) {
                x(e, f);
                return;
            }
            let _ = setTimeout(a, Math.min(g, N));
            d.set(e, _);
        }
        a();
    }
    function scheduleFromExpiresIn(e, o) {
        let f = d.get(e);
        if (f) {
            clearTimeout(f);
        }
        let a = E(e);
        let g = Math.max(o * 1000 - refreshBufferMs, 30000);
        t(`[${label}:token] Scheduled token refresh for sessionId=${e} in ${formatDelay(g)} (expires_in=${o}s, buffer=${refreshBufferMs / 1000}s)`);
        w(e, Date.now() + g, a);
    }
    function refreshNow(e) {
        let o = d.get(e);
        if (o) {
            clearTimeout(o);
        }
        let f = E(e);
        t(`[${label}:token] Immediate token refresh requested for sessionId=${e}`);
        x(e, f);
    }
    async function x(e, o) {
        let f;
        try {
            f = await getAccessToken();
        } catch (error) {
            t(`[${label}:token] getAccessToken threw for sessionId=${e}: ${l(error)}`, {
                level: "error"
            });
        }
        if (m.get(e) !== o) {
            t(`[${label}:token] doRefresh for sessionId=${e} stale (gen ${o} vs ${m.get(e)}), skipping`);
            return;
        }
        if (!f) {
            let g = (h.get(e) ?? 0) + 1;
            h.set(e, g);
            t(`[${label}:token] No OAuth token available for refresh, sessionId=${e} (failure ${g}${Number.isFinite(maxFailures) ? `/${maxFailures}` : ""})`, {
                level: "error"
            });
            J("error", "bridge_token_refresh_no_oauth");
            if (g < maxFailures) {
                let _ = setTimeout(x, I, e, o);
                d.set(e, _);
                return;
            }
            t(`[${label}:token] Refresh chain exhausted for sessionId=${e} after ${g} consecutive failures`, {
                level: "error"
            });
            J("error", "bridge_token_refresh_exhausted");
            onExhausted?.(e, "no_oauth_token");
            return;
        }
        h.delete(e);
        t(`[${label}:token] Refreshing token for sessionId=${e}: new token prefix=${f.slice(0, 15)}\u2026`);
        i("tengu_bridge_token_refreshed", {});
        onRefresh(e, f);
        if (rescheduleFromNewToken && decodeExpiry(f)) {
            schedule(e, f);
            return;
        }
        let a = setTimeout(x, R, e, o);
        d.set(e, a);
        t(rescheduleFromNewToken ? `[${label}:token] Non-JWT token \u2014 scheduled fallback refresh for sessionId=${e} in ${formatDelay(R)}` : `[${label}:token] Scheduled follow-up refresh for sessionId=${e} in ${formatDelay(R)}`);
    }
    function cancel(e) {
        E(e);
        let o = d.get(e);
        if (o) {
            clearTimeout(o);
            d.delete(e);
        }
        h.delete(e);
    }
    function cancelAll() {
        for (let e of m.keys()){
            E(e);
        }
        for (let e of d.values()){
            clearTimeout(e);
        }
        d.clear();
        h.clear();
    }
    return {
        schedule,
        scheduleFromExpiresIn,
        refreshNow,
        cancel,
        cancelAll
    };
}
const xTs = /^mem_[A-Za-z0-9_-]{1,120}$/;
function P(r) {
    let n = BigInt(58);
    let s = Array(22).fill("1");
    let u = 21;
    let c = r;
    while(c > 0n){
        let p = Number(c % n);
        s[u] = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"[p];
        c = c / n;
        u--;
    }
    return s.join("");
}
function G(r) {
    let n = r.replaceAll("-", "");
    if (n.length !== 32) {
        throw Error(`Invalid UUID hex length: ${n.length}`);
    }
    return BigInt(`0x${n}`);
}
function E1n(r, n) {
    try {
        let s = G(n);
        return `${r}_01${P(s)}`;
    } catch  {
        return;
    }
}
function V(r) {
    if (r.length !== 22) {
        return;
    }
    let n = BigInt(58);
    let s = 0n;
    for (let u of r){
        let c = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".indexOf(u);
        if (c < 0) {
            return;
        }
        s = s * n + BigInt(c);
    }
    return s;
}
function uO(r) {
    let n = r.lastIndexOf("_");
    if (n < 0) {
        return;
    }
    let s = r.slice(n + 1);
    if (!s.startsWith("01")) {
        return;
    }
    let u = V(s.slice(2));
    if (u === undefined) {
        return;
    }
    let c = u.toString(16).padStart(32, "0");
    if (c.length !== 32) {
        return;
    }
    return `${c.slice(0, 8)}-${c.slice(8, 12)}-${c.slice(12, 16)}-${c.slice(16, 20)}-${c.slice(20, 32)}`;
}
export { l0, v1n, dO, yct, xTs, E1n, uO };
