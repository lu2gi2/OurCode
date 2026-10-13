import { xR, kN } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Mv } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { LLn } from "/$bunfs/root/chunk-tn496ms6.js";
import { I_e, RQ } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { t3n, vgt, Egt, r3n, o3n, s3n, i3n, a3n } from "/$bunfs/root/chunk-8zh723md.js";
import { join, resolve } from "path";
function lNr(o, { backstop = false } = {}) {
    return o.allowRules.sources.length > 0 || o.additionalDirectories.sources.length > 0 || !backstop && (o.hookSources.length > 0 || o.commandHelperSources.length > 0);
}
function cNr() {
    return {
        allowRules: vgt(),
        additionalDirectories: Egt(),
        hookSources: [],
        commandHelperSources: []
    };
}
function qun(o) {
    let t = resolve(o);
    let m = kN(t, Mv);
    let settings = xR(join(t, ".claude", "settings.json")).settings;
    let c = join(m, ".claude", "settings.local.json");
    let a = join(t, ".claude", "settings.local.json");
    let s = [
        xR(c).settings,
        ...a === c ? [] : [
            xR(a).settings
        ]
    ].filter((e)=>e !== null);
    let localSettings = s.length === 0 ? null : {
        permissions: {
            additionalDirectories: s.flatMap((e)=>e.permissions?.additionalDirectories ?? [])
        }
    };
    let u = {
        projectSettings: settings,
        localSettings
    };
    let p = {
        sources: [
            [
                "projectSettings",
                ".claude/settings.json"
            ],
            [
                "localSettings",
                ".claude/settings.local.json"
            ]
        ],
        read: (e)=>u[e] ?? null,
        rules: (e)=>{
            if (e === "localSettings") {
                return s.flatMap((h)=>I_e(h, e));
            }
            return I_e(u[e] ?? null, e);
        }
    };
    let d = (e)=>o3n(e) || s3n(e) || i3n(e) || r3n(e) || a3n(e);
    let hookSources = [];
    let commandHelperSources = [];
    if (t3n(settings)) {
        hookSources.push(".claude/settings.json");
    }
    if (s.some(t3n)) {
        hookSources.push(".claude/settings.local.json");
    }
    let g = LLn(t);
    if (g !== null) {
        hookSources.push(RQ(g));
    }
    if (d(settings)) {
        commandHelperSources.push(".claude/settings.json");
    }
    if (s.some(d)) {
        commandHelperSources.push(".claude/settings.local.json");
    }
    return {
        allowRules: vgt(p),
        additionalDirectories: Egt(p),
        hookSources,
        commandHelperSources
    };
}
export { lNr, cNr, qun };
