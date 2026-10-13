import { mo } from "./mo.js";
let __wakaru_qi_cache;
export function qi() {
    if (__wakaru_qi_cache) {
        return __wakaru_qi_cache;
    }
    const e = {};
    __wakaru_qi_cache = e;
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = undefined;
    let t = mo();
    class r extends Error {
        constructor(c){
            super(`CodeGen: "code" for ${c} not defined`);
            this.value = c.value;
        }
    }
    let s;
    ((c)=>{
        c[c.Started = 0] = "Started";
        c[c.Completed = 1] = "Completed";
    })(s || (e.UsedValueState = s = {}));
    e.varKinds = {
        const: new t.Name("const"),
        let: new t.Name("let"),
        var: new t.Name("var")
    };
    class a {
        constructor({ prefixes, parent } = {}){
            this._names = {};
            this._prefixes = prefixes;
            this._parent = parent;
        }
        toName(c) {
            if (c instanceof t.Name) {
                return c;
            }
            return this.name(c);
        }
        name(c) {
            return new t.Name(this._newName(c));
        }
        _newName(c) {
            let d = this._names[c] || this._nameGroup(c);
            return `${c}${d.index++}`;
        }
        _nameGroup(prefix) {
            if (this._parent?._prefixes?.has(prefix) || this._prefixes && !this._prefixes.has(prefix)) {
                throw Error(`CodeGen: prefix "${prefix}" is not allowed in this scope`);
            }
            return this._names[prefix] = {
                prefix,
                index: 0
            };
        }
    }
    e.Scope = a;
    class n extends t.Name {
        constructor(c, d){
            super(d);
            this.prefix = c;
        }
        setValue(c, { property, itemIndex }) {
            this.value = c;
            this.scopePath = t._`.${new t.Name(property)}[${itemIndex}]`;
        }
    }
    e.ValueScopeName = n;
    let i = t._`\n`;
    class l extends a {
        constructor(c){
            super(c);
            this._values = {};
            this._scope = c.scope;
            this.opts = {
                ...c,
                _n: c.lines ? i : t.nil
            };
        }
        get() {
            return this._scope;
        }
        name(c) {
            return new n(c, this._newName(c));
        }
        value(c, d) {
            if (d.ref === undefined) {
                throw Error("CodeGen: ref must be passed in value");
            }
            let _ = this.toName(c);
            let { prefix } = _;
            let P = d.key ?? d.ref;
            let y = this._values[prefix];
            if (y) {
                let h = y.get(P);
                if (h) {
                    return h;
                }
            } else {
                y = this._values[prefix] = new Map;
            }
            y.set(P, _);
            let v = this._scope[prefix] || (this._scope[prefix] = []);
            let v_length = v.length;
            v[v_length] = d.ref;
            _.setValue(d, {
                property: prefix,
                itemIndex: v_length
            });
            return _;
        }
        getValue(c, d) {
            let m = this._values[c];
            if (!m) {
                return;
            }
            return m.get(d);
        }
        scopeRefs(c, d = this._values) {
            return this._reduceValues(d, (m)=>{
                if (m.scopePath === undefined) {
                    throw Error(`CodeGen: name "${m}" has no value`);
                }
                return t._`${c}${m.scopePath}`;
            });
        }
        scopeCode(c = this._values, d, m) {
            return this._reduceValues(c, (_)=>{
                if (_.value === undefined) {
                    throw Error(`CodeGen: name "${_}" has no value`);
                }
                return _.value.code;
            }, d, m);
        }
        _reduceValues(c, d, m = {}, _) {
            let t_nil = t.nil;
            for(let P in c){
                let y = c[P];
                if (!y) {
                    continue;
                }
                let v = m[P] = m[P] || new Map;
                y.forEach((p)=>{
                    if (v.has(p)) {
                        return;
                    }
                    v.set(p, s.Started);
                    let h = d(p);
                    if (h) {
                        let g = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
                        t_nil = t._`${t_nil}${g} ${p} = ${h};${this.opts._n}`;
                    } else if (h = _?.(p)) {
                        t_nil = t._`${t_nil}${h}${this.opts._n}`;
                    } else {
                        throw new r(p);
                    }
                    v.set(p, s.Completed);
                });
            }
            return t_nil;
        }
    }
    e.ValueScope = l;
    return e;
}
