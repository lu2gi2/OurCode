function dCr(e) {
    let t = Object.values(e).filter((n)=>typeof n === "number");
    return Object.entries(e).filter(([n, i])=>t.indexOf(+n) === -1).map(([n, i])=>i);
}
function eTo(e, t = "|") {
    return e.map((r)=>rTo(r)).join(t);
}
function Uzn(e, t) {
    if (typeof t === "bigint") {
        return t.toString();
    }
    return t;
}
function Bzn(e) {
    return {
        get value () {
            {
                let r = e();
                Object.defineProperty(this, "value", {
                    value: r
                });
                return r;
            }
            throw Error("cached value already set");
        }
    };
}
function hPs(e) {
    return e === null || e === undefined;
}
function lrn(e) {
    let t = e.startsWith("^") ? 1 : 0;
    let r = e.endsWith("$") ? e.length - 1 : e.length;
    return e.slice(t, r);
}
function yPs(e, t) {
    let r = e / t;
    let n = Math.round(r);
    let i = 4 * Number.EPSILON * Math.max(Math.abs(r), 1);
    if (Math.abs(r - n) < i) {
        return 0;
    }
    return r - n;
}
const j = Symbol("evaluating");
function crn(e, t, r) {
    let n;
    Object.defineProperty(e, t, {
        get () {
            if (n === j) {
                return;
            }
            if (n === undefined) {
                n = j;
                n = r();
            }
            return n;
        },
        set (i) {
            Object.defineProperty(e, t, {
                value: i
            });
        },
        configurable: true
    });
}
function Fz(e, t, r) {
    Object.defineProperty(e, t, {
        value: r,
        writable: true,
        enumerable: true,
        configurable: true
    });
}
function Rut(...e) {
    let t = {};
    for (let r of e){
        let n = Object.getOwnPropertyDescriptors(r);
        Object.assign(t, n);
    }
    return Object.defineProperties({}, t);
}
function _Ps(e) {
    return JSON.stringify(e);
}
function bPs(e) {
    return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const tTo = "captureStackTrace" in Error ? Error.captureStackTrace : (...e)=>{};
function drn(e) {
    return typeof e === "object" && e !== null && !Array.isArray(e);
}
const SPs = Bzn(()=>{
    if (globalThis___zod_globalConfig.jitless) {
        return false;
    }
    if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
        return false;
    }
    try {
        new Function("");
        return true;
    } catch (e) {
        return false;
    }
});
function AHt(e) {
    if (drn(e) === false) {
        return false;
    }
    let e_constructor = e.constructor;
    if (e_constructor === undefined) {
        return true;
    }
    if (typeof e_constructor !== "function") {
        return true;
    }
    let t_prototype = e_constructor.prototype;
    if (drn(t_prototype) === false) {
        return false;
    }
    if (Object.prototype.hasOwnProperty.call(t_prototype, "isPrototypeOf") === false) {
        return false;
    }
    return true;
}
function nTo(e) {
    if (AHt(e)) {
        return {
            ...e
        };
    }
    if (Array.isArray(e)) {
        return [
            ...e
        ];
    }
    if (e instanceof Map) {
        return new Map(e);
    }
    if (e instanceof Set) {
        return new Set(e);
    }
    return e;
}
const wPs = new Set([
    "string",
    "number",
    "symbol"
]);
function xut(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function AUe(e, t, r) {
    let n = new e._zod.constr(t ?? e._zod.def);
    if (!t || r?.parent) {
        n._zod.parent = e;
    }
    return n;
}
function Tl(e) {
    let t = e;
    if (!t) {
        return {};
    }
    if (typeof t === "string") {
        return {
            error: ()=>t
        };
    }
    if (t?.message !== undefined) {
        if (t?.error !== undefined) {
            throw Error("Cannot specify both `message` and `error` params");
        }
        t.error = t.message;
    }
    delete t.message;
    if (typeof t.error === "string") {
        return {
            ...t,
            error: ()=>t.error
        };
    }
    return t;
}
function rTo(e) {
    if (typeof e === "bigint") {
        return `${e.toString()}n`;
    }
    if (typeof e === "string") {
        return `"${e}"`;
    }
    return `${e}`;
}
function vPs(e) {
    return Object.keys(e).filter((t)=>e[t]._zod.optin !== undefined && e[t]._zod.optout === "optional");
}
const EPs = {
    safeint: [
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER
    ],
    int32: [
        -2147483648,
        2147483647
    ],
    uint32: [
        0,
        4294967295
    ],
    float32: [
        -340282346638528860000000000000000000000,
        340282346638528860000000000000000000000
    ],
    float64: [
        -Number.MAX_VALUE,
        Number.MAX_VALUE
    ]
};
function AFs(e, t) {
    let def = e._zod.def;
    let r_checks = def.checks;
    if (r_checks && r_checks.length > 0) {
        throw Error(".pick() cannot be used on object schemas containing refinements");
    }
    let o = Rut(e._zod.def, {
        get shape () {
            let c = {};
            for (let s of Reflect.ownKeys(t)){
                if (!Object.prototype.hasOwnProperty.call(def.shape, s)) {
                    throw Error(`Unrecognized key: "${String(s)}"`);
                }
                if (!t[s]) {
                    continue;
                }
                Fz(c, s, def.shape[s]);
            }
            Fz(this, "shape", c);
            return c;
        },
        checks: []
    });
    return AUe(e, o);
}
function CFs(e, t) {
    let def = e._zod.def;
    let r_checks = def.checks;
    if (r_checks && r_checks.length > 0) {
        throw Error(".omit() cannot be used on object schemas containing refinements");
    }
    let o = Rut(e._zod.def, {
        get shape () {
            let c = {
                ...e._zod.def.shape
            };
            for (let s of Reflect.ownKeys(t)){
                if (!Object.prototype.hasOwnProperty.call(def.shape, s)) {
                    throw Error(`Unrecognized key: "${String(s)}"`);
                }
                if (!t[s]) {
                    continue;
                }
                delete c[s];
            }
            Fz(this, "shape", c);
            return c;
        },
        checks: []
    });
    return AUe(e, o);
}
function RFs(e, t) {
    if (!AHt(t)) {
        throw Error("Invalid input to extend: expected a plain object");
    }
    let checks = e._zod.def.checks;
    if (checks && checks.length > 0) {
        let o = e._zod.def.shape;
        for (let c of Reflect.ownKeys(t)){
            if (Object.getOwnPropertyDescriptor(o, c) !== undefined) {
                throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
            }
        }
    }
    let i = Rut(e._zod.def, {
        get shape () {
            let o = {
                ...e._zod.def.shape,
                ...t
            };
            Fz(this, "shape", o);
            return o;
        }
    });
    return AUe(e, i);
}
function xFs(e, t) {
    if (!AHt(t)) {
        throw Error("Invalid input to safeExtend: expected a plain object");
    }
    let r = Rut(e._zod.def, {
        get shape () {
            let n = {
                ...e._zod.def.shape,
                ...t
            };
            Fz(this, "shape", n);
            return n;
        }
    });
    return AUe(e, r);
}
function PFs(e, t) {
    if (!t?._zod?.def) {
        throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
    }
    if (e._zod.def.checks?.length) {
        throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
    }
    let r = Rut(e._zod.def, {
        get shape () {
            let n = {
                ...e._zod.def.shape,
                ...t._zod.def.shape
            };
            Fz(this, "shape", n);
            return n;
        },
        get catchall () {
            return t._zod.def.catchall;
        },
        checks: t._zod.def.checks ?? []
    });
    return AUe(e, r);
}
function kPs(e, t, r, n = "partial") {
    let checks = t._zod.def.checks;
    if (checks && checks.length > 0) {
        throw Error(`.${n}() cannot be used on object schemas containing refinements`);
    }
    let s = Rut(t._zod.def, {
        get shape () {
            let shape = t._zod.def.shape;
            let g = {
                ...shape
            };
            if (r) {
                for (let f of Reflect.ownKeys(r)){
                    if (!Object.prototype.hasOwnProperty.call(shape, f)) {
                        throw Error(`Unrecognized key: "${String(f)}"`);
                    }
                    if (!r[f]) {
                        continue;
                    }
                    g[f] = e ? new e({
                        type: "optional",
                        innerType: shape[f]
                    }) : shape[f];
                }
            } else {
                for (let f of Reflect.ownKeys(shape)){
                    g[f] = e ? new e({
                        type: "optional",
                        innerType: shape[f]
                    }) : shape[f];
                }
            }
            Fz(this, "shape", g);
            return g;
        },
        checks: []
    });
    return AUe(t, s);
}
function IFs(e, t, r) {
    let n = Rut(t._zod.def, {
        get shape () {
            let shape = t._zod.def.shape;
            let o = {
                ...shape
            };
            if (r) {
                for (let c of Reflect.ownKeys(r)){
                    if (!Object.prototype.hasOwnProperty.call(o, c)) {
                        throw Error(`Unrecognized key: "${String(c)}"`);
                    }
                    if (!r[c]) {
                        continue;
                    }
                    o[c] = new e({
                        type: "nonoptional",
                        innerType: shape[c]
                    });
                }
            } else {
                for (let c of Reflect.ownKeys(shape)){
                    o[c] = new e({
                        type: "nonoptional",
                        innerType: shape[c]
                    });
                }
            }
            Fz(this, "shape", o);
            return o;
        }
    });
    return AUe(t, n);
}
function CHt(e, t = 0) {
    if (e.aborted === true) {
        return true;
    }
    for(let r = t; r < e.issues.length; r++){
        if (e.issues[r]?.continue !== true) {
            return true;
        }
    }
    return false;
}
function TPs(e, t = 0) {
    if (e.aborted === true) {
        return true;
    }
    for(let r = t; r < e.issues.length; r++){
        if (e.issues[r]?.continue === false) {
            return true;
        }
    }
    return false;
}
function CUe(e, t) {
    return t.map((r)=>{
        var n;
        (n = r).path ?? (n.path = []);
        r.path.unshift(e);
        return r;
    });
}
function x(e) {
    if (typeof e === "string") {
        return e;
    }
    return e?.message;
}
function oTo(e, t, r) {
    let n;
    for(let i = t; i < e.length; i++){
        (n = e[i]).schema ?? (n.schema = r);
    }
}
function RUe(e, t, r) {
    let n;
    let i = e.inst?._zod?.traits;
    if (i?.has("$ZodType")) {
        if (i.has("$ZodCheck")) {
            (n = e).schema ?? (n.schema = e.inst);
        } else {
            e.schema = e.inst;
        }
    }
    let o = e.schema !== e.inst ? e.schema?._zod.def?.error : undefined;
    let c = e.message ? e.message : x(e.inst?._zod.def?.error?.(e)) ?? x(o?.(e)) ?? x(t?.error?.(e)) ?? x(r.customError?.(e)) ?? x(r.localeError?.(e)) ?? "Invalid input";
    let { inst, schema, continue: _continue, input, ...rest } = e;
    rest.path ??= [];
    rest.message = c;
    if (t?.reportInput) {
        rest.input = input;
    }
    return rest;
}
const S = /[\uD800-\uDBFF]/;
function uCr(e) {
    let e_length = e.length;
    if (!S.test(e)) {
        return e_length;
    }
    let r = e_length;
    for(let n = 0; n < e_length - 1; n++){
        if ((e.charCodeAt(n) & 64512) === 55296 && (e.charCodeAt(n + 1) & 64512) === 56320) {
            r--;
            n++;
        }
    }
    return r;
}
function pCr(e) {
    if (Array.isArray(e)) {
        return "array";
    }
    if (typeof e === "string") {
        return "string";
    }
    return "unknown";
}
function APs(e) {
    let t = typeof e;
    switch(t){
        case "number":
            if (Number.isNaN(e)) {
                return "nan";
            }
            return "number";
        case "object":
            {
                if (e === null) {
                    return "null";
                }
                if (Array.isArray(e)) {
                    return "array";
                }
                let r = e;
                if (r && Object.getPrototypeOf(r) !== Object.prototype && "constructor" in r && r.constructor) {
                    return r.constructor.name;
                }
            }
    }
    return t;
}
function RHt(...e) {
    let [t, input, inst] = e;
    if (typeof t === "string") {
        return {
            message: t,
            code: "custom",
            input,
            inst
        };
    }
    return {
        ...t
    };
}
function P(e, t) {
    for(let r in t){
        let n = Object.getOwnPropertyDescriptor(t, r);
        if (n.get) {
            Object.defineProperty(e, r, {
                ...n,
                enumerable: false
            });
        } else {
            A(e, r, n.value);
        }
    }
}
function xHt(e, t, r, n = true) {
    Object.defineProperty(e, t, {
        configurable: true,
        writable: true,
        enumerable: n,
        value: r
    });
    return r;
}
function sTo(e, t, r) {
    return xHt(e, t, r, false);
}
function A(e, t, r) {
    Object.defineProperty(e, t, {
        configurable: true,
        get () {
            if (this == null) {
                return r;
            }
            return xHt(this, t, r.bind(this));
        },
        set (n) {
            xHt(this, t, n);
        }
    });
}
function k(e, t) {
    let r = Object.getPrototypeOf(e);
    if (t in r) {
        return undefined;
    }
    return r;
}
let m;
let h = false;
const v = {
    configurable: true,
    get () {
        h = true;
    }
};
function tw(e, t, r) {
    let n = Object.getPrototypeOf(e._zod);
    if (t in n && m !== e._zod) {
        m = undefined;
        return;
    }
    m = e._zod;
    Object.defineProperty(n, t, {
        configurable: true,
        get () {
            Object.defineProperty(this, t, v);
            let i = h;
            h = false;
            try {
                let o = r(this);
                if (h) {
                    delete this[t];
                } else {
                    Object.defineProperty(this, t, {
                        configurable: true,
                        writable: true,
                        value: o
                    });
                }
                h = h || i;
                return o;
            } catch (error) {
                delete this[t];
                h = h || i;
                throw error;
            }
        },
        set (i) {
            Object.defineProperty(this, t, {
                configurable: true,
                writable: true,
                value: i
            });
        }
    });
}
function OFs(e, t, r, n) {
    let i = k(e, t);
    if (!i) {
        return;
    }
    Object.defineProperty(i, t, {
        configurable: true,
        get () {
            let o = {
                configurable: true,
                writable: true,
                enumerable: n,
                value: undefined
            };
            Object.defineProperty(this, t, o);
            o.value = r(this);
            Object.defineProperty(this, t, o);
            return o.value;
        },
        set (o) {
            Object.defineProperty(this, t, {
                configurable: true,
                writable: true,
                enumerable: n,
                value: o
            });
        }
    });
}
const T = "~constantCatch";
function CPs(e) {
    let t = ()=>e;
    t[T] = true;
    return t;
}
let z;
const Uz = Object.freeze({
    status: "aborted"
});
const O = {
    value: undefined,
    enumerable: false
};
let E = "captureStackTrace" in Error ? Error : null;
function N(e) {
    let t = E;
    if (t) {
        let r = t.stackTraceLimit;
        if (typeof r === "number") {
            try {
                t.stackTraceLimit = 0;
            } catch  {
                E = null;
                return new e;
            }
            try {
                return new e;
            } finally{
                t.stackTraceLimit = r;
            }
        }
    }
    return new e;
}
function dr(e, t, r, n) {
    let i = {};
    function o(u) {
        this.def = u;
        this.constr = a;
        this.traits = new Set;
    }
    o.prototype = i;
    let c = r;
    let s = c && new WeakSet;
    function p(u, d) {
        if (!u._zod) {
            O.value = new o(d);
            try {
                Object.defineProperty(u, "_zod", O);
            } finally{
                O.value = undefined;
            }
        }
        if (u._zod.traits.has(e)) {
            return;
        }
        u._zod.traits.add(e);
        t(u, d);
        if (s) {
            let l = Object.getPrototypeOf(u);
            let _ = u._zod.constr.prototype;
            let b = l;
            while(b && b !== _){
                b = Object.getPrototypeOf(b);
            }
            let w = b ?? l;
            if (!s.has(w)) {
                s.add(w);
                P(w, c);
            }
        }
        let a_prototype = a.prototype;
        for(let l in a_prototype){
            if (!Object.prototype.hasOwnProperty.call(a_prototype, l)) {
                continue;
            }
            if (!(l in u)) {
                u[l] = a_prototype[l].bind(u);
            }
        }
    }
    let g = n?.Parent ?? Object;
    class f extends g {
    }
    Object.defineProperty(f, "name", {
        value: e
    });
    function a(u) {
        let d = n?.Parent ? N(f) : this;
        p(d, u);
        let deferred = d._zod.deferred;
        if (deferred) {
            for (let _ of deferred){
                _();
            }
            d._zod.deferred = undefined;
        }
        let l = globalThis.__zod_globalConfig?.postProcessor;
        if (l) {
            l(d);
        }
        return d;
    }
    Object.defineProperty(a, "init", {
        value: p
    });
    Object.defineProperty(a, Symbol.hasInstance, {
        value: (u)=>{
            if (n?.Parent && u instanceof n.Parent) {
                return true;
            }
            return u?._zod?.traits?.has(e);
        }
    });
    Object.defineProperty(a, "name", {
        value: e
    });
    return a;
}
class k5e extends Error {
    constructor(){
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}
class jzn extends Error {
    constructor(e){
        super(`Encountered unidirectional transform during encode: ${e}`);
        this.name = "ZodEncodeError";
    }
}
(z = globalThis).__zod_globalConfig ?? (z.__zod_globalConfig = {});
var globalThis___zod_globalConfig = globalThis.__zod_globalConfig;
function Y8(e) {
    if (e) {
        Object.assign(globalThis___zod_globalConfig, e);
    }
    return globalThis___zod_globalConfig;
}
export { dCr, eTo, Uzn, Bzn, hPs, lrn, yPs, crn, Fz, Rut, _Ps, bPs, tTo, drn, SPs, AHt, nTo, wPs, xut, AUe, Tl, rTo, vPs, EPs, AFs, CFs, RFs, xFs, PFs, kPs, IFs, CHt, TPs, CUe, oTo, RUe, uCr, pCr, APs, RHt, xHt, sTo, tw, OFs, CPs, Uz, dr, k5e, jzn, globalThis___zod_globalConfig as pZ, Y8 };
