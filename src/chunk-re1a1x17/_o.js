import { Ae } from "./Ae.js";
import { So } from "./So.js";
import { as } from "./as.js";
import { go } from "./go.js";
import { ne } from "./ne.js";
import { te } from "./te.js";
let __wakaru__o_cache;
export function _o() {
    if (__wakaru__o_cache) {
        return __wakaru__o_cache;
    }
    const e = {};
    __wakaru__o_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.resolveSchema = e.getCompilingSchema = e.resolveRef = e.compileSchema = e.SchemaEnv = undefined;
    let t = te();
    let r = go();
    let s = Ae();
    let a = So();
    let n = ne();
    let i = as();
    class l {
        constructor(h){
            this.refs = {};
            this.dynamicAnchors = {};
            let f;
            if (typeof h.schema === "object") {
                f = h.schema;
            }
            this.schema = h.schema;
            this.schemaId = h.schemaId;
            this.root = h.root || this;
            this.baseId = h.baseId ?? a.normalizeId(f?.[h.schemaId || "$id"]);
            this.schemaPath = h.schemaPath;
            this.localRefs = h.localRefs;
            this.meta = h.meta;
            this.$async = f?.$async;
            this.refs = {};
        }
    }
    e.SchemaEnv = l;
    function c(schemaEnv) {
        let g = _.call(this, schemaEnv);
        if (g) {
            return g;
        }
        let rootId = a.getFullPath(this.opts.uriResolver, schemaEnv.root.baseId);
        let { es5, lines } = this.opts.code;
        let { ownProperties } = this.opts;
        let gen = new t.CodeGen(this.scope, {
            es5,
            lines,
            ownProperties
        });
        let ValidationError;
        if (schemaEnv.$async) {
            ValidationError = gen.scopeValue("Error", {
                ref: r.default,
                code: t._`require("ajv/dist/runtime/validation_error").default`
            });
        }
        let validateName = gen.scopeName("validate");
        schemaEnv.validateName = validateName;
        let K = {
            gen,
            allErrors: this.opts.allErrors,
            data: s.default.data,
            parentData: s.default.parentData,
            parentDataProperty: s.default.parentDataProperty,
            dataNames: [
                s.default.data
            ],
            dataPathArr: [
                t.nil
            ],
            dataLevel: 0,
            dataTypes: [],
            definedProperties: new Set,
            topSchemaRef: gen.scopeValue("schema", this.opts.code.source === true ? {
                ref: schemaEnv.schema,
                code: t.stringify(schemaEnv.schema)
            } : {
                ref: schemaEnv.schema
            }),
            validateName,
            ValidationError,
            schema: schemaEnv.schema,
            schemaEnv,
            rootId,
            baseId: schemaEnv.baseId || rootId,
            schemaPath: t.nil,
            errSchemaPath: schemaEnv.schemaPath || (this.opts.jtd ? "" : "#"),
            errorPath: t._`""`,
            opts: this.opts,
            self: this
        };
        let N;
        try {
            this._compilations.add(schemaEnv);
            i.validateFunctionCode(K);
            gen.optimize(this.opts.code.optimize);
            let validateCode = gen.toString();
            N = `${gen.scopeRefs(s.default.scope)}return ${validateCode}`;
            if (this.opts.code.process) {
                N = this.opts.code.process(N, schemaEnv);
            }
            let ref = Function(`${s.default.self}`, `${s.default.scope}`, N)(this, this.scope.get());
            this.scope.value(validateName, {
                ref
            });
            ref.errors = null;
            ref.schema = schemaEnv.schema;
            ref.schemaEnv = schemaEnv;
            if (schemaEnv.$async) {
                ref.$async = true;
            }
            if (this.opts.code.source === true) {
                ref.source = {
                    validateName,
                    validateCode,
                    scopeValues: gen._values
                };
            }
            if (this.opts.unevaluated) {
                let { props, items } = K;
                ref.evaluated = {
                    props: props instanceof t.Name ? undefined : props,
                    items: items instanceof t.Name ? undefined : items,
                    dynamicProps: props instanceof t.Name,
                    dynamicItems: items instanceof t.Name
                };
                if (ref.source) {
                    ref.source.evaluated = t.stringify(ref.evaluated);
                }
            }
            schemaEnv.validate = ref;
            return schemaEnv;
        } catch (error) {
            delete schemaEnv.validate;
            delete schemaEnv.validateName;
            if (N) {
                this.logger.error("Error compiling schema, function code:", N);
            }
            throw error;
        } finally{
            this._compilations.delete(schemaEnv);
        }
    }
    e.compileSchema = c;
    function d(h, g, f) {
        f = a.resolveUrl(this.opts.uriResolver, g, f);
        let C = h.refs[f];
        if (C) {
            return C;
        }
        let b = P.call(this, h, f);
        if (b === undefined) {
            let schema = h.localRefs?.[f];
            let { schemaId } = this.opts;
            if (schema) {
                b = new l({
                    schema,
                    schemaId,
                    root: h,
                    baseId: g
                });
            }
        }
        if (b === undefined) {
            return;
        }
        return h.refs[f] = m.call(this, b);
    }
    e.resolveRef = d;
    function m(h) {
        if (a.inlineRef(h.schema, this.opts.inlineRefs)) {
            return h.schema;
        }
        if (h.validate) {
            return h;
        }
        return c.call(this, h);
    }
    function _(h) {
        for (let g of this._compilations){
            if (w(g, h)) {
                return g;
            }
        }
    }
    e.getCompilingSchema = _;
    function w(h, g) {
        return h.schema === g.schema && h.root === g.root && h.baseId === g.baseId;
    }
    function P(h, g) {
        let f;
        while(typeof (f = this.refs[g]) === "string"){
            g = f;
        }
        return f || this.schemas[g] || y.call(this, h, g);
    }
    function y(h, g) {
        let f = this.opts.uriResolver.parse(g);
        let R = a._getFullPath(this.opts.uriResolver, f);
        let C = a.getFullPath(this.opts.uriResolver, h.baseId, undefined);
        if (Object.keys(h.schema).length > 0 && R === C) {
            return p.call(this, f, h);
        }
        let b = a.normalizeId(R);
        let S = this.refs[b] || this.schemas[b];
        if (typeof S === "string") {
            let k = y.call(this, h, S);
            if (typeof k?.schema !== "object") {
                return;
            }
            return p.call(this, f, k);
        }
        if (typeof S?.schema !== "object") {
            return;
        }
        if (!S.validate) {
            c.call(this, S);
        }
        if (b === a.normalizeId(g)) {
            let { schema } = S;
            let { schemaId } = this.opts;
            let K = schema[schemaId];
            if (K) {
                C = a.resolveUrl(this.opts.uriResolver, C, K);
            }
            return new l({
                schema,
                schemaId,
                root: h,
                baseId: C
            });
        }
        return p.call(this, f, S);
    }
    e.resolveSchema = y;
    let v = new Set([
        "properties",
        "patternProperties",
        "enum",
        "dependencies",
        "definitions"
    ]);
    function p(h, { baseId, schema, root }) {
        if (h.fragment?.[0] !== "/") {
            return;
        }
        for (let k of h.fragment.slice(1).split("/")){
            if (typeof schema === "boolean") {
                return;
            }
            let L = schema[n.unescapeFragment(k)];
            if (L === undefined) {
                return;
            }
            schema = L;
            let K = typeof schema === "object" && schema[this.opts.schemaId];
            if (!v.has(k) && K) {
                baseId = a.resolveUrl(this.opts.uriResolver, baseId, K);
            }
        }
        let b;
        if (typeof schema !== "boolean" && schema.$ref && !n.schemaHasRulesButRef(schema, this.RULES)) {
            let k = a.resolveUrl(this.opts.uriResolver, baseId, schema.$ref);
            b = y.call(this, root, k);
        }
        let { schemaId } = this.opts;
        b = b || new l({
            schema,
            schemaId,
            root,
            baseId
        });
        if (b.schema !== b.root.schema) {
            return b;
        }
    }
    return e;
}
