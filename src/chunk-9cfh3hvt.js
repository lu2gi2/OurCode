import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
const p = [
    "c4e-ultrareview",
    "claude-design-command",
    "default-permission-mode-config",
    "desktop-app",
    "desktop-contextual",
    "desktop-ios-simulator",
    "desktop-shortcut",
    "focus-view",
    "frontend-design-plugin",
    "ide-upsell-external-terminal",
    "install-github-app",
    "install-slack-app",
    "install-slack-app-mcp",
    "memory-command",
    "no-flicker",
    "permissions",
    "plugin-disuse-review",
    "status-line",
    "team-onboarding-share",
    "voice-mode",
    "web-setup-github",
    "workflow-size-prompting",
    "workflow-size-prompting-ambient",
    "you-should-know-plugin",
    ...[]
];
function u(tipId) {
    return p.includes(tipId);
}
function n7e(tipId, o, n) {
    let numStartups = ce().numStartups;
    Ae((e)=>{
        let r = e.tipsHistory ?? {};
        if (r[tipId] === numStartups) {
            return e;
        }
        let s = e.tipLifetimeShownCounts ?? {};
        return {
            ...e,
            tipsHistory: {
                ...r,
                [tipId]: numStartups
            },
            tipLifetimeShownCounts: {
                ...s,
                [tipId]: (s[tipId] ?? 0) + 1
            },
            ...n !== undefined && {
                tipsHistoryByCommand: {
                    ...e.tipsHistoryByCommand,
                    [n]: {
                        tipId,
                        numStartups
                    }
                }
            }
        };
    }, o);
}
const g = 100;
function VOe(t) {
    let o = ce();
    let n = o.tipsHistoryByCommand?.[t];
    if (typeof n !== "object" || n === null) {
        return {};
    }
    let i = o.numStartups - n.numStartups;
    if (!(i >= 0)) {
        return {};
    }
    return {
        via_tip: true,
        tip_launches_ago: Math.min(i, g),
        ...u(n.tipId) && {
            tip_id: d(n.tipId)
        }
    };
}
function _X(t) {
    return ce().tipLifetimeShownCounts?.[t] ?? 0;
}
function Z2o(t) {
    return ce().pluginSuggestionShownCounts?.[t] ?? 0;
}
function Pj(t) {
    let o = ce();
    let n = o.tipsHistory?.[t];
    if (!n) {
        return Infinity;
    }
    return o.numStartups - n;
}
function eVo(t) {
    return ce().pluginSuggestionDiscoverShownCounts?.[t] ?? 0;
}
function tVo(t, o) {
    if (t.length === 0) {
        return;
    }
    Ae((n)=>{
        let i = n.pluginSuggestionDiscoverShownCounts ?? {};
        if (t.every((r)=>(i[r] ?? 0) > 0)) {
            return n;
        }
        let pluginSuggestionDiscoverShownCounts = {
            ...i
        };
        for (let r of t){
            pluginSuggestionDiscoverShownCounts[r] = (pluginSuggestionDiscoverShownCounts[r] ?? 0) + 1;
        }
        return {
            ...n,
            pluginSuggestionDiscoverShownCounts
        };
    }, o);
}
export { n7e, VOe, _X, Z2o, Pj, eVo, tVo };
