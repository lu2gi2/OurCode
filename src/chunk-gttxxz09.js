import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ms, ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { IDe } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Ad } from "/$bunfs/root/chunk-4r6b8efh.js";
import { Ups } from "/$bunfs/root/chunk-6fb685xp.js";
const T = 0.5;
const M = 4;
const P = 1600;
const g = 25000;
function u() {
    let a_MAX_MCP_OUTPUT_TOKENS = a.MAX_MCP_OUTPUT_TOKENS;
    if (a_MAX_MCP_OUTPUT_TOKENS !== undefined && a_MAX_MCP_OUTPUT_TOKENS > 0) {
        return a_MAX_MCP_OUTPUT_TOKENS;
    }
    let r = k("tengu_velvet_ibis", {})?.mcp_tool;
    if (typeof r === "number" && Number.isFinite(r) && r > 0) {
        return r;
    }
    return g;
}
function Die(e) {
    if (!e || typeof e === "string" || !Array.isArray(e)) {
        return e;
    }
    let n = e;
    let r = false;
    for (let o of n){
        if (o?.type === "text" && "_meta" in o && o._meta) {
            r = true;
            break;
        }
    }
    if (!r) {
        return e;
    }
    return n.map((o)=>{
        if (o?.type === "text" && "_meta" in o && o._meta) {
            let { _meta, ...rest } = o;
            return rest;
        }
        return o;
    });
}
const C = 65536;
function jzo(e) {
    if (!Array.isArray(e)) {
        return e;
    }
    let n = 0;
    for (let r of e){
        if (r?.type !== "text" || !("_meta" in r) || !r._meta) {
            continue;
        }
        try {
            n += _(r._meta).length;
        } catch  {
            n = Infinity;
        }
        if (n > C) {
            t(`MCP result: text blocks' _meta (over ${C} characters of JSON in all, or not serializable) left off the retained result`);
            return Die(e);
        }
    }
    return e;
}
function p(e) {
    return e.type === "text";
}
function d(e) {
    return e.type === "image";
}
function wOe(e) {
    if (!e) {
        return 0;
    }
    if (typeof e === "string") {
        return Ad(e);
    }
    if (!Array.isArray(e)) {
        return 0;
    }
    return e.reduce((acc, item)=>{
        if (p(item)) {
            return acc + Ad(item.text);
        } else if (d(item)) {
            return acc + P;
        }
        return acc;
    }, 0);
}
function vOe() {
    return u() * 4;
}
const x = "[OUTPUT TRUNCATED - exceeded ";
function y() {
    return `

${x}${u()} token limit]

The tool output was truncated. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data. If pagination is not available, inform the user that you are working with truncated output and results may be incomplete.`;
}
async function h(e, n) {
    let r = [];
    let o = 0;
    for (let i of e){
        if (p(i)) {
            let s = n - o;
            if (s <= 0) {
                break;
            }
            if (i.text.length <= s) {
                r.push(i);
                o += i.text.length;
            } else {
                let l = ne(i.text, s);
                if (l) {
                    let f = {
                        type: "text",
                        text: l
                    };
                    if (i._meta) {
                        f._meta = i._meta;
                    }
                    r.push(f);
                }
                break;
            }
        } else if (d(i)) {
            let s = P * 4;
            if (o + s <= n) {
                r.push(i);
                o += s;
            } else {
                let l = n - o;
                if (l > 0) {
                    let f = Math.floor(l * 0.75);
                    try {
                        let m = await Ups(i, f);
                        r.push(m);
                        if (m.source.type === "base64") {
                            o += m.source.data.length;
                        } else {
                            o += s;
                        }
                    } catch  {}
                }
            }
        } else {
            r.push(i);
        }
    }
    return r;
}
async function E1t(content, credentials) {
    if (!content) {
        return false;
    }
    let r = wOe(content);
    if (r <= u() * T) {
        return false;
    }
    if (wOe(typeof content === "string" ? content : content.filter(p)) > u() * M) {
        return true;
    }
    try {
        return (await IDe(typeof content === "string" ? [
            {
                role: "user",
                content
            }
        ] : [
            {
                role: "user",
                content
            }
        ], [], undefined, {
            credentials
        }) ?? r) > u();
    } catch (error) {
        c(error);
        return r > u();
    }
}
async function k1t(e) {
    if (!e) {
        return e;
    }
    let n = vOe();
    let r = y();
    if (typeof e === "string") {
        return Ms(e, n) + r;
    } else {
        let o = await h(e, n);
        o.push({
            type: "text",
            text: r
        });
        return o;
    }
}
async function Lie(e, n) {
    if (!await E1t(e, n)) {
        return e;
    }
    return await k1t(e);
}
export { Die, jzo, wOe, vOe, E1t, k1t, Lie };
