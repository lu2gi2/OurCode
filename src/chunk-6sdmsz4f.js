import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { kb, $yr, Fyr } from "/$bunfs/root/chunk-b6xdb1m9.js";
import { Sd } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { _s, vjn, eCs } from "/$bunfs/root/chunk-231n9cft.js";
import { homedir } from "os";
const $e = 10000;
const ut = new Set([
    "export",
    "declare",
    "typeset",
    "readonly",
    "local",
    "unset",
    "unsetenv"
]);
const ft = new Set([
    "word",
    "string",
    "raw_string",
    "number"
]);
const ne = new Set([
    "command_substitution",
    "process_substitution"
]);
const re = new Set([
    "command",
    "declaration_command"
]);
async function xyr(originalCommand) {
    if (!originalCommand || originalCommand.length > $e) {
        return null;
    }
    try {
        let rootNode = kb().parse(originalCommand);
        if (!rootNode) {
            return null;
        }
        let commandNode = rde(rootNode, null);
        let envVars = dt(commandNode);
        return {
            rootNode,
            envVars,
            commandNode,
            originalCommand
        };
    } catch  {
        return null;
    }
}
const Kx = Symbol("parse-aborted");
async function gV(e) {
    if (!e) {
        return null;
    }
    if (e.length > $e) {
        i("tengu_tree_sitter_parse_abort", {
            cmdLength: e.length,
            panic: false
        });
        return Kx;
    }
    try {
        let t = kb().parse(e);
        if (t === null) {
            i("tengu_tree_sitter_parse_abort", {
                cmdLength: e.length,
                panic: false
            });
            return Kx;
        }
        return t;
    } catch  {
        i("tengu_tree_sitter_parse_abort", {
            cmdLength: e.length,
            panic: true
        });
        return Kx;
    }
}
function rde(e, t) {
    let { type, children } = e;
    if (re.has(type)) {
        return e;
    }
    if (type === "variable_assignment" && t) {
        return t.children.find((o)=>re.has(o.type) && o.startIndex > e.startIndex) ?? null;
    }
    if (type === "pipeline") {
        for (let o of children){
            let n = rde(o, e);
            if (n) {
                return n;
            }
        }
        return null;
    }
    if (type === "redirected_statement") {
        return children.find((o)=>re.has(o.type)) ?? null;
    }
    for (let o of children){
        let n = rde(o, e);
        if (n) {
            return n;
        }
    }
    return null;
}
function dt(commandNode) {
    if (!commandNode || commandNode.type !== "command") {
        return [];
    }
    let t = [];
    for (let r of commandNode.children){
        if (r.type === "variable_assignment") {
            t.push(r.text);
        } else if (r.type === "command_name" || r.type === "word") {
            break;
        }
    }
    return t;
}
function B4e(e) {
    if (e.type === "declaration_command") {
        let s = e.children[0];
        if (s && ut.has(s.text)) {
            return [
                s.text
            ];
        }
        return [];
    }
    let t = [];
    let r = false;
    for (let s of e.children){
        if (s.type === "variable_assignment") {
            continue;
        }
        if (s.type === "command_name" || !r && s.type === "word") {
            r = true;
            let o = s.children[0] ?? s;
            if (o.type === "concatenation") {
                t.push(o.children.some((n)=>ne.has(n.type)) ? o.text : o.children.map(G).join(""));
            } else {
                t.push(G(o));
            }
            continue;
        }
        if (ft.has(s.type)) {
            t.push(G(s));
        } else if (s.type === "concatenation") {
            if (s.children.some((o)=>ne.has(o.type))) {
                break;
            }
            t.push(s.children.map(G).join(""));
        } else if (ne.has(s.type)) {
            break;
        }
    }
    return t;
}
function G(e) {
    if (e.type === "word") {
        return e.text.replace(/\\(.)/g, "$1");
    }
    return pt(e.text);
}
function pt(text) {
    if (text.length >= 2 && (text[0] === '"' && text.at(-1) === '"' || text[0] === "'" && text.at(-1) === "'")) {
        return text.slice(1, -1);
    }
    return text;
}
function Cit(e) {
    return /^-[pvV]+$/.test(e) && /[vV]/.test(e);
}
function nde(e, t) {
    return /^-[a-zA-Z]+$/.test(e) && [
        ...t
    ].some((r)=>e.includes(r));
}
function Te(e) {
    return /^[+-][^iEF]*$/.test(e) && /[aA]/.test(e);
}
function Zgs(e, t) {
    return /^-[a-z]+$/.test(e) && [
        ...t
    ].some((r)=>e.includes(r));
}
const be = new Set([
    "program",
    "list",
    "pipeline",
    "redirected_statement"
]);
const Y = new Set([
    "&&",
    "||",
    "|",
    ";",
    "&",
    "|&",
    `
`
]);
const ze = new Set([
    "command",
    "pipeline",
    "list",
    "negated_command",
    "declaration_command",
    "unset_command"
]);
const mt = new Set([
    "test_command",
    "redirected_statement"
]);
const R = "__CMDSUB_OUTPUT__";
const _ = "__TRACKED_VAR__";
function Vs(e) {
    return e.includes(R) || e.includes(_);
}
function j4e(e) {
    return e.replaceAll(R, "$(…)").replaceAll(_, "${…}");
}
let A = 0;
let j = 0;
let P = 0;
const gt = /["`\\]/;
function xt(e, t) {
    return t > 0 && e[t - 1] === `
`;
}
function qdo(e) {
    if (e.includes(_)) {
        return true;
    }
    let t = e.indexOf(R);
    while(t !== -1){
        if (!xt(e, t)) {
            return true;
        }
        t = e.indexOf(R, t + R.length);
    }
    return false;
}
function Kdo(e) {
    return e.startsWith(R) || e.startsWith(_);
}
const ve = /[ \t\n*?[]/;
const yt = /^-[ioe]$/;
const _t = /^-[ioe]./;
const bt = /^--(input|output|error)=/;
const le = new Set([
    "HOME",
    "PWD",
    "OLDPWD",
    "USER",
    "LOGNAME",
    "SHELL",
    "PATH",
    "HOSTNAME",
    "UID",
    "EUID",
    "PPID",
    "RANDOM",
    "SECONDS",
    "LINENO",
    "TMPDIR",
    "BASH_VERSION",
    "BASHPID",
    "SHLVL",
    "HISTFILE",
    "IFS"
]);
const kt = new Set([
    "?",
    "$",
    "!",
    "#",
    "0",
    "-"
]);
const wt = new Set([
    "command_substitution",
    "process_substitution",
    "expansion",
    "simple_expansion",
    "brace_expression",
    "subshell",
    "compound_statement",
    "for_statement",
    "while_statement",
    "until_statement",
    "if_statement",
    "case_statement",
    "function_definition",
    "test_command",
    "ansi_c_string",
    "translated_string",
    "herestring_redirect",
    "heredoc_redirect"
]);
const Et = [
    ...wt
];
function Ydo(e) {
    if (!e) {
        return -2;
    }
    if (e === "ERROR") {
        return -1;
    }
    let t = Et.indexOf(e);
    if (t >= 0) {
        return t + 1;
    }
    return 0;
}
const ce = {
    ">": ">",
    ">>": ">>",
    "<": "<",
    ">&": ">&",
    "<&": "<&",
    ">|": ">|",
    "&>": "&>",
    "&>>": "&>>",
    "<<<": "<<<"
};
const K = /\{[^\s]*(,|\.\.)[^\s]*\}/;
const ue = /\{[^{]*\\}/;
const fe = /\{[^}]*\\\{/;
const Rit = /[\x00-\x08\x0B-\x1F\x7F]/;
const Pyr = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/;
const jLn = /[\u00A0\u1680\u2000-\u200B\u2028\u2029\u202F\u205F\u3000\uFEFF]/;
const Iyr = /\\[ \t]/;
const Oyr = /(?:^|[^ \t\\])(?:\\\\)*\\\n|[ \t](?:\\\\)+\\\n/;
const Rt = new RegExp(`${Iyr.source}|${Oyr.source}`);
const ext = /(?:^|[^\\])(?:\\\\)*[`$]/;
const txt = /(?:^|[^\\])(?:\\\\)*['"]/;
const WLn = /~\[/;
const zLn = /(?:^|[\s;&|])=[a-zA-Z_]/;
const Myr = /<\d*-\d*>/;
const At = /\{[^}]*['"]/;
function T(text) {
    let t = false;
    let r = false;
    let s = false;
    let o = true;
    let n = 0;
    while(n < text.length){
        let l = text[n];
        if (s) {
            if (l === "\\" && (text[n + 1] === "`" || text[n + 1] === "\\" || text[n + 1] === "$")) {
                n += 2;
            } else {
                if (l === "`") {
                    s = false;
                }
                n++;
            }
        } else if (t) {
            if (l === "'") {
                t = false;
            }
            n++;
        } else if (r) {
            if (l === "\\" && (text[n + 1] === '"' || text[n + 1] === "\\" || text[n + 1] === "`")) {
                n += 2;
            } else if (l === "`") {
                s = true;
                n++;
            } else {
                if (l === '"') {
                    r = false;
                }
                n++;
            }
        } else if (l === "\\" && n + 1 < text.length) {
            if (text[n + 1] !== `
`) {
                o = false;
            }
            n += 2;
        } else if (l === "#" && o) {
            while(n < text.length && text[n] !== `
`){
                n++;
            }
            o = true;
        } else if (l === "`") {
            s = true;
            o = false;
            n++;
        } else {
            if (l === "*" || l === "?" || l === "[") {
                return true;
            }
            if (l === "'") {
                t = true;
            } else if (l === '"') {
                r = true;
            }
            o = l === " " || l === "\t" || l === `
` || l === ";" || l === "|" || l === "&" || l === "(" || l === ")" || l === "<" || l === ">";
            n++;
        }
    }
    return false;
}
const St = /[*?]|\[[^\]]*\]/;
function V(e) {
    return St.test(e);
}
function GLn(e) {
    let e_argvUnquotedGlob = e.argvUnquotedGlob;
    if (e.carveOutMayDesyncQuoteScan === true || e_argvUnquotedGlob === undefined && e.argv.some(Vs)) {
        return e.argv.some(V) || e.redirects.some((s)=>s.op !== "<<" && s.op !== "<<<" && V(s.target));
    }
    if (e_argvUnquotedGlob === undefined) {
        return false;
    }
    if (e_argvUnquotedGlob.length !== e.argv.length) {
        return e.argv.some(V);
    }
    return e.argv.some((s, o)=>V(s) && (e_argvUnquotedGlob[o] === true || Vs(s)));
}
function Fe(e) {
    if (!e.includes("{")) {
        return e;
    }
    let t = [];
    let r = false;
    let s = false;
    let o = false;
    let n = true;
    let l = 0;
    while(l < e.length){
        let a = e[l];
        if (o) {
            if (a === "\\" && (e[l + 1] === "`" || e[l + 1] === "\\" || e[l + 1] === "$")) {
                t.push(a, e[l + 1]);
                l += 2;
            } else {
                if (a === "`") {
                    o = false;
                }
                t.push(a === "{" ? " " : a);
                l++;
            }
        } else if (r) {
            if (a === "'") {
                r = false;
            }
            t.push(a === "{" ? " " : a);
            l++;
        } else if (s) {
            if (a === "\\" && (e[l + 1] === '"' || e[l + 1] === "\\" || e[l + 1] === "`")) {
                t.push(a, e[l + 1]);
                l += 2;
            } else if (a === "`") {
                o = true;
                t.push(a);
                l++;
            } else {
                if (a === '"') {
                    s = false;
                }
                t.push(a === "{" ? " " : a);
                l++;
            }
        } else if (a === "\\" && l + 1 < e.length) {
            t.push(a, e[l + 1]);
            if (e[l + 1] !== `
`) {
                n = false;
            }
            l += 2;
        } else if (a === "#" && n) {
            while(l < e.length && e[l] !== `
`){
                t.push(e[l]);
                l++;
            }
            n = true;
        } else if (a === "`") {
            o = true;
            n = false;
            t.push(a);
            l++;
        } else {
            if (a === "'") {
                r = true;
            } else if (a === '"') {
                s = true;
            }
            n = a === " " || a === "\t" || a === `
` || a === ";" || a === "|" || a === "&" || a === "(" || a === ")" || a === "<" || a === ">";
            t.push(a);
            l++;
        }
    }
    return t.join("");
}
const Ne = String.fromCharCode(36);
function te(e, t) {
    if (e.type === t) {
        return true;
    }
    for (let r of e.children){
        if (r && te(r, t)) {
            return true;
        }
    }
    return false;
}
async function X$(e) {
    if (e === "") {
        return {
            kind: "simple",
            commands: [],
            bareAssignmentNames: []
        };
    }
    let tree = await gV(e);
    if (tree === null) {
        return {
            kind: "simple",
            commands: [],
            bareAssignmentNames: []
        };
    }
    let r = hV(e, tree);
    if (tree !== Kx && (r.kind === "simple" || r.nodeType !== undefined)) {
        return {
            ...r,
            tree
        };
    }
    return r;
}
function Hyr(length, t) {
    let r = (o)=>Array.from({
            length
        }, (n, l)=>o(l));
    if (length <= 3) {
        return {
            readings: Array.from({
                length: 2 ** length
            }, (o, n)=>r((l)=>Math.floor(n / 2 ** l) % 2 === 1)),
            exhaustive: true
        };
    }
    let readings = [
        r(()=>false),
        r(()=>true)
    ];
    for(let o = 0; length <= 8 && o < length; o++){
        readings.push(r((n)=>n === o));
    }
    if (t?.length === length && !readings.some((o)=>o.every((n, l)=>n === t[l]))) {
        readings.push([
            ...t
        ]);
    }
    return {
        readings,
        exhaustive: false
    };
}
function hV(e, t, { plainUnquotedHeredocs = false, declarationPrefix } = {}) {
    if (Pyr.test(e)) {
        return {
            kind: "too-complex",
            reason: "Contains lone surrogate",
            differential: true
        };
    }
    if (Rit.test(e)) {
        return {
            kind: "too-complex",
            reason: "Contains control characters",
            differential: true
        };
    }
    if (jLn.test(e)) {
        return {
            kind: "too-complex",
            reason: "Contains Unicode whitespace",
            differential: true
        };
    }
    if (Rt.test(e)) {
        return {
            kind: "too-complex",
            reason: "Contains backslash-escaped whitespace",
            differential: true
        };
    }
    if (WLn.test(e)) {
        return {
            kind: "too-complex",
            reason: "Contains zsh ~[ dynamic directory syntax",
            differential: true
        };
    }
    if (zLn.test(e)) {
        return {
            kind: "too-complex",
            reason: "Contains zsh =cmd equals expansion",
            differential: true
        };
    }
    if (Myr.test(e)) {
        return {
            kind: "too-complex",
            reason: "Contains zsh <N-M> numeric-range glob",
            differential: true
        };
    }
    if (At.test(Fe(e))) {
        return {
            kind: "too-complex",
            reason: "Contains brace with quote character (expansion obfuscation)",
            differential: true
        };
    }
    if (e.trim() === "") {
        return {
            kind: "simple",
            commands: [],
            bareAssignmentNames: []
        };
    }
    if (t === Kx) {
        return {
            kind: "too-complex",
            reason: "Parser aborted (timeout, resource limit, or over-length)",
            nodeType: "PARSE_ABORT"
        };
    }
    for (let y of [
        "backtick_body_empty",
        "backtick_body_overrun",
        "backtick_escape_unsupported"
    ]){
        if (te(t, y)) {
            return {
                kind: "too-complex",
                reason: y === "backtick_body_empty" ? "empty backtick substitution — bash joins the surrounding words, so the parsed command boundaries cannot be trusted" : `backtick substitution scan could not be trusted (${y}) — the parsed bytes may differ from what bash executes`,
                differential: true
            };
        }
    }
    let n = Buffer.from(e, "utf8");
    {
        let y = He(t, n, 0);
        if (y) {
            return y;
        }
    }
    {
        let y = Ze(t);
        if (y) {
            return y;
        }
    }
    let l = (y)=>y === 32 || y === 9 || y === 10 || y === 13 || y === 59 || y === 38;
    let a = (y, k)=>{
        let w = y;
        while(w < k){
            let N = n[w];
            if (l(N)) {
                w++;
            } else if (N === 92 && (n[w + 1] === 10 || n[w + 1] === 13 && n[w + 2] === 10)) {
                w += n[w + 1] === 13 ? 3 : 2;
            } else {
                break;
            }
        }
        return w;
    };
    let h = t.children.filter((y)=>y !== null).map((y)=>[
            y.startIndex,
            y.endIndex
        ]).sort((y, k)=>y[0] - k[0]);
    let p = 0;
    for (let [y, k] of h){
        if (a(p, y) < y) {
            return {
                kind: "too-complex",
                reason: "Parser skipped input between top-level statements"
            };
        }
        if (k > p) {
            p = k;
        }
    }
    if (a(p, n.length) < n.length) {
        return {
            kind: "too-complex",
            reason: "Parser did not consume trailing input"
        };
    }
    {
        let y = tt(t, n);
        if (y !== null) {
            return {
                kind: "too-complex",
                reason: `Redirect uses ${we(y)} fd-variable assignment \u2014 modifies shell variable as side effect`
            };
        }
    }
    {
        let y = nt(t);
        if (y) {
            return y;
        }
    }
    let c = D;
    let d = I;
    let f = L;
    let g = H;
    let u = B;
    let m = M;
    D = plainUnquotedHeredocs;
    I = declarationPrefix;
    L = 0;
    H = new Map;
    B = false;
    M = undefined;
    let x;
    try {
        x = Dt(t);
        if (B && x.kind === "simple") {
            x = {
                kind: "too-complex",
                reason: "A variable set in front of a declaration inside a branch or loop can't be checked before it runs"
            };
        }
        let declarationPrefixBashKeeps = Zt();
        if (declarationPrefix === undefined && declarationPrefixBashKeeps !== undefined) {
            x = {
                ...x,
                declarationPrefixes: declarationPrefixBashKeeps.length,
                declarationPrefixBashKeeps
            };
        }
        if (declarationPrefix !== undefined && x.kind === "simple" && Gt() !== declarationPrefix.length) {
            x = {
                kind: "too-complex",
                reason: "The variables set in front of declarations in this command can't be checked before it runs"
            };
        }
    } finally{
        D = c;
        I = d;
        L = f;
        H = g;
        B = u;
        M = m;
    }
    if (x.kind === "too-complex" && x.nodeType !== "ERROR" && (Be(t) || Ue(t))) {
        return {
            ...x,
            nodeType: "ERROR"
        };
    }
    return x;
}
function Be(e) {
    if (e.type === "ERROR" && (e.text.startsWith("${") || We(e.text))) {
        return true;
    }
    for (let t of e.children){
        if (t && Be(t)) {
            return true;
        }
    }
    return false;
}
function Ue({ children }) {
    for(let r = 0; r < children.length; r++){
        let child = children[r];
        if (!child) {
            continue;
        }
        if (child.type === "simple_expansion" && child.children.some((o)=>o?.type === "special_variable_name" && o.text === "#")) {
            let o = "";
            for(let l = r + 1; l < children.length; l++){
                let a = children[l]?.text ?? "";
                o += a;
                if (!/^[\w\u0080-\uffff]*$/.test(a)) {
                    break;
                }
            }
            let n = /^[\w\u0080-\uffff]*(?=\[|:[a-zA-Z&])/.exec(o);
            if (n && /[\u0080-\uffff]/.test(n[0])) {
                return true;
            }
        }
        if (Ue(child)) {
            return true;
        }
    }
    return false;
}
function We(text) {
    return /^\$[#^=~+]*[\w\u0080-\uffff]+$/.test(text) && /[\u0080-\uffff]/.test(text);
}
function He(e, t, r) {
    for (let s of e.children){
        if (!s) {
            continue;
        }
        let o = s.startIndex - 1 - r;
        if (s.type === "comment" && o >= 0 && (t[o] === 41 || t[o] === 40)) {
            return {
                kind: "too-complex",
                reason: "comment glued to a paren — bash reads `)#…` and `(#…` as a comment, but zsh reads a keyword- or word-glued `(…)` as a glob group whose `#…` text is word content that executes",
                differential: true
            };
        }
        let n = He(s, t, r);
        if (n) {
            return n;
        }
    }
    for (let s of e.children){
        if (!s) {
            continue;
        }
        if (s.type === "case_item" && !s.children.some((o)=>o !== undefined && o.type === ")") && Ve(s)) {
            return {
                kind: "too-complex",
                reason: "`case` pattern group holds a comment — bash reads no comment inside a pattern list, but zsh reads the group as one glob word and expands its contents",
                differential: true
            };
        }
        if (s.type === "function" && !e.children.some((o)=>o !== undefined && o.type === "(")) {
            let o = e.children[1];
            let n = e.children.find((a)=>a !== undefined && a.type === "redirected_statement")?.children[0];
            let l = e.children.find((a)=>a !== undefined && a.type === "subshell") ?? (n?.type === "subshell" ? n : undefined);
            if (o !== undefined && l !== undefined && Ct(t, o.endIndex - r, l.startIndex - r)) {
                return {
                    kind: "too-complex",
                    reason: "`function` with a parenthesised body and no `()` — bash reads a subshell body, but zsh reads one glob-group word and expands its contents",
                    differential: true
                };
            }
        }
        if ($t.has(s.type) && t[s.endIndex - r] === 40) {
            return {
                kind: "too-complex",
                reason: `\`${s.type}\` glued to a paren \u2014 bash reads a keyword and a subshell, but zsh reads one glob-group word and expands its contents`,
                differential: true
            };
        }
    }
    return null;
}
var $t = new Set([
    "if",
    "elif",
    "else",
    "while",
    "until",
    "case"
]);
function Ze(e) {
    if (e.type === "declaration_command" || e.type === "unset_command") {
        if (e.type === "declaration_command" && e.children.some((n)=>n !== undefined && (/^(?:export|readonly)$/.test(e.children[0]?.text ?? "") ? Nt : ke).test(S(n.text))) && !W(e)) {
            return {
                kind: "too-complex",
                reason: `${e.children[0]?.text ?? "declare"} with a flag that changes assignment semantics and an operand it would evaluate`,
                differential: true
            };
        }
        let t = e.type === "unset_command" || /^(?:declare|typeset|local|export)$/.test(e.children[0]?.text ?? "");
        let r = /^(?:declare|typeset|local)$/.test(e.children[0]?.text ?? "");
        let s = e.children.some((n)=>n !== undefined && /^[-+][A-Za-z]*[fF]/.test(S(n.text)));
        let o;
        for (let [n, l] of e.children.entries()){
            if (!l) {
                continue;
            }
            if (n > 1 && o !== undefined && l.type !== "variable_assignment" && l.startIndex === o.endIndex) {
                return {
                    kind: "too-complex",
                    reason: `${e.children[0]?.text ?? e.type} operand '${o.text}${l.text}' is split across adjacent quoted segments \u2014 the shell joins them into one word the analyzer cannot verify`,
                    differential: true
                };
            }
            if (n > 0 && l.type === "ansi_c_string" && /^\$'[-+]/.test(l.text)) {
                return {
                    kind: "too-complex",
                    reason: `${e.children[0]?.text ?? e.type} flag ${l.text} \u2014 a $'\u2026' flag word the shell decodes`,
                    differential: true
                };
            }
            if (n > 0 && !/^[-+]/.test(S(l.text))) {
                let a = l.type === "word" || l.type === "raw_string" || l.type === "concatenation" || l.type === "variable_name" || l.type === "number";
                if (l.type === "ansi_c_string" && (t || e.children[0]?.text === "readonly")) {
                    return {
                        kind: "too-complex",
                        reason: `${e.children[0]?.text ?? e.type} operand ${l.text} \u2014 a $'\u2026' word the shell decodes, which may carry a subscript the parser cannot read`,
                        differential: true
                    };
                }
                if (r) {
                    if (!J(l, s)) {
                        return {
                            kind: "too-complex",
                            reason: `${e.children[0]?.text ?? "declare"} operand '${l.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`,
                            differential: true
                        };
                    }
                    o = l;
                    continue;
                }
                let h = O(l.text);
                let p = /^['"]?[A-Za-z_]\w*=/.test(l.text);
                let c = a ? t && h.includes("[") || (p ? h.slice(1).includes("\\") : l.text.slice(1).includes("\\")) : l.type === "string" && (p ? h.includes("\\") : l.text.includes("\\"));
                let d = l.type === "variable_assignment" && /['\\]/.test(O(l.text));
                let f = a && t && /^['"]?\$/.test(h) && /[[`'"]/.test(l.text);
                if (c || d || f) {
                    return {
                        kind: "too-complex",
                        reason: `${e.children[0]?.text ?? e.type} operand '${l.text}' carries a subscript or escape the shell evaluates \u2014 the parser read it as literal text`,
                        differential: true
                    };
                }
                if (l.type === "variable_name" ? !(z.test(l.text) || s && X.test(l.text)) : (l.type === "word" || l.type === "concatenation" || l.type === "raw_string" || l.type === "string" && O(l.text) !== l.text) && !Ie(l.text, s, e.children[0]?.text === "readonly")) {
                    return {
                        kind: "too-complex",
                        reason: `${e.children[0]?.text ?? e.type} operand '${l.text}' is not a plain variable name \u2014 the shell expands or matches it before assigning`,
                        differential: true
                    };
                }
            }
            o = l;
        }
    }
    if (e.type === "command") {
        let t = e.children.find((o)=>o !== undefined && o.type === "command_name");
        let r = t === undefined ? -1 : e.children.indexOf(t);
        let s = e.children.filter((o, n)=>o !== undefined && n > r && o.type !== "command_name");
        if (t !== undefined) {
            if (Q(t) && s.some((p)=>!/^[-+]/.test(S(p.text)))) {
                return {
                    kind: "too-complex",
                    reason: `command head ${t.text} \u2014 a $'\u2026' word the shell decodes before looking the command up`,
                    differential: true
                };
            }
            let o = ie(t.text);
            let n = s;
            let l = false;
            let a = false;
            while(Tt.test(o) && n.length > 0){
                l = true;
                while(n.length > 0 && /^-/.test(S(n[0].text))){
                    let p = S(n[0].text);
                    if (o === "command" && /^-[pP]*[vV]/.test(p)) {
                        a = true;
                    }
                    n = n.slice(o === "exec" && /^-[cl]*a$/.test(p) ? 2 : 1);
                }
                if (!a && n.length > 0 && Q(n[0]) && n.slice(1).some((p)=>!/^[-+]/.test(S(p.text)))) {
                    return {
                        kind: "too-complex",
                        reason: `command head ${n[0].text} after ${o} \u2014 a $'\u2026' word the shell decodes before looking the command up`,
                        differential: true
                    };
                }
                o = n.length > 0 ? ie(n[0].text) : "";
                n = n.slice(1);
            }
            let h = l || ie(t.text) !== t.text || Pe.test(t.text);
            if (!a && h && Pe.test(o)) {
                let p = o === "integer" || o === "float";
                let c = {
                    ...e,
                    children: [
                        t,
                        ...p ? [
                            {
                                ...t,
                                text: "-i"
                            }
                        ] : [],
                        ...n
                    ]
                };
                let d = n.map((x)=>S(x.text)).filter((x)=>/^[-+]/.test(x)).join("");
                let f = p || /^(?:declare|typeset|local|private)$/.test(o) && vt.test(d) || /^(?:export|readonly)$/.test(o) && Pt.test(d);
                let g = n.filter((x)=>!/^[-+]/.test(S(x.text)));
                let u = /[fF]/.test(d);
                let m = f && !W(c) || n.some((x)=>x.type === "ansi_c_string" && /^\$'[-+]/.test(x.text));
                if (/^(?:declare|typeset|local|integer|float|private)$/.test(o)) {
                    m ||= g.some((x)=>!J(x, u));
                } else {
                    m ||= g.some((x)=>{
                        if (x.type === "ansi_c_string") {
                            return true;
                        }
                        let y = O(x.text);
                        return /[\\'"]/.test(y.replace(/^['"]/, "").replace(/['"]$/, "")) || o !== "readonly" && y.includes("[") || /^['"]?\$/.test(y) || (x.type === "word" || x.type === "concatenation" || x.type === "raw_string" || x.type === "string" && O(x.text) !== x.text) && !Ie(x.text, u, o === "readonly");
                    });
                }
                if (m) {
                    return {
                        kind: "too-complex",
                        reason: `${o} spelled '${l ? `${t.text} \u2026` : t.text}' with an operand the shell would evaluate \u2014 the parser did not read this as a declaration`,
                        differential: true
                    };
                }
            }
        }
    }
    for (let t of e.children){
        if (!t) {
            continue;
        }
        let r = Ze(t);
        if (r) {
            return r;
        }
    }
    return null;
}
var Tt = /^(?:builtin|command|exec|time|coproc|noglob|nocorrect|-)$/;
var Pe = /^(?:declare|typeset|local|export|readonly|unset|integer|float|private)$/;
var ke = /^[-+].*[nialuAEFLRZ]/;
var vt = /[nialuAEFLRZ]/;
var Nt = /^[-+].*[aAiluEFLRZ]/;
var Pt = /[aAiluEFLRZ]/;
var z = /^[A-Za-z_][A-Za-z0-9_]*$/;
var X = /^[A-Za-z_][\w.:-]*$/;
function Ie(text, t, r = false) {
    let s = O(text);
    let o = text[0];
    if (o === "'" || o === '"') {
        s = s.slice(1);
        if (s.endsWith(o)) {
            s = s.slice(0, -1);
        }
    } else if (/^\\[A-Za-z_]/.test(s)) {
        s = s.slice(1);
    }
    if (r && (o === "'" || o === '"')) {
        let n = text.indexOf("[");
        let l = text.indexOf(o, 1);
        if (n > 0 && l > n) {
            s = s.replace(/\[[\s\S]*$/, "");
        }
    }
    s = s.replace(/\+$/, "");
    return z.test(s) || t && X.test(s);
}
function Q(e) {
    return e.type === "ansi_c_string" || e.children.some((t)=>t !== undefined && Q(t));
}
function ie(text) {
    return text.replace(/\$(['"])/g, "$1").replace(/["'\\]/g, "");
}
const It = new Set([
    "command_substitution",
    "process_substitution",
    "arithmetic_expansion",
    "expansion",
    "simple_expansion"
]);
const de = "$_";
function Ot(e) {
    let t = [];
    let r = (l)=>{
        for (let a of l.children){
            if (!a) {
                continue;
            }
            if (It.has(a.type)) {
                t.push([
                    a.startIndex - e.startIndex,
                    a.endIndex - e.startIndex
                ]);
            } else {
                r(a);
            }
        }
    };
    r(e);
    if (t.length === 0) {
        return e.text;
    }
    t.sort((l, a)=>l[0] - a[0]);
    let s = Buffer.from(e.text, "utf8");
    let o = "";
    let n = 0;
    for (let [l, a] of t){
        if (l < n || a > s.length) {
            return e.text;
        }
        o += s.subarray(n, l).toString("utf8") + de;
        n = a;
    }
    return o + s.subarray(n).toString("utf8");
}
function Ge(e) {
    if (e.type === "expansion" && e.text.replace(/\$\(\(?|[<>]\(/g, "").includes("(")) {
        return true;
    }
    return e.children.some((t)=>t !== undefined && Ge(t));
}
function J(e, t) {
    if (e.type === "number" || /^\d+$/.test(e.text)) {
        return true;
    }
    let r = Ot(e);
    if (e.type !== "raw_string" && e.type !== "string" && K.test(Fe(r))) {
        return false;
    }
    let s = /^['"]/.test(r) ? r.slice(1) : r;
    let o = s.indexOf("=");
    let n = (o < 0 ? s : s.slice(0, o)).replace(/\+$/, "");
    if (!(t ? /^[A-Za-z_][\w.:-]*['"]?$/ : /^[A-Za-z_]\w*['"]?$/).test(n)) {
        return false;
    }
    if (o < 0) {
        return true;
    }
    if (e.children.find((p, c)=>p !== undefined && c >= 2 && p.type !== "=" && p.type !== "+=")?.type === "array") {
        return true;
    }
    if (Q(e) || /\$'./.test(r)) {
        return false;
    }
    if (Ge(e)) {
        return false;
    }
    let h = s.slice(o + 1);
    while(true){
        if (/^[\\'"]/.test(h)) {
            h = h.slice(1);
        } else if (/^\$['"]/.test(h)) {
            h = h.slice(2);
        } else if (h.startsWith(de)) {
            h = h.slice(de.length);
        } else {
            break;
        }
    }
    return !h.startsWith("(");
}
function O(text) {
    let t = 0;
    let r = null;
    let s = text[0] === "'" || text[0] === '"' ? text[0] : null;
    for(let o = s === null ? 0 : 1; o < text.length; o += 1){
        let n = text[o];
        if (r !== null) {
            if (n === r) {
                r = null;
            }
        } else if ((n === "'" || n === '"') && n !== s) {
            r = n;
        } else if (n === "[") {
            t += 1;
        } else if (n === "]" && t > 0) {
            t -= 1;
        } else if (n === "=" && t === 0) {
            return text.slice(0, o);
        }
    }
    return text;
}
function Ve(e) {
    return e.children.some((t)=>t !== undefined && (t.type === "comment" || Ve(t)));
}
function Ct(e, t, r) {
    let s = t;
    while(s < r){
        let o = e[s];
        if (o === 32 || o === 9) {
            s += 1;
        } else if (o === 92 && e[s + 1] === 10) {
            s += 2;
        } else {
            return false;
        }
    }
    return true;
}
function W(e) {
    let t = e.children.map((o)=>{
        if (o === undefined) {
            return "";
        }
        return S(o.text);
    }).filter((o)=>/^[-+]/.test(o)).join("");
    let s = /[iEF]/.test(t) ? /^[A-Za-z_][\w.-]*=(?:(['"]?)[0-9+\-*\/% ().]*\1|\([0-9+\-*\/% ().\s]*\))$/ : /^[A-Za-z_][\w.-]*(?:\+?=(?:(['"]?)[\w.\/ -]*\1|\([\w\s.\/-]*\)))?$/;
    return e.children.every((o, n)=>{
        if (!o || n === 0 || /^[-+]/.test(S(o.text))) {
            return true;
        }
        return s.test(o.text);
    });
}
function S(text) {
    let t = /^\$?(['"])([-+][^'"]*)\1$/.exec(text);
    if (t) {
        return t[2];
    }
    if (/^\\[-+]/.test(text)) {
        return text.slice(1);
    }
    return text;
}
const qe = new Set([
    "for_statement",
    "while_statement"
]);
function Oe(e) {
    return qe.has(e.type) && Sd();
}
function Dt(e) {
    let t = VLn(e);
    if (t) {
        return t;
    }
    let commands = [];
    let s = new Map;
    let bareAssignmentNames = [];
    let n = E(e, commands, s, bareAssignmentNames);
    if (n) {
        return n;
    }
    let hasLoop = [
        ...qe
    ].some((a)=>te(e, a));
    return {
        kind: "simple",
        commands,
        bareAssignmentNames,
        hasLoop
    };
}
function Lt(e, t, r) {
    return !Buffer.from(e.text, "utf8").subarray(t.endIndex - e.startIndex, r.startIndex - e.startIndex).toString("utf8").replace(/\\\r?\n/g, "").includes(`
`);
}
const Mt = new Set([
    "command",
    "variable_assignment",
    "variable_assignments",
    "list",
    "pipeline",
    "redirected_statement",
    "negated_command",
    "declaration_command",
    "unset_command",
    "test_command",
    "subshell",
    "compound_statement",
    "if_statement",
    "while_statement",
    "for_statement",
    "case_statement",
    "function_definition",
    "ERROR"
]);
const zt = new Set([
    "negated_command",
    "if_statement",
    "while_statement",
    "for_statement",
    "subshell"
]);
function VLn(e) {
    let t = null;
    for (let r of e.children){
        if (!r) {
            continue;
        }
        if (Mt.has(r.type)) {
            if (t !== null) {
                let o = r;
                while(be.has(o.type)){
                    let n = o.children.find((l)=>l != null);
                    if (!n) {
                        break;
                    }
                    o = n;
                }
                if (zt.has(o.type) && Lt(e, t, o)) {
                    return {
                        kind: "too-complex",
                        reason: o.type === "subshell" ? "`(…)` group directly follows a statement or word on the same line — bash rejects the line, but zsh reads the glued `(…)` as a glob-group word and expands what follows it" : "statement directly follows another statement on the same line — bash reads the text as one command (`!` and shell keywords are plain words after an assignment), not two statements",
                        differential: true
                    };
                }
            }
            t = r;
        } else {
            t = null;
        }
        let s = VLn(r);
        if (s) {
            return s;
        }
    }
    return null;
}
function E(e, t, r, s, o = false) {
    if (e.type === "command") {
        let n = Kt(e, [], t, r, s);
        if (n.kind !== "simple") {
            return n;
        }
        t.push(...n.commands);
        return null;
    }
    if (e.type === "redirected_statement") {
        return Wt(e, t, r, s, o);
    }
    if (e.type === "comment") {
        return null;
    }
    if (be.has(e.type)) {
        let n = e.type === "pipeline";
        let l = t.length;
        let a = false;
        if (!n) {
            for (let d of e.children){
                if (d && (d.type === "||" || d.type === "&")) {
                    a = true;
                    break;
                }
            }
        }
        let h = a ? new Map(r) : null;
        let p = n ? new Map(r) : r;
        let c = null;
        for (let d of e.children){
            if (!d) {
                continue;
            }
            if (Y.has(d.type)) {
                if (d.type === "||" || d.type === "|" || d.type === "|&" || d.type === "&") {
                    if (d.type === "||") {
                        c ??= new Set;
                        for (let u of r.keys()){
                            c.add(u);
                        }
                        let g = h ?? r;
                        p = new Map(g);
                        for (let [u, m] of r){
                            if (g.get(u) !== m) {
                                p.set(u, _);
                            }
                        }
                        for (let u of g.keys()){
                            if (!r.has(u)) {
                                p.set(u, _);
                            }
                        }
                    } else {
                        p = new Map(h ?? r);
                    }
                } else if (c !== null) {
                    for (let g of c){
                        r.set(g, _);
                    }
                    c = null;
                    p = r;
                }
                continue;
            }
            let f = E(d, t, p, s, e.type === "program");
            if (f) {
                return f;
            }
        }
        if (c !== null) {
            for (let d of c){
                r.set(d, _);
            }
        }
        if (n) {
            F(r, p);
            if (t.length === l) {
                C(t, e);
            }
        }
        return null;
    }
    if (e.type === "negated_command") {
        let n = t.length;
        for (let l of e.children){
            if (!l) {
                continue;
            }
            if (l.type === "!") {
                continue;
            }
            let a = E(l, t, r, s);
            if (a) {
                return a;
            }
        }
        if (t.length === n) {
            C(t, e);
        }
        return null;
    }
    if (e.type === "declaration_command") {
        let n = t.length;
        let l = P;
        let a = new Map(r);
        let h = false;
        let p = false;
        let c = [];
        let d = -1;
        for (let f of e.children){
            if (!f) {
                continue;
            }
            let g = f.startIndex === d;
            d = f.endIndex;
            switch(f.type){
                case "export":
                case "local":
                case "readonly":
                case "declare":
                case "typeset":
                    c.push(f.text);
                    break;
                case "word":
                case "number":
                case "raw_string":
                case "string":
                case "concatenation":
                    {
                        if (g) {
                            return {
                                kind: "too-complex",
                                reason: `${c[0] ?? "declaration"} operand is split across adjacent quoted segments \u2014 the shell joins them into one word the analyzer cannot verify`,
                                differential: true
                            };
                        }
                        let u = v(f, t, a, s);
                        if (typeof u !== "string") {
                            return u;
                        }
                        if (/^[+-].*m/.test(u)) {
                            return {
                                kind: "too-complex",
                                reason: `${c[0]} flag ${u} \u2014 zsh -m/+m pattern-assigns every matching variable; cannot statically model target set`,
                                nodeType: "declaration_command"
                            };
                        }
                        if (c[0] === "declare" || c[0] === "typeset" || c[0] === "local" || c[0] === "readonly") {
                            if (/^[+-].*f/.test(u)) {
                                h = true;
                            }
                            if (/^[+-].*[uU]/.test(u)) {
                                p = true;
                            }
                            if (h && p) {
                                return {
                                    kind: "too-complex",
                                    reason: `${c[0]} with both -f and -u/-U flags \u2014 zsh marks a function for autoload (synonym of 'autoload'), creating a function from file contents at call time`,
                                    nodeType: "declaration_command"
                                };
                            }
                        }
                        if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local") && ke.test(u)) {
                            return {
                                kind: "too-complex",
                                reason: `declare flag ${u} changes assignment semantics (nameref/integer/float/array/width-truncation/case-conversion)`,
                                ...W(e) ? {
                                    nodeType: "declaration_command"
                                } : {
                                    differential: true
                                }
                            };
                        }
                        if ((c[0] === "export" || c[0] === "readonly") && Te(u) && !W(e)) {
                            return {
                                kind: "too-complex",
                                reason: `${c[0]} flag ${u} with an operand bash would evaluate as a compound array assignment`,
                                differential: true
                            };
                        }
                        if ((c[0] === "export" || c[0] === "readonly") && /^[+-].*[iluEFLRZ]/.test(u)) {
                            return {
                                kind: "too-complex",
                                reason: `${c[0]} flag ${u} \u2014 zsh bin_typeset mathevals (-i/-E/-F), width-truncates (-L/-R/-Z), or case-converts (-l/-u) the assigned value`,
                                ...W(e) ? {
                                    nodeType: "declaration_command"
                                } : {
                                    differential: true
                                }
                            };
                        }
                        if (/^[+-].*T/.test(u)) {
                            return {
                                kind: "too-complex",
                                reason: `${c[0]} -T creates a user-defined zsh tied pair \u2014 tracked literals for its operands are unreliable`,
                                nodeType: "declaration_command"
                            };
                        }
                        if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local" || c[0] === "export") && u[0] !== "-" && /^[^=]*\[/.test(u)) {
                            return {
                                kind: "too-complex",
                                reason: `${c[0]} positional '${u}' contains array subscript \u2014 zsh/bash evaluate $(cmd) in subscripts`,
                                differential: true
                            };
                        }
                        if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local") && !/^[-+]/.test(u) && !J(f, c.some((m)=>/^[-+][A-Za-z]*[fF]/.test(m)))) {
                            return {
                                kind: "too-complex",
                                reason: `${c[0]} operand '${f.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`,
                                differential: true
                            };
                        }
                        if (u[0] !== "-") {
                            let m = u.indexOf("=");
                            if (m > 0) {
                                let x = u.slice(0, m);
                                if (/^[A-Za-z_][A-Za-z0-9_]*\+?$/.test(x)) {
                                    let y = x.endsWith("+");
                                    let k = y ? x.slice(0, -1) : x;
                                    oe(r, {
                                        name: k,
                                        value: u.slice(m + 1),
                                        isAppend: y
                                    }, n > 0);
                                    s.push(k);
                                }
                            }
                        }
                        c.push(u);
                        break;
                    }
                case "variable_assignment":
                    {
                        if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local") && !J(f, c.some((m)=>/^[-+][A-Za-z]*[fF]/.test(m)))) {
                            return {
                                kind: "too-complex",
                                reason: `${c[0]} operand '${f.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`,
                                differential: true
                            };
                        }
                        let u = xe(f, t, a, s);
                        if ("kind" in u) {
                            return u;
                        }
                        oe(r, u, n > 0);
                        s.push(u.name);
                        c.push(`${u.name}=${u.value}`);
                        break;
                    }
                case "variable_name":
                    {
                        let u = f.text;
                        if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local" || c[0] === "export") && u[0] !== "-" && /^[^=]*\[/.test(u)) {
                            return {
                                kind: "too-complex",
                                reason: `${c[0]} positional '${u}' contains array subscript \u2014 backslash-escaped form de-escapes to [$(cmd)] at runtime`,
                                differential: true
                            };
                        }
                        let m = c.some((x)=>/^-[A-Za-z]*[fF]/.test(x));
                        if (!z.test(u) && !(m && X.test(u))) {
                            return {
                                kind: "too-complex",
                                reason: `${c[0]} operand '${u}' is not a plain variable name \u2014 the shell may turn it into an assignment the parser did not see`,
                                differential: true
                            };
                        }
                        c.push(u);
                        break;
                    }
                case "ansi_c_string":
                    return {
                        kind: "too-complex",
                        reason: `${c[0] ?? "declaration"} operand ${f.text} \u2014 a $'\u2026' word the shell decodes, which may carry a subscript the parser cannot read`,
                        differential: true
                    };
                default:
                    return b(f);
            }
        }
        t.push({
            argv: c,
            envVars: [],
            redirects: [],
            text: e.text,
            hasUnquotedGlob: T(e.text),
            carveOutMayDesyncQuoteScan: P !== l
        });
        return null;
    }
    if (e.type === "variable_assignment") {
        let n = t.length;
        let l = xe(e, t, r, s);
        if ("kind" in l) {
            return l;
        }
        if (z4e(l.name)) {
            return {
                kind: "too-complex",
                reason: `${l.name} assignment alters command lookup/execution for subsequent commands`,
                nodeType: "variable_assignment"
            };
        }
        if (ct(l.name, l.value)) {
            return {
                kind: "too-complex",
                reason: `${l.name} has integer attribute \u2014 assignment arith-evals RHS, which can execute subscript command substitution or abort/diverge at runtime`,
                nodeType: "variable_assignment"
            };
        }
        oe(r, l, n > 0);
        s.push(l.name);
        if (t.length === n && ge(e)) {
            C(t, e);
        }
        return null;
    }
    if (e.type === "for_statement") {
        if (Oe(e)) {
            return b(e);
        }
        let n = null;
        let l = null;
        let a = t.length;
        let h = false;
        for (let d of e.children){
            if (!d) {
                continue;
            }
            if (d.type === "variable_name") {
                n = d.text;
            } else if (d.type === "do_group") {
                l = d;
            } else if (d.type === "select") {
                return {
                    kind: "too-complex",
                    reason: "select statement reads stdin into $REPLY; cannot statically model",
                    nodeType: "for_statement"
                };
            } else if (d.type === "for" || d.type === "in" || d.type === ";") {
                continue;
            } else if (d.type === "command_substitution") {
                let f = Re(d, t, r, s);
                if (f) {
                    return f;
                }
            } else {
                let f = v(d, t, r, s);
                if (typeof f !== "string") {
                    return f;
                }
                if (ge(d)) {
                    h = true;
                } else if ((T(d.text) || ee(d)) && eCs()) {
                    h = true;
                }
            }
        }
        if (n === null || l === null) {
            return b(e);
        }
        if (n === "PS4" || n === "IFS" || n === "SHELLOPTS" || n === "BASHOPTS" || n === "BASH_VERSINFO" || n === "BASH_ARGV0" || z4e(n) || oxt.has(n) || le.has(n) || KLn.has(n)) {
            return {
                kind: "too-complex",
                reason: `${n} as loop variable bypasses assignment validation`,
                nodeType: "for_statement"
            };
        }
        let p = r.get(n);
        if (p !== undefined && !Vs(p)) {
            return {
                kind: "too-complex",
                reason: `for-loop variable '${n}' would overwrite tracked literal ${JSON.stringify(p.slice(0, 40))}; post-loop value cannot be statically determined`,
                nodeType: "for_statement"
            };
        }
        r.delete(n);
        s.push(n);
        let c = new Map(r);
        ae(c, l);
        c.delete(n);
        for (let d of l.children){
            if (!d) {
                continue;
            }
            if (d.type === "do" || d.type === "done" || d.type === ";") {
                continue;
            }
            let f = E(d, t, c, s);
            if (f) {
                return f;
            }
        }
        F(r, c);
        if (h && t.length === a) {
            C(t, e);
        }
        return null;
    }
    if (e.type === "if_statement" || e.type === "while_statement") {
        if (Oe(e)) {
            return b(e);
        }
        let n = null;
        let l = null;
        if (e.type === "while_statement") {
            n = new Set(r.keys());
            l = new Map(r);
            ae(r, e);
        }
        let a = false;
        for (let h of e.children){
            if (!h) {
                continue;
            }
            if (h.type === "if" || h.type === "fi" || h.type === "else" || h.type === "elif" || h.type === "while" || h.type === "until" || h.type === ";") {
                continue;
            }
            if (h.type === "then") {
                a = true;
                continue;
            }
            if (h.type === "do_group") {
                let f = new Map(r);
                ae(f, h);
                for (let g of h.children){
                    if (!g) {
                        continue;
                    }
                    if (g.type === "do" || g.type === "done" || g.type === ";") {
                        continue;
                    }
                    let u = E(g, t, f, s);
                    if (u) {
                        return u;
                    }
                }
                F(r, f);
                continue;
            }
            if (h.type === "elif_clause" || h.type === "else_clause") {
                let f = new Map(r);
                for (let g of h.children){
                    if (!g) {
                        continue;
                    }
                    if (g.type === "elif" || g.type === "else" || g.type === "then" || g.type === ";") {
                        continue;
                    }
                    let u = E(g, t, f, s);
                    if (u) {
                        return u;
                    }
                }
                F(r, f);
                continue;
            }
            let p = new Map(r);
            let c = t.length;
            let d = E(h, t, p, s);
            if (d) {
                return d;
            }
            if (!a) {
                for (let [f, g] of p){
                    let u = (l ?? r).get(f);
                    if (u !== undefined && !Vs(u) && g !== u) {
                        return {
                            kind: "too-complex",
                            reason: `'${f}' was tracked as literal '${u}' but condition may modify it (||/pipeline/unset/&&-short-circuit) \u2014 cannot prove downstream value`,
                            nodeType: e.type
                        };
                    }
                    r.set(f, g);
                }
                for (let f of r.keys()){
                    if (!p.has(f)) {
                        let g = (l ?? r).get(f);
                        if (g !== undefined && !Vs(g)) {
                            return {
                                kind: "too-complex",
                                reason: `'${f}' was tracked as literal '${g}' but condition may unset it (&&-short-circuit) \u2014 cannot prove downstream value`,
                                nodeType: e.type
                            };
                        }
                        r.set(f, _);
                    }
                }
                for(let f = c; f < t.length; f++){
                    let g = t[f];
                    if (g?.argv[0] === "read") {
                        for (let m of g.argv.slice(1)){
                            if (!m.startsWith("-") && /^[A-Za-z_][A-Za-z0-9_]*$/.test(m)) {
                                let x = r.get(m);
                                if (x !== undefined && !Vs(x)) {
                                    return {
                                        kind: "too-complex",
                                        reason: `'read ${m}' in condition may not execute (||/pipeline/subshell); cannot prove it overwrites tracked literal '${x}'`,
                                        nodeType: e.type
                                    };
                                }
                                r.set(m, _);
                            }
                        }
                        let u = r.get("REPLY");
                        if (u !== undefined && !Vs(u)) {
                            return {
                                kind: "too-complex",
                                reason: `'read' in condition may write stdin to REPLY; cannot prove it overwrites tracked literal '${u}'`,
                                nodeType: e.type
                            };
                        }
                        r.set("REPLY", _);
                    }
                }
            } else {
                F(r, p);
            }
        }
        if (n !== null) {
            for (let h of [
                ...r.keys()
            ]){
                if (!n.has(h)) {
                    r.delete(h);
                }
            }
        }
        return null;
    }
    if (e.type === "subshell") {
        let n = new Map(r);
        let l = t.length;
        let a = false;
        for (let h of e.children){
            if (!h) {
                continue;
            }
            if (h.type === "(" || h.type === ")") {
                continue;
            }
            if (h.type !== "comment") {
                a = true;
            }
            let p = E(h, t, n, s);
            if (p) {
                return p;
            }
        }
        if (a && t.length === l) {
            C(t, e);
        }
        return null;
    }
    if (e.type === "test_command") {
        let n = e.children.some((p)=>p?.type === "[[");
        let l = je(e, n);
        if (l) {
            return l;
        }
        let a = [
            "[["
        ];
        let h = P;
        for (let p of e.children){
            if (!p) {
                continue;
            }
            if (p.type === "[[" || p.type === "]]" || p.type === "[" || p.type === "]") {
                if (p.text === "") {
                    return {
                        kind: "too-complex",
                        reason: "test_command early-close (quote in operator position)",
                        differential: true
                    };
                }
                continue;
            }
            let c = Ke(p, a, t, r, s, n);
            if (c) {
                return c;
            }
        }
        t.push({
            argv: a,
            envVars: [],
            redirects: [],
            text: e.text,
            hasUnquotedGlob: T(e.text),
            carveOutMayDesyncQuoteScan: P !== h
        });
        return null;
    }
    if (e.type === "unset_command") {
        let n = [];
        let l = P;
        let a = false;
        let h = false;
        let p = false;
        for (let c of e.children){
            if (!c) {
                continue;
            }
            switch(c.type){
                case "unset":
                    n.push(c.text);
                    p = c.text === "unsetenv";
                    break;
                case "variable_name":
                    if (!z.test(c.text) && !(a && X.test(c.text))) {
                        return {
                            kind: "too-complex",
                            reason: `${n[0] ?? "unset"} operand '${c.text}' is not a plain variable name \u2014 the shell may expand or evaluate it`,
                            differential: true
                        };
                    }
                    n.push(c.text);
                    h = true;
                    if (a || p) {
                        let d = r.get(c.text);
                        if (d !== undefined && Vs(d)) {
                            return {
                                kind: "too-complex",
                                reason: `'${c.text}' no longer has a statically known value at this unset \u2014 cannot verify what the command leaves behind`,
                                nodeType: "unset_command"
                            };
                        }
                        break;
                    }
                    if (L5(c.text)) {
                        return {
                            kind: "too-complex",
                            reason: `'unset' targets shell variable ${c.text} (exec-influencing / integer-attr / IFS / PS4)`,
                            nodeType: "unset_command"
                        };
                    }
                    r.set(c.text, "");
                    break;
                case "word":
                    {
                        let d = v(c, t, r, s);
                        if (typeof d !== "string") {
                            return d;
                        }
                        if (d.startsWith("-")) {
                            if (h) {
                                return b(c);
                            }
                            if (d !== "-f" && d !== "-v") {
                                return b(c);
                            }
                            if (d === "-f") {
                                a = true;
                            }
                            n.push(d);
                            break;
                        }
                        if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(d)) {
                            return b(c);
                        }
                        n.push(d);
                        h = true;
                        if (a || p) {
                            let f = r.get(d);
                            if (f !== undefined && Vs(f)) {
                                return {
                                    kind: "too-complex",
                                    reason: `'${d}' no longer has a statically known value at this unset \u2014 cannot verify what the command leaves behind`,
                                    nodeType: "unset_command"
                                };
                            }
                            break;
                        }
                        if (L5(d)) {
                            return {
                                kind: "too-complex",
                                reason: `'unset' targets shell variable ${d} (exec-influencing / integer-attr / IFS / PS4)`,
                                nodeType: "unset_command"
                            };
                        }
                        r.set(d, "");
                        break;
                    }
                case "ansi_c_string":
                case "raw_string":
                case "string":
                case "concatenation":
                    if (/\[/.test(c.text) || c.type === "ansi_c_string") {
                        return {
                            kind: "too-complex",
                            reason: `${n[0] ?? "unset"} operand ${c.text} carries a subscript \u2014 bash and zsh evaluate $(cmd) inside it`,
                            differential: true
                        };
                    }
                    return b(c);
                default:
                    return b(c);
            }
        }
        t.push({
            argv: n,
            envVars: [],
            redirects: [],
            text: e.text,
            hasUnquotedGlob: T(e.text),
            carveOutMayDesyncQuoteScan: P !== l
        });
        return null;
    }
    return b(e);
}
const Ye = new Set([
    "unary_expression",
    "binary_expression",
    "negated_expression",
    "parenthesized_expression"
]);
function Ce(e, t) {
    let r = 0;
    while(r < e.length){
        let s = e[r];
        if (s === " " || s === "\t") {
            r++;
            continue;
        }
        if (s === "\\" && e[r + 1] === `
`) {
            r += 2;
            continue;
        }
        if (t && s === `
`) {
            r++;
            continue;
        }
        if (t && s === "#") {
            r++;
            while(r < e.length && e[r] !== `
`){
                r++;
            }
            continue;
        }
        return false;
    }
    return true;
}
function je(e, t) {
    let r = Buffer.from(e.text, "utf8");
    let e_startIndex = e.startIndex;
    for (let o of e.children){
        if (!o) {
            continue;
        }
        if (o.endIndex > e.endIndex || o.startIndex < e.startIndex) {
            return {
                kind: "too-complex",
                reason: "Test command child extends past the node span — gap byte accounting is untrustworthy"
            };
        }
        if (o.startIndex > e_startIndex) {
            let n = r.subarray(e_startIndex - e.startIndex, o.startIndex - e.startIndex).toString("utf8");
            if (!Ce(n, t)) {
                return {
                    kind: "too-complex",
                    reason: "Test command has unparsed bytes between children — parser dropped content that shell will see"
                };
            }
        }
        e_startIndex = Math.max(e_startIndex, o.endIndex);
        if (Ye.has(o.type)) {
            let n = je(o, t);
            if (n) {
                return n;
            }
        }
    }
    if (e_startIndex < e.endIndex) {
        let o = r.subarray(e_startIndex - e.startIndex).toString("utf8");
        if (!Ce(o, t)) {
            return {
                kind: "too-complex",
                reason: "Test command has unparsed bytes after its last child — parser dropped content that shell will see"
            };
        }
    }
    return null;
}
function Ft(text) {
    let t = false;
    let r = false;
    let s = false;
    let o = 0;
    let n;
    for(let l = 0; l < text.length; l++){
        let a = text[l];
        if (!t && a === "\\") {
            l++;
            continue;
        }
        if (!r && a === "'") {
            t = !t;
            continue;
        }
        if (!t && a === '"') {
            r = !r;
            continue;
        }
        if (!t && !r) {
            if (a === "=" && text[l + 1] === "(" && (s || l === 0 || n === "|")) {
                return true;
            }
            if (a === "(") {
                o++;
            } else if (a === ")") {
                o = Math.max(0, o - 1);
            } else if (o === 0 && (a === "|" || a === "&") && n === a) {
                s = true;
            }
            n = a;
        }
    }
    return false;
}
function se(e) {
    let t = e.replace(/\[(?::[a-zA-Z]+:|=[A-Za-z0-9-]*=|\.[A-Za-z0-9-]*\.|[!^]?)\]\](?!\])/g, "\x00");
    let r = /[A-Za-z0-9_]/;
    let s = t.indexOf("]]");
    while(s !== -1){
        let o = s > 0 ? t[s - 1] : "";
        let n = s + 2 < t.length ? t[s + 2] : "";
        if (!(r.test(o) && r.test(n))) {
            return true;
        }
        s = t.indexOf("]]", s + 1);
    }
    return false;
}
const Bt = /^([\w\u0080-\uffff]*|[-?*@!#])(\[|:[a-zA-Z&])/;
const Ut = /^([\w\u0080-\uffff]*|[-?*@!#$])(\[|:[a-zA-Z&])/;
function Ke(e, t, r, s, o, n) {
    if (Ye.has(e.type)) {
        for(let l = 0; l < e.children.length; l++){
            let child = e.children[l];
            if (!child) {
                continue;
            }
            if ((child.type === "simple_expansion" || child.type === "expansion") && (e.children[l + 1]?.text.startsWith("[") || /^:[a-zA-Z&]/.test(e.children[l + 1]?.text ?? "") || child.children.some((p)=>p?.type === "special_variable_name") && Ut.test(e.children[l + 1]?.text ?? ""))) {
                return {
                    kind: "too-complex",
                    reason: "zsh $name[expr] / $name:mod in [[ ]] operand — recursive eval",
                    differential: true
                };
            }
            let h = Ke(child, t, r, s, o, n);
            if (h) {
                return h;
            }
        }
        return null;
    }
    switch(e.type){
        case "test_operator":
        case "!":
        case "(":
        case ")":
        case "&&":
        case "||":
        case "==":
        case "=":
        case "!=":
        case "<":
        case ">":
        case "=~":
            if (e.text === "") {
                return {
                    kind: "too-complex",
                    reason: "Test command has a synthesized zero-width token — parser diverged from shell",
                    differential: true
                };
            }
            t.push(e.text);
            return null;
        case "regex":
        case "extglob_pattern":
            if (/\$([({[\w#?!*@$'"+~^=-]|[\u0080-\uffff])|`|[<>]\(/.test(e.text)) {
                return {
                    kind: "too-complex",
                    reason: `[[ ]] ${e.type === "extglob_pattern" ? "pattern" : e.type} contains expansion / command / process substitution`,
                    differential: true
                };
            }
            if (e.text.startsWith("=(")) {
                return {
                    kind: "too-complex",
                    reason: `[[ ]] ${e.type === "extglob_pattern" ? "pattern" : e.type} contains zsh =(CMD) process substitution`,
                    differential: true
                };
            }
            if (e.type === "regex" && Ft(e.text)) {
                return {
                    kind: "too-complex",
                    reason: `[[ ]] ${e.type} contains zsh =(CMD) process substitution`,
                    differential: true
                };
            }
            if (e.type === "extglob_pattern") {
                let l = e.text;
                let a = 0;
                while(a < l.length){
                    if (l[a] === "\\" && a + 1 < l.length) {
                        a += 2;
                        continue;
                    }
                    if (l[a] === "&") {
                        return {
                            kind: "too-complex",
                            reason: "[[ ]] pattern contains unquoted & (zsh splits the word at & at any depth)",
                            differential: true
                        };
                    }
                    a++;
                }
            }
            if (e.type === "regex") {
                let l = e.text;
                let a = 0;
                let h = 0;
                while(h < l.length){
                    let p = l[h];
                    if (p === "\\" && h + 1 < l.length) {
                        h += 2;
                        continue;
                    }
                    if (a === 0 && p === "|" && l[h + 1] === p) {
                        return {
                            kind: "too-complex",
                            reason: "[[ ]] regex contains glued || (zsh splits it as a cond operator)",
                            differential: true
                        };
                    }
                    if (p === "&") {
                        return {
                            kind: "too-complex",
                            reason: "[[ ]] regex contains unquoted & (zsh splits the word at & at any depth)",
                            differential: true
                        };
                    }
                    if (p === '"' || p === "'") {
                        let c = p;
                        h++;
                        while(h < l.length && l[h] !== c){
                            if (c === '"' && l[h] === "\\" && h + 1 < l.length) {
                                h++;
                            }
                            h++;
                        }
                        if (h < l.length) {
                            h++;
                        }
                        continue;
                    }
                    if (p === "(") {
                        a++;
                    } else if (p === ")") {
                        a--;
                        if (a < 0) {
                            return {
                                kind: "too-complex",
                                reason: "[[ ]] regex has unbalanced parentheses (parser desync)",
                                differential: true
                            };
                        }
                    }
                    h++;
                }
                if (a !== 0) {
                    return {
                        kind: "too-complex",
                        reason: "[[ ]] regex has unbalanced parentheses (parser desync)",
                        differential: true
                    };
                }
            }
            if (e.text.includes("&&")) {
                return {
                    kind: "too-complex",
                    reason: "[[ ]] pattern leaf contains `&&` — shell cond-lexer divergence (zsh splits the word there)",
                    differential: true
                };
            }
            if (se(e.text)) {
                return {
                    kind: "too-complex",
                    reason: "[[ ]] pattern leaf contains a potential standalone `]]` closer — shell cond-lexer divergence (zsh may close the conditional early)",
                    differential: true
                };
            }
            t.push(e.text);
            return null;
        case "test_rhs_missing":
            return {
                kind: "too-complex",
                reason: "Test command comparison is missing its right-hand side — parser dropped consumed bytes"
            };
        default:
            {
                let l = v(e, r, s, o);
                if (typeof l !== "string") {
                    if (n && l.kind === "too-complex") {
                        let { nodeType, ...rest } = l;
                        return {
                            ...rest,
                            differential: true
                        };
                    }
                    return l;
                }
                if (n && (se(l) || se(e.text)) || /]].*[;\n&|<>]/s.test(l)) {
                    return {
                        kind: "too-complex",
                        reason: n ? "[[ ]] quoted operand contains `]]` closer or `]]`+separator bytes — possible parser quote-state desync" : "test command quoted operand contains `]]`+separator bytes — possible parser quote-state desync",
                        differential: true
                    };
                }
                t.push(l);
                return null;
            }
    }
}
function Xe(e) {
    let t = null;
    for (let r of e.children){
        if (!r || r.type === "!" || r.type === "comment" || Y.has(r.type)) {
            continue;
        }
        t = r;
    }
    if (!t) {
        return null;
    }
    if (t.type === "list" || t.type === "negated_command") {
        return Xe(t);
    }
    if (!ze.has(t.type) && !mt.has(t.type)) {
        return t;
    }
    return null;
}
function Wt(e, t, r, s, o) {
    let n = [];
    let l = null;
    let a = [];
    let h = [];
    for (let f of e.children){
        if (!f) {
            continue;
        }
        if (f.type === "file_redirect") {
            a.push(f);
        } else if (f.type === "heredoc_redirect") {
            h.push(f);
        } else if (ze.has(f.type)) {
            if (f.type === "list" || f.type === "negated_command") {
                let g = Xe(f);
                if (g) {
                    return b(g);
                }
            }
            l = f;
        } else {
            return b(f);
        }
    }
    if (!l) {
        for (let f of a){
            let g = pe(f, t, r, s);
            if ("kind" in g) {
                return g;
            }
            n.push(g);
        }
        for (let f of h){
            let g = he(f, r);
            if (g) {
                return g;
            }
        }
        t.push({
            argv: [],
            envVars: [],
            redirects: n,
            text: e.text,
            hasUnquotedGlob: T(e.text)
        });
        return null;
    }
    let t_length = t.length;
    let c = D && o && l.type === "command" && a.length === 0 && h.length === 1 ? h[0]?.children.find((f)=>f?.type === "pipeline") : undefined;
    let d;
    if (l.type === "list") {
        let f = l.children;
        if (f.length === 3 && f[0] && f[1]?.type === "&&" && f[2]) {
            let g = E(f[0], t, r, s);
            if (g) {
                return g;
            }
            d = new Map(r);
            let u = E(f[2], t, r, s);
            if (u) {
                return u;
            }
        } else {
            let g = E(l, t, r, s);
            if (g) {
                return g;
            }
            d = r;
        }
    } else if (be.has(l.type)) {
        let f = E(l, t, r, s);
        if (f) {
            return f;
        }
        d = r;
    } else {
        d = new Map(r);
        let f = E(l, t, c ? new Map(r) : r, s);
        if (f) {
            return f;
        }
    }
    for (let f of a){
        let g = pe(f, t, d, s);
        if ("kind" in g) {
            return g;
        }
        n.push(g);
    }
    for (let f of h){
        let g = he(f, d, c);
        if (g) {
            return g;
        }
    }
    if (c) {
        let f = E(c, t, r, s);
        if (f) {
            return f;
        }
    }
    if (h.length > 0) {
        for(let f = t_length; f < t.length; f++){
            let g = t[f];
            if (g) {
                g.argvSourceLiteral = false;
            }
        }
    }
    if (n.length > 0) {
        if (t.length > t_length) {
            let f = t.at(-1);
            if (f) {
                f.redirects.push(...n);
            }
        } else {
            t.push({
                argv: [],
                envVars: [],
                redirects: n,
                text: e.text,
                hasUnquotedGlob: T(e.text)
            });
        }
    }
    return null;
}
function Qe(e) {
    {
        let s = e.startIndex;
        for (let o of e.children){
            if (!o) {
                continue;
            }
            if (o.startIndex > s) {
                let n = Buffer.from(e.text, "utf8").subarray(s - e.startIndex, o.startIndex - e.startIndex).toString("utf8");
                if (!/^(?:[ \t]|\\\n)*$/.test(n)) {
                    return {
                        kind: "too-complex",
                        reason: "Redirect has unparsed bytes between children — parser dropped content that shell will see"
                    };
                }
            }
            s = o.endIndex;
        }
        if (s < e.endIndex) {
            let o = Buffer.from(e.text, "utf8").subarray(s - e.startIndex).toString("utf8");
            if (!/^(?:[ \t]|\\\n)*$/.test(o)) {
                return {
                    kind: "too-complex",
                    reason: "Redirect has unparsed trailing bytes — parser dropped content that shell will see"
                };
            }
        }
    }
    let t = null;
    let r = 0;
    for (let s of e.children){
        if (!s) {
            continue;
        }
        if (s.type === "variable_name") {
            return {
                kind: "too-complex",
                reason: `Redirect uses ${s.text} fd-variable assignment \u2014 modifies shell variable as side effect`
            };
        }
        if (s.type === "file_descriptor") {
            continue;
        }
        if (s.type === ">&-" || s.type === "<&-") {
            t = s.type;
            continue;
        }
        if (s.type in ce) {
            t = s.type;
            continue;
        }
        if ((t === ">&" || t === "<&") && s.text.startsWith("-")) {
            return {
                kind: "too-complex",
                reason: "Redirect target after >& or <& starts with - — bash treats the dash as close-fd and passes the rest to the command as a hidden argument"
            };
        }
        if (t === ">&-" || t === "<&-") {
            return {
                kind: "too-complex",
                reason: "Close-fd redirect is followed by a word — bash passes it to the command as a hidden argument"
            };
        }
        r++;
        t = null;
    }
    if (r > 1) {
        return {
            kind: "too-complex",
            reason: "Redirect has multiple targets — post-redirect args swallowed"
        };
    }
    return null;
}
const Je = new Set([
    "heredoc_start",
    "heredoc_body",
    "<<",
    "<<-",
    "heredoc_end",
    "file_descriptor"
]);
const et = new Set([
    "file_redirect",
    "pipeline"
]);
const Ht = /^\{(?:\w|[^\x00-\x7F])+(\[.*\])?\}$/su;
function we(e) {
    let t = /^\{((?:\w|[^\x00-\x7F])+)/u.exec(e)?.[1];
    if (t === undefined) {
        return "{…}";
    }
    let r = /^\w{1,64}$/.test(t) ? t : "…";
    if (e[t.length + 1] === "[") {
        return `{${r}[\u2026]}`;
    }
    return `{${r}}`;
}
function tt(e, t) {
    let r = t[e.startIndex] === 123 ? Ht.exec(e.text) : null;
    if (r) {
        let s = e.endIndex;
        let o = false;
        while(true){
            let h = t[s];
            if (h === 32 || h === 9) {
                o = true;
                s++;
            } else if (h === 92 && t[s + 1] === 10) {
                s += 2;
            } else {
                break;
            }
        }
        let n = t[s];
        let l = t[s + 1];
        if (((n === 62 || n === 60) && l !== 40 || n === 38 && l === 62) && !(o && r[1] !== undefined)) {
            return e.text;
        }
    }
    for (let s of e.children){
        if (s) {
            let o = tt(s, t);
            if (o !== null) {
                return o;
            }
        }
    }
    return null;
}
function nt(e) {
    if (e.type === "file_redirect") {
        let t = Qe(e);
        if (t) {
            return t;
        }
    }
    if (e.type === "herestring_redirect" || e.type === "heredoc_redirect") {
        for (let t of e.children){
            if (t?.type === "variable_name") {
                return {
                    kind: "too-complex",
                    reason: `Redirect uses ${we(t.text)} fd-variable assignment \u2014 modifies shell variable as side effect`
                };
            }
        }
        if (e.type === "heredoc_redirect") {
            for (let t of e.children){
                if (t && !Je.has(t.type) && !et.has(t.type)) {
                    return {
                        kind: "too-complex",
                        reason: "Text after the heredoc start on the same line cannot be statically analyzed"
                    };
                }
            }
        }
    }
    for (let t of e.children){
        if (t) {
            let r = nt(t);
            if (r) {
                return r;
            }
        }
    }
    return null;
}
function pe(e, t, r, s) {
    let o = A;
    let n = j;
    let op = null;
    let target = null;
    let fd;
    {
        let p = Qe(e);
        if (p) {
            return p;
        }
    }
    for (let p of e.children){
        if (!p) {
            continue;
        }
        if (p.type === "file_descriptor") {
            fd = Number(p.text);
        } else if (p.type === "variable_name") {
            return {
                kind: "too-complex",
                reason: `Redirect uses ${p.text} fd-variable assignment \u2014 modifies shell variable as side effect`
            };
        } else if (p.type in ce) {
            op = ce[p.type] ?? null;
        } else if (p.type === ">&-" || p.type === "<&-") {
            if (e.children.some((c)=>c !== p && c?.type !== "file_descriptor")) {
                return {
                    kind: "too-complex",
                    reason: "Close-fd redirect is followed by a word — bash passes it to the command as a hidden argument"
                };
            }
            return b(p);
        } else if (target !== null) {
            return {
                kind: "too-complex",
                reason: "Redirect has multiple targets — post-redirect args swallowed"
            };
        } else if ((op === ">&" || op === "<&") && p.text.startsWith("-")) {
            return {
                kind: "too-complex",
                reason: "Redirect target after >& or <& starts with - — bash treats the dash as close-fd and passes the rest to the command as a hidden argument"
            };
        } else if (p.type === "word" || p.type === "number") {
            if (p.children.length > 0) {
                return b(p);
            }
            if (K.test(p.text)) {
                return b(p);
            }
            if (ue.test(p.text)) {
                return b(p);
            }
            if (fe.test(p.text)) {
                return b(p);
            }
            if (/(?:^|[^\\])(?:\\\\)*[`$]/.test(p.text)) {
                return b(p);
            }
            target = p.text.replace(/\\([\s\S])/g, (c, d)=>{
                if (d === `
`) {
                    return "";
                }
                return d;
            });
        } else if (p.type === "raw_string") {
            target = st(p.text);
        } else if (p.type === "string") {
            let c = it(p, t, r, s);
            if (typeof c !== "string") {
                return c;
            }
            target = c;
        } else if (p.type === "concatenation") {
            let c = v(p, t, r, s);
            if (typeof c !== "string") {
                return c;
            }
            if (/(?:^|[^\\])(?:\\\\)*[`$]/.test(p.text)) {
                return {
                    kind: "too-complex",
                    reason: "Redirect target concatenation contains $/` — unanalyzable gap or substitution",
                    nodeType: "concatenation"
                };
            }
            target = c;
        } else {
            return b(p);
        }
    }
    if (!op || target === null) {
        return {
            kind: "too-complex",
            reason: "Unrecognized redirect shape"
        };
    }
    if (Vs(target)) {
        return {
            kind: "too-complex",
            reason: "Redirect target contains $(cmd) output — path is runtime-determined",
            nodeType: e.type
        };
    }
    if (target.includes(`
`)) {
        return {
            kind: "too-complex",
            reason: "Redirect target contains newline — potential path traversal",
            nodeType: e.type
        };
    }
    if (target.startsWith("!")) {
        return {
            kind: "too-complex",
            reason: "Redirect target starts with ! — zsh clobber or history expansion",
            nodeType: e.type
        };
    }
    if (target.startsWith("=")) {
        return {
            kind: "too-complex",
            reason: "Redirect target starts with = — zsh expands to PATH binary",
            nodeType: e.type
        };
    }
    if ((op === ">&" || op === "<&") && target.startsWith("-")) {
        return {
            kind: "too-complex",
            reason: "Redirect target after >& or <& starts with - — bash treats the dash as close-fd and passes the rest to the command as a hidden argument"
        };
    }
    if (op === ">&" && !/^[A-Za-z0-9./_-]+$/.test(target)) {
        return {
            kind: "too-complex",
            reason: "bash `>&` applies a second word-expansion pass to its target — path cannot be statically validated",
            nodeType: e.type
        };
    }
    return {
        op,
        target,
        fd,
        targetSourceLiteral: A === o && j === n
    };
}
var D = false;
var I;
var L = 0;
var M;
var H = new Map;
var B = false;
function Zt() {
    return M;
}
function Gt() {
    return L;
}
const Vt = /`|\\[$`\\\n]/;
const De = z.source.slice(1, -1);
const qt = new RegExp(`\\$(?:${De}(?![A-Za-z0-9_\\u0080-\\uffff])|\\{${De}\\})(?!\\[|:[A-Za-z&])`, "g");
function he(e, t, r) {
    let s = null;
    let o = null;
    let n = null;
    let l = false;
    for (let h of e.children){
        if (!h) {
            continue;
        }
        if (Je.has(h.type)) {
            if (h.type === "heredoc_start") {
                s = h.text;
            } else if (h.type === "heredoc_body") {
                n = h;
            } else if (h.type === "<<-") {
                l = true;
            } else if (h.type === "heredoc_end") {
                o = h.text;
            }
        } else if (h === r && h.children.at(-1)?.type === "command" && h.children.every((p)=>p?.type === "|" || p?.type === "command" && !p.children.some((c)=>c?.type.endsWith("_redirect")))) ;
        else if (et.has(h.type)) {
            let p = b(h);
            if (p.kind === "too-complex") {
                return {
                    ...p,
                    afterHeredocDelimiter: true
                };
            }
            return p;
        } else {
            return {
                kind: "too-complex",
                reason: "Text after the heredoc start on the same line cannot be statically analyzed"
            };
        }
    }
    if (n === null) {
        return {
            kind: "too-complex",
            reason: "Heredoc body was not scanned by the parser",
            nodeType: "heredoc_redirect"
        };
    }
    if (r) {
        let h = Buffer.from(e.text, "utf8").subarray(0, n.startIndex - e.startIndex).toString("utf8");
        let p = e.children.slice(0, e.children.indexOf(n)).map((c)=>(c === r ? "|" : "") + (c?.text ?? "")).join("");
        if (h.indexOf(`
`) !== h.length - 1 || h.includes("\\") || h.replace(/[ \t\n]/g, "") !== p.replace(/[ \t]/g, "")) {
            return {
                kind: "too-complex",
                reason: "More than a pipeline follows the heredoc delimiter on its line"
            };
        }
    }
    let a = s !== null && (s.startsWith("'") && s.endsWith("'") || s.startsWith('"') && s.endsWith('"') || s.startsWith("\\"));
    if (!a) {
        let h = n.children.filter((c)=>c?.type !== "heredoc_content");
        if (!(D && t !== undefined && s !== null && z.test(s) && o === s && !Vt.test(n.text) && (n.text.match(/\$/g)?.length ?? 0) === h.length && (n.text.match(qt)?.length ?? 0) === h.length && h.every((c)=>{
            A++;
            return (c?.type === "simple_expansion" || c?.type === "expansion") && typeof Z(c, t, true) === "string";
        }))) {
            return {
                kind: "too-complex",
                reason: "Heredoc with unquoted delimiter undergoes shell expansion",
                nodeType: "heredoc_redirect",
                differential: true
            };
        }
    }
    if (s !== null && (s.startsWith("'") || s.startsWith('"')) && s.slice(1, -1).includes("\\")) {
        return {
            kind: "too-complex",
            reason: "Quoted heredoc delimiter contains backslash",
            nodeType: "heredoc_redirect"
        };
    }
    if (a) {
        for (let h of n.children){
            if (!h) {
                continue;
            }
            if (h.type !== "heredoc_content") {
                return b(h);
            }
        }
    }
    if (s !== null && n !== null) {
        let h = !a ? s : s.startsWith("\\") ? s.slice(1) : s.slice(1, -1);
        if (h.length > 0) {
            if (l && h.startsWith("\t")) {
                return {
                    kind: "too-complex",
                    reason: "Heredoc uses <<- with a tab-prefixed delimiter",
                    nodeType: "heredoc_redirect"
                };
            }
            for (let p of n.text.split(`
`)){
                let c = l ? p.replace(/^\t+/, "") : p;
                if (!c.startsWith(h)) {
                    continue;
                }
                let d = c.slice(h.length);
                if (/[)`}]/.test(d)) {
                    return {
                        kind: "too-complex",
                        reason: "Heredoc body line starts with the delimiter and contains a shell metacharacter bash may treat as a terminator",
                        nodeType: "heredoc_redirect"
                    };
                }
            }
        }
    }
    return null;
}
function Yt(e, t, r, s) {
    for (let o of e.children){
        if (!o) {
            continue;
        }
        if (o.type === "<<<") {
            continue;
        }
        if (o.type === "variable_name") {
            return {
                kind: "too-complex",
                reason: `Redirect uses ${we(o.text)} fd-variable assignment \u2014 modifies shell variable as side effect`
            };
        }
        let n = v(o, t, r, s);
        if (typeof n !== "string") {
            return n;
        }
        if (q.test(n)) {
            return b(o);
        }
    }
    return null;
}
const me = new Set([
    "command",
    "builtin",
    "noglob",
    "nocorrect",
    "time"
]);
const Ee = new Set([
    "declare",
    "typeset",
    "local",
    "export",
    "readonly"
]);
const rt = new Set([
    ...Ee,
    "integer",
    "float",
    "private"
]);
const qLn = new Set([
    ":",
    "break",
    "continue",
    "return",
    "exit",
    "shift",
    "times",
    "set",
    "export",
    "readonly",
    "unset"
]);
function jt(e, envVars, r, s) {
    let o = [];
    let n = [];
    let l = (u, m = true)=>{
        let x = u.match(/^[A-Za-z_][A-Za-z0-9_]*/);
        if (x) {
            o.push(x[0]);
            if (m) {
                n.push(x[0]);
            }
        }
    };
    let a = e;
    let h = false;
    let p;
    let c = [];
    while(true){
        let word = a[0];
        if (word === undefined) {
            break;
        }
        if (me.has(word)) {
            if ((p === "builtin" || p === "command") && word !== "builtin" && word !== "command") {
                if (word === "noglob" && !h) {
                    return {
                        kind: "too-complex",
                        reason: `'${p} noglob' runs the wrapped command on zsh (for 'command', under POSIX_BUILTINS) but not bash \u2014 cannot statically model whether it executes`,
                        nodeType: "command"
                    };
                }
                h = true;
            }
            let m = 1;
            while(m < a.length && /^-[-pvV]*$/.test(a[m])){
                if (/[vV]/.test(a[m])) {
                    h = true;
                }
                m++;
            }
            a = a.slice(m);
            p = word;
        } else if (word === "!") {
            if (p === "builtin" || p === "command") {
                h = true;
            }
            a = a.slice(1);
            p = undefined;
        } else if (/^[A-Za-z_]\w*(\[[^\]]*\])?\+?=/.test(word)) {
            let m = o.length;
            l(word);
            c.push({
                word,
                target: o.length > m ? m : undefined
            });
            a = a.slice(1);
            p = undefined;
        } else {
            break;
        }
    }
    let d = a[0];
    if (d === undefined) {
        for (let u of envVars){
            l(u.name);
        }
    } else if (Ee.has(d)) {
        let u = false;
        for(let m = 1; m < a.length; m++){
            let x = a[m];
            if (!u && x === "--") {
                u = true;
                continue;
            }
            if (!u && /^[+-].*m/.test(x)) {
                return {
                    kind: "too-complex",
                    reason: `'${d} ${x}' (wrapped form) \u2014 zsh -m/+m pattern-assigns every matching variable; cannot statically model target set`,
                    nodeType: "command"
                };
            }
            if (!u && x.startsWith("-")) {
                continue;
            }
            if (x.includes("=")) {
                l(x);
            }
        }
    } else if (d === "read") {
        let u = 1;
        let m = false;
        let x = false;
        while(u < a.length){
            let y = a[u];
            if (!m && y === "--") {
                m = true;
                u++;
                continue;
            }
            if (!m && y.startsWith("-")) {
                if (RNe.has(y)) {
                    u += 2;
                    continue;
                }
                let k = false;
                for(let w = 1; w < y.length; w++){
                    let N = y[w];
                    if (N === "a" || N === "A") {
                        let Se = w < y.length - 1 ? y.slice(w + 1) : a[u + 1];
                        if (Se) {
                            l(Se);
                            x = true;
                        }
                        k = w === y.length - 1;
                        break;
                    }
                    if (RNe.has(`-${N}`)) {
                        k = w === y.length - 1;
                        break;
                    }
                }
                u += k ? 2 : 1;
                continue;
            }
            l(y);
            x = true;
            u++;
        }
        if (!x) {
            o.push("REPLY");
        }
    } else if (d === "printf") {
        for(let u = 1; u < a.length; u++){
            let m = a[u];
            if (m === "--" || !m.startsWith("-")) {
                break;
            }
            if (m === "-v") {
                if (a[u + 1]) {
                    l(a[u + 1]);
                }
                u++;
                continue;
            }
            if (m.startsWith("-v")) {
                l(m.slice(2));
            }
        }
    } else if (d === "getopts") {
        let u = a[1] === "--" ? 1 : 0;
        if (a[2 + u]) {
            l(a[2 + u]);
        }
        o.push("OPTARG");
        r.set("OPTIND", _);
    } else if (d === "wait") {
        for(let u = 1; u < a.length; u++){
            let m = a[u];
            if (m === "--" || !m.startsWith("-")) {
                break;
            }
            for(let x = 1; x < m.length; x++){
                if (m[x] === "p") {
                    if (x < m.length - 1) {
                        l(m.slice(x + 1));
                    } else if (a[u + 1]) {
                        l(a[u + 1]);
                        u++;
                    }
                    break;
                }
            }
        }
    } else if (!h && (d === "unset" || d === "unsetenv")) {
        let u = false;
        let m = false;
        for(let x = 1; x < a.length; x++){
            let y = a[x];
            if (y.startsWith("-")) {
                if (m) {
                    return {
                        kind: "too-complex",
                        reason: `'unset \u2026 ${y}' (wrapped form) \u2014 flag after name; getopt stops at first non-option`,
                        nodeType: "command"
                    };
                }
                if (y !== "-f" && y !== "-v") {
                    return {
                        kind: "too-complex",
                        reason: `'unset ${y}' (wrapped form) \u2014 flag other than -f/-v (zsh -m pattern-unset, bash -n nameref) cannot be statically modelled`,
                        nodeType: "command"
                    };
                }
                if (y === "-f") {
                    u = true;
                }
                continue;
            }
            m = true;
            if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(y)) {
                return {
                    kind: "too-complex",
                    reason: `'unset ${y}' (wrapped form) \u2014 non-identifier operand may pathname-expand; cannot statically know which var is unset`,
                    nodeType: "command"
                };
            }
            if (u || d === "unsetenv") {
                let k = r.get(y);
                if (k !== undefined && Vs(k)) {
                    return {
                        kind: "too-complex",
                        reason: `'${y}' no longer has a statically known value at this unset (wrapped form) \u2014 cannot verify what the command leaves behind`,
                        nodeType: "command"
                    };
                }
                continue;
            }
            if (L5(y)) {
                return {
                    kind: "too-complex",
                    reason: `'unset' targets shell variable ${y} (exec-influencing / integer-attr / IFS / PS4)`,
                    nodeType: "command"
                };
            }
            r.set(y, "");
        }
    } else if (d === "print") {
        for(let u = 1; u < a.length; u++){
            let m = a[u];
            if (m === "--" || m === "-" || !m.startsWith("-")) {
                break;
            }
            let x = false;
            for(let y = 1; y < m.length; y++){
                let k = m[y];
                if (k === "v") {
                    let w = y < m.length - 1 ? m.slice(y + 1) : a[u + 1];
                    if (w) {
                        l(w);
                    }
                    x = y === m.length - 1;
                    break;
                }
                if (un.has(`-${k}`)) {
                    x = y === m.length - 1;
                    break;
                }
            }
            if (x) {
                u++;
            }
        }
    } else if (d === "set") {
        for(let u = 1; u < a.length; u++){
            let m = a[u];
            if (m === "--" || !/^[-+]/.test(m)) {
                break;
            }
            let x = m.indexOf("A", 1);
            if (x === -1) {
                if (m.endsWith("o")) {
                    u++;
                }
                continue;
            }
            if (x < m.length - 1) {
                l(m.slice(x + 1));
            } else if (a[u + 1]) {
                l(a[u + 1]);
            }
            break;
        }
    } else if (d === "mapfile" || d === "readarray") {
        let u = false;
        for(let m = 1; m < a.length; m++){
            let x = a[m];
            if (x.startsWith("-")) {
                if (/^-[dnOsuCc]$/.test(x)) {
                    m++;
                }
                continue;
            }
            l(x);
            u = true;
        }
        if (!u) {
            o.push("MAPFILE");
        }
    } else if (!h && (d === "cd" || d === "chdir" || d === "pushd" || d === "popd")) {
        let u = false;
        if (d === "pushd" || d === "popd") {
            for(let m = 1; m < a.length; m++){
                let x = a[m];
                if (x === "--") {
                    break;
                }
                if (nde(x, "n")) {
                    u = true;
                    break;
                }
                if (d === "popd" && (/^\+0*[1-9]/.test(x) || /^-0+$/.test(x))) {
                    u = true;
                    break;
                }
            }
        }
        if (!u) {
            r.set("PWD", _);
            r.set("OLDPWD", _);
        }
        if (d === "pushd" || d === "popd") {
            r.set("DIRSTACK", _);
            r.set("dirstack", _);
        }
    }
    let f = d !== undefined && rt.has(d) ? envVars.length + c.length : 0;
    let g = L;
    L += f;
    if (f > 0 && I === undefined) {
        let u = d === "export" || d === "readonly" || a.some((x)=>/^-[A-Za-z]*[xr]/.test(x));
        let m = new Set;
        for (let x of u ? a.slice(1) : []){
            let y = /^[A-Za-z_]\w*/.exec(x);
            if (y !== null) {
                m.add(y[0]);
            }
        }
        M = [
            ...M ?? [],
            ...envVars.map((x)=>m.has(x.name)),
            ...c.map(({ word })=>m.has(/^[A-Za-z_]\w*/.exec(word)?.[0] ?? ""))
        ];
    }
    if (f > 0 && I !== undefined) {
        let u = {
            kind: "too-complex",
            reason: `A variable set in front of ${d} in this command can't be checked before it runs`
        };
        let m = [
            ...envVars
        ];
        for (let { word } of c){
            let y = /^([A-Za-z_]\w*)(\+?)=([^]*)$/.exec(word);
            if (y === null) {
                return u;
            }
            let [, name = "", w, value = ""] = y;
            m.push(w === "+" ? {
                name,
                value,
                isAppend: true
            } : {
                name,
                value
            });
        }
        if (I.length < g + m.length || c.length > 0 && m.length > 1) {
            return u;
        }
        for(let x = c.length - 1; x >= 0; x--){
            let y = c[x]?.target;
            if (y !== undefined) {
                o.splice(y, 1);
            }
        }
        for (let [x, y] of m.entries()){
            if (I[g + x] !== true) {
                continue;
            }
            let k = y.isAppend ? r.get(y.name) : "";
            if (k === undefined || Vs(k) || Vs(y.value) || L5(y.name)) {
                return u;
            }
            r.set(y.name, k + y.value);
            H.set(y.name, k + y.value);
        }
    }
    if (d !== undefined && envVars.length > 0 && !(f > 0 && I !== undefined) && qLn.has(d)) {
        for (let u of envVars){
            l(u.name);
        }
    }
    for (let u of o){
        if (L5(u)) {
            return {
                kind: "too-complex",
                reason: `'${d ?? envVars[0]?.name}' writes shell variable ${u} (exec-influencing / integer-attr / IFS) \u2014 value cannot be statically verified`,
                nodeType: "command"
            };
        }
        r.set(u, _);
    }
    s.push(...n);
    return null;
}
function Kt(e, t, r, s, o) {
    let n = A;
    let l = P;
    let a = [];
    let argvUnquotedGlob = [];
    let envVars = [];
    let c = [
        ...t
    ];
    for (let u of e.children){
        if (!u) {
            continue;
        }
        switch(u.type){
            case "variable_assignment":
                {
                    if (envVars.length > 0) {
                        let x = ot(u, new Set(envVars.map((y)=>y.name)));
                        if (x !== null) {
                            return {
                                kind: "too-complex",
                                reason: `Env-prefix value references \`$${x}\` assigned by an earlier env-prefix in the same command \u2014 runtime sees the earlier assignment, static analysis does not`,
                                nodeType: "variable_assignment"
                            };
                        }
                    }
                    let m = xe(u, r, s, o);
                    if ("kind" in m) {
                        return m;
                    }
                    if (ct(m.name, m.value)) {
                        return {
                            kind: "too-complex",
                            reason: `${m.name} has integer attribute \u2014 env-prefix arith-evals value, which can execute subscript command substitution or abort/diverge at runtime`,
                            nodeType: "variable_assignment"
                        };
                    }
                    envVars.push(m.isAppend ? {
                        name: m.name,
                        value: m.value,
                        isAppend: true
                    } : {
                        name: m.name,
                        value: m.value
                    });
                    break;
                }
            case "command_name":
                {
                    let m = u.children[0] ?? u;
                    if (Sd()) {
                        if (m.type === "simple_expansion" || m.type === "expansion") {
                            return b(m);
                        }
                        if ((m.type === "string" || m.type === "concatenation") && at(m)) {
                            return b(m);
                        }
                    }
                    let x = v(m, r, s, o);
                    if (typeof x !== "string") {
                        return x;
                    }
                    a.push(x);
                    argvUnquotedGlob.push(T(m.text) || ee(m));
                    break;
                }
            case "word":
            case "number":
            case "raw_string":
            case "string":
            case "concatenation":
            case "arithmetic_expansion":
                {
                    let m = v(u, r, s, o);
                    if (typeof m !== "string") {
                        return m;
                    }
                    if (/^--?[\nA-Za-z0-9_]/.test(m) && Vs(m)) {
                        return {
                            kind: "too-complex",
                            reason: "Argument starting with `-` contains runtime-determined content",
                            nodeType: u.type
                        };
                    }
                    a.push(m);
                    argvUnquotedGlob.push(T(u.text) || ee(u));
                    break;
                }
            case "simple_expansion":
                {
                    A++;
                    let m = Z(u, s, false);
                    if (typeof m !== "string") {
                        return m;
                    }
                    a.push(m);
                    argvUnquotedGlob.push(true);
                    break;
                }
            case "file_redirect":
                {
                    let m = pe(u, r, s, o);
                    if ("kind" in m) {
                        return m;
                    }
                    c.push(m);
                    break;
                }
            case "herestring_redirect":
                {
                    A++;
                    let m = Yt(u, r, s, o);
                    if (m) {
                        return m;
                    }
                    break;
                }
            default:
                return b(u);
        }
    }
    {
        let u = jt(a, envVars, s, o);
        if (u) {
            return u;
        }
    }
    let d = (u, m)=>{
        if (u === "" || /["'\\ \t\n$`;|&<>(){}#]/.test(u) || m === 0 && u.includes("=")) {
            return `'${u.replaceAll("'", "'\\''")}'`;
        }
        return u;
    };
    let text = /\$[A-Za-z_]/.test(e.text) || e.text.includes(`
`) ? [
        ...envVars.map((u)=>`${u.name}=${d(u.value)}`),
        ...a.map((u, m)=>d(u, m))
    ].join(" ") : e.text;
    let hasUnquotedGlob = T(e.text);
    return {
        kind: "simple",
        commands: [
            {
                argv: a,
                envVars,
                redirects: c,
                text,
                hasUnquotedGlob,
                argvSourceLiteral: A === n,
                carveOutMayDesyncQuoteScan: P !== l,
                argvUnquotedGlob
            }
        ],
        bareAssignmentNames: []
    };
}
const Xt = "*?[";
function ee(e) {
    switch(e.type){
        case "word":
        case "number":
            for(let t = 0; t < e.text.length; t++){
                if (e.text[t] === "\\") {
                    t++;
                } else if (Xt.includes(e.text[t])) {
                    return true;
                }
            }
            return false;
        case "string":
        case "raw_string":
        case "simple_expansion":
        case "arithmetic_expansion":
            return false;
        case "concatenation":
            return e.children.some((t)=>t !== null && ee(t));
        default:
            return true;
    }
}
function Re(e, t, r, s) {
    if (D && te(e, "heredoc_redirect")) {
        return b(e);
    }
    let o = new Map(r);
    let t_length = t.length;
    let l = false;
    {
        let a = Buffer.from(e.text, "utf8");
        let h = (d)=>d === 32 || d === 9 || d === 10 || d === 13 || d === 59 || d === 38;
        let p = (d, f)=>{
            let g = d;
            while(g < f){
                let u = a[g];
                if (h(u)) {
                    g++;
                } else if (u === 92 && (a[g + 1] === 10 || a[g + 1] === 13 && a[g + 2] === 10)) {
                    g += a[g + 1] === 13 ? 3 : 2;
                } else {
                    return false;
                }
            }
            return true;
        };
        let c = 0;
        for (let d of e.children){
            if (!d) {
                continue;
            }
            let f = d.startIndex - e.startIndex;
            if (!p(c, f)) {
                return {
                    kind: "too-complex",
                    reason: "command substitution contains bytes no parsed node accounts for"
                };
            }
            c = d.endIndex - e.startIndex;
        }
        if (!p(c, a.length)) {
            return {
                kind: "too-complex",
                reason: "command substitution contains bytes no parsed node accounts for"
            };
        }
    }
    for (let a of e.children){
        if (!a) {
            continue;
        }
        if (a.type === "$(" || a.type === "`" || a.type === ")") {
            continue;
        }
        if (a.type !== "comment") {
            l = true;
        }
        let h = E(a, t, o, s);
        if (h) {
            return h;
        }
    }
    if (l && t.length === t_length) {
        C(t, e);
    }
    return null;
}
function v(e, t, r, s) {
    if (!e) {
        return {
            kind: "too-complex",
            reason: "Null argument node"
        };
    }
    switch(e.type){
        case "word":
            {
                if (K.test(e.text)) {
                    return {
                        kind: "too-complex",
                        reason: "Word contains brace expansion syntax",
                        nodeType: "word",
                        differential: true
                    };
                }
                if (ue.test(e.text) || fe.test(e.text)) {
                    return {
                        kind: "too-complex",
                        reason: "Brace body contains backslash-escaped brace",
                        nodeType: "word",
                        differential: true
                    };
                }
                if (ext.test(e.text)) {
                    return {
                        kind: "too-complex",
                        reason: "Word contains unescaped ` or $ — parser missed expansion",
                        nodeType: "word",
                        differential: true
                    };
                }
                if (txt.test(e.text)) {
                    return {
                        kind: "too-complex",
                        reason: "Word contains unescaped quote — parser absorbed quote into brace-body word",
                        nodeType: "word"
                    };
                }
                return e.text.replace(/\\(.)/g, "$1");
            }
        case "number":
            if (e.children.length > 0) {
                return {
                    kind: "too-complex",
                    reason: "Number node contains expansion (NN# arithmetic base syntax)",
                    nodeType: e.children[0]?.type
                };
            }
            return e.text;
        case "raw_string":
            return st(e.text);
        case "string":
            return it(e, t, r, s);
        case "concatenation":
            {
                if (K.test(e.text)) {
                    return {
                        kind: "too-complex",
                        reason: "Brace expansion",
                        nodeType: "concatenation",
                        differential: true
                    };
                }
                if (ue.test(e.text) || fe.test(e.text)) {
                    return {
                        kind: "too-complex",
                        reason: "Brace body contains backslash-escaped brace",
                        nodeType: "concatenation",
                        differential: true
                    };
                }
                let o = "";
                let n = false;
                let l = e.startIndex;
                for(let a = 0; a < e.children.length; a++){
                    let child = e.children[a];
                    if (!child) {
                        continue;
                    }
                    if (child.startIndex > l) {
                        return {
                            kind: "too-complex",
                            reason: "Concatenation has unparsed bytes between children — parser dropped content that shell will see",
                            nodeType: "concatenation"
                        };
                    }
                    l = child.endIndex;
                    if (child.type === "word" && child.text.includes("{")) {
                        n = true;
                    }
                    if ((child.type === "simple_expansion" || child.type === "expansion") && (e.children[a + 1]?.text.startsWith("[") || /^:[a-zA-Z&]/.test(e.children[a + 1]?.text ?? ""))) {
                        return {
                            kind: "too-complex",
                            reason: "zsh $name[expr] / $name:mod in bare concatenation — recursive eval",
                            nodeType: "concatenation",
                            differential: true
                        };
                    }
                    let p = v(child, t, r, s);
                    if (typeof p !== "string") {
                        return p;
                    }
                    o += p;
                }
                if (n && (o.includes(",") || o.includes(".."))) {
                    return {
                        kind: "too-complex",
                        reason: "Brace expansion (unquoted `{` in concatenation with `,`/`..`)",
                        nodeType: "concatenation"
                    };
                }
                if (WLn.test(o)) {
                    return {
                        kind: "too-complex",
                        reason: "zsh ~[ dynamic directory syntax (post-collapse)",
                        nodeType: "concatenation",
                        differential: true
                    };
                }
                if (zLn.test(o)) {
                    return {
                        kind: "too-complex",
                        reason: "zsh =cmd expansion (post-collapse)",
                        nodeType: "concatenation",
                        differential: true
                    };
                }
                return o;
            }
        case "arithmetic_expansion":
            {
                A++;
                let o = Ae(e);
                if (o) {
                    return o;
                }
                return _;
            }
        case "simple_expansion":
            A++;
            return Z(e, r, false);
        default:
            return b(e);
    }
}
function it(e, t, r, s) {
    let o = "";
    let n = -1;
    let l = false;
    let a = false;
    let h = false;
    for (let p of e.children){
        if (!p) {
            continue;
        }
        if (n !== -1 && p.startIndex > n) {
            let c = Buffer.from(e.text, "utf8").subarray(n - e.startIndex, p.startIndex - e.startIndex).toString("utf8");
            if (c.includes("`")) {
                return {
                    kind: "too-complex",
                    reason: "Unanalyzable backtick body in double-quoted string gap — shell-evaluated value unknown",
                    nodeType: "string",
                    differential: true
                };
            }
            if (c.length > 0) {
                o += c;
                a = true;
            }
        }
        n = p.endIndex;
        switch(p.type){
            case '"':
                n = p.endIndex;
                break;
            case "string_content":
                o += p.text.replace(/\\\n/g, "").replace(/\\([$`"\\])/g, "$1");
                a = true;
                break;
            case Ne:
                {
                    let c = e.children.indexOf(p);
                    let d = e.children[c + 1];
                    if (d?.type === "string_content") {
                        if (d.text.startsWith("[")) {
                            return {
                                kind: "too-complex",
                                reason: "Legacy $[...] arithmetic inside double-quotes — recursive subscript eval",
                                nodeType: "string",
                                differential: true
                            };
                        }
                        if (/^[+^=~]/.test(d.text)) {
                            return {
                                kind: "too-complex",
                                reason: "zsh $+/$^/$=/$~ prefix-flag expansion — value defeats downstream content checks",
                                nodeType: "string",
                                differential: true
                            };
                        }
                        let f = e.children[c - 1];
                        if (/^:[a-zA-Z&]/.test(d.text) && f?.type === "simple_expansion" && f.endIndex === p.startIndex && f.children.some((g)=>g?.type === "special_variable_name")) {
                            return {
                                kind: "too-complex",
                                reason: 'zsh "$name[expr]" / "$name:mod" inside double-quotes — recursive eval',
                                nodeType: "string",
                                differential: true
                            };
                        }
                    }
                    o += Ne;
                    a = true;
                    break;
                }
            case "command_substitution":
                {
                    let c = Jt(p);
                    if (c === "DANGEROUS") {
                        return b(p);
                    }
                    if (c !== null) {
                        let f = c.replace(/\n+$/, "");
                        if (gt.test(p.text)) {
                            P++;
                        }
                        if (f.includes(`
`)) {
                            if (/^--?[A-Za-z0-9]/.test(o + f)) {
                                return {
                                    kind: "too-complex",
                                    reason: "cat-heredoc body would make the argument start with option syntax",
                                    nodeType: "command_substitution"
                                };
                            }
                            j++;
                            o += `
` + R;
                            a = true;
                            break;
                        }
                        j++;
                        o += f;
                        a = true;
                        break;
                    }
                    let d = Re(p, t, r, s);
                    if (d) {
                        return d;
                    }
                    A++;
                    o += R;
                    l = true;
                    break;
                }
            case "simple_expansion":
                {
                    A++;
                    let c = Z(p, r, true);
                    if (typeof c !== "string") {
                        return c;
                    }
                    {
                        let d = e.children[e.children.indexOf(p) + 1];
                        let f = p.children.some((g)=>g?.type === "special_variable_name");
                        if (d?.type === "string_content" && (d.text.startsWith("[") || /^:[a-zA-Z&]/.test(d.text) || f && Bt.test(d.text))) {
                            return {
                                kind: "too-complex",
                                reason: 'zsh "$name[expr]" / "$name:mod" inside double-quotes — recursive eval',
                                nodeType: "string",
                                differential: true
                            };
                        }
                    }
                    if (Vs(c)) {
                        l = true;
                    } else if (c !== "") {
                        a = true;
                    } else {
                        h = true;
                    }
                    o += c;
                    break;
                }
            case "arithmetic_expansion":
                {
                    let c = Ae(p);
                    if (c) {
                        return c;
                    }
                    A++;
                    o += _;
                    l = true;
                    break;
                }
            default:
                return b(p);
        }
    }
    if (l) {
        if ([
            ...o.replaceAll(R, "").replaceAll(_, "")
        ].length <= 1) {
            return b(e);
        }
    }
    if (!a && !l && !h && e.text.length > 2) {
        let p = e.text.slice(1, -1);
        if (p.includes("`") || p.includes("$(")) {
            return {
                kind: "too-complex",
                reason: "Delimiters-only string node contains unparsed command substitution",
                nodeType: "string",
                differential: true
            };
        }
        return p;
    }
    return o;
}
const Qt = /^(?:[0-9]+|0[xX][0-9a-fA-F]+|[0-9]+#[0-9a-zA-Z]+|[-+*/%^&|~!<>=?:(),]+|<<|>>|\*\*|&&|\|\||[<>=!]=|\$\(\(|\)\))$/;
function Ae(e) {
    for (let t of e.children){
        if (!t) {
            continue;
        }
        if (t.children.length === 0) {
            if (!Qt.test(t.text)) {
                return {
                    kind: "too-complex",
                    reason: `Arithmetic expansion references variable or non-literal: ${t.text}`,
                    nodeType: "arithmetic_expansion"
                };
            }
            continue;
        }
        switch(t.type){
            case "binary_expression":
            case "unary_expression":
            case "ternary_expression":
            case "parenthesized_expression":
                {
                    let r = Ae(t);
                    if (r) {
                        return r;
                    }
                    break;
                }
            default:
                return b(t);
        }
    }
    return null;
}
function C(e, t) {
    e.push({
        argv: [
            "true"
        ],
        envVars: [],
        redirects: [],
        text: t.text,
        hasUnquotedGlob: T(t.text)
    });
}
function ge(e) {
    if (e.type === "arithmetic_expansion") {
        return true;
    }
    for (let t of e.children){
        if (t && ge(t)) {
            return true;
        }
    }
    return false;
}
function Jt(e) {
    let t = null;
    for (let o of e.children){
        if (!o) {
            continue;
        }
        if (o.type === "$(" || o.type === ")") {
            continue;
        }
        if (o.type === "redirected_statement" && t === null) {
            t = o;
        } else {
            return null;
        }
    }
    if (!t) {
        return null;
    }
    let r = false;
    let s = null;
    for (let o of t.children){
        if (!o) {
            continue;
        }
        if (o.type === "command") {
            let n = o.children.filter((a)=>a);
            if (n.length !== 1) {
                return null;
            }
            let l = n[0];
            if (l?.type !== "command_name" || l.text !== "cat") {
                return null;
            }
            r = true;
        } else if (o.type === "heredoc_redirect") {
            if (he(o) !== null) {
                return null;
            }
            for (let n of o.children){
                if (n?.type === "<<-") {
                    return null;
                }
                if (n?.type === "heredoc_body") {
                    s = n.text;
                }
            }
        } else {
            return null;
        }
    }
    if (!r || s === null) {
        return null;
    }
    if (_e.test(s)) {
        return "DANGEROUS";
    }
    if (rxt(s) !== false) {
        return "DANGEROUS";
    }
    return s;
}
function xe(e, t, r, s) {
    let o = null;
    let n = "";
    let l = false;
    for (let a of e.children){
        if (!a) {
            continue;
        }
        if (a.type === "variable_name") {
            o = a.text;
        } else if (a.type === "=" || a.type === "+=") {
            l = a.type === "+=";
            continue;
        } else if (a.type === "command_substitution") {
            let h = Re(a, t, r, s);
            if (h) {
                return h;
            }
            n = R;
        } else if (a.type === "simple_expansion") {
            let h = Z(a, r, true);
            if (typeof h !== "string") {
                return h;
            }
            n = h;
        } else {
            let h = v(a, t, r, s);
            if (typeof h !== "string") {
                return h;
            }
            n = h;
        }
    }
    if (o === null) {
        return {
            kind: "too-complex",
            reason: "Variable assignment without name",
            nodeType: "variable_assignment"
        };
    }
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(o)) {
        return {
            kind: "too-complex",
            reason: `Invalid variable name (bash treats as command): ${o}`,
            nodeType: "variable_assignment"
        };
    }
    if (o === "IFS") {
        return {
            kind: "too-complex",
            reason: "IFS assignment changes word-splitting — cannot model statically",
            nodeType: "variable_assignment"
        };
    }
    if (o === "PS4" || o === "PROMPT4") {
        if (l) {
            return {
                kind: "too-complex",
                reason: "PS4 += cannot be statically verified — combine into a single PS4= assignment",
                nodeType: "variable_assignment"
            };
        }
        if (Vs(n)) {
            return {
                kind: "too-complex",
                reason: "PS4 value derived from cmdsub/variable — runtime unknowable",
                nodeType: "variable_assignment"
            };
        }
        if (!/^[A-Za-z0-9 _+:./=[\]-]*$/.test(n.replace(/\$\{[A-Za-z_][A-Za-z0-9_]*\}/g, ""))) {
            return {
                kind: "too-complex",
                reason: "PS4 value outside safe charset — only ${VAR} refs and [A-Za-z0-9 _+:.=/[]-] allowed",
                nodeType: "variable_assignment"
            };
        }
    }
    if (n.includes("~")) {
        return {
            kind: "too-complex",
            reason: "Tilde in assignment value — bash may expand at assignment time",
            nodeType: "variable_assignment"
        };
    }
    return {
        name: o,
        value: n,
        isAppend: l
    };
}
var KLn = new Set([
    "_",
    "RANDOM",
    "SECONDS",
    "LINENO",
    "BASH_COMMAND",
    "FUNCNAME",
    "EPOCHSECONDS",
    "EPOCHREALTIME",
    "SRANDOM",
    "BASHPID",
    "BASH_MONOSECONDS",
    "BASH_TRAPSIG",
    "HISTCMD",
    "ERRNO",
    "REPLY",
    "reply",
    "PIPESTATUS",
    "pipestatus",
    "BASH_SOURCE",
    "DIRSTACK",
    "GROUPS",
    "BASH_ARGV",
    "BASH_ARGC",
    "BASH_SUBSHELL",
    "BASH_LINENO",
    "BASH_ARGV0",
    "BASH_REMATCH",
    "MATCH",
    "match",
    "MBEGIN",
    "MEND",
    "mbegin",
    "mend",
    "OPTARG",
    "OPTIND",
    "argv",
    "FIGNORE",
    "fignore",
    "PSVAR",
    "psvar",
    "WATCH",
    "watch",
    "HISTCHARS",
    "histchars",
    "PS1",
    "PROMPT",
    "prompt",
    "PS2",
    "PROMPT2",
    "PS3",
    "PROMPT3",
    "PS4",
    "PROMPT4",
    "RPS1",
    "RPROMPT",
    "RPS2",
    "RPROMPT2"
]);
function Z(e, t, r) {
    let s = null;
    let o = false;
    for (let l of e.children){
        if (l?.type === "variable_name") {
            s = l.text;
            break;
        }
        if (l?.type === "special_variable_name") {
            s = l.text;
            o = true;
            break;
        }
    }
    if (s === null) {
        return b(e);
    }
    let n = t.get(s);
    if (n !== undefined) {
        if (KLn.has(s)) {
            if (r && le.has(s) && s !== "BASHPID") {
                return _;
            }
            return b(e);
        }
        if (Vs(n)) {
            if (!r) {
                return b(e);
            }
            return n;
        }
        if (!r) {
            if (n === "") {
                return b(e);
            }
            if (ve.test(n)) {
                return b(e);
            }
        }
        return n;
    }
    if (s === "HOME") {
        let l = homedir();
        if (!r && (l === "" || ve.test(l))) {
            return b(e);
        }
        return l;
    }
    if (r) {
        if (le.has(s)) {
            return _;
        }
        if (o && (kt.has(s) || /^[0-9]+$/.test(s))) {
            return _;
        }
    }
    return b(e);
}
function ae(e, t) {
    U(t, e);
}
function Le(e, t) {
    let r = ()=>{
        for (let s of t.keys()){
            t.set(s, _);
        }
    };
    for (let s of e){
        if (s?.type === "unset" && s.text === "unsetenv") {
            return;
        }
        if (!s || s.type === "unset" || s.type === "file_redirect" || s.type === "heredoc_redirect" || s.type === "herestring_redirect") {
            continue;
        }
        if (s.type === "variable_name") {
            t.set(s.text.replace(/\\/g, ""), _);
            continue;
        }
        if (s.type === "word") {
            if (s.text.startsWith("-")) {
                if (s.text === "--" || /^-[fvn]+$/.test(s.text)) {
                    continue;
                }
                r();
                continue;
            }
            if (/^\\?[A-Za-z_][A-Za-z0-9_]*$/.test(s.text)) {
                t.set(s.text.replace(/^\\/, ""), _);
                continue;
            }
        }
        r();
    }
}
function ye(e) {
    if (!e) {
        return null;
    }
    switch(e.type){
        case "word":
        case "number":
            return e.text.replace(/\\(.)/g, "$1");
        case "raw_string":
            return e.text.slice(1, -1);
        case "string":
            {
                let t = e.children.filter((r)=>r && r.type !== '"');
                if (t.length === 0) {
                    return "";
                }
                if (t.length === 1 && t[0]?.type === "string_content") {
                    return t[0].text;
                }
                return null;
            }
        case "concatenation":
            {
                let t = "";
                for (let r of e.children){
                    let s = ye(r);
                    if (s === null) {
                        return null;
                    }
                    t += s;
                }
                return t;
            }
        default:
            return null;
    }
}
function U(e, t) {
    if (e.type === "function_definition" || e.type === "subshell" || e.type === "command_substitution" || e.type === "process_substitution") {
        return;
    }
    if (e.type === "pipeline") {
        let r = null;
        for (let s of e.children){
            if (s && !Y.has(s.type)) {
                r = s;
            }
        }
        if (r) {
            U(r, t);
        }
        return;
    }
    if (e.type === "list" || e.type === "program") {
        let r = e.children;
        for(let s = 0; s < r.length; s++){
            let o = r[s];
            if (!o || Y.has(o.type)) {
                continue;
            }
            let n = s + 1;
            while(n < r.length && !r[n]){
                n++;
            }
            if (r[n]?.type === "&") {
                continue;
            }
            U(o, t);
        }
        return;
    }
    if (e.type === "variable_assignment") {
        for (let r of e.children){
            if (r?.type === "variable_name") {
                t.set(r.text, _);
                break;
            }
        }
    }
    if (e.type === "for_statement") {
        for (let r of e.children){
            if (r?.type === "variable_name") {
                t.set(r.text, _);
                break;
            }
        }
    }
    if (e.type === "unset_command") {
        Le(e.children, t);
    }
    if (e.type === "command") {
        let r;
        let s;
        let o = [];
        let n = [];
        let l = false;
        for (let u of e.children){
            if (!u) {
                continue;
            }
            if (u.type === "command_name") {
                s = u;
                r = ye(u.children[0] ?? u) ?? undefined;
                l = true;
            } else if (!l || u.type === "file_redirect" || u.type === "herestring_redirect" || u.type === "heredoc_redirect") ;
            else {
                o.push(ye(u) ?? "");
                n.push(u);
            }
        }
        let a = false;
        let h;
        while(r !== undefined && (me.has(r) || r === "!")){
            if ((h === "builtin" || h === "command") && r !== "builtin" && r !== "command" && r !== "noglob") {
                a = true;
            }
            let u = r === "!" ? undefined : r;
            while(o.length > 0){
                let m = o[0];
                if (/^-[-pvV]*$/.test(m)) {
                    if (/[vV]/.test(m)) {
                        a = true;
                    }
                    o.shift();
                    n.shift();
                } else if (/^[A-Za-z_]\w*(\[[^\]]*\])?\+?=/.test(m)) {
                    let x = m.match(/^[A-Za-z_][A-Za-z0-9_]*/)[0];
                    t.set(x, _);
                    o.shift();
                    n.shift();
                    u = undefined;
                } else {
                    break;
                }
            }
            h = u;
            r = o.shift();
            n.shift();
        }
        let p = o;
        let c = (u)=>{
            if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(u)) {
                t.set(u, _);
            }
        };
        if (r === "read") {
            t.set("REPLY", _);
            let u = 0;
            let m = false;
            while(u < p.length){
                let x = p[u];
                if (!m && x === "--") {
                    m = true;
                    u++;
                    continue;
                }
                if (!m && x.startsWith("-")) {
                    if (RNe.has(x)) {
                        u += 2;
                        continue;
                    }
                    let y = false;
                    for(let k = 1; k < x.length; k++){
                        let w = x[k];
                        if (w === "a" || w === "A") {
                            c(k < x.length - 1 ? x.slice(k + 1) : p[u + 1] ?? "");
                            y = k === x.length - 1;
                            break;
                        }
                        if (RNe.has(`-${w}`)) {
                            y = k === x.length - 1;
                            break;
                        }
                    }
                    u += y ? 2 : 1;
                    continue;
                }
                c(x);
                u++;
            }
        } else if (r === "mapfile" || r === "readarray") {
            t.set("MAPFILE", _);
            for(let u = 0; u < p.length; u++){
                let m = p[u];
                if (m.startsWith("-")) {
                    if (/^-[dnOsuCc]$/.test(m)) {
                        u++;
                    }
                    continue;
                }
                c(m);
            }
        } else if (r === "unset" && !a) {
            Le(n, t);
        }
        let d = s?.children[0];
        let f = d?.type === "word" ? d.text.replace(/\\(.)/g, "$1") : undefined;
        let g = f !== undefined && !qLn.has(f) && !me.has(f) && !(I === undefined ? Ee : rt).has(f);
        for (let u of e.children){
            if (u && (u.type !== "variable_assignment" || !g)) {
                U(u, t);
            }
        }
        return;
    }
    if (e.type === "declaration_command") {
        for (let r of e.children){
            if (r?.type === "string" || r?.type === "raw_string" || r?.type === "word" || r?.type === "number" || r?.type === "concatenation" || r?.type === "variable_name") {
                let s = r.text.replace(/['"\\]/g, "");
                let o = /^([A-Za-z_][A-Za-z0-9_]*)\+?=/.exec(s);
                if (o) {
                    t.set(o[1], _);
                } else {
                    let n = s.indexOf("=");
                    if (n > 0 && s.lastIndexOf("$", n - 1) !== -1) {
                        for (let l of [
                            ...t.keys()
                        ]){
                            t.set(l, _);
                        }
                    }
                }
            }
        }
    }
    for (let r of e.children){
        if (r) {
            U(r, t);
        }
    }
}
function F(e, t) {
    for (let [r, s] of t){
        let o = e.get(r);
        if (o !== undefined && o !== s) {
            if (H.get(r) === s) {
                B = true;
            }
            e.set(r, _);
        }
    }
    for (let r of e.keys()){
        if (!t.has(r)) {
            e.set(r, _);
        }
    }
}
function oe(e, t, r = false) {
    if (r) {
        e.set(t.name, _);
        return;
    }
    if (t.isAppend && !e.has(t.name)) {
        return;
    }
    let s = e.get(t.name);
    if (s !== undefined && s !== t.value && !t.isAppend && !Vs(t.value)) {
        e.set(t.name, _);
        return;
    }
    let o = t.isAppend ? (s ?? "") + t.value : t.value;
    e.set(t.name, o);
}
function st(text) {
    return text.slice(1, -1);
}
function at(e) {
    for (let t of e.children){
        if (!t) {
            continue;
        }
        if (t.type === "simple_expansion" || t.type === "expansion") {
            return true;
        }
        if (at(t)) {
            return true;
        }
    }
    return false;
}
function en(text) {
    if (text === "~" || text.startsWith("~/")) {
        return "HOME";
    }
    if (text === "~+" || text.startsWith("~+/")) {
        return "PWD";
    }
    if (text === "~-" || text.startsWith("~-/")) {
        return "OLDPWD";
    }
    return null;
}
function ot(e, t) {
    let r = e.type === "variable_assignment";
    for (let s of e.children){
        if (!s) {
            continue;
        }
        if (s.type === "variable_name") {
            if (r) {
                continue;
            }
            if (t.has(s.text)) {
                return s.text;
            }
        }
        if (s.type === "word") {
            let n = en(s.text);
            if (n !== null && t.has(n)) {
                return n;
            }
        }
        let o = ot(s, t);
        if (o !== null) {
            return o;
        }
    }
    return null;
}
function b(e) {
    if (e.type === "ERROR") {
        return {
            kind: "too-complex",
            reason: We(e.text) || e.text.startsWith("${") && Fyr(e.text) ? "A $ followed by non-ASCII text in this command can't be checked before it runs" : "Parse error",
            nodeType: e.type
        };
    }
    let t = tn.get(e.type);
    return {
        kind: "too-complex",
        reason: `${t === undefined ? "This command" : `${t} in this command`} can't be checked before it runs`,
        nodeType: e.type
    };
}
var tn = new Map([
    [
        "simple_expansion",
        "A variable"
    ],
    [
        "expansion",
        "A variable in braces"
    ],
    [
        "command_substitution",
        "A nested command"
    ],
    [
        "process_substitution",
        "A command used as a file"
    ],
    [
        "brace_expression",
        "A brace pattern"
    ],
    [
        "ansi_c_string",
        "Text with escape codes"
    ],
    [
        "translated_string",
        "Translatable text"
    ],
    [
        "test_command",
        "A test in brackets"
    ],
    [
        "herestring_redirect",
        "A here-string"
    ],
    [
        "heredoc_redirect",
        "A here-document"
    ],
    [
        "subshell",
        "A group in parentheses"
    ],
    [
        "compound_statement",
        "A group in braces or double parentheses"
    ],
    [
        "for_statement",
        "A for or select loop"
    ],
    [
        "c_style_for_statement",
        "A counting for loop"
    ],
    [
        "while_statement",
        "A while or until loop"
    ],
    [
        "until_statement",
        "An until loop"
    ],
    [
        "if_statement",
        "An if statement"
    ],
    [
        "case_statement",
        "A case statement"
    ],
    [
        "function_definition",
        "A function definition"
    ],
    [
        "array",
        "A list of values"
    ],
    [
        "string",
        "Quoted text"
    ],
    [
        "file_redirect",
        "A file redirect"
    ],
    [
        "pipeline",
        "A pipeline"
    ],
    [
        "concatenation",
        "Joined pieces of text"
    ],
    [
        "variable_assignment",
        "A variable assignment"
    ],
    [
        "variable_assignments",
        "Variable assignments"
    ]
]);
function Xdo(e) {
    let t = [];
    let r = 0;
    let s = false;
    let o = false;
    while(r < e.length){
        let n = e[r];
        if (n === "\\" && !s) {
            r += 2;
            continue;
        }
        if (n === "'" && !o) {
            s = !s;
            r++;
            continue;
        }
        if (n === '"' && !s) {
            o = !o;
            r++;
            continue;
        }
        if (!s && n === "$" && e[r + 1] === "{") {
            let l = 1;
            let a = r + 2;
            let h = false;
            let p = false;
            while(a < e.length && l > 0){
                let c = e[a];
                if (c === "\\" && !h) {
                    a += 2;
                    continue;
                }
                if (c === "'" && !p) {
                    h = !h;
                } else if (c === '"' && !h) {
                    p = !p;
                } else if (!h && !p) {
                    if (c === "{") {
                        l++;
                    } else if (c === "}") {
                        l--;
                    }
                }
                a++;
            }
            t.push(e.slice(r + 2, l === 0 ? a - 1 : a));
            r = a;
            continue;
        }
        r++;
    }
    return t;
}
function WXt(e) {
    let t = "";
    let r = false;
    let s = false;
    for(let o = 0; o < e.length; o++){
        let n = e[o];
        if (r) {
            if (n === "'") {
                r = false;
                t += n;
            }
            continue;
        }
        if (n === "\\" && !r) {
            let l = e[o + 1];
            o++;
            if (l !== undefined && !"$'\"`\\".includes(l)) {
                t += l;
            }
            continue;
        }
        if (n === '"') {
            s = !s;
            t += n;
            continue;
        }
        if (n === "'" && !s) {
            r = true;
            t += n;
            continue;
        }
        t += n;
    }
    return t;
}
function CNe(e) {
    let t = "";
    let r;
    for(let s = 0; s < e.length; s++){
        let o = e[s];
        if (r === "'") {
            if (o === "'") {
                r = undefined;
            }
            continue;
        }
        if (r === '"') {
            if (o === "\\") {
                s++;
            } else if (o === '"') {
                r = undefined;
            }
            continue;
        }
        if (o === "\\") {
            s++;
            continue;
        }
        if (o === "'" || o === '"') {
            r = o;
            continue;
        }
        t += o;
    }
    return t;
}
const wCe = new Set([
    "zmodload",
    "emulate",
    "sysopen",
    "sysread",
    "syswrite",
    "sysseek",
    "zpty",
    "ztcp",
    "zsocket",
    "zf_rm",
    "zf_mv",
    "zf_ln",
    "zf_chmod",
    "zf_chown",
    "zf_mkdir",
    "zf_rmdir",
    "zf_chgrp",
    "repeat",
    "foreach",
    "zcompile",
    "setopt",
    "unsetopt",
    "disable",
    "shopt",
    "autoload",
    "functions"
]);
const nn = new Set([
    "-exec",
    "-execdir",
    "-ok",
    "-okdir",
    "-delete",
    "-rm",
    "-fprint",
    "-fprint0",
    "-fprintf",
    "-fls",
    "-files0-from"
]);
function zXt(e) {
    return nn.has(e) && vjn(e);
}
const rn = new Set([
    "-name",
    "-iname",
    "-path",
    "-ipath",
    "-lname",
    "-ilname",
    "-regex",
    "-iregex",
    "-wholename",
    "-iwholename",
    "-samefile",
    "-newer",
    "-anewer",
    "-cnewer",
    "-mnewer",
    "-perm",
    "-user",
    "-group",
    "-uid",
    "-gid",
    "-size",
    "-type",
    "-xtype",
    "-fstype",
    "-inum",
    "-links",
    "-used",
    "-context",
    "-amin",
    "-cmin",
    "-mmin",
    "-atime",
    "-ctime",
    "-mtime",
    "-mindepth",
    "-maxdepth",
    "-printf",
    "-regextype",
    "-D",
    "-f",
    "-flags",
    "-Bnewer",
    "-Btime",
    "-Bmin",
    "-files0-from",
    "-xattrname"
]);
const sn = /^-newer[aBcm][aBcmt]$/;
const lt = /^-(?:[EHLPXdsx]*D|f|[dsx]*[EHLPX][EHLPXdsx]*f)$/;
const an = /^-[dsx]+f$/;
function nxt(e) {
    return rn.has(e) || sn.test(e) || lt.test(e);
}
function GXt(e) {
    return lt.test(e);
}
function VXt(e) {
    return an.test(e);
}
const FQ = new Set([
    "eval",
    "source",
    ".",
    "exec",
    "nocorrect",
    "fc",
    "coproc",
    "trap",
    "enable",
    "mapfile",
    "readarray",
    "hash",
    "bind",
    "complete",
    "compgen",
    "alias",
    "let"
]);
const vCe = new Set([
    "awk",
    "gawk",
    "mawk",
    "nawk"
]);
const on = /^(?:-[FvW]$|--(?:fie|a$|as))/;
function rxt(e) {
    if (/(?<![A-Za-z_])system[\s\\]*\(/.test(e)) {
        return "awk program contains system() which executes arbitrary commands";
    }
    if (/(?:^|[^|])\|&?[^/|%";#{}]*"/.test(e) || /(?:^|[^|])\|&?[\s\\]*getline\b/.test(e)) {
        return 'awk program contains a command pipe (| "cmd" or | getline) which executes arbitrary commands';
    }
    if (/@[\s\\]*(?:load|include)\b|@[\s\\]*\w+(?:::\w+)?(?:\[[^\]]*\])*[\s\\]*\(/.test(e)) {
        return "awk program contains @load/@include or an @indirect call which can execute arbitrary code";
    }
    if (/(?<![A-Za-z_])extension[\s\\]*\(/.test(e)) {
        return "awk program contains extension() which loads arbitrary native code (legacy gawk)";
    }
    if (/"\/inet[46]?\//.test(e)) {
        return "awk program opens a gawk /inet/ network socket which can exfiltrate data";
    }
    return false;
}
const ode = new Set([
    "bash",
    "sh",
    "zsh",
    "dash",
    "ksh",
    "mksh",
    "ash",
    "hush",
    "rbash"
]);
const qXt = new Set([
    "busybox",
    "toybox",
    "wsl",
    "su",
    "runuser"
]);
const zM = new Set([
    ...ode,
    "fish",
    "csh",
    "tcsh",
    "rsh",
    ...qXt,
    "cmd",
    "powershell",
    "pwsh"
]);
const ECe = new Set([
    "time",
    "command",
    "builtin",
    "noglob",
    "env",
    "nice",
    "nohup",
    "sudo",
    "doas",
    "stdbuf",
    "timeout"
]);
const D5 = new Set([
    "watch",
    "ionice",
    "chrt",
    "setsid",
    "taskset",
    "strace",
    "ltrace",
    "script",
    "flock",
    "unshare",
    "nsenter"
]);
function Jdo(e) {
    let t = e.replace(/^.*[\\/]/, "");
    return FQ.has(e) || wCe.has(e) || D5.has(e) || D5.has(t) || t === "rm" || t === "rmdir";
}
const Dyr = {
    test: new Set([
        "-v",
        "-R",
        "-t"
    ]),
    "[": new Set([
        "-v",
        "-R",
        "-t"
    ]),
    "[[": new Set([
        "-v",
        "-R",
        "-t"
    ]),
    printf: new Set([
        "-v"
    ]),
    read: new Set([
        "-a"
    ]),
    unset: new Set([
        "-v"
    ]),
    wait: new Set([
        "-p"
    ])
};
const W4e = new Set([
    "-eq",
    "-ne",
    "-lt",
    "-le",
    "-gt",
    "-ge"
]);
const xit = /^-?(0[xX][0-9a-fA-F]+|[0-9]+#[0-9a-zA-Z]+|[0-9]+)$/;
const Lyr = new Set([
    "read",
    "unset"
]);
const Me = new Set([
    "declare",
    "typeset",
    "local",
    "export",
    "readonly",
    "private",
    "float",
    "integer"
]);
const Pit = new Set([
    "declare",
    "typeset",
    "local",
    "export",
    "readonly",
    "print",
    "getopts",
    "set",
    "zparseopts",
    "zformat",
    "zstyle",
    "autoload",
    "shift",
    "exit",
    "return",
    "break",
    "continue",
    "bye",
    "logout",
    "vared",
    "private",
    "getln",
    "zregexparse",
    "float",
    "integer"
]);
const KXt = new Set([
    "pipefail",
    "errexit",
    "nounset",
    "xtrace",
    "noglob",
    "noclobber",
    "verbose",
    "monitor",
    "notify",
    "vi",
    "emacs",
    "errtrace",
    "functrace",
    "hashall",
    "physical",
    "ignoreeof"
]);
const YXt = new Set([
    "e",
    "u",
    "x",
    "f",
    "C",
    "v",
    "m",
    "b",
    "E",
    "T",
    "h",
    "P",
    "n"
]);
const ln = new Set([
    "path",
    "home",
    "dirstack",
    "tmpprefix",
    "bash_env",
    "env",
    "cdpath",
    "globignore",
    "shell",
    "fpath",
    "bash_loadables_path",
    "module_path",
    "manpath",
    "mailpath",
    "readnullcmd",
    "nullcmd",
    "histfile",
    "zdotdir",
    "functions",
    "commands",
    "aliases",
    "galiases",
    "saliases",
    "bash_cmds",
    "bash_aliases",
    "execignore",
    "bash_source_path",
    "lang",
    "language",
    "lc_all",
    "lc_ctype",
    "lc_collate",
    "lc_messages",
    "lc_numeric",
    "lc_time",
    "histchars",
    "textdomain",
    "textdomaindir"
]);
var oxt = new Set([
    "RANDOM",
    "SECONDS",
    "LINENO",
    "OPTIND",
    "MAILCHECK",
    "HISTCMD",
    "SRANDOM",
    "EPOCHSECONDS",
    "EPOCHREALTIME",
    "BASHPID",
    "BASH_MONOSECONDS",
    "BASH_TRAPSIG",
    "COLUMNS",
    "LINES",
    "SHLVL",
    "ERRNO",
    "TMOUT",
    "HISTSIZE",
    "SAVEHIST",
    "TRY_BLOCK_ERROR",
    "TRY_BLOCK_INTERRUPT",
    "KEYTIMEOUT",
    "LISTMAX",
    "LOGCHECK",
    "PERIOD",
    "FUNCNEST",
    "UID",
    "EUID",
    "GID",
    "EGID",
    "REPORTTIME",
    "REPORTMEMORY",
    "DIRSTACKSIZE",
    "BAUD",
    "ZLE_RPROMPT_INDENT",
    "MBEGIN",
    "MEND",
    "PPID",
    "ARGC",
    "ZSH_SUBSHELL",
    "TTYIDLE",
    "status"
]);
function ct(name, t) {
    if (!oxt.has(name)) {
        return false;
    }
    if (t.includes("[") || t.includes("`") || /\$\(/.test(t) || Vs(t)) {
        return true;
    }
    if (!/^(0|[1-9][0-9]{0,17})$/.test(t)) {
        return true;
    }
    return false;
}
function z4e(e) {
    let t = e.toLowerCase();
    return ln.has(t) || t.startsWith("ld_") || t.startsWith("dyld_") || t.startsWith("bash_func_");
}
function L5(e) {
    return z4e(e) || e === "IFS" || e === "PS4" || e === "PROMPT4" || oxt.has(e);
}
var RNe = new Set([
    "-p",
    "-d",
    "-n",
    "-N",
    "-t",
    "-u",
    "-i"
]);
const YLn = new Set([
    "-t",
    "-n",
    "-N"
]);
const XXt = /^(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/;
const cn = /^[A-Za-z_][A-Za-z0-9_]*\[/;
var un = new Set([
    "-f",
    "-C",
    "-x",
    "-X",
    "-u"
]);
var _e = /\/proc\/.*\/environ/;
var q = /\n\s*#/;
function Nyr(e, t) {
    let r = t?.sourceGlobRecord !== false;
    let s = null;
    for (let o of e){
        let n = o.argv;
        let l = false;
        while(true){
            let c = n[0]?.replace(/^.*[\\/]/, "");
            let d = c === "time" || c === "nohup" || c === "timeout" || c === "nice" || c === "stdbuf" || c === "env" || c === "command" || c === "xargs" ? c : n[0];
            if (d === "time" || d === "nohup") {
                n = n.slice(1);
            } else if (d === "timeout") {
                let f = 1;
                while(f < n.length){
                    let g = n[f];
                    if (g === "--foreground" || g === "--preserve-status" || g === "--verbose") {
                        f++;
                    } else if (/^--(?:kill-after|signal)=[A-Za-z0-9_.+-]+$/.test(g)) {
                        f++;
                    } else if ((g === "--kill-after" || g === "--signal") && n[f + 1] && /^[A-Za-z0-9_.+-]+$/.test(n[f + 1])) {
                        f += 2;
                    } else if (g.startsWith("--")) {
                        return {
                            ok: false,
                            reason: `'timeout ${g}' can't be checked before it runs`
                        };
                    } else if (g === "-v") {
                        f++;
                    } else if ((g === "-k" || g === "-s") && n[f + 1] && /^[A-Za-z0-9_.+-]+$/.test(n[f + 1])) {
                        f += 2;
                    } else if (/^-[ks][A-Za-z0-9_.+-]+$/.test(g)) {
                        f++;
                    } else if (g.startsWith("-")) {
                        return {
                            ok: false,
                            reason: `'timeout ${g}' can't be checked before it runs`
                        };
                    } else {
                        break;
                    }
                }
                if (n[f] && /^\d+(?:\.\d+)?[smhd]?$/.test(n[f])) {
                    n = n.slice(f + 1);
                } else if (n[f]) {
                    return {
                        ok: false,
                        reason: `timeout duration '${n[f]}' can't be checked before it runs`
                    };
                } else {
                    break;
                }
            } else if (d === "nice") {
                if (n[1] === "-n" && n[2] && /^-?\d+$/.test(n[2])) {
                    n = n.slice(3);
                } else if (n[1] && /^-\d+$/.test(n[1])) {
                    n = n.slice(2);
                } else if (n[1] && (/[$(`]/.test(n[1]) || Vs(n[1]))) {
                    return {
                        ok: false,
                        reason: `nice argument '${n[1]}' contains expansion \u2014 cannot statically determine wrapped command`
                    };
                } else {
                    n = n.slice(1);
                }
            } else if (d === "env") {
                let f = 1;
                while(f < n.length){
                    let g = n[f];
                    if (g.includes("=") && !g.startsWith("-")) {
                        f++;
                    } else if (g === "-i" || g === "-0" || g === "-v") {
                        f++;
                    } else if (g === "-u" && n[f + 1]) {
                        f += 2;
                    } else if (g.startsWith("-")) {
                        return {
                            ok: false,
                            reason: `'env ${g}' can't be checked before it runs`
                        };
                    } else {
                        break;
                    }
                }
                if (f < n.length) {
                    n = n.slice(f);
                } else {
                    break;
                }
            } else if (d === "stdbuf") {
                let f = 1;
                while(f < n.length){
                    let g = n[f];
                    if (yt.test(g) && n[f + 1]) {
                        f += 2;
                    } else if (_t.test(g)) {
                        f++;
                    } else if (bt.test(g)) {
                        f++;
                    } else if (g.startsWith("-")) {
                        return {
                            ok: false,
                            reason: `'stdbuf ${g}' can't be checked before it runs`
                        };
                    } else {
                        break;
                    }
                }
                if (f > 1 && f < n.length) {
                    n = n.slice(f);
                } else {
                    break;
                }
            } else if (d === "command") {
                let f = 1;
                let g = false;
                while(f < n.length && n[f].startsWith("-") && n[f] !== "--"){
                    let u = n[f];
                    if (!/^-[pvV]+$/.test(u)) {
                        return {
                            ok: false,
                            reason: `'command ${u}' can't be checked before it runs`
                        };
                    }
                    if (u.includes("v") || u.includes("V")) {
                        g = true;
                    }
                    f++;
                }
                if (n[f] === "--") {
                    f++;
                }
                if (g || f >= n.length) {
                    break;
                }
                n = n.slice(f);
            } else if (n[0] === "builtin" || n[0] === "noglob") {
                let f = n[0] === "builtin" && n[1] === "--" ? 2 : 1;
                if (f < n.length) {
                    n = n.slice(f);
                } else {
                    break;
                }
            } else if (d === "xargs") {
                if (n.length >= 2 && !n[1].startsWith("-")) {
                    n = n.slice(1);
                    l = true;
                } else {
                    break;
                }
            } else {
                break;
            }
        }
        let a = n[0];
        if (a === undefined) {
            continue;
        }
        if (a === "") {
            return {
                ok: false,
                reason: "Empty command name — argv[0] may not reflect what bash runs"
            };
        }
        if (a.includes(R) || a.includes(_)) {
            return {
                ok: false,
                reason: "Command name is runtime-determined (placeholder argv[0])"
            };
        }
        if (a.startsWith("-") || a.startsWith("|") || a.startsWith("&")) {
            return {
                ok: false,
                reason: "Command appears to be an incomplete fragment"
            };
        }
        let h = _s(Dyr, a);
        let p = a === "test" || a === "[" || a === "[[";
        if (h !== undefined) {
            for(let c = 1; c < n.length; c++){
                let d = n[c];
                let f = n[c + 1];
                if (h.has(d) && f !== undefined && (f.includes("[") || Vs(f))) {
                    return {
                        ok: false,
                        reason: `'${a} ${d}' operand contains array subscript or runtime-determined value \u2014 bash evaluates $(cmd) in subscripts`
                    };
                }
                if (p) {
                    if (d === "-t" && f !== undefined && !xit.test(f)) {
                        return {
                            ok: false,
                            reason: `'${a} -t' operand is non-numeric \u2014 zsh arith-evals identifiers (may run $(cmd))`
                        };
                    }
                    continue;
                }
                if (d.length > 2 && d[0] === "-" && d[1] !== "-" && !d.includes("[")) {
                    for (let g of h){
                        if (g.length === 2 && d.includes(g[1])) {
                            let u = n[c + 1];
                            if (u !== undefined && (u.includes("[") || Vs(u))) {
                                return {
                                    ok: false,
                                    reason: `'${a} ${g}' (combined in '${d}') operand contains array subscript \u2014 bash evaluates $(cmd) in subscripts`
                                };
                            }
                        }
                    }
                }
                if (d.length > 2 && d[0] === "-" && a !== "read") {
                    for (let g of h){
                        if (g.length !== 2) {
                            continue;
                        }
                        let u = d.indexOf(g[1], 1);
                        if (u === -1 || u === d.length - 1) {
                            continue;
                        }
                        let m = d.slice(u + 1);
                        if (/[A-Za-z_][A-Za-z0-9_]*\[/.test(m) || Vs(m)) {
                            return {
                                ok: false,
                                reason: `'${a} ${g}' (fused in '${d}') operand contains array subscript \u2014 bash evaluates $(cmd) in subscripts`
                            };
                        }
                    }
                }
            }
        }
        if (p) {
            for(let c = 2; c < n.length; c++){
                if (!W4e.has(n[c])) {
                    continue;
                }
                for (let d of [
                    n[c - 1],
                    n[c + 1]
                ]){
                    if (d === undefined) {
                        continue;
                    }
                    if (d.includes("[") || !xit.test(d)) {
                        return {
                            ok: false,
                            reason: `'${a} ... ${n[c]} ...' operand is non-numeric \u2014 \`[[\` arithmetically evaluates identifiers/subscripts (may run $(cmd))`
                        };
                    }
                }
            }
        }
        if (Lyr.has(a)) {
            let c = false;
            for(let d = 1; d < n.length; d++){
                let f = n[d];
                if (c !== false) {
                    let g = c;
                    c = false;
                    if (g === "numeric" && !XXt.test(f)) {
                        return {
                            ok: false,
                            reason: `'read ${n[d - 1]}' operand '${f}' is non-numeric \u2014 zsh arith-evals subscripts/expressions (may run $(cmd))`
                        };
                    }
                    if (g === "prompt" && (cn.test(f) || f[0] === "-" && /[A-Za-z_][A-Za-z0-9_]*\[/.test(f) || f.includes(R))) {
                        return {
                            ok: false,
                            reason: `'read ${n[d - 1]}' operand '${f}' is a subscripted NAME, dash-prefixed with a subscript, or runtime-determined \u2014 zsh -p takes no operand; may arith-eval the subscript and run $(cmd)`
                        };
                    }
                    continue;
                }
                if (f[0] === "-") {
                    if (a === "read") {
                        if (YLn.has(f)) {
                            c = "numeric";
                        } else if (f === "-p") {
                            c = "prompt";
                        } else if (RNe.has(f)) {
                            c = "string";
                        } else if (f.length > 2) {
                            for(let g = 1; g < f.length; g++){
                                let u = `-${f[g]}`;
                                let m = YLn.has(u);
                                if (m || RNe.has(u)) {
                                    if (g === f.length - 1) {
                                        c = m ? "numeric" : u === "-p" ? "prompt" : "string";
                                    } else if (m && !XXt.test(f.slice(g + 1))) {
                                        return {
                                            ok: false,
                                            reason: `'read ${u}' (fused in '${f}') operand is non-numeric \u2014 zsh arith-evals subscripts/expressions (may run $(cmd))`
                                        };
                                    } else if (u === "-p") {
                                        let x = f.slice(g + 1);
                                        if (/[A-Za-z_][A-Za-z0-9_]*\[/.test(x) || x.includes(R)) {
                                            return {
                                                ok: false,
                                                reason: `'read -p' fused remainder '${x}' contains a subscripted identifier or cmdsub \u2014 on zsh (-p is no-arg) this may reach matheval via a following option and run $(cmd)`
                                            };
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    continue;
                }
                if (f.includes("[") || Vs(f)) {
                    return {
                        ok: false,
                        reason: `'${a}' positional NAME '${f}' contains array subscript or runtime-determined value \u2014 bash evaluates $(cmd) in subscripts`
                    };
                }
            }
        }
        if (Pit.has(a)) {
            let c = a === "declare" || a === "typeset" || a === "local";
            let d = c || a === "export" || a === "readonly";
            let f = c || a === "readonly";
            let g = false;
            let u = false;
            for(let m = 1; m < n.length; m++){
                let x = n[m];
                if (f) {
                    if (/^[+-].*f/.test(x)) {
                        g = true;
                    }
                    if (/^[+-].*[uU]/.test(x)) {
                        u = true;
                    }
                    if (g && u) {
                        return {
                            ok: false,
                            reason: `'${a}' with both -f and -u/-U flags (reached as plain command via wrapper/quote) \u2014 zsh marks a function for autoload (synonym of 'autoload')`
                        };
                    }
                }
                if (c && ke.test(x)) {
                    return {
                        ok: false,
                        reason: `'${a}' with -n/-i/-a/-A/-E/-F/-L/-R/-Z/-l/-u flag (reached as plain command via wrapper/quote) changes assignment eval semantics`
                    };
                }
                if (Me.has(a) && /^[+-].*[iluEFLRZ]/.test(x)) {
                    return {
                        ok: false,
                        reason: `'${a}' with -i/-E/-F/-L/-R/-Z/-l/-u flag (reached as plain command via wrapper/quote) \u2014 zsh bin_typeset mathevals, width-truncates, or case-converts the value`
                    };
                }
                if ((d || a === "private") && /^[+-].*m/.test(x)) {
                    return {
                        ok: false,
                        reason: `'${a}' with -m/+m flag (reached as plain command via wrapper/quote) \u2014 zsh pattern-assigns every matching variable`
                    };
                }
                if (Me.has(a) && /^[+-].*T/.test(x)) {
                    return {
                        ok: false,
                        reason: `'${a} -T' creates a user-defined zsh tied pair \u2014 tracked literals for its operands are unreliable`
                    };
                }
                let y = x.includes("[") && /[$`]/.test(x);
                if (y || Vs(x)) {
                    return {
                        ok: false,
                        reason: y ? `'${a}' operand '${j4e(x)}' contains array subscript with expansion \u2014 shell arith-evals $(cmd) in subscripts` : `'${a}' operand '${j4e(x)}' is runtime-determined and may carry an array subscript \u2014 shell arith-evals $(cmd) in subscripts`
                    };
                }
                if ((a === "float" || a === "integer") && !/^[+-]/.test(x)) {
                    return {
                        ok: false,
                        reason: `zsh '${a}' operand \u2014 implicit typeset -E/-i arithmetically evaluates the (existing or assigned) value`
                    };
                }
            }
        }
        if (a === "printf") {
            for(let c = 1; c < n.length; c++){
                let d = n[c];
                let f = d.includes("[") && /[$`]/.test(d);
                if (f || Vs(d)) {
                    return {
                        ok: false,
                        reason: f ? `printf operand '${j4e(d)}' contains array subscript with expansion \u2014 zsh arith-evals %d/%i operands (may run $(cmd))` : `printf operand '${j4e(d)}' is runtime-determined and may carry an array subscript \u2014 zsh arith-evals %d/%i operands (may run $(cmd))`
                    };
                }
            }
        }
        if (a === "set") {
            for(let c = 1; c < n.length; c++){
                let d = n[c];
                if (d === "--") {
                    break;
                }
                if (!/^[-+]/.test(d)) {
                    continue;
                }
                for(let f = 1; f < d.length; f++){
                    let g = d[f];
                    if (g === "o") {
                        let u = f < d.length - 1 ? d.slice(f + 1) : n[c + 1];
                        if (u !== undefined && u !== "" && !KXt.has(u.toLowerCase().replace(/[_-]/g, ""))) {
                            return {
                                ok: false,
                                reason: `'set -o/+o ${u}' changes shell parsing/globbing state \u2014 can enable globsubst/extendedglob and defeat static analysis`
                            };
                        }
                        if (f === d.length - 1) {
                            c++;
                        }
                        break;
                    }
                    if (g === "A") {
                        break;
                    }
                    if (!YXt.has(g)) {
                        return {
                            ok: false,
                            reason: `'set ${d[0]}${g}' changes shell option state (allexport/keyword/\u2026) \u2014 defeats static env-var analysis; see SET_O_SAFE_LETTERS`
                        };
                    }
                }
            }
        }
        if (a === "print" && n.some((c)=>/^[+-].*P/.test(c))) {
            for(let c = 1; c < n.length; c++){
                let d = n[c];
                if (/\$\(|`/.test(d) || Vs(d)) {
                    return {
                        ok: false,
                        reason: "'print -P' operand contains command substitution — zsh prompt expansion evaluates $(cmd)"
                    };
                }
            }
        }
        if (a === "jobs") {
            for(let c = 1; c < n.length; c++){
                let d = n[c];
                if (/^[+-].*x/.test(d)) {
                    return {
                        ok: false,
                        reason: "What 'jobs -x' starts can't be checked before it runs"
                    };
                }
            }
        }
        if ($yr.has(a)) {
            return {
                ok: false,
                reason: `Shell keyword '${a}' as command name \u2014 tree-sitter mis-parse`
            };
        }
        if (l) {
            if (a === "find" || a === "jq") {
                return {
                    ok: false,
                    reason: `What xargs adds to ${a} can't be checked before it runs`
                };
            }
            if (vCe.has(a)) {
                let c = false;
                for(let d = 1; d < n.length; d++){
                    let f = n[d];
                    if (f === "--") {
                        c = d + 1 < n.length;
                        break;
                    }
                    if (f === "-" || !f.startsWith("-")) {
                        c = true;
                        break;
                    }
                    if (!f.includes("=") && on.test(f)) {
                        d++;
                    }
                }
                if (!c) {
                    return {
                        ok: false,
                        reason: `The program xargs gives ${a} can't be checked before it runs`
                    };
                }
            }
        }
        if (a === "jq") {
            for (let c of n){
                if (/\bsystem\s*\(/.test(c)) {
                    return {
                        ok: false,
                        reason: "jq command contains system() function which executes arbitrary commands"
                    };
                }
                if (/\b(?:include|import)\b/.test(c)) {
                    return {
                        ok: false,
                        reason: 'jq command contains include/import — modules can load arbitrary .jq files via {search:"."} and call env or other builtins'
                    };
                }
            }
            if (n.some((c)=>/^(?:-[A-Za-z]*[fL]|--(?:from-file|rawfile|slurpfile|library-path)(?:$|=))/.test(c))) {
                return {
                    ok: false,
                    reason: "jq command contains dangerous flags that could execute code or read arbitrary files"
                };
            }
        }
        if (vCe.has(a)) {
            if (o.hasUnquotedGlob || r && GLn(o)) {
                return {
                    ok: false,
                    reason: "awk command contains unquoted glob characters — could glob-expand to a planted program or flag before awk runs"
                };
            }
            for (let c of n){
                let reason = rxt(c);
                if (reason !== false) {
                    return {
                        ok: false,
                        reason
                    };
                }
                if (Vs(c)) {
                    return {
                        ok: false,
                        reason: "awk is given text that can't be checked before it runs"
                    };
                }
            }
            if (n.some((c)=>/^-[bcCghIkMnNOPrsStV]*[fEileDW]/.test(c) || /^--(?:fil|e|i|lo|s|de)/.test(c))) {
                return {
                    ok: false,
                    reason: "awk has an option that can't be checked before it runs"
                };
            }
        }
        if (a === "find") {
            if (o.hasUnquotedGlob || r && GLn(o)) {
                return {
                    ok: false,
                    reason: "find contains unquoted glob characters — could glob-expand to a dangerous action before find runs"
                };
            }
            let c = false;
            for(let d = 1; d < n.length; d++){
                let f = n[d];
                let g = c;
                c = false;
                if (zXt(f)) {
                    return {
                        ok: false,
                        reason: `find with '${f}' executes commands or modifies files \u2014 cannot be auto-allowed by a Bash(find:*) prefix rule`
                    };
                }
                if (VXt(f)) {
                    return {
                        ok: false,
                        reason: `find option '${f}' is read differently by different versions of find \u2014 could hide a following action`
                    };
                }
                if (!g && GXt(f)) {
                    c = true;
                    continue;
                }
                if (!g && nxt(f)) {
                    d++;
                    continue;
                }
                if (Vs(f)) {
                    return {
                        ok: false,
                        reason: "find argument is runtime-determined — could resolve to a dangerous action"
                    };
                }
                if (/[[\]*?]/.test(f)) {
                    return {
                        ok: false,
                        reason: `find argument '${f}' contains glob characters \u2014 could glob-expand to a dangerous action`
                    };
                }
            }
        }
        if (wCe.has(a)) {
            return {
                ok: false,
                reason: `Zsh builtin '${a}' can bypass security checks`
            };
        }
        if (FQ.has(a)) {
            if (a === "fc" && !n.slice(1).some((c)=>/^[+-].*[es]/.test(c))) ;
            else if (a === "compgen" && !n.slice(1).some((c)=>/^[+-].*[CFW]/.test(c))) ;
            else {
                return {
                    ok: false,
                    reason: `'${a}' evaluates arguments as shell code`
                };
            }
        }
        if (D5.has(a) && n.length > 1) {
            return {
                ok: false,
                reason: `What '${a}' starts can't be checked before it runs`
            };
        }
        for (let c of o.argv){
            if (c.includes("/proc/") && _e.test(c)) {
                return {
                    ok: false,
                    reason: "Accesses /proc/*/environ which may expose secrets"
                };
            }
        }
        for (let c of o.redirects){
            if (c.target.includes("/proc/") && _e.test(c.target)) {
                return {
                    ok: false,
                    reason: "Accesses /proc/*/environ which may expose secrets"
                };
            }
        }
        for (let c of o.argv){
            if (c.includes(`
`) && q.test(c)) {
                s ??= {
                    ok: false,
                    kind: "newline-hash",
                    reason: "Newline followed by # inside a quoted argument can hide arguments from path validation"
                };
            }
        }
        for (let c of o.envVars){
            if (c.value.includes(`
`) && q.test(c.value)) {
                s ??= {
                    ok: false,
                    kind: "newline-hash",
                    reason: "Newline followed by # inside an env var value can hide arguments from path validation"
                };
            }
        }
        for (let c of o.redirects){
            if (c.target.includes(`
`) && q.test(c.target)) {
                s ??= {
                    ok: false,
                    kind: "newline-hash",
                    reason: "Newline followed by # inside a redirect target can hide arguments from path validation"
                };
            }
        }
    }
    if (s) {
        return s;
    }
    return {
        ok: true
    };
}
export { Cit, nde, Zgs, xyr, Kx, gV, rde, B4e, Vs, j4e, qdo, Kdo, Ydo, Rit, Pyr, jLn, Iyr, Oyr, ext, txt, WLn, zLn, Myr, GLn, X$, Hyr, hV, VLn, qLn, KLn, Xdo, WXt, CNe, wCe, zXt, nxt, GXt, VXt, FQ, vCe, rxt, ode, qXt, zM, ECe, D5, Jdo, Dyr, W4e, xit, Lyr, Pit, KXt, YXt, oxt, z4e, L5, RNe, YLn, XXt, Nyr };
