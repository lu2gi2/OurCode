import { Ae } from "./Ae.js";
import { Ni } from "./Ni.js";
import { So } from "./So.js";
import { Su } from "./Su.js";
import { fo } from "./fo.js";
import { fu } from "./fu.js";
import { gu } from "./gu.js";
import { ne } from "./ne.js";
import { po } from "./po.js";
import { pu } from "./pu.js";
import { te } from "./te.js";
let __wakaru_as_cache;
export function as() {
    if (__wakaru_as_cache) {
        return __wakaru_as_cache;
    }
    const e = {};
    __wakaru_as_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.getData = e.KeywordCxt = e.validateFunctionCode = undefined;
    let t = pu();
    let r = po();
    let s = Ni();
    let a = po();
    let n = fu();
    let i = Su();
    let l = gu();
    let c = te();
    let d = Ae();
    let m = So();
    let _ = ne();
    let w = fo();
    function P(q) {
        if (b(q)) {
            k(q);
            if (C(q)) {
                h(q);
                return;
            }
        }
        y(q, ()=>t.topBoolOrEmptySchema(q));
    }
    e.validateFunctionCode = P;
    function y({ gen, validateName, schema, schemaEnv, opts }, ee) {
        if (opts.code.es5) {
            gen.func(validateName, c._`${d.default.data}, ${d.default.valCxt}`, schemaEnv.$async, ()=>{
                gen.code(c._`"use strict"; ${f(schema, opts)}`);
                p(gen, opts);
                gen.code(ee);
            });
        } else {
            gen.func(validateName, c._`${d.default.data}, ${v(opts)}`, schemaEnv.$async, ()=>gen.code(f(schema, opts)).code(ee));
        }
    }
    function v(opts) {
        return c._`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${opts.dynamicRef ? c._`, ${d.default.dynamicAnchors}={}` : c.nil}}={}`;
    }
    function p(gen, opts) {
        gen.if(d.default.valCxt, ()=>{
            gen.var(d.default.instancePath, c._`${d.default.valCxt}.${d.default.instancePath}`);
            gen.var(d.default.parentData, c._`${d.default.valCxt}.${d.default.parentData}`);
            gen.var(d.default.parentDataProperty, c._`${d.default.valCxt}.${d.default.parentDataProperty}`);
            gen.var(d.default.rootData, c._`${d.default.valCxt}.${d.default.rootData}`);
            if (opts.dynamicRef) {
                gen.var(d.default.dynamicAnchors, c._`${d.default.valCxt}.${d.default.dynamicAnchors}`);
            }
        }, ()=>{
            gen.var(d.default.instancePath, c._`""`);
            gen.var(d.default.parentData, c._`undefined`);
            gen.var(d.default.parentDataProperty, c._`undefined`);
            gen.var(d.default.rootData, d.default.data);
            if (opts.dynamicRef) {
                gen.var(d.default.dynamicAnchors, c._`{}`);
            }
        });
    }
    function h(q) {
        let { schema, opts, gen } = q;
        y(q, ()=>{
            if (opts.$comment && schema.$comment) {
                B(q);
            }
            N(q);
            gen.let(d.default.vErrors, null);
            gen.let(d.default.errors, 0);
            if (opts.unevaluated) {
                g(q);
            }
            L(q);
            se(q);
        });
    }
    function g(q) {
        let { gen, validateName } = q;
        q.evaluated = gen.const("evaluated", c._`${validateName}.evaluated`);
        gen.if(c._`${q.evaluated}.dynamicProps`, ()=>gen.assign(c._`${q.evaluated}.props`, c._`undefined`));
        gen.if(c._`${q.evaluated}.dynamicItems`, ()=>gen.assign(c._`${q.evaluated}.items`, c._`undefined`));
    }
    function f(schema, opts) {
        let x = typeof schema === "object" && schema[opts.schemaId];
        if (x && (opts.code.source || opts.code.process)) {
            return c._`/*# sourceURL=${x} */`;
        }
        return c.nil;
    }
    function R(q, V) {
        if (b(q)) {
            k(q);
            if (C(q)) {
                S(q, V);
                return;
            }
        }
        t.boolOrEmptySchema(q, V);
    }
    function C({ schema, self }) {
        if (typeof schema === "boolean") {
            return !schema;
        }
        for(let x in schema){
            if (self.RULES.all[x]) {
                return true;
            }
        }
        return false;
    }
    function b(q) {
        return typeof q.schema !== "boolean";
    }
    function S(q, V) {
        let { schema, gen, opts } = q;
        if (opts.$comment && schema.$comment) {
            B(q);
        }
        F(q);
        W(q);
        let ee = gen.const("_errs", d.default.errors);
        L(q, ee);
        gen.var(V, c._`${ee} === ${d.default.errors}`);
    }
    function k(q) {
        _.checkUnknownRules(q);
        K(q);
    }
    function L(q, V) {
        if (q.opts.jtd) {
            return ie(q, [], false, V);
        }
        let x = r.getSchemaTypes(q.schema);
        ie(q, x, !r.coerceAndCheckDataType(q, x), V);
    }
    function K({ schema, errSchemaPath, opts, self }) {
        if (schema.$ref && opts.ignoreKeywordsWithRef && _.schemaHasRulesButRef(schema, self.RULES)) {
            self.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath}"`);
        }
    }
    function N(q) {
        let { schema, opts } = q;
        if (schema.default !== undefined && opts.useDefaults && opts.strictSchema) {
            _.checkStrictMode(q, "default is ignored in the schema root");
        }
    }
    function F(q) {
        let V = q.schema[q.opts.schemaId];
        if (V) {
            q.baseId = m.resolveUrl(q.opts.uriResolver, q.baseId, V);
        }
    }
    function W(q) {
        if (q.schema.$async && !q.schemaEnv.$async) {
            throw Error("async schema in sync schema");
        }
    }
    function B({ gen, schemaEnv, schema, errSchemaPath, opts }) {
        let schema_$comment = schema.$comment;
        if (opts.$comment === true) {
            gen.code(c._`${d.default.self}.logger.log(${schema_$comment})`);
        } else if (typeof opts.$comment === "function") {
            let pe = c.str`${errSchemaPath}/$comment`;
            let _e = gen.scopeValue("root", {
                ref: schemaEnv.root
            });
            gen.code(c._`${d.default.self}.opts.$comment(${schema_$comment}, ${pe}, ${_e}.schema)`);
        }
    }
    function se(q) {
        let { gen, schemaEnv, validateName, ValidationError, opts } = q;
        if (schemaEnv.$async) {
            gen.if(c._`${d.default.errors} === 0`, ()=>gen.return(d.default.data), ()=>gen.throw(c._`new ${ValidationError}(${d.default.vErrors})`));
        } else {
            gen.assign(c._`${validateName}.errors`, d.default.vErrors);
            if (opts.unevaluated) {
                le(q);
            }
            gen.return(c._`${d.default.errors} === 0`);
        }
    }
    function le({ gen, evaluated, props, items }) {
        if (props instanceof c.Name) {
            gen.assign(c._`${evaluated}.props`, props);
        }
        if (items instanceof c.Name) {
            gen.assign(c._`${evaluated}.items`, items);
        }
    }
    function ie(q, V, x, X) {
        let { gen, schema, data, allErrors, opts, self } = q;
        let { RULES } = self;
        if (schema.$ref && (opts.ignoreKeywordsWithRef || !_.schemaHasRulesButRef(schema, RULES))) {
            gen.block(()=>re(q, "$ref", RULES.all.$ref.definition));
            return;
        }
        if (!opts.jtd) {
            ae(q, V);
        }
        gen.block(()=>{
            for (let ye of RULES.rules){
                Oe(ye);
            }
            Oe(RULES.post);
        });
        function Oe(ye) {
            if (!s.shouldUseGroup(schema, ye)) {
                return;
            }
            if (ye.type) {
                gen.if(a.checkDataType(ye.type, data, opts.strictNumbers));
                Se(q, ye);
                if (V.length === 1 && V[0] === ye.type && x) {
                    gen.else();
                    a.reportTypeError(q);
                }
                gen.endIf();
            } else {
                Se(q, ye);
            }
            if (!allErrors) {
                gen.if(c._`${d.default.errors} === ${X || 0}`);
            }
        }
    }
    function Se(q, V) {
        let { gen, schema, opts: { useDefaults } } = q;
        if (useDefaults) {
            n.assignDefaults(q, V.type);
        }
        gen.block(()=>{
            for (let ee of V.rules){
                if (s.shouldUseRule(schema, ee)) {
                    re(q, ee.keyword, ee.definition, V.type);
                }
            }
        });
    }
    function ae(q, V) {
        if (q.schemaEnv.meta || !q.opts.strictTypes) {
            return;
        }
        O(q, V);
        if (!q.opts.allowUnionTypes) {
            D(q, V);
        }
        H(q, q.dataTypes);
    }
    function O(q, V) {
        if (!V.length) {
            return;
        }
        if (!q.dataTypes.length) {
            q.dataTypes = V;
            return;
        }
        V.forEach((x)=>{
            if (!I(q.dataTypes, x)) {
                G(q, `type "${x}" not allowed by context "${q.dataTypes.join(",")}"`);
            }
        });
        j(q, V);
    }
    function D(q, V) {
        if (V.length > 1 && !(V.length === 2 && V.includes("null"))) {
            G(q, "use allowUnionTypes to allow union type keyword");
        }
    }
    function H(q, dataTypes) {
        let all = q.self.RULES.all;
        for(let X in all){
            let Z = all[X];
            if (typeof Z === "object" && s.shouldUseRule(q.schema, Z)) {
                let { type } = Z.definition;
                if (type.length && !type.some((pe)=>z(dataTypes, pe))) {
                    G(q, `missing type "${type.join(",")}" for keyword "${X}"`);
                }
            }
        }
    }
    function z(dataTypes, V) {
        return dataTypes.includes(V) || V === "number" && dataTypes.includes("integer");
    }
    function I(q, V) {
        return q.includes(V) || V === "integer" && q.includes("number");
    }
    function j(q, V) {
        let x = [];
        for (let X of q.dataTypes){
            if (I(V, X)) {
                x.push(X);
            } else if (V.includes("integer") && X === "number") {
                x.push("integer");
            }
        }
        q.dataTypes = x;
    }
    function G(q, V) {
        let x = q.schemaEnv.baseId + q.errSchemaPath;
        V += ` at "${x}" (strictTypes)`;
        _.checkStrictMode(q, V, q.opts.strictTypes);
    }
    var Y = class {
        constructor(q, V, x){
            i.validateKeywordUsage(q, V, x);
            this.gen = q.gen;
            this.allErrors = q.allErrors;
            this.keyword = x;
            this.data = q.data;
            this.schema = q.schema[x];
            this.$data = V.$data && q.opts.$data && this.schema && this.schema.$data;
            this.schemaValue = _.schemaRefOrVal(q, this.schema, x, this.$data);
            this.schemaType = V.schemaType;
            this.parentSchema = q.schema;
            this.params = {};
            this.it = q;
            this.def = V;
            if (this.$data) {
                this.schemaCode = q.gen.const("vSchema", Pe(this.$data, q));
            } else {
                this.schemaCode = this.schemaValue;
                if (!i.validSchemaType(this.schema, V.schemaType, V.allowUndefined)) {
                    throw Error(`${x} value must be ${JSON.stringify(V.schemaType)}`);
                }
            }
            if ("code" in V ? V.trackErrors : V.errors !== false) {
                this.errsCount = q.gen.const("_errs", d.default.errors);
            }
        }
        result(q, V, x) {
            this.failResult(c.not(q), V, x);
        }
        failResult(q, V, x) {
            this.gen.if(q);
            if (x) {
                x();
            } else {
                this.error();
            }
            if (V) {
                this.gen.else();
                V();
                if (this.allErrors) {
                    this.gen.endIf();
                }
            } else if (this.allErrors) {
                this.gen.endIf();
            } else {
                this.gen.else();
            }
        }
        pass(q, V) {
            this.failResult(c.not(q), undefined, V);
        }
        fail(q) {
            if (q === undefined) {
                this.error();
                if (!this.allErrors) {
                    this.gen.if(false);
                }
                return;
            }
            this.gen.if(q);
            this.error();
            if (this.allErrors) {
                this.gen.endIf();
            } else {
                this.gen.else();
            }
        }
        fail$data(q) {
            if (!this.$data) {
                return this.fail(q);
            }
            let { schemaCode } = this;
            this.fail(c._`${schemaCode} !== undefined && (${c.or(this.invalid$data(), q)})`);
        }
        error(q, V, x) {
            if (V) {
                this.setParams(V);
                this._error(q, x);
                this.setParams({});
                return;
            }
            this._error(q, x);
        }
        _error(q, V) {
            (q ? w.reportExtraError : w.reportError)(this, this.def.error, V);
        }
        $dataError() {
            w.reportError(this, this.def.$dataError || w.keyword$DataError);
        }
        reset() {
            if (this.errsCount === undefined) {
                throw Error('add "trackErrors" to keyword definition');
            }
            w.resetErrorsCount(this.gen, this.errsCount);
        }
        ok(q) {
            if (!this.allErrors) {
                this.gen.if(q);
            }
        }
        setParams(q, V) {
            if (V) {
                Object.assign(this.params, q);
            } else {
                this.params = q;
            }
        }
        block$data(q, V, x = c.nil) {
            this.gen.block(()=>{
                this.check$data(q, x);
                V();
            });
        }
        check$data(q = c.nil, V = c.nil) {
            if (!this.$data) {
                return;
            }
            let { gen, schemaCode, schemaType, def } = this;
            gen.if(c.or(c._`${schemaCode} === undefined`, V));
            if (q !== c.nil) {
                gen.assign(q, true);
            }
            if (schemaType.length || def.validateSchema) {
                gen.elseIf(this.invalid$data());
                this.$dataError();
                if (q !== c.nil) {
                    gen.assign(q, false);
                }
            }
            gen.else();
        }
        invalid$data() {
            let { gen, schemaCode, schemaType, def, it } = this;
            return c.or(ee(), pe());
            function ee() {
                if (schemaType.length) {
                    if (!(schemaCode instanceof c.Name)) {
                        throw Error("ajv implementation error");
                    }
                    let _e = Array.isArray(schemaType) ? schemaType : [
                        schemaType
                    ];
                    return c._`${a.checkDataTypes(_e, schemaCode, it.opts.strictNumbers, a.DataType.Wrong)}`;
                }
                return c.nil;
            }
            function pe() {
                if (def.validateSchema) {
                    let _e = gen.scopeValue("validate$data", {
                        ref: def.validateSchema
                    });
                    return c._`!${_e}(${schemaCode})`;
                }
                return c.nil;
            }
        }
        subschema(q, V) {
            let x = l.getSubschema(this.it, q);
            l.extendSubschemaData(x, this.it, q);
            l.extendSubschemaMode(x, q);
            let X = {
                ...this.it,
                ...x,
                items: undefined,
                props: undefined
            };
            R(X, V);
            return X;
        }
        mergeEvaluated(q, V) {
            let { it, gen } = this;
            if (!it.opts.unevaluated) {
                return;
            }
            if (it.props !== true && q.props !== undefined) {
                it.props = _.mergeEvaluated.props(gen, q.props, it.props, V);
            }
            if (it.items !== true && q.items !== undefined) {
                it.items = _.mergeEvaluated.items(gen, q.items, it.items, V);
            }
        }
        mergeValidEvaluated(q, V) {
            let { it, gen } = this;
            if (it.opts.unevaluated && (it.props !== true || it.items !== true)) {
                gen.if(V, ()=>this.mergeEvaluated(q, c.Name));
                return true;
            }
        }
    };
    e.KeywordCxt = Y;
    function re(q, V, definition, X) {
        let Z = new Y(q, definition, V);
        if ("code" in definition) {
            definition.code(Z, X);
        } else if (Z.$data && definition.validate) {
            i.funcKeywordCode(Z, definition);
        } else if ("macro" in definition) {
            i.macroKeywordCode(Z, definition);
        } else if (definition.compile || definition.validate) {
            i.funcKeywordCode(Z, definition);
        }
    }
    let Q = /^\/(?:[^~]|~0|~1)*$/;
    let ce = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function Pe(q, { dataLevel, dataNames, dataPathArr }) {
        let Z;
        let ee;
        if (q === "") {
            return d.default.rootData;
        }
        if (q[0] === "/") {
            if (!Q.test(q)) {
                throw Error(`Invalid JSON-pointer: ${q}`);
            }
            Z = q;
            ee = d.default.rootData;
        } else {
            let ge = ce.exec(q);
            if (!ge) {
                throw Error(`Invalid JSON-pointer: ${q}`);
            }
            let de = +ge[1];
            Z = ge[2];
            if (Z === "#") {
                if (de >= dataLevel) {
                    throw Error(Re("property/index", de));
                }
                return dataPathArr[dataLevel - de];
            }
            if (de > dataLevel) {
                throw Error(Re("data", de));
            }
            ee = dataNames[dataLevel - de];
            if (!Z) {
                return ee;
            }
        }
        let pe = ee;
        let _e = Z.split("/");
        for (let ge of _e){
            if (ge) {
                ee = c._`${ee}${c.getProperty(_.unescapeJsonPointer(ge))}`;
                pe = c._`${pe} && ${ee}`;
            }
        }
        return pe;
        function Re(ge, de) {
            return `Cannot access ${ge} ${de} levels up, current level is ${dataLevel}`;
        }
    }
    e.getData = Pe;
    return e;
}
