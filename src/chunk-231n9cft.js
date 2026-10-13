function rdt(e, r, value) {
    Object.defineProperty(e, r, {
        value,
        enumerable: true,
        writable: true,
        configurable: true
    });
}
function Jen(e) {
    if (typeof e !== "object" || e === null) {
        return false;
    }
    let r = new Set([
        e
    ]);
    let o = [
        e
    ];
    for(let t = o.pop(); t !== undefined; t = o.pop()){
        if (Object.hasOwn(t, "__proto__")) {
            return true;
        }
        for (let u of Array.isArray(t) ? t : Object.values(t)){
            if (typeof u === "object" && u !== null && !r.has(u)) {
                r.add(u);
                o.push(u);
            }
        }
    }
    return false;
}
function b3e(stripped_1) {
    if (!Jen(stripped_1)) {
        return {
            stripped: stripped_1,
            count: 0
        };
    }
    let count = 0;
    let o = new Map;
    let t = [];
    let u = (n)=>{
        if (typeof n !== "object" || n === null) {
            return n;
        }
        let a = o.get(n);
        if (a === undefined) {
            a = Array.isArray(n) ? [] : {};
            o.set(n, a);
            t.push([
                n,
                a
            ]);
        }
        return a;
    };
    let stripped = u(stripped_1);
    for(let n = t.pop(); n !== undefined; n = t.pop()){
        let [a, s] = n;
        if (Array.isArray(a) && Array.isArray(s)) {
            for (let d of a){
                s.push(u(d));
            }
            continue;
        }
        for (let [d, F] of Object.entries(a)){
            if (d === "__proto__") {
                count++;
            } else {
                Reflect.set(s, d, u(F));
            }
        }
    }
    return {
        stripped,
        count
    };
}
function _s(e, r) {
    if (Object.hasOwn(e, r)) {
        return e[r];
    }
}
class l {
    reader = null;
    register(e) {
        let reader = this.reader;
        this.reader = e;
        return reader;
    }
}
const i = new l;
function QAs(e) {
    return i.register(e);
}
function b() {
    let i_reader = i.reader;
    if (!i_reader) {
        return true;
    }
    try {
        let { value, source, defaultHost } = i_reader("tengu_warm_sunrise", true);
        return value !== false || source !== "payload" || !defaultHost;
    } catch  {
        return true;
    }
}
function vjn(e) {
    return e !== "-rm" || b();
}
class c {
    reader = null;
    register(e) {
        let reader = this.reader;
        this.reader = e;
        return reader;
    }
}
const f = new c;
function ZAs(e) {
    return f.register(e);
}
function eCs() {
    let f_reader = f.reader;
    if (!f_reader) {
        return true;
    }
    try {
        let { value, source, defaultHost } = f_reader("tengu_vast_puddle", true);
        return value !== false || source !== "payload" || !defaultHost;
    } catch  {
        return true;
    }
}
export { rdt, Jen, b3e, _s, QAs, vjn, ZAs, eCs };
