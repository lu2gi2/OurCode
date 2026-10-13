import { Ae } from "./Ae.js";
import { Le } from "./Le.js";
import { fo } from "./fo.js";
import { te } from "./te.js";
let __wakaru_Su_cache;
export function Su() {
    if (__wakaru_Su_cache) {
        return __wakaru_Su_cache;
    }
    const e = {};
    __wakaru_Su_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.validateKeywordUsage = e.validSchemaType = e.funcKeywordCode = e.macroKeywordCode = undefined;
    let t = te();
    let r = Ae();
    let s = Le();
    let a = fo();
    function n(P, y) {
        let { gen, keyword, schema, parentSchema, it } = P;
        let schema_1 = y.macro.call(it.self, schema, parentSchema, it);
        let topSchemaRef = m(gen, keyword, schema_1);
        if (it.opts.validateSchema !== false) {
            it.self.validateSchema(schema_1, true);
        }
        let b = gen.name("valid");
        P.subschema({
            schema: schema_1,
            schemaPath: t.nil,
            errSchemaPath: `${it.errSchemaPath}/${keyword}`,
            topSchemaRef,
            compositeRule: true
        }, b);
        P.pass(b, ()=>P.error(true));
    }
    e.macroKeywordCode = n;
    function i(P, y) {
        let { gen, keyword, schema, parentSchema, $data, it } = P;
        d(it, y);
        let b = m(gen, keyword, !$data && y.compile ? y.compile.call(it.self, schema, parentSchema, it) : y.validate);
        let S = gen.let("valid");
        P.block$data(S, k);
        P.ok(y.valid ?? S);
        function k() {
            if (y.errors === false) {
                N();
                if (y.modifying) {
                    l(P);
                }
                F(()=>P.error());
            } else {
                let W = y.async ? L() : K();
                if (y.modifying) {
                    l(P);
                }
                F(()=>c(P, W));
            }
        }
        function L() {
            let W = gen.let("ruleErrs", null);
            gen.try(()=>N(t._`await `), (B)=>gen.assign(S, false).if(t._`${B} instanceof ${it.ValidationError}`, ()=>gen.assign(W, t._`${B}.errors`), ()=>gen.throw(B)));
            return W;
        }
        function K() {
            let W = t._`${b}.errors`;
            gen.assign(W, null);
            N(t.nil);
            return W;
        }
        function N(W = y.async ? t._`await ` : t.nil) {
            let B = it.opts.passContext ? r.default.this : r.default.self;
            let se = !("compile" in y && !$data || y.schema === false);
            gen.assign(S, t._`${W}${s.callValidateCode(P, b, B, se)}`, y.modifying);
        }
        function F(W) {
            gen.if(t.not(y.valid ?? S), W);
        }
    }
    e.funcKeywordCode = i;
    function l({ gen, data, it }) {
        gen.if(it.parentData, ()=>gen.assign(data, t._`${it.parentData}[${it.parentDataProperty}]`));
    }
    function c(P, y) {
        let { gen } = P;
        gen.if(t._`Array.isArray(${y})`, ()=>{
            gen.assign(r.default.vErrors, t._`${r.default.vErrors} === null ? ${y} : ${r.default.vErrors}.concat(${y})`).assign(r.default.errors, t._`${r.default.vErrors}.length`);
            a.extendErrors(P);
        }, ()=>P.error());
    }
    function d({ schemaEnv }, y) {
        if (y.async && !schemaEnv.$async) {
            throw Error("async keyword in sync schema");
        }
    }
    function m(gen, keyword, ref) {
        if (ref === undefined) {
            throw Error(`keyword "${keyword}" failed to compile`);
        }
        return gen.scopeValue("keyword", typeof ref === "function" ? {
            ref
        } : {
            ref,
            code: t.stringify(ref)
        });
    }
    function _(P, y, v = false) {
        return !y.length || y.some((p)=>{
            switch(p){
                case "array":
                    return Array.isArray(P);
                case "object":
                    return P && typeof P === "object" && !Array.isArray(P);
                default:
                    return typeof P == p || v && typeof P === "undefined";
            }
        });
    }
    e.validSchemaType = _;
    function w({ schema, opts, self, errSchemaPath }, h, g) {
        if (Array.isArray(h.keyword) ? !h.keyword.includes(g) : h.keyword !== g) {
            throw Error("ajv implementation error");
        }
        let h_dependencies = h.dependencies;
        if (h_dependencies?.some((R)=>!Object.prototype.hasOwnProperty.call(schema, R))) {
            throw Error(`parent schema must have dependencies of ${g}: ${h_dependencies.join(",")}`);
        }
        if (h.validateSchema) {
            if (!h.validateSchema(schema[g])) {
                let R = `keyword "${g}" value is invalid at path "${errSchemaPath}": ` + self.errorsText(h.validateSchema.errors);
                if (opts.validateSchema === "log") {
                    self.logger.error(R);
                } else {
                    throw Error(R);
                }
            }
        }
    }
    e.validateKeywordUsage = w;
    return e;
}
