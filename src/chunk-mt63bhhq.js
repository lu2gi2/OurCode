import { C } from "/$bunfs/root/chunk-cj4xndke.js";
const hso = C(function(p, s) {
    s.exports = function o(r, e) {
        if (r === e) {
            return true;
        }
        if (r && e && typeof r === "object" && typeof e === "object") {
            if (r.constructor !== e.constructor) {
                return false;
            }
            let u;
            let t;
            let f;
            if (Array.isArray(r)) {
                u = r.length;
                if (u != e.length) {
                    return false;
                }
                for(t = u; t-- !== 0;){
                    if (!o(r[t], e[t])) {
                        return false;
                    }
                }
                return true;
            }
            if (r.constructor === RegExp) {
                return r.source === e.source && r.flags === e.flags;
            }
            if (r.valueOf !== Object.prototype.valueOf) {
                return r.valueOf() === e.valueOf();
            }
            if (r.toString !== Object.prototype.toString) {
                return r.toString() === e.toString();
            }
            f = Object.keys(r);
            u = f.length;
            if (u !== Object.keys(e).length) {
                return false;
            }
            for(t = u; t-- !== 0;){
                if (!Object.prototype.hasOwnProperty.call(e, f[t])) {
                    return false;
                }
            }
            for(t = u; t-- !== 0;){
                const n = f[t];
                if (!o(r[n], e[n])) {
                    return false;
                }
            }
            return true;
        }
        return r !== r && e !== e;
    };
});
const I5t = C(function(l) {
    Object.defineProperty(l, "__esModule", {
        value: true
    });
    const c = hso();
    c.code = 'require("ajv/dist/runtime/equal").default';
    l.default = c;
});
export { hso, I5t };
