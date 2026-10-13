import { Ul, cpe } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { gn, Ig } from "/$bunfs/root/chunk-k3tkc302.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { rQ, ZIn, ZTt } from "/$bunfs/root/chunk-cxfa2a1y.js";
import { N2 } from "/$bunfs/root/chunk-jn57cv7f.js";
import { Xl } from "/$bunfs/root/chunk-mhg15z8n.js";
const l = [
    gn,
    Ig
].flatMap((o)=>[
        o,
        ...cpe(o)
    ]);
function a(o, s) {
    let e = [
        ...Object.entries(o.options.toolAliases ?? {}),
        ...Object.entries(de(o).toolAliases ?? {})
    ];
    let t = e.flatMap(([n, i])=>[
            ...s.includes(i) ? [
                n
            ] : [],
            ...s.includes(n) ? [
                i
            ] : []
        ]);
    let r = e.flatMap(([n, i])=>{
        if (t.includes(i)) {
            return [
                n
            ];
        }
        return [];
    });
    return [
        ...s,
        ...t,
        ...r
    ];
}
function c(matcher, s) {
    if (!matcher || matcher === "*") {
        return true;
    }
    if (/^[a-zA-Z0-9_|, -]+$/.test(matcher)) {
        return matcher.split(/[|,]/).map((e)=>e.trim()).some((e)=>s.includes(e) || s.includes(Ul(e)));
    }
    try {
        let e = ZIn(matcher);
        return s.some((t)=>e.test(t));
    } catch  {
        return true;
    }
}
function p(o, s) {
    let e = N2("tool.call");
    let t = N2("tool.check");
    return Xl("classic.PreToolUse", undefined, N2("classic.PreToolUse")) || o.some((r)=>Xl("tool.call", {
            tool: r
        }, e) || Xl("tool.check", s ? {
            tool: r
        } : ZTt({
            name: r
        }), t));
}
function xzr(o, s) {
    try {
        let e = s === undefined ? l : [
            ...l,
            s,
            ...cpe(s)
        ];
        let t = a(o, e);
        if (p(t, t.length > e.length)) {
            return true;
        }
        if (o.sessionHooksRegistry.has(o.agentId ?? o.session.id, "PreToolUse")) {
            return true;
        }
        return rQ("PreToolUse").some((r)=>c(r.matcher, t) && r.hooks.some((n)=>!(n.type === "callback" && n.internal === true)));
    } catch  {
        return true;
    }
}
export { xzr };
