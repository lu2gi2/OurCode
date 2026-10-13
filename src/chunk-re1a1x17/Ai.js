import { Oi } from "./Oi.js";
import { Ru } from "./Ru.js";
import { So } from "./So.js";
import { _o } from "./_o.js";
import { as } from "./as.js";
import { go } from "./go.js";
import { ne } from "./ne.js";
import { os } from "./os.js";
import { po } from "./po.js";
import { te } from "./te.js";
import { yu } from "./yu.js";
let __wakaru_Ai_cache;
export function Ai() {
    if (__wakaru_Ai_cache) {
        return __wakaru_Ai_cache;
    }
    const e = {};
    __wakaru_Ai_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = undefined;
    const t = as();
    Object.defineProperty(e, "KeywordCxt", {
        enumerable: true,
        get: function() {
            return t.KeywordCxt;
        }
    });
    const r = te();
    Object.defineProperty(e, "_", {
        enumerable: true,
        get: function() {
            return r._;
        }
    });
    Object.defineProperty(e, "str", {
        enumerable: true,
        get: function() {
            return r.str;
        }
    });
    Object.defineProperty(e, "stringify", {
        enumerable: true,
        get: function() {
            return r.stringify;
        }
    });
    Object.defineProperty(e, "nil", {
        enumerable: true,
        get: function() {
            return r.nil;
        }
    });
    Object.defineProperty(e, "Name", {
        enumerable: true,
        get: function() {
            return r.Name;
        }
    });
    Object.defineProperty(e, "CodeGen", {
        enumerable: true,
        get: function() {
            return r.CodeGen;
        }
    });
    let s = go();
    let a = os();
    let n = Oi();
    let i = _o();
    let l = te();
    let c = So();
    let d = po();
    let m = ne();
    let _ = yu();
    let w = Ru();
    let P = (O, D)=>new RegExp(O, D);
    P.code = "new RegExp";
    let y = [
        "removeAdditional",
        "useDefaults",
        "coerceTypes"
    ];
    let prefixes = new Set([
        "validate",
        "serialize",
        "parse",
        "wrapper",
        "root",
        "schema",
        "keyword",
        "pattern",
        "formats",
        "validate$data",
        "func",
        "obj",
        "Error"
    ]);
    let p = {
        errorDataPath: "",
        format: "`validateFormats: false` can be used instead.",
        nullable: '"nullable" keyword is supported by default.',
        jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
        extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
        missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
        processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
        sourceCode: "Use option `code: {source: true}`",
        strictDefaults: "It is default now, see option `strict`.",
        strictKeywords: "It is default now, see option `strict`.",
        uniqueItems: '"uniqueItems" keyword is always validated.',
        unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
        cache: "Map is used as cache, schema object as key.",
        serialize: "Map is used as cache, schema object as key.",
        ajvErrors: "It is default now."
    };
    let h = {
        ignoreKeywordsWithRef: "",
        jsPropertySyntax: "",
        unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    };
    let g = 200;
    function f(O) {
        let O_strict = O.strict;
        let Ve = O.code?.optimize;
        let optimize = Ve === true || Ve === undefined ? 1 : Ve || 0;
        let regExp = O.code?.regExp ?? P;
        let uriResolver = O.uriResolver ?? w.default;
        return {
            strictSchema: O.strictSchema ?? O_strict ?? true,
            strictNumbers: O.strictNumbers ?? O_strict ?? true,
            strictTypes: O.strictTypes ?? O_strict ?? "log",
            strictTuples: O.strictTuples ?? O_strict ?? "log",
            strictRequired: O.strictRequired ?? O_strict ?? false,
            code: O.code ? {
                ...O.code,
                optimize,
                regExp
            } : {
                optimize,
                regExp
            },
            loopRequired: O.loopRequired ?? g,
            loopEnum: O.loopEnum ?? g,
            meta: O.meta ?? true,
            messages: O.messages ?? true,
            inlineRefs: O.inlineRefs ?? true,
            schemaId: O.schemaId ?? "$id",
            addUsedSchema: O.addUsedSchema ?? true,
            validateSchema: O.validateSchema ?? true,
            validateFormats: O.validateFormats ?? true,
            unicodeRegExp: O.unicodeRegExp ?? true,
            int32range: O.int32range ?? true,
            uriResolver
        };
    }
    class R {
        constructor(O = {}){
            this.schemas = {};
            this.refs = {};
            this.formats = {};
            this._compilations = new Set;
            this._loading = {};
            this._cache = new Map;
            O = this.opts = {
                ...O,
                ...f(O)
            };
            let { es5, lines } = this.opts.code;
            this.scope = new l.ValueScope({
                scope: {},
                prefixes,
                es5,
                lines
            });
            this.logger = F(O.logger);
            let z = O.validateFormats;
            O.validateFormats = false;
            this.RULES = n.getRules();
            C.call(this, p, O, "NOT SUPPORTED");
            C.call(this, h, O, "DEPRECATED", "warn");
            this._metaOpts = K.call(this);
            if (O.formats) {
                k.call(this);
            }
            this._addVocabularies();
            this._addDefaultMetaSchema();
            if (O.keywords) {
                L.call(this, O.keywords);
            }
            if (typeof O.meta === "object") {
                this.addMetaSchema(O.meta);
            }
            S.call(this);
            O.validateFormats = z;
        }
        _addVocabularies() {
            this.addKeyword("$async");
        }
        _addDefaultMetaSchema() {
            let { $data, meta, schemaId } = this.opts;
            let z = _;
            if (schemaId === "id") {
                z = {
                    ..._
                };
                z.id = z.$id;
                delete z.$id;
            }
            if (meta && $data) {
                this.addMetaSchema(z, z[schemaId], false);
            }
        }
        defaultMeta() {
            let { meta, schemaId } = this.opts;
            return this.opts.defaultMeta = typeof meta === "object" ? meta[schemaId] || meta : undefined;
        }
        validate(O, D) {
            let H;
            if (typeof O === "string") {
                H = this.getSchema(O);
                if (!H) {
                    throw Error(`no schema with key or ref "${O}"`);
                }
            } else {
                H = this.compile(O);
            }
            let z = H(D);
            if (!("$async" in H)) {
                this.errors = H.errors;
            }
            return z;
        }
        compile(O, D) {
            let H = this._addSchema(O, D);
            return H.validate || this._compileSchemaEnv(H);
        }
        compileAsync(O, D) {
            if (typeof this.opts.loadSchema !== "function") {
                throw Error("options.loadSchema should be a function");
            }
            let { loadSchema } = this.opts;
            return z.call(this, O, D);
            async function z(Q, ce) {
                await I.call(this, Q.$schema);
                let Pe = this._addSchema(Q, ce);
                return Pe.validate || j.call(this, Pe);
            }
            async function I(Q) {
                if (Q && !this.getSchema(Q)) {
                    await z.call(this, {
                        $ref: Q
                    }, true);
                }
            }
            async function j(Q) {
                try {
                    return this._compileSchemaEnv(Q);
                } catch (error) {
                    if (!(error instanceof a.default)) {
                        throw error;
                    }
                    G.call(this, error);
                    await Y.call(this, error.missingSchema);
                    return j.call(this, Q);
                }
            }
            function G({ missingSchema, missingRef }) {
                if (this.refs[missingSchema]) {
                    throw Error(`AnySchema ${missingSchema} is loaded but ${missingRef} cannot be resolved`);
                }
            }
            async function Y(Q) {
                let ce = await re.call(this, Q);
                if (!this.refs[Q]) {
                    await I.call(this, ce.$schema);
                }
                if (!this.refs[Q]) {
                    this.addSchema(ce, Q, D);
                }
            }
            async function re(Q) {
                let ce = this._loading[Q];
                if (ce) {
                    return ce;
                }
                try {
                    return await (this._loading[Q] = loadSchema(Q));
                } finally{
                    delete this._loading[Q];
                }
            }
        }
        addSchema(O, D, H, z = this.opts.validateSchema) {
            if (Array.isArray(O)) {
                for (let j of O){
                    this.addSchema(j, undefined, H, z);
                }
                return this;
            }
            let I;
            if (typeof O === "object") {
                let { schemaId } = this.opts;
                I = O[schemaId];
                if (I !== undefined && typeof I !== "string") {
                    throw Error(`schema ${schemaId} must be string`);
                }
            }
            D = c.normalizeId(D || I);
            this._checkUnique(D);
            this.schemas[D] = this._addSchema(O, H, D, z, true);
            return this;
        }
        addMetaSchema(O, D, H = this.opts.validateSchema) {
            this.addSchema(O, D, true, H);
            return this;
        }
        validateSchema(O, D) {
            if (typeof O === "boolean") {
                return true;
            }
            let H;
            H = O.$schema;
            if (H !== undefined && typeof H !== "string") {
                throw Error("$schema must be a string");
            }
            H = H || this.opts.defaultMeta || this.defaultMeta();
            if (!H) {
                this.logger.warn("meta-schema not available");
                this.errors = null;
                return true;
            }
            let z = this.validate(H, O);
            if (!z && D) {
                let I = `schema is invalid: ${this.errorsText()}`;
                if (this.opts.validateSchema === "log") {
                    this.logger.error(I);
                } else {
                    throw Error(I);
                }
            }
            return z;
        }
        getSchema(O) {
            let D;
            while(typeof (D = b.call(this, O)) === "string"){
                O = D;
            }
            if (D === undefined) {
                let { schemaId } = this.opts;
                let z = new i.SchemaEnv({
                    schema: {},
                    schemaId
                });
                D = i.resolveSchema.call(this, z, O);
                if (!D) {
                    return;
                }
                this.refs[O] = D;
            }
            return D.validate || this._compileSchemaEnv(D);
        }
        removeSchema(O) {
            if (O instanceof RegExp) {
                this._removeAllSchemas(this.schemas, O);
                this._removeAllSchemas(this.refs, O);
                return this;
            }
            switch(typeof O){
                case "undefined":
                    this._removeAllSchemas(this.schemas);
                    this._removeAllSchemas(this.refs);
                    this._cache.clear();
                    return this;
                case "string":
                    {
                        let D = b.call(this, O);
                        if (typeof D === "object") {
                            this._cache.delete(D.schema);
                        }
                        delete this.schemas[O];
                        delete this.refs[O];
                        return this;
                    }
                case "object":
                    {
                        let D = O;
                        this._cache.delete(D);
                        let H = O[this.opts.schemaId];
                        if (H) {
                            H = c.normalizeId(H);
                            delete this.schemas[H];
                            delete this.refs[H];
                        }
                        return this;
                    }
                default:
                    throw Error("ajv.removeSchema: invalid parameter");
            }
        }
        addVocabulary(O) {
            for (let D of O){
                this.addKeyword(D);
            }
            return this;
        }
        addKeyword(O, D) {
            let H;
            if (typeof O === "string") {
                H = O;
                if (typeof D === "object") {
                    this.logger.warn("these parameters are deprecated, see docs for addKeyword");
                    D.keyword = H;
                }
            } else if (typeof O === "object" && D === undefined) {
                D = O;
                H = D.keyword;
                if (Array.isArray(H) && !H.length) {
                    throw Error("addKeywords: keyword must be string or non-empty array");
                }
            } else {
                throw Error("invalid addKeywords parameters");
            }
            B.call(this, H, D);
            if (!D) {
                m.eachItem(H, (I)=>se.call(this, I));
                return this;
            }
            ie.call(this, D);
            let z = {
                ...D,
                type: d.getJSONTypes(D.type),
                schemaType: d.getJSONTypes(D.schemaType)
            };
            m.eachItem(H, z.type.length === 0 ? (I)=>se.call(this, I, z) : (I)=>z.type.forEach((j)=>se.call(this, I, z, j)));
            return this;
        }
        getKeyword(O) {
            let D = this.RULES.all[O];
            if (typeof D === "object") {
                return D.definition;
            }
            return !!D;
        }
        removeKeyword(O) {
            let { RULES } = this;
            delete RULES.keywords[O];
            delete RULES.all[O];
            for (let H of RULES.rules){
                let z = H.rules.findIndex((I)=>I.keyword === O);
                if (z >= 0) {
                    H.rules.splice(z, 1);
                }
            }
            return this;
        }
        addFormat(O, D) {
            if (typeof D === "string") {
                D = new RegExp(D);
            }
            this.formats[O] = D;
            return this;
        }
        errorsText(O = this.errors, { separator = ", ", dataVar = "data" } = {}) {
            if (!O || O.length === 0) {
                return "No errors";
            }
            return O.map((z)=>`${dataVar}${z.instancePath} ${z.message}`).reduce((acc, item)=>acc + separator + item);
        }
        $dataMetaSchema(O, D) {
            let all = this.RULES.all;
            O = JSON.parse(JSON.stringify(O));
            for (let z of D){
                let I = z.split("/").slice(1);
                let j = O;
                for (let G of I){
                    j = j[G];
                }
                for(let G in all){
                    let Y = all[G];
                    if (typeof Y !== "object") {
                        continue;
                    }
                    let { $data } = Y.definition;
                    let Q = j[G];
                    if ($data && Q) {
                        j[G] = ae(Q);
                    }
                }
            }
            return O;
        }
        _removeAllSchemas(O, D) {
            for(let H in O){
                let z = O[H];
                if (!D || D.test(H)) {
                    if (typeof z === "string") {
                        delete O[H];
                    } else if (z && !z.meta) {
                        this._cache.delete(z.schema);
                        delete O[H];
                    }
                }
            }
        }
        _addSchema(schema, meta, baseId, z = this.opts.validateSchema, I = this.opts.addUsedSchema) {
            let j;
            let { schemaId } = this.opts;
            if (typeof schema === "object") {
                j = schema[schemaId];
            } else if (this.opts.jtd) {
                throw Error("schema must be object");
            } else if (typeof schema !== "boolean") {
                throw Error("schema must be object or boolean");
            }
            let Y = this._cache.get(schema);
            if (Y !== undefined) {
                return Y;
            }
            baseId = c.normalizeId(j || baseId);
            let localRefs = c.getSchemaRefs.call(this, schema, baseId);
            Y = new i.SchemaEnv({
                schema,
                schemaId,
                meta,
                baseId,
                localRefs
            });
            this._cache.set(Y.schema, Y);
            if (I && !baseId.startsWith("#")) {
                if (baseId) {
                    this._checkUnique(baseId);
                }
                this.refs[baseId] = Y;
            }
            if (z) {
                this.validateSchema(schema, true);
            }
            return Y;
        }
        _checkUnique(O) {
            if (this.schemas[O] || this.refs[O]) {
                throw Error(`schema with key or id "${O}" already exists`);
            }
        }
        _compileSchemaEnv(O) {
            if (O.meta) {
                this._compileMetaSchema(O);
            } else {
                i.compileSchema.call(this, O);
            }
            if (!O.validate) {
                throw Error("ajv implementation error");
            }
            return O.validate;
        }
        _compileMetaSchema(O) {
            let opts = this.opts;
            this.opts = this._metaOpts;
            try {
                i.compileSchema.call(this, O);
            } finally{
                this.opts = opts;
            }
        }
    }
    R.ValidationError = s.default;
    R.MissingRefError = a.default;
    e.default = R;
    function C(O, D, H, z = "error") {
        for(let I in O){
            let j = I;
            if (j in D) {
                this.logger[z](`${H}: option ${I}. ${O[j]}`);
            }
        }
    }
    function b(O) {
        O = c.normalizeId(O);
        return this.schemas[O] || this.refs[O];
    }
    function S() {
        let schemas = this.opts.schemas;
        if (!schemas) {
            return;
        }
        if (Array.isArray(schemas)) {
            this.addSchema(schemas);
        } else {
            for(let D in schemas){
                this.addSchema(schemas[D], D);
            }
        }
    }
    function k() {
        for(let O in this.opts.formats){
            let D = this.opts.formats[O];
            if (D) {
                this.addFormat(O, D);
            }
        }
    }
    function L(O) {
        if (Array.isArray(O)) {
            this.addVocabulary(O);
            return;
        }
        this.logger.warn("keywords option as map is deprecated, pass array");
        for(let D in O){
            let H = O[D];
            if (!H.keyword) {
                H.keyword = D;
            }
            this.addKeyword(H);
        }
    }
    function K() {
        let O = {
            ...this.opts
        };
        for (let D of y){
            delete O[D];
        }
        return O;
    }
    let N = {
        log () {},
        warn () {},
        error () {}
    };
    function F(logger) {
        if (logger === false) {
            return N;
        }
        if (logger === undefined) {
            return console;
        }
        if (logger.log && logger.warn && logger.error) {
            return logger;
        }
        throw Error("logger must implement log, warn and error methods");
    }
    let W = /^[a-z_$][a-z0-9_$:-]*$/i;
    function B(O, D) {
        let { RULES } = this;
        m.eachItem(O, (z)=>{
            if (RULES.keywords[z]) {
                throw Error(`Keyword ${z} is already defined`);
            }
            if (!W.test(z)) {
                throw Error(`Keyword ${z} has invalid name`);
            }
        });
        if (!D) {
            return;
        }
        if (D.$data && !("code" in D || "validate" in D)) {
            throw Error('$data keyword must have "code" or "validate" function');
        }
    }
    function se(keyword, D, H) {
        let I = D?.post;
        if (H && I) {
            throw Error('keyword with "post" flag cannot have "type"');
        }
        let { RULES } = this;
        let G = I ? RULES.post : RULES.rules.find(({ type })=>type === H);
        if (!G) {
            G = {
                type: H,
                rules: []
            };
            RULES.rules.push(G);
        }
        RULES.keywords[keyword] = true;
        if (!D) {
            return;
        }
        let Y = {
            keyword,
            definition: {
                ...D,
                type: d.getJSONTypes(D.type),
                schemaType: d.getJSONTypes(D.schemaType)
            }
        };
        if (D.before) {
            le.call(this, G, Y, D.before);
        } else {
            G.rules.push(Y);
        }
        RULES.all[keyword] = Y;
        D.implements?.forEach((re)=>this.addKeyword(re));
    }
    function le(O, D, H) {
        let z = O.rules.findIndex((I)=>I.keyword === H);
        if (z >= 0) {
            O.rules.splice(z, 0, D);
        } else {
            O.rules.push(D);
            this.logger.warn(`rule ${H} is not defined`);
        }
    }
    function ie(O) {
        let { metaSchema } = O;
        if (metaSchema === undefined) {
            return;
        }
        if (O.$data && this.opts.$data) {
            metaSchema = ae(metaSchema);
        }
        O.validateSchema = this.compile(metaSchema, true);
    }
    let Se = {
        $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function ae(O) {
        return {
            anyOf: [
                O,
                Se
            ]
        };
    }
    return e;
}
