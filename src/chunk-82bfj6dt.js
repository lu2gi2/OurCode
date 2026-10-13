import { I5t } from "/$bunfs/root/chunk-mt63bhhq.js";
const qe = D;
var je = {
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
var ke = {
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
var we = new RegExp("^[^#]*#?$", "u");
var Pe = new RegExp("^[A-Za-z_][-A-Za-z0-9._]*$", "u");
function x(t, { instancePath = "", parentData, parentDataProperty, rootData = t, dynamicAnchors = {} } = {}) {
    let r = null;
    let e = 0;
    let x_evaluated = x.evaluated;
    if (x_evaluated.dynamicProps) {
        x_evaluated.props = undefined;
    }
    if (x_evaluated.dynamicItems) {
        x_evaluated.items = undefined;
    }
    if (!(t && typeof t === "object" && !Array.isArray(t)) && typeof t !== "boolean") {
        x.errors = [
            {
                instancePath,
                schemaPath: "#/type",
                keyword: "type",
                params: {
                    type: ke.type
                },
                message: "must be object,boolean"
            }
        ];
        return false;
    }
    if (!dynamicAnchors.meta) {
        dynamicAnchors.meta = x;
    }
    if (e === 0) {
        if (t && typeof t === "object" && !Array.isArray(t)) {
            if (t.$id !== undefined) {
                let u = t.$id;
                let m = e;
                let N = e;
                if (e === N) {
                    if (e === N) {
                        if (typeof u !== "string") {
                            x.errors = [
                                {
                                    instancePath: `${instancePath}/\$id`,
                                    schemaPath: "#/$defs/uriReferenceString/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }
                            ];
                            return false;
                        }
                    }
                }
                if (e === m) {
                    if (typeof u === "string") {
                        if (!we.test(u)) {
                            x.errors = [
                                {
                                    instancePath: `${instancePath}/\$id`,
                                    schemaPath: "#/properties/%24id/pattern",
                                    keyword: "pattern",
                                    params: {
                                        pattern: "^[^#]*#?$"
                                    },
                                    message: 'must match pattern "^[^#]*#?$"'
                                }
                            ];
                            return false;
                        }
                    }
                }
                var n = m === e;
            } else {
                var n = true;
            }
            if (n) {
                if (t.$schema !== undefined) {
                    let u = e;
                    let m = e;
                    if (e === m) {
                        if (e === m) {
                            if (typeof t.$schema !== "string") {
                                x.errors = [
                                    {
                                        instancePath: `${instancePath}/\$schema`,
                                        schemaPath: "#/$defs/uriString/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }
                                ];
                                return false;
                            }
                        }
                    }
                    var n = u === e;
                } else {
                    var n = true;
                }
                if (n) {
                    if (t.$ref !== undefined) {
                        let u = e;
                        let m = e;
                        if (e === m) {
                            if (e === m) {
                                if (typeof t.$ref !== "string") {
                                    x.errors = [
                                        {
                                            instancePath: `${instancePath}/\$ref`,
                                            schemaPath: "#/$defs/uriReferenceString/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }
                                    ];
                                    return false;
                                }
                            }
                        }
                        var n = u === e;
                    } else {
                        var n = true;
                    }
                    if (n) {
                        if (t.$anchor !== undefined) {
                            let u = t.$anchor;
                            let m = e;
                            if (e === e) {
                                if (typeof u === "string") {
                                    if (!Pe.test(u)) {
                                        x.errors = [
                                            {
                                                instancePath: `${instancePath}/\$anchor`,
                                                schemaPath: "#/$defs/anchorString/pattern",
                                                keyword: "pattern",
                                                params: {
                                                    pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
                                                },
                                                message: 'must match pattern "^[A-Za-z_][-A-Za-z0-9._]*$"'
                                            }
                                        ];
                                        return false;
                                    }
                                } else {
                                    x.errors = [
                                        {
                                            instancePath: `${instancePath}/\$anchor`,
                                            schemaPath: "#/$defs/anchorString/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }
                                    ];
                                    return false;
                                }
                            }
                            var n = m === e;
                        } else {
                            var n = true;
                        }
                        if (n) {
                            if (t.$dynamicRef !== undefined) {
                                let u = e;
                                let m = e;
                                if (e === m) {
                                    if (e === m) {
                                        if (typeof t.$dynamicRef !== "string") {
                                            x.errors = [
                                                {
                                                    instancePath: `${instancePath}/\$dynamicRef`,
                                                    schemaPath: "#/$defs/uriReferenceString/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }
                                            ];
                                            return false;
                                        }
                                    }
                                }
                                var n = u === e;
                            } else {
                                var n = true;
                            }
                            if (n) {
                                if (t.$dynamicAnchor !== undefined) {
                                    let u = t.$dynamicAnchor;
                                    let m = e;
                                    if (e === e) {
                                        if (typeof u === "string") {
                                            if (!Pe.test(u)) {
                                                x.errors = [
                                                    {
                                                        instancePath: `${instancePath}/\$dynamicAnchor`,
                                                        schemaPath: "#/$defs/anchorString/pattern",
                                                        keyword: "pattern",
                                                        params: {
                                                            pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
                                                        },
                                                        message: 'must match pattern "^[A-Za-z_][-A-Za-z0-9._]*$"'
                                                    }
                                                ];
                                                return false;
                                            }
                                        } else {
                                            x.errors = [
                                                {
                                                    instancePath: `${instancePath}/\$dynamicAnchor`,
                                                    schemaPath: "#/$defs/anchorString/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }
                                            ];
                                            return false;
                                        }
                                    }
                                    var n = m === e;
                                } else {
                                    var n = true;
                                }
                                if (n) {
                                    if (t.$vocabulary !== undefined) {
                                        let u = t.$vocabulary;
                                        let m = e;
                                        if (e === m) {
                                            if (u && typeof u === "object" && !Array.isArray(u)) {
                                                for(let propertyName in u){
                                                    let _ = e;
                                                    let j = e;
                                                    if (e === j) {
                                                        if (e === j) {
                                                            if (typeof propertyName !== "string") {
                                                                let g = {
                                                                    instancePath: `${instancePath}/\$vocabulary`,
                                                                    schemaPath: "#/$defs/uriString/type",
                                                                    keyword: "type",
                                                                    params: {
                                                                        type: "string"
                                                                    },
                                                                    message: "must be string",
                                                                    propertyName
                                                                };
                                                                if (r === null) {
                                                                    r = [
                                                                        g
                                                                    ];
                                                                } else {
                                                                    r.push(g);
                                                                }
                                                                e++;
                                                            }
                                                        }
                                                    }
                                                    var d = _ === e;
                                                    if (!d) {
                                                        let g = {
                                                            instancePath: `${instancePath}/\$vocabulary`,
                                                            schemaPath: "#/properties/%24vocabulary/propertyNames",
                                                            keyword: "propertyNames",
                                                            params: {
                                                                propertyName
                                                            },
                                                            message: "property name must be valid"
                                                        };
                                                        if (r === null) {
                                                            r = [
                                                                g
                                                            ];
                                                        } else {
                                                            r.push(g);
                                                        }
                                                        e++;
                                                        x.errors = r;
                                                        return false;
                                                        break;
                                                    }
                                                }
                                                if (d) {
                                                    for(let v in u){
                                                        let _ = e;
                                                        if (typeof u[v] !== "boolean") {
                                                            x.errors = [
                                                                {
                                                                    instancePath: `${instancePath}/\$vocabulary/${v.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                                                    schemaPath: "#/properties/%24vocabulary/additionalProperties/type",
                                                                    keyword: "type",
                                                                    params: {
                                                                        type: "boolean"
                                                                    },
                                                                    message: "must be boolean"
                                                                }
                                                            ];
                                                            return false;
                                                        }
                                                        const o = _ === e;
                                                        if (!o) {
                                                            break;
                                                        }
                                                    }
                                                }
                                            } else {
                                                x.errors = [
                                                    {
                                                        instancePath: `${instancePath}/\$vocabulary`,
                                                        schemaPath: "#/properties/%24vocabulary/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "object"
                                                        },
                                                        message: "must be object"
                                                    }
                                                ];
                                                return false;
                                            }
                                        }
                                        var n = m === e;
                                    } else {
                                        var n = true;
                                    }
                                    if (n) {
                                        if (t.$comment !== undefined) {
                                            let u = e;
                                            if (typeof t.$comment !== "string") {
                                                x.errors = [
                                                    {
                                                        instancePath: `${instancePath}/\$comment`,
                                                        schemaPath: "#/properties/%24comment/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string"
                                                    }
                                                ];
                                                return false;
                                            }
                                            var n = u === e;
                                        } else {
                                            var n = true;
                                        }
                                        if (n) {
                                            if (t.$defs !== undefined) {
                                                let u = t.$defs;
                                                let m = e;
                                                if (e === m) {
                                                    if (u && typeof u === "object" && !Array.isArray(u)) {
                                                        for(let v in u){
                                                            let _ = u[v];
                                                            let j = e;
                                                            let g = dynamicAnchors.meta;
                                                            if (g) {
                                                                if (!g(_, {
                                                                    instancePath: `${instancePath}/\$defs/${v.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                                                    parentData: u,
                                                                    parentDataProperty: v,
                                                                    rootData,
                                                                    dynamicAnchors
                                                                })) {
                                                                    r = r === null ? g.errors : r.concat(g.errors);
                                                                    e = r.length;
                                                                } else {
                                                                    var w = g.evaluated.props;
                                                                    var k = g.evaluated.items;
                                                                }
                                                            } else if (!x(_, {
                                                                instancePath: `${instancePath}/\$defs/${v.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                                                parentData: u,
                                                                parentDataProperty: v,
                                                                rootData,
                                                                dynamicAnchors
                                                            })) {
                                                                r = r === null ? x.errors : r.concat(x.errors);
                                                                e = r.length;
                                                            } else {
                                                                const I = x.evaluated.props;
                                                                if (w !== true && I !== undefined) {
                                                                    if (I === true) {
                                                                        w = true;
                                                                    } else {
                                                                        w = w || {};
                                                                        Object.assign(w, I);
                                                                    }
                                                                }
                                                                const a = x.evaluated.items;
                                                                if (k !== true && a !== undefined) {
                                                                    k = a === true ? true : k > a ? k : a;
                                                                }
                                                            }
                                                            const f = j === e;
                                                            if (!f) {
                                                                break;
                                                            }
                                                        }
                                                    } else {
                                                        x.errors = [
                                                            {
                                                                instancePath: `${instancePath}/\$defs`,
                                                                schemaPath: "#/properties/%24defs/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "object"
                                                                },
                                                                message: "must be object"
                                                            }
                                                        ];
                                                        return false;
                                                    }
                                                }
                                                var n = m === e;
                                            } else {
                                                var n = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    x.errors = r;
    return e === 0;
}
x.evaluated = {
    props: {
        $id: true,
        $schema: true,
        $ref: true,
        $anchor: true,
        $dynamicRef: true,
        $dynamicAnchor: true,
        $vocabulary: true,
        $comment: true,
        $defs: true
    },
    dynamicProps: false,
    dynamicItems: false
};
var Ie = {
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
function R(t, { instancePath = "", parentData, parentDataProperty, rootData = t, dynamicAnchors = {} } = {}) {
    let r = null;
    let e = 0;
    let R_evaluated = R.evaluated;
    if (R_evaluated.dynamicProps) {
        R_evaluated.props = undefined;
    }
    if (R_evaluated.dynamicItems) {
        R_evaluated.items = undefined;
    }
    if (e === 0) {
        if (Array.isArray(t)) {
            if (t.length < 1) {
                R.errors = [
                    {
                        instancePath,
                        schemaPath: "#/minItems",
                        keyword: "minItems",
                        params: {
                            limit: 1
                        },
                        message: "must NOT have fewer than 1 items"
                    }
                ];
                return false;
            } else {
                var n = true;
                let I = t.length;
                for(let a = 0; a < I; a++){
                    let f = t[a];
                    let u = e;
                    let m = dynamicAnchors.meta;
                    if (m) {
                        if (!m(f, {
                            instancePath: `${instancePath}/${a}`,
                            parentData: t,
                            parentDataProperty: a,
                            rootData,
                            dynamicAnchors
                        })) {
                            r = r === null ? m.errors : r.concat(m.errors);
                            e = r.length;
                        } else {
                            var d = m.evaluated.props;
                            var o = m.evaluated.items;
                        }
                    } else if (!R(f, {
                        instancePath: `${instancePath}/${a}`,
                        parentData: t,
                        parentDataProperty: a,
                        rootData,
                        dynamicAnchors
                    })) {
                        r = r === null ? R.errors : r.concat(R.errors);
                        e = r.length;
                    } else {
                        const w = R.evaluated.props;
                        if (d !== true && w !== undefined) {
                            if (w === true) {
                                d = true;
                            } else {
                                d = d || {};
                                Object.assign(d, w);
                            }
                        }
                        const k = R.evaluated.items;
                        if (o !== true && k !== undefined) {
                            o = k === true ? true : o > k ? o : k;
                        }
                    }
                    var n = u === e;
                    if (!n) {
                        break;
                    }
                }
            }
        } else {
            R.errors = [
                {
                    instancePath,
                    schemaPath: "#/type",
                    keyword: "type",
                    params: {
                        type: "array"
                    },
                    message: "must be array"
                }
            ];
            return false;
        }
    }
    R.errors = r;
    return e === 0;
}
R.evaluated = {
    items: true,
    dynamicProps: false,
    dynamicItems: false
};
function l(t, { instancePath = "", parentData, parentDataProperty, rootData = t, dynamicAnchors = {} } = {}) {
    let r = null;
    let e = 0;
    let l_evaluated = l.evaluated;
    if (l_evaluated.dynamicProps) {
        l_evaluated.props = undefined;
    }
    if (l_evaluated.dynamicItems) {
        l_evaluated.items = undefined;
    }
    if (!(t && typeof t === "object" && !Array.isArray(t)) && typeof t !== "boolean") {
        l.errors = [
            {
                instancePath,
                schemaPath: "#/type",
                keyword: "type",
                params: {
                    type: Ie.type
                },
                message: "must be object,boolean"
            }
        ];
        return false;
    }
    if (!dynamicAnchors.meta) {
        dynamicAnchors.meta = l;
    }
    if (e === 0) {
        if (t && typeof t === "object" && !Array.isArray(t)) {
            if (t.prefixItems !== undefined) {
                let p = e;
                if (!R(t.prefixItems, {
                    instancePath: `${instancePath}/prefixItems`,
                    parentData: t,
                    parentDataProperty: "prefixItems",
                    rootData,
                    dynamicAnchors
                })) {
                    r = r === null ? R.errors : r.concat(R.errors);
                    e = r.length;
                }
                var n = p === e;
            } else {
                var n = true;
            }
            if (n) {
                if (t.items !== undefined) {
                    let p = t.items;
                    let O = e;
                    let y = dynamicAnchors.meta;
                    if (y) {
                        if (!y(p, {
                            instancePath: `${instancePath}/items`,
                            parentData: t,
                            parentDataProperty: "items",
                            rootData,
                            dynamicAnchors
                        })) {
                            r = r === null ? y.errors : r.concat(y.errors);
                            e = r.length;
                        } else {
                            var d = y.evaluated.props;
                            var o = y.evaluated.items;
                        }
                    } else if (!l(p, {
                        instancePath: `${instancePath}/items`,
                        parentData: t,
                        parentDataProperty: "items",
                        rootData,
                        dynamicAnchors
                    })) {
                        r = r === null ? l.errors : r.concat(l.errors);
                        e = r.length;
                    } else {
                        const w = l.evaluated.props;
                        if (d !== true && w !== undefined) {
                            if (w === true) {
                                d = true;
                            } else {
                                d = d || {};
                                Object.assign(d, w);
                            }
                        }
                        const k = l.evaluated.items;
                        if (o !== true && k !== undefined) {
                            o = k === true ? true : o > k ? o : k;
                        }
                    }
                    var n = O === e;
                } else {
                    var n = true;
                }
                if (n) {
                    if (t.contains !== undefined) {
                        let p = t.contains;
                        let O = e;
                        let y = dynamicAnchors.meta;
                        if (y) {
                            if (!y(p, {
                                instancePath: `${instancePath}/contains`,
                                parentData: t,
                                parentDataProperty: "contains",
                                rootData,
                                dynamicAnchors
                            })) {
                                r = r === null ? y.errors : r.concat(y.errors);
                                e = r.length;
                            } else {
                                var I = y.evaluated.props;
                                var a = y.evaluated.items;
                            }
                        } else if (!l(p, {
                            instancePath: `${instancePath}/contains`,
                            parentData: t,
                            parentDataProperty: "contains",
                            rootData,
                            dynamicAnchors
                        })) {
                            r = r === null ? l.errors : r.concat(l.errors);
                            e = r.length;
                        } else {
                            const f = l.evaluated.props;
                            if (I !== true && f !== undefined) {
                                if (f === true) {
                                    I = true;
                                } else {
                                    I = I || {};
                                    Object.assign(I, f);
                                }
                            }
                            const u = l.evaluated.items;
                            if (a !== true && u !== undefined) {
                                a = u === true ? true : a > u ? a : u;
                            }
                        }
                        var n = O === e;
                    } else {
                        var n = true;
                    }
                    if (n) {
                        if (t.additionalProperties !== undefined) {
                            let p = t.additionalProperties;
                            let O = e;
                            let y = dynamicAnchors.meta;
                            if (y) {
                                if (!y(p, {
                                    instancePath: `${instancePath}/additionalProperties`,
                                    parentData: t,
                                    parentDataProperty: "additionalProperties",
                                    rootData,
                                    dynamicAnchors
                                })) {
                                    r = r === null ? y.errors : r.concat(y.errors);
                                    e = r.length;
                                } else {
                                    var m = y.evaluated.props;
                                    var N = y.evaluated.items;
                                }
                            } else if (!l(p, {
                                instancePath: `${instancePath}/additionalProperties`,
                                parentData: t,
                                parentDataProperty: "additionalProperties",
                                rootData,
                                dynamicAnchors
                            })) {
                                r = r === null ? l.errors : r.concat(l.errors);
                                e = r.length;
                            } else {
                                const v = l.evaluated.props;
                                if (m !== true && v !== undefined) {
                                    if (v === true) {
                                        m = true;
                                    } else {
                                        m = m || {};
                                        Object.assign(m, v);
                                    }
                                }
                                const _ = l.evaluated.items;
                                if (N !== true && _ !== undefined) {
                                    N = _ === true ? true : N > _ ? N : _;
                                }
                            }
                            var n = O === e;
                        } else {
                            var n = true;
                        }
                        if (n) {
                            if (t.properties !== undefined) {
                                let p = t.properties;
                                let O = e;
                                if (e === O) {
                                    if (p && typeof p === "object" && !Array.isArray(p)) {
                                        for(let q in p){
                                            let W = p[q];
                                            let re = e;
                                            let A = dynamicAnchors.meta;
                                            if (A) {
                                                if (!A(W, {
                                                    instancePath: `${instancePath}/properties/${q.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                                    parentData: p,
                                                    parentDataProperty: q,
                                                    rootData,
                                                    dynamicAnchors
                                                })) {
                                                    r = r === null ? A.errors : r.concat(A.errors);
                                                    e = r.length;
                                                } else {
                                                    var j = A.evaluated.props;
                                                    var g = A.evaluated.items;
                                                }
                                            } else if (!l(W, {
                                                instancePath: `${instancePath}/properties/${q.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                                parentData: p,
                                                parentDataProperty: q,
                                                rootData,
                                                dynamicAnchors
                                            })) {
                                                r = r === null ? l.errors : r.concat(l.errors);
                                                e = r.length;
                                            } else {
                                                const P = l.evaluated.props;
                                                if (j !== true && P !== undefined) {
                                                    if (P === true) {
                                                        j = true;
                                                    } else {
                                                        j = j || {};
                                                        Object.assign(j, P);
                                                    }
                                                }
                                                const S = l.evaluated.items;
                                                if (g !== true && S !== undefined) {
                                                    g = S === true ? true : g > S ? g : S;
                                                }
                                            }
                                            const M = re === e;
                                            if (!M) {
                                                break;
                                            }
                                        }
                                    } else {
                                        l.errors = [
                                            {
                                                instancePath: `${instancePath}/properties`,
                                                schemaPath: "#/properties/properties/type",
                                                keyword: "type",
                                                params: {
                                                    type: "object"
                                                },
                                                message: "must be object"
                                            }
                                        ];
                                        return false;
                                    }
                                }
                                var n = O === e;
                            } else {
                                var n = true;
                            }
                            if (n) {
                                if (t.patternProperties !== undefined) {
                                    let p = t.patternProperties;
                                    let O = e;
                                    if (e === O) {
                                        if (p && typeof p === "object" && !Array.isArray(p)) {
                                            for(let propertyName in p){
                                                var Z = e === e;
                                                if (!Z) {
                                                    let re = {
                                                        instancePath: `${instancePath}/patternProperties`,
                                                        schemaPath: "#/properties/patternProperties/propertyNames",
                                                        keyword: "propertyNames",
                                                        params: {
                                                            propertyName
                                                        },
                                                        message: "property name must be valid"
                                                    };
                                                    if (r === null) {
                                                        r = [
                                                            re
                                                        ];
                                                    } else {
                                                        r.push(re);
                                                    }
                                                    e++;
                                                    l.errors = r;
                                                    return false;
                                                    break;
                                                }
                                            }
                                            if (Z) {
                                                for(let q in p){
                                                    let W = p[q];
                                                    let re = e;
                                                    let A = dynamicAnchors.meta;
                                                    if (A) {
                                                        if (!A(W, {
                                                            instancePath: `${instancePath}/patternProperties/${q.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                                            parentData: p,
                                                            parentDataProperty: q,
                                                            rootData,
                                                            dynamicAnchors
                                                        })) {
                                                            r = r === null ? A.errors : r.concat(A.errors);
                                                            e = r.length;
                                                        } else {
                                                            var T = A.evaluated.props;
                                                            var V = A.evaluated.items;
                                                        }
                                                    } else if (!l(W, {
                                                        instancePath: `${instancePath}/patternProperties/${q.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                                        parentData: p,
                                                        parentDataProperty: q,
                                                        rootData,
                                                        dynamicAnchors
                                                    })) {
                                                        r = r === null ? l.errors : r.concat(l.errors);
                                                        e = r.length;
                                                    } else {
                                                        const Q = l.evaluated.props;
                                                        if (T !== true && Q !== undefined) {
                                                            if (Q === true) {
                                                                T = true;
                                                            } else {
                                                                T = T || {};
                                                                Object.assign(T, Q);
                                                            }
                                                        }
                                                        const K = l.evaluated.items;
                                                        if (V !== true && K !== undefined) {
                                                            V = K === true ? true : V > K ? V : K;
                                                        }
                                                    }
                                                    const ae = re === e;
                                                    if (!ae) {
                                                        break;
                                                    }
                                                }
                                            }
                                        } else {
                                            l.errors = [
                                                {
                                                    instancePath: `${instancePath}/patternProperties`,
                                                    schemaPath: "#/properties/patternProperties/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "object"
                                                    },
                                                    message: "must be object"
                                                }
                                            ];
                                            return false;
                                        }
                                    }
                                    var n = O === e;
                                } else {
                                    var n = true;
                                }
                                if (n) {
                                    if (t.dependentSchemas !== undefined) {
                                        let p = t.dependentSchemas;
                                        let O = e;
                                        if (e === O) {
                                            if (p && typeof p === "object" && !Array.isArray(p)) {
                                                for(let q in p){
                                                    let W = p[q];
                                                    let re = e;
                                                    let A = dynamicAnchors.meta;
                                                    if (A) {
                                                        if (!A(W, {
                                                            instancePath: `${instancePath}/dependentSchemas/${q.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                                            parentData: p,
                                                            parentDataProperty: q,
                                                            rootData,
                                                            dynamicAnchors
                                                        })) {
                                                            r = r === null ? A.errors : r.concat(A.errors);
                                                            e = r.length;
                                                        } else {
                                                            var B = A.evaluated.props;
                                                            var Y = A.evaluated.items;
                                                        }
                                                    } else if (!l(W, {
                                                        instancePath: `${instancePath}/dependentSchemas/${q.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                                        parentData: p,
                                                        parentDataProperty: q,
                                                        rootData,
                                                        dynamicAnchors
                                                    })) {
                                                        r = r === null ? l.errors : r.concat(l.errors);
                                                        e = r.length;
                                                    } else {
                                                        const ue = l.evaluated.props;
                                                        if (B !== true && ue !== undefined) {
                                                            if (ue === true) {
                                                                B = true;
                                                            } else {
                                                                B = B || {};
                                                                Object.assign(B, ue);
                                                            }
                                                        }
                                                        const G = l.evaluated.items;
                                                        if (Y !== true && G !== undefined) {
                                                            Y = G === true ? true : Y > G ? Y : G;
                                                        }
                                                    }
                                                    const U = re === e;
                                                    if (!U) {
                                                        break;
                                                    }
                                                }
                                            } else {
                                                l.errors = [
                                                    {
                                                        instancePath: `${instancePath}/dependentSchemas`,
                                                        schemaPath: "#/properties/dependentSchemas/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "object"
                                                        },
                                                        message: "must be object"
                                                    }
                                                ];
                                                return false;
                                            }
                                        }
                                        var n = O === e;
                                    } else {
                                        var n = true;
                                    }
                                    if (n) {
                                        if (t.propertyNames !== undefined) {
                                            let p = t.propertyNames;
                                            let O = e;
                                            let y = dynamicAnchors.meta;
                                            if (y) {
                                                if (!y(p, {
                                                    instancePath: `${instancePath}/propertyNames`,
                                                    parentData: t,
                                                    parentDataProperty: "propertyNames",
                                                    rootData,
                                                    dynamicAnchors
                                                })) {
                                                    r = r === null ? y.errors : r.concat(y.errors);
                                                    e = r.length;
                                                } else {
                                                    var H = y.evaluated.props;
                                                    var ee = y.evaluated.items;
                                                }
                                            } else if (!l(p, {
                                                instancePath: `${instancePath}/propertyNames`,
                                                parentData: t,
                                                parentDataProperty: "propertyNames",
                                                rootData,
                                                dynamicAnchors
                                            })) {
                                                r = r === null ? l.errors : r.concat(l.errors);
                                                e = r.length;
                                            } else {
                                                const J = l.evaluated.props;
                                                if (H !== true && J !== undefined) {
                                                    if (J === true) {
                                                        H = true;
                                                    } else {
                                                        H = H || {};
                                                        Object.assign(H, J);
                                                    }
                                                }
                                                const te = l.evaluated.items;
                                                if (ee !== true && te !== undefined) {
                                                    ee = te === true ? true : ee > te ? ee : te;
                                                }
                                            }
                                            var n = O === e;
                                        } else {
                                            var n = true;
                                        }
                                        if (n) {
                                            if (t.if !== undefined) {
                                                let p = t.if;
                                                let O = e;
                                                let y = dynamicAnchors.meta;
                                                if (y) {
                                                    if (!y(p, {
                                                        instancePath: `${instancePath}/if`,
                                                        parentData: t,
                                                        parentDataProperty: "if",
                                                        rootData,
                                                        dynamicAnchors
                                                    })) {
                                                        r = r === null ? y.errors : r.concat(y.errors);
                                                        e = r.length;
                                                    } else {
                                                        var se = y.evaluated.props;
                                                        var le = y.evaluated.items;
                                                    }
                                                } else if (!l(p, {
                                                    instancePath: `${instancePath}/if`,
                                                    parentData: t,
                                                    parentDataProperty: "if",
                                                    rootData,
                                                    dynamicAnchors
                                                })) {
                                                    r = r === null ? l.errors : r.concat(l.errors);
                                                    e = r.length;
                                                } else {
                                                    const ge = l.evaluated.props;
                                                    if (se !== true && ge !== undefined) {
                                                        if (ge === true) {
                                                            se = true;
                                                        } else {
                                                            se = se || {};
                                                            Object.assign(se, ge);
                                                        }
                                                    }
                                                    const fe = l.evaluated.items;
                                                    if (le !== true && fe !== undefined) {
                                                        le = fe === true ? true : le > fe ? le : fe;
                                                    }
                                                }
                                                var n = O === e;
                                            } else {
                                                var n = true;
                                            }
                                            if (n) {
                                                if (t.then !== undefined) {
                                                    let p = t.then;
                                                    let O = e;
                                                    let y = dynamicAnchors.meta;
                                                    if (y) {
                                                        if (!y(p, {
                                                            instancePath: `${instancePath}/then`,
                                                            parentData: t,
                                                            parentDataProperty: "then",
                                                            rootData,
                                                            dynamicAnchors
                                                        })) {
                                                            r = r === null ? y.errors : r.concat(y.errors);
                                                            e = r.length;
                                                        } else {
                                                            var ne = y.evaluated.props;
                                                            var me = y.evaluated.items;
                                                        }
                                                    } else if (!l(p, {
                                                        instancePath: `${instancePath}/then`,
                                                        parentData: t,
                                                        parentDataProperty: "then",
                                                        rootData,
                                                        dynamicAnchors
                                                    })) {
                                                        r = r === null ? l.errors : r.concat(l.errors);
                                                        e = r.length;
                                                    } else {
                                                        const he = l.evaluated.props;
                                                        if (ne !== true && he !== undefined) {
                                                            if (he === true) {
                                                                ne = true;
                                                            } else {
                                                                ne = ne || {};
                                                                Object.assign(ne, he);
                                                            }
                                                        }
                                                        const pe = l.evaluated.items;
                                                        if (me !== true && pe !== undefined) {
                                                            me = pe === true ? true : me > pe ? me : pe;
                                                        }
                                                    }
                                                    var n = O === e;
                                                } else {
                                                    var n = true;
                                                }
                                                if (n) {
                                                    if (t.else !== undefined) {
                                                        let p = t.else;
                                                        let O = e;
                                                        let y = dynamicAnchors.meta;
                                                        if (y) {
                                                            if (!y(p, {
                                                                instancePath: `${instancePath}/else`,
                                                                parentData: t,
                                                                parentDataProperty: "else",
                                                                rootData,
                                                                dynamicAnchors
                                                            })) {
                                                                r = r === null ? y.errors : r.concat(y.errors);
                                                                e = r.length;
                                                            } else {
                                                                var ie = y.evaluated.props;
                                                                var ce = y.evaluated.items;
                                                            }
                                                        } else if (!l(p, {
                                                            instancePath: `${instancePath}/else`,
                                                            parentData: t,
                                                            parentDataProperty: "else",
                                                            rootData,
                                                            dynamicAnchors
                                                        })) {
                                                            r = r === null ? l.errors : r.concat(l.errors);
                                                            e = r.length;
                                                        } else {
                                                            const be = l.evaluated.props;
                                                            if (ie !== true && be !== undefined) {
                                                                if (be === true) {
                                                                    ie = true;
                                                                } else {
                                                                    ie = ie || {};
                                                                    Object.assign(ie, be);
                                                                }
                                                            }
                                                            const de = l.evaluated.items;
                                                            if (ce !== true && de !== undefined) {
                                                                ce = de === true ? true : ce > de ? ce : de;
                                                            }
                                                        }
                                                        var n = O === e;
                                                    } else {
                                                        var n = true;
                                                    }
                                                    if (n) {
                                                        if (t.allOf !== undefined) {
                                                            let p = e;
                                                            if (!R(t.allOf, {
                                                                instancePath: `${instancePath}/allOf`,
                                                                parentData: t,
                                                                parentDataProperty: "allOf",
                                                                rootData,
                                                                dynamicAnchors
                                                            })) {
                                                                r = r === null ? R.errors : r.concat(R.errors);
                                                                e = r.length;
                                                            }
                                                            var n = p === e;
                                                        } else {
                                                            var n = true;
                                                        }
                                                        if (n) {
                                                            if (t.anyOf !== undefined) {
                                                                let p = e;
                                                                if (!R(t.anyOf, {
                                                                    instancePath: `${instancePath}/anyOf`,
                                                                    parentData: t,
                                                                    parentDataProperty: "anyOf",
                                                                    rootData,
                                                                    dynamicAnchors
                                                                })) {
                                                                    r = r === null ? R.errors : r.concat(R.errors);
                                                                    e = r.length;
                                                                }
                                                                var n = p === e;
                                                            } else {
                                                                var n = true;
                                                            }
                                                            if (n) {
                                                                if (t.oneOf !== undefined) {
                                                                    let p = e;
                                                                    if (!R(t.oneOf, {
                                                                        instancePath: `${instancePath}/oneOf`,
                                                                        parentData: t,
                                                                        parentDataProperty: "oneOf",
                                                                        rootData,
                                                                        dynamicAnchors
                                                                    })) {
                                                                        r = r === null ? R.errors : r.concat(R.errors);
                                                                        e = r.length;
                                                                    }
                                                                    var n = p === e;
                                                                } else {
                                                                    var n = true;
                                                                }
                                                                if (n) {
                                                                    if (t.not !== undefined) {
                                                                        let p = t.not;
                                                                        let O = e;
                                                                        let y = dynamicAnchors.meta;
                                                                        if (y) {
                                                                            if (!y(p, {
                                                                                instancePath: `${instancePath}/not`,
                                                                                parentData: t,
                                                                                parentDataProperty: "not",
                                                                                rootData,
                                                                                dynamicAnchors
                                                                            })) {
                                                                                r = r === null ? y.errors : r.concat(y.errors);
                                                                                e = r.length;
                                                                            } else {
                                                                                var oe = y.evaluated.props;
                                                                                var ye = y.evaluated.items;
                                                                            }
                                                                        } else if (!l(p, {
                                                                            instancePath: `${instancePath}/not`,
                                                                            parentData: t,
                                                                            parentDataProperty: "not",
                                                                            rootData,
                                                                            dynamicAnchors
                                                                        })) {
                                                                            r = r === null ? l.errors : r.concat(l.errors);
                                                                            e = r.length;
                                                                        } else {
                                                                            const $e = l.evaluated.props;
                                                                            if (oe !== true && $e !== undefined) {
                                                                                if ($e === true) {
                                                                                    oe = true;
                                                                                } else {
                                                                                    oe = oe || {};
                                                                                    Object.assign(oe, $e);
                                                                                }
                                                                            }
                                                                            const ve = l.evaluated.items;
                                                                            if (ye !== true && ve !== undefined) {
                                                                                ye = ve === true ? true : ye > ve ? ye : ve;
                                                                            }
                                                                        }
                                                                        var n = O === e;
                                                                    } else {
                                                                        var n = true;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    l.errors = r;
    return e === 0;
}
l.evaluated = {
    props: {
        prefixItems: true,
        items: true,
        contains: true,
        additionalProperties: true,
        properties: true,
        patternProperties: true,
        dependentSchemas: true,
        propertyNames: true,
        if: true,
        then: true,
        else: true,
        allOf: true,
        anyOf: true,
        oneOf: true,
        not: true
    },
    dynamicProps: false,
    dynamicItems: false
};
var Ne = {
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
function F(t, { instancePath = "", parentData, parentDataProperty, rootData = t, dynamicAnchors = {} } = {}) {
    let r = null;
    let e = 0;
    let F_evaluated = F.evaluated;
    if (F_evaluated.dynamicProps) {
        F_evaluated.props = undefined;
    }
    if (F_evaluated.dynamicItems) {
        F_evaluated.items = undefined;
    }
    if (!(t && typeof t === "object" && !Array.isArray(t)) && typeof t !== "boolean") {
        F.errors = [
            {
                instancePath,
                schemaPath: "#/type",
                keyword: "type",
                params: {
                    type: Ne.type
                },
                message: "must be object,boolean"
            }
        ];
        return false;
    }
    if (!dynamicAnchors.meta) {
        dynamicAnchors.meta = F;
    }
    if (e === 0) {
        if (t && typeof t === "object" && !Array.isArray(t)) {
            if (t.unevaluatedItems !== undefined) {
                let m = t.unevaluatedItems;
                let N = e;
                let v = dynamicAnchors.meta;
                if (v) {
                    if (!v(m, {
                        instancePath: `${instancePath}/unevaluatedItems`,
                        parentData: t,
                        parentDataProperty: "unevaluatedItems",
                        rootData,
                        dynamicAnchors
                    })) {
                        r = r === null ? v.errors : r.concat(v.errors);
                        e = r.length;
                    } else {
                        var n = v.evaluated.props;
                        var d = v.evaluated.items;
                    }
                } else if (!F(m, {
                    instancePath: `${instancePath}/unevaluatedItems`,
                    parentData: t,
                    parentDataProperty: "unevaluatedItems",
                    rootData,
                    dynamicAnchors
                })) {
                    r = r === null ? F.errors : r.concat(F.errors);
                    e = r.length;
                } else {
                    const o = F.evaluated.props;
                    if (n !== true && o !== undefined) {
                        if (o === true) {
                            n = true;
                        } else {
                            n = n || {};
                            Object.assign(n, o);
                        }
                    }
                    const w = F.evaluated.items;
                    if (d !== true && w !== undefined) {
                        d = w === true ? true : d > w ? d : w;
                    }
                }
                var k = N === e;
            } else {
                var k = true;
            }
            if (k) {
                if (t.unevaluatedProperties !== undefined) {
                    let m = t.unevaluatedProperties;
                    let N = e;
                    let v = dynamicAnchors.meta;
                    if (v) {
                        if (!v(m, {
                            instancePath: `${instancePath}/unevaluatedProperties`,
                            parentData: t,
                            parentDataProperty: "unevaluatedProperties",
                            rootData,
                            dynamicAnchors
                        })) {
                            r = r === null ? v.errors : r.concat(v.errors);
                            e = r.length;
                        } else {
                            var I = v.evaluated.props;
                            var a = v.evaluated.items;
                        }
                    } else if (!F(m, {
                        instancePath: `${instancePath}/unevaluatedProperties`,
                        parentData: t,
                        parentDataProperty: "unevaluatedProperties",
                        rootData,
                        dynamicAnchors
                    })) {
                        r = r === null ? F.errors : r.concat(F.errors);
                        e = r.length;
                    } else {
                        const f = F.evaluated.props;
                        if (I !== true && f !== undefined) {
                            if (f === true) {
                                I = true;
                            } else {
                                I = I || {};
                                Object.assign(I, f);
                            }
                        }
                        const u = F.evaluated.items;
                        if (a !== true && u !== undefined) {
                            a = u === true ? true : a > u ? a : u;
                        }
                    }
                    var k = N === e;
                } else {
                    var k = true;
                }
            }
        }
    }
    F.errors = r;
    return e === 0;
}
F.evaluated = {
    props: {
        unevaluatedItems: true,
        unevaluatedProperties: true
    },
    dynamicProps: false,
    dynamicItems: false
};
var xe = {
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
var _e = {
    enum: [
        "array",
        "boolean",
        "integer",
        "null",
        "number",
        "object",
        "string"
    ]
};
var _default = I5t().default;
function b(t, { instancePath = "", parentData, parentDataProperty, rootData = t, dynamicAnchors = {} } = {}) {
    let r = null;
    let e = 0;
    let b_evaluated = b.evaluated;
    if (b_evaluated.dynamicProps) {
        b_evaluated.props = undefined;
    }
    if (b_evaluated.dynamicItems) {
        b_evaluated.items = undefined;
    }
    if (!(t && typeof t === "object" && !Array.isArray(t)) && typeof t !== "boolean") {
        b.errors = [
            {
                instancePath,
                schemaPath: "#/type",
                keyword: "type",
                params: {
                    type: xe.type
                },
                message: "must be object,boolean"
            }
        ];
        return false;
    }
    if (!dynamicAnchors.meta) {
        dynamicAnchors.meta = b;
    }
    if (e === 0) {
        if (t && typeof t === "object" && !Array.isArray(t)) {
            if (t.type !== undefined) {
                let a = t.type;
                let f = e;
                let u = e;
                let m = false;
                let N = e;
                if (!(a === "array" || a === "boolean" || a === "integer" || a === "null" || a === "number" || a === "object" || a === "string")) {
                    let _ = {
                        instancePath: `${instancePath}/type`,
                        schemaPath: "#/$defs/simpleTypes/enum",
                        keyword: "enum",
                        params: {
                            allowedValues: _e.enum
                        },
                        message: "must be equal to one of the allowed values"
                    };
                    if (r === null) {
                        r = [
                            _
                        ];
                    } else {
                        r.push(_);
                    }
                    e++;
                }
                var d = N === e;
                m = m || d;
                let v = e;
                if (e === v) {
                    if (Array.isArray(a)) {
                        if (a.length < 1) {
                            let _ = {
                                instancePath: `${instancePath}/type`,
                                schemaPath: "#/properties/type/anyOf/1/minItems",
                                keyword: "minItems",
                                params: {
                                    limit: 1
                                },
                                message: "must NOT have fewer than 1 items"
                            };
                            if (r === null) {
                                r = [
                                    _
                                ];
                            } else {
                                r.push(_);
                            }
                            e++;
                        } else {
                            var n = true;
                            let _ = a.length;
                            for(let j = 0; j < _; j++){
                                let g = a[j];
                                let P = e;
                                if (!(g === "array" || g === "boolean" || g === "integer" || g === "null" || g === "number" || g === "object" || g === "string")) {
                                    let M = {
                                        instancePath: `${instancePath}/type/${j}`,
                                        schemaPath: "#/$defs/simpleTypes/enum",
                                        keyword: "enum",
                                        params: {
                                            allowedValues: _e.enum
                                        },
                                        message: "must be equal to one of the allowed values"
                                    };
                                    if (r === null) {
                                        r = [
                                            M
                                        ];
                                    } else {
                                        r.push(M);
                                    }
                                    e++;
                                }
                                var n = P === e;
                                if (!n) {
                                    break;
                                }
                            }
                            if (n) {
                                let j = a.length;
                                let g;
                                if (j > 1) {
                                    e: while(j--){
                                        for(g = j; g--;){
                                            if (_default(a[j], a[g])) {
                                                let P = {
                                                    instancePath: `${instancePath}/type`,
                                                    schemaPath: "#/properties/type/anyOf/1/uniqueItems",
                                                    keyword: "uniqueItems",
                                                    params: {
                                                        i: j,
                                                        j: g
                                                    },
                                                    message: `must NOT have duplicate items (items ## ${g} and ${j} are identical)`
                                                };
                                                if (r === null) {
                                                    r = [
                                                        P
                                                    ];
                                                } else {
                                                    r.push(P);
                                                }
                                                e++;
                                                break e;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        let _ = {
                            instancePath: `${instancePath}/type`,
                            schemaPath: "#/properties/type/anyOf/1/type",
                            keyword: "type",
                            params: {
                                type: "array"
                            },
                            message: "must be array"
                        };
                        if (r === null) {
                            r = [
                                _
                            ];
                        } else {
                            r.push(_);
                        }
                        e++;
                    }
                }
                var d = v === e;
                m = m || d;
                if (!m) {
                    let _ = {
                        instancePath: `${instancePath}/type`,
                        schemaPath: "#/properties/type/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    if (r === null) {
                        r = [
                            _
                        ];
                    } else {
                        r.push(_);
                    }
                    e++;
                    b.errors = r;
                    return false;
                } else {
                    e = u;
                    if (r !== null) {
                        if (u) {
                            r.length = u;
                        } else {
                            r = null;
                        }
                    }
                }
                var o = f === e;
            } else {
                var o = true;
            }
            if (o) {
                if (t.enum !== undefined) {
                    let a = e;
                    if (e === a) {
                        if (!Array.isArray(t.enum)) {
                            b.errors = [
                                {
                                    instancePath: `${instancePath}/enum`,
                                    schemaPath: "#/properties/enum/type",
                                    keyword: "type",
                                    params: {
                                        type: "array"
                                    },
                                    message: "must be array"
                                }
                            ];
                            return false;
                        }
                    }
                    var o = a === e;
                } else {
                    var o = true;
                }
                if (o) {
                    if (t.multipleOf !== undefined) {
                        let a = t.multipleOf;
                        let f = e;
                        if (e === f) {
                            if (typeof a === "number" && isFinite(a)) {
                                if (a <= 0 || isNaN(a)) {
                                    b.errors = [
                                        {
                                            instancePath: `${instancePath}/multipleOf`,
                                            schemaPath: "#/properties/multipleOf/exclusiveMinimum",
                                            keyword: "exclusiveMinimum",
                                            params: {
                                                comparison: ">",
                                                limit: 0
                                            },
                                            message: "must be > 0"
                                        }
                                    ];
                                    return false;
                                }
                            } else {
                                b.errors = [
                                    {
                                        instancePath: `${instancePath}/multipleOf`,
                                        schemaPath: "#/properties/multipleOf/type",
                                        keyword: "type",
                                        params: {
                                            type: "number"
                                        },
                                        message: "must be number"
                                    }
                                ];
                                return false;
                            }
                        }
                        var o = f === e;
                    } else {
                        var o = true;
                    }
                    if (o) {
                        if (t.maximum !== undefined) {
                            let a = t.maximum;
                            let f = e;
                            if (!(typeof a === "number" && isFinite(a))) {
                                b.errors = [
                                    {
                                        instancePath: `${instancePath}/maximum`,
                                        schemaPath: "#/properties/maximum/type",
                                        keyword: "type",
                                        params: {
                                            type: "number"
                                        },
                                        message: "must be number"
                                    }
                                ];
                                return false;
                            }
                            var o = f === e;
                        } else {
                            var o = true;
                        }
                        if (o) {
                            if (t.exclusiveMaximum !== undefined) {
                                let a = t.exclusiveMaximum;
                                let f = e;
                                if (!(typeof a === "number" && isFinite(a))) {
                                    b.errors = [
                                        {
                                            instancePath: `${instancePath}/exclusiveMaximum`,
                                            schemaPath: "#/properties/exclusiveMaximum/type",
                                            keyword: "type",
                                            params: {
                                                type: "number"
                                            },
                                            message: "must be number"
                                        }
                                    ];
                                    return false;
                                }
                                var o = f === e;
                            } else {
                                var o = true;
                            }
                            if (o) {
                                if (t.minimum !== undefined) {
                                    let a = t.minimum;
                                    let f = e;
                                    if (!(typeof a === "number" && isFinite(a))) {
                                        b.errors = [
                                            {
                                                instancePath: `${instancePath}/minimum`,
                                                schemaPath: "#/properties/minimum/type",
                                                keyword: "type",
                                                params: {
                                                    type: "number"
                                                },
                                                message: "must be number"
                                            }
                                        ];
                                        return false;
                                    }
                                    var o = f === e;
                                } else {
                                    var o = true;
                                }
                                if (o) {
                                    if (t.exclusiveMinimum !== undefined) {
                                        let a = t.exclusiveMinimum;
                                        let f = e;
                                        if (!(typeof a === "number" && isFinite(a))) {
                                            b.errors = [
                                                {
                                                    instancePath: `${instancePath}/exclusiveMinimum`,
                                                    schemaPath: "#/properties/exclusiveMinimum/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "number"
                                                    },
                                                    message: "must be number"
                                                }
                                            ];
                                            return false;
                                        }
                                        var o = f === e;
                                    } else {
                                        var o = true;
                                    }
                                    if (o) {
                                        if (t.maxLength !== undefined) {
                                            let a = t.maxLength;
                                            let f = e;
                                            let u = e;
                                            if (!(typeof a === "number" && !(a % 1) && !isNaN(a) && isFinite(a))) {
                                                b.errors = [
                                                    {
                                                        instancePath: `${instancePath}/maxLength`,
                                                        schemaPath: "#/$defs/nonNegativeInteger/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "integer"
                                                        },
                                                        message: "must be integer"
                                                    }
                                                ];
                                                return false;
                                            }
                                            if (e === u) {
                                                if (typeof a === "number" && isFinite(a)) {
                                                    if (a < 0 || isNaN(a)) {
                                                        b.errors = [
                                                            {
                                                                instancePath: `${instancePath}/maxLength`,
                                                                schemaPath: "#/$defs/nonNegativeInteger/minimum",
                                                                keyword: "minimum",
                                                                params: {
                                                                    comparison: ">=",
                                                                    limit: 0
                                                                },
                                                                message: "must be >= 0"
                                                            }
                                                        ];
                                                        return false;
                                                    }
                                                }
                                            }
                                            var o = f === e;
                                        } else {
                                            var o = true;
                                        }
                                        if (o) {
                                            if (t.minLength !== undefined) {
                                                let a = t.minLength;
                                                let f = e;
                                                let u = e;
                                                if (!(typeof a === "number" && !(a % 1) && !isNaN(a) && isFinite(a))) {
                                                    b.errors = [
                                                        {
                                                            instancePath: `${instancePath}/minLength`,
                                                            schemaPath: "#/$defs/nonNegativeIntegerDefault0/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "integer"
                                                            },
                                                            message: "must be integer"
                                                        }
                                                    ];
                                                    return false;
                                                }
                                                if (e === u) {
                                                    if (typeof a === "number" && isFinite(a)) {
                                                        if (a < 0 || isNaN(a)) {
                                                            b.errors = [
                                                                {
                                                                    instancePath: `${instancePath}/minLength`,
                                                                    schemaPath: "#/$defs/nonNegativeIntegerDefault0/minimum",
                                                                    keyword: "minimum",
                                                                    params: {
                                                                        comparison: ">=",
                                                                        limit: 0
                                                                    },
                                                                    message: "must be >= 0"
                                                                }
                                                            ];
                                                            return false;
                                                        }
                                                    }
                                                }
                                                var o = f === e;
                                            } else {
                                                var o = true;
                                            }
                                            if (o) {
                                                if (t.pattern !== undefined) {
                                                    let a = e;
                                                    if (e === a) {
                                                        if (e === a) {
                                                            if (typeof t.pattern !== "string") {
                                                                b.errors = [
                                                                    {
                                                                        instancePath: `${instancePath}/pattern`,
                                                                        schemaPath: "#/properties/pattern/type",
                                                                        keyword: "type",
                                                                        params: {
                                                                            type: "string"
                                                                        },
                                                                        message: "must be string"
                                                                    }
                                                                ];
                                                                return false;
                                                            }
                                                        }
                                                    }
                                                    var o = a === e;
                                                } else {
                                                    var o = true;
                                                }
                                                if (o) {
                                                    if (t.maxItems !== undefined) {
                                                        let a = t.maxItems;
                                                        let f = e;
                                                        let u = e;
                                                        if (!(typeof a === "number" && !(a % 1) && !isNaN(a) && isFinite(a))) {
                                                            b.errors = [
                                                                {
                                                                    instancePath: `${instancePath}/maxItems`,
                                                                    schemaPath: "#/$defs/nonNegativeInteger/type",
                                                                    keyword: "type",
                                                                    params: {
                                                                        type: "integer"
                                                                    },
                                                                    message: "must be integer"
                                                                }
                                                            ];
                                                            return false;
                                                        }
                                                        if (e === u) {
                                                            if (typeof a === "number" && isFinite(a)) {
                                                                if (a < 0 || isNaN(a)) {
                                                                    b.errors = [
                                                                        {
                                                                            instancePath: `${instancePath}/maxItems`,
                                                                            schemaPath: "#/$defs/nonNegativeInteger/minimum",
                                                                            keyword: "minimum",
                                                                            params: {
                                                                                comparison: ">=",
                                                                                limit: 0
                                                                            },
                                                                            message: "must be >= 0"
                                                                        }
                                                                    ];
                                                                    return false;
                                                                }
                                                            }
                                                        }
                                                        var o = f === e;
                                                    } else {
                                                        var o = true;
                                                    }
                                                    if (o) {
                                                        if (t.minItems !== undefined) {
                                                            let a = t.minItems;
                                                            let f = e;
                                                            let u = e;
                                                            if (!(typeof a === "number" && !(a % 1) && !isNaN(a) && isFinite(a))) {
                                                                b.errors = [
                                                                    {
                                                                        instancePath: `${instancePath}/minItems`,
                                                                        schemaPath: "#/$defs/nonNegativeIntegerDefault0/type",
                                                                        keyword: "type",
                                                                        params: {
                                                                            type: "integer"
                                                                        },
                                                                        message: "must be integer"
                                                                    }
                                                                ];
                                                                return false;
                                                            }
                                                            if (e === u) {
                                                                if (typeof a === "number" && isFinite(a)) {
                                                                    if (a < 0 || isNaN(a)) {
                                                                        b.errors = [
                                                                            {
                                                                                instancePath: `${instancePath}/minItems`,
                                                                                schemaPath: "#/$defs/nonNegativeIntegerDefault0/minimum",
                                                                                keyword: "minimum",
                                                                                params: {
                                                                                    comparison: ">=",
                                                                                    limit: 0
                                                                                },
                                                                                message: "must be >= 0"
                                                                            }
                                                                        ];
                                                                        return false;
                                                                    }
                                                                }
                                                            }
                                                            var o = f === e;
                                                        } else {
                                                            var o = true;
                                                        }
                                                        if (o) {
                                                            if (t.uniqueItems !== undefined) {
                                                                let a = e;
                                                                if (typeof t.uniqueItems !== "boolean") {
                                                                    b.errors = [
                                                                        {
                                                                            instancePath: `${instancePath}/uniqueItems`,
                                                                            schemaPath: "#/properties/uniqueItems/type",
                                                                            keyword: "type",
                                                                            params: {
                                                                                type: "boolean"
                                                                            },
                                                                            message: "must be boolean"
                                                                        }
                                                                    ];
                                                                    return false;
                                                                }
                                                                var o = a === e;
                                                            } else {
                                                                var o = true;
                                                            }
                                                            if (o) {
                                                                if (t.maxContains !== undefined) {
                                                                    let a = t.maxContains;
                                                                    let f = e;
                                                                    let u = e;
                                                                    if (!(typeof a === "number" && !(a % 1) && !isNaN(a) && isFinite(a))) {
                                                                        b.errors = [
                                                                            {
                                                                                instancePath: `${instancePath}/maxContains`,
                                                                                schemaPath: "#/$defs/nonNegativeInteger/type",
                                                                                keyword: "type",
                                                                                params: {
                                                                                    type: "integer"
                                                                                },
                                                                                message: "must be integer"
                                                                            }
                                                                        ];
                                                                        return false;
                                                                    }
                                                                    if (e === u) {
                                                                        if (typeof a === "number" && isFinite(a)) {
                                                                            if (a < 0 || isNaN(a)) {
                                                                                b.errors = [
                                                                                    {
                                                                                        instancePath: `${instancePath}/maxContains`,
                                                                                        schemaPath: "#/$defs/nonNegativeInteger/minimum",
                                                                                        keyword: "minimum",
                                                                                        params: {
                                                                                            comparison: ">=",
                                                                                            limit: 0
                                                                                        },
                                                                                        message: "must be >= 0"
                                                                                    }
                                                                                ];
                                                                                return false;
                                                                            }
                                                                        }
                                                                    }
                                                                    var o = f === e;
                                                                } else {
                                                                    var o = true;
                                                                }
                                                                if (o) {
                                                                    if (t.minContains !== undefined) {
                                                                        let a = t.minContains;
                                                                        let f = e;
                                                                        let u = e;
                                                                        if (!(typeof a === "number" && !(a % 1) && !isNaN(a) && isFinite(a))) {
                                                                            b.errors = [
                                                                                {
                                                                                    instancePath: `${instancePath}/minContains`,
                                                                                    schemaPath: "#/$defs/nonNegativeInteger/type",
                                                                                    keyword: "type",
                                                                                    params: {
                                                                                        type: "integer"
                                                                                    },
                                                                                    message: "must be integer"
                                                                                }
                                                                            ];
                                                                            return false;
                                                                        }
                                                                        if (e === u) {
                                                                            if (typeof a === "number" && isFinite(a)) {
                                                                                if (a < 0 || isNaN(a)) {
                                                                                    b.errors = [
                                                                                        {
                                                                                            instancePath: `${instancePath}/minContains`,
                                                                                            schemaPath: "#/$defs/nonNegativeInteger/minimum",
                                                                                            keyword: "minimum",
                                                                                            params: {
                                                                                                comparison: ">=",
                                                                                                limit: 0
                                                                                            },
                                                                                            message: "must be >= 0"
                                                                                        }
                                                                                    ];
                                                                                    return false;
                                                                                }
                                                                            }
                                                                        }
                                                                        var o = f === e;
                                                                    } else {
                                                                        var o = true;
                                                                    }
                                                                    if (o) {
                                                                        if (t.maxProperties !== undefined) {
                                                                            let a = t.maxProperties;
                                                                            let f = e;
                                                                            let u = e;
                                                                            if (!(typeof a === "number" && !(a % 1) && !isNaN(a) && isFinite(a))) {
                                                                                b.errors = [
                                                                                    {
                                                                                        instancePath: `${instancePath}/maxProperties`,
                                                                                        schemaPath: "#/$defs/nonNegativeInteger/type",
                                                                                        keyword: "type",
                                                                                        params: {
                                                                                            type: "integer"
                                                                                        },
                                                                                        message: "must be integer"
                                                                                    }
                                                                                ];
                                                                                return false;
                                                                            }
                                                                            if (e === u) {
                                                                                if (typeof a === "number" && isFinite(a)) {
                                                                                    if (a < 0 || isNaN(a)) {
                                                                                        b.errors = [
                                                                                            {
                                                                                                instancePath: `${instancePath}/maxProperties`,
                                                                                                schemaPath: "#/$defs/nonNegativeInteger/minimum",
                                                                                                keyword: "minimum",
                                                                                                params: {
                                                                                                    comparison: ">=",
                                                                                                    limit: 0
                                                                                                },
                                                                                                message: "must be >= 0"
                                                                                            }
                                                                                        ];
                                                                                        return false;
                                                                                    }
                                                                                }
                                                                            }
                                                                            var o = f === e;
                                                                        } else {
                                                                            var o = true;
                                                                        }
                                                                        if (o) {
                                                                            if (t.minProperties !== undefined) {
                                                                                let a = t.minProperties;
                                                                                let f = e;
                                                                                let u = e;
                                                                                if (!(typeof a === "number" && !(a % 1) && !isNaN(a) && isFinite(a))) {
                                                                                    b.errors = [
                                                                                        {
                                                                                            instancePath: `${instancePath}/minProperties`,
                                                                                            schemaPath: "#/$defs/nonNegativeIntegerDefault0/type",
                                                                                            keyword: "type",
                                                                                            params: {
                                                                                                type: "integer"
                                                                                            },
                                                                                            message: "must be integer"
                                                                                        }
                                                                                    ];
                                                                                    return false;
                                                                                }
                                                                                if (e === u) {
                                                                                    if (typeof a === "number" && isFinite(a)) {
                                                                                        if (a < 0 || isNaN(a)) {
                                                                                            b.errors = [
                                                                                                {
                                                                                                    instancePath: `${instancePath}/minProperties`,
                                                                                                    schemaPath: "#/$defs/nonNegativeIntegerDefault0/minimum",
                                                                                                    keyword: "minimum",
                                                                                                    params: {
                                                                                                        comparison: ">=",
                                                                                                        limit: 0
                                                                                                    },
                                                                                                    message: "must be >= 0"
                                                                                                }
                                                                                            ];
                                                                                            return false;
                                                                                        }
                                                                                    }
                                                                                }
                                                                                var o = f === e;
                                                                            } else {
                                                                                var o = true;
                                                                            }
                                                                            if (o) {
                                                                                if (t.required !== undefined) {
                                                                                    let a = t.required;
                                                                                    let f = e;
                                                                                    if (e === e) {
                                                                                        if (Array.isArray(a)) {
                                                                                            var w = true;
                                                                                            let N = a.length;
                                                                                            for(let v = 0; v < N; v++){
                                                                                                let _ = e;
                                                                                                if (typeof a[v] !== "string") {
                                                                                                    b.errors = [
                                                                                                        {
                                                                                                            instancePath: `${instancePath}/required/${v}`,
                                                                                                            schemaPath: "#/$defs/stringArray/items/type",
                                                                                                            keyword: "type",
                                                                                                            params: {
                                                                                                                type: "string"
                                                                                                            },
                                                                                                            message: "must be string"
                                                                                                        }
                                                                                                    ];
                                                                                                    return false;
                                                                                                }
                                                                                                var w = _ === e;
                                                                                                if (!w) {
                                                                                                    break;
                                                                                                }
                                                                                            }
                                                                                            if (w) {
                                                                                                let v = a.length;
                                                                                                let _;
                                                                                                if (v > 1) {
                                                                                                    let j = {};
                                                                                                    while(v--){
                                                                                                        let g = a[v];
                                                                                                        if (typeof g !== "string") {
                                                                                                            continue;
                                                                                                        }
                                                                                                        if (typeof j[g] === "number") {
                                                                                                            _ = j[g];
                                                                                                            b.errors = [
                                                                                                                {
                                                                                                                    instancePath: `${instancePath}/required`,
                                                                                                                    schemaPath: "#/$defs/stringArray/uniqueItems",
                                                                                                                    keyword: "uniqueItems",
                                                                                                                    params: {
                                                                                                                        i: v,
                                                                                                                        j: _
                                                                                                                    },
                                                                                                                    message: `must NOT have duplicate items (items ## ${_} and ${v} are identical)`
                                                                                                                }
                                                                                                            ];
                                                                                                            return false;
                                                                                                            break;
                                                                                                        }
                                                                                                        j[g] = v;
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        } else {
                                                                                            b.errors = [
                                                                                                {
                                                                                                    instancePath: `${instancePath}/required`,
                                                                                                    schemaPath: "#/$defs/stringArray/type",
                                                                                                    keyword: "type",
                                                                                                    params: {
                                                                                                        type: "array"
                                                                                                    },
                                                                                                    message: "must be array"
                                                                                                }
                                                                                            ];
                                                                                            return false;
                                                                                        }
                                                                                    }
                                                                                    var o = f === e;
                                                                                } else {
                                                                                    var o = true;
                                                                                }
                                                                                if (o) {
                                                                                    if (t.dependentRequired !== undefined) {
                                                                                        let a = t.dependentRequired;
                                                                                        let f = e;
                                                                                        if (e === f) {
                                                                                            if (a && typeof a === "object" && !Array.isArray(a)) {
                                                                                                for(let m in a){
                                                                                                    let N = a[m];
                                                                                                    let v = e;
                                                                                                    if (e === e) {
                                                                                                        if (Array.isArray(N)) {
                                                                                                            var k = true;
                                                                                                            let j = N.length;
                                                                                                            for(let g = 0; g < j; g++){
                                                                                                                let P = e;
                                                                                                                if (typeof N[g] !== "string") {
                                                                                                                    b.errors = [
                                                                                                                        {
                                                                                                                            instancePath: `${instancePath}/dependentRequired/${m.replace(/~/g, "~0").replace(/\//g, "~1")}/${g}`,
                                                                                                                            schemaPath: "#/$defs/stringArray/items/type",
                                                                                                                            keyword: "type",
                                                                                                                            params: {
                                                                                                                                type: "string"
                                                                                                                            },
                                                                                                                            message: "must be string"
                                                                                                                        }
                                                                                                                    ];
                                                                                                                    return false;
                                                                                                                }
                                                                                                                var k = P === e;
                                                                                                                if (!k) {
                                                                                                                    break;
                                                                                                                }
                                                                                                            }
                                                                                                            if (k) {
                                                                                                                let g = N.length;
                                                                                                                let P;
                                                                                                                if (g > 1) {
                                                                                                                    let S = {};
                                                                                                                    while(g--){
                                                                                                                        let M = N[g];
                                                                                                                        if (typeof M !== "string") {
                                                                                                                            continue;
                                                                                                                        }
                                                                                                                        if (typeof S[M] === "number") {
                                                                                                                            P = S[M];
                                                                                                                            b.errors = [
                                                                                                                                {
                                                                                                                                    instancePath: `${instancePath}/dependentRequired/${m.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                                                                                                                    schemaPath: "#/$defs/stringArray/uniqueItems",
                                                                                                                                    keyword: "uniqueItems",
                                                                                                                                    params: {
                                                                                                                                        i: g,
                                                                                                                                        j: P
                                                                                                                                    },
                                                                                                                                    message: `must NOT have duplicate items (items ## ${P} and ${g} are identical)`
                                                                                                                                }
                                                                                                                            ];
                                                                                                                            return false;
                                                                                                                            break;
                                                                                                                        }
                                                                                                                        S[M] = g;
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        } else {
                                                                                                            b.errors = [
                                                                                                                {
                                                                                                                    instancePath: `${instancePath}/dependentRequired/${m.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                                                                                                    schemaPath: "#/$defs/stringArray/type",
                                                                                                                    keyword: "type",
                                                                                                                    params: {
                                                                                                                        type: "array"
                                                                                                                    },
                                                                                                                    message: "must be array"
                                                                                                                }
                                                                                                            ];
                                                                                                            return false;
                                                                                                        }
                                                                                                    }
                                                                                                    const I = v === e;
                                                                                                    if (!I) {
                                                                                                        break;
                                                                                                    }
                                                                                                }
                                                                                            } else {
                                                                                                b.errors = [
                                                                                                    {
                                                                                                        instancePath: `${instancePath}/dependentRequired`,
                                                                                                        schemaPath: "#/properties/dependentRequired/type",
                                                                                                        keyword: "type",
                                                                                                        params: {
                                                                                                            type: "object"
                                                                                                        },
                                                                                                        message: "must be object"
                                                                                                    }
                                                                                                ];
                                                                                                return false;
                                                                                            }
                                                                                        }
                                                                                        var o = f === e;
                                                                                    } else {
                                                                                        var o = true;
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    b.errors = r;
    return e === 0;
}
b.evaluated = {
    props: {
        type: true,
        const: true,
        enum: true,
        multipleOf: true,
        maximum: true,
        exclusiveMaximum: true,
        minimum: true,
        exclusiveMinimum: true,
        maxLength: true,
        minLength: true,
        pattern: true,
        maxItems: true,
        minItems: true,
        uniqueItems: true,
        maxContains: true,
        minContains: true,
        maxProperties: true,
        minProperties: true,
        required: true,
        dependentRequired: true
    },
    dynamicProps: false,
    dynamicItems: false
};
var De = {
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
function L(t, { instancePath = "", parentData, parentDataProperty, rootData = t, dynamicAnchors = {} } = {}) {
    let r = null;
    let e = 0;
    let L_evaluated = L.evaluated;
    if (L_evaluated.dynamicProps) {
        L_evaluated.props = undefined;
    }
    if (L_evaluated.dynamicItems) {
        L_evaluated.items = undefined;
    }
    if (!(t && typeof t === "object" && !Array.isArray(t)) && typeof t !== "boolean") {
        L.errors = [
            {
                instancePath,
                schemaPath: "#/type",
                keyword: "type",
                params: {
                    type: De.type
                },
                message: "must be object,boolean"
            }
        ];
        return false;
    }
    if (!dynamicAnchors.meta) {
        dynamicAnchors.meta = L;
    }
    if (e === 0) {
        if (t && typeof t === "object" && !Array.isArray(t)) {
            if (t.title !== undefined) {
                let d = e;
                if (typeof t.title !== "string") {
                    L.errors = [
                        {
                            instancePath: `${instancePath}/title`,
                            schemaPath: "#/properties/title/type",
                            keyword: "type",
                            params: {
                                type: "string"
                            },
                            message: "must be string"
                        }
                    ];
                    return false;
                }
                var n = d === e;
            } else {
                var n = true;
            }
            if (n) {
                if (t.description !== undefined) {
                    let d = e;
                    if (typeof t.description !== "string") {
                        L.errors = [
                            {
                                instancePath: `${instancePath}/description`,
                                schemaPath: "#/properties/description/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }
                        ];
                        return false;
                    }
                    var n = d === e;
                } else {
                    var n = true;
                }
                if (n) {
                    if (t.deprecated !== undefined) {
                        let d = e;
                        if (typeof t.deprecated !== "boolean") {
                            L.errors = [
                                {
                                    instancePath: `${instancePath}/deprecated`,
                                    schemaPath: "#/properties/deprecated/type",
                                    keyword: "type",
                                    params: {
                                        type: "boolean"
                                    },
                                    message: "must be boolean"
                                }
                            ];
                            return false;
                        }
                        var n = d === e;
                    } else {
                        var n = true;
                    }
                    if (n) {
                        if (t.readOnly !== undefined) {
                            let d = e;
                            if (typeof t.readOnly !== "boolean") {
                                L.errors = [
                                    {
                                        instancePath: `${instancePath}/readOnly`,
                                        schemaPath: "#/properties/readOnly/type",
                                        keyword: "type",
                                        params: {
                                            type: "boolean"
                                        },
                                        message: "must be boolean"
                                    }
                                ];
                                return false;
                            }
                            var n = d === e;
                        } else {
                            var n = true;
                        }
                        if (n) {
                            if (t.writeOnly !== undefined) {
                                let d = e;
                                if (typeof t.writeOnly !== "boolean") {
                                    L.errors = [
                                        {
                                            instancePath: `${instancePath}/writeOnly`,
                                            schemaPath: "#/properties/writeOnly/type",
                                            keyword: "type",
                                            params: {
                                                type: "boolean"
                                            },
                                            message: "must be boolean"
                                        }
                                    ];
                                    return false;
                                }
                                var n = d === e;
                            } else {
                                var n = true;
                            }
                            if (n) {
                                if (t.examples !== undefined) {
                                    let d = e;
                                    if (e === d) {
                                        if (!Array.isArray(t.examples)) {
                                            L.errors = [
                                                {
                                                    instancePath: `${instancePath}/examples`,
                                                    schemaPath: "#/properties/examples/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "array"
                                                    },
                                                    message: "must be array"
                                                }
                                            ];
                                            return false;
                                        }
                                    }
                                    var n = d === e;
                                } else {
                                    var n = true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    L.errors = r;
    return e === 0;
}
L.evaluated = {
    props: {
        title: true,
        description: true,
        default: true,
        deprecated: true,
        readOnly: true,
        writeOnly: true,
        examples: true
    },
    dynamicProps: false,
    dynamicItems: false
};
var Re = {
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
function X(t, { instancePath = "", parentData, parentDataProperty, rootData = t, dynamicAnchors = {} } = {}) {
    let r = null;
    let e = 0;
    let X_evaluated = X.evaluated;
    if (X_evaluated.dynamicProps) {
        X_evaluated.props = undefined;
    }
    if (X_evaluated.dynamicItems) {
        X_evaluated.items = undefined;
    }
    if (!(t && typeof t === "object" && !Array.isArray(t)) && typeof t !== "boolean") {
        X.errors = [
            {
                instancePath,
                schemaPath: "#/type",
                keyword: "type",
                params: {
                    type: Re.type
                },
                message: "must be object,boolean"
            }
        ];
        return false;
    }
    if (!dynamicAnchors.meta) {
        dynamicAnchors.meta = X;
    }
    if (e === 0) {
        if (t && typeof t === "object" && !Array.isArray(t)) {
            if (t.format !== undefined) {
                if (typeof t.format !== "string") {
                    X.errors = [
                        {
                            instancePath: `${instancePath}/format`,
                            schemaPath: "#/properties/format/type",
                            keyword: "type",
                            params: {
                                type: "string"
                            },
                            message: "must be string"
                        }
                    ];
                    return false;
                }
            }
        }
    }
    X.errors = r;
    return e === 0;
}
X.evaluated = {
    props: {
        format: true
    },
    dynamicProps: false,
    dynamicItems: false
};
var Ae = {
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
function C(t, { instancePath = "", parentData, parentDataProperty, rootData = t, dynamicAnchors = {} } = {}) {
    let r = null;
    let e = 0;
    let C_evaluated = C.evaluated;
    if (C_evaluated.dynamicProps) {
        C_evaluated.props = undefined;
    }
    if (C_evaluated.dynamicItems) {
        C_evaluated.items = undefined;
    }
    if (!(t && typeof t === "object" && !Array.isArray(t)) && typeof t !== "boolean") {
        C.errors = [
            {
                instancePath,
                schemaPath: "#/type",
                keyword: "type",
                params: {
                    type: Ae.type
                },
                message: "must be object,boolean"
            }
        ];
        return false;
    }
    if (!dynamicAnchors.meta) {
        dynamicAnchors.meta = C;
    }
    if (e === 0) {
        if (t && typeof t === "object" && !Array.isArray(t)) {
            if (t.contentEncoding !== undefined) {
                let I = e;
                if (typeof t.contentEncoding !== "string") {
                    C.errors = [
                        {
                            instancePath: `${instancePath}/contentEncoding`,
                            schemaPath: "#/properties/contentEncoding/type",
                            keyword: "type",
                            params: {
                                type: "string"
                            },
                            message: "must be string"
                        }
                    ];
                    return false;
                }
                var n = I === e;
            } else {
                var n = true;
            }
            if (n) {
                if (t.contentMediaType !== undefined) {
                    let I = e;
                    if (typeof t.contentMediaType !== "string") {
                        C.errors = [
                            {
                                instancePath: `${instancePath}/contentMediaType`,
                                schemaPath: "#/properties/contentMediaType/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }
                        ];
                        return false;
                    }
                    var n = I === e;
                } else {
                    var n = true;
                }
                if (n) {
                    if (t.contentSchema !== undefined) {
                        let I = t.contentSchema;
                        let a = e;
                        let f = dynamicAnchors.meta;
                        if (f) {
                            if (!f(I, {
                                instancePath: `${instancePath}/contentSchema`,
                                parentData: t,
                                parentDataProperty: "contentSchema",
                                rootData,
                                dynamicAnchors
                            })) {
                                r = r === null ? f.errors : r.concat(f.errors);
                                e = r.length;
                            } else {
                                var d = f.evaluated.props;
                                var o = f.evaluated.items;
                            }
                        } else if (!C(I, {
                            instancePath: `${instancePath}/contentSchema`,
                            parentData: t,
                            parentDataProperty: "contentSchema",
                            rootData,
                            dynamicAnchors
                        })) {
                            r = r === null ? C.errors : r.concat(C.errors);
                            e = r.length;
                        } else {
                            const w = C.evaluated.props;
                            if (d !== true && w !== undefined) {
                                if (w === true) {
                                    d = true;
                                } else {
                                    d = d || {};
                                    Object.assign(d, w);
                                }
                            }
                            const k = C.evaluated.items;
                            if (o !== true && k !== undefined) {
                                o = k === true ? true : o > k ? o : k;
                            }
                        }
                        var n = a === e;
                    } else {
                        var n = true;
                    }
                }
            }
        }
    }
    C.errors = r;
    return e === 0;
}
C.evaluated = {
    props: {
        contentEncoding: true,
        contentMediaType: true,
        contentSchema: true
    },
    dynamicProps: false,
    dynamicItems: false
};
function D(t, { instancePath = "", parentData, parentDataProperty, rootData = t, dynamicAnchors = {} } = {}) {
    let r = null;
    let e = 0;
    let D_evaluated = D.evaluated;
    if (D_evaluated.dynamicProps) {
        D_evaluated.props = undefined;
    }
    if (D_evaluated.dynamicItems) {
        D_evaluated.items = undefined;
    }
    if (!(t && typeof t === "object" && !Array.isArray(t)) && typeof t !== "boolean") {
        D.errors = [
            {
                instancePath,
                schemaPath: "#/type",
                keyword: "type",
                params: {
                    type: je.type
                },
                message: "must be object,boolean"
            }
        ];
        return false;
    }
    if (!dynamicAnchors.meta) {
        dynamicAnchors.meta = D;
    }
    let n = e;
    if (!x(t, {
        instancePath,
        parentData,
        parentDataProperty,
        rootData,
        dynamicAnchors
    })) {
        r = r === null ? x.errors : r.concat(x.errors);
        e = r.length;
    }
    var d = n === e;
    if (d) {
        let P = e;
        if (!l(t, {
            instancePath,
            parentData,
            parentDataProperty,
            rootData,
            dynamicAnchors
        })) {
            r = r === null ? l.errors : r.concat(l.errors);
            e = r.length;
        }
        var d = P === e;
        if (d) {
            let M = e;
            if (!F(t, {
                instancePath,
                parentData,
                parentDataProperty,
                rootData,
                dynamicAnchors
            })) {
                r = r === null ? F.errors : r.concat(F.errors);
                e = r.length;
            }
            var d = M === e;
            if (d) {
                let T = e;
                if (!b(t, {
                    instancePath,
                    parentData,
                    parentDataProperty,
                    rootData,
                    dynamicAnchors
                })) {
                    r = r === null ? b.errors : r.concat(b.errors);
                    e = r.length;
                }
                var d = T === e;
                if (d) {
                    let Q = e;
                    if (!L(t, {
                        instancePath,
                        parentData,
                        parentDataProperty,
                        rootData,
                        dynamicAnchors
                    })) {
                        r = r === null ? L.errors : r.concat(L.errors);
                        e = r.length;
                    }
                    var d = Q === e;
                    if (d) {
                        let ae = e;
                        if (!X(t, {
                            instancePath,
                            parentData,
                            parentDataProperty,
                            rootData,
                            dynamicAnchors
                        })) {
                            r = r === null ? X.errors : r.concat(X.errors);
                            e = r.length;
                        }
                        var d = ae === e;
                        if (d) {
                            let Y = e;
                            if (!C(t, {
                                instancePath,
                                parentData,
                                parentDataProperty,
                                rootData,
                                dynamicAnchors
                            })) {
                                r = r === null ? C.errors : r.concat(C.errors);
                                e = r.length;
                            }
                            var d = Y === e;
                        }
                    }
                }
            }
        }
    }
    if (e === 0) {
        if (t && typeof t === "object" && !Array.isArray(t)) {
            if (t.definitions !== undefined) {
                let P = t.definitions;
                let S = e;
                if (e === S) {
                    if (P && typeof P === "object" && !Array.isArray(P)) {
                        for(let M in P){
                            let Z = P[M];
                            let T = e;
                            let V = dynamicAnchors.meta;
                            if (V) {
                                if (!V(Z, {
                                    instancePath: `${instancePath}/definitions/${M.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                    parentData: P,
                                    parentDataProperty: M,
                                    rootData,
                                    dynamicAnchors
                                })) {
                                    r = r === null ? V.errors : r.concat(V.errors);
                                    e = r.length;
                                } else {
                                    var o = V.evaluated.props;
                                    var w = V.evaluated.items;
                                }
                            } else if (!D(Z, {
                                instancePath: `${instancePath}/definitions/${M.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                parentData: P,
                                parentDataProperty: M,
                                rootData,
                                dynamicAnchors
                            })) {
                                r = r === null ? D.errors : r.concat(D.errors);
                                e = r.length;
                            } else {
                                const k = D.evaluated.props;
                                if (o !== true && k !== undefined) {
                                    if (k === true) {
                                        o = true;
                                    } else {
                                        o = o || {};
                                        Object.assign(o, k);
                                    }
                                }
                                const I = D.evaluated.items;
                                if (w !== true && I !== undefined) {
                                    w = I === true ? true : w > I ? w : I;
                                }
                            }
                            const a = T === e;
                            if (!a) {
                                break;
                            }
                        }
                    } else {
                        D.errors = [
                            {
                                instancePath: `${instancePath}/definitions`,
                                schemaPath: "#/properties/definitions/type",
                                keyword: "type",
                                params: {
                                    type: "object"
                                },
                                message: "must be object"
                            }
                        ];
                        return false;
                    }
                }
                var f = S === e;
            } else {
                var f = true;
            }
            if (f) {
                if (t.dependencies !== undefined) {
                    let P = t.dependencies;
                    let S = e;
                    if (e === S) {
                        if (P && typeof P === "object" && !Array.isArray(P)) {
                            for(let Z in P){
                                let T = P[Z];
                                let V = e;
                                let Q = e;
                                let K = false;
                                let ae = e;
                                let B = dynamicAnchors.meta;
                                if (B) {
                                    if (!B(T, {
                                        instancePath: `${instancePath}/dependencies/${Z.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                        parentData: P,
                                        parentDataProperty: Z,
                                        rootData,
                                        dynamicAnchors
                                    })) {
                                        r = r === null ? B.errors : r.concat(B.errors);
                                        e = r.length;
                                    } else {
                                        var u = B.evaluated.props;
                                        var m = B.evaluated.items;
                                    }
                                } else if (!D(T, {
                                    instancePath: `${instancePath}/dependencies/${Z.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                    parentData: P,
                                    parentDataProperty: Z,
                                    rootData,
                                    dynamicAnchors
                                })) {
                                    r = r === null ? D.errors : r.concat(D.errors);
                                    e = r.length;
                                } else {
                                    const N = D.evaluated.props;
                                    if (u !== true && N !== undefined) {
                                        if (N === true) {
                                            u = true;
                                        } else {
                                            u = u || {};
                                            Object.assign(u, N);
                                        }
                                    }
                                    const v = D.evaluated.items;
                                    if (m !== true && v !== undefined) {
                                        m = v === true ? true : m > v ? m : v;
                                    }
                                }
                                var j = ae === e;
                                K = K || j;
                                let Y = e;
                                if (e === e) {
                                    if (Array.isArray(T)) {
                                        var _ = true;
                                        let G = T.length;
                                        for(let U = 0; U < G; U++){
                                            let H = e;
                                            if (typeof T[U] !== "string") {
                                                let J = {
                                                    instancePath: `${instancePath}/dependencies/${Z.replace(/~/g, "~0").replace(/\//g, "~1")}/${U}`,
                                                    schemaPath: "meta/validation#/$defs/stringArray/items/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                };
                                                if (r === null) {
                                                    r = [
                                                        J
                                                    ];
                                                } else {
                                                    r.push(J);
                                                }
                                                e++;
                                            }
                                            var _ = H === e;
                                            if (!_) {
                                                break;
                                            }
                                        }
                                        if (_) {
                                            let U = T.length;
                                            let H;
                                            if (U > 1) {
                                                let ee = {};
                                                while(U--){
                                                    let J = T[U];
                                                    if (typeof J !== "string") {
                                                        continue;
                                                    }
                                                    if (typeof ee[J] === "number") {
                                                        H = ee[J];
                                                        let te = {
                                                            instancePath: `${instancePath}/dependencies/${Z.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                                            schemaPath: "meta/validation#/$defs/stringArray/uniqueItems",
                                                            keyword: "uniqueItems",
                                                            params: {
                                                                i: U,
                                                                j: H
                                                            },
                                                            message: `must NOT have duplicate items (items ## ${H} and ${U} are identical)`
                                                        };
                                                        if (r === null) {
                                                            r = [
                                                                te
                                                            ];
                                                        } else {
                                                            r.push(te);
                                                        }
                                                        e++;
                                                        break;
                                                    }
                                                    ee[J] = U;
                                                }
                                            }
                                        }
                                    } else {
                                        let G = {
                                            instancePath: `${instancePath}/dependencies/${Z.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                            schemaPath: "meta/validation#/$defs/stringArray/type",
                                            keyword: "type",
                                            params: {
                                                type: "array"
                                            },
                                            message: "must be array"
                                        };
                                        if (r === null) {
                                            r = [
                                                G
                                            ];
                                        } else {
                                            r.push(G);
                                        }
                                        e++;
                                    }
                                }
                                var j = Y === e;
                                K = K || j;
                                if (j) {
                                    if (m !== true) {
                                        m = true;
                                    }
                                }
                                if (!K) {
                                    let G = {
                                        instancePath: `${instancePath}/dependencies/${Z.replace(/~/g, "~0").replace(/\//g, "~1")}`,
                                        schemaPath: "#/properties/dependencies/additionalProperties/anyOf",
                                        keyword: "anyOf",
                                        params: {},
                                        message: "must match a schema in anyOf"
                                    };
                                    if (r === null) {
                                        r = [
                                            G
                                        ];
                                    } else {
                                        r.push(G);
                                    }
                                    e++;
                                    D.errors = r;
                                    return false;
                                } else {
                                    e = Q;
                                    if (r !== null) {
                                        if (Q) {
                                            r.length = Q;
                                        } else {
                                            r = null;
                                        }
                                    }
                                }
                                const g = V === e;
                                if (!g) {
                                    break;
                                }
                            }
                        } else {
                            D.errors = [
                                {
                                    instancePath: `${instancePath}/dependencies`,
                                    schemaPath: "#/properties/dependencies/type",
                                    keyword: "type",
                                    params: {
                                        type: "object"
                                    },
                                    message: "must be object"
                                }
                            ];
                            return false;
                        }
                    }
                    var f = S === e;
                } else {
                    var f = true;
                }
                if (f) {
                    if (t.$recursiveAnchor !== undefined) {
                        let P = t.$recursiveAnchor;
                        let S = e;
                        if (e === e) {
                            if (typeof P === "string") {
                                if (!Pe.test(P)) {
                                    D.errors = [
                                        {
                                            instancePath: `${instancePath}/\$recursiveAnchor`,
                                            schemaPath: "meta/core#/$defs/anchorString/pattern",
                                            keyword: "pattern",
                                            params: {
                                                pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
                                            },
                                            message: 'must match pattern "^[A-Za-z_][-A-Za-z0-9._]*$"'
                                        }
                                    ];
                                    return false;
                                }
                            } else {
                                D.errors = [
                                    {
                                        instancePath: `${instancePath}/\$recursiveAnchor`,
                                        schemaPath: "meta/core#/$defs/anchorString/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }
                                ];
                                return false;
                            }
                        }
                        var f = S === e;
                    } else {
                        var f = true;
                    }
                    if (f) {
                        if (t.$recursiveRef !== undefined) {
                            let P = e;
                            let S = e;
                            if (e === S) {
                                if (e === S) {
                                    if (typeof t.$recursiveRef !== "string") {
                                        D.errors = [
                                            {
                                                instancePath: `${instancePath}/\$recursiveRef`,
                                                schemaPath: "meta/core#/$defs/uriReferenceString/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }
                                        ];
                                        return false;
                                    }
                                }
                            }
                            var f = P === e;
                        } else {
                            var f = true;
                        }
                    }
                }
            }
        }
    }
    D.errors = r;
    return e === 0;
}
D.evaluated = {
    props: {
        definitions: true,
        dependencies: true,
        $recursiveAnchor: true,
        $recursiveRef: true,
        contentEncoding: true,
        contentMediaType: true,
        contentSchema: true,
        format: true,
        title: true,
        description: true,
        default: true,
        deprecated: true,
        readOnly: true,
        writeOnly: true,
        examples: true,
        type: true,
        const: true,
        enum: true,
        multipleOf: true,
        maximum: true,
        exclusiveMaximum: true,
        minimum: true,
        exclusiveMinimum: true,
        maxLength: true,
        minLength: true,
        pattern: true,
        maxItems: true,
        minItems: true,
        uniqueItems: true,
        maxContains: true,
        minContains: true,
        maxProperties: true,
        minProperties: true,
        required: true,
        dependentRequired: true,
        unevaluatedItems: true,
        unevaluatedProperties: true,
        prefixItems: true,
        items: true,
        contains: true,
        additionalProperties: true,
        properties: true,
        patternProperties: true,
        dependentSchemas: true,
        propertyNames: true,
        if: true,
        then: true,
        else: true,
        allOf: true,
        anyOf: true,
        oneOf: true,
        not: true,
        $id: true,
        $schema: true,
        $ref: true,
        $anchor: true,
        $dynamicRef: true,
        $dynamicAnchor: true,
        $vocabulary: true,
        $comment: true,
        $defs: true
    },
    dynamicProps: false,
    dynamicItems: false
};
export { qe as default };
