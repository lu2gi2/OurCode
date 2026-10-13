import { dCr, eTo, Uzn, Bzn, hPs, lrn, yPs, crn, Fz, Rut, _Ps, bPs, tTo, drn, SPs, AHt, nTo, wPs, xut, AUe, Tl, rTo, vPs, EPs, AFs, CFs, RFs, xFs, PFs, kPs, IFs, CHt, TPs, CUe, oTo, RUe, uCr, pCr, APs, RHt, xHt, sTo, tw, OFs, CPs, dr, k5e, jzn, pZ, Y8 } from "/$bunfs/root/chunk-85v8km1j.js";
const Ft = /^[cC][0-9a-z]{6,}$/;
const Ut = /^[0-9a-z]+$/;
const Mt = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/;
const Jt = /^[0-9a-vA-V]{20}$/;
const Bt = /^[A-Za-z0-9]{27}$/;
const Vt = /^[a-zA-Z0-9_-]{21}$/;
function Kt(e) {
    return new RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
const Wt = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
const Gt = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
const ye = (e)=>{
    if (!e) {
        return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
    }
    return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
const Yt = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
const Fs = "^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function qt() {
    return new RegExp(Fs, "u");
}
const Xt = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const Ht = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
const Qt = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
const er = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const tr = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
const $e = /^[A-Za-z0-9_-]*$/;
const rr = /^https?$/;
const or = /^\+[1-9]\d{6,14}$/;
const nr = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function Us(e) {
    return new RegExp(`^${e}$`);
}
const sr = Us(nr);
function ze(e) {
    if (typeof e.precision === "number") {
        if (e.precision === -1) {
            return "(?:[01]\\d|2[0-3]):[0-5]\\d";
        }
        if (e.precision === 0) {
            return "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
        }
        return `(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${e.precision}}`;
    }
    if (e.seconds) {
        return "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(?:\\.\\d+)?";
    }
    return "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
}
function ir(e) {
    return new RegExp(`^${ze(e)}$`);
}
function cr(e) {
    let t = [
        "Z"
    ];
    if (e.offset) {
        t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    }
    let r = `${ze({
        precision: e.precision,
        seconds: true
    })}(?:${t.join("|")})`;
    let n = e.local ? `${r}|${ze({
        precision: e.precision
    })}` : r;
    return new RegExp(`^${nr}T(?:${n})$`);
}
const ur = (bag)=>{
    let t = bag ? `[\\s\\S]{${bag?.minimum ?? 0},${bag?.maximum ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${t}$`);
};
const ee = /^-?\d+$/;
const D = /^-?\d+(?:\.\d+)?$/;
const ar = /^(?:true|false)$/i;
const lr = /^null$/i;
const pr = /^undefined$/i;
const fr = /^[^A-Z]*$/;
const mr = /^[^a-z]*$/;
const k = dr("$ZodCheck", (e, t)=>{
    var r;
    e._zod ??= {};
    e._zod.def = t;
    (r = e._zod).onattach ?? (r.onattach = []);
});
const be = (e)=>{
    let e_value = e.value;
    return !hPs(e_value) && e_value.length !== undefined;
};
const te = {
    number: "number",
    bigint: "bigint",
    object: "date"
};
const ke = dr("$ZodCheckLessThan", (e, t)=>{
    k.init(e, t);
    let r = te[typeof t.value];
    e._zod.onattach.push((n)=>{
        let bag = n._zod.bag;
        let i = (t.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
        if (t.value < i) {
            if (t.inclusive) {
                bag.maximum = t.value;
            } else {
                bag.exclusiveMaximum = t.value;
            }
        }
    });
    e._zod.check = (n)=>{
        if (t.inclusive ? n.value <= t.value : n.value < t.value) {
            return;
        }
        n.issues.push({
            origin: te[typeof n.value] ?? r,
            code: "too_big",
            maximum: typeof t.value === "object" ? t.value.getTime() : t.value,
            input: n.value,
            inclusive: t.inclusive,
            inst: e,
            continue: !t.abort
        });
    };
});
const Ze = dr("$ZodCheckGreaterThan", (e, t)=>{
    k.init(e, t);
    let r = te[typeof t.value];
    e._zod.onattach.push((n)=>{
        let bag = n._zod.bag;
        let i = (t.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
        if (t.value > i) {
            if (t.inclusive) {
                bag.minimum = t.value;
            } else {
                bag.exclusiveMinimum = t.value;
            }
        }
    });
    e._zod.check = (n)=>{
        if (t.inclusive ? n.value >= t.value : n.value > t.value) {
            return;
        }
        n.issues.push({
            origin: te[typeof n.value] ?? r,
            code: "too_small",
            minimum: typeof t.value === "object" ? t.value.getTime() : t.value,
            input: n.value,
            inclusive: t.inclusive,
            inst: e,
            continue: !t.abort
        });
    };
});
const _r = dr("$ZodCheckMultipleOf", (e, t)=>{
    k.init(e, t);
    e._zod.onattach.push((r)=>{
        var n;
        (n = r._zod.bag).multipleOf ?? (n.multipleOf = t.value);
    });
    e._zod.check = (r)=>{
        if (typeof r.value !== typeof t.value) {
            throw Error("Cannot mix number and bigint in multiple_of check.");
        }
        if (typeof r.value === "bigint" ? t.value !== BigInt(0) && r.value % t.value === BigInt(0) : yPs(r.value, t.value) === 0) {
            return;
        }
        r.issues.push({
            origin: typeof r.value,
            code: "not_multiple_of",
            divisor: t.value,
            input: r.value,
            inst: e,
            continue: !t.abort
        });
    };
});
const gr = dr("$ZodCheckNumberFormat", (e, t)=>{
    k.init(e, t);
    t.format = t.format || "float64";
    let r = t.format?.includes("int");
    let n = r ? "int" : "number";
    let [s, i] = EPs[t.format];
    e._zod.onattach.push((c)=>{
        let bag = c._zod.bag;
        bag.format = t.format;
        bag.minimum = s;
        bag.maximum = i;
        if (r) {
            bag.pattern = ee;
        }
    });
    e._zod.check = (c)=>{
        let c_value = c.value;
        if (r) {
            if (!Number.isInteger(c_value)) {
                c.issues.push({
                    expected: n,
                    format: t.format,
                    code: "invalid_type",
                    continue: false,
                    input: c_value,
                    inst: e
                });
                return;
            }
            if (!Number.isSafeInteger(c_value)) {
                if (c_value > 0) {
                    c.issues.push({
                        input: c_value,
                        code: "too_big",
                        maximum: Number.MAX_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst: e,
                        origin: n,
                        inclusive: true,
                        continue: !t.abort
                    });
                } else {
                    c.issues.push({
                        input: c_value,
                        code: "too_small",
                        minimum: Number.MIN_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst: e,
                        origin: n,
                        inclusive: true,
                        continue: !t.abort
                    });
                }
                return;
            }
        }
        if (c_value < s) {
            c.issues.push({
                origin: "number",
                input: c_value,
                code: "too_small",
                minimum: s,
                inclusive: true,
                inst: e,
                continue: !t.abort
            });
        }
        if (c_value > i) {
            c.issues.push({
                origin: "number",
                input: c_value,
                code: "too_big",
                maximum: i,
                inclusive: true,
                inst: e,
                continue: !t.abort
            });
        }
    };
});
const xr = dr("$ZodCheckMaxLength", (e, t)=>{
    var r;
    k.init(e, t);
    (r = e._zod.def).when ?? (r.when = be);
    e._zod.onattach.push((n)=>{
        let s = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (t.maximum < s) {
            n._zod.bag.maximum = t.maximum;
        }
    });
    e._zod.check = (n)=>{
        let n_value = n.value;
        let s_length = n_value.length;
        if ((typeof n_value === "string" && s_length > t.maximum ? uCr(n_value) : s_length) <= t.maximum) {
            return;
        }
        let a = pCr(n_value);
        n.issues.push({
            origin: a,
            code: "too_big",
            maximum: t.maximum,
            inclusive: true,
            input: n_value,
            inst: e,
            continue: !t.abort
        });
    };
});
const vr = dr("$ZodCheckMinLength", (e, t)=>{
    var r;
    k.init(e, t);
    (r = e._zod.def).when ?? (r.when = be);
    e._zod.onattach.push((n)=>{
        let s = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (t.minimum > s) {
            n._zod.bag.minimum = t.minimum;
        }
    });
    e._zod.check = (n)=>{
        let n_value = n.value;
        let s_length = n_value.length;
        if ((typeof n_value === "string" && s_length >= t.minimum && s_length < t.minimum * 2 ? uCr(n_value) : s_length) >= t.minimum) {
            return;
        }
        let a = pCr(n_value);
        n.issues.push({
            origin: a,
            code: "too_small",
            minimum: t.minimum,
            inclusive: true,
            input: n_value,
            inst: e,
            continue: !t.abort
        });
    };
});
const zr = dr("$ZodCheckLengthEquals", (e, t)=>{
    var r;
    k.init(e, t);
    (r = e._zod.def).when ?? (r.when = be);
    e._zod.onattach.push((n)=>{
        let bag = n._zod.bag;
        bag.minimum = t.length;
        bag.maximum = t.length;
        bag.length = t.length;
    });
    e._zod.check = (n)=>{
        let n_value = n.value;
        let s_length = n_value.length;
        let c = typeof n_value === "string" && s_length >= t.length && s_length <= t.length * 2 ? uCr(n_value) : s_length;
        if (c === t.length) {
            return;
        }
        let a = pCr(n_value);
        let l = c > t.length;
        n.issues.push({
            origin: a,
            ...l ? {
                code: "too_big",
                maximum: t.length
            } : {
                code: "too_small",
                minimum: t.length
            },
            inclusive: true,
            exact: true,
            input: n.value,
            inst: e,
            continue: !t.abort
        });
    };
});
const L = dr("$ZodCheckStringFormat", (e, t)=>{
    var r;
    var n;
    k.init(e, t);
    e._zod.onattach.push((s)=>{
        let bag = s._zod.bag;
        bag.format = t.format;
        if (t.pattern) {
            bag.patterns ??= new Set;
            bag.patterns.add(t.pattern);
        }
    });
    if (t.pattern) {
        (r = e._zod).check ?? (r.check = (s)=>{
            t.pattern.lastIndex = 0;
            if (t.pattern.test(s.value)) {
                return;
            }
            s.issues.push({
                origin: "string",
                code: "invalid_format",
                format: t.format,
                input: s.value,
                ...t.pattern ? {
                    pattern: t.pattern.toString()
                } : {},
                inst: e,
                continue: !t.abort
            });
        });
    } else {
        (n = e._zod).check ?? (n.check = ()=>{});
    }
});
const yr = dr("$ZodCheckRegex", (e, t)=>{
    L.init(e, t);
    e._zod.check = (r)=>{
        t.pattern.lastIndex = 0;
        if (t.pattern.test(r.value)) {
            return;
        }
        r.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "regex",
            input: r.value,
            pattern: t.pattern.toString(),
            inst: e,
            continue: !t.abort
        });
    };
});
const $r = dr("$ZodCheckLowerCase", (e, t)=>{
    t.pattern ??= fr;
    L.init(e, t);
});
const br = dr("$ZodCheckUpperCase", (e, t)=>{
    t.pattern ??= mr;
    L.init(e, t);
});
const kr = dr("$ZodCheckIncludes", (e, t)=>{
    k.init(e, t);
    let r = xut(t.includes);
    let n = new RegExp(typeof t.position === "number" ? `^.{${t.position},}${r}` : r);
    t.pattern = n;
    e._zod.onattach.push((s)=>{
        let bag = s._zod.bag;
        bag.patterns ??= new Set;
        bag.patterns.add(n);
    });
    e._zod.check = (s)=>{
        if (s.value.includes(t.includes, t.position)) {
            return;
        }
        s.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: t.includes,
            input: s.value,
            inst: e,
            continue: !t.abort
        });
    };
});
const Zr = dr("$ZodCheckStartsWith", (e, t)=>{
    k.init(e, t);
    let r = new RegExp(`^${xut(t.prefix)}.*`);
    t.pattern ??= r;
    e._zod.onattach.push((n)=>{
        let bag = n._zod.bag;
        bag.patterns ??= new Set;
        bag.patterns.add(r);
    });
    e._zod.check = (n)=>{
        if (n.value.startsWith(t.prefix)) {
            return;
        }
        n.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: t.prefix,
            input: n.value,
            inst: e,
            continue: !t.abort
        });
    };
});
const wr = dr("$ZodCheckEndsWith", (e, t)=>{
    k.init(e, t);
    let r = new RegExp(`.*${xut(t.suffix)}$`);
    t.pattern ??= r;
    e._zod.onattach.push((n)=>{
        let bag = n._zod.bag;
        bag.patterns ??= new Set;
        bag.patterns.add(r);
    });
    e._zod.check = (n)=>{
        if (n.value.endsWith(t.suffix)) {
            return;
        }
        n.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: t.suffix,
            input: n.value,
            inst: e,
            continue: !t.abort
        });
    };
});
const Pr = dr("$ZodCheckOverwrite", (e, t)=>{
    k.init(e, t);
    e._zod.check = (r)=>{
        r.value = t.tx(r.value);
    };
});
let Ir;
class Or {
    constructor(){
        this._map = new WeakMap;
        this._idmap = new Map;
    }
    add(e, ...t) {
        let r = t[0];
        this._map.set(e, r);
        if (r && typeof r === "object" && "id" in r) {
            this._idmap.set(r.id, e);
        }
        return this;
    }
    clear() {
        this._map = new WeakMap;
        this._idmap = new Map;
        return this;
    }
    remove(e) {
        let t = this._map.get(e);
        if (t && typeof t === "object" && "id" in t) {
            this._idmap.delete(t.id);
        }
        this._map.delete(e);
        return this;
    }
    get(e) {
        let parent = e._zod.parent;
        if (parent) {
            let r = {
                ...this.get(parent) ?? {}
            };
            delete r.id;
            let n = {
                ...r,
                ...this._map.get(e)
            };
            if (Object.keys(n).length) {
                return n;
            }
            return undefined;
        }
        return this._map.get(e);
    }
    has(e) {
        return this._map.has(e);
    }
}
function Ms() {
    return new Or;
}
(Ir = globalThis).__zod_globalRegistry ?? (Ir.__zod_globalRegistry = Ms());
const v5e = globalThis.__zod_globalRegistry;
class we {
    constructor(e = [], t = {}){
        this.content = [];
        this.indent = 0;
        this.args = e;
        this.closed = t;
    }
    indented(e) {
        this.indent += 1;
        e(this);
        this.indent -= 1;
    }
    write(e) {
        if (typeof e === "function") {
            e(this, {
                execution: "sync"
            });
            e(this, {
                execution: "async"
            });
            return;
        }
        let r = e.split(`
`).filter((i)=>i);
        let n = Math.min(...r.map((i)=>i.length - i.trimStart().length));
        let s = r.map((i)=>i.slice(n)).map((i)=>" ".repeat(this.indent * 2) + i);
        for (let i of s){
            this.content.push(i);
        }
    }
    compile() {
        let e = Function;
        let t = this?.content ?? [
            ""
        ];
        return new e(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${t.join(`
`)}
};`)(...Object.values(this.closed));
    }
}
function get() {
    let _zod = this._zod;
    _zod.message ??= JSON.stringify(_zod.def, Uzn, 2);
    return _zod.message;
}
function Bs(e) {
    this._zod.message = e;
}
const Vs = {
    get,
    set: Bs,
    enumerable: true,
    configurable: true
};
const Pe = {
    value: undefined,
    enumerable: false
};
const Se = {
    value: undefined,
    enumerable: false
};
const Tr = new WeakSet([
    Object.prototype,
    Error.prototype
]);
const Ar = (e, t)=>{
    e.name = "$ZodError";
    Pe.value = e._zod;
    Object.defineProperty(e, "_zod", Pe);
    Se.value = t;
    Object.defineProperty(e, "issues", Se);
    Pe.value = undefined;
    Se.value = undefined;
    Object.defineProperty(e, "message", Vs);
    let r = Object.getPrototypeOf(e);
    if (!Tr.has(r)) {
        Tr.add(r);
        Object.defineProperty(r, "toString", {
            configurable: true,
            enumerable: false,
            get () {
                let n = ()=>this.message;
                Object.defineProperty(this, "toString", {
                    value: n,
                    configurable: true,
                    writable: true
                });
                return n;
            },
            set (n) {
                Object.defineProperty(this, "toString", {
                    value: n,
                    configurable: true,
                    writable: true
                });
            }
        });
    }
};
const re = dr("$ZodError", Ar);
const Ie = dr("$ZodError", Ar, undefined, {
    Parent: Error
});
function Ks(fieldErrors, t, r) {
    if (!Object.prototype.hasOwnProperty.call(fieldErrors, t)) {
        if (t === "__proto__") {
            Object.defineProperty(fieldErrors, t, {
                value: r(),
                writable: true,
                enumerable: true,
                configurable: true
            });
        } else {
            fieldErrors[t] = r();
        }
    }
    return fieldErrors[t];
}
function Er(e, t = (r)=>r.message) {
    let fieldErrors = {};
    let formErrors = [];
    for (let s of e.issues){
        if (s.path.length > 0) {
            Ks(fieldErrors, s.path[0], ()=>[]).push(t(s));
        } else {
            formErrors.push(t(s));
        }
    }
    return {
        formErrors,
        fieldErrors
    };
}
function Nr(e, t = (r)=>r.message) {
    let r = {
        _errors: []
    };
    let n = (s, i = [])=>{
        for (let c of s.issues){
            if (c.code === "invalid_union" && c.errors.length) {
                c.errors.map((issues)=>n({
                        issues
                    }, [
                        ...i,
                        ...c.path
                    ]));
            } else if (c.code === "invalid_key") {
                n({
                    issues: c.issues
                }, [
                    ...i,
                    ...c.path
                ]);
            } else if (c.code === "invalid_element") {
                n({
                    issues: c.issues
                }, [
                    ...i,
                    ...c.path
                ]);
            } else {
                let a = [
                    ...i,
                    ...c.path
                ];
                if (a.length === 0) {
                    r._errors.push(t(c));
                } else {
                    let l = r;
                    let p = 0;
                    while(p < a.length){
                        let f = a[p];
                        let d = p === a.length - 1;
                        if (f === "_errors") {
                            if (d) {
                                l._errors.push(t(c));
                            }
                            p++;
                            continue;
                        }
                        if (!Object.prototype.hasOwnProperty.call(l, f)) {
                            Object.defineProperty(l, f, {
                                value: {
                                    _errors: []
                                },
                                enumerable: true,
                                writable: true,
                                configurable: true
                            });
                        }
                        let h = l[f];
                        if (d) {
                            h._errors.push(t(c));
                        }
                        l = h;
                        p++;
                    }
                }
            }
        }
    };
    n(e);
    return r;
}
function ne(e, t) {
    return {
        callee: t?.callee ?? e,
        Err: t?.Err
    };
}
const se = (e)=>{
    let t = (r, n, s, i)=>{
        let c = s ? {
            ...s,
            async: false
        } : {
            async: false
        };
        let a = r._zod.run({
            value: n,
            issues: []
        }, c);
        if (a instanceof Promise) {
            throw new k5e;
        }
        if (a.issues.length) {
            let l = new (i?.Err ?? e)(a.issues.map((p)=>RUe(p, c, Y8())));
            tTo(l, i?.callee ?? t);
            throw l;
        }
        return a.value;
    };
    return t;
};
const ie = (e)=>{
    let t = async (r, n, s, i)=>{
        let c = s ? {
            ...s,
            async: true
        } : {
            async: true
        };
        let a = r._zod.run({
            value: n,
            issues: []
        }, c);
        if (a instanceof Promise) {
            a = await a;
        }
        if (a.issues.length) {
            let l = new (i?.Err ?? e)(a.issues.map((p)=>RUe(p, c, Y8())));
            tTo(l, i?.callee ?? t);
            throw l;
        }
        return a.value;
    };
    return t;
};
const F = (e)=>(t, r, n)=>{
        let s = n ? {
            ...n,
            async: false
        } : {
            async: false
        };
        let i = t._zod.run({
            value: r,
            issues: []
        }, s);
        if (i instanceof Promise) {
            throw new k5e;
        }
        if (i.issues.length) {
            return {
                success: false,
                error: new (e ?? re)(i.issues.map((c)=>RUe(c, s, Y8())))
            };
        }
        return {
            success: true,
            data: i.value
        };
    };
const Dzn = F(Ie);
const J = (e)=>async (t, r, n)=>{
        let s = n ? {
            ...n,
            async: true
        } : {
            async: true
        };
        let i = t._zod.run({
            value: r,
            issues: []
        }, s);
        if (i instanceof Promise) {
            i = await i;
        }
        if (i.issues.length) {
            return {
                success: false,
                error: new e(i.issues.map((c)=>RUe(c, s, Y8())))
            };
        }
        return {
            success: true,
            data: i.value
        };
    };
const Cr = J(Ie);
const Rr = (e)=>{
    let t = se(e);
    let r = (n, s, i, c)=>{
        let a = i ? {
            ...i,
            direction: "backward"
        } : {
            direction: "backward"
        };
        return t(n, s, a, ne(r, c));
    };
    return r;
};
const Dr = (e)=>{
    let t = se(e);
    let r = (n, s, i, c)=>t(n, s, i, ne(r, c));
    return r;
};
const jr = (e)=>{
    let t = ie(e);
    let r = async (n, s, i, c)=>{
        let a = i ? {
            ...i,
            direction: "backward"
        } : {
            direction: "backward"
        };
        return await t(n, s, a, ne(r, c));
    };
    return r;
};
const Lr = (e)=>{
    let t = ie(e);
    let r = async (n, s, i, c)=>await t(n, s, i, ne(r, c));
    return r;
};
const Fr = (e)=>(t, r, n)=>{
        let s = n ? {
            ...n,
            direction: "backward"
        } : {
            direction: "backward"
        };
        return F(e)(t, r, s);
    };
const Ur = (e)=>(t, r, n)=>F(e)(t, r, n);
const Mr = (e)=>async (t, r, n)=>{
        let s = n ? {
            ...n,
            direction: "backward"
        } : {
            direction: "backward"
        };
        return J(e)(t, r, s);
    };
const Jr = (e)=>async (t, r, n)=>J(e)(t, r, n);
const Br = {
    major: 4,
    minor: 5,
    patch: 4
};
const Uv = dr("$ZodType", (e, t)=>{
    var r;
    e ??= {};
    e._zod.def = t;
    e._zod.bag = e._zod.bag || {};
    e._zod.version = Br;
    let checks = e._zod.def.checks;
    let s = e._zod.traits.has("$ZodCheck") ? [
        e,
        ...checks ?? []
    ] : checks?.length ? [
        ...checks
    ] : [];
    for (let i of s){
        for (let c of i._zod.onattach){
            c(e);
        }
    }
    if (s.length === 0) {
        (r = e._zod).deferred ?? (r.deferred = []);
        e._zod.deferred?.push(()=>{
            e._zod.run = e._zod.parse;
        });
    } else {
        let i = (a, l, p)=>{
            if (a.memo) {
                return a;
            }
            let f = CHt(a);
            let d;
            for (let h of l){
                if (h._zod.def.when) {
                    if (TPs(a)) {
                        continue;
                    }
                    if (!h._zod.def.when(a)) {
                        continue;
                    }
                } else if (f) {
                    continue;
                }
                let m = a.issues.length;
                let _ = h._zod.check(a);
                if (_ instanceof Promise && p?.async === false) {
                    throw new k5e;
                }
                if (d || _ instanceof Promise) {
                    d = (d ?? Promise.resolve()).then(async ()=>{
                        await _;
                        if (a.issues.length === m) {
                            return;
                        }
                        oTo(a.issues, m, e);
                        if (!f) {
                            f = CHt(a, m);
                        }
                    });
                } else {
                    if (a.issues.length === m) {
                        continue;
                    }
                    oTo(a.issues, m, e);
                    if (!f) {
                        f = CHt(a, m);
                    }
                }
            }
            if (d) {
                return d.then(()=>a);
            }
            return a;
        };
        let c = (a, l, p)=>{
            if (CHt(a)) {
                a.aborted = true;
                return a;
            }
            let f = i(l, s, p);
            if (f instanceof Promise) {
                if (p.async === false) {
                    throw new k5e;
                }
                return f.then((d)=>e._zod.parse(d, p));
            }
            return e._zod.parse(f, p);
        };
        e._zod.run = (a, l)=>{
            if (l.skipChecks) {
                return e._zod.parse(a, l);
            }
            if (l.direction === "backward") {
                let f = e._zod.parse({
                    value: a.value,
                    issues: []
                }, {
                    ...l,
                    skipChecks: true
                });
                if (f instanceof Promise) {
                    return f.then((d)=>c(d, a, l));
                }
                return c(f, a, l);
            }
            let p = e._zod.parse(a, l);
            if (p instanceof Promise) {
                if (l.async === false) {
                    throw new k5e;
                }
                return p.then((f)=>i(f, s, l));
            }
            return i(p, s, l);
        };
    }
}, {
    get "~standard" () {
        return sTo(this, "~standard", Ae(this));
    },
    set "~standard" (e){
        xHt(this, "~standard", e);
    }
});
var Vr = (e)=>{
    if (e.success) {
        return {
            value: e.data
        };
    }
    return {
        issues: e.error?.issues
    };
};
function Ae(e) {
    return {
        validate: (t)=>{
            try {
                return Vr(Dzn(e, t));
            } catch (r) {
                return Cr(e, t).then(Vr);
            }
        },
        vendor: "zod",
        version: 1
    };
}
const le = dr("$ZodString", (e, t)=>{
    Uv.init(e, t);
    e._zod.pattern = [
        ...e?._zod.bag?.patterns ?? []
    ].pop() ?? ur(e._zod.bag);
    e._zod.parse = (r, n)=>{
        if (t.coerce) {
            try {
                r.value = String(r.value);
            } catch (s) {}
        }
        if (typeof r.value === "string") {
            return r;
        }
        r.issues.push({
            expected: "string",
            code: "invalid_type",
            input: r.value,
            inst: e
        });
        return r;
    };
});
const v = dr("$ZodStringFormat", (e, t)=>{
    L.init(e, t);
    le.init(e, t);
});
const so = dr("$ZodGUID", (e, t)=>{
    t.pattern ??= Gt;
    v.init(e, t);
});
const io = dr("$ZodUUID", (e, t)=>{
    if (t.version) {
        let n = {
            v1: 1,
            v2: 2,
            v3: 3,
            v4: 4,
            v5: 5,
            v6: 6,
            v7: 7,
            v8: 8
        }[t.version];
        if (n === undefined) {
            throw Error(`Invalid UUID version: "${t.version}"`);
        }
        t.pattern ??= ye(n);
    } else {
        t.pattern ??= ye();
    }
    v.init(e, t);
});
const co = dr("$ZodEmail", (e, t)=>{
    t.pattern ??= Yt;
    v.init(e, t);
});
const uo = 1;
const ao = 2;
function Gs(e, t) {
    if (!t.normalize && t.protocol?.source === rr.source && !/^https?:\/\//i.test(e)) {
        return uo;
    }
    try {
        return new URL(e);
    } catch  {
        return ao;
    }
}
const Ys = /[\t\n\r]/g;
function qs(e) {
    return e.replace(Ys, "");
}
function Xs(e, hostname) {
    hostname.lastIndex = 0;
    return hostname.test(e.hostname);
}
function Hs(e, protocol) {
    protocol.lastIndex = 0;
    return protocol.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
const lo = dr("$ZodURL", (e, t)=>{
    v.init(e, t);
    e._zod.check = (r)=>{
        try {
            let n = r.value.trim();
            let s = Gs(n, t);
            if (s === uo) {
                r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid URL format",
                    input: r.value,
                    inst: e,
                    continue: !t.abort
                });
                return;
            }
            if (s === ao) {
                r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    input: r.value,
                    inst: e,
                    continue: !t.abort
                });
                return;
            }
            if (t.hostname && !Xs(s, t.hostname)) {
                r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid hostname",
                    pattern: t.hostname.source,
                    input: r.value,
                    inst: e,
                    continue: !t.abort
                });
            }
            if (t.protocol && !Hs(s, t.protocol)) {
                r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid protocol",
                    pattern: t.protocol.source,
                    input: r.value,
                    inst: e,
                    continue: !t.abort
                });
            }
            r.value = t.normalize ? s.href : qs(n);
            return;
        } catch (n) {
            r.issues.push({
                code: "invalid_format",
                format: "url",
                input: r.value,
                inst: e,
                continue: !t.abort
            });
        }
    };
});
const po = dr("$ZodEmoji", (e, t)=>{
    t.pattern ??= qt();
    v.init(e, t);
});
const fo = dr("$ZodNanoID", (e, t)=>{
    if (t.length !== undefined && (!Number.isInteger(t.length) || t.length < 1)) {
        throw Error(`Invalid nanoid length: ${t.length}`);
    }
    t.pattern ??= t.length === undefined ? Vt : Kt(t.length);
    v.init(e, t);
});
const mo = dr("$ZodCUID", (e, t)=>{
    t.pattern ??= Ft;
    v.init(e, t);
});
const ho = dr("$ZodCUID2", (e, t)=>{
    t.pattern ??= Ut;
    v.init(e, t);
});
const _o = dr("$ZodULID", (e, t)=>{
    t.pattern ??= Mt;
    v.init(e, t);
});
const go = dr("$ZodXID", (e, t)=>{
    t.pattern ??= Jt;
    v.init(e, t);
});
const xo = dr("$ZodKSUID", (e, t)=>{
    t.pattern ??= Bt;
    v.init(e, t);
});
const vo = dr("$ZodISODateTime", (e, t)=>{
    t.pattern ??= cr(t);
    v.init(e, t);
    if (t.local || t.precision === -1) {
        e._zod.bag.laxFormat = true;
        e._zod.onattach.push((r)=>{
            r._zod.bag.laxFormat = true;
        });
    }
});
const zo = dr("$ZodISODate", (e, t)=>{
    t.pattern ??= sr;
    v.init(e, t);
});
const yo = dr("$ZodISOTime", (e, t)=>{
    t.pattern ??= ir(t);
    v.init(e, t);
});
const $o = dr("$ZodISODuration", (e, t)=>{
    t.pattern ??= Wt;
    v.init(e, t);
});
const bo = dr("$ZodIPv4", (e, t)=>{
    t.pattern ??= Xt;
    v.init(e, t);
    e._zod.bag.format = "ipv4";
});
const Qs = /^[0-9a-fA-F:.]+$/;
function ko(e) {
    if (!Qs.test(e)) {
        return false;
    }
    try {
        new URL(`http://[${e}]`);
        return true;
    } catch  {
        return false;
    }
}
const Zo = dr("$ZodIPv6", (e, t)=>{
    t.pattern ??= Ht;
    v.init(e, t);
    e._zod.bag.format = "ipv6";
    e._zod.check = (r)=>{
        if (!ko(r.value)) {
            r.issues.push({
                code: "invalid_format",
                format: "ipv6",
                input: r.value,
                inst: e,
                continue: !t.abort
            });
        }
    };
});
const wo = dr("$ZodCIDRv4", (e, t)=>{
    t.pattern ??= Qt;
    v.init(e, t);
});
function ei(e) {
    let t = e.split("/");
    if (t.length !== 2) {
        return false;
    }
    let [r, n] = t;
    if (!n) {
        return false;
    }
    let s = Number(n);
    if (`${s}` !== n) {
        return false;
    }
    if (s < 0 || s > 128) {
        return false;
    }
    return ko(r);
}
const Po = dr("$ZodCIDRv6", (e, t)=>{
    t.pattern ??= er;
    v.init(e, t);
    e._zod.check = (r)=>{
        if (!ei(r.value)) {
            r.issues.push({
                code: "invalid_format",
                format: "cidrv6",
                input: r.value,
                inst: e,
                continue: !t.abort
            });
        }
    };
});
function So(e) {
    if (e === "") {
        return true;
    }
    if (/\s/.test(e)) {
        return false;
    }
    if (e.length % 4 !== 0) {
        return false;
    }
    try {
        atob(e);
        return true;
    } catch  {
        return false;
    }
}
const Io = dr("$ZodBase64", (e, t)=>{
    t.pattern ??= tr;
    v.init(e, t);
    e._zod.bag.contentEncoding = "base64";
    e._zod.check = (r)=>{
        if (So(r.value)) {
            return;
        }
        r.issues.push({
            code: "invalid_format",
            format: "base64",
            input: r.value,
            inst: e,
            continue: !t.abort
        });
    };
});
function ti(e) {
    if (!$e.test(e)) {
        return false;
    }
    let t = e.replace(/[-_]/g, (n)=>{
        if (n === "-") {
            return "+";
        }
        return "/";
    });
    let r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
    return So(r);
}
const Oo = dr("$ZodBase64URL", (e, t)=>{
    t.pattern ??= $e;
    v.init(e, t);
    e._zod.bag.contentEncoding = "base64url";
    e._zod.check = (r)=>{
        if (ti(r.value)) {
            return;
        }
        r.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: r.value,
            inst: e,
            continue: !t.abort
        });
    };
});
const To = dr("$ZodE164", (e, t)=>{
    t.pattern ??= or;
    v.init(e, t);
});
function ri(e, t = null) {
    try {
        let r = e.split(".");
        if (r.length !== 3) {
            return false;
        }
        let [n] = r;
        if (!n) {
            return false;
        }
        let s = JSON.parse(atob(n));
        if ("typ" in s && s?.typ !== "JWT") {
            return false;
        }
        if (!s.alg) {
            return false;
        }
        if (t && (!("alg" in s) || s.alg !== t)) {
            return false;
        }
        return true;
    } catch  {
        return false;
    }
}
const Ao = dr("$ZodJWT", (e, t)=>{
    v.init(e, t);
    e._zod.check = (r)=>{
        if (ri(r.value, t.alg)) {
            return;
        }
        r.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: r.value,
            inst: e,
            continue: !t.abort
        });
    };
});
const Ee = dr("$ZodNumber", (e, t)=>{
    Uv.init(e, t);
    e._zod.pattern = e._zod.bag.pattern ?? D;
    e._zod.parse = (r, n)=>{
        if (t.coerce) {
            try {
                r.value = Number(r.value);
            } catch (c) {}
        }
        let r_value = r.value;
        if (typeof r_value === "number" && !Number.isNaN(r_value) && Number.isFinite(r_value)) {
            return r;
        }
        let received = typeof r_value === "number" ? Number.isNaN(r_value) ? "NaN" : !Number.isFinite(r_value) ? String(r_value) : undefined : undefined;
        r.issues.push({
            expected: "number",
            code: "invalid_type",
            input: r_value,
            inst: e,
            ...received ? {
                received
            } : {}
        });
        return r;
    };
});
const Eo = dr("$ZodNumberFormat", (e, t)=>{
    gr.init(e, t);
    Ee.init(e, t);
});
const No = dr("$ZodBoolean", (e, t)=>{
    Uv.init(e, t);
    e._zod.pattern = ar;
    e._zod.parse = (r, n)=>{
        if (t.coerce) {
            try {
                r.value = Boolean(r.value);
            } catch (i) {}
        }
        let r_value = r.value;
        if (typeof r_value === "boolean") {
            return r;
        }
        r.issues.push({
            expected: "boolean",
            code: "invalid_type",
            input: r_value,
            inst: e
        });
        return r;
    };
});
const Co = dr("$ZodUndefined", (e, t)=>{
    Uv.init(e, t);
    e._zod.pattern = pr;
    e._zod.values = new Set([
        undefined
    ]);
    e._zod.parse = (r, n)=>{
        let r_value = r.value;
        if (typeof r_value === "undefined") {
            return r;
        }
        r.issues.push({
            expected: "undefined",
            code: "invalid_type",
            input: r_value,
            inst: e
        });
        return r;
    };
});
const Ro = dr("$ZodNull", (e, t)=>{
    Uv.init(e, t);
    e._zod.pattern = lr;
    e._zod.values = new Set([
        null
    ]);
    e._zod.parse = (r, n)=>{
        let r_value = r.value;
        if (r_value === null) {
            return r;
        }
        r.issues.push({
            expected: "null",
            code: "invalid_type",
            input: r_value,
            inst: e
        });
        return r;
    };
});
const Do = dr("$ZodAny", (e, t)=>{
    Uv.init(e, t);
    e._zod.parse = (r)=>r;
});
const jo = dr("$ZodUnknown", (e, t)=>{
    Uv.init(e, t);
    e._zod.parse = (r)=>r;
});
const Lo = dr("$ZodNever", (e, t)=>{
    Uv.init(e, t);
    e._zod.parse = (r, n)=>{
        r.issues.push({
            expected: "never",
            code: "invalid_type",
            input: r.value,
            inst: e
        });
        return r;
    };
});
function Kr(e, t, r) {
    if (e.issues.length) {
        t.issues.push(...CUe(r, e.issues));
    }
    t.value[r] = e.value;
}
const Fo = dr("$ZodArray", (e, t)=>{
    Uv.init(e, t);
    let pZ_memoizer = pZ.memoizer;
    pZ_memoizer?.attach(e);
    e._zod.parse = (n, s)=>{
        let n_value = n.value;
        if (!Array.isArray(n_value)) {
            n.issues.push({
                expected: "array",
                code: "invalid_type",
                input: n_value,
                inst: e
            });
            return n;
        }
        n.value = pZ_memoizer ? pZ_memoizer.alloc(e, n, Array(n_value.length), s) : Array(n_value.length);
        let c = [];
        for(let a = 0; a < n_value.length; a++){
            let l = n_value[a];
            let p = t.element._zod.run({
                value: l,
                issues: []
            }, s);
            if (p instanceof Promise) {
                c.push(p.then((f)=>Kr(f, n, a)));
            } else {
                Kr(p, n, a);
            }
        }
        if (c.length) {
            return Promise.all(c).then(()=>n);
        }
        return n;
    };
});
function ae(e, t, r, n, s, i) {
    let c = r in n;
    let a = i === "optional";
    if (!c && a && s === "optional") {
        return;
    }
    if (e.issues.length) {
        if (s !== undefined && a && !c) {
            return;
        }
        t.issues.push(...CUe(r, e.issues));
    }
    if (!c && s === undefined) {
        if (!e.issues.length) {
            t.issues.push({
                code: "invalid_type",
                expected: "nonoptional",
                input: undefined,
                path: [
                    r
                ]
            });
        }
        return;
    }
    if (e.value === undefined) {
        if (c) {
            t.value[r] = undefined;
        }
    } else {
        t.value[r] = e.value;
    }
}
const oi = [];
function Uo(e) {
    let t = Object.keys(e.shape);
    let r = Object.getOwnPropertySymbols(e.shape);
    let symbolKeys = r.length ? r : oi;
    let allKeys = symbolKeys.length ? [
        ...t,
        ...symbolKeys
    ] : t;
    for (let c of allKeys){
        if (!e.shape?.[c]?._zod?.traits?.has("$ZodType")) {
            throw Error(`Invalid element at key "${String(c)}": expected a Zod schema`);
        }
    }
    let i = vPs(e.shape);
    return {
        ...e,
        allKeys,
        symbolKeys,
        keySet: new Set(t),
        numKeys: t.length,
        optionalKeys: new Set(i)
    };
}
function Mo(e, input, r, n, s, i) {
    let c = [];
    let s_keySet = s.keySet;
    let _zod = s.catchall._zod;
    let type = _zod.def.type;
    let { optin, optout } = _zod;
    for(let h in input){
        if (s_keySet.has(h)) {
            continue;
        }
        if (h === "__proto__") {
            if (type === "never") {
                c.push(h);
            }
            continue;
        }
        if (type === "never") {
            c.push(h);
            continue;
        }
        let m = _zod.run({
            value: input[h],
            issues: []
        }, n);
        if (m instanceof Promise) {
            e.push(m.then((_)=>ae(_, r, h, input, optin, optout)));
        } else {
            ae(m, r, h, input, optin, optout);
        }
    }
    if (c.length) {
        r.issues.push({
            code: "unrecognized_keys",
            keys: c,
            input,
            inst: i,
            continue: true
        });
    }
    if (!e.length) {
        return r;
    }
    return Promise.all(e).then(()=>r);
}
const Oe = new WeakMap;
const ni = dr("$ZodObject", (e, t)=>{
    Uv.init(e, t);
    if (!Object.getOwnPropertyDescriptor(t, "shape")?.get) {
        let l = t.shape;
        Oe.set(t, l);
        Object.defineProperty(t, "shape", {
            get: ()=>{
                let p = {
                    ...l
                };
                Object.defineProperty(t, "shape", {
                    value: p
                });
                Oe.set(t, p);
                return p;
            }
        });
    }
    let n = Bzn(()=>Uo(t));
    tw(e, "propValues", (l)=>{
        let shape = l.def.shape;
        let f = {};
        for(let d in shape){
            let h = shape[d]._zod;
            if (h.values) {
                if (!Object.prototype.hasOwnProperty.call(f, d)) {
                    Fz(f, d, new Set);
                }
                for (let m of h.values){
                    f[d].add(m);
                }
                if (h.optin !== undefined) {
                    f[d].add(undefined);
                }
            }
        }
        return f;
    });
    let s = drn;
    let t_catchall = t.catchall;
    let c;
    let pZ_memoizer = pZ.memoizer;
    pZ_memoizer?.attach(e);
    e._zod.parse = (l, p)=>{
        c ??= n.value;
        let l_value = l.value;
        if (!s(l_value)) {
            l.issues.push({
                expected: "object",
                code: "invalid_type",
                input: l_value,
                inst: e
            });
            return l;
        }
        l.value = pZ_memoizer ? pZ_memoizer.alloc(e, l, {}, p) : {};
        let d = [];
        let c_shape = c.shape;
        for (let m of c.allKeys){
            if (m === "__proto__") {
                continue;
            }
            let _ = c_shape[m];
            let x = _._zod.optin;
            let g = _._zod.optout;
            let I = _._zod.run({
                value: l_value[m],
                issues: []
            }, p);
            if (I instanceof Promise) {
                d.push(I.then((C)=>ae(C, l, m, l_value, x, g)));
            } else {
                ae(I, l, m, l_value, x, g);
            }
        }
        if (!t_catchall) {
            if (d.length) {
                return Promise.all(d).then(()=>l);
            }
            return l;
        }
        return Mo(d, l_value, l, p, n.value, e);
    };
});
const Jo = dr("$ZodObjectJIT", (e, t)=>{
    ni.init(e, t);
    let parse = e._zod.parse;
    let n = Bzn(()=>Uo(t));
    let pZ_memoizer = pZ.memoizer;
    let i = (shape)=>{
        let n_value = n.value;
        let __symbolKeys = n_value.symbolKeys;
        let g = new we([
            "payload",
            "ctx"
        ], {
            shape,
            inst: e,
            memo: pZ_memoizer,
            syms: __symbolKeys
        });
        let I = (w)=>`shape[${w}]._zod.run({ value: input[${w}], issues: [] }, ctx)`;
        let C = (w, z)=>`
          for (let i = 0; i < ${w}.issues.length; i++) {
            const iss = ${w}.issues[i];
            iss.path = iss.path ? [${z}, ...iss.path] : [${z}];
            payload.issues.push(iss);
          }`;
        g.write("const input = payload.value;");
        let Rt = Object.create(null);
        let Ds = 0;
        for (let w of n_value.allKeys){
            Rt[w] = `key_${Ds++}`;
        }
        g.write(pZ_memoizer ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
        for (let w of n_value.allKeys){
            if (w === "__proto__") {
                continue;
            }
            let z = Rt[w];
            let S = typeof w === "symbol" ? `syms[${__symbolKeys.indexOf(w)}]` : _Ps(w);
            let ve = `${S} in input`;
            let Dt = shape[w];
            let jt = Dt?._zod?.optin;
            let Lt = jt !== undefined;
            let js = Dt?._zod?.optout === "optional";
            g.write(`const ${z} = ${I(S)};`);
            if (Lt && js) {
                let Ls = jt === "optional" ? `${z}_present` : `${z}.value !== undefined || ${z}_present`;
                g.write(`
        const ${z}_present = ${ve};
        if (!${z}.issues.length || ${z}_present) {
          if (${z}.issues.length) {${C(z, S)}
          }

          if (${Ls}) {
            newResult[${S}] = ${z}.value;
          }
        }

      `);
            } else if (!Lt) {
                g.write(`
        const ${z}_present = ${ve};
        if (${z}.issues.length) {${C(z, S)}
        }
        if (!${z}_present && !${z}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${S}]
          });
        }

        if (${z}_present) {
          newResult[${S}] = ${z}.value;
        }

      `);
            } else {
                g.write(`
        if (${z}.issues.length) {${C(z, S)}
        }
        
        if (${z}.value === undefined) {
          if (${ve}) {
            newResult[${S}] = undefined;
          }
        } else {
          newResult[${S}] = ${z}.value;
        }

      `);
            }
        }
        g.write("payload.value = newResult;");
        g.write("return payload;");
        return g.compile();
    };
    let c;
    let a = drn;
    let l = !pZ.jitless;
    let f = l && SPs.value;
    let t_catchall = t.catchall;
    let h;
    e._zod.parse = (m, _)=>{
        h ??= n.value;
        let m_value = m.value;
        if (!a(m_value)) {
            m.issues.push({
                expected: "object",
                code: "invalid_type",
                input: m_value,
                inst: e
            });
            return m;
        }
        if (l && f && _?.async === false && _.jitless !== true) {
            if (!c) {
                c = i(t.shape);
            }
            m = c(m, _);
            if (!t_catchall) {
                return m;
            }
            return Mo([], m_value, m, _, h, e);
        }
        return parse(m, _);
    };
});
function Gr(e, t, r, n) {
    for (let i of e){
        if (i.issues.length === 0) {
            t.value = i.value;
            return t;
        }
    }
    let s = e.filter((i)=>!CHt(i));
    if (s.length === 1) {
        t.value = s[0].value;
        return s[0];
    }
    t.issues.push({
        code: "invalid_union",
        input: t.value,
        inst: r,
        errors: e.map((i)=>i.issues.map((c)=>RUe(c, n, Y8())))
    });
    return t;
}
const Ne = dr("$ZodUnion", (e, t)=>{
    Uv.init(e, t);
    tw(e, "optin", (n)=>{
        if (n.def.options.some((s)=>s._zod.optin === "defaulted")) {
            return "defaulted";
        }
        if (n.def.options.some((s)=>s._zod.optin !== undefined)) {
            return "optional";
        }
    });
    tw(e, "optout", (n)=>{
        if (n.def.options.some((s)=>s._zod.optout === "optional")) {
            return "optional";
        }
    });
    tw(e, "values", (n)=>{
        if (n.def.options.every((s)=>s._zod.values)) {
            return new Set(n.def.options.flatMap((s)=>Array.from(s._zod.values)));
        }
    });
    tw(e, "pattern", (n)=>{
        if (n.def.options.every((s)=>s._zod.pattern)) {
            let s = n.def.options.map((i)=>i._zod.pattern);
            return new RegExp(`^(${s.map((i)=>lrn(i.source)).join("|")})$`);
        }
    });
    let r = t.options.length === 1 ? t.options[0]._zod.run : null;
    e._zod.parse = (n, s)=>{
        if (r) {
            return r(n, s);
        }
        let i = false;
        let c = [];
        for (let a of t.options){
            let l = a._zod.run({
                value: n.value,
                issues: []
            }, s);
            if (l instanceof Promise) {
                c.push(l);
                i = true;
            } else {
                if (l.issues.length === 0) {
                    return l;
                }
                c.push(l);
            }
        }
        if (!i) {
            return Gr(c, n, e, s);
        }
        return Promise.all(c).then((a)=>Gr(a, n, e, s));
    };
});
const Bo = dr("$ZodDiscriminatedUnion", (e, t)=>{
    t.inclusive = false;
    Ne.init(e, t);
    let parse = e._zod.parse;
    tw(e, "propValues", (s)=>{
        let i = {};
        for (let c of s.def.options){
            let a = c._zod.propValues;
            if (!a || Object.keys(a).length === 0) {
                throw Error(`Invalid discriminated union option at index "${s.def.options.indexOf(c)}"`);
            }
            for (let [l, p] of Object.entries(a)){
                if (!Object.prototype.hasOwnProperty.call(i, l)) {
                    Fz(i, l, new Set);
                }
                for (let f of p){
                    i[l].add(f);
                }
            }
        }
        return i;
    });
    t.options.forEach((s, i)=>{
        let c = Oe.get(s._zod.def);
        if (c && !Object.prototype.hasOwnProperty.call(c, t.discriminator)) {
            throw Error(`Invalid discriminated union option at index "${i}"`);
        }
    });
    let n = Bzn(()=>{
        let t_options = t.options;
        let i = new Map;
        for (let c of t_options){
            let a = c._zod.propValues?.[t.discriminator];
            if (!a || a.size === 0) {
                throw Error(`Invalid discriminated union option at index "${t.options.indexOf(c)}"`);
            }
            for (let l of a){
                if (i.has(l)) {
                    throw Error(`Duplicate discriminator value "${String(l)}"`);
                }
                i.set(l, c);
            }
        }
        return i;
    });
    e._zod.parse = (s, i)=>{
        let s_value = s.value;
        if (!drn(s_value)) {
            s.issues.push({
                code: "invalid_type",
                expected: "object",
                input: s_value,
                inst: e
            });
            return s;
        }
        let a = n.value.get(s_value?.[t.discriminator]);
        if (a) {
            return a._zod.run(s, i);
        }
        if (t.unionFallback || i.direction === "backward") {
            return parse(s, i);
        }
        s.issues.push({
            code: "invalid_union",
            errors: [],
            note: "No matching discriminator",
            discriminator: t.discriminator,
            options: Array.from(n.value.keys()),
            input: s_value,
            path: [
                t.discriminator
            ],
            inst: e
        });
        return s;
    };
});
const Vo = dr("$ZodIntersection", (e, t)=>{
    Uv.init(e, t);
    e._zod.parse = (r, n)=>{
        let r_value = r.value;
        let i = t.left._zod.run({
            value: r_value,
            issues: []
        }, n);
        let c = t.right._zod.run({
            value: r_value,
            issues: []
        }, n);
        if (i instanceof Promise || c instanceof Promise) {
            return Promise.all([
                i,
                c
            ]).then(([l, p])=>Yr(r, l, p));
        }
        return Yr(r, i, c);
    };
});
function Te(e, t) {
    if (e === t) {
        return {
            valid: true,
            data: e
        };
    }
    if (e instanceof Date && t instanceof Date && +e === +t) {
        return {
            valid: true,
            data: e
        };
    }
    if (AHt(e) && AHt(t)) {
        let r = Object.keys(t);
        let n = Object.keys(e).filter((i)=>r.indexOf(i) !== -1);
        let s = {
            ...e,
            ...t
        };
        if (Object.prototype.hasOwnProperty.call(s, "__proto__")) {
            delete s.__proto__;
        }
        for (let i of n){
            if (i === "__proto__") {
                continue;
            }
            let c = Te(e[i], t[i]);
            if (!c.valid) {
                return {
                    valid: false,
                    mergeErrorPath: [
                        i,
                        ...c.mergeErrorPath
                    ]
                };
            }
            s[i] = c.data;
        }
        return {
            valid: true,
            data: s
        };
    }
    if (Array.isArray(e) && Array.isArray(t)) {
        if (e.length !== t.length) {
            return {
                valid: false,
                mergeErrorPath: []
            };
        }
        let r = [];
        for(let n = 0; n < e.length; n++){
            let s = e[n];
            let i = t[n];
            let c = Te(s, i);
            if (!c.valid) {
                return {
                    valid: false,
                    mergeErrorPath: [
                        n,
                        ...c.mergeErrorPath
                    ]
                };
            }
            r.push(c.data);
        }
        return {
            valid: true,
            data: r
        };
    }
    return {
        valid: false,
        mergeErrorPath: []
    };
}
function Yr(e, t, r) {
    let n = new Map;
    let s;
    let i = new Map;
    let c = (p, f)=>{
        let d;
        if (p.code === "unrecognized_keys" && !p.path?.length) {
            s ??= p;
            d = p.keys;
        } else if (p.code === "invalid_key" && p.origin === "record" && p.path?.length === 1) {
            let h = String(p.path[0]);
            if (!i.has(h)) {
                i.set(h, p);
            }
            d = [
                h
            ];
        } else {
            return false;
        }
        for (let h of d){
            if (!n.has(h)) {
                n.set(h, {});
            }
            n.get(h)[f] = true;
        }
        return true;
    };
    for (let p of t.issues){
        if (!c(p, "l")) {
            e.issues.push(p);
        }
    }
    for (let p of r.issues){
        if (!c(p, "r")) {
            e.issues.push(p);
        }
    }
    let a = [
        ...n
    ].filter(([, p])=>p.l && p.r).map(([p])=>p);
    if (a.length) {
        let p = s ? a.filter((f)=>s.keys.includes(f)) : [];
        if (p.length) {
            e.issues.push({
                ...s,
                keys: p
            });
        }
        for (let f of a){
            if (!p.includes(f) && i.has(f)) {
                e.issues.push(i.get(f));
            }
        }
    }
    let l = Te(t.value, r.value);
    if (!l.valid) {
        if (CHt(e)) {
            return e;
        }
        throw Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
    }
    e.value = l.data;
    return e;
}
const Ko = dr("$ZodTuple", (e, t)=>{
    Uv.init(e, t);
    let t_items = t.items;
    let pZ_memoizer = pZ.memoizer;
    pZ_memoizer?.attach(e);
    e._zod.parse = (s, i)=>{
        let s_value = s.value;
        if (!Array.isArray(s_value)) {
            s.issues.push({
                input: s_value,
                inst: e,
                expected: "tuple",
                code: "invalid_type"
            });
            return s;
        }
        s.value = pZ_memoizer ? pZ_memoizer.alloc(e, s, [], i) : [];
        let a = [];
        let minimum = qr(t_items, "optin");
        let p = qr(t_items, "optout");
        if (!t.rest) {
            if (s_value.length < minimum) {
                s.issues.push({
                    code: "too_small",
                    minimum,
                    inclusive: true,
                    input: s_value,
                    inst: e,
                    origin: "array"
                });
                return s;
            }
            if (s_value.length > t_items.length) {
                s.issues.push({
                    code: "too_big",
                    maximum: t_items.length,
                    inclusive: true,
                    input: s_value,
                    inst: e,
                    origin: "array"
                });
            }
        }
        let f = Array(t_items.length);
        for(let d = 0; d < t_items.length; d++){
            let h = t_items[d]._zod.run({
                value: s_value[d],
                issues: []
            }, i);
            if (h instanceof Promise) {
                a.push(h.then((m)=>{
                    f[d] = m;
                }));
            } else {
                f[d] = h;
            }
        }
        if (t.rest) {
            let d = t_items.length - 1;
            let h = s_value.slice(t_items.length);
            for (let m of h){
                d++;
                let _ = t.rest._zod.run({
                    value: m,
                    issues: []
                }, i);
                if (_ instanceof Promise) {
                    a.push(_.then((x)=>Xr(x, s, d)));
                } else {
                    Xr(_, s, d);
                }
            }
        }
        if (a.length) {
            return Promise.all(a).then(()=>Hr(f, s, t_items, s_value, p));
        }
        return Hr(f, s, t_items, s_value, p);
    };
});
function qr(e, t) {
    for(let r = e.length - 1; r >= 0; r--){
        if (!(t === "optin" ? e[r]._zod.optin !== undefined : e[r]._zod.optout === "optional")) {
            return r + 1;
        }
    }
    return 0;
}
function Xr(e, t, r) {
    if (e.issues.length) {
        t.issues.push(...CUe(r, e.issues));
    }
    t.value[r] = e.value;
}
function Hr(e, t, r, n, s) {
    for(let i = 0; i < r.length; i++){
        let c = e[i];
        let a = i < n.length;
        if (!a && i >= s && r[i]._zod.optin === "optional") {
            t.value.length = i;
            break;
        }
        if (c.issues.length) {
            if (!a && i >= s) {
                t.value.length = i;
                break;
            }
            t.issues.push(...CUe(i, c.issues));
        }
        t.value[i] = c.value;
    }
    for(let i = t.value.length - 1; i >= n.length; i--){
        if (r[i]._zod.optout === "optional" && t.value[i] === undefined) {
            t.value.length = i;
        } else {
            break;
        }
    }
    return t;
}
const Wo = dr("$ZodRecord", (e, t)=>{
    Uv.init(e, t);
    let pZ_memoizer = pZ.memoizer;
    pZ_memoizer?.attach(e);
    e._zod.parse = (n, s)=>{
        let n_value = n.value;
        if (!AHt(n_value)) {
            n.issues.push({
                expected: "record",
                code: "invalid_type",
                input: n_value,
                inst: e
            });
            return n;
        }
        let c = [];
        let values = t.keyType._zod.values;
        if (values && !t.partial) {
            n.value = pZ_memoizer ? pZ_memoizer.alloc(e, n, {}, s) : {};
            let l = new Set;
            for (let f of values){
                if (typeof f === "string" || typeof f === "number" || typeof f === "symbol") {
                    l.add(typeof f === "number" ? f.toString() : f);
                    if (f === "__proto__") {
                        continue;
                    }
                    let d = t.keyType._zod.run({
                        value: f,
                        issues: []
                    }, s);
                    if (d instanceof Promise) {
                        throw Error("Async schemas not supported in object keys currently");
                    }
                    if (d.issues.length) {
                        n.issues.push({
                            code: "invalid_key",
                            origin: "record",
                            issues: d.issues.map((_)=>RUe(_, s, Y8())),
                            input: f,
                            path: [
                                f
                            ],
                            inst: e
                        });
                        continue;
                    }
                    let h = d.value;
                    if (h === "__proto__") {
                        continue;
                    }
                    let m = t.valueType._zod.run({
                        value: n_value[f],
                        issues: []
                    }, s);
                    if (m instanceof Promise) {
                        c.push(m.then((_)=>{
                            if (_.issues.length) {
                                n.issues.push(...CUe(f, _.issues));
                            }
                            n.value[h] = _.value;
                        }));
                    } else {
                        if (m.issues.length) {
                            n.issues.push(...CUe(f, m.issues));
                        }
                        n.value[h] = m.value;
                    }
                }
            }
            let p;
            for(let f in n_value){
                if (!l.has(f)) {
                    if (t.mode === "loose") {
                        if (f === "__proto__") {
                            continue;
                        }
                        n.value[f] = n_value[f];
                    } else {
                        p = p ?? [];
                        p.push(f);
                    }
                }
            }
            if (p && p.length > 0) {
                n.issues.push({
                    code: "unrecognized_keys",
                    input: n_value,
                    inst: e,
                    keys: p,
                    continue: true
                });
            }
        } else {
            n.value = pZ_memoizer ? pZ_memoizer.alloc(e, n, {}, s) : {};
            let l;
            for (let p of Reflect.ownKeys(n_value)){
                if (p === "__proto__") {
                    continue;
                }
                if (!Object.prototype.propertyIsEnumerable.call(n_value, p)) {
                    continue;
                }
                let f = t.keyType._zod.run({
                    value: p,
                    issues: []
                }, s);
                if (f instanceof Promise) {
                    throw Error("Async schemas not supported in object keys currently");
                }
                if (typeof p === "string" && D.test(p) && f.issues.length) {
                    let _ = t.keyType._zod.run({
                        value: Number(p),
                        issues: []
                    }, s);
                    if (_ instanceof Promise) {
                        throw Error("Async schemas not supported in object keys currently");
                    }
                    if (_.issues.length === 0) {
                        f = _;
                    }
                }
                if (f.issues.length) {
                    if (t.mode === "loose") {
                        n.value[p] = n_value[p];
                    } else if (values) {
                        l = l ?? [];
                        l.push(p);
                    } else {
                        n.issues.push({
                            code: "invalid_key",
                            origin: "record",
                            issues: f.issues.map((_)=>RUe(_, s, Y8())),
                            input: p,
                            path: [
                                p
                            ],
                            inst: e
                        });
                    }
                    continue;
                }
                let h = f.value;
                if (h === "__proto__") {
                    continue;
                }
                let m = t.valueType._zod.run({
                    value: n_value[p],
                    issues: []
                }, s);
                if (m instanceof Promise) {
                    c.push(m.then((_)=>{
                        if (_.issues.length) {
                            n.issues.push(...CUe(p, _.issues));
                        }
                        n.value[h] = _.value;
                    }));
                } else {
                    if (m.issues.length) {
                        n.issues.push(...CUe(p, m.issues));
                    }
                    n.value[h] = m.value;
                }
            }
            if (l && l.length > 0) {
                n.issues.push({
                    code: "unrecognized_keys",
                    input: n_value,
                    inst: e,
                    keys: l,
                    continue: true
                });
            }
        }
        if (c.length) {
            return Promise.all(c).then(()=>n);
        }
        return n;
    };
});
const Go = dr("$ZodEnum", (e, t)=>{
    Uv.init(e, t);
    let values = dCr(t.entries);
    let n = new Set(values);
    e._zod.values = n;
    let s = values.filter((i)=>wPs.has(typeof i));
    e._zod.pattern = new RegExp(s.length ? `^(${s.map((i)=>xut(i.toString())).join("|")})$` : "^[^\\s\\S]$");
    e._zod.parse = (i, c)=>{
        let i_value = i.value;
        if (n.has(i_value)) {
            return i;
        }
        i.issues.push({
            code: "invalid_value",
            values,
            input: i_value,
            inst: e
        });
        return i;
    };
});
const Yo = dr("$ZodLiteral", (e, t)=>{
    Uv.init(e, t);
    let r = new Set(t.values);
    e._zod.values = r;
    e._zod.pattern = new RegExp(t.values.length ? `^(${t.values.map((n)=>{
        if (typeof n === "string") {
            return xut(n);
        }
        if (n) {
            return xut(n.toString());
        }
        return String(n);
    }).join("|")})$` : "^[^\\s\\S]$");
    e._zod.parse = (n, s)=>{
        let n_value = n.value;
        if (r.has(n_value)) {
            return n;
        }
        n.issues.push({
            code: "invalid_value",
            values: t.values,
            input: n_value,
            inst: e
        });
        return n;
    };
});
const qo = dr("$ZodTransform", (e, t)=>{
    Uv.init(e, t);
    e._zod.optin = "optional";
    pZ.memoizer?.guard(e);
    e._zod.parse = (r, n)=>{
        if (n.direction === "backward") {
            throw new jzn(e.constructor.name);
        }
        let s = t.transform(r.value, r);
        if (n.async) {
            return (s instanceof Promise ? s : Promise.resolve(s)).then((c)=>{
                r.value = c;
                return r;
            });
        }
        if (s instanceof Promise) {
            throw new k5e;
        }
        r.value = s;
        return r;
    };
});
function Qr(e, t) {
    e.value = t.issues.length ? undefined : t.value;
    return e;
}
const Ce = dr("$ZodOptional", (e, t)=>{
    Uv.init(e, t);
    tw(e, "optin", (r)=>{
        if (r.def.innerType._zod.optin === "defaulted") {
            return "defaulted";
        }
        return "optional";
    });
    e._zod.optout = "optional";
    tw(e, "values", (r)=>{
        let values = r.def.innerType._zod.values;
        if (values) {
            return new Set([
                ...values,
                undefined
            ]);
        }
    });
    tw(e, "pattern", (r)=>{
        let pattern = r.def.innerType._zod.pattern;
        if (pattern) {
            return new RegExp(`^(${lrn(pattern.source)})?$`);
        }
    });
    e._zod.parse = (r, n)=>{
        if (r.value === undefined) {
            if (t.innerType._zod.optin !== "defaulted") {
                return r;
            }
            let s = t.innerType._zod.run({
                value: r.value,
                issues: []
            }, n);
            if (s instanceof Promise) {
                return s.then((i)=>Qr(r, i));
            }
            return Qr(r, s);
        }
        return t.innerType._zod.run(r, n);
    };
});
const Xo = dr("$ZodExactOptional", (e, t)=>{
    Ce.init(e, t);
    tw(e, "values", (r)=>r.def.innerType._zod.values);
    tw(e, "pattern", (r)=>r.def.innerType._zod.pattern);
    e._zod.parse = (r, n)=>t.innerType._zod.run(r, n);
});
const Ho = dr("$ZodNullable", (e, t)=>{
    Uv.init(e, t);
    tw(e, "optin", (r)=>r.def.innerType._zod.optin);
    tw(e, "optout", (r)=>r.def.innerType._zod.optout);
    tw(e, "pattern", (r)=>{
        let pattern = r.def.innerType._zod.pattern;
        if (pattern) {
            return new RegExp(`^(${lrn(pattern.source)}|null)$`);
        }
    });
    tw(e, "values", (r)=>{
        if (r.def.innerType._zod.values) {
            return new Set([
                ...r.def.innerType._zod.values,
                null
            ]);
        }
    });
    e._zod.parse = (r, n)=>{
        if (r.value === null) {
            return r;
        }
        return t.innerType._zod.run(r, n);
    };
});
const Qo = dr("$ZodDefault", (e, t)=>{
    Uv.init(e, t);
    e._zod.optin = "defaulted";
    tw(e, "values", (r)=>r.def.innerType._zod.values);
    e._zod.parse = (r, n)=>{
        if (n.direction === "backward") {
            return t.innerType._zod.run(r, n);
        }
        if (r.value === undefined) {
            r.value = t.defaultValue;
            return r;
        }
        let s = t.innerType._zod.run(r, n);
        if (s instanceof Promise) {
            return s.then((i)=>eo(i, t));
        }
        return eo(s, t);
    };
});
function eo(e, t) {
    if (e.value === undefined) {
        e.value = t.defaultValue;
    }
    return e;
}
const en = dr("$ZodPrefault", (e, t)=>{
    Uv.init(e, t);
    e._zod.optin = "defaulted";
    tw(e, "values", (r)=>r.def.innerType._zod.values);
    e._zod.parse = (r, n)=>{
        if (n.direction === "backward") {
            return t.innerType._zod.run(r, n);
        }
        if (r.value === undefined) {
            r.value = t.defaultValue;
        }
        return t.innerType._zod.run(r, n);
    };
});
const tn = dr("$ZodNonOptional", (e, t)=>{
    Uv.init(e, t);
    tw(e, "values", (r)=>{
        let values = r.def.innerType._zod.values;
        if (values) {
            return new Set([
                ...values
            ].filter((s)=>s !== undefined));
        }
    });
    e._zod.parse = (r, n)=>{
        let s = t.innerType._zod.run(r, n);
        if (s instanceof Promise) {
            return s.then((i)=>to(i, e));
        }
        return to(s, e);
    };
});
function to(e, t) {
    if (!e.issues.length && e.value === undefined) {
        e.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: e.value,
            inst: t
        });
    }
    return e;
}
function ro(e, t, r, n) {
    if (!t.issues.length) {
        e.value = t.value;
        if (t.memo) {
            e.memo = true;
        }
        return e;
    }
    e.value = r.catchValue({
        ...t,
        value: e.value,
        error: {
            issues: t.issues.map((s)=>RUe(s, n, Y8()))
        },
        input: e.value
    });
    return e;
}
const rn = dr("$ZodCatch", (e, t)=>{
    Uv.init(e, t);
    tw(e, "optin", (r)=>{
        if (r.def.innerType._zod.optin === "defaulted") {
            return "defaulted";
        }
        return "optional";
    });
    tw(e, "optout", (r)=>r.def.innerType._zod.optout);
    tw(e, "values", (r)=>r.def.innerType._zod.values);
    e._zod.parse = (r, n)=>{
        if (n.direction === "backward") {
            return t.innerType._zod.run(r, n);
        }
        let s = t.innerType._zod.run({
            value: r.value,
            issues: []
        }, n);
        if (s instanceof Promise) {
            return s.then((i)=>ro(r, i, t, n));
        }
        return ro(r, s, t, n);
    };
});
const Re = dr("$ZodPipe", (e, t)=>{
    Uv.init(e, t);
    tw(e, "values", (r)=>r.def.in._zod.values);
    tw(e, "optin", (r)=>r.def.in._zod.optin);
    tw(e, "optout", (r)=>r.def.out._zod.optout);
    tw(e, "propValues", (r)=>r.def.in._zod.propValues);
    e._zod.parse = (r, n)=>{
        if (n.direction === "backward") {
            let i = t.out._zod.run(r, n);
            if (i instanceof Promise) {
                return i.then((c)=>ce(c, t.in, n));
            }
            return ce(i, t.in, n);
        }
        let s = t.in._zod.run(r, n);
        if (s instanceof Promise) {
            return s.then((i)=>ce(i, t.out, n));
        }
        return ce(s, t.out, n);
    };
});
function ce(e, t, r) {
    if (e.issues.some((n)=>n.code !== "unrecognized_keys")) {
        e.aborted = true;
        return e;
    }
    return t._zod.run({
        value: e.value,
        issues: e.issues
    }, r);
}
const on = dr("$ZodPreprocess", (e, t)=>{
    Re.init(e, t);
});
const nn = dr("$ZodReadonly", (e, t)=>{
    Uv.init(e, t);
    tw(e, "propValues", (r)=>r.def.innerType._zod.propValues);
    tw(e, "values", (r)=>r.def.innerType._zod.values);
    tw(e, "optin", (r)=>r.def.innerType?._zod?.optin);
    tw(e, "optout", (r)=>r.def.innerType?._zod?.optout);
    e._zod.parse = (r, n)=>{
        if (n.direction === "backward") {
            return t.innerType._zod.run(r, n);
        }
        let s = t.innerType._zod.run(r, n);
        if (s instanceof Promise) {
            return s.then(oo);
        }
        return oo(s);
    };
});
function oo(e) {
    if (!e.memo) {
        e.value = Object.freeze(e.value);
    }
    return e;
}
const sCr = dr("$ZodLazy", (e, t)=>{
    Uv.init(e, t);
    crn(e._zod, "innerType", ()=>{
        let r = t;
        if (!r._cachedInner) {
            r._cachedInner = t.getter();
        }
        return r._cachedInner;
    });
    tw(e, "pattern", (r)=>r.innerType?._zod?.pattern);
    tw(e, "propValues", (r)=>r.innerType?._zod?.propValues);
    tw(e, "optin", (r)=>r.innerType?._zod?.optin ?? undefined);
    tw(e, "optout", (r)=>r.innerType?._zod?.optout ?? undefined);
    e._zod.parse = (r, n)=>e._zod.innerType._zod.run(r, n);
});
const sn = dr("$ZodCustom", (e, t)=>{
    k.init(e, t);
    Uv.init(e, t);
    e._zod.parse = (r, n)=>r;
    e._zod.check = (r)=>{
        let r_value = r.value;
        let s = t.fn(r_value);
        if (s instanceof Promise) {
            return s.then((i)=>no(i, r, r_value, e));
        }
        no(s, r, r_value, e);
    };
});
function no(e, t, input, n) {
    if (!e) {
        let s = {
            code: "custom",
            input,
            inst: n,
            path: [
                ...n._zod.def.path ?? []
            ],
            continue: !n._zod.def.abort
        };
        if (n._zod.def.params) {
            s.params = n._zod.def.params;
        }
        t.issues.push(RHt(s));
    }
}
function cn(irn, t) {
    return new irn({
        type: "string",
        ...Tl(t)
    });
}
function cPs(e, t) {
    return new e({
        type: "string",
        coerce: true,
        ...Tl(t)
    });
}
function je(e, t) {
    return new e({
        type: "string",
        format: "email",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function un(e, t) {
    return new e({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function Le(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function an(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v4",
        ...Tl(t)
    });
}
function ln(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v6",
        ...Tl(t)
    });
}
function pn(e, t) {
    return new e({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: false,
        version: "v7",
        ...Tl(t)
    });
}
function Fe(e, t) {
    return new e({
        type: "string",
        format: "url",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function fn(e, t) {
    return new e({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function dn(e, t) {
    return new e({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function mn(e, t) {
    return new e({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function hn(e, t) {
    return new e({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function _n(e, t) {
    return new e({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function gn(e, t) {
    return new e({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function xn(e, t) {
    return new e({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function vn(e, t) {
    return new e({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function zn(e, t) {
    return new e({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function yn(e, t) {
    return new e({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function $n(e, t) {
    return new e({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function Me(e, t) {
    return new e({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function bn(e, t) {
    return new e({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function kn(e, t) {
    return new e({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
function Zn(e, t) {
    return new e({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: false,
        ...Tl(t)
    });
}
const dPs = {
    Any: null,
    Minute: -1,
    Second: 0,
    Millisecond: 3,
    Microsecond: 6
};
function iCr(e, t) {
    return new e({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: false,
        local: false,
        precision: null,
        ...Tl(t)
    });
}
function aCr(e, t) {
    return new e({
        type: "string",
        format: "date",
        check: "string_format",
        ...Tl(t)
    });
}
function wn(e, t) {
    return new e({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...Tl(t)
    });
}
function Pn(e, t) {
    return new e({
        type: "string",
        format: "duration",
        check: "string_format",
        ...Tl(t)
    });
}
function Sn(e, t) {
    return new e({
        type: "number",
        checks: [],
        ...Tl(t)
    });
}
function uPs(e, t) {
    return new e({
        type: "number",
        coerce: true,
        checks: [],
        ...Tl(t)
    });
}
function In(e, t) {
    return new e({
        type: "number",
        check: "number_format",
        abort: false,
        format: "safeint",
        ...Tl(t)
    });
}
function On(e, t) {
    return new e({
        type: "number",
        check: "number_format",
        abort: false,
        format: "int32",
        ...Tl(t)
    });
}
function Tn(arn, t) {
    return new arn({
        type: "boolean",
        ...Tl(t)
    });
}
function pPs(e, t) {
    return new e({
        type: "boolean",
        coerce: true,
        ...Tl(t)
    });
}
function An(e, t) {
    return new e({
        type: "undefined",
        ...Tl(t)
    });
}
function En(e, t) {
    return new e({
        type: "null",
        ...Tl(t)
    });
}
function Nn(e) {
    return new e({
        type: "any"
    });
}
function Cn(e) {
    return new e({
        type: "unknown"
    });
}
function Rn(e, t) {
    return new e({
        type: "never",
        ...Tl(t)
    });
}
function pe(e, t) {
    return new ke({
        check: "less_than",
        ...Tl(t),
        value: e,
        inclusive: false
    });
}
function B(e, t) {
    return new ke({
        check: "less_than",
        ...Tl(t),
        value: e,
        inclusive: true
    });
}
function fe(e, t) {
    return new Ze({
        check: "greater_than",
        ...Tl(t),
        value: e,
        inclusive: false
    });
}
function V(e, t) {
    return new Ze({
        check: "greater_than",
        ...Tl(t),
        value: e,
        inclusive: true
    });
}
function de(e, t) {
    return new _r({
        check: "multiple_of",
        ...Tl(t),
        value: e
    });
}
function srn(maximum, t) {
    return new xr({
        check: "max_length",
        ...Tl(t),
        maximum
    });
}
function R(minimum, t) {
    return new vr({
        check: "min_length",
        ...Tl(t),
        minimum
    });
}
function me(length, t) {
    return new zr({
        check: "length_equals",
        ...Tl(t),
        length
    });
}
function Je(pattern, t) {
    return new yr({
        check: "string_format",
        format: "regex",
        ...Tl(t),
        pattern
    });
}
function Be(e) {
    return new $r({
        check: "string_format",
        format: "lowercase",
        ...Tl(e)
    });
}
function Ve(e) {
    return new br({
        check: "string_format",
        format: "uppercase",
        ...Tl(e)
    });
}
function Ke(includes, t) {
    return new kr({
        check: "string_format",
        format: "includes",
        ...Tl(t),
        includes
    });
}
function We(prefix, t) {
    return new Zr({
        check: "string_format",
        format: "starts_with",
        ...Tl(t),
        prefix
    });
}
function Ge(suffix, t) {
    return new wr({
        check: "string_format",
        format: "ends_with",
        ...Tl(t),
        suffix
    });
}
function N(tx) {
    return new Pr({
        check: "overwrite",
        tx
    });
}
function Ye(e) {
    return N((t)=>t.normalize(e));
}
function qe() {
    return N((e)=>e.trim());
}
function Xe() {
    return N((e)=>e.toLowerCase());
}
function He() {
    return N((e)=>e.toUpperCase());
}
function Qe() {
    return N((e)=>bPs(e));
}
function Dn(Qko, element, r) {
    return new Qko({
        type: "array",
        element,
        ...Tl(r)
    });
}
function jn(e, t, r) {
    let n = Tl(r);
    n.abort ??= true;
    return new e({
        type: "custom",
        check: "custom",
        fn: t,
        ...n
    });
}
function Ln(e, t, r) {
    return new e({
        type: "custom",
        check: "custom",
        fn: t,
        ...Tl(r)
    });
}
function Fn(e, t) {
    let r = si((n)=>{
        n.addIssue = (s)=>{
            if (typeof s === "string") {
                n.issues.push(RHt(s, n.value, r._zod.def));
            } else {
                let i = s;
                if (i.fatal) {
                    i.continue = false;
                }
                i.code ??= "custom";
                if (!("input" in i)) {
                    i.input = n.value;
                }
                i.inst ??= r;
                i.continue ??= !r._zod.def.abort;
                n.issues.push(RHt(i));
            }
        };
        return e(n.value, n);
    }, t);
    return r;
}
function si(e, t) {
    let r = new k({
        check: "custom",
        ...Tl(t)
    });
    r._zod.check = e;
    return r;
}
class Jn extends Error {
    constructor(){
        super("Cannot parse a reference cycle that closes through a transform");
        this.name = "ZodCyclicError";
    }
}
const tt = "~memo";
const Un = [];
function et(issues) {
    return issues.map((t)=>{
        if (t.path) {
            return {
                ...t,
                path: t.path.slice()
            };
        }
        return {
            ...t
        };
    });
}
const Mn = new WeakMap;
function Bn(e, t) {
    let r = Mn.get(e);
    if (r !== undefined) {
        return r;
    }
    if (t.has(e)) {
        return true;
    }
    t.add(e);
    let n = false;
    let s = (a)=>{
        if (!n && a?._zod && Bn(a, t)) {
            n = true;
        }
    };
    let def = e._zod.def;
    let i_type = def.type;
    switch(i_type){
        case "object":
            {
                for (let a of Reflect.ownKeys(def.shape)){
                    s(def.shape[a]);
                }
                s(def.catchall);
                break;
            }
        case "array":
            s(def.element);
            break;
        case "tuple":
            for (let a of def.items){
                s(a);
            }
            s(def.rest);
            break;
        case "record":
        case "map":
            s(def.keyType);
            s(def.valueType);
            break;
        case "set":
            s(def.valueType);
            break;
        case "union":
            for (let a of def.options){
                s(a);
            }
            break;
        case "intersection":
            s(def.left);
            s(def.right);
            break;
        case "optional":
        case "nullable":
        case "default":
        case "prefault":
        case "catch":
        case "readonly":
        case "nonoptional":
        case "promise":
        case "success":
            s(def.innerType);
            break;
        case "pipe":
            s(def.in);
            s(def.out);
            break;
        case "function":
            s(def.input);
            s(def.output);
            break;
        case "lazy":
            s(e._zod.innerType);
            break;
        case "template_literal":
        case "string":
        case "number":
        case "int":
        case "boolean":
        case "bigint":
        case "symbol":
        case "undefined":
        case "null":
        case "void":
        case "never":
        case "any":
        case "unknown":
        case "date":
        case "nan":
        case "enum":
        case "literal":
        case "file":
        case "transform":
        case "custom":
            break;
        default:
            for(let a in def){
                let l = Object.getOwnPropertyDescriptor(def, a);
                if (!l || l.get) {
                    continue;
                }
                let p = l.value;
                if (!p || typeof p !== "object") {
                    continue;
                }
                if (p._zod) {
                    s(p);
                } else if (Array.isArray(p)) {
                    for (let f of p){
                        s(f);
                    }
                }
            }
    }
    t.delete(e);
    Mn.set(e, n);
    return n;
}
function ii(e, t) {
    let r = e.buckets.get(t);
    if (!r) {
        r = new Map;
        e.buckets.set(t, r);
    }
    return r;
}
let he;
const _e = [];
const ci = {
    alloc (e, t, r) {
        let n = he;
        if (!n) {
            return r;
        }
        he = undefined;
        let s = {
            value: r,
            issues: null
        };
        n.set(t.value, s);
        _e.push(s);
        return r;
    },
    guard (e) {
        let t;
        (t = e._zod).deferred ?? (t.deferred = []);
        e._zod.deferred.push(()=>{
            let parse = e._zod.parse;
            let n = (s, i)=>{
                if (i.direction !== "backward" && ui(i, s.value)) {
                    throw new Jn;
                }
                return parse(s, i);
            };
            e._zod.parse = n;
            if (e._zod.run === parse) {
                e._zod.run = n;
            }
        });
    },
    attach (e) {
        let t;
        let r;
        let n;
        let s;
        (t = e._zod).deferred ?? (t.deferred = []);
        e._zod.deferred.push(()=>{
            let parse = e._zod.parse;
            let c = (a, l)=>{
                if (r === undefined) {
                    r = Bn(e, new Set);
                    if (!r) {
                        e._zod.parse = parse;
                        if (e._zod.run === c) {
                            e._zod.run = parse;
                        }
                        return parse(a, l);
                    }
                }
                let a_value = a.value;
                if (a_value === null || typeof a_value !== "object") {
                    return parse(a, l);
                }
                let f = l[tt];
                if (!f) {
                    f = {
                        buckets: new Map,
                        backEdges: undefined
                    };
                    l[tt] = f;
                }
                let d;
                if (n === l) {
                    d = s;
                } else {
                    d = ii(f, e);
                    n = l;
                    s = d;
                }
                let h = d.get(a_value);
                if (h) {
                    a.value = h.value;
                    if (h.issues) {
                        if (h.issues.length) {
                            a.issues.push(...et(h.issues));
                        }
                    } else {
                        a.memo = true;
                        f.backEdges ??= new Set;
                        f.backEdges.add(h.value);
                    }
                    return a;
                }
                he = d;
                let _e_length = _e.length;
                let _ = parse(a, l);
                he = undefined;
                let x = _e.length > _e_length ? _e.pop() : undefined;
                if (_ instanceof Promise) {
                    return _.then((g)=>{
                        if (x) {
                            x.issues = g.issues.length ? et(g.issues) : Un;
                        }
                        return g;
                    });
                }
                if (x) {
                    x.issues = _.issues.length ? et(_.issues) : Un;
                }
                return _;
            };
            e._zod.parse = c;
            if (e._zod.run === parse) {
                e._zod.run = c;
            }
        });
    }
};
function Vn() {
    return ci;
}
function ui(e, t) {
    let r = e[tt]?.backEdges;
    return r !== undefined && t !== null && typeof t === "object" && r.has(t);
}
const ai = ()=>{
    let e = {
        string: {
            unit: "characters",
            verb: "to have"
        },
        file: {
            unit: "bytes",
            verb: "to have"
        },
        array: {
            unit: "items",
            verb: "to have"
        },
        set: {
            unit: "items",
            verb: "to have"
        },
        map: {
            unit: "entries",
            verb: "to have"
        }
    };
    function t(origin) {
        return e[origin] ?? null;
    }
    let r = {
        regex: "input",
        email: "email address",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datetime",
        date: "ISO date",
        time: "ISO time",
        duration: "ISO duration",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        mac: "MAC address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        credit_card: "credit card number",
        jwt: "JWT",
        template_literal: "input"
    };
    let n = {
        nan: "NaN"
    };
    function s(i, c) {
        if (i === "number" && typeof c === "number" && !Number.isFinite(c)) {
            return String(c);
        }
        return n[i] ?? i;
    }
    return (i)=>{
        switch(i.code){
            case "invalid_type":
                {
                    let c = s(i.expected);
                    let a = APs(i.input);
                    let l = s(a, i.input);
                    return `Invalid input: expected ${c}, received ${l}`;
                }
            case "invalid_value":
                if (i.values.length === 1) {
                    return `Invalid input: expected ${rTo(i.values[0])}`;
                }
                return `Invalid option: expected one of ${eTo(i.values, "|")}`;
            case "too_big":
                {
                    let c = i.exact ? "exactly " : i.inclusive ? "<=" : "<";
                    let a = t(i.origin);
                    if (a) {
                        return `Too big: expected ${i.origin ?? "value"} to have ${c}${i.maximum.toString()} ${a.unit ?? "elements"}`;
                    }
                    return `Too big: expected ${i.origin ?? "value"} to be ${c}${i.maximum.toString()}`;
                }
            case "too_small":
                {
                    let c = i.exact ? "exactly " : i.inclusive ? ">=" : ">";
                    let a = t(i.origin);
                    if (a) {
                        return `Too small: expected ${i.origin} to have ${c}${i.minimum.toString()} ${a.unit}`;
                    }
                    return `Too small: expected ${i.origin} to be ${c}${i.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    let c = i;
                    if (c.format === "starts_with") {
                        return `Invalid string: must start with "${c.prefix}"`;
                    }
                    if (c.format === "ends_with") {
                        return `Invalid string: must end with "${c.suffix}"`;
                    }
                    if (c.format === "includes") {
                        return `Invalid string: must include "${c.includes}"`;
                    }
                    if (c.format === "regex") {
                        return `Invalid string: must match pattern ${c.pattern}`;
                    }
                    return `Invalid ${r[c.format] ?? i.format}`;
                }
            case "not_multiple_of":
                return `Invalid number: must be a multiple of ${i.divisor}`;
            case "unrecognized_keys":
                return `Unrecognized key${i.keys.length > 1 ? "s" : ""}: ${eTo(i.keys, ", ")}`;
            case "invalid_key":
                return `Invalid key in ${i.origin}`;
            case "invalid_union":
                if (i.options && Array.isArray(i.options) && i.options.length > 0) {
                    return `Invalid discriminator value. Expected ${i.options.map((a)=>`'${a}'`).join(" | ")}`;
                }
                if (i.inclusive === false) {
                    return "Invalid input: more than one option matched";
                }
                return "Invalid input";
            case "invalid_element":
                return `Invalid value in ${i.origin}`;
            default:
                return "Invalid input";
        }
    };
};
function rt() {
    return {
        localeError: ai()
    };
}
function K(e, ...t) {
    for (let r of t){
        for (let n of Reflect.ownKeys(r)){
            if (Object.prototype.propertyIsEnumerable.call(r, n)) {
                Fz(e, n, r[n]);
            }
        }
    }
    return e;
}
function G(e) {
    let target = e?.target ?? "draft-2020-12";
    if (target === "draft-4") {
        target = "draft-04";
    }
    if (target === "draft-7") {
        target = "draft-07";
    }
    return {
        processors: e.processors ?? {},
        metadataRegistry: e?.metadata ?? v5e,
        target,
        unrepresentable: e?.unrepresentable ?? "throw",
        override: e?.override ?? (()=>{}),
        io: e?.io ?? "output",
        counter: 0,
        seen: new Map,
        sharedDefsExtractedFor: undefined,
        sharedEmitDoneFor: undefined,
        cycles: e?.cycles ?? "ref",
        reused: e?.reused ?? "inline",
        intersections: [],
        deferred: [],
        external: e?.external ?? undefined
    };
}
function b(zodSchema, t, r, n, message) {
    let i = typeof t.unrepresentable === "function" ? t.unrepresentable({
        zodSchema,
        path: n.path,
        message
    }) : t.unrepresentable;
    if (i === "any") {
        return false;
    }
    if (i === undefined || i === "throw") {
        throw Error(message);
    }
    Object.assign(r, i);
    return true;
}
function QT(e, t, r = {
    path: [],
    schemaPath: []
}) {
    let n;
    let def = e._zod.def;
    let i = t.seen.get(e);
    if (i) {
        i.count++;
        if (r.schemaPath.includes(e)) {
            i.cycle = r.path;
        }
        return i.schema;
    }
    let c = {
        schema: {},
        count: 1,
        cycle: undefined,
        path: r.path
    };
    t.seen.set(e, c);
    t.sharedDefsExtractedFor = undefined;
    t.sharedEmitDoneFor = undefined;
    let a = e._zod.toJSONSchema?.();
    if (a) {
        c.schema = a;
    } else {
        let f = {
            ...r,
            schemaPath: [
                ...r.schemaPath,
                e
            ],
            path: r.path
        };
        if (e._zod.processJSONSchema) {
            e._zod.processJSONSchema(t, c.schema, f);
        } else {
            let h = c.schema;
            let m = t.processors[def.type];
            if (!m) {
                throw Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
            }
            m(e, t, h, f);
        }
        let d = e._zod.parent;
        if (d) {
            if (!c.ref) {
                c.ref = d;
            }
            QT(d, t, f);
            t.seen.get(d).isParent = true;
        }
    }
    let l = t.metadataRegistry.get(e);
    if (l) {
        K(c.schema, l);
    }
    if (t.io === "input" && Z(e)) {
        delete c.schema.examples;
        delete c.schema.default;
    }
    if (t.io === "input" && "_prefault" in c.schema) {
        (n = c.schema).default ?? (n.default = c.schema._prefault);
    }
    delete c.schema._prefault;
    return t.seen.get(e).schema;
}
function Kn(e) {
    return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Y(e, t) {
    let r = e.seen.get(t);
    if (!r) {
        throw Error("Unprocessed schema. This is a bug in Zod.");
    }
    if (e.external && e.sharedDefsExtractedFor === e.external) {
        return;
    }
    let n = new Map;
    for (let c of e.seen.entries()){
        let a = e.metadataRegistry.get(c[0])?.id;
        if (a) {
            let l = n.get(a);
            if (l && l !== c[0]) {
                throw Error(`Duplicate schema id "${a}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
            }
            n.set(a, c[0]);
        }
    }
    let s = (c)=>{
        let a = e.target === "draft-2020-12" ? "$defs" : "definitions";
        if (e.external) {
            let d = e.external.registry.get(c[0])?.id;
            let h = e.external.uri ?? ((_)=>_);
            if (d) {
                return {
                    ref: h(d)
                };
            }
            let m = c[1].defId ?? c[1].schema.id ?? `schema${e.counter++}`;
            c[1].defId = m;
            return {
                defId: m,
                ref: `${h("__shared")}#/${a}/${Kn(m)}`
            };
        }
        let ref = "#";
        let p = `${ref}/${a}/`;
        if (c[1] === r && !c[1].schema.id) {
            return {
                ref
            };
        }
        let f = c[1].schema.id ?? `__schema${e.counter++}`;
        return {
            defId: f,
            ref: p + Kn(f)
        };
    };
    let i = (c)=>{
        if (c[1].schema.$ref) {
            return;
        }
        let a = c[1];
        let { ref, defId } = s(c);
        a.def = {
            ...a.schema
        };
        if (defId) {
            a.defId = defId;
        }
        let a_schema = a.schema;
        for(let d in a_schema){
            delete a_schema[d];
        }
        a_schema.$ref = ref;
    };
    if (e.cycles === "throw") {
        for (let c of e.seen.entries()){
            let a = c[1];
            if (a.cycle) {
                throw Error(`Cycle detected: #/${a.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
            }
        }
    }
    for (let c of e.seen.entries()){
        let a = c[1];
        if (t === c[0]) {
            i(c);
            continue;
        }
        if (e.external) {
            let p = e.external.registry.get(c[0])?.id;
            if (t !== c[0] && p) {
                i(c);
                continue;
            }
        }
        if (e.metadataRegistry.get(c[0])?.id) {
            i(c);
            continue;
        }
        if (a.cycle) {
            i(c);
            continue;
        }
        if (a.count > 1) {
            if (e.reused === "ref") {
                i(c);
                continue;
            }
        }
    }
    if (e.external) {
        e.sharedDefsExtractedFor = e.external;
    }
}
function Yn(e) {
    let e_anyOf = e.anyOf;
    if (!Array.isArray(e_anyOf) || e_anyOf.length === 0 || e.type !== undefined) {
        return;
    }
    let r = [];
    for (let n of e_anyOf){
        if (!n || typeof n !== "object") {
            return;
        }
        Yn(n);
        let s = Object.keys(n);
        if (s.length !== 1 || s[0] !== "type") {
            return;
        }
        let i = n.type;
        for (let c of Array.isArray(i) ? i : [
            i
        ]){
            if (typeof c !== "string") {
                return;
            }
            if (!r.includes(c)) {
                r.push(c);
            }
        }
    }
    delete e.anyOf;
    e.type = r.length === 1 ? r[0] : r;
}
const qn = new Set([
    "type",
    "properties",
    "required",
    "additionalProperties"
]);
const Wn = [
    "oneOf",
    "anyOf"
];
function Gn({ additionalProperties }) {
    if (additionalProperties === undefined || additionalProperties === false || typeof additionalProperties !== "object" || additionalProperties === null) {
        return null;
    }
    if (Object.keys(additionalProperties).length) {
        return additionalProperties;
    }
    return null;
}
function ot(e) {
    let t = [];
    for (let i of e){
        if (typeof i !== "object" || i.type !== "object") {
            return null;
        }
        for(let c in i){
            if (!qn.has(c)) {
                return null;
            }
        }
        t.push(i);
    }
    let properties = {};
    let n = new Set;
    for (let i of t){
        for(let c in i.properties){
            if (Object.prototype.hasOwnProperty.call(properties, c)) {
                continue;
            }
            let a = [];
            for (let p of t){
                let f = p.properties?.[c] ?? Gn(p);
                if (f === null || f === undefined) {
                    continue;
                }
                if (!a.some((d)=>JSON.stringify(d) === JSON.stringify(f))) {
                    a.push(f);
                }
            }
            let l = a.length === 1 ? a[0] : ot(a) ?? {
                allOf: a
            };
            Fz(properties, c, l);
        }
        for (let c of i.required ?? []){
            n.add(c);
        }
    }
    let s = {
        type: "object",
        properties
    };
    if (n.size) {
        s.required = [
            ...n
        ];
    }
    if (t.every((i)=>i.additionalProperties === false)) {
        s.additionalProperties = false;
    } else {
        let i = [];
        for (let c of t){
            let a = Gn(c);
            if (a && !i.some((l)=>JSON.stringify(l) === JSON.stringify(a))) {
                i.push(a);
            }
        }
        if (i.length === 1) {
            s.additionalProperties = i[0];
        } else if (i.length > 1) {
            s.additionalProperties = {
                allOf: i
            };
        }
    }
    return s;
}
function li(e) {
    let e_allOf = e.allOf;
    if (!Array.isArray(e_allOf) || e_allOf.length < 2) {
        return;
    }
    for (let s of qn){
        if (s in e) {
            return;
        }
    }
    let r = e_allOf.filter((s)=>Wn.some((i)=>Array.isArray(s[i])));
    let n = null;
    if (!r.length) {
        n = ot(e_allOf);
    } else {
        let s = r[0];
        let i = Wn.find((l)=>Array.isArray(s[l]));
        if (Object.keys(s).length !== 1) {
            return;
        }
        let c = e_allOf.filter((l)=>l !== s);
        let a = s[i].map((l)=>ot([
                ...c,
                l
            ]));
        if (a.some((l)=>!l)) {
            return;
        }
        n = {
            [i]: a
        };
    }
    if (!n) {
        return;
    }
    delete e.allOf;
    K(e, n);
}
function q(e, t) {
    let r = e.seen.get(t);
    if (!r) {
        throw Error("Unprocessed schema. This is a bug in Zod.");
    }
    let n = (zodSchema)=>{
        let l = e.seen.get(zodSchema);
        if (l.ref === null) {
            return;
        }
        let jsonSchema = l.def ?? l.schema;
        let f = {
            ...jsonSchema
        };
        let l_ref = l.ref;
        l.ref = null;
        if (l_ref) {
            n(l_ref);
            let m = e.seen.get(l_ref);
            let _ = m.schema;
            if (_.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0")) {
                jsonSchema.allOf = jsonSchema.allOf ?? [];
                jsonSchema.allOf.push(_);
            } else {
                K(jsonSchema, _);
            }
            K(jsonSchema, f);
            if (zodSchema._zod.parent === l_ref) {
                for(let g in jsonSchema){
                    if (g === "$ref" || g === "allOf") {
                        continue;
                    }
                    if (!(g in f)) {
                        delete jsonSchema[g];
                    }
                }
            }
            if (_.$ref && m.def) {
                for(let g in jsonSchema){
                    if (g === "$ref" || g === "allOf") {
                        continue;
                    }
                    if (g in m.def && JSON.stringify(jsonSchema[g]) === JSON.stringify(m.def[g])) {
                        delete jsonSchema[g];
                    }
                }
            }
        }
        let parent = zodSchema._zod.parent;
        if (parent && parent !== l_ref) {
            n(parent);
            let m = e.seen.get(parent);
            if (m?.schema.$ref) {
                jsonSchema.$ref = m.schema.$ref;
                if (m.def) {
                    for(let _ in jsonSchema){
                        if (_ === "$ref" || _ === "allOf") {
                            continue;
                        }
                        if (_ in m.def && JSON.stringify(jsonSchema[_]) === JSON.stringify(m.def[_])) {
                            delete jsonSchema[_];
                        }
                    }
                }
            }
        }
        e.override({
            zodSchema,
            jsonSchema,
            path: l.path ?? []
        });
    };
    if (!e.external || e.sharedEmitDoneFor !== e.external) {
        for (let a of [
            ...e.seen.entries()
        ].reverse()){
            n(a[0]);
        }
        if (e.target !== "openapi-3.0") {
            for (let a of e.seen.entries()){
                Yn(a[1].def ?? a[1].schema);
            }
        }
        for (let a of e.deferred){
            a();
        }
        if (e.intersections.length) {
            let a = new Map;
            for (let l of e.seen.values()){
                for (let p of [
                    l.schema,
                    l.def
                ]){
                    let f = p?.allOf;
                    if (!Array.isArray(f)) {
                        continue;
                    }
                    let d = a.get(f);
                    if (d) {
                        d.push(p);
                    } else {
                        a.set(f, [
                            p
                        ]);
                    }
                }
            }
            for (let l of e.intersections){
                for (let p of a.get(l) ?? []){
                    li(p);
                }
            }
        }
    }
    let s = {};
    if (e.target === "draft-2020-12") {
        s.$schema = "https://json-schema.org/draft/2020-12/schema";
    } else if (e.target === "draft-07") {
        s.$schema = "http://json-schema.org/draft-07/schema#";
    } else if (e.target === "draft-04") {
        s.$schema = "http://json-schema.org/draft-04/schema#";
    } else if (e.target === "openapi-3.0") ;
    if (e.external?.uri) {
        let a = e.external.registry.get(t)?.id;
        if (!a) {
            throw Error("Schema is missing an `id` property");
        }
        s.$id = e.external.uri(a);
    }
    K(s, r.defId ? r.schema : r.def ?? r.schema);
    let i = e.metadataRegistry.get(t)?.id;
    if (i !== undefined && s.id === i) {
        delete s.id;
    }
    let c = e.external?.defs ?? {};
    if (!e.external || e.sharedEmitDoneFor !== e.external) {
        for (let a of e.seen.entries()){
            let l = a[1];
            if (l.def && l.defId) {
                if (l.def.id === l.defId) {
                    delete l.def.id;
                }
                Fz(c, l.defId, l.def);
            }
        }
    }
    if (e.external) {
        e.sharedEmitDoneFor = e.external;
    }
    if (e.external) ;
    else if (Object.keys(c).length > 0) {
        if (e.target === "draft-2020-12") {
            s.$defs = c;
        } else {
            s.definitions = c;
        }
    }
    try {
        let a = JSON.parse(JSON.stringify(s));
        Object.defineProperty(a, "~standard", {
            value: {
                ...t["~standard"],
                jsonSchema: {
                    input: W(t, "input", e.processors),
                    output: W(t, "output", e.processors)
                }
            },
            enumerable: false,
            writable: false
        });
        return a;
    } catch (a) {
        throw Error("Error converting schema to JSON.");
    }
}
function Z(e, t) {
    let r = t ?? {
        seen: new Set
    };
    if (r.seen.has(e)) {
        return false;
    }
    r.seen.add(e);
    let def = e._zod.def;
    if (def.type === "transform") {
        return true;
    }
    if (def.type === "array") {
        return Z(def.element, r);
    }
    if (def.type === "set") {
        return Z(def.valueType, r);
    }
    if (def.type === "lazy") {
        return Z(def.getter(), r);
    }
    if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault" || def.type === "catch") {
        return Z(def.innerType, r);
    }
    if (def.type === "intersection") {
        return Z(def.left, r) || Z(def.right, r);
    }
    if (def.type === "record" || def.type === "map") {
        return Z(def.keyType, r) || Z(def.valueType, r);
    }
    if (def.type === "pipe") {
        if (e._zod.traits.has("$ZodCodec")) {
            return true;
        }
        return Z(def.in, r) || Z(def.out, r);
    }
    if (def.type === "object") {
        for(let s in def.shape){
            if (Z(def.shape[s], r)) {
                return true;
            }
        }
        return false;
    }
    if (def.type === "union") {
        for (let s of def.options){
            if (Z(s, r)) {
                return true;
            }
        }
        return false;
    }
    if (def.type === "tuple") {
        for (let s of def.items){
            if (Z(s, r)) {
                return true;
            }
        }
        if (def.rest && Z(def.rest, r)) {
            return true;
        }
        return false;
    }
    return false;
}
const Xn = (e, t = {})=>(r)=>{
        let n = G({
            ...r,
            processors: t
        });
        QT(e, n);
        Y(n, e);
        return q(n, e);
    };
var W = (e, io_1, r = {})=>(n)=>{
        let { libraryOptions, target } = n ?? {};
        let c = G({
            ...libraryOptions ?? {},
            target,
            io: io_1,
            processors: r
        });
        QT(e, c);
        Y(c, e);
        return q(c, e);
    };
const pi = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: ""
};
const string = (e, t, r, n)=>{
    let s = r;
    s.type = "string";
    let { minimum, maximum, format, patterns, contentEncoding, laxFormat } = e._zod.bag;
    if (typeof minimum === "number") {
        s.minLength = minimum;
    }
    if (typeof maximum === "number") {
        s.maxLength = maximum;
    }
    if (format) {
        s.format = pi[format] ?? format;
        if (s.format === "") {
            delete s.format;
        }
        if (format === "time" || laxFormat) {
            delete s.format;
        }
    }
    if (contentEncoding) {
        s.contentEncoding = contentEncoding;
    }
    if (patterns && patterns.size > 0) {
        let d = [
            ...patterns
        ];
        if (d.length === 1) {
            s.pattern = d[0].source;
        } else if (d.length > 1) {
            s.allOf = [
                ...d.map((h)=>({
                        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? {
                            type: "string"
                        } : {},
                        pattern: h.source
                    }))
            ];
        }
    }
};
const number = (e, t, r, n)=>{
    let s = r;
    let { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = e._zod.bag;
    if (typeof format === "string" && format.includes("int")) {
        s.type = "integer";
    } else {
        s.type = "number";
    }
    let d = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
    let h = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
    let m = t.target === "draft-04" || t.target === "openapi-3.0";
    if (d) {
        if (m) {
            s.minimum = exclusiveMinimum;
            s.exclusiveMinimum = true;
        } else {
            s.exclusiveMinimum = exclusiveMinimum;
        }
    } else if (typeof minimum === "number") {
        s.minimum = minimum;
    }
    if (h) {
        if (m) {
            s.maximum = exclusiveMaximum;
            s.exclusiveMaximum = true;
        } else {
            s.exclusiveMaximum = exclusiveMaximum;
        }
    } else if (typeof maximum === "number") {
        s.maximum = maximum;
    }
    if (typeof multipleOf === "number") {
        if (Number.isFinite(multipleOf) && multipleOf !== 0) {
            s.multipleOf = Math.abs(multipleOf);
        } else {
            b(e, t, s, n, `A multipleOf divisor of ${multipleOf} cannot be represented in JSON Schema`);
        }
    }
};
const boolean = (e, t, r, n)=>{
    r.type = "boolean";
};
const bigint = (e, t, r, n)=>{
    b(e, t, r, n, "BigInt cannot be represented in JSON Schema");
};
const symbol = (e, t, r, n)=>{
    b(e, t, r, n, "Symbols cannot be represented in JSON Schema");
};
const at = (e, t, r, n)=>{
    if (t.target === "openapi-3.0") {
        r.type = "string";
        r.nullable = true;
        r.enum = [
            null
        ];
    } else {
        r.type = "null";
    }
};
const undefined_1 = (e, t, r, n)=>{
    b(e, t, r, n, "Undefined cannot be represented in JSON Schema");
};
const ts = (e, t, r, n)=>{
    b(e, t, r, n, "Void cannot be represented in JSON Schema");
};
const never = (e, t, r, n)=>{
    r.not = {};
};
const any = (e, t, r, n)=>{};
const unknown = (e, t, r, n)=>{};
const date = (e, t, r, n)=>{
    b(e, t, r, n, "Date cannot be represented in JSON Schema");
};
const mt = (e, t, r, n)=>{
    let def = e._zod.def;
    let i = dCr(def.entries);
    if (i.length === 0) {
        r.not = {};
        return;
    }
    if (i.every((c)=>typeof c === "number")) {
        r.type = "number";
    }
    if (i.every((c)=>typeof c === "string")) {
        r.type = "string";
    }
    r.enum = i;
};
const literal = (e, t, r, n)=>{
    let def = e._zod.def;
    if (def.values.length === 0) {
        r.not = {};
        return;
    }
    let i = [];
    for (let c of def.values){
        if (c === undefined) {
            if (b(e, t, r, n, "Literal `undefined` cannot be represented in JSON Schema")) {
                return;
            }
        } else if (typeof c === "bigint") {
            if (b(e, t, r, n, "BigInt literals cannot be represented in JSON Schema")) {
                return;
            }
            i.push(Number(c));
        } else {
            i.push(c);
        }
    }
    if (i.length === 0) ;
    else if (i.length === 1) {
        let c = i[0];
        r.type = c === null ? "null" : typeof c;
        if (t.target === "draft-04" || t.target === "openapi-3.0") {
            r.enum = [
                c
            ];
        } else {
            r.const = c;
        }
    } else {
        if (i.every((c)=>typeof c === "number")) {
            r.type = "number";
        }
        if (i.every((c)=>typeof c === "string")) {
            r.type = "string";
        }
        if (i.every((c)=>typeof c === "boolean")) {
            r.type = "boolean";
        }
        if (i.every((c)=>c === null)) {
            r.type = "null";
        }
        r.enum = i;
    }
};
const nan = (e, t, r, n)=>{
    b(e, t, r, n, "NaN cannot be represented in JSON Schema");
};
const template_literal = (e, t, r, n)=>{
    let s = r;
    let pattern = e._zod.pattern;
    if (!pattern) {
        throw Error("Pattern not found in template literal");
    }
    s.type = "string";
    s.pattern = pattern.source;
};
const file = (e, t, r, n)=>{
    let s = r;
    let i = {
        type: "string",
        format: "binary",
        contentEncoding: "binary"
    };
    let { minimum, maximum, mime } = e._zod.bag;
    if (minimum !== undefined) {
        i.minLength = minimum;
    }
    if (maximum !== undefined) {
        i.maxLength = maximum;
    }
    if (mime) {
        if (mime.length === 1) {
            i.contentMediaType = mime[0];
            Object.assign(s, i);
        } else {
            Object.assign(s, i);
            s.anyOf = mime.map((contentMediaType)=>({
                    contentMediaType
                }));
        }
    } else {
        Object.assign(s, i);
    }
};
const success = (e, t, r, n)=>{
    r.type = "boolean";
};
const custom = (e, t, r, n)=>{
    b(e, t, r, n, "Custom types cannot be represented in JSON Schema");
};
const cs = (e, t, r, n)=>{
    b(e, t, r, n, "Function types cannot be represented in JSON Schema");
};
const transform = (e, t, r, n)=>{
    b(e, t, r, n, "Transforms cannot be represented in JSON Schema");
};
const map = (e, t, r, n)=>{
    b(e, t, r, n, "Map cannot be represented in JSON Schema");
};
const as = (e, t, r, n)=>{
    b(e, t, r, n, "Set cannot be represented in JSON Schema");
};
const array = (e, t, r, n)=>{
    let s = r;
    let def = e._zod.def;
    let { minimum, maximum } = e._zod.bag;
    if (typeof minimum === "number") {
        s.minItems = minimum;
    }
    if (typeof maximum === "number") {
        s.maxItems = maximum;
    }
    s.type = "array";
    s.items = QT(def.element, t, {
        ...n,
        path: [
            ...n.path,
            "items"
        ]
    });
};
function X(e) {
    let def = e._zod.def;
    if (def.type === "pipe" && def.in._zod.traits.has("$ZodTransform")) {
        return X(def.out);
    }
    if (def.type === "catch") {
        return X(def.innerType);
    }
    return e._zod.optin;
}
const object = (e, t, r, n)=>{
    let s = r;
    let def = e._zod.def;
    let i_shape = def.shape;
    if (Object.getOwnPropertySymbols(i_shape).length && b(e, t, s, n, "Symbol keys cannot be represented in JSON Schema")) {
        return;
    }
    s.type = "object";
    s.properties = {};
    for(let f in i_shape){
        Fz(s.properties, f, QT(i_shape[f], t, {
            ...n,
            path: [
                ...n.path,
                "properties",
                f
            ]
        }));
    }
    let l = new Set(Object.keys(i_shape));
    let p = new Set([
        ...l
    ].filter((f)=>{
        let d = def.shape[f];
        if (t.io === "input") {
            return X(d) === undefined;
        } else {
            return d._zod.optout === undefined;
        }
    }));
    if (p.size > 0) {
        s.required = Array.from(p);
    }
    if (def.catchall?._zod.def.type === "never") {
        s.additionalProperties = false;
    } else if (!def.catchall) {
        if (t.io === "output") {
            s.additionalProperties = false;
        }
    } else if (def.catchall) {
        s.additionalProperties = QT(def.catchall, t, {
            ...n,
            path: [
                ...n.path,
                "additionalProperties"
            ]
        });
    }
};
const union = (e, t, r, n)=>{
    let def = e._zod.def;
    let i = def.inclusive === false;
    let c = def.options.map((a, l)=>QT(a, t, {
            ...n,
            path: [
                ...n.path,
                i ? "oneOf" : "anyOf",
                l
            ]
        }));
    if (i) {
        r.oneOf = c;
    } else {
        r.anyOf = c;
    }
};
const intersection = (e, t, r, n)=>{
    let def = e._zod.def;
    let i = QT(def.left, t, {
        ...n,
        path: [
            ...n.path,
            "allOf",
            0
        ]
    });
    let c = QT(def.right, t, {
        ...n,
        path: [
            ...n.path,
            "allOf",
            1
        ]
    });
    let a = (p)=>"allOf" in p && Object.keys(p).length === 1;
    let l = [
        ...a(i) ? i.allOf : [
            i
        ],
        ...a(c) ? c.allOf : [
            c
        ]
    ];
    r.allOf = l;
    t.intersections.push(l);
};
const tuple = (e, t, r, n)=>{
    let s = r;
    let def = e._zod.def;
    s.type = "array";
    let c = t.target === "draft-2020-12" ? "prefixItems" : "items";
    let a = t.target === "draft-2020-12" ? "items" : t.target === "openapi-3.0" ? "items" : "additionalItems";
    let anyOf = def.items.map((x, g)=>QT(x, t, {
            ...n,
            path: [
                ...n.path,
                c,
                g
            ]
        }));
    let p = def.rest ? QT(def.rest, t, {
        ...n,
        path: [
            ...n.path,
            a,
            ...t.target === "openapi-3.0" ? [
                def.items.length
            ] : []
        ]
    }) : null;
    let length = def.items.length;
    while(length > 0){
        let x = def.items[length - 1];
        if (!(t.io === "input" ? X(x) !== undefined : x._zod.optout === "optional")) {
            break;
        }
        length--;
    }
    let length_1 = def.items.length;
    let h = !def.rest;
    if (t.target === "draft-2020-12") {
        s.prefixItems = anyOf;
        if (h) {
            s.items = false;
        } else if (p) {
            s.items = p;
        }
        if (length > 0) {
            s.minItems = length;
        }
        if (h) {
            s.maxItems = length_1;
        }
    } else if (t.target === "openapi-3.0") {
        s.items = {
            anyOf
        };
        if (p) {
            s.items.anyOf.push(p);
        }
        if (length > 0) {
            s.minItems = length;
        }
        if (h) {
            s.maxItems = length_1;
        }
    } else {
        s.items = anyOf;
        if (h) {
            s.additionalItems = false;
        } else if (p) {
            s.additionalItems = p;
        }
        if (length > 0) {
            s.minItems = length;
        }
        if (h) {
            s.maxItems = length_1;
        }
    }
    let { minimum, maximum } = e._zod.bag;
    if (typeof minimum === "number") {
        s.minItems = minimum;
    }
    if (typeof maximum === "number") {
        s.maxItems = maximum;
    }
};
function nt(e, t, r) {
    if (t.$ref) {
        if (r.has(t)) {
            return t;
        }
        r.add(t);
        let _ = e.get(t)?.def;
        if (!_) {
            return t;
        }
        let x = nt(e, _, r);
        if (x === _) {
            return t;
        }
        return x;
    }
    for (let _ of [
        "anyOf",
        "oneOf"
    ]){
        let x = t[_];
        if (!Array.isArray(x)) {
            continue;
        }
        let g = x.map((I)=>nt(e, I, r));
        if (g.some((I, C)=>I !== x[C])) {
            t = {
                ...t,
                [_]: g
            };
        }
    }
    let n = Array.isArray(t.type) ? t.type : [
        t.type
    ];
    let s = !n.includes("string") && n.some((_)=>_ === "number" || _ === "integer");
    let i = t.enum ?? (t.const !== undefined ? [
        t.const
    ] : undefined);
    if (!s && !i?.some((_)=>typeof _ === "number")) {
        return t;
    }
    let { minimum, maximum, exclusiveMinimum, exclusiveMaximum, multipleOf, format, id, ...rest } = t;
    if (rest.enum) {
        rest.enum = rest.enum.map((_)=>{
            if (typeof _ === "number") {
                return String(_);
            }
            return _;
        });
    } else if (typeof rest.const === "number") {
        rest.const = String(rest.const);
    }
    if (!s) {
        return rest;
    }
    rest.type = "string";
    if (!i) {
        rest.pattern = (n.includes("number") ? D : ee).source;
    }
    return rest;
}
const st = new WeakMap;
function fi(e) {
    let t = new Map;
    for (let n of e.seen.values()){
        if (n.def && !t.has(n.schema)) {
            t.set(n.schema, n);
        }
    }
    let r = new Map;
    for (let n of st.get(e) ?? []){
        let s = e.seen.get(n);
        let i = (s?.def ?? s?.schema)?.propertyNames;
        if (!i || i === true || r.has(i)) {
            continue;
        }
        let c = nt(t, i, new Set);
        if (c !== i) {
            r.set(i, c);
        }
    }
    if (!r.size) {
        return;
    }
    for (let n of e.seen.values()){
        for (let s of [
            n.schema,
            n.def
        ]){
            let i = s && r.get(s.propertyNames);
            if (i) {
                s.propertyNames = i;
            }
        }
    }
}
const record = (e, t, r, n)=>{
    let s = r;
    let def = e._zod.def;
    s.type = "object";
    let i_keyType = def.keyType;
    let l = i_keyType._zod.bag?.patterns;
    if (def.mode === "loose" && l && l.size > 0) {
        let d = QT(def.valueType, t, {
            ...n,
            path: [
                ...n.path,
                "patternProperties",
                "*"
            ]
        });
        s.patternProperties = {};
        for (let h of l){
            Fz(s.patternProperties, h.source, d);
        }
    } else {
        if (t.target === "draft-07" || t.target === "draft-2020-12") {
            s.propertyNames = QT(def.keyType, t, {
                ...n,
                path: [
                    ...n.path,
                    "propertyNames"
                ]
            });
            let d = st.get(t);
            if (!d) {
                d = [];
                st.set(t, d);
                t.deferred.push(()=>fi(t));
            }
            d.push(e);
        }
        s.additionalProperties = QT(def.valueType, t, {
            ...n,
            path: [
                ...n.path,
                "additionalProperties"
            ]
        });
    }
    let values = i_keyType._zod.values;
    let f = t.io === "input" && X(def.valueType) !== undefined;
    if (values && !def.partial && !f) {
        let d = [
            ...values
        ].filter((h)=>typeof h === "string" || typeof h === "number");
        if (d.length > 0) {
            s.required = d.map(String);
        }
    }
};
const nullable = (e, t, r, n)=>{
    let def = e._zod.def;
    let i = QT(def.innerType, t, n);
    let c = t.seen.get(e);
    if (t.target === "openapi-3.0") {
        c.ref = def.innerType;
        r.nullable = true;
    } else {
        r.anyOf = [
            i,
            {
                type: "null"
            }
        ];
    }
};
const nonoptional = (e, t, r, n)=>{
    let def = e._zod.def;
    QT(def.innerType, t, n);
    let i = t.seen.get(e);
    i.ref = def.innerType;
};
const Pt = Symbol();
function ls(defaultValue, t, r, n, s) {
    let i = false;
    let c = JSON.stringify(defaultValue, (a, l)=>{
        if (typeof l !== "bigint") {
            return l;
        }
        i = true;
        return null;
    });
    if (!i) {
        return JSON.parse(c);
    }
    b(t, r, n, s, "BigInt defaults cannot be represented in JSON Schema");
    return Pt;
}
const St = (e, t, r, n)=>{
    let def = e._zod.def;
    QT(def.innerType, t, n);
    let i = t.seen.get(e);
    i.ref = def.innerType;
    let c = ls(def.defaultValue, e, t, r, n);
    if (c !== Pt) {
        r.default = c;
    }
};
const prefault = (e, t, r, n)=>{
    let def = e._zod.def;
    QT(def.innerType, t, n);
    let i = t.seen.get(e);
    i.ref = def.innerType;
    if (t.io !== "input") {
        return;
    }
    let c = ls(def.defaultValue, e, t, r, n);
    if (c !== Pt) {
        r._prefault = c;
    }
};
const Ot = (e, t, r, n)=>{
    let def = e._zod.def;
    QT(def.innerType, t, n);
    let i = t.seen.get(e);
    i.ref = def.innerType;
    let c;
    try {
        c = def.catchValue(undefined);
    } catch  {
        b(e, t, r, n, "Dynamic catch values are not supported in JSON Schema");
        return;
    }
    r.default = c;
};
const pipe = (e, t, r, n)=>{
    let def = e._zod.def;
    let i = def.in._zod.traits.has("$ZodTransform");
    let c = t.io === "input" ? i ? def.out : def.in : def.out;
    QT(c, t, n);
    let a = t.seen.get(e);
    a.ref = c;
};
const readonly = (e, t, r, n)=>{
    let def = e._zod.def;
    QT(def.innerType, t, n);
    let i = t.seen.get(e);
    i.ref = def.innerType;
    r.readOnly = true;
};
const promise = (e, t, r, n)=>{
    let def = e._zod.def;
    QT(def.innerType, t, n);
    let i = t.seen.get(e);
    i.ref = def.innerType;
};
const optional = (e, t, r, n)=>{
    let def = e._zod.def;
    QT(def.innerType, t, n);
    let i = t.seen.get(e);
    i.ref = def.innerType;
};
const lazy = (e, t, r, n)=>{
    let innerType = e._zod.innerType;
    QT(innerType, t, n);
    let i = t.seen.get(e);
    i.ref = innerType;
};
const Hn = {
    string,
    number,
    boolean,
    bigint,
    symbol,
    null: at,
    undefined: undefined_1,
    void: ts,
    never,
    any,
    unknown,
    date,
    enum: mt,
    literal,
    nan,
    template_literal,
    file,
    success,
    custom,
    function: cs,
    transform,
    map,
    set: as,
    array,
    object,
    union,
    intersection,
    tuple,
    record,
    nullable,
    nonoptional,
    default: St,
    prefault,
    catch: Ot,
    pipe,
    readonly,
    promise,
    optional,
    lazy
};
function E5e(e, t) {
    if ("_idmap" in e) {
        let registry = e;
        let s = G({
            ...t,
            processors: Hn
        });
        let defs = {};
        for (let l of registry._idmap.entries()){
            let [p, f] = l;
            QT(f, s);
        }
        let schemas = {};
        let a = {
            registry,
            uri: t?.uri,
            defs
        };
        s.external = a;
        for (let l of registry._idmap.entries()){
            let [p, f] = l;
            Y(s, f);
            Fz(schemas, p, q(s, f));
        }
        if (Object.keys(defs).length > 0) {
            let l = s.target === "draft-2020-12" ? "$defs" : "definitions";
            schemas.__shared = {
                [l]: defs
            };
        }
        return {
            schemas
        };
    }
    let r = G({
        ...t,
        processors: Hn
    });
    QT(e, r);
    Y(r, e);
    return q(r, e);
}
const fs = new WeakSet([
    Object.prototype,
    Error.prototype
]);
function xe(e, t, r) {
    Object.defineProperty(e, t, {
        configurable: true,
        enumerable: false,
        get () {
            let n = r(this);
            Object.defineProperty(this, t, {
                value: n,
                configurable: true,
                writable: true
            });
            return n;
        },
        set (n) {
            Object.defineProperty(this, t, {
                value: n,
                configurable: true,
                writable: true
            });
        }
    });
}
const ds = (e, t)=>{
    re.init(e, t);
    e.name = "ZodError";
    let r = Object.getPrototypeOf(e);
    if (fs.has(r)) {
        return;
    }
    fs.add(r);
    xe(r, "format", (n)=>(s)=>Nr(n, s));
    xe(r, "flatten", (n)=>(s)=>Er(n, s));
    xe(r, "addIssue", (n)=>(s)=>{
            n.issues.push(s);
            n.message = JSON.stringify(n.issues, Uzn, 2);
        });
    xe(r, "addIssues", (n)=>(s)=>{
            n.issues.push(...s);
            n.message = JSON.stringify(n.issues, Uzn, 2);
        });
    Object.defineProperty(r, "isEmpty", {
        configurable: true,
        enumerable: false,
        get () {
            return this.issues.length === 0;
        }
    });
};
const IR = dr("ZodError", ds);
const P = dr("ZodError", ds, undefined, {
    Parent: Error
});
const ms = se(P);
const hs = ie(P);
const lCr = F(P);
const _s = J(P);
const gs = Rr(P);
const xs = Dr(P);
const vs = jr(P);
const zs = Lr(P);
const ys = Fr(P);
const $s = Ur(P);
const bs = Mr(P);
const ks = Jr(P);
function zi() {
    if (!pZ.localeError) {
        Y8(rt());
    }
}
function Q() {
    if (!pZ.memoizer) {
        Y8({
            memoizer: Vn()
        });
    }
}
const Bv = dr("ZodType", (e, t)=>{
    zi();
    Uv.init(e, t);
    e.def = t;
    e.type = t.type;
    return e;
}, {
    check (...e) {
        let def = this.def;
        return this.clone(Rut(def, {
            checks: [
                ...def.checks ?? [],
                ...e.map((check)=>{
                    if (typeof check === "function") {
                        return {
                            _zod: {
                                check,
                                def: {
                                    check: "custom"
                                },
                                onattach: []
                            }
                        };
                    }
                    return check;
                })
            ]
        }), {
            parent: true
        });
    },
    with (...e) {
        return this.check(...e);
    },
    clone (e, t) {
        return AUe(this, e, t);
    },
    brand () {
        return this;
    },
    register (e, t) {
        e.add(this, t);
        return this;
    },
    refine (e, t) {
        return this.check(ic(e, t));
    },
    superRefine (e, t) {
        return this.check(cc(e, t));
    },
    overwrite (e) {
        return this.check(N(e));
    },
    optional () {
        return Ii(this);
    },
    exactOptional () {
        return Gi(this);
    },
    nullable () {
        return Zs(this);
    },
    nullish () {
        return Ii(Zs(this));
    },
    nonoptional (e) {
        return ec(this, e);
    },
    array () {
        return T(this);
    },
    or (e) {
        return Ue([
            this,
            e
        ]);
    },
    and (e) {
        return upe(this, e);
    },
    transform (e) {
        return ws(this, Es(e));
    },
    default (e) {
        return Xi(this, e);
    },
    prefault (e) {
        return Qi(this, e);
    },
    catch (e) {
        return tc(this, e);
    },
    pipe (e) {
        return ws(this, e);
    },
    readonly () {
        return nc(this);
    },
    describe (description) {
        let t = this.clone();
        v5e.add(t, {
            description
        });
        return t;
    },
    meta (...e) {
        if (e.length === 0) {
            return v5e.get(this);
        }
        let t = this.clone();
        v5e.add(t, e[0]);
        return t;
    },
    isOptional () {
        return this.safeParse(undefined).success;
    },
    isNullable () {
        return this.safeParse(null).success;
    },
    apply (e, ...t) {
        if (t.length === 0) {
            return e(this);
        }
        return e(this, ...t);
    },
    get "~standard" () {
        return sTo(this, "~standard", {
            ...Ae(this),
            jsonSchema: {
                input: W(this, "input"),
                output: W(this, "output")
            }
        });
    },
    set "~standard" (e){
        xHt(this, "~standard", e);
    },
    parse: function e(t, r) {
        return ms(this, t, r, {
            callee: e
        });
    },
    parseAsync: async function e(t, r) {
        return await hs(this, t, r, {
            callee: e
        });
    },
    safeParse (e, t) {
        return lCr(this, e, t);
    },
    async safeParseAsync (e, t) {
        return _s(this, e, t);
    },
    get spa () {
        return this?.safeParseAsync;
    },
    set spa (e){
        xHt(this, "spa", e);
    },
    encode: function e(t, r) {
        return gs(this, t, r, {
            callee: e
        });
    },
    decode: function e(t, r) {
        return xs(this, t, r, {
            callee: e
        });
    },
    encodeAsync: async function e(t, r) {
        return await vs(this, t, r, {
            callee: e
        });
    },
    decodeAsync: async function e(t, r) {
        return await zs(this, t, r, {
            callee: e
        });
    },
    safeEncode (e, t) {
        return ys(this, e, t);
    },
    safeDecode (e, t) {
        return $s(this, e, t);
    },
    async safeEncodeAsync (e, t) {
        return bs(this, e, t);
    },
    async safeDecodeAsync (e, t) {
        return ks(this, e, t);
    },
    toJSONSchema (e) {
        return Xn(this, {})(e);
    },
    get description () {
        return v5e.get(this)?.description;
    },
    get _def () {
        return this._zod.def;
    }
});
const Ps = dr("_ZodString", (e, t)=>{
    le.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (n, s, i)=>string(e, n, s, i);
    let bag = e._zod.bag;
    e.format = bag.format ?? null;
    e.minLength = bag.minimum ?? null;
    e.maxLength = bag.maximum ?? null;
}, {
    regex (...e) {
        return this.check(Je(...e));
    },
    includes (...e) {
        return this.check(Ke(...e));
    },
    startsWith (...e) {
        return this.check(We(...e));
    },
    endsWith (...e) {
        return this.check(Ge(...e));
    },
    min (...e) {
        return this.check(R(...e));
    },
    max (...e) {
        return this.check(srn(...e));
    },
    length (...e) {
        return this.check(me(...e));
    },
    nonempty (...e) {
        return this.check(R(1, ...e));
    },
    lowercase (e) {
        return this.check(Be(e));
    },
    uppercase (e) {
        return this.check(Ve(e));
    },
    trim () {
        return this.check(qe());
    },
    normalize (...e) {
        return this.check(Ye(...e));
    },
    toLowerCase () {
        return this.check(Xe());
    },
    toUpperCase () {
        return this.check(He());
    },
    slugify () {
        return this.check(Qe());
    }
});
const irn = dr("ZodString", (e, t)=>{
    le.init(e, t);
    Ps.init(e, t);
}, {
    email (e) {
        return this.check(je(Ss, e));
    },
    url (e) {
        return this.check(Fe(Is, e));
    },
    jwt (e) {
        return this.check(Zn(ji, e));
    },
    emoji (e) {
        return this.check(fn(ki, e));
    },
    guid (e) {
        return this.check(un(bi, e));
    },
    uuid (e) {
        return this.check(Le(H, e));
    },
    uuidv4 (e) {
        return this.check(an(H, e));
    },
    uuidv6 (e) {
        return this.check(ln(H, e));
    },
    uuidv7 (e) {
        return this.check(pn(H, e));
    },
    nanoid (e) {
        return this.check(dn(Zi, e));
    },
    cuid (e) {
        return this.check(mn(wi, e));
    },
    cuid2 (e) {
        return this.check(hn(Pi, e));
    },
    ulid (e) {
        return this.check(_n(Si, e));
    },
    base64 (e) {
        return this.check(Me(Os, e));
    },
    base64url (e) {
        return this.check(bn(Ri, e));
    },
    xid (e) {
        return this.check(gn(Oi, e));
    },
    ksuid (e) {
        return this.check(xn(Ti, e));
    },
    ipv4 (e) {
        return this.check(vn(Ai, e));
    },
    ipv6 (e) {
        return this.check(zn(Ei, e));
    },
    cidrv4 (e) {
        return this.check(yn(Ni, e));
    },
    cidrv6 (e) {
        return this.check($n(Ci, e));
    },
    e164 (e) {
        return this.check(kn(Di, e));
    },
    datetime (e) {
        return this.check(iCr(Xko, e));
    },
    date (e) {
        return this.check(aCr(Jko, e));
    },
    time (e) {
        return this.check(wn(yi, e));
    },
    duration (e) {
        return this.check(Pn($i, e));
    }
});
function o(e) {
    return cn(irn, e);
}
const y = dr("ZodStringFormat", (e, t)=>{
    v.init(e, t);
    Ps.init(e, t);
});
var Xko = dr("ZodISODateTime", (e, t)=>{
    vo.init(e, t);
    y.init(e, t);
});
var Jko = dr("ZodISODate", (e, t)=>{
    zo.init(e, t);
    y.init(e, t);
});
var yi = dr("ZodISOTime", (e, t)=>{
    yo.init(e, t);
    y.init(e, t);
});
var $i = dr("ZodISODuration", (e, t)=>{
    $o.init(e, t);
    y.init(e, t);
});
var Ss = dr("ZodEmail", (e, t)=>{
    co.init(e, t);
    y.init(e, t);
});
function fPs(e) {
    return je(Ss, e);
}
var bi = dr("ZodGUID", (e, t)=>{
    so.init(e, t);
    y.init(e, t);
});
var H = dr("ZodUUID", (e, t)=>{
    io.init(e, t);
    y.init(e, t);
});
function Lzn(e) {
    return Le(H, e);
}
var Is = dr("ZodURL", (e, t)=>{
    lo.init(e, t);
    y.init(e, t);
});
function EHt(e) {
    return Fe(Is, e);
}
var ki = dr("ZodEmoji", (e, t)=>{
    po.init(e, t);
    y.init(e, t);
});
var Zi = dr("ZodNanoID", (e, t)=>{
    fo.init(e, t);
    y.init(e, t);
});
var wi = dr("ZodCUID", (e, t)=>{
    mo.init(e, t);
    y.init(e, t);
});
var Pi = dr("ZodCUID2", (e, t)=>{
    ho.init(e, t);
    y.init(e, t);
});
var Si = dr("ZodULID", (e, t)=>{
    _o.init(e, t);
    y.init(e, t);
});
var Oi = dr("ZodXID", (e, t)=>{
    go.init(e, t);
    y.init(e, t);
});
var Ti = dr("ZodKSUID", (e, t)=>{
    xo.init(e, t);
    y.init(e, t);
});
var Ai = dr("ZodIPv4", (e, t)=>{
    bo.init(e, t);
    y.init(e, t);
});
var Ei = dr("ZodIPv6", (e, t)=>{
    Zo.init(e, t);
    y.init(e, t);
});
var Ni = dr("ZodCIDRv4", (e, t)=>{
    wo.init(e, t);
    y.init(e, t);
});
var Ci = dr("ZodCIDRv6", (e, t)=>{
    Po.init(e, t);
    y.init(e, t);
});
var Os = dr("ZodBase64", (e, t)=>{
    Io.init(e, t);
    y.init(e, t);
});
function mPs(e) {
    return Me(Os, e);
}
var Ri = dr("ZodBase64URL", (e, t)=>{
    Oo.init(e, t);
    y.init(e, t);
});
var Di = dr("ZodE164", (e, t)=>{
    To.init(e, t);
    y.init(e, t);
});
var ji = dr("ZodJWT", (e, t)=>{
    Ao.init(e, t);
    y.init(e, t);
});
const kHt = dr("ZodNumber", (e, t)=>{
    Ee.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (n, s, i)=>number(e, n, s, i);
    let bag = e._zod.bag;
    e.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
    e.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
    e.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
    e.isFinite = true;
    e.format = bag.format ?? null;
}, {
    gt (e, t) {
        return this.check(fe(e, t));
    },
    gte (e, t) {
        return this.check(V(e, t));
    },
    min (e, t) {
        return this.check(V(e, t));
    },
    lt (e, t) {
        return this.check(pe(e, t));
    },
    lte (e, t) {
        return this.check(B(e, t));
    },
    max (e, t) {
        return this.check(B(e, t));
    },
    int (e) {
        return this.check(Hf(e));
    },
    safe (e) {
        return this.check(Hf(e));
    },
    positive (e) {
        return this.check(fe(0, e));
    },
    nonnegative (e) {
        return this.check(V(0, e));
    },
    negative (e) {
        return this.check(pe(0, e));
    },
    nonpositive (e) {
        return this.check(B(0, e));
    },
    multipleOf (e, t) {
        return this.check(de(e, t));
    },
    step (e, t) {
        return this.check(de(e, t));
    },
    finite () {
        return this;
    }
});
function E(e) {
    return Sn(kHt, e);
}
var Ts = dr("ZodNumberFormat", (e, t)=>{
    Eo.init(e, t);
    kHt.init(e, t);
});
function Hf(e) {
    return In(Ts, e);
}
function gPs(e) {
    return On(Ts, e);
}
const arn = dr("ZodBoolean", (e, t)=>{
    No.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>boolean(e, r, n, s);
});
function M(e) {
    return Tn(arn, e);
}
const Li = dr("ZodUndefined", (e, t)=>{
    Co.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>undefined_1(e, r, n, s);
});
function PP(e) {
    return An(Li, e);
}
const Fi = dr("ZodNull", (e, t)=>{
    Ro.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>at(e, r, n, s);
});
function Bm(e) {
    return En(Fi, e);
}
const Ui = dr("ZodAny", (e, t)=>{
    Do.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>any(e, r, n, s);
});
function K8() {
    return Nn(Ui);
}
const Mi = dr("ZodUnknown", (e, t)=>{
    jo.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>unknown(e, r, n, s);
});
function oe() {
    return Cn(Mi);
}
const Ji = dr("ZodNever", (e, t)=>{
    Lo.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>never(e, r, n, s);
});
function THt(e) {
    return Rn(Ji, e);
}
var Qko = dr("ZodArray", (e, t)=>{
    Q();
    Fo.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>array(e, r, n, s);
    e.element = t.element;
}, {
    min (e, t) {
        return this.check(R(e, t));
    },
    nonempty (e) {
        return this.check(R(1, e));
    },
    max (e, t) {
        return this.check(srn(e, t));
    },
    length (e, t) {
        return this.check(me(e, t));
    },
    unwrap () {
        return this.element;
    }
});
function T(e, t) {
    return Dn(Qko, e, t);
}
const Vxe = dr("ZodObject", (e, t)=>{
    Q();
    Jo.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>object(e, r, n, s);
    OFs(e, "shape", (r)=>r._zod.def.shape, false);
}, {
    keyof () {
        return U(Object.keys(this._zod.def.shape));
    },
    catchall (catchall) {
        return this.clone({
            ...this._zod.def,
            catchall
        });
    },
    passthrough () {
        return this.clone({
            ...this._zod.def,
            catchall: oe()
        });
    },
    loose () {
        return this.clone({
            ...this._zod.def,
            catchall: oe()
        });
    },
    strict () {
        return this.clone({
            ...this._zod.def,
            catchall: THt()
        });
    },
    strip () {
        return this.clone({
            ...this._zod.def,
            catchall: undefined
        });
    },
    extend (e) {
        return RFs(this, e);
    },
    safeExtend (e) {
        return xFs(this, e);
    },
    merge (e) {
        return PFs(this, e);
    },
    pick (e) {
        return AFs(this, e);
    },
    omit (e) {
        return CFs(this, e);
    },
    partial (...e) {
        return kPs($zn, this, e[0]);
    },
    exactPartial (...e) {
        return kPs(Ns, this, e[0], "exactPartial");
    },
    required (...e) {
        return IFs(Cs, this, e[0]);
    }
});
function u(e, t) {
    let r = {
        type: "object",
        shape: e ?? {},
        ...Tl(t)
    };
    return new Vxe(r);
}
function De(e, t) {
    return new Vxe({
        type: "object",
        shape: e,
        catchall: THt(),
        ...Tl(t)
    });
}
function _t(e, t) {
    return new Vxe({
        type: "object",
        shape: e,
        catchall: oe(),
        ...Tl(t)
    });
}
var As = dr("ZodUnion", (e, t)=>{
    Ne.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>union(e, r, n, s);
    e.options = t.options;
});
function Ue(e, t) {
    return new As({
        type: "union",
        options: e,
        ...Tl(t)
    });
}
const Bi = dr("ZodDiscriminatedUnion", (e, t)=>{
    As.init(e, t);
    Bo.init(e, t);
});
function Wr(discriminator, t, r) {
    return new Bi({
        type: "union",
        options: t,
        discriminator,
        ...Tl(r)
    });
}
var Vi = dr("ZodIntersection", (e, t)=>{
    Vo.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>intersection(e, r, n, s);
});
function upe(left, right) {
    return new Vi({
        type: "intersection",
        left,
        right
    });
}
const Ki = dr("ZodTuple", (e, t)=>{
    Q();
    Ko.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>tuple(e, r, n, s);
}, {
    rest (rest) {
        return this.clone({
            ...this._zod.def,
            rest
        });
    },
    partial () {
        let def = this._zod.def;
        if (def.checks?.length) {
            throw Error(".partial() cannot be used on tuple schemas containing refinements");
        }
        return this.clone({
            ...def,
            items: def.items.map((t)=>new $zn({
                    type: "optional",
                    innerType: t
                }))
        });
    }
});
function ZT(items, t, r) {
    let n = t instanceof Uv;
    let s = n ? r : t;
    return new Ki({
        type: "tuple",
        items,
        rest: n ? t : null,
        ...Tl(s)
    });
}
const Ct = dr("ZodRecord", (e, t)=>{
    Q();
    Wo.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>record(e, r, n, s);
    e.keyType = t.keyType;
    e.valueType = t.valueType;
});
function ue(e, valueType, r) {
    if (!valueType || !valueType._zod) {
        return new Ct({
            type: "record",
            keyType: o(),
            valueType: e,
            ...Tl(valueType)
        });
    }
    return new Ct({
        type: "record",
        keyType: e,
        valueType,
        ...Tl(r)
    });
}
function ppe(keyType, valueType, r) {
    return new Ct({
        type: "record",
        keyType,
        valueType,
        ...Tl(r),
        partial: true
    });
}
var Nzn = dr("ZodEnum", (e, t)=>{
    Go.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (n, s, i)=>mt(e, n, s, i);
    e.enum = t.entries;
    e.options = Object.values(t.entries);
    let r = new Set(Object.keys(t.entries));
    e.extract = (n, s)=>{
        let i = {};
        for (let c of n){
            if (r.has(c)) {
                i[c] = t.entries[c];
            } else {
                throw Error(`Key ${c} not found in enum`);
            }
        }
        return new Nzn({
            ...t,
            checks: [],
            ...Tl(s),
            entries: i
        });
    };
    e.exclude = (n, s)=>{
        let i = {
            ...t.entries
        };
        for (let c of n){
            if (r.has(c)) {
                delete i[c];
            } else {
                throw Error(`Key ${c} not found in enum`);
            }
        }
        return new Nzn({
            ...t,
            checks: [],
            ...Tl(s),
            entries: i
        });
    };
});
function U(e, t) {
    let entries = Array.isArray(e) ? Object.fromEntries(e.map((n)=>[
            n,
            n
        ])) : e;
    return new Nzn({
        type: "enum",
        entries,
        ...Tl(t)
    });
}
const Zko = dr("ZodLiteral", (e, t)=>{
    Yo.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>literal(e, r, n, s);
    e.values = new Set(t.values);
    Object.defineProperty(e, "value", {
        get () {
            if (t.values.length > 1) {
                throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
            }
            return t.values[0];
        }
    });
});
function A(e, t) {
    return new Zko({
        type: "literal",
        values: Array.isArray(e) ? e : [
            e
        ],
        ...Tl(t)
    });
}
var Wi = dr("ZodTransform", (e, t)=>{
    Q();
    qo.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>transform(e, r, n, s);
    e._zod.parse = (r, n)=>{
        if (n.direction === "backward") {
            throw new jzn(e.constructor.name);
        }
        r.addIssue = (i)=>{
            if (typeof i === "string") {
                r.issues.push(RHt(i, r.value, t));
            } else {
                let c = i;
                if (c.fatal) {
                    c.continue = false;
                }
                c.code ??= "custom";
                if (!("input" in c)) {
                    c.input = r.value;
                }
                c.inst ??= e;
                r.issues.push(RHt(c));
            }
        };
        let s = t.transform(r.value, r);
        if (s instanceof Promise) {
            return s.then((i)=>{
                r.value = i;
                return r;
            });
        }
        r.value = s;
        return r;
    };
});
function Es(transform) {
    return new Wi({
        type: "transform",
        transform
    });
}
var $zn = dr("ZodOptional", (e, t)=>{
    Ce.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>optional(e, r, n, s);
    e.unwrap = ()=>e._zod.def.innerType;
});
function Ii(e) {
    return new $zn({
        type: "optional",
        innerType: e
    });
}
var Ns = dr("ZodExactOptional", (e, t)=>{
    Xo.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>optional(e, r, n, s);
    e.unwrap = ()=>e._zod.def.innerType;
});
function Gi(e) {
    return new Ns({
        type: "optional",
        innerType: e
    });
}
var Yi = dr("ZodNullable", (e, t)=>{
    Ho.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>nullable(e, r, n, s);
    e.unwrap = ()=>e._zod.def.innerType;
});
function Zs(e) {
    return new Yi({
        type: "nullable",
        innerType: e
    });
}
var qi = dr("ZodDefault", (e, t)=>{
    Qo.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>St(e, r, n, s);
    e.unwrap = ()=>e._zod.def.innerType;
    e.removeDefault = e.unwrap;
});
function Xi(e, t) {
    return new qi({
        type: "default",
        innerType: e,
        get defaultValue () {
            if (typeof t === "function") {
                return t();
            }
            return nTo(t);
        }
    });
}
var Hi = dr("ZodPrefault", (e, t)=>{
    en.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>prefault(e, r, n, s);
    e.unwrap = ()=>e._zod.def.innerType;
});
function Qi(e, t) {
    return new Hi({
        type: "prefault",
        innerType: e,
        get defaultValue () {
            if (typeof t === "function") {
                return t();
            }
            return nTo(t);
        }
    });
}
var Cs = dr("ZodNonOptional", (e, t)=>{
    tn.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>nonoptional(e, r, n, s);
    e.unwrap = ()=>e._zod.def.innerType;
});
function ec(e, t) {
    return new Cs({
        type: "nonoptional",
        innerType: e,
        ...Tl(t)
    });
}
var cCr = dr("ZodCatch", (e, t)=>{
    rn.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>Ot(e, r, n, s);
    e.unwrap = ()=>e._zod.def.innerType;
    e.removeCatch = e.unwrap;
});
function tc(e, t) {
    return new cCr({
        type: "catch",
        innerType: e,
        catchValue: typeof t === "function" ? t : CPs(t)
    });
}
var Fzn = dr("ZodPipe", (e, t)=>{
    Re.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>pipe(e, r, n, s);
    e.in = t.in;
    e.out = t.out;
});
function ws(e, t) {
    return new Fzn({
        type: "pipe",
        in: e,
        out: t
    });
}
const rc = dr("ZodPreprocess", (e, t)=>{
    Fzn.init(e, t);
    on.init(e, t);
});
var oc = dr("ZodReadonly", (e, t)=>{
    nn.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>readonly(e, r, n, s);
    e.unwrap = ()=>e._zod.def.innerType;
});
function nc(e) {
    return new oc({
        type: "readonly",
        innerType: e
    });
}
const sc = dr("ZodLazy", (e, t)=>{
    sCr.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>lazy(e, r, n, s);
    e.unwrap = ()=>e._zod.def.getter();
});
function qE(getter) {
    return new sc({
        type: "lazy",
        getter
    });
}
var Rs = dr("ZodCustom", (e, t)=>{
    sn.init(e, t);
    Bv.init(e, t);
    e._zod.processJSONSchema = (r, n, s)=>custom(e, r, n, s);
});
function _u(e, t) {
    return jn(Rs, e ?? (()=>true), t);
}
function ic(e, t = {}) {
    return Ln(Rs, e, t);
}
function cc(e, t) {
    return Fn(e, t);
}
function pa(e, t) {
    return new rc({
        type: "pipe",
        in: Es(e),
        out: t
    });
}
export { Dzn, Uv, sCr, v5e, cPs, dPs, iCr, aCr, uPs, pPs, srn, QT, E5e, IR, lCr, Bv, irn, o, Xko, Jko, fPs, Lzn, EHt, mPs, kHt, E, Hf, gPs, arn, M, PP, Bm, K8, oe, THt, Qko, T, Vxe, u, De, _t, Ue, Wr, upe, ZT, ue, ppe, Nzn, U, Zko, A, $zn, Ii, cCr, Fzn, qE, _u, pa };
