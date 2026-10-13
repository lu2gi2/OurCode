import { So } from "./So.js";
let __wakaru_os_cache;
export function os() {
    if (__wakaru_os_cache) {
        return __wakaru_os_cache;
    }
    const e = {};
    __wakaru_os_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    let t = So();
    class r extends Error {
        constructor(s, a, n, i){
            super(i || `can't resolve reference ${n} from id ${a}`);
            this.missingRef = t.resolveUrl(s, a, n);
            this.missingSchema = t.normalizeId(t.getFullPath(s, this.missingRef));
        }
    }
    e.default = r;
    return e;
}
