import { X } from "/$bunfs/root/chunk-bd805sh6.js";
import { ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { NMe, GGt, VGt } from "/$bunfs/root/chunk-acvzmakd.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
const BX = new RegExp(`^${NMe}$`);
const E = 1;
const pZn = 16;
const I = 16;
const fZn = 16;
const w = 16;
const x = 16;
const mZn = 64;
const O = 65536;
const Wqr = 16;
function g(e) {
    return typeof e === "string" && BX.test(e);
}
function R(doc) {
    if (!L(doc)) {
        return "schema document must be an object";
    }
    let s = Object.keys(doc).sort();
    let i = [
        "fields",
        "format",
        "invariants",
        "island",
        "key",
        "maxEntries",
        "name"
    ];
    let o = i.filter((n)=>n !== "invariants");
    for (let n of s){
        if (!i.includes(n)) {
            return `unknown schema key: ${n}`;
        }
    }
    for (let n of o){
        if (!(n in doc)) {
            return `missing schema key: ${n}`;
        }
    }
    if (doc.format !== E) {
        return "unsupported format version";
    }
    if (!g(doc.name)) {
        return "name must be a token";
    }
    if (!g(doc.island)) {
        return "island must be a token";
    }
    let e_maxEntries = doc.maxEntries;
    if (typeof e_maxEntries !== "number" || !Number.isInteger(e_maxEntries) || e_maxEntries < 1 || e_maxEntries > mZn) {
        return `maxEntries must be an integer in 1..${mZn}`;
    }
    if (!L(doc.fields)) {
        return "fields must be an object";
    }
    let u = Object.keys(doc.fields);
    if (u.length === 0 || u.length > pZn) {
        return `fields must declare 1..${pZn} fields`;
    }
    let e_fields = doc.fields;
    for (let n of u){
        if (!g(n)) {
            return `field name must be a token: ${n}`;
        }
        let c = e_fields[n];
        if (!L(c)) {
            return `field ${n} must be an object`;
        }
        let d = c.nullable;
        if (d !== undefined && typeof d !== "boolean") {
            return `field ${n}: nullable must be boolean`;
        }
        let m = Object.keys(c).filter((t)=>t !== "kind" && t !== "nullable");
        switch(c.kind){
            case "token":
                if (m.length > 0) {
                    return `field ${n}: unknown keys ${m.join(",")}`;
                }
                break;
            case "enum":
                {
                    if (m.some((y)=>y !== "values")) {
                        return `field ${n}: unknown keys`;
                    }
                    let t = c.values;
                    if (!Array.isArray(t) || t.length < 1 || t.length > I || t.some((y)=>!g(y)) || new Set(t).size !== t.length) {
                        return `field ${n}: enum values must be 1..${I} unique tokens`;
                    }
                    break;
                }
            case "tokenArray":
                {
                    if (m.some((p)=>p !== "minItems" && p !== "maxItems" && p !== "unique")) {
                        return `field ${n}: unknown keys`;
                    }
                    let { minItems, maxItems, unique } = c;
                    if (unique !== true) {
                        return `field ${n}: tokenArray requires unique: true`;
                    }
                    if (typeof minItems !== "number" || typeof maxItems !== "number" || !Number.isInteger(minItems) || !Number.isInteger(maxItems) || minItems < 0 || maxItems < minItems || maxItems > fZn) {
                        return `field ${n}: need 0 <= minItems <= maxItems <= ${fZn}`;
                    }
                    break;
                }
            case "ref":
                {
                    if (m.some((h)=>h !== "into")) {
                        return `field ${n}: unknown keys`;
                    }
                    let t = c.into;
                    if (typeof t !== "string" || t === n) {
                        return `field ${n}: ref.into must name another field`;
                    }
                    let y = e_fields[t];
                    if (!L(y) || y.kind !== "tokenArray") {
                        return `field ${n}: ref.into must name a declared tokenArray field`;
                    }
                    break;
                }
            case "text":
                if (m.length > 0) {
                    return `field ${n}: unknown keys ${m.join(",")}`;
                }
                break;
            default:
                return `field ${n}: unknown kind`;
        }
    }
    let e_key = doc.key;
    if (typeof e_key !== "string" || !u.includes(e_key)) {
        return "key must name a declared field";
    }
    let f = e_fields[e_key];
    if (f.kind !== "token" || f.nullable === true) {
        return "key field must be kind token and non-nullable";
    }
    let e_invariants = doc.invariants;
    if (e_invariants !== undefined) {
        if (!Array.isArray(e_invariants) || e_invariants.length > w) {
            return `invariants must be an array of at most ${w}`;
        }
        for (let [n, c] of e_invariants.entries()){
            let d = v(c, e_fields, u, e_key);
            if (d !== null) {
                return `invariant ${n}: ${d}`;
            }
        }
    }
    return null;
}
function v(e, s, i, o) {
    if (!L(e)) {
        return "must be an object";
    }
    let r = Object.keys(e).sort();
    let u = (l, f)=>{
        if (!Array.isArray(l) || l.length === 0 || l.length > x || new Set(l).size !== l.length) {
            return `${f} must be 1..${x} unique field names`;
        }
        for (let a of l){
            if (typeof a !== "string" || !i.includes(a)) {
                return `${f} names undeclared field: ${String(a)}`;
            }
            if (s[a].nullable !== true) {
                return `${f} names non-nullable field: ${a}`;
            }
        }
        return null;
    };
    let k = (when)=>{
        if (!L(when)) {
            return "when must be an object";
        }
        let f = Object.keys(when);
        if (f.length !== 1) {
            return "when must compare exactly one field";
        }
        let a = f[0];
        let n = when[a];
        if (!i.includes(a)) {
            return `when names undeclared field: ${a}`;
        }
        if (!g(n)) {
            return "when must compare against a token";
        }
        let c = s[a];
        if (c.kind === "enum") {
            if (!c.values.includes(n)) {
                return `when compares ${a} against a value outside its enum \u2014 dead rule`;
            }
        } else if (c.kind !== "token") {
            return `when field ${a} must be kind token or enum`;
        }
        return null;
    };
    if (r.length === 2 && r[0] === "null" && r[1] === "when") {
        return k(e.when) ?? u(e.null, "null");
    }
    if (r.length === 2 && r[0] === "exactlyOneOf" && r[1] === "when") {
        return k(e.when) ?? u(e.exactlyOneOf, "exactlyOneOf");
    }
    if (r.length === 2 && r[0] === "forKey" && r[1] === "null") {
        if (!g(e.forKey)) {
            return "forKey must be a token";
        }
        return u(e.null, "null");
    }
    return "unknown invariant shape";
}
function b6o(e, s) {
    if (Buffer.byteLength(e, "utf-8") > O) {
        return null;
    }
    let i;
    try {
        i = X(e);
    } catch  {
        return null;
    }
    if (!L(i)) {
        return null;
    }
    let o = Object.keys(i);
    if (o.length !== 1 || o[0] !== "items") {
        return null;
    }
    let i_items = i.items;
    if (!Array.isArray(i_items) || i_items.length > s.maxEntries) {
        return null;
    }
    let u = Object.keys(s.fields).sort();
    let k = [];
    let l = new Set;
    for (let f of i_items){
        if (!L(f)) {
            return null;
        }
        let a = Object.keys(f).sort();
        if (a.length !== u.length || a.some((d, m)=>d !== u[m])) {
            return null;
        }
        let n = Object.create(null);
        for (let d of u){
            let m = s.fields[d];
            let t = f[d];
            if (t === null) {
                if (m.nullable !== true) {
                    return null;
                }
                n[d] = null;
                continue;
            }
            switch(m.kind){
                case "token":
                    if (!g(t)) {
                        return null;
                    }
                    n[d] = t;
                    break;
                case "enum":
                    if (typeof t !== "string" || !m.values.includes(t)) {
                        return null;
                    }
                    n[d] = t;
                    break;
                case "tokenArray":
                    {
                        if (!Array.isArray(t) || t.length < m.minItems || t.length > m.maxItems || t.some((y)=>!g(y)) || new Set(t).size !== t.length) {
                            return null;
                        }
                        n[d] = t.slice();
                        break;
                    }
                case "ref":
                    {
                        if (typeof t !== "string") {
                            return null;
                        }
                        let y = f[m.into];
                        if (!Array.isArray(y) || !y.includes(t)) {
                            return null;
                        }
                        n[d] = t;
                        break;
                    }
                case "text":
                    if (typeof t !== "string" || GGt(t) === null) {
                        return null;
                    }
                    n[d] = t;
                    break;
            }
        }
        let c = n[s.key];
        if (typeof c !== "string" || l.has(c)) {
            return null;
        }
        l.add(c);
        k.push(n);
    }
    for (let f of s.invariants ?? []){
        for (let a of k){
            if (!N(f, a, s.key)) {
                return null;
            }
        }
    }
    return k;
}
function N(e, s, key) {
    if ("forKey" in e) {
        if (s[key] !== e.forKey) {
            return true;
        }
        return e.null.every((r)=>s[r] === null);
    }
    let o = Object.keys(e.when)[0];
    if (s[o] !== e.when[o]) {
        return true;
    }
    if ("null" in e) {
        return e.null.every((r)=>s[r] === null);
    }
    return F(e.exactlyOneOf, (r)=>s[r] !== null) === 1;
}
function gZn(e) {
    if (Array.isArray(e)) {
        return `[${e.map((s)=>gZn(s) ?? "null").join(",")}]`;
    }
    if (e !== null && typeof e === "object") {
        return `{${Object.keys(e).sort().flatMap((i)=>{
            let o = gZn(e[i]);
            if (o === undefined) {
                return [];
            }
            return [
                `${JSON.stringify(i)}:${o}`
            ];
        }).join(",")}}`;
    }
    return JSON.stringify(e);
}
function b() {
    let e = ee();
    if (e.interactionSchemas === undefined) {
        e.interactionSchemas = {
            byName: new Map,
            islandOwners: new Map,
            metaVerdicts: new Map
        };
        _({
            doc: zqr,
            enabled: ()=>S.isOpen(),
            derive
        });
    }
    return e.interactionSchemas;
}
function _(e) {
    let { name, island } = e.doc;
    let { byName, islandOwners } = b();
    if (byName.has(name)) {
        throw Error("interaction schema name already registered");
    }
    if (islandOwners.has(island)) {
        throw Error("interaction schema island id already owned — one island id, one grammar");
    }
    byName.set(name, e);
    islandOwners.set(island, name);
}
function iGt(e) {
    let { byName, metaVerdicts } = b();
    let reg = byName.get(e);
    if (reg === undefined) {
        return {
            ok: false,
            reason: "unknown"
        };
    }
    let r = metaVerdicts.get(e);
    if (r === undefined) {
        r = R(reg.doc);
        metaVerdicts.set(e, r);
    }
    if (r !== null) {
        return {
            ok: false,
            reason: "invalid"
        };
    }
    return {
        ok: true,
        reg
    };
}
function S6o() {
    return [
        ...b().byName.entries()
    ].filter(([, e])=>e.enabled()).map(([e])=>e);
}
function w6o() {
    return [
        ...b().byName.keys()
    ];
}
function v6o(e, s) {
    if (e.derive === undefined) {
        return {
            ok: true
        };
    }
    let i;
    try {
        i = e.derive(s);
    } catch  {
        return {
            ok: false
        };
    }
    if (!L(i)) {
        return {
            ok: false
        };
    }
    let o = Object.keys(i);
    if (o.length > Wqr) {
        return {
            ok: false
        };
    }
    let derived = {};
    for (let u of o){
        let k = i[u];
        if (!g(u) || !g(k)) {
            return {
                ok: false
            };
        }
        derived[u] = k;
    }
    return {
        ok: true,
        derived
    };
}
var zqr = {
    format: 1,
    name: "workshop-decisions",
    island: "ws-decisions",
    key: "id",
    maxEntries: 20,
    fields: {
        id: {
            kind: "token"
        },
        opts: {
            kind: "tokenArray",
            minItems: 2,
            maxItems: 5,
            unique: true
        },
        state: {
            kind: "enum",
            values: [
                "open",
                "resolved"
            ]
        },
        choice: {
            kind: "ref",
            into: "opts",
            nullable: true
        },
        custom: {
            kind: "text",
            nullable: true
        }
    },
    invariants: [
        {
            when: {
                state: "open"
            },
            null: [
                "choice",
                "custom"
            ]
        },
        {
            when: {
                state: "resolved"
            },
            exactlyOneOf: [
                "choice",
                "custom"
            ]
        },
        {
            forKey: "get-started",
            null: [
                "custom"
            ]
        }
    ]
};
function derive(e) {
    let s = e.map((i)=>({
            id: i.id,
            opts: i.opts.slice(),
            state: i.state,
            choice: i.choice,
            custom: i.custom
        }));
    return {
        state: VGt(s)
    };
}
class A {
    gate = ()=>false;
    register(e) {
        this.gate = e;
    }
    isOpen() {
        return this.gate();
    }
}
var S = new A;
function E6o(e) {
    S.register(e);
}
export { BX, pZn, fZn, mZn, Wqr, b6o, gZn, iGt, S6o, w6o, v6o, zqr, E6o };
