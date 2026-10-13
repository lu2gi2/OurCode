import { Ae } from "./Ae.js";
import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_Le_cache;
export function Le() {
    if (__wakaru_Le_cache) {
        return __wakaru_Le_cache;
    }
    const e = {};
    __wakaru_Le_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.validateUnion = e.validateArray = e.usePattern = e.callValidateCode = e.schemaProperties = e.allSchemaProperties = e.noPropertyInData = e.propertyInData = e.isOwnProperty = e.hasPropFunc = e.reportMissingProp = e.checkMissingProp = e.checkReportMissingProp = undefined;
    let t = te();
    let r = ne();
    let s = Ae();
    let a = ne();
    function n(f, R) {
        let { gen, data, it } = f;
        gen.if(_(gen, data, R, it.opts.ownProperties), ()=>{
            f.setParams({
                missingProperty: t._`${R}`
            }, true);
            f.error();
        });
    }
    e.checkReportMissingProp = n;
    function i({ gen, data, it: { opts } }, b, S) {
        return t.or(...b.map((k)=>t.and(_(gen, data, k, opts.ownProperties), t._`${S} = ${k}`)));
    }
    e.checkMissingProp = i;
    function l(f, missingProperty) {
        f.setParams({
            missingProperty
        }, true);
        f.error();
    }
    e.reportMissingProp = l;
    function c(f) {
        return f.scopeValue("func", {
            ref: Object.prototype.hasOwnProperty,
            code: t._`Object.prototype.hasOwnProperty`
        });
    }
    e.hasPropFunc = c;
    function d(f, R, C) {
        return t._`${c(f)}.call(${R}, ${C})`;
    }
    e.isOwnProperty = d;
    function m(f, R, C, b) {
        let S = t._`${R}${t.getProperty(C)} !== undefined`;
        if (b) {
            return t._`${S} && ${d(f, R, C)}`;
        }
        return S;
    }
    e.propertyInData = m;
    function _(f, R, C, b) {
        let S = t._`${R}${t.getProperty(C)} === undefined`;
        if (b) {
            return t.or(S, t.not(d(f, R, C)));
        }
        return S;
    }
    e.noPropertyInData = _;
    function w(f) {
        if (f) {
            return Object.keys(f).filter((R)=>R !== "__proto__");
        }
        return [];
    }
    e.allSchemaProperties = w;
    function P(f, R) {
        return w(R).filter((C)=>!r.alwaysValidSchema(f, R[C]));
    }
    e.schemaProperties = P;
    function y({ schemaCode, data, it: { gen, topSchemaRef, schemaPath, errorPath }, it }, K, N, F) {
        let W = F ? t._`${schemaCode}, ${data}, ${topSchemaRef}${schemaPath}` : data;
        let B = [
            [
                s.default.instancePath,
                t.strConcat(s.default.instancePath, errorPath)
            ],
            [
                s.default.parentData,
                it.parentData
            ],
            [
                s.default.parentDataProperty,
                it.parentDataProperty
            ],
            [
                s.default.rootData,
                s.default.rootData
            ]
        ];
        if (it.opts.dynamicRef) {
            B.push([
                s.default.dynamicAnchors,
                s.default.dynamicAnchors
            ]);
        }
        let se = t._`${W}, ${gen.object(...B)}`;
        if (N !== t.nil) {
            return t._`${K}.call(${N}, ${se})`;
        }
        return t._`${K}(${se})`;
    }
    e.callValidateCode = y;
    let v = t._`new RegExp`;
    function p({ gen, it: { opts } }, C) {
        let b = opts.unicodeRegExp ? "u" : "";
        let { regExp } = opts.code;
        let ref = regExp(C, b);
        return gen.scopeValue("pattern", {
            key: ref.toString(),
            ref,
            code: t._`${regExp.code === "new RegExp" ? v : a.useFunc(gen, regExp)}(${C}, ${b})`
        });
    }
    e.usePattern = p;
    function h(f) {
        let { gen, data, keyword, it } = f;
        let k = gen.name("valid");
        if (it.allErrors) {
            let K = gen.let("valid", true);
            L(()=>gen.assign(K, false));
            return K;
        }
        gen.var(k, true);
        L(()=>gen.break());
        return k;
        function L(K) {
            let N = gen.const("len", t._`${data}.length`);
            gen.forRange("i", 0, N, (dataProp)=>{
                f.subschema({
                    keyword,
                    dataProp,
                    dataPropType: r.Type.Num
                }, k);
                gen.if(t.not(k), K);
            });
        }
    }
    e.validateArray = h;
    function g(f) {
        let { gen, schema, keyword, it } = f;
        if (!Array.isArray(schema)) {
            throw Error("ajv implementation error");
        }
        if (schema.some((K)=>r.alwaysValidSchema(it, K)) && !it.opts.unevaluated) {
            return;
        }
        let k = gen.let("valid", false);
        let L = gen.name("_valid");
        gen.block(()=>schema.forEach((K, schemaProp)=>{
                let F = f.subschema({
                    keyword,
                    schemaProp,
                    compositeRule: true
                }, L);
                gen.assign(k, t._`${k} || ${L}`);
                if (!f.mergeValidEvaluated(F, L)) {
                    gen.if(t.not(k));
                }
            }));
        f.result(k, ()=>f.reset(), ()=>f.error(true));
    }
    e.validateUnion = g;
    return e;
}
