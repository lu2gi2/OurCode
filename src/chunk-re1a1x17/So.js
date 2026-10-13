import { Mi } from "./Mi.js";
import { _u } from "./_u.js";
import { ne } from "./ne.js";
let __wakaru_So_cache;
export function So() {
    if (__wakaru_So_cache) {
        return __wakaru_So_cache;
    }
    const e = {};
    __wakaru_So_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.getSchemaRefs = e.resolveUrl = e.normalizeId = e._getFullPath = e.getFullPath = e.inlineRef = undefined;
    let t = ne();
    let r = Mi();
    let s = _u();
    let a = new Set([
        "type",
        "format",
        "pattern",
        "maxLength",
        "minLength",
        "maxProperties",
        "minProperties",
        "maxItems",
        "minItems",
        "maximum",
        "minimum",
        "uniqueItems",
        "multipleOf",
        "required",
        "enum",
        "const"
    ]);
    function n(p, h = true) {
        if (typeof p === "boolean") {
            return true;
        }
        if (h === true) {
            return !l(p);
        }
        if (!h) {
            return false;
        }
        return c(p) <= h;
    }
    e.inlineRef = n;
    let i = new Set([
        "$ref",
        "$recursiveRef",
        "$recursiveAnchor",
        "$dynamicRef",
        "$dynamicAnchor"
    ]);
    function l(p) {
        for(let h in p){
            if (i.has(h)) {
                return true;
            }
            let g = p[h];
            if (Array.isArray(g) && g.some(l)) {
                return true;
            }
            if (typeof g === "object" && l(g)) {
                return true;
            }
        }
        return false;
    }
    function c(p) {
        let h = 0;
        for(let g in p){
            if (g === "$ref") {
                return Infinity;
            }
            h++;
            if (a.has(g)) {
                continue;
            }
            if (typeof p[g] === "object") {
                t.eachItem(p[g], (f)=>h += c(f));
            }
            if (h === Infinity) {
                return Infinity;
            }
        }
        return h;
    }
    function d(p, h = "", g) {
        if (g !== false) {
            h = w(h);
        }
        return m(p, p.parse(h));
    }
    e.getFullPath = d;
    function m(p, h) {
        return `${p.serialize(h).split("#")[0]}#`;
    }
    e._getFullPath = m;
    let _ = /#\/?$/;
    function w(p) {
        if (p) {
            return p.replace(_, "");
        }
        return "";
    }
    e.normalizeId = w;
    function P(p, h, g) {
        g = w(g);
        return p.resolve(h, g);
    }
    e.resolveUrl = P;
    let y = /^[a-z_][-a-z0-9._]*$/i;
    function v(p, h) {
        if (typeof p === "boolean") {
            return {};
        }
        let { schemaId, uriResolver } = this.opts;
        let R = w(p[schemaId] || h);
        let C = {
            "": R
        };
        let b = d(uriResolver, R, false);
        let S = {};
        let k = new Set;
        s(p, {
            allKeys: true
        }, (N, F, W, B)=>{
            if (B === undefined) {
                return;
            }
            let se = b + F;
            let le = C[B];
            if (typeof N[schemaId] === "string") {
                le = ie.call(this, N[schemaId]);
            }
            Se.call(this, N.$anchor);
            Se.call(this, N.$dynamicAnchor);
            C[F] = le;
            function ie(ae) {
                let resolve = this.opts.uriResolver.resolve;
                ae = w(le ? resolve(le, ae) : ae);
                if (k.has(ae)) {
                    throw K(ae);
                }
                k.add(ae);
                let D = this.refs[ae];
                if (typeof D === "string") {
                    D = this.refs[D];
                }
                if (typeof D === "object") {
                    L(N, D.schema, ae);
                } else if (ae !== w(se)) {
                    if (ae[0] === "#") {
                        L(N, S[ae], ae);
                        S[ae] = N;
                    } else {
                        this.refs[ae] = se;
                    }
                }
                return ae;
            }
            function Se(ae) {
                if (typeof ae === "string") {
                    if (!y.test(ae)) {
                        throw Error(`invalid anchor "${ae}"`);
                    }
                    ie.call(this, `#${ae}`);
                }
            }
        });
        return S;
        function L(N, F, W) {
            if (F !== undefined && !r(N, F)) {
                throw K(W);
            }
        }
        function K(N) {
            return Error(`reference "${N}" resolves to more than one schema`);
        }
    }
    e.getSchemaRefs = v;
    return e;
}
