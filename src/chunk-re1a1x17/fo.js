import { Ae } from "./Ae.js";
import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_fo_cache;
export function fo() {
    if (__wakaru_fo_cache) {
        return __wakaru_fo_cache;
    }
    const e = {};
    __wakaru_fo_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = undefined;
    let t = te();
    let r = ne();
    let s = Ae();
    e.keywordError = {
        message: ({ keyword })=>t.str`must pass "${keyword}" keyword validation`
    };
    e.keyword$DataError = {
        message: ({ keyword, schemaType })=>{
            if (schemaType) {
                return t.str`"${keyword}" keyword must be ${schemaType} ($data)`;
            }
            return t.str`"${keyword}" keyword is invalid ($data)`;
        }
    };
    function a(p, h = e.keywordError, g, f) {
        let { it } = p;
        let { gen, compositeRule, allErrors } = it;
        let k = _(p, h, g);
        if (f ?? (compositeRule || allErrors)) {
            c(gen, k);
        } else {
            d(it, t._`[${k}]`);
        }
    }
    e.reportError = a;
    function n(p, h = e.keywordError, g) {
        let { it } = p;
        let { gen, compositeRule, allErrors } = it;
        c(gen, _(p, h, g));
        if (!(compositeRule || allErrors)) {
            d(it, s.default.vErrors);
        }
    }
    e.reportExtraError = n;
    function i(p, h) {
        p.assign(s.default.errors, h);
        p.if(t._`${s.default.vErrors} !== null`, ()=>p.if(h, ()=>p.assign(t._`${s.default.vErrors}.length`, h), ()=>p.assign(s.default.vErrors, null)));
    }
    e.resetErrorsCount = i;
    function l({ gen, keyword, schemaValue, data, errsCount, it }) {
        if (errsCount === undefined) {
            throw Error("ajv implementation error");
        }
        let b = gen.name("err");
        gen.forRange("i", errsCount, s.default.errors, (S)=>{
            gen.const(b, t._`${s.default.vErrors}[${S}]`);
            gen.if(t._`${b}.instancePath === undefined`, ()=>gen.assign(t._`${b}.instancePath`, t.strConcat(s.default.instancePath, it.errorPath)));
            gen.assign(t._`${b}.schemaPath`, t.str`${it.errSchemaPath}/${keyword}`);
            if (it.opts.verbose) {
                gen.assign(t._`${b}.schema`, schemaValue);
                gen.assign(t._`${b}.data`, data);
            }
        });
    }
    e.extendErrors = l;
    function c(gen, h) {
        let g = gen.const("err", h);
        gen.if(t._`${s.default.vErrors} === null`, ()=>gen.assign(s.default.vErrors, t._`[${g}]`), t._`${s.default.vErrors}.push(${g})`);
        gen.code(t._`${s.default.errors}++`);
    }
    function d(p, h) {
        let { gen, validateName, schemaEnv } = p;
        if (schemaEnv.$async) {
            gen.throw(t._`new ${p.ValidationError}(${h})`);
        } else {
            gen.assign(t._`${validateName}.errors`, h);
            gen.return(false);
        }
    }
    let m = {
        keyword: new t.Name("keyword"),
        schemaPath: new t.Name("schemaPath"),
        params: new t.Name("params"),
        propertyName: new t.Name("propertyName"),
        message: new t.Name("message"),
        schema: new t.Name("schema"),
        parentSchema: new t.Name("parentSchema")
    };
    function _(p, h, g) {
        let { createErrors } = p.it;
        if (createErrors === false) {
            return t._`{}`;
        }
        return w(p, h, g);
    }
    function w(p, h, g = {}) {
        let { gen, it } = p;
        let C = [
            P(it, g),
            y(p, g)
        ];
        v(p, h, C);
        return gen.object(...C);
    }
    function P({ errorPath }, { instancePath }) {
        let g = instancePath ? t.str`${errorPath}${r.getErrorPath(instancePath, r.Type.Str)}` : errorPath;
        return [
            s.default.instancePath,
            t.strConcat(s.default.instancePath, g)
        ];
    }
    function y({ keyword, it: { errSchemaPath } }, { schemaPath, parentSchema }) {
        let R = parentSchema ? errSchemaPath : t.str`${errSchemaPath}/${keyword}`;
        if (schemaPath) {
            R = t.str`${R}${r.getErrorPath(schemaPath, r.Type.Str)}`;
        }
        return [
            m.schemaPath,
            R
        ];
    }
    function v(p, { params, message }, f) {
        let { keyword, data, schemaValue, it } = p;
        let { opts, propertyName, topSchemaRef, schemaPath } = it;
        f.push([
            m.keyword,
            keyword
        ], [
            m.params,
            typeof params === "function" ? params(p) : params || t._`{}`
        ]);
        if (opts.messages) {
            f.push([
                m.message,
                typeof message === "function" ? message(p) : message
            ]);
        }
        if (opts.verbose) {
            f.push([
                m.schema,
                schemaValue
            ], [
                m.parentSchema,
                t._`${topSchemaRef}${schemaPath}`
            ], [
                s.default.data,
                data
            ]);
        }
        if (propertyName) {
            f.push([
                m.propertyName,
                propertyName
            ]);
        }
    }
    return e;
}
