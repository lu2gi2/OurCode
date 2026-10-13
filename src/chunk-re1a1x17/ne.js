import { mo } from "./mo.js";
import { te } from "./te.js";
let __wakaru_ne_cache;
export function ne() {
    if (__wakaru_ne_cache) {
        return __wakaru_ne_cache;
    }
    const e = {};
    __wakaru_ne_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.checkStrictMode = e.getErrorPath = e.Type = e.useFunc = e.setEvaluated = e.evaluatedPropsToName = e.mergeEvaluated = e.eachItem = e.unescapeJsonPointer = e.escapeJsonPointer = e.escapeFragment = e.unescapeFragment = e.schemaRefOrVal = e.schemaHasRulesButRef = e.schemaHasRules = e.checkUnknownRules = e.alwaysValidSchema = e.toHash = undefined;
    let t = te();
    let r = mo();
    function s(b) {
        let S = {};
        for (let k of b){
            S[k] = true;
        }
        return S;
    }
    e.toHash = s;
    function a(b, S) {
        if (typeof S === "boolean") {
            return S;
        }
        if (Object.keys(S).length === 0) {
            return true;
        }
        n(b, S);
        return !i(S, b.self.RULES.all);
    }
    e.alwaysValidSchema = a;
    function n(b, S = b.schema) {
        let { opts, self } = b;
        if (!opts.strictSchema) {
            return;
        }
        if (typeof S === "boolean") {
            return;
        }
        let keywords = self.RULES.keywords;
        for(let N in S){
            if (!keywords[N]) {
                C(b, `unknown keyword: "${N}"`);
            }
        }
    }
    e.checkUnknownRules = n;
    function i(b, S) {
        if (typeof b === "boolean") {
            return !b;
        }
        for(let k in b){
            if (S[k]) {
                return true;
            }
        }
        return false;
    }
    e.schemaHasRules = i;
    function l(b, S) {
        if (typeof b === "boolean") {
            return !b;
        }
        for(let k in b){
            if (k !== "$ref" && S.all[k]) {
                return true;
            }
        }
        return false;
    }
    e.schemaHasRulesButRef = l;
    function c({ topSchemaRef, schemaPath }, k, L, K) {
        if (!K) {
            if (typeof k === "number" || typeof k === "boolean") {
                return k;
            }
            if (typeof k === "string") {
                return t._`${k}`;
            }
        }
        return t._`${topSchemaRef}${schemaPath}${t.getProperty(L)}`;
    }
    e.schemaRefOrVal = c;
    function d(b) {
        return w(decodeURIComponent(b));
    }
    e.unescapeFragment = d;
    function m(b) {
        return encodeURIComponent(_(b));
    }
    e.escapeFragment = m;
    function _(b) {
        if (typeof b === "number") {
            return `${b}`;
        }
        return b.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    e.escapeJsonPointer = _;
    function w(b) {
        return b.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    e.unescapeJsonPointer = w;
    function P(b, S) {
        if (Array.isArray(b)) {
            for (let k of b){
                S(k);
            }
        } else {
            S(b);
        }
    }
    e.eachItem = P;
    function y({ mergeNames, mergeToName, mergeValues, resultToName }) {
        return (K, N, F, W)=>{
            let B = F === undefined ? N : F instanceof t.Name ? (N instanceof t.Name ? mergeNames(K, N, F) : mergeToName(K, N, F), F) : N instanceof t.Name ? (mergeToName(K, F, N), N) : mergeValues(N, F);
            if (W === t.Name && !(B instanceof t.Name)) {
                return resultToName(K, B);
            }
            return B;
        };
    }
    e.mergeEvaluated = {
        props: y({
            mergeNames: (b, S, k)=>b.if(t._`${k} !== true && ${S} !== undefined`, ()=>{
                    b.if(t._`${S} === true`, ()=>b.assign(k, true), ()=>b.assign(k, t._`${k} || {}`).code(t._`Object.assign(${k}, ${S})`));
                }),
            mergeToName: (b, S, k)=>b.if(t._`${k} !== true`, ()=>{
                    if (S === true) {
                        b.assign(k, true);
                    } else {
                        b.assign(k, t._`${k} || {}`);
                        p(b, k, S);
                    }
                }),
            mergeValues: (b, S)=>{
                if (b === true) {
                    return true;
                }
                return {
                    ...b,
                    ...S
                };
            },
            resultToName
        }),
        items: y({
            mergeNames: (b, S, k)=>b.if(t._`${k} !== true && ${S} !== undefined`, ()=>b.assign(k, t._`${S} === true ? true : ${k} > ${S} ? ${k} : ${S}`)),
            mergeToName: (b, S, k)=>b.if(t._`${k} !== true`, ()=>b.assign(k, S === true ? true : t._`${k} > ${S} ? ${k} : ${S}`)),
            mergeValues: (b, S)=>{
                if (b === true) {
                    return true;
                }
                return Math.max(b, S);
            },
            resultToName: (b, S)=>b.var("items", S)
        })
    };
    function resultToName(b, S) {
        if (S === true) {
            return b.var("props", true);
        }
        let k = b.var("props", t._`{}`);
        if (S !== undefined) {
            p(b, k, S);
        }
        return k;
    }
    e.evaluatedPropsToName = resultToName;
    function p(b, S, k) {
        Object.keys(k).forEach((L)=>b.assign(t._`${S}${t.getProperty(L)}`, true));
    }
    e.setEvaluated = p;
    let h = {};
    function g(b, ref) {
        return b.scopeValue("func", {
            ref,
            code: h[ref.code] || (h[ref.code] = new r._Code(ref.code))
        });
    }
    e.useFunc = g;
    let f;
    ((b)=>{
        b[b.Num = 0] = "Num";
        b[b.Str = 1] = "Str";
    })(f || (e.Type = f = {}));
    function R(b, S, k) {
        if (b instanceof t.Name) {
            let L = S === f.Num;
            if (k) {
                if (L) {
                    return t._`"[" + ${b} + "]"`;
                }
                return t._`"['" + ${b} + "']"`;
            }
            if (L) {
                return t._`"/" + ${b}`;
            }
            return t._`"/" + ${b}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
        }
        if (k) {
            return t.getProperty(b).toString();
        }
        return `/${_(b)}`;
    }
    e.getErrorPath = R;
    function C(b, S, k = b.opts.strictSchema) {
        if (!k) {
            return;
        }
        S = `strict mode: ${S}`;
        if (k === true) {
            throw Error(S);
        }
        b.self.logger.warn(S);
    }
    e.checkStrictMode = C;
    return e;
}
