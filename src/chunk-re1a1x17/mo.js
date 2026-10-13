let __wakaru_mo_cache;
export function mo() {
    if (__wakaru_mo_cache) {
        return __wakaru_mo_cache;
    }
    const e = {};
    __wakaru_mo_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = undefined;
    class t {
    }
    e._CodeOrName = t;
    e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class r extends t {
        constructor(h){
            super();
            if (!e.IDENTIFIER.test(h)) {
                throw Error("CodeGen: name must be a valid identifier");
            }
            this.str = h;
        }
        toString() {
            return this.str;
        }
        emptyStr() {
            return false;
        }
        get names() {
            return {
                [this.str]: 1
            };
        }
    }
    e.Name = r;
    class s extends t {
        constructor(h){
            super();
            this._items = typeof h === "string" ? [
                h
            ] : h;
        }
        toString() {
            return this.str;
        }
        emptyStr() {
            if (this._items.length > 1) {
                return false;
            }
            let h = this._items[0];
            return h === "" || h === '""';
        }
        get str() {
            return this._str ?? (this._str = this._items.reduce((acc, _item)=>`${acc}${_item}`, ""));
        }
        get names() {
            return this._names ?? (this._names = this._items.reduce((acc, _item)=>{
                if (_item instanceof r) {
                    acc[_item.str] = (acc[_item.str] || 0) + 1;
                }
                return acc;
            }, {}));
        }
    }
    e._Code = s;
    e.nil = new s("");
    function a(h, ...g) {
        let f = [
            h[0]
        ];
        let R = 0;
        while(R < g.length){
            l(f, g[R]);
            f.push(h[++R]);
        }
        return new s(f);
    }
    e._ = a;
    let n = new s("+");
    function i(h, ...g) {
        let f = [
            P(h[0])
        ];
        let R = 0;
        while(R < g.length){
            f.push(n);
            l(f, g[R]);
            f.push(n, P(h[++R]));
        }
        c(f);
        return new s(f);
    }
    e.str = i;
    function l(h, g) {
        if (g instanceof s) {
            h.push(...g._items);
        } else if (g instanceof r) {
            h.push(g);
        } else {
            h.push(_(g));
        }
    }
    e.addCodeArg = l;
    function c(h) {
        let g = 1;
        while(g < h.length - 1){
            if (h[g] === n) {
                let f = d(h[g - 1], h[g + 1]);
                if (f !== undefined) {
                    h.splice(g - 1, 3, f);
                    continue;
                }
                h[g++] = "+";
            }
            g++;
        }
    }
    function d(h, g) {
        if (g === '""') {
            return h;
        }
        if (h === '""') {
            return g;
        }
        if (typeof h === "string") {
            if (g instanceof r || h[h.length - 1] !== '"') {
                return;
            }
            if (typeof g !== "string") {
                return `${h.slice(0, -1)}${g}"`;
            }
            if (g[0] === '"') {
                return h.slice(0, -1) + g.slice(1);
            }
            return;
        }
        if (typeof g === "string" && g[0] === '"' && !(h instanceof r)) {
            return `"${h}${g.slice(1)}`;
        }
    }
    function m(h, g) {
        if (g.emptyStr()) {
            return h;
        }
        if (h.emptyStr()) {
            return g;
        }
        return i`${h}${g}`;
    }
    e.strConcat = m;
    function _(h) {
        if (typeof h === "number" || typeof h === "boolean" || h === null) {
            return h;
        }
        return P(Array.isArray(h) ? h.join(",") : h);
    }
    function w(h) {
        return new s(P(h));
    }
    e.stringify = w;
    function P(h) {
        return JSON.stringify(h).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = P;
    function y(h) {
        if (typeof h === "string" && e.IDENTIFIER.test(h)) {
            return new s(`.${h}`);
        }
        return a`[${h}]`;
    }
    e.getProperty = y;
    function v(h) {
        if (typeof h === "string" && e.IDENTIFIER.test(h)) {
            return new s(`${h}`);
        }
        throw Error(`CodeGen: invalid export name: ${h}, use explicit $id name mapping`);
    }
    e.getEsmExportName = v;
    function p(h) {
        return new s(h.toString());
    }
    e.regexpCode = p;
    return e;
}
