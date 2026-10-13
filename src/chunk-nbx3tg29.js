import { Nse, L8e } from "/$bunfs/root/chunk-ctt36bn8.js";
import { x, W, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { po, ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { xr } from "/$bunfs/root/chunk-c5mcach4.js";
import { m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { $u } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne, Lt } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { xp, Lb, oAr, tut, dEo } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Lo } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { fe, Qn, N3e } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Pi as path, uR, _r } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { Me } from "/$bunfs/root/chunk-b97fvbrv.js";
import { Ss } from "/$bunfs/root/chunk-17w0r6ry.js";
import { dlt } from "/$bunfs/root/chunk-zdj680mx.js";
import { tRe, JFn, QFn } from "/$bunfs/root/chunk-462ckztb.js";
import { ZFn, hY } from "/$bunfs/root/chunk-pjqd7qee.js";
import { QW } from "/$bunfs/root/chunk-xv9n7kza.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { Le } from "/$bunfs/root/chunk-cj4xndke.js";
import { join, resolve, dirname, relative, sep, isAbsolute, basename } from "path";
import { readFile, lstat, realpath } from "fs/promises";
import { createHash } from "crypto";
const Nn = "scripts/bundle-builtin-hooks-module.ts";
function Tn(e) {
    let o = L(e) ? e.files : undefined;
    return Object.freeze(Object.fromEntries((L(o) ? Object.entries(o) : []).filter((r)=>typeof r[1] === "string")));
}
function An(e, folder) {
    let r = L(e) ? e.scan : undefined;
    if (L(r) && Array.isArray(r.hooks) && Array.isArray(r.calls) && (r.nextTo === undefined || Array.isArray(r.nextTo))) {
        return r;
    }
    throw new x(`the build carried no hooks module scan for ${folder}`, "the build carried no hooks module scan for a built-in");
}
const In = (path, o)=>new x(`the hooks module of ${path} cannot ship: ${o}`, "the hooks module of a built-in cannot ship");
const he = "hooks/register.ts";
const nr = (e)=>`builtin:${e}/${he}`;
const Eo = "mods";
const bo = "mods/";
const je = ()=>resolve(import.meta.dirname, "../../../../../..");
const sr = "builtin-hooks-module:";
function Bn(importer, path) {
    let r = path.slice(sr.length);
    if (r.startsWith(bo)) {
        return `${Eo}/${r.slice(bo.length)}`;
    }
    return relative(je(), resolve(dirname(importer), r)).split(sep).join("/");
}
const wo = "builtin-hooks-module";
const ob = {
    name: wo,
    setup (e) {
        e.onResolve({
            filter: /^builtin-hooks-module:/
        }, (o)=>({
                path: Bn(o.importer, o.path),
                namespace: wo
            }));
        e.onLoad({
            filter: /.*/,
            namespace: wo
        }, async (o)=>{
            let r = Bun.spawn([
                process.execPath,
                "--smol",
                join(je(), Nn),
                o.path
            ], {
                cwd: je(),
                stdout: "pipe",
                stderr: "pipe",
                windowsHide: true
            });
            let [t, n, s] = await Promise.all([
                new Response(r.stdout).text(),
                new Response(r.stderr).text(),
                r.exited
            ]);
            if (s !== 0) {
                throw In(o.path, n);
            }
            return {
                contents: `module.exports = ${t}`,
                loader: "js"
            };
        });
    }
};
const IFn = ze(Ss(), (e)=>e.set(undefined));
const te = (e)=>{
    if (e instanceof Error && "code" in e) {
        return String(e.code);
    }
    return "EIO";
};
const pr = (e, o, r)=>new Me(`${e}: ${o}: no such file`, {
        cause: te(r)
    });
const ir = [
    "EMFILE",
    "ENFILE"
];
async function Re(e, o) {
    try {
        return await e;
    } catch (error) {
        throw o(error);
    }
}
function ar(e, o, r) {
    let t = te(r);
    if (ir.includes(t)) {
        return new Me(`${e}: ${o}: not read, no file descriptor free (${t})`);
    }
    return pr(e, o, r);
}
const Xn = (e, o, r)=>new Me(`${e}: ${o}: not readable (${te(r)})`);
const fr = `/** @jsxRuntime classic */
/** @jsx h */
/** @jsxFrag Fragment */
`;
const vo = (e)=>oAr[tut.find((o)=>e.endsWith(o)) ?? ""] ?? "js";
function mr(e) {
    let o = typeof e === "object" && e ? e : {};
    let r = "errors" in o ? o.errors : undefined;
    if (Array.isArray(r)) {
        return r;
    }
    return [
        o
    ];
}
function lr(e, o) {
    let r = typeof e === "object" && e !== null;
    let t = r && "message" in e ? String(e.message) : "";
    let n = r && "position" in e ? e.position : undefined;
    if (!(typeof n === "object" && n !== null && "line" in n && typeof n.line === "number" && "column" in n)) {
        return t;
    }
    return `${t} (line ${Number(n.line) - o}, column ${String(n.column)})`;
}
const dr = (error, o)=>mr(error).map((r)=>lr(r, o)).filter((r)=>r !== "").join("; ") || String(error);
function OFn(e, o) {
    let loader = vo(e);
    let t = loader === "js";
    let n = loader === "ts" ? "" : fr;
    if (t) {
        return o;
    }
    try {
        let s = {
            loader,
            macro: false
        };
        return new Bun.Transpiler(s).transformSync(`${n}${o}`);
    } catch (error) {
        throw new Me(dr(error, Lt(n, `
`)));
    }
}
const vgo = (e)=>tut.some((o)=>e.endsWith(o));
const No = 32;
const To = 1048576;
const cr = 8388608;
function ur(e) {
    let o = [
        e
    ];
    if (e.endsWith(".js")) {
        let r = e.slice(0, -3);
        o.push(`${r}.ts`, `${r}.tsx`);
    }
    if (e.endsWith(".jsx")) {
        o.push(`${e.slice(0, -4)}.tsx`);
    }
    if (e.endsWith(".mjs")) {
        o.push(`${e.slice(0, -4)}.mts`);
    }
    if (e.endsWith(".cjs")) {
        o.push(`${e.slice(0, -4)}.cts`);
    }
    for (let r of tut){
        o.push(`${e}${r}`);
        o.push(`${e}${sep}index${r}`);
    }
    return o;
}
const slt = "claude-code";
const dws = (e, o, r)=>new Me(`${e}: cannot import "${o}" (from ${r}): a hooks module imports its own files by relative path and "${slt}", nothing else`);
const hr = (spelled, importer)=>{
    if ([
        ".",
        "..",
        "./",
        "../"
    ].includes(spelled)) {
        return resolve(dirname(importer), spelled, "index");
    }
    return resolve(dirname(importer), spelled);
};
const Ego = (e)=>e === "." || e === ".." || e.startsWith("./") || e.startsWith("../");
const jr = [
    "no such file",
    "not a regular file",
    "resolves outside the plugin's folder"
];
const Ao = (e, o)=>new Me(`${e}: ${o} is over ${To} bytes and was not read`);
async function Pe(e, { real, size, ctimeMs }, n) {
    if (size > To) {
        throw Ao(n, e);
    }
    return Re(readFile(real, "utf8"), (s)=>ar(n, e, s)).then((source)=>{
        IFn.get()?.(e, ctimeMs);
        return {
            real,
            source
        };
    });
}
async function WYe(e, o, r) {
    let t = await Re(realpath(o), (f)=>Xn(r, basename(o), f));
    let n = (f)=>ar(r, e, f);
    let real = await Re(realpath(e), n);
    let p = relative(t, real);
    if (p === ".." || p.startsWith(`..${sep}`) || isAbsolute(p)) {
        throw new Me(`${r}: ${e}: ${real} resolves outside the plugin's folder`);
    }
    let a = await Re(lstat(real), n);
    if (!a.isFile()) {
        throw new Me(`${r}: ${e}: not a regular file`);
    }
    return {
        real,
        size: a.size,
        ctimeMs: a.ctimeMs
    };
}
const Er = (e, o)=>new Me(`${e}: ${o} is not named like code and was not loaded: a hooks module and the files it imports end in ` + dEo);
function De(e, o, real) {
    let t = [
        o,
        real
    ].find((n)=>!vgo(n));
    if (t !== undefined) {
        throw Er(e, t);
    }
}
const kgo = (e, o)=>{
    if (o.startsWith(`${e}: `)) {
        return o.slice(`${e}: `.length);
    }
    return o;
};
async function uws({ spelled, importer, root, pluginName }, n, s) {
    let p = `${pluginName}: cannot import "${spelled}" (from ${relative(root, importer) || importer}):`;
    let i = hr(spelled, importer);
    let a = relative(root, i);
    if (a === ".." || a.startsWith(`..${sep}`) || isAbsolute(a)) {
        throw new Me(`${p} it is outside the plugin's folder (${root})`);
    }
    let y = [];
    for (let d of ur(i)){
        let g = n.get(d);
        if (g !== undefined) {
            return {
                file: d,
                source: g
            };
        }
        try {
            let u = await WYe(d, root, pluginName);
            De(pluginName, d, u.real);
            let h = s.get(u.real);
            let k = h === undefined ? undefined : n.get(h);
            if (h !== undefined && k !== undefined) {
                return {
                    file: h,
                    source: k
                };
            }
            let { real, source } = await Pe(d, u, pluginName);
            return {
                file: d,
                source,
                real
            };
        } catch (error) {
            let h = l(error);
            if (!(error instanceof Me) || !jr.some((E)=>h.endsWith(E))) {
                throw new Me(`${p} ${kgo(pluginName, h)}`);
            }
            let j = error.cause === undefined;
            y.push(j ? h : `${h} (${String(error.cause)})`);
        }
    }
    throw new Me(`${p} no such file under ${root}`, y.length === 0 ? undefined : {
        cause: y.join("; ")
    });
}
const wr = (e, file, r)=>new Me(`${e}: ${file} ${r}`);
const As = (e, file)=>wr(e, file, `takes the module over ${cr} bytes in total and was not read`);
async function Os(e, o, r) {
    let t = await WYe(e, o, r);
    De(r, e, t.real);
    return Pe(e, t, r);
}
const Tgo = ()=>dlt();
const He = Sr();
const vr = 80;
function MFn() {
    let e = new Map;
    return {
        get: (o)=>e.get(o),
        set: (o, r)=>{
            e.set(o, r);
        }
    };
}
const Nr = MFn();
function Sr() {
    let e = MFn();
    let o = MFn();
    return {
        register: (r, t)=>{
            e.set(r, t);
        },
        source: (r)=>e.get(r),
        registerScan: (r, t)=>{
            o.set(r, t);
        },
        scan: (r)=>o.get(r)
    };
}
function ke({ call, scanned, what, holder }) {
    let { endOf, functionOf } = scanned.climbs;
    let p = endOf(call);
    if (p === undefined) {
        return;
    }
    let { value, parent } = p;
    if (!(parent.type === "ExpressionStatement" || (parent.type === "ReturnStatement" || parent.type === "ArrowFunctionExpression" && parent.body === value) && functionOf(value) === holder)) {
        throw scanned.refuse(value, `the value of ${what} is kept (assigned, passed, read, or returned from a nested function); it takes .catch(handler) where it is called and nothing else`);
    }
}
const se = "Client";
const Tr = (e, o)=>e.id === o || e.params.includes(o);
const Or = {
    VariableDeclarator: (e, o)=>e.id === o,
    FunctionDeclaration: Tr,
    FunctionExpression: Tr,
    ArrowFunctionExpression: (e, o)=>e.params.includes(o),
    ClassDeclaration: (e, o)=>e.id === o,
    ClassExpression: (e, o)=>e.id === o,
    CatchClause: (e, o)=>e.param === o,
    AssignmentPattern: (e, o)=>e.left === o,
    RestElement: (e, o)=>e.argument === o,
    ArrayPattern: (e, o)=>e.elements.includes(o),
    Property: (e, o, r)=>e.value === o && r?.type === "ObjectPattern",
    ImportSpecifier: (e, o)=>e.local === o,
    ImportDefaultSpecifier: (e, o)=>e.local === o,
    ImportNamespaceSpecifier: (e, o)=>e.local === o
};
const Bs = (e)=>Or[e.type];
const Gs = (node, parent)=>(parent?.type === "Property" || parent?.type === "PropertyDefinition" || parent?.type === "MethodDefinition") && parent.key === node && !parent.computed;
const Oo = (e)=>typeof e === "object" && e !== null && typeof e.type === "string";
function zs(e) {
    let o = new WeakMap;
    return (r)=>{
        let t = o.get(r);
        if (t !== undefined) {
            return t;
        }
        let n = e(r);
        o.set(r, n);
        return n;
    };
}
function XM(node, o, r) {
    let t = [
        {
            node,
            parent: undefined,
            grandparent: undefined
        }
    ];
    for(let n = t.pop(); n !== undefined; n = t.pop()){
        o(n);
        if (r?.(n.node)) {
            continue;
        }
        let s = Object.keys(n.node);
        for(let p = s.length - 1; p >= 0; p -= 1){
            let i = s[p];
            if (i === undefined || i === "loc" || i === "type" || i === "start" || i === "end") {
                continue;
            }
            let f = n.node[i];
            if (Array.isArray(f)) {
                for(let y = f.length - 1; y >= 0; y -= 1){
                    let d = f[y];
                    if (Oo(d)) {
                        t.push({
                            node: d,
                            parent: n.node,
                            grandparent: n.parent
                        });
                    }
                }
            } else if (Oo(f)) {
                t.push({
                    node: f,
                    parent: n.node,
                    grandparent: n.parent
                });
            }
        }
    }
}
function Xs(program) {
    let o = new Map;
    XM(program, ({ node, parent })=>{
        if (parent !== undefined) {
            o.set(node, parent);
        }
    });
    return o;
}
function Ir(argument) {
    let o;
    for (let property of argument.properties){
        if (property.type === "SpreadElement") {
            o = o && {
                ...o,
                isSpreadAfter: true
            };
            continue;
        }
        let { key } = property;
        if (!property.computed && property.kind === "init" && (key.type === "Identifier" && key.name === "module" || key.type === "Literal" && key.value === "module")) {
            o = {
                property,
                isSpreadAfter: false
            };
        }
    }
    return o;
}
function K(e) {
    if (e === undefined) {
        return "no argument";
    }
    switch(e.type){
        case "Identifier":
            return `the variable ${e.name}`;
        case "TemplateLiteral":
            return "a template with a substitution";
        case "SpreadElement":
            return "a spread";
        case "Literal":
            return `the literal ${e.raw ?? String(e.value)}`;
        case "MemberExpression":
            return "a member read";
        case "CallExpression":
            return "a call";
        case "BinaryExpression":
            return "a concatenation";
        case "ObjectExpression":
            return "an object whose plugin or key is not a string literal";
        default:
            return `a ${e.type}`;
    }
}
function B(e) {
    if (e.type === "Literal") {
        if (typeof e.value === "string") {
            return e.value;
        }
        return undefined;
    }
    if (e.type !== "TemplateLiteral" || e.expressions.length !== 0) {
        return;
    }
    let o = e.quasis[0]?.value.cooked;
    if (o === undefined || o === null) {
        return undefined;
    }
    return o;
}
function Rr(node, argument) {
    if (!argument || argument.type !== "ObjectExpression") {
        return {
            at: argument ?? node,
            problem: `Client takes its props as an object literal ({ module: "./board.tsx", key }), so the surface module it names can be read before it runs (got ${K(argument)})`
        };
    }
    let r = Ir(argument);
    if (!r) {
        return {
            at: argument,
            problem: `Client names no module: give it module, the surface module's path as a string literal ("./board.tsx")`
        };
    }
    if (r.isSpreadAfter) {
        return {
            at: r.property,
            problem: "a spread after module in Client(...) could replace it: put module after the spread"
        };
    }
    let { value } = r.property;
    let n = B(value);
    if (n === undefined) {
        return {
            at: value,
            problem: `Client module must be a string literal, the surface module's path relative to this file (got ${K(value)})`
        };
    }
    return {
        at: value,
        spelled: n
    };
}
const Io = (e)=>e.type === "Identifier" && e.name === se || e.type === "Literal" && e.value === se || e.type === "MemberExpression" && !e.computed && e.property.type === "Identifier" && e.property.name === se;
const Pr = "h";
function Dr(node) {
    let { callee } = node;
    if (callee.type !== "Super" && Io(callee)) {
        return {
            argument: node.arguments[0]
        };
    }
    let [r, argument] = node.arguments;
    if (callee.type === "Identifier" && callee.name === Pr && r !== undefined && r.type !== "SpreadElement" && Io(r)) {
        return {
            argument
        };
    }
}
function Ro(e) {
    let o = [];
    XM(e, ({ node })=>{
        if (node.type !== "CallExpression") {
            return;
        }
        let t = Dr(node);
        if (t) {
            o.push(Rr(node, t.argument));
        }
    });
    return o.toSorted((r, t)=>t.at.start - r.at.start);
}
const component = "default";
function O(e) {
    let o = e.type === "Identifier";
    let r = e.type === "Literal";
    if (o) {
        return e.name;
    }
    if (r) {
        return String(e.value);
    }
    return "";
}
function Hr(e) {
    let o = [];
    for (let r of e.body){
        if (r.type === "ExportDefaultDeclaration") {
            o.push(component);
        } else if (r.type === "ExportAllDeclaration") {
            if (r.exported !== null && r.exported) {
                o.push(O(r.exported));
            }
        } else if (r.type === "ExportNamedDeclaration") {
            let { declaration } = r;
            if (declaration?.type === "FunctionDeclaration" || declaration?.type === "ClassDeclaration") {
                o.push(declaration.id.name);
            } else if (declaration?.type === "VariableDeclaration") {
                for (let { id } of declaration.declarations){
                    if (id.type === "Identifier") {
                        o.push(id.name);
                    }
                }
            }
            for (let s of r.specifiers){
                o.push(O(s.exported));
            }
        }
    }
    return o;
}
const Fr = (e)=>/^[A-Z][A-Za-z0-9]*$/.test(e) && /[a-z]/.test(e);
function qNs(e) {
    let o = Hr(e);
    if (o.includes(component)) {
        return {
            component
        };
    }
    let r = o.filter(Fr);
    let [t] = r;
    if (r.length === 1 && t !== undefined) {
        return {
            component: t
        };
    }
    return {
        problem: `exports ${r.length === 0 ? "no component" : r.join(", ")}: give it a default export or a single capitalized one (export function Board(props, surface) { ... })`
    };
}
function Po({ spelled, file, root }) {
    let n = `Client module "${spelled}"`;
    if (!Ego(spelled)) {
        return {
            problem: `${n} is not relative: spell the surface module's path from this file ("./board.tsx")`
        };
    }
    if (!vgo(spelled)) {
        return {
            problem: `${n} is not named like code: a surface module's path ends in ` + dEo
        };
    }
    let s = resolve(dirname(file), spelled);
    let p = relative(resolve(root), s);
    if (p === ".." || p.startsWith(`..${sep}`) || isAbsolute(p)) {
        return {
            problem: `${n} leaves the plugin's folder`
        };
    }
    return {
        module: p.split(sep).join("/")
    };
}
function $r(e) {
    try {
        return Tgo().parse(e, {
            ecmaVersion: "latest",
            sourceType: "module"
        });
    } catch  {
        return;
    }
}
function KNs(e, o, r) {
    if (!e.includes(se)) {
        return e;
    }
    let t = $r(e);
    let n = e;
    for (let s of t ? Ro(t) : []){
        if (!("spelled" in s)) {
            continue;
        }
        let p = Po({
            spelled: s.spelled,
            file: o,
            root: r
        });
        if ("module" in p) {
            n = n.slice(0, s.at.start) + _(p.module) + n.slice(s.at.end);
        }
    }
    return n;
}
function Br(e) {
    let o = new Set;
    for (let [r, t] of e.files){
        for (let n of Ro(t.scanned.program)){
            if ("problem" in n) {
                throw t.scanned.refuse(n.at, n.problem);
            }
            let s = Po({
                spelled: n.spelled,
                file: r,
                root: e.root
            });
            if ("problem" in s) {
                throw t.scanned.refuse(n.at, s.problem);
            }
            o.add(s.module);
        }
    }
    return [
        ...o
    ].sort();
}
function Fe(e) {
    switch(e.type){
        case "Identifier":
            return `the variable ${e.name}`;
        case "TemplateLiteral":
            return "a template string";
        case "CallExpression":
            return "a call";
        case "ConditionalExpression":
            return "a conditional";
        case "MemberExpression":
            return "a member read";
        case "BinaryExpression":
            return "a concatenation";
        case "SpreadElement":
            return "a spread";
        case "Literal":
            if ("regex" in e) {
                return "a RegExp";
            }
            return `the literal ${e.raw ?? String(e.value)}`;
        default:
            return `a ${e.type}`;
    }
}
function Gr(graph) {
    let o = false;
    for (let { scanned } of graph.files.values()){
        XM(scanned.program, (t)=>{
            if (t.node.type === "ImportExpression") {
                o = true;
            }
        }, ()=>o);
    }
    return o;
}
function I(e) {
    switch(e?.type){
        case "Identifier":
            return [
                e
            ];
        case "ArrayPattern":
            return e.elements.flatMap(I);
        case "ObjectPattern":
            return e.properties.flatMap((o)=>I(o.type === "Property" ? o.value : o));
        case "AssignmentPattern":
            return I(e.left);
        case "RestElement":
            return I(e.argument);
        default:
            return [];
    }
}
function Ur(program) {
    let o = [];
    let r = [];
    XM(program, ({ node })=>{
        switch(node.type){
            case "AssignmentExpression":
                o.push(...I(node.left));
                break;
            case "UpdateExpression":
                o.push(...I(node.argument));
                break;
            case "ForInStatement":
            case "ForOfStatement":
                o.push(...I(node.left));
                r.push(...I(node.left));
                break;
            default:
                break;
        }
    });
    return {
        byName: Map.groupBy(o, (t)=>t.name),
        inLoopHeads: Map.groupBy(r, (t)=>t.name)
    };
}
const pe = (node, parent, grandparent)=>parent !== undefined && (Bs(parent)?.(parent, node, grandparent) ?? false);
function Do(e, o) {
    let r = [];
    XM(e, ({ node, parent, grandparent })=>{
        if (node.type === "Identifier" && node.name === o && pe(node, parent, grandparent)) {
            r.push(node);
        }
    });
    return r;
}
const Ce = (node, parent, grandparent)=>!pe(node, parent, grandparent) && !(parent?.type === "MemberExpression" && parent.property === node && !parent.computed) && !Gs(node, parent) && parent?.type !== "LabeledStatement" && parent?.type !== "BreakStatement" && parent?.type !== "ContinueStatement" && parent?.type !== "ExportSpecifier" && parent?.type !== "ImportSpecifier" && parent?.type !== "ImportDefaultSpecifier" && parent?.type !== "ImportNamespaceSpecifier" && parent?.type !== "MetaProperty" && parent?.type !== "ExportAllDeclaration" && parent?.type !== "ImportAttribute";
function Vr(program) {
    let o = new Map;
    function r(t) {
        let n = t.type === "VariableDeclaration" && t.kind === "const";
        if (t.type === "FunctionDeclaration" && t.id !== null) {
            o.set(t.id.name, t);
        } else if (n) {
            for (let s of t.declarations){
                let { id, init } = s;
                if (id.type === "Identifier" && (init?.type === "FunctionExpression" || init?.type === "ArrowFunctionExpression")) {
                    o.set(id.name, init);
                }
            }
        }
    }
    for (let t of program.body){
        r(t);
        if (t.type === "ExportNamedDeclaration" || t.type === "ExportDefaultDeclaration") {
            let s = t.declaration;
            if (s !== null && s !== undefined) {
                r(s);
            }
        }
    }
    return o;
}
function Ho(e) {
    let o = [];
    let r = [];
    XM(e, ({ node, parent, grandparent })=>{
        if (node.type !== "Identifier") {
            return;
        }
        if (pe(node, parent, grandparent)) {
            o.push(node);
        } else if (Ce(node, parent, grandparent)) {
            r.push(node);
        }
    });
    return {
        declared: Map.groupBy(o, (t)=>t.name),
        read: Map.groupBy(r, (t)=>t.name)
    };
}
const Pp = 4294967295;
const Dp = Pp - 1;
const { floor, min } = Math;
function Cp(e, o, r, t) {
    let n = 0;
    let s = e == null ? 0 : e.length;
    if (s === 0) {
        return 0;
    }
    o = r(o);
    const p = o !== o;
    const i = o === null;
    const a = Nse(o);
    const f = o === undefined;
    while(n < s){
        const y = floor((n + s) / 2);
        const d = r(e[y]);
        const g = d !== undefined;
        const u = d === null;
        const h = d === d;
        const k = Nse(d);
        if (p) var j = t || h;
        else if (f) {
            j = h && (t || g);
        } else if (i) {
            j = h && g && (t || !u);
        } else if (a) {
            j = h && g && !u && (t || !k);
        } else if (u || k) {
            j = false;
        } else {
            j = t ? d <= o : d < o;
        }
        if (j) {
            n = y + 1;
        } else {
            s = y;
        }
    }
    return min(s, Dp);
}
const zr = Cp;
const Mp = 4294967295;
const $p = Mp >>> 1;
function _p(e, o, r) {
    let t = 0;
    let n = e == null ? t : e.length;
    if (typeof o === "number" && o === o && n <= $p) {
        while(t < n){
            const s = t + n >>> 1;
            const p = e[s];
            if (p !== null && !Nse(p) && (r ? p <= o : p < o)) {
                t = s + 1;
            } else {
                n = s;
            }
        }
        return n;
    }
    return zr(e, o, L8e, r);
}
const $e = _p;
function Lp(e, o) {
    return $e(e, o);
}
const Fo = Lp;
function Bp(e, o) {
    return $e(e, o, true);
}
const Wr = Bp;
function qr(e) {
    let o = [];
    let r = [];
    let t = [];
    e.filter((n)=>n.start < n.end).flatMap((span)=>[
            {
                place: span.start,
                span,
                isStart: true,
                rank: -span.end
            },
            {
                place: span.end,
                span,
                isStart: false,
                rank: -span.start
            }
        ]).toSorted((n, s)=>n.place - s.place || Number(n.isStart) - Number(s.isStart) || n.rank - s.rank).forEach((n)=>{
        if (n.isStart) {
            o.push(n.span);
        } else {
            o.splice(o.lastIndexOf(n.span), 1);
        }
        r.push(n.place);
        t.push(o.at(-1)?.declaration);
    });
    return (n)=>t[Wr(r, n) - 1];
}
function Xr(e, o) {
    switch(e.type){
        case "SequenceExpression":
        case "ChainExpression":
        case "ParenthesizedExpression":
        case "AwaitExpression":
            return true;
        case "LogicalExpression":
            return e.right === o;
        case "ConditionalExpression":
            return e.test !== o;
        case "UnaryExpression":
            return e.operator === "void";
        default:
            return false;
    }
}
function R(e) {
    if (e.type !== "Property") {
        return;
    }
    let { key } = e;
    let r = !e.computed && key.type === "Identifier";
    let t = !e.computed && key.type === "Literal";
    if (r) {
        return key.name;
    }
    if (t) {
        return String(key.value);
    }
}
const G = (e)=>e.properties.some((o)=>o.type === "Property" && (o.kind !== "init" || !o.shorthand && R(o) === "__proto__"));
const U = (e)=>e?.type === "FunctionDeclaration" || e?.type === "FunctionExpression" || e?.type === "ArrowFunctionExpression";
const Kr = (e, o)=>U(e) || e.type === "PropertyDefinition" && !e.static && e.value === o;
function Yr(e, o, r) {
    switch(e.type){
        case "ArrayExpression":
            return true;
        case "Property":
            return e.value === o;
        case "ObjectExpression":
            return o.type === "Property" && !r(e);
        default:
            return false;
    }
}
function Jr(e) {
    switch(e.type){
        case "Program":
        case "FunctionDeclaration":
        case "FunctionExpression":
        case "ArrowFunctionExpression":
        case "StaticBlock":
        case "BlockStatement":
        case "SwitchStatement":
        case "ForStatement":
        case "ForInStatement":
        case "ForOfStatement":
            return true;
        default:
            return false;
    }
}
function Qr(e) {
    switch(e.type){
        case "Property":
        case "ObjectPattern":
        case "ArrayPattern":
        case "RestElement":
        case "AssignmentPattern":
            return true;
        default:
            return false;
    }
}
function Zr(e, o) {
    switch(e.type){
        case "Program":
        case "StaticBlock":
            return true;
        case "BlockStatement":
            return U(o);
        default:
            return U(e);
    }
}
function V(parentOf, o) {
    let r = new Map;
    return (t)=>{
        let n = r.get(t);
        if (n !== undefined) {
            return n ?? undefined;
        }
        let s = t;
        let p = parentOf(t);
        let i = p === undefined ? null : o(p, s) ?? r.get(p);
        while(p !== undefined && i === undefined){
            s = p;
            p = parentOf(p);
            i = p === undefined ? null : o(p, s) ?? r.get(p);
        }
        for(let a = t; a !== undefined && a !== p; a = parentOf(a)){
            r.set(a, i ?? null);
        }
        return i ?? undefined;
    };
}
function Zp(parentOf) {
    let o = po(G);
    return {
        parentOf,
        functionOf: V(parentOf, (r)=>{
            if (U(r)) {
                return r;
            }
        }),
        lexicalScopeOf: V(parentOf, (r)=>{
            if (Jr(r)) {
                return r;
            }
        }),
        varScopeOf: V(parentOf, (r)=>{
            if (Zr(r, parentOf(r))) {
                return r;
            }
        }),
        declarerOf: V(parentOf, (r)=>{
            if (Qr(r)) {
                return undefined;
            }
            return r;
        }),
        deferrerOf: V(parentOf, (r, t)=>{
            if (Kr(r, t)) {
                return r;
            }
        }),
        endOf: V(parentOf, (r, t)=>{
            if (Xr(r, t)) {
                return undefined;
            }
            return {
                value: t,
                parent: r
            };
        }),
        heldAt: V(parentOf, (r, t)=>{
            if (Yr(r, t, o)) {
                return undefined;
            }
            return {
                value: t,
                parent: r
            };
        })
    };
}
function ei(e) {
    switch(e.type){
        case "Program":
        case "FunctionDeclaration":
        case "FunctionExpression":
        case "ArrowFunctionExpression":
        case "ClassDeclaration":
        case "ClassExpression":
        case "StaticBlock":
        case "BlockStatement":
        case "CatchClause":
        case "SwitchStatement":
        case "ForStatement":
        case "ForInStatement":
        case "ForOfStatement":
            return true;
        default:
            return false;
    }
}
const et = (e)=>{
    if (typeof e === "string" || ei(e)) {
        return e;
    }
    return "unplaced";
};
function we(e, { parentOf, declarerOf, lexicalScopeOf, varScopeOf }) {
    let s = declarerOf(e);
    switch(s?.type){
        case "VariableDeclarator":
            {
                let p = parentOf(s);
                return (p?.type === "VariableDeclaration" && p.kind !== "var" ? lexicalScopeOf(s) : varScopeOf(s)) ?? "unplaced";
            }
        case "FunctionDeclaration":
        case "ClassDeclaration":
            if (s.id === e) {
                return lexicalScopeOf(s) ?? "unplaced";
            }
            return s;
        case "FunctionExpression":
        case "ArrowFunctionExpression":
        case "ClassExpression":
        case "CatchClause":
            return s;
        case "ImportSpecifier":
        case "ImportDefaultSpecifier":
        case "ImportNamespaceSpecifier":
            return varScopeOf(s) ?? "unplaced";
        case "AssignmentExpression":
        case "ForInStatement":
        case "ForOfStatement":
            return "nothing";
        default:
            return "unplaced";
    }
}
function ot(e, parentOf, r) {
    return [
        ...e
    ].flatMap(([t, declaration])=>{
        if (typeof t === "string") {
            return [];
        }
        if (t.type === "SwitchStatement") {
            let { discriminant } = t;
            return [
                {
                    start: t.start,
                    end: discriminant.start,
                    declaration
                },
                {
                    start: discriminant.end,
                    end: t.end,
                    declaration
                }
            ];
        }
        let s = parentOf(t);
        let i = r === "engine" && t.type === "BlockStatement" && s !== undefined && U(s) && !e.has(s) ? s : t;
        return [
            {
                start: i.start,
                end: i.end,
                declaration
            }
        ];
    });
}
function Co(declared, o, r) {
    let t = new Map;
    let n = new Map;
    let s = new Map;
    let { parentOf } = o;
    return (i)=>{
        let a = s.get(i);
        if (a !== undefined) {
            return a ?? undefined;
        }
        let f = t.get(i.name) ?? new Map((declared.get(i.name) ?? []).map((u)=>[
                et(we(u, o)),
                u
            ]).filter(([u])=>u !== "nothing" && (typeof u === "string" || u.type !== "Program")));
        t.set(i.name, f);
        if (parentOf(i) === undefined) {
            return i;
        }
        if (f.size === 0) {
            return;
        }
        let y = f.get("unplaced");
        if (y !== undefined) {
            return y;
        }
        let d = n.get(i.name) ?? qr(ot(f, parentOf, r));
        n.set(i.name, d);
        let g = d(i.start);
        s.set(i, g ?? null);
        return g;
    };
}
function li(program, o) {
    let { declared, read } = Ho(program);
    let n = Ur(program);
    return {
        functions: Vr(program),
        assigned: new Set(n.byName.keys()),
        assignedAt: n.byName,
        loopAssigned: n.inLoopHeads,
        declared,
        read,
        shadowOf: Co(declared, o, "engine"),
        writtenShadowOf: Co(declared, o, "written")
    };
}
function z(e, o, r = "all") {
    let t = [];
    XM(e, ({ node, parent, grandparent })=>{
        if (node.type === "Identifier" && node.name === o && Ce(node, parent, grandparent)) {
            t.push(node);
        }
    }, r === "own" ? (s)=>s !== e && (s.type === "FunctionExpression" || s.type === "FunctionDeclaration") : undefined);
    return t;
}
function rt(program, o, r) {
    let t = new Set;
    for (let n of program.body){
        if (n.type === "ExportDefaultDeclaration") {
            let { declaration: declaration_1 } = n;
            if (declaration_1 === o || declaration_1.type === "Identifier" && r !== undefined && declaration_1.name === r) {
                t.add("default");
            }
            continue;
        }
        if (n.type !== "ExportNamedDeclaration") {
            continue;
        }
        let { declaration, source, specifiers } = n;
        if (declaration?.type === "FunctionDeclaration" && declaration === o) {
            t.add(declaration.id.name);
        }
        if (declaration?.type === "VariableDeclaration") {
            for (let a of declaration.declarations){
                if (a.init === o && a.id.type === "Identifier") {
                    t.add(a.id.name);
                }
            }
        }
        if (source !== null && source !== undefined) {
            continue;
        }
        for (let a of specifiers){
            if (r !== undefined && O(a.local) === r) {
                t.add(O(a.exported));
            }
        }
    }
    return t;
}
function tt(e, o) {
    if (e.type === "Identifier") {
        return e.name === o;
    }
    return Do(e, o).length > 0;
}
const nt = 4;
function Be(e, name) {
    for (let r of e.program.body){
        let n = r.type === "ExportNamedDeclaration" ? r.declaration : r;
        if (!(n?.type === "VariableDeclaration" && n.kind === "const")) {
            continue;
        }
        for (let p of n.declarations){
            if (p.id.type === "Identifier" && p.id.name === name && p.init) {
                return p.init;
            }
        }
    }
}
function Ge(e, o) {
    switch(e.type){
        case "VariableDeclaration":
            return e.declarations.some((r)=>tt(r.id, o));
        case "FunctionDeclaration":
        case "ClassDeclaration":
            return e.id?.name === o;
        case "ImportDeclaration":
            return e.specifiers.some((r)=>r.local.name === o);
        case "ExportNamedDeclaration":
        case "ExportDefaultDeclaration":
            return e.declaration !== null && e.declaration !== undefined && Ge(e.declaration, o);
        default:
            return false;
    }
}
const st = /^(?!(?:true|false|null|undefined|NaN|Infinity)$)(?![-\d])[\w:@*!$#-]+$/;
const pt = 16;
const Ue = 120;
function Ve(e) {
    let o = e.slice(0, Ue);
    let r = e.length - o.length;
    let t = JSON.stringify(o).replace(/[^\x20-\x7e]/g, (n)=>`\\u${n.charCodeAt(0).toString(pt).padStart(nt, "0")}`).replace(/ {2,}/g, (n)=>` ${n.slice(1).replaceAll(" ", "\\u0020")}`);
    if (r === 0) {
        return t;
    }
    return `${t}[+${r} chars]`;
}
function P(e) {
    if (e.length <= Ue && st.test(e)) {
        return e;
    }
    return Ve(e);
}
const N = "?";
function We(e, o, r) {
    let t = e.properties.map((s)=>R(s));
    let n = t.lastIndexOf(undefined);
    return e.properties.flatMap((s, p)=>{
        let i = t[p];
        let a = s.type !== "Property";
        let f = i !== undefined && t.includes(i, p + 1);
        let y = i !== undefined && p < n;
        let d = i === undefined ? N : P(i);
        let g = `${d}=${N}`;
        let u = a ? `...${N}` : `${d}${it(s.value, o, r)}`;
        if (f) {
            return [];
        }
        return [
            y ? g : u
        ];
    }).join(", ");
}
function ie(e, o) {
    let r = e.shadowOf(o);
    if (r === undefined) {
        return {
            kind: "free"
        };
    }
    let t = e.parentOf(r);
    let n = t && e.parentOf(t);
    let loop = n && e.parentOf(n);
    if (t?.type === "VariableDeclarator" && t.id === r && n?.type === "VariableDeclaration" && n.kind === "const" && n.declarations.length === 1 && loop?.type === "ForOfStatement" && loop.left === n && o.start >= loop.body.start && o.start < loop.body.end) {
        return {
            kind: "loop",
            loop
        };
    }
    return {
        kind: "shadowed"
    };
}
function at(e, o) {
    let t = ie(e, o).kind === "free" ? Be(e, o.name) : undefined;
    if (t?.type === "Literal" && t.regex === undefined && typeof t.value !== "bigint" || t?.type === "TemplateLiteral" && t.expressions.length === 0 || t?.type === "Identifier") {
        return t;
    }
}
function ft(e, o) {
    let t = ie(e, o).kind === "free" ? Be(e, o.name) : undefined;
    if ((t?.type === "ObjectExpression" || t?.type === "ArrayExpression" || t?.type === "Literal" && t.regex !== undefined) && e.isSealed(o.name)) {
        return t;
    }
}
const ae = (e, o)=>at(e, o) ?? ft(e, o);
function qe(e, o, r) {
    let t = e;
    let seen = r;
    while(t.type === "Identifier" && !seen.has(t.name)){
        let i = ae(o, t);
        if (i === undefined) {
            break;
        }
        seen = new Set([
            ...seen,
            t.name
        ]);
        t = i;
    }
    let s = t.type === "ObjectExpression" ? t : undefined;
    if (s !== undefined && !G(s)) {
        return {
            node: s,
            seen
        };
    }
}
function Mo(e, o) {
    let [r, ...t] = e.node.properties;
    let n = t.length === 0 && r?.type === "Property";
    let s = n ? R(r) : undefined;
    let p = n ? qe(r.value, o, e.seen) : undefined;
    if (s !== undefined && p !== undefined) {
        return `.${P(s)}${Mo(p, o)}`;
    }
    return ` has {${We(e.node, o, e.seen)}}`;
}
function mt(right) {
    let o = [];
    for (let r of right.elements){
        if (r === null) {
            return;
        }
        if (r.type === "Literal") {
            let { value } = r;
            if (!(typeof value === "string" || typeof value === "number" || typeof value === "boolean")) {
                return;
            }
            o.push(typeof value === "string" ? P(value) : String(value));
            continue;
        }
        let n = r.type === "TemplateLiteral" && r.expressions.length === 0 ? r.quasis[0]?.value.cooked : undefined;
        if (n === undefined || n === null) {
            return;
        }
        o.push(P(n));
    }
    return D(o);
}
function lt(e, { right }, name) {
    if (right.type === "ArrayExpression" && !e.program.body.some((s)=>s.type === "ImportDeclaration" && Ge(s, name))) {
        return mt(right)?.join("|");
    }
}
function dt(e, o, r) {
    if (r.has(e.name)) {
        return N;
    }
    let t = ie(o, e);
    let n = t.kind === "loop";
    let s = n ? lt(o, t.loop, e.name) : undefined;
    if (n) {
        return s ?? N;
    }
    let p = ae(o, e);
    if (p === undefined) {
        return N;
    }
    return Y(p, o, new Set([
        ...r,
        e.name
    ]));
}
const ct = (pattern, flags)=>`/${Ve(pattern)}/${flags}`;
function Y(e, o, r = new Set) {
    switch(e.type){
        case "Literal":
            {
                let { regex, value } = e;
                let s = typeof value === "string";
                let p = typeof value === "bigint";
                let i = s ? P(value) : String(value);
                if (regex) {
                    return ct(regex.pattern, regex.flags);
                }
                if (p) {
                    return N;
                }
                return i;
            }
        case "TemplateLiteral":
            {
                let t = e.quasis[0]?.value.cooked;
                if (e.expressions.length === 0 && t !== undefined && t !== null) {
                    return P(t);
                }
                return N;
            }
        case "ArrayExpression":
            return e.elements.map((t)=>{
                if (t === null) {
                    return "";
                }
                return Y(t, o, r);
            }).join("|");
        case "ObjectExpression":
            if (G(e)) {
                return N;
            }
            return `{${We(e, o, r)}}`;
        case "Identifier":
            return dt(e, o, r);
        default:
            return N;
    }
}
function it(e, o, r) {
    let t = qe(e, o, r);
    if (t === undefined) {
        return `=${Y(e, o, r)}`;
    }
    return Mo(t, o);
}
const _i = (event, matcher, r)=>{
    if (matcher === undefined) {
        return event;
    }
    return `${event}${Y(matcher, r)}`;
};
function Xe(e, o, r = new Set) {
    if (e.type === "Literal") {
        if (e.regex) {
            return e.value ?? new RegExp("");
        }
        return e.value;
    }
    if (e.type === "ArrayExpression") {
        return e.elements.map((n)=>{
            if (n) {
                return Xe(n, o, r);
            }
            return new RegExp("");
        });
    }
    if (e.type === "ObjectExpression") {
        if (G(e)) {
            return new RegExp("");
        }
        let n = [];
        for (let s of e.properties){
            let p = R(s);
            if (s.type !== "Property" || p === undefined) {
                return new RegExp("");
            }
            n.push([
                p,
                Xe(s.value, o, r)
            ]);
        }
        return Object.fromEntries(n);
    }
    if (e.type !== "Identifier" || r.has(e.name)) {
        return new RegExp("");
    }
    let t = ae(o, e);
    if (!t) {
        return new RegExp("");
    }
    return Xe(t, o, new Set([
        ...r,
        e.name
    ]));
}
function _o(e, o) {
    if (e.type === "ExportDefaultDeclaration") {
        let { declaration: declaration_1 } = e;
        return declaration_1.type === "Identifier" && declaration_1.name === o;
    }
    if (e.type !== "ExportNamedDeclaration") {
        return false;
    }
    let { declaration, source, specifiers } = e;
    let s = declaration !== null && declaration !== undefined && Ge(declaration, o);
    let p = (source === null || source === undefined) && specifiers.some((i)=>O(i.local) === o);
    return s || p;
}
const Ke = (program, o)=>program.body.some((r)=>_o(r, o));
function xt(e, o) {
    let r = e.holderFiles.get(o);
    if (r === undefined) {
        return;
    }
    let { scanned } = r;
    let n = [
        ...scanned.names.functions
    ].find(([, a])=>a === o)?.[0];
    let s = n === undefined ? [] : scanned.names.read.get(n) ?? [];
    let p = rt(scanned.program, o, n);
    let i = [];
    for (let reference of s){
        if (scanned.parentOf(reference)?.type !== "ExportDefaultDeclaration") {
            i.push({
                reference,
                scanned
            });
        }
    }
    for (let a of e.graph.files.values()){
        for (let f of a.scanned.program.body){
            let d = f.type === "ImportDeclaration" || f.type === "ExportAllDeclaration" || f.type === "ExportNamedDeclaration" ? f.source : undefined;
            if (!(p.size > 0 && d !== null && d !== undefined && a.links.get(String(d.value)) === scanned.file)) {
                continue;
            }
            if (f.type === "ExportAllDeclaration" || f.type === "ExportNamedDeclaration" && f.specifiers.some((j)=>p.has(O(j.local))) || f.type === "ImportDeclaration" && f.specifiers.some((j)=>j.type === "ImportNamespaceSpecifier")) {
                return;
            }
            let k = f.type === "ImportDeclaration" ? f.specifiers : [];
            for (let j of k){
                let b = j.type === "ImportSpecifier" ? O(j.imported) : "default";
                let A = j.local.name;
                if (!p.has(b)) {
                    continue;
                }
                if (Ke(a.scanned.program, A)) {
                    return;
                }
                for (let reference of a.scanned.names.read.get(A) ?? []){
                    i.push({
                        reference,
                        scanned: a.scanned
                    });
                }
            }
        }
    }
    return i;
}
function yt(e) {
    let o = new Map;
    let r = new Map;
    let t = Map.groupBy(e.holderCalls, (i)=>i.call);
    let n;
    function s({ reference, scanned }, f, y) {
        let d = scanned.parentOf(reference);
        return (d?.type === "CallExpression" && d.callee === reference ? t.get(d) ?? [] : []).some((u)=>u.callee === f && u.position === y && p(u.caller, u.callerPosition));
    }
    function p(i, a) {
        n ??= Gr(e.graph);
        let f = o.get(i)?.get(a);
        let y = r.get(i)?.has(a) === true;
        if (n || y || f !== undefined) {
            return f ?? false;
        }
        r.set(i, (r.get(i) ?? new Set).add(a));
        let g = i.type === "FunctionExpression" && i.id !== null && i.id !== undefined ? undefined : xt(e, i);
        let u = i === e.register && a === 0;
        let h = g !== undefined && (g.length > 0 || u) && g.every((k)=>s(k, i, a));
        o.set(i, (o.get(i) ?? new Map).set(a, h));
        r.get(i)?.delete(a);
        return h;
    }
    return p;
}
function Ye(e, linked) {
    let r = linked.scanned.parentOf(e);
    return r?.type === "MemberExpression" && r.object === e && !r.computed && r.property.type === "Identifier" && r.property.name === "catch";
}
function gt(linked, o) {
    let t = o.type === "Identifier" ? linked.scanned.names.functions.get(o.name) : o;
    if (!(t?.type === "FunctionExpression" || t?.type === "ArrowFunctionExpression" || t?.type === "FunctionDeclaration")) {
        return true;
    }
    let [, , s] = t.params;
    return s !== undefined && (s.type !== "Identifier" || z(t, s.name).length > 0) || z(t, "eval").length > 0;
}
const Je = (e)=>e.type === "SpreadElement" || e.computed || e.kind !== "init";
const me = (e, o)=>e.type === "Property" && (e.key.type === "Identifier" && e.key.name === o || e.key.type === "Literal" && e.key.value === o);
function ht(e) {
    switch(e.type){
        case "Literal":
            {
                let o = e.value;
                if (typeof o === "string") {
                    return [
                        o
                    ];
                }
                return undefined;
            }
        case "ArrayExpression":
            {
                let o = e.elements.map((t)=>{
                    let n = t?.type === "Literal" ? t.value : undefined;
                    if (typeof n === "string") {
                        return n;
                    }
                });
                if (o.every((t)=>t !== undefined)) {
                    return o.filter((t)=>t !== undefined);
                }
                return undefined;
            }
        default:
            return;
    }
}
function J(e) {
    switch(e?.type){
        case "ObjectExpression":
            {
                let o = e.properties.filter((s)=>me(s, "command"));
                let r = e.properties.some(Je);
                let [t] = o;
                if (!r && o.length === 1 && t?.type === "Property") {
                    return ht(t.value);
                }
                return undefined;
            }
        case "ArrayExpression":
            {
                let o = e.elements.map((t)=>{
                    if (t === null || t.type === "SpreadElement") {
                        return undefined;
                    }
                    return J(t);
                });
                if (o.every((t)=>t !== undefined)) {
                    return o.flatMap((t)=>t ?? []);
                }
                return undefined;
            }
        default:
            return;
    }
}
function jt(e, o, registeredCommands) {
    let { parentOf } = o.linked.scanned;
    let n = Ye(e, o.linked) ? parentOf(e) : undefined;
    let s = n === undefined ? undefined : parentOf(n);
    let p = [
        ...e.arguments.slice(-1),
        ...s?.type === "CallExpression" ? s.arguments : []
    ];
    let i = J(o.matcher) ?? [];
    return o.event === "command.run" && !p.some((a)=>gt(o.linked, a)) && i.length > 0 && i.every((a)=>registeredCommands.has(a));
}
function kt(e, scanned, r) {
    let t = scanned.climbs.heldAt(r);
    if (t === undefined) {
        return;
    }
    let { value, parent } = t;
    if (parent.type === "VariableDeclarator" && parent.init === value) {
        let { id } = parent;
        let y = scanned.parentOf(parent);
        let d = y && scanned.parentOf(y);
        if (id.type === "Identifier" && y?.type === "VariableDeclaration" && y.kind === "const" && (d?.type === "Program" || d?.type === "ExportNamedDeclaration")) {
            return {
                kind: "const",
                name: id.name
            };
        }
        return undefined;
    }
    let held = parent.type === "CallExpression" ? e.registrations.get(parent) : undefined;
    if (held !== undefined && held.matcher === value) {
        return {
            kind: "matcher",
            held
        };
    }
}
function Et(e, o) {
    let r = new Map;
    let t = new Map;
    function n(s, p) {
        let i = r.get(s)?.get(p);
        if (t.get(s)?.has(p) === true || i !== undefined) {
            return i ?? false;
        }
        t.set(s, (t.get(s) ?? new Set).add(p));
        let { scanned } = s;
        let y = scanned.names.read.get(p) ?? [];
        let d = !Ke(scanned.program, p) && y.length > 0 && y.every((g)=>{
            let u = kt(e, scanned, g);
            switch(u?.kind){
                case "matcher":
                    return o(u.held.holder, u.held.position);
                case "const":
                    return n(s, u.name);
                case undefined:
                    return false;
            }
        });
        r.set(s, (r.get(s) ?? new Map).set(p, d));
        t.get(s)?.delete(p);
        return d;
    }
    return n;
}
function bt(e) {
    let o = Et(e, yt(e));
    let r = new Map;
    let registrations = [];
    let renderMatchers = [];
    let catchReads = [];
    for (let [p, i] of e.registrations){
        let { event, matcher, linked } = i;
        let { program, parentOf, names } = linked.scanned;
        let h = r.get(linked) ?? {
            program,
            parentOf,
            shadowOf: names.shadowOf,
            isSealed: (E)=>o(linked, E)
        };
        r.set(linked, h);
        let registration = _i(event, matcher, h);
        let j = event === "command.run";
        registrations.push(registration);
        catchReads.push({
            registration,
            pattern: event,
            hasCatch: Ye(p, linked),
            isOwnCommand: jt(p, i, e.registeredCommands),
            commands: (j ? J(matcher) : undefined) ?? []
        });
        if (event === "ui.render" && matcher !== undefined) {
            renderMatchers.push({
                registration,
                matcher: Xe(matcher, h)
            });
        }
    }
    return {
        registrations,
        renderMatchers,
        catchReads
    };
}
const wt = "anthropic";
const le = [
    "anthropic",
    "collector"
];
const aa = (e)=>le.includes(e);
const F = ({ onName, event })=>`"to" is a string literal, or a list of them, from ${le.map((r)=>`"${r}"`).join(", ")}${`, written in the call, so the streams a module's hooks stand on can be listed: ${onName}("${event}", { to: "collector" }, hook)`}`;
function St(e, o) {
    let { onName, event, refuse } = o;
    return (e.type === "ArrayExpression" ? e.elements : [
        e
    ]).map((s)=>{
        if (s === null) {
            throw refuse(e, `${onName}("${event}") names its destinations as a list with a hole; ${F(o)}`);
        }
        let p = s.type === "Literal" ? s.value : undefined;
        if (typeof p !== "string") {
            throw refuse(s, `${onName}("${event}") names its destination as ${Fe(s)}; ${F(o)}`);
        }
        if (!aa(p)) {
            throw refuse(s, `${onName}("${event}") names the destination "${p}", which is no telemetry stream; ${F(o)}`);
        }
        return p;
    });
}
const la = (e, o)=>(r, importer, { known, reals })=>uws({
            spelled: r,
            importer,
            root: e,
            pluginName: o
        }, known, reals);
const Qe = (e, o)=>{
    if (o === "env.get") {
        return e.envReads;
    }
    return e.envWrites;
};
function Ze({ graph, pluginName }, r) {
    let t = graph.files.get(r);
    if (t === undefined) {
        throw new Me(`${pluginName}: ${r} was not linked`);
    }
    return t;
}
const SYMBOL_CLAUDE_CODE_STATE_ATOM = Symbol.for("claude-code.state.atom");
function Bo(e) {
    if (typeof e !== "object" || e === null || Object.isFrozen(e)) {
        return e;
    }
    for (let o of Object.values(e)){
        Bo(o);
    }
    return Object.freeze(e);
}
function Q(e, id = e.id) {
    let { plugin, key } = e;
    return Object.freeze(id === undefined ? {
        plugin,
        key
    } : {
        plugin,
        key,
        id
    });
}
const ha = (e, o, r)=>Object.freeze({
        [SYMBOL_CLAUDE_CODE_STATE_ATOM]: true,
        ref: Q(e),
        initial: Bo(o),
        ...r?.shape !== undefined && {
            shape: r.shape
        }
    });
function eo(e, o) {
    if (e.shape === undefined) {
        if (o === undefined) {
            return e.initial;
        }
        return o;
    }
    let r = o;
    if (r?.shape === e.shape && r.value !== undefined) {
        return r.value;
    }
    return e.initial;
}
const SYMBOL_CLAUDE_CODE_STATE_DERIVED = Symbol.for("claude-code.state.derived");
const oo = (e, o)=>typeof e === "object" && e !== null && e[o] !== undefined;
const H = (e)=>oo(e, SYMBOL_CLAUDE_CODE_STATE_ATOM);
const ro = (e)=>oo(e, SYMBOL_CLAUDE_CODE_STATE_DERIVED);
const va = (e, compute)=>{
    let r = {};
    return Object.freeze({
        [SYMBOL_CLAUDE_CODE_STATE_DERIVED]: r,
        sources: Object.freeze(e.map((t)=>{
            if (H(t) || ro(t)) {
                return t;
            }
            return Q(t);
        })),
        compute
    });
};
const Oa = (e, o)=>{
    if (H(e)) {
        return Object.freeze({
            ...e,
            [SYMBOL_CLAUDE_CODE_STATE_ATOM]: true,
            ref: Q(e.ref, o.requestId)
        });
    }
    return Q(e, o.requestId);
};
async function Go(e, o) {
    if (H(o)) {
        let p = await e.get(o.ref);
        return {
            value: eo(o, p.value),
            versions: [
                p.version
            ]
        };
    }
    if (!ro(o)) {
        let p = await e.get(o);
        return {
            value: p.value,
            versions: [
                p.version
            ]
        };
    }
    let r = await Promise.all(o.sources.map((p)=>Go(e, p)));
    let versions = r.flatMap((p)=>p.versions);
    let n = versions.join(",");
    let s = o[SYMBOL_CLAUDE_CODE_STATE_DERIVED];
    if (s?.versions !== n && s !== undefined) {
        s.value = o.compute(...r.map((p)=>p.value));
        s.versions = n;
    }
    return {
        value: s?.value,
        versions
    };
}
const Da = async (e, o)=>(await Go(e.state, o)).value;
const vt = (e, o)=>{
    if (e.shape === undefined) {
        return o;
    }
    return {
        shape: e.shape,
        value: o
    };
};
const Nt = 64;
const Ma = async (e, o, r)=>{
    let e_state = e.state;
    let n = H(o) ? o.ref : o;
    for(let s = 0; s < Nt; s += 1){
        let p = await e_state.get(n);
        let i = H(o) ? eo(o, p.value) : p.value;
        let a = r(i);
        let f = H(o) ? vt(o, a) : a;
        if ((await e_state.set(n, f, {
            ifVersion: p.version
        })).isSet) {
            return a;
        }
    }
    throw Error("update: the value was written by another every time it was read, up to the bound on tries; nothing was written");
};
const La = [
    "atom",
    "derive",
    "memberOf",
    "read",
    "update"
];
const Tt = Le("/$bunfs/root/state-library.js-wy8y4843.txt");
const ZSr = Tt;
function Z(scanned, o) {
    let { callee } = o;
    if (callee.type !== "Identifier" || o.optional) {
        return;
    }
    let t = scanned.imports.get(callee.name);
    let n = La.find((p)=>p === t?.imported);
    if (t?.specifier === slt && n !== undefined && scanned.names.shadowOf(callee) === undefined) {
        return n;
    }
}
function Ot(e) {
    let [o] = e.arguments;
    let r = o?.type === "ObjectExpression" ? o.properties : [];
    let t = r.some(Je);
    let [n, s] = r.filter((f)=>me(f, "name"));
    let i = !t && s === undefined && n?.type === "Property" ? n.value : undefined;
    let a = i?.type === "Literal" ? i.value : undefined;
    if (typeof a === "string") {
        return a;
    }
}
function to(e, o) {
    let r = Ot(o);
    if (r !== undefined) {
        e.registeredCommands.add(r);
    }
}
function It(program) {
    let o = new Map;
    for (let r of program.body){
        let t = r.type === "ExportDefaultDeclaration";
        let n = r.type === "ExportNamedDeclaration";
        let s = n ? r.declaration : undefined;
        let p = s?.type === "VariableDeclaration";
        let i = [
            ...t ? [
                r.declaration
            ] : [],
            ...p ? s.declarations.flatMap((a)=>I(a.id)) : [
                s?.id
            ],
            ...n ? r.specifiers.map((a)=>a.local) : []
        ];
        for (let a of i){
            if (a?.type === "Identifier" && !o.has(a.name) && _o(r, a.name)) {
                o.set(a.name, r);
            }
        }
    }
    return o;
}
function no(use, parentOf, r) {
    let t = parentOf(use);
    if (t?.type === "CallExpression") {
        let n = r.library.get(t);
        let s = n === "read" || n === "update";
        let p = n === "atom" || n === "memberOf" || r.state.has(t);
        return t.arguments[s ? 1 : 0] === use && (s || p);
    }
    if (t?.type === "ArrayExpression") {
        let n = parentOf(t);
        return n?.type === "CallExpression" && r.library.get(n) === "derive" && n.arguments[0] === t;
    }
    return t?.type === "SpreadElement" && t.argument === use && parentOf(t)?.type === "ObjectExpression";
}
const Rt = ({ placed, starts }, scope)=>placed.slice(Fo(starts, scope.start), Fo(starts, scope.end)).toSorted((t, n)=>t.at - n.at);
function Pt({ read, binding }, { consts, names, parentOf, refuse }, p) {
    let { scope } = binding;
    let { name } = read;
    let f = names.writtenShadowOf(read);
    let y = scope.type === "Program" ? consts.exporting.get(name) : undefined;
    if (y !== undefined) {
        return y;
    }
    let d = (consts.counted(name).owned.get(f) ?? []).filter((j)=>j.use.start >= scope.start && j.use.start < scope.end);
    if (!d.some((j)=>j.use === read)) {
        throw refuse(read, `the scan lost track of this read of "${name}" and cannot show that every use of the const is a plain read. This is a fault of the scan, not of the module, which is refused rather than passed`);
    }
    let u = d.find((j)=>!no(j.use, parentOf, p));
    let h = Rt(consts.apart(name)(p), scope).at(0);
    if (h !== undefined && (u === undefined || h.at < u.at)) {
        return h.use;
    }
    return u?.use;
}
function Ja(e) {
    let o = new Set;
    let r = {
        state: e.stateCalls,
        library: e.libraryCalls
    };
    for (let { followed, spelling, scanned } of e.stateConsts){
        let { init } = followed.binding;
        if (o.has(init)) {
            continue;
        }
        o.add(init);
        let i = Pt(followed, scanned, r);
        if (i !== undefined) {
            throw scanned.refuse(i, `the const ${followed.read.name}, read as the reference of a $.${spelling} call, is also written through, handed on or exported here, and const does not freeze: what it holds at the call could not be listed. Use it only as the reference of $.state calls, as a source of the state library's functions imported from "claude-code", and in a spread into an object literal ({ ...${followed.read.name}, id }), or write the reference at the call`);
        }
    }
}
const Uo = (e, names)=>names.writtenShadowOf(e) === undefined || names.writtenShadowOf(e) !== names.shadowOf(e);
const ye = (cause, at_1)=>{
    if (at_1 === undefined) {
        return undefined;
    }
    return {
        at: at_1,
        cause
    };
};
const ef = Object.freeze({
    declared: "is declared here too, so the value it names cannot be listed. Declare it once",
    assigned: "is assigned here, so the value it names cannot be listed. Leave it unassigned, or write the reference at the call",
    doubted: "may be assigned here, where the engine can bind the name apart from the text, so the value it names cannot be listed. Rename one of the two",
    looped: "is spelled in a loop's head here, and the engine can write such a target past a nearer name of that spelling, so the value it names cannot be listed. Rename one of the two",
    early: "is read here as the file loads, above its declaration, where it is still undefined, so the value it names cannot be listed. Declare it above this read"
});
function Dt(e, { names, climbs }) {
    let { name } = e;
    let n = (names.declared.get(name) ?? []).filter((p)=>{
        let i = we(p, climbs);
        return typeof i !== "string" && i.type === "Program";
    });
    let s = (names.assignedAt.get(name) ?? []).filter((p)=>Uo(p, names));
    return ye("declared", n.includes(e) ? n[1] : e) ?? ye("assigned", s.find((p)=>names.writtenShadowOf(p) === undefined)) ?? ye("doubted", s[0]) ?? ye("looped", names.loopAssigned.get(name)?.[0]) ?? ye("early", names.read.get(name)?.find((p)=>p.start < e.start && climbs.deferrerOf(p) === undefined && Uo(p, names)));
}
function so(e, { consts, names, climbs, program, refuse }) {
    let p = names.shadowOf(e);
    if (p !== names.writtenShadowOf(e)) {
        throw refuse(e, `"${e.name}" is read among the parameters of a function whose body declares that name again: the engine may bind such a read apart from the text, so the value it names cannot be listed. Rename one of the two`);
    }
    let scope = p === undefined ? program : we(p, climbs);
    if (typeof scope === "string") {
        return;
    }
    let a = consts.inits(scope).get(e.name);
    let f = a?.isVar ? consts.rebound(a.id) : undefined;
    if (f !== undefined) {
        throw refuse(f.at, `the var ${e.name}, read for a $.state reference, ` + ef[f.cause]);
    }
    if (a === undefined) {
        return undefined;
    }
    return {
        init: a.init,
        scope
    };
}
function Ft(e) {
    if (e.type === "Program" || e.type === "BlockStatement" || e.type === "StaticBlock") {
        return e.body;
    }
    return [];
}
function Ct(e) {
    let o = new Map;
    for (let r of Ft(e)){
        let t = r.type === "ExportNamedDeclaration";
        let n = t ? r.declaration : r;
        let isVar = n?.type === "VariableDeclaration" && n.kind === "var" && e.type === "Program" && !t;
        if (!(n?.type === "VariableDeclaration" && (n.kind === "const" || isVar))) {
            continue;
        }
        for (let { id, init } of n.declarations){
            if (id.type === "Identifier" && init) {
                o.set(id.name, {
                    id,
                    init,
                    isVar
                });
            }
        }
    }
    return o;
}
function io(read, o, r = new Set) {
    if (read.type === "Identifier") {
        let binding = r.has(read.name) ? undefined : so(read, o);
        let s = binding === undefined ? undefined : io(binding.init, o, new Set([
            ...r,
            read.name
        ]));
        if (binding !== undefined && s !== undefined) {
            return {
                ...s,
                consts: [
                    {
                        read,
                        binding
                    },
                    ...s.consts
                ]
            };
        }
        return undefined;
    }
    if (read.type !== "ObjectExpression") {
        return;
    }
    let t = {
        consts: []
    };
    for (let n of read.properties){
        if (n.type === "SpreadElement") {
            let p = io(n.argument, o, r);
            if (p === undefined) {
                return;
            }
            t = {
                ...t,
                ...p,
                consts: [
                    ...t.consts,
                    ...p.consts
                ]
            };
            continue;
        }
        let s = R(n);
        if (s === undefined || n.kind !== "init") {
            return;
        }
        if (s === "plugin" || s === "key") {
            let p = B(n.value);
            if (p === undefined) {
                return;
            }
            t = {
                ...t,
                [s]: p
            };
        }
    }
    return t;
}
function ee(e, o, r = new Set) {
    if (e.type === "Identifier" && r.has(e.name)) {
        return;
    }
    let n = e.type === "Identifier" ? so(e, o.scanned) : undefined;
    if (n !== undefined && n.init.type !== "ObjectExpression" && e.type === "Identifier") {
        return ee(n.init, o, new Set([
            ...r,
            e.name
        ]));
    }
    if (e.type !== "CallExpression") {
        let d = io(e, o.scanned);
        if (d === undefined) {
            return undefined;
        }
        return [
            d
        ];
    }
    let p = o.libraryHelper(e);
    let [i] = e.arguments;
    if ((p === "atom" || p === "memberOf") && i !== undefined && i.type !== "SpreadElement") {
        return ee(i, o, r);
    }
    if (p !== "derive" || i?.type !== "ArrayExpression") {
        return;
    }
    let f = i.elements.map((d)=>{
        if (d !== null && d.type !== "SpreadElement") {
            return ee(d, o, r);
        }
    });
    if (f.every((d)=>d !== undefined)) {
        return f.flat();
    }
}
function ff(e) {
    for (let { scanned } of e.graph.files.values()){
        XM(scanned.program, ({ node })=>{
            let t = node.type === "CallExpression";
            let n = t ? Z(scanned, node) : undefined;
            if (n === undefined || !t) {
                return;
            }
            e.libraryCalls.set(node, n);
            let s = n === "read" || n === "update";
            let p = s ? node.arguments[1] : node;
            let a = p !== undefined && p.type !== "SpreadElement" ? ee(p, {
                scanned,
                libraryHelper: (d)=>Z(scanned, d)
            }) : undefined;
            let f = a?.every(({ plugin, key })=>plugin !== undefined && key !== undefined);
            if (a === undefined || f !== true) {
                throw scanned.refuse(p ?? node, `the state library's ${n} takes a source the scan can read: a reference whose plugin and key are string literals, or what atom, memberOf or derive (imported from "claude-code") made of one, written there or in a const of this file, so the values a module reads and writes can be listed`);
            }
            let spelling = n === "update" ? "state.set" : "state.get";
            for (let { plugin = "", key = "", consts } of a){
                let h = `${plugin}\x00${key}`;
                e.stateReads.set(h, {
                    plugin,
                    key
                });
                if (n === "update") {
                    e.stateWrites.set(h, {
                        plugin,
                        key
                    });
                }
                for (let k of consts){
                    e.stateConsts.add({
                        followed: k,
                        spelling,
                        scanned
                    });
                }
            }
            if (s) {
                e.calls.add("state.get");
            }
            if (n === "update") {
                e.calls.add("state.set");
            }
        });
    }
}
function Vo(e, { call, spelling, named, consts }, scanned) {
    let p = `${named.plugin}\x00${named.key}`;
    (spelling === "state.get" ? e.stateReads : e.stateWrites).set(p, named);
    e.stateCalls.add(call);
    for (let a of consts){
        e.stateConsts.add({
            followed: a,
            spelling,
            scanned
        });
    }
}
function mf(e) {
    let o = e.stateReads.size > 0 || e.stateWrites.size > 0;
    let r = (t)=>[
            ...t.entries()
        ].sort(([n], [s])=>{
            if (n < s) {
                return -1;
            }
            if (n > s) {
                return 1;
            }
            return 0;
        }).map(([, n])=>n);
    if (o) {
        return {
            reads: r(e.stateReads),
            writes: r(e.stateWrites)
        };
    }
}
function Wo(e, o, r = "") {
    let { program, names, refuse } = e.scanned;
    let { functions, assigned } = names;
    let a = o === "default" ? "the default export" : o;
    function f(d, g) {
        if (assigned.has(d)) {
            throw refuse(g, `${a} ("${d}") is assigned to elsewhere`);
        }
    }
    for (let d of program.body){
        if (d.type === "ExportDefaultDeclaration" && o === "default") {
            let { declaration: declaration_1 } = d;
            if (declaration_1.type === "FunctionDeclaration") {
                if (declaration_1.id !== null) {
                    f(declaration_1.id.name, declaration_1);
                }
                return declaration_1;
            }
            if (declaration_1.type === "FunctionExpression" || declaration_1.type === "ArrowFunctionExpression") {
                return declaration_1;
            }
            let E = declaration_1.type === "Identifier" ? functions.get(declaration_1.name) : undefined;
            if (E === undefined || declaration_1.type !== "Identifier") {
                throw refuse(declaration_1, `${a} is something other than a function declared at the top of this file`);
            }
            f(declaration_1.name, declaration_1);
            return E;
        }
        if (d.type !== "ExportNamedDeclaration") {
            continue;
        }
        let { declaration } = d;
        if (declaration?.type === "FunctionDeclaration" && declaration.id.name === o) {
            f(o, declaration);
            return declaration;
        }
        if (declaration?.type === "VariableDeclaration") {
            for (let h of declaration.declarations){
                if (h.id.type === "Identifier" && h.id.name === o) {
                    let { init } = h;
                    if (declaration.kind === "const" && (init?.type === "FunctionExpression" || init?.type === "ArrowFunctionExpression")) {
                        return init;
                    }
                    throw refuse(h, `${a} is exported as something other than a const function`);
                }
            }
        }
        for (let h of d.specifiers){
            if (O(h.exported) !== o) {
                continue;
            }
            if (d.source !== null) {
                throw refuse(h, `${a} is re-exported from another file`);
            }
            let k = O(h.local);
            let j = functions.get(k);
            if (j === undefined) {
                throw refuse(h, `${a} is exported as "${k}", which is not a function declared at the top of this file`);
            }
            f(k, h);
            return j;
        }
    }
    let y = program.body.find((d)=>d.type === "ExportAllDeclaration");
    if (y !== undefined) {
        throw refuse(y, `${a} is not exported here by name; what \`export *\` re-exports from another file is not followed`);
    }
    throw refuse(undefined, `no export named ${a}${r}`);
}
function Mt(e, { names, refuse, what }) {
    let n = names.functions.get(e.name);
    if (n === undefined) {
        return;
    }
    if (names.assigned.has(e.name)) {
        throw refuse(e, `${what} "${e.name}" is assigned to elsewhere`);
    }
    let s = names.shadowOf(e);
    if (s !== undefined) {
        throw refuse(s, `${what} "${e.name}" is declared more than once in this file: this declaration hides the top-level function where it is used`);
    }
    return n;
}
function qo(e, { refuse }) {
    if (e.type !== "ObjectPattern") {
        throw refuse(e, "next is destructured other than into an object pattern of plain keys");
    }
    for (let r of e.properties){
        if (r.type === "RestElement") {
            throw refuse(r, "a rest of next (it holds next.to)");
        }
        if (!(!r.computed && r.key.type === "Identifier")) {
            throw refuse(r, "a computed or quoted key destructured from next");
        }
        if (r.key.type === "Identifier" && r.key.name === "to") {
            throw refuse(r, `next.to is destructured from next; it is reached only as next.to(e, "<tier>") on the hook's own next`);
        }
    }
}
const ewr = xp;
const ao = ewr.map((e)=>`classic.${e}`);
const HFn = [
    "model.complete",
    "model.classify",
    "model.fork",
    "audio.play",
    "audio.speak",
    "mcp.call",
    "mcp.connect",
    "session.cwd",
    "session.root",
    "session.model",
    "session.turns",
    "session.id",
    "session.messages",
    "session.repo",
    "session.surface",
    "session.surfaces",
    "session.authorize",
    "session.usage",
    "session.version",
    "turn.abort",
    "prompt.read",
    "flag.value",
    "tool.list",
    "tool.register",
    "command.list",
    "command.register",
    "config.list",
    "agent.list",
    "agent.register",
    "ui.toast",
    "ui.status",
    "ui.log",
    "ui.notice",
    "ui.invalidate",
    "ui.open",
    "ui.close",
    "ui.panes",
    "ui.selection",
    "ui.copy",
    "ui.notify",
    "ui.blit",
    "fs.read",
    "fs.write",
    "fs.list",
    "fs.exists",
    "fs.stat",
    "fs.ancestors",
    "store.get",
    "store.set",
    "store.delete",
    "store.keys",
    "state.get",
    "state.set",
    "clock.now",
    "clock.sleep",
    "clock.after",
    "clock.every",
    "http.fetch",
    "process.run",
    "process.spawn",
    "settings.read",
    "env.get",
    "env.set"
];
const zYe = [
    ...ao,
    "tool.call",
    "tool.check",
    "ui.render",
    "ui.resolve",
    "ui.press",
    "ui.input",
    "ui.select",
    "ui.message",
    "ui.fault",
    "ui.scroll",
    "ui.focus",
    "agent.offer",
    "agent.spawn",
    "prompt.submit",
    "prompt.fill",
    "prompt.suggest",
    "prompt.edit",
    "prompt.autocomplete",
    "prompt.section",
    "prompt.context",
    "prompt.attachment",
    "prompt.mention",
    "prompt.compose",
    "tool.describe",
    "command.run",
    "command.describe",
    "config.set",
    "config.describe",
    "telemetry.log",
    "telemetry.mark",
    "skill.prompt",
    "attribution.text",
    "session.start",
    "session.receive",
    "session.append",
    "session.send",
    "session.compact",
    "session.attach",
    "session.detach",
    "session.measure",
    "session.end",
    "plugin.register",
    "turn.start",
    "turn.step",
    "turn.complete",
    "engine.create",
    ...HFn
];
const YNs = ao.filter((e)=>e !== "classic.PreToolUse");
const ilt = (e)=>zYe.includes(e);
const Ago = (e)=>HFn.includes(e);
const twr = [
    "turn.step",
    "process.spawn"
];
const n7t = (e)=>twr.includes(e);
const Bt = new Set(zYe.filter((e)=>e.includes(".")).map((e)=>e.slice(0, e.indexOf("."))));
const fo = String.raw`(?!\p{Default_Ignorable_Code_Point})[\p{ID_Start}$_]` + String.raw`(?:(?!\p{Default_Ignorable_Code_Point})[\p{ID_Continue}$])*`;
const Gt = new RegExp(String.raw`^${fo}\.${fo}$`, "u");
const DFn = (e)=>Gt.test(e) && !Bt.has(e.slice(0, e.indexOf(".")));
const pws = [
    "managed",
    "user",
    "project",
    "local",
    "memory"
];
const r7t = [
    "replace",
    "append",
    "insert"
];
const LFn = (e)=>typeof e === "string" && r7t.includes(e);
const nU = ha;
const iU = va;
const mU = Oa;
const cU = Da;
const yU = Ma;
const ry = [
    "prepend",
    "user",
    "append",
    "builtin",
    "core"
];
const fws = [
    "allow",
    "ask",
    "deny"
];
const alt = (e)=>ry.indexOf(e);
function XNs(e, o) {
    let r = alt(o);
    return e.find((t)=>alt(t.from) < r && r < alt(t.to))?.plugin;
}
const XPt = (e)=>({
        prepend: [
            "append",
            "builtin",
            "core"
        ],
        user: [],
        append: [
            "core"
        ],
        builtin: [],
        core: []
    })[e];
const nwr = (e)=>XPt("prepend").includes(e);
const mws = [
    "prepend",
    "append"
];
function JNs(e, o) {
    return Object.freeze([
        ...e,
        Object.freeze({
            ...o,
            to: e.reduce((acc, item)=>{
                if (alt(item.to) > alt(acc)) {
                    return item.to;
                }
                return acc;
            }, o.to)
        })
    ]);
}
const Cgo = (e)=>`next.to:${e}`;
const llt = Object.freeze([]);
function Vt(e, { refuse, parentOf, recordTo }) {
    if (e.optional) {
        throw refuse(e, "next.to is reached through optional chaining");
    }
    let n = parentOf(e);
    if (!(n?.type === "CallExpression" && n.callee === e && !n.optional)) {
        throw refuse(e, 'next.to is used as a value (bound, passed or read) instead of called as next.to(e, "<tier>")');
    }
    let [p, i, a] = n.arguments;
    if (p === undefined || p.type === "SpreadElement") {
        throw refuse(n, 'next.to is called without (e, "<tier>") or with a spread');
    }
    if (a !== undefined) {
        throw refuse(a, 'next.to is called with more than (e, "<tier>")');
    }
    if (!(i?.type === "Literal" && typeof i.value === "string")) {
        throw refuse(i ?? n, "next.to names its tier other than as a string literal (a variable, a template or an expression)");
    }
    let i_value = i.value;
    if (!nwr(i_value)) {
        throw refuse(i, `next.to names "${String(i_value)}", which is not a tier a dispatch continues at (append, builtin, core)`);
    }
    recordTo(i_value);
    return n;
}
const Ng = (e)=>Wo(e, "register", " (export function register(on, options) {...})");
const zt = new RegExp(`^${fo}$`, "u");
const GYe = (e)=>e === "*" || e.endsWith(".*") || e.startsWith("!");
const lo = (e)=>e.startsWith("telemetry.");
function co(e) {
    if (typeof e !== "string") {
        return `${typeof e} is not an event name or a pattern (a string)`;
    }
    let isNegated = e.startsWith("!");
    let r = isNegated ? e.slice(1) : e;
    if (isNegated && r === "*") {
        return `"${e}" is not a pattern: it selects no event`;
    }
    if (isNegated && r.startsWith("!")) {
        return `"${e}" is not a pattern: "!" negates once`;
    }
    let t = r === "*";
    let n = r.endsWith(".*");
    let s = (n ? r.slice(0, -2) : r).split(".");
    if (!(t || s.every((i)=>zt.test(i)))) {
        return `"${e}" is not an event name or a pattern ("*", "<prefix>.*", or "!" before either)`;
    }
    return {
        isNegated,
        selection: t ? {
            kind: "every"
        } : n ? {
            kind: "prefix",
            prefix: s.join(".")
        } : {
            kind: "name",
            name: r
        }
    };
}
function uo(e) {
    let o = co(e);
    if (typeof o === "string") {
        throw new Me(o);
    }
    return o;
}
function gws(e) {
    let { selection } = uo(e);
    if (selection.kind === "name") {
        return selection.name;
    }
}
function rwr(e) {
    let o = co(e);
    if (typeof o === "string") {
        return o;
    }
}
function Lde(e, o) {
    let { isNegated, selection } = uo(e);
    let n;
    switch(selection.kind){
        case "every":
            n = true;
            break;
        case "prefix":
            n = o.startsWith(`${selection.prefix}.`);
            break;
        case "name":
            n = o === selection.name;
            break;
    }
    if (isNegated) {
        return !n;
    }
    return n;
}
const JPt = (e, o, r)=>Lde(e, o) && (r.isBuiltin || !lo(o) || lo(e));
const ve = (e)=>e.arguments.find((o)=>o.type === "SpreadElement");
function Cg(e, refuse, onName) {
    let t = ve(e);
    if (t !== undefined) {
        throw refuse(t, `${onName}() is called with a spread argument`);
    }
    let [n, ...s] = e.arguments;
    if (n === undefined || s.length === 0 || s.length > 2) {
        throw refuse(e, `${onName}() takes (event, hook) or (event, matcher, hook); got ${e.arguments.length} argument(s)`);
    }
    let event = B(n);
    if (event === undefined) {
        throw refuse(n, `the event name passed to ${onName}() is not a string literal`);
    }
    let a = rwr(event);
    if (a !== undefined) {
        throw refuse(n, a);
    }
    let f = GYe(event) || ilt(event) || DFn(event);
    let y = gws(event);
    let d = y !== undefined && !ilt(y) && !DFn(y);
    if (!f || d) {
        throw refuse(n, `"${y ?? event}" is not an event`);
    }
    let hook = s.at(-1);
    if (hook === undefined) {
        throw refuse(e, `${onName}() takes (event, hook); got no hook`);
    }
    return {
        event,
        hook,
        matcher: s.length === 2 ? s[0] : undefined
    };
}
const Wt = "command.register";
const qt = {
    VariableDeclarator: "bound to a name",
    AssignmentExpression: "assigned",
    SpreadElement: "spread",
    ReturnStatement: "returned",
    ArrowFunctionExpression: "returned",
    Property: "put in an object",
    ArrayExpression: "put in an array",
    ChainExpression: "optionally chained",
    TemplateLiteral: "put in a template"
};
function Ko(e, o) {
    if (!(e.type === "CallExpression" || e.type === "NewExpression")) {
        return qt[e.type] ?? `used in a ${e.type}`;
    }
    if (e.callee === o) {
        return "called";
    }
    return "passed as an argument";
}
const Ne = "plugin";
const Xt = [
    "env.get",
    "env.set"
];
const hws = (e)=>Xt.includes(e);
const Kt = [
    "state.get",
    "state.set"
];
const $Fn = (e)=>Kt.includes(e);
const Yo = (e)=>{
    if (/^[\w$@-]+$/.test(e)) {
        return e;
    }
    return JSON.stringify(e);
};
const clt = (e)=>`${Yo(e.plugin)}.${Yo(e.key)}`;
const QPt = (e)=>e(()=>false, (o, r)=>r(), (o)=>o());
const FFn = (e)=>e.endsWith("@builtin") && e.indexOf("@") === e.length - 8 && e.length > 8;
const QCe = "core";
const QNs = (e)=>e.withheldBy?.at(-1);
const Rgo = (e, o)=>`$.${e}: removed by plugin \`${o}\``;
function Jt(e, o, refuse) {
    let [t] = e.arguments;
    let s = t !== undefined && t.type !== "SpreadElement" ? B(t) : undefined;
    if (s === undefined) {
        throw refuse(t ?? e, `$.${o} takes a literal name as its first argument, so the variables a module reads and writes can be listed (got ${K(t)})`);
    }
    return s;
}
const Jo = (e, o)=>e?.type === "MemberExpression" && e.object === o && !e.computed && !e.optional;
function Qt(e, o) {
    let r = e.map((use, at_1)=>({
            use,
            at: at_1
        }));
    return {
        owned: Map.groupBy(r, (t)=>o.writtenShadowOf(t.use)),
        doubted: r.filter((t)=>o.writtenShadowOf(t.use) !== o.shadowOf(t.use))
    };
}
function Zt(e) {
    let placed = e.toSorted((r, t)=>r.use.start - t.use.start);
    return {
        placed,
        starts: placed.map((r)=>r.use.start)
    };
}
function en(program, o, r) {
    let counted = po((n)=>Qt(o.read.get(n) ?? [], o));
    return {
        inits: zs(Ct),
        exporting: It(program),
        rebound: po((n)=>Dt(n, {
                names: o,
                climbs: r
            })),
        counted,
        apart: po((n)=>po((s)=>Zt(counted(n).doubted.filter((p)=>!no(p.use, r.parentOf, s)))))
    };
}
function on(e, spelling, { refuse, scanned, libraryHelper }) {
    let [s] = e.arguments;
    let p = s !== undefined && s.type !== "SpreadElement";
    let [i, ...a] = (p ? ee(s, {
        scanned,
        libraryHelper
    }) : undefined) ?? [];
    let { plugin, key, consts = [] } = i ?? {};
    if (!(a.length === 0 && plugin !== undefined && key !== undefined)) {
        throw refuse(s ?? e, `$.${spelling} takes a reference whose plugin and key are string literals ({ plugin: "p", key: "k" }, written there or in a const of this file; only id may be computed), so the values a module reads and writes can be listed (got ${K(s)})`);
    }
    return {
        call: e,
        spelling,
        named: {
            plugin,
            key
        },
        consts
    };
}
function Qo(e, o, { refuse, parentOf, scanned, record, recordEnv, recordCommand, recordState, libraryHelper, bind, follow }) {
    let g = e;
    let u = parentOf(g);
    while(u?.type === "AwaitExpression"){
        g = u;
        u = parentOf(g);
    }
    if (u === undefined) {
        throw refuse(e, "$ stands alone");
    }
    if (u.type === "MemberExpression" && u.object === g) {
        if (u.computed || u.optional) {
            throw refuse(u, "a computed or optional member access on $");
        }
        let k = u.property;
        if (k.type !== "Identifier") {
            throw refuse(u, "a member access on $ that is not a name");
        }
        if (k.name === Ne) {
            let oe = parentOf(u);
            if (Jo(oe, u) && oe.property.type === "Identifier") {
                return;
            }
            throw refuse(u, `$.${Ne} is used other than as $.${Ne}.name or $.${Ne}.root`);
        }
        let j = parentOf(u);
        if (!Jo(j, u) || j.property.type !== "Identifier") {
            throw refuse(u, `$.${k.name} is used as a value (a noun of $ bound, passed or read)`);
        }
        let b = parentOf(j);
        if (b?.type !== "CallExpression" || b.callee !== j || b.optional) {
            throw refuse(j, `$.${k.name}.${j.property.name} is used as a value (an event of $ bound, passed or read) instead of called`);
        }
        let w = `${k.name}.${j.property.name}`;
        record(w);
        if (hws(w)) {
            recordEnv(w, Jt(b, w, refuse));
        }
        if (w === Wt) {
            recordCommand(b);
        }
        if ($Fn(w)) {
            recordState(on(b, w, {
                refuse,
                scanned,
                libraryHelper
            }));
        }
        return;
    }
    if (u.type === "CallExpression" && e.type === "Identifier") {
        let k = o === "parameter" && g === e && u.callee !== g && !u.optional && u.callee.type === "Identifier";
        let j = k ? libraryHelper(u) : undefined;
        if ((j === "read" || j === "update") && u.arguments[0] === e) {
            return;
        }
        if (j !== undefined) {
            throw refuse(e, `$ is passed to the state library's ${j} other than as the first argument of read($, source) or update($, target, fn)`);
        }
        if (k) {
            follow(u, e);
            return;
        }
    }
    if (o === "parameter") {
        throw refuse(g, `$ itself is ${Ko(u, g)} (bound, passed, spread, returned or read)`);
    }
    if (u.type === "SpreadElement") {
        if (parentOf(u)?.type === "ObjectExpression") {
            return;
        }
        throw refuse(u, "the value of next(e) at engine.create is spread other than into an object literal");
    }
    if (u.type === "ReturnStatement" || u.type === "ArrowFunctionExpression" && u.body === g) {
        return;
    }
    if (u.type === "VariableDeclarator" && u.init === g) {
        let k = parentOf(u);
        if (k?.type !== "VariableDeclaration" || k.kind !== "const") {
            throw refuse(u, "the value of next(e) at engine.create is bound with let or var (const only)");
        }
        let { id } = u;
        if (id.type === "Identifier") {
            bind.dollar(id);
            return;
        }
        if (id.type === "ObjectPattern") {
            for (let b of id.properties){
                if (b.type === "RestElement") {
                    if (b.argument.type !== "Identifier") {
                        throw refuse(b, "a rest of next(e) at engine.create that is not a plain name");
                    }
                    bind.dollar(b.argument);
                } else if (b.value.type === "Identifier" && !b.computed) {
                    bind.unread(b.value);
                } else {
                    throw refuse(b, "a destructuring of next(e) at engine.create with a nested pattern, a default or a computed key");
                }
            }
            return;
        }
        throw refuse(id, "the value of next(e) at engine.create is destructured into an array");
    }
    throw refuse(g, `the value of next(e) at engine.create is ${Ko(u, g)}`);
}
const rn = "engine.create";
function xo(e, o, r) {
    let { refuse } = r;
    for (let { name, declaration, origin } of o){
        for (let i of Do(e, name)){
            if (i !== declaration) {
                throw refuse(i, `"${name}" (which holds $) is declared again (shadowed)`);
            }
        }
        for (let i of z(e, name)){
            Qo(i, origin, r);
        }
    }
}
function Hj(e, o, r) {
    let { refuse } = r;
    if (e.type !== "ArrowFunctionExpression") {
        for (let i of z(e, "arguments", "own")){
            throw refuse(i, '"arguments" is read inside a function handed $ (it holds $)');
        }
    }
    let n = e.params.at(-1);
    if (n?.type === "RestElement" && o >= e.params.length - 1) {
        throw refuse(n, "$ is passed into a rest parameter");
    }
    let p = e.params[o];
    if (p === undefined) {
        return;
    }
    if (p.type !== "Identifier") {
        throw refuse(p, "the parameter that receives $ is not a plain name (a pattern or a default)");
    }
    xo(e, [
        {
            name: p.name,
            declaration: p,
            origin: "parameter"
        }
    ], {
        ...r,
        bind: {
            dollar: (i)=>{
                throw refuse(i, "next(e) is bound outside an engine.create hook");
            },
            unread: (i)=>{
                throw refuse(i, "next(e) is bound outside an engine.create hook");
            }
        }
    });
}
function tn({ fn, next, engineCreate }, t) {
    let { refuse, parentOf } = t;
    if (next.type !== "Identifier") {
        if (engineCreate) {
            throw refuse(next, "the third parameter of an engine.create hook (next) is not a plain name");
        }
        qo(next, t);
        return;
    }
    for (let p of Do(fn, next.name)){
        if (p !== next) {
            throw refuse(p, `"${next.name}" (the continuation) is declared again (shadowed); rename the inner binding`);
        }
    }
    for (let p of z(fn, next.name)){
        let i = parentOf(p);
        if (i?.type === "CallExpression" && i.callee === p && !i.optional) {
            if (engineCreate) {
                Qo(i, "next", t);
            }
            continue;
        }
        if (i?.type === "MemberExpression" && i.object === p) {
            if (i.computed) {
                if (i.property.type === "Literal" && typeof i.property.value === "string" && i.property.value !== "to") {
                    continue;
                }
                throw refuse(i, `a computed member access on "${next.name}" (it may reach next.to)`);
            }
            if (i.property.type === "Identifier" && i.property.name === "to") {
                let y = Vt(i, t);
                if (engineCreate) {
                    Qo(y, "next", t);
                }
            }
            continue;
        }
        if (engineCreate) {
            throw refuse(p, `"${next.name}" is passed on or bound inside an engine.create hook (its value is $)`);
        }
        if (i?.type === "VariableDeclarator" && i.init === p) {
            if (i.id.type === "Identifier") {
                throw refuse(i, `"${next.name}" (the hook's next) is bound to another name; next.to is reached only on the hook's own next`);
            }
            qo(i.id, t);
            continue;
        }
        if (i?.type === "AssignmentExpression" && i.right === p) {
            throw refuse(i, `"${next.name}" (the hook's next) is assigned to another name; next.to is reached only on the hook's own next`);
        }
    }
}
function Mj(e, engineCreate, r) {
    let { refuse } = r;
    let [n, s, p] = e.params;
    if (e.type !== "ArrowFunctionExpression") {
        for (let y of z(e, "arguments", "own")){
            throw refuse(y, '"arguments" is read inside a hook (it holds $)');
        }
    }
    let i = [];
    if (n !== undefined) {
        if (n.type !== "Identifier") {
            throw refuse(n, "the first parameter of a hook ($) is not a plain name (a pattern, a rest or a default)");
        }
        i.push({
            name: n.name,
            declaration: n,
            origin: "parameter"
        });
    }
    for (let y of [
        n,
        s,
        p
    ]){
        if (y?.type === "RestElement") {
            throw refuse(y, "a hook takes $, e or next into a rest parameter (it would hold next)");
        }
    }
    for (let y of e.params){
        XM(y, ({ node })=>{
            if (node.type === "AssignmentPattern") {
                throw refuse(node, "a parameter of a hook has a default value");
            }
        });
    }
    let f = {
        ...r,
        bind: {
            dollar: (y)=>{
                i.push({
                    name: y.name,
                    declaration: y,
                    origin: "next"
                });
            },
            unread: (y)=>{
                for (let d of z(e, y.name)){
                    throw refuse(d, `"${y.name}", destructured from $ at engine.create, is read (a noun bound to a name); leave it unread or call it as $.noun.event(...)`);
                }
            }
        }
    };
    if (p !== undefined) {
        tn({
            fn: e,
            next: p,
            engineCreate
        }, f);
    }
    xo(e, i, f);
}
function nn({ scan, linked }) {
    let { scanned } = linked;
    let { refuse, parentOf } = scanned;
    let follow = (i, a)=>{
        let { callee } = i;
        if (callee.type !== "Identifier") {
            throw refuse(callee, "$ is passed to something other than a named function");
        }
        let y = ve(i);
        if (y !== undefined) {
            throw refuse(y, "$ is passed in a call with a spread argument");
        }
        let d = Mt(callee, {
            names: scanned.names,
            refuse,
            what: "the function handed $"
        });
        if (d === undefined) {
            let h = scanned.imports.get(callee.name);
            if (h !== undefined && scanned.names.shadowOf(callee) !== undefined) {
                throw refuse(callee, `$ is passed to "${callee.name}", a name declared again over this call: the engine may not bind it to the import of that name. Rename one of the two`);
            }
            throw refuse(callee, h === undefined ? `$ is passed to "${callee.name}", which is not a function declared at the top of this file (a function declaration, or a const bound to one); $ is followed nowhere else` : `$ is passed to "${callee.name}", imported from "${h.specifier}": $ is followed only into a function declared in this same file, never across an import`);
        }
        let g = i.arguments.indexOf(a);
        let u = scan.helpers.get(d) ?? new Set;
        if (u.has(g)) {
            return;
        }
        u.add(g);
        scan.helpers.set(d, u);
        Hj(d, g, {
            refuse,
            parentOf,
            scanned,
            record: (h)=>{
                scan.calls.add(h);
                scan.via.set(h, (scan.via.get(h) ?? new Set).add(callee.name));
            },
            recordTo: (h)=>{
                scan.nextTo.add(h);
            },
            recordEnv: (h, k)=>{
                Qe(scan, h).add(k);
            },
            recordCommand: (h)=>{
                to(scan, h);
            },
            recordState: (h)=>{
                Vo(scan, h, scanned);
            },
            libraryHelper: (h)=>Z(scanned, h),
            follow
        });
    };
    return follow;
}
function yo({ scan, linked }, r, t) {
    let { scanned } = linked;
    let s = Mt(r, {
        names: scanned.names,
        refuse: scanned.refuse,
        what: t
    });
    if (s !== undefined) {
        return {
            fn: s,
            linked
        };
    }
    let p = scanned.imports.get(r.name);
    if (p === undefined) {
        throw scanned.refuse(r, `${t} "${r.name}" is not a function declared at the top of this file (a function declaration, or a const bound to a function), nor imported from one of the module's own files`);
    }
    if (p.imported === undefined) {
        throw scanned.refuse(r, `${t} "${r.name}" is a namespace import, not a function`);
    }
    if (scanned.names.assigned.has(r.name)) {
        throw scanned.refuse(r, `${t} "${r.name}" is assigned to elsewhere`);
    }
    let i = scanned.names.shadowOf(r);
    if (i !== undefined) {
        throw scanned.refuse(i, `${t} "${r.name}" is declared again in this file, shadowing the import`);
    }
    let a = linked.links.get(p.specifier);
    if (a === undefined) {
        throw scanned.refuse(r, `"${p.specifier}" was not linked`);
    }
    let f = Ze(scan, a);
    return {
        fn: Wo(f, p.imported),
        linked: f
    };
}
const ge = (e)=>`${e.length}:${e}`;
function zj(graph) {
    let o = createHash("sha256").update(ge(graph.root));
    for (let [r, { compiled, links }] of graph.files){
        o.update(ge(r) + ge(compiled));
        for (let [s, p] of links){
            o.update(ge(s) + ge(p));
        }
    }
    return o.digest("hex");
}
function sn(e) {
    return {
        argumentsRead: e.type === "ArrowFunctionExpression" ? [] : z(e, "arguments", "own"),
        names: Ho(e)
    };
}
function pn(scan, o) {
    let r = scan.holderNames.get(o);
    if (r !== undefined) {
        return r;
    }
    let t = sn(o);
    scan.holderNames.set(o, t);
    return t;
}
function go(e, { fn, what, event, engineCreate }) {
    let { scan, linked } = e;
    let i = fn.type === "FunctionExpression" || fn.type === "ArrowFunctionExpression";
    let a = fn.type === "Identifier";
    let f = i ? {
        fn,
        linked
    } : a ? yo(e, fn, what) : undefined;
    if (f === undefined) {
        throw linked.scanned.refuse(fn, `${what} is not a function literal or the name of one`);
    }
    let y = f.fn.async === true && f.fn.generator === true;
    let d = n7t(event);
    if (d && !y) {
        throw linked.scanned.refuse(fn, `${what} on "${event}" is not an async generator: ${event} streams, so it takes async function* ($, e, next) { ... }, which yields the chunks and returns the result`);
    }
    if (!d && y) {
        throw linked.scanned.refuse(fn, `${what} on "${event}" is an async generator: only a streaming event named as itself (${twr.join(", ")}) takes one; this pattern takes ($, e, next) => result`);
    }
    scan.registered.set(f.fn, {
        linked: f.linked,
        engineCreate: scan.registered.get(f.fn)?.engineCreate === true || engineCreate
    });
}
function an(e, { call, event, onName, holder }) {
    let { scanned } = e.linked;
    let { parentOf, refuse } = scanned;
    let a = parentOf(call);
    let f = `${onName}("${event}")`;
    if (a?.type !== "MemberExpression" || a.object !== call) {
        ke({
            call,
            scanned,
            what: f,
            holder
        });
        return;
    }
    if (!(!a.computed && !a.optional && a.property.type === "Identifier" && a.property.name === "catch")) {
        throw refuse(a, `${f} is read for something other than .catch; a registration has .catch(handler) and nothing else`);
    }
    let d = parentOf(a);
    if (!(d?.type === "CallExpression" && d.callee === a && !d.optional)) {
        throw refuse(a, `${f}.catch is read without being called`);
    }
    if (event === rn) {
        throw refuse(d, `${f}.catch(): an engine.create hook has no budget and its failure fails the load; .catch does not apply`);
    }
    let u = ve(d);
    if (u !== undefined) {
        throw refuse(u, `${f}.catch() is called with a spread argument`);
    }
    let [h, ...k] = d.arguments;
    if (h === undefined || k.length > 0) {
        throw refuse(d, `${f}.catch() takes (handler); got ${d.arguments.length} argument(s)`);
    }
    go(e, {
        fn: h,
        what: "the .catch handler",
        event,
        engineCreate: false
    });
    let j = parentOf(d);
    if (j?.type === "MemberExpression" && j.object === d) {
        throw refuse(j, `${f}.catch(...) is followed by another member; a registration takes one .catch`);
    }
    ke({
        call: d,
        scanned,
        what: `${f}.catch()`,
        holder
    });
}
function fn(e, o) {
    let { call, onName, holder, position } = o;
    let { scan, linked } = e;
    let { scanned } = linked;
    let { event, hook, matcher } = Cg(call, scanned.refuse, onName);
    let g = matcher !== undefined;
    let u = GYe(event);
    let h = scan.unmatched.get(event);
    if (h !== undefined && (!g || u)) {
        throw scanned.refuse(call, `${onName}("${event}") is registered twice${g ? "" : " without a matcher"}; the first is at ${h}`);
    }
    if (!g || u) {
        scan.unmatched.set(event, `${scanned.file}:${call.loc?.start.line ?? "unknown line"}`);
    }
    scan.hooks.add(event);
    scan.registrations.set(call, {
        event,
        matcher,
        linked,
        holder,
        position
    });
    go(e, {
        fn: hook,
        what: "the hook",
        event,
        engineCreate: event === rn
    });
    an(e, {
        ...o,
        event
    });
}
function Zo(e, o, r) {
    let { scan, linked } = e;
    let s = scan.holders.get(o) ?? new Set;
    if (s.has(r)) {
        return;
    }
    s.add(r);
    scan.holders.set(o, s);
    scan.holderFiles.set(o, linked);
    let { scanned } = linked;
    let { refuse, parentOf } = scanned;
    let f = pn(scan, o);
    for (let g of f.argumentsRead){
        throw refuse(g, '"arguments" is read inside a function that holds on');
    }
    let y = o.params[r];
    if (y === undefined) {
        let g = o.params.at(-1);
        if (g?.type === "RestElement") {
            throw refuse(g, "on is passed into a rest parameter");
        }
        return;
    }
    if (y.type !== "Identifier") {
        throw refuse(y, "the parameter that receives on is not a plain name");
    }
    let y_name = y.name;
    for (let g of f.names.declared.get(y_name) ?? []){
        if (g !== y) {
            throw refuse(g, `"${y_name}" is declared again (shadowed)`);
        }
    }
    for (let g of f.names.read.get(y_name) ?? []){
        let u = parentOf(g);
        if (u?.type !== "CallExpression" || u.optional) {
            throw refuse(g, `"${y_name}" is used other than as a call or an argument to a function of the module's own (bound, spread or read)`);
        }
        if (u.callee === g) {
            fn(e, {
                call: u,
                onName: y_name,
                holder: o,
                position: r
            });
            continue;
        }
        if (u.callee.type !== "Identifier") {
            throw refuse(u.callee, `"${y_name}" is passed to something other than a function named at the top of this file or imported from one of the module's own files`);
        }
        let h = ve(u);
        if (h !== undefined) {
            throw refuse(h, `"${y_name}" is passed in a call with a spread argument`);
        }
        ke({
            call: u,
            scanned,
            what: `${u.callee.name}(${y_name})`,
            holder: o
        });
        let k = yo(e, u.callee, "the callee");
        let position = u.arguments.indexOf(g);
        scan.holderCalls.add({
            call: u,
            callee: k.fn,
            position,
            caller: o,
            callerPosition: r
        });
        Zo({
            scan,
            linked: k.linked
        }, k.fn, position);
    }
}
const mn = (graph, o, register)=>({
        graph,
        pluginName: o,
        register,
        hooks: new Set,
        registrations: new Map,
        holderCalls: new Set,
        holderFiles: new Map,
        unmatched: new Map,
        calls: new Set,
        nextTo: new Set,
        envReads: new Set,
        envWrites: new Set,
        registeredCommands: new Set,
        stateReads: new Map,
        stateWrites: new Map,
        stateCalls: new Set,
        libraryCalls: new Map,
        stateConsts: new Set,
        direct: new Set,
        via: new Map,
        helpers: new Map,
        registered: new Map,
        holders: new Map,
        holderNames: new Map
    });
function er(graph, o) {
    let r = Ze({
        graph,
        pluginName: o
    }, graph.entry);
    let t = Ng(r);
    let n = mn(graph, o, t);
    Zo({
        scan: n,
        linked: r
    }, t, 0);
    return n;
}
function Ae(e, o) {
    let r = er(e, o);
    for (let [t, { linked, engineCreate }] of r.registered){
        Mj(t, engineCreate, {
            refuse: linked.scanned.refuse,
            parentOf: linked.scanned.parentOf,
            scanned: linked.scanned,
            record: (p)=>{
                r.calls.add(p);
                r.direct.add(p);
            },
            recordTo: (p)=>{
                r.nextTo.add(p);
            },
            recordEnv: (p, i)=>{
                Qe(r, p).add(i);
            },
            recordCommand: (p)=>{
                to(r, p);
            },
            recordState: (p)=>{
                Vo(r, p, linked.scanned);
            },
            libraryHelper: (p)=>Z(linked.scanned, p),
            follow: nn({
                scan: r,
                linked
            })
        });
    }
    ff(r);
    Ja(r);
    return r;
}
function pk(graph, o) {
    let { via, direct } = Ae(graph, o);
    let n = new Map;
    for (let [s, p] of via){
        if (!direct.has(s)) {
            n.set(s, [
                ...p
            ].sort());
        }
    }
    return n;
}
const ho = (e, o, error)=>new Me(`${e}: ${o} does not parse: ${l(error)}`);
function yws(e, o, r) {
    try {
        return OFn(e, o);
    } catch (error) {
        throw ho(r, e, error);
    }
}
const ln = (e, o)=>{
    if (vo(e) === "js") {
        return undefined;
    }
    return o.split(`
`);
};
function _ws(e) {
    let o;
    XM(e.program, ({ node })=>{
        if (node.type === "ImportExpression" && (o === undefined || node.start < o.start)) {
            o = node;
        }
    });
    if (o === undefined) {
        return;
    }
    return e.refuse(o, 'a dynamic import(); a hooks module imports its own files with an import declaration, as in import { name } from "./file.js"');
}
function dn(program) {
    let o = new Map;
    for (let r of program.body){
        if (r.type !== "ImportDeclaration") {
            continue;
        }
        let specifier = String(r.source.value);
        for (let n of r.specifiers){
            let imported;
            if (n.type === "ImportSpecifier") {
                let p = n.imported;
                imported = p.type === "Identifier" ? p.name : String(p.value);
            } else {
                imported = n.type === "ImportDefaultSpecifier" ? "default" : undefined;
            }
            o.set(n.local.name, {
                specifier,
                imported
            });
        }
    }
    return o;
}
function cn(program) {
    let o = new Set;
    for (let r of program.body){
        let t = r.type === "ImportDeclaration" || r.type === "ExportAllDeclaration";
        let n = r.type === "ExportNamedDeclaration";
        let s = t ? r.source : n ? r.source ?? null : null;
        if (s !== null) {
            o.add(String(s.value));
        }
    }
    return [
        ...o
    ];
}
const or = 2000;
class jo extends Me {
    name = "ScanRefusal";
    plugin;
    file;
    line;
    excerpt;
    construct;
    constructor({ plugin, file, line, excerpt, construct }){
        super(`${plugin}: ${file}${line === undefined ? "" : excerpt === undefined ? `:${line}` : `, compiled line ${line} \`${excerpt}\``}: ${construct}; $ is always spelled $.noun.event(...) at the call site, on is always on("<event>", hook), and next.to always next.to(e, "<tier>")`);
        this.plugin = plugin;
        this.file = file;
        this.line = line;
        this.excerpt = excerpt;
        this.construct = construct;
    }
}
const un = (e, o)=>(r)=>class extends r {
            enterScope = (t)=>{
                r.prototype.enterScope.call(this, t);
                if (this.scopeStack.length > e + 1) {
                    throw o(this.lastTokStartLoc.line);
                }
            };
        };
function bws(e, o, plugin) {
    let t = ln(e, o);
    function refuse(y, construct) {
        let line = typeof y === "number" ? y : y?.loc?.start.line;
        let h = t === undefined || line === undefined ? undefined : t[line - 1]?.trim() ?? "";
        let k = h !== undefined && h.length > vr;
        return new jo({
            plugin,
            file: e,
            line,
            excerpt: k ? `${ne(h, vr)}...` : h,
            construct
        });
    }
    let { Parser } = Tgo();
    let program;
    try {
        program = Parser.extend(un(or, (y)=>refuse(y, `code nested too deep to scan: more than ${or} scopes (functions, blocks, loops) open inside one another`))).parse(o, {
            ecmaVersion: "latest",
            sourceType: "module",
            locations: true
        });
    } catch (error) {
        if (error instanceof jo) {
            throw error;
        }
        throw error instanceof RangeError ? refuse(undefined, `code nested too deep to scan (the parser stopped: ${error.message})`) : ho(plugin, e, error);
    }
    let i = Xs(program);
    let a = Zp((y)=>i.get(y));
    let f = li(program, a);
    return {
        file: e,
        program,
        names: f,
        consts: en(program, f, a),
        parentOf: a.parentOf,
        climbs: a,
        refuse,
        imports: dn(program),
        specifiers: cn(program)
    };
}
function hk(program) {
    let o;
    XM(program, ({ node })=>{
        if (o === undefined && (node.type === "AwaitExpression" || node.type === "ForOfStatement" && node.await || node.type === "VariableDeclaration" && node.kind === "await using")) {
            o = node;
        }
    }, (r)=>r.type === "FunctionDeclaration" || r.type === "FunctionExpression" || r.type === "ArrowFunctionExpression");
    return o;
}
async function yn(e, o, r) {
    let files = new Map;
    let known = new Map([
        [
            e.file,
            e.source
        ]
    ]);
    let reals = new Map(e.real === undefined ? [] : [
        [
            e.real,
            e.file
        ]
    ]);
    let p = {
        known,
        reals
    };
    let i = Buffer.byteLength(e.source, "utf8");
    let a = [
        e
    ];
    while(a.length > 0){
        let f = [];
        let y = 0;
        for (let { file, source } of a){
            if (files.has(file)) {
                continue;
            }
            if (y > 0 && y % No === 0) {
                await Lb();
            }
            y += 1;
            if (Buffer.byteLength(source, "utf8") > To) {
                throw Ao(o, file);
            }
            let compiled = yws(file, source, o);
            let scanned = bws(file, compiled, o);
            let b = _ws(scanned);
            if (b !== undefined) {
                throw b;
            }
            let A = hk(scanned.program);
            if (file !== e.file && A !== undefined) {
                throw scanned.refuse(A, "a top-level await in a file the entry imports; the environment links the entry alone as an async module");
            }
            let links = new Map;
            for (let specifier of scanned.specifiers){
                if (specifier === slt) {
                    continue;
                }
                if (!Ego(specifier)) {
                    throw dws(o, specifier, relative(e.root, file) || file);
                }
                f.push({
                    importer: file,
                    specifier,
                    links
                });
            }
            files.set(file, {
                source,
                compiled,
                scanned,
                links
            });
        }
        let d = [];
        for(let g = 0; g < f.length; g += No){
            let u = await Promise.allSettled(f.slice(g, g + No).map(async (pending)=>({
                    pending,
                    answer: await r(pending.specifier, pending.importer, p)
                })));
            for (let h of u){
                if (h.status === "rejected") {
                    throw h.reason;
                }
                let { pending, answer } = h.value;
                let { real } = answer;
                let A = real === undefined ? undefined : reals.get(real);
                let w = A === undefined ? answer : {
                    file: A,
                    source: known.get(A) ?? answer.source
                };
                if (!known.has(w.file)) {
                    i += Buffer.byteLength(w.source, "utf8");
                    if (i > cr) {
                        throw As(o, w.file);
                    }
                    known.set(w.file, w.source);
                    if (real !== undefined) {
                        reals.set(real, w.file);
                    }
                }
                pending.links.set(pending.specifier, w.file);
                d.push(w);
            }
        }
        a = d;
    }
    return {
        entry: e.file,
        root: e.root,
        files
    };
}
function rr(e, o) {
    let { onName, event, refuse } = o;
    if (e === undefined) {
        return le;
    }
    switch(e.type){
        case "ObjectExpression":
            {
                let s = e.properties.find((f)=>f.type === "SpreadElement" || f.computed || f.kind !== "init");
                if (s !== undefined) {
                    throw refuse(s, `${onName}("${event}") has a matcher with a spread, a computed key or an accessor, which may set "to" to anything; ` + F(o));
                }
                let [p, i] = e.properties.filter((f)=>me(f, "to"));
                if (i !== undefined) {
                    throw refuse(i, `${onName}("${event}") names "to" twice in one matcher; ` + F(o));
                }
                if (p?.type === "Property") {
                    return St(p.value, o);
                }
                return le;
            }
        case "ArrayExpression":
            return e.elements.flatMap((s)=>{
                if (s === null || s.type === "SpreadElement") {
                    throw refuse(s ?? e, `${onName}("${event}") has a list of matchers with a hole or a spread; ${F(o)}`);
                }
                return rr(s, o);
            });
        default:
            throw refuse(e, `${onName}("${event}") takes its matcher as ${Fe(e)}, not an object written in the call; ${F(o)}`);
    }
}
function gn(e) {
    let o = [
        ...e.registrations.values()
    ].filter((n)=>Lde(n.event, "command.run"));
    let r = o.map((n)=>J(n.matcher));
    if (o.length > 0 && r.every((n)=>n !== undefined)) {
        return D(r.flatMap((n)=>n ?? [])).toSorted();
    }
}
function hn(e) {
    let o = [
        ...e.registrations
    ].filter(([, t])=>lo(t.event));
    if (o.length === 0) {
        return;
    }
    let r = new Set(o.flatMap(([t, { event, matcher, linked }])=>rr(matcher, {
            onName: t.callee.type === "Identifier" ? t.callee.name : "on",
            event,
            refuse: linked.scanned.refuse
        })));
    return le.filter((t)=>r.has(t));
}
function Tk(graph, o) {
    let r = Ae(graph, o);
    let nextTo = XPt("prepend").filter((f)=>r.nextTo.has(f));
    let n = r.envReads.size > 0 || r.envWrites.size > 0;
    let clients = Br(graph);
    let state = mf(r);
    let runCommands = gn(r);
    let telemetry = hn(r);
    return {
        hooks: Array.from(r.hooks),
        calls: Array.from(r.calls).sort(),
        ...runCommands !== undefined && {
            runCommands
        },
        ...nextTo.length === 0 ? {} : {
            nextTo
        },
        ...telemetry !== undefined && {
            telemetry
        },
        ...n && {
            env: {
                reads: Array.from(r.envReads).sort(),
                writes: Array.from(r.envWrites).sort()
            }
        },
        ...state !== undefined && {
            state
        },
        ...clients.length > 0 && {
            clients
        }
    };
}
const Ok = (e)=>(o, r)=>Promise.reject(new Me(`${e}: cannot import "${o}" (from ${r}): the module is one text with no files beside it`));
async function UFn(e, o, r) {
    let t = He.source(e);
    if (t !== undefined) {
        return {
            source: t,
            graph: await yn({
                file: e,
                source: t,
                root: o
            }, r, Ok(r))
        };
    }
    let { real, source } = await Os(e, o, r);
    return {
        source,
        graph: await yn({
            file: e,
            source,
            root: o,
            real
        }, r, la(o, r))
    };
}
function Ie(graph, o) {
    let r = zj(graph);
    let t = Nr.get(r);
    if (t !== undefined) {
        return t;
    }
    let n = Tk(graph, o);
    Nr.set(r, n);
    return n;
}
async function ZNs(e, o, r) {
    let { graph } = await UFn(e, o, r);
    let { registrations, renderMatchers, catchReads } = bt(Ae(graph, r));
    return {
        scan: Ie(graph, r),
        registrations,
        renderMatchers,
        catchReads,
        helperCalls: pk(graph, r)
    };
}
const e$s = (e, o)=>({
        linked: [
            ...e.files
        ].filter(([r])=>r !== o).map(([r, t])=>({
                file: r,
                source: t.source
            })),
        links: [
            ...e.files
        ].flatMap(([r, t])=>[
                ...t.links
            ].map(([n, s])=>({
                    from: r,
                    spelled: n,
                    file: s
                })))
    });
async function xgo(e, o, r) {
    let t = He.scan(e);
    if (t !== undefined) {
        return {
            source: "",
            linked: [],
            links: [],
            scan: t
        };
    }
    let { source, graph } = await UFn(e, o, r);
    return {
        source,
        linked: [
            ...graph.files
        ].filter(([p])=>p !== e).map(([p, i])=>({
                file: p,
                source: i.source
            })),
        links: [
            ...graph.files
        ].flatMap(([p, i])=>[
                ...i.links
            ].map(([a, f])=>({
                    from: p,
                    spelled: a,
                    file: f
                }))),
        scan: Ie(graph, r)
    };
}
function Pgo(e, o) {
    if (!(!o.isBuiltin && e.telemetry?.includes(wt) === true)) {
        return;
    }
    return `its hooks stand on the telemetry stream "${wt}" (a matcher names it, or a telemetry hook names no "to" and so stands on every stream), which is for the plugins built into the CLI; name the collector on each telemetry hook: on("telemetry.log", { to: "collector" }, hook)`;
}
function Igo(e) {
    let o = e.telemetry?.join(", ");
    if (o === "") {
        return "nothing";
    }
    return o;
}
const jn = (module, o, folder)=>({
        module,
        scan: An(o, folder),
        files: Tn(o)
    });
const Ogo = "agents";
const VW = (folder, module, r)=>{
    if ($u()) {
        return jn(module, r(), folder);
    }
    return {
        module,
        folder
    };
};
function Jk(e, hooksModule) {
    if ("folder" in hooksModule) {
        return {
            path: hooksModule.folder,
            modulePath: join(hooksModule.folder, he)
        };
    }
    return {
        path,
        modulePath: nr(e)
    };
}
const BFn = (e)=>join(je(), Eo, e);
function eE(e) {
    if (e === null || e === undefined) {
        return String(e);
    }
    if (typeof e === "object") {
        return `an object with keys [${Object.keys(e).join(", ")}]`;
    }
    return `a ${typeof e}`;
}
function oE(e) {
    if (typeof e === "object" && e !== null && "registerPlugin" in e && typeof e.registerPlugin === "function") {
        return e;
    }
    throw new x(`a built-in module has no registerPlugin function: ${eE(e)}`, "a built-in module has no registerPlugin function");
}
function bbe(e, o) {
    let r;
    try {
        r = o();
    } catch (error) {
        ko(e, "require", error);
        return;
    }
    let t;
    try {
        t = oE(r);
    } catch (error) {
        ko(e, "shape", error);
        return;
    }
    try {
        t.registerPlugin();
    } catch (error) {
        xr().builtinPlugins.delete(e);
        ko(e, "register", error);
    }
}
function ko(e, phase, error) {
    let builtinPluginFailures = xr().builtinPluginFailures;
    if (builtinPluginFailures.has(e)) {
        return;
    }
    builtinPluginFailures.set(e, {
        name: e,
        phase,
        message: l(error)
    });
    c(W(error));
    m("plugin_bundled_register", phase);
}
function Mgo(e) {
    let o = xr();
    let r = o.builtinPlugins.get(e);
    if (r === undefined || o.builtinPluginFailures.has(e)) {
        return false;
    }
    if (r.isAvailable === undefined) {
        return true;
    }
    try {
        return r.isAvailable();
    } catch (error) {
        ko(e, "is_available", error);
        return false;
    }
}
function gS(e) {
    xr().builtinPlugins.set(e.name, e);
    let e_hooksModule = e.hooksModule;
    if (e_hooksModule === undefined) {
        return;
    }
    let r = nr(e.name);
    if ("scan" in e_hooksModule) {
        He.registerScan(r, e_hooksModule.scan);
    } else if ("shipped" in e_hooksModule) {
        He.register(r, e_hooksModule.shipped);
    }
}
function Zg(e) {
    return e.endsWith(`@${path}`);
}
function LE(e) {
    return xr().builtinPlugins.get(e);
}
function gY() {
    let e = Qn();
    let o = [];
    let disabled = [];
    for (let [t, n] of xr().builtinPlugins){
        if (!Mgo(t)) {
            continue;
        }
        let s = `${t}@${path}`;
        let p = uR(s).length > 0;
        let i = n.enabledFromPolicyOnly ? vn(s) : n.enabledFromTrustedSettingsOnly ? ZFn(s) : !p ? e?.enabledPlugins?.[s] : o7t(s);
        let a = i !== undefined ? i === true : n.defaultEnabled ?? true;
        let f = {
            name: t,
            manifest: {
                name: t,
                description: n.description,
                version: n.version,
                ...n.defaultEnabled === undefined ? {} : {
                    defaultEnabled: n.defaultEnabled
                },
                ...n.userConfig === undefined ? {} : {
                    userConfig: n.userConfig
                }
            },
            path,
            source: s,
            repository: s,
            enabled: a,
            isBuiltin: true,
            hooksConfig: n.hooks,
            mcpServers: n.mcpServers,
            ...n.hooksModule === undefined ? {} : Jk(t, n.hooksModule)
        };
        if (a) {
            o.push(f);
        } else {
            disabled.push(f);
        }
    }
    return {
        enabled: o,
        disabled
    };
}
function jFn() {
    return Sn().filter((e)=>!QW(e.name));
}
function Sws() {
    return Sn();
}
function Sn() {
    let { enabled } = gY();
    let o = [];
    let builtinPlugins = xr().builtinPlugins;
    for (let t of enabled){
        let n = builtinPlugins.get(t.name);
        if (!n?.skills) {
            continue;
        }
        for (let s of n.skills){
            o.push(tE(s));
        }
    }
    return o;
}
function owr(e = new Set) {
    let o = [];
    for (let [r, t] of xr().builtinPlugins){
        if (e.has(r)) {
            continue;
        }
        for (let n of t.skills ?? []){
            o.push(n.name, ...n.aliases ?? []);
        }
    }
    return o;
}
function o7t(e) {
    let o = Lo();
    for(let r = o.length - 1; r >= 0; r--){
        let t = o[r];
        if (t === undefined) {
            continue;
        }
        let n = hY(fe(t)?.enabledPlugins, e);
        if (n !== undefined) {
            return n;
        }
    }
}
function wws() {
    return Object.fromEntries([
        ...xr().builtinPlugins
    ].filter(([, e])=>e.enabledFromPolicyOnly).map(([e])=>`${e}@${path}`).map((e)=>[
            e,
            vn(e)
        ]));
}
function vn(e) {
    let [o, r] = [
        N3e(),
        fe("policySettings")
    ].map((t)=>hY(t?.enabledPlugins, e));
    if (o === false && r !== false) {
        return r;
    }
    return o;
}
function tE(e) {
    let builtinPluginWiredSkills = xr().builtinPluginWiredSkills;
    let r = builtinPluginWiredSkills.get(e);
    if (!r) {
        let { wireSkillFilesExtraction } = import.meta.require("/$bunfs/root/chunk-ecy0bygf.js");
        r = wireSkillFilesExtraction(e);
        builtinPluginWiredSkills.set(e, r);
    }
    let { skillRoot, getPromptForCommand } = r;
    let s = {
        type: "prompt",
        name: e.name,
        description: typeof e.description === "function" ? "" : e.description,
        menuDescription: typeof e.menuDescription === "function" ? undefined : e.menuDescription,
        aliases: e.aliases,
        hasUserSpecifiedDescription: true,
        allowedTools: e.allowedTools ?? [],
        getAllowedTools: e.getAllowedTools,
        disallowedTools: e.disallowedTools ?? [],
        argumentHint: typeof e.argumentHint === "function" ? undefined : e.argumentHint,
        whenToUse: typeof e.whenToUse === "function" ? undefined : e.whenToUse,
        subcommands: e.subcommands,
        subcommandsBareOnly: e.subcommandsBareOnly,
        model: e.model,
        disableModelInvocation: typeof e.disableModelInvocation === "function" ? true : e.disableModelInvocation ?? false,
        disableBridgeInvocation: e.disableBridgeInvocation,
        userInvocable: e.userInvocable ?? true,
        terminalOriented: e.terminalOriented,
        argsMayContainSlashCommands: e.argsMayContainSlashCommands,
        contentLength: 0,
        source: "bundled",
        loadedFrom: "bundled",
        hooks: e.hooks,
        context: e.context,
        getContext: e.getContext,
        agent: e.agent,
        background: e.background,
        formatForegroundForkResult: e.formatForegroundForkResult,
        skillRoot,
        isEnabled: e.isEnabled ?? (()=>true),
        policyGate: typeof e.policyGate === "function" ? undefined : e.policyGate,
        requires: e.requires,
        isHidden: !(e.userInvocable ?? true),
        progressMessage: e.progressMessage ?? "running",
        getPromptForCommand,
        getEffort: e.getEffort,
        getDefaultEffort: e.getDefaultEffort,
        onUserTypedArgs: e.onUserTypedArgs,
        getArgumentCompletions: e.getArgumentCompletions
    };
    tRe(s, "description", e.description);
    tRe(s, "menuDescription", e.menuDescription);
    tRe(s, "argumentHint", e.argumentHint);
    tRe(s, "whenToUse", e.whenToUse);
    JFn(s, "disableModelInvocation", e.disableModelInvocation);
    QFn(s, e.policyGate);
    return s;
}
function NFn(e, o, r) {
    let t = _r(e);
    if (Zg(e)) {
        if (r.outermost.includes(t)) {
            return "prepend";
        }
        return "builtin";
    }
    let n = [
        ...o ?? []
    ].some((a)=>!Zg(a) && _r(a) === t);
    let s = (a)=>r[a].includes(t) && (r.from[a] === "user" ? !n : n);
    let p = n ? "prepend" : "user";
    let i = s("prepend") ? "prepend" : "append";
    if (s("prepend") || s("append")) {
        return i;
    }
    return p;
}
export { IFn, OFn, vgo, slt, dws, Ego, WYe, kgo, uws, Tgo, MFn, XM, qNs, KNs, ZSr, ewr, HFn, zYe, YNs, ilt, Ago, twr, n7t, DFn, pws, r7t, LFn, fws, alt, XNs, XPt, nwr, mws, JNs, Cgo, llt, NFn, GYe, gws, rwr, Lde, JPt, hws, $Fn, clt, QPt, FFn, QCe, QNs, Rgo, yws, _ws, bws, UFn, ZNs, e$s, xgo, Pgo, Igo, Ogo, VW, BFn, bbe, Mgo, gS, Zg, LE, gY, jFn, Sws, owr, o7t, wws };
