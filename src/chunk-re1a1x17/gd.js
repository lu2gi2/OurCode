import { Ai } from "./Ai.js";
import { Ji } from "./Ji_2.js";
import { Sd } from "./Sd_2.js";
import { as } from "./as.js";
import { go } from "./go.js";
import { id } from "./id.js";
import { os } from "./os.js";
import { te } from "./te.js";
let __wakaru_gd_cache;
export function gd() {
    if (__wakaru_gd_cache) {
        return __wakaru_gd_cache.exports;
    }
    let exports = {};
    const t = {
        exports
    };
    __wakaru_gd_cache = t;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.MissingRefError = exports.ValidationError = exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = exports.Ajv2020 = undefined;
    let r = Ai();
    let s = id();
    let a = Ji();
    let n = Sd();
    let i = "https://json-schema.org/draft/2020-12/schema";
    class l extends r.default {
        constructor(w = {}){
            super({
                ...w,
                dynamicRef: true,
                next: true,
                unevaluated: true
            });
        }
        _addVocabularies() {
            super._addVocabularies();
            s.default.forEach((w)=>this.addVocabulary(w));
            if (this.opts.discriminator) {
                this.addKeyword(a.default);
            }
        }
        _addDefaultMetaSchema() {
            super._addDefaultMetaSchema();
            let { $data, meta } = this.opts;
            if (!meta) {
                return;
            }
            n.default.call(this, $data);
            this.refs["http://json-schema.org/schema"] = i;
        }
        defaultMeta() {
            return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : undefined);
        }
    }
    exports.Ajv2020 = l;
    t.exports = exports = l;
    t.exports.Ajv2020 = l;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = l;
    const c = as();
    Object.defineProperty(exports, "KeywordCxt", {
        enumerable: true,
        get: function() {
            return c.KeywordCxt;
        }
    });
    const d = te();
    Object.defineProperty(exports, "_", {
        enumerable: true,
        get: function() {
            return d._;
        }
    });
    Object.defineProperty(exports, "str", {
        enumerable: true,
        get: function() {
            return d.str;
        }
    });
    Object.defineProperty(exports, "stringify", {
        enumerable: true,
        get: function() {
            return d.stringify;
        }
    });
    Object.defineProperty(exports, "nil", {
        enumerable: true,
        get: function() {
            return d.nil;
        }
    });
    Object.defineProperty(exports, "Name", {
        enumerable: true,
        get: function() {
            return d.Name;
        }
    });
    Object.defineProperty(exports, "CodeGen", {
        enumerable: true,
        get: function() {
            return d.CodeGen;
        }
    });
    const m = go();
    Object.defineProperty(exports, "ValidationError", {
        enumerable: true,
        get: function() {
            return m.default;
        }
    });
    const _ = os();
    Object.defineProperty(exports, "MissingRefError", {
        enumerable: true,
        get: function() {
            return _.default;
        }
    });
    return t.exports;
}
