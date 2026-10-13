import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { dn } from "/$bunfs/root/chunk-x0qpydt2.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I, ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import { CR, xxe } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Rh } from "/$bunfs/root/chunk-nj0630nv.js";
import { sl } from "/$bunfs/root/chunk-pp3y3t61.js";
import { cqe } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { FFe } from "/$bunfs/root/chunk-xb9cceab.js";
import { n_e } from "/$bunfs/root/chunk-7aeb6f08.js";
import { om, i_, r_e, x5t, kMn, P5t, TMn, cso, _fr, dso, uso, bfr, pso, fso, mso, gso } from "/$bunfs/root/chunk-d9ybdtka.js";
import { sr } from "/$bunfs/root/chunk-092xqjkn.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { C } from "/$bunfs/root/chunk-cj4xndke.js";
import { basename, isAbsolute } from "path";
const W = C(function(ee) {
    Object.defineProperty(ee, "__esModule", {
        value: true
    });
    ee.dynamicAnchor = undefined;
    const q = om();
    const Xe = r_e();
    const x = TMn();
    const J = _fr();
    const Ge = {
        keyword: "$dynamicAnchor",
        schemaType: "string",
        code: (e)=>Q(e, e.schema)
    };
    function Q(e, r) {
        let { gen, it } = e;
        it.schemaEnv.root.dynamicAnchors[r] = true;
        let s = q._`${Xe.default.dynamicAnchors}${q.getProperty(r)}`;
        let i = it.errSchemaPath === "#" ? it.validateName : Ye(e);
        gen.if(q._`!${s}`, ()=>gen.assign(s, i));
    }
    ee.dynamicAnchor = Q;
    function Ye(e) {
        let { schemaEnv, schema, self } = e.it;
        let { root, baseId, localRefs, meta } = schemaEnv.root;
        let { schemaId } = self.opts;
        let h = new x.SchemaEnv({
            schema,
            schemaId,
            root,
            baseId,
            localRefs,
            meta
        });
        x.compileSchema.call(self, h);
        return J.getValidate(e, h);
    }
    ee.default = Ge;
});
const L = C(function(ae) {
    Object.defineProperty(ae, "__esModule", {
        value: true
    });
    ae.dynamicRef = undefined;
    const k = om();
    const Be = r_e();
    const E = _fr();
    const Je = {
        keyword: "$dynamicRef",
        schemaType: "string",
        code: (e)=>re(e, e.schema)
    };
    function re(e, r) {
        let { gen, keyword, it } = e;
        if (r[0] !== "#") {
            throw Error(`"${keyword}" only supports hash fragment reference`);
        }
        let i = r.slice(1);
        if (it.allErrors) {
            m();
        } else {
            let c = gen.let("valid", false);
            m(c);
            e.ok(c);
        }
        function m(c) {
            if (it.schemaEnv.root.dynamicAnchors[i]) {
                let h = gen.let("_v", k._`${Be.default.dynamicAnchors}${k.getProperty(i)}`);
                gen.if(h, u(h, c), u(it.validateName, c));
            } else {
                u(it.validateName, c)();
            }
        }
        function u(c, h) {
            if (h) {
                return ()=>gen.block(()=>{
                        E.callRef(e, c);
                        gen.let(h, true);
                    });
            }
            return ()=>E.callRef(e, c);
        }
    }
    ae.dynamicRef = re;
    ae.default = Je;
});
const ue = C(function(ce) {
    Object.defineProperty(ce, "__esModule", {
        value: true
    });
    const se = W();
    const ie = i_();
    const et = {
        keyword: "$recursiveAnchor",
        schemaType: "boolean",
        code (e) {
            if (e.schema) {
                se.dynamicAnchor(e, "");
            } else {
                ie.checkStrictMode(e.it, "$recursiveAnchor: false is ignored");
            }
        }
    };
    ce.default = et;
});
const le = C(function(me) {
    Object.defineProperty(me, "__esModule", {
        value: true
    });
    const de = L();
    const rt = {
        keyword: "$recursiveRef",
        schemaType: "string",
        code: (e)=>de.dynamicRef(e, e.schema)
    };
    me.default = rt;
});
const pe = C(function(fe) {
    Object.defineProperty(fe, "__esModule", {
        value: true
    });
    const at = W();
    const ot = L();
    const st = ue();
    const it = le();
    const ct = [
        at.default,
        ot.default,
        st.default,
        it.default
    ];
    fe.default = ct;
});
const ye = C(function(he) {
    Object.defineProperty(he, "__esModule", {
        value: true
    });
    const N = bfr();
    const dt = {
        keyword: "dependentRequired",
        type: "object",
        schemaType: "object",
        error: N.error,
        code: (e)=>N.validatePropertyDeps(e)
    };
    he.default = dt;
});
const be = C(function($e) {
    Object.defineProperty($e, "__esModule", {
        value: true
    });
    const ge = bfr();
    const lt = {
        keyword: "dependentSchemas",
        type: "object",
        schemaType: "object",
        code: (e)=>ge.validateSchemaDeps(e)
    };
    $e.default = lt;
});
const je = C(function(_e) {
    Object.defineProperty(_e, "__esModule", {
        value: true
    });
    const ve = i_();
    const pt = {
        keyword: [
            "maxContains",
            "minContains"
        ],
        type: "array",
        schemaType: "number",
        code ({ keyword, parentSchema, it }) {
            if (parentSchema.contains === undefined) {
                ve.checkStrictMode(it, `"${keyword}" without "contains" is ignored`);
            }
        }
    };
    _e.default = pt;
});
const Pe = C(function(Ae) {
    Object.defineProperty(Ae, "__esModule", {
        value: true
    });
    const yt = ye();
    const gt = be();
    const $t = je();
    const bt = [
        yt.default,
        gt.default,
        $t.default
    ];
    Ae.default = bt;
});
const Se = C(function(Re) {
    Object.defineProperty(Re, "__esModule", {
        value: true
    });
    const g = om();
    const T = i_();
    const _t = r_e();
    const jt = {
        message: "must NOT have unevaluated properties",
        params: ({ params })=>g._`{unevaluatedProperty: ${params.unevaluatedProperty}}`
    };
    const At = {
        keyword: "unevaluatedProperties",
        type: "object",
        schemaType: [
            "boolean",
            "object"
        ],
        trackErrors: true,
        error: jt,
        code (e) {
            let { gen, schema, data, errsCount, it } = e;
            if (!errsCount) {
                throw Error("ajv implementation error");
            }
            let { allErrors, props } = it;
            if (props instanceof g.Name) {
                gen.if(g._`${props} !== true`, ()=>gen.forIn("key", data, (y)=>gen.if(h(props, y), ()=>c(y))));
            } else if (props !== true) {
                gen.forIn("key", data, (y)=>{
                    if (props === undefined) {
                        return c(y);
                    }
                    return gen.if(b(props, y), ()=>c(y));
                });
            }
            it.props = true;
            e.ok(g._`${errsCount} === ${_t.default.errors}`);
            function c(y) {
                if (schema === false) {
                    e.setParams({
                        unevaluatedProperty: y
                    });
                    e.error();
                    if (!allErrors) {
                        gen.break();
                    }
                    return;
                }
                if (!T.alwaysValidSchema(it, schema)) {
                    let P = gen.name("valid");
                    e.subschema({
                        keyword: "unevaluatedProperties",
                        dataProp: y,
                        dataPropType: T.Type.Str
                    }, P);
                    if (!allErrors) {
                        gen.if(g.not(P), ()=>gen.break());
                    }
                }
            }
            function h(props, P) {
                return g._`!${props} || !${props}[${P}]`;
            }
            function b(props, P) {
                let d = [];
                for(let p in props){
                    if (props[p] === true) {
                        d.push(g._`${P} !== ${p}`);
                    }
                }
                return g.and(...d);
            }
        }
    };
    Re.default = At;
});
const we = C(function(qe) {
    Object.defineProperty(qe, "__esModule", {
        value: true
    });
    const v = om();
    const F = i_();
    const Rt = {
        message: ({ params: { len } })=>v.str`must NOT have more than ${len} items`,
        params: ({ params: { len } })=>v._`{limit: ${len}}`
    };
    const St = {
        keyword: "unevaluatedItems",
        type: "array",
        schemaType: [
            "boolean",
            "object"
        ],
        error: Rt,
        code (e) {
            let { gen, schema, data, it } = e;
            let len = it.items || 0;
            if (len === true) {
                return;
            }
            let m = gen.const("len", v._`${data}.length`);
            if (schema === false) {
                e.setParams({
                    len
                });
                e.fail(v._`${m} > ${len}`);
            } else if (typeof schema === "object" && !F.alwaysValidSchema(it, schema)) {
                let c = gen.var("valid", v._`${m} <= ${len}`);
                gen.if(v.not(c), ()=>u(c, len));
                e.ok(c);
            }
            it.items = true;
            function u(c, len) {
                gen.forRange("i", len, m, (dataProp)=>{
                    e.subschema({
                        keyword: "unevaluatedItems",
                        dataProp,
                        dataPropType: F.Type.Num
                    }, c);
                    if (!it.allErrors) {
                        gen.if(v.not(c), ()=>gen.break());
                    }
                });
            }
        }
    };
    qe.default = St;
});
const Me = C(function(Oe) {
    Object.defineProperty(Oe, "__esModule", {
        value: true
    });
    const wt = Se();
    const Ot = we();
    const Mt = [
        wt.default,
        Ot.default
    ];
    Oe.default = Mt;
});
const Ce = C(function(xe) {
    Object.defineProperty(xe, "__esModule", {
        value: true
    });
    const Ct = dso();
    const kt = uso();
    const Et = pso();
    const It = pe();
    const Nt = Pe();
    const Ft = Me();
    const Dt = fso();
    const V = mso();
    const Vt = [
        It.default,
        Ct.default,
        kt.default,
        Et.default(true),
        Dt.default,
        V.metadataVocabulary,
        V.contentVocabulary,
        Nt.default,
        Ft.default
    ];
    xe.default = Vt;
});
const ke = C(function(Yr, Lt) {
    Lt.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/schema",
        $vocabulary: {
            "https://json-schema.org/draft/2020-12/vocab/core": true,
            "https://json-schema.org/draft/2020-12/vocab/applicator": true,
            "https://json-schema.org/draft/2020-12/vocab/unevaluated": true,
            "https://json-schema.org/draft/2020-12/vocab/validation": true,
            "https://json-schema.org/draft/2020-12/vocab/meta-data": true,
            "https://json-schema.org/draft/2020-12/vocab/format-annotation": true,
            "https://json-schema.org/draft/2020-12/vocab/content": true
        },
        $dynamicAnchor: "meta",
        title: "Core and Validation specifications meta-schema",
        allOf: [
            {
                $ref: "meta/core"
            },
            {
                $ref: "meta/applicator"
            },
            {
                $ref: "meta/unevaluated"
            },
            {
                $ref: "meta/validation"
            },
            {
                $ref: "meta/meta-data"
            },
            {
                $ref: "meta/format-annotation"
            },
            {
                $ref: "meta/content"
            }
        ],
        type: [
            "object",
            "boolean"
        ],
        $comment: "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",
        properties: {
            definitions: {
                $comment: '"definitions" has been replaced by "$defs".',
                type: "object",
                additionalProperties: {
                    $dynamicRef: "#meta"
                },
                deprecated: true,
                default: {}
            },
            dependencies: {
                $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.',
                type: "object",
                additionalProperties: {
                    anyOf: [
                        {
                            $dynamicRef: "#meta"
                        },
                        {
                            $ref: "meta/validation#/$defs/stringArray"
                        }
                    ]
                },
                deprecated: true,
                default: {}
            },
            $recursiveAnchor: {
                $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".',
                $ref: "meta/core#/$defs/anchorString",
                deprecated: true
            },
            $recursiveRef: {
                $comment: '"$recursiveRef" has been replaced by "$dynamicRef".',
                $ref: "meta/core#/$defs/uriReferenceString",
                deprecated: true
            }
        }
    };
});
const Ee = C(function(Zr, Ht) {
    Ht.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/applicator",
        $vocabulary: {
            "https://json-schema.org/draft/2020-12/vocab/applicator": true
        },
        $dynamicAnchor: "meta",
        title: "Applicator vocabulary meta-schema",
        type: [
            "object",
            "boolean"
        ],
        properties: {
            prefixItems: {
                $ref: "#/$defs/schemaArray"
            },
            items: {
                $dynamicRef: "#meta"
            },
            contains: {
                $dynamicRef: "#meta"
            },
            additionalProperties: {
                $dynamicRef: "#meta"
            },
            properties: {
                type: "object",
                additionalProperties: {
                    $dynamicRef: "#meta"
                },
                default: {}
            },
            patternProperties: {
                type: "object",
                additionalProperties: {
                    $dynamicRef: "#meta"
                },
                propertyNames: {
                    format: "regex"
                },
                default: {}
            },
            dependentSchemas: {
                type: "object",
                additionalProperties: {
                    $dynamicRef: "#meta"
                },
                default: {}
            },
            propertyNames: {
                $dynamicRef: "#meta"
            },
            if: {
                $dynamicRef: "#meta"
            },
            then: {
                $dynamicRef: "#meta"
            },
            else: {
                $dynamicRef: "#meta"
            },
            allOf: {
                $ref: "#/$defs/schemaArray"
            },
            anyOf: {
                $ref: "#/$defs/schemaArray"
            },
            oneOf: {
                $ref: "#/$defs/schemaArray"
            },
            not: {
                $dynamicRef: "#meta"
            }
        },
        $defs: {
            schemaArray: {
                type: "array",
                minItems: 1,
                items: {
                    $dynamicRef: "#meta"
                }
            }
        }
    };
});
const Ie = C(function(Br, Kt) {
    Kt.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/unevaluated",
        $vocabulary: {
            "https://json-schema.org/draft/2020-12/vocab/unevaluated": true
        },
        $dynamicAnchor: "meta",
        title: "Unevaluated applicator vocabulary meta-schema",
        type: [
            "object",
            "boolean"
        ],
        properties: {
            unevaluatedItems: {
                $dynamicRef: "#meta"
            },
            unevaluatedProperties: {
                $dynamicRef: "#meta"
            }
        }
    };
});
const Ne = C(function(Jr, Ut) {
    Ut.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/content",
        $vocabulary: {
            "https://json-schema.org/draft/2020-12/vocab/content": true
        },
        $dynamicAnchor: "meta",
        title: "Content vocabulary meta-schema",
        type: [
            "object",
            "boolean"
        ],
        properties: {
            contentEncoding: {
                type: "string"
            },
            contentMediaType: {
                type: "string"
            },
            contentSchema: {
                $dynamicRef: "#meta"
            }
        }
    };
});
const Te = C(function(Qr, zt) {
    zt.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/core",
        $vocabulary: {
            "https://json-schema.org/draft/2020-12/vocab/core": true
        },
        $dynamicAnchor: "meta",
        title: "Core vocabulary meta-schema",
        type: [
            "object",
            "boolean"
        ],
        properties: {
            $id: {
                $ref: "#/$defs/uriReferenceString",
                $comment: "Non-empty fragments not allowed.",
                pattern: "^[^#]*#?$"
            },
            $schema: {
                $ref: "#/$defs/uriString"
            },
            $ref: {
                $ref: "#/$defs/uriReferenceString"
            },
            $anchor: {
                $ref: "#/$defs/anchorString"
            },
            $dynamicRef: {
                $ref: "#/$defs/uriReferenceString"
            },
            $dynamicAnchor: {
                $ref: "#/$defs/anchorString"
            },
            $vocabulary: {
                type: "object",
                propertyNames: {
                    $ref: "#/$defs/uriString"
                },
                additionalProperties: {
                    type: "boolean"
                }
            },
            $comment: {
                type: "string"
            },
            $defs: {
                type: "object",
                additionalProperties: {
                    $dynamicRef: "#meta"
                }
            }
        },
        $defs: {
            anchorString: {
                type: "string",
                pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
            },
            uriString: {
                type: "string",
                format: "uri"
            },
            uriReferenceString: {
                type: "string",
                format: "uri-reference"
            }
        }
    };
});
const Fe = C(function(en, Xt) {
    Xt.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/format-annotation",
        $vocabulary: {
            "https://json-schema.org/draft/2020-12/vocab/format-annotation": true
        },
        $dynamicAnchor: "meta",
        title: "Format vocabulary meta-schema for annotation results",
        type: [
            "object",
            "boolean"
        ],
        properties: {
            format: {
                type: "string"
            }
        }
    };
});
const De = C(function(tn, Gt) {
    Gt.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/meta-data",
        $vocabulary: {
            "https://json-schema.org/draft/2020-12/vocab/meta-data": true
        },
        $dynamicAnchor: "meta",
        title: "Meta-data vocabulary meta-schema",
        type: [
            "object",
            "boolean"
        ],
        properties: {
            title: {
                type: "string"
            },
            description: {
                type: "string"
            },
            default: true,
            deprecated: {
                type: "boolean",
                default: false
            },
            readOnly: {
                type: "boolean",
                default: false
            },
            writeOnly: {
                type: "boolean",
                default: false
            },
            examples: {
                type: "array",
                items: true
            }
        }
    };
});
const Ve = C(function(rn, Yt) {
    Yt.exports = {
        $schema: "https://json-schema.org/draft/2020-12/schema",
        $id: "https://json-schema.org/draft/2020-12/meta/validation",
        $vocabulary: {
            "https://json-schema.org/draft/2020-12/vocab/validation": true
        },
        $dynamicAnchor: "meta",
        title: "Validation vocabulary meta-schema",
        type: [
            "object",
            "boolean"
        ],
        properties: {
            type: {
                anyOf: [
                    {
                        $ref: "#/$defs/simpleTypes"
                    },
                    {
                        type: "array",
                        items: {
                            $ref: "#/$defs/simpleTypes"
                        },
                        minItems: 1,
                        uniqueItems: true
                    }
                ]
            },
            const: true,
            enum: {
                type: "array",
                items: true
            },
            multipleOf: {
                type: "number",
                exclusiveMinimum: 0
            },
            maximum: {
                type: "number"
            },
            exclusiveMaximum: {
                type: "number"
            },
            minimum: {
                type: "number"
            },
            exclusiveMinimum: {
                type: "number"
            },
            maxLength: {
                $ref: "#/$defs/nonNegativeInteger"
            },
            minLength: {
                $ref: "#/$defs/nonNegativeIntegerDefault0"
            },
            pattern: {
                type: "string",
                format: "regex"
            },
            maxItems: {
                $ref: "#/$defs/nonNegativeInteger"
            },
            minItems: {
                $ref: "#/$defs/nonNegativeIntegerDefault0"
            },
            uniqueItems: {
                type: "boolean",
                default: false
            },
            maxContains: {
                $ref: "#/$defs/nonNegativeInteger"
            },
            minContains: {
                $ref: "#/$defs/nonNegativeInteger",
                default: 1
            },
            maxProperties: {
                $ref: "#/$defs/nonNegativeInteger"
            },
            minProperties: {
                $ref: "#/$defs/nonNegativeIntegerDefault0"
            },
            required: {
                $ref: "#/$defs/stringArray"
            },
            dependentRequired: {
                type: "object",
                additionalProperties: {
                    $ref: "#/$defs/stringArray"
                }
            }
        },
        $defs: {
            nonNegativeInteger: {
                type: "integer",
                minimum: 0
            },
            nonNegativeIntegerDefault0: {
                $ref: "#/$defs/nonNegativeInteger",
                default: 0
            },
            simpleTypes: {
                enum: [
                    "array",
                    "boolean",
                    "integer",
                    "null",
                    "number",
                    "object",
                    "string"
                ]
            },
            stringArray: {
                type: "array",
                items: {
                    type: "string"
                },
                uniqueItems: true,
                default: []
            }
        }
    };
});
const Le = C(function(We) {
    Object.defineProperty(We, "__esModule", {
        value: true
    });
    const Zt = ke();
    const Bt = Ee();
    const Jt = Ie();
    const Qt = Ne();
    const er = Te();
    const tr = Fe();
    const rr = De();
    const nr = Ve();
    const ar = [
        "/properties"
    ];
    function or(e) {
        [
            Zt,
            Bt,
            Jt,
            Qt,
            er,
            r(this, tr),
            rr,
            r(this, nr)
        ].forEach((n)=>this.addMetaSchema(n, undefined, false));
        return this;
        function r(n, o) {
            if (e) {
                return n.$dataMetaSchema(o, ar);
            }
            return o;
        }
    }
    We.default = or;
});
const He = C(function(j, K) {
    Object.defineProperty(j, "__esModule", {
        value: true
    });
    j.MissingRefError = j.ValidationError = j.CodeGen = j.Name = j.nil = j.stringify = j.str = j._ = j.KeywordCxt = j.Ajv2020 = undefined;
    const cr = cso();
    const ur = Ce();
    const dr = gso();
    const mr = Le();
    const H = "https://json-schema.org/draft/2020-12/schema";
    class O extends cr.default {
        constructor(e = {}){
            super({
                ...e,
                dynamicRef: true,
                next: true,
                unevaluated: true
            });
        }
        _addVocabularies() {
            super._addVocabularies();
            ur.default.forEach((e)=>this.addVocabulary(e));
            if (this.opts.discriminator) {
                this.addKeyword(dr.default);
            }
        }
        _addDefaultMetaSchema() {
            super._addDefaultMetaSchema();
            let { $data, meta } = this.opts;
            if (!meta) {
                return;
            }
            mr.default.call(this, $data);
            this.refs["http://json-schema.org/schema"] = H;
        }
        defaultMeta() {
            return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(H) ? H : undefined);
        }
    }
    j.Ajv2020 = O;
    K.exports = j = O;
    K.exports.Ajv2020 = O;
    Object.defineProperty(j, "__esModule", {
        value: true
    });
    j.default = O;
    const lr = x5t();
    Object.defineProperty(j, "KeywordCxt", {
        enumerable: true,
        get: function() {
            return lr.KeywordCxt;
        }
    });
    const w = om();
    Object.defineProperty(j, "_", {
        enumerable: true,
        get: function() {
            return w._;
        }
    });
    Object.defineProperty(j, "str", {
        enumerable: true,
        get: function() {
            return w.str;
        }
    });
    Object.defineProperty(j, "stringify", {
        enumerable: true,
        get: function() {
            return w.stringify;
        }
    });
    Object.defineProperty(j, "nil", {
        enumerable: true,
        get: function() {
            return w.nil;
        }
    });
    Object.defineProperty(j, "Name", {
        enumerable: true,
        get: function() {
            return w.Name;
        }
    });
    Object.defineProperty(j, "CodeGen", {
        enumerable: true,
        get: function() {
            return w.CodeGen;
        }
    });
    const fr = kMn();
    Object.defineProperty(j, "ValidationError", {
        enumerable: true,
        get: function() {
            return fr.default;
        }
    });
    const pr = P5t();
    Object.defineProperty(j, "MissingRefError", {
        enumerable: true,
        get: function() {
            return pr.default;
        }
    });
});
function Mie() {
    try {
        cqe(dn().BASE_API_URL);
    } catch  {
        return "egress_blocked";
    }
    if (sl("zdr")) {
        return "egress_blocked";
    }
    if (Tt()) {
        return "essential_traffic";
    }
}
function xmn(e, { path, serverId }) {
    try {
        if (a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") {
            return false;
        }
        let o = e.config;
        if (o.type === "claudeai-proxy") {
            if (!xxe(o)) {
                return false;
            }
            let i = new URL(o.url);
            return i.protocol === "https:" && i.username === "" && i.password === "" && Rh(i.href) && i.pathname === path;
        }
        let s = a.CLAUDE_CODE_ENVIRONMENT_KIND;
        return a.CLAUDE_CODE_REMOTE === true && (!s || s === "anthropic_cloud") && o.type === "http" && o.scope === "dynamic" && !CR(o) && FFe(o) === serverId;
    } catch  {
        return false;
    }
}
const G = 100;
const ze = 900;
const Y = 300;
function Oht(e) {
    return _(e).replace(/[^\x20-\x7e]/g, (r)=>`\\u${r.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function Z(e) {
    let r = Oht(e);
    if (r.length <= Y) {
        return r;
    }
    let n = [
        ...e
    ];
    let n_length = n.length;
    let s = 5;
    while(n_length > 0){
        s += Oht(n[n_length - 1]).length - 2;
        if (s > Y) {
            break;
        }
        n_length--;
    }
    return Oht(`...${n.slice(n_length).join("")}`);
}
function dzo(e) {
    let r = [];
    let n = 0;
    for (let { path, name, size } of e){
        let u = `${Z(path)}${basename(path) === name ? "" : `, the file ${Z(name)}`} (${size} bytes)`;
        n += u.length + 2;
        if (n > ze) {
            break;
        }
        r.push(u);
    }
    let o = e.length - r.length;
    return `Attaches ${e.length} ${I(e.length, "file")}: ${r.join("; ")}${o > 0 ? `; and ${o} more` : ""}`;
}
function B(instancePath) {
    if (instancePath === "") {
        return;
    }
    let r = instancePath.slice(1).split("/").map((n)=>n.replaceAll("~1", "/").replaceAll("~0", "~")).map((n, o)=>{
        if (o === 0) {
            return n;
        }
        if (/^\d+$/.test(n)) {
            return `[${n}]`;
        }
        return `.${n}`;
    }).join("");
    return S(r);
}
function S(e) {
    return Oht(e.length > G ? `${ne(e, G)}...` : e);
}
const Ke = "https://json-schema.org/draft/2020-12/schema";
const U = 5;
const z = new WeakMap;
function gr(e, { tool, feature }) {
    if (!sr(e)) {
        return null;
    }
    let o = z.get(e);
    if (o !== undefined) {
        return o;
    }
    if (n_e()) {
        t(`[${tool}] input schema not checked before the call: sessions that share a process compile no schemas, so the server checks it`);
        z.set(e, null);
        return null;
    }
    let s = null;
    let e_$schema = e.$schema;
    if (e_$schema === undefined || e_$schema === Ke || e_$schema === `${Ke}#`) {
        try {
            let { Ajv2020 } = He();
            s = new Ajv2020({
                allErrors: true,
                strict: false,
                validateFormats: false
            }).compile(e);
        } catch (error) {
            t(`[${tool}] input schema not checked: Ajv could not compile it: ${l(error)}`, {
                level: "warn"
            });
        }
    } else {
        t(`[${tool}] input schema not checked: it declares ${_(e_$schema)}, and only draft 2020-12 is checked`, {
            level: "warn"
        });
    }
    if (s === null) {
        f(feature, "input_schema_not_checked");
    }
    z.set(e, s);
    return s;
}
const $r = new Set([
    "allOf",
    "anyOf",
    "contains",
    "if",
    "oneOf"
]);
const br = {
    array: "a list",
    boolean: "true or false",
    integer: "a whole number",
    number: "a number",
    object: "an object",
    string: "text"
};
function Pmn(e, r, n) {
    let o = gr(r, n);
    if (o === null || o(e)) {
        return;
    }
    let s = sr(r) && sr(r.properties) ? Object.keys(r.properties) : [];
    let i = new Set(sr(r) && Array.isArray(r.required) ? r.required : []);
    let { ignoreInside } = n;
    let u = (o.errors ?? []).filter((d)=>ignoreInside === undefined || !d.instancePath.startsWith(`/${ignoreInside}/`) && !(d.instancePath === `/${ignoreInside}` && $r.has(d.keyword)));
    if (u.length === 0) {
        return;
    }
    let c = u.flatMap((d)=>{
        let additionalProperty = d.params.additionalProperty;
        if (d.keyword === "additionalProperties" && d.instancePath === "" && typeof additionalProperty === "string") {
            return [
                additionalProperty
            ];
        }
        return [];
    });
    let h = new Map(c.map((d)=>[
            d,
            s.find((p)=>vr(d, p))
        ]));
    let b = D([
        ...c.map((d)=>{
            let p = h.get(d);
            return `it has no argument ${S(d)}${p === undefined ? "" : ` (did you mean ${S(p)}?)`}`;
        }),
        ...u.flatMap((d)=>{
            let p = B(d.instancePath);
            let d_params = d.params;
            switch(d.keyword){
                case "additionalProperties":
                    if (p === undefined) {
                        return [];
                    }
                    return [
                        `${p} has no field ${S(String(d_params.additionalProperty))}`
                    ];
                case "required":
                    {
                        let R = String(d_params.missingProperty);
                        if (p !== undefined) {
                            return [
                                `${p} needs the field ${S(R)}`
                            ];
                        }
                        if ([
                            ...h.values()
                        ].includes(R)) {
                            return [];
                        }
                        return [
                            `the argument ${S(R)} is required`
                        ];
                    }
                case "type":
                    {
                        let R = (Array.isArray(d_params.type) ? d_params.type : [
                            d_params.type
                        ]).filter((M)=>M !== "null");
                        if (R.length === 0) {
                            return [];
                        }
                        return [
                            `${p ?? "the arguments"} must be ${R.map((M)=>br[String(M)] ?? String(M)).join(" or ")}`
                        ];
                    }
                case "minLength":
                    return [
                        d_params.limit === 1 ? `${p ?? "the arguments"} must not be empty` : `${p ?? "the arguments"} must be at least ${String(d_params.limit)} characters`
                    ];
                case "maxLength":
                    return [
                        `${p ?? "the arguments"} must be at most ${String(d_params.limit)} characters`
                    ];
                case "maxItems":
                    return [
                        `${p ?? "the arguments"} must have at most ${String(d_params.limit)} entries`
                    ];
                case "enum":
                    if (Array.isArray(d_params.allowedValues)) {
                        return [
                            `${p ?? "the arguments"} must be one of ${d_params.allowedValues.map((R)=>_(R)).join(", ")}`
                        ];
                    }
                    break;
            }
            return [
                `${p ?? "the arguments"} ${d.message ?? "are not valid"}`
            ];
        })
    ]);
    if (b.length === 0) {
        return;
    }
    let y = b.length > U ? `, and ${b.length - U} more` : "";
    let P = s.map((d)=>{
        if (i.has(d)) {
            return `${d} (required)`;
        }
        return d;
    });
    return {
        listed: `${b.slice(0, U).join("; ")}${y}`,
        takes: P.length === 0 ? "" : ` ${n.tool} takes ${P.join(", ")}.`
    };
}
function vr(e, r) {
    let n = e.toLowerCase();
    let o = r.toLowerCase();
    return n === o || o.endsWith(`_${n}`) || o.startsWith(`${n}_`) || n.endsWith(`_${o}`) || n.startsWith(`${o}_`);
}
const pOe = 4096;
function Mht(e, r) {
    let { tool, local, ref, refWord, maxFiles, nothingDone } = r;
    if (!Array.isArray(e)) {
        return X(r);
    }
    if (e.length > maxFiles) {
        return {
            error: `${tool} takes at most ${maxFiles} files; this call has ${e.length}. ${nothingDone}`,
            code: "too_many_files"
        };
    }
    let c = [];
    for (let h of e){
        if (!sr(h)) {
            return X(r);
        }
        if (h[ref] !== undefined) {
            return {
                error: `${tool} file entries must give a \`${local}\`; this client uploads the file and fills in the ${refWord} itself. If these ${refWord}s came from an approval given before Claude Code restarted, that approval cannot be reused: call ${tool} again with paths. ${nothingDone}`,
                code: `model_${ref}`
            };
        }
        let b = h[local];
        if (typeof b !== "string" || b === "" || b.length > pOe) {
            return X(r);
        }
        if (!isAbsolute(b)) {
            return {
                error: `Cannot attach "${b}": ${tool} file paths must be absolute paths as this session sees them. ${nothingDone}`,
                code: "relative_path"
            };
        }
        c.push(b);
    }
    return c;
}
function X({ tool, arg, local, nothingDone }) {
    return {
        error: `${tool} \`${arg}\` must be a list of objects, each with a \`${local}\` of at most ${pOe} characters, such as [{"${local}": "/absolute/path/to/report.csv"}]. ${nothingDone}`,
        code: "bad_entry"
    };
}
export { Mie, xmn, Oht, dzo, Pmn, pOe, Mht };
