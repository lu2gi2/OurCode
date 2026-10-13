import { Ul, cpe, uZ, Lz } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { Me } from "/$bunfs/root/chunk-b97fvbrv.js";
import { m7t } from "/$bunfs/root/chunk-2emxbewd.js";
import { Hy } from "/$bunfs/root/chunk-0ycjphb5.js";
import { In } from "/$bunfs/root/chunk-xwkmkvm4.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { isProxy } from "util/types";
const swr = /^\^?(?:\((?:\?:)?)?\^?\w+\$?(?:\|\^?\w+\$?)*\)?\$?$/;
const I = (names)=>names?.paths.some((t)=>t.length === 0) === true;
const s7t = "__proto__";
function Av(o, t) {
    let r = Object.create(null);
    for (let [e, n] of Object.entries(o)){
        if (e !== s7t && t(n, e)) {
            r[e] = n;
        }
    }
    return r;
}
const J = (o)=>Object.freeze(Av(L(o) ? o : {}, (t)=>typeof t === "string"));
function W(table, t) {
    let r = D([
        t,
        Ul(t)
    ].flatMap((e)=>uZ(e, table)));
    return D(r.concat(r.flatMap((e)=>Lz(e, table))).flatMap((e)=>[
            e,
            ...cpe(e)
        ]));
}
function H(o, t) {
    if (o.paths.some((e)=>e[0] === t)) {
        return {
            table: o.table,
            paths: o.paths.filter((e)=>e[0] === t).map((e)=>e.slice(1))
        };
    }
}
const to = Object.freeze({});
const E = Object.freeze({
    "tool.call": [
        [
            "tool"
        ]
    ],
    "tool.check": [
        [
            "tool"
        ]
    ],
    "tool.describe": [
        [
            "tool"
        ]
    ],
    "classic.PreToolUse": [
        [
            "tool"
        ]
    ],
    "classic.PostToolUse": [
        [
            "tool_name"
        ]
    ],
    "classic.PostToolUseFailure": [
        [
            "tool_name"
        ]
    ],
    "classic.PermissionRequest": [
        [
            "tool_name"
        ]
    ],
    "classic.PermissionDenied": [
        [
            "tool_name"
        ]
    ],
    "classic.PostToolBatch": [
        [
            "tool_calls",
            "tool_name"
        ]
    ],
    "session.append": [
        [
            "origin",
            "tool"
        ]
    ],
    "session.compact": [
        [
            "messages",
            "toolUses",
            "tool"
        ]
    ],
    "ui.render": [
        [
            "props",
            "tool"
        ],
        [
            "props",
            "calls",
            "tool"
        ]
    ]
});
const A = (o)=>{
    if (Object.hasOwn(E, o)) {
        return E[o];
    }
};
const f = ze(Hy(), (o)=>o.set(null));
function r$s(o) {
    let t = o !== undefined && o !== null;
    f.set(t ? J(o) : null);
}
function o$s(o) {
    if (A(o) !== undefined) {
        return f.get() ?? undefined;
    }
}
function s$s(o, t) {
    if (A(o) !== undefined) {
        f.set(t ?? null);
    }
}
function ZCe(o) {
    let paths = A(o);
    let table = f.get() ?? to;
    if (paths === undefined) {
        return undefined;
    }
    return {
        table,
        paths
    };
}
function LT(o) {
    if (!L(o)) {
        return false;
    }
    let t = Object.getPrototypeOf(o);
    return t === null || !isProxy(t) && Object.getPrototypeOf(t) === null;
}
const vws = 8;
const Ews = 256;
const y = 65536;
function go(o) {
    if (o === undefined) {
        return "undefined";
    }
    if (typeof o === "function") {
        return "a function";
    }
    if (typeof o === "object" && o) {
        let t = Object.prototype.toString.call(o).replace(/^\[object |\]$/g, "");
        if (t === "Object") {
            return "an object";
        }
        return `a ${t}`;
    }
    return `a ${typeof o}`;
}
function O(node, t, below) {
    if (typeof node !== "object" || !node || t.has(node)) {
        return below;
    }
    if (isProxy(node)) {
        return below;
    }
    let depth = (below?.depth ?? 0) + 1;
    if (depth > m7t) {
        throw RangeError("data nested too deep to freeze");
    }
    t.add(node);
    let n = Array.isArray(node);
    if (n || LT(node)) {
        return {
            node,
            keys: n ? [] : Object.keys(node),
            at: 0,
            depth,
            below
        };
    }
    return below;
}
function Hgo(o, t) {
    let r = O(o, t, undefined);
    while(r !== undefined){
        let { node, keys, at } = r;
        let c = Array.isArray(node);
        if (at < (c ? node : keys).length) {
            r.at = at + 1;
            r = O(c ? node[at] : node[keys[at] ?? ""], t, r);
        } else {
            Object.freeze(node);
            r = r.below;
        }
    }
}
function E$e(o) {
    Hgo(o, new Set);
    return o;
}
function i(o) {
    if (typeof o !== "object" || !o) {
        return false;
    }
    try {
        Reflect.get(RegExp.prototype, "source", o);
        return true;
    } catch  {
        return false;
    }
}
const k$e = (o)=>LT(o) && !i(o);
const S = (names, t, r)=>I(names) && typeof t === "string" && typeof r === "string" && W(names.table, r).includes(t);
function iwr(o) {
    let t = typeof o === "function";
    if (i(o)) {
        return String(o);
    }
    if (Array.isArray(o)) {
        return o.map(iwr).join("|");
    }
    if (k$e(o)) {
        return `{${Object.entries(o).map(([r, e])=>{
            if (k$e(e)) {
                return `${r} has ${iwr(e)}`;
            }
            return `${r}=${iwr(e)}`;
        }).join(", ")}}`;
    }
    if (t) {
        return "function";
    }
    return String(o);
}
const a = (o)=>({
        source: String(Reflect.get(RegExp.prototype, "source", o)),
        flags: String(Reflect.get(RegExp.prototype, "flags", o))
    });
const K = "w";
const C = (source)=>Array.from(source, (t)=>{
        if (In(t) === t) {
            return K;
        }
        return t;
    }).join("");
function F(o) {
    let t = o.source.startsWith("^(") && o.source.endsWith(")$");
    return o.flags === "" && swr.test(C(o.source)) && (t || o.source.split("|").every((r)=>r.startsWith("^") && r.endsWith("$")));
}
const z = (o, t, r)=>I(o.names) && typeof r === "string" && F(a(t)) && W(o.names.table, r).some((e)=>o.test(t, e));
function G(o, t) {
    if (o.names === undefined) {
        return o;
    }
    return {
        test: o.test,
        names: H(o.names, t)
    };
}
function l(o, t, r) {
    if (Array.isArray(o)) {
        return Array.prototype.some.call(o, (e)=>l(e, t, r));
    }
    if (Array.isArray(t)) {
        return Array.prototype.some.call(t, (e)=>l(o, e, r));
    }
    if (typeof o !== "object" || o === null) {
        return o === t || S(r.names, o, t);
    }
    if (LT(o)) {
        if (typeof t !== "object" || !t) {
            return false;
        }
        for (let e of Object.keys(o)){
            if (!Object.hasOwn(t, e) || !l(o[e], t[e], G(r, e))) {
                return false;
            }
        }
        return true;
    }
    return i(o) && (r.test(o, String(t)) || z(r, o, t));
}
function i7t(o, t, path = "") {
    let e;
    if (Array.isArray(o)) {
        Array.prototype.some.call(o, (n)=>{
            e = i7t(n, t, path);
            return e !== undefined;
        });
        return e;
    }
    if (Array.isArray(t)) {
        Array.prototype.some.call(t, (n)=>{
            e = i7t(o, n, path);
            return e !== undefined;
        });
        return e;
    }
    if (!k$e(o)) {
        return;
    }
    if (t === null) {
        return {
            path,
            kind: "null"
        };
    }
    switch(typeof t){
        case "string":
            return {
                path,
                kind: "string"
            };
        case "number":
            return {
                path,
                kind: "number"
            };
        case "boolean":
            return {
                path,
                kind: "boolean"
            };
        case "bigint":
            return {
                path,
                kind: "bigint"
            };
        case "object":
            break;
        case "undefined":
        case "symbol":
        case "function":
            return;
    }
    for (let n of Object.keys(o)){
        if (!Object.hasOwn(t, n)) {
            continue;
        }
        e = i7t(o[n], t[n], path === "" ? n : `${path}.${n}`);
        if (e !== undefined) {
            return e;
        }
    }
}
function Dgo(o, t, r) {
    let e = r.path.split(".").at(-1) ?? r.path;
    return `hooks module ${o}: on('${t}') matcher at ${r.path} is a nested object, but e.${r.path} is a ${r.kind} there, which an object matcher can never match (a matcher has no operator keys); the hook will not run for it. A ${r.kind} is matched by the literal value or, as a string, by a RegExp, e.g. { ${e}: /^prefix/ }`;
}
const Lgo = 32;
const u = "$$regex";
function w(o, t, r) {
    if (Array.isArray(o)) {
        return Array.prototype.map.call(o, (e, n)=>w(e, t, `${r}[${n}]`));
    }
    if (k$e(o)) {
        let e = r === "" ? "" : ` at ${r}`;
        let source = o[u];
        if (typeof source === "string" && typeof o.flags === "string" && Object.keys(o).length === 2) {
            j({
                source,
                flags: o.flags,
                where: t,
                at: e
            });
            return new RegExp(source, o.flags);
        }
        M(o, t, e);
        let c = {};
        for (let [R, B] of Object.entries(o)){
            c[R] = w(B, t, r === "" ? R : `${r}.${R}`);
        }
        return c;
    }
    return o;
}
const U = (source)=>/\([^()]*[+*?}]\)\s*[+*{]/.test(source);
const k = (flags)=>{
    if (flags.includes("g")) {
        return "g";
    }
    if (flags.includes("y")) {
        return "y";
    }
};
function j({ source, flags, where, at }) {
    let n = k(flags);
    if (n) {
        throw new Me(`${where}: matcher${at} is a RegExp with the ${n} flag, which keeps state between tests; drop it`);
    }
    if (U(source)) {
        throw new Me(`${where}: matcher${at} is a RegExp with a nested quantifier (${source}), which can backtrack without bound; rewrite it`);
    }
}
function M(o, t, r) {
    if (Object.hasOwn(o, s7t)) {
        throw new Me(`${t}: matcher${r} has the key ${s7t}, which no event has`);
    }
}
function P(o, t, r) {
    let e = r === "" ? "" : ` at ${r}`;
    if (i(o)) {
        j({
            ...a(o),
            where: t,
            at: e
        });
        return;
    }
    if (Array.isArray(o)) {
        Array.prototype.forEach.call(o, (n, s)=>P(n, t, `${r}[${s}]`));
        return;
    }
    if (k$e(o)) {
        if (Object.hasOwn(o, u)) {
            throw new Me(`${t}: matcher${e} uses the reserved key ${u} (how a RegExp crosses the worker boundary); a RegExp goes in as a RegExp`);
        }
        M(o, t, e);
        for (let [n, s] of Object.entries(o)){
            P(s, t, r === "" ? n : `${r}.${n}`);
        }
        return;
    }
    switch(typeof o){
        case "string":
            if (o.length > y) {
                throw new Me(`${t}: matcher${e} is a string longer than ${y} characters, which cannot match`);
            }
            return;
        case "number":
        case "boolean":
            return;
        case "object":
            if (!o) {
                return;
            }
            break;
        case "bigint":
        case "symbol":
        case "undefined":
        case "function":
            break;
    }
    throw new Me(`${t}: matcher${r === "" ? "" : ` at ${r}`} must be a string, a number, a boolean, null, a RegExp, an array of those, or a nested object; got ${go(o)}`);
}
function Y() {
    let o = {
        log () {},
        hookFailed () {}
    };
    return {
        set: (t)=>{
            o = t;
        },
        get: ()=>o
    };
}
const T = Y();
const { get, set: a7t } = T;
function test(o, t) {
    if (t.length > y) {
        get().log(`matcher: a value of ${t.length} characters is past the ${y} a RegExp matcher reads; it matches, so the hook decides`);
        return true;
    }
    if (k(a(o).flags)) {
        o.lastIndex = 0;
    }
    return RegExp.prototype.exec.call(o, t) !== null;
}
function h(o) {
    if (i(o)) {
        let { source, flags } = a(o);
        return {
            [u]: source,
            flags
        };
    }
    if (Array.isArray(o)) {
        return Array.prototype.map.call(o, h);
    }
    if (k$e(o)) {
        let t = {};
        for (let [r, e] of Object.entries(o)){
            t[r] = h(e);
        }
        return t;
    }
    return o;
}
const Ngo = (o)=>o.map(({ matcher, ...rest })=>{
        if (matcher === undefined) {
            return rest;
        }
        return {
            ...rest,
            matcher: h(matcher)
        };
    });
const WFn = (o, t, r)=>l(o, t, {
        test: ()=>true,
        names: r
    });
const b = (o, t, r)=>{
    if (Array.isArray(o)) {
        return o.some((e)=>b(e, t, r));
    }
    return !LT(o) || !Object.hasOwn(o, t.field) || WFn(o[t.field], t.value, r);
};
const zFn = (o, t, r)=>Object.entries(t).every(([e, n])=>b(o, {
            field: e,
            value: n
        }, r && H(r, e)));
const plt = (o, field, r)=>b(o, {
        field,
        value: r
    });
function t$s(o, t) {
    if (!k$e(o)) {
        throw new Me(`${t}: the matcher must be a plain object (a partial of e)`);
    }
    P(o, t, "");
}
const n$s = (o, t = "matcher")=>w(o, t, "");
const ult = (o, t, r)=>l(o, t, {
        test,
        names: r
    });
export { s7t, Av, swr, vws, Ews, LT, Hgo, E$e, k$e, iwr, i7t, Dgo, Lgo, Ngo, get as Ll, a7t, t$s, n$s, ult, WFn, zFn, plt, r$s, o$s, s$s, ZCe };
