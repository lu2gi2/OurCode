import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { yst, Cao } from "/$bunfs/root/chunk-ypkrahyx.js";
function Pun(i) {
    let n = {
        entries: new Map,
        burst: i?.burst ?? 3,
        refillMs: i?.refillMs ?? 10000,
        retryMs: i?.retryMs ?? 60000,
        isOwnTitle: i?.isOwnTitle ?? (()=>false),
        onRemoteTitleAdopted: i?.onRemoteTitleAdopted ?? (()=>{})
    };
    return {
        update: (e, r, s)=>h(n, e, r, s),
        noteRemoteTitle: (e, r)=>S(n, e, r),
        forget: (e)=>R(n, e),
        hasSent: (e, r)=>n.entries.get(e)?.sentTitles.has(r) ?? false,
        isKnownTitle: (e, r)=>n.entries.get(e)?.knownTitles.has(r) ?? false
    };
}
function c(i, n) {
    let e = i.entries.get(n);
    if (!e) {
        e = {
            lastSentTitle: undefined,
            lastSentOk: false,
            sentTitles: new Set,
            knownTitles: new Set,
            tokens: i.burst,
            refilledAt: Date.now(),
            pending: undefined,
            inFlight: false,
            timer: undefined,
            retryTimer: undefined,
            sendingRetry: false,
            suppressed: 0
        };
        i.entries.set(n, e);
    }
    return e;
}
function h(i, n, e, r) {
    let s = c(i, n);
    if (y(s, e, r)) {
        p(s);
        return Promise.resolve();
    }
    return new Promise((resolve)=>{
        let waiters = [
            resolve
        ];
        a(s);
        if (s.pending || s.inFlight) {
            if (s.suppressed === 0) {
                f("bridge_session_patch", "title_write_coalesced");
            }
            s.suppressed += 1;
        }
        g(s.pending?.waiters);
        s.pending = {
            title: e,
            opts: r,
            waiters
        };
        s.sendingRetry = false;
        T(i, n);
    });
}
function k(i, n, e) {
    let r = Math.floor((e - n.refilledAt) / i.refillMs);
    if (r > 0) {
        n.tokens = Math.min(i.burst, n.tokens + r);
        n.refilledAt += r * i.refillMs;
    }
    if (n.tokens === i.burst) {
        n.refilledAt = e;
    }
}
function T(i, n) {
    let e = i.entries.get(n);
    if (!e || e.inFlight || !e.pending) {
        return;
    }
    let r = Date.now();
    k(i, e, r);
    if (e.tokens <= 0 && !e.pending.opts?.userInitiated) {
        if (!e.timer) {
            let o = Math.max(0, e.refilledAt + i.refillMs - r);
            e.timer = setTimeout(W, o, i, n);
            e.timer.unref?.();
        }
        return;
    }
    let { title, opts, waiters } = e.pending;
    e.pending = undefined;
    if (y(e, title, opts) || opts?.shouldSend !== undefined && !opts.shouldSend()) {
        a(e);
        e.sendingRetry = false;
        e.suppressed = 0;
        g(waiters);
        return;
    }
    e.tokens = Math.max(0, e.tokens - 1);
    e.inFlight = true;
    e.lastSentTitle = title;
    e.lastSentOk = false;
    e.sentTitles.add(title);
    e.knownTitles.add(title);
    a(e);
    let e_sendingRetry = e.sendingRetry;
    e.sendingRetry = false;
    if (e.suppressed > 0) {
        t(`[bridge] title write: sending latest after coalescing ${e.suppressed} update(s)`);
        e.suppressed = 0;
    }
    Cao(n, title, opts).then((o)=>{
        if (o === "landed") {
            e.lastSentTitle = title;
            e.lastSentOk = true;
        } else if (e.lastSentTitle === title) {
            e.lastSentOk = false;
        }
        if (i.entries.get(n) !== e) {
            return;
        }
        if (o === "failed" && !e_sendingRetry && !e.retryTimer && !e.pending) {
            e.retryTimer = setTimeout(v, i.retryMs, i, n, title, opts);
            e.retryTimer.unref?.();
        }
    }, (o)=>{
        t(`[bridge] title write failed: ${l(o)}`);
    }).finally(()=>{
        e.inFlight = false;
        g(waiters);
        T(i, n);
    });
}
function W(i, n) {
    let e = i.entries.get(n);
    if (e) {
        e.timer = undefined;
        T(i, n);
    }
}
function v(i, n, e, r) {
    let s = i.entries.get(n);
    if (!s) {
        return;
    }
    s.retryTimer = undefined;
    if (!m(i, s, n, e)) {
        return;
    }
    if (r?.shouldSend !== undefined && !r.shouldSend()) {
        t("[bridge] title write retry dropped: sending is now barred");
        return;
    }
    yst(n, {
        baseUrl: r?.baseUrl,
        getAccessToken: r?.getAccessToken,
        credentials: r?.credentials
    }).then((d)=>{
        if (!m(i, s, n, e)) {
            return;
        }
        if (d === null) {
            t("[bridge] title write retry skipped: server state unreadable");
            return;
        }
        if (d.title && !s.knownTitles.has(d.title) && !i.isOwnTitle(n, d.title)) {
            t("[bridge] title write retry dropped: the session was renamed elsewhere");
            S(i, n, d.title);
            i.onRemoteTitleAdopted(n, d.title);
            return;
        }
        s.pending = {
            title: e,
            opts: r,
            waiters: []
        };
        s.sendingRetry = true;
        T(i, n);
    }, (d)=>{
        t(`[bridge] title write retry skipped: ${l(d)}`);
    });
}
function m(i, n, e, r) {
    return i.entries.get(e) === n && n.lastSentTitle === r && !n.lastSentOk && !n.inFlight && !n.pending && !n.retryTimer;
}
function S(i, n, e) {
    let r = c(i, n);
    r.lastSentTitle = e;
    r.lastSentOk = true;
    r.knownTitles.add(e);
    a(r);
    p(r);
}
function R(i, n) {
    let e = i.entries.get(n);
    if (!e) {
        return;
    }
    if (e.timer) {
        clearTimeout(e.timer);
    }
    a(e);
    p(e);
    i.entries.delete(n);
}
function p(i) {
    g(i.pending?.waiters);
    i.pending = undefined;
    i.sendingRetry = false;
    i.suppressed = 0;
}
function a(i) {
    if (i.retryTimer) {
        clearTimeout(i.retryTimer);
        i.retryTimer = undefined;
    }
}
function g(i) {
    for (let n of i ?? []){
        n();
    }
}
function y(i, n, e) {
    if (i.lastSentTitle !== n) {
        return false;
    }
    if (i.inFlight || i.retryTimer !== undefined) {
        return true;
    }
    return i.lastSentOk && !e?.userInitiated;
}
export { Pun };
