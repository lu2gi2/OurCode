import { q, cr } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { ZP, Zw } from "/$bunfs/root/chunk-p2nmcfaz.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { is } from "/$bunfs/root/chunk-972pd37y.js";
import { hc } from "/$bunfs/root/chunk-223dyewd.js";
import { XTo } from "/$bunfs/root/chunk-2d9a83dh.js";
import { vr, rA } from "/$bunfs/root/chunk-7mawjt4q.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { oRr } from "/$bunfs/root/chunk-3yz9zdww.js";
import { eu, Ae, ce, Xi, Lm } from "/$bunfs/root/chunk-0ycjphb5.js";
import { _M, T2, VRn, rkt, jts, acr, RYt, A$, XRn, qDe } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { V } from "/$bunfs/root/chunk-zby5bms5.js";
import { vYe } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { qt, Te, P, Z, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { n, Wt } from "/$bunfs/root/chunk-8524cxt8.js";
import { ql } from "/$bunfs/root/chunk-snyys9as.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { QJ, Vrt } from "/$bunfs/root/chunk-1evd9xcd.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { S } from "/$bunfs/root/chunk-cj4xndke.js";
import { homedir } from "os";
import { isAbsolute, sep, resolve, win32 } from "path";
N();
const j = 400;
const R4n = 150;
const de = 2000;
const I = {
    hunks: new Map,
    skippedLarge: new Set
};
async function K(t, r, o) {
    try {
        let result = await VRn(t, o, r);
        if (o?.aborted) {
            return null;
        }
        if (result === null) {
            f("repl_diff_read", "git_diff_failed");
            return null;
        }
        let hunks = result.stats.filesCount === 0 ? I : await jts(o, rkt(result));
        if (o?.aborted) {
            return null;
        }
        if (hunks === null) {
            f("repl_diff_read", "git_hunks_failed");
        } else {
            g("repl_diff_read");
        }
        return {
            result,
            hunks
        };
    } catch (error) {
        if (o?.aborted) {
            return null;
        }
        c(error);
        f("repl_diff_read", "git_diff_threw");
        return null;
    }
}
class z {
    #e = null;
    set(baseMode, refreshKey, round, at) {
        this.#e = {
            baseMode,
            refreshKey,
            round,
            at
        };
    }
    take(t, r) {
        let o = this.#e;
        if (o === null) {
            return;
        }
        if (r - o.at > de) {
            this.#e = null;
            return;
        }
        if (o.baseMode !== t) {
            return;
        }
        this.#e = null;
        return {
            round: o.round,
            refreshKey: o.refreshKey
        };
    }
    get isPrimed() {
        return this.#e !== null;
    }
}
const X = new q(()=>new z);
async function Acn(t, r, o, s) {
    let i = await K(t, r, s);
    if (s?.aborted) {
        return;
    }
    X.of(t).set(r, o, i && {
        result: i.result,
        baseMode: r,
        hunks: i.hunks ?? I
    }, Date.now());
}
function x4n(t = 0, r = true, o = "auto") {
    let i = Te(Zw)?.setTimeout ?? ZP;
    let a = is();
    let [u] = y(()=>{
        if (r) {
            return X.of(a).take(o, Date.now());
        }
    });
    let [p, D] = y(u?.round ?? null);
    let [k, M] = y(u === undefined);
    let L = R(u !== undefined);
    let U = R(u !== undefined && u.refreshKey === t);
    let [ae, fe] = y(0);
    P(()=>XTo(()=>fe((_)=>_ + 1)), []);
    P(()=>{
        if (!r) {
            return;
        }
        if (U.current) {
            U.current = false;
            return;
        }
        let _ = false;
        let C = new AbortController;
        async function G() {
            let b = await K(a, o, C.signal);
            if (_) {
                return;
            }
            if (b !== null) {
                let h = rkt(b.result);
                D((A)=>({
                        result: b.result,
                        baseMode: o,
                        hunks: b.hunks ?? (A !== null && rkt(A.result) === h ? A.hunks : I)
                    }));
            }
            L.current = true;
            M(false);
        }
        let x = i(G, L.current || t !== 0 ? R4n : 0);
        return ()=>{
            _ = true;
            x();
            C.abort();
        };
    }, [
        t,
        r,
        ae,
        o,
        a
    ]);
    return Z(()=>{
        if (!p) {
            return {
                stats: null,
                files: [],
                hunks: new Map,
                loading: r && k,
                source: {
                    kind: "working-tree"
                },
                baseMode: o
            };
        }
        let { stats, perFileStats, source } = p.result;
        let files = [];
        for (let [b, h] of perFileStats){
            let isUntracked = h.isUntracked;
            let W = p.hunks.skippedLarge.has(b);
            let le = h.added + h.removed;
            let isTruncated = !W && !h.isBinary && le > j;
            files.push({
                path: b,
                linesAdded: h.added,
                linesRemoved: h.removed,
                isBinary: h.isBinary,
                isLargeFile: W,
                isTruncated,
                isUntracked,
                preSession: h.preSession
            });
        }
        files.sort((b, h)=>b.path.localeCompare(h.path));
        return {
            stats,
            files,
            hunks: p.hunks.hunks,
            loading: false,
            source,
            baseMode: p.baseMode,
            noCommits: p.result.noCommits
        };
    }, [
        p,
        k,
        r,
        o
    ]);
}
function T(loading) {
    return {
        stats: null,
        files: [],
        hunks: new Map,
        loading,
        source: {
            kind: "working-tree"
        },
        baseMode: "auto"
    };
}
function pe(diff) {
    let r = new Set(diff.skippedLarge);
    let o = new Set(diff.restricted);
    let files = diff.perFileStats.map((i)=>{
        let a = r.has(i.path);
        return {
            path: i.path,
            linesAdded: i.added,
            linesRemoved: i.removed,
            isBinary: i.isBinary,
            isLargeFile: a,
            isTruncated: !a && !i.isBinary && i.added + i.removed > j,
            isUntracked: i.isUntracked,
            isRestricted: o.has(i.path)
        };
    }).sort((i, a)=>i.path.localeCompare(a.path));
    return {
        stats: diff.stats,
        files,
        hunks: new Map(diff.hunks.map((i)=>[
                i.path,
                i.hunks
            ])),
        loading: false,
        source: diff.source,
        baseMode: "branch-point"
    };
}
function me(t) {
    let [r, o] = y(()=>({
            data: T(t),
            notice: null
        }));
    P(()=>{
        if (!t) {
            return;
        }
        let s = vr();
        if (!s || !rA("controlChannel")) {
            f("remote_workspace_diff_fetch", "no_channel");
            o({
                data: T(false),
                notice: "Workspace changes aren't available over this connection — showing per-turn changes only"
            });
            return;
        }
        let i = false;
        s.sendControlRequest({
            subtype: "get_workspace_diff"
        }).then((a)=>{
            if (i) {
                return;
            }
            g("remote_workspace_diff_fetch");
            o({
                data: a.diff ? pe(a.diff) : T(false),
                notice: null
            });
        }).catch((a)=>{
            if (i) {
                return;
            }
            let u = l(a);
            let p = u.includes("Unsupported control request subtype") ? "unsupported_subtype" : T2(a);
            if (p === "unsupported_subtype") {
                f("remote_workspace_diff_fetch", p);
            } else {
                m("remote_workspace_diff_fetch", p);
            }
            o({
                data: T(false),
                notice: p === "unsupported_subtype" ? "The remote workspace is running an older Claude Code version that cannot report workspace changes — showing per-turn changes only" : a instanceof _M ? "Timed out fetching workspace changes — showing per-turn changes only" : p === "disconnected" || p === "not_connected" ? "Lost the connection to the cloud session — showing per-turn changes only" : p === "not_delivered" ? "Couldn't reach the cloud session — showing per-turn changes only" : `Couldn't fetch workspace changes: ${u}`
            });
        });
        return ()=>{
            i = true;
        };
    }, [
        t
    ]);
    return r;
}
function sDr(t) {
    let data = x4n(0, !t);
    let o = me(t);
    if (t) {
        return o;
    }
    return {
        data,
        notice: null
    };
}
class Y {
    lastLoggedSessionId = null;
    autoOpenPending = false;
}
const KNt = new q(()=>new Y);
const SLo = new q(()=>({
        lastLoggedSessionId: null
    }));
const Ccn = new q(()=>ze({
        cycled: false
    }, (t)=>{
        t.cycled = false;
    }));
const text = "The diff panel shows git changes — the current directory isn’t in a git repository";
const iDr = "The diff panel isn’t available right now — run /diff again to see your changes";
function aDr(t) {
    KNt.of(t).autoOpenPending = true;
}
function wLo(t) {
    let r = KNt.of(t);
    let r_autoOpenPending = r.autoOpenPending;
    r.autoOpenPending = false;
    return r_autoOpenPending;
}
function J(t) {
    KNt.of(t).autoOpenPending = false;
}
function Rcn() {
    return acr();
}
function P4n({ enabled, fullscreen, columns, isThinClient, isMainFocused, hasGitRepo }) {
    return enabled && fullscreen && !isThinClient && isMainFocused && columns >= QJ && hasGitRepo;
}
function lDr(t) {
    let diffSidebarOpen = ce().diffSidebarOpen;
    if (diffSidebarOpen === false) {
        return false;
    }
    return t >= (diffSidebarOpen === true ? QJ : Vrt) && Rcn();
}
function Q(host, setAppState, o, storageV5) {
    let replTab = o === "diff" ? "convo" : "diff";
    J(host);
    setAppState((u)=>{
        if (u.replTab === replTab && u.panelFileView === null) {
            return u;
        }
        return {
            ...u,
            replTab,
            panelFileView: null
        };
    });
    let diffSidebarOpen = replTab === "diff";
    if (ce().diffSidebarOpen !== diffSidebarOpen) {
        Ae((u)=>({
                ...u,
                diffSidebarOpen
            }), storageV5);
    }
    g("repl_tab_switch", {
        tab: d(replTab)
    });
    return replTab;
}
async function ge(host, getReplTab, setAppState, trackSequence, storageV5) {
    await Acn(host, YNt(), trackSequence);
    if (getReplTab() === "diff") {
        return;
    }
    Q(host, setAppState, "convo", storageV5);
}
const Se = "Diff panel shown";
const De = "Diff panel hidden";
const vLo = 2000;
function ELo(t) {
    switch(t.status){
        case "shown":
            return Se;
        case "hidden":
            return De;
        case "refused":
            return t.text;
    }
}
function xcn({ host, getReplTab, setAppState, columns, trackSequence, storageV5 }) {
    if (getReplTab() === "diff") {
        Q(host, setAppState, "diff", storageV5);
        return {
            status: "hidden"
        };
    }
    if (!qDe()) {
        return {
            status: "refused",
            reason: "unavailable",
            text: iDr
        };
    }
    if (!Rcn()) {
        return {
            status: "refused",
            reason: "no-git",
            text
        };
    }
    if (columns < QJ) {
        return {
            status: "refused",
            reason: "too-narrow",
            text: `Resize your terminal to at least ${QJ} columns to show the diff panel`
        };
    }
    return {
        status: "shown",
        settled: ge(host, getReplTab, setAppState, trackSequence, storageV5).catch(c)
    };
}
function mIe(t, r) {
    J(t);
    r((o)=>{
        if (o.replTab === "convo" && o.panelFileView === null) {
            return o;
        }
        return {
            ...o,
            replTab: "convo",
            panelFileView: null
        };
    });
}
function cDr(t, r, o) {
    mIe(t, r);
    if (ce().diffSidebarOpen !== false) {
        Ae((s)=>({
                ...s,
                diffSidebarOpen: false
            }), o);
    }
    g("repl_tab_switch", {
        tab: d("convo")
    });
}
const v = [
    "session",
    "uncommitted",
    "branch"
];
function YNt() {
    let diffSidebarBaseMode = Xi().diffSidebarBaseMode;
    if (diffSidebarBaseMode === "uncommitted" || diffSidebarBaseMode === "branch") {
        return diffSidebarBaseMode;
    }
    return "session";
}
function dDr(t, r) {
    let diffSidebarBaseMode = v[(v.indexOf(t) + 1) % v.length] ?? "session";
    Lm((s)=>{
        if (s.diffSidebarBaseMode === diffSidebarBaseMode) {
            return s;
        }
        return {
            ...s,
            diffSidebarBaseMode
        };
    }, r);
    g("repl_diff_base_switch", {
        mode: d(diffSidebarBaseMode)
    });
    return diffSidebarBaseMode;
}
N();
const ee = ()=>({
        isSidebarOn: qDe(),
        isOwnedByPlugin: XRn()
    });
function uDr() {
    let [t, r] = y(ee);
    let o = ql();
    let s = V((i)=>i.panelFileView !== null);
    P(()=>{
        let i = ()=>r((p)=>{
                let D = ee();
                if (p.isSidebarOn === D.isSidebarOn && p.isOwnedByPlugin === D.isOwnedByPlugin) {
                    return p;
                }
                return D;
            });
        i();
        let a = eu(i);
        let u = RYt(i);
        return ()=>{
            a();
            u();
        };
    }, [
        o
    ]);
    return t.isSidebarOn && (s || !t.isOwnedByPlugin);
}
N();
function te(t) {
    return vYe(we(t));
}
function we(t) {
    let r = cr();
    let o = O() === "windows";
    let s = o ? win32.sep : sep;
    let i = (D)=>{
        if (o) {
            return D.replaceAll("/", s).toLowerCase();
        }
        return D;
    };
    let a = i(t);
    let u = i(r);
    if (a.length !== t.length || u.length !== r.length) {
        return t;
    }
    if (a === u) {
        return "";
    }
    let p = u.endsWith(s) ? u : u + s;
    if (a.startsWith(p)) {
        return t.slice(p.length);
    }
    return t;
}
function H(filePath) {
    if (O() === "windows") {
        return win32.isAbsolute(filePath) && win32.parse(filePath).root.length > 1;
    }
    return isAbsolute(filePath);
}
const Pcn = qt(null);
function Kw(t) {
    let a = w(9);
    let { filePath, children } = t;
    let s = Te(Pcn);
    let i = children ?? filePath;
    if (E(filePath) || typeof i === "string" && E(i)) {
        let u;
        if (a[0] === S) {
            u = e(n, {
                dimColor: true,
                children: oRr
            });
            a[0] = u;
        } else {
            u = a[0];
        }
        return u;
    }
    let u;
    if (a[1] !== s || a[2] !== i) {
        u = s !== null && typeof i === "string" ? hc(i, s) : i;
        a[1] = s;
        a[2] = i;
        a[3] = u;
    } else {
        u = a[3];
    }
    let children_1 = u;
    let D;
    if (a[4] !== filePath) {
        D = H(filePath) ? A$(filePath) : null;
        a[4] = filePath;
        a[5] = D;
    } else {
        D = a[5];
    }
    let url = D;
    let M;
    if (a[6] !== children_1 || a[7] !== url) {
        M = url === null ? e(n, {
            children: children_1
        }) : e(Wt, {
            url,
            children: children_1
        });
        a[6] = children_1;
        a[7] = url;
        a[8] = M;
    } else {
        M = a[8];
    }
    return M;
}
function E(t) {
    let r = xe(t);
    if (isAbsolute(r)) {
        return te(r);
    }
    return vYe(r);
}
function xe(t) {
    if (t === "~") {
        return homedir();
    }
    if (t.startsWith(`~${sep}`)) {
        return homedir() + t.slice(1);
    }
    return t;
}
export { R4n, Acn, x4n, sDr, KNt, SLo, Ccn, iDr, aDr, wLo, Rcn, P4n, lDr, vLo, ELo, xcn, mIe, cDr, YNt, dDr, uDr, Pcn, Kw };
