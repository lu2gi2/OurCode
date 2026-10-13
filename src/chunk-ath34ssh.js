import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { lt, Vl } from "/$bunfs/root/chunk-ctt36bn8.js";
import { MCo, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { B6e } from "/$bunfs/root/chunk-0ycjphb5.js";
import { et } from "/$bunfs/root/chunk-w1n7t02f.js";
import { ws } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { YEo } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { fe, ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { DB } from "/$bunfs/root/chunk-tn496ms6.js";
import { kqt, WC } from "/$bunfs/root/chunk-kasbfbhj.js";
import { bh, xW, qDn, i4e, GLe, R9t, jd } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { WQn, GQn, P_t, s2r, Sbn, YQn, pMe } from "/$bunfs/root/chunk-88awaqqw.js";
import { OQe } from "/$bunfs/root/chunk-h1yzmkkb.js";
import { xE } from "/$bunfs/root/chunk-8fa0475h.js";
import { resolve } from "path";
const xDr = new lt(()=>Oe());
function l$t(o, a, i, f, d) {
    let settings = ft();
    t(`Settings changed from ${a}, updating app state`);
    B6e();
    let c = xW();
    DB({
        userLayer: "retain"
    });
    WC();
    let p = false;
    i((m)=>{
        let toolPermissionContext = kqt(m.toolPermissionContext, c);
        toolPermissionContext = IDr(toolPermissionContext, m.settings.permissions?.additionalDirectories, i4e(), a, d?.trustFlip === true, d?.prevCwd, f);
        let g = PDr(toolPermissionContext, c);
        toolPermissionContext = g.context;
        p = g.exitedAutoMode;
        if (toolPermissionContext.blockReadsOutsideWorkingDirectories !== true && GLe()) {
            toolPermissionContext = {
                ...toolPermissionContext,
                blockReadsOutsideWorkingDirectories: true
            };
            R9t();
        }
        let awaySummaryEnabled = OQe();
        return {
            ...m,
            settings,
            toolPermissionContext,
            ...m.awaySummaryEnabled !== awaySummaryEnabled && {
                awaySummaryEnabled
            }
        };
    });
    if (p && o !== undefined) {
        xDr.of(o).emit();
    }
}
function c$t(o) {
    if (YEo()) {
        o();
    }
}
function PDr(o, a) {
    let i = o;
    if (i.isBypassPermissionsModeAvailable && xE()) {
        i = s2r(i);
    }
    if (i.strippedDangerousRules !== undefined) {
        let d = new Set(ws);
        let l = !bh();
        let strippedDangerousRules = {};
        for (let [p, m] of Object.entries(i.strippedDangerousRules)){
            if (m && (l || p === "command") && !d.has(p)) {
                strippedDangerousRules[p] = [
                    ...m
                ];
            }
        }
        i = {
            ...i,
            strippedDangerousRules
        };
    }
    let exitedAutoMode = Sbn(i) && P_t();
    if (exitedAutoMode) {
        i = YQn(i);
    }
    return {
        context: pMe(i),
        exitedAutoMode
    };
}
function IDr(o, a, i, f, d = false, l, c) {
    let p = new Set((a ?? []).flatMap((e)=>h(e, l)));
    let m = new Set((i ?? []).flatMap((e)=>h(e)));
    let o_additionalWorkingDirectories = o.additionalWorkingDirectories;
    let g = [
        ...p
    ].filter((e)=>!m.has(e) && !P(o_additionalWorkingDirectories.get(e)?.source));
    let S = [
        ...m
    ].filter((e)=>(!p.has(e) || d && !o_additionalWorkingDirectories.has(e)) && !P(o_additionalWorkingDirectories.get(e)?.source));
    let v = Vl();
    let { declared, repoOnly } = qDn((e)=>[
            ...v === null ? [] : h(e, v),
            ...h(e)
        ], c);
    let k = (e)=>{
        if (repoOnly.has(e)) {
            return "projectSettings";
        }
        return "localSettings";
    };
    let C = [
        ...o_additionalWorkingDirectories.entries()
    ].filter(([e, s])=>!P(s.source) && !g.includes(e) && declared.has(e) && s.source !== k(e));
    if (g.length === 0 && S.length === 0 && C.length === 0 && f !== "flagSettings") {
        return o;
    }
    let u = o;
    if (C.length > 0) {
        let additionalWorkingDirectories = new Map(o_additionalWorkingDirectories);
        for (let [s, y] of C){
            additionalWorkingDirectories.set(s, {
                ...y,
                source: k(s)
            });
        }
        u = {
            ...u,
            additionalWorkingDirectories
        };
    }
    if (f === "flagSettings") {
        let e = new Set((fe("flagSettings")?.permissions?.additionalDirectories ?? []).flatMap((n)=>h(n)));
        let trustedNetworkDirectories = new Map(u.trustedNetworkDirectories ?? []);
        let y = false;
        for (let n of [
            ...trustedNetworkDirectories.keys()
        ]){
            if (!e.has(n) && o_additionalWorkingDirectories.get(n)?.source !== "cliArg") {
                for (let D of trustedNetworkDirectories.get(n) ?? []){
                    if (D !== n) {
                        g.push(D);
                    }
                }
                trustedNetworkDirectories.delete(n);
                y = true;
            }
        }
        if (GQn()) {
            for (let n of e){
                if (!trustedNetworkDirectories.has(n)) {
                    if (MCo(n)) {
                        continue;
                    }
                    let D = WQn(n);
                    if (D.length > 0) {
                        trustedNetworkDirectories.set(n, D);
                        for (let w of D){
                            if (w !== n) {
                                S.push(w);
                            }
                        }
                        y = true;
                    }
                }
            }
        }
        if (y) {
            u = {
                ...u,
                trustedNetworkDirectories
            };
        }
    }
    if (g.length > 0) {
        u = jd(u, {
            type: "removeDirectories",
            directories: g,
            destination: "localSettings"
        });
    }
    if (S.length > 0) {
        for (let destination of [
            "projectSettings",
            "localSettings"
        ]){
            let s = S.filter((y)=>k(y) === destination);
            if (s.length > 0) {
                u = jd(u, {
                    type: "addDirectories",
                    directories: s,
                    destination
                });
            }
        }
    }
    return u;
}
function d$t(o, a) {
    let i = new Set(i4e().flatMap((l)=>h(l)));
    let o_additionalWorkingDirectories = o.additionalWorkingDirectories;
    let d = a.filter((l)=>{
        let c = o_additionalWorkingDirectories.get(l);
        return c !== undefined && !i.has(l) && !P(c.source);
    });
    if (d.length === 0) {
        return o;
    }
    return jd(o, {
        type: "removeDirectories",
        directories: d,
        destination: "localSettings"
    });
}
function P(o) {
    return o === "cliArg" || o === "command" || o === "session";
}
function b(o, a) {
    return resolve(et(o, a));
}
function h(o, a) {
    try {
        return [
            b(o, a)
        ];
    } catch  {
        return [];
    }
}
export { xDr, l$t, c$t, PDr, IDr, d$t };
