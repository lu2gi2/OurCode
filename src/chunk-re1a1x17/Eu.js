let __wakaru_Eu_cache;
export function Eu() {
    if (__wakaru_Eu_cache) {
        return __wakaru_Eu_cache;
    }
    const e = {};
    __wakaru_Eu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    function t(r) {
        let r_length = r.length;
        let a = 0;
        let n = 0;
        let i;
        while(n < r_length){
            a++;
            i = r.charCodeAt(n++);
            if (i >= 55296 && i <= 56319 && n < r_length) {
                i = r.charCodeAt(n);
                if ((i & 64512) === 56320) {
                    n++;
                }
            }
        }
        return a;
    }
    e.default = t;
    t.code = 'require("ajv/dist/runtime/ucs2length").default';
    return e;
}
