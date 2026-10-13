import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { A0n, st } from "/$bunfs/root/chunk-45f0zf8d.js";
import { we } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { Me } from "/$bunfs/root/chunk-b97fvbrv.js";
import { er, SSr, jPt, fY, Aoe, rP, olt, Dde } from "/$bunfs/root/chunk-30jbnw20.js";
import { LE } from "/$bunfs/root/chunk-nbx3tg29.js";
import { Ss } from "/$bunfs/root/chunk-17w0r6ry.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { ur } from "/$bunfs/root/chunk-2d9a83dh.js";
import { Az } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { yd, Pi, uR, zc, _r } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { lH, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { ja, Um } from "/$bunfs/root/chunk-hz24p3zh.js";
import { CM } from "/$bunfs/root/chunk-7xekr000.js";
import { bl } from "/$bunfs/root/chunk-4521ay78.js";
import { lB } from "/$bunfs/root/chunk-jc71z2z2.js";
import { M3t } from "/$bunfs/root/chunk-a5rabwn2.js";
import { t5, QJ, Vrt } from "/$bunfs/root/chunk-1evd9xcd.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { o, u } from "/$bunfs/root/chunk-smx21d0k.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { Mr } from "/$bunfs/root/chunk-cj4xndke.js";
import { dirname, resolve, join, isAbsolute, win32 } from "path";
import { mkdir, utimes, copyFile, link, unlink, writeFile, readFile } from "fs/promises";
import { createHash, randomUUID } from "crypto";
import { constants } from "fs";
function ie() {
    let e = new Map;
    let r = new Set;
    let list = ()=>[
            ...e.values()
        ];
    let i = Oe();
    return {
        attach: (s)=>{
            let a = e.get(s.clientId);
            r.delete(s.clientId);
            if (a === undefined) {
                e.set(s.clientId, s);
                return true;
            }
            if (s.viewport !== undefined || s.answers !== undefined) {
                e.set(s.clientId, {
                    ...a,
                    ...s.viewport !== undefined && {
                        viewport: {
                            ...a.viewport,
                            ...s.viewport
                        }
                    },
                    ...s.answers !== undefined && {
                        answers: s.answers
                    }
                });
            }
            return false;
        },
        detach: (s)=>{
            let a = e.get(s);
            e.delete(s);
            r.delete(s);
            i.emit(s);
            return a;
        },
        hasSurface: (s)=>list().some((a)=>a.surface === s),
        list,
        surfaces: ()=>D(list().map((s)=>s.surface)),
        onDetach: (s)=>i.subscribe(s),
        missed: (s)=>{
            if (e.has(s)) {
                r.add(s);
            }
        },
        heard: (s)=>void r.delete(s),
        isSilent: (s)=>r.has(s)
    };
}
const mv = ze(ie(), (e)=>{
    for (let r of e.list()){
        e.detach(r.clientId);
    }
});
const MIn = ()=>mv.list().filter((e)=>e.viewport?.isFullscreen !== undefined);
const Ri = ze(()=>st().panes, (e)=>e().setState(()=>A0n));
const Iye = (e)=>[
        ...e.open,
        ...e.unplaced
    ];
const m3t = ze(Ss(), (e)=>e.set(undefined));
const g3t = ze(Ss(), (e)=>e.set(undefined));
const h3t = ze(Ss(), (e)=>e.set(undefined));
const NTt = (e, r)=>`${e}\x00${r}`;
function $Tt(e, r) {
    return h3t.get()?.get(NTt(e, r)) ?? 0;
}
function Wrt(e, r) {
    let n = new Map(e);
    for (let i of r){
        n.delete(i);
    }
    return n;
}
function Uno(e, r) {
    let n = NTt(e, r);
    let i = $Tt(e, r) + 1;
    m3t.set(Wrt(m3t.get() ?? new Map, [
        n
    ]));
    g3t.set(Wrt(g3t.get() ?? new Map, [
        n
    ]));
    h3t.set(new Map(h3t.get()).set(n, i));
}
function V(e, r) {
    let open = e.open.filter((c)=>!r(c));
    let unplaced = e.unplaced.filter((c)=>!r(c));
    if (open.length === e.open.length && unplaced.length === e.unplaced.length) {
        return e;
    }
    let a = new Set([
        ...open,
        ...unplaced
    ].map((c)=>c.id));
    let m = (c)=>{
        if (a.has(c ?? "")) {
            return c;
        }
        return null;
    };
    return {
        open,
        unplaced,
        asked: e.asked,
        shownId: m(e.shownId) ?? open.at(-1)?.id ?? null,
        focusedId: m(e.focusedId),
        focusRequest: m(e.focusRequest),
        placements: e.placements,
        closing: e.closing.filter((c)=>a.has(c))
    };
}
function y3t(e) {
    Ri().setState((r)=>V(r, (n)=>n.id === e));
    Uno("Pane", e);
}
const f3t = (plugin, id)=>({
        plugin,
        id
    });
function h(e, r) {
    return e.asked.some((n)=>n.id === r.id && n.plugin === r.plugin);
}
const LTt = ()=>join(ve(), "dev-mods");
function ace(e) {
    let { name, marketplace } = zc(e);
    return marketplace === Pi && LE(name) !== undefined;
}
function JJ({ pluginStorageId, pluginRoot }) {
    let { name, marketplace } = zc(pluginStorageId);
    let s = _r(pluginStorageId);
    let a = [
        ...lB() ?? []
    ].some((I)=>_r(I) === s);
    let m = dirname(resolve(pluginRoot));
    let x = [
        m,
        dirname(m)
    ].includes(LTt()) ? "dev_mods" : "plugin_dir";
    let A = a ? "managed" : marketplace === yd ? x : "installed";
    let k = ace(pluginStorageId) ? "builtin" : A;
    return {
        provenance: d(k),
        ...M3t(name, marketplace, a ? new Set([
            name
        ]) : null)
    };
}
const W = 64;
const G = p(()=>u({
        plugin: o(),
        id: o()
    }));
function C(e) {
    let r = e.pluginPanes?.asked;
    if (Array.isArray(r)) {
        return r.flatMap((n)=>{
            let i = G().safeParse(n);
            if (i.success) {
                return [
                    i.data
                ];
            }
            return [];
        });
    }
    return [];
}
const q = (e, asked)=>({
        ...e,
        pluginPanes: {
            ...e.pluginPanes,
            asked
        }
    });
function P(e, r) {
    let n = r === "asked";
    let i = false;
    lH((s)=>{
        let a = C(s);
        let m = a.filter((c)=>c.plugin !== e.plugin || c.id !== e.id);
        i = m.length < a.length !== n;
        if (i) {
            return q(s, n ? [
                ...m,
                f3t(e.plugin, e.id)
            ].slice(-W) : m);
        }
        return s;
    }).then((s)=>{
        if (i) {
            let a = t5(e.plugin);
            let m = a && JJ(a);
            if (s) {
                g("plugin_function_hooks_pane_ask", m);
            } else {
                f("plugin_function_hooks_pane_ask", "not_persisted", m);
            }
        }
    });
}
function Q(e) {
    Ri().setState((r)=>{
        if (h(r, e)) {
            return {
                ...r,
                asked: r.asked.filter((n)=>n.plugin !== e.plugin || n.id !== e.id)
            };
        }
        return r;
    });
    P(e, "dismissed");
}
function M(e, r, n) {
    if (r.kind === "person" && n !== undefined) {
        Q(f3t(n, e));
    }
}
async function zrt(id, origin) {
    let n = Ri().getState();
    let i = n.closing.includes(id);
    let s = origin.kind === "unload";
    let a = Iye(n).find((x)=>x.id === id)?.plugin;
    let m = false;
    if (s) {
        y3t(id);
    }
    if (i) {
        return;
    }
    let handlers = CM("ui.close").filter((x)=>!s || x.name !== a);
    if (handlers.length === 0) {
        y3t(id);
        M(id, origin, a);
        return;
    }
    if (!s) {
        Ri().setState((x)=>({
                ...x,
                closing: [
                    ...x.closing,
                    id
                ]
            }));
    }
    try {
        let x = await rP({
            e: {
                id,
                origin
            },
            handlers,
            site: Aoe("ui.close"),
            bottom: (k)=>{
                if (k.id !== id || Ri().getState().closing.includes(id)) {
                    y3t(k.id);
                    m = k.id === id;
                }
                return Promise.resolve({
                    value: undefined
                });
            }
        });
        let w = Ri().getState();
        if (w.closing.includes(id) && Iye(w).some((k)=>k.id === id)) {
            t(`ui.close ${id} (${origin.kind}): kept open by a hook` + (x.deny === undefined ? "" : ` (${x.deny})`));
        }
    } catch (error) {
        t(`ui.close ${id} (${origin.kind}): the chain failed: ` + l(error), {
            level: "error"
        });
    } finally{
        Ri().setState((x)=>{
            if (x.closing.includes(id)) {
                return {
                    ...x,
                    closing: x.closing.filter((w)=>w !== id)
                };
            }
            return x;
        });
        if (m) {
            M(id, origin, a);
        }
    }
}
const e5 = (e)=>Ri().setState((r)=>{
        let n = e === null || r.open.some((m)=>m.id === e);
        let focusedId = n ? e : r.focusedId;
        let s = n && e !== null ? e : r.shownId;
        if (r.focusedId === focusedId && r.shownId === s && r.focusRequest === null) {
            return r;
        }
        return {
            ...r,
            focusedId,
            shownId: s,
            focusRequest: null
        };
    });
const Xur = new RegExp(`[${fY.escape}${fY.loneSurrogate}${fY.placeholder}]`, "u");
const YC = (e)=>Xur.test(e);
const Zur = (e)=>Ri().setState((r)=>{
        if (r.shownId === e || !r.open.some((i)=>i.id === e)) {
            return r;
        }
        return {
            ...r,
            shownId: e,
            focusedId: r.focusedId === null ? null : e
        };
    });
const NI = {};
Mr(NI, {
    ASKED_MAX: ()=>W,
    ASKED_ROW_SCHEMA: ()=>G,
    EMPTY_PANES: ()=>A0n,
    PANE_ID_MAX: ()=>SSr,
    askedLatch: ()=>H,
    askedPaneOf: ()=>f3t,
    closePane: ()=>y3t,
    closePanesOf: ()=>gis,
    cycledPaneId: ()=>his,
    default: ()=>NI,
    everyPane: ()=>Iye,
    focusPane: ()=>e5,
    forgetAsked: ()=>Q,
    forgetDismissed: ()=>M,
    hasAsked: ()=>h,
    isToastHoldShown: ()=>Bno,
    keepAsked: ()=>P,
    keptAsked: ()=>C,
    nextPaneId: ()=>jno,
    offerPlacement: ()=>_3t,
    openFloor: ()=>O,
    openPane: ()=>yis,
    paneCloseProblem: ()=>_is,
    paneIdProblem: ()=>jPt,
    paneManners: ()=>J,
    paneOpenProblem: ()=>Sis,
    panesOf: ()=>wis,
    panesStore: ()=>Ri,
    placeWaiting: ()=>vis,
    placeWaitingRemote: ()=>Jur,
    placedPanes: ()=>T,
    placementAtOpen: ()=>Y,
    raiseClose: ()=>zrt,
    rememberAsked: ()=>Eis,
    remotePlacement: ()=>HIn,
    seedAsked: ()=>E,
    settleFocusRequest: ()=>Qur,
    showPane: ()=>Zur,
    shownPane: ()=>FTt,
    withKeptAsked: ()=>q,
    withoutPane: ()=>V
});
var H = ze(Ss(), (e)=>e.set(undefined));
function gis(e) {
    let r = Iye(Ri().getState());
    for (let n of r){
        if (n.plugin === e) {
            zrt(n.id, {
                kind: "unload"
            });
        }
    }
}
function his(e, r) {
    let length = e.open.length;
    let i = e.open.findIndex((a)=>a.id === e.shownId);
    if (length > 1 && i >= 0) {
        return e.open[(i + r + length) % length]?.id ?? null;
    }
    return null;
}
var FTt = (e)=>e.open.find((r)=>r.id === e.shownId);
var Bno = (e)=>e.placements > 0 && FTt(e)?.holdToasts === true;
function jno(e) {
    let r = e.open.findIndex((n)=>n.id === e.focusedId);
    return e.open[r + 1]?.id ?? null;
}
function _3t() {
    Ri().setState((e)=>({
            ...e,
            placements: e.placements + 1
        }));
    return ()=>Ri().setState((e)=>({
                ...e,
                placements: e.placements - 1
            }));
}
var O = (e, r)=>{
    if (h(e, r)) {
        return QJ;
    }
    return Vrt;
};
var Z3 = ze(Ss(), (e)=>e.set(undefined));
function J(e) {
    return {
        ...e.closeOnEscape && {
            closeOnEscape: e.closeOnEscape
        },
        ...e.holdToasts && {
            holdToasts: e.holdToasts
        },
        ...e.rows !== undefined && {
            rows: e.rows
        },
        ...e.columns !== undefined && {
            columns: e.columns
        }
    };
}
function T(e, r, focusRequest) {
    let i = e.open.some((a)=>a.id === r.id);
    let s = e.open.map((a)=>{
        if (a.id === r.id) {
            return {
                ...r,
                plugin: a.plugin
            };
        }
        return a;
    });
    return {
        open: i ? s : [
            ...e.open,
            r
        ],
        unplaced: e.unplaced.filter((a)=>a.id !== r.id),
        asked: e.asked,
        shownId: i ? e.shownId : e.focusedId ?? r.id,
        focusedId: e.focusedId,
        focusRequest,
        placements: e.placements,
        closing: e.closing
    };
}
function fe() {
    return mv.list().filter((e)=>e.viewport !== undefined);
}
function HIn() {
    let e = fe();
    if (e.length === 0) {
        return;
    }
    if (MIn().length > 0) {
        return {
            isPlaced: true
        };
    }
    return {
        isPlaced: false,
        reason: `no attached surface places panes (${e.map((n)=>n.clientId).join(", ")}): placed when a surface that does attaches, or once they detach`
    };
}
function Y(e, r, n) {
    let i = Z3.get()?.columns;
    let s = O(e, r);
    if (i === undefined) {
        return HIn() ?? {
            isPlaced: true
        };
    }
    if (n || i >= s) {
        return {
            isPlaced: true
        };
    }
    return {
        isPlaced: false,
        reason: `unasked below ${s} columns (${i} now${s === QJ ? ", an id the person opened before" : ""}): placed when the person opens it, or when the terminal is widened to ${s} columns`
    };
}
function E() {
    if (H.get()) {
        return;
    }
    H.set(true);
    let e = C(ce());
    if (e.length === 0) {
        return;
    }
    Ri().setState((r)=>({
            ...r,
            asked: [
                ...e.filter((n)=>!h(r, n)),
                ...r.asked
            ]
        }));
}
function yis(e, plugin, n) {
    E();
    let title = e.title ?? e.id;
    let s = e.focus === true ? e.id : undefined;
    let a = J(e);
    let m = {
        id: e.id,
        plugin
    };
    let c = (y)=>y?.title === title && y.closeOnEscape === a.closeOnEscape && y.holdToasts === a.holdToasts && y.rows === a.rows && y.columns === a.columns;
    let x;
    let w = false;
    Ri().setState((y)=>{
        let R = n && !h(y, m);
        let ee = y.open.find((b)=>b.id === e.id);
        let N = y.unplaced.find((b)=>b.id === e.id);
        let oe = ee !== undefined;
        let Ee = N !== undefined;
        let te = {
            id: e.id,
            plugin: N?.plugin ?? plugin
        };
        x = oe ? {
            isPlaced: true
        } : Y(y, te, n);
        w = R;
        let x_isPlaced = x.isPlaced;
        let Ie = c(ee) && s === undefined && !R;
        let U = {
            ...te,
            title,
            ...a
        };
        let ne = R ? {
            ...y,
            asked: [
                ...y.asked,
                m
            ]
        } : y;
        let Re = {
            ...ne,
            unplaced: Ee ? y.unplaced.map((b)=>{
                if (b.id === e.id) {
                    return U;
                }
                return b;
            }) : [
                ...y.unplaced,
                U
            ]
        };
        let _e = oe ? Ie : !x_isPlaced && c(N) && !R;
        let He = x_isPlaced ? T(ne, U, s ?? y.focusRequest) : Re;
        if (_e) {
            return y;
        }
        return He;
    });
    if (w) {
        P(m, "asked");
    }
    let A = x ?? {
        isPlaced: true
    };
    let k = Z3.get()?.columns ?? "unmeasured";
    let I = n ? "asked" : "unasked";
    let $e = A.isPlaced ? "placed" : `waits unplaced (${A.reason})`;
    t(`ui.open ${plugin} ${e.id} (${I}, ${k} columns): ${$e}`);
    return A;
}
function _is(e) {
    let r = er(e?.origin) === er({
        kind: "plugin"
    });
    return jPt(e?.id) ?? (r ? undefined : "origin is the engine's to set");
}
function F(e) {
    if (Array.isArray(e) && e.length > 0 && e.every((n)=>typeof n === "string") && e[0] !== "") {
        return undefined;
    }
    return "takes argv, a non-empty list of strings naming the command first";
}
function j(env, r) {
    if (env === undefined || L(env) && Object.values(env).every((i)=>typeof i === "string")) {
        return undefined;
    }
    return `${r} is an object of strings`;
}
function zLs(e) {
    let r = typeof e?.name !== "string" || e.name === "";
    let n = e?.fallback === undefined;
    if (r) {
        return "takes the flag's name";
    }
    if (n) {
        return "takes a fallback, the value where the flag table has no say";
    }
}
const bis = (e)=>e !== undefined && typeof e !== "string";
function Wno(e, r) {
    return typeof e === "number" && Number.isInteger(e) && e > 0 && e <= r;
}
function zno(e) {
    let r;
    try {
        r = _(e);
    } catch (error) {
        return `value is not JSON data: ${l(error)}`;
    }
    let n = r;
    if (typeof n !== "string") {
        return `value is not JSON data: ${e === undefined ? "undefined" : `a ${typeof e}`}`;
    }
    if (n.length > Dde) {
        return `the value is ${n.length} characters, over the ${Dde} limit`;
    }
}
function Yur(e) {
    if (typeof e?.key === "string") {
        return undefined;
    }
    return "takes a key";
}
function GLs(e) {
    let r = e?.agentId;
    let n = e?.as;
    let i = r === undefined || typeof r === "string" && r !== "";
    let s = n === undefined || n === "api";
    if (!i) {
        return `takes agentId, a non-empty string (got ${String(r)})`;
    }
    if (s) {
        return undefined;
    }
    return `takes as "api" or none (got ${String(n)})`;
}
function VLs(e) {
    let r = e?.names;
    if (!Array.isArray(r)) {
        return "takes names, a list of relative .md file names";
    }
    for (let n of [
        "of",
        "below"
    ]){
        let i = e?.[n];
        if (i !== undefined && (typeof i !== "string" || i === "")) {
            return `takes ${n}, a path, when given`;
        }
    }
    for (let n of r){
        if (typeof n !== "string" || !n.toLowerCase().endsWith(".md")) {
            return `takes names, each a .md file name (${JSON.stringify(n)})`;
        }
        if (isAbsolute(n) || win32.isAbsolute(n) || n.split(/[\\/]/).includes("..")) {
            return `takes names, each relative with no ".." (${n})`;
        }
    }
}
function UTt(e) {
    let r = e?.path;
    if (typeof r !== "string" || r === "") {
        return "takes a path";
    }
}
function qLs(e) {
    let r = e?.as === "text" || e?.as === "bytes";
    return UTt(e) ?? (r ? undefined : 'as is "text" or "bytes"');
}
function KLs(e) {
    let r = typeof e?.resolve === "boolean";
    return UTt(e) ?? (r ? undefined : "resolve is true or false");
}
const DIn = 600000;
function YLs(e) {
    let r = F(e?.argv);
    if (r !== undefined) {
        return r;
    }
    let n = e?.init;
    if (n === undefined) {
        return;
    }
    if (!L(n)) {
        return "takes init, { cwd?, env?, stdin?, timeoutMs? }";
    }
    if (n.cwd !== undefined && (typeof n.cwd !== "string" || n.cwd === "")) {
        return "init.cwd is a non-empty path";
    }
    let s = j(n.env, "init.env");
    if (s !== undefined) {
        return s;
    }
    if (n.stdin !== undefined && typeof n.stdin !== "string") {
        return "init.stdin is a string";
    }
    if (n.timeoutMs !== undefined && !Wno(n.timeoutMs, DIn)) {
        return `init.timeoutMs is a whole number of ms, 1 to ${DIn}`;
    }
}
function XLs(e) {
    if (!L(e)) {
        return "takes { argv, cwd?, env?, input? }";
    }
    let { argv, cwd, env, input } = e;
    let a = cwd !== undefined && (typeof cwd !== "string" || cwd === "");
    let m = input !== undefined && typeof input !== "string";
    return F(argv) ?? (a ? "cwd is a non-empty path" : undefined) ?? j(env, "env") ?? (m ? "input is a string" : undefined);
}
function Gno(e) {
    let r = e?.name;
    let n = e?.description;
    let i = typeof r !== "string" || !olt.test(r);
    let s = typeof n === "string" && !!n.trim();
    return (i ? "name is letters, digits, _ or - (up to 64)" : undefined) ?? (s ? undefined : "needs a description");
}
const JLs = (e)=>Yur(e) ?? zno(e?.value);
function QLs(e) {
    if (!L(e)) {
        return "inputSchema must be a JSON schema object";
    }
    try {
        _(e);
        return;
    } catch (error) {
        return `inputSchema is not JSON data: ${l(error)}`;
    }
}
var Iqe = (e)=>{
    if (typeof e === "string") {
        return undefined;
    }
    return "takes a string text";
};
function ZLs(e) {
    let r = e?.breakdown;
    let n = e?.columns;
    if (!(r === undefined || r === "summary" || r === "full")) {
        return `takes breakdown "summary" or "full" (got ${String(r)})`;
    }
    if (n === undefined || typeof n === "number" && Number.isInteger(n) && n > 0) {
        return undefined;
    }
    return `takes columns, a positive whole number (got ${String(n)})`;
}
function Sis(e) {
    let r = e?.title;
    let n = r !== undefined;
    let i = typeof r === "string" && YC(r);
    let s = [
        "focus",
        "closeOnEscape",
        "holdToasts"
    ].find((m)=>e?.[m] !== undefined && e[m] !== true);
    let a = [
        "rows",
        "columns"
    ].find((m)=>{
        let c = e?.[m];
        return c !== undefined && !(typeof c === "number" && Number.isInteger(c) && c > 0);
    });
    return jPt(e?.id) ?? (n ? Iqe(r) : undefined) ?? (i ? "title holds a control character" : undefined) ?? (s === undefined ? undefined : `${s} is true or left out`) ?? (a === undefined ? undefined : `${a} is a positive whole number or left out (got ${String(e?.[a])})`);
}
function wis(e) {
    let r = Ri().getState();
    let n = new Set(r.open);
    return Object.freeze(Iye(r).filter((i)=>i.plugin === e).map((i)=>Object.freeze({
            id: i.id,
            title: i.title,
            isShown: r.shownId === i.id,
            isFocused: r.focusedId === i.id,
            isPlaced: n.has(i)
        })));
}
function vis(e) {
    let unplaced = Ri().getState().unplaced;
    Ri().setState((i)=>i.unplaced.filter((s)=>e >= O(i, s)).reduce((acc, item)=>T(acc, item, acc.focusRequest), i));
    let n = new Set(Ri().getState().open);
    for (let i of unplaced.filter((s)=>n.has(s))){
        t(`ui.open ${i.plugin} ${i.id} (waiting, ${e} columns): placed`);
    }
}
function Jur(e) {
    let unplaced = Ri().getState().unplaced;
    if (unplaced.length === 0) {
        return;
    }
    Ri().setState((n)=>n.unplaced.reduce((acc, item)=>T(acc, item, acc.focusRequest), n));
    for (let n of unplaced){
        t(`ui.open ${n.plugin} ${n.id} (waiting, ${e}): placed`);
    }
}
function Eis(e) {
    E();
    let r = false;
    Ri().setState((n)=>{
        r = !h(n, e);
        if (r) {
            return {
                ...n,
                asked: [
                    ...n.asked,
                    {
                        ...e
                    }
                ]
            };
        }
        return n;
    });
    if (r) {
        P(e, "asked");
    }
}
function Qur(e) {
    let { focusRequest } = Ri().getState();
    if (focusRequest === null) {
        return;
    }
    if (e) {
        e5(focusRequest);
    } else {
        Ri().setState((n)=>({
                ...n,
                focusRequest: null
            }));
    }
}
function eNs(e) {
    let r = e ?? se();
    return Az(r) ?? ur(r) ?? we();
}
const nt = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(\.|$)/i;
const me = 64;
const it = 12;
const pt = {
    realpath: false,
    retries: {
        retries: 10,
        minTimeout: 5,
        maxTimeout: 100
    },
    onCompromised: (e)=>{
        t(`$.store lock compromised: ${l(e)}`, {
            level: "warn"
        });
    }
};
const de = (e)=>e.catch(()=>{});
function x0e() {
    let e = Promise.resolve();
    return (r)=>{
        let n = e.then(r, r);
        e = de(n);
        return n;
    };
}
function le() {
    let e = new Map;
    return (r)=>{
        let n = e.get(r) ?? x0e();
        e.set(r, n);
        return n;
    };
}
const lt = /^[a-z0-9._-]+$/;
const ct = le();
function ue(e) {
    if (lt.test(e) && !nt.test(e) && e.length <= me && e !== "." && e !== "..") {
        return `${e}.json`;
    }
    let n = e.replace(/[^a-zA-Z0-9_-]/g, "_");
    let i = createHash("sha256").update(e).digest("hex").slice(0, it);
    return `${n.slice(0, me) || "plugin"}-${i}.json`;
}
const S = (e)=>join(bl(), "store", ue(e));
async function xe(e) {
    let r = S(e);
    await mkdir(dirname(r), {
        recursive: true,
        mode: 448
    });
    return r;
}
async function St(e, r) {
    let n = new Date;
    try {
        await utimes(r, n, n);
    } catch (error) {
        t(`$.store (${e}): could not touch ${r}: ${l(error)}`, {
            level: "warn"
        });
    }
}
async function ye(item) {
    let r = await readFile(S(item), "utf8").catch((n)=>{
        if (z(n)) {
            return;
        }
        throw n;
    });
    if (r === undefined) {
        return undefined;
    }
    return [
        item,
        r
    ];
}
async function he(e) {
    let r = await uR(e).reduce(async (acc, item)=>await acc ?? ye(item), Promise.resolve(undefined));
    if (r === undefined) {
        return false;
    }
    let [n, i] = r;
    let s = S(e);
    let a = `${s}.carry-${randomUUID()}`;
    try {
        if (!L(X(i))) {
            return false;
        }
        await mkdir(dirname(s), {
            recursive: true
        });
        await writeFile(a, i, {
            flag: "wx"
        });
        await link(a, s).catch(async (m)=>{
            if (v(m) === "EEXIST") {
                throw m;
            }
            await copyFile(a, s, constants.COPYFILE_EXCL);
        });
        return true;
    } catch (error) {
        let c = v(error) === "EEXIST";
        t(`$.store (${e}): ` + (c ? `${n}'s store was carried by another session` : `could not carry ${n}'s store: ${l(error)}`), {
            level: c ? "debug" : "warn"
        });
        return c;
    } finally{
        await unlink(a).catch(()=>{});
    }
}
async function vt(e, r) {
    try {
        return await readFile(r, "utf8");
    } catch (error) {
        if (!z(error)) {
            throw error;
        }
    }
    if (!await he(e)) {
        return;
    }
    try {
        return await readFile(r, "utf8");
    } catch (error) {
        if (z(error)) {
            return;
        }
        throw error;
    }
}
const Pe = {
    async read (e) {
        let r = S(e);
        let n;
        try {
            n = await vt(e, r);
        } catch (error) {
            throw new Me(`${e}: store file ${r} is unreadable (${l(error)})`);
        }
        if (n === undefined) {
            return {};
        }
        let i;
        try {
            i = X(n);
        } catch (error) {
            throw new Me(`${e}: store file ${r} is malformed (${l(error)})`);
        }
        if (!L(i)) {
            throw new Me(`${e}: store file ${r} is malformed (the JSON is not an object)`);
        }
        await St(e, r);
        return i;
    },
    write: async (e, r)=>En(await xe(e), `${_(r, null, 2)}
`, 384),
    async lock (e) {
        let r = await xe(e);
        return ja(r, {
            lockfilePath: `${r}.lock`,
            ...pt
        });
    }
};
function Te() {
    let e = Ss();
    return {
        setBackend: e.set,
        backendOverride: e.get
    };
}
const Dt = Te();
const be = ()=>Dt.backendOverride() ?? Pe;
const Z = 256;
async function Ce(e, r) {
    try {
        if (e.event !== "keys" && e.key.length > Z) {
            throw new Me(`${r}: $.store.${e.event}: the key is ${e.key.length} characters, over the ${Z} limit`);
        }
        let n = be();
        let s = e.event === "set" || e.event === "delete" ? await n.lock?.(r) : undefined;
        try {
            let a = await n.read(r);
            switch(e.event){
                case "get":
                    if (Object.hasOwn(a, e.key)) {
                        return a[e.key];
                    }
                    return undefined;
                case "keys":
                    return Object.keys(a);
                case "set":
                    {
                        let m = {
                            ...a,
                            [e.key]: e.value
                        };
                        let c = _(m).length;
                        if (c > Dde) {
                            throw new Me(`${r}: $.store.set: the store would be ${c} characters, over the ${Dde} limit`);
                        }
                        await n.write(r, m);
                        t(`$.store.set (${r}): ${e.key}`);
                        return;
                    }
                case "delete":
                    {
                        if (!Object.hasOwn(a, e.key)) {
                            return;
                        }
                        let m = {
                            ...a
                        };
                        delete m[e.key];
                        await n.write(r, m);
                        return;
                    }
            }
        } finally{
            await Um(s, `$.store.${e.event} (${r})`);
        }
    } catch (error) {
        if (error instanceof Me) {
            throw error;
        }
        throw new Me(`${r}: $.store.${e.event} failed: ${l(error)}`);
    }
}
const BTt = (e, r)=>ct(r)(()=>Ce(e, r));
export { LTt, mv, MIn, Z3, f3t, m3t, g3t, h3t, NTt, $Tt, Wrt, Uno, Ri, y3t, Iye, ace, JJ, zrt, gis, his, e5, FTt, Bno, jno, _3t, HIn, yis, _is, zLs, bis, Wno, zno, Yur, GLs, VLs, UTt, qLs, KLs, DIn, YLs, XLs, Gno, JLs, QLs, Iqe, ZLs, Xur, YC, Sis, wis, vis, Jur, Eis, Qur, Zur, NI, eNs, x0e, BTt };
