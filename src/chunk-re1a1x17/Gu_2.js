import { te } from "./te.js";
let __wakaru_Gu_cache;
export function Gu() {
    if (__wakaru_Gu_cache) {
        return __wakaru_Gu_cache;
    }
    const e = {};
    __wakaru_Gu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = te();
    let r = {
        keyword: "format",
        type: [
            "number",
            "string"
        ],
        schemaType: "string",
        $data: true,
        error: {
            message: ({ schemaCode })=>t.str`must match format "${schemaCode}"`,
            params: ({ schemaCode })=>t._`{format: ${schemaCode}}`
        },
        code (s, a) {
            let { gen, data, $data, schema, schemaCode, it } = s;
            let { opts, errSchemaPath, schemaEnv, self } = it;
            if (!opts.validateFormats) {
                return;
            }
            if ($data) {
                v();
            } else {
                p();
            }
            function v() {
                let h = gen.scopeValue("formats", {
                    ref: self.formats,
                    code: opts.code.formats
                });
                let g = gen.const("fDef", t._`${h}[${schemaCode}]`);
                let f = gen.let("fType");
                let R = gen.let("format");
                gen.if(t._`typeof ${g} == "object" && !(${g} instanceof RegExp)`, ()=>gen.assign(f, t._`${g}.type || "string"`).assign(R, t._`${g}.validate`), ()=>gen.assign(f, t._`"string"`).assign(R, g));
                s.fail$data(t.or(C(), b()));
                function C() {
                    if (opts.strictSchema === false) {
                        return t.nil;
                    }
                    return t._`${schemaCode} && !${R}`;
                }
                function b() {
                    let S = schemaEnv.$async ? t._`(${g}.async ? await ${R}(${data}) : ${R}(${data}))` : t._`${R}(${data})`;
                    let k = t._`(typeof ${R} == "function" ? ${S} : ${R}.test(${data}))`;
                    return t._`${R} && ${R} !== true && ${f} === ${a} && !${k}`;
                }
            }
            function p() {
                let h = self.formats[schema];
                if (!h) {
                    C();
                    return;
                }
                if (h === true) {
                    return;
                }
                let [g, f, R] = b(h);
                if (g === a) {
                    s.pass(S());
                }
                function C() {
                    if (opts.strictSchema === false) {
                        self.logger.warn(k());
                        return;
                    }
                    throw Error(k());
                    function k() {
                        return `unknown format "${schema}" ignored in schema at path "${errSchemaPath}"`;
                    }
                }
                function b(ref) {
                    let code = ref instanceof RegExp ? t.regexpCode(ref) : opts.code.formats ? t._`${opts.code.formats}${t.getProperty(schema)}` : undefined;
                    let K = gen.scopeValue("formats", {
                        key: schema,
                        ref,
                        code
                    });
                    if (typeof ref === "object" && !(ref instanceof RegExp)) {
                        return [
                            ref.type || "string",
                            ref.validate,
                            t._`${K}.validate`
                        ];
                    }
                    return [
                        "string",
                        ref,
                        K
                    ];
                }
                function S() {
                    if (typeof h === "object" && !(h instanceof RegExp) && h.async) {
                        if (!schemaEnv.$async) {
                            throw Error("async format in sync schema");
                        }
                        return t._`await ${R}(${data})`;
                    }
                    if (typeof f === "function") {
                        return t._`${R}(${data})`;
                    }
                    return t._`${R}.test(${data})`;
                }
            }
        }
    };
    e.default = r;
    return e;
}
