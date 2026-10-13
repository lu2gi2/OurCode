import { Ai } from "./Ai.js";
import { Bu } from "./Bu_2.js";
import { Ji } from "./Ji_2.js";
import { Yu } from "./Yu_2.js";
import { as } from "./as.js";
import { go } from "./go.js";
import { os } from "./os.js";
import { te } from "./te.js";
let __wakaru_Gi_cache;
export function Gi() {
    if (__wakaru_Gi_cache) {
        return __wakaru_Gi_cache.exports;
    }
    let exports = {};
    const t = {
        exports
    };
    __wakaru_Gi_cache = t;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.MissingRefError = exports.ValidationError = exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = exports.Ajv = undefined;
    let r = Ai();
    let s = Bu();
    let a = Ji();
    let n = Yu();
    let i = [
        "/properties"
    ];
    let l = "http://json-schema.org/draft-07/schema";
    class c extends r.default {
        _addVocabularies() {
            super._addVocabularies();
            s.default.forEach((P)=>this.addVocabulary(P));
            if (this.opts.discriminator) {
                this.addKeyword(a.default);
            }
        }
        _addDefaultMetaSchema() {
            super._addDefaultMetaSchema();
            if (!this.opts.meta) {
                return;
            }
            let P = this.opts.$data ? this.$dataMetaSchema(n, i) : n;
            this.addMetaSchema(P, l, false);
            this.refs["http://json-schema.org/schema"] = l;
        }
        defaultMeta() {
            return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(l) ? l : undefined);
        }
    }
    exports.Ajv = c;
    t.exports = exports = c;
    t.exports.Ajv = c;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = c;
    const d = as();
    Object.defineProperty(exports, "KeywordCxt", {
        enumerable: true,
        get: function() {
            return d.KeywordCxt;
        }
    });
    const m = te();
    Object.defineProperty(exports, "_", {
        enumerable: true,
        get: function() {
            return m._;
        }
    });
    Object.defineProperty(exports, "str", {
        enumerable: true,
        get: function() {
            return m.str;
        }
    });
    Object.defineProperty(exports, "stringify", {
        enumerable: true,
        get: function() {
            return m.stringify;
        }
    });
    Object.defineProperty(exports, "nil", {
        enumerable: true,
        get: function() {
            return m.nil;
        }
    });
    Object.defineProperty(exports, "Name", {
        enumerable: true,
        get: function() {
            return m.Name;
        }
    });
    Object.defineProperty(exports, "CodeGen", {
        enumerable: true,
        get: function() {
            return m.CodeGen;
        }
    });
    const _ = go();
    Object.defineProperty(exports, "ValidationError", {
        enumerable: true,
        get: function() {
            return _.default;
        }
    });
    const w = os();
    Object.defineProperty(exports, "MissingRefError", {
        enumerable: true,
        get: function() {
            return w.default;
        }
    });
    return t.exports;
}
