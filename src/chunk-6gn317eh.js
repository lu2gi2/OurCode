import { G2 } from "/$bunfs/root/chunk-vmr48rzv.js";
import { l, Jc, H9 } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Bn, gy, Xy, ll } from "/$bunfs/root/chunk-xgw72tt1.js";
import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ml, Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { et } from "/$bunfs/root/chunk-w1n7t02f.js";
import { HIs, xN, Q5e } from "/$bunfs/root/chunk-3yz9zdww.js";
import { C8 } from "/$bunfs/root/chunk-6dwnw6av.js";
import { VYe } from "/$bunfs/root/chunk-qsxrphgj.js";
import { zlr, Mle, a4 } from "/$bunfs/root/chunk-em70188r.js";
import { uPe, l9 } from "/$bunfs/root/chunk-yngqe5v3.js";
import { Kc } from "/$bunfs/root/chunk-svqqgdca.js";
import { resolve } from "path";
const v = 1000;
const D = 16777216;
class I {
    cache;
    constructor(max = v, maxSize = D){
        this.cache = new Kc({
            max,
            maxSize,
            sizeCalculation: (r)=>Math.max(1, r.content.length)
        });
    }
    readFile(e) {
        let n = ie();
        let r;
        try {
            r = n.statSync(e);
        } catch (error) {
            this.cache.delete(e);
            throw error;
        }
        if (!r.isFile()) {
            this.cache.delete(e);
            uPe(r, e, undefined);
        }
        let i = this.cache.get(e);
        if (i && i.mtime === r.mtimeMs) {
            return {
                content: i.content,
                encoding: i.encoding
            };
        }
        let encoding = HIs(e);
        let content = n.readFileSync(e, {
            encoding
        }).replaceAll(`\r
`, `
`);
        this.cache.set(e, {
            content,
            encoding,
            mtime: r.mtimeMs
        });
        return {
            content,
            encoding
        };
    }
    invalidate(e) {
        this.cache.delete(e);
    }
    getStats() {
        return {
            size: this.cache.size,
            totalChars: this.cache.calculatedSize,
            entries: Array.from(this.cache.keys())
        };
    }
}
const P = new q(()=>new I);
function m(e) {
    let { content } = P.of(B().host).readFile(e);
    return content;
}
function bnt(e) {
    return /\.(md|mdx)$/i.test(e);
}
function Snt(e) {
    let n = e.split(/(\r\n|\n|\r)/);
    let r = "";
    for(let i = 0; i < n.length; i++){
        let s = n[i];
        if (s !== undefined) {
            if (i % 2 === 0) {
                r += s.replace(/\s+$/, "");
            } else {
                r += s;
            }
        }
    }
    return r;
}
const z = {
    "<fnr>": "<function_results>",
    "<n>": "<name>",
    "</n>": "</name>",
    "<o>": "<output>",
    "</o>": "</output>",
    "<e>": "<error>",
    "</e>": "</error>",
    "<s>": "<system>",
    "</s>": "</system>",
    "<r>": "<result>",
    "</r>": "</result>",
    "< META_START >": "<META_START>",
    "< META_END >": "<META_END>",
    "< EOT >": "<EOT>",
    "< META >": "<META>",
    "< SOS >": "<SOS>",
    "\n\nH:": `

Human:`,
    "\n\nA:": `

Assistant:`
};
function Dlr(e) {
    let result = e;
    let appliedReplacements = [];
    for (let [i, s] of Object.entries(z)){
        let o = result;
        result = result.replaceAll(i, s);
        if (o !== result) {
            appliedReplacements.push({
                from: i,
                to: s
            });
        }
    }
    return {
        result,
        appliedReplacements
    };
}
const x = "‘";
const h = "’";
const A = "“";
const T = "”";
function b(e) {
    return e.replaceAll(x, "'").replaceAll(h, "'").replaceAll(A, '"').replaceAll(T, '"');
}
const w = /\\u[0-9a-fA-F]{4}/;
const y = /[\u0080-\uffff]/;
function _(e) {
    return e.replace(/(\\\\)|\\u([0-9a-fA-F]{4})/g, (n, r, i)=>{
        if (r !== undefined) {
            return n;
        }
        return String.fromCharCode(parseInt(i, 16));
    });
}
function k(e) {
    let n = "";
    for(let r = 0; r < e.length; r++){
        let i = e.charCodeAt(r);
        if (i >= 128) {
            n += "\\\\u";
            for (let s of i.toString(16).padStart(4, "0")){
                n += s >= "a" ? `[${s}${s.toUpperCase()}]` : s;
            }
        } else {
            n += ml(e[r]);
        }
    }
    return n;
}
function C(e) {
    let n = 0;
    for(let r = 0; r < e.length; r++){
        if (e.charCodeAt(r) >= 128) {
            n++;
        }
    }
    return e.length + 5 * n;
}
function R(e, n) {
    let r = 0;
    while(e[n - 1 - r] === "\\"){
        r++;
    }
    return r;
}
function L(e, n) {
    if (R(e, e.length) % 2 === 1) {
        return null;
    }
    let r = e[0] === "\\" ? [
        0
    ] : [];
    let i = 0;
    for(let o = 0; o < e.length; o++){
        if (e.charCodeAt(o) >= 128) {
            r.push(i);
            i += 6;
        } else {
            i += 1;
        }
    }
    let s = k(e);
    try {
        let o = new RegExp(s, "g");
        for(let a = o.exec(n); a !== null; a = o.exec(n)){
            let c = a.index;
            if (r.every((u)=>R(n, c + u) % 2 === 0)) {
                if (n.indexOf(a[0]) === c) {
                    return a[0];
                }
                return null;
            }
            o.lastIndex = c + 1;
        }
        return null;
    } catch (error) {
        t(`Edit: skipped the \\uXXXX-escape search; the regex engine refused a ${s.length}-character pattern (${error instanceof Error ? error.name : "non-Error"})`);
        return null;
    }
}
function Ets(e) {
    return w.test(e) || y.test(e);
}
function kts(e, n, r) {
    if (e === n) {
        return r;
    }
    if (y.test(e) && C(e) === n.length && L(e, n) !== null) {
        let i = new Map;
        let s = 0;
        let o = 0;
        for(let a = 0, c = 0; a < e.length; a++){
            let u = e.charCodeAt(a);
            if (u >= 128) {
                let f = n.slice(c + 2, c + 6);
                i.set(u, f);
                for (let d of f){
                    if (d >= "a" && d <= "f") {
                        o++;
                    } else if (d >= "A" && d <= "F") {
                        s++;
                    }
                }
                c += 6;
            } else {
                c += 1;
            }
        }
        return r.replace(/[\u0080-\uffff]/g, (a)=>{
            let c = a.charCodeAt(0);
            let u = i.get(c);
            if (u !== undefined) {
                return `\\u${u}`;
            }
            let f = c.toString(16).padStart(4, "0");
            return `\\u${s > o ? f.toUpperCase() : f}`;
        });
    }
    if (w.test(e) && _(e) === n) {
        return _(r);
    }
    return r;
}
function zDe(e, n) {
    if (e.includes(n)) {
        return n;
    }
    let r = b(n);
    let s = b(e).indexOf(r);
    if (s !== -1) {
        return e.substring(s, s + n.length);
    }
    if (w.test(n)) {
        let o = _(n);
        if (o !== n && e.includes(o)) {
            return o;
        }
    }
    if (y.test(n)) {
        if (C(n) > e.length || !e.includes("\\u")) {
            return null;
        }
        return L(n, e);
    }
    return null;
}
function wnt(e, n, r) {
    if (e === n) {
        return r;
    }
    let i = n.includes(A) || n.includes(T);
    let s = n.includes(x) || n.includes(h);
    if (!i && !s) {
        return r;
    }
    let o = r;
    if (i) {
        o = H(o);
    }
    if (s) {
        o = W(o);
    }
    return o;
}
function N(e, n) {
    if (n === 0) {
        return true;
    }
    let r = e[n - 1];
    return r === " " || r === "\t" || r === `
` || r === "\r" || r === "(" || r === "[" || r === "{" || r === "—" || r === "–";
}
function H(e) {
    let n = [
        ...e
    ];
    let r = [];
    for(let i = 0; i < n.length; i++){
        if (n[i] === '"') {
            r.push(N(n, i) ? A : T);
        } else {
            r.push(n[i]);
        }
    }
    return r.join("");
}
function W(e) {
    let n = [
        ...e
    ];
    let r = [];
    for(let i = 0; i < n.length; i++){
        if (n[i] === "'") {
            let s = i > 0 ? n[i - 1] : undefined;
            let o = i < n.length - 1 ? n[i + 1] : undefined;
            let a = s !== undefined && /\p{L}/u.test(s);
            let c = o !== undefined && /\p{L}/u.test(o);
            if (a && c) {
                r.push(h);
            } else {
                r.push(N(n, i) ? x : h);
            }
        } else {
            r.push(n[i]);
        }
    }
    return r.join("");
}
function Q(e, old_string, new_string, i = false) {
    let s = i ? (a, c, u)=>a.replaceAll(c, ()=>u) : (a, c, u)=>a.replace(c, ()=>u);
    if (new_string !== "") {
        return s(e, old_string, new_string);
    }
    if (!old_string.endsWith(`
`) && e.includes(old_string + `
`)) {
        return s(e, old_string + `
`, new_string);
    }
    return s(e, old_string, new_string);
}
function hYt({ filePath, fileContents, oldString, newString, replaceAll = false }) {
    return m7r({
        filePath,
        fileContents,
        edits: [
            {
                old_string: oldString,
                new_string: newString,
                replace_all: replaceAll
            }
        ]
    });
}
function m7r({ filePath, fileContents, edits }) {
    if (S(fileContents, edits)) {
        return {
            patch: a4({
                filePath,
                fileContents,
                edits: [
                    {
                        old_string: fileContents,
                        new_string: fileContents,
                        replace_all: false
                    }
                ]
            }),
            updatedFile: ""
        };
    }
    let updatedFile = F(fileContents, edits);
    return {
        patch: Mle({
            filePath,
            oldContent: xN(fileContents),
            newContent: xN(updatedFile)
        }),
        updatedFile
    };
}
function S(e, n) {
    return !e && n.length === 1 && n[0] !== undefined && n[0].old_string === "" && n[0].new_string === "";
}
function F(e, n) {
    if (S(e, n)) {
        return "";
    }
    let r = e;
    let i = [];
    for (let s of n){
        let o = s.old_string.replace(/\n+$/, "");
        for (let c of i){
            if (o !== "" && c.includes(o)) {
                throw Error("Cannot edit file: old_string is a substring of a new_string from a previous edit.");
            }
        }
        let a = r;
        r = s.old_string === "" ? s.new_string : Q(r, s.old_string, s.new_string, s.replace_all);
        if (r === a) {
            throw new C8("String not found in file. Failed to apply edit.");
        }
        i.push(s.new_string);
    }
    if (r === e) {
        throw Error("Original and edited file match exactly. Failed to apply edit.");
    }
    return r;
}
const E = 8192;
function Tts(e, n) {
    let r = G2("file.txt", "file.txt", e, n, undefined, undefined, {
        context: 8,
        timeout: zlr
    });
    if (!r) {
        return "";
    }
    let tabAwareSeparator = VYe();
    let s = r.hunks.map((p)=>({
            startLine: p.oldStart,
            content: p.lines.filter((g)=>!g.startsWith("-") && !g.startsWith("\\")).map((g)=>g.slice(1)).join(`
`),
            tabAwareSeparator
        })).map(Q5e).join(`
...
`);
    if (s.length <= E) {
        return s;
    }
    let o = s.lastIndexOf(`
`, E);
    let a = o > 0 ? s.slice(0, o) : s.slice(0, E);
    let c = 1;
    let u = 1;
    let d = Lt(s, `
`, a.length + c) + u;
    return `${a}

... [${d} lines truncated] ...`;
}
function Ats(e) {
    return e.map((n)=>{
        let r = [];
        let i = [];
        for (let s of n.lines){
            if (s.startsWith(" ")) {
                r.push(s.slice(1));
                i.push(s.slice(1));
            } else if (s.startsWith("-")) {
                r.push(s.slice(1));
            } else if (s.startsWith("+")) {
                i.push(s.slice(1));
            }
        }
        return {
            old_string: r.join(`
`),
            new_string: i.join(`
`),
            replace_all: false
        };
    });
}
function U(error) {
    return Jc(error) || H9(error) || l9(error);
}
function Llr({ file_path, edits }) {
    if (edits.length === 0) {
        return {
            file_path,
            edits
        };
    }
    let r = bnt(file_path);
    try {
        let i = et(file_path);
        if ((Bn(file_path) || Bn(i)) && !(ll(file_path) || ll(i)) || gy(file_path) || gy(i) || Xy(file_path) || Xy(i)) {
            return {
                file_path,
                edits
            };
        }
        let s = m(i);
        return {
            file_path,
            edits: edits.map(({ old_string, new_string, replace_all })=>{
                let u = r ? new_string : Snt(new_string);
                if (s.includes(old_string)) {
                    return {
                        old_string,
                        new_string: u,
                        replace_all
                    };
                }
                let { result, appliedReplacements } = Dlr(old_string);
                if (s.includes(result)) {
                    let p = u;
                    for (let { from, to } of appliedReplacements){
                        p = p.replaceAll(from, to);
                    }
                    return {
                        old_string: result,
                        new_string: p,
                        replace_all
                    };
                }
                return {
                    old_string,
                    new_string: u,
                    replace_all
                };
            })
        };
    } catch (error) {
        if (!U(error)) {
            t(`Failed to read ${file_path} for edit normalization: ${error instanceof Error ? error.message : String(error)}`, {
                level: "error"
            });
        }
    }
    return {
        file_path,
        edits
    };
}
function j(edits, n, r) {
    if (edits.length === n.length && edits.every((c, u)=>{
        let f = n[u];
        return f !== undefined && c.old_string === f.old_string && c.new_string === f.new_string && c.replace_all === f.replace_all;
    })) {
        return true;
    }
    let i = null;
    let s = null;
    let o = null;
    let a = null;
    try {
        i = F(r, edits);
    } catch (error) {
        s = l(error);
    }
    try {
        o = F(r, n);
    } catch (error) {
        a = l(error);
    }
    if (s !== null && a !== null) {
        return s === a;
    }
    if (s !== null || a !== null) {
        return false;
    }
    return i === o;
}
function g7r(e, n) {
    return e.file_path === n.file_path && e.edits.length === n.edits.length && e.edits.every((r, i)=>{
        let s = n.edits[i];
        return s !== undefined && r.old_string === s.old_string && r.new_string === s.new_string && r.replace_all === s.replace_all;
    });
}
function Cts(e, n) {
    if (e.file_path !== n.file_path) {
        return false;
    }
    if (g7r(e, n)) {
        return true;
    }
    let r = "";
    if ((!Bn(e.file_path) || ll(e.file_path)) && !gy(e.file_path) && !Xy(e.file_path) && !Xy(resolve(e.file_path))) {
        try {
            r = m(e.file_path);
        } catch (error) {
            if (!U(error)) {
                throw error;
            }
        }
    }
    return j(e.edits, n.edits, r);
}
export { bnt, Snt, Dlr, Ets, kts, zDe, wnt, hYt, m7r, Tts, Ats, Llr, g7r, Cts };
