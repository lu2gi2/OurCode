import { Lo } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { yd, XS, uR } from "/$bunfs/root/chunk-bmzhpr9h.js";
const YW = [
    "userSettings",
    "flagSettings",
    "policySettings"
];
function Fde(t) {
    let i = new Set(Lo());
    let e = Ioe(t);
    let options;
    let mcpServers;
    for (let s of YW){
        if (!i.has(s)) {
            continue;
        }
        let g = fe(s)?.pluginConfigs;
        for (let u of e){
            let o = g?.[u];
            if (o?.options) {
                options = {
                    ...options,
                    ...o.options
                };
            }
            if (o?.mcpServers) {
                mcpServers = mcpServers ?? {};
                for (let [l, c] of Object.entries(o.mcpServers)){
                    mcpServers[l] = {
                        ...mcpServers[l],
                        ...c
                    };
                }
            }
        }
    }
    return {
        options,
        mcpServers
    };
}
function Ioe(t) {
    let i = uR(t);
    if (i.length > 0) {
        return [
            ...i.toReversed(),
            t
        ];
    }
    let e = `@${yd}`;
    let n = t.endsWith(e) ? t.slice(0, -e.length) : "";
    if (n !== "" && !n.includes("@")) {
        return [
            n,
            t
        ];
    }
    return [
        t
    ];
}
function ZFn(t) {
    let i = new Set(Lo());
    let e;
    for (let n of YW){
        if (!i.has(n)) {
            continue;
        }
        let r = hY(fe(n)?.enabledPlugins, t);
        if (r !== undefined) {
            e = r;
        }
    }
    return e;
}
function eIt(t, i) {
    let written = XS(i);
    let n = uR(written);
    if (n.length === 0) {
        return {
            deciding: i,
            written: i,
            replaced: []
        };
    }
    let replaced = n.filter((s)=>t?.[s] !== undefined);
    return {
        deciding: t?.[written] === undefined ? replaced[0] ?? written : written,
        written,
        replaced
    };
}
function hY(t, i) {
    let e = XS(i);
    return [
        e,
        ...uR(e),
        i
    ].map((n)=>t?.[n]).find((n)=>n !== undefined);
}
export { YW, Fde, Ioe, ZFn, eIt, hY };
