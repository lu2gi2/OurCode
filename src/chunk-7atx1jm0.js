import { Ols } from "/$bunfs/root/chunk-53bavyda.js";
import { fl } from "/$bunfs/root/chunk-etbngzss.js";
import { _, $o } from "/$bunfs/root/chunk-bd805sh6.js";
import { wEn, Ene, BQr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { mCt, _ao, gCt, X8t } from "/$bunfs/root/chunk-ypkrahyx.js";
import { zMe, DZe } from "/$bunfs/root/chunk-r376y14q.js";
import { y_e } from "/$bunfs/root/chunk-4n9ze18z.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
function gmt(e) {
    return Ols(e) || false;
}
const a = "[conversation summary withheld: it may include account memory]";
function w6(e, o) {
    let s = mCt([
        ...e
    ]).filter((n)=>!wEn(n) && !(n.type === "system" && "persist" in n && n.persist === false));
    let r = h(e, o);
    return s.map((n)=>{
        if (T(n, r)) {
            return A(n);
        }
        return n;
    });
}
function h(e, { host }) {
    return gmt(host) || e.some(wEn);
}
function T(e, o) {
    if (!o || e.type !== "user") {
        return false;
    }
    let e_message = e.message;
    return e.isCompactSummary === true || e.repeatsCompactSummary === true || X8t(e_message?.content);
}
function A(e) {
    let o = e.isCompactSummary === true ? a : `<${fl}>${a}</${fl}>`;
    let { modelOnlyText, ...rest } = e;
    let n = {
        ...rest
    };
    for (let t of [
        ...zMe,
        ...DZe
    ]){
        if (t !== "summarizeMetadata") {
            delete n[t];
        }
    }
    return {
        ...n,
        message: {
            ...e.message,
            role: e.message?.role ?? "user",
            content: typeof e.message?.content === "string" ? o : [
                {
                    type: "text",
                    text: o
                }
            ]
        }
    };
}
function yIe(jsonl, o) {
    if (!h([], o)) {
        return {
            jsonl,
            hits: 0
        };
    }
    let hits = 0;
    return {
        jsonl: jsonl.split(`
`).map((n)=>{
            let t = 0;
            while(n.charCodeAt(t) === 0 || n.charCodeAt(t) === 65279){
                t++;
            }
            let u = t > 0 ? n.slice(t) : n;
            if (u.trim() === "") {
                return n;
            }
            let m = S.some((c)=>u.includes(c));
            let i;
            try {
                i = $o(u);
            } catch  {
                i = undefined;
            }
            if (!y(i)) {
                hits++;
                return _({
                    type: "line-withheld",
                    bytes: Buffer.byteLength(n)
                });
            }
            if (m && i.type === C) {
                let c = B(i);
                if (c !== undefined) {
                    hits++;
                    return _(c);
                }
                return n;
            }
            if (!m || i.type !== "user") {
                return n;
            }
            let l = y(i.message) ? i.message : undefined;
            let f = l?.content;
            if (i.isCompactSummary !== true && i.repeatsCompactSummary !== true && !X8t(f)) {
                return n;
            }
            hits++;
            let d = i.isCompactSummary === true ? a : `<${fl}>${a}</${fl}>`;
            let p = {
                ...i
            };
            delete p.modelOnlyText;
            for (let c of [
                ...zMe,
                ...DZe
            ]){
                if (c !== "summarizeMetadata") {
                    delete p[c];
                }
            }
            p.message = {
                role: "user",
                ...l,
                content: typeof f === "string" ? d : [
                    {
                        type: "text",
                        text: d
                    }
                ]
            };
            return _(p);
        }).join(`
`),
        hits
    };
}
var S = [
    '"isCompactSummary"',
    '"repeatsCompactSummary"',
    _ao,
    gCt
];
var C = "api-request-blob";
function B(e) {
    let o = y(e.message) ? e.message : undefined;
    if (o?.role !== "user") {
        return;
    }
    let { content } = o;
    if (typeof content === "string") {
        if (content.includes(gCt)) {
            return {
                ...e,
                message: {
                    ...o,
                    content: a
                }
            };
        }
        return undefined;
    }
    if (!Array.isArray(content)) {
        return;
    }
    let r = false;
    let content_1 = content.map((t)=>{
        if (y_e(t) && t.text.includes(gCt)) {
            r = true;
            return {
                ...t,
                text: a
            };
        }
        return t;
    });
    if (r) {
        return {
            ...e,
            message: {
                ...o,
                content: content_1
            }
        };
    }
}
function y(e) {
    return typeof e === "object" && e !== null && !Array.isArray(e);
}
function G4n(e, o, s = []) {
    let r = {
        keys: D(e.filter((t)=>t.trim() !== "").flatMap(BQr).filter((t)=>!a.includes(t))).sort((t, u)=>u.length - t.length),
        replaced: D(s.map((t)=>t.trim()).filter((t)=>t !== "" && !a.includes(t))).sort((t, u)=>u.length - t.length),
        hits: 0
    };
    return {
        messages: r.keys.length === 0 && r.replaced.length === 0 ? o : o.flatMap((t)=>{
            if (t.role !== "user") {
                return [
                    t
                ];
            }
            let content = x(t.content, r);
            if (content === undefined) {
                return [];
            }
            return [
                {
                    ...t,
                    content
                }
            ];
        }),
        keys: r.keys.length + r.replaced.length,
        hits: r.hits
    };
}
function x(content, o) {
    if (typeof content === "string") {
        let r = g(content, o);
        if (M(r)) {
            return undefined;
        }
        return r;
    }
    let s = content.flatMap((r)=>{
        if (k(r)) {
            let n = g(r.text, o);
            if (M(n)) {
                return [];
            }
            return [
                {
                    ...r,
                    text: n
                }
            ];
        }
        if (w(r) && r.content !== undefined) {
            return [
                {
                    ...r,
                    content: x(r.content, o) ?? ""
                }
            ];
        }
        return [
            r
        ];
    });
    if (s.length === 0) {
        return undefined;
    }
    return s;
}
function k(e) {
    return e.type === "text" && "text" in e && typeof e.text === "string";
}
function w(e) {
    return e.type === "tool_result";
}
function g(e, o) {
    let s = e;
    for(let r = 0;; r++){
        if (r > e.length) {
            return a;
        }
        let n = o.replaced.find((i)=>s.includes(i));
        let t = o.keys.find((i)=>s.includes(i));
        let u = n !== undefined && (t === undefined || n.length >= t.length) ? n : t;
        if (u === undefined) {
            return s;
        }
        let m = s.split(u);
        o.hits += m.length - 1;
        s = m.join(u === n ? a : "");
    }
}
function M(e) {
    return Ene(e).trim() === "";
}
export { gmt, w6, yIe, G4n };
