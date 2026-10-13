let __wakaru_zu_cache;
export function zu() {
    if (__wakaru_zu_cache) {
        return __wakaru_zu_cache;
    }
    const e = {};
    __wakaru_zu_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = {
        keyword: "id",
        code () {
            throw Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
        }
    };
    e.default = t;
    return e;
}
