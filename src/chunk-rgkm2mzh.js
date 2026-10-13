import { Ns } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Vn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Zy } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Kn } from "/$bunfs/root/chunk-rhjwzamj.js";
import { W6 } from "/$bunfs/root/chunk-k09mhqd6.js";
import { Bo, rd } from "/$bunfs/root/chunk-2dp0fzyb.js";
function qLo(e, t) {
    let n = e.clients.findIndex((o)=>o.name === t);
    if (n === -1) {
        return e;
    }
    let i = e.clients[n];
    if (!i || !Ns(i) && i.type !== "needs-auth") {
        return e;
    }
    let clients = [
        ...e.clients
    ];
    clients[n] = i.type === "needs-auth" ? {
        ...i
    } : {
        name: t,
        type: "needs-auth",
        config: i.config
    };
    return {
        ...e,
        clients
    };
}
function xfe(e, t, n, i) {
    let s = e.mcp.clients.some((l)=>l.name === t);
    if (!s && i?.appendIfAbsent === false) {
        return e;
    }
    let o = Bo(t);
    return {
        ...e,
        mcp: {
            ...e.mcp,
            clients: s ? e.mcp.clients.map((l)=>{
                if (l.name === t) {
                    return n.client;
                }
                return l;
            }) : [
                ...e.mcp.clients,
                n.client
            ],
            tools: [
                ...e.mcp.tools.filter((l)=>!rd(l, t, o)),
                ...n.tools
            ],
            commands: [
                ...e.mcp.commands.filter((l)=>!Zy(l, t)),
                ...n.commands
            ],
            resources: n.resources ? {
                ...e.mcp.resources,
                [t]: n.resources
            } : e.mcp.resources,
            resourceTemplates: n.resourceTemplates ? {
                ...e.mcp.resourceTemplates,
                [t]: n.resourceTemplates
            } : e.mcp.resourceTemplates
        }
    };
}
function KLo(e, t, n) {
    if (!e.clients.some((s)=>s.name === t && s.type === "connected")) {
        return e;
    }
    let i = Bo(t);
    return {
        ...e,
        tools: [
            ...e.tools.filter((s)=>!rd(s, t, i)),
            ...n
        ]
    };
}
function zcn(e, t, n) {
    if (!e.mcp.clients.some((s)=>s.name === t && s.type === "connected")) {
        return e;
    }
    let i = Bo(t);
    return {
        ...e,
        mcp: {
            ...e.mcp,
            tools: [
                ...e.mcp.tools.filter((s)=>!rd(s, t, i)),
                ...n
            ]
        }
    };
}
function YLo(e, t, n) {
    let i = new Set(e.clients);
    let s = new Map(t.clients.map((c)=>[
            c.name,
            c
        ]));
    let o = n;
    for (let c of n.clients){
        if (!i.has(c)) {
            continue;
        }
        let p = s.get(c.name);
        let a = Bo(c.name);
        let m = (r)=>rd(r, c.name, a);
        if (p === undefined) {
            o = {
                ...o,
                clients: o.clients.filter((r)=>r !== c),
                tools: o.tools.filter((r)=>!m(r))
            };
            continue;
        }
        if (p !== c) {
            o = {
                ...o,
                clients: o.clients.map((r)=>{
                    if (r === c) {
                        return p;
                    }
                    return r;
                })
            };
        }
        let S = t.tools.filter(m);
        let d = o.tools.filter(m);
        if (S.length === d.length && S.every((r, T)=>r === d[T])) {
            continue;
        }
        o = {
            ...o,
            tools: [
                ...o.tools.filter((r)=>!m(r)),
                ...S
            ]
        };
    }
    let l = new Set(e.clients.map((c)=>c.name));
    let u = new Set(n.clients.map((c)=>c.name));
    let f = t.clients.filter((c)=>!l.has(c.name) && !u.has(c.name));
    if (f.length > 0) {
        let c = f.map((p)=>[
                p.name,
                Bo(p.name)
            ]);
        o = {
            ...o,
            clients: [
                ...o.clients,
                ...f
            ],
            tools: [
                ...o.tools,
                ...t.tools.filter((p)=>c.some(([a, m])=>rd(p, a, m)))
            ]
        };
    }
    return o;
}
function bmt(e, config) {
    if (Vn(e.config, config)) {
        return e;
    }
    return {
        ...e,
        config
    };
}
function u$t(e, t, n) {
    if (e === undefined) {
        return t;
    }
    if (Kn(e.name, e.config) !== Kn(e.name, n)) {
        return undefined;
    }
    return W6({
        name: e.name,
        config: e.config
    }, t);
}
export { qLo, xfe, KLo, zcn, YLo, bmt, u$t };
