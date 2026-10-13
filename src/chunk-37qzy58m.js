import { ys } from "/$bunfs/root/chunk-0ycjphb5.js";
import { uC } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { Nz, _n } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { gn, Dy as comments, Ig as data, mO as check, ben, Sen, Vt, hN, gO, xn, xen, i3e, gSe } from "/$bunfs/root/chunk-k3tkc302.js";
import { Om } from "/$bunfs/root/chunk-0vgmtssp.js";
import { Xg, de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { iNe, Go, lc, Sh, jD } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { PNn, kw, pde } from "/$bunfs/root/chunk-eb0vnwc4.js";
import { IK, HZe } from "/$bunfs/root/chunk-adgp14at.js";
import { E8t } from "/$bunfs/root/chunk-1evt35tw.js";
import { pr, JLn } from "/$bunfs/root/chunk-e00q6jpd.js";
const _ = /^([A-Za-z][A-Za-z0-9+.-]*):\/\/([^/?#]*)(.*)$/;
function P(n) {
    let e = n.match(_);
    if (!e) {
        return n;
    }
    let t = e[1].toLowerCase();
    if (t === "http") {
        t = "https";
    }
    let o = e[2].toLowerCase().replace(/:(?:443|80)$/, "").replace(/\.(?=$|:\d+$)/, "");
    return `${t}://${o}${e[3] ?? ""}`;
}
function M_t(n, e, t, o = "url") {
    if (n.size === 0) {
        return null;
    }
    let r = i3e(e);
    let l = new Set([
        ...xen(e),
        r,
        `${r}/`
    ]);
    if (typeof t === "string") {
        l.add(hN(t).trim());
    }
    for (let [u, a] of n){
        let i = u.indexOf(":");
        if (i <= 0) {
            continue;
        }
        let s = u.slice(0, i).trim();
        let c = u.slice(i + 1).trim();
        if (s !== o || c === "") {
            continue;
        }
        let f = gO(c.replace(/\*$/, ""));
        if (f?.slug === e.slug && f.env === e.env) {
            return a;
        }
        let R = new Set([
            c,
            P(c)
        ]);
        for (let y of R){
            for (let A of l){
                if (Nz(y, A)) {
                    return a;
                }
            }
        }
    }
    return null;
}
function E(n) {
    let e = Vt(n);
    let t = gO(n);
    return [
        ...e !== null ? [
            e
        ] : [],
        ...t !== null && (e === null || e.slug !== t.slug || e.env !== t.env) ? [
            t
        ] : []
    ];
}
function T(n, e) {
    if (n.size === 0 || typeof e !== "object" || e === null) {
        return null;
    }
    let { url, type_url, from_url, files } = e;
    let u = typeof files === "object" && files !== null && !Array.isArray(files) ? Object.values(files).map((i)=>{
        if (typeof i === "object" && i !== null) {
            return i.artifact;
        }
    }) : [];
    let a = [
        [
            url,
            [
                "url"
            ]
        ],
        [
            type_url,
            [
                "url",
                "type_url"
            ]
        ],
        [
            from_url,
            [
                "url",
                "from_url"
            ]
        ],
        ...u.map((i)=>[
                i,
                [
                    "url",
                    "from_url"
                ]
            ])
    ];
    for (let [i, s] of a){
        if (typeof i !== "string") {
            continue;
        }
        for (let c of E(i)){
            for (let f of s){
                let R = M_t(n, c, i, f);
                if (R !== null) {
                    return R;
                }
            }
        }
    }
    return null;
}
const k = {
    comments,
    data,
    check
};
function x7e(n, e) {
    let t = e?.action;
    let o = typeof t === "string" && Object.hasOwn(IK, t) ? IK[t] : undefined;
    if (o === undefined) {
        return undefined;
    }
    return {
        tool: {
            name: k[o],
            ruleContentField: n.ruleContentField
        },
        input: HZe(o, e)
    };
}
function Tbn(n, e, t, o) {
    let r = x7e(e, t);
    if (r === undefined) {
        return null;
    }
    return (o === "deny" ? Go(n, r.tool) : lc(n, r.tool)) ?? Sh(n, r.tool, r.input, o);
}
function Mj(n, e, t) {
    let o = x7e({
        name: gn
    }, e)?.tool.name;
    for (let r of [
        gn,
        ...o ? [
            o
        ] : []
    ]){
        let l = T(jD(n, r, t), e);
        if (l !== null) {
            return l;
        }
    }
    return null;
}
function l2r(n, e, t, o) {
    let r = x7e(e, t);
    return Sh(n, e, t, o) ?? (r === undefined ? null : Sh(n, r.tool, r.input, o));
}
const w = {
    name: pr,
    mcpInfo: undefined,
    ruleContentField: JLn
};
const d = {
    name: gn,
    mcpInfo: undefined,
    ruleContentField: ben
};
function m(url, e, page, version) {
    let prompt = e ?? Sen;
    return {
        webFetch: {
            url,
            prompt,
            offset: undefined
        },
        artifact: {
            action: "read",
            url,
            prompt,
            ...page !== undefined && {
                page
            },
            ...version !== undefined && {
                version
            }
        }
    };
}
function JQn(n, e, t, o, r) {
    let l = r === undefined ? null : Sh(n, w, m(t, r.prompt).webFetch, o);
    if (l !== null) {
        return l;
    }
    let u = jD(n, pr, o);
    if (u.size === 0) {
        return null;
    }
    let a = new Set([
        new URL(xn(e)).hostname,
        new URL(i3e(e)).hostname
    ]);
    if (typeof t === "string") {
        try {
            a.add(new URL(t).hostname);
        } catch  {}
    }
    for (let i of a){
        let s = E8t(u, `domain:${i}`);
        if (s !== undefined) {
            return s;
        }
    }
    return null;
}
function ky(n, e, t, o, r = {}) {
    let l = x7e({
        name: gn
    }, {
        action: r.action
    })?.tool.name;
    let u = JQn(n, e, t, o, r.read);
    if (u !== null) {
        return u;
    }
    for (let a of [
        gn,
        ...l ? [
            l
        ] : []
    ]){
        let i = jD(n, a, o);
        let s = M_t(i, e, t) ?? (r.copySource === true ? M_t(i, e, t, "from_url") : null);
        if (s !== null) {
            return s;
        }
    }
    return null;
}
function g(n) {
    if (!iNe.some((t)=>(n.alwaysDenyRules[t]?.length ?? 0) > 0)) {
        return n;
    }
    let alwaysDenyRules = {
        ...n.alwaysDenyRules
    };
    for (let t of iNe){
        delete alwaysDenyRules[t];
    }
    return {
        ...n,
        alwaysDenyRules
    };
}
function p(n, e, { action, ...rest }, o) {
    return (action === undefined ? null : Sh(g(n), e, {
        action
    }, o)) ?? Sh(n, e, rest, o);
}
function c2r(n, e, t, o, r = {}) {
    let l = g(n);
    return (o === "deny" ? Go(l, d) : lc(l, d)) ?? p(n, d, m(t, r.prompt, r.page, r.version).artifact, o) ?? M_t(jD(n, gn, o), e, t);
}
function cE(n, e, t, o, r) {
    let l = {
        ...r.fields,
        ...r.read !== undefined ? m(t, r.read.prompt, r.read.page, r.read.version).artifact : {
            ...typeof r.action === "string" && {
                action: r.action
            },
            url: xn(e)
        }
    };
    let u = x7e(d, l);
    let a = g(n);
    let i = (s)=>{
        if (o === "deny") {
            return Go(a, s);
        }
        if (r.wholeToolAskAnswered === true && s.name === gn) {
            return null;
        }
        return lc(a, s);
    };
    return i(d) ?? p(n, d, l, o) ?? (u === undefined ? null : i(u.tool) ?? p(n, u.tool, u.input, o)) ?? ky(n, e, t, o, r);
}
function Aze(n) {
    return `the ${gSe(_n(n.ruleValue))} deny rule from ${uC(n.source)}`;
}
const P7e = 'some tag-like sequences or line-opening turn markers in the copy below carry an inserted "\\"';
function Abn(n, e, t, read = {}) {
    let r = de(n);
    let l = {
        action: "read",
        read
    };
    return C(n, e) && !(Om(e.slug) && !ys(n.agentContext)) && cE(r, e, t, "deny", l) === null && cE(r, e, t, "ask", l) === null;
}
function C(n, e) {
    let { mode, modeBeforeRewrite } = de(n);
    return mode !== "plan" && (mode !== "auto" && modeBeforeRewrite !== "auto" || kw(e) || pde(e.slug));
}
function d2r(n, e, t, o = {}) {
    return de(n).mode !== "dontAsk" && !Xg(n) && Abn(n, e, t, o);
}
function H_t(n, e, t, o = {}) {
    return PNn(n.artifactRegistries, e.slug) && Abn(n, e, t, o);
}
export { M_t, x7e, Tbn, Mj, l2r, JQn, ky, c2r, cE, Aze, P7e, Abn, d2r, H_t };
