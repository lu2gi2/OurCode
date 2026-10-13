let __wakaru_Mi_cache;
export function Mi() {
    if (__wakaru_Mi_cache) {
        return __wakaru_Mi_cache.exports;
    }
    const exports = {};
    const t = {
        exports
    };
    __wakaru_Mi_cache = t;
    t.exports = function r(s, a) {
        if (s === a) {
            return true;
        }
        if (s && a && typeof s === "object" && typeof a === "object") {
            if (s.constructor !== a.constructor) {
                return false;
            }
            let n;
            let i;
            let l;
            if (Array.isArray(s)) {
                n = s.length;
                if (n != a.length) {
                    return false;
                }
                for(i = n; i-- !== 0;){
                    if (!r(s[i], a[i])) {
                        return false;
                    }
                }
                return true;
            }
            if (s.constructor === RegExp) {
                return s.source === a.source && s.flags === a.flags;
            }
            if (s.valueOf !== Object.prototype.valueOf) {
                return s.valueOf() === a.valueOf();
            }
            if (s.toString !== Object.prototype.toString) {
                return s.toString() === a.toString();
            }
            l = Object.keys(s);
            n = l.length;
            if (n !== Object.keys(a).length) {
                return false;
            }
            for(i = n; i-- !== 0;){
                if (!Object.prototype.hasOwnProperty.call(a, l[i])) {
                    return false;
                }
            }
            for(i = n; i-- !== 0;){
                const c = l[i];
                if (!r(s[c], a[c])) {
                    return false;
                }
            }
            return true;
        }
        return s !== s && a !== a;
    };
    return t.exports;
}
