import { Wu } from "./Wu_2.js";
import { _o } from "./_o.js";
import { ne } from "./ne.js";
import { os } from "./os.js";
import { te } from "./te.js";
let __wakaru_Ji_cache;
export function Ji() {
    if (__wakaru_Ji_cache) {
        return __wakaru_Ji_cache;
    }
    const e = {};
    __wakaru_Ji_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let r = Wu();
    let s = _o();
    let a = os();
    let n = ne();
    let i = {
        keyword: "discriminator",
        type: "object",
        schemaType: "object",
        error: {
            message: ({ params: { discrError, tagName } })=>{
                if (discrError === r.DiscrError.Tag) {
                    return `tag "${tagName}" must be string`;
                }
                return `value of tag "${tagName}" must be in oneOf`;
            },
            params: ({ params: { discrError, tag, tagName } })=>t._`{error: ${discrError}, tag: ${tagName}, tagValue: ${tag}}`
        },
        code (l) {
            let { gen, data, schema, parentSchema, it } = l;
            let { oneOf } = parentSchema;
            if (!it.opts.discriminator) {
                throw Error("discriminator: requires discriminator option");
            }
            let schema_propertyName = schema.propertyName;
            if (typeof schema_propertyName !== "string") {
                throw Error("discriminator: requires propertyName");
            }
            if (schema.mapping) {
                throw Error("discriminator: mapping is not supported");
            }
            if (!oneOf) {
                throw Error("discriminator: requires oneOf keyword");
            }
            let v = gen.let("valid", false);
            let tag = gen.const("tag", t._`${data}${t.getProperty(schema_propertyName)}`);
            gen.if(t._`typeof ${tag} == "string"`, ()=>h(), ()=>l.error(false, {
                    discrError: r.DiscrError.Tag,
                    tag,
                    tagName: schema_propertyName
                }));
            l.ok(v);
            function h() {
                let R = f();
                gen.if(false);
                for(let C in R){
                    gen.elseIf(t._`${tag} === ${C}`);
                    gen.assign(v, g(R[C]));
                }
                gen.else();
                l.error(false, {
                    discrError: r.DiscrError.Mapping,
                    tag,
                    tagName: schema_propertyName
                });
                gen.endIf();
            }
            function g(schemaProp) {
                let C = gen.name("valid");
                let b = l.subschema({
                    keyword: "oneOf",
                    schemaProp
                }, C);
                l.mergeEvaluated(b, t.Name);
                return C;
            }
            function f() {
                let C = {};
                let b = k(parentSchema);
                let S = true;
                for(let N = 0; N < oneOf.length; N++){
                    let F = oneOf[N];
                    if (F?.$ref && !n.schemaHasRulesButRef(F, it.self.RULES)) {
                        let B = F.$ref;
                        F = s.resolveRef.call(it.self, it.schemaEnv.root, it.baseId, B);
                        if (F instanceof s.SchemaEnv) {
                            F = F.schema;
                        }
                        if (F === undefined) {
                            throw new a.default(it.opts.uriResolver, it.baseId, B);
                        }
                    }
                    let W = F?.properties?.[schema_propertyName];
                    if (typeof W !== "object") {
                        throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${schema_propertyName}"`);
                    }
                    S = S && (b || k(F));
                    L(W, N);
                }
                if (!S) {
                    throw Error(`discriminator: "${schema_propertyName}" must be required`);
                }
                return C;
                function k({ required }) {
                    return Array.isArray(required) && required.includes(schema_propertyName);
                }
                function L(N, F) {
                    if (N.const) {
                        K(N.const, F);
                    } else if (N.enum) {
                        for (let W of N.enum){
                            K(W, F);
                        }
                    } else {
                        throw Error(`discriminator: "properties/${schema_propertyName}" must have "const" or "enum"`);
                    }
                }
                function K(N, F) {
                    if (typeof N !== "string" || N in C) {
                        throw Error(`discriminator: "${schema_propertyName}" values must be unique strings`);
                    }
                    C[N] = F;
                }
            }
        }
    };
    e.default = i;
    return e;
}
