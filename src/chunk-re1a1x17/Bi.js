import { Ae } from "./Ae.js";
import { _o } from "./_o.js";
import { fn } from "./fn.js";
import { te } from "./te.js";
let __wakaru_Bi_cache;
export function Bi() {
    if (__wakaru_Bi_cache) {
        return __wakaru_Bi_cache;
    }
    const e = {};
    __wakaru_Bi_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.dynamicAnchor = undefined;
    let t = te();
    let r = Ae();
    let s = _o();
    let a = fn();
    let n = {
        keyword: "$dynamicAnchor",
        schemaType: "string",
        code: (c)=>i(c, c.schema)
    };
    function i(c, d) {
        let { gen, it } = c;
        it.schemaEnv.root.dynamicAnchors[d] = true;
        let w = t._`${r.default.dynamicAnchors}${t.getProperty(d)}`;
        let P = it.errSchemaPath === "#" ? it.validateName : l(c);
        gen.if(t._`!${w}`, ()=>gen.assign(w, P));
    }
    e.dynamicAnchor = i;
    function l(c) {
        let { schemaEnv, schema, self } = c.it;
        let { root, baseId, localRefs, meta } = schemaEnv.root;
        let { schemaId } = self.opts;
        let h = new s.SchemaEnv({
            schema,
            schemaId,
            root,
            baseId,
            localRefs,
            meta
        });
        s.compileSchema.call(self, h);
        return a.getValidate(c, h);
    }
    e.default = n;
    return e;
}
