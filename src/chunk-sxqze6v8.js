import { Rme, yWr, fK, Ijt, Zee, fi, pEe, iyn, dyn, uyn, xme, Ojt, pyn, fyn, myn, gyn, hyn, yyn, bWr, Zs } from "/$bunfs/root/chunk-vw7x8ctj.js";
import { om, AMn } from "/$bunfs/root/chunk-d9ybdtka.js";
import { Dzn } from "/$bunfs/root/chunk-smx21d0k.js";
import { Se, C } from "/$bunfs/root/chunk-cj4xndke.js";
const X = C(function(W) {
    Object.defineProperty(W, "__esModule", {
        value: true
    });
    W.formatNames = W.fastFormats = W.fullFormats = undefined;
    function k(e, compare) {
        return {
            validate: e,
            compare
        };
    }
    W.fullFormats = {
        date: k(Q, N),
        time: k(E(true), O),
        "date-time": k(U(true), K),
        "iso-time": k(E(), B),
        "iso-date-time": k(U(), G),
        duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
        uri,
        "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
        "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
        url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
        email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
        hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
        ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
        ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
        regex,
        uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
        "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
        "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
        "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
        byte,
        int32: {
            type: "number",
            validate: $e
        },
        int64: {
            type: "number",
            validate: De
        },
        float: {
            type: "number",
            validate: J
        },
        double: {
            type: "number",
            validate: J
        },
        password: true,
        binary: true
    };
    W.fastFormats = {
        ...W.fullFormats,
        date: k(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, N),
        time: k(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, O),
        "date-time": k(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, K),
        "iso-time": k(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, B),
        "iso-date-time": k(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, G),
        uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
        "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
        email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    };
    W.formatNames = Object.keys(W.fullFormats);
    function _e(e) {
        return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
    }
    var ke = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
    var ve = [
        0,
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];
    function Q(e) {
        let t = ke.exec(e);
        if (!t) {
            return false;
        }
        let r = +t[1];
        let a = +t[2];
        let n = +t[3];
        return a >= 1 && a <= 12 && n >= 1 && n <= (a === 2 && _e(r) ? 29 : ve[a]);
    }
    function N(e, t) {
        if (!(e && t)) {
            return;
        }
        if (e > t) {
            return 1;
        }
        if (e < t) {
            return -1;
        }
        return 0;
    }
    var z = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function E(e) {
        return function(r) {
            let a = z.exec(r);
            if (!a) {
                return false;
            }
            let n = +a[1];
            let s = +a[2];
            let o = +a[3];
            let u = a[4];
            let p = a[5] === "-" ? -1 : 1;
            let i = +(a[6] || 0);
            let c = +(a[7] || 0);
            if (i > 23 || c > 59 || e && !u) {
                return false;
            }
            if (n <= 23 && s <= 59 && o < 60) {
                return true;
            }
            let d = s - c * p;
            let f = n - i * p - (d < 0 ? 1 : 0);
            return (f === 23 || f === -1) && (d === 59 || d === -1) && o < 61;
        };
    }
    function O(e, t) {
        if (!(e && t)) {
            return;
        }
        let r = new Date(`2020-01-01T${e}`).valueOf();
        let a = new Date(`2020-01-01T${t}`).valueOf();
        if (!(r && a)) {
            return;
        }
        return r - a;
    }
    function B(e, t) {
        if (!(e && t)) {
            return;
        }
        let r = z.exec(e);
        let a = z.exec(t);
        if (!(r && a)) {
            return;
        }
        e = r[1] + r[2] + r[3];
        t = a[1] + a[2] + a[3];
        if (e > t) {
            return 1;
        }
        if (e < t) {
            return -1;
        }
        return 0;
    }
    var M = /t|\s/i;
    function U(e) {
        let t = E(e);
        return function(a) {
            let n = a.split(M);
            return n.length === 2 && Q(n[0]) && t(n[1]);
        };
    }
    function K(e, t) {
        if (!(e && t)) {
            return;
        }
        let r = new Date(e).valueOf();
        let a = new Date(t).valueOf();
        if (!(r && a)) {
            return;
        }
        return r - a;
    }
    function G(e, t) {
        if (!(e && t)) {
            return;
        }
        let [r, a] = e.split(M);
        let [n, s] = t.split(M);
        let o = N(r, n);
        if (o === undefined) {
            return;
        }
        return o || O(a, s);
    }
    var Te = /\/|:/;
    var be = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function uri(e) {
        return Te.test(e) && be.test(e);
    }
    var V = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function byte(e) {
        V.lastIndex = 0;
        return V.test(e);
    }
    var xe = -2147483648;
    var Ae = 2147483647;
    function $e(e) {
        return Number.isInteger(e) && e <= Ae && e >= xe;
    }
    function De(e) {
        return Number.isInteger(e);
    }
    function J() {
        return true;
    }
    var Ie = /[^\\]\\Z/;
    function regex(e) {
        if (Ie.test(e)) {
            return false;
        }
        try {
            new RegExp(e);
            return true;
        } catch (t) {
            return false;
        }
    }
});
const re = C(function(te) {
    Object.defineProperty(te, "__esModule", {
        value: true
    });
    te.formatLimitDefinition = undefined;
    const ee = AMn();
    const l = om();
    const l_operators = l.operators;
    const D = {
        formatMaximum: {
            okStr: "<=",
            ok: l_operators.LTE,
            fail: l_operators.GT
        },
        formatMinimum: {
            okStr: ">=",
            ok: l_operators.GTE,
            fail: l_operators.LT
        },
        formatExclusiveMaximum: {
            okStr: "<",
            ok: l_operators.LT,
            fail: l_operators.GTE
        },
        formatExclusiveMinimum: {
            okStr: ">",
            ok: l_operators.GT,
            fail: l_operators.LTE
        }
    };
    const error = {
        message: ({ keyword, schemaCode })=>l.str`should be ${D[keyword].okStr} ${schemaCode}`,
        params: ({ keyword, schemaCode })=>l._`{comparison: ${D[keyword].okStr}, limit: ${schemaCode}}`
    };
    te.formatLimitDefinition = {
        keyword: Object.keys(D),
        type: "string",
        schemaType: "string",
        $data: true,
        error,
        code (e) {
            let { gen, data, schemaCode, keyword, it } = e;
            let { opts, self } = it;
            if (!opts.validateFormats) {
                return;
            }
            let p = new ee.KeywordCxt(it, self.RULES.all.format.definition, "format");
            if (p.$data) {
                i();
            } else {
                c();
            }
            function i() {
                let f = gen.scopeValue("formats", {
                    ref: self.formats,
                    code: opts.code.formats
                });
                let m = gen.const("fmt", l._`${f}[${p.schemaCode}]`);
                e.fail$data(l.or(l._`typeof ${m} != "object"`, l._`${m} instanceof RegExp`, l._`typeof ${m}.compare != "function"`, d(m)));
            }
            function c() {
                let p_schema = p.schema;
                let ref = self.formats[p_schema];
                if (!ref || ref === true) {
                    return;
                }
                if (typeof ref !== "object" || ref instanceof RegExp || typeof ref.compare !== "function") {
                    throw Error(`"${keyword}": format "${p_schema}" does not define "compare" function`);
                }
                let x = gen.scopeValue("formats", {
                    key: p_schema,
                    ref,
                    code: opts.code.formats ? l._`${opts.code.formats}${l.getProperty(p_schema)}` : undefined
                });
                e.fail$data(d(x));
            }
            function d(f) {
                return l._`${f}.compare(${data}, ${schemaCode}) ${D[keyword].fail} 0`;
            }
        },
        dependencies: [
            "format"
        ]
    };
    const Me = (e)=>{
        e.addKeyword(te.formatLimitDefinition);
        return e;
    };
    te.default = Me;
});
const oe = C(function(P, se) {
    Object.defineProperty(P, "__esModule", {
        value: true
    });
    const y = X();
    const Oe = re();
    const w = om();
    const ae = new w.Name("fullFormats");
    const je = new w.Name("fastFormats");
    const Z = (e, t = {
        keywords: true
    })=>{
        if (Array.isArray(t)) {
            ne(e, t, y.fullFormats, ae);
            return e;
        }
        let [r, a] = t.mode === "fast" ? [
            y.fastFormats,
            je
        ] : [
            y.fullFormats,
            ae
        ];
        let n = t.formats || y.formatNames;
        ne(e, n, r, a);
        if (t.keywords) {
            Oe.default(e);
        }
        return e;
    };
    Z.get = (e, t = "full")=>{
        let a = (t === "fast" ? y.fastFormats : y.fullFormats)[e];
        if (!a) {
            throw Error(`Unknown format "${e}"`);
        }
        return a;
    };
    function ne(e, t, r, a) {
        let n;
        let s;
        if (!((n = (s = e.opts.code).formats) !== null && n !== undefined)) {
            s.formats = w._`require("ajv-formats/dist/formats").${a}`;
        }
        for (let o of t){
            e.addFormat(o, r[o]);
        }
    }
    se.exports = P = Z;
    Object.defineProperty(P, "__esModule", {
        value: true
    });
    P.default = Z;
});
function YWe(e) {
    return !!e._zod;
}
function U6(e, t) {
    if (YWe(e)) {
        return Dzn(e, t);
    }
    return e.safeParse(t);
}
function Nyt(e) {
    if (!e) {
        return;
    }
    let t;
    if (YWe(e)) {
        t = e._zod?.def?.shape;
    } else {
        t = e.shape;
    }
    if (!t) {
        return;
    }
    if (typeof t === "function") {
        try {
            return t();
        } catch  {
            return;
        }
    }
    return t;
}
function H(e) {
    if (YWe(e)) {
        let s = e._zod?.def;
        if (s) {
            if (s.value !== undefined) {
                return s.value;
            }
            if (Array.isArray(s.values) && s.values.length > 0) {
                return s.values[0];
            }
        }
    }
    let e__def = e._def;
    if (e__def) {
        if (e__def.value !== undefined) {
            return e__def.value;
        }
        if (Array.isArray(e__def.values) && e__def.values.length > 0) {
            return e__def.values[0];
        }
    }
    let e_value = e.value;
    if (e_value !== undefined) {
        return e_value;
    }
}
function T(status) {
    return status === "completed" || status === "failed" || status === "cancelled";
}
const fe = Symbol("Let zodToJsonSchema decide on which parser to use");
const Et = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function I(e) {
    let r = Nyt(e)?.method;
    if (!r) {
        throw Error("Schema is missing a method literal");
    }
    let a = H(r);
    if (typeof a !== "string") {
        throw Error("Schema method literal must be a string");
    }
    return a;
}
function R(e, t) {
    let r = U6(e, t);
    if (!r.success) {
        throw r.error;
    }
    return r.data;
}
const ye = 60000;
class xjt {
    constructor(e){
        this._options = e;
        this._requestMessageId = 0;
        this._requestHandlers = new Map;
        this._requestHandlerAbortControllers = new Map;
        this._notificationHandlers = new Map;
        this._responseHandlers = new Map;
        this._progressHandlers = new Map;
        this._timeoutInfo = new Map;
        this._pendingDebouncedNotifications = new Set;
        this._taskProgressTokens = new Map;
        this._requestResolvers = new Map;
        this.setNotificationHandler(iyn, (t)=>{
            this._oncancel(t);
        });
        this.setNotificationHandler(uyn, (t)=>{
            this._onprogress(t);
        });
        this.setRequestHandler(dyn, (t)=>({}));
        this._taskStore = e?.taskStore;
        this._taskMessageQueue = e?.taskMessageQueue;
        if (this._taskStore) {
            this.setRequestHandler(pyn, async (t, r)=>{
                let a = await this._taskStore.getTask(t.params.taskId, r.sessionId);
                if (!a) {
                    throw new Zs(fi.InvalidParams, "Failed to retrieve task: Task not found");
                }
                return {
                    ...a
                };
            });
            this.setRequestHandler(myn, async (t, r)=>{
                let a = async ()=>{
                    let taskId = t.params.taskId;
                    if (this._taskMessageQueue) {
                        let o;
                        while(o = await this._taskMessageQueue.dequeue(taskId, r.sessionId)){
                            if (o.type === "response" || o.type === "error") {
                                let u = o.message;
                                let p = u.id;
                                let i = this._requestResolvers.get(p);
                                if (i) {
                                    this._requestResolvers.delete(p);
                                    if (o.type === "response") {
                                        i(u);
                                    } else {
                                        let c = u;
                                        let d = new Zs(c.error.code, c.error.message, c.error.data);
                                        i(d);
                                    }
                                } else {
                                    let c = o.type === "response" ? "Response" : "Error";
                                    this._onerror(Error(`${c} handler missing for request ${p}`));
                                }
                                continue;
                            }
                            await this._transport?.send(o.message, {
                                relatedRequestId: r.requestId
                            });
                        }
                    }
                    let s = await this._taskStore.getTask(taskId, r.sessionId);
                    if (!s) {
                        throw new Zs(fi.InvalidParams, `Task not found: ${taskId}`);
                    }
                    if (!T(s.status)) {
                        await this._waitForTaskUpdate(taskId, r.signal);
                        return await a();
                    }
                    if (T(s.status)) {
                        let o = await this._taskStore.getTaskResult(taskId, r.sessionId);
                        this._clearTaskQueue(taskId);
                        return {
                            ...o,
                            _meta: {
                                ...o._meta,
                                [Rme]: {
                                    taskId
                                }
                            }
                        };
                    }
                    return await a();
                };
                return await a();
            });
            this.setRequestHandler(gyn, async (t, r)=>{
                try {
                    let { tasks, nextCursor } = await this._taskStore.listTasks(t.params?.cursor, r.sessionId);
                    return {
                        tasks,
                        nextCursor,
                        _meta: {}
                    };
                } catch (error) {
                    throw new Zs(fi.InvalidParams, `Failed to list tasks: ${error instanceof Error ? error.message : String(error)}`);
                }
            });
            this.setRequestHandler(yyn, async (t, r)=>{
                try {
                    let a = await this._taskStore.getTask(t.params.taskId, r.sessionId);
                    if (!a) {
                        throw new Zs(fi.InvalidParams, `Task not found: ${t.params.taskId}`);
                    }
                    if (T(a.status)) {
                        throw new Zs(fi.InvalidParams, `Cannot cancel task in terminal status: ${a.status}`);
                    }
                    await this._taskStore.updateTaskStatus(t.params.taskId, "cancelled", "Client cancelled task execution.", r.sessionId);
                    this._clearTaskQueue(t.params.taskId);
                    let n = await this._taskStore.getTask(t.params.taskId, r.sessionId);
                    if (!n) {
                        throw new Zs(fi.InvalidParams, `Task not found after cancellation: ${t.params.taskId}`);
                    }
                    return {
                        _meta: {},
                        ...n
                    };
                } catch (error) {
                    if (error instanceof Zs) {
                        throw error;
                    }
                    throw new Zs(fi.InvalidRequest, `Failed to cancel task: ${error instanceof Error ? error.message : String(error)}`);
                }
            });
        }
    }
    async _oncancel(e) {
        if (!e.params.requestId) {
            return;
        }
        this._requestHandlerAbortControllers.get(e.params.requestId)?.abort(e.params.reason);
    }
    _setupTimeout(e, t, maxTotalTimeout, onTimeout, resetTimeoutOnProgress = false) {
        this._timeoutInfo.set(e, {
            timeoutId: setTimeout(onTimeout, t),
            startTime: Date.now(),
            timeout: t,
            maxTotalTimeout,
            resetTimeoutOnProgress,
            onTimeout
        });
    }
    _resetTimeout(e) {
        let t = this._timeoutInfo.get(e);
        if (!t) {
            return false;
        }
        let totalElapsed = Date.now() - t.startTime;
        if (t.maxTotalTimeout && totalElapsed >= t.maxTotalTimeout) {
            this._timeoutInfo.delete(e);
            throw Zs.fromError(fi.RequestTimeout, "Maximum total timeout exceeded", {
                maxTotalTimeout: t.maxTotalTimeout,
                totalElapsed
            });
        }
        clearTimeout(t.timeoutId);
        t.timeoutId = setTimeout(t.onTimeout, t.timeout);
        return true;
    }
    _cleanupTimeout(e) {
        let t = this._timeoutInfo.get(e);
        if (t) {
            clearTimeout(t.timeoutId);
            this._timeoutInfo.delete(e);
        }
    }
    async connect(e) {
        if (this._transport) {
            throw Error("Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection.");
        }
        this._transport = e;
        let t = this.transport?.onclose;
        this._transport.onclose = ()=>{
            t?.();
            this._onclose();
        };
        let r = this.transport?.onerror;
        this._transport.onerror = (n)=>{
            r?.(n);
            this._onerror(n);
        };
        let a = this._transport?.onmessage;
        this._transport.onmessage = (n, s)=>{
            a?.(n, s);
            if (Zee(n) || pEe(n)) {
                this._onresponse(n);
            } else if (fK(n)) {
                this._onrequest(n, s);
            } else if (Ijt(n)) {
                this._onnotification(n);
            } else {
                this._onerror(Error(`Unknown message type: ${JSON.stringify(n)}`));
            }
        };
        await this._transport.start();
    }
    _onclose() {
        let _responseHandlers = this._responseHandlers;
        this._responseHandlers = new Map;
        this._progressHandlers.clear();
        this._taskProgressTokens.clear();
        this._pendingDebouncedNotifications.clear();
        for (let r of this._timeoutInfo.values()){
            clearTimeout(r.timeoutId);
        }
        this._timeoutInfo.clear();
        for (let r of this._requestHandlerAbortControllers.values()){
            r.abort();
        }
        this._requestHandlerAbortControllers.clear();
        let t = Zs.fromError(fi.ConnectionClosed, "Connection closed");
        this._transport = undefined;
        this.onclose?.();
        for (let r of _responseHandlers.values()){
            r(t);
        }
    }
    _onerror(e) {
        this.onerror?.(e);
    }
    _onnotification(e) {
        let t = this._notificationHandlers.get(e.method) ?? this.fallbackNotificationHandler;
        if (t === undefined) {
            return;
        }
        Promise.resolve().then(()=>t(e)).catch((r)=>this._onerror(Error(`Uncaught error in notification handler: ${r}`)));
    }
    _onrequest(e, t) {
        let r = this._requestHandlers.get(e.method) ?? this.fallbackRequestHandler;
        let _transport = this._transport;
        let n = e.params?._meta?.[Rme]?.taskId;
        if (r === undefined) {
            let i = {
                jsonrpc: "2.0",
                id: e.id,
                error: {
                    code: fi.MethodNotFound,
                    message: "Method not found"
                }
            };
            if (n && this._taskMessageQueue) {
                this._enqueueTaskMessage(n, {
                    type: "error",
                    message: i,
                    timestamp: Date.now()
                }, _transport?.sessionId).catch((c)=>this._onerror(Error(`Failed to enqueue error response: ${c}`)));
            } else {
                _transport?.send(i).catch((c)=>this._onerror(Error(`Failed to send an error response: ${c}`)));
            }
            return;
        }
        let s = new AbortController;
        this._requestHandlerAbortControllers.set(e.id, s);
        let o = yWr(e.params) ? e.params.task : undefined;
        let taskStore = this._taskStore ? this.requestTaskStore(e, _transport?.sessionId) : undefined;
        let p = {
            signal: s.signal,
            sessionId: _transport?.sessionId,
            _meta: e.params?._meta,
            sendNotification: async (i)=>{
                if (s.signal.aborted) {
                    return;
                }
                let c = {
                    relatedRequestId: e.id
                };
                if (n) {
                    c.relatedTask = {
                        taskId: n
                    };
                }
                await this.notification(i, c);
            },
            sendRequest: async (i, c, d)=>{
                if (s.signal.aborted) {
                    throw new Zs(fi.ConnectionClosed, "Request was cancelled");
                }
                let f = {
                    ...d,
                    relatedRequestId: e.id
                };
                if (n && !f.relatedTask) {
                    f.relatedTask = {
                        taskId: n
                    };
                }
                let m = f.relatedTask?.taskId ?? n;
                if (m && taskStore) {
                    await taskStore.updateTaskStatus(m, "input_required");
                }
                return await this.request(i, c, f);
            },
            authInfo: t?.authInfo,
            requestId: e.id,
            requestInfo: t?.requestInfo,
            taskId: n,
            taskStore,
            taskRequestedTtl: o?.ttl,
            closeSSEStream: t?.closeSSEStream,
            closeStandaloneSSEStream: t?.closeStandaloneSSEStream
        };
        Promise.resolve().then(()=>{
            if (o) {
                this.assertTaskHandlerCapability(e.method);
            }
        }).then(()=>r(e, p)).then(async (result)=>{
            if (s.signal.aborted) {
                return;
            }
            let c = {
                result,
                jsonrpc: "2.0",
                id: e.id
            };
            if (n && this._taskMessageQueue) {
                await this._enqueueTaskMessage(n, {
                    type: "response",
                    message: c,
                    timestamp: Date.now()
                }, _transport?.sessionId);
            } else {
                await _transport?.send(c);
            }
        }, async (i)=>{
            if (s.signal.aborted) {
                return;
            }
            let c = {
                jsonrpc: "2.0",
                id: e.id,
                error: {
                    code: Number.isSafeInteger(i.code) ? i.code : fi.InternalError,
                    message: i.message ?? "Internal error",
                    ...i.data !== undefined && {
                        data: i.data
                    }
                }
            };
            if (n && this._taskMessageQueue) {
                await this._enqueueTaskMessage(n, {
                    type: "error",
                    message: c,
                    timestamp: Date.now()
                }, _transport?.sessionId);
            } else {
                await _transport?.send(c);
            }
        }).catch((i)=>this._onerror(Error(`Failed to send response: ${i}`))).finally(()=>{
            if (this._requestHandlerAbortControllers.get(e.id) === s) {
                this._requestHandlerAbortControllers.delete(e.id);
            }
        });
    }
    _onprogress(e) {
        let { progressToken, ...rest } = e.params;
        let a = Number(progressToken);
        let n = this._progressHandlers.get(a);
        if (!n) {
            this._onerror(Error(`Received a progress notification for an unknown token: ${JSON.stringify(e)}`));
            return;
        }
        let s = this._responseHandlers.get(a);
        let o = this._timeoutInfo.get(a);
        if (o && s && o.resetTimeoutOnProgress) {
            try {
                this._resetTimeout(a);
            } catch (error) {
                this._responseHandlers.delete(a);
                this._progressHandlers.delete(a);
                this._cleanupTimeout(a);
                s(error);
                return;
            }
        }
        n(rest);
    }
    _onresponse(e) {
        let t = Number(e.id);
        let r = this._requestResolvers.get(t);
        if (r) {
            this._requestResolvers.delete(t);
            if (Zee(e)) {
                r(e);
            } else {
                let s = new Zs(e.error.code, e.error.message, e.error.data);
                r(s);
            }
            return;
        }
        let a = this._responseHandlers.get(t);
        if (a === undefined) {
            this._onerror(Error(`Received a response for an unknown message ID: ${JSON.stringify(e)}`));
            return;
        }
        this._responseHandlers.delete(t);
        this._cleanupTimeout(t);
        let n = false;
        if (Zee(e) && e.result && typeof e.result === "object") {
            let s = e.result;
            if (s.task && typeof s.task === "object") {
                let o = s.task;
                if (typeof o.taskId === "string") {
                    n = true;
                    this._taskProgressTokens.set(o.taskId, t);
                }
            }
        }
        if (!n) {
            this._progressHandlers.delete(t);
        }
        if (Zee(e)) {
            a(e);
        } else {
            let s = Zs.fromError(e.error.code, e.error.message, e.error.data);
            a(s);
        }
    }
    get transport() {
        return this._transport;
    }
    async close() {
        await this._transport?.close();
    }
    async *requestStream(e, t, r) {
        let { task } = r ?? {};
        if (!task) {
            try {
                yield {
                    type: "result",
                    result: await this.request(e, t, r)
                };
            } catch (error) {
                yield {
                    type: "error",
                    error: error instanceof Zs ? error : new Zs(fi.InternalError, String(error))
                };
            }
            return;
        }
        let n;
        try {
            let s = await this.request(e, xme, r);
            if (s.task) {
                n = s.task.taskId;
                yield {
                    type: "taskCreated",
                    task: s.task
                };
            } else {
                throw new Zs(fi.InternalError, "Task creation did not return a task");
            }
            while(true){
                let task_1 = await this.getTask({
                    taskId: n
                }, r);
                yield {
                    type: "taskStatus",
                    task: task_1
                };
                if (T(task_1.status)) {
                    if (task_1.status === "completed") {
                        yield {
                            type: "result",
                            result: await this.getTaskResult({
                                taskId: n
                            }, t, r)
                        };
                    } else if (task_1.status === "failed") {
                        yield {
                            type: "error",
                            error: new Zs(fi.InternalError, `Task ${n} failed`)
                        };
                    } else if (task_1.status === "cancelled") {
                        yield {
                            type: "error",
                            error: new Zs(fi.InternalError, `Task ${n} was cancelled`)
                        };
                    }
                    return;
                }
                if (task_1.status === "input_required") {
                    yield {
                        type: "result",
                        result: await this.getTaskResult({
                            taskId: n
                        }, t, r)
                    };
                    return;
                }
                let u = task_1.pollInterval ?? this._options?.defaultTaskPollInterval ?? 1000;
                await new Promise((resolve)=>setTimeout(resolve, u));
                r?.signal?.throwIfAborted();
            }
        } catch (error) {
            yield {
                type: "error",
                error: error instanceof Zs ? error : new Zs(fi.InternalError, String(error))
            };
        }
    }
    request(e, t, r) {
        let { relatedRequestId, resumptionToken, onresumptiontoken, task, relatedTask } = r ?? {};
        return new Promise((resolve, reject)=>{
            let c = (g)=>{
                reject(g);
            };
            if (!this._transport) {
                c(Error("Not connected"));
                return;
            }
            if (this._options?.enforceStrictCapabilities === true) {
                try {
                    this.assertCapabilityForMethod(e.method);
                    if (task) {
                        this.assertTaskCapability(e.method);
                    }
                } catch (error) {
                    c(error);
                    return;
                }
            }
            r?.signal?.throwIfAborted();
            let d = this._requestMessageId++;
            let f = {
                ...e,
                jsonrpc: "2.0",
                id: d
            };
            if (r?.onprogress) {
                this._progressHandlers.set(d, r.onprogress);
                f.params = {
                    ...e.params,
                    _meta: {
                        ...e.params?._meta || {},
                        progressToken: d
                    }
                };
            }
            if (task) {
                f.params = {
                    ...f.params,
                    task
                };
            }
            if (relatedTask) {
                f.params = {
                    ...f.params,
                    _meta: {
                        ...f.params?._meta || {},
                        [Rme]: relatedTask
                    }
                };
            }
            let m = (g)=>{
                this._responseHandlers.delete(d);
                this._progressHandlers.delete(d);
                this._cleanupTimeout(d);
                this._transport?.send({
                    jsonrpc: "2.0",
                    method: "notifications/cancelled",
                    params: {
                        requestId: d,
                        reason: String(g)
                    }
                }, {
                    relatedRequestId,
                    resumptionToken,
                    onresumptiontoken
                }).catch((A)=>this._onerror(Error(`Failed to send cancellation: ${A}`)));
                let _ = g instanceof Zs ? g : new Zs(fi.RequestTimeout, String(g));
                reject(_);
            };
            this._responseHandlers.set(d, (g)=>{
                if (r?.signal?.aborted) {
                    return;
                }
                if (g instanceof Error) {
                    return reject(g);
                }
                try {
                    let _ = U6(t, g.result);
                    if (!_.success) {
                        reject(_.error);
                    } else {
                        resolve(_.data);
                    }
                } catch (error) {
                    reject(error);
                }
            });
            r?.signal?.addEventListener("abort", ()=>{
                m(r?.signal?.reason);
            });
            let x = r?.timeout ?? ye;
            let ce = ()=>m(Zs.fromError(fi.RequestTimeout, "Request timed out", {
                    timeout: x
                }));
            this._setupTimeout(d, x, r?.maxTotalTimeout, ce, r?.resetTimeoutOnProgress ?? false);
            let F = relatedTask?.taskId;
            if (F) {
                let g = (_)=>{
                    let A = this._responseHandlers.get(d);
                    if (A) {
                        A(_);
                    } else {
                        this._onerror(Error(`Response handler missing for side-channeled request ${d}`));
                    }
                };
                this._requestResolvers.set(d, g);
                this._enqueueTaskMessage(F, {
                    type: "request",
                    message: f,
                    timestamp: Date.now()
                }).catch((_)=>{
                    this._cleanupTimeout(d);
                    reject(_);
                });
            } else {
                this._transport.send(f, {
                    relatedRequestId,
                    resumptionToken,
                    onresumptiontoken
                }).catch((g)=>{
                    this._cleanupTimeout(d);
                    reject(g);
                });
            }
        });
    }
    async getTask(e, t) {
        return this.request({
            method: "tasks/get",
            params: e
        }, fyn, t);
    }
    async getTaskResult(e, t, r) {
        return this.request({
            method: "tasks/result",
            params: e
        }, t, r);
    }
    async listTasks(e, t) {
        return this.request({
            method: "tasks/list",
            params: e
        }, hyn, t);
    }
    async cancelTask(e, t) {
        return this.request({
            method: "tasks/cancel",
            params: e
        }, bWr, t);
    }
    async notification(e, t) {
        if (!this._transport) {
            throw Error("Not connected");
        }
        this.assertNotificationCapability(e.method);
        let r = t?.relatedTask?.taskId;
        if (r) {
            let message = {
                ...e,
                jsonrpc: "2.0",
                params: {
                    ...e.params,
                    _meta: {
                        ...e.params?._meta || {},
                        [Rme]: t.relatedTask
                    }
                }
            };
            await this._enqueueTaskMessage(r, {
                type: "notification",
                message,
                timestamp: Date.now()
            });
            return;
        }
        if ((this._options?.debouncedNotificationMethods ?? []).includes(e.method) && !e.params && !t?.relatedRequestId && !t?.relatedTask) {
            if (this._pendingDebouncedNotifications.has(e.method)) {
                return;
            }
            this._pendingDebouncedNotifications.add(e.method);
            Promise.resolve().then(()=>{
                this._pendingDebouncedNotifications.delete(e.method);
                if (!this._transport) {
                    return;
                }
                let o = {
                    ...e,
                    jsonrpc: "2.0"
                };
                if (t?.relatedTask) {
                    o = {
                        ...o,
                        params: {
                            ...o.params,
                            _meta: {
                                ...o.params?._meta || {},
                                [Rme]: t.relatedTask
                            }
                        }
                    };
                }
                this._transport?.send(o, t).catch((u)=>this._onerror(u));
            });
            return;
        }
        let s = {
            ...e,
            jsonrpc: "2.0"
        };
        if (t?.relatedTask) {
            s = {
                ...s,
                params: {
                    ...s.params,
                    _meta: {
                        ...s.params?._meta || {},
                        [Rme]: t.relatedTask
                    }
                }
            };
        }
        await this._transport.send(s, t);
    }
    setRequestHandler(e, t) {
        let r = I(e);
        this.assertRequestHandlerCapability(r);
        this._requestHandlers.set(r, (a, n)=>{
            let s = R(e, a);
            return Promise.resolve(t(s, n));
        });
    }
    removeRequestHandler(e) {
        this._requestHandlers.delete(e);
    }
    assertCanSetRequestHandler(e) {
        if (this._requestHandlers.has(e)) {
            throw Error(`A request handler for ${e} already exists, which would be overridden`);
        }
    }
    setNotificationHandler(e, t) {
        let r = I(e);
        this._notificationHandlers.set(r, (a)=>{
            let n = R(e, a);
            return Promise.resolve(t(n));
        });
    }
    removeNotificationHandler(e) {
        this._notificationHandlers.delete(e);
    }
    _cleanupTaskProgressHandler(e) {
        let t = this._taskProgressTokens.get(e);
        if (t !== undefined) {
            this._progressHandlers.delete(t);
            this._taskProgressTokens.delete(e);
        }
    }
    async _enqueueTaskMessage(e, t, r) {
        if (!this._taskStore || !this._taskMessageQueue) {
            throw Error("Cannot enqueue task message: taskStore and taskMessageQueue are not configured");
        }
        let a = this._options?.maxTaskQueueSize;
        await this._taskMessageQueue.enqueue(e, t, r, a);
    }
    async _clearTaskQueue(e, t) {
        if (this._taskMessageQueue) {
            let r = await this._taskMessageQueue.dequeueAll(e, t);
            for (let a of r){
                if (a.type === "request" && fK(a.message)) {
                    let n = a.message.id;
                    let s = this._requestResolvers.get(n);
                    if (s) {
                        s(new Zs(fi.InternalError, "Task cancelled or completed"));
                        this._requestResolvers.delete(n);
                    } else {
                        this._onerror(Error(`Resolver missing for request ${n} during task ${e} cleanup`));
                    }
                }
            }
        }
    }
    async _waitForTaskUpdate(e, t) {
        let r = this._options?.defaultTaskPollInterval ?? 1000;
        try {
            let a = await this._taskStore?.getTask(e);
            if (a?.pollInterval) {
                r = a.pollInterval;
            }
        } catch  {}
        return new Promise((resolve, reject)=>{
            if (t.aborted) {
                reject(new Zs(fi.InvalidRequest, "Request cancelled"));
                return;
            }
            let s = setTimeout(resolve, r);
            t.addEventListener("abort", ()=>{
                clearTimeout(s);
                reject(new Zs(fi.InvalidRequest, "Request cancelled"));
            }, {
                once: true
            });
        });
    }
    requestTaskStore(e, t) {
        let _taskStore = this._taskStore;
        if (!_taskStore) {
            throw Error("No task store configured");
        }
        return {
            createTask: async (a)=>{
                if (!e) {
                    throw Error("No request provided");
                }
                return await _taskStore.createTask(a, e.id, {
                    method: e.method,
                    params: e.params
                }, t);
            },
            getTask: async (a)=>{
                let n = await _taskStore.getTask(a, t);
                if (!n) {
                    throw new Zs(fi.InvalidParams, "Failed to retrieve task: Task not found");
                }
                return n;
            },
            storeTaskResult: async (a, n, s)=>{
                await _taskStore.storeTaskResult(a, n, s, t);
                let o = await _taskStore.getTask(a, t);
                if (o) {
                    let u = Ojt.parse({
                        method: "notifications/tasks/status",
                        params: o
                    });
                    await this.notification(u);
                    if (T(o.status)) {
                        this._cleanupTaskProgressHandler(a);
                    }
                }
            },
            getTaskResult: (a)=>_taskStore.getTaskResult(a, t),
            updateTaskStatus: async (a, n, s)=>{
                let o = await _taskStore.getTask(a, t);
                if (!o) {
                    throw new Zs(fi.InvalidParams, `Task "${a}" not found - it may have been cleaned up`);
                }
                if (T(o.status)) {
                    throw new Zs(fi.InvalidParams, `Cannot update task "${a}" from terminal status "${o.status}" to "${n}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
                }
                await _taskStore.updateTaskStatus(a, n, s, t);
                let u = await _taskStore.getTask(a, t);
                if (u) {
                    let p = Ojt.parse({
                        method: "notifications/tasks/status",
                        params: u
                    });
                    await this.notification(p);
                    if (T(u.status)) {
                        this._cleanupTaskProgressHandler(a);
                    }
                }
            },
            listTasks: (a)=>_taskStore.listTasks(a, t)
        };
    }
}
function L(e) {
    return e !== null && typeof e === "object" && !Array.isArray(e);
}
function ryn(e, t) {
    let r = {
        ...e
    };
    for(let a in t){
        let n = a;
        let s = t[n];
        if (s === undefined) {
            continue;
        }
        let o = r[n];
        if (L(o) && L(s)) {
            r[n] = {
                ...o,
                ...s
            };
        } else {
            r[n] = s;
        }
    }
    return r;
}
const ie = Se(AMn(), 1);
const ue = Se(oe(), 1);
function qe() {
    let e = new ie.default({
        strict: false,
        validateFormats: true,
        validateSchema: false,
        allErrors: true
    });
    ue.default(e);
    return e;
}
class Pjt {
    constructor(e){
        this._ajv = e ?? qe();
    }
    getValidator(e) {
        let t = "$id" in e && typeof e.$id === "string" ? this._ajv.getSchema(e.$id) ?? this._ajv.compile(e) : this._ajv.compile(e);
        return (r)=>{
            if (t(r)) {
                return {
                    valid: true,
                    data: r,
                    errorMessage: undefined
                };
            } else {
                return {
                    valid: false,
                    data: undefined,
                    errorMessage: this._ajv.errorsText(t.errors)
                };
            }
        };
    }
}
function oyn(e, t, r) {
    if (!e) {
        throw Error(`${r} does not support task creation (required for ${t})`);
    }
    switch(t){
        case "tools/call":
            if (!e.tools?.call) {
                throw Error(`${r} does not support task creation for tools/call (required for ${t})`);
            }
            break;
        default:
            break;
    }
}
function syn(e, t, r) {
    if (!e) {
        throw Error(`${r} does not support task creation (required for ${t})`);
    }
    switch(t){
        case "sampling/createMessage":
            if (!e.sampling?.createMessage) {
                throw Error(`${r} does not support task creation for sampling/createMessage (required for ${t})`);
            }
            break;
        case "elicitation/create":
            if (!e.elicitation?.create) {
                throw Error(`${r} does not support task creation for elicitation/create (required for ${t})`);
            }
            break;
        default:
            break;
    }
}
export { YWe, U6, Nyt, xjt, ryn, Pjt, oyn, syn };
