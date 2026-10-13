import { hso, I5t } from "/$bunfs/root/chunk-mt63bhhq.js";
import { C } from "/$bunfs/root/chunk-cj4xndke.js";
const it = C(function(zr) {
    Object.defineProperty(zr, "__esModule", {
        value: true
    });
    zr.regexpCode = zr.getEsmExportName = zr.getProperty = zr.safeStringify = zr.stringify = zr.strConcat = zr.addCodeArg = zr.str = zr._ = zr.nil = zr._Code = zr.Name = zr.IDENTIFIER = zr._CodeOrName = undefined;
    class ht {
    }
    zr._CodeOrName = ht;
    zr.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class De extends ht {
        constructor(e){
            super();
            if (!zr.IDENTIFIER.test(e)) {
                throw Error("CodeGen: name must be a valid identifier");
            }
            this.str = e;
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
    zr.Name = De;
    class Z extends ht {
        constructor(e){
            super();
            this._items = typeof e === "string" ? [
                e
            ] : e;
        }
        toString() {
            return this.str;
        }
        emptyStr() {
            if (this._items.length > 1) {
                return false;
            }
            let e = this._items[0];
            return e === "" || e === '""';
        }
        get str() {
            return this._str ?? (this._str = this._items.reduce((acc, _item)=>`${acc}${_item}`, ""));
        }
        get names() {
            return this._names ?? (this._names = this._items.reduce((acc, _item)=>{
                if (_item instanceof De) {
                    acc[_item.str] = (acc[_item.str] || 0) + 1;
                }
                return acc;
            }, {}));
        }
    }
    zr._Code = Z;
    zr.nil = new Z("");
    function Dr(e, ...t) {
        let r = [
            e[0]
        ];
        let s = 0;
        while(s < t.length){
            tr(r, t[s]);
            r.push(e[++s]);
        }
        return new Z(r);
    }
    zr._ = Dr;
    const er = new Z("+");
    function Vr(e, ...t) {
        let r = [
            ot(e[0])
        ];
        let s = 0;
        while(s < t.length){
            r.push(er);
            tr(r, t[s]);
            r.push(er, ot(e[++s]));
        }
        ha(r);
        return new Z(r);
    }
    zr.str = Vr;
    function tr(e, t) {
        if (t instanceof Z) {
            e.push(...t._items);
        } else if (t instanceof De) {
            e.push(t);
        } else {
            e.push(_a(t));
        }
    }
    zr.addCodeArg = tr;
    function ha(e) {
        let t = 1;
        while(t < e.length - 1){
            if (e[t] === er) {
                let r = ma(e[t - 1], e[t + 1]);
                if (r !== undefined) {
                    e.splice(t - 1, 3, r);
                    continue;
                }
                e[t++] = "+";
            }
            t++;
        }
    }
    function ma(e, t) {
        if (t === '""') {
            return e;
        }
        if (e === '""') {
            return t;
        }
        if (typeof e === "string") {
            if (t instanceof De || e[e.length - 1] !== '"') {
                return;
            }
            if (typeof t !== "string") {
                return `${e.slice(0, -1)}${t}"`;
            }
            if (t[0] === '"') {
                return e.slice(0, -1) + t.slice(1);
            }
            return;
        }
        if (typeof t === "string" && t[0] === '"' && !(e instanceof De)) {
            return `"${e}${t.slice(1)}`;
        }
    }
    function ya(e, t) {
        if (t.emptyStr()) {
            return e;
        }
        if (e.emptyStr()) {
            return t;
        }
        return Vr`${e}${t}`;
    }
    zr.strConcat = ya;
    function _a(e) {
        if (typeof e === "number" || typeof e === "boolean" || e === null) {
            return e;
        }
        return ot(Array.isArray(e) ? e.join(",") : e);
    }
    function ga(e) {
        return new Z(ot(e));
    }
    zr.stringify = ga;
    function ot(e) {
        return JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    zr.safeStringify = ot;
    function $a(e) {
        if (typeof e === "string" && zr.IDENTIFIER.test(e)) {
            return new Z(`.${e}`);
        }
        return Dr`[${e}]`;
    }
    zr.getProperty = $a;
    function va(e) {
        if (typeof e === "string" && zr.IDENTIFIER.test(e)) {
            return new Z(`${e}`);
        }
        throw Error(`CodeGen: invalid export name: ${e}, use explicit $id name mapping`);
    }
    zr.getEsmExportName = va;
    function wa(e) {
        return new Z(e.toString());
    }
    zr.regexpCode = wa;
});
const or = C(function(Lr) {
    Object.defineProperty(Lr, "__esModule", {
        value: true
    });
    Lr.ValueScope = Lr.ValueScopeName = Lr.Scope = Lr.varKinds = Lr.UsedValueState = undefined;
    const I = it();
    class Kr extends Error {
        constructor(e){
            super(`CodeGen: "code" for ${e} not defined`);
            this.value = e.value;
        }
    }
    let yt;
    ((e)=>{
        e[e.Started = 0] = "Started";
        e[e.Completed = 1] = "Completed";
    })(yt || (Lr.UsedValueState = yt = {}));
    Lr.varKinds = {
        const: new I.Name("const"),
        let: new I.Name("let"),
        var: new I.Name("var")
    };
    class sr {
        constructor({ prefixes, parent } = {}){
            this._names = {};
            this._prefixes = prefixes;
            this._parent = parent;
        }
        toName(e) {
            if (e instanceof I.Name) {
                return e;
            }
            return this.name(e);
        }
        name(e) {
            return new I.Name(this._newName(e));
        }
        _newName(e) {
            let t = this._names[e] || this._nameGroup(e);
            return `${e}${t.index++}`;
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
    Lr.Scope = sr;
    class nr extends I.Name {
        constructor(e, t){
            super(t);
            this.prefix = e;
        }
        setValue(e, { property, itemIndex }) {
            this.value = e;
            this.scopePath = I._`.${new I.Name(property)}[${itemIndex}]`;
        }
    }
    Lr.ValueScopeName = nr;
    const Ta = I._`\n`;
    class Fr extends sr {
        constructor(e){
            super(e);
            this._values = {};
            this._scope = e.scope;
            this.opts = {
                ...e,
                _n: e.lines ? Ta : I.nil
            };
        }
        get() {
            return this._scope;
        }
        name(e) {
            return new nr(e, this._newName(e));
        }
        value(e, t) {
            if (t.ref === undefined) {
                throw Error("CodeGen: ref must be passed in value");
            }
            let s = this.toName(e);
            let { prefix } = s;
            let o = t.key ?? t.ref;
            let i = this._values[prefix];
            if (i) {
                let u = i.get(o);
                if (u) {
                    return u;
                }
            } else {
                i = this._values[prefix] = new Map;
            }
            i.set(o, s);
            let a = this._scope[prefix] || (this._scope[prefix] = []);
            let a_length = a.length;
            a[a_length] = t.ref;
            s.setValue(t, {
                property: prefix,
                itemIndex: a_length
            });
            return s;
        }
        getValue(e, t) {
            let r = this._values[e];
            if (!r) {
                return;
            }
            return r.get(t);
        }
        scopeRefs(e, t = this._values) {
            return this._reduceValues(t, (r)=>{
                if (r.scopePath === undefined) {
                    throw Error(`CodeGen: name "${r}" has no value`);
                }
                return I._`${e}${r.scopePath}`;
            });
        }
        scopeCode(e = this._values, t, r) {
            return this._reduceValues(e, (s)=>{
                if (s.value === undefined) {
                    throw Error(`CodeGen: name "${s}" has no value`);
                }
                return s.value.code;
            }, t, r);
        }
        _reduceValues(e, t, r = {}, s) {
            let I_nil = I.nil;
            for(let o in e){
                let i = e[o];
                if (!i) {
                    continue;
                }
                let a = r[o] = r[o] || new Map;
                i.forEach((c)=>{
                    if (a.has(c)) {
                        return;
                    }
                    a.set(c, yt.Started);
                    let u = t(c);
                    if (u) {
                        let l = this.opts.es5 ? Lr.varKinds.var : Lr.varKinds.const;
                        I_nil = I._`${I_nil}${l} ${c} = ${u};${this.opts._n}`;
                    } else if (u = s?.(c)) {
                        I_nil = I._`${I_nil}${u}${this.opts._n}`;
                    } else {
                        throw new Kr(c);
                    }
                    a.set(c, yt.Completed);
                });
            }
            return I_nil;
        }
    }
    Lr.ValueScope = Fr;
});
const om = C(function(H) {
    Object.defineProperty(H, "__esModule", {
        value: true
    });
    H.or = H.and = H.not = H.CodeGen = H.operators = H.varKinds = H.ValueScopeName = H.ValueScope = H.Scope = H.Name = H.regexpCode = H.stringify = H.getProperty = H.nil = H.strConcat = H.str = H._ = undefined;
    const g = it();
    const D = or();
    const me = it();
    Object.defineProperty(H, "_", {
        enumerable: true,
        get: function() {
            return me._;
        }
    });
    Object.defineProperty(H, "str", {
        enumerable: true,
        get: function() {
            return me.str;
        }
    });
    Object.defineProperty(H, "strConcat", {
        enumerable: true,
        get: function() {
            return me.strConcat;
        }
    });
    Object.defineProperty(H, "nil", {
        enumerable: true,
        get: function() {
            return me.nil;
        }
    });
    Object.defineProperty(H, "getProperty", {
        enumerable: true,
        get: function() {
            return me.getProperty;
        }
    });
    Object.defineProperty(H, "stringify", {
        enumerable: true,
        get: function() {
            return me.stringify;
        }
    });
    Object.defineProperty(H, "regexpCode", {
        enumerable: true,
        get: function() {
            return me.regexpCode;
        }
    });
    Object.defineProperty(H, "Name", {
        enumerable: true,
        get: function() {
            return me.Name;
        }
    });
    const bt = or();
    Object.defineProperty(H, "Scope", {
        enumerable: true,
        get: function() {
            return bt.Scope;
        }
    });
    Object.defineProperty(H, "ValueScope", {
        enumerable: true,
        get: function() {
            return bt.ValueScope;
        }
    });
    Object.defineProperty(H, "ValueScopeName", {
        enumerable: true,
        get: function() {
            return bt.ValueScopeName;
        }
    });
    Object.defineProperty(H, "varKinds", {
        enumerable: true,
        get: function() {
            return bt.varKinds;
        }
    });
    H.operators = {
        GT: new g._Code(">"),
        GTE: new g._Code(">="),
        LT: new g._Code("<"),
        LTE: new g._Code("<="),
        EQ: new g._Code("==="),
        NEQ: new g._Code("!=="),
        NOT: new g._Code("!"),
        OR: new g._Code("||"),
        AND: new g._Code("&&"),
        ADD: new g._Code("+")
    };
    class ye {
        optimizeNodes() {
            return this;
        }
        optimizeNames(e, t) {
            return this;
        }
    }
    class Gr extends ye {
        constructor(e, t, r){
            super();
            this.varKind = e;
            this.name = t;
            this.rhs = r;
        }
        render({ es5, _n }) {
            let r = es5 ? D.varKinds.var : this.varKind;
            let s = this.rhs === undefined ? "" : ` = ${this.rhs}`;
            return `${r} ${this.name}${s};` + _n;
        }
        optimizeNames(e, t) {
            if (!e[this.name.str]) {
                return;
            }
            if (this.rhs) {
                this.rhs = ze(this.rhs, e, t);
            }
            return this;
        }
        get names() {
            if (this.rhs instanceof g._CodeOrName) {
                return this.rhs.names;
            }
            return {};
        }
    }
    class cr extends ye {
        constructor(e, t, r){
            super();
            this.lhs = e;
            this.rhs = t;
            this.sideEffects = r;
        }
        render({ _n }) {
            return `${this.lhs} = ${this.rhs};` + _n;
        }
        optimizeNames(e, t) {
            if (this.lhs instanceof g.Name && !e[this.lhs.str] && !this.sideEffects) {
                return;
            }
            this.rhs = ze(this.rhs, e, t);
            return this;
        }
        get names() {
            let e = this.lhs instanceof g.Name ? {} : {
                ...this.lhs.names
            };
            return wt(e, this.rhs);
        }
    }
    class Jr extends cr {
        constructor(e, t, r, s){
            super(e, r, s);
            this.op = t;
        }
        render({ _n }) {
            return `${this.lhs} ${this.op}= ${this.rhs};` + _n;
        }
    }
    class Wr extends ye {
        constructor(e){
            super();
            this.label = e;
            this.names = {};
        }
        render({ _n }) {
            return `${this.label}:` + _n;
        }
    }
    class Br extends ye {
        constructor(e){
            super();
            this.label = e;
            this.names = {};
        }
        render({ _n }) {
            return `break${this.label ? ` ${this.label}` : ""};` + _n;
        }
    }
    class Qr extends ye {
        constructor(e){
            super();
            this.error = e;
        }
        render({ _n }) {
            return `throw ${this.error};` + _n;
        }
        get names() {
            return this.error.names;
        }
    }
    class Xr extends ye {
        constructor(e){
            super();
            this.code = e;
        }
        render({ _n }) {
            return `${this.code};` + _n;
        }
        optimizeNodes() {
            if (`${this.code}`) {
                return this;
            }
        }
        optimizeNames(e, t) {
            this.code = ze(this.code, e, t);
            return this;
        }
        get names() {
            if (this.code instanceof g._CodeOrName) {
                return this.code.names;
            }
            return {};
        }
    }
    class Et extends ye {
        constructor(e = []){
            super();
            this.nodes = e;
        }
        render(e) {
            return this.nodes.reduce((acc, node)=>acc + node.render(e), "");
        }
        optimizeNodes() {
            let { nodes } = this;
            let nodes_length = nodes.length;
            while(nodes_length--){
                let r = nodes[nodes_length].optimizeNodes();
                if (Array.isArray(r)) {
                    nodes.splice(nodes_length, 1, ...r);
                } else if (r) {
                    nodes[nodes_length] = r;
                } else {
                    nodes.splice(nodes_length, 1);
                }
            }
            if (nodes.length > 0) {
                return this;
            }
        }
        optimizeNames(e, t) {
            let { nodes } = this;
            let nodes_length = nodes.length;
            while(nodes_length--){
                let n = nodes[nodes_length];
                if (n.optimizeNames(e, t)) {
                    continue;
                }
                Da(e, n.names);
                nodes.splice(nodes_length, 1);
            }
            if (nodes.length > 0) {
                return this;
            }
        }
        get names() {
            return this.nodes.reduce((acc, node)=>Ie(acc, node.names), {});
        }
    }
    class _e extends Et {
        render(e) {
            return `{${e._n}${super.render(e)}}${e._n}`;
        }
    }
    class Yr extends Et {
    }
    class at extends _e {
    }
    at.kind = "else";
    class pe extends _e {
        constructor(e, t){
            super(t);
            this.condition = e;
        }
        render(e) {
            let t = `if(${this.condition})` + super.render(e);
            if (this.else) {
                t += `else ${this.else.render(e)}`;
            }
            return t;
        }
        optimizeNodes() {
            super.optimizeNodes();
            let condition = this.condition;
            if (condition === true) {
                return this.nodes;
            }
            let _else = this.else;
            if (_else) {
                let r = _else.optimizeNodes();
                _else = this.else = Array.isArray(r) ? new at(r) : r;
            }
            if (_else) {
                if (condition === false) {
                    if (_else instanceof pe) {
                        return _else;
                    }
                    return _else.nodes;
                }
                if (this.nodes.length) {
                    return this;
                }
                return new pe(ss(condition), _else instanceof pe ? [
                    _else
                ] : _else.nodes);
            }
            if (condition === false || !this.nodes.length) {
                return;
            }
            return this;
        }
        optimizeNames(e, t) {
            this.else = this.else?.optimizeNames(e, t);
            if (!(super.optimizeNames(e, t) || this.else)) {
                return;
            }
            this.condition = ze(this.condition, e, t);
            return this;
        }
        get names() {
            let e = super.names;
            wt(e, this.condition);
            if (this.else) {
                Ie(e, this.else.names);
            }
            return e;
        }
    }
    pe.kind = "if";
    class Ve extends _e {
    }
    Ve.kind = "for";
    class Zr extends Ve {
        constructor(e){
            super();
            this.iteration = e;
        }
        render(e) {
            return `for(${this.iteration})` + super.render(e);
        }
        optimizeNames(e, t) {
            if (!super.optimizeNames(e, t)) {
                return;
            }
            this.iteration = ze(this.iteration, e, t);
            return this;
        }
        get names() {
            return Ie(super.names, this.iteration.names);
        }
    }
    class es extends Ve {
        constructor(e, t, r, s){
            super();
            this.varKind = e;
            this.name = t;
            this.from = r;
            this.to = s;
        }
        render(e) {
            let t = e.es5 ? D.varKinds.var : this.varKind;
            let { name, from, to } = this;
            return `for(${t} ${name}=${from}; ${name}<${to}; ${name}++)` + super.render(e);
        }
        get names() {
            let e = wt(super.names, this.from);
            return wt(e, this.to);
        }
    }
    class ir extends Ve {
        constructor(e, t, r, s){
            super();
            this.loop = e;
            this.varKind = t;
            this.name = r;
            this.iterable = s;
        }
        render(e) {
            return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e);
        }
        optimizeNames(e, t) {
            if (!super.optimizeNames(e, t)) {
                return;
            }
            this.iterable = ze(this.iterable, e, t);
            return this;
        }
        get names() {
            return Ie(super.names, this.iterable.names);
        }
    }
    class _t extends _e {
        constructor(e, t, r){
            super();
            this.name = e;
            this.args = t;
            this.async = r;
        }
        render(e) {
            return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e);
        }
    }
    _t.kind = "func";
    class gt extends Et {
        render(e) {
            return `return ${super.render(e)}`;
        }
    }
    gt.kind = "return";
    class ts extends _e {
        render(e) {
            let t = `try${super.render(e)}`;
            if (this.catch) {
                t += this.catch.render(e);
            }
            if (this.finally) {
                t += this.finally.render(e);
            }
            return t;
        }
        optimizeNodes() {
            super.optimizeNodes();
            this.catch?.optimizeNodes();
            this.finally?.optimizeNodes();
            return this;
        }
        optimizeNames(e, t) {
            super.optimizeNames(e, t);
            this.catch?.optimizeNames(e, t);
            this.finally?.optimizeNames(e, t);
            return this;
        }
        get names() {
            let e = super.names;
            if (this.catch) {
                Ie(e, this.catch.names);
            }
            if (this.finally) {
                Ie(e, this.finally.names);
            }
            return e;
        }
    }
    class $t extends _e {
        constructor(e){
            super();
            this.error = e;
        }
        render(e) {
            return `catch(${this.error})` + super.render(e);
        }
    }
    $t.kind = "catch";
    class vt extends _e {
        render(e) {
            return `finally${super.render(e)}`;
        }
    }
    vt.kind = "finally";
    class rs {
        constructor(parent, t = {}){
            this._values = {};
            this._blockStarts = [];
            this._constants = {};
            this.opts = {
                ...t,
                _n: t.lines ? `
` : ""
            };
            this._extScope = parent;
            this._scope = new D.Scope({
                parent
            });
            this._nodes = [
                new Yr
            ];
        }
        toString() {
            return this._root.render(this.opts);
        }
        name(e) {
            return this._scope.name(e);
        }
        scopeName(e) {
            return this._extScope.name(e);
        }
        scopeValue(e, t) {
            let r = this._extScope.value(e, t);
            (this._values[r.prefix] || (this._values[r.prefix] = new Set)).add(r);
            return r;
        }
        getScopeValue(e, t) {
            return this._extScope.getValue(e, t);
        }
        scopeRefs(e) {
            return this._extScope.scopeRefs(e, this._values);
        }
        scopeCode() {
            return this._extScope.scopeCode(this._values);
        }
        _def(e, t, r, s) {
            let n = this._scope.toName(t);
            if (r !== undefined && s) {
                this._constants[n.str] = r;
            }
            this._leafNode(new Gr(e, n, r));
            return n;
        }
        const(e, t, r) {
            return this._def(D.varKinds.const, e, t, r);
        }
        let(e, t, r) {
            return this._def(D.varKinds.let, e, t, r);
        }
        var(e, t, r) {
            return this._def(D.varKinds.var, e, t, r);
        }
        assign(e, t, r) {
            return this._leafNode(new cr(e, t, r));
        }
        add(e, t) {
            return this._leafNode(new Jr(e, H.operators.ADD, t));
        }
        code(e) {
            if (typeof e === "function") {
                e();
            } else if (e !== g.nil) {
                this._leafNode(new Xr(e));
            }
            return this;
        }
        object(...e) {
            let t = [
                "{"
            ];
            for (let [r, s] of e){
                if (t.length > 1) {
                    t.push(",");
                }
                t.push(r);
                if (r !== s || this.opts.es5) {
                    t.push(":");
                    g.addCodeArg(t, s);
                }
            }
            t.push("}");
            return new g._Code(t);
        }
        if(e, t, r) {
            this._blockNode(new pe(e));
            if (t && r) {
                this.code(t).else().code(r).endIf();
            } else if (t) {
                this.code(t).endIf();
            } else if (r) {
                throw Error('CodeGen: "else" body without "then" body');
            }
            return this;
        }
        elseIf(e) {
            return this._elseNode(new pe(e));
        }
        else() {
            return this._elseNode(new at);
        }
        endIf() {
            return this._endBlockNode(pe, at);
        }
        _for(e, t) {
            this._blockNode(e);
            if (t) {
                this.code(t).endFor();
            }
            return this;
        }
        for(e, t) {
            return this._for(new Zr(e), t);
        }
        forRange(e, t, r, s, n = this.opts.es5 ? D.varKinds.var : D.varKinds.let) {
            let o = this._scope.toName(e);
            return this._for(new es(n, o, t, r), ()=>s(o));
        }
        forOf(e, t, r, s = D.varKinds.const) {
            let n = this._scope.toName(e);
            if (this.opts.es5) {
                let o = t instanceof g.Name ? t : this.var("_arr", t);
                return this.forRange("_i", 0, g._`${o}.length`, (i)=>{
                    this.var(n, g._`${o}[${i}]`);
                    r(n);
                });
            }
            return this._for(new ir("of", s, n, t), ()=>r(n));
        }
        forIn(e, t, r, s = this.opts.es5 ? D.varKinds.var : D.varKinds.const) {
            if (this.opts.ownProperties) {
                return this.forOf(e, g._`Object.keys(${t})`, r);
            }
            let n = this._scope.toName(e);
            return this._for(new ir("in", s, n, t), ()=>r(n));
        }
        endFor() {
            return this._endBlockNode(Ve);
        }
        label(e) {
            return this._leafNode(new Wr(e));
        }
        break(e) {
            return this._leafNode(new Br(e));
        }
        return(e) {
            let t = new gt;
            this._blockNode(t);
            this.code(e);
            if (t.nodes.length !== 1) {
                throw Error('CodeGen: "return" should have one node');
            }
            return this._endBlockNode(gt);
        }
        try(e, t, r) {
            if (!t && !r) {
                throw Error('CodeGen: "try" without "catch" and "finally"');
            }
            let s = new ts;
            this._blockNode(s);
            this.code(e);
            if (t) {
                let n = this.name("e");
                this._currNode = s.catch = new $t(n);
                t(n);
            }
            if (r) {
                this._currNode = s.finally = new vt;
                this.code(r);
            }
            return this._endBlockNode($t, vt);
        }
        throw(e) {
            return this._leafNode(new Qr(e));
        }
        block(e, t) {
            this._blockStarts.push(this._nodes.length);
            if (e) {
                this.code(e).endBlock(t);
            }
            return this;
        }
        endBlock(e) {
            let t = this._blockStarts.pop();
            if (t === undefined) {
                throw Error("CodeGen: not in self-balancing block");
            }
            let r = this._nodes.length - t;
            if (r < 0 || e !== undefined && r !== e) {
                throw Error(`CodeGen: wrong number of nodes: ${r} vs ${e} expected`);
            }
            this._nodes.length = t;
            return this;
        }
        func(e, t = g.nil, r, s) {
            this._blockNode(new _t(e, t, r));
            if (s) {
                this.code(s).endFunc();
            }
            return this;
        }
        endFunc() {
            return this._endBlockNode(_t);
        }
        optimize(e = 1) {
            while(e-- > 0){
                this._root.optimizeNodes();
                this._root.optimizeNames(this._root.names, this._constants);
            }
        }
        _leafNode(e) {
            this._currNode.nodes.push(e);
            return this;
        }
        _blockNode(e) {
            this._currNode.nodes.push(e);
            this._nodes.push(e);
        }
        _endBlockNode(e, t) {
            let _currNode = this._currNode;
            if (_currNode instanceof e || t && _currNode instanceof t) {
                this._nodes.pop();
                return this;
            }
            throw Error(`CodeGen: not in block "${t ? `${e.kind}/${t.kind}` : e.kind}"`);
        }
        _elseNode(e) {
            let _currNode = this._currNode;
            if (!(_currNode instanceof pe)) {
                throw Error('CodeGen: "else" without "if"');
            }
            this._currNode = _currNode.else = e;
            return this;
        }
        get _root() {
            return this._nodes[0];
        }
        get _currNode() {
            let _nodes = this._nodes;
            return _nodes[_nodes.length - 1];
        }
        set _currNode(e) {
            let _nodes = this._nodes;
            _nodes[_nodes.length - 1] = e;
        }
    }
    H.CodeGen = rs;
    function Ie(e, names) {
        for(let r in names){
            e[r] = (e[r] || 0) + (names[r] || 0);
        }
        return e;
    }
    function wt(e, t) {
        if (t instanceof g._CodeOrName) {
            return Ie(e, t.names);
        }
        return e;
    }
    function ze(e, t, r) {
        if (e instanceof g.Name) {
            return s(e);
        }
        if (!n(e)) {
            return e;
        }
        return new g._Code(e._items.reduce((acc, i)=>{
            if (i instanceof g.Name) {
                i = s(i);
            }
            if (i instanceof g._Code) {
                acc.push(...i._items);
            } else {
                acc.push(i);
            }
            return acc;
        }, []));
        function s(o) {
            let i = r[o.str];
            if (i === undefined || t[o.str] !== 1) {
                return o;
            }
            delete t[o.str];
            return i;
        }
        function n(o) {
            return o instanceof g._Code && o._items.some((i)=>i instanceof g.Name && t[i.str] === 1 && r[i.str] !== undefined);
        }
    }
    function Da(e, names) {
        for(let r in names){
            e[r] = (e[r] || 0) - (names[r] || 0);
        }
    }
    function ss(e) {
        if (typeof e === "boolean" || typeof e === "number" || e === null) {
            return !e;
        }
        return g._`!${ar(e)}`;
    }
    H.not = ss;
    const Va = ns(H.operators.AND);
    function za(...e) {
        return e.reduce(Va);
    }
    H.and = za;
    const Ua = ns(H.operators.OR);
    function Ka(...e) {
        return e.reduce(Ua);
    }
    H.or = Ka;
    function ns(e) {
        return (t, r)=>{
            if (t === g.nil) {
                return r;
            }
            if (r === g.nil) {
                return t;
            }
            return g._`${ar(t)} ${e} ${ar(r)}`;
        };
    }
    function ar(e) {
        if (e instanceof g.Name) {
            return e;
        }
        return g._`(${e})`;
    }
});
const i_ = C(function(hs) {
    Object.defineProperty(hs, "__esModule", {
        value: true
    });
    hs.checkStrictMode = hs.getErrorPath = hs.Type = hs.useFunc = hs.setEvaluated = hs.evaluatedPropsToName = hs.mergeEvaluated = hs.eachItem = hs.unescapeJsonPointer = hs.escapeJsonPointer = hs.escapeFragment = hs.unescapeFragment = hs.schemaRefOrVal = hs.schemaHasRulesButRef = hs.schemaHasRules = hs.checkUnknownRules = hs.alwaysValidSchema = hs.toHash = undefined;
    const E = om();
    const cs = it();
    function Ga(e) {
        let t = {};
        for (let r of e){
            t[r] = true;
        }
        return t;
    }
    hs.toHash = Ga;
    function Ja(e, t) {
        if (typeof t === "boolean") {
            return t;
        }
        if (Object.keys(t).length === 0) {
            return true;
        }
        us(e, t);
        return !ls(t, e.self.RULES.all);
    }
    hs.alwaysValidSchema = Ja;
    function us(e, t = e.schema) {
        let { opts, self } = e;
        if (!opts.strictSchema) {
            return;
        }
        if (typeof t === "boolean") {
            return;
        }
        let keywords = self.RULES.keywords;
        for(let o in t){
            if (!keywords[o]) {
                ps(e, `unknown keyword: "${o}"`);
            }
        }
    }
    hs.checkUnknownRules = us;
    function ls(e, t) {
        if (typeof e === "boolean") {
            return !e;
        }
        for(let r in e){
            if (t[r]) {
                return true;
            }
        }
        return false;
    }
    hs.schemaHasRules = ls;
    function Wa(e, t) {
        if (typeof e === "boolean") {
            return !e;
        }
        for(let r in e){
            if (r !== "$ref" && t.all[r]) {
                return true;
            }
        }
        return false;
    }
    hs.schemaHasRulesButRef = Wa;
    function Ba({ topSchemaRef, schemaPath }, r, s, n) {
        if (!n) {
            if (typeof r === "number" || typeof r === "boolean") {
                return r;
            }
            if (typeof r === "string") {
                return E._`${r}`;
            }
        }
        return E._`${topSchemaRef}${schemaPath}${E.getProperty(s)}`;
    }
    hs.schemaRefOrVal = Ba;
    function Qa(e) {
        return ds(decodeURIComponent(e));
    }
    hs.unescapeFragment = Qa;
    function Xa(e) {
        return encodeURIComponent(lr(e));
    }
    hs.escapeFragment = Xa;
    function lr(e) {
        if (typeof e === "number") {
            return `${e}`;
        }
        return e.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    hs.escapeJsonPointer = lr;
    function ds(e) {
        return e.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    hs.unescapeJsonPointer = ds;
    function Ya(e, t) {
        if (Array.isArray(e)) {
            for (let r of e){
                t(r);
            }
        } else {
            t(e);
        }
    }
    hs.eachItem = Ya;
    function is({ mergeNames, mergeToName, mergeValues, resultToName }) {
        return (n, o, i, a)=>{
            let c = i === undefined ? o : i instanceof E.Name ? (o instanceof E.Name ? mergeNames(n, o, i) : mergeToName(n, o, i), i) : o instanceof E.Name ? (mergeToName(n, i, o), o) : mergeValues(o, i);
            if (a === E.Name && !(c instanceof E.Name)) {
                return resultToName(n, c);
            }
            return c;
        };
    }
    hs.mergeEvaluated = {
        props: is({
            mergeNames: (e, t, r)=>e.if(E._`${r} !== true && ${t} !== undefined`, ()=>{
                    e.if(E._`${t} === true`, ()=>e.assign(r, true), ()=>e.assign(r, E._`${r} || {}`).code(E._`Object.assign(${r}, ${t})`));
                }),
            mergeToName: (e, t, r)=>e.if(E._`${r} !== true`, ()=>{
                    if (t === true) {
                        e.assign(r, true);
                    } else {
                        e.assign(r, E._`${r} || {}`);
                        dr(e, r, t);
                    }
                }),
            mergeValues: (e, t)=>{
                if (e === true) {
                    return true;
                }
                return {
                    ...e,
                    ...t
                };
            },
            resultToName
        }),
        items: is({
            mergeNames: (e, t, r)=>e.if(E._`${r} !== true && ${t} !== undefined`, ()=>e.assign(r, E._`${t} === true ? true : ${r} > ${t} ? ${r} : ${t}`)),
            mergeToName: (e, t, r)=>e.if(E._`${r} !== true`, ()=>e.assign(r, t === true ? true : E._`${r} > ${t} ? ${r} : ${t}`)),
            mergeValues: (e, t)=>{
                if (e === true) {
                    return true;
                }
                return Math.max(e, t);
            },
            resultToName: (e, t)=>e.var("items", t)
        })
    };
    function resultToName(e, t) {
        if (t === true) {
            return e.var("props", true);
        }
        let r = e.var("props", E._`{}`);
        if (t !== undefined) {
            dr(e, r, t);
        }
        return r;
    }
    hs.evaluatedPropsToName = resultToName;
    function dr(e, t, r) {
        Object.keys(r).forEach((s)=>e.assign(E._`${t}${E.getProperty(s)}`, true));
    }
    hs.setEvaluated = dr;
    const as = {};
    function Za(e, t) {
        return e.scopeValue("func", {
            ref: t,
            code: as[t.code] || (as[t.code] = new cs._Code(t.code))
        });
    }
    hs.useFunc = Za;
    let ur;
    ((e)=>{
        e[e.Num = 0] = "Num";
        e[e.Str = 1] = "Str";
    })(ur || (hs.Type = ur = {}));
    function ec(e, t, r) {
        if (e instanceof E.Name) {
            let s = t === ur.Num;
            if (r) {
                if (s) {
                    return E._`"[" + ${e} + "]"`;
                }
                return E._`"['" + ${e} + "']"`;
            }
            if (s) {
                return E._`"/" + ${e}`;
            }
            return E._`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
        }
        if (r) {
            return E.getProperty(e).toString();
        }
        return `/${lr(e)}`;
    }
    hs.getErrorPath = ec;
    function ps(e, t, r = e.opts.strictSchema) {
        if (!r) {
            return;
        }
        t = `strict mode: ${t}`;
        if (r === true) {
            throw Error(t);
        }
        e.self.logger.warn(t);
    }
    hs.checkStrictMode = ps;
});
const r_e = C(function(ys) {
    Object.defineProperty(ys, "__esModule", {
        value: true
    });
    const x = om();
    const gc = {
        data: new x.Name("data"),
        valCxt: new x.Name("valCxt"),
        instancePath: new x.Name("instancePath"),
        parentData: new x.Name("parentData"),
        parentDataProperty: new x.Name("parentDataProperty"),
        rootData: new x.Name("rootData"),
        dynamicAnchors: new x.Name("dynamicAnchors"),
        vErrors: new x.Name("vErrors"),
        errors: new x.Name("errors"),
        this: new x.Name("this"),
        self: new x.Name("self"),
        scope: new x.Name("scope"),
        json: new x.Name("json"),
        jsonPos: new x.Name("jsonPos"),
        jsonLen: new x.Name("jsonLen"),
        jsonPart: new x.Name("jsonPart")
    };
    ys.default = gc;
});
const ct = C(function(vs) {
    Object.defineProperty(vs, "__esModule", {
        value: true
    });
    vs.extendErrors = vs.resetErrorsCount = vs.reportExtraError = vs.reportError = vs.keyword$DataError = vs.keywordError = undefined;
    const w = om();
    const ge = i_();
    const L = r_e();
    vs.keywordError = {
        message: ({ keyword })=>w.str`must pass "${keyword}" keyword validation`
    };
    vs.keyword$DataError = {
        message: ({ keyword, schemaType })=>{
            if (schemaType) {
                return w.str`"${keyword}" keyword must be ${schemaType} ($data)`;
            }
            return w.str`"${keyword}" keyword is invalid ($data)`;
        }
    };
    function vc(e, t = vs.keywordError, r, s) {
        let { it } = e;
        let { gen, compositeRule, allErrors } = it;
        let c = $s(e, t, r);
        if (s ?? (compositeRule || allErrors)) {
            _s(gen, c);
        } else {
            gs(it, w._`[${c}]`);
        }
    }
    vs.reportError = vc;
    function wc(e, t = vs.keywordError, r) {
        let { it } = e;
        let { gen, compositeRule, allErrors } = it;
        let a = $s(e, t, r);
        _s(gen, a);
        if (!(compositeRule || allErrors)) {
            gs(it, L.default.vErrors);
        }
    }
    vs.reportExtraError = wc;
    function bc(e, t) {
        e.assign(L.default.errors, t);
        e.if(w._`${L.default.vErrors} !== null`, ()=>e.if(t, ()=>e.assign(w._`${L.default.vErrors}.length`, t), ()=>e.assign(L.default.vErrors, null)));
    }
    vs.resetErrorsCount = bc;
    function Ec({ gen, keyword, schemaValue, data, errsCount, it }) {
        if (errsCount === undefined) {
            throw Error("ajv implementation error");
        }
        let i = gen.name("err");
        gen.forRange("i", errsCount, L.default.errors, (a)=>{
            gen.const(i, w._`${L.default.vErrors}[${a}]`);
            gen.if(w._`${i}.instancePath === undefined`, ()=>gen.assign(w._`${i}.instancePath`, w.strConcat(L.default.instancePath, it.errorPath)));
            gen.assign(w._`${i}.schemaPath`, w.str`${it.errSchemaPath}/${keyword}`);
            if (it.opts.verbose) {
                gen.assign(w._`${i}.schema`, schemaValue);
                gen.assign(w._`${i}.data`, data);
            }
        });
    }
    vs.extendErrors = Ec;
    function _s(gen, t) {
        let r = gen.const("err", t);
        gen.if(w._`${L.default.vErrors} === null`, ()=>gen.assign(L.default.vErrors, w._`[${r}]`), w._`${L.default.vErrors}.push(${r})`);
        gen.code(w._`${L.default.errors}++`);
    }
    function gs(e, t) {
        let { gen, validateName, schemaEnv } = e;
        if (schemaEnv.$async) {
            gen.throw(w._`new ${e.ValidationError}(${t})`);
        } else {
            gen.assign(w._`${validateName}.errors`, t);
            gen.return(false);
        }
    }
    var Te = {
        keyword: new w.Name("keyword"),
        schemaPath: new w.Name("schemaPath"),
        params: new w.Name("params"),
        propertyName: new w.Name("propertyName"),
        message: new w.Name("message"),
        schema: new w.Name("schema"),
        parentSchema: new w.Name("parentSchema")
    };
    function $s(e, t, r) {
        let { createErrors } = e.it;
        if (createErrors === false) {
            return w._`{}`;
        }
        return Sc(e, t, r);
    }
    function Sc(e, t, r = {}) {
        let { gen, it } = e;
        let o = [
            Pc(it, r),
            Nc(e, r)
        ];
        kc(e, t, o);
        return gen.object(...o);
    }
    function Pc({ errorPath }, { instancePath }) {
        let r = instancePath ? w.str`${errorPath}${ge.getErrorPath(instancePath, ge.Type.Str)}` : errorPath;
        return [
            L.default.instancePath,
            w.strConcat(L.default.instancePath, r)
        ];
    }
    function Nc({ keyword, it: { errSchemaPath } }, { schemaPath, parentSchema }) {
        let n = parentSchema ? errSchemaPath : w.str`${errSchemaPath}/${keyword}`;
        if (schemaPath) {
            n = w.str`${n}${ge.getErrorPath(schemaPath, ge.Type.Str)}`;
        }
        return [
            Te.schemaPath,
            n
        ];
    }
    function kc(e, { params, message }, s) {
        let { keyword, data, schemaValue, it } = e;
        let { opts, propertyName, topSchemaRef, schemaPath } = it;
        s.push([
            Te.keyword,
            keyword
        ], [
            Te.params,
            typeof params === "function" ? params(e) : params || w._`{}`
        ]);
        if (opts.messages) {
            s.push([
                Te.message,
                typeof message === "function" ? message(e) : message
            ]);
        }
        if (opts.verbose) {
            s.push([
                Te.schema,
                schemaValue
            ], [
                Te.parentSchema,
                w._`${topSchemaRef}${schemaPath}`
            ], [
                L.default.data,
                data
            ]);
        }
        if (propertyName) {
            s.push([
                Te.propertyName,
                propertyName
            ]);
        }
    }
});
const ks = C(function(Ps) {
    Object.defineProperty(Ps, "__esModule", {
        value: true
    });
    Ps.boolOrEmptySchema = Ps.topBoolOrEmptySchema = undefined;
    const bs = ct();
    const Es = om();
    const Rc = r_e();
    const Ic = {
        message: "boolean schema is false"
    };
    function Tc(e) {
        let { gen, schema, validateName } = e;
        if (schema === false) {
            Ss(e, false);
        } else if (typeof schema === "object" && schema.$async === true) {
            gen.return(Rc.default.data);
        } else {
            gen.assign(Es._`${validateName}.errors`, null);
            gen.return(true);
        }
    }
    Ps.topBoolOrEmptySchema = Tc;
    function Cc(e, t) {
        let { gen, schema } = e;
        if (schema === false) {
            gen.var(t, false);
            Ss(e);
        } else {
            gen.var(t, true);
        }
    }
    Ps.boolOrEmptySchema = Cc;
    function Ss(e, t) {
        let { gen, data } = e;
        bs.reportError({
            gen,
            keyword: "false schema",
            data,
            schema: false,
            schemaCode: false,
            schemaValue: false,
            params: {},
            it: e
        }, Ic, undefined, t);
    }
});
const pr = C(function(qs) {
    Object.defineProperty(qs, "__esModule", {
        value: true
    });
    qs.getRules = qs.isJSONType = undefined;
    const Ac = [
        "string",
        "number",
        "integer",
        "boolean",
        "null",
        "object",
        "array"
    ];
    const Dc = new Set(Ac);
    function Vc(e) {
        return typeof e === "string" && Dc.has(e);
    }
    qs.isJSONType = Vc;
    function zc() {
        let e = {
            number: {
                type: "number",
                rules: []
            },
            string: {
                type: "string",
                rules: []
            },
            array: {
                type: "array",
                rules: []
            },
            object: {
                type: "object",
                rules: []
            }
        };
        return {
            types: {
                ...e,
                integer: true,
                boolean: true,
                null: true
            },
            rules: [
                {
                    rules: []
                },
                e.number,
                e.string,
                e.array,
                e.object
            ],
            post: {
                rules: []
            },
            all: {},
            keywords: {}
        };
    }
    qs.getRules = zc;
});
const hr = C(function(Rs) {
    Object.defineProperty(Rs, "__esModule", {
        value: true
    });
    Rs.shouldUseRule = Rs.shouldUseGroup = Rs.schemaHasRulesForType = undefined;
    function Kc({ schema, self }, r) {
        let s = self.RULES.types[r];
        return s && s !== true && js(schema, s);
    }
    Rs.schemaHasRulesForType = Kc;
    function js(e, t) {
        return t.rules.some((r)=>xs(e, r));
    }
    Rs.shouldUseGroup = js;
    function xs(e, t) {
        return e[t.keyword] !== undefined || t.definition.implements?.some((s)=>e[s] !== undefined);
    }
    Rs.shouldUseRule = xs;
});
const ut = C(function(Vs) {
    Object.defineProperty(Vs, "__esModule", {
        value: true
    });
    Vs.reportTypeError = Vs.checkDataTypes = Vs.checkDataType = Vs.coerceAndCheckDataType = Vs.getJSONTypes = Vs.getSchemaTypes = Vs.DataType = undefined;
    const Ts = pr();
    const Cs = hr();
    const Ms = ct();
    const m = om();
    const Pt = i_();
    let Ue;
    ((e)=>{
        e[e.Correct = 0] = "Correct";
        e[e.Wrong = 1] = "Wrong";
    })(Ue || (Vs.DataType = Ue = {}));
    function Hc(e) {
        let t = As(e.type);
        if (t.includes("null")) {
            if (e.nullable === false) {
                throw Error("type: null contradicts nullable: false");
            }
        } else {
            if (!t.length && e.nullable !== undefined) {
                throw Error('"nullable" cannot be used without "type"');
            }
            if (e.nullable === true) {
                t.push("null");
            }
        }
        return t;
    }
    Vs.getSchemaTypes = Hc;
    function As(e) {
        let t = Array.isArray(e) ? e : e ? [
            e
        ] : [];
        if (t.every(Ts.isJSONType)) {
            return t;
        }
        throw Error(`type must be JSONType or JSONType[]: ${t.join(",")}`);
    }
    Vs.getJSONTypes = As;
    function Gc(e, t) {
        let { gen, data, opts } = e;
        let o = Jc(t, opts.coerceTypes);
        let i = t.length > 0 && !(o.length === 0 && t.length === 1 && Cs.schemaHasRulesForType(e, t[0]));
        if (i) {
            let a = yr(t, data, opts.strictNumbers, Ue.Wrong);
            gen.if(a, ()=>{
                if (o.length) {
                    Wc(e, t, o);
                } else {
                    _r(e);
                }
            });
        }
        return i;
    }
    Vs.coerceAndCheckDataType = Gc;
    var Ds = new Set([
        "string",
        "number",
        "integer",
        "boolean",
        "null"
    ]);
    function Jc(e, coerceTypes) {
        if (coerceTypes) {
            return e.filter((r)=>Ds.has(r) || coerceTypes === "array" && r === "array");
        }
        return [];
    }
    function Wc(e, t, r) {
        let { gen, data, opts } = e;
        let i = gen.let("dataType", m._`typeof ${data}`);
        let a = gen.let("coerced", m._`undefined`);
        if (opts.coerceTypes === "array") {
            gen.if(m._`${i} == 'object' && Array.isArray(${data}) && ${data}.length == 1`, ()=>gen.assign(data, m._`${data}[0]`).assign(i, m._`typeof ${data}`).if(yr(t, data, opts.strictNumbers), ()=>gen.assign(a, data)));
        }
        gen.if(m._`${a} !== undefined`);
        for (let u of r){
            if (Ds.has(u) || u === "array" && opts.coerceTypes === "array") {
                c(u);
            }
        }
        gen.else();
        _r(e);
        gen.endIf();
        gen.if(m._`${a} !== undefined`, ()=>{
            gen.assign(data, a);
            Bc(e, a);
        });
        function c(u) {
            switch(u){
                case "string":
                    gen.elseIf(m._`${i} == "number" || ${i} == "boolean"`).assign(a, m._`"" + ${data}`).elseIf(m._`${data} === null`).assign(a, m._`""`);
                    return;
                case "number":
                    gen.elseIf(m._`${i} == "boolean" || ${data} === null
              || (${i} == "string" && ${data} && ${data} == +${data})`).assign(a, m._`+${data}`);
                    return;
                case "integer":
                    gen.elseIf(m._`${i} === "boolean" || ${data} === null
              || (${i} === "string" && ${data} && ${data} == +${data} && !(${data} % 1))`).assign(a, m._`+${data}`);
                    return;
                case "boolean":
                    gen.elseIf(m._`${data} === "false" || ${data} === 0 || ${data} === null`).assign(a, false).elseIf(m._`${data} === "true" || ${data} === 1`).assign(a, true);
                    return;
                case "null":
                    gen.elseIf(m._`${data} === "" || ${data} === 0 || ${data} === false`);
                    gen.assign(a, null);
                    return;
                case "array":
                    gen.elseIf(m._`${i} === "string" || ${i} === "number"
              || ${i} === "boolean" || ${data} === null`).assign(a, m._`[${data}]`);
            }
        }
    }
    function Bc({ gen, parentData, parentDataProperty }, s) {
        gen.if(m._`${parentData} !== undefined`, ()=>gen.assign(m._`${parentData}[${parentDataProperty}]`, s));
    }
    function mr(e, t, r, s = Ue.Correct) {
        let n = s === Ue.Correct ? m.operators.EQ : m.operators.NEQ;
        let o;
        switch(e){
            case "null":
                return m._`${t} ${n} null`;
            case "array":
                o = m._`Array.isArray(${t})`;
                break;
            case "object":
                o = m._`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
                break;
            case "integer":
                o = i(m._`!(${t} % 1) && !isNaN(${t})`);
                break;
            case "number":
                o = i();
                break;
            default:
                return m._`typeof ${t} ${n} ${e}`;
        }
        if (s === Ue.Correct) {
            return o;
        }
        return m.not(o);
        function i(a = m.nil) {
            return m.and(m._`typeof ${t} == "number"`, a, r ? m._`isFinite(${t})` : m.nil);
        }
    }
    Vs.checkDataType = mr;
    function yr(e, t, r, s) {
        if (e.length === 1) {
            return mr(e[0], t, r, s);
        }
        let n;
        let o = Pt.toHash(e);
        if (o.array && o.object) {
            let i = m._`typeof ${t} != "object"`;
            n = o.null ? i : m._`!${t} || ${i}`;
            delete o.null;
            delete o.array;
            delete o.object;
        } else {
            n = m.nil;
        }
        if (o.number) {
            delete o.integer;
        }
        for(let i in o){
            n = m.and(n, mr(i, t, r, s));
        }
        return n;
    }
    Vs.checkDataTypes = yr;
    var Qc = {
        message: ({ schema })=>`must be ${schema}`,
        params: ({ schema, schemaValue })=>{
            if (typeof schema === "string") {
                return m._`{type: ${schema}}`;
            }
            return m._`{type: ${schemaValue}}`;
        }
    };
    function _r(e) {
        let t = Xc(e);
        Ms.reportError(t, Qc);
    }
    Vs.reportTypeError = _r;
    function Xc(e) {
        let { gen, data, schema } = e;
        let n = Pt.schemaRefOrVal(e, schema, "type");
        return {
            gen,
            keyword: "type",
            data,
            schema: schema.type,
            schemaCode: n,
            schemaValue: n,
            parentSchema: schema,
            params: {},
            it: e
        };
    }
});
const Hs = C(function(Fs) {
    Object.defineProperty(Fs, "__esModule", {
        value: true
    });
    Fs.assignDefaults = undefined;
    const B = om();
    const Ks = i_();
    function nu(e, t) {
        let { properties, items } = e.schema;
        if (t === "object" && properties) {
            for(let n in properties){
                Us(e, n, properties[n].default);
            }
        } else if (t === "array" && Array.isArray(items)) {
            items.forEach((n, o)=>Us(e, o, n.default));
        }
    }
    Fs.assignDefaults = nu;
    function Us(e, t, r) {
        let { gen, compositeRule, data, opts } = e;
        if (r === undefined) {
            return;
        }
        let a = B._`${data}${B.getProperty(t)}`;
        if (compositeRule) {
            Ks.checkStrictMode(e, `default is ignored for: ${a}`);
            return;
        }
        let c = B._`${a} === undefined`;
        if (opts.useDefaults === "empty") {
            c = B._`${c} || ${a} === null || ${a} === ""`;
        }
        gen.if(c, B._`${a} = ${B.stringify(r)}`);
    }
});
const Q = C(function(Bs) {
    Object.defineProperty(Bs, "__esModule", {
        value: true
    });
    Bs.validateUnion = Bs.validateArray = Bs.usePattern = Bs.callValidateCode = Bs.schemaProperties = Bs.allSchemaProperties = Bs.noPropertyInData = Bs.propertyInData = Bs.isOwnProperty = Bs.hasPropFunc = Bs.reportMissingProp = Bs.checkMissingProp = Bs.checkReportMissingProp = undefined;
    const S = om();
    const Ke = i_();
    const $e = r_e();
    const Gs = i_();
    function ou(e, t) {
        let { gen, data, it } = e;
        gen.if($r(gen, data, t, it.opts.ownProperties), ()=>{
            e.setParams({
                missingProperty: S._`${t}`
            }, true);
            e.error();
        });
    }
    Bs.checkReportMissingProp = ou;
    function iu({ gen, data, it: { opts } }, s, n) {
        return S.or(...s.map((o)=>S.and($r(gen, data, o, opts.ownProperties), S._`${n} = ${o}`)));
    }
    Bs.checkMissingProp = iu;
    function au(e, missingProperty) {
        e.setParams({
            missingProperty
        }, true);
        e.error();
    }
    Bs.reportMissingProp = au;
    function Js(e) {
        return e.scopeValue("func", {
            ref: Object.prototype.hasOwnProperty,
            code: S._`Object.prototype.hasOwnProperty`
        });
    }
    Bs.hasPropFunc = Js;
    function gr(e, t, r) {
        return S._`${Js(e)}.call(${t}, ${r})`;
    }
    Bs.isOwnProperty = gr;
    function cu(e, t, r, s) {
        let n = S._`${t}${S.getProperty(r)} !== undefined`;
        if (s) {
            return S._`${n} && ${gr(e, t, r)}`;
        }
        return n;
    }
    Bs.propertyInData = cu;
    function $r(e, t, r, s) {
        let n = S._`${t}${S.getProperty(r)} === undefined`;
        if (s) {
            return S.or(n, S.not(gr(e, t, r)));
        }
        return n;
    }
    Bs.noPropertyInData = $r;
    function Ws(e) {
        if (e) {
            return Object.keys(e).filter((t)=>t !== "__proto__");
        }
        return [];
    }
    Bs.allSchemaProperties = Ws;
    function uu(e, t) {
        return Ws(t).filter((r)=>!Ke.alwaysValidSchema(e, t[r]));
    }
    Bs.schemaProperties = uu;
    function lu({ schemaCode, data, it: { gen, topSchemaRef, schemaPath, errorPath }, it }, a, c, u) {
        let l = u ? S._`${schemaCode}, ${data}, ${topSchemaRef}${schemaPath}` : data;
        let f = [
            [
                $e.default.instancePath,
                S.strConcat($e.default.instancePath, errorPath)
            ],
            [
                $e.default.parentData,
                it.parentData
            ],
            [
                $e.default.parentDataProperty,
                it.parentDataProperty
            ],
            [
                $e.default.rootData,
                $e.default.rootData
            ]
        ];
        if (it.opts.dynamicRef) {
            f.push([
                $e.default.dynamicAnchors,
                $e.default.dynamicAnchors
            ]);
        }
        let b = S._`${l}, ${gen.object(...f)}`;
        if (c !== S.nil) {
            return S._`${a}.call(${c}, ${b})`;
        }
        return S._`${a}(${b})`;
    }
    Bs.callValidateCode = lu;
    const du = S._`new RegExp`;
    function fu({ gen, it: { opts } }, r) {
        let s = opts.unicodeRegExp ? "u" : "";
        let { regExp } = opts.code;
        let o = regExp(r, s);
        return gen.scopeValue("pattern", {
            key: o.toString(),
            ref: o,
            code: S._`${regExp.code === "new RegExp" ? du : Gs.useFunc(gen, regExp)}(${r}, ${s})`
        });
    }
    Bs.usePattern = fu;
    function pu(e) {
        let { gen, data, keyword, it } = e;
        let o = gen.name("valid");
        if (it.allErrors) {
            let a = gen.let("valid", true);
            i(()=>gen.assign(a, false));
            return a;
        }
        gen.var(o, true);
        i(()=>gen.break());
        return o;
        function i(a) {
            let c = gen.const("len", S._`${data}.length`);
            gen.forRange("i", 0, c, (u)=>{
                e.subschema({
                    keyword,
                    dataProp: u,
                    dataPropType: Ke.Type.Num
                }, o);
                gen.if(S.not(o), a);
            });
        }
    }
    Bs.validateArray = pu;
    function hu(e) {
        let { gen, schema, keyword, it } = e;
        if (!Array.isArray(schema)) {
            throw Error("ajv implementation error");
        }
        if (schema.some((c)=>Ke.alwaysValidSchema(it, c)) && !it.opts.unevaluated) {
            return;
        }
        let i = gen.let("valid", false);
        let a = gen.name("_valid");
        gen.block(()=>schema.forEach((c, u)=>{
                let l = e.subschema({
                    keyword,
                    schemaProp: u,
                    compositeRule: true
                }, a);
                gen.assign(i, S._`${i} || ${a}`);
                if (!e.mergeValidEvaluated(l, a)) {
                    gen.if(S.not(i));
                }
            }));
        e.result(i, ()=>e.reset(), ()=>e.error(true));
    }
    Bs.validateUnion = hu;
});
const sn = C(function(tn) {
    Object.defineProperty(tn, "__esModule", {
        value: true
    });
    tn.validateKeywordUsage = tn.validSchemaType = tn.funcKeywordCode = tn.macroKeywordCode = undefined;
    const R = om();
    const Ce = r_e();
    const Ys = Q();
    const Zs = ct();
    function ku(e, t) {
        let { gen, keyword, schema, parentSchema, it } = e;
        let a = t.macro.call(it.self, schema, parentSchema, it);
        let c = en(gen, keyword, a);
        if (it.opts.validateSchema !== false) {
            it.self.validateSchema(a, true);
        }
        let u = gen.name("valid");
        e.subschema({
            schema: a,
            schemaPath: R.nil,
            errSchemaPath: `${it.errSchemaPath}/${keyword}`,
            topSchemaRef: c,
            compositeRule: true
        }, u);
        e.pass(u, ()=>e.error(true));
    }
    tn.macroKeywordCode = ku;
    function qu(e, t) {
        let { gen, keyword, schema, parentSchema, $data, it } = e;
        ju(it, t);
        let u = !$data && t.compile ? t.compile.call(it.self, schema, parentSchema, it) : t.validate;
        let l = en(gen, keyword, u);
        let f = gen.let("valid");
        e.block$data(f, b);
        e.ok(t.valid ?? f);
        function b() {
            if (t.errors === false) {
                p();
                if (t.modifying) {
                    Xs(e);
                }
                y(()=>e.error());
            } else {
                let v = t.async ? _() : h();
                if (t.modifying) {
                    Xs(e);
                }
                y(()=>Ou(e, v));
            }
        }
        function _() {
            let v = gen.let("ruleErrs", null);
            gen.try(()=>p(R._`await `), (O)=>gen.assign(f, false).if(R._`${O} instanceof ${it.ValidationError}`, ()=>gen.assign(v, R._`${O}.errors`), ()=>gen.throw(O)));
            return v;
        }
        function h() {
            let v = R._`${l}.errors`;
            gen.assign(v, null);
            p(R.nil);
            return v;
        }
        function p(v = t.async ? R._`await ` : R.nil) {
            let O = it.opts.passContext ? Ce.default.this : Ce.default.self;
            let q = !("compile" in t && !$data || t.schema === false);
            gen.assign(f, R._`${v}${Ys.callValidateCode(e, l, O, q)}`, t.modifying);
        }
        function y(v) {
            gen.if(R.not(t.valid ?? f), v);
        }
    }
    tn.funcKeywordCode = qu;
    function Xs({ gen, data, it }) {
        gen.if(it.parentData, ()=>gen.assign(data, R._`${it.parentData}[${it.parentDataProperty}]`));
    }
    function Ou(e, t) {
        let { gen } = e;
        gen.if(R._`Array.isArray(${t})`, ()=>{
            gen.assign(Ce.default.vErrors, R._`${Ce.default.vErrors} === null ? ${t} : ${Ce.default.vErrors}.concat(${t})`).assign(Ce.default.errors, R._`${Ce.default.vErrors}.length`);
            Zs.extendErrors(e);
        }, ()=>e.error());
    }
    function ju({ schemaEnv }, t) {
        if (t.async && !schemaEnv.$async) {
            throw Error("async keyword in sync schema");
        }
    }
    function en(gen, keyword, r) {
        if (r === undefined) {
            throw Error(`keyword "${keyword}" failed to compile`);
        }
        return gen.scopeValue("keyword", typeof r === "function" ? {
            ref: r
        } : {
            ref: r,
            code: R.stringify(r)
        });
    }
    function xu(e, t, r = false) {
        return !t.length || t.some((s)=>{
            switch(s){
                case "array":
                    return Array.isArray(e);
                case "object":
                    return e && typeof e === "object" && !Array.isArray(e);
                default:
                    return typeof e == s || r && typeof e === "undefined";
            }
        });
    }
    tn.validSchemaType = xu;
    function Ru({ schema, opts, self, errSchemaPath }, n, o) {
        if (Array.isArray(n.keyword) ? !n.keyword.includes(o) : n.keyword !== o) {
            throw Error("ajv implementation error");
        }
        let n_dependencies = n.dependencies;
        if (n_dependencies?.some((a)=>!Object.prototype.hasOwnProperty.call(schema, a))) {
            throw Error(`parent schema must have dependencies of ${o}: ${n_dependencies.join(",")}`);
        }
        if (n.validateSchema) {
            if (!n.validateSchema(schema[o])) {
                let c = `keyword "${o}" value is invalid at path "${errSchemaPath}": ` + self.errorsText(n.validateSchema.errors);
                if (opts.validateSchema === "log") {
                    self.logger.error(c);
                } else {
                    throw Error(c);
                }
            }
        }
    }
    tn.validateKeywordUsage = Ru;
});
const an = C(function(nn) {
    Object.defineProperty(nn, "__esModule", {
        value: true
    });
    nn.extendSubschemaMode = nn.extendSubschemaData = nn.getSubschema = undefined;
    const K = om();
    const Nt = i_();
    function Mu(e, { keyword, schemaProp, schema, schemaPath, errSchemaPath, topSchemaRef }) {
        if (keyword !== undefined && schema !== undefined) {
            throw Error('both "keyword" and "schema" passed, only one allowed');
        }
        if (keyword !== undefined) {
            let a = e.schema[keyword];
            if (schemaProp === undefined) {
                return {
                    schema: a,
                    schemaPath: K._`${e.schemaPath}${K.getProperty(keyword)}`,
                    errSchemaPath: `${e.errSchemaPath}/${keyword}`
                };
            }
            return {
                schema: a[schemaProp],
                schemaPath: K._`${e.schemaPath}${K.getProperty(keyword)}${K.getProperty(schemaProp)}`,
                errSchemaPath: `${e.errSchemaPath}/${keyword}/${Nt.escapeFragment(schemaProp)}`
            };
        }
        if (schema !== undefined) {
            if (schemaPath === undefined || errSchemaPath === undefined || topSchemaRef === undefined) {
                throw Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
            }
            return {
                schema,
                schemaPath,
                topSchemaRef,
                errSchemaPath
            };
        }
        throw Error('either "keyword" or "schema" must be passed');
    }
    nn.getSubschema = Mu;
    function Au(e, t, { dataProp, dataPropType, data, dataTypes, propertyName }) {
        if (data !== undefined && dataProp !== undefined) {
            throw Error('both "data" and "dataProp" passed, only one allowed');
        }
        let { gen } = t;
        if (dataProp !== undefined) {
            let { errorPath, dataPathArr, opts } = t;
            let b = gen.let("data", K._`${t.data}${K.getProperty(dataProp)}`, true);
            c(b);
            e.errorPath = K.str`${errorPath}${Nt.getErrorPath(dataProp, dataPropType, opts.jsPropertySyntax)}`;
            e.parentDataProperty = K._`${dataProp}`;
            e.dataPathArr = [
                ...dataPathArr,
                e.parentDataProperty
            ];
        }
        if (data !== undefined) {
            let u = data instanceof K.Name ? data : gen.let("data", data, true);
            c(u);
            if (propertyName !== undefined) {
                e.propertyName = propertyName;
            }
        }
        if (dataTypes) {
            e.dataTypes = dataTypes;
        }
        function c(u) {
            e.data = u;
            e.dataLevel = t.dataLevel + 1;
            e.dataTypes = [];
            t.definedProperties = new Set;
            e.parentData = t.data;
            e.dataNames = [
                ...t.dataNames,
                u
            ];
        }
    }
    nn.extendSubschemaData = Au;
    function Du(e, { jtdDiscriminator, jtdMetadata, compositeRule, createErrors, allErrors }) {
        if (compositeRule !== undefined) {
            e.compositeRule = compositeRule;
        }
        if (createErrors !== undefined) {
            e.createErrors = createErrors;
        }
        if (allErrors !== undefined) {
            e.allErrors = allErrors;
        }
        e.jtdDiscriminator = jtdDiscriminator;
        e.jtdMetadata = jtdMetadata;
    }
    nn.extendSubschemaMode = Du;
});
const un = C(function(nm, cn) {
    var ve = cn.exports = function(e, t, r) {
        if (typeof t === "function") {
            r = t;
            t = {};
        }
        r = t.cb || r;
        const s = typeof r === "function" ? r : r.pre || function() {};
        const n = r.post || function() {};
        kt(t, s, n, e, "", e);
    };
    ve.keywords = {
        additionalItems: true,
        items: true,
        contains: true,
        additionalProperties: true,
        propertyNames: true,
        not: true,
        if: true,
        then: true,
        else: true
    };
    ve.arrayKeywords = {
        items: true,
        allOf: true,
        anyOf: true,
        oneOf: true
    };
    ve.propsKeywords = {
        $defs: true,
        definitions: true,
        properties: true,
        patternProperties: true,
        dependencies: true
    };
    ve.skipKeywords = {
        default: true,
        enum: true,
        const: true,
        required: true,
        maximum: true,
        minimum: true,
        exclusiveMaximum: true,
        exclusiveMinimum: true,
        multipleOf: true,
        maxLength: true,
        minLength: true,
        pattern: true,
        format: true,
        maxItems: true,
        minItems: true,
        uniqueItems: true,
        maxProperties: true,
        minProperties: true
    };
    function kt(e, t, r, s, n, o, i, a, c, u) {
        if (s && typeof s === "object" && !Array.isArray(s)) {
            t(s, n, o, i, a, c, u);
            for(const l in s){
                const f = s[l];
                if (Array.isArray(f)) {
                    if (l in ve.arrayKeywords) {
                        for(let b = 0; b < f.length; b++){
                            kt(e, t, r, f[b], `${n}/${l}/${b}`, o, n, l, s, b);
                        }
                    }
                } else if (l in ve.propsKeywords) {
                    if (f && typeof f === "object") {
                        for(const _ in f){
                            kt(e, t, r, f[_], `${n}/${l}/${Uu(_)}`, o, n, l, s, _);
                        }
                    }
                } else if (l in ve.keywords || e.allKeys && !(l in ve.skipKeywords)) {
                    kt(e, t, r, f, `${n}/${l}`, o, n, l, s);
                }
            }
            r(s, n, o, i, a, c, u);
        }
    }
    function Uu(e) {
        return e.replace(/~/g, "~0").replace(/\//g, "~1");
    }
});
const lt = C(function(hn) {
    Object.defineProperty(hn, "__esModule", {
        value: true
    });
    hn.getSchemaRefs = hn.resolveUrl = hn.normalizeId = hn._getFullPath = hn.getFullPath = hn.inlineRef = undefined;
    const ln = i_();
    const Ku = hso();
    const Fu = un();
    const Lu = new Set([
        "type",
        "format",
        "pattern",
        "maxLength",
        "minLength",
        "maxProperties",
        "minProperties",
        "maxItems",
        "minItems",
        "maximum",
        "minimum",
        "uniqueItems",
        "multipleOf",
        "required",
        "enum",
        "const"
    ]);
    function Hu(e, t = true) {
        if (typeof e === "boolean") {
            return true;
        }
        if (t === true) {
            return !vr(e);
        }
        if (!t) {
            return false;
        }
        return dn(e) <= t;
    }
    hn.inlineRef = Hu;
    var Gu = new Set([
        "$ref",
        "$recursiveRef",
        "$recursiveAnchor",
        "$dynamicRef",
        "$dynamicAnchor"
    ]);
    function vr(e) {
        for(let t in e){
            if (Gu.has(t)) {
                return true;
            }
            let r = e[t];
            if (Array.isArray(r) && r.some(vr)) {
                return true;
            }
            if (typeof r === "object" && vr(r)) {
                return true;
            }
        }
        return false;
    }
    function dn(e) {
        let t = 0;
        for(let r in e){
            if (r === "$ref") {
                return Infinity;
            }
            t++;
            if (Lu.has(r)) {
                continue;
            }
            if (typeof e[r] === "object") {
                ln.eachItem(e[r], (s)=>t += dn(s));
            }
            if (t === Infinity) {
                return Infinity;
            }
        }
        return t;
    }
    function fn(e, t = "", r) {
        if (r !== false) {
            t = Fe(t);
        }
        let s = e.parse(t);
        return pn(e, s);
    }
    hn.getFullPath = fn;
    function pn(e, t) {
        return `${e.serialize(t).split("#")[0]}#`;
    }
    hn._getFullPath = pn;
    var Ju = /#\/?$/;
    function Fe(e) {
        if (e) {
            return e.replace(Ju, "");
        }
        return "";
    }
    hn.normalizeId = Fe;
    function Wu(e, t, r) {
        r = Fe(r);
        return e.resolve(t, r);
    }
    hn.resolveUrl = Wu;
    const Bu = /^[a-z_][-a-z0-9._]*$/i;
    function Qu(e, t) {
        if (typeof e === "boolean") {
            return {};
        }
        let { schemaId, uriResolver } = this.opts;
        let n = Fe(e[schemaId] || t);
        let o = {
            "": n
        };
        let i = fn(uriResolver, n, false);
        let a = {};
        let c = new Set;
        Fu(e, {
            allKeys: true
        }, (f, b, _, h)=>{
            if (h === undefined) {
                return;
            }
            let p = i + b;
            let y = o[h];
            if (typeof f[schemaId] === "string") {
                y = v.call(this, f[schemaId]);
            }
            O.call(this, f.$anchor);
            O.call(this, f.$dynamicAnchor);
            o[b] = y;
            function v(q) {
                let resolve = this.opts.uriResolver.resolve;
                q = Fe(y ? resolve(y, q) : q);
                if (c.has(q)) {
                    throw l(q);
                }
                c.add(q);
                let N = this.refs[q];
                if (typeof N === "string") {
                    N = this.refs[N];
                }
                if (typeof N === "object") {
                    u(f, N.schema, q);
                } else if (q !== Fe(p)) {
                    if (q[0] === "#") {
                        u(f, a[q], q);
                        a[q] = f;
                    } else {
                        this.refs[q] = p;
                    }
                }
                return q;
            }
            function O(q) {
                if (typeof q === "string") {
                    if (!Bu.test(q)) {
                        throw Error(`invalid anchor "${q}"`);
                    }
                    v.call(this, `#${q}`);
                }
            }
        });
        return a;
        function u(f, b, _) {
            if (b !== undefined && !Ku(f, b)) {
                throw l(_);
            }
        }
        function l(f) {
            return Error(`reference "${f}" resolves to more than one schema`);
        }
    }
    hn.getSchemaRefs = Qu;
});
const x5t = C(function(jn) {
    Object.defineProperty(jn, "__esModule", {
        value: true
    });
    jn.getData = jn.KeywordCxt = jn.validateFunctionCode = undefined;
    const Ot = ks();
    const qt = ut();
    const He = hr();
    const we = ut();
    const $n = Hs();
    const re = sn();
    const Le = an();
    const d = om();
    const P = r_e();
    const vn = lt();
    const F = i_();
    const te = ct();
    function rl(e) {
        if (En(e)) {
            Sn(e);
            if (bn(e)) {
                ol(e);
                return;
            }
        }
        wn(e, ()=>Ot.topBoolOrEmptySchema(e));
    }
    jn.validateFunctionCode = rl;
    function wn({ gen, validateName, schema, schemaEnv, opts }, o) {
        if (opts.code.es5) {
            gen.func(validateName, d._`${P.default.data}, ${P.default.valCxt}`, schemaEnv.$async, ()=>{
                gen.code(d._`"use strict"; ${yn(schema, opts)}`);
                nl(gen, opts);
                gen.code(o);
            });
        } else {
            gen.func(validateName, d._`${P.default.data}, ${sl(opts)}`, schemaEnv.$async, ()=>gen.code(yn(schema, opts)).code(o));
        }
    }
    function sl(opts) {
        return d._`{${P.default.instancePath}="", ${P.default.parentData}, ${P.default.parentDataProperty}, ${P.default.rootData}=${P.default.data}${opts.dynamicRef ? d._`, ${P.default.dynamicAnchors}={}` : d.nil}}={}`;
    }
    function nl(gen, opts) {
        gen.if(P.default.valCxt, ()=>{
            gen.var(P.default.instancePath, d._`${P.default.valCxt}.${P.default.instancePath}`);
            gen.var(P.default.parentData, d._`${P.default.valCxt}.${P.default.parentData}`);
            gen.var(P.default.parentDataProperty, d._`${P.default.valCxt}.${P.default.parentDataProperty}`);
            gen.var(P.default.rootData, d._`${P.default.valCxt}.${P.default.rootData}`);
            if (opts.dynamicRef) {
                gen.var(P.default.dynamicAnchors, d._`${P.default.valCxt}.${P.default.dynamicAnchors}`);
            }
        }, ()=>{
            gen.var(P.default.instancePath, d._`""`);
            gen.var(P.default.parentData, d._`undefined`);
            gen.var(P.default.parentDataProperty, d._`undefined`);
            gen.var(P.default.rootData, P.default.data);
            if (opts.dynamicRef) {
                gen.var(P.default.dynamicAnchors, d._`{}`);
            }
        });
    }
    function ol(e) {
        let { schema, opts, gen } = e;
        wn(e, ()=>{
            if (opts.$comment && schema.$comment) {
                Nn(e);
            }
            ll(e);
            gen.let(P.default.vErrors, null);
            gen.let(P.default.errors, 0);
            if (opts.unevaluated) {
                il(e);
            }
            Pn(e);
            pl(e);
        });
    }
    function il(e) {
        let { gen, validateName } = e;
        e.evaluated = gen.const("evaluated", d._`${validateName}.evaluated`);
        gen.if(d._`${e.evaluated}.dynamicProps`, ()=>gen.assign(d._`${e.evaluated}.props`, d._`undefined`));
        gen.if(d._`${e.evaluated}.dynamicItems`, ()=>gen.assign(d._`${e.evaluated}.items`, d._`undefined`));
    }
    function yn(schema, opts) {
        let r = typeof schema === "object" && schema[opts.schemaId];
        if (r && (opts.code.source || opts.code.process)) {
            return d._`/*# sourceURL=${r} */`;
        }
        return d.nil;
    }
    function al(e, t) {
        if (En(e)) {
            Sn(e);
            if (bn(e)) {
                cl(e, t);
                return;
            }
        }
        Ot.boolOrEmptySchema(e, t);
    }
    function bn({ schema, self }) {
        if (typeof schema === "boolean") {
            return !schema;
        }
        for(let r in schema){
            if (self.RULES.all[r]) {
                return true;
            }
        }
        return false;
    }
    function En(e) {
        return typeof e.schema !== "boolean";
    }
    function cl(e, t) {
        let { schema, gen, opts } = e;
        if (opts.$comment && schema.$comment) {
            Nn(e);
        }
        dl(e);
        fl(e);
        let o = gen.const("_errs", P.default.errors);
        Pn(e, o);
        gen.var(t, d._`${o} === ${P.default.errors}`);
    }
    function Sn(e) {
        F.checkUnknownRules(e);
        ul(e);
    }
    function Pn(e, t) {
        if (e.opts.jtd) {
            return _n(e, [], false, t);
        }
        let r = qt.getSchemaTypes(e.schema);
        let s = qt.coerceAndCheckDataType(e, r);
        _n(e, r, !s, t);
    }
    function ul({ schema, errSchemaPath, opts, self }) {
        if (schema.$ref && opts.ignoreKeywordsWithRef && F.schemaHasRulesButRef(schema, self.RULES)) {
            self.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath}"`);
        }
    }
    function ll(e) {
        let { schema, opts } = e;
        if (schema.default !== undefined && opts.useDefaults && opts.strictSchema) {
            F.checkStrictMode(e, "default is ignored in the schema root");
        }
    }
    function dl(e) {
        let t = e.schema[e.opts.schemaId];
        if (t) {
            e.baseId = vn.resolveUrl(e.opts.uriResolver, e.baseId, t);
        }
    }
    function fl(e) {
        if (e.schema.$async && !e.schemaEnv.$async) {
            throw Error("async schema in sync schema");
        }
    }
    function Nn({ gen, schemaEnv, schema, errSchemaPath, opts }) {
        let schema_$comment = schema.$comment;
        if (opts.$comment === true) {
            gen.code(d._`${P.default.self}.logger.log(${schema_$comment})`);
        } else if (typeof opts.$comment === "function") {
            let i = d.str`${errSchemaPath}/$comment`;
            let a = gen.scopeValue("root", {
                ref: schemaEnv.root
            });
            gen.code(d._`${P.default.self}.opts.$comment(${schema_$comment}, ${i}, ${a}.schema)`);
        }
    }
    function pl(e) {
        let { gen, schemaEnv, validateName, ValidationError, opts } = e;
        if (schemaEnv.$async) {
            gen.if(d._`${P.default.errors} === 0`, ()=>gen.return(P.default.data), ()=>gen.throw(d._`new ${ValidationError}(${P.default.vErrors})`));
        } else {
            gen.assign(d._`${validateName}.errors`, P.default.vErrors);
            if (opts.unevaluated) {
                hl(e);
            }
            gen.return(d._`${P.default.errors} === 0`);
        }
    }
    function hl({ gen, evaluated, props, items }) {
        if (props instanceof d.Name) {
            gen.assign(d._`${evaluated}.props`, props);
        }
        if (items instanceof d.Name) {
            gen.assign(d._`${evaluated}.items`, items);
        }
    }
    function _n(e, t, r, s) {
        let { gen, schema, data, allErrors, opts, self } = e;
        let { RULES } = self;
        if (schema.$ref && (opts.ignoreKeywordsWithRef || !F.schemaHasRulesButRef(schema, RULES))) {
            gen.block(()=>qn(e, "$ref", RULES.all.$ref.definition));
            return;
        }
        if (!opts.jtd) {
            ml(e, t);
        }
        gen.block(()=>{
            for (let b of RULES.rules){
                f(b);
            }
            f(RULES.post);
        });
        function f(b) {
            if (!He.shouldUseGroup(schema, b)) {
                return;
            }
            if (b.type) {
                gen.if(we.checkDataType(b.type, data, opts.strictNumbers));
                gn(e, b);
                if (t.length === 1 && t[0] === b.type && r) {
                    gen.else();
                    we.reportTypeError(e);
                }
                gen.endIf();
            } else {
                gn(e, b);
            }
            if (!allErrors) {
                gen.if(d._`${P.default.errors} === ${s || 0}`);
            }
        }
    }
    function gn(e, t) {
        let { gen, schema, opts: { useDefaults } } = e;
        if (useDefaults) {
            $n.assignDefaults(e, t.type);
        }
        gen.block(()=>{
            for (let o of t.rules){
                if (He.shouldUseRule(schema, o)) {
                    qn(e, o.keyword, o.definition, t.type);
                }
            }
        });
    }
    function ml(e, t) {
        if (e.schemaEnv.meta || !e.opts.strictTypes) {
            return;
        }
        yl(e, t);
        if (!e.opts.allowUnionTypes) {
            _l(e, t);
        }
        gl(e, e.dataTypes);
    }
    function yl(e, t) {
        if (!t.length) {
            return;
        }
        if (!e.dataTypes.length) {
            e.dataTypes = t;
            return;
        }
        t.forEach((r)=>{
            if (!kn(e.dataTypes, r)) {
                wr(e, `type "${r}" not allowed by context "${e.dataTypes.join(",")}"`);
            }
        });
        vl(e, t);
    }
    function _l(e, t) {
        if (t.length > 1 && !(t.length === 2 && t.includes("null"))) {
            wr(e, "use allowUnionTypes to allow union type keyword");
        }
    }
    function gl(e, dataTypes) {
        let all = e.self.RULES.all;
        for(let s in all){
            let n = all[s];
            if (typeof n === "object" && He.shouldUseRule(e.schema, n)) {
                let { type } = n.definition;
                if (type.length && !type.some((i)=>$l(dataTypes, i))) {
                    wr(e, `missing type "${type.join(",")}" for keyword "${s}"`);
                }
            }
        }
    }
    function $l(dataTypes, t) {
        return dataTypes.includes(t) || t === "number" && dataTypes.includes("integer");
    }
    function kn(e, t) {
        return e.includes(t) || t === "integer" && e.includes("number");
    }
    function vl(e, t) {
        let r = [];
        for (let s of e.dataTypes){
            if (kn(t, s)) {
                r.push(s);
            } else if (t.includes("integer") && s === "number") {
                r.push("integer");
            }
        }
        e.dataTypes = r;
    }
    function wr(e, t) {
        let r = e.schemaEnv.baseId + e.errSchemaPath;
        t += ` at "${r}" (strictTypes)`;
        F.checkStrictMode(e, t, e.opts.strictTypes);
    }
    class br {
        constructor(e, t, r){
            re.validateKeywordUsage(e, t, r);
            this.gen = e.gen;
            this.allErrors = e.allErrors;
            this.keyword = r;
            this.data = e.data;
            this.schema = e.schema[r];
            this.$data = t.$data && e.opts.$data && this.schema && this.schema.$data;
            this.schemaValue = F.schemaRefOrVal(e, this.schema, r, this.$data);
            this.schemaType = t.schemaType;
            this.parentSchema = e.schema;
            this.params = {};
            this.it = e;
            this.def = t;
            if (this.$data) {
                this.schemaCode = e.gen.const("vSchema", On(this.$data, e));
            } else {
                this.schemaCode = this.schemaValue;
                if (!re.validSchemaType(this.schema, t.schemaType, t.allowUndefined)) {
                    throw Error(`${r} value must be ${JSON.stringify(t.schemaType)}`);
                }
            }
            if ("code" in t ? t.trackErrors : t.errors !== false) {
                this.errsCount = e.gen.const("_errs", P.default.errors);
            }
        }
        result(e, t, r) {
            this.failResult(d.not(e), t, r);
        }
        failResult(e, t, r) {
            this.gen.if(e);
            if (r) {
                r();
            } else {
                this.error();
            }
            if (t) {
                this.gen.else();
                t();
                if (this.allErrors) {
                    this.gen.endIf();
                }
            } else if (this.allErrors) {
                this.gen.endIf();
            } else {
                this.gen.else();
            }
        }
        pass(e, t) {
            this.failResult(d.not(e), undefined, t);
        }
        fail(e) {
            if (e === undefined) {
                this.error();
                if (!this.allErrors) {
                    this.gen.if(false);
                }
                return;
            }
            this.gen.if(e);
            this.error();
            if (this.allErrors) {
                this.gen.endIf();
            } else {
                this.gen.else();
            }
        }
        fail$data(e) {
            if (!this.$data) {
                return this.fail(e);
            }
            let { schemaCode } = this;
            this.fail(d._`${schemaCode} !== undefined && (${d.or(this.invalid$data(), e)})`);
        }
        error(e, t, r) {
            if (t) {
                this.setParams(t);
                this._error(e, r);
                this.setParams({});
                return;
            }
            this._error(e, r);
        }
        _error(e, t) {
            (e ? te.reportExtraError : te.reportError)(this, this.def.error, t);
        }
        $dataError() {
            te.reportError(this, this.def.$dataError || te.keyword$DataError);
        }
        reset() {
            if (this.errsCount === undefined) {
                throw Error('add "trackErrors" to keyword definition');
            }
            te.resetErrorsCount(this.gen, this.errsCount);
        }
        ok(e) {
            if (!this.allErrors) {
                this.gen.if(e);
            }
        }
        setParams(e, t) {
            if (t) {
                Object.assign(this.params, e);
            } else {
                this.params = e;
            }
        }
        block$data(e, t, r = d.nil) {
            this.gen.block(()=>{
                this.check$data(e, r);
                t();
            });
        }
        check$data(e = d.nil, t = d.nil) {
            if (!this.$data) {
                return;
            }
            let { gen, schemaCode, schemaType, def } = this;
            gen.if(d.or(d._`${schemaCode} === undefined`, t));
            if (e !== d.nil) {
                gen.assign(e, true);
            }
            if (schemaType.length || def.validateSchema) {
                gen.elseIf(this.invalid$data());
                this.$dataError();
                if (e !== d.nil) {
                    gen.assign(e, false);
                }
            }
            gen.else();
        }
        invalid$data() {
            let { gen, schemaCode, schemaType, def, it } = this;
            return d.or(o(), i());
            function o() {
                if (schemaType.length) {
                    if (!(schemaCode instanceof d.Name)) {
                        throw Error("ajv implementation error");
                    }
                    let a = Array.isArray(schemaType) ? schemaType : [
                        schemaType
                    ];
                    return d._`${we.checkDataTypes(a, schemaCode, it.opts.strictNumbers, we.DataType.Wrong)}`;
                }
                return d.nil;
            }
            function i() {
                if (def.validateSchema) {
                    let a = gen.scopeValue("validate$data", {
                        ref: def.validateSchema
                    });
                    return d._`!${a}(${schemaCode})`;
                }
                return d.nil;
            }
        }
        subschema(e, t) {
            let r = Le.getSubschema(this.it, e);
            Le.extendSubschemaData(r, this.it, e);
            Le.extendSubschemaMode(r, e);
            let s = {
                ...this.it,
                ...r,
                items: undefined,
                props: undefined
            };
            al(s, t);
            return s;
        }
        mergeEvaluated(e, t) {
            let { it, gen } = this;
            if (!it.opts.unevaluated) {
                return;
            }
            if (it.props !== true && e.props !== undefined) {
                it.props = F.mergeEvaluated.props(gen, e.props, it.props, t);
            }
            if (it.items !== true && e.items !== undefined) {
                it.items = F.mergeEvaluated.items(gen, e.items, it.items, t);
            }
        }
        mergeValidEvaluated(e, t) {
            let { it, gen } = this;
            if (it.opts.unevaluated && (it.props !== true || it.items !== true)) {
                gen.if(t, ()=>this.mergeEvaluated(e, d.Name));
                return true;
            }
        }
    }
    jn.KeywordCxt = br;
    function qn(e, t, definition, s) {
        let n = new br(e, definition, t);
        if ("code" in definition) {
            definition.code(n, s);
        } else if (n.$data && definition.validate) {
            re.funcKeywordCode(n, definition);
        } else if ("macro" in definition) {
            re.macroKeywordCode(n, definition);
        } else if (definition.compile || definition.validate) {
            re.funcKeywordCode(n, definition);
        }
    }
    var wl = /^\/(?:[^~]|~0|~1)*$/;
    var bl = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function On(e, { dataLevel, dataNames, dataPathArr }) {
        let n;
        let o;
        if (e === "") {
            return P.default.rootData;
        }
        if (e[0] === "/") {
            if (!wl.test(e)) {
                throw Error(`Invalid JSON-pointer: ${e}`);
            }
            n = e;
            o = P.default.rootData;
        } else {
            let u = bl.exec(e);
            if (!u) {
                throw Error(`Invalid JSON-pointer: ${e}`);
            }
            let l = +u[1];
            n = u[2];
            if (n === "#") {
                if (l >= dataLevel) {
                    throw Error(c("property/index", l));
                }
                return dataPathArr[dataLevel - l];
            }
            if (l > dataLevel) {
                throw Error(c("data", l));
            }
            o = dataNames[dataLevel - l];
            if (!n) {
                return o;
            }
        }
        let i = o;
        let a = n.split("/");
        for (let u of a){
            if (u) {
                o = d._`${o}${d.getProperty(F.unescapeJsonPointer(u))}`;
                i = d._`${i} && ${o}`;
            }
        }
        return i;
        function c(u, l) {
            return `Cannot access ${u} ${l} levels up, current level is ${dataLevel}`;
        }
    }
    jn.getData = On;
});
const kMn = C(function(In) {
    Object.defineProperty(In, "__esModule", {
        value: true
    });
    class Rn extends Error {
        constructor(e){
            super("validation failed");
            this.errors = e;
            this.ajv = this.validation = true;
        }
    }
    In.default = Rn;
});
const P5t = C(function(Cn) {
    Object.defineProperty(Cn, "__esModule", {
        value: true
    });
    const Ge = lt();
    class Tn extends Error {
        constructor(e, t, r, s){
            super(s || `can't resolve reference ${r} from id ${t}`);
            this.missingRef = Ge.resolveUrl(e, t, r);
            this.missingSchema = Ge.normalizeId(Ge.getFullPath(e, this.missingRef));
        }
    }
    Cn.default = Tn;
});
const TMn = C(function(Dn) {
    Object.defineProperty(Dn, "__esModule", {
        value: true
    });
    Dn.resolveSchema = Dn.getCompilingSchema = Dn.resolveRef = Dn.compileSchema = Dn.SchemaEnv = undefined;
    const V = om();
    const kl = kMn();
    const Me = r_e();
    const z = lt();
    const jt = i_();
    const Mn = x5t();
    class dt {
        constructor(e){
            this.refs = {};
            this.dynamicAnchors = {};
            let r;
            if (typeof e.schema === "object") {
                r = e.schema;
            }
            this.schema = e.schema;
            this.schemaId = e.schemaId;
            this.root = e.root || this;
            this.baseId = e.baseId ?? z.normalizeId(r?.[e.schemaId || "$id"]);
            this.schemaPath = e.schemaPath;
            this.localRefs = e.localRefs;
            this.meta = e.meta;
            this.$async = r?.$async;
            this.refs = {};
        }
    }
    Dn.SchemaEnv = dt;
    function Sr(schemaEnv) {
        let t = An.call(this, schemaEnv);
        if (t) {
            return t;
        }
        let rootId = z.getFullPath(this.opts.uriResolver, schemaEnv.root.baseId);
        let { es5, lines } = this.opts.code;
        let { ownProperties } = this.opts;
        let gen = new V.CodeGen(this.scope, {
            es5,
            lines,
            ownProperties
        });
        let ValidationError;
        if (schemaEnv.$async) {
            ValidationError = gen.scopeValue("Error", {
                ref: kl.default,
                code: V._`require("ajv/dist/runtime/validation_error").default`
            });
        }
        let validateName = gen.scopeName("validate");
        schemaEnv.validateName = validateName;
        let u = {
            gen,
            allErrors: this.opts.allErrors,
            data: Me.default.data,
            parentData: Me.default.parentData,
            parentDataProperty: Me.default.parentDataProperty,
            dataNames: [
                Me.default.data
            ],
            dataPathArr: [
                V.nil
            ],
            dataLevel: 0,
            dataTypes: [],
            definedProperties: new Set,
            topSchemaRef: gen.scopeValue("schema", this.opts.code.source === true ? {
                ref: schemaEnv.schema,
                code: V.stringify(schemaEnv.schema)
            } : {
                ref: schemaEnv.schema
            }),
            validateName,
            ValidationError,
            schema: schemaEnv.schema,
            schemaEnv,
            rootId,
            baseId: schemaEnv.baseId || rootId,
            schemaPath: V.nil,
            errSchemaPath: schemaEnv.schemaPath || (this.opts.jtd ? "" : "#"),
            errorPath: V._`""`,
            opts: this.opts,
            self: this
        };
        let l;
        try {
            this._compilations.add(schemaEnv);
            Mn.validateFunctionCode(u);
            gen.optimize(this.opts.code.optimize);
            let validateCode = gen.toString();
            l = `${gen.scopeRefs(Me.default.scope)}return ${validateCode}`;
            if (this.opts.code.process) {
                l = this.opts.code.process(l, schemaEnv);
            }
            let _ = Function(`${Me.default.self}`, `${Me.default.scope}`, l)(this, this.scope.get());
            this.scope.value(validateName, {
                ref: _
            });
            _.errors = null;
            _.schema = schemaEnv.schema;
            _.schemaEnv = schemaEnv;
            if (schemaEnv.$async) {
                _.$async = true;
            }
            if (this.opts.code.source === true) {
                _.source = {
                    validateName,
                    validateCode,
                    scopeValues: gen._values
                };
            }
            if (this.opts.unevaluated) {
                let { props, items } = u;
                _.evaluated = {
                    props: props instanceof V.Name ? undefined : props,
                    items: items instanceof V.Name ? undefined : items,
                    dynamicProps: props instanceof V.Name,
                    dynamicItems: items instanceof V.Name
                };
                if (_.source) {
                    _.source.evaluated = V.stringify(_.evaluated);
                }
            }
            schemaEnv.validate = _;
            return schemaEnv;
        } catch (error) {
            delete schemaEnv.validate;
            delete schemaEnv.validateName;
            if (l) {
                this.logger.error("Error compiling schema, function code:", l);
            }
            throw error;
        } finally{
            this._compilations.delete(schemaEnv);
        }
    }
    Dn.compileSchema = Sr;
    function ql(e, t, r) {
        r = z.resolveUrl(this.opts.uriResolver, t, r);
        let n = e.refs[r];
        if (n) {
            return n;
        }
        let o = xl.call(this, e, r);
        if (o === undefined) {
            let i = e.localRefs?.[r];
            let { schemaId } = this.opts;
            if (i) {
                o = new dt({
                    schema: i,
                    schemaId,
                    root: e,
                    baseId: t
                });
            }
        }
        if (o === undefined) {
            return;
        }
        return e.refs[r] = Ol.call(this, o);
    }
    Dn.resolveRef = ql;
    function Ol(e) {
        if (z.inlineRef(e.schema, this.opts.inlineRefs)) {
            return e.schema;
        }
        if (e.validate) {
            return e;
        }
        return Sr.call(this, e);
    }
    function An(e) {
        for (let t of this._compilations){
            if (jl(t, e)) {
                return t;
            }
        }
    }
    Dn.getCompilingSchema = An;
    function jl(e, t) {
        return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
    }
    function xl(e, t) {
        let r;
        while(typeof (r = this.refs[t]) === "string"){
            t = r;
        }
        return r || this.schemas[t] || xt.call(this, e, t);
    }
    function xt(e, t) {
        let r = this.opts.uriResolver.parse(t);
        let s = z._getFullPath(this.opts.uriResolver, r);
        let n = z.getFullPath(this.opts.uriResolver, e.baseId, undefined);
        if (Object.keys(e.schema).length > 0 && s === n) {
            return Er.call(this, r, e);
        }
        let o = z.normalizeId(s);
        let i = this.refs[o] || this.schemas[o];
        if (typeof i === "string") {
            let a = xt.call(this, e, i);
            if (typeof a?.schema !== "object") {
                return;
            }
            return Er.call(this, r, a);
        }
        if (typeof i?.schema !== "object") {
            return;
        }
        if (!i.validate) {
            Sr.call(this, i);
        }
        if (o === z.normalizeId(t)) {
            let { schema } = i;
            let { schemaId } = this.opts;
            let u = schema[schemaId];
            if (u) {
                n = z.resolveUrl(this.opts.uriResolver, n, u);
            }
            return new dt({
                schema,
                schemaId,
                root: e,
                baseId: n
            });
        }
        return Er.call(this, r, i);
    }
    Dn.resolveSchema = xt;
    var Rl = new Set([
        "properties",
        "patternProperties",
        "enum",
        "dependencies",
        "definitions"
    ]);
    function Er(e, { baseId, schema, root }) {
        if (e.fragment?.[0] !== "/") {
            return;
        }
        for (let a of e.fragment.slice(1).split("/")){
            if (typeof schema === "boolean") {
                return;
            }
            let c = schema[jt.unescapeFragment(a)];
            if (c === undefined) {
                return;
            }
            schema = c;
            let u = typeof schema === "object" && schema[this.opts.schemaId];
            if (!Rl.has(a) && u) {
                baseId = z.resolveUrl(this.opts.uriResolver, baseId, u);
            }
        }
        let o;
        if (typeof schema !== "boolean" && schema.$ref && !jt.schemaHasRulesButRef(schema, this.RULES)) {
            let a = z.resolveUrl(this.opts.uriResolver, baseId, schema.$ref);
            o = xt.call(this, root, a);
        }
        let { schemaId } = this.opts;
        o = o || new dt({
            schema,
            schemaId,
            root,
            baseId
        });
        if (o.schema !== o.root.schema) {
            return o;
        }
    }
});
const zn = C(function(dm, Al) {
    Al.exports = {
        $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
        description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
        type: "object",
        required: [
            "$data"
        ],
        properties: {
            $data: {
                type: "string",
                anyOf: [
                    {
                        format: "relative-json-pointer"
                    },
                    {
                        format: "json-pointer"
                    }
                ]
            }
        },
        additionalProperties: false
    };
});
const kr = C(function(fm, Gn) {
    const isUUID = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu);
    const isIPv4 = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
    const Pr = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu);
    const Fn = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu);
    const Vl = RegExp.prototype.test.bind(/^[\da-z\-._~!$&'()*+,;=:@/]$/iu);
    function stringArrayToHexStripped(e) {
        let t = "";
        let r = 0;
        let s = 0;
        for(s = 0; s < e.length; s++){
            r = e[s].charCodeAt(0);
            if (r === 48) {
                continue;
            }
            if (!(r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102)) {
                return "";
            }
            t += e[s];
            break;
        }
        for(s += 1; s < e.length; s++){
            r = e[s].charCodeAt(0);
            if (!(r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102)) {
                return "";
            }
            t += e[s];
        }
        return t;
    }
    const nonSimpleDomain = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
    function Un(e) {
        e.length = 0;
        return true;
    }
    function Ul(e, t, r) {
        if (e.length) {
            let s = stringArrayToHexStripped(e);
            if (s !== "") {
                t.push(s);
            } else {
                r.error = true;
                return false;
            }
            e.length = 0;
        }
        return true;
    }
    function Kl(host) {
        let t = 0;
        let r = {
            error: false,
            address: "",
            zone: ""
        };
        let s = [];
        let n = [];
        let o = false;
        let i = false;
        let a = Ul;
        for(let c = 0; c < host.length; c++){
            let u = host[c];
            if (u === "[" || u === "]") {
                continue;
            }
            if (u === ":") {
                if (o === true) {
                    i = true;
                }
                if (!a(n, s, r)) {
                    break;
                }
                if (++t > 7) {
                    r.error = true;
                    break;
                }
                if (c > 0 && host[c - 1] === ":") {
                    o = true;
                }
                s.push(":");
                continue;
            } else if (u === "%") {
                if (!a(n, s, r)) {
                    break;
                }
                a = Un;
            } else {
                n.push(u);
                continue;
            }
        }
        if (n.length) {
            if (a === Un) {
                r.zone = n.join("");
            } else if (i) {
                s.push(n.join(""));
            } else {
                s.push(stringArrayToHexStripped(n));
            }
        }
        r.address = s.join("");
        return r;
    }
    function normalizeIPv6(host) {
        if (Fl(host, ":") < 2) {
            return {
                host,
                isIPV6: false
            };
        }
        let t = Kl(host);
        if (!t.error) {
            let { address, address: address_1 } = t;
            if (t.zone) {
                address += `%${t.zone}`;
                address_1 += `%25${t.zone}`;
            }
            return {
                host: address,
                isIPV6: true,
                escapedHost: address_1
            };
        } else {
            return {
                host,
                isIPV6: false
            };
        }
    }
    function Fl(host, t) {
        let r = 0;
        for(let s = 0; s < host.length; s++){
            if (host[s] === t) {
                r++;
            }
        }
        return r;
    }
    function removeDotSegments(e) {
        let t = e;
        let r = [];
        let s = -1;
        let n = 0;
        while(n = t.length){
            if (n === 1) {
                if (t === ".") {
                    break;
                } else if (t === "/") {
                    r.push("/");
                    break;
                } else {
                    r.push(t);
                    break;
                }
            } else if (n === 2) {
                if (t[0] === ".") {
                    if (t[1] === ".") {
                        break;
                    } else if (t[1] === "/") {
                        t = t.slice(2);
                        continue;
                    }
                } else if (t[0] === "/") {
                    if (t[1] === "." || t[1] === "/") {
                        r.push("/");
                        break;
                    }
                }
            } else if (n === 3) {
                if (t === "/..") {
                    if (r.length !== 0) {
                        r.pop();
                    }
                    r.push("/");
                    break;
                }
            }
            if (t[0] === ".") {
                if (t[1] === ".") {
                    if (t[2] === "/") {
                        t = t.slice(3);
                        continue;
                    }
                } else if (t[1] === "/") {
                    t = t.slice(2);
                    continue;
                }
            } else if (t[0] === "/") {
                if (t[1] === ".") {
                    if (t[2] === "/") {
                        t = t.slice(2);
                        continue;
                    } else if (t[2] === ".") {
                        if (t[3] === "/") {
                            t = t.slice(3);
                            if (r.length !== 0) {
                                r.pop();
                            }
                            continue;
                        }
                    }
                }
            }
            if ((s = t.indexOf("/", 1)) === -1) {
                r.push(t);
                break;
            } else {
                r.push(t.slice(0, s));
                t = t.slice(s);
            }
        }
        return r.join("");
    }
    const Hl = {
        "@": "%40",
        "/": "%2F",
        "?": "%3F",
        "#": "%23",
        ":": "%3A"
    };
    const Gl = /[@/?#:]/g;
    const Jl = /[@/?#]/g;
    function reescapeHostDelimiters(e, t) {
        let r = t ? Jl : Gl;
        r.lastIndex = 0;
        return e.replace(r, (s)=>Hl[s]);
    }
    function normalizePercentEncoding(e, t = false) {
        if (e.indexOf("%") === -1) {
            return e;
        }
        let r = "";
        for(let s = 0; s < e.length; s++){
            if (e[s] === "%" && s + 2 < e.length) {
                let n = e.slice(s + 1, s + 3);
                if (Pr(n)) {
                    let o = n.toUpperCase();
                    let i = String.fromCharCode(parseInt(o, 16));
                    if (t && Fn(i)) {
                        r += i;
                    } else {
                        r += `%${o}`;
                    }
                    s += 2;
                    continue;
                }
            }
            r += e[s];
        }
        return r;
    }
    function normalizePathEncoding(e) {
        let t = "";
        for(let r = 0; r < e.length; r++){
            if (e[r] === "%" && r + 2 < e.length) {
                let s = e.slice(r + 1, r + 3);
                if (Pr(s)) {
                    let n = s.toUpperCase();
                    let o = String.fromCharCode(parseInt(n, 16));
                    if (o !== "." && Fn(o)) {
                        t += o;
                    } else {
                        t += `%${n}`;
                    }
                    r += 2;
                    continue;
                }
            }
            if (Vl(e[r])) {
                t += e[r];
            } else {
                t += escape(e[r]);
            }
        }
        return t;
    }
    function escapePreservingEscapes(e) {
        let t = "";
        for(let r = 0; r < e.length; r++){
            if (e[r] === "%" && r + 2 < e.length) {
                let s = e.slice(r + 1, r + 3);
                if (Pr(s)) {
                    t += `%${s.toUpperCase()}`;
                    r += 2;
                    continue;
                }
            }
            t += escape(e[r]);
        }
        return t;
    }
    function recomposeAuthority(e) {
        let t = [];
        if (e.userinfo !== undefined) {
            t.push(e.userinfo);
            t.push("@");
        }
        if (e.host !== undefined) {
            let r = unescape(e.host);
            if (!isIPv4(r)) {
                let s = normalizeIPv6(r);
                if (s.isIPV6 === true) {
                    r = `[${s.escapedHost}]`;
                } else {
                    r = reescapeHostDelimiters(r, false);
                }
            }
            t.push(r);
        }
        if (typeof e.port === "number" || typeof e.port === "string") {
            t.push(":");
            t.push(String(e.port));
        }
        if (t.length) {
            return t.join("");
        }
    }
    Gn.exports = {
        nonSimpleDomain,
        recomposeAuthority,
        reescapeHostDelimiters,
        normalizePercentEncoding,
        normalizePathEncoding,
        escapePreservingEscapes,
        removeDotSegments,
        isIPv4,
        isUUID,
        normalizeIPv6,
        stringArrayToHexStripped
    };
});
const Xn = C(function(pm, Qn) {
    const { isUUID } = kr();
    const Zl = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
    const ed = [
        "http",
        "https",
        "ws",
        "wss",
        "urn",
        "urn:uuid"
    ];
    function isValidSchemeName(e) {
        return ed.indexOf(e) !== -1;
    }
    function wsIsSecure(e) {
        if (e.secure === true) {
            return true;
        } else if (e.secure === false) {
            return false;
        } else if (e.scheme) {
            return e.scheme.length === 3 && (e.scheme[0] === "w" || e.scheme[0] === "W") && (e.scheme[1] === "s" || e.scheme[1] === "S") && (e.scheme[2] === "s" || e.scheme[2] === "S");
        } else {
            return false;
        }
    }
    function Jn(e) {
        if (!e.host) {
            e.error = e.error || "HTTP URIs must have a host.";
        }
        return e;
    }
    function Wn(e) {
        let t = String(e.scheme).toLowerCase() === "https";
        if (e.port === (t ? 443 : 80) || e.port === "") {
            e.port = undefined;
        }
        if (!e.path) {
            e.path = "/";
        }
        return e;
    }
    function rd(e) {
        e.secure = wsIsSecure(e);
        e.resourceName = (e.path || "/") + (e.query ? `?${e.query}` : "");
        e.path = undefined;
        e.query = undefined;
        return e;
    }
    function sd(e) {
        if (e.port === (wsIsSecure(e) ? 443 : 80) || e.port === "") {
            e.port = undefined;
        }
        if (typeof e.secure === "boolean") {
            e.scheme = e.secure ? "wss" : "ws";
            e.secure = undefined;
        }
        if (e.resourceName) {
            let [t, r] = e.resourceName.split("?");
            e.path = t && t !== "/" ? t : undefined;
            e.query = r;
            e.resourceName = undefined;
        }
        e.fragment = undefined;
        return e;
    }
    function nd(e, t) {
        if (!e.path) {
            e.error = "URN can not be parsed";
            return e;
        }
        let r = e.path.match(Zl);
        if (r) {
            let s = t.scheme || e.scheme || "urn";
            e.nid = r[1].toLowerCase();
            e.nss = r[2];
            let n = `${s}:${t.nid || e.nid}`;
            let o = getSchemeHandler(n);
            e.path = undefined;
            if (o) {
                e = o.parse(e, t);
            }
        } else {
            e.error = e.error || "URN can not be parsed.";
        }
        return e;
    }
    function od(e, t) {
        if (e.nid === undefined) {
            throw Error("URN without nid cannot be serialized");
        }
        let r = t.scheme || e.scheme || "urn";
        let s = e.nid.toLowerCase();
        let n = `${r}:${t.nid || s}`;
        let o = getSchemeHandler(n);
        if (o) {
            e = o.serialize(e, t);
        }
        let i = e;
        let e_nss = e.nss;
        i.path = `${s || t.nid}:${e_nss}`;
        t.skipEscape = true;
        return i;
    }
    function id(e, t) {
        let r = e;
        r.uuid = r.nss;
        r.nss = undefined;
        if (!t.tolerant && (!r.uuid || !isUUID(r.uuid))) {
            r.error = r.error || "UUID is not valid.";
        }
        return r;
    }
    function ad(e) {
        let t = e;
        t.nss = (e.uuid || "").toLowerCase();
        return t;
    }
    const http = {
        scheme: "http",
        domainHost: true,
        parse: Jn,
        serialize: Wn
    };
    const https = {
        scheme: "https",
        domainHost: http.domainHost,
        parse: Jn,
        serialize: Wn
    };
    const ws = {
        scheme: "ws",
        domainHost: true,
        parse: rd,
        serialize: sd
    };
    const wss = {
        scheme: "wss",
        domainHost: ws.domainHost,
        parse: ws.parse,
        serialize: ws.serialize
    };
    const urn = {
        scheme: "urn",
        parse: nd,
        serialize: od,
        skipNormalize: true
    };
    const dd = {
        scheme: "urn:uuid",
        parse: id,
        serialize: ad,
        skipNormalize: true
    };
    var SCHEMES = {
        http,
        https,
        ws,
        wss,
        urn,
        "urn:uuid": dd
    };
    Object.setPrototypeOf(SCHEMES, null);
    function getSchemeHandler(e) {
        return e && (SCHEMES[e] || SCHEMES[e.toLowerCase()]) || undefined;
    }
    Qn.exports = {
        wsIsSecure,
        SCHEMES,
        isValidSchemeName,
        getSchemeHandler
    };
});
const so = C(function(hm, Tt) {
    const { normalizeIPv6, removeDotSegments, recomposeAuthority, normalizePercentEncoding, normalizePathEncoding, escapePreservingEscapes, reescapeHostDelimiters, isIPv4, nonSimpleDomain } = kr();
    const { SCHEMES, getSchemeHandler } = Xn();
    function normalize(e, t) {
        if (typeof e === "string") {
            e = Nd(e, t);
        } else if (typeof e === "object") {
            e = Je(Ae(e, t), t);
        }
        return e;
    }
    function resolve(e, t, r) {
        let s = r ? {
            scheme: "null",
            ...r
        } : {
            scheme: "null"
        };
        let n = resolveComponent(Je(e, s), Je(t, s), s, true);
        s.skipEscape = true;
        return Ae(n, s);
    }
    function resolveComponent(e, t, r, s) {
        let n = {};
        if (!s) {
            e = Je(Ae(e, r), r);
            t = Je(Ae(t, r), r);
        }
        r = r || {};
        if (!r.tolerant && t.scheme) {
            n.scheme = t.scheme;
            n.userinfo = t.userinfo;
            n.host = t.host;
            n.port = t.port;
            n.path = removeDotSegments(t.path || "");
            n.query = t.query;
        } else {
            if (t.userinfo !== undefined || t.host !== undefined || t.port !== undefined) {
                n.userinfo = t.userinfo;
                n.host = t.host;
                n.port = t.port;
                n.path = removeDotSegments(t.path || "");
                n.query = t.query;
            } else {
                if (!t.path) {
                    n.path = e.path;
                    if (t.query !== undefined) {
                        n.query = t.query;
                    } else {
                        n.query = e.query;
                    }
                } else {
                    if (t.path[0] === "/") {
                        n.path = removeDotSegments(t.path);
                    } else {
                        if ((e.userinfo !== undefined || e.host !== undefined || e.port !== undefined) && !e.path) {
                            n.path = `/${t.path}`;
                        } else if (!e.path) {
                            n.path = t.path;
                        } else {
                            n.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path;
                        }
                        n.path = removeDotSegments(n.path);
                    }
                    n.query = t.query;
                }
                n.userinfo = e.userinfo;
                n.host = e.host;
                n.port = e.port;
            }
            n.scheme = e.scheme;
        }
        n.fragment = t.fragment;
        return n;
    }
    function equal(e, t, r) {
        let s = Yn(e, r);
        let n = Yn(t, r);
        return s !== undefined && n !== undefined && s.toLowerCase() === n.toLowerCase();
    }
    function Ae(e, t) {
        let r = {
            host: e.host,
            scheme: e.scheme,
            userinfo: e.userinfo,
            port: e.port,
            path: e.path,
            query: e.query,
            nid: e.nid,
            nss: e.nss,
            uuid: e.uuid,
            fragment: e.fragment,
            reference: e.reference,
            resourceName: e.resourceName,
            secure: e.secure,
            error: ""
        };
        let s = {
            ...t
        };
        let n = [];
        let o = getSchemeHandler(s.scheme || r.scheme);
        if (o && o.serialize) {
            o.serialize(r, s);
        }
        if (r.path !== undefined) {
            if (!s.skipEscape) {
                r.path = escapePreservingEscapes(r.path);
                if (r.scheme !== undefined) {
                    r.path = r.path.split("%3A").join(":");
                }
            } else {
                r.path = normalizePercentEncoding(r.path);
            }
        }
        if (s.reference !== "suffix" && r.scheme) {
            n.push(r.scheme, ":");
        }
        let i = recomposeAuthority(r);
        if (i !== undefined) {
            if (s.reference !== "suffix") {
                n.push("//");
            }
            n.push(i);
            if (r.path && r.path[0] !== "/") {
                n.push("/");
            }
        }
        if (r.path !== undefined) {
            let a = r.path;
            if (!s.absolutePath && (!o || !o.absolutePath)) {
                a = removeDotSegments(a);
            }
            if (i === undefined && a[0] === "/" && a[1] === "/") {
                a = `/%2F${a.slice(2)}`;
            }
            n.push(a);
        }
        if (r.query !== undefined) {
            n.push("?", r.query);
        }
        if (r.fragment !== undefined) {
            n.push("#", r.fragment);
        }
        return n.join("");
    }
    const Sd = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
    function Pd(parsed, t) {
        if (t[2] !== undefined && parsed.path && parsed.path[0] !== "/") {
            return 'URI path must start with "/" when authority is present.';
        }
        if (typeof parsed.port === "number" && (parsed.port < 0 || parsed.port > 65535)) {
            return "URI port is malformed.";
        }
    }
    function to(e, t) {
        let r = {
            ...t
        };
        let parsed = {
            scheme: undefined,
            userinfo: undefined,
            host: "",
            port: undefined,
            path: "",
            query: undefined,
            fragment: undefined
        };
        let malformedAuthorityOrPort = false;
        let o = false;
        if (r.reference === "suffix") {
            if (r.scheme) {
                e = `${r.scheme}:${e}`;
            } else {
                e = `//${e}`;
            }
        }
        let i = e.match(Sd);
        if (i) {
            parsed.scheme = i[1];
            parsed.userinfo = i[3];
            parsed.host = i[4];
            parsed.port = parseInt(i[5], 10);
            parsed.path = i[6] || "";
            parsed.query = i[7];
            parsed.fragment = i[8];
            if (isNaN(parsed.port)) {
                parsed.port = i[5];
            }
            let a = Pd(parsed, i);
            if (a !== undefined) {
                parsed.error = parsed.error || a;
                malformedAuthorityOrPort = true;
            }
            if (parsed.host) {
                if (isIPv4(parsed.host) === false) {
                    let l = normalizeIPv6(parsed.host);
                    parsed.host = l.host.toLowerCase();
                    o = l.isIPV6;
                } else {
                    o = true;
                }
            }
            if (parsed.scheme === undefined && parsed.userinfo === undefined && parsed.host === undefined && parsed.port === undefined && parsed.query === undefined && !parsed.path) {
                parsed.reference = "same-document";
            } else if (parsed.scheme === undefined) {
                parsed.reference = "relative";
            } else if (parsed.fragment === undefined) {
                parsed.reference = "absolute";
            } else {
                parsed.reference = "uri";
            }
            if (r.reference && r.reference !== "suffix" && r.reference !== parsed.reference) {
                parsed.error = parsed.error || `URI is not a ${r.reference} reference.`;
            }
            let c = getSchemeHandler(r.scheme || parsed.scheme);
            if (!r.unicodeSupport && (!c || !c.unicodeSupport)) {
                if (parsed.host && (r.domainHost || c && c.domainHost) && o === false && nonSimpleDomain(parsed.host)) {
                    try {
                        parsed.host = URL.domainToASCII(parsed.host.toLowerCase());
                    } catch (error) {
                        parsed.error = parsed.error || `Host's domain name can not be converted to ASCII: ${error}`;
                    }
                }
            }
            if (!c || c && !c.skipNormalize) {
                if (e.indexOf("%") !== -1) {
                    if (parsed.scheme !== undefined) {
                        parsed.scheme = unescape(parsed.scheme);
                    }
                    if (parsed.host !== undefined) {
                        parsed.host = reescapeHostDelimiters(unescape(parsed.host), o);
                    }
                }
                if (parsed.path) {
                    parsed.path = normalizePathEncoding(parsed.path);
                }
                if (parsed.fragment) {
                    try {
                        parsed.fragment = encodeURI(decodeURIComponent(parsed.fragment));
                    } catch  {
                        parsed.error = parsed.error || "URI malformed";
                    }
                }
            }
            if (c && c.parse) {
                c.parse(parsed, r);
            }
        } else {
            parsed.error = parsed.error || "URI can not be parsed.";
        }
        return {
            parsed,
            malformedAuthorityOrPort
        };
    }
    function Je(e, t) {
        return to(e, t).parsed;
    }
    function Nd(e, t) {
        return ro(e, t).normalized;
    }
    function ro(e, t) {
        let { parsed, malformedAuthorityOrPort } = to(e, t);
        return {
            normalized: malformedAuthorityOrPort ? e : Ae(parsed, t),
            malformedAuthorityOrPort
        };
    }
    function Yn(e, t) {
        if (typeof e === "string") {
            let { normalized, malformedAuthorityOrPort } = ro(e, t);
            if (malformedAuthorityOrPort) {
                return undefined;
            }
            return normalized;
        }
        if (typeof e === "object") {
            return Ae(e, t);
        }
    }
    const jr = {
        SCHEMES,
        normalize,
        resolve,
        resolveComponent,
        equal,
        serialize: Ae,
        parse: Je
    };
    Tt.exports = jr;
    Tt.exports.default = jr;
    Tt.exports.fastUri = jr;
});
const io = C(function(oo) {
    Object.defineProperty(oo, "__esModule", {
        value: true
    });
    const no = so();
    no.code = 'require("ajv/dist/runtime/uri").default';
    oo.default = no;
});
const cso = C(function(he) {
    Object.defineProperty(he, "__esModule", {
        value: true
    });
    he.CodeGen = he.Name = he.nil = he.stringify = he.str = he._ = he.KeywordCxt = undefined;
    const qd = x5t();
    Object.defineProperty(he, "KeywordCxt", {
        enumerable: true,
        get: function() {
            return qd.KeywordCxt;
        }
    });
    const Be = om();
    Object.defineProperty(he, "_", {
        enumerable: true,
        get: function() {
            return Be._;
        }
    });
    Object.defineProperty(he, "str", {
        enumerable: true,
        get: function() {
            return Be.str;
        }
    });
    Object.defineProperty(he, "stringify", {
        enumerable: true,
        get: function() {
            return Be.stringify;
        }
    });
    Object.defineProperty(he, "nil", {
        enumerable: true,
        get: function() {
            return Be.nil;
        }
    });
    Object.defineProperty(he, "Name", {
        enumerable: true,
        get: function() {
            return Be.Name;
        }
    });
    Object.defineProperty(he, "CodeGen", {
        enumerable: true,
        get: function() {
            return Be.CodeGen;
        }
    });
    const Od = kMn();
    const fo = P5t();
    const po = pr();
    const se = TMn();
    const ho = om();
    const ne = lt();
    const be = ut();
    const We = i_();
    const ao = zn();
    const jd = io();
    const mo = (e, t)=>new RegExp(e, t);
    mo.code = "new RegExp";
    const xd = [
        "removeAdditional",
        "useDefaults",
        "coerceTypes"
    ];
    const prefixes = new Set([
        "validate",
        "serialize",
        "parse",
        "wrapper",
        "root",
        "schema",
        "keyword",
        "pattern",
        "formats",
        "validate$data",
        "func",
        "obj",
        "Error"
    ]);
    const Id = {
        errorDataPath: "",
        format: "`validateFormats: false` can be used instead.",
        nullable: '"nullable" keyword is supported by default.',
        jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
        extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
        missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
        processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
        sourceCode: "Use option `code: {source: true}`",
        strictDefaults: "It is default now, see option `strict`.",
        strictKeywords: "It is default now, see option `strict`.",
        uniqueItems: '"uniqueItems" keyword is always validated.',
        unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
        cache: "Map is used as cache, schema object as key.",
        serialize: "Map is used as cache, schema object as key.",
        ajvErrors: "It is default now."
    };
    const Td = {
        ignoreKeywordsWithRef: "",
        jsPropertySyntax: "",
        unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    };
    const co = 200;
    function Cd(e) {
        let e_strict = e.strict;
        let Zt = e.code?.optimize;
        let optimize = Zt === true || Zt === undefined ? 1 : Zt || 0;
        let regExp = e.code?.regExp ?? mo;
        let uriResolver = e.uriResolver ?? jd.default;
        return {
            strictSchema: e.strictSchema ?? e_strict ?? true,
            strictNumbers: e.strictNumbers ?? e_strict ?? true,
            strictTypes: e.strictTypes ?? e_strict ?? "log",
            strictTuples: e.strictTuples ?? e_strict ?? "log",
            strictRequired: e.strictRequired ?? e_strict ?? false,
            code: e.code ? {
                ...e.code,
                optimize,
                regExp
            } : {
                optimize,
                regExp
            },
            loopRequired: e.loopRequired ?? co,
            loopEnum: e.loopEnum ?? co,
            meta: e.meta ?? true,
            messages: e.messages ?? true,
            inlineRefs: e.inlineRefs ?? true,
            schemaId: e.schemaId ?? "$id",
            addUsedSchema: e.addUsedSchema ?? true,
            validateSchema: e.validateSchema ?? true,
            validateFormats: e.validateFormats ?? true,
            unicodeRegExp: e.unicodeRegExp ?? true,
            int32range: e.int32range ?? true,
            uriResolver
        };
    }
    class Ct {
        constructor(e = {}){
            this.schemas = {};
            this.refs = {};
            this.formats = {};
            this._compilations = new Set;
            this._loading = {};
            this._cache = new Map;
            e = this.opts = {
                ...e,
                ...Cd(e)
            };
            let { es5, lines } = this.opts.code;
            this.scope = new ho.ValueScope({
                scope: {},
                prefixes,
                es5,
                lines
            });
            this.logger = Ud(e.logger);
            let s = e.validateFormats;
            e.validateFormats = false;
            this.RULES = po.getRules();
            uo.call(this, Id, e, "NOT SUPPORTED");
            uo.call(this, Td, e, "DEPRECATED", "warn");
            this._metaOpts = Vd.call(this);
            if (e.formats) {
                Ad.call(this);
            }
            this._addVocabularies();
            this._addDefaultMetaSchema();
            if (e.keywords) {
                Dd.call(this, e.keywords);
            }
            if (typeof e.meta === "object") {
                this.addMetaSchema(e.meta);
            }
            Md.call(this);
            e.validateFormats = s;
        }
        _addVocabularies() {
            this.addKeyword("$async");
        }
        _addDefaultMetaSchema() {
            let { $data, meta, schemaId } = this.opts;
            let s = ao;
            if (schemaId === "id") {
                s = {
                    ...ao
                };
                s.id = s.$id;
                delete s.$id;
            }
            if (meta && $data) {
                this.addMetaSchema(s, s[schemaId], false);
            }
        }
        defaultMeta() {
            let { meta, schemaId } = this.opts;
            return this.opts.defaultMeta = typeof meta === "object" ? meta[schemaId] || meta : undefined;
        }
        validate(e, t) {
            let r;
            if (typeof e === "string") {
                r = this.getSchema(e);
                if (!r) {
                    throw Error(`no schema with key or ref "${e}"`);
                }
            } else {
                r = this.compile(e);
            }
            let s = r(t);
            if (!("$async" in r)) {
                this.errors = r.errors;
            }
            return s;
        }
        compile(e, t) {
            let r = this._addSchema(e, t);
            return r.validate || this._compileSchemaEnv(r);
        }
        compileAsync(e, t) {
            if (typeof this.opts.loadSchema !== "function") {
                throw Error("options.loadSchema should be a function");
            }
            let { loadSchema } = this.opts;
            return s.call(this, e, t);
            async function s(u, l) {
                await n.call(this, u.$schema);
                let f = this._addSchema(u, l);
                return f.validate || o.call(this, f);
            }
            async function n(u) {
                if (u && !this.getSchema(u)) {
                    await s.call(this, {
                        $ref: u
                    }, true);
                }
            }
            async function o(u) {
                try {
                    return this._compileSchemaEnv(u);
                } catch (error) {
                    if (!(error instanceof fo.default)) {
                        throw error;
                    }
                    i.call(this, error);
                    await a.call(this, error.missingSchema);
                    return o.call(this, u);
                }
            }
            function i({ missingSchema, missingRef }) {
                if (this.refs[missingSchema]) {
                    throw Error(`AnySchema ${missingSchema} is loaded but ${missingRef} cannot be resolved`);
                }
            }
            async function a(u) {
                let l = await c.call(this, u);
                if (!this.refs[u]) {
                    await n.call(this, l.$schema);
                }
                if (!this.refs[u]) {
                    this.addSchema(l, u, t);
                }
            }
            async function c(u) {
                let l = this._loading[u];
                if (l) {
                    return l;
                }
                try {
                    return await (this._loading[u] = loadSchema(u));
                } finally{
                    delete this._loading[u];
                }
            }
        }
        addSchema(e, t, r, s = this.opts.validateSchema) {
            if (Array.isArray(e)) {
                for (let o of e){
                    this.addSchema(o, undefined, r, s);
                }
                return this;
            }
            let n;
            if (typeof e === "object") {
                let { schemaId } = this.opts;
                n = e[schemaId];
                if (n !== undefined && typeof n !== "string") {
                    throw Error(`schema ${schemaId} must be string`);
                }
            }
            t = ne.normalizeId(t || n);
            this._checkUnique(t);
            this.schemas[t] = this._addSchema(e, r, t, s, true);
            return this;
        }
        addMetaSchema(e, t, r = this.opts.validateSchema) {
            this.addSchema(e, t, true, r);
            return this;
        }
        validateSchema(e, t) {
            if (typeof e === "boolean") {
                return true;
            }
            let r;
            r = e.$schema;
            if (r !== undefined && typeof r !== "string") {
                throw Error("$schema must be a string");
            }
            r = r || this.opts.defaultMeta || this.defaultMeta();
            if (!r) {
                this.logger.warn("meta-schema not available");
                this.errors = null;
                return true;
            }
            let s = this.validate(r, e);
            if (!s && t) {
                let n = `schema is invalid: ${this.errorsText()}`;
                if (this.opts.validateSchema === "log") {
                    this.logger.error(n);
                } else {
                    throw Error(n);
                }
            }
            return s;
        }
        getSchema(e) {
            let t;
            while(typeof (t = lo.call(this, e)) === "string"){
                e = t;
            }
            if (t === undefined) {
                let { schemaId } = this.opts;
                let s = new se.SchemaEnv({
                    schema: {},
                    schemaId
                });
                t = se.resolveSchema.call(this, s, e);
                if (!t) {
                    return;
                }
                this.refs[e] = t;
            }
            return t.validate || this._compileSchemaEnv(t);
        }
        removeSchema(e) {
            if (e instanceof RegExp) {
                this._removeAllSchemas(this.schemas, e);
                this._removeAllSchemas(this.refs, e);
                return this;
            }
            switch(typeof e){
                case "undefined":
                    this._removeAllSchemas(this.schemas);
                    this._removeAllSchemas(this.refs);
                    this._cache.clear();
                    return this;
                case "string":
                    {
                        let t = lo.call(this, e);
                        if (typeof t === "object") {
                            this._cache.delete(t.schema);
                        }
                        delete this.schemas[e];
                        delete this.refs[e];
                        return this;
                    }
                case "object":
                    {
                        let t = e;
                        this._cache.delete(t);
                        let r = e[this.opts.schemaId];
                        if (r) {
                            r = ne.normalizeId(r);
                            delete this.schemas[r];
                            delete this.refs[r];
                        }
                        return this;
                    }
                default:
                    throw Error("ajv.removeSchema: invalid parameter");
            }
        }
        addVocabulary(e) {
            for (let t of e){
                this.addKeyword(t);
            }
            return this;
        }
        addKeyword(e, t) {
            let r;
            if (typeof e === "string") {
                r = e;
                if (typeof t === "object") {
                    this.logger.warn("these parameters are deprecated, see docs for addKeyword");
                    t.keyword = r;
                }
            } else if (typeof e === "object" && t === undefined) {
                t = e;
                r = t.keyword;
                if (Array.isArray(r) && !r.length) {
                    throw Error("addKeywords: keyword must be string or non-empty array");
                }
            } else {
                throw Error("invalid addKeywords parameters");
            }
            Fd.call(this, r, t);
            if (!t) {
                We.eachItem(r, (n)=>xr.call(this, n));
                return this;
            }
            Hd.call(this, t);
            let s = {
                ...t,
                type: be.getJSONTypes(t.type),
                schemaType: be.getJSONTypes(t.schemaType)
            };
            We.eachItem(r, s.type.length === 0 ? (n)=>xr.call(this, n, s) : (n)=>s.type.forEach((o)=>xr.call(this, n, s, o)));
            return this;
        }
        getKeyword(e) {
            let t = this.RULES.all[e];
            if (typeof t === "object") {
                return t.definition;
            }
            return !!t;
        }
        removeKeyword(e) {
            let { RULES } = this;
            delete RULES.keywords[e];
            delete RULES.all[e];
            for (let r of RULES.rules){
                let s = r.rules.findIndex((n)=>n.keyword === e);
                if (s >= 0) {
                    r.rules.splice(s, 1);
                }
            }
            return this;
        }
        addFormat(e, t) {
            if (typeof t === "string") {
                t = new RegExp(t);
            }
            this.formats[e] = t;
            return this;
        }
        errorsText(e = this.errors, { separator = ", ", dataVar = "data" } = {}) {
            if (!e || e.length === 0) {
                return "No errors";
            }
            return e.map((s)=>`${dataVar}${s.instancePath} ${s.message}`).reduce((acc, item)=>acc + separator + item);
        }
        $dataMetaSchema(e, t) {
            let all = this.RULES.all;
            e = JSON.parse(JSON.stringify(e));
            for (let s of t){
                let n = s.split("/").slice(1);
                let o = e;
                for (let i of n){
                    o = o[i];
                }
                for(let i in all){
                    let a = all[i];
                    if (typeof a !== "object") {
                        continue;
                    }
                    let { $data } = a.definition;
                    let u = o[i];
                    if ($data && u) {
                        o[i] = yo(u);
                    }
                }
            }
            return e;
        }
        _removeAllSchemas(e, t) {
            for(let r in e){
                let s = e[r];
                if (!t || t.test(r)) {
                    if (typeof s === "string") {
                        delete e[r];
                    } else if (s && !s.meta) {
                        this._cache.delete(s.schema);
                        delete e[r];
                    }
                }
            }
        }
        _addSchema(e, meta, r, s = this.opts.validateSchema, n = this.opts.addUsedSchema) {
            let o;
            let { schemaId } = this.opts;
            if (typeof e === "object") {
                o = e[schemaId];
            } else if (this.opts.jtd) {
                throw Error("schema must be object");
            } else if (typeof e !== "boolean") {
                throw Error("schema must be object or boolean");
            }
            let a = this._cache.get(e);
            if (a !== undefined) {
                return a;
            }
            r = ne.normalizeId(o || r);
            let localRefs = ne.getSchemaRefs.call(this, e, r);
            a = new se.SchemaEnv({
                schema: e,
                schemaId,
                meta,
                baseId: r,
                localRefs
            });
            this._cache.set(a.schema, a);
            if (n && !r.startsWith("#")) {
                if (r) {
                    this._checkUnique(r);
                }
                this.refs[r] = a;
            }
            if (s) {
                this.validateSchema(e, true);
            }
            return a;
        }
        _checkUnique(e) {
            if (this.schemas[e] || this.refs[e]) {
                throw Error(`schema with key or id "${e}" already exists`);
            }
        }
        _compileSchemaEnv(e) {
            if (e.meta) {
                this._compileMetaSchema(e);
            } else {
                se.compileSchema.call(this, e);
            }
            if (!e.validate) {
                throw Error("ajv implementation error");
            }
            return e.validate;
        }
        _compileMetaSchema(e) {
            let opts = this.opts;
            this.opts = this._metaOpts;
            try {
                se.compileSchema.call(this, e);
            } finally{
                this.opts = opts;
            }
        }
    }
    Ct.ValidationError = Od.default;
    Ct.MissingRefError = fo.default;
    he.default = Ct;
    function uo(e, t, r, s = "error") {
        for(let n in e){
            let o = n;
            if (o in t) {
                this.logger[s](`${r}: option ${n}. ${e[o]}`);
            }
        }
    }
    function lo(e) {
        e = ne.normalizeId(e);
        return this.schemas[e] || this.refs[e];
    }
    function Md() {
        let schemas = this.opts.schemas;
        if (!schemas) {
            return;
        }
        if (Array.isArray(schemas)) {
            this.addSchema(schemas);
        } else {
            for(let t in schemas){
                this.addSchema(schemas[t], t);
            }
        }
    }
    function Ad() {
        for(let e in this.opts.formats){
            let t = this.opts.formats[e];
            if (t) {
                this.addFormat(e, t);
            }
        }
    }
    function Dd(e) {
        if (Array.isArray(e)) {
            this.addVocabulary(e);
            return;
        }
        this.logger.warn("keywords option as map is deprecated, pass array");
        for(let t in e){
            let r = e[t];
            if (!r.keyword) {
                r.keyword = t;
            }
            this.addKeyword(r);
        }
    }
    function Vd() {
        let e = {
            ...this.opts
        };
        for (let t of xd){
            delete e[t];
        }
        return e;
    }
    var zd = {
        log () {},
        warn () {},
        error () {}
    };
    function Ud(logger) {
        if (logger === false) {
            return zd;
        }
        if (logger === undefined) {
            return console;
        }
        if (logger.log && logger.warn && logger.error) {
            return logger;
        }
        throw Error("logger must implement log, warn and error methods");
    }
    var Kd = /^[a-z_$][a-z0-9_$:-]*$/i;
    function Fd(e, t) {
        let { RULES } = this;
        We.eachItem(e, (s)=>{
            if (RULES.keywords[s]) {
                throw Error(`Keyword ${s} is already defined`);
            }
            if (!Kd.test(s)) {
                throw Error(`Keyword ${s} has invalid name`);
            }
        });
        if (!t) {
            return;
        }
        if (t.$data && !("code" in t || "validate" in t)) {
            throw Error('$data keyword must have "code" or "validate" function');
        }
    }
    function xr(keyword, t, r) {
        let n = t?.post;
        if (r && n) {
            throw Error('keyword with "post" flag cannot have "type"');
        }
        let { RULES } = this;
        let i = n ? RULES.post : RULES.rules.find(({ type })=>type === r);
        if (!i) {
            i = {
                type: r,
                rules: []
            };
            RULES.rules.push(i);
        }
        RULES.keywords[keyword] = true;
        if (!t) {
            return;
        }
        let a = {
            keyword,
            definition: {
                ...t,
                type: be.getJSONTypes(t.type),
                schemaType: be.getJSONTypes(t.schemaType)
            }
        };
        if (t.before) {
            Ld.call(this, i, a, t.before);
        } else {
            i.rules.push(a);
        }
        RULES.all[keyword] = a;
        t.implements?.forEach((c)=>this.addKeyword(c));
    }
    function Ld(e, t, r) {
        let s = e.rules.findIndex((n)=>n.keyword === r);
        if (s >= 0) {
            e.rules.splice(s, 0, t);
        } else {
            e.rules.push(t);
            this.logger.warn(`rule ${r} is not defined`);
        }
    }
    function Hd(e) {
        let { metaSchema } = e;
        if (metaSchema === undefined) {
            return;
        }
        if (e.$data && this.opts.$data) {
            metaSchema = yo(metaSchema);
        }
        e.validateSchema = this.compile(metaSchema, true);
    }
    var Gd = {
        $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function yo(e) {
        return {
            anyOf: [
                e,
                Gd
            ]
        };
    }
});
const go = C(function(_o) {
    Object.defineProperty(_o, "__esModule", {
        value: true
    });
    const Bd = {
        keyword: "id",
        code () {
            throw Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
        }
    };
    _o.default = Bd;
});
const _fr = C(function(vo) {
    Object.defineProperty(vo, "__esModule", {
        value: true
    });
    vo.callRef = vo.getValidate = undefined;
    const Xd = P5t();
    const At = Q();
    const T = om();
    const Qe = r_e();
    const Dt = TMn();
    const Ee = i_();
    const Yd = {
        keyword: "$ref",
        schemaType: "string",
        code (e) {
            let { gen, schema, it } = e;
            let { baseId, schemaEnv, validateName, opts, self } = it;
            let { root } = schemaEnv;
            if ((schema === "#" || schema === "#/") && baseId === root.baseId) {
                return f();
            }
            let l = Dt.resolveRef.call(self, root, baseId, schema);
            if (l === undefined) {
                throw new Xd.default(it.opts.uriResolver, baseId, schema);
            }
            if (l instanceof Dt.SchemaEnv) {
                return b(l);
            }
            return _(l);
            function f() {
                if (schemaEnv === root) {
                    return Mt(e, validateName, schemaEnv, schemaEnv.$async);
                }
                let h = gen.scopeValue("root", {
                    ref: root
                });
                return Mt(e, T._`${h}.validate`, root, root.$async);
            }
            function b(h) {
                let p = $o(e, h);
                Mt(e, p, h, h.$async);
            }
            function _(h) {
                let p = gen.scopeValue("schema", opts.code.source === true ? {
                    ref: h,
                    code: T.stringify(h)
                } : {
                    ref: h
                });
                let y = gen.name("valid");
                let v = e.subschema({
                    schema: h,
                    dataTypes: [],
                    schemaPath: T.nil,
                    topSchemaRef: p,
                    errSchemaPath: schema
                }, y);
                e.mergeEvaluated(v);
                e.ok(y);
            }
        }
    };
    function $o({ gen }, t) {
        if (t.validate) {
            return gen.scopeValue("validate", {
                ref: t.validate
            });
        }
        return T._`${gen.scopeValue("wrapper", {
            ref: t
        })}.validate`;
    }
    vo.getValidate = $o;
    function Mt(e, t, r, s) {
        let { gen, it } = e;
        let { allErrors, schemaEnv, opts } = it;
        let u = opts.passContext ? Qe.default.this : T.nil;
        if (s) {
            l();
        } else {
            f();
        }
        function l() {
            if (!schemaEnv.$async) {
                throw Error("async schema referenced by sync schema");
            }
            let h = gen.let("valid");
            gen.try(()=>{
                gen.code(T._`await ${At.callValidateCode(e, t, u)}`);
                _(t);
                if (!allErrors) {
                    gen.assign(h, true);
                }
            }, (p)=>{
                gen.if(T._`!(${p} instanceof ${it.ValidationError})`, ()=>gen.throw(p));
                b(p);
                if (!allErrors) {
                    gen.assign(h, false);
                }
            });
            e.ok(h);
        }
        function f() {
            e.result(At.callValidateCode(e, t, u), ()=>_(t), ()=>b(t));
        }
        function b(h) {
            let p = T._`${h}.errors`;
            gen.assign(Qe.default.vErrors, T._`${Qe.default.vErrors} === null ? ${p} : ${Qe.default.vErrors}.concat(${p})`);
            gen.assign(Qe.default.errors, T._`${Qe.default.vErrors}.length`);
        }
        function _(h) {
            if (!it.opts.unevaluated) {
                return;
            }
            let y = r?.validate?.evaluated;
            if (it.props !== true) {
                if (y && !y.dynamicProps) {
                    if (y.props !== undefined) {
                        it.props = Ee.mergeEvaluated.props(gen, y.props, it.props);
                    }
                } else {
                    let v = gen.var("props", T._`${h}.evaluated.props`);
                    it.props = Ee.mergeEvaluated.props(gen, v, it.props, T.Name);
                }
            }
            if (it.items !== true) {
                if (y && !y.dynamicItems) {
                    if (y.items !== undefined) {
                        it.items = Ee.mergeEvaluated.items(gen, y.items, it.items);
                    }
                } else {
                    let v = gen.var("items", T._`${h}.evaluated.items`);
                    it.items = Ee.mergeEvaluated.items(gen, v, it.items, T.Name);
                }
            }
        }
    }
    vo.callRef = Mt;
    vo.default = Yd;
});
const dso = C(function(bo) {
    Object.defineProperty(bo, "__esModule", {
        value: true
    });
    const tf = go();
    const rf = _fr();
    const sf = [
        "$schema",
        "$id",
        "$defs",
        "$vocabulary",
        {
            keyword: "$comment"
        },
        "definitions",
        tf.default,
        rf.default
    ];
    bo.default = sf;
});
const So = C(function(Eo) {
    Object.defineProperty(Eo, "__esModule", {
        value: true
    });
    const Pe = om();
    const Pe_operators = Pe.operators;
    const Vt = {
        maximum: {
            okStr: "<=",
            ok: Pe_operators.LTE,
            fail: Pe_operators.GT
        },
        minimum: {
            okStr: ">=",
            ok: Pe_operators.GTE,
            fail: Pe_operators.LT
        },
        exclusiveMaximum: {
            okStr: "<",
            ok: Pe_operators.LT,
            fail: Pe_operators.GTE
        },
        exclusiveMinimum: {
            okStr: ">",
            ok: Pe_operators.GT,
            fail: Pe_operators.LTE
        }
    };
    const of = {
        message: ({ keyword, schemaCode })=>Pe.str`must be ${Vt[keyword].okStr} ${schemaCode}`,
        params: ({ keyword, schemaCode })=>Pe._`{comparison: ${Vt[keyword].okStr}, limit: ${schemaCode}}`
    };
    const af = {
        keyword: Object.keys(Vt),
        type: "number",
        schemaType: "number",
        $data: true,
        error: of,
        code (e) {
            let { keyword, data, schemaCode } = e;
            e.fail$data(Pe._`${data} ${Vt[keyword].fail} ${schemaCode} || isNaN(${data})`);
        }
    };
    Eo.default = af;
});
const No = C(function(Po) {
    Object.defineProperty(Po, "__esModule", {
        value: true
    });
    const oe = om();
    const uf = {
        message: ({ schemaCode })=>oe.str`must be multiple of ${schemaCode}`,
        params: ({ schemaCode })=>oe._`{multipleOf: ${schemaCode}}`
    };
    const lf = {
        keyword: "multipleOf",
        type: "number",
        schemaType: "number",
        $data: true,
        error: uf,
        code (e) {
            let { gen, data, schemaCode, it } = e;
            let multipleOfPrecision = it.opts.multipleOfPrecision;
            let i = gen.let("res");
            let a = multipleOfPrecision ? oe._`Math.abs(Math.round(${i}) - ${i}) > 1e-${multipleOfPrecision}` : oe._`${i} !== parseInt(${i})`;
            e.fail$data(oe._`(${schemaCode} === 0 || (${i} = ${data}/${schemaCode}, ${a}))`);
        }
    };
    Po.default = lf;
});
const Oo = C(function(qo) {
    Object.defineProperty(qo, "__esModule", {
        value: true
    });
    function ko(e) {
        let e_length = e.length;
        let r = 0;
        let s = 0;
        let n;
        while(s < e_length){
            r++;
            n = e.charCodeAt(s++);
            if (n >= 55296 && n <= 56319 && s < e_length) {
                n = e.charCodeAt(s);
                if ((n & 64512) === 56320) {
                    s++;
                }
            }
        }
        return r;
    }
    qo.default = ko;
    ko.code = 'require("ajv/dist/runtime/ucs2length").default';
});
const Ro = C(function(xo) {
    Object.defineProperty(xo, "__esModule", {
        value: true
    });
    const G = om();
    const jo = i_();
    const pf = Oo();
    const hf = {
        message ({ keyword, schemaCode }) {
            return G.str`must NOT have ${keyword === "maxLength" ? "more" : "fewer"} than ${schemaCode} characters`;
        },
        params: ({ schemaCode })=>G._`{limit: ${schemaCode}}`
    };
    const mf = {
        keyword: [
            "maxLength",
            "minLength"
        ],
        type: "string",
        schemaType: "number",
        $data: true,
        error: hf,
        code (e) {
            let { keyword, data, schemaCode, it } = e;
            let o = keyword === "maxLength" ? G.operators.GT : G.operators.LT;
            let i = it.opts.unicode === false ? G._`${data}.length` : G._`${jo.useFunc(e.gen, pf.default)}(${data})`;
            e.fail$data(G._`${i} ${o} ${schemaCode}`);
        }
    };
    xo.default = mf;
});
const Mo = C(function(Co) {
    Object.defineProperty(Co, "__esModule", {
        value: true
    });
    const Io = Q();
    const To = i_();
    const X = om();
    const _f = {
        message: ({ schemaCode })=>X.str`must match pattern "${schemaCode}"`,
        params: ({ schemaCode })=>X._`{pattern: ${schemaCode}}`
    };
    const gf = {
        keyword: "pattern",
        type: "string",
        schemaType: "string",
        $data: true,
        error: _f,
        code (e) {
            let { gen, data, $data, schema, schemaCode, it } = e;
            let a = it.opts.unicodeRegExp ? "u" : "";
            if ($data) {
                let { regExp } = it.opts.code;
                let u = regExp.code === "new RegExp" ? X._`new RegExp` : To.useFunc(gen, regExp);
                let l = gen.let("valid");
                gen.try(()=>gen.assign(l, X._`${u}(${schemaCode}, ${a}).test(${data})`), ()=>gen.assign(l, false));
                e.fail$data(X._`!${l}`);
            } else {
                let c = Io.usePattern(e, schema);
                e.fail$data(X._`!${c}.test(${data})`);
            }
        }
    };
    Co.default = gf;
});
const Do = C(function(Ao) {
    Object.defineProperty(Ao, "__esModule", {
        value: true
    });
    const ie = om();
    const vf = {
        message ({ keyword, schemaCode }) {
            return ie.str`must NOT have ${keyword === "maxProperties" ? "more" : "fewer"} than ${schemaCode} properties`;
        },
        params: ({ schemaCode })=>ie._`{limit: ${schemaCode}}`
    };
    const wf = {
        keyword: [
            "maxProperties",
            "minProperties"
        ],
        type: "object",
        schemaType: "number",
        $data: true,
        error: vf,
        code (e) {
            let { keyword, data, schemaCode } = e;
            let n = keyword === "maxProperties" ? ie.operators.GT : ie.operators.LT;
            e.fail$data(ie._`Object.keys(${data}).length ${n} ${schemaCode}`);
        }
    };
    Ao.default = wf;
});
const Uo = C(function(zo) {
    Object.defineProperty(zo, "__esModule", {
        value: true
    });
    const ae = Q();
    const ce = om();
    const Vo = i_();
    const Ef = {
        message: ({ params: { missingProperty } })=>ce.str`must have required property '${missingProperty}'`,
        params: ({ params: { missingProperty } })=>ce._`{missingProperty: ${missingProperty}}`
    };
    const Sf = {
        keyword: "required",
        type: "object",
        schemaType: "array",
        $data: true,
        error: Ef,
        code (e) {
            let { gen, schema, schemaCode, data, $data, it } = e;
            let { opts } = it;
            if (!$data && schema.length === 0) {
                return;
            }
            let c = schema.length >= opts.loopRequired;
            if (it.allErrors) {
                u();
            } else {
                l();
            }
            if (opts.strictRequired) {
                let _ = e.parentSchema.properties;
                let { definedProperties } = e.it;
                for (let p of schema){
                    if (_?.[p] === undefined && !definedProperties.has(p)) {
                        let y = it.schemaEnv.baseId + it.errSchemaPath;
                        let v = `required property "${p}" is not defined at "${y}" (strictRequired)`;
                        Vo.checkStrictMode(it, v, it.opts.strictRequired);
                    }
                }
            }
            function u() {
                if (c || $data) {
                    e.block$data(ce.nil, f);
                } else {
                    for (let _ of schema){
                        ae.checkReportMissingProp(e, _);
                    }
                }
            }
            function l() {
                let _ = gen.let("missing");
                if (c || $data) {
                    let h = gen.let("valid", true);
                    e.block$data(h, ()=>b(_, h));
                    e.ok(h);
                } else {
                    gen.if(ae.checkMissingProp(e, schema, _));
                    ae.reportMissingProp(e, _);
                    gen.else();
                }
            }
            function f() {
                gen.forOf("prop", schemaCode, (_)=>{
                    e.setParams({
                        missingProperty: _
                    });
                    gen.if(ae.noPropertyInData(gen, data, _, opts.ownProperties), ()=>e.error());
                });
            }
            function b(_, h) {
                e.setParams({
                    missingProperty: _
                });
                gen.forOf(_, schemaCode, ()=>{
                    gen.assign(h, ae.propertyInData(gen, data, _, opts.ownProperties));
                    gen.if(ce.not(h), ()=>{
                        e.error();
                        gen.break();
                    });
                }, ce.nil);
            }
        }
    };
    zo.default = Sf;
});
const Fo = C(function(Ko) {
    Object.defineProperty(Ko, "__esModule", {
        value: true
    });
    const ue = om();
    const Nf = {
        message ({ keyword, schemaCode }) {
            return ue.str`must NOT have ${keyword === "maxItems" ? "more" : "fewer"} than ${schemaCode} items`;
        },
        params: ({ schemaCode })=>ue._`{limit: ${schemaCode}}`
    };
    const kf = {
        keyword: [
            "maxItems",
            "minItems"
        ],
        type: "array",
        schemaType: "number",
        $data: true,
        error: Nf,
        code (e) {
            let { keyword, data, schemaCode } = e;
            let n = keyword === "maxItems" ? ue.operators.GT : ue.operators.LT;
            e.fail$data(ue._`${data}.length ${n} ${schemaCode}`);
        }
    };
    Ko.default = kf;
});
const Go = C(function(Ho) {
    Object.defineProperty(Ho, "__esModule", {
        value: true
    });
    const Xe = ut();
    const j = om();
    const Lo = i_();
    const Of = I5t();
    const jf = {
        message: ({ params: { i, j: j_1 } })=>j.str`must NOT have duplicate items (items ## ${j_1} and ${i} are identical)`,
        params: ({ params: { i, j: j_1 } })=>j._`{i: ${i}, j: ${j_1}}`
    };
    const xf = {
        keyword: "uniqueItems",
        type: "array",
        schemaType: "boolean",
        $data: true,
        error: jf,
        code (e) {
            let { gen, data, $data, schema, parentSchema, schemaCode, it } = e;
            if (!$data && !schema) {
                return;
            }
            let c = gen.let("valid");
            let u = parentSchema.items ? Xe.getSchemaTypes(parentSchema.items) : [];
            e.block$data(c, l, j._`${schemaCode} === false`);
            e.ok(c);
            function l() {
                let i = gen.let("i", j._`${data}.length`);
                let j_1 = gen.let("j");
                e.setParams({
                    i,
                    j: j_1
                });
                gen.assign(c, true);
                gen.if(j._`${i} > 1`, ()=>(f() ? b : _)(i, j_1));
            }
            function f() {
                return u.length > 0 && !u.some((h)=>h === "object" || h === "array");
            }
            function b(h, p) {
                let y = gen.name("item");
                let v = Xe.checkDataTypes(u, y, it.opts.strictNumbers, Xe.DataType.Wrong);
                let O = gen.const("indices", j._`{}`);
                gen.for(j._`;${h}--;`, ()=>{
                    gen.let(y, j._`${data}[${h}]`);
                    gen.if(v, j._`continue`);
                    if (u.length > 1) {
                        gen.if(j._`typeof ${y} == "string"`, j._`${y} += "_"`);
                    }
                    gen.if(j._`typeof ${O}[${y}] == "number"`, ()=>{
                        gen.assign(p, j._`${O}[${y}]`);
                        e.error();
                        gen.assign(c, false).break();
                    }).code(j._`${O}[${y}] = ${h}`);
                });
            }
            function _(h, p) {
                let y = Lo.useFunc(gen, Of.default);
                let v = gen.name("outer");
                gen.label(v).for(j._`;${h}--;`, ()=>gen.for(j._`${p} = ${h}; ${p}--;`, ()=>gen.if(j._`${y}(${data}[${h}], ${data}[${p}])`, ()=>{
                            e.error();
                            gen.assign(c, false).break(v);
                        })));
            }
        }
    };
    Ho.default = xf;
});
const Bo = C(function(Wo) {
    Object.defineProperty(Wo, "__esModule", {
        value: true
    });
    const Ye = om();
    const Jo = i_();
    const If = I5t();
    const Tf = {
        message: "must be equal to constant",
        params: ({ schemaCode })=>Ye._`{allowedValue: ${schemaCode}}`
    };
    const Cf = {
        keyword: "const",
        $data: true,
        error: Tf,
        code (e) {
            let { gen, data, $data, schemaCode, schema } = e;
            if ($data || schema && typeof schema === "object") {
                e.fail$data(Ye._`!${Jo.useFunc(gen, If.default)}(${data}, ${schemaCode})`);
            } else {
                e.fail(Ye._`${schema} !== ${data}`);
            }
        }
    };
    Wo.default = Cf;
});
const Yo = C(function(Xo) {
    Object.defineProperty(Xo, "__esModule", {
        value: true
    });
    const le = om();
    const Qo = i_();
    const Af = I5t();
    const Df = {
        message: "must be equal to one of the allowed values",
        params: ({ schemaCode })=>le._`{allowedValues: ${schemaCode}}`
    };
    const Vf = {
        keyword: "enum",
        schemaType: "array",
        $data: true,
        error: Df,
        code (e) {
            let { gen, data, $data, schema, schemaCode, it } = e;
            if (!$data && schema.length === 0) {
                throw Error("enum must have non-empty array");
            }
            let a = schema.length >= it.opts.loopEnum;
            let c;
            let u = ()=>c ??= Qo.useFunc(gen, Af.default);
            let l;
            if (a || $data) {
                l = gen.let("valid");
                e.block$data(l, f);
            } else {
                if (!Array.isArray(schema)) {
                    throw Error("ajv implementation error");
                }
                let _ = gen.const("vSchema", schemaCode);
                l = le.or(...schema.map((h, p)=>b(_, p)));
            }
            e.pass(l);
            function f() {
                gen.assign(l, false);
                gen.forOf("v", schemaCode, (_)=>gen.if(le._`${u()}(${data}, ${_})`, ()=>gen.assign(l, true).break()));
            }
            function b(_, h) {
                let p = schema[h];
                if (typeof p === "object" && p !== null) {
                    return le._`${u()}(${data}, ${_}[${h}])`;
                }
                return le._`${data} === ${p}`;
            }
        }
    };
    Xo.default = Vf;
});
const uso = C(function(Zo) {
    Object.defineProperty(Zo, "__esModule", {
        value: true
    });
    const Uf = So();
    const Kf = No();
    const Ff = Ro();
    const Lf = Mo();
    const Hf = Do();
    const Gf = Uo();
    const Jf = Fo();
    const Wf = Go();
    const Bf = Bo();
    const Qf = Yo();
    const Xf = [
        Uf.default,
        Kf.default,
        Ff.default,
        Lf.default,
        Hf.default,
        Gf.default,
        Jf.default,
        Wf.default,
        {
            keyword: "type",
            schemaType: [
                "string",
                "array"
            ]
        },
        {
            keyword: "nullable",
            schemaType: "boolean"
        },
        Bf.default,
        Qf.default
    ];
    Zo.default = Xf;
});
const Rr = C(function(ti) {
    Object.defineProperty(ti, "__esModule", {
        value: true
    });
    ti.validateAdditionalItems = undefined;
    const J = om();
    const Ze = i_();
    const Zf = {
        message: ({ params: { len } })=>J.str`must NOT have more than ${len} items`,
        params: ({ params: { len } })=>J._`{limit: ${len}}`
    };
    const ep = {
        keyword: "additionalItems",
        type: "array",
        schemaType: [
            "boolean",
            "object"
        ],
        before: "uniqueItems",
        error: Zf,
        code (e) {
            let { parentSchema, it } = e;
            let { items } = parentSchema;
            if (!Array.isArray(items)) {
                Ze.checkStrictMode(it, '"additionalItems" is ignored when "items" is not an array of schemas');
                return;
            }
            ei(e, items);
        }
    };
    function ei(e, t) {
        let { gen, schema, data, keyword, it } = e;
        it.items = true;
        let a = gen.const("len", J._`${data}.length`);
        if (schema === false) {
            e.setParams({
                len: t.length
            });
            e.pass(J._`${a} <= ${t.length}`);
        } else if (typeof schema === "object" && !Ze.alwaysValidSchema(it, schema)) {
            let u = gen.var("valid", J._`${a} <= ${t.length}`);
            gen.if(J.not(u), ()=>c(u));
            e.ok(u);
        }
        function c(u) {
            gen.forRange("i", t.length, a, (l)=>{
                e.subschema({
                    keyword,
                    dataProp: l,
                    dataPropType: Ze.Type.Num
                }, u);
                if (!it.allErrors) {
                    gen.if(J.not(u), ()=>gen.break());
                }
            });
        }
    }
    ti.validateAdditionalItems = ei;
    ti.default = ep;
});
const Ir = C(function(oi) {
    Object.defineProperty(oi, "__esModule", {
        value: true
    });
    oi.validateTuple = undefined;
    const zt = om();
    const Ne = i_();
    const si = Q();
    const rp = {
        keyword: "items",
        type: "array",
        schemaType: [
            "object",
            "array",
            "boolean"
        ],
        before: "uniqueItems",
        code (e) {
            let { schema, it } = e;
            if (Array.isArray(schema)) {
                return ni(e, "additionalItems", schema);
            }
            it.items = true;
            if (Ne.alwaysValidSchema(it, schema)) {
                return;
            }
            e.ok(si.validateArray(e));
        }
    };
    function ni(e, t, r = e.schema) {
        let { gen, parentSchema, data, keyword, it } = e;
        l(parentSchema);
        if (it.opts.unevaluated && r.length && it.items !== true) {
            it.items = Ne.mergeEvaluated.items(gen, r.length, it.items);
        }
        let c = gen.name("valid");
        let u = gen.const("len", zt._`${data}.length`);
        r.forEach((f, b)=>{
            if (Ne.alwaysValidSchema(it, f)) {
                return;
            }
            gen.if(zt._`${u} > ${b}`, ()=>e.subschema({
                    keyword,
                    schemaProp: b,
                    dataProp: b
                }, c));
            e.ok(c);
        });
        function l(parentSchema) {
            let { opts, errSchemaPath } = it;
            let r_length = r.length;
            let p = r_length === parentSchema.minItems && (r_length === parentSchema.maxItems || parentSchema[t] === false);
            if (opts.strictTuples && !p) {
                let y = `"${keyword}" is ${r_length}-tuple, but minItems or maxItems/${t} are not specified or different at path "${errSchemaPath}"`;
                Ne.checkStrictMode(it, y, opts.strictTuples);
            }
        }
    }
    oi.validateTuple = ni;
    oi.default = rp;
});
const ui = C(function(ci) {
    Object.defineProperty(ci, "__esModule", {
        value: true
    });
    const ai = Ir();
    const np = {
        keyword: "prefixItems",
        type: "array",
        schemaType: [
            "array"
        ],
        before: "uniqueItems",
        code: (e)=>ai.validateTuple(e, "items")
    };
    ci.default = np;
});
const hi = C(function(pi) {
    Object.defineProperty(pi, "__esModule", {
        value: true
    });
    const Ut = om();
    const li = i_();
    const di = Q();
    const fi = Rr();
    const ip = {
        message: ({ params: { len } })=>Ut.str`must NOT have more than ${len} items`,
        params: ({ params: { len } })=>Ut._`{limit: ${len}}`
    };
    const ap = {
        keyword: "items",
        type: "array",
        schemaType: [
            "object",
            "boolean"
        ],
        before: "uniqueItems",
        error: ip,
        code (e) {
            let { schema, parentSchema, it } = e;
            let { prefixItems } = parentSchema;
            it.items = true;
            if (li.alwaysValidSchema(it, schema)) {
                return;
            }
            if (prefixItems) {
                fi.validateAdditionalItems(e, prefixItems);
            } else {
                e.ok(di.validateArray(e));
            }
        }
    };
    pi.default = ap;
});
const yi = C(function(mi) {
    Object.defineProperty(mi, "__esModule", {
        value: true
    });
    const A = om();
    const ke = i_();
    const up = {
        message: ({ params: { min, max } })=>{
            if (max === undefined) {
                return A.str`must contain at least ${min} valid item(s)`;
            }
            return A.str`must contain at least ${min} and no more than ${max} valid item(s)`;
        },
        params: ({ params: { min, max } })=>{
            if (max === undefined) {
                return A._`{minContains: ${min}}`;
            }
            return A._`{minContains: ${min}, maxContains: ${max}}`;
        }
    };
    const lp = {
        keyword: "contains",
        type: "array",
        schemaType: [
            "object",
            "boolean"
        ],
        before: "uniqueItems",
        trackErrors: true,
        error: up,
        code (e) {
            let { gen, schema, parentSchema, data, it } = e;
            let min;
            let max;
            let { minContains, maxContains } = parentSchema;
            if (it.opts.next) {
                min = minContains === undefined ? 1 : minContains;
                max = maxContains;
            } else {
                min = 1;
            }
            let l = gen.const("len", A._`${data}.length`);
            e.setParams({
                min,
                max
            });
            if (max === undefined && min === 0) {
                ke.checkStrictMode(it, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
                return;
            }
            if (max !== undefined && min > max) {
                ke.checkStrictMode(it, '"minContains" > "maxContains" is always invalid');
                e.fail();
                return;
            }
            if (ke.alwaysValidSchema(it, schema)) {
                let p = A._`${l} >= ${min}`;
                if (max !== undefined) {
                    p = A._`${p} && ${l} <= ${max}`;
                }
                e.pass(p);
                return;
            }
            it.items = true;
            let f = gen.name("valid");
            if (max === undefined && min === 1) {
                _(f, ()=>gen.if(f, ()=>gen.break()));
            } else if (min === 0) {
                gen.let(f, true);
                if (max !== undefined) {
                    gen.if(A._`${data}.length > 0`, b);
                }
            } else {
                gen.let(f, false);
                b();
            }
            e.result(f, ()=>e.reset());
            function b() {
                let p = gen.name("_valid");
                let y = gen.let("count", 0);
                _(p, ()=>gen.if(p, ()=>h(y)));
            }
            function _(p, y) {
                gen.forRange("i", 0, l, (v)=>{
                    e.subschema({
                        keyword: "contains",
                        dataProp: v,
                        dataPropType: ke.Type.Num,
                        compositeRule: true
                    }, p);
                    y();
                });
            }
            function h(p) {
                gen.code(A._`${p}++`);
                if (max === undefined) {
                    gen.if(A._`${p} >= ${min}`, ()=>gen.assign(f, true).break());
                } else {
                    gen.if(A._`${p} > ${max}`, ()=>gen.assign(f, false).break());
                    if (min === 1) {
                        gen.assign(f, true);
                    } else {
                        gen.if(A._`${p} >= ${min}`, ()=>gen.assign(f, true));
                    }
                }
            }
        }
    };
    mi.default = lp;
});
const bfr = C(function(vi) {
    Object.defineProperty(vi, "__esModule", {
        value: true
    });
    vi.validateSchemaDeps = vi.validatePropertyDeps = vi.error = undefined;
    const et = om();
    const _i = i_();
    const de = Q();
    vi.error = {
        message: ({ params: { property, depsCount, deps } })=>et.str`must have ${depsCount === 1 ? "property" : "properties"} ${deps} when property ${property} is present`,
        params: ({ params: { property, depsCount, deps, missingProperty } })=>et._`{property: ${property},
    missingProperty: ${missingProperty},
    depsCount: ${depsCount},
    deps: ${deps}}`
    };
    const fp = {
        keyword: "dependencies",
        type: "object",
        schemaType: "object",
        error: vi.error,
        code (e) {
            let [t, r] = pp(e);
            gi(e, t);
            $i(e, r);
        }
    };
    function pp({ schema }) {
        let t = {};
        let r = {};
        for(let s in schema){
            if (s === "__proto__") {
                continue;
            }
            let n = Array.isArray(schema[s]) ? t : r;
            n[s] = schema[s];
        }
        return [
            t,
            r
        ];
    }
    function gi(e, t = e.schema) {
        let { gen, data, it } = e;
        if (Object.keys(t).length === 0) {
            return;
        }
        let o = gen.let("missing");
        for(let property in t){
            let a = t[property];
            if (a.length === 0) {
                continue;
            }
            let c = de.propertyInData(gen, data, property, it.opts.ownProperties);
            e.setParams({
                property,
                depsCount: a.length,
                deps: a.join(", ")
            });
            if (it.allErrors) {
                gen.if(c, ()=>{
                    for (let u of a){
                        de.checkReportMissingProp(e, u);
                    }
                });
            } else {
                gen.if(et._`${c} && (${de.checkMissingProp(e, a, o)})`);
                de.reportMissingProp(e, o);
                gen.else();
            }
        }
    }
    vi.validatePropertyDeps = gi;
    function $i(e, t = e.schema) {
        let { gen, data, keyword, it } = e;
        let i = gen.name("valid");
        for(let a in t){
            if (_i.alwaysValidSchema(it, t[a])) {
                continue;
            }
            gen.if(de.propertyInData(gen, data, a, it.opts.ownProperties), ()=>{
                let c = e.subschema({
                    keyword,
                    schemaProp: a
                }, i);
                e.mergeValidEvaluated(c, i);
            }, ()=>gen.var(i, true));
            e.ok(i);
        }
    }
    vi.validateSchemaDeps = $i;
    vi.default = fp;
});
const Pi = C(function(Si) {
    Object.defineProperty(Si, "__esModule", {
        value: true
    });
    const Kt = om();
    const Ei = i_();
    const yp = {
        message: "property name must be valid",
        params: ({ params })=>Kt._`{propertyName: ${params.propertyName}}`
    };
    const _p = {
        keyword: "propertyNames",
        type: "object",
        schemaType: [
            "object",
            "boolean"
        ],
        error: yp,
        code (e) {
            let { gen, schema, data, it } = e;
            if (Ei.alwaysValidSchema(it, schema)) {
                return;
            }
            let o = gen.name("valid");
            gen.forIn("key", data, (i)=>{
                e.setParams({
                    propertyName: i
                });
                e.subschema({
                    keyword: "propertyNames",
                    data: i,
                    dataTypes: [
                        "string"
                    ],
                    propertyName: i,
                    compositeRule: true
                }, o);
                gen.if(Kt.not(o), ()=>{
                    e.error(true);
                    if (!it.allErrors) {
                        gen.break();
                    }
                });
            });
            e.ok(o);
        }
    };
    Si.default = _p;
});
const Tr = C(function(Ni) {
    Object.defineProperty(Ni, "__esModule", {
        value: true
    });
    const qe = Q();
    const U = om();
    const $p = r_e();
    const Oe = i_();
    const vp = {
        message: "must NOT have additional properties",
        params: ({ params })=>U._`{additionalProperty: ${params.additionalProperty}}`
    };
    const wp = {
        keyword: "additionalProperties",
        type: [
            "object"
        ],
        schemaType: [
            "boolean",
            "object"
        ],
        allowUndefined: true,
        trackErrors: true,
        error: vp,
        code (e) {
            let { gen, schema, parentSchema, data, errsCount, it } = e;
            if (!errsCount) {
                throw Error("ajv implementation error");
            }
            let { allErrors, opts } = it;
            it.props = true;
            if (opts.removeAdditional !== "all" && Oe.alwaysValidSchema(it, schema)) {
                return;
            }
            let u = qe.allSchemaProperties(parentSchema.properties);
            let l = qe.allSchemaProperties(parentSchema.patternProperties);
            f();
            e.ok(U._`${errsCount} === ${$p.default.errors}`);
            function f() {
                gen.forIn("key", data, (y)=>{
                    if (!u.length && !l.length) {
                        h(y);
                    } else {
                        gen.if(b(y), ()=>h(y));
                    }
                });
            }
            function b(y) {
                let v;
                if (u.length > 8) {
                    let O = Oe.schemaRefOrVal(it, parentSchema.properties, "properties");
                    v = qe.isOwnProperty(gen, O, y);
                } else if (u.length) {
                    v = U.or(...u.map((O)=>U._`${y} === ${O}`));
                } else {
                    v = U.nil;
                }
                if (l.length) {
                    v = U.or(v, ...l.map((O)=>U._`${qe.usePattern(e, O)}.test(${y})`));
                }
                return U.not(v);
            }
            function _(additionalProperty) {
                gen.code(U._`delete ${data}[${additionalProperty}]`);
            }
            function h(additionalProperty) {
                if (opts.removeAdditional === "all" || opts.removeAdditional && schema === false) {
                    _(additionalProperty);
                    return;
                }
                if (schema === false) {
                    e.setParams({
                        additionalProperty
                    });
                    e.error();
                    if (!allErrors) {
                        gen.break();
                    }
                    return;
                }
                if (typeof schema === "object" && !Oe.alwaysValidSchema(it, schema)) {
                    let v = gen.name("valid");
                    if (opts.removeAdditional === "failing") {
                        p(additionalProperty, v, false);
                        gen.if(U.not(v), ()=>{
                            e.reset();
                            _(additionalProperty);
                        });
                    } else {
                        p(additionalProperty, v);
                        if (!allErrors) {
                            gen.if(U.not(v), ()=>gen.break());
                        }
                    }
                }
            }
            function p(additionalProperty, v, O) {
                let q = {
                    keyword: "additionalProperties",
                    dataProp: additionalProperty,
                    dataPropType: Oe.Type.Str
                };
                if (O === false) {
                    Object.assign(q, {
                        compositeRule: true,
                        createErrors: false,
                        allErrors: false
                    });
                }
                e.subschema(q, v);
            }
        }
    };
    Ni.default = wp;
});
const ji = C(function(Oi) {
    Object.defineProperty(Oi, "__esModule", {
        value: true
    });
    const qi = x5t();
    const Ft = Q();
    const tt = i_();
    const ki = Tr();
    const Ep = {
        keyword: "properties",
        type: "object",
        schemaType: "object",
        code (e) {
            let { gen, schema, parentSchema, data, it } = e;
            if (it.opts.removeAdditional === "all" && parentSchema.additionalProperties === undefined) {
                ki.default.code(new qi.KeywordCxt(it, ki.default, "additionalProperties"));
            }
            let i = Ft.allSchemaProperties(schema);
            for (let f of i){
                it.definedProperties.add(f);
            }
            if (it.opts.unevaluated && i.length && it.props !== true) {
                it.props = tt.mergeEvaluated.props(gen, tt.toHash(i), it.props);
            }
            let a = i.filter((f)=>!tt.alwaysValidSchema(it, schema[f]));
            if (a.length === 0) {
                return;
            }
            let c = gen.name("valid");
            for (let f of a){
                if (u(f)) {
                    l(f);
                } else {
                    gen.if(Ft.propertyInData(gen, data, f, it.opts.ownProperties));
                    l(f);
                    if (!it.allErrors) {
                        gen.else().var(c, true);
                    }
                    gen.endIf();
                }
                e.it.definedProperties.add(f);
                e.ok(c);
            }
            function u(f) {
                return it.opts.useDefaults && !it.compositeRule && schema[f].default !== undefined;
            }
            function l(f) {
                e.subschema({
                    keyword: "properties",
                    schemaProp: f,
                    dataProp: f
                }, c);
            }
        }
    };
    Oi.default = Ep;
});
const Ri = C(function(xi) {
    Object.defineProperty(xi, "__esModule", {
        value: true
    });
    const Lt = Q();
    const je = om();
    const Ht = i_();
    const Gt = i_();
    const Pp = {
        keyword: "patternProperties",
        type: "object",
        schemaType: "object",
        code (e) {
            let { gen, schema, data, parentSchema, it } = e;
            let { opts } = it;
            let a = Lt.allSchemaProperties(schema);
            let c = a.filter((p)=>Ht.alwaysValidSchema(it, schema[p]));
            if (a.length === 0 || c.length === a.length && (!it.opts.unevaluated || it.props === true)) {
                return;
            }
            let u = opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties;
            let l = gen.name("valid");
            if (it.props !== true && !(it.props instanceof je.Name)) {
                it.props = Gt.evaluatedPropsToName(gen, it.props);
            }
            let { props } = it;
            b();
            function b() {
                for (let p of a){
                    if (u) {
                        _(p);
                    }
                    if (it.allErrors) {
                        h(p);
                    } else {
                        gen.var(l, true);
                        h(p);
                        gen.if(l);
                    }
                }
            }
            function _(p) {
                for(let y in u){
                    if (new RegExp(p).test(y)) {
                        Ht.checkStrictMode(it, `property ${y} matches pattern ${p} (use allowMatchingProperties)`);
                    }
                }
            }
            function h(p) {
                gen.forIn("key", data, (y)=>{
                    gen.if(je._`${Lt.usePattern(e, p)}.test(${y})`, ()=>{
                        let v = c.includes(p);
                        if (!v) {
                            e.subschema({
                                keyword: "patternProperties",
                                schemaProp: p,
                                dataProp: y,
                                dataPropType: Gt.Type.Str
                            }, l);
                        }
                        if (it.opts.unevaluated && props !== true) {
                            gen.assign(je._`${props}[${y}]`, true);
                        } else if (!v && !it.allErrors) {
                            gen.if(je.not(l), ()=>gen.break());
                        }
                    });
                });
            }
        }
    };
    xi.default = Pp;
});
const Ci = C(function(Ti) {
    Object.defineProperty(Ti, "__esModule", {
        value: true
    });
    const Ii = i_();
    const kp = {
        keyword: "not",
        schemaType: [
            "object",
            "boolean"
        ],
        trackErrors: true,
        code (e) {
            let { gen, schema, it } = e;
            if (Ii.alwaysValidSchema(it, schema)) {
                e.fail();
                return;
            }
            let n = gen.name("valid");
            e.subschema({
                keyword: "not",
                compositeRule: true,
                createErrors: false,
                allErrors: false
            }, n);
            e.failResult(n, ()=>e.reset(), ()=>e.error());
        },
        error: {
            message: "must NOT be valid"
        }
    };
    Ti.default = kp;
});
const Di = C(function(Ai) {
    Object.defineProperty(Ai, "__esModule", {
        value: true
    });
    const Mi = Q();
    const Op = {
        keyword: "anyOf",
        schemaType: "array",
        trackErrors: true,
        code: Mi.validateUnion,
        error: {
            message: "must match a schema in anyOf"
        }
    };
    Ai.default = Op;
});
const Ui = C(function(zi) {
    Object.defineProperty(zi, "__esModule", {
        value: true
    });
    const xe = om();
    const Vi = i_();
    const xp = {
        message: "must match exactly one schema in oneOf",
        params: ({ params })=>xe._`{passingSchemas: ${params.passing}}`
    };
    const Rp = {
        keyword: "oneOf",
        schemaType: "array",
        trackErrors: true,
        error: xp,
        code (e) {
            let { gen, schema, parentSchema, it } = e;
            if (!Array.isArray(schema)) {
                throw Error("ajv implementation error");
            }
            if (it.opts.discriminator && parentSchema.discriminator) {
                return;
            }
            let o = schema;
            let i = gen.let("valid", false);
            let passing = gen.let("passing", null);
            let c = gen.name("_valid");
            e.setParams({
                passing
            });
            gen.block(u);
            e.result(i, ()=>e.reset(), ()=>e.error(true));
            function u() {
                o.forEach((l, f)=>{
                    let b;
                    if (Vi.alwaysValidSchema(it, l)) {
                        gen.var(c, true);
                    } else {
                        b = e.subschema({
                            keyword: "oneOf",
                            schemaProp: f,
                            compositeRule: true
                        }, c);
                    }
                    if (f > 0) {
                        gen.if(xe._`${c} && ${i}`).assign(i, false).assign(passing, xe._`[${passing}, ${f}]`).else();
                    }
                    gen.if(c, ()=>{
                        gen.assign(i, true);
                        gen.assign(passing, f);
                        if (b) {
                            e.mergeEvaluated(b, xe.Name);
                        }
                    });
                });
            }
        }
    };
    zi.default = Rp;
});
const Li = C(function(Fi) {
    Object.defineProperty(Fi, "__esModule", {
        value: true
    });
    const Ki = i_();
    const Tp = {
        keyword: "allOf",
        schemaType: "array",
        code (e) {
            let { gen, schema, it } = e;
            if (!Array.isArray(schema)) {
                throw Error("ajv implementation error");
            }
            let n = gen.name("valid");
            schema.forEach((o, i)=>{
                if (Ki.alwaysValidSchema(it, o)) {
                    return;
                }
                let a = e.subschema({
                    keyword: "allOf",
                    schemaProp: i
                }, n);
                e.ok(n);
                e.mergeEvaluated(a);
            });
        }
    };
    Fi.default = Tp;
});
const Ji = C(function(Gi) {
    Object.defineProperty(Gi, "__esModule", {
        value: true
    });
    const Re = om();
    const Jt = i_();
    const Mp = {
        message: ({ params })=>Re.str`must match "${params.ifClause}" schema`,
        params: ({ params })=>Re._`{failingKeyword: ${params.ifClause}}`
    };
    const Ap = {
        keyword: "if",
        schemaType: [
            "object",
            "boolean"
        ],
        trackErrors: true,
        error: Mp,
        code (e) {
            let { gen, parentSchema, it } = e;
            if (parentSchema.then === undefined && parentSchema.else === undefined) {
                Jt.checkStrictMode(it, '"if" without "then" and "else" is ignored');
            }
            let n = Hi(it, "then");
            let o = Hi(it, "else");
            if (!n && !o) {
                return;
            }
            let i = gen.let("valid", true);
            let a = gen.name("_valid");
            c();
            e.reset();
            if (n && o) {
                let ifClause = gen.let("ifClause");
                e.setParams({
                    ifClause
                });
                gen.if(a, u("then", ifClause), u("else", ifClause));
            } else if (n) {
                gen.if(a, u("then"));
            } else {
                gen.if(Re.not(a), u("else"));
            }
            e.pass(i, ()=>e.error(true));
            function c() {
                let l = e.subschema({
                    keyword: "if",
                    compositeRule: true,
                    createErrors: false,
                    allErrors: false
                }, a);
                e.mergeEvaluated(l);
            }
            function u(l, f) {
                return ()=>{
                    let b = e.subschema({
                        keyword: l
                    }, a);
                    gen.assign(i, a);
                    e.mergeValidEvaluated(b, i);
                    if (f) {
                        gen.assign(f, Re._`${l}`);
                    } else {
                        e.setParams({
                            ifClause: l
                        });
                    }
                };
            }
        }
    };
    function Hi(e, t) {
        let r = e.schema[t];
        return r !== undefined && !Jt.alwaysValidSchema(e, r);
    }
    Gi.default = Ap;
});
const Qi = C(function(Bi) {
    Object.defineProperty(Bi, "__esModule", {
        value: true
    });
    const Wi = i_();
    const Vp = {
        keyword: [
            "then",
            "else"
        ],
        schemaType: [
            "object",
            "boolean"
        ],
        code ({ keyword, parentSchema, it }) {
            if (parentSchema.if === undefined) {
                Wi.checkStrictMode(it, `"${keyword}" without "if" is ignored`);
            }
        }
    };
    Bi.default = Vp;
});
const pso = C(function(Xi) {
    Object.defineProperty(Xi, "__esModule", {
        value: true
    });
    const Up = Rr();
    const Kp = ui();
    const Fp = Ir();
    const Lp = hi();
    const Hp = yi();
    const Gp = bfr();
    const Jp = Pi();
    const Wp = Tr();
    const Bp = ji();
    const Qp = Ri();
    const Xp = Ci();
    const Yp = Di();
    const Zp = Ui();
    const eh = Li();
    const th = Ji();
    const rh = Qi();
    function sh(e = false) {
        let t = [
            Xp.default,
            Yp.default,
            Zp.default,
            eh.default,
            th.default,
            rh.default,
            Jp.default,
            Wp.default,
            Gp.default,
            Bp.default,
            Qp.default
        ];
        if (e) {
            t.push(Kp.default, Lp.default);
        } else {
            t.push(Up.default, Fp.default);
        }
        t.push(Hp.default);
        return t;
    }
    Xi.default = sh;
});
const Zi = C(function(Yi) {
    Object.defineProperty(Yi, "__esModule", {
        value: true
    });
    const k = om();
    const oh = {
        message: ({ schemaCode })=>k.str`must match format "${schemaCode}"`,
        params: ({ schemaCode })=>k._`{format: ${schemaCode}}`
    };
    const ih = {
        keyword: "format",
        type: [
            "number",
            "string"
        ],
        schemaType: "string",
        $data: true,
        error: oh,
        code (e, t) {
            let { gen, data, $data, schema, schemaCode, it } = e;
            let { opts, errSchemaPath, schemaEnv, self } = it;
            if (!opts.validateFormats) {
                return;
            }
            if ($data) {
                b();
            } else {
                _();
            }
            function b() {
                let h = gen.scopeValue("formats", {
                    ref: self.formats,
                    code: opts.code.formats
                });
                let p = gen.const("fDef", k._`${h}[${schemaCode}]`);
                let y = gen.let("fType");
                let v = gen.let("format");
                gen.if(k._`typeof ${p} == "object" && !(${p} instanceof RegExp)`, ()=>gen.assign(y, k._`${p}.type || "string"`).assign(v, k._`${p}.validate`), ()=>gen.assign(y, k._`"string"`).assign(v, p));
                e.fail$data(k.or(O(), q()));
                function O() {
                    if (opts.strictSchema === false) {
                        return k.nil;
                    }
                    return k._`${schemaCode} && !${v}`;
                }
                function q() {
                    let M = schemaEnv.$async ? k._`(${p}.async ? await ${v}(${data}) : ${v}(${data}))` : k._`${v}(${data})`;
                    let N = k._`(typeof ${v} == "function" ? ${M} : ${v}.test(${data}))`;
                    return k._`${v} && ${v} !== true && ${y} === ${t} && !${N}`;
                }
            }
            function _() {
                let h = self.formats[schema];
                if (!h) {
                    O();
                    return;
                }
                if (h === true) {
                    return;
                }
                let [p, y, v] = q(h);
                if (p === t) {
                    e.pass(M());
                }
                function O() {
                    if (opts.strictSchema === false) {
                        self.logger.warn(N());
                        return;
                    }
                    throw Error(N());
                    function N() {
                        return `unknown format "${schema}" ignored in schema at path "${errSchemaPath}"`;
                    }
                }
                function q(N) {
                    let code = N instanceof RegExp ? k.regexpCode(N) : opts.code.formats ? k._`${opts.code.formats}${k.getProperty(schema)}` : undefined;
                    let fe = gen.scopeValue("formats", {
                        key: schema,
                        ref: N,
                        code
                    });
                    if (typeof N === "object" && !(N instanceof RegExp)) {
                        return [
                            N.type || "string",
                            N.validate,
                            k._`${fe}.validate`
                        ];
                    }
                    return [
                        "string",
                        N,
                        fe
                    ];
                }
                function M() {
                    if (typeof h === "object" && !(h instanceof RegExp) && h.async) {
                        if (!schemaEnv.$async) {
                            throw Error("async format in sync schema");
                        }
                        return k._`await ${v}(${data})`;
                    }
                    if (typeof y === "function") {
                        return k._`${v}(${data})`;
                    }
                    return k._`${v}.test(${data})`;
                }
            }
        }
    };
    Yi.default = ih;
});
const fso = C(function(ea) {
    Object.defineProperty(ea, "__esModule", {
        value: true
    });
    const ch = Zi();
    const uh = [
        ch.default
    ];
    ea.default = uh;
});
const mso = C(function(ta) {
    Object.defineProperty(ta, "__esModule", {
        value: true
    });
    ta.contentVocabulary = ta.metadataVocabulary = undefined;
    ta.metadataVocabulary = [
        "title",
        "description",
        "default",
        "deprecated",
        "readOnly",
        "writeOnly",
        "examples"
    ];
    ta.contentVocabulary = [
        "contentMediaType",
        "contentEncoding",
        "contentSchema"
    ];
});
const na = C(function(sa) {
    Object.defineProperty(sa, "__esModule", {
        value: true
    });
    const fh = dso();
    const ph = uso();
    const hh = pso();
    const mh = fso();
    const Wt = mso();
    const yh = [
        fh.default,
        ph.default,
        hh.default(),
        mh.default,
        Wt.metadataVocabulary,
        Wt.contentVocabulary
    ];
    sa.default = yh;
});
const ca = C(function(ia) {
    Object.defineProperty(ia, "__esModule", {
        value: true
    });
    ia.DiscrError = undefined;
    let oa;
    ((e)=>{
        e.Tag = "tag";
        e.Mapping = "mapping";
    })(oa || (ia.DiscrError = oa = {}));
});
const gso = C(function(la) {
    Object.defineProperty(la, "__esModule", {
        value: true
    });
    const Y = om();
    const rt = ca();
    const Bt = TMn();
    const gh = P5t();
    const ua = i_();
    const $h = {
        message: ({ params: { discrError, tagName } })=>{
            if (discrError === rt.DiscrError.Tag) {
                return `tag "${tagName}" must be string`;
            }
            return `value of tag "${tagName}" must be in oneOf`;
        },
        params: ({ params: { discrError, tag, tagName } })=>Y._`{error: ${discrError}, tag: ${tagName}, tagValue: ${tag}}`
    };
    const vh = {
        keyword: "discriminator",
        type: "object",
        schemaType: "object",
        error: $h,
        code (e) {
            let { gen, data, schema, parentSchema, it } = e;
            let { oneOf } = parentSchema;
            if (!it.opts.discriminator) {
                throw Error("discriminator: requires discriminator option");
            }
            let schema_propertyName = schema.propertyName;
            if (typeof schema_propertyName !== "string") {
                throw Error("discriminator: requires propertyName");
            }
            if (schema.mapping) {
                throw Error("discriminator: mapping is not supported");
            }
            if (!oneOf) {
                throw Error("discriminator: requires oneOf keyword");
            }
            let c = gen.let("valid", false);
            let tag = gen.const("tag", Y._`${data}${Y.getProperty(schema_propertyName)}`);
            gen.if(Y._`typeof ${tag} == "string"`, ()=>l(), ()=>e.error(false, {
                    discrError: rt.DiscrError.Tag,
                    tag,
                    tagName: schema_propertyName
                }));
            e.ok(c);
            function l() {
                let _ = b();
                gen.if(false);
                for(let h in _){
                    gen.elseIf(Y._`${tag} === ${h}`);
                    gen.assign(c, f(_[h]));
                }
                gen.else();
                e.error(false, {
                    discrError: rt.DiscrError.Mapping,
                    tag,
                    tagName: schema_propertyName
                });
                gen.endIf();
            }
            function f(_) {
                let h = gen.name("valid");
                let p = e.subschema({
                    keyword: "oneOf",
                    schemaProp: _
                }, h);
                e.mergeEvaluated(p, Y.Name);
                return h;
            }
            function b() {
                let h = {};
                let p = v(parentSchema);
                let y = true;
                for(let M = 0; M < oneOf.length; M++){
                    let N = oneOf[M];
                    if (N?.$ref && !ua.schemaHasRulesButRef(N, it.self.RULES)) {
                        let fe = N.$ref;
                        N = Bt.resolveRef.call(it.self, it.schemaEnv.root, it.baseId, fe);
                        if (N instanceof Bt.SchemaEnv) {
                            N = N.schema;
                        }
                        if (N === undefined) {
                            throw new gh.default(it.opts.uriResolver, it.baseId, fe);
                        }
                    }
                    let ee = N?.properties?.[schema_propertyName];
                    if (typeof ee !== "object") {
                        throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${schema_propertyName}"`);
                    }
                    y = y && (p || v(N));
                    O(ee, M);
                }
                if (!y) {
                    throw Error(`discriminator: "${schema_propertyName}" must be required`);
                }
                return h;
                function v({ required }) {
                    return Array.isArray(required) && required.includes(schema_propertyName);
                }
                function O(M, N) {
                    if (M.const) {
                        q(M.const, N);
                    } else if (M.enum) {
                        for (let ee of M.enum){
                            q(ee, N);
                        }
                    } else {
                        throw Error(`discriminator: "properties/${schema_propertyName}" must have "const" or "enum"`);
                    }
                }
                function q(M, N) {
                    if (typeof M !== "string" || M in h) {
                        throw Error(`discriminator: "${schema_propertyName}" values must be unique strings`);
                    }
                    h[M] = N;
                }
            }
        }
    };
    la.default = vh;
});
const da = C(function(ay, bh) {
    bh.exports = {
        $schema: "http://json-schema.org/draft-07/schema#",
        $id: "http://json-schema.org/draft-07/schema#",
        title: "Core schema meta-schema",
        definitions: {
            schemaArray: {
                type: "array",
                minItems: 1,
                items: {
                    $ref: "#"
                }
            },
            nonNegativeInteger: {
                type: "integer",
                minimum: 0
            },
            nonNegativeIntegerDefault0: {
                allOf: [
                    {
                        $ref: "#/definitions/nonNegativeInteger"
                    },
                    {
                        default: 0
                    }
                ]
            },
            simpleTypes: {
                enum: [
                    "array",
                    "boolean",
                    "integer",
                    "null",
                    "number",
                    "object",
                    "string"
                ]
            },
            stringArray: {
                type: "array",
                items: {
                    type: "string"
                },
                uniqueItems: true,
                default: []
            }
        },
        type: [
            "object",
            "boolean"
        ],
        properties: {
            $id: {
                type: "string",
                format: "uri-reference"
            },
            $schema: {
                type: "string",
                format: "uri"
            },
            $ref: {
                type: "string",
                format: "uri-reference"
            },
            $comment: {
                type: "string"
            },
            title: {
                type: "string"
            },
            description: {
                type: "string"
            },
            default: true,
            readOnly: {
                type: "boolean",
                default: false
            },
            examples: {
                type: "array",
                items: true
            },
            multipleOf: {
                type: "number",
                exclusiveMinimum: 0
            },
            maximum: {
                type: "number"
            },
            exclusiveMaximum: {
                type: "number"
            },
            minimum: {
                type: "number"
            },
            exclusiveMinimum: {
                type: "number"
            },
            maxLength: {
                $ref: "#/definitions/nonNegativeInteger"
            },
            minLength: {
                $ref: "#/definitions/nonNegativeIntegerDefault0"
            },
            pattern: {
                type: "string",
                format: "regex"
            },
            additionalItems: {
                $ref: "#"
            },
            items: {
                anyOf: [
                    {
                        $ref: "#"
                    },
                    {
                        $ref: "#/definitions/schemaArray"
                    }
                ],
                default: true
            },
            maxItems: {
                $ref: "#/definitions/nonNegativeInteger"
            },
            minItems: {
                $ref: "#/definitions/nonNegativeIntegerDefault0"
            },
            uniqueItems: {
                type: "boolean",
                default: false
            },
            contains: {
                $ref: "#"
            },
            maxProperties: {
                $ref: "#/definitions/nonNegativeInteger"
            },
            minProperties: {
                $ref: "#/definitions/nonNegativeIntegerDefault0"
            },
            required: {
                $ref: "#/definitions/stringArray"
            },
            additionalProperties: {
                $ref: "#"
            },
            definitions: {
                type: "object",
                additionalProperties: {
                    $ref: "#"
                },
                default: {}
            },
            properties: {
                type: "object",
                additionalProperties: {
                    $ref: "#"
                },
                default: {}
            },
            patternProperties: {
                type: "object",
                additionalProperties: {
                    $ref: "#"
                },
                propertyNames: {
                    format: "regex"
                },
                default: {}
            },
            dependencies: {
                type: "object",
                additionalProperties: {
                    anyOf: [
                        {
                            $ref: "#"
                        },
                        {
                            $ref: "#/definitions/stringArray"
                        }
                    ]
                }
            },
            propertyNames: {
                $ref: "#"
            },
            const: true,
            enum: {
                type: "array",
                items: true,
                minItems: 1,
                uniqueItems: true
            },
            type: {
                anyOf: [
                    {
                        $ref: "#/definitions/simpleTypes"
                    },
                    {
                        type: "array",
                        items: {
                            $ref: "#/definitions/simpleTypes"
                        },
                        minItems: 1,
                        uniqueItems: true
                    }
                ]
            },
            format: {
                type: "string"
            },
            contentMediaType: {
                type: "string"
            },
            contentEncoding: {
                type: "string"
            },
            if: {
                $ref: "#"
            },
            then: {
                $ref: "#"
            },
            else: {
                $ref: "#"
            },
            allOf: {
                $ref: "#/definitions/schemaArray"
            },
            anyOf: {
                $ref: "#/definitions/schemaArray"
            },
            oneOf: {
                $ref: "#/definitions/schemaArray"
            },
            not: {
                $ref: "#"
            }
        },
        default: true
    };
});
const AMn = C(function(W, Cr) {
    Object.defineProperty(W, "__esModule", {
        value: true
    });
    W.MissingRefError = W.ValidationError = W.CodeGen = W.Name = W.nil = W.stringify = W.str = W._ = W.KeywordCxt = W.Ajv = undefined;
    const Eh = cso();
    const Sh = na();
    const Ph = gso();
    const fa = da();
    const Nh = [
        "/properties"
    ];
    const Qt = "http://json-schema.org/draft-07/schema";
    class pt extends Eh.default {
        _addVocabularies() {
            super._addVocabularies();
            Sh.default.forEach((e)=>this.addVocabulary(e));
            if (this.opts.discriminator) {
                this.addKeyword(Ph.default);
            }
        }
        _addDefaultMetaSchema() {
            super._addDefaultMetaSchema();
            if (!this.opts.meta) {
                return;
            }
            let e = this.opts.$data ? this.$dataMetaSchema(fa, Nh) : fa;
            this.addMetaSchema(e, Qt, false);
            this.refs["http://json-schema.org/schema"] = Qt;
        }
        defaultMeta() {
            return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(Qt) ? Qt : undefined);
        }
    }
    W.Ajv = pt;
    Cr.exports = W = pt;
    Cr.exports.Ajv = pt;
    Object.defineProperty(W, "__esModule", {
        value: true
    });
    W.default = pt;
    const kh = x5t();
    Object.defineProperty(W, "KeywordCxt", {
        enumerable: true,
        get: function() {
            return kh.KeywordCxt;
        }
    });
    const st = om();
    Object.defineProperty(W, "_", {
        enumerable: true,
        get: function() {
            return st._;
        }
    });
    Object.defineProperty(W, "str", {
        enumerable: true,
        get: function() {
            return st.str;
        }
    });
    Object.defineProperty(W, "stringify", {
        enumerable: true,
        get: function() {
            return st.stringify;
        }
    });
    Object.defineProperty(W, "nil", {
        enumerable: true,
        get: function() {
            return st.nil;
        }
    });
    Object.defineProperty(W, "Name", {
        enumerable: true,
        get: function() {
            return st.Name;
        }
    });
    Object.defineProperty(W, "CodeGen", {
        enumerable: true,
        get: function() {
            return st.CodeGen;
        }
    });
    const qh = kMn();
    Object.defineProperty(W, "ValidationError", {
        enumerable: true,
        get: function() {
            return qh.default;
        }
    });
    const Oh = P5t();
    Object.defineProperty(W, "MissingRefError", {
        enumerable: true,
        get: function() {
            return Oh.default;
        }
    });
});
export { om, i_, r_e, x5t, kMn, P5t, TMn, cso, _fr, dso, uso, bfr, pso, fso, mso, gso, AMn };
