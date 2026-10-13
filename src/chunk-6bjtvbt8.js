import { je } from "/$bunfs/root/chunk-r3z1chqx.js";
const c = {
    Task: "Agent",
    KillShell: "TaskStop",
    KillBash: "TaskStop",
    ListPeers: "ListAgents",
    Brief: "SendUserMessage",
    ListMcpResources: "ListMcpResourcesTool",
    ReadMcpResource: "ReadMcpResourceTool",
    ReadMcpResourceDir: "ReadMcpResourceDirTool"
};
function Ul(e) {
    if (Object.hasOwn(c, e)) {
        return c[e];
    }
    return e;
}
function cpe(e) {
    let t = [];
    for (let [n, r] of Object.entries(c)){
        if (r === e) {
            t.push(n);
        }
    }
    return t;
}
const Izn = "workspace";
const TUe = `mcp__${Izn}__bash`;
const Ozn = `mcp__${Izn}__web_fetch`;
function uZ(e, t) {
    let n = t && Object.hasOwn(t, e) ? t[e] : undefined;
    if (n !== undefined && n !== e) {
        return [
            e,
            n
        ];
    }
    return [
        e
    ];
}
function Lz(e, t) {
    if (!t) {
        return [];
    }
    let n = [];
    for (let [r, o] of Object.entries(t)){
        if (o === e) {
            n.push(r);
        }
    }
    return n;
}
function VE(e) {
    return e.includes("*");
}
function Nz(e, t) {
    return p(e)(t);
}
function p(e) {
    let t = e.split("*");
    let n = t[0] ?? "";
    if (t.length === 1) {
        return (i)=>n === i;
    }
    let r = t.at(-1) ?? "";
    let o;
    let s = [];
    return (i)=>{
        let a = i.length - r.length;
        if (a < n.length || !i.startsWith(n) || !i.endsWith(r)) {
            return false;
        }
        o ??= t.slice(1, -1).filter((l)=>l !== "");
        let n_length = n.length;
        for (let [l, f] of o.entries()){
            let d = (s[l] ??= R(f))(i, n_length, a);
            if (d === -1) {
                return false;
            }
            n_length = d + f.length;
        }
        return true;
    };
}
function trn(e, t, n) {
    let r = 0;
    let o = 0;
    while(true){
        let s = g(e, n, r);
        let i = g(t, n, o);
        if (e.charAt(s) !== t.charAt(i) || !Nz(e.slice(r, s), t.slice(o, i))) {
            return false;
        }
        if (s === e.length) {
            return true;
        }
        r = s + 1;
        o = i + 1;
    }
}
function g(e, t, n) {
    let r = n;
    while(r < e.length && !t.includes(e.charAt(r))){
        r++;
    }
    return r;
}
function Tut(e, t) {
    return Nz(e, t);
}
function Mzn(e) {
    return p(e);
}
function h(ruleContent) {
    return ruleContent.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}
function yse(e, t) {
    let n = e.replaceAll("\\", "\\\\").replace(/[[\]()|+^$]/g, (r)=>`\\${r}`);
    if (t?.escapeGlobs) {
        n = n.replaceAll("*", "\\*");
    }
    if (n.startsWith("!") || n.startsWith("#")) {
        n = `\\${n}`;
    }
    n = n.replace(/\s+$/, (r)=>Array.from(r, (o)=>`\\${o}`).join(""));
    return n;
}
function nrn(e) {
    return e.replace(/\\([^])/g, (t, n)=>{
        if (rrn(n)) {
            return n;
        }
        return t;
    });
}
const m = /^[\\[\]!#()|+^$*?\s]$/;
function rrn(e) {
    return m.test(e);
}
const b = /^(?:[A-Za-z]:\\|~\\|\\(?![()!#]))/;
function Gko(e) {
    return b.test(e);
}
function Vko(e) {
    return qko(e).replaceAll("\\\\", "\\");
}
function qko(e) {
    return e.replaceAll("\\(", "(").replaceAll("\\)", ")");
}
function dpe(e) {
    if (typeof e === "string" && !e.includes("(") && !e.includes(")")) {
        return {
            kind: "bare"
        };
    }
    let t = C(e, "(");
    let n = x(e, ")");
    if (t === -1 && n === -1) {
        return {
            kind: "bare"
        };
    }
    let toolName = e.substring(0, t);
    if (t === -1 || n <= t || n !== e.length - 1 || /[()]/.test(toolName)) {
        return {
            kind: "malformed"
        };
    }
    return {
        kind: "call",
        toolName,
        rawContent: e.substring(t + 1, n)
    };
}
function Un(e) {
    let t = dpe(e);
    if (t.kind !== "call" || !t.toolName) {
        return {
            toolName: Ul(e)
        };
    }
    if (t.rawContent === "" || t.rawContent === "*") {
        return {
            toolName: Ul(t.toolName)
        };
    }
    let ruleContent = Vko(t.rawContent);
    return {
        toolName: Ul(t.toolName),
        ruleContent
    };
}
function _n(e) {
    if (!e.ruleContent) {
        return e.toolName;
    }
    let t = h(e.ruleContent);
    return `${e.toolName}(${t})`;
}
const pq = "!";
function sPs(e) {
    let t = [];
    for(let n = 0; n < e.length; n++){
        let r = e[n];
        if (r === undefined) {
            continue;
        }
        let o = e[n + 1];
        if (r === pq && o !== undefined && !o.startsWith(pq) && !o.startsWith("(")) {
            t.push(pq + o);
            n++;
            continue;
        }
        t.push(r);
    }
    return t;
}
function A(e) {
    return e.lastIndexOf("(") > e.lastIndexOf(")");
}
function iPs(e) {
    let rules = Lu([
        ...e
    ]);
    let rule = rules.find(A);
    if (rule === undefined) {
        return {
            kind: "rules",
            rules
        };
    }
    return {
        kind: "unclosed",
        rule
    };
}
function Aut(e) {
    return `Error: the --disallowed-tools rule "${je(e, 64)}" has an opening parenthesis that is never closed, so a cloud session would drop it. Close the parenthesis and run the command again.`;
}
function Lu(e) {
    if (e.length === 0) {
        return [];
    }
    let t = [];
    for (let n of e){
        if (!n) {
            continue;
        }
        let r = "";
        let o = false;
        for (let s of n){
            switch(s){
                case "(":
                    o = true;
                    r += s;
                    break;
                case ")":
                    o = false;
                    r += s;
                    break;
                case ",":
                    if (o) {
                        r += s;
                    } else {
                        if (r.trim()) {
                            t.push(r.trim());
                        }
                        r = "";
                    }
                    break;
                case " ":
                    if (o) {
                        r += s;
                    } else if (r.trim()) {
                        t.push(r.trim());
                        r = "";
                    }
                    break;
                default:
                    if (r || s.trim()) {
                        r += s;
                    }
            }
        }
        if (r.trim()) {
            t.push(r.trim());
        }
    }
    return t;
}
function C(e, t) {
    for(let n = 0; n < e.length; n++){
        if (e[n] === t) {
            let r = 0;
            let o = n - 1;
            while(o >= 0 && e[o] === "\\"){
                r++;
                o--;
            }
            if (r % 2 === 0) {
                return n;
            }
        }
    }
    return -1;
}
function x(e, t) {
    for(let n = e.length - 1; n >= 0; n--){
        if (e[n] === t) {
            let r = 0;
            let o = n - 1;
            while(o >= 0 && e[o] === "\\"){
                r++;
                o--;
            }
            if (r % 2 === 0) {
                return n;
            }
        }
    }
    return -1;
}
function R(e) {
    if (!e.includes(e.charAt(0), 1)) {
        return (n, r, o)=>{
            let s = n.indexOf(e, r);
            if (s + e.length > o) {
                return -1;
            }
            return s;
        };
    }
    let t = new Int32Array(e.length);
    for(let n = 1, r = 0; n < e.length; n++){
        while(r > 0 && e.charCodeAt(n) !== e.charCodeAt(r)){
            r = t[r - 1] ?? 0;
        }
        if (e.charCodeAt(n) === e.charCodeAt(r)) {
            r++;
        }
        t[n] = r;
    }
    return (n, r, o)=>{
        for(let s = r, i = 0; s < o; s++){
            while(i > 0 && n.charCodeAt(s) !== e.charCodeAt(i)){
                i = t[i - 1] ?? 0;
            }
            if (n.charCodeAt(s) === e.charCodeAt(i)) {
                i++;
            }
            if (i === e.length) {
                return s - e.length + 1;
            }
        }
        return -1;
    };
}
export { Ul, cpe, Izn, TUe, Ozn, uZ, Lz, VE, Nz, trn, Tut, Mzn, yse, nrn, rrn, Gko, Vko, qko, dpe, Un, _n, pq, sPs, iPs, Aut, Lu };
