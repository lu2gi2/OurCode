import { Ae } from "./Ae.js";
import { Le } from "./Le.js";
import { _o } from "./_o.js";
import { ne } from "./ne.js";
import { os } from "./os.js";
import { te } from "./te.js";
let __wakaru_fn_cache;
export function fn() {
    if (__wakaru_fn_cache) {
        return __wakaru_fn_cache;
    }
    const e = {};
    __wakaru_fn_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.callRef = e.getValidate = undefined;
    let t = os();
    let r = Le();
    let s = te();
    let a = Ae();
    let n = _o();
    let i = ne();
    let l = {
        keyword: "$ref",
        schemaType: "string",
        code (m) {
            let { gen, schema, it } = m;
            let { baseId, schemaEnv, validateName, opts, self } = it;
            let { root } = schemaEnv;
            if ((schema === "#" || schema === "#/") && baseId === root.baseId) {
                return C();
            }
            let R = n.resolveRef.call(self, root, baseId, schema);
            if (R === undefined) {
                throw new t.default(it.opts.uriResolver, baseId, schema);
            }
            if (R instanceof n.SchemaEnv) {
                return b(R);
            }
            return S(R);
            function C() {
                if (schemaEnv === root) {
                    return d(m, validateName, schemaEnv, schemaEnv.$async);
                }
                let k = gen.scopeValue("root", {
                    ref: root
                });
                return d(m, s._`${k}.validate`, root, root.$async);
            }
            function b(k) {
                d(m, c(m, k), k, k.$async);
            }
            function S(k) {
                let topSchemaRef = gen.scopeValue("schema", opts.code.source === true ? {
                    ref: k,
                    code: s.stringify(k)
                } : {
                    ref: k
                });
                let K = gen.name("valid");
                let N = m.subschema({
                    schema: k,
                    dataTypes: [],
                    schemaPath: s.nil,
                    topSchemaRef,
                    errSchemaPath: schema
                }, K);
                m.mergeEvaluated(N);
                m.ok(K);
            }
        }
    };
    function c({ gen }, ref) {
        if (ref.validate) {
            return gen.scopeValue("validate", {
                ref: ref.validate
            });
        }
        return s._`${gen.scopeValue("wrapper", {
            ref
        })}.validate`;
    }
    e.getValidate = c;
    function d(m, _, w, P) {
        let { gen, it } = m;
        let { allErrors, schemaEnv, opts } = it;
        let f = opts.passContext ? a.default.this : s.nil;
        if (P) {
            R();
        } else {
            C();
        }
        function R() {
            if (!schemaEnv.$async) {
                throw Error("async schema referenced by sync schema");
            }
            let k = gen.let("valid");
            gen.try(()=>{
                gen.code(s._`await ${r.callValidateCode(m, _, f)}`);
                S(_);
                if (!allErrors) {
                    gen.assign(k, true);
                }
            }, (L)=>{
                gen.if(s._`!(${L} instanceof ${it.ValidationError})`, ()=>gen.throw(L));
                b(L);
                if (!allErrors) {
                    gen.assign(k, false);
                }
            });
            m.ok(k);
        }
        function C() {
            m.result(r.callValidateCode(m, _, f), ()=>S(_), ()=>b(_));
        }
        function b(k) {
            let L = s._`${k}.errors`;
            gen.assign(a.default.vErrors, s._`${a.default.vErrors} === null ? ${L} : ${a.default.vErrors}.concat(${L})`);
            gen.assign(a.default.errors, s._`${a.default.vErrors}.length`);
        }
        function S(k) {
            if (!it.opts.unevaluated) {
                return;
            }
            let K = w?.validate?.evaluated;
            if (it.props !== true) {
                if (K && !K.dynamicProps) {
                    if (K.props !== undefined) {
                        it.props = i.mergeEvaluated.props(gen, K.props, it.props);
                    }
                } else {
                    let N = gen.var("props", s._`${k}.evaluated.props`);
                    it.props = i.mergeEvaluated.props(gen, N, it.props, s.Name);
                }
            }
            if (it.items !== true) {
                if (K && !K.dynamicItems) {
                    if (K.items !== undefined) {
                        it.items = i.mergeEvaluated.items(gen, K.items, it.items);
                    }
                } else {
                    let N = gen.var("items", s._`${k}.evaluated.items`);
                    it.items = i.mergeEvaluated.items(gen, N, it.items, s.Name);
                }
            }
        }
    }
    e.callRef = d;
    e.default = l;
    return e;
}
