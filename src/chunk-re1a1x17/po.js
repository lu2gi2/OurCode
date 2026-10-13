import { Ni } from "./Ni.js";
import { Oi } from "./Oi.js";
import { fo } from "./fo.js";
import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_po_cache;
export function po() {
    if (__wakaru_po_cache) {
        return __wakaru_po_cache;
    }
    const e = {};
    __wakaru_po_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.reportTypeError = e.checkDataTypes = e.checkDataType = e.coerceAndCheckDataType = e.getJSONTypes = e.getSchemaTypes = e.DataType = undefined;
    let t = Oi();
    let r = Ni();
    let s = fo();
    let a = te();
    let n = ne();
    let i;
    ((f)=>{
        f[f.Correct = 0] = "Correct";
        f[f.Wrong = 1] = "Wrong";
    })(i || (e.DataType = i = {}));
    function l(f) {
        let R = c(f.type);
        if (R.includes("null")) {
            if (f.nullable === false) {
                throw Error("type: null contradicts nullable: false");
            }
        } else {
            if (!R.length && f.nullable !== undefined) {
                throw Error('"nullable" cannot be used without "type"');
            }
            if (f.nullable === true) {
                R.push("null");
            }
        }
        return R;
    }
    e.getSchemaTypes = l;
    function c(f) {
        let R = Array.isArray(f) ? f : f ? [
            f
        ] : [];
        if (R.every(t.isJSONType)) {
            return R;
        }
        throw Error(`type must be JSONType or JSONType[]: ${R.join(",")}`);
    }
    e.getJSONTypes = c;
    function d(f, R) {
        let { gen, data, opts } = f;
        let k = _(R, opts.coerceTypes);
        let L = R.length > 0 && !(k.length === 0 && R.length === 1 && r.schemaHasRulesForType(f, R[0]));
        if (L) {
            let K = v(R, data, opts.strictNumbers, i.Wrong);
            gen.if(K, ()=>{
                if (k.length) {
                    w(f, R, k);
                } else {
                    h(f);
                }
            });
        }
        return L;
    }
    e.coerceAndCheckDataType = d;
    let m = new Set([
        "string",
        "number",
        "integer",
        "boolean",
        "null"
    ]);
    function _(f, coerceTypes) {
        if (coerceTypes) {
            return f.filter((C)=>m.has(C) || coerceTypes === "array" && C === "array");
        }
        return [];
    }
    function w(f, R, C) {
        let { gen, data, opts } = f;
        let L = gen.let("dataType", a._`typeof ${data}`);
        let K = gen.let("coerced", a._`undefined`);
        if (opts.coerceTypes === "array") {
            gen.if(a._`${L} == 'object' && Array.isArray(${data}) && ${data}.length == 1`, ()=>gen.assign(data, a._`${data}[0]`).assign(L, a._`typeof ${data}`).if(v(R, data, opts.strictNumbers), ()=>gen.assign(K, data)));
        }
        gen.if(a._`${K} !== undefined`);
        for (let F of C){
            if (m.has(F) || F === "array" && opts.coerceTypes === "array") {
                N(F);
            }
        }
        gen.else();
        h(f);
        gen.endIf();
        gen.if(a._`${K} !== undefined`, ()=>{
            gen.assign(data, K);
            P(f, K);
        });
        function N(F) {
            switch(F){
                case "string":
                    gen.elseIf(a._`${L} == "number" || ${L} == "boolean"`).assign(K, a._`"" + ${data}`).elseIf(a._`${data} === null`).assign(K, a._`""`);
                    return;
                case "number":
                    gen.elseIf(a._`${L} == "boolean" || ${data} === null
              || (${L} == "string" && ${data} && ${data} == +${data})`).assign(K, a._`+${data}`);
                    return;
                case "integer":
                    gen.elseIf(a._`${L} === "boolean" || ${data} === null
              || (${L} === "string" && ${data} && ${data} == +${data} && !(${data} % 1))`).assign(K, a._`+${data}`);
                    return;
                case "boolean":
                    gen.elseIf(a._`${data} === "false" || ${data} === 0 || ${data} === null`).assign(K, false).elseIf(a._`${data} === "true" || ${data} === 1`).assign(K, true);
                    return;
                case "null":
                    gen.elseIf(a._`${data} === "" || ${data} === 0 || ${data} === false`);
                    gen.assign(K, null);
                    return;
                case "array":
                    gen.elseIf(a._`${L} === "string" || ${L} === "number"
              || ${L} === "boolean" || ${data} === null`).assign(K, a._`[${data}]`);
            }
        }
    }
    function P({ gen, parentData, parentDataProperty }, b) {
        gen.if(a._`${parentData} !== undefined`, ()=>gen.assign(a._`${parentData}[${parentDataProperty}]`, b));
    }
    function y(f, R, C, b = i.Correct) {
        let S = b === i.Correct ? a.operators.EQ : a.operators.NEQ;
        let k;
        switch(f){
            case "null":
                return a._`${R} ${S} null`;
            case "array":
                k = a._`Array.isArray(${R})`;
                break;
            case "object":
                k = a._`${R} && typeof ${R} == "object" && !Array.isArray(${R})`;
                break;
            case "integer":
                k = L(a._`!(${R} % 1) && !isNaN(${R})`);
                break;
            case "number":
                k = L();
                break;
            default:
                return a._`typeof ${R} ${S} ${f}`;
        }
        if (b === i.Correct) {
            return k;
        }
        return a.not(k);
        function L(K = a.nil) {
            return a.and(a._`typeof ${R} == "number"`, K, C ? a._`isFinite(${R})` : a.nil);
        }
    }
    e.checkDataType = y;
    function v(f, R, C, b) {
        if (f.length === 1) {
            return y(f[0], R, C, b);
        }
        let S;
        let k = n.toHash(f);
        if (k.array && k.object) {
            let L = a._`typeof ${R} != "object"`;
            S = k.null ? L : a._`!${R} || ${L}`;
            delete k.null;
            delete k.array;
            delete k.object;
        } else {
            S = a.nil;
        }
        if (k.number) {
            delete k.integer;
        }
        for(let L in k){
            S = a.and(S, y(L, R, C, b));
        }
        return S;
    }
    e.checkDataTypes = v;
    let p = {
        message: ({ schema })=>`must be ${schema}`,
        params: ({ schema, schemaValue })=>{
            if (typeof schema === "string") {
                return a._`{type: ${schema}}`;
            }
            return a._`{type: ${schemaValue}}`;
        }
    };
    function h(f) {
        let R = g(f);
        s.reportError(R, p);
    }
    e.reportTypeError = h;
    function g(it) {
        let { gen, data, schema } = it;
        let S = n.schemaRefOrVal(it, schema, "type");
        return {
            gen,
            keyword: "type",
            data,
            schema: schema.type,
            schemaCode: S,
            schemaValue: S,
            parentSchema: schema,
            params: {},
            it
        };
    }
    return e;
}
