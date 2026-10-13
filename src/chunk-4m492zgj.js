import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { qor, xe, dlr, MDe, zt } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { Mu } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Me } from "/$bunfs/root/chunk-b97fvbrv.js";
import { W_ } from "/$bunfs/root/chunk-b7w13qrv.js";
import { o, M, T, _t, Ue, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { isDeepStrictEqual } from "util";
import { randomUUID } from "crypto";
const Ugt = p(()=>_t({
        type: A("text"),
        text: o().min(1)
    }));
const QNr = (t)=>{
    if (t.kind === "plugin" && "name" in t) {
        return t.name;
    }
};
function ZNr(t, uuid) {
    let { message } = t;
    let r = message.content.flatMap((s)=>{
        let u = Ugt().safeParse(s);
        if (u.success) {
            return [
                u.data.text
            ];
        }
        return [];
    });
    let i = message.content.find((s)=>s.type !== "text");
    if (i !== undefined || r.length !== message.content.length) {
        return {
            reason: `a ${i?.type ?? "text"} block the conversation does not take from a plugin (a row a plugin appends carries text blocks)`
        };
    }
    if (message.type === "system") {
        let [s] = r;
        if (s !== undefined && r.length === 1) {
            return {
                row: {
                    ...zt(s, "info"),
                    uuid
                }
            };
        }
        return {
            reason: "a notice that is not one text block"
        };
    }
    let a = message.type === "user" && message.isMeta === true;
    let m = QNr(t.origin);
    if (a) {
        return {
            row: xe({
                content: r.map((s)=>({
                        type: "text",
                        text: s
                    })),
                isMeta: true,
                uuid,
                ...m !== undefined && {
                    origin: {
                        kind: "plugin",
                        name: m
                    }
                }
            })
        };
    }
    return {
        reason: `${`a ${message.type} row` + (message.type === "user" ? " that is not isMeta" : "")} (a plugin appends a user-role isMeta row or a system notice; a prompt is \$.prompt.submit)`
    };
}
function e$r(t, e) {
    let n = t ?? "main";
    if (e) {
        return `${n} is a conversation no plugin may shape`;
    }
    if (t === undefined) {
        return "this session keeps no conversation to append to";
    }
    return `no running loop is ${t}`;
}
const Epn = (t)=>MDe(t).messages.map((e)=>({
            content: e.message.content
        }));
function Bgt({ content }) {
    if (typeof content === "string") {
        return [
            content
        ];
    }
    return content.flatMap((r)=>{
        if (r.type === "text") {
            return [
                r.text
            ];
        }
        return [];
    });
}
function t$r(t) {
    let e = "content" in t ? t.content : undefined;
    if (typeof e === "string" && e !== "") {
        return e;
    }
}
function kpn(t) {
    switch(t.type){
        case "user":
        case "assistant":
            return qor(t.message.content);
        case "attachment":
            return Epn(t).flatMap(Bgt).map((e)=>({
                    type: "text",
                    text: e
                }));
        case "system":
            {
                let e = t$r(t);
                if (e === undefined) {
                    return [];
                }
                return [
                    {
                        type: "text",
                        text: e
                    }
                ];
            }
    }
}
function U3n(t) {
    let e = t.type === "attachment";
    let n = t.type === "system";
    let r = e ? t.attachment.type : n ? t.subtype : undefined;
    let i = !W_(t);
    let role = t.type === "assistant" ? "assistant" : "user";
    let m = "isMeta" in t && t.isMeta === true;
    return {
        type: t.type,
        ...r !== undefined && {
            name: r
        },
        ...i && {
            role
        },
        ...m && {
            isMeta: true
        },
        content: kpn(t)
    };
}
const n$r = (t, e)=>!dlr(t) && e.length > 0 && e.every(({ content })=>typeof content === "string" || content.every((r)=>r.type === "text"));
async function KFt(t, e) {
    let r = e?.isHookable === true ? e : undefined;
    let i = Jt(t.uuid);
    let a = e$r(t.agentId, e !== undefined);
    let s = i !== null && r !== undefined ? ZNr(t, i) : {
        reason: i === null ? "a uuid the engine did not mint" : a
    };
    if (r === undefined || "reason" in s) {
        let u = "reason" in s ? s.reason : a;
        throw new Me(`$.session.append: refused: ${u}`);
    }
    (r.keepArrived ?? r.keep)([
        s.row
    ]);
    r.arrived([
        s.row
    ]);
    return {
        message: U3n(s.row),
        uuid: s.row.uuid
    };
}
const Tpn = new Set([
    "text",
    "image",
    "document"
]);
function CJe(t) {
    let e = new Map;
    return t.map((n)=>{
        if (Tpn.has(n.type)) {
            return;
        }
        if (n.type === "tool_use" && typeof n.id === "string") {
            return `tool_use:${n.id}`;
        }
        let n_tool_use_id = n.tool_use_id;
        if (n.type === "tool_result" && typeof n_tool_use_id === "string") {
            return `tool_result:${n_tool_use_id}`;
        }
        let i = e.get(n.type) ?? 0;
        e.set(n.type, i + 1);
        return `${n.type}#${i}`;
    });
}
const r$r = p(()=>_t({
        type: o()
    }));
const jje = (t)=>{
    if (Array.isArray(t)) {
        return t.flatMap((e)=>{
            let n = r$r().safeParse(e);
            if (n.success) {
                return [
                    n.data
                ];
            }
            return [];
        });
    }
    return [];
};
const Wje = (t, e)=>e.flatMap((n)=>{
        let r = n.kind === "text" ? n.text : t[n.index];
        if (r === undefined) {
            return [];
        }
        return [
            r
        ];
    });
function YFt(t, e) {
    if (e === undefined || typeof e === "string") {
        return e ?? t;
    }
    let n = Array.isArray(t) ? t : [];
    let r = new Set;
    return e.flatMap((i)=>{
        let a = n.findIndex((u, x)=>!r.has(x) && isDeepStrictEqual(u, i));
        let m = n[a];
        let s = Ugt().safeParse(i);
        if (m !== undefined) {
            r.add(a);
            return [
                m
            ];
        }
        if (s.success) {
            return [
                {
                    type: "text",
                    text: s.data.text
                }
            ];
        }
        return [];
    });
}
const o$r = new Set([
    "thinking",
    "redacted_thinking",
    "tool_result"
]);
function s$r(t, e, n) {
    let r = e.findIndex((a, m)=>!n.has(m) && Tpn.has(a.type) && isDeepStrictEqual(a, t));
    if (r !== -1) {
        n.add(r);
        return {
            kind: "raised",
            index: r
        };
    }
    let i = Ugt().safeParse(t);
    if (i.success) {
        return {
            kind: "text",
            text: i.data.text
        };
    }
}
const Apn = "^";
const i$r = (index, content, isError)=>({
        kind: "tool-result",
        index,
        ...content !== undefined && {
            content
        },
        isError
    });
const a$r = p(()=>_t({
        type: A("tool_result"),
        content: Ue([
            o(),
            T(_t({
                type: o()
            }))
        ]).optional(),
        is_error: M().optional()
    }));
function l$r(t, e, n) {
    let r = a$r().safeParse(e);
    if (r.success) {
        return i$r(t, r.data.content, r.data.is_error ?? n);
    }
    return {
        kind: "raised",
        index: t
    };
}
function XFt(t, e) {
    if (t.length === 0) {
        return [];
    }
    let n = CJe(t);
    let r = new Set(n.filter((f)=>f !== undefined));
    let i = n.filter((f, c)=>f !== undefined && t[c]?.type === "tool_result");
    let a = CJe(e);
    let m = F(e, (f)=>f.type === "tool_result" && typeof f.tool_use_id !== "string") === i.length;
    let s = new Map;
    let u = new Map;
    let x = new Set;
    let g = Apn;
    let C = 0;
    e.forEach((f, c)=>{
        let y = f.type === "tool_result" && typeof f.tool_use_id !== "string";
        let d = y ? m ? i[C++] : undefined : a[c];
        if (d === undefined && !y) {
            let O = s$r(f, t, x);
            let E = s.get(g) ?? [];
            if (O !== undefined) {
                s.set(g, [
                    ...E,
                    O
                ]);
            }
            return;
        }
        if (d === undefined || !r.has(d)) {
            return;
        }
        g = d;
        if (f.type === "tool_result") {
            u.set(d, f);
        }
    });
    let k = t.findIndex((f)=>!o$r.has(f.type));
    let h = k === -1 ? t.length : k;
    let l = [];
    t.forEach((f, c)=>{
        if (c === h) {
            l.push(...s.get(Apn) ?? []);
        }
        let y = n[c];
        if (y === undefined) {
            return;
        }
        let d = u.get(y);
        l.push(d === undefined ? {
            kind: "raised",
            index: c
        } : l$r(c, d, f.is_error === true), ...s.get(y) ?? []);
    });
    if (h === t.length) {
        l.push(...s.get(Apn) ?? []);
    }
    if (l.length > 0) {
        return l;
    }
    return [
        {
            kind: "text",
            text: Mu
        }
    ];
}
const JFt = ({ message, agentId }, name)=>({
        message: {
            type: message.type,
            ...message.type === "user" && {
                role: "user",
                isMeta: true
            },
            content: message.content
        },
        door: "note",
        origin: {
            kind: "plugin",
            name
        },
        uuid: randomUUID(),
        ...agentId !== undefined && {
            agentId
        }
    });
export { Ugt, QNr, ZNr, e$r, Epn, Bgt, t$r, kpn, U3n, n$r, KFt, Tpn, CJe, r$r, jje, Wje, YFt, o$r, s$r, Apn, i$r, a$r, l$r, XFt, JFt };
