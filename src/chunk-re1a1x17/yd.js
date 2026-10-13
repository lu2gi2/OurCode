import { Gi } from "./Gi.js";
import { te } from "./te.js";
let __wakaru_yd_cache;
export function yd() {
    if (__wakaru_yd_cache) {
        return __wakaru_yd_cache;
    }
    const e = {};
    __wakaru_yd_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.formatLimitDefinition = undefined;
    let t = Gi();
    let r = te();
    let r_operators = r.operators;
    let a = {
        formatMaximum: {
            okStr: "<=",
            ok: r_operators.LTE,
            fail: r_operators.GT
        },
        formatMinimum: {
            okStr: ">=",
            ok: r_operators.GTE,
            fail: r_operators.LT
        },
        formatExclusiveMaximum: {
            okStr: "<",
            ok: r_operators.LT,
            fail: r_operators.GTE
        },
        formatExclusiveMinimum: {
            okStr: ">",
            ok: r_operators.GT,
            fail: r_operators.LTE
        }
    };
    let error = {
        message: ({ keyword, schemaCode })=>r.str`should be ${a[keyword].okStr} ${schemaCode}`,
        params: ({ keyword, schemaCode })=>r._`{comparison: ${a[keyword].okStr}, limit: ${schemaCode}}`
    };
    e.formatLimitDefinition = {
        keyword: Object.keys(a),
        type: "string",
        schemaType: "string",
        $data: true,
        error,
        code (l) {
            let { gen, data, schemaCode, keyword, it } = l;
            let { opts, self } = it;
            if (!opts.validateFormats) {
                return;
            }
            let v = new t.KeywordCxt(it, self.RULES.all.format.definition, "format");
            if (v.$data) {
                p();
            } else {
                h();
            }
            function p() {
                let f = gen.scopeValue("formats", {
                    ref: self.formats,
                    code: opts.code.formats
                });
                let R = gen.const("fmt", r._`${f}[${v.schemaCode}]`);
                l.fail$data(r.or(r._`typeof ${R} != "object"`, r._`${R} instanceof RegExp`, r._`typeof ${R}.compare != "function"`, g(R)));
            }
            function h() {
                let v_schema = v.schema;
                let ref = self.formats[v_schema];
                if (!ref || ref === true) {
                    return;
                }
                if (typeof ref !== "object" || ref instanceof RegExp || typeof ref.compare !== "function") {
                    throw Error(`"${keyword}": format "${v_schema}" does not define "compare" function`);
                }
                let C = gen.scopeValue("formats", {
                    key: v_schema,
                    ref,
                    code: opts.code.formats ? r._`${opts.code.formats}${r.getProperty(v_schema)}` : undefined
                });
                l.fail$data(g(C));
            }
            function g(f) {
                return r._`${f}.compare(${data}, ${schemaCode}) ${a[keyword].fail} 0`;
            }
        },
        dependencies: [
            "format"
        ]
    };
    let i = (l)=>{
        l.addKeyword(e.formatLimitDefinition);
        return l;
    };
    e.default = i;
    return e;
}
