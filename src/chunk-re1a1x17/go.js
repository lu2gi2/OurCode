let __wakaru_go_cache;
export function go() {
    if (__wakaru_go_cache) {
        return __wakaru_go_cache;
    }
    const e = {};
    __wakaru_go_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    class t extends Error {
        constructor(r){
            super("validation failed");
            this.errors = r;
            this.ajv = this.validation = true;
        }
    }
    e.default = t;
    return e;
}
