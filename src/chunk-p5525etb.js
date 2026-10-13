import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { Ye, Ke, fG, x, ot, W, l, T_, xs } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { qpt, Bn, GO } from "/$bunfs/root/chunk-xgw72tt1.js";
import { bo, we } from "/$bunfs/root/chunk-ctt36bn8.js";
import { gi, lMt } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { yo, HN, _o, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Mon } from "/$bunfs/root/chunk-qch5xj2a.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { $w, Hxe, oZ, Dxe, szn } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Bnn, jnn, yHt, AN, jy, Dz, _Ht as reason, Vnn } from "/$bunfs/root/chunk-52bcnmbr.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { yq, CH } from "/$bunfs/root/chunk-w1n7t02f.js";
import { MR, nh, gq, S0, F5e } from "/$bunfs/root/chunk-2d9a83dh.js";
import { jo } from "/$bunfs/root/chunk-223dyewd.js";
import { xl, _yr, Kt } from "/$bunfs/root/chunk-4r6b8efh.js";
import { la, ect, Fn } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
import { Sd, bs } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { _s } from "/$bunfs/root/chunk-231n9cft.js";
import { uH, t3e, zT } from "/$bunfs/root/chunk-k3tkc302.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { IW, RT, u4e, to, Xst, Ok, Ui } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { jD } from "/$bunfs/root/chunk-ncdjpaxf.js";
import { A_e, m9t, Ru, b9t } from "/$bunfs/root/chunk-k5fhce8z.js";
import { Qvn, M5o, j2t, Ttr, PSt, Htr, Vj, zge, zSt, Nae, GSt, VSt, qSt, Tc, T3r, bnr, fke, Bte, A3r, GU, y9o, C3r, $K, mke, R3r, XEn, iwt, JEn, oJ, QGe, Xge, Zge, NHe, zet, Y5r, Ty, Rl, uM, nle, yor, _or, DTn, bor, Sor, wor, vor, Eor, kor, Qwt, Tor, Aor, Cor, Ror, Dqt, yQo, _Qo, b8r, bQo, S8r, $De, wlr, Elr, ERn, klr, Tlr, iYt } from "/$bunfs/root/chunk-kasbfbhj.js";
import { KC, qYt, Jle, qPn, KTe, Ert, pIn, fIn, _Tt, mIn } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { gre, UA, qe, yLe, GAe, $mr } from "/$bunfs/root/chunk-46dhek9m.js";
import { Qh } from "/$bunfs/root/chunk-347xejxn.js";
import { aKe } from "/$bunfs/root/chunk-40xcrb3y.js";
import { nAe, rAe, oAe, Xrt } from "/$bunfs/root/chunk-xg0h9r8v.js";
import { gB } from "/$bunfs/root/chunk-tajfxccb.js";
import { LEe, $X, o$, J6, mte, vA, kSn, bYo, CVr, RVr, SYo, LU, P7n, I7n, cb, TSn, obt, xVr, PVr, wYo, sbt, ibt, abt, IVr, G7e } from "/$bunfs/root/chunk-g4qw45xk.js";
import { kVr, TVr, AVr } from "/$bunfs/root/chunk-eqf49xnc.js";
import { x7n, Azt, yYo, EVr, ESn } from "/$bunfs/root/chunk-zz6kvk8n.js";
import { Ece, ZOn, eMn } from "/$bunfs/root/chunk-wfmafsfk.js";
import { A4 } from "/$bunfs/root/chunk-z8b8q76g.js";
import { MM } from "/$bunfs/root/chunk-qc974h0a.js";
import { Or, _V, LB, mu } from "/$bunfs/root/chunk-b7w13qrv.js";
import { Yx } from "/$bunfs/root/chunk-4r70ar86.js";
import { Cd } from "/$bunfs/root/chunk-ywnn3sze.js";
import { rt as readToolName } from "/$bunfs/root/chunk-xx1j2680.js";
import { o, E, M, u, De, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { basename, dirname, resolve, isAbsolute, posix, relative, sep, normalize, win32 } from "path";
import { homedir } from "os";
function At(e) {
    if (!e.startsWith("../")) {
        return e;
    }
    let n = Pe(basename(se()));
    if (!n) {
        return e;
    }
    let s = `../${n}/`;
    let r = e;
    while(r.startsWith(s)){
        r = r.slice(s.length);
    }
    if (r === `../${n}`) {
        return ".";
    }
    return r;
}
function mn(e) {
    return ze(e, o$);
}
function He(e) {
    let n = new Set([
        ze(e, (s)=>s),
        mn(e),
        ze(e, J6),
        ze(e, mte)
    ]);
    return Array.from(n);
}
function ze(e, n) {
    let s = e;
    s = $X(s);
    if (s.length > 0 && ($K.has(s[0]) || s[0] === "/")) {
        let m = s.indexOf(":", 1);
        if (m > 0) {
            s = $X(s.slice(m + 1));
        }
    }
    s = n(s);
    s = vA(s);
    s = s.replace(/^(?:[A-Za-z0-9_.]+\\){0,3}FileSystem::/i, "");
    s = s.replace(/^[A-Za-z]:(?![/\\])/, "./");
    s = s.replaceAll("\\", "/");
    if (s === "~" || s.startsWith("~/")) {
        s = (homedir() + s.slice(1)).replaceAll("\\", "/");
    }
    let r = "";
    if (/^[A-Za-z]:\//.test(s)) {
        r = s.slice(0, 2);
        s = s.slice(2);
    }
    s = s.split("/").map((m)=>{
        if (m === "") {
            return m;
        }
        return IW(m) || ".";
    }).join("/");
    s = posix.normalize(s);
    if (r) {
        s = r + s;
    }
    if (s.startsWith("./")) {
        s = s.slice(2);
    }
    return s;
}
function Pe(e) {
    return e.toLowerCase().replace(/\u0131/g, "i").replace(/\u017f/g, "s").normalize("NFC").replaceAll("ς", "σ");
}
const pn = [
    "head",
    "objects",
    "refs",
    "hooks"
];
function _t(e) {
    let n = ie();
    let s = se();
    let r = resolve(s, e);
    let m = HN(n, r) ?? r;
    let resolvedPath = yo(n, s).resolvedPath;
    let y = resolvedPath.endsWith(sep) ? resolvedPath : resolvedPath + sep;
    let v = Pe(m);
    let g = Pe(resolvedPath);
    let _ = Pe(y);
    if (v === g) {
        return ".";
    }
    if (!v.startsWith(_)) {
        return null;
    }
    return v.slice(_.length).replaceAll("\\", "/");
}
function kt(e) {
    if (e === "head" || e === ".git") {
        return true;
    }
    if (e.startsWith(".git/") || /^git~\d+($|\/)/.test(e)) {
        return true;
    }
    for (let n of pn){
        if (n === "head") {
            continue;
        }
        if (e === n || e.startsWith(`${n}/`)) {
            return true;
        }
    }
    return false;
}
function Ne(e) {
    for (let n of He(e)){
        let s = At(Pe(n));
        if (kt(s)) {
            return true;
        }
        let r = _t(n);
        if (r !== null && kt(r)) {
            return true;
        }
    }
    return false;
}
function Ge(e) {
    for (let n of He(e)){
        let s = At(Pe(n));
        if (Rt(s)) {
            return true;
        }
        let r = _t(n);
        if (r !== null && Rt(r)) {
            return true;
        }
    }
    return false;
}
function Rt(e) {
    if (e === ".git" || e.startsWith(".git/")) {
        return true;
    }
    return /^git~\d+($|\/)/.test(e);
}
function Xe(e) {
    if (!e.includes(",")) {
        return [
            e
        ];
    }
    return [
        e,
        ...e.split(",")
    ];
}
const hn = [
    "path",
    "literalpath"
];
const fn = new Set([
    "pspath",
    "lp"
]);
const gn = new Set([
    "cf",
    "wi",
    "vb",
    "db",
    "usetx"
]);
const wn = new Set([
    "ea",
    "ev",
    "wa",
    "wv",
    "infa",
    "iv",
    "proga",
    "ov",
    "ob",
    "pv"
]);
const bn = [
    "container",
    "force",
    "passthru",
    "recurse",
    "whatif",
    "confirm",
    "usetransaction",
    "verbose",
    "debug"
];
const yn = [
    "filter",
    "include",
    "exclude",
    "credential",
    "fromsession",
    "tosession",
    "erroraction",
    "errorvariable",
    "warningaction",
    "warningvariable",
    "informationaction",
    "informationvariable",
    "progressaction",
    "outvariable",
    "outbuffer",
    "pipelinevariable"
];
function xt(e) {
    return /[*?[\]$]/.test(e);
}
function vn(e) {
    let n = ie();
    let s = se();
    let r = resolve(s, e);
    let m = Bn(r) ? r : HN(n, r) ?? r;
    let resolvedPath = yo(n, s).resolvedPath;
    let y = Pe(m);
    if (Pe(resolvedPath) === y) {
        return true;
    }
    let resolvedPath_1 = yo(n, we()).resolvedPath;
    let g = relative(resolvedPath_1, resolvedPath);
    if (g === ".." || g.startsWith(`..${sep}`) || isAbsolute(g)) {
        return false;
    }
    let _ = Pe(resolvedPath_1);
    let S = resolvedPath;
    while(true){
        if (Pe(S) === y) {
            return true;
        }
        if (Pe(S) === _ || S === dirname(S)) {
            return false;
        }
        S = dirname(S);
    }
}
function It(args, n = false) {
    let s = [];
    let r = [];
    let m;
    let h = false;
    let y = false;
    let v = [];
    for(let k = 0; k < args.length; k++){
        let T = $X(args[k]);
        if (T.length === 0 || !$K.has(T[0])) {
            r.push(args[k]);
            continue;
        }
        let C = T.indexOf(":", 1);
        let P = (C > 0 ? T.slice(1, C) : T.slice(1)).toLowerCase();
        let N = C > 0 ? T.slice(C + 1) : undefined;
        if (P === "") {
            return true;
        }
        let F = "destination".startsWith(P);
        let I = fn.has(P) || "literalpath".startsWith(P);
        let D = I || hn.some((G)=>G.startsWith(P));
        let U = gn.has(P) || bn.some((G)=>G.startsWith(P));
        let V = wn.has(P) || yn.some((G)=>G.startsWith(P));
        if (Number(F) + Number(D) + Number(U) + Number(V) !== 1) {
            return true;
        }
        if (U) {
            if ("container".startsWith(P) && N !== undefined) {
                let G = $X(N);
                if (![
                    o$,
                    J6,
                    mte
                ].every((re)=>/^\$true$/i.test(re(G).trim()))) {
                    y = true;
                }
            }
            continue;
        }
        let z = N ?? args[++k];
        if (z === undefined) {
            continue;
        }
        if (F) {
            m = z;
        } else if (D) {
            h = true;
            if (I) {
                v.push(...z.split(","));
            } else {
                s.push(...z.split(","));
            }
        }
    }
    let g = (h ? 0 : 1) + (m === undefined ? 1 : 0);
    if (r.length > g) {
        return true;
    }
    let _;
    let S = 0;
    if (!h && S < r.length) {
        s.push(...r[S].split(","));
        S++;
    }
    if (m === undefined && S < r.length) {
        _ = r[S];
    }
    if (s.length === 0 && v.length === 0 && !n) {
        return false;
    }
    let w = m ?? _;
    if (w !== undefined) {
        let k = He(w).map((T)=>{
            if (T === "") {
                return ".";
            }
            return T;
        });
        if (k.some(xt)) {
            return true;
        }
        if (!k.some(vn)) {
            return false;
        }
    }
    if (y || n) {
        return true;
    }
    for (let [k, T] of [
        [
            false,
            s
        ],
        [
            true,
            v
        ]
    ]){
        for (let C of T){
            for (let P of He(C)){
                let N = P === "" ? "." : P;
                if (k ? /\$/.test(N) : xt(N)) {
                    return true;
                }
                let F = posix.basename(N);
                if (F === "." || F === "..") {
                    return true;
                }
                if (Ne(F)) {
                    return true;
                }
            }
        }
    }
    return false;
}
const Sn = new Set([
    "set-content",
    "add-content",
    "remove-item",
    "clear-content"
]);
function nt(name) {
    let n = cb(name);
    return Sn.has(n);
}
const Pn = new Set([
    "symboliclink",
    "junction",
    "hardlink"
]);
function kn(e) {
    return e.length >= 3 && "-itemtype".startsWith(e) || e.length >= 3 && "-type".startsWith(e);
}
function st(e) {
    if (cb(e.name) !== "new-item") {
        return false;
    }
    for(let s = 0; s < e.args.length; s++){
        let r = e.args[s] ?? "";
        if (r.length === 0) {
            continue;
        }
        let h = ($K.has(r[0]) || r[0] === "/" ? `-${r.slice(1)}` : r).toLowerCase();
        let y = h.indexOf(":", 1);
        let v = y > 0 ? h.slice(0, y) : h;
        let g = vA(v.replace(/`[\r\n]+\s*/g, "")).toLowerCase();
        if (!kn(g)) {
            continue;
        }
        let _ = y > 0 ? h.slice(y + 1) : e.args[s + 1]?.toLowerCase() ?? "";
        let S = o$($X(vA(_.replace(/`[\r\n]+\s*/g, "")))).toLowerCase();
        if (/[?*[\]($]/.test(S)) {
            return true;
        }
        for (let w of Pn){
            if (S.length > 0 && w.startsWith(S)) {
                return true;
            }
        }
    }
    return false;
}
function at(e, n, s) {
    if (s.mode === "bypassPermissions" || s.mode === "dontAsk") {
        return {
            behavior: "passthrough",
            message: "Mode is handled in main permission flow"
        };
    }
    if (s.mode !== "acceptEdits") {
        return {
            behavior: "passthrough",
            message: "No mode-specific validation required"
        };
    }
    if (!n.valid) {
        return {
            behavior: "passthrough",
            message: "Cannot validate mode for unparsed command"
        };
    }
    let r = oJ(n);
    if (r.hasSubExpressions || r.hasScriptBlocks || r.hasMemberInvocations || r.hasSplatting || r.hasAssignments || r.hasStopParsing || r.hasExpandableStrings) {
        return {
            behavior: "passthrough",
            message: "Command contains subexpressions, script blocks, or member invocations that require approval"
        };
    }
    let m = XEn(n);
    if (m.length === 0) {
        return {
            behavior: "passthrough",
            message: "No commands found to validate for acceptEdits mode"
        };
    }
    let h = m.reduce((acc, item)=>acc + item.commands.length, 0);
    if (m.some((v)=>v.commands.some((g)=>g.elementType === "CommandAst" && st(g)))) {
        return {
            behavior: "passthrough",
            message: "Command creates a filesystem link (New-Item -ItemType SymbolicLink/Junction/HardLink) — cannot auto-allow because later path validation cannot follow just-created links"
        };
    }
    if (h > 1) {
        let v = false;
        let g = false;
        for (let _ of m){
            for (let S of _.commands){
                if (S.elementType !== "CommandAst") {
                    continue;
                }
                if (TSn(S.name)) {
                    v = true;
                }
                if (nt(S.name)) {
                    g = true;
                }
            }
        }
        if (v && g) {
            return {
                behavior: "passthrough",
                message: "Compound command contains a directory-changing command (Set-Location/Push-Location/Pop-Location) with a write operation — cannot auto-allow because path validation uses stale cwd"
            };
        }
    }
    for (let v of m){
        for (let g of v.commands){
            if (g.elementType !== "CommandAst") {
                return {
                    behavior: "passthrough",
                    message: `Pipeline contains expression source (${g.elementType}) that cannot be statically validated`
                };
            }
            if (g.nameType === "application") {
                return {
                    behavior: "passthrough",
                    message: `Command '${g.name}' resolved from a path-like name and requires approval`
                };
            }
            if (g.elementTypes) {
                for(let _ = 1; _ < g.elementTypes.length; _++){
                    let elementType = g.elementTypes[_];
                    if (elementType !== "StringConstant" && elementType !== "Parameter") {
                        return {
                            behavior: "passthrough",
                            message: `Command argument has unvalidatable type (${elementType}) \u2014 variable paths cannot be statically resolved`
                        };
                    }
                    if (elementType === "Parameter") {
                        let w = g.args[_ - 1] ?? "";
                        let k = w.indexOf(":");
                        if (k > 0 && /[$(@{[]/.test(w.slice(k + 1))) {
                            return {
                                behavior: "passthrough",
                                message: "Colon-bound parameter contains an expression that cannot be statically validated"
                            };
                        }
                    }
                }
            }
            if (abt(g.args, g.elementTypes) || ibt(g.args, g.elementTypes)) {
                return {
                    behavior: "passthrough",
                    message: `Variable-writing or ActionPreference argument in '${g.name}' requires approval`
                };
            }
            if (obt(g.name) && g.args.length === 0) {
                continue;
            }
            if (xVr(g, e.command)) {
                continue;
            }
            if (!nt(g.name)) {
                return {
                    behavior: "passthrough",
                    message: `No mode-specific handling for '${g.name}' in acceptEdits mode`
                };
            }
            if (LU(g.name, g)) {
                return {
                    behavior: "passthrough",
                    message: `Arguments in '${g.name}' cannot be statically validated in acceptEdits mode`
                };
            }
        }
        if (v.nestedCommands) {
            for (let g of v.nestedCommands){
                if (g.elementType !== "CommandAst") {
                    return {
                        behavior: "passthrough",
                        message: `Nested expression element (${g.elementType}) cannot be statically validated`
                    };
                }
                if (g.nameType === "application") {
                    return {
                        behavior: "passthrough",
                        message: `Nested command '${g.name}' resolved from a path-like name and requires approval`
                    };
                }
                if (abt(g.args, g.elementTypes) || ibt(g.args, g.elementTypes)) {
                    return {
                        behavior: "passthrough",
                        message: `Variable-writing or ActionPreference argument in nested '${g.name}' requires approval`
                    };
                }
                if (obt(g.name) && g.args.length === 0) {
                    continue;
                }
                if (xVr(g, e.command)) {
                    continue;
                }
                if (!nt(g.name)) {
                    return {
                        behavior: "passthrough",
                        message: `No mode-specific handling for '${g.name}' in acceptEdits mode`
                    };
                }
                if (LU(g.name, g)) {
                    return {
                        behavior: "passthrough",
                        message: `Arguments in nested '${g.name}' cannot be statically validated in acceptEdits mode`
                    };
                }
            }
        }
    }
    return {
        behavior: "allow",
        updatedInput: e,
        decisionReason: {
            type: "mode",
            mode: "acceptEdits"
        }
    };
}
const Cn = "tengu_curious_lake";
function Dt() {
    if (a.CLAUDE_CODE_DISABLE_POWERSHELL_CMD_RM_DENY) {
        return false;
    }
    let e = Fn(Cn, true);
    return !(e.value === false && e.source === "payload");
}
const Rn = /^\/[ckr](?:$|\s)/i;
const xn = /^(rd|rmdir|del|erase)(?=$|[.:\\/+[\]",;=])/i;
const Tn = /^(?:(?:cd|chdir|pushd|popd)(?=$|[.:\\/+[\]",;=])|[a-z]:$)/i;
const En = /[^\S\uFEFF]|\u0085/;
function Mt(e) {
    let e_length = e.length;
    while(e_length > 0 && (e[e_length - 1] === "." || e[e_length - 1] === " ")){
        e_length--;
    }
    let s = e.slice(Math.max(e.lastIndexOf("\\", e_length), e.lastIndexOf("/", e_length)) + 1, e_length);
    return /^cmd(?:\.exe)?$/i.test(s);
}
function Ot(e) {
    if (e === undefined || e === "StringConstant") {
        return "literal";
    }
    if (e === "ExpandableString") {
        return "expands";
    }
    return "unknown";
}
function An(e) {
    let n = false;
    for(let s = 0; s < e.length; s++){
        let r = e[s];
        if (r === '"' && e[s - 1] !== "\\") {
            n = !n;
        } else if (!n && En.test(r)) {
            return true;
        }
    }
    return false;
}
function Ze(e, n) {
    if (e === "unknown" || n === "unknown") {
        return "unknown";
    }
    if (e === "expands" || n === "expands") {
        return "expands";
    }
    return "literal";
}
function Nt(e) {
    let n = [];
    let s = "";
    let r = "literal";
    let m = false;
    let h = 0;
    let y = ()=>{
        if (s !== "") {
            n.push({
                text: s,
                kind: r,
                separator: false
            });
        }
        s = "";
        r = "literal";
    };
    for(let v = 0; v < e.length; v++){
        let { ch, kind } = e[v];
        if (m) {
            s += ch;
            r = Ze(r, kind);
            m = ch !== '"';
            continue;
        }
        if (ch === "^" && v + 1 < e.length) {
            v++;
            s += e[v].ch;
            r = Ze(r, Ze(kind, e[v].kind));
            continue;
        }
        if ("&|<>".includes(ch) || ch === "(" && s === "" || ch === ")" && h > 0) {
            y();
            h += ch === "(" ? 1 : ch === ")" ? -1 : 0;
            n.push({
                text: ch,
                kind,
                separator: true
            });
            continue;
        }
        if (/[ \t\r\n\v\f,;=]/.test(ch)) {
            y();
            continue;
        }
        if (ch === '"') {
            m = true;
        }
        s += ch;
        r = Ze(r, kind);
    }
    y();
    return n;
}
function _n(text) {
    let n = null;
    for(let s = 0; s < text.length; s++){
        let r = text[s];
        if (r === "`" && n !== "'") {
            s++;
        } else if (n !== null) {
            if (r === n) {
                n = null;
            }
        } else if (r === '"' || r === "'") {
            n = r;
        } else if (text.startsWith("--%", s) && (s === 0 || /\s/.test(text[s - 1])) && (s + 3 === text.length || /\s/.test(text[s + 3]))) {
            return s;
        }
    }
    return -1;
}
function In(e) {
    if (Ot(e.elementTypes?.[0]) !== "literal" || !Mt(e.name)) {
        return null;
    }
    let n = _n(e.text);
    let s = n === -1 ? undefined : e.text.slice(n + 3).trimStart();
    let r = (S)=>n !== -1 && /^--%(?:$|\s)/.test(S);
    let m = e.args.some(r);
    let h = [];
    let verbatim = false;
    for(let S = 0; S < e.args.length; S++){
        let w = e.args[S];
        let k = Ot(e.elementTypes?.[S + 1]);
        if (!verbatim && s !== undefined && !m && S === e.args.length - 1) {
            verbatim = true;
            w = s;
        }
        if (!verbatim && r(w)) {
            verbatim = true;
            w = w.slice(3).trimStart();
            if (w === "") {
                continue;
            }
        }
        if (verbatim) {
            k = "literal";
        }
        if (w !== "" || verbatim) {
            h.push({
                text: w,
                kind: k,
                verbatim
            });
        }
    }
    let v = h.findIndex((S)=>S.kind !== "unknown" && Rn.test(S.text));
    if (v === -1) {
        return null;
    }
    let g = [];
    h.forEach((S, w)=>{
        if (w < v) {
            return;
        }
        let k = w === v ? S.text.slice(2).trimStart() : S.text;
        if (w === v && k === "") {
            return;
        }
        if (g.length > 0) {
            g.push({
                ch: " ",
                kind: "literal"
            });
        }
        let T = !S.verbatim && w > v && An(k);
        for (let C of T ? `"${k}"` : k){
            g.push({
                ch: C,
                kind: S.kind
            });
        }
    });
    let _ = g.findIndex((S)=>!/\s/.test(S.ch));
    if (_ !== -1 && g[_].ch === '"') {
        let S = -1;
        for(let w = g.length - 1; w > _; w--){
            if (g[w].ch === '"') {
                S = w;
                break;
            }
        }
        g = g.filter((w, k)=>k !== _ && k !== S);
    }
    return g;
}
function Wt(e) {
    let n = In(e);
    if (n === null) {
        return [];
    }
    let s = new Map;
    let r = (v)=>{
        let g = s.get(v);
        if (g !== undefined) {
            return g;
        }
        let _ = /^\$[\p{L}\p{Nd}_:]+$/u.test(v);
        let S = {
            copies: 0,
            escaped: 0
        };
        for(let w = e.text.indexOf(v); w !== -1; w = e.text.indexOf(v, w + 1)){
            if (_ && /[\p{L}\p{Nd}_:]/u.test(e.text[w + v.length] ?? "")) {
                continue;
            }
            let k = 0;
            while(w - k > 0 && e.text[w - k - 1] === "`"){
                k++;
            }
            S.copies++;
            S.escaped += k % 2;
        }
        s.set(v, S);
        return S;
    };
    let everyCopyEscaped = (v)=>{
        let { copies, escaped } = r(v);
        return copies > 0 && escaped === copies;
    };
    let someCopyEscaped = (v)=>r(v).escaped > 0;
    let operands = [];
    lt(Nt(n), {
        cdSeen: false,
        cdTarget: null
    }, false, {
        operands,
        everyCopyEscaped,
        someCopyEscaped
    });
    return operands;
}
const Lt = 8;
function lt(e, n, s, r, m = 0) {
    let h = true;
    let y = "none";
    let v = false;
    for(let g = 0; g < e.length; g++){
        let _ = e[g];
        if (_.separator) {
            if (_.text === "<" || _.text === ">") {
                g = ct(e, g);
            } else {
                h = true;
                y = "none";
                v = _.text === "|";
                if (v) {
                    n.cdTarget = null;
                }
            }
            continue;
        }
        if (/^\d$/.test(_.text) && [
            "<",
            ">"
        ].includes(e[g + 1]?.text ?? "")) {
            continue;
        }
        if (y === "condition") {
            let C = _.text.toLowerCase();
            if (C === "/i" || C === "not") {
                continue;
            }
            y = C === "exist" || C === "defined" ? "operand" : "none";
            continue;
        }
        if (y === "operand") {
            y = "none";
            h = true;
            continue;
        }
        if (!h) {
            continue;
        }
        let S = _.text.replace(/^@+/, "");
        if (!s && (_.kind === "unknown" || Tn.test(S))) {
            n.cdSeen = true;
            n.cdTarget = v || _.kind === "unknown" ? null : On({
                ..._,
                text: S
            }, e, g + 1);
        }
        if (_.kind !== "unknown") {
            let C = S.toLowerCase();
            if (C === "call" || C === "") {
                continue;
            }
            if (/^start(?=$|\/)/.test(C) && m < Lt) {
                let P = it(e, g + 1);
                let N = /\/d/.test(C.slice(5));
                lt(e.slice(g + 1, P), N ? {
                    cdSeen: true,
                    cdTarget: null
                } : {
                    ...n
                }, true, r, m + 1);
                g = P - 1;
                h = false;
                continue;
            }
            if (s && C.startsWith("/d")) {
                n.cdSeen = true;
                n.cdTarget = null;
            }
            if (C === "if") {
                y = "condition";
                h = false;
                continue;
            }
            if (Mt(S.replaceAll('"', ""))) {
                let P = g + 1;
                while(P < e.length && !/^\/[ckr]$/i.test(e[P].text)){
                    let I = it(e, P, P + 1);
                    if (I === P) {
                        break;
                    }
                    P = I;
                }
                let N = P < e.length && !e[P].separator;
                if (N && m >= Lt) {
                    g = P;
                    h = true;
                    continue;
                }
                let F = it(e, P);
                if (N && P + 1 < F) {
                    let I = e.slice(P + 1, F);
                    if (I[0].text.startsWith('"')) {
                        let D = I.flatMap((V)=>[
                                ...` ${V.text}`
                            ].map((q)=>({
                                    ch: q,
                                    kind: V.kind
                                })));
                        D.splice(0, 2);
                        let U = D.findLastIndex((V)=>V.ch === '"');
                        if (U !== -1) {
                            D.splice(U, 1);
                        }
                        I = Nt(D);
                    }
                    lt(I, {
                        ...n
                    }, false, r, m + 1);
                }
                g = F - 1;
                h = false;
                continue;
            }
        }
        h = s;
        let w = _.kind === "unknown" ? null : xn.exec(S);
        if (w === null) {
            continue;
        }
        let k = [];
        let T = S.slice(w[0].length);
        if (T !== "") {
            k.push({
                ..._,
                text: T
            });
        }
        for(let C = g + 1; C < e.length; C++){
            let P = e[C];
            if (!P.separator) {
                k.push(P);
                g = C;
                continue;
            }
            if (P.text !== "<" && P.text !== ">") {
                break;
            }
            if (/^\d$/.test(k.at(-1)?.text ?? "")) {
                k.pop();
            }
            C = ct(e, C);
            g = C;
        }
        for (let C of k){
            if (C.kind === "unknown" || C.text.startsWith("/")) {
                continue;
            }
            let P = C.text.replaceAll('"', "").trim();
            if (P === "") {
                continue;
            }
            let N = C.kind === "expands" ? [
                r.everyCopyEscaped,
                r.someCopyEscaped
            ].map((F)=>Ln(P, F)) : [
                {
                    view: P,
                    literalPrefix: null
                }
            ];
            for (let [F, { view, literalPrefix }] of N.entries()){
                if (F > 0 && view === N[0].view) {
                    continue;
                }
                r.operands.push({
                    verb: w[1].toLowerCase(),
                    text: P,
                    emptied: literalPrefix === null ? null : {
                        view,
                        literalPrefix
                    },
                    afterCd: n.cdSeen,
                    ...n.cdTarget !== null && {
                        cdTarget: n.cdTarget
                    }
                });
            }
        }
    }
}
function ut(e, n) {
    if (!e.includes("%")) {
        return e;
    }
    let s = new Map(Object.entries(n).map(([r, m])=>[
            r.toLowerCase(),
            m
        ]));
    return e.replace(/%([^%:]+)%/g, (r, m)=>s.get(m.toLowerCase()) ?? r);
}
function On(e, n, s) {
    let r = /^(cd|chdir|pushd)(?![a-z])/i.exec(e.text);
    if (r === null) {
        return null;
    }
    let m = s;
    while(m < n.length && !n[m].separator){
        m++;
    }
    let h = [
        {
            ...e,
            text: e.text.slice(r[0].length)
        },
        ...n.slice(s, m)
    ].filter((g)=>g.text !== "");
    if ([
        "<",
        ">"
    ].includes(n[m]?.text ?? "") && /^\d$/.test(h.at(-1)?.text ?? "")) {
        h.pop();
    }
    if (h.some((g)=>g.kind !== "literal")) {
        return null;
    }
    let y = r[1].toLowerCase() === "pushd" || h.some((g)=>/^\/d$/i.test(g.text));
    let v = h.filter((g)=>!g.text.startsWith("/")).map((g)=>g.text.replaceAll('"', "")).join(" ").trim();
    if (y && /^(?:[A-Za-z]:[\\/]|%)/.test(v)) {
        return v;
    }
    return null;
}
function it(e, n, s = e.length) {
    let r = n;
    while(r < s){
        let m = e[r];
        if (!m.separator) {
            r++;
        } else if (m.text === "<" || m.text === ">") {
            r = ct(e, r) + 1;
        } else {
            break;
        }
    }
    return r;
}
function ct(e, n) {
    let s = n;
    while(e[s + 1]?.separator && [
        "<",
        ">",
        "&"
    ].includes(e[s + 1].text)){
        s++;
    }
    if (e[s + 1] !== undefined && !e[s + 1].separator) {
        return s + 1;
    }
    return s;
}
function Ln(e, n = ()=>false) {
    let view = "";
    let literalPrefix = null;
    let m = 0;
    while(m < e.length){
        let h = e[m] === "$" ? Dn(e, m) : m;
        if (h === m || n(e.slice(m, h))) {
            view += e.slice(m, Math.max(h, m + 1));
            m = Math.max(h, m + 1);
            continue;
        }
        literalPrefix ??= view;
        m = h;
    }
    return {
        view,
        literalPrefix
    };
}
function Dn(e, n) {
    let s = e[n + 1];
    if (s === "{") {
        let m = e.indexOf("}", n + 2);
        if (m === -1) {
            return e.length;
        }
        return m + 1;
    }
    if (s === "(") {
        let m = 0;
        for(let h = n + 1; h < e.length; h++){
            if (e[h] === "(") {
                m++;
            } else if (e[h] === ")" && --m === 0) {
                return h + 1;
            }
        }
        return e.length;
    }
    if (s === "$" || s === "^" || s === "?") {
        return n + 2;
    }
    let r = n + 1;
    while(r < e.length && /[\p{L}\p{Nd}_:]/u.test(e[r])){
        r++;
    }
    if (r === n + 1) {
        return n;
    }
    return r;
}
const dt = 5;
const pt = {
    "set-content": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-passthru",
            "-force",
            "-whatif",
            "-confirm",
            "-usetransaction",
            "-nonewline",
            "-asbytestream"
        ],
        knownValueParams: [
            "-value",
            "-filter",
            "-include",
            "-exclude",
            "-credential",
            "-encoding",
            "-stream"
        ]
    },
    "add-content": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-passthru",
            "-force",
            "-whatif",
            "-confirm",
            "-usetransaction",
            "-nonewline",
            "-asbytestream"
        ],
        knownValueParams: [
            "-value",
            "-filter",
            "-include",
            "-exclude",
            "-credential",
            "-encoding",
            "-stream"
        ]
    },
    "remove-item": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-recurse",
            "-force",
            "-whatif",
            "-confirm",
            "-usetransaction"
        ],
        knownValueParams: [
            "-filter",
            "-include",
            "-exclude",
            "-credential",
            "-stream"
        ]
    },
    "clear-content": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-force",
            "-whatif",
            "-confirm",
            "-usetransaction"
        ],
        knownValueParams: [
            "-filter",
            "-include",
            "-exclude",
            "-credential",
            "-stream"
        ]
    },
    "out-file": {
        operationType: "write",
        pathParams: [
            "-filepath",
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-append",
            "-force",
            "-noclobber",
            "-nonewline",
            "-whatif",
            "-confirm"
        ],
        knownValueParams: [
            "-inputobject",
            "-encoding",
            "-width"
        ]
    },
    "tee-object": {
        operationType: "write",
        pathParams: [
            "-filepath",
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-append"
        ],
        knownValueParams: [
            "-inputobject",
            "-variable",
            "-encoding"
        ]
    },
    "export-csv": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-append",
            "-force",
            "-noclobber",
            "-notypeinformation",
            "-includetypeinformation",
            "-useculture",
            "-noheader",
            "-whatif",
            "-confirm"
        ],
        knownValueParams: [
            "-inputobject",
            "-delimiter",
            "-encoding",
            "-quotefields",
            "-usequotes"
        ]
    },
    "export-clixml": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-force",
            "-noclobber",
            "-whatif",
            "-confirm"
        ],
        knownValueParams: [
            "-inputobject",
            "-depth",
            "-encoding"
        ]
    },
    "new-item": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp",
            "-target"
        ],
        leafOnlyPathParams: [
            "-name"
        ],
        knownSwitches: [
            "-force",
            "-whatif",
            "-confirm",
            "-usetransaction"
        ],
        knownValueParams: [
            "-itemtype",
            "-value",
            "-credential",
            "-type"
        ]
    },
    "copy-item": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp",
            "-destination"
        ],
        knownSwitches: [
            "-container",
            "-force",
            "-passthru",
            "-recurse",
            "-whatif",
            "-confirm",
            "-usetransaction"
        ],
        knownValueParams: [
            "-filter",
            "-include",
            "-exclude",
            "-credential",
            "-fromsession",
            "-tosession"
        ]
    },
    "move-item": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp",
            "-destination"
        ],
        knownSwitches: [
            "-force",
            "-passthru",
            "-whatif",
            "-confirm",
            "-usetransaction"
        ],
        knownValueParams: [
            "-filter",
            "-include",
            "-exclude",
            "-credential"
        ]
    },
    "rename-item": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-force",
            "-passthru",
            "-whatif",
            "-confirm",
            "-usetransaction"
        ],
        knownValueParams: [
            "-newname",
            "-credential",
            "-filter",
            "-include",
            "-exclude"
        ]
    },
    "set-item": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-force",
            "-passthru",
            "-whatif",
            "-confirm",
            "-usetransaction"
        ],
        knownValueParams: [
            "-value",
            "-credential",
            "-filter",
            "-include",
            "-exclude"
        ]
    },
    "get-content": {
        operationType: "read",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-force",
            "-usetransaction",
            "-wait",
            "-raw",
            "-asbytestream"
        ],
        knownValueParams: [
            "-readcount",
            "-totalcount",
            "-tail",
            "-first",
            "-head",
            "-last",
            "-filter",
            "-include",
            "-exclude",
            "-credential",
            "-delimiter",
            "-encoding",
            "-stream"
        ]
    },
    "get-childitem": {
        operationType: "read",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-recurse",
            "-force",
            "-name",
            "-usetransaction",
            "-followsymlink",
            "-directory",
            "-file",
            "-hidden",
            "-readonly",
            "-system"
        ],
        knownValueParams: [
            "-filter",
            "-include",
            "-exclude",
            "-depth",
            "-attributes",
            "-credential"
        ]
    },
    "get-item": {
        operationType: "read",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-force",
            "-usetransaction"
        ],
        knownValueParams: [
            "-filter",
            "-include",
            "-exclude",
            "-credential",
            "-stream"
        ]
    },
    "get-itemproperty": {
        operationType: "read",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-usetransaction"
        ],
        knownValueParams: [
            "-name",
            "-filter",
            "-include",
            "-exclude",
            "-credential"
        ]
    },
    "get-itempropertyvalue": {
        operationType: "read",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-usetransaction"
        ],
        knownValueParams: [
            "-name",
            "-filter",
            "-include",
            "-exclude",
            "-credential"
        ]
    },
    "get-filehash": {
        operationType: "read",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [],
        knownValueParams: [
            "-algorithm",
            "-inputstream"
        ]
    },
    "get-acl": {
        operationType: "read",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-audit",
            "-allcentralaccesspolicies",
            "-usetransaction"
        ],
        knownValueParams: [
            "-inputobject",
            "-filter",
            "-include",
            "-exclude"
        ]
    },
    "get-module": {
        operationType: "read",
        pathParams: [
            "-name",
            "-fullyqualifiedname"
        ],
        knownSwitches: [
            "-listavailable",
            "-all",
            "-refresh",
            "-skipeditioncheck"
        ],
        knownValueParams: [
            "-psedition",
            "-pssession",
            "-cimsession"
        ]
    },
    "format-hex": {
        operationType: "read",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-raw"
        ],
        knownValueParams: [
            "-inputobject",
            "-encoding",
            "-count",
            "-offset"
        ]
    },
    "test-path": {
        operationType: "read",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-isvalid",
            "-usetransaction"
        ],
        knownValueParams: [
            "-filter",
            "-include",
            "-exclude",
            "-pathtype",
            "-credential",
            "-olderthan",
            "-newerthan"
        ]
    },
    "resolve-path": {
        operationType: "read",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-relative",
            "-usetransaction",
            "-force"
        ],
        knownValueParams: [
            "-credential",
            "-relativebasepath"
        ]
    },
    "convert-path": {
        operationType: "read",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-usetransaction"
        ],
        knownValueParams: []
    },
    "select-string": {
        operationType: "read",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-simplematch",
            "-casesensitive",
            "-quiet",
            "-list",
            "-notmatch",
            "-allmatches",
            "-noemphasis",
            "-raw"
        ],
        knownValueParams: [
            "-inputobject",
            "-pattern",
            "-include",
            "-exclude",
            "-encoding",
            "-context",
            "-culture"
        ]
    },
    "set-location": {
        operationType: "read",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-passthru",
            "-usetransaction"
        ],
        knownValueParams: [
            "-stackname"
        ]
    },
    "push-location": {
        operationType: "read",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-passthru",
            "-usetransaction"
        ],
        knownValueParams: [
            "-stackname"
        ]
    },
    "pop-location": {
        operationType: "read",
        pathParams: [],
        knownSwitches: [
            "-passthru",
            "-usetransaction"
        ],
        knownValueParams: [
            "-stackname"
        ]
    },
    "select-xml": {
        operationType: "read",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [],
        knownValueParams: [
            "-xml",
            "-content",
            "-xpath",
            "-namespace"
        ]
    },
    "get-winevent": {
        operationType: "read",
        pathParams: [
            "-path"
        ],
        knownSwitches: [
            "-force",
            "-oldest"
        ],
        knownValueParams: [
            "-listlog",
            "-logname",
            "-listprovider",
            "-providername",
            "-maxevents",
            "-computername",
            "-credential",
            "-filterxpath",
            "-filterxml",
            "-filterhashtable"
        ]
    },
    "invoke-webrequest": {
        operationType: "write",
        pathParams: [
            "-outfile",
            "-infile"
        ],
        positionalSkip: 1,
        optionalWrite: true,
        knownSwitches: [
            "-allowinsecureredirect",
            "-allowunencryptedauthentication",
            "-disablekeepalive",
            "-nobodyprogress",
            "-passthru",
            "-preservefileauthorizationmetadata",
            "-resume",
            "-skipcertificatecheck",
            "-skipheadervalidation",
            "-skiphttperrorcheck",
            "-usebasicparsing",
            "-usedefaultcredentials"
        ],
        knownValueParams: [
            "-uri",
            "-method",
            "-body",
            "-contenttype",
            "-headers",
            "-maximumredirection",
            "-maximumretrycount",
            "-proxy",
            "-proxycredential",
            "-retryintervalsec",
            "-sessionvariable",
            "-timeoutsec",
            "-token",
            "-transferencoding",
            "-useragent",
            "-websession",
            "-credential",
            "-authentication",
            "-certificate",
            "-certificatethumbprint",
            "-form",
            "-httpversion"
        ]
    },
    "invoke-restmethod": {
        operationType: "write",
        pathParams: [
            "-outfile",
            "-infile"
        ],
        positionalSkip: 1,
        optionalWrite: true,
        knownSwitches: [
            "-allowinsecureredirect",
            "-allowunencryptedauthentication",
            "-disablekeepalive",
            "-followrellink",
            "-nobodyprogress",
            "-passthru",
            "-preservefileauthorizationmetadata",
            "-resume",
            "-skipcertificatecheck",
            "-skipheadervalidation",
            "-skiphttperrorcheck",
            "-usebasicparsing",
            "-usedefaultcredentials"
        ],
        knownValueParams: [
            "-uri",
            "-method",
            "-body",
            "-contenttype",
            "-headers",
            "-maximumfollowrellink",
            "-maximumredirection",
            "-maximumretrycount",
            "-proxy",
            "-proxycredential",
            "-responseheaderstvariable",
            "-retryintervalsec",
            "-sessionvariable",
            "-statuscodevariable",
            "-timeoutsec",
            "-token",
            "-transferencoding",
            "-useragent",
            "-websession",
            "-credential",
            "-authentication",
            "-certificate",
            "-certificatethumbprint",
            "-form",
            "-httpversion"
        ]
    },
    "expand-archive": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp",
            "-destinationpath"
        ],
        knownSwitches: [
            "-force",
            "-passthru",
            "-whatif",
            "-confirm"
        ],
        knownValueParams: []
    },
    "compress-archive": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp",
            "-destinationpath"
        ],
        knownSwitches: [
            "-force",
            "-update",
            "-passthru",
            "-whatif",
            "-confirm"
        ],
        knownValueParams: [
            "-compressionlevel"
        ]
    },
    "set-itemproperty": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-passthru",
            "-force",
            "-whatif",
            "-confirm",
            "-usetransaction"
        ],
        knownValueParams: [
            "-name",
            "-value",
            "-type",
            "-filter",
            "-include",
            "-exclude",
            "-credential",
            "-inputobject"
        ]
    },
    "new-itemproperty": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-force",
            "-whatif",
            "-confirm",
            "-usetransaction"
        ],
        knownValueParams: [
            "-name",
            "-value",
            "-propertytype",
            "-type",
            "-filter",
            "-include",
            "-exclude",
            "-credential"
        ]
    },
    "remove-itemproperty": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-force",
            "-whatif",
            "-confirm",
            "-usetransaction"
        ],
        knownValueParams: [
            "-name",
            "-filter",
            "-include",
            "-exclude",
            "-credential"
        ]
    },
    "clear-item": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-force",
            "-whatif",
            "-confirm",
            "-usetransaction"
        ],
        knownValueParams: [
            "-filter",
            "-include",
            "-exclude",
            "-credential"
        ]
    },
    "export-alias": {
        operationType: "write",
        pathParams: [
            "-path",
            "-literalpath",
            "-pspath",
            "-lp"
        ],
        knownSwitches: [
            "-append",
            "-force",
            "-noclobber",
            "-passthru",
            "-whatif",
            "-confirm"
        ],
        knownValueParams: [
            "-name",
            "-description",
            "-scope",
            "-as"
        ]
    }
};
function Vn(e) {
    return [
        [
            "path",
            e.pathParams
        ],
        [
            "leafOnly",
            e.leafOnlyPathParams ?? []
        ],
        [
            "switch",
            [
                ...e.knownSwitches,
                ...CVr
            ]
        ],
        [
            "value",
            [
                ...e.knownValueParams,
                ...RVr
            ]
        ]
    ];
}
function jn(e, n) {
    let s = new Set;
    let r = new Map;
    let m = false;
    for (let [v, g] of n){
        for (let _ of g){
            if (_ === e) {
                s.add(v);
            } else if (e.length > 1 && _.startsWith(e)) {
                let S = r.get(_);
                if (S !== undefined && S !== v) {
                    m = true;
                }
                r.set(_, v);
            }
        }
    }
    if (s.size > 1) {
        return "ambiguous";
    }
    let h = [
        ...s
    ][0];
    if (h !== undefined) {
        if (h === "value" && (m || [
            ...r.values()
        ].some((g)=>g !== "value"))) {
            return "ambiguous";
        }
        return h;
    }
    if (m || r.size > 1) {
        return "ambiguous";
    }
    let y = [
        ...r.values()
    ][0];
    if (y !== undefined) {
        return y;
    }
    return "unknown";
}
function Be(e) {
    if (O() !== "windows") {
        return e;
    }
    return e.split(/([/\\])/).map((n, s)=>{
        if (s % 2 !== 0) {
            return n;
        }
        return IW(n);
    }).join("");
}
function Je(e) {
    return $X(e);
}
function mt(e) {
    if (/['"\u2018-\u201F]/.test(e)) {
        return true;
    }
    if (e.includes("\u180E")) {
        return true;
    }
    let n = Je(e);
    return n.includes(",") || n.startsWith("(") || n.startsWith("[") || n.includes("`") || n.includes("@(") || n.startsWith("@") || n.includes("$");
}
function Qe(e) {
    let e_length = e.length;
    if (e_length <= dt) {
        return e.map((r)=>`'${r}'`).join(", ");
    }
    return `${e.slice(0, dt).map((r)=>`'${r}'`).join(", ")}, and ${e_length - dt} more`;
}
function Ee(e) {
    if (e === "~" || e.startsWith("~/") || e.startsWith("~\\")) {
        return homedir() + e.slice(1);
    }
    return e;
}
function Oe(e) {
    let n = new Set([
        o$(e),
        J6(e),
        mte(e)
    ]);
    for (let s of n){
        let r = s.indexOf("::");
        if (r >= 0 && $t(s.slice(r + 2)) || $t(s)) {
            return true;
        }
    }
    return false;
}
function $t(e) {
    let n = Ee(e).replace(/\\/g, "/");
    let s = Be(n);
    if (isAbsolute(s)) {
        s = normalize(s);
    }
    return yLe(s) || yLe(n);
}
function ht(e, n) {
    let s = new Set([
        e,
        J6(e),
        mte(e)
    ]);
    for (let r of [
        ...s
    ]){
        if (r.includes("`")) {
            s.add(vA(r));
        }
        if (r.includes("::")) {
            let m = r.slice(r.indexOf("::") + 2);
            s.add(m);
            if (m.includes("`")) {
                s.add(vA(m));
            }
        }
    }
    for (let r of s){
        let m = Be(Ee(r).replace(/\\/g, "/"));
        if (m === "") {
            continue;
        }
        let h = isAbsolute(m) ? m : resolve(n, m);
        let { resolvedPath } = yo(ie(), h);
        if (yLe(resolvedPath)) {
            return resolvedPath;
        }
    }
    return null;
}
function ue(e) {
    return o$(e) === e;
}
function ke(e, n = `Remove-Item on system path '${e}' is blocked. This path is protected from removal.`) {
    return {
        behavior: "deny",
        message: n,
        decisionReason: {
            type: "safetyCheck",
            reason: "Removal targets a protected system path",
            classifierApprovable: false
        }
    };
}
function Un(e) {
    let e_length = e.length;
    while(e_length > 0 && (e[e_length - 1] === "\\" || e[e_length - 1] === "/")){
        e_length--;
    }
    let s = e_length;
    while(s > 0 && "*?.".includes(e[s - 1])){
        s--;
    }
    let r = e.slice(s, e_length);
    if (!(s === 0 || e[s - 1] === "\\" || e[s - 1] === "/") || !/[*?]/.test(r)) {
        return e;
    }
    if (s === 0) {
        return ".";
    }
    return e.slice(0, s);
}
function zn(e, n, s, viaCd, m) {
    let h = Un(qpt(e));
    if (Oe(h)) {
        return {
            path: h,
            quotable: true
        };
    }
    let y = s && !/^(?:[A-Za-z]:)?[\\/]/.test(h);
    if (!Bn(h) && !y) {
        let v = ht(h, n);
        if (v !== null) {
            return {
                path: v,
                quotable: true
            };
        }
    }
    if (y && viaCd !== undefined && !/^[A-Za-z]:/.test(h)) {
        for (let v of new Set([
            viaCd,
            ut(viaCd, m)
        ])){
            if (!/^[A-Za-z]:[\\/]/.test(v)) {
                continue;
            }
            let g = win32.resolve(v, h);
            if (Oe(g)) {
                return {
                    path: g,
                    quotable: v === viaCd,
                    viaCd
                };
            }
        }
    }
    return null;
}
function Ft(e, n, s) {
    if (!Dt()) {
        return;
    }
    let r = Wt(e);
    if (r.length === 0) {
        return;
    }
    let m = bs();
    for (let { verb, text, emptied, afterCd, cdTarget } of r){
        if (emptied?.literalPrefix === "") {
            continue;
        }
        let S = emptied?.view ?? text;
        for (let w of new Set([
            S,
            ut(S, m)
        ])){
            let k = zn(w, n, s || afterCd, cdTarget, m);
            if (k === null) {
                continue;
            }
            let T = k.quotable && w === S;
            let C = k.viaCd === undefined ? null : `after this line's cd to '${k.viaCd}'`;
            let N = (T ? [
                C,
                emptied !== null ? "if its variables are empty" : null
            ] : [
                C,
                `with cmd's %NAME% variables replaced${emptied !== null ? " and PowerShell's $ variables empty" : ""}`
            ]).filter((F)=>F !== null).join(" and ");
            return ke(text, !T ? `cmd's ${verb} on '${text}' is blocked because, ${N}, it targets a path that no command may remove: a drive root, a folder directly under one, or the home folder.` : text === k.path ? `cmd's ${verb} on '${k.path}' is blocked because no command may remove that path.` : `cmd's ${verb} on '${text}' is blocked because${N === "" ? "" : `, ${N},`} it targets '${k.path}', which no command may remove.`);
        }
    }
}
function Ve(e, n, s, r) {
    if (!e || e.includes("\x00")) {
        return null;
    }
    let m = Ee(Be(e));
    let h = isAbsolute(m) ? m : resolve(n, m);
    let { resolvedPath } = yo(ie(), h);
    let v = r === "read" ? "read" : "edit";
    for (let g of _o(resolvedPath)){
        let _ = Ui(g, s, v, "deny");
        if (_ !== null) {
            return {
                resolvedPath,
                rule: _
            };
        }
    }
    return null;
}
function Ie(e, n, s, r) {
    let m = o$(e);
    let h = m !== e;
    if (h) {
        let T = new Set;
        for (let C of [
            e.replaceAll("\\", "/"),
            J6(e).replaceAll("\\", "/"),
            mte(e).replaceAll("\\", "/")
        ]){
            T.add(C);
            if (C.includes("`")) {
                T.add(vA(C));
            }
            if (C.includes("::")) {
                let P = C.slice(C.indexOf("::") + 2);
                T.add(P);
                if (P.includes("`")) {
                    T.add(vA(P));
                }
            }
        }
        for (let C of T){
            let P = Ve(C, n, s, r);
            if (P) {
                return {
                    allowed: false,
                    resolvedPath: P.resolvedPath,
                    decisionReason: {
                        type: "rule",
                        rule: P.rule
                    }
                };
            }
        }
    }
    let y = (resolvedPath_1)=>({
            allowed: false,
            resolvedPath: resolvedPath_1,
            decisionReason: {
                type: "other",
                reason: "Paths containing quote characters cannot be statically validated and require manual approval"
            }
        });
    let resolvedPath_3 = Ee(m).replaceAll("\\", "/");
    if (/^~[^/]/.test(resolvedPath_3)) {
        return {
            allowed: false,
            resolvedPath: resolvedPath_3,
            decisionReason: {
                type: "other",
                reason: "Paths beginning with ~user cannot be statically validated and require manual approval"
            }
        };
    }
    if (resolvedPath_3.includes("`")) {
        let T = vA(resolvedPath_3);
        let C = Ve(T, n, s, r);
        if (C) {
            return {
                allowed: false,
                resolvedPath: C.resolvedPath,
                decisionReason: {
                    type: "rule",
                    rule: C.rule
                }
            };
        }
        return {
            allowed: false,
            resolvedPath: resolvedPath_3,
            decisionReason: {
                type: "other",
                reason: "Backtick escape characters in paths cannot be statically validated and require manual approval"
            }
        };
    }
    if (resolvedPath_3.includes("::")) {
        let T = resolvedPath_3.slice(resolvedPath_3.indexOf("::") + 2);
        let C = Ve(T, n, s, r);
        if (C) {
            return {
                allowed: false,
                resolvedPath: C.resolvedPath,
                decisionReason: {
                    type: "rule",
                    rule: C.rule
                }
            };
        }
        return {
            allowed: false,
            resolvedPath: resolvedPath_3,
            decisionReason: {
                type: "other",
                reason: "Module-qualified provider paths (::) cannot be statically validated and require manual approval"
            }
        };
    }
    if (O() === "windows" && /^[a-z]:(?![/\\])/i.test(resolvedPath_3)) {
        return {
            allowed: false,
            resolvedPath: resolvedPath_3,
            decisionReason: {
                type: "other",
                reason: `Path '${h ? e : resolvedPath_3}' is drive-relative (resolves against the per-drive current directory, which cannot be statically validated) and requires manual approval`
            }
        };
    }
    resolvedPath_3 = Be(resolvedPath_3);
    if (Bn(resolvedPath_3) || /DavWWWRoot/i.test(resolvedPath_3) || /@SSL@/i.test(resolvedPath_3)) {
        return {
            allowed: false,
            resolvedPath: resolvedPath_3,
            decisionReason: {
                type: "other",
                reason: "UNC paths are blocked because they can trigger network requests and credential leakage"
            }
        };
    }
    if (resolvedPath_3.includes("$") || resolvedPath_3.includes("%")) {
        return {
            allowed: false,
            resolvedPath: resolvedPath_3,
            decisionReason: {
                type: "other",
                reason: "Variable expansion syntax in paths requires manual approval"
            }
        };
    }
    if ((O() === "windows" ? /^[a-z0-9]{2,}:/i : /^[a-z0-9]+:/i).test(resolvedPath_3)) {
        return {
            allowed: false,
            resolvedPath: resolvedPath_3,
            decisionReason: {
                type: "other",
                reason: `Path '${h ? e : resolvedPath_3}' uses a non-filesystem provider and requires manual approval`
            }
        };
    }
    if (GAe(resolvedPath_3)) {
        let T = Ve(resolvedPath_3, n, s, r);
        if (T) {
            return {
                allowed: false,
                resolvedPath: T.resolvedPath,
                decisionReason: {
                    type: "rule",
                    rule: T.rule
                }
            };
        }
        return {
            allowed: false,
            resolvedPath: resolve(n, resolvedPath_3),
            decisionReason: {
                type: "other",
                reason: "Path contains '..' traversal after a directory segment, which may follow a symlink outside the working directory"
            }
        };
    }
    if (GO(resolvedPath_3) !== -1) {
        if (r === "write" || r === "create") {
            return {
                allowed: false,
                resolvedPath: resolvedPath_3,
                decisionReason: {
                    type: "other",
                    reason: "Glob patterns are not allowed in write operations. Please specify an exact file path."
                }
            };
        }
        if (CH(resolvedPath_3)) {
            let I = isAbsolute(resolvedPath_3) ? resolvedPath_3 : resolve(n, resolvedPath_3);
            let { resolvedPath: resolvedPath_2 } = yo(ie(), I);
            let U = r === "read" ? "read" : "edit";
            for (let V of _o(resolvedPath_2)){
                let q = Ui(V, s, U, "deny");
                if (q !== null) {
                    return {
                        allowed: false,
                        resolvedPath: resolvedPath_2,
                        decisionReason: {
                            type: "rule",
                            rule: q
                        }
                    };
                }
            }
            if (h) {
                return y(resolvedPath_2);
            }
            return {
                allowed: false,
                resolvedPath: resolvedPath_2,
                decisionReason: {
                    type: "other",
                    reason: "Glob patterns in paths cannot be statically validated — symlinks inside the glob expansion are not examined. Requires manual approval."
                }
            };
        }
        let T = qn(resolvedPath_3);
        let C = isAbsolute(T) ? T : resolve(n, T);
        let { resolvedPath: resolvedPath_1 } = yo(ie(), C);
        let F = Ui(resolvedPath_1, s, r === "read" ? "read" : "edit", "deny");
        if (F !== null) {
            return {
                allowed: false,
                resolvedPath: resolvedPath_1,
                decisionReason: {
                    type: "rule",
                    rule: F
                }
            };
        }
        return {
            allowed: false,
            resolvedPath: resolvedPath_1,
            decisionReason: {
                type: "other",
                reason: "Glob patterns in paths cannot be statically validated — symlinks inside the glob expansion are not examined. Requires manual approval."
            }
        };
    }
    let S = isAbsolute(resolvedPath_3) ? resolvedPath_3 : resolve(n, resolvedPath_3);
    let { resolvedPath, ...rest } = $mr(S, s, r);
    if (h && rest.allowed) {
        return y(resolvedPath);
    }
    if (h && !rest.allowed && rest.decisionReason?.type === "safetyCheck") {
        return {
            allowed: false,
            resolvedPath,
            decisionReason: {
                type: "safetyCheck",
                reason: `Path '${e}' resolves near a sensitive file under quote-stripping and cannot be statically validated; requires manual approval`,
                classifierApprovable: false
            }
        };
    }
    return {
        ...rest,
        resolvedPath
    };
}
function qn(resolvedPath) {
    let n = GO(resolvedPath);
    if (n === -1) {
        return resolvedPath;
    }
    let s = resolvedPath.substring(0, n);
    let r = Math.max(s.lastIndexOf("/"), s.lastIndexOf("\\"));
    if (r === -1) {
        return ".";
    }
    return s.substring(0, r + 1) || "/";
}
const Hn = new Set([
    "StringConstant",
    "Parameter"
]);
const Gn = new Set([
    "get-childitem",
    "get-item",
    "get-itemproperty",
    "resolve-path",
    "convert-path",
    "get-filehash",
    "get-acl",
    "test-path"
]);
function Vt(e) {
    let n = cb(e.name);
    let s = _s(pt, n);
    if (!s) {
        return {
            paths: [],
            operationType: "read",
            hasUnvalidatablePathArg: false,
            optionalWrite: false
        };
    }
    let r = Vn(s);
    let paths = [];
    let { args, elementTypes } = e;
    let hasUnvalidatablePathArg = false;
    let g = 0;
    let _ = s.positionalSkip ?? 0;
    function S(w) {
        if (!elementTypes) {
            return;
        }
        let k = elementTypes[w + 1];
        if (k && !Hn.has(k)) {
            hasUnvalidatablePathArg = true;
        }
    }
    for(let w = 0; w < args.length; w++){
        let arg = args[w];
        if (!arg) {
            continue;
        }
        let T = elementTypes ? elementTypes[w + 1] : undefined;
        if (mke(arg, T)) {
            let C = `-${arg.slice(1)}`;
            let P = C.indexOf(":", 1);
            let F = (P > 0 ? C.substring(0, P) : C).toLowerCase();
            let I = jn(F, r);
            if (I === "path") {
                let D;
                if (P > 0) {
                    let U = arg.substring(P + 1);
                    if (mt(U)) {
                        hasUnvalidatablePathArg = true;
                    }
                    D = Je(U);
                } else {
                    let U = args[w + 1];
                    let V = elementTypes ? elementTypes[w + 2] : undefined;
                    if (U && !mke(U, V)) {
                        D = U;
                        S(w + 1);
                        w++;
                    }
                }
                if (D) {
                    paths.push(D);
                }
            } else if (I === "leafOnly") {
                let D;
                if (P > 0) {
                    let U = arg.substring(P + 1);
                    if (mt(U)) {
                        hasUnvalidatablePathArg = true;
                    }
                    D = Je(U);
                } else {
                    let U = args[w + 1];
                    let V = elementTypes ? elementTypes[w + 2] : undefined;
                    if (U && !mke(U, V)) {
                        D = U;
                        S(w + 1);
                        w++;
                    }
                }
                if (D !== undefined) {
                    if (D.includes("/") || D.includes("\\") || D === "." || D === "..") {
                        hasUnvalidatablePathArg = true;
                    } else {
                        paths.push(D);
                    }
                }
            } else if (I === "switch") ;
            else if (I === "value") {
                if (P > 0) {
                    if (mt(arg.substring(P + 1))) {
                        hasUnvalidatablePathArg = true;
                    }
                } else {
                    let D = args[w + 1];
                    let U = elementTypes ? elementTypes[w + 2] : undefined;
                    if (D && !mke(D, U)) {
                        S(w + 1);
                        w++;
                    }
                }
            } else {
                hasUnvalidatablePathArg = true;
                {
                    let D = args[w + 1];
                    let U = elementTypes ? elementTypes[w + 2] : undefined;
                    if (D && !mke(D, U)) {
                        paths.push(D);
                    }
                }
                if (P > 0) {
                    let D = arg.substring(P + 1);
                    paths.push(Je(D));
                }
            }
            continue;
        }
        if (g < _) {
            g++;
            continue;
        }
        g++;
        S(w);
        paths.push(arg);
    }
    return {
        paths,
        operationType: s.operationType,
        hasUnvalidatablePathArg,
        optionalWrite: s.optionalWrite ?? false
    };
}
function Bt(e, n, s, r = false) {
    if (!n.valid) {
        return {
            behavior: "passthrough",
            message: "Cannot validate paths for unparsed command"
        };
    }
    let m;
    let h;
    for (let y of n.statements){
        let v = Zn(y, s, r);
        if (v.behavior === "deny") {
            return v;
        }
        if (v.behavior === "ask") {
            m ??= v;
            if (AN(v.decisionReason)) {
                h ??= v;
            }
        }
    }
    return h ?? m ?? {
        behavior: "passthrough",
        message: "All path constraints validated successfully"
    };
}
function Kn(e, n, s, r) {
    let m = cb(e.name);
    let e_elementTypes = e.elementTypes;
    let y = e.name.slice(Math.max(e.name.lastIndexOf("\\"), e.name.lastIndexOf("/")) + 1).replace(/\.exe$/i, "").replace(/[\d.]+$/, "");
    let v = yHt.get(y) ?? (y.toLowerCase() === "cmd" ? new Set([
        "/c",
        "/k"
    ]) : undefined);
    if (v !== undefined && e.args.some((_)=>{
        let S = _.toLowerCase();
        return [
            ...v
        ].some((w)=>S === w.toLowerCase() || S.startsWith(`${w.toLowerCase()}=`));
    })) {
        return Dz(`${m} runs inline code, which cannot be checked against the read block`);
    }
    let g;
    for(let _ = 0; _ < e.args.length; _++){
        let arg = e.args[_];
        let w = e_elementTypes ? e_elementTypes[_ + 1] : undefined;
        if (w !== undefined && w !== "StringConstant" && w !== "Parameter") {
            g ??= jy(m);
            continue;
        }
        if (arg === "") {
            continue;
        }
        let k = arg.indexOf(":");
        let T = arg.indexOf("=");
        let C = k > 0 && /^[-/][A-Za-z]+$/.test(arg.slice(0, k)) ? arg.slice(k + 1) : T > 0 && /^--?[A-Za-z][A-Za-z-]*$/.test(arg.slice(0, T)) ? arg.slice(T + 1) : undefined;
        if (C !== undefined && C.includes("$")) {
            g ??= jy(m);
            continue;
        }
        if (Bn(arg)) {
            g ??= jy(m);
            continue;
        }
        if (C === undefined && mke(arg, w)) {
            continue;
        }
        for (let P of C !== undefined ? [
            C
        ] : [
            arg
        ]){
            if (P === "") {
                continue;
            }
            if (P.startsWith("~") && P !== "~" && !/^~[\\/]/.test(P)) {
                g ??= jy(m);
                continue;
            }
            let N = Ee(P);
            if (r && !isAbsolute(N)) {
                g ??= jy(m);
                continue;
            }
            let F = P;
            let I = GO(N);
            if (I !== -1) {
                let q = N.slice(0, I);
                F = /[\\/]$/.test(q) ? q : dirname(q);
            }
            let D = Ee(F);
            if (Bn(D)) {
                g ??= jy(m);
                continue;
            }
            let U = isAbsolute(D) ? D : resolve(n, D);
            if (!GAe(D.replaceAll("\\", "/")) && !ie().existsSync(U)) {
                continue;
            }
            let V = Ie(F, n, s, "read");
            if (V.allowed) {
                continue;
            }
            if (V.decisionReason?.type === "rule") {
                return {
                    behavior: "deny",
                    message: `${m} targeting '${V.resolvedPath}' was blocked by a deny rule`,
                    decisionReason: V.decisionReason
                };
            }
            if (AN(V.decisionReason)) {
                g ??= ft(m, V.decisionReason, ue(F) ? V.resolvedPath : undefined);
                continue;
            }
            g ??= jy(m);
        }
    }
    return g;
}
function Yn(args) {
    let n = false;
    let s = false;
    for(let r = 0; r < args.length; r++){
        let h = args[r].toLowerCase();
        let y = h.indexOf(":");
        let v = y > 0 ? h.slice(0, y) : h;
        let g = y > 0 ? h.slice(y + 1) : (args[r + 1] ?? "").toLowerCase();
        if (v.length >= 2 && ("-itemtype".startsWith(v) || "-type".startsWith(v)) && /link|junction/.test(g)) {
            n = true;
        }
        if (v.length >= 2 && "-value".startsWith(v)) {
            s = true;
        }
    }
    return n && s;
}
const Xn = new Set([
    "copy-item",
    "move-item",
    "compress-archive",
    "expand-archive",
    "invoke-webrequest",
    "invoke-restmethod",
    "new-item"
]);
function ft(e, decisionReason, blockedPath) {
    return {
        behavior: "ask",
        message: `${e} names a path outside the working directories, which the read block does not allow without asking (permissions.blockReadsOutsideWorkingDirectories). Add the directory with /add-dir, or remove that setting.`,
        blockedPath,
        decisionReason
    };
}
function Zn(e, n, s = false) {
    let r = se();
    let m;
    let h;
    let y = n.blockReadsOutsideWorkingDirectories === true;
    let v = (w, operationType)=>y && (operationType === "read" || Xn.has(w));
    if (s) {
        m = {
            behavior: "ask",
            message: "Compound command changes working directory (Set-Location/Push-Location/Pop-Location/New-PSDrive) — relative paths cannot be validated against the original cwd and require manual approval",
            decisionReason: {
                type: "other",
                reason: "Compound command contains cd with path operation — manual approval required to prevent path resolution bypass"
            }
        };
    }
    let g = false;
    let _;
    let S = false;
    for (let w of e.commands){
        if (w.elementType !== "CommandAst") {
            g = true;
            _ = w.text;
            continue;
        }
        let { paths, operationType, hasUnvalidatablePathArg, optionalWrite } = Vt(w);
        let N = cb(w.name);
        let F = _s(pt, N) !== undefined;
        let I = Ft(w, r, s);
        if (I !== undefined) {
            return I;
        }
        if (y && !F) {
            let V = Kn(w, r, n, s);
            if (V?.behavior === "deny") {
                return V;
            }
            h ??= V;
        }
        if (y && N === "new-item" && Yn(w.args)) {
            h ??= jy(N);
        }
        let D = S;
        if (!Gn.has(N)) {
            S = true;
        }
        if (g) {
            let V = cb(w.name);
            if (_ !== undefined) {
                let q = new Set;
                for (let z of [
                    _,
                    o$(_),
                    J6(_),
                    mte(_)
                ]){
                    q.add(z);
                    if (z.includes("`")) {
                        q.add(vA(z));
                    }
                    if (z.includes("::")) {
                        let G = z.slice(z.indexOf("::") + 2);
                        q.add(G);
                        if (G.includes("`")) {
                            q.add(vA(G));
                        }
                    }
                }
                for (let z of q){
                    let G = Ve(z, r, n, operationType);
                    if (G) {
                        return {
                            behavior: "deny",
                            message: `${V} targeting '${G.resolvedPath}' was blocked by a deny rule`,
                            decisionReason: {
                                type: "rule",
                                rule: G.rule
                            }
                        };
                    }
                }
            }
            m ??= {
                behavior: "ask",
                message: `${V} receives its path from a pipeline expression source that cannot be statically validated and requires manual approval`
            };
            if (v(N, operationType)) {
                h ??= jy(N);
            }
        }
        if (hasUnvalidatablePathArg) {
            let V = cb(w.name);
            m ??= {
                behavior: "ask",
                message: `${V} uses a parameter or complex path expression (array literal, subexpression, unknown parameter, etc.) that cannot be statically validated and requires manual approval`
            };
            if (v(N, operationType)) {
                h ??= jy(N);
            }
        }
        if (operationType !== "read" && !optionalWrite && paths.length === 0 && F) {
            m ??= {
                behavior: "ask",
                message: `${N} is a write operation but no target path could be determined; requires manual approval`
            };
            continue;
        }
        if (D && F) {
            m ??= {
                behavior: "ask",
                message: `${N} may receive a path from an upstream pipeline command whose output cannot be statically validated and requires manual approval`
            };
            if (v(N, operationType)) {
                h ??= jy(N);
            }
        }
        let U = cb(w.name) === "remove-item";
        if (U) {
            if (w.args.some((q)=>{
                let z = (q.length > 0 ? `-${q.slice(1)}` : q).toLowerCase();
                let G = z.indexOf(":");
                let X = G > 0 ? z.slice(0, G) : z;
                return X.length >= 2 && "-recurse".startsWith(X);
            })) {
                let q = to(r);
                for (let z of paths){
                    let G = Ee(Be(z)).replace(/\\/g, "/");
                    let X = isAbsolute(G) ? resolve(G) : resolve(r, G);
                    let re = to(X);
                    if (re === q || q.startsWith(`${re}/`) || q.startsWith(`${re}\\`)) {
                        m ??= {
                            behavior: "ask",
                            message: `Remove-Item -Recurse targeting '${z}' would delete the working directory including .git and .claude \u2014 requires manual approval`
                        };
                        break;
                    }
                }
            }
        }
        if (s && v(N, operationType) && paths.some((V)=>!isAbsolute(Ee(V)))) {
            h ??= jy(N);
        }
        for (let V of paths){
            if (U && Oe(V)) {
                return ke(V);
            }
            let { allowed, resolvedPath, decisionReason } = Ie(V, r, n, operationType);
            if (operationType !== "read" && v(N, operationType)) {
                let X = Ie(V, r, n, "read");
                if (!X.allowed && X.decisionReason?.type === "rule") {
                    return {
                        behavior: "deny",
                        message: `${N} targeting '${X.resolvedPath}' was blocked by a deny rule`,
                        decisionReason: X.decisionReason
                    };
                }
                if (!X.allowed && AN(X.decisionReason)) {
                    h ??= ft(N, X.decisionReason, ue(V) ? X.resolvedPath : undefined);
                }
            }
            if (U && yLe(resolvedPath)) {
                return ke(resolvedPath);
            }
            if (U) {
                let X = ht(V, r);
                if (X !== null) {
                    return ke(X);
                }
            }
            if (!allowed) {
                let X = cb(w.name);
                let re = Array.from(Ok(n));
                let me = Qe(re);
                let ye = decisionReason?.type === "other" || decisionReason?.type === "safetyCheck" ? decisionReason.reason : `${X} targeting '${ue(V) ? resolvedPath : V}' was blocked. For security, Claude Code may only access files in the allowed working directories for this session: ${me}.`;
                if (decisionReason?.type === "rule") {
                    return {
                        behavior: "deny",
                        message: ye,
                        decisionReason
                    };
                }
                let te = [];
                if (resolvedPath && ue(V)) {
                    if (operationType === "read") {
                        let J = u4e(yq(resolvedPath), "session");
                        if (J) {
                            te.push(J);
                        }
                    } else {
                        te.push({
                            type: "addDirectories",
                            directories: [
                                yq(resolvedPath)
                            ],
                            destination: "session"
                        });
                    }
                }
                if (ue(V) && (operationType === "write" || operationType === "create") && Xst(n)) {
                    te.push({
                        type: "setMode",
                        mode: "acceptEdits",
                        destination: "session"
                    });
                }
                let ge = {
                    behavior: "ask",
                    message: ye,
                    blockedPath: ue(V) ? resolvedPath : undefined,
                    decisionReason,
                    suggestions: te
                };
                m ??= ge;
                if (AN(decisionReason)) {
                    h ??= ge;
                }
            }
        }
    }
    if (e.nestedCommands) {
        for (let w of e.nestedCommands){
            let { paths, operationType, hasUnvalidatablePathArg, optionalWrite } = Vt(w);
            let N = cb(w.name);
            let F = Ft(w, r, s);
            if (F !== undefined) {
                return F;
            }
            if (hasUnvalidatablePathArg) {
                m ??= {
                    behavior: "ask",
                    message: `${N} uses a parameter or complex path expression (array literal, subexpression, unknown parameter, etc.) that cannot be statically validated and requires manual approval`
                };
                if (v(N, operationType)) {
                    h ??= jy(N);
                }
            }
            if (operationType !== "read" && !optionalWrite && paths.length === 0 && _s(pt, N) !== undefined) {
                m ??= {
                    behavior: "ask",
                    message: `${N} is a write operation but no target path could be determined; requires manual approval`
                };
                continue;
            }
            let I = cb(w.name) === "remove-item";
            for (let D of paths){
                if (I && Oe(D)) {
                    return ke(D);
                }
                let { allowed, resolvedPath, decisionReason } = Ie(D, r, n, operationType);
                if (operationType !== "read" && v(N, operationType)) {
                    let z = Ie(D, r, n, "read");
                    if (!z.allowed && z.decisionReason?.type === "rule") {
                        return {
                            behavior: "deny",
                            message: `${N} targeting '${z.resolvedPath}' was blocked by a deny rule`,
                            decisionReason: z.decisionReason
                        };
                    }
                    if (!z.allowed && AN(z.decisionReason)) {
                        h ??= ft(N, z.decisionReason, ue(D) ? z.resolvedPath : undefined);
                    }
                }
                if (I && yLe(resolvedPath)) {
                    return ke(resolvedPath);
                }
                if (I) {
                    let z = ht(D, r);
                    if (z !== null) {
                        return ke(z);
                    }
                }
                if (!allowed) {
                    let z = cb(w.name);
                    let G = Array.from(Ok(n));
                    let X = Qe(G);
                    let re = decisionReason?.type === "other" || decisionReason?.type === "safetyCheck" ? decisionReason.reason : `${z} targeting '${ue(D) ? resolvedPath : D}' was blocked. For security, Claude Code may only access files in the allowed working directories for this session: ${X}.`;
                    if (decisionReason?.type === "rule") {
                        return {
                            behavior: "deny",
                            message: re,
                            decisionReason
                        };
                    }
                    let me = [];
                    if (resolvedPath && ue(D)) {
                        if (operationType === "read") {
                            let te = u4e(yq(resolvedPath), "session");
                            if (te) {
                                me.push(te);
                            }
                        } else {
                            me.push({
                                type: "addDirectories",
                                directories: [
                                    yq(resolvedPath)
                                ],
                                destination: "session"
                            });
                        }
                    }
                    if (ue(D) && (operationType === "write" || operationType === "create") && Xst(n)) {
                        me.push({
                            type: "setMode",
                            mode: "acceptEdits",
                            destination: "session"
                        });
                    }
                    let ye = {
                        behavior: "ask",
                        message: re,
                        blockedPath: ue(D) ? resolvedPath : undefined,
                        decisionReason,
                        suggestions: me
                    };
                    m ??= ye;
                    if (AN(decisionReason)) {
                        h ??= ye;
                    }
                }
            }
            if (g) {
                m ??= {
                    behavior: "ask",
                    message: `${cb(w.name)} appears inside a control-flow or chain statement where piped expression sources cannot be statically validated and requires manual approval`
                };
            }
        }
    }
    if (e.nestedCommands) {
        for (let w of e.nestedCommands){
            if (w.redirections) {
                for (let k of w.redirections){
                    if (k.isMerging) {
                        continue;
                    }
                    if (!k.target) {
                        continue;
                    }
                    if (iwt(k.target)) {
                        continue;
                    }
                    let { allowed, resolvedPath, decisionReason } = Ie(k.target, r, n, "create");
                    if (!allowed) {
                        let N = Array.from(Ok(n));
                        let F = Qe(N);
                        let I = decisionReason?.type === "other" || decisionReason?.type === "safetyCheck" ? decisionReason.reason : `Output redirection to '${ue(k.target) ? resolvedPath : k.target}' was blocked. For security, Claude Code may only write to files in the allowed working directories for this session: ${F}.`;
                        if (decisionReason?.type === "rule") {
                            return {
                                behavior: "deny",
                                message: I,
                                decisionReason
                            };
                        }
                        m ??= {
                            behavior: "ask",
                            message: I,
                            blockedPath: ue(k.target) ? resolvedPath : undefined,
                            decisionReason,
                            suggestions: ue(k.target) ? [
                                {
                                    type: "addDirectories",
                                    directories: [
                                        yq(resolvedPath)
                                    ],
                                    destination: "session"
                                }
                            ] : []
                        };
                    }
                }
            }
        }
    }
    if (e.redirections) {
        for (let w of e.redirections){
            if (w.isMerging) {
                continue;
            }
            if (!w.target) {
                continue;
            }
            if (iwt(w.target)) {
                continue;
            }
            let { allowed, resolvedPath, decisionReason } = Ie(w.target, r, n, "create");
            if (!allowed) {
                let P = Array.from(Ok(n));
                let N = Qe(P);
                let F = decisionReason?.type === "other" || decisionReason?.type === "safetyCheck" ? decisionReason.reason : `Output redirection to '${ue(w.target) ? resolvedPath : w.target}' was blocked. For security, Claude Code may only write to files in the allowed working directories for this session: ${N}.`;
                if (decisionReason?.type === "rule") {
                    return {
                        behavior: "deny",
                        message: F,
                        decisionReason
                    };
                }
                m ??= {
                    behavior: "ask",
                    message: F,
                    blockedPath: ue(w.target) ? resolvedPath : undefined,
                    decisionReason,
                    suggestions: ue(w.target) ? [
                        {
                            type: "addDirectories",
                            directories: [
                                yq(resolvedPath)
                            ],
                            destination: "session"
                        }
                    ] : []
                };
            }
        }
    }
    return h ?? m ?? {
        behavior: "passthrough",
        message: "All path constraints validated successfully"
    };
}
const Qn = new Set([
    "alias",
    "allowemptycollection",
    "allowemptystring",
    "allownull",
    "argumentcompleter",
    "argumentcompletions",
    "array",
    "bigint",
    "bool",
    "byte",
    "char",
    "cimclass",
    "cimconverter",
    "ciminstance",
    "cimtype",
    "cmdletbinding",
    "cultureinfo",
    "datetime",
    "decimal",
    "double",
    "dsclocalconfigurationmanager",
    "dscproperty",
    "dscresource",
    "experimentaction",
    "experimental",
    "experimentalfeature",
    "float",
    "guid",
    "hashtable",
    "int",
    "int16",
    "int32",
    "int64",
    "ipaddress",
    "ipendpoint",
    "long",
    "mailaddress",
    "norunspaceaffinity",
    "nullstring",
    "objectsecurity",
    "ordered",
    "outputtype",
    "parameter",
    "physicaladdress",
    "pscredential",
    "pscustomobject",
    "psdefaultvalue",
    "pslistmodifier",
    "psobject",
    "psprimitivedictionary",
    "pstypenameattribute",
    "ref",
    "regex",
    "sbyte",
    "securestring",
    "semver",
    "short",
    "single",
    "string",
    "supportswildcards",
    "switch",
    "timespan",
    "uint",
    "uint16",
    "uint32",
    "uint64",
    "ulong",
    "uri",
    "ushort",
    "validatecount",
    "validatedrive",
    "validatelength",
    "validatenotnull",
    "validatenotnullorempty",
    "validatenotnullorwhitespace",
    "validatepattern",
    "validaterange",
    "validatescript",
    "validateset",
    "validatetrusteddata",
    "validateuserdrive",
    "version",
    "void",
    "wildcardpattern",
    "x500distinguishedname",
    "x509certificate",
    "xml",
    "system.array",
    "system.boolean",
    "system.byte",
    "system.char",
    "system.datetime",
    "system.decimal",
    "system.double",
    "system.guid",
    "system.int16",
    "system.int32",
    "system.int64",
    "system.numerics.biginteger",
    "system.sbyte",
    "system.single",
    "system.string",
    "system.timespan",
    "system.uint16",
    "system.uint32",
    "system.uint64",
    "system.uri",
    "system.version",
    "system.void",
    "system.collections.hashtable",
    "system.text.regularexpressions.regex",
    "system.globalization.cultureinfo",
    "system.net.ipaddress",
    "system.net.ipendpoint",
    "system.net.mail.mailaddress",
    "system.net.networkinformation.physicaladdress",
    "system.security.securestring",
    "system.security.cryptography.x509certificates.x509certificate",
    "system.security.cryptography.x509certificates.x500distinguishedname",
    "system.xml.xmldocument",
    "system.management.automation.pscredential",
    "system.management.automation.pscustomobject",
    "system.management.automation.pslistmodifier",
    "system.management.automation.psobject",
    "system.management.automation.psprimitivedictionary",
    "system.management.automation.psreference",
    "system.management.automation.semanticversion",
    "system.management.automation.switchparameter",
    "system.management.automation.wildcardpattern",
    "system.management.automation.language.nullstring",
    "microsoft.management.infrastructure.cimclass",
    "microsoft.management.infrastructure.cimconverter",
    "microsoft.management.infrastructure.ciminstance",
    "microsoft.management.infrastructure.cimtype",
    "system.collections.specialized.ordereddictionary",
    "system.security.accesscontrol.objectsecurity",
    "object",
    "system.object",
    "microsoft.powershell.commands.modulespecification"
].map((e)=>e.toLowerCase()));
function Jn(e) {
    return e.toLowerCase().replace(/\[\]$/, "").replace(/\[.*\]$/, "").trim();
}
function gt(e) {
    return Qn.has(Jn(e));
}
const jt = new Set([
    "pwsh",
    "pwsh.exe",
    "powershell",
    "powershell.exe"
]);
function wt(e) {
    let n = e.toLowerCase();
    if (jt.has(n)) {
        return true;
    }
    let s = Math.max(n.lastIndexOf("/"), n.lastIndexOf("\\"));
    if (s >= 0) {
        return jt.has(n.slice(s + 1));
    }
    return false;
}
const es = new Set([
    "/",
    "–",
    "—",
    "―"
]);
function We(e, n, s) {
    if (R3r(e, n, s)) {
        return true;
    }
    let r = {
        ...e,
        args: e.args.map((m)=>{
            if (m.length > 0 && es.has(m[0])) {
                return `-${m.slice(1)}`;
            }
            return m;
        })
    };
    return R3r(r, n, s);
}
function ts(e) {
    if (C3r(e, "Invoke-Expression")) {
        return {
            behavior: "ask",
            message: "Command uses Invoke-Expression which can execute arbitrary code"
        };
    }
    return {
        behavior: "passthrough"
    };
}
function ns(e) {
    for (let n of GU(e)){
        if (n.elementType !== "CommandAst") {
            continue;
        }
        let s = n.elementTypes?.[0];
        if (s !== undefined && s !== "StringConstant") {
            return {
                behavior: "ask",
                message: "Command name is a dynamic expression which cannot be statically validated"
            };
        }
    }
    return {
        behavior: "passthrough"
    };
}
function ss(e) {
    for (let n of GU(e)){
        if (wt(n.name)) {
            if (We(n, "-encodedcommand", "-e")) {
                return {
                    behavior: "ask",
                    message: "Command uses encoded parameters which obscure intent"
                };
            }
        }
    }
    return {
        behavior: "passthrough"
    };
}
function os(e) {
    for (let n of GU(e)){
        if (wt(n.name)) {
            return {
                behavior: "ask",
                message: "Command spawns a nested PowerShell process which cannot be validated"
            };
        }
    }
    return {
        behavior: "passthrough"
    };
}
const rs = new Set([
    "invoke-webrequest",
    "iwr",
    "invoke-restmethod",
    "irm",
    "new-object",
    "start-bitstransfer"
]);
function Ut(name) {
    return rs.has(name.toLowerCase());
}
function zt(name) {
    let n = name.toLowerCase();
    return n === "invoke-expression" || n === "iex";
}
function as(e) {
    for (let s of e.statements){
        let r = s.commands;
        if (r.length < 2) {
            continue;
        }
        let m = r.some((y)=>Ut(y.name));
        let h = r.some((y)=>zt(y.name));
        if (m && h) {
            return {
                behavior: "ask",
                message: "Command downloads and executes remote code"
            };
        }
    }
    let n = GU(e);
    if (n.some((s)=>Ut(s.name)) && n.some((s)=>zt(s.name))) {
        return {
            behavior: "ask",
            message: "Command downloads and executes remote code"
        };
    }
    return {
        behavior: "passthrough"
    };
}
function is(e) {
    for (let n of GU(e)){
        let s = n.name.toLowerCase();
        if (s === "start-bitstransfer") {
            return {
                behavior: "ask",
                message: "Command downloads files via BITS transfer"
            };
        }
        if (s === "certutil" || s === "certutil.exe") {
            if (n.args.some((m)=>{
                let h = m.toLowerCase();
                return h === "-urlcache" || h === "/urlcache";
            })) {
                return {
                    behavior: "ask",
                    message: "Command uses certutil to download from a URL"
                };
            }
        }
        if (s === "bitsadmin" || s === "bitsadmin.exe") {
            if (n.args.some((r)=>r.toLowerCase() === "/transfer")) {
                return {
                    behavior: "ask",
                    message: "Command downloads files via BITS transfer"
                };
            }
        }
    }
    return {
        behavior: "passthrough"
    };
}
function ls(e) {
    if (C3r(e, "Add-Type")) {
        return {
            behavior: "ask",
            message: "Command compiles and loads .NET code"
        };
    }
    return {
        behavior: "passthrough"
    };
}
function cs(e) {
    for (let n of GU(e)){
        if (n.name.toLowerCase() !== "new-object") {
            continue;
        }
        if (We(n, "-comobject", "-com")) {
            return {
                behavior: "ask",
                message: "Command instantiates a COM object which may have execution capabilities"
            };
        }
        let s;
        for(let r = 0; r < n.args.length; r++){
            let arg = n.args[r];
            let h = arg.toLowerCase();
            if (h.startsWith("-t") && h.includes(":")) {
                let y = arg.indexOf(":");
                let v = h.slice(0, y);
                if ("-typename".startsWith(v)) {
                    s = arg.slice(y + 1);
                    break;
                }
            }
            if (h.startsWith("-t") && "-typename".startsWith(h) && n.args[r + 1] !== undefined) {
                s = n.args[r + 1];
                break;
            }
        }
        if (s === undefined) {
            let r = new Set([
                "-argumentlist",
                "-comobject",
                "-property"
            ]);
            let m = new Set([
                "-strict"
            ]);
            for(let h = 0; h < n.args.length; h++){
                let arg = n.args[h];
                if (arg.startsWith("-")) {
                    let v = arg.toLowerCase();
                    if (v.startsWith("-t") && "-typename".startsWith(v)) {
                        h++;
                        continue;
                    }
                    if (v.includes(":")) {
                        continue;
                    }
                    if (m.has(v)) {
                        continue;
                    }
                    if (r.has(v)) {
                        h++;
                        continue;
                    }
                    continue;
                }
                s = arg;
                break;
            }
        }
        if (s !== undefined && !gt(s)) {
            return {
                behavior: "ask",
                message: `New-Object instantiates .NET type '${s}' outside the ConstrainedLanguage allowlist`
            };
        }
    }
    return {
        behavior: "passthrough"
    };
}
function us(e) {
    for (let n of GU(e)){
        let s = n.name.toLowerCase();
        let r = Bte[s]?.toLowerCase() ?? s;
        if (!kVr.has(r)) {
            continue;
        }
        if (We(n, "-filepath", "-f") || We(n, "-literalpath", "-l")) {
            return {
                behavior: "ask",
                message: `${n.name} -FilePath executes an arbitrary script file`
            };
        }
        for(let m = 0; m < n.args.length; m++){
            let h = n.elementTypes?.[m + 1];
            let arg = n.args[m];
            if (h === "StringConstant" && arg && !arg.startsWith("-")) {
                return {
                    behavior: "ask",
                    message: `${n.name} with positional string argument binds to -FilePath and executes a script file`
                };
            }
        }
    }
    return {
        behavior: "passthrough"
    };
}
function ds(e) {
    for (let n of GU(e)){
        let s = n.name.toLowerCase();
        if ((Bte[s]?.toLowerCase() ?? s) !== "foreach-object") {
            continue;
        }
        if (We(n, "-membername", "-m")) {
            return {
                behavior: "ask",
                message: "ForEach-Object -MemberName invokes methods by string name which cannot be validated"
            };
        }
        for(let m = 0; m < n.args.length; m++){
            let h = n.elementTypes?.[m + 1];
            let arg = n.args[m];
            if (h === "StringConstant" && arg && !arg.startsWith("-")) {
                return {
                    behavior: "ask",
                    message: "ForEach-Object with positional string argument binds to -MemberName and invokes methods by name"
                };
            }
        }
    }
    return {
        behavior: "passthrough"
    };
}
function ms(e) {
    for (let n of GU(e)){
        let s = n.name.toLowerCase();
        if (s !== "start-process" && s !== "saps" && s !== "start") {
            continue;
        }
        if (We(n, "-Verb", "-v") && n.args.some((r)=>r.toLowerCase() === "runas")) {
            return {
                behavior: "ask",
                message: "Command requests elevated privileges"
            };
        }
        if (n.children) {
            for(let r = 0; r < n.args.length; r++){
                let m = vA(n.args[r].replace(/`[\r\n]+\s*/g, ""));
                if (!/^[-\u2013\u2014\u2015/]v[a-z]*:/i.test(m)) {
                    continue;
                }
                let h = n.children[r];
                if (!h) {
                    continue;
                }
                for (let y of h){
                    if (vA(y.text).replace(/['"\u2018-\u201F\s]/g, "").toLowerCase() === "runas") {
                        return {
                            behavior: "ask",
                            message: "Command requests elevated privileges"
                        };
                    }
                }
            }
        }
        if (n.args.some((r)=>{
            let m = vA(r.replace(/`[\r\n]+\s*/g, ""));
            return /^[-\u2013\u2014\u2015/]v[a-z]*:['"` \u2018-\u201f]*runas['"` \u2018-\u201f]*$/i.test(m);
        })) {
            return {
                behavior: "ask",
                message: "Command requests elevated privileges"
            };
        }
        for (let r of n.args){
            let m = o$(r);
            if (wt(m)) {
                return {
                    behavior: "ask",
                    message: "Start-Process launches a nested PowerShell process which cannot be validated"
                };
            }
        }
    }
    return {
        behavior: "passthrough"
    };
}
const qt = new Set([
    "where-object",
    "sort-object",
    "select-object",
    "group-object",
    "format-table",
    "format-list",
    "format-wide",
    "format-custom"
]);
function ps(e) {
    if (!oJ(e).hasScriptBlocks) {
        return {
            behavior: "passthrough"
        };
    }
    for (let r of GU(e)){
        let m = r.name.toLowerCase();
        if (TVr.has(m)) {
            return {
                behavior: "ask",
                message: "Command contains script block with dangerous cmdlet that may execute arbitrary code"
            };
        }
    }
    if (GU(e).every((r)=>{
        let m = r.name.toLowerCase();
        if (qt.has(m)) {
            return true;
        }
        let h = Bte[m];
        if (h && qt.has(h.toLowerCase())) {
            return true;
        }
        return false;
    })) {
        return {
            behavior: "passthrough"
        };
    }
    return {
        behavior: "ask",
        message: "Command contains script block that may execute arbitrary code"
    };
}
function hs(e) {
    if (oJ(e).hasSubExpressions) {
        return {
            behavior: "ask",
            message: "Command contains subexpressions $()"
        };
    }
    return {
        behavior: "passthrough"
    };
}
function fs(e) {
    if (oJ(e).hasExpandableStrings) {
        return {
            behavior: "ask",
            message: "Command contains expandable strings with embedded expressions"
        };
    }
    return {
        behavior: "passthrough"
    };
}
function gs(e) {
    if (oJ(e).hasSplatting) {
        return {
            behavior: "ask",
            message: "Command uses splatting (@variable)"
        };
    }
    return {
        behavior: "passthrough"
    };
}
function ws(e) {
    if (oJ(e).hasStopParsing) {
        return {
            behavior: "ask",
            message: "Command uses stop-parsing token (--%)"
        };
    }
    return {
        behavior: "passthrough"
    };
}
function ys(e) {
    if (oJ(e).hasMemberInvocations) {
        return {
            behavior: "ask",
            message: "Command invokes .NET methods"
        };
    }
    return {
        behavior: "passthrough"
    };
}
function vs(e) {
    for (let n of e.typeLiterals ?? []){
        if (!gt(n)) {
            return {
                behavior: "ask",
                message: `Command uses .NET type [${n}] outside the ConstrainedLanguage allowlist`
            };
        }
    }
    return {
        behavior: "passthrough"
    };
}
function Ss(e) {
    for (let n of GU(e)){
        let s = n.name.toLowerCase();
        if (s === "invoke-item" || s === "ii") {
            return {
                behavior: "ask",
                message: "Invoke-Item opens files with the default handler (ShellExecute). On executable files this runs arbitrary code."
            };
        }
    }
    return {
        behavior: "passthrough"
    };
}
const Ps = new Set([
    "register-scheduledtask",
    "new-scheduledtask",
    "new-scheduledtaskaction",
    "set-scheduledtask"
]);
function ks(e) {
    for (let n of GU(e)){
        let s = n.name.toLowerCase();
        if (Ps.has(s)) {
            return {
                behavior: "ask",
                message: `${n.name} creates or modifies a scheduled task (persistence primitive)`
            };
        }
        if (s === "schtasks" || s === "schtasks.exe") {
            if (n.args.some((r)=>{
                let m = r.toLowerCase();
                return m === "/create" || m === "/change" || m === "-create" || m === "-change";
            })) {
                return {
                    behavior: "ask",
                    message: "schtasks with create/change modifies scheduled tasks (persistence primitive)"
                };
            }
        }
    }
    return {
        behavior: "passthrough"
    };
}
const Cs = new Set([
    "set-item",
    "si",
    "new-item",
    "ni",
    "remove-item",
    "ri",
    "del",
    "rm",
    "rd",
    "rmdir",
    "erase",
    "clear-item",
    "cli",
    "set-content",
    "add-content",
    "ac"
]);
function Rs(e) {
    let n = y9o(e, "env");
    if (n.length === 0) {
        return {
            behavior: "passthrough"
        };
    }
    for (let s of GU(e)){
        if (Cs.has(s.name.toLowerCase())) {
            return {
                behavior: "ask",
                message: "Command modifies environment variables"
            };
        }
    }
    if (oJ(e).hasAssignments && n.length > 0) {
        return {
            behavior: "ask",
            message: "Command modifies environment variables"
        };
    }
    return {
        behavior: "passthrough"
    };
}
function Ts(e) {
    for (let n of GU(e)){
        let s = n.name.toLowerCase();
        if (AVr.has(s)) {
            return {
                behavior: "ask",
                message: "Command loads, installs, or downloads a PowerShell module or script, which can execute arbitrary code"
            };
        }
    }
    return {
        behavior: "passthrough"
    };
}
const Es = new Set([
    "set-alias",
    "sal",
    "new-alias",
    "nal",
    "set-variable",
    "sv",
    "new-variable",
    "nv"
]);
function As(e) {
    for (let n of GU(e)){
        let s = n.name.toLowerCase();
        let r = s.includes("\\") ? s.slice(s.lastIndexOf("\\") + 1) : s;
        if (Es.has(r)) {
            return {
                behavior: "ask",
                message: "Command creates or modifies an alias or variable that can affect future command resolution"
            };
        }
    }
    return {
        behavior: "passthrough"
    };
}
const Is = new Set([
    "invoke-wmimethod",
    "iwmi",
    "invoke-cimmethod",
    "icim"
]);
function Os(e) {
    for (let n of GU(e)){
        let s = n.name.toLowerCase();
        if (Is.has(s)) {
            return {
                behavior: "ask",
                message: `${n.name} can spawn arbitrary processes via WMI/CIM (Win32_Process Create)`
            };
        }
        let r = Math.max(s.lastIndexOf("/"), s.lastIndexOf("\\"));
        let m = r >= 0 ? s.slice(r + 1) : s;
        if (m === "wmic" || m === "wmic.exe") {
            return {
                behavior: "ask",
                message: "wmic can spawn arbitrary processes (process call create), execute scripts (/format, /translate XSL), or write arbitrary files (/output, /append, /record) via WMI"
            };
        }
    }
    return {
        behavior: "passthrough"
    };
}
function Ht(e, n) {
    if (!n.valid) {
        return {
            behavior: "ask",
            message: "Could not parse command for security analysis"
        };
    }
    let s = [
        ts,
        ns,
        ss,
        os,
        as,
        is,
        ls,
        cs,
        us,
        Ss,
        ks,
        ds,
        ms,
        ps,
        hs,
        fs,
        gs,
        ws,
        ys,
        vs,
        Rs,
        Ts,
        As,
        Os
    ];
    for (let r of s){
        let m = r(n);
        if (m.behavior === "ask") {
            return m;
        }
    }
    return {
        behavior: "passthrough"
    };
}
const bt = new Set([
    "new-item",
    "set-content",
    "add-content",
    "out-file",
    "copy-item",
    "move-item",
    "rename-item",
    "expand-archive",
    "invoke-webrequest",
    "invoke-restmethod",
    "tee-object",
    "export-csv",
    "export-clixml"
]);
const Ds = new Set([
    "tar",
    "tar.exe",
    "bsdtar",
    "bsdtar.exe",
    "unzip",
    "unzip.exe",
    "7z",
    "7z.exe",
    "7za",
    "7za.exe",
    "gzip",
    "gzip.exe",
    "gunzip",
    "gunzip.exe",
    "expand-archive"
]);
const Ms = new Set([
    "xcopy",
    "xcopy.exe",
    "robocopy",
    "robocopy.exe"
]);
function Ns(element) {
    let n = element.name.toLowerCase();
    let s = n.slice(Math.max(n.lastIndexOf("\\"), n.lastIndexOf("/")) + 1);
    return Ms.has(s);
}
async function Gt(e) {
    let n = e.trim();
    if (!n) {
        return "";
    }
    let s = await fke(n);
    return A3r(s)[0] ?? "";
}
function Xt(e) {
    return Dxe(e);
}
function Yt(e) {
    let n = IVr();
    let s = n ? e.replace(bYo, "") : e.trimStart();
    let r = s[0];
    if (r === '"' || r === "'") {
        let m = s.indexOf(r, 1);
        let h = m === -1 ? s.length : m + 1;
        return s.slice(0, h).toLowerCase();
    }
    return (s.split(n ? kSn : /\s+/)[0] ?? "").toLowerCase();
}
function vt(e) {
    let e_length = e.length;
    while(e_length > 0 && /[\s\u0085\u180e]/.test(e[e_length - 1])){
        e_length--;
    }
    return e_length;
}
function je(e) {
    return e.slice(0, vt(e)).replace(/^[\s\u0085\u180e]+/, "");
}
function Zt(e) {
    let n = e;
    let s = n.match(/^[\s\u0085\u180e]+/);
    if (s && /[\u0085\u180e]/.test(s[0])) {
        n = n.slice(s[0].length);
    }
    let r = n.slice(vt(n));
    if (/[\u0085\u180e]/.test(r)) {
        n = n.slice(0, n.length - r.length);
    }
    return n;
}
function et(e) {
    let n = e;
    let s = n.match(/^[\s\u0085\u180e]+/);
    if (s && /[\u0085\u180e]/.test(s[0])) {
        n = s[0].replace(/[\u0085\u180e]/g, "") + n.slice(s[0].length);
    }
    let r = n.slice(vt(n));
    if (/[\u0085\u180e]/.test(r)) {
        n = n.slice(0, n.length - r.length) + r.replace(/[\u0085\u180e]/g, "");
    }
    return n;
}
function Ae(e) {
    if (e.includes(`
`) || e.includes("*")) {
        return [];
    }
    return szn(Ct, je(e));
}
function yt(e, n, s, r) {
    let m = je(e.command);
    function h(T, C) {
        return T.toLowerCase() === C.toLowerCase();
    }
    function y(T, C) {
        return T.toLowerCase().startsWith(C.toLowerCase());
    }
    function v(T) {
        if (r === "allow") {
            return T;
        }
        return bnr(T);
    }
    let g = m.split(LEe)[0] ?? "";
    let _ = bnr(g);
    let S = cb(_);
    let w = m.slice(g.length).replace(/^[\s\u0085\u180e]+/, " ");
    let k = S + w;
    return Array.from(n.entries()).filter(([T])=>{
        let C = Xt(et(T));
        let P = C.type === "exact" ? {
            ...C,
            command: Zt(T)
        } : C.type === "prefix" ? {
            ...C,
            prefix: et(C.prefix)
        } : C.type === "wildcard" ? {
            ...C,
            pattern: et(C.pattern)
        } : C;
        function N(F) {
            switch(P.type){
                case "exact":
                    return h(P.command, F);
                case "prefix":
                    switch(s){
                        case "exact":
                            return h(P.prefix, F);
                        case "prefix":
                            {
                                if (h(F, P.prefix)) {
                                    return true;
                                }
                                return y(F, `${P.prefix} `);
                            }
                    }
                    break;
                case "wildcard":
                    if (s === "exact") {
                        return false;
                    }
                    return oZ(P.pattern, F, true, true);
            }
        }
        if (N(m)) {
            return true;
        }
        if (N(k)) {
            return true;
        }
        if (P.type === "exact") {
            let F = P.command.split(LEe)[0] ?? "";
            if (cb(v(F)) === S) {
                let D = P.command.slice(F.length).replace(/^[\s\u0085\u180e]+/, " ");
                if (h(D, w)) {
                    return true;
                }
            }
        } else if (P.type === "prefix") {
            let F = P.prefix.split(LEe)[0] ?? "";
            if (cb(v(F)) === S) {
                let D = P.prefix.slice(F.length).replace(/^[\s\u0085\u180e]+/, " ");
                let U = S + D;
                if (s === "exact") {
                    if (h(U, k)) {
                        return true;
                    }
                } else if (h(k, U) || y(k, `${U} `)) {
                    return true;
                }
            }
        } else if (P.type === "wildcard") {
            let F = P.pattern.split(LEe)[0] ?? "";
            if (cb(v(F)) === S && s !== "exact") {
                let D = P.pattern.slice(F.length).replace(/^[\s\u0085\u180e]+/, " ");
                let U = S + D;
                if (oZ(U, k, true, true)) {
                    return true;
                }
            }
        }
        return false;
    }).map(([, T])=>T);
}
function Le(e, n, s) {
    let r = jD(n, Ct, "deny");
    let matchingDenyRules = yt(e, r, s, "deny");
    let h = jD(n, Ct, "ask");
    let matchingAskRules = yt(e, h, s, "ask");
    let v = jD(n, Ct, "allow");
    let matchingAllowRules = yt(e, v, s, "allow");
    return {
        matchingDenyRules,
        matchingAskRules,
        matchingAllowRules
    };
}
function Qt(e, n) {
    let s = je(e.command);
    let r = {
        ...e,
        command: s
    };
    let { matchingDenyRules, matchingAskRules, matchingAllowRules } = Le(r, n, "exact");
    if (matchingDenyRules[0] !== undefined) {
        return {
            behavior: "deny",
            message: `Permission to use ${Ct} with command ${s} has been denied.`,
            decisionReason: {
                type: "rule",
                rule: matchingDenyRules[0]
            }
        };
    }
    if (matchingAskRules[0] !== undefined) {
        return {
            behavior: "ask",
            message: Rl(Ct),
            decisionReason: {
                type: "rule",
                rule: matchingAskRules[0]
            }
        };
    }
    if (matchingAllowRules[0] !== undefined) {
        return {
            behavior: "allow",
            updatedInput: e,
            decisionReason: {
                type: "rule",
                rule: matchingAllowRules[0]
            }
        };
    }
    let v = {
        type: "other",
        reason: "This command requires approval"
    };
    return {
        behavior: "passthrough",
        message: Rl(Ct, v),
        decisionReason: v,
        suggestions: Ae(s)
    };
}
function Ws(e, n) {
    let s = je(e.command);
    let r = {
        ...e,
        command: s
    };
    let m = Qt(e, n);
    if (m.behavior === "deny" || m.behavior === "ask") {
        return m;
    }
    let { matchingDenyRules, matchingAskRules, matchingAllowRules } = Le(r, n, "prefix");
    if (matchingDenyRules[0] !== undefined) {
        return {
            behavior: "deny",
            message: `Permission to use ${Ct} with command ${s} has been denied.`,
            decisionReason: {
                type: "rule",
                rule: matchingDenyRules[0]
            }
        };
    }
    if (matchingAskRules[0] !== undefined) {
        return {
            behavior: "ask",
            message: Rl(Ct),
            decisionReason: {
                type: "rule",
                rule: matchingAskRules[0]
            }
        };
    }
    if (m.behavior === "allow") {
        return m;
    }
    if (matchingAllowRules[0] !== undefined) {
        return {
            behavior: "allow",
            updatedInput: e,
            decisionReason: {
                type: "rule",
                rule: matchingAllowRules[0]
            }
        };
    }
    let g = {
        type: "other",
        reason: "This command requires approval"
    };
    return {
        behavior: "passthrough",
        message: Rl(Ct, g),
        decisionReason: g,
        suggestions: Ae(s)
    };
}
async function $s(e, n) {
    if (!e.valid) {
        return [
            {
                text: n,
                element: {
                    name: await Gt(n),
                    nameType: "unknown",
                    elementType: "CommandAst",
                    args: [],
                    text: n
                },
                statement: null,
                isSafeOutput: false
            }
        ];
    }
    let s = [];
    for (let statement of e.statements){
        for (let m of statement.commands){
            if (m.elementType !== "CommandAst") {
                continue;
            }
            s.push({
                text: m.text,
                element: m,
                statement,
                isSafeOutput: m.nameType !== "application" && obt(m.name) && m.args.length === 0
            });
        }
        if (statement.nestedCommands) {
            for (let m of statement.nestedCommands){
                s.push({
                    text: m.text,
                    element: m,
                    statement,
                    isSafeOutput: m.nameType !== "application" && obt(m.name) && m.args.length === 0
                });
            }
        }
    }
    if (s.length > 0) {
        return s;
    }
    return [
        {
            text: n,
            element: {
                name: await Gt(n),
                nameType: "unknown",
                elementType: "CommandAst",
                args: [],
                text: n
            },
            statement: null,
            isSafeOutput: false
        }
    ];
}
async function Jt(e, shellPermission) {
    let s = de(shellPermission);
    if (s.bashCommandClamps !== undefined && s.bashCommandClamps.length > 0) {
        return {
            behavior: "deny",
            message: "Permission to use PowerShell has been denied: this agent carries a per-spawn bashCommandClamp, which scopes shell execution to a " + "fixed set of Bash command forms — PowerShell commands cannot " + "match them. Use the clamped Bash forms instead.",
            decisionReason: {
                type: "other",
                reason
            }
        };
    }
    return Fs(e, shellPermission, s);
}
function en(shellPermission) {
    let bashCommandClamps = de(shellPermission).bashCommandClamps;
    if (bashCommandClamps !== undefined && bashCommandClamps.length > 0) {
        return {
            behavior: "deny",
            message: "The PowerShell permission check crashed and this agent carries a per-spawn bashCommandClamp; denying rather than running an unverified command.",
            decisionReason: {
                type: "other",
                reason: Vnn
            }
        };
    }
}
async function Fs(e, n, s) {
    let r = je(e.command);
    let m = {
        ...e,
        command: r
    };
    if (!r) {
        return {
            behavior: "allow",
            updatedInput: e,
            decisionReason: {
                type: "other",
                reason: "Empty command is safe"
            }
        };
    }
    let h = await fke(r);
    let y = Qt(e, s);
    if (y.behavior === "deny") {
        return y;
    }
    let { matchingDenyRules, matchingAskRules } = Le(m, s, "prefix");
    if (matchingDenyRules[0] !== undefined) {
        return {
            behavior: "deny",
            message: `Permission to use ${Ct} with command ${r} has been denied.`,
            decisionReason: {
                type: "rule",
                rule: matchingDenyRules[0]
            }
        };
    }
    let _ = null;
    if (matchingAskRules[0] !== undefined) {
        _ = {
            behavior: "ask",
            message: Rl(Ct),
            decisionReason: {
                type: "rule",
                rule: matchingAskRules[0]
            }
        };
    }
    if (_ === null && RT(r)) {
        _ = {
            behavior: "ask",
            message: "Command contains a UNC path that could trigger network requests"
        };
    }
    if (y.behavior === "allow" && !h.valid && _ === null && T3r(r.split(LEe)[0] ?? "") !== "application") {
        return y;
    }
    if (!h.valid) {
        let R = vA(r.replace(/<#[\s\S]*?#>/g, " ").replace(/`[\r\n]+\s*/g, ""));
        let L = false;
        let B;
        let matchedAskRule;
        for (let ne of R.split(/[;|\n\r{}()&]+/)){
            let le = ne.trim();
            if (!le) {
                continue;
            }
            let fe = le.split(LEe);
            for(let K = 0; K < fe.length; K++){
                let ce = fe[K];
                let be = o$(ce);
                if (!be) {
                    continue;
                }
                if (B === undefined && !$K.has(ce[0] ?? "") && Oe(ce)) {
                    B = ce;
                }
                if (cb(be) === "remove-item") {
                    L = true;
                    for (let oe of fe.slice(K + 1)){
                        if ($K.has(oe[0] ?? "")) {
                            continue;
                        }
                        if (Oe(oe)) {
                            return ke(oe);
                        }
                    }
                }
                for (let oe of new Set([
                    be,
                    J6(ce),
                    mte(ce)
                ])){
                    let command = [
                        oe,
                        ...fe.slice(K + 1)
                    ].join(" ");
                    let { matchingDenyRules: matchingDenyRules_1, matchingAskRules: matchingAskRules_1 } = Le({
                        command
                    }, s, "prefix");
                    if (matchingDenyRules_1[0] !== undefined) {
                        return {
                            behavior: "deny",
                            message: `Permission to use ${Ct} with command ${r} has been denied.`,
                            decisionReason: {
                                type: "rule",
                                rule: matchingDenyRules_1[0]
                            }
                        };
                    }
                    matchedAskRule ??= matchingAskRules_1[0];
                }
            }
        }
        if (L && B !== undefined) {
            return ke(B);
        }
        let Q = (ne)=>{
            if (matchedAskRule !== undefined && ne.behavior === "ask" && !uM(ne)) {
                return {
                    ...ne,
                    matchedAskRule
                };
            }
            return ne;
        };
        if (_ !== null) {
            return Q(_);
        }
        if (s.blockReadsOutsideWorkingDirectories === true) {
            return Dz(`Command contains malformed syntax that cannot be parsed: ${h.errors[0]?.message ?? "unknown error"}`);
        }
        let ee = {
            type: "other",
            reason: `Command contains malformed syntax that cannot be parsed: ${h.errors[0]?.message ?? "unknown error"}`
        };
        let Y = {
            behavior: "ask",
            decisionReason: ee,
            message: Rl(Ct, ee)
        };
        return Q({
            ...Y,
            decisionReason: {
                type: "subcommandResults",
                reasons: new Map([
                    [
                        r,
                        Y
                    ]
                ])
            }
        });
    }
    let S = await $s(h, r);
    let w = [];
    if (_ !== null) {
        w.push(_);
    }
    let k = Ht(r, h);
    if (k.behavior !== "passthrough") {
        if (s.blockReadsOutsideWorkingDirectories === true) {
            w.push(Dz(k.message));
        } else {
            let R = {
                type: "other",
                reason: k.message
            };
            w.push({
                behavior: "ask",
                message: Rl(Ct, R),
                decisionReason: R,
                suggestions: Ae(r)
            });
        }
    }
    if (h.hasUsingStatements) {
        let R = {
            type: "other",
            reason: "Command contains a `using` statement that may load external code (module or assembly)"
        };
        w.push({
            behavior: "ask",
            message: Rl(Ct, R),
            decisionReason: R,
            suggestions: Ae(r)
        });
    }
    if (h.hasScriptRequirements) {
        let R = {
            type: "other",
            reason: "Command contains a `#Requires` directive that may trigger module loading"
        };
        w.push({
            behavior: "ask",
            message: Rl(Ct, R),
            decisionReason: R,
            suggestions: Ae(r)
        });
    }
    if (h.hasBackgroundJob) {
        let R = {
            type: "other",
            reason: "Command uses the background job operator (`&`) which spawns a child PowerShell process"
        };
        w.push({
            behavior: "ask",
            message: Rl(Ct, R),
            decisionReason: R,
            suggestions: Ae(r)
        });
    }
    let T = /^(?:[\w.]+\\)?(env|hklm|hkcu|function|alias|variable|cert|wsman|registry)::?/i;
    function C(R) {
        let L = R;
        if (L.length > 0 && ($K.has(L[0]) || L[0] === "/")) {
            let B = L.indexOf(":", 1);
            if (B > 0 && (L[0] !== "/" || /^\/[A-Za-z]{1,2}:/.test(L))) {
                L = L.substring(B + 1);
            }
        }
        return vA(L.replace(/`[\r\n]+\s*/g, ""));
    }
    function P(R) {
        let L = C(R);
        if (T.test(L)) {
            return {
                behavior: "ask",
                message: `Command argument '${R}' uses a non-filesystem provider path and requires approval`
            };
        }
        if (RT(L, true)) {
            return {
                behavior: "ask",
                message: `Command argument '${R}' contains a UNC path that could trigger network requests`
            };
        }
        if (O() === "windows" && /(?<!:)[\\/]{2,}[^ \t\r\n\f\v\\/]/.test(L)) {
            return {
                behavior: "ask",
                message: `Command argument '${R}' contains a UNC path that could trigger network requests`
            };
        }
        return null;
    }
    e: for (let R of h.statements){
        for (let L of R.commands){
            if (L.elementType !== "CommandAst") {
                continue;
            }
            for (let B of L.args){
                let H = P(B);
                if (H !== null) {
                    w.push(H);
                    break e;
                }
            }
        }
        if (R.nestedCommands) {
            for (let L of R.nestedCommands){
                for (let B of L.args){
                    let H = P(B);
                    if (H !== null) {
                        w.push(H);
                        break e;
                    }
                }
            }
        }
    }
    for (let { text, element } of S){
        let B = element.name !== "" ? [
            element.name,
            ...element.args
        ].join(" ") : null;
        let H = {
            command: text
        };
        let { matchingDenyRules: matchingDenyRules_1, matchingAskRules: matchingAskRules_1 } = Le(H, s, "prefix");
        let Y = matchingDenyRules_1[0];
        let ne = matchingAskRules_1[0];
        if (Y === undefined && B !== null) {
            let { matchingDenyRules: matchingDenyRules_2, matchingAskRules: matchingAskRules_2 } = Le({
                command: B
            }, s, "prefix");
            Y = matchingDenyRules_2[0];
            if (ne === undefined) {
                ne = matchingAskRules_2[0];
            }
        }
        if (Y !== undefined) {
            w.push({
                behavior: "deny",
                message: `Permission to use ${Ct} with command ${r} has been denied.`,
                decisionReason: {
                    type: "rule",
                    rule: Y
                }
            });
        } else if (ne !== undefined) {
            w.push({
                behavior: "ask",
                message: Rl(Ct),
                decisionReason: {
                    type: "rule",
                    rule: ne
                }
            });
        }
    }
    let N = S.length > 1 && S.some(({ element })=>TSn(element.name));
    let F = S.some(({ element })=>st(element));
    let I = S.some(({ element })=>cb(element.name) === "git");
    if (N && I) {
        w.push({
            behavior: "ask",
            message: "Compound commands with cd/Set-Location and git require approval to prevent bare repository attacks"
        });
    }
    let D = I && F5e();
    if (D) {
        w.push({
            behavior: "ask",
            message: D === "bare-indicators" ? "Git command in a directory with bare-repo indicators (HEAD/objects/refs outside a .git/ directory). Git may treat it as a git dir and run config/hooks from here." : "The .git file or symlink here redirects to a location that cannot be verified as safe (it may have been planted by an untrusted archive). Git commands need approval."
        });
    }
    if (I) {
        let R = S.some(({ element, statement })=>{
            for (let Y of element.redirections ?? []){
                if (Ne(Y.target)) {
                    return true;
                }
            }
            let ee = cb(element.name);
            if (!bt.has(ee)) {
                return false;
            }
            if (element.args.flatMap(Xe).some((Y)=>Ne(Y))) {
                return true;
            }
            if (ee === "copy-item" || ee === "move-item") {
                let Y = statement === null ? -1 : statement.commands.indexOf(element);
                let ne = statement !== null && (Y > 0 || Y === -1 && statement.commands.length > 1);
                if (It(element.args, ne)) {
                    return true;
                }
            }
            if (statement !== null) {
                for (let Y of statement.commands){
                    if (Y.elementType === "CommandAst") {
                        continue;
                    }
                    if (Ne(Y.text)) {
                        return true;
                    }
                }
            }
            return false;
        });
        let L = JEn(h).some((H)=>Ne(H.target));
        if (R || L) {
            w.push({
                behavior: "ask",
                message: "Command writes to a git-internal path (HEAD, objects/, refs/, hooks/, .git/) and runs git. This could plant a malicious hook that git then executes."
            });
        }
        if (S.some(({ element })=>Ns(element))) {
            w.push({
                behavior: "ask",
                message: "Compound command runs a native file copier (xcopy/robocopy) and git. The copier can place files at git-internal paths (HEAD, objects/, refs/) that git then treats as repository state."
            });
        }
    }
    if (O() === "windows" && S.length > 1) {
        let R = new Set;
        for (let B of JEn(h)){
            for (let H of P7n(B.target)){
                R.add(H);
            }
        }
        let L = null;
        for (let { element } of S){
            if (I7n(element.name).some(({ base, stem })=>stem !== "" && R.has(stem) || base !== stem && R.has(base))) {
                L = element.name;
                break;
            }
            for (let Q of element.redirections ?? []){
                for (let ee of P7n(Q.target)){
                    R.add(ee);
                }
            }
            let H = cb(element.name);
            if (bt.has(H)) {
                for (let Q of element.args.flatMap(Xe)){
                    let ee = Q.replace(/^[-\u2013\u2014\u2015]+[A-Za-z]+:?/, "");
                    let Y = $X(ee);
                    if (o$(Y) !== "") {
                        for (let ne of P7n(Y)){
                            R.add(ne);
                        }
                    }
                }
            }
        }
        if (L !== null) {
            w.push({
                behavior: "ask",
                message: `An earlier sub-command writes a file (./${L}.*) that would shadow the later \`${L}\` command under Windows PowerShell 5.1 cwd-first resolution.`
            });
        }
    }
    if (S.some(({ element })=>{
        let L = element.name.toLowerCase();
        let B = L.slice(Math.max(L.lastIndexOf("\\"), L.lastIndexOf("/")) + 1);
        return Ds.has(B);
    }) && S.length > 1) {
        w.push({
            behavior: "ask",
            message: I ? "Compound command extracts an archive and runs git. Archive contents may plant bare-repository indicators (HEAD, hooks/, refs/) that git then treats as the repository root." : "Compound command extracts an archive followed by other commands. Archive contents (symlinks, config files) cannot be validated and may redirect subsequent path operations."
        });
    }
    if (S.some(({ element })=>{
        for (let H of element.redirections ?? []){
            if (Ge(H.target)) {
                return true;
            }
        }
        let B = cb(element.name);
        if (!bt.has(B)) {
            return false;
        }
        return element.args.flatMap(Xe).some(Ge);
    }) || JEn(h).some((L)=>Ge(L.target))) {
        w.push({
            behavior: "ask",
            message: "Command writes to .git/ — hooks or config planted there execute on the next git operation."
        });
    }
    let V = Bt(m, h, s, N);
    if (V.behavior !== "passthrough") {
        w.push(V);
    }
    let q = y.behavior === "allow" && y.decisionReason?.type === "rule" ? y.decisionReason.rule.ruleValue.ruleContent : undefined;
    let z = q !== undefined && Zt(q).trim().toLowerCase() === r.toLowerCase();
    if (y.behavior === "allow" && S[0] !== undefined && (z || S.every((R)=>R.element.nameType !== "application" && !LU(R.text, R.element)))) {
        w.push(y);
    }
    if (sbt(r, h)) {
        w.push({
            behavior: "allow",
            updatedInput: e,
            decisionReason: {
                type: "other",
                reason: Bnn
            }
        });
    }
    if (JEn(h).length > 0) {
        w.push({
            behavior: "ask",
            message: "Command contains file redirections that could write to arbitrary paths",
            suggestions: Ae(r)
        });
    }
    let X = at(m, h, s);
    if (X.behavior !== "passthrough") {
        w.push(X);
    }
    let re = w.find((R)=>R.behavior === "deny");
    if (re !== undefined) {
        return re;
    }
    let me = w.find((R)=>R.behavior === "ask" && AN(R.decisionReason)) ?? w.find((R)=>R.behavior === "ask");
    if (me !== undefined) {
        let R = {
            ...me,
            decisionReason: {
                type: "subcommandResults",
                reasons: new Map([
                    [
                        r,
                        me
                    ]
                ])
            }
        };
        if (!uM(R)) {
            for (let L of w){
                if (L.behavior === "ask" && L.decisionReason?.type === "rule" && L.decisionReason.rule.ruleBehavior === "ask") {
                    return {
                        ...R,
                        matchedAskRule: L.decisionReason.rule
                    };
                }
            }
        }
        return R;
    }
    let ye = w.find((R)=>R.behavior === "allow");
    if (ye !== undefined) {
        return ye;
    }
    let te = S.filter(({ element, isSafeOutput })=>{
        if (isSafeOutput) {
            return false;
        }
        if (element.nameType === "application") {
            return true;
        }
        if (cb(element.name) === "set-location" && element.args.length > 0) {
            let H = element.args.find((Q)=>Q.length === 0 || !$K.has(Q[0]));
            if (H && resolve(se(), H) === se()) {
                return false;
            }
        }
        return true;
    });
    let ge = (element)=>{
        if (element.nameType === "application") {
            return null;
        }
        let L = element.name.toLowerCase();
        let B = cb(L);
        let H = B.indexOf("-");
        if (B !== L || H > 0 && SYo.has(B.slice(0, H))) {
            return "full";
        }
        return "exact";
    };
    let J = [];
    let ve = false;
    let pe = new Set;
    let he = new Set;
    for (let { text, element, statement } of te){
        let H = {
            command: text
        };
        let Q = Ws(H, s);
        if (Q.behavior === "deny") {
            return {
                behavior: "deny",
                message: `Permission to use ${Ct} with command ${r} has been denied.`,
                decisionReason: Q.decisionReason
            };
        }
        if (Q.behavior === "ask") {
            if (statement !== null) {
                he.add(statement);
            }
            J.push(text);
            continue;
        }
        let ee = false;
        if (Q.behavior === "allow" && element.nameType === "application") {
            let Y = element.name.toLowerCase();
            let ne = J6(Yt(text)).toLowerCase();
            if (Y.length > 0 && ne === Y) {
                ee = Le(H, s, "prefix").matchingAllowRules.some((le)=>{
                    let fe = Xt(et(le.ruleValue.ruleContent ?? ""));
                    let K = fe.type === "exact" ? fe.command : fe.type === "prefix" ? fe.prefix : fe.pattern;
                    return J6(Yt(K)).toLowerCase() === Y;
                });
            }
        }
        if (Q.behavior === "allow" && (element.nameType !== "application" || ee) && !F) {
            if (LU(text, element)) {
                if (statement !== null) {
                    he.add(statement);
                }
                J.push(text);
                pe.add(text);
                continue;
            }
            let Y = ge(element);
            if (Y !== null && (abt(element.args, element.elementTypes, Y) || ibt(element.args, element.elementTypes, Y))) {
                if (statement !== null) {
                    he.add(statement);
                }
                J.push(text);
                pe.add(text);
                continue;
            }
            continue;
        }
        if (Q.behavior === "allow") {
            if (statement !== null) {
                he.add(statement);
            }
            J.push(text);
            continue;
        }
        if (statement !== null && !N && !F && PVr(statement) && G7e(element, text)) {
            ve = true;
            continue;
        }
        if (statement !== null && !N && !F) {
            if (at({
                command: text
            }, {
                valid: true,
                errors: [],
                variables: h.variables,
                hasStopParsing: h.hasStopParsing,
                originalCommand: text,
                statements: [
                    statement
                ]
            }, s).behavior === "allow") {
                continue;
            }
        }
        if (statement !== null) {
            he.add(statement);
        }
        J.push(text);
        {
            let Y = ge(element);
            if (Y !== null && (abt(element.args, element.elementTypes, Y) || ibt(element.args, element.elementTypes, Y))) {
                pe.add(text);
            }
        }
    }
    let xe = new Set;
    let Me = new Set(J);
    for (let R of h.statements){
        if (!PVr(R) && !he.has(R) && !Me.has(R.text)) {
            J.push(R.text);
            Me.add(R.text);
            xe.add(R.text);
        }
    }
    if (J.length === 0) {
        if (oJ(h).hasScriptBlocks) {
            let R = {
                behavior: "ask",
                message: Rl(Ct),
                decisionReason: {
                    type: "other",
                    reason: "Pipeline consists of output-formatting cmdlets with script blocks — block content cannot be verified"
                }
            };
            return {
                ...R,
                decisionReason: {
                    type: "subcommandResults",
                    reasons: new Map([
                        [
                            r,
                            R
                        ]
                    ])
                }
            };
        }
        return {
            behavior: "allow",
            updatedInput: e,
            decisionReason: {
                type: "other",
                reason: ve ? jnn : "All pipeline commands are individually allowed"
            }
        };
    }
    let Se = {
        type: "other",
        reason: "This command requires approval"
    };
    let Z = [];
    for (let R of J){
        if (xe.has(R) && R !== r) {
            continue;
        }
        if (pe.has(R) && R !== r) {
            continue;
        }
        Z.push(...Ae(R));
    }
    let ae = {
        behavior: "passthrough",
        message: Rl(Ct, Se),
        decisionReason: Se,
        suggestions: Z
    };
    return {
        ...ae,
        decisionReason: {
            type: "subcommandResults",
            reasons: new Map([
                [
                    r,
                    ae
                ]
            ])
        }
    };
}
const tn = `
`;
const js = new Set([
    "select-string",
    "get-childitem",
    "findstr",
    "where.exe"
]);
const Us = new Set([
    "get-content",
    "get-item",
    "test-path",
    "resolve-path",
    "get-process",
    "get-service",
    "get-childitem",
    "get-location",
    "get-filehash",
    "get-acl",
    "format-hex"
]);
const zs = new Set([
    "write-output",
    "write-host"
]);
function qs(command) {
    let n = command.trim();
    if (!n) {
        return {
            isSearch: false,
            isRead: false
        };
    }
    let s = n.split(/\s*[;|]\s*/).filter(Boolean);
    if (s.length === 0) {
        return {
            isSearch: false,
            isRead: false
        };
    }
    let isSearch = false;
    let isRead = false;
    let h = false;
    for (let y of s){
        let v = y.trim().split(/\s+/)[0];
        if (!v) {
            continue;
        }
        let g = cb(v);
        if (zs.has(g)) {
            continue;
        }
        h = true;
        let _ = js.has(g);
        let S = Us.has(g);
        if (!_ && !S) {
            return {
                isSearch: false,
                isRead: false
            };
        }
        if (_) {
            isSearch = true;
        }
        if (S) {
            isRead = true;
        }
    }
    if (!h) {
        return {
            isSearch: false,
            isRead: false
        };
    }
    return {
        isSearch,
        isRead
    };
}
const nn = 2000;
const Hs = 1000;
const Gs = [
    "start-sleep",
    "sleep"
];
async function Ks(command) {
    let n = command.trim().split(/\s+/)[0];
    if (!n) {
        return true;
    }
    let s = cb(n);
    return !Gs.includes(s);
}
function Ys(command) {
    let n = command.trim().split(/[;|&\r\n]/)[0]?.trim() ?? "";
    let s = /^(?:start-sleep|sleep)(?:\s+-s(?:econds)?)?\s+(\d+(?:\.\d*)?)\s*$/i.exec(n);
    if (!s) {
        return null;
    }
    let r = parseFloat(s[1]);
    if (r < yor) {
        return null;
    }
    let m = command.trim().slice(n.length).replace(/^[\s;|&]+/, "");
    if (m) {
        return `Start-Sleep ${r} followed by: ${m}`;
    }
    return `standalone Start-Sleep ${r}`;
}
const Xs = "Enterprise policy requires sandboxing, but this command would not be sandboxed on Windows: either the sandbox is unavailable, or the command matches a sandbox exclusion pattern only in part. Compound commands and commands with shell metacharacters must run sandboxed even when a statement matches an exclusion. Shell command execution is blocked by policy.";
const Zs = "Enterprise policy requires sandboxing, but the sandbox is unavailable on Windows. The command matches a sandbox exclusion pattern, but exclusions only exempt a command where a permission prompt can approve the unsandboxed run, and none is available here. Shell command execution is blocked by policy.";
function sn(e, command, s) {
    if (s || O() !== "windows" || !qe.isSandboxEnabledInSettings() || !qe.isPlatformInEnabledList() || !qe.isStrictSandboxModeConfigured() || e) {
        return null;
    }
    if (!Y5r(command)) {
        return Xs;
    }
    if (Qh().unsandboxedCommandsDisabled) {
        return Zs;
    }
    return null;
}
function Ue(e, n) {
    return Ty({
        command: e.command,
        dangerouslyDisableSandbox: e.dangerouslyDisableSandbox,
        shellType: "powershell"
    }, n);
}
function an() {
    return O() === "windows";
}
const Qs = {
    supported: true,
    refusedInputFields: ESn,
    decidingInputFields: [
        "command",
        "run_in_background",
        "dangerouslyDisableSandbox"
    ]
};
const Js = "command contains control characters that would be hidden in the approval dialog";
const eo = p(()=>De({
        command: o().refine(MR, Js).describe("The PowerShell command to execute"),
        timeout: MM(E().optional()).describe(`Optional timeout in milliseconds (max ${Azt()} for a foreground command)`),
        description: o().optional().describe("Clear, concise description of what this command does in active voice."),
        run_in_background: $w(M().optional()).describe(qPn()),
        dangerouslyDisableSandbox: $w(M().optional()).describe("Set this to true to dangerously override sandbox mode and run commands without sandboxing."),
        ...zge() && zSt(),
        ...an() && _V()
    }));
const on = p(()=>Ttr(eo(), EVr));
const no = p(()=>{
    if (Cd()) {
        return on().omit({
            run_in_background: true
        });
    }
    return on();
});
const so = p(()=>u({
        stdout: o().describe("The standard output of the command"),
        stderr: o().describe("The standard error output of the command"),
        interrupted: M().describe("Whether the command was interrupted"),
        returnCodeInterpretation: o().optional().describe("Semantic interpretation for non-error exit codes with special meaning"),
        isImage: M().optional().describe("Flag to indicate if stdout contains image data"),
        persistedOutputPath: o().optional().describe("Path to persisted full output when too large for inline"),
        persistedOutputSize: E().optional().describe("Total output size in bytes when persisted"),
        backgroundTaskId: o().optional().describe("ID of the background task if command is running in background"),
        backgroundedByUser: M().optional().describe("True if the user manually backgrounded the command with Ctrl+B"),
        backgroundedByTurnAbort: M().optional().describe("@internal True if a plugin's turn abort moved the running command to the background"),
        backgroundedToDeliverMessage: M().optional().describe("@internal True if the command was moved to the background so a message queued for the model could reach it"),
        timedOutAfterMs: E().optional().describe("Set when the command hit its timeout and was auto-backgrounded; the timeout value in ms"),
        backgroundEndsWithFinalResponse: A(true).optional().describe("True when this backgrounded command is terminated at its caller's final response, so no completion notification can follow (a synchronous subagent's command, or a headless session that takes no further input and is not waiting for background commands); absent when the command survives"),
        gitOperation: Ert().optional().describe("Structured classification of git/gh operations detected in this command (commit/push/merge/rebase/PR). Client-facing — lets clients render git activity without re-parsing stdout; not surfaced to the model.")
    }));
function rn(e) {
    if (wYo(e.command)) {
        return false;
    }
    return sbt(e.command);
}
function St(e, n) {
    return {
        get session () {
            return e.session;
        },
        get storageV5 () {
            return e.storageV5;
        },
        get agentId () {
            return e.agentId;
        },
        get agentContext () {
            return e.agentContext;
        },
        get agentWorktree () {
            return e.agentWorktree;
        },
        get taskRegistry () {
            return e.taskRegistry;
        },
        get toolState () {
            return e.toolState;
        },
        get applyFileHistoryOp () {
            return e.applyFileHistoryOp;
        },
        get sessionEnvVars () {
            return e.sessionEnvVars;
        },
        get markPrResolvedThisSession () {
            return e.markPrResolvedThisSession;
        },
        emitToolProgress: e.emitToolProgress,
        get shellPermission () {
            return {
                ...e.shellPermission,
                abortController: {
                    signal: n.signal
                },
                toolUseId: n.toolUseId
            };
        },
        get mainLoopModel () {
            return e.mainLoopModel;
        },
        get permissions () {
            return e.permissions;
        },
        get toolUseId () {
            return n.toolUseId;
        },
        get userTypedShellDispatch () {
            return n.userTypedShellDispatch === true;
        },
        get abortController () {
            return {
                signal: n.signal
            };
        },
        get innerCall () {
            return n.innerCall;
        },
        get shellWallCapMs () {
            return n.shellWallCapMs;
        },
        get remoteCall () {
            return n.remoteCall;
        }
    };
}
export const PowerShellTool = Kt({
    name: Ct,
    ruleContentField: "command",
    searchHint: "execute Windows PowerShell commands",
    enablesCodeExecution: true,
    get remoteExecution () {
        if (an()) {
            return Qs;
        }
        return _yr;
    },
    backgrounding: "self",
    get maxResultSizeChars () {
        return aKe();
    },
    persistenceThresholdCeiling: t3e,
    strict: true,
    async description ({ description }) {
        return description || "Run PowerShell command";
    },
    async prompt () {
        return yYo();
    },
    isConcurrencySafe (e) {
        return this.isReadOnly?.(e) ?? false;
    },
    suppressesAllPermissionUpdates (e) {
        return mu(e);
    },
    isSearchOrReadCommand (e) {
        if (typeof e?.command !== "string") {
            return {
                isSearch: false,
                isRead: false
            };
        }
        return qs(e.command);
    },
    isReadOnly (e) {
        return rn(e);
    },
    sandboxNetworkLists (e) {
        return Nae(e);
    },
    toAutoClassifierInput (e) {
        let e_dangerouslyDisableSandbox = e.dangerouslyDisableSandbox;
        let s = false;
        let r = Zge(e);
        let m = GSt(e);
        if (r !== undefined || m !== undefined) {
            return {
                command: e.command,
                ...false,
                ...r !== undefined && {
                    [Or]: r
                },
                ...m
            };
        }
        return e.command;
    },
    async preparePermissionMatcher ({ command }) {
        let n = await fke(command);
        if (!n.valid) {
            return ()=>true;
        }
        let s = GU(n).flatMap((r)=>{
            let m = [
                r.name,
                ...r.args
            ].join(" ");
            let h = [
                cb(r.name),
                ...r.args
            ].join(" ");
            if (m.toLowerCase() === h) {
                return [
                    m
                ];
            }
            return [
                m,
                h
            ];
        });
        return (r)=>{
            let m = Hxe(r);
            return s.some((h)=>{
                if (m !== null) {
                    let y = m.toLowerCase();
                    let v = h.toLowerCase();
                    return v === y || v.startsWith(`${y} `);
                }
                return oZ(r, h, true, true);
            });
        };
    },
    get inputSchema () {
        return no();
    },
    get outputSchema () {
        return so();
    },
    userFacingName () {
        return "PowerShell";
    },
    getToolUseSummary (e) {
        if (!e?.command) {
            return null;
        }
        let { command, description } = e;
        if (description) {
            return description;
        }
        return jo(command, zT);
    },
    getActivityDescription (e) {
        if (!e?.command) {
            return "Running command";
        }
        return `Running ${e.description ?? jo(e.command, zT)}`;
    },
    isEnabled () {
        return true;
    },
    mapToolResultToToolResultBlockParam ({ interrupted, stdout, stderr, isImage, persistedOutputPath, persistedOutputSize, backgroundTaskId, backgroundedByUser, backgroundedToDeliverMessage, backgroundedByTurnAbort, timedOutAfterMs, backgroundEndsWithFinalResponse }, tool_use_id) {
        if (isImage) {
            let N = bor(stdout, tool_use_id);
            if (N) {
                return N;
            }
        }
        let T = stdout;
        if (persistedOutputPath) {
            let N = stdout ? stdout.replace(/^(\s*\n)+/, "").trimEnd() : "";
            let F = Xrt(N, nAe);
            T = oAe({
                filepath: persistedOutputPath,
                originalSize: persistedOutputSize ?? 0,
                isJson: false,
                preview: F.preview,
                hasMore: F.hasMore,
                truncatedAtBytes: (persistedOutputSize ?? 0) >= A_e ? A_e : undefined
            });
        } else if (stdout) {
            T = stdout.replace(/^(\s*\n)+/, "");
            T = T.trimEnd();
        }
        let C = stderr.trim();
        if (interrupted) {
            if (stderr) {
                C += tn;
            }
            C += "<error>Command was aborted before completion</error>";
        }
        let P = backgroundTaskId ? wor({
            backgroundTaskId,
            outputPath: Ru(backgroundTaskId),
            backgroundedByUser,
            backgroundedToDeliverMessage,
            backgroundedByTurnAbort,
            timedOutAfterMs,
            reapedAtFinalResponse: backgroundEndsWithFinalResponse,
            readToolName
        }) : "";
        if (backgroundTaskId && gB()) {
            return {
                tool_use_id,
                type: "tool_result",
                content: Htr(backgroundTaskId, [
                    C,
                    P
                ].filter(Boolean).join(`
`), {
                    backgroundedByUser,
                    ending: backgroundEndsWithFinalResponse ? "final_response" : undefined
                })
            };
        }
        return {
            tool_use_id,
            type: "tool_result",
            content: [
                T,
                C,
                P
            ].filter(Boolean).join(`
`),
            is_error: interrupted
        };
    },
    create (e) {
        return {
            async validateInput (n, s) {
                if (Yx() && mu(n)) {
                    return {
                        result: false,
                        message: LB(),
                        errorCode: 12
                    };
                }
                let r = sn(Ue(n), n.command, false);
                if (r !== null) {
                    f("sandbox_exec", "windows_policy_refusal");
                    return {
                        result: false,
                        message: r,
                        errorCode: 11
                    };
                }
                let m = VSt(n, Ue(n));
                if (m !== undefined) {
                    return m;
                }
                if (A4() && xl() && !Cd() && Jle() && s.remoteCall?.constraints.background !== "forbidden" && !n.run_in_background && s.shellWallCapMs === undefined) {
                    let h = Ys(n.command);
                    if (h !== null) {
                        return {
                            result: false,
                            message: `Blocked: ${h}. To wait for a condition, use Monitor with an until-loop (e.g. \`until <check>; do sleep 2; done\` \u2014 Monitor runs bash). To wait for a command you started, use run_in_background: true. Do not chain shorter sleeps to work around this block.`,
                            errorCode: 10
                        };
                    }
                }
                return {
                    result: true
                };
            },
            permissionCheckFailureDecision (n, s) {
                let r = St(e, s);
                return en(r.shellPermission);
            },
            async checkPermissions (n, s) {
                let r = St(e, s);
                let m = await Jt(n, r.shellPermission);
                if (n.dangerouslyDisableSandbox && m.behavior !== "deny" && m.behavior !== "ask" && !QGe(m.decisionReason) && !Ue(n) && Ue({
                    ...n,
                    dangerouslyDisableSandbox: false
                })) {
                    let h = Aor({
                        toolName: Ct,
                        input: n,
                        context: r.shellPermission
                    });
                    if (h) {
                        return h;
                    }
                    return {
                        behavior: "ask",
                        decisionReason: {
                            type: "sandboxOverride",
                            reason: "dangerouslyDisableSandbox"
                        },
                        message: "Run outside of the sandbox"
                    };
                }
                return m;
            },
            async call (n, s) {
                let r = St(e, s);
                let { onProgress } = s;
                let r_userTypedShellDispatch = r.userTypedShellDispatch;
                let constraints = r.remoteCall?.constraints;
                let disableUnsandboxedCommands = constraints?.sandbox === "required";
                let useSandbox = Ue(n, {
                    userTypedShellDispatch: r_userTypedShellDispatch,
                    disableUnsandboxedCommands
                });
                let _ = sn(useSandbox, n.command, r_userTypedShellDispatch && n.dangerouslyDisableSandbox === true);
                if (_ !== null) {
                    f("sandbox_exec", "windows_policy_refusal");
                    throw new gre(_);
                }
                if (disableUnsandboxedCommands) {
                    let N = !useSandbox || UA() !== "strict" || Sd() ? {
                        confined: false,
                        reason: "sandbox_unconfined"
                    } : await KTe();
                    if (!N.confined) {
                        f("sandbox_exec", "remote_floor_refusal");
                        throw new gre("This call must run inside a fully confining sandbox and none is available here. The command was not run.", N.reason);
                    }
                }
                let { abortController, emitToolProgress } = r;
                let isMainThread = !r.agentId;
                let preventCwdChanges = !isMainThread || constraints?.pinCwd === true;
                let C = 0;
                await using P = Ror(r.taskRegistry);
                try {
                    let N = oo({
                        input: n,
                        useSandbox,
                        networkLists: qSt(r.toolUseId, n.command),
                        constraints,
                        onNote: r.remoteCall?.onNote,
                        abortController,
                        taskRegistry: r.taskRegistry,
                        emitToolProgress,
                        session: r.session,
                        preventCwdChanges,
                        isMainThread,
                        toolUseId: r.toolUseId,
                        toolState: r.toolState,
                        agentId: r.agentId,
                        caller: j2t(r),
                        shellWallCapMs: r.shellWallCapMs,
                        agentWorktree: r.agentWorktree,
                        isolationRoot: Xge(r),
                        sessionEnvVars: r.sessionEnvVars
                    });
                    let F;
                    do {
                        F = await N.next();
                        if (!F.done && onProgress) {
                            let Z = F.value;
                            onProgress({
                                type: "progress",
                                toolUseID: `ps-progress-${C++}`,
                                data: {
                                    type: "powershell_progress",
                                    output: Z.output,
                                    fullOutput: Z.fullOutput,
                                    elapsedTimeSeconds: Z.elapsedTimeSeconds,
                                    totalLines: Z.totalLines,
                                    totalBytes: Z.totalBytes,
                                    timeoutMs: Z.timeoutMs,
                                    taskId: Z.taskId
                                }
                            });
                        }
                    }while (!F.done)
                    let I = F.value;
                    P.track(I);
                    let D = I.code === 0 && !I.stdout && I.stderr && !I.backgroundTaskId;
                    let U = await fIn(I.stdout, I.outputFilePath);
                    if (!D && !I.backgroundTaskId && mIn(r.session.host, n.command, I.code, U).prResolved) {
                        r.markPrResolvedThisSession();
                    }
                    let V = zet(n.command);
                    let q = gi(abortController.signal.reason);
                    let z = I.interrupted && q === "interrupt";
                    let interrupted = I.interrupted && lMt(q);
                    if (I.interrupted && q === "background") {
                        throw new Ye;
                    }
                    let X = "";
                    let cwd = bo(r.session).cwd;
                    if (!preventCwdChanges) {
                        if (Eor(r.session, r.permissions())) {
                            X = vor("");
                        }
                    }
                    let backgroundEndsWithFinalResponse = I.backgroundTaskId !== undefined && (ect(r.agentContext) || r.agentId === undefined && PSt()) ? true : undefined;
                    if (I.backgroundTaskId) {
                        let stdout = Qwt(I.stdout || "", {
                            command: n.command,
                            pendingHint: r.session.pendingHint,
                            isMainThread,
                            surface: "shell"
                        });
                        if (gB()) {
                            i("tengu_bash_task_ack", {
                                trigger: I.backgroundedByUser ? b("user") : I.backgroundedByTurnAbort ? b("turn_abort") : I.backgroundedToDeliverMessage ? b("deliver_message") : I.timedOutAfterMs !== undefined ? b("timeout") : b("explicit"),
                                ends_with_final_response: backgroundEndsWithFinalResponse === true,
                                shell: b("powershell")
                            });
                        }
                        return {
                            data: {
                                stdout,
                                stderr: [
                                    I.stderr || "",
                                    X
                                ].filter(Boolean).join(`
`),
                                interrupted: false,
                                backgroundTaskId: I.backgroundTaskId,
                                backgroundedByUser: I.backgroundedByUser,
                                backgroundedByTurnAbort: I.backgroundedByTurnAbort,
                                backgroundedToDeliverMessage: I.backgroundedToDeliverMessage,
                                timedOutAfterMs: I.timedOutAfterMs,
                                backgroundEndsWithFinalResponse
                            }
                        };
                    }
                    let ye = new Mon;
                    let te = (I.stdout || "").trimEnd();
                    ye.append(te + tn);
                    let ge = S8r(n.command, I.code, te, I.stderr || "");
                    let J = _or(ye.toString());
                    J = Qwt(J, {
                        command: n.command,
                        pendingHint: r.session.pendingHint,
                        isMainThread,
                        surface: "shell"
                    });
                    if (I.preSpawnError) {
                        let Z = new x(I.preSpawnError, "PowerShell: pre-spawn error (cwd/argv redacted)");
                        throw I.preSpawnErrorCode === "e2big" ? uH(Z, {
                            kind: "spawn_arg_limit"
                        }) : Z;
                    }
                    if (ge.isError && !z) {
                        let Z = te.length <= 8192 ? te : te.slice(0, 4096) + te.slice(-4096);
                        let ae = yQo(Z, I.code);
                        i("tengu_powershell_tool_command_failed", {
                            command_type: d(Dqt(n.command)),
                            exit_code: I.code,
                            stdout_length: te.length,
                            error_class: T_(ae),
                            not_recognized_kind: ae === "not_recognized" || ae === "command_not_found" ? d(_Qo(Z) ?? "unextracted") : undefined,
                            parser_error_kind: ae === "parser_error" || ae === "ps5_chain_op" ? d(b8r(Z) ?? "unextracted") : undefined,
                            bash_syntax_shape: d(bQo(n.command)),
                            powershell_edition: d(await qYt() ?? "unknown"),
                            user_typed_shell_dispatch: r_userTypedShellDispatch,
                            call_origin: d(constraints ? "remote" : "local"),
                            destructive_category: d(V ?? "none"),
                            destructive_target_scope: d(NHe(n.command, se(), V)),
                            permission_mode: d(r.permissions().mode)
                        });
                        throw new fG({
                            stdout: J,
                            stderr: I.stderr || "",
                            code: I.code,
                            interrupted
                        });
                    }
                    let persistedOutputPath;
                    let persistedOutputSize;
                    if (I.outputFilePath && I.outputTaskId) {
                        try {
                            let Z = nh(r.session);
                            await S0(Z, r.storageV5);
                            let ae = rAe(Z, I.outputTaskId, false);
                            let R = j() && r.storageV5 !== undefined ? gq(dirname(ae), basename(ae)) : undefined;
                            let L = true;
                            if (j() && r.storageV5 !== undefined && R !== undefined) {
                                let B = await Cor(r.storageV5, R, I.outputFilePath, A_e, m9t());
                                L = B === "today";
                                if (typeof B === "number") {
                                    persistedOutputPath = ae;
                                    persistedOutputSize = B;
                                }
                            }
                            if (L) {
                                persistedOutputSize = await b9t(I.outputFilePath, ae, A_e);
                                persistedOutputPath = ae;
                            }
                        } catch  {}
                    }
                    let isImage = DTn(J);
                    let xe = J;
                    if (isImage) {
                        let Z = await Sor(J, I.outputFilePath, persistedOutputSize, Tc(r.mainLoopModel()));
                        if (Z) {
                            xe = Z;
                        } else {
                            isImage = false;
                        }
                    }
                    let stderr = [
                        I.stderr || "",
                        X
                    ].filter(Boolean).join(`
`);
                    let gitOperation;
                    if (!D) {
                        let Z = _Tt(n.command, U);
                        if (Object.keys(Z).length > 0) {
                            gitOperation = Z;
                        }
                        if (!r.remoteCall) {
                            pIn(Z, U, {
                                command: n.command,
                                exitCode: I.code,
                                cwd
                            });
                        }
                    }
                    i("tengu_powershell_tool_command_executed", {
                        command_type: d(Dqt(n.command)),
                        stdout_length: xe.length,
                        stderr_length: stderr.length,
                        exit_code: I.code,
                        interrupted: I.interrupted,
                        powershell_edition: d(await qYt() ?? "unknown"),
                        user_typed_shell_dispatch: r_userTypedShellDispatch,
                        call_origin: d(constraints ? "remote" : "local"),
                        destructive_category: d(V ?? "none"),
                        destructive_target_scope: d(NHe(n.command, se(), V)),
                        permission_mode: d(r.permissions().mode)
                    });
                    return {
                        data: {
                            stdout: xe,
                            stderr,
                            interrupted: I.interrupted,
                            returnCodeInterpretation: ge.message,
                            isImage,
                            persistedOutputPath,
                            persistedOutputSize,
                            gitOperation
                        }
                    };
                } finally{
                    if (r.toolUseId) {
                        emitToolProgress?.({
                            kind: "clear",
                            toolUseId: r.toolUseId
                        });
                    }
                    if (!rn(n)) {
                        r.applyFileHistoryOp({
                            kind: "touch"
                        });
                    }
                }
            }
        };
    }
});
async function* oo({ input, useSandbox, networkLists, constraints, onNote, abortController, taskRegistry, emitToolProgress, session, preventCwdChanges, isMainThread, toolUseId, agentId, caller, shellWallCapMs, agentWorktree, isolationRoot, sessionEnvVars, toolState }) {
    let { command, description, timeout, run_in_background } = input;
    let z = Cd() || constraints?.background === "forbidden";
    let G = run_in_background === true && !z;
    let X = shellWallCapMs !== undefined ? Math.min(timeout || Azt(), shellWallCapMs, constraints?.maxTimeoutMs ?? Infinity) : Math.min(timeout || x7n(), G ? Ece() : Azt(), constraints?.maxTimeoutMs ?? Infinity);
    if (timeout && X < timeout) {
        onNote?.({
            key: "timeout_clamped",
            requestedMs: timeout,
            appliedMs: X
        });
    }
    let fullOutput = "";
    let output = "";
    let totalLines = 0;
    let totalBytes = 0;
    let ge;
    let timedOutAfterMs;
    let ve = false;
    let pe = ()=>abortController.signal.aborted && Qvn(abortController.signal.reason, caller);
    let he = null;
    function xe() {
        return new Promise((resolvePromise)=>{
            he = ()=>resolvePromise(null);
        });
    }
    using Me = M5o(abortController.signal, ()=>{
        if (!pe()) {
            return;
        }
        let K = he;
        if (K) {
            he = null;
            K();
        }
    });
    let Se = !z && await Ks(command);
    let turnAbortBackgrounds = !z;
    let ae = eMn({
        requestedTimeoutMs: X,
        isMainAgent: isMainThread === true,
        canAutoBackground: Se
    });
    if (!await KC()) {
        return {
            stdout: "",
            stderr: "PowerShell is not available on this system.",
            code: 0,
            interrupted: false
        };
    }
    let shellCommand;
    try {
        shellCommand = await nle(command, abortController.signal, "powershell", {
            timeout: ae,
            owningAgentId: agentId,
            caller,
            turnAbortBackgrounds,
            sandboxAttributionId: toolUseId,
            sandboxNetworkLists: networkLists,
            onProgress (K, ce, be, oe, $e) {
                output = K;
                fullOutput = ce;
                totalLines = be;
                totalBytes = $e ? oe : 0;
            },
            session,
            preventCwdChanges,
            ...constraints?.scrubCredentialEnv && {
                scrubCredentialEnv: true
            },
            ...constraints?.sandbox === "required" && {
                requireConfiningSandbox: true
            },
            sandboxDenyRead: constraints?.additionalDenyRead,
            sandboxDenyWrite: constraints?.additionalDenyWrite,
            agentWorktree,
            isolationRoot,
            shouldUseSandbox: useSandbox,
            shouldAutoBackground: Se,
            sessionEnvVars
        });
    } catch (error) {
        if (Ke(error)) {
            return {
                stdout: "",
                stderr: "Command aborted before execution",
                code: 145,
                interrupted: true
            };
        }
        if (error instanceof Error && kor.has(error.name)) {
            throw error;
        }
        if (xs(error)) {
            t(`PowerShellTool: exec spawn failed: ${error}`);
            return {
                stdout: "",
                stderr: `Failed to execute PowerShell command: ${l(error)}`,
                code: 0,
                interrupted: false
            };
        }
        c(ot(W(error), "PowerShell exec() pre-spawn setup failed"));
        return {
            stdout: "",
            stderr: `Failed to execute PowerShell command: ${l(error)}`,
            code: 0,
            interrupted: false
        };
    }
    let B = shellCommand.status !== "killed" ? Tor(Ct, command, toolState, {
        useSandbox
    }) : null;
    let L_result = shellCommand.result;
    if (B) {
        L_result.then((K)=>{
            if (K.preSpawnError) {
                B();
            }
        }).catch(()=>{});
    }
    async function Q(timeout_1) {
        return (await $De({
            command,
            shell: "powershell",
            description: description || command,
            shellCommand,
            toolUseId,
            agentId,
            timeout: timeout_1
        }, {
            abortController,
            taskRegistry
        })).taskId;
    }
    function ee(K, ce) {
        if (le) {
            if (!ERn(le, shellCommand, description || command, taskRegistry, toolUseId)) {
                return;
            }
            ge = le;
            i(K, {
                command_type: d(Dqt(command))
            });
            ce?.(le);
            return;
        }
        Q().then((be)=>{
            ge = be;
            let oe = he;
            if (oe) {
                he = null;
                oe();
            }
            i(K, {
                command_type: d(Dqt(command))
            });
            if (ce) {
                ce(be);
            }
        });
    }
    if (shellCommand.onTimeout && Se) {
        shellCommand.onTimeout((K)=>{
            timedOutAfterMs = ae;
            ee("tengu_powershell_command_timeout_backgrounded", K);
        });
    }
    if (G && shellCommand.status !== "killed") {
        if (shellCommand.status === "completed") {
            let be = await L_result;
            if (be.preSpawnError) {
                return be;
            }
        }
        let K = ZOn(timeout, X);
        let backgroundTaskId = await Q(K);
        i("tengu_powershell_command_explicitly_backgrounded", {
            command_type: d(Dqt(command)),
            timeout_ms: K ?? 0
        });
        return {
            stdout: "",
            stderr: "",
            code: 0,
            interrupted: false,
            backgroundTaskId
        };
    }
    Vj.startPolling(shellCommand.taskOutput.taskId);
    let Y = Date.now();
    let ne = Y + nn;
    let le;
    let fe = null;
    try {
        while(true){
            let K = Date.now();
            let ce = Math.max(0, ne - K);
            let be;
            if (!ve && pe()) {
                be = Promise.resolve(null);
            } else {
                be = xe();
            }
            let oe = await Promise.race([
                L_result,
                new Promise((resolvePromise)=>setTimeout((_e)=>_e(null), ce, resolvePromise).unref()),
                be
            ]);
            if (oe !== null) {
                fe = oe;
                if (oe.backgroundTaskId !== undefined) {
                    if (klr(oe.backgroundTaskId, oe, taskRegistry)) {
                        la(oe.backgroundTaskId, iYt(oe, {
                            command,
                            shell: "powershell"
                        }), {
                            toolUseId,
                            summary: description || command
                        });
                    }
                    let Te = {
                        ...oe,
                        backgroundTaskId: undefined
                    };
                    let { taskOutput } = shellCommand;
                    if (taskOutput.stdoutToFile && !taskOutput.outputFileRedundant) {
                        Te.outputFilePath = taskOutput.path;
                        Te.outputFileSize = taskOutput.outputFileSize;
                        Te.outputTaskId = taskOutput.taskId;
                    }
                    return Te;
                }
                return oe;
            }
            if (ge) {
                return {
                    stdout: ve ? fullOutput : "",
                    stderr: "",
                    code: 0,
                    interrupted: false,
                    backgroundTaskId: ge,
                    ...pe() && {
                        backgroundedByTurnAbort: true
                    },
                    timedOutAfterMs
                };
            }
            if (abortController.signal.aborted && (gi(abortController.signal.reason) === "interrupt" || pe()) && !ve) {
                ve = true;
                if (Se || pe() && turnAbortBackgrounds) {
                    ee(pe() ? "tengu_powershell_command_turn_abort_backgrounded" : "tengu_powershell_command_interrupt_backgrounded");
                    continue;
                }
                shellCommand.kill();
                continue;
            }
            if (le) {
                if (shellCommand.status === "backgrounded") {
                    return {
                        stdout: "",
                        stderr: "",
                        code: 0,
                        interrupted: false,
                        backgroundTaskId: le,
                        ...Elr(le, taskRegistry) ? {
                            backgroundedToDeliverMessage: true
                        } : {
                            backgroundedByUser: true
                        }
                    };
                }
            }
            let $e = Date.now() - Y;
            let elapsedTimeSeconds = Math.floor($e / 1000);
            if (!z && !ve && ge === undefined && elapsedTimeSeconds >= nn / 1000) {
                if (!le) {
                    le = wlr({
                        command,
                        shell: "powershell",
                        description: description || command,
                        shellCommand,
                        agentId,
                        caller,
                        autoBackgroundArmed: Se
                    }, taskRegistry, toolUseId);
                }
                if (toolUseId) {
                    emitToolProgress?.({
                        kind: "background_hint",
                        toolUseId
                    });
                }
            }
            yield {
                type: "progress",
                fullOutput,
                output,
                elapsedTimeSeconds,
                totalLines,
                totalBytes,
                taskId: shellCommand.taskOutput.taskId,
                ...timeout ? {
                    timeoutMs: ae
                } : undefined
            };
            ne = Date.now() + Hs;
        }
    } finally{
        Vj.stopPolling(shellCommand.taskOutput.taskId);
        if (!ge && shellCommand.status !== "backgrounded") {
            if (le) {
                Tlr(le, fe ? iYt(fe, {
                    command,
                    shell: "powershell"
                }) : "stopped", taskRegistry);
            }
            shellCommand.cleanup();
        }
    }
}
