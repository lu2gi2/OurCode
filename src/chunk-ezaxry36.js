import { vq } from "/$bunfs/root/chunk-etbngzss.js";
import { bjn } from "/$bunfs/root/chunk-6g4165br.js";
import { Gct, Pkr } from "/$bunfs/root/chunk-tw5t5h13.js";
import { sue } from "/$bunfs/root/chunk-0ycjphb5.js";
const d = new RegExp(`^<${vq}[ \\t>]`);
const S = `</${vq}>`;
const C = [
    "",
    `
`
];
const I = /\sfrom-plugin\s*(?:=\s*(?:"[^"<>]*"|'[^'<>]*'|[^\s>]*))?/gi;
const A = /from-plugin/i;
function Jfe(e, n) {
    if (typeof e === "string") {
        return h(e, n === sue);
    }
    if (!Array.isArray(e)) {
        return e;
    }
    let t = e;
    for (let o of C){
        let s = [];
        let c = [];
        let r = "";
        t.forEach((i, u)=>{
            if (i.type === "text") {
                if (c.length > 0) {
                    r += o;
                }
                s.push(r.length);
                c.push(u);
                r += i.text;
            }
        });
        let l = Pkr(r);
        if (l.length === 0) {
            continue;
        }
        let g = t.slice();
        let a = 0;
        c.forEach((i, u)=>{
            let f = g[i];
            let P = s[u];
            let _ = s[u + 1] ?? Infinity;
            if (f.type !== "text") {
                return;
            }
            let p = [];
            let E = 0;
            for(; a < l.length && l[a] < _; a++){
                let m = l[a] - P;
                p.push(f.text.slice(E, m), "<\\");
                E = m + 1;
            }
            if (p.length > 0) {
                p.push(f.text.slice(E));
                g[i] = {
                    ...f,
                    text: p.join("")
                };
            }
        });
        t = g;
    }
    return t;
}
function TBo(e) {
    return h(e, true);
}
function h(e, n) {
    let t = e.trimEnd();
    let o = t.length - S.length;
    let s = bjn.test(e);
    if (!(o > 0 && t.endsWith(S) && (s || n && d.test(e)))) {
        return Gct(e);
    }
    let r = B(e.slice(1, o));
    if (A.test(O(r))) {
        return Gct(e);
    }
    return `<${Gct(r)}${e.slice(o)}`;
}
function B(e) {
    let n = O(e);
    return n.replace(I, "") + e.slice(n.length);
}
function O(e) {
    let n = e.indexOf(">");
    if (n < 0) {
        return e;
    }
    return e.slice(0, n);
}
export { Jfe, TBo };
