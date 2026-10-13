import { Ei } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Sv } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { dlt } from "/$bunfs/root/chunk-zdj680mx.js";
const y = new Set([
    "__proto__",
    "constructor",
    "prototype"
]);
const c = /(?:\s|\/\/[^\n\r\u2028\u2029]*(?:[\n\r\u2028\u2029]|$)|\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\/)*/y;
const v = /[\n\r\u2028\u2029]/;
const b = /[A-Za-z_$][\w$]*/y;
const N = /[\w$\\]/;
const k = /(?:(?:0|[1-9][0-9]*)(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][+-]?[0-9]+)?/y;
const m = /x([0-9a-fA-F]{2})|u([0-9a-fA-F]{4})|u\{([0-9a-fA-F]+)\}/y;
const W = new Map([
    [
        "n",
        `
`
    ],
    [
        "r",
        "\r"
    ],
    [
        "t",
        "\t"
    ],
    [
        "b",
        "\b"
    ],
    [
        "f",
        "\f"
    ],
    [
        "v",
        "\v"
    ]
]);
function S(e, n) {
    if (e[n] !== "{") {
        return;
    }
    try {
        return P(e, n);
    } catch  {
        return;
    }
}
function I(e, end) {
    let t = d(e, end);
    if (e[t] === ";") {
        return t + 1;
    }
    if (t >= e.length) {
        return end;
    }
    if (!v.test(e.slice(end, t))) {
        return;
    }
    let r = g(e, t);
    if (r === undefined || r === "in" || r === "instanceof") {
        return;
    }
    return end;
}
function d(e, n) {
    c.lastIndex = n;
    if (c.exec(e)) {
        return c.lastIndex;
    }
    return n;
}
function g(e, n) {
    b.lastIndex = n;
    let t = b.exec(e);
    if (!t || T(e, n + t[0].length)) {
        return;
    }
    return t[0];
}
function T(e, n) {
    let t = e[n];
    return t !== undefined && (N.test(t) || t.charCodeAt(0) > 127);
}
function x(e, n) {
    switch(e[n]){
        case "{":
            return P(e, n);
        case "[":
            return A(e, n, "]", x);
        case "'":
        case '"':
        case "`":
            return _(e, n);
        case "-":
            {
                let r = R(e, d(e, n + 1));
                return r && {
                    value: -r.value,
                    end: r.end
                };
            }
        default:
            break;
    }
    let t = R(e, n);
    if (t) {
        return t;
    }
    switch(g(e, n)){
        case "true":
            return {
                value: true,
                end: n + 4
            };
        case "false":
            return {
                value: false,
                end: n + 5
            };
        case "null":
            return {
                value: null,
                end: n + 4
            };
        default:
            return;
    }
}
function P(e, n) {
    let t = A(e, n, "}", D);
    if (!t) {
        return;
    }
    let r = Object.create(null);
    for (let [o, i] of t.value){
        r[o] = i;
    }
    return {
        value: r,
        end: t.end
    };
}
function D(e, n) {
    let t = e[n];
    let r;
    if (t === "'" || t === '"') {
        r = _(e, n);
    } else {
        let a = g(e, n);
        r = a === undefined ? undefined : {
            value: a,
            end: n + a.length
        };
    }
    if (!r || y.has(r.value)) {
        return;
    }
    let o = d(e, r.end);
    if (e[o] !== ":") {
        return;
    }
    let i = x(e, d(e, o + 1));
    return i && {
        value: [
            r.value,
            i.value
        ],
        end: i.end
    };
}
function A(e, n, t, r) {
    let o = [];
    let i = n + 1;
    while(true){
        i = d(e, i);
        if (e[i] === t) {
            return {
                value: o,
                end: i + 1
            };
        }
        if (o.length > 0) {
            if (e[i] !== ",") {
                return;
            }
            i = d(e, i + 1);
            if (e[i] === t) {
                return {
                    value: o,
                    end: i + 1
                };
            }
        }
        let a = r(e, i);
        if (!a) {
            return;
        }
        o.push(a.value);
        i = a.end;
    }
}
function R(e, n) {
    k.lastIndex = n;
    let t = k.exec(e);
    if (!t) {
        return;
    }
    let end = n + t[0].length;
    if (T(e, end) || e[end] === ".") {
        return;
    }
    return {
        value: Number(t[0]),
        end
    };
}
function _(e, n) {
    let t = e[n];
    let r = t === "`";
    let o = "";
    let i = n + 1;
    let a = i;
    while(a < e.length){
        let s = e[a];
        if (s === t) {
            return {
                value: o + e.slice(i, a),
                end: a + 1
            };
        }
        if (s === "\\") {
            let l = F(e, a);
            if (!l) {
                return;
            }
            o += e.slice(i, a) + l.value;
            a = i = l.end;
        } else if (r ? s === "$" && e[a + 1] === "{" : s === `
` || s === "\r") {
            return;
        } else if (r && s === "\r") {
            o += `${e.slice(i, a)}
`;
            a = i = a + (e[a + 1] === `
` ? 2 : 1);
        } else {
            a++;
        }
    }
}
function F(e, n) {
    let t = e[n + 1];
    if (t === undefined) {
        return;
    }
    let r = W.get(t);
    if (r !== undefined) {
        return {
            value: r,
            end: n + 2
        };
    }
    if (t === "0") {
        let o = e[n + 2];
        if (o !== undefined && o >= "0" && o <= "9") {
            return;
        }
        return {
            value: "\x00",
            end: n + 2
        };
    }
    if (t >= "1" && t <= "9") {
        return;
    }
    if (t === "x" || t === "u") {
        m.lastIndex = n + 1;
        let o = m.exec(e);
        if (!o) {
            return;
        }
        let i = parseInt(o[1] ?? o[2] ?? o[3] ?? "", 16);
        if (i > 1114111) {
            return;
        }
        return {
            value: String.fromCodePoint(i),
            end: m.lastIndex
        };
    }
    if (t === "\r") {
        return {
            value: "",
            end: n + (e[n + 2] === `
` ? 3 : 2)
        };
    }
    return {
        value: v.test(t) ? "" : t,
        end: n + 2
    };
}
const V = new RegExp(`^${c.source}export\\s+const\\s+meta\\s*=\\s*(?=\\{)`);
function Kb(e, { validateBody = true, maxBytes = Sv } = {}) {
    if (e.length > maxBytes) {
        return {
            error: `Script exceeds ${maxBytes} bytes`
        };
    }
    let r = validateBody ? null : V.exec(e);
    if (r) {
        let u = S(e, r[0].length);
        let E = u && I(e, u.end);
        if (u && E !== undefined) {
            let w = M(u.value);
            if (!("error" in w)) {
                return {
                    meta: w.meta,
                    scriptBody: L(e, E)
                };
            }
        }
    }
    let { parse } = dlt();
    let i;
    try {
        i = parse(e, {
            ecmaVersion: "latest",
            sourceType: "module",
            allowAwaitOutsideFunction: true,
            allowReturnOutsideFunction: true
        });
    } catch (error) {
        return {
            error: C(error, e)
        };
    }
    let a = i.body[0];
    if (!a || a.type !== "ExportNamedDeclaration" || !U(a)) {
        return {
            error: "`export const meta = { name, description, phases }` must be the FIRST statement in the script"
        };
    }
    let init = a.declaration.declarations[0].init;
    let f;
    try {
        f = j(init);
    } catch (error) {
        return {
            error: `meta must be a pure literal: ${error instanceof Error ? error.message : String(error)}`
        };
    }
    let p = M(f);
    if ("error" in p) {
        return p;
    }
    return {
        meta: p.meta,
        scriptBody: L(e, a.end)
    };
}
function L(e, n) {
    return e.slice(n).replace(/^[;\s]*\n/, "").trimStart();
}
function bGo(e) {
    return !("error" in Kb(e));
}
const h = 80;
function C(error, n) {
    let t = error instanceof Error ? error.message : String(error);
    let r = "Workflow scripts must be plain JavaScript — common causes are TypeScript syntax (type annotations, interfaces, generics) and broken string quoting or escaping.";
    let o = B(error) ? error.loc : undefined;
    let i = o ? n.split(`
`)[o.line - 1] : undefined;
    if (!o || i === undefined) {
        return `Script parse error: ${t}. ${"Workflow scripts must be plain JavaScript — common causes are TypeScript syntax (type annotations, interfaces, generics) and broken string quoting or escaping."}`;
    }
    let a = Math.max(0, Math.min(o.column, i.length));
    let s = Math.max(0, Math.min(a - Math.floor(h / 2), i.length - h));
    let l = i.slice(s, s + h);
    let f = `${Ei(" ", a - s)}^`;
    return `Script parse error: ${t}

${l}
${f}

${"Workflow scripts must be plain JavaScript — common causes are TypeScript syntax (type annotations, interfaces, generics) and broken string quoting or escaping."}`;
}
function B(e) {
    if (typeof e !== "object" || e === null || !("loc" in e)) {
        return false;
    }
    let e_loc = e.loc;
    return typeof e_loc === "object" && e_loc !== null && "line" in e_loc && typeof e_loc.line === "number" && "column" in e_loc && typeof e_loc.column === "number";
}
function U({ declaration }) {
    if (!declaration || declaration.type !== "VariableDeclaration") {
        return false;
    }
    if (declaration.kind !== "const" || declaration.declarations.length !== 1) {
        return false;
    }
    let t = declaration.declarations[0];
    return t.id.type === "Identifier" && t.id.name === "meta" && t.init?.type === "ObjectExpression";
}
function O(e) {
    switch(e.type){
        case "Literal":
            return e.value;
        case "ArrayExpression":
            return e.elements.map((t)=>{
                if (t === null) {
                    throw Error("sparse arrays not allowed");
                }
                if (t.type === "SpreadElement") {
                    throw Error("spread not allowed in meta");
                }
                return O(t);
            });
        case "ObjectExpression":
            return j(e);
        case "TemplateLiteral":
            {
                let n = e;
                if (n.expressions.length > 0) {
                    throw Error("template interpolation not allowed in meta");
                }
                return n.quasis.map((t)=>t.value.cooked ?? "").join("");
            }
        case "UnaryExpression":
            {
                let n = e;
                if (n.operator === "-" && n.argument.type === "Literal" && typeof n.argument.value === "number") {
                    return -n.argument.value;
                }
                throw Error("only negative-number unary allowed in meta");
            }
        default:
            throw Error(`non-literal node type in meta: ${e.type}`);
    }
}
function j(e) {
    let n = Object.create(null);
    for (let t of e.properties){
        if (t.type !== "Property") {
            throw Error("only plain properties allowed in meta");
        }
        let r = t;
        if (r.computed) {
            throw Error("computed keys not allowed in meta");
        }
        if (r.method || r.kind !== "init") {
            throw Error("methods/accessors not allowed in meta");
        }
        n[q(r)] = O(r.value);
    }
    return n;
}
function q(e) {
    let n;
    if (e.key.type === "Identifier") {
        n = e.key.name;
    } else if (e.key.type === "Literal") {
        n = String(e.key.value);
    } else {
        throw Error(`unsupported key type in meta: ${e.key.type}`);
    }
    if (y.has(n)) {
        throw Error(`reserved key name not allowed in meta: ${n}`);
    }
    return n;
}
function M(e) {
    let e_name = e.name;
    if (typeof e_name !== "string" || e_name.length === 0) {
        return {
            error: "meta.name must be a non-empty string"
        };
    }
    let e_description = e.description;
    if (typeof e_description !== "string" || e_description.length === 0) {
        return {
            error: "meta.description must be a non-empty string"
        };
    }
    let title = typeof e.title === "string" && e.title.length > 0 ? e.title : undefined;
    let whenToUse = typeof e.whenToUse === "string" ? e.whenToUse : undefined;
    let phases = K(e.phases);
    return {
        meta: {
            name: e_name,
            description: e_description,
            title,
            whenToUse,
            phases
        }
    };
}
function K(phases) {
    if (!Array.isArray(phases)) {
        return;
    }
    let n = [];
    for (let t of phases){
        if (t && typeof t === "object" && "title" in t) {
            let { title, detail, model } = t;
            if (typeof title === "string") {
                n.push({
                    title,
                    detail: typeof detail === "string" ? detail : undefined,
                    model: typeof model === "string" ? model : undefined
                });
            }
        }
    }
    if (n.length > 0) {
        return n;
    }
}
export { Kb, bGo };
