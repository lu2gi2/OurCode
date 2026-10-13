import { Ae } from "./Ae.js";
import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru_ad_cache;
export function ad() {
    if (__wakaru_ad_cache) {
        return __wakaru_ad_cache;
    }
    const e = {};
    __wakaru_ad_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let r = ne();
    let s = Ae();
    let a = {
        keyword: "unevaluatedProperties",
        type: "object",
        schemaType: [
            "boolean",
            "object"
        ],
        trackErrors: true,
        error: {
            message: "must NOT have unevaluated properties",
            params: ({ params })=>t._`{unevaluatedProperty: ${params.unevaluatedProperty}}`
        },
        code (n) {
            let { gen, schema, data, errsCount, it } = n;
            if (!errsCount) {
                throw Error("ajv implementation error");
            }
            let { allErrors, props } = it;
            if (props instanceof t.Name) {
                gen.if(t._`${props} !== true`, ()=>gen.forIn("key", data, (p)=>gen.if(y(props, p), ()=>P(p))));
            } else if (props !== true) {
                gen.forIn("key", data, (p)=>{
                    if (props === undefined) {
                        return P(p);
                    }
                    return gen.if(v(props, p), ()=>P(p));
                });
            }
            it.props = true;
            n.ok(t._`${errsCount} === ${s.default.errors}`);
            function P(p) {
                if (schema === false) {
                    n.setParams({
                        unevaluatedProperty: p
                    });
                    n.error();
                    if (!allErrors) {
                        gen.break();
                    }
                    return;
                }
                if (!r.alwaysValidSchema(it, schema)) {
                    let h = gen.name("valid");
                    n.subschema({
                        keyword: "unevaluatedProperties",
                        dataProp: p,
                        dataPropType: r.Type.Str
                    }, h);
                    if (!allErrors) {
                        gen.if(t.not(h), ()=>gen.break());
                    }
                }
            }
            function y(props, h) {
                return t._`!${props} || !${props}[${h}]`;
            }
            function v(props, h) {
                let g = [];
                for(let f in props){
                    if (props[f] === true) {
                        g.push(t._`${h} !== ${f}`);
                    }
                }
                return t.and(...g);
            }
        }
    };
    e.default = a;
    return e;
}
