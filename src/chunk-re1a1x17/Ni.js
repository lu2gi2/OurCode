let __wakaru_Ni_cache;
export function Ni() {
    if (__wakaru_Ni_cache) {
        return __wakaru_Ni_cache;
    }
    const e = {};
    __wakaru_Ni_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.shouldUseRule = e.shouldUseGroup = e.schemaHasRulesForType = undefined;
    function t({ schema, self }, i) {
        let l = self.RULES.types[i];
        return l && l !== true && r(schema, l);
    }
    e.schemaHasRulesForType = t;
    function r(a, n) {
        return n.rules.some((i)=>s(a, i));
    }
    e.shouldUseGroup = r;
    function s(a, n) {
        return a[n.keyword] !== undefined || n.definition.implements?.some((l)=>a[l] !== undefined);
    }
    e.shouldUseRule = s;
    return e;
}
