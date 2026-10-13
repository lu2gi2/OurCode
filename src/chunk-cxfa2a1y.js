import { Ce, $N, iG, Gse } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Cr } from "/$bunfs/root/chunk-6kc68p18.js";
import { br } from "/$bunfs/root/chunk-ytkshq2j.js";
import { yW } from "/$bunfs/root/chunk-jc71z2z2.js";
import { Ag, Tyr, Y$, Mdo, Py, q4 } from "/$bunfs/root/chunk-tn496ms6.js";
const H3t = "a cloud session does not run command, script, HTTP or MCP tool hooks from the shared server it runs on";
const U = new Set([
    "prompt",
    "agent",
    "callback",
    "function"
]);
function v(t) {
    return U.has(t.type);
}
function D3t(t) {
    if (!Ce()) {
        return t;
    }
    let e = iG();
    return t.flatMap((n)=>{
        let o = n.pluginId !== undefined && e?.holds(n.pluginId) === true;
        let hooks = n.hooks.filter((s)=>v(s) || o && s.type === "command");
        if (hooks.length > 0) {
            return [
                {
                    ...n,
                    hooks
                }
            ];
        }
        return [];
    });
}
const N = {
    command: "command",
    script: "script",
    http: "HTTP",
    mcp_tool: "MCP tool"
};
function _pr(hook) {
    return {
        permissionRequestResult: {
            behavior: "deny",
            message: `The PermissionRequest ${N[hook.type] ?? hook.type} hook can't run in this cloud session, so this permission request is denied.`
        },
        outcome: "blocking",
        hook
    };
}
function rQ(t) {
    return D3t(B(t));
}
function B(t) {
    if (br("hooks")) {
        return [];
    }
    let e = $N()?.[t] ?? [];
    if (Py()) {
        return e.filter((l)=>!("pluginRoot" in l) && !("deviceOwner" in l));
    }
    let n = M();
    let { managedOnly, managedPluginIds } = n;
    let s = Mdo();
    let a = iG();
    return [
        ...q4()?.[t] ?? [],
        ...managedOnly ? [] : Gse()?.[t] ?? [],
        ...e.filter((l)=>{
            if (j(l) && a?.holds(l.pluginId) === true) {
                return !(Tyr() && !managedPluginIds?.has(l.pluginId));
            }
            return (!("pluginRoot" in l) || R(l.pluginId, n)) && !(s && "deviceOwner" in l);
        })
    ];
}
function j(t) {
    return "pluginRoot" in t && t.hooks.every((e)=>e.type === "command");
}
function M() {
    let managedOnly = Ag();
    return {
        managedOnly,
        managedPluginIds: managedOnly && !Cr() ? yW() : null
    };
}
function R(t, { managedOnly, managedPluginIds }) {
    return !managedOnly || managedPluginIds?.has(t) === true;
}
function QIn(t) {
    return bpr() && !Y$() && R(t, M());
}
function bpr() {
    return !br("hooks") && !Py() && !Cr();
}
class h extends Error {
}
const d = [
    [
        48,
        57
    ]
];
const w = [
    [
        48,
        57
    ],
    [
        65,
        90
    ],
    [
        95,
        95
    ],
    [
        97,
        122
    ]
];
const s = [
    [
        9,
        13
    ],
    [
        32,
        32
    ],
    [
        160,
        160
    ],
    [
        5760,
        5760
    ],
    [
        8192,
        8202
    ],
    [
        8232,
        8233
    ],
    [
        8239,
        8239
    ],
    [
        8287,
        8287
    ],
    [
        12288,
        12288
    ],
    [
        65279,
        65279
    ]
];
const C = {
    d,
    D: b(d),
    w,
    W: b(w),
    s,
    S: b(s)
};
const set = b([
    [
        10,
        10
    ],
    [
        13,
        13
    ],
    [
        8232,
        8233
    ]
]);
const W = /^[ -/:-@[-`{-~]$/;
const L = 100;
const F = "^$\\.*+?()[]{}|";
function S(t, e) {
    let n = 0;
    let t_length = t.length;
    while(n < t_length){
        let r = n + t_length >> 1;
        if (e > t[r][1]) {
            n = r + 1;
        } else {
            t_length = r;
        }
    }
    return n < t.length && e >= t[n][0];
}
function b(t) {
    let e = [];
    let n = 0;
    for (let [o, r] of t){
        if (o > n) {
            e.push([
                n,
                o - 1
            ]);
        }
        n = r + 1;
    }
    if (n <= 65535) {
        e.push([
            n,
            65535
        ]);
    }
    return e;
}
function I(t) {
    let e = [];
    for (let [n, o] of t.toSorted((r, s)=>r[0] - s[0])){
        let r = e.at(-1);
        if (r !== undefined && n <= r[1] + 1) {
            r[1] = Math.max(r[1], o);
        } else {
            e.push([
                n,
                o
            ]);
        }
    }
    return e;
}
function K(t) {
    let e = 0;
    let n = 0;
    function o(i) {
        if (!t.startsWith(i, e)) {
            return false;
        }
        e += i.length;
        return true;
    }
    function r() {
        if (e >= t.length) {
            throw new h;
        }
        return t.charCodeAt(e++);
    }
    function s() {
        let options = [
            a()
        ];
        while(o("|")){
            options.push(a());
        }
        return {
            type: "either",
            options
        };
    }
    function a() {
        let items = [];
        while(e < t.length && t[e] !== "|" && t[e] !== ")"){
            items.push(l());
        }
        return {
            type: "sequence",
            items
        };
    }
    function l() {
        if (o("^")) {
            return {
                type: "start"
            };
        }
        if (o("$")) {
            return {
                type: "end"
            };
        }
        if (o("\\b")) {
            return {
                type: "boundary"
            };
        }
        if (o("\\B")) {
            return {
                type: "notBoundary"
            };
        }
        let item = H();
        let mark = t[e];
        if (mark !== "*" && mark !== "+" && mark !== "?") {
            return item;
        }
        e++;
        o("?");
        return {
            type: "repeat",
            item,
            mark
        };
    }
    function H() {
        if (o("(")) {
            if (t[e] === "?" && !o("?:") || ++n > L) {
                throw new h;
            }
            let i = s();
            if (!o(")")) {
                throw new h;
            }
            n--;
            return i;
        }
        if (o(".")) {
            return {
                type: "set",
                set
            };
        }
        if (o("[")) {
            return {
                type: "set",
                set: m()
            };
        }
        if (o("\\")) {
            let i = y();
            if (typeof i === "number") {
                return {
                    type: "unit",
                    unit: i
                };
            }
            return {
                type: "set",
                set: i
            };
        }
        if (F.includes(t[e] ?? "")) {
            throw new h;
        }
        return {
            type: "unit",
            unit: r()
        };
    }
    function y() {
        let i = r();
        let f = String.fromCharCode(i);
        if (Object.hasOwn(C, f)) {
            return C[f];
        }
        if (!W.test(f)) {
            throw new h;
        }
        return i;
    }
    function m() {
        let i = o("^");
        let f = [];
        while(!o("]")){
            let k = o("\\") ? y() : r();
            let E = t[e] === "-" && t[e + 1] !== "]";
            if (typeof k !== "number") {
                if (E) {
                    throw new h;
                }
                f.push(...k);
                continue;
            }
            if (!E) {
                f.push([
                    k,
                    k
                ]);
                continue;
            }
            e++;
            let P = o("\\") ? y() : r();
            if (typeof P !== "number" || P < k) {
                throw new h;
            }
            f.push([
                k,
                P
            ]);
        }
        if (i) {
            return b(I(f));
        }
        return I(f);
    }
    let d = {
        type: "start"
    };
    let unless;
    let whole;
    if (o("^(?!")) {
        unless = {
            type: "sequence",
            items: [
                d,
                s()
            ]
        };
        if (!o(")")) {
            throw new h;
        }
        whole = {
            type: "sequence",
            items: [
                d,
                a()
            ]
        };
    } else {
        whole = s();
    }
    if (e < t.length) {
        throw new h;
    }
    return {
        unless,
        whole
    };
}
const u = {
    match: 0,
    unit: 1,
    set: 2,
    jump: 3,
    split: 4,
    start: 5,
    end: 6,
    boundary: 7,
    notBoundary: 8
};
function g(t, e, n = 0, o) {
    t.to.push(n);
    t.other.push(0);
    t.sets.push(o);
    return t.ops.push(e) - 1;
}
function x(t, e) {
    let { ops, to, other } = e;
    switch(t.type){
        case "unit":
            g(e, u.unit, t.unit);
            return;
        case "set":
            g(e, u.set, 0, t.set);
            return;
        case "start":
        case "end":
        case "boundary":
        case "notBoundary":
            g(e, u[t.type]);
            return;
        case "sequence":
            for (let s of t.items){
                x(s, e);
            }
            return;
        case "either":
            {
                let s = [];
                for (let a of t.options.slice(0, -1)){
                    let l = g(e, u.split, ops.length + 1);
                    x(a, e);
                    s.push(g(e, u.jump));
                    other[l] = ops.length;
                }
                x(t.options.at(-1), e);
                for (let a of s){
                    to[a] = ops.length;
                }
                return;
            }
        case "repeat":
            {
                let s = ops.length;
                if (t.mark === "+") {
                    x(t.item, e);
                    let a = g(e, u.split, s);
                    other[a] = ops.length;
                    return;
                }
                g(e, u.split, s + 1);
                x(t.item, e);
                if (t.mark === "*") {
                    g(e, u.jump, s);
                }
                other[s] = ops.length;
            }
    }
}
function G({ ops, to, other, sets }, r) {
    let s = new Int32Array(ops.length).fill(-1);
    let a = new Int32Array(ops.length);
    let l = new Int32Array(ops.length);
    let H = 0;
    let y = 0;
    let m = 0;
    function d(p) {
        if (s[p] !== m) {
            s[p] = m;
            a[H++] = p;
        }
    }
    for(;; m++){
        while(y > 0){
            d(l[--y]);
        }
        d(0);
        let p = m < r.length ? r.charCodeAt(m) : -1;
        while(H > 0){
            let c = a[--H];
            switch(ops[c]){
                case u.match:
                    return true;
                case u.unit:
                    if (p === to[c]) {
                        l[y++] = c + 1;
                    }
                    break;
                case u.set:
                    if (S(sets[c], p)) {
                        l[y++] = c + 1;
                    }
                    break;
                case u.split:
                    d(other[c]);
                    d(to[c]);
                    break;
                case u.jump:
                    d(to[c]);
                    break;
                case u.start:
                    if (m === 0) {
                        d(c + 1);
                    }
                    break;
                case u.boundary:
                case u.notBoundary:
                    {
                        if ((m > 0 && S(w, r.charCodeAt(m - 1))) !== S(w, p) === (ops[c] === u.boundary)) {
                            d(c + 1);
                        }
                        break;
                    }
                default:
                    if (p < 0) {
                        d(c + 1);
                    }
            }
        }
        if (p < 0) {
            return false;
        }
    }
}
function _(t) {
    let e = {
        ops: [],
        to: [],
        other: [],
        sets: []
    };
    x(t, e);
    g(e, u.match);
    return G.bind(null, e);
}
function A(t) {
    try {
        let { unless, whole } = K(t);
        let test = _(whole);
        if (unless === undefined) {
            return {
                test
            };
        }
        let r = _(unless);
        return {
            test: (s)=>!r(s) && test(s)
        };
    } catch (error) {
        if (error instanceof h) {
            return;
        }
        throw error;
    }
}
const X = 2048;
const D = 512;
class QTt extends Error {
}
function z(t) {
    if (t.length > X) {
        return "too_long";
    }
    let e = A(t);
    if (e !== undefined) {
        return e;
    }
    try {
        new RegExp(t);
        return "not_read";
    } catch  {
        return "invalid";
    }
}
function ZIn(t) {
    if (!Ce()) {
        return new RegExp(t);
    }
    let e = z(t);
    if (e === "invalid") {
        throw SyntaxError("invalid hook matcher");
    }
    if (typeof e === "string") {
        throw new QTt("This hook's matcher cannot be tested in a cloud session: it has to be rewritten.");
    }
    return {
        test (n) {
            if (n.length > D) {
                throw new QTt(`The name that this hook's matcher is tested against (for a tool call, the tool's name) has over ${D} characters, more than a cloud session tests.`);
            }
            return e.test(n);
        }
    };
}
const L3t = (t)=>{
    if (t.mcpInfo?.effectiveMaxPermission === "ask") {
        return {
            ceiling: "ask"
        };
    }
    return {};
};
const ZTt = (t)=>({
        tool: t.name,
        ceiling: L3t(t).ceiling
    });
export { H3t, D3t, _pr, rQ, QIn, bpr, QTt, ZIn, L3t, ZTt };
