import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { Hn, Er } from "/$bunfs/root/chunk-zby5bms5.js";
import { F$t, XYn, on, nt } from "/$bunfs/root/chunk-8524cxt8.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { qt, le, Te, P, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { $us } from "/$bunfs/root/chunk-xyr83dxa.js";
N();
function K0() {
    return $us();
}
function zYn() {
    return K0();
}
function I() {
    return {
        clearTimer: {
            current: null
        },
        mountCount: {
            current: 0
        }
    };
}
function GXe(o, n) {
    let s = o.current?.key === n;
    let p = o.queue.some((i)=>i.key === n);
    let d = o.pinned.some((i)=>i.key === n);
    if (!s && !p && !d) {
        return o;
    }
    return {
        current: s ? null : o.current,
        queue: o.queue.filter((i)=>i.key !== n),
        pinned: d ? o.pinned.filter((i)=>i.key !== n) : o.pinned
    };
}
function hj(o) {
    return o.diffPanelVisible || o.paneHoldsToasts;
}
function cve(o, n) {
    return o !== null && (!n || o.exemptFromDiffPanelHold === true);
}
const S = 8000;
const R = qt(null);
function GYn(o) {
    let p = w(3);
    let { children } = o;
    let [s] = y(I);
    let d;
    if (p[0] !== children || p[1] !== s) {
        d = e(R.Provider, {
            value: s,
            children
        });
        p[0] = children;
        p[1] = s;
        p[2] = d;
    } else {
        d = p[2];
    }
    return d;
}
function T({ presentationContext, isScreenReaderEnabled }) {
    return zYn() && !isScreenReaderEnabled && XYn(presentationContext) === "fullscreen";
}
function D(o) {
    return "queue";
}
function Eo() {
    let o = Er();
    let n = Hn();
    let s = on();
    let p = Te(R);
    let [d] = y(()=>({
            clearTimer: {
                current: null
            },
            mountCount: {
                current: 0
            }
        }));
    let { clearTimer, mountCount } = p ?? d;
    let presentationContext = Te(F$t);
    let isScreenReaderEnabled = nt();
    let processQueue = le(()=>{
        let a = T({
            presentationContext,
            isScreenReaderEnabled
        });
        n((r)=>{
            let t = a ? r.notifications.queue.filter((c)=>D(c.key) === "queue") : r.notifications.queue;
            let u = t.length === r.notifications.queue.length ? r : {
                ...r,
                notifications: {
                    ...r.notifications,
                    queue: t
                }
            };
            let f = F(hj(u) ? u.notifications.queue.filter((c)=>c.exemptFromDiffPanelHold) : u.notifications.queue);
            if (!f) {
                return u;
            }
            let m = u.notifications.current !== null && f.priority === "immediate" && f.heldDuringDiffPanel === true && u.notifications.current.priority !== "immediate" ? u.notifications.current : null;
            if (u.notifications.current !== null && m === null) {
                return u;
            }
            let f_key = f.key;
            clearTimer.current?.();
            clearTimer.current = s.setTimeout(()=>{
                clearTimer.current = null;
                n((c)=>{
                    if (c.notifications.current?.key !== f_key) {
                        return c;
                    }
                    return {
                        ...c,
                        notifications: {
                            ...c.notifications,
                            current: null
                        }
                    };
                });
                processQueue();
            }, f.timeoutMs ?? S);
            return {
                ...u,
                notifications: {
                    ...u.notifications,
                    queue: [
                        ...m !== null && C(m, f) ? [
                            m
                        ] : [],
                        ...u.notifications.queue.filter((c)=>c !== f)
                    ],
                    current: f.heldDuringDiffPanel ? {
                        ...f,
                        heldDuringDiffPanel: undefined
                    } : f
                }
            };
        });
    }, [
        n,
        clearTimer,
        s,
        presentationContext,
        isScreenReaderEnabled
    ]);
    let addNotification = le((a)=>{
        if (T({
            presentationContext,
            isScreenReaderEnabled
        }) && D(a.key) === "suppress") {
            return;
        }
        if (a.pinned) {
            n((t)=>{
                if (t.notifications.pinned.some((u)=>u.key === a.key)) {
                    return t;
                }
                return {
                    ...t,
                    notifications: {
                        ...t.notifications,
                        pinned: [
                            ...t.notifications.pinned,
                            a
                        ]
                    }
                };
            });
            return;
        }
        if (a.priority === "immediate" && a.waitsItsTurn !== true && !hj(o.getState())) {
            if (clearTimer.current) {
                clearTimer.current();
                clearTimer.current = null;
            }
            clearTimer.current = s.setTimeout(()=>{
                clearTimer.current = null;
                n((t)=>{
                    if (t.notifications.current?.key !== a.key) {
                        return t;
                    }
                    return {
                        ...t,
                        notifications: {
                            ...t.notifications,
                            queue: t.notifications.queue.filter((u)=>!a.invalidates?.includes(u.key)),
                            current: null
                        }
                    };
                });
                processQueue();
            }, a.timeoutMs ?? S);
            n((t)=>({
                    ...t,
                    notifications: {
                        ...t.notifications,
                        current: a,
                        queue: [
                            ...t.notifications.current ? [
                                t.notifications.current
                            ] : [],
                            ...t.notifications.queue
                        ].filter((u)=>C(u, a))
                    }
                }));
            return;
        }
        let r = a.priority === "immediate" ? {
            ...a,
            heldDuringDiffPanel: true
        } : a;
        n((t)=>{
            if (r.fold && t.notifications.current?.key === r.key) {
                let c = r.fold(t.notifications.current, r);
                if (clearTimer.current) {
                    clearTimer.current();
                    clearTimer.current = null;
                }
                let q = c.key;
                clearTimer.current = s.setTimeout(()=>{
                    clearTimer.current = null;
                    n((g)=>{
                        if (g.notifications.current?.key !== q) {
                            return g;
                        }
                        return {
                            ...g,
                            notifications: {
                                ...g.notifications,
                                current: null
                            }
                        };
                    });
                    processQueue();
                }, c.timeoutMs ?? S);
                return {
                    ...t,
                    notifications: {
                        ...t.notifications,
                        current: c
                    }
                };
            }
            let u = r.fold ? t.notifications.queue.findIndex((c)=>c.key === r.key) : -1;
            if (r.fold && u !== -1) {
                let c = r.fold(t.notifications.queue[u], r);
                let q = [
                    ...t.notifications.queue
                ];
                q[u] = c;
                return {
                    ...t,
                    notifications: {
                        ...t.notifications,
                        queue: q
                    }
                };
            }
            if (!(!new Set(t.notifications.queue.map((c)=>c.key)).has(r.key) && t.notifications.current?.key !== r.key)) {
                return t;
            }
            let x = t.notifications.current !== null && r.invalidates?.includes(t.notifications.current.key);
            if (x && clearTimer.current) {
                clearTimer.current();
                clearTimer.current = null;
            }
            return {
                ...t,
                notifications: {
                    ...t.notifications,
                    current: x ? null : t.notifications.current,
                    queue: [
                        ...t.notifications.queue.filter((c)=>C(c, r)),
                        r
                    ]
                }
            };
        });
        processQueue();
    }, [
        n,
        processQueue,
        clearTimer,
        s,
        presentationContext,
        isScreenReaderEnabled
    ]);
    let removeNotification = le((a)=>{
        n((r)=>{
            let notifications = GXe(r.notifications, a);
            if (notifications === r.notifications) {
                return r;
            }
            if (r.notifications.current?.key === a && clearTimer.current) {
                clearTimer.current();
                clearTimer.current = null;
            }
            return {
                ...r,
                notifications
            };
        });
        processQueue();
    }, [
        n,
        processQueue,
        clearTimer
    ]);
    P(()=>{
        mountCount.current++;
        if (o.getState().notifications.queue.length > 0) {
            processQueue();
        }
        return ()=>{
            mountCount.current--;
            if (mountCount.current === 0 && clearTimer.current) {
                clearTimer.current();
                clearTimer.current = null;
            }
        };
    }, []);
    return {
        addNotification,
        removeNotification,
        processQueue
    };
}
const Wmt = {
    immediate: 0,
    high: 1,
    medium: 2,
    low: 3
};
function C(o, n) {
    return (o.priority !== "immediate" || o.requeueOnPreempt === true || o.heldDuringDiffPanel === true) && !n.invalidates?.includes(o.key);
}
function F(o) {
    if (o.length === 0) {
        return;
    }
    return o.reduce((acc, item)=>{
        if (Wmt[item.priority] < Wmt[acc.priority]) {
            return item;
        }
        return acc;
    });
}
export { K0, zYn, GXe, hj, cve, GYn, Eo, Wmt };
