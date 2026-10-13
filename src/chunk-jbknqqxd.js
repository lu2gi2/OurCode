import { ne, Nr, FP } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Wmr, zI } from "/$bunfs/root/chunk-zz7dyws3.js";
import { va } from "/$bunfs/root/chunk-7aeb6f08.js";
const shn = 5;
const dGo = "Structured output was retracted by a model fallback and no retry produced a valid result";
const d = 600;
function uGo(t, r, e) {
    if (r > 0) {
        return `Failed to provide surviving structured output after ${t} attempts (${r} retracted by a model fallback)`;
    }
    let n = `Failed to provide valid structured output after ${t} attempts`;
    if (e === undefined) {
        return n;
    }
    return `${n} \u2014 last StructuredOutput error: ${e}`;
}
function K1r(t) {
    let r = typeof t === "string" ? t : Array.isArray(t) ? t.flatMap((i)=>{
        if (i.type === "text") {
            return [
                i.text
            ];
        }
        return [];
    }).join(`
`) : undefined;
    if (r === undefined) {
        return;
    }
    let n = r.replace(/^<tool_use_error>/, "").replace(/<\/tool_use_error>$/, "").replace(Wmr, `
`).split(`
`).map(FP).join(`
`);
    let sanitized = zI(n, {
        prependMarker: false
    }).sanitized;
    let u = Nr(sanitized);
    if (u.length === 0) {
        return;
    }
    let s = u.length > d ? `${ne(u, d)}…` : u;
    return zI(s, {
        prependMarker: false
    }).sanitized;
}
function pGo(t, r) {
    try {
        let e = r === undefined ? 0 : t.lastIndexOf(r) + 1;
        return a(e === 0 ? t : t.slice(e));
    } catch (error) {
        c(error);
        return;
    }
}
function a(t) {
    let r = new Set;
    for (let e of t){
        if (e?.type !== "assistant") {
            continue;
        }
        let n = e.message.content;
        if (!Array.isArray(n)) {
            continue;
        }
        for (let o of n){
            if (o.type === "tool_use" && o.name === va) {
                r.add(o.id);
            }
        }
    }
    if (r.size === 0) {
        return;
    }
    for(let e = t.length - 1; e >= 0; e--){
        let n = t[e];
        if (n?.type !== "user") {
            continue;
        }
        let o = n.message.content;
        if (!Array.isArray(o)) {
            continue;
        }
        for(let u = o.length - 1; u >= 0; u--){
            let s = o[u];
            if (s?.type === "tool_result" && s.is_error === true && r.has(s.tool_use_id)) {
                return K1r(s.content);
            }
        }
    }
}
export { shn, dGo, uGo, K1r, pGo };
