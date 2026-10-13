import { Ae } from "./Ae.js";
import { fo } from "./fo.js";
import { te } from "./te.js";
let __wakaru_pu_cache;
export function pu() {
    if (__wakaru_pu_cache) {
        return __wakaru_pu_cache;
    }
    const e = {};
    __wakaru_pu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.boolOrEmptySchema = e.topBoolOrEmptySchema = undefined;
    let t = fo();
    let r = te();
    let s = Ae();
    let a = {
        message: "boolean schema is false"
    };
    function n(c) {
        let { gen, schema, validateName } = c;
        if (schema === false) {
            l(c, false);
        } else if (typeof schema === "object" && schema.$async === true) {
            gen.return(s.default.data);
        } else {
            gen.assign(r._`${validateName}.errors`, null);
            gen.return(true);
        }
    }
    e.topBoolOrEmptySchema = n;
    function i(c, d) {
        let { gen, schema } = c;
        if (schema === false) {
            gen.var(d, false);
            l(c);
        } else {
            gen.var(d, true);
        }
    }
    e.boolOrEmptySchema = i;
    function l(it, d) {
        let { gen, data } = it;
        let w = {
            gen,
            keyword: "false schema",
            data,
            schema: false,
            schemaCode: false,
            schemaValue: false,
            params: {},
            it
        };
        t.reportError(w, a, undefined, d);
    }
    return e;
}
