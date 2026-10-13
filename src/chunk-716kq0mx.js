import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { pn, YI } from "/$bunfs/root/chunk-4r6b8efh.js";
import { Ln } from "/$bunfs/root/chunk-0ycjphb5.js";
const b = new q(()=>new Set);
function T(o, r) {
    return `${o}_${r}`;
}
const k = /_(\d+)$/;
function U0e(o) {
    let r = k.exec(o);
    if (r) {
        return o.slice(0, -r[0].length);
    }
}
function w(o, r, a) {
    let i = pn(r, o.name);
    if (i === undefined || !YI(i)) {
        return null;
    }
    let l = (u)=>{
        f("batch_tools", u, {
            tool_name: Ln(i.name),
            isMcp: false
        });
        return [
            {
                type: "tool_use",
                id: T(o.id, 0),
                name: i.name,
                input: o.input,
                ...o.caller !== undefined && {
                    caller: o.caller
                }
            }
        ];
    };
    try {
        let u = i.inputSchema.safeParse(o.input);
        if (!u.success) {
            return {
                synthetics: l("parse_failed"),
                decomposed: false
            };
        }
        let { v1Tool, entries } = i.perEntryHookInputs(u.data);
        if (entries.length === 0) {
            return {
                synthetics: l("zero_entries"),
                decomposed: false
            };
        }
        return {
            decomposed: true,
            synthetics: entries.map((s, d)=>{
                let input = s;
                try {
                    input = a(v1Tool, s);
                } catch (error) {
                    if (error instanceof Error && error.name === "ZodError") {
                        t(`batch entry normalize rejected input: ${error}`, {
                            level: "error"
                        });
                    } else {
                        c(error);
                    }
                }
                return {
                    type: "tool_use",
                    id: T(o.id, d),
                    name: v1Tool.name,
                    input,
                    ...o.caller !== undefined && {
                        caller: o.caller
                    }
                };
            })
        };
    } catch  {
        return {
            synthetics: l("per_entry_threw"),
            decomposed: false
        };
    }
}
function yOn(o) {
    let r;
    for (let a of o){
        if (YI(a)) {
            r ??= new Set;
            r.add(a.underlyingV1ToolName);
        }
    }
    if (r === undefined) {
        return o;
    }
    return o.filter((a)=>!r.has(a.name));
}
function n5t(o, r, a) {
    let i;
    let batchToolUses = [];
    for(let u = 0; u < o.length; u++){
        let n = o[u];
        if (n.type !== "tool_use") {
            i?.push(n);
            continue;
        }
        let e = w(n, r, a);
        if (e === null) {
            i?.push(n);
            continue;
        }
        i ??= o.slice(0, u);
        i.push(...e.synthetics);
        if (e.decomposed) {
            batchToolUses.push({
                id: n.id,
                name: n.name
            });
            g("batch_tools", {
                tool_name: Ln(n.name),
                isMcp: false
            });
        }
    }
    return {
        content: i ?? o,
        batchToolUses
    };
}
function qas(o, r, a) {
    if (r === undefined || r.length === 0) {
        return o;
    }
    let i = new Map;
    for (let e of r){
        if (!i.has(e.id)) {
            i.set(e.id, e);
        }
    }
    let l = new Map;
    for (let e of i.values()){
        let s = pn(a, e.name);
        if (s === undefined || !YI(s)) {
            continue;
        }
        let d = [];
        let m;
        for (let p of o){
            if (p.type === "tool_use" && U0e(p.id) === e.id) {
                m ??= p;
                d.push(p.input);
            }
        }
        try {
            l.set(e.id, {
                type: "tool_use",
                id: e.id,
                name: e.name,
                input: s.reassemble(d),
                ...m?.caller !== undefined && {
                    caller: m.caller
                }
            });
        } catch  {
            let p = b.of(B().host);
            if (!p.has(e.id)) {
                p.add(e.id);
                f("batch_tools", "reassemble_threw", {
                    tool_name: Ln(e.name),
                    isMcp: false
                });
            }
        }
    }
    let u = new Set;
    let n = [];
    for (let e of o){
        if (e.type === "tool_use") {
            let s = U0e(e.id);
            if (s !== undefined && l.has(s)) {
                if (!u.has(s)) {
                    u.add(s);
                    n.push(l.get(s));
                }
                continue;
            }
        }
        n.push(e);
    }
    return n;
}
function Kas(o, r) {
    let a = false;
    for (let n of o){
        if (n.type === "assistant") {
            for (let e of n.message.content){
                if (e.type === "tool_use") {
                    let s = pn(r, e.name);
                    if (s !== undefined && YI(s)) {
                        a = true;
                    }
                }
            }
        }
        if (n.type === "user" && !a) {
            if (Array.isArray(n.message.content) && n.message.content.some((e)=>e.type === "tool_result" && U0e(e.tool_use_id) !== undefined)) {
                a = true;
            }
        }
    }
    if (!a) {
        return o;
    }
    let i = new Map;
    for (let n of o){
        if (n.type !== "assistant") {
            continue;
        }
        for (let e of n.message.content){
            if (e.type === "tool_use") {
                i.set(e.id, e);
            }
        }
    }
    let l = new Map;
    for (let n of o){
        if (n.type !== "user" || !Array.isArray(n.message.content)) {
            continue;
        }
        for (let e of n.message.content){
            if (e.type !== "tool_result") {
                continue;
            }
            let s = U0e(e.tool_use_id);
            if (s === undefined || !i.has(s)) {
                continue;
            }
            let d = l.get(s);
            if (d === undefined) {
                d = new Map;
                l.set(s, d);
            }
            if (!d.has(e.tool_use_id)) {
                d.set(e.tool_use_id, e);
            }
        }
    }
    if (l.size === 0) {
        return o;
    }
    let u = new Set;
    return o.flatMap((n)=>{
        if (n.type !== "user" || !Array.isArray(n.message.content)) {
            return [
                n
            ];
        }
        let e = false;
        let content = [];
        for (let d of n.message.content){
            if (d.type !== "tool_result") {
                content.push(d);
                continue;
            }
            let m = U0e(d.tool_use_id);
            let p = m !== undefined ? l.get(m) : undefined;
            if (m === undefined || p === undefined) {
                content.push(d);
                continue;
            }
            e = true;
            if (u.has(m)) {
                continue;
            }
            u.add(m);
            let h = i.get(m);
            let y = pn(r, h.name);
            let _ = y !== undefined && YI(y) ? y : undefined;
            content.push(P(_, m, R(_, h.input, m, p)));
        }
        if (!e) {
            return [
                n
            ];
        }
        if (content.length === 0) {
            return [];
        }
        return [
            {
                ...n,
                message: {
                    ...n.message,
                    content
                }
            }
        ];
    });
}
function R(o, input, a, i) {
    let l;
    if (o !== undefined) {
        try {
            let n = o.inputSchema.safeParse(input);
            if (n.success) {
                l = o.perEntryHookInputs(n.data).entries;
            }
        } catch  {}
    }
    let length = l?.length ?? 0;
    for (let n of i.keys()){
        let e = k.exec(n);
        if (e) {
            length = Math.max(length, Number(e[1]) + 1);
        }
    }
    if (length > 1000) {
        length = l?.length ?? i.size;
    }
    return Array.from({
        length
    }, (n, e)=>{
        let result = i.get(T(a, e));
        if (result !== undefined) {
            return {
                input: l?.[e],
                result
            };
        }
        return {
            input: l?.[e],
            error: "no result"
        };
    });
}
function P(o, tool_use_id, a) {
    let i = [];
    let text = "";
    let u = false;
    let n = (s)=>{
        if (s.length > 0) {
            text = text === "" ? s : `${text}
${s}`;
        }
    };
    let e = ()=>{
        if (text !== "") {
            i.push({
                type: "text",
                text
            });
            text = "";
        }
    };
    for (let [s, d] of a.entries()){
        let m = d.result === undefined || d.result.is_error === true;
        if (m) {
            u = true;
        }
        n(`--- entry ${s + 1}${m ? " (error)" : ""} ---`);
        if (d.result !== undefined) {
            let p = d.result.content;
            if (typeof p === "string") {
                n(p);
            } else if (Array.isArray(p)) {
                for (let h of p){
                    if (h.type === "text") {
                        n(h.text);
                    } else {
                        e();
                        i.push(h);
                    }
                }
            }
        } else {
            n(`[entry ${s + 1} error: ${d.error ?? "no result"}]`);
        }
    }
    if (a.length === 1 && o !== undefined) {
        n(`<system-reminder>Tip: ${o.name} accepts multiple entries in one call (\`${o.entryFieldName}: [{...}, {...}]\`). Batching related operations into a single call is faster than issuing them as separate or parallel calls. No action needed for this result.</system-reminder>`);
    }
    e();
    return {
        type: "tool_result",
        tool_use_id,
        content: i.length === 1 && i[0]?.type === "text" ? i[0].text : i,
        ...u && {
            is_error: true
        }
    };
}
const x = new Map;
function Wye(o) {
    return x.get(o);
}
function _On(o) {
    return o.map(Wye).filter((r)=>r !== undefined).filter((r)=>r.isEnabled());
}
function Yas(o, r) {
    return r.find((a)=>a.underlyingV1ToolName === o)?.name ?? o;
}
function Gne(o) {
    for (let [r, a] of x){
        if (a.name === o) {
            return r;
        }
    }
}
export { U0e, yOn, n5t, qas, Kas, Wye, _On, Yas, Gne };
