import { we } from "/$bunfs/root/chunk-ctt36bn8.js";
import { x } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { I, Tr, Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Zbe, Ln } from "/$bunfs/root/chunk-0ycjphb5.js";
import { hr } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { iy } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { VE, nrn, Un, _n } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { jY } from "/$bunfs/root/chunk-63xa24b4.js";
import { Rs } from "/$bunfs/root/chunk-w1n7t02f.js";
import { Xxe, Qs } from "/$bunfs/root/chunk-2d9a83dh.js";
import { ae, Nu, pt, xO, $1, cGn } from "/$bunfs/root/chunk-223dyewd.js";
import { on, nt, s, n, Do, Di, Ks } from "/$bunfs/root/chunk-8524cxt8.js";
import { le, P, Z, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { z3, Ots } from "/$bunfs/root/chunk-9kgj8k7e.js";
import { I2 } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { V, Hn, Wo } from "/$bunfs/root/chunk-zby5bms5.js";
import { ke } from "/$bunfs/root/chunk-8kbdmpwx.js";
import { nn } from "/$bunfs/root/chunk-z47a2vff.js";
import { Mi as selectedValue, Ve } from "/$bunfs/root/chunk-wff73y2a.js";
import { ma } from "/$bunfs/root/chunk-dzxgwxyz.js";
import { G } from "/$bunfs/root/chunk-8eystn8t.js";
import { be } from "/$bunfs/root/chunk-s3tnbfvt.js";
import { Eo } from "/$bunfs/root/chunk-4b1qzs5x.js";
import { Hl } from "/$bunfs/root/chunk-kasbfbhj.js";
import { ZQ, pc, Cb, xg, oF, wYe, dbe, n$e, pQt, Bi, KS, bbr, VB, Ai } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { $n, i0n } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { _7r, bYt } from "/$bunfs/root/chunk-5nm75yfw.js";
import { nE } from "/$bunfs/root/chunk-86meyjxt.js";
import { ba } from "/$bunfs/root/chunk-kkhj7m58.js";
import { lmt } from "/$bunfs/root/chunk-7dqf83m5.js";
import { cT, R_t } from "/$bunfs/root/chunk-88awaqqw.js";
import { tk } from "/$bunfs/root/chunk-z7kvmbpw.js";
import { C4n } from "/$bunfs/root/chunk-abvy54rm.js";
import { dje } from "/$bunfs/root/chunk-5d7a6f0c.js";
import { SU } from "/$bunfs/root/chunk-esj4mtp8.js";
import { hl } from "/$bunfs/root/chunk-vfe1c7a8.js";
import { ql } from "/$bunfs/root/chunk-snyys9as.js";
import { Y, e, r } from "/$bunfs/root/chunk-vybw69ke.js";
import { cw } from "/$bunfs/root/chunk-4p1f2ppy.js";
import { p1r } from "/$bunfs/root/chunk-ygy4hkqm.js";
import { kj } from "/$bunfs/root/chunk-dbx8jhe9.js";
import { rt } from "/$bunfs/root/chunk-xx1j2680.js";
import { SFe, iAs, aAs, Tbo } from "/$bunfs/root/chunk-v56yyhmh.js";
import { go } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { _u } from "/$bunfs/root/chunk-smx21d0k.js";
import { wpe } from "/$bunfs/root/chunk-98pm569t.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { S, Sn } from "/$bunfs/root/chunk-cj4xndke.js";
function _i(t) {
    let l = w(4);
    let { multiline, children } = t;
    if (nt()) {
        let F;
        if (l[0] !== children) {
            F = e(s, {
                "aria-role": "blockquote",
                children
            });
            l[0] = children;
            l[1] = F;
        } else {
            F = l[1];
        }
        return F;
    }
    if (!multiline) {
        return children;
    }
    let F;
    if (l[2] !== children) {
        F = e(s, {
            borderStyle: "single",
            borderLeft: true,
            borderRight: false,
            borderTop: false,
            borderBottom: false,
            borderDimColor: true,
            paddingLeft: 1,
            children
        });
        l[2] = children;
        l[3] = F;
    } else {
        F = l[3];
    }
    return F;
}
function yn(t) {
    return i0n(t);
}
function Ir(t) {
    let u = [];
    for (let o of t){
        if (o === null || typeof o !== "object") {
            continue;
        }
        if (o.type !== "addRules") {
            u.push(o);
            continue;
        }
        if (!Array.isArray(o.rules)) {
            continue;
        }
        let l = o.rules.filter((F)=>F !== null && typeof F === "object" && typeof F.toolName === "string" && (F.ruleContent === undefined || typeof F.ruleContent === "string") && (F.ruleContent === undefined ? ut(F.toolName) : yn({
                toolName: F.toolName,
                ruleContent: F.ruleContent
            })));
        if (l.length > 0) {
            u.push({
                ...o,
                rules: l
            });
        }
    }
    return u;
}
const ZPe = 8;
const $we = 64;
const I9e = 160;
const Or = new Set([
    "localSettings",
    "session"
]);
function bu(t, displayedTypes, labelPredicate, l = Or) {
    let F = Ir(t).filter((a)=>{
        if (!displayedTypes.has(a.type)) {
            return false;
        }
        if ((a.type === "addRules" || a.type === "replaceRules" || a.type === "removeRules") && a.behavior !== "allow") {
            return false;
        }
        return a.destination !== undefined && l.has(a.destination);
    });
    let d = [];
    for (let a of F){
        if (a.type !== "addRules") {
            if (a.type === "addDirectories") {
                if (!Array.isArray(a.directories)) {
                    continue;
                }
                let m = a.directories.filter((h)=>typeof h === "string" && h.trim() !== "" && ae(h) > 0 && dbe(h));
                if (m.length === 0) {
                    continue;
                }
                d.push({
                    ...a,
                    directories: m
                });
                continue;
            }
            d.push(a);
            continue;
        }
        if (a.rules === undefined) {
            continue;
        }
        let f = a.rules.filter((m)=>dbe(_n({
                toolName: m.toolName,
                ...m.ruleContent !== undefined && {
                    ruleContent: m.ruleContent
                }
            })));
        let g = labelPredicate === undefined ? f : f.filter(labelPredicate);
        if (g.length > 0) {
            d.push({
                ...a,
                rules: g
            });
        }
    }
    return d;
}
const Bqn = new Set([
    "addRules",
    "addDirectories"
]);
const JHo = new Set([
    "addRules"
]);
function vr(t) {
    return t.trim() !== t || t === "" || ZQ(t) || Qs(t) !== t || /[\t\n]/.test(t) || ae(t) === 0;
}
function ut(t) {
    if (t === SFe) {
        return false;
    }
    if (vr(t)) {
        return false;
    }
    let u = Un(_n({
        toolName: t
    }));
    if (u.toolName !== t || u.ruleContent !== undefined) {
        return false;
    }
    if (VE(t)) {
        return false;
    }
    let o = go(t);
    if (o !== null && !o.toolName) {
        return false;
    }
    return true;
}
function ku(t) {
    if (typeof t !== "string" || t.trim() === "" || ae(t) === 0 || !dbe(t)) {
        return null;
    }
    return aAs(t);
}
function bn(t) {
    switch(t.length){
        case 0:
            return "";
        case 1:
            return e(n, {
                bold: true,
                children: t[0]
            });
        case 2:
            return r(n, {
                children: [
                    e(n, {
                        bold: true,
                        children: t[0]
                    }),
                    " and ",
                    e(n, {
                        bold: true,
                        children: t[1]
                    })
                ]
            });
        default:
            return r(n, {
                children: [
                    e(n, {
                        bold: true,
                        children: t.slice(0, -1).join(", ")
                    }),
                    ", and",
                    " ",
                    e(n, {
                        bold: true,
                        children: t.slice(-1)[0]
                    })
                ]
            });
    }
}
function y1e(t) {
    if (t.length === 0) {
        return "";
    }
    if (t.length === 1) {
        return e(n, {
            bold: true,
            children: t[0]
        });
    }
    if (t.length === 2) {
        return r(n, {
            children: [
                e(n, {
                    bold: true,
                    children: t[0]
                }),
                " and ",
                e(n, {
                    bold: true,
                    children: t[1]
                })
            ]
        });
    }
    return r(n, {
        children: [
            t.slice(0, -1).map((u, o)=>r(n, {
                    children: [
                        e(n, {
                            bold: true,
                            children: u
                        }),
                        ",",
                        " "
                    ]
                }, o)),
            "and ",
            e(n, {
                bold: true,
                children: t.at(-1)
            })
        ]
    });
}
function CLt(t) {
    return nrn((t?.replace(/\/\*\*$/, "") || "").replace(/^\.\//, "").replace(/^\/\//, "/"));
}
function kn(t) {
    if (!t) {
        return "";
    }
    if (t.endsWith(":*") || t.endsWith(" *")) {
        return t.slice(0, -2);
    }
    return t;
}
function RLt(t, u, o) {
    if (t.toolName === u) {
        let l = kn(t.ruleContent);
        if (!l) {
            return false;
        }
        return Boolean(o ? o(l) : l);
    }
    if (t.toolName === rt) {
        return Boolean(CLt(t.ruleContent));
    }
    return false;
}
function aee(t) {
    if (t !== undefined && Qs(t) === t && !/[\t\n\u2028\u2029]/.test(t) && !ZQ(t)) {
        return iAs(t);
    }
}
function $0(t) {
    return bbr(t);
}
function jqn(t, u, o, l) {
    if (!Array.isArray(t)) {
        return null;
    }
    if (t.length > $we) {
        return null;
    }
    if (t.some((E)=>E === null || typeof E !== "object")) {
        return null;
    }
    let F = t.filter((E)=>E.type === "addRules").flatMap((E)=>E.rules || []);
    let d = t.filter((E)=>E.type === "addDirectories").flatMap((E)=>{
        if (Array.isArray(E.directories)) {
            return E.directories;
        }
        return [];
    });
    if (F.some((E)=>E === null || typeof E !== "object" || typeof E.toolName !== "string" || E.ruleContent !== undefined && typeof E.ruleContent !== "string")) {
        return null;
    }
    if (F.length + d.length > ZPe) {
        return null;
    }
    let a = F.filter((E)=>E.toolName === rt);
    let f = F.filter((E)=>E.toolName === u);
    if (d.some((E)=>typeof E !== "string" || E.trim() === "" || ae(E) === 0 || !dbe(E))) {
        return null;
    }
    let g = D(d);
    let m = D(a.flatMap((E)=>{
        if (E.ruleContent && CLt(E.ruleContent)) {
            return E.ruleContent;
        }
        return [];
    }));
    if (m.some((E)=>!dbe(E))) {
        return null;
    }
    let h = D(f.flatMap((E)=>{
        if (!E.ruleContent) {
            return [];
        }
        if (kn(E.ruleContent)) {
            return [
                E.ruleContent
            ];
        }
        return [];
    }));
    if (h.some((E)=>!dbe(E))) {
        return null;
    }
    let b = n$e(h, (E)=>{
        let T = kn(E) || E;
        return $0(o ? o(T) : T);
    });
    let A = n$e([
        ...m,
        ...g
    ], (E)=>{
        if (m.includes(E)) {
            return $0(CLt(E));
        }
        return $0(E);
    });
    let C = A.slice(0, m.length);
    let B = A.slice(m.length);
    if (ae([
        ...b,
        ...C,
        ...B
    ].join(" and ")) > I9e) {
        return null;
    }
    let L = g.length > 0;
    let U = C.length > 0;
    let O = b.length > 0;
    if (U && !L && !O) {
        return r(n, {
            children: [
                "Yes, allow reading from ",
                y1e(C),
                " from this project"
            ]
        });
    }
    if (L && !U && !O) {
        return r(n, {
            children: [
                "Yes, and always allow access to ",
                y1e(B),
                " from this project"
            ]
        });
    }
    if (O && !L && !U) {
        return r(n, {
            children: [
                "Yes, and don't ask again for ",
                bn(b),
                " commands",
                " ",
                l === undefined ? r(Y, {
                    children: [
                        "in",
                        " ",
                        e(n, {
                            bold: true,
                            children: $n(we())
                        })
                    ]
                }) : r(Y, {
                    children: [
                        "on ",
                        e(n, {
                            bold: true,
                            children: l
                        })
                    ]
                })
            ]
        });
    }
    if ((L || U) && !O) {
        let E = [
            ...B,
            ...C
        ];
        return r(n, {
            children: [
                "Yes, and always allow access to ",
                y1e(E),
                " from this project"
            ]
        });
    }
    if ((L || U) && O) {
        let E = [
            ...B,
            ...C
        ];
        if (E.length === 1 && b.length === 1) {
            return r(n, {
                children: [
                    "Yes, and allow access to ",
                    y1e(E),
                    " and",
                    " ",
                    bn(b),
                    " commands"
                ]
            });
        }
        return r(n, {
            children: [
                "Yes, and allow ",
                y1e(E),
                " access and",
                " ",
                bn(b),
                " commands"
            ]
        });
    }
    return null;
}
const he = Symbol("ConsentRow mint token");
class pe {
    #e = true;
    node;
    applies;
    constructor(t, u, o){
        if (t !== he) {
            throw Error("ConsentRow may only be constructed by the consentRows factories");
        }
        this.node = u;
        this.applies = o;
        Object.freeze(this);
    }
    static is(t) {
        return typeof t === "object" && t !== null && #e in t;
    }
}
const Vw = pe.is;
const QHo = p(()=>_u(Vw));
function ot(t) {
    if (t.length > $we) {
        return null;
    }
    let u = [];
    for (let o of t){
        let l;
        try {
            l = I2().safeParse(o);
        } catch  {
            return null;
        }
        if (!l.success) {
            return null;
        }
        u.push(l.data);
    }
    return Tbo(u);
}
function VO(t, u) {
    if (!Array.isArray(t)) {
        return null;
    }
    let o;
    try {
        o = t.length;
    } catch  {
        return null;
    }
    if (typeof o !== "number" || !Number.isSafeInteger(o) || o < 0 || o > $we) {
        return null;
    }
    let l = 0;
    let F = [];
    for(let m = 0; m < o; m++){
        try {
            let h = t[m];
            let b = h !== null && typeof h === "object" ? {
                ...h
            } : h;
            let A = false;
            if (b !== null && typeof b === "object") {
                let C = b;
                for (let B of [
                    "rules",
                    "directories"
                ]){
                    let k = C[B];
                    if (!Array.isArray(k)) {
                        continue;
                    }
                    let L = k.length;
                    if (typeof L !== "number" || !Number.isSafeInteger(L) || L < 0) {
                        A = true;
                        break;
                    }
                    l += L;
                    if (l > $we * ZPe) {
                        return null;
                    }
                    let U = [];
                    for(let O = 0; O < L; O++){
                        U.push(k[O]);
                    }
                    C[B] = U;
                }
            }
            if (A) {
                continue;
            }
            F.push(b);
        } catch  {}
    }
    let d = [];
    for (let m of F){
        let h;
        try {
            h = I2().safeParse(m);
        } catch  {
            continue;
        }
        if (h.success) {
            d.push(h.data);
        }
    }
    if (d.length === 0) {
        return null;
    }
    let a = bu(d, u.displayedTypes, u.labelPredicate, u.displayedDestinations);
    if (a.length === 0) {
        return null;
    }
    let f = Tbo(a);
    let g = u.renderLabel(f);
    if (g == null || typeof g === "boolean" || g === "") {
        return null;
    }
    return new pe(he, g, f);
}
const Ur = {
    default: "default (ask each time)",
    acceptEdits: "accept edits (auto-approve file edits and common file commands)",
    auto: "auto (no routine prompts; a reviewer model screens actions)",
    dontAsk: "don't ask (auto-deny anything that would prompt)",
    plan: "plan mode (research and propose changes without making them)",
    bypassPermissions: "BYPASS PERMISSIONS (no further prompts)"
};
function Fwe(mode, u) {
    if (mode === "bypassPermissions" && u?.isBypassPermissionsModeAvailable === false) {
        return null;
    }
    let o = ot([
        {
            type: "setMode",
            destination: "session",
            mode
        }
    ]);
    if (o === null) {
        throw Error("setModeRow: schema rejected a designed setMode update");
    }
    if (u?.labelVariant === "plan-keep-context") {
        let l = mode === "acceptEdits" ? "Yes, auto-accept edits" : mode === "default" ? "Yes, manually approve edits" : null;
        if (l !== null) {
            return new pe(he, e(n, {
                children: l
            }), o);
        }
    }
    return new pe(he, r(n, {
        children: [
            "Yes, and switch to ",
            e(n, {
                bold: true,
                children: Ur[mode]
            }),
            " for this session"
        ]
    }), o);
}
function pln(t) {
    if (!Array.isArray(t)) {
        return null;
    }
    let u;
    try {
        u = t.length;
    } catch  {
        return null;
    }
    if (typeof u !== "number" || !Number.isSafeInteger(u) || u < 0 || u > $we) {
        return null;
    }
    let o = [];
    for(let a = 0; a < u; a++){
        try {
            let f = t[a];
            let g = ku(f);
            if (g !== null) {
                o.push(g);
            }
        } catch  {}
    }
    let l = D(o);
    if (l.length === 0) {
        return null;
    }
    if (l.length > ZPe) {
        return null;
    }
    let F = VB(l, (a)=>bbr(a));
    if (ae(F.join(", ")) > I9e) {
        return null;
    }
    let d = ot([
        {
            type: "addDirectories",
            destination: "session",
            directories: l
        }
    ]);
    if (d === null) {
        return null;
    }
    return new pe(he, r(n, {
        children: [
            "Yes, and always allow access to ",
            e(n, {
                bold: true,
                children: F.join(", ")
            }),
            " for this session"
        ]
    }), d);
}
function Wqn(t, u, o) {
    if (typeof t !== "string" || aee(t) !== t) {
        return null;
    }
    if (typeof u !== "string") {
        return null;
    }
    let ruleContent = u.trim();
    if (ruleContent === "" || aee(ruleContent) !== ruleContent) {
        return null;
    }
    if (ruleContent === "*") {
        if (!ut(o)) {
            return null;
        }
        let d = ot([
            {
                type: "addRules",
                rules: [
                    {
                        toolName: o
                    }
                ],
                behavior: "allow",
                destination: "localSettings"
            }
        ]);
        if (d === null) {
            return null;
        }
        return new pe(he, `Yes, and don\u2019t ask again for any ${o} command`, d);
    }
    if (!ut(o) || !yn({
        toolName: o,
        ruleContent
    })) {
        return null;
    }
    let F = ot([
        {
            type: "addRules",
            rules: [
                {
                    toolName: o,
                    ruleContent
                }
            ],
            behavior: "allow",
            destination: "localSettings"
        }
    ]);
    if (F === null) {
        return null;
    }
    return new pe(he, `Yes, and don\u2019t ask again for: ${ruleContent}`, F);
}
const eMr = {
    workflow: "Yes, and switch to auto mode",
    "exit-plan-resume": "Yes, and use auto mode"
};
const jr = (()=>{
    let t = ot([]);
    if (t === null) {
        throw Error("NO_DISPLAYED_UPDATES: empty intake rejected");
    }
    return t;
})();
function fln(t) {
    return new pe(he, eMr[t], jr);
}
function zqn(t, ...u) {
    let o = [
        t,
        ...u
    ];
    for (let d of o){
        if (!Vw(d)) {
            throw Error("combineRows accepts only constructor-produced ConsentRows");
        }
    }
    let l = o.flatMap((d)=>[
            ...d.applies
        ]);
    if (l.length > $we) {
        throw Error("combineRows: combined updates exceed the display intake cap");
    }
    let F = ot(l);
    if (F === null) {
        throw Error("combineRows: schema rejected already-minted updates");
    }
    return new pe(he, e(n, {
        children: o.map((d, a)=>r(n, {
                children: [
                    a > 0 ? "; " : "",
                    d.node
                ]
            }, a))
    }), F);
}
function Bn({ onlyFirst = false } = {}) {
    let o = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
    ].join("|");
    return new RegExp(o, onlyFirst ? undefined : "g");
}
const $r = Bn();
function Ct(t) {
    if (typeof t !== "string") {
        throw TypeError(`Expected a \`string\`, got \`${typeof t}\``);
    }
    return t.replace($r, "");
}
const Bu = ()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
const Yr = new Intl.Segmenter;
const Wr = /^\p{Default_Ignorable_Code_Point}$/u;
function Ye(t, u = {}) {
    if (typeof t !== "string" || t.length === 0) {
        return 0;
    }
    let { ambiguousIsNarrow = true, countAnsiEscapeCodes = false } = u;
    if (!countAnsiEscapeCodes) {
        t = Ct(t);
    }
    if (t.length === 0) {
        return 0;
    }
    let F = 0;
    let d = {
        ambiguousAsWide: !ambiguousIsNarrow
    };
    for (let { segment } of Yr.segment(t)){
        let f = segment.codePointAt(0);
        if (f <= 31 || f >= 127 && f <= 159) {
            continue;
        }
        if (f >= 8203 && f <= 8207 || f === 65279) {
            continue;
        }
        if (f >= 768 && f <= 879 || f >= 6832 && f <= 6911 || f >= 7616 && f <= 7679 || f >= 8400 && f <= 8447 || f >= 65056 && f <= 65071) {
            continue;
        }
        if (f >= 55296 && f <= 57343) {
            continue;
        }
        if (f >= 65024 && f <= 65039) {
            continue;
        }
        if (Wr.test(segment)) {
            continue;
        }
        if (Bu().test(segment)) {
            F += 2;
            continue;
        }
        F += Ots(f, d);
    }
    return F;
}
const Ot = new Set([
    "\x1B",
    "\x9B"
]);
const qr = 39;
const xn = "\x07";
const Ru = "[";
const Vr = "]";
const wu = "m";
const It = `${Vr}8;;`;
const Au = (t)=>`${Ot.values().next().value}${Ru}${t}${wu}`;
const xu = (t)=>`${Ot.values().next().value}${It}${t}${xn}`;
const Kr = (t)=>t.split(" ").map((u)=>Ye(u));
const An = (t, u, o)=>{
    let l = [
        ...u
    ];
    let F = false;
    let d = false;
    let a = Ye(Ct(t.at(-1)));
    for (let [f, g] of l.entries()){
        let m = Ye(g);
        if (a + m <= o) {
            t[t.length - 1] += g;
        } else {
            t.push(g);
            a = 0;
        }
        if (Ot.has(g)) {
            F = true;
            d = l.slice(f + 1, f + 1 + It.length).join("") === It;
        }
        if (F) {
            if (d) {
                if (g === xn) {
                    F = false;
                    d = false;
                }
            } else if (g === wu) {
                F = false;
            }
            continue;
        }
        a += m;
        if (a === o && f < l.length - 1) {
            t.push("");
            a = 0;
        }
    }
    if (!a && t.at(-1).length > 0 && t.length > 1) {
        t[t.length - 2] += t.pop();
    }
};
const Gr = (t)=>{
    let u = t.split(" ");
    let u_length = u.length;
    while(u_length > 0){
        if (Ye(u[u_length - 1]) > 0) {
            break;
        }
        u_length--;
    }
    if (u_length === u.length) {
        return t;
    }
    return u.slice(0, u_length).join(" ") + u.slice(u_length).join("");
};
const Hr = (t, u, o = {})=>{
    if (o.trim !== false && t.trim() === "") {
        return "";
    }
    let l = "";
    let F;
    let d;
    let a = Kr(t);
    let f = [
        ""
    ];
    for (let [b, A] of t.split(" ").entries()){
        if (o.trim !== false) {
            f[f.length - 1] = f.at(-1).trimStart();
        }
        let C = Ye(f.at(-1));
        if (b !== 0) {
            if (C >= u && (o.wordWrap === false || o.trim === false)) {
                f.push("");
                C = 0;
            }
            if (C > 0 || o.trim === false) {
                f[f.length - 1] += " ";
                C++;
            }
        }
        if (o.hard && a[b] > u) {
            let B = u - C;
            let k = 1 + Math.floor((a[b] - B - 1) / u);
            if (Math.floor((a[b] - 1) / u) < k) {
                f.push("");
            }
            An(f, A, u);
            continue;
        }
        if (C + a[b] > u && C > 0 && a[b] > 0) {
            if (o.wordWrap === false && C < u) {
                An(f, A, u);
                continue;
            }
            f.push("");
        }
        if (C + a[b] > u && o.wordWrap === false) {
            An(f, A, u);
            continue;
        }
        f[f.length - 1] += A;
    }
    if (o.trim !== false) {
        f = f.map((b)=>Gr(b));
    }
    let g = f.join(`
`);
    let m = [
        ...g
    ];
    let h = 0;
    for (let [b, A] of m.entries()){
        l += A;
        if (Ot.has(A)) {
            let { groups } = new RegExp(`(?:\\${Ru}(?<code>\\d+)m|\\${It}(?<uri>.*)${xn})`).exec(g.slice(h)) || {
                groups: {}
            };
            if (groups.code !== undefined) {
                let k = Number.parseFloat(groups.code);
                F = k === qr ? undefined : k;
            } else if (groups.uri !== undefined) {
                d = groups.uri.length === 0 ? undefined : groups.uri;
            }
        }
        let C = z3.codes.get(Number(F));
        if (m[b + 1] === `
`) {
            if (d) {
                l += xu("");
            }
            if (F && C) {
                l += Au(C);
            }
        } else if (A === `
`) {
            if (F && C) {
                l += Au(F);
            }
            if (d) {
                l += xu(d);
            }
        }
        h += A.length;
    }
    return l;
};
function it(t, u, o) {
    return String(t).normalize().replaceAll(`\r
`, `
`).split(`
`).map((l)=>Hr(l, u, o)).join(`
`);
}
N();
N();
function ti(X) {
    return X + 1;
}
function Ut(t) {
    let d = w(18);
    let { permissionResult } = t;
    let o = permissionResult?.behavior === "ask" ? permissionResult.denialLimitFallback?.deadlineEpochMs ?? permissionResult.autoDenyWindow?.deadlineEpochMs : undefined;
    let l = nt();
    let F = on();
    let clockAt;
    if (d[0] !== F) {
        clockAt = F.now();
        d[0] = F;
        d[1] = clockAt;
    } else {
        clockAt = d[1];
    }
    let epochAt;
    if (d[2] === S) {
        epochAt = Date.now();
        d[2] = epochAt;
    } else {
        epochAt = d[2];
    }
    let g;
    if (d[3] !== clockAt) {
        g = {
            clockAt,
            epochAt
        };
        d[3] = clockAt;
        d[4] = g;
    } else {
        g = d[4];
    }
    let m = g;
    let h;
    if (d[5] !== m.clockAt || d[6] !== m.epochAt || d[7] !== F) {
        h = ()=>m.epochAt + (F.now() - m.clockAt);
        d[5] = m.clockAt;
        d[6] = m.epochAt;
        d[7] = F;
        d[8] = h;
    } else {
        h = d[8];
    }
    let b = h;
    let [, A] = y(0);
    let C;
    if (d[9] === S) {
        C = ()=>A(ti);
        d[9] = C;
    } else {
        C = d[9];
    }
    Di(C, o !== undefined && !l ? 1000 : null);
    if (o === undefined) {
        return null;
    }
    if (l) {
        let B = Math.max(0, o - b());
        let k;
        if (d[10] !== B) {
            let L = Math.round(B / 60000);
            let U = Math.max(1, Math.round(B / 1000));
            k = B >= 60000 ? `about ${L} ${I(L, "minute")}` : `about ${U} ${I(U, "second")}`;
            d[10] = B;
            d[11] = k;
        } else {
            k = d[11];
        }
        let O = k;
        const E = `${iy} Claude Code will automatically deny this request in ${O}, to avoid blocking progress on an unattended session`;
        let T;
        if (d[12] !== E) {
            T = e(s, {
                marginBottom: 1,
                children: e(n, {
                    color: "warning",
                    children: E
                })
            });
            d[12] = E;
            d[13] = T;
        } else {
            T = d[13];
        }
        return T;
    }
    let W = Math.max(0, o - b());
    let oe = Math.floor(W / 60000);
    let j = Math.floor(W % 60000 / 1000);
    const k = String(j);
    let E;
    if (d[14] !== k) {
        E = k.padStart(2, "0");
        d[14] = k;
        d[15] = E;
    } else {
        E = d[15];
    }
    let z = `${oe}:${E}`;
    const T = `${iy} Claude Code will automatically deny this request in ${z}, to avoid blocking progress on an unattended session`;
    let q;
    if (d[16] !== T) {
        q = e(s, {
            marginBottom: 1,
            children: e(n, {
                color: "warning",
                children: T
            })
        });
        d[16] = T;
        d[17] = q;
    } else {
        q = d[17];
    }
    return q;
}
function ci(Qe) {
    return Qe.toolPermissionContext.mode;
}
function di(gu, Je) {
    return e(_i, {
        multiline: Cb(gu),
        children: Je
    });
}
const xLt = 7;
function ni(hookSource) {
    if (hookSource?.startsWith("plugin")) {
        return "plugin hooks.json";
    }
    if (hookSource?.startsWith("skill")) {
        return "SKILL.md";
    }
    return "settings.json";
}
function qt(t) {
    if (t?.type === "rule" && t.rule.ruleBehavior === "ask") {
        return t.rule;
    }
    if (t?.type === "subcommandResults") {
        for (let u of t.reasons.values()){
            if (u.behavior === "ask") {
                let o = qt(u.decisionReason);
                if (o) {
                    return o;
                }
            }
        }
    }
}
function Ne(t, u, o) {
    if (!t) {
        return null;
    }
    let l = (F)=>Bi(F).text;
    if (t.type === "classifier") {
        if (t.classifier === "auto-mode") {
            return {
                reasonString: `Auto mode classifier requires confirmation for this ${u}.
${l(t.reason)}`,
                configString: undefined,
                themeColor: "error"
            };
        }
        return {
            reasonString: `Classifier ${ge.bold(l(t.classifier))} requires confirmation for this ${u}.
${l(t.reason)}`,
            configString: undefined
        };
    }
    if (t.type === "subcommandResults") {
        let F = qt(t);
        if (F) {
            return Ne({
                type: "rule",
                rule: F
            }, u, o);
        }
        for (let d of t.reasons.values()){
            if (d.behavior === "ask" || d.behavior === "passthrough") {
                let a = Ne(d.decisionReason, u, o);
                if (a) {
                    return a;
                }
            }
        }
    }
    switch(t.type){
        case "rule":
            {
                let F = ge.bold(l(_n(t.rule.ruleValue)));
                if (o === "auto" && t.rule.ruleBehavior === "ask" && t.rule.source !== "policySettings") {
                    return {
                        reasonString: `Ask rule ${F} overrides auto mode for this ${u}.`,
                        configString: "/permissions to let auto mode decide"
                    };
                }
                return {
                    reasonString: `Permission rule ${F} requires confirmation for this ${u}.`,
                    configString: t.rule.source === "policySettings" ? undefined : "/permissions to update rules"
                };
            }
        case "hook":
            {
                let F = t.reason ? `:
${l(t.reason)}` : ".";
                let d = t.hookSource ? ` ${ge.dim(`[${l(t.hookSource)}]`)}` : "";
                return {
                    reasonString: `Hook ${ge.bold(l(t.hookName))} requires confirmation for this ${u}${F}${d}`,
                    configString: `${ni(t.hookSource)} to update hooks`
                };
            }
        case "safetyCheck":
        case "other":
            return {
                reasonString: l(t.reason),
                configString: undefined
            };
        case "workingDir":
            return {
                reasonString: l(t.reason),
                configString: "/permissions to update rules"
            };
        default:
            return null;
    }
}
function qw(t) {
    let A = w(30);
    let { permissionResult, toolType, rowBudget, rowColumns } = t;
    let d = V(ci);
    let a = permissionResult?.behavior === "ask" ? permissionResult.denialLimitFallback?.disclosure : undefined;
    let f = Ne(permissionResult?.decisionReason, toolType, d);
    let g = a !== undefined && a !== permissionResult?.decisionReason ? Ne(a, toolType, d) : null;
    let columns = ke().columns;
    let h = a !== undefined || rowBudget !== undefined;
    let b = rowColumns !== undefined ? Math.max(1, rowColumns) : Math.max(20, columns - 8);
    let C;
    if (A[0] !== h || A[1] !== b || A[2] !== rowColumns) {
        C = (B, k)=>{
            if (!h) {
                return B;
            }
            let L = k;
            let O = it(B, b, {
                trim: true,
                hard: true
            }).split(`
`).map((U)=>pt(U, b));
            if (O.length <= L) {
                return O.join(`
`);
            }
            let E = Math.max(1, L - 1);
            let T = `\u2026 (+${O.length - E} more lines)`;
            return [
                ...O.slice(0, E),
                rowColumns === undefined ? T : pt(T, b)
            ].join(`
`);
        };
        A[0] = h;
        A[1] = b;
        A[2] = rowColumns;
        A[3] = C;
    } else {
        C = A[3];
    }
    let W = C;
    let oe = permissionResult?.behavior === "ask" ? permissionResult.matchedAskRule : undefined;
    let j = oe !== undefined && qt(permissionResult?.decisionReason) === undefined ? Ne({
        type: "rule",
        rule: oe
    }, toolType, d) : null;
    let z;
    if (A[4] !== h || A[5] !== b) {
        z = (q)=>{
            if (q === undefined || !h) {
                return 0;
            }
            return Lt(it(q, b, {
                trim: true,
                hard: true
            }), `
`) + 1;
        };
        A[4] = h;
        A[5] = b;
        A[6] = z;
    } else {
        z = A[6];
    }
    let X = z;
    let v = g && rowBudget !== undefined ? [
        pt(Tr(g.reasonString), b),
        ...g.reasonString.split(`
`).slice(1)
    ].join(`
`) : g?.reasonString;
    let H = {
        consent: X(f?.reasonString),
        streak: X(v),
        askRule: X(j?.reasonString)
    };
    let K;
    if (A[7] !== rowBudget) {
        K = rowBudget === undefined ? {
            consent: 4,
            streak: 4,
            askRule: 4
        } : {
            consent: 2,
            streak: 3,
            askRule: 2
        };
        A[7] = rowBudget;
        A[8] = K;
    } else {
        K = A[8];
    }
    let re = K;
    let ie = Math.min(12, Math.max(xLt, rowBudget ?? 12));
    let Q = {
        consent: Math.min(H.consent, re.consent),
        streak: Math.min(H.streak, re.streak),
        askRule: Math.min(H.askRule, re.askRule)
    };
    let J = ie - (Q.consent + Q.streak + Q.askRule);
    for (const fe of rowBudget === undefined ? [
        "consent",
        "streak",
        "askRule"
    ] : [
        "streak",
        "consent",
        "askRule"
    ]){
        if (J <= 0) {
            break;
        }
        let Re = Math.min(H[fe] - Q[fe], J);
        Q[fe] = Q[fe] + Re;
        J = J - Re;
    }
    let me = f !== null && f !== undefined ? W(f.reasonString, Q.consent) : undefined;
    let se = v !== undefined ? W(v, Q.streak) : undefined;
    let ee = j ? W(j.reasonString, Q.askRule) : undefined;
    let Xe;
    if (A[9] !== permissionResult) {
        Xe = e(Ut, {
            permissionResult
        });
        A[9] = permissionResult;
        A[10] = Xe;
    } else {
        Xe = A[10];
    }
    let Ce = Xe;
    if (!f && !j && !g) {
        return Ce;
    }
    let color = f?.themeColor ?? (permissionResult?.decisionReason?.type === "hook" && d === "auto" ? "warning" : undefined);
    let Dt = di;
    let ne;
    if (A[11] !== me || A[12] !== f || A[13] !== color) {
        ne = f && Dt(me ?? f.reasonString, color ? e(n, {
            color,
            children: me ?? f.reasonString
        }) : e(n, {
            children: e(Do, {
                children: me ?? f.reasonString
            })
        }));
        A[11] = me;
        A[12] = f;
        A[13] = color;
        A[14] = ne;
    } else {
        ne = A[14];
    }
    let Ze;
    if (A[15] !== f) {
        Ze = f?.configString && e(n, {
            dimColor: true,
            children: f.configString
        });
        A[15] = f;
        A[16] = Ze;
    } else {
        Ze = A[16];
    }
    let Mt;
    if (A[17] !== j || A[18] !== ee || A[19] !== f?.configString) {
        Mt = j && r(Y, {
            children: [
                Dt(ee ?? j.reasonString, e(n, {
                    children: e(Do, {
                        children: ee ?? j.reasonString
                    })
                })),
                j.configString && j.configString !== f?.configString && e(n, {
                    dimColor: true,
                    children: j.configString
                })
            ]
        });
        A[17] = j;
        A[18] = ee;
        A[19] = f?.configString;
        A[20] = Mt;
    } else {
        Mt = A[20];
    }
    let Pt;
    if (A[21] !== se || A[22] !== g) {
        Pt = g && Dt(se ?? g.reasonString, g.themeColor ? e(n, {
            color: g.themeColor,
            children: se ?? g.reasonString
        }) : e(n, {
            children: e(Do, {
                children: se ?? g.reasonString
            })
        }));
        A[21] = se;
        A[22] = g;
        A[23] = Pt;
    } else {
        Pt = A[23];
    }
    let Oe;
    if (A[24] !== Ce || A[25] !== ne || A[26] !== Ze || A[27] !== Mt || A[28] !== Pt) {
        Oe = r(s, {
            marginBottom: 1,
            flexDirection: "column",
            children: [
                ne,
                Ze,
                Mt,
                Pt,
                Ce
            ]
        });
        A[24] = Ce;
        A[25] = ne;
        A[26] = Ze;
        A[27] = Mt;
        A[28] = Pt;
        A[29] = Oe;
    } else {
        Oe = A[29];
    }
    return Oe;
}
N();
N();
function Ni(ne) {
    return {
        ...ne,
        attribution: {
            ...ne.attribution,
            escapeCount: ne.attribution.escapeCount + 1
        }
    };
}
function ILt(t) {
    switch(t){
        case "yes":
            return "accept";
        case "no":
            return "reject";
        default:
            return undefined;
    }
}
function Uwe(t) {
    let W = w(35);
    let { feedbackTypeOf, toolName, isMcp, initialFocusedType } = t;
    let d = Hn();
    let a = nt();
    let [f, setAcceptFeedback] = y("");
    let [m, setRejectFeedback] = y("");
    let [b, A] = y(false);
    let [C, B] = y(false);
    let [k, L] = y(false);
    let [U, O] = y(false);
    let [E, T] = y(undefined);
    let oe;
    if (W[0] !== feedbackTypeOf || W[1] !== E || W[2] !== initialFocusedType) {
        oe = E === undefined ? initialFocusedType : feedbackTypeOf(E);
        W[0] = feedbackTypeOf;
        W[1] = E;
        W[2] = initialFocusedType;
        W[3] = oe;
    } else {
        oe = W[3];
    }
    let j = oe;
    let z;
    if (W[4] !== b || W[5] !== feedbackTypeOf || W[6] !== isMcp || W[7] !== C || W[8] !== toolName) {
        z = (q)=>{
            let X = feedbackTypeOf(q);
            let v = {
                toolName,
                isMcp
            };
            if (X === "accept") {
                if (b) {
                    A(false);
                    i("tengu_accept_feedback_mode_collapsed", v);
                } else {
                    A(true);
                    L(true);
                    i("tengu_accept_feedback_mode_entered", v);
                }
            } else if (X === "reject") {
                if (C) {
                    B(false);
                    i("tengu_reject_feedback_mode_collapsed", v);
                } else {
                    B(true);
                    O(true);
                    i("tengu_reject_feedback_mode_entered", v);
                }
            }
        };
        W[4] = b;
        W[5] = feedbackTypeOf;
        W[6] = isMcp;
        W[7] = C;
        W[8] = toolName;
        W[9] = z;
    } else {
        z = W[9];
    }
    let handleInputModeToggle = z;
    let K;
    if (W[10] !== f || W[11] !== b || W[12] !== feedbackTypeOf || W[13] !== m || W[14] !== C) {
        K = (re)=>{
            let ie = feedbackTypeOf(re);
            if (ie !== "accept" && b && !f.trim()) {
                A(false);
            }
            if (ie !== "reject" && C && !m.trim()) {
                B(false);
            }
            T(re);
        };
        W[10] = f;
        W[11] = b;
        W[12] = feedbackTypeOf;
        W[13] = m;
        W[14] = C;
        W[15] = K;
    } else {
        K = W[15];
    }
    let handleFocus = K;
    let J;
    if (W[16] !== k || W[17] !== isMcp || W[18] !== U || W[19] !== toolName) {
        J = (fe, Re)=>{
            i(fe === "accept" ? "tengu_accept_submitted" : "tengu_reject_submitted", {
                toolName,
                isMcp,
                has_instructions: !!Re,
                instructions_length: Re?.length ?? 0,
                entered_feedback_mode: fe === "accept" ? k : U
            });
        };
        W[16] = k;
        W[17] = isMcp;
        W[18] = U;
        W[19] = toolName;
        W[20] = J;
    } else {
        J = W[20];
    }
    let logSubmitted = J;
    let se;
    if (W[21] !== d) {
        se = ()=>{
            i("tengu_permission_request_escape", {});
            d(Ni);
        };
        W[21] = d;
        W[22] = se;
    } else {
        se = W[22];
    }
    let logEscape = se;
    let Xe = !a && (j === "accept" && !b || j === "reject" && !C);
    let Ce;
    if (W[23] !== Xe) {
        Ce = Xe && e(G, {
            chord: "tab",
            action: "amend"
        });
        W[23] = Xe;
        W[24] = Ce;
    } else {
        Ce = W[24];
    }
    let hintNode = Ce;
    let Dt;
    if (W[25] !== f || W[26] !== b || W[27] !== handleFocus || W[28] !== handleInputModeToggle || W[29] !== hintNode || W[30] !== logEscape || W[31] !== logSubmitted || W[32] !== m || W[33] !== C) {
        Dt = {
            acceptFeedback: f,
            rejectFeedback: m,
            setAcceptFeedback,
            setRejectFeedback,
            acceptInputMode: b,
            rejectInputMode: C,
            handleInputModeToggle,
            handleFocus,
            logSubmitted,
            logEscape,
            hintNode
        };
        W[25] = f;
        W[26] = b;
        W[27] = handleFocus;
        W[28] = handleInputModeToggle;
        W[29] = hintNode;
        W[30] = logEscape;
        W[31] = logSubmitted;
        W[32] = m;
        W[33] = C;
        W[34] = Dt;
    } else {
        Dt = W[34];
    }
    return Dt;
}
function Oi(m) {
    return m.notifications.current?.key === "kill-agents-confirm";
}
const format = {
    keyCase: "lower"
};
function eIe(t) {
    let d = w(6);
    let u = ma("chat:killAgents", "Chat", "ctrl+x ctrl+k");
    let o = Wo(Oi);
    if (!((t?.type === "subagent" || t?.type === "workflow-agent") && t.stoppableByKillAgents === true) || u === "") {
        return null;
    }
    const action = o === true ? "again to stop background agents" : "twice to stop background agents";
    let a;
    if (d[0] !== u || d[1] !== action) {
        a = e(G, {
            chord: u,
            action,
            format,
            terse: true
        });
        d[0] = u;
        d[1] = action;
        d[2] = a;
    } else {
        a = d[2];
    }
    let f = a;
    let g;
    if (d[3] !== o || d[4] !== f) {
        g = o === true ? e(n, {
            color: "text",
            children: f
        }) : f;
        d[3] = o;
        d[4] = f;
        d[5] = g;
    } else {
        g = d[5];
    }
    return g;
}
const Lo = {
    accept: "tell Claude what to do next",
    reject: "tell Claude what to do differently"
};
function D9({ options, onSelect, onCancel, question = "Do you want to proceed?", toolAnalyticsContext, defaultFocusValue, hideIndexes, requestSource }) {
    let [defaultFocusValue_1, m] = y(defaultFocusValue);
    P(()=>{
        m(undefined);
    }, []);
    let feedbackTypeOf = le((v)=>options.find((H)=>H.value === v)?.feedbackConfig?.type, [
        options
    ]);
    let { acceptFeedback, rejectFeedback, setAcceptFeedback, setRejectFeedback, acceptInputMode, rejectInputMode, handleInputModeToggle, handleFocus, logSubmitted, logEscape, hintNode } = Uwe({
        feedbackTypeOf,
        toolName: toolAnalyticsContext?.toolName,
        isMcp: toolAnalyticsContext?.isMcp ?? false
    });
    let oe = eIe(requestSource);
    let options_1 = Z(()=>options.map((v)=>{
            let { value, label, feedbackConfig } = v;
            if (!feedbackConfig) {
                return {
                    label,
                    value,
                    description: v.description
                };
            }
            let { type, placeholder } = feedbackConfig;
            let J = type === "accept" ? acceptInputMode : rejectInputMode;
            let onChange = type === "accept" ? setAcceptFeedback : setRejectFeedback;
            let Re = Lo[type];
            if (J) {
                return {
                    type: "input",
                    label,
                    value,
                    placeholder: placeholder ?? Re,
                    onChange,
                    allowEmptySubmitToCancel: true
                };
            }
            return {
                label,
                value,
                description: v.description
            };
        }), [
        options,
        acceptInputMode,
        rejectInputMode
    ]);
    let onChange = le((v)=>{
        let H = options.find((Q)=>Q.value === v);
        if (!H) {
            return;
        }
        let H_feedbackConfig = H.feedbackConfig;
        let re;
        let ie = "";
        if (H_feedbackConfig) {
            ie = (H_feedbackConfig.type === "accept" ? acceptFeedback : rejectFeedback).trim();
            if (ie) {
                re = ie;
            }
        }
        if (onSelect(v, re) === false) {
            return false;
        }
        if (H_feedbackConfig) {
            logSubmitted(H_feedbackConfig.type, ie);
        }
    }, [
        options,
        acceptFeedback,
        rejectFeedback,
        onSelect,
        logSubmitted
    ]);
    let q = Z(()=>{
        let v = options.find((K)=>K.feedbackConfig?.type === "accept" && acceptInputMode || K.feedbackConfig?.type === "reject" && rejectInputMode);
        let H = {};
        for (let K of options){
            if (K.keybinding) {
                H[K.keybinding] = ()=>{
                    if (v) {
                        return handleInputModeToggle(v.value);
                    }
                    return onChange(K.value);
                };
            }
        }
        return H;
    }, [
        options,
        acceptInputMode,
        rejectInputMode,
        handleInputModeToggle,
        onChange
    ]);
    nn(q, {
        context: "Confirmation"
    });
    let onCancel_1 = le(()=>{
        if (onCancel?.() === false) {
            return;
        }
        logEscape();
    }, [
        onCancel,
        logEscape
    ]);
    return r(s, {
        flexDirection: "column",
        children: [
            typeof question === "string" ? e(n, {
                children: question
            }) : question,
            e(Ve, {
                selectedValue,
                options: options_1,
                defaultFocusValue: defaultFocusValue_1,
                hideIndexes,
                inlineDescriptions: true,
                onChange,
                onCancel: onCancel_1,
                onFocus: handleFocus,
                onInputModeToggle: handleInputModeToggle
            }),
            e(s, {
                marginTop: 1,
                children: e(n, {
                    dimColor: true,
                    wrap: oe ? "truncate" : undefined,
                    children: r(be, {
                        children: [
                            e(G, {
                                chord: "escape",
                                action: "cancel"
                            }),
                            hintNode,
                            oe
                        ]
                    })
                })
            })
        ]
    });
}
N();
function ds({ style }) {
    return style === "value";
}
function ps({ style }) {
    return style !== "value";
}
function Fs({ text, style }, re) {
    return e(n, {
        bold: style === "question",
        children: text
    }, re);
}
function fs({ text }, J) {
    return e(n, {
        dimColor: true,
        children: text
    }, `value-${J}`);
}
const qe = 12;
const en = 60;
const Du = qe * en;
const au = 4;
const es = /^(?:replacing|source|into|type|artifact)(?: \d+)?: https?:\/\/[^\s/]+\/(?:[^\s/]+\/)*(?:artifact|frame)\/(?:[A-Za-z0-9_-]*-)?(?:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|[A-Za-z0-9_-]{22})\/?$/;
function ts(t, u) {
    if (ae(t) <= u) {
        return t;
    }
    let o = $1(t, Math.floor(u / 2));
    return o + xO(t, u - ae(o));
}
function lu(t, u) {
    let o = Math.max(1, u);
    let l = [
        ...t.question === undefined ? [] : [
            {
                text: t.question,
                style: "question"
            }
        ],
        ...t.lines.map((a)=>({
                text: a,
                style: "line"
            })),
        ...t.values.map((a)=>({
                text: a,
                style: "value"
            }))
    ];
    let F = -1;
    let rows = l.flatMap(({ text, style })=>{
        let g = text.replace(/\r\n|[\r\n\u2028\u2029]/g, " ");
        let m = style === "value" ? F += 1 : undefined;
        if (style === "value" && !es.test(g)) {
            return [
                {
                    text: ts(g, o),
                    style,
                    value: m
                }
            ];
        }
        return Nu(style === "value" ? g : text, o, {
            trim: true,
            hard: true
        }).split(`
`).map((h)=>({
                text: pt(h, o),
                style,
                ...m !== undefined && {
                    value: m
                }
            }));
    });
    return {
        rows,
        gutter: t.values.length > 0 || t.lines.length > 0 || rows.length > l.length || l.some(({ text })=>Cb(text))
    };
}
function tn(t) {
    let o = w(31);
    let { card } = t;
    if (card.rows.length === 0) {
        return null;
    }
    let l;
    let F;
    let d;
    let a;
    let f;
    let g;
    let m;
    let h;
    let multiline;
    let A;
    if (o[0] !== card.gutter || o[1] !== card.rows) {
        let C = card.rows.filter(ds);
        let B = card.rows.filter(ps);
        let k = card.rows.length <= qe;
        let L = C;
        if (!k) {
            let U = qe - 3;
            let O = 0;
            while(O < C.length){
                let E = C[O].value;
                let T = O;
                while(T < C.length && C[T].value === E){
                    T = T + 1;
                }
                if (T > U) {
                    break;
                }
                O = T;
            }
            L = C.slice(0, O);
        }
        a = C.length - L.length;
        let W = qe - 1 - L.length - (a > 0 ? 1 : 0);
        let oe = k ? B : B.slice(0, Math.max(1, W));
        let j = B.length - oe.length;
        d = s;
        A = "column";
        F = _i;
        multiline = card.gutter;
        l = s;
        f = "column";
        g = oe.map(Fs);
        if (o[12] !== j) {
            m = j > 0 && r(n, {
                dimColor: true,
                children: [
                    "… (+",
                    j,
                    " more lines)"
                ]
            });
            o[12] = j;
            o[13] = m;
        } else {
            m = o[13];
        }
        h = L.map(fs);
        o[0] = card.gutter;
        o[1] = card.rows;
        o[2] = l;
        o[3] = F;
        o[4] = d;
        o[5] = a;
        o[6] = f;
        o[7] = g;
        o[8] = m;
        o[9] = h;
        o[10] = multiline;
        o[11] = A;
    } else {
        l = o[2];
        F = o[3];
        d = o[4];
        a = o[5];
        f = o[6];
        g = o[7];
        m = o[8];
        h = o[9];
        multiline = o[10];
        A = o[11];
    }
    let z;
    if (o[14] !== a) {
        z = a > 0 && r(n, {
            dimColor: true,
            children: [
                "… (+",
                a,
                " more lines)"
            ]
        });
        o[14] = a;
        o[15] = z;
    } else {
        z = o[15];
    }
    let q;
    if (o[16] !== l || o[17] !== f || o[18] !== g || o[19] !== m || o[20] !== h || o[21] !== z) {
        q = r(l, {
            flexDirection: f,
            children: [
                g,
                m,
                h,
                z
            ]
        });
        o[16] = l;
        o[17] = f;
        o[18] = g;
        o[19] = m;
        o[20] = h;
        o[21] = z;
        o[22] = q;
    } else {
        q = o[22];
    }
    let X;
    if (o[23] !== F || o[24] !== multiline || o[25] !== q) {
        X = e(F, {
            multiline,
            children: q
        });
        o[23] = F;
        o[24] = multiline;
        o[25] = q;
        o[26] = X;
    } else {
        X = o[26];
    }
    let v;
    if (o[27] !== d || o[28] !== A || o[29] !== X) {
        v = e(d, {
            flexDirection: A,
            children: X
        });
        o[27] = d;
        o[28] = A;
        o[29] = X;
        o[30] = v;
    } else {
        v = o[30];
    }
    return v;
}
N();
function Bs(k) {
    return k.toolPermissionContext;
}
const mln = "· workflows run best with it on";
function PLt(t) {
    let F = w(10);
    let u = V(Bs);
    let o = Hn();
    let { addNotification } = Eo();
    let d;
    if (F[0] !== u) {
        d = (u.mode === "default" || u.mode === "acceptEdits") && kj(u);
        F[0] = u;
        F[1] = d;
    } else {
        d = F[1];
    }
    let canOfferAutoMode = d;
    let offered = t?.type === "workflow-agent" && canOfferAutoMode;
    let g;
    if (F[2] !== addNotification || F[3] !== o || F[4] !== u) {
        g = (m)=>{
            let h = m === undefined ? "workflow_permission_prompt" : m;
            if (!cT("auto", u, (b)=>o((A)=>{
                    let toolPermissionContext = b(A.toolPermissionContext);
                    if (toolPermissionContext === A.toolPermissionContext) {
                        return A;
                    }
                    return {
                        ...A,
                        toolPermissionContext
                    };
                }), h).ok) {
                addNotification({
                    key: "workflow-auto-mode-unavailable",
                    kind: "warning",
                    text: R_t(),
                    color: "warning",
                    priority: "high"
                });
                return false;
            }
            return true;
        };
        F[2] = addNotification;
        F[3] = o;
        F[4] = u;
        F[5] = g;
    } else {
        g = F[5];
    }
    let enableAutoMode = g;
    let m;
    if (F[6] !== canOfferAutoMode || F[7] !== enableAutoMode || F[8] !== offered) {
        m = {
            offered,
            canOfferAutoMode,
            enableAutoMode
        };
        F[6] = canOfferAutoMode;
        F[7] = enableAutoMode;
        F[8] = offered;
        F[9] = m;
    } else {
        m = F[9];
    }
    return m;
}
N();
const unitsRemaining = 200000;
const cu = unitsRemaining;
const remaining = 10000;
const xs = 1000;
const ws = 200000;
function $o(t) {
    return typeof t === "string" && t.length <= 256;
}
const xt = 80;
const Ss = new Set([
    "channel_id",
    "channel"
]);
const Ts = new Set([
    "ts",
    "thread_ts"
]);
const Ms = /^\d{10}\.\d{6}$/;
const Ps = /\b\d{4}\b/;
const _s = /\d{1,2}:\d{2}/;
function Le(t, u, o, l) {
    return ae(t) + 2 + ae(u) + (o === undefined ? 0 : ae(o) + 3) <= Math.min(xt, l - 2);
}
const Ns = 64;
function pu(t, u, o = 0, l = {
    remaining,
    unitsRemaining
}) {
    if (typeof t === "string") {
        if (t.length + 2 > l.unitsRemaining) {
            throw Error("value exceeds the units display budget");
        }
        let F = _(t);
        l.unitsRemaining -= F.length;
        if (l.unitsRemaining < 0) {
            throw Error("value exceeds the units display budget");
        }
        return F;
    }
    if (t === null || typeof t === "number" || typeof t === "boolean") {
        let F = String(t);
        l.unitsRemaining -= F.length;
        if (l.unitsRemaining < 0) {
            throw Error("value exceeds the units display budget");
        }
        return F;
    }
    if (o >= Ns) {
        throw Error("value exceeds the display depth bound");
    }
    if (Array.isArray(t)) {
        if (t.length === 0) {
            return "[]";
        }
        let F = t.length;
        if (typeof F !== "number" || !Number.isSafeInteger(F) || F < 0) {
            throw Error("value exceeds the element display budget");
        }
        l.remaining -= F;
        if (l.remaining < 0) {
            throw Error("value exceeds the element display budget");
        }
        let d = [];
        for(let g = 0; g < F; g++){
            d.push(pu(t[g], u + 1, o + 1, l));
        }
        if (d.every((g)=>!g.includes(`
`))) {
            let g = `[${d.join(", ")}]`;
            if (ae(g) <= xt) {
                return g;
            }
        }
        let a = "  ".repeat(u + 1);
        let f = "  ".repeat(u);
        return `[
${d.map((g)=>a + g).join(`,
`)}
${f}]`;
    }
    if (typeof t === "object") {
        let F = Object.entries(t);
        if (F.length === 0) {
            return "{}";
        }
        l.remaining -= F.length;
        if (l.remaining < 0) {
            throw Error("value exceeds the element display budget");
        }
        for (let [m] of F){
            if (m.length > ws) {
                throw Error("nested key exceeds the display bound");
            }
            if (m.length > l.unitsRemaining) {
                throw Error("keys exceed the units display budget");
            }
            if (xg(m) !== m) {
                throw Error("nested key display would drop code points");
            }
            l.unitsRemaining -= m.length;
        }
        let d = pQt(F.map(([m])=>m));
        for (let [m] of F){
            let h = d.get(m) ?? m;
            if (h.length > m.length) {
                l.unitsRemaining -= h.length - m.length;
                if (l.unitsRemaining < 0) {
                    throw Error("keys exceed the units display budget");
                }
            }
        }
        let a = F.map(([m, h])=>`${d.get(m) ?? m}: ${pu(h, u + 1, o + 1, l)}`);
        if (a.every((m)=>!m.includes(`
`))) {
            let m = `{ ${a.join(", ")} }`;
            if (ae(m) <= xt) {
                return m;
            }
        }
        let f = "  ".repeat(u + 1);
        let g = "  ".repeat(u);
        return `{
${a.map((m)=>f + m).join(`,
`)}
${g}}`;
    }
    if (typeof t === "bigint") {
        throw Error("bigint value cannot be rendered");
    }
    return "undefined";
}
const Vo = /^(\d{4})-(\d{2})-(\d{2})[Tt ](\d{2}):(\d{2})(?::(\d{2})(?:\.\d{1,9})?)?(?:[Zz]|[+-]\d{2}:?\d{2})?$/;
function Yo(t) {
    let u = t.trim();
    let o = u.match(Vo);
    if (!o) {
        return null;
    }
    let l = Number(o[1] ?? "");
    let F = Number(o[2] ?? "");
    let d = Number(o[3] ?? "");
    let a = Number(o[4] ?? "");
    let f = Number(o[5] ?? "");
    let g = o[6] === undefined ? 0 : Number(o[6]);
    if (l < 100) {
        return null;
    }
    let m = new Date(Date.UTC(l, F, 0)).getUTCDate();
    if (F < 1 || F > 12 || d < 1 || d > m) {
        return null;
    }
    if (a > 24 || f > 59 || g > 59 || a === 24 && (f > 0 || g > 0)) {
        return null;
    }
    let h = Date.parse(u);
    if (Number.isNaN(h)) {
        return null;
    }
    if (!/(?:[Zz]|[+-]\d{2}:?\d{2})$/.test(u)) {
        let C = new Date(Date.UTC(l, F - 1, d, a, f));
        let B = new Date(h);
        if (B.getFullYear() !== C.getUTCFullYear() || B.getMonth() !== C.getUTCMonth() || B.getDate() !== C.getUTCDate() || B.getHours() !== C.getUTCHours() || B.getMinutes() !== C.getUTCMinutes()) {
            return null;
        }
    }
    let A = Date.UTC(l, F - 1, d, a, f, g);
    if (Math.abs(h - A) > 50400000) {
        return null;
    }
    return new Date(h).toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short"
    });
}
function Fu(input, paramFormatHints, o = xt) {
    if (input === null || typeof input !== "object" || Array.isArray(input)) {
        return [
            {
                kind: "inline",
                key: "input",
                text: "(parameters are not an object — deny unless expected)",
                unrenderable: true
            }
        ];
    }
    let l = Object.entries(input);
    let F = jY(input);
    if (F !== null) {
        return [
            {
                kind: "inline",
                key: "input",
                text: F,
                unrenderable: true,
                parseFailureSentinel: true
            }
        ];
    }
    let d = [];
    let l_length = l.length;
    if (l_length > xs) {
        return [
            {
                kind: "inline",
                key: "input",
                text: `(${l_length} parameters \u2014 too many to show \u2014 deny unless expected)`,
                unrenderable: true
            }
        ];
    }
    let f = [];
    let g = 0;
    let m = 0;
    for (let [C, B] of l){
        if (C.length > unitsRemaining) {
            g += 1;
            continue;
        }
        f.push(C);
        m += C.length;
        if (typeof B === "string" && B.length <= unitsRemaining) {
            m += B.length;
        }
    }
    if (m > cu) {
        return [
            {
                kind: "inline",
                key: "input",
                text: `(parameters total ${m.toLocaleString()} characters \u2014 too much to show \u2014 deny unless expected)`,
                unrenderable: true
            }
        ];
    }
    if (g > 0) {
        d.push({
            kind: "inline",
            key: "input",
            text: `(${g} parameter ${g === 1 ? "name is" : "names are"} too large to show \u2014 deny unless expected)`,
            unrenderable: true
        });
    }
    let h = pQt(f);
    let b = l.find(([C])=>C === "language")?.[1];
    let A = 0;
    for (let [C, B] of l){
        if (C.length > unitsRemaining) {
            continue;
        }
        let k = h.get(C) ?? C;
        if (xg(C) !== C) {
            A += 1;
            continue;
        }
        if (typeof B === "string") {
            if (B.length > unitsRemaining) {
                let v = `(value of ${B.length.toLocaleString()} characters cannot be shown \u2014 deny unless expected)`;
                if (!Le(k, v, undefined, o)) {
                    d.push({
                        kind: "block",
                        key: k,
                        text: v,
                        unrenderable: true
                    });
                } else {
                    d.push({
                        kind: "inline",
                        key: k,
                        text: v,
                        unrenderable: true
                    });
                }
                continue;
            }
            let E = pc(B);
            let T = xg(E);
            if (Xxe.test(T) || T !== E) {
                let v = `(value of ${B.length.toLocaleString()} characters cannot be shown in full \u2014 deny unless expected)`;
                if (!Le(k, v, undefined, o)) {
                    d.push({
                        kind: "block",
                        key: k,
                        text: v,
                        unrenderable: true
                    });
                } else {
                    d.push({
                        kind: "inline",
                        key: k,
                        text: v,
                        unrenderable: true
                    });
                }
                continue;
            }
            let W = T.replace(/\t/g, " ");
            if (T.includes(`
`) || ae(T) > xt) {
                let v = C === "code" && $o(b) ? pc(b) : undefined;
                d.push({
                    kind: "block",
                    key: k,
                    text: W,
                    language: v
                });
                continue;
            }
            let oe = _(T);
            let j = paramFormatHints?.[C] === "date-time" && Ps.test(T) && _s.test(T);
            let annotation = Ts.has(C) && Ms.test(T) ? Yo(new Date(Number(T) * 1000).toISOString()) ?? undefined : j || Vo.test(T) ? Yo(T) ?? undefined : undefined;
            if (!Le(k, oe, annotation, o)) {
                let v = C === "code" && $o(b) ? pc(b) : undefined;
                d.push({
                    kind: "block",
                    key: k,
                    text: W,
                    annotation,
                    language: v
                });
                continue;
            }
            let linkUrl = Ss.has(C) ? p1r(T) ?? undefined : /^https?:\/\/\S+$/.test(T) && !ZQ(T) ? T : undefined;
            d.push({
                kind: "inline",
                key: k,
                text: oe,
                linkUrl,
                annotation
            });
            continue;
        }
        if (B === null || typeof B === "number" || typeof B === "boolean") {
            let E = String(B);
            if (!Le(k, E, undefined, o)) {
                d.push({
                    kind: "block",
                    key: k,
                    text: E
                });
                continue;
            }
            d.push({
                kind: "inline",
                key: k,
                text: E
            });
            continue;
        }
        let L;
        let U = "";
        let O = 0;
        try {
            let E = pu(B, 0);
            O = E.length;
            if (E.length > unitsRemaining) {
                let T = `(value of ${E.length.toLocaleString()} formatted characters cannot be shown \u2014 deny unless expected)`;
                if (!Le(k, T, undefined, o)) {
                    d.push({
                        kind: "block",
                        key: k,
                        text: T,
                        unrenderable: true
                    });
                } else {
                    d.push({
                        kind: "inline",
                        key: k,
                        text: T,
                        unrenderable: true
                    });
                }
                continue;
            }
            U = pc(E);
            L = xg(U);
        } catch  {
            if (!Le(k, "(value too large or too deeply nested to render — deny unless expected)", undefined, o)) {
                d.push({
                    kind: "block",
                    key: k,
                    text: "(value too large or too deeply nested to render — deny unless expected)",
                    unrenderable: true
                });
            } else {
                d.push({
                    kind: "inline",
                    key: k,
                    text: "(value too large or too deeply nested to render — deny unless expected)",
                    unrenderable: true
                });
            }
            continue;
        }
        m += O;
        if (m > cu) {
            return [
                {
                    kind: "inline",
                    key: "input",
                    text: `(parameters total over ${cu.toLocaleString()} rendered characters \u2014 too much to show \u2014 deny unless expected)`,
                    unrenderable: true
                }
            ];
        }
        if (Xxe.test(L) || xg(U) !== U) {
            let E = `(value of ${O.toLocaleString()} formatted characters cannot be shown in full \u2014 deny unless expected)`;
            if (!Le(k, E, undefined, o)) {
                d.push({
                    kind: "block",
                    key: k,
                    text: E,
                    unrenderable: true
                });
            } else {
                d.push({
                    kind: "inline",
                    key: k,
                    text: E,
                    unrenderable: true
                });
            }
            continue;
        }
        if (!L.includes(`
`) && Le(k, L, undefined, o)) {
            d.push({
                kind: "inline",
                key: k,
                text: L
            });
        } else {
            d.push({
                kind: "block",
                key: k,
                text: L,
                language: "javascript"
            });
        }
    }
    if (A > 0) {
        d.push({
            kind: "inline",
            key: "input",
            text: `(${A} parameter ${A === 1 ? "name" : "names"} cannot be shown in full \u2014 deny unless expected)`,
            unrenderable: true
        });
    }
    return d;
}
function Ls(t, u) {
    return t.language !== undefined && u !== null && _7r(t.text, bYt(t.language) ?? t.language) && u.supportsLanguage(t.language);
}
function Ko(t) {
    let l = w(38);
    let { keyText, contentColumns } = t;
    let F;
    let d;
    let a;
    let dimColor;
    let paddingLeft;
    let m;
    let h;
    let b;
    let A;
    let marginLeft;
    let borderStyle;
    let borderLeft;
    let borderRight;
    let borderTop;
    let borderBottom;
    let borderDimColor;
    if (l[0] !== contentColumns || l[1] !== keyText) {
        b = Sn;
        oe: {
            let T = Nu(`${keyText}:`, Math.max(10, contentColumns - 2), {
                hard: true,
                trim: false
            });
            let W = T.indexOf(`
`);
            if (W === -1) {
                b = e(n, {
                    dimColor: true,
                    children: T
                });
                break oe;
            }
            a = s;
            m = "column";
            h = e(n, {
                dimColor: true,
                children: T.slice(0, W)
            });
            d = s;
            marginLeft = 2;
            borderStyle = "single";
            borderLeft = true;
            borderRight = false;
            borderTop = false;
            borderBottom = false;
            borderDimColor = true;
            paddingLeft = 1;
            F = n;
            dimColor = true;
            A = Nu(T.slice(W + 1).replace(/\n/g, ""), Math.max(10, contentColumns - 4), {
                hard: true,
                trim: false
            });
        }
        l[0] = contentColumns;
        l[1] = keyText;
        l[2] = F;
        l[3] = d;
        l[4] = a;
        l[5] = dimColor;
        l[6] = paddingLeft;
        l[7] = m;
        l[8] = h;
        l[9] = b;
        l[10] = A;
        l[11] = marginLeft;
        l[12] = borderStyle;
        l[13] = borderLeft;
        l[14] = borderRight;
        l[15] = borderTop;
        l[16] = borderBottom;
        l[17] = borderDimColor;
    } else {
        F = l[2];
        d = l[3];
        a = l[4];
        dimColor = l[5];
        paddingLeft = l[6];
        m = l[7];
        h = l[8];
        b = l[9];
        A = l[10];
        marginLeft = l[11];
        borderStyle = l[12];
        borderLeft = l[13];
        borderRight = l[14];
        borderTop = l[15];
        borderBottom = l[16];
        borderDimColor = l[17];
    }
    if (b !== Sn) {
        return b;
    }
    let j;
    if (l[18] !== F || l[19] !== dimColor || l[20] !== A) {
        j = e(F, {
            dimColor,
            children: A
        });
        l[18] = F;
        l[19] = dimColor;
        l[20] = A;
        l[21] = j;
    } else {
        j = l[21];
    }
    let z;
    if (l[22] !== d || l[23] !== paddingLeft || l[24] !== j || l[25] !== marginLeft || l[26] !== borderStyle || l[27] !== borderLeft || l[28] !== borderRight || l[29] !== borderTop || l[30] !== borderBottom || l[31] !== borderDimColor) {
        z = e(d, {
            marginLeft,
            borderStyle,
            borderLeft,
            borderRight,
            borderTop,
            borderBottom,
            borderDimColor,
            paddingLeft,
            children: j
        });
        l[22] = d;
        l[23] = paddingLeft;
        l[24] = j;
        l[25] = marginLeft;
        l[26] = borderStyle;
        l[27] = borderLeft;
        l[28] = borderRight;
        l[29] = borderTop;
        l[30] = borderBottom;
        l[31] = borderDimColor;
        l[32] = z;
    } else {
        z = l[32];
    }
    let q;
    if (l[33] !== a || l[34] !== m || l[35] !== h || l[36] !== z) {
        q = r(a, {
            flexDirection: m,
            children: [
                h,
                z
            ]
        });
        l[33] = a;
        l[34] = m;
        l[35] = h;
        l[36] = z;
        l[37] = q;
    } else {
        q = l[37];
    }
    return q;
}
function fu({ entries, contentColumns }) {
    let [o] = hr();
    let F = ql().syntaxHighlightingDisabled ?? false;
    let d = R(new Map);
    let a = Z(()=>{
        let h = F ? null : SU();
        let b = new Map;
        let A = entries.map((C)=>{
            if (C.kind !== "block") {
                return null;
            }
            let B = `${o}\x00${F}\x00${C.language ?? ""}\x00${C.text}`;
            let k = b.get(B) ?? d.current.get(B);
            if (k === undefined) {
                k = Ls(C, h) && C.language !== undefined && h !== null ? h.highlight(C.text, {
                    language: C.language
                }) : ZQ(C.text) ? C.text : C4n(C.text, o);
            }
            b.set(B, k);
            return k;
        });
        d.current = b;
        return A;
    }, [
        entries,
        o,
        F
    ]);
    let f = Z(()=>a.map((h)=>{
            if (h === null) {
                return null;
            }
            return Nu(h, Math.max(10, contentColumns - 4), {
                hard: true,
                trim: false
            });
        }), [
        a,
        contentColumns
    ]);
    let g = dje();
    let m = entries.length === 1 && entries[0].kind === "inline" && entries[0].parseFailureSentinel === true ? entries[0] : null;
    if (m !== null) {
        return e(n, {
            dimColor: true,
            children: m.text
        });
    }
    if (entries.length === 0) {
        return null;
    }
    return e(s, {
        flexDirection: "column",
        children: entries.map((h, b)=>{
            if (h.kind === "inline") {
                return r(n, {
                    children: [
                        r(n, {
                            dimColor: true,
                            children: [
                                h.key,
                                ": "
                            ]
                        }),
                        e(Do, {
                            children: h.linkUrl !== undefined && g ? cw(h.linkUrl, h.text) : h.text
                        }),
                        h.annotation !== undefined && r(n, {
                            dimColor: true,
                            children: [
                                " (",
                                h.annotation,
                                ")"
                            ]
                        })
                    ]
                }, b);
            }
            return r(s, {
                flexDirection: "column",
                children: [
                    e(Ko, {
                        keyText: h.key,
                        contentColumns
                    }),
                    e(s, {
                        marginLeft: 2,
                        borderStyle: "single",
                        borderLeft: true,
                        borderRight: false,
                        borderTop: false,
                        borderBottom: false,
                        borderDimColor: true,
                        paddingLeft: 1,
                        children: e(Do, {
                            children: f[b] ?? h.text
                        })
                    }),
                    h.annotation !== undefined && e(s, {
                        marginLeft: 2,
                        children: r(n, {
                            dimColor: true,
                            children: [
                                "(",
                                h.annotation,
                                ")"
                            ]
                        })
                    })
                ]
            }, b);
        })
    });
}
function rD(cD) {
    return cD.unrenderable === true;
}
function iD(dD) {
    return oF(dD);
}
function sD(pD) {
    return !pD;
}
function DD(FD, Nr) {
    return FD + ae(Nr) + (Nr.split(/\r\n|[\r\n\u2028\u2029]/).length - 1) * en;
}
function Go(t, payload, o, feedback) {
    switch(t){
        case "yes":
        case "yes-enable-auto-mode":
            return {
                behavior: "allow",
                updatedInput: payload.input,
                ...feedback && {
                    feedback
                }
            };
        case "yes-dont-ask-again":
            {
                if (o === null || !Vw(o)) {
                    return {
                        behavior: "allow",
                        updatedInput: payload.input
                    };
                }
                return {
                    behavior: "allow",
                    updatedInput: payload.input,
                    permissionUpdates: o.applies
                };
            }
        case "no":
            return {
                behavior: "deny",
                ...feedback && {
                    feedback
                }
            };
    }
}
function Ho(payload, u) {
    return VO([
        {
            type: "addRules",
            rules: [
                {
                    toolName: payload.toolName
                }
            ],
            behavior: "allow",
            destination: "localSettings"
        }
    ], {
        displayedTypes,
        renderLabel: (o)=>{
            let l = o.length === 1 ? o[0] : undefined;
            if (l === undefined || l.type !== "addRules" || l.rules.length !== 1 || l.rules[0]?.toolName !== payload.toolName || l.rules[0]?.ruleContent !== undefined) {
                return null;
            }
            let F = String(payload.userFacingName);
            if (ae(F) >= wYe || F.includes("…")) {
                return null;
            }
            if (u.cwd.includes("…")) {
                return null;
            }
            let d = Math.max(24, u.maxLabelWidth);
            let a = (b)=>`Yes, and don't ask again for ${payload.userFacingName} commands in ${b}`;
            let f = $n(u.cwd);
            if (ae(a(f)) <= d) {
                return a(f);
            }
            if (f !== u.cwd) {
                return null;
            }
            let g = Rs(u.cwd);
            if (ae(a(g)) <= d) {
                return a(g);
            }
            let m = wpe(g);
            let h = "";
            for(let b = 0; b < m.length; b++){
                let A = h + m[b];
                if (ae(a(`${A}\u2026`)) > d) {
                    break;
                }
                h = A;
            }
            if (h.length > 0) {
                return a(`${h}\u2026`);
            }
            return null;
        }
    });
}
var displayedTypes = new Set([
    "addRules"
]);
function Cu(t) {
    let decisionReason = t.permissionResult.decisionReason;
    return Hl(decisionReason, (l)=>!l.classifierApprovable) !== undefined || t.isAskCappedByOrg || Zbe(t.requestSource);
}
function gln(t) {
    return t.showAlwaysAllow && !Cu(t) && ut(t.toolName);
}
const zo = 2;
const vs = 16;
const Us = 24;
const js = 80;
function Xo(t, u) {
    if (t && u.columns >= js) {
        return Math.max(zo, Math.min(vs, u.rows - Us));
    }
    return zo;
}
function tMr(t) {
    let a = w(155);
    let { payload, answer, wouldTakeAnswer } = t;
    let ref = R(null);
    let d = ke();
    let f;
    if (a[0] !== d.columns) {
        f = ()=>Math.max(20, Math.min(40, d.columns - 6));
        a[0] = d.columns;
        a[1] = f;
    } else {
        f = a[1];
    }
    let [g, m] = y(f);
    let h;
    if (a[2] === S) {
        h = ()=>{
            if (ref.current) {
                let { width } = Ks(ref.current);
                if (width > 0) {
                    m(Math.max(20, width - 2));
                }
            }
        };
        a[2] = h;
    } else {
        h = a[2];
    }
    let A;
    if (a[3] !== d.columns || a[4] !== d.rows) {
        A = [
            d.columns,
            d.rows
        ];
        a[3] = d.columns;
        a[4] = d.rows;
        a[5] = A;
    } else {
        A = a[5];
    }
    P(h, A);
    let contentColumns = Math.min(g, Math.max(20, d.columns - 6));
    let B;
    if (a[6] !== contentColumns || a[7] !== payload.input || a[8] !== payload.isMcp || a[9] !== payload.paramFormatHints) {
        B = payload.isMcp ? Fu(payload.input, payload.paramFormatHints, contentColumns) : null;
        a[6] = contentColumns;
        a[7] = payload.input;
        a[8] = payload.isMcp;
        a[9] = payload.paramFormatHints;
        a[10] = B;
    } else {
        B = a[10];
    }
    let entries = B;
    let [L] = hr();
    let U;
    E: {
        if (payload.renderedToolUseMessage != null) {
            let O;
            if (a[11] !== payload.renderedToolUseMessage) {
                O = {
                    node: payload.renderedToolUseMessage,
                    threw: false
                };
                a[11] = payload.renderedToolUseMessage;
                a[12] = O;
            } else {
                O = a[12];
            }
            U = O;
            break E;
        }
        ;
        try {
            let node_1;
            if (a[13] !== payload.input || a[14] !== payload.toolName || a[15] !== L) {
                node_1 = lmt(payload.toolName, payload.input, {
                    theme: L,
                    verbose: true
                });
                a[13] = payload.input;
                a[14] = payload.toolName;
                a[15] = L;
                a[16] = node_1;
            } else {
                node_1 = a[16];
            }
            let W;
            if (a[17] !== node_1) {
                W = {
                    node: node_1,
                    threw: false
                };
                a[17] = node_1;
                a[18] = W;
            } else {
                W = a[18];
            }
            U = W;
        } catch (error) {
            let oe = error;
            let T;
            if (a[19] !== payload.toolName) {
                T = (c(new x(`Error rendering tool use line for ${payload.toolName}: ${oe}`, "Error rendering tool use line (permission dialog table fallback)")), {
                    node: null,
                    threw: true
                });
                a[19] = payload.toolName;
                a[20] = T;
            } else {
                T = a[20];
            }
            U = T;
        }
    }
    let { node, threw } = U;
    let O;
    if (a[21] !== node) {
        O = typeof node === "string" ? KS(node) : null;
        a[21] = node;
        a[22] = O;
    } else {
        O = a[22];
    }
    let q = O;
    let T;
    if (a[23] !== entries || a[24] !== q?.kind || a[25] !== payload.toolUseRenderFailed || a[26] !== threw) {
        T = (entries?.some(rD) ?? false) || payload.toolUseRenderFailed === true || threw || q?.kind === "withheld";
        a[23] = entries;
        a[24] = q?.kind;
        a[25] = payload.toolUseRenderFailed;
        a[26] = threw;
        a[27] = T;
    } else {
        T = a[27];
    }
    let X = T;
    let W;
    if (a[28] !== payload) {
        W = gln(payload);
        a[28] = payload;
        a[29] = W;
    } else {
        W = a[29];
    }
    let v = W;
    let { offered, enableAutoMode } = PLt(payload.requestSource);
    let re;
    if (a[30] === S) {
        re = we();
        a[30] = re;
    } else {
        re = a[30];
    }
    let cwd = re;
    let Q;
    if (a[31] !== v || a[32] !== contentColumns || a[33] !== X || a[34] !== payload) {
        Q = v && !X ? Ho(payload, {
            cwd,
            maxLabelWidth: contentColumns - 8
        }) : null;
        a[31] = v;
        a[32] = contentColumns;
        a[33] = X;
        a[34] = payload;
        a[35] = Q;
    } else {
        Q = a[35];
    }
    let J = Q;
    let fe;
    if (a[36] !== payload) {
        fe = Cu(payload);
        a[36] = payload;
        a[37] = fe;
    } else {
        fe = a[37];
    }
    let Re = fe;
    let me;
    if (a[38] !== offered || a[39] !== X || a[40] !== Re) {
        me = offered && !X && !Re ? fln("workflow") : null;
        a[38] = offered;
        a[39] = X;
        a[40] = Re;
        a[41] = me;
    } else {
        me = a[41];
    }
    let se = me;
    let hideIndexes = payload.permissionResult.defaultToNo === true;
    let Xe;
    if (a[42] !== J || a[43] !== answer || a[44] !== enableAutoMode || a[45] !== payload || a[46] !== wouldTakeAnswer) {
        Xe = ({ value, feedback })=>{
            if (!wouldTakeAnswer()) {
                return false;
            }
            if (value === "yes-enable-auto-mode") {
                enableAutoMode();
            }
            return answer(Go(value, payload, J, feedback));
        };
        a[42] = J;
        a[43] = answer;
        a[44] = enableAutoMode;
        a[45] = payload;
        a[46] = wouldTakeAnswer;
        a[47] = Xe;
    } else {
        Xe = a[47];
    }
    let ne = tk(Xe);
    let ne_answer = ne.answer;
    let Ce;
    if (a[48] !== ne_answer) {
        Ce = (value, feedback)=>ne_answer({
                value,
                feedback
            });
        a[48] = ne_answer;
        a[49] = Ce;
    } else {
        Ce = a[49];
    }
    let onSelect = Ce;
    let defaultFocusValue = ne.refused === null ? hideIndexes ? "no" : undefined : ne.refused.value === "yes" && !hideIndexes ? "yes" : "no";
    let gu;
    if (a[50] !== answer) {
        gu = ()=>answer({
                behavior: "cancelled"
            });
        a[50] = answer;
        a[51] = gu;
    } else {
        gu = a[51];
    }
    let onCancel = gu;
    const Eu = typeof payload.description === "string" ? payload.description : "";
    let yr;
    if (a[52] !== Eu) {
        yr = Eu.split(`
`).filter(iD).join(`
`).trim();
        a[52] = Eu;
        a[53] = yr;
    } else {
        yr = a[53];
    }
    let at = yr;
    let Fn;
    Hc: {
        if (q === null) {
            Fn = node;
            break Hc;
        }
        if (q.kind === "withheld") {
            Fn = q.marker;
            break Hc;
        }
        let lt;
        if (a[54] !== q.text) {
            lt = Ai(q.text).replace(/\s+/g, " ").trim();
            a[54] = q.text;
            a[55] = lt;
        } else {
            lt = a[55];
        }
        Fn = lt;
    }
    let et = Fn;
    let ct = payload.isMcp ? Math.max(10, contentColumns - 2) : contentColumns;
    const lt = payload.roomyDescription === true;
    let br;
    if (a[56] !== lt || a[57] !== d) {
        br = Xo(lt, d);
        a[56] = lt;
        a[57] = d;
        a[58] = br;
    } else {
        br = a[58];
    }
    let hu = br;
    let kr;
    if (a[59] !== hu || a[60] !== ct || a[61] !== at) {
        kr = cGn(at, ct, hu);
        a[59] = hu;
        a[60] = ct;
        a[61] = at;
        a[62] = kr;
    } else {
        kr = a[62];
    }
    let ve = kr;
    let Br;
    if (a[63] !== ct || a[64] !== at) {
        Br = cGn(at, ct, Number.MAX_SAFE_INTEGER);
        a[63] = ct;
        a[64] = at;
        a[65] = Br;
    } else {
        Br = a[65];
    }
    let fn = Br;
    let active = fn !== ve;
    let [mn, aD] = y(false);
    let yu = ma("app:toggleTranscript", "Global", "ctrl+o");
    let Ar;
    if (a[66] === S) {
        Ar = [
            {
                action: "app:toggleTranscript",
                run: ()=>aD(sD)
            }
        ];
        a[66] = Ar;
    } else {
        Ar = a[66];
    }
    let bindings = Ar;
    let xr;
    if (a[67] === S) {
        xr = {
            label: "Yes",
            value: "yes",
            feedbackConfig: {
                type: "accept"
            }
        };
        a[67] = xr;
    } else {
        xr = a[67];
    }
    let Rr = xr;
    let wr;
    if (a[68] === S) {
        wr = {
            label: "No",
            value: "no",
            feedbackConfig: {
                type: "reject"
            }
        };
        a[68] = wr;
    } else {
        wr = a[68];
    }
    let Sr = wr;
    let _t;
    if (a[69] !== J || a[70] !== se || a[71] !== hideIndexes) {
        _t = hideIndexes ? [
            Sr,
            Rr
        ] : [
            Rr
        ];
        if (J !== null) {
            if (typeof J.node === "string") {
                let Ee;
                if (a[73] !== J.node) {
                    Ee = {
                        label: J.node,
                        value: "yes-dont-ask-again"
                    };
                    a[73] = J.node;
                    a[74] = Ee;
                } else {
                    Ee = a[74];
                }
                _t.push(Ee);
            }
        }
        if (se !== null) {
            if (typeof se.node === "string") {
                let Ee;
                if (a[75] !== se.node) {
                    Ee = {
                        label: se.node,
                        description: mln,
                        value: "yes-enable-auto-mode"
                    };
                    a[75] = se.node;
                    a[76] = Ee;
                } else {
                    Ee = a[76];
                }
                _t.push(Ee);
            }
        }
        if (!hideIndexes) {
            _t.push(Sr);
        }
        a[69] = J;
        a[70] = se;
        a[71] = hideIndexes;
        a[72] = _t;
    } else {
        _t = a[72];
    }
    let options = _t;
    let Ee;
    if (a[77] !== payload.toolName) {
        Ee = Ln(payload.toolName);
        a[77] = payload.toolName;
        a[78] = Ee;
    } else {
        Ee = a[78];
    }
    let Mr;
    if (a[79] !== payload.isMcp || a[80] !== Ee) {
        Mr = {
            toolName: Ee,
            isMcp: payload.isMcp
        };
        a[79] = payload.isMcp;
        a[80] = Ee;
        a[81] = Mr;
    } else {
        Mr = a[81];
    }
    let toolAnalyticsContext = Mr;
    let de = payload.toolUseRenderFailed === true ? undefined : payload.card;
    if (de !== undefined && [
        de.question,
        ...de.lines,
        ...de.values
    ].reduce(DD, 0) <= Du) {
        let Pr = payload.requestSource === undefined && !de.question.includes(`
`) && ae(de.question) <= Math.min(contentColumns, d.columns - 2);
        const question = Pr ? undefined : de.question;
        let Cn;
        if (a[82] !== de || a[83] !== g || a[84] !== question || a[85] !== d.columns) {
            Cn = lu({
                ...de,
                question
            }, Math.min(g, d.columns - 6) - au);
            a[82] = de;
            a[83] = g;
            a[84] = question;
            a[85] = d.columns;
            a[86] = Cn;
        } else {
            Cn = a[86];
        }
        let card = Cn;
        const title = Pr ? de.question : payload.userFacingName;
        let Te;
        if (a[87] !== card) {
            Te = card.rows.length > 0 && e(hl, {
                children: e(tn, {
                    card
                })
            });
            a[87] = card;
            a[88] = Te;
        } else {
            Te = a[88];
        }
        let je;
        if (a[89] !== Te) {
            je = e(s, {
                ref,
                width: "100%",
                flexDirection: "column",
                children: Te
            });
            a[89] = Te;
            a[90] = je;
        } else {
            je = a[90];
        }
        const marginTop = card.rows.length === 0 ? 1 : 0;
        let Me;
        if (a[91] !== onCancel || a[92] !== onSelect || a[93] !== hideIndexes || a[94] !== options || a[95] !== payload.requestSource || a[96] !== ne.attempts || a[97] !== defaultFocusValue || a[98] !== toolAnalyticsContext) {
            Me = e(D9, {
                question: null,
                options,
                defaultFocusValue,
                hideIndexes,
                onSelect,
                onCancel,
                toolAnalyticsContext,
                requestSource: payload.requestSource
            }, ne.attempts);
            a[91] = onCancel;
            a[92] = onSelect;
            a[93] = hideIndexes;
            a[94] = options;
            a[95] = payload.requestSource;
            a[96] = ne.attempts;
            a[97] = defaultFocusValue;
            a[98] = toolAnalyticsContext;
            a[99] = Me;
        } else {
            Me = a[99];
        }
        let Pe;
        if (a[100] !== marginTop || a[101] !== Me) {
            Pe = e(s, {
                paddingX: 1,
                marginTop,
                children: Me
            });
            a[100] = marginTop;
            a[101] = Me;
            a[102] = Pe;
        } else {
            Pe = a[102];
        }
        let tt;
        if (a[103] !== payload.requestSource || a[104] !== title || a[105] !== je || a[106] !== Pe) {
            tt = r(ba, {
                title,
                innerPaddingX: 0,
                requestSource: payload.requestSource,
                children: [
                    je,
                    Pe
                ]
            });
            a[103] = payload.requestSource;
            a[104] = title;
            a[105] = je;
            a[106] = Pe;
            a[107] = tt;
        } else {
            tt = a[107];
        }
        return tt;
    }
    let mt;
    if (a[108] !== ve || a[109] !== mn || a[110] !== active || a[111] !== yu || a[112] !== fn || a[113] !== entries?.length || a[114] !== payload.isMcp || a[115] !== payload.userFacingName) {
        mt = ve !== "" && r(s, {
            width: "100%",
            flexDirection: "column",
            paddingX: 1,
            marginTop: entries?.length === 0 ? 1 : 0,
            marginBottom: payload.isMcp ? 1 : 0,
            children: [
                payload.isMcp && r(n, {
                    italic: true,
                    wrap: "truncate-end",
                    children: [
                        "About the ",
                        e(n, {
                            bold: true,
                            children: payload.userFacingName
                        }),
                        " Tool:"
                    ]
                }),
                e(s, {
                    borderStyle: "single",
                    borderLeft: true,
                    borderRight: false,
                    borderTop: false,
                    borderBottom: false,
                    borderDimColor: true,
                    paddingLeft: 1,
                    children: e(n, {
                        dimColor: true,
                        italic: payload.isMcp,
                        children: mn ? fn : ve
                    })
                }),
                active && e(n, {
                    dimColor: true,
                    children: e(G, {
                        chord: yu,
                        action: mn ? "collapse description" : "expand description",
                        parens: true,
                        format: {
                            keyCase: "lower"
                        }
                    })
                })
            ]
        });
        a[108] = ve;
        a[109] = mn;
        a[110] = active;
        a[111] = yu;
        a[112] = fn;
        a[113] = entries?.length;
        a[114] = payload.isMcp;
        a[115] = payload.userFacingName;
        a[116] = mt;
    } else {
        mt = a[116];
    }
    let gn = mt;
    const payload_requestSource = payload.requestSource;
    let Ue;
    if (a[117] !== ve || a[118] !== gn || a[119] !== entries?.length || a[120] !== payload.hasMcpSuffix || a[121] !== payload.isMcp || a[122] !== payload.userFacingName) {
        Ue = payload.isMcp ? r(s, {
            flexDirection: "row",
            paddingX: 1,
            marginBottom: entries?.length === 0 && ve === "" ? 1 : 0,
            children: [
                e(n, {
                    wrap: "truncate-end",
                    children: r(n, {
                        bold: true,
                        children: [
                            payload.userFacingName,
                            " Tool:"
                        ]
                    })
                }),
                payload.hasMcpSuffix ? e(s, {
                    flexShrink: 0,
                    children: e(n, {
                        dimColor: true,
                        children: " (MCP)"
                    })
                }) : null
            ]
        }) : gn;
        a[117] = ve;
        a[118] = gn;
        a[119] = entries?.length;
        a[120] = payload.hasMcpSuffix;
        a[121] = payload.isMcp;
        a[122] = payload.userFacingName;
        a[123] = Ue;
    } else {
        Ue = a[123];
    }
    let Te;
    if (a[124] !== et || a[125] !== contentColumns || a[126] !== entries || a[127] !== payload.hasMcpSuffix || a[128] !== payload.userFacingName) {
        Te = (entries === null || entries.length > 0) && e(hl, {
            children: entries !== null ? e(fu, {
                entries,
                contentColumns
            }) : e(_i, {
                multiline: typeof et === "string" && Cb(`${payload.userFacingName}(${et})`),
                children: r(n, {
                    children: [
                        payload.userFacingName,
                        et != null && et !== "" && r(Y, {
                            children: [
                                "(",
                                et,
                                ")"
                            ]
                        }),
                        payload.hasMcpSuffix ? e(n, {
                            dimColor: true,
                            children: " (MCP)"
                        }) : ""
                    ]
                })
            })
        });
        a[124] = et;
        a[125] = contentColumns;
        a[126] = entries;
        a[127] = payload.hasMcpSuffix;
        a[128] = payload.userFacingName;
        a[129] = Te;
    } else {
        Te = a[129];
    }
    const je = payload.isMcp && gn;
    let $e;
    if (a[130] !== Ue || a[131] !== Te || a[132] !== je) {
        $e = r(s, {
            ref,
            width: "100%",
            flexDirection: "column",
            children: [
                Ue,
                Te,
                je
            ]
        });
        a[130] = Ue;
        a[131] = Te;
        a[132] = je;
        a[133] = $e;
    } else {
        $e = a[133];
    }
    let Me;
    if (a[134] !== payload.permissionResult) {
        Me = e(qw, {
            permissionResult: payload.permissionResult,
            toolType: "tool"
        });
        a[134] = payload.permissionResult;
        a[135] = Me;
    } else {
        Me = a[135];
    }
    let Pe;
    if (a[136] !== onCancel || a[137] !== onSelect || a[138] !== hideIndexes || a[139] !== options || a[140] !== payload.requestSource || a[141] !== ne.attempts || a[142] !== defaultFocusValue || a[143] !== toolAnalyticsContext) {
        Pe = e(D9, {
            options,
            defaultFocusValue,
            hideIndexes,
            onSelect,
            onCancel,
            toolAnalyticsContext,
            requestSource: payload.requestSource
        }, ne.attempts);
        a[136] = onCancel;
        a[137] = onSelect;
        a[138] = hideIndexes;
        a[139] = options;
        a[140] = payload.requestSource;
        a[141] = ne.attempts;
        a[142] = defaultFocusValue;
        a[143] = toolAnalyticsContext;
        a[144] = Pe;
    } else {
        Pe = a[144];
    }
    let tt;
    if (a[145] !== Me || a[146] !== Pe) {
        tt = r(s, {
            flexDirection: "column",
            paddingX: 1,
            children: [
                Me,
                Pe
            ]
        });
        a[145] = Me;
        a[146] = Pe;
        a[147] = tt;
    } else {
        tt = a[147];
    }
    let En;
    if (a[148] !== payload.requestSource || a[149] !== $e || a[150] !== tt) {
        En = r(ba, {
            title: "Tool use",
            innerPaddingX: 0,
            requestSource: payload_requestSource,
            children: [
                $e,
                tt
            ]
        });
        a[148] = payload.requestSource;
        a[149] = $e;
        a[150] = tt;
        a[151] = En;
    } else {
        En = a[151];
    }
    let _r;
    if (a[152] !== active || a[153] !== En) {
        _r = e(nE, {
            bindings,
            active,
            flexDirection: "column",
            children: En
        });
        a[152] = active;
        a[153] = En;
        a[154] = _r;
    } else {
        _r = a[154];
    }
    return _r;
}
export { ZPe, $we, I9e, Bqn, JHo, y1e, CLt, RLt, aee, $0, jqn, _i, Vw, QHo, VO, Fwe, pln, Wqn, eMr, fln, zqn, xLt, qw, mln, PLt, ILt, Uwe, eIe, D9, gln, tMr };
